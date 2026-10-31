// Two backends with the same shape:
//   firebaseBackend: GitHub sign-in through Firebase Auth, progress in Cloud Firestore.
//   demoBackend: a pretend sign-in, progress in this browser's localStorage. Used when no Firebase config is set, or with ?demo in the URL.
//
// Firestore layout (see firestore.rules):
//   roster/{githubId}    { login, name }            who may use the site. Written by the teacher.
//   requests/{githubId}  { login, name, ts }        someone signed in who is not on the roster yet.
//   users/{firebaseUid}  { ghId, login, name, photo, firstSeen, lastActive, decks: { <deckId>: { cards, mocks } } }

export async function firebaseBackend(config, firebaseUrl) {
  const fb = await import(/* @vite-ignore */ firebaseUrl);
  const app = fb.initializeApp(config);
  const auth = fb.getAuth(app);
  const db = fb.getFirestore(app);
  let login = null;

  const toUser = (u) => {
    if (!u) return null;
    const gh = u.providerData.find((p) => p.providerId === "github.com");
    return { uid: u.uid, ghId: gh ? gh.uid : null, login, name: u.displayName || gh?.displayName || "", photo: u.photoURL || gh?.photoURL || "" };
  };

  return {
    mode: "firebase",
    onAuth(cb) { fb.onAuthStateChanged(auth, (u) => cb(toUser(u))); },
    async signIn() {
      const provider = new fb.GithubAuthProvider();
      const res = await fb.signInWithPopup(auth, provider);
      login = fb.getAdditionalUserInfo(res)?.username || null;
      return toUser(res.user);
    },
    async signOut() { await fb.signOut(auth); },
    async onRoster(user) {
      try { return (await fb.getDoc(fb.doc(db, "roster", user.ghId))).exists(); }
      catch (e) { return false; }
    },
    async requestAccess(user) {
      try { await fb.setDoc(fb.doc(db, "requests", user.ghId), { login: user.login || "", name: user.name || "", ts: Date.now() }); } catch (e) { /* already asked */ }
    },
    async loadUser(uid) { const s = await fb.getDoc(fb.doc(db, "users", uid)); return s.exists() ? s.data() : null; },
    async saveUser(uid, data) { await fb.setDoc(fb.doc(db, "users", uid), data); },
    async listUsers() { return (await fb.getDocs(fb.collection(db, "users"))).docs.map((d) => ({ uid: d.id, ...d.data() })); },
    async listRoster() { return (await fb.getDocs(fb.collection(db, "roster"))).docs.map((d) => ({ ghId: d.id, ...d.data() })); },
    async listRequests() { return (await fb.getDocs(fb.collection(db, "requests"))).docs.map((d) => ({ ghId: d.id, ...d.data() })); },
    async addRoster(entries) { for (const e of entries) await fb.setDoc(fb.doc(db, "roster", e.ghId), { login: e.login, name: e.name }); },
    async removeRoster(ghId) { await fb.deleteDoc(fb.doc(db, "roster", ghId)); },
    async removeRequest(ghId) { await fb.deleteDoc(fb.doc(db, "requests", ghId)); },
  };
}

// ---------------------------------------------------------------------------------------------- demo
const KEY = "csp-review-demo-v1";
function readStore() {
  try { return JSON.parse(localStorage.getItem(KEY)) || null; } catch (e) { return null; }
}
let memory = null;
function store() {
  if (!memory) memory = readStore() || { session: null, users: {}, roster: {}, requests: {} };
  return memory;
}
function persist() { try { localStorage.setItem(KEY, JSON.stringify(memory)); } catch (e) { /* storage blocked: keep it in memory */ } }

export function demoBackend({ teacherGithubIds, seed }) {
  const people = {
    student: { uid: "demo-student", ghId: "1000001", login: "demo-student", name: "Demo Student", photo: "" },
    teacher: { uid: "demo-teacher", ghId: teacherGithubIds[0] || "1", login: "jd12", name: "J.D. DeVaughn-Brown", photo: "" },
    stranger: { uid: "demo-stranger", ghId: "1000099", login: "not-on-the-list", name: "Not On The List", photo: "" },
  };
  let listener = () => {};
  const s = store();
  if (!s.seeded && seed) { seed(s, people); s.seeded = true; persist(); }
  s.roster[people.student.ghId] = { login: people.student.login, name: "Demo Student" };

  return {
    mode: "demo",
    people,
    onAuth(cb) { listener = cb; cb(s.session ? people[s.session] : null); },
    async signIn(as = "student") { s.session = as; persist(); listener(people[as]); return people[as]; },
    async signOut() { s.session = null; persist(); listener(null); },
    async onRoster(user) { return !!s.roster[user.ghId]; },
    async requestAccess(user) { s.requests[user.ghId] = { login: user.login, name: user.name, ts: Date.now() }; persist(); },
    async loadUser(uid) { return s.users[uid] ? JSON.parse(JSON.stringify(s.users[uid])) : null; },
    async saveUser(uid, data) { s.users[uid] = JSON.parse(JSON.stringify(data)); persist(); },
    async listUsers() { return Object.entries(s.users).map(([uid, d]) => ({ uid, ...d })); },
    async listRoster() { return Object.entries(s.roster).map(([ghId, d]) => ({ ghId, ...d })); },
    async listRequests() { return Object.entries(s.requests).map(([ghId, d]) => ({ ghId, ...d })); },
    async addRoster(entries) { for (const e of entries) s.roster[e.ghId] = { login: e.login, name: e.name }; persist(); },
    async removeRoster(ghId) { delete s.roster[ghId]; persist(); },
    async removeRequest(ghId) { delete s.requests[ghId]; persist(); },
    reset() { memory = null; try { localStorage.removeItem(KEY); } catch (e) { /* ignore */ } },
  };
}

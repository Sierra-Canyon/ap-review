// Two backends with the same shape:
//   firebaseBackend: sign-in through Firebase Auth (GitHub, or a school email and password), data in Cloud Firestore.
//   demoBackend: a pretend sign-in, data in this browser's localStorage. Used when no Firebase config is set, or with ?demo in the URL.
//
// One record per student, whichever way they sign in. Firestore layout (see firestore.rules):
//   students/{id}   { name, email, ghId, login, courses }   the roster. id is the lowercase school email, or gh-<GitHub number>
//                                                            for a student whose email is not on file yet. Written by teachers.
//                    name is the name the student goes by in class; email is the official school address (the sign-in).
//   progress/{id}   { decks: { <deckId>: { cards, mocks } }, book, firstSeen, lastActive, pwSet }   written by the student.
//   cards/{id}      { password, ts }   the first password a teacher made for a student. Teachers only.
//   teachers/{email} { name, courses }  who may see a course's Class tab. The admin (firebase-config.js) adds teachers.
//   requests/{ghId} { login, name, ts }  a GitHub account that signed in and is on no roster.
//   edits/{deck}:{item} { deck, item, fields, answer?, hidden?, by, ts }  a teacher's change to a question (see edits.js).
//   assessments/{id} { courses, deck, name, date, topics, by, ts }  a quiz or test a teacher put on the calendar, with the
//                    units ("u2") or topics ("2.3") it covers. Students see a countdown and a review set for it.
//   roster/, users/                      the layout before 11/1, read once to move it over.

const lower = (s) => String(s || "").trim().toLowerCase();
export const studentId = (e) => (e.email ? lower(e.email) : e.ghId ? "gh-" + e.ghId : "");

export async function firebaseBackend(config, firebaseUrl, { adminGithubIds = [] } = {}) {
  const fb = await import(/* @vite-ignore */ firebaseUrl);
  const app = fb.initializeApp(config);
  const auth = fb.getAuth(app);
  const db = fb.getFirestore(app);
  let login = null;
  // A second app makes students' accounts without signing the teacher out.
  let maker = null;
  const makerAuth = () => (maker ||= fb.getAuth(fb.initializeApp(config, "account-maker")));

  const toUser = (u) => {
    if (!u) return null;
    const gh = u.providerData.find((p) => p.providerId === "github.com");
    const pw = u.providerData.find((p) => p.providerId === "password");
    return {
      uid: u.uid, provider: gh ? "github" : "password", ghId: gh ? String(gh.uid) : null, email: pw ? lower(u.email) : null,
      login, name: u.displayName || gh?.displayName || "", photo: u.photoURL || gh?.photoURL || "",
    };
  };
  const one = async (q) => { const s = await fb.getDocs(q); return s.empty ? null : { id: s.docs[0].id, ...s.docs[0].data() }; };
  const all = async (q) => (await fb.getDocs(q)).docs.map((d) => ({ id: d.id, ...d.data() }));
  const get = async (col, id) => { const s = await fb.getDoc(fb.doc(db, col, id)); return s.exists() ? { id: s.id, ...s.data() } : null; };

  return {
    mode: "firebase",
    onAuth(cb) { fb.onAuthStateChanged(auth, (u) => cb(toUser(u))); },
    async signInGithub() {
      const res = await fb.signInWithPopup(auth, new fb.GithubAuthProvider());
      login = fb.getAdditionalUserInfo(res)?.username || null;
      return toUser(res.user);
    },
    async signInEmail(email, password) { return toUser((await fb.signInWithEmailAndPassword(auth, lower(email), password)).user); },
    async signOut() { await fb.signOut(auth); },
    async sendReset(email) { await fb.sendPasswordResetEmail(auth, lower(email)); },
    async setPassword(next, current) {
      if (current) await fb.reauthenticateWithCredential(auth.currentUser, fb.EmailAuthProvider.credential(auth.currentUser.email, current));
      await fb.updatePassword(auth.currentUser, next);
    },

    // Who is this? A teacher (the admin, or a teachers/ document for their email), and/or a student record.
    async whoIs(user) {
      const admin = !!user.ghId && adminGithubIds.includes(String(user.ghId));
      let teacher = admin ? { admin: true, courses: null } : null;
      if (!teacher && user.email) { const t = await get("teachers", user.email).catch(() => null); if (t) teacher = { ...t, admin: false }; }
      let student = null;
      try {
        if (user.ghId) student = await one(fb.query(fb.collection(db, "students"), fb.where("ghId", "==", String(user.ghId)), fb.limit(1)));
        if (!student && user.email) student = await one(fb.query(fb.collection(db, "students"), fb.where("email", "==", user.email), fb.limit(1)));
      } catch (e) { student = null; }
      return { teacher, student };
    },
    async loadProgress(id) { const p = await get("progress", id); return p ? (delete p.id, p) : null; },
    async saveProgress(id, data) { await fb.setDoc(fb.doc(db, "progress", id), data); },
    async loadOldUser(uid) { return get("users", uid).catch(() => null); },
    async requestAccess(user) {
      try { await fb.setDoc(fb.doc(db, "requests", String(user.ghId)), { login: user.login || "", name: user.name || "", ts: Date.now() }); } catch (e) { /* already asked */ }
    },

    // Teachers
    async listStudents(courseId) { return all(fb.query(fb.collection(db, "students"), fb.where("courses", "array-contains", courseId))); },
    async findStudent({ email, ghId }) {
      if (email) { const s = await one(fb.query(fb.collection(db, "students"), fb.where("email", "==", lower(email)), fb.limit(1))); if (s) return s; }
      if (ghId) return one(fb.query(fb.collection(db, "students"), fb.where("ghId", "==", String(ghId)), fb.limit(1)));
      return null;
    },
    async saveStudent(id, data) { await fb.setDoc(fb.doc(db, "students", id), data); },
    async deleteStudent(id) { await fb.deleteDoc(fb.doc(db, "students", id)); },
    async loadProgressMany(ids) { return Object.fromEntries(await Promise.all(ids.map(async (id) => [id, await get("progress", id).catch(() => null)]))); },
    async deleteProgress(id) { await fb.deleteDoc(fb.doc(db, "progress", id)); },
    async getCard(id) { return get("cards", id).catch(() => null); },
    async saveCard(id, data) { await fb.setDoc(fb.doc(db, "cards", id), data); },
    // Makes a sign-in for a school email. Returns "created", or "exists" when the email already has one.
    async createLogin(email, password) {
      const a = makerAuth();
      try { await fb.createUserWithEmailAndPassword(a, lower(email), password); await fb.signOut(a); return "created"; }
      catch (e) { try { await fb.signOut(a); } catch (x) { /* ignore */ } if (e?.code === "auth/email-already-in-use") return "exists"; throw e; }
    },
    async listRequests() { return all(fb.collection(db, "requests")).then((r) => r.map((x) => ({ ...x, ghId: x.id }))); },
    async removeRequest(ghId) { await fb.deleteDoc(fb.doc(db, "requests", String(ghId))); },
    async listTeachers() { return all(fb.collection(db, "teachers")); },
    async saveTeacher(email, data) { await fb.setDoc(fb.doc(db, "teachers", lower(email)), data); },
    async deleteTeacher(email) { await fb.deleteDoc(fb.doc(db, "teachers", lower(email))); },
    async listEdits() { return all(fb.collection(db, "edits")); },
    async listAssessments() { return all(fb.collection(db, "assessments")); },
    async saveAssessment(id, data) { await fb.setDoc(fb.doc(db, "assessments", id), data); },
    async deleteAssessment(id) { await fb.deleteDoc(fb.doc(db, "assessments", id)); },
    async saveEdit(id, data) { await fb.setDoc(fb.doc(db, "edits", id), data); },
    async deleteEdit(id) { await fb.deleteDoc(fb.doc(db, "edits", id)); },
    async listOldRoster() { return all(fb.collection(db, "roster")).catch(() => []); },
    async listOldUsers() { return all(fb.collection(db, "users")).catch(() => []); },
  };
}

// ---------------------------------------------------------------------------------------------- demo
const KEY = "ap-review-demo-v4";
function readStore() {
  try { return JSON.parse(localStorage.getItem(KEY)) || null; } catch (e) { return null; }
}
let memory = null;
function store() {
  if (!memory) memory = readStore() || { session: null, students: {}, progress: {}, cards: {}, teachers: {}, requests: {}, accounts: {}, sent: [], edits: {}, assessments: {} };
  return memory;
}
function persist() { try { localStorage.setItem(KEY, JSON.stringify(memory)); } catch (e) { /* storage blocked: keep it in memory */ } }
const copy = (x) => (x == null ? x : JSON.parse(JSON.stringify(x)));

export function demoBackend({ adminGithubIds, seed }) {
  const people = {
    student: { uid: "demo-student", provider: "github", ghId: "1000001", email: null, login: "demo-student", name: "Demo Student", photo: "" },
    teacher: { uid: "demo-teacher", provider: "github", ghId: adminGithubIds[0] || "1", email: null, login: "jd12", name: "J.D. DeVaughn-Brown", photo: "" },
    stranger: { uid: "demo-stranger", provider: "github", ghId: "1000099", email: null, login: "not-on-the-list", name: "Not On The List", photo: "" },
  };
  let listener = () => {};
  const s = store();
  if (!s.seeded && seed) { seed(s, people); s.seeded = true; persist(); }
  const studentOf = (u) => Object.entries(s.students).map(([id, d]) => ({ id, ...d }))
    .find((x) => (u.ghId && x.ghId === String(u.ghId)) || (u.email && x.email === u.email)) || null;
  const emailUser = (email) => ({ uid: "demo-pw-" + email, provider: "password", ghId: null, email, login: "", name: "", photo: "" });
  const current = () => (s.session?.startsWith("pw:") ? emailUser(s.session.slice(3)) : people[s.session] || null);

  return {
    mode: "demo",
    people,
    onAuth(cb) { listener = cb; cb(current()); },
    async signInGithub(as = "student") { s.session = as; persist(); listener(people[as]); return people[as]; },
    async signInEmail(email, password) {
      const e = lower(email), acct = s.accounts[e];
      if (!acct || acct.password !== password) throw Object.assign(new Error("wrong"), { code: "auth/invalid-credential" });
      s.session = "pw:" + e; persist(); const u = emailUser(e); listener(u); return u;
    },
    async signOut() { s.session = null; persist(); listener(null); },
    async sendReset(email) { s.sent.push({ email: lower(email), ts: Date.now() }); persist(); },
    async setPassword(next, currentPw) {
      const e = s.session?.slice(3), acct = s.accounts[e];
      if (currentPw !== undefined && acct.password !== currentPw) throw Object.assign(new Error("wrong"), { code: "auth/invalid-credential" });
      acct.password = next; persist();
    },
    async whoIs(u) {
      const admin = !!u.ghId && adminGithubIds.includes(String(u.ghId));
      const t = !admin && u.email ? s.teachers[u.email] : null;
      return { teacher: admin ? { admin: true, courses: null } : t ? { ...copy(t), admin: false } : null, student: copy(studentOf(u)) };
    },
    async loadProgress(id) { return copy(s.progress[id]) || null; },
    async saveProgress(id, data) { s.progress[id] = copy(data); persist(); },
    async loadOldUser() { return null; },
    async requestAccess(u) { s.requests[u.ghId] = { login: u.login, name: u.name, ts: Date.now() }; persist(); },
    async listStudents(courseId) { return Object.entries(s.students).map(([id, d]) => ({ id, ...copy(d) })).filter((x) => (x.courses || []).includes(courseId)); },
    async findStudent({ email, ghId }) {
      const list = Object.entries(s.students).map(([id, d]) => ({ id, ...copy(d) }));
      return list.find((x) => email && x.email === lower(email)) || list.find((x) => ghId && x.ghId === String(ghId)) || null;
    },
    async saveStudent(id, data) { s.students[id] = copy(data); persist(); },
    async deleteStudent(id) { delete s.students[id]; persist(); },
    async loadProgressMany(ids) { return Object.fromEntries(ids.map((id) => [id, copy(s.progress[id]) || null])); },
    async deleteProgress(id) { delete s.progress[id]; persist(); },
    async getCard(id) { return copy(s.cards[id]) || null; },
    async saveCard(id, data) { s.cards[id] = copy(data); persist(); },
    async createLogin(email, password) { const e = lower(email); if (s.accounts[e]) return "exists"; s.accounts[e] = { password }; persist(); return "created"; },
    async listRequests() { return Object.entries(s.requests).map(([ghId, d]) => ({ ghId, ...d })); },
    async removeRequest(ghId) { delete s.requests[ghId]; persist(); },
    async listTeachers() { return Object.entries(s.teachers).map(([id, d]) => ({ id, ...copy(d) })); },
    async saveTeacher(email, data) { s.teachers[lower(email)] = copy(data); persist(); },
    async deleteTeacher(email) { delete s.teachers[lower(email)]; persist(); },
    async listEdits() { return Object.entries(s.edits || {}).map(([id, d]) => ({ id, ...copy(d) })); },
    async listAssessments() { return Object.entries(s.assessments || {}).map(([id, d]) => ({ id, ...copy(d) })); },
    async saveAssessment(id, data) { (s.assessments ||= {})[id] = copy(data); persist(); },
    async deleteAssessment(id) { delete (s.assessments || {})[id]; persist(); },
    async saveEdit(id, data) { (s.edits ||= {})[id] = copy(data); persist(); },
    async deleteEdit(id) { delete (s.edits || {})[id]; persist(); },
    async listOldRoster() { return []; },
    async listOldUsers() { return []; },
    sentResets: () => copy(s.sent),
    reset() { memory = null; try { localStorage.removeItem(KEY); } catch (e) { /* ignore */ } },
  };
}

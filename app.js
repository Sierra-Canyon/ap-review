import { firebaseConfig, teacherGithubIds, teacherName, firebaseSdk } from "./firebase-config.js";
import { firebaseBackend, demoBackend, studentId } from "./backend.js";
import { openItems, blankCard, grade, skillMastery, buildSession, counts, buildMock, partBPoints, partBMax, rowsMax, normOut, normCell, DAY } from "./srs.js";
import { courses, courseById, coursesOf } from "./courses.js";
import { snapshot, applyEdits, everyItem, editableFields, editId, originalOf, diffOf, pointsOf } from "./edits.js";
import katex from "./vendor/katex.js";
import { renderLearnHome, renderSection, bookSections, sectionsForSkill, activitiesOf } from "./book-ui.js";

// ------------------------------------------------------------------------------------------ helpers
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const skillName = (id) => deck.skills.find((s) => s.id === id)?.name || id;
const skillFrom = (id) => deck.skills.find((s) => s.id === id)?.from || "";
const baseTypes = { mcq: "Code reading", output: "Type the output", trace: "Trace table", wr: "Written response", vocab: "Vocabulary", fr: "Free response", frq: "Free response" };
// Math: $...$ inline and $$...$$ on its own line, in LaTeX, drawn as MathML (no fonts or stylesheet needed). \$ is a dollar sign.
const katexOut = (t, display) => { try { return katex.renderToString(t, { displayMode: display, output: "mathml", throwOnError: false }); } catch (e) { return esc(t); } };
function mathText(s) {
  return String(s ?? "").replace(/\\\$/g, "\u0000").split(/(\$\$[\s\S]+?\$\$|\$[^$\n]+?\$)/g).map((part) => {
    if (/^\$\$[\s\S]+\$\$$/.test(part)) return katexOut(part.slice(2, -2), true);
    if (/^\$[^$]+\$$/.test(part)) return katexOut(part.slice(1, -1), false);
    return esc(part).replace(/\n/g, "<br>");
  }).join("").replace(/\u0000/g, "$");
}
// Text a student reads: math where the course has it, plain text otherwise.
const tx = (s) => (deck.lang === "math" ? mathText(s) : esc(s));
const typeLabel = (t) => deck.typeNames?.[t] || baseTypes[t] || t;
const isChoice = (it) => it.type === "mcq" || it.type === "vocab";
// What an essay item is called and the note under its prompt. AP World uses kind "leq" and "dbq"; other courses add
// their own kinds (AP Gov: "scotus", "argument") here.
const ESSAY_KINDS = {
  dbq: ["Document-based question", "Write an essay that responds to the question, using at least four of the documents and evidence beyond them. On the exam this is 60 minutes, with a 15-minute reading period."],
  leq: ["Long essay question", "Write an essay that responds to the question with a thesis, context, specific evidence, and reasoning. On the exam this is 40 minutes."],
  scotus: ["SCOTUS comparison question", "Answer each part in a few sentences, comparing the case described with the required Supreme Court case. On the exam this is about 20 minutes."],
  argument: ["Argument essay", "Write an essay with a defensible claim, evidence from at least one of the listed foundational documents and one more piece of evidence, reasoning, and a response to an opposing view. On the exam this is about 25 minutes."],
};
const essayLabel = (it) => (ESSAY_KINDS[it.kind] || ESSAY_KINDS.leq)[0];
const essayNote = (it) => (ESSAY_KINDS[it.kind] || ESSAY_KINDS.leq)[1];
const choiceText = (t) => (deck.lang === "java" ? md(t) : deck.lang === "math" ? mathText(t) : esc(t));
const shuffle = (a) => { const b = [...a]; for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };
const pct = (x) => Math.round(x * 100);

const HL = {
  csharp: /(\/\/[^\n]*)|("(?:[^"\\\n]|\\.)*")|\b(\d+)\b|\b(int|string|bool|void|return|if|else|for|foreach|while|new|true|false|var|double|char|in|null)\b|\b(List|Console)\b/g,
  java: /(\/\/[^\n]*|\/\*[\s\S]*?\*\/)|("(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)')|\b(\d+(?:\.\d+)?)\b|\b(int|boolean|void|return|if|else|for|while|do|new|true|false|double|char|null|public|private|static|final|class|break|continue)\b|\b(String|Math|System|Integer|Double)\b/g,
};
function hl(code) {
  const re = new RegExp(HL[deck?.lang] || HL.csharp);
  let out = "", last = 0, m;
  while ((m = re.exec(code))) {
    out += esc(code.slice(last, m.index));
    const cls = m[1] ? "co" : m[2] ? "st" : m[3] ? "nu" : m[4] ? "kw" : "ty";
    out += `<span class="${cls}">${esc(m[0])}</span>`;
    last = re.lastIndex;
  }
  return out + esc(code.slice(last));
}
const codeBlock = (code, label) => (label ? `<div class="code-label">${esc(label)}</div>` : "") + `<pre class="code"><code>${hl(code)}</code></pre>`;
// Java decks write prose in a little Markdown: `code`, **bold**, and blank lines between paragraphs.
function md(s) {
  const inline = (t) => esc(t).replace(/`([^`]+)`/g, "<code>$1</code>").replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>");
  return String(s ?? "").split(/\n{2,}/).map((para) => {
    const lines = para.split("\n");
    const head = lines.filter((l) => !/^\s*- /.test(l)), items = lines.filter((l) => /^\s*- /.test(l));
    if (!items.length) return inline(para).replace(/\n/g, "<br>");
    return `${head.length ? inline(head.join("\n")).replace(/\n/g, "<br>") : ""}</p><ul>${items.map((l) => `<li>${inline(l.replace(/^\s*- /, ""))}</li>`).join("")}</ul><p>`;
  }).join("</p><p>");
}
// Short inline code in prose: anything that looks like C# goes in a code span.
function prose(s) {
  if (deck.lang === "java") return md(s);
  if (deck.lang === "math") return mathText(s);
  if (deck.lang !== "csharp") return esc(s);
  return esc(s).replace(/(\b[A-Za-z_]+\[[^\]]*\]|\b[A-Za-z_]+\.(?:Count|Add|Length)\b(?: - \d)?|\b(?:i|n) (?:&lt;|&lt;=|&gt;|==|!=) [\w.]+|\bi\+\+|\breturn [-\w]+;?|\bint i = \d|\belse if\b|\bList&lt;\w+&gt;|\b[A-Z][a-zA-Z]+\([^)]*\))/g, "<code>$1</code>");
}
function toast(msg) {
  const t = document.createElement("div");
  t.className = "toast"; t.textContent = msg; t.setAttribute("role", "status");
  document.body.append(t);
  setTimeout(() => t.remove(), 3200);
}
function ago(ts) {
  if (!ts) return "never";
  const s = (Date.now() - ts) / 1000;
  if (s < 90) return "just now";
  if (s < 3600) return `${Math.round(s / 60)} min ago`;
  if (s < 86400) return `${Math.round(s / 3600)} h ago`;
  return `${Math.round(s / 86400)} d ago`;
}
// ------------------------------------------------------------------------------------------ assessments
const isoDay = (d = new Date()) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
const dayLabel = (iso) => { const [y, m, d] = iso.split("-").map(Number); return new Date(y, m - 1, d).toLocaleDateString("en-US", { weekday: "short", month: "numeric", day: "numeric" }); };
// This course's assessments from today on, soonest first.
const upcoming = () => assessments.filter((a) => (a.courses || []).includes(course.id) && a.date >= isoDay()).sort((a, b) => a.date.localeCompare(b.date));
// An assessment covers whole units ("u2") or topics ("2.3").
const covers = (a) => { const t = new Set(a.topics || []); return (it) => t.has(it.skill) || (it.topic !== undefined && t.has(String(it.topic))); };
// The units of a deck and, where its questions are tagged by topic, the topics in each (names from the topic quizzes).
function topicCatalog(d) {
  const names = {};
  for (const f of d.forms || []) { const m = /^Topic (\d+\.\d+) Quiz: (.*)$/.exec(f.name); if (m) names[m[1]] = m[2]; }
  const all = [...d.items, ...(d.forms || []).flatMap((f) => f.items)];
  const order = (a, b) => { const [a1, a2] = a.split(".").map(Number), [b1, b2] = b.split(".").map(Number); return (a1 - b1) || (a2 - b2) || a.localeCompare(b); };
  return d.skills.map((sk) => ({ sk, topics: [...new Set(all.filter((it) => it.skill === sk.id && it.topic !== undefined).map((it) => String(it.topic)))].sort(order).map((t) => ({ t, name: names[t] || "" })) }))
    .filter((x) => all.some((it) => it.skill === x.sk.id));
}
const coversText = (a) => (a.topics || []).map((t) => deck.skills.find((s) => s.id === t)?.name || t).join(", ");

function quizCountdown() {
  const today0 = new Date(); today0.setHours(0, 0, 0, 0);
  const at = (iso) => { const [y, m, d] = iso.split("-").map(Number); return new Date(y, m - 1, d); };
  // A teacher's assessment comes first, so on a day that also has a date in the deck the countdown names the teacher's.
  const list = [...upcoming().map((a) => ({ name: a.name, date: a.date })), ...(deck.dates || (deck.quizDate ? [{ name: deck.quizName || deck.title, date: deck.quizDate }] : []))]
    .sort((a, b) => a.date.localeCompare(b.date));
  const next = list.find((x) => at(x.date) >= today0);
  if (!next) return "";
  const [y, m, d] = next.date.split("-").map(Number);
  const quiz = new Date(y, m - 1, d);
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const days = Math.round((quiz - today) / DAY);
  const label = quiz.toLocaleDateString("en-US", { weekday: "short", month: "numeric", day: "numeric" });
  if (days < 0) return "";
  const q = next.name;
  if (days === 0) return `${q} is today, ${label}.`;
  if (days === 1) return `${q} is tomorrow, ${label}.`;
  return `${q} is ${label}, in ${days} days.`;
}

// ------------------------------------------------------------------------------------------ state
const params = new URLSearchParams(location.search);
const demo = params.has("demo") || !firebaseConfig;
// user: who signed in (GitHub or school email). me: their student record. teacher: { admin, courses } when they teach.
let backend, user = null, profile = null, me = null, teacher = null;
// The course on screen. A student sees the courses on their record; a teacher sees the courses they teach (the admin, all).
let course = courses[0], deck = course.decks[0];
// Every deck as its file wrote it; teachers' edits (edits.js) are laid over these after sign-in.
const allDecks = [...new Set(courses.flatMap((c) => c.decks))];
snapshot(allDecks);
let edits = [];
// Assessments teachers put on the calendar (Class tab), for every course; loaded after sign-in.
let assessments = [];
const teacherCourses = () => (!teacher ? [] : teacher.admin ? courses : courses.filter((c) => (teacher.courses || []).includes(c.id)));
const myCourses = () => { const list = [...teacherCourses(), ...(me ? coursesOf(me).map(courseById) : [])]; return list.filter((c, k) => c && list.indexOf(c) === k); };
const onRosterOrTeacher = () => !!me || !!teacher;
const progressId = () => (me ? me.id : "t-" + user.uid);
const displayName = () => me?.name || user?.name || (user?.login ? "@" + user.login : user?.email || "");
function setCourse(id, remember = true) {
  const c = myCourses().find((x) => x.id === id) || myCourses()[0] || courses[0];
  course = c; deck = c.decks[0]; lastSection[deck.id] = c.id;
  if (remember) try { localStorage.setItem("ap-review-course", c.id); } catch (e) { /* storage blocked */ }
}
const view = document.getElementById("view");
const app = { session: null, mock: null };

function deckState() {
  profile.decks ||= {};
  return (profile.decks[deck.id] ||= { cards: {}, mocks: [] });
}
async function save() {
  profile.lastActive = Date.now();
  try { await backend.saveProgress(progressId(), profile); }
  catch (e) { toast("Not saved. Check your connection, then answer the next one."); console.error(e); }
}
let saveTimer = null;
function saveSoon() { clearTimeout(saveTimer); saveTimer = setTimeout(save, 1500); }
const bookApi = { book: () => (profile.book ||= {}), saveSoon };
function record(item, result, extra = {}) {
  const st = deckState();
  st.cards[item.id] = grade(st.cards[item.id] || blankCard(), result, Date.now(), extra);
  return save();
}
const isTeacher = () => !!teacher;
// Class lists sort by last name (the last word of the name the student goes by), then first name.
const lastNameKey = (r) => { const n = (r.name || r.login || r.email || "").trim().toLowerCase(); const w = n.split(/\s+/); return w[w.length - 1] + " " + n; };
const byLastName = (a, b) => lastNameKey(a).localeCompare(lastNameKey(b));
const isAdmin = () => !!teacher?.admin;
// A teacher edits the questions of a deck that one of their courses uses.
const canEdit = () => isTeacher() && teacherCourses().some((c) => c.decks.includes(deck));

// ------------------------------------------------------------------------------------------ chrome
// The course menus: one entry per subject (AP World, not AP World (B), (C), (D)), and, when there is more than one
// section of the subject on screen, a second menu of its periods. A subject opens on the section last used.
const subjectOf = (c) => c.subject || c.short.replace(/ \([^)]*\)$/, "");
const lastSection = {};
function coursePickers(mine) {
  if (mine.length < 2) return "";
  const subjects = [...new Set(mine.map((c) => c.decks[0]))].map((d) => mine.filter((c) => c.decks[0] === d));
  const pick = (list) => (list.includes(course) ? course : list.find((c) => c.id === lastSection[c.decks[0].id]) || list[0]);
  const sections = subjects.find((list) => list.includes(course)) || [];
  return `${subjects.length > 1 ? `<label class="coursepick"><span class="sr">Course</span><select id="coursepick">${subjects.map((list) => `<option value="${pick(list).id}" ${list.includes(course) ? "selected" : ""}>${esc(subjectOf(list[0]))}</option>`).join("")}</select></label>` : ""}
    ${sections.length > 1 ? `<label class="coursepick"><span class="sr">Section</span><select id="sectionpick">${sections.map((c) => `<option value="${c.id}" ${c === course ? "selected" : ""}>${esc(c.period || c.short)}</option>`).join("")}</select></label>` : ""}`;
}
function renderBar() {
  const r = location.hash.slice(1) || "home";
  const links = [["home", "Home"], ...(course.book ? [["learn", "Learn"]] : []), ["review", "Review"], ["misses", "My misses"], ...(deck.mock ? [["mock", deck.mock.name]] : [])];
  if (isTeacher()) links.push(["teacher", "Class"]);
  if (canEdit()) links.push(["questions", "Questions"]);
  const mine = user && onRosterOrTeacher() ? myCourses() : [];
  $("#bar").innerHTML = `<div class="bar-in">
    <a class="mark" href="#home"><span class="tile" aria-hidden="true"></span>AP Review</a>
    ${coursePickers(mine)}
    ${user && onRosterOrTeacher() ? `<nav aria-label="Sections">${links.map(([h, t]) => `<a href="#${h}" ${r === h || (h === "learn" && r.startsWith("learn-")) ? 'aria-current="page"' : ""}>${t}</a>`).join("")}</nav>` : ""}
    ${user ? `<div class="who">${user.photo ? `<img src="${esc(user.photo)}" alt="">` : ""}<a href="#account" title="Your account">${esc(displayName())}</a><button class="btn ghost small" id="signout">Sign out</button></div>` : ""}
  </div>`;
  $("#signout")?.addEventListener("click", async () => { await backend.signOut(); location.hash = ""; });
  $$("#coursepick, #sectionpick").forEach((el) => el.addEventListener("change", (e) => {
    setCourse(e.target.value); app.session = null; app.mock = null; app.focus = null;
    const r = location.hash.slice(1) || "home";
    if (r === "home" || r === "review" || r === "mock" || r === "teacher" || r === "questions") route(); else location.hash = "home";
  }));
  $("#demoband").hidden = !demo;
}

const ghIcon = `<svg class="gh" viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>`;

function signInError(e) {
  const c = e?.code || "";
  if (c === "auth/popup-closed-by-user" || c === "auth/cancelled-popup-request") return null;
  if (c === "auth/popup-blocked") return "The sign-in window was blocked. Allow pop-ups for this site and try again.";
  if (c === "auth/invalid-credential" || c === "auth/wrong-password" || c === "auth/user-not-found" || c === "auth/invalid-email") return "That email and password do not match. Check both, or use Forgot password.";
  if (c === "auth/too-many-requests") return "Too many tries. Wait a few minutes, or use Forgot password.";
  if (c === "auth/account-exists-with-different-credential") return "GitHub sign-in is not turned on yet for an email that also has a password. For now, sign in with your school email and password, and tell your teacher.";
  return "Sign-in did not finish: " + (c || e?.message || "unknown error");
}
function renderSignIn() {
  view.className = "";
  view.innerHTML = `<section class="panel signin enter">
    <span class="eyebrow">Sierra Canyon</span>
    <h1>AP Review</h1>
    <p>Spaced review and mock tests for your AP course. What you get wrong comes back sooner.</p>
    <div class="stack">
      <b>Sign in with GitHub</b>
      ${demo ? `<button class="btn primary big" data-as="student">${ghIcon} Try it as a student (GitHub)</button>
        <button class="btn big" data-as="teacher">Try it as the teacher</button>
        <button class="btn ghost" data-as="stranger">Try it as someone not on the class list</button>`
        : `<button class="btn primary big" id="signin">${ghIcon} Sign in with GitHub</button>
        <p class="small muted">Computer science courses: use the GitHub account you use for Classroom 50.</p>`}
    </div>
    <form class="stack" id="pwform" autocomplete="on">
      <b>Or sign in with your school email</b>
      <label class="small muted" for="pwemail">School email</label>
      <input type="email" id="pwemail" autocomplete="username" placeholder="first.last@scsstudent.org" required>
      <label class="small muted" for="pwpass">Password</label>
      <input type="password" id="pwpass" autocomplete="current-password" required>
      <div class="row"><button class="btn primary" type="submit">Sign in</button><button class="btn ghost" type="button" id="forgot">Forgot password?</button></div>
      <p class="small muted" id="pwmsg" role="status"></p>
      ${demo ? `<p class="small muted">Demo: try <code>demo.email@scsstudent.org</code> with the password <code>${FIRST_PASSWORD}</code>, or the history teacher <code>history.teacher@sierracanyonschool.org</code> with <code>teach-demo-7</code>.</p>` : ""}
    </form>
    ${demo ? `<p class="small muted">Demo mode: there is no real sign-in, and progress is kept in this browser only.</p>` : ""}
  </section>`;
  $$("[data-as]").forEach((b) => b.addEventListener("click", () => backend.signInGithub(b.dataset.as)));
  $("#signin")?.addEventListener("click", async () => {
    try { const u = await backend.signInGithub(); if (u?.login) await handleUser(u); }
    catch (e) { const m = signInError(e); if (m) toast(m); }
  });
  $("#pwform").addEventListener("submit", async (ev) => {
    ev.preventDefault();
    const msg = $("#pwmsg"); msg.textContent = "Signing in...";
    try { await backend.signInEmail($("#pwemail").value, $("#pwpass").value); msg.textContent = ""; }
    catch (e) { msg.textContent = signInError(e) || ""; }
  });
  $("#forgot").addEventListener("click", async () => {
    const msg = $("#pwmsg"), email = $("#pwemail").value.trim();
    if (!/@/.test(email)) { msg.textContent = "Type your school email above, then press Forgot password again."; $("#pwemail").focus(); return; }
    try { await backend.sendReset(email); } catch (e) { /* the same message either way */ }
    msg.textContent = `If ${email} has a sign-in here, a link to choose a new password is on its way. Check your school email, including the spam folder.`;
  });
}

function renderNotOnList() {
  view.className = "";
  view.innerHTML = user.provider === "github" ? `<section class="panel signin enter">
    <h1>You are not on a class list yet</h1>
    <p>You signed in as <b>@${esc(user.login || "")}</b>. Your teacher has been sent a request to add this account.</p>
    <p class="muted">If this is not the GitHub account you use for Classroom 50, sign out and sign in with that one.</p>
    <div class="row"><button class="btn" id="again">Check again</button><button class="btn ghost" id="so2">Sign out</button></div>
  </section>` : `<section class="panel signin enter">
    <h1>You are not on a class list</h1>
    <p>You signed in as <b>${esc(user.email)}</b>, and no course has that email on its list. Ask your teacher to add it.</p>
    <div class="row"><button class="btn" id="again">Check again</button><button class="btn ghost" id="so2">Sign out</button></div>
  </section>`;
  $("#again").addEventListener("click", () => handleUser(user));
  $("#so2").addEventListener("click", () => backend.signOut());
}

// A first password, chosen by the student, before anything else.
function passwordFields(withCurrent) {
  return `${withCurrent ? `<label class="small muted" for="pwcur">Current password</label><input type="password" id="pwcur" autocomplete="current-password" required>` : ""}
    <label class="small muted" for="pwnew">New password (at least 8 characters)</label><input type="password" id="pwnew" autocomplete="new-password" minlength="8" required>
    <label class="small muted" for="pwnew2">The new password again</label><input type="password" id="pwnew2" autocomplete="new-password" minlength="8" required>`;
}
async function changePassword(form, withCurrent) {
  const msg = $(".pwmsg", form), next = $("#pwnew", form).value;
  if (next.length < 8) { msg.textContent = "Use at least 8 characters."; return false; }
  if (next.trim().toLowerCase() === FIRST_PASSWORD) { msg.textContent = `Choose a password other than ${FIRST_PASSWORD}: everyone starts with that one.`; return false; }
  if (next !== $("#pwnew2", form).value) { msg.textContent = "The two new passwords are different. Type them again."; return false; }
  msg.textContent = "Saving...";
  try { await backend.setPassword(next, withCurrent ? $("#pwcur", form).value : undefined); }
  catch (e) {
    msg.textContent = e?.code === "auth/requires-recent-login" ? "For safety, sign out, sign in again, and then change it." : e?.code === "auth/invalid-credential" || e?.code === "auth/wrong-password" ? "The current password is not right." : "Not saved: " + (e?.code || e?.message);
    return false;
  }
  profile.pwSet = true; await save();
  return true;
}
function renderChoosePassword() {
  view.className = "";
  view.innerHTML = `<section class="panel signin enter">
    <h1>Choose your own password</h1>
    <p>You signed in with the first password everyone starts with. Choose one only you know. You sign in with <b>${esc(user.email)}</b> and this password from now on.</p>
    <form class="stack" id="firstpw">${passwordFields(false)}<div class="row"><button class="btn primary" type="submit">Save my password</button></div><p class="small muted pwmsg" role="status"></p></form>
  </section>`;
  $("#firstpw").addEventListener("submit", async (ev) => { ev.preventDefault(); if (await changePassword(ev.target, false)) { toast("Password saved."); route(); } });
}
function renderAccount() {
  view.className = "";
  view.innerHTML = `<section class="panel enter">
    <span class="eyebrow">Your account</span><h1>${esc(displayName())}</h1>
    <div class="tablewrap"><table><tbody>
      ${me?.email || user.email ? `<tr><td>School email</td><td>${esc(me?.email || user.email)}</td></tr>` : ""}
      ${me?.ghId || user.ghId ? `<tr><td>GitHub</td><td>${me?.login || user.login ? "@" + esc(me?.login || user.login) : "linked"}</td></tr>` : ""}
      <tr><td>Signed in with</td><td>${user.provider === "github" ? "GitHub" : "school email and password"}</td></tr>
      ${me ? `<tr><td>Courses</td><td>${coursesOf(me).map((id) => esc(courseById(id)?.name || id)).join(", ")}</td></tr>` : ""}
    </tbody></table></div>
    ${me?.email && me?.ghId ? `<p class="small muted">Either way of signing in opens this same account.</p>` : ""}
  </section>
  ${user.provider === "password" ? `<section class="panel"><h2>Change your password</h2>
    <form class="stack" id="chpw">${passwordFields(true)}<div class="row"><button class="btn primary" type="submit">Change password</button><button class="btn ghost" type="button" id="resetme">Forgot the current one?</button></div><p class="small muted pwmsg" role="status"></p></form></section>` : ""}`;
  $("#chpw")?.addEventListener("submit", async (ev) => { ev.preventDefault(); if (await changePassword(ev.target, true)) { ev.target.reset(); $(".pwmsg", ev.target).textContent = "Password changed."; } });
  $("#resetme")?.addEventListener("click", async () => { try { await backend.sendReset(user.email); } catch (e) { /* same message */ } $("#chpw .pwmsg").textContent = `A link to choose a new password is on its way to ${user.email}.`; });
}

// ------------------------------------------------------------------------------------------ home
function renderHome() {
  view.className = "";
  const st = deckState();
  const c = counts(deck, st.cards);
  const sm = skillMastery(deck, st.cards);
  const answered = Object.values(st.cards).reduce((t, x) => t + (x.n || 0), 0);
  const lastMock = st.mocks[st.mocks.length - 1];
  const best = st.mocks.reduce((m, x) => Math.max(m, x.score), -1);
  const nextIn = c.next < Infinity ? Math.max(1, Math.round((c.next - Date.now()) / 60000)) : null;
  const nextTxt = nextIn === null ? "" : nextIn < 90 ? `${nextIn} min` : nextIn < 2880 ? `${Math.round(nextIn / 60)} h` : `${Math.round(nextIn / 1440)} days`;
  view.innerHTML = `
  <section class="hero">
    <span class="eyebrow">${esc(deck.course)}</span>
    <h1>${esc(deck.title)}</h1>
    ${quizCountdown() ? `<p class="countdown">${esc(quizCountdown())}</p>` : ""}
  </section>
  <section class="choices-home">
    <div class="panel mode">
      <span class="eyebrow">Review</span>
      <div class="row"><span class="num">${c.due}</span><span class="muted">due now</span><span class="num">${c.fresh}</span><span class="muted">new</span></div>
      <p class="small muted">${c.due + c.fresh ? "Ten at a time. Anything you miss comes back in the same set." : `All caught up. The next card is due in ${esc(nextTxt)}. Keep going to practice the ones you know least.`}</p>
      <button class="btn primary big" data-focus="">${c.due + c.fresh ? "Start review" : "Keep going"}</button>
      ${deck.focus ? `<div class="row small"><span class="muted">Only:</span>${deck.focus.map((f) => `<button class="btn ghost small" data-focus="${f.id}">${esc(f.name)}</button>`).join("")}</div>` : ""}
      ${upcoming().slice(0, 3).map((a) => `<div class="assess"><div><b>${esc(a.name)}</b> <span class="small muted">· ${esc(dayLabel(a.date))} · ${deck.items.filter(covers(a)).length} questions on ${esc(coversText(a))}</span></div>
        <div class="row small"><button class="btn small" data-focus="a:${esc(a.id)}">Review for it</button>${(deck.forms || []).filter((f) => f.items.length && f.items.every(covers(a))).map((f) => `<button class="btn ghost small" data-startform="${esc(f.id)}" title="${esc(f.name)}">${esc(f.short || f.name)} quiz</button>`).join("")}</div></div>`).join("")}
    </div>
    ${course.book ? `<div class="panel mode">
      <span class="eyebrow">Learn</span>
      <div class="row"><span class="num">${bookSections.filter((x) => { const a = activitiesOf(x), pr = (profile.book || {})[x.id]; return a.length && pr && a.every((id) => pr.a && pr.a[id]); }).length}</span><span class="muted">of ${bookSections.length} sections done</span></div>
      <p class="small muted">Variables, if statements, functions, lists, and for loops, with code you can run and step through.</p>
      <a class="btn big" href="#learn">Open the book</a>
    </div>` : ""}
    ${deck.mock ? `<div class="panel mode">
      <span class="eyebrow">${esc(deck.mock.name)}</span>
      <div class="row"><span class="num">${deck.mock.stat ? deck.mock.stat[0] : deck.mock.total}</span><span class="muted">${esc(deck.mock.stat ? deck.mock.stat[1] : "points")}</span></div>
      <p class="small muted">${esc(deck.mock.blurb)}${lastMock ? ` Last: ${lastMock.score} / ${lastMock.total ?? deck.mock.total}.` : ""}</p>
      <a class="btn big" href="#mock">${esc(deck.mock.cta || `Take a ${deck.mock.name.toLowerCase()}`)}</a>
    </div>` : ""}
  </section>
  ${missesPanel(st.cards)}
  <section class="panel">
    <div class="row spread"><h2>Skills</h2><span class="small muted">${answered} answered</span></div>
    <div class="skills">
      ${deck.skills.filter((s) => sm[s.id].total).map((s) => `<div class="skill">
        <div><b>${esc(s.name)}</b> <span class="from">${esc(s.from)} · seen ${sm[s.id].seen} of ${sm[s.id].total}</span></div>
        <div class="meter ${sm[s.id].value >= 0.8 ? "good" : ""}" role="img" aria-label="${pct(sm[s.id].value)} percent"><i style="width:${pct(sm[s.id].value)}%"></i></div>
        <span class="pct">${pct(sm[s.id].value)}%</span></div>`).join("")}
    </div>
    <p class="small muted">A skill is full when every item in it has been answered right three times in a row, spaced out over days.</p>
  </section>`;
  bindDrills();
  $$("[data-startform]").forEach((b) => b.addEventListener("click", () => { app.startForm = b.dataset.startform; app.mock = null; if (location.hash === "#mock") route(); else location.hash = "mock"; }));
  $$("[data-focus]").forEach((b) => b.addEventListener("click", () => {
    app.focus = b.dataset.focus || null; app.session = null;
    if (location.hash === "#review") route(); else location.hash = "review";
  }));
}

// ------------------------------------------------------------------------------------------ one item
// opts.mode: "review" (feedback right away) or "mock" (no feedback; answer kept in opts.answer)
// A free response's four sources, as the sources sheet lays them out.
function sourcesHTML(set, open = true) {
  const block = (b) => {
    const lead = b.lead ? `<b>${esc(b.lead)}</b> ` : "";
    if (b.ul) return `<div class="sblock">${lead ? `<p>${lead}</p>` : ""}<ul>${b.ul.map((x) => `<li>${tx(x)}</li>`).join("")}</ul></div>`;
    // A graph drawn by plot.js from the deck file (trusted markup, never student text).
    if (b.svg) return `<figure class="graphwrap">${b.svg}${b.caption ? `<figcaption class="small muted">${tx(b.caption)}</figcaption>` : ""}</figure>`;
    // A picture file in images/<course>/ (a public-domain or openly licensed work), with its caption, credit, and license.
    if (b.img) return `<figure class="imgwrap"><img src="${esc(b.img)}" alt="${esc(b.alt || "")}" loading="lazy" decoding="async"${b.w && b.h ? ` width="${b.w}" height="${b.h}"` : ""}>${b.caption ? `<figcaption class="small">${tx(b.caption)}</figcaption>` : ""}<p class="credit small muted">${esc(b.credit || "")}${b.license ? ` (${esc(b.license)})` : ""}${b.url ? ` <a href="${esc(b.url)}" target="_blank" rel="noopener">(source)</a>` : ""}</p></figure>`;
    if (b.cite !== undefined) return `<p class="cite small muted">${b.kind === "practice" || b.kind === "map" ? esc(b.cite) : `Source: ${esc(b.cite)}${b.url ? ` <a href="${esc(b.url)}" target="_blank" rel="noopener">(text)</a>` : ""}`}</p>`;
    if (b.table) return `<div class="tablewrap"><table class="srctable"><thead><tr>${b.table.head.map((h) => `<th>${tx(h)}</th>`).join("")}</tr></thead><tbody>${b.table.rows.map((r) => `<tr>${r.map((v) => `<td>${tx(v)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
    return `<p>${lead}${tx(b.p)}</p>`;
  };
  return `<details class="sources" ${open ? "open" : ""}><summary>${esc(set.label || "Sources")}: ${esc(set.name)}</summary>
    <p class="small muted">${tx(set.intro)}</p>
    ${set.sources.map((src) => `<section class="source">${src.title ? `<h3>${esc(src.title)}</h3>` : ""}${src.blocks.map(block).join("")}</section>`).join("")}</details>`;
}
// AP World labels a part "SAQ 1"; AP Gov labels it by question type ("Concept application", "Quantitative analysis").
const frPrompt = (item) => /^(SAQ|Concept|Quantitative)/.test(item.part)
  ? `<p class="small muted">${esc(item.part)}. ${tx(item.lead)}</p><div class="prompt"><b>(${esc(item.sub)})</b> ${tx(item.prompt)}</div>`
  : `<p class="small muted">Part ${esc(item.part)}. ${tx(item.lead)}</p><div class="prompt"><b>${esc(item.part)} (${esc(item.sub)})</b> ${tx(item.prompt)}</div>`;
// A part of a math free-response question: the shared lead, then this part's prompt.
const frqPrompt = (item) => `${item.lead ? `<p>${tx(item.lead)}</p>` : ""}<div class="prompt">${item.part ? `<b>${esc(item.part)}</b> ` : ""}${tx(item.prompt)}</div>`;

// In a math course every question says whether a calculator is allowed, as on the AP exam.
const calcChip = (it) => (deck.lang === "math" && (isChoice(it) || it.type === "frq") ? `<span class="chip ${it.calc ? "accent" : ""}">${it.calc ? "Calculator" : "No calculator"}</span>` : "");
function itemHTML(item, opts = {}) {
  const head = `<div class="row"><span class="chip accent">${esc(skillName(item.skill))}</span><span class="chip">${esc(typeLabel(item.type))}</span>${calcChip(item)}${opts.tag ? `<span class="chip">${esc(opts.tag)}</span>` : ""}</div>`;
  if (item.type === "frq") {
    return `${head}
      ${item.set ? sourcesHTML(deck.sets[item.set], opts.sourcesOpen !== false) : ""}
      ${frqPrompt(item)}
      <label for="wr-${item.id}" class="small muted">Your work and answer (or work on paper, then score yourself)</label>
      <textarea class="wr" id="wr-${item.id}" spellcheck="false"></textarea>`;
  }
  if (item.type === "essay") {
    return `${head}
      ${item.set ? sourcesHTML(deck.sets[item.set], opts.sourcesOpen !== false) : ""}
      <div class="prompt"><b>${essayLabel(item)}.</b> ${esc(item.prompt)}</div>
      <p class="small muted">${essayNote(item)}</p>
      <label for="wr-${item.id}" class="small muted">Your essay</label>
      <textarea class="wr essay-in" id="wr-${item.id}" spellcheck="true"></textarea>`;
  }
  if (item.type === "code") {
    return `${head}
      <h3 class="ctitle">${esc(item.title)}</h3>
      <div class="prompt md"><p>${md(item.prompt)}</p></div>
      ${item.given ? codeBlock(item.given) : ""}
      ${item.sample ? `<pre class="log">${esc(item.sample)}</pre>` : ""}
      <label for="wr-${item.id}" class="small muted">Your code</label>
      <textarea class="wr code-in" id="wr-${item.id}" spellcheck="false" autocapitalize="off" autocomplete="off"></textarea>`;
  }
  if (item.type === "fr") {
    return `${head}
      ${item.set ? sourcesHTML(deck.sets[item.set], opts.sourcesOpen !== false) : ""}
      ${frPrompt(item)}
      <label for="wr-${item.id}" class="small muted">Your answer</label>
      <textarea class="wr" id="wr-${item.id}" spellcheck="true"></textarea>`;
  }
  if (item.type === "wr") {
    return `${head}
      <span class="src">${esc(item.source)}</span>
      <p class="small muted">Answer in full sentences, about the code shown. Use the names from the code.</p>
      ${codeBlock(item.listI, wrLabel(item, 0))}
      ${codeBlock(item.listII, wrLabel(item, 1))}
      ${item.call ? `<p class="small">It is called as <code>${esc(item.call)}</code></p>` : ""}
      <div class="prompt">${esc(item.prompt)}</div>
      <label for="wr-${item.id}" class="small muted">Your answer</label>
      <textarea class="wr" id="wr-${item.id}" spellcheck="true"></textarea>`;
  }
  return `${head}
    ${item.set && deck.sets?.[item.set] ? sourcesHTML(deck.sets[item.set], opts.sourcesOpen !== false) : ""}
    ${item.stem ? `<p>${prose(item.stem)}</p>` : ""}
    ${item.classes ? codeBlock(item.classes) : ""}
    ${item.methods ? codeBlock(item.methods) : ""}
    ${item.code ? codeBlock(item.code) : ""}
    ${item.log ? `<pre class="log">${esc(item.log)}</pre>` : ""}
    <p><b>${prose(item.question)}</b></p>`;
}

function mountItem(host, item, { mode = "review", onAnswer, saved, sourcesOpen = true } = {}) {
  host.innerHTML = itemHTML(item, { mode, sourcesOpen });
  host.dataset.item = item.id;
  const area = document.createElement("div");
  area.className = "stack";
  host.append(area);

  if (isChoice(item)) {
    const order = saved?.order || shuffle(item.choices.map((_, k) => k));
    area.innerHTML = `<div class="opts" role="group" aria-label="Choices">${order.map((k, pos) => `
      <button class="opt ${item.mono ? "mono" : ""}" data-k="${k}"><span class="letter">${"ABCD"[pos]}</span><span class="txt">${choiceText(item.choices[k])}</span></button>`).join("")}</div>`;
    const buttons = $$(".opt", area);
    if (saved?.choice !== undefined) buttons.find((b) => +b.dataset.k === saved.choice)?.classList.add("picked");
    buttons.forEach((b) => b.addEventListener("click", () => {
      const k = +b.dataset.k;
      if (mode === "mock") {
        buttons.forEach((x) => x.classList.toggle("picked", x === b));
        onAnswer?.({ choice: k, order, right: k === item.answer });
        return;
      }
      buttons.forEach((x) => { x.disabled = true; });
      const right = k === item.answer;
      b.classList.add(right ? "right" : "wrong");
      const good = buttons.find((x) => +x.dataset.k === item.answer);
      good.classList.add("right");
      for (const x of new Set([b, good])) x.insertAdjacentHTML("beforeend", `<span class="why">${prose(item.why[+x.dataset.k])}</span>`);
      area.insertAdjacentHTML("beforeend", `<div class="feedback ${right ? "ok" : "no"}"><span class="verdict">${right ? "Right." : "Not this time."}</span></div>`);
      onAnswer?.({ result: right ? 1 : 0, extra: { choice: k } });
    }));
    return;
  }

  if (item.type === "output") {
    area.innerHTML = `<label class="small muted" for="out-${item.id}">What is printed</label>
      <textarea class="out" id="out-${item.id}" spellcheck="false" autocapitalize="off" autocomplete="off"></textarea>
      <div class="row"><button class="btn primary" id="check">Check</button></div>`;
    const ta = $("textarea", area);
    $("#check", area).addEventListener("click", () => {
      const typed = normOut(ta.value), want = normOut(item.answer);
      const right = typed === want;
      ta.readOnly = true;
      $("#check", area).remove();
      const tl = typed.split("\n"), wl = want.split("\n");
      const first = wl.findIndex((l, k) => l !== tl[k]);
      const bad = first === -1 ? tl.length > wl.length ? wl.length : -1 : first;
      const show = (lines, mark) => lines.map((l, k) => (k === mark ? `<mark>${esc(l) || " "}</mark>` : esc(l))).join("\n");
      area.insertAdjacentHTML("beforeend", `<div class="feedback ${right ? "ok" : "no"}">
        <span class="verdict">${right ? "Right." : "Not quite. The first line that differs is marked."}</span>
        ${right ? "" : `<div class="cmp"><div><span class="small muted">You typed</span><pre>${show(tl, bad)}</pre></div><div><span class="small muted">Printed</span><pre>${show(wl, -1)}</pre></div></div>`}
        <p>${prose(item.why)}</p></div>`);
      onAnswer?.({ result: right ? 1 : 0, extra: { typed: ta.value } });
    });
    return;
  }

  if (item.type === "trace") {
    const given = new Set(item.given.map(([r, c]) => r + "," + c));
    area.innerHTML = `<div class="tablewrap"><table class="trace"><thead><tr>${item.columns.map((c) => `<th>${esc(c)}</th>`).join("")}</tr></thead><tbody>
      ${item.rows.map((row, r) => `<tr>${row.map((cell, c) => given.has(r + "," + c)
        ? `<td class="given">${esc(cell)}</td>`
        : `<td><input type="text" id="t-${item.id}-${r}-${c}" data-r="${r}" data-c="${c}" aria-label="${esc(item.columns[c])}, row ${r + 1}" autocapitalize="off" autocomplete="off" spellcheck="false"></td>`).join("")}</tr>`).join("")}
      </tbody></table></div>
      <div class="row"><button class="btn primary" id="check">Check</button></div>`;
    $("#check", area).addEventListener("click", () => {
      let all = true;
      $$("input", area).forEach((inp) => {
        const want = item.rows[+inp.dataset.r][+inp.dataset.c];
        const ok = normCell(inp.value) === normCell(want);
        all &&= ok;
        inp.classList.add(ok ? "ok" : "no");
        inp.readOnly = true;
        if (!ok) inp.title = "Answer: " + want;
      });
      $("#check", area).remove();
      area.insertAdjacentHTML("beforeend", `<div class="feedback ${all ? "ok" : "no"}">
        <span class="verdict">${all ? "Right." : "Not quite. The red cells are wrong. The right table:"}</span>
        ${all ? "" : `<div class="tablewrap"><table><thead><tr>${item.columns.map((c) => `<th>${esc(c)}</th>`).join("")}</tr></thead><tbody>${item.rows.map((row) => `<tr>${row.map((v) => `<td class="mono">${esc(v)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`}
        <p>${prose(item.why)}</p></div>`);
      onAnswer?.({ result: all ? 1 : 0 });
    });
    return;
  }

  if (item.type === "frq") {
    const ta = $("textarea", host);
    if (saved?.text) ta.value = saved.text;
    if (mode === "mock") { ta.addEventListener("input", () => onAnswer?.({ text: ta.value })); return; }
    area.innerHTML = `<div class="row"><button class="btn primary" id="score">Score my answer</button></div>`;
    $("#score", area).addEventListener("click", () => {
      ta.readOnly = true;
      $("#score", area).remove();
      scoreRubric(area, item, (score, levels) => onAnswer?.({ result: cardResult(item, score), extra: { wr: { text: ta.value.slice(0, 4000), score, levels, ts: Date.now() } } }));
    });
    return;
  }

  if (item.type === "essay") {
    const ta = $("textarea", host);
    if (saved?.text) ta.value = saved.text;
    if (mode === "mock") { ta.addEventListener("input", () => onAnswer?.({ text: ta.value })); return; }
    area.innerHTML = `<div class="row"><button class="btn primary" id="score">Score my essay</button></div>`;
    $("#score", area).addEventListener("click", () => {
      ta.readOnly = true;
      $("#score", area).remove();
      scoreRubric(area, item, (score, levels) => onAnswer?.({ result: cardResult(item, score), extra: { wr: { text: ta.value.slice(0, 8000), score, levels, ts: Date.now() } } }));
    });
    return;
  }

  if (item.type === "code") {
    const ta = $("textarea", host);
    ta.addEventListener("keydown", (e) => { if (e.key === "Tab") { e.preventDefault(); const p = ta.selectionStart; ta.setRangeText("    ", p, ta.selectionEnd, "end"); if (mode === "mock") onAnswer?.({ text: ta.value }); } });
    if (saved?.text) ta.value = saved.text;
    if (mode === "mock") { ta.addEventListener("input", () => onAnswer?.({ text: ta.value })); return; }
    area.innerHTML = `<div class="row"><button class="btn primary" id="score">Score my code</button></div>`;
    $("#score", area).addEventListener("click", () => {
      ta.readOnly = true;
      $("#score", area).remove();
      scoreRubric(area, item, (score, levels) => onAnswer?.({ result: cardResult(item, score), extra: { wr: { text: ta.value.slice(0, 4000), score, levels, ts: Date.now() } } }));
    });
    return;
  }

  if (item.type === "fr") {
    const ta = $("textarea", host);
    if (saved?.text) ta.value = saved.text;
    if (mode === "mock") { ta.addEventListener("input", () => onAnswer?.({ text: ta.value })); return; }
    area.innerHTML = `<div class="row"><button class="btn primary" id="score">Score my answer</button></div>`;
    $("#score", area).addEventListener("click", () => {
      ta.readOnly = true;
      $("#score", area).remove();
      scoreFR(area, item, (score) => onAnswer?.({ result: score, extra: { wr: { text: ta.value.slice(0, 3000), score, levels: [score], ts: Date.now() } } }));
    });
    return;
  }

  if (item.type === "wr") {
    const ta = $("textarea", host);
    if (saved?.text) ta.value = saved.text;
    if (mode === "mock") {
      ta.addEventListener("input", () => onAnswer?.({ text: ta.value }));
      return;
    }
    area.innerHTML = `<div class="row"><button class="btn primary" id="score">Score my answer</button></div>`;
    $("#score", area).addEventListener("click", () => {
      ta.readOnly = true;
      $("#score", area).remove();
      scoreWR(area, item, ta.value, (score, levels) => onAnswer?.({ result: score === 4 ? 1 : score >= 2 ? 0.5 : 0, extra: { wr: { text: ta.value.slice(0, 3000), score, levels, ts: Date.now() } } }));
    });
  }
}

// A rubric with rows: each row is a point earned or not (or levels 0 to max). The solution comes after the student decides.
function scoreRubric(area, item, done, { showModel = true } = {}) {
  const box = document.createElement("div");
  box.className = "stack";
  const rows = item.rows.map((r) => ({ ...r, levels: r.levels || ["Not earned", r.earns] }));
  box.innerHTML = `<p><b>${item.type === "essay" ? "Score your essay with the AP rubric, one row at a time." : item.type === "frq" ? "Score your work with the scoring guidelines, one point at a time." : "Score your code, one row at a time."}</b> ${item.type === "essay" ? "Pick the level your essay reaches in each row." : item.type === "frq" ? "Give a point only when your work shows exactly what it says, with the supporting work." : "Each row is a point. Give the point only when your code does what the row says."}</p>
    <div class="rubric">${rows.map((row, r) => `<fieldset class="rrow"><legend>${esc(row.name)}</legend>
      ${row.levels.map((lv, p) => `<label class="lvl"><input type="radio" name="r-${item.id}-${r}" value="${p}" id="r-${item.id}-${r}-${p}"><span class="pts">${p} pt${p === 1 ? "" : "s"}</span><span>${prose(lv)}</span></label>`).join("")}
    </fieldset>`).join("")}</div>
    ${item.notes ? `<p class="small muted">${prose(item.notes)}</p>` : ""}
    <div class="row"><button class="btn primary" id="savewr" disabled>Save my score</button></div>`;
  area.append(box);
  const btn = $("#savewr", box);
  const levels = () => rows.map((_, r) => { const x = $(`input[name="r-${item.id}-${r}"]:checked`, box); return x ? +x.value : null; });
  box.addEventListener("change", () => { btn.disabled = levels().some((x) => x === null); });
  btn.addEventListener("click", () => {
    const lv = levels(), score = lv.reduce((a, b) => a + b, 0);
    $$("input", box).forEach((x) => { x.disabled = true; });
    btn.remove();
    if (showModel) box.insertAdjacentHTML("beforeend", solutionHTML(item, score));
    done(score, lv);
  });
}
function solutionHTML(item, score) {
  const max = rowsMax(item);
  const verdict = `<div class="feedback ${score === max ? "ok" : score * 2 >= max ? "part" : "no"}"><span class="verdict">${score} / ${max}.</span></div>`;
  if (item.type === "frq") return `${verdict}
    <div class="stack"><b>A full-credit solution</b><div class="model">${tx(item.solution)}</div></div>`;
  if (item.type === "essay") return `${verdict}
    <div class="stack"><b>A strong response</b><div class="model">${esc(item.model)}</div></div>
    ${item.docs?.length ? `<div class="stack"><b>What each document offers</b><ul class="small">${item.docs.map((d) => `<li>${esc(d)}</li>`).join("")}</ul></div>` : ""}
    ${item.evidence?.length ? `<div class="stack"><b>Evidence a strong essay could use</b><ul class="small">${item.evidence.map((d) => `<li>${esc(d)}</li>`).join("")}</ul></div>` : ""}`;
  return `${verdict}
    <div class="stack"><b>A full-credit solution</b>${codeBlock(item.solution)}</div>`;
}

// A free-response subpart: the scoring guidelines, then 1 or 0. The two examples come after the student decides.
function scoreFR(area, item, done, { showExamples = true } = {}) {
  const box = document.createElement("div");
  box.className = "stack";
  box.innerHTML = `<p><b>Score your answer.</b> One point, all or nothing, the way the AP exam scores it.</p>
    <div class="guide"><p><b>Earns the point:</b> ${esc(item.earns)}</p>
      <div class="cols2"><div><b class="small">Answers that earn the point</b><ul>${item.yes.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div>
      <div><b class="small">Answers that do not</b><ul>${item.no.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div></div></div>
    <fieldset class="rrow"><legend>Your answer</legend>
      <label class="lvl"><input type="radio" name="f-${item.id}" value="1" id="f-${item.id}-1"><span class="pts">1 pt</span><span>earns the point</span></label>
      <label class="lvl"><input type="radio" name="f-${item.id}" value="0" id="f-${item.id}-0"><span class="pts">0 pts</span><span>does not earn it</span></label>
    </fieldset>
    <div class="row"><button class="btn primary" id="savewr" disabled>Save my score</button></div>`;
  area.append(box);
  const btn = $("#savewr", box);
  box.addEventListener("change", () => { btn.disabled = !$(`input[name="f-${item.id}"]:checked`, box); });
  btn.addEventListener("click", () => {
    const score = +$(`input[name="f-${item.id}"]:checked`, box).value;
    $$("input", box).forEach((x) => { x.disabled = true; });
    btn.remove();
    if (showExamples) box.insertAdjacentHTML("beforeend", frExamplesHTML(item, score));
    done(score);
  });
}
function frExamplesHTML(item, score) {
  return `<div class="feedback ${score ? "ok" : "no"}"><span class="verdict">${score} / 1.</span></div>
    <div class="stack"><b>An answer that earns the point</b><div class="model">${esc(item.example)}</div></div>
    <div class="stack"><b>An answer that does not</b><div class="model weak">${esc(item.notExample)}</div></div>`;
}

// The rubric rows, then the model answer once the student has scored themselves.
// A written response shows two pieces of code from a Personalized Project Reference: List (i) and (ii) by default,
// or the item's own labels (["Procedure (i)", "Procedure (ii)"] for a prompt about the Procedure section).
const wrLabel = (it, k) => it.labels?.[k] || ["List (i)", "List (ii)"][k];
function scoreWR(area, item, text, done, { showModel = true } = {}) {
  const box = document.createElement("div");
  box.className = "stack";
  box.innerHTML = `<p><b>Score your answer against the quiz's rubric rows.</b> Read your answer, then pick the level it reaches in each row.</p>
    <div class="rubric">${item.rows.map((row, r) => `<fieldset class="rrow"><legend>${esc(row.name)}</legend>
      ${row.levels.map((lv, p) => `<label class="lvl"><input type="radio" name="r-${item.id}-${r}" value="${p}" id="r-${item.id}-${r}-${p}"><span class="pts">${p} pt${p === 1 ? "" : "s"}</span><span>${prose(lv)}</span></label>`).join("")}
    </fieldset>`).join("")}</div>
    <p class="small muted">${esc(item.note)}</p>
    <div class="row"><button class="btn primary" id="savewr" disabled>Save my score</button></div>`;
  area.append(box);
  const btn = $("#savewr", box);
  const levels = () => item.rows.map((_, r) => { const x = $(`input[name="r-${item.id}-${r}"]:checked`, box); return x ? +x.value : null; });
  box.addEventListener("change", () => { btn.disabled = levels().some((x) => x === null); });
  btn.addEventListener("click", () => {
    const lv = levels();
    const score = lv.reduce((a, b) => a + b, 0);
    $$("input", box).forEach((x) => { x.disabled = true; });
    btn.remove();
    const exam = lv.every((x) => x === 2);
    if (showModel) box.insertAdjacentHTML("beforeend", modelHTML(item, score, exam));
    done(score, lv);
  });
}
function modelHTML(item, score, exam) {
  return `<div class="feedback ${score === 4 ? "ok" : score >= 2 ? "part" : "no"}">
    <span class="verdict">${score} / 4. ${exam ? "Both halves are there, so the exam would give the point." : "On the exam this earns no point: the exam gives its one point only when both halves are there."}</span></div>
    <div class="stack"><b>A model answer</b><div class="model">${esc(item.model)}</div></div>
    ${item.facts ? `<p class="small"><b>From a run of the code:</b> ${prose(item.facts)}</p>` : ""}
    ${item.factsTable ? `<div class="stack"><b>Changes that build and run, and what they print</b><div class="tablewrap"><table><thead><tr><th>Change</th><th>What comes out</th></tr></thead><tbody>${item.factsTable.map(([a, b]) => `<tr><td class="mono">${esc(a)}</td><td>${prose(b)}</td></tr>`).join("")}</tbody></table></div></div>` : ""}`;
}

// ------------------------------------------------------------------------------------------ review
// ------------------------------------------------------------------------------------------ misses
// Every item a student can have answered: review items and the items of the mock forms.
const allItems = () => [...deck.items, ...(deck.forms || []).flatMap((f) => f.items)];
function whereFrom(it) {
  const f = (deck.forms || []).find((x) => x.items.includes(it));
  return f ? f.name : "Review";
}
// Missed: the last answer was wrong or only partly right. It leaves the list once it is answered right.
function missesOf(cards) {
  return allItems().filter((it) => cards[it.id]?.n && cards[it.id].last !== null && cards[it.id].last < 1)
    .sort((a, b) => cards[b.id].ts - cards[a.id].ts);
}
// For each skill: how often it was right, and how many of its items are missed right now. Weakest first.
function skillReport(cards) {
  const by = {};
  for (const it of allItems()) {
    const c = cards[it.id]; if (!c?.n) continue;
    const r = (by[it.skill] ||= { skill: it.skill, n: 0, c: 0, seen: 0, missed: 0 });
    r.n += c.n; r.c += c.c; r.seen++; if (c.last !== null && c.last < 1) r.missed++;
  }
  return Object.values(by).map((r) => ({ ...r, acc: r.c / r.n }))
    .sort((a, b) => (b.missed / b.seen - a.missed / a.seen) || (a.acc - b.acc));
}
const snippet = (it) => {
  const t = it.type === "essay" ? it.prompt : it.type === "code" ? it.title : it.type === "fr" ? `${it.part} (${it.sub}) ${it.prompt}` : it.type === "frq" ? `${it.part || ""} ${it.prompt}` : it.type === "wr" ? it.prompt : it.type === "vocab" ? it.stem : (it.stem && !/^Consider the following/.test(it.stem) ? it.stem + " " : "") + (it.question || "");
  const plain = String(t).replace(/`/g, "").replace(/\*\*/g, "");
  if (plain.length <= 110) return plain;
  // Never cut a $...$ in half: if the cut leaves one open, run on to its closing $.
  let cut = 107;
  if (((plain.slice(0, cut).match(/(^|[^\\])\$/g) || []).length) % 2) { const close = plain.indexOf("$", cut); cut = close < 0 ? plain.length : close + 1; }
  return plain.slice(0, cut) + (cut < plain.length ? "..." : "");
};
function missesPanel(cards) {
  const m = missesOf(cards), weak = skillReport(cards).filter((r) => r.missed).slice(0, 3);
  if (!m.length) return "";
  return `<section class="panel">
    <div class="row spread"><h2>My misses</h2><a class="btn" href="#misses">See them all</a></div>
    <p>${m.length} ${m.length === 1 ? "question" : "questions"} to answer again${weak.length ? `. Most missed: ${weak.map((r) => `<b>${esc(skillName(r.skill))}</b>`).join(", ")}` : ""}.</p>
    <div class="row"><button class="btn primary" data-drill="misses">Practice my misses</button></div>
  </section>`;
}
// A practice set from a fixed list of items (misses, or one skill). Missed items come back in the same set, as in review.
function startCustom(items, label, again) {
  if (!items.length) { toast("Nothing to practice there yet."); return; }
  app.session = { queue: items.slice(0, 10).map((it) => ({ it, again: false })), i: 0, marks: [], extra: false, requeued: {}, focus: label, again };
  if (location.hash === "#review") renderReview(); else location.hash = "review";
}
function drillMisses() { startCustom(missesOf(deckState().cards), "My misses", drillMisses); }
function drillSkill(skill) {
  const cards = deckState().cards;
  const missed = missesOf(cards).filter((it) => it.skill === skill);
  // Then the review items in the skill that are least solid, then new ones.
  const rest = openItems(deck).filter((it) => it.skill === skill && !missed.includes(it))
    .sort((a, b) => ((cards[a.id]?.n ? cards[a.id].b : 0.5) - (cards[b.id]?.n ? cards[b.id].b : 0.5)) || ((cards[a.id]?.ts || 0) - (cards[b.id]?.ts || 0)));
  startCustom([...missed, ...rest.filter((it) => !["wr", "fr", "code", "essay", "frq"].includes(it.type)), ...rest.filter((it) => ["wr", "fr", "code", "essay", "frq"].includes(it.type)).slice(0, 1)], skillName(skill), () => drillSkill(skill));
}
function bindDrills(root = view) {
  $$("[data-drill]", root).forEach((b) => b.addEventListener("click", () => {
    const d = b.dataset.drill;
    if (d === "misses") drillMisses();
    else if (d.startsWith("skill:")) drillSkill(d.slice(6));
    else if (d.startsWith("mock:")) { const ids = d.slice(5).split(","); startCustom(allItems().filter((it) => ids.includes(it.id)), "Missed on the mock", null); }
  }));
}
function renderMisses() {
  view.className = "";
  const cards = deckState().cards;
  const m = missesOf(cards), rep = skillReport(cards);
  const bySkill = {}; for (const it of m) (bySkill[it.skill] ||= []).push(it);
  view.innerHTML = `
  <section class="hero"><span class="eyebrow">${esc(deck.course)}</span><h1>My misses</h1>
    <p class="muted">Everything you answered wrong the last time you saw it, in review and on mocks. Answer it right and it leaves this list.</p></section>
  ${rep.length ? `<section class="panel">
    <h2>Skills, weakest first</h2>
    <p class="small muted">Right is the share of all your answers in the skill. Missed now is how many of its questions you got wrong the last time.</p>
    <div class="tablewrap"><table><thead><tr><th>Skill</th><th class="num">Right</th><th class="num">Missed now</th><th></th></tr></thead><tbody>
      ${rep.map((r) => `<tr><td><b>${esc(skillName(r.skill))}</b> <span class="small muted">${esc(skillFrom(r.skill))}</span></td>
        <td class="num"><span class="heat ${r.acc < 0.5 ? "h0" : r.acc < 0.8 ? "h1" : "h2"}">${pct(r.acc)}%</span></td>
        <td class="num">${r.missed} of ${r.seen}</td>
        <td class="num"><button class="btn ${r.missed ? "primary" : ""} small" data-drill="skill:${esc(r.skill)}">Practice</button></td></tr>`).join("")}
    </tbody></table></div></section>` : `<section class="panel"><p>Nothing answered yet. Start a review set or a mock, and anything you miss shows up here.</p><a class="btn primary" href="#review">Start review</a></section>`}
  ${m.length ? `<section class="panel">
    <div class="row spread"><h2>To answer again (${m.length})</h2><button class="btn primary" data-drill="misses">Practice my misses</button></div>
    <p class="small muted">Ten at a time, most recent first. A skill's Practice button starts with its misses, then the questions in that skill you know least.</p>
    ${Object.entries(bySkill).map(([sk, list]) => `<h3>${esc(skillName(sk))}</h3><ul class="list-plain misses">${list.map((it) => {
      const c = cards[it.id]; const wrongs = c.n - Math.round(c.c);
      return `<li><span class="chip">${esc(typeLabel(it.type))}</span> <span>${tx(snippet(it))}</span>${it.code ? ` <code class="small">${esc(it.code.split("\n")[0].slice(0, 60))}</code>` : ""}<br><span class="small muted">${esc(whereFrom(it))} · missed ${wrongs} of ${c.n} · ${ago(c.ts)}</span></li>`;
    }).join("")}</ul>`).join("")}
  </section>` : rep.length ? `<section class="panel"><p><b>No misses right now.</b> Every question you have answered, you got right the last time.</p></section>` : ""}`;
  bindDrills();
}

function startReview() {
  const st = deckState();
  const a = app.focus?.startsWith("a:") ? assessments.find((x) => x.id === app.focus.slice(2)) : null;
  const f = a ? { name: "Review for " + a.name, filter: covers(a) } : deck.focus?.find((x) => x.id === app.focus);
  const s = buildSession(deck, st.cards, f ? { types: f.types, skills: f.skills, filter: f.filter, size: f.size || 10, longCap: f.size || 2 } : { mix: deck.mix || null });
  app.session = { queue: s.items.map((it) => ({ it, again: false })), i: 0, marks: [], extra: s.extra, requeued: {}, focus: f?.name || "" };
  renderReview();
}
function renderReview() {
  view.className = "";
  const s = app.session;
  if (!s) return startReview();
  if (s.i >= s.queue.length) return renderReviewDone();
  const { it, again } = s.queue[s.i];
  view.innerHTML = `
    <div class="progress" aria-label="Item ${s.i + 1} of ${s.queue.length}">${s.queue.map((q, k) => `<span class="${k < s.i ? (s.marks[k] === 1 ? "ok" : s.marks[k] === 0 ? "no" : "done") : ""}"></span>`).join("")}</div>
    <div class="row spread small muted"><span>${s.focus ? esc(s.focus) + " · " : ""}${s.i + 1} of ${s.queue.length}${again ? " · back again" : ""}${s.extra ? " · extra practice" : ""}</span><a href="#home">Stop</a></div>
    <section class="panel enter" id="card"></section>
    <div class="row" id="nextrow" hidden><button class="btn primary big" id="next">Next</button></div>`;
  mountItem($("#card"), it, {
    mode: "review",
    onAnswer: async ({ result, extra }) => {
      s.marks[s.i] = result;
      // Missed: it comes back three items later, once.
      if (result === 0 && !s.requeued[it.id]) { s.requeued[it.id] = 1; s.queue.splice(Math.min(s.i + 4, s.queue.length), 0, { it, again: true }); }
      $("#nextrow").hidden = false;
      if (result < 1 && course.book) {
        const secs = sectionsForSkill(it.skill);
        if (secs.length) $("#card").insertAdjacentHTML("beforeend", `<p class="small">Read it again: ${secs.map((x) => `<a href="#learn-${x.id}">${esc(x.number)} ${esc(x.title)}</a>`).join(" · ")}</p>`);
      }
      $("#next").focus({ preventScroll: true });
      await record(it, result, extra);
    },
  });
  $("#next").addEventListener("click", () => { s.i++; renderReview(); window.scrollTo(0, 0); });
}
function renderReviewDone() {
  const s = app.session;
  const firsts = s.queue.map((q, k) => ({ q, m: s.marks[k] })).filter((x) => !x.q.again);
  const right = firsts.filter((x) => x.m === 1).length;
  const c = counts(deck, deckState().cards);
  view.innerHTML = `<section class="panel enter">
    <span class="eyebrow">Set done</span>
    <div class="row"><span class="scorebig">${right} / ${firsts.length}</span><span class="muted">right the first time</span></div>
    <ul class="list-plain">${firsts.map((x) => `<li class="row"><span class="chip ${x.m === 1 ? "good" : x.m === 0.5 ? "warn" : "bad"}">${x.m === 1 ? "right" : x.m === 0.5 ? "partly" : "missed"}</span><span>${esc(skillName(x.q.it.skill))} · ${esc(typeLabel(x.q.it.type))}</span></li>`).join("")}</ul>
    <p class="muted">${c.due + c.fresh ? `${c.due} due and ${c.fresh} new still waiting.` : "Nothing is due right now."}</p>
    <div class="row">${s.again === null ? `<a class="btn primary big" href="#misses">My misses</a>` : `<button class="btn primary big" id="more">Another set${s.focus ? `: ${esc(s.focus.toLowerCase())}` : ""}</button>`}<a class="btn big" href="#home">Home</a></div>
  </section>`;
  $("#more")?.addEventListener("click", () => { app.session = null; if (s.again) s.again(); else startReview(); });
}

// ------------------------------------------------------------------------------------------ mock
// The mock forms, grouped by the assessment they practice. With dates, the next assessments come first and earlier ones follow.
function formsHTML(cfg) {
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const groups = [];
  for (const f of deck.forms) { let g = groups.find((x) => x.name === (f.group || cfg.title)); if (!g) groups.push(g = { name: f.group || cfg.title, date: f.date, past: f.past, forms: [] }); g.forms.push(f); }
  const when = (d) => { if (!d) return null; const [y, m, dd] = d.split("-").map(Number); return new Date(y, m - 1, dd); };
  const label = (d) => when(d).toLocaleDateString("en-US", { weekday: "short", month: "numeric", day: "numeric" });
  const row = (f) => {
    const taken = deckState().mocks.filter((x) => x.form === f.id);
    const best = taken.reduce((t, x) => Math.max(t, x.score), -1);
    const ftotal = f.total ?? cfg.total;
    return `<div class="formrow"><div><b>${esc(f.name)}</b> <span class="small muted">· ${ftotal} points</span><br><span class="small muted">${taken.length ? `Taken ${taken.length === 1 ? "once" : taken.length + " times"} · best ${best} / ${ftotal}` : "Not taken yet"}</span></div>
      <button class="btn ${taken.length ? "" : "primary"}" data-form="${f.id}">${taken.length ? "Take it again" : "Start"}</button></div>`;
  };
  const block = (g) => `<div class="fgroup"><h3>${esc(g.name)}${g.date ? ` <span class="small muted">· ${label(g.date)}</span>` : ""}</h3><div class="forms">${g.forms.map(row).join("")}</div></div>`;
  // A group is past when its date has gone by, or when the deck marks it past (a unit tested before the site had dates).
  const isPast = (g) => g.past || (g.date && when(g.date) < today);
  const dated = groups.some((g) => g.date || g.past);
  const next = dated ? [...groups.filter((g) => g.date && !isPast(g)), ...groups.filter((g) => !g.date && !isPast(g))] : groups;
  const past = dated ? [...groups.filter((g) => g.date && isPast(g)).reverse(), ...groups.filter((g) => !g.date && g.past)] : [];
  return `${next.length ? `${dated && past.length ? "<h2>Coming up</h2>" : ""}${next.map(block).join("")}` : ""}
    ${past.length ? `<details class="pastforms"${next.length ? "" : " open"}><summary><b>Earlier this year</b> <span class="small muted">(${past.length} assessments, for review before the midterm and the AP exam)</span></summary>${past.map(block).join("")}</details>` : ""}
    <p class="small muted">A second try at the same form shows what you remember, not what you can do cold. Take the ones you have not taken first.</p>`;
}
const isFR = () => deck.mock.partB.kind === "fr";
const bScore = (it, m) => m.wr[it.id]?.score || 0;
const formOf = (id) => deck.forms?.find((f) => f.id === id);
// "Part A" and "Part B", or the deck's own names for its sections (AP World: Section I, Part A and so on).
const partName = (it, inB) => deck.mock.sections?.[it.type + (it.calc ? "-calc" : "")] || deck.mock.sections?.[it.type] || (inB ? "Part B" : "Part A");
const ptsLabel = (n) => `${n} point${n === 1 ? "" : "s"}`;
// A quiz or test places its keys evenly across the letters (with 4 choices, each of A to D about a quarter of the
// time, never three in a row), in the same order for every student, so no letter is a safe guess.
function keyOrders(formId, items) {
  let h = 2166136261;
  for (const c of formId) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
  const rnd = () => { h = Math.imul(h ^ (h >>> 15), 2246822507); h = Math.imul(h ^ (h >>> 13), 3266489909); h ^= h >>> 16; return (h >>> 0) / 4294967296; };
  const mix = (a) => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const out = {};
  const byN = {};
  for (const it of items) if (isChoice(it) && it.choices.length > 1) (byN[it.choices.length] ||= []).push(it);
  for (const [n, list] of Object.entries(byN)) {
    let slots;
    for (let t = 0; t < 50; t++) {
      slots = [];
      while (slots.length < list.length) slots.push(...mix([...Array(+n).keys()]));
      slots = mix(slots.slice(0, list.length));
      if (!slots.some((x, i) => i > 1 && x === slots[i - 1] && x === slots[i - 2])) break;
    }
    list.forEach((it, i) => {
      const rest = mix(it.choices.map((_, k) => k).filter((k) => k !== it.answer));
      rest.splice(slots[i], 0, it.answer);
      out[it.id] = { order: rest };
    });
  }
  return out;
}
function startMock(formId) {
  const m = buildMock(deck, deckState().cards, Math.random, formId);
  const items = [...m.partA, ...m.partB];
  app.mock = { deck: deck.id, form: formId || null, items, partA: m.partA.length, i: 0, answers: formId ? keyOrders(formId, items) : {}, start: Date.now(), phase: "take" };
  renderMock();
}
function renderMock() {
  view.className = "";
  const m = app.mock;
  const cfg = deck.mock;
  if (!m || m.deck !== deck.id) {
    app.mock = null;
    view.innerHTML = `<section class="panel enter">
      <span class="eyebrow">${esc(cfg.name)}</span><h1>${esc(cfg.title)}</h1>
      ${cfg.intro.map(([b, t]) => `<p class="${b ? "" : "muted"}">${b ? `<b>${esc(b)}</b> ` : ""}${esc(t)}</p>`).join("")}
      ${deck.forms ? `${formsHTML(cfg)}<div class="row"><a class="btn big" href="#home">Not now</a></div>`
      : `<div class="row"><button class="btn primary big" data-form="">Start</button><a class="btn big" href="#home">Not now</a></div>`}</section>`;
    $$("[data-form]").forEach((b) => b.addEventListener("click", () => startMock(b.dataset.form || null)));
    return;
  }
  if (m.phase === "score") return renderMockScore();
  if (m.phase === "done") return renderMockDone();
  const it = m.items[m.i];
  const partB = m.i >= m.partA;
  const pts = ptsLabel(partB ? (isFR() ? 1 : ["code", "essay", "fr", "frq"].includes(it.type) ? rowsMax(it) : cfg.partB.points) : cfg.partA.points);
  view.className = partB && (isFR() || it.set) ? "wide" : "";
  view.innerHTML = `
    <div class="progress">${m.items.map((x, k) => `<span class="${m.answers[x.id] && (m.answers[x.id].choice !== undefined || m.answers[x.id].text) ? "done" : ""} ${k === m.i ? "here" : ""}"></span>`).join("")}</div>
    <div class="row spread small muted"><span>${m.form ? esc(formOf(m.form).name) + " · " : ""}${esc(partName(it, partB))} · ${m.i + 1} of ${m.items.length} · ${pts}</span><span id="clock"></span></div>
    <section class="panel enter" id="card"></section>
    <div class="row spread"><button class="btn" id="prev" ${m.i === 0 ? "disabled" : ""}>Back</button>
      ${m.i < m.items.length - 1 ? `<button class="btn primary big" id="next">Next</button>` : `<button class="btn primary big" id="finish">Finish and score</button>`}</div>`;
  mountItem($("#card"), it, { mode: "mock", saved: m.answers[it.id], sourcesOpen: !app.sourcesClosed, onAnswer: (a) => { m.answers[it.id] = { ...m.answers[it.id], ...a }; } });
  $("#card details.sources")?.addEventListener("toggle", (e) => { app.sourcesClosed = !e.target.open; });
  if (isChoice(it) && !m.answers[it.id]) m.answers[it.id] = {};
  if (cfg.clock) {
    const tick = () => { const s = Math.floor((Date.now() - m.start) / 1000); const el = $("#clock"); if (el) el.textContent = `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")} of ${cfg.clock}`; };
    tick(); clearInterval(app.clock); app.clock = setInterval(tick, 1000);
  }
  $("#prev").addEventListener("click", () => { m.i--; renderMock(); });
  $("#next")?.addEventListener("click", () => { m.i++; renderMock(); window.scrollTo(0, 0); });
  $("#finish")?.addEventListener("click", () => {
    const blank = m.items.filter((x) => isChoice(x) ? m.answers[x.id]?.choice === undefined : !m.answers[x.id]?.text?.trim()).length;
    if (blank && !app.confirmBlank) { app.confirmBlank = true; toast(`${blank} left blank. Press Finish again to score anyway.`); return; }
    app.confirmBlank = false;
    clearInterval(app.clock);
    m.minutes = Math.round((Date.now() - m.start) / 60000);
    m.phase = "score"; m.wi = 0; m.wr = {};
    if (m.items.length === m.partA) { finishMock(); return; }
    renderMock(); window.scrollTo(0, 0);
  });
}
function renderMockScore() {
  // Part B: the student scores each response. Model answers come after all of Part B is scored.
  const m = app.mock;
  const wrs = m.items.slice(m.partA);
  const it = wrs[m.wi];
  view.className = isFR() || it.set ? "wide" : "";
  view.innerHTML = `<div class="row spread small muted"><span>Scoring ${deck.mock.sections ? "your written answers" : "Part B"} · ${m.wi + 1} of ${wrs.length} · ${esc(partName(it, true))}</span></div>
    <section class="panel enter" id="card"></section>`;
  const card = $("#card");
  const yours = `<div class="stack"><b>Your answer</b><div class="your">${esc(m.answers[it.id]?.text || "(blank)")}</div></div>`;
  const yourCode = `<div class="stack"><b>Your code</b><pre class="code"><code>${esc(m.answers[it.id]?.text || "(blank)")}</code></pre></div>`;
  card.innerHTML = it.type === "code"
    ? `<div class="row"><span class="chip accent">${esc(skillName(it.skill))}</span></div><h3 class="ctitle">${esc(it.title)}</h3><details class="sources"><summary>The task</summary><div class="md"><p>${md(it.prompt)}</p></div>${it.given ? codeBlock(it.given) : ""}</details>${yourCode}`
    : it.type === "fr"
    ? `<div class="row"><span class="chip accent">${esc(skillName(it.skill))}</span></div>${it.set ? sourcesHTML(deck.sets[it.set], false) : ""}${frPrompt(it)}${yours}`
    : it.type === "frq"
    ? `<div class="row"><span class="chip accent">${esc(skillName(it.skill))}</span>${calcChip(it)}</div>${it.set ? sourcesHTML(deck.sets[it.set], false) : ""}${frqPrompt(it)}${yours}`
    : it.type === "essay"
    ? `<div class="row"><span class="chip accent">${esc(skillName(it.skill))}</span></div>${it.set ? sourcesHTML(deck.sets[it.set], false) : ""}<div class="prompt"><b>${essayLabel(it)}.</b> ${esc(it.prompt)}</div><div class="stack"><b>Your essay</b><div class="your">${esc(m.answers[it.id]?.text || "(blank)")}</div></div>`
    : `<div class="row"><span class="chip accent">${esc(skillName(it.skill))}</span><span class="src">${esc(it.source)}</span></div>
    ${codeBlock(it.listII, wrLabel(it, 1))}<div class="prompt">${esc(it.prompt)}</div>${yours}`;
  const area = document.createElement("div"); area.className = "stack"; card.append(area);
  const after = (score, levels) => {
    m.wr[it.id] = { score, levels: levels || [score] };
    area.insertAdjacentHTML("beforeend", `<div class="row"><button class="btn primary big" id="nextwr">${m.wi < wrs.length - 1 ? "Next" : "See my score"}</button></div>`);
    $("#nextwr").addEventListener("click", async () => {
      if (m.wi < wrs.length - 1) { m.wi++; renderMockScore(); window.scrollTo(0, 0); return; }
      await finishMock(); window.scrollTo(0, 0);
    });
    $("#nextwr").focus({ preventScroll: true });
  };
  if (it.type === "code" || it.type === "essay" || it.type === "frq") scoreRubric(area, it, after, { showModel: false });
  else if (it.type === "fr") scoreFR(area, it, (score) => after(score), { showExamples: false });
  else scoreWR(area, it, m.answers[it.id]?.text || "", after, { showModel: false });
}
const cardResult = (it, score) => {
  if (it.type === "fr") return score;
  const max = it.type === "wr" ? 4 : rowsMax(it);
  return score === max ? 1 : score * 2 >= max ? 0.5 : 0;
};
async function finishMock() {
  const m = app.mock;
  const A = m.items.slice(0, m.partA), B = m.items.slice(m.partA);
  const a = A.reduce((t, it) => t + (m.answers[it.id]?.choice === it.answer ? deck.mock.partA.points : 0), 0);
  const b = partBPoints(deck, B.map((it) => bScore(it, m)));
  m.score = a + b; m.a = a; m.b = b;
  const st = deckState();
  const now = Date.now();
  for (const it of A) {
    const ch = m.answers[it.id]?.choice;
    st.cards[it.id] = grade(st.cards[it.id] || blankCard(), ch === it.answer ? 1 : 0, now, { choice: ch ?? -1 });
  }
  for (const it of B) {
    const sc = bScore(it, m);
    st.cards[it.id] = grade(st.cards[it.id] || blankCard(), cardResult(it, sc), now, { wr: { text: (m.answers[it.id]?.text || "").slice(0, 3000), score: sc, levels: m.wr[it.id]?.levels, ts: now } });
  }
  const total = formOf(m.form)?.total ?? (A.length * deck.mock.partA.points + partBMax(deck, B));
  // resp: what this attempt answered (a choice, or the self-score of a written part), so the teacher sees every attempt.
  const resp = Object.fromEntries(m.items.map((it, k) => [it.id, k < m.partA ? (m.answers[it.id]?.choice ?? -1) : bScore(it, m)]));
  st.mocks.push({ ts: now, score: m.score, total, a, b, minutes: m.minutes, form: m.form, items: m.items.map((x) => x.id), resp });
  if (st.mocks.length > 30) st.mocks = st.mocks.slice(-30);
  m.phase = "done";
  await save();
  renderMock();
}
// Points by section, for a deck that names its sections: "Section I, Part A 12 / 15 · Section I, Part B 4 / 6 · Section II 3 / 6".
function sectionTotals(m, A, B) {
  const by = [];
  for (const it of [...A, ...B]) {
    const name = partName(it, B.includes(it));
    let r = by.find((x) => x.name === name); if (!r) by.push(r = { name, got: 0, max: 0 });
    r.got += A.includes(it) ? (m.answers[it.id]?.choice === it.answer ? deck.mock.partA.points : 0) : bScore(it, m);
    r.max += A.includes(it) ? deck.mock.partA.points : rowsMax(it);
  }
  return by.map((r) => `${esc(r.name)} ${r.got} / ${r.max}`).join(" · ");
}
function renderMockDone() {
  const m = app.mock;
  const cfg = deck.mock;
  const A = m.items.slice(0, m.partA), B = m.items.slice(m.partA);
  const aMax = A.length * cfg.partA.points, bMax = partBMax(deck, B);
  const set = isFR() && B[0]?.set ? deck.sets[B[0].set] : null;
  const total = formOf(m.form)?.total ?? (aMax + bMax);
  // Where the points went, by skill, and a set made of exactly the missed questions.
  const lost = {}, missedIds = [];
  for (const it of A) if (m.answers[it.id]?.choice !== it.answer) { lost[it.skill] = (lost[it.skill] || 0) + cfg.partA.points; missedIds.push(it.id); }
  for (const it of B) {
    const max = it.type === "wr" ? 4 : rowsMax(it), got = bScore(it, m);
    if (got < max) { lost[it.skill] = (lost[it.skill] || 0) + (it.type === "fr" && isFR() ? cfg.partB.scale : 1) * (max - got); missedIds.push(it.id); }
  }
  const lostRows = Object.entries(lost).sort((a, b) => b[1] - a[1]);
  view.className = "";
  view.innerHTML = `<section class="panel enter">
      <span class="eyebrow">${m.form ? esc(formOf(m.form).name) : esc(cfg.name)}</span>
      <div class="row"><span class="scorebig">${m.score} / ${total}</span><span class="muted">${B.length ? (cfg.sections ? sectionTotals(m, A, B) : `Part A ${m.a} / ${aMax} · Part B ${m.b} / ${bMax}`) : `${A.length} multiple choice`}${set ? ` (${B.filter((it) => bScore(it, m)).length} of ${B.length} subparts × ${cfg.partB.scale})` : ""}${cfg.clock ? ` · ${m.minutes} min` : ""}</span></div>
      ${lostRows.length ? `<div class="stack"><b>Where you lost points</b>
        <div class="tablewrap"><table><tbody>${lostRows.map(([sk, pts]) => `<tr><td>${esc(skillName(sk))}</td><td class="num">${+pts.toFixed(1)} point${pts === 1 ? "" : "s"}</td><td class="num"><button class="btn small" data-drill="skill:${esc(sk)}">Practice this skill</button></td></tr>`).join("")}</tbody></table></div>
        <div class="row"><button class="btn primary" data-drill="mock:${missedIds.join(",")}">Practice the ${missedIds.length} I missed</button></div></div>` : `<p><b>Every point earned.</b></p>`}
      <div class="row"><button class="btn primary" id="again">${deck.forms ? "All mocks" : `Another ${esc(cfg.name.toLowerCase())}`}</button><a class="btn" href="#review">Review</a><a class="btn ghost" href="#home">Home</a></div>
    </section>
    ${B.length ? `<h2>${esc(cfg.sections?.mcq || "Part A")}</h2>` : ""}
    ${A.map((it, k) => {
      const ch = m.answers[it.id]?.choice;
      const ok = ch === it.answer;
      return `<details class="panel" ${ok ? "" : "open"}><summary><span class="chip ${ok ? "good" : "bad"}">${ok ? cfg.partA.points : 0} / ${cfg.partA.points}</span> ${k + 1}. ${esc(skillName(it.skill))}</summary>
        <div class="stack">${it.stem ? `<p>${prose(it.stem)}</p>` : ""}${it.classes ? codeBlock(it.classes) : ""}${it.methods ? codeBlock(it.methods) : ""}${it.code ? codeBlock(it.code) : ""}${it.log ? `<pre class="log">${esc(it.log)}</pre>` : ""}<p><b>${prose(it.question)}</b></p>
        ${ch !== undefined && !ok ? `<div class="feedback no"><span class="verdict">You chose: ${choiceText(it.choices[ch])}</span><p>${prose(it.why[ch])}</p></div>` : ch === undefined ? `<div class="feedback no"><span class="verdict">Left blank.</span></div>` : ""}
        <div class="feedback ok"><span class="verdict">Answer: ${choiceText(it.choices[it.answer])}</span><p>${prose(it.why[it.answer])}</p></div></div></details>`;
    }).join("")}
    ${B.length && !cfg.sections ? `<h2>Part B${set ? `: ${esc(set.name)}` : ""}</h2>` : ""}
    ${set ? sourcesHTML(set, false) : ""}
    ${B.map((it, k) => (cfg.sections && partName(it) !== partName(B[k - 1] || A[0]) ? `<h2>${esc(partName(it, true))}</h2>` : "")
      + (!set && it.set && it.set !== B[k - 1]?.set ? sourcesHTML(deck.sets[it.set], false) : "")
      + (it.type === "code" || it.type === "essay" || it.type === "frq"
      ? `<details class="panel" open><summary><span class="chip ${bScore(it, m) === rowsMax(it) ? "good" : bScore(it, m) * 2 >= rowsMax(it) ? "warn" : "bad"}">${bScore(it, m)} / ${rowsMax(it)}</span> ${it.type === "essay" ? essayLabel(it) : it.type === "frq" ? `${esc(it.part || "")} ${tx(it.prompt)}` : esc(it.title)}</summary>
        <div class="stack">${it.type === "essay" ? `<div class="prompt">${esc(it.prompt)}</div><b>Your essay</b><div class="your">${esc(m.answers[it.id]?.text || "(blank)")}</div>` : it.type === "frq" ? `<b>Your work</b><div class="your">${esc(m.answers[it.id]?.text || "(blank)")}</div>` : `<b>Your code</b><pre class="code"><code>${esc(m.answers[it.id]?.text || "(blank)")}</code></pre>`}
        <div class="tablewrap"><table><tbody>${it.rows.map((r, k) => { const got = (m.wr[it.id].levels || [])[k] || 0, mx = r.max ?? (r.levels ? r.levels.length - 1 : 1); return `<tr><td class="num">${mx === 1 ? (got ? "✓" : "·") : `${got} / ${mx}`}</td><td><b>${esc(r.name)}</b><br><span class="small">${prose(r.levels ? r.levels[got] : r.earns || "")}</span></td></tr>`; }).join("")}</tbody></table></div>
        ${solutionHTML(it, bScore(it, m))}</div></details>`
      : it.type === "fr"
      ? `<details class="panel" ${bScore(it, m) ? "" : "open"}><summary><span class="chip ${bScore(it, m) ? "good" : "bad"}">${bScore(it, m)} / 1</span> ${esc(it.part)} (${esc(it.sub)}) ${esc(it.prompt)}</summary>
        <div class="stack"><b>Your answer</b><div class="your">${esc(m.answers[it.id]?.text || "(blank)")}</div>${frExamplesHTML(it, bScore(it, m))}</div></details>`
      : `<details class="panel" open><summary><span class="chip ${bScore(it, m) === 4 ? "good" : bScore(it, m) >= 2 ? "warn" : "bad"}">${bScore(it, m)} / 4</span> ${esc(skillName(it.skill))}</summary>
      <div class="stack"><div class="your">${esc(m.answers[it.id]?.text || "(blank)")}</div>${modelHTML(it, bScore(it, m), m.wr[it.id].levels.every((x) => x === 2))}</div></details>`)).join("")}`;
  $("#again").addEventListener("click", () => { app.mock = null; if (deck.forms) renderMock(); else startMock(); window.scrollTo(0, 0); });
  bindDrills();
}

// ------------------------------------------------------------------------------------------ questions (teachers)
// Every question in the course, by quiz or test and then review, each one open to read and to edit. An edit is saved in
// Firestore and laid over the question for every student, in every section that uses the deck, from their next visit.
const CODEISH = new Set(["code", "classes", "methods", "given", "solution"]);
const PREISH = new Set(["log", "sample"]);
const codeish = (k) => deck.lang !== "math" && CODEISH.has(k);
function fieldHTML(k, v) {
  if (Array.isArray(v)) return `<ul class="small">${v.map((x) => `<li>${prose(x)}</li>`).join("")}</ul>`;
  if (codeish(k)) return codeBlock(v);
  if (PREISH.has(k)) return `<pre class="log">${esc(v)}</pre>`;
  if (k === "listII") return codeBlock(v, "List (ii)");
  return `<p>${deck.lang === "java" ? md(v) : prose(v)}</p>`;
}
function questionBody(it) {
  const fields = editableFields(it);
  const choice = Array.isArray(it.choices) && typeof it.answer === "number";
  return `${it.set && deck.sets?.[it.set] ? sourcesHTML(deck.sets[it.set], false) : ""}
    ${fields.filter(([k]) => !(choice && (k === "choices" || k === "why"))).map(([k, label]) => `<div class="qfield"><span class="small muted">${esc(label)}</span>${fieldHTML(k, it[k])}</div>`).join("")}
    ${choice ? `<ol class="qchoices" type="A">${it.choices.map((c, k) => `<li class="${k === it.answer ? "right" : ""}"><b>${k === it.answer ? "✓ " : ""}${choiceText(c)}</b>${it.why?.[k] ? `<br><span class="small muted">${prose(it.why[k])}</span>` : ""}</li>`).join("")}</ol>` : ""}
    ${it.rows ? `<div class="qfield"><span class="small muted">Rubric</span><ul class="small">${it.rows.map((r) => `<li><b>${esc(r.name)}</b>${r.earns ? `: ${prose(r.earns)}` : ""}</li>`).join("")}</ul></div>` : ""}
    <div class="row"><button class="btn small" data-qedit="${esc(it.id)}">Edit</button></div>`;
}
function questionEditor(it) {
  const fields = editableFields(it);
  const choice = Array.isArray(it.choices) && typeof it.answer === "number";
  const ta = (name, v, k) => `<textarea class="wr ${codeish(k) ? "mono" : ""}" name="${name}" rows="${Math.min(14, Math.max(2, Math.ceil(String(v).length / 80) + String(v).split("\n").length - 1))}" spellcheck="${codeish(k) ? "false" : "true"}">${esc(v)}</textarea>`;
  return `<form class="stack qedit" data-qform="${esc(it.id)}">
    ${fields.filter(([k]) => !(choice && (k === "choices" || k === "why"))).map(([k, label]) => `<label class="stack"><span class="small muted">${esc(label)}</span>
      ${Array.isArray(it[k]) ? it[k].map((v, j) => ta(`${k}.${j}`, v, k)).join("") : ta(k, it[k], k)}</label>`).join("")}
    ${choice ? `<fieldset class="stack"><legend class="small muted">Choices. Pick the right answer; each choice has its explanation under it.</legend>
      ${it.choices.map((c, j) => `<div class="qchoice"><label class="small"><input type="radio" name="answer" value="${j}" ${j === it.answer ? "checked" : ""}> Right answer: choice ${"ABCDEFGH"[j]}</label>
        <span class="small muted">Choice ${"ABCDEFGH"[j]}</span>${ta(`choices.${j}`, c, deck.lang === "none" ? "" : "code")}${Array.isArray(it.why) ? `<span class="small muted">Explanation of choice ${"ABCDEFGH"[j]}</span>${ta(`why.${j}`, it.why[j] || "", "")}` : ""}</div>`).join("")}</fieldset>` : ""}
    <label class="small"><input type="checkbox" name="hidden" ${it.hidden ? "checked" : ""}> Hide this question from students (it stays here, and its points come off the total)</label>
    ${it.verify ? `<p class="small muted">This question was checked by running its code. An edit is not rechecked, so run any changed code yourself.</p>` : ""}
    <div class="row"><button class="btn primary" type="submit">Save</button><button class="btn" type="button" data-qcancel="${esc(it.id)}">Cancel</button>
      ${it.edited ? `<button class="btn ghost" type="button" data-qrestore="${esc(it.id)}">Restore original</button>` : ""}</div></form>`;
}
function questionRow(it, n, open = false) {
  const chips = `${it.hidden ? `<span class="chip bad">Hidden</span>` : ""}${it.edited ? `<span class="chip warn" title="${esc(new Date(it.edited.ts).toLocaleString())}">Edited by ${esc(it.edited.by || "a teacher")} · ${ago(it.edited.ts)}</span>` : ""}`;
  return `<details class="qitem" data-qid="${esc(it.id)}" ${open ? "open" : ""}><summary><b>${n}.</b> <span class="chip">${esc(typeLabel(it.type))}</span>${it.topic ? `<span class="chip">${esc(it.topic)}</span>` : ""}${chips} ${tx(snippet(it))}</summary>
    <div class="qbody stack">${open ? questionBody(it) : ""}</div></details>`;
}
function renderQuestions() {
  view.className = "";
  const all = everyItem(deck);
  const byForm = new Map();
  for (const x of all) { const k = x.form || null; if (!byForm.has(k)) byForm.set(k, []); byForm.get(k).push(x.it); }
  const groups = [];
  for (const f of deck.forms || []) { const g = f.group || deck.mock?.title || "Mocks"; let G = groups.find((y) => y.name === g); if (!G) groups.push(G = { name: g, forms: [] }); G.forms.push(f); }
  const formHead = (f) => { const list = byForm.get(f) || []; const hidden = list.filter((it) => it.hidden).length;
    return `${esc(f.name)} <span class="small muted">· ${list.length} questions${hidden ? `, ${hidden} hidden` : ""} · ${f.total ?? deck.mock?.total} points</span>`; };
  const formBlock = (f) => `<details class="qform" data-form="${esc(f.id)}"><summary><h3>${formHead(f)}</h3></summary>${(byForm.get(f) || []).map((it, k) => questionRow(it, k + 1)).join("")}</details>`;
  const review = byForm.get(null) || [];
  const bySkill = deck.skills.map((sk) => ({ sk, list: review.filter((it) => it.skill === sk.id) })).filter((x) => x.list.length);
  const edited = all.filter((x) => x.it.edited).length;
  view.innerHTML = `<div id="qpage"><section class="hero"><span class="eyebrow">Questions · ${esc(course.name)}</span><h1>Every question</h1>
      <p class="muted">Open a question to read it with its sources and answer. <b>Edit</b> changes it for every student${courses.filter((c) => c.decks.includes(deck)).length > 1 ? " in every section" : ""}, from their next visit; <b>Hide</b> takes it off without deleting it; <b>Restore original</b> undoes an edit.${edited ? ` ${edited} question${edited === 1 ? " is" : "s are"} edited now.` : ""}</p></section>
    <div class="row"><label class="sr" for="qsearch">Search the questions</label><input id="qsearch" type="search" placeholder="Search the questions" class="wide-in"></div>
    ${groups.map((g) => `<details class="panel qgroup"><summary><b>${esc(g.name)}</b> <span class="small muted">· ${g.forms.length} form${g.forms.length === 1 ? "" : "s"}</span></summary>${g.forms.map(formBlock).join("")}</details>`).join("")}
    ${bySkill.length ? `<details class="panel qgroup"><summary><b>Review</b> <span class="small muted">· ${review.length} questions</span></summary>
      ${bySkill.map(({ sk, list }) => `<details class="qform"><summary><h3>${esc(sk.name)} <span class="small muted">· ${list.length} questions</span></h3></summary>${list.map((it, k) => questionRow(it, k + 1)).join("")}</details>`).join("")}</details>` : ""}</div>`;
  const root = $("#qpage");
  const itemOf = (id) => all.find((x) => x.it.id === id)?.it;
  const numberOf = (el) => +el.querySelector("summary b").textContent.replace(".", "");
  const redraw = (id, open = true) => {
    const el = $(`details.qitem[data-qid="${CSS.escape(id)}"]`); el.outerHTML = questionRow(itemOf(id), numberOf(el), open);
    const f = all.find((x) => x.it.id === id)?.form; if (f) $(`.qform[data-form="${CSS.escape(f.id)}"] h3`).innerHTML = formHead(f);
  };
  root.addEventListener("toggle", (e) => {
    const el = e.target; if (!el.matches?.("details.qitem") || !el.open) return;
    const body = $(".qbody", el); if (!body.innerHTML.trim()) body.innerHTML = questionBody(itemOf(el.dataset.qid));
  }, true);
  root.addEventListener("click", async (e) => {
    const t = e.target.closest("[data-qedit],[data-qcancel],[data-qrestore]"); if (!t) return;
    e.preventDefault();
    if (t.dataset.qedit) { const it = itemOf(t.dataset.qedit); $(".qbody", t.closest("details")).innerHTML = questionEditor(it); return; }
    if (t.dataset.qcancel) return redraw(t.dataset.qcancel);
    if (t.dataset.qrestore) {
      const it = itemOf(t.dataset.qrestore), id = editId(deck, it);
      try { await backend.deleteEdit(id); } catch (err) { toast("Not restored: " + (err.code || err.message)); return; }
      edits = edits.filter((x) => x.id !== id); applyEdits(allDecks, edits); redraw(it.id); toast("Restored the original.");
    }
  });
  root.addEventListener("submit", async (e) => {
    const form = e.target.closest("form[data-qform]"); if (!form) return;
    e.preventDefault();
    const it = itemOf(form.dataset.qform), fd = new FormData(form), values = {};
    for (const [k] of editableFields(originalOf(deck, it))) {
      const orig = originalOf(deck, it)[k];
      values[k] = Array.isArray(orig) ? orig.map((_, j) => String(fd.get(`${k}.${j}`) ?? it[k][j]).replace(/\r\n/g, "\n")) : String(fd.get(k) ?? it[k]).replace(/\r\n/g, "\n");
    }
    const answer = fd.has("answer") ? +fd.get("answer") : it.answer;
    const diff = diffOf(deck, it, values, answer, fd.has("hidden"));
    const id = editId(deck, it);
    try {
      if (diff) { const doc = { deck: deck.id, item: it.id, ...diff, by: displayName() || user.email || "", ts: Date.now() }; await backend.saveEdit(id, doc); edits = [...edits.filter((x) => x.id !== id), { id, ...doc }]; }
      else { await backend.deleteEdit(id).catch(() => {}); edits = edits.filter((x) => x.id !== id); }
    } catch (err) { toast("Not saved: " + (err.code || err.message)); return; }
    applyEdits(allDecks, edits); redraw(it.id);
    toast(diff ? (diff.hidden ? "Saved. The question is hidden from students." : "Saved. Students see the change on their next visit.") : "No changes from the original, so the original stays.");
  });
  $("#qsearch").addEventListener("input", (e) => {
    const q = e.target.value.trim().toLowerCase();
    $$("details.qitem").forEach((el) => { const it = itemOf(el.dataset.qid); el.hidden = !!q && !JSON.stringify([it.id, ...editableFields(it).map(([k]) => it[k])]).toLowerCase().includes(q); });
    // While searching, only the topics and groups with a match stay, opened.
    $$("details.qform, details.qgroup").forEach((g) => { const any = $$("details.qitem", g).some((x) => !x.hidden); g.hidden = !!q && !any; if (q) g.open = any; });
  });
}

// ------------------------------------------------------------------------------------------ teacher
// ------------------------------------------------------------------------------------------ roster records
// A pasted line: "Name, school email" with an optional GitHub username (or @username) and GitHub number after it, in any order after the name.
// A name left off is made from the email (Sicheng.Chen@... gives "Sicheng Chen").
const nameFromEmail = (email) => email.split("@")[0].split(/[._]/).filter(Boolean).map((w) => w[0].toUpperCase() + w.slice(1)).join(" ");
function parseRosterLine(line) {
  const parts = line.split(/[,\t]/).map((x) => x.trim()).filter(Boolean);
  if (!parts.length) return null;
  const isEmail = (p) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(p);
  const email = (parts.find(isEmail) || "").toLowerCase();
  const ghId = parts.find((p) => /^\d+$/.test(p)) || "";
  const rest = parts.filter((p) => !isEmail(p) && p !== ghId);
  const handle = rest.find((p) => p.startsWith("@"));
  const words = rest.filter((p) => !p.startsWith("@"));
  // The first word is the name; a second one is a GitHub username written without the @.
  const name = words[0] || (email ? nameFromEmail(email) : "");
  const login = handle ? handle.slice(1) : words[1] || "";
  return { name: name || login, email, ghId, login };
}
// Only the fields the rules allow, in their types.
const recordOf = (r) => ({ name: r.name || "", email: (r.email || "").toLowerCase(), ghId: r.ghId ? String(r.ghId) : "", login: r.login || "", courses: r.courses || [] });
// The first password of every student sign-in made from a roster. Nothing stores it per student; the site makes each
// student choose their own at first sign-in and will not accept this one.
const FIRST_PASSWORD = "goblazers";
const WORDS = "maple river cedar harbor meadow canyon pebble summit willow lantern falcon orchard prairie comet island garden copper violet amber thunder".split(" ");
const randomPassword = () => `${WORDS[Math.floor(Math.random() * WORDS.length)]}-${WORDS[Math.floor(Math.random() * WORDS.length)]}-${10 + Math.floor(Math.random() * 90)}`;
// Adds or updates records for a course. A student already on file (same school email or same GitHub number) keeps everything
// and gets this course; a record that gains a school email moves from gh-<number> to the email, progress and all.
async function addStudents(list, c, say = () => {}) {
  let added = 0, logins = 0;
  for (const e of list) {
    say(`Adding ${e.name}...`);
    const had = await backend.findStudent({ email: e.email, ghId: e.ghId });
    const rec = recordOf({
      name: e.name || had?.name, email: e.email || had?.email, ghId: e.ghId || had?.ghId, login: e.login || had?.login,
      courses: [...new Set([...(had?.courses || []), c.id])],
    });
    const id = studentId(rec);
    await backend.saveStudent(id, rec);
    if (had && had.id !== id) {
      const old = (await backend.loadProgressMany([had.id]))[had.id];
      if (old) { await backend.saveProgress(id, old); await backend.deleteProgress(had.id); }
      await backend.deleteStudent(had.id);
    }
    // A student with GitHub on file signs in with GitHub: no password login is made for them.
    if (c.passwords && rec.email && !rec.ghId) {
      // Every new sign-in starts with the same first password; the student must choose their own at first sign-in.
      if ((await backend.createLogin(rec.email, FIRST_PASSWORD)) === "created") logins++;
    }
    added++;
  }
  return { added, logins };
}
// Once, for the admin: the roster from before 11/1 (keyed by GitHub number) becomes student records, with their progress.
async function moveOldRoster() {
  const old = await backend.listOldRoster();
  if (!old.length) return;
  const users = await backend.listOldUsers();
  let moved = 0;
  for (const r of old) {
    if (await backend.findStudent({ ghId: r.id })) continue;
    const id = "gh-" + r.id;
    await backend.saveStudent(id, recordOf({ name: r.name, ghId: r.id, login: r.login, courses: r.courses?.length ? r.courses : ["csp"] }));
    const u = users.find((x) => String(x.ghId) === String(r.id));
    if (u && !(await backend.loadProgress(id))) await backend.saveProgress(id, { firstSeen: u.firstSeen || Date.now(), lastActive: u.lastActive || 0, decks: u.decks || {}, book: u.book || {} });
    moved++;
  }
  if (moved) toast(`Moved ${moved} students from the old roster.`);
}
// The admin's list of teachers: who may see which course's Class tab.
// The Class tab's Assessments panel: put a quiz or test on the calendar, with its date, sections, and what it covers.
// Students in those sections see the countdown and a "Review for it" set made of exactly those questions.
function renderAssessPanel(editing = null) {
  const box = $("#assesspanel"); if (!box) return;
  const mine = teacherCourses().filter((c) => c.decks[0] === deck);
  const list = assessments.filter((a) => a.deck === deck.id && (a.courses || []).some((id) => mine.some((c) => c.id === id))).sort((a, b) => a.date.localeCompare(b.date));
  const today = isoDay(), cat = topicCatalog(deck);
  const ed = editing ? assessments.find((a) => a.id === editing) : null;
  const sel = new Set(ed?.topics || []);
  const secText = (a) => mine.length > 1 ? a.courses.map((id) => courseById(id)?.period || id).join(", ") + " · " : "";
  box.innerHTML = `<h2>Assessments</h2>
    <p class="small muted">Put a quiz or test on the calendar with the units or topics it covers. Students in the sections checked see a countdown and a <b>Review for it</b> set made of just those questions.</p>
    ${list.length ? `<div class="tablewrap"><table><tbody>${list.map((a) => `<tr${a.date < today ? ' class="muted"' : ""}><td><b>${esc(a.name)}</b> <span class="small muted">· ${esc(dayLabel(a.date))}${a.date < today ? " (past)" : ""}</span><br><span class="small muted">${esc(secText(a))}${esc(coversText(a))} · ${deck.items.filter(covers(a)).length} review questions</span></td>
      <td class="num"><button class="btn ghost small" data-aedit="${esc(a.id)}">Edit</button><button class="btn ghost small" data-adel="${esc(a.id)}">Delete</button></td></tr>`).join("")}</tbody></table></div>` : `<p class="small muted">None yet.</p>`}
    <details id="assessadd" ${ed ? "open" : ""}><summary><b>${ed ? "Edit " + esc(ed.name) : "Add an assessment"}</b></summary>
    <form id="assessform" class="stack">
      <div class="row"><label class="stack"><span class="small muted">Name</span><input name="name" required maxlength="100" value="${esc(ed?.name || "")}" placeholder="Unit 3 Quiz"></label>
        <label class="stack"><span class="small muted">Date</span><input type="date" name="date" required value="${esc(ed?.date || "")}"></label></div>
      ${mine.length > 1 ? `<div class="row small"><span class="muted">Sections:</span>${mine.map((c) => `<label><input type="checkbox" name="course" value="${c.id}" ${(ed ? ed.courses.includes(c.id) : c === course) ? "checked" : ""}> ${esc(c.period || c.short)}</label>`).join("")}</div>` : ""}
      <div class="stack"><span class="small muted">What it covers: check a whole unit, or open a unit and check its topics.</span>
        ${cat.map(({ sk, topics }) => `<details class="aunit"><summary><label><input type="checkbox" name="unit" value="${esc(sk.id)}" ${sel.has(sk.id) ? "checked" : ""}> ${esc(sk.name)}</label>${topics.length ? ` <span class="small muted">· ${topics.length} topics</span>` : ""}</summary>
          ${topics.length ? `<div class="atopics">${topics.map(({ t, name }) => `<label class="small"><input type="checkbox" name="topic" value="${esc(t)}" data-unit="${esc(sk.id)}" ${sel.has(t) || sel.has(sk.id) ? "checked" : ""}> <b>${esc(t)}</b>${name ? " " + esc(name) : ""}</label>`).join("")}</div>` : ""}</details>`).join("")}</div>
      <div class="row"><button class="btn primary" type="submit">${ed ? "Save" : "Add"}</button>${ed ? `<button class="btn" type="button" id="acancel">Cancel</button>` : ""}<span class="small" id="amsg"></span></div>
    </form></details>`;
  const form = $("#assessform", box);
  // A unit box checks or clears its topics; a topic box keeps its unit box in step.
  form.addEventListener("change", (e) => {
    const t = e.target;
    if (t.name === "unit") $$(`input[name=topic][data-unit="${CSS.escape(t.value)}"]`, form).forEach((x) => { x.checked = t.checked; });
    if (t.name === "topic") { const all = $$(`input[name=topic][data-unit="${CSS.escape(t.dataset.unit)}"]`, form); $(`input[name=unit][value="${CSS.escape(t.dataset.unit)}"]`, form).checked = all.every((x) => x.checked); }
  });
  $("#acancel", box)?.addEventListener("click", () => renderAssessPanel());
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const fd = new FormData(form), msg = $("#amsg", box);
    const topics = [];
    for (const { sk, topics: ts } of cat) {
      if ($(`input[name=unit][value="${CSS.escape(sk.id)}"]`, form).checked) topics.push(sk.id);
      else topics.push(...ts.map((x) => x.t).filter((t) => $(`input[name=topic][value="${CSS.escape(t)}"]`, form).checked));
    }
    const chosen = mine.length > 1 ? fd.getAll("course") : [course.id];
    if (!topics.length) { msg.textContent = "Check at least one unit or topic."; return; }
    if (!chosen.length) { msg.textContent = "Check at least one section."; return; }
    const id = ed?.id || "a" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
    const doc = { courses: chosen, deck: deck.id, name: String(fd.get("name")).trim().slice(0, 100), date: String(fd.get("date")), topics, by: displayName() || user.email || "", ts: Date.now() };
    try { await backend.saveAssessment(id, doc); } catch (err) { msg.textContent = "Not saved: " + (err.code || err.message); return; }
    assessments = [...assessments.filter((a) => a.id !== id), { id, ...doc }];
    toast(`${doc.name} is on the calendar for ${dayLabel(doc.date)}. Students see it on their next visit.`);
    renderAssessPanel();
  });
  $$("[data-aedit]", box).forEach((b) => b.addEventListener("click", () => { renderAssessPanel(b.dataset.aedit); $("#assessadd").scrollIntoView({ block: "nearest" }); }));
  $$("[data-adel]", box).forEach((b) => b.addEventListener("click", async () => {
    if (b.dataset.armed !== "1") { b.dataset.armed = "1"; b.textContent = "Delete it?"; return; }
    try { await backend.deleteAssessment(b.dataset.adel); } catch (err) { toast("Not deleted: " + (err.code || err.message)); return; }
    assessments = assessments.filter((a) => a.id !== b.dataset.adel); toast("Deleted."); renderAssessPanel();
  }));
}

async function renderTeachersPanel() {
  const box = $("#teacherspanel"); if (!box) return;
  const list = await backend.listTeachers().catch(() => []);
  box.innerHTML = `<h2>Teachers</h2>
    <p class="small muted">A teacher signs in with their school email and sees the Class tab of the courses checked here. Adding a teacher makes their sign-in and emails them a link to choose a password. You (GitHub @jd12) see every course.</p>
    <div class="tablewrap"><table><tbody>${list.map((t) => `<tr><td><b>${esc(t.name)}</b><br><span class="small muted">${esc(t.id)}</span></td><td class="small">${(t.courses || []).map((id) => esc(courseById(id)?.short || id)).join(", ")}</td>
      <td class="num"><button class="btn ghost small" data-treset="${esc(t.id)}">Send reset link</button><button class="btn ghost small" data-tdel="${esc(t.id)}">Remove</button></td></tr>`).join("") || `<tr><td class="muted">No other teachers yet.</td></tr>`}</tbody></table></div>
    <form class="stack" id="addteacher"><b>Add a teacher</b>
      <div class="row"><input type="text" id="tname" placeholder="Name" required><input type="email" id="temail" placeholder="school email" required></div>
      <div class="row">${courses.map((c) => `<label class="small"><input type="checkbox" value="${c.id}"> ${esc(c.short)}</label>`).join("")}</div>
      <div class="row"><button class="btn primary" type="submit">Add teacher</button><span class="small muted" id="tmsg"></span></div></form>`;
  $$("[data-treset]", box).forEach((b) => b.addEventListener("click", async () => { await backend.sendReset(b.dataset.treset); toast(`Reset link sent to ${b.dataset.treset}.`); }));
  $$("[data-tdel]", box).forEach((b) => b.addEventListener("click", async () => {
    if (!b.dataset.sure) { b.dataset.sure = "1"; b.textContent = "Remove for good"; return; }
    await backend.deleteTeacher(b.dataset.tdel); renderTeachersPanel();
  }));
  $("#addteacher", box).addEventListener("submit", async (ev) => {
    ev.preventDefault();
    const email = $("#temail", box).value.trim().toLowerCase(), name = $("#tname", box).value.trim();
    const cs = $$("input[type=checkbox]:checked", box).map((x) => x.value);
    if (!cs.length) { $("#tmsg", box).textContent = "Check at least one course."; return; }
    $("#tmsg", box).textContent = "Adding...";
    try {
      const made = await backend.createLogin(email, randomPassword() + randomPassword());
      await backend.saveTeacher(email, { name, courses: cs });
      await backend.sendReset(email);
      toast(made === "created" ? `Added. ${email} was emailed a link to choose a password.` : `Added. ${email} already had a sign-in; a reset link was emailed too.`);
      renderTeachersPanel();
    } catch (e) { $("#tmsg", box).textContent = "Not added: " + (e.code || e.message); }
  });
}
// Printable cards with each student's first password, for students who have not chosen their own yet.
async function renderCards() {
  view.className = "wide";
  view.innerHTML = `<p class="muted">Loading...</p>`;
  // Students with GitHub on file sign in with GitHub: their card says so, with no password. The others get their first
  // password until they choose their own.
  const roster = (await backend.listStudents(course.id)).filter((r) => r.email || r.ghId);
  const prog = await backend.loadProgressMany(roster.filter((r) => !r.ghId).map((r) => r.id));
  const rows = [];
  for (const r of roster.sort(byLastName)) {
    if (r.ghId) { rows.push({ ...r, github: true }); continue; }
    if (prog[r.id]?.pwSet) continue;
    rows.push({ ...r, password: FIRST_PASSWORD });
  }
  const link = location.origin + location.pathname;
  const gh = rows.filter((r) => r.github).length;
  view.innerHTML = `<div class="row noprint"><a class="btn" href="#teacher">Back to the Class tab</a><button class="btn primary" id="printcards">Print</button><span class="small muted">${rows.length - gh} students have not chosen their own password yet${gh ? `; ${gh} sign in with GitHub` : ""}.</span></div>
    <div class="cards">${rows.map((r) => `<div class="logincard"><b>${esc(r.name)}</b><span>${esc(course.name)}</span><span>Go to <span class="mono">${esc(link)}</span></span>
      ${r.github ? `<span><b>Sign in with GitHub</b>${r.login ? `, as <span class="mono">@${esc(r.login)}</span>` : ""}.</span><span class="small">Use the GitHub button, not the email form. Your progress is the same in every course.</span>`
      : `<span>Email: <span class="mono">${esc(r.email)}</span></span><span>First password: <span class="mono">${esc(r.password)}</span></span><span class="small">You choose your own password the first time you sign in.</span>`}</div>`).join("")}</div>`;
  $("#printcards").addEventListener("click", () => window.print());
}

// One student, for their teacher: every quiz and test they took (open one for each answer they gave), then review by skill
// (open a skill for each question and their last answer).
async function renderStudent(id) {
  view.className = "wide";
  view.innerHTML = `<p class="muted">Loading...</p>`;
  const roster = await backend.listStudents(course.id).catch(() => []);
  const r = roster.find((x) => x.id === id);
  if (!r) { view.innerHTML = `<section class="panel"><p>That student is not on the ${esc(course.short)} roster.</p><a class="btn" href="#teacher">Back to the class</a></section>`; return; }
  const p = (await backend.loadProgressMany([id]))[id];
  const st = p?.decks?.[deck.id] || { cards: {}, mocks: [] };
  const cards = st.cards || {};
  const byId = Object.fromEntries(allItems().map((it) => [it.id, it]));
  const formName = (fid) => deck.forms?.find((f) => f.id === fid)?.name || deck.mock?.name || "Mock";
  const when = (ts) => new Date(ts).toLocaleString("en-US", { weekday: "short", month: "numeric", day: "numeric", hour: "numeric", minute: "2-digit" });
  const n = Object.values(cards).reduce((t, c) => t + (c.n || 0), 0), c = Object.values(cards).reduce((t, x) => t + (x.c || 0), 0);
  const maxOf = (it) => it.type === "fr" ? 1 : it.type === "wr" ? 4 : rowsMax(it);
  // One question with this student's answer. choice: the choice they picked (-1 blank); score: their self-score on a written one.
  const answerHTML = (it, { choice, score, latest }) => {
    const card = cards[it.id];
    if (isChoice(it)) {
      const ok = choice === it.answer;
      return `<div class="feedback ${ok ? "ok" : "no"}"><span class="verdict">${choice === undefined || choice === null ? "Answer not recorded." : choice < 0 ? "Left blank." : `${ok ? "Right" : "Wrong"}: ${choiceText(it.choices[choice])}`}</span></div>${ok ? "" : `<p class="small"><b>Answer:</b> ${choiceText(it.choices[it.answer])}</p>`}`;
    }
    if (it.type === "output" || it.type === "trace") return `<div class="feedback ${card?.last === 1 ? "ok" : "no"}"><span class="verdict">${card?.last === 1 ? "Right" : "Wrong"}</span></div>${card?.typed ? `<pre class="log">${esc(card.typed)}</pre>` : ""}`;
    const text = latest !== false && card?.wr ? card.wr.text : null, sc = score ?? card?.wr?.score;
    return `<div class="feedback ${sc === maxOf(it) ? "ok" : sc ? "part" : "no"}"><span class="verdict">Self-scored ${sc ?? "?"} / ${maxOf(it)}</span></div>${text !== null ? `<div class="your">${esc(text || "(blank)")}</div>` : `<p class="small muted">The written answer kept is from their latest attempt.</p>`}`;
  };
  const question = (it, k, ans) => `<div class="stuq"><p><b>${k + 1}.</b> <span class="chip">${esc(typeLabel(it.type))}</span>${it.topic ? `<span class="chip">${esc(it.topic)}</span>` : ""} ${tx(snippet(it))}</p>${answerHTML(it, ans)}</div>`;
  const mocks = [...(st.mocks || [])].sort((a, b) => b.ts - a.ts);
  const reviewBySkill = deck.skills.map((sk) => ({ sk, list: deck.items.filter((it) => it.skill === sk.id && cards[it.id]?.n) })).filter((x) => x.list.length);
  view.innerHTML = `<p><a href="#teacher">&larr; ${esc(course.period || course.short)} class</a></p>
    <section class="hero"><span class="eyebrow">${esc(course.name)}</span><h1>${esc(r.name || r.login)}</h1>
      <p class="muted">${esc(r.email || "")}${r.login ? ` · GitHub @${esc(r.login)}` : ""} · ${p ? "last active " + ago(p.lastActive) : "not signed in yet"} · ${n} answers${n ? `, ${pct(c / n)}% right` : ""} · ${missesOf(cards).length} to redo</p></section>
    <section class="panel"><h2>Quizzes and tests</h2>
      ${mocks.length ? mocks.map((mk, k) => `<details class="stuattempt" data-k="${k}"><summary><b>${esc(formName(mk.form))}</b> <span class="small muted">· ${esc(when(mk.ts))}${mk.minutes ? ` · ${mk.minutes} min` : ""}</span> <span class="chip ${mk.score >= mk.total * 0.8 ? "good" : mk.score >= mk.total * 0.5 ? "warn" : "bad"}">${mk.score} / ${mk.total}</span></summary><div class="stack"></div></details>`).join("") : `<p class="muted">None taken yet.</p>`}
    </section>
    <section class="panel"><h2>Review</h2>
      ${reviewBySkill.length ? reviewBySkill.map(({ sk, list }) => { const nn = list.reduce((t, it) => t + cards[it.id].n, 0), cc = list.reduce((t, it) => t + cards[it.id].c, 0); return `<details class="stuskill" data-skill="${esc(sk.id)}"><summary><b>${esc(sk.name)}</b> <span class="small muted">· ${list.length} question${list.length === 1 ? "" : "s"}, ${nn} answer${nn === 1 ? "" : "s"}, ${pct(cc / nn)}% right</span></summary><div class="stack"></div></details>`; }).join("") : `<p class="muted">No review yet.</p>`}
    </section>`;
  // Open a quiz or test: each question with what this attempt answered. Attempts saved before 11/2 show the latest answer.
  $$("details.stuattempt").forEach((d) => d.addEventListener("toggle", () => {
    const body = $(".stack", d); if (!d.open || body.innerHTML) return;
    const mk = mocks[+d.dataset.k], latest = mk === mocks.find((x) => x.form === mk.form);
    const ids = mk.items?.length ? mk.items : (deck.forms?.find((f) => f.id === mk.form)?.items || []).map((x) => x.id);
    body.innerHTML = ids.map((iid, k) => { const it = byId[iid]; if (!it) return ""; const rv = mk.resp?.[iid];
      return question(it, k, isChoice(it) ? { choice: rv !== undefined ? rv : latest ? cards[iid]?.pick : undefined } : { score: rv, latest }); }).join("") || `<p class="muted">The questions of this attempt were not recorded.</p>`;
  }));
  $$("details.stuskill").forEach((d) => d.addEventListener("toggle", () => {
    const body = $(".stack", d); if (!d.open || body.innerHTML) return;
    const list = reviewBySkill.find((x) => x.sk.id === d.dataset.skill).list.sort((a, b) => cards[b.id].ts - cards[a.id].ts);
    body.innerHTML = list.map((it, k) => { const cd = cards[it.id];
      return `${question(it, k, isChoice(it) ? { choice: cd.last === 1 ? it.answer : cd.pick } : {})}<p class="small muted">Seen ${cd.n} time${cd.n === 1 ? "" : "s"}, last ${ago(cd.ts)}.</p>`; }).join("");
  }));
}

async function renderTeacher() {
  view.className = "wide";
  view.innerHTML = `<p class="muted">Loading the class...</p>`;
  let roster, requests, progressById, cards = {};
  try {
    if (isAdmin()) await moveOldRoster();
    [roster, requests] = await Promise.all([backend.listStudents(course.id), backend.listRequests()]);
    progressById = await backend.loadProgressMany(roster.map((r) => r.id));
  }
  catch (e) { view.innerHTML = `<section class="panel"><h1>Could not load the class</h1><p>${esc(e.message)}</p><p class="muted">Check that the rules in firestore.rules are published, and that your account is a teacher of this course.</p></section>`; return; }
  const rows = roster.map((r) => ({ ...r, user: progressById[r.id] })).sort(byLastName);
  const stats = (u) => {
    const st = u?.decks?.[deck.id]; if (!st) return null;
    const cards = Object.values(st.cards || {});
    const n = cards.reduce((t, c) => t + (c.n || 0), 0), c = cards.reduce((t, x) => t + (x.c || 0), 0);
    return { n, acc: n ? c / n : 0, sm: skillMastery(deck, st.cards || {}), mocks: st.mocks || [], cards: st.cards || {} };
  };
  rows.forEach((r) => { r.s = stats(r.user); });
  const revSkills = deck.skills.filter((sk) => deck.items.some((it) => it.skill === sk.id));
  // One column per mock form, or, when a course has many forms, one per assessment (the best percent on any of its forms), only for assessments someone has taken.
  const takenForms = new Set(rows.flatMap((r) => (r.s?.mocks || []).map((x) => x.form)));
  const colOf = (f) => f.col || f.group || f.name;
  const groupsOf = [...new Set((deck.forms || []).map(colOf))];
  const mockCols = (deck.forms || []).length > 6
    ? groupsOf.map((g) => { const fs = deck.forms.filter((f) => colOf(f) === g); return { label: g.replace(/^Quiz (\d+).*/, "Q$1").replace(/^Unit (\w+) Test.*/, "U$1").replace(/^Unit (\d+): .*/, "U$1 test").replace(/^Unit (\d+) topic quizzes$/, "U$1 quiz").replace(/^Unit 4A Checkpoint/, "4A").replace(/^AP Practice Section/, "PS").replace(/^AP Practice Exam/, "AP").replace(/^Midterm/, "Mid"), title: g + ": best percent on any practice form", ids: fs.map((f) => f.id), fmt: (t) => pct(Math.max(...t.map((x) => x.score / (x.total || 1)))) + "%" }; })
        .filter((c) => c.ids.some((id) => takenForms.has(id)))
    : (deck.forms || []).map((f) => ({ label: f.short || f.name.replace(/^Mock (Test|Quiz) /, "Mock "), title: `${f.name}: best score of ${f.total ?? deck.mock.total}`, ids: [f.id], fmt: (t) => Math.max(...t.map((x) => x.score)) }));
  const active = rows.filter((r) => r.user?.lastActive > Date.now() - 7 * DAY).length;
  const totalN = rows.reduce((t, r) => t + (r.s?.n || 0), 0);
  const totalC = rows.reduce((t, r) => t + (r.s ? r.s.acc * r.s.n : 0), 0);
  const mocks = rows.flatMap((r) => r.s?.mocks || []);

  // Class view of every item
  const formItems = (deck.forms || []).flatMap((f) => f.items.map((it) => ({ ...it, form: f.name }))).filter((it) => rows.some((r) => r.s?.cards?.[it.id]?.n));
  const items = [...deck.items, ...formItems].map((it) => {
    let n = 0, c = 0, missedLast = 0, students = 0; const wrong = {}; const wrs = [];
    for (const r of rows) {
      const card = r.s?.cards?.[it.id]; if (!card?.n) continue;
      students++; n += card.n; c += card.c; if (card.last === 0) missedLast++;
      for (const [k, v] of Object.entries(card.wrong || {})) wrong[k] = (wrong[k] || 0) + v;
      if (card.wr) wrs.push({ who: r.name || r.login, ...card.wr });
    }
    const top = Object.entries(wrong).filter(([k]) => k !== "-1").sort((a, b) => b[1] - a[1])[0];
    return { it, n, c, acc: n ? c / n : null, missedLast, students, top, wrs };
  }).sort((a, b) => (a.acc ?? 2) - (b.acc ?? 2));
  const heat = (v) => v === null || v === undefined ? `<span class="heat hx">no data</span>` : `<span class="heat ${v < 0.5 ? "h0" : v < 0.8 ? "h1" : "h2"}">${pct(v)}%</span>`;

  view.innerHTML = `
  <section class="hero"><span class="eyebrow">Class view · ${esc(course.name)} · ${esc(deck.title)}</span><h1>${esc(course.period || course.name)}</h1>${quizCountdown() ? `<p class="countdown">${esc(quizCountdown())}</p>` : ""}</section>
  <section class="kpis">
    <div class="kpi"><b>${rows.filter((r) => !r.off).length}</b><span class="small muted">on the roster</span></div>
    <div class="kpi"><b>${active}</b><span class="small muted">active in the last 7 days</span></div>
    <div class="kpi"><b>${totalN}</b><span class="small muted">answers</span></div>
    <div class="kpi"><b>${totalN ? pct(totalC / totalN) + "%" : "–"}</b><span class="small muted">right, all answers</span></div>
    ${!deck.mock ? "" : `<div class="kpi"><b>${mocks.length}</b><span class="small muted">${esc(deck.mock.name.toLowerCase())}s taken${mocks.length ? `, mean ${pct(mocks.reduce((t, x) => t + x.score / (x.total || deck.mock.total), 0) / mocks.length)}%` : ""}</span></div>`}
  </section>
  ${requests.length ? `<section class="panel"><h2>Waiting to be added</h2><p class="small muted">These accounts signed in and are not on any roster. <b>Add</b> puts them in ${esc(course.short)}.</p>
    <div class="tablewrap"><table><tbody>${requests.map((q) => `<tr><td><b>@${esc(q.login)}</b> <span class="muted small">${esc(q.name)} · GitHub ${esc(q.ghId)} · ${ago(q.ts)}</span></td>
      <td class="num"><input type="text" id="nm-${esc(q.ghId)}" placeholder="Name on the roster" value="${esc(q.name)}" style="max-width:220px"> <button class="btn primary" data-approve="${esc(q.ghId)}" data-login="${esc(q.login)}">Add</button> <button class="btn ghost" data-dismiss="${esc(q.ghId)}">Dismiss</button></td></tr>`).join("")}</tbody></table></div></section>` : ""}
  <section class="panel">
    <div class="row spread"><h2>Students</h2><button class="btn" id="csv">Download CSV</button></div>
    <div class="tablewrap"><table>
      <thead><tr><th>Student</th><th>Last active</th><th class="num">Answers</th><th class="num">Right</th><th class="num" title="Questions answered wrong the last time, review and mocks">To redo</th>${deck.forms ? mockCols.map((c) => `<th class="num" title="${esc(c.title)}">${esc(c.label)}</th>`).join("") : `<th class="num">Mock best</th><th class="num">Mock last</th>`}${course.book ? `<th class="num" title="Book sections with every activity done">Book</th>` : ""}${revSkills.map((s) => `<th title="${esc(s.name)}">${esc(s.short || s.from)}</th>`).join("")}</tr></thead>
      <tbody>${rows.map((r) => `<tr>
        <td><a href="#student-${encodeURIComponent(r.id)}"><b>${esc(r.name || r.login)}</b></a><br><span class="small muted">${esc(r.email || (r.login ? "@" + r.login : ""))}</span></td>
        <td class="small">${r.user ? ago(r.user.lastActive) : "not signed in yet"}</td>
        <td class="num">${r.s?.n || 0}</td>
        <td class="num">${r.s?.n ? pct(r.s.acc) + "%" : "–"}</td>
        <td class="num">${r.s ? missesOf(r.s.cards).length : "–"}</td>
        ${deck.forms ? mockCols.map((c) => { const t = (r.s?.mocks || []).filter((x) => c.ids.includes(x.form)); return `<td class="num" title="${t.length} taken">${t.length ? c.fmt(t) : "–"}</td>`; }).join("") : `<td class="num">${r.s?.mocks.length ? Math.max(...r.s.mocks.map((x) => x.score)) : "–"}</td>
        <td class="num">${r.s?.mocks.length ? r.s.mocks[r.s.mocks.length - 1].score : "–"}</td>`}
        ${course.book ? `<td class="num">${bookDone(r.user)} / ${bookSections.length}</td>` : ""}
        ${revSkills.map((s) => `<td>${r.s && r.s.sm[s.id].seen ? heat(r.s.sm[s.id].value) : `<span class="heat hx">–</span>`}</td>`).join("")}
      </tr>`).join("")}</tbody></table></div>
    <p class="small muted">Skill cells are mastery: 100% means every item in the skill was answered right three times in a row, spaced over days. A dash means the student has not tried that skill.</p>
  </section>
  ${course.book ? `<section class="panel">
    <h2>Book</h2>
    <p class="small muted">For each section: students who opened it, and students who finished every activity in it.</p>
    <div class="tablewrap"><table><thead><tr><th>Section</th><th class="num">Opened</th><th class="num">Finished</th><th>Not finished</th></tr></thead><tbody>
      ${bookSections.map((sec) => {
        const opened = rows.filter((r) => r.user?.book?.[sec.id]);
        const fin = opened.filter((r) => { const a = activitiesOf(sec), pr = r.user.book[sec.id]; return a.length && a.every((id) => pr.a && pr.a[id]); });
        const notFin = opened.filter((r) => !fin.includes(r));
        return `<tr><td><a href="#learn-${sec.id}">${esc(sec.number)} ${esc(sec.title)}</a></td><td class="num">${opened.length}</td><td class="num">${fin.length}</td><td class="small">${notFin.map((r) => esc(r.name || r.login)).join(", ")}</td></tr>`;
      }).join("")}</tbody></table></div>
  </section>` : ""}
  <section class="panel">
    <h2>Items, hardest first</h2>
    <p class="small muted">Right is the share of all attempts. Missed last is how many students got it wrong the last time they saw it. Open a row for the item, the wrong answer picked most, and the written responses.${items.some((x) => !x.n) ? ` ${items.filter((x) => !x.n).length} items nobody has tried yet are not listed.` : ""}</p>
    <div class="stack">${items.filter((x) => x.n).map(({ it, n, acc, missedLast, students, top, wrs }) => `<details>
      <summary><span class="row" style="display:inline-flex">${heat(acc)} <span class="mono small">${esc(it.id)}</span>${it.form ? ` <span class="chip">${esc(it.form)}</span>` : ""} <span>${esc(skillName(it.skill))} · ${esc(typeLabel(it.type))}${it.type === "fr" ? ` · ${esc(it.set ? deck.sets[it.set]?.short || deck.sets[it.set]?.name || "" : "")} ${esc(it.part)} (${esc(it.sub)})` : ""}</span> <span class="small muted">${students} students · ${n} attempts${missedLast ? ` · missed last: ${missedLast}` : ""}</span></span></summary>
      <div class="stack panel">
        ${it.type === "essay" ? `<div class="prompt">${esc(it.prompt)}</div>` : it.type === "code" ? `<h3 class="ctitle">${esc(it.title)}</h3><div class="md"><p>${md(it.prompt)}</p></div>` : it.type === "wr" ? `${codeBlock(it.listII, wrLabel(it, 1))}<div class="prompt">${esc(it.prompt)}</div>` : it.type === "fr" ? `${frPrompt(it)}<p class="small"><b>Earns the point:</b> ${esc(it.earns)}</p>` : it.type === "frq" ? `${it.set ? sourcesHTML(deck.sets[it.set], false) : ""}${frqPrompt(it)}` : `${it.stem ? `<p>${prose(it.stem)}</p>` : ""}${it.code ? codeBlock(it.code) : ""}${it.log ? `<pre class="log">${esc(it.log)}</pre>` : ""}<p><b>${prose(it.question)}</b></p>`}
        ${isChoice(it) ? `<p><b>Answer:</b> ${choiceText(it.choices[it.answer])}</p>${top ? `<p><b>Wrong answer picked most</b> (${top[1]} times): ${choiceText(it.choices[top[0]])}<br><span class="small muted">${prose(it.why[top[0]])}</span></p>` : ""}` : ""}
        ${it.type === "output" ? `<p><b>Answer:</b></p><pre class="code"><code>${esc(it.answer)}</code></pre>` : ""}
        ${wrs.length ? `<b>Latest written responses</b>${wrs.sort((a, b) => b.ts - a.ts).map((w) => `<div class="stack"><span class="small"><b>${esc(w.who)}</b> · self-scored ${w.score} / ${it.type === "fr" ? 1 : it.type === "code" || it.type === "essay" || it.type === "frq" ? rowsMax(it) : 4}${it.type === "fr" ? "" : ` (${(w.levels || []).join(" + ")})`} · ${ago(w.ts)}</span><div class="your">${esc(w.text || "(blank)")}</div></div>`).join("")}` : ""}
      </div></details>`).join("")}</div>
  </section>
  <section class="panel">
    <h2>Roster: ${esc(course.name)}</h2>
    <p class="small muted">Paste one student per line: <code>Name, school email</code>, with a GitHub username after it for a course that signs in with GitHub. Name is what the student goes by in class; it is the only name the site shows. A student already on another course keeps that course and gets this one too.${course.passwords ? " A new school email gets a sign-in with a first password you can print; the student chooses their own the first time." : ""}</p>
    <label for="rosterin" class="small muted">Students to add</label>
    <textarea id="rosterin" rows="5" class="out" placeholder="Brooklyn Chen, Sicheng.Chen@scsstudent.org${course.passwords ? "" : ", brooklyn-gh"}"></textarea>
    <div class="row"><button class="btn primary" id="addroster">Add to roster</button>${course.passwords ? `<a class="btn" href="#cards">Print sign-in cards</a>` : ""}<span class="small muted" id="rostermsg"></span></div>
    <details ${roster.length < 40 ? "open" : ""}><summary>${roster.length} on the roster</summary><div class="stack"><div class="tablewrap"><table class="rostertable"><thead><tr><th>Name</th><th>School email</th><th>GitHub</th>${course.passwords ? "<th>Password</th>" : ""}<th></th></tr></thead><tbody>${rows.map((r) => `<tr>
      <td><input type="text" value="${esc(r.name)}" data-name="${esc(r.id)}" aria-label="Name in class"></td>
      <td class="small">${esc(r.email) || `<span class="muted">none yet</span>`}</td>
      <td class="small"><input type="text" class="mono" value="${r.login ? "@" + esc(r.login) : r.ghId ? esc(r.ghId) : ""}" data-gh="${esc(r.id)}" placeholder="@username" aria-label="GitHub username"></td>
      ${course.passwords ? `<td class="small">${r.ghId ? "GitHub" : !r.email ? "" : r.user?.pwSet ? "chosen" : `first: <span class="mono">${esc(FIRST_PASSWORD)}</span>`}</td>` : ""}
      <td class="num">${r.email && course.passwords ? `<button class="btn ghost small" data-reset="${esc(r.email)}">Send reset link</button>` : ""}<button class="btn ghost small" data-remove="${esc(r.id)}">Remove</button></td></tr>`).join("")}</tbody></table></div>
      <p class="small muted">Edit a name and press Enter to save it. Type a GitHub username and press Enter, and that student signs in with GitHub from then on (their email sign-in still works).${course.passwords ? " Send reset link emails the student a link to choose a new password." : ""} Remove takes the student off ${esc(course.short)} only.</p></div></details>
  </section>
  <section class="panel" id="assesspanel"></section>
  ${isAdmin() ? `<section class="panel" id="teacherspanel"><h2>Teachers</h2><p class="muted">Loading...</p></section>` : ""}`;

  $$("[data-name]").forEach((inp) => inp.addEventListener("keydown", async (e) => {
    if (e.key !== "Enter") return;
    const r = roster.find((x) => x.id === inp.dataset.name), name = inp.value.trim();
    if (!name) return;
    await backend.saveStudent(r.id, recordOf({ ...r, name })); toast("Saved."); inp.blur();
  }));
  // A GitHub username for a student: looked up to its account number, which is what sign-in matches.
  $$("[data-gh]").forEach((inp) => inp.addEventListener("keydown", async (e) => {
    if (e.key !== "Enter") return;
    const r = roster.find((x) => x.id === inp.dataset.gh), login = inp.value.trim().replace(/^@/, "");
    if (!login) { await backend.saveStudent(r.id, recordOf({ ...r, ghId: "", login: "" })); toast("GitHub removed."); return renderTeacher(); }
    let j;
    try { const res = await fetch(`https://api.github.com/users/${encodeURIComponent(login)}`); if (!res.ok) throw new Error(res.status); j = await res.json(); }
    catch (x) { toast(`No GitHub account named @${login}.`); return; }
    const other = await backend.findStudent({ ghId: String(j.id) });
    if (other && other.id !== r.id) { toast(`@${j.login} is already on file for ${other.name}.`); return; }
    await backend.saveStudent(r.id, recordOf({ ...r, ghId: String(j.id), login: j.login }));
    toast(`${r.name} signs in with GitHub as @${j.login} from now on.`); renderTeacher();
  }));
  $$("[data-reset]").forEach((b) => b.addEventListener("click", async () => {
    try { await backend.sendReset(b.dataset.reset); toast(`Reset link sent to ${b.dataset.reset}.`); } catch (e) { toast("Not sent: " + (e.code || e.message)); }
  }));
  $$("[data-approve]").forEach((b) => b.addEventListener("click", async () => {
    const id = b.dataset.approve;
    await addStudents([{ ghId: id, login: b.dataset.login, name: $(`#nm-${CSS.escape(id)}`).value.trim() || b.dataset.login, email: "" }], course);
    await backend.removeRequest(id); toast("Added."); renderTeacher();
  }));
  $$("[data-dismiss]").forEach((b) => b.addEventListener("click", async () => { await backend.removeRequest(b.dataset.dismiss); renderTeacher(); }));
  $$("[data-remove]").forEach((b) => b.addEventListener("click", async () => {
    if (b.dataset.sure) {
      const r = roster.find((x) => x.id === b.dataset.remove);
      const left = (r.courses || []).filter((id) => id !== course.id);
      if (left.length) await backend.saveStudent(r.id, recordOf({ ...r, courses: left }));
      else await backend.deleteStudent(r.id);
      toast(`Removed from ${course.short}.`); renderTeacher();
    }
    else { b.dataset.sure = "1"; b.textContent = "Remove for good"; }
  }));
  $("#addroster").addEventListener("click", async () => {
    const msg = $("#rostermsg");
    const lines = $("#rosterin").value.split("\n").map(parseRosterLine).filter(Boolean);
    const miss = [], ok = [];
    for (const e of lines) {
      if (e.login && !e.ghId) {
        msg.textContent = `Looking up @${e.login}...`;
        try { const r = await fetch(`https://api.github.com/users/${encodeURIComponent(e.login)}`); if (!r.ok) throw new Error(r.status); const j = await r.json(); e.ghId = String(j.id); e.login = j.login; }
        catch (x) { miss.push("@" + e.login); continue; }
      }
      if (!e.email && !e.ghId) { miss.push(e.name); continue; }
      ok.push(e);
    }
    msg.textContent = "Adding...";
    let made;
    try { made = await addStudents(ok, course, (t) => { msg.textContent = t; }); }
    catch (e) { msg.textContent = ""; toast("Stopped: " + (e.code || e.message)); return; }
    msg.textContent = "";
    toast(`Added ${made.added}.${made.logins ? ` ${made.logins} new sign-ins with first passwords.` : ""}${miss.length ? ` Not added: ${miss.join(", ")}.` : ""}`);
    if (!miss.length) renderTeacher();
  });
  renderAssessPanel();
  if (isAdmin()) renderTeachersPanel();
  $("#csv").addEventListener("click", () => {
    const head = ["name", "login", "last_active", "answers", "right_pct", "mock_best", "mock_last", "to_redo", ...(deck.forms || []).map((f) => f.id + "_best"), ...deck.skills.map((s) => s.id)];
    const lines = rows.map((r) => [r.name || "", r.login || "", r.user?.lastActive ? new Date(r.user.lastActive).toISOString() : "", r.s?.n || 0, r.s?.n ? pct(r.s.acc) : "",
      r.s?.mocks.length ? Math.max(...r.s.mocks.map((x) => x.score)) : "", r.s?.mocks.length ? r.s.mocks[r.s.mocks.length - 1].score : "", r.s ? missesOf(r.s.cards).length : "",
      ...(deck.forms || []).map((f) => { const t = (r.s?.mocks || []).filter((x) => x.form === f.id); return t.length ? Math.max(...t.map((x) => x.score)) : ""; }),
      ...deck.skills.map((s) => (r.s && r.s.sm[s.id].seen ? pct(r.s.sm[s.id].value) : ""))]);
    const csv = [head, ...lines].map((l) => l.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(",")).join("\n");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
    a.download = `${deck.id}-class-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
  });
}

function bookDone(u) {
  if (!u?.book) return 0;
  return bookSections.filter((sec) => { const a = activitiesOf(sec), pr = u.book[sec.id]; return a.length && pr && a.every((id) => pr.a && pr.a[id]); }).length;
}

// ------------------------------------------------------------------------------------------ routing
function route() {
  renderBar();
  if (!user) return renderSignIn();
  if (!onRosterOrTeacher()) return renderNotOnList();
  if (user.provider === "password" && me && !teacher && !profile?.pwSet) return renderChoosePassword();
  const r = location.hash.slice(1) || "home";
  if (r === "account") return renderAccount();
  if (r === "cards" && isTeacher()) return renderCards();
  clearInterval(app.clock);
  // The book belongs to AP CSP: a book link opens that course when the student is in it.
  if ((r === "learn" || r.startsWith("learn-")) && !course.book) {
    const withBook = myCourses().find((c) => c.book);
    if (!withBook) { location.hash = "home"; return; }
    setCourse(withBook.id); renderBar();
  }
  if (r === "misses") return renderMisses();
  if (r === "review") { if (!app.session || app.session.i >= app.session.queue.length) app.session = null; return renderReview(); }
  if (r === "mock" && !deck.mock) { location.hash = "home"; return; }
  if (r === "mock") { if (app.mock && app.mock.phase === "done") app.mock = null; if (app.startForm) { const id = app.startForm; app.startForm = null; return startMock(id); } return renderMock(); }
  if (r === "teacher" && isTeacher()) return renderTeacher();
  if (r.startsWith("student-") && isTeacher()) return renderStudent(decodeURIComponent(r.slice(8)));
  if (r === "questions" && canEdit()) return renderQuestions();
  if (r === "learn") return renderLearnHome(view, bookApi);
  if (r.startsWith("learn-")) return renderSection(view, r.slice(6), bookApi);
  return renderHome();
}
window.addEventListener("hashchange", () => { window.scrollTo(0, 0); route(); });

let handling = null;
async function handleUser(u) {
  user = u;
  if (!u) { profile = null; me = null; teacher = null; return route(); }
  const run = (async () => {
    if (!u.login && u.ghId) {
      try { const r = await fetch(`https://api.github.com/user/${u.ghId}`); if (r.ok) u.login = (await r.json()).login; } catch (e) { /* offline */ }
    }
    ({ teacher, student: me } = await backend.whoIs(u).catch(() => ({ teacher: null, student: null })));
    if (!me && !teacher) { if (u.provider === "github") await backend.requestAccess(u); return route(); }
    edits = await backend.listEdits().catch(() => []);
    assessments = await backend.listAssessments().catch(() => []);
    applyEdits(allDecks, edits);
    profile = await backend.loadProgress(progressId()).catch(() => null);
    // Progress saved before 11/1 sits under the GitHub account (users/<uid>): bring it over once.
    if (!profile && me && u.provider === "github") {
      const old = await backend.loadOldUser(u.uid);
      if (old) profile = { firstSeen: old.firstSeen || Date.now(), decks: old.decks || {}, book: old.book || {} };
    }
    const now = Date.now();
    profile ||= { firstSeen: now, decks: {} };
    profile.lastActive = now;
    if (me && u.ghId && !me.login && u.login) me.login = u.login;
    await backend.saveProgress(progressId(), profile).catch((e) => console.error(e));
    let saved = null; try { saved = localStorage.getItem("ap-review-course"); } catch (e) { /* storage blocked */ }
    setCourse(params.get("course") || saved || myCourses()[0]?.id, false);
    route();
  })();
  handling = run;
  await run;
}

// Example students for the demo's class view, so it opens with something to read. Each course gets its own.
function seedDemo(s, people) {
  let seed = 7; const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  const hard = { index: 0.85, parallel: 0.7, byhand: 0.72, forloop: 0.65, listloop: 0.55, "wr-nolist": 0.45, "wr-logic": 0.6, controls: 0.5, risk: 0.55, "fr-risk": 0.5, "fr-control": 0.4, "fr-log": 0.55 };
  let k = 0;
  for (const c of courses) {
    const d = c.decks[0];
    const n = c.id === "cyber" ? 6 : 7;
    for (let j = 0; j < n; j++, k++) {
      const name = `Example ${c.short} Student ${"ABCDEFG"[j]}`;
      const ghId = String(2000000 + k), uid = "demo-ex-" + k, skill = 0.75 + (rnd() - 0.5) * 0.5;
      const email = `example.${c.id}${j + 1}@scsstudent.org`, sid = email;
      s.students[sid] = { name, email, ghId: c.passwords ? "" : ghId, login: c.passwords ? "" : `example-${c.id}-${j + 1}`, courses: [c.id] };
      if (c.passwords) s.accounts[email] = { password: FIRST_PASSWORD };
      if (j === n - 1) continue; // one has not signed in
      const cards = {}; let t = Date.now() - 3 * DAY;
      for (const it of d.items) {
        if (rnd() < 0.3) continue;
        let card = blankCard();
        const tries = 1 + Math.floor(rnd() * 3);
        for (let q = 0; q < tries; q++) {
          t += 10 * 60000;
          const ok = rnd() < (hard[it.skill] ?? 0.7) * skill + 0.1;
          if (it.type === "wr") {
            const sc = ok ? (rnd() < 0.5 ? 4 : 3) : Math.floor(rnd() * 3);
            card = grade(card, sc === 4 ? 1 : sc >= 2 ? 0.5 : 0, t, { wr: { text: "(example answer)", score: sc, levels: [Math.min(2, Math.ceil(sc / 2)), Math.floor(sc / 2)], ts: t } });
          } else if (it.type === "essay") {
            const max = rowsMax(it), sc = ok ? max - Math.floor(rnd() * 3) : Math.floor(rnd() * 3);
            card = grade(card, sc === max ? 1 : sc * 2 >= max ? 0.5 : 0, t, { wr: { text: "(example essay)", score: sc, levels: it.rows.map(() => 0), ts: t } });
          } else if (it.type === "code" || it.type === "frq") {
            const max = it.rows.length, sc = ok ? max - Math.floor(rnd() * 2) : Math.floor(rnd() * 4);
            card = grade(card, sc === max ? 1 : sc * 2 >= max ? 0.5 : 0, t, { wr: { text: "(example code)", score: sc, levels: it.rows.map((_, r) => (r < sc ? 1 : 0)), ts: t } });
          } else if (it.type === "fr") {
            card = grade(card, ok ? 1 : 0, t, { wr: { text: "(example answer)", score: ok ? 1 : 0, levels: [ok ? 1 : 0], ts: t } });
          } else card = grade(card, ok ? 1 : 0, t, (it.type === "mcq" || it.type === "vocab") && !ok ? { choice: 1 + Math.floor(rnd() * 3) } : {});
        }
        cards[it.id] = card;
      }
      // A mock taken: the last dated form (or the last form), and in a course with topic quizzes, a quiz too.
      const picks = d.forms ? [d.forms.find((f) => f.col && f.date), d.forms.filter((f) => f.date && !f.col).pop() || d.forms[d.forms.length - 1]].filter(Boolean) : [null];
      const mocks = d.mock && rnd() < 0.7 ? picks.map((f0) => { const tot = f0?.total ?? d.mock.total; return { ts: t, score: Math.round(tot * (0.45 + skill * 0.4)), total: tot, a: 0, b: 0, minutes: 21, form: f0 ? f0.id : null, items: [] }; }) : [];
      s.progress[sid] = { firstSeen: t - DAY, lastActive: t - Math.floor(rnd() * 4) * DAY, pwSet: rnd() < 0.6, decks: { [d.id]: { cards, mocks } } };
    }
  }
  s.requests["2000099"] = { login: "example-new-account", name: "Example New Account", ts: Date.now() - 3600000 };
  // The demo student is in the GitHub courses, with a school email too, so both ways in open the same account.
  s.students["demo.student@scsstudent.org"] = { name: "Demo Student", email: "demo.student@scsstudent.org", ghId: people.student.ghId, login: people.student.login, courses: courses.filter((c) => !c.passwords).map((c) => c.id) };
  // A student with only a school email and a first password, in every password course (and AP CSP, to show both kinds).
  s.students["demo.email@scsstudent.org"] = { name: "Demo Email Student", email: "demo.email@scsstudent.org", ghId: "", login: "", courses: [...courses.filter((c) => c.passwords).map((c) => c.id), "csp"] };
  s.accounts["demo.email@scsstudent.org"] = { password: FIRST_PASSWORD };
  // A teacher who signs in with a school email and sees only their course.
  s.teachers["history.teacher@sierracanyonschool.org"] = { name: "Example History Teacher", courses: courses.filter((c) => c.id.startsWith("whap")).map((c) => c.id) };
  s.accounts["history.teacher@sierracanyonschool.org"] = { password: "teach-demo-7" };
}

// ------------------------------------------------------------------------------------------ start
(async function start() {
  try {
    backend = demo ? demoBackend({ adminGithubIds: teacherGithubIds, seed: seedDemo }) : await firebaseBackend(firebaseConfig, firebaseSdk, { adminGithubIds: teacherGithubIds });
  } catch (e) {
    view.innerHTML = `<section class="panel"><h1>The site could not start</h1><p>${esc(e.message)}</p></section>`;
    return;
  }
  backend.onAuth((u) => { if (handling && u && user && u.uid === user.uid) return; handleUser(u); });
})();

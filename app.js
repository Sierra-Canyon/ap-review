import { firebaseConfig, teacherGithubIds, teacherName, firebaseSdk } from "./firebase-config.js";
import { firebaseBackend, demoBackend } from "./backend.js";
import { blankCard, grade, skillMastery, buildSession, counts, buildMock, partBPoints, partBMax, rowsMax, normOut, normCell, DAY } from "./srs.js";
import { courses, courseById, coursesOf } from "./courses.js";
import { renderLearnHome, renderSection, bookSections, sectionsForSkill, activitiesOf } from "./book-ui.js";

// ------------------------------------------------------------------------------------------ helpers
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const skillName = (id) => deck.skills.find((s) => s.id === id)?.name || id;
const skillFrom = (id) => deck.skills.find((s) => s.id === id)?.from || "";
const baseTypes = { mcq: "Code reading", output: "Type the output", trace: "Trace table", wr: "Written response", vocab: "Vocabulary", fr: "Free response" };
const typeLabel = (t) => deck.typeNames?.[t] || baseTypes[t] || t;
const isChoice = (it) => it.type === "mcq" || it.type === "vocab";
const choiceText = (t) => (deck.lang === "java" ? md(t) : esc(t));
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
function quizCountdown() {
  const today0 = new Date(); today0.setHours(0, 0, 0, 0);
  const at = (iso) => { const [y, m, d] = iso.split("-").map(Number); return new Date(y, m - 1, d); };
  const next = (deck.dates || (deck.quizDate ? [{ name: deck.quizName || deck.title, date: deck.quizDate }] : [])).find((x) => at(x.date) >= today0);
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
let backend, user = null, profile = null, onRoster = false, rosterEntry = null;
// The course on screen. A student sees the courses on their roster entry; the teacher sees all of them.
let course = courses[0], deck = course.decks[0];
const myCourses = () => (isTeacher() ? courses : coursesOf(rosterEntry).map(courseById));
function setCourse(id, remember = true) {
  const c = myCourses().find((x) => x.id === id) || myCourses()[0] || courses[0];
  course = c; deck = c.decks[0];
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
  try { await backend.saveUser(user.uid, profile); }
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
const isTeacher = () => !!user && teacherGithubIds.includes(String(user.ghId));

// ------------------------------------------------------------------------------------------ chrome
function renderBar() {
  const r = location.hash.slice(1) || "home";
  const links = [["home", "Home"], ...(course.book ? [["learn", "Learn"]] : []), ["review", "Review"], ["misses", "My misses"], ["mock", deck.mock.name]];
  if (isTeacher()) links.push(["teacher", "Class"]);
  const mine = user && (onRoster || isTeacher()) ? myCourses() : [];
  $("#bar").innerHTML = `<div class="bar-in">
    <a class="mark" href="#home"><span class="tile" aria-hidden="true"></span>AP Review</a>
    ${mine.length > 1 ? `<label class="coursepick"><span class="sr">Course</span><select id="coursepick">${mine.map((c) => `<option value="${c.id}" ${c.id === course.id ? "selected" : ""}>${esc(c.short)}</option>`).join("")}</select></label>` : ""}
    ${user && (onRoster || isTeacher()) ? `<nav aria-label="Sections">${links.map(([h, t]) => `<a href="#${h}" ${r === h || (h === "learn" && r.startsWith("learn-")) ? 'aria-current="page"' : ""}>${t}</a>`).join("")}</nav>` : ""}
    ${user ? `<div class="who">${user.photo ? `<img src="${esc(user.photo)}" alt="">` : ""}<span>@${esc(profile?.login || user.login || "")}</span><button class="btn ghost small" id="signout">Sign out</button></div>` : ""}
  </div>`;
  $("#signout")?.addEventListener("click", async () => { await backend.signOut(); location.hash = ""; });
  $("#coursepick")?.addEventListener("change", (e) => {
    setCourse(e.target.value); app.session = null; app.mock = null; app.focus = null;
    const r = location.hash.slice(1) || "home";
    if (r === "home" || r === "review" || r === "mock" || r === "teacher") route(); else location.hash = "home";
  });
  $("#demoband").hidden = !demo;
}

const ghIcon = `<svg class="gh" viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>`;

function renderSignIn() {
  view.className = "";
  view.innerHTML = `<section class="panel signin enter">
    <span class="eyebrow">Sierra Canyon · ${esc(teacherName)}</span>
    <h1>AP Review</h1>
    <p>Spaced review and mock tests for your AP course. What you get wrong comes back sooner.</p>
    <ul class="list-plain courses-list">${courses.map((c) => `<li><b>${esc(c.name)}</b><br><span class="small muted">${esc(c.decks[0].title)}</span></li>`).join("")}</ul>
    ${demo ? `<div class="stack">
        <button class="btn primary big" data-as="student">${ghIcon} Try it as a student</button>
        <button class="btn big" data-as="teacher">Try it as the teacher</button>
        <button class="btn ghost" data-as="stranger">Try it as someone not on the class list</button>
        <p class="small muted">Demo mode: there is no real sign-in, and progress is kept in this browser only.</p>
      </div>`
      : `<button class="btn primary big" id="signin">${ghIcon} Sign in with GitHub</button>
         <p class="small muted">Use the GitHub account you use for Classroom 50.</p>`}
  </section>`;
  $$("[data-as]").forEach((b) => b.addEventListener("click", () => backend.signIn(b.dataset.as)));
  $("#signin")?.addEventListener("click", async () => {
    try { const u = await backend.signIn(); if (u?.login) await handleUser(u); }
    catch (e) {
      if (e?.code === "auth/popup-closed-by-user" || e?.code === "auth/cancelled-popup-request") return;
      if (e?.code === "auth/popup-blocked") toast("The sign-in window was blocked. Allow pop-ups for this site and try again.");
      else toast("Sign-in did not finish: " + (e?.code || e?.message || "unknown error"));
    }
  });
}

function renderNotOnList() {
  view.className = "";
  const login = profile?.login || user.login || "";
  view.innerHTML = `<section class="panel signin enter">
    <h1>You are not on the class list yet</h1>
    <p>You signed in as <b>@${esc(login)}</b>. ${esc(teacherName)} has been sent a request to add this account.</p>
    <p class="muted">If this is not the GitHub account you use for Classroom 50, sign out and sign in with that one.</p>
    <div class="row"><button class="btn" id="again">Check again</button><button class="btn ghost" id="so2">Sign out</button></div>
  </section>`;
  $("#again").addEventListener("click", () => handleUser(user));
  $("#so2").addEventListener("click", () => backend.signOut());
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
    </div>
    ${course.book ? `<div class="panel mode">
      <span class="eyebrow">Learn</span>
      <div class="row"><span class="num">${bookSections.filter((x) => { const a = activitiesOf(x), pr = (profile.book || {})[x.id]; return a.length && pr && a.every((id) => pr.a && pr.a[id]); }).length}</span><span class="muted">of ${bookSections.length} sections done</span></div>
      <p class="small muted">Variables, if statements, functions, lists, and for loops, with code you can run and step through.</p>
      <a class="btn big" href="#learn">Open the book</a>
    </div>` : ""}
    <div class="panel mode">
      <span class="eyebrow">${esc(deck.mock.name)}</span>
      <div class="row"><span class="num">${deck.mock.total}</span><span class="muted">points</span></div>
      <p class="small muted">${esc(deck.mock.blurb)}${lastMock ? ` Last: ${lastMock.score} / ${lastMock.total ?? deck.mock.total}.` : ""}</p>
      <a class="btn big" href="#mock">Take a ${esc(deck.mock.name.toLowerCase())}</a>
    </div>
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
    if (b.ul) return `<div class="sblock">${lead ? `<p>${lead}</p>` : ""}<ul>${b.ul.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div>`;
    if (b.table) return `<div class="tablewrap"><table class="srctable"><thead><tr>${b.table.head.map((h) => `<th>${esc(h)}</th>`).join("")}</tr></thead><tbody>${b.table.rows.map((r) => `<tr>${r.map((v) => `<td>${esc(v)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
    return `<p>${lead}${esc(b.p)}</p>`;
  };
  return `<details class="sources" ${open ? "open" : ""}><summary>Sources: ${esc(set.name)}</summary>
    <p class="small muted">${esc(set.intro)}</p>
    ${set.sources.map((src) => `<section class="source"><h3>${esc(src.title)}</h3>${src.blocks.map(block).join("")}</section>`).join("")}</details>`;
}
const frPrompt = (item) => `<p class="small muted">Part ${esc(item.part)}. ${esc(item.lead)}</p><div class="prompt"><b>${esc(item.part)} (${esc(item.sub)})</b> ${esc(item.prompt)}</div>`;

function itemHTML(item, opts = {}) {
  const head = `<div class="row"><span class="chip accent">${esc(skillName(item.skill))}</span><span class="chip">${esc(typeLabel(item.type))}</span>${opts.tag ? `<span class="chip">${esc(opts.tag)}</span>` : ""}</div>`;
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
      ${sourcesHTML(deck.sets[item.set], opts.sourcesOpen !== false)}
      ${frPrompt(item)}
      <label for="wr-${item.id}" class="small muted">Your answer</label>
      <textarea class="wr" id="wr-${item.id}" spellcheck="true"></textarea>`;
  }
  if (item.type === "wr") {
    return `${head}
      <span class="src">${esc(item.source)}</span>
      <p class="small muted">Answer in full sentences, about the code shown. Use the names from the code.</p>
      ${codeBlock(item.listI, "List (i)")}
      ${codeBlock(item.listII, "List (ii)")}
      <p class="small">It is called as <code>${esc(item.call)}</code></p>
      <div class="prompt">${esc(item.prompt)}</div>
      <label for="wr-${item.id}" class="small muted">Your answer</label>
      <textarea class="wr" id="wr-${item.id}" spellcheck="true"></textarea>`;
  }
  return `${head}
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
      onAnswer?.({ result: right ? 1 : 0 });
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
  box.innerHTML = `<p><b>Score your code, one row at a time.</b> Each row is a point. Give the point only when your code does what the row says.</p>
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
  return `<div class="feedback ${score === max ? "ok" : score * 2 >= max ? "part" : "no"}"><span class="verdict">${score} / ${max}.</span></div>
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
  const t = it.type === "code" ? it.title : it.type === "fr" ? `${it.part} (${it.sub}) ${it.prompt}` : it.type === "wr" ? it.prompt : it.type === "vocab" ? it.stem : (it.stem && !/^Consider the following/.test(it.stem) ? it.stem + " " : "") + (it.question || "");
  const plain = String(t).replace(/`/g, "").replace(/\*\*/g, "");
  return plain.length > 110 ? plain.slice(0, 107) + "..." : plain;
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
  const rest = deck.items.filter((it) => it.skill === skill && !missed.includes(it))
    .sort((a, b) => ((cards[a.id]?.n ? cards[a.id].b : 0.5) - (cards[b.id]?.n ? cards[b.id].b : 0.5)) || ((cards[a.id]?.ts || 0) - (cards[b.id]?.ts || 0)));
  startCustom([...missed, ...rest.filter((it) => !["wr", "fr", "code", "essay"].includes(it.type)), ...rest.filter((it) => ["wr", "fr", "code", "essay"].includes(it.type)).slice(0, 1)], skillName(skill), () => drillSkill(skill));
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
      return `<li><span class="chip">${esc(typeLabel(it.type))}</span> <span>${esc(snippet(it))}</span>${it.code ? ` <code class="small">${esc(it.code.split("\n")[0].slice(0, 60))}</code>` : ""}<br><span class="small muted">${esc(whereFrom(it))} · missed ${wrongs} of ${c.n} · ${ago(c.ts)}</span></li>`;
    }).join("")}</ul>`).join("")}
  </section>` : rep.length ? `<section class="panel"><p><b>No misses right now.</b> Every question you have answered, you got right the last time.</p></section>` : ""}`;
  bindDrills();
}

function startReview() {
  const st = deckState();
  const f = deck.focus?.find((x) => x.id === app.focus);
  const s = buildSession(deck, st.cards, f ? { types: f.types, skills: f.skills, size: f.size || 10, longCap: f.size || 2 } : {});
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
  for (const f of deck.forms) { let g = groups.find((x) => x.name === (f.group || cfg.title)); if (!g) groups.push(g = { name: f.group || cfg.title, date: f.date, forms: [] }); g.forms.push(f); }
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
  const dated = groups.some((g) => g.date);
  const next = dated ? groups.filter((g) => !g.date || when(g.date) >= today) : groups;
  const past = dated ? groups.filter((g) => g.date && when(g.date) < today).reverse() : [];
  return `${next.length ? `${dated && past.length ? "<h2>Coming up</h2>" : ""}${next.map(block).join("")}` : ""}
    ${past.length ? `<details class="pastforms"${next.length ? "" : " open"}><summary><b>Earlier this year</b> <span class="small muted">(${past.length} assessments, for review before the midterm and the AP exam)</span></summary>${past.map(block).join("")}</details>` : ""}
    <p class="small muted">A second try at the same form shows what you remember, not what you can do cold. Take the ones you have not taken first.</p>`;
}
const isFR = () => deck.mock.partB.kind === "fr";
const bScore = (it, m) => m.wr[it.id]?.score || 0;
const formOf = (id) => deck.forms?.find((f) => f.id === id);
function startMock(formId) {
  const m = buildMock(deck, deckState().cards, Math.random, formId);
  app.mock = { deck: deck.id, form: formId || null, items: [...m.partA, ...m.partB], partA: m.partA.length, i: 0, answers: {}, start: Date.now(), phase: "take" };
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
  const pts = partB ? (isFR() ? "1 point" : it.type === "code" ? `${rowsMax(it)} points` : `${cfg.partB.points} points`) : `${cfg.partA.points} point${cfg.partA.points === 1 ? "" : "s"}`;
  view.className = partB && isFR() ? "wide" : "";
  view.innerHTML = `
    <div class="progress">${m.items.map((x, k) => `<span class="${m.answers[x.id] && (m.answers[x.id].choice !== undefined || m.answers[x.id].text) ? "done" : ""} ${k === m.i ? "here" : ""}"></span>`).join("")}</div>
    <div class="row spread small muted"><span>${m.form ? esc(formOf(m.form).name) + " · " : ""}${partB ? "Part B" : "Part A"} · ${m.i + 1} of ${m.items.length} · ${pts}</span><span id="clock"></span></div>
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
  view.className = isFR() ? "wide" : "";
  view.innerHTML = `<div class="row spread small muted"><span>Scoring Part B · ${m.wi + 1} of ${wrs.length}</span></div>
    <section class="panel enter" id="card"></section>`;
  const card = $("#card");
  const yours = `<div class="stack"><b>Your answer</b><div class="your">${esc(m.answers[it.id]?.text || "(blank)")}</div></div>`;
  const yourCode = `<div class="stack"><b>Your code</b><pre class="code"><code>${esc(m.answers[it.id]?.text || "(blank)")}</code></pre></div>`;
  card.innerHTML = it.type === "code"
    ? `<div class="row"><span class="chip accent">${esc(skillName(it.skill))}</span></div><h3 class="ctitle">${esc(it.title)}</h3><details class="sources"><summary>The task</summary><div class="md"><p>${md(it.prompt)}</p></div>${it.given ? codeBlock(it.given) : ""}</details>${yourCode}`
    : it.type === "fr"
    ? `<div class="row"><span class="chip accent">${esc(skillName(it.skill))}</span></div>${sourcesHTML(deck.sets[it.set], false)}${frPrompt(it)}${yours}`
    : `<div class="row"><span class="chip accent">${esc(skillName(it.skill))}</span><span class="src">${esc(it.source)}</span></div>
    ${codeBlock(it.listII, "List (ii)")}<div class="prompt">${esc(it.prompt)}</div>${yours}`;
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
  if (it.type === "code") scoreRubric(area, it, after, { showModel: false });
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
  st.mocks.push({ ts: now, score: m.score, total, a, b, minutes: m.minutes, form: m.form, items: m.items.map((x) => x.id) });
  if (st.mocks.length > 30) st.mocks = st.mocks.slice(-30);
  m.phase = "done";
  await save();
  renderMock();
}
function renderMockDone() {
  const m = app.mock;
  const cfg = deck.mock;
  const A = m.items.slice(0, m.partA), B = m.items.slice(m.partA);
  const aMax = A.length * cfg.partA.points, bMax = partBMax(deck, B);
  const set = B[0]?.type === "fr" ? deck.sets[B[0].set] : null;
  const total = formOf(m.form)?.total ?? (aMax + bMax);
  // Where the points went, by skill, and a set made of exactly the missed questions.
  const lost = {}, missedIds = [];
  for (const it of A) if (m.answers[it.id]?.choice !== it.answer) { lost[it.skill] = (lost[it.skill] || 0) + cfg.partA.points; missedIds.push(it.id); }
  for (const it of B) {
    const max = it.type === "fr" ? 1 : it.type === "wr" ? 4 : rowsMax(it), got = bScore(it, m);
    if (got < max) { lost[it.skill] = (lost[it.skill] || 0) + (it.type === "fr" ? cfg.partB.scale : 1) * (max - got); missedIds.push(it.id); }
  }
  const lostRows = Object.entries(lost).sort((a, b) => b[1] - a[1]);
  view.className = "";
  view.innerHTML = `<section class="panel enter">
      <span class="eyebrow">${m.form ? esc(formOf(m.form).name) : esc(cfg.name)}</span>
      <div class="row"><span class="scorebig">${m.score} / ${total}</span><span class="muted">${B.length ? `Part A ${m.a} / ${aMax} · Part B ${m.b} / ${bMax}` : `${A.length} multiple choice`}${set ? ` (${B.filter((it) => bScore(it, m)).length} of ${B.length} subparts × ${cfg.partB.scale})` : ""}${cfg.clock ? ` · ${m.minutes} min` : ""}</span></div>
      ${lostRows.length ? `<div class="stack"><b>Where you lost points</b>
        <div class="tablewrap"><table><tbody>${lostRows.map(([sk, pts]) => `<tr><td>${esc(skillName(sk))}</td><td class="num">${+pts.toFixed(1)} point${pts === 1 ? "" : "s"}</td><td class="num"><button class="btn small" data-drill="skill:${esc(sk)}">Practice this skill</button></td></tr>`).join("")}</tbody></table></div>
        <div class="row"><button class="btn primary" data-drill="mock:${missedIds.join(",")}">Practice the ${missedIds.length} I missed</button></div></div>` : `<p><b>Every point earned.</b></p>`}
      <div class="row"><button class="btn primary" id="again">${deck.forms ? "All mocks" : `Another ${esc(cfg.name.toLowerCase())}`}</button><a class="btn" href="#review">Review</a><a class="btn ghost" href="#home">Home</a></div>
    </section>
    ${B.length ? "<h2>Part A</h2>" : ""}
    ${A.map((it, k) => {
      const ch = m.answers[it.id]?.choice;
      const ok = ch === it.answer;
      return `<details class="panel" ${ok ? "" : "open"}><summary><span class="chip ${ok ? "good" : "bad"}">${ok ? cfg.partA.points : 0} / ${cfg.partA.points}</span> ${k + 1}. ${esc(skillName(it.skill))}</summary>
        <div class="stack">${it.stem ? `<p>${prose(it.stem)}</p>` : ""}${it.classes ? codeBlock(it.classes) : ""}${it.methods ? codeBlock(it.methods) : ""}${it.code ? codeBlock(it.code) : ""}${it.log ? `<pre class="log">${esc(it.log)}</pre>` : ""}<p><b>${prose(it.question)}</b></p>
        ${ch !== undefined && !ok ? `<div class="feedback no"><span class="verdict">You chose: ${choiceText(it.choices[ch])}</span><p>${prose(it.why[ch])}</p></div>` : ch === undefined ? `<div class="feedback no"><span class="verdict">Left blank.</span></div>` : ""}
        <div class="feedback ok"><span class="verdict">Answer: ${choiceText(it.choices[it.answer])}</span><p>${prose(it.why[it.answer])}</p></div></div></details>`;
    }).join("")}
    ${B.length ? `<h2>Part B${set ? `: ${esc(set.name)}` : ""}</h2>` : ""}
    ${set ? sourcesHTML(set, false) : ""}
    ${B.map((it) => it.type === "code"
      ? `<details class="panel" open><summary><span class="chip ${bScore(it, m) === rowsMax(it) ? "good" : bScore(it, m) * 2 >= rowsMax(it) ? "warn" : "bad"}">${bScore(it, m)} / ${rowsMax(it)}</span> ${esc(it.title)}</summary>
        <div class="stack"><b>Your code</b><pre class="code"><code>${esc(m.answers[it.id]?.text || "(blank)")}</code></pre>
        <div class="tablewrap"><table><tbody>${it.rows.map((r, k) => `<tr><td>${(m.wr[it.id].levels || [])[k] ? "✓" : "·"}</td><td><b>${esc(r.name)}</b><br><span class="small">${prose(r.earns || "")}</span></td></tr>`).join("")}</tbody></table></div>
        ${solutionHTML(it, bScore(it, m))}</div></details>`
      : it.type === "fr"
      ? `<details class="panel" ${bScore(it, m) ? "" : "open"}><summary><span class="chip ${bScore(it, m) ? "good" : "bad"}">${bScore(it, m)} / 1</span> ${esc(it.part)} (${esc(it.sub)}) ${esc(it.prompt)}</summary>
        <div class="stack"><b>Your answer</b><div class="your">${esc(m.answers[it.id]?.text || "(blank)")}</div>${frExamplesHTML(it, bScore(it, m))}</div></details>`
      : `<details class="panel" open><summary><span class="chip ${bScore(it, m) === 4 ? "good" : bScore(it, m) >= 2 ? "warn" : "bad"}">${bScore(it, m)} / 4</span> ${esc(skillName(it.skill))}</summary>
      <div class="stack"><div class="your">${esc(m.answers[it.id]?.text || "(blank)")}</div>${modelHTML(it, bScore(it, m), m.wr[it.id].levels.every((x) => x === 2))}</div></details>`).join("")}`;
  $("#again").addEventListener("click", () => { app.mock = null; if (deck.forms) renderMock(); else startMock(); window.scrollTo(0, 0); });
  bindDrills();
}

// ------------------------------------------------------------------------------------------ teacher
async function renderTeacher() {
  view.className = "wide";
  view.innerHTML = `<p class="muted">Loading the class...</p>`;
  let users, roster, requests;
  try { [users, roster, requests] = await Promise.all([backend.listUsers(), backend.listRoster(), backend.listRequests()]); }
  catch (e) { view.innerHTML = `<section class="panel"><h1>Could not load the class</h1><p>${esc(e.message)}</p><p class="muted">Check that your GitHub account's number is in teacherGithubIds in firebase-config.js and in firestore.rules.</p></section>`; return; }
  const byGh = Object.fromEntries(users.map((u) => [String(u.ghId), u]));
  const rosterAll = roster;
  roster = roster.filter((r) => coursesOf(r).includes(course.id));
  // Accounts with progress in this deck that are not on this course's roster still show, marked.
  const rows = roster.map((r) => ({ ...r, user: byGh[r.ghId] }))
    .concat(users.filter((u) => !roster.find((r) => r.ghId === String(u.ghId)) && !teacherGithubIds.includes(String(u.ghId)) && u.decks?.[deck.id]).map((u) => ({ ghId: String(u.ghId), login: u.login, name: u.name, user: u, off: true })))
    .sort((a, b) => (a.name || a.login || "").localeCompare(b.name || b.login || ""));
  const stats = (u) => {
    const st = u?.decks?.[deck.id]; if (!st) return null;
    const cards = Object.values(st.cards || {});
    const n = cards.reduce((t, c) => t + c.n, 0), c = cards.reduce((t, x) => t + x.c, 0);
    return { n, acc: n ? c / n : 0, sm: skillMastery(deck, st.cards || {}), mocks: st.mocks || [], cards: st.cards || {} };
  };
  rows.forEach((r) => { r.s = stats(r.user); });
  const revSkills = deck.skills.filter((sk) => deck.items.some((it) => it.skill === sk.id));
  // One column per mock form, or, when a course has many forms, one per assessment (the best percent on any of its forms), only for assessments someone has taken.
  const takenForms = new Set(rows.flatMap((r) => (r.s?.mocks || []).map((x) => x.form)));
  const groupsOf = [...new Set((deck.forms || []).map((f) => f.group || f.name))];
  const mockCols = (deck.forms || []).length > 6
    ? groupsOf.map((g) => { const fs = deck.forms.filter((f) => (f.group || f.name) === g); return { label: g.replace(/^Quiz (\d+).*/, "Q$1").replace(/^Unit (\w+) Test.*/, "U$1").replace(/^Unit 4A Checkpoint/, "4A").replace(/^AP Practice Section/, "PS").replace(/^AP Practice Exam/, "AP").replace(/^Midterm/, "Mid"), title: g + ": best percent on any practice form", ids: fs.map((f) => f.id), fmt: (t) => pct(Math.max(...t.map((x) => x.score / (x.total || 1)))) + "%" }; })
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
  <section class="hero"><span class="eyebrow">Class view · ${esc(course.name)} · ${esc(deck.title)}</span><h1>${esc(course.period)}</h1>${quizCountdown() ? `<p class="countdown">${esc(quizCountdown())}</p>` : ""}</section>
  <section class="kpis">
    <div class="kpi"><b>${rows.filter((r) => !r.off).length}</b><span class="small muted">on the roster</span></div>
    <div class="kpi"><b>${active}</b><span class="small muted">active in the last 7 days</span></div>
    <div class="kpi"><b>${totalN}</b><span class="small muted">answers</span></div>
    <div class="kpi"><b>${totalN ? pct(totalC / totalN) + "%" : "–"}</b><span class="small muted">right, all answers</span></div>
    <div class="kpi"><b>${mocks.length}</b><span class="small muted">${esc(deck.mock.name.toLowerCase())}s taken${mocks.length ? `, mean ${pct(mocks.reduce((t, x) => t + x.score / (x.total || deck.mock.total), 0) / mocks.length)}%` : ""}</span></div>
  </section>
  ${requests.length ? `<section class="panel"><h2>Waiting to be added</h2><p class="small muted">These accounts signed in and are not on any roster. <b>Add</b> puts them in ${esc(course.short)}.</p>
    <div class="tablewrap"><table><tbody>${requests.map((q) => `<tr><td><b>@${esc(q.login)}</b> <span class="muted small">${esc(q.name)} · GitHub ${esc(q.ghId)} · ${ago(q.ts)}</span></td>
      <td class="num"><input type="text" id="nm-${esc(q.ghId)}" placeholder="Name on the roster" value="${esc(q.name)}" style="max-width:220px"> <button class="btn primary" data-approve="${esc(q.ghId)}" data-login="${esc(q.login)}">Add</button> <button class="btn ghost" data-dismiss="${esc(q.ghId)}">Dismiss</button></td></tr>`).join("")}</tbody></table></div></section>` : ""}
  <section class="panel">
    <div class="row spread"><h2>Students</h2><button class="btn" id="csv">Download CSV</button></div>
    <div class="tablewrap"><table>
      <thead><tr><th>Student</th><th>Last active</th><th class="num">Answers</th><th class="num">Right</th><th class="num" title="Questions answered wrong the last time, review and mocks">To redo</th>${deck.forms ? mockCols.map((c) => `<th class="num" title="${esc(c.title)}">${esc(c.label)}</th>`).join("") : `<th class="num">Mock best</th><th class="num">Mock last</th>`}${course.book ? `<th class="num" title="Book sections with every activity done">Book</th>` : ""}${revSkills.map((s) => `<th title="${esc(s.name)}">${esc(s.short || s.from)}</th>`).join("")}</tr></thead>
      <tbody>${rows.map((r) => `<tr>
        <td><b>${esc(r.name || r.login)}</b><br><span class="small muted">@${esc(r.login || "")}${r.off ? ` · not on the ${esc(course.short)} roster` : ""}</span></td>
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
    <p class="small muted">Right is the share of all attempts. Missed last is how many students got it wrong the last time they saw it. Open a row for the item, the wrong answer picked most, and the written responses.</p>
    <div class="stack">${items.map(({ it, n, acc, missedLast, students, top, wrs }) => `<details>
      <summary><span class="row" style="display:inline-flex">${heat(acc)} <span class="mono small">${esc(it.id)}</span>${it.form ? ` <span class="chip">${esc(it.form)}</span>` : ""} <span>${esc(skillName(it.skill))} · ${esc(typeLabel(it.type))}${it.type === "fr" ? ` · ${esc(deck.sets[it.set].short)} ${esc(it.part)} (${esc(it.sub)})` : ""}</span> <span class="small muted">${students} students · ${n} attempts${missedLast ? ` · missed last: ${missedLast}` : ""}</span></span></summary>
      <div class="stack panel">
        ${it.type === "code" ? `<h3 class="ctitle">${esc(it.title)}</h3><div class="md"><p>${md(it.prompt)}</p></div>` : it.type === "wr" ? `${codeBlock(it.listII, "List (ii)")}<div class="prompt">${esc(it.prompt)}</div>` : it.type === "fr" ? `${frPrompt(it)}<p class="small"><b>Earns the point:</b> ${esc(it.earns)}</p>` : `${it.stem ? `<p>${prose(it.stem)}</p>` : ""}${it.code ? codeBlock(it.code) : ""}${it.log ? `<pre class="log">${esc(it.log)}</pre>` : ""}<p><b>${prose(it.question)}</b></p>`}
        ${isChoice(it) ? `<p><b>Answer:</b> ${choiceText(it.choices[it.answer])}</p>${top ? `<p><b>Wrong answer picked most</b> (${top[1]} times): ${choiceText(it.choices[top[0]])}<br><span class="small muted">${prose(it.why[top[0]])}</span></p>` : ""}` : ""}
        ${it.type === "output" ? `<p><b>Answer:</b></p><pre class="code"><code>${esc(it.answer)}</code></pre>` : ""}
        ${wrs.length ? `<b>Latest written responses</b>${wrs.sort((a, b) => b.ts - a.ts).map((w) => `<div class="stack"><span class="small"><b>${esc(w.who)}</b> · self-scored ${w.score} / ${it.type === "fr" ? 1 : it.type === "code" ? rowsMax(it) : 4}${it.type === "fr" ? "" : ` (${(w.levels || []).join(" + ")})`} · ${ago(w.ts)}</span><div class="your">${esc(w.text || "(blank)")}</div></div>`).join("")}` : ""}
      </div></details>`).join("")}</div>
  </section>
  <section class="panel">
    <h2>Roster: ${esc(course.name)}</h2>
    <p class="small muted">Only GitHub accounts on a roster can save progress, and each student sees only the courses they are on. These lines go on the ${esc(course.short)} roster; a student already on another course's roster is added to this one too. Paste one student per line: <code>login, name</code> or <code>login, githubId, name</code>. The GitHub number is looked up when it is missing.</p>
    <label for="rosterin" class="small muted">Students to add</label>
    <textarea id="rosterin" rows="5" class="out" placeholder="GeorgeChen11, George Chen"></textarea>
    <div class="row"><button class="btn primary" id="addroster">Add to roster</button><span class="small muted" id="rostermsg"></span></div>
    <details><summary>${roster.length} on the roster</summary><div class="stack"><div class="tablewrap"><table><tbody>${roster.sort((a, b) => (a.name || "").localeCompare(b.name || "")).map((r) => `<tr><td>${esc(r.name)}</td><td class="mono small">@${esc(r.login)}</td><td class="mono small">${esc(r.ghId)}</td><td class="small muted">${coursesOf(r).length > 1 ? esc(coursesOf(r).map((id) => courseById(id).short).join(", ")) : ""}</td><td class="num"><button class="btn ghost" data-remove="${esc(r.ghId)}">Remove</button></td></tr>`).join("")}</tbody></table></div></div></details>
  </section>`;

  $$("[data-approve]").forEach((b) => b.addEventListener("click", async () => {
    const id = b.dataset.approve;
    await backend.addRoster([withCourse({ ghId: id, login: b.dataset.login, name: $(`#nm-${CSS.escape(id)}`).value.trim() || b.dataset.login })]);
    await backend.removeRequest(id); toast("Added."); renderTeacher();
  }));
  $$("[data-dismiss]").forEach((b) => b.addEventListener("click", async () => { await backend.removeRequest(b.dataset.dismiss); renderTeacher(); }));
  $$("[data-remove]").forEach((b) => b.addEventListener("click", async () => {
    if (b.dataset.sure) {
      const r = rosterAll.find((x) => x.ghId === b.dataset.remove);
      const left = coursesOf(r).filter((id) => id !== course.id);
      if (left.length) await backend.addRoster([{ ghId: r.ghId, login: r.login || "", name: r.name || "", courses: left }]);
      else await backend.removeRoster(r.ghId);
      toast(`Removed from ${course.short}.`); renderTeacher();
    }
    else { b.dataset.sure = "1"; b.textContent = "Remove for good"; }
  }));
  $("#addroster").addEventListener("click", async () => {
    const msg = $("#rostermsg");
    const lines = $("#rosterin").value.split("\n").map((l) => l.split(",").map((x) => x.trim())).filter((p) => p[0]);
    const add = [], miss = [];
    for (const p of lines) {
      let [login, id, name] = p.length >= 3 ? p : [p[0], "", p[1] || ""];
      if (!/^\d+$/.test(id)) {
        msg.textContent = `Looking up @${login}...`;
        try { const r = await fetch(`https://api.github.com/users/${encodeURIComponent(login)}`); if (!r.ok) throw new Error(r.status); const j = await r.json(); id = String(j.id); login = j.login; }
        catch (e) { miss.push(login); continue; }
      }
      add.push(withCourse({ ghId: id, login, name: name || login }));
    }
    if (add.length) await backend.addRoster(add);
    msg.textContent = "";
    toast(`Added ${add.length}.${miss.length ? ` Not found on GitHub: ${miss.join(", ")}.` : ""}`);
    if (!miss.length) renderTeacher();
  });
  function withCourse(e) {
    const had = rosterAll.find((x) => x.ghId === e.ghId);
    return { ...e, courses: [...new Set([...(had ? coursesOf(had) : []), course.id])] };
  }
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
  if (!onRoster && !isTeacher()) return renderNotOnList();
  const r = location.hash.slice(1) || "home";
  clearInterval(app.clock);
  // The book belongs to AP CSP: a book link opens that course when the student is in it.
  if ((r === "learn" || r.startsWith("learn-")) && !course.book) {
    const withBook = myCourses().find((c) => c.book);
    if (!withBook) { location.hash = "home"; return; }
    setCourse(withBook.id); renderBar();
  }
  if (r === "misses") return renderMisses();
  if (r === "review") { if (!app.session || app.session.i >= app.session.queue.length) app.session = null; return renderReview(); }
  if (r === "mock") { if (app.mock && app.mock.phase === "done") app.mock = null; return renderMock(); }
  if (r === "teacher" && isTeacher()) return renderTeacher();
  if (r === "learn") return renderLearnHome(view, bookApi);
  if (r.startsWith("learn-")) return renderSection(view, r.slice(6), bookApi);
  return renderHome();
}
window.addEventListener("hashchange", () => { window.scrollTo(0, 0); route(); });

let handling = null;
async function handleUser(u) {
  user = u;
  if (!u) { profile = null; onRoster = false; rosterEntry = null; return route(); }
  const run = (async () => {
    profile = (await backend.loadUser(u.uid).catch(() => null));
    rosterEntry = await backend.getRoster(u);
    onRoster = !!rosterEntry;
    if (!u.login && profile?.login) u.login = profile.login;
    if (!u.login && u.ghId) {
      try { const r = await fetch(`https://api.github.com/user/${u.ghId}`); if (r.ok) u.login = (await r.json()).login; } catch (e) { /* offline */ }
    }
    if (!onRoster && !isTeacher()) { await backend.requestAccess(u); return route(); }
    const now = Date.now();
    profile ||= { firstSeen: now, decks: {} };
    Object.assign(profile, { ghId: String(u.ghId), login: u.login || profile.login || "", name: u.name || profile.name || "", photo: u.photo || profile.photo || "", lastActive: now });
    await backend.saveUser(u.uid, profile).catch((e) => console.error(e));
    let saved = null; try { saved = localStorage.getItem("ap-review-course"); } catch (e) { /* storage blocked */ }
    setCourse(params.get("course") || saved || myCourses()[0]?.id, false);
    route();
  })();
  handling = run;
  await run;
}

// Example students for the demo's class view, so it opens with something to read. Each course gets its own.
function seedDemo(s) {
  let seed = 7; const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  const hard = { index: 0.85, parallel: 0.7, byhand: 0.72, forloop: 0.65, listloop: 0.55, "wr-nolist": 0.45, "wr-logic": 0.6, controls: 0.5, risk: 0.55, "fr-risk": 0.5, "fr-control": 0.4, "fr-log": 0.55 };
  let k = 0;
  for (const c of courses) {
    const d = c.decks[0];
    const n = c.id === "cyber" ? 6 : 7;
    for (let j = 0; j < n; j++, k++) {
      const name = `Example ${c.short} Student ${"ABCDEFG"[j]}`;
      const ghId = String(2000000 + k), uid = "demo-ex-" + k, skill = 0.75 + (rnd() - 0.5) * 0.5;
      s.roster[ghId] = { login: `example-${c.id}-${j + 1}`, name, courses: [c.id] };
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
          } else if (it.type === "code") {
            const max = it.rows.length, sc = ok ? max - Math.floor(rnd() * 2) : Math.floor(rnd() * 4);
            card = grade(card, sc === max ? 1 : sc * 2 >= max ? 0.5 : 0, t, { wr: { text: "(example code)", score: sc, levels: it.rows.map((_, r) => (r < sc ? 1 : 0)), ts: t } });
          } else if (it.type === "fr") {
            card = grade(card, ok ? 1 : 0, t, { wr: { text: "(example answer)", score: ok ? 1 : 0, levels: [ok ? 1 : 0], ts: t } });
          } else card = grade(card, ok ? 1 : 0, t, (it.type === "mcq" || it.type === "vocab") && !ok ? { choice: 1 + Math.floor(rnd() * 3) } : {});
        }
        cards[it.id] = card;
      }
      const f0 = d.forms?.[d.forms.length - 1], tot = f0?.total ?? d.mock.total;
      const mocks = rnd() < 0.7 ? [{ ts: t, score: Math.round(tot * (0.45 + skill * 0.4)), total: tot, a: 0, b: 0, minutes: 21, form: f0 ? f0.id : null, items: [] }] : [];
      s.users[uid] = { ghId, login: `example-${c.id}-${j + 1}`, name, photo: "", firstSeen: t - DAY, lastActive: t - Math.floor(rnd() * 4) * DAY, decks: { [d.id]: { cards, mocks } } };
    }
  }
  s.requests["2000099"] = { login: "example-new-account", name: "Example New Account", ts: Date.now() - 3600000 };
}

// ------------------------------------------------------------------------------------------ start
(async function start() {
  try {
    backend = demo ? demoBackend({ teacherGithubIds, seed: seedDemo }) : await firebaseBackend(firebaseConfig, firebaseSdk);
  } catch (e) {
    view.innerHTML = `<section class="panel"><h1>The site could not start</h1><p>${esc(e.message)}</p></section>`;
    return;
  }
  if (demo) teacherGithubIds.push(backend.people.teacher.ghId);
  backend.onAuth((u) => { if (handling && u && user && u.uid === user.uid) return; handleUser(u); });
})();

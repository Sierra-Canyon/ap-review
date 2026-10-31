import { firebaseConfig, teacherGithubIds, teacherName, firebaseSdk } from "./firebase-config.js";
import { firebaseBackend, demoBackend } from "./backend.js";
import { blankCard, grade, skillMastery, buildSession, counts, buildMock, normOut, normCell, DAY } from "./srs.js";
import deck from "./decks/csp-q3.js";
import { renderLearnHome, renderSection, bookSections, sectionsForSkill, activitiesOf } from "./book-ui.js";

// ------------------------------------------------------------------------------------------ helpers
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const skillName = (id) => deck.skills.find((s) => s.id === id)?.name || id;
const skillFrom = (id) => deck.skills.find((s) => s.id === id)?.from || "";
const typeName = { mcq: "Code reading", output: "Type the output", trace: "Trace table", wr: "Written response" };
const shuffle = (a) => { const b = [...a]; for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };
const pct = (x) => Math.round(x * 100);

function hl(code) {
  const re = /(\/\/[^\n]*)|("(?:[^"\\\n]|\\.)*")|\b(\d+)\b|\b(int|string|bool|void|return|if|else|for|foreach|while|new|true|false|var|double|char|in|null)\b|\b(List|Console)\b/g;
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
// Short inline code in prose: anything that looks like C# goes in a code span.
function prose(s) {
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
  if (!deck.quizDate) return "";
  const [y, m, d] = deck.quizDate.split("-").map(Number);
  const quiz = new Date(y, m - 1, d);
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const days = Math.round((quiz - today) / DAY);
  const label = quiz.toLocaleDateString("en-US", { weekday: "short", month: "numeric", day: "numeric" });
  if (days < 0) return "";
  if (days === 0) return `Quiz 3 is today, ${label}.`;
  if (days === 1) return `Quiz 3 is tomorrow, ${label}.`;
  return `Quiz 3 is ${label}, in ${days} days.`;
}

// ------------------------------------------------------------------------------------------ state
const params = new URLSearchParams(location.search);
const demo = params.has("demo") || !firebaseConfig;
let backend, user = null, profile = null, onRoster = false;
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
  const links = [["home", "Home"], ["learn", "Learn"], ["review", "Review"], ["mock", "Mock quiz"]];
  if (isTeacher()) links.push(["teacher", "Class"]);
  $("#bar").innerHTML = `<div class="bar-in">
    <a class="mark" href="#home"><span class="tile" aria-hidden="true"></span>CSP Review</a>
    ${user && (onRoster || isTeacher()) ? `<nav aria-label="Sections">${links.map(([h, t]) => `<a href="#${h}" ${r === h || (h === "learn" && r.startsWith("learn-")) ? 'aria-current="page"' : ""}>${t}</a>`).join("")}</nav>` : ""}
    ${user ? `<div class="who">${user.photo ? `<img src="${esc(user.photo)}" alt="">` : ""}<span>@${esc(profile?.login || user.login || "")}</span><button class="btn ghost small" id="signout">Sign out</button></div>` : ""}
  </div>`;
  $("#signout")?.addEventListener("click", async () => { await backend.signOut(); location.hash = ""; });
  $("#demoband").hidden = !demo;
}

const ghIcon = `<svg class="gh" viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>`;

function renderSignIn() {
  view.className = "";
  view.innerHTML = `<section class="panel signin enter">
    <span class="eyebrow">${esc(deck.course)}</span>
    <h1>${esc(deck.title)}</h1>
    <p>Review for the quiz with code-reading questions, output and trace tables, and written responses scored with the quiz's own rubric rows. What you get wrong comes back sooner.</p>
    ${quizCountdown() ? `<p class="countdown">${esc(quizCountdown())}</p>` : ""}
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
      <a class="btn primary big" href="#review">${c.due + c.fresh ? "Start review" : "Keep going"}</a>
    </div>
    <div class="panel mode">
      <span class="eyebrow">Learn</span>
      <div class="row"><span class="num">${bookSections.filter((x) => { const a = activitiesOf(x), pr = (profile.book || {})[x.id]; return a.length && pr && a.every((id) => pr.a && pr.a[id]); }).length}</span><span class="muted">of ${bookSections.length} sections done</span></div>
      <p class="small muted">Variables, if statements, functions, lists, and for loops, with code you can run and step through.</p>
      <a class="btn big" href="#learn">Open the book</a>
    </div>
    <div class="panel mode">
      <span class="eyebrow">Mock quiz</span>
      <div class="row"><span class="num">20</span><span class="muted">points</span></div>
      <p class="small muted">Six multiple choice and two written responses, the same shape as the quiz.${lastMock ? ` Last: ${lastMock.score} / 20 · Best: ${best} / 20.` : ""}</p>
      <a class="btn big" href="#mock">Take a mock quiz</a>
    </div>
  </section>
  <section class="panel">
    <div class="row spread"><h2>Skills</h2><span class="small muted">${answered} answered</span></div>
    <div class="skills">
      ${deck.skills.map((s) => `<div class="skill">
        <div><b>${esc(s.name)}</b> <span class="from">${esc(s.from)} · seen ${sm[s.id].seen} of ${sm[s.id].total}</span></div>
        <div class="meter ${sm[s.id].value >= 0.8 ? "good" : ""}" role="img" aria-label="${pct(sm[s.id].value)} percent"><i style="width:${pct(sm[s.id].value)}%"></i></div>
        <span class="pct">${pct(sm[s.id].value)}%</span></div>`).join("")}
    </div>
    <p class="small muted">A skill is full when every item in it has been answered right three times in a row, spaced out over days.</p>
  </section>`;
}

// ------------------------------------------------------------------------------------------ one item
// opts.mode: "review" (feedback right away) or "mock" (no feedback; answer kept in opts.answer)
function itemHTML(item, opts = {}) {
  const head = `<div class="row"><span class="chip accent">${esc(skillName(item.skill))}</span><span class="chip">${esc(typeName[item.type])}</span>${opts.tag ? `<span class="chip">${esc(opts.tag)}</span>` : ""}</div>`;
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
    ${item.code ? codeBlock(item.code) : ""}
    <p><b>${prose(item.question)}</b></p>`;
}

function mountItem(host, item, { mode = "review", onAnswer, saved } = {}) {
  host.innerHTML = itemHTML(item, { mode });
  host.dataset.item = item.id;
  const area = document.createElement("div");
  area.className = "stack";
  host.append(area);

  if (item.type === "mcq") {
    const order = saved?.order || shuffle(item.choices.map((_, k) => k));
    area.innerHTML = `<div class="opts" role="group" aria-label="Choices">${order.map((k, pos) => `
      <button class="opt ${item.mono ? "mono" : ""}" data-k="${k}"><span class="letter">${"ABCD"[pos]}</span><span class="txt">${esc(item.choices[k])}</span></button>`).join("")}</div>`;
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
function startReview() {
  const st = deckState();
  const s = buildSession(deck, st.cards);
  app.session = { queue: s.items.map((it) => ({ it, again: false })), i: 0, marks: [], extra: s.extra, requeued: {} };
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
    <div class="row spread small muted"><span>${s.i + 1} of ${s.queue.length}${again ? " · back again" : ""}${s.extra ? " · extra practice" : ""}</span><a href="#home">Stop</a></div>
    <section class="panel enter" id="card"></section>
    <div class="row" id="nextrow" hidden><button class="btn primary big" id="next">Next</button></div>`;
  mountItem($("#card"), it, {
    mode: "review",
    onAnswer: async ({ result, extra }) => {
      s.marks[s.i] = result;
      // Missed: it comes back three items later, once.
      if (result === 0 && !s.requeued[it.id]) { s.requeued[it.id] = 1; s.queue.splice(Math.min(s.i + 4, s.queue.length), 0, { it, again: true }); }
      $("#nextrow").hidden = false;
      if (result < 1) {
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
    <ul class="list-plain">${firsts.map((x) => `<li class="row"><span class="chip ${x.m === 1 ? "good" : x.m === 0.5 ? "warn" : "bad"}">${x.m === 1 ? "right" : x.m === 0.5 ? "partly" : "missed"}</span><span>${esc(skillName(x.q.it.skill))} · ${esc(typeName[x.q.it.type])}</span></li>`).join("")}</ul>
    <p class="muted">${c.due + c.fresh ? `${c.due} due and ${c.fresh} new still waiting.` : "Nothing is due right now."}</p>
    <div class="row"><button class="btn primary big" id="more">Another set</button><a class="btn big" href="#home">Home</a></div>
  </section>`;
  $("#more").addEventListener("click", () => { app.session = null; startReview(); });
}

// ------------------------------------------------------------------------------------------ mock quiz
function startMock() {
  const m = buildMock(deck, deckState().cards);
  app.mock = { items: [...m.partA, ...m.partB], partA: m.partA.length, i: 0, answers: {}, start: Date.now(), phase: "take" };
  renderMock();
}
function renderMock() {
  view.className = "";
  const m = app.mock;
  if (!m) {
    view.innerHTML = `<section class="panel enter">
      <span class="eyebrow">Mock quiz</span><h1>Quiz 3 practice</h1>
      <p><b>Part A.</b> Six multiple-choice items, 2 points each. Read the code and choose what it does.</p>
      <p><b>Part B.</b> Two written responses, 4 points each, scored with the quiz's rubric rows: one about the code without the list (2026 exam, 2(c)), and one about a logic error (2025 exam, Set 2, 2(b)).</p>
      <p class="muted">No feedback until the end. The quiz itself is 25 minutes, with LockDown on.</p>
      <div class="row"><button class="btn primary big" id="go">Start</button><a class="btn big" href="#home">Not now</a></div></section>`;
    $("#go").addEventListener("click", startMock);
    return;
  }
  if (m.phase === "score") return renderMockScore();
  if (m.phase === "done") return renderMockDone();
  const it = m.items[m.i];
  const partB = m.i >= m.partA;
  view.innerHTML = `
    <div class="progress">${m.items.map((x, k) => `<span class="${m.answers[x.id] && (m.answers[x.id].choice !== undefined || m.answers[x.id].text) ? "done" : ""}"></span>`).join("")}</div>
    <div class="row spread small muted"><span>${partB ? "Part B" : "Part A"} · ${m.i + 1} of ${m.items.length} · ${partB ? "4" : "2"} points</span><span id="clock"></span></div>
    <section class="panel enter" id="card"></section>
    <div class="row spread"><button class="btn" id="prev" ${m.i === 0 ? "disabled" : ""}>Back</button>
      ${m.i < m.items.length - 1 ? `<button class="btn primary big" id="next">Next</button>` : `<button class="btn primary big" id="finish">Finish and score</button>`}</div>`;
  mountItem($("#card"), it, { mode: "mock", saved: m.answers[it.id], onAnswer: (a) => { m.answers[it.id] = { ...m.answers[it.id], ...a }; } });
  if (it.type === "mcq" && !m.answers[it.id]) m.answers[it.id] = {};
  const tick = () => { const s = Math.floor((Date.now() - m.start) / 1000); const el = $("#clock"); if (el) el.textContent = `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")} of 25:00`; };
  tick(); clearInterval(app.clock); app.clock = setInterval(tick, 1000);
  $("#prev").addEventListener("click", () => { m.i--; renderMock(); });
  $("#next")?.addEventListener("click", () => { m.i++; renderMock(); window.scrollTo(0, 0); });
  $("#finish")?.addEventListener("click", () => {
    const blank = m.items.filter((x) => x.type === "mcq" ? m.answers[x.id]?.choice === undefined : !m.answers[x.id]?.text?.trim()).length;
    if (blank && !app.confirmBlank) { app.confirmBlank = true; toast(`${blank} left blank. Press Finish again to score anyway.`); return; }
    app.confirmBlank = false;
    clearInterval(app.clock);
    m.minutes = Math.round((Date.now() - m.start) / 60000);
    m.phase = "score"; m.wi = 0; m.wr = {};
    renderMock(); window.scrollTo(0, 0);
  });
}
function renderMockScore() {
  // Part B: the student scores each written response with the rubric. Model answers come after both are scored.
  const m = app.mock;
  const wrs = m.items.slice(m.partA);
  const it = wrs[m.wi];
  view.innerHTML = `<div class="row spread small muted"><span>Scoring Part B · ${m.wi + 1} of ${wrs.length}</span></div>
    <section class="panel enter" id="card"></section>`;
  const card = $("#card");
  card.innerHTML = `<div class="row"><span class="chip accent">${esc(skillName(it.skill))}</span><span class="src">${esc(it.source)}</span></div>
    ${codeBlock(it.listII, "List (ii)")}<div class="prompt">${esc(it.prompt)}</div>
    <div class="stack"><b>Your answer</b><div class="your">${esc(m.answers[it.id]?.text || "(blank)")}</div></div>`;
  const area = document.createElement("div"); area.className = "stack"; card.append(area);
  scoreWR(area, it, m.answers[it.id]?.text || "", (score, levels) => {
    m.wr[it.id] = { score, levels };
    area.insertAdjacentHTML("beforeend", `<div class="row"><button class="btn primary big" id="nextwr">${m.wi < wrs.length - 1 ? "Next written response" : "See my score"}</button></div>`);
    $("#nextwr").addEventListener("click", async () => {
      if (m.wi < wrs.length - 1) { m.wi++; renderMockScore(); window.scrollTo(0, 0); return; }
      await finishMock(); window.scrollTo(0, 0);
    });
  }, { showModel: false });
}
async function finishMock() {
  const m = app.mock;
  const A = m.items.slice(0, m.partA), B = m.items.slice(m.partA);
  const a = A.reduce((t, it) => t + (m.answers[it.id]?.choice === it.answer ? 2 : 0), 0);
  const b = B.reduce((t, it) => t + (m.wr[it.id]?.score || 0), 0);
  m.score = a + b; m.a = a; m.b = b;
  const st = deckState();
  const now = Date.now();
  for (const it of A) {
    const ch = m.answers[it.id]?.choice;
    st.cards[it.id] = grade(st.cards[it.id] || blankCard(), ch === it.answer ? 1 : 0, now, { choice: ch ?? -1 });
  }
  for (const it of B) {
    const sc = m.wr[it.id]?.score || 0;
    st.cards[it.id] = grade(st.cards[it.id] || blankCard(), sc === 4 ? 1 : sc >= 2 ? 0.5 : 0, now, { wr: { text: (m.answers[it.id]?.text || "").slice(0, 3000), score: sc, levels: m.wr[it.id]?.levels, ts: now } });
  }
  st.mocks.push({ ts: now, score: m.score, a, b, minutes: m.minutes, items: m.items.map((x) => x.id) });
  if (st.mocks.length > 30) st.mocks = st.mocks.slice(-30);
  m.phase = "done";
  await save();
  renderMock();
}
function renderMockDone() {
  const m = app.mock;
  const A = m.items.slice(0, m.partA), B = m.items.slice(m.partA);
  view.innerHTML = `<section class="panel enter">
      <span class="eyebrow">Mock quiz</span>
      <div class="row"><span class="scorebig">${m.score} / 20</span><span class="muted">Part A ${m.a} / 12 · Part B ${m.b} / 8 · ${m.minutes} min</span></div>
      <div class="row"><button class="btn primary" id="again">Another mock quiz</button><a class="btn" href="#review">Review</a><a class="btn ghost" href="#home">Home</a></div>
    </section>
    <h2>Part A</h2>
    ${A.map((it, k) => {
      const ch = m.answers[it.id]?.choice;
      const ok = ch === it.answer;
      return `<details class="panel" ${ok ? "" : "open"}><summary><span class="chip ${ok ? "good" : "bad"}">${ok ? "2 / 2" : "0 / 2"}</span> ${k + 1}. ${esc(skillName(it.skill))}</summary>
        <div class="stack">${it.stem ? `<p>${prose(it.stem)}</p>` : ""}${it.code ? codeBlock(it.code) : ""}<p><b>${prose(it.question)}</b></p>
        ${ch !== undefined && !ok ? `<div class="feedback no"><span class="verdict">You chose: ${esc(it.choices[ch])}</span><p>${prose(it.why[ch])}</p></div>` : ch === undefined ? `<div class="feedback no"><span class="verdict">Left blank.</span></div>` : ""}
        <div class="feedback ok"><span class="verdict">Answer: ${esc(it.choices[it.answer])}</span><p>${prose(it.why[it.answer])}</p></div></div></details>`;
    }).join("")}
    <h2>Part B</h2>
    ${B.map((it) => `<details class="panel" open><summary><span class="chip ${m.wr[it.id].score === 4 ? "good" : m.wr[it.id].score >= 2 ? "warn" : "bad"}">${m.wr[it.id].score} / 4</span> ${esc(skillName(it.skill))}</summary>
      <div class="stack"><div class="your">${esc(m.answers[it.id]?.text || "(blank)")}</div>${modelHTML(it, m.wr[it.id].score, m.wr[it.id].levels.every((x) => x === 2))}</div></details>`).join("")}`;
  $("#again").addEventListener("click", () => { app.mock = null; startMock(); });
}

// ------------------------------------------------------------------------------------------ teacher
async function renderTeacher() {
  view.className = "wide";
  view.innerHTML = `<p class="muted">Loading the class...</p>`;
  let users, roster, requests;
  try { [users, roster, requests] = await Promise.all([backend.listUsers(), backend.listRoster(), backend.listRequests()]); }
  catch (e) { view.innerHTML = `<section class="panel"><h1>Could not load the class</h1><p>${esc(e.message)}</p><p class="muted">Check that your GitHub account's number is in teacherGithubIds in firebase-config.js and in firestore.rules.</p></section>`; return; }
  const byGh = Object.fromEntries(users.map((u) => [String(u.ghId), u]));
  const rows = roster.map((r) => ({ ...r, user: byGh[r.ghId] }))
    .concat(users.filter((u) => !roster.find((r) => r.ghId === String(u.ghId)) && !teacherGithubIds.includes(String(u.ghId))).map((u) => ({ ghId: String(u.ghId), login: u.login, name: u.name, user: u, off: true })))
    .sort((a, b) => (a.name || a.login || "").localeCompare(b.name || b.login || ""));
  const stats = (u) => {
    const st = u?.decks?.[deck.id]; if (!st) return null;
    const cards = Object.values(st.cards || {});
    const n = cards.reduce((t, c) => t + c.n, 0), c = cards.reduce((t, x) => t + x.c, 0);
    return { n, acc: n ? c / n : 0, sm: skillMastery(deck, st.cards || {}), mocks: st.mocks || [], cards: st.cards || {} };
  };
  rows.forEach((r) => { r.s = stats(r.user); });
  const active = rows.filter((r) => r.user?.lastActive > Date.now() - 7 * DAY).length;
  const totalN = rows.reduce((t, r) => t + (r.s?.n || 0), 0);
  const totalC = rows.reduce((t, r) => t + (r.s ? r.s.acc * r.s.n : 0), 0);
  const mocks = rows.flatMap((r) => r.s?.mocks || []);

  // Class view of every item
  const items = deck.items.map((it) => {
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
  <section class="hero"><span class="eyebrow">Class view · ${esc(deck.title)}</span><h1>Period D</h1>${quizCountdown() ? `<p class="countdown">${esc(quizCountdown())}</p>` : ""}</section>
  <section class="kpis">
    <div class="kpi"><b>${rows.filter((r) => !r.off).length}</b><span class="small muted">on the roster</span></div>
    <div class="kpi"><b>${active}</b><span class="small muted">active in the last 7 days</span></div>
    <div class="kpi"><b>${totalN}</b><span class="small muted">answers</span></div>
    <div class="kpi"><b>${totalN ? pct(totalC / totalN) + "%" : "–"}</b><span class="small muted">right, all answers</span></div>
    <div class="kpi"><b>${mocks.length}</b><span class="small muted">mock quizzes taken${mocks.length ? `, mean ${(mocks.reduce((t, x) => t + x.score, 0) / mocks.length).toFixed(1)} / 20` : ""}</span></div>
  </section>
  ${requests.length ? `<section class="panel"><h2>Waiting to be added</h2><p class="small muted">These accounts signed in and are not on the roster.</p>
    <div class="tablewrap"><table><tbody>${requests.map((q) => `<tr><td><b>@${esc(q.login)}</b> <span class="muted small">${esc(q.name)} · GitHub ${esc(q.ghId)} · ${ago(q.ts)}</span></td>
      <td class="num"><input type="text" id="nm-${esc(q.ghId)}" placeholder="Name on the roster" value="${esc(q.name)}" style="max-width:220px"> <button class="btn primary" data-approve="${esc(q.ghId)}" data-login="${esc(q.login)}">Add</button> <button class="btn ghost" data-dismiss="${esc(q.ghId)}">Dismiss</button></td></tr>`).join("")}</tbody></table></div></section>` : ""}
  <section class="panel">
    <div class="row spread"><h2>Students</h2><button class="btn" id="csv">Download CSV</button></div>
    <div class="tablewrap"><table>
      <thead><tr><th>Student</th><th>Last active</th><th class="num">Answers</th><th class="num">Right</th><th class="num">Mock best</th><th class="num">Mock last</th><th class="num" title="Book sections with every activity done">Book</th>${deck.skills.map((s) => `<th title="${esc(s.name)}">${esc(s.from === "Written response" ? (s.id === "wr-nolist" ? "WR: no list" : "WR: logic") : s.from)}</th>`).join("")}</tr></thead>
      <tbody>${rows.map((r) => `<tr>
        <td><b>${esc(r.name || r.login)}</b><br><span class="small muted">@${esc(r.login || "")}${r.off ? " · not on roster" : ""}</span></td>
        <td class="small">${r.user ? ago(r.user.lastActive) : "not signed in yet"}</td>
        <td class="num">${r.s?.n || 0}</td>
        <td class="num">${r.s?.n ? pct(r.s.acc) + "%" : "–"}</td>
        <td class="num">${r.s?.mocks.length ? Math.max(...r.s.mocks.map((x) => x.score)) : "–"}</td>
        <td class="num">${r.s?.mocks.length ? r.s.mocks[r.s.mocks.length - 1].score : "–"}</td>
        <td class="num">${bookDone(r.user)} / ${bookSections.length}</td>
        ${deck.skills.map((s) => `<td>${r.s && r.s.sm[s.id].seen ? heat(r.s.sm[s.id].value) : `<span class="heat hx">–</span>`}</td>`).join("")}
      </tr>`).join("")}</tbody></table></div>
    <p class="small muted">Skill cells are mastery: 100% means every item in the skill was answered right three times in a row, spaced over days. A dash means the student has not tried that skill.</p>
  </section>
  <section class="panel">
    <h2>Book</h2>
    <p class="small muted">For each section: students who opened it, and students who finished every activity in it.</p>
    <div class="tablewrap"><table><thead><tr><th>Section</th><th class="num">Opened</th><th class="num">Finished</th><th>Not finished</th></tr></thead><tbody>
      ${bookSections.map((sec) => {
        const opened = rows.filter((r) => r.user?.book?.[sec.id]);
        const fin = opened.filter((r) => { const a = activitiesOf(sec), pr = r.user.book[sec.id]; return a.length && a.every((id) => pr.a && pr.a[id]); });
        const notFin = opened.filter((r) => !fin.includes(r));
        return `<tr><td><a href="#learn-${sec.id}">${esc(sec.number)} ${esc(sec.title)}</a></td><td class="num">${opened.length}</td><td class="num">${fin.length}</td><td class="small">${notFin.map((r) => esc(r.name || r.login)).join(", ")}</td></tr>`;
      }).join("")}</tbody></table></div>
  </section>
  <section class="panel">
    <h2>Items, hardest first</h2>
    <p class="small muted">Right is the share of all attempts. Missed last is how many students got it wrong the last time they saw it. Open a row for the item, the wrong answer picked most, and the written responses.</p>
    <div class="stack">${items.map(({ it, n, acc, missedLast, students, top, wrs }) => `<details>
      <summary><span class="row" style="display:inline-flex">${heat(acc)} <span class="mono small">${esc(it.id)}</span> <span>${esc(skillName(it.skill))} · ${esc(typeName[it.type])}</span> <span class="small muted">${students} students · ${n} attempts${missedLast ? ` · missed last: ${missedLast}` : ""}</span></span></summary>
      <div class="stack panel">
        ${it.type === "wr" ? `${codeBlock(it.listII, "List (ii)")}<div class="prompt">${esc(it.prompt)}</div>` : `${it.stem ? `<p>${prose(it.stem)}</p>` : ""}${it.code ? codeBlock(it.code) : ""}<p><b>${prose(it.question)}</b></p>`}
        ${it.type === "mcq" ? `<p><b>Answer:</b> ${esc(it.choices[it.answer])}</p>${top ? `<p><b>Wrong answer picked most</b> (${top[1]} times): ${esc(it.choices[top[0]])}<br><span class="small muted">${prose(it.why[top[0]])}</span></p>` : ""}` : ""}
        ${it.type === "output" ? `<p><b>Answer:</b></p><pre class="code"><code>${esc(it.answer)}</code></pre>` : ""}
        ${wrs.length ? `<b>Latest written responses</b>${wrs.sort((a, b) => b.ts - a.ts).map((w) => `<div class="stack"><span class="small"><b>${esc(w.who)}</b> · self-scored ${w.score} / 4 (${(w.levels || []).join(" + ")}) · ${ago(w.ts)}</span><div class="your">${esc(w.text || "(blank)")}</div></div>`).join("")}` : ""}
      </div></details>`).join("")}</div>
  </section>
  <section class="panel">
    <h2>Roster</h2>
    <p class="small muted">Only GitHub accounts on this list can save progress. Paste one student per line: <code>login, name</code> or <code>login, githubId, name</code>. The GitHub number is looked up when it is missing.</p>
    <label for="rosterin" class="small muted">Students to add</label>
    <textarea id="rosterin" rows="5" class="out" placeholder="GeorgeChen11, George Chen"></textarea>
    <div class="row"><button class="btn primary" id="addroster">Add to roster</button><span class="small muted" id="rostermsg"></span></div>
    <details><summary>${roster.length} on the roster</summary><div class="stack"><div class="tablewrap"><table><tbody>${roster.sort((a, b) => (a.name || "").localeCompare(b.name || "")).map((r) => `<tr><td>${esc(r.name)}</td><td class="mono small">@${esc(r.login)}</td><td class="mono small">${esc(r.ghId)}</td><td class="num"><button class="btn ghost" data-remove="${esc(r.ghId)}">Remove</button></td></tr>`).join("")}</tbody></table></div></div></details>
  </section>`;

  $$("[data-approve]").forEach((b) => b.addEventListener("click", async () => {
    const id = b.dataset.approve;
    await backend.addRoster([{ ghId: id, login: b.dataset.login, name: $(`#nm-${CSS.escape(id)}`).value.trim() || b.dataset.login }]);
    await backend.removeRequest(id); toast("Added."); renderTeacher();
  }));
  $$("[data-dismiss]").forEach((b) => b.addEventListener("click", async () => { await backend.removeRequest(b.dataset.dismiss); renderTeacher(); }));
  $$("[data-remove]").forEach((b) => b.addEventListener("click", async () => {
    if (b.dataset.sure) { await backend.removeRoster(b.dataset.remove); toast("Removed."); renderTeacher(); }
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
      add.push({ ghId: id, login, name: name || login });
    }
    if (add.length) await backend.addRoster(add);
    msg.textContent = "";
    toast(`Added ${add.length}.${miss.length ? ` Not found on GitHub: ${miss.join(", ")}.` : ""}`);
    if (!miss.length) renderTeacher();
  });
  $("#csv").addEventListener("click", () => {
    const head = ["name", "login", "last_active", "answers", "right_pct", "mock_best", "mock_last", ...deck.skills.map((s) => s.id)];
    const lines = rows.map((r) => [r.name || "", r.login || "", r.user?.lastActive ? new Date(r.user.lastActive).toISOString() : "", r.s?.n || 0, r.s?.n ? pct(r.s.acc) : "",
      r.s?.mocks.length ? Math.max(...r.s.mocks.map((x) => x.score)) : "", r.s?.mocks.length ? r.s.mocks[r.s.mocks.length - 1].score : "",
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
  if (!u) { profile = null; onRoster = false; return route(); }
  const run = (async () => {
    profile = (await backend.loadUser(u.uid).catch(() => null));
    onRoster = await backend.onRoster(u);
    if (!u.login && profile?.login) u.login = profile.login;
    if (!u.login && u.ghId) {
      try { const r = await fetch(`https://api.github.com/user/${u.ghId}`); if (r.ok) u.login = (await r.json()).login; } catch (e) { /* offline */ }
    }
    if (!onRoster && !isTeacher()) { await backend.requestAccess(u); return route(); }
    const now = Date.now();
    profile ||= { firstSeen: now, decks: {} };
    Object.assign(profile, { ghId: String(u.ghId), login: u.login || profile.login || "", name: u.name || profile.name || "", photo: u.photo || profile.photo || "", lastActive: now });
    await backend.saveUser(u.uid, profile).catch((e) => console.error(e));
    route();
  })();
  handling = run;
  await run;
}

// Example students for the demo's class view, so it opens with something to read.
function seedDemo(s) {
  const names = ["Example Student A", "Example Student B", "Example Student C", "Example Student D", "Example Student E", "Example Student F", "Example Student G"];
  const hard = { index: 0.85, parallel: 0.7, byhand: 0.72, forloop: 0.65, listloop: 0.55, "wr-nolist": 0.45, "wr-logic": 0.6 };
  let seed = 7; const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  names.forEach((name, k) => {
    const ghId = String(2000000 + k), uid = "demo-ex-" + k, skill = 0.75 + (rnd() - 0.5) * 0.5;
    s.roster[ghId] = { login: "example-" + (k + 1), name };
    if (k === 6) return; // one has not signed in
    const cards = {}; let t = Date.now() - 3 * DAY;
    for (const it of deck.items) {
      if (rnd() < 0.25) continue;
      let c = blankCard();
      const tries = 1 + Math.floor(rnd() * 3);
      for (let j = 0; j < tries; j++) {
        t += 20 * 60000;
        const p = hard[it.skill] * skill + 0.1;
        const ok = rnd() < p;
        if (it.type === "wr") {
          const sc = ok ? (rnd() < 0.5 ? 4 : 3) : Math.floor(rnd() * 3);
          c = grade(c, sc === 4 ? 1 : sc >= 2 ? 0.5 : 0, t, { wr: { text: "(example answer)", score: sc, levels: [Math.min(2, Math.ceil(sc / 2)), Math.floor(sc / 2)], ts: t } });
        } else c = grade(c, ok ? 1 : 0, t, it.type === "mcq" && !ok ? { choice: 1 + Math.floor(rnd() * 3) } : {});
      }
      cards[it.id] = c;
    }
    const mocks = rnd() < 0.7 ? [{ ts: t, score: Math.round(10 + skill * 8), a: 10, b: 4, minutes: 21, items: [] }] : [];
    s.users[uid] = { ghId, login: "example-" + (k + 1), name, photo: "", firstSeen: t - DAY, lastActive: t - Math.floor(rnd() * 4) * DAY, decks: { [deck.id]: { cards, mocks } } };
  });
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

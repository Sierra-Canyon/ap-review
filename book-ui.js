// The Learn tab: a CSAwesome-style book with runnable C#, a line-by-line stepper, Check Your Understanding,
// mixed-up code, and coding exercises checked with the quest checker's PASS / should be rows.
import { chapters, sections } from "./book/index.js";
import { run as run0, debug as debug0, runTests as runTests0, formatDiagnostic, formatException } from "./runner/csharp.js";

// If the runner itself fails, show that as a message instead of breaking the page.
const guard = (f) => (...a) => {
  try { return f(...a); }
  catch (e) { console.error(e); return { ok: false, diagnostics: [{ severity: "error", code: "CSP002", message: `The runner on this page could not run this code (${e.message}). Try it in VS Code.`, line: 1, col: 1 }] }; }
};
const run = guard(run0), debug = guard(debug0), runTests = guard(runTests0);
import { makeEditor, esc, hl } from "./editor.js";

export { sections as bookSections, chapters as bookChapters };
export const sectionById = Object.fromEntries(sections.map((s) => [s.id, s]));
export const activitiesOf = (sec) => sec.blocks.filter((b) => ["mcq", "parsons", "exercise"].includes(b.type)).map((b) => b.id);
export function sectionsForSkill(skill) { return sections.filter((s) => (s.skills || []).includes(skill)); }

const shuffle = (a) => { const b = [...a]; for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

// ------------------------------------------------------------------ markdown (the FORMAT.md subset)
function inline(s) {
  const parts = String(s).split(/(`[^`]*`)/g);
  return parts.map((p) => {
    if (p.startsWith("`") && p.endsWith("`") && p.length > 1) return `<code>${esc(p.slice(1, -1))}</code>`;
    return esc(p).replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/(^|[^*\w])\*([^*\s][^*]*?)\*(?![*\w])/g, "$1<em>$2</em>");
  }).join("");
}
export function md(src) {
  const blocks = String(src ?? "").replace(/\r\n/g, "\n").split(/\n{2,}/);
  return blocks.map((b) => {
    const lines = b.split("\n");
    if (/^###\s/.test(lines[0])) return `<h4>${inline(lines[0].replace(/^###\s+/, ""))}</h4>` + (lines.length > 1 ? md(lines.slice(1).join("\n")) : "");
    if (/^##\s/.test(lines[0])) return `<h3>${inline(lines[0].replace(/^##\s+/, ""))}</h3>` + (lines.length > 1 ? md(lines.slice(1).join("\n")) : "");
    if (lines.every((l) => /^\s*-\s/.test(l))) return `<ul>${lines.map((l) => `<li>${inline(l.replace(/^\s*-\s+/, ""))}</li>`).join("")}</ul>`;
    if (lines.every((l) => /^\s*\d+\.\s/.test(l))) return `<ol>${lines.map((l) => `<li>${inline(l.replace(/^\s*\d+\.\s+/, ""))}</li>`).join("")}</ol>`;
    return `<p>${lines.map(inline).join("<br>")}</p>`;
  }).join("");
}

// ------------------------------------------------------------------ output of a run
function outputHTML(r, { label = "Output" } = {}) {
  const errs = (r.diagnostics || []).filter((d) => d.severity === "error");
  const warns = (r.diagnostics || []).filter((d) => d.severity === "warning" && d.code !== "CS8321");
  let h = "";
  if (errs.length) {
    h += `<div class="term bad" role="status"><div class="term-h">Build failed</div>${errs.map((d) => `<div class="diag err" data-line="${d.line}">${esc(formatDiagnostic(d))}</div>`).join("")}</div>`;
  }
  if (warns.length) h += `<div class="term warnbox"><div class="term-h">${warns.length} warning${warns.length > 1 ? "s" : ""}: the program still builds and runs</div>${warns.map((d) => `<div class="diag warn" data-line="${d.line}">${esc(formatDiagnostic(d))}</div>`).join("")}</div>`;
  if (r.ok) {
    h += `<div class="term" role="status"><div class="term-h">${esc(label)}</div><pre class="out">${esc(r.stdout) || '<span class="muted">(nothing printed)</span>'}</pre>`;
    if (r.exception) h += `<pre class="exc">${esc(formatException(r.exception))}</pre>`;
    if (r.limit) h += `<pre class="exc">Stopped after 5,000,000 steps. A loop that never ends looks like this: check its test, and check that something in the loop changes it.</pre>`;
    h += `</div>`;
  }
  return h;
}

// ------------------------------------------------------------------ the stepper
function stepperHTML(code) {
  const lines = code.split("\n");
  return `<div class="stepper">
    <div class="st-code" aria-hidden="false"><ol class="st-lines">${lines.map((l, i) => `<li data-l="${i + 1}"><span class="st-arrow" aria-hidden="true"></span><span class="st-n">${i + 1}</span><code>${hl(l) || " "}</code></li>`).join("")}</ol></div>
    <div class="st-side">
      <p class="st-note" aria-live="polite"></p>
      <div class="st-ctl"><button class="btn" data-act="first" aria-label="First step">|&lt;</button><button class="btn" data-act="back">Back</button><span class="st-count small muted"></span><button class="btn primary" data-act="next">Next</button></div>
      <div class="st-vars"></div>
      <div class="st-out"><div class="term-h">Output so far</div><pre class="out"></pre></div>
    </div></div>`;
}
function mountStepper(host, code, result, notes = {}) {
  host.innerHTML = stepperHTML(code);
  const pauses = result.pauses;
  let k = 0;
  const seenLines = new Map();
  // the author's note for a line is shown the first time the program stops there
  const noteFor = pauses.map((p) => { const c = seenLines.get(p.line) || 0; seenLines.set(p.line, c + 1); return c === 0 && notes[String(p.line)] ? notes[String(p.line)] : null; });
  function show() {
    const p = pauses[k];
    $$(".st-lines li", host).forEach((li) => li.classList.toggle("cur", +li.dataset.l === p.line));
    const cur = $(`.st-lines li[data-l="${p.line}"]`, host);
    if (cur) { const box = $(".st-code", host); const top = cur.offsetTop - box.clientHeight / 2; box.scrollTo({ top: Math.max(0, top) }); }
    $(".st-note", host).innerHTML = `<b>Line ${p.line}.</b> ${esc(noteFor[k] || p.note)}${noteFor[k] && p.note && !/^Runs this line/.test(p.note) ? `<br><span class="small muted">${esc(p.note)}</span>` : ""}${p.exception ? `<br><span class="bad-t">${esc(formatException(p.exception).split("\n")[0])}</span>` : ""}`;
    $(".st-count", host).textContent = `Step ${k + 1} of ${pauses.length}${result.pauseLimit && k === pauses.length - 1 ? " (stepping stops here)" : ""}`;
    $(".st-vars", host).innerHTML = p.frames.slice().reverse().map((f, i) => `<div class="st-frame${i === 0 ? " top" : ""}"><div class="term-h">${esc(f.name === "Program" ? "Program (top level)" : f.name)}${i === 0 && p.frames.length > 1 ? " · running now" : ""}</div>
      ${f.vars.length ? `<table class="st-vt"><tbody>${f.vars.map((v) => `<tr><td class="mono">${esc(v.name)}</td><td class="small muted">${esc(v.type)}</td><td class="mono">${esc(v.value)}${v.items ? `<div class="st-items">${v.items.map((x, j) => `<span><i>[${j}]</i> ${esc(x)}</span>`).join("")}</div>` : ""}</td></tr>`).join("")}</tbody></table>` : `<p class="small muted">No variables yet.</p>`}</div>`).join("");
    $(".st-out pre", host).textContent = p.stdout || "";
    $("[data-act=back]", host).disabled = k === 0;
    $("[data-act=first]", host).disabled = k === 0;
    $("[data-act=next]", host).disabled = k === pauses.length - 1;
  }
  host.addEventListener("click", (e) => {
    const a = e.target.closest("[data-act]")?.dataset.act;
    if (!a) return;
    if (a === "next" && k < pauses.length - 1) k++;
    if (a === "back" && k > 0) k--;
    if (a === "first") k = 0;
    show();
  });
  host.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight" && k < pauses.length - 1) { k++; show(); e.preventDefault(); }
    if (e.key === "ArrowLeft" && k > 0) { k--; show(); e.preventDefault(); }
  });
  show();
}

// ------------------------------------------------------------------ pages
export function renderLearnHome(view, api) {
  const prog = api.book();
  const last = Object.entries(prog).filter(([id]) => sectionById[id]).sort((a, b) => (b[1].t || 0) - (a[1].t || 0))[0];
  view.className = "";
  view.innerHTML = `
  <section class="hero"><span class="eyebrow">AP Computer Science Principles</span><h1>Learn</h1>
    <p class="muted">Every topic from the fall, from variables to the game loop. Run every example, step through it line by line, and check yourself as you go.</p></section>
  ${last ? `<a class="panel resume" href="#learn-${last[0]}"><span class="eyebrow">Pick up where you left off</span><b>${esc(sectionById[last[0]].number)} ${esc(sectionById[last[0]].title)}</b></a>` : ""}
  ${chapters.map((ch) => {
    const secs = sections.filter((s) => s.chapter === ch.n);
    return `<section class="panel"><div class="row spread"><h2>${ch.n} · ${esc(ch.title)}</h2><span class="small muted">${esc(ch.from)}</span></div>
      <ol class="toc">${secs.map((s) => {
        const acts = activitiesOf(s), p = prog[s.id] || {}, done = acts.filter((a) => p.a && p.a[a]).length;
        const full = acts.length && done === acts.length;
        return `<li><a href="#learn-${s.id}"><span class="toc-n">${esc(s.number)}</span><span class="toc-t">${esc(s.title)}<span class="small muted"> · ${esc(s.from)} · ${s.minutes} min</span></span>
          <span class="toc-p ${full ? "full" : ""}" title="${done} of ${acts.length} activities">${full ? "✓ done" : done ? `${done} / ${acts.length}` : ""}</span></a></li>`;
      }).join("")}</ol></section>`;
  }).join("")}`;
}

export function renderSection(view, id, api) {
  const sec = sectionById[id];
  if (!sec) { view.innerHTML = `<section class="panel"><h1>No such section</h1><p><a href="#learn">Back to Learn</a></p></section>`; return; }
  const prog = api.book();
  const p = (prog[sec.id] ||= { a: {}, code: {} });
  p.a ||= {}; p.code ||= {};
  p.t = Date.now();
  api.saveSoon();
  const idx = sections.indexOf(sec);
  const prev = sections[idx - 1], next = sections[idx + 1];
  const ch = chapters.find((c) => c.n === sec.chapter);
  const acts = activitiesOf(sec);
  view.className = "book";
  view.innerHTML = `
    <nav class="crumbs small"><a href="#learn">Learn</a> / <span>${ch.n} ${esc(ch.title)}</span></nav>
    <header class="sec-head"><span class="eyebrow">${esc(sec.from)} · about ${sec.minutes} minutes</span><h1><span class="sec-n">${esc(sec.number)}</span> ${esc(sec.title)}</h1>
      <div class="sec-prog" id="secprog"></div></header>
    ${sec.goals?.length ? `<aside class="goals"><b>After this section you can</b><ul>${sec.goals.map((g) => `<li>${inline(g)}</li>`).join("")}</ul></aside>` : ""}
    <div class="blocks"></div>
    <nav class="sec-nav">${prev ? `<a class="btn" href="#learn-${prev.id}">← ${esc(prev.number)} ${esc(prev.title)}</a>` : "<span></span>"}${next ? `<a class="btn primary" href="#learn-${next.id}">${esc(next.number)} ${esc(next.title)} →</a>` : `<a class="btn" href="#learn">Back to Learn</a>`}</nav>`;
  const host = $(".blocks", view);
  let activity = 0, mcqN = 0;
  const updateProg = () => {
    const done = acts.filter((a) => p.a[a]).length;
    $("#secprog", view).innerHTML = acts.length ? `<div class="meter ${done === acts.length ? "good" : ""}" role="img" aria-label="${done} of ${acts.length} activities done"><i style="width:${(100 * done) / acts.length}%"></i></div><span class="small muted">${done} of ${acts.length} activities${done === acts.length ? " · section done" : ""}</span>` : "";
  };
  const complete = (aid, tries) => {
    if (!p.a[aid]) { p.a[aid] = tries || 1; if (acts.every((a) => p.a[a])) p.done = Date.now(); api.saveSoon(); updateProg(); }
  };
  updateProg();
  for (const b of sec.blocks) {
    const el = document.createElement("div");
    el.className = "blk blk-" + b.type;
    host.append(el);
    switch (b.type) {
      case "text": el.innerHTML = md(b.md); break;
      case "note": el.innerHTML = `<div class="note ${b.kind === "trap" ? "trap" : ""}"><span class="eyebrow">${b.kind === "trap" ? "Trap" : "Note"}</span>${md(b.md)}</div>`; break;
      case "ap": el.innerHTML = `<div class="note ap"><span class="eyebrow">On the AP exam</span>${md(b.md)}</div>`; break;
      case "recipe": el.innerHTML = recipeHTML(b); break;
      case "summary": el.innerHTML = `<div class="summary"><h3>Summary</h3><ul>${b.items.map((x) => `<li>${inline(x)}</li>`).join("")}</ul></div>`; break;
      case "code": codeBlock(el, b); break;
      case "step": stepBlock(el, b); break;
      case "mcq": mcqBlock(el, b, ++activity, ++mcqN, complete, p); break;
      case "parsons": parsonsBlock(el, b, ++activity, complete, p); break;
      case "exercise": exerciseBlock(el, b, ++activity, complete, p, api); break;
    }
  }
}

function recipeHTML(b) {
  const tpl = esc(b.template).replace(/\{([A-Za-z][\w -]*)\}/g, '<span class="slot">{$1}</span>');
  return `<div class="recipe"><span class="eyebrow">The recipe</span><h4>${inline(b.title)}</h4><pre class="code recipe-t"><code>${tpl}</code></pre>
    <dl>${b.parts.map((x) => `<div><dt><code>${esc(x.slot)}</code></dt><dd>${inline(x.meaning)}</dd></div>`).join("")}</dl></div>`;
}

function codeBlock(el, b, { title = "Example" } = {}) {
  const needsInput = b.stdin !== undefined || /Console\.ReadLine/.test(b.code);
  el.innerHTML = `<div class="runner">
    <div class="ed-host"></div>
    ${needsInput ? `<div class="stdin"><label class="small muted">Input, one line per <code>Console.ReadLine()</code><textarea class="stdin-ta" rows="${Math.max(1, (b.stdin || "").split("\n").filter(Boolean).length)}" spellcheck="false">${esc((b.stdin || "").replace(/\n$/, ""))}</textarea></label></div>` : ""}
    <div class="row run-bar"><button class="btn primary" data-act="run">Run</button><button class="btn" data-act="step">Step through</button><button class="btn ghost" data-act="reset">Reset</button></div>
    <div class="run-out"></div><div class="run-step"></div></div>`;
  const ed = makeEditor($(".ed-host", el), { code: b.code, label: title });
  const stdin = () => { const t = $(".stdin-ta", el); return t ? t.value + "\n" : ""; };
  const out = $(".run-out", el), stepHost = $(".run-step", el);
  const wireDiags = () => $$(".diag", out).forEach((d) => d.addEventListener("click", () => ed.focusLine(+d.dataset.line)));
  el.addEventListener("click", (e) => {
    const a = e.target.closest("[data-act]")?.dataset.act;
    if (!a) return;
    if (a === "run") {
      stepHost.innerHTML = "";
      const r = run(ed.value, { stdin: stdin() });
      out.innerHTML = outputHTML(r);
      wireDiags();
      const errLine = (r.diagnostics || []).find((d) => d.severity === "error")?.line || r.exception?.line;
      ed.mark(errLine || 0, "bad");
    } else if (a === "step") {
      const r = debug(ed.value, { stdin: stdin() });
      if (!r.ok) { out.innerHTML = outputHTML(r); wireDiags(); stepHost.innerHTML = ""; return; }
      out.innerHTML = "";
      mountStepper(stepHost, ed.value, r);
      $("[data-act=next]", stepHost)?.focus({ preventScroll: true });
    } else if (a === "reset") { ed.value = b.code; out.innerHTML = ""; stepHost.innerHTML = ""; }
  });
}

function stepBlock(el, b) {
  el.innerHTML = `<div class="step-wrap"><div class="row spread"><span class="eyebrow">Step through it</span><span class="small muted">Next and Back, or the arrow keys</span></div>
    ${b.stdin !== undefined ? `<p class="small muted">Input: ${esc(b.stdin.replace(/\n$/, "").split("\n").join(", "))}</p>` : ""}<div class="step-host" tabindex="-1"></div></div>`;
  const r = debug(b.code, { stdin: b.stdin || "" });
  if (!r.ok) { $(".step-host", el).innerHTML = outputHTML(r); return; }
  mountStepper($(".step-host", el), b.code, r, b.notes || {});
}

function activityHead(kind, n) { return `<div class="act-head"><span class="eyebrow">Activity ${n}</span><span class="chip">${kind}</span></div>`; }

function mcqBlock(el, b, n, mcqN, complete, p) {
  const order = shuffle(b.choices.map((_, k) => k));
  const done = !!p.a[b.id];
  el.innerHTML = `<div class="act">${activityHead("Check your understanding", n)}
    <div class="q">${md(b.question)}</div>${b.code ? `<pre class="code"><code>${hl(b.code)}</code></pre>` : ""}
    <div class="opts">${order.map((k, pos) => `<button class="opt ${b.mono ? "mono" : ""}" data-k="${k}"><span class="letter">${"ABCDEF"[pos]}</span><span class="txt">${esc(b.choices[k])}</span></button>`).join("")}</div>
    <p class="small muted act-foot">${done ? "You answered this one already. Try it again if you like." : "Pick one. A wrong pick tells you why, and you can try again."}</p></div>`;
  let tries = 0;
  $$(".opt", el).forEach((btn) => btn.addEventListener("click", () => {
    const k = +btn.dataset.k;
    tries++;
    const right = k === b.answer;
    btn.classList.add(right ? "right" : "wrong");
    btn.disabled = true;
    $(".why", btn)?.remove();
    btn.insertAdjacentHTML("beforeend", `<span class="why">${inline(b.why[k])}</span>`);
    if (right) { $$(".opt", el).forEach((x) => { x.disabled = true; }); $(".act-foot", el).textContent = tries === 1 ? "Right the first time." : `Right, on try ${tries}.`; complete(b.id, tries); }
  }));
}

function parsonsBlock(el, b, n, complete, p) {
  const pool = shuffle([...b.lines.map((t, i) => ({ t, i, real: true })), ...(b.distractors || []).map((t, i) => ({ t, i: 100 + i, real: false }))]);
  const answer = [];
  el.innerHTML = `<div class="act">${activityHead("Mixed-up code", n)}<div class="q">${md(b.prompt)}</div>
    ${b.distractors?.length ? `<p class="small muted">${b.distractors.length === 1 ? "One block is not needed." : `${b.distractors.length} blocks are not needed.`}</p>` : ""}
    <div class="parsons"><div><div class="term-h">Blocks</div><ol class="pz pool"></ol></div><div><div class="term-h">Your program</div><ol class="pz ans"></ol></div></div>
    <div class="row"><button class="btn primary" data-act="check">Check</button><button class="btn ghost" data-act="reset">Start over</button></div><div class="pz-out"></div></div>`;
  const draw = () => {
    $(".pool", el).innerHTML = pool.filter((x) => !answer.includes(x)).map((x) => `<li><button class="pz-b" data-from="pool" data-i="${x.i}" aria-label="Add: ${esc(x.t.trim())}"><code>${hl(x.t)}</code></button></li>`).join("") || `<li class="small muted">All blocks are in your program.</li>`;
    $(".ans", el).innerHTML = answer.map((x, k) => `<li><span class="pz-ln">${k + 1}</span><code class="pz-c">${hl(x.t)}</code><span class="pz-tools"><button class="btn ghost" data-mv="up" data-k="${k}" aria-label="Move up" ${k === 0 ? "disabled" : ""}>↑</button><button class="btn ghost" data-mv="down" data-k="${k}" aria-label="Move down" ${k === answer.length - 1 ? "disabled" : ""}>↓</button><button class="btn ghost" data-mv="out" data-k="${k}" aria-label="Take out">✕</button></span></li>`).join("") || `<li class="small muted">Click a block to add it here.</li>`;
  };
  draw();
  el.addEventListener("click", (e) => {
    const add = e.target.closest("[data-from=pool]");
    if (add) { answer.push(pool.find((x) => x.i === +add.dataset.i)); draw(); return; }
    const mv = e.target.closest("[data-mv]");
    if (mv) {
      const k = +mv.dataset.k;
      if (mv.dataset.mv === "up") [answer[k - 1], answer[k]] = [answer[k], answer[k - 1]];
      if (mv.dataset.mv === "down") [answer[k + 1], answer[k]] = [answer[k], answer[k + 1]];
      if (mv.dataset.mv === "out") answer.splice(k, 1);
      draw(); return;
    }
    const a = e.target.closest("[data-act]")?.dataset.act;
    if (a === "reset") { answer.length = 0; draw(); $(".pz-out", el).innerHTML = ""; }
    if (a === "check") {
      const code = answer.map((x) => x.t).join("\n");
      const out = $(".pz-out", el);
      if (!answer.length) { out.innerHTML = `<p class="small muted">Add blocks first.</p>`; return; }
      const r = run(code);
      const want = (b.expect?.out ?? "").replace(/\n+$/, "");
      const got = r.ok && !r.exception ? r.stdout.replace(/\r/g, "").replace(/\n+$/, "") : null;
      const ok = got !== null && got.split("\n").map((l) => l.trimEnd()).join("\n") === want;
      out.innerHTML = ok ? `<div class="feedback ok"><span class="verdict">Right. It prints what it should.</span></div>` + outputHTML(r)
        : `<div class="feedback no"><span class="verdict">Not yet. ${r.ok ? (r.exception ? "It crashes." : "It prints something else.") : "It does not build."}</span><p class="small">It should print:</p><pre class="out">${esc(want)}</pre></div>` + outputHTML(r);
      if (ok) complete(b.id, 1);
    }
  });
}

function exerciseBlock(el, b, n, complete, p, api) {
  const saved = p.code[b.id];
  let checks = 0, hintsShown = 0;
  el.innerHTML = `<div class="act">${activityHead("Coding exercise", n)}<div class="q">${md(b.prompt)}</div>
    <div class="ed-host"></div>
    <div class="row run-bar"><button class="btn primary" data-act="check">Check</button><button class="btn" data-act="hint">Hint</button><button class="btn ghost" data-act="reset">Start over</button><button class="btn ghost" data-act="sol" hidden>Show a solution</button></div>
    <div class="hints"></div><div class="ex-out"></div><div class="sol"></div></div>`;
  const ed = makeEditor($(".ed-host", el), { code: saved ?? b.starter, label: "Exercise code", onChange: (v) => { p.code[b.id] = v; api.saveSoon(); } });
  const hintBtn = $("[data-act=hint]", el);
  if (!b.hints?.length) hintBtn.hidden = true;
  el.addEventListener("click", (e) => {
    const a = e.target.closest("[data-act]")?.dataset.act;
    if (!a) return;
    if (a === "hint") {
      if (hintsShown < b.hints.length) { $(".hints", el).insertAdjacentHTML("beforeend", `<div class="note"><span class="eyebrow">Hint ${hintsShown + 1}</span>${md(b.hints[hintsShown])}</div>`); hintsShown++; }
      if (hintsShown >= b.hints.length) hintBtn.disabled = true;
    }
    if (a === "reset") { ed.value = b.starter; p.code[b.id] = b.starter; api.saveSoon(); $(".ex-out", el).innerHTML = ""; }
    if (a === "sol") {
      $(".sol", el).innerHTML = `<div class="note"><span class="eyebrow">One solution</span><pre class="code"><code>${hl(b.solution)}</code></pre></div>`;
    }
    if (a === "check") {
      checks++;
      if (checks >= 2) $("[data-act=sol]", el).hidden = false;
      const r = runTests(ed.value, b.given || "", b.tests.map((t) => t.call));
      const out = $(".ex-out", el);
      if (!r.ok) {
        const d = r.diagnostics.filter((x) => x.severity === "error");
        const testErr = d.find((x) => x.where !== "code");
        out.innerHTML = `<div class="term bad"><div class="term-h">Build failed</div>${d.filter((x) => x.where === "code").map((x) => `<div class="diag err">${esc(formatDiagnostic(x))}</div>`).join("")}
          ${testErr && !d.some((x) => x.where === "code") ? `<div class="diag err">The tests call your function as <code>${esc(b.tests[testErr.test]?.call || "")}</code>, and that does not build: ${esc(testErr.code)}: ${esc(testErr.message)}. Check the function's name, its parameters, and its return type.</div>` : ""}</div>`;
        const first = d.find((x) => x.where === "code");
        ed.mark(first ? first.line : 0, "bad");
        return;
      }
      ed.clearMarks();
      const rows = b.tests.map((t, i) => {
        const res = r.results[i];
        const got = res.exception ? `a crash (${res.exception.type})` : res.printed;
        const pass = !res.exception && res.printed === t.expect;
        return { t, got, pass };
      });
      const passed = rows.filter((x) => x.pass).length;
      out.innerHTML = `<div class="tablewrap"><table class="checks"><thead><tr><th>Row</th><th>Test</th><th>Result</th></tr></thead><tbody>
        ${rows.map((x, i) => `<tr><td class="num">${i + 1}</td><td class="mono small">${esc(x.t.call)}</td><td>${x.pass ? `<span class="chip good">PASS</span>` : `should be <code>${esc(x.t.expect)}</code> (yours gives <code>${esc(x.got)}</code>)`}</td></tr>`).join("")}</tbody></table></div>
        <div class="feedback ${passed === rows.length ? "ok" : "no"}"><span class="verdict">${passed} of ${rows.length} rows pass.</span></div>`;
      if (passed === rows.length) complete(b.id, checks);
    }
  });
}

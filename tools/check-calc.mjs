// Checks AP Calculus files before they go into the site: shapes, LaTeX that renders, point totals, and writing rules.
// Usage: node tools/check-calc.mjs <review|test|quiz> <file.js> [more files]
//   review: export const sets; export default [items]
//   test, quiz: export const sets; export default { forms: [ { id, name, group, items } ] }
import katex from "../vendor/katex.js";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const [kind, ...files] = process.argv.slice(2);
if (!["review", "test", "quiz"].includes(kind) || !files.length) { console.log("usage: node tools/check-calc.mjs <review|test|quiz> <file.js> ..."); process.exit(2); }
const range = (n) => Array.from({ length: n }, (_, k) => k + 1);
// AB topics only (6.11 to 6.13, 7.5, 7.9 and 8.13 are BC).
const TOPICS = { u1: range(16), u2: range(10), u3: range(6), u4: range(7), u5: range(12), u6: [...range(10), 14], u7: [1, 2, 3, 4, 6, 7, 8], u8: range(12) };
const problems = [];
const bad = (where, msg) => problems.push(`${where}: ${msg}`);

// Every $...$ and $$...$$ must render in KaTeX; dollar signs must pair up (a literal dollar is written \$).
function checkMath(where, s) {
  if (typeof s !== "string") return;
  const t = s.replace(/\\\$/g, "");
  const parts = t.split(/(\$\$[\s\S]+?\$\$|\$[^$\n]+?\$)/g);
  for (const p of parts) {
    if (/^\$\$[\s\S]+\$\$$/.test(p) || /^\$[^$]+\$$/.test(p)) {
      const m = p.startsWith("$$") ? p.slice(2, -2) : p.slice(1, -1);
      try { katex.renderToString(m, { throwOnError: true, output: "mathml", displayMode: p.startsWith("$$") }); } catch (e) { bad(where, `LaTeX does not render: ${m}  (${e.message.split("\n")[0]})`); }
    } else if (p.includes("$")) bad(where, `unpaired $ in: ${p.slice(0, 80)}`);
    // prose outside math: no dashes as punctuation, no we/our
    const prose = p.startsWith("$") ? "" : p;
    if (/[–—]| - | -- /.test(prose)) bad(where, `dash used as punctuation in: ${prose.slice(0, 80)}`);
    if (/\b(we|our|us)\b/i.test(prose)) bad(where, `"we/our/us" in: ${prose.slice(0, 80)}`);
  }
}
const textOf = (it) => ["lead", "stem", "question", "prompt", "solution"].map((k) => [k, it[k]]).concat((it.choices || []).map((c, i) => ["choice " + i, c]), (it.why || []).map((c, i) => ["why " + i, c]), (it.rows || []).flatMap((r, i) => [["row " + i + " name", r.name], ["row " + i + " earns", r.earns]]));

function checkSet(id, set) {
  if (!set.name || !set.intro || !Array.isArray(set.sources)) bad(id, "a set needs name, intro, sources");
  checkMath(id + " intro", set.intro);
  for (const src of set.sources || []) for (const b of src.blocks || []) {
    if (b.p) checkMath(id, b.p);
    if (b.table) [...b.table.head, ...b.table.rows.flat()].forEach((c) => checkMath(id + " table", String(c)));
    if (b.svg && !/aria-label="[^"]{12,}"/.test(b.svg)) bad(id, "graph without alt text");
  }
}
function checkItem(it, sets, unit) {
  const w = it.id || "(no id)";
  if (!/^u[1-8]$/.test(it.skill)) bad(w, "skill must be u1..u8");
  const [u, n] = String(it.topic).split(".");
  if ("u" + u !== it.skill || !(TOPICS[it.skill] || []).includes(+n)) bad(w, `topic ${it.topic} is not a topic of ${it.skill}`);
  if (unit && it.skill !== unit) bad(w, `expected ${unit}`);
  if (typeof it.calc !== "boolean") bad(w, "calc must be true or false");
  if (it.set && !sets[it.set]) bad(w, "set not found: " + it.set);
  if (it.type === "mcq") {
    if (it.choices?.length !== 4 || it.why?.length !== 4 || it.answer !== 0) bad(w, "mcq needs 4 choices, 4 explanations, answer: 0");
    if (new Set(it.choices).size !== 4) bad(w, "two choices are the same");
    if (!it.question) bad(w, "mcq needs a question");
  } else if (it.type === "frq") {
    if (!it.set) bad(w, "an frq part needs its set (the shared stem)");
    if (!/^\([a-e]\)$/.test(it.part || "")) bad(w, 'part must be "(a)".."(e)"');
    if (!it.prompt || !it.solution || !it.rows?.length || it.rows.some((r) => !r.name || !r.earns)) bad(w, "frq needs prompt, solution, rows with name and earns");
  } else bad(w, "type must be mcq or frq");
  for (const [k, v] of textOf(it)) checkMath(`${w} ${k}`, v);
}
const pts = (it) => (it.type === "frq" ? it.rows.length : 1);

for (const f of files) {
  const src = readFileSync(f, "utf8");
  const m = await import(resolve(f));
  const sets = m.sets || {};
  for (const [id, s] of Object.entries(sets)) checkSet(id, s);
  const unit = (f.match(/u([1-8])\.js$|c([1-8])\.js$|q([1-8])\d\d\.js$/) || []).slice(1).find(Boolean);
  const want = unit ? "u" + unit : null;
  let items = [];
  if (kind === "review") {
    items = m.default;
    const mcq = items.filter((x) => x.type === "mcq");
    const topics = new Set(mcq.map((x) => x.topic));
    for (const k of TOPICS[want] || []) if (mcq.filter((x) => x.topic === `${unit}.${k}`).length < 2) bad(f, `topic ${unit}.${k} has fewer than 2 multiple-choice questions`);
    const frqSets = new Set(items.filter((x) => x.type === "frq").map((x) => x.set));
    // decks/calc/u1x.js and the like add multiple choice to a unit's review; the unit's main file holds its free response.
    const extra = /u[1-8]x\.js$/.test(f);
    if (!extra && frqSets.size < 3) bad(f, "review needs at least 3 free-response questions");
    if (!extra && !mcq.some((x) => x.calc)) bad(f, "review has no calculator multiple choice");
    console.log(`${f}: ${mcq.length} multiple choice on ${topics.size} topics, ${frqSets.size} free-response questions (${items.length - mcq.length} parts)`);
  } else {
    for (const form of m.default.forms) {
      items.push(...form.items);
      const mcq = form.items.filter((x) => x.type === "mcq"), frq = form.items.filter((x) => x.type === "frq");
      const frqSets = [...new Set(frq.map((x) => x.set))];
      const frqPts = frqSets.map((s) => frq.filter((x) => x.set === s).reduce((t, x) => t + pts(x), 0));
      if (!form.id || !form.name || !form.group) bad(form.id, "a form needs id, name, group");
      if (kind === "test") {
        if (mcq.length !== 15 || mcq.slice(0, 10).some((x) => x.calc) || mcq.slice(10).some((x) => !x.calc)) bad(form.id, "a unit test has 15 multiple choice: 10 without a calculator, then 5 with one");
        if (frqSets.length !== 2 || frqPts.some((p) => p !== 9)) bad(form.id, `a unit test has 2 free-response questions of 9 points each (got ${frqPts})`);
        if (frqSets.length === 2 && !(frq.filter((x) => x.set === frqSets[0]).every((x) => x.calc) && frq.filter((x) => x.set === frqSets[1]).every((x) => !x.calc))) bad(form.id, "free response: the calculator question first, then the one without");
        if (form.items.findIndex((x) => x.type === "frq") !== 15) bad(form.id, "multiple choice first, then free response");
      } else {
        if (mcq.length !== 6 || frqSets.length !== 1 || frqPts[0] < 3 || frqPts[0] > 4 || frq.length < 2 || frq.length > 3) bad(form.id, `a topic quiz has 6 multiple choice and one free-response question of 2 or 3 parts worth 3 or 4 points (got ${mcq.length} MC, ${frq.length} parts, ${frqPts} points)`);
        const topic = form.id.replace(/^q(\d)(\d\d)$/, (_, a, b) => `${a}.${+b}`);
        if (form.items.some((x) => x.topic !== topic)) bad(form.id, `every item should be on topic ${topic}`);
        if (form.items.findIndex((x) => x.type === "frq") !== 6) bad(form.id, "multiple choice first, then free response");
      }
      console.log(`${f} ${form.id} "${form.name}": ${mcq.length} MC (${mcq.filter((x) => x.calc).length} calculator), free response ${frqPts.join(" + ")} points, total ${form.items.reduce((t, x) => t + pts(x), 0)}`);
    }
  }
  const ids = new Set();
  for (const it of items) { if (ids.has(it.id)) bad(it.id, "duplicate id"); ids.add(it.id); checkItem(it, sets, want); }
  for (const id of Object.keys(sets)) if (!items.some((x) => x.set === id)) bad(id, "set is never used");
  if (/[–—]/.test(src.replace(/\$[^$]*\$/g, ""))) bad(f, "an en or em dash appears in the file");
}
console.log(problems.length ? `\n${problems.length} problems:\n` + problems.join("\n") : "\nall checks pass");
process.exit(problems.length ? 1 : 0);

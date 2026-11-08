// Measures a deck's multiple-choice questions the way the quality pass does (HANDOFF.md, "Reviewing a course").
//   node tools/measure-mcq.mjs decks/whap.js
// For review and for the forms (quizzes and tests), overall and by skill (unit): how often the key is the longest and
// the shortest choice, the key's length over the wrong choices' average, the difficulty spread, the share of questions
// on a map, chart, picture, or table, and, for each form, the spread of key letters the site will show.
import { readFileSync } from "node:fs";
import { pathToFileURL } from "node:url";
import { resolve } from "node:path";

const file = process.argv[2];
if (!file) { console.error("usage: node tools/measure-mcq.mjs decks/<deck>.js"); process.exit(1); }
const deck = (await import(pathToFileURL(resolve(file)).href)).default;
const sets = deck.sets || {};
const isChoice = (it) => it.type === "mcq" || it.type === "vocab";
const text = (c) => String(c?.text ?? c);
const visual = (it) => !!sets[it.set]?.sources?.some((s) => (s.blocks || []).some((b) => b.svg || b.img || b.table));

// The same key placement app.js uses for a form.
const src = readFileSync(new URL("../app.js", import.meta.url), "utf8");
const keyOrders = new Function("isChoice", src.slice(src.indexOf("function keyOrders"), src.indexOf("function startMock")) + "return keyOrders;")(isChoice);

const pct = (n, d) => (d ? Math.round((100 * n) / d) + "%" : "-");
function row(name, items) {
  const mc = items.filter((i) => i.type === "mcq" && i.choices.length > 1);
  let L = 0, S = 0, r = 0;
  const diff = { easy: 0, moderate: 0, difficult: 0, none: 0 };
  for (const i of mc) {
    const l = i.choices.map((c) => text(c).length);
    const key = l[i.answer], o = l.filter((_, k) => k !== i.answer);
    if (key > Math.max(...o)) L++;
    if (key < Math.min(...o)) S++;
    r += key / (o.reduce((a, b) => a + b, 0) / o.length);
    diff[i.difficulty in diff ? i.difficulty : "none"]++;
  }
  const d = `${pct(diff.easy, mc.length)}/${pct(diff.moderate, mc.length)}/${pct(diff.difficult, mc.length)}${diff.none ? ` (${diff.none} untagged)` : ""}`;
  console.log([name.padEnd(14), String(mc.length).padStart(5), pct(L, mc.length).padStart(8), pct(S, mc.length).padStart(9), (mc.length ? (r / mc.length).toFixed(2) : "-").padStart(6), d.padStart(16), pct(mc.filter(visual).length, mc.length).padStart(7)].join(" "));
}
const head = () => console.log(["".padEnd(14), "  mcq", " longest", " shortest", " ratio", "easy/mod/diff".padStart(16), " visual"].join(" "));

const formItems = (deck.forms || []).flatMap((f) => f.items);
const formIds = new Set(formItems.map((i) => i.id));
const groups = { review: (deck.items || []).filter((i) => !formIds.has(i.id)), forms: formItems };
for (const [g, items] of Object.entries(groups)) {
  if (!items.length) continue;
  console.log(`\n${g}`);
  head();
  row("all", items);
  for (const s of [...new Set(items.map((i) => i.skill))]) row(s, items.filter((i) => i.skill === s));
}

if (deck.forms?.length) {
  let worst = 0;
  for (const f of deck.forms) {
    const its = f.items.filter(isChoice);
    const o = keyOrders(f.id, its);
    const c = {};
    for (const it of its) { const p = o[it.id]?.order.indexOf(it.answer); c[p] = (c[p] || 0) + 1; }
    const v = Object.values(c);
    if (v.length) worst = Math.max(worst, Math.max(...v) - Math.min(...v));
  }
  console.log(`\nkey letters on forms: the most and least used letter differ by at most ${worst} on any form`);
}

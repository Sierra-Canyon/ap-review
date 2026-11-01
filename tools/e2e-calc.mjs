// End-to-end run of AP Calculus AB in the demo site, in Chromium: math and graphs render, a review set, a topic quiz,
// and a unit test scored by section. Serve the repo on :8765 first (python3 -m http.server 8765).
// Usage: node tools/e2e-calc.mjs [outdir]
import { createRequire } from "node:module";
const { chromium } = createRequire(import.meta.url)("playwright");
import deck from "../decks/calc.js";
import { mkdirSync } from "node:fs";

const out = process.argv[2] || "tools/.shots";
mkdirSync(out, { recursive: true });
const BASE = "http://localhost:8765/index.html?demo";
const all = [...deck.items, ...deck.forms.flatMap((f) => f.items)];
const byId = Object.fromEntries(all.map((i) => [i.id, i]));
const errors = [];
const log = (...a) => console.log(...a);
const assert = (c, m) => { if (!c) { errors.push(m); console.log("  FAIL:", m); } };

// The deck
assert(new Set(all.map((x) => x.id)).size === all.length, "every id is unique");
assert(deck.forms.filter((f) => /^c\dt$/.test(f.id)).length === 8 && deck.forms.filter((f) => /^q\d+$/.test(f.id)).length === 81, "8 unit tests and 81 topic quizzes");
assert(deck.forms.filter((f) => /^c\dt$/.test(f.id)).every((f) => f.total === 33), "every unit test is 33 points");
const reviewIds = new Set(deck.items.map((x) => x.id));
assert(deck.forms.every((f) => f.items.every((x) => !reviewIds.has(x.id))), "no quiz or test item is in review");
log("deck:", deck.items.length, "review items,", deck.forms.length, "quizzes and tests,", all.length, "items in all");

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1200, height: 900 } });
const page = await ctx.newPage();
page.on("console", (m) => { if (m.type() === "error" && !/fonts\.g|ERR_TUNNEL/.test(m.text())) errors.push("console: " + m.text()); });
page.on("pageerror", (e) => errors.push("pageerror: " + e.message));
const overflow = () => page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);

await page.goto(BASE);
await page.evaluate(() => localStorage.clear());
await page.goto(BASE);
await page.click("[data-as=teacher]");
await page.waitForSelector("#coursepick");
await page.selectOption("#coursepick", "calc");
await page.waitForSelector("text=Take a quiz or test");
assert(/89\s*quizzes and tests/.test(await page.textContent(".panel.mode:has-text('Quizzes and tests')")), "the home page counts 89 quizzes and tests");

// A review set: math renders as MathML, and no raw LaTeX shows.
await page.click("button[data-focus='']");
let seen = 0;
for (let k = 0; k < 12; k++) {
  await page.waitForSelector("#card");
  const it = byId[await page.getAttribute("#card", "data-item")];
  // MathML carries its LaTeX in a hidden annotation; leave that out.
  const text = await page.$eval("#card", (c) => { const k = c.cloneNode(true); k.querySelectorAll("annotation").forEach((x) => x.remove()); return k.textContent; });
  assert(!/\\(frac|dfrac|lim|int|sqrt)\b/.test(text), "no raw LaTeX in " + it.id);
  if (await page.$("#card math")) seen++;
  if (it.type === "mcq") await page.click(`#card .opt[data-k="${it.answer}"]`);
  else { await page.fill("#card textarea", "work"); await page.click("#card #score"); for (let r = 0; r < it.rows.length; r++) await page.check(`#r-${it.id}-${r}-1`); await page.click("#card #savewr"); }
  if (k === 1) await page.screenshot({ path: `${out}/k01-review.png`, fullPage: true });
  await page.click("#next");
  if (await page.$("text=Set done")) break;
}
assert(seen > 3, "math shows as MathML in review, cards with math: " + seen);

// Topic 1.3 quiz: all right, graph shown.
await page.click("nav a[href='#mock']");
await page.waitForSelector(".fgroup");
assert(/^Unit 1: Limits and Continuity/.test((await page.textContent(".fgroup h3")).trim()), "Unit 1 first");
const q = deck.forms.find((f) => f.id === "q103");
await page.click("[data-form=q103]");
for (let i = 0; i < q.items.length; i++) {
  const it = byId[await page.getAttribute("#card", "data-item")];
  if (it.type === "mcq") await page.click(`#card .opt[data-k="${it.answer}"]`); else await page.fill("#card textarea", "work for " + it.id);
  if (i === 0) await page.screenshot({ path: `${out}/k02-quiz.png`, fullPage: true });
  await page.click(i < q.items.length - 1 ? "#next" : "#finish");
}
for (const it of q.items.filter((x) => x.type === "frq")) { for (let r = 0; r < it.rows.length; r++) await page.check(`#r-${it.id}-${r}-1`); await page.click("#savewr"); await page.click("#nextwr"); }
await page.waitForSelector(".scorebig");
assert((await page.textContent(".scorebig")).trim() === `${q.total} / ${q.total}`, "the 1.3 quiz scores in full");
await page.click("#again");

// Unit 6 test: 15 multiple choice all right; free response 5 of 9 and 9 of 9: 15 + 14 = 29 / 33
const t = deck.forms.find((f) => f.id === "c6t");
await page.click("[data-form=c6t]");
for (let i = 0; i < t.items.length; i++) {
  const it = byId[await page.getAttribute("#card", "data-item")];
  const label = await page.textContent(".row.spread.small.muted span");
  if (i === 0) assert(/Section I, Part A \(no calculator\)/.test(label), "test starts in Part A: " + label);
  if (i === 10) assert(/Section I, Part B \(calculator\)/.test(label), "item 11 is Part B: " + label);
  if (i === 15) { assert(/Section II, Part A \(calculator\)/.test(label), "free response starts in Section II Part A: " + label); await page.screenshot({ path: `${out}/k03-frq.png`, fullPage: true }); }
  if (it.type === "mcq") await page.click(`#card .opt[data-k="${it.answer}"]`); else await page.fill("#card textarea", "work for " + it.id);
  await page.click(i < t.items.length - 1 ? "#next" : "#finish");
}
const frq = t.items.filter((x) => x.type === "frq");
let given = 0;
for (const it of frq) {
  for (let r = 0; r < it.rows.length; r++) { const earn = it.calc ? given < 5 : true; await page.check(`#r-${it.id}-${r}-${earn ? 1 : 0}`); if (earn) given++; }
  await page.click("#savewr"); await page.click("#nextwr");
}
await page.waitForSelector(".scorebig");
const score = (await page.textContent(".scorebig")).trim();
log("unit 6 test:", score, "|", (await page.textContent(".scorebig + .muted")).trim());
assert(score === "29 / 33", "Unit 6 Test should be 29 / 33, got " + score);
assert(await page.$("text=A full-credit solution"), "the results show the solutions");
await page.screenshot({ path: `${out}/k04-done.png`, fullPage: true });
assert((await overflow()) <= 0, "no horizontal scroll");

// Phone width: a graph and math fit.
const phone = await (await browser.newContext({ viewport: { width: 375, height: 800 }, isMobile: true })).newPage();
await phone.goto(BASE + "&course=calc");
await phone.click("[data-as=teacher]").catch(() => {});
await phone.waitForSelector("#coursepick");
await phone.selectOption("#coursepick", "calc");
await phone.click("nav a[href='#mock']").catch(async () => { await phone.goto(BASE + "#mock"); });
await phone.click("[data-form=c8t]");
await phone.waitForSelector("#card");
assert((await phone.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)) <= 0, "no horizontal scroll at phone width");
await phone.screenshot({ path: `${out}/k05-phone.png`, fullPage: true });

await browser.close();
console.log(errors.length ? `\n${errors.length} problems:\n` + errors.join("\n") : "\nall checks pass");
process.exit(errors.length ? 1 : 0);

// End-to-end run of AP Physics 1 in the demo site, in Chromium: math and diagrams render, a review set, a topic quiz,
// a unit test, and a practice exam's sections. Serve the repo on :8765 first (python3 -m http.server 8765).
// Usage: node tools/e2e-phys1.mjs [outdir]
import { createRequire } from "node:module";
const { chromium } = createRequire(import.meta.url)("playwright");
import deck from "../decks/phys1.js";
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
assert(deck.forms.filter((f) => /^t\d$/.test(f.id)).length === 8 && deck.forms.filter((f) => /^q\d\d$/.test(f.id)).length === 43 && deck.forms.filter((f) => /^e\d$/.test(f.id)).length === 2, "8 unit tests, 43 topic quizzes, 2 practice exams");
assert(deck.forms.filter((f) => /^e\d$/.test(f.id)).every((f) => f.total === 82), "every practice exam is 82 points");
const TT = { t1: 28, t2: 30, t3: 30, t4: 26, t5: 28, t6: 30, t7: 26, t8: 28 };
assert(deck.forms.filter((f) => /^t\d$/.test(f.id)).every((f) => f.total === TT[f.id]), "unit test totals: 18 or 20 plus the free-response type's points");
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
await page.selectOption("#coursepick", { label: "AP Physics 1" });
await page.waitForSelector("text=Take a quiz or test");
assert(/53\s*quizzes, tests, and exams/.test(await page.textContent(".panel.mode:has-text('Quizzes and tests')")), "the home page counts 53 quizzes, tests, and exams");

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
  if (k === 1) await page.screenshot({ path: `${out}/p01-review.png`, fullPage: true });
  await page.click("#next");
  if (await page.$("text=Set done")) break;
}
assert(seen > 3, "math shows as MathML in review, cards with math: " + seen);

// Topic 1.3 quiz: all right, graph shown.
await page.click("nav a[href='#mock']");
await page.waitForSelector(".fgroup");
assert(/^Unit 1: Kinematics/.test((await page.textContent(".fgroup h3")).trim()), "Unit 1 first");
const q = deck.forms.find((f) => f.id === "q13");
await page.click("[data-form=q13]");
for (let i = 0; i < q.items.length; i++) {
  const it = byId[await page.getAttribute("#card", "data-item")];
  if (it.type === "mcq") await page.click(`#card .opt[data-k="${it.answer}"]`); else await page.fill("#card textarea", "work for " + it.id);
  if (i === 0) await page.screenshot({ path: `${out}/p02-quiz.png`, fullPage: true });
  await page.click(i < q.items.length - 1 ? "#next" : "#finish");
}
for (const it of q.items.filter((x) => x.type === "frq")) { for (let r = 0; r < it.rows.length; r++) await page.check(`#r-${it.id}-${r}-1`); await page.click("#savewr"); await page.click("#nextwr"); }
await page.waitForSelector(".scorebig");
assert((await page.textContent(".scorebig")).trim() === `${q.total} / ${q.total}`, "the 1.3 quiz scores in full");
await page.click("#again");

// Unit 3 test: 18 multiple choice all right; the 12-point TBR scored 10 of 12: 28 / 30. Then practice exam 1's sections.
const t = deck.forms.find((f) => f.id === "t3");
await page.click("[data-form=t3]");
for (let i = 0; i < t.items.length; i++) {
  const it = byId[await page.getAttribute("#card", "data-item")];
  const label = await page.textContent(".row.spread.small.muted span");
  if (i === 0) assert(/Section I: Multiple choice/.test(label), "test starts in Section I: " + label);
  if (i === 18) { assert(/Section II: Free response/.test(label), "free response is Section II: " + label); await page.screenshot({ path: `${out}/p03-frq.png`, fullPage: true }); }
  assert(!(await page.$("#card .chip:text-is('No calculator')")), "no calculator chips in physics");
  if (it.type === "mcq") await page.click(`#card .opt[data-k="${it.answer}"]`); else await page.fill("#card textarea", "work for " + it.id);
  await page.click(i < t.items.length - 1 ? "#next" : "#finish");
}
let given = 0;
for (const it of t.items.filter((x) => x.type === "frq")) {
  for (let r = 0; r < it.rows.length; r++) { const earn = given < 10; await page.check(`#r-${it.id}-${r}-${earn ? 1 : 0}`); given++; }
  await page.click("#savewr"); await page.click("#nextwr");
}
await page.waitForSelector(".scorebig");
const score = (await page.textContent(".scorebig")).trim();
log("unit 3 test:", score);
assert(score === "28 / 30", "Unit 3 Test should be 28 / 30, got " + score);
assert(await page.$("text=A full-credit solution"), "the results show the solutions");
await page.screenshot({ path: `${out}/p04-done.png`, fullPage: true });
assert((await overflow()) <= 0, "no horizontal scroll");
await page.click("#again");
await page.click("[data-form=e1]");
await page.waitForSelector("#card");
assert(/Section I/.test(await page.textContent(".row.spread.small.muted span")), "the practice exam opens in Section I");
await page.screenshot({ path: `${out}/p05-exam.png`, fullPage: true });

// Phone width: a graph and math fit.
const phone = await (await browser.newContext({ viewport: { width: 375, height: 800 }, isMobile: true })).newPage();
await phone.goto(BASE + "&course=phys1");
await phone.click("[data-as=teacher]").catch(() => {});
await phone.waitForSelector("#coursepick");
await phone.selectOption("#coursepick", { label: "AP Physics 1" });
await phone.click("nav a[href='#mock']").catch(async () => { await phone.goto(BASE + "#mock"); });
await phone.click("[data-form=t5]");
await phone.waitForSelector("#card");
assert((await phone.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)) <= 0, "no horizontal scroll at phone width");
await phone.screenshot({ path: `${out}/p06-phone.png`, fullPage: true });

await browser.close();
console.log(errors.length ? `\n${errors.length} problems:\n` + errors.join("\n") : "\nall checks pass");
process.exit(errors.length ? 1 : 0);

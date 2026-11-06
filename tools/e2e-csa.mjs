// End-to-end run of the AP Computer Science A course in the demo site, in Chromium. Serve the repo on :8765 first (python3 -m http.server 8765).
// Usage: node tools/e2e-csa.mjs [outdir]
import { createRequire } from "node:module";
const { chromium } = createRequire(import.meta.url)("playwright");
import deck from "../decks/csa.js";
import { mkdirSync } from "node:fs";

const out = process.argv[2] || "tools/.shots";
mkdirSync(out, { recursive: true });
const BASE = "http://localhost:8765/index.html?demo";
const all = [...deck.items, ...deck.forms.flatMap((f) => f.items)];
const byId = Object.fromEntries(all.map((i) => [i.id, i]));
const errors = [];
const log = (...a) => console.log(...a);
const assert = (c, m) => { if (!c) { errors.push(m); console.log("  FAIL:", m); } };

// The deck itself
const ids = new Set();
for (const it of all) { assert(!ids.has(it.id), "duplicate id " + it.id); ids.add(it.id); }
for (const it of all) if (it.type === "mcq") assert(it.choices.length === 4 && it.why.length === 4 && it.answer === 0, "mcq shape " + it.id);
for (const it of all) if (it.type === "code") assert(it.rows.length >= 4 && it.solution && it.verify, "free response shape " + it.id);
// Each form has the shape of its real assessment.
const shape = { q5: [12, []], q: [6, []], u1: [20, [7]], u2p: [20, [7]], ps: [20, [7]], mt: [30, [7, 7]], u3: [18, [7]], c4: [15, null], u4: [22, [5, 6]], ap: [42, [7, 7, 5, 6]] };
for (const f of deck.forms) {
  const key = f.id.startsWith("q5") ? "q5" : f.id.startsWith("q") ? "q" : Object.keys(shape).find((k) => k !== "q" && f.id.startsWith(k));
  const [nm, rows] = shape[key];
  const mcq = f.items.filter((x) => x.type === "mcq").length, code = f.items.filter((x) => x.type === "code");
  assert(mcq === nm, `${f.name}: ${nm} multiple choice, got ${mcq}`);
  if (rows) assert(JSON.stringify(code.map((c) => c.rows.length)) === JSON.stringify(rows), `${f.name}: free-response rows ${code.map((c) => c.rows.length)}`);
  else assert(code.length === 1 && code[0].rows.length >= 4 && code[0].rows.length <= 5, `${f.name}: one short free response`);
  assert(f.group && /^\d{4}-\d{2}-\d{2}$/.test(f.date), `${f.name}: group and date`);
  if (f.id.startsWith("q5")) assert(f.items.every((x) => x.topic === "2.10"), `${f.name}: all 2.10`);
}
const reviewIds = new Set(deck.items.map((x) => x.id));
assert(deck.forms.every((f) => f.items.every((x) => !reviewIds.has(x.id))), "no mock item is in review");
log("deck:", deck.items.length, "review items,", deck.forms.length, "mocks");

const browser = await chromium.launch();
async function newPage(opts = {}) {
  const ctx = await browser.newContext({ viewport: { width: 1200, height: 900 }, ...opts });
  const page = await ctx.newPage();
  page.on("console", (m) => { if (m.type() === "error" && !/fonts\.g|ERR_TUNNEL/.test(m.text())) errors.push("console: " + m.text()); });
  page.on("pageerror", (e) => errors.push("pageerror: " + e.message));
  return { ctx, page };
}
const overflow = (page) => page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);

async function answer(page, right) {
  const id = await page.getAttribute("#card", "data-item");
  const it = byId[id];
  if (it.type === "mcq") await page.click(`#card .opt[data-k="${right ? it.answer : 1}"]`);
  else if (it.type === "output") { await page.fill("#card textarea", right ? it.answer : "nope"); await page.click("#card #check"); }
  else if (it.type === "code") {
    await page.fill("#card textarea", right ? it.solution : "int x = 0;");
    await page.click("#card #score");
    for (let r = 0; r < it.rows.length; r++) await page.check(`#r-${id}-${r}-${right ? 1 : 0}`);
    await page.click("#card #savewr");
  }
  return it;
}

// ---------------------------------------------------------------- student
{
  const { page } = await newPage();
  await page.goto(BASE);
  await page.evaluate(() => localStorage.clear());
  await page.goto(BASE);
  await page.click("[data-as=student]");
  await page.waitForSelector("#coursepick");
  await page.selectOption("#coursepick", "csa");
  await page.waitForSelector("text=Unit 2: Selection and Iteration");
  assert(/Quiz 5 is|The Unit 2 Test is/.test(await page.textContent(".hero")), "the countdown names the next assessment");
  await page.screenshot({ path: `${out}/a01-home.png`, fullPage: true });

  // A full review set
  await page.click("button[data-focus='']");
  await page.waitForSelector("#card");
  const types = new Set(); let n = 0;
  while (n < 20) {
    const it = await answer(page, n % 4 !== 0); types.add(it.type); n++;
    if (n === 2) await page.screenshot({ path: `${out}/a02-review.png`, fullPage: true });
    await page.click("#next");
    if (await page.$("text=Set done")) break;
  }
  log("review types:", [...types].join(", "), "answered", n);

  // My misses: the wrong answers from that set are listed, and practicing them right clears them.
  await page.click("nav a[href='#misses']");
  await page.waitForSelector("text=Skills, weakest first");
  const before = await page.$$eval("ul.misses li", (l) => l.length);
  log("misses after the set:", before);
  assert(before > 0, "the misses page lists the missed questions");
  await page.screenshot({ path: `${out}/a02b-misses.png`, fullPage: true });
  await page.click("button[data-drill='misses']");
  await page.waitForSelector("#card");
  for (let k = 0; k < 12; k++) {
    await answer(page, true);
    await page.click("#next");
    if (await page.$("text=Set done")) break;
  }
  await page.click("nav a[href='#misses']");
  await page.waitForSelector("text=Skills, weakest first");
  const after = await page.$$eval("ul.misses li", (l) => l.length);
  log("misses after practicing them:", after);
  assert(after < before, "practicing misses right takes them off the list");

  // Quiz 5 strings only
  await page.click("text=Home");
  await page.click("button[data-focus='string']");
  for (let k = 0; k < 10; k++) {
    await page.waitForSelector("#card");
    const it = await answer(page, true); assert(it.skill === "string", "Quiz 5 focus gave " + it.skill);
    await page.click("#next");
    if (await page.$("text=Set done")) break;
  }

  // Free response only
  await page.click("text=Home");
  await page.click("button[data-focus='code']");
  await page.waitForSelector("#card textarea.code-in");
  await page.screenshot({ path: `${out}/a03-code.png`, fullPage: true });
  const it = await answer(page, true);
  assert(it.type === "code", "free-response focus gave " + it.type);
  assert(await page.$("text=A full-credit solution"), "the solution shows after scoring");
  await page.screenshot({ path: `${out}/a04-code-scored.png`, fullPage: true });

  // Quiz 5 Practice A: all right, 12 / 12, and no Part B
  await page.click("a[href='#mock']");
  await page.waitForSelector(".fgroup");
  const groups = await page.$$eval(".fgroup h3", (h) => h.length);
  log("assessments on the mock page:", groups);
  assert(groups === 16, "16 assessments on the mock page, got " + groups);
  await page.screenshot({ path: `${out}/a04b-mock-list.png`, fullPage: true });
  await page.click("[data-form=q5a]");
  for (let i = 0; i < 12; i++) {
    const x = byId[await page.getAttribute("#card", "data-item")];
    await page.click(`#card .opt[data-k="${x.answer}"]`);
    await page.click(i < 11 ? "#next" : "#finish");
  }
  await page.waitForSelector(".scorebig");
  const q5 = (await page.textContent(".scorebig")).trim();
  log("quiz 5 practice:", q5);
  assert(q5 === "12 / 12", "Quiz 5 Practice A should be 12 / 12, got " + q5);

  // Unit 2 Test Practice 1: Part A all right (20), free response 5 of 7: 25 / 27
  await page.click("#again");
  await page.click("[data-form=u2p1]");
  for (let i = 0; i < 21; i++) {
    const x = byId[await page.getAttribute("#card", "data-item")];
    if (x.type === "mcq") await page.click(`#card .opt[data-k="${x.answer}"]`);
    else { await page.fill("#card textarea", x.solution); await page.screenshot({ path: `${out}/a05-mock-frq.png`, fullPage: true }); }
    await page.click(i < 20 ? "#next" : "#finish");
  }
  const fid = (await page.$$eval("#card input[type=radio]", (els) => els[0].name)).replace(/^r-/, "").replace(/-\d+$/, "");
  for (let r = 0; r < 7; r++) await page.check(`#r-${fid}-${r}-${r < 5 ? 1 : 0}`);
  await page.screenshot({ path: `${out}/a06-mock-score.png`, fullPage: true });
  await page.click("#savewr");
  await page.click("#nextwr");
  await page.waitForSelector(".scorebig");
  const t1 = (await page.textContent(".scorebig")).trim();
  log("test practice:", t1);
  assert(t1 === "25 / 27", "Unit 2 Test Practice 1 should be 25 / 27, got " + t1);
  assert(await page.$("text=Where you lost points"), "the mock shows where points were lost");
  assert(await page.$("button[data-drill^='mock:']"), "the mock offers a set of the missed questions");
  await page.screenshot({ path: `${out}/a07-mock-done.png`, fullPage: true });
  assert((await overflow(page)) <= 0, "no horizontal scroll on desktop");
}

// ---------------------------------------------------------------- phone width
{
  const { page } = await newPage({ viewport: { width: 375, height: 800 }, isMobile: true, hasTouch: true });
  await page.goto(BASE + "&course=csa");
  await page.click("[data-as=student]").catch(() => {});
  await page.waitForSelector(".choices-home");
  await page.click("button[data-focus='code']");
  await page.waitForSelector("#card textarea.code-in");
  assert((await overflow(page)) <= 0, "no horizontal scroll at phone width (free response)");
  await page.screenshot({ path: `${out}/a08-phone.png`, fullPage: true });
}

// ---------------------------------------------------------------- teacher
{
  const { page } = await newPage();
  await page.goto(BASE);
  await page.click("[data-as=teacher]");
  await page.waitForSelector("#coursepick");
  await page.selectOption("#coursepick", "csa");
  await page.click("nav a[href='#teacher']");
  await page.waitForSelector("text=Items, hardest first");
  assert(await page.$("h1:has-text('Period B')"), "the class view says Period B");
  const rows = await page.$$eval("section.panel:has(h2:text('Students')) tbody tr", (r) => r.length);
  log("teacher rows:", rows);
  assert(rows === 8, "seven example students and the demo student, got " + rows);
  await page.screenshot({ path: `${out}/a09-teacher.png` });
}

await browser.close();
console.log(errors.length ? `\n${errors.length} problems:\n` + errors.join("\n") : "\nall checks pass");
process.exit(errors.length ? 1 : 0);

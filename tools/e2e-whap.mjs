// End-to-end run of the AP World History unit assessments in the demo site, in Chromium. Serve the repo on :8765 first (python3 -m http.server 8765).
// Usage: node tools/e2e-whap.mjs [outdir]
import { createRequire } from "node:module";
const { chromium } = createRequire(import.meta.url)("playwright");
import deck from "../decks/whap.js";
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
for (const it of all) if (it.set) assert(deck.sets[it.set], "missing set " + it.set);
for (const it of all) if (it.type === "mcq") assert(it.choices.length === 4 && it.why.length === 4 && it.answer === 0, "mcq shape " + it.id);
for (const it of all) if (it.type === "essay") assert(it.rows.every((r) => r.levels.length === r.max + 1) && it.model, "essay shape " + it.id);
assert(deck.forms.length === 29, "eleven unit assessments and eighteen topic quizzes, got " + deck.forms.length);
for (const f of deck.forms) {
  const n = (t) => f.items.filter((x) => x.type === t).length;
  if (f.id.startsWith("t")) {
    assert(n("mcq") === 8 && n("fr") === 3 && f.total === 11, `${f.name}: 8 multiple choice, 3 short-answer parts, 11 points`);
    assert(f.items.every((x) => x.topic === `${f.id[1]}.${f.id[2]}`), `${f.name}: every item on its topic`);
  } else {
    assert(n("mcq") === 15 && n("fr") === 6 && n("essay") === 1, `${f.name}: 15 multiple choice, 6 short-answer parts, 1 essay`);
    assert(f.total === 27, `${f.name}: 27 points, got ${f.total}`);
  }
  assert(f.items.every((x) => x.skill === "u" + f.id[1]), `${f.name}: every item is in its unit`);
}
const reviewIds = new Set(deck.items.map((x) => x.id));
assert(deck.forms.every((f) => f.items.every((x) => !reviewIds.has(x.id))), "no assessment item is in review");
const reviewSets = new Set(deck.items.map((x) => x.set).filter(Boolean));
assert(deck.forms.every((f) => f.items.every((x) => !x.set || !reviewSets.has(x.set))), "no assessment source is in review");
const formSets = deck.forms.map((f) => new Set(f.items.map((x) => x.set).filter(Boolean)));
assert(formSets.every((a, i) => formSets.every((b, j) => i === j || ![...a].some((x) => b.has(x)))), "no two forms share a source");
log("deck:", deck.items.length, "review items,", deck.forms.length, "quizzes and tests");

const browser = await chromium.launch();
async function newPage(opts = {}) {
  const ctx = await browser.newContext({ viewport: { width: 1200, height: 900 }, ...opts });
  // The checks below are written for the week before the Unit 2 Test (11/4), so the page's clock is set to then.
  await ctx.clock.install({ time: new Date("2026-11-02T08:00:00") });
  const page = await ctx.newPage();
  page.on("console", (m) => { if (m.type() === "error" && !/fonts\.g|ERR_TUNNEL/.test(m.text())) errors.push("console: " + m.text()); });
  page.on("pageerror", (e) => errors.push("pageerror: " + e.message));
  return { ctx, page };
}
const overflow = (page) => page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);

// ---------------------------------------------------------------- a full unit assessment
{
  const { page } = await newPage();
  await page.goto(BASE);
  await page.evaluate(() => localStorage.clear());
  await page.goto(BASE);
  await page.click("[data-as=teacher]");
  await page.waitForSelector("#coursepick");
  await page.selectOption("#coursepick", "whap");
  await page.waitForSelector("text=Take a quiz or test");
  assert(/29\s*quizzes and tests/.test(await page.textContent(".panel.mode:has-text('Quizzes and tests')")), "the home page counts the quizzes and tests");
  assert(/Unit 2 Test/.test(await page.textContent(".hero")), "the countdown names the Unit 2 Test");
  await page.screenshot({ path: `${out}/w01-home.png`, fullPage: true });

  await page.click("nav a[href='#mock']");
  await page.waitForSelector(".fgroup");
  const first = await page.textContent(".fgroup h3");
  log("first assessment listed:", first.trim());
  assert(/^Unit 2: Networks of Exchange/.test(first.trim()), "Unit 2 is listed first");
  assert((await page.$$(".fgroup")).length === 9, "nine units on the page");
  const firstForms = await page.$eval(".fgroup", (g) => [...g.querySelectorAll(".formrow b")].map((x) => x.textContent));
  const earlier = await page.$$eval(".pastforms .fgroup h3", (h) => h.map((x) => x.textContent.trim()));
  assert(earlier.length === 1 && /^Unit 1: The Global Tapestry/.test(earlier[0]), "Unit 1 is under Earlier this year: " + earlier.join(" | "));
  const unit3 = await page.$$eval(".fgroup", (gs) => { const g = gs.find((x) => /^Unit 3/.test(x.querySelector("h3").textContent)); return g ? [...g.querySelectorAll(".formrow b")].map((x) => x.textContent) : []; });
  assert(unit3.length === 6 && /^Topic 3\.1 Quiz/.test(unit3[0]) && /^Unit 3 Assessment A/.test(unit3[4]) && /^Unit 3 Assessment B/.test(unit3[5]), "Unit 3 lists its four topic quizzes, then its two assessments: " + unit3.join(" | "));
  assert(firstForms.length === 9 && /^Topic 2\.1 Quiz/.test(firstForms[0]) && /^Unit 2 Assessment B/.test(firstForms[8]), "Unit 2 lists its seven topic quizzes, then its two assessments: " + firstForms.join(" | "));
  await page.screenshot({ path: `${out}/w02-mock-list.png`, fullPage: true });

  // Unit 2 Assessment A: 12 of 15 multiple choice, 4 of 6 short-answer parts, 4 of 6 on the essay: 20 / 27
  await page.click("[data-form=w2a]");
  let mc = 0;
  for (let i = 0; i < 22; i++) {
    const it = byId[await page.getAttribute("#card", "data-item")];
    const label = await page.textContent(".row.spread.small.muted span");
    if (i === 0) assert(/Section I, Part A/.test(label), "multiple choice is Section I, Part A: " + label);
    if (i === 15) { assert(/Section I, Part B · 16 of 22 · 1 point/.test(label), "short answer is Section I, Part B: " + label); await page.screenshot({ path: `${out}/w03-saq.png`, fullPage: true }); }
    if (i === 21) { assert(/Section II · 22 of 22 · 6 points/.test(label), "the essay is Section II, 6 points: " + label); await page.screenshot({ path: `${out}/w04-leq.png`, fullPage: true }); }
    if (it.type === "mcq") { await page.click(`#card .opt[data-k="${mc < 12 ? it.answer : (it.answer + 1) % 4}"]`); mc++; }
    else await page.fill("#card textarea", "My answer for " + it.id);
    await page.click(i < 21 ? "#next" : "#finish");
  }
  for (let w = 0; w < 6; w++) {
    const id = (await page.$$eval("#card input[type=radio]", (els) => els[0].id)).replace(/^f-/, "").replace(/-\d$/, "");
    assert(byId[id]?.type === "fr", "scoring a short-answer part: " + id);
    await page.check(`#f-${id}-${w < 4 ? 1 : 0}`);
    await page.click("#savewr");
    if (w === 0) await page.screenshot({ path: `${out}/w05-score-saq.png`, fullPage: true });
    await page.click("#nextwr");
  }
  const essay = byId["w2a-leq"];
  assert(await page.$("text=Your essay"), "the essay is shown for scoring");
  essay.rows.forEach(() => {});
  for (let r = 0; r < essay.rows.length; r++) await page.check(`#r-w2a-leq-${r}-1`);
  await page.screenshot({ path: `${out}/w06-score-leq.png`, fullPage: true });
  await page.click("#savewr");
  await page.click("#nextwr");
  await page.waitForSelector(".scorebig");
  const score = (await page.textContent(".scorebig")).trim();
  log("unit assessment:", score);
  assert(score === "20 / 27", "Unit 2 Assessment A should be 20 / 27, got " + score);
  const parts = await page.textContent(".scorebig + .muted");
  log("by section:", parts.trim());
  assert(/Section I, Part A 12 \/ 15 · Section I, Part B 4 \/ 6 · Section II 4 \/ 6/.test(parts), "points by section");
  assert(await page.$("text=Where you lost points"), "the results show where points were lost");
  assert(await page.$("text=A strong response"), "the essay's model shows on the results page");
  assert((await page.$$("h2:text('Section I, Part B'), h2:text('Section II')")).length === 2, "results are headed by section");
  await page.screenshot({ path: `${out}/w07-done.png`, fullPage: true });
  assert((await overflow(page)) <= 0, "no horizontal scroll on desktop");
  await page.click("#again");
  assert(/Taken once · best 20 \/ 27/.test(await page.textContent(".forms")), "the list shows Unit 2 Assessment A taken");

  // Topic 2.3 Quiz: 6 of 8 multiple choice and 2 of 3 short-answer parts: 8 / 11
  await page.click("[data-form=t23]");
  let k = 0;
  for (let i = 0; i < 11; i++) {
    const it = byId[await page.getAttribute("#card", "data-item")];
    if (it.type === "mcq") { await page.click(`#card .opt[data-k="${k < 6 ? it.answer : (it.answer + 1) % 4}"]`); k++; }
    else await page.fill("#card textarea", "My answer for " + it.id);
    await page.click(i < 10 ? "#next" : "#finish");
  }
  for (let w = 0; w < 3; w++) {
    const id = (await page.$$eval("#card input[type=radio]", (els) => els[0].id)).replace(/^f-/, "").replace(/-\d$/, "");
    await page.check(`#f-${id}-${w < 2 ? 1 : 0}`);
    await page.click("#savewr");
    await page.click("#nextwr");
  }
  await page.waitForSelector(".scorebig");
  const tq = (await page.textContent(".scorebig")).trim();
  log("topic quiz:", tq);
  assert(tq === "8 / 11", "Topic 2.3 Quiz should be 8 / 11, got " + tq);
  await page.screenshot({ path: `${out}/w07b-topic-done.png`, fullPage: true });
  await page.click("#again");

  // Unit 2 only in review
  await page.click("text=Home");
  await page.click("button[data-focus='u2']");
  for (let k = 0; k < 6; k++) {
    await page.waitForSelector("#card");
    const it = byId[await page.getAttribute("#card", "data-item")];
    assert(it.skill === "u2", "Unit 2 focus gave " + it.skill);
    if (it.type !== "mcq") break;
    await page.click(`#card .opt[data-k="${it.answer}"]`);
    await page.click("#next");
    if (await page.$("text=Set done")) break;
  }

  // Maps and charts in review: every card has its map, chart, or picture, with alt text
  await page.click("text=Home");
  await page.click("button[data-focus='maps']");
  for (let k = 0; k < 10; k++) {
    await page.waitForSelector("#card");
    const it = byId[await page.getAttribute("#card", "data-item")];
    assert(/^u[1-8]-v\d/.test(it.id), "Maps and charts focus gave " + it.id);
    const fig = await page.$eval("#card", (c) => { const g = c.querySelector("svg.map, svg.chart, figure.imgwrap img"); return g ? (g.getAttribute("aria-label") || g.getAttribute("alt") || "").length : -1; });
    assert(fig > 20, `${it.id}: the card shows its map, chart, or picture with alt text`);
    if (k === 0) await page.screenshot({ path: `${out}/w07c-map.png`, fullPage: true });
    await page.click(`#card .opt[data-k="${it.answer}"]`);
    await page.click("#next");
    if (await page.$("text=Set done")) break;
  }

  // The class view has a column for Unit 2
  await page.click("nav a[href='#teacher']");
  await page.waitForSelector("text=Items, hardest first");
  const heads = await page.$$eval("section.panel:has(h2:text('Students')) thead th", (t) => t.map((x) => x.textContent.trim()));
  log("class columns:", heads.join(", "));
  assert(heads.includes("U2 test") && heads.includes("U2 quiz"), "the Class tab has Unit 2 test and quiz columns");
  await page.screenshot({ path: `${out}/w08-teacher.png`, fullPage: true });
}

// ---------------------------------------------------------------- phone width
{
  const { page } = await newPage({ viewport: { width: 375, height: 800 }, isMobile: true, hasTouch: true });
  await page.goto(BASE + "&course=whap");
  await page.click("[data-as=teacher]").catch(() => {});
  await page.waitForSelector("#coursepick");
  await page.selectOption("#coursepick", "whap");
  await page.click("nav a[href='#mock']");
  await page.click("[data-form=w2b]");
  await page.waitForSelector("#card details.sources");
  assert((await overflow(page)) <= 0, "no horizontal scroll at phone width (a source)");
  await page.screenshot({ path: `${out}/w09-phone.png`, fullPage: true });
}

await browser.close();
console.log(errors.length ? `\n${errors.length} problems:\n` + errors.join("\n") : "\nall checks pass");
process.exit(errors.length ? 1 : 0);

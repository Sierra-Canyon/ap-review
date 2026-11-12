// End-to-end run of AP U.S. Government and Politics in the demo site, in Chromium. Serve the repo on :8765 first (python3 -m http.server 8765).
// Usage: node tools/e2e-gov.mjs [outdir]
import { createRequire } from "node:module";
const { chromium } = createRequire(import.meta.url)("playwright");
import deck from "../decks/gov.js";
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
for (const it of all) if (it.type === "mcq") assert(it.choices.length === 4 && it.why.length === 4 && it.answer === 0 && it.difficulty, "mcq shape " + it.id);
for (const it of all) if (it.type === "essay") assert(["scotus", "argument"].includes(it.kind) && it.rows.every((r) => r.levels.length === r.max + 1) && it.model, "essay shape " + it.id);
const quizzes = deck.forms.filter((f) => f.id.startsWith("t")), tests = deck.forms.filter((f) => f.id.startsWith("g"));
assert(quizzes.length === 60 && tests.length === 5, `60 topic quizzes and 5 unit tests, got ${quizzes.length} and ${tests.length}`);
for (const f of deck.forms) {
  const n = (t) => f.items.filter((x) => x.type === t).length;
  if (f.id.startsWith("t")) {
    assert(n("mcq") === 8 && n("fr") === 3 && f.total === 11, `${f.name}: 8 multiple choice, 3 concept application parts, 11 points`);
    assert(f.items.every((x) => x.topic === `${f.id[1]}.${f.id.slice(2)}`), `${f.name}: every item on its topic`);
  } else {
    assert(n("mcq") === 20 && [3, 4].includes(n("fr")) && n("essay") === 1, `${f.name}: 20 multiple choice, one free-response question, one essay`);
    assert(f.total === 20 + n("fr") + (f.items.find((x) => x.type === "essay").kind === "scotus" ? 4 : 6), `${f.name}: total ${f.total}`);
  }
  assert(f.items.every((x) => x.skill === "u" + f.id[1]), `${f.name}: every item is in its unit`);
}
const reviewIds = new Set(deck.items.map((x) => x.id));
assert(deck.forms.every((f) => f.items.every((x) => !reviewIds.has(x.id))), "no quiz or test item is in review");
const reviewSets = new Set(deck.items.map((x) => x.set).filter(Boolean));
assert(deck.forms.every((f) => f.items.every((x) => !x.set || !reviewSets.has(x.set))), "no quiz or test source is in review");
const formSets = deck.forms.map((f) => new Set(f.items.map((x) => x.set).filter(Boolean)));
assert(formSets.every((a, i) => formSets.every((b, j) => i === j || ![...a].some((x) => b.has(x)))), "no two forms share a source");
log("deck:", deck.items.length, "review items,", deck.forms.length, "quizzes and tests");

const browser = await chromium.launch();
async function newPage(opts = {}) {
  const ctx = await browser.newContext({ viewport: { width: 1200, height: 900 }, ...opts });
  // No AP Gov dates yet; the clock is fixed so the run does not depend on the day it is run.
  await ctx.clock.install({ time: new Date("2026-11-16T08:00:00") });
  const page = await ctx.newPage();
  page.on("console", (m) => { if (m.type() === "error" && !/fonts\.g|ERR_TUNNEL/.test(m.text())) errors.push("console: " + m.text()); });
  page.on("pageerror", (e) => errors.push("pageerror: " + e.message));
  return { ctx, page };
}
const overflow = (page) => page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
const listOf = (page, unit) => page.$$eval(".fgroup", (gs, u) => { const g = gs.find((x) => x.querySelector("h3").textContent.startsWith(`Unit ${u}:`)); return g ? [...g.querySelectorAll(".formrow b")].map((x) => x.textContent) : []; }, unit);

{
  const { page } = await newPage();
  await page.goto(BASE);
  await page.evaluate(() => localStorage.clear());
  await page.goto(BASE);
  await page.click("[data-as=teacher]");
  await page.waitForSelector("#coursepick");
  await page.selectOption("#coursepick", "gov-b");
  await page.waitForSelector("text=Take a quiz or test");
  assert(/65\s*quizzes and tests/.test(await page.textContent(".panel.mode:has-text('Quizzes and tests')")), "the home page counts 65 quizzes and tests");
  assert(await page.$("#sectionpick option[value=gov-h]"), "Period H is offered as the other section");
  await page.screenshot({ path: `${out}/g01-home.png`, fullPage: true });

  await page.click("nav a[href='#mock']");
  await page.waitForSelector(".fgroup");
  assert((await page.$$(".fgroup")).length === 5, "five units on the page");
  const sizes = { 1: 9, 2: 15, 3: 13, 4: 10, 5: 13 };
  for (const [u, n] of Object.entries(sizes)) {
    const list = await listOf(page, u);
    assert(list.length === n + 1 && /^Topic \d+\.1 Quiz/.test(list[0]) && new RegExp(`^Topic ${u}\\.${n} Quiz`).test(list[n - 1]) && new RegExp(`^Unit ${u} Test`).test(list[n]), `Unit ${u} lists its ${n} topic quizzes in order, then its test: ` + list.join(" | "));
  }
  await page.screenshot({ path: `${out}/g02-mock-list.png`, fullPage: true });

  // Unit 1 Test: 15 of 20 multiple choice, 2 of 3 concept application parts, 1 point on each argument essay row (4 of 6): 21 / 29
  const g1 = deck.forms.find((f) => f.id === "g1a");
  const nFr = g1.items.filter((x) => x.type === "fr").length, essay = g1.items.find((x) => x.type === "essay");
  await page.click("[data-form=g1a]");
  let mc = 0;
  const N = g1.items.length;
  for (let i = 0; i < N; i++) {
    const it = byId[await page.getAttribute("#card", "data-item")];
    const label = await page.textContent(".row.spread.small.muted span");
    if (i === 0) assert(/Section I/.test(label), "multiple choice is Section I: " + label);
    if (it.type === "fr" && /Concept/.test(it.part) && it.sub === "A") { assert(/Section II/.test(label), "free response is Section II: " + label); assert(/Concept application/.test(await page.textContent("#card")), "the part is labeled Concept application"); await page.screenshot({ path: `${out}/g03-fr.png`, fullPage: true }); }
    if (it.type === "essay") { assert(/Argument essay/.test(await page.textContent("#card")), "the essay is labeled Argument essay"); await page.screenshot({ path: `${out}/g04-essay.png`, fullPage: true }); }
    if (it.type === "mcq") { await page.click(`#card .opt[data-k="${mc < 15 ? it.answer : (it.answer + 1) % 4}"]`); mc++; }
    else await page.fill("#card textarea", "My answer for " + it.id);
    await page.click(i < N - 1 ? "#next" : "#finish");
  }
  for (let w = 0; w < nFr; w++) {
    const id = (await page.$$eval("#card input[type=radio]", (els) => els[0].id)).replace(/^f-/, "").replace(/-\d$/, "");
    assert(byId[id]?.type === "fr", "scoring a free-response part: " + id);
    await page.check(`#f-${id}-${w < 2 ? 1 : 0}`);
    await page.click("#savewr");
    await page.click("#nextwr");
  }
  assert(await page.$("text=Your essay"), "the essay is shown for scoring");
  for (let r = 0; r < essay.rows.length; r++) await page.check(`#r-${essay.id}-${r}-1`);
  await page.screenshot({ path: `${out}/g05-score-essay.png`, fullPage: true });
  await page.click("#savewr");
  await page.click("#nextwr");
  await page.waitForSelector(".scorebig");
  const want = 15 + 2 + essay.rows.length;
  const score = (await page.textContent(".scorebig")).trim();
  log("unit test:", score);
  assert(score === `${want} / ${g1.total}`, `Unit 1 Test should be ${want} / ${g1.total}, got ` + score);
  assert(await page.$("text=A strong response"), "the essay's model shows on the results page");
  await page.screenshot({ path: `${out}/g06-done.png`, fullPage: true });
  assert((await overflow(page)) <= 0, "no horizontal scroll on desktop");
  await page.click("#again");

  // Topic 2.3 Quiz: 6 of 8 multiple choice and 2 of 3 concept application parts: 8 / 11
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
  await page.click("#again");

  // Unit 3 only in review
  await page.click("text=Home");
  await page.click("button[data-focus='u3']");
  for (let n = 0; n < 6; n++) {
    await page.waitForSelector("#card");
    const it = byId[await page.getAttribute("#card", "data-item")];
    assert(it.skill === "u3", "Unit 3 focus gave " + it.skill);
    if (it.type !== "mcq") break;
    await page.click(`#card .opt[data-k="${it.answer}"]`);
    await page.click("#next");
    if (await page.$("text=Set done")) break;
  }

  // Charts and data in review: every card has its chart or table, a chart with alt text
  await page.click("text=Home");
  await page.click("button[data-focus='charts']");
  let sawLines = false;
  for (let n = 0; n < 12; n++) {
    await page.waitForSelector("#card");
    const it = byId[await page.getAttribute("#card", "data-item")];
    const blocks = (deck.sets[it.set]?.sources || []).flatMap((src) => src.blocks || []);
    assert(blocks.some((b) => b.svg || b.table), "Charts and data focus gave " + it.id);
    const fig = await page.$eval("#card", (c) => { const g = c.querySelector("svg.chart"); if (g) return (g.getAttribute("aria-label") || "").length; return c.querySelector("table") ? 99 : -1; });
    assert(fig > 20, `${it.id}: the card shows its chart or table (a chart with alt text)`);
    if (!sawLines && await page.$("#card svg.chart polyline, #card svg.chart path.line")) { sawLines = true; await page.screenshot({ path: `${out}/g07-chart.png`, fullPage: true }); }
    if (it.type !== "mcq") break;
    await page.click(`#card .opt[data-k="${it.answer}"]`);
    await page.click("#next");
    if (await page.$("text=Set done")) break;
  }

  // The class view has test and quiz columns for each unit
  await page.click("nav a[href='#teacher']");
  await page.waitForSelector("text=Items, hardest first");
  const heads = await page.$$eval("section.panel:has(h2:text('Students')) thead th", (t) => t.map((x) => x.textContent.trim()));
  log("class columns:", heads.join(", "));
  // Columns appear only for assessments someone in the class has taken; the review columns are always there.
  assert(["U1", "U2", "U3", "U4", "U5"].every((u) => heads.includes(u)) && heads.some((h) => /^U\d (test|quiz)$/.test(h)), "the Class tab has a column per unit and columns for the tests and quizzes taken");
  await page.screenshot({ path: `${out}/g08-teacher.png`, fullPage: true });
}

// ---------------------------------------------------------------- phone width
{
  const { page } = await newPage({ viewport: { width: 375, height: 800 }, isMobile: true, hasTouch: true });
  await page.goto(BASE + "&course=gov-h");
  await page.click("[data-as=teacher]").catch(() => {});
  await page.waitForSelector("#coursepick");
  await page.selectOption("#coursepick", "gov-h");
  await page.click("nav a[href='#mock']");
  await page.click("[data-form=g4a]");
  await page.waitForSelector("#card");
  assert((await overflow(page)) <= 0, "no horizontal scroll at phone width");
  await page.screenshot({ path: `${out}/g09-phone.png`, fullPage: true });
}

await browser.close();
console.log(errors.length ? `\n${errors.length} problems:\n` + errors.join("\n") : "\nall checks pass");
process.exit(errors.length ? 1 : 0);

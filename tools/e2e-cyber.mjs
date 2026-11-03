// End-to-end run of the AP Cybersecurity course in the demo site, in Chromium. Serve the repo on :8765 first (python3 -m http.server 8765).
// Usage: node tools/e2e-cyber.mjs [outdir]
import { createRequire } from "node:module";
const { chromium } = createRequire(import.meta.url)("playwright");
import deck from "../decks/cyber-u2.js";
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
for (const it of all) if (it.type === "fr") assert(deck.sets[it.set], "missing set " + it.set);
for (const f of deck.forms) {
  assert(f.items.filter((x) => x.type === "mcq").length === 25, `${f.name}: 25 multiple choice`);
  assert(f.items.filter((x) => x.type === "fr").length === 10, `${f.name}: 10 free-response subparts`);
  const slots = deck.mock.partA.slots.map((s) => s[0]).join(",");
  assert(f.items.filter((x) => x.type === "mcq").map((x) => x.skill).join(",") === slots, `${f.name}: Part A in the test's order`);
}
const reviewIds = new Set(deck.items.map((x) => x.id));
assert(deck.forms.every((f) => f.items.every((x) => !reviewIds.has(x.id))), "no mock item is in review");
log("deck:", deck.items.length, "review items,", deck.forms.length, "mock tests");

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
  if (it.type === "mcq" || it.type === "vocab") {
    await page.click(`#card .opt[data-k="${right ? it.answer : (it.answer + 1) % 4}"]`);
  } else if (it.type === "fr") {
    await page.fill("#card textarea", "Row 4 shows the evidence.");
    await page.click("#card #score");
    await page.check(`#f-${id}-${right ? 1 : 0}`);
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
  await page.waitForSelector(".choices-home");
  await page.selectOption("#coursepick", "cyber");
  await page.waitForSelector("text=Unit 3: Securing Networks");
  assert(/Quiz 2[3-9]|Quiz 3\d|midterm|Unit 3 Test/.test(await page.textContent(".countdown")), "the countdown names the next quiz");
  assert(/Quiz \d+ words|Newest words/.test(await page.textContent("body")), "Home has the next quiz's words button");
  assert(!(await page.$("nav a[href='#learn']")), "no Learn tab in AP Cyber");
  await page.screenshot({ path: `${out}/c01-home.png`, fullPage: true });

  // A full review set
  await page.click("button[data-focus='']");
  const types = new Set(); let n = 0;
  await page.waitForSelector("#card");
  while (n < 20) {
    const it = await answer(page, n % 3 !== 0); types.add(it.type); n++;
    if (it.type === "fr" && !types.has("fr-shot")) { types.add("fr-shot"); await page.screenshot({ path: `${out}/c02-fr-scored.png`, fullPage: true }); }
    await page.click("#next");
    if (await page.$("text=Set done")) break;
  }
  types.delete("fr-shot"); log("review types:", [...types].join(", "), "answered", n);
  await page.waitForSelector("text=Set done");

  // Free response only
  await page.click("text=Home");
  await page.click("button[data-focus='fr']");
  let fr = 0;
  while (fr < 12) {
    await page.waitForSelector("#card");
    const it = await answer(page, true); assert(it.type === "fr", "focus fr gave " + it.type); fr++;
    await page.click("#next");
    if (await page.$("text=Set done")) break;
  }
  assert(fr === 5, "a free-response set is 5 subparts, got " + fr);

  // Mock Test 2: Part A all right, Part B 7 of 10, so 50 + 17.5 = 67.5
  await page.click("text=Home");
  await page.click("a.btn[href='#mock']");
  await page.screenshot({ path: `${out}/c03-mock-list.png`, fullPage: true });
  await page.click("[data-form=m2]");
  for (let i = 0; i < 35; i++) {
    const it = byId[await page.getAttribute("#card", "data-item")];
    if (it.type === "mcq") await page.click(`#card .opt[data-k="${it.answer}"]`);
    else await page.fill("#card textarea", "My answer for " + it.id);
    if (i === 25) await page.screenshot({ path: `${out}/c04-mock-partB.png`, fullPage: true });
    await page.click(i < 34 ? "#next" : "#finish");
  }
  for (let w = 0; w < 10; w++) {
    const id = (await page.$$eval("#card input[type=radio]", (els) => els[0].id)).replace(/^f-/, "").replace(/-\d$/, "");
    await page.check(`#f-${id}-${w < 7 ? 1 : 0}`);
    await page.click("#savewr");
    if (w === 0) await page.screenshot({ path: `${out}/c05-mock-score.png`, fullPage: true });
    await page.click("#nextwr");
  }
  await page.waitForSelector(".scorebig");
  const score = (await page.textContent(".scorebig")).trim();
  log("mock:", score);
  assert(score === "67.5 / 75", "mock should be 67.5 / 75, got " + score);
  await page.screenshot({ path: `${out}/c06-mock-done.png`, fullPage: true });
  await page.click("#again");
  assert(/Taken once · best 67\.5 \/ 75/.test(await page.textContent(".forms")), "the mock list shows Mock Test 2 taken");
  assert((await overflow(page)) <= 0, "no horizontal scroll on desktop");
}

// ---------------------------------------------------------------- phone width
{
  const { page } = await newPage({ viewport: { width: 375, height: 800 }, isMobile: true, hasTouch: true });
  await page.goto(BASE + "&course=cyber");
  await page.click("[data-as=student]").catch(() => {});
  await page.waitForSelector(".choices-home");
  await page.click("button[data-focus='fr']");
  await page.waitForSelector("#card details.sources");
  await page.screenshot({ path: `${out}/c07-phone-fr.png`, fullPage: true });
  assert((await overflow(page)) <= 0, "no horizontal scroll at phone width (free response)");
  await page.click("#card #score");
  assert((await overflow(page)) <= 0, "no horizontal scroll at phone width (scoring guidelines)");
}

// ---------------------------------------------------------------- teacher
{
  const { page } = await newPage();
  await page.goto(BASE);
  await page.click("text=Sign out").catch(() => {});
  await page.click("[data-as=teacher]");
  await page.waitForSelector("#coursepick");
  await page.selectOption("#coursepick", "cyber");
  await page.click("nav a[href='#teacher']");
  await page.waitForSelector("text=Items, hardest first");
  assert(await page.$("h1:has-text('Period F')"), "the class view says Period F");
  const rows = await page.$$eval("section.panel:has(h2:text('Students')) tbody tr", (r) => r.length);
  log("teacher rows:", rows);
  assert(rows === 7, "six example students and the demo student, got " + rows);
  assert(!(await page.$("h2:text('Book')")), "no Book section in AP Cyber");
  await page.screenshot({ path: `${out}/c08-teacher.png`, fullPage: true });
  // Add a CSP example student to the Cyber roster: they stay in CSP too.
  await page.fill("#rosterin", "Example AP CSP Student A, example.csp1@scsstudent.org");
  await page.click("#addroster");
  await page.waitForSelector(".toast:has-text('Added')");
  await page.waitForSelector("text=Items, hardest first");
  const rec = await page.evaluate(() => JSON.parse(localStorage.getItem("ap-review-demo-v4")).students["example.csp1@scsstudent.org"]);
  assert(JSON.stringify(rec.courses) === '["csp","cyber"]', "courses merge: " + JSON.stringify(rec.courses));
  await page.selectOption("#coursepick", "csp");
  await page.waitForSelector("h1:has-text('Period D')");
}

await browser.close();
console.log(errors.length ? `\n${errors.length} problems:\n` + errors.join("\n") : "\nall checks pass");
process.exit(errors.length ? 1 : 0);

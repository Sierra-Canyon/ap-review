// End-to-end run of teacher-made assessments in the demo site, in Chromium: a teacher puts a quiz on the calendar for two
// sections with two topics; students in those sections get the countdown and a review set of only those topics.
// Serve the repo on :8765 first (python3 -m http.server 8765). Usage: node tools/e2e-assess.mjs [outdir]
import { createRequire } from "node:module";
const { chromium } = createRequire(import.meta.url)("playwright");
import deck from "../decks/whap.js";
import { mkdirSync } from "node:fs";

const out = process.argv[2] || "tools/.shots";
mkdirSync(out, { recursive: true });
const BASE = "http://localhost:8765/index.html?demo";
const byId = Object.fromEntries([...deck.items, ...deck.forms.flatMap((f) => f.items)].map((i) => [i.id, i]));
const errors = [];
const log = (...a) => console.log(...a);
const assert = (c, m) => { if (!c) { errors.push(m); console.log("  FAIL:", m); } };
const iso = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
const tomorrow = new Date(); tomorrow.setDate(tomorrow.getDate() + 1);

const browser = await chromium.launch();
const page = await (await browser.newContext({ viewport: { width: 1200, height: 900 } })).newPage();
page.on("console", (m) => { if (m.type() === "error" && !/fonts\.g|ERR_TUNNEL/.test(m.text())) errors.push("console: " + m.text()); });
page.on("pageerror", (e) => errors.push("pageerror: " + e.message));
const store = () => page.evaluate(() => JSON.parse(localStorage.getItem("ap-review-demo-v4")));

await page.goto(BASE); await page.evaluate(() => localStorage.clear()); await page.goto(BASE);
await page.click("[data-as=teacher]");
await page.waitForSelector("#coursepick");
await page.selectOption("#coursepick", { label: "AP World" });
await page.click("nav a[href='#teacher']");
await page.waitForSelector("#assesspanel h2");

// Add: "Unit 2 Quiz", tomorrow, Periods B and C, topics 2.1 and 2.3.
await page.click("#assessadd > summary");
await page.fill("#assessform input[name=name]", "Unit 2 Quiz");
await page.fill("#assessform input[name=date]", iso(tomorrow));
await page.check("#assessform input[name=course][value='whap-c']");
await page.click("#assessform details.aunit:has(input[value='u2']) > summary");
await page.check("#assessform input[name=topic][value='2.1']");
await page.check("#assessform input[name=topic][value='2.3']");
await page.screenshot({ path: `${out}/s01-assess-form.png`, fullPage: false });
await page.click("#assessform button[type=submit]");
await page.waitForSelector(".toast:has-text('is on the calendar')");
let st = await store();
const a = Object.values(st.assessments)[0];
assert(a && a.name === "Unit 2 Quiz" && JSON.stringify(a.courses) === '["whap","whap-c"]' && JSON.stringify(a.topics) === '["2.1","2.3"]', "the assessment is saved with its sections and topics: " + JSON.stringify(a));
assert(/Unit 2 Quiz/.test(await page.textContent("#assesspanel table")), "the Class tab lists it");
await page.screenshot({ path: `${out}/s02-assess-list.png`, fullPage: false });

// Period B home: the countdown names it, and Review for it gives only 2.1 and 2.3.
await page.click("nav a[href='#home']");
await page.waitForSelector(".assess");
assert(/Unit 2 Quiz is tomorrow/.test(await page.textContent(".countdown")), "the countdown names the quiz");
await page.screenshot({ path: `${out}/s03-home.png`, fullPage: false });
const quizBtns = await page.$$eval(".assess [data-startform]", (b) => b.map((x) => x.dataset.startform));
assert(quizBtns.join() === "t21,t23", "the topic quizzes for 2.1 and 2.3 are offered: " + quizBtns.join());
await page.click(".assess [data-focus]");
const topics = new Set();
for (let k = 0; k < 12; k++) {
  await page.waitForSelector("#card");
  const it = byId[await page.getAttribute("#card", "data-item")];
  topics.add(it.topic);
  if (it.type === "mcq") await page.click(`#card .opt[data-k="${it.answer}"]`);
  else { await page.fill("#card textarea", "answer"); await page.click("#card #score"); await page.check(`#f-${it.id}-1`); await page.click("#card #savewr"); }
  await page.click("#next");
  if (await page.$("text=Set done")) break;
}
log("topics in the set:", [...topics].join(", "));
assert([...topics].every((t) => t === "2.1" || t === "2.3") && topics.size, "the review set is only 2.1 and 2.3");

// The 2.3 quiz starts from the home page.
await page.click("nav a[href='#home']");
await page.click(".assess [data-startform='t23']");
await page.waitForSelector("#card");
assert(/Topic 2.3 Quiz/.test(await page.textContent(".row.spread.small.muted span")), "the 2.3 quiz starts");
// Period D does not have it.
await page.click("nav a[href='#home']");
await page.selectOption("#sectionpick", "whap-d");
await page.waitForSelector(".choices-home");
assert(!(await page.$(".assess")), "Period D does not see the quiz");

// Edit it to all of Unit 1, then delete it.
await page.selectOption("#sectionpick", "whap");
await page.click("nav a[href='#teacher']");
await page.waitForSelector("[data-aedit]");
await page.click("[data-aedit]");
await page.uncheck("#assessform input[name=unit][value='u2']").catch(() => {});
await page.click("#assessform details.aunit:has(input[value='u2']) > summary");
await page.uncheck("#assessform input[name=topic][value='2.1']"); await page.uncheck("#assessform input[name=topic][value='2.3']");
await page.check("#assessform input[name=unit][value='u1']");
await page.click("#assessform button[type=submit]");
await page.waitForSelector(".toast:has-text('is on the calendar')");
st = await store();
assert(JSON.stringify(Object.values(st.assessments)[0].topics) === '["u1"]', "a whole unit is saved as the unit");
await page.click("[data-adel]"); await page.click("[data-adel]");
await page.waitForSelector(".toast:has-text('Deleted')");
st = await store();
assert(!Object.keys(st.assessments).length, "deleted");

await browser.close();
console.log(errors.length ? `\n${errors.length} problems:\n` + errors.join("\n") : "\nall checks pass");
process.exit(errors.length ? 1 : 0);

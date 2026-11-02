// End-to-end run of the teacher's view of one student, in Chromium: last-name order on the Class tab, a student's page
// with every quiz and test attempt and its answers, review answers by skill, and adding a GitHub account to an email
// student. Serve the repo on :8765 first (python3 -m http.server 8765). Usage: node tools/e2e-student.mjs [outdir]
import { createRequire } from "node:module";
const { chromium } = createRequire(import.meta.url)("playwright");
import csa from "../decks/csa.js";
import { mkdirSync } from "node:fs";

const out = process.argv[2] || "tools/.shots";
mkdirSync(out, { recursive: true });
const BASE = "http://localhost:8765/index.html?demo";
const byId = Object.fromEntries([...csa.items, ...csa.forms.flatMap((f) => f.items)].map((i) => [i.id, i]));
const errors = [];
const log = (...a) => console.log(...a);
const assert = (c, m) => { if (!c) { errors.push(m); console.log("  FAIL:", m); } };

const browser = await chromium.launch();
const page = await (await browser.newContext({ viewport: { width: 1200, height: 900 } })).newPage();
page.on("console", (m) => { if (m.type() === "error" && !/fonts\.g|ERR_TUNNEL/.test(m.text())) errors.push("console: " + m.text()); });
page.on("pageerror", (e) => errors.push("pageerror: " + e.message));
// GitHub's user lookup, answered locally.
await page.route("https://api.github.com/users/**", (r) => r.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ id: 5550001, login: "emme-gh" }) }));
const store = () => page.evaluate(() => JSON.parse(localStorage.getItem("ap-review-demo-v4")));

await page.goto(BASE); await page.evaluate(() => localStorage.clear()); await page.goto(BASE);

// The demo student takes Quiz 5 Practice A in AP CSA: question 1 wrong, the rest right; and answers two review questions wrong.
await page.click("[data-as=student]");
await page.waitForSelector("#coursepick");
await page.selectOption("#coursepick", { label: "AP CSA" });
await page.click("nav a[href='#mock']");
await page.click("[data-form=q5a]");
const q = csa.forms.find((f) => f.id === "q5a");
let wrongId = null;
for (let i = 0; i < q.items.length; i++) {
  const it = byId[await page.getAttribute("#card", "data-item")];
  const k = i === 0 ? (it.answer + 1) % 4 : it.answer;
  if (i === 0) wrongId = it.id;
  await page.click(`#card .opt[data-k="${k}"]`);
  await page.click(i < q.items.length - 1 ? "#next" : "#finish");
}
await page.waitForSelector(".scorebig");
await page.click("nav a[href='#home']");
await page.click("button[data-focus='']");
let reviewWrong = null;
for (let k = 0; k < 10; k++) {
  await page.waitForSelector("#card");
  const it = byId[await page.getAttribute("#card", "data-item")];
  if (it.type === "mcq") { await page.click(`#card .opt[data-k="${(it.answer + 1) % 4}"]`); reviewWrong = it; break; }
  if (it.type === "output") { await page.fill("#card textarea", "nope"); await page.click("#card #check"); }
  else { await page.fill("#card textarea", "x"); await page.click("#card #score"); for (let r = 0; r < it.rows.length; r++) await page.check(`#r-${it.id}-${r}-0`); await page.click("#card #savewr"); }
  await page.click("#next");
}
await page.waitForTimeout(1800); // the save after an answer
await page.click("#signout");

// The teacher's Class tab: last-name order, then the demo student's page.
await page.click("[data-as=teacher]");
await page.waitForSelector("#coursepick");
await page.selectOption("#coursepick", { label: "AP CSA" });
await page.click("nav a[href='#teacher']");
await page.waitForSelector("text=Items, hardest first");
const names = await page.$$eval("section.panel:has(h2:text('Students')) tbody tr td:first-child b", (b) => b.map((x) => x.textContent));
const key = (n) => { const w = n.toLowerCase().split(/\s+/); return w[w.length - 1] + " " + n.toLowerCase(); };
assert(names.join("|") === [...names].sort((a, b) => key(a).localeCompare(key(b))).join("|"), "students sort by last name: " + names.join(", "));
await page.click("a:has-text('Demo Student')");
await page.waitForSelector("text=Quizzes and tests");
await page.click("details.stuattempt > summary");
await page.waitForSelector("details.stuattempt .stuq");
const first = await page.textContent("details.stuattempt .stuq");
assert(/Wrong:/.test(first) && /Answer:/.test(first), "the attempt shows the wrong answer picked and the right one: " + first.slice(0, 120));
assert((await page.$$("details.stuattempt .feedback.ok")).length === q.items.length - 1, "the other answers show as right");
await page.screenshot({ path: `${out}/u01-student.png`, fullPage: true });
await page.click(`details.stuskill[data-skill='${reviewWrong.skill}'] > summary`);
await page.waitForSelector(`details.stuskill[data-skill='${reviewWrong.skill}'] .stuq`);
assert(/Wrong:/.test(await page.textContent(`details.stuskill[data-skill='${reviewWrong.skill}']`)), "review shows the wrong choice picked");
await page.screenshot({ path: `${out}/u02-student-review.png`, fullPage: true });

// GitHub for an email student (AP Calc): type the username, press Enter.
await page.click("text=class");
await page.selectOption("#coursepick", { label: "AP Calc AB" });
await page.waitForSelector("text=Items, hardest first");
const target = await page.$eval("input[data-gh]", (i) => i.dataset.gh);
await page.fill(`input[data-gh="${target}"]`, "@emme-gh");
await page.press(`input[data-gh="${target}"]`, "Enter");
await page.waitForSelector(".toast:has-text('signs in with GitHub')");
const rec = (await store()).students[target];
assert(rec.ghId === "5550001" && rec.login === "emme-gh", "the GitHub account is saved on the record: " + JSON.stringify(rec));

await browser.close();
console.log(errors.length ? `\n${errors.length} problems:\n` + errors.join("\n") : "\nall checks pass");
process.exit(errors.length ? 1 : 0);

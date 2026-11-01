// End-to-end run of the Questions page in the demo site, in Chromium: a teacher reads, edits, hides, and restores questions,
// and the edits reach the quizzes and tests. Serve the repo on :8765 first (python3 -m http.server 8765).
// Usage: node tools/e2e-questions.mjs [outdir]
import { createRequire } from "node:module";
const { chromium } = createRequire(import.meta.url)("playwright");
import deck from "../decks/whap.js";
import { mkdirSync } from "node:fs";

const out = process.argv[2] || "tools/.shots";
mkdirSync(out, { recursive: true });
const BASE = "http://localhost:8765/index.html?demo";
const errors = [];
const log = (...a) => console.log(...a);
const assert = (c, m) => { if (!c) { errors.push(m); console.log("  FAIL:", m); } };
const m01 = deck.forms.find((f) => f.id === "w2a").items.find((x) => x.id === "w2a-m01");

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1200, height: 900 } });
const page = await ctx.newPage();
page.on("console", (m) => { if (m.type() === "error" && !/fonts\.g|ERR_TUNNEL/.test(m.text())) errors.push("console: " + m.text()); });
page.on("pageerror", (e) => errors.push("pageerror: " + e.message));
const store = () => page.evaluate(() => JSON.parse(localStorage.getItem("ap-review-demo-v4")));

await page.goto(BASE);
await page.evaluate(() => localStorage.clear());
await page.goto(BASE);

// A student has no Questions tab.
await page.click("[data-as=student]");
await page.waitForSelector(".choices-home");
assert(!(await page.$("nav a[href='#questions']")), "a student has no Questions tab");
await page.click("#signout");

// The teacher opens AP World's questions.
await page.click("[data-as=teacher]");
await page.waitForSelector("#coursepick");
await page.selectOption("#coursepick", "whap");
await page.click("nav a[href='#questions']");
await page.waitForSelector("text=Every question");
const groups = await page.$$eval("details.qgroup > summary b", (b) => b.map((x) => x.textContent));
log("groups:", groups.join(" | "));
assert(groups[0] === "Unit 1: The Global Tapestry" && groups.includes("Unit 2: Networks of Exchange") && groups.at(-1) === "Review", "groups by unit, then review");
await page.click("details.qgroup:has(summary:has-text('Unit 2: Networks')) > summary");
assert(!(await page.isVisible("details.qitem[data-qid='w2a-m01']")), "each quiz or test starts closed");
await page.click("details.qform[data-form='w2a'] > summary");
await page.click("details.qitem[data-qid='w2a-m01'] > summary");
await page.waitForSelector("details.qitem[data-qid='w2a-m01'] .qchoices");
assert(await page.$("details.qitem[data-qid='w2a-m01'] details.sources"), "the question shows its sources");
assert((await page.textContent("details.qitem[data-qid='w2a-m01'] .qchoices li.right")).includes(m01.choices[0]), "the right answer is marked");
await page.screenshot({ path: `${out}/q01-question.png`, fullPage: false });

// Edit: new question wording, and choice C is now the right answer.
await page.click("details.qitem[data-qid='w2a-m01'] [data-qedit]");
await page.fill("form[data-qform='w2a-m01'] textarea[name='question']", "EDITED: " + m01.question);
await page.check("form[data-qform='w2a-m01'] input[name='answer'][value='2']");
await page.screenshot({ path: `${out}/q02-editor.png`, fullPage: false });
await page.click("form[data-qform='w2a-m01'] button[type=submit]");
await page.waitForSelector("details.qitem[data-qid='w2a-m01'] .chip:has-text('Edited by')");
let st = await store();
assert(st.edits["whap:w2a-m01"]?.fields?.question?.startsWith("EDITED: ") && st.edits["whap:w2a-m01"].answer === 2, "the edit is saved with only what changed: " + JSON.stringify(st.edits["whap:w2a-m01"]));
assert(Object.keys(st.edits["whap:w2a-m01"].fields).length === 1, "only the question text is stored");

// Hide the second question.
await page.click("details.qitem[data-qid='w2a-m02'] > summary");
await page.click("details.qitem[data-qid='w2a-m02'] [data-qedit]");
await page.check("form[data-qform='w2a-m02'] input[name='hidden']");
await page.click("form[data-qform='w2a-m02'] button[type=submit]");
await page.waitForSelector("details.qitem[data-qid='w2a-m02'] .chip:has-text('Hidden')");
{ const h = await page.textContent(".qform:has(h3:has-text('Unit 2 Assessment A')) h3"); assert(/22 questions, 1 hidden · 26 points/.test(h), "the form shows one hidden and 26 points: " + h); }

// After a reload the edits are still there, and the test uses them.
await page.reload();
await page.waitForSelector("#coursepick");
await page.selectOption("#coursepick", "whap");
await page.click("nav a[href='#mock']");
await page.waitForSelector(".fgroup");
assert(/Unit 2 Assessment A · 26 points/.test(await page.textContent(".formrow:has(b:text('Unit 2 Assessment A'))")), "the test is now 26 points");
await page.click("[data-form=w2a]");
await page.waitForSelector("#card");
assert((await page.getAttribute("#card", "data-item")) === "w2a-m01", "the test starts with the edited question");
assert((await page.textContent("#card")).includes("EDITED: "), "the test shows the new wording");
assert(/1 of 21/.test(await page.textContent(".row.spread.small.muted span")), "the hidden question is gone from the test");
await page.click(`#card .opt[data-k="2"]`);
await page.click("#next");
assert((await page.getAttribute("#card", "data-item")) === "w2a-m03", "the second question is skipped");

// Restore both.
await page.click("nav a[href='#questions']");
await page.waitForSelector("text=Every question");
await page.fill("#qsearch", "w2a-m0");
assert((await page.$$("details.qitem:not([hidden])")).length === 9, "search finds the nine w2a-m0 questions");
await page.click("details.qitem[data-qid='w2a-m01'] > summary");
await page.click("details.qitem[data-qid='w2a-m01'] [data-qedit]");
await page.click("form[data-qform='w2a-m01'] [data-qrestore]");
await page.waitForSelector("text=Restored the original.");
await page.click("details.qitem[data-qid='w2a-m02'] > summary");
await page.click("details.qitem[data-qid='w2a-m02'] [data-qedit]");
await page.uncheck("form[data-qform='w2a-m02'] input[name='hidden']");
await page.click("form[data-qform='w2a-m02'] button[type=submit]");
await page.waitForSelector("text=No changes from the original");
st = await store();
assert(!Object.keys(st.edits || {}).length, "no edits left after restoring");
assert(deck.forms.find((f) => f.id === "w2a").total === 27, "the deck file is untouched");

// The AP World teacher (email sign-in) can edit too.
await page.click("#signout");
await page.fill("#pwform input[type=email]", "history.teacher@sierracanyonschool.org");
await page.fill("#pwform input[type=password]", "teach-demo-7");
await page.click("#pwform button[type=submit]");
await page.waitForSelector("nav a[href='#questions']");

await browser.close();
console.log(errors.length ? `\n${errors.length} problems:\n` + errors.join("\n") : "\nall checks pass");
process.exit(errors.length ? 1 : 0);

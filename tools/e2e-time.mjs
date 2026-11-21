// Time on the site: a student's active time is counted (idle time is not), saved in their progress, and shown on the
// Account page, in the class view's "Time, 7 days" column, and on the student page. Serve the site on :8765 first.
import { createRequire } from "node:module";
const { chromium } = createRequire(import.meta.url)("playwright");

const BASE = "http://localhost:8765/index.html?demo";
const errors = [];
const assert = (ok, msg) => { if (!ok) { errors.push(msg); console.log("  FAIL:", msg); } };
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1200, height: 900 } });
await ctx.clock.install({ time: new Date("2026-11-21T15:00:00") });
const page = await ctx.newPage();
page.on("pageerror", (e) => errors.push("pageerror: " + e.message));
const timeOf = () => page.evaluate(() => JSON.parse(localStorage.getItem("ap-review-demo-v4")).progress["demo.student@scsstudent.org"]?.time);

await page.goto(BASE);
await page.click("[data-as=student]");
await page.waitForSelector(".choices-home");
// Five minutes with a click each minute, then six idle minutes: 4 minutes after the first click, plus 2 before idle cuts off.
for (let i = 0; i < 5; i++) { await page.mouse.click(600, 500); await ctx.clock.runFor(60000); }
await ctx.clock.runFor(6 * 60000);
let t = await timeOf();
const secs = t?.days?.["2026-11-21"]?.s || 0;
console.log("active seconds saved:", secs, "sessions:", t?.sessions?.length);
assert(secs >= 330 && secs <= 390, `about 6 minutes counted (got ${secs} s)`);
assert(t?.sessions?.length === 1, "one session");
// Twenty more idle minutes count nothing; then activity again starts a second session.
await ctx.clock.runFor(20 * 60000);
await page.mouse.click(600, 500); await ctx.clock.runFor(2 * 60000);
t = await timeOf();
assert(t?.sessions?.length === 2, "a new session after 10 idle minutes");
assert((t?.days?.["2026-11-21"]?.s || 0) < secs + 240, "idle time is not counted");

await page.goto(BASE + "#account"); await page.waitForTimeout(400);
assert(await page.$("text=Your teacher sees this too"), "the Account page shows the student their time");

await page.click("#signout"); await page.waitForSelector("[data-as=teacher]");
await page.click("[data-as=teacher]"); await page.waitForSelector("nav a[href='#teacher']");
await page.selectOption("#coursepick", "csp"); await page.click("nav a[href='#teacher']"); await page.waitForSelector("text=Roster:");
assert(await page.$("th:has-text('Time, 7 days')"), "the class view has a time column");
assert(await page.$("text=on the site in the last 7 days"), "the class view has the class's total time");
await page.click("a[href='#student-demo.student%40scsstudent.org']"); await page.waitForSelector("text=Time on the site");
assert(await page.$(".timebars .tb"), "the student page shows time by day");
await browser.close();
console.log(errors.length ? `\n${errors.length} problems:\n${errors.join("\n")}` : "\nall checks pass");
process.exit(errors.length ? 1 : 0);

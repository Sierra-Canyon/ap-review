// End-to-end run of the demo site in Chromium. Serve the repo on :8765 first (python3 -m http.server 8765).
// Usage: node tools/e2e.mjs [outdir]
import { createRequire } from "node:module";
const { chromium } = createRequire(import.meta.url)("playwright");
import deck from "../decks/csp-q3.js";
import { mkdirSync } from "node:fs";

const out = process.argv[2] || "tools/.shots";
mkdirSync(out, { recursive: true });
const BASE = "http://localhost:8765/index.html?demo";
// Items with an opens date in the future are not shown yet (the spring Big Idea items open on the day they are taught).
const TODAY = (() => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`; })();
const OPEN = deck.items.filter((it) => !it.opens || it.opens <= TODAY).length;
const byId = Object.fromEntries([...deck.items, ...(deck.forms || []).flatMap((f) => f.items)].map((i) => [i.id, i]));
const errors = [];
const log = (...a) => console.log(...a);
const assert = (c, m) => { if (!c) { errors.push(m); console.log("  FAIL:", m); } };

const browser = await chromium.launch();
async function newPage(opts = {}) {
  const ctx = await browser.newContext({ viewport: { width: 1200, height: 900 }, ...opts });
  // The checks below are written for the days before Quiz 3 (11/3), so the page's clock is set to then.
  await ctx.clock.install({ time: new Date("2026-11-02T08:00:00") });
  const page = await ctx.newPage();
  page.on("console", (m) => { if (m.type() === "error" && !/fonts\.g|ERR_TUNNEL/.test(m.text())) errors.push("console: " + m.text()); });
  page.on("pageerror", (e) => errors.push("pageerror: " + e.message));
  return { ctx, page };
}
const overflow = (page) => page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);

// Answer whatever item is on the card. right=true answers correctly.
async function answer(page, right) {
  const id = await page.getAttribute("#card", "data-item");
  const it = byId[id];
  if (it.type === "mcq") {
    const k = right ? it.answer : (it.answer + 1) % it.choices.length;
    await page.click(`#card .opt[data-k="${k}"]`);
  } else if (it.type === "output") {
    await page.fill("#card textarea", right ? it.answer : "wrong");
    await page.click("#card #check");
  } else if (it.type === "trace") {
    for (const inp of await page.$$("#card table.trace input")) {
      const r = +(await inp.getAttribute("data-r")), c = +(await inp.getAttribute("data-c"));
      await inp.fill(right ? it.rows[r][c] : "x");
    }
    await page.click("#card #check");
  } else if (it.type === "wr") {
    await page.fill("#card textarea", "The list holds every item, and without it each one needs its own variable and parameter.");
    await page.click("#card #score");
    for (let r = 0; r < it.rows.length; r++) await page.check(`#r-${id}-${r}-${right ? 2 : 0}`);
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
  await page.waitForSelector("[data-as=student]");
  await page.screenshot({ path: `${out}/01-signin.png`, fullPage: true });
  await page.click("[data-as=student]");
  await page.waitForSelector(".choices-home");
  const fresh = await page.textContent(".mode .row");
  log("home:", fresh.replace(/\s+/g, " ").trim());
  assert(new RegExp(`0\\s*due now\\s*${OPEN}\\s*new`).test(fresh), "home should show 0 due and all new");
  await page.screenshot({ path: `${out}/02-home-new.png`, fullPage: true });

  // A full review set: miss the first, get the rest right.
  await page.click("text=Start review");
  await page.waitForSelector("#card");
  const seen = [];
  let k = 0;
  while (await page.$("#card")) {
    const it = await answer(page, k !== 0);
    seen.push(it.id + (k === 0 ? "(missed)" : ""));
    if (k < 6) await page.screenshot({ path: `${out}/03-item-${k}-${it.type}.png`, fullPage: true });
    await page.waitForSelector("#next:visible");
    await page.click("#next");
    k++;
    if (k > 30) break;
  }
  log("review set:", seen.join(" "));
  assert(seen.length === 11, `a 10-item set with one miss should take 11 cards, took ${seen.length}`);
  assert(seen.filter((s) => s.startsWith(seen[0].replace("(missed)", ""))).length === 2, "the missed item should come back once");
  const types = new Set(seen.map((s) => byId[s.replace("(missed)", "")].type));
  log("types in set:", [...types].join(", "));
  await page.screenshot({ path: `${out}/04-set-done.png`, fullPage: true });
  const doneTxt = (await page.textContent(".scorebig")).trim();
  assert(doneTxt === "9 / 10", "summary should be 9 / 10, got " + doneTxt);

  await page.click("text=Home");
  const after = (await page.textContent(".mode .row")).replace(/\s+/g, " ");
  log("home after:", after.trim());
  assert(new RegExp(`0\\s*due now\\s*${OPEN - 10}\\s*new`).test(after), "after one set: 0 due and 10 fewer new; got " + after);

  // One of each type that may not have come up, straight from the review flow: run sets until each type has been seen.
  let guard = 0; const typesSeen = new Set(types);
  while (typesSeen.size < 4 && guard++ < 6) {
    await page.click("button[data-focus='']");
    await page.waitForSelector("#card");
    while (await page.$("#card")) {
      const it = await answer(page, true); typesSeen.add(it.type);
      if (it.type === "wr") await page.screenshot({ path: `${out}/05-wr-scored.png`, fullPage: true });
      await page.click("#next");
    }
    await page.click("text=Home");
  }
  assert(typesSeen.size === 4, "every item type should appear in review, saw " + [...typesSeen].join(","));
  await page.screenshot({ path: `${out}/06-home-progress.png`, fullPage: true });

  // Mock quiz: all Part A right, Part B scored 2+2 and 2+1 = 7 of 8, so 19 / 20.
  await page.click("a.btn[href='#mock']");
  await page.click("[data-form=m1]");
  for (let i = 0; i < 8; i++) {
    const id = await page.getAttribute("#card", "data-item");
    const it = byId[id];
    if (it.type === "mcq") await page.click(`#card .opt[data-k="${it.answer}"]`);
    else await page.fill("#card textarea", "My answer for " + id);
    if (i === 6) await page.screenshot({ path: `${out}/07-mock-partB.png`, fullPage: true });
    await page.click(i < 7 ? "#next" : "#finish");
  }
  for (let w = 0; w < 2; w++) {
    const id = await page.getAttribute("#card", "data-item").catch(() => null);
    const it = (await page.$$eval("#card input[type=radio]", (els) => els[0].name)).replace(/^r-/, "").replace(/-\d+$/, "");
    await page.check(`#r-${it}-0-2`); await page.check(`#r-${it}-1-${w === 0 ? 2 : 1}`);
    await page.click("#savewr");
    await page.click("#nextwr");
  }
  await page.waitForSelector(".scorebig");
  const mock = (await page.textContent(".scorebig")).trim();
  log("mock:", mock);
  assert(mock === "19 / 20", "mock should be 19 / 20, got " + mock);
  await page.screenshot({ path: `${out}/08-mock-done.png`, fullPage: true });
  assert((await overflow(page)) <= 0, "no horizontal scroll on desktop");
  await page.click("text=Home");
  const mockLine = await page.textContent(".choices-home .mode:nth-child(3) p");
  assert(/Last: 19 \/ 20/.test(mockLine), "home should show the last mock: " + mockLine);
}

// ---------------------------------------------------------------- not on the list, then the teacher, in one browser
const shared = await newPage();
{
  const { page } = shared;
  await page.goto(BASE);
  await page.click("text=Sign out").catch(() => {});
  await page.waitForSelector("[data-as=stranger]");
  await page.click("[data-as=stranger]");
  await page.waitForSelector("text=You are not on a class list yet");
  await page.screenshot({ path: `${out}/09-not-on-list.png`, fullPage: true });
  await page.click("#so2");
}

// ---------------------------------------------------------------- teacher
{
  const { page } = shared;
  await page.goto(BASE);
  await page.waitForSelector("[data-as=teacher]");
  await page.click("[data-as=teacher]");
  await page.waitForSelector("nav a[href='#teacher']");
  await page.click("nav a[href='#teacher']");
  await page.waitForSelector("text=Items, hardest first");
  await page.screenshot({ path: `${out}/10-teacher.png`, fullPage: true });
  const studentRows = await page.$$eval("section.panel:has(h2:text('Students')) tbody tr", (r) => r.length);
  log("teacher rows:", studentRows);
  assert(studentRows === 9, "class view should list the two demo students and seven examples, got " + studentRows);
  const req = await page.$$("[data-approve]");
  log("requests:", req.length);
  assert(req.length === 2, "two requests (the example and the stranger)");
  await req[0].click();
  await page.waitForSelector("text=Items, hardest first");
  assert((await page.$$("[data-approve]")).length === 1, "approving removes the request");
  await page.fill("#rosterin", "Test Kid, Test.Kid@scsstudent.org, @testkid, 999999");
  await page.click("#addroster");
  await page.waitForTimeout(600);
  await page.waitForSelector("text=Items, hardest first");
  const names = await page.$$eval("[data-name]", (els) => els.map((e) => e.value));
  assert(names.includes("Test Kid"), "roster add works: " + names.join(", "));
  await page.click("section.panel:has(h2:text('Items')) details summary");
  await page.screenshot({ path: `${out}/11-teacher-item-open.png`, fullPage: false });
}

// ---------------------------------------------------------------- phone, dark
{
  const { page } = await newPage({ viewport: { width: 390, height: 844 }, colorScheme: "dark", isMobile: true, hasTouch: true });
  await page.goto(BASE);
  await page.waitForSelector("[data-as=student]");
  await page.click("[data-as=student]");
  await page.waitForSelector(".choices-home");
  await page.screenshot({ path: `${out}/12-phone-dark-home.png`, fullPage: true });
  assert((await overflow(page)) <= 0, "no horizontal scroll on the phone home");
  await page.click("button[data-focus='']");
  await page.waitForSelector("#card");
  await answer(page, false);
  await page.screenshot({ path: `${out}/13-phone-dark-item.png`, fullPage: true });
  assert((await overflow(page)) <= 0, "no horizontal scroll on a phone item");
  await page.click("[data-as]").catch(() => {});
}
{
  const { page } = await newPage({ viewport: { width: 390, height: 844 }, isMobile: true });
  await page.goto(BASE);
  await page.waitForSelector("[data-as=teacher]");
  await page.click("[data-as=teacher]");
  await page.goto(BASE + "#teacher");
  await page.waitForSelector("text=Items, hardest first");
  await page.screenshot({ path: `${out}/14-phone-teacher.png`, fullPage: true });
  assert((await overflow(page)) <= 0, "no horizontal scroll on the phone class view");
}

await browser.close();
console.log(errors.length ? `\n${errors.length} problem(s):\n` + errors.join("\n") : "\nall checks pass");
process.exit(errors.length ? 1 : 0);

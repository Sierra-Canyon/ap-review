// Opens every book section in Chromium (demo mode) and checks it: every code block runs and prints what .NET printed,
// every step block steps to the end, every MCQ, Parsons problem, and exercise can be completed with its answer.
// Serve the repo on :8765 first. Usage: node tools/e2e-book.mjs [shots dir]
import { createRequire } from "node:module";
import { mkdirSync } from "node:fs";
import { sections } from "../book/index.js";
const { chromium } = createRequire(import.meta.url)("playwright");
const out = process.argv[2] || "tools/.shots"; mkdirSync(out, { recursive: true });
const BASE = "http://localhost:8765/index.html?demo";
const problems = [];
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1200, height: 900 } });
const page = await ctx.newPage();
page.on("pageerror", (e) => problems.push("pageerror: " + e.message));
page.on("console", (m) => { if (m.type() === "error" && !/ERR_TUNNEL|fonts\.g/.test(m.text())) problems.push("console: " + m.text()); });
await page.goto(BASE); await page.evaluate(() => localStorage.clear()); await page.goto(BASE);
await page.click("[data-as=student]");
await page.waitForSelector(".choices-home");
await page.click("nav a[href='#learn']");
await page.waitForSelector(".toc");
await page.screenshot({ path: `${out}/20-learn-home.png`, fullPage: true });
const norm = (s) => String(s ?? "").replace(/\r/g, "").split("\n").map((l) => l.replace(/\s+$/, "")).join("\n").replace(/\n+$/, "");
let shot = 0;
for (const sec of sections) {
  await page.goto(BASE + "#learn-" + sec.id);
  await page.waitForSelector(".blocks .blk");
  const blks = await page.$$(".blocks > .blk");
  if (blks.length !== sec.blocks.length) problems.push(`${sec.id}: ${blks.length} blocks shown, ${sec.blocks.length} in the file`);
  for (let k = 0; k < sec.blocks.length; k++) {
    const b = sec.blocks[k], el = blks[k], at = `${sec.id} #${k + 1} ${b.type}`;
    if (b.type === "code") {
      await (await el.$("[data-act=run]")).click();
      const term = await el.$(".run-out");
      const txt = await term.innerText();
      if (b.expect?.error) { if (!txt.includes(b.expect.error)) problems.push(`${at}: expected ${b.expect.error}, page shows ${txt.slice(0, 120)}`); }
      else {
        const outEl = await el.$(".run-out pre.out");
        const got = outEl ? await outEl.evaluate((n) => n.textContent) : null;
        if (got === null) problems.push(`${at}: no output shown: ${txt.slice(0, 120)}`);
        else if (b.expect?.out !== undefined && norm(got.replace("(nothing printed)", "")) !== norm(b.expect.out)) problems.push(`${at}: printed ${JSON.stringify(norm(got))}, expected ${JSON.stringify(norm(b.expect.out))}`);
        if (b.expect?.crash && !txt.includes(b.expect.crash)) problems.push(`${at}: expected crash ${b.expect.crash}`);
        if (!b.expect?.crash && /Unhandled exception/.test(txt)) problems.push(`${at}: crashed: ${txt.slice(0, 160)}`);
      }
      // step through once
      await (await el.$("[data-act=step]")).click();
      if (!b.expect?.error) { const st = await el.$(".stepper"); if (!st) problems.push(`${at}: Step through showed no stepper`); }
    }
    if (b.type === "step") {
      const st = await el.$(".stepper");
      if (!st) { problems.push(`${at}: no stepper`); continue; }
      let guard = 0;
      while (guard++ < 400) { const nx = await el.$("[data-act=next]:not([disabled])"); if (!nx) break; await nx.click(); }
      const outText = await (await el.$(".st-out pre")).evaluate((n) => n.textContent);
      if (b.expect?.out !== undefined && !b.expect.crash && norm(outText) !== norm(b.expect.out)) problems.push(`${at}: stepper ended with output ${JSON.stringify(norm(outText))}, expected ${JSON.stringify(norm(b.expect.out))}`);
      if (shot < 3) { await el.scrollIntoViewIfNeeded(); await (await el.$("[data-act=first]")).click(); for (let i = 0; i < 4; i++) { const nx = await el.$("[data-act=next]:not([disabled])"); if (nx) await nx.click(); } await el.screenshot({ path: `${out}/21-step-${sec.id}.png` }); shot++; }
    }
    if (b.type === "mcq") {
      // a wrong pick first, then the right one
      const wrong = await el.$(`.opt[data-k="1"]`); await wrong.click();
      const right = await el.$(`.opt[data-k="0"]`); await right.click();
      const foot = await (await el.$(".act-foot")).innerText();
      if (!/Right/.test(foot)) problems.push(`${at}: mcq not marked right: ${foot}`);
    }
    if (b.type === "parsons") {
      for (const line of b.lines) {
        const btns = await el.$$(".pool .pz-b");
        let clicked = false;
        for (const bt of btns) { const t = await bt.evaluate((n) => n.querySelector("code").textContent); if (t === line) { await bt.click(); clicked = true; break; } }
        if (!clicked) { problems.push(`${at}: could not find block ${JSON.stringify(line)}`); break; }
      }
      await (await el.$("[data-act=check]")).click();
      const res = await (await el.$(".pz-out")).innerText();
      if (!/Right\./.test(res)) problems.push(`${at}: parsons in order not accepted: ${res.slice(0, 200)}`);
    }
    if (b.type === "exercise") {
      await (await el.$("[data-act=check]")).click();
      const first = await (await el.$(".ex-out")).innerText();
      if (/rows pass/.test(first) && new RegExp(`${b.tests.length} of ${b.tests.length} rows pass`).test(first)) problems.push(`${at}: starter already passes`);
      const ta = await el.$("textarea.ed-ta");
      await ta.evaluate((n, v) => { n.value = v; n.dispatchEvent(new Event("input", { bubbles: true })); }, b.solution);
      await (await el.$("[data-act=check]")).click();
      const res = await (await el.$(".ex-out")).innerText();
      if (!new RegExp(`${b.tests.length} of ${b.tests.length} rows pass`).test(res)) problems.push(`${at}: solution does not pass on the page: ${res.slice(0, 300)}`);
    }
  }
  const prog = await page.$eval("#secprog", (n) => n.innerText).catch(() => "");
  if (!/section done/.test(prog)) problems.push(`${sec.id}: section not marked done after every activity: ${prog}`);
  if (sec.id === "lists-1") await page.screenshot({ path: `${out}/22-section-lists-1.png`, fullPage: true });
  const ov = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  if (ov > 0) problems.push(`${sec.id}: page scrolls sideways by ${ov}px`);
}
await page.goto(BASE + "#learn"); await page.waitForSelector(".toc");
const doneCount = await page.$$eval(".toc-p.full", (n) => n.length);
if (doneCount !== sections.length) problems.push(`Learn home shows ${doneCount} sections done, expected ${sections.length}`);
await page.screenshot({ path: `${out}/23-learn-done.png`, fullPage: true });
// phone width, one section
const phone = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, colorScheme: "dark" });
const pp = await phone.newPage();
await pp.goto(BASE); await pp.click("[data-as=student]"); await pp.waitForSelector(".choices-home");
await pp.goto(BASE + "#learn-for-4"); await pp.waitForSelector(".blocks .blk");
const ov = await pp.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
if (ov > 0) problems.push(`phone: page scrolls sideways by ${ov}px`);
await pp.screenshot({ path: `${out}/24-phone-for-4.png`, fullPage: false });
await (await pp.$(".blk-step")).scrollIntoViewIfNeeded();
await pp.screenshot({ path: `${out}/25-phone-step.png`, fullPage: false });
await browser.close();
console.log(problems.length ? problems.join("\n") + `\n${problems.length} problem(s)` : `all ${sections.length} sections check out`);
process.exit(problems.length ? 1 : 0);

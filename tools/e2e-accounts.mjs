// End-to-end run of accounts in the demo site: school-email sign-in, first password, changing it, the reset link,
// a teacher who signs in with email and sees only their course, first-password cards, and a GitHub record gaining a school email.
// Serve the repo on :8765 first (python3 -m http.server 8765). Usage: node tools/e2e-accounts.mjs [outdir]
import { createRequire } from "node:module";
const { chromium } = createRequire(import.meta.url)("playwright");
import { mkdirSync } from "node:fs";

const out = process.argv[2] || "tools/.shots";
mkdirSync(out, { recursive: true });
const BASE = "http://localhost:8765/index.html?demo";
const errors = [];
const log = (...a) => console.log(...a);
const assert = (c, m) => { if (!c) { errors.push(m); console.log("  FAIL:", m); } };
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1200, height: 900 } });
const page = await ctx.newPage();
page.on("console", (m) => { if (m.type() === "error" && !/fonts\.g|ERR_TUNNEL/.test(m.text())) errors.push("console: " + m.text()); });
page.on("pageerror", (e) => errors.push("pageerror: " + e.message));
const store = () => page.evaluate(() => JSON.parse(localStorage.getItem("ap-review-demo-v4")));
const signInEmail = async (email, pw) => { await page.fill("#pwemail", email); await page.fill("#pwpass", pw); await page.click("#pwform button[type=submit]"); };
const signOut = async () => { await page.click("#signout"); await page.waitForSelector("#pwform"); };

await page.goto(BASE); await page.evaluate(() => localStorage.clear()); await page.goto(BASE);

// A wrong password says so.
await signInEmail("demo.email@scsstudent.org", "nope-nope");
await page.waitForSelector("text=do not match");
// Forgot password sends a reset link.
await page.fill("#pwemail", "demo.email@scsstudent.org"); await page.click("#forgot");
await page.waitForSelector("text=a link to choose a new password is on its way");
assert((await store()).sent.some((x) => x.email === "demo.email@scsstudent.org"), "forgot password sends a reset email");

// First sign-in with the first password: must choose their own.
await signInEmail("demo.email@scsstudent.org", "maple-river-42");
await page.waitForSelector("text=Choose your own password");
await page.screenshot({ path: `${out}/p01-choose.png`, fullPage: true });
await page.fill("#pwnew", "short"); await page.fill("#pwnew2", "short"); await page.click("#firstpw button[type=submit]");
await page.waitForSelector("text=at least 8");
await page.fill("#pwnew", "my-own-pass-1"); await page.fill("#pwnew2", "my-own-pass-1"); await page.click("#firstpw button[type=submit]");
await page.waitForSelector(".choices-home");
assert((await store()).accounts["demo.email@scsstudent.org"].password === "my-own-pass-1", "the chosen password is saved");
const opts = await page.$$eval("#coursepick option", (o) => o.map((x) => x.value));
log("email student's courses:", opts.join(", "));
assert(opts.includes("whap") && opts.includes("csp"), "the email student sees World History and AP CSP");
assert(await page.$("text=Demo Email Student"), "the bar shows the name, not the email");
// Change password from the account page.
await page.click(".who a"); await page.waitForSelector("text=Change your password");
await page.fill("#pwcur", "wrong-one-1"); await page.fill("#pwnew", "another-pass-2"); await page.fill("#pwnew2", "another-pass-2"); await page.click("#chpw button[type=submit]");
await page.waitForSelector("text=The current password is not right");
await page.fill("#pwcur", "my-own-pass-1"); await page.click("#chpw button[type=submit]");
await page.waitForSelector("text=Password changed");
await page.screenshot({ path: `${out}/p02-account.png`, fullPage: true });
// World History review renders a source, a short answer, and an essay without errors.
await page.selectOption("#coursepick", "whap");
await page.click("button[data-focus='essay']"); await page.waitForSelector("#card textarea.essay-in");
await page.fill("#card textarea", "Rulers used religion to legitimize power, as in the Mughal and French examples.");
await page.click("#card #score");
const rows = await page.$$eval("#card fieldset.rrow", (f) => f.length);
assert(rows === 4, "an essay is scored on four rubric rows, got " + rows);
for (const name of await page.$$eval("#card fieldset.rrow input[value='1']", (els) => els.map((e) => e.name))) await page.check(`#card input[name="${name}"][value="1"]`);
await page.click("#card #savewr");
await page.waitForSelector("text=A strong response");
await page.screenshot({ path: `${out}/p03-essay.png`, fullPage: true });
await page.click("text=Home"); await page.click("button[data-focus='saq']"); await page.waitForSelector("#card .prompt");
assert(/^\(\w\)/.test((await page.textContent("#card .prompt")).trim()), "a short answer shows its part letter");
await signOut();

// The history teacher signs in with email and sees only her World History sections.
await signInEmail("history.teacher@sierracanyonschool.org", "teach-demo-7");
await page.waitForSelector("nav a[href='#teacher']");
assert(!(await page.$("#coursepick")), "the history teacher has one subject, so no course menu");
const sections = await page.$$eval("#sectionpick option", (o) => o.map((x) => x.textContent));
assert(sections.join() === "Period B,Period C,Period D", "the history teacher sees her three sections and nothing else: " + sections.join());
await page.click("nav a[href='#teacher']"); await page.waitForSelector("text=Roster:");
assert(!(await page.$("#teacherspanel")), "only the admin sees the Teachers panel");
await page.fill("#rosterin", "Brooklyn Chen, Sicheng.Chen@scsstudent.org\nyutong.liu@scsstudent.org");
await page.click("#addroster"); await page.waitForSelector(".toast:has-text('Added 2')");
await page.waitForSelector("text=Roster:");
let st = await store();
assert(st.accounts["sicheng.chen@scsstudent.org"] && st.cards["sicheng.chen@scsstudent.org"], "a new email gets a sign-in and a card");
assert(st.students["yutong.liu@scsstudent.org"].name === "Yutong Liu", "a name left off comes from the email");
// Rename to the name used in class.
await page.fill('[data-name="yutong.liu@scsstudent.org"]', "Queenie Liu"); await page.press('[data-name="yutong.liu@scsstudent.org"]', "Enter");
await page.waitForSelector(".toast:has-text('Saved')");
assert((await store()).students["yutong.liu@scsstudent.org"].name === "Queenie Liu", "the class name is saved");
await page.click("[data-reset='sicheng.chen@scsstudent.org']");
await page.waitForSelector(".toast:has-text('Reset link sent')");
await page.click("a[href='#cards']"); await page.waitForSelector(".logincard");
const cards = await page.$$eval(".logincard", (c) => c.length);
log("first-password cards:", cards);
assert(cards >= 2, "cards print for students who have not chosen a password");
await page.screenshot({ path: `${out}/p04-cards.png`, fullPage: true });
await page.goto(BASE + "#teacher"); await page.waitForSelector("text=Roster:");
await signOut();

// The new student signs in with the card's password.
st = await store();
await signInEmail("Sicheng.Chen@scsstudent.org", st.cards["sicheng.chen@scsstudent.org"].password);
await page.waitForSelector("text=Choose your own password");
await page.fill("#pwnew", "brooklyn-pass-9"); await page.fill("#pwnew2", "brooklyn-pass-9"); await page.click("#firstpw button[type=submit]");
await page.waitForSelector(".choices-home");
assert(await page.$("text=Brooklyn Chen"), "the student sees the class name");
await signOut();

// The admin adds school emails to GitHub records: the record moves to the email and keeps its progress.
await page.click("[data-as=student]"); await page.waitForSelector(".choices-home");
await page.click("button[data-focus='']"); await page.waitForSelector("#card");
await page.click("#signout"); await page.waitForSelector("[data-as=teacher]");
await page.click("[data-as=teacher]"); await page.waitForSelector("nav a[href='#teacher']");
await page.selectOption("#coursepick", "csp"); await page.click("nav a[href='#teacher']"); await page.waitForSelector("text=Roster:");
await page.waitForSelector("#teacherspanel h2");
// A GitHub-only record (approve the stranger's request), then give it a school email.
const strangerReq = await page.$("[data-approve='2000099']");
await strangerReq.click(); await page.waitForSelector(".toast:has-text('Added')");
await page.waitForSelector("text=Roster:");
st = await store();
assert(st.students["gh-2000099"], "an approved GitHub request is a gh- record");
st.progress["gh-2000099"] = { decks: { "csp-q3": { cards: { x: { n: 1 } }, mocks: [] } } };
await page.evaluate((s) => localStorage.setItem("ap-review-demo-v4", JSON.stringify(s)), st);
await page.reload(); await page.waitForSelector("text=Roster:");
await page.fill("#rosterin", "Example New Account, Example.New@scsstudent.org, @example-new-account, 2000099");
await page.click("#addroster"); await page.waitForSelector(".toast:has-text('Added 1')");
st = await store();
assert(!st.students["gh-2000099"] && st.students["example.new@scsstudent.org"]?.ghId === "2000099", "the record moved to the school email");
assert(st.progress["example.new@scsstudent.org"]?.decks?.["csp-q3"], "its progress moved with it");
// GitHub first: a student with GitHub on file who joins AP World gets no password login.
await page.selectOption("#coursepick", "whap");
await page.waitForSelector("#rosterin");
await page.fill("#rosterin", "Example New Account, Example.New@scsstudent.org");
await page.click("#addroster"); await page.waitForSelector(".toast:has-text('Added 1')");
st = await store();
assert(JSON.stringify(st.students["example.new@scsstudent.org"]?.courses) === '["csp","whap"]', "the GitHub student joins AP World");
assert(!st.accounts["example.new@scsstudent.org"] && !st.cards["example.new@scsstudent.org"], "no password login for a GitHub student");
await page.waitForSelector("text=Items, hardest first");
assert(/GitHub/.test(await page.textContent("table.rostertable tr:has-text('example.new@scsstudent.org')")), "the roster shows GitHub as the sign-in");
// The Teachers panel adds a teacher and emails a link.
await page.fill("#tname", "New Teacher"); await page.fill("#temail", "new.teacher@sierracanyonschool.org");
await page.check("#addteacher input[value='whap']"); await page.click("#addteacher button[type=submit]");
await page.waitForSelector(".toast:has-text('was emailed a link')");
st = await store();
assert(JSON.stringify(st.teachers["new.teacher@sierracanyonschool.org"]?.courses) === '["whap"]', "the teacher is saved with their course");
await page.screenshot({ path: `${out}/p05-admin.png`, fullPage: true });

// Phone width on the sign-in page.
const phone = await (await browser.newContext({ viewport: { width: 375, height: 800 }, isMobile: true })).newPage();
await phone.goto(BASE); await phone.waitForSelector("#pwform");
assert(await phone.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth) <= 0, "no horizontal scroll on the phone sign-in page");
await phone.screenshot({ path: `${out}/p06-phone-signin.png`, fullPage: true });

await browser.close();
console.log(errors.length ? `\n${errors.length} problems:\n` + errors.join("\n") : "\nall checks pass");
process.exit(errors.length ? 1 : 0);

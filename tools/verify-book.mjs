// Checks book sections on real .NET 10: every code, step, mcq, parsons, and exercise block, plus the writing rules.
// Usage: node tools/verify-book.mjs [section files...]   (no arguments: every section in book/index.js)
import { pathToFileURL, fileURLToPath } from "node:url";
import { resolve, dirname, join } from "node:path";
import { writeFileSync } from "node:fs";
import { makePool, compare, norm } from "./dotnet-pool.mjs";
import { sectionCases, lintSection } from "./book-cases.mjs";

const here = dirname(fileURLToPath(import.meta.url));
let files = process.argv.slice(2);
let sections;
if (files.length) sections = await Promise.all(files.map(async (f) => (await import(pathToFileURL(resolve(f)))).default));
else sections = (await import(pathToFileURL(join(here, "../book/index.js")))).sections;

const pool = await makePool();
const lines = [];
let failed = 0, total = 0;
for (const sec of sections) {
  for (const l of lintSection(sec)) { lines.push(`STYLE ${sec.id} ${l.where}: ${l.text}`); failed++; total++; }
  const cases = sectionCases(sec);
  const results = await Promise.all(cases.map(async (c) => {
    if (c.missing) return `FAIL  ${c.where}  ${c.missing}`;
    const r = await pool.exec(c.source, c.stdin);
    let problem;
    if (c.want?.builds) problem = r.built ? null : `starter does not build: ${r.diag.slice(0, 2).join(" | ")}`;
    else if (c.want?.notOut !== undefined) problem = r.built && !r.exception && norm(r.stdout) === norm(c.want.notOut) ? "the starter already passes every test" : null;
    else problem = compare(r, c.want);
    return problem ? `FAIL  ${c.where}  ${problem}` : `PASS  ${c.where}  ${r.built ? JSON.stringify(norm(r.stdout)).slice(0, 100) : r.errors.join(" ")}${r.exception ? " then " + r.exception : ""}`;
  }));
  for (const r of results) { total++; if (r.startsWith("FAIL")) failed++; lines.push(r); }
}
lines.push("", `${total - failed} of ${total} checks pass.`);
writeFileSync(join(here, "verify_book_report.txt"), lines.join("\n") + "\n");
console.log(lines.filter((l) => !l.startsWith("PASS")).join("\n"));
process.exit(failed ? 1 : 0);

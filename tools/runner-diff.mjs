// Runs the verified corpus (book blocks and review-deck items, whose expected results came from real .NET 10) through the
// JavaScript runner and reports every difference. Usage: node tools/runner-diff.mjs [corpus.json]
import { readFileSync, writeFileSync } from "node:fs";
import { pathToFileURL } from "node:url";
import { readdirSync } from "node:fs";
import { run, debug } from "../runner/csharp.js";
import { sectionCases } from "./book-cases.mjs";

const norm = (s) => String(s ?? "").replace(/\r\n/g, "\n").split("\n").map((l) => l.replace(/\s+$/, "")).join("\n").replace(/\n+$/, "");
let cases = [];
if (process.argv[2]) cases = JSON.parse(readFileSync(process.argv[2]));
else {
  for (const ch of ["ch1", "ch2", "ch3", "ch4", "ch5"]) for (const f of readdirSync(new URL(`../book/${ch}`, import.meta.url))) {
    const sec = (await import(new URL(`../book/${ch}/${f}`, import.meta.url))).default;
    for (const c of sectionCases(sec)) cases.push({ where: c.where, source: c.source, stdin: c.stdin, want: c.want });
  }
  const deck = (await import(new URL("../decks/csp-q3.js", import.meta.url))).default;
  for (const it of deck.items) { const v = it.verify; if (!v) continue; const list = v.cases || [{ ...v, run: v.run ?? it.code }]; list.forEach((c, k) => cases.push({ where: `${it.id}#${k}`, source: c.run, want: c })); }
}
const fails = [];
let n = 0;
const t0 = Date.now();
for (const c of cases) {
  if (!c.want || !c.source) continue;
  n++;
  let r;
  try { r = run(c.source, { stdin: c.stdin }); } catch (e) { fails.push(`${c.where}: runner threw ${e.stack.split("\n").slice(0, 3).join(" | ")}`); continue; }
  const w = c.want;
  const errs = (r.diagnostics || []).filter((d) => d.severity === "error").map((d) => d.code);
  const warns = (r.diagnostics || []).filter((d) => d.severity === "warning").map((d) => d.code);
  let p = null;
  if (w.error) { if (r.ok) p = `expected ${w.error}, it ran`; else if (!errs.includes(w.error)) p = `expected ${w.error}, got ${(r.diagnostics || []).map((d) => d.code + " " + d.message).join(" | ")}`; }
  else if (w.builds) { if (!r.ok) p = `should build: ${r.diagnostics.map((d) => d.code + " " + d.message).join(" | ")}`; }
  else if (!r.ok) p = `did not build: ${r.diagnostics.filter((d) => d.severity === "error").map((d) => `${d.line}:${d.col} ${d.code} ${d.message}`).join(" | ")}`;
  else {
    if (w.warning && !warns.includes(w.warning)) p = `expected warning ${w.warning}, got ${warns.join(" ") || "none"}`;
    else if (w.crash) { if (!r.exception) p = `expected crash ${w.crash}, printed ${JSON.stringify(norm(r.stdout))}`; else if (r.exception.type !== w.crash) p = `expected ${w.crash}, got ${r.exception.type}`; }
    else if (r.exception) p = `crashed ${r.exception.type}: ${r.exception.message}`;
    else if (r.limit) p = "hit the step limit";
    if (!p && w.out !== undefined && norm(r.stdout) !== norm(w.out)) p = `printed ${JSON.stringify(norm(r.stdout))}, expected ${JSON.stringify(norm(w.out))}`;
    if (!p && w.notOut !== undefined && norm(r.stdout) === norm(w.notOut)) p = "starter passes all tests";
  }
  if (!p && r.ok) {
    try { const d = debug(c.source, { stdin: c.stdin }); if (norm(d.stdout) !== norm(r.stdout) && !d.pauseLimit) p = `debug mode printed ${JSON.stringify(norm(d.stdout))}`; if (!d.pauses.length) p = "debug mode recorded no pauses"; }
    catch (e) { p = `debug threw ${e.stack.split("\n").slice(0, 3).join(" | ")}`; }
  }
  if (p) fails.push(`${c.where}: ${p}`);
}
writeFileSync(new URL("./runner_diff_report.txt", import.meta.url), fails.join("\n") + `\n\n${n - fails.length} of ${n} match .NET.\n`);
console.log(fails.join("\n"));
console.log(`${n - fails.length} of ${n} match .NET (${Date.now() - t0} ms)`);

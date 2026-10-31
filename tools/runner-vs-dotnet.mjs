// Runs every program in tools/fuzz/snippets.mjs on real .NET and on the JavaScript runner, and lists the differences.
import { makePool, norm } from "./dotnet-pool.mjs";
import { run } from "../runner/csharp.js";
import snippets from "./fuzz/snippets.mjs";
import { writeFileSync } from "node:fs";
const pool = await makePool();
const lines = [];
let bad = 0;
await Promise.all(snippets.map(async (src, k) => {
  const stdin = src.includes("ReadLine") ? "12\n" : undefined;
  const d = await pool.exec(src, stdin);
  let r; try { r = run(src, { stdin: stdin ?? "" }); } catch (e) { lines[k] = `THROW #${k} ${src.slice(0, 60)}\n   ${e.stack.split("\n").slice(0, 2).join(" ")}`; bad++; return; }
  const derr = d.errors, rerr = r.ok ? [] : r.diagnostics.filter((x) => x.severity === "error").map((x) => x.code);
  const dw = d.warnings.filter((w) => w !== "CS8321"), rw = (r.diagnostics || []).filter((x) => x.severity === "warning").map((x) => x.code).filter((w) => w !== "CS8321");
  const probs = [];
  if (!d.built) {
    if (r.ok) probs.push(`dotnet: ${d.diag[0]} | runner built it`);
    else if (derr[0] !== rerr[0]) probs.push(`first error: dotnet ${d.diag.find((x) => /error/.test(x))} | runner ${r.diagnostics.find((x) => x.severity === "error").code} ${r.diagnostics.find((x) => x.severity === "error").message}`);
    else {
      const dd = d.diag.find((x) => /error/.test(x)), rd = r.diagnostics.find((x) => x.severity === "error");
      const rs = `Program.cs(${rd.line},${rd.col}): error ${rd.code}: ${rd.message}`;
      if (dd !== rs) probs.push(`message: dotnet ${dd}\n          runner ${rs}`);
    }
  } else {
    if (!r.ok) probs.push(`dotnet built; runner: ${r.diagnostics.filter((x) => x.severity === "error").map((x) => x.code + " " + x.message).join(" | ")}`);
    else {
      if (norm(d.stdout) !== norm(r.stdout)) probs.push(`stdout: dotnet ${JSON.stringify(norm(d.stdout)).slice(0, 300)}\n          runner ${JSON.stringify(norm(r.stdout)).slice(0, 300)}`);
      const de = d.exception ? `${d.exception}: ${d.exceptionMessage}` : null, re = r.exception ? `${r.exception.type}: ${r.exception.message}` : null;
      if (de !== re && !(d.stderr.includes("Stack overflow") && r.exception?.type === "StackOverflow")) probs.push(`exception: dotnet ${de || d.stderr.split("\n")[0] || "none"} | runner ${re || "none"}`);
      const wd = [...new Set(dw)].sort().join(","), wr = [...new Set(rw)].sort().join(",");
      if (wd !== wr) probs.push(`warnings: dotnet ${wd || "none"} | runner ${wr || "none"}  ${d.diag.filter((x) => /warning/.test(x)).join(" ; ")}`);
    }
  }
  if (probs.length) { bad++; lines[k] = `DIFF #${k} ${src.replace(/\n/g, "\\n").slice(0, 90)}\n   ${probs.join("\n   ")}`; }
}));
const out = lines.filter(Boolean).join("\n");
writeFileSync(new URL("./runner_vs_dotnet_report.txt", import.meta.url), out + `\n\n${snippets.length - bad} of ${snippets.length} agree.\n`);
console.log(out); console.log(`${snippets.length - bad} of ${snippets.length} agree.`);

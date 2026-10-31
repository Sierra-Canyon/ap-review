// Compiles and runs every block of code in a deck on .NET, and checks it against what the item says.
// Usage: node tools/verify.mjs decks/csp-q3.js
// Needs the .NET SDK (dotnet) on the PATH. Writes tools/verify_report.txt next to this file.
import { execFile } from "node:child_process";
import { mkdirSync, writeFileSync, existsSync } from "node:fs";
import { join, resolve, dirname } from "node:path";
import { pathToFileURL, fileURLToPath } from "node:url";
import { promisify } from "node:util";
import os from "node:os";

const run = promisify(execFile);
const here = dirname(fileURLToPath(import.meta.url));
const deckPath = resolve(process.argv[2] || join(here, "../decks/csp-q3.js"));
const deck = (await import(pathToFileURL(deckPath))).default;
const WORKERS = Math.max(1, Math.min(4, os.cpus().length));
const root = join(os.tmpdir(), "deck-verify");

const csproj = `<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup>
    <OutputType>Exe</OutputType>
    <TargetFramework>net10.0</TargetFramework>
    <ImplicitUsings>enable</ImplicitUsings>
    <Nullable>enable</Nullable>
    <AssemblyName>snip</AssemblyName>
  </PropertyGroup>
</Project>`;

const norm = (s) => s.replace(/\r\n/g, "\n").split("\n").map((l) => l.replace(/\s+$/, "")).join("\n").replace(/\n+$/, "");

// Build the list of cases.
const cases = [];
for (const it of deck.items) {
  const v = it.verify;
  if (!v) { cases.push({ id: it.id, skip: "no verify block" }); continue; }
  const list = v.cases ? v.cases : [{ ...v, run: v.run ?? it.code }];
  list.forEach((c, k) => cases.push({ id: it.id + (list.length > 1 ? `#${k + 1}` : ""), item: it, ...c }));
  // The item text has to agree with what ran.
  if (!v.cases && v.out !== undefined && !v.crash) {
    if (it.type === "output" && norm(it.answer) !== norm(v.out)) cases.push({ id: it.id + " answer", fail: `answer ${JSON.stringify(it.answer)} is not the output ${JSON.stringify(v.out)}` });
    if (it.type === "mcq" && !v.out.includes("\n") && it.choices[it.answer] !== v.out && /^What is printed/.test(it.question || "")) cases.push({ id: it.id + " key", fail: `key ${JSON.stringify(it.choices[it.answer])} is not the output ${JSON.stringify(v.out)}` });
    if (it.type === "trace") {
      const want = it.rows.map((r) => r.join(",")).join("\n");
      if (want !== norm(v.out)) cases.push({ id: it.id + " rows", fail: `rows ${JSON.stringify(want)} are not the output ${JSON.stringify(v.out)}` });
    }
  }
}

async function check(dir, c) {
  if (c.skip) return { ok: true, note: c.skip };
  if (c.fail) return { ok: false, note: c.fail };
  writeFileSync(join(dir, "Program.cs"), c.run + "\n");
  let build;
  try {
    build = await run("dotnet", ["build", "-nologo", "-v", "q", "-clp:NoSummary", "--no-restore"], { cwd: dir, maxBuffer: 1 << 24 });
    build.failed = false;
  } catch (e) { build = { stdout: e.stdout || "", stderr: e.stderr || "", failed: true }; }
  const blog = build.stdout + build.stderr;
  const errors = [...new Set([...blog.matchAll(/error (CS\d{4})/g)].map((m) => m[1]))];
  const warnings = [...new Set([...blog.matchAll(/warning (CS\d{4})/g)].map((m) => m[1]))];
  if (c.error) {
    if (!build.failed) return { ok: false, note: `expected build error ${c.error}, but it built` };
    if (!errors.includes(c.error)) return { ok: false, note: `expected ${c.error}, got ${errors.join(" ")}` };
    return { ok: true, note: `build error ${errors.join(" ")}` };
  }
  if (build.failed) return { ok: false, note: `did not build: ${errors.join(" ")}\n${blog.split("\n").filter((l) => /error/.test(l)).slice(0, 3).join("\n")}` };
  if (c.warning && !warnings.includes(c.warning)) return { ok: false, note: `expected warning ${c.warning}, got ${warnings.join(" ") || "none"}` };
  let r;
  try { r = await run("dotnet", [join(dir, "bin/Debug/net10.0/snip.dll")], { cwd: dir, timeout: 15000 }); r.code = 0; }
  catch (e) { r = { stdout: e.stdout || "", stderr: e.stderr || "", code: e.code ?? 1 }; }
  if (c.crash) {
    if (r.code === 0) return { ok: false, note: `expected a crash (${c.crash}); exited 0 with ${JSON.stringify(r.stdout)}` };
    if (!r.stderr.includes("System." + c.crash)) return { ok: false, note: `expected ${c.crash}, stderr: ${r.stderr.split("\n")[0]}` };
  } else if (r.code !== 0) return { ok: false, note: `crashed: ${r.stderr.split("\n")[0]}` };
  if (c.out !== undefined && norm(r.stdout) !== norm(c.out)) return { ok: false, note: `printed ${JSON.stringify(norm(r.stdout))}, expected ${JSON.stringify(norm(c.out))}` };
  return { ok: true, note: `printed ${JSON.stringify(norm(r.stdout))}${c.crash ? " then " + c.crash : ""}${warnings.length ? " · warnings " + warnings.join(" ") : ""}` };
}

// One project per worker, restored once.
const dirs = [];
for (let w = 0; w < WORKERS; w++) {
  const d = join(root, "w" + w);
  mkdirSync(d, { recursive: true });
  writeFileSync(join(d, "snip.csproj"), csproj);
  if (!existsSync(join(d, "obj"))) {
    writeFileSync(join(d, "Program.cs"), "Console.WriteLine();\n");
    await run("dotnet", ["restore", "-v", "q"], { cwd: d });
  }
  dirs.push(d);
}

const results = new Array(cases.length);
let next = 0;
await Promise.all(dirs.map(async (d) => {
  while (next < cases.length) {
    const k = next++;
    results[k] = await check(d, cases[k]);
    process.stdout.write(results[k].ok ? "." : "F");
  }
}));
process.stdout.write("\n");

const lines = cases.map((c, k) => `${results[k].ok ? "PASS" : "FAIL"}  ${c.id}  ${results[k].note}`);
const failed = results.filter((r) => !r.ok).length;
lines.push("", `${cases.length - failed} of ${cases.length} checks pass. dotnet ${(await run("dotnet", ["--version"])).stdout.trim()}. ${new Date().toISOString()}`);
writeFileSync(join(here, "verify_report.txt"), lines.join("\n") + "\n");
console.log(lines.filter((l) => !l.startsWith("PASS")).join("\n"));
process.exit(failed ? 1 : 0);

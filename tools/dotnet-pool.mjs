// Builds and runs C# snippets on the real .NET SDK, several at a time. Used by verify.mjs and verify-book.mjs.
import { execFile } from "node:child_process";
import { mkdirSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { promisify } from "node:util";
import os from "node:os";

const run = promisify(execFile);
const csproj = `<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup>
    <OutputType>Exe</OutputType>
    <TargetFramework>net10.0</TargetFramework>
    <ImplicitUsings>enable</ImplicitUsings>
    <Nullable>enable</Nullable>
    <AssemblyName>snip</AssemblyName>
  </PropertyGroup>
</Project>`;

export const norm = (s) => String(s ?? "").replace(/\r\n/g, "\n").split("\n").map((l) => l.replace(/\s+$/, "")).join("\n").replace(/\n+$/, "");

// Builds and runs one program. Returns { built, errors, warnings, diag, stdout, stderr, exception, code }.
async function buildRun(dir, source, stdin) {
  writeFileSync(join(dir, "Program.cs"), source + "\n");
  let b;
  try { b = await run("dotnet", ["build", "-nologo", "-v", "q", "-clp:NoSummary", "--no-restore"], { cwd: dir, maxBuffer: 1 << 24 }); b.failed = false; }
  catch (e) { b = { stdout: e.stdout || "", stderr: e.stderr || "", failed: true }; }
  const log = b.stdout + b.stderr;
  const errors = [...new Set([...log.matchAll(/error (CS\d{4})/g)].map((m) => m[1]))];
  const warnings = [...new Set([...log.matchAll(/warning (CS\d{4})/g)].map((m) => m[1]))];
  const diag = [...new Set(log.split("\n").filter((l) => /(error|warning) CS\d{4}/.test(l)).map((l) => l.replace(/^.*Program\.cs/, "Program.cs").replace(/\s*\[[^\]]*\]\s*$/, "").trim()))];
  if (b.failed) return { built: false, errors, warnings, diag };
  const r = await new Promise((resolve) => {
    const p = execFile("dotnet", [join(dir, "bin/Debug/net10.0/snip.dll")], { cwd: dir, timeout: 15000, maxBuffer: 1 << 24 }, (err, stdout, stderr) =>
      resolve({ stdout, stderr, code: err ? (err.code ?? 1) : 0 }));
    if (stdin !== undefined) p.stdin.end(stdin); else p.stdin.end();
  });
  const ex = /Unhandled exception\. System\.(\w+)(?:: (.*))?/.exec(r.stderr);
  return { built: true, errors, warnings, diag, stdout: r.stdout, stderr: r.stderr, code: r.code, exception: ex ? ex[1] : null, exceptionMessage: ex ? ex[2] : null };
}

export async function makePool(workers = Number(process.env.CSP_POOL_WORKERS) || Math.max(1, Math.min(4, os.cpus().length)), root = process.env.CSP_POOL_DIR || join(os.tmpdir(), "csp-dotnet-pool")) {
  const dirs = [];
  for (let w = 0; w < workers; w++) {
    const d = join(root, "w" + w);
    mkdirSync(d, { recursive: true });
    writeFileSync(join(d, "snip.csproj"), csproj);
    if (!existsSync(join(d, "obj"))) {
      writeFileSync(join(d, "Program.cs"), "Console.WriteLine();\n");
      await run("dotnet", ["restore", "-v", "q"], { cwd: d });
    }
    dirs.push({ d, busy: false });
  }
  const queue = [];
  const pump = () => {
    for (const slot of dirs) {
      if (slot.busy || !queue.length) continue;
      const job = queue.shift();
      slot.busy = true;
      buildRun(slot.d, job.source, job.stdin).then(job.resolve, job.reject).finally(() => { slot.busy = false; pump(); });
    }
  };
  return { exec(source, stdin) { return new Promise((resolve, reject) => { queue.push({ source, stdin, resolve, reject }); pump(); }); } };
}

// Checks a result against { out, crash, error, warning }. Returns null when it matches, or a sentence saying what differs.
export function compare(r, want) {
  if (want.error) {
    if (r.built) return `expected build error ${want.error}, but it built`;
    if (!r.errors.includes(want.error)) return `expected ${want.error}, got ${r.errors.join(" ")}: ${r.diag[0] || ""}`;
    return null;
  }
  if (!r.built) return `did not build: ${r.diag.slice(0, 2).join(" | ")}`;
  if (want.warning && !r.warnings.includes(want.warning)) return `expected warning ${want.warning}, got ${r.warnings.join(" ") || "none"}`;
  if (want.crash) {
    if (!r.exception) return `expected a crash (${want.crash}); it exited ${r.code} printing ${JSON.stringify(norm(r.stdout))}`;
    if (r.exception !== want.crash) return `expected ${want.crash}, got ${r.exception}`;
  } else if (r.exception || r.code !== 0) return `crashed: ${r.exception || r.stderr.split("\n")[0]}`;
  if (want.out !== undefined && norm(r.stdout) !== norm(want.out)) return `printed ${JSON.stringify(norm(r.stdout))}, expected ${JSON.stringify(norm(want.out))}`;
  return null;
}

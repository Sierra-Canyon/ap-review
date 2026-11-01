// Compiles and runs every block of Java in a deck file with Java 21, and checks it against what the item says.
// Usage: node tools/verify-java.mjs <deck or item file> [report path]
// The file's default export is a deck ({ items }), an array of items, or { items }. Each checked item has a `verify`:
//   { out: "..." }                    run the item's `code` (statements) with its `methods`; stdout must equal out
//   { throws: "StringIndexOutOfBoundsException" }   running the item's code must throw that exception
//   { error: "incompatible types" }   compiling the item's code must fail with a message containing that text
//   { cases: [ { run, methods, out | throws | error } ] }   each case on its own (free responses: the sample solution plus calls)
// Code is wrapped as: public class Main { <methods> public static void main(String[] args) { <statements> } } <classes>
//   `classes` (on the item, its verify, or a case) holds other top-level classes, written without "public" (class Student { ... }).
//   `files` (on the verify or a case) is { "name.txt": "contents" }, written beside Main.java for code that reads a file.
// Needs a JDK (java 21) on the PATH. Set VERIFY_DIR to keep two runs apart.
import { execFile } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { promisify } from "node:util";
import os from "node:os";

const run = promisify(execFile);
const file = resolve(process.argv[2]);
const report = process.argv[3] || file.replace(/\.m?js$/, "") + ".verify.txt";
const mod = (await import(pathToFileURL(file))).default;
const items = Array.isArray(mod) ? mod : mod.items || (mod.forms ? mod.forms.flatMap((f) => f.items) : []);
const root = process.env.VERIFY_DIR || join(os.tmpdir(), "verify-java");
mkdirSync(root, { recursive: true });
const norm = (s) => String(s).replace(/\r\n/g, "\n").split("\n").map((l) => l.replace(/\s+$/, "")).join("\n").replace(/\n+$/, "");
const indent = (s, n) => String(s || "").split("\n").map((l) => " ".repeat(n) + l).join("\n");

const cases = [];
for (const it of items) {
  const v = it.verify;
  if (!v) { if (it.type !== "fr" && it.type !== "essay") cases.push({ id: it.id, missing: true }); continue; }
  const cls = (...xs) => xs.filter(Boolean).join("\n\n");
  if (v.cases) v.cases.forEach((c, k) => cases.push({ id: `${it.id}#${k + 1}`, run: c.run, methods: c.methods || "", classes: cls(it.classes, v.classes, c.classes), files: { ...(v.files || {}), ...(c.files || {}) }, want: c }));
  else cases.push({ id: it.id, run: it.code, methods: cls(it.methods, v.methods), classes: cls(it.classes, v.classes), files: v.files || {}, want: v });
}

async function check(c, slot) {
  if (c.missing) return { ...c, ok: false, msg: "no verify field" };
  const dir = join(root, String(slot)); mkdirSync(dir, { recursive: true });
  const src = `import java.util.*;\nimport java.io.*;\n\npublic class Main\n{\n${indent(c.methods, 4)}\n\n    public static void main(String[] args) throws Exception\n    {\n${indent(c.run, 8)}\n    }\n}\n\n${c.classes || ""}\n`;
  writeFileSync(join(dir, "Main.java"), src);
  for (const [name, body] of Object.entries(c.files || {})) writeFileSync(join(dir, name), body);
  let out = "", err = "", code = 0;
  try { ({ stdout: out, stderr: err } = await run("java", ["Main.java"], { cwd: dir, timeout: 20000, env: { ...process.env, JAVA_TOOL_OPTIONS: "" } })); }
  catch (e) { out = e.stdout || ""; err = e.stderr || ""; code = e.code ?? 1; }
  err = err.replace(/^Picked up JAVA_TOOL_OPTIONS.*\n?/m, "");
  const w = c.want;
  if (w.error !== undefined) {
    const compiled = !/error: compilation failed/.test(err);
    return { ...c, ok: !compiled && err.includes(w.error), msg: compiled ? "compiled, expected a compile error" : err.includes(w.error) ? "" : "compile error does not mention: " + w.error + "\n" + err.split("\n").slice(0, 4).join("\n") };
  }
  if (/error: compilation failed/.test(err)) return { ...c, ok: false, msg: "does not compile:\n" + err.split("\n").slice(0, 6).join("\n") };
  if (w.throws !== undefined) {
    const ok = err.includes("Exception in thread") && err.includes(w.throws);
    return { ...c, ok, got: out, msg: ok ? "" : "expected " + w.throws + ", got: " + (err.split("\n")[0] || "no exception") };
  }
  if (code && !w.throws) return { ...c, ok: false, got: out, msg: "crashed: " + err.split("\n")[0] };
  const ok = norm(out) === norm(w.out);
  return { ...c, ok, got: out, msg: ok ? "" : `expected:\n${norm(w.out)}\ngot:\n${norm(out)}` };
}

const results = []; let next = 0;
await Promise.all(Array.from({ length: Math.max(1, Math.min(4, os.cpus().length)) }, async (_, slot) => {
  while (next < cases.length) { const c = cases[next++]; results.push(await check(c, slot)); }
}));
results.sort((a, b) => cases.indexOf(cases.find((x) => x.id === a.id)) - cases.indexOf(cases.find((x) => x.id === b.id)));
const bad = results.filter((r) => !r.ok);
const lines = [`${results.length - bad.length} of ${results.length} checks pass. Java ${(await run("java", ["-version"]).catch((e) => e)).stderr?.match(/version "([^"]+)"/)?.[1] || "?"}. ${new Date().toISOString()}`, ""];
for (const r of results) lines.push(`${r.ok ? "PASS" : "FAIL"} ${r.id}${r.ok ? "" : "\n" + indent(r.msg, 4)}`);
writeFileSync(report, lines.join("\n") + "\n");
console.log(lines[0]);
for (const r of bad) console.log("FAIL", r.id, "\n" + indent(r.msg, 4));
process.exit(bad.length ? 1 : 0);

// The C# runner the book uses: compile, run, step, and test the course's C# in the browser.
//   compile(source)                 -> { ok, diagnostics, compiled }
//   run(source, { stdin })          -> { ok, diagnostics, stdout, exception, limit }
//   debug(source, { stdin })        -> { ok, diagnostics, pauses, stdout, exception, limit, pauseLimit }
//   runTests(code, given, calls)    -> { ok, diagnostics, results: [{ printed, exception }] }
//   formatDiagnostic(d), formatException(e)
import { parse } from "./parser.js";
import { CsError } from "./lexer.js";
import { check } from "./checker.js";
import { compileProgram, runCompiled, fmtDouble } from "./exec.js";

export { fmtDouble };

function sortDiags(ds) {
  const rank = (d) => (d.severity === "error" ? 0 : 1);
  return ds.slice().sort((a, b) => rank(a) - rank(b) || a.line - b.line || a.col - b.col);
}

export function compile(source) {
  let prog;
  try { prog = parse(source); }
  catch (e) {
    if (e instanceof CsError) return { ok: false, diagnostics: [{ severity: e.severity, code: e.code, message: e.message, line: e.line, col: e.col }] };
    throw e;
  }
  const { diags, top } = check(prog);
  const diagnostics = sortDiags(diags);
  if (diagnostics.some((d) => d.severity === "error")) return { ok: false, diagnostics };
  const compiled = compileProgram(prog, top);
  return { ok: true, diagnostics, compiled, prog };
}

export function run(source, opts = {}) {
  const c = compile(source);
  if (!c.ok) return { ok: false, diagnostics: c.diagnostics };
  const r = runCompiled(c.compiled, opts);
  return { ok: true, diagnostics: c.diagnostics, ...r };
}

export function debug(source, opts = {}) {
  return run(source, { ...opts, debug: true });
}

// Exercise tests: the student's functions, the hidden helpers, then one Console.WriteLine per call.
// Only the test lines run; the student's top-level statements, if any, do not.
export function runTests(code, given, calls, opts = {}) {
  const head = code + "\n" + (given || "") + "\n";
  const firstTestLine = head.split("\n").length;
  const source = head + calls.map((c) => `Console.WriteLine(${c});`).join("\n");
  const c = compile(source);
  const codeLines = code.split("\n").length;
  const where = (d) => (d.line <= codeLines ? "code" : d.line < firstTestLine ? "given" : "test");
  if (!c.ok) return { ok: false, diagnostics: c.diagnostics.map((d) => ({ ...d, where: where(d), test: d.line >= firstTestLine ? d.line - firstTestLine : null })) };
  const r = runCompiled(c.compiled, { ...opts, skipBeforeLine: codeLines + 1, onlyFromLine: firstTestLine, perStatement: true });
  if (r.exception) return { ok: true, diagnostics: [], results: calls.map(() => ({ printed: "", exception: r.exception })) };
  return {
    ok: true,
    diagnostics: c.diagnostics.filter((d) => where(d) === "code"),
    results: r.tests.map((t) => ({ printed: t.out.replace(/\n$/, ""), exception: t.exception })),
  };
}

export function formatDiagnostic(d) {
  return `Program.cs(${d.line},${d.col}): ${d.severity} ${d.code}: ${d.message}`;
}

export function formatException(e) {
  if (!e) return "";
  if (e.type === "StackOverflow") return `Stack overflow.\n   (the function keeps calling itself; line ${e.line})`;
  return `Unhandled exception. System.${e.type}: ${e.message}\n   at Program.cs:line ${e.line}`;
}

// Turns a checked program into JavaScript closures and runs it, with .NET's arithmetic, formatting, and exceptions.
// In debug mode it records a pause after every statement (and at every loop test and function entry) with the variables,
// so the page can step forward and back without running the program again.
import { isList, elemOf, isStr, plain, short, runtimeTypeName } from "./types.js";

export class CsRuntimeError extends Error { constructor(type, message) { super(message); this.type = type; } }
class StepLimit extends Error {}
class PauseLimit extends Error {}

const UNSET = Symbol("unset");
const BRK = 1, CNT = 2;

export class CsList {
  constructor(t, items = []) { this.t = t; this.a = items; }
}

// ------------------------------------------------------------------ formatting
export function fmtDouble(x) {
  if (Number.isNaN(x)) return "NaN";
  if (x === Infinity) return "∞";
  if (x === -Infinity) return "-∞";
  if (x === 0) return Object.is(x, -0) ? "-0" : "0";
  const ex = x.toExponential(); // shortest round-trip digits
  const m = /^(-?)(\d)(?:\.(\d+))?e([+-]\d+)$/.exec(ex);
  const sign = m[1], digits = m[2] + (m[3] || ""), e = Number(m[4]);
  if (e >= 17 || e < -4) {
    const mant = digits.length > 1 ? digits[0] + "." + digits.slice(1) : digits;
    const es = Math.abs(e) < 10 ? "0" + Math.abs(e) : String(Math.abs(e));
    return `${sign}${mant}E${e < 0 ? "-" : "+"}${es}`;
  }
  if (e < 0) return sign + "0." + "0".repeat(-e - 1) + digits;
  if (digits.length <= e + 1) return sign + digits + "0".repeat(e + 1 - digits.length);
  return sign + digits.slice(0, e + 1) + "." + digits.slice(e + 1);
}

export function toStr(v, t) {
  if (v === null || v === undefined || v === UNSET) return "";
  t = plain(t);
  switch (t) {
    case "int": return String(v);
    case "double": return fmtDouble(v);
    case "bool": return v ? "True" : "False";
    case "char": case "string": return v;
  }
  if (v instanceof CsList) return runtimeTypeName(v.t);
  if (typeof v === "number") return Number.isInteger(v) ? String(v) : fmtDouble(v);
  if (typeof v === "boolean") return v ? "True" : "False";
  return String(v);
}

function groupThousands(s) {
  const [i, f] = s.split(".");
  const neg = i.startsWith("-");
  const digits = neg ? i.slice(1) : i;
  const g = digits.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return (neg ? "-" : "") + g + (f !== undefined ? "." + f : "");
}
// true when x * 10^d is exactly an integer plus one half (x is a finite double, d >= 0)
function exactHalf(x, d) {
  const buf = new DataView(new ArrayBuffer(8));
  buf.setFloat64(0, x);
  const hi = buf.getUint32(0), lo = buf.getUint32(4);
  const expBits = (hi >>> 20) & 0x7ff;
  let mant = (BigInt(hi & 0xfffff) << 32n) | BigInt(lo);
  let e;
  if (expBits === 0) e = -1074; else { mant |= 1n << 52n; e = expBits - 1075; }
  if (e >= 0) return false;
  const num = mant * 10n ** BigInt(d) * 2n, den = 1n << BigInt(-e);
  if (num % den !== 0n) return false;
  return (num / den) % 2n === 1n;
}
function toFixedAway(x, d) {
  // .NET rounds the exact binary value, and an exact tie goes to the even digit (2.5 -> "2", 0.125 -> "0.12").
  const ax = Math.abs(x);
  let s = ax.toFixed(d);
  const m = 10 ** d, scaled = ax * m;
  if (Number.isFinite(scaled) && scaled < 9e15 && Math.abs((scaled % 1) - 0.5) < 1e-6 && exactHalf(ax, d)) {
    const fl = Math.floor(scaled), n = fl % 2 === 0 ? fl : fl + 1;
    const digits = String(n).padStart(d + 1, "0");
    s = d ? digits.slice(0, -d) + "." + digits.slice(-d) : digits;
  }
  return (x < 0 || Object.is(x, -0) ? "-" : "") + s;
}
export function formatWith(v, t, fmt) {
  t = plain(t);
  const m = /^([FfNnDdEePpXxCcGg])(\d*)$/.exec(fmt || "");
  if (!m) {
    if (fmt && /^[0#.,]+$/.test(fmt)) {
      // simple custom formats like 0.00 or 0
      const dec = fmt.includes(".") ? fmt.split(".")[1].length : 0;
      const x = t === "char" ? v.charCodeAt(0) : v;
      let s = toFixedAway(x, dec);
     
      if (fmt.includes(",")) s = groupThousands(s);
      return s;
    }
    return toStr(v, t);
  }
  const kind = m[1].toUpperCase();
  const n = m[2] === "" ? null : Number(m[2]);
  const x = typeof v === "number" ? v : t === "char" ? v.charCodeAt(0) : v;
  switch (kind) {
    case "F": { let s = toFixedAway(x, n ?? 2); return s; }
    case "N": { let s = toFixedAway(x, n ?? 2); return groupThousands(s); }
    case "D": { if (t !== "int") throw new CsRuntimeError("FormatException", "Format specifier was invalid."); const s = String(Math.abs(x)).padStart(n ?? 0, "0"); return (x < 0 ? "-" : "") + s; }
    case "P": { let s = toFixedAway(x * 100, n ?? 2); return groupThousands(s) + " %"; }
    case "C": { let s = toFixedAway(Math.abs(x), n ?? 2); s = "$" + groupThousands(s); return x < 0 ? "-" + s : s; }
    case "X": { if (t !== "int") throw new CsRuntimeError("FormatException", "Format specifier was invalid."); const s = (x >>> 0).toString(16); return (m[1] === "X" ? s.toUpperCase() : s).padStart(n ?? 0, "0"); }
    case "E": { const s = x.toExponential(n ?? 6); const [a, b] = s.split("e"); const ev = Number(b); return `${a}${m[1]}${ev < 0 ? "-" : "+"}${String(Math.abs(ev)).padStart(3, "0")}`; }
    case "G": return toStr(v, t);
  }
  return toStr(v, t);
}

// What the Variables pane shows for a value.
export function display(v, t) {
  if (v === UNSET || v === undefined) return { value: "(no value yet)" };
  t = plain(t);
  if (v === null) return { value: "null" };
  if (v instanceof CsList) {
    const et = elemOf(v.t);
    return { value: `Count = ${v.a.length}`, items: v.a.map((x) => display(x, et).value) };
  }
  switch (t) {
    case "string": return { value: JSON.stringify(v) };
    case "char": return { value: `'${v}'` };
    case "bool": return { value: v ? "true" : "false" };
    case "double": return { value: fmtDouble(v) };
    default: return { value: String(v) };
  }
}

// ------------------------------------------------------------------ arithmetic and conversions
function idiv(a, b) {
  if (b === 0) throw new CsRuntimeError("DivideByZeroException", "Attempted to divide by zero.");
  if (a === -2147483648 && b === -1) throw new CsRuntimeError("OverflowException", "Arithmetic operation resulted in an overflow.");
  return (a / b) | 0;
}
function imod(a, b) {
  if (b === 0) throw new CsRuntimeError("DivideByZeroException", "Attempted to divide by zero.");
  if (b === -1) return 0;
  return a % b;
}
function d2i(x) {
  if (Number.isNaN(x)) return 0;
  if (x >= 2147483647) return 2147483647;
  if (x <= -2147483648) return -2147483648;
  return Math.trunc(x);
}
function conv(v, from, to) {
  from = plain(from); to = plain(to);
  if (from === to || v === null) return v;
  if (from === "char") { const c = v.charCodeAt(0); return to === "char" ? v : c; }
  if (to === "char") { const n = from === "double" ? d2i(v) : v; return String.fromCharCode(((n % 65536) + 65536) % 65536); }
  if (to === "int" && from === "double") return d2i(v);
  return v;
}
function roundEven(x) {
  const r = Math.round(x);
  if (Math.abs(x % 1) === 0.5) return 2 * Math.round(x / 2);
  return r;
}

function parseIntCs(s) {
  if (s === null || s === undefined) throw new CsRuntimeError("ArgumentNullException", "Value cannot be null. (Parameter 's')");
  const m = /^[\s]*([+-]?)(\d+)[\s]*$/.exec(s);
  if (!m) throw new CsRuntimeError("FormatException", `The input string '${s}' was not in a correct format.`);
  const n = Number(m[1] + m[2].replace(/^0+(?=\d)/, ""));
  if (n > 2147483647 || n < -2147483648) throw new CsRuntimeError("OverflowException", "Value was either too large or too small for an Int32.");
  return n;
}
function parseDoubleCs(s) {
  if (s === null || s === undefined) throw new CsRuntimeError("ArgumentNullException", "Value cannot be null. (Parameter 's')");
  const t = s.trim();
  if (/^[+-]?(∞|Infinity)$/i.test(t)) return t.startsWith("-") ? -Infinity : Infinity;
  if (/^NaN$/i.test(t)) return NaN;
  if (!/^[+-]?(\d{1,3}(,\d{3})+|\d+)?(\.\d*)?([eE][+-]?\d+)?$/.test(t) || !/\d/.test(t)) throw new CsRuntimeError("FormatException", `The input string '${s}' was not in a correct format.`);
  return Number(t.replace(/,/g, ""));
}

const outOfRange = () => new CsRuntimeError("ArgumentOutOfRangeException", "Index was out of range. Must be non-negative and less than the size of the collection. (Parameter 'index')");
function listGet(l, i) {
  if (l === null) throw nullRef();
  if (i < 0 || i >= l.a.length) throw outOfRange();
  return l.a[i];
}
function strGet(s, i) {
  if (s === null) throw nullRef();
  if (i < 0 || i >= s.length) throw new CsRuntimeError("IndexOutOfRangeException", "Index was outside the bounds of the array.");
  return s[i];
}
const nullRef = () => new CsRuntimeError("NullReferenceException", "Object reference not set to an instance of an object.");

function eqVal(a, b) { return a === b; }
function compareCs(a, b, t) {
  if (t === "string") return a === b ? 0 : ordinalCompare(a, b);
  return a < b ? -1 : a > b ? 1 : 0;
}
// List<string>.Sort uses the current culture, which orders letters before case: "apple" < "Banana" < "cherry".
function ordinalCompare(a, b) { return a.localeCompare(b, "en-US"); }

// ------------------------------------------------------------------ the compiler
export function compileProgram(prog, top) {
  const fnOf = new Map(); // Func node -> compiled body
  const localFuncsOf = new Map(); // fnInfo -> [Func nodes declared directly in it]

  function collectFuncs(stmts, info, out) {
    for (const s of stmts) walkStmt(s);
    function walkStmt(s) {
      if (!s) return;
      switch (s.k) {
        case "Func": out.push(s); break;
        case "Block": s.body.forEach(walkStmt); break;
        case "If": walkStmt(s.then); walkStmt(s.else); break;
        case "While": case "Do": case "Foreach": walkStmt(s.body); break;
        case "For": walkStmt(s.body); break;
      }
    }
    return out;
  }

  // ---- variable access
  function getter(sym, cf) {
    const hops = cf.depth - sym.fn.depth, slot = sym.slot;
    if (hops === 0) return (fr) => fr.s[slot];
    if (hops === 1) return (fr) => fr.p.s[slot];
    return (fr) => { let f = fr; for (let i = 0; i < hops; i++) f = f.p; return f.s[slot]; };
  }
  function frameOf(sym, cf) {
    const hops = cf.depth - sym.fn.depth;
    if (hops === 0) return (fr) => fr;
    return (fr) => { let f = fr; for (let i = 0; i < hops; i++) f = f.p; return f; };
  }

  // ---- expressions: each compiles to (fr, ctx) => value
  function cx(e, cf) {
    let f = cxRaw(e, cf);
    if (e.cv !== undefined && e.k !== "Assign" && e.k !== "IncDec" && e.k !== "Call") { const v = e.cv; f = () => v; }
    if (e.to && plain(e.to) !== plain(e.t)) { const g = f, from = e.t, to = e.to; f = (fr, ctx) => conv(g(fr, ctx), from, to); }
    return f;
  }

  function cxRaw(e, cf) {
    switch (e.k) {
      case "Lit": { const v = e.value; return () => v; }
      case "Interp": {
        const parts = e.parts.map((p) => {
          if (p.text !== undefined) { const s = p.text; return () => s; }
          const g = cx(p.expr, cf), t = p.expr.t, fmt = p.fmt, align = p.align ? Number(p.align) : 0;
          return (fr, ctx) => {
            let s = fmt ? formatWith(g(fr, ctx), t, fmt) : toStr(g(fr, ctx), t);
            if (align > 0) s = s.padStart(align); else if (align < 0) s = s.padEnd(-align);
            return s;
          };
        });
        return (fr, ctx) => { let s = ""; for (const p of parts) s += p(fr, ctx); return s; };
      }
      case "Name": {
        if (e.sym.kind === "func") return () => null;
        const g = getter(e.sym, cf);
        return g;
      }
      case "Member": {
        if (e.static) {
          const v = e.cv;
          if (v !== undefined) return () => v;
          const map = { MaxValue: e.static === "double" || e.static === "Double" ? Number.MAX_VALUE : 2147483647, MinValue: e.static === "double" || e.static === "Double" ? -Number.MAX_VALUE : -2147483648, NaN: NaN, PositiveInfinity: Infinity, NegativeInfinity: -Infinity };
          const x = map[e.name];
          return () => x;
        }
        const o = cx(e.obj, cf);
        if (e.name === "Count") return (fr, ctx) => { const l = o(fr, ctx); if (l === null) throw nullRef(); return l.a.length; };
        if (e.name === "Length") return (fr, ctx) => { const s = o(fr, ctx); if (s === null) throw nullRef(); return s.length; };
        throw new Error("member " + e.name);
      }
      case "Index": {
        const o = cx(e.obj, cf), i = cx(e.index, cf);
        if (e.idx === "list") return (fr, ctx) => { const l = o(fr, ctx); return listGet(l, i(fr, ctx)); };
        return (fr, ctx) => { const s = o(fr, ctx); return strGet(s, i(fr, ctx)); };
      }
      case "Unary": {
        const o = cx(e.operand, cf);
        if (e.op === "!") return (fr, ctx) => !o(fr, ctx);
        if (e.op === "~") return (fr, ctx) => ~o(fr, ctx);
        if (e.op === "+") return o;
        if (e.t === "int") return (fr, ctx) => (-o(fr, ctx)) | 0;
        return (fr, ctx) => -o(fr, ctx);
      }
      case "Cast": {
        const o = cx(e.operand, cf), from = e.from, to = e.t;
        return (fr, ctx) => conv(o(fr, ctx), from, to);
      }
      case "Binary": return binary(e, cf);
      case "Cond": {
        const t = cx(e.test, cf), a = cx(e.a, cf), b = cx(e.b, cf);
        return (fr, ctx) => (t(fr, ctx) ? a(fr, ctx) : b(fr, ctx));
      }
      case "Assign": return assign(e, cf);
      case "IncDec": return incdec(e, cf);
      case "Call": return call(e, cf);
      case "New": {
        const lt = e.listType;
        const inits = (e.init || []).map((x) => cx(x, cf));
        const src = e.copyFrom ? cx(e.args[0], cf) : null;
        const cap = e.capacity ? cx(e.args[0], cf) : null;
        return (fr, ctx) => {
          let items = [];
          if (src) { const l = src(fr, ctx); if (l === null) throw new CsRuntimeError("ArgumentNullException", "Value cannot be null. (Parameter 'collection')"); items = l.a.slice(); }
          if (cap) { const c = cap(fr, ctx); if (c < 0) throw new CsRuntimeError("ArgumentOutOfRangeException", "Non-negative number required. (Parameter 'capacity')"); }
          for (const f of inits) items.push(f(fr, ctx));
          return new CsList(lt, items);
        };
      }
    }
    throw new Error("cannot compile " + e.k);
  }

  function binop(op, t, opndT) {
    if (t === "string") {
      return null;
    }
    switch (op) {
      case "+": return t === "int" ? (a, b) => (a + b) | 0 : (a, b) => a + b;
      case "-": return t === "int" ? (a, b) => (a - b) | 0 : (a, b) => a - b;
      case "*": return t === "int" ? (a, b) => Math.imul(a, b) : (a, b) => a * b;
      case "/": return t === "int" ? idiv : (a, b) => a / b;
      case "%": return t === "int" ? imod : (a, b) => a % b;
      case "<": return (a, b) => a < b;
      case ">": return (a, b) => a > b;
      case "<=": return (a, b) => a <= b;
      case ">=": return (a, b) => a >= b;
      case "==": return (a, b) => a === b || (opndT === "double" && a !== a && b !== b ? false : a === b);
      case "!=": return (a, b) => a !== b;
      case "&": return t === "bool" ? (a, b) => a && b : (a, b) => a & b;
      case "|": return t === "bool" ? (a, b) => a || b : (a, b) => a | b;
      case "^": return t === "bool" ? (a, b) => a !== b : (a, b) => a ^ b;
      case "<<": return (a, b) => a << (b & 31);
      case ">>": return (a, b) => a >> (b & 31);
    }
    throw new Error("op " + op);
  }

  function binary(e, cf) {
    const l = cx(e.left, cf), r = cx(e.right, cf);
    if (e.op === "&&") return (fr, ctx) => l(fr, ctx) && r(fr, ctx);
    if (e.op === "||") return (fr, ctx) => l(fr, ctx) || r(fr, ctx);
    if (e.concat) {
      const lt = e.left.to || e.left.t, rt = e.right.to || e.right.t;
      return (fr, ctx) => toStr(l(fr, ctx), lt) + toStr(r(fr, ctx), rt);
    }
    const opT = e.left.to || e.left.t;
    const f = binop(e.op, e.t, opT);
    return (fr, ctx) => f(l(fr, ctx), r(fr, ctx));
  }

  // An assignable place: { get(fr,ctx), set(fr,ctx,v) } evaluated once for compound assignment.
  function place(t, cf) {
    if (t.k === "Name") {
      const sym = t.sym, slot = sym.slot, fo = frameOf(sym, cf);
      return { prep: (fr) => fo(fr), get: (f) => f.s[slot], set: (f, v) => { f.s[slot] = v; } };
    }
    if (t.k === "Index") {
      const o = cx(t.obj, cf), i = cx(t.index, cf);
      return {
        prep: (fr, ctx) => { const l = o(fr, ctx); const k = i(fr, ctx); if (l === null) throw nullRef(); return [l, k]; },
        get: ([l, k]) => listGet(l, k),
        set: ([l, k], v) => { if (k < 0 || k >= l.a.length) throw outOfRange(); l.a[k] = v; },
      };
    }
    throw new Error("place " + t.k);
  }

  function assign(e, cf) {
    const p = place(e.target, cf);
    const v = cx(e.value, cf);
    if (e.op === "=") {
      if (e.target.k === "Index") return (fr, ctx) => { const pr = p.prep(fr, ctx); const x = v(fr, ctx); p.set(pr, x); return x; };
      return (fr, ctx) => { const pr = p.prep(fr, ctx); const x = v(fr, ctx); p.set(pr, x); return x; };
    }
    const tt = e.target.t, ot = e.opType, lt = e.target.to || tt, rt = e.value.to || e.value.t;
    let f;
    if (ot === "string") f = (a, b) => toStr(a, lt) + toStr(b, rt);
    else f = binop(e.bop, ot, lt);
    return (fr, ctx) => {
      const pr = p.prep(fr, ctx);
      const cur = conv(p.get(pr), tt, ot === "string" ? tt : ot);
      const res = conv(f(cur, v(fr, ctx)), ot, tt);
      p.set(pr, res);
      return res;
    };
  }

  function incdec(e, cf) {
    const p = place(e.operand, cf);
    const t = e.operand.t, delta = e.op === "++" ? 1 : -1;
    const step = t === "int" ? (x) => (x + delta) | 0 : t === "char" ? (x) => String.fromCharCode((x.charCodeAt(0) + delta + 65536) % 65536) : (x) => x + delta;
    if (e.prefix) return (fr, ctx) => { const pr = p.prep(fr, ctx); const n = step(p.get(pr)); p.set(pr, n); return n; };
    return (fr, ctx) => { const pr = p.prep(fr, ctx); const o = p.get(pr); p.set(pr, step(o)); return o; };
  }

  // ---- calls
  function call(e, cf) {
    const args = e.args.map((a) => cx(a, cf));
    if (e.user) return userCall(e, cf, args);
    const b = e.builtin;
    if (b.kind === "static") return staticCall(e, b, args);
    const recv = cx(e.callee.obj, cf);
    return instCall(e, b, recv, args);
  }

  function userCall(e, cf, args) {
    const sym = e.user;
    const fget = getter(sym, cf);
    const info = () => sym.node.fn;
    const srcText = (a) => prog.src.slice(a.start, a.end);
    const argText = e.args.map(srcText);
    return (fr, ctx) => {
      const fv = fget(fr);
      const vals = args.map((a) => a(fr, ctx));
      const line = ctx.line;
      const r = invoke(fv, vals, ctx, argText);
      ctx.line = line;
      return r;
    };
  }

  function staticCall(e, b, args) {
    const ats = e.args.map((a) => a.to || a.t);
    const T = b.type;
    switch (T === "String" ? "string" : T === "Int32" ? "int" : T === "Double" ? "double" : T === "Char" ? "char" : T) {
      case "Console":
        switch (b.name) {
          case "WriteLine": if (!args.length) return (fr, ctx) => { ctx.write("\n"); };
            return (fr, ctx) => { ctx.write(toStr(args[0](fr, ctx), ats[0]) + "\n"); };
          case "Write": return (fr, ctx) => { ctx.write(toStr(args[0](fr, ctx), ats[0])); };
          case "ReadLine": return (fr, ctx) => ctx.readLine();
          case "Clear": return () => undefined;
        }
        break;
      case "Math": {
        const a = args;
        switch (b.name) {
          case "Max": return (fr, ctx) => { const x = a[0](fr, ctx), y = a[1](fr, ctx); return Number.isNaN(x) || Number.isNaN(y) ? NaN : Math.max(x, y); };
          case "Min": return (fr, ctx) => { const x = a[0](fr, ctx), y = a[1](fr, ctx); return Number.isNaN(x) || Number.isNaN(y) ? NaN : Math.min(x, y); };
          case "Abs": return e.t === "int" ? (fr, ctx) => { const x = a[0](fr, ctx); if (x === -2147483648) throw new CsRuntimeError("OverflowException", "Negating the minimum value of a twos complement number is invalid."); return Math.abs(x); } : (fr, ctx) => Math.abs(a[0](fr, ctx));
          case "Sqrt": return (fr, ctx) => Math.sqrt(a[0](fr, ctx));
          case "Pow": return (fr, ctx) => Math.pow(a[0](fr, ctx), a[1](fr, ctx));
          case "Round": if (a.length === 2) return (fr, ctx) => { const x = a[0](fr, ctx), d = a[1](fr, ctx); if (d < 0 || d > 15) throw new CsRuntimeError("ArgumentOutOfRangeException", "Rounding digits must be between 0 and 15, inclusive. (Parameter 'digits')"); const m = 10 ** d; return roundEven(x * m) / m; };
            return (fr, ctx) => roundEven(a[0](fr, ctx));
          case "Floor": return (fr, ctx) => Math.floor(a[0](fr, ctx));
          case "Ceiling": return (fr, ctx) => Math.ceil(a[0](fr, ctx));
          case "Clamp": return (fr, ctx) => { const v = a[0](fr, ctx), lo = a[1](fr, ctx), hi = a[2](fr, ctx); if (lo > hi) throw new CsRuntimeError("ArgumentException", `'${toStr(lo, e.t)}' cannot be greater than ${toStr(hi, e.t)}.`); return Math.min(Math.max(v, lo), hi); };
          case "Sign": return (fr, ctx) => { const x = a[0](fr, ctx); if (Number.isNaN(x)) throw new CsRuntimeError("ArithmeticException", "Function does not accept floating point Not-a-Number values."); return Math.sign(x) | 0; };
        }
        break;
      }
      case "int": if (b.name === "Parse") return (fr, ctx) => parseIntCs(args[0](fr, ctx)); break;
      case "double": if (b.name === "Parse") return (fr, ctx) => parseDoubleCs(args[0](fr, ctx)); break;
      case "string":
        switch (b.name) {
          case "Join": { const lt = e.args[1].t; return (fr, ctx) => { const sep = args[0](fr, ctx) ?? ""; const l = args[1](fr, ctx); if (l === null) throw new CsRuntimeError("ArgumentNullException", "Value cannot be null. (Parameter 'values')"); return l.a.map((x) => toStr(x, elemOf(lt))).join(sep); }; }
          case "IsNullOrEmpty": return (fr, ctx) => { const s = args[0](fr, ctx); return s === null || s === ""; };
          case "IsNullOrWhiteSpace": return (fr, ctx) => { const s = args[0](fr, ctx); return s === null || s.trim() === ""; };
        }
        break;
      case "char": {
        const f = {
          IsDigit: (c) => /[0-9]/.test(c), IsLetter: (c) => /\p{L}/u.test(c), IsLetterOrDigit: (c) => /[\p{L}\p{Nd}]/u.test(c),
          IsUpper: (c) => /\p{Lu}/u.test(c), IsLower: (c) => /\p{Ll}/u.test(c), IsWhiteSpace: (c) => /\s/.test(c),
          ToUpper: (c) => c.toUpperCase(), ToLower: (c) => c.toLowerCase(),
        }[b.name];
        return (fr, ctx) => f(args[0](fr, ctx));
      }
      case "Convert": {
        const at = ats[0];
        if (b.name === "ToInt32") return (fr, ctx) => {
          const v = args[0](fr, ctx);
          if (at === "string" || at === "string?") return v === null ? 0 : parseIntCs(v);
          if (at === "double") { if (Number.isNaN(v) || v >= 2147483647.5 || v < -2147483648.5) throw new CsRuntimeError("OverflowException", "Value was either too large or too small for an Int32."); return roundEven(v); }
          if (at === "char") return v.charCodeAt(0);
          if (at === "bool") return v ? 1 : 0;
          return v;
        };
        if (b.name === "ToDouble") return (fr, ctx) => {
          const v = args[0](fr, ctx);
          if (at === "string" || at === "string?") return v === null ? 0 : parseDoubleCs(v);
          if (at === "char") throw new CsRuntimeError("InvalidCastException", "Invalid cast from 'Char' to 'Double'.");
          if (at === "bool") return v ? 1 : 0;
          return v;
        };
        if (b.name === "ToString") return (fr, ctx) => toStr(args[0](fr, ctx), at);
        break;
      }
    }
    throw new Error(`static ${T}.${b.name}`);
  }

  function instCall(e, b, recv, args) {
    const name = b.name;
    const rt = b.recvType;
    if (b.recv === "string") {
      const S = (fr, ctx) => { const s = recv(fr, ctx); if (s === null) throw nullRef(); return s; };
      const at = e.args.map((a) => a.to || a.t);
      switch (name) {
        case "ToUpper": return (fr, ctx) => S(fr, ctx).toUpperCase();
        case "ToLower": return (fr, ctx) => S(fr, ctx).toLowerCase();
        case "Trim": return (fr, ctx) => S(fr, ctx).trim();
        case "TrimStart": return (fr, ctx) => S(fr, ctx).trimStart();
        case "TrimEnd": return (fr, ctx) => S(fr, ctx).trimEnd();
        case "Contains": return (fr, ctx) => { const s = S(fr, ctx), v = args[0](fr, ctx); if (v === null) throw new CsRuntimeError("ArgumentNullException", "Value cannot be null. (Parameter 'value')"); return s.includes(v); };
        case "StartsWith": return (fr, ctx) => { const s = S(fr, ctx), v = args[0](fr, ctx); if (v === null) throw new CsRuntimeError("ArgumentNullException", "Value cannot be null. (Parameter 'value')"); return s.startsWith(v); };
        case "EndsWith": return (fr, ctx) => { const s = S(fr, ctx), v = args[0](fr, ctx); if (v === null) throw new CsRuntimeError("ArgumentNullException", "Value cannot be null. (Parameter 'value')"); return s.endsWith(v); };
        case "IndexOf": return (fr, ctx) => S(fr, ctx).indexOf(args[0](fr, ctx));
        case "LastIndexOf": return (fr, ctx) => S(fr, ctx).lastIndexOf(args[0](fr, ctx));
        case "Substring":
          if (args.length === 1) return (fr, ctx) => { const s = S(fr, ctx), i = args[0](fr, ctx); if (i < 0) throw new CsRuntimeError("ArgumentOutOfRangeException", "StartIndex cannot be less than zero. (Parameter 'startIndex')"); if (i > s.length) throw new CsRuntimeError("ArgumentOutOfRangeException", "startIndex cannot be larger than length of string. (Parameter 'startIndex')"); return s.slice(i); };
          return (fr, ctx) => {
            const s = S(fr, ctx), i = args[0](fr, ctx), n = args[1](fr, ctx);
            if (i < 0) throw new CsRuntimeError("ArgumentOutOfRangeException", "StartIndex cannot be less than zero. (Parameter 'startIndex')");
            if (i > s.length) throw new CsRuntimeError("ArgumentOutOfRangeException", "startIndex cannot be larger than length of string. (Parameter 'startIndex')");
            if (n < 0) throw new CsRuntimeError("ArgumentOutOfRangeException", "Length cannot be less than zero. (Parameter 'length')");
            if (i + n > s.length) throw new CsRuntimeError("ArgumentOutOfRangeException", "Index and length must refer to a location within the string. (Parameter 'length')");
            return s.substr(i, n);
          };
        case "Replace": return (fr, ctx) => { const s = S(fr, ctx), a = args[0](fr, ctx), c = args[1](fr, ctx); if (a === null) throw new CsRuntimeError("ArgumentNullException", "Value cannot be null. (Parameter 'oldValue')"); if (a === "") throw new CsRuntimeError("ArgumentException", "The value cannot be an empty string. (Parameter 'oldValue')"); return s.split(a).join(c ?? ""); };
        case "PadLeft": return (fr, ctx) => { const s = S(fr, ctx), n = args[0](fr, ctx), c = args[1] ? args[1](fr, ctx) : " "; if (n < 0) throw new CsRuntimeError("ArgumentOutOfRangeException", "Non-negative number required. (Parameter 'totalWidth')"); return s.padStart(n, c); };
        case "PadRight": return (fr, ctx) => { const s = S(fr, ctx), n = args[0](fr, ctx), c = args[1] ? args[1](fr, ctx) : " "; if (n < 0) throw new CsRuntimeError("ArgumentOutOfRangeException", "Non-negative number required. (Parameter 'totalWidth')"); return s.padEnd(n, c); };
        case "Equals": return (fr, ctx) => S(fr, ctx) === args[0](fr, ctx);
        case "ToString": return (fr, ctx) => S(fr, ctx);
        case "Count": return (fr, ctx) => { const s = recv(fr, ctx); if (s === null) throw new CsRuntimeError("ArgumentNullException", "Value cannot be null. (Parameter 'source')"); return s.length; };
      }
    }
    if (b.recv === "list") {
      const et = elemOf(rt);
      const L = (fr, ctx) => { const l = recv(fr, ctx); if (l === null) throw nullRef(); return l; };
      switch (name) {
        case "Add": return (fr, ctx) => { const l = L(fr, ctx); l.a.push(args[0](fr, ctx)); };
        case "AddRange": return (fr, ctx) => { const l = L(fr, ctx); const o = args[0](fr, ctx); if (o === null) throw new CsRuntimeError("ArgumentNullException", "Value cannot be null. (Parameter 'collection')"); l.a.push(...o.a.slice()); };
        case "Insert": return (fr, ctx) => { const l = L(fr, ctx); const i = args[0](fr, ctx), v = args[1](fr, ctx); if (i < 0 || i > l.a.length) throw new CsRuntimeError("ArgumentOutOfRangeException", "Index must be within the bounds of the List. (Parameter 'index')"); l.a.splice(i, 0, v); };
        case "Remove": return (fr, ctx) => { const l = L(fr, ctx); const v = args[0](fr, ctx); const i = l.a.findIndex((x) => eqVal(x, v)); if (i < 0) return false; l.a.splice(i, 1); return true; };
        case "RemoveAt": return (fr, ctx) => { const l = L(fr, ctx); const i = args[0](fr, ctx); if (i < 0 || i >= l.a.length) throw outOfRange(); l.a.splice(i, 1); };
        case "Contains": return (fr, ctx) => { const l = L(fr, ctx); const v = args[0](fr, ctx); return l.a.some((x) => eqVal(x, v)); };
        case "IndexOf": return (fr, ctx) => { const l = L(fr, ctx); const v = args[0](fr, ctx); return l.a.findIndex((x) => eqVal(x, v)); };
        case "Clear": return (fr, ctx) => { L(fr, ctx).a.length = 0; };
        case "Reverse": return (fr, ctx) => { L(fr, ctx).a.reverse(); };
        case "Sort": return (fr, ctx) => {
          const l = L(fr, ctx);
          if (isList(et)) throw new CsRuntimeError("InvalidOperationException", "Failed to compare two elements in the array.");
          l.a.sort((x, y) => (et === "string" ? (x === null ? (y === null ? 0 : -1) : y === null ? 1 : ordinalCompare(x, y)) : x < y ? -1 : x > y ? 1 : 0));
        };
        case "ToString": return (fr, ctx) => runtimeTypeName(L(fr, ctx).t);
        case "Count": return (fr, ctx) => L(fr, ctx).a.length;
        case "Sum": return (fr, ctx) => { const a = L(fr, ctx).a; let s = 0; for (const x of a) s = et === "int" ? (() => { const r = s + x; if (r > 2147483647 || r < -2147483648) throw new CsRuntimeError("OverflowException", "Arithmetic operation resulted in an overflow."); return r; })() : s + x; return s; };
        case "Max": case "Min": return (fr, ctx) => { const a = L(fr, ctx).a; if (!a.length) throw new CsRuntimeError("InvalidOperationException", "Sequence contains no elements"); return a.reduce((m, x) => (name === "Max" ? (x > m ? x : m) : (x < m ? x : m))); };
        case "Average": return (fr, ctx) => { const a = L(fr, ctx).a; if (!a.length) throw new CsRuntimeError("InvalidOperationException", "Sequence contains no elements"); return a.reduce((s, x) => s + x, 0) / a.length; };
      }
    }
    if (b.recv === "value") {
      if (name === "ToString") {
        const t = rt;
        if (args.length) return (fr, ctx) => formatWith(recv(fr, ctx), t, args[0](fr, ctx));
        return (fr, ctx) => toStr(recv(fr, ctx), t);
      }
      if (name === "Equals") return (fr, ctx) => recv(fr, ctx) === args[0](fr, ctx);
    }
    throw new Error(`instance ${b.recv}.${name}`);
  }

  // ---- invoking a local function value { node, env }
  function invoke(fv, vals, ctx, argText) {
    const node = fv.node, info = node.fn;
    if (++ctx.depth > 2000) throw new CsRuntimeError("StackOverflow", "Stack overflow.");
    const fr = { s: new Array(info.slots).fill(UNSET), p: fv.env, fn: info, line: node.line, cur: null };
    info.params.forEach((p, i) => { fr.s[p.slot] = vals[i]; });
    for (const f of localFuncsOf.get(info)) fr.s[f.sym.slot] = { node: f, env: fr };
    ctx.stack.push(fr);
    if (ctx.debug) {
      const desc = info.params.length ? info.params.map((p, i) => {
        const dv = display(vals[i], p.type), src = argText && argText[i];
        if (dv.items) return `${p.name} is ${src && src !== p.name && /^\w+$/.test(src) ? `the list ${src}` : "a list"}, with ${dv.items.length} item${dv.items.length === 1 ? "" : "s"}`;
        return `${p.name} is ${dv.value}${src && src !== p.name && !/^[-\d"']/.test(src) && src !== dv.value ? ` (from ${src})` : ""}`;
      }).join(", ") : "";
      ctx.pause(node.line, `${node.name} starts.${desc ? " " + desc + "." : ""}`, fr, { vis: info.params });
    }
    let result;
    try {
      const sig = fnOf.get(node)(fr, ctx);
      if (sig && typeof sig === "object") result = sig.v;
    } finally {
      ctx.stack.pop();
      ctx.depth--;
    }
    if (ctx.debug) ctx.events.push({ kind: "return", name: node.name, value: info.ret === "void" ? null : display(result, info.ret).value, void: info.ret === "void" });
    return result;
  }

  // ---- statements: each compiles to (fr, ctx) => signal
  function cs(st, cf) {
    const line = st.line;
    const f = csRaw(st, cf);
    if (st.k === "Block" || st.k === "Func" || st.k === "Empty") return f;
    return (fr, ctx) => {
      if (++ctx.steps > ctx.maxSteps) throw new StepLimit();
      ctx.line = line;
      fr.cur = st;
      return f(fr, ctx);
    };
  }

  function srcOf(node) { return prog.src.slice(node.start, node.end).replace(/\s+/g, " "); }

  function csRaw(st, cf) {
    switch (st.k) {
      case "Block": {
        const body = st.body.map((s) => cs(s, cf)).filter(Boolean);
        const n = body.length;
        return (fr, ctx) => { for (let i = 0; i < n; i++) { const r = body[i](fr, ctx); if (r) return r; } return 0; };
      }
      case "Empty": return () => 0;
      case "Func": { fnOf.set(st, compileFunc(st)); return () => 0; }
      case "VarDecl": {
        const parts = st.decls.map((d) => ({ slot: d.sym.slot, init: d.init ? cx(d.init, cf) : null, sym: d.sym }));
        return (fr, ctx) => {
          const snap = ctx.debug ? ctx.before(fr) : null;
          for (const p of parts) fr.s[p.slot] = p.init ? p.init(fr, ctx) : UNSET;
          if (ctx.debug) ctx.after(st, fr, snap);
          return 0;
        };
      }
      case "ExprStmt": {
        const e = cx(st.expr, cf);
        return (fr, ctx) => {
          const snap = ctx.debug ? ctx.before(fr) : null;
          e(fr, ctx);
          if (ctx.debug) ctx.after(st, fr, snap);
          return 0;
        };
      }
      case "If": {
        const c = cx(st.cond, cf), t = cs(st.then, cf), el = st.else ? cs(st.else, cf) : null;
        const text = srcOf(st.cond);
        return (fr, ctx) => {
          const v = c(fr, ctx);
          if (ctx.debug) ctx.test(st, fr, `The test ${text} is ${v ? "true" : "false"}, so ${v ? "the if body runs" : el ? "the else part runs" : "the body is skipped"}.`);
          if (v) return t(fr, ctx);
          return el ? el(fr, ctx) : 0;
        };
      }
      case "While": {
        const c = cx(st.cond, cf), b = cs(st.body, cf);
        const text = srcOf(st.cond);
        return (fr, ctx) => {
          for (;;) {
            if (++ctx.steps > ctx.maxSteps) throw new StepLimit();
            ctx.line = st.line;
            const v = c(fr, ctx);
            if (ctx.debug) ctx.test(st, fr, `The test ${text} is ${v ? "true, so the loop body runs" : "false, so the loop ends"}.`);
            if (!v) return 0;
            const r = b(fr, ctx);
            if (r === BRK) return 0;
            if (r && r !== CNT) return r;
          }
        };
      }
      case "Do": {
        const c = cx(st.cond, cf), b = cs(st.body, cf);
        const text = srcOf(st.cond);
        return (fr, ctx) => {
          for (;;) {
            const r = b(fr, ctx);
            if (r === BRK) return 0;
            if (r && r !== CNT) return r;
            if (++ctx.steps > ctx.maxSteps) throw new StepLimit();
            const v = c(fr, ctx);
            if (ctx.debug) ctx.test(st, fr, `The test ${text} is ${v ? "true, so the loop runs again" : "false, so the loop ends"}.`, st.cond.line);
            if (!v) return 0;
          }
        };
      }
      case "For": {
        const init = st.init.flatMap((i) => (i.k === "VarDecl"
          ? i.decls.map((d) => { const slot = d.sym.slot, g = d.init ? cx(d.init, cf) : null; return (fr, ctx) => { fr.s[slot] = g ? g(fr, ctx) : UNSET; }; })
          : [(() => { const e = cx(i, cf); return (fr, ctx) => { e(fr, ctx); }; })()]));
        const c = st.cond ? cx(st.cond, cf) : () => true;
        const upd = st.update.map((u) => cx(u, cf));
        const b = cs(st.body, cf);
        const text = st.cond ? srcOf(st.cond) : "";
        const updText = st.update.map(srcOf).join(", ");
        const loopVars = st.init.filter((i) => i.k === "VarDecl").flatMap((i) => i.decls.map((d) => d.sym));
        return (fr, ctx) => {
          fr.cur = st;
          const snap0 = ctx.debug ? ctx.before(fr) : null;
          for (const i of init) i(fr, ctx);
          if (ctx.debug) ctx.after(st, fr, snap0, loopVars.length ? `${loopVars.map((v) => `${v.name} starts at ${display(fr.s[v.slot], v.type).value}`).join(", ")}.` : null);
          for (;;) {
            if (++ctx.steps > ctx.maxSteps) throw new StepLimit();
            ctx.line = st.line;
            fr.cur = st;
            const v = c(fr, ctx);
            if (ctx.debug && st.cond) ctx.test(st, fr, `The test ${text} is ${v ? "true, so the loop body runs" : "false, so the loop ends"}.`);
            if (!v) return 0;
            const r = b(fr, ctx);
            if (r === BRK) return 0;
            if (r && r !== CNT) return r;
            ctx.line = st.line;
            fr.cur = st;
            const snap = ctx.debug ? ctx.before(fr) : null;
            for (const u of upd) u(fr, ctx);
            if (ctx.debug && upd.length) ctx.after({ ...st, k: "ForUpdate" }, fr, snap, null, updText);
          }
        };
      }
      case "Foreach": {
        const coll = cx(st.coll, cf), b = cs(st.body, cf), slot = st.sym.slot, et = st.sym.type;
        const cv = st.conv;
        return (fr, ctx) => {
          const c = coll(fr, ctx);
          if (c === null) throw nullRef();
          if (typeof c === "string") {
            for (let i = 0; i < c.length; i++) {
              if (++ctx.steps > ctx.maxSteps) throw new StepLimit();
              ctx.line = st.line; fr.cur = st;
              fr.s[slot] = cv ? conv(c[i], cv.from, cv.to) : c[i];
              if (ctx.debug) ctx.test(st, fr, `${st.name} is ${display(fr.s[slot], et).value}.`);
              const r = b(fr, ctx);
              if (r === BRK) return 0;
              if (r && r !== CNT) return r;
            }
            if (ctx.debug) ctx.test(st, fr, "No items left, so the loop ends.");
            return 0;
          }
          const arr = c.a, n0 = arr.length;
          for (let i = 0; ; i++) {
            if (arr.length !== n0 || c.__mod) throw new CsRuntimeError("InvalidOperationException", "Collection was modified; enumeration operation may not execute.");
            if (i >= arr.length) break;
            if (++ctx.steps > ctx.maxSteps) throw new StepLimit();
            ctx.line = st.line; fr.cur = st;
            fr.s[slot] = cv ? conv(arr[i], cv.from, cv.to) : arr[i];
            if (ctx.debug) ctx.test(st, fr, `${st.name} is ${display(fr.s[slot], et).value}.`);
            const r = b(fr, ctx);
            if (r === BRK) return 0;
            if (r && r !== CNT) return r;
          }
          if (ctx.debug) ctx.test(st, fr, "No items left, so the loop ends.");
          return 0;
        };
      }
      case "Break": return (fr, ctx) => { if (ctx.debug) ctx.test(st, fr, "break leaves the loop."); return BRK; };
      case "Continue": return (fr, ctx) => { if (ctx.debug) ctx.test(st, fr, "continue skips to the next pass of the loop."); return CNT; };
      case "Return": {
        const e = st.expr ? cx(st.expr, cf) : null;
        const isTop = cf.isTop;
        const name = cf.name, rt = cf.ret;
        return (fr, ctx) => {
          const v = e ? e(fr, ctx) : undefined;
          if (ctx.debug) {
            const evs = ctx.takeEvents();
            ctx.pause(st.line, isTop ? "return ends the program." : e ? `${name} returns ${display(v, rt).value}.` : `${name} ends here.`, fr, st, evs);
          }
          return { v };
        };
      }
    }
    throw new Error("statement " + st.k);
  }

  function compileFunc(node) {
    const info = node.fn;
    localFuncsOf.set(info, collectFuncs(node.body.body, info, []));
    const body = cs(node.body, info);
    return (fr, ctx) => {
      const r = body(fr, ctx);
      if (ctx.debug && (!r || typeof r !== "object")) ctx.pause(node.body.endLine || node.line, `${node.name} ends.`, fr, null);
      return r;
    };
  }

  localFuncsOf.set(top, collectFuncs(prog.body, top, []));
  const main = prog.body.map((s) => ({ line: s.line, endLine: s.endLine, f: cs(s, top), func: s.k === "Func" }));
  return { main, top, localFuncsOf };
}

// ------------------------------------------------------------------ running
export function runCompiled(compiled, opts = {}) {
  const { stdin = "", maxSteps = 5_000_000, debug = false, maxPauses = 3000, onlyFromLine = 0, perStatement = null, skipBeforeLine = 0 } = opts;
  const lines = stdin === null ? [] : stdin.replace(/\r\n/g, "\n").split("\n");
  if (lines.length && lines[lines.length - 1] === "" && stdin.endsWith("\n")) lines.pop();
  if (stdin === "") lines.length = 0;
  let out = "";
  const pauses = [];
  const ctx = {
    steps: 0, maxSteps, line: 0, depth: 0, debug, stack: [], events: [],
    write(s) { out += s; if (out.length > 2_000_000) throw new CsRuntimeError("OutputLimit", "The program printed more than 2,000,000 characters."); if (debug) ctx.events.push({ kind: "out", text: s }); },
    readLine() { const v = lines.length ? lines.shift() : null; if (debug) ctx.events.push({ kind: "in", text: v }); return v; },
    takeEvents() { const e = ctx.events; ctx.events = []; return e; },
    before(fr) { return snapFrameValues(fr); },
    after(st, fr, snap, override = null, updText = null) {
      const evs = ctx.takeEvents();
      const note = override || describe(st, fr, snap, evs, updText);
      ctx.pause(st.line, note, fr, st, evs);
    },
    test(st, fr, note, line) { const evs = ctx.takeEvents(); ctx.pause(line || st.line, note, fr, st, evs); },
    pause(line, note, fr, st, evs = null) {
      if (!debug) return;
      if (pauses.length >= maxPauses) throw new PauseLimit();
      pauses.push({ line, note, stdout: out, frames: snapshot(ctx.stack, fr, st), events: evs || [] });
    },
  };
  const topFrame = { s: new Array(compiled.top.slots).fill(UNSET), p: null, fn: compiled.top, line: 1, cur: null };
  for (const f of compiled.localFuncsOf.get(compiled.top)) topFrame.s[f.sym.slot] = { node: f, env: topFrame };
  ctx.stack.push(topFrame);
  let exception = null, limit = false, pauseLimit = false;
  const tests = [];
  try {
    for (const s of compiled.main) {
      if (skipBeforeLine && s.line < skipBeforeLine && !s.func) continue;
      if (onlyFromLine && !skipBeforeLine && s.line < onlyFromLine && !s.func) continue;
      if (perStatement && s.line >= onlyFromLine) {
        const before = out.length;
        try { s.f(topFrame, ctx); tests.push({ out: out.slice(before), exception: null }); }
        catch (e) {
          if (e instanceof CsRuntimeError) tests.push({ out: out.slice(before), exception: { type: e.type, message: e.message, line: ctx.line } });
          else if (e instanceof StepLimit) { tests.push({ out: out.slice(before), exception: { type: "StepLimit", message: "too many steps" } }); ctx.steps = 0; }
          else throw e;
          ctx.stack.length = 1; ctx.depth = 0;
        }
        continue;
      }
      const r = s.f(topFrame, ctx);
      if (r && typeof r === "object") break; // return at top level
    }
    if (debug) ctx.pause(lastLine(compiled), "The program ends.", topFrame, null, ctx.takeEvents());
  } catch (e) {
    if (e instanceof CsRuntimeError) {
      exception = { type: e.type, message: e.message, line: ctx.line };
      if (debug) { try { pauses.push({ line: ctx.line, note: `The program stops: ${e.type}.`, stdout: out, frames: snapshot(ctx.stack, ctx.stack[ctx.stack.length - 1], null), events: ctx.takeEvents(), exception }); } catch (x) { /* ignore */ } }
    } else if (e instanceof StepLimit) limit = true;
    else if (e instanceof PauseLimit) pauseLimit = true;
    else if (e instanceof RangeError && /call stack/i.test(e.message)) exception = { type: "StackOverflow", message: "Stack overflow.", line: ctx.line };
    else throw e;
  }
  return { stdout: out, exception, limit, pauseLimit, steps: ctx.steps, pauses, tests };
}

function lastLine(compiled) { const m = compiled.main.filter((s) => !s.func); return m.length ? m[m.length - 1].endLine || m[m.length - 1].line : 1; }

// ------------------------------------------------------------------ debugger snapshots and notes
function snapFrameValues(fr) {
  const st = fr.cur;
  const vars = (st && (st.visLoop || st.visAfter || st.vis)) || [];
  const m = new Map();
  for (const v of vars) m.set(v.name, display(fr.s[v.slot], v.type));
  return m;
}
function snapshot(stack, cur, st) {
  return stack.map((fr) => {
    const s = fr === cur && st ? st : fr.cur;
    const vars = ((s && (s.visLoop || s.visAfter || s.vis)) || []).filter((v) => fr.s[v.slot] !== UNSET || v.isParam).map((v) => ({ name: v.name, type: short(v.type), ...display(fr.s[v.slot], v.type) }));
    return { name: fr.fn.isTop ? "Program" : fr.fn.name, vars };
  });
}

function describe(st, fr, before, evs, updText) {
  const after = snapFrameValues(fr);
  const parts = [];
  const calls = evs.filter((e) => e.kind === "return");
  for (const c of calls) parts.push(c.void ? `${c.name} finished.` : `${c.name} returned ${c.value}.`);
  const vars = (st.vis || []);
  const declared = st.k === "VarDecl" ? new Set(st.decls.map((d) => d.name)) : new Set();
  if (st.k === "VarDecl") {
    for (const d of st.decls) {
      const v = d.sym; const dv = display(fr.s[v.slot], v.type);
      if (fr.s[v.slot] === UNSET) parts.push(`Makes ${v.name}, with no value yet.`);
      else parts.push(dv.items ? `Makes ${v.name}, a list with ${dv.items.length} item${dv.items.length === 1 ? "" : "s"}.` : `Makes ${v.name} and stores ${dv.value}.`);
    }
  }
  for (const [name, now] of after) {
    if (declared.has(name)) continue;
    const was = before.get(name);
    if (!was || was.value !== now.value || JSON.stringify(was.items) !== JSON.stringify(now.items)) {
      if (now.items) {
        const wasN = was && was.items ? was.items.length : 0;
        if (now.items.length > wasN) parts.push(`${name} now has ${now.items.length} item${now.items.length === 1 ? "" : "s"}; the new one is ${now.items[now.items.length - 1]}.`.replace(";", ","));
        else if (now.items.length < wasN) parts.push(`${name} now has ${now.items.length} item${now.items.length === 1 ? "" : "s"}.`);
        else parts.push(`An item in ${name} changed.`);
      } else if (!was) parts.push(`${name} is ${now.value}.`);
      else parts.push(`${name} is now ${now.value}.`);
    }
  }
  const outText = evs.filter((e) => e.kind === "out").map((e) => e.text).join("");
  if (outText) {
    const ls = outText.replace(/\n$/, "").split("\n");
    parts.push(ls.length === 1 ? (ls[0] === "" ? "Prints an empty line." : `Prints ${JSON.stringify(ls[0])}.`) : `Prints ${ls.length} lines.`);
  }
  const ins = evs.filter((e) => e.kind === "in");
  for (const i of ins) parts.unshift(i.text === null ? "Console.ReadLine() finds no more input and gives back null." : `Console.ReadLine() reads ${JSON.stringify(i.text)}.`);
  if (st.k === "ForUpdate" && !parts.length) parts.push(`Runs ${updText}.`);
  if (!parts.length) parts.push("Runs this line.");
  return parts.join(" ");
}

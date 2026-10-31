// Parser for the course subset of C#: top-level statements and local functions.
import { lex, CsError } from "./lexer.js";

const TYPE_KW = new Set(["int", "double", "bool", "string", "char", "void", "var", "object", "float", "long", "decimal", "byte", "short", "uint", "ulong"]);
const ASSIGN_OPS = new Set(["=", "+=", "-=", "*=", "/=", "%=", "&=", "|=", "^=", "<<=", ">>=", "??="]);

export function parse(src) {
  const toks = lex(src);
  let p = 0;
  const peek = (k = 0) => toks[Math.min(p + k, toks.length - 1)];
  const prev = () => toks[Math.max(0, p - 1)];
  const next = () => toks[p++];
  const is = (v, k = 0) => { const t = peek(k); return (t.kind === "op" || t.kind === "kw") && t.value === v; };
  const eat = (v) => { if (is(v)) { return next(); } return null; };
  const pos = (t) => ({ line: t.line, col: t.col, start: t.start });
  const endOf = (node) => { node.end = prev().end; node.endLine = prev().endLine; node.endCol = prev().endCol; return node; };
  // Roslyn puts a missing-token error after the previous token and any spaces that follow it on the same line.
  const errAtPrevEnd = (code, msg) => {
    const t = prev();
    let o = t.end, col = t.endCol;
    while (o < src.length && (src[o] === " " || src[o] === "\t")) { o++; col++; }
    if (src[o] === "\r" || src[o] === "\n" || o >= src.length) { o = t.end; col = t.endCol; }
    return new CsError(code, msg, t.endLine, col);
  };
  const errAt = (t, code, msg) => new CsError(code, msg, t.line, t.col);
  const tokText = (t) => (t.kind === "eof" ? "" : t.kind === "string" ? JSON.stringify(t.value) : t.kind === "char" ? `'${t.value}'` : String(t.text ?? t.value));

  function expect(v) {
    if (is(v)) return next();
    if (v === ";") throw errAtPrevEnd("CS1002", "; expected");
    if (v === ")") throw errAtPrevEnd("CS1026", ") expected");
    if (v === "}") throw errAtPrevEnd("CS1513", "} expected");
    if (v === "{") throw errAtPrevEnd("CS1514", "{ expected");
    if (v === "]") throw errAtPrevEnd("CS1003", "Syntax error, ']' expected");
    throw errAtPrevEnd("CS1003", `Syntax error, '${v}' expected`);
  }
  function ident() {
    const t = peek();
    if (t.kind === "id") return next();
    if (t.kind === "kw") throw errAt(t, "CS1041", `Identifier expected; '${t.value}' is a keyword`);
    throw errAtPrevEnd("CS1001", "Identifier expected");
  }

  // ------------------------------------------------------------------ types
  function tryType() {
    const save = p;
    try { const t = parseType(); return t; } catch (e) { p = save; return null; }
  }
  function parseType() {
    const t = peek();
    let ty;
    if (t.kind === "kw" && TYPE_KW.has(t.value)) { next(); ty = { name: t.value, args: [], tok: t }; }
    else if (t.kind === "id") {
      next();
      ty = { name: t.value, args: [], tok: t };
      while (is(".") && peek(1).kind === "id" && /^(System|Collections|Generic)$/.test(ty.name.split(".").pop())) { next(); ty.name += "." + next().value; }
      if (is("<")) {
        next();
        ty.args.push(parseType());
        while (eat(",")) ty.args.push(parseType());
        if (!is(">")) throw new Error("not a type");
        next();
      }
    } else throw new Error("not a type");
    if (is("?") && !(peek(1).kind === "id" && is(":", 2))) { const q = peek(1); if (!(q.kind === "op" && q.value === "(")) { next(); ty.nullable = true; } }
    while (is("[") && is("]", 1)) { next(); next(); ty.array = true; }
    ty.end = prev().end;
    return ty;
  }

  // ------------------------------------------------------------------ statements
  function program() {
    const body = [];
    while (is("using") && peek(1).kind === "id") { while (!is(";") && peek().kind !== "eof") next(); expect(";"); }
    while (peek().kind !== "eof") body.push(statement(true));
    return { k: "Program", body, src };
  }

  function block() {
    const t = expect("{");
    const body = [];
    while (!is("}")) {
      if (peek().kind === "eof") throw errAtPrevEnd("CS1513", "} expected");
      body.push(statement());
    }
    next();
    return endOf({ k: "Block", body, ...pos(t) });
  }

  function embedded() {
    // the statement after if/else/while/for: a declaration is not allowed here
    const t = peek();
    const s = statement();
    if (s.k === "VarDecl") throw new CsError("CS1023", "Embedded statement cannot be a declaration or labeled statement", t.line, t.col);
    return s;
  }

  function statement(top = false) {
    const t = peek();
    if (t.kind === "op" && t.value === "{") return block();
    if (t.kind === "op" && t.value === ";") { next(); return endOf({ k: "Empty", ...pos(t) }); }
    if (t.kind === "kw") {
      switch (t.value) {
        case "if": {
          next(); expect("(");
          const cond = expr();
          expect(")");
          const then = embedded();
          let els = null;
          if (is("else")) { next(); els = embedded(); }
          return endOf({ k: "If", cond, then, else: els, ...pos(t) });
        }
        case "else": throw errAt(t, "CS8641", "'else' cannot start a statement.");
        case "while": {
          next(); expect("(");
          const cond = expr(); expect(")");
          const body = embedded();
          return endOf({ k: "While", cond, body, ...pos(t) });
        }
        case "do": {
          next();
          const body = embedded();
          if (!is("while")) throw errAtPrevEnd("CS1003", "Syntax error, 'while' expected");
          next(); expect("(");
          const cond = expr(); expect(")"); expect(";");
          return endOf({ k: "Do", body, cond, ...pos(t) });
        }
        case "for": {
          next(); expect("(");
          let init = [];
          if (!is(";")) {
            const d = tryDecl();
            if (d) init = [d];
            else { init.push(exprStmtExpr()); while (eat(",")) init.push(exprStmtExpr()); }
          }
          expect(";");
          const cond = is(";") ? null : expr();
          expect(";");
          const update = [];
          if (!is(")")) { update.push(exprStmtExpr()); while (eat(",")) update.push(exprStmtExpr()); }
          expect(")");
          const body = embedded();
          return endOf({ k: "For", init, cond, update, body, ...pos(t) });
        }
        case "foreach": {
          next(); expect("(");
          const type = parseType();
          const nameTok = ident();
          if (!is("in")) throw errAtPrevEnd("CS1515", "'in' expected");
          next();
          const coll = expr(); expect(")");
          const body = embedded();
          return endOf({ k: "Foreach", type, name: nameTok.value, nameTok, coll, body, ...pos(t) });
        }
        case "break": next(); expect(";"); return endOf({ k: "Break", ...pos(t) });
        case "continue": next(); expect(";"); return endOf({ k: "Continue", ...pos(t) });
        case "return": {
          next();
          const e = is(";") ? null : expr();
          expect(";");
          return endOf({ k: "Return", expr: e, ...pos(t) });
        }
        case "class": case "struct": case "namespace": case "enum": case "interface": case "public": case "private": case "protected": case "internal":
          throw unsupported(t, t.value === "namespace" ? "namespace" : "class");
        case "switch": throw unsupported(t, "switch");
        case "try": case "throw": throw unsupported(t, t.value);
        case "using": throw unsupported(t, "using");
        case "goto": throw unsupported(t, "goto");
      }
    }
    const d = tryDecl(true);
    if (d) { if (d.k === "VarDecl") expectDeclEnd(); return d; }
    const e = exprStmtExpr();
    expect(";");
    return endOf({ k: "ExprStmt", expr: e, ...pos(t) });
  }

  function expectDeclEnd() {
    if (is(";")) { next(); return; }
    if (peek().kind === "id" || peek().kind === "kw") throw errAtPrevEnd("CS1003", "Syntax error, ',' expected");
    throw errAtPrevEnd("CS1002", "; expected");
  }

  // A local variable or local function declaration, or null if this is not one.
  function tryDecl(allowFunc = false) {
    const start = p;
    const t = peek();
    let isConst = false, isStatic = false;
    while (is("static") || is("const")) { const m = next(); if (m.value === "const") isConst = true; else isStatic = true; }
    const type = tryType();
    if (!type || peek().kind !== "id") { p = start; return null; }
    const after = peek(1);
    const ok = after.kind === "eof" || (after.kind === "op" && ["=", ";", ",", "("].includes(after.value)) || after.kind === "id" || after.kind === "kw";
    if (!ok) { p = start; return null; }
    if (after.kind === "op" && after.value === "(") {
      if (!allowFunc) { p = start; return null; }
      const nameTok = next(); next();
      const params = [];
      if (!is(")")) {
        do {
          while (is("ref") || is("out") || is("params") || is("this")) throw unsupported(peek(), peek().value + " parameters");
          const pt = parseType();
          const pn = ident();
          if (is("=")) throw unsupported(peek(), "default parameter values");
          params.push({ type: pt, name: pn.value, tok: pn });
        } while (eat(","));
      }
      expect(")");
      let body;
      if (is("=>")) {
        const arrow = next();
        const e = expr();
        expect(";");
        body = { k: "Block", body: [type.name === "void" ? { k: "ExprStmt", expr: e, line: arrow.line, col: arrow.col, start: arrow.start, end: e.end } : { k: "Return", expr: e, line: arrow.line, col: arrow.col, start: arrow.start, end: e.end }], line: arrow.line, col: arrow.col, start: arrow.start, end: prev().end, arrow: true };
      } else body = block();
      return endOf({ k: "Func", ret: type, name: nameTok.value, nameTok, params, body, isStatic, ...pos(t) });
    }
    const decls = [];
    for (;;) {
      const nameTok = ident();
      let init = null;
      if (eat("=")) init = initializer();
      decls.push({ name: nameTok.value, nameTok, init });
      if (!eat(",")) break;
    }
    return endOf({ k: "VarDecl", type, decls, isConst, ...pos(t) });
  }

  function initializer() {
    if (is("{")) throw unsupported(peek(), "array initializers");
    return expr();
  }

  function exprStmtExpr() { return expr(); }

  // ------------------------------------------------------------------ expressions
  function expr() { return assignment(); }

  function assignment() {
    const left = conditional();
    const t = peek();
    if (t.kind === "op" && ASSIGN_OPS.has(t.value)) {
      next();
      const right = assignment();
      return { k: "Assign", op: t.value, target: left, value: right, line: left.line, col: left.col, start: left.start, end: right.end, opTok: t };
    }
    if (t.kind === "op" && t.value === "=>") {
      if (left.k === "Name") throw errAt(t, "CS1660", "Cannot convert lambda expression to type 'bool' because it is not a delegate type");
      throw unsupported(t, "lambdas");
    }
    return left;
  }

  function conditional() {
    const c = binary(0);
    if (is("?")) {
      next();
      const a = assignment();
      expect(":");
      const b = assignment();
      return { k: "Cond", test: c, a, b, line: c.line, col: c.col, start: c.start, end: b.end };
    }
    return c;
  }

  const LEVELS = [["??"], ["||"], ["&&"], ["|"], ["^"], ["&"], ["==", "!="], ["<", ">", "<=", ">=", "is", "as"], ["<<", ">>"], ["+", "-"], ["*", "/", "%"]];
  function binary(level) {
    if (level >= LEVELS.length) return unary();
    let left = binary(level + 1);
    for (;;) {
      const t = peek();
      let op = (t.kind === "op" || t.kind === "kw") && LEVELS[level].includes(t.value) ? t.value : null;
      // >> is lexed as two >'s
      if (!op && level === 8 && is(">") && is(">", 1) && peek(1).start === t.end) op = ">>";
      if (!op) return left;
      if (op === "is" || op === "as") throw unsupported(t, `'${op}'`);
      next(); if (op === ">>") next();
      const right = binary(level + 1);
      left = { k: "Binary", op, left, right, line: left.line, col: left.col, start: left.start, end: right.end, opTok: t };
    }
  }

  function unary() {
    const t = peek();
    if (t.kind === "op" && ["-", "+", "!", "~"].includes(t.value)) {
      next();
      const operand = unary();
      if (t.value === "-" && operand.k === "Lit" && operand.type === "uint" && !operand.paren && operand.value === 2147483648) return { ...operand, type: "int", value: -2147483648, neg: true, line: t.line, col: t.col, start: t.start };
      return { k: "Unary", op: t.value, operand, line: t.line, col: t.col, start: t.start, end: operand.end };
    }
    if (t.kind === "op" && (t.value === "++" || t.value === "--")) {
      next();
      const operand = unary();
      return { k: "IncDec", op: t.value, prefix: true, operand, line: t.line, col: t.col, start: t.start, end: operand.end };
    }
    // cast: (int)x
    if (t.kind === "op" && t.value === "(" && peek(1).kind === "kw" && TYPE_KW.has(peek(1).value) && is(")", 2)) {
      next(); const ty = next(); next();
      const operand = unary();
      return { k: "Cast", type: { name: ty.value, args: [], tok: ty }, operand, line: t.line, col: t.col, start: t.start, end: operand.end };
    }
    return postfix(primary());
  }

  function postfix(e) {
    for (;;) {
      const t = peek();
      if (t.kind !== "op") return e;
      if (t.value === ".") {
        next();
        const n = ident();
        e = { k: "Member", obj: e, name: n.value, nameTok: n, line: e.line, col: e.col, start: e.start, end: n.end };
      } else if (t.value === "?.") {
        throw unsupported(t, "'?.'");
      } else if (t.value === "(") {
        next();
        const args = [];
        if (!is(")")) {
          do {
            if (is("out") || is("ref")) throw unsupported(peek(), "out and ref arguments");
            if (peek().kind === "id" && is(":", 1)) throw unsupported(peek(), "named arguments");
            args.push(expr());
          } while (eat(","));
        }
        expect(")");
        e = { k: "Call", callee: e, args, line: e.line, col: e.col, start: e.start, end: prev().end, parenTok: t };
      } else if (t.value === "[") {
        next();
        const index = expr();
        if (is(",")) throw unsupported(peek(), "multidimensional indexing");
        expect("]");
        e = { k: "Index", obj: e, index, line: e.line, col: e.col, start: e.start, end: prev().end, bracketTok: t };
      } else if (t.value === "++" || t.value === "--") {
        next();
        e = { k: "IncDec", op: t.value, prefix: false, operand: e, line: e.line, col: e.col, start: e.start, end: t.end };
      } else return e;
    }
  }

  function primary() {
    const t = peek();
    switch (t.kind) {
      case "int": next(); return { k: "Lit", type: "int", value: t.value, line: t.line, col: t.col, start: t.start, end: t.end };
      case "double": next(); return { k: "Lit", type: "double", value: t.value, line: t.line, col: t.col, start: t.start, end: t.end };
      case "badnum": next(); return { k: "Lit", type: t.suffix === "f" ? "float" : t.suffix === "m" ? "decimal" : t.suffix === "u" ? "uint" : "long", value: Number(t.value), line: t.line, col: t.col, start: t.start, end: t.end };
      case "string": next(); return { k: "Lit", type: "string", value: t.value, line: t.line, col: t.col, start: t.start, end: t.end };
      case "char": next(); return { k: "Lit", type: "char", value: t.value, line: t.line, col: t.col, start: t.start, end: t.end };
      case "interp": {
        next();
        const parts = t.value.map((part) => {
          if (part.text !== undefined) return part;
          const sub = parse.subExpr(part.expr, part.base);
          return { expr: sub, fmt: part.fmt, align: part.align };
        });
        return { k: "Interp", parts, line: t.line, col: t.col, start: t.start, end: t.end };
      }
      case "id": next(); return { k: "Name", name: t.value, line: t.line, col: t.col, start: t.start, end: t.end, tok: t };
      case "kw":
        if (t.value === "true" || t.value === "false") { next(); return { k: "Lit", type: "bool", value: t.value === "true", line: t.line, col: t.col, start: t.start, end: t.end }; }
        if (t.value === "null") { next(); return { k: "Lit", type: "null", value: null, line: t.line, col: t.col, start: t.start, end: t.end }; }
        if (TYPE_KW.has(t.value) && is(".", 1)) { next(); return { k: "TypeRef", type: t.value, line: t.line, col: t.col, start: t.start, end: t.end }; }
        if (t.value === "new") return newExpr();
        if (t.value === "this" || t.value === "base") throw unsupported(t, `'${t.value}'`);
        if (t.value === "typeof" || t.value === "sizeof") throw unsupported(t, `'${t.value}'`);
        throw errAt(t, "CS1525", `Invalid expression term '${t.value}'`);
      case "op":
        if (t.value === "(") {
          next();
          const e = expr();
          if (is(",")) throw unsupported(peek(), "tuples");
          expect(")");
          return { ...e, paren: true, pline: t.line, pcol: t.col, start: t.start, end: prev().end };
        }
        if (t.value === "[") throw unsupported(t, "collection expressions");
        throw errAt(t, "CS1525", `Invalid expression term '${t.value}'`);
      case "eof": throw errAtPrevEnd("CS1733", "Expected expression");
      default: throw errAt(t, "CS1525", `Invalid expression term '${tokText(t)}'`);
    }
  }

  function newExpr() {
    const t = next();
    if (is("(")) {
      // target-typed new()
      next(); expect(")");
      let init = null;
      if (is("{")) init = collectionInit();
      return { k: "New", type: null, args: [], init, line: t.line, col: t.col, start: t.start, end: prev().end };
    }
    const type = tryType();
    if (!type) throw errAt(peek(), "CS1526", "A new expression requires an argument list or (), [], or {} after type");
    if (is("[")) throw unsupported(t, "arrays");
    let args = null, init = null;
    if (is("(")) {
      next(); args = [];
      if (!is(")")) { do { args.push(expr()); } while (eat(",")); }
      expect(")");
    }
    if (is("{")) init = collectionInit();
    if (!args && !init) throw errAt(peek(), "CS1526", "A new expression requires an argument list or (), [], or {} after type");
    return { k: "New", type, args: args || [], init, line: t.line, col: t.col, start: t.start, end: prev().end };
  }
  function collectionInit() {
    expect("{");
    const items = [];
    while (!is("}")) {
      if (is("{")) throw unsupported(peek(), "nested initializers");
      items.push(expr());
      if (!eat(",")) break;
    }
    expect("}");
    return items;
  }

  function unsupported(t, what) {
    return new CsError("CSP001", `This page runs the C# from this course, and ${what} is not part of it. Try this code in VS Code.`, t.line, t.col);
  }

  return program();
}

// Parses one expression inside an interpolated string, keeping its line and column in the program.
parse.subExpr = function (src, base) {
  const prog = parse.__exprOnly(src, base);
  return prog;
};
parse.__exprOnly = function (src, base) {
  // reuse the full parser on "x;" then pull the expression back out, shifting positions
  const pad = " ".repeat(Math.max(0, base.col - 1));
  const lines = "\n".repeat(base.line - 1);
  const fake = lines + pad + src + ";";
  const prog = parse(fake);
  const st = prog.body[0];
  if (!st || st.k !== "ExprStmt" || prog.body.length !== 1) throw new CsError("CS1525", `Invalid expression term '${src.trim()}'`, base.line, base.col);
  const shift = base.offset - (lines.length + pad.length);
  const fix = (n) => { if (n && typeof n === "object") { if (typeof n.start === "number" && n.line) { n.start += shift; if (typeof n.end === "number") n.end += shift; } for (const v of Object.values(n)) if (v && typeof v === "object" && v !== n) fix(v); } };
  fix(st.expr);
  return st.expr;
};

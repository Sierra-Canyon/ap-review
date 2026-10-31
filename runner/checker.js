// Binds names, checks types, and reports the compiler's errors and warnings with .NET's own codes and messages.
import { CsError } from "./lexer.js";
import { typeFromSyntax, conversion, isList, elemOf, isNum, isStr, plain, full, short, STATIC, INSTANCE } from "./types.js";

const STATIC_TYPES = new Set(Object.keys(STATIC));

export function check(prog) {
  const diags = [];
  const err = (code, message, at) => diags.push({ severity: "error", code, message, line: at.line, col: at.col, start: at.start ?? 0 });
  const warn = (code, message, at) => diags.push({ severity: "warning", code, message, line: at.line, col: at.col, start: at.start ?? 0 });
  const unsupported = (what, at) => err("CSP001", `This page runs the C# from this course, and ${what} is not part of it. Try this code in VS Code.`, at);
  const exprPos = (e) => (e.paren ? { line: e.pline, col: e.pcol, start: e.start } : e);

  let varId = 0;
  const allVars = [], allFuncs = [];
  const top = { name: "<Main>$", ret: "void", params: [], slots: 0, depth: 0, parent: null, isTop: true };
  let fn = top;
  let scope = null;
  let flow = { live: true, da: new Set() };
  const loops = [];
  let reportedUnreachable = false;

  // ------------------------------------------------------------------ scopes
  function pushScope(kind) { scope = { parent: scope, names: new Map(), fn, kind }; return scope; }
  function popScope() { scope = scope.parent; }
  function lookup(name) {
    for (let s = scope; s; s = s.parent) if (s.names.has(name)) return s.names.get(name);
    return null;
  }
  function declare(sym, at) {
    if (scope.names.has(sym.name)) { err("CS0128", `A local variable or function named '${sym.name}' is already defined in this scope`, at); return false; }
    // an enclosing scope in the same function already uses the name
    for (let s = scope.parent; s && s.fn === fn; s = s.parent) {
      if (s.names.has(sym.name)) {
        err("CS0136", `A local or parameter named '${sym.name}' cannot be declared in this scope because that name is used in an enclosing local scope to define a local or parameter`, at);
        return false;
      }
    }
    scope.names.set(sym.name, sym);
    return true;
  }
  function newVar(name, type, at, extra = {}) {
    const sym = { kind: "var", id: varId++, name, type, fn, slot: fn.slots++, declStart: at.start, line: at.line, col: at.col, read: false, assigns: 0, constAssigns: 0, maybeNull: false, ...extra };
    allVars.push(sym);
    return sym;
  }

  // Pre-declare the variables and local functions of a block, so that names resolve to them across the whole block.
  function predeclare(stmts) {
    for (const st of stmts) {
      if (st.k === "Func") {
        const rt = typeFromSyntax(st.ret);
        const ret = rt.t || "error";
        if (rt.unsupported) unsupported(rt.unsupported, st.ret.tok); else if (rt.error) err(rt.error[0], rt.error[1], st.ret.tok);
        const sym = { kind: "func", name: st.name, ret, node: st, used: false, line: st.nameTok.line, col: st.nameTok.col, slot: fn.slots++, fn };
        sym.params = st.params.map((p) => {
          const r = typeFromSyntax(p.type);
          if (r.unsupported) unsupported(r.unsupported, p.type.tok); else if (r.error) err(r.error[0], r.error[1], p.type.tok);
          else if (r.t === "void" || r.t === "var") err(r.t === "void" ? "CS1536" : "CS0825", r.t === "void" ? "Invalid parameter type 'void'" : "The contextual keyword 'var' may only appear within a local variable declaration or in script code", p.type.tok);
          return { name: p.name, type: r.t && r.t !== "var" && r.t !== "void" ? r.t : "error", tok: p.tok };
        });
        sym.sigTypes = `${st.name}(${sym.params.map((p) => short(p.type)).join(", ")})`;
        st.sym = sym;
        allFuncs.push(sym);
        declare(sym, st.nameTok);
      } else if (st.k === "VarDecl") {
        for (const d of st.decls) {
          const sym = { kind: "var", pending: true, name: d.name, declStart: d.nameTok.start, node: d };
          d.pre = sym;
          declare(sym, d.nameTok);
        }
      }
    }
  }

  // Variables visible at a statement, for the debugger's Variables pane.
  function visible(at) {
    const out = [];
    const seen = new Set();
    for (let s = scope; s && s.fn === fn; s = s.parent) {
      for (const sym of s.names.values()) {
        const real = sym.real || sym;
        if (real.kind !== "var" || seen.has(real.name) || real.pending) continue;
        if (real.declStart > at.start && !real.isParam) continue;
        seen.add(real.name);
        out.push(real);
      }
    }
    return out.sort((a, b) => a.declStart - b.declStart);
  }

  // ------------------------------------------------------------------ flow helpers
  const copyFlow = (f) => ({ live: f.live, da: new Set(f.da) });
  function merge(a, b) {
    if (!a.live) return copyFlow(b);
    if (!b.live) return copyFlow(a);
    return { live: true, da: new Set([...a.da].filter((x) => b.da.has(x))) };
  }
  const deadFlow = () => ({ live: false, da: new Set() });

  // ------------------------------------------------------------------ statements
  function bindBlockBody(stmts, newScope = true) {
    if (newScope) pushScope("block");
    predeclare(stmts);
    let warned = false;
    for (const st of stmts) {
      if (!flow.live && !warned && st.k !== "Func" && st.k !== "Empty" && !reportedUnreachable) {
        warn("CS0162", "Unreachable code detected", firstPos(st));
        warned = true;
      }
      stmt(st);
    }
    if (newScope) popScope();
  }
  function firstPos(st) {
    if (st.k === "ExprStmt") return exprStart(st.expr);
    if (st.k === "Block") return st.body.length ? firstPos(st.body[0]) : st;
    if (st.k === "VarDecl") return st.type.tok ? { line: st.type.tok.line, col: st.type.tok.col, start: st.start } : st;
    return st;
  }
  function exprStart(e) {
    if (e.paren) return { line: e.pline, col: e.pcol, start: e.start };
    switch (e.k) {
      case "Binary": case "Assign": return exprStart(e.k === "Assign" ? e.target : e.left);
      case "Cond": return exprStart(e.test);
      case "Call": return exprStart(e.callee);
      case "Member": return exprStart(e.obj);
      case "Index": return exprStart(e.obj);
      case "IncDec": return e.prefix ? e : exprStart(e.operand);
      default: return e;
    }
  }

  function stmt(st) {
    st.vis = visible(st);
    switch (st.k) {
      case "Block": bindBlockBody(st.body); break;
      case "Empty": break;
      case "VarDecl": varDecl(st); st.visAfter = visible({ start: st.end }); break;
      case "Func": funcDecl(st); break;
      case "ExprStmt": {
        const e = st.expr;
        const ok = e.k === "Assign" || e.k === "Call" || e.k === "IncDec" || e.k === "New";
        if (!ok) { expr(e); err("CS0201", "Only assignment, call, increment, decrement, await, and new object expressions can be used as a statement", exprStart(e)); }
        else expr(e, null, { statement: true });
        break;
      }
      case "If": {
        const c = condition(st.cond);
        const before = copyFlow(flow);
        if (c === false) flow.live = false;
        emptyCheck(st.then);
        stmt(st.then);
        const afterThen = flow;
        flow = copyFlow(before);
        if (c === true) { flow.live = false; }
        if (st.else) { emptyCheck(st.else); stmt(st.else); }
        if (c === true && st.else && before.live && !reportedUnreachable) { /* else part unreachable: warned inside via live=false */ }
        flow = merge(afterThen, flow);
        if (c === false && !st.else) flow = before;
        break;
      }
      case "While": {
        const c = condition(st.cond);
        const before = copyFlow(flow);
        loops.push({ breaks: [], continues: 0 });
        if (c === false) flow.live = false;
        emptyCheck(st.body);
        stmt(st.body);
        const L = loops.pop();
        flow = c === true ? L.breaks.reduce((a, b) => merge(a, b), deadFlow()) : L.breaks.reduce((a, b) => merge(a, b), before);
        if (c === true && !L.breaks.length) flow = { live: false, da: before.da };
        break;
      }
      case "Do": {
        loops.push({ breaks: [], continues: 0 });
        stmt(st.body);
        const L = loops.pop();
        if (L.continues) flow.live = true;
        const c = condition(st.cond);
        flow = c === true ? L.breaks.reduce((a, b) => merge(a, b), deadFlow()) : L.breaks.reduce((a, b) => merge(a, b), copyFlow(flow));
        break;
      }
      case "For": {
        pushScope("for");
        for (const i of st.init) { if (i.k === "VarDecl") { predeclare([i]); varDecl(i); } else { checkStatementExpr(i); expr(i, null, { statement: true }); } }
        st.visLoop = visible({ start: st.end });
        const c = st.cond ? condition(st.cond) : true;
        const before = copyFlow(flow);
        loops.push({ breaks: [], continues: 0 });
        if (c === false) flow.live = false;
        emptyCheck(st.body);
        stmt(st.body);
        const L = loops.pop();
        const updLive = flow.live || L.continues > 0;
        if (!updLive && st.update.length && before.live) warn("CS0162", "Unreachable code detected", exprStart(st.update[0]));
        const saveRep = flow;
        flow = { live: updLive, da: new Set(before.da) };
        for (const u of st.update) { checkStatementExpr(u); expr(u, null, { statement: true }); }
        flow = saveRep;
        flow = c === true ? L.breaks.reduce((a, b) => merge(a, b), deadFlow()) : L.breaks.reduce((a, b) => merge(a, b), before);
        if (c === true && !L.breaks.length) flow = { live: false, da: before.da };
        popScope();
        break;
      }
      case "Foreach": {
        const ct = expr(st.coll);
        let et = "error";
        if (isList(ct)) et = elemOf(ct);
        else if (isStr(ct)) et = "char";
        else if (ct !== "error") err("CS1579", `foreach statement cannot operate on variables of type '${short(ct)}' because '${short(ct)}' does not contain a public instance or extension definition for 'GetEnumerator'`, exprStart(st.coll));
        st.collKind = isList(ct) ? "list" : "string";
        pushScope("for");
        const r = typeFromSyntax(st.type);
        let vt = r.t;
        if (r.unsupported) { unsupported(r.unsupported, st.type.tok); vt = "error"; }
        else if (r.error) { err(r.error[0], r.error[1], st.type.tok); vt = "error"; }
        if (vt === "var") vt = et;
        else if (et !== "error" && vt !== "error") {
          const cv = conversion(et, vt);
          if (cv === "none") err("CS0030", `Cannot convert type '${full(et)}' to '${full(vt)}'`, st.type.tok);
          st.conv = cv !== "id" ? { from: et, to: vt } : null;
        }
        const sym = newVar(st.name, vt, st.nameTok, { iter: true });
        declare(sym, st.nameTok);
        st.sym = sym;
        flow.da.add(sym.id); sym.assigns++;
        st.visLoop = visible({ start: st.end });
        const before = copyFlow(flow);
        loops.push({ breaks: [], continues: 0 });
        emptyCheck(st.body);
        stmt(st.body);
        const L = loops.pop();
        flow = L.breaks.reduce((a, b) => merge(a, b), before);
        popScope();
        break;
      }
      case "Break": case "Continue": {
        if (!loops.length) err("CS0139", "No enclosing loop out of which to break or continue", st);
        else if (st.k === "Break") loops[loops.length - 1].breaks.push(copyFlow(flow));
        else loops[loops.length - 1].continues++;
        flow = deadFlow();
        break;
      }
      case "Return": {
        if (st.expr) {
          if (fn.ret === "void" && !fn.isTop) { expr(st.expr); err("CS0127", `Since '${fn.sym.sigTypes}' returns void, a return keyword must not be followed by an object expression`, st); }
          else if (fn.isTop) { const t = expr(st.expr); if (t !== "int" && t !== "error") err("CS0029", `Cannot implicitly convert type '${full(t)}' to 'int'`, exprPos(st.expr)); }
          else assignConv(st.expr, fn.ret, st.expr);
        } else if (fn.ret !== "void" && !fn.isTop && fn.ret !== "error") err("CS0126", `An object of a type convertible to '${full(fn.ret)}' is required`, st);
        flow = deadFlow();
        break;
      }
      default: throw new Error("unknown statement " + st.k);
    }
  }
  function emptyCheck(body) {
    if (body.k === "Empty") warn("CS0642", "Possible mistaken empty statement", body);
  }
  function checkStatementExpr(e) {
    const ok = e.k === "Assign" || e.k === "Call" || e.k === "IncDec" || e.k === "New";
    if (!ok) err("CS0201", "Only assignment, call, increment, decrement, await, and new object expressions can be used as a statement", exprStart(e));
  }
  // Binds a condition. Returns true/false when it is a constant, otherwise undefined.
  function condition(c) {
    const t = expr(c, "bool");
    if (t !== "bool" && t !== "error") err("CS0029", `Cannot implicitly convert type '${full(t)}' to 'bool'`, exprPos(c));
    return typeof c.cv === "boolean" ? c.cv : undefined;
  }

  function varDecl(st) {
    const r = typeFromSyntax(st.type);
    let t = r.t;
    if (r.unsupported) { unsupported(r.unsupported, st.type.tok); t = "error"; }
    else if (r.error) { err(r.error[0], r.error[1], st.type.tok); t = "error"; }
    if (t === "void") { err("CS1547", "Keyword 'void' cannot be used in this context", st.type.tok); t = "error"; }
    for (const d of st.decls) {
      let vt = t;
      if (vt === "var") {
        if (!d.init) { err("CS0818", "Implicitly-typed variables must be initialized", d.nameTok); vt = "error"; }
        else {
          const it = expr(d.init);
          if (it === "null") { err("CS0815", "Cannot assign <null> to an implicitly-typed variable", d.nameTok); vt = "error"; }
          else if (it === "void") { err("CS0815", "Cannot assign void to an implicitly-typed variable", d.nameTok); vt = "error"; }
          else vt = it === "string?" ? "string?" : it;
        }
      }
      const sym = newVar(d.name, vt, d.nameTok, { isConst: st.isConst, node: d });
      if (d.pre) { d.pre.pending = false; d.pre.real = sym; Object.assign(d.pre, { kind: "alias" }); }
      // replace the pre-declared entry with the real symbol
      for (let s = scope; s; s = s.parent) if (s.names.get(d.name) === d.pre) { s.names.set(d.name, sym); break; }
      d.sym = sym;
      if (st.isConst && !d.init) err("CS0145", "A const field requires a value to be provided", d.nameTok);
      if (d.init) {
        if (t !== "var") {
          if (vt === "error") expr(d.init);
          else assignConv(d.init, vt, d.init, { nullableTarget: vt === "string?" });
        }
        if (d.init.maybeNull && vt === "string") { sym.maybeNull = true; }
        if (d.init.maybeNull && vt === "string?") sym.maybeNull = true;
        sym.assigns++;
        if (d.init.cv !== undefined || d.init.k === "Lit") sym.constAssigns++;
        if (st.isConst) { if (d.init.cv === undefined) err("CS0133", `The expression being assigned to '${d.name}' must be constant`, exprPos(d.init)); else sym.constValue = d.init.cv; }
        flow.da.add(sym.id);
      }
    }
  }

  function funcDecl(st) {
    const sym = st.sym;
    const outerFn = fn, outerFlow = flow, outerLoops = loops.splice(0);
    const info = { name: st.name, ret: sym.ret, params: [], slots: 0, depth: outerFn.depth + 1, parent: outerFn, sym };
    st.fn = info;
    fn = info;
    pushScope("func");
    flow = { live: true, da: new Set() };
    // captured variables from enclosing functions count as assigned inside the function
    for (const v of allVars) if (v.fn !== fn) flow.da.add(v.id);
    info.params = sym.params.map((p) => {
      const ps = newVar(p.name, p.type, p.tok, { isParam: true });
      ps.declStart = -1;
      ps.assigns++;
      flow.da.add(ps.id);
      declare(ps, p.tok);
      return ps;
    });
    bindBlockBody(st.body.body, true);
    if (flow.live && sym.ret !== "void" && sym.ret !== "error") err("CS0161", `'${sym.sigTypes}': not all code paths return a value`, st.nameTok);
    popScope();
    fn = outerFn; flow = outerFlow; loops.push(...outerLoops);
  }

  // ------------------------------------------------------------------ expressions
  // Binds e and converts it to target, reporting CS0029 / CS0266 like an assignment does.
  function assignConv(e, target, at, opts = {}) {
    const t = expr(e, target);
    if (t === "error" || target === "error") return;
    if (e.k === "Cond" && e.targetTyped) return;
    const c = conversion(t, target);
    if (c === "none") {
      if (t === "void") err("CS0029", `Cannot implicitly convert type 'void' to '${full(target)}'`, exprPos(e));
      else err("CS0029", `Cannot implicitly convert type '${full(t)}' to '${full(target)}'`, exprPos(e));
    } else if (c === "explicit") {
      // a constant int that fits a char still needs a cast
      err("CS0266", `Cannot implicitly convert type '${full(t)}' to '${full(target)}'. An explicit conversion exists (are you missing a cast?)`, exprPos(e));
    } else if (c === "implicit" && plain(t) !== plain(target)) e.to = target;
    if (isStr(target) && target !== "string?" && !opts.nullableTarget && e.maybeNull) {
      warn("CS8600", "Converting null literal or possible null value to non-nullable type.", exprPos(e));
    }
  }

  function maybeNullExpr(e) {
    if (e.t === "null") return true;
    if (e.t === "string?" && !(e.k === "Name" && e.sym && !e.sym.maybeNull)) return true;
    if (e.k === "Name" && e.sym && e.sym.maybeNull) return true;
    return false;
  }
  function derefCheck(e) {
    if (e.maybeNull) {
      warn("CS8602", "Dereference of a possibly null reference.", exprPos(e));
      if (e.k === "Name" && e.sym) e.sym.maybeNull = false;
    }
  }
  function argNullCheck(e, paramName, sig) {
    if (e.maybeNull && sig) {
      warn("CS8604", `Possible null reference argument for parameter '${paramName}' in '${sig}'.`, exprPos(e));
      if (e.k === "Name" && e.sym) e.sym.maybeNull = false;
    }
  }

  function expr(e, target = null, ctx = {}) {
    const t = exprInner(e, target, ctx);
    e.t = t;
    e.maybeNull = maybeNullExpr(e);
    return t;
  }

  function exprInner(e, target, ctx) {
    switch (e.k) {
      case "Lit": {
        if (["float", "decimal", "long", "uint"].includes(e.type)) { unsupported(`the type '${e.type}'`, e); return "error"; }
        if (e.type !== "null" && e.type !== "string") e.cv = e.value;
        if (e.type === "string") e.cv = e.value;
        return e.type;
      }
      case "Interp": {
        for (const part of e.parts) if (part.expr) {
          const pt = expr(part.expr);
          if (pt === "void") err("CS0029", "Cannot implicitly convert type 'void' to 'object'", exprPos(part.expr));
          if (part.align && !/^-?\d+$/.test(part.align)) unsupported("that alignment", e);
        }
        return "string";
      }
      case "Name": return nameExpr(e, ctx);
      case "TypeRef": err("CS0119", `'${e.type}' is a type, which is not valid in the given context`, e); return "error";
      case "Member": return memberExpr(e, ctx);
      case "Call": return callExpr(e, ctx);
      case "Index": {
        const ot = expr(e.obj);
        if (ot === "error") { expr(e.index); return "error"; }
        derefCheck(e.obj);
        if (isList(ot)) {
          const it = expr(e.index);
          if (it !== "error" && conversion(it, "int") !== "id" && conversion(it, "int") !== "implicit") err("CS1503", `Argument 1: cannot convert from '${full(it)}' to 'int'`, exprPos(e.index));
          else if (it === "char") e.index.to = "int";
          e.idx = "list";
          return elemOf(ot);
        }
        if (isStr(ot)) {
          const it = expr(e.index);
          if (it !== "error" && conversion(it, "int") === "none") err("CS1503", `Argument 1: cannot convert from '${full(it)}' to 'int'`, exprPos(e.index));
          else if (it === "double") err("CS1503", `Argument 1: cannot convert from 'double' to 'int'`, exprPos(e.index));
          else if (it === "char") e.index.to = "int";
          e.idx = "string";
          return "char";
        }
        expr(e.index);
        err("CS0021", `Cannot apply indexing with [] to an expression of type '${short(ot)}'`, exprStart(e));
        return "error";
      }
      case "Unary": {
        const ot = expr(e.operand);
        if (ot === "error") return "error";
        if (e.op === "!") {
          if (ot !== "bool") { err("CS0023", `Operator '!' cannot be applied to operand of type '${short(ot)}'`, e); return "error"; }
          if (typeof e.operand.cv === "boolean") e.cv = !e.operand.cv;
          return "bool";
        }
        if (e.op === "~") { if (ot !== "int" && ot !== "char") { err("CS0023", `Operator '~' cannot be applied to operand of type '${short(ot)}'`, e); return "error"; } if (ot === "char") e.operand.to = "int"; return "int"; }
        if (!isNum(ot)) { err("CS0023", `Operator '${e.op}' cannot be applied to operand of type '${short(ot)}'`, e); return "error"; }
        const rt = ot === "double" ? "double" : "int";
        if (ot === "char") e.operand.to = "int";
        if (typeof e.operand.cv === "number" || (ot === "char" && e.operand.cv !== undefined)) {
          const v = ot === "char" ? e.operand.cv.charCodeAt(0) : e.operand.cv;
          if (e.op === "-") { if (rt === "int" && v === -2147483648) err("CS0220", "The operation overflows at compile time in checked mode", e); else e.cv = rt === "int" ? (-v | 0) : -v; }
          else e.cv = v;
        }
        return rt;
      }
      case "IncDec": {
        const ot = expr(e.operand, null, { lvalue: true, readToo: true });
        if (ot === "error") return "error";
        if (!isNum(ot)) { err("CS0023", `Operator '${e.op}' cannot be applied to operand of type '${short(ot)}'`, e.prefix ? e : exprStart(e)); return "error"; }
        if (!lvalueCheck(e.operand, true)) return "error";
        return ot;
      }
      case "Cast": {
        const r = typeFromSyntax(e.type);
        if (r.unsupported) { unsupported(r.unsupported, e); expr(e.operand); return "error"; }
        const ot = expr(e.operand);
        const tt = r.t;
        if (ot === "error") return tt;
        const c = conversion(ot, tt);
        if (c === "none") { err("CS0030", `Cannot convert type '${full(ot)}' to '${full(tt)}'`, e); return "error"; }
        e.from = ot;
        if (e.operand.cv !== undefined) {
          const v = e.operand.cv;
          if (tt === "int" && ot === "double") e.cv = Math.trunc(v);
          else if (tt === "int" && ot === "char") e.cv = v.charCodeAt(0);
          else if (tt === "double" && ot === "int") e.cv = v;
          else if (tt === "char" && ot === "int") e.cv = String.fromCharCode(v & 0xffff);
          else if (tt === ot) e.cv = v;
        }
        return tt;
      }
      case "Binary": return binaryExpr(e);
      case "Assign": return assignExpr(e, ctx);
      case "Cond": {
        const c = condition(e.test);
        const before = copyFlow(flow);
        const at = expr(e.a);
        const fa = flow; flow = copyFlow(before);
        const bt = expr(e.b);
        flow = merge(fa, flow);
        if (at === "error" || bt === "error") return "error";
        let rt = null;
        if (plain(at) === plain(bt)) rt = at === "string?" || bt === "string?" ? "string?" : at;
        else if (conversion(at, bt) === "implicit" || (at === "null" && bt !== "null")) rt = bt;
        else if (conversion(bt, at) === "implicit" || (bt === "null" && at !== "null")) rt = at;
        if (rt) {
          if (plain(at) !== plain(rt)) e.a.to = rt;
          if (plain(bt) !== plain(rt)) e.b.to = rt;
          if (typeof c === "boolean" && (c ? e.a : e.b).cv !== undefined) e.cv = (c ? e.a : e.b).cv;
          return rt;
        }
        if (target) {
          e.targetTyped = true;
          for (const [x, xt] of [[e.a, at], [e.b, bt]]) {
            const cv = conversion(xt, target);
            if (cv === "none") err("CS0029", `Cannot implicitly convert type '${full(xt)}' to '${full(target)}'`, exprPos(x));
            else if (cv === "explicit") err("CS0266", `Cannot implicitly convert type '${full(xt)}' to '${full(target)}'. An explicit conversion exists (are you missing a cast?)`, exprPos(x));
            else if (cv === "implicit") x.to = target;
          }
          return target;
        }
        err("CS0173", `Type of conditional expression cannot be determined because there is no implicit conversion between '${full(at)}' and '${full(bt)}'`, exprStart(e));
        return "error";
      }
      case "New": {
        let tt;
        if (!e.type) {
          if (!target || !isList(target)) { unsupported("target-typed new() outside a List declaration", e); return "error"; }
          tt = target;
        } else {
          const r = typeFromSyntax(e.type);
          if (r.unsupported) { unsupported(r.unsupported, e); return "error"; }
          if (r.error) { err(r.error[0], r.error[1], e.type.tok); return "error"; }
          tt = r.t;
          if (!isList(tt)) { unsupported(`'new ${short(tt)}'`, e); return "error"; }
        }
        e.listType = tt;
        if (e.args.length > 1) { err("CS1729", `'List<${short(elemOf(tt))}>' does not contain a constructor that takes ${e.args.length} arguments`, e); return tt; }
        if (e.args.length === 1) {
          const at = expr(e.args[0]);
          if (at === "int") e.capacity = true;
          else if (at !== "error" && plain(at) !== tt) err("CS1503", `Argument 1: cannot convert from '${full(at)}' to 'int'`, exprPos(e.args[0]));
          else e.copyFrom = true;
        }
        if (e.init) for (const it of e.init) {
          const xt = expr(it);
          if (xt === "error") continue;
          const c = conversion(xt, elemOf(tt));
          if (c === "none" || c === "explicit") err("CS1950", `The best overloaded Add method 'List<${short(elemOf(tt))}>.Add(${short(elemOf(tt))})' for the collection initializer has some invalid arguments`, exprPos(it));
          else if (c === "implicit") it.to = elemOf(tt);
        }
        return tt;
      }
      default: throw new Error("unknown expression " + e.k);
    }
  }

  function readVar(sym, e) {
    sym.read = true;
    if (sym.fn === fn && !flow.da.has(sym.id) && flow.live && !sym.reportedUnassigned) {
      err("CS0165", `Use of unassigned local variable '${sym.name}'`, e);
      sym.reportedUnassigned = true;
      flow.da.add(sym.id);
    }
  }

  function nameExpr(e, ctx) {
    let sym = lookup(e.name);
    if (sym && sym.kind === "alias") sym = sym.real;
    if (!sym) {
      if (STATIC_TYPES.has(e.name)) { err("CS0119", `'${e.name}' is a type, which is not valid in the given context`, e); return "error"; }
      err("CS0103", `The name '${e.name}' does not exist in the current context`, e);
      return "error";
    }
    if (sym.pending) {
      err("CS0841", `Cannot use local variable '${e.name}' before it is declared`, e);
      return "error";
    }
    e.sym = sym;
    if (sym.kind === "func") {
      sym.used = true;
      if (!ctx.callee) { e.methodGroup = true; return "methodgroup"; }
      return "func";
    }
    if (sym.declStart > e.start && !sym.isParam) { err("CS0841", `Cannot use local variable '${e.name}' before it is declared`, e); return "error"; }
    if (!ctx.lvalue || ctx.readToo) readVar(sym, e);
    if (sym.isConst && sym.constValue !== undefined) e.cv = sym.constValue;
    return sym.type;
  }

  function lvalueCheck(target, incdec = false) {
    if (target.k === "Name" && target.sym) {
      if (target.sym.kind === "func") { err("CS1656", `Cannot assign to '${target.name}' because it is a 'method group'`, target); return false; }
      if (target.sym.isConst) { err(incdec ? "CS0131" : "CS0131", "The left-hand side of an assignment must be a variable, property or indexer", target); return false; }
      if (target.sym.iter) { err("CS1656", `Cannot assign to '${target.name}' because it is a 'foreach iteration variable'`, target); return false; }
      return true;
    }
    if (target.k === "Index") {
      if (target.idx === "string") { err("CS0200", "Property or indexer 'string.this[int]' cannot be assigned to -- it is read only", exprStart(target)); return false; }
      return target.idx === "list";
    }
    if (target.k === "Member" && target.prop) {
      err("CS0200", `Property or indexer '${target.propOwner}.${target.name}' cannot be assigned to -- it is read only`, exprStart(target));
      return false;
    }
    if (target.t === "error") return false;
    err(incdec ? "CS1059" : "CS0131", incdec ? "The operand of an increment or decrement operator must be a variable, property or indexer" : "The left-hand side of an assignment must be a variable, property or indexer", exprStart(target));
    return false;
  }

  function assignExpr(e, ctx) {
    const op = e.op;
    if (["&=", "|=", "^=", "<<=", ">>=", "??="].includes(op)) { unsupported(`'${op}'`, e.opTok); return "error"; }
    const isSimple = op === "=";
    const tt = expr(e.target, null, { lvalue: true, readToo: !isSimple });
    if (tt === "error") { expr(e.value); return "error"; }
    if (!lvalueCheck(e.target)) { expr(e.value); return "error"; }
    if (isSimple) {
      assignConv(e.value, tt, e.value, { nullableTarget: tt === "string?" });
      if (e.target.k === "Name" && e.target.sym) {
        const s = e.target.sym;
        s.assigns++;
        if (e.value.cv !== undefined || e.value.k === "Lit") s.constAssigns++;
        flow.da.add(s.id);
        s.maybeNull = !!e.value.maybeNull;
      }
      return tt;
    }
    // compound: x op= y  is  x = (T)(x op y)
    const bop = op.slice(0, -1);
    const vt = expr(e.value);
    if (vt === "error") return "error";
    if (e.target.k === "Name" && e.target.sym) { e.target.sym.assigns++; e.target.sym.read = true; }
    const rt = binaryType(bop, tt, vt, e.opTok, e, true);
    if (rt === "error") return "error";
    e.bop = bop; e.opType = rt;
    const c = conversion(rt, tt);
    if (c === "none") { err("CS0029", `Cannot implicitly convert type '${full(rt)}' to '${full(tt)}'`, exprStart(e)); return "error"; }
    if (c === "explicit" && !(tt === "char" && vt !== "double")) {
      if (!(isNum(vt) && conversion(vt, tt) !== "none" && conversion(vt, tt) !== "explicit")) { err("CS0266", `Cannot implicitly convert type '${full(rt)}' to '${full(tt)}'. An explicit conversion exists (are you missing a cast?)`, exprStart(e)); return "error"; }
    }
    return tt;
  }

  // The result type of a binary operator, setting conversions on the operands. Reports CS0019 when there is none.
  function binaryType(op, lt, rt, opTok, node, compound = false) {
    const L = node.left || node.target, R = node.right || node.value;
    const bad = () => { err("CS0019", `Operator '${op}' cannot be applied to operands of type '${short(lt)}' and '${short(rt)}'`, compound ? exprStart(node) : exprStart(node)); return "error"; };
    if (lt === "void" || rt === "void") return bad();
    if (lt === "methodgroup" || rt === "methodgroup") return bad();
    switch (op) {
      case "+":
        if (isStr(lt) || isStr(rt)) { node.concat = true; return "string"; }
        if (lt === "null" || rt === "null") return bad();
      // fallthrough
      case "-": case "*": case "/": case "%": {
        if (!isNum(lt) || !isNum(rt)) return bad();
        const res = lt === "double" || rt === "double" ? "double" : "int";
        if (lt === "char") L.to = res; else if (lt !== res) L.to = res;
        if (rt === "char") R.to = res; else if (rt !== res) R.to = res;
        return res;
      }
      case "<": case ">": case "<=": case ">=": {
        if (!isNum(lt) || !isNum(rt)) return bad();
        if (!(lt === "char" && rt === "char")) {
          const res = lt === "double" || rt === "double" ? "double" : "int";
          if (lt !== res) L.to = res;
          if (rt !== res) R.to = res;
        }
        return "bool";
      }
      case "==": case "!=": {
        if (isNum(lt) && isNum(rt)) {
          if (!(lt === "char" && rt === "char")) {
            const res = lt === "double" || rt === "double" ? "double" : "int";
            if (lt !== res) L.to = res;
            if (rt !== res) R.to = res;
          }
          return "bool";
        }
        if (lt === "bool" && rt === "bool") return "bool";
        if (isStr(lt) && isStr(rt)) return "bool";
        if ((lt === "null" && (isStr(rt) || isList(rt) || rt === "null")) || (rt === "null" && (isStr(lt) || isList(lt)))) return "bool";
        if (isList(lt) && lt === rt) { node.refEq = true; return "bool"; }
        return bad();
      }
      case "&&": case "||":
        if (lt !== "bool" || rt !== "bool") return bad();
        return "bool";
      case "&": case "|": case "^":
        if (lt === "bool" && rt === "bool") return "bool";
        if ((lt === "int" || lt === "char") && (rt === "int" || rt === "char")) { if (lt === "char") L.to = "int"; if (rt === "char") R.to = "int"; return "int"; }
        return bad();
      case "<<": case ">>":
        if ((lt === "int" || lt === "char") && (rt === "int" || rt === "char")) { if (lt === "char") L.to = "int"; if (rt === "char") R.to = "int"; return "int"; }
        return bad();
      case "??": unsupported("'??'", opTok); return "error";
    }
    return bad();
  }

  function binaryExpr(e) {
    let lt, rt;
    if (e.op === "&&" || e.op === "||") {
      lt = expr(e.left);
      const before = copyFlow(flow);
      rt = expr(e.right);
      flow = before;
    } else { lt = expr(e.left); rt = expr(e.right); }
    if (lt === "error" || rt === "error") return "error";
    const res = binaryType(e.op, lt, rt, e.opTok, e);
    if (res === "error") return res;
    fold(e, res);
    return res;
  }

  // Compile-time constants, for CS0220, CS0020, and constant conditions.
  function fold(e, res) {
    const a = e.left.cv, b = e.right.cv;
    if (a === undefined || b === undefined) return;
    const num = (v, t) => (t === "char" ? v.charCodeAt(0) : v);
    const lt = e.left.t, rt = e.right.t;
    if (e.op === "&&") { e.cv = a && b; return; }
    if (e.op === "||") { e.cv = a || b; return; }
    if (res === "string") { if (typeof a === "string" && typeof b === "string" && lt === "string" && rt === "string") e.cv = a + b; return; }
    if (res === "bool" && (lt === "bool" || isStr(lt))) {
      if (e.op === "==") e.cv = a === b; else if (e.op === "!=") e.cv = a !== b;
      return;
    }
    const x = num(a, lt), y = num(b, rt);
    if (res === "int" && ["+", "-", "*", "/", "%"].includes(e.op)) {
      if ((e.op === "/" || e.op === "%") && y === 0) { err("CS0020", "Division by constant zero", exprStart(e)); return; }
      let v;
      switch (e.op) { case "+": v = x + y; break; case "-": v = x - y; break; case "*": v = x * y; break; case "/": v = Math.trunc(x / y); break; case "%": v = x % y; break; }
      if (v > 2147483647 || v < -2147483648) { err("CS0220", "The operation overflows at compile time in checked mode", exprStart(e)); return; }
      e.cv = v;
      return;
    }
    if (res === "double") {
      switch (e.op) { case "+": e.cv = x + y; break; case "-": e.cv = x - y; break; case "*": e.cv = x * y; break; case "/": e.cv = x / y; break; case "%": e.cv = x % y; break; }
      return;
    }
    if (res === "bool") {
      switch (e.op) { case "<": e.cv = x < y; break; case ">": e.cv = x > y; break; case "<=": e.cv = x <= y; break; case ">=": e.cv = x >= y; break; case "==": e.cv = x === y; break; case "!=": e.cv = x !== y; break; }
    }
  }

  // ------------------------------------------------------------------ members and calls
  function staticTypeOf(obj) {
    if (obj.k === "TypeRef") return obj.type;
    if (obj.k === "Name" && STATIC_TYPES.has(obj.name) && !lookup(obj.name)) return obj.name;
    if (obj.k === "Member" && obj.obj.k === "Name" && obj.obj.name === "System" && STATIC_TYPES.has(obj.name)) return obj.name;
    return null;
  }
  const displayStatic = (st) => ({ String: "string", Int32: "int", Double: "double", Char: "char" }[st] || st);

  function memberExpr(e, ctx) {
    const st = staticTypeOf(e.obj);
    if (st) {
      const m = STATIC[st][e.name];
      if (m === undefined) { err("CS0117", `'${displayStatic(st)}' does not contain a definition for '${e.name}'`, e.nameTok); return "error"; }
      if (Array.isArray(m)) {
        if (ctx.callee) { e.static = st; return "method"; }
        err("CS0428", `Cannot convert method group '${e.name}' to non-delegate type 'object'. Did you intend to invoke the method?`, exprStart(e));
        return "error";
      }
      e.static = st; e.prop = true; e.propOwner = displayStatic(st);
      if (e.name === "PI") e.cv = Math.PI; else if (e.name === "E") e.cv = Math.E;
      else if (st === "int" || st === "Int32") e.cv = e.name === "MaxValue" ? 2147483647 : -2147483648;
      else if (e.name === "Empty") e.cv = "";
      return m;
    }
    if (e.obj.k === "Name" && e.obj.name === "System" && !lookup("System")) { err("CS0234", `The type or namespace name '${e.name}' does not exist in the namespace 'System' (are you missing an assembly reference?)`, e.nameTok); return "error"; }
    const ot = expr(e.obj);
    if (ot === "error") return "error";
    if (ot === "void" || ot === "null" || ot === "methodgroup") { err("CS0023", `Operator '.' cannot be applied to operand of type '${ot === "methodgroup" ? "method group" : ot === "null" ? "<null>" : "void"}'`, e.nameTok); return "error"; }
    derefCheck(e.obj);
    const kind = isList(ot) ? "list" : isStr(ot) ? "string" : "value";
    const table = INSTANCE[kind];
    let m = table[e.name];
    if (kind === "list" && e.name === "Count" && ctx.callee) m = table.Count_;
    if (m === "unsupported") { unsupported(`'${e.name}'`, e.nameTok); return "error"; }
    if (m === undefined || (kind === "value" && e.name === "Equals" && false)) {
      err("CS1061", `'${short(ot)}' does not contain a definition for '${e.name}' and no accessible extension method '${e.name}' accepting a first argument of type '${short(ot)}' could be found (are you missing a using directive or an assembly reference?)`, e.nameTok);
      return "error";
    }
    e.recv = kind; e.recvType = ot;
    if (Array.isArray(m)) {
      if (ctx.callee) return "method";
      if (kind === "string" && e.name === "Count") { e.methodGroupArg = true; return "methodgroup"; }
      err("CS0428", `Cannot convert method group '${e.name}' to non-delegate type 'object'. Did you intend to invoke the method?`, exprStart(e));
      return "error";
    }
    if (ctx.callee) { err("CS1955", `Non-invocable member '${short(ot)}.${e.name}' cannot be used like a method.`, e.nameTok); return "error"; }
    e.prop = true; e.propOwner = short(ot);
    return m;
  }

  function callExpr(e) {
    const c = e.callee;
    if (c.k === "Name") {
      const ct = expr(c, null, { callee: true });
      if (ct === "error") { e.args.forEach((a) => expr(a)); return "error"; }
      if (ct !== "func") { e.args.forEach((a) => expr(a)); err("CS0149", "Method name expected", c); return "error"; }
      const sym = c.sym;
      e.user = sym;
      userArgs(e, sym);
      return sym.ret;
    }
    if (c.k === "Member") {
      const ct = expr(c, null, { callee: true });
      if (ct === "error") { e.args.forEach((a) => expr(a)); return "error"; }
      if (ct !== "method") { e.args.forEach((a) => expr(a)); err("CS0149", "Method name expected", exprStart(c)); return "error"; }
      if (c.static) {
        e.builtin = { kind: "static", type: c.static, name: c.name };
        return builtinArgs(e, STATIC[c.static][c.name], c.name, null);
      }
      const kind = c.recv;
      let overloads = INSTANCE[kind][c.name];
      if (kind === "list" && c.name === "Count") overloads = INSTANCE.list.Count_;
      e.builtin = { kind: "inst", recv: kind, name: c.name, recvType: c.recvType };
      return builtinArgs(e, overloads, c.name, c.recvType);
    }
    expr(c);
    e.args.forEach((a) => expr(a));
    if (c.t !== "error") err("CS0149", "Method name expected", exprStart(c));
    return "error";
  }

  function userArgs(e, sym) {
    const ps = sym.params;
    const ats = e.args.map((a) => expr(a));
    if (e.args.length < ps.length) {
      err("CS7036", `There is no argument given that corresponds to the required parameter '${ps[e.args.length].name}' of '${sym.sigTypes}'`, exprStart(e.callee));
      return;
    }
    if (e.args.length > ps.length) { err("CS1501", `No overload for method '${sym.name}' takes ${e.args.length} arguments`, exprStart(e.callee)); return; }
    const sig = `${short(sym.ret)} ${sym.name}(${ps.map((p) => `${short(p.type)} ${p.name}`).join(", ")})`;
    e.args.forEach((a, i) => {
      const at = ats[i], pt = ps[i].type;
      if (at === "error" || pt === "error") return;
      if (at === "methodgroup") { err("CS1503", `Argument ${i + 1}: cannot convert from 'method group' to '${full(pt)}'`, exprPos(a)); return; }
      const cv = conversion(at, pt);
      if (cv === "none" || cv === "explicit") err("CS1503", `Argument ${i + 1}: cannot convert from '${full(at)}' to '${full(pt)}'`, exprPos(a));
      else if (cv === "implicit" && plain(at) !== plain(pt)) a.to = pt;
      if (isStr(pt) && pt !== "string?") argNullCheck(a, ps[i].name, sig);
    });
  }

  function builtinArgs(e, overloads, name, recvType) {
    const ats = e.args.map((a) => expr(a));
    if (ats.includes("error")) return "error";
    const T = recvType && isList(recvType) ? elemOf(recvType) : null;
    const resolveP = (p) => (p === "T" ? T : p === "self" ? plain(recvType) : p);
    const fits = (o) => o.params.length === ats.length && o.params.every((p, i) => {
      const at = ats[i]; p = resolveP(p);
      if (at === "void" || at === "methodgroup") return false;
      if (p === "any") return true;
      if (p === "anyconv") return ["int", "double", "string", "string?", "char", "bool"].includes(at);
      if (p === "num") return isNum(at);
      if (p === "list") return isList(at);
      const c = conversion(at, p);
      return c === "id" || c === "implicit";
    });
    const byCount = overloads.filter((o) => o.params.length === ats.length);
    if (!byCount.length) { err("CS1501", `No overload for method '${name}' takes ${ats.length} arguments`, exprStart(e.callee).line ? memberNamePos(e.callee) : e); return "error"; }
    // prefer an exact match (char overloads over string ones)
    let o = byCount.find((x) => x.params.every((p, i) => resolveP(p) === plain(ats[i]))) || byCount.find(fits);
    if (!o) {
      const cand = byCount[0];
      for (let i = 0; i < ats.length; i++) {
        let p = resolveP(cand.params[i]);
        const at = ats[i];
        if (p === "any" && (at === "void" || at === "methodgroup")) {
          // Console.WriteLine(F()) where F is void: the compiler tries the bool overload first
          err("CS1503", `Argument ${i + 1}: cannot convert from '${at === "void" ? "void" : "method group"}' to 'bool'`, exprPos(e.args[i]));
          return "error";
        }
        if (p === "num") p = "int";
        if (p === "list") p = "System.Collections.Generic.IEnumerable<string>";
        if (p === "anyconv") p = "object";
        const ok = p === "any" || conversion(at, p) === "id" || conversion(at, p) === "implicit";
        if (!ok) { err("CS1503", `Argument ${i + 1}: cannot convert from '${full(at)}' to '${full(p)}'`, exprPos(e.args[i])); return "error"; }
      }
      err("CS1503", `Argument 1: cannot convert from '${full(ats[0])}' to '${full(resolveP(cand.params[0]))}'`, exprPos(e.args[0]));
      return "error";
    }
    e.overload = o;
    const sig = o.sig;
    e.args.forEach((a, i) => {
      const p = resolveP(o.params[i]);
      if (p === "double" && ats[i] !== "double") a.to = "double";
      else if (p === "int" && ats[i] === "char") a.to = "int";
      else if (p === T && plain(ats[i]) !== plain(T) && T) a.to = T;
      if (isStr(p) && !o.nullOk && a.maybeNull) {
        if (sig) argNullCheck(a, o.names[i], sig);
        else if (e.builtin.kind === "inst") argNullCheck(a, o.names[i], `${o.ret === "bool" ? "bool" : short(o.ret)} string.${name}(string ${o.names[i]})`);
      }
    });
    if (o.numeric && T && !isNum(T)) { unsupported(`'${name}' on a List<${T}>`, e); return "error"; }
    let ret = o.ret;
    if (typeof ret === "function") ret = ret(ats.map(plain));
    if (ret === "T") ret = T;
    if (e.builtin.kind === "static" && (name === "Max" || name === "Min" || name === "Abs" || name === "Clamp")) {
      e.args.forEach((a, i) => { if (ats[i] === "char" || (ret === "double" && ats[i] !== "double")) a.to = ret; });
    }
    return ret;
  }
  function memberNamePos(callee) { return callee.nameTok ? callee.nameTok : callee; }

  // ------------------------------------------------------------------ run it
  pushScope("block");
  scope.fn = top;
  const body = prog.body;
  bindBlockBody(body, false);
  popScope();

  // unused variables and functions
  for (const v of allVars) {
    if (v.isParam || v.iter || v.read) continue;
    if (v.assigns === 0) warn("CS0168", `The variable '${v.name}' is declared but never used`, v);
    else if (v.assigns === v.constAssigns) warn("CS0219", `The variable '${v.name}' is assigned but its value is never used`, v);
  }
  for (const f of allFuncs) if (!f.used) warn("CS8321", `The local function '${f.name}' is declared but never used`, f);

  top.vars = allVars;
  return { diags, top };
}

export { CsError };

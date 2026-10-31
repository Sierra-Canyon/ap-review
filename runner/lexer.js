// C# lexer for the course subset. Produces tokens with 1-based line and column, and source offsets.

export class CsError extends Error {
  constructor(code, message, line, col, severity = "error") { super(message); this.code = code; this.line = line; this.col = col; this.severity = severity; }
}

export const KEYWORDS = new Set([
  "int", "double", "bool", "string", "char", "void", "var", "object", "float", "long", "decimal", "byte", "short", "uint", "ulong",
  "if", "else", "for", "foreach", "in", "while", "do", "break", "continue", "return", "new", "true", "false", "null",
  "static", "const", "using", "class", "struct", "namespace", "public", "private", "protected", "internal", "switch", "case", "default",
  "try", "catch", "finally", "throw", "this", "base", "out", "ref", "params", "goto", "is", "as", "typeof", "sizeof", "enum", "interface",
]);

const OPS = ["<<=", ">>=", "??=", "=>", "==", "!=", "<=", ">=", "&&", "||", "++", "--", "+=", "-=", "*=", "/=", "%=", "&=", "|=", "^=", "??", "?.", "::", "<<",
  "+", "-", "*", "/", "%", "=", "<", ">", "!", "&", "|", "^", "~", "?", ":", ";", ",", ".", "(", ")", "{", "}", "[", "]"];

export function lex(src, base = { offset: 0, line: 1, col: 1 }) {
  const toks = [];
  let i = 0, line = base.line, col = base.col;
  const n = src.length;
  const adv = (k = 1) => { for (let j = 0; j < k; j++) { if (src[i] === "\n") { line++; col = 1; } else col++; i++; } };
  const tok = (kind, value, start, sl, sc, extra = {}) => toks.push({ kind, value, start: base.offset + start, end: base.offset + i, line: sl, col: sc, endLine: line, endCol: col, ...extra });

  while (i < n) {
    const c = src[i];
    if (c === " " || c === "\t" || c === "\r" || c === "\n" || c === "﻿") { adv(); continue; }
    if (c === "/" && src[i + 1] === "/") { while (i < n && src[i] !== "\n") adv(); continue; }
    if (c === "/" && src[i + 1] === "*") {
      const sl = line, sc = col; adv(2);
      while (i < n && !(src[i] === "*" && src[i + 1] === "/")) adv();
      if (i >= n) throw new CsError("CS1035", "End-of-file found, '*/' expected", sl, sc);
      adv(2); continue;
    }
    if (c === "#") { while (i < n && src[i] !== "\n") adv(); continue; } // #nullable and the like
    const start = i, sl = line, sc = col;
    // identifiers and keywords (allow @ident)
    if (/[A-Za-z_]/.test(c) || (c === "@" && /[A-Za-z_]/.test(src[i + 1] || ""))) {
      if (c === "@") adv();
      while (i < n && /[A-Za-z0-9_]/.test(src[i])) adv();
      const word = src.slice(start, i).replace(/^@/, "");
      tok(KEYWORDS.has(word) && c !== "@" ? "kw" : "id", word, start, sl, sc);
      continue;
    }
    // numbers
    if (/[0-9]/.test(c) || (c === "." && /[0-9]/.test(src[i + 1] || ""))) {
      let isDouble = false;
      if (c === "0" && (src[i + 1] === "x" || src[i + 1] === "X")) {
        adv(2); while (i < n && /[0-9A-Fa-f_]/.test(src[i])) adv();
        const text = src.slice(start + 2, i).replace(/_/g, "");
        const v = parseInt(text, 16);
        tok("int", v, start, sl, sc, { text: src.slice(start, i) });
        continue;
      }
      while (i < n && /[0-9_]/.test(src[i])) adv();
      if (src[i] === "." && /[0-9]/.test(src[i + 1] || "")) { isDouble = true; adv(); while (i < n && /[0-9_]/.test(src[i])) adv(); }
      if ((src[i] === "e" || src[i] === "E") && /[0-9+-]/.test(src[i + 1] || "")) {
        isDouble = true; adv(); if (src[i] === "+" || src[i] === "-") adv(); while (i < n && /[0-9]/.test(src[i])) adv();
      }
      let suffix = "";
      if (i < n && /[dDfFmMlLuU]/.test(src[i])) { suffix = src[i].toLowerCase(); adv(); if (/[lLuU]/.test(src[i] || "")) adv(); }
      const text = src.slice(start, i);
      const digits = text.replace(/_/g, "").replace(/[dDfFmMlLuU]+$/, "");
      if (suffix === "f" || suffix === "m") tok("badnum", digits, start, sl, sc, { suffix, text });
      else if (suffix === "l" || suffix === "u") tok("badnum", digits, start, sl, sc, { suffix, text });
      else if (isDouble || suffix === "d") tok("double", Number(digits), start, sl, sc, { text });
      else {
        const v = Number(digits);
        if (v > 2147483647) {
          if (v <= 4294967295) tok("badnum", digits, start, sl, sc, { suffix: "u", text });
          else tok("badnum", digits, start, sl, sc, { suffix: "l", text });
        } else tok("int", v, start, sl, sc, { text });
      }
      continue;
    }
    // strings
    if (c === '"' || (c === "@" && src[i + 1] === '"')) {
      const verbatim = c === "@"; if (verbatim) adv(); adv();
      let s = "";
      for (;;) {
        if (i >= n || (!verbatim && src[i] === "\n")) throw new CsError("CS1010", "Newline in constant", sl, sc);
        const ch = src[i];
        if (ch === '"') { if (verbatim && src[i + 1] === '"') { s += '"'; adv(2); continue; } adv(); break; }
        if (ch === "\\" && !verbatim) { s += readEscape(); continue; }
        s += ch; adv();
      }
      tok("string", s, start, sl, sc);
      continue;
    }
    if (c === "$" && (src[i + 1] === '"' || (src[i + 1] === "@" && src[i + 2] === '"'))) {
      const verbatim = src[i + 1] === "@"; adv(verbatim ? 3 : 2);
      const parts = []; let text = "";
      for (;;) {
        if (i >= n || (!verbatim && src[i] === "\n")) throw new CsError("CS1010", "Newline in constant", sl, sc);
        const ch = src[i];
        if (ch === '"') { if (verbatim && src[i + 1] === '"') { text += '"'; adv(2); continue; } adv(); break; }
        if (ch === "{" && src[i + 1] === "{") { text += "{"; adv(2); continue; }
        if (ch === "}" && src[i + 1] === "}") { text += "}"; adv(2); continue; }
        if (ch === "\\" && !verbatim) { text += readEscape(); continue; }
        if (ch === "{") {
          if (text) parts.push({ text }); text = "";
          adv();
          const eStart = i, eLine = line, eCol = col;
          let depth = 0, fmt = null, align = null, eEnd = -1;
          while (i < n) {
            const d = src[i];
            if (d === '"' || d === "'") { const q = d; adv(); while (i < n && src[i] !== q) { if (src[i] === "\\") adv(); adv(); } adv(); continue; }
            if (d === "(" || d === "[" || d === "{") depth++;
            else if (d === ")" || d === "]") depth--;
            else if (d === "}") { if (depth === 0) break; depth--; }
            else if (d === ":" && depth === 0 && eEnd < 0) { eEnd = i; adv(); const fs = i; while (i < n && src[i] !== "}") adv(); fmt = src.slice(fs, i); break; }
            else if (d === "," && depth === 0 && eEnd < 0) { eEnd = i; adv(); const as = i; while (i < n && src[i] !== "}" && src[i] !== ":") adv(); align = src.slice(as, i).trim(); if (src[i] === ":") { adv(); const fs = i; while (i < n && src[i] !== "}") adv(); fmt = src.slice(fs, i); } break; }
            else if (d === "\n" && !verbatim) throw new CsError("CS1010", "Newline in constant", sl, sc);
            adv();
          }
          if (i >= n) throw new CsError("CS1010", "Newline in constant", sl, sc);
          const exprSrc = src.slice(eStart, eEnd >= 0 ? eEnd : i);
          adv(); // }
          parts.push({ expr: exprSrc, base: { offset: base.offset + eStart, line: eLine, col: eCol }, fmt, align });
          continue;
        }
        text += ch; adv();
      }
      if (text) parts.push({ text });
      tok("interp", parts, start, sl, sc);
      continue;
    }
    if (c === "'") {
      adv();
      let ch;
      if (src[i] === "\\") ch = readEscape();
      else if (src[i] === "'" || src[i] === "\n" || i >= n) throw new CsError("CS1011", "Empty character literal", sl, sc);
      else { ch = src[i]; adv(); }
      if (src[i] !== "'") { while (i < n && src[i] !== "'" && src[i] !== "\n") adv(); if (src[i] === "'") adv(); throw new CsError("CS1012", "Too many characters in character literal", sl, sc); }
      adv();
      tok("char", ch, start, sl, sc);
      continue;
    }
    const op = OPS.find((o) => src.startsWith(o, i));
    if (op) { adv(op.length); tok("op", op, start, sl, sc); continue; }
    throw new CsError("CS1056", `Unexpected character '${c}'`, sl, sc);
  }
  toks.push({ kind: "eof", value: "", start: base.offset + i, end: base.offset + i, line, col, endLine: line, endCol: col });
  return toks;

  function readEscape() {
    const sl = line, sc = col;
    adv(); const e = src[i]; adv();
    switch (e) {
      case "n": return "\n"; case "t": return "\t"; case "r": return "\r"; case "0": return "\0";
      case "\\": return "\\"; case '"': return '"'; case "'": return "'"; case "a": return "\x07"; case "b": return "\b"; case "f": return "\f"; case "v": return "\v";
      case "u": { const h = src.slice(i, i + 4); adv(4); return String.fromCharCode(parseInt(h, 16)); }
      default: throw new CsError("CS1009", "Unrecognized escape sequence", sl, sc);
    }
  }
}

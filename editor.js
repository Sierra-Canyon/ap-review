// A small code editor: a textarea over a highlighted copy of its text, with line numbers,
// four-space indents, and Enter that keeps the indent. Esc leaves the editor so Tab can move focus on.

export const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

export function hl(code) {
  const re = /(\/\/[^\n]*)|(\$?@?"(?:[^"\\\n]|\\.)*"?)|('(?:[^'\\\n]|\\.)*')|\b(\d+(?:\.\d+)?)\b|\b(int|string|bool|void|return|if|else|for|foreach|while|do|break|continue|new|true|false|var|double|char|in|null|const|static)\b|\b(List|Console|Math)\b/g;
  let out = "", last = 0, m;
  while ((m = re.exec(code))) {
    out += esc(code.slice(last, m.index));
    const cls = m[1] ? "co" : m[2] || m[3] ? "st" : m[4] ? "nu" : m[5] ? "kw" : "ty";
    out += `<span class="${cls}">${esc(m[0])}</span>`;
    last = re.lastIndex;
  }
  return out + esc(code.slice(last));
}

let edCount = 0;
export function makeEditor(host, { code = "", label = "Code", onChange = null, minLines = 3 } = {}) {
  const id = "ed" + ++edCount + "-" + Math.random().toString(36).slice(2, 6);
  host.classList.add("ed");
  host.innerHTML = `<div class="ed-gutter" aria-hidden="true"></div>
    <div class="ed-main">
      <pre class="ed-hl" aria-hidden="true"><code></code></pre>
      <textarea class="ed-ta" id="${id}" spellcheck="false" autocapitalize="off" autocomplete="off" autocorrect="off" wrap="off" aria-label="${esc(label)}. Esc, then Tab, to leave the editor."></textarea>
    </div>`;
  const ta = host.querySelector("textarea"), pre = host.querySelector(".ed-hl code"), gut = host.querySelector(".ed-gutter"), main = host.querySelector(".ed-main");
  let marks = {};
  ta.value = code;
  function paint() {
    const v = ta.value;
    const lines = v.split("\n");
    const n = Math.max(lines.length, minLines);
    // highlight line by line so marked lines can carry a class
    const html = hl(v + (v.endsWith("\n") ? " " : "")).split("\n");
    pre.innerHTML = html.map((l, i) => `<span class="ln${marks[i + 1] ? " " + marks[i + 1] : ""}">${l || " "}</span>`).join("\n");
    let g = "";
    for (let i = 1; i <= n; i++) g += `<span class="${marks[i] ? marks[i] : ""}">${i}</span>`;
    gut.innerHTML = g;
    ta.rows = n;
    ta.style.height = "auto";
    ta.style.height = Math.max(ta.scrollHeight, n * lineH() + pad()) + "px";
    main.style.height = ta.style.height;
  }
  const lineH = () => parseFloat(getComputedStyle(ta).lineHeight) || 21;
  const pad = () => { const cs = getComputedStyle(ta); return parseFloat(cs.paddingTop) + parseFloat(cs.paddingBottom) + 2; };
  ta.addEventListener("scroll", () => { pre.parentElement.scrollLeft = ta.scrollLeft; });
  ta.addEventListener("input", () => { marks = {}; paint(); onChange?.(ta.value); });
  ta.addEventListener("keydown", (e) => {
    if (e.key === "Escape") { ta.blur(); return; }
    const s = ta.selectionStart, en = ta.selectionEnd, v = ta.value;
    if (e.key === "Tab") {
      e.preventDefault();
      const ls = v.lastIndexOf("\n", s - 1) + 1;
      if (e.shiftKey) {
        const lineEnd = v.indexOf("\n", en); const le = lineEnd < 0 ? v.length : lineEnd;
        const block = v.slice(ls, le).split("\n").map((l) => l.replace(/^ {1,4}/, "")).join("\n");
        setText(v.slice(0, ls) + block + v.slice(le), ls, ls + block.length);
      } else if (s !== en && v.slice(s, en).includes("\n")) {
        const lineEnd = v.indexOf("\n", en - 1); const le = lineEnd < 0 ? v.length : lineEnd;
        const block = v.slice(ls, le).split("\n").map((l) => "    " + l).join("\n");
        setText(v.slice(0, ls) + block + v.slice(le), ls, ls + block.length);
      } else insert("    ");
      return;
    }
    if (e.key === "Enter" && !e.shiftKey && !e.metaKey && !e.ctrlKey) {
      e.preventDefault();
      const ls = v.lastIndexOf("\n", s - 1) + 1;
      const line = v.slice(ls, s);
      let indent = /^\s*/.exec(line)[0];
      if (/\{\s*$/.test(line)) indent += "    ";
      insert("\n" + indent);
      return;
    }
    if (e.key === "}") {
      const ls = v.lastIndexOf("\n", s - 1) + 1;
      const before = v.slice(ls, s);
      if (/^ {4,}$/.test(before) && s === en) {
        e.preventDefault();
        setText(v.slice(0, s - 4) + "}" + v.slice(en), s - 3, s - 3);
      }
    }
  });
  function insert(t) {
    const s = ta.selectionStart, en = ta.selectionEnd;
    // execCommand keeps the browser's undo history where it is supported
    if (!document.execCommand || !document.execCommand("insertText", false, t)) {
      setText(ta.value.slice(0, s) + t + ta.value.slice(en), s + t.length, s + t.length);
    }
  }
  function setText(v, a, b) {
    ta.value = v; ta.setSelectionRange(a, b);
    marks = {}; paint(); onChange?.(ta.value);
  }
  paint();
  // paint again once fonts arrive, since the line height can change
  if (document.fonts?.ready) document.fonts.ready.then(paint);
  return {
    get value() { return ta.value; },
    set value(v) { ta.value = v; marks = {}; paint(); },
    mark(line, cls) { marks = line ? { [line]: cls } : {}; paint(); },
    clearMarks() { marks = {}; paint(); },
    focusLine(line) {
      const lines = ta.value.split("\n");
      let off = 0; for (let i = 0; i < line - 1 && i < lines.length; i++) off += lines[i].length + 1;
      ta.focus(); ta.setSelectionRange(off, off + (lines[line - 1] || "").length);
    },
    textarea: ta,
  };
}

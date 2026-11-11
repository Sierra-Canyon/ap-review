// Graphs for math questions, drawn as SVG from a description. Deck files call graph({...}) and put the result in a
// source block ({ svg: graph(...) }). It runs the same in the browser and in Node, so the checks can draw every graph.
//
// graph({
//   x: [-4, 4], y: [-3, 5],          the window
//   step: 1 or { x: 1, y: 2 },       grid lines and tick labels (labels every step; use labelEvery to thin them)
//   fns: [{ f: (x) => x * x, from: -2, to: 2, dash: false, label: "f" }],   curves, sampled finely; breaks where f is not finite
//   segments: [[x1, y1, x2, y2], ...],                                     straight pieces (piecewise graphs)
//   dots: [[x, y, "open" | "closed"], ...],                                 open or filled endpoints
//   vlines: [{ x: 2, dash: true }],  hlines: [{ y: 1, dash: true }],        asymptotes or reference lines
//   labels: [[x, y, "text"], ...],   xname: "x", yname: "y",                text on the graph and axis names
//   field: { f: (x, y) => x - y, step: 1 },  a slope field: a short segment of slope f(x, y) at each grid point
//   alt: "Graph of f on [-4, 4] ...",                                        what a screen reader says (required)
//   width: 360, height: 260,
// })
const W = 360, H = 260, PAD = 30;
const fmt = (n) => (Math.abs(n - Math.round(n)) < 1e-9 ? String(Math.round(n)) : String(+n.toFixed(2))).replace("-", "−");
const escx = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

export function graph(o) {
  const width = o.width || W, height = o.height || H;
  const [x0, x1] = o.x, [y0, y1] = o.y;
  const sx = (x) => PAD + ((x - x0) / (x1 - x0)) * (width - 2 * PAD);
  const sy = (y) => height - PAD - ((y - y0) / (y1 - y0)) * (height - 2 * PAD);
  const stepX = typeof o.step === "object" ? o.step.x : o.step || 1, stepY = typeof o.step === "object" ? o.step.y : o.step || 1;
  const every = o.labelEvery || 1;
  const p = (n) => +n.toFixed(2);
  const out = [];
  // grid and ticks
  for (let i = Math.ceil(x0 / stepX); i * stepX <= x1 + 1e-9; i++) {
    const x = i * stepX; out.push(`<line class="g-grid" x1="${p(sx(x))}" y1="${PAD}" x2="${p(sx(x))}" y2="${height - PAD}"/>`);
    if (Math.abs(x) > 1e-9 && i % every === 0) out.push(`<text class="g-tick" x="${p(sx(x))}" y="${p(Math.min(height - PAD, Math.max(PAD, sy(0))) + 14)}" text-anchor="middle">${fmt(x)}</text>`);
  }
  for (let j = Math.ceil(y0 / stepY); j * stepY <= y1 + 1e-9; j++) {
    const y = j * stepY; out.push(`<line class="g-grid" x1="${PAD}" y1="${p(sy(y))}" x2="${width - PAD}" y2="${p(sy(y))}"/>`);
    if (Math.abs(y) > 1e-9 && j % every === 0) out.push(`<text class="g-tick" x="${p(Math.min(width - PAD, Math.max(PAD, sx(0))) - 5)}" y="${p(sy(y) + 4)}" text-anchor="end">${fmt(y)}</text>`);
  }
  // axes
  if (y0 <= 0 && y1 >= 0) out.push(`<line class="g-axis" x1="${PAD}" y1="${p(sy(0))}" x2="${width - PAD + 8}" y2="${p(sy(0))}" marker-end="url(#g-arrow)"/>`);
  if (x0 <= 0 && x1 >= 0) out.push(`<line class="g-axis" x1="${p(sx(0))}" y1="${height - PAD}" x2="${p(sx(0))}" y2="${PAD - 8}" marker-end="url(#g-arrow)"/>`);
  if (o.xname) out.push(`<text class="g-name" x="${width - PAD + 10}" y="${p(Math.min(height - PAD, Math.max(PAD, sy(0))) + 4)}">${escx(o.xname)}</text>`);
  if (o.yname) out.push(`<text class="g-name" x="${p(Math.min(width - PAD, Math.max(PAD, sx(0))) + 6)}" y="${PAD - 10}">${escx(o.yname)}</text>`);
  // reference lines
  for (const v of o.vlines || []) out.push(`<line class="g-ref${v.dash === false ? "" : " g-dash"}" x1="${p(sx(v.x))}" y1="${PAD}" x2="${p(sx(v.x))}" y2="${height - PAD}"/>`);
  for (const h of o.hlines || []) out.push(`<line class="g-ref${h.dash === false ? "" : " g-dash"}" x1="${PAD}" y1="${p(sy(h.y))}" x2="${width - PAD}" y2="${p(sy(h.y))}"/>`);
  // curves
  const clip = `<clipPath id="CLIP"><rect x="${PAD}" y="${PAD}" width="${width - 2 * PAD}" height="${height - 2 * PAD}"/></clipPath>`;
  const curves = [];
  for (const fn of o.fns || []) {
    const a = fn.from ?? x0, b = fn.to ?? x1, n = 600;
    let d = "", pen = false, prev = null;
    for (let k = 0; k <= n; k++) {
      const x = a + ((b - a) * k) / n, y = fn.f(x);
      const ok = Number.isFinite(y) && Math.abs(y) < 1e6;
      // a jump across most of the window (an asymptote) lifts the pen
      if (ok && prev !== null && Math.abs(y - prev) > (y1 - y0) * 0.9) pen = false;
      if (ok) { d += `${pen ? "L" : "M"}${p(sx(x))},${p(sy(Math.max(y0 - (y1 - y0), Math.min(y1 + (y1 - y0), y))))}`; pen = true; prev = y; } else { pen = false; prev = null; }
    }
    curves.push(`<path class="g-curve${fn.dash ? " g-dash" : ""}" d="${d}"/>`);
    if (fn.label) { const lx = fn.labelAt ?? (a + (b - a) * 0.8), ly = fn.f(lx); if (Number.isFinite(ly)) out.push(`<text class="g-label" x="${p(sx(lx) + 6)}" y="${p(sy(ly) - 6)}">${escx(fn.label)}</text>`); }
  }
  if (o.field) {
    const st = o.field.step || 1, len = 0.32 * st;
    for (let i = Math.ceil(x0 / st); i * st <= x1 + 1e-9; i++) for (let j = Math.ceil(y0 / st); j * st <= y1 + 1e-9; j++) {
      const x = i * st, y = j * st, m = o.field.f(x, y);
      if (!Number.isFinite(m)) continue;
      // equal length on screen: scale the run by the window's aspect
      const ax = (width - 2 * PAD) / (x1 - x0), ay = (height - 2 * PAD) / (y1 - y0);
      const ang = Math.atan2(m * ay, ax), r = len * ax;
      const cx = sx(x), cy = sy(y), dx = Math.cos(ang) * r, dy = Math.sin(ang) * r;
      curves.push(`<line class="g-field" x1="${p(cx - dx)}" y1="${p(cy + dy)}" x2="${p(cx + dx)}" y2="${p(cy - dy)}"/>`);
    }
  }
  for (const [ax, ay, bx, by] of o.segments || []) curves.push(`<line class="g-curve" x1="${p(sx(ax))}" y1="${p(sy(ay))}" x2="${p(sx(bx))}" y2="${p(sy(by))}"/>`);
  const dots = (o.dots || []).map(([x, y, kind]) => `<circle class="${kind === "open" ? "g-open" : "g-dot"}" cx="${p(sx(x))}" cy="${p(sy(y))}" r="3.6"/>`);
  for (const [x, y, t] of o.labels || []) out.push(`<text class="g-label" x="${p(sx(x))}" y="${p(sy(y))}">${escx(t)}</text>`);
  if (!o.alt) throw new Error("graph() needs alt text");
  // ids must be unique on the page: one graph can appear more than once, so ids carry a counter
  const id = "g" + (graph.n = (graph.n || 0) + 1);
  return `<svg class="graph" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" role="img" aria-label="${escx(o.alt)}" xmlns="http://www.w3.org/2000/svg">
<defs>${clip.replace("CLIP", id + "c")}<marker id="${id}a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0L10,5L0,10z" class="g-arrowhead"/></marker></defs>
${out.join("\n").replace(/url\(#g-arrow\)/g, `url(#${id}a)`)}
<g clip-path="url(#${id}c)">${curves.join("")}</g>${dots.join("")}</svg>`;
}

// A bar chart of real, cited data (history and social science stimuli). The numbers also go in the source's table or alt text,
// so a screen reader gets them.
// bars({ labels: ["1290", ...], values: [4.75, ...], y: [0, 5], step: 1, yname: "Millions of people", alt: "...", width: 520, height: 300, fmt: (v) => v.toFixed(2) })
export function bars(o) {
  // One series: { labels, values }. Several (grouped bars, with a legend): { labels, series: [{ name, values }, ...] } (up to 3).
  const series = o.series || [{ name: "", values: o.values }];
  const leg = series.length > 1 ? 22 : 0;
  const width = o.width || 520, height = (o.height || 300) + leg, L = 48, R = 12, T = 26 + leg, B = 34;
  const [y0, y1] = o.y, step = o.step || 1, n = o.labels.length, k = series.length;
  const sy = (v) => height - B - ((v - y0) / (y1 - y0)) * (height - T - B);
  const bw = (width - L - R) / n;
  const p = (v) => +v.toFixed(1);
  const out = [];
  for (let v = y0; v <= y1 + 1e-9; v += step) {
    out.push(`<line class="g-grid" x1="${L}" y1="${p(sy(v))}" x2="${width - R}" y2="${p(sy(v))}"/>`);
    out.push(`<text class="g-tick" x="${L - 6}" y="${p(sy(v) + 4)}" text-anchor="end">${fmt(v)}</text>`);
  }
  o.labels.forEach((lab, i) => {
    const gw = bw * 0.72, x0 = L + i * bw + (bw - gw) / 2, w = gw / k;
    series.forEach((s, j) => {
      const v = s.values[i], x = x0 + j * w;
      if (v === null || v === undefined) return;
      out.push(`<rect class="g-bar g-s${j}" x="${p(x + w * 0.06)}" y="${p(sy(v))}" width="${p(w * 0.88)}" height="${p(sy(y0) - sy(v))}"/>`);
      out.push(`<text class="g-val" x="${p(x + w / 2)}" y="${p(sy(v) - 5)}" text-anchor="middle"${k > 2 ? ' font-size="10"' : ""}>${escx(o.fmt ? o.fmt(v) : String(v))}</text>`);
    });
    out.push(`<text class="g-tick" x="${p(L + i * bw + bw / 2)}" y="${height - B + 16}" text-anchor="middle">${escx(lab)}</text>`);
  });
  out.push(`<line class="g-axis" x1="${L}" y1="${p(sy(y0))}" x2="${width - R}" y2="${p(sy(y0))}"/>`);
  if (leg) series.forEach((s, j) => {
    const x = L + j * ((width - L - R) / k);
    out.push(`<rect class="g-bar g-s${j}" x="${p(x)}" y="6" width="14" height="12"/><text class="g-tick" x="${p(x + 20)}" y="16">${escx(s.name)}</text>`);
  });
  if (o.yname) out.push(`<text class="g-name" x="${L - 40}" y="${T - 10}">${escx(o.yname)}</text>`);
  if (o.xname) out.push(`<text class="g-name" x="${width - R}" y="${height - 4}" text-anchor="end">${escx(o.xname)}</text>`);
  if (!o.alt) throw new Error("bars() needs alt text");
  return `<svg class="graph chart" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" role="img" aria-label="${escx(o.alt)}" xmlns="http://www.w3.org/2000/svg">${out.join("")}</svg>`;
}

// A line chart of data over time (or any ordered categories): { labels, series: [{ name, values }, ...] (up to 3),
// y: [0, 100], step: 20, yname, fmt, alt, width, height, marks: true }. Each line is labeled at its last point, and
// the series are told apart by dash pattern as well as shade, so they read in grayscale.
export function lines(o) {
  const width = o.width || 560, height = o.height || 300, L = 48, R = o.right ?? 96, T = 26, B = 34;
  const [y0, y1] = o.y, step = o.step || 1, n = o.labels.length;
  const sy = (v) => height - B - ((v - y0) / (y1 - y0)) * (height - T - B);
  const sx = (i) => L + (n === 1 ? (width - L - R) / 2 : (i * (width - L - R)) / (n - 1));
  const p = (v) => +v.toFixed(1);
  const out = [];
  for (let v = y0; v <= y1 + 1e-9; v += step) {
    out.push(`<line class="g-grid" x1="${L}" y1="${p(sy(v))}" x2="${width - R}" y2="${p(sy(v))}"/>`);
    out.push(`<text class="g-tick" x="${L - 6}" y="${p(sy(v) + 4)}" text-anchor="end">${fmt(v)}</text>`);
  }
  const every = o.labelEvery || 1;
  o.labels.forEach((lab, i) => { if (i % every === 0 || i === n - 1) out.push(`<text class="g-tick" x="${p(sx(i))}" y="${height - B + 16}" text-anchor="middle">${escx(lab)}</text>`); });
  out.push(`<line class="g-axis" x1="${L}" y1="${p(sy(y0))}" x2="${width - R}" y2="${p(sy(y0))}"/>`);
  o.series.forEach((s, j) => {
    const pts = s.values.map((v, i) => (v === null || v === undefined ? null : [sx(i), sy(v)]));
    let d = "", pen = false;
    pts.forEach((q) => { if (!q) { pen = false; return; } d += (pen ? "L" : "M") + p(q[0]) + "," + p(q[1]); pen = true; });
    out.push(`<path class="g-line g-s${j}" d="${d}"/>`);
    if (o.marks !== false) pts.forEach((q) => q && out.push(`<circle class="g-mark g-s${j}" cx="${p(q[0])}" cy="${p(q[1])}" r="3"/>`));
    const last = pts.map((q, i) => [q, i]).filter(([q]) => q).pop();
    if (last && s.name) out.push(`<text class="g-tick" x="${p(last[0][0] + 6)}" y="${p(last[0][1] + 4 + (s.dy || 0))}">${escx(s.name)}</text>`);
  });
  if (o.yname) out.push(`<text class="g-name" x="${L - 40}" y="${T - 10}">${escx(o.yname)}</text>`);
  if (o.xname) out.push(`<text class="g-name" x="${width - R}" y="${height - 4}" text-anchor="end">${escx(o.xname)}</text>`);
  if (!o.alt) throw new Error("lines() needs alt text");
  return `<svg class="graph chart" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" role="img" aria-label="${escx(o.alt)}" xmlns="http://www.w3.org/2000/svg">${out.join("")}</svg>`;
}

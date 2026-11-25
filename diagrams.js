// Setup diagrams for physics questions, drawn as SVG strings. Deck files call these and put the result in a set block
// ({ svg: incline({...}) }). Same code in the browser and in Node, no dependencies. Every function takes one options object and
// requires `alt` (what a screen reader says), like graph(). Colors come from CSS classes (.g-* from plot.js plus .d-* in
// styles.css, all built on theme variables), so diagrams follow the light and dark themes. Canvas units are pixels, y up.
// Labels may use subscripts: "F_N", "m_1", "v_{0x}". Angles are degrees, counterclockwise from +x. Forces are thick (accent),
// velocities thin (green). Optional width/height on every function.
//
// scene({ width, height, alt, items: [ { rect: { x, y, w, h, rot, label, mass, fill } },      x,y = center; mass is a second line
//   { circle: { x, y, r, label, fill } }, { line: { from: [x, y], to: [x, y], dash } }, { dot: { x, y, r } },
//   { arrow: { from, to, label, kind: "force" | "velocity" | "plain", at: "tail", dx, dy } }, { label: { x, y, text, anchor } },
//   { ground: { from, to, depth } }          hatched on the right-hand side of from->to (left to right: below)
//   { arc: { x, y, r, from, to, label, dash } },  { spring: { from, to, coils, amp, label } }, { rope: { points: [[x, y], ...] } },
//   { pulley: { x, y, r } }, { pivot: { x, y, size, kind: "triangle" | "pin" } }, { fluid: { x, y, w, h } },  x,y = bottom-left
//   { poly: { points, fill } } ] })         an item may also be written { type: "rect", x, y, ... }
// fbd({ forces: [{ angle: 90, length: 70, label: "F_N", kind }], dot: true | box: { label, w, h }, alt })
// incline({ angle: 30, block: { label: "m", mass, pos: .55, w, h }, forces: [{ dir: "weight" | "normal" | "friction" | "up-slope" | "down-slope", angle, length, label }], labels: { angle: "θ" }, alt })
// atwood({ m1: "m_1", m2: "m_2", heavier: "left" | "right" | "equal", motion: true, alt })
// tablePulley({ m1: "m_1", m2: "m_2", motion: true, friction: true, alt })
// springMass({ orientation: "horizontal" | "vertical", stretch: 40, mass: "m", k: "k", eq: "x = 0", x: "x", alt })
// pendulum({ angle: 30, length: 190, label: "m", forces: true, path: true, alt })
// beam({ length: 100, pivot: 50, items: [{ at: 20, mass: "m_1" }, { at: 90, force: "down" | "up", label: "F" }], tick: 10, unit: "cm", alt })
// carts({ carts: [{ label: "m_1", v: 2, vlabel: "v_1", x }, ...], title: "Before", alt })
// circle({ view: "top" | "loop", angle: 30, r: 95, forces: ["velocity", "centripetal" | "tension" | "normal" | "gravity" | { kind, label }], radius: "r", alt })
// tank({ level: 190, depth: 80, labels: { depth: "h", point: "P" }, block: { kind: "floating" | "submerged", label: "m", forces: true }, alt })
// tank({ pipe: true, labels: { v1: "v_1", v2: "v_2", a1: "A_1", a2: "A_2" }, alt })      a pipe that narrows (continuity)
const E = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const P = (n) => +n.toFixed(1);
const rad = (d) => (d * Math.PI) / 180;
const txt = (s) => E(s).replace(/_(\{[^}]+\}|\w+)/g, (m, b) => `<tspan baseline-shift="sub" font-size="70%">${b.replace(/[{}]/g, "")}</tspan>`);
const ARROWS = { force: [12, 11], velocity: [9, 9], plain: [8, 8] };

export function scene(o) {
  if (!o.alt) throw new Error("scene() needs alt text");
  const W = o.width || 360, H = o.height || 260, id = "d" + (scene.n = (scene.n || 0) + 1);
  const X = (x) => P(x), Y = (y) => P(H - y), out = [];
  const T = (x, y, s, a = "middle", cls = "") => out.push(`<text class="g-label ${cls}" x="${X(x)}" y="${P(H - y + 4)}" text-anchor="${a}">${txt(s)}</text>`);
  const path = (pts, cls, close) => out.push(`<path class="${cls}" d="${pts.map((q, i) => (i ? "L" : "M") + X(q[0]) + "," + Y(q[1])).join("")}${close ? "Z" : ""}"/>`);
  const at = (x, y, r, deg) => [x + r * Math.cos(rad(deg)), y + r * Math.sin(rad(deg))];
  const draw = {
    rect(a) {
      const cx = X(a.x), cy = Y(a.y);
      out.push(`<rect class="${a.fill ? "d-" + a.fill : "d-body"}" x="${P(cx - a.w / 2)}" y="${P(cy - a.h / 2)}" width="${a.w}" height="${a.h}"${a.rot ? ` transform="rotate(${-a.rot} ${cx} ${cy})"` : ""}/>`);
      const ls = [a.label, a.mass].filter(Boolean);
      ls.forEach((s, i) => T(a.x, a.y + (ls.length - 1) * 7 - i * 14, s, "middle", i && a.label ? "d-up" : ""));
    },
    circle(a) { out.push(`<circle class="${a.fill ? "d-" + a.fill : "d-body"}" cx="${X(a.x)}" cy="${Y(a.y)}" r="${a.r}"/>`); if (a.label) T(a.x, a.y, a.label); },
    line(a) { out.push(`<line class="${a.dash ? "g-ref g-dash" : "d-line"}" x1="${X(a.from[0])}" y1="${Y(a.from[1])}" x2="${X(a.to[0])}" y2="${Y(a.to[1])}"/>`); },
    dot(a) { out.push(`<circle class="g-dot" cx="${X(a.x)}" cy="${Y(a.y)}" r="${a.r || 3.5}"/>`); },
    arrow(a) {
      const [x1, y1] = a.from, [x2, y2] = a.to, k = a.kind || "force", L = Math.hypot(x2 - x1, y2 - y1) || 1;
      out.push(`<line class="d-${k}" x1="${X(x1)}" y1="${Y(y1)}" x2="${X(x2)}" y2="${Y(y2)}" marker-end="url(#${id}${k})"/>`);
      if (!a.label) return;
      const s = a.at === "tail" ? -1 : 1, ux = ((x2 - x1) / L) * s, uy = ((y2 - y1) / L) * s, [bx, by] = a.at === "tail" ? [x1, y1] : [x2, y2];
      T(bx + ux * 12 + (a.dx || 0), by + uy * 12 + (a.dy || 0), a.label, ux > 0.35 ? "start" : ux < -0.35 ? "end" : "middle");
    },
    label(a) { T(a.x, a.y, a.text, a.anchor || "middle"); },
    ground(a) {
      const [x1, y1] = a.from, [x2, y2] = a.to, L = Math.hypot(x2 - x1, y2 - y1), tx = (x2 - x1) / L, ty = (y2 - y1) / L, d = a.depth || 9;
      let h = "";
      for (let s = 0; s <= L + 0.1; s += 8) { const px = x1 + tx * s, py = y1 + ty * s; h += `M${X(px)},${Y(py)}L${X(px + ty * d - tx * d)},${Y(py - tx * d - ty * d)}`; }
      out.push(`<path class="d-hatch" d="${h}"/>`);
      draw.line({ from: a.from, to: a.to });
    },
    arc(a) {
      const [sx, sy] = at(a.x, a.y, a.r, a.from), [ex, ey] = at(a.x, a.y, a.r, a.to), big = (a.to - a.from + 360) % 360 > 180 ? 1 : 0;
      out.push(`<path class="d-arc${a.dash ? " g-dash" : ""}" d="M${X(sx)},${Y(sy)}A${a.r},${a.r} 0 ${big} 0 ${X(ex)},${Y(ey)}"/>`);
      if (a.label) { const [lx, ly] = at(a.x, a.y, a.r + 13, (a.from + a.to) / 2); T(lx, ly, a.label); }
    },
    spring(a) {
      const [x1, y1] = a.from, [x2, y2] = a.to, L = Math.hypot(x2 - x1, y2 - y1), tx = (x2 - x1) / L, ty = (y2 - y1) / L, amp = a.amp || 9;
      const lead = Math.min(14, L * 0.15), n = a.coils || 8, pts = [[x1, y1], [x1 + tx * lead, y1 + ty * lead]];
      for (let i = 0; i < 2 * n; i++) { const s = lead + ((L - 2 * lead) * (i + 0.5)) / (2 * n), g = i % 2 ? -amp : amp; pts.push([x1 + tx * s - ty * g, y1 + ty * s + tx * g]); }
      pts.push([x2 - tx * lead, y2 - ty * lead], [x2, y2]);
      path(pts, "d-spring");
      if (a.label) T((x1 + x2) / 2 - ty * (amp + 11), (y1 + y2) / 2 + tx * (amp + 11), a.label);
    },
    rope(a) { path(a.points, a.cls || "d-rope"); },
    pulley(a) { out.push(`<circle class="d-body" cx="${X(a.x)}" cy="${Y(a.y)}" r="${a.r}"/>`); draw.dot({ x: a.x, y: a.y, r: 2.5 }); },
    pivot(a) {
      const s = a.size || 30;
      if (a.kind === "pin") { out.push(`<circle class="d-body" cx="${X(a.x)}" cy="${Y(a.y)}" r="6"/>`); draw.dot({ x: a.x, y: a.y, r: 2 }); }
      else path([[a.x, a.y], [a.x - s * 0.6, a.y - s], [a.x + s * 0.6, a.y - s]], "d-body", true);
    },
    fluid(a) {
      out.push(`<rect class="d-fluid" x="${X(a.x)}" y="${Y(a.y + a.h)}" width="${a.w}" height="${a.h}"/>`);
      out.push(`<line class="d-surf" x1="${X(a.x)}" y1="${Y(a.y + a.h)}" x2="${X(a.x + a.w)}" y2="${Y(a.y + a.h)}"/>`);
    },
    poly(a) { path(a.points, a.fill === "fluid" ? "d-fluid" : "d-body", true); },
  };
  for (const it of o.items) { const [t, a] = it.type ? [it.type, it] : Object.entries(it)[0]; if (!draw[t]) throw new Error("scene(): unknown item " + t); draw[t](a); }
  const marks = Object.entries(ARROWS).map(([k, [w, h]]) => `<marker id="${id}${k}" viewBox="0 0 10 10" refX="10" refY="5" markerUnits="userSpaceOnUse" markerWidth="${w}" markerHeight="${h}" orient="auto"><path d="M0,0L10,5L0,10z" class="d-ah d-ah-${k}"/></marker>`).join("");
  return `<svg class="graph diagram" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="${E(o.alt)}" xmlns="http://www.w3.org/2000/svg">
<defs>${marks}</defs>
${out.join("\n")}</svg>`;
}

// force arrows from (x, y); off = start distance from the point (the object's radius)
const forceItems = (x, y, forces, dirs = {}, off = 0) => forces.map((f) => {
  const ang = f.angle ?? dirs[f.dir], len = f.length || 70, c = Math.cos(rad(ang)), s = Math.sin(rad(ang));
  const sh = f.shift || 0, ox = -s * sh, oy = c * sh;
  return { arrow: { from: [x + ox + c * off, y + oy + s * off], to: [x + ox + c * (off + len), y + oy + s * (off + len)], label: f.label, kind: f.kind || "force", dx: f.dx, dy: f.dy } };
});
const need = (o, n) => { if (!o.alt) throw new Error(n + "() needs alt text"); };

export function fbd(o) {
  need(o, "fbd");
  const W = o.width || 300, H = o.height || 260, cx = W / 2, cy = H / 2, b = o.box;
  const obj = b ? { rect: { x: cx, y: cy, w: b.w || 46, h: b.h || 36, label: b.label } } : { dot: { x: cx, y: cy, r: 5 } };
  return scene({ width: W, height: H, alt: o.alt, items: [obj, ...forceItems(cx, cy, o.forces, {}, b ? 20 : 0)] });
}

export function incline(o) {
  need(o, "incline");
  const a = o.angle ?? 30, ar = rad(a), W = o.width || 400, H = o.height || 270, x0 = 36, y0 = 34, bk = o.block || {};
  const run = Math.min(320, 190 / Math.tan(ar)), rise = run * Math.tan(ar), L = run / Math.cos(ar), t = bk.pos ?? 0.55, bw = bk.w || 54, bh = bk.h || 36;
  const cx = x0 + t * L * Math.cos(ar) - (Math.sin(ar) * bh) / 2, cy = y0 + t * L * Math.sin(ar) + (Math.cos(ar) * bh) / 2;
  const dirs = { weight: -90, gravity: -90, normal: a + 90, friction: a + 180, "down-slope": a + 180, "up-slope": a };
  return scene({ width: W, height: H, alt: o.alt, items: [
    { ground: { from: [x0 - 14, y0], to: [x0 + run + 14, y0] } }, { ground: { from: [x0, y0], to: [x0 + run, y0 + rise] } },
    { line: { from: [x0 + run, y0], to: [x0 + run, y0 + rise] } },
    { arc: { x: x0, y: y0, r: 42, from: 0, to: a, label: o.labels?.angle ?? "θ" } },
    { rect: { x: cx, y: cy, w: bw, h: bh, rot: a, label: bk.label, mass: bk.mass } },
    ...forceItems(cx, cy, o.forces || [], dirs),
  ] });
}

export function atwood(o) {
  need(o, "atwood");
  const W = o.width || 300, H = o.height || 300, hv = o.heavier || "left", ly = hv === "left" ? 110 : hv === "right" ? 170 : 140, ry = hv === "right" ? 110 : hv === "left" ? 170 : 140;
  const sz = (side) => (hv === "equal" ? 44 : (hv === side ? 52 : 38));
  const items = [
    { ground: { from: [200, 285], to: [100, 285] } }, { line: { from: [150, 285], to: [150, 252] } },
    { rope: { points: [[128, ly + sz("left") * 0.45], [128, 250]] } }, { rope: { points: [[172, ry + sz("right") * 0.45], [172, 250]] } },
    { pulley: { x: 150, y: 250, r: 22 } },
    { rect: { x: 128, y: ly, w: sz("left"), h: sz("left") * 0.9, label: o.m1 || "m_1" } }, { rect: { x: 172, y: ry, w: sz("right"), h: sz("right") * 0.9, label: o.m2 || "m_2" } },
  ];
  if (o.motion) {
    const dl = hv === "right" ? 1 : -1;
    items.push({ arrow: { from: [90, ly + 14 * -dl], to: [90, ly + 14 * -dl + dl * 36], kind: "velocity" } }, { arrow: { from: [210, ry + 14 * dl], to: [210, ry + 14 * dl - dl * 36], kind: "velocity" } });
  }
  return scene({ width: W, height: H, alt: o.alt, items });
}

export function tablePulley(o) {
  need(o, "tablePulley");
  const W = o.width || 420, H = o.height || 260, ty = 150, bx = 190, bw = 54, bh = 40, rope = ty + bh / 2, px = 322, pr = 16, hx = px + pr, hh = 36;
  const items = [
    { ground: { from: [20, ty], to: [px - 8, ty] } }, { line: { from: [px - 8, ty], to: [px - 8, 60] } },
    { line: { from: [px, rope - pr], to: [px - 8, ty] } }, { pulley: { x: px, y: rope - pr, r: pr } },
    { rope: { points: [[bx + bw / 2, rope], [px, rope]] } }, { rope: { points: [[hx, rope - pr], [hx, 100 + hh / 2]] } },
    { rect: { x: bx, y: ty + bh / 2, w: bw, h: bh, label: o.m1 || "m_1" } }, { rect: { x: hx, y: 100 - hh / 2, w: 40, h: hh, label: o.m2 || "m_2" } },
  ];
  if (o.motion) items.push({ arrow: { from: [bx - 10, ty + bh + 22], to: [bx + 40, ty + bh + 22], kind: "velocity" } }, { arrow: { from: [hx + 36, 90], to: [hx + 36, 54], kind: "velocity" } });
  if (o.friction) items.push({ arrow: { from: [bx - bw / 2, ty + 8], to: [bx - bw / 2 - 44, ty + 8], label: "f" } });
  return scene({ width: W, height: H, alt: o.alt, items });
}

export function springMass(o) {
  need(o, "springMass");
  const st = o.stretch ?? 40, items = [];
  if (o.orientation === "vertical") {
    const W = o.width || 240, H = o.height || 320, eq = 120, cy = eq - st, bh = 44;
    items.push({ ground: { from: [150, 300], to: [70, 300] } }, { spring: { from: [110, 300], to: [110, cy + bh / 2], label: o.k || "k" } },
      { rect: { x: 110, y: cy, w: 56, h: bh, label: o.mass || "m" } }, { line: { from: [150, eq], to: [200, eq], dash: true } }, { label: { x: 204, y: eq, text: o.eq || "x = 0", anchor: "start" } });
    if (st) items.push({ arrow: { from: [175, eq], to: [175, cy], kind: "plain" } }, { label: { x: 204, y: (eq + cy) / 2, text: o.x || "x", anchor: "start" } });
    return scene({ width: W, height: H, alt: o.alt, items });
  }
  const W = o.width || 420, H = o.height || 170, eq = 220, cx = eq + st, fy = 50, bw = 54, bh = 44;
  items.push({ ground: { from: [30, 140], to: [30, fy] } }, { ground: { from: [30, fy], to: [400, fy] } },
    { spring: { from: [30, fy + bh / 2], to: [cx - bw / 2, fy + bh / 2], label: o.k || "k" } }, { rect: { x: cx, y: fy + bh / 2, w: bw, h: bh, label: o.mass || "m" } },
    { line: { from: [eq, fy], to: [eq, 128], dash: true } }, { label: { x: eq, y: 140, text: o.eq || "x = 0" } });
  if (st) items.push({ arrow: { from: [eq, 112], to: [cx, 112], kind: "plain" } }, { label: { x: (eq + cx) / 2, y: 124, text: o.x || "x" } });
  return scene({ width: W, height: H, alt: o.alt, items });
}

export function pendulum(o) {
  need(o, "pendulum");
  const W = o.width || 320, H = o.height || 300, th = o.angle ?? 30, L = o.length || 190, px = W / 2, py = H - 25, bx = px + L * Math.sin(rad(th)), by = py - L * Math.cos(rad(th));
  const items = [{ ground: { from: [px + 50, py + 3], to: [px - 50, py + 3] } }, { line: { from: [px, py], to: [px, py - L - 14], dash: true } }];
  if (o.path) items.push({ arc: { x: px, y: py, r: L, from: -90 - th, to: -90 + th, dash: true } });
  items.push({ rope: { points: [[px, py], [bx, by]] } }, { dot: { x: px, y: py } }, { arc: { x: px, y: py, r: 56, from: -90, to: -90 + th, label: "θ" } },
    { circle: { x: bx, y: by, r: 15, fill: "acc", label: o.label || "m" } });
  if (o.forces) items.push(...forceItems(bx, by, [{ angle: -90, length: 55, label: "mg" }, { angle: Math.atan2(py - by, px - bx) * 180 / Math.PI, length: 70, label: "T", dx: 12, dy: 4 }], {}, 15));
  return scene({ width: W, height: H, alt: o.alt, items });
}

export function beam(o) {
  need(o, "beam");
  const W = o.width || 460, H = o.height || 230, x0 = 30, x1 = W - 40, by = 130, len = o.length || 100, sx = (d) => x0 + (d / len) * (x1 - x0), px = sx(o.pivot ?? len / 2);
  const items = [{ rect: { x: (x0 + x1) / 2, y: by, w: x1 - x0, h: 12 } }, { pivot: { x: px, y: by - 6, size: 40 } }, { line: { from: [x0, 34], to: [x1, 34] } }];
  const tick = o.tick || len / 10;
  for (let d = 0; d <= len + 1e-9; d += tick) items.push({ line: { from: [sx(d), 34], to: [sx(d), 41] } }, { label: { x: sx(d), y: 20, text: String(+d.toFixed(2)) } });
  if (o.unit) items.push({ label: { x: x1 + 16, y: 20, text: o.unit, anchor: "start" } });
  for (const it of o.items || []) {
    const x = sx(it.at);
    if (it.mass) items.push({ rect: { x, y: by + 6 + 17, w: 36, h: 34, label: it.mass } });
    if (it.force === "down") items.push({ arrow: { from: [x, by + 66], to: [x, by + 6], label: it.label, at: "tail" } });
    if (it.force === "up") items.push({ arrow: { from: [x, by - 64], to: [x, by - 6], label: it.label, at: "tail" } });
  }
  return scene({ width: W, height: H, alt: o.alt, items });
}

export function carts(o) {
  need(o, "carts");
  const W = o.width || 440, H = o.height || 160, gy = 40, n = o.carts.length, items = [{ ground: { from: [10, gy], to: [W - 10, gy] } }];
  o.carts.forEach((c, i) => {
    const x = c.x ?? (W * (i + 1)) / (n + 1), v = c.v || 0;
    items.push({ circle: { x: x - 20, y: gy + 7, r: 7 } }, { circle: { x: x + 20, y: gy + 7, r: 7 } }, { rect: { x, y: gy + 28, w: 76, h: 28, label: c.label, mass: c.mass } });
    if (v) items.push({ arrow: { from: [x, 100], to: [x + Math.sign(v) * Math.min(100, Math.abs(v) * 28), 100], kind: "velocity", label: c.vlabel } });
    else if (c.vlabel) items.push({ label: { x, y: 100, text: c.vlabel } });
  });
  if (o.title) items.push({ label: { x: 12, y: H - 16, text: o.title, anchor: "start" } });
  return scene({ width: W, height: H, alt: o.alt, items });
}

export function circle(o) {
  need(o, "circle");
  const W = o.width || 320, H = o.height || 300, cx = W / 2, cy = H / 2, r = o.r || 95, th = o.angle ?? 30, loop = o.view === "loop";
  const ox = cx + r * Math.cos(rad(th)), oy = cy + r * Math.sin(rad(th)), R = 11;
  const kinds = { velocity: [th + (o.cw ? -90 : 90), "v", "velocity"], centripetal: [th + 180, "F_c"], tension: [th + 180, "T"], normal: [th + 180, "F_N"], gravity: [-90, "mg"], friction: [th + 180, "f"] };
  const items = [{ circle: { x: cx, y: cy, r, fill: loop ? "track" : "dash" } }, { dot: { x: cx, y: cy, r: 2.5 } }];
  if (o.radius) items.push({ line: { from: [cx, cy], to: [ox, oy], dash: true } }, { label: { x: (cx + ox) / 2 - 4, y: (cy + oy) / 2 + 12, text: o.radius } });
  items.push({ circle: { x: ox, y: oy, r: R, fill: "acc" } });
  const used = {};
  for (const f of o.forces || []) {
    const [k, lab, kind] = typeof f === "string" ? [f] : [f.kind, f.label];
    const d = kinds[k]; items.push(...forceItems(ox, oy, [{ angle: d[0], length: d[2] ? 58 : 45, label: lab ?? d[1], kind: d[2] }].map((q) => { const n = (used[(d[0] + 720) % 360] = (used[(d[0] + 720) % 360] || 0) + 1) - 1; return n ? { ...q, shift: n * 22 } : q; }), {}, R));
  }
  return scene({ width: W, height: H, alt: o.alt, items });
}

export function tank(o) {
  need(o, "tank");
  const lb = o.labels || {}, items = [];
  if (o.pipe) {
    const W = o.width || 440, H = o.height || 200, cy = 105, top = [[30, cy + 46], [150, cy + 46], [215, cy + 22], [410, cy + 22]], bot = [[30, cy - 46], [150, cy - 46], [215, cy - 22], [410, cy - 22]];
    items.push({ poly: { points: [...top, ...bot.reverse()], fill: "fluid" } }, { rope: { points: top, cls: "d-wall" } }, { rope: { points: bot.reverse(), cls: "d-wall" } },
      { arrow: { from: [45, cy], to: [115, cy], kind: "velocity" } }, { label: { x: 62, y: cy + 14, text: lb.v1 || "v_1" } },
      { arrow: { from: [240, cy], to: [350, cy], kind: "velocity" } }, { label: { x: 270, y: cy + 14, text: lb.v2 || "v_2" } },
      { line: { from: [90, cy - 46], to: [90, cy + 46], dash: true } }, { label: { x: 90, y: cy - 62, text: lb.a1 || "A_1" } },
      { line: { from: [300, cy - 22], to: [300, cy + 22], dash: true } }, { label: { x: 300, y: cy - 62, text: lb.a2 || "A_2" } });
    return scene({ width: W, height: H, alt: o.alt, items });
  }
  const W = o.width || 360, H = o.height || 300, x0 = 40, x1 = 260, yb = 30, yt = 260, ys = o.level ?? 190, b = o.block;
  items.push({ fluid: { x: x0, y: yb, w: x1 - x0, h: ys - yb } }, { rope: { points: [[x0, yt], [x0, yb], [x1, yb], [x1, yt]], cls: "d-wall" } });
  if (o.depth) {
    const px = 95, py = ys - o.depth;
    items.push({ arrow: { from: [px, ys], to: [px, py], kind: "plain" } }, { label: { x: px - 8, y: (ys + py) / 2, text: lb.depth || "h", anchor: "end" } },
      { dot: { x: px, y: py, r: 4 } }, { label: { x: px + 9, y: py, text: lb.point || "P", anchor: "start" } });
  }
  if (b) {
    const bw = b.w || 64, bh = b.h || 44, bx = 190, fl = b.kind !== "submerged", cy = fl ? ys - 0.45 * bh + bh / 2 : ys - 70;
    if (!fl) items.push({ rope: { points: [[bx, cy + bh / 2], [bx, yt + 14]] } });
    items.push({ rect: { x: bx, y: cy, w: bw, h: bh, label: b.label || "m", fill: "body" } });
    if (b.forces) items.push(...forceItems(bx - 14, cy, [{ angle: 90, length: 40, label: "F_B" }]), ...forceItems(bx + 14, cy, [{ angle: -90, length: 40, label: "mg" }]));
  }
  return scene({ width: W, height: H, alt: o.alt, items });
}

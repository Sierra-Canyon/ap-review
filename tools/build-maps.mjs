// Draws the site's history maps as SVG from Natural Earth's public-domain land outlines (the world-atlas package),
// with only what each question needs on top: places, routes, years, and region names. HANDOFF.md, section 2e.
//
// Usage: node tools/build-maps.mjs            (writes decks/whap/maps.js from the specs in tools/maps/whap.mjs)
//
// A spec (see tools/maps/whap.mjs):
//   { id, alt, caption, bbox: [west, south, east, north], width: 640, height: 420,
//     places: [{ name, at: [lon, lat], label: "right" | "left" | "above" | "below" | [dx, dy], kind: "city" | "major" | "battle" }],
//     routes: [{ through: [[lon, lat], ...], kind: "route" | "route2" | "sea" }],
//     regions: [{ name, at: [lon, lat], size: 12 }],   names of seas, deserts, and states, in italics, no borders
//     legend: [{ kind: "route" | "route2" | "sea" | "city" | "major" | "battle", text }],
//     checked: ["the two references the places and routes were checked against"] }
//
// The output is markup the site trusts (it comes from this repo, never from a student), styled by the .m-* rules in styles.css,
// so it follows light and dark mode. Places are drawn only as points with names: the site draws no borders it cannot check.
import { readFileSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { geoConicEqualArea, geoPath, geoGraticule10 } from "d3-geo";
import { feature } from "topojson-client";

const require = createRequire(import.meta.url);
// Natural Earth 1:50m land. Each map simplifies it on screen: points closer than TOL pixels to the line are dropped and
// islands smaller than MIN_AREA square pixels are left out, so a map is tens of kilobytes, not hundreds.
const land = feature(JSON.parse(readFileSync(require.resolve("world-atlas/land-50m.json"), "utf8")), "land");
// Antarctica wraps the pole, and a conic projection clipped to a small window turns it into a ring around the whole frame
// that cancels the other land; no map here reaches it, so it is left out.
land.features[0].geometry.coordinates = land.features[0].geometry.coordinates.filter((poly) => poly[0].some(([, lat]) => lat > -60));
const TOL = 0.6, MIN_AREA = 3;

// Douglas-Peucker on one ring of screen points
function dp(pts, tol) {
  if (pts.length < 3) return pts;
  const keep = new Uint8Array(pts.length); keep[0] = keep[pts.length - 1] = 1;
  const stack = [[0, pts.length - 1]];
  while (stack.length) {
    const [a, b] = stack.pop();
    const [ax, ay] = pts[a], [bx, by] = pts[b], dx = bx - ax, dy = by - ay, len = Math.hypot(dx, dy) || 1;
    let far = -1, dmax = tol;
    for (let i = a + 1; i < b; i++) {
      // a closed ring starts and ends at one point: measure from that point instead of from a line
      const d = dx || dy ? Math.abs(dy * (pts[i][0] - ax) - dx * (pts[i][1] - ay)) / len : Math.hypot(pts[i][0] - ax, pts[i][1] - ay);
      if (d > dmax) { dmax = d; far = i; }
    }
    if (far > 0) { keep[far] = 1; stack.push([a, far], [far, b]); }
  }
  return pts.filter((_, i) => keep[i]);
}
// draws a GeoJSON object through the projection into a simplified path string
function simplePath(proj, geo) {
  const rings = []; let cur = null;
  const ctx = { moveTo(x, y) { cur = [[x, y]]; rings.push(cur); }, lineTo(x, y) { cur.push([x, y]); }, closePath() { cur.closed = true; }, arc() {} };
  geoPath(proj, ctx)(geo);
  let d = "";
  for (const r of rings) {
    let area = 0; for (let i = 0; i < r.length; i++) { const [x1, y1] = r[i], [x2, y2] = r[(i + 1) % r.length]; area += x1 * y2 - x2 * y1; }
    if (r.closed && Math.abs(area / 2) < MIN_AREA) continue;
    const s = dp(r, TOL);
    d += "M" + s.map(([x, y]) => `${+x.toFixed(1)},${+y.toFixed(1)}`).join("L") + (r.closed ? "Z" : "");
  }
  return d;
}
const { maps: specs } = await import("./maps/whap.mjs");

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const r1 = (n) => +n.toFixed(1);

export function drawMap(m) {
  const W = m.width || 640, H = m.height || 420, PAD = 6;
  const [w, s, e, n] = m.bbox;
  const proj = geoConicEqualArea().parallels([s + (n - s) / 6, n - (n - s) / 6]).rotate([-(w + e) / 2, 0]);
  const frame = { type: "Polygon", coordinates: [[[w, s], [e, s], [e, n], [w, n], [w, s]]] };
  // densify the frame so the fit follows the curved edges of a conic projection
  const ring = [];
  for (let i = 0; i <= 20; i++) ring.push([w + ((e - w) * i) / 20, s]);
  for (let i = 0; i <= 20; i++) ring.push([e, s + ((n - s) * i) / 20]);
  for (let i = 20; i >= 0; i--) ring.push([w + ((e - w) * i) / 20, n]);
  for (let i = 20; i >= 0; i--) ring.push([w, s + ((n - s) * i) / 20]);
  frame.coordinates = [ring];
  proj.fitExtent([[PAD, PAD], [W - PAD, H - PAD]], { type: "MultiPoint", coordinates: ring });
  proj.clipExtent([[0, 0], [W, H]]);
  const path = geoPath(proj).digits(1);
  const pt = (ll) => proj(ll).map(r1);
  const id = "m-" + m.id;
  const out = [];
  out.push(`<rect class="m-water" x="0" y="0" width="${W}" height="${H}"/>`);
  out.push(`<path class="m-grat" d="${path(geoGraticule10())}"/>`);
  out.push(`<path class="m-land" d="${simplePath(proj, land)}"/>`);
  for (const rg of m.regions || []) {
    const [x, y] = pt(rg.at);
    out.push(`<text class="m-region" x="${x}" y="${y}" text-anchor="middle"${rg.size ? ` font-size="${rg.size}"` : ""}>${esc(rg.name)}</text>`);
  }
  for (const rt of m.routes || []) {
    out.push(`<path class="m-${rt.kind || "route"}" d="${path({ type: "LineString", coordinates: rt.through })}"/>`);
  }
  for (const p of m.places || []) {
    const [x, y] = pt(p.at);
    if (x < 0 || x > W || y < 0 || y > H) throw new Error(`${m.id}: ${p.name} is outside the map`);
    const kind = p.kind || "city";
    out.push(kind === "battle"
      ? `<path class="m-battle" d="M${r1(x - 4.5)},${r1(y - 4.5)}L${r1(x + 4.5)},${r1(y + 4.5)}M${r1(x - 4.5)},${r1(y + 4.5)}L${r1(x + 4.5)},${r1(y - 4.5)}"/>`
      : `<circle class="m-${kind}" cx="${x}" cy="${y}" r="${kind === "major" ? 4.6 : 3.4}"/>`);
    const L = p.label || "right";
    const [dx, dy, anchor] = Array.isArray(L) ? [L[0], L[1], L[0] < -2 ? "end" : L[0] > 2 ? "start" : "middle"]
      : { right: [7, 4, "start"], left: [-7, 4, "end"], above: [0, -8, "middle"], below: [0, 15, "middle"] }[L];
    const lines = String(p.name).split("\n");
    out.push(`<text class="m-label" x="${r1(x + dx)}" y="${r1(y + dy)}" text-anchor="${anchor}">${lines.map((t, i) => `<tspan x="${r1(x + dx)}" dy="${i ? 13 : 0}">${esc(t)}</tspan>`).join("")}</text>`);
  }
  if (m.legend?.length) {
    const lh = 17, bw = m.legendWidth || 230, bh = 10 + lh * m.legend.length;
    const [lx, ly] = m.legendAt === "top-left" ? [10, 10] : m.legendAt === "top-right" ? [W - bw - 10, 10] : m.legendAt === "bottom-right" ? [W - bw - 10, H - bh - 10] : [10, H - bh - 10];
    out.push(`<g class="m-legend"><rect x="${lx}" y="${ly}" width="${bw}" height="${bh}" rx="4"/>`);
    m.legend.forEach((it, i) => {
      const cy = ly + 5 + lh * i + lh / 2, x0 = lx + 10;
      if (["route", "route2", "sea"].includes(it.kind)) out.push(`<path class="m-${it.kind}" d="M${x0},${cy}h24"/>`);
      else if (it.kind === "battle") out.push(`<path class="m-battle" d="M${x0 + 8},${cy - 4.5}l9,9M${x0 + 8},${cy + 4.5}l9,-9"/>`);
      else out.push(`<circle class="m-${it.kind}" cx="${x0 + 12}" cy="${cy}" r="${it.kind === "major" ? 4.6 : 3.4}"/>`);
      out.push(`<text class="m-key" x="${x0 + 32}" y="${cy + 4}">${esc(it.text)}</text>`);
    });
    out.push(`</g>`);
  }
  if (!m.alt) throw new Error(m.id + ": a map needs alt text");
  return `<svg class="map" id="${id}" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="${esc(m.alt)}" xmlns="http://www.w3.org/2000/svg">${out.join("")}</svg>`;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const lines = ["// Generated by tools/build-maps.mjs from tools/maps/whap.mjs. Do not edit by hand: change the spec and run it again.",
    "// Land outlines: Natural Earth 1:50m (public domain), from the world-atlas package.", "export const maps = {"];
  for (const m of specs) lines.push(`  ${JSON.stringify(m.id)}: ${JSON.stringify(drawMap(m))},`);
  lines.push("};", "");
  writeFileSync(new URL("../decks/whap/maps.js", import.meta.url), lines.join("\n"));
  console.log(`decks/whap/maps.js: ${specs.length} maps, ${Math.round(lines.join("\n").length / 1024)} KB`);
}

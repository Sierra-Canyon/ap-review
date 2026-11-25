// Renders a contact sheet of one example of every diagrams.js function, light and dark, to a PNG.
// Run from the repo root: node tools/render-diagrams.mjs [out.png]   (needs Playwright with chromium)
import { createRequire } from "node:module";
import { readFileSync, writeFileSync } from "node:fs";
import { execSync } from "node:child_process";
import * as D from "../diagrams.js";
const require = createRequire(import.meta.url);
let chromium;
try { ({ chromium } = require("playwright")); } catch { ({ chromium } = require(execSync("npm root -g").toString().trim() + "/playwright")); }

const alt = "example";
const examples = {
  scene: () => D.scene({ alt, width: 360, height: 200, items: [
    { ground: { from: [20, 40], to: [340, 40] } }, { rect: { x: 100, y: 60, w: 60, h: 40, label: "m", mass: "2 kg" } }, { circle: { x: 230, y: 54, r: 14, label: "A" } },
    { spring: { from: [130, 110], to: [230, 110], label: "k" } }, { arrow: { from: [100, 90], to: [170, 90], label: "F", kind: "force" } },
    { arrow: { from: [230, 80], to: [300, 80], label: "v", kind: "velocity" } }, { arc: { x: 20, y: 40, r: 40, from: 0, to: 35, label: "θ" } },
    { pivot: { x: 300, y: 150, size: 24 } }, { pulley: { x: 60, y: 150, r: 14 } }, { rope: { points: [[60, 136], [60, 100]] } }, { dot: { x: 200, y: 150 } }, { label: { x: 200, y: 170, text: "F_N = m_1 g" } },
  ] }),
  fbd: () => D.fbd({ alt, box: { label: "m" }, forces: [{ angle: 90, label: "F_N" }, { angle: -90, label: "mg" }, { angle: 0, label: "F_a" }, { angle: 180, length: 50, label: "f" }] }),
  incline: () => D.incline({ alt, angle: 30, block: { label: "m" }, forces: [{ dir: "weight", label: "mg" }, { dir: "normal", label: "F_N" }, { dir: "up-slope", length: 55, label: "f" }] }),
  atwood: () => D.atwood({ alt, motion: true }),
  tablePulley: () => D.tablePulley({ alt, motion: true, friction: true }),
  "springMass horizontal": () => D.springMass({ alt, stretch: 50 }),
  "springMass vertical": () => D.springMass({ alt, orientation: "vertical", stretch: 40 }),
  pendulum: () => D.pendulum({ alt, angle: 30, forces: true, path: true }),
  beam: () => D.beam({ alt, unit: "cm", pivot: 40, items: [{ at: 10, mass: "m_1" }, { at: 80, mass: "m_2" }, { at: 60, force: "down", label: "F" }, { at: 25, force: "up", label: "F_2" }] }),
  carts: () => D.carts({ alt, title: "Before", carts: [{ label: "m_1", v: 2, vlabel: "v_1" }, { label: "m_2", v: -1, vlabel: "v_2" }] }),
  "circle top": () => D.circle({ alt, view: "top", forces: ["velocity", "centripetal"], radius: "r" }),
  "circle loop": () => D.circle({ alt, view: "loop", angle: 90, forces: ["velocity", "gravity", "normal"] }),
  "tank floating": () => D.tank({ alt, depth: 80, block: { kind: "floating", forces: true } }),
  "tank submerged": () => D.tank({ alt, block: { kind: "submerged", forces: true } }),
  "tank pipe": () => D.tank({ alt, pipe: true }),
};
// each theme calls the builders afresh: marker ids must be unique per page, or the second copy would borrow the first theme's arrowheads
const cells = () => Object.entries(examples).map(([k, f]) => `<figure class="graphwrap"><svg-wrap>${f()}</svg-wrap><figcaption class="small muted">${k}</figcaption></figure>`).join("");
const css = readFileSync(new URL("../styles.css", import.meta.url), "utf8");
const page = (theme) => `<div data-theme="${theme}" class="pane"><h3>${theme}</h3><div class="grid">${cells()}</div></div>`;
const html = `<!doctype html><meta charset="utf-8"><style>${css}
body{margin:0;display:flex}.pane{background:var(--bg);color:var(--fg);padding:12px;width:1500px}.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:6px 14px}
svg-wrap{display:block}figure.graphwrap{margin:0;border:1px solid var(--line);padding:6px;background:var(--surface)}</style>${["light", "dark"].map((t) => `<div style="display:contents">${page(t)}</div>`).join("")}`;
// the theme variables hang on :root[data-theme], so each pane gets its own scope through a nested copy of the rules
const scoped = html.replace(/:root\[data-theme="dark"\]/, ".pane[data-theme=\"dark\"]").replace(/:root\s*\{/, ".pane {");
const out = process.argv[2] || "diagrams-sheet.png", file = out.replace(/\.png$/, ".html");
writeFileSync(file, scoped);
const browser = await chromium.launch();
const pg = await browser.newPage({ viewport: { width: 3050, height: 1000 } });
await pg.goto("file://" + (await import("node:path")).resolve(file));
await pg.screenshot({ path: out, fullPage: true });
await browser.close();
console.log("wrote", out);

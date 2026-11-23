// AP Precalculus topic quiz 3.14: Polar Function Graphs.
import { graph } from "../../plot.js";

const R = String.raw;
const PI = Math.PI;

// G() wraps graph(): tick labels written by hand (xt, yt), and extra pieces drawn under the curves: rings (circles
// centered at the origin) and polar grid rays.
function G(o) {
  const w = o.width || 360, h = o.height || 260;
  const kx = (w - 60) / (o.x[1] - o.x[0]), ky = (h - 60) / (o.y[1] - o.y[0]);
  const sx = (x) => +(30 + (x - o.x[0]) * kx).toFixed(2), sy = (y) => +(h - 30 - (y - o.y[0]) * ky).toFixed(2);
  const clampX = Math.min(o.x[1], Math.max(o.x[0], 0)), clampY = Math.min(o.y[1], Math.max(o.y[0], 0));
  const labels = [...(o.labels || [])];
  for (const [x, t] of o.xt || []) labels.push([x - (t.length * 3.4) / kx, clampY - 15 / ky, t]);
  for (const [y, t] of o.yt || []) labels.push([clampX - (t.length * 7 + 6) / kx, y - 4 / ky, t]);
  const svg = graph({ ...o, labels, labelEvery: 1e9 });
  const id = "g" + graph.n;
  let add = "";
  for (const r of o.rings || []) add += `<ellipse class="g-grid" fill="none" cx="${sx(0)}" cy="${sy(0)}" rx="${+(r * kx).toFixed(2)}" ry="${+(r * ky).toFixed(2)}"/>`;
  for (const [a, b, c, d] of o.rays || []) add += `<line class="g-grid" x1="${sx(a)}" y1="${sy(b)}" x2="${sx(c)}" y2="${sy(d)}"/>`;
  return svg.replace("</defs>\n", `</defs>\n<g clip-path="url(#${id}c)">${add}</g>`);
}
// Rays of a polar grid every pi/6, out to radius R.
const spokes = (Rr) => Array.from({ length: 12 }, (_, k) => [0, 0, Rr * Math.cos((k * PI) / 6), Rr * Math.sin((k * PI) / 6)]);
// A polar curve r = f(t) for a <= t <= b, as short straight pieces.
function polar(f, a, b, n = 480) {
  const out = [];
  let px = f(a) * Math.cos(a), py = f(a) * Math.sin(a);
  for (let k = 1; k <= n; k++) {
    const t = a + ((b - a) * k) / n, x = f(t) * Math.cos(t), y = f(t) * Math.sin(t);
    out.push([px, py, x, y]);
    px = x; py = y;
  }
  return out;
}
const num = (vals) => vals.map((v) => [v, String(v).replace("-", "−")]);

// The functions each graph draws. The verification script recomputes every key from these same rules.
const r1 = (t) => 3 - 2 * Math.sin(t);
const r2 = (t) => 3 * Math.sin(5 * t);
const r3 = (t) => 2 * Math.sin(2 * t);
const f4 = (t) => 2 + Math.cos(2 * t);
const r5 = (t) => 1 + Math.cos(t);
const r6 = (t) => 2 - 3 * Math.cos(t);

export const sets = {
  "p314-s1": {
    name: "A limaçon",
    label: "Polar graph",
    intro: R`The polar graph of $r = 3 - 2\sin\theta$ is shown for $0 \le \theta \le 2\pi$.`,
    sources: [{ title: "", blocks: [{ svg: G({
      x: [-4.5, 4.5], y: [-5.8, 2.2], step: 10, width: 330, height: 300, xname: "x", yname: "y",
      rings: [1, 2, 3, 4, 5], rays: spokes(5.5),
      segments: polar(r1, 0, 2 * PI),
      xt: num([-3, 3]), yt: num([1, -5]),
      alt: "Polar graph of r = 3 - 2 sin theta on a polar grid. The curve is a smooth closed loop around the pole with no inner loop. It crosses the positive x-axis at 3, the positive y-axis at 1, the negative x-axis at -3, and the negative y-axis at -5, so it is flattened on top and stretched downward.",
    }) }] }],
  },
  "p314-s2": {
    name: "A rose with five petals",
    label: "Polar graph",
    intro: R`A polar graph is shown. It is a rose with five petals, and the tip of each petal is $3$ units from the pole. One petal lies along the positive $y$-axis.`,
    sources: [{ title: "", blocks: [{ svg: G({
      x: [-3.6, 3.6], y: [-3.6, 3.6], step: 10, width: 300, height: 300, xname: "x", yname: "y",
      rings: [1, 2, 3], rays: spokes(3.5),
      segments: polar(r2, 0, PI),
      xt: num([1, 2, 3]),
      alt: "Polar graph of a rose with five equal petals on a polar grid with circles of radius 1, 2, and 3. Each petal tip touches the circle of radius 3. One petal points straight up along the positive y-axis, and the other four are spaced evenly around the pole, 2 pi/5 radians apart. No petal lies along the x-axis.",
    }) }] }],
  },
  "p314-s3": {
    name: "A rose with four petals",
    label: "Polar graph",
    intro: R`The polar graph of $r = 2\sin(2\theta)$ is shown for $0 \le \theta \le 2\pi$.`,
    sources: [{ title: "", blocks: [{ svg: G({
      x: [-2.5, 2.5], y: [-2.5, 2.5], step: 10, width: 280, height: 280, xname: "x", yname: "y",
      rings: [1, 2], rays: spokes(2.4),
      segments: polar(r3, 0, 2 * PI),
      xt: num([1, 2]),
      alt: "Polar graph of r = 2 sin(2 theta), a rose with four petals, one in each quadrant. The petal tips are 2 units from the pole, on the lines y = x and y = -x.",
    }) }] }],
  },
  "p314-s4": {
    name: "A graph in the theta r-plane",
    label: "Graph",
    intro: R`The graph of $r = f(\theta) = 2 + \cos(2\theta)$ in the $\theta r$-plane is shown for $0 \le \theta \le \pi$.`,
    sources: [{ title: "", blocks: [{ svg: G({
      x: [-0.4, 3.6], y: [-0.5, 3.6], step: { x: PI / 4, y: 1 }, xname: "θ", yname: "r",
      fns: [{ f: f4, from: 0, to: PI }],
      dots: [[0, 3, "closed"], [PI / 2, 1, "closed"], [PI, 3, "closed"]],
      xt: [[PI / 2, "π/2"], [PI, "π"]],
      yt: num([1, 2, 3]),
      alt: "Graph of r = 2 + cos(2 theta) with theta on the horizontal axis from 0 to pi and r on the vertical axis. It starts at (0, 3), falls to a minimum at (pi/2, 1), and rises back to (pi, 3). All values of r are positive.",
    }) }] }],
  },
  "p314-s5": {
    name: "A cardioid",
    label: "Polar graph",
    intro: R`The polar graph of $r = f(\theta) = 1 + \cos\theta$ is shown for $0 \le \theta \le 2\pi$. The function $g$ is defined by $g(\theta) = f\left(\theta - \dfrac{\pi}{2}\right)$.`,
    sources: [{ title: "", blocks: [{ svg: G({
      x: [-2.5, 2.5], y: [-2.5, 2.5], step: 10, width: 280, height: 280, xname: "x", yname: "y",
      rings: [1, 2], rays: spokes(2.4),
      segments: polar(r5, 0, 2 * PI),
      xt: num([1, 2]),
      alt: "Polar graph of r = 1 + cos theta, a heart-shaped cardioid. Its point farthest from the pole is (2, 0) on the positive x-axis, it crosses the y-axis at (0, 1) and (0, -1), and it comes to a cusp at the pole on the left.",
    }) }] }],
  },
  "p314-s6": {
    name: "A limaçon with an inner loop",
    label: "Free response",
    intro: R`The function $f$ is given by $f(\theta) = 2 - 3\cos\theta$. The polar graph of $r = f(\theta)$ for $0 \le \theta \le 2\pi$ is shown.`,
    sources: [{ title: "", blocks: [{ svg: G({
      x: [-5.6, 1.6], y: [-3.6, 3.6], step: 10, width: 340, height: 340, xname: "x", yname: "y",
      rings: [1, 2, 3, 4, 5], rays: spokes(5.5),
      segments: polar(r6, 0, 2 * PI),
      xt: num([-5, 1]), yt: num([2, -2]),
      alt: "Polar graph of r = 2 - 3 cos theta, a limaçon with an inner loop. The large outer loop extends left to the point (-5, 0) and crosses the y-axis at (0, 2) and (0, -2). A small inner loop lies near the pole and reaches the point (-1, 0).",
    }) }, { p: R`Answer each part. Show the work that leads to each answer.` }] }],
  },
};

export default {
  forms: [{
    id: "p314",
    name: "Topic 3.14 Quiz: Polar Function Graphs",
    group: "Unit 3: Trigonometric and Polar Functions",
    items: [
      { id: "p314-m01", type: "mcq", skill: "u3", topic: "3.14", calc: false, difficulty: "easy", set: "p314-s1",
        question: R`What are the rectangular coordinates $(x, y)$ of the point on the graph at $\theta = \dfrac{3\pi}{2}$?`,
        choices: [R`$(0, -5)$`, R`$(0, -1)$`, R`$(0, 5)$`, R`$(-5, 0)$`],
        why: [
          R`$r = 3 - 2\sin\dfrac{3\pi}{2} = 3 - 2(-1) = 5$. Then $x = 5\cos\dfrac{3\pi}{2} = 0$ and $y = 5\sin\dfrac{3\pi}{2} = -5$. This is the lowest point of the graph.`,
          R`$(0, -1)$ uses $r = 3 - 2 = 1$, which treats $\sin\dfrac{3\pi}{2}$ as $1$. Its value is $-1$.`,
          R`$(0, 5)$ puts $r = 5$ on the positive $y$-axis. The angle $\dfrac{3\pi}{2}$ points down the negative $y$-axis.`,
          R`$(-5, 0)$ puts the point on the negative $x$-axis, the direction of $\theta = \pi$, where $r = 3$.`,
        ], answer: 0 },
      { id: "p314-m02", type: "mcq", skill: "u3", topic: "3.14", calc: false, difficulty: "easy", set: "p314-s2",
        question: R`Which of the following could be an equation of the graph?`,
        choices: [R`$r = 3\sin(5\theta)$`, R`$r = 3\cos(5\theta)$`, R`$r = 5\sin(3\theta)$`, R`$r = 5\sin(5\theta)$`],
        why: [
          R`A rose $r = a\sin(n\theta)$ with $n$ odd has $n$ petals of length $|a|$, so $n = 5$ and $a = 3$. At $\theta = \dfrac{\pi}{2}$, $r = 3\sin\dfrac{5\pi}{2} = 3$, the petal along the positive $y$-axis.`,
          R`$r = 3\cos(5\theta)$ has a petal along the positive $x$-axis, since $r = 3$ at $\theta = 0$. Its petal near the $y$-axis points down, not up.`,
          R`$r = 5\sin(3\theta)$ has $3$ petals, each $5$ units long. The coefficient and the number of petals are swapped.`,
          R`$r = 5\sin(5\theta)$ has five petals, but each tip is $5$ units from the pole, not $3$.`,
        ], answer: 0 },
      { id: "p314-m03", type: "mcq", skill: "u3", topic: "3.14", calc: false, difficulty: "easy",
        question: R`Which of the following describes the polar graph of $r = 4\cos\theta$ for $0 \le \theta \le \pi$?`,
        choices: [R`A circle with center $(2, 0)$ and radius $2$`, R`A circle with center $(0, 0)$ and radius $4$`, R`A circle with center $(0, 2)$ and radius $2$`, R`A circle with center $(4, 0)$ and radius $4$`],
        why: [
          R`At $\theta = 0$, $r = 4$, giving $(4, 0)$. At $\theta = \dfrac{\pi}{2}$, $r = 0$, the pole. On $\left(\dfrac{\pi}{2}, \pi\right]$, $r < 0$, and the points land below the $x$-axis. The curve is the circle through the pole and $(4, 0)$, with center $(2, 0)$ and radius $2$.`,
          R`A circle centered at the pole has constant $r$, as in $r = 4$. Here $r$ changes with $\theta$ and is $0$ at $\theta = \dfrac{\pi}{2}$.`,
          R`The circle with center $(0, 2)$ is the graph of $r = 4\sin\theta$, which is $4$ at $\theta = \dfrac{\pi}{2}$.`,
          R`$4$ is the diameter of the circle, the greatest value of $r$, not its radius.`,
        ], answer: 0 },
      { id: "p314-m04", type: "mcq", skill: "u3", topic: "3.14", calc: false, difficulty: "moderate", set: "p314-s3",
        question: R`In which quadrant is the piece of the graph traced for $\dfrac{\pi}{2} < \theta < \pi$?`,
        choices: ["Quadrant IV", "Quadrant II", "Quadrant III", "Quadrant I"],
        why: [
          R`For $\dfrac{\pi}{2} < \theta < \pi$, $\pi < 2\theta < 2\pi$, so $r = 2\sin(2\theta) < 0$. The angles point into Quadrant II, and a negative $r$ puts each point on the opposite side of the pole, in Quadrant IV.`,
          R`Quadrant II is where the angles $\dfrac{\pi}{2} < \theta < \pi$ point. Since $r < 0$ on this interval, the points are on the opposite side of the pole.`,
          R`Quadrant III is traced for $\pi < \theta < \dfrac{3\pi}{2}$, where $2\theta$ is between $2\pi$ and $3\pi$, so $r > 0$.`,
          R`Quadrant I is traced for $0 < \theta < \dfrac{\pi}{2}$, where $r > 0$.`,
        ], answer: 0 },
      { id: "p314-m05", type: "mcq", skill: "u3", topic: "3.14", calc: false, difficulty: "moderate", set: "p314-s4",
        question: R`What are the rectangular coordinates $(x, y)$ of the point on the polar graph of $r = f(\theta)$, $0 \le \theta \le \pi$, that is closest to the pole?`,
        choices: [R`$(0, 1)$`, R`$\left(\dfrac{\pi}{2}, 1\right)$`, R`$(1, 0)$`, R`$(3, 0)$`],
        why: [
          R`The distance from the pole is $|r|$, and $r$ is positive with least value $1$ at $\theta = \dfrac{\pi}{2}$. The point is $x = 1\cos\dfrac{\pi}{2} = 0$, $y = 1\sin\dfrac{\pi}{2} = 1$.`,
          R`$\left(\dfrac{\pi}{2}, 1\right)$ is the point $(\theta, r)$ on the graph in the $\theta r$-plane, not a point in the $xy$-plane.`,
          R`$(1, 0)$ uses the least value of $r$ but places it at $\theta = 0$. The least value occurs at $\theta = \dfrac{\pi}{2}$.`,
          R`$(3, 0)$ is the point at $\theta = 0$, where $r$ is greatest. It is a point farthest from the pole.`,
        ], answer: 0 },
      { id: "p314-m06", type: "mcq", skill: "u3", topic: "3.14", calc: false, difficulty: "difficult", set: "p314-s5",
        question: R`What are the rectangular coordinates of the point on the polar graph of $r = g(\theta)$ that is farthest from the pole?`,
        choices: [R`$(0, 2)$`, R`$(0, -2)$`, R`$(2, 0)$`, R`$\left(2, \dfrac{\pi}{2}\right)$`],
        why: [
          R`$f$ has its greatest value, $2$, at $\theta = 0$. Then $g(\theta) = f\left(\theta - \dfrac{\pi}{2}\right) = 2$ when $\theta - \dfrac{\pi}{2} = 0$, at $\theta = \dfrac{\pi}{2}$. The point is $(2\cos\dfrac{\pi}{2}, 2\sin\dfrac{\pi}{2}) = (0, 2)$. The graph of $g$ is the cardioid rotated $\dfrac{\pi}{2}$ counterclockwise.`,
          R`$(0, -2)$ comes from $\theta = -\dfrac{\pi}{2}$, which shifts the input the wrong way. Subtracting $\dfrac{\pi}{2}$ inside $f$ moves each value of $r$ to an angle $\dfrac{\pi}{2}$ larger.`,
          R`$(2, 0)$ is the farthest point on the graph of $f$. The input shift rotates the graph, so this point moves.`,
          R`$\left(2, \dfrac{\pi}{2}\right)$ gives the polar coordinates of the point. In rectangular coordinates it is $(0, 2)$.`,
        ], answer: 0 },
      { id: "p314-f1a", type: "frq", skill: "u3", topic: "3.14", calc: false, set: "p314-s6", part: "(a)",
        prompt: R`Find all values of $\theta$ in $0 \le \theta \le 2\pi$ at which the polar graph of $r = f(\theta)$ passes through the pole.`,
        rows: [{ name: "Values of theta", earns: R`$\theta = \arccos\dfrac{2}{3}$ and $\theta = 2\pi - \arccos\dfrac{2}{3}$, from $f(\theta) = 0$.` }],
        solution: R`The graph passes through the pole where $r = 0$: $2 - 3\cos\theta = 0$, so $\cos\theta = \dfrac{2}{3}$. On $[0, 2\pi]$, $\theta = \arccos\dfrac{2}{3}$ (in Quadrant I) and $\theta = 2\pi - \arccos\dfrac{2}{3}$ (in Quadrant IV).` },
      { id: "p314-f1b", type: "frq", skill: "u3", topic: "3.14", calc: false, set: "p314-s6", part: "(b)",
        prompt: R`Find the rectangular coordinates $(x, y)$ of the point on the polar graph of $r = f(\theta)$ at $\theta = \pi$.`,
        rows: [{ name: "Coordinates", earns: R`$(-5, 0)$, from $f(\pi) = 5$.` }],
        solution: R`$f(\pi) = 2 - 3\cos\pi = 5$. Then $x = 5\cos\pi = -5$ and $y = 5\sin\pi = 0$, so the point is $(-5, 0)$, the leftmost point of the outer loop.` },
      { id: "p314-f1c", type: "frq", skill: "u3", topic: "3.14", calc: false, set: "p314-s6", part: "(c)",
        prompt: R`For $0 < \theta < \arccos\dfrac{2}{3}$, in which quadrant are the points on the polar graph of $r = f(\theta)$? Give a reason for your answer.`,
        rows: [{ name: "Answer with reason", earns: R`Quadrant III, because these angles point into Quadrant I and $f(\theta) < 0$ there, so each point is on the opposite side of the pole.` }],
        solution: R`For $0 < \theta < \arccos\dfrac{2}{3}$, $\cos\theta > \dfrac{2}{3}$, so $f(\theta) = 2 - 3\cos\theta < 0$. The angles are in Quadrant I, and a negative $r$ places each point on the ray opposite its angle, so the points are in Quadrant III. They form part of the inner loop.` },
    ],
  }],
};

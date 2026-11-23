// AP Precalculus topic quiz 3.15: Rates of Change in Polar Functions.
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

// The functions each graph or table uses. The verification script recomputes every key from these same rules.
const f1 = (t) => 1 - 3 * Math.sin(t);
const f2 = (t) => 2 * Math.cos(2 * t) - 1;
const r3 = (t) => 1 + 3 * Math.cos(2 * t);
const T1 = [0, 1, 2, 3, 4, 5, 6].map((k) => f1((k * PI) / 6).toFixed(3).replace(/\.?0+$/, "").replace("-", "−"));

export const sets = {
  "p315-s1": {
    name: "A table of values of r",
    label: "Table",
    intro: R`The function $f$ is decreasing on $0 \le \theta \le \dfrac{\pi}{2}$ and increasing on $\dfrac{\pi}{2} \le \theta \le \pi$. Selected values of $f(\theta)$ are given in the table.`,
    sources: [{ title: "", blocks: [{ table: {
      head: [R`$\theta$`, "$0$", R`$\dfrac{\pi}{6}$`, R`$\dfrac{\pi}{3}$`, R`$\dfrac{\pi}{2}$`, R`$\dfrac{2\pi}{3}$`, R`$\dfrac{5\pi}{6}$`, R`$\pi$`],
      rows: [[R`$f(\theta)$`, ...T1.map((v) => `$${v}$`)]],
    } }] }],
  },
  "p315-s2": {
    name: "A graph in the theta r-plane",
    label: "Graph",
    intro: R`The graph of $r = f(\theta) = 2\cos(2\theta) - 1$ in the $\theta r$-plane is shown for $0 \le \theta \le 2\pi$.`,
    sources: [{ title: "", blocks: [{ svg: G({
      x: [-0.4, 2 * PI + 0.4], y: [-3.5, 1.8], step: { x: PI / 6, y: 1 }, xname: "θ", yname: "r", width: 460,
      fns: [{ f: f2, from: 0, to: 2 * PI }],
      xt: [[PI / 2, "π/2"], [PI, "π"], [(3 * PI) / 2, "3π/2"], [2 * PI, "2π"]],
      yt: num([1, -1, -2, -3]),
      alt: "Graph of r = 2 cos(2 theta) - 1 with theta on the horizontal axis from 0 to 2 pi, with grid lines every pi/6. It starts at (0, 1), crosses zero at theta = pi/6, reaches a minimum of -3 at pi/2, crosses zero again at 5 pi/6, reaches 1 at pi, crosses zero at 7 pi/6, reaches -3 at 3 pi/2, crosses zero at 11 pi/6, and ends at (2 pi, 1).",
    }) }] }],
  },
  "p315-s3": {
    name: "A rose with four petals",
    label: "Polar graph",
    intro: R`The polar graph of $r = f(\theta) = 1 + 3\cos(2\theta)$ is shown for $0 \le \theta \le 2\pi$.`,
    sources: [{ title: "", blocks: [{ svg: G({
      x: [-4.5, 4.5], y: [-4.5, 4.5], step: 10, width: 300, height: 300, xname: "x", yname: "y",
      rings: [1, 2, 3, 4], rays: spokes(4.4),
      segments: polar(r3, 0, 2 * PI),
      xt: num([2, 4]), yt: num([2]),
      alt: "Polar graph of r = 1 + 3 cos(2 theta). Two large petals reach 4 units from the pole along the positive and negative x-axis, and two small petals reach 2 units from the pole along the positive and negative y-axis.",
    }) }] }],
  },
  "p315-s4": {
    name: "Distance from the pole",
    label: "Free response",
    intro: R`The function $f$ is given by $f(\theta) = 4\cos\theta - 2$ for $0 \le \theta \le \pi$. The polar graph of $r = f(\theta)$ passes through the pole at $\theta = \dfrac{\pi}{3}$.`,
    sources: [{ title: "", blocks: [{ p: R`Answer each part. Give exact answers, and show the work that leads to each answer.` }] }],
  },
};

export default {
  forms: [{
    id: "p315",
    name: "Topic 3.15 Quiz: Rates of Change in Polar Functions",
    group: "Unit 3: Trigonometric and Polar Functions",
    items: [
      { id: "p315-m01", type: "mcq", skill: "u3", topic: "3.15", calc: false, difficulty: "easy", set: "p315-s1",
        question: R`As $\theta$ increases from $\dfrac{\pi}{3}$ to $\dfrac{\pi}{2}$, which of the following describes the distance between the pole and the point on the polar graph of $r = f(\theta)$?`,
        choices: [R`Increasing, because $f(\theta) < 0$ and $f$ is decreasing`, R`Decreasing, because $f(\theta) < 0$ and $f$ is decreasing`, R`Decreasing, because $f(\theta) < 0$ and $f$ is increasing`, R`Increasing, because $f(\theta) > 0$ and $f$ is increasing`],
        why: [
          R`On this interval $f$ goes from $-1.598$ to $-2$: it is negative and decreasing, so $|f(\theta)|$ increases and the point moves away from the pole.`,
          R`A decreasing $f$ moves the point toward the pole only when $f > 0$. Here $f < 0$, so $|f(\theta)|$ grows.`,
          R`$f$ is decreasing on this interval, as the table and the given information show. It increases only after $\dfrac{\pi}{2}$.`,
          R`The table shows $f(\theta) < 0$ on this interval, and $f$ is decreasing there, not increasing.`,
        ], answer: 0 },
      { id: "p315-m02", type: "mcq", skill: "u3", topic: "3.15", calc: true, difficulty: "easy",
        question: R`For the polar function $r = f(\theta) = 2 + 3\cos(2\theta)$, what is the average rate of change of $r$ with respect to $\theta$ on the interval $0 \le \theta \le \dfrac{\pi}{3}$?`,
        choices: ["$-4.297$", "$-4.500$", "$-0.233$", "$4.297$"],
        why: [
          R`$f(0) = 5$ and $f\left(\dfrac{\pi}{3}\right) = 2 + 3\left(-\dfrac{1}{2}\right) = 0.5$, so the average rate of change is $\dfrac{0.5 - 5}{\pi/3} \approx -4.297$ units per radian.`,
          R`$-4.5$ is the change in $r$, $f\left(\dfrac{\pi}{3}\right) - f(0)$. It must be divided by the change in $\theta$, $\dfrac{\pi}{3}$.`,
          R`$-0.233$ is the reciprocal, $\dfrac{\pi/3}{-4.5}$, which gives radians per unit of $r$.`,
          R`$4.297$ subtracts in the wrong order. Since $r$ falls from $5$ to $0.5$, the rate is negative.`,
        ], answer: 0 },
      { id: "p315-m03", type: "mcq", skill: "u3", topic: "3.15", calc: false, difficulty: "easy", set: "p315-s2",
        question: R`On which of the following intervals is the distance between the pole and the point on the polar graph of $r = f(\theta)$ decreasing?`,
        choices: [R`$\left(\dfrac{\pi}{2}, \dfrac{5\pi}{6}\right)$`, R`$\left(\dfrac{\pi}{6}, \dfrac{\pi}{2}\right)$`, R`$\left(\dfrac{5\pi}{6}, \dfrac{7\pi}{6}\right)$`, R`$\left(\dfrac{\pi}{3}, \dfrac{2\pi}{3}\right)$`],
        why: [
          R`On $\left(\dfrac{\pi}{2}, \dfrac{5\pi}{6}\right)$, $f$ is negative and increasing, from $-3$ toward $0$, so $|f(\theta)|$ decreases and the point moves toward the pole.`,
          R`On $\left(\dfrac{\pi}{6}, \dfrac{\pi}{2}\right)$, $f$ is decreasing, but it is negative, so $|f(\theta)|$ increases from $0$ to $3$.`,
          R`On $\left(\dfrac{5\pi}{6}, \dfrac{7\pi}{6}\right)$, $f$ is positive. It increases to $1$ at $\pi$, then decreases, so the distance increases, then decreases.`,
          R`On $\left(\dfrac{\pi}{3}, \dfrac{2\pi}{3}\right)$, $f$ is negative with a minimum at $\dfrac{\pi}{2}$, so the distance increases, then decreases.`,
        ], answer: 0 },
      { id: "p315-m04", type: "mcq", skill: "u3", topic: "3.15", calc: false, difficulty: "moderate",
        question: R`A function $f$ is continuous, $f(c) = -2$, and $f$ changes from increasing to decreasing at $\theta = c$. Which of the following is true about the distance between the pole and the point on the polar graph of $r = f(\theta)$?`,
        choices: [R`It has a relative minimum at $\theta = c$.`, R`It has a relative maximum at $\theta = c$.`, R`It has no relative extremum at $\theta = c$.`, R`It is $0$ at $\theta = c$, at the pole.`],
        why: [
          R`Near $c$, $f$ is negative. Before $c$, $f$ is negative and increasing, so the distance $|f(\theta)|$ decreases. After $c$, $f$ is negative and decreasing, so the distance increases. The distance is least at $c$.`,
          R`$f$ has a relative maximum at $c$, but $f(c) < 0$. A larger negative value of $r$ is closer to the pole, so the distance has a relative minimum.`,
          R`The distance changes from decreasing to increasing at $c$, so it has a relative minimum there.`,
          R`The distance at $\theta = c$ is $|f(c)| = 2$, so the point is not at the pole.`,
        ], answer: 0 },
      { id: "p315-m05", type: "mcq", skill: "u3", topic: "3.15", calc: true, difficulty: "moderate",
        question: R`Consider the polar function $r = f(\theta) = 2 + 3\sin\theta$. Which of the following describes the point on its polar graph at $\theta = 4$, where the angle is in radians?`,
        choices: [R`It is $0.270$ unit from the pole and moving away.`, R`It is $0.270$ unit from the pole and moving closer.`, R`It is $4.270$ units from the pole and moving away.`, R`It is $4.270$ units from the pole and moving closer.`],
        why: [
          R`$f(4) = 2 + 3\sin 4 \approx -0.270$, so the point is $0.270$ unit from the pole. Since $\pi < 4 < \dfrac{3\pi}{2}$, $\sin\theta$ and so $f$ are decreasing near $4$. With $f$ negative and decreasing, $|f(\theta)|$ increases.`,
          R`$f$ is decreasing near $\theta = 4$, but $f(4) < 0$, so $|f(\theta)|$ increases and the point moves away from the pole.`,
          R`$4.270 = 2 + 3|\sin 4|$ treats $\sin 4$ as positive. The angle $4$ is in Quadrant III, where sine is negative.`,
          R`$4.270$ treats $\sin 4$ as positive, and a negative, decreasing $f$ moves the point away from the pole.`,
        ], answer: 0 },
      { id: "p315-m06", type: "mcq", skill: "u3", topic: "3.15", calc: true, difficulty: "difficult", set: "p315-s3",
        question: R`On which of the following intervals of $\theta$ in $0 < \theta < \dfrac{\pi}{2}$ is the distance between the pole and the point on the graph decreasing?`,
        choices: ["$(0, 0.955)$", "$(0, 1.571)$", "$(0.955, 1.571)$", "$(0, 0.785)$"],
        why: [
          R`On $0 < \theta < \dfrac{\pi}{2}$, $2\theta$ is between $0$ and $\pi$, so $f$ is decreasing. $f(\theta) = 0$ where $\cos(2\theta) = -\dfrac{1}{3}$, at $\theta = \dfrac{1}{2}\arccos\left(-\dfrac{1}{3}\right) \approx 0.955$. For $0 < \theta < 0.955$, $f$ is positive and decreasing, so the distance decreases. After that, $f$ is negative and decreasing, so the distance increases.`,
          R`$f$ is decreasing on all of $\left(0, \dfrac{\pi}{2}\right)$, but after $0.955$ it is negative, so the distance $|f(\theta)|$ increases.`,
          R`On $(0.955, 1.571)$, $f$ is negative and decreasing, so the distance increases. This is the small petal along the $y$-axis being traced outward.`,
          R`$0.785 = \dfrac{\pi}{4}$ is where $\cos(2\theta) = 0$, so $f = 1$ there, not $0$. The distance keeps decreasing until $f = 0$ at $0.955$.`,
        ], answer: 0 },
      { id: "p315-f1a", type: "frq", skill: "u3", topic: "3.15", calc: false, set: "p315-s4", part: "(a)",
        prompt: R`Find the average rate of change of $f$ over the interval $0 \le \theta \le \dfrac{\pi}{2}$.`,
        rows: [{ name: "Average rate of change", earns: R`$\dfrac{f(\pi/2) - f(0)}{\pi/2 - 0} = \dfrac{-2 - 2}{\pi/2} = -\dfrac{8}{\pi}$.` }],
        solution: R`$f(0) = 4 - 2 = 2$ and $f\left(\dfrac{\pi}{2}\right) = 0 - 2 = -2$. The average rate of change is $\dfrac{-2 - 2}{\pi/2} = -\dfrac{8}{\pi}$, about $-2.546$ units per radian.` },
      { id: "p315-f1b", type: "frq", skill: "u3", topic: "3.15", calc: false, set: "p315-s4", part: "(b)",
        prompt: R`(i) As $\theta$ increases on the interval $0 < \theta < \dfrac{\pi}{3}$, is the distance between the point on the polar graph and the pole increasing or decreasing? Give a reason for your answer.
(ii) As $\theta$ increases on the interval $\dfrac{\pi}{3} < \theta < \pi$, is the distance between the point on the polar graph and the pole increasing or decreasing? Give a reason for your answer.`,
        rows: [
          { name: "(i) Answer with reason", earns: R`Decreasing, because $f(\theta) > 0$ and $f$ is decreasing on the interval.` },
          { name: "(ii) Answer with reason", earns: R`Increasing, because $f(\theta) < 0$ and $f$ is decreasing on the interval.` },
        ],
        solution: R`On $0 < \theta < \pi$, $\cos\theta$ is decreasing, so $f$ is decreasing. (i) On $\left(0, \dfrac{\pi}{3}\right)$, $\cos\theta > \dfrac{1}{2}$, so $f(\theta) > 0$. A positive, decreasing $f$ means $|f(\theta)|$ decreases, so the distance is decreasing. (ii) On $\left(\dfrac{\pi}{3}, \pi\right)$, $\cos\theta < \dfrac{1}{2}$, so $f(\theta) < 0$. A negative, decreasing $f$ means $|f(\theta)|$ increases, so the distance is increasing.` },
      { id: "p315-f1c", type: "frq", skill: "u3", topic: "3.15", calc: false, set: "p315-s4", part: "(c)",
        prompt: R`Find the rectangular coordinates $(x, y)$ of the point on the polar graph of $r = f(\theta)$, $0 \le \theta \le \pi$, that is farthest from the pole.`,
        rows: [{ name: "Coordinates", earns: R`$(6, 0)$, from $f(\pi) = -6$, with a reason that $|f(\theta)|$ is greatest at $\theta = \pi$.` }],
        solution: R`From part (b), the distance decreases from $|f(0)| = 2$ to $0$ at $\dfrac{\pi}{3}$, then increases to $|f(\pi)| = |-4 - 2| = 6$. The greatest distance is $6$, at $\theta = \pi$. There $x = -6\cos\pi = 6$ and $y = -6\sin\pi = 0$, so the point is $(6, 0)$.` },
    ],
  }],
};

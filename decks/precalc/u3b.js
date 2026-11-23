// AP Precalculus review bank, Unit 3 (second half): Trigonometric and Polar Functions, topics 3.9 to 3.15.
import { graph } from "../../plot.js";

const PI = Math.PI;

// G() wraps graph(): tick labels written by hand (xt, yt) so angles read as multiples of pi, and extra pieces drawn
// under the curves: rings (circles centered at the origin), polar grid rays, and a unit circle.
function G(o) {
  const w = o.width || 360, h = o.height || 260;
  const kx = (w - 60) / (o.x[1] - o.x[0]), ky = (h - 60) / (o.y[1] - o.y[0]);
  const sx = (x) => +(30 + (x - o.x[0]) * kx).toFixed(2), sy = (y) => +(h - 30 - (y - o.y[0]) * ky).toFixed(2);
  const clampX = Math.min(o.x[1], Math.max(o.x[0], 0)), clampY = Math.min(o.y[1], Math.max(o.y[0], 0));
  const labels = [...(o.labels || [])];
  for (const [x, t, dpx = 0] of o.xt || []) labels.push([x - (t.length * 3.4 - dpx) / kx, clampY - 15 / ky, t]);
  for (const [y, t] of o.yt || []) labels.push([clampX - (t.length * 7 + 6) / kx, y - 4 / ky, t]);
  const opts = { ...o, labels };
  if (!o.keepTicks) opts.labelEvery = 1e9;
  const svg = graph(opts);
  const id = "g" + graph.n;
  let add = "";
  for (const r of o.rings || []) add += `<ellipse class="${o.ringClass || "g-grid"}" fill="none" cx="${sx(0)}" cy="${sy(0)}" rx="${+(r * kx).toFixed(2)}" ry="${+(r * ky).toFixed(2)}"/>`;
  for (const [a, b, c, d] of o.rays || []) add += `<line class="g-grid" x1="${sx(a)}" y1="${sy(b)}" x2="${sx(c)}" y2="${sy(d)}"/>`;
  return svg.replace("</defs>\n", `</defs>\n<g clip-path="url(#${id}c)">${add}</g>`);
}
// Rays of a polar grid every pi/6, out to radius R.
const spokes = (R) => Array.from({ length: 12 }, (_, k) => [0, 0, R * Math.cos((k * PI) / 6), R * Math.sin((k * PI) / 6)]);
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
const piT = (vals) => vals.map(([n, d, t, dpx]) => [(n * PI) / d, t, dpx]);
const numT = (vals) => vals.map((v) => [v, String(v).replace("-", "−")]);

// The functions each graph draws. The verification script recomputes every key from these same rules.
const f1 = (x) => Math.sin(2 * x);
const f2 = (x) => 3 * Math.sin(x);
const f3 = (x) => 2 * Math.cos(x) - 1;
const f4 = (x) => 2 * Math.sin(x);
const f5 = (t) => 72 - 9 * Math.cos((PI * t) / 12);
const f7 = (x) => 2 / Math.cos(x / 2);
const f11 = (x) => 2 * Math.sin(x + PI / 3);
const r15 = (t) => 2 + 2 * Math.cos(t);
const r16 = (t) => 2 * Math.sin(3 * t);
const r17 = (t) => 2 + 4 * Math.sin(t);
const r18 = (t) => 1 - 2 * Math.cos(2 * t);
const r19 = (t) => 3 * Math.cos(2 * t);
const r20 = (t) => 4 * Math.sin(t);
const r21 = (t) => 2 - 5 * Math.sin(t);
const r24 = (t) => 2 * Math.cos(3 * t);
const r25 = (t) => 1 + 2 * Math.cos(t);
const r26 = (t) => 3 + 4 * Math.cos(t);
const r28 = (t) => 1 + 2 * Math.cos(2 * t);

const one = (blocks) => [{ title: "", blocks }];

export const sets = {
  "p3br-s1": {
    name: "A sine graph with period pi", label: "Graph",
    intro: String.raw`The graph of $f(x) = \sin(2x)$ is shown for $-\pi \le x \le \pi$.`,
    sources: one([{ svg: G({
      x: [-3.5, 3.5], y: [-1.5, 1.5], step: { x: PI / 4, y: 0.5 }, xname: "x", yname: "y",
      xt: piT([[-1, 1, "−π"], [-1, 2, "−π/2", -14], [1, 2, "π/2", -14], [1, 1, "π"]]), yt: numT([-1, 1]),
      fns: [{ f: f1, from: -PI, to: PI }],
      alt: "Graph of f(x) = sin(2x) from x = -pi to x = pi. It completes two full cycles, with maximum value 1 at x = -3pi/4 and x = pi/4, minimum value -1 at x = -pi/4 and x = 3pi/4, and zeros at every multiple of pi/2.",
    }) }]),
  },
  "p3br-s2": {
    name: "A restricted sine function", label: "Graph",
    intro: String.raw`The graph of $f(x) = 3\sin x$ is shown for $-\dfrac{\pi}{2} \le x \le \dfrac{\pi}{2}$. On this interval, $f$ is invertible.`,
    sources: one([{ svg: G({
      x: [-2.2, 2.2], y: [-3.6, 3.6], step: { x: PI / 4, y: 1 }, xname: "x", yname: "y",
      xt: piT([[-1, 2, "−π/2"], [1, 2, "π/2"]]), yt: numT([-3, -2, -1, 1, 2, 3]),
      fns: [{ f: f2, from: -PI / 2, to: PI / 2 }],
      dots: [[-PI / 2, -3, "closed"], [PI / 2, 3, "closed"]],
      alt: "Graph of f(x) = 3 sin x from x = -pi/2 to x = pi/2. It rises from the filled endpoint (-pi/2, -3) through the origin to the filled endpoint (pi/2, 3).",
    }) }]),
  },
  "p3br-s3": {
    name: "A cosine graph to restrict", label: "Graph",
    intro: String.raw`The graph of $g(x) = 2\cos x - 1$ is shown for $-\pi \le x \le 2\pi$.`,
    sources: one([{ svg: G({
      x: [-3.6, 6.8], y: [-3.5, 1.6], step: { x: PI / 2, y: 1 }, xname: "x", yname: "y", width: 400,
      xt: piT([[-1, 1, "−π"], [-1, 2, "−π/2"], [1, 2, "π/2"], [1, 1, "π"], [3, 2, "3π/2"], [2, 1, "2π"]]), yt: numT([-3, -2, -1, 1]),
      fns: [{ f: f3, from: -PI, to: 2 * PI }],
      alt: "Graph of g(x) = 2cos x - 1 from x = -pi to x = 2pi. It has minimum value -3 at x = -pi and x = pi, and maximum value 1 at x = 0 and x = 2pi. It crosses y = -1 at x = -pi/2, pi/2, and 3pi/2.",
    }) }]),
  },
  "p3br-s4": {
    name: "A sine graph and a line", label: "Graph",
    intro: String.raw`The graph of $y = 2\sin x$ is shown for $0 \le x \le 4\pi$, along with the line $y = 1$ (dashed).`,
    sources: one([{ svg: G({
      x: [-0.4, 13], y: [-2.6, 2.6], step: { x: PI / 2, y: 1 }, xname: "x", yname: "y", width: 440,
      xt: piT([[1, 1, "π", -12], [2, 1, "2π", 12], [3, 1, "3π", -12], [4, 1, "4π"]]), yt: numT([-2, -1, 1, 2]),
      fns: [{ f: f4, from: 0, to: 4 * PI }], hlines: [{ y: 1 }],
      alt: "Graph of y = 2 sin x from x = 0 to x = 4pi, two full cycles with maximum 2 at pi/2 and 5pi/2 and minimum -2 at 3pi/2 and 7pi/2. A dashed horizontal line at y = 1 crosses each arch of the curve that rises above the x-axis.",
    }) }]),
  },
  "p3br-s5": {
    name: "Temperature in a greenhouse", label: "Graph",
    intro: String.raw`The temperature inside a greenhouse is modeled by $T(t) = 72 - 9\cos\left(\dfrac{\pi t}{12}\right)$ degrees Fahrenheit, where $t$ is the number of hours after midnight, $0 \le t \le 24$. The graph of $T$ is shown with the line $T = 78$ (dashed).`,
    sources: one([{ svg: G({
      x: [0, 24], y: [0, 90], step: { x: 3, y: 10 }, xname: "t", yname: "T", keepTicks: true, width: 400,
      fns: [{ f: f5, from: 0, to: 24 }], hlines: [{ y: 78 }],
      alt: "Graph of T(t) = 72 - 9cos(pi t / 12) for t from 0 to 24 hours. The temperature starts at 63 degrees at midnight, rises to a maximum of 81 degrees at t = 12, and falls back to 63 at t = 24. A dashed horizontal line at T = 78 crosses the curve twice, once before t = 12 and once after.",
    }) }]),
  },
  "p3br-s6": {
    name: "A terminal ray in Quadrant III", label: "Diagram",
    intro: String.raw`An angle $\theta$ in standard position has its terminal side through the point $(-8, -15)$, as shown.`,
    sources: one([{ svg: G({
      x: [-10, 4], y: [-17, 3], step: 2, xname: "x", yname: "y", keepTicks: true, width: 300, height: 380,
      segments: [[0, 0, -8, -15]], dots: [[-8, -15, "closed"]], labels: [[-7.4, -15.6, "(−8, −15)"]],
      alt: "Coordinate grid with a ray from the origin through the point (-8, -15) in Quadrant III, the terminal side of the angle theta.",
    }) }]),
  },
  "p3br-s7": {
    name: "A secant graph", label: "Graph",
    intro: String.raw`The graph of a function $f$ is shown for $-3\pi < x < 3\pi$. The dashed lines $x = -\pi$ and $x = \pi$ are vertical asymptotes. The graph has a relative minimum at $(0, 2)$ and relative maximums at $(-2\pi, -2)$ and $(2\pi, -2)$.`,
    sources: one([{ svg: G({
      x: [-3 * PI, 3 * PI], y: [-8, 8], step: { x: PI, y: 2 }, xname: "x", yname: "y", width: 400,
      xt: piT([[-2, 1, "−2π"], [-1, 1, "−π"], [1, 1, "π"], [2, 1, "2π"]]), yt: numT([-6, -4, -2, 2, 4, 6]),
      fns: [{ f: f7, from: -3 * PI + 0.02, to: -PI - 0.02 }, { f: f7, from: -PI + 0.02, to: PI - 0.02 }, { f: f7, from: PI + 0.02, to: 3 * PI - 0.02 }],
      vlines: [{ x: -PI }, { x: PI }], dots: [[0, 2, "closed"], [-2 * PI, -2, "closed"], [2 * PI, -2, "closed"]],
      alt: "Graph of f for x between -3pi and 3pi with dashed vertical asymptotes at x = -pi and x = pi. Between the asymptotes, a U-shaped branch opens upward with lowest point (0, 2). To the left of x = -pi and to the right of x = pi, branches open downward with highest points (-2pi, -2) and (2pi, -2).",
    }) }]),
  },
  "p3br-s8": {
    name: "Cosine and secant", label: "Graph",
    intro: String.raw`The graphs of $y = \cos x$ (dashed curve) and $y = \sec x$ (solid curve) are shown for $-\pi \le x \le 2\pi$. The thin dashed vertical lines are the asymptotes of $y = \sec x$.`,
    sources: one([{ svg: G({
      x: [-3.4, 6.6], y: [-4, 4], step: { x: PI / 2, y: 1 }, xname: "x", yname: "y", width: 400,
      xt: piT([[-1, 1, "−π"], [1, 1, "π"], [2, 1, "2π"]]), yt: numT([-3, -2, -1, 1, 2, 3]),
      fns: [{ f: Math.cos, from: -PI, to: 2 * PI, dash: true },
        { f: (x) => 1 / Math.cos(x), from: -PI, to: -PI / 2 - 0.01 }, { f: (x) => 1 / Math.cos(x), from: -PI / 2 + 0.01, to: PI / 2 - 0.01 },
        { f: (x) => 1 / Math.cos(x), from: PI / 2 + 0.01, to: 1.5 * PI - 0.01 }, { f: (x) => 1 / Math.cos(x), from: 1.5 * PI + 0.01, to: 2 * PI }],
      vlines: [{ x: -PI / 2 }, { x: PI / 2 }, { x: 1.5 * PI }],
      alt: "Graphs of y = cos x, dashed, and y = sec x, solid, from -pi to 2pi. The secant graph has vertical asymptotes at -pi/2, pi/2, and 3pi/2, where cos x = 0. The two graphs touch at (0, 1), (2pi, 1), (-pi, -1), and (pi, -1). Where the cosine curve is near 0, the secant branches rise or fall steeply toward the asymptotes.",
    }) }]),
  },
  "p3br-s9": {
    name: "A point on the unit circle", label: "Diagram",
    intro: String.raw`In the figure, $P$ is the point on the unit circle on the terminal side of an angle $\theta$ in standard position, with $0 < \theta < \pi$. The coordinates of $P$ are $\left(-\dfrac{1}{2}, \dfrac{\sqrt{3}}{2}\right)$.`,
    sources: one([{ svg: G({
      x: [-1.75, 1.75], y: [-1.5, 1.5], step: 10, xname: "x", yname: "y", width: 340, height: 300,
      rings: [1], ringClass: "g-ref", xt: numT([-1, 1]),
      segments: [[0, 0, -0.5, Math.sqrt(3) / 2]], dots: [[-0.5, Math.sqrt(3) / 2, "closed"]], labels: [[-1.05, 1.0, "P"]],
      alt: "Unit circle centered at the origin. A ray from the origin goes up and to the left to the point P on the circle in Quadrant II, at (-1/2, square root of 3 over 2).",
    }) }]),
  },
  "p3br-s10": {
    name: "Two points on the unit circle", label: "Diagram",
    intro: String.raw`In the figure, $P$ is the point on the unit circle on the terminal side of an angle $x$ in standard position, and $Q$ is the point on the unit circle on the terminal side of the angle $x + \pi$.`,
    sources: one([{ svg: G({
      x: [-1.75, 1.75], y: [-1.5, 1.5], step: 10, xname: "x", yname: "y", width: 340, height: 300,
      rings: [1], ringClass: "g-ref", xt: numT([-1, 1]),
      segments: [[0, 0, Math.cos(0.7), Math.sin(0.7)], [0, 0, -Math.cos(0.7), -Math.sin(0.7)]],
      dots: [[Math.cos(0.7), Math.sin(0.7), "closed"], [-Math.cos(0.7), -Math.sin(0.7), "closed"]],
      labels: [[0.85, 0.75, "P"], [-0.98, -0.85, "Q"]],
      alt: "Unit circle centered at the origin. Point P is on the circle in Quadrant I. Point Q is on the circle in Quadrant III, directly opposite P, so the segment from P to Q passes through the origin.",
    }) }]),
  },
  "p3br-s11": {
    name: "A sinusoid with two marked points", label: "Graph",
    intro: String.raw`The graph of a function $g$ is shown for $-\pi \le x \le 2\pi$. It has a maximum point at $\left(\dfrac{\pi}{6}, 2\right)$ and a minimum point at $\left(\dfrac{7\pi}{6}, -2\right)$, and it has period $2\pi$.`,
    sources: one([{ svg: G({
      x: [-3.5, 6.6], y: [-2.6, 2.6], step: { x: PI / 6, y: 1 }, xname: "x", yname: "y", width: 400,
      xt: piT([[-1, 1, "−π"], [1, 6, "π/6"], [7, 6, "7π/6"], [2, 1, "2π"]]), yt: numT([-2, -1, 1, 2]),
      fns: [{ f: f11, from: -PI, to: 2 * PI }], dots: [[PI / 6, 2, "closed"], [7 * PI / 6, -2, "closed"]],
      alt: "Graph of g from -pi to 2pi, a sinusoid with amplitude 2 and midline y = 0. It has a maximum at (pi/6, 2) and a minimum at (7pi/6, -2), and it crosses the y-axis at about 1.7.",
    }) }]),
  },
  "p3br-s12": {
    name: "A point in Quadrant II", label: "Graph",
    intro: String.raw`The point $(-3, 3)$ is shown in the $xy$-plane.`,
    sources: one([{ svg: G({
      x: [-5, 5], y: [-5, 5], step: 1, xname: "x", yname: "y", keepTicks: true, width: 300, height: 300,
      dots: [[-3, 3, "closed"]], labels: [[-3.3, 3.5, "(−3, 3)"]],
      alt: "The point (-3, 3) plotted in Quadrant II of the xy-plane.",
    }) }]),
  },
  "p3br-s13": {
    name: "A point on a polar grid", label: "Diagram",
    intro: String.raw`Point $Q$ is shown on a polar grid. The circles have radii $1$, $2$, $3$, and $4$, and the rays are drawn every $\dfrac{\pi}{6}$ radians.`,
    sources: one([{ svg: G({
      x: [-5.2, 5.2], y: [-5.2, 5.2], step: 10, width: 320, height: 320,
      rings: [1, 2, 3, 4], rays: spokes(4),
      labels: [[0.85, -0.45, "1"], [1.85, -0.45, "2"], [2.85, -0.45, "3"], [3.85, -0.45, "4"],
        ...[[1, 6, "π/6"], [1, 3, "π/3"], [1, 2, "π/2"], [2, 3, "2π/3"], [5, 6, "5π/6"], [1, 1, "π"], [7, 6, "7π/6"], [4, 3, "4π/3"], [3, 2, "3π/2"], [5, 3, "5π/3"], [11, 6, "11π/6"]]
          .map(([n, d, t]) => [4.6 * Math.cos((n * PI) / d) - t.length * 0.13, 4.6 * Math.sin((n * PI) / d) - 0.15, t]),
        [-3.0, -1.95, "Q"]],
      dots: [[3 * Math.cos(7 * PI / 6), 3 * Math.sin(7 * PI / 6), "closed"]],
      alt: "Polar grid with circles of radius 1, 2, 3, and 4 and rays every pi/6 radians. Point Q is on the circle of radius 3 and on the ray at angle 7pi/6, below the negative x-axis in Quadrant III.",
    }) }]),
  },
  "p3br-s14": {
    name: "A point in the complex plane", label: "Graph",
    intro: String.raw`The complex number $z$ is shown as a point in the complex plane. The horizontal axis is the real axis, and the vertical axis is the imaginary axis.`,
    sources: one([{ svg: G({
      x: [-4, 4], y: [-4, 4], step: 1, xname: "Re", yname: "Im", keepTicks: true, width: 300, height: 300,
      dots: [[-2, -2, "closed"]], labels: [[-2.6, -2.7, "z"]],
      alt: "The complex plane with the point z at real part -2 and imaginary part -2, in Quadrant III.",
    }) }]),
  },
  "p3br-s15": {
    name: "A cardioid", label: "Polar graph",
    intro: String.raw`The polar graph of $r = 2 + 2\cos\theta$ is shown for $0 \le \theta \le 2\pi$. Point $D$ on the graph has rectangular coordinates $\left(-\dfrac{1}{2}, \dfrac{\sqrt{3}}{2}\right)$.`,
    sources: one([{ svg: G({
      x: [-2.2, 4.8], y: [-3.5, 3.5], step: 10, xname: "x", yname: "y", width: 300, height: 300,
      rings: [1, 2, 3, 4], rays: spokes(5), xt: numT([1, 2, 3, 4]),
      segments: polar(r15, 0, 2 * PI), dots: [[-0.5, Math.sqrt(3) / 2, "closed"]], labels: [[-1.0, 1.15, "D"]],
      alt: "Polar graph of r = 2 + 2cos theta, a heart-shaped cardioid that passes through (4, 0) on the positive x-axis, (0, 2) and (0, -2) on the y-axis, and comes to a point at the pole. Point D is marked on the curve in Quadrant II, a little up and to the left of the pole.",
    }) }]),
  },
  "p3br-s16": {
    name: "A three-petal rose", label: "Polar graph",
    intro: String.raw`The polar graph of $r = 2\sin(3\theta)$ is shown for $0 \le \theta \le \pi$. It has three petals.`,
    sources: one([{ svg: G({
      x: [-2.6, 2.6], y: [-2.6, 2.6], step: 10, xname: "x", yname: "y", width: 300, height: 300,
      rings: [1, 2], rays: spokes(3), xt: numT([1, 2]),
      segments: polar(r16, 0, PI),
      alt: "Polar graph of r = 2 sin(3 theta), a rose with three petals of length 2. One petal points up and to the right in Quadrant I, one points up and to the left in Quadrant II, and one points straight down along the negative y-axis.",
    }) }]),
  },
  "p3br-s17": {
    name: "A limacon with an inner loop", label: "Polar graph",
    intro: String.raw`The polar graph of $r = 2 + 4\sin\theta$ is shown for $0 \le \theta \le 2\pi$. It has an inner loop.`,
    sources: one([{ svg: G({
      x: [-4.6, 4.6], y: [-1.8, 7.4], step: 10, xname: "x", yname: "y", width: 300, height: 300,
      rings: [2, 4, 6], rays: spokes(8), xt: numT([2, 4]), yt: numT([2, 4]),
      segments: polar(r17, 0, 2 * PI),
      alt: "Polar graph of r = 2 + 4 sin theta, a limacon. The large outer loop reaches up to (0, 6) and out to (2, 0) and (-2, 0). A small inner loop sits inside it above the pole, reaching up to (0, 2).",
    }) }]),
  },
  "p3br-s18": {
    name: "r against theta", label: "Graph",
    intro: String.raw`The graph of $r = f(\theta) = 1 - 2\cos(2\theta)$ in the $\theta r$-plane is shown for $0 \le \theta \le 2\pi$.`,
    sources: one([{ svg: G({
      x: [-0.3, 6.7], y: [-1.6, 3.6], step: { x: PI / 2, y: 1 }, xname: "θ", yname: "r", width: 400,
      xt: piT([[1, 2, "π/2"], [1, 1, "π"], [3, 2, "3π/2"], [2, 1, "2π"]]), yt: numT([-1, 1, 2, 3]),
      fns: [{ f: r18, from: 0, to: 2 * PI }],
      alt: "Graph of r = 1 - 2cos(2 theta) for theta from 0 to 2pi, with theta on the horizontal axis and r on the vertical axis. It starts at r = -1 at theta = 0, rises to r = 3 at pi/2, falls to r = -1 at pi, rises to 3 at 3pi/2, and falls to -1 at 2pi.",
    }) }]),
  },
  "p3br-s19": {
    name: "A four-petal rose", label: "Polar graph",
    intro: String.raw`A polar graph is shown. It is a rose with four petals, and the tip of each petal is $3$ units from the pole.`,
    sources: one([{ svg: G({
      x: [-3.6, 3.6], y: [-3.6, 3.6], step: 10, xname: "x", yname: "y", width: 300, height: 300,
      rings: [1, 2, 3], rays: spokes(4), xt: numT([1, 2]),
      segments: polar(r19, 0, 2 * PI),
      alt: "Polar graph of a rose with four petals of length 3. The petal tips are at (3, 0), (0, 3), (-3, 0), and (0, -3), one on each half of each axis.",
    }) }]),
  },
  "p3br-s20": {
    name: "A circle through the pole", label: "Polar graph",
    intro: String.raw`A polar graph is shown. It is a circle that passes through the pole.`,
    sources: one([{ svg: G({
      x: [-3, 3], y: [-1, 5], step: 10, xname: "x", yname: "y", width: 300, height: 300,
      rings: [1, 2, 3, 4], rays: spokes(6), yt: numT([1, 2, 3]),
      segments: polar(r20, 0, PI),
      alt: "Polar graph of a circle that touches the pole at its lowest point and reaches up to (0, 4) at its highest point, centered on the positive y-axis.",
    }) }]),
  },
  "p3br-s21": {
    name: "r against theta on a half turn", label: "Graph",
    intro: String.raw`The graph of $r = f(\theta) = 2 - 5\sin\theta$ in the $\theta r$-plane is shown for $0 \le \theta \le \pi$.`,
    sources: one([{ svg: G({
      x: [-0.3, 3.5], y: [-3.6, 2.6], step: { x: PI / 4, y: 1 }, xname: "θ", yname: "r", width: 340,
      xt: piT([[1, 2, "π/2"], [1, 1, "π"]]), yt: numT([-3, -2, -1, 1, 2]),
      fns: [{ f: r21, from: 0, to: PI }],
      alt: "Graph of r = 2 - 5 sin theta for theta from 0 to pi. It starts at r = 2, falls through r = 0 to a minimum of r = -3 at theta = pi/2, then rises back through r = 0 to r = 2 at theta = pi.",
    }) }]),
  },
  "p3br-s22": {
    name: "A piecewise linear r", label: "Graph",
    intro: String.raw`The function $f$ is piecewise linear on $0 \le \theta \le 2\pi$, and its graph in the $\theta r$-plane is shown. The graph consists of line segments joining $(0, 2)$, $\left(\dfrac{\pi}{2}, -2\right)$, $(\pi, 1)$, and $(2\pi, 1)$.`,
    sources: one([{ svg: G({
      x: [-0.3, 6.7], y: [-2.6, 2.6], step: { x: PI / 4, y: 1 }, xname: "θ", yname: "r", width: 400,
      xt: piT([[1, 4, "π/4", -12], [1, 2, "π/2"], [1, 1, "π"], [3, 2, "3π/2"], [2, 1, "2π"]]), yt: numT([-2, -1, 1, 2]),
      segments: [[0, 2, PI / 2, -2], [PI / 2, -2, PI, 1], [PI, 1, 2 * PI, 1]],
      dots: [[0, 2, "closed"], [PI / 2, -2, "closed"], [PI, 1, "closed"], [2 * PI, 1, "closed"]],
      alt: "Graph of r = f(theta), made of line segments: from (0, 2) down through (pi/4, 0) to (pi/2, -2), then up through (5pi/6, 0) to (pi, 1), then level at r = 1 until (2pi, 1).",
    }) }]),
  },
  "p3br-s23": {
    name: "A decreasing polar function", label: "Table",
    intro: String.raw`The function $f$ is decreasing on the interval $1.0 \le \theta \le 2.2$. Selected values of $f(\theta)$ are given in the table.`,
    sources: one([{ table: { head: [String.raw`$\theta$`, "$1.0$", "$1.4$", "$1.8$", "$2.2$"], rows: [[String.raw`$f(\theta)$`, "$2.6$", "$1.9$", "$0.7$", "$-0.4$"]] } }]),
  },
  "p3br-s24": {
    name: "A three-petal cosine rose", label: "Polar graph",
    intro: String.raw`The polar graph of $r = 2\cos(3\theta)$ is shown for $0 \le \theta \le \pi$.`,
    sources: one([{ svg: G({
      x: [-2.6, 2.6], y: [-2.6, 2.6], step: 10, xname: "x", yname: "y", width: 300, height: 300,
      rings: [1, 2], rays: spokes(3), xt: numT([1, 2]),
      segments: polar(r24, 0, PI),
      alt: "Polar graph of r = 2cos(3 theta), a rose with three petals of length 2. One petal points right along the positive x-axis, one points up and to the left in Quadrant II, and one points down and to the left in Quadrant III.",
    }) }]),
  },
  "p3br-s25": {
    name: "r against theta for a limacon", label: "Graph",
    intro: String.raw`The graph of $r = f(\theta) = 1 + 2\cos\theta$ in the $\theta r$-plane is shown for $0 \le \theta \le 2\pi$.`,
    sources: one([{ svg: G({
      x: [-0.3, 6.7], y: [-1.6, 3.6], step: { x: PI / 3, y: 1 }, xname: "θ", yname: "r", width: 400,
      xt: piT([[1, 3, "π/3"], [2, 3, "2π/3", -10], [1, 1, "π"], [4, 3, "4π/3", 10], [5, 3, "5π/3"], [2, 1, "2π"]]), yt: numT([-1, 1, 2, 3]),
      fns: [{ f: r25, from: 0, to: 2 * PI }],
      alt: "Graph of r = 1 + 2cos theta for theta from 0 to 2pi. It starts at r = 3, falls through r = 0 at 2pi/3 to a minimum of r = -1 at pi, then rises through r = 0 at 4pi/3 back to r = 3 at 2pi.",
    }) }]),
  },
  "p3br-s26": {
    name: "A limacon with a small loop", label: "Polar graph",
    intro: String.raw`The polar graph of $r = 3 + 4\cos\theta$ is shown for $0 \le \theta \le 2\pi$.`,
    sources: one([{ svg: G({
      x: [-2.4, 7.6], y: [-5, 5], step: 10, xname: "x", yname: "y", width: 300, height: 300,
      rings: [2, 4, 6], rays: spokes(9), xt: numT([2, 4, 6]),
      segments: polar(r26, 0, 2 * PI),
      alt: "Polar graph of r = 3 + 4cos theta, a limacon. The large outer loop reaches right to (7, 0) and up and down to (0, 3) and (0, -3). A small inner loop lies inside it, to the right of the pole, reaching to (1, 0).",
    }) }]),
  },
  "p3br-s27": {
    name: "Rewriting and solving trigonometric equations", label: "Free response",
    intro: String.raw`Answer each part. Give exact answers, and show the work that leads to each answer. Angles are in radians.`,
    sources: one([{ p: String.raw`A calculator is not allowed on this question.` }]),
  },
  "p3br-s28": {
    name: "A polar function", label: "Free response",
    intro: String.raw`The function $f$ is given by $f(\theta) = 1 + 2\cos(2\theta)$. The first graph shows $r = f(\theta)$ in the $\theta r$-plane for $0 \le \theta \le \pi$. The second graph shows the polar graph of $r = f(\theta)$ for $0 \le \theta \le \pi$.`,
    sources: one([
      { svg: G({
        x: [-0.3, 3.5], y: [-1.6, 3.6], step: { x: PI / 6, y: 1 }, xname: "θ", yname: "r", width: 380,
        xt: piT([[1, 3, "π/3", -10], [1, 2, "π/2"], [2, 3, "2π/3", 10], [1, 1, "π"]]), yt: numT([-1, 1, 2, 3]),
        fns: [{ f: r28, from: 0, to: PI }],
        alt: "Graph of r = 1 + 2cos(2 theta) for theta from 0 to pi. It starts at r = 3, falls through r = 0 at pi/3 to a minimum of r = -1 at pi/2, then rises through r = 0 at 2pi/3 back to r = 3 at pi.",
      }) },
      { svg: G({
        x: [-3.6, 3.6], y: [-1.9, 1.9], step: 10, xname: "x", yname: "y", width: 380, height: 220,
        rings: [1, 2, 3], rays: spokes(4), xt: numT([-3, -2, -1, 1, 2, 3]),
        segments: polar(r28, 0, PI),
        alt: "Polar graph of r = 1 + 2cos(2 theta) for theta from 0 to pi. An arc starts at (3, 0), curves up through Quadrant I, and reaches the pole. A small loop below the pole runs down to (0, -1) and back to the pole. A second arc leaves the pole, curves up through Quadrant II, and ends at (-3, 0).",
      }) },
    ]),
  },
  "p3br-s29": {
    name: "Water depth at a pier", label: "Free response",
    intro: String.raw`The depth of the water at the end of a pier is modeled by $D(t) = 8 + 3\sin\left(\dfrac{\pi t}{6}\right)$ feet, where $t$ is the number of hours after midnight.`,
    sources: one([{ p: String.raw`A calculator is not allowed on this question. Give exact answers.` }]),
  },
};

const R = String.raw;
export default [
  // 3.9 Inverse Trigonometric Functions
  { id: "p3br-m01", type: "mcq", skill: "u3", topic: "3.9", calc: false, difficulty: "easy",
    question: R`What is the value of $\arccos\left(-\dfrac{1}{2}\right)$?`,
    choices: [R`$\dfrac{2\pi}{3}$`, R`$\dfrac{4\pi}{3}$`, R`$-\dfrac{\pi}{3}$`, R`$\dfrac{5\pi}{6}$`],
    why: [
      R`The range of $\arccos x$ is $[0, \pi]$. The angle in $[0, \pi]$ whose cosine is $-\dfrac{1}{2}$ is $\dfrac{2\pi}{3}$.`,
      R`$\cos\left(\dfrac{4\pi}{3}\right) = -\dfrac{1}{2}$, but $\dfrac{4\pi}{3}$ is outside $[0, \pi]$, the range of $\arccos x$.`,
      R`$-\dfrac{\pi}{3}$ is in the range of $\arcsin x$, not of $\arccos x$, and $\cos\left(-\dfrac{\pi}{3}\right) = \dfrac{1}{2}$, not $-\dfrac{1}{2}$.`,
      R`$\cos\left(\dfrac{5\pi}{6}\right) = -\dfrac{\sqrt{3}}{2}$. This mixes up the special values for $\dfrac{\pi}{3}$ and $\dfrac{\pi}{6}$.`,
    ], answer: 0 },
  { id: "p3br-m02", type: "mcq", skill: "u3", topic: "3.9", calc: false, difficulty: "easy",
    question: R`What is the range of $y = \arctan x$?`,
    choices: [R`$\left(-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right)$`, R`$\left[-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right]$`, R`$[0, \pi]$`, R`$(-\infty, \infty)$`],
    why: [
      R`Tangent is restricted to $\left(-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right)$ to make it one-to-one, so that interval is the range of $\arctan x$. The endpoints are left out because $\tan x$ is undefined there.`,
      R`This is the range of $\arcsin x$. $\tan\left(\pm\dfrac{\pi}{2}\right)$ is undefined, so the endpoints cannot be outputs of $\arctan x$.`,
      R`$[0, \pi]$ is the range of $\arccos x$. Tangent is not one-to-one on $[0, \pi]$ and is undefined at $\dfrac{\pi}{2}$.`,
      R`All real numbers is the domain of $\arctan x$, not its range.`,
    ], answer: 0 },
  { id: "p3br-m03", type: "mcq", skill: "u3", topic: "3.9", calc: false, set: "p3br-s1", difficulty: "moderate",
    question: R`On which of the following intervals is $f$ one-to-one?`,
    choices: [R`$\left[-\dfrac{\pi}{4}, \dfrac{\pi}{4}\right]$`, R`$\left[-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right]$`, R`$\left[0, \dfrac{\pi}{2}\right]$`, R`$[0, \pi]$`],
    why: [
      R`The graph rises from its minimum at $x = -\dfrac{\pi}{4}$ to its maximum at $x = \dfrac{\pi}{4}$, so every horizontal line meets this piece at most once.`,
      R`This is the interval used for $\sin x$. With period $\pi$, $\sin(2x)$ reaches its maximum and minimum inside $\left[-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right]$, so values repeat, for example $f(0) = f\left(\dfrac{\pi}{2}\right) = 0$.`,
      R`$f$ increases to its maximum at $x = \dfrac{\pi}{4}$ and then decreases, so values repeat, for example $f\left(\dfrac{\pi}{8}\right) = f\left(\dfrac{3\pi}{8}\right)$.`,
      R`$[0, \pi]$ is a full period of $f$, so values repeat, for example $f(0) = f(\pi) = 0$.`,
    ], answer: 0 },
  { id: "p3br-m04", type: "mcq", skill: "u3", topic: "3.9", calc: false, difficulty: "moderate",
    question: R`What is the value of $\tan\left(\arccos\left(-\dfrac{5}{13}\right)\right)$?`,
    choices: [R`$-\dfrac{12}{5}$`, R`$\dfrac{12}{5}$`, R`$-\dfrac{5}{12}$`, R`$-\dfrac{12}{13}$`],
    why: [
      R`Let $\theta = \arccos\left(-\dfrac{5}{13}\right)$, so $\cos\theta = -\dfrac{5}{13}$ and $\theta$ is in Quadrant II. Then $\sin\theta = \sqrt{1 - \dfrac{25}{169}} = \dfrac{12}{13}$, and $\tan\theta = \dfrac{\sin\theta}{\cos\theta} = -\dfrac{12}{5}$.`,
      R`This places $\theta$ in Quadrant I. Since $\cos\theta < 0$ and $\theta$ is in $[0, \pi]$, $\theta$ is in Quadrant II, where tangent is negative.`,
      R`This is $\dfrac{\cos\theta}{\sin\theta}$, which is $\cot\theta$, not $\tan\theta$.`,
      R`This divides the opposite side by the hypotenuse, a sine ratio, and attaches a negative sign. Tangent is $\dfrac{\sin\theta}{\cos\theta}$.`,
    ], answer: 0 },
  { id: "p3br-m05", type: "mcq", skill: "u3", topic: "3.9", calc: false, difficulty: "moderate",
    question: R`What is the value of $\arccos\left(\cos\left(-\dfrac{\pi}{4}\right)\right)$?`,
    choices: [R`$\dfrac{\pi}{4}$`, R`$-\dfrac{\pi}{4}$`, R`$\dfrac{7\pi}{4}$`, R`$\dfrac{\sqrt{2}}{2}$`],
    why: [
      R`$\cos\left(-\dfrac{\pi}{4}\right) = \dfrac{\sqrt{2}}{2}$, and the angle in $[0, \pi]$ with cosine $\dfrac{\sqrt{2}}{2}$ is $\dfrac{\pi}{4}$.`,
      R`$\arccos(\cos x) = x$ only for $x$ in $[0, \pi]$. $-\dfrac{\pi}{4}$ is not in the range of $\arccos x$.`,
      R`$\dfrac{7\pi}{4}$ has cosine $\dfrac{\sqrt{2}}{2}$, but it is outside $[0, \pi]$, the range of $\arccos x$.`,
      R`$\dfrac{\sqrt{2}}{2}$ is the value of $\cos\left(-\dfrac{\pi}{4}\right)$, the inner step. The outer $\arccos$ returns an angle.`,
    ], answer: 0 },
  { id: "p3br-m06", type: "mcq", skill: "u3", topic: "3.9", calc: false, difficulty: "difficult",
    question: R`For all real numbers $x$, $\sin(\arctan x)$ is equal to which of the following?`,
    choices: [R`$\dfrac{x}{\sqrt{1 + x^{2}}}$`, R`$\dfrac{1}{\sqrt{1 + x^{2}}}$`, R`$\dfrac{|x|}{\sqrt{1 + x^{2}}}$`, R`$\dfrac{x}{\sqrt{1 - x^{2}}}$`],
    why: [
      R`Let $\theta = \arctan x$, so $\tan\theta = x$ and $-\dfrac{\pi}{2} < \theta < \dfrac{\pi}{2}$. Then $\sec^{2}\theta = 1 + x^{2}$, and $\cos\theta > 0$ on this interval, so $\cos\theta = \dfrac{1}{\sqrt{1 + x^{2}}}$. So $\sin\theta = \tan\theta\cos\theta = \dfrac{x}{\sqrt{1 + x^{2}}}$, which has the same sign as $x$.`,
      R`This is $\cos(\arctan x)$, the adjacent side over the hypotenuse.`,
      R`When $x < 0$, $\arctan x$ is in Quadrant IV, where sine is negative. The absolute value makes the result positive for every $x$.`,
      R`This takes $1 - x^{2}$ as the square of the hypotenuse. In a right triangle with legs $x$ and $1$, the hypotenuse is $\sqrt{1 + x^{2}}$. This expression is also undefined for $|x| \ge 1$.`,
    ], answer: 0 },
  { id: "p3br-m07", type: "mcq", skill: "u3", topic: "3.9", calc: true, difficulty: "easy",
    question: R`A straight ramp is $9$ meters long and rises $1.5$ meters from its bottom to its top. What is the angle, in radians, between the ramp and the level ground?`,
    choices: ["$0.167$", "$0.165$", "$1.403$", "$9.594$"],
    why: [
      R`The ramp is the hypotenuse, so $\sin\theta = \dfrac{1.5}{9}$ and $\theta = \arcsin\left(\dfrac{1.5}{9}\right) \approx 0.167$ radians.`,
      R`$\arctan\left(\dfrac{1.5}{9}\right) \approx 0.165$ treats $9$ meters as the horizontal distance. The $9$ meters is the length of the ramp, the hypotenuse.`,
      R`$\arccos\left(\dfrac{1.5}{9}\right) \approx 1.403$ is the angle between the ramp and a vertical line.`,
      R`$9.594$ is the angle in degrees. The question asks for radians.`,
    ], answer: 0 },
  { id: "p3br-m08", type: "mcq", skill: "u3", topic: "3.9", calc: false, set: "p3br-s2", difficulty: "easy",
    question: R`What are the domain and range of $f^{-1}$?`,
    choices: [R`Domain $[-3, 3]$, range $\left[-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right]$`, R`Domain $\left[-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right]$, range $[-3, 3]$`, R`Domain $[-1, 1]$, range $\left[-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right]$`, R`Domain $[-3, 3]$, range $[0, \pi]$`],
    why: [
      R`$f$ increases on $\left[-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right]$ with outputs from $-3$ to $3$. The inverse swaps inputs and outputs, so its domain is $[-3, 3]$ and its range is $\left[-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right]$.`,
      R`These are the domain and range of $f$. The inverse swaps them.`,
      R`$[-1, 1]$ is the domain of $\arcsin x$. The factor $3$ stretches the outputs of $f$ to $[-3, 3]$.`,
      R`$[0, \pi]$ is the range of $\arccos x$. The range of $f^{-1}$ is the domain of $f$.`,
    ], answer: 0 },
  { id: "p3br-m09", type: "mcq", skill: "u3", topic: "3.9", calc: false, set: "p3br-s3", difficulty: "moderate",
    question: R`The function $g$ is restricted to one of the following intervals. For which interval is the restricted function invertible, with an inverse whose domain is $[-3, 1]$?`,
    choices: [R`$[0, \pi]$`, R`$\left[-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right]$`, R`$[0, 2\pi]$`, R`$\left[\dfrac{\pi}{2}, \dfrac{3\pi}{2}\right]$`],
    why: [
      R`On $[0, \pi]$, $g$ decreases from $g(0) = 1$ to $g(\pi) = -3$, so it is one-to-one and takes every value in $[-3, 1]$. Those outputs are the domain of the inverse.`,
      R`This is the restriction used for sine. $g$ increases on $\left[-\dfrac{\pi}{2}, 0\right]$ and decreases on $\left[0, \dfrac{\pi}{2}\right]$, so values repeat, for example $g\left(-\dfrac{\pi}{2}\right) = g\left(\dfrac{\pi}{2}\right) = -1$.`,
      R`$[0, 2\pi]$ is a full period, so $g$ is not one-to-one there: $g(0) = g(2\pi) = 1$.`,
      R`$g$ decreases to its minimum at $x = \pi$ and then increases, so it is not one-to-one, and its outputs reach only $[-3, -1]$.`,
    ], answer: 0 },

  // 3.10 Trigonometric Equations and Inequalities
  { id: "p3br-m10", type: "mcq", skill: "u3", topic: "3.10", calc: false, difficulty: "easy",
    question: R`Which of the following gives all solutions of $\sqrt{3}\tan x - 1 = 0$, where $n$ is any integer?`,
    choices: [R`$x = \dfrac{\pi}{6} + n\pi$`, R`$x = \dfrac{\pi}{6} + 2n\pi$`, R`$x = \dfrac{5\pi}{6} + n\pi$`, R`$x = \pm\dfrac{\pi}{6} + 2n\pi$`],
    why: [
      R`$\tan x = \dfrac{1}{\sqrt{3}}$, and $\tan\left(\dfrac{\pi}{6}\right) = \dfrac{1}{\sqrt{3}}$. Tangent has period $\pi$, so $x = \dfrac{\pi}{6} + n\pi$.`,
      R`The solutions repeat every $\pi$, the period of tangent. Adding only multiples of $2\pi$ misses solutions such as $\dfrac{7\pi}{6}$.`,
      R`$\tan\left(\dfrac{5\pi}{6}\right) = -\dfrac{1}{\sqrt{3}}$. Tangent is negative in Quadrant II, so the sign is wrong.`,
      R`This pairs the solutions as for cosine. $\tan\left(-\dfrac{\pi}{6}\right) = -\dfrac{1}{\sqrt{3}}$, and the solution $\dfrac{7\pi}{6}$ is missed.`,
    ], answer: 0 },
  { id: "p3br-m11", type: "mcq", skill: "u3", topic: "3.10", calc: true, difficulty: "moderate",
    question: R`What are all solutions of $5\sin^{2}x = 2$ on the interval $0 \le x < 2\pi$?`,
    choices: [R`$0.685, 2.457, 3.826, 5.598$`, R`$0.685, 2.457$`, R`$0.685, 5.598$`, R`$0.412, 2.730, 3.553, 5.872$`],
    why: [
      R`$\sin^{2}x = 0.4$, so $\sin x = \pm\sqrt{0.4}$. $\arcsin\sqrt{0.4} \approx 0.685$. Sine is positive at $0.685$ and $\pi - 0.685 \approx 2.457$, and negative at $\pi + 0.685 \approx 3.826$ and $2\pi - 0.685 \approx 5.598$.`,
      R`These solve $\sin x = \sqrt{0.4}$ only. Taking the square root gives $\sin x = \pm\sqrt{0.4}$, and the negative value adds two more solutions.`,
      R`$5.598$ is a solution, but this pairs $0.685$ with its reflection across the $x$-axis, as for cosine. It misses $2.457$ and $3.826$.`,
      R`These solve $\sin x = \pm 0.4$. The square root of $\sin^{2}x = 0.4$ was not taken.`,
    ], answer: 0 },
  { id: "p3br-m12", type: "mcq", skill: "u3", topic: "3.10", calc: true, difficulty: "moderate",
    question: R`What are all solutions of $5\sin x - 2 > 0$ on the interval $0 \le x < 2\pi$?`,
    choices: [R`$(0.412, 2.730)$`, R`$(0.412, 3.553)$`, R`$[0, 0.412) \cup (2.730, 2\pi)$`, R`$(1.159, 5.124)$`],
    why: [
      R`$\sin x > 0.4$. $\arcsin 0.4 \approx 0.412$, and the other angle in $[0, 2\pi)$ with $\sin x = 0.4$ is $\pi - 0.412 \approx 2.730$. Between them, the sine is greater than $0.4$.`,
      R`$3.553 = \pi + 0.412$ is where $\sin x = -0.4$. The second solution of $\sin x = 0.4$ is in Quadrant II, at $\pi - 0.412$.`,
      R`This is where $\sin x < 0.4$, the complement of the solution.`,
      R`$1.159$ and $5.124$ come from $\arccos 0.4$, so this solves $\cos x < 0.4$ instead.`,
    ], answer: 0 },
  { id: "p3br-m13", type: "mcq", skill: "u3", topic: "3.10", calc: true, set: "p3br-s5", difficulty: "difficult",
    question: R`According to the model, for how many hours during the day is the temperature greater than $78$ degrees?`,
    choices: ["$6.425$", "$17.575$", "$3.213$", "$1.682$"],
    why: [
      R`$72 - 9\cos\left(\dfrac{\pi t}{12}\right) > 78$ gives $\cos\left(\dfrac{\pi t}{12}\right) < -\dfrac{2}{3}$. $\arccos\left(-\dfrac{2}{3}\right) \approx 2.3005$, so $\dfrac{\pi t}{12}$ is between $2.3005$ and $2\pi - 2.3005$, and $t$ is between about $8.787$ and $15.213$. That is about $6.425$ hours.`,
      R`$17.575$ hours is the time the temperature is below $78$ degrees, the complement of the solution.`,
      R`$3.213$ is the time from $t \approx 8.787$ to noon, only half of the interval. The temperature stays above $78$ degrees until $t \approx 15.213$.`,
      R`$1.682$ is the length of the interval of the angle $\dfrac{\pi t}{12}$, not of $t$. Multiplying by $\dfrac{12}{\pi}$ converts it to hours.`,
    ], answer: 0 },
  { id: "p3br-m14", type: "mcq", skill: "u3", topic: "3.10", calc: false, set: "p3br-s4", difficulty: "moderate",
    question: R`Which of the following is the solution set of $2\sin x \ge 1$ on the interval $0 \le x \le 4\pi$?`,
    choices: [R`$\left[\dfrac{\pi}{6}, \dfrac{5\pi}{6}\right] \cup \left[\dfrac{13\pi}{6}, \dfrac{17\pi}{6}\right]$`, R`$\left[\dfrac{\pi}{6}, \dfrac{5\pi}{6}\right]$`, R`$\left[\dfrac{\pi}{6}, \dfrac{5\pi}{6}\right] \cup \left[\dfrac{7\pi}{6}, \dfrac{11\pi}{6}\right]$`, R`$\left[\dfrac{\pi}{3}, \dfrac{2\pi}{3}\right] \cup \left[\dfrac{7\pi}{3}, \dfrac{8\pi}{3}\right]$`],
    why: [
      R`$\sin x \ge \dfrac{1}{2}$. In the first period this holds on $\left[\dfrac{\pi}{6}, \dfrac{5\pi}{6}\right]$, and the interval repeats one period, $2\pi$, later, on $\left[\dfrac{13\pi}{6}, \dfrac{17\pi}{6}\right]$.`,
      R`This covers only $[0, 2\pi]$. The interval $[0, 4\pi]$ holds two periods, and the graph is above the line again in the second.`,
      R`On $\left[\dfrac{7\pi}{6}, \dfrac{11\pi}{6}\right]$, $2\sin x \le -1$, so the graph is below the line there. This solves $|2\sin x| \ge 1$.`,
      R`$\sin\left(\dfrac{\pi}{3}\right) = \dfrac{\sqrt{3}}{2}$, so these endpoints solve $2\sin x = \sqrt{3}$, not $2\sin x = 1$.`,
    ], answer: 0 },
  { id: "p3br-m15", type: "mcq", skill: "u3", topic: "3.10", calc: true, difficulty: "difficult",
    question: R`The horizontal position of a pendulum bob, in centimeters from its resting position, is $d(t) = 8\cos(2.5t)$, where $t$ is time in seconds. At what time $t > 0$ is $d(t) = -5$ for the second time?`,
    choices: ["$1.615$", "$0.898$", "$1.797$", "$3.412$"],
    why: [
      R`$\cos(2.5t) = -0.625$. $\arccos(-0.625) \approx 2.2459$ gives $t \approx 0.898$, the first time. The next angle with this cosine is $2\pi - 2.2459 \approx 4.0373$, so $t \approx \dfrac{4.0373}{2.5} \approx 1.615$.`,
      R`$0.898$ is the first time $d(t) = -5$, from the calculator's value of $\arccos(-0.625)$.`,
      R`Doubling the first time does not give the second. The second solution comes from the other angle in the same period, $2\pi - 2.2459$.`,
      R`This adds a full period, $\dfrac{2\pi}{2.5} \approx 2.513$, to the first time, which gives the third time $d(t) = -5$. The second comes within the first period.`,
    ], answer: 0 },
  { id: "p3br-m16", type: "mcq", skill: "u3", topic: "3.10", calc: true, difficulty: "easy",
    question: R`Which of the following gives all solutions of $3\cos x = 1$, where $n$ is any integer?`,
    choices: [R`$x = \pm 1.231 + 2\pi n$`, R`$x = 1.231 + 2\pi n$`, R`$x = \pm 1.231 + \pi n$`, R`$x = \pm 0.340 + 2\pi n$`],
    why: [
      R`$\cos x = \dfrac{1}{3}$, and $\arccos\left(\dfrac{1}{3}\right) \approx 1.231$. Cosine is also $\dfrac{1}{3}$ at $-1.231$, and both solutions repeat every $2\pi$.`,
      R`This misses the solutions in Quadrant IV, such as $-1.231$ and $2\pi - 1.231 \approx 5.052$.`,
      R`Cosine has period $2\pi$, not $\pi$. At $x = 1.231 + \pi$, $\cos x = -\dfrac{1}{3}$.`,
      R`$0.340 \approx \arcsin\left(\dfrac{1}{3}\right)$, which solves $\sin x = \dfrac{1}{3}$.`,
    ], answer: 0 },

  // 3.11 The Secant, Cosecant, and Cotangent Functions
  { id: "p3br-m17", type: "mcq", skill: "u3", topic: "3.11", calc: false, difficulty: "easy",
    question: R`What is the domain of $y = \cot x$, where $n$ is any integer?`,
    choices: [R`All real numbers except $x = n\pi$`, R`All real numbers except $x = \dfrac{\pi}{2} + n\pi$`, R`All real numbers except $x = \dfrac{n\pi}{2}$`, R`All real numbers except $x = 2n\pi$`],
    why: [
      R`$\cot x = \dfrac{\cos x}{\sin x}$ is undefined where $\sin x = 0$, which is at every multiple of $\pi$.`,
      R`These are the zeros of $\cos x$, where $\tan x$ is undefined. At those values $\cot x = 0$.`,
      R`This treats $\cot x$ as $\dfrac{1}{\tan x}$ and also leaves out the values where $\tan x$ is undefined. At $x = \dfrac{\pi}{2} + n\pi$, $\cot x = \dfrac{\cos x}{\sin x} = 0$, which is defined.`,
      R`$\sin x = 0$ at odd multiples of $\pi$ too, such as $x = \pi$, so those are left out as well.`,
    ], answer: 0 },
  { id: "p3br-m18", type: "mcq", skill: "u3", topic: "3.11", calc: false, set: "p3br-s9", difficulty: "easy",
    question: R`What is the value of $\sec\theta$?`,
    choices: ["$-2$", "$2$", R`$-\dfrac{1}{2}$`, R`$\dfrac{2\sqrt{3}}{3}$`],
    why: [
      R`$\cos\theta$ is the $x$-coordinate of $P$, $-\dfrac{1}{2}$, so $\sec\theta = \dfrac{1}{\cos\theta} = -2$.`,
      R`$P$ is in Quadrant II, where cosine and secant are negative.`,
      R`$-\dfrac{1}{2}$ is $\cos\theta$. The secant is its reciprocal.`,
      R`$\dfrac{2\sqrt{3}}{3} = \dfrac{2}{\sqrt{3}}$ is the reciprocal of the $y$-coordinate, which is $\csc\theta$.`,
    ], answer: 0 },
  { id: "p3br-m19", type: "mcq", skill: "u3", topic: "3.11", calc: false, set: "p3br-s6", difficulty: "easy",
    question: R`What is the value of $\csc\theta$?`,
    choices: [R`$-\dfrac{17}{15}$`, R`$-\dfrac{15}{17}$`, R`$-\dfrac{17}{8}$`, R`$\dfrac{8}{15}$`],
    why: [
      R`The distance from the origin is $\sqrt{(-8)^{2} + (-15)^{2}} = 17$, so $\sin\theta = -\dfrac{15}{17}$ and $\csc\theta = -\dfrac{17}{15}$.`,
      R`This is $\sin\theta$. The cosecant is its reciprocal.`,
      R`This is $\sec\theta = \dfrac{17}{-8}$, the reciprocal of the cosine.`,
      R`This is $\cot\theta = \dfrac{-8}{-15}$.`,
    ], answer: 0 },
  { id: "p3br-m20", type: "mcq", skill: "u3", topic: "3.11", calc: false, difficulty: "moderate",
    question: R`What is the range of $y = 3\csc x - 1$?`,
    choices: [R`$(-\infty, -4] \cup [2, \infty)$`, R`$(-\infty, -3] \cup [3, \infty)$`, R`$[-4, 2]$`, R`$(-\infty, -2] \cup [4, \infty)$`],
    why: [
      R`$\csc x \le -1$ or $\csc x \ge 1$, so $3\csc x \le -3$ or $3\csc x \ge 3$. Subtracting $1$ gives $y \le -4$ or $y \ge 2$.`,
      R`This is the range of $3\csc x$. The $-1$ shifts every output down $1$.`,
      R`$[-4, 2]$ is the range of $3\sin x - 1$. Cosecant takes the values outside $(-1, 1)$, not inside.`,
      R`This shifts the outputs up $1$ instead of down $1$.`,
    ], answer: 0 },
  { id: "p3br-m21", type: "mcq", skill: "u3", topic: "3.11", calc: false, set: "p3br-s7", difficulty: "moderate",
    question: R`Which of the following could be an equation for $f$?`,
    choices: [R`$y = 2\sec\left(\dfrac{x}{2}\right)$`, R`$y = 2\sec(2x)$`, R`$y = 2\csc\left(\dfrac{x}{2}\right)$`, R`$y = \dfrac{1}{2}\sec\left(\dfrac{x}{2}\right)$`],
    why: [
      R`The branches turn at $y = 2$ and $y = -2$, so the coefficient is $2$. The minimum at $(0, 2)$ and the maximum at $(2\pi, -2)$ are half a period apart, so the period is $4\pi$ and $b = \dfrac{2\pi}{4\pi} = \dfrac{1}{2}$. A secant has a turning point on the $y$-axis, as the graph does.`,
      R`$2\sec(2x)$ has period $\dfrac{2\pi}{2} = \pi$, with asymptotes $\dfrac{\pi}{2}$ apart. The asymptotes on the graph are $2\pi$ apart.`,
      R`$2\csc\left(\dfrac{x}{2}\right)$ is undefined at $x = 0$, but the graph has the point $(0, 2)$.`,
      R`$\dfrac{1}{2}\sec\left(\dfrac{x}{2}\right)$ has turning points at $y = \pm\dfrac{1}{2}$, not $\pm 2$.`,
    ], answer: 0 },
  { id: "p3br-m22", type: "mcq", skill: "u3", topic: "3.11", calc: false, difficulty: "moderate",
    question: R`If $\cot\theta = -\dfrac{3}{4}$ and $\sec\theta > 0$, what is the value of $\csc\theta$?`,
    choices: [R`$-\dfrac{5}{4}$`, R`$\dfrac{5}{4}$`, R`$-\dfrac{4}{5}$`, R`$-\dfrac{5}{3}$`],
    why: [
      R`$\sec\theta > 0$ means $\cos\theta > 0$, and then $\cot\theta < 0$ means $\sin\theta < 0$, so $\theta$ is in Quadrant IV. With $\cos\theta = \dfrac{3}{5}$ and $\sin\theta = -\dfrac{4}{5}$, $\cot\theta = -\dfrac{3}{4}$, and $\csc\theta = -\dfrac{5}{4}$.`,
      R`This takes $\theta$ in Quadrant II. There $\cos\theta < 0$, so $\sec\theta < 0$, which the condition rules out.`,
      R`$-\dfrac{4}{5}$ is $\sin\theta$. The cosecant is its reciprocal.`,
      R`This treats $-\dfrac{3}{4}$ as sine over cosine, taking $\sin\theta = -\dfrac{3}{5}$. Cotangent is cosine over sine.`,
    ], answer: 0 },
  { id: "p3br-m23", type: "mcq", skill: "u3", topic: "3.11", calc: false, set: "p3br-s8", difficulty: "difficult",
    question: R`Which of the following statements are true?

I. At every $x$ where $\cos x = 1$ or $\cos x = -1$, $\sec x = \cos x$.
II. On every interval where $\cos x$ is decreasing, $\sec x$ is also decreasing.
III. The graph of $y = \sec x$ has a vertical asymptote at every zero of $\cos x$.`,
    choices: ["I and III only", "I, II, and III", "III only", "I only"],
    why: [
      R`I is true: $\sec x = \dfrac{1}{\cos x}$, and $1$ and $-1$ are their own reciprocals. III is true: $\sec x$ is undefined where $\cos x = 0$, and $|\sec x|$ grows without bound near those values. II is false: where $\cos x$ is positive and decreasing, $\dfrac{1}{\cos x}$ increases, as on $\left(0, \dfrac{\pi}{2}\right)$.`,
      R`II is false. Taking reciprocals reverses the direction: on $\left(0, \dfrac{\pi}{2}\right)$, $\cos x$ decreases from $1$ toward $0$ while $\sec x$ increases from $1$.`,
      R`I is also true. Where $\cos x = \pm 1$, the reciprocal $\sec x$ equals the same value, and the graphs touch.`,
      R`III is also true. $\sec x = \dfrac{1}{\cos x}$ is undefined at each zero of $\cos x$, and the graph has a vertical asymptote there.`,
    ], answer: 0 },

  // 3.12 Equivalent Representations of Trigonometric Functions
  { id: "p3br-m24", type: "mcq", skill: "u3", topic: "3.12", calc: false, difficulty: "easy",
    question: R`If $\cos\theta = -\dfrac{\sqrt{5}}{3}$ and $\pi < \theta < \dfrac{3\pi}{2}$, what is the value of $\sin\theta$?`,
    choices: [R`$-\dfrac{2}{3}$`, R`$\dfrac{2}{3}$`, R`$-\dfrac{4}{9}$`, R`$\dfrac{3 + \sqrt{5}}{3}$`],
    why: [
      R`$\sin^{2}\theta = 1 - \dfrac{5}{9} = \dfrac{4}{9}$, so $\sin\theta = \pm\dfrac{2}{3}$. Sine is negative in Quadrant III, so $\sin\theta = -\dfrac{2}{3}$.`,
      R`Sine is negative in Quadrant III, where $\pi < \theta < \dfrac{3\pi}{2}$.`,
      R`$\dfrac{4}{9}$ is $\sin^{2}\theta$. The square root was not taken.`,
      R`This uses $\sin\theta + \cos\theta = 1$. The identity is $\sin^{2}\theta + \cos^{2}\theta = 1$.`,
    ], answer: 0 },
  { id: "p3br-m25", type: "mcq", skill: "u3", topic: "3.12", calc: false, difficulty: "easy",
    question: R`Which of the following is equivalent to $(1 - \cos^{2}x)\csc x$ wherever it is defined?`,
    choices: [R`$\sin x$`, R`$\sin^{3}x$`, R`$\sin^{2}x$`, R`$\csc x - \cos^{2}x$`],
    why: [
      R`$1 - \cos^{2}x = \sin^{2}x$, and $\sin^{2}x \cdot \dfrac{1}{\sin x} = \sin x$.`,
      R`This multiplies $\sin^{2}x$ by $\sin x$. Cosecant is the reciprocal of sine, so multiplying by $\csc x$ divides by $\sin x$.`,
      R`$\sin^{2}x$ is $1 - \cos^{2}x$ alone. The factor $\csc x$ still has to be applied.`,
      R`This multiplies only the first term by $\csc x$. Distributing gives $\csc x - \cos^{2}x\csc x$.`,
    ], answer: 0 },
  { id: "p3br-m26", type: "mcq", skill: "u3", topic: "3.12", calc: false, difficulty: "easy",
    question: R`What is the exact value of $\cos\left(\dfrac{7\pi}{12}\right)$?`,
    choices: [R`$\dfrac{\sqrt{2} - \sqrt{6}}{4}$`, R`$\dfrac{\sqrt{2} + \sqrt{6}}{4}$`, R`$\dfrac{\sqrt{6} - \sqrt{2}}{4}$`, R`$\dfrac{1 + \sqrt{2}}{2}$`],
    why: [
      R`$\cos\left(\dfrac{\pi}{3} + \dfrac{\pi}{4}\right) = \cos\dfrac{\pi}{3}\cos\dfrac{\pi}{4} - \sin\dfrac{\pi}{3}\sin\dfrac{\pi}{4} = \dfrac{\sqrt{2}}{4} - \dfrac{\sqrt{6}}{4} = \dfrac{\sqrt{2} - \sqrt{6}}{4}$. The value is negative, as it must be in Quadrant II.`,
      R`This adds the two products. The cosine sum identity subtracts: $\cos(\alpha + \beta) = \cos\alpha\cos\beta - \sin\alpha\sin\beta$.`,
      R`This is the opposite of the value, from subtracting the products in the wrong order. $\dfrac{7\pi}{12}$ is in Quadrant II, where cosine is negative.`,
      R`This adds $\cos\dfrac{\pi}{3} + \cos\dfrac{\pi}{4}$, but cosine does not distribute over a sum.`,
    ], answer: 0 },
  { id: "p3br-m27", type: "mcq", skill: "u3", topic: "3.12", calc: false, difficulty: "easy",
    question: R`If $\sin\theta = \dfrac{3}{5}$ and $0 < \theta < \dfrac{\pi}{2}$, what is the value of $\sin(2\theta)$?`,
    choices: [R`$\dfrac{24}{25}$`, R`$\dfrac{6}{5}$`, R`$\dfrac{7}{25}$`, R`$\dfrac{12}{25}$`],
    why: [
      R`$\cos\theta = \dfrac{4}{5}$ in Quadrant I, so $\sin(2\theta) = 2\sin\theta\cos\theta = 2\left(\dfrac{3}{5}\right)\left(\dfrac{4}{5}\right) = \dfrac{24}{25}$.`,
      R`This is $2\sin\theta$. The double-angle identity is $\sin(2\theta) = 2\sin\theta\cos\theta$. A sine value cannot exceed $1$.`,
      R`$\dfrac{7}{25}$ is $\cos(2\theta) = \cos^{2}\theta - \sin^{2}\theta$.`,
      R`This is $\sin\theta\cos\theta$. The double-angle identity has a factor of $2$.`,
    ], answer: 0 },
  { id: "p3br-m28", type: "mcq", skill: "u3", topic: "3.12", calc: false, set: "p3br-s10", difficulty: "easy",
    question: R`Which of the following is equal to $\sin(x + \pi)$ for all $x$?`,
    choices: [R`$-\sin x$`, R`$\sin x$`, R`$-\cos x$`, R`$\cos x$`],
    why: [
      R`Adding $\pi$ turns the terminal side halfway around the circle, so $Q$ is the reflection of $P$ through the origin. Both coordinates change sign, so $\sin(x + \pi) = -\sin x$. The sum identity agrees: $\sin x\cos\pi + \cos x\sin\pi = -\sin x$.`,
      R`$Q$ is on the opposite side of the origin from $P$, so its $y$-coordinate has the opposite sign.`,
      R`$-\cos x$ is the $x$-coordinate of $Q$, which is $\cos(x + \pi)$.`,
      R`$\cos x$ is the $x$-coordinate of $P$. Shifting by $\dfrac{\pi}{2}$, not $\pi$, turns sine into cosine.`,
    ], answer: 0 },
  { id: "p3br-m29", type: "mcq", skill: "u3", topic: "3.12", calc: false, difficulty: "moderate",
    question: R`Angle $\alpha$ is in Quadrant II with $\sin\alpha = \dfrac{4}{5}$, and angle $\beta$ is in Quadrant I with $\cos\beta = \dfrac{12}{13}$. What is the value of $\sin(\alpha - \beta)$?`,
    choices: [R`$\dfrac{63}{65}$`, R`$\dfrac{33}{65}$`, R`$-\dfrac{63}{65}$`, R`$\dfrac{27}{65}$`],
    why: [
      R`$\cos\alpha = -\dfrac{3}{5}$ (Quadrant II) and $\sin\beta = \dfrac{5}{13}$. $\sin(\alpha - \beta) = \sin\alpha\cos\beta - \cos\alpha\sin\beta = \dfrac{48}{65} - \left(-\dfrac{15}{65}\right) = \dfrac{63}{65}$.`,
      R`This uses $\cos\alpha = \dfrac{3}{5}$. In Quadrant II, cosine is negative.`,
      R`$-\dfrac{63}{65}$ is $\sin(\beta - \alpha)$, from reversing the order of the products in the difference identity.`,
      R`This computes $\sin\alpha - \sin\beta$. Sine does not distribute over a difference.`,
    ], answer: 0 },
  { id: "p3br-m30", type: "mcq", skill: "u3", topic: "3.12", calc: false, difficulty: "moderate",
    question: R`What are all solutions of $2\cos^{2}x + \cos x - 1 = 0$ on the interval $0 \le x < 2\pi$?`,
    choices: [R`$\dfrac{\pi}{3}, \pi, \dfrac{5\pi}{3}$`, R`$\dfrac{\pi}{3}, \dfrac{5\pi}{3}$`, R`$0, \dfrac{2\pi}{3}, \dfrac{4\pi}{3}$`, R`$\dfrac{\pi}{3}, \dfrac{2\pi}{3}, \pi$`],
    why: [
      R`$(2\cos x - 1)(\cos x + 1) = 0$, so $\cos x = \dfrac{1}{2}$ or $\cos x = -1$. $\cos x = \dfrac{1}{2}$ at $\dfrac{\pi}{3}$ and $\dfrac{5\pi}{3}$, and $\cos x = -1$ at $\pi$.`,
      R`This drops the factor $\cos x + 1$, which gives $x = \pi$.`,
      R`This factors as $(2\cos x + 1)(\cos x - 1)$, which expands to $2\cos^{2}x - \cos x - 1$, with the wrong middle sign.`,
      R`$\cos\left(\dfrac{2\pi}{3}\right) = -\dfrac{1}{2}$. The second angle with cosine $\dfrac{1}{2}$ is in Quadrant IV, at $\dfrac{5\pi}{3}$.`,
    ], answer: 0 },
  { id: "p3br-m31", type: "mcq", skill: "u3", topic: "3.12", calc: false, difficulty: "moderate",
    question: R`Which of the following is equivalent to $\dfrac{\sec x - \cos x}{\tan x}$ wherever it is defined?`,
    choices: [R`$\sin x$`, R`$\dfrac{1 - \cos x}{\sin x}$`, R`$\sin x\tan x$`, R`$\dfrac{1}{\sin x}$`],
    why: [
      R`$\sec x - \cos x = \dfrac{1 - \cos^{2}x}{\cos x} = \dfrac{\sin^{2}x}{\cos x}$. Dividing by $\tan x = \dfrac{\sin x}{\cos x}$ gives $\dfrac{\sin^{2}x}{\cos x} \cdot \dfrac{\cos x}{\sin x} = \sin x$.`,
      R`This writes $\sec x - \cos x$ as $\dfrac{1 - \cos x}{\cos x}$. Over the common denominator $\cos x$, the term $\cos x$ becomes $\dfrac{\cos^{2}x}{\cos x}$, so the numerator is $1 - \cos^{2}x$.`,
      R`$\sin x\tan x = \dfrac{\sin^{2}x}{\cos x}$ is the numerator alone. It still has to be divided by $\tan x$.`,
      R`This is the reciprocal of the correct result, from dividing $\tan x$ by the numerator instead of the numerator by $\tan x$.`,
    ], answer: 0 },
  { id: "p3br-m32", type: "mcq", skill: "u3", topic: "3.12", calc: false, difficulty: "easy",
    question: R`If $\tan\theta = -2$ and $\dfrac{\pi}{2} < \theta < \pi$, what is the value of $\sec\theta$?`,
    choices: [R`$-\sqrt{5}$`, R`$\sqrt{5}$`, R`$-\sqrt{3}$`, "$-5$"],
    why: [
      R`$\sec^{2}\theta = 1 + \tan^{2}\theta = 5$, so $\sec\theta = \pm\sqrt{5}$. Cosine, and so secant, is negative in Quadrant II, so $\sec\theta = -\sqrt{5}$.`,
      R`Secant has the sign of cosine, which is negative in Quadrant II.`,
      R`This uses $\sec^{2}\theta = \tan^{2}\theta - 1$. The identity is $\sec^{2}\theta = 1 + \tan^{2}\theta$.`,
      R`$5$ is $\sec^{2}\theta$. The square root was not taken.`,
    ], answer: 0 },
  { id: "p3br-m33", type: "mcq", skill: "u3", topic: "3.12", calc: false, difficulty: "difficult",
    question: R`What are all solutions of $\sin(2x) = \sin x$ on the interval $0 \le x < 2\pi$?`,
    choices: [R`$0, \dfrac{\pi}{3}, \pi, \dfrac{5\pi}{3}$`, R`$\dfrac{\pi}{3}, \dfrac{5\pi}{3}$`, R`$0, \dfrac{\pi}{3}, \pi$`, R`$0, \dfrac{\pi}{6}, \pi, \dfrac{11\pi}{6}$`],
    why: [
      R`$2\sin x\cos x - \sin x = 0$ factors as $\sin x(2\cos x - 1) = 0$. $\sin x = 0$ at $0$ and $\pi$, and $\cos x = \dfrac{1}{2}$ at $\dfrac{\pi}{3}$ and $\dfrac{5\pi}{3}$.`,
      R`This divides both sides by $\sin x$, which loses the solutions where $\sin x = 0$.`,
      R`This misses $\dfrac{5\pi}{3}$, where cosine is also $\dfrac{1}{2}$ (Quadrant IV).`,
      R`$\dfrac{\pi}{6}$ and $\dfrac{11\pi}{6}$ have cosine $\dfrac{\sqrt{3}}{2}$, not $\dfrac{1}{2}$.`,
    ], answer: 0 },
  { id: "p3br-m34", type: "mcq", skill: "u3", topic: "3.12", calc: false, difficulty: "moderate",
    question: R`A student solved $2\sin^{2}x + 3\cos x = 3$ on the interval $0 \le x < 2\pi$ as shown.

Line 1: $2(1 - \cos^{2}x) + 3\cos x = 3$
Line 2: $2\cos^{2}x - 3\cos x + 1 = 0$
Line 3: $(2\cos x - 1)(\cos x - 1) = 0$
Line 4: $\cos x = -\dfrac{1}{2}$ or $\cos x = -1$
Line 5: $x = \dfrac{2\pi}{3}, \pi, \dfrac{4\pi}{3}$

In which line does the student first make an error?`,
    choices: ["Line 4", "Line 2", "Line 3", "Line 5"],
    why: [
      R`Lines 1 to 3 are correct: Line 2 comes from expanding, collecting terms, and multiplying by $-1$, and Line 3 expands back to Line 2. In Line 4 the signs are wrong. The factors give $\cos x = \dfrac{1}{2}$ or $\cos x = 1$, so the solutions are $0$, $\dfrac{\pi}{3}$, and $\dfrac{5\pi}{3}$.`,
      R`Line 2 is correct. Line 1 simplifies to $-2\cos^{2}x + 3\cos x - 1 = 0$, and multiplying by $-1$ gives Line 2.`,
      R`Line 3 is correct: $(2\cos x - 1)(\cos x - 1) = 2\cos^{2}x - 3\cos x + 1$.`,
      R`Line 5 follows correctly from Line 4. The error is earlier, where the factors are set equal to $0$.`,
    ], answer: 0 },
  { id: "p3br-m35", type: "mcq", skill: "u3", topic: "3.12", calc: false, difficulty: "difficult",
    question: R`Which of the following is equivalent to $\sin(3x)$ for all $x$?`,
    choices: [R`$3\sin x - 4\sin^{3}x$`, R`$3\sin x$`, R`$4\sin^{3}x - 3\sin x$`, R`$3\sin x - 3\sin^{3}x$`],
    why: [
      R`$\sin(3x) = \sin(2x + x) = \sin(2x)\cos x + \cos(2x)\sin x$. With $\sin(2x) = 2\sin x\cos x$, $\cos(2x) = 1 - 2\sin^{2}x$, and $\cos^{2}x = 1 - \sin^{2}x$, this is $2\sin x(1 - \sin^{2}x) + (1 - 2\sin^{2}x)\sin x = 3\sin x - 4\sin^{3}x$.`,
      R`This treats $\sin(3x)$ as $3\sin x$. At $x = \dfrac{\pi}{2}$, $\sin\left(\dfrac{3\pi}{2}\right) = -1$, but $3\sin\left(\dfrac{\pi}{2}\right) = 3$.`,
      R`This is the opposite of the correct expression, from a sign error in the sum identity.`,
      R`This uses $\cos(2x) = 1 - \sin^{2}x$. The double-angle identity is $\cos(2x) = 1 - 2\sin^{2}x$.`,
    ], answer: 0 },
  { id: "p3br-m36", type: "mcq", skill: "u3", topic: "3.12", calc: false, difficulty: "difficult",
    question: R`What is the solution set of $\cos(2x) > \cos x$ on the interval $0 \le x < 2\pi$?`,
    choices: [R`$\left(\dfrac{2\pi}{3}, \dfrac{4\pi}{3}\right)$`, R`$\left(0, \dfrac{2\pi}{3}\right) \cup \left(\dfrac{4\pi}{3}, 2\pi\right)$`, R`$\left(\dfrac{\pi}{3}, \dfrac{5\pi}{3}\right)$`, R`$\left(\dfrac{\pi}{2}, \dfrac{3\pi}{2}\right)$`],
    why: [
      R`With $\cos(2x) = 2\cos^{2}x - 1$, the inequality is $2\cos^{2}x - \cos x - 1 > 0$, or $(2\cos x + 1)(\cos x - 1) > 0$. Since $\cos x - 1 \le 0$, the product is positive only when $\cos x - 1 < 0$ and $2\cos x + 1 < 0$, that is, when $\cos x < -\dfrac{1}{2}$. That holds for $\dfrac{2\pi}{3} < x < \dfrac{4\pi}{3}$.`,
      R`On this set $\cos(2x) < \cos x$. It solves the reverse inequality.`,
      R`This solves $\cos x < \dfrac{1}{2}$. The factor that sets the boundary is $2\cos x + 1$, which is $0$ at $\cos x = -\dfrac{1}{2}$.`,
      R`This solves $\cos x < 0$. The boundary comes from $2\cos x + 1 = 0$, at $\cos x = -\dfrac{1}{2}$.`,
    ], answer: 0 },
  { id: "p3br-m37", type: "mcq", skill: "u3", topic: "3.12", calc: false, set: "p3br-s11", difficulty: "difficult",
    question: R`Which of the following could define $g(x)$?`,
    choices: [R`$\sin x + \sqrt{3}\cos x$`, R`$\sqrt{3}\sin x + \cos x$`, R`$\sin x - \sqrt{3}\cos x$`, R`$2\sin x + 2\cos x$`],
    why: [
      R`The graph is $2\sin\left(x + \dfrac{\pi}{3}\right)$: amplitude $2$, period $2\pi$, and a maximum where $x + \dfrac{\pi}{3} = \dfrac{\pi}{2}$, at $x = \dfrac{\pi}{6}$. By the sum identity, $2\sin\left(x + \dfrac{\pi}{3}\right) = 2\sin x\cos\dfrac{\pi}{3} + 2\cos x\sin\dfrac{\pi}{3} = \sin x + \sqrt{3}\cos x$.`,
      R`$\sqrt{3}\sin x + \cos x = 2\sin\left(x + \dfrac{\pi}{6}\right)$, whose maximum is at $x = \dfrac{\pi}{3}$, not $\dfrac{\pi}{6}$.`,
      R`$\sin x - \sqrt{3}\cos x = 2\sin\left(x - \dfrac{\pi}{3}\right)$, whose maximum is at $x = \dfrac{5\pi}{6}$. The sign of the shift is reversed.`,
      R`$2\sin x + 2\cos x = 2\sqrt{2}\sin\left(x + \dfrac{\pi}{4}\right)$ has amplitude $2\sqrt{2}$, not $2$, and its maximum is at $\dfrac{\pi}{4}$.`,
    ], answer: 0 },

  // 3.13 Trigonometry and Polar Coordinates
  { id: "p3br-m38", type: "mcq", skill: "u3", topic: "3.13", calc: false, difficulty: "easy",
    question: R`The point $P$ has polar coordinates $\left(4, \dfrac{4\pi}{3}\right)$. What are the rectangular coordinates of $P$?`,
    choices: [R`$\left(-2, -2\sqrt{3}\right)$`, R`$\left(-2\sqrt{3}, -2\right)$`, R`$\left(2, 2\sqrt{3}\right)$`, R`$\left(-2, 2\sqrt{3}\right)$`],
    why: [
      R`$x = 4\cos\left(\dfrac{4\pi}{3}\right) = 4\left(-\dfrac{1}{2}\right) = -2$ and $y = 4\sin\left(\dfrac{4\pi}{3}\right) = 4\left(-\dfrac{\sqrt{3}}{2}\right) = -2\sqrt{3}$.`,
      R`This uses $x = r\sin\theta$ and $y = r\cos\theta$, with the formulas switched.`,
      R`These signs place $P$ in Quadrant I. An angle of $\dfrac{4\pi}{3}$ ends in Quadrant III, where both coordinates are negative.`,
      R`Sine is negative in Quadrant III, so $y$ is negative too.`,
    ], answer: 0 },
  { id: "p3br-m39", type: "mcq", skill: "u3", topic: "3.13", calc: false, set: "p3br-s12", difficulty: "easy",
    question: R`Which of the following gives polar coordinates $(r, \theta)$ for the point with $r > 0$ and $0 \le \theta < 2\pi$?`,
    choices: [R`$\left(3\sqrt{2}, \dfrac{3\pi}{4}\right)$`, R`$\left(3\sqrt{2}, \dfrac{7\pi}{4}\right)$`, R`$\left(18, \dfrac{3\pi}{4}\right)$`, R`$\left(3, \dfrac{3\pi}{4}\right)$`],
    why: [
      R`$r = \sqrt{(-3)^{2} + 3^{2}} = \sqrt{18} = 3\sqrt{2}$. The point is in Quadrant II with $\tan\theta = \dfrac{3}{-3} = -1$, so $\theta = \dfrac{3\pi}{4}$.`,
      R`$\dfrac{7\pi}{4}$ also has $\tan\theta = -1$, but it ends in Quadrant IV. The point $(-3, 3)$ is in Quadrant II.`,
      R`$18$ is $r^{2}$. The square root was not taken.`,
      R`$r$ is the distance from the origin, $\sqrt{x^{2} + y^{2}}$, not one of the coordinates.`,
    ], answer: 0 },
  { id: "p3br-m40", type: "mcq", skill: "u3", topic: "3.13", calc: false, difficulty: "moderate",
    question: R`Which of the following polar coordinates name the same point as $\left(-5, \dfrac{\pi}{4}\right)$?`,
    choices: [R`$\left(5, \dfrac{5\pi}{4}\right)$`, R`$\left(5, \dfrac{\pi}{4}\right)$`, R`$\left(-5, \dfrac{5\pi}{4}\right)$`, R`$\left(5, -\dfrac{\pi}{4}\right)$`],
    why: [
      R`A negative $r$ places the point $5$ units from the pole in the direction opposite $\dfrac{\pi}{4}$, which is $\dfrac{\pi}{4} + \pi = \dfrac{5\pi}{4}$. So the point is $\left(5, \dfrac{5\pi}{4}\right)$.`,
      R`This drops the sign of $r$. $\left(5, \dfrac{\pi}{4}\right)$ is in Quadrant I, but $\left(-5, \dfrac{\pi}{4}\right)$ is in Quadrant III.`,
      R`This adds $\pi$ to the angle and also keeps $r$ negative. The two changes cancel, giving the point in Quadrant I, the same as $\left(5, \dfrac{\pi}{4}\right)$.`,
      R`$-\dfrac{\pi}{4}$ reflects the direction across the $x$-axis, into Quadrant IV. The opposite direction of $\dfrac{\pi}{4}$ is $\dfrac{5\pi}{4}$.`,
    ], answer: 0 },
  { id: "p3br-m41", type: "mcq", skill: "u3", topic: "3.13", calc: true, difficulty: "moderate",
    question: R`Which of the following gives polar coordinates $(r, \theta)$ of the point $(-4, -7)$ with $r > 0$ and $0 \le \theta < 2\pi$?`,
    choices: [R`$(8.062, 4.193)$`, R`$(8.062, 1.052)$`, R`$(8.062, 3.661)$`, R`$(11.000, 4.193)$`],
    why: [
      R`$r = \sqrt{16 + 49} = \sqrt{65} \approx 8.062$. $\arctan\left(\dfrac{-7}{-4}\right) \approx 1.052$ is in Quadrant I, but the point is in Quadrant III, so $\theta \approx 1.052 + \pi \approx 4.193$.`,
      R`$1.052$ is the calculator value of $\arctan\left(\dfrac{7}{4}\right)$, in Quadrant I. Because $x < 0$, $\pi$ must be added.`,
      R`This uses $\arctan\left(\dfrac{x}{y}\right) = \arctan\left(\dfrac{4}{7}\right) \approx 0.519$ and then adds $\pi$. The tangent of $\theta$ is $\dfrac{y}{x}$.`,
      R`$11$ is $|x| + |y|$. The distance from the origin is $\sqrt{x^{2} + y^{2}}$.`,
    ], answer: 0 },
  { id: "p3br-m42", type: "mcq", skill: "u3", topic: "3.13", calc: false, difficulty: "easy",
    question: R`Which of the following is equal to the complex number $6\left(\cos\dfrac{5\pi}{6} + i\sin\dfrac{5\pi}{6}\right)$?`,
    choices: [R`$-3\sqrt{3} + 3i$`, R`$-3 + 3\sqrt{3}i$`, R`$3\sqrt{3} - 3i$`, R`$-3\sqrt{3} - 3i$`],
    why: [
      R`$6\cos\dfrac{5\pi}{6} = 6\left(-\dfrac{\sqrt{3}}{2}\right) = -3\sqrt{3}$ and $6\sin\dfrac{5\pi}{6} = 6\left(\dfrac{1}{2}\right) = 3$, so the number is $-3\sqrt{3} + 3i$.`,
      R`This uses the values for $\dfrac{2\pi}{3}$. At $\dfrac{5\pi}{6}$, $\cos = -\dfrac{\sqrt{3}}{2}$ and $\sin = \dfrac{1}{2}$.`,
      R`This is the point opposite, at angle $\dfrac{11\pi}{6}$. An angle of $\dfrac{5\pi}{6}$ is in Quadrant II, where the real part is negative and the imaginary part positive.`,
      R`Sine is positive in Quadrant II, so the imaginary part is $+3$.`,
    ], answer: 0 },
  { id: "p3br-m43", type: "mcq", skill: "u3", topic: "3.13", calc: true, difficulty: "difficult",
    question: R`Point $A$ has polar coordinates $(-2, 4)$, where the angle is in radians. Point $B$ has polar coordinates $(3, \theta)$ with $0 \le \theta < 2\pi$. For which value of $\theta$ is the pole on the line segment from $A$ to $B$?`,
    choices: ["$4.000$", "$0.858$", "$2.283$", "$5.425$"],
    why: [
      R`Because $r = -2 < 0$, $A$ lies in the direction opposite the angle $4$, the direction $4 - \pi \approx 0.858$, in Quadrant I. For the pole to be between $A$ and $B$, $B$ must lie in the opposite direction, $0.858 + \pi \approx 4.000$. Since $B$ has $r = 3 > 0$, $\theta = 4.000$: the same angle as $A$, because the negative $r$ of $A$ already points the other way.`,
      R`$0.858$ is the direction in which $A$ actually lies. The point $(3, 0.858)$ is on the same side of the pole as $A$.`,
      R`$\pi - 0.858 \approx 2.283$ reflects the direction of $A$ across the $y$-axis, not through the pole.`,
      R`$2\pi - 0.858 \approx 5.425$ reflects the direction of $A$ across the $x$-axis, not through the pole.`,
    ], answer: 0 },
  { id: "p3br-m44", type: "mcq", skill: "u3", topic: "3.13", calc: false, set: "p3br-s13", difficulty: "easy",
    question: R`What are the rectangular coordinates of $Q$?`,
    choices: [R`$\left(-\dfrac{3\sqrt{3}}{2}, -\dfrac{3}{2}\right)$`, R`$\left(-\dfrac{3}{2}, -\dfrac{3\sqrt{3}}{2}\right)$`, R`$\left(\dfrac{3\sqrt{3}}{2}, \dfrac{3}{2}\right)$`, R`$\left(-\dfrac{3\sqrt{3}}{2}, \dfrac{3}{2}\right)$`],
    why: [
      R`$Q$ is on the circle of radius $3$ and the ray at $\dfrac{7\pi}{6}$. $x = 3\cos\dfrac{7\pi}{6} = -\dfrac{3\sqrt{3}}{2}$ and $y = 3\sin\dfrac{7\pi}{6} = -\dfrac{3}{2}$.`,
      R`This switches sine and cosine. The ray at $\dfrac{7\pi}{6}$ is closer to the $x$-axis than to the $y$-axis, so $|x| > |y|$.`,
      R`This is the point at $\dfrac{\pi}{6}$, opposite $Q$ through the pole.`,
      R`$Q$ is below the $x$-axis, so its $y$-coordinate is negative.`,
    ], answer: 0 },
  { id: "p3br-m45", type: "mcq", skill: "u3", topic: "3.13", calc: false, set: "p3br-s14", difficulty: "easy",
    question: R`Which of the following is $z$ written in polar form?`,
    choices: [R`$2\sqrt{2}\left(\cos\dfrac{5\pi}{4} + i\sin\dfrac{5\pi}{4}\right)$`, R`$2\sqrt{2}\left(\cos\dfrac{\pi}{4} + i\sin\dfrac{\pi}{4}\right)$`, R`$8\left(\cos\dfrac{5\pi}{4} + i\sin\dfrac{5\pi}{4}\right)$`, R`$2\sqrt{2}\left(\cos\dfrac{3\pi}{4} + i\sin\dfrac{3\pi}{4}\right)$`],
    why: [
      R`$z = -2 - 2i$. $r = \sqrt{(-2)^{2} + (-2)^{2}} = 2\sqrt{2}$, and the point is in Quadrant III on the line $y = x$, so $\theta = \dfrac{5\pi}{4}$.`,
      R`$\arctan\left(\dfrac{-2}{-2}\right) = \dfrac{\pi}{4}$ is in Quadrant I. The point is in Quadrant III, so $\pi$ is added.`,
      R`$8$ is $r^{2}$. The modulus is $\sqrt{8} = 2\sqrt{2}$.`,
      R`$\dfrac{3\pi}{4}$ is in Quadrant II, where the imaginary part is positive. The point is below the real axis.`,
    ], answer: 0 },
  { id: "p3br-m46", type: "mcq", skill: "u3", topic: "3.13", calc: true, difficulty: "moderate",
    question: R`What are the rectangular coordinates of the point with polar coordinates $(-3, 1.2)$, where the angle is in radians?`,
    choices: [R`$(-1.087, -2.796)$`, R`$(1.087, 2.796)$`, R`$(-2.796, -1.087)$`, R`$(-2.999, -0.063)$`],
    why: [
      R`$x = -3\cos(1.2) \approx -1.087$ and $y = -3\sin(1.2) \approx -2.796$. The angle $1.2$ ends in Quadrant I, and the negative $r$ puts the point in Quadrant III.`,
      R`This drops the negative sign of $r$. With $r = -3$, the point is in the direction opposite the angle.`,
      R`This uses $x = r\sin\theta$ and $y = r\cos\theta$, with the formulas switched.`,
      R`These values come from a calculator in degree mode. The angle $1.2$ is in radians.`,
    ], answer: 0 },

  // 3.14 Polar Function Graphs
  { id: "p3br-m47", type: "mcq", skill: "u3", topic: "3.14", calc: false, set: "p3br-s15", difficulty: "easy",
    question: R`For which value of $\theta$ in $0 \le \theta < 2\pi$ is the point on the graph at $D$?`,
    choices: [R`$\dfrac{2\pi}{3}$`, R`$\dfrac{\pi}{3}$`, R`$\dfrac{4\pi}{3}$`, R`$\dfrac{\pi}{2}$`],
    why: [
      R`At $\theta = \dfrac{2\pi}{3}$, $r = 2 + 2\left(-\dfrac{1}{2}\right) = 1$, and the point is $\left(\cos\dfrac{2\pi}{3}, \sin\dfrac{2\pi}{3}\right) = \left(-\dfrac{1}{2}, \dfrac{\sqrt{3}}{2}\right)$, which is $D$.`,
      R`At $\theta = \dfrac{\pi}{3}$, $r = 3$ and the point is $\left(\dfrac{3}{2}, \dfrac{3\sqrt{3}}{2}\right)$, in Quadrant I. $D$ is in Quadrant II.`,
      R`At $\theta = \dfrac{4\pi}{3}$, $r = 1$ as well, but the point is $\left(-\dfrac{1}{2}, -\dfrac{\sqrt{3}}{2}\right)$, below the $x$-axis.`,
      R`At $\theta = \dfrac{\pi}{2}$, $r = 2$ and the point is $(0, 2)$ on the $y$-axis.`,
    ], answer: 0 },
  { id: "p3br-m48", type: "mcq", skill: "u3", topic: "3.14", calc: false, set: "p3br-s21", difficulty: "easy",
    question: R`For $0 \le \theta \le \pi$, what is the greatest distance between the pole and a point on the polar graph of $r = f(\theta)$?`,
    choices: ["$3$", "$2$", "$7$", "$5$"],
    why: [
      R`The distance from the pole is $|f(\theta)|$. On $[0, \pi]$, $f$ is between $-3$ and $2$, so $|f(\theta)|$ is greatest at $\theta = \dfrac{\pi}{2}$, where $|f| = |-3| = 3$.`,
      R`$2$ is the greatest value of $f(\theta)$. A negative $r$ is still a distance $|r|$ from the pole, and $|-3| > 2$.`,
      R`$f(\theta) = 7$ at $\theta = \dfrac{3\pi}{2}$, which is outside $0 \le \theta \le \pi$.`,
      R`$5$ is the coefficient of $\sin\theta$. The constant $2$ also counts: $f\left(\dfrac{\pi}{2}\right) = 2 - 5 = -3$.`,
    ], answer: 0 },
  { id: "p3br-m49", type: "mcq", skill: "u3", topic: "3.14", calc: false, set: "p3br-s16", difficulty: "moderate",
    question: R`For which values of $\theta$ is the petal along the negative $y$-axis traced?`,
    choices: [R`$\dfrac{\pi}{3} \le \theta \le \dfrac{2\pi}{3}$`, R`$0 \le \theta \le \dfrac{\pi}{3}$`, R`$\dfrac{2\pi}{3} \le \theta \le \pi$`, R`$\dfrac{\pi}{4} \le \theta \le \dfrac{3\pi}{4}$`],
    why: [
      R`For $\dfrac{\pi}{3} < \theta < \dfrac{2\pi}{3}$, $3\theta$ is between $\pi$ and $2\pi$, so $r < 0$. The angles point into the upper half-plane, and the negative $r$ puts the points below the pole. At $\theta = \dfrac{\pi}{2}$, $r = -2$, the tip at $(0, -2)$.`,
      R`On this interval $r > 0$ and $\theta$ is in Quadrant I, so it traces the petal in Quadrant I.`,
      R`On this interval $r > 0$ and $\theta$ is in Quadrant II, so it traces the petal in Quadrant II.`,
      R`This interval is centered on $\dfrac{\pi}{2}$, but its ends are not zeros of $r$. A petal starts and ends where $r = 0$, at $\theta = \dfrac{\pi}{3}$ and $\theta = \dfrac{2\pi}{3}$.`,
    ], answer: 0 },
  { id: "p3br-m50", type: "mcq", skill: "u3", topic: "3.14", calc: false, set: "p3br-s17", difficulty: "moderate",
    question: R`For which values of $\theta$ is the inner loop traced?`,
    choices: [R`$\dfrac{7\pi}{6} \le \theta \le \dfrac{11\pi}{6}$`, R`$\pi \le \theta \le 2\pi$`, R`$\dfrac{4\pi}{3} \le \theta \le \dfrac{5\pi}{3}$`, R`$0 \le \theta \le \dfrac{7\pi}{6}$ and $\dfrac{11\pi}{6} \le \theta \le 2\pi$`],
    why: [
      R`The inner loop is traced while $r \le 0$, between consecutive zeros of $r$. $2 + 4\sin\theta = 0$ gives $\sin\theta = -\dfrac{1}{2}$, at $\theta = \dfrac{7\pi}{6}$ and $\theta = \dfrac{11\pi}{6}$, and $r < 0$ between them.`,
      R`This is where $\sin\theta < 0$. For $\pi < \theta < \dfrac{7\pi}{6}$, $r$ is still positive and the curve is on the outer loop.`,
      R`At these endpoints $\sin\theta = -\dfrac{\sqrt{3}}{2}$ and $r = 2 - 2\sqrt{3} \ne 0$. The loop starts and ends at the pole, where $r = 0$.`,
      R`This is where $r \ge 0$, which traces the outer loop.`,
    ], answer: 0 },
  { id: "p3br-m51", type: "mcq", skill: "u3", topic: "3.14", calc: false, set: "p3br-s18", difficulty: "moderate",
    question: R`What are the rectangular coordinates $(x, y)$ of the point on the polar graph of $r = f(\theta)$ at $\theta = \pi$?`,
    choices: ["$(1, 0)$", "$(-1, 0)$", R`$(\pi, -1)$`, "$(0, -1)$"],
    why: [
      R`$f(\pi) = 1 - 2\cos(2\pi) = -1$. Then $x = (-1)\cos\pi = 1$ and $y = (-1)\sin\pi = 0$. The negative $r$ puts the point on the positive $x$-axis, opposite the direction $\theta = \pi$.`,
      R`This uses $r = 1$, dropping the sign of $f(\pi) = -1$. A negative $r$ points opposite the angle.`,
      R`$(\pi, -1)$ is the point on the graph in the $\theta r$-plane, not a point in the $xy$-plane.`,
      R`This puts $r = -1$ on the $y$-axis. The angle $\pi$ points along the $x$-axis.`,
    ], answer: 0 },
  { id: "p3br-m52", type: "mcq", skill: "u3", topic: "3.14", calc: false, difficulty: "difficult",
    question: R`Apart from points on the axes, in which quadrants does the polar graph of $r = \theta$ for $-\pi \le \theta \le 0$ lie?`,
    choices: ["Quadrants I and II", "Quadrants III and IV", "Quadrants II and III", "Quadrants I and IV"],
    why: [
      R`For $-\dfrac{\pi}{2} < \theta < 0$, the angle points into Quadrant IV and $r < 0$, so the point is in Quadrant II. For $-\pi < \theta < -\dfrac{\pi}{2}$, the angle points into Quadrant III and $r < 0$, so the point is in Quadrant I.`,
      R`These are the quadrants the angles point into. Since $r = \theta$ is negative on this interval, every point is in the opposite direction.`,
      R`Quadrant II is right for $-\dfrac{\pi}{2} < \theta < 0$, but Quadrant III ignores the negative $r$ for $-\pi < \theta < -\dfrac{\pi}{2}$, which sends those points to Quadrant I.`,
      R`Quadrant I is right for $-\pi < \theta < -\dfrac{\pi}{2}$, but Quadrant IV ignores the negative $r$ for $-\dfrac{\pi}{2} < \theta < 0$, which sends those points to Quadrant II.`,
    ], answer: 0 },
  { id: "p3br-m53", type: "mcq", skill: "u3", topic: "3.14", calc: false, set: "p3br-s19", difficulty: "easy",
    question: R`Which of the following could be an equation of the graph?`,
    choices: [R`$r = 3\cos(2\theta)$`, R`$r = 3\sin(2\theta)$`, R`$r = 3\cos(4\theta)$`, R`$r = 6\cos(2\theta)$`],
    why: [
      R`$r = 3\cos(2\theta)$ has $|r| = 3$ when $2\theta$ is a multiple of $\pi$, at $\theta = 0, \dfrac{\pi}{2}, \pi, \dfrac{3\pi}{2}$, so its petal tips are on the axes. With $2\theta$, the rose has $2 \cdot 2 = 4$ petals.`,
      R`$3\sin(2\theta)$ has its tips at the odd multiples of $\dfrac{\pi}{4}$, between the axes.`,
      R`$3\cos(4\theta)$ has $8$ petals. A rose $r = a\cos(n\theta)$ with even $n$ has $2n$ petals.`,
      R`The tips of $6\cos(2\theta)$ are $6$ units from the pole. The distance across two opposite petals, $6$, is not the value of $r$ at a tip.`,
    ], answer: 0 },
  { id: "p3br-m54", type: "mcq", skill: "u3", topic: "3.14", calc: false, set: "p3br-s20", difficulty: "easy",
    question: R`Which of the following could be an equation of the graph?`,
    choices: [R`$r = 4\sin\theta$`, R`$r = 4\cos\theta$`, R`$r = 2\sin\theta$`, "$r = 4$"],
    why: [
      R`$r = 4\sin\theta$ starts at the pole at $\theta = 0$, reaches $r = 4$ at $\theta = \dfrac{\pi}{2}$, the point $(0, 4)$, and returns to the pole at $\theta = \pi$. This is the circle of diameter $4$ above the pole.`,
      R`$r = 4\cos\theta$ is a circle of diameter $4$ to the right of the pole, centered on the $x$-axis.`,
      R`$r = 2\sin\theta$ has diameter $2$. The graph reaches $(0, 4)$, so the diameter is $4$.`,
      R`$r = 4$ is a circle of radius $4$ centered at the pole. It does not pass through the pole.`,
    ], answer: 0 },

  // 3.15 Rates of Change in Polar Functions
  { id: "p3br-m55", type: "mcq", skill: "u3", topic: "3.15", calc: false, set: "p3br-s22", difficulty: "easy",
    question: R`On which of the following intervals is the distance between the pole and the point on the polar graph of $r = f(\theta)$ increasing?`,
    choices: [R`$\left(\dfrac{\pi}{4}, \dfrac{\pi}{2}\right)$`, R`$\left(0, \dfrac{\pi}{4}\right)$`, R`$\left(\dfrac{\pi}{2}, \dfrac{5\pi}{6}\right)$`, R`$(\pi, 2\pi)$`],
    why: [
      R`On $\left(\dfrac{\pi}{4}, \dfrac{\pi}{2}\right)$, $f(\theta) < 0$ and $f$ is decreasing, so $|f(\theta)|$ increases: the point moves farther from the pole.`,
      R`On this interval $f$ is positive and decreasing, so the distance $|f(\theta)|$ decreases.`,
      R`Here $f$ is increasing, but it is negative, so $|f(\theta)|$ decreases from $2$ toward $0$.`,
      R`$f$ is constant here, so the distance stays $1$.`,
    ], answer: 0 },
  { id: "p3br-m56", type: "mcq", skill: "u3", topic: "3.15", calc: false, difficulty: "easy",
    question: R`The function $f$ is negative and decreasing on the interval $a < \theta < b$. As $\theta$ increases from $a$ to $b$, which of the following describes the point on the polar graph of $r = f(\theta)$?`,
    choices: [R`It moves farther from the pole, because $|f(\theta)|$ increases.`, R`It moves closer to the pole, because the value of $f(\theta)$ decreases.`, R`It moves closer to the pole, because the value of $f(\theta)$ is negative.`, R`It moves farther from the pole, because the value of $f(\theta)$ decreases.`],
    why: [
      R`The distance from the pole is $|f(\theta)|$. A negative number that decreases moves away from $0$, so $|f(\theta)|$ increases.`,
      R`This treats $r$ as a distance. For $r < 0$, a decreasing $r$ means a growing $|r|$.`,
      R`The sign of $r$ sets the direction of the point, not whether it approaches the pole. The change in $|f(\theta)|$ decides that.`,
      R`The conclusion is right but the reason is not: a positive $f$ that decreases brings the point closer. The point moves away because $f$ is negative and decreasing, so $|f(\theta)|$ increases.`,
    ], answer: 0 },
  { id: "p3br-m57", type: "mcq", skill: "u3", topic: "3.15", calc: true, difficulty: "easy",
    question: R`For the polar function $r = f(\theta) = 4 - 3\cos(2\theta)$, what is the average rate of change of $r$ with respect to $\theta$ on the interval $0 \le \theta \le \dfrac{\pi}{4}$?`,
    choices: ["$3.820$", "$3.000$", "$0.262$", "$2.500$"],
    why: [
      R`$f(0) = 4 - 3 = 1$ and $f\left(\dfrac{\pi}{4}\right) = 4 - 3\cos\dfrac{\pi}{2} = 4$, so the average rate of change is $\dfrac{4 - 1}{\frac{\pi}{4} - 0} = \dfrac{12}{\pi} \approx 3.820$ units per radian.`,
      R`$3$ is the change in $r$, $f\left(\dfrac{\pi}{4}\right) - f(0)$. It must be divided by the change in $\theta$, $\dfrac{\pi}{4}$.`,
      R`$0.262 \approx \dfrac{\pi}{12}$ is the change in $\theta$ divided by the change in $r$, the reciprocal of the rate.`,
      R`$2.5$ is the average of $f(0)$ and $f\left(\dfrac{\pi}{4}\right)$, not a rate of change.`,
    ], answer: 0 },
  { id: "p3br-m58", type: "mcq", skill: "u3", topic: "3.15", calc: true, difficulty: "difficult",
    question: R`For $0 \le \theta \le \pi$, what is the greatest distance between the pole and a point on the polar graph of $r = 3\sin\theta - \theta$?`,
    choices: ["$3.142$", "$1.597$", "$1.231$", "$2.279$"],
    why: [
      R`The distance is $|r|$. On a graph of $r = 3\sin\theta - \theta$ for $0 \le \theta \le \pi$, $r$ rises to about $1.597$ at $\theta \approx 1.231$, falls through $0$ at $\theta \approx 2.279$, and keeps decreasing to $r = -\pi$ at $\theta = \pi$. So the greatest distance is $|-\pi| \approx 3.142$.`,
      R`$1.597$ is the greatest value of $r$. After $\theta \approx 2.279$, $r$ is negative and decreasing, so $|r|$ grows to $\pi$.`,
      R`$1.231$ is the value of $\theta$ where $r$ is greatest, not a distance.`,
      R`$2.279$ is the value of $\theta$ where $r = 0$, where the graph passes through the pole.`,
    ], answer: 0 },
  { id: "p3br-m59", type: "mcq", skill: "u3", topic: "3.15", calc: false, set: "p3br-s24", difficulty: "easy",
    question: R`Which of the following describes the point on the graph as $\theta$ increases from $0$ to $\dfrac{\pi}{6}$?`,
    choices: ["It is in Quadrant I and moving closer to the pole.", "It is in Quadrant III and moving closer to the pole.", "It is in Quadrant I and moving farther from the pole.", "It is in Quadrant III and moving farther from the pole."],
    why: [
      R`For $0 < \theta < \dfrac{\pi}{6}$, $3\theta$ is between $0$ and $\dfrac{\pi}{2}$, where cosine is positive and decreasing. So $r > 0$ and $r$ decreases from $2$ to $0$: the point is in Quadrant I, the direction of $\theta$, and moves toward the pole.`,
      R`The point would be in Quadrant III only if $r < 0$. On this interval $r > 0$, so the point is in the direction of $\theta$.`,
      R`$r$ is positive and decreasing, so the distance $|r|$ decreases. The point moves toward the pole.`,
      R`This treats $r$ as negative. On this interval $r > 0$, so the point is in Quadrant I and, with $r$ decreasing, moves toward the pole.`,
    ], answer: 0 },
  { id: "p3br-m60", type: "mcq", skill: "u3", topic: "3.15", calc: false, set: "p3br-s25", difficulty: "difficult",
    question: R`On which of the following is the distance between the pole and the point on the polar graph of $r = f(\theta)$ increasing?`,
    choices: [R`$\left(\dfrac{2\pi}{3}, \pi\right) \cup \left(\dfrac{4\pi}{3}, 2\pi\right)$`, R`$(\pi, 2\pi)$`, R`$\left(\dfrac{2\pi}{3}, \dfrac{4\pi}{3}\right)$`, R`$\left(0, \dfrac{2\pi}{3}\right) \cup \left(\pi, \dfrac{4\pi}{3}\right)$`],
    why: [
      R`$f = 0$ at $\dfrac{2\pi}{3}$ and $\dfrac{4\pi}{3}$, and $f$ decreases on $(0, \pi)$ and increases on $(\pi, 2\pi)$. The distance $|f|$ increases where $f < 0$ and $f$ is decreasing, on $\left(\dfrac{2\pi}{3}, \pi\right)$, and where $f > 0$ and $f$ is increasing, on $\left(\dfrac{4\pi}{3}, 2\pi\right)$.`,
      R`This is where $f$ is increasing. On $\left(\pi, \dfrac{4\pi}{3}\right)$, $f$ is negative and rising toward $0$, so the distance decreases.`,
      R`This is where $f < 0$, the inner loop. The distance increases on the first half of the loop and decreases on the second.`,
      R`These are the intervals where the distance decreases.`,
    ], answer: 0 },
  { id: "p3br-m61", type: "mcq", skill: "u3", topic: "3.15", calc: false, set: "p3br-s23", difficulty: "moderate",
    question: R`As $\theta$ increases from $1.8$ to $2.2$, which of the following describes the distance between the pole and the point on the polar graph of $r = f(\theta)$?`,
    choices: ["It decreases, then increases.", "It decreases on the whole interval.", "It increases on the whole interval.", "It increases first, then decreases."],
    why: [
      R`$f(1.8) = 0.7 > 0$ and $f(2.2) = -0.4 < 0$, and $f$ is decreasing, so $f$ passes through $0$ once between them. Before that, $f$ is positive and decreasing, so the distance decreases. After it, $f$ is negative and decreasing, so the distance increases.`,
      R`This treats a decreasing $r$ as a decreasing distance throughout. Once $f(\theta) < 0$, a decreasing $f$ means a growing $|f(\theta)|$.`,
      R`At first $f$ is positive and decreasing, so the point approaches the pole until $f = 0$.`,
      R`This reverses the order. The point reaches the pole, where the distance is $0$, between $\theta = 1.8$ and $\theta = 2.2$, so the distance decreases first.`,
    ], answer: 0 },
  { id: "p3br-m62", type: "mcq", skill: "u3", topic: "3.15", calc: true, set: "p3br-s26", difficulty: "moderate",
    question: R`On which of the following intervals is the distance between the pole and the point on the graph increasing?`,
    choices: [R`$(2.419, \pi)$`, R`$(0, 2.419)$`, R`$(0.723, \pi)$`, R`$(\pi, 2\pi)$`],
    why: [
      R`$r = 0$ when $\cos\theta = -0.75$, at $\theta = \arccos(-0.75) \approx 2.419$. On $(2.419, \pi)$, $r < 0$ and $r$ is decreasing, since cosine decreases on $(0, \pi)$, so $|r|$ increases.`,
      R`On this interval $r$ is positive and decreasing, so the point moves closer to the pole.`,
      R`$0.723 \approx \arccos(0.75)$, which solves $\cos\theta = 0.75$. The zero of $r$ is where $\cos\theta = -0.75$.`,
      R`$r$ increases on $(\pi, 2\pi)$, but $r < 0$ until $\theta \approx 3.864$, so the distance decreases at first.`,
    ], answer: 0 },
  { id: "p3br-m63", type: "mcq", skill: "u3", topic: "3.15", calc: true, difficulty: "easy",
    question: R`For the polar function $r = f(\theta) = 4 + 2\cos\theta$, which of the following describes the average rate of change of $f$ on the interval $\dfrac{\pi}{3} \le \theta \le \dfrac{\pi}{2}$?`,
    choices: [R`On average, $r$ decreases by about $1.910$ units per radian.`, R`On average, $r$ decreases by about $1$ unit per radian.`, R`On average, $r$ increases by about $1.910$ units per radian.`, R`On average, $r$ decreases by about $0.524$ units per radian.`],
    why: [
      R`$f\left(\dfrac{\pi}{3}\right) = 4 + 1 = 5$ and $f\left(\dfrac{\pi}{2}\right) = 4$. The average rate of change is $\dfrac{4 - 5}{\frac{\pi}{2} - \frac{\pi}{3}} = -\dfrac{6}{\pi} \approx -1.910$ units per radian. It is negative, so $r$ decreases.`,
      R`$-1$ is the change in $r$. It must be divided by the change in $\theta$, $\dfrac{\pi}{6} \approx 0.524$.`,
      R`The rate is negative: $r$ falls from $5$ to $4$.`,
      R`$0.524 \approx \dfrac{\pi}{6}$ is the change in $\theta$, not the rate. The change in $r$, $-1$, is divided by it.`,
    ], answer: 0 },

  // Free response 1: rewriting and solving (Symbolic Manipulations, no calculator)
  { id: "p3br-f1a", type: "frq", skill: "u3", topic: "3.12", calc: false, set: "p3br-s27", part: "(a)",
    prompt: R`(i) Rewrite $\dfrac{1 - \cos(2x)}{\sin(2x)}$ as a single trigonometric function of $x$.
(ii) Rewrite $\cos^{4}x - \sin^{4}x$ as a single trigonometric function of $2x$.`,
    rows: [
      { name: "(i) Single function", earns: R`$\tan x$, with work that uses $\cos(2x) = 1 - 2\sin^{2}x$ and $\sin(2x) = 2\sin x\cos x$.` },
      { name: "(ii) Single function", earns: R`$\cos(2x)$, with work that factors the difference of squares and uses $\cos^{2}x + \sin^{2}x = 1$.` },
    ],
    solution: R`(i) $$\frac{1 - \cos(2x)}{\sin(2x)} = \frac{1 - (1 - 2\sin^{2}x)}{2\sin x\cos x} = \frac{2\sin^{2}x}{2\sin x\cos x} = \frac{\sin x}{\cos x} = \tan x$$ (ii) $$\cos^{4}x - \sin^{4}x = (\cos^{2}x - \sin^{2}x)(\cos^{2}x + \sin^{2}x) = (\cos^{2}x - \sin^{2}x)(1) = \cos(2x)$$` },
  { id: "p3br-f1b", type: "frq", skill: "u3", topic: "3.10", calc: false, set: "p3br-s27", part: "(b)",
    prompt: R`(i) Solve $2\sin^{2}x - \sin x - 1 = 0$ for $0 \le x < 2\pi$.
(ii) Solve $3\tan^{2}x - 1 = 0$ for $0 \le x \le \pi$.`,
    rows: [
      { name: "(i) Solutions", earns: R`$x = \dfrac{\pi}{2}$, $x = \dfrac{7\pi}{6}$, and $x = \dfrac{11\pi}{6}$, with work that factors $(2\sin x + 1)(\sin x - 1) = 0$.` },
      { name: "(ii) Solutions", earns: R`$x = \dfrac{\pi}{6}$ and $x = \dfrac{5\pi}{6}$, with work showing $\tan x = \pm\dfrac{1}{\sqrt{3}}$.` },
    ],
    solution: R`(i) The equation factors as $(2\sin x + 1)(\sin x - 1) = 0$, so $\sin x = -\dfrac{1}{2}$ or $\sin x = 1$. On $0 \le x < 2\pi$, $\sin x = 1$ at $x = \dfrac{\pi}{2}$, and $\sin x = -\dfrac{1}{2}$ at $x = \dfrac{7\pi}{6}$ and $x = \dfrac{11\pi}{6}$. (ii) $\tan^{2}x = \dfrac{1}{3}$, so $\tan x = \dfrac{1}{\sqrt{3}}$ or $\tan x = -\dfrac{1}{\sqrt{3}}$. On $0 \le x \le \pi$, these give $x = \dfrac{\pi}{6}$ and $x = \dfrac{5\pi}{6}$. Tangent is undefined at $\dfrac{\pi}{2}$, and $\tan 0 = \tan\pi = 0$, so there are no other solutions.` },
  { id: "p3br-f1c", type: "frq", skill: "u3", topic: "3.10", calc: false, set: "p3br-s27", part: "(c)",
    prompt: R`Find all values of $x$ for which $2\sin(3x) = \sqrt{2}$. Express the answer in terms of an integer $n$.`,
    rows: [
      { name: "Solutions in one cycle", earns: R`$x = \dfrac{\pi}{12}$ and $x = \dfrac{\pi}{4}$, from $3x = \dfrac{\pi}{4}$ and $3x = \dfrac{3\pi}{4}$.` },
      { name: "All solutions", earns: R`$x = \dfrac{\pi}{12} + \dfrac{2\pi n}{3}$ and $x = \dfrac{\pi}{4} + \dfrac{2\pi n}{3}$, where $n$ is any integer.` },
    ],
    solution: R`$\sin(3x) = \dfrac{\sqrt{2}}{2}$. The angles with sine $\dfrac{\sqrt{2}}{2}$ are $\dfrac{\pi}{4} + 2\pi n$ and $\dfrac{3\pi}{4} + 2\pi n$, so $$3x = \frac{\pi}{4} + 2\pi n \quad \text{or} \quad 3x = \frac{3\pi}{4} + 2\pi n$$ Dividing by $3$, $$x = \frac{\pi}{12} + \frac{2\pi n}{3} \quad \text{or} \quad x = \frac{\pi}{4} + \frac{2\pi n}{3}$$ where $n$ is any integer.` },

  // Free response 2: a polar function (no calculator)
  { id: "p3br-f2a", type: "frq", skill: "u3", topic: "3.14", calc: false, set: "p3br-s28", part: "(a)",
    prompt: R`(i) Find the rectangular coordinates $(x, y)$ of the point on the polar graph of $r = f(\theta)$ at $\theta = \dfrac{\pi}{2}$.
(ii) Find all values of $\theta$ in $0 \le \theta \le \pi$ at which the polar graph of $r = f(\theta)$ passes through the pole.`,
    rows: [
      { name: "(i) Point", earns: R`$f\left(\dfrac{\pi}{2}\right) = -1$, so $(x, y) = (0, -1)$.` },
      { name: "(ii) Values of theta", earns: R`$\theta = \dfrac{\pi}{3}$ and $\theta = \dfrac{2\pi}{3}$, from $\cos(2\theta) = -\dfrac{1}{2}$.` },
    ],
    solution: R`(i) $f\left(\dfrac{\pi}{2}\right) = 1 + 2\cos\pi = -1$. So $x = (-1)\cos\dfrac{\pi}{2} = 0$ and $y = (-1)\sin\dfrac{\pi}{2} = -1$, and the point is $(0, -1)$. (ii) The graph passes through the pole where $r = 0$: $1 + 2\cos(2\theta) = 0$, so $\cos(2\theta) = -\dfrac{1}{2}$. For $0 \le \theta \le \pi$, $0 \le 2\theta \le 2\pi$, so $2\theta = \dfrac{2\pi}{3}$ or $2\theta = \dfrac{4\pi}{3}$, and $\theta = \dfrac{\pi}{3}$ or $\theta = \dfrac{2\pi}{3}$.` },
  { id: "p3br-f2b", type: "frq", skill: "u3", topic: "3.15", calc: false, set: "p3br-s28", part: "(b)",
    prompt: R`(i) As $\theta$ increases on the interval $\dfrac{\pi}{3} < \theta < \dfrac{\pi}{2}$, is the distance between the point on the polar graph and the pole increasing or decreasing? Give a reason for your answer.
(ii) As $\theta$ increases on the interval $\dfrac{\pi}{2} < \theta < \dfrac{2\pi}{3}$, is the distance between the point on the polar graph and the pole increasing or decreasing? Give a reason for your answer.`,
    rows: [
      { name: "(i) Answer with reason", earns: R`Increasing, because $f(\theta) < 0$ and $f$ is decreasing on the interval.` },
      { name: "(ii) Answer with reason", earns: R`Decreasing, because $f(\theta) < 0$ and $f$ is increasing on the interval.` },
    ],
    solution: R`(i) On $\dfrac{\pi}{3} < \theta < \dfrac{\pi}{2}$, $2\theta$ is between $\dfrac{2\pi}{3}$ and $\pi$, so $\cos(2\theta) < -\dfrac{1}{2}$ and $f(\theta) < 0$. Cosine is decreasing there, so $f$ is decreasing. A negative $r$ that decreases has a growing $|r|$, so the distance from the pole is increasing. (ii) On $\dfrac{\pi}{2} < \theta < \dfrac{2\pi}{3}$, $2\theta$ is between $\pi$ and $\dfrac{4\pi}{3}$, so $f(\theta) < 0$, and cosine is increasing there, so $f$ is increasing. A negative $r$ that increases moves toward $0$, so the distance from the pole is decreasing.` },
  { id: "p3br-f2c", type: "frq", skill: "u3", topic: "3.15", calc: false, set: "p3br-s28", part: "(c)",
    prompt: R`(i) Find the average rate of change of $f$ over the interval $0 \le \theta \le \dfrac{\pi}{3}$.
(ii) Interpret the meaning of your answer to part (i) in terms of the distance between the point on the polar graph and the pole.`,
    rows: [
      { name: "(i) Average rate of change", earns: R`$\dfrac{f\left(\frac{\pi}{3}\right) - f(0)}{\frac{\pi}{3} - 0} = \dfrac{0 - 3}{\frac{\pi}{3}} = -\dfrac{9}{\pi}$.` },
      { name: "(ii) Interpretation", earns: R`On the interval $0 \le \theta \le \dfrac{\pi}{3}$, the distance between the point and the pole decreases at an average rate of $\dfrac{9}{\pi}$ units per radian. (This uses that $f(\theta) \ge 0$ on the interval, so the distance is $f(\theta)$.)` },
    ],
    solution: R`(i) $f(0) = 1 + 2\cos 0 = 3$ and $f\left(\dfrac{\pi}{3}\right) = 1 + 2\cos\dfrac{2\pi}{3} = 0$. $$\frac{f\left(\frac{\pi}{3}\right) - f(0)}{\frac{\pi}{3} - 0} = \frac{0 - 3}{\frac{\pi}{3}} = -\frac{9}{\pi}$$ (ii) On $0 \le \theta \le \dfrac{\pi}{3}$, $f(\theta) \ge 0$, so the distance between the point and the pole is $f(\theta)$. As $\theta$ increases from $0$ to $\dfrac{\pi}{3}$, that distance decreases at an average rate of $\dfrac{9}{\pi}$, about $2.865$, units per radian.` },

  // Free response 3: water depth at a pier (periodic context, no calculator)
  { id: "p3br-f3a", type: "frq", skill: "u3", topic: "3.10", calc: false, set: "p3br-s29", part: "(a)",
    prompt: R`(i) Find all values of $t$ in $0 \le t \le 12$ for which $D(t) = 9.5$.
(ii) According to the model, is there a time at which the depth of the water is $12$ feet? Give a reason for your answer.`,
    rows: [
      { name: "(i) Times", earns: R`$t = 1$ and $t = 5$, from $\sin\left(\dfrac{\pi t}{6}\right) = \dfrac{1}{2}$.` },
      { name: "(ii) Answer with reason", earns: R`No. $D(t) = 12$ would require $\sin\left(\dfrac{\pi t}{6}\right) = \dfrac{4}{3}$, but the sine is never greater than $1$, so the depth is never more than $11$ feet.` },
    ],
    solution: R`(i) $8 + 3\sin\left(\dfrac{\pi t}{6}\right) = 9.5$ gives $\sin\left(\dfrac{\pi t}{6}\right) = \dfrac{1}{2}$. For $0 \le t \le 12$, $0 \le \dfrac{\pi t}{6} \le 2\pi$, so $\dfrac{\pi t}{6} = \dfrac{\pi}{6}$ or $\dfrac{\pi t}{6} = \dfrac{5\pi}{6}$, and $t = 1$ or $t = 5$. (ii) No. $D(t) = 12$ would require $\sin\left(\dfrac{\pi t}{6}\right) = \dfrac{4}{3}$. The range of sine is $[-1, 1]$, so the greatest depth is $8 + 3 = 11$ feet.` },
  { id: "p3br-f3b", type: "frq", skill: "u3", topic: "3.10", calc: false, set: "p3br-s29", part: "(b)",
    prompt: R`A loaded boat can leave the pier only when the depth of the water is at least $9.5$ feet.
(i) For $0 \le t \le 24$, find all intervals of time during which the boat can leave.
(ii) For how many hours in all, during the $24$ hours, can the boat leave?`,
    rows: [
      { name: "(i) Intervals", earns: R`$1 \le t \le 5$ and $13 \le t \le 17$.` },
      { name: "(ii) Total time", earns: R`$8$ hours.` },
    ],
    solution: R`(i) $D(t) \ge 9.5$ when $\sin\left(\dfrac{\pi t}{6}\right) \ge \dfrac{1}{2}$, which holds when $\dfrac{\pi}{6} \le \dfrac{\pi t}{6} \le \dfrac{5\pi}{6}$, plus any multiple of $2\pi$. So $1 \le t \le 5$, and, one period of $12$ hours later, $13 \le t \le 17$. (ii) Each interval lasts $4$ hours, so the boat can leave for $4 + 4 = 8$ hours.` },
  { id: "p3br-f3c", type: "frq", skill: "u3", topic: "3.10", calc: false, set: "p3br-s29", part: "(c)",
    prompt: R`The model is used for all $t \ge 0$. Find all times $t \ge 0$ at which $D(t) = 8 - \dfrac{3\sqrt{3}}{2}$. Express the answer in terms of a nonnegative integer $n$.`,
    rows: [
      { name: "Times in one period", earns: R`$t = 8$ and $t = 10$, from $\dfrac{\pi t}{6} = \dfrac{4\pi}{3}$ and $\dfrac{\pi t}{6} = \dfrac{5\pi}{3}$.` },
      { name: "All times", earns: R`$t = 8 + 12n$ and $t = 10 + 12n$, where $n$ is a nonnegative integer.` },
    ],
    solution: R`$3\sin\left(\dfrac{\pi t}{6}\right) = -\dfrac{3\sqrt{3}}{2}$, so $\sin\left(\dfrac{\pi t}{6}\right) = -\dfrac{\sqrt{3}}{2}$. In one cycle, the sine is $-\dfrac{\sqrt{3}}{2}$ at $\dfrac{4\pi}{3}$ and $\dfrac{5\pi}{3}$, so $\dfrac{\pi t}{6} = \dfrac{4\pi}{3} + 2\pi n$ or $\dfrac{\pi t}{6} = \dfrac{5\pi}{3} + 2\pi n$. Multiplying by $\dfrac{6}{\pi}$, $$t = 8 + 12n \quad \text{or} \quad t = 10 + 12n$$ where $n$ is a nonnegative integer.` },
];

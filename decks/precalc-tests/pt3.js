// AP Precalculus unit test, Unit 3: Trigonometric and Polar Functions (topics 3.1 to 3.15).
import { graph } from "../../plot.js";

const R = String.raw;
const PI = Math.PI;

// G() wraps graph() with tick labels written by hand (xt, yt), so angles read as multiples of pi.
function G(o) {
  const w = o.width || 360, h = o.height || 260;
  const kx = (w - 60) / (o.x[1] - o.x[0]), ky = (h - 60) / (o.y[1] - o.y[0]);
  const clampX = Math.min(o.x[1], Math.max(o.x[0], 0)), clampY = Math.min(o.y[1], Math.max(o.y[0], 0));
  const labels = [...(o.labels || [])];
  for (const [x, t] of o.xt || []) labels.push([x - (t.length * 3.4) / kx, clampY - 15 / ky, t]);
  for (const [y, t] of o.yt || []) labels.push([clampX - (t.length * 7 + 6) / kx, y - 4 / ky, t]);
  return graph({ ...o, labels, labelEvery: 1e9 });
}

// A polar curve r = f(theta) drawn as short straight pieces in the xy-plane.
function polar(f, n = 360) {
  const s = [];
  for (let i = 0; i < n; i++) {
    const a = (2 * PI * i) / n, b = (2 * PI * (i + 1)) / n;
    s.push([f(a) * Math.cos(a), f(a) * Math.sin(a), f(b) * Math.cos(b), f(b) * Math.sin(b)]);
  }
  return s;
}

// The functions the graphs draw. The verification script recomputes every key from these same rules.
const wave = [[0, 1, 1, 3], [1, 3, 2, 3], [2, 3, 4, 1], [4, 1, 5, 3], [5, 3, 6, 3], [6, 3, 8, 1]];
const f6 = (x) => 2 * Math.sin((PI / 3) * (x - 1)) - 1;
const r10 = (a) => 3 + 2 * Math.cos(a);
const pump = (t) => 2 * Math.cos((PI * t) / 5) + 4;

export const sets = {
  "pt3-s1": {
    name: "A periodic graph",
    label: "Graph",
    intro: R`The function $h$ is periodic with period $4$. The graph of $h$ for $0 \le x \le 8$ is shown, and the pattern continues for all real $x$.`,
    sources: [{ title: "", blocks: [{ svg: graph({
      x: [-0.6, 8.6], y: [-0.6, 4], step: 1, xname: "x", yname: "y",
      segments: wave,
      dots: [[0, 1, "closed"], [8, 1, "closed"]],
      alt: "Graph of h for x from 0 to 8, made of line segments. It rises from (0, 1) to (1, 3), stays level at 3 until (2, 3), and falls to (4, 1). The same pattern repeats: up to (5, 3), level to (6, 3), and down to (8, 1).",
    }) }] }],
  },
  "pt3-s2": {
    name: "An angle in standard position",
    label: "Graph",
    intro: R`The angle $\theta$ is in standard position, and its terminal ray passes through the point $P(8, -6)$, as shown.`,
    sources: [{ title: "", blocks: [{ svg: graph({
      x: [-2, 10], y: [-8, 3], step: 2, xname: "x", yname: "y",
      segments: [[0, 0, 9.6, -7.2]],
      dots: [[8, -6, "closed"], [0, 0, "closed"]],
      labels: [[8.3, -5.6, "P(8, −6)"]],
      alt: "The terminal ray of theta starts at the origin and passes through the point P(8, -6) in Quadrant IV.",
    }) }] }],
  },
  "pt3-s3": {
    name: "Sine and cosine graphs",
    label: "Graph",
    intro: R`The graphs of $y = \sin x$ (solid) and $y = \cos x$ (dashed) are shown for $0 \le x \le 2\pi$.`,
    sources: [{ title: "", blocks: [{ svg: G({
      x: [-0.4, 2 * PI + 0.5], y: [-1.5, 1.5], step: { x: PI / 2, y: 0.5 }, xname: "x", yname: "y", width: 400,
      fns: [{ f: Math.sin, from: 0, to: 2 * PI }, { f: Math.cos, from: 0, to: 2 * PI, dash: true }],
      xt: [[PI / 2, "π/2"], [PI, "π"], [(3 * PI) / 2, "3π/2"], [2 * PI, "2π"]],
      yt: [[1, "1"], [-1, "−1"]],
      alt: "On the interval from 0 to 2pi, the solid sine curve starts at (0, 0), rises to 1 at pi/2, falls through 0 at pi to -1 at 3pi/2, and rises to 0 at 2pi. The dashed cosine curve starts at (0, 1), falls through 0 at pi/2 to -1 at pi, and rises through 0 at 3pi/2 to 1 at 2pi.",
    }) }] }],
  },
  "pt3-s4": {
    name: "A sinusoidal graph",
    label: "Graph",
    intro: R`The graph of the sinusoidal function $f$ is shown. The points $(1, -1)$, $(2.5, 1)$, and $(5.5, -3)$ are on the graph: $(2.5, 1)$ is a maximum, $(5.5, -3)$ is a minimum, and the graph crosses its midline $y = -1$ at $(1, -1)$ while increasing.`,
    sources: [{ title: "", blocks: [{ svg: graph({
      x: [-1, 9], y: [-4, 2], step: 1, xname: "x", yname: "y",
      fns: [{ f: f6, from: -0.6, to: 8.6 }],
      hlines: [{ y: -1, dash: true }],
      dots: [[1, -1, "closed"], [2.5, 1, "closed"], [5.5, -3, "closed"]],
      alt: "A sinusoidal curve with a dashed midline at y = -1. It crosses the midline going up at (1, -1), reaches a maximum at (2.5, 1), crosses the midline going down at (4, -1), reaches a minimum at (5.5, -3), and crosses the midline going up again at (7, -1).",
    }) }] }],
  },
  "pt3-s5": {
    name: "A polar graph",
    label: "Polar graph",
    intro: R`The polar graph of $r = f(\theta)$ for $0 \le \theta \le 2\pi$ is shown. It passes through the points with rectangular coordinates $(5, 0)$, $(0, 3)$, $(-1, 0)$, and $(0, -3)$.`,
    sources: [{ title: "", blocks: [{ svg: graph({
      x: [-2.5, 6], y: [-4, 4], step: 1, xname: "x", yname: "y", width: 340, height: 300,
      segments: polar(r10),
      dots: [[5, 0, "closed"], [0, 3, "closed"], [-1, 0, "closed"], [0, -3, "closed"]],
      alt: "A closed curve around the pole, wider on the right. It reaches farthest right at (5, 0) on the positive x-axis, passes through (0, 3) and (0, -3) on the y-axis, and has a slight dent at (-1, 0) on the negative x-axis.",
    }) }] }],
  },
  "pt3-s6": {
    name: "Water level data",
    label: "Table",
    intro: R`The water level $y$, in feet, at a gauge on a tidal river was recorded $x$ hours after midnight. The data are shown in the table.`,
    sources: [{ title: "", blocks: [{ table: {
      head: ["$x$", "$0$", "$2$", "$4$", "$6$", "$8$", "$10$", "$12$", "$14$", "$16$"],
      rows: [["$y$", "$4.9$", "$7.7$", "$10.3$", "$10.2$", "$7.5$", "$4.8$", "$4.4$", "$6.8$", "$9.7$"]],
    } }] }],
  },
  "pt3-s7": {
    name: "A limaçon",
    label: "Free response",
    intro: R`The function $f$ is given by $f(\theta) = 1 + 2.5\sin\theta$. Consider its polar graph $r = f(\theta)$ for $0 \le \theta \le 2\pi$ (no graph is given). A calculator is allowed on this question. Give decimal answers to three places.`,
    sources: [{ title: "", blocks: [{ p: "Answer each part. Show the work that leads to your answers." }] }],
  },
  "pt3-s8": {
    name: "An oil pump",
    label: "Free response",
    intro: R`The beam of an oil pump rocks up and down at a constant rate. The height of the end of the beam above the ground, in meters, $t$ seconds after a timer starts, is modeled by the sinusoidal function $h$. The end of the beam is highest, $6$ meters above the ground, at $t = 0$, and its lowest height is $2$ meters. The beam completes $6$ full up-and-down cycles each minute. The graph of $h$ for two cycles, starting at $t = 0$, is shown with no scale. The dashed line is the midline, and the points $F$, $G$, $H$, $J$, and $K$ are labeled. No calculator is allowed on this question.`,
    sources: [{ title: "", blocks: [{ svg: graph({
      x: [-0.8, 21], y: [-0.6, 7.2], step: { x: 100, y: 100 }, labelEvery: 1e9, xname: "t", yname: "h", width: 420,
      fns: [{ f: pump, from: 0, to: 20 }],
      hlines: [{ y: 4, dash: true }],
      dots: [[0, 6, "closed"], [2.5, 4, "closed"], [5, 2, "closed"], [7.5, 4, "closed"], [10, 6, "closed"]],
      labels: [[0.25, 6.35, "F"], [2.75, 4.35, "G"], [4.8, 1.15, "H"], [7.75, 3.25, "J"], [9.8, 6.45, "K"]],
      alt: "Two cycles of a wave with no numbers on the axes and a dashed horizontal midline. The labeled points are all in the first cycle. F is a maximum at the start, on the vertical axis. G is where the graph crosses the midline going down, H is the minimum, J is where it crosses the midline going up, and K is the next maximum, where the second cycle begins.",
    }) }] }],
  },
};

const items = [
  // Part A: no calculator
  { id: "pt3-m01", type: "mcq", skill: "u3", topic: "3.1", calc: false, difficulty: "moderate", set: "pt3-s1",
    question: R`How many solutions does the equation $h(x) = 2$ have on the interval $0 \le x \le 14$?`,
    choices: ["$7$", "$4$", "$3$", "$8$"],
    why: [
      R`In each period, $h(x) = 2$ once while rising (at $x = 0.5$) and once while falling (at $x = 3$). Adding multiples of $4$ gives $0.5, 4.5, 8.5, 12.5$ and $3, 7, 11$. The next one, $x = 15$, is outside the interval, so there are $7$ solutions.`,
      R`$4$ counts only the solutions on the graph shown, $0 \le x \le 8$. The interval runs to $x = 14$.`,
      R`$3$ counts one solution for each full period in the interval. Each period has two solutions, one rising and one falling.`,
      R`$8$ counts two solutions in each of $4$ periods. The interval holds $3.5$ periods, and the falling solution of the last one, $x = 15$, is past $x = 14$.`,
    ], answer: 0 },
  { id: "pt3-m02", type: "mcq", skill: "u3", topic: "3.2", calc: false, difficulty: "easy", set: "pt3-s2",
    question: R`What is the value of $\cos\theta$?`,
    choices: [R`$\frac{4}{5}$`, R`$-\frac{3}{5}$`, R`$-\frac{3}{4}$`, R`$-\frac{4}{3}$`],
    why: [
      R`The distance from the origin to $P$ is $r = \sqrt{8^{2} + (-6)^{2}} = 10$. Then $\cos\theta = \dfrac{x}{r} = \dfrac{8}{10} = \dfrac{4}{5}$.`,
      R`$-\dfrac{3}{5}$ is $\dfrac{y}{r}$, which is $\sin\theta$. The cosine uses the $x$-coordinate.`,
      R`$-\dfrac{3}{4}$ is $\dfrac{y}{x}$, which is $\tan\theta$. The cosine divides by the distance $r$.`,
      R`$-\dfrac{4}{3}$ is $\dfrac{x}{y}$. The cosine is $\dfrac{x}{r}$, with $r = 10$.`,
    ], answer: 0 },
  { id: "pt3-m03", type: "mcq", skill: "u3", topic: "3.3", calc: false, difficulty: "easy",
    question: R`What is the value of $\cos\left(-\dfrac{\pi}{3}\right)$?`,
    choices: [R`$\frac{1}{2}$`, R`$-\frac{1}{2}$`, R`$-\frac{\sqrt{3}}{2}$`, R`$\frac{\sqrt{3}}{2}$`],
    why: [
      R`The angle $-\dfrac{\pi}{3}$ is measured clockwise into Quadrant IV, with reference angle $\dfrac{\pi}{3}$. The point on the unit circle is $\left(\dfrac{1}{2}, -\dfrac{\sqrt{3}}{2}\right)$, so the cosine is $\dfrac{1}{2}$.`,
      R`$-\dfrac{1}{2}$ treats cosine as an odd function. Cosine is even: $\cos(-\theta) = \cos\theta$, and in Quadrant IV the $x$-coordinate is positive.`,
      R`$-\dfrac{\sqrt{3}}{2}$ is the $y$-coordinate, $\sin\left(-\dfrac{\pi}{3}\right)$. The cosine is the $x$-coordinate.`,
      R`$\dfrac{\sqrt{3}}{2}$ is $\sin\dfrac{\pi}{3}$, the sine of the reference angle. The cosine of $\dfrac{\pi}{3}$ is $\dfrac{1}{2}$.`,
    ], answer: 0 },
  { id: "pt3-m04", type: "mcq", skill: "u3", topic: "3.4", calc: false, difficulty: "easy", set: "pt3-s3",
    question: R`On which of the following intervals is $\sin x$ increasing and $\cos x$ decreasing?`,
    choices: [R`$\left(0, \frac{\pi}{2}\right)$`, R`$\left(\frac{\pi}{2}, \pi\right)$`, R`$\left(\pi, \frac{3\pi}{2}\right)$`, R`$\left(\frac{3\pi}{2}, 2\pi\right)$`],
    why: [
      R`On $\left(0, \dfrac{\pi}{2}\right)$ the solid sine graph rises from $0$ to its maximum $1$, and the dashed cosine graph falls from its maximum $1$ to $0$.`,
      R`On $\left(\dfrac{\pi}{2}, \pi\right)$ both functions decrease. The sine falls from its maximum at $\dfrac{\pi}{2}$.`,
      R`On $\left(\pi, \dfrac{3\pi}{2}\right)$ the roles are reversed: $\sin x$ decreases and $\cos x$ increases from its minimum at $\pi$.`,
      R`On $\left(\dfrac{3\pi}{2}, 2\pi\right)$ both functions increase.`,
    ], answer: 0 },
  { id: "pt3-m05", type: "mcq", skill: "u3", topic: "3.5", calc: false, difficulty: "moderate",
    question: R`The function $g$ is given by $g(x) = 5 - 2\sin\left(\dfrac{x}{2}\right)$. What is the maximum value of $g$, and what is the least positive value of $x$ at which it occurs?`,
    choices: [R`$7$, at $x = 3\pi$`, R`$7$, at $x = \pi$`, R`$7$, at $x = \frac{3\pi}{4}$`, R`$3$, at $x = \pi$`],
    why: [
      R`$g$ is greatest when $\sin\left(\dfrac{x}{2}\right) = -1$, which gives $g = 5 + 2 = 7$. That happens when $\dfrac{x}{2} = \dfrac{3\pi}{2}$, so $x = 3\pi$.`,
      R`At $x = \pi$, $\sin\left(\dfrac{x}{2}\right) = 1$ and $g = 5 - 2 = 3$, the minimum. The factor $-2$ turns the sine's maximum into a minimum of $g$.`,
      R`$\dfrac{3\pi}{4}$ comes from solving $2x = \dfrac{3\pi}{2}$. The argument is $\dfrac{x}{2}$, so $x = 2 \cdot \dfrac{3\pi}{2} = 3\pi$.`,
      R`$3$ is the value of $g$ where the sine is greatest. Because the sine is multiplied by $-2$, that value is the minimum of $g$.`,
    ], answer: 0 },
  { id: "pt3-m06", type: "mcq", skill: "u3", topic: "3.6", calc: false, difficulty: "difficult", set: "pt3-s4",
    question: R`Which of the following could be an expression for $f(x)$?`,
    choices: [
      R`$2\sin\left(\frac{\pi}{3}(x - 1)\right) - 1$`,
      R`$2\sin\left(\frac{\pi}{3}x - 1\right) - 1$`,
      R`$2\sin\left(\frac{\pi}{6}(x - 1)\right) - 1$`,
      R`$2\sin\left(\frac{\pi}{3}(x + 1)\right) - 1$`,
    ],
    why: [
      R`The amplitude is $\dfrac{1 - (-3)}{2} = 2$ and the midline is $y = -1$. From the maximum at $x = 2.5$ to the minimum at $x = 5.5$ is half a period, so the period is $6$ and $b = \dfrac{2\pi}{6} = \dfrac{\pi}{3}$. A sine crosses its midline increasing where its argument is $0$, so the argument is $\dfrac{\pi}{3}(x - 1)$.`,
      R`Here the argument is $0$ at $x = \dfrac{3}{\pi}$, not at $x = 1$. The shift of $1$ must be inside the factored form $\dfrac{\pi}{3}(x - 1)$.`,
      R`$\dfrac{\pi}{6}$ gives a period of $12$. That would use $3$, the time from a maximum to a minimum, as a quarter of the period instead of half.`,
      R`This shifts the graph $1$ unit left, so it crosses the midline increasing at $x = -1$ and then at $x = 5$. The graph crosses it increasing at $x = 1$.`,
    ], answer: 0 },
  { id: "pt3-m07", type: "mcq", skill: "u3", topic: "3.8", calc: false, difficulty: "easy",
    question: R`What is the period of $k(x) = 4\tan\left(\dfrac{2\pi x}{3}\right) + 1$?`,
    choices: [R`$\frac{3}{2}$`, "$3$", R`$\frac{3\pi}{2}$`, R`$\frac{2\pi}{3}$`],
    why: [
      R`The period of $\tan(bx)$ is $\dfrac{\pi}{b}$. Here $b = \dfrac{2\pi}{3}$, so the period is $\dfrac{\pi}{2\pi/3} = \dfrac{3}{2}$.`,
      R`$3$ is $\dfrac{2\pi}{b}$, the period formula for sine and cosine. The tangent repeats twice as often.`,
      R`$\dfrac{3\pi}{2}$ reads the argument as $\dfrac{2x}{3}$, so $b = \dfrac{2}{3}$. The coefficient of $x$ in $\dfrac{2\pi x}{3}$ is $\dfrac{2\pi}{3}$.`,
      R`$\dfrac{2\pi}{3}$ is the value of $b$, not the period.`,
    ], answer: 0 },
  { id: "pt3-m08", type: "mcq", skill: "u3", topic: "3.11", calc: false, difficulty: "moderate",
    question: R`If $\csc\theta = -\dfrac{41}{9}$ and $\pi < \theta < \dfrac{3\pi}{2}$, what is the value of $\cot\theta$?`,
    choices: [R`$\frac{40}{9}$`, R`$-\frac{40}{9}$`, R`$-\frac{41}{40}$`, R`$-\frac{40}{41}$`],
    why: [
      R`$\sin\theta = -\dfrac{9}{41}$. In Quadrant III, $\cos\theta = -\sqrt{1 - \dfrac{81}{1681}} = -\dfrac{40}{41}$. Then $\cot\theta = \dfrac{\cos\theta}{\sin\theta} = \dfrac{-40/41}{-9/41} = \dfrac{40}{9}$.`,
      R`$-\dfrac{40}{9}$ has the wrong sign. In Quadrant III the sine and cosine are both negative, so their quotient is positive.`,
      R`$-\dfrac{41}{40}$ is $\dfrac{1}{\cos\theta}$, which is $\sec\theta$. The cotangent is $\dfrac{\cos\theta}{\sin\theta}$.`,
      R`$-\dfrac{40}{41}$ is $\cos\theta$. The cotangent divides the cosine by the sine.`,
    ], answer: 0 },
  { id: "pt3-m09", type: "mcq", skill: "u3", topic: "3.12", calc: false, difficulty: "difficult",
    question: R`The angle $\alpha$ is in Quadrant III with $\cos\alpha = -\dfrac{4}{5}$, and the angle $\beta$ is in Quadrant II with $\sin\beta = \dfrac{12}{13}$. What is the value of $\cos(\alpha + \beta)$?`,
    choices: [R`$\frac{56}{65}$`, R`$-\frac{16}{65}$`, R`$-\frac{77}{65}$`, R`$-\frac{33}{65}$`],
    why: [
      R`$\sin\alpha = -\dfrac{3}{5}$ (Quadrant III) and $\cos\beta = -\dfrac{5}{13}$ (Quadrant II). Then $\cos(\alpha + \beta) = \cos\alpha\cos\beta - \sin\alpha\sin\beta = \dfrac{20}{65} - \left(-\dfrac{36}{65}\right) = \dfrac{56}{65}$.`,
      R`$-\dfrac{16}{65}$ adds the products, $\cos\alpha\cos\beta + \sin\alpha\sin\beta$. That is $\cos(\alpha - \beta)$. For a sum, the products are subtracted.`,
      R`$-\dfrac{77}{65}$ is $\cos\alpha + \cos\beta$. The cosine of a sum is not the sum of the cosines, and no cosine is less than $-1$.`,
      R`$-\dfrac{33}{65}$ is $\sin\alpha\cos\beta + \cos\alpha\sin\beta$, which is $\sin(\alpha + \beta)$.`,
    ], answer: 0 },
  { id: "pt3-m10", type: "mcq", skill: "u3", topic: "3.14", calc: false, difficulty: "easy", set: "pt3-s5",
    question: R`Which of the following could be the equation of the graph?`,
    choices: [R`$r = 3 + 2\cos\theta$`, R`$r = 3 - 2\cos\theta$`, R`$r = 3 + 2\sin\theta$`, R`$r = 2 + 3\cos\theta$`],
    why: [
      R`At $\theta = 0$, $r = 3 + 2 = 5$, the point $(5, 0)$. At $\theta = \pi$, $r = 3 - 2 = 1$, which is the point $(-1, 0)$. At $\theta = \dfrac{\pi}{2}$ and $\theta = \dfrac{3\pi}{2}$, $r = 3$, the points $(0, 3)$ and $(0, -3)$.`,
      R`This gives $r = 1$ at $\theta = 0$ and $r = 5$ at $\theta = \pi$, the point $(-5, 0)$. The graph would reach farthest to the left, not the right.`,
      R`This gives $r = 5$ at $\theta = \dfrac{\pi}{2}$, the point $(0, 5)$. The graph would reach farthest upward, but it reaches farthest to the right.`,
      R`This gives $r = -1$ at $\theta = \pi$, so the curve would have an inner loop and pass through the pole. The graph never reaches the pole.`,
    ], answer: 0 },
  // Part B: calculator
  { id: "pt3-m11", type: "mcq", skill: "u3", topic: "3.7", calc: true, difficulty: "moderate", set: "pt3-s6",
    question: R`A sinusoidal regression is used to model $y$ as a function of $x$. To the nearest tenth of an hour, what is the period of the regression model?`,
    choices: ["$12.6$ hours", "$6.3$ hours", "$0.5$ hours", "$3.2$ hours"],
    why: [
      R`A sinusoidal regression gives about $y = 3.219\sin(0.499x - 0.895) + 7.399$. The period is $\dfrac{2\pi}{0.499} \approx 12.6$ hours.`,
      R`$6.3$ is $\dfrac{\pi}{b}$, which is half the period. The period of a sine is $\dfrac{2\pi}{b}$.`,
      R`$0.5$ is about $b$, the coefficient of $x$. The period is $\dfrac{2\pi}{b}$.`,
      R`$3.2$ is about the amplitude, a number of feet. The period is a length of time.`,
    ], answer: 0 },
  { id: "pt3-m12", type: "mcq", skill: "u3", topic: "3.9", calc: true, difficulty: "easy",
    question: R`What is the value of $\arccos(-0.3)$?`,
    choices: [R`$1.875$`, R`$-0.305$`, R`$-1.266$`, R`$-1.875$`],
    why: [
      R`The range of $\arccos$ is $0 \le y \le \pi$. In radian mode, $\arccos(-0.3) \approx 1.875$, an angle in Quadrant II, and $\cos 1.875 \approx -0.3$.`,
      R`$-0.305$ is $\arcsin(-0.3)$, the inverse of the wrong function.`,
      R`$-1.266$ is $-\arccos(0.3)$. That would be right for an odd function such as $\arcsin$, but $\arccos(-x) = \pi - \arccos x$.`,
      R`$\cos(-1.875) \approx -0.3$, but $-1.875$ is outside the range of $\arccos$, $0 \le y \le \pi$.`,
    ], answer: 0 },
  { id: "pt3-m13", type: "mcq", skill: "u3", topic: "3.10", calc: true, difficulty: "difficult",
    question: R`For which values of $x$ in the interval $0 \le x \le \pi$ is $3\sin(2x) > 1$?`,
    choices: [R`$0.170 < x < 1.401$`, R`$0.340 < x < 2.802$`, R`$0.170 < x < 2.972$`, R`$0.170 < x < 1.741$`],
    why: [
      R`$\sin(2x) > \dfrac{1}{3}$ with $0 \le 2x \le 2\pi$. The sine is above $\dfrac{1}{3}$ between $\arcsin\dfrac{1}{3} \approx 0.340$ and $\pi - 0.340 \approx 2.802$, so $0.340 < 2x < 2.802$ and $0.170 < x < 1.401$.`,
      R`These are the values of $2x$. Dividing by $2$ gives the values of $x$.`,
      R`$2.972$ comes from $2x = 2\pi - 0.340$, the second solution for a cosine. For a sine, the second solution is $\pi - 0.340$.`,
      R`$1.741$ comes from $2x = \pi + 0.340$, the second solution for a tangent. For a sine, the second solution is $\pi - 0.340$.`,
    ], answer: 0 },
  { id: "pt3-m14", type: "mcq", skill: "u3", topic: "3.13", calc: true, difficulty: "moderate",
    question: R`The point $(-3, 5)$ is given in rectangular coordinates. Which of the following gives the point in polar coordinates $(r, \theta)$ with $r > 0$ and $0 \le \theta < 2\pi$?`,
    choices: [R`$(5.831, 2.111)$`, R`$(5.831, -1.030)$`, R`$(5.831, 1.030)$`, R`$(5.831, 5.253)$`],
    why: [
      R`$r = \sqrt{(-3)^{2} + 5^{2}} = \sqrt{34} \approx 5.831$. The point is in Quadrant II, so $\theta = \pi + \arctan\left(\dfrac{5}{-3}\right) \approx \pi - 1.030 = 2.111$.`,
      R`$-1.030$ is $\arctan\left(\dfrac{5}{-3}\right)$, an angle in Quadrant IV. It is also outside $0 \le \theta < 2\pi$.`,
      R`$1.030$ is the reference angle. It points into Quadrant I, but the point is in Quadrant II.`,
      R`$5.253$ is $2\pi - 1.030$, an angle in Quadrant IV. The point $(-3, 5)$ is in Quadrant II.`,
    ], answer: 0 },
  { id: "pt3-m15", type: "mcq", skill: "u3", topic: "3.15", calc: true, difficulty: "easy",
    question: R`The function $f$ is given by $f(\theta) = 1.5 + \sin(2\theta)$. What is the average rate of change of $r = f(\theta)$ with respect to $\theta$ on the interval $2 \le \theta \le 3$?`,
    choices: [R`$0.477$`, R`$-0.477$`, R`$0.035$`, R`$0.982$`],
    why: [
      R`$\dfrac{f(3) - f(2)}{3 - 2} = \dfrac{(1.5 + \sin 6) - (1.5 + \sin 4)}{1} \approx 1.2206 - 0.7432 \approx 0.477$.`,
      R`$-0.477$ subtracts in the wrong order, $f(2) - f(3)$, over $3 - 2$.`,
      R`$0.035$ evaluates the sine in degree mode. The angles are in radians.`,
      R`$0.982$ is the average of $f(2)$ and $f(3)$. The average rate of change is the change in $r$ divided by the change in $\theta$.`,
    ], answer: 0 },
  // Free response 1: Function Concepts, calculator
  { id: "pt3-f1a", type: "frq", skill: "u3", topic: "3.13", calc: true, set: "pt3-s7", part: "(a)",
    prompt: R`(i) Find the rectangular coordinates of the point on the graph of $r = f(\theta)$ for $\theta = 2$. (ii) Find all values of $\theta$ in the interval $0 \le \theta \le 2\pi$ for which the graph of $r = f(\theta)$ passes through the pole.`,
    rows: [
      { name: "(i) Rectangular coordinates", earns: R`$(-1.362, 2.976)$, from $r = f(2) \approx 3.273$, $x = r\cos 2$, and $y = r\sin 2$.` },
      { name: "(ii) Pole", earns: R`$\theta \approx 3.553$ and $\theta \approx 5.872$, from $f(\theta) = 0$, with no other values.` },
    ],
    solution: R`(i) $r = f(2) = 1 + 2.5\sin 2 \approx 3.27324$. Then $x = r\cos 2 \approx 3.27324(-0.41615) \approx -1.362$ and $y = r\sin 2 \approx 3.27324(0.90930) \approx 2.976$. The point is $(-1.362, 2.976)$. (ii) The graph passes through the pole where $r = 0$: $1 + 2.5\sin\theta = 0$, so $\sin\theta = -0.4$. In $0 \le \theta \le 2\pi$ the solutions are in Quadrants III and IV: $\theta = \pi + \arcsin(0.4) \approx 3.553$ and $\theta = 2\pi - \arcsin(0.4) \approx 5.872$.` },
  { id: "pt3-f1b", type: "frq", skill: "u3", topic: "3.15", calc: true, set: "pt3-s7", part: "(b)",
    prompt: R`(i) Find the average rate of change of $r = f(\theta)$ with respect to $\theta$ on the interval $1 \le \theta \le 2.5$. Show the computations that lead to your answer. (ii) Interpret the meaning of your answer from (i) in terms of the distance between the point on the graph and the pole.`,
    rows: [
      { name: "(i) Average rate of change", earns: R`$\dfrac{f(2.5) - f(1)}{2.5 - 1} \approx -0.405$, with the computation shown.` },
      { name: "(ii) Interpretation", earns: R`Since $r > 0$ on this interval, as $\theta$ increases from $1$ to $2.5$ radians, the distance between the point on the graph and the pole decreases by an average of about $0.405$ units per radian.` },
    ],
    solution: R`(i) $f(1) = 1 + 2.5\sin 1 \approx 3.10368$ and $f(2.5) = 1 + 2.5\sin 2.5 \approx 2.49618$. The average rate of change is $\dfrac{2.49618 - 3.10368}{2.5 - 1} \approx -0.405$. (ii) $r = f(\theta)$ is positive for $1 \le \theta \le 2.5$, so $r$ is the distance from the pole. On this interval, the distance between the point on the graph and the pole decreases at an average rate of about $0.405$ units per radian.` },
  { id: "pt3-f1c", type: "frq", skill: "u3", topic: "3.15", calc: true, set: "pt3-s7", part: "(c)",
    prompt: R`(i) Let $\theta_{1}$ be the least value from (a)(ii). On the interval $\theta_{1} < \theta < \dfrac{3\pi}{2}$, is the distance between the point on the graph and the pole increasing or decreasing? Give a reason for your answer. (ii) Find the rectangular coordinates of the point on the graph for $\theta = \dfrac{3\pi}{2}$, and describe where this point lies relative to the pole.`,
    rows: [
      { name: "(i) Answer with reason", earns: R`Increasing, because on this interval $r = f(\theta)$ is negative and decreasing, so $|r|$, the distance from the pole, is increasing.` },
      { name: "(ii) Point", earns: R`$(0, 1.5)$, from $r = f\left(\dfrac{3\pi}{2}\right) = -1.5$. Because $r < 0$, the point lies $1.5$ units from the pole in the direction opposite to $\theta = \dfrac{3\pi}{2}$, on the positive $y$-axis.` },
    ],
    solution: R`(i) For $3.553 < \theta < \dfrac{3\pi}{2}$, $\sin\theta < -0.4$, so $f(\theta) < 0$. On this interval $\sin\theta$ decreases toward $-1$, so $f(\theta)$ is negative and decreasing. The distance from the pole is $|f(\theta)|$, which increases. (ii) $f\left(\dfrac{3\pi}{2}\right) = 1 + 2.5(-1) = -1.5$. Then $x = -1.5\cos\dfrac{3\pi}{2} = 0$ and $y = -1.5\sin\dfrac{3\pi}{2} = 1.5$. The point $(0, 1.5)$ is on the positive $y$-axis, $1.5$ units above the pole, opposite the direction of the angle $\dfrac{3\pi}{2}$ because $r$ is negative.` },
  // Free response 2: Modeling a Periodic Context, no calculator
  { id: "pt3-f2a", type: "frq", skill: "u3", topic: "3.7", calc: false, set: "pt3-s8", part: "(a)",
    prompt: R`The points $F$, $G$, $H$, $J$, and $K$ on the graph have coordinates $\bigl(t, h(t)\bigr)$. Give the values of these coordinates.`,
    rows: [
      { name: "Heights", earns: R`$h$-coordinates: $F$ $6$, $G$ $4$, $H$ $2$, $J$ $4$, $K$ $6$.` },
      { name: "Times", earns: R`$t$-coordinates: $F$ $0$, $G$ $2.5$, $H$ $5$, $J$ $7.5$, $K$ $10$.` },
    ],
    solution: R`Six cycles each minute means one cycle every $\dfrac{60}{6} = 10$ seconds, so the period is $10$. The midline is $\dfrac{6 + 2}{2} = 4$. $F$ is the maximum at the start, $(0, 6)$. The labeled points are a quarter period, $2.5$ seconds, apart: $G = (2.5, 4)$ on the midline, $H = (5, 2)$ at the minimum, $J = (7.5, 4)$ on the midline, and $K = (10, 6)$ at the next maximum.` },
  { id: "pt3-f2b", type: "frq", skill: "u3", topic: "3.6", calc: false, set: "pt3-s8", part: "(b)",
    prompt: R`The function $h$ can be written in the form $h(t) = a\sin\bigl(b(t + c)\bigr) + d$. Find values of constants $a$, $b$, $c$, and $d$.`,
    rows: [
      { name: "a and d", earns: R`$a = 2$ and $d = 4$.` },
      { name: "b and c", earns: R`$b = \dfrac{\pi}{5}$ and $c = 2.5$ (or another value that matches the given $a$ and $b$, such as $c = -7.5$).` },
    ],
    solution: R`The amplitude is $a = \dfrac{6 - 2}{2} = 2$ and the midline is $d = 4$. The period is $10$, so $b = \dfrac{2\pi}{10} = \dfrac{\pi}{5}$. With $a > 0$, the sine crosses its midline while increasing where its argument is $0$. That happens at $J$, $t = 7.5$, and one period earlier at $t = -2.5$. So $t + c = 0$ at $t = -2.5$, which gives $c = 2.5$ and $h(t) = 2\sin\left(\dfrac{\pi}{5}(t + 2.5)\right) + 4$. Check: $h(0) = 2\sin\dfrac{\pi}{2} + 4 = 6$.` },
  { id: "pt3-f2c", type: "frq", skill: "u3", topic: "3.5", calc: false, set: "pt3-s8", part: "(c)",
    prompt: R`(i) Between which two consecutive labeled points on the graph is $h$ increasing and its rate of change decreasing? (ii) Explain your answer from (i).`,
    rows: [
      { name: "(i) Points", earns: R`Between $J$ and $K$.` },
      { name: "(ii) Explanation", earns: R`From $J$ to $K$ the height rises from $4$ to $6$, so $h$ is increasing. The graph is above the midline there, so it is concave down, and the rate of change decreases.` },
    ],
    solution: R`(i) Between $J$ and $K$. (ii) $h$ is increasing on the intervals from $H$ to $J$ and from $J$ to $K$, where the height rises from its minimum to its maximum. From $H$ to $J$ the graph is below the midline and concave up, so the rate of change increases. From $J$ to $K$ the graph is above the midline and concave down, so the rate of change decreases: the beam rises more and more slowly as it nears its highest point.` },
];

export default {
  forms: [{
    id: "pt3",
    name: "Unit 3 Test",
    group: "Unit 3: Trigonometric and Polar Functions",
    items,
  }],
};

// AP Precalculus topic quiz 3.11: The Secant, Cosecant, and Cotangent Functions.
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

// An arc of radius r from angle a to angle b, as short straight pieces (marks an angle in standard position).
function arc(r, a, b, n = 90) {
  const out = [];
  for (let k = 0; k < n; k++) {
    const t0 = a + ((b - a) * k) / n, t1 = a + ((b - a) * (k + 1)) / n;
    out.push([r * Math.cos(t0), r * Math.sin(t0), r * Math.cos(t1), r * Math.sin(t1)]);
  }
  return out;
}

// The function the graph draws. The verification script recomputes every key from this same rule.
const f2 = (x) => 1 / Math.tan(x / 2);

export const sets = {
  "p311-s1": {
    name: "A terminal side through a point",
    label: "Diagram",
    intro: R`An angle $\theta$ in standard position has its terminal side through the point $(7, -24)$, as shown.`,
    sources: [{ title: "", blocks: [{ svg: graph({
      x: [-12, 16], y: [-28, 6], step: 4, xname: "x", yname: "y", width: 300, height: 350,
      segments: [[0, 0, 7, -24], ...arc(3, 0, 2 * PI + Math.atan2(-24, 7))],
      dots: [[7, -24, "closed"]],
      labels: [[8, -23.5, "(7, −24)"], [-5.5, 3.2, "θ"]],
      labelEvery: 2,
      alt: "Coordinate plane with a ray from the origin into Quadrant IV through the point (7, -24). The angle theta is measured counterclockwise from the positive x-axis to this ray.",
    }) }] }],
  },
  "p311-s2": {
    name: "A graph with vertical asymptotes",
    label: "Graph",
    intro: R`The graph of a function $f$ is shown for $-2\pi < x < 2\pi$. The dashed lines $x = -2\pi$, $x = 0$, and $x = 2\pi$ are vertical asymptotes. The graph passes through the points $\left(\dfrac{\pi}{2}, 1\right)$, $(\pi, 0)$, and $\left(\dfrac{3\pi}{2}, -1\right)$.`,
    sources: [{ title: "", blocks: [{ svg: G({
      x: [-2 * PI - 0.4, 2 * PI + 0.4], y: [-4, 4], step: { x: PI / 2, y: 1 }, xname: "x", yname: "y", width: 440,
      fns: [{ f: f2, from: -2 * PI + 0.001, to: -0.001 }, { f: f2, from: 0.001, to: 2 * PI - 0.001 }],
      vlines: [{ x: -2 * PI }, { x: 0 }, { x: 2 * PI }],
      dots: [[PI / 2, 1, "closed"], [PI, 0, "closed"], [(3 * PI) / 2, -1, "closed"]],
      xt: [[-2 * PI, "−2π"], [-PI, "−π"], [PI, "π"], [2 * PI, "2π"]],
      yt: [[1, "1"], [-1, "−1"]],
      alt: "Graph of f for x between -2 pi and 2 pi, with dashed vertical asymptotes at x = -2 pi, x = 0, and x = 2 pi. On each interval between asymptotes the graph decreases from very large values to very negative values. On the interval from 0 to 2 pi it passes through (pi/2, 1), (pi, 0), and (3 pi/2, -1). On the interval from -2 pi to 0 it crosses the x-axis at x = -pi.",
    }) }] }],
  },
  "p311-s3": {
    name: "A transformed secant function",
    label: "Free response",
    intro: R`The function $h$ is defined by $h(x) = 3\sec(2x)$.`,
    sources: [{ title: "", blocks: [{ p: R`Answer each part. Give exact answers, and show the work that leads to each answer.` }] }],
  },
};

export default {
  forms: [{
    id: "p311",
    name: "Topic 3.11 Quiz: The Secant, Cosecant, and Cotangent Functions",
    group: "Unit 3: Trigonometric and Polar Functions",
    items: [
      { id: "p311-m01", type: "mcq", skill: "u3", topic: "3.11", calc: false, difficulty: "easy",
        question: R`What is the value of $\sec\left(\dfrac{7\pi}{4}\right)$?`,
        choices: [R`$\sqrt{2}$`, R`$-\sqrt{2}$`, R`$\dfrac{\sqrt{2}}{2}$`, R`$\dfrac{2\sqrt{3}}{3}$`],
        why: [
          R`$\dfrac{7\pi}{4}$ is in Quadrant IV, where cosine is positive, so $\cos\dfrac{7\pi}{4} = \dfrac{\sqrt{2}}{2}$ and $\sec\dfrac{7\pi}{4} = \dfrac{2}{\sqrt{2}} = \sqrt{2}$.`,
          R`Cosine, and so secant, is positive in Quadrant IV. The negative sign belongs to sine there.`,
          R`$\dfrac{\sqrt{2}}{2}$ is $\cos\dfrac{7\pi}{4}$. Secant is its reciprocal.`,
          R`$\dfrac{2\sqrt{3}}{3}$ is the secant of an angle with reference angle $\dfrac{\pi}{6}$. The reference angle of $\dfrac{7\pi}{4}$ is $\dfrac{\pi}{4}$.`,
        ], answer: 0 },
      { id: "p311-m02", type: "mcq", skill: "u3", topic: "3.11", calc: false, difficulty: "easy", set: "p311-s1",
        question: R`What is the value of $\cot\theta$?`,
        choices: [R`$-\dfrac{7}{24}$`, R`$-\dfrac{24}{7}$`, R`$\dfrac{25}{7}$`, R`$-\dfrac{25}{24}$`],
        why: [
          R`$\cot\theta = \dfrac{x}{y} = \dfrac{7}{-24} = -\dfrac{7}{24}$.`,
          R`$-\dfrac{24}{7} = \dfrac{y}{x}$ is $\tan\theta$. Cotangent is its reciprocal.`,
          R`$\dfrac{25}{7} = \dfrac{r}{x}$, with $r = \sqrt{7^{2} + 24^{2}} = 25$, is $\sec\theta$.`,
          R`$-\dfrac{25}{24} = \dfrac{r}{y}$ is $\csc\theta$.`,
        ], answer: 0 },
      { id: "p311-m03", type: "mcq", skill: "u3", topic: "3.11", calc: false, difficulty: "easy",
        question: R`Which of the following gives all vertical asymptotes of the graph of $y = \csc(2x)$, where $n$ is any integer?`,
        choices: [R`$x = \dfrac{n\pi}{2}$`, R`$x = \dfrac{\pi}{4} + \dfrac{n\pi}{2}$`, R`$x = n\pi$`, R`$x = 2n\pi$`],
        why: [
          R`$\csc(2x) = \dfrac{1}{\sin(2x)}$ has a vertical asymptote wherever $\sin(2x) = 0$, that is, $2x = n\pi$, so $x = \dfrac{n\pi}{2}$.`,
          R`These are the zeros of $\cos(2x)$, where $\sec(2x)$ has its asymptotes.`,
          R`$x = n\pi$ gives the asymptotes of $\csc x$. The factor $2$ in $\csc(2x)$ halves the spacing.`,
          R`$x = 2n\pi$ multiplies by $2$ instead of dividing. The asymptotes of $\csc(2x)$ are closer together than those of $\csc x$, not farther apart.`,
        ], answer: 0 },
      { id: "p311-m04", type: "mcq", skill: "u3", topic: "3.11", calc: false, difficulty: "moderate", set: "p311-s2",
        question: R`Which of the following could be an equation for $f$?`,
        choices: [R`$f(x) = \cot\left(\dfrac{x}{2}\right)$`, R`$f(x) = \cot(2x)$`, R`$f(x) = \tan\left(\dfrac{x}{2}\right)$`, R`$f(x) = -\cot\left(\dfrac{x}{2}\right)$`],
        why: [
          R`The graph decreases between asymptotes $2\pi$ apart, so it is a cotangent with period $\dfrac{\pi}{b} = 2\pi$, or $b = \dfrac{1}{2}$. A check: $\cot\dfrac{\pi}{4} = 1$, $\cot\dfrac{\pi}{2} = 0$, and $\cot\dfrac{3\pi}{4} = -1$ match the points at $x = \dfrac{\pi}{2}$, $\pi$, and $\dfrac{3\pi}{2}$.`,
          R`$\cot(2x)$ has period $\dfrac{\pi}{2}$, with asymptotes every $\dfrac{\pi}{2}$. This takes the period $2\pi$ as the value of $b$.`,
          R`$\tan\left(\dfrac{x}{2}\right)$ is increasing, has a zero at $x = 0$, and has asymptotes at $x = \pm\pi$. The graph has an asymptote at $x = 0$.`,
          R`$-\cot\left(\dfrac{x}{2}\right)$ is increasing between its asymptotes and passes through $\left(\dfrac{\pi}{2}, -1\right)$. The graph is decreasing.`,
        ], answer: 0 },
      { id: "p311-m05", type: "mcq", skill: "u3", topic: "3.11", calc: false, difficulty: "moderate",
        question: R`If $\csc\theta = \dfrac{13}{5}$ and $\cot\theta < 0$, what is the value of $\sec\theta$?`,
        choices: [R`$-\dfrac{13}{12}$`, R`$\dfrac{13}{12}$`, R`$-\dfrac{12}{13}$`, R`$-\dfrac{12}{5}$`],
        why: [
          R`$\sin\theta = \dfrac{5}{13} > 0$ and $\cot\theta < 0$, so $\theta$ is in Quadrant II and $\cos\theta < 0$. Then $\cos\theta = -\sqrt{1 - \dfrac{25}{169}} = -\dfrac{12}{13}$ and $\sec\theta = -\dfrac{13}{12}$.`,
          R`$\dfrac{13}{12}$ has the right size, but $\theta$ is in Quadrant II, where cosine and secant are negative.`,
          R`$-\dfrac{12}{13}$ is $\cos\theta$. Secant is its reciprocal.`,
          R`$-\dfrac{12}{5} = \dfrac{\cos\theta}{\sin\theta}$ is $\cot\theta$.`,
        ], answer: 0 },
      { id: "p311-m06", type: "mcq", skill: "u3", topic: "3.11", calc: false, difficulty: "difficult",
        question: R`If $0 < \theta < \pi$ and $\cot\theta < -1$, which of the following must be true?`,
        choices: [R`$-\sqrt{2} < \sec\theta < -1$`, R`$\sec\theta < -\sqrt{2}$`, R`$-1 < \sec\theta < 0$`, R`$1 < \sec\theta < \sqrt{2}$`],
        why: [
          R`On $(0, \pi)$, cotangent decreases and $\cot\dfrac{3\pi}{4} = -1$, so $\dfrac{3\pi}{4} < \theta < \pi$. There $-1 < \cos\theta < -\dfrac{\sqrt{2}}{2}$, and taking reciprocals gives $-\sqrt{2} < \sec\theta < -1$.`,
          R`$\sec\theta < -\sqrt{2}$ holds for $\dfrac{\pi}{2} < \theta < \dfrac{3\pi}{4}$, where $-1 < \cot\theta < 0$. The inequality for cotangent was reversed.`,
          R`$-1 < \tan\theta < 0$ is true here, but that is tangent. Since $|\cos\theta| \le 1$, $|\sec\theta| \ge 1$, so secant is never between $-1$ and $0$.`,
          R`These values have the right size, but $\theta$ is in Quadrant II, where cosine and secant are negative.`,
        ], answer: 0 },
      { id: "p311-f1a", type: "frq", skill: "u3", topic: "3.11", calc: false, set: "p311-s3", part: "(a)",
        prompt: R`(i) Find all values of $x$ that are not in the domain of $h$. Express the answer in terms of an integer $n$.
(ii) Find the range of $h$.`,
        rows: [
          { name: "(i) Excluded values", earns: R`$x = \dfrac{\pi}{4} + \dfrac{n\pi}{2}$, where $n$ is any integer, because $\cos(2x) = 0$ there.` },
          { name: "(ii) Range", earns: R`$(-\infty, -3] \cup [3, \infty)$, or $|h(x)| \ge 3$.` },
        ],
        solution: R`(i) $h(x) = \dfrac{3}{\cos(2x)}$ is undefined where $\cos(2x) = 0$: $2x = \dfrac{\pi}{2} + n\pi$, so $x = \dfrac{\pi}{4} + \dfrac{n\pi}{2}$, where $n$ is any integer. (ii) $\cos(2x)$ takes every value in $[-1, 0) \cup (0, 1]$, so $\sec(2x)$ takes every value with $|\sec(2x)| \ge 1$, and $h$ takes every value with $|h(x)| \ge 3$. The range is $(-\infty, -3] \cup [3, \infty)$.` },
      { id: "p311-f1b", type: "frq", skill: "u3", topic: "3.11", calc: false, set: "p311-s3", part: "(b)",
        prompt: R`Find the value of $h\left(\dfrac{\pi}{6}\right)$.`,
        rows: [{ name: "Value", earns: R`$h\left(\dfrac{\pi}{6}\right) = 6$, with supporting work.` }],
        solution: R`$h\left(\dfrac{\pi}{6}\right) = 3\sec\dfrac{\pi}{3} = \dfrac{3}{\cos(\pi/3)} = \dfrac{3}{1/2} = 6$.` },
      { id: "p311-f1c", type: "frq", skill: "u3", topic: "3.11", calc: false, set: "p311-s3", part: "(c)",
        prompt: R`Does the graph of $h$ have any $x$-intercepts? Give a reason for your answer.`,
        rows: [{ name: "Answer with reason", earns: R`No, because $h(x) = \dfrac{3}{\cos(2x)}$ has numerator $3$, so it is never $0$.` }],
        solution: R`No. An $x$-intercept needs $h(x) = 0$, but $h(x) = \dfrac{3}{\cos(2x)}$ is a fraction with numerator $3$, which is never $0$. Also, from part (a), every output satisfies $|h(x)| \ge 3$.` },
    ],
  }],
};

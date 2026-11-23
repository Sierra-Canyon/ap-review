// AP Precalculus topic quiz 3.9: Inverse Trigonometric Functions.
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

// The functions each graph draws. The verification script recomputes every key from these same rules.
const f1 = (x) => Math.acos(x);
const f2 = (x) => Math.asin(Math.sin(x));
const f3 = (x) => 3 * Math.cos(x) + 1;

export const sets = {
  "p309-s1": {
    name: "The graph of y = arccos x",
    label: "Graph",
    intro: R`The graph of $y = \arccos x$ is shown. The point $P$ on the graph has coordinates $\left(k, \dfrac{5\pi}{6}\right)$.`,
    sources: [{ title: "", blocks: [{ svg: G({
      x: [-1.6, 1.6], y: [-0.5, 3.6], step: { x: 0.5, y: PI / 6 }, xname: "x", yname: "y",
      fns: [{ f: f1, from: -1, to: 1 }],
      dots: [[-1, PI, "closed"], [1, 0, "closed"], [-Math.sqrt(3) / 2, (5 * PI) / 6, "closed"]],
      hlines: [{ y: PI / 2 }],
      labels: [[-1.2, 2.45, "P"]],
      xt: [[-1, "−1"], [1, "1"]],
      yt: [[PI / 2, "π/2"], [PI, "π"]],
      alt: "Graph of y = arccos x for x from -1 to 1. It decreases from the point (-1, pi) to the point (1, 0) and passes through (0, pi/2). A dashed horizontal line marks y = pi/2. Point P is on the graph at height 5 pi/6, to the left of the y-axis.",
    }) }] }],
  },
  "p309-s2": {
    name: "The graph of f(x) = arcsin(sin x)",
    label: "Graph",
    intro: R`The function $f$ is defined by $f(x) = \arcsin(\sin x)$. The graph of $f$ is shown for $-2\pi \le x \le 2\pi$.`,
    sources: [{ title: "", blocks: [{ svg: G({
      x: [-2 * PI - 0.3, 2 * PI + 0.3], y: [-2.2, 2.2], width: 520, step: { x: PI / 2, y: PI / 4 }, xname: "x", yname: "y",
      fns: [{ f: f2, from: -2 * PI, to: 2 * PI }],
      hlines: [{ y: PI / 2 }, { y: -PI / 2 }],
      xt: [[-2 * PI, "−2π"], [-PI, "−π"], [PI / 2, "π/2"], [PI, "π"], [(3 * PI) / 2, "3π/2"], [2 * PI, "2π"]],
      yt: [[PI / 2, "π/2"], [-PI / 2, "−π/2"]],
      alt: "Graph of f(x) = arcsin(sin x) for x from -2 pi to 2 pi. It is a zigzag of line segments between the dashed lines y = pi/2 and y = -pi/2. It rises along y = x from (-pi/2, -pi/2) to (pi/2, pi/2), falls from (pi/2, pi/2) to (3 pi/2, -pi/2), then rises again, repeating every 2 pi.",
    }) }] }],
  },
  "p309-s3": {
    name: "A restricted cosine function",
    label: "Graph",
    intro: R`The function $f$ is defined by $f(x) = 3\cos x + 1$ for $0 \le x \le \pi$. The graph of $f$ is shown with the line $y = 2.2$ (dashed).`,
    sources: [{ title: "", blocks: [{ svg: G({
      x: [-0.5, 3.7], y: [-2.6, 4.6], step: { x: PI / 4, y: 1 }, xname: "x", yname: "y",
      fns: [{ f: f3, from: 0, to: PI }],
      dots: [[0, 4, "closed"], [PI, -2, "closed"]],
      hlines: [{ y: 2.2 }],
      xt: [[PI / 2, "π/2"], [PI, "π"]],
      yt: [[4, "4"], [2, "2"], [-2, "−2"]],
      alt: "Graph of f(x) = 3 cos x + 1 for x from 0 to pi. It decreases from (0, 4) through (pi/2, 1) to (pi, -2). A dashed horizontal line marks y = 2.2 and crosses the graph once, between x = 0 and x = pi/2.",
    }) }] }],
  },
  "p309-s4": {
    name: "A restricted cosine function and its inverse",
    label: "Free response",
    intro: R`The function $f$ is defined by $f(x) = 3 - 2\cos x$ for $0 \le x \le \pi$.`,
    sources: [{ title: "", blocks: [{ p: R`Answer each part. Give exact answers, and show the work that leads to each answer.` }] }],
  },
};

export default {
  forms: [{
    id: "p309",
    name: "Topic 3.9 Quiz: Inverse Trigonometric Functions",
    group: "Unit 3: Trigonometric and Polar Functions",
    items: [
      { id: "p309-m01", type: "mcq", skill: "u3", topic: "3.9", calc: false, difficulty: "easy",
        question: R`What is the value of $\arcsin\left(-\dfrac{\sqrt{3}}{2}\right)$?`,
        choices: [R`$-\dfrac{\pi}{3}$`, R`$\dfrac{4\pi}{3}$`, R`$-\dfrac{\pi}{6}$`, R`$\dfrac{5\pi}{3}$`],
        why: [
          R`The range of arcsine is $\left[-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right]$. The only angle in that range with sine $-\dfrac{\sqrt{3}}{2}$ is $-\dfrac{\pi}{3}$.`,
          R`$\sin\dfrac{4\pi}{3} = -\dfrac{\sqrt{3}}{2}$, but $\dfrac{4\pi}{3}$ is outside the range of arcsine, $\left[-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right]$.`,
          R`$\sin\left(-\dfrac{\pi}{6}\right) = -\dfrac{1}{2}$. This is the other acute angle of the $30$-$60$-$90$ triangle.`,
          R`$\dfrac{5\pi}{3}$ is coterminal with $-\dfrac{\pi}{3}$, but it is outside the range of arcsine, so it is not the output.`,
        ], answer: 0 },
      { id: "p309-m02", type: "mcq", skill: "u3", topic: "3.9", calc: false, difficulty: "easy", set: "p309-s1",
        question: R`What is the value of $k$?`,
        choices: [R`$-\dfrac{\sqrt{3}}{2}$`, R`$\dfrac{\sqrt{3}}{2}$`, R`$\dfrac{1}{2}$`, R`$-\dfrac{1}{2}$`],
        why: [
          R`$\arccos k = \dfrac{5\pi}{6}$ means $k = \cos\dfrac{5\pi}{6} = -\dfrac{\sqrt{3}}{2}$. This matches the graph, where $P$ is left of the $y$-axis.`,
          R`$\dfrac{\sqrt{3}}{2}$ is the cosine of the reference angle $\dfrac{\pi}{6}$. An angle of $\dfrac{5\pi}{6}$ is in Quadrant II, where cosine is negative.`,
          R`$\dfrac{1}{2}$ is $\sin\dfrac{5\pi}{6}$. The input of arccosine is a cosine value.`,
          R`$-\dfrac{1}{2}$ is $\cos\dfrac{2\pi}{3}$, the cosine of a different angle.`,
        ], answer: 0 },
      { id: "p309-m03", type: "mcq", skill: "u3", topic: "3.9", calc: true, difficulty: "easy",
        question: R`What is the value of $\arctan(-5)$?`,
        choices: ["$-1.373$", "$1.768$", "$1.373$", "$-0.197$"],
        why: [
          R`The calculator gives $\arctan(-5) \approx -1.373$, which is in the range of arctangent, $\left(-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right)$.`,
          R`$1.768 \approx -1.373 + \pi$ also has tangent $-5$, but it is in Quadrant II, outside the range of arctangent, $\left(-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right)$.`,
          R`$1.373 = \arctan 5$. The negative sign was dropped.`,
          R`$-0.197 = \arctan\left(-\dfrac{1}{5}\right)$. This uses the reciprocal ratio.`,
        ], answer: 0 },
      { id: "p309-m04", type: "mcq", skill: "u3", topic: "3.9", calc: false, difficulty: "moderate",
        question: R`What is the value of $\cos\left(\arctan(-2)\right)$?`,
        choices: [R`$\dfrac{\sqrt{5}}{5}$`, R`$-\dfrac{\sqrt{5}}{5}$`, R`$\dfrac{2\sqrt{5}}{5}$`, R`$-\dfrac{2\sqrt{5}}{5}$`],
        why: [
          R`Let $\theta = \arctan(-2)$, so $-\dfrac{\pi}{2} < \theta < 0$ and $\tan\theta = -2$. A triangle with legs $1$ and $2$ has hypotenuse $\sqrt{5}$. In Quadrant IV cosine is positive, so $\cos\theta = \dfrac{1}{\sqrt{5}} = \dfrac{\sqrt{5}}{5}$.`,
          R`The angle $\arctan(-2)$ is in Quadrant IV, where cosine is positive. The negative sign belongs to sine and tangent there.`,
          R`$\dfrac{2\sqrt{5}}{5} = \dfrac{2}{\sqrt{5}}$ is opposite over hypotenuse, the size of the sine, not the cosine.`,
          R`$-\dfrac{2\sqrt{5}}{5}$ is $\sin\left(\arctan(-2)\right)$, the sine of the angle.`,
        ], answer: 0 },
      { id: "p309-m05", type: "mcq", skill: "u3", topic: "3.9", calc: true, difficulty: "moderate", set: "p309-s3",
        question: R`What is the value of $f^{-1}(2.2)$?`,
        choices: ["$1.159$", "$5.124$", "$0.412$", "$-0.766$"],
        why: [
          R`$f^{-1}(2.2)$ is the $x$ in $[0, \pi]$ with $3\cos x + 1 = 2.2$. Then $\cos x = 0.4$, so $x = \arccos 0.4 \approx 1.159$. The graph crosses the dashed line once, between $0$ and $\dfrac{\pi}{2}$, which agrees.`,
          R`$5.124 \approx 2\pi - 1.159$ also has cosine $0.4$, but it is outside the domain $0 \le x \le \pi$ of $f$, so it is not an output of $f^{-1}$.`,
          R`$0.412 = \arcsin 0.4$. The equation $\cos x = 0.4$ is solved with arccosine.`,
          R`$-0.766 \approx f(2.2) = 3\cos 2.2 + 1$. This evaluates $f$ at $2.2$ instead of finding the input that gives $2.2$.`,
        ], answer: 0 },
      { id: "p309-m06", type: "mcq", skill: "u3", topic: "3.9", calc: false, difficulty: "difficult", set: "p309-s2",
        question: R`What is the value of $f(4)$?`,
        choices: [R`$\pi - 4$`, R`$4 - \pi$`, R`$4 - 2\pi$`, "$4$"],
        why: [
          R`$f(4)$ is the angle in $\left[-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right]$ with the same sine as $4$. Since $\sin(\pi - 4) = \sin 4$ and $\pi - 4 \approx -0.86$ is in that interval, $f(4) = \pi - 4$. On the graph, $4$ lies between $\dfrac{\pi}{2}$ and $\dfrac{3\pi}{2}$, where $f(x) = \pi - x$.`,
          R`$\sin(4 - \pi) = -\sin 4$, so $4 - \pi$ has the opposite sine. It would be the value only if the graph rose on $\left[\dfrac{\pi}{2}, \dfrac{3\pi}{2}\right]$, but it falls there.`,
          R`$4 - 2\pi$ is coterminal with $4$, so it has the same sine, but $4 - 2\pi \approx -2.28$ is outside the range of arcsine, $\left[-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right]$.`,
          R`$\arcsin(\sin x) = x$ only for $x$ in $\left[-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right]$. The output of $f$ is never greater than $\dfrac{\pi}{2}$, as the graph shows.`,
        ], answer: 0 },
      { id: "p309-f1a", type: "frq", skill: "u3", topic: "3.9", calc: false, set: "p309-s4", part: "(a)",
        prompt: R`(i) Explain why $f$ has an inverse function.
(ii) Give the domain and the range of $f^{-1}$.`,
        rows: [
          { name: "(i) Reason", earns: R`States that $f$ is increasing on $[0, \pi]$ because $\cos x$ is decreasing there, so $f$ is one-to-one and has an inverse.` },
          { name: "(ii) Domain and range", earns: R`Domain of $f^{-1}$ is $[1, 5]$ and range of $f^{-1}$ is $[0, \pi]$.` },
        ],
        solution: R`(i) On $0 \le x \le \pi$, $\cos x$ decreases from $1$ to $-1$, so $3 - 2\cos x$ increases. An increasing function is one-to-one, so each output comes from exactly one input and $f$ has an inverse. (ii) $f(0) = 3 - 2 = 1$ and $f(\pi) = 3 + 2 = 5$, so the range of $f$ is $[1, 5]$. The domain of $f^{-1}$ is the range of $f$, $[1, 5]$, and the range of $f^{-1}$ is the domain of $f$, $[0, \pi]$.` },
      { id: "p309-f1b", type: "frq", skill: "u3", topic: "3.9", calc: false, set: "p309-s4", part: "(b)",
        prompt: R`Find the value of $f^{-1}(4)$.`,
        rows: [{ name: "Answer", earns: R`$f^{-1}(4) = \dfrac{2\pi}{3}$, with supporting work from $\cos x = -\dfrac{1}{2}$ on $[0, \pi]$.` }],
        solution: R`$f^{-1}(4)$ is the $x$ in $[0, \pi]$ with $3 - 2\cos x = 4$. Then $\cos x = -\dfrac{1}{2}$, so $x = \arccos\left(-\dfrac{1}{2}\right) = \dfrac{2\pi}{3}$.` },
      { id: "p309-f1c", type: "frq", skill: "u3", topic: "3.9", calc: false, set: "p309-s4", part: "(c)",
        prompt: R`Is there a value of $x$ for which $f^{-1}(x) = \dfrac{3\pi}{2}$? Give a reason for your answer.`,
        rows: [{ name: "Answer with reason", earns: R`No, because every output of $f^{-1}$ is in its range $[0, \pi]$, and $\dfrac{3\pi}{2}$ is not in $[0, \pi]$.` }],
        solution: R`No. The outputs of $f^{-1}$ are the inputs of $f$, which are in $[0, \pi]$. Since $\dfrac{3\pi}{2} > \pi$, no $x$ gives $f^{-1}(x) = \dfrac{3\pi}{2}$, even though $3 - 2\cos\dfrac{3\pi}{2} = 3$.` },
    ],
  }],
};

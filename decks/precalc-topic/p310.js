// AP Precalculus topic quiz 3.10: Trigonometric Equations and Inequalities.
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
const f1 = (x) => 3 * Math.tan(x);
const h2 = (t) => 1.5 * Math.sin((PI * t) / 4);
const L3 = (t) => 12 + 2.4 * Math.sin((2 * PI * (t - 80)) / 365);

export const sets = {
  "p310-s1": {
    name: "The graph of y = 3 tan x",
    label: "Graph",
    intro: R`The graph of $y = 3\tan x$ is shown for $0 \le x < 2\pi$, along with the line $y = 7$ (dashed).`,
    sources: [{ title: "", blocks: [{ svg: G({
      x: [-0.4, 2 * PI + 0.3], y: [-10, 10], step: { x: PI / 2, y: 2 }, xname: "x", yname: "y",
      fns: [{ f: f1, from: 0, to: 2 * PI - 0.001 }],
      vlines: [{ x: PI / 2 }, { x: (3 * PI) / 2 }],
      hlines: [{ y: 7 }],
      xt: [[PI / 2, "π/2"], [PI, "π"], [(3 * PI) / 2, "3π/2"], [2 * PI, "2π"]],
      yt: [[6, "6"], [-6, "−6"]],
      labels: [[4.7, 7.6, "y = 7"]],
      alt: "Graph of y = 3 tan x for x from 0 to 2 pi, with vertical asymptotes at x = pi/2 and x = 3 pi/2 drawn as dashed lines. The dashed horizontal line y = 7 crosses the graph twice: once between 0 and pi/2, and once between pi and 3 pi/2.",
    }) }] }],
  },
  "p310-s2": {
    name: "A buoy on waves",
    label: "Graph",
    intro: R`A buoy rises and falls on waves. Its height above its resting level is modeled by $h(t) = 1.5\sin\left(\dfrac{\pi t}{4}\right)$ meters, where $t$ is time in seconds, for $0 \le t \le 8$. The graph of $h$ is shown with the line $h = 0.75$ (dashed).`,
    sources: [{ title: "", blocks: [{ svg: graph({
      x: [-0.5, 8.6], y: [-2, 2], step: { x: 1, y: 0.5 }, xname: "t", yname: "h",
      fns: [{ f: h2, from: 0, to: 8 }],
      hlines: [{ y: 0.75 }],
      labels: [[6.4, 0.85, "h = 0.75"]],
      labelEvery: 2,
      alt: "Graph of h(t) = 1.5 sin(pi t / 4) for t from 0 to 8 seconds. It starts at 0, rises to a maximum of 1.5 at t = 2, returns to 0 at t = 4, falls to a minimum of -1.5 at t = 6, and returns to 0 at t = 8. The dashed line h = 0.75 crosses the graph twice, once before t = 2 and once after.",
    }) }] }],
  },
  "p310-s3": {
    name: "Hours of daylight",
    label: "Graph",
    intro: R`The number of hours of daylight in a city on day $t$ of the year is modeled by $L(t) = 12 + 2.4\sin\left(\dfrac{2\pi(t - 80)}{365}\right)$ for $0 \le t \le 365$. The graph of $L$ is shown with the line $L = 11$ (dashed).`,
    sources: [{ title: "", blocks: [{ svg: graph({
      x: [-20, 385], y: [8, 15.5], step: { x: 50, y: 1 }, xname: "t", yname: "L",
      fns: [{ f: L3, from: 0, to: 365 }],
      hlines: [{ y: 11 }],
      labels: [[300, 11.25, "L = 11"]],
      labelEvery: 2,
      width: 440,
      alt: "Graph of L(t) for t from 0 to 365 days. L starts near 9.6 hours, rises to a maximum of 14.4 hours near day 171, then falls to a minimum of 9.6 hours near day 354. The dashed line L = 11 crosses the graph twice: once while L is increasing, before day 80, and once while L is decreasing, between day 250 and day 300.",
    }) }] }],
  },
  "p310-s4": {
    name: "Solving cosine equations",
    label: "Free response",
    intro: R`Answer each part. Give exact answers, and show the work that leads to each answer. Angles are in radians.`,
    sources: [{ title: "", blocks: [{ p: R`No calculator is allowed on this question.` }] }],
  },
};

export default {
  forms: [{
    id: "p310",
    name: "Topic 3.10 Quiz: Trigonometric Equations and Inequalities",
    group: "Unit 3: Trigonometric and Polar Functions",
    items: [
      { id: "p310-m01", type: "mcq", skill: "u3", topic: "3.10", calc: false, difficulty: "easy",
        question: R`What are all solutions of $2\cos x + \sqrt{3} = 0$ on the interval $0 \le x < 2\pi$?`,
        choices: [R`$\dfrac{5\pi}{6}, \dfrac{7\pi}{6}$`, R`$\dfrac{\pi}{6}, \dfrac{11\pi}{6}$`, R`$\dfrac{2\pi}{3}, \dfrac{4\pi}{3}$`, R`$\dfrac{5\pi}{6}, \dfrac{11\pi}{6}$`],
        why: [
          R`$\cos x = -\dfrac{\sqrt{3}}{2}$. The reference angle is $\dfrac{\pi}{6}$, and cosine is negative in Quadrants II and III, so $x = \pi - \dfrac{\pi}{6} = \dfrac{5\pi}{6}$ and $x = \pi + \dfrac{\pi}{6} = \dfrac{7\pi}{6}$.`,
          R`These angles have $\cos x = \dfrac{\sqrt{3}}{2}$. The negative sign was lost when $\sqrt{3}$ was moved across the equal sign.`,
          R`These angles have $\cos x = -\dfrac{1}{2}$, the wrong special value.`,
          R`These angles are $\pi$ apart, the pattern for tangent. $\cos\dfrac{11\pi}{6} = \dfrac{\sqrt{3}}{2}$, which is positive.`,
        ], answer: 0 },
      { id: "p310-m02", type: "mcq", skill: "u3", topic: "3.10", calc: true, difficulty: "easy", set: "p310-s1",
        question: R`What are all solutions of $3\tan x = 7$ on the interval $0 \le x < 2\pi$?`,
        choices: ["$1.166, 4.307$", "$1.166, 1.976$", "$1.166, 5.117$", "$0.405, 3.547$"],
        why: [
          R`$\tan x = \dfrac{7}{3}$, so $x = \arctan\dfrac{7}{3} \approx 1.166$. Tangent has period $\pi$, so the other solution is $1.166 + \pi \approx 4.307$. The graph crosses the dashed line once in each of these places.`,
          R`$1.976 \approx \pi - 1.166$ is the second solution pattern for sine. Its tangent is $-\dfrac{7}{3}$.`,
          R`$5.117 \approx 2\pi - 1.166$ is the second solution pattern for cosine. Its tangent is $-\dfrac{7}{3}$.`,
          R`$0.405 = \arctan\dfrac{3}{7}$ uses the reciprocal ratio. It solves $7\tan x = 3$.`,
        ], answer: 0 },
      { id: "p310-m03", type: "mcq", skill: "u3", topic: "3.10", calc: false, difficulty: "moderate", set: "p310-s2",
        question: R`For which values of $t$ is the height of the buoy at least $0.75$ meter?`,
        choices: [R`$\dfrac{2}{3} \le t \le \dfrac{10}{3}$`, R`$\dfrac{\pi}{6} \le t \le \dfrac{5\pi}{6}$`, R`$\dfrac{1}{6} \le t \le \dfrac{5}{6}$`, R`$\dfrac{2}{3} \le t \le \dfrac{22}{3}$`],
        why: [
          R`$1.5\sin\left(\dfrac{\pi t}{4}\right) \ge 0.75$ means $\sin\left(\dfrac{\pi t}{4}\right) \ge \dfrac{1}{2}$. With $0 \le \dfrac{\pi t}{4} \le 2\pi$, this holds for $\dfrac{\pi}{6} \le \dfrac{\pi t}{4} \le \dfrac{5\pi}{6}$. Multiplying by $\dfrac{4}{\pi}$ gives $\dfrac{2}{3} \le t \le \dfrac{10}{3}$.`,
          R`These are the values of the argument $\dfrac{\pi t}{4}$, not of $t$. Each must still be multiplied by $\dfrac{4}{\pi}$.`,
          R`These come from solving $\pi t = \dfrac{\pi}{6}$ and $\pi t = \dfrac{5\pi}{6}$, which ignores the $4$ in $\dfrac{\pi t}{4}$.`,
          R`$\dfrac{22}{3}$ comes from $\dfrac{\pi t}{4} = \dfrac{11\pi}{6}$, an angle where sine is $-\dfrac{1}{2}$. The graph shows the buoy below $0.75$ meter after $t = \dfrac{10}{3}$.`,
        ], answer: 0 },
      { id: "p310-m04", type: "mcq", skill: "u3", topic: "3.10", calc: true, difficulty: "moderate",
        question: R`The height of the tip of a wind turbine blade above the ground is modeled by $h(t) = 40 - 25\cos\left(\dfrac{\pi t}{2}\right)$ meters, where $t$ is time in seconds. What is the first time $t > 0$ at which the tip is $55$ meters above the ground?`,
        choices: ["$1.410$", "$2.214$", "$0.590$", "$2.590$"],
        why: [
          R`$40 - 25\cos\left(\dfrac{\pi t}{2}\right) = 55$ gives $\cos\left(\dfrac{\pi t}{2}\right) = -0.6$. The smallest positive angle is $\arccos(-0.6) \approx 2.2143$, so $t = \dfrac{2(2.2143)}{\pi} \approx 1.410$ seconds.`,
          R`$2.214$ is the angle $\dfrac{\pi t}{2}$, not the time. It must be multiplied by $\dfrac{2}{\pi}$.`,
          R`$0.590$ comes from $\cos\left(\dfrac{\pi t}{2}\right) = 0.6$. At that time the tip is $40 - 25(0.6) = 25$ meters high.`,
          R`$2.590$ comes from the angle $2\pi - 2.2143$. The tip is at $55$ meters then, but for the second time.`,
        ], answer: 0 },
      { id: "p310-m05", type: "mcq", skill: "u3", topic: "3.10", calc: false, difficulty: "difficult",
        question: R`What is the sum of all solutions of $\tan(2x) = -1$ on the interval $0 \le x < 2\pi$?`,
        choices: [R`$\dfrac{9\pi}{2}$`, R`$\dfrac{7\pi}{4}$`, R`$\dfrac{5\pi}{2}$`, R`$\dfrac{7\pi}{2}$`],
        why: [
          R`$2x = \dfrac{3\pi}{4} + n\pi$, so $x = \dfrac{3\pi}{8} + \dfrac{n\pi}{2}$. On $[0, 2\pi)$ the solutions are $\dfrac{3\pi}{8}, \dfrac{7\pi}{8}, \dfrac{11\pi}{8}, \dfrac{15\pi}{8}$, and their sum is $\dfrac{36\pi}{8} = \dfrac{9\pi}{2}$.`,
          R`$\dfrac{7\pi}{4} = \dfrac{3\pi}{8} + \dfrac{11\pi}{8}$ uses solutions $\pi$ apart. The period of $\tan(2x)$ is $\dfrac{\pi}{2}$, so there are four solutions.`,
          R`$\dfrac{5\pi}{2} = \dfrac{3\pi}{4} + \dfrac{7\pi}{4}$ adds the solutions for $2x$ on $[0, 2\pi)$ without dividing by $2$.`,
          R`$\dfrac{7\pi}{2}$ is the sum of the solutions of $\tan(2x) = 1$: $\dfrac{\pi}{8} + \dfrac{5\pi}{8} + \dfrac{9\pi}{8} + \dfrac{13\pi}{8}$. The sign was dropped.`,
        ], answer: 0 },
      { id: "p310-m06", type: "mcq", skill: "u3", topic: "3.10", calc: true, difficulty: "difficult", set: "p310-s3",
        question: R`On which day $t$ is the length of daylight $11$ hours and decreasing?`,
        choices: ["$287.466$", "$55.034$", "$104.966$", "$262.500$"],
        why: [
          R`$\sin\left(\dfrac{2\pi(t - 80)}{365}\right) = \dfrac{11 - 12}{2.4} = -\dfrac{5}{12}$. $L$ is decreasing where the argument is between $\dfrac{\pi}{2}$ and $\dfrac{3\pi}{2}$, so the argument is $\pi - \arcsin\left(-\dfrac{5}{12}\right) \approx 3.5714$. Then $t = 80 + \dfrac{365(3.5714)}{2\pi} \approx 287.466$.`,
          R`$55.034$ comes from the calculator's value $\arcsin\left(-\dfrac{5}{12}\right) \approx -0.4298$. On that day the daylight is $11$ hours but increasing.`,
          R`$104.966$ comes from $+0.4298$, with the sign dropped. On that day the daylight is $13$ hours.`,
          R`$262.500$ is $80 + \dfrac{365}{2}$, where the decreasing graph crosses its midline, $L = 12$.`,
        ], answer: 0 },
      { id: "p310-f1a", type: "frq", skill: "u3", topic: "3.10", calc: false, set: "p310-s4", part: "(a)",
        prompt: R`Solve $4\cos^{2}x - 3 = 0$ for $0 \le x < 2\pi$.`,
        rows: [{ name: "Solutions", earns: R`$x = \dfrac{\pi}{6}, \dfrac{5\pi}{6}, \dfrac{7\pi}{6}, \dfrac{11\pi}{6}$, with supporting work from $\cos x = \pm\dfrac{\sqrt{3}}{2}$.` }],
        solution: R`$\cos^{2}x = \dfrac{3}{4}$, so $\cos x = \dfrac{\sqrt{3}}{2}$ or $\cos x = -\dfrac{\sqrt{3}}{2}$. The first gives $x = \dfrac{\pi}{6}, \dfrac{11\pi}{6}$, and the second gives $x = \dfrac{5\pi}{6}, \dfrac{7\pi}{6}$.` },
      { id: "p310-f1b", type: "frq", skill: "u3", topic: "3.10", calc: false, set: "p310-s4", part: "(b)",
        prompt: R`Find all values of $x$ for which $2\cos(2x) + 1 = 0$. Express the answer in terms of an integer $n$.`,
        rows: [
          { name: "Base angles", earns: R`$2x = \dfrac{2\pi}{3}$ and $2x = \dfrac{4\pi}{3}$ (or $x = \dfrac{\pi}{3}$ and $x = \dfrac{2\pi}{3}$) from $\cos(2x) = -\dfrac{1}{2}$.` },
          { name: "General solution", earns: R`$x = \dfrac{\pi}{3} + n\pi$ or $x = \dfrac{2\pi}{3} + n\pi$, where $n$ is any integer.` },
        ],
        solution: R`$\cos(2x) = -\dfrac{1}{2}$, so $2x = \dfrac{2\pi}{3} + 2n\pi$ or $2x = \dfrac{4\pi}{3} + 2n\pi$. Dividing by $2$, $x = \dfrac{\pi}{3} + n\pi$ or $x = \dfrac{2\pi}{3} + n\pi$, where $n$ is any integer.` },
      { id: "p310-f1c", type: "frq", skill: "u3", topic: "3.10", calc: false, set: "p310-s4", part: "(c)",
        prompt: R`Solve $2\cos(2x) + 1 < 0$ for $0 \le x \le \pi$.`,
        rows: [{ name: "Interval", earns: R`$\dfrac{\pi}{3} < x < \dfrac{2\pi}{3}$, with supporting work from the zeros found in part (b).` }],
        solution: R`For $0 \le x \le \pi$, $0 \le 2x \le 2\pi$. The inequality is $\cos(2x) < -\dfrac{1}{2}$, which holds for $\dfrac{2\pi}{3} < 2x < \dfrac{4\pi}{3}$. So $\dfrac{\pi}{3} < x < \dfrac{2\pi}{3}$. A check: at $x = \dfrac{\pi}{2}$, $2\cos\pi + 1 = -1 < 0$.` },
    ],
  }],
};

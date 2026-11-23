// AP Precalculus topic quiz, Topic 3.8: The Tangent Function.
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

// The function the graph draws. The verification script recomputes every key from this rule.
const f1 = (x) => 1 - Math.tan(2 * x);

export const sets = {
  "p308-s1": {
    name: "A transformed tangent graph",
    label: "Graph",
    intro: R`The graph of the function $f$ is shown. The dashed lines $x = -\dfrac{3\pi}{4}$, $x = -\dfrac{\pi}{4}$, $x = \dfrac{\pi}{4}$, and $x = \dfrac{3\pi}{4}$ are vertical asymptotes, and the points $\left(-\dfrac{\pi}{8}, 2\right)$, $(0, 1)$, and $\left(\dfrac{\pi}{8}, 0\right)$ are on the graph.`,
    sources: [{ title: "", blocks: [{ svg: G({
      x: [-2.6, 2.6], y: [-4, 6], step: { x: PI / 4, y: 1 }, xname: "x", yname: "y", width: 400,
      fns: [
        { f: f1, from: -3 * PI / 4 + 0.08, to: -PI / 4 - 0.08 },
        { f: f1, from: -PI / 4 + 0.08, to: PI / 4 - 0.08 },
        { f: f1, from: PI / 4 + 0.08, to: 3 * PI / 4 - 0.08 },
      ],
      vlines: [{ x: -3 * PI / 4, dash: true }, { x: -PI / 4, dash: true }, { x: PI / 4, dash: true }, { x: 3 * PI / 4, dash: true }],
      dots: [[-PI / 8, 2, "closed"], [0, 1, "closed"], [PI / 8, 0, "closed"]],
      xt: [[-3 * PI / 4, "−3π/4"], [-PI / 4, "−π/4"], [PI / 4, "π/4"], [3 * PI / 4, "3π/4"]],
      yt: [[2, "2"], [4, "4"], [-2, "−2"]],
      alt: "Three decreasing branches of a tangent-shaped curve between dashed vertical asymptotes at x = -3pi/4, -pi/4, pi/4, and 3pi/4. The middle branch comes down from the top near x = -pi/4, passes through (-pi/8, 2), (0, 1), and (pi/8, 0), and falls without bound near x = pi/4. The other two branches have the same shape.",
    }) }] }],
  },
  "p308-s2": {
    name: "A shifted tangent function",
    label: "Free response",
    intro: R`The function $g$ is given by $g(x) = 2\tan\left(x - \dfrac{\pi}{4}\right) + 1$.`,
    sources: [{ title: "", blocks: [{ p: "Answer each part. Give exact answers, and show the work that leads to each answer." }] }],
  },
};

export default {
  forms: [{
    id: "p308",
    name: "Topic 3.8 Quiz: The Tangent Function",
    group: "Unit 3: Trigonometric and Polar Functions",
    items: [
      { id: "p308-m01", type: "mcq", skill: "u3", topic: "3.8", calc: false, difficulty: "easy",
        question: R`An angle of $\dfrac{2\pi}{3}$ radians is in standard position. What is the slope of its terminal ray?`,
        choices: [R`$-\sqrt{3}$`, R`$-\frac{\sqrt{3}}{3}$`, R`$\frac{\sqrt{3}}{2}$`, R`$-\frac{1}{2}$`],
        why: [
          R`The terminal ray passes through $\left(\cos\dfrac{2\pi}{3}, \sin\dfrac{2\pi}{3}\right) = \left(-\dfrac{1}{2}, \dfrac{\sqrt{3}}{2}\right)$ and the origin. Its slope is $\dfrac{\sqrt{3}/2}{-1/2} = -\sqrt{3}$, which is $\tan\dfrac{2\pi}{3}$.`,
          R`$-\dfrac{\sqrt{3}}{3}$ divides the $x$-coordinate by the $y$-coordinate. Slope is the change in $y$ over the change in $x$.`,
          R`$\dfrac{\sqrt{3}}{2}$ is $\sin\dfrac{2\pi}{3}$, the $y$-coordinate of the point on the unit circle. The slope also divides by the $x$-coordinate.`,
          R`$-\dfrac{1}{2}$ is $\cos\dfrac{2\pi}{3}$, the $x$-coordinate of the point on the unit circle. The slope is $\dfrac{\sin\theta}{\cos\theta}$.`,
        ], answer: 0 },
      { id: "p308-m02", type: "mcq", skill: "u3", topic: "3.8", calc: false, difficulty: "easy", set: "p308-s1",
        question: R`What is the period of $f$?`,
        choices: [R`$\frac{\pi}{2}$`, R`$\pi$`, R`$\frac{\pi}{4}$`, R`$2\pi$`],
        why: [
          R`Consecutive vertical asymptotes, such as $x = -\dfrac{\pi}{4}$ and $x = \dfrac{\pi}{4}$, are one period apart. The period is $\dfrac{\pi}{4} - \left(-\dfrac{\pi}{4}\right) = \dfrac{\pi}{2}$.`,
          R`$\pi$ is the period of $y = \tan x$. The asymptotes of $f$ are closer together than those of $\tan x$, so its period is shorter.`,
          R`$\dfrac{\pi}{4}$ is the distance from the asymptote at $x = -\dfrac{\pi}{4}$ to the point $(0, 1)$, half of one branch. A period spans a whole branch.`,
          R`$2\pi$ is $\pi$ times $2$, the horizontal factor in $\tan(2x)$. The period of $\tan(bx)$ is $\dfrac{\pi}{b}$, not $\pi b$.`,
        ], answer: 0 },
      { id: "p308-m03", type: "mcq", skill: "u3", topic: "3.8", calc: false, difficulty: "moderate", set: "p308-s1",
        question: R`Which of the following could be an equation for $f$?`,
        choices: [R`$f(x) = 1 - \tan(2x)$`, R`$f(x) = 1 + \tan(2x)$`, R`$f(x) = 1 - \tan\left(\frac{x}{2}\right)$`, R`$f(x) = -\tan(2x) - 1$`],
        why: [
          R`The branches decrease, so the tangent is reflected. The period $\dfrac{\pi}{2}$ gives $b = 2$, and the center point $(0, 1)$ gives a vertical shift of $1$. Check: $1 - \tan\left(2 \cdot \dfrac{\pi}{8}\right) = 1 - 1 = 0$.`,
          R`$1 + \tan(2x)$ increases on each branch, and at $x = \dfrac{\pi}{8}$ it equals $2$, not $0$. The graph of $f$ decreases.`,
          R`$\tan\left(\dfrac{x}{2}\right)$ has period $2\pi$. A period of $\dfrac{\pi}{2}$ needs $b = 2$, since the period of $\tan(bx)$ is $\dfrac{\pi}{b}$.`,
          R`This shifts the graph down $1$, so it passes through $(0, -1)$. The graph of $f$ passes through $(0, 1)$.`,
        ], answer: 0 },
      { id: "p308-m04", type: "mcq", skill: "u3", topic: "3.8", calc: false, difficulty: "moderate",
        question: R`If $\tan\theta = -3$ and $\sin\theta > 0$, what is the value of $\cos\theta$?`,
        choices: [R`$-\frac{\sqrt{10}}{10}$`, R`$\frac{\sqrt{10}}{10}$`, R`$-\frac{3\sqrt{10}}{10}$`, R`$-\frac{1}{3}$`],
        why: [
          R`$\tan\theta < 0$ and $\sin\theta > 0$ put $\theta$ in Quadrant II, where $\cos\theta < 0$. A point on the terminal ray is $(-1, 3)$, at distance $\sqrt{10}$ from the origin, so $\cos\theta = \dfrac{-1}{\sqrt{10}} = -\dfrac{\sqrt{10}}{10}$.`,
          R`$\dfrac{\sqrt{10}}{10}$ has the right size but the wrong sign. In Quadrant II the cosine is negative.`,
          R`$-\dfrac{3\sqrt{10}}{10}$ uses the $y$-coordinate, $3$, over $\sqrt{10}$. That ratio is the sine, and the sine is positive here.`,
          R`$-\dfrac{1}{3}$ is $\dfrac{1}{\tan\theta}$, which is the cotangent. The cosine is $\dfrac{x}{r}$, where $r = \sqrt{10}$.`,
        ], answer: 0 },
      { id: "p308-m05", type: "mcq", skill: "u3", topic: "3.8", calc: false, difficulty: "difficult",
        question: R`The function $h$ is given by $h(x) = a\tan(bx) + d$, where $a$, $b$, and $d$ are constants and $b > 0$. The period of $h$ is $4$, $h(0) = 2$, and $h(1) = 5$. What is the value of $h\left(\dfrac{10}{3}\right)$?`,
        choices: [R`$2 - \sqrt{3}$`, R`$2 + \sqrt{3}$`, R`$2 - 3\sqrt{3}$`, R`$2 - \frac{5\sqrt{3}}{3}$`],
        why: [
          R`The period is $\dfrac{\pi}{b} = 4$, so $b = \dfrac{\pi}{4}$. $h(0) = d = 2$, and $h(1) = a\tan\dfrac{\pi}{4} + 2 = a + 2 = 5$, so $a = 3$. Then $h\left(\dfrac{10}{3}\right) = 3\tan\dfrac{5\pi}{6} + 2 = 3\left(-\dfrac{\sqrt{3}}{3}\right) + 2 = 2 - \sqrt{3}$.`,
          R`This uses $\tan\dfrac{5\pi}{6} = \dfrac{\sqrt{3}}{3}$. The angle $\dfrac{5\pi}{6}$ is in Quadrant II, where the tangent is negative.`,
          R`This uses $\tan\dfrac{5\pi}{6} = -\sqrt{3}$, the tangent of $\dfrac{2\pi}{3}$. The reference angle of $\dfrac{5\pi}{6}$ is $\dfrac{\pi}{6}$, so $\tan\dfrac{5\pi}{6} = -\dfrac{\sqrt{3}}{3}$.`,
          R`This takes $a = 5$, the value of $h(1)$. Since $h(1) = a + d$, the vertical shift must be subtracted first: $a = 5 - 2 = 3$.`,
        ], answer: 0 },
      { id: "p308-m06", type: "mcq", skill: "u3", topic: "3.8", calc: false, difficulty: "easy",
        question: R`Which of the following is a vertical asymptote of the graph of $y = \tan\left(x + \dfrac{\pi}{4}\right)$?`,
        choices: [R`$x = \frac{\pi}{4}$`, R`$x = \frac{3\pi}{4}$`, R`$x = -\frac{\pi}{4}$`, R`$x = \frac{3\pi}{2}$`],
        why: [
          R`$\tan u$ is undefined at $u = \dfrac{\pi}{2}$. Setting $x + \dfrac{\pi}{4} = \dfrac{\pi}{2}$ gives $x = \dfrac{\pi}{4}$.`,
          R`$\dfrac{3\pi}{4}$ is $\dfrac{\pi}{2} + \dfrac{\pi}{4}$, a shift to the right. Adding $\dfrac{\pi}{4}$ inside the function shifts the graph left, and at $x = \dfrac{3\pi}{4}$ the argument is $\pi$, a zero.`,
          R`At $x = -\dfrac{\pi}{4}$ the argument is $0$, so this is a zero of the function, not an asymptote. The asymptotes are where the cosine of the argument is $0$.`,
          R`$x = \dfrac{3\pi}{2}$ is an asymptote of $y = \tan x$. The shift moves every asymptote $\dfrac{\pi}{4}$ to the left, to $x = \dfrac{5\pi}{4}$.`,
        ], answer: 0 },
      { id: "p308-f1a", type: "frq", skill: "u3", topic: "3.8", calc: false, set: "p308-s2", part: "(a)",
        prompt: R`Find the period of $g$, and find the equations of all vertical asymptotes of the graph of $g$ for $0 \le x \le 2\pi$.`,
        rows: [{ name: "Period and asymptotes", earns: R`The period is $\pi$, and the vertical asymptotes are $x = \dfrac{3\pi}{4}$ and $x = \dfrac{7\pi}{4}$, with no others.` }],
        solution: R`The coefficient of $x$ is $1$, so the period is $\pi$. The tangent is undefined where $x - \dfrac{\pi}{4} = \dfrac{\pi}{2} + k\pi$ for an integer $k$, so $x = \dfrac{3\pi}{4} + k\pi$. For $0 \le x \le 2\pi$ these are $x = \dfrac{3\pi}{4}$ and $x = \dfrac{7\pi}{4}$.` },
      { id: "p308-f1b", type: "frq", skill: "u3", topic: "3.8", calc: false, set: "p308-s2", part: "(b)",
        prompt: R`Solve $g(x) = 3$ for $0 \le x \le 2\pi$.`,
        rows: [{ name: "Solutions", earns: R`$x = \dfrac{\pi}{2}$ and $x = \dfrac{3\pi}{2}$, from $\tan\left(x - \dfrac{\pi}{4}\right) = 1$, with no other values.` }],
        solution: R`$2\tan\left(x - \dfrac{\pi}{4}\right) + 1 = 3$ gives $\tan\left(x - \dfrac{\pi}{4}\right) = 1$, so $x - \dfrac{\pi}{4} = \dfrac{\pi}{4} + k\pi$ and $x = \dfrac{\pi}{2} + k\pi$. For $0 \le x \le 2\pi$ the solutions are $x = \dfrac{\pi}{2}$ and $x = \dfrac{3\pi}{2}$.` },
      { id: "p308-f1c", type: "frq", skill: "u3", topic: "3.8", calc: false, set: "p308-s2", part: "(c)",
        prompt: R`Find the average rate of change of $g$ over the interval $\left[\dfrac{\pi}{4}, \dfrac{5\pi}{12}\right]$ and over the interval $\left[\dfrac{5\pi}{12}, \dfrac{7\pi}{12}\right]$. Explain how the comparison of these two values is consistent with the concavity of the graph of $g$.`,
        rows: [
          { name: "Average rates of change", earns: R`$\dfrac{4\sqrt{3}}{\pi}$ over $\left[\dfrac{\pi}{4}, \dfrac{5\pi}{12}\right]$ and $\dfrac{8\sqrt{3}}{\pi}$ over $\left[\dfrac{5\pi}{12}, \dfrac{7\pi}{12}\right]$, with supporting work.` },
          { name: "Concavity", earns: R`The second rate is greater. This fits the graph of $g$ being concave up on $\dfrac{\pi}{4} < x < \dfrac{3\pi}{4}$ (between its inflection point at $x = \dfrac{\pi}{4}$ and the asymptote), where the average rates of change over consecutive equal-length intervals increase.` },
        ],
        solution: R`$g\left(\dfrac{\pi}{4}\right) = 2\tan 0 + 1 = 1$, $g\left(\dfrac{5\pi}{12}\right) = 2\tan\dfrac{\pi}{6} + 1 = 1 + \dfrac{2\sqrt{3}}{3}$, and $g\left(\dfrac{7\pi}{12}\right) = 2\tan\dfrac{\pi}{3} + 1 = 1 + 2\sqrt{3}$. Each interval has length $\dfrac{\pi}{6}$. The first average rate of change is $\dfrac{2\sqrt{3}/3}{\pi/6} = \dfrac{4\sqrt{3}}{\pi}$. The second is $\dfrac{2\sqrt{3} - 2\sqrt{3}/3}{\pi/6} = \dfrac{4\sqrt{3}/3}{\pi/6} = \dfrac{8\sqrt{3}}{\pi}$. The second is greater. The point $\left(\dfrac{\pi}{4}, 1\right)$ is the center of a branch, and to its right, up to the asymptote at $x = \dfrac{3\pi}{4}$, the graph of $g$ is concave up, so its average rates of change over consecutive equal-length intervals increase.` },
    ],
  }],
};

// AP Precalculus topic quiz, Topic 3.4: Sine and Cosine Function Graphs.
import { graph } from "../../plot.js";

const P = Math.PI;
// Tick labels in multiples of pi, written as text on the graph.
const piTicks = (list, y) => list.map(([x, t]) => [x - 0.18 * t.length * 0.5, y, t]);

export const sets = {
  "p304-s1": {
    name: "The graph of y = sin x",
    label: "Graph",
    intro: String.raw`The graph of $y = \sin x$ for $-2\pi \le x \le 2\pi$ is shown below.`,
    sources: [{ title: "", blocks: [{ svg: graph({
      x: [-2 * P - 0.4, 2 * P + 0.4], y: [-1.5, 1.5], step: { x: P / 2, y: 0.5 }, labelEvery: 1000, xname: "x", yname: "y", width: 420,
      fns: [{ f: Math.sin, from: -2 * P, to: 2 * P }],
      labels: [...piTicks([[-2 * P, "−2π"], [-P, "−π"], [P, "π"], [2 * P, "2π"]], -0.3), [-0.5, 1.03, "1"], [-0.62, -1.08, "−1"]],
      alt: "Graph of y = sin x from x = -2 pi to x = 2 pi, two full cycles. It has maximum value 1 at x = -3 pi/2 and x = pi/2, minimum value -1 at x = -pi/2 and x = 3 pi/2, and zeros at -2 pi, -pi, 0, pi, and 2 pi. Grid lines are drawn every pi/2.",
    }) }] }],
  },
  "p304-s2": {
    name: "Cosine and a horizontal line",
    label: "Graph",
    intro: String.raw`The graph of $y = \cos\theta$ for $0 \le \theta \le 2\pi$ is shown below, with the dashed line $y = k$, where $0 < k < 1$. The line meets the graph at $\theta = a$ and $\theta = b$, where $0 < a < b < 2\pi$.`,
    sources: [{ title: "", blocks: [{ svg: graph({
      x: [-0.4, 2 * P + 0.5], y: [-1.5, 1.5], step: { x: P / 2, y: 0.5 }, labelEvery: 1000, xname: "θ", yname: "y",
      fns: [{ f: Math.cos, from: 0, to: 2 * P }],
      hlines: [{ y: 0.4 }],
      dots: [[Math.acos(0.4), 0.4, "closed"], [2 * P - Math.acos(0.4), 0.4, "closed"]],
      labels: [[Math.acos(0.4) - 0.1, 0.1, "a"], [2 * P - Math.acos(0.4) - 0.1, 0.1, "b"], [P - 0.1, -0.3, "π"], [2 * P - 0.2, -0.3, "2π"], [-0.35, 1.03, "1"], [-0.4, 0.43, "k"], [-0.45, -1.08, "−1"]],
      alt: "Graph of y = cos theta from 0 to 2 pi. It starts at (0, 1), falls to -1 at pi, and rises back to 1 at 2 pi. A dashed horizontal line y = k, a little below the midpoint between 0 and 1, crosses the curve at theta = a, a little less than pi/2, and at theta = b, a little more than 3 pi/2.",
    }) }] }],
  },
  "p304-s3": {
    name: "Sine and cosine on one cycle",
    label: "Free response",
    intro: String.raw`The point $P$ moves counterclockwise around the unit circle. When the angle in standard position whose terminal ray passes through $P$ is $\theta$, the coordinates of $P$ are $\bigl(g(\theta), f(\theta)\bigr)$, where $f(\theta) = \sin\theta$ and $g(\theta) = \cos\theta$, for $0 \le \theta \le 2\pi$.`,
    sources: [{ title: "", blocks: [{ p: "Answer each part. Give a reason for each answer." }] }],
  },
};

export default {
  forms: [{
    id: "p304",
    name: "Topic 3.4 Quiz: Sine and Cosine Function Graphs",
    group: "Unit 3: Trigonometric and Polar Functions",
    items: [
      { id: "p304-m01", type: "mcq", skill: "u3", topic: "3.4", calc: false, difficulty: "easy",
        question: String.raw`What are the zeros of $y = \cos\theta$ on the interval $0 \le \theta \le 2\pi$?`,
        choices: [String.raw`$\frac{\pi}{2}$ and $\frac{3\pi}{2}$`, String.raw`$0$, $\pi$, and $2\pi$`, String.raw`$\pi$ only`, String.raw`$0$ and $2\pi$`],
        why: [
          String.raw`$\cos\theta$ is the horizontal displacement of the point on the unit circle. It is $0$ when the point is on the $y$-axis, at $\theta = \dfrac{\pi}{2}$ and $\theta = \dfrac{3\pi}{2}$.`,
          String.raw`These are the zeros of $\sin\theta$, where the point is on the $x$-axis.`,
          String.raw`At $\theta = \pi$, $\cos\theta = -1$, its least value, not $0$.`,
          String.raw`At $\theta = 0$ and $\theta = 2\pi$, $\cos\theta = 1$, its greatest value, not $0$.`,
        ], answer: 0 },
      { id: "p304-m02", type: "mcq", skill: "u3", topic: "3.4", calc: false, difficulty: "easy", set: "p304-s1",
        question: String.raw`On which of the following intervals is $y = \sin x$ both decreasing and positive?`,
        choices: [String.raw`$\left(-\frac{3\pi}{2}, -\pi\right)$`, String.raw`$\left(-\pi, -\frac{\pi}{2}\right)$`, String.raw`$\left(-2\pi, -\frac{3\pi}{2}\right)$`, String.raw`$\left(-\frac{\pi}{2}, 0\right)$`],
        why: [
          String.raw`On $\left(-\dfrac{3\pi}{2}, -\pi\right)$ the graph falls from its maximum $1$ to the zero at $-\pi$, staying above the $x$-axis.`,
          String.raw`The graph is decreasing here, from $0$ down to $-1$, but it is below the $x$-axis.`,
          String.raw`The graph is positive here, but it rises from $0$ at $-2\pi$ to $1$ at $-\dfrac{3\pi}{2}$.`,
          String.raw`The graph rises from $-1$ to $0$ here, so it is increasing and negative.`,
        ], answer: 0 },
      { id: "p304-m03", type: "mcq", skill: "u3", topic: "3.4", calc: false, difficulty: "moderate",
        question: String.raw`A light is fixed to the edge of a disk of radius $3$ centimeters centered at the origin. At time $t = 0$ seconds the light is at $(3, 0)$, and the disk turns counterclockwise at a constant rate, one revolution every $4$ seconds. Which function gives the $y$-coordinate of the light at time $t$?`,
        choices: [String.raw`$3\sin\left(\frac{\pi t}{2}\right)$`, String.raw`$3\cos\left(\frac{\pi t}{2}\right)$`, String.raw`$3\sin(4t)$`, String.raw`$3\sin(8\pi t)$`],
        why: [
          String.raw`The angle turned is $\dfrac{2\pi}{4}t = \dfrac{\pi t}{2}$ radians, and the vertical displacement on a circle of radius $3$ is $3\sin\theta$. So $y = 3\sin\left(\dfrac{\pi t}{2}\right)$.`,
          String.raw`$3\cos\left(\dfrac{\pi t}{2}\right)$ is the $x$-coordinate, the horizontal displacement.`,
          String.raw`$3\sin(4t)$ uses the time for one revolution as the rate. The angle grows by $2\pi$ every $4$ seconds, which is $\dfrac{\pi}{2}$ radian per second.`,
          String.raw`$3\sin(8\pi t)$ multiplies $2\pi$ by $4$ instead of dividing by it. That disk would turn $4$ times every second.`,
        ], answer: 0 },
      { id: "p304-m04", type: "mcq", skill: "u3", topic: "3.4", calc: false, difficulty: "moderate", set: "p304-s2",
        question: String.raw`Which of the following expresses $b$ in terms of $a$?`,
        choices: [String.raw`$2\pi - a$`, String.raw`$\pi - a$`, String.raw`$\pi + a$`, String.raw`$2\pi + a$`],
        why: [
          String.raw`The graph of cosine on $[0, 2\pi]$ is symmetric about $\theta = \pi$, so the second input with the same output is as far before $2\pi$ as $a$ is after $0$: $b = 2\pi - a$. On the unit circle, the angle $2\pi - a$ reflects the point over the $x$-axis, which keeps the $x$-coordinate.`,
          String.raw`$\pi - a$ is the symmetry of sine: $\sin(\pi - a) = \sin a$. For cosine, $\cos(\pi - a) = -\cos a = -k$.`,
          String.raw`$\pi + a$ gives the point opposite through the origin, so $\cos(\pi + a) = -k$.`,
          String.raw`$2\pi + a$ is coterminal with $a$. It gives the same output, but it is greater than $2\pi$, outside the graph.`,
        ], answer: 0 },
      { id: "p304-m05", type: "mcq", skill: "u3", topic: "3.4", calc: true, difficulty: "difficult",
        question: String.raw`A Ferris wheel has a radius of $20$ meters, and its center is $23$ meters above the ground. It turns at a constant rate, one revolution every $8$ minutes. At $t = 0$ a seat is level with the center on the right side of the wheel and is moving upward. To the nearest thousandth of a meter, how high above the ground is the seat at $t = 2.5$ minutes?`,
        choices: [String.raw`$41.478$`, String.raw`$15.346$`, String.raw`$23.685$`, String.raw`$41.259$`],
        why: [
          String.raw`The seat starts at the center's height and rises first, so its height is $h(t) = 23 + 20\sin\left(\dfrac{2\pi}{8}t\right)$. Then $h(2.5) = 23 + 20\sin(0.625\pi) \approx 23 + 18.478 = 41.478$ meters.`,
          String.raw`This uses $23 + 20\cos\left(\dfrac{2\pi}{8}t\right)$, which starts at the top of the wheel. A seat level with the center starts at the midline.`,
          String.raw`This evaluates $\sin(0.625\pi)$ with the angle read in degrees. The model's angle is in radians.`,
          String.raw`This uses $23 + 20\sin(8t)$, with the period in place of $\dfrac{2\pi}{8}$.`,
        ], answer: 0 },
      { id: "p304-m06", type: "mcq", skill: "u3", topic: "3.4", calc: false, difficulty: "easy",
        question: String.raw`The point $P$ is on the unit circle, on the terminal ray of the angle $-\dfrac{2\pi}{3}$ in standard position. Which of the following gives the vertical displacement of $P$ from the $x$-axis?`,
        choices: [String.raw`$\sin\left(-\frac{2\pi}{3}\right)$`, String.raw`$\cos\left(-\frac{2\pi}{3}\right)$`, String.raw`$\sin\left(\frac{2\pi}{3}\right)$`, String.raw`$\tan\left(-\frac{2\pi}{3}\right)$`],
        why: [
          String.raw`The point on the unit circle at angle $\theta$ is $(\cos\theta, \sin\theta)$, so its vertical displacement is $\sin\left(-\dfrac{2\pi}{3}\right) = -\dfrac{\sqrt{3}}{2}$.`,
          String.raw`Cosine gives the horizontal displacement, the $x$-coordinate.`,
          String.raw`$\sin\dfrac{2\pi}{3}$ belongs to the angle measured counterclockwise. The angle $-\dfrac{2\pi}{3}$ ends below the $x$-axis, so its sine is negative.`,
          String.raw`Tangent is the slope of the terminal ray, not a displacement.`,
        ], answer: 0 },
      { id: "p304-f1a", type: "frq", skill: "u3", topic: "3.4", calc: false, set: "p304-s3", part: "(a)",
        prompt: String.raw`On which interval of $\theta$ are $f$ and $g$ both decreasing?`,
        rows: [{ name: "Interval", earns: String.raw`$\dfrac{\pi}{2} < \theta < \pi$, from $f$ decreasing on $\left(\dfrac{\pi}{2}, \dfrac{3\pi}{2}\right)$ and $g$ decreasing on $(0, \pi)$.` }],
        solution: String.raw`$f(\theta) = \sin\theta$ decreases on $\left(\dfrac{\pi}{2}, \dfrac{3\pi}{2}\right)$, and $g(\theta) = \cos\theta$ decreases on $(0, \pi)$. Both decrease on the overlap, $\dfrac{\pi}{2} < \theta < \pi$.` },
      { id: "p304-f1b", type: "frq", skill: "u3", topic: "3.4", calc: false, set: "p304-s3", part: "(b)",
        prompt: String.raw`Explain, in terms of the motion of $P$, why both $f(\theta)$ and $g(\theta)$ decrease on the interval in part (a).`,
        rows: [{ name: "Explanation", earns: String.raw`States that $P$ moves through quadrant II from $(0, 1)$ to $(-1, 0)$, so it moves down (its vertical displacement $f$ decreases) and left (its horizontal displacement $g$ decreases).` }],
        solution: String.raw`For $\dfrac{\pi}{2} < \theta < \pi$, $P$ travels through quadrant II from $(0, 1)$ to $(-1, 0)$. Along this arc $P$ moves down, so its $y$-coordinate $f(\theta)$ decreases, and it moves left, so its $x$-coordinate $g(\theta)$ decreases.` },
      { id: "p304-f1c", type: "frq", skill: "u3", topic: "3.4", calc: false, set: "p304-s3", part: "(c)",
        prompt: String.raw`Is there a value of $\theta$ in $0 \le \theta \le 2\pi$ for which $f(\theta) + g(\theta) = 2$? Give a reason for your answer.`,
        rows: [{ name: "Answer with reason", earns: String.raw`No, with the reason that the sum could equal $2$ only if both values were $1$ at once, but $f(\theta) = 1$ only at $\theta = \dfrac{\pi}{2}$, where $g(\theta) = 0$.` }],
        solution: String.raw`No. Each of $f(\theta)$ and $g(\theta)$ is at most $1$, so the sum equals $2$ only if both equal $1$ at the same $\theta$. On $0 \le \theta \le 2\pi$, $\sin\theta = 1$ only at $\theta = \dfrac{\pi}{2}$, and there $\cos\theta = 0$. So the sum is never $2$.` },
    ],
  }],
};

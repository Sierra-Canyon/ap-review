// AP Precalculus topic quiz 4.2 (Unit 4 is taught but not on the AP exam). Keys and every number are computed in the
// writer's scratch scripts.
import { graph } from "../../plot.js";

// p402-s1: x = g(t), piecewise linear through (0, 4), (3, -2), (5, 2); y = h(t) = 4 - (t - 2)^2.
const g = (t) => (t <= 3 ? 4 - 2 * t : -2 + 2 * (t - 3));
const h = (t) => 4 - (t - 2) ** 2;

export const sets = {
  "p402-s1": {
    name: "A particle controlled by two graphs",
    label: "Graph",
    intro: String.raw`A particle moves in the $xy$-plane so that its position at time $t$ is $\left(g(t), h(t)\right)$ for $0 \le t \le 5$. The graphs of $g$ (solid) and $h$ (dashed) are shown below. The graph of $g$ is made of two line segments, and $h(t) = 4 - (t - 2)^2$.`,
    sources: [{ title: "", blocks: [{ svg: graph({
      x: [-0.5, 5.5], y: [-6, 5], step: 1, xname: "t", yname: "",
      segments: [[0, 4, 3, -2], [3, -2, 5, 2]],
      fns: [{ f: h, from: 0, to: 5, dash: true, label: "h", labelAt: 4.55 }],
      dots: [[0, 4, "closed"], [3, -2, "closed"], [5, 2, "closed"], [2, 4, "closed"]],
      labels: [[4.6, 2.2, "g"]],
      alt: "Graphs of g (solid) and h (dashed) for t from 0 to 5. The graph of g is a line segment from (0, 4) down to (3, -2), crossing the t-axis at t = 2, and then a segment from (3, -2) up to (5, 2), crossing the t-axis at t = 4. The graph of h is a parabola opening down that starts at (0, 0), rises to its maximum at (2, 4), passes through (1, 3) and (3, 3), returns to (4, 0), and ends at (5, -5).",
    }) }] }],
  },
  "p402-s2": {
    name: "A drop of water from a fountain",
    label: "Free response",
    intro: String.raw`A drop of water leaves a fountain nozzle. Its position at time $t$ seconds is $\left(x(t), y(t)\right)$, where $x(t) = 5t$ is its horizontal distance from the nozzle, in feet, and $y(t) = 4 + 24t - 16t^2$ is its height above the ground, in feet. The model holds until the drop reaches the ground.`,
    sources: [{ title: "", blocks: [{ p: String.raw`A calculator is allowed on this question. Give decimal answers correct to three decimal places.` }] }],
  },
};

export default {
  forms: [{
    id: "p402",
    name: "Topic 4.2 Quiz: Parametric Functions Modeling Planar Motion",
    group: "Unit 4: Functions Involving Parameters, Vectors, and Matrices",
    items: [
      { id: "p402-m01", type: "mcq", skill: "u4", topic: "4.2", calc: false, difficulty: "easy",
        question: String.raw`A particle moves in the $xy$-plane so that its position at time $t \ge 0$ is $\left(t^2 - 4,\ 8 - 3t\right)$. At what point does the particle cross the $y$-axis?`,
        choices: ["$(0, 2)$", "$(-4, 8)$", "$(0, 14)$", String.raw`$\left(\frac{28}{9}, 0\right)$`],
        why: [
          String.raw`The particle is on the $y$-axis when $x = 0$: $t^2 - 4 = 0$, and $t \ge 0$ gives $t = 2$. Then $y = 8 - 3(2) = 2$.`,
          String.raw`$(-4, 8)$ is the starting position, at $t = 0$. It is not on the $y$-axis, because its $x$-coordinate is $-4$.`,
          String.raw`$(0, 14)$ uses $t = -2$. The motion starts at $t = 0$, so only $t = 2$ counts.`,
          String.raw`$\left(\frac{28}{9}, 0\right)$ is where the particle crosses the $x$-axis, at $t = \frac{8}{3}$. The $y$-axis needs $x = 0$.`,
        ], answer: 0 },
      { id: "p402-m02", type: "mcq", skill: "u4", topic: "4.2", calc: true, difficulty: "moderate",
        question: String.raw`A particle moves in the $xy$-plane so that its position at time $t$ is $\left(t + \sin t,\ 2 - \cos t\right)$. What is the $x$-coordinate of the particle the first time after $t = 0$ that its $y$-coordinate is $2.5$?`,
        choices: ["$2.960$", "$2.094$", "$3.323$", "$0.866$"],
        why: [
          String.raw`$2 - \cos t = 2.5$ gives $\cos t = -0.5$. The first solution after $t = 0$ is $t = \dfrac{2\pi}{3} \approx 2.094$. Then $x = 2.094 + \sin(2.094) \approx 2.960$.`,
          String.raw`$2.094$ is the time $t$, not the $x$-coordinate. The $x$-coordinate is $t + \sin t$ at that time.`,
          String.raw`$3.323$ is $x$ at $t = \dfrac{4\pi}{3}$, the second time $y = 2.5$. The question asks for the first time.`,
          String.raw`$0.866$ is $\sin\left(\dfrac{2\pi}{3}\right)$ alone. The $x$-coordinate also includes the term $t$.`,
        ], answer: 0 },
      { id: "p402-m03", type: "mcq", skill: "u4", topic: "4.2", calc: false, difficulty: "easy", set: "p402-s1",
        question: String.raw`What is the position of the particle at $t = 1$?`,
        choices: ["$(2, 3)$", "$(3, 2)$", "$(1, 2)$", "$(1, 3)$"],
        why: [
          String.raw`From the graphs, $g(1) = 2$ and $h(1) = 3$, so the position is $\left(g(1), h(1)\right) = (2, 3)$.`,
          String.raw`$(3, 2)$ puts $h(1)$ first. The $x$-coordinate is $g(t)$ and the $y$-coordinate is $h(t)$.`,
          String.raw`$(1, 2)$ is the point $(t, g(t))$ on the graph of $g$. The particle's $x$-coordinate is $g(1)$, not $t$.`,
          String.raw`$(1, 3)$ is the point $(t, h(t))$ on the graph of $h$. The particle's $x$-coordinate is $g(1) = 2$.`,
        ], answer: 0 },
      { id: "p402-m04", type: "mcq", skill: "u4", topic: "4.2", calc: false, difficulty: "moderate", set: "p402-s1",
        question: String.raw`At which points is the particle on the $y$-axis?`,
        choices: ["$(0, 4)$ and $(0, 0)$", "$(2, 0)$ and $(4, 0)$", "$(0, 2)$ and $(0, 4)$", "$(0, 4)$ only"],
        why: [
          String.raw`The particle is on the $y$-axis when $g(t) = 0$, at $t = 2$ and $t = 4$. Then $h(2) = 4$ and $h(4) = 0$, so the points are $(0, 4)$ and $(0, 0)$.`,
          String.raw`These points come from the zeros of $g$ on the $t$-axis. They are points on the graph of $g$, not positions of the particle.`,
          String.raw`This uses the times $t = 2$ and $t = 4$ as $y$-coordinates. The $y$-coordinates are $h(2)$ and $h(4)$.`,
          String.raw`This stops at the first zero of $g$. The graph of $g$ crosses the $t$-axis again at $t = 4$, where the particle is at $(0, 0)$.`,
        ], answer: 0 },
      { id: "p402-m05", type: "mcq", skill: "u4", topic: "4.2", calc: true, difficulty: "easy",
        question: String.raw`A dolphin jumps out of the water. Its position $t$ seconds after it starts the jump is $\left(2.5t,\ -0.5 + 6t - 4.9t^2\right)$, where $y$ is its height above the water surface in meters. What is the greatest height the dolphin reaches above the water?`,
        choices: ["$1.337$", "$0.612$", "$1.531$", "$1.837$"],
        why: [
          String.raw`$y(t)$ is a quadratic that opens down, so its maximum is at $t = \dfrac{6}{2(4.9)} \approx 0.612$. Then $y \approx -0.5 + 6(0.612) - 4.9(0.612)^2 \approx 1.337$ meters.`,
          String.raw`$0.612$ is the time of the greatest height, in seconds, not the height.`,
          String.raw`$1.531$ is $x(0.612)$, the horizontal distance at the highest point. The height is the $y$-coordinate.`,
          String.raw`$1.837$ is $6t - 4.9t^2$ at $t \approx 0.612$, the rise from the starting point. The dolphin starts $0.5$ meter below the surface, so subtract $0.5$.`,
        ], answer: 0 },
      { id: "p402-m06", type: "mcq", skill: "u4", topic: "4.2", calc: false, difficulty: "difficult",
        question: String.raw`A particle moves in the $xy$-plane so that its position at time $t$ is $\left(\cos(2t),\ \sin t\right)$ for $0 \le t < 2\pi$. How many different points of its path lie on the $x$-axis, and how many lie on the $y$-axis?`,
        choices: ["One on the $x$-axis and two on the $y$-axis", "Two on the $x$-axis and four on the $y$-axis", "One on the $x$-axis and four on the $y$-axis", "Two on the $x$-axis and two on the $y$-axis"],
        why: [
          String.raw`$\sin t = 0$ at $t = 0$ and $t = \pi$, and both give the point $(1, 0)$. $\cos(2t) = 0$ at $t = \dfrac{\pi}{4}, \dfrac{3\pi}{4}, \dfrac{5\pi}{4}, \dfrac{7\pi}{4}$, which give only $\left(0, \tfrac{\sqrt{2}}{2}\right)$ and $\left(0, -\tfrac{\sqrt{2}}{2}\right)$. The particle passes through each point twice.`,
          String.raw`This counts the values of $t$, not the points. The two times on the $x$-axis give the same point, and the four times on the $y$-axis give only two points.`,
          String.raw`The $x$-axis count is right, but the four times on the $y$-axis give only two points: $\sin\tfrac{\pi}{4} = \sin\tfrac{3\pi}{4}$ and $\sin\tfrac{5\pi}{4} = \sin\tfrac{7\pi}{4}$.`,
          String.raw`At $t = 0$ and $t = \pi$, $\cos(2t) = 1$, so both times give the same point, $(1, 0)$.`,
        ], answer: 0 },
      { id: "p402-f1a", type: "frq", skill: "u4", topic: "4.2", calc: true, set: "p402-s2", part: "(a)",
        prompt: String.raw`Find the coordinates of the highest point of the drop's path.`,
        rows: [{ name: "Highest point", earns: String.raw`$(3.75, 13)$, from the vertex of $y(t)$ at $t = \dfrac{24}{32} = 0.75$.` }],
        solution: String.raw`$y(t) = 4 + 24t - 16t^2$ is a quadratic that opens down, so it is greatest at $t = \dfrac{24}{2(16)} = 0.75$ second. Then $x(0.75) = 3.75$ and $y(0.75) = 4 + 18 - 9 = 13$. The highest point is $(3.75, 13)$.` },
      { id: "p402-f1b", type: "frq", skill: "u4", topic: "4.2", calc: true, set: "p402-s2", part: "(b)",
        prompt: String.raw`At what time does the drop reach the ground, and how far from the nozzle, horizontally, is it then? Indicate units of measure.`,
        rows: [{ name: "Time and distance", earns: String.raw`$t \approx 1.651$ seconds and $x \approx 8.257$ feet, from the positive solution of $4 + 24t - 16t^2 = 0$.` }],
        solution: String.raw`The drop reaches the ground when $y(t) = 0$: $16t^2 - 24t - 4 = 0$. The positive solution is $t = \dfrac{3 + \sqrt{13}}{4} \approx 1.651$ seconds. Then $x = 5(1.651) \approx 8.257$ feet.` },
      { id: "p402-f1c", type: "frq", skill: "u4", topic: "4.2", calc: true, set: "p402-s2", part: "(c)",
        prompt: String.raw`A low wall $1.5$ feet tall stands $8$ feet from the nozzle, horizontally. Does the drop pass over the wall? Give a reason for your answer.`,
        rows: [
          { name: "Height at the wall", earns: String.raw`Uses $x(t) = 8$ to get $t = 1.6$, and finds $y(1.6) = 1.44$.` },
          { name: "Conclusion with reason", earns: String.raw`No, because the drop is $1.44$ feet high when it is $8$ feet from the nozzle, which is less than the wall's height of $1.5$ feet.` },
        ],
        solution: String.raw`The drop is $8$ feet from the nozzle when $5t = 8$, so $t = 1.6$, which is before it lands at $t \approx 1.651$. Then $y(1.6) = 4 + 24(1.6) - 16(1.6)^2 = 4 + 38.4 - 40.96 = 1.44$ feet. Since $1.44 < 1.5$, the drop does not pass over the wall.` },
    ],
  }],
};

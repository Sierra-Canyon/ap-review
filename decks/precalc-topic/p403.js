// AP Precalculus topic quiz 4.3 (Unit 4 is taught but not on the AP exam). Keys and every number are computed in the
// writer's scratch scripts.
import { graph } from "../../plot.js";

// A parametric path drawn as short segments.
function path(fx, fy, t0, t1, n = 120) {
  const out = [];
  for (let k = 0; k < n; k++) {
    const a = t0 + ((t1 - t0) * k) / n, b = t0 + ((t1 - t0) * (k + 1)) / n;
    out.push([fx(a), fy(a), fx(b), fy(b)]);
  }
  return out;
}
// p403-s1: f(t) = (t^2 - 4t + 3, 3t - t^2) for 0 <= t <= 4.
const fx = (t) => t * t - 4 * t + 3, fy = (t) => 3 * t - t * t;

export const sets = {
  "p403-s1": {
    name: "A path with marked times",
    label: "Graph",
    intro: String.raw`A particle moves in the $xy$-plane so that its position at time $t$ is $f(t) = \left(t^2 - 4t + 3,\ 3t - t^2\right)$ for $0 \le t \le 4$. Its path is shown below, with its positions at $t = 0, 1, 2, 3,$ and $4$ marked.`,
    sources: [{ title: "", blocks: [{ svg: graph({
      x: [-2, 4], y: [-5, 3], step: 1, xname: "x", yname: "y",
      segments: path(fx, fy, 0, 4),
      dots: [[3, 0, "closed"], [0, 2, "closed"], [-1, 2, "closed"], [0, 0, "closed"], [3, -4, "closed"]],
      labels: [[3.1, 0.3, "t = 0"], [0.1, 2.35, "t = 1"], [-1.9, 2.35, "t = 2"], [0.15, -0.55, "t = 3"], [2.2, -4.55, "t = 4"]],
      alt: "A curved path that starts at (3, 0) when t = 0, moves up and to the left to (0, 2) at t = 1, reaches its highest point near (-0.75, 2.25), passes through (-1, 2) at t = 2, which is its leftmost point, then turns down and to the right through the origin at t = 3, and ends at (3, -4) when t = 4.",
    }) }] }],
  },
  "p403-s2": {
    name: "A particle on a parabola",
    label: "Free response",
    intro: String.raw`A particle moves in the $xy$-plane so that its position at time $t$ is $\left(x(t), y(t)\right)$, where $x(t) = (t - 2)^2 + 1$ and $y(t) = 8 - 2t$, for $0 \le t \le 5$.`,
    sources: [{ title: "", blocks: [{ p: String.raw`No calculator is allowed on this question. Show the work that leads to your answers.` }] }],
  },
};

export default {
  forms: [{
    id: "p403",
    name: "Topic 4.3 Quiz: Parametric Functions and Rates of Change",
    group: "Unit 4: Functions Involving Parameters, Vectors, and Matrices",
    items: [
      { id: "p403-m01", type: "mcq", skill: "u4", topic: "4.3", calc: false, difficulty: "easy",
        question: String.raw`A particle moves in the $xy$-plane so that its position at time $t$ is $\left(4t - t^2,\ 5 - t^3\right)$. For $2 < t < 4$, in which directions is the particle moving?`,
        choices: ["Left and down", "Right and down", "Left and up", "Right and up"],
        why: [
          String.raw`$x(t) = 4t - t^2$ has its maximum at $t = 2$, so it decreases for $2 < t < 4$: the particle moves left. $y(t) = 5 - t^3$ decreases for all $t$: the particle moves down.`,
          String.raw`$x(t)$ is positive for $2 < t < 4$, but its values fall from $4$ to $0$. Direction comes from whether $x(t)$ increases or decreases, not from its sign.`,
          String.raw`The horizontal direction is right, but $y(t) = 5 - t^3$ decreases as $t$ increases, so the particle moves down, not up.`,
          String.raw`Both directions are reversed. $x(t)$ falls from $4$ to $0$ and $y(t)$ falls from $-3$ to $-59$ on this interval.`,
        ], answer: 0 },
      { id: "p403-m02", type: "mcq", skill: "u4", topic: "4.3", calc: false, difficulty: "easy",
        question: String.raw`A particle moves in the $xy$-plane so that its position at time $t$ is $\left(t^2 + 1,\ t^3 - 2t\right)$. What is the average rate of change of $y$ with respect to $x$ for $1 \le t \le 3$?`,
        choices: [String.raw`$\frac{11}{4}$`, String.raw`$\frac{4}{11}$`, "$11$", "$4$"],
        why: [
          String.raw`At $t = 1$ the point is $(2, -1)$ and at $t = 3$ it is $(10, 21)$. The average rate of change is $\dfrac{21 - (-1)}{10 - 2} = \dfrac{22}{8} = \dfrac{11}{4}$.`,
          String.raw`$\dfrac{4}{11}$ is $\dfrac{8}{22}$, the change in $x$ over the change in $y$. The rate of $y$ with respect to $x$ puts the change in $y$ on top.`,
          String.raw`$11$ is $\dfrac{22}{2}$, the change in $y$ over the change in $t$. That is the rate of $y$ with respect to $t$.`,
          String.raw`$4$ is $\dfrac{8}{2}$, the change in $x$ over the change in $t$. That is the rate of $x$ with respect to $t$.`,
        ], answer: 0 },
      { id: "p403-m03", type: "mcq", skill: "u4", topic: "4.3", calc: false, difficulty: "moderate", set: "p403-s1",
        question: String.raw`On which interval is the particle moving to the left and down?`,
        choices: [String.raw`$\frac{3}{2} < t < 2$`, String.raw`$0 < t < \frac{3}{2}$`, String.raw`$2 < t < 4$`, String.raw`$0 < t < 2$`],
        why: [
          String.raw`$x(t) = (t - 2)^2 - 1$ decreases for $t < 2$, so the particle moves left on $0 < t < 2$. $y(t) = 3t - t^2$ has its maximum at $t = \dfrac{3}{2}$, so it decreases for $t > \dfrac{3}{2}$. Both hold for $\dfrac{3}{2} < t < 2$.`,
          String.raw`On $0 < t < \dfrac{3}{2}$, $y(t)$ increases, so the particle moves left and up.`,
          String.raw`On $2 < t < 4$, $x(t)$ increases, so the particle moves right and down.`,
          String.raw`The particle moves left on all of $0 < t < 2$, but it moves up until $t = \dfrac{3}{2}$. Both conditions must hold.`,
        ], answer: 0 },
      { id: "p403-m04", type: "mcq", skill: "u4", topic: "4.3", calc: false, difficulty: "easy", set: "p403-s1",
        question: String.raw`What is the average rate of change of $y$ with respect to $x$ for $2 \le t \le 4$?`,
        choices: [String.raw`$-\frac{3}{2}$`, String.raw`$-\frac{2}{3}$`, "$-3$", "$2$"],
        why: [
          String.raw`The path goes from $f(2) = (-1, 2)$ to $f(4) = (3, -4)$. The average rate of change is $\dfrac{-4 - 2}{3 - (-1)} = \dfrac{-6}{4} = -\dfrac{3}{2}$.`,
          String.raw`$-\dfrac{2}{3}$ is $\dfrac{4}{-6}$, the change in $x$ over the change in $y$.`,
          String.raw`$-3$ is $\dfrac{-6}{2}$, the change in $y$ over the change in $t$.`,
          String.raw`$2$ is $\dfrac{4}{2}$, the change in $x$ over the change in $t$.`,
        ], answer: 0 },
      { id: "p403-m05", type: "mcq", skill: "u4", topic: "4.3", calc: false, difficulty: "difficult",
        question: String.raw`A particle moves in the $xy$-plane so that its position at time $t$ is $\left(2^t,\ 3t + 1\right)$. What is the average rate of change of $y$ with respect to $x$ between the point where $x = 2$ and the point where $x = 16$?`,
        choices: [String.raw`$\frac{9}{14}$`, String.raw`$\frac{14}{9}$`, "$3$", String.raw`$\frac{3}{14}$`],
        why: [
          String.raw`$2^t = 2$ at $t = 1$ and $2^t = 16$ at $t = 4$. Then $y(1) = 4$ and $y(4) = 13$, so the average rate of change is $\dfrac{13 - 4}{16 - 2} = \dfrac{9}{14}$.`,
          String.raw`$\dfrac{14}{9}$ is the change in $x$ over the change in $y$, the reciprocal.`,
          String.raw`$3$ is the rate of $y$ with respect to $t$, $\dfrac{9}{4 - 1}$. The question asks for the rate with respect to $x$.`,
          String.raw`$\dfrac{3}{14}$ divides the change in $t$ by the change in $x$. The numerator must be the change in $y$, $13 - 4 = 9$.`,
        ], answer: 0 },
      { id: "p403-m06", type: "mcq", skill: "u4", topic: "4.3", calc: false, difficulty: "difficult",
        question: String.raw`A particle moves in the $xy$-plane so that its position at time $t$ is $\left(e^{0.4t},\ 5\sin(0.5t)\right)$ for $0 \le t \le 8$. On which interval is the particle moving to the right and down?`,
        choices: [String.raw`$\pi < t < 8$`, String.raw`$0 < t < \pi$`, String.raw`$\pi < t < 3\pi$`, String.raw`$2\pi < t < 8$`],
        why: [
          String.raw`$e^{0.4t}$ always increases, so the particle always moves right. $5\sin(0.5t)$ decreases when $\dfrac{\pi}{2} < 0.5t < \dfrac{3\pi}{2}$, which is $\pi < t < 3\pi$. Since $3\pi > 9 > 8$, the interval is $\pi < t < 8$.`,
          String.raw`On $0 < t < \pi$, $\sin(0.5t)$ increases, so the particle moves right and up.`,
          String.raw`$y(t)$ decreases until $t = 3\pi$, but $3\pi$ is more than $8$, beyond the domain. The motion stops at $t = 8$.`,
          String.raw`On $2\pi < t < 8$, $y(t)$ is negative, but $y$ is decreasing from $t = \pi$ on. Direction depends on whether $y$ decreases, not on its sign.`,
        ], answer: 0 },
      { id: "p403-f1a", type: "frq", skill: "u4", topic: "4.3", calc: false, set: "p403-s2", part: "(a)",
        prompt: String.raw`On what interval of $t$ is the particle moving to the left? Give a reason for your answer.`,
        rows: [{ name: "Interval with reason", earns: String.raw`$0 < t < 2$, because $x(t) = (t - 2)^2 + 1$ is decreasing there.` }],
        solution: String.raw`The particle moves left when $x(t)$ decreases. $x(t) = (t - 2)^2 + 1$ decreases for $t < 2$ and increases for $t > 2$, so the particle moves left on $0 < t < 2$.` },
      { id: "p403-f1b", type: "frq", skill: "u4", topic: "4.3", calc: false, set: "p403-s2", part: "(b)",
        prompt: String.raw`Find the average rate of change of $y$ with respect to $x$ for $1 \le t \le 4$. Show the computations that lead to your answer.`,
        rows: [
          { name: "Endpoints", earns: String.raw`Finds the positions $(2, 6)$ at $t = 1$ and $(5, 0)$ at $t = 4$.` },
          { name: "Answer", earns: String.raw`$\dfrac{0 - 6}{5 - 2} = -2$.` },
        ],
        solution: String.raw`At $t = 1$: $x = 1 + 1 = 2$ and $y = 6$. At $t = 4$: $x = 4 + 1 = 5$ and $y = 0$. The average rate of change of $y$ with respect to $x$ is $$\frac{0 - 6}{5 - 2} = -2.$$` },
      { id: "p403-f1c", type: "frq", skill: "u4", topic: "4.3", calc: false, set: "p403-s2", part: "(c)",
        prompt: String.raw`Is there an interval of $t$ on which the particle moves to the right and up? Give a reason for your answer.`,
        rows: [{ name: "Answer with reason", earns: String.raw`No, because $y(t) = 8 - 2t$ is decreasing for all $t$, so the particle never moves up.` }],
        solution: String.raw`The particle moves up only where $y(t)$ increases. $y(t) = 8 - 2t$ is linear with slope $-2$, so it decreases for all $t$. The particle always moves down, so there is no interval on which it moves to the right and up.` },
    ],
  }],
};

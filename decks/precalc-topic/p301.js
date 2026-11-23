// AP Precalculus topic quiz, Topic 3.1: Periodic Phenomena.
import { graph } from "../../plot.js";

export const sets = {
  "p301-s1": {
    name: "A periodic graph",
    label: "Graph",
    intro: String.raw`The function $f$ is periodic and is defined for all real numbers. The graph of $f$ for $0 \le x \le 10$ is shown below. It consists of line segments.`,
    sources: [{ title: "", blocks: [{ svg: graph({
      x: [-1, 11], y: [-3, 3], step: 1, xname: "x", yname: "y",
      segments: [[0, -2, 2, 2], [2, 2, 3, 0], [3, 0, 5, -2], [5, -2, 7, 2], [7, 2, 8, 0], [8, 0, 10, -2]],
      dots: [[0, -2, "closed"], [10, -2, "closed"]],
      alt: "Graph of f for x from 0 to 10, made of line segments. From (0, -2) it rises to (2, 2), falls to (3, 0), and falls less steeply to (5, -2). The same pattern repeats from (5, -2): up to (7, 2), down to (8, 0), and down to (10, -2).",
    }) }] }],
  },
  "p301-s2": {
    name: "A robot vacuum",
    label: "Graph",
    intro: String.raw`A robot vacuum moves back and forth along a hallway. Its distance from the wall at one end of the hallway, in meters, at time $t$ seconds is given by the periodic function $d$. The graph of $d$ for $0 \le t \le 18$ is shown below, and the pattern continues for all $t \ge 0$.`,
    sources: [{ title: "", blocks: [{ svg: graph({
      x: [-1, 19], y: [-1, 7], step: { x: 3, y: 1 }, xname: "t", yname: "d",
      segments: [[0, 0, 3, 6], [3, 6, 9, 0], [9, 0, 12, 6], [12, 6, 18, 0]],
      dots: [[0, 0, "closed"], [3, 6, "closed"], [9, 0, "closed"], [12, 6, "closed"], [18, 0, "closed"]],
      alt: "Graph of d for t from 0 to 18 seconds, made of line segments. d rises from (0, 0) to (3, 6), then falls to (9, 0). The pattern repeats: up to (12, 6), then down to (18, 0).",
    }) }] }],
  },
  "p301-s3": {
    name: "A function defined on one cycle",
    label: "Free response",
    intro: String.raw`The function $p$ is periodic with period $6$. For $0 \le x < 6$, $p(x) = |x - 3|$.`,
    sources: [{ title: "", blocks: [{ p: "Answer each part. Show the work that leads to your answers." }] }],
  },
};

export default {
  forms: [{
    id: "p301",
    name: "Topic 3.1 Quiz: Periodic Phenomena",
    group: "Unit 3: Trigonometric and Polar Functions",
    items: [
      { id: "p301-m01", type: "mcq", skill: "u3", topic: "3.1", calc: false, difficulty: "easy", set: "p301-s1",
        question: String.raw`What is the period of $f$?`,
        choices: ["$5$", "$10$", "$2$", "$4$"],
        why: [
          String.raw`The graph from $x = 0$ to $x = 5$ is repeated exactly from $x = 5$ to $x = 10$, and no shorter length repeats it. The period is $5$.`,
          String.raw`$10$ is the length of the whole graph shown, which holds two cycles. The period is the length of one cycle.`,
          String.raw`$2$ is the horizontal distance from the minimum at $x = 0$ to the next maximum at $x = 2$. One full cycle runs from one minimum to the next.`,
          String.raw`$4$ is the difference between the greatest and least values, $2 - (-2)$. That is a vertical distance, and the period is a horizontal one.`,
        ], answer: 0 },
      { id: "p301-m02", type: "mcq", skill: "u3", topic: "3.1", calc: false, difficulty: "moderate", set: "p301-s1",
        question: String.raw`What is the value of $f(18.5)$?`,
        choices: [String.raw`$-0.5$`, "$1$", "$0$", String.raw`$-1$`],
        why: [
          String.raw`The period is $5$, so $f(18.5) = f(18.5 - 15) = f(3.5)$. On the segment from $(3, 0)$ to $(5, -2)$ the slope is $-1$, so $f(3.5) = 0 - 0.5 = -0.5$.`,
          String.raw`$1$ is $f(2.5)$, which comes from using a period of $4$: $18.5 - 16 = 2.5$. The period is $5$.`,
          String.raw`$0$ is $f(3)$. The input reduces to $3.5$, not $3$, and the graph keeps falling after $x = 3$.`,
          String.raw`$-1$ continues the slope $-2$ of the segment from $(2, 2)$ to $(3, 0)$ past $x = 3$. After $x = 3$ the graph follows a new segment with slope $-1$.`,
        ], answer: 0 },
      { id: "p301-m03", type: "mcq", skill: "u3", topic: "3.1", calc: false, difficulty: "moderate", set: "p301-s1",
        question: String.raw`What is the average rate of change of $f$ over the interval $2 \le x \le 13$?`,
        choices: [String.raw`$-\frac{2}{11}$`, String.raw`$-2$`, "$0$", String.raw`$\frac{2}{11}$`],
        why: [
          String.raw`$f(2) = 2$ and $f(13) = f(13 - 10) = f(3) = 0$. The average rate of change is $\dfrac{f(13) - f(2)}{13 - 2} = \dfrac{0 - 2}{11} = -\dfrac{2}{11}$.`,
          String.raw`$-2$ divides the change in $f$ by $3 - 2 = 1$. The values $f(13)$ and $f(3)$ are equal, but the interval still has length $13 - 2 = 11$.`,
          String.raw`The average rate of change of a periodic function is $0$ only when the interval's length is a multiple of the period. Here the length is $11$, and $f(13) \ne f(2)$.`,
          String.raw`$\dfrac{2}{11}$ subtracts in the wrong order, $f(2) - f(13)$, over $13 - 2$. Both differences must start from the same endpoint.`,
        ], answer: 0 },
      { id: "p301-m04", type: "mcq", skill: "u3", topic: "3.1", calc: false, difficulty: "easy",
        question: String.raw`The function $g$ is periodic with period $6$, and $g(2) = 5$. Which of the following must be true?`,
        choices: [String.raw`$g(8) = 5$`, String.raw`$g(12) = 5$`, String.raw`$g(-2) = 5$`, String.raw`$g(8) = 11$`],
        why: [
          String.raw`Inputs that differ by a multiple of the period give the same output. $8 = 2 + 6$, so $g(8) = g(2) = 5$.`,
          String.raw`$12$ is $2 \cdot 6$, the input times the period. The inputs must differ by a multiple of $6$, and $12 - 2 = 10$ is not one.`,
          String.raw`$g(-2) = g(2)$ would follow from symmetry about the $y$-axis, not from periodicity. The inputs $-2$ and $2$ differ by $4$, which is not a multiple of $6$.`,
          String.raw`Adding the period to the input does not add it to the output. $g(8) = g(2) = 5$, not $11$.`,
        ], answer: 0 },
      { id: "p301-m05", type: "mcq", skill: "u3", topic: "3.1", calc: false, difficulty: "easy", set: "p301-s2",
        question: String.raw`How long does one complete cycle of the vacuum's motion take?`,
        choices: ["$9$ seconds", "$18$ seconds", "$6$ seconds", "$3$ seconds"],
        why: [
          String.raw`The vacuum leaves the wall at $t = 0$, is $6$ meters away at $t = 3$, and is back at the wall at $t = 9$. Then the pattern repeats, so the period is $9$ seconds.`,
          String.raw`$18$ seconds is the length of the graph shown, which holds two cycles.`,
          String.raw`$6$ seconds is the time for the trip back to the wall, from $t = 3$ to $t = 9$. A cycle also includes the trip out.`,
          String.raw`$3$ seconds is the time for the trip out, from $t = 0$ to $t = 3$. A cycle also includes the trip back.`,
        ], answer: 0 },
      { id: "p301-m06", type: "mcq", skill: "u3", topic: "3.1", calc: false, difficulty: "difficult", set: "p301-s2",
        question: String.raw`During which of the following intervals of time is the vacuum moving toward the wall for the entire interval?`,
        choices: [String.raw`$75 < t < 81$`, String.raw`$72 < t < 75$`, String.raw`$78 < t < 84$`, String.raw`$69 < t < 75$`],
        why: [
          String.raw`In each cycle of $9$ seconds, $d$ decreases from $3$ to $9$ seconds after the cycle starts. A cycle starts at $t = 72 = 8 \cdot 9$, so $d$ decreases on $75 < t < 81$.`,
          String.raw`A cycle starts at $t = 72$, and for the first $3$ seconds of a cycle $d$ increases. On this interval the vacuum moves away from the wall.`,
          String.raw`$d$ decreases from $78$ to $81$, but a new cycle starts at $t = 81$, so $d$ increases from $81$ to $84$. The vacuum turns around during this interval.`,
          String.raw`$d$ decreases from $69$ to $72$, but a new cycle starts at $t = 72$, so $d$ increases from $72$ to $75$. The vacuum turns around during this interval.`,
        ], answer: 0 },
      { id: "p301-f1a", type: "frq", skill: "u3", topic: "3.1", calc: false, set: "p301-s3", part: "(a)",
        prompt: String.raw`Find the value of $p(20)$.`,
        rows: [{ name: "Value", earns: String.raw`Reduces the input by a multiple of the period, $p(20) = p(20 - 18) = p(2)$, and gets $p(20) = |2 - 3| = 1$.` }],
        solution: String.raw`Since $p$ has period $6$ and $20 - 3 \cdot 6 = 2$, $p(20) = p(2) = |2 - 3| = 1$.` },
      { id: "p301-f1b", type: "frq", skill: "u3", topic: "3.1", calc: false, set: "p301-s3", part: "(b)",
        prompt: String.raw`Find all values of $x$ in the interval $0 \le x \le 18$ for which $p(x) = 0$.`,
        rows: [{ name: "All solutions", earns: String.raw`$x = 3$, $x = 9$, and $x = 15$, from the one solution $x = 3$ in $0 \le x < 6$ and adding multiples of $6$. No other values.` }],
        solution: String.raw`For $0 \le x < 6$, $|x - 3| = 0$ only at $x = 3$. Because $p$ has period $6$, $p(x) = 0$ exactly at $x = 3 + 6k$ for integers $k$. In $0 \le x \le 18$ these are $x = 3$, $x = 9$, and $x = 15$.` },
      { id: "p301-f1c", type: "frq", skill: "u3", topic: "3.1", calc: false, set: "p301-s3", part: "(c)",
        prompt: String.raw`Find the average rate of change of $p$ over the interval $1 \le x \le 14$.`,
        rows: [{ name: "Average rate of change", earns: String.raw`$\dfrac{p(14) - p(1)}{14 - 1} = \dfrac{1 - 2}{13} = -\dfrac{1}{13}$, with $p(14) = p(2) = 1$ and $p(1) = 2$.` }],
        solution: String.raw`$p(1) = |1 - 3| = 2$, and $p(14) = p(14 - 12) = p(2) = |2 - 3| = 1$. The average rate of change is $\dfrac{p(14) - p(1)}{14 - 1} = \dfrac{1 - 2}{13} = -\dfrac{1}{13}$.` },
    ],
  }],
};

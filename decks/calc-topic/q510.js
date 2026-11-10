import { graph } from "../../plot.js";

// s1: y = 4 - x^2 and y = x + 2 on [-2, 1], with a vertical segment joining them at x = -1 (from (-1, 1) to (-1, 3)).
const twoGraphs = graph({
  x: [-3, 2], y: [-1, 5], step: { x: 1, y: 3 }, xname: "x", yname: "y",
  fns: [{ f: (x) => 4 - x * x, from: -2, to: 1.6 }, { f: (x) => x + 2, from: -2, to: 1.6 }],
  segments: [[-1, 1, -1, 3]],
  dots: [[1, 3, "closed"], [-1, 1, "closed"], [-1, 3, "closed"]],
  labels: [[-0.9, 1.9, "D"], [0.2, 4.35, "y = 4 − x²"], [1.2, 3.9, "y = x + 2"]],
  alt: "The graphs of y = 4 - x^2, a downward-opening parabola with vertex (0, 4), and y = x + 2, a line. They meet at (-2, 0) and (1, 3), and between these points the parabola is above the line. A vertical segment labeled D joins the line at (-1, 1) to the parabola at (-1, 3).",
});

// s2: y = cos x on [0, pi/2] with the rectangle for x = 0.6: corners (0, 0), (0.6, 0), (0.6, cos 0.6), (0, cos 0.6).
const c6 = Math.cos(0.6);
const rectGraph = graph({
  x: [0, 2], y: [0, 1.25], step: { x: 0.5, y: 0.5 }, xname: "x", yname: "y",
  fns: [{ f: Math.cos, from: 0, to: Math.PI / 2, label: "y = cos x", labelAt: 1.05 }],
  segments: [[0.6, 0, 0.6, c6], [0, c6, 0.6, c6]],
  dots: [[0.6, c6, "closed"]],
  labels: [[0.65, c6 + 0.08, "(x, cos x)"]],
  alt: "The graph of y = cos x for x from 0 to pi/2, falling from (0, 1) to (pi/2, 0). A rectangle has one corner at the origin, sides along the positive x-axis and the positive y-axis, and its opposite corner, labeled (x, cos x), on the graph.",
});

export const sets = {
  "q510-s1": {
    name: "A parabola and a line", label: "Diagram",
    intro: String.raw`The graphs of $y = 4 - x^2$ and $y = x + 2$ are shown below. They meet at $(-2, 0)$ and $(1, 3)$. For $-2 \le x \le 1$, a vertical segment of length $D(x)$ joins the two graphs, as shown for $x = -1$.`,
    sources: [{ title: "", blocks: [{ svg: twoGraphs }] }],
  },
  "q510-s2": {
    name: "A rectangle under a curve", label: "Diagram",
    intro: String.raw`A rectangle has one vertex at the origin, two sides along the positive axes, and the opposite vertex $(x, \cos x)$ on the graph of $y = \cos x$, where $0 < x < \dfrac{\pi}{2}$, as shown below.`,
    sources: [{ title: "", blocks: [{ svg: rectGraph }] }],
  },
  "q510-s9": {
    name: "Fuel efficiency", label: "Free response",
    intro: String.raw`The fuel efficiency of a car, in miles per gallon, when it travels at a constant speed of $v$ miles per hour is modeled by $E(v) = -0.01v^2 + 1.2v + 2$ for $20 \le v \le 80$.`,
    sources: [{ title: "", blocks: [{ p: String.raw`$$E(v) = -0.01v^2 + 1.2v + 2, \quad 20 \le v \le 80$$` }] }],
  },
};

const items = [
  { id: "q510-m01", type: "mcq", skill: "u5", topic: "5.10", calc: false, difficulty: "moderate", set: "q510-s1",
    question: String.raw`What is the greatest possible length $D(x)$ of the vertical segment for $-2 \le x \le 1$?`,
    choices: [String.raw`$\frac{9}{4}$`, String.raw`$-\frac{1}{2}$`, "$2$", String.raw`$\frac{25}{4}$`],
    why: [
      String.raw`The parabola is above the line, so $D(x) = (4 - x^2) - (x + 2) = 2 - x - x^2$. $D'(x) = -1 - 2x = 0$ at $x = -\dfrac{1}{2}$. The candidates are $D(-2) = 0$, $D(1) = 0$, and $D\left(-\dfrac{1}{2}\right) = 2 + \dfrac{1}{2} - \dfrac{1}{4} = \dfrac{9}{4}$.`,
      String.raw`$x = -\dfrac{1}{2}$ is where the greatest length occurs, not the length.`,
      String.raw`$D(0) = 2$ is the length at $x = 0$, below the vertex of the parabola. The length is greater at $x = -\dfrac{1}{2}$.`,
      String.raw`This adds the two functions, $(4 - x^2) + (x + 2)$, instead of subtracting the lower from the upper. Its greatest value, $\dfrac{25}{4}$ at $x = \dfrac{1}{2}$, is not a length between the graphs.`,
    ], answer: 0 },
  { id: "q510-m02", type: "mcq", skill: "u5", topic: "5.10", calc: false, difficulty: "easy",
    stem: String.raw`A company's profit, in dollars, from making and selling $x$ units of a product is $P(x) = -0.02x^2 + 40x - 5000$.`,
    question: String.raw`How many units should the company make and sell to maximize profit?`,
    choices: ["$1000$", "$2000$", "$15000$", "$40$"],
    why: [
      String.raw`$P'(x) = -0.04x + 40 = 0$ at $x = 1000$. $P''(x) = -0.04 < 0$, so this is the maximum.`,
      String.raw`This solves $-0.02x + 40 = 0$, leaving out the factor $2$ from the derivative of $x^2$.`,
      String.raw`$P(1000) = 15000$ is the maximum profit in dollars, not the number of units.`,
      String.raw`$40 = P'(0)$ is the rate at which profit changes when no units are made. The maximum occurs where $P'(x) = 0$.`,
    ], answer: 0 },
  { id: "q510-m03", type: "mcq", skill: "u5", topic: "5.10", calc: false, difficulty: "easy",
    stem: String.raw`A ball is thrown upward. Its height, in feet, $t$ seconds after it is thrown is $h(t) = -16t^2 + 64t + 6$.`,
    question: String.raw`What is the greatest height the ball reaches, in feet?`,
    choices: ["$70$", "$2$", "$6$", "$64$"],
    why: [
      String.raw`$h'(t) = -32t + 64 = 0$ at $t = 2$, and $h''(t) = -32 < 0$, so the maximum height is $h(2) = -64 + 128 + 6 = 70$ feet.`,
      String.raw`$t = 2$ seconds is when the greatest height occurs, not the height itself.`,
      String.raw`This uses $h'(t) = -16t + 64$, which gives $t = 4$ and $h(4) = 6$. The derivative of $-16t^2$ is $-32t$.`,
      String.raw`$64$ feet per second is the initial velocity $h'(0)$, not a height.`,
    ], answer: 0 },
  { id: "q510-m04", type: "mcq", skill: "u5", topic: "5.10", calc: false, difficulty: "difficult",
    question: String.raw`What is the least distance from the origin to a point on the graph of $y = \dfrac{4}{x}$ with $x > 0$?`,
    choices: [String.raw`$2\sqrt{2}$`, "$8$", "$2$", String.raw`$\sqrt{17}$`],
    why: [
      String.raw`The square of the distance is $D(x) = x^2 + \dfrac{16}{x^2}$. $D'(x) = 2x - \dfrac{32}{x^3} = 0$ when $x^4 = 16$, so $x = 2$, and $D'$ changes from negative to positive there. $D(2) = 4 + 4 = 8$, so the least distance is $\sqrt{8} = 2\sqrt{2}$.`,
      String.raw`$8$ is the square of the distance. The distance is its square root.`,
      String.raw`$2$ is the $x$-coordinate of the closest point $(2, 2)$, not the distance.`,
      String.raw`$\sqrt{17}$ is the distance to $(1, 4)$, which is not the closest point.`,
    ], answer: 0 },
  { id: "q510-m05", type: "mcq", skill: "u5", topic: "5.10", calc: false, difficulty: "moderate",
    question: String.raw`Let $f(x) = 6x^2 - x^4$ for $-1 \le x \le 2$. At what value of $x$ is the slope of the graph of $f$ greatest?`,
    choices: ["$1$", "$-1$", String.raw`$\sqrt{3}$`, "$8$"],
    why: [
      String.raw`The slope is $f'(x) = 12x - 4x^3$. Its derivative $f''(x) = 12 - 12x^2$ is $0$ at $x = \pm 1$. Checking the candidates for the greatest slope: $f'(-1) = -8$, $f'(1) = 8$, and $f'(2) = 24 - 32 = -8$. The slope is greatest at $x = 1$.`,
      String.raw`$f''(-1) = 0$ too, but $f'(-1) = -8$ is the least slope on the interval, not the greatest.`,
      String.raw`$f'\left(\sqrt{3}\right) = 0$, so $f$ itself has a relative maximum at $x = \sqrt{3}$. The slope there is $0$, not its greatest value.`,
      String.raw`$8 = f'(1)$ is the greatest slope, not the value of $x$ where it occurs.`,
    ], answer: 0 },
  { id: "q510-m06", type: "mcq", skill: "u5", topic: "5.10", calc: true, difficulty: "moderate", set: "q510-s2",
    question: String.raw`What is the greatest possible area of the rectangle?`,
    choices: ["$0.561$", "$0.860$", "$0.555$", "$0.652$"],
    why: [
      String.raw`The rectangle is $x$ wide and $\cos x$ tall, so $A(x) = x\cos x$. Solving $A'(x) = \cos x - x\sin x = 0$ with a calculator gives $x \approx 0.86033$, where $A'$ changes from positive to negative. The maximum area is $A(0.86033) \approx 0.561$.`,
      String.raw`$0.860$ is the width $x$ that gives the greatest area, not the area.`,
      String.raw`$0.555$ is the area when $x = \dfrac{\pi}{4}$, the midpoint of the interval. That is not where $A'(x) = 0$.`,
      String.raw`$0.652$ is the height $\cos(0.86033)$ of the best rectangle, not its area.`,
    ], answer: 0 },
  { id: "q510-f1a", type: "frq", skill: "u5", topic: "5.10", calc: false, set: "q510-s9", part: "(a)",
    prompt: String.raw`Find $E'(v)$. Find the speed $v$ in the interval $20 < v < 80$ at which $E'(v) = 0$.`,
    rows: [
      { name: "Derivative and critical point", earns: String.raw`$E'(v) = -0.02v + 1.2$; $E'(v) = 0$ at $v = 60$.` },
    ],
    solution: String.raw`$E'(v) = -0.02v + 1.2$. Setting $-0.02v + 1.2 = 0$ gives $v = \dfrac{1.2}{0.02} = 60$ miles per hour.` },
  { id: "q510-f1b", type: "frq", skill: "u5", topic: "5.10", calc: false, set: "q510-s9", part: "(b)",
    prompt: String.raw`Find the greatest fuel efficiency of the car for $20 \le v \le 80$. Justify your answer.`,
    rows: [
      { name: "Candidates", earns: String.raw`$E(20) = 22$, $E(60) = 38$, $E(80) = 34$.` },
      { name: "Answer with units", earns: String.raw`The greatest fuel efficiency is $38$ miles per gallon, at $60$ miles per hour.` },
    ],
    solution: String.raw`$E$ is continuous on $[20, 80]$, and its only critical point is $v = 60$. Checking the candidates: $E(20) = -4 + 24 + 2 = 22$, $E(60) = -36 + 72 + 2 = 38$, and $E(80) = -64 + 96 + 2 = 34$. The greatest value is $38$, so the greatest fuel efficiency is $38$ miles per gallon, at a speed of $60$ miles per hour.` },
];

export default { forms: [{ id: "q510", name: "Topic 5.10 Quiz: Introduction to Optimization", group: "Unit 5: Analytical Applications of Differentiation", items }] };

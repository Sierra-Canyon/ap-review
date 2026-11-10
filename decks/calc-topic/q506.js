import { graph } from "../../plot.js";

// f': line segments through (-3, 2), (-1, -2), (2, 1), (4, -1); zeros at -2, 1, 3
const dfGraph = graph({
  x: [-3, 4], y: [-3, 3], xname: "x", yname: "y",
  segments: [[-3, 2, -1, -2], [-1, -2, 2, 1], [2, 1, 4, -1]],
  dots: [[-3, 2, "closed"], [4, -1, "closed"]],
  labels: [[2.2, 1.5, "y = f'(x)"]],
  alt: "Graph of y = f'(x) for x from -3 to 4, made of three line segments. It falls from (-3, 2) through (-2, 0) to (-1, -2), rises through (1, 0) to (2, 1), and falls through (3, 0) to (4, -1).",
});

// f'': segments (-1, 2.25)-(3, -0.75), level (3, -0.75)-(5, -0.75), (5, -0.75)-(7, 0.75). Zeros at 2 and 6; f'' < 0 on (2, 6).
// f''(0) = 1.5, so the graph crosses the y-axis between the tick labels.
const d2Graph = graph({
  x: [-1, 7], y: [-2, 3], xname: "x", yname: "y",
  segments: [[-1, 2.25, 3, -0.75], [3, -0.75, 5, -0.75], [5, -0.75, 7, 0.75]],
  dots: [[-1, 2.25, "closed"], [7, 0.75, "closed"]],
  labels: [[5.0, 1.9, "y = f''(x)"]],
  alt: "Graph of y = f''(x) for x from -1 to 7, made of three line segments. It falls from (-1, 2.25) through (2, 0) to (3, -0.75), stays level at height -0.75 from x = 3 to x = 5, and rises through (6, 0) to (7, 0.75). The graph is above the x-axis for -1 < x < 2 and 6 < x < 7, and below it for 2 < x < 6.",
});

export const sets = {
  "q506-s2": {
    name: "The graph of f''", label: "Graph",
    intro: String.raw`The function $f$ is twice differentiable on $[-1, 7]$. The graph of its second derivative $f''$, which consists of three line segments, is shown below.`,
    sources: [{ title: "", blocks: [{ svg: d2Graph }] }],
  },
  "q506-s1": {
    name: "The graph of f'", label: "Graph",
    intro: String.raw`The graph of $f'$, the derivative of a function $f$, consists of three line segments and is shown below for $-3 \le x \le 4$.`,
    sources: [{ title: "", blocks: [{ svg: dfGraph }] }],
  },
  "q506-s9": {
    name: "The function f", label: "Free response",
    intro: String.raw`Let $f(x) = \dfrac{x}{x^2 + 3}$. It can be shown that $f'(x) = \dfrac{3 - x^2}{(x^2 + 3)^2}$ and $f''(x) = \dfrac{2x(x^2 - 9)}{(x^2 + 3)^3}$.`,
    sources: [{ title: "", blocks: [{ p: String.raw`$$f(x) = \dfrac{x}{x^2 + 3}, \quad f'(x) = \dfrac{3 - x^2}{(x^2 + 3)^2}, \quad f''(x) = \dfrac{2x(x^2 - 9)}{(x^2 + 3)^3}$$` }] }],
  },
};

const items = [
  { id: "q506-m01", type: "mcq", skill: "u5", topic: "5.6", calc: false, difficulty: "easy",
    stem: String.raw`Let $f(x) = \dfrac{1}{x^2 + 12}$. Then $f'(x) = -\dfrac{2x}{\left(x^2 + 12\right)^2}$.`,
    question: String.raw`On which interval is the graph of $f$ concave down?`,
    choices: [String.raw`$(-2, 2)$`, String.raw`$(-\infty, -2)$ and $(2, \infty)$`, String.raw`$(0, \infty)$`, String.raw`$(-\infty, \infty)$`],
    why: [
      String.raw`By the quotient rule, $f''(x) = \dfrac{-2\left(x^2 + 12\right)^2 + 2x \cdot 2\left(x^2 + 12\right)(2x)}{\left(x^2 + 12\right)^4} = \dfrac{6x^2 - 24}{\left(x^2 + 12\right)^3} = \dfrac{6(x - 2)(x + 2)}{\left(x^2 + 12\right)^3}$, which is negative on $(-2, 2)$.`,
      String.raw`$f''(x) > 0$ on these intervals, so the graph is concave up there.`,
      String.raw`$f'(x) < 0$ for $x > 0$, so $f$ is decreasing there. Concavity depends on the sign of $f''$.`,
      String.raw`This differentiates $-\dfrac{2x}{\left(x^2 + 12\right)^2}$ as if the denominator were constant, getting $-\dfrac{2}{\left(x^2 + 12\right)^2}$, which is always negative. The quotient rule adds a positive term.`,
    ], answer: 0 },
  { id: "q506-m02", type: "mcq", skill: "u5", topic: "5.6", calc: false, difficulty: "moderate",
    question: String.raw`At what value of $x$ does the graph of $f(x) = xe^{x}$ have a point of inflection?`,
    choices: [String.raw`$x = -2$`, String.raw`$x = -1$`, String.raw`$x = 0$`, String.raw`$x = 2$`],
    why: [
      String.raw`$f'(x) = e^{x}(x + 1)$ and $f''(x) = e^{x}(x + 1) + e^{x} = e^{x}(x + 2)$. $f''$ changes sign from negative to positive at $x = -2$.`,
      String.raw`$f'(-1) = 0$, so $x = -1$ is a critical point (a relative minimum), not a point of inflection.`,
      String.raw`$f(0) = 0$ is a zero of $f$, not a change in concavity. $f''(0) = 2 > 0$.`,
      String.raw`This comes from $f''(x) = e^{x}(x - 2)$, a sign error. The two terms of $f''$ are $e^{x}(x + 1)$ and $e^{x}$.`,
    ], answer: 0 },
  { id: "q506-m03", type: "mcq", skill: "u5", topic: "5.6", calc: false, difficulty: "easy", set: "q506-s1",
    question: String.raw`On which interval is the graph of $f$ concave up?`,
    choices: [String.raw`$(-1, 2)$`, String.raw`$(-3, -1)$ and $(2, 4)$`, String.raw`$(-3, -2)$ and $(1, 3)$`, String.raw`$(-2, 1)$ and $(3, 4)$`],
    why: [
      String.raw`The graph of $f$ is concave up where $f'$ is increasing. The graph of $f'$ rises on $(-1, 2)$.`,
      String.raw`$f'$ is decreasing on these intervals, so the graph of $f$ is concave down there.`,
      String.raw`$f'(x) > 0$ on these intervals, so $f$ is increasing there. Concavity depends on whether $f'$ is increasing.`,
      String.raw`$f'(x) < 0$ on these intervals, so $f$ is decreasing there.`,
    ], answer: 0 },
  { id: "q506-m04", type: "mcq", skill: "u5", topic: "5.6", calc: false, difficulty: "difficult",
    stem: String.raw`The derivative of a function $f$ is $f'(x) = \left(x^2 - 8\right)e^{x}$.`,
    question: String.raw`On which interval is $f$ decreasing and the graph of $f$ concave up?`,
    choices: [String.raw`$\left(2, 2\sqrt{2}\right)$`, String.raw`$\left(-2\sqrt{2}, 2\right)$`, String.raw`$\left(-2\sqrt{2}, 2\sqrt{2}\right)$`, String.raw`$(2, \infty)$`],
    why: [
      String.raw`Since $e^{x} > 0$, $f'(x) < 0$ exactly when $x^2 < 8$, on $\left(-2\sqrt{2}, 2\sqrt{2}\right)$. By the product rule, $f''(x) = 2xe^{x} + \left(x^2 - 8\right)e^{x} = (x + 4)(x - 2)e^{x}$, which is positive for $x < -4$ and for $x > 2$. Both hold on $\left(2, 2\sqrt{2}\right)$.`,
      String.raw`$f$ is decreasing on $\left(-2\sqrt{2}, 2\right)$, but $f''(x) < 0$ there, so the graph is concave down.`,
      String.raw`$f$ is decreasing on all of $\left(-2\sqrt{2}, 2\sqrt{2}\right)$, but the graph is concave down on the part $\left(-2\sqrt{2}, 2\right)$.`,
      String.raw`The graph is concave up on $(2, \infty)$, but for $x > 2\sqrt{2}$, $f'(x) > 0$ and $f$ is increasing.`,
    ], answer: 0 },
  { id: "q506-m05", type: "mcq", skill: "u5", topic: "5.6", calc: false, difficulty: "moderate", set: "q506-s2",
    question: String.raw`On which interval or intervals is the graph of $f$ concave down?`,
    choices: [String.raw`$(2, 6)$`, String.raw`$(-1, 2)$ and $(6, 7)$`, String.raw`$(-1, 3)$`, String.raw`$(2, 3)$ and $(5, 6)$`],
    why: [
      String.raw`The graph of $f$ is concave down where $f''(x) < 0$, that is, where the graph of $f''$ is below the $x$-axis. That is the interval $(2, 6)$, including the level part from $x = 3$ to $x = 5$.`,
      String.raw`$f''(x) > 0$ on these intervals, so the graph of $f$ is concave up there.`,
      String.raw`$f''$ is decreasing on $(-1, 3)$. That reads the graph of $f''$ as if it were the graph of $f'$. Concavity depends on the sign of $f''$.`,
      String.raw`This leaves out $(3, 5)$, where $f''$ is constant. $f''(x) = -0.75 < 0$ there, so the graph of $f$ is concave down on that interval too.`,
    ], answer: 0 },
  { id: "q506-m06", type: "mcq", skill: "u5", topic: "5.6", calc: true, difficulty: "moderate",
    stem: String.raw`A function $f$ has derivative $f'(x) = x\sin x$.`,
    question: String.raw`What is the $x$-coordinate of the point of inflection of the graph of $f$ on the interval $0 < x < 4$?`,
    choices: ["$2.029$", "$3.142$", "$1.571$", "$2.356$"],
    why: [
      String.raw`$f''(x) = \sin x + x\cos x$. Solving $f''(x) = 0$ with a calculator on $(0, 4)$ gives $x \approx 2.029$. $f''$ is positive just before this value and negative just after it, so the concavity changes there.`,
      String.raw`$x = \pi$ is a zero of $f'(x) = x\sin x$, where $f$ has a relative extremum, not where the concavity changes.`,
      String.raw`$x = \dfrac{\pi}{2}$ solves $x\cos x = 0$, which keeps only one term of the product rule. $f''\left(\dfrac{\pi}{2}\right) = 1 \ne 0$.`,
      String.raw`$x = \dfrac{3\pi}{4}$ solves $\sin x + \cos x = 0$, which leaves out the factor $x$ in the second term of the product rule.`,
    ], answer: 0 },
  { id: "q506-f1a", type: "frq", skill: "u5", topic: "5.6", calc: false, set: "q506-s9", part: "(a)",
    prompt: String.raw`Find all intervals on which the graph of $f$ is concave up. Justify your answer.`,
    rows: [
      { name: "Intervals", earns: String.raw`$-3 < x < 0$ and $x > 3$.` },
      { name: "Justification", earns: String.raw`$f''(x) > 0$ on these intervals, from the sign of $2x(x^2 - 9)$ with $(x^2 + 3)^3 > 0$.` },
    ],
    solution: String.raw`The denominator $(x^2 + 3)^3$ is always positive, so the sign of $f''(x)$ is the sign of $2x(x - 3)(x + 3)$. Testing each interval: on $x < -3$ the sign is negative, on $-3 < x < 0$ positive, on $0 < x < 3$ negative, and on $x > 3$ positive. $f''(x) > 0$ on $(-3, 0)$ and $(3, \infty)$, so the graph of $f$ is concave up on those intervals.` },
  { id: "q506-f1b", type: "frq", skill: "u5", topic: "5.6", calc: false, set: "q506-s9", part: "(b)",
    prompt: String.raw`Find the $x$-coordinates of all points of inflection of the graph of $f$. Give a reason for your answer.`,
    rows: [
      { name: "Answer with reason", earns: String.raw`$x = -3$, $x = 0$, and $x = 3$, because $f''$ changes sign at each of these values.` },
    ],
    solution: String.raw`From part (a), $f''$ changes from negative to positive at $x = -3$, from positive to negative at $x = 0$, and from negative to positive at $x = 3$. $f$ is defined at each of these values, so the graph of $f$ has points of inflection at $x = -3$, $x = 0$, and $x = 3$.` },
];

export default { forms: [{ id: "q506", name: "Topic 5.6 Quiz: Concavity", group: "Unit 5: Analytical Applications of Differentiation", items }] };

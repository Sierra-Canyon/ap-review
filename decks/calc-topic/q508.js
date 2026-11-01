import { graph } from "../../plot.js";

// s1: f(x) = x^4/4 - 2x^2
const f1 = (x) => x ** 4 / 4 - 2 * x ** 2;
const g1 = graph({
  x: [-3, 3], y: [-5, 3], xname: "x", yname: "y",
  fns: [{ f: f1, from: -3, to: 3, label: "y = f(x)", labelAt: 2.75 }],
  dots: [[-2, -4, "closed"], [0, 0, "closed"], [2, -4, "closed"]],
  alt: "Graph of y = f(x) for x from -3 to 3, shaped like a W. It falls from (-3, 2.25) to a relative minimum at (-2, -4), rises to a relative maximum at (0, 0), falls to a relative minimum at (2, -4), and rises to (3, 2.25). It crosses the x-axis at about x = -2.83 and x = 2.83 and touches it at x = 0. The concavity changes at about x = -1.15 and x = 1.15.",
});

// s2: f' line segments through (-4, -2), (-1, 1), (1, -1), (4, 2); zeros at -2, 0, 2; corners at -1 and 1
const g2 = graph({
  x: [-4, 4], y: [-3, 3], xname: "x", yname: "y",
  segments: [[-4, -2, -1, 1], [-1, 1, 1, -1], [1, -1, 4, 2]],
  dots: [[-4, -2, "closed"], [4, 2, "closed"]],
  labels: [[2.6, 2.4, "y = f'(x)"]],
  alt: "Graph of y = f'(x) for x from -4 to 4, made of three line segments. It rises from (-4, -2) through (-2, 0) to (-1, 1), falls through (0, 0) to (1, -1), and rises through (2, 0) to (4, 2).",
});

// s3: f line segments through (-2, 0), (0, 4), (3, 4), (5, 0)
const g3 = graph({
  x: [-2, 5], y: [-1, 5], xname: "x", yname: "y",
  segments: [[-2, 0, 0, 4], [0, 4, 3, 4], [3, 4, 5, 0]],
  dots: [[-2, 0, "closed"], [5, 0, "closed"]],
  alt: "Graph of y = f(x) for x from -2 to 5, made of three line segments. It rises from (-2, 0) to (0, 4), stays level at height 4 from (0, 4) to (3, 4), and falls from (3, 4) to (5, 0).",
});

// s4: f'(x) = x^2 - 4
const g4 = graph({
  x: [-3, 3], y: [-5, 5], xname: "x", yname: "y",
  fns: [{ f: (x) => x * x - 4, from: -3, to: 3, label: "y = f'(x)", labelAt: 2.4 }],
  alt: "Graph of y = f'(x) for x from -3 to 3: a parabola opening upward with vertex at (0, -4), crossing the x-axis at x = -2 and x = 2. It is above the x-axis for x < -2 and x > 2, and below it for -2 < x < 2.",
});

// s5: f(x) = -x^3/6 + x^2/2 + 1
const f5 = (x) => -(x ** 3) / 6 + x ** 2 / 2 + 1;
const g5 = graph({
  x: [-2, 4], y: [-2, 5], xname: "x", yname: "y",
  fns: [{ f: f5, from: -2, to: 4, label: "y = f(x)", labelAt: 3.2 }],
  dots: [[-2, f5(-2), "closed"], [0, 1, "closed"], [1, 4 / 3, "closed"], [2, 5 / 3, "closed"], [4, f5(4), "closed"]],
  alt: "Graph of y = f(x) for x from -2 to 4. The curve starts at (-2, 13/3), falls while concave up to a relative minimum at (0, 1), rises through (1, 4/3), where it changes from concave up to concave down, to a relative maximum at (2, 5/3), and then falls to (4, -5/3).",
});

// s6: f'(x) = 2x - 2 (zero at x = 1)
const g6 = graph({
  x: [-1, 3], y: [-4, 4], xname: "x", yname: "y",
  segments: [[-1, -4, 3, 4]],
  labels: [[2, 3, "y = f'(x)"]],
  alt: "Graph of y = f'(x) for x from -1 to 3: a straight line through (0, -2) and (1, 0) with slope 2.",
});

// s9: f' line segments through (-3, -2), (-1, 2), (1, 2), (3, -2), (4, 0)
const g9 = graph({
  x: [-3, 4], y: [-3, 3], xname: "x", yname: "y",
  segments: [[-3, -2, -1, 2], [-1, 2, 1, 2], [1, 2, 3, -2], [3, -2, 4, 0]],
  dots: [[-3, -2, "closed"], [4, 0, "closed"]],
  labels: [[-0.6, 2.4, "y = f'(x)"]],
  alt: "Graph of y = f'(x) for x from -3 to 4, made of four line segments. It rises from (-3, -2) through (-2, 0) to (-1, 2), stays level at height 2 from (-1, 2) to (1, 2), falls through (2, 0) to (3, -2), and rises to (4, 0).",
});

const box = (svg) => [{ title: "", blocks: [{ svg }] }];

export const sets = {
  "q508-s1": { name: "The graph of f", label: "Graph", intro: String.raw`The graph of a differentiable function $f$ is shown below.`, sources: box(g1) },
  "q508-s2": { name: "The graph of f'", label: "Graph", intro: String.raw`The graph of $f'$, the derivative of a function $f$, consists of three line segments and is shown below for $-4 \le x \le 4$.`, sources: box(g2) },
  "q508-s3": { name: "The graph of f", label: "Graph", intro: String.raw`The graph of the continuous function $f$, which consists of three line segments, is shown below for $-2 \le x \le 5$.`, sources: box(g3) },
  "q508-s4": { name: "The graph of f'", label: "Graph", intro: String.raw`The graph of $f'$, the derivative of a function $f$, is the parabola shown below.`, sources: box(g4) },
  "q508-s5": { name: "The graph of f", label: "Graph", intro: String.raw`The graph of a twice-differentiable function $f$ is shown below for $-2 \le x \le 4$. Its relative minimum is at $(0, 1)$, its relative maximum is at $\left(2, \frac{5}{3}\right)$, and its point of inflection is at $\left(1, \frac{4}{3}\right)$.`, sources: box(g5) },
  "q508-s6": { name: "The graph of f'", label: "Graph", intro: String.raw`The graph of $f'$, the derivative of a function $f$, is the line shown below.`, sources: box(g6) },
  "q508-s9": { name: "The graph of f'", label: "Free response", intro: String.raw`The function $f$ is continuous on $[-3, 4]$. The graph of its derivative $f'$, which consists of four line segments, is shown below.`, sources: box(g9) },
};

const items = [
  { id: "q508-m01", type: "mcq", skill: "u5", topic: "5.8", calc: false, set: "q508-s1",
    question: String.raw`Which of the following describes the graph of $f'$ on the interval $-3 < x < 3$?`,
    choices: [
      String.raw`It crosses the $x$-axis at $x = -2$, $x = 0$, and $x = 2$.`,
      String.raw`It crosses the $x$-axis at $x = -2\sqrt{2}$, $x = 0$, and $x = 2\sqrt{2}$.`,
      String.raw`It crosses the $x$-axis only at $x = -2$ and $x = 2$.`,
      String.raw`It crosses the $x$-axis only at $x = -\frac{2}{\sqrt{3}}$ and $x = \frac{2}{\sqrt{3}}$.`,
    ],
    why: [
      String.raw`$f$ has horizontal tangents at its three relative extrema, $x = -2$, $x = 0$, and $x = 2$, and $f$ changes between increasing and decreasing at each one, so the graph of $f'$ crosses the $x$-axis there.`,
      String.raw`These are where the graph of $f$ meets the $x$-axis. $f' = 0$ where the tangent line is horizontal.`,
      String.raw`The relative maximum at $(0, 0)$ also has a horizontal tangent: $f$ rises before $x = 0$ and falls after it, so $f'$ changes from positive to negative there.`,
      String.raw`At these values the graph of $f$ changes concavity, so $f'$ has relative extrema there, not zeros.`,
    ], answer: 0 },
  { id: "q508-m02", type: "mcq", skill: "u5", topic: "5.8", calc: false, set: "q508-s2",
    question: String.raw`At which values of $x$ in the open interval $(-4, 4)$ does the graph of $f$ have a point of inflection?`,
    choices: [String.raw`$x = -1$ and $x = 1$`, String.raw`$x = -2$, $x = 0$, and $x = 2$`, String.raw`$x = 0$ only`, String.raw`$x = -2$ and $x = 2$`],
    why: [
      String.raw`The graph of $f$ changes concavity where $f'$ changes from increasing to decreasing or back. $f'$ rises to $x = -1$ and then falls, and falls to $x = 1$ and then rises.`,
      String.raw`These are the zeros of $f'$, where $f$ has relative extrema, not where its concavity changes.`,
      String.raw`$f'$ changes from positive to negative at $x = 0$, so $f$ has a relative maximum there.`,
      String.raw`$f'$ changes from negative to positive at $x = -2$ and $x = 2$, so $f$ has relative minimums there.`,
    ], answer: 0 },
  { id: "q508-m03", type: "mcq", skill: "u5", topic: "5.8", calc: false, set: "q508-s3",
    question: String.raw`What are the values of $f'(x)$ for $0 < x < 3$ and for $3 < x < 5$, in that order?`,
    choices: [String.raw`$0$ and $-2$`, String.raw`$4$ and $-2$`, String.raw`$0$ and $2$`, String.raw`$0$ and $-4$`],
    why: [
      String.raw`On $(0, 3)$ the graph is level, so $f'(x) = 0$. On $(3, 5)$ the slope is $\dfrac{0 - 4}{5 - 3} = -2$.`,
      String.raw`$4$ is the height of $f$ on $(0, 3)$. The derivative is the slope, which is $0$ on a level segment.`,
      String.raw`The segment on $(3, 5)$ falls, so its slope is negative.`,
      String.raw`$-4$ is the change in $f$ on $(3, 5)$. The slope divides that change by the run, $2$.`,
    ], answer: 0 },
  { id: "q508-m04", type: "mcq", skill: "u5", topic: "5.8", calc: false, set: "q508-s4",
    question: String.raw`Which of the following describes the graph of $f$?`,
    choices: [
      String.raw`$f$ has a relative maximum at $x = -2$, a relative minimum at $x = 2$, and a point of inflection at $x = 0$.`,
      String.raw`$f$ has a relative minimum at $x = -2$, a relative maximum at $x = 2$, and a point of inflection at $x = 0$.`,
      String.raw`$f$ has a relative minimum at $x = 0$ and no point of inflection.`,
      String.raw`$f$ has a relative maximum at $x = -2$, a relative minimum at $x = 2$, and no point of inflection.`,
    ],
    why: [
      String.raw`$f'$ changes from positive to negative at $x = -2$ (relative maximum) and from negative to positive at $x = 2$ (relative minimum). $f'$ decreases and then increases, changing at $x = 0$, so the graph of $f$ changes from concave down to concave up there.`,
      String.raw`This reverses the sign changes of $f'$. $f'$ is positive to the left of $x = -2$, so $f$ is increasing into $x = -2$ and has a relative maximum there.`,
      String.raw`This reads the graph of $f'$ as if it were the graph of $f$. $f'(0) = -4 \ne 0$, so $x = 0$ is not a critical point of $f$.`,
      String.raw`$f'$ has its least value at $x = 0$, where it changes from decreasing to increasing, so the concavity of $f$ changes there.`,
    ], answer: 0 },
  { id: "q508-m05", type: "mcq", skill: "u5", topic: "5.8", calc: false, set: "q508-s5",
    question: String.raw`At what value of $x$ in the interval $[-2, 4]$ is $f'(x)$ greatest?`,
    choices: [String.raw`$x = 1$`, String.raw`$x = 2$`, String.raw`$x = 0$`, String.raw`$x = -2$`],
    why: [
      String.raw`$f'$ is increasing where $f$ is concave up, on $[-2, 1]$, and decreasing where $f$ is concave down, on $[1, 4]$. So $f'$ is greatest at the point of inflection, $x = 1$, where the graph of $f$ is steepest upward.`,
      String.raw`At $x = 2$, $f$ has a relative maximum, so $f'(2) = 0$. The slope is larger at $x = 1$.`,
      String.raw`At $x = 0$, $f$ has a relative minimum, so $f'(0) = 0$.`,
      String.raw`$f$ has its greatest value at $x = -2$, but the graph is falling steeply there, so $f'(-2) < 0$.`,
    ], answer: 0 },
  { id: "q508-m06", type: "mcq", skill: "u5", topic: "5.8", calc: false, set: "q508-s6",
    question: String.raw`Which of the following describes the graph of $f$?`,
    choices: [
      String.raw`Concave up everywhere, with a relative minimum at $x = 1$`,
      String.raw`Concave down everywhere, with a relative maximum at $x = 1$`,
      String.raw`Concave up everywhere, with a relative minimum at $x = 0$`,
      String.raw`A line with slope $2$`,
    ],
    why: [
      String.raw`$f'$ changes from negative to positive at $x = 1$, so $f$ has a relative minimum there. $f'$ is increasing everywhere (its slope is $2$), so the graph of $f$ is concave up everywhere.`,
      String.raw`$f'$ is negative to the left of $x = 1$ and positive to the right, so $f$ falls and then rises: a minimum. An increasing $f'$ means concave up.`,
      String.raw`$f'(0) = -2 \ne 0$, so $f$ is still decreasing at $x = 0$. The minimum is where $f' = 0$, at $x = 1$.`,
      String.raw`This treats the graph of $f'$ as the graph of $f$. $f'$ is not constant, so $f$ is not a line.`,
    ], answer: 0 },
  { id: "q508-f1a", type: "frq", skill: "u5", topic: "5.8", calc: false, set: "q508-s9", part: "(a)",
    prompt: String.raw`Find the $x$-coordinates of all points in the open interval $(-3, 4)$ at which $f$ has a relative minimum or a relative maximum. Classify each and justify your answers.`,
    rows: [
      { name: "Relative minimum", earns: String.raw`Relative minimum at $x = -2$, because $f'$ changes from negative to positive there.` },
      { name: "Relative maximum", earns: String.raw`Relative maximum at $x = 2$, because $f'$ changes from positive to negative there.` },
    ],
    solution: String.raw`$f'(x) = 0$ in $(-3, 4)$ only at $x = -2$ and $x = 2$. $f'(x) < 0$ on $(-3, -2)$ and $f'(x) > 0$ on $(-2, 2)$, so $f$ has a relative minimum at $x = -2$. $f'(x) > 0$ on $(-2, 2)$ and $f'(x) < 0$ on $(2, 4)$, so $f$ has a relative maximum at $x = 2$.` },
  { id: "q508-f1b", type: "frq", skill: "u5", topic: "5.8", calc: false, set: "q508-s9", part: "(b)",
    prompt: String.raw`Find all open intervals on which the graph of $f$ is concave up. Give a reason for your answer.`,
    rows: [
      { name: "Answer with reason", earns: String.raw`$(-3, -1)$ and $(3, 4)$, because $f'$ is increasing on these intervals.` },
    ],
    solution: String.raw`The graph of $f$ is concave up where $f'$ is increasing. The graph of $f'$ rises on $(-3, -1)$ and on $(3, 4)$, so the graph of $f$ is concave up on those intervals. ($f'$ is constant on $(-1, 1)$ and decreasing on $(1, 3)$.)` },
  { id: "q508-f1c", type: "frq", skill: "u5", topic: "5.8", calc: false, set: "q508-s9", part: "(c)",
    prompt: String.raw`Describe the shape of the graph of $f$ on the interval $-1 < x < 1$. Give a reason for your answer.`,
    rows: [
      { name: "Answer with reason", earns: String.raw`The graph of $f$ is a line segment with slope $2$, because $f'(x) = 2$ for all $x$ in $(-1, 1)$.` },
    ],
    solution: String.raw`On $-1 < x < 1$, $f'(x) = 2$, a constant. A function with constant derivative $2$ is linear with slope $2$, so the graph of $f$ is a line segment rising with slope $2$ on that interval. It is neither concave up nor concave down there.` },
];

export default { forms: [{ id: "q508", name: "Topic 5.8 Quiz: Graphs of Functions and Derivatives", group: "Unit 5: Analytical Applications of Differentiation", items }] };

import { graph } from "../../plot.js";

// f': line segments through (-4, -1), (-1, 2), (2, -1), (4, 1); zeros at -3, 1, 3
const dfGraph = graph({
  x: [-4, 4], y: [-2, 3], xname: "x", yname: "y",
  segments: [[-4, -1, -1, 2], [-1, 2, 2, -1], [2, -1, 4, 1]],
  dots: [[-4, -1, "closed"], [4, 1, "closed"]],
  labels: [[-0.8, 2.4, "y = f'(x)"]],
  alt: "Graph of y = f'(x) for x from -4 to 4, made of three line segments. It rises from (-4, -1) through (-3, 0) to (-1, 2), falls through (1, 0) to (2, -1), and rises through (3, 0) to (4, 1). The graph is below the x-axis for -4 < x < -3 and 1 < x < 3, and above it for -3 < x < 1 and 3 < x < 4.",
});

// f(x) = -(2/9)x^3 + (1/3)x^2 + (4/3)x - 2/9 on [-3, 4]: relative min (-1, -1), relative max (2, 2), inflection at x = 1/2.
// f'(x) = -(2/3)(x + 1)(x - 2) is Graph C. A is -f', B is f''(x) = -(4/3)x + 2/3, D is -(2/3)(x - 2)^2 + 2 (highest where f is highest).
const fCurve = (x) => (-2 * x ** 3) / 9 + x ** 2 / 3 + (4 * x) / 3 - 2 / 9;
const fBig = graph({
  x: [-3, 4], y: [-5, 6], xname: "x", yname: "y",
  fns: [{ f: fCurve, from: -3, to: 4 }],
  dots: [[-1, -1, "closed"], [2, 2, "closed"]],
  alt: "Graph of f for x from -3 to 4. The graph falls from about (-3, 4.8) to a low point at (-1, -1), rises to a high point at (2, 2), and falls to about (4, -3.8).",
});
const cand = (f, alt) => graph({ x: [-3, 4], y: [-6, 6], step: { x: 1, y: 2 }, xname: "x", yname: "y", width: 260, height: 200, fns: [{ f, from: -3, to: 4 }], alt });
const candA = cand((x) => (2 / 3) * (x + 1) * (x - 2), "Graph A: an upward-opening parabola crossing the x-axis at x = -1 and x = 2, lowest at x = 0.5.");
const candB = cand((x) => (-4 / 3) * x + 2 / 3, "Graph B: a falling straight line crossing the x-axis at x = 0.5.");
const candC = cand((x) => (-2 / 3) * (x + 1) * (x - 2), "Graph C: a downward-opening parabola crossing the x-axis at x = -1 and x = 2, highest at x = 0.5.");
const candD = cand((x) => (-2 / 3) * (x - 2) ** 2 + 2, "Graph D: a downward-opening parabola with its highest point at (2, 2), crossing the x-axis at about x = 0.27 and x = 3.73.");

export const sets = {
  "q504-s2": {
    name: "Choosing the graph of f'", label: "Graphs",
    intro: String.raw`The graph of a differentiable function $f$ is shown first. It has horizontal tangent lines at $(-1, -1)$ and $(2, 2)$. Four graphs, labeled A to D, follow it.`,
    sources: [{ title: "", blocks: [{ svg: fBig, caption: "The graph of $f$" }, { svg: candA, caption: "Graph A" }, { svg: candB, caption: "Graph B" }, { svg: candC, caption: "Graph C" }, { svg: candD, caption: "Graph D" }] }],
  },
  "q504-s1": {
    name: "The graph of f'", label: "Graph",
    intro: String.raw`The function $f$ is continuous on $[-4, 4]$. The graph of its derivative $f'$, which consists of three line segments, is shown below.`,
    sources: [{ title: "", blocks: [{ svg: dfGraph }] }],
  },
  "q504-s9": {
    name: "The derivative of f", label: "Free response",
    intro: String.raw`A function $f$ is differentiable for all real numbers, and its derivative is $f'(x) = \left(4 - x^2\right)e^{x}$.`,
    sources: [{ title: "", blocks: [{ p: String.raw`$$f'(x) = \left(4 - x^2\right)e^{x}$$` }] }],
  },
};

const items = [
  { id: "q504-m01", type: "mcq", skill: "u5", topic: "5.4", calc: false, difficulty: "moderate",
    stem: String.raw`The derivative of a function $f$ is $f'(x) = (x + 2)(x - 1)^3$.`,
    question: String.raw`At which value or values of $x$ does $f$ have a relative minimum?`,
    choices: [String.raw`$x = 1$ only`, String.raw`$x = -2$ only`, String.raw`$f$ has no relative minimum.`, String.raw`$x = -2$ and $x = 1$`],
    why: [
      String.raw`$(x - 1)^3$ has the sign of $x - 1$, so $f'$ is $+$ on $(-\infty, -2)$, $-$ on $(-2, 1)$, and $+$ on $(1, \infty)$. $f'$ changes from negative to positive only at $x = 1$.`,
      String.raw`$f'$ changes from positive to negative at $x = -2$, so $f$ has a relative maximum there.`,
      String.raw`This treats $(x - 1)^3$ like a squared factor that keeps its sign. An odd power changes sign, so $f'$ does change from negative to positive at $x = 1$.`,
      String.raw`Both are critical points, but $x = -2$ is a relative maximum, since $f'$ changes from positive to negative there.`,
    ], answer: 0 },
  { id: "q504-m02", type: "mcq", skill: "u5", topic: "5.4", calc: false, difficulty: "easy", set: "q504-s1",
    question: String.raw`At which value or values of $x$ in the open interval $(-4, 4)$ does $f$ have a relative maximum?`,
    choices: [String.raw`$x = 1$ only`, String.raw`$x = -1$ only`, String.raw`$x = -3$ and $x = 3$`, String.raw`$x = -1$ and $x = 2$`],
    why: [
      String.raw`$f'(x) > 0$ on $(-3, 1)$ and $f'(x) < 0$ on $(1, 3)$. $f'$ changes from positive to negative only at $x = 1$.`,
      String.raw`$f'$ has its greatest value at $x = -1$, but $f'(-1) = 2 > 0$, so $f$ is still increasing there.`,
      String.raw`$f'$ changes from negative to positive at $x = -3$ and $x = 3$, so these are relative minima.`,
      String.raw`$f'$ has its greatest value at $x = -1$ and its least value at $x = 2$. These are the extrema of $f'$, where the graph of $f$ changes concavity, not the extrema of $f$.`,
    ], answer: 0 },
  { id: "q504-m03", type: "mcq", skill: "u5", topic: "5.4", calc: false, difficulty: "easy", set: "q504-s2",
    question: String.raw`Which of the graphs A to D could be the graph of $f'$?`,
    choices: ["Graph C", "Graph A", "Graph B", "Graph D"],
    why: [
      String.raw`$f$ decreases until its relative minimum at $x = -1$, increases until its relative maximum at $x = 2$, and then decreases. So $f'$ is negative, then positive, then negative, with zeros at $x = -1$ and $x = 2$. Graph C has exactly that sign pattern.`,
      String.raw`Graph A has the right zeros, but its signs are reversed: it is positive where $f$ is decreasing.`,
      String.raw`Graph B changes sign only at $x = 0.5$, where the graph of $f$ changes concavity. It matches $f''$, not $f'$.`,
      String.raw`Graph D is highest where $f$ is highest. At $x = 2$, $f$ has a horizontal tangent, so $f'(2) = 0$, not a maximum; Graph D is also negative near $x = 0$, where $f$ is increasing.`,
    ], answer: 0 },
  { id: "q504-m04", type: "mcq", skill: "u5", topic: "5.4", calc: false, difficulty: "moderate",
    question: String.raw`At what value of $x$ does $f(x) = x^2e^{x}$ have a relative maximum?`,
    choices: [String.raw`$x = -2$`, String.raw`$x = 0$`, String.raw`$x = 2$`, String.raw`$f$ has no relative maximum.`],
    why: [
      String.raw`$f'(x) = 2xe^{x} + x^2e^{x} = xe^{x}(x + 2)$. Since $e^{x} > 0$, $f'$ is positive for $x < -2$, negative for $-2 < x < 0$, and positive for $x > 0$. $f'$ changes from positive to negative at $x = -2$.`,
      String.raw`$f'$ changes from negative to positive at $x = 0$, so $f(0) = 0$ is a relative minimum.`,
      String.raw`This comes from a sign error, $f'(x) = xe^{x}(x - 2)$. In fact $f'(2) = 8e^{2} > 0$, so $x = 2$ is not a critical point.`,
      String.raw`$e^{x}$ is always increasing, but the factor $x^2$ makes $f$ rise and then fall on $(-\infty, 0)$. $f'$ changes from positive to negative at $x = -2$.`,
    ], answer: 0 },
  { id: "q504-m05", type: "mcq", skill: "u5", topic: "5.4", calc: false, difficulty: "difficult",
    stem: String.raw`A function $f$ is continuous for all real numbers, and $f'(x) = \dfrac{x - 3}{\sqrt[3]{x}}$ for $x \ne 0$. $f'(0)$ does not exist.`,
    question: String.raw`Which of the following is true?`,
    choices: [
      String.raw`$f$ has a relative maximum at $x = 0$ and a relative minimum at $x = 3$.`,
      String.raw`$f$ has a relative minimum at $x = 3$ and no other relative extremum.`,
      String.raw`$f$ has a relative minimum at $x = 0$ and a relative maximum at $x = 3$.`,
      String.raw`$f$ has no relative extremum at $x = 0$ because $f'(0)$ does not exist.`,
    ],
    why: [
      String.raw`For $x < 0$, numerator and denominator are both negative, so $f'(x) > 0$. For $0 < x < 3$, $f'(x) < 0$. For $x > 3$, $f'(x) > 0$. Since $f$ is continuous at $0$, $f'$ changing from positive to negative there gives a relative maximum, and $f'$ changing from negative to positive at $3$ gives a relative minimum.`,
      String.raw`$x = 0$ is also a critical point, because $f'(0)$ does not exist and $f$ is continuous there. $f'$ changes sign at $x = 0$.`,
      String.raw`This reverses the signs. $f'$ goes from positive to negative at $x = 0$, which is a relative maximum.`,
      String.raw`A function can have an extremum where $f'$ does not exist, as $|x|$ does at $0$. What matters is the sign change of $f'$, which happens at $x = 0$.`,
    ], answer: 0 },
  { id: "q504-m06", type: "mcq", skill: "u5", topic: "5.4", calc: true, difficulty: "moderate",
    stem: String.raw`A function $f$ has derivative $f'(x) = 2\sin x - \ln(x + 1)$.`,
    question: String.raw`At what value of $x$ in the open interval $(0, 5)$ does $f$ have a relative maximum?`,
    choices: ["$2.470$", "$1.357$", "$3.142$", "$4.799$"],
    why: [
      String.raw`Solving $f'(x) = 0$ with a calculator on $(0, 5)$ gives $x \approx 2.470$, the only zero. $f'(x) > 0$ just before it and $f'(x) < 0$ just after it, so $f$ has a relative maximum there.`,
      String.raw`$x \approx 1.357$ solves $f''(x) = 2\cos x - \dfrac{1}{x + 1} = 0$. That is where $f'$ is greatest, but $f'$ is positive there.`,
      String.raw`$x = \pi$ solves $2\sin x = 0$, which drops the $\ln(x + 1)$ term.`,
      String.raw`$x \approx 4.799$ is another zero of $f''$, where $f'$ is least. $f'$ is negative on both sides of it.`,
    ], answer: 0 },
  { id: "q504-f1a", type: "frq", skill: "u5", topic: "5.4", calc: false, set: "q504-s9", part: "(a)",
    prompt: String.raw`Find the $x$-coordinates of all critical points of $f$. At which of these does $f$ have a relative minimum? Justify your answer.`,
    rows: [
      { name: "Critical points", earns: String.raw`$x = -2$ and $x = 2$.` },
      { name: "Relative minimum with justification", earns: String.raw`Relative minimum at $x = -2$, because $f'$ changes from negative to positive at $x = -2$.` },
    ],
    solution: String.raw`$e^{x} > 0$ for all $x$, so $f'(x) = 0$ only when $4 - x^2 = 0$, at $x = -2$ and $x = 2$. These are the critical points. The sign of $f'(x)$ is the sign of $4 - x^2 = (2 - x)(2 + x)$: negative for $x < -2$, positive for $-2 < x < 2$, and negative for $x > 2$. $f'$ changes from negative to positive at $x = -2$, so $f$ has a relative minimum at $x = -2$.` },
  { id: "q504-f1b", type: "frq", skill: "u5", topic: "5.4", calc: false, set: "q504-s9", part: "(b)",
    prompt: String.raw`Does $f$ have a relative maximum, a relative minimum, or neither at $x = 2$? Justify your answer.`,
    rows: [
      { name: "Answer with justification", earns: String.raw`Relative maximum, because $f'$ changes from positive to negative at $x = 2$.` },
    ],
    solution: String.raw`For $-2 < x < 2$, $4 - x^2 > 0$, so $f'(x) > 0$. For $x > 2$, $4 - x^2 < 0$, so $f'(x) < 0$. $f'$ changes from positive to negative at $x = 2$, so $f$ has a relative maximum at $x = 2$.` },
];

export default { forms: [{ id: "q504", name: "Topic 5.4 Quiz: The First Derivative Test", group: "Unit 5: Analytical Applications of Differentiation", items }] };

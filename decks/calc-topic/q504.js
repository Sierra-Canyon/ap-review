import { graph } from "../../plot.js";

// f': line segments through (-4, -1), (-1, 2), (2, -1), (4, 1); zeros at -3, 1, 3
const dfGraph = graph({
  x: [-4, 4], y: [-2, 3], xname: "x", yname: "y",
  segments: [[-4, -1, -1, 2], [-1, 2, 2, -1], [2, -1, 4, 1]],
  dots: [[-4, -1, "closed"], [4, 1, "closed"]],
  labels: [[-0.8, 2.4, "y = f'(x)"]],
  alt: "Graph of y = f'(x) for x from -4 to 4, made of three line segments. It rises from (-4, -1) through (-3, 0) to (-1, 2), falls through (1, 0) to (2, -1), and rises through (3, 0) to (4, 1). The graph is below the x-axis for -4 < x < -3 and 1 < x < 3, and above it for -3 < x < 1 and 3 < x < 4.",
});

export const sets = {
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
  { id: "q504-m01", type: "mcq", skill: "u5", topic: "5.4", calc: false,
    stem: String.raw`The derivative of a function $f$ is $f'(x) = (x + 1)(x - 2)^2(x - 4)$.`,
    question: String.raw`At which value or values of $x$ does $f$ have a relative minimum?`,
    choices: [String.raw`$x = 4$ only`, String.raw`$x = -1$ only`, String.raw`$x = 2$ and $x = 4$`, String.raw`$x = -1$ and $x = 4$`],
    why: [
      String.raw`The sign of $f'$ is $+$ on $(-\infty, -1)$, $-$ on $(-1, 2)$, $-$ on $(2, 4)$, and $+$ on $(4, \infty)$. $f'$ changes from negative to positive only at $x = 4$.`,
      String.raw`$f'$ changes from positive to negative at $x = -1$, so $f$ has a relative maximum there.`,
      String.raw`$f'$ is negative on both sides of $x = 2$ because $(x - 2)^2 \ge 0$, so $x = 2$ is not an extremum.`,
      String.raw`$x = -1$ is a relative maximum, since $f'$ changes from positive to negative there.`,
    ], answer: 0 },
  { id: "q504-m02", type: "mcq", skill: "u5", topic: "5.4", calc: false, set: "q504-s1",
    question: String.raw`At which value or values of $x$ in the open interval $(-4, 4)$ does $f$ have a relative maximum?`,
    choices: [String.raw`$x = 1$ only`, String.raw`$x = -1$ only`, String.raw`$x = -3$ and $x = 3$`, String.raw`$x = 2$ only`],
    why: [
      String.raw`$f'(x) > 0$ on $(-3, 1)$ and $f'(x) < 0$ on $(1, 3)$. $f'$ changes from positive to negative only at $x = 1$.`,
      String.raw`$f'$ has its greatest value at $x = -1$, but $f'(-1) = 2 > 0$, so $f$ is still increasing there.`,
      String.raw`$f'$ changes from negative to positive at $x = -3$ and $x = 3$, so these are relative minimums.`,
      String.raw`$f'$ has its least value at $x = 2$, but $f'$ does not change sign there.`,
    ], answer: 0 },
  { id: "q504-m03", type: "mcq", skill: "u5", topic: "5.4", calc: false,
    question: String.raw`What is the relative maximum value of $f(x) = x^3 - 3x^2 - 24x + 1$?`,
    choices: ["$29$", "$-79$", "$-2$", "$4$"],
    why: [
      String.raw`$f'(x) = 3x^2 - 6x - 24 = 3(x - 4)(x + 2)$. $f'$ changes from positive to negative at $x = -2$, so the relative maximum value is $f(-2) = -8 - 12 + 48 + 1 = 29$.`,
      String.raw`$f(4) = 64 - 48 - 96 + 1 = -79$ is the relative minimum value, since $f'$ changes from negative to positive at $x = 4$.`,
      String.raw`$x = -2$ is where the relative maximum occurs. The question asks for the value $f(-2)$.`,
      String.raw`$x = 4$ is where the relative minimum occurs, not a function value.`,
    ], answer: 0 },
  { id: "q504-m04", type: "mcq", skill: "u5", topic: "5.4", calc: false,
    question: String.raw`At what value of $x$ does $f(x) = x^2e^{x}$ have a relative maximum?`,
    choices: [String.raw`$x = -2$`, String.raw`$x = 0$`, String.raw`$x = 2$`, String.raw`$f$ has no relative maximum.`],
    why: [
      String.raw`$f'(x) = 2xe^{x} + x^2e^{x} = xe^{x}(x + 2)$. Since $e^{x} > 0$, $f'$ is positive for $x < -2$, negative for $-2 < x < 0$, and positive for $x > 0$. $f'$ changes from positive to negative at $x = -2$.`,
      String.raw`$f'$ changes from negative to positive at $x = 0$, so $f(0) = 0$ is a relative minimum.`,
      String.raw`This uses $f'(x) = xe^{x}(x - 2)$, a sign error. Even then, $f'$ would change from negative to positive at $x = 2$, a minimum. In fact $f'(2) = 8e^{2} > 0$, so $x = 2$ is not a critical point.`,
      String.raw`$e^{x}$ is always increasing, but the factor $x^2$ makes $f$ rise and then fall on $(-\infty, 0)$. $f'$ changes from positive to negative at $x = -2$.`,
    ], answer: 0 },
  { id: "q504-m05", type: "mcq", skill: "u5", topic: "5.4", calc: false,
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
  { id: "q504-m06", type: "mcq", skill: "u5", topic: "5.4", calc: true,
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

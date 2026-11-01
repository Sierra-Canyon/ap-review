import { graph } from "../../plot.js";

// s1: f(x) = 2 sin x on [0, 6.5]; labeled points at x = 1, 2, 4, 5.5
const f1 = (x) => 2 * Math.sin(x);
const g1 = graph({
  x: [0, 6.5], y: [-3, 3], xname: "x", yname: "y",
  fns: [{ f: f1, from: 0, to: 6.5 }],
  dots: [[1, f1(1), "closed"], [2, f1(2), "closed"], [4, f1(4), "closed"], [5.5, f1(5.5), "closed"]],
  labels: [[0.75, f1(1) + 0.45, "A"], [2.1, f1(2) + 0.4, "B"], [3.65, f1(4) - 0.3, "C"], [5.6, f1(5.5) - 0.3, "D"]],
  alt: "Graph of y = f(x) for x from 0 to 6.5, a wave that rises from the origin to a high point near x = 1.6, falls through about (3.1, 0) to a low point near x = 4.7, and rises again. Point A is at x = 1, on the rising part before the high point, where the graph is concave down. Point B is at x = 2, on the falling part just after the high point, where the graph is concave down. Point C is at x = 4, on the falling part before the low point, where the graph is concave up. Point D is at x = 5.5, on the rising part after the low point, where the graph is concave up.",
});

// s2: f'(x) = x^2 - 2x on [-1, 3]
const g2 = graph({
  x: [-1, 3], y: [-2, 4], xname: "x", yname: "y",
  fns: [{ f: (x) => x * x - 2 * x, from: -1, to: 3, label: "y = f'(x)", labelAt: 2.6 }],
  alt: "Graph of y = f'(x) for x from -1 to 3: a parabola opening upward with vertex at (1, -1), crossing the x-axis at x = 0 and x = 2. It falls from (-1, 3) to the vertex and rises to (3, 3).",
});

export const sets = {
  "q509-s1": { name: "The graph of f", label: "Graph", intro: String.raw`The graph of a twice-differentiable function $f$ is shown below, with four labeled points.`, sources: [{ title: "", blocks: [{ svg: g1 }] }] },
  "q509-s2": { name: "The graph of f'", label: "Graph", intro: String.raw`The graph of $f'$, the derivative of a function $f$, is shown below for $-1 \le x \le 3$.`, sources: [{ title: "", blocks: [{ svg: g2 }] }] },
  "q509-s3": {
    name: "Values of f, f', and f''", label: "Table",
    intro: String.raw`The function $f$ is twice differentiable. Selected values of $f$, $f'$, and $f''$ are given in the table below.`,
    sources: [{ title: "", blocks: [{ table: { head: ["$x$", "$-2$", "$-1$", "$0$", "$1$", "$2$"], rows: [
      ["$f(x)$", "$1$", "$4$", "$2$", "$-1$", "$3$"],
      ["$f'(x)$", "$3$", "$0$", "$-2$", "$0$", "$4$"],
      ["$f''(x)$", "$-4$", "$-3$", "$0$", "$5$", "$2$"],
    ] } }] }],
  },
  "q509-s9": {
    name: "The derivative of f", label: "Free response",
    intro: String.raw`A function $f$ is twice differentiable for all real numbers, and its derivative is $f'(x) = xe^{-x^2/2}$.`,
    sources: [{ title: "", blocks: [{ p: String.raw`$$f'(x) = xe^{-x^2/2}$$` }] }],
  },
};

const items = [
  { id: "q509-m01", type: "mcq", skill: "u5", topic: "5.9", calc: false,
    stem: String.raw`A twice-differentiable function $f$ has $f'(2) = -3$ and $f''(2) = 4$.`,
    question: String.raw`Which of the following describes the graph of $f$ at $x = 2$?`,
    choices: [String.raw`Decreasing and concave up`, String.raw`Increasing and concave up`, String.raw`Decreasing and concave down`, String.raw`Increasing and concave down`],
    why: [
      String.raw`$f'(2) < 0$, so $f$ is decreasing at $x = 2$. $f''(2) > 0$, so the graph is concave up there.`,
      String.raw`$f'(2) = -3 < 0$ means $f$ is decreasing, not increasing.`,
      String.raw`$f''(2) = 4 > 0$ means concave up. The sign of $f'$ does not determine concavity.`,
      String.raw`Both signs are reversed: $f' < 0$ gives decreasing, and $f'' > 0$ gives concave up.`,
    ], answer: 0 },
  { id: "q509-m02", type: "mcq", skill: "u5", topic: "5.9", calc: false, set: "q509-s1",
    question: String.raw`At which labeled point are $f'(x)$ and $f''(x)$ both negative?`,
    choices: ["$B$", "$A$", "$C$", "$D$"],
    why: [
      String.raw`At $B$ the graph is falling, so $f' < 0$, and it is concave down, so $f'' < 0$.`,
      String.raw`At $A$ the graph is concave down, so $f'' < 0$, but it is rising, so $f' > 0$.`,
      String.raw`At $C$ the graph is falling, so $f' < 0$, but it is concave up, so $f'' > 0$.`,
      String.raw`At $D$ the graph is rising and concave up, so $f'$ and $f''$ are both positive.`,
    ], answer: 0 },
  { id: "q509-m03", type: "mcq", skill: "u5", topic: "5.9", calc: false, set: "q509-s2",
    question: String.raw`On which interval is $f$ both increasing and concave up?`,
    choices: [String.raw`$(2, 3)$`, String.raw`$(1, 2)$`, String.raw`$(-1, 0)$`, String.raw`$(1, 3)$`],
    why: [
      String.raw`$f$ is increasing where $f' > 0$, on $(-1, 0)$ and $(2, 3)$. The graph of $f$ is concave up where $f'$ is increasing, on $(1, 3)$. Both hold on $(2, 3)$.`,
      String.raw`The graph of $f$ is concave up on $(1, 2)$, but $f' < 0$ there, so $f$ is decreasing.`,
      String.raw`$f$ is increasing on $(-1, 0)$, but $f'$ is decreasing there, so the graph of $f$ is concave down.`,
      String.raw`The graph of $f$ is concave up on all of $(1, 3)$, but $f$ is decreasing on the part $(1, 2)$.`,
    ], answer: 0 },
  { id: "q509-m04", type: "mcq", skill: "u5", topic: "5.9", calc: false,
    stem: String.raw`A function $f$ is twice differentiable for all real numbers, with $f'(4) = 0$ and $f''(x) < 0$ for all $x$.`,
    question: String.raw`Which of the following must be true?`,
    choices: [
      String.raw`$f(4)$ is the absolute maximum value of $f$.`,
      String.raw`$f(4)$ is the absolute minimum value of $f$.`,
      String.raw`The graph of $f$ has a point of inflection at $x = 4$.`,
      String.raw`$f(5) > f(4)$`,
    ],
    why: [
      String.raw`$f'' < 0$ everywhere, so $f'$ is decreasing everywhere. Since $f'(4) = 0$, $f'(x) > 0$ for $x < 4$ and $f'(x) < 0$ for $x > 4$. $f$ increases up to $x = 4$ and decreases after it, so $f(4)$ is the greatest value of $f$.`,
      String.raw`A graph that is concave down everywhere lies below its horizontal tangent at $x = 4$, so $f(4)$ is a maximum, not a minimum.`,
      String.raw`$f''$ is negative everywhere, so it never changes sign and the graph has no point of inflection.`,
      String.raw`$f'(x) < 0$ for $x > 4$, so $f$ is decreasing on $(4, 5)$ and $f(5) < f(4)$.`,
    ], answer: 0 },
  { id: "q509-m05", type: "mcq", skill: "u5", topic: "5.9", calc: false, set: "q509-s3",
    question: String.raw`At which value of $x$ in the table is $f$ increasing and the graph of $f$ concave down?`,
    choices: [String.raw`$x = -2$`, String.raw`$x = 2$`, String.raw`$x = -1$`, String.raw`$x = 0$`],
    why: [
      String.raw`At $x = -2$, $f'(-2) = 3 > 0$ (increasing) and $f''(-2) = -4 < 0$ (concave down).`,
      String.raw`At $x = 2$, $f$ is increasing, but $f''(2) = 2 > 0$, so the graph is concave up.`,
      String.raw`$f'(-1) = 0$, so $f$ has a horizontal tangent at $x = -1$ (a relative maximum, since $f''(-1) < 0$).`,
      String.raw`$f'(0) = -2 < 0$, so $f$ is decreasing at $x = 0$. The value $f(0) = 2$ being positive does not matter.`,
    ], answer: 0 },
  { id: "q509-m06", type: "mcq", skill: "u5", topic: "5.9", calc: true,
    stem: String.raw`A function $f$ has derivative $f'(x) = 3\sin x - x$.`,
    question: String.raw`On which interval within $0 < x < 3$ is $f$ increasing and the graph of $f$ concave down?`,
    choices: [String.raw`$(1.231, 2.279)$`, String.raw`$(0, 1.231)$`, String.raw`$(2.279, 3)$`, String.raw`$(0, 2.279)$`],
    why: [
      String.raw`$f'(x) = 0$ at $x \approx 2.279$ (by calculator), with $f' > 0$ on $(0, 2.279)$. $f''(x) = 3\cos x - 1 < 0$ when $\cos x < \dfrac{1}{3}$, that is, for $x > 1.231$. Both hold on $(1.231, 2.279)$.`,
      String.raw`$f$ is increasing on $(0, 1.231)$, but $f''(x) > 0$ there, so the graph is concave up.`,
      String.raw`The graph is concave down on $(2.279, 3)$, but $f'(x) < 0$ there, so $f$ is decreasing.`,
      String.raw`$f$ is increasing on all of $(0, 2.279)$, but the graph is concave up on $(0, 1.231)$.`,
    ], answer: 0 },
  { id: "q509-f1a", type: "frq", skill: "u5", topic: "5.9", calc: false, set: "q509-s9", part: "(a)",
    prompt: String.raw`On what interval is $f$ increasing? Give a reason for your answer.`,
    rows: [
      { name: "Answer with reason", earns: String.raw`$x > 0$, because $f'(x) = xe^{-x^2/2} > 0$ there ($e^{-x^2/2} > 0$ for all $x$).` },
    ],
    solution: String.raw`$e^{-x^2/2} > 0$ for all $x$, so $f'(x)$ has the same sign as $x$. $f'(x) > 0$ for $x > 0$, so $f$ is increasing on $(0, \infty)$.` },
  { id: "q509-f1b", type: "frq", skill: "u5", topic: "5.9", calc: false, set: "q509-s9", part: "(b)",
    prompt: String.raw`Find $f''(x)$. Find the $x$-coordinates of all points of inflection of the graph of $f$. Justify your answer.`,
    rows: [
      { name: "Second derivative", earns: String.raw`$f''(x) = e^{-x^2/2} - x^2e^{-x^2/2} = (1 - x^2)e^{-x^2/2}$.` },
      { name: "Inflection points with justification", earns: String.raw`$x = -1$ and $x = 1$, because $f''$ changes sign at each.` },
    ],
    solution: String.raw`By the product rule, $f''(x) = e^{-x^2/2} + x\left(-xe^{-x^2/2}\right) = (1 - x^2)e^{-x^2/2}$. Since $e^{-x^2/2} > 0$, the sign of $f''$ is the sign of $1 - x^2$: negative for $x < -1$, positive for $-1 < x < 1$, and negative for $x > 1$. $f''$ changes sign at $x = -1$ and $x = 1$, so the graph of $f$ has points of inflection there.` },
  { id: "q509-f1c", type: "frq", skill: "u5", topic: "5.9", calc: false, set: "q509-s9", part: "(c)",
    prompt: String.raw`On what interval is $f$ increasing and the graph of $f$ concave down? Give a reason for your answer.`,
    rows: [
      { name: "Answer with reason", earns: String.raw`$x > 1$, because $f'(x) > 0$ for $x > 0$ and $f''(x) < 0$ for $x > 1$.` },
    ],
    solution: String.raw`From part (a), $f'(x) > 0$ for $x > 0$. From part (b), $f''(x) < 0$ for $x < -1$ and for $x > 1$. Both hold for $x > 1$, so $f$ is increasing and concave down on $(1, \infty)$.` },
];

export default { forms: [{ id: "q509", name: "Topic 5.9 Quiz: Connecting f, f', and f''", group: "Unit 5: Analytical Applications of Differentiation", items }] };

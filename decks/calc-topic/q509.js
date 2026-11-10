import { graph } from "../../plot.js";

// s1: f(x) = 2 sin x + x/2 on [0, 6.5]; labeled points at x = 1 (rising, concave down), 2.5 (falling, concave down),
// 4 (falling, concave up), 5.5 (rising, concave up). High point near x = 1.82, low point near x = 4.46, inflection at x = pi.
const f1 = (x) => 2 * Math.sin(x) + x / 2;
const g1 = graph({
  x: [0, 6.5], y: [-1, 4], xname: "x", yname: "y",
  fns: [{ f: f1, from: 0, to: 6.5 }],
  dots: [[1, f1(1), "closed"], [2.5, f1(2.5), "closed"], [4, f1(4), "closed"], [5.5, f1(5.5), "closed"]],
  labels: [[0.7, f1(1) + 0.35, "A"], [2.6, f1(2.5) + 0.3, "B"], [3.65, f1(4) - 0.45, "C"], [5.65, f1(5.5) - 0.35, "D"]],
  alt: "Graph of y = f(x) for x from 0 to 6.5, a wave that drifts upward. It rises from the origin to a high point near (1.8, 2.8), falls to a low point near (4.5, 0.3), and rises to about (6.5, 3.7). It is concave down for x < 3.14 and concave up for x > 3.14. Point A is at x = 1, on the rising part before the high point. Point B is at x = 2.5, on the falling part after the high point. Point C is at x = 4, on the falling part before the low point. Point D is at x = 5.5, on the rising part after the low point.",
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
  { id: "q509-m01", type: "mcq", skill: "u5", topic: "5.9", calc: false, difficulty: "moderate", set: "q509-s2",
    question: String.raw`Which of the following describes $f$ on the open interval $(-1, 3)$?`,
    choices: [
      String.raw`A relative maximum at $x = 0$, a relative minimum at $x = 2$, and a point of inflection at $x = 1$`,
      String.raw`A relative minimum at $x = 0$, a relative maximum at $x = 2$, and a point of inflection at $x = 1$`,
      String.raw`A relative minimum at $x = 1$ and points of inflection at $x = 0$ and $x = 2$`,
      String.raw`A relative maximum at $x = 0$, a relative minimum at $x = 2$, and no point of inflection`,
    ],
    why: [
      String.raw`$f'$ changes from positive to negative at $x = 0$ (relative maximum) and from negative to positive at $x = 2$ (relative minimum). $f'$ decreases until $x = 1$ and then increases, so the graph of $f$ changes concavity at $x = 1$.`,
      String.raw`The sign changes are reversed. $f'$ is positive just left of $x = 0$ and negative just right of it, so $f$ rises and then falls: a relative maximum.`,
      String.raw`This reads the graph of $f'$ as if it were the graph of $f$. The low point of $f'$ at $x = 1$ marks a change in concavity of $f$, and the zeros of $f'$ at $x = 0$ and $x = 2$ mark extrema of $f$.`,
      String.raw`$f'$ changes from decreasing to increasing at $x = 1$, so $f''$ changes sign there and the graph of $f$ has a point of inflection.`,
    ], answer: 0 },
  { id: "q509-m02", type: "mcq", skill: "u5", topic: "5.9", calc: false, difficulty: "easy", set: "q509-s1",
    question: String.raw`At which labeled point are $f'(x)$ and $f''(x)$ both negative?`,
    choices: ["$B$", "$A$", "$C$", "$D$"],
    why: [
      String.raw`At $B$ the graph is falling, so $f' < 0$, and it is concave down, so $f'' < 0$.`,
      String.raw`At $A$ the graph is concave down, so $f'' < 0$, but it is rising, so $f' > 0$.`,
      String.raw`At $C$ the graph is falling, so $f' < 0$, but it is concave up, so $f'' > 0$.`,
      String.raw`At $D$ the graph is rising and concave up, so $f'$ and $f''$ are both positive.`,
    ], answer: 0 },
  { id: "q509-m03", type: "mcq", skill: "u5", topic: "5.9", calc: false, difficulty: "moderate", set: "q509-s2",
    question: String.raw`On which interval is $f$ both increasing and concave up?`,
    choices: [String.raw`$(2, 3)$`, String.raw`$(1, 2)$`, String.raw`$(-1, 0)$`, String.raw`$(1, 3)$`],
    why: [
      String.raw`$f$ is increasing where $f' > 0$, on $(-1, 0)$ and $(2, 3)$. The graph of $f$ is concave up where $f'$ is increasing, on $(1, 3)$. Both hold on $(2, 3)$.`,
      String.raw`The graph of $f$ is concave up on $(1, 2)$, but $f' < 0$ there, so $f$ is decreasing.`,
      String.raw`$f$ is increasing on $(-1, 0)$, but $f'$ is decreasing there, so the graph of $f$ is concave down.`,
      String.raw`The graph of $f$ is concave up on all of $(1, 3)$, but $f$ is decreasing on the part $(1, 2)$.`,
    ], answer: 0 },
  { id: "q509-m04", type: "mcq", skill: "u5", topic: "5.9", calc: false, difficulty: "difficult",
    stem: String.raw`A function $f$ is twice differentiable for all real numbers, with $f'(0) = 0$. Also, $f''(x) < 0$ for $x < 0$ and $f''(x) > 0$ for $x > 0$.`,
    question: String.raw`Which of the following must be true?`,
    choices: [
      String.raw`$f$ has no relative extremum at $x = 0$, and its graph has a point of inflection there.`,
      String.raw`$f$ has a relative minimum at $x = 0$, and its graph has no point of inflection there.`,
      String.raw`$f$ has a relative maximum at $x = 0$, and its graph has a point of inflection there.`,
      String.raw`$f$ is decreasing for $x < 0$, and its graph has a point of inflection at $x = 0$.`,
    ],
    why: [
      String.raw`For $x < 0$, $f'' < 0$, so $f'$ is decreasing on $(-\infty, 0]$ down to $f'(0) = 0$; that makes $f'(x) > 0$ for $x < 0$. For $x > 0$, $f'' > 0$, so $f'$ increases from $0$ and $f'(x) > 0$. $f'$ does not change sign at $x = 0$, so there is no extremum, and $f''$ changes sign there, so the graph has a point of inflection.`,
      String.raw`A relative minimum needs $f'$ to change from negative to positive. Here $f'(x) > 0$ on both sides of $x = 0$. Also, $f''$ changes sign at $x = 0$, so the graph does have a point of inflection.`,
      String.raw`A relative maximum needs $f'$ to change from positive to negative, but $f'(x) > 0$ on both sides of $x = 0$.`,
      String.raw`$f'' < 0$ for $x < 0$ means $f'$ is decreasing there, not $f$. Since $f'$ decreases to $f'(0) = 0$, $f'(x) > 0$ for $x < 0$, so $f$ is increasing.`,
    ], answer: 0 },
  { id: "q509-m05", type: "mcq", skill: "u5", topic: "5.9", calc: false, difficulty: "easy", set: "q509-s3",
    question: String.raw`At which value of $x$ in the table is $f$ increasing and the graph of $f$ concave down?`,
    choices: [String.raw`$x = -2$`, String.raw`$x = 2$`, String.raw`$x = -1$`, String.raw`$x = 0$`],
    why: [
      String.raw`At $x = -2$, $f'(-2) = 3 > 0$ (increasing) and $f''(-2) = -4 < 0$ (concave down).`,
      String.raw`At $x = 2$, $f$ is increasing, but $f''(2) = 2 > 0$, so the graph is concave up.`,
      String.raw`$f'(-1) = 0$, so $f$ has a horizontal tangent at $x = -1$ (a relative maximum, since $f''(-1) < 0$).`,
      String.raw`$f'(0) = -2 < 0$, so $f$ is decreasing at $x = 0$. The value $f(0) = 2$ being positive does not matter.`,
    ], answer: 0 },
  { id: "q509-m06", type: "mcq", skill: "u5", topic: "5.9", calc: true, difficulty: "difficult",
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

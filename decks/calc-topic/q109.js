import { graph } from "../../plot.js";

export const sets = {
  "q109-s1": {
    name: "The graph of f and a table of g",
    label: "Graph and table",
    intro: String.raw`The graph of the function $f$ is shown below. The table gives selected values of the function $g$, and the values of $g$ near $x = 2$ follow the pattern in the table.`,
    sources: [{ title: "", blocks: [
      { svg: graph({
        x: [-4, 4], y: [-2, 4], xname: "x", yname: "y",
        segments: [[-4, -1, -1, 2], [-1, 2, 2, -1], [2, 3, 4, 1]],
        dots: [[-1, 2, "open"], [-1, -1, "closed"], [2, -1, "open"], [2, 3, "closed"]],
        alt: "Graph of f for x from -4 to 4, made of line segments. A segment rises from (-4, -1) to an open circle at (-1, 2), and a filled dot at (-1, -1) shows f(-1) = -1. A segment falls from the open circle at (-1, 2) through (0, 1) to an open circle at (2, -1). A filled dot at (2, 3) starts a segment that falls to (4, 1).",
      }) },
      { table: {
        head: ["$x$", "$1.9$", "$1.99$", "$1.999$", "$2$", "$2.001$", "$2.01$", "$2.1$"],
        rows: [["$g(x)$", "$4.61$", "$4.9601$", "$4.996001$", "$0$", "$5.004001$", "$5.0401$", "$5.41$"]],
      } },
    ] }],
  },
  "q109-s2": {
    name: "Values of k",
    label: "Table",
    intro: String.raw`The function $k$ is defined by $k(x) = \dfrac{x^2 - 16}{x^2 - 3x - 4}$ for $x \neq -1$ and $x \neq 4$. Selected values of $k$, rounded to five decimal places, are given in the table.`,
    sources: [{ title: "", blocks: [
      { table: {
        head: ["$x$", "$3.9$", "$3.99$", "$3.999$", "$4.001$", "$4.01$", "$4.1$"],
        rows: [["$k(x)$", "$1.61224$", "$1.60120$", "$1.60012$", "$1.59988$", "$1.59880$", "$1.58824$"]],
      } },
    ] }],
  },
  "q109-s3": {
    name: "The functions u and w",
    label: "Free response",
    intro: String.raw`The function $u$ is defined by $u(x) = \dfrac{x^2 - 9}{x^2 - 2x - 3}$ for $x \neq -1$ and $x \neq 3$. The function $w$ is defined for all real numbers. Selected values of $w$ are given in the table, and the values of $w$ near $x = 3$ follow the pattern in the table.`,
    sources: [{ title: "", blocks: [
      { table: {
        head: ["$x$", "$2.9$", "$2.99$", "$2.999$", "$3$", "$3.001$", "$3.01$", "$3.1$"],
        rows: [["$w(x)$", "$3.8$", "$3.98$", "$3.998$", "$2$", "$4.002$", "$4.02$", "$4.2$"]],
      } },
    ] }],
  },
};

const items = [
  {
    id: "q109-m1", type: "mcq", difficulty: "moderate", skill: "u1", topic: "1.9", calc: false, set: "q109-s1",
    question: String.raw`Which of the following is true about $\displaystyle \lim_{x \to 2^{-}} \left( f(x) + g(x) \right)$?`,
    choices: ["It equals $4$.", "It equals $8$.", "It equals $3$.", "It does not exist."],
    why: [
      String.raw`From the graph, $\lim_{x \to 2^{-}} f(x) = -1$. The table shows $g(x)$ approaching $5$ from both sides of $x = 2$. The limit is $-1 + 5 = 4$.`,
      String.raw`$8$ uses $\lim_{x \to 2^{+}} f(x) = 3$. The limit is from the left, where $f(x)$ approaches $-1$.`,
      String.raw`$3$ adds the values $f(2) = 3$ and $g(2) = 0$. A limit depends on the values near $x = 2$, not the values at $x = 2$.`,
      String.raw`The two-sided limit of $f$ at $x = 2$ does not exist, but this limit is from the left only. Both left-hand limits exist, so the limit of the sum is their sum.`,
    ],
    answer: 0,
  },
  {
    id: "q109-m2", type: "mcq", difficulty: "moderate", skill: "u1", topic: "1.9", calc: false, set: "q109-s1",
    question: String.raw`Which of the following is true about $\displaystyle \lim_{x \to -1} \dfrac{f(x)}{x + 3}$?`,
    choices: ["It equals $1$.", String.raw`It equals $-\frac{1}{2}$.`, String.raw`It equals $\frac{1}{2}$.`, "It does not exist."],
    why: [
      String.raw`From the graph, $\lim_{x \to -1} f(x) = 2$, and $\lim_{x \to -1} (x + 3) = 2 \neq 0$. The limit of the quotient is $\dfrac{2}{2} = 1$.`,
      String.raw`$-\frac{1}{2}$ uses the value $f(-1) = -1$ in place of $\lim_{x \to -1} f(x) = 2$.`,
      String.raw`$\frac{1}{2}$ evaluates the denominator as $1 + 3 = 4$. At $x = -1$, $x + 3 = 2$.`,
      String.raw`$f$ is not continuous at $x = -1$, but both pieces of the graph approach $2$ there, so $\lim_{x \to -1} f(x)$ exists and the quotient has a limit.`,
    ],
    answer: 0,
  },
  {
    id: "q109-m3", type: "mcq", difficulty: "difficult", skill: "u1", topic: "1.9", calc: false,
    question: String.raw`A function $p$ satisfies $\displaystyle \lim_{x \to 3^{-}} p(x) = 5$, $\displaystyle \lim_{x \to 3^{+}} p(x) = -1$, and $p(3) = -1$. Which of the following limits exists?`,
    choices: [String.raw`$\lim_{x \to 3} \left(p(x) - 2\right)^2$`, String.raw`$\lim_{x \to 3} \left(p(x)\right)^2$`, String.raw`$\lim_{x \to 3} \left(p(x) + 1\right)^2$`, String.raw`$\lim_{x \to 3} \left|p(x)\right|$`],
    why: [
      String.raw`From the left, $\left(p(x) - 2\right)^2 \to (5 - 2)^2 = 9$. From the right, $\left(p(x) - 2\right)^2 \to (-1 - 2)^2 = 9$. Both one-sided limits are $9$, so this limit exists and equals $9$, even though $\lim_{x \to 3} p(x)$ does not exist.`,
      String.raw`From the left, $\left(p(x)\right)^2 \to 25$, and from the right, $\left(p(x)\right)^2 \to 1$. Squaring does not make $5$ and $-1$ agree.`,
      String.raw`From the left, $\left(p(x) + 1\right)^2 \to 36$, and from the right, $\left(p(x) + 1\right)^2 \to 0$. The value $\left(p(3) + 1\right)^2 = 0$ matches only the right side, and a value never decides a limit.`,
      String.raw`From the left, $|p(x)| \to 5$, and from the right, $|p(x)| \to 1$. The absolute value removes the sign of $-1$, but $5 \ne 1$.`,
    ],
    answer: 0,
  },
  {
    id: "q109-m4", type: "mcq", difficulty: "easy", skill: "u1", topic: "1.9", calc: false, set: "q109-s2",
    question: String.raw`What is $\displaystyle \lim_{x \to 4} k(x)$?`,
    choices: [String.raw`$\frac{8}{5}$`, String.raw`$\frac{5}{8}$`, "$4$", "$1$"],
    why: [
      String.raw`Factor: $\dfrac{(x - 4)(x + 4)}{(x - 4)(x + 1)} = \dfrac{x + 4}{x + 1}$ for $x \neq 4$, so the limit is $\dfrac{8}{5} = 1.6$. The table values approach $1.6$ from both sides, which agrees.`,
      String.raw`$\frac{5}{8}$ is the reciprocal of the limit. After canceling, $x + 4$ is the numerator. The table values are near $1.6$, not $0.625$.`,
      String.raw`$4$ is the ratio of the constant terms, $\frac{-16}{-4}$. The common factor $x - 4$ has to be canceled first, and the table values are near $1.6$.`,
      String.raw`$1$ is the ratio of the leading coefficients, which gives the limit as $x \to \infty$, not as $x \to 4$. The table values are near $1.6$.`,
    ],
    answer: 0,
  },
  {
    id: "q109-m5", type: "mcq", difficulty: "moderate", skill: "u1", topic: "1.9", calc: false,
    question: String.raw`A function $m$ is not defined at $x = -2$, and $\displaystyle \lim_{x \to -2} m(x) = -4$. Which of the following could define $m$?`,
    choices: [String.raw`$m(x) = \frac{x^2 - 4}{x + 2}$`, String.raw`$m(x) = \frac{x + 2}{x^2 - 4}$`, String.raw`$m(x) = \frac{x^2 + 4}{x + 2}$`, String.raw`$m(x) = \frac{x^2 - 4}{x - 2}$`],
    why: [
      String.raw`$\dfrac{x^2 - 4}{x + 2}$ is undefined at $x = -2$, and for $x \neq -2$ it equals $\dfrac{(x-2)(x+2)}{x+2} = x - 2$, so the limit is $-2 - 2 = -4$. Both facts match.`,
      String.raw`For $x \neq -2$, $\dfrac{x + 2}{(x-2)(x+2)} = \dfrac{1}{x - 2}$, so the limit is $-\dfrac{1}{4}$, the reciprocal of $-4$.`,
      String.raw`The numerator approaches $8$ and the denominator approaches $0$, so this function is unbounded near $x = -2$.`,
      String.raw`This function is defined at $x = -2$, where it equals $\dfrac{0}{-4} = 0$, and its limit there is $0$, not $-4$.`,
    ],
    answer: 0,
  },
  {
    id: "q109-m6", type: "mcq", difficulty: "easy", skill: "u1", topic: "1.9", calc: false, set: "q109-s1",
    question: "Which of the following limits does not exist?",
    choices: [String.raw`$\lim_{x \to 2} f(x)$`, String.raw`$\lim_{x \to -1} f(x)$`, String.raw`$\lim_{x \to 2^{+}} f(x)$`, String.raw`$\lim_{x \to 0} f(x)$`],
    why: [
      String.raw`From the graph, $\lim_{x \to 2^{-}} f(x) = -1$ and $\lim_{x \to 2^{+}} f(x) = 3$. The one-sided limits differ, so the two-sided limit does not exist.`,
      String.raw`Both pieces approach $2$ as $x \to -1$, so $\lim_{x \to -1} f(x) = 2$. The filled dot at $(-1, -1)$ is the value, not the limit.`,
      String.raw`To the right of $x = 2$, $f(x)$ approaches $3$, so this one-sided limit exists and equals $3$.`,
      String.raw`$f$ is continuous at $x = 0$, so $\lim_{x \to 0} f(x) = f(0) = 1$.`,
    ],
    answer: 0,
  },
  {
    id: "q109-f1a", type: "frq", skill: "u1", topic: "1.9", calc: false, set: "q109-s3", part: "(a)",
    prompt: String.raw`Use the table to estimate $\displaystyle \lim_{x \to 3} w(x)$. Explain how the table supports the estimate.`,
    rows: [
      { name: "Estimate with reason", earns: String.raw`$\lim_{x \to 3} w(x) = 4$, because $w(x)$ approaches $4$ as $x$ approaches $3$ from the left and from the right. The value $w(3) = 2$ does not affect the limit.` },
    ],
    solution: String.raw`As $x$ approaches $3$ from the left, $w(x)$ takes the values $3.8$, $3.98$, $3.998$, which approach $4$. As $x$ approaches $3$ from the right, $w(x)$ takes the values $4.2$, $4.02$, $4.002$, which also approach $4$. So $\lim_{x \to 3} w(x) = 4$. The value $w(3) = 2$ is not used, because a limit depends on the values near $x = 3$.`,
  },
  {
    id: "q109-f1b", type: "frq", skill: "u1", topic: "1.9", calc: false, set: "q109-s3", part: "(b)",
    prompt: String.raw`Find $\displaystyle \lim_{x \to 3} u(x)$. Show the work that leads to your answer.`,
    rows: [
      { name: "Factors and cancels", earns: String.raw`Writes $u(x) = \dfrac{(x-3)(x+3)}{(x-3)(x+1)} = \dfrac{x+3}{x+1}$ for $x \neq 3$.` },
      { name: "Answer", earns: String.raw`$\lim_{x \to 3} u(x) = \dfrac{3}{2}$` },
    ],
    solution: String.raw`Substitution gives $\dfrac{0}{0}$. Factor: $$u(x) = \dfrac{(x-3)(x+3)}{(x-3)(x+1)} = \dfrac{x+3}{x+1} \quad \text{for } x \neq 3.$$ Then $\displaystyle \lim_{x \to 3} u(x) = \dfrac{3+3}{3+1} = \dfrac{6}{4} = \dfrac{3}{2}$.`,
  },
  {
    id: "q109-f1c", type: "frq", skill: "u1", topic: "1.9", calc: false, set: "q109-s3", part: "(c)",
    prompt: String.raw`Find $\displaystyle \lim_{x \to 3} \dfrac{w(x)}{u(x)}$, or explain why it does not exist.`,
    rows: [
      { name: "Answer", earns: String.raw`$\dfrac{8}{3}$, as the quotient of the limits from parts (a) and (b), with $\lim_{x \to 3} u(x) \neq 0$.` },
    ],
    solution: String.raw`Both limits exist and $\lim_{x \to 3} u(x) = \dfrac{3}{2} \neq 0$, so $$\lim_{x \to 3} \dfrac{w(x)}{u(x)} = \dfrac{\lim_{x \to 3} w(x)}{\lim_{x \to 3} u(x)} = \dfrac{4}{\frac{3}{2}} = \dfrac{8}{3}.$$`,
  },
];

export default { forms: [{ id: "q109", name: "Topic 1.9 Quiz: Multiple Representations of Limits", group: "Unit 1: Limits and Continuity", items }] };

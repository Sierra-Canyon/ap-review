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
    intro: String.raw`The function $k$ is defined by $k(x) = \dfrac{\sqrt{2x + 1} - 3}{x - 4}$ for $x \geq -\dfrac{1}{2}$, $x \neq 4$. Selected values of $k$, rounded to five decimal places, are given in the table.`,
    sources: [{ title: "", blocks: [
      { table: {
        head: ["$x$", "$3.9$", "$3.99$", "$3.999$", "$4.001$", "$4.01$", "$4.1$"],
        rows: [["$k(x)$", "$0.33521$", "$0.33352$", "$0.33335$", "$0.33331$", "$0.33315$", "$0.33150$"]],
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
    id: "q109-m1", type: "mcq", skill: "u1", topic: "1.9", calc: false, set: "q109-s1",
    question: String.raw`What is $\displaystyle \lim_{x \to 2^{-}} \left( f(x) + g(x) \right)$?`,
    choices: ["$4$", "$8$", "$3$", "The limit does not exist."],
    why: [
      String.raw`From the graph, $\lim_{x \to 2^{-}} f(x) = -1$. The table shows $g(x)$ approaching $5$ from both sides of $x = 2$. The limit is $-1 + 5 = 4$.`,
      String.raw`$8$ uses $\lim_{x \to 2^{+}} f(x) = 3$. The limit is from the left, where $f(x)$ approaches $-1$.`,
      String.raw`$3$ adds the values $f(2) = 3$ and $g(2) = 0$. A limit depends on the values near $x = 2$, not the values at $x = 2$.`,
      String.raw`The two-sided limit of $f$ at $x = 2$ does not exist, but this limit is from the left only. Both left-hand limits exist, so the limit of the sum is their sum.`,
    ],
    answer: 0,
  },
  {
    id: "q109-m2", type: "mcq", skill: "u1", topic: "1.9", calc: false, set: "q109-s1",
    question: String.raw`What is $\displaystyle \lim_{x \to -1} \dfrac{f(x)}{x + 3}$?`,
    choices: ["$1$", String.raw`$-\frac{1}{2}$`, String.raw`$\frac{1}{2}$`, "The limit does not exist."],
    why: [
      String.raw`From the graph, $\lim_{x \to -1} f(x) = 2$, and $\lim_{x \to -1} (x + 3) = 2 \neq 0$. The limit of the quotient is $\dfrac{2}{2} = 1$.`,
      String.raw`$-\frac{1}{2}$ uses the value $f(-1) = -1$ in place of $\lim_{x \to -1} f(x) = 2$.`,
      String.raw`$\frac{1}{2}$ evaluates the denominator as $1 + 3 = 4$. At $x = -1$, $x + 3 = 2$.`,
      String.raw`$f$ is not continuous at $x = -1$, but both pieces of the graph approach $2$ there, so $\lim_{x \to -1} f(x)$ exists and the quotient has a limit.`,
    ],
    answer: 0,
  },
  {
    id: "q109-m3", type: "mcq", skill: "u1", topic: "1.9", calc: false,
    question: String.raw`A function $p$ satisfies $\displaystyle \lim_{x \to 3^{-}} p(x) = 5$, $\displaystyle \lim_{x \to 3^{+}} p(x) = -1$, and $p(3) = -1$. Which of the following is true?`,
    choices: [String.raw`$\lim_{x \to 3} p(x)$ does not exist.`, String.raw`$\lim_{x \to 3} p(x) = -1$`, String.raw`$\lim_{x \to 3} p(x) = 2$`, String.raw`$\lim_{x \to 3} p(x) = 5$`],
    why: [
      String.raw`The two-sided limit exists only when the one-sided limits are equal. Here they are $5$ and $-1$, so $\lim_{x \to 3} p(x)$ does not exist.`,
      String.raw`$-1$ matches the right-hand limit and the value $p(3)$, but the left-hand limit is $5$. The value at $x = 3$ does not decide the limit.`,
      String.raw`$2$ is the average of the one-sided limits. When the one-sided limits differ, the limit does not exist.`,
      String.raw`$5$ is only the left-hand limit. The right-hand limit is $-1$.`,
    ],
    answer: 0,
  },
  {
    id: "q109-m4", type: "mcq", skill: "u1", topic: "1.9", calc: false, set: "q109-s2",
    question: String.raw`What is $\displaystyle \lim_{x \to 4} k(x)$?`,
    choices: [String.raw`$\frac{1}{3}$`, "$0$", String.raw`$\frac{1}{6}$`, "The limit does not exist."],
    why: [
      String.raw`Multiply by the conjugate: $\dfrac{\sqrt{2x+1}-3}{x-4} \cdot \dfrac{\sqrt{2x+1}+3}{\sqrt{2x+1}+3} = \dfrac{2x - 8}{(x-4)\left(\sqrt{2x+1}+3\right)} = \dfrac{2}{\sqrt{2x+1}+3}$ for $x \neq 4$. The limit is $\dfrac{2}{3 + 3} = \dfrac{1}{3}$, which agrees with the table values near $0.3333$.`,
      String.raw`Substitution gives $\dfrac{0}{0}$, which is indeterminate, not $0$. The table values stay near $0.333$.`,
      String.raw`$\frac{1}{6}$ loses the factor $2$: $(2x + 1) - 9 = 2x - 8 = 2(x - 4)$, not $x - 4$.`,
      String.raw`The form $\dfrac{0}{0}$ at $x = 4$ does not mean the limit fails to exist. The table values approach the same number from both sides.`,
    ],
    answer: 0,
  },
  {
    id: "q109-m5", type: "mcq", skill: "u1", topic: "1.9", calc: false,
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
    id: "q109-m6", type: "mcq", skill: "u1", topic: "1.9", calc: false, set: "q109-s1",
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

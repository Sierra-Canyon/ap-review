import { graph } from "../../plot.js";

export const sets = {
  "q113-s1": {
    name: "The graph of f",
    label: "Graph",
    intro: String.raw`The graph of the function $f$ is shown below.`,
    sources: [{ title: "", blocks: [
      { svg: graph({
        x: [-2, 5], y: [-1, 4], xname: "x", yname: "y",
        segments: [[-2, 3, 2, 1], [2, 1, 5, 4]],
        dots: [[2, 1, "open"], [2, 3, "closed"]],
        alt: "Graph of f for x from -2 to 5, made of two line segments that meet at an open circle at (2, 1). The left segment falls from (-2, 3) to (2, 1), and the right segment rises from (2, 1) to (5, 4). A filled dot at (2, 3) shows f(2) = 3.",
      }) },
    ] }],
  },
  "q113-s2": {
    name: "The function h",
    label: "Free response",
    intro: String.raw`Let $h$ be the function defined by $$h(x) = \begin{cases} \dfrac{x^2 + kx + 6}{x + 3}, & x \neq -3 \\ c, & x = -3, \end{cases}$$ where $k$ and $c$ are constants.`,
    sources: [{ title: "", blocks: [{ p: String.raw`Answer each part without a calculator. Show the work that leads to each answer.` }] }],
  },
};

const items = [
  {
    id: "q113-m1", type: "mcq", skill: "u1", topic: "1.13", calc: false,
    question: String.raw`The function $g(x) = \dfrac{3x^2 + 5x - 2}{x^2 + x - 2}$ has a removable discontinuity at $x = -2$. What value should be assigned to $g(-2)$ to make $g$ continuous at $x = -2$?`,
    choices: [String.raw`$\frac{7}{3}$`, String.raw`$-\frac{7}{3}$`, "$3$", "$0$"],
    why: [
      String.raw`$3x^2 + 5x - 2 = (3x - 1)(x + 2)$ and $x^2 + x - 2 = (x + 2)(x - 1)$, so $g(x) = \dfrac{3x - 1}{x - 1}$ for $x \neq -2$. The limit at $x = -2$ is $\dfrac{-7}{-3} = \dfrac{7}{3}$, and continuity requires $g(-2) = \dfrac{7}{3}$.`,
      String.raw`$-\frac{7}{3}$ drops a sign: at $x = -2$, both $3x - 1 = -7$ and $x - 1 = -3$ are negative, so the quotient is positive.`,
      String.raw`$3$ is the ratio of leading coefficients, which gives the limit as $x \to \infty$, not as $x \to -2$.`,
      String.raw`$0$ is the value of the numerator at $x = -2$. The denominator is also $0$ there, so the common factor must be canceled first.`,
    ],
    answer: 0,
  },
  {
    id: "q113-m2", type: "mcq", skill: "u1", topic: "1.13", calc: false,
    question: String.raw`Let $r(x) = \begin{cases} \sqrt{x + k}, & x < 4 \\ x - 1, & x \geq 4, \end{cases}$ where $k$ is a constant. For what value of $k$ is $r$ continuous at $x = 4$?`,
    choices: ["$5$", "$-1$", "$13$", "$9$"],
    why: [
      String.raw`The left-hand limit is $\sqrt{4 + k}$, and the right-hand limit and $r(4)$ are both $4 - 1 = 3$. Setting $\sqrt{4 + k} = 3$ gives $4 + k = 9$, so $k = 5$.`,
      String.raw`$-1$ comes from $4 + k = 3$, which forgets to square both sides.`,
      String.raw`$13$ comes from $4 + k = 9$ solved as $k = 9 + 4$. Subtract $4$ instead.`,
      String.raw`$9$ comes from $\sqrt{k} = 3$, which drops the $4$ under the square root.`,
    ],
    answer: 0,
  },
  {
    id: "q113-m3", type: "mcq", skill: "u1", topic: "1.13", calc: false,
    question: String.raw`The function $m$ is defined by $m(x) = \dfrac{e^{2x} - 1}{e^{x} - 1}$ for $x \neq 0$. What value should be assigned to $m(0)$ to make $m$ continuous at $x = 0$?`,
    choices: ["$2$", "$1$", "$0$", String.raw`There is no such value of $m(0)$.`],
    why: [
      String.raw`$e^{2x} - 1 = \left(e^{x} - 1\right)\left(e^{x} + 1\right)$, so $m(x) = e^{x} + 1$ for $x \neq 0$. The limit at $x = 0$ is $e^{0} + 1 = 2$.`,
      String.raw`$1$ is $e^{0}$ alone. After canceling, $m(x) = e^{x} + 1$, which approaches $2$.`,
      String.raw`Substitution gives $\dfrac{0}{0}$, not $0$. The limit is found after factoring.`,
      String.raw`The limit at $x = 0$ exists, so the discontinuity is removable by defining $m(0)$ as that limit.`,
    ],
    answer: 0,
  },
  {
    id: "q113-m4", type: "mcq", skill: "u1", topic: "1.13", calc: false,
    question: String.raw`Let $p(x) = \dfrac{\sin(x - 2)}{x^2 - 4}$ for $x \neq 2$ and $x \neq -2$. What value of $p(2)$ makes $p$ continuous at $x = 2$?`,
    choices: [String.raw`$\frac{1}{4}$`, "$1$", "$4$", "$0$"],
    why: [
      String.raw`$p(x) = \dfrac{\sin(x - 2)}{x - 2} \cdot \dfrac{1}{x + 2}$. As $x \to 2$, $\dfrac{\sin(x - 2)}{x - 2} \to 1$ and $\dfrac{1}{x + 2} \to \dfrac{1}{4}$, so the limit is $\dfrac{1}{4}$.`,
      String.raw`$1$ uses $\dfrac{\sin(x - 2)}{x - 2} \to 1$ but leaves out the factor $\dfrac{1}{x + 2}$.`,
      String.raw`$4$ is the reciprocal: the factor $x + 2$ is in the denominator, so it contributes $\dfrac{1}{4}$.`,
      String.raw`$\sin 0 = 0$, but the denominator is also $0$. The form $\dfrac{0}{0}$ does not give $0$.`,
    ],
    answer: 0,
  },
  {
    id: "q113-m5", type: "mcq", skill: "u1", topic: "1.13", calc: false,
    question: String.raw`Let $q(x) = \begin{cases} ax + 2, & x < 1 \\ 5, & x = 1 \\ x^2 + b, & x > 1, \end{cases}$ where $a$ and $b$ are constants. If $q$ is continuous at $x = 1$, what is $a + b$?`,
    choices: ["$7$", "$9$", "$11$", "$6$"],
    why: [
      String.raw`Both one-sided limits must equal $q(1) = 5$. From the left, $a + 2 = 5$, so $a = 3$. From the right, $1 + b = 5$, so $b = 4$. Then $a + b = 7$.`,
      String.raw`$9$ uses $b = 6$, from adding $1$ to $5$ instead of subtracting it.`,
      String.raw`$11$ uses $a = 7$, from adding $2$ to $5$ instead of subtracting it.`,
      String.raw`$6$ uses $b = 3$, which evaluates $x^2$ at $x = 1$ as $2$ instead of $1$.`,
    ],
    answer: 0,
  },
  {
    id: "q113-m6", type: "mcq", skill: "u1", topic: "1.13", calc: false, set: "q113-s1",
    question: String.raw`The function $g$ is defined by $g(x) = f(x)$ for $x \neq 2$ and $g(2) = c$. For what value of $c$ is $g$ continuous at $x = 2$?`,
    choices: ["$1$", "$3$", "$2$", String.raw`There is no such value of $c$.`],
    why: [
      String.raw`Both segments approach the open circle at $(2, 1)$, so $\lim_{x \to 2} f(x) = 1$. Since $g$ agrees with $f$ near $x = 2$, $\lim_{x \to 2} g(x) = 1$, and continuity requires $c = 1$.`,
      String.raw`$3$ is the value $f(2)$, which is what makes $f$ discontinuous at $x = 2$.`,
      String.raw`$2$ is the $x$-coordinate of the point. The value $g(2)$ must match the limit, which is a $y$-value.`,
      String.raw`The limit at $x = 2$ exists, so the discontinuity is removable by defining $g(2)$ as that limit.`,
    ],
    answer: 0,
  },
  {
    id: "q113-f1a", type: "frq", skill: "u1", topic: "1.13", calc: false, set: "q113-s2", part: "(a)",
    prompt: String.raw`Find the value of $k$ for which $\displaystyle \lim_{x \to -3} h(x)$ exists. Explain the reasoning.`,
    rows: [
      { name: "Condition", earns: String.raw`States that the numerator must be $0$ at $x = -3$, since otherwise the quotient is unbounded near $x = -3$: $(-3)^2 + k(-3) + 6 = 0$.` },
      { name: "Answer", earns: String.raw`$k = 5$` },
    ],
    solution: String.raw`As $x \to -3$, the denominator $x + 3$ approaches $0$. If the numerator approached a nonzero number, $h(x)$ would be unbounded and the limit would not exist. So the numerator must be $0$ at $x = -3$: $$9 - 3k + 6 = 0, \quad 3k = 15, \quad k = 5.$$ With $k = 5$, the numerator is $x^2 + 5x + 6 = (x + 2)(x + 3)$, and the limit exists (part (b)).`,
  },
  {
    id: "q113-f1b", type: "frq", skill: "u1", topic: "1.13", calc: false, set: "q113-s2", part: "(b)",
    prompt: String.raw`Using the value of $k$ from part (a), find the value of $c$ for which $h$ is continuous at $x = -3$. Show the work that leads to the answer.`,
    rows: [
      { name: "Limit", earns: String.raw`$\lim_{x \to -3} h(x) = -1$, from $\dfrac{(x + 2)(x + 3)}{x + 3} = x + 2$ for $x \neq -3$.` },
      { name: "Answer", earns: String.raw`$c = -1$, because continuity requires $h(-3) = \lim_{x \to -3} h(x)$.` },
    ],
    solution: String.raw`With $k = 5$, for $x \neq -3$, $$h(x) = \dfrac{x^2 + 5x + 6}{x + 3} = \dfrac{(x + 2)(x + 3)}{x + 3} = x + 2.$$ So $\displaystyle \lim_{x \to -3} h(x) = -3 + 2 = -1$. For $h$ to be continuous at $x = -3$, $h(-3)$ must equal this limit, so $c = -1$.`,
  },
];

export default { forms: [{ id: "q113", name: "Topic 1.13 Quiz: Removing Discontinuities", group: "Unit 1: Limits and Continuity", items }] };

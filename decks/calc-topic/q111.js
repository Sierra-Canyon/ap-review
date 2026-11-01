import { graph } from "../../plot.js";

export const sets = {
  "q111-s1": {
    name: "The graph of f",
    label: "Graph",
    intro: String.raw`The graph of the function $f$ is shown below. The function $f$ is not defined at $x = 3$.`,
    sources: [{ title: "", blocks: [
      { svg: graph({
        x: [-4, 4], y: [-2, 4], xname: "x", yname: "y",
        segments: [[-4, 0, -2, 2], [-2, 2, 0, 2], [0, -1, 1, 1], [1, 1, 3, 3], [3, 3, 4, 2]],
        dots: [[-2, 2, "open"], [-2, 3, "closed"], [0, 2, "open"], [0, -1, "closed"], [3, 3, "open"]],
        alt: "Graph of f for x from -4 to 4, made of line segments. A segment rises from (-4, 0) to an open circle at (-2, 2), and a filled dot at (-2, 3) shows f(-2) = 3. A horizontal segment runs from the open circle at (-2, 2) to an open circle at (0, 2). A filled dot at (0, -1) starts a steep segment that rises to (1, 1), where the graph bends and a less steep segment rises to an open circle at (3, 3). There is no filled dot at x = 3. A segment falls from the open circle at (3, 3) to (4, 2).",
      }) },
    ] }],
  },
  "q111-s2": {
    name: "The function h",
    label: "Free response",
    intro: String.raw`Let $h$ be the function defined by $$h(x) = \begin{cases} \dfrac{x^2 - x - 6}{x - 3}, & x < 3 \\ 5, & x = 3 \\ x^2 - 4, & x > 3. \end{cases}$$`,
    sources: [{ title: "", blocks: [{ p: String.raw`Answer each part without a calculator. Show the work that leads to each answer.` }] }],
  },
};

const items = [
  {
    id: "q111-m1", type: "mcq", skill: "u1", topic: "1.11", calc: false,
    question: String.raw`Let $r(x) = \begin{cases} x^2 - 1, & x \leq 2 \\ 2x - 2, & x > 2. \end{cases}$ Which of the following is true?`,
    choices: [
      String.raw`$r$ is not continuous at $x = 2$ because $\lim_{x \to 2} r(x)$ does not exist.`,
      String.raw`$r$ is continuous at $x = 2$ because $r(2)$ is defined.`,
      String.raw`$r$ is continuous at $x = 2$ because $\lim_{x \to 2^{-}} r(x) = r(2)$.`,
      String.raw`$r$ is not continuous at $x = 2$ because $r(2)$ is not defined.`,
    ],
    why: [
      String.raw`$\lim_{x \to 2^{-}} r(x) = 2^2 - 1 = 3$ and $\lim_{x \to 2^{+}} r(x) = 2(2) - 2 = 2$. The one-sided limits differ, so the limit does not exist and the second condition of continuity fails.`,
      String.raw`A defined value is only the first condition. The limit must also exist and equal $r(2)$.`,
      String.raw`Agreement from the left alone is not enough. The right-hand limit is $2$, not $r(2) = 3$.`,
      String.raw`$r(2) = 2^2 - 1 = 3$ from the first piece, since that piece includes $x = 2$.`,
    ],
    answer: 0,
  },
  {
    id: "q111-m2", type: "mcq", skill: "u1", topic: "1.11", calc: false,
    question: String.raw`A function $v$ satisfies $v(4) = 2$ and $\displaystyle \lim_{x \to 4^{-}} v(x) = 2$. Which of the following additional facts would guarantee that $v$ is continuous at $x = 4$?`,
    choices: [
      String.raw`$\lim_{x \to 4^{+}} v(x) = 2$`,
      String.raw`$\lim_{x \to 4^{+}} v(x)$ exists.`,
      String.raw`$v$ is defined for all real numbers.`,
      String.raw`$\lim_{x \to 2} v(x) = 4$`,
    ],
    why: [
      String.raw`With both one-sided limits equal to $2$, $\lim_{x \to 4} v(x) = 2 = v(4)$. All three conditions of continuity hold.`,
      String.raw`The right-hand limit could exist and differ from $2$. Then $\lim_{x \to 4} v(x)$ would not exist.`,
      String.raw`Being defined everywhere says nothing about the right-hand limit at $x = 4$.`,
      String.raw`This swaps the input and the output. Continuity at $x = 4$ is about the limit as $x \to 4$.`,
    ],
    answer: 0,
  },
  {
    id: "q111-m3", type: "mcq", skill: "u1", topic: "1.11", calc: false, set: "q111-s1",
    question: String.raw`At which of the following values of $x$ is $f$ continuous?`,
    choices: ["$x = 1$", "$x = -2$", "$x = 0$", "$x = 3$"],
    why: [
      String.raw`At $x = 1$ the two segments meet at $(1, 1)$, so $\lim_{x \to 1} f(x) = 1 = f(1)$. A bend in the graph does not break continuity.`,
      String.raw`$\lim_{x \to -2} f(x) = 2$, but $f(-2) = 3$.`,
      String.raw`$\lim_{x \to 0^{-}} f(x) = 2$ and $\lim_{x \to 0^{+}} f(x) = -1$, so the limit does not exist.`,
      String.raw`$\lim_{x \to 3} f(x) = 3$, but $f(3)$ is not defined.`,
    ],
    answer: 0,
  },
  {
    id: "q111-m4", type: "mcq", skill: "u1", topic: "1.11", calc: false, set: "q111-s1",
    question: String.raw`Which of the following explains why $f$ is not continuous at $x = -2$?`,
    choices: [
      String.raw`$f(-2)$ is defined and $\lim_{x \to -2} f(x)$ exists, but they are not equal.`,
      String.raw`$f(-2)$ is not defined.`,
      String.raw`$\lim_{x \to -2} f(x)$ does not exist.`,
      String.raw`$f(-2) = 2$, which does not equal $\lim_{x \to -2} f(x) = 3$.`,
    ],
    why: [
      String.raw`Both sides approach the open circle at $(-2, 2)$, so $\lim_{x \to -2} f(x) = 2$. The filled dot gives $f(-2) = 3$. The third condition, $\lim_{x \to -2} f(x) = f(-2)$, fails.`,
      String.raw`The filled dot at $(-2, 3)$ shows that $f(-2) = 3$.`,
      String.raw`The graph approaches $2$ from both sides of $x = -2$, so the limit exists.`,
      String.raw`This swaps the two numbers. The open circle at $(-2, 2)$ gives the limit, and the filled dot at $(-2, 3)$ gives the value.`,
    ],
    answer: 0,
  },
  {
    id: "q111-m5", type: "mcq", skill: "u1", topic: "1.11", calc: false,
    question: String.raw`Let $s$ be the function defined by $s(x) = \dfrac{x^2 - 16}{x - 4}$ for $x \neq 4$ and $s(4) = 6$. Which of the following is true?`,
    choices: [
      String.raw`$\lim_{x \to 4} s(x)$ exists, but $s$ is not continuous at $x = 4$.`,
      String.raw`$s$ is continuous at $x = 4$.`,
      String.raw`$\lim_{x \to 4} s(x)$ does not exist, so $s$ is not continuous at $x = 4$.`,
      String.raw`$s(4)$ is not defined, so $s$ is not continuous at $x = 4$.`,
    ],
    why: [
      String.raw`For $x \neq 4$, $s(x) = \dfrac{(x-4)(x+4)}{x-4} = x + 4$, so $\lim_{x \to 4} s(x) = 8$. Since $s(4) = 6 \neq 8$, $s$ is not continuous at $x = 4$.`,
      String.raw`$s(4) = 6$ is defined, but the limit is $8$. The limit and the value must be equal.`,
      String.raw`Substitution into the fraction gives $\dfrac{0}{0}$, but after canceling $x - 4$, the limit is $8$.`,
      String.raw`The fraction is undefined at $x = 4$, but the definition sets $s(4) = 6$.`,
    ],
    answer: 0,
  },
  {
    id: "q111-m6", type: "mcq", skill: "u1", topic: "1.11", calc: false,
    question: String.raw`Let $w(x) = \begin{cases} \cos(\pi x), & x < 1 \\ x - 2, & x \geq 1. \end{cases}$ Which of the following is true?`,
    choices: [
      String.raw`$w$ is continuous at $x = 1$.`,
      String.raw`$w$ is not continuous at $x = 1$ because $\lim_{x \to 1^{-}} w(x) = 1$.`,
      String.raw`$w$ is not continuous at $x = 1$ because $\lim_{x \to 1^{+}} w(x) \neq w(1)$.`,
      String.raw`$\lim_{x \to 1} w(x)$ does not exist because $\cos(\pi x)$ oscillates.`,
    ],
    why: [
      String.raw`$\lim_{x \to 1^{-}} w(x) = \cos \pi = -1$ and $\lim_{x \to 1^{+}} w(x) = 1 - 2 = -1$, so $\lim_{x \to 1} w(x) = -1$. Also $w(1) = 1 - 2 = -1$. All three conditions hold.`,
      String.raw`$\cos \pi = -1$, not $1$. The value $1$ is $\cos 0$.`,
      String.raw`For $x \geq 1$, $w(x) = x - 2$ is a polynomial, so the right-hand limit is $1 - 2 = -1 = w(1)$.`,
      String.raw`$\cos(\pi x)$ oscillates as $x$ grows without bound, but near $x = 1$ it approaches $\cos \pi = -1$.`,
    ],
    answer: 0,
  },
  {
    id: "q111-f1a", type: "frq", skill: "u1", topic: "1.11", calc: false, set: "q111-s2", part: "(a)",
    prompt: String.raw`Find $\displaystyle \lim_{x \to 3^{-}} h(x)$ and $\displaystyle \lim_{x \to 3^{+}} h(x)$. Show the work that leads to each answer.`,
    rows: [
      { name: "Left-hand limit", earns: String.raw`$\lim_{x \to 3^{-}} h(x) = 5$, from $\dfrac{(x-3)(x+2)}{x-3} = x + 2$ for $x < 3$.` },
      { name: "Right-hand limit", earns: String.raw`$\lim_{x \to 3^{+}} h(x) = 3^2 - 4 = 5$` },
    ],
    solution: String.raw`For $x < 3$, $h(x) = \dfrac{(x-3)(x+2)}{x-3} = x + 2$, so $\displaystyle \lim_{x \to 3^{-}} h(x) = 3 + 2 = 5$. For $x > 3$, $h(x) = x^2 - 4$, a polynomial, so $\displaystyle \lim_{x \to 3^{+}} h(x) = 3^2 - 4 = 5$.`,
  },
  {
    id: "q111-f1b", type: "frq", skill: "u1", topic: "1.11", calc: false, set: "q111-s2", part: "(b)",
    prompt: String.raw`Is $h$ continuous at $x = 3$? Justify the answer using the definition of continuity.`,
    rows: [
      { name: "Conclusion with justification", earns: String.raw`Yes: $h(3) = 5$ is defined, $\lim_{x \to 3} h(x) = 5$ because both one-sided limits are $5$, and $\lim_{x \to 3} h(x) = h(3)$.` },
    ],
    solution: String.raw`$h(3) = 5$, so $h(3)$ is defined. By part (a), both one-sided limits equal $5$, so $\displaystyle \lim_{x \to 3} h(x) = 5$. Since $\displaystyle \lim_{x \to 3} h(x) = h(3)$, $h$ is continuous at $x = 3$.`,
  },
  {
    id: "q111-f1c", type: "frq", skill: "u1", topic: "1.11", calc: false, set: "q111-s2", part: "(c)",
    prompt: String.raw`The function $k$ is equal to $h$ for all $x \neq 3$, and $k(3) = 4$. Is $k$ continuous at $x = 3$? Explain.`,
    rows: [
      { name: "Answer with reason", earns: String.raw`No, because $\lim_{x \to 3} k(x) = 5$, the same as the limit of $h$, but $k(3) = 4 \neq 5$.` },
    ],
    solution: String.raw`$k$ agrees with $h$ for all $x \neq 3$, so $\displaystyle \lim_{x \to 3} k(x) = \lim_{x \to 3} h(x) = 5$. But $k(3) = 4$, and $4 \neq 5$, so $k$ is not continuous at $x = 3$.`,
  },
];

export default { forms: [{ id: "q111", name: "Topic 1.11 Quiz: Continuity at a Point", group: "Unit 1: Limits and Continuity", items }] };

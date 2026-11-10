import { graph } from "../../plot.js";

export const sets = {
  "q110-s1": {
    name: "The graph of f",
    label: "Graph",
    intro: String.raw`The graph of the function $f$ is shown below. The dashed line $x = -3$ is a vertical asymptote of the graph.`,
    sources: [{ title: "", blocks: [
      { svg: graph({
        x: [-5, 5], y: [-3, 5], xname: "x", yname: "y",
        fns: [{ f: (x) => 4 / ((x + 3) * (x + 3)), from: -5, to: -3.05 }, { f: (x) => 4 / ((x + 3) * (x + 3)), from: -2.95, to: -1 }],
        segments: [[-1, 1, 2, 4], [2, -2, 5, 1]],
        dots: [[1, 3, "open"], [1, -1, "closed"], [2, 4, "closed"], [2, -2, "open"]],
        vlines: [{ x: -3 }],
        alt: "Graph of f for x from -5 to 5. A curve passes through (-5, 1) and rises without bound as x approaches -3 from the left, and it also rises without bound on the right side of the dashed vertical line x = -3, coming down to (-1, 1). From (-1, 1) a segment rises to a filled dot at (2, 4), with an open circle at (1, 3) on it and a filled dot at (1, -1) below it. An open circle at (2, -2) starts a segment that rises to (5, 1).",
      }) },
    ] }],
  },
  "q110-s2": {
    name: "The function g",
    label: "Free response",
    intro: String.raw`Let $g$ be the function defined by $g(x) = \dfrac{x^2 - x - 12}{x^2 + 2x - 3}$. The function $g$ is undefined at $x = -3$ and at $x = 1$.`,
    sources: [{ title: "", blocks: [{ p: String.raw`Answer each part without a calculator. Show the work that leads to each answer.` }] }],
  },
};

const items = [
  {
    id: "q110-m1", type: "mcq", difficulty: "easy", skill: "u1", topic: "1.10", calc: false, set: "q110-s1",
    question: String.raw`At which value of $x$ does $f$ have a jump discontinuity?`,
    choices: ["$x = 2$", "$x = 1$", "$x = -3$", "$x = -1$"],
    why: [
      String.raw`As $x \to 2^{-}$, $f(x) \to 4$, and as $x \to 2^{+}$, $f(x) \to -2$. Both one-sided limits exist and are different, which is a jump discontinuity.`,
      String.raw`At $x = 1$ both sides approach $3$, so the limit exists. The filled dot at $(1, -1)$ makes it a removable discontinuity, not a jump.`,
      String.raw`At $x = -3$, $f(x)$ increases without bound on both sides. That is an infinite discontinuity.`,
      String.raw`At $x = -1$ the curve and the segment meet at $(-1, 1)$. The graph changes shape there, but $f$ is continuous.`,
    ],
    answer: 0,
  },
  {
    id: "q110-m2", type: "mcq", difficulty: "easy", skill: "u1", topic: "1.10", calc: false, set: "q110-s1",
    question: String.raw`Which of the following describes $f$ at $x = 1$?`,
    choices: ["A removable discontinuity", "A jump discontinuity", "An infinite discontinuity", String.raw`$f$ is continuous at $x = 1$.`],
    why: [
      String.raw`Both sides approach the open circle at $(1, 3)$, so $\lim_{x \to 1} f(x) = 3$, but $f(1) = -1$. The limit exists and does not equal the value, so the discontinuity is removable.`,
      String.raw`A jump needs one-sided limits that differ. At $x = 1$ both one-sided limits are $3$.`,
      String.raw`$f(x)$ stays near $3$ as $x \to 1$, so it does not grow without bound.`,
      String.raw`$f(1) = -1$ but $\lim_{x \to 1} f(x) = 3$, so $f$ is not continuous at $x = 1$.`,
    ],
    answer: 0,
  },
  {
    id: "q110-m3", type: "mcq", difficulty: "moderate", skill: "u1", topic: "1.10", calc: false,
    question: String.raw`Let $h(x) = \dfrac{x^2 - 5x + 6}{x^2 - 4}$. Which of the following describes the discontinuity of $h$ at $x = 2$?`,
    choices: [
      String.raw`Removable, with $\lim_{x \to 2} h(x) = -\frac{1}{4}$`,
      String.raw`Removable, with $\lim_{x \to 2} h(x) = \frac{1}{4}$`,
      String.raw`Infinite, because the denominator is $0$ at $x = 2$`,
      String.raw`Removable, with $\lim_{x \to 2} h(x) = 0$`,
    ],
    why: [
      String.raw`$h(x) = \dfrac{(x-2)(x-3)}{(x-2)(x+2)} = \dfrac{x - 3}{x + 2}$ for $x \neq 2$, so $\lim_{x \to 2} h(x) = \dfrac{2 - 3}{2 + 2} = -\dfrac{1}{4}$. The limit exists and $h(2)$ is undefined, so the discontinuity is removable.`,
      String.raw`$\frac{1}{4}$ has a sign error in the numerator: at $x = 2$, $x - 3 = -1$.`,
      String.raw`The numerator is also $0$ at $x = 2$, and the common factor $x - 2$ cancels, so $h$ stays bounded near $x = 2$. The infinite discontinuity is at $x = -2$.`,
      String.raw`$0$ is the value of the numerator at $x = 2$. The denominator is also $0$ there, so the form is $\dfrac{0}{0}$ and the factor must be canceled first.`,
    ],
    answer: 0,
  },
  {
    id: "q110-m4", type: "mcq", difficulty: "moderate", skill: "u1", topic: "1.10", calc: false,
    question: String.raw`Let $r(x) = \dfrac{x - 4}{|x| - 4}$ for $x \neq 4$ and $x \neq -4$. Which of the following describes the discontinuities of $r$?`,
    choices: [
      String.raw`Removable at $x = 4$; infinite at $x = -4$`,
      String.raw`Jump at $x = 4$; infinite at $x = -4$`,
      String.raw`Infinite at both $x = 4$ and $x = -4$`,
      String.raw`Removable at both $x = 4$ and $x = -4$`,
    ],
    why: [
      String.raw`For $x$ near $4$, $x > 0$, so $|x| = x$ and $r(x) = \dfrac{x - 4}{x - 4} = 1$. The limit at $x = 4$ is $1$ and $r(4)$ is undefined, so that discontinuity is removable. For $x$ near $-4$, $|x| = -x$ and $r(x) = \dfrac{x - 4}{-x - 4}$; the numerator approaches $-8$ and the denominator approaches $0$, so $r$ is unbounded there, an infinite discontinuity.`,
      String.raw`Near $x = 4$, $x$ is positive on both sides, so $|x| = x$ on both sides and $r(x) = 1$. The absolute value changes form only at $x = 0$, so there is no jump at $x = 4$.`,
      String.raw`At $x = 4$ the numerator is also $0$, and for $x$ near $4$ the quotient equals $1$. A zero of the denominator gives an asymptote only when the quotient is unbounded there.`,
      String.raw`Near $x = -4$, $|x| = -x$, so $|x| - 4 = -x - 4$ does not match the numerator $x - 4$. The numerator approaches $-8$ while the denominator approaches $0$.`,
    ],
    answer: 0,
  },
  {
    id: "q110-m5", type: "mcq", difficulty: "moderate", skill: "u1", topic: "1.10", calc: false,
    question: String.raw`Which of the following functions has a removable discontinuity at $x = 3$?`,
    choices: [String.raw`$\frac{x^2 - 2x - 3}{x - 3}$`, String.raw`$\frac{x - 3}{x^2 - 6x + 9}$`, String.raw`$\frac{|x - 3|}{x - 3}$`, String.raw`$\frac{x + 3}{x - 3}$`],
    why: [
      String.raw`$\dfrac{x^2 - 2x - 3}{x - 3} = \dfrac{(x-3)(x+1)}{x-3} = x + 1$ for $x \neq 3$, so the limit at $x = 3$ is $4$ while the function is undefined there.`,
      String.raw`$\dfrac{x - 3}{(x-3)^2} = \dfrac{1}{x - 3}$ for $x \neq 3$, which is unbounded near $x = 3$: an infinite discontinuity.`,
      String.raw`$\dfrac{|x-3|}{x-3}$ equals $-1$ for $x < 3$ and $1$ for $x > 3$, a jump discontinuity.`,
      String.raw`The numerator approaches $6$ and the denominator approaches $0$, so the function is unbounded near $x = 3$: an infinite discontinuity.`,
    ],
    answer: 0,
  },
  {
    id: "q110-m6", type: "mcq", difficulty: "difficult", skill: "u1", topic: "1.10", calc: false,
    question: String.raw`A function $q$ satisfies $\displaystyle \lim_{x \to -1^{-}} q(x) = 3$, $\displaystyle \lim_{x \to -1^{+}} q(x) = -\infty$, and $q(-1) = 3$. Which of the following statements are true?
I. The line $x = -1$ is a vertical asymptote of the graph of $q$.
II. $q$ has a jump discontinuity at $x = -1$.
III. $\displaystyle \lim_{x \to -1} q(x) = 3$`,
    choices: ["I only", "I and II only", "I and III only", "I, II, and III"],
    why: [
      String.raw`I is true: $q(x)$ decreases without bound as $x \to -1^{+}$, and one infinite one-sided limit is enough for a vertical asymptote, so $q$ has an infinite discontinuity at $x = -1$. II is false: a jump needs both one-sided limits to be finite numbers. III is false: the right side is unbounded, so the two-sided limit does not exist, even though the left-hand limit equals $q(-1) = 3$.`,
      String.raw`II is false. A jump needs two finite one-sided limits that differ, and the right-hand side is unbounded.`,
      String.raw`III is false. The left-hand limit is $3$, but the right-hand side decreases without bound, so the two-sided limit does not exist.`,
      String.raw`II and III are false. Because the right-hand side is unbounded, there is no jump and no two-sided limit.`,
    ],
    answer: 0,
  },
  {
    id: "q110-f1a", type: "frq", skill: "u1", topic: "1.10", calc: false, set: "q110-s2", part: "(a)",
    prompt: String.raw`Find $\displaystyle \lim_{x \to -3} g(x)$. Classify the discontinuity of $g$ at $x = -3$ as removable, jump, or infinite, and explain the classification.`,
    rows: [
      { name: "Limit", earns: String.raw`$\lim_{x \to -3} g(x) = \dfrac{7}{4}$, with work such as $g(x) = \dfrac{(x-4)(x+3)}{(x+3)(x-1)} = \dfrac{x-4}{x-1}$ for $x \neq -3$.` },
      { name: "Classification", earns: String.raw`Removable, because $\lim_{x \to -3} g(x)$ exists and $g(-3)$ is undefined.` },
    ],
    solution: String.raw`Factor the numerator and denominator: $$g(x) = \dfrac{(x-4)(x+3)}{(x+3)(x-1)} = \dfrac{x-4}{x-1} \quad \text{for } x \neq -3.$$ Then $\displaystyle \lim_{x \to -3} g(x) = \dfrac{-3 - 4}{-3 - 1} = \dfrac{-7}{-4} = \dfrac{7}{4}$. The limit exists and $g(-3)$ is undefined, so the discontinuity at $x = -3$ is removable.`,
  },
  {
    id: "q110-f1b", type: "frq", skill: "u1", topic: "1.10", calc: false, set: "q110-s2", part: "(b)",
    prompt: String.raw`Find $\displaystyle \lim_{x \to 1^{-}} g(x)$ and $\displaystyle \lim_{x \to 1^{+}} g(x)$. Classify the discontinuity of $g$ at $x = 1$.`,
    rows: [
      { name: "One-sided limits", earns: String.raw`$\lim_{x \to 1^{-}} g(x) = \infty$ and $\lim_{x \to 1^{+}} g(x) = -\infty$, with the reason: in $\dfrac{x-4}{x-1}$ the numerator approaches $-3$, and $x - 1$ approaches $0$ through negative values on the left and positive values on the right.` },
      { name: "Classification", earns: String.raw`Infinite discontinuity, because $g$ is unbounded as $x \to 1$.` },
    ],
    solution: String.raw`For $x$ near $1$, $g(x) = \dfrac{x-4}{x-1}$, and the numerator approaches $-3$. For $x < 1$, $x - 1$ is negative and approaches $0$, so the quotient is positive and $\displaystyle \lim_{x \to 1^{-}} g(x) = \infty$. For $x > 1$, $x - 1$ is positive and approaches $0$, so the quotient is negative and $\displaystyle \lim_{x \to 1^{+}} g(x) = -\infty$. Since $g$ is unbounded near $x = 1$, the discontinuity is infinite, and $x = 1$ is a vertical asymptote.`,
  },
];

export default { forms: [{ id: "q110", name: "Topic 1.10 Quiz: Types of Discontinuities", group: "Unit 1: Limits and Continuity", items }] };

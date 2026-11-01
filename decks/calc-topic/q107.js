import { graph } from "../../plot.js";

export const sets = {
  "q107-s1": {
    name: "A function with two formulas near x = 2", label: "Free response",
    intro: String.raw`The function $f$ is defined below, where $k$ is a nonzero constant.`,
    sources: [{ title: "", blocks: [{ p: String.raw`$$f(x) = \begin{cases} \dfrac{\sqrt{x + 2} - 2}{x - 2} & \text{for } -2 \le x < 2 \\[2ex] \dfrac{x^2 - 3x + 2}{k(x - 2)} & \text{for } x > 2 \end{cases}$$` }] }],
  },
};

const items = [
  { id: "q107-m1", type: "mcq", skill: "u1", topic: "1.7", calc: false,
    question: "For which of the following limits does direct substitution give the value of the limit?",
    choices: [String.raw`$\lim_{x \to 2} \frac{x^2 - 4}{x + 2}$`, String.raw`$\lim_{x \to 2} \frac{x^2 - 4}{x - 2}$`, String.raw`$\lim_{x \to 0} \frac{\sqrt{x + 16} - 4}{x}$`, String.raw`$\lim_{x \to 3} \frac{x - 3}{x^2 - 9}$`],
    why: [
      String.raw`Substituting $x = 2$ gives $\frac{0}{4} = 0$. The denominator is not $0$, so the limit is $0$.`,
      String.raw`Substituting $x = 2$ gives $\frac{0}{0}$. The expression must be factored first.`,
      String.raw`Substituting $x = 0$ gives $\frac{0}{0}$. The expression needs the conjugate first.`,
      String.raw`Substituting $x = 3$ gives $\frac{0}{0}$. The expression must be factored first.`,
    ], answer: 0 },
  { id: "q107-m2", type: "mcq", skill: "u1", topic: "1.7", calc: false,
    question: String.raw`$\displaystyle \lim_{x \to 1} \dfrac{x^2 - 1}{|x - 1|}$ is`,
    choices: ["nonexistent", "$2$", "$-2$", "$0$"],
    why: [
      String.raw`For $x > 1$, $|x - 1| = x - 1$, so the quotient is $\dfrac{(x - 1)(x + 1)}{x - 1} = x + 1 \to 2$. For $x < 1$, $|x - 1| = -(x - 1)$, so the quotient is $-(x + 1) \to -2$. The one-sided limits differ, so the limit does not exist.`,
      String.raw`$2$ is only the right-hand limit. For $x < 1$, $|x - 1| = -(x - 1)$ and the quotient approaches $-2$.`,
      String.raw`$-2$ is only the left-hand limit. For $x > 1$, the quotient is $x + 1$, which approaches $2$.`,
      String.raw`Substitution gives $\frac{0}{0}$, not $0$. The absolute value has to be rewritten separately on each side of $x = 1$.`,
    ], answer: 0 },
  { id: "q107-m3", type: "mcq", skill: "u1", topic: "1.7", calc: false,
    question: String.raw`$\displaystyle \lim_{x \to -2} \dfrac{x^3 + 8}{x + 2}$ is`,
    choices: ["$12$", "$4$", "$0$", "nonexistent"],
    why: [
      String.raw`Factor the sum of cubes: $x^3 + 8 = (x + 2)(x^2 - 2x + 4)$. For $x \ne -2$, the quotient is $x^2 - 2x + 4$, which approaches $4 + 4 + 4 = 12$.`,
      String.raw`$4$ comes from the factor $x^2 + 2x + 4$, which has the wrong sign and equals $4$ at $x = -2$. The sum of cubes factors as $(x + 2)(x^2 - 2x + 4)$.`,
      String.raw`Substitution gives $\frac{0}{0}$, not $0$. The numerator must be factored.`,
      String.raw`$\frac{0}{0}$ calls for factoring. After $x + 2$ cancels, the limit is $12$.`,
    ], answer: 0 },
  { id: "q107-m4", type: "mcq", skill: "u1", topic: "1.7", calc: false,
    question: String.raw`$\displaystyle \lim_{x \to \pi} \dfrac{\sin^2 x}{1 + \cos x}$ is`,
    choices: ["$2$", "$0$", "$-2$", "nonexistent"],
    why: [
      String.raw`Use $\sin^2 x = 1 - \cos^2 x = (1 - \cos x)(1 + \cos x)$. For $x$ near $\pi$, the quotient is $1 - \cos x$, which approaches $1 - (-1) = 2$.`,
      String.raw`$0$ evaluates only the numerator, $\sin^2 \pi = 0$. The denominator $1 + \cos \pi$ is also $0$.`,
      String.raw`$-2$ uses $\sin^2 x = \cos^2 x - 1$, which has the wrong sign. The identity is $\sin^2 x = 1 - \cos^2 x$.`,
      String.raw`The form $\frac{0}{0}$ calls for an identity. After $1 + \cos x$ cancels, the limit is $2$.`,
    ], answer: 0 },
  { id: "q107-m5", type: "mcq", skill: "u1", topic: "1.7", calc: false,
    question: String.raw`$\displaystyle \lim_{x \to 0} \dfrac{x}{\sqrt{4 + x} - \sqrt{4 - x}}$ is`,
    choices: ["$2$", String.raw`$\frac{1}{2}$`, "$0$", "nonexistent"],
    why: [
      String.raw`Multiply by the conjugate $\sqrt{4 + x} + \sqrt{4 - x}$. The denominator becomes $(4 + x) - (4 - x) = 2x$, so for $x \ne 0$ the quotient is $\dfrac{\sqrt{4 + x} + \sqrt{4 - x}}{2}$, which approaches $\dfrac{2 + 2}{2} = 2$.`,
      String.raw`$\frac{1}{2}$ is the reciprocal of the limit. After the conjugate step, the sum $\sqrt{4 + x} + \sqrt{4 - x}$ is in the numerator.`,
      String.raw`Substitution gives $\frac{0}{0}$, not $0$. The denominator needs the conjugate.`,
      String.raw`$\frac{0}{0}$ calls for the conjugate. After it, the limit is $2$.`,
    ], answer: 0 },
  { id: "q107-m6", type: "mcq", skill: "u1", topic: "1.7", calc: false,
    stem: String.raw`A student evaluates $\displaystyle \lim_{x \to 5} \dfrac{x^2 - 3x - 10}{x - 5}$ by substituting $x = 5$, gets $\dfrac{0}{0}$, and concludes that the limit does not exist.`,
    question: "Which of the following is true?",
    choices: ["The conclusion is wrong, and the limit is $7$.", String.raw`The conclusion is correct, because $\frac{0}{0}$ is undefined.`, "The conclusion is wrong, and the limit is $0$.", "The conclusion is wrong, and the limit is $1$."],
    why: [
      String.raw`$\frac{0}{0}$ means more work is needed. Factor: $\dfrac{(x - 5)(x + 2)}{x - 5} = x + 2$ for $x \ne 5$, which approaches $7$.`,
      String.raw`$\frac{0}{0}$ is an indeterminate form. It shows that substitution did not work, not that the limit fails to exist.`,
      String.raw`$0$ is the value of the numerator at $x = 5$. After factoring, the limit is $7$.`,
      String.raw`$\frac{0}{0}$ is not $1$. After factoring, the limit is $7$.`,
    ], answer: 0 },

  { id: "q107-f1a", type: "frq", skill: "u1", topic: "1.7", calc: false, set: "q107-s1", part: "(a)",
    prompt: String.raw`Find $\displaystyle \lim_{x \to 2^{-}} f(x)$. Show the work that leads to your answer.`,
    rows: [
      { name: "Procedure", earns: String.raw`Multiplies by the conjugate $\dfrac{\sqrt{x + 2} + 2}{\sqrt{x + 2} + 2}$ and cancels $x - 2$.` },
      { name: "Answer", earns: String.raw`$\dfrac{1}{4}$.` },
    ],
    solution: String.raw`Substitution gives $\frac{0}{0}$, and the expression has a square root, so multiply by the conjugate:
$$\dfrac{\sqrt{x + 2} - 2}{x - 2} \cdot \dfrac{\sqrt{x + 2} + 2}{\sqrt{x + 2} + 2} = \dfrac{(x + 2) - 4}{(x - 2)\left(\sqrt{x + 2} + 2\right)} = \dfrac{1}{\sqrt{x + 2} + 2}$$
for $x \ne 2$. So $\displaystyle \lim_{x \to 2^{-}} f(x) = \dfrac{1}{\sqrt{4} + 2} = \dfrac{1}{4}$.` },
  { id: "q107-f1b", type: "frq", skill: "u1", topic: "1.7", calc: false, set: "q107-s1", part: "(b)",
    prompt: String.raw`Find $\displaystyle \lim_{x \to 2^{+}} f(x)$ in terms of $k$. Show the work that leads to your answer.`,
    rows: [
      { name: "Answer with work", earns: String.raw`Factors $x^2 - 3x + 2 = (x - 1)(x - 2)$ and finds $\dfrac{1}{k}$.` },
    ],
    solution: String.raw`Substitution gives $\frac{0}{0}$, and the numerator is a quadratic, so factor:
$$\lim_{x \to 2^{+}} \dfrac{(x - 1)(x - 2)}{k(x - 2)} = \lim_{x \to 2^{+}} \dfrac{x - 1}{k} = \dfrac{1}{k}$$` },
  { id: "q107-f1c", type: "frq", skill: "u1", topic: "1.7", calc: false, set: "q107-s1", part: "(c)",
    prompt: String.raw`Find the value of $k$ for which $\displaystyle \lim_{x \to 2} f(x)$ exists. Justify your answer.`,
    rows: [
      { name: "Answer with justification", earns: String.raw`$k = 4$, because the limit exists only when the one-sided limits are equal: $\dfrac{1}{k} = \dfrac{1}{4}$.` },
    ],
    solution: String.raw`The two-sided limit exists only when the left-hand and right-hand limits are equal. From parts (a) and (b), $\dfrac{1}{k} = \dfrac{1}{4}$, so $k = 4$.` },
];

export default { forms: [{ id: "q107", name: "Topic 1.7 Quiz: Selecting Procedures for Limits", group: "Unit 1: Limits and Continuity", items }] };

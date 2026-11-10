import { graph } from "../../plot.js";

export const sets = {
  "q107-s1": {
    name: "A function with two formulas near x = 2", label: "Free response",
    intro: String.raw`The function $f$ is defined below, where $k$ is a nonzero constant.`,
    sources: [{ title: "", blocks: [{ p: String.raw`$$f(x) = \begin{cases} \dfrac{\sqrt{x + 2} - 2}{x - 2} & \text{for } -2 \le x < 2 \\[2ex] \dfrac{x^2 - 3x + 2}{k(x - 2)} & \text{for } x > 2 \end{cases}$$` }] }],
  },
};

const items = [
  { id: "q107-m1", type: "mcq", difficulty: "easy", skill: "u1", topic: "1.7", calc: false,
    question: "For which of the following limits does direct substitution give the value of the limit?",
    choices: [String.raw`$\lim_{x \to 0} \frac{x}{\cos x}$`, String.raw`$\lim_{x \to 0} \frac{x}{\sin x}$`, String.raw`$\lim_{x \to -2} \frac{x + 2}{|x| - 2}$`, String.raw`$\lim_{x \to 0} \frac{e^{x} - 1}{x}$`],
    why: [
      String.raw`$\cos 0 = 1 \ne 0$, so $\dfrac{x}{\cos x}$ is continuous at $x = 0$ and substitution gives $\dfrac{0}{1} = 0$, the value of the limit.`,
      String.raw`$\sin 0 = 0$, so substituting $x = 0$ gives $\frac{0}{0}$. A different method is needed.`,
      String.raw`At $x = -2$, $x + 2 = 0$ and $|x| - 2 = 2 - 2 = 0$, so substitution gives $\frac{0}{0}$. The absolute value has to be rewritten first.`,
      String.raw`$e^{0} - 1 = 0$ and the denominator is $0$, so substitution gives $\frac{0}{0}$.`,
    ], answer: 0 },
  { id: "q107-m2", type: "mcq", difficulty: "moderate", skill: "u1", topic: "1.7", calc: false,
    question: String.raw`Which of the following limits is equal to $\displaystyle \lim_{x \to 3} \dfrac{x^2 - 2x - 3}{x^2 - 9}$?`,
    choices: [String.raw`$\lim_{x \to 3} \frac{x + 1}{x + 3}$`, String.raw`$\lim_{x \to 3} \frac{x - 1}{x - 3}$`, String.raw`$\lim_{x \to 3} \frac{x + 1}{x - 3}$`, String.raw`$\lim_{x \to 3} \frac{-2x - 3}{-9}$`],
    why: [
      String.raw`Substitution gives $\frac{0}{0}$, so factor: $x^2 - 2x - 3 = (x - 3)(x + 1)$ and $x^2 - 9 = (x - 3)(x + 3)$. For $x \ne 3$ the quotient equals $\dfrac{x + 1}{x + 3}$, and a limit at $3$ depends only on $x \ne 3$, so the two limits are equal (both are $\frac{2}{3}$).`,
      String.raw`This factors the numerator as $(x + 3)(x - 1)$, which is $x^2 + 2x - 3$, and then cancels $x + 3$. The numerator is $(x - 3)(x + 1)$.`,
      String.raw`This cancels the factor $x - 3$ of the numerator against the factor $x + 3$ of the denominator. Only equal factors cancel.`,
      String.raw`This cancels the $x^2$ terms of the numerator and denominator. Terms of a sum cannot be canceled; only common factors can.`,
    ], answer: 0 },
  { id: "q107-m3", type: "mcq", difficulty: "moderate", skill: "u1", topic: "1.7", calc: false,
    question: String.raw`Which of the following is true about $\displaystyle \lim_{x \to -2} \dfrac{x^3 + 8}{x + 2}$?`,
    choices: ["It equals $12$.", "It equals $4$.", "It equals $0$.", "It does not exist."],
    why: [
      String.raw`Factor the sum of cubes: $x^3 + 8 = (x + 2)(x^2 - 2x + 4)$. For $x \ne -2$, the quotient is $x^2 - 2x + 4$, which approaches $4 + 4 + 4 = 12$.`,
      String.raw`$4$ comes from the factor $x^2 + 2x + 4$, which has the wrong sign and equals $4$ at $x = -2$. The sum of cubes factors as $(x + 2)(x^2 - 2x + 4)$.`,
      String.raw`Substitution gives $\frac{0}{0}$, not $0$. The numerator must be factored.`,
      String.raw`$\frac{0}{0}$ calls for factoring. After $x + 2$ cancels, the limit is $12$.`,
    ], answer: 0 },
  { id: "q107-m4", type: "mcq", difficulty: "difficult", skill: "u1", topic: "1.7", calc: false,
    question: String.raw`Which of the following is true about $\displaystyle \lim_{x \to \pi} \dfrac{\sin(2x)}{\sin x}$?`,
    choices: ["It equals $-2$.", "It equals $2$.", "It equals $0$.", "It does not exist."],
    why: [
      String.raw`Substitution gives $\frac{0}{0}$. Use the double-angle identity $\sin(2x) = 2\sin x \cos x$. For $x$ near $\pi$ with $x \ne \pi$, $\sin x \ne 0$, so the quotient is $2\cos x$, which approaches $2\cos \pi = -2$.`,
      String.raw`$2$ uses $\cos \pi = 1$. On the unit circle, $\pi$ is at $(-1, 0)$, so $\cos \pi = -1$ and the limit is $-2$.`,
      String.raw`$0$ evaluates only the numerator, $\sin 2\pi = 0$. The denominator $\sin \pi$ is also $0$, so the form is $\frac{0}{0}$.`,
      String.raw`The form $\frac{0}{0}$ calls for an identity, not the conclusion that the limit fails to exist. After $\sin x$ cancels, the limit is $-2$.`,
    ], answer: 0 },
  { id: "q107-m5", type: "mcq", difficulty: "difficult", skill: "u1", topic: "1.7", calc: false,
    question: String.raw`Which of the following is true about $\displaystyle \lim_{x \to 0} \dfrac{x}{\sqrt{4 + x} - \sqrt{4 - x}}$?`,
    choices: ["It equals $2$.", String.raw`It equals $\frac{1}{2}$.`, "It equals $0$.", "It does not exist."],
    why: [
      String.raw`Multiply by the conjugate $\sqrt{4 + x} + \sqrt{4 - x}$. The denominator becomes $(4 + x) - (4 - x) = 2x$, so for $x \ne 0$ the quotient is $\dfrac{\sqrt{4 + x} + \sqrt{4 - x}}{2}$, which approaches $\dfrac{2 + 2}{2} = 2$.`,
      String.raw`$\frac{1}{2}$ is the reciprocal of the limit. After the conjugate step, the sum $\sqrt{4 + x} + \sqrt{4 - x}$ is in the numerator.`,
      String.raw`Substitution gives $\frac{0}{0}$, not $0$. The denominator needs the conjugate.`,
      String.raw`$\frac{0}{0}$ calls for the conjugate. After it, the limit is $2$.`,
    ], answer: 0 },
  { id: "q107-m6", type: "mcq", difficulty: "easy", skill: "u1", topic: "1.7", calc: false,
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

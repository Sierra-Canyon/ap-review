import { graph } from "../../plot.js";

export const sets = {
  "q106-s1": {
    name: "Two quotients at x = 3", label: "Free response",
    intro: String.raw`The functions $p$ and $r$ are defined below. Neither is defined at $x = 3$.`,
    sources: [{ title: "", blocks: [{ p: String.raw`$$p(x) = \dfrac{2x^2 - 7x + 3}{x^2 - 5x + 6} \qquad r(x) = \dfrac{x - 3}{\sqrt{2x + 3} - 3}$$` }] }],
  },
};

const items = [
  { id: "q106-m1", type: "mcq", skill: "u1", topic: "1.6", calc: false,
    question: String.raw`$\displaystyle \lim_{x \to -3} \dfrac{x^2 + x - 6}{x^2 + 3x}$ is`,
    choices: [String.raw`$\frac{5}{3}$`, String.raw`$-\frac{5}{3}$`, "$0$", "nonexistent"],
    why: [
      String.raw`Factor and cancel: $\dfrac{(x + 3)(x - 2)}{x(x + 3)} = \dfrac{x - 2}{x}$ for $x \ne -3$. Substituting $x = -3$ gives $\dfrac{-5}{-3} = \dfrac{5}{3}$.`,
      String.raw`Both $x - 2$ and $x$ are negative at $x = -3$, so the quotient is positive. A sign was lost.`,
      String.raw`$0$ evaluates only the numerator. Substitution gives $\frac{0}{0}$, which calls for factoring.`,
      String.raw`$\frac{0}{0}$ does not mean the limit fails to exist. After canceling $x + 3$, the limit is $\frac{5}{3}$.`,
    ], answer: 0 },
  { id: "q106-m2", type: "mcq", skill: "u1", topic: "1.6", calc: false,
    question: String.raw`$\displaystyle \lim_{x \to 5} \dfrac{\sqrt{3x + 1} - 4}{x - 5}$ is`,
    choices: [String.raw`$\frac{3}{8}$`, String.raw`$\frac{8}{3}$`, "$0$", String.raw`$\frac{1}{8}$`],
    why: [
      String.raw`Multiply by the conjugate: $\dfrac{(3x + 1) - 16}{(x - 5)\left(\sqrt{3x + 1} + 4\right)} = \dfrac{3(x - 5)}{(x - 5)\left(\sqrt{3x + 1} + 4\right)} = \dfrac{3}{\sqrt{3x + 1} + 4}$ for $x \ne 5$. This approaches $\dfrac{3}{4 + 4} = \dfrac{3}{8}$.`,
      String.raw`$\frac{8}{3}$ is the reciprocal of the limit. After the conjugate step, $\sqrt{3x + 1} + 4$ is in the denominator.`,
      String.raw`$0$ comes from substituting into the numerator only. The original form is $\frac{0}{0}$.`,
      String.raw`$\frac{1}{8}$ treats $(3x + 1) - 16$ as $x - 5$. It equals $3x - 15 = 3(x - 5)$, so a factor of $3$ remains.`,
    ], answer: 0 },
  { id: "q106-m3", type: "mcq", skill: "u1", topic: "1.6", calc: false,
    question: String.raw`$\displaystyle \lim_{x \to 2} \dfrac{\dfrac{1}{x + 1} - \dfrac{1}{3}}{x - 2}$ is`,
    choices: [String.raw`$-\frac{1}{9}$`, String.raw`$\frac{1}{9}$`, String.raw`$-\frac{1}{3}$`, "nonexistent"],
    why: [
      String.raw`Combine the fractions in the numerator: $\dfrac{1}{x + 1} - \dfrac{1}{3} = \dfrac{3 - (x + 1)}{3(x + 1)} = \dfrac{-(x - 2)}{3(x + 1)}$. Dividing by $x - 2$ gives $\dfrac{-1}{3(x + 1)}$ for $x \ne 2$, which approaches $-\dfrac{1}{9}$.`,
      String.raw`The numerator $3 - (x + 1) = 2 - x$ is $-(x - 2)$. Dropping the negative sign gives $\frac{1}{9}$.`,
      String.raw`$-\frac{1}{3}$ drops the $3$ in the common denominator $3(x + 1)$, giving $\frac{-1}{x + 1}$.`,
      String.raw`The form $\frac{0}{0}$ calls for simplifying. After the fractions are combined, $x - 2$ cancels and the limit is $-\frac{1}{9}$.`,
    ], answer: 0 },
  { id: "q106-m4", type: "mcq", skill: "u1", topic: "1.6", calc: false,
    question: String.raw`$\displaystyle \lim_{x \to \pi/4} \dfrac{\sin x - \cos x}{\cos(2x)}$ is`,
    choices: [String.raw`$-\frac{\sqrt{2}}{2}$`, String.raw`$\frac{\sqrt{2}}{2}$`, "$0$", "nonexistent"],
    why: [
      String.raw`Use $\cos(2x) = \cos^2 x - \sin^2 x = (\cos x - \sin x)(\cos x + \sin x)$. Since $\sin x - \cos x = -(\cos x - \sin x)$, the quotient is $\dfrac{-1}{\cos x + \sin x}$, which approaches $\dfrac{-1}{\sqrt{2}} = -\dfrac{\sqrt{2}}{2}$.`,
      String.raw`$\sin x - \cos x$ is the negative of $\cos x - \sin x$. Canceling them as if they were equal loses the negative sign.`,
      String.raw`$0$ evaluates only the numerator at $x = \frac{\pi}{4}$. The denominator is also $0$, so the form is $\frac{0}{0}$.`,
      String.raw`$\frac{0}{0}$ calls for an identity. After factoring $\cos(2x)$, the limit is $-\frac{\sqrt{2}}{2}$.`,
    ], answer: 0 },
  { id: "q106-m5", type: "mcq", skill: "u1", topic: "1.6", calc: false,
    question: String.raw`$\displaystyle \lim_{x \to 1} \dfrac{x^3 - 1}{x^2 - 1}$ is`,
    choices: [String.raw`$\frac{3}{2}$`, String.raw`$\frac{2}{3}$`, "$3$", "nonexistent"],
    why: [
      String.raw`Factor: $\dfrac{(x - 1)(x^2 + x + 1)}{(x - 1)(x + 1)} = \dfrac{x^2 + x + 1}{x + 1}$ for $x \ne 1$. This approaches $\dfrac{3}{2}$.`,
      String.raw`$\frac{2}{3}$ is the reciprocal: the numerator and denominator were switched after factoring.`,
      String.raw`$3$ is the limit of $x^2 + x + 1$ alone. The factor $x + 1$ in the denominator approaches $2$.`,
      String.raw`The form $\frac{0}{0}$ calls for factoring. After the common factor $x - 1$ cancels, the limit is $\frac{3}{2}$.`,
    ], answer: 0 },
  { id: "q106-m6", type: "mcq", skill: "u1", topic: "1.6", calc: false,
    question: String.raw`$\displaystyle \lim_{x \to 2^{-}} \dfrac{|x - 2|}{x^2 - 2x}$ is`,
    choices: [String.raw`$-\frac{1}{2}$`, String.raw`$\frac{1}{2}$`, "$-2$", "nonexistent"],
    why: [
      String.raw`For $x < 2$, $x - 2 < 0$, so $|x - 2| = -(x - 2)$. Then $\dfrac{-(x - 2)}{x(x - 2)} = -\dfrac{1}{x}$, which approaches $-\dfrac{1}{2}$.`,
      String.raw`$\frac{1}{2}$ treats $|x - 2|$ as $x - 2$, which is the right-hand limit. For $x < 2$, $|x - 2| = -(x - 2)$.`,
      String.raw`$-2$ is the reciprocal of the limit. The simplified expression is $-\frac{1}{x}$, which approaches $-\frac{1}{2}$.`,
      String.raw`The two-sided limit does not exist, because the right-hand limit is $\frac{1}{2}$. The question asks only for the left-hand limit, which is $-\frac{1}{2}$.`,
    ], answer: 0 },

  { id: "q106-f1a", type: "frq", skill: "u1", topic: "1.6", calc: false, set: "q106-s1", part: "(a)",
    prompt: String.raw`Find $\displaystyle \lim_{x \to 3} p(x)$. Show the algebraic work that leads to your answer.`,
    rows: [
      { name: "Factoring", earns: String.raw`Factors $p(x) = \dfrac{(2x - 1)(x - 3)}{(x - 2)(x - 3)}$ and cancels $x - 3$.` },
      { name: "Answer", earns: "$5$." },
    ],
    solution: String.raw`Substitution gives $\frac{0}{0}$, so factor:
$$\lim_{x \to 3} \dfrac{2x^2 - 7x + 3}{x^2 - 5x + 6} = \lim_{x \to 3} \dfrac{(2x - 1)(x - 3)}{(x - 2)(x - 3)} = \lim_{x \to 3} \dfrac{2x - 1}{x - 2} = \dfrac{5}{1} = 5$$` },
  { id: "q106-f1b", type: "frq", skill: "u1", topic: "1.6", calc: false, set: "q106-s1", part: "(b)",
    prompt: String.raw`Find $\displaystyle \lim_{x \to 3} r(x)$. Show the algebraic work that leads to your answer.`,
    rows: [
      { name: "Conjugate", earns: String.raw`Multiplies by $\dfrac{\sqrt{2x + 3} + 3}{\sqrt{2x + 3} + 3}$ to get the denominator $2x - 6 = 2(x - 3)$.` },
      { name: "Answer", earns: "$3$." },
    ],
    solution: String.raw`Substitution gives $\frac{0}{0}$, so multiply by the conjugate:
$$\dfrac{x - 3}{\sqrt{2x + 3} - 3} \cdot \dfrac{\sqrt{2x + 3} + 3}{\sqrt{2x + 3} + 3} = \dfrac{(x - 3)\left(\sqrt{2x + 3} + 3\right)}{(2x + 3) - 9} = \dfrac{(x - 3)\left(\sqrt{2x + 3} + 3\right)}{2(x - 3)} = \dfrac{\sqrt{2x + 3} + 3}{2}$$
for $x \ne 3$. So $\displaystyle \lim_{x \to 3} r(x) = \dfrac{\sqrt{9} + 3}{2} = 3$.` },
];

export default { forms: [{ id: "q106", name: "Topic 1.6 Quiz: Limits by Algebraic Manipulation", group: "Unit 1: Limits and Continuity", items }] };

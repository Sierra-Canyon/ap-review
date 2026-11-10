import { graph } from "../../plot.js";

export const sets = {
  "q106-s1": {
    name: "Two quotients at x = 3", label: "Free response",
    intro: String.raw`The functions $p$ and $r$ are defined below. Neither is defined at $x = 3$.`,
    sources: [{ title: "", blocks: [{ p: String.raw`$$p(x) = \dfrac{2x^2 - 7x + 3}{x^2 - 5x + 6} \qquad r(x) = \dfrac{x - 3}{\sqrt{2x + 3} - 3}$$` }] }],
  },
};

const items = [
  { id: "q106-m1", type: "mcq", difficulty: "easy", skill: "u1", topic: "1.6", calc: false,
    question: String.raw`$\displaystyle \lim_{x \to 5} \dfrac{x^2 - 7x + 10}{x^2 - 25}$ is`,
    choices: [String.raw`$\frac{3}{10}$`, String.raw`$\frac{7}{10}$`, String.raw`$-\frac{2}{5}$`, "nonexistent"],
    why: [
      String.raw`Factor and cancel: $\dfrac{(x - 2)(x - 5)}{(x - 5)(x + 5)} = \dfrac{x - 2}{x + 5}$ for $x \ne 5$. Substituting $x = 5$ gives $\dfrac{3}{10}$.`,
      String.raw`$\frac{7}{10}$ factors the numerator as $(x + 2)(x - 5)$, which has the wrong sign on $2$: $(x + 2)(x - 5) = x^2 - 3x - 10$. The numerator is $(x - 2)(x - 5)$.`,
      String.raw`$-\frac{2}{5}$ is the ratio of the constant terms, $\frac{10}{-25}$. The constant terms do not give a limit as $x \to 5$; the common factor $x - 5$ has to be canceled.`,
      String.raw`$\frac{0}{0}$ does not mean the limit fails to exist. After canceling $x - 5$, the limit is $\frac{3}{10}$.`,
    ], answer: 0 },
  { id: "q106-m2", type: "mcq", difficulty: "moderate", skill: "u1", topic: "1.6", calc: false,
    question: String.raw`$\displaystyle \lim_{x \to 5} \dfrac{\sqrt{3x + 1} - 4}{x - 5}$ is`,
    choices: [String.raw`$\frac{3}{8}$`, String.raw`$\frac{8}{3}$`, String.raw`$\frac{3}{4}$`, String.raw`$\frac{1}{8}$`],
    why: [
      String.raw`Multiply by the conjugate: $\dfrac{(3x + 1) - 16}{(x - 5)\left(\sqrt{3x + 1} + 4\right)} = \dfrac{3(x - 5)}{(x - 5)\left(\sqrt{3x + 1} + 4\right)} = \dfrac{3}{\sqrt{3x + 1} + 4}$ for $x \ne 5$. This approaches $\dfrac{3}{4 + 4} = \dfrac{3}{8}$.`,
      String.raw`$\frac{8}{3}$ is the reciprocal of the limit. After the conjugate step, $\sqrt{3x + 1} + 4$ is in the denominator.`,
      String.raw`$\frac{3}{4}$ keeps only $\sqrt{3x + 1}$ from the denominator $\sqrt{3x + 1} + 4$, giving $\frac{3}{\sqrt{16}}$. The whole sum approaches $4 + 4 = 8$.`,
      String.raw`$\frac{1}{8}$ treats $(3x + 1) - 16$ as $x - 5$. It equals $3x - 15 = 3(x - 5)$, so a factor of $3$ remains.`,
    ], answer: 0 },
  { id: "q106-m3", type: "mcq", difficulty: "moderate", skill: "u1", topic: "1.6", calc: false,
    question: String.raw`$\displaystyle \lim_{x \to 2} \dfrac{\dfrac{x}{x + 2} - \dfrac{1}{2}}{x - 2}$ is`,
    choices: [String.raw`$\frac{1}{8}$`, String.raw`$-\frac{1}{8}$`, String.raw`$\frac{1}{4}$`, "nonexistent"],
    why: [
      String.raw`Combine the fractions in the numerator: $\dfrac{x}{x + 2} - \dfrac{1}{2} = \dfrac{2x - (x + 2)}{2(x + 2)} = \dfrac{x - 2}{2(x + 2)}$. Dividing by $x - 2$ gives $\dfrac{1}{2(x + 2)}$ for $x \ne 2$, which approaches $\dfrac{1}{2(4)} = \dfrac{1}{8}$.`,
      String.raw`$-\frac{1}{8}$ subtracts in the wrong order, writing the numerator as $(x + 2) - 2x = -(x - 2)$. The first fraction is $\frac{x}{x + 2}$, so the numerator is $2x - (x + 2) = x - 2$.`,
      String.raw`$\frac{1}{4}$ drops the $2$ in the common denominator $2(x + 2)$, giving $\frac{1}{x + 2}$.`,
      String.raw`The form $\frac{0}{0}$ calls for simplifying. After the fractions are combined, $x - 2$ cancels and the limit is $\frac{1}{8}$.`,
    ], answer: 0 },
  { id: "q106-m4", type: "mcq", difficulty: "difficult", skill: "u1", topic: "1.6", calc: false,
    question: String.raw`For a positive constant $a$, $\displaystyle \lim_{x \to a} \dfrac{x^3 - a^3}{x - a} = 48$. What is the value of $a$?`,
    choices: ["$a = 4$", "$a = 16$", String.raw`$a = 2\sqrt{6}$`, String.raw`$a = 4\sqrt{3}$`],
    why: [
      String.raw`Factor the difference of cubes: $x^3 - a^3 = (x - a)\left(x^2 + ax + a^2\right)$, so for $x \ne a$ the quotient is $x^2 + ax + a^2$, which approaches $a^2 + a^2 + a^2 = 3a^2$. Then $3a^2 = 48$, so $a^2 = 16$ and, since $a > 0$, $a = 4$.`,
      String.raw`$16$ is $a^2$. Solving $3a^2 = 48$ gives $a^2 = 16$, and the square root is still needed: $a = 4$.`,
      String.raw`$2\sqrt{6}$ drops the middle term of the factor, using $x^3 - a^3 = (x - a)\left(x^2 + a^2\right)$. That gives $2a^2 = 48$, but the correct factor $x^2 + ax + a^2$ approaches $3a^2$.`,
      String.raw`$4\sqrt{3}$ solves $a^2 = 48$, as if the limit were $a^2$. Each of the three terms of $x^2 + ax + a^2$ approaches $a^2$, so the limit is $3a^2$.`,
    ], answer: 0 },
  { id: "q106-m5", type: "mcq", difficulty: "moderate", skill: "u1", topic: "1.6", calc: false,
    question: String.raw`$\displaystyle \lim_{x \to 1} \dfrac{x^3 - 1}{x^2 - 1}$ is`,
    choices: [String.raw`$\frac{3}{2}$`, String.raw`$\frac{2}{3}$`, String.raw`$\frac{1}{2}$`, "nonexistent"],
    why: [
      String.raw`Factor: $\dfrac{(x - 1)(x^2 + x + 1)}{(x - 1)(x + 1)} = \dfrac{x^2 + x + 1}{x + 1}$ for $x \ne 1$. This approaches $\dfrac{3}{2}$.`,
      String.raw`$\frac{2}{3}$ is the reciprocal: the numerator and denominator were switched after factoring.`,
      String.raw`$\frac{1}{2}$ factors $x^3 - 1$ as $(x - 1)\left(x^2 - x + 1\right)$, the pattern for a sum of cubes. For a difference of cubes the factor is $x^2 + x + 1$, which approaches $3$.`,
      String.raw`The form $\frac{0}{0}$ calls for factoring. After the common factor $x - 1$ cancels, the limit is $\frac{3}{2}$.`,
    ], answer: 0 },
  { id: "q106-m6", type: "mcq", difficulty: "moderate", skill: "u1", topic: "1.6", calc: false,
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

import { graph } from "../../plot.js";

export const sets = {
  "q108-s1": {
    name: "A function trapped near x = 1", label: "Free response",
    intro: String.raw`The function $g$ satisfies the inequality below for all real numbers $x$.`,
    sources: [{ title: "", blocks: [{ p: String.raw`$$\left| g(x) - 3 \right| \le (x - 1)^2$$` }] }],
  },
};

const items = [
  { id: "q108-m1", type: "mcq", skill: "u1", topic: "1.8", calc: false,
    stem: String.raw`For all $x$, $\cos x \le f(x) \le 1 + x^2$.`,
    question: String.raw`What is $\displaystyle \lim_{x \to 0} f(x)$?`,
    choices: ["$1$", "$2$", "$0$", String.raw`It cannot be determined without a formula for $f$.`],
    why: [
      String.raw`$\lim_{x \to 0} \cos x = 1$ and $\lim_{x \to 0} \left( 1 + x^2 \right) = 1$. Since $f$ is between two functions with the same limit, the squeeze theorem gives $\lim_{x \to 0} f(x) = 1$.`,
      String.raw`$2$ adds the limits of the two bounding functions. The squeeze theorem says $f$ has their common limit, $1$.`,
      String.raw`$0$ is the limit of the difference $\left( 1 + x^2 \right) - \cos x$. The gap between the bounds approaches $0$, and $f$ approaches the common limit $1$.`,
      String.raw`The squeeze theorem needs only the two bounding functions and their common limit. A formula for $f$ is not needed.`,
    ], answer: 0 },
  { id: "q108-m2", type: "mcq", skill: "u1", topic: "1.8", calc: false,
    stem: String.raw`For $0 < |x| < 1$, $1 - \dfrac{x^2}{6} \le \dfrac{\sin x}{x} \le 1$.`,
    question: String.raw`What does the squeeze theorem give for $\displaystyle \lim_{x \to 0} \dfrac{\sin x}{x}$?`,
    choices: ["$1$", String.raw`$\frac{5}{6}$`, "$0$", String.raw`The limit does not exist, because $\frac{\sin x}{x}$ is undefined at $x = 0$.`],
    why: [
      String.raw`$\lim_{x \to 0} \left( 1 - \dfrac{x^2}{6} \right) = 1$ and the upper bound is the constant $1$. Both bounds approach $1$, so by the squeeze theorem $\lim_{x \to 0} \dfrac{\sin x}{x} = 1$.`,
      String.raw`$\frac{5}{6}$ is the lower bound evaluated at $x = 1$. The limit uses the bounds as $x$ approaches $0$, where the lower bound approaches $1$.`,
      String.raw`$0$ comes from $\sin 0 = 0$ in the numerator. The denominator also approaches $0$, and the bounds show the quotient approaches $1$.`,
      String.raw`A limit can exist where the function is undefined. The inequality holds for all $x$ near $0$ except $0$ itself, which is all the squeeze theorem needs.`,
    ], answer: 0 },
  { id: "q108-m3", type: "mcq", skill: "u1", topic: "1.8", calc: false,
    question: String.raw`$\displaystyle \lim_{x \to 0} \dfrac{2x}{\sin(3x)}$ is`,
    choices: [String.raw`$\frac{2}{3}$`, String.raw`$\frac{3}{2}$`, "$1$", "$0$"],
    why: [
      String.raw`Rewrite: $\dfrac{2x}{\sin(3x)} = \dfrac{2}{3} \cdot \dfrac{3x}{\sin(3x)}$. As $x \to 0$, $3x \to 0$, so $\dfrac{3x}{\sin(3x)} \to 1$ and the limit is $\dfrac{2}{3}$.`,
      String.raw`$\frac{3}{2}$ is the reciprocal. Matching the $3x$ inside the sine leaves the factor $\frac{2}{3}$, not $\frac{3}{2}$.`,
      String.raw`$1$ applies $\lim_{\theta \to 0} \frac{\theta}{\sin \theta} = 1$ without making the numerator match the $3x$ inside the sine.`,
      String.raw`Substitution gives $\frac{0}{0}$, not $0$.`,
    ], answer: 0 },
  { id: "q108-m4", type: "mcq", skill: "u1", topic: "1.8", calc: false,
    question: String.raw`$\displaystyle \lim_{x \to 0} \dfrac{3x + \sin x}{2x}$ is`,
    choices: ["$2$", String.raw`$\frac{3}{2}$`, String.raw`$\frac{1}{2}$`, "$0$"],
    why: [
      String.raw`Split the fraction: $\dfrac{3x}{2x} + \dfrac{1}{2} \cdot \dfrac{\sin x}{x}$. This approaches $\dfrac{3}{2} + \dfrac{1}{2}(1) = 2$.`,
      String.raw`$\frac{3}{2}$ is the limit of $\frac{3x}{2x}$ alone. The term $\frac{\sin x}{2x}$ approaches $\frac{1}{2}$, not $0$.`,
      String.raw`$\frac{1}{2}$ is the limit of $\frac{\sin x}{2x}$ alone. The term $\frac{3x}{2x}$ adds $\frac{3}{2}$.`,
      String.raw`Substitution gives $\frac{0}{0}$, not $0$.`,
    ], answer: 0 },
  { id: "q108-m5", type: "mcq", skill: "u1", topic: "1.8", calc: false,
    stem: String.raw`Suppose $f(x) \le g(x) \le h(x)$ for all $x$ near $2$, and $\displaystyle \lim_{x \to 2} f(x) = 4$.`,
    question: String.raw`Which of the following additional facts is enough to conclude that $\displaystyle \lim_{x \to 2} g(x) = 4$?`,
    choices: [String.raw`$\lim_{x \to 2} h(x) = 4$`, "$h(2) = 4$", "$g(2) = 4$", String.raw`$\lim_{x \to 2} h(x) = 6$`],
    why: [
      String.raw`The squeeze theorem needs the lower and upper functions to have the same limit. With $\lim_{x \to 2} h(x) = 4$, $g$ is squeezed between two functions that both approach $4$.`,
      String.raw`$h(2) = 4$ is a function value. The squeeze theorem needs the limit of $h$ at $2$, which can differ from $h(2)$.`,
      String.raw`The value $g(2)$ says nothing about the values of $g(x)$ for $x$ near $2$, and those decide the limit.`,
      String.raw`With bounds approaching $4$ and $6$, $g(x)$ could approach any number from $4$ to $6$, or have no limit at all.`,
    ], answer: 0 },
  { id: "q108-m6", type: "mcq", skill: "u1", topic: "1.8", calc: false,
    stem: String.raw`For all $x$, $|f(x)| \le 5$.`,
    question: String.raw`What is $\displaystyle \lim_{x \to 0} x^2 f(x)$?`,
    choices: ["$0$", "$5$", "$-5$", String.raw`It cannot be determined without a formula for $f$.`],
    why: [
      String.raw`From $-5 \le f(x) \le 5$, multiplying by $x^2 \ge 0$ gives $-5x^2 \le x^2 f(x) \le 5x^2$. Both bounds approach $0$, so by the squeeze theorem the limit is $0$.`,
      String.raw`$5$ is the upper bound for $f(x)$. Multiplying by $x^2$, which approaches $0$, squeezes the product to $0$.`,
      String.raw`$-5$ is the lower bound for $f(x)$. The product $x^2 f(x)$ is between $-5x^2$ and $5x^2$, which both approach $0$.`,
      String.raw`The bound $|f(x)| \le 5$ is enough: $-5x^2 \le x^2 f(x) \le 5x^2$, and both bounds approach $0$.`,
    ], answer: 0 },

  { id: "q108-f1a", type: "frq", skill: "u1", topic: "1.8", calc: false, set: "q108-s1", part: "(a)",
    prompt: String.raw`Rewrite the inequality as a lower bound and an upper bound for $g(x)$, and find the limit of each bounding function as $x \to 1$.`,
    rows: [
      { name: "Bounds and their limits", earns: String.raw`$3 - (x - 1)^2 \le g(x) \le 3 + (x - 1)^2$, and both bounding functions approach $3$ as $x \to 1$.` },
    ],
    solution: String.raw`$|g(x) - 3| \le (x - 1)^2$ means $-(x - 1)^2 \le g(x) - 3 \le (x - 1)^2$, so
$$3 - (x - 1)^2 \le g(x) \le 3 + (x - 1)^2$$
$\displaystyle \lim_{x \to 1} \left[ 3 - (x - 1)^2 \right] = 3$ and $\displaystyle \lim_{x \to 1} \left[ 3 + (x - 1)^2 \right] = 3$.` },
  { id: "q108-f1b", type: "frq", skill: "u1", topic: "1.8", calc: false, set: "q108-s1", part: "(b)",
    prompt: String.raw`Find $\displaystyle \lim_{x \to 1} g(x)$. Justify your answer.`,
    rows: [
      { name: "Answer with justification", earns: String.raw`$\lim_{x \to 1} g(x) = 3$ by the squeeze theorem, because $g$ is between two functions that both approach $3$.` },
    ],
    solution: String.raw`From part (a), $3 - (x - 1)^2 \le g(x) \le 3 + (x - 1)^2$ for all $x$, and both bounding functions approach $3$ as $x \to 1$. By the squeeze theorem, $\displaystyle \lim_{x \to 1} g(x) = 3$.` },
  { id: "q108-f1c", type: "frq", skill: "u1", topic: "1.8", calc: false, set: "q108-s1", part: "(c)",
    prompt: String.raw`Find $\displaystyle \lim_{x \to 1} \dfrac{g(x) - 3}{x - 1}$. Justify your answer.`,
    rows: [
      { name: "Bounds", earns: String.raw`For $x \ne 1$, $-|x - 1| \le \dfrac{g(x) - 3}{x - 1} \le |x - 1|$.` },
      { name: "Answer with justification", earns: String.raw`The limit is $0$ by the squeeze theorem, because $-|x - 1|$ and $|x - 1|$ both approach $0$ as $x \to 1$.` },
    ],
    solution: String.raw`For $x \ne 1$, divide $|g(x) - 3| \le (x - 1)^2$ by $|x - 1| > 0$:
$$\left| \dfrac{g(x) - 3}{x - 1} \right| \le \dfrac{(x - 1)^2}{|x - 1|} = |x - 1|$$
So $-|x - 1| \le \dfrac{g(x) - 3}{x - 1} \le |x - 1|$. Both $-|x - 1|$ and $|x - 1|$ approach $0$ as $x \to 1$, so by the squeeze theorem, $\displaystyle \lim_{x \to 1} \dfrac{g(x) - 3}{x - 1} = 0$.` },
];

export default { forms: [{ id: "q108", name: "Topic 1.8 Quiz: The Squeeze Theorem", group: "Unit 1: Limits and Continuity", items }] };

export const sets = {
  "q115-s1": {
    name: "The function g",
    label: "Free response",
    intro: String.raw`Let $g$ be the function defined by $g(x) = \dfrac{\sqrt{16x^2 + 9}}{2x - 1}$ for $x \neq \dfrac{1}{2}$.`,
    sources: [{ title: "", blocks: [{ p: String.raw`Answer each part without a calculator. Show the work that leads to each answer.` }] }],
  },
};

const items = [
  {
    id: "q115-m1", type: "mcq", skill: "u1", topic: "1.15", calc: false,
    question: String.raw`$\displaystyle \lim_{x \to \infty} \dfrac{4x^2 - x}{2x^2 + 5}$ is`,
    choices: ["$2$", String.raw`$\frac{1}{2}$`, String.raw`$-\frac{1}{5}$`, String.raw`$\infty$`],
    why: [
      String.raw`Divide the numerator and denominator by $x^2$: $\dfrac{4 - \frac{1}{x}}{2 + \frac{5}{x^2}} \to \dfrac{4}{2} = 2$.`,
      String.raw`$\frac{1}{2}$ is the reciprocal. The ratio of leading coefficients is $\dfrac{4}{2}$, not $\dfrac{2}{4}$.`,
      String.raw`$-\frac{1}{5}$ uses the coefficients of the lowest-degree terms, $-1$ and $5$. The highest-degree terms control the limit at infinity.`,
      String.raw`The numerator and denominator have the same degree, so the quotient approaches the ratio of leading coefficients, a finite number.`,
    ],
    answer: 0,
  },
  {
    id: "q115-m2", type: "mcq", skill: "u1", topic: "1.15", calc: false,
    question: String.raw`$\displaystyle \lim_{x \to \infty} \dfrac{5 - 2x^3}{x^2 + 4}$ is`,
    choices: [String.raw`$-\infty$`, String.raw`$\infty$`, "$-2$", "$0$"],
    why: [
      String.raw`Divide by $x^2$: $\dfrac{\frac{5}{x^2} - 2x}{1 + \frac{4}{x^2}}$. The denominator approaches $1$ and the numerator behaves like $-2x$, which decreases without bound.`,
      String.raw`The leading term of the numerator is $-2x^3$, which is negative for large $x$, while the denominator is positive.`,
      String.raw`$-2$ is the ratio of leading coefficients, which gives the limit only when the degrees are equal. Here the numerator has the higher degree.`,
      String.raw`$0$ is the limit when the denominator has the higher degree. Here the numerator has degree $3$ and the denominator has degree $2$.`,
    ],
    answer: 0,
  },
  {
    id: "q115-m3", type: "mcq", skill: "u1", topic: "1.15", calc: false,
    question: String.raw`Which of the following is the horizontal asymptote of the graph of $y = \dfrac{2x^2 + 1}{x^3 - 8}$?`,
    choices: ["$y = 0$", "$y = 2$", "$x = 2$", "There is no horizontal asymptote."],
    why: [
      String.raw`The denominator has the higher degree. Dividing by $x^3$ gives $\dfrac{\frac{2}{x} + \frac{1}{x^3}}{1 - \frac{8}{x^3}} \to \dfrac{0}{1} = 0$ as $x \to \pm\infty$.`,
      String.raw`$2$ is the ratio of the leading coefficients $2$ and $1$, but that rule applies only when the degrees are equal.`,
      String.raw`$x = 2$ makes the denominator $0$. It is a vertical asymptote, not a horizontal one.`,
      String.raw`A graph has no horizontal asymptote when the numerator has the higher degree. Here the denominator does, and $y \to 0$.`,
    ],
    answer: 0,
  },
  {
    id: "q115-m4", type: "mcq", skill: "u1", topic: "1.15", calc: false,
    question: String.raw`What are all the horizontal asymptotes of the graph of $y = \dfrac{3e^{x}}{e^{x} + 4}$?`,
    choices: [String.raw`$y = 3$ and $y = 0$`, String.raw`$y = 3$ only`, String.raw`$y = 0$ only`, String.raw`$y = \frac{3}{4}$ and $y = 0$`],
    why: [
      String.raw`As $x \to \infty$, divide by $e^{x}$: $\dfrac{3}{1 + 4e^{-x}} \to 3$. As $x \to -\infty$, $e^{x} \to 0$, so the quotient approaches $\dfrac{0}{0 + 4} = 0$.`,
      String.raw`This checks only $x \to \infty$. As $x \to -\infty$, the quotient approaches $0$.`,
      String.raw`This checks only $x \to -\infty$. As $x \to \infty$, $e^{x}$ grows, the $4$ becomes negligible, and the quotient approaches $3$.`,
      String.raw`$\frac{3}{4}$ divides $3$ by the constant $4$. As $x \to \infty$, $e^{x}$ is far larger than $4$, so the quotient approaches $3$.`,
    ],
    answer: 0,
  },
  {
    id: "q115-m5", type: "mcq", skill: "u1", topic: "1.15", calc: false,
    question: String.raw`$\displaystyle \lim_{x \to \infty} \dfrac{2^{x}}{x^{10}}$ is`,
    choices: [String.raw`$\infty$`, "$0$", "$1$", "$2$"],
    why: [
      String.raw`An exponential function with base greater than $1$ grows faster than any power of $x$. For large $x$, $2^{x}$ dominates $x^{10}$, and the quotient increases without bound.`,
      String.raw`$x^{10}$ is larger than $2^{x}$ for many moderate values of $x$ (at $x = 10$, $10^{10}$ is far larger than $2^{10}$), but for large $x$ the exponential grows faster.`,
      String.raw`Both the numerator and the denominator grow without bound, but at different rates, so the quotient does not approach $1$.`,
      String.raw`$2$ is the base of the exponential, not the limit of the quotient.`,
    ],
    answer: 0,
  },
  {
    id: "q115-m6", type: "mcq", skill: "u1", topic: "1.15", calc: false,
    question: String.raw`$\displaystyle \lim_{x \to \infty} \dfrac{4x - \cos(3x)}{2x + 1}$ is`,
    choices: ["$2$", "$4$", "$0$", "The limit does not exist."],
    why: [
      String.raw`Divide by $x$: $\dfrac{4 - \frac{\cos(3x)}{x}}{2 + \frac{1}{x}}$. Since $-\dfrac{1}{x} \leq \dfrac{\cos(3x)}{x} \leq \dfrac{1}{x}$ for $x > 0$ and both bounds approach $0$, the quotient approaches $\dfrac{4}{2} = 2$.`,
      String.raw`$4$ divides $4x$ by $x$ and leaves out the $2$ in the denominator.`,
      String.raw`$0$ keeps only the $\cos(3x)$ term, as if the quotient were $\dfrac{\cos(3x)}{x}$.`,
      String.raw`$\cos(3x)$ oscillates, but after dividing by $x$ it is squeezed to $0$, so the quotient approaches $2$.`,
    ],
    answer: 0,
  },
  {
    id: "q115-f1a", type: "frq", skill: "u1", topic: "1.15", calc: false, set: "q115-s1", part: "(a)",
    prompt: String.raw`Find $\displaystyle \lim_{x \to \infty} g(x)$. Show the work that leads to the answer.`,
    rows: [
      { name: "Limit with work", earns: String.raw`$\lim_{x \to \infty} g(x) = 2$, with work: for $x > 0$, $\dfrac{\sqrt{16x^2 + 9}}{2x - 1} = \dfrac{\sqrt{16 + \frac{9}{x^2}}}{2 - \frac{1}{x}} \to \dfrac{4}{2}$.` },
    ],
    solution: String.raw`For $x > 0$, $\sqrt{x^2} = x$, so dividing the numerator and denominator by $x$ gives $$g(x) = \dfrac{\sqrt{16 + \frac{9}{x^2}}}{2 - \frac{1}{x}}.$$ As $x \to \infty$, $\dfrac{9}{x^2} \to 0$ and $\dfrac{1}{x} \to 0$, so $\displaystyle \lim_{x \to \infty} g(x) = \dfrac{\sqrt{16}}{2} = 2$.`,
  },
  {
    id: "q115-f1b", type: "frq", skill: "u1", topic: "1.15", calc: false, set: "q115-s1", part: "(b)",
    prompt: String.raw`Find $\displaystyle \lim_{x \to -\infty} g(x)$. Show the work that leads to the answer.`,
    rows: [
      { name: "Uses the absolute value", earns: String.raw`Uses $\sqrt{x^2} = |x| = -x$ for $x < 0$, such as $\sqrt{16x^2 + 9} = -x\sqrt{16 + \frac{9}{x^2}}$.` },
      { name: "Answer", earns: String.raw`$\lim_{x \to -\infty} g(x) = -2$` },
    ],
    solution: String.raw`For $x < 0$, $\sqrt{x^2} = |x| = -x$, so $\sqrt{16x^2 + 9} = -x\sqrt{16 + \frac{9}{x^2}}$. Then $$g(x) = \dfrac{-x\sqrt{16 + \frac{9}{x^2}}}{x\left(2 - \frac{1}{x}\right)} = \dfrac{-\sqrt{16 + \frac{9}{x^2}}}{2 - \frac{1}{x}}.$$ As $x \to -\infty$, this approaches $\dfrac{-4}{2} = -2$.`,
  },
  {
    id: "q115-f1c", type: "frq", skill: "u1", topic: "1.15", calc: false, set: "q115-s1", part: "(c)",
    prompt: String.raw`Write an equation for each horizontal asymptote of the graph of $g$.`,
    rows: [
      { name: "Asymptotes", earns: String.raw`$y = 2$ and $y = -2$, consistent with the answers to parts (a) and (b).` },
    ],
    solution: String.raw`By part (a), $g(x) \to 2$ as $x \to \infty$, and by part (b), $g(x) \to -2$ as $x \to -\infty$. The horizontal asymptotes are $y = 2$ and $y = -2$.`,
  },
];

export default { forms: [{ id: "q115", name: "Topic 1.15 Quiz: Limits at Infinity and Horizontal Asymptotes", group: "Unit 1: Limits and Continuity", items }] };

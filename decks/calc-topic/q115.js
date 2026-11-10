export const sets = {
  "q115-s1": {
    name: "The function g",
    label: "Free response",
    intro: String.raw`Let $g$ be the function defined by $g(x) = \dfrac{\sqrt{9x^2 + 16}}{1 - 3x}$ for $x \neq \dfrac{1}{3}$.`,
    sources: [{ title: "", blocks: [{ p: String.raw`Answer each part without a calculator. Show the work that leads to each answer.` }] }],
  },
};

const items = [
  {
    id: "q115-m1", type: "mcq", difficulty: "easy", skill: "u1", topic: "1.15", calc: false,
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
    id: "q115-m2", type: "mcq", difficulty: "moderate", skill: "u1", topic: "1.15", calc: false,
    question: String.raw`$\displaystyle \lim_{x \to \infty} \dfrac{3e^{x} + x^5}{e^{x} - x^3}$ is`,
    choices: ["$3$", String.raw`$-\infty$`, "$1$", String.raw`$\infty$`],
    why: [
      String.raw`Divide the numerator and denominator by $e^{x}$: $\dfrac{3 + \frac{x^5}{e^{x}}}{1 - \frac{x^3}{e^{x}}}$. The exponential $e^{x}$ grows faster than any power of $x$, so $\dfrac{x^5}{e^{x}} \to 0$ and $\dfrac{x^3}{e^{x}} \to 0$. The limit is $\dfrac{3}{1} = 3$.`,
      String.raw`$-\infty$ treats the powers as the dominant terms, $\dfrac{x^5}{-x^3} = -x^2$. For large $x$, $e^{x}$ is far larger than $x^5$ or $x^3$.`,
      String.raw`$1$ reads $\frac{\infty}{\infty}$ as $1$. Both parts grow without bound, but the quotient approaches the ratio of the coefficients of $e^{x}$, $\frac{3}{1}$.`,
      String.raw`$\infty$ compares only the powers and uses the higher power, $x^5$, in the numerator. The exponential terms dominate both powers.`,
    ],
    answer: 0,
  },
  {
    id: "q115-m3", type: "mcq", difficulty: "easy", skill: "u1", topic: "1.15", calc: false,
    question: String.raw`Which of the following is the horizontal asymptote of the graph of $y = \dfrac{2x^2 + 1}{x^3 - 8}$?`,
    choices: ["$y = 0$", "$y = 2$", "$x = 2$", "There is none."],
    why: [
      String.raw`The denominator has the higher degree. Dividing by $x^3$ gives $\dfrac{\frac{2}{x} + \frac{1}{x^3}}{1 - \frac{8}{x^3}} \to \dfrac{0}{1} = 0$ as $x \to \pm\infty$.`,
      String.raw`$2$ is the ratio of the leading coefficients $2$ and $1$, but that rule applies only when the degrees are equal.`,
      String.raw`$x = 2$ makes the denominator $0$. It is a vertical asymptote, not a horizontal one.`,
      String.raw`A graph has no horizontal asymptote when the numerator has the higher degree. Here the denominator does, and $y \to 0$.`,
    ],
    answer: 0,
  },
  {
    id: "q115-m4", type: "mcq", difficulty: "difficult", skill: "u1", topic: "1.15", calc: false,
    question: String.raw`The graph of $y = \dfrac{ax^2 + 5}{bx^2 - 4x}$, where $a$ and $b$ are nonzero constants, has a horizontal asymptote at $y = 3$ and a vertical asymptote at $x = 2$. What is the value of $a$?`,
    choices: ["$a = 6$", String.raw`$a = \frac{2}{3}$`, "$a = 24$", "$a = -6$"],
    why: [
      String.raw`The denominator is $x(bx - 4)$, which is $0$ at $x = 0$ and $x = \dfrac{4}{b}$. A vertical asymptote at $x = 2$ needs $\dfrac{4}{b} = 2$, so $b = 2$; the numerator there is $4a + 5 \ne 0$ when $a = 6$, so it is an asymptote, not a hole. The degrees are equal, so the horizontal asymptote is $y = \dfrac{a}{b}$. Then $\dfrac{a}{2} = 3$ and $a = 6$.`,
      String.raw`$\frac{2}{3}$ uses the ratio $\frac{b}{a} = 3$, upside down. The horizontal asymptote is the numerator's leading coefficient over the denominator's, $\frac{a}{b}$.`,
      String.raw`$24$ solves $bx - 4 = 0$ as $x = \frac{b}{4}$, which gives $b = 8$ and $a = 24$. The zero of $bx - 4$ is $x = \frac{4}{b}$.`,
      String.raw`$-6$ uses $b = -2$, a sign slip in solving $2b - 4 = 0$. With $b = -2$ the denominator is $-2x(x + 2)$, whose asymptotes are $x = 0$ and $x = -2$.`,
    ],
    answer: 0,
  },
  {
    id: "q115-m5", type: "mcq", difficulty: "moderate", skill: "u1", topic: "1.15", calc: false,
    question: String.raw`$\displaystyle \lim_{x \to \infty} \dfrac{5x^3 + 1}{(2x - 1)^3}$ is`,
    choices: [String.raw`$\frac{5}{8}$`, String.raw`$\frac{5}{2}$`, String.raw`$\frac{5}{6}$`, "$-1$"],
    why: [
      String.raw`The leading term of $(2x - 1)^3$ is $(2x)^3 = 8x^3$. The numerator and denominator both have degree $3$, so the limit is the ratio of the leading coefficients, $\dfrac{5}{8}$.`,
      String.raw`$\frac{5}{2}$ takes $2$ as the leading coefficient of $(2x - 1)^3$. Cubing gives $(2x)^3 = 8x^3$, so the coefficient is $2^3 = 8$.`,
      String.raw`$\frac{5}{6}$ multiplies the $2$ by the exponent $3$ instead of cubing it. The leading term is $(2x)^3 = 8x^3$, not $6x^3$.`,
      String.raw`$-1$ is the ratio of the constant terms, $\frac{1}{(-1)^3}$. The highest-degree terms control the limit as $x \to \infty$.`,
    ],
    answer: 0,
  },
  {
    id: "q115-m6", type: "mcq", difficulty: "moderate", skill: "u1", topic: "1.15", calc: false,
    question: String.raw`Which of the following is true about $\displaystyle \lim_{x \to \infty} \dfrac{4x + \sin(5x)}{2x + 1}$?`,
    choices: ["It equals $2$.", "It equals $4$.", "It equals $0$.", "It does not exist."],
    why: [
      String.raw`Divide by $x$: $\dfrac{4 + \frac{\sin(5x)}{x}}{2 + \frac{1}{x}}$. Since $-\dfrac{1}{x} \leq \dfrac{\sin(5x)}{x} \leq \dfrac{1}{x}$ for $x > 0$ and both bounds approach $0$, the quotient approaches $\dfrac{4}{2} = 2$.`,
      String.raw`$4$ divides $4x$ by $x$ and leaves out the $2$ in the denominator.`,
      String.raw`$0$ keeps only the $\sin(5x)$ term, as if the quotient were $\dfrac{\sin(5x)}{x}$.`,
      String.raw`$\sin(5x)$ oscillates, but after dividing by $x$ it is squeezed to $0$, so the quotient approaches $2$.`,
    ],
    answer: 0,
  },
  {
    id: "q115-f1a", type: "frq", skill: "u1", topic: "1.15", calc: false, set: "q115-s1", part: "(a)",
    prompt: String.raw`Find $\displaystyle \lim_{x \to \infty} g(x)$. Show the work that leads to your answer.`,
    rows: [
      { name: "Limit with work", earns: String.raw`$\lim_{x \to \infty} g(x) = -1$, with work: for $x > 0$, $\dfrac{\sqrt{9x^2 + 16}}{1 - 3x} = \dfrac{\sqrt{9 + \frac{16}{x^2}}}{\frac{1}{x} - 3} \to \dfrac{3}{-3}$.` },
    ],
    solution: String.raw`For $x > 0$, $\sqrt{x^2} = x$, so dividing the numerator and denominator by $x$ gives $$g(x) = \dfrac{\sqrt{9 + \frac{16}{x^2}}}{\frac{1}{x} - 3}.$$ As $x \to \infty$, $\dfrac{16}{x^2} \to 0$ and $\dfrac{1}{x} \to 0$, so $\displaystyle \lim_{x \to \infty} g(x) = \dfrac{\sqrt{9}}{-3} = -1$.`,
  },
  {
    id: "q115-f1b", type: "frq", skill: "u1", topic: "1.15", calc: false, set: "q115-s1", part: "(b)",
    prompt: String.raw`Find $\displaystyle \lim_{x \to -\infty} g(x)$. Show the work that leads to your answer.`,
    rows: [
      { name: "Uses the absolute value", earns: String.raw`Uses $\sqrt{x^2} = |x| = -x$ for $x < 0$, such as $\sqrt{9x^2 + 16} = -x\sqrt{9 + \frac{16}{x^2}}$.` },
      { name: "Answer", earns: String.raw`$\lim_{x \to -\infty} g(x) = 1$` },
    ],
    solution: String.raw`For $x < 0$, $\sqrt{x^2} = |x| = -x$, so $\sqrt{9x^2 + 16} = -x\sqrt{9 + \frac{16}{x^2}}$. Then $$g(x) = \dfrac{-x\sqrt{9 + \frac{16}{x^2}}}{x\left(\frac{1}{x} - 3\right)} = \dfrac{-\sqrt{9 + \frac{16}{x^2}}}{\frac{1}{x} - 3}.$$ As $x \to -\infty$, this approaches $\dfrac{-3}{-3} = 1$.`,
  },
  {
    id: "q115-f1c", type: "frq", skill: "u1", topic: "1.15", calc: false, set: "q115-s1", part: "(c)",
    prompt: String.raw`Write an equation for each horizontal asymptote of the graph of $g$.`,
    rows: [
      { name: "Asymptotes", earns: String.raw`$y = -1$ and $y = 1$, consistent with the answers to parts (a) and (b).` },
    ],
    solution: String.raw`By part (a), $g(x) \to -1$ as $x \to \infty$, and by part (b), $g(x) \to 1$ as $x \to -\infty$. The horizontal asymptotes are $y = -1$ and $y = 1$.`,
  },
];

export default { forms: [{ id: "q115", name: "Topic 1.15 Quiz: Limits at Infinity and Horizontal Asymptotes", group: "Unit 1: Limits and Continuity", items }] };

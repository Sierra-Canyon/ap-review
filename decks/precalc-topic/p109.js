// AP Precalculus topic quiz 1.9: Rational Functions and Vertical Asymptotes.
import { graph } from "../../plot.js";

// f(x) = 4(x - 1) / ((x + 2)(x - 3)^2). Items m04 and m05 read this graph.
const f = (x) => (4 * (x - 1)) / ((x + 2) * (x - 3) ** 2);

export const sets = {
  "p109-s1": {
    name: "Values of f near x = -1",
    label: "Table",
    intro: String.raw`The rational function $f$ is not defined at $x = -1$. The table below gives values of $f(x)$ for selected values of $x$ near $-1$.`,
    sources: [{ title: "", blocks: [{ table: { head: ["$x$", "$-1.1$", "$-1.01$", "$-1.001$", "$-0.999$", "$-0.99$", "$-0.9$"], rows: [["$f(x)$", "$-190$", "$-19{,}900$", "$-1{,}999{,}000$", "$-2{,}001{,}000$", "$-20{,}100$", "$-210$"]] } }] }],
  },
  "p109-s2": {
    name: "The graph of f",
    label: "Graph",
    intro: String.raw`The graph of the rational function $f$ is shown below. The dashed lines $x = -2$ and $x = 3$ are vertical asymptotes, and the graph crosses the $x$-axis only at $x = 1$.`,
    sources: [{ title: "", blocks: [{ svg: graph({
      x: [-6, 7], y: [-4, 6], step: 1, xname: "x", yname: "y",
      fns: [{ f, from: -6, to: -2.02 }, { f, from: -1.98, to: 2.97 }, { f, from: 3.03, to: 7 }],
      vlines: [{ x: -2 }, { x: 3 }],
      dots: [[1, 0, "closed"]],
      alt: "Graph of f with dashed vertical asymptotes x = -2 and x = 3. On the left, the curve is slightly above the x-axis and rises toward positive infinity as x approaches -2 from the left. Just right of x = -2 the curve comes up from negative infinity, crosses the x-axis at x = 1, and rises toward positive infinity as x approaches 3 from the left. Just right of x = 3 the curve comes down from positive infinity and levels off toward the x-axis, staying above it.",
    }) }] }],
  },
  "p109-s3": {
    name: "Two vertical asymptotes",
    label: "Free response",
    intro: String.raw`Let $g$ be the function given by $$g(x) = \dfrac{x^{2} - 1}{x^{3} - 4x^{2} + 4x}.$$`,
    sources: [{ title: "", blocks: [{ p: String.raw`No calculator is allowed. Show the work that leads to each answer.` }] }],
  },
};

export default {
  forms: [{
    id: "p109",
    name: "Topic 1.9 Quiz: Rational Functions and Vertical Asymptotes",
    group: "Unit 1: Polynomial and Rational Functions",
    items: [
      { id: "p109-m01", type: "mcq", skill: "u1", topic: "1.9", calc: true, difficulty: "easy",
        question: String.raw`Let $r(x) = \dfrac{x + 1}{x^{3} - 3x - 1}$. Which of the following is an equation of a vertical asymptote of the graph of $r$?`,
        choices: ["$x = 1.879$", "$x = 1.532$", "$x = -1$", "$x = -0.333$"],
        why: [
          String.raw`The zeros of $x^{3} - 3x - 1$ found on a graphing calculator are $x \approx -1.532$, $x \approx -0.347$, and $x \approx 1.879$. The numerator $x + 1$ is not $0$ at any of them, so each is a vertical asymptote, and $x = 1.879$ is one of them.`,
          String.raw`$1.532$ is a zero of $x^{3} - 3x + 1$, which changes the sign of the constant term. The denominator here is $x^{3} - 3x - 1$.`,
          String.raw`$x = -1$ makes the numerator $0$, and the denominator equals $-1 + 3 - 1 = 1$ there, so $x = -1$ is a zero of $r$, not an asymptote.`,
          String.raw`$-0.333$ solves $-3x - 1 = 0$, which drops the $x^{3}$ term. The nearby zero of the full denominator is $x \approx -0.347$.`,
        ], answer: 0 },
      { id: "p109-m02", type: "mcq", skill: "u1", topic: "1.9", calc: false, difficulty: "moderate",
        question: String.raw`Let $g(x) = \dfrac{x - 3}{x^{2} + 2x}$. What is $\displaystyle \lim_{x \to 0^{-}} g(x)$?`,
        choices: [String.raw`$\infty$`, String.raw`$-\infty$`, String.raw`$-\frac{3}{2}$`, "$0$"],
        why: [
          String.raw`$g(x) = \dfrac{x - 3}{x(x + 2)}$. For $x$ slightly less than $0$, the numerator is close to $-3$, $x$ is a small negative number, and $x + 2$ is close to $2$, so the denominator is a small negative number. A negative number divided by a small negative number is large and positive. For example, $g(-0.01) = \dfrac{-3.01}{-0.0199} \approx 151$.`,
          String.raw`This is the limit from the right. For $x$ slightly greater than $0$, the denominator is a small positive number and $g(x)$ falls without bound.`,
          String.raw`$-\dfrac{3}{2}$ is $\dfrac{x - 3}{x + 2}$ at $x = 0$, which leaves out the factor $x$. That factor makes the denominator approach $0$.`,
          String.raw`The numerator approaches $-3$, not $0$, while the denominator approaches $0$, so $g(x)$ does not approach $0$.`,
        ], answer: 0 },
      { id: "p109-m03", type: "mcq", skill: "u1", topic: "1.9", calc: false, set: "p109-s1", difficulty: "easy",
        question: String.raw`Based on the table, which of the following best describes the behavior of $f(x)$ near $x = -1$?`,
        choices: [
          String.raw`$\lim_{x \to -1^-} f(x) = -\infty$ and $\lim_{x \to -1^+} f(x) = -\infty$`,
          String.raw`$\lim_{x \to -1^-} f(x) = -\infty$ and $\lim_{x \to -1^+} f(x) = \infty$`,
          String.raw`$\lim_{x \to -1^-} f(x) = \infty$ and $\lim_{x \to -1^+} f(x) = \infty$`,
          String.raw`$\lim_{x \to -1^-} f(x) = \infty$ and $\lim_{x \to -1^+} f(x) = -\infty$`,
        ],
        why: [
          String.raw`As $x$ moves toward $-1$ from either side, the values are negative and grow in size without bound: $-190$, $-19{,}900$, $-1{,}999{,}000$ on the left and $-210$, $-20{,}100$, $-2{,}001{,}000$ on the right.`,
          String.raw`The values on the right of $-1$ are negative too ($-210$, $-20{,}100$, $-2{,}001{,}000$), so $f(x)$ falls without bound on both sides.`,
          String.raw`This reverses the sign. Every value in the table is negative.`,
          String.raw`The values on the left of $-1$ are negative, and so are the values on the right.`,
        ], answer: 0 },
      { id: "p109-m04", type: "mcq", skill: "u1", topic: "1.9", calc: false, set: "p109-s2", difficulty: "moderate",
        question: String.raw`Which of the following could define $f$?`,
        choices: [String.raw`$f(x) = \frac{4(x - 1)}{(x + 2)(x - 3)^{2}}$`, String.raw`$f(x) = \frac{4(x - 1)}{(x + 2)^{2}(x - 3)}$`, String.raw`$f(x) = \frac{4(x + 1)}{(x - 2)(x + 3)^{2}}$`, String.raw`$f(x) = \frac{(x + 2)(x - 3)^{2}}{4(x - 1)}$`],
        why: [
          String.raw`The zero at $x = 1$ gives the factor $x - 1$. At $x = -2$ the graph goes to $\infty$ on one side and $-\infty$ on the other, so $x + 2$ has odd multiplicity. At $x = 3$ the graph goes to $\infty$ on both sides, so $x - 3$ has even multiplicity.`,
          String.raw`This swaps the multiplicities. With $(x + 2)^{2}$, the graph would go to the same infinity on both sides of $x = -2$, and with $(x - 3)^{1}$ it would change sign at $x = 3$.`,
          String.raw`The signs are reversed. This function has a zero at $x = -1$ and asymptotes at $x = 2$ and $x = -3$.`,
          String.raw`This is the reciprocal. It is $0$ at $x = -2$ and $x = 3$ and has an asymptote at $x = 1$, the reverse of the graph.`,
        ], answer: 0 },
      { id: "p109-m05", type: "mcq", skill: "u1", topic: "1.9", calc: false, set: "p109-s2", difficulty: "easy",
        question: String.raw`Which of the following describes the behavior of $f(x)$ near $x = 3$?`,
        choices: [
          String.raw`$\lim_{x \to 3^-} f(x) = \infty$ and $\lim_{x \to 3^+} f(x) = \infty$`,
          String.raw`$\lim_{x \to 3^-} f(x) = -\infty$ and $\lim_{x \to 3^+} f(x) = \infty$`,
          String.raw`$\lim_{x \to 3^-} f(x) = \infty$ and $\lim_{x \to 3^+} f(x) = -\infty$`,
          String.raw`$\lim_{x \to 3^-} f(x) = -\infty$ and $\lim_{x \to 3^+} f(x) = -\infty$`,
        ],
        why: [
          String.raw`The graph rises without bound as $x$ approaches $3$ from the left and also from the right.`,
          String.raw`Just left of $x = 3$ the graph is above the $x$-axis and rises, so the left-hand limit is $\infty$.`,
          String.raw`Just right of $x = 3$ the graph comes down from above, so the right-hand limit is $\infty$, not $-\infty$.`,
          String.raw`The graph is above the $x$-axis on both sides of $x = 3$, so neither limit is $-\infty$.`,
        ], answer: 0 },
      { id: "p109-m06", type: "mcq", skill: "u1", topic: "1.9", calc: false, difficulty: "difficult",
        question: String.raw`A rational function $f$ satisfies $\displaystyle \lim_{x \to 2^{-}} f(x) = \infty$ and $\displaystyle \lim_{x \to 2^{+}} f(x) = -\infty$. Which of the following must be true?

I. The line $x = 2$ is a vertical asymptote of the graph of $f$.
II. When $f$ is written in lowest terms, $x - 2$ is a factor of the denominator with odd multiplicity.
III. The numerator of $f$ is positive for all $x$ near $2$.`,
        choices: ["I and II only", "II and III only", "I, II, and III", "I and III only"],
        why: [
          String.raw`I is true: $f(x)$ grows without bound as $x$ approaches $2$. II is true: the outputs change sign across $x = 2$, which happens when $x - 2$ has odd multiplicity in the reduced denominator; an even power would give the same sign on both sides. III need not be true: $f(x) = \dfrac{-1}{x - 2}$ has a negative numerator, yet $f(x) \to \infty$ as $x \to 2^{-}$ and $f(x) \to -\infty$ as $x \to 2^{+}$.`,
          String.raw`I must be true, since $f(x)$ is unbounded as $x \to 2$, and III does not have to be: $f(x) = \dfrac{-1}{x - 2}$ has a negative numerator and the same one-sided limits.`,
          String.raw`III could be true but does not have to be. $f(x) = \dfrac{-1}{x - 2}$ has a negative numerator and the same one-sided limits.`,
          String.raw`III does not have to be true, as $f(x) = \dfrac{-1}{x - 2}$ shows, and II must be true because the sign changes across $x = 2$.`,
        ], answer: 0 },
      { id: "p109-f1a", type: "frq", skill: "u1", topic: "1.9", calc: false, set: "p109-s3", part: "(a)",
        prompt: String.raw`Write an equation for each vertical asymptote of the graph of $g$. Give a reason for your answer.`,
        rows: [
          { name: "Asymptotes with reason", earns: String.raw`$x = 0$ and $x = 2$, because the denominator $x(x - 2)^{2}$ is $0$ there and the numerator $(x - 1)(x + 1)$ is not $0$ there.` },
        ],
        solution: String.raw`The denominator factors as $x^{3} - 4x^{2} + 4x = x(x^{2} - 4x + 4) = x(x - 2)^{2}$, and the numerator is $(x - 1)(x + 1)$. The denominator is $0$ at $x = 0$ and $x = 2$. The numerator equals $-1$ at $x = 0$ and $3$ at $x = 2$, so no factor cancels. The vertical asymptotes are $x = 0$ and $x = 2$.` },
      { id: "p109-f1b", type: "frq", skill: "u1", topic: "1.9", calc: false, set: "p109-s3", part: "(b)",
        prompt: String.raw`Use limit notation to describe the behavior of $g(x)$ as $x$ approaches $0$ from the left and from the right.`,
        rows: [
          { name: "Limits at 0", earns: String.raw`$\displaystyle \lim_{x \to 0^{-}} g(x) = \infty$ and $\displaystyle \lim_{x \to 0^{+}} g(x) = -\infty$, both in limit notation.` },
        ],
        solution: String.raw`Near $x = 0$ the numerator is close to $-1$ and $(x - 2)^{2}$ is close to $4$. For $x$ slightly less than $0$, the factor $x$ is a small negative number, so the denominator is a small negative number and $g(x)$ is large and positive: $$\lim_{x \to 0^{-}} g(x) = \infty$$ For $x$ slightly greater than $0$, the denominator is a small positive number and $g(x)$ is large and negative: $$\lim_{x \to 0^{+}} g(x) = -\infty$$` },
      { id: "p109-f1c", type: "frq", skill: "u1", topic: "1.9", calc: false, set: "p109-s3", part: "(c)",
        prompt: String.raw`(i) Use limit notation to describe the behavior of $g(x)$ as $x$ approaches $2$ from the left and from the right. (ii) Explain why the two one-sided limits at $x = 2$ are equal, while the two one-sided limits at $x = 0$ are not.`,
        rows: [
          { name: "Limits at 2", earns: String.raw`$\displaystyle \lim_{x \to 2^{-}} g(x) = \infty$ and $\displaystyle \lim_{x \to 2^{+}} g(x) = \infty$.` },
          { name: "Reason", earns: String.raw`The factor $x - 2$ has even multiplicity ($2$), so $(x - 2)^{2}$ is positive on both sides of $2$ and $g$ does not change sign there. The factor $x$ has odd multiplicity ($1$), so the denominator changes sign at $x = 0$.` },
        ],
        solution: String.raw`(i) Near $x = 2$ the numerator is close to $3$, the factor $x$ is close to $2$, and $(x - 2)^{2}$ is a small positive number on both sides. So $g(x)$ is large and positive on both sides: $$\lim_{x \to 2^{-}} g(x) = \infty \quad \text{and} \quad \lim_{x \to 2^{+}} g(x) = \infty$$ (ii) The factor $x - 2$ appears to an even power, so $(x - 2)^{2} > 0$ on both sides of $x = 2$ and the sign of $g$ is the same on both sides. The factor $x$ appears to an odd power, so it is negative on the left of $0$ and positive on the right, and the sign of $g$ changes across $x = 0$.` },
    ],
  }],
};

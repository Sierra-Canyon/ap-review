// AP Precalculus topic quiz 1.8: Rational Functions and Zeros.
import { graph } from "../../plot.js";

// q(x) = (x^2 - 4) / (x^2 - 2x - 3) = (x - 2)(x + 2) / ((x - 3)(x + 1)). Items m03 and m04 read this graph.
const q = (x) => (x * x - 4) / (x * x - 2 * x - 3);

export const sets = {
  "p108-s1": {
    name: "The graph of q",
    label: "Graph",
    intro: String.raw`The graph of the rational function $q$ is shown below. The dashed lines $x = -1$, $x = 3$, and $y = 1$ are asymptotes of the graph. The graph crosses the $x$-axis only at $x = -2$ and $x = 2$.`,
    sources: [{ title: "", blocks: [{ svg: graph({
      x: [-6, 7], y: [-6, 6], step: { x: 1, y: 2 }, xname: "x", yname: "y",
      fns: [{ f: q, from: -6, to: -1.03 }, { f: q, from: -0.97, to: 2.97 }, { f: q, from: 3.03, to: 7 }],
      vlines: [{ x: -1 }, { x: 3 }], hlines: [{ y: 1 }],
      dots: [[-2, 0, "closed"], [2, 0, "closed"]],
      alt: "Graph of q with dashed asymptotes x = -1, x = 3, and y = 1. On the left, the curve comes in just below y = 1, falls to cross the x-axis at x = -2, and drops toward negative infinity as x approaches -1 from the left. Between the vertical asymptotes, the curve comes down from positive infinity just right of x = -1, passes through (0, 4/3), crosses the x-axis at x = 2, and drops toward negative infinity as x approaches 3 from the left. On the right, the curve comes down from positive infinity just right of x = 3 and levels off toward y = 1.",
    }) }] }],
  },
  "p108-s2": {
    name: "A rational function with a shared factor",
    label: "Free response",
    intro: String.raw`Let $r$ be the function given by $$r(x) = \dfrac{x^{3} + 2x^{2} - 8x}{x^{2} + 5x + 4}.$$`,
    sources: [{ title: "", blocks: [{ p: String.raw`No calculator is allowed. Show the work that leads to each answer.` }] }],
  },
};

export default {
  forms: [{
    id: "p108",
    name: "Topic 1.8 Quiz: Rational Functions and Zeros",
    group: "Unit 1: Polynomial and Rational Functions",
    items: [
      { id: "p108-m01", type: "mcq", skill: "u1", topic: "1.8", calc: false, difficulty: "easy",
        question: String.raw`Let $r(x) = \dfrac{x^{2} - 9}{x^{2} + 4x}$. What are all the real zeros of $r$?`,
        choices: [String.raw`$x = -3$ and $x = 3$`, String.raw`$x = -4$ and $x = 0$`, String.raw`$x = 3$ only`, String.raw`$x = -3$, $x = 0$, and $x = 3$`],
        why: [
          String.raw`The real zeros of a rational function are the zeros of the numerator that are in its domain. $x^{2} - 9 = (x + 3)(x - 3)$ is $0$ at $x = -3$ and $x = 3$. The denominator $x(x + 4)$ is not $0$ at either value, so both are zeros of $r$.`,
          String.raw`$-4$ and $0$ make the denominator $x^{2} + 4x$ equal $0$, so $r$ is undefined there. They give vertical asymptotes, not zeros.`,
          String.raw`$x^{2} = 9$ has two solutions. $x = -3$ also makes the numerator $0$, and it is in the domain of $r$.`,
          String.raw`$x = 0$ is a zero of the denominator, so $r(0)$ is undefined and $0$ cannot be a zero of $r$.`,
        ], answer: 0 },
      { id: "p108-m02", type: "mcq", skill: "u1", topic: "1.8", calc: false, difficulty: "difficult",
        question: String.raw`Let $g(x) = \dfrac{(x - 1)^{2}(x + 3)}{x - 4}$. What is the solution set of $g(x) < 0$?`,
        choices: [String.raw`$(-3, 1) \cup (1, 4)$`, String.raw`$(-3, 4)$`, String.raw`$(-\infty, -3) \cup (4, \infty)$`, String.raw`$(-\infty, -3) \cup (1, 4)$`],
        why: [
          String.raw`$g$ is $0$ at $x = -3$ and $x = 1$ and undefined at $x = 4$. Test a value in each interval: $g(-4) = \dfrac{(25)(-1)}{-8} > 0$, $g(0) = \dfrac{(1)(3)}{-4} < 0$, $g(2) = \dfrac{(1)(5)}{-2} < 0$, and $g(5) = \dfrac{(16)(8)}{1} > 0$. The factor $(x - 1)^{2}$ has even multiplicity, so $g$ does not change sign at $x = 1$, but $g(1) = 0$, so $x = 1$ is not in the solution set.`,
          String.raw`This includes $x = 1$, where $g(1) = 0$. The inequality is strict, so $x = 1$ must be left out.`,
          String.raw`These are the intervals where $g(x) > 0$, the complement of the solution.`,
          String.raw`This assumes the sign changes at every zero. The factor $(x - 1)^{2}$ is never negative, so $g$ keeps the same sign on both sides of $x = 1$. For example, $g(-4) = \frac{25}{8} > 0$.`,
        ], answer: 0 },
      { id: "p108-m03", type: "mcq", skill: "u1", topic: "1.8", calc: false, set: "p108-s1", difficulty: "easy",
        question: String.raw`What is the solution set of $q(x) < 0$?`,
        choices: [String.raw`$(-2, -1) \cup (2, 3)$`, String.raw`$[-2, -1) \cup [2, 3)$`, String.raw`$(-\infty, -2) \cup (-1, 2) \cup (3, \infty)$`, String.raw`$(-2, 3)$`],
        why: [
          String.raw`The graph is below the $x$-axis from the zero at $x = -2$ to the asymptote $x = -1$, and from the zero at $x = 2$ to the asymptote $x = 3$. The zeros are left out because $q(x) = 0$ there, and $-1$ and $3$ are left out because $q$ is undefined there.`,
          String.raw`This includes $x = -2$ and $x = 2$, where $q(x) = 0$. That is the solution set of $q(x) \le 0$.`,
          String.raw`These are the intervals where $q(x) > 0$, the parts of the graph above the $x$-axis.`,
          String.raw`This merges the intervals across $x = -1$ and includes $x = 2$. Between $x = -1$ and $x = 2$ the graph is above the $x$-axis.`,
        ], answer: 0 },
      { id: "p108-m04", type: "mcq", skill: "u1", topic: "1.8", calc: false, set: "p108-s1", difficulty: "easy",
        question: String.raw`Which of the following could define $q$?`,
        choices: [String.raw`$q(x) = \frac{x^{2} - 4}{x^{2} - 2x - 3}$`, String.raw`$q(x) = \frac{x^{2} - 2x - 3}{x^{2} - 4}$`, String.raw`$q(x) = \frac{x^{2} - 4}{x^{2} + 2x - 3}$`, String.raw`$q(x) = \frac{(x^{2} - 4)(x + 1)}{x^{2} - 2x - 3}$`],
        why: [
          String.raw`$\dfrac{(x - 2)(x + 2)}{(x - 3)(x + 1)}$ has zeros at $x = \pm 2$, vertical asymptotes at $x = 3$ and $x = -1$, and the horizontal asymptote $y = 1$, the ratio of the leading coefficients. This matches the graph.`,
          String.raw`This swaps the numerator and denominator. Its zeros are $x = 3$ and $x = -1$, and its vertical asymptotes are $x = \pm 2$.`,
          String.raw`$x^{2} + 2x - 3 = (x + 3)(x - 1)$, so the vertical asymptotes would be $x = -3$ and $x = 1$.`,
          String.raw`The factor $x + 1$ cancels, so the graph would have a hole at $x = -1$, not an asymptote. With a cubic over a quadratic, it would also have no horizontal asymptote.`,
        ], answer: 0 },
      { id: "p108-m05", type: "mcq", skill: "u1", topic: "1.8", calc: false, difficulty: "difficult",
        stem: String.raw`A pitcher holds $20$ cups of a drink, of which $2$ cups are juice. Cups of pure juice are added to the pitcher. After $n$ cups of juice are added, the fraction of the drink that is juice is $J(n) = \dfrac{2 + n}{20 + n}$.`,
        question: String.raw`What is the least whole number of cups of juice that must be added for the drink to be at least $30\%$ juice?`,
        choices: ["$6$", "$5$", "$4$", "$14$"],
        why: [
          String.raw`Solve $\dfrac{2 + n}{20 + n} \ge 0.3$. Since $20 + n > 0$, multiply both sides by it: $2 + n \ge 6 + 0.3n$, so $0.7n \ge 4$ and $n \ge \frac{40}{7} \approx 5.7$. The least whole number is $6$. Check: $J(6) = \frac{8}{26} \approx 0.308$ and $J(5) = \frac{7}{25} = 0.28$.`,
          String.raw`$5$ rounds $\frac{40}{7} \approx 5.7$ down. Then $J(5) = \frac{7}{25} = 0.28$, which is less than $30\%$.`,
          String.raw`$4$ solves $\dfrac{2 + n}{20} \ge 0.3$, which keeps the total at $20$ cups. Each added cup of juice also adds a cup to the drink, so the denominator is $20 + n$.`,
          String.raw`$14$ divides $4$ by $0.3$. After $0.3n$ is subtracted from both sides, the coefficient of $n$ is $1 - 0.3 = 0.7$, so $n \ge \frac{4}{0.7}$.`,
        ], answer: 0 },
      { id: "p108-m06", type: "mcq", skill: "u1", topic: "1.8", calc: false, difficulty: "moderate",
        question: String.raw`For which of the following functions is $x = 2$ a zero?

I. $f(x) = \dfrac{x^{2} - 4}{x + 2}$
II. $g(x) = \dfrac{(x - 2)^{2}}{x^{2} - 4}$
III. $h(x) = \dfrac{x^{2} - 2x}{x^{2} + 4}$`,
        choices: ["I and III only", "I, II, and III", "I only", "III only"],
        why: [
          String.raw`I: the numerator is $0$ at $x = 2$ and the denominator is $4$, so $f(2) = 0$. II: the denominator $x^{2} - 4$ is $0$ at $x = 2$, so $g(2)$ is undefined and $2$ is not a zero, even though the numerator is $0$ there. III: $h(2) = \dfrac{4 - 4}{8} = 0$.`,
          String.raw`II is not true. $x = 2$ is not in the domain of $g$ because $x^{2} - 4 = 0$ there. After one factor of $x - 2$ cancels, the graph has a hole at $x = 2$.`,
          String.raw`III is also true: $x^{2} - 2x = x(x - 2)$ is $0$ at $x = 2$, and $x^{2} + 4$ is never $0$.`,
          String.raw`I is also true. $x + 2$ is $0$ only at $x = -2$, so $f(2) = \frac{0}{4} = 0$.`,
        ], answer: 0 },
      { id: "p108-f1a", type: "frq", skill: "u1", topic: "1.8", calc: false, set: "p108-s2", part: "(a)",
        prompt: String.raw`Find all real zeros of $r$. Explain why $x = -4$ is not a zero of $r$, even though the numerator of $r$ is $0$ at $x = -4$.`,
        rows: [
          { name: "Zeros", earns: String.raw`$x = 0$ and $x = 2$, from the factored numerator $x(x + 4)(x - 2)$.` },
          { name: "Reason", earns: String.raw`$x = -4$ also makes the denominator $(x + 4)(x + 1)$ equal $0$, so $-4$ is not in the domain of $r$ and $r(-4)$ is undefined.` },
        ],
        solution: String.raw`The numerator is $x^{3} + 2x^{2} - 8x = x(x^{2} + 2x - 8) = x(x + 4)(x - 2)$, and the denominator is $(x + 4)(x + 1)$. The numerator is $0$ at $x = 0$, $x = -4$, and $x = 2$. A zero of $r$ must be in the domain of $r$. The denominator is $0$ at $x = -4$, so $r(-4)$ is undefined and the graph has a hole there. The real zeros are $x = 0$ and $x = 2$.` },
      { id: "p108-f1b", type: "frq", skill: "u1", topic: "1.8", calc: false, set: "p108-s2", part: "(b)",
        prompt: String.raw`Solve $r(x) < 0$. Show the analysis that leads to your answer.`,
        rows: [
          { name: "Sign analysis", earns: String.raw`Uses the zeros $0$ and $2$ and the values $-4$ and $-1$ where $r$ is undefined to split the number line, and finds the sign of $r$ on each interval (test values or a sign chart).` },
          { name: "Answer", earns: String.raw`$(-\infty, -4) \cup (-4, -1) \cup (0, 2)$, with $x = -4$ excluded.` },
        ],
        solution: String.raw`For $x \ne -4$, $r(x) = \dfrac{x(x - 2)}{x + 1}$. The values $x = -4$, $x = -1$, $x = 0$, and $x = 2$ split the number line. Test values: $r(-5) = \dfrac{(-5)(-7)}{-4} = -\dfrac{35}{4} < 0$; $r(-2) = \dfrac{(-2)(-4)}{-1} = -8 < 0$; $r\left(-\frac{1}{2}\right) = \dfrac{\left(-\frac{1}{2}\right)\left(-\frac{5}{2}\right)}{\frac{1}{2}} = \dfrac{5}{2} > 0$; $r(1) = \dfrac{(1)(-1)}{2} = -\dfrac{1}{2} < 0$; $r(3) = \dfrac{(3)(1)}{4} = \dfrac{3}{4} > 0$. So $r(x) < 0$ on $(-\infty, -4) \cup (-4, -1) \cup (0, 2)$. The value $x = -4$ is left out because $r$ is undefined there, and $0$ and $2$ are left out because $r$ equals $0$ there.` },
    ],
  }],
};

// AP Precalculus topic quiz, 1.5 Polynomial Functions and Complex Zeros.
import { graph } from "../../plot.js";

// g(x) = 0.25(x + 3)(x - 1)(x^2 - 2x + 3): degree 4, real zeros -3 and 1, two non-real zeros 1 +/- i*sqrt(2).
const gE = (x) => 0.25 * (x + 3) * (x - 1) * (x * x - 2 * x + 3);

export const sets = {
  "p105-s1": {
    name: "A quartic with two x-intercepts",
    label: "Graph",
    intro: String.raw`The graph of the polynomial function $g$, of degree $4$, is shown below. The graph crosses the $x$-axis at $x = -3$ and $x = 1$ and has no other points on the $x$-axis.`,
    sources: [{ title: "", blocks: [{ svg: graph({
      x: [-4, 3], y: [-8, 8], step: { x: 1, y: 2 }, xname: "x", yname: "y",
      fns: [{ f: gE, from: -4, to: 3, label: "g", labelAt: 2.3 }],
      dots: [[-3, 0, "closed"], [1, 0, "closed"]],
      alt: "Graph of the quartic g. It comes down from the upper left, crosses the x-axis at x = -3, reaches a low point near (-1.6, -6.3), rises through (0, -2.25), crosses the x-axis at x = 1, and continues up toward the upper right.",
    }) }] }],
  },
  "p105-s2": {
    name: "A cubic with non-real zeros",
    label: "Free response",
    intro: String.raw`Let $p(x) = x^{3} - 2x^{2} + 4x - 8$.`,
    sources: [{ title: "", blocks: [{ p: String.raw`A calculator is not allowed on this question.` }] }],
  },
};

export default {
  forms: [{
    id: "p105",
    name: "Topic 1.5 Quiz: Polynomial Functions and Complex Zeros",
    group: "Unit 1: Polynomial and Rational Functions",
    items: [
      { id: "p105-m01", type: "mcq", skill: "u1", topic: "1.5", calc: false, difficulty: "easy",
        question: String.raw`A polynomial function with real coefficients has zeros at $x = 3$ and $x = 2 - 5i$. Which of the following must also be a zero?`,
        choices: [String.raw`$2 + 5i$`, String.raw`$-2 + 5i$`, String.raw`$-2 - 5i$`, String.raw`$\frac{1}{2 - 5i}$`],
        why: [
          String.raw`Non-real zeros of a polynomial with real coefficients come in conjugate pairs. The conjugate of $2 - 5i$ is $2 + 5i$.`,
          String.raw`$-2 + 5i$ is the opposite of $2 - 5i$, not its conjugate. The conjugate keeps the real part and changes the sign of the imaginary part.`,
          String.raw`$-2 - 5i$ changes the sign of the real part. The conjugate of $a + bi$ is $a - bi$, with the same real part.`,
          String.raw`$\dfrac{1}{2 - 5i}$ is the reciprocal of $2 - 5i$, not its conjugate. The conjugate of $a + bi$ is $a - bi$.`,
        ], answer: 0 },
      { id: "p105-m02", type: "mcq", skill: "u1", topic: "1.5", calc: false, difficulty: "moderate", set: "p105-s1",
        question: String.raw`How many non-real zeros does $g$ have?`,
        choices: ["$2$", "$0$", "$4$", "$1$"],
        why: [
          String.raw`A polynomial of degree $4$ has $4$ zeros counted with multiplicity. The graph crosses the axis at only $x = -3$ and $x = 1$, and it crosses without flattening, so each has multiplicity $1$. That leaves $4 - 2 = 2$ non-real zeros.`,
          String.raw`The graph shows only the real zeros. A degree $4$ polynomial has $4$ zeros in all, so $2$ are not visible on the graph.`,
          String.raw`$4$ is the total number of zeros, real and non-real. Two of them are the real zeros $-3$ and $1$.`,
          String.raw`Non-real zeros of a polynomial with real coefficients come in conjugate pairs, so their number is even.`,
        ], answer: 0 },
      { id: "p105-m03", type: "mcq", skill: "u1", topic: "1.5", calc: false, difficulty: "moderate",
        question: String.raw`Let $p(x) = (x^{2} + 4)(x + 1)(x - 3)^{2}$. For which values of $x$ is $p(x) < 0$?`,
        choices: [String.raw`$(-\infty, -1)$`, "$(-1, 3)$", String.raw`$(-\infty, -1) \cup (3, \infty)$`, String.raw`$(-1, 3) \cup (3, \infty)$`],
        why: [
          String.raw`$x^{2} + 4 > 0$ for every $x$, and $(x - 3)^{2} > 0$ for $x \ne 3$. So $p(x) < 0$ exactly when $x + 1 < 0$, which is $x < -1$.`,
          String.raw`On $(-1, 3)$ every factor is positive except $(x - 3)^{2}$, which is also positive, so $p(x) > 0$ there.`,
          String.raw`This assumes the sign changes at $x = 3$. The factor $(x - 3)^{2}$ has even multiplicity, so $p$ keeps the same sign on both sides of $x = 3$.`,
          String.raw`This is where $p(x) > 0$, the complement of the solution.`,
        ], answer: 0 },
      { id: "p105-m04", type: "mcq", skill: "u1", topic: "1.5", calc: false, difficulty: "moderate",
        question: String.raw`Let $p(x) = (x^{2} - 4)(x^{2} + 4)(x - 2)$. How many distinct zeros, real and non-real, does $p$ have?`,
        choices: ["$4$", "$5$", "$2$", "$3$"],
        why: [
          String.raw`$x^{2} - 4 = 0$ gives $x = 2$ and $x = -2$, $x^{2} + 4 = 0$ gives $x = 2i$ and $x = -2i$, and $x - 2 = 0$ gives $x = 2$ again. The distinct zeros are $2$, $-2$, $2i$, and $-2i$: four.`,
          String.raw`$5$ is the degree, which counts $x = 2$ twice, once for each factor that contains it. Distinct zeros count it once.`,
          String.raw`$2$ counts only the real zeros, $2$ and $-2$. The question includes non-real zeros.`,
          String.raw`$3$ counts the real zeros with multiplicity, $2$, $2$, and $-2$, and leaves out the non-real zeros.`,
        ], answer: 0 },
      { id: "p105-m05", type: "mcq", skill: "u1", topic: "1.5", calc: false, difficulty: "easy",
        question: String.raw`Which polynomial function of least degree with real coefficients and leading coefficient $1$ has zeros at $x = -1$ and $x = 3i$?`,
        choices: [String.raw`$x^{3} + x^{2} + 9x + 9$`, String.raw`$x^{3} + x^{2} - 9x - 9$`, String.raw`$x^{3} - x^{2} + 9x - 9$`, String.raw`$x^{2} + (1 - 3i)x - 3i$`],
        why: [
          String.raw`With real coefficients, $-3i$ is also a zero. Then $(x - 3i)(x + 3i) = x^{2} + 9$, and $(x + 1)(x^{2} + 9) = x^{3} + x^{2} + 9x + 9$.`,
          String.raw`This is $(x + 1)(x^{2} - 9)$, which uses $(3i)^{2} = 9$. In fact $(3i)^{2} = -9$, so the quadratic factor is $x^{2} + 9$.`,
          String.raw`This is $(x - 1)(x^{2} + 9)$, which has a zero at $x = 1$. A zero at $x = -1$ gives the factor $x + 1$.`,
          String.raw`This is $(x + 1)(x - 3i)$, which leaves out the conjugate $-3i$. Its coefficients are not all real.`,
        ], answer: 0 },
      { id: "p105-m06", type: "mcq", skill: "u1", topic: "1.5", calc: false, difficulty: "difficult",
        question: String.raw`A polynomial function $p$ of degree $5$ with real coefficients has exactly three distinct real zeros: $-2$, $0$, and $4$. Which of the following could be true? $$\begin{aligned} &\text{I. } p \text{ has exactly two non-real zeros.} \\ &\text{II. } x = 0 \text{ is a zero of multiplicity } 3. \\ &\text{III. } x = 4 \text{ is a zero of multiplicity } 2, \text{ and } p \text{ has two non-real zeros.} \end{aligned}$$`,
        choices: ["I and II only", "I and III only", "II and III only", "I, II, and III"],
        why: [
          String.raw`The multiplicities of all zeros add to $5$. I: three simple real zeros plus a conjugate pair gives $3 + 2 = 5$, possible. II: $0$ with multiplicity $3$ plus $-2$ and $4$ gives $3 + 1 + 1 = 5$, possible. III: $2 + 1 + 1 = 4$ for the real zeros plus $2$ non-real zeros gives $6$, more than $5$.`,
          String.raw`III is not possible, since its multiplicities add to $6$. II is possible: $x^{3}(x + 2)(x - 4)$ has degree $5$ and exactly the three real zeros $-2$, $0$, and $4$.`,
          String.raw`III is not possible, since its multiplicities add to $6$. I is possible: $x(x + 2)(x - 4)(x^{2} + 1)$ has degree $5$, three real zeros, and two non-real zeros.`,
          String.raw`III is not possible. Its multiplicities add to $2 + 1 + 1 + 2 = 6$, more than the degree $5$.`,
        ], answer: 0 },
      { id: "p105-f1a", type: "frq", skill: "u1", topic: "1.5", calc: false, set: "p105-s2", part: "(a)",
        prompt: String.raw`(i) Show that $x - 2$ is a factor of $p(x)$. (ii) Find all zeros of $p$, real and non-real.`,
        rows: [
          { name: "Factor", earns: String.raw`$p(2) = 8 - 8 + 8 - 8 = 0$, so $x - 2$ is a factor.` },
          { name: "All zeros", earns: String.raw`$p(x) = (x - 2)(x^{2} + 4)$, so the zeros are $2$, $2i$, and $-2i$.` },
        ],
        solution: String.raw`(i) $p(2) = 2^{3} - 2(2)^{2} + 4(2) - 8 = 0$. Since $2$ is a zero of $p$, $x - 2$ is a factor of $p(x)$. (ii) Grouping, $p(x) = x^{2}(x - 2) + 4(x - 2) = (x - 2)(x^{2} + 4)$. Then $x^{2} + 4 = 0$ gives $x = \pm 2i$. The zeros are $2$, $2i$, and $-2i$.` },
      { id: "p105-f1b", type: "frq", skill: "u1", topic: "1.5", calc: false, set: "p105-s2", part: "(b)",
        prompt: String.raw`Find all values of $x$ for which $p(x) \le 0$. Give a reason for your answer.`,
        rows: [{ name: "Solution with reason", earns: String.raw`$x \le 2$, because $x^{2} + 4 > 0$ for all real $x$, so $p(x)$ has the same sign as $x - 2$.` }],
        solution: String.raw`$p(x) = (x - 2)(x^{2} + 4)$ and $x^{2} + 4 > 0$ for every real $x$, so $p(x) \le 0$ exactly when $x - 2 \le 0$. The solution is $x \le 2$, or $(-\infty, 2]$.` },
      { id: "p105-f1c", type: "frq", skill: "u1", topic: "1.5", calc: false, set: "p105-s2", part: "(c)",
        prompt: String.raw`Let $q(x) = (x - 2)\,p(x)$. Does the graph of $q$ cross the $x$-axis at $x = 2$, or touch it without crossing? Give a reason for your answer.`,
        rows: [{ name: "Answer with reason", earns: String.raw`It touches without crossing, because $q(x) = (x - 2)^{2}(x^{2} + 4)$, so $x = 2$ is a zero of even multiplicity $2$.` }],
        solution: String.raw`$q(x) = (x - 2)^{2}(x^{2} + 4)$, so $x = 2$ is a zero of multiplicity $2$. Since $(x - 2)^{2} \ge 0$ and $x^{2} + 4 > 0$, $q(x) \ge 0$ on both sides of $x = 2$. The graph touches the $x$-axis at $x = 2$ without crossing.` },
    ],
  }],
};

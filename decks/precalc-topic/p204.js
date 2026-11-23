// AP Precalculus topic quiz, Topic 2.4: Exponential Function Manipulation.
import { graph } from "../../plot.js";

export const sets = {
  "p204-s1": {
    name: "Values of an exponential function",
    label: "Table",
    intro: String.raw`The table gives values of the exponential function $f$ for selected values of $x$.`,
    sources: [{ title: "", blocks: [{ table: { head: ["$x$", "$0$", "$1$", "$2$", "$3$"], rows: [["$f(x)$", "$3$", "$12$", "$48$", "$192$"]] } }] }],
  },
  "p204-s2": {
    name: "The graph of h",
    label: "Graph",
    intro: String.raw`The graph of the exponential function $h$ is shown. The points $(-1, 8)$, $(0, 4)$, $(1, 2)$, and $(2, 1)$ are on the graph.`,
    sources: [{ title: "", blocks: [{ svg: graph({
      x: [-2, 5], y: [-1, 10], step: 1, labelEvery: 2, xname: "x", yname: "y",
      fns: [{ f: (x) => 4 * 2 ** -x, from: -1.3, to: 5 }],
      dots: [[-1, 8, "closed"], [0, 4, "closed"], [1, 2, "closed"], [2, 1, "closed"]],
      alt: "A decreasing curve above the x-axis that falls steeply on the left and levels off toward the x-axis on the right. Marked points: (-1, 8), (0, 4), (1, 2), and (2, 1).",
    }) }] }],
  },
  "p204-s3": {
    name: "Rewriting exponential expressions",
    label: "Free response",
    intro: String.raw`Answer each part without a calculator. Give exact answers, and show the work that leads to each answer.`,
    sources: [],
  },
};

export default {
  forms: [{
    id: "p204",
    name: "Topic 2.4 Quiz: Exponential Function Manipulation",
    group: "Unit 2: Exponential and Logarithmic Functions",
    items: [
      { id: "p204-m01", type: "mcq", skill: "u2", topic: "2.4", calc: false, difficulty: "easy",
        question: String.raw`Which of the following is equivalent to $\left(\dfrac{1}{27}\right)^{-\frac{x}{3}}$?`,
        choices: [String.raw`$3^{x}$`, String.raw`$\left(\frac{1}{3}\right)^{x}$`, String.raw`$9^{x}$`, String.raw`$27^{x}$`],
        why: [
          String.raw`A negative exponent takes the reciprocal: $\left(\frac{1}{27}\right)^{-\frac{x}{3}} = 27^{\frac{x}{3}} = \left(27^{\frac{1}{3}}\right)^{x} = 3^{x}$.`,
          String.raw`$\left(\frac{1}{3}\right)^{x}$ takes the cube root but drops the negative sign in the exponent, which turns $\frac{1}{27}$ into $27$.`,
          String.raw`$9^{x}$ divides $27$ by $3$. An exponent of $\frac{1}{3}$ is a cube root: $27^{\frac{1}{3}} = 3$.`,
          String.raw`$27^{x}$ handles the negative sign but ignores the division of the exponent by $3$.`,
        ], answer: 0 },
      { id: "p204-m02", type: "mcq", skill: "u2", topic: "2.4", calc: false, difficulty: "easy",
        question: String.raw`Which of the following is equivalent to $\dfrac{6^{x + 2}}{6^{x - 1}}$?`,
        choices: ["$216$", "$6$", "$36$", String.raw`$6^{2x + 1}$`],
        why: [
          String.raw`Dividing powers of the same base subtracts exponents: $6^{(x + 2) - (x - 1)} = 6^{3} = 216$.`,
          String.raw`$6 = 6^{1}$ comes from $(x + 2) - (x + 1)$. The subtraction must change the sign of $-1$ as well: $2 - (-1) = 3$.`,
          String.raw`$36 = 6^{2}$ uses only the numerator's exponent. The denominator's $6^{x - 1}$ contributes $+1$ after subtracting.`,
          String.raw`$6^{2x + 1}$ adds the exponents, which is the rule for multiplying powers, not dividing them.`,
        ], answer: 0 },
      { id: "p204-m03", type: "mcq", skill: "u2", topic: "2.4", calc: false, difficulty: "moderate", set: "p204-s1",
        question: String.raw`Which expression is equivalent to $f(x)$ for all real $x$?`,
        choices: [String.raw`$3 \cdot 2^{2x}$`, String.raw`$6^{2x}$`, String.raw`$3 \cdot 4^{2x}$`, String.raw`$3 \cdot 2^{x + 2}$`],
        why: [
          String.raw`$f(0) = 3$ and each value is $4$ times the one before, so $f(x) = 3 \cdot 4^{x} = 3\left(2^{2}\right)^{x} = 3 \cdot 2^{2x}$.`,
          String.raw`$6^{2x}$ multiplies the coefficient into the base. $3 \cdot 2^{2x}$ is not $(3 \cdot 2)^{2x}$, and $6^{0} = 1$, not $3$.`,
          String.raw`$3 \cdot 4^{2x}$ doubles the exponent of a base that is already $4$: it gives $f(1) = 48$, not $12$.`,
          String.raw`$3 \cdot 2^{x + 2}$ gives $f(0) = 12$ and multiplies by only $2$ each step.`,
        ], answer: 0 },
      { id: "p204-m04", type: "mcq", skill: "u2", topic: "2.4", calc: false, difficulty: "moderate",
        question: String.raw`What value of $x$ satisfies $9^{x} = \left(\dfrac{1}{3}\right)^{x - 6}$?`,
        choices: ["$2$", "$-6$", "$3$", "$-2$"],
        why: [
          String.raw`Write both sides as powers of $3$: $3^{2x} = 3^{-(x - 6)} = 3^{6 - x}$. So $2x = 6 - x$, $3x = 6$, and $x = 2$.`,
          String.raw`$-6$ comes from $2x = x - 6$, which drops the negative exponent that turns $\frac{1}{3}$ into $3^{-1}$.`,
          String.raw`$3$ comes from $x = 6 - x$, which writes $9^{x}$ as $3^{x}$. Since $9 = 3^{2}$, $9^{x} = 3^{2x}$.`,
          String.raw`$-2$ comes from $2x = -x - 6$, which applies the negative sign to $x$ only. $-(x - 6) = 6 - x$.`,
        ], answer: 0 },
      { id: "p204-m05", type: "mcq", skill: "u2", topic: "2.4", calc: false, difficulty: "difficult",
        question: String.raw`Which of the following is equivalent to $27^{\frac{2x - 1}{3}}$?`,
        choices: [String.raw`$\frac{1}{3} \cdot 9^{x}$`, String.raw`$-3 \cdot 9^{x}$`, String.raw`$9^{x} - \frac{1}{3}$`, String.raw`$\frac{1}{9} \cdot 9^{x}$`],
        why: [
          String.raw`$27^{\frac{2x - 1}{3}} = 27^{\frac{2x}{3}} \cdot 27^{-\frac{1}{3}} = \left(27^{\frac{2}{3}}\right)^{x} \cdot \dfrac{1}{3} = \dfrac{1}{3} \cdot 9^{x}$.`,
          String.raw`$-3$ reads $27^{-\frac{1}{3}}$ as a negative number. A negative exponent gives a reciprocal: $27^{-\frac{1}{3}} = \dfrac{1}{3}$.`,
          String.raw`$9^{x} - \frac{1}{3}$ subtracts the factor instead of multiplying. $b^{m - n} = b^{m} \cdot b^{-n}$, a product.`,
          String.raw`$\frac{1}{9} \cdot 9^{x} = 9^{x - 1} = 27^{\frac{2x - 2}{3}}$, which multiplies the whole numerator by $2$. Only $x$ is doubled in $2x - 1$.`,
        ], answer: 0 },
      { id: "p204-m06", type: "mcq", skill: "u2", topic: "2.4", calc: false, difficulty: "easy", set: "p204-s2",
        question: String.raw`Which of the following is equivalent to $h(x)$?`,
        choices: [String.raw`$2^{2 - x}$`, String.raw`$2^{x - 2}$`, String.raw`$8^{-x}$`, String.raw`$2^{-2x}$`],
        why: [
          String.raw`From the graph, $h(0) = 4$ and $h$ is halved each step, so $h(x) = 4\left(\frac{1}{2}\right)^{x} = 2^{2} \cdot 2^{-x} = 2^{2 - x}$.`,
          String.raw`$2^{x - 2}$ is increasing: it gives $\frac{1}{4}$ at $x = 0$, not $4$.`,
          String.raw`$8^{-x}$ multiplies the coefficient $4$ into the base $2$. It gives $1$ at $x = 0$.`,
          String.raw`$2^{-2x} = 4^{-x}$ also gives $1$ at $x = 0$ and divides by $4$ each step instead of by $2$.`,
        ], answer: 0 },
      { id: "p204-f1a", type: "frq", skill: "u2", topic: "2.4", calc: false, set: "p204-s3", part: "(a)",
        prompt: String.raw`Rewrite $\dfrac{16^{x}}{2^{x + 3}}$ in the form $a \cdot b^{x}$, where $a$ and $b$ are constants.`,
        rows: [{ name: "Rewritten form", earns: String.raw`$\dfrac{1}{8} \cdot 8^{x}$, with supporting work such as $\dfrac{2^{4x}}{2^{x + 3}} = 2^{3x - 3}$.` }],
        solution: String.raw`$16^{x} = 2^{4x}$, so $\dfrac{2^{4x}}{2^{x + 3}} = 2^{3x - 3} = 2^{3x} \cdot 2^{-3} = \dfrac{1}{8} \cdot 8^{x}$.` },
      { id: "p204-f1b", type: "frq", skill: "u2", topic: "2.4", calc: false, set: "p204-s3", part: "(b)",
        prompt: String.raw`Solve $\dfrac{16^{x}}{2^{x + 3}} = 32$ for $x$.`,
        rows: [{ name: "Solution", earns: String.raw`$x = \dfrac{8}{3}$, from $2^{3x - 3} = 2^{5}$ and $3x - 3 = 5$.` }],
        solution: String.raw`By part (a), the left side is $2^{3x - 3}$, and $32 = 2^{5}$. So $3x - 3 = 5$ and $x = \dfrac{8}{3}$.` },
      { id: "p204-f1c", type: "frq", skill: "u2", topic: "2.4", calc: false, set: "p204-s3", part: "(c)",
        prompt: String.raw`For $x > 0$, rewrite $\sqrt[3]{x^{2}} \cdot x^{-\frac{1}{2}}$ as a single power of $x$.`,
        rows: [{ name: "Single power", earns: String.raw`$x^{\frac{1}{6}}$, with supporting work $x^{\frac{2}{3}} \cdot x^{-\frac{1}{2}} = x^{\frac{2}{3} - \frac{1}{2}}$.` }],
        solution: String.raw`$\sqrt[3]{x^{2}} = x^{\frac{2}{3}}$, so the product is $x^{\frac{2}{3} - \frac{1}{2}} = x^{\frac{4}{6} - \frac{3}{6}} = x^{\frac{1}{6}}$.` },
    ],
  }],
};

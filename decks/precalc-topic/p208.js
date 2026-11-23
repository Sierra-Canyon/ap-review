// AP Precalculus topic quiz, 2.8 Inverse Functions.
import { graph } from "../../plot.js";

// f(x) = sqrt(x + 4) - 1 on [-4, 5]. Items p208-m01 and p208-m02.
const f1 = (x) => Math.sqrt(x + 4) - 1;

export const sets = {
  "p208-s1": {
    name: "A square root graph",
    label: "Graph",
    intro: String.raw`The graph of $f(x) = \sqrt{x + 4} - 1$ on its domain, $-4 \le x \le 5$, is shown below. The points $(-4, -1)$, $(-3, 0)$, $(0, 1)$, and $(5, 2)$ are on the graph.`,
    sources: [{ title: "", blocks: [{ svg: graph({
      x: [-5, 6], y: [-2, 3], step: 1, xname: "x", yname: "y",
      fns: [{ f: f1, from: -4, to: 5, label: "f", labelAt: 3 }],
      dots: [[-4, -1, "closed"], [-3, 0, "closed"], [0, 1, "closed"], [5, 2, "closed"]],
      alt: "Graph of f, an increasing curve that starts at the endpoint (-4, -1), rises steeply through (-3, 0), then rises more slowly through (0, 1) to the endpoint (5, 2).",
    }) }] }],
  },
  "p208-s2": {
    name: "A table of a decreasing function",
    label: "Table",
    intro: String.raw`The function $k$ is continuous and decreasing on the interval $-2 \le x \le 6$, and its domain is that interval. Selected values of $k$ are given in the table below.`,
    sources: [{ title: "", blocks: [{ table: { head: ["$x$", "$-2$", "$0$", "$1$", "$3$", "$6$"], rows: [["$k(x)$", "$7$", "$4$", "$1$", "$-2$", "$-5$"]] } }] }],
  },
  "p208-s3": {
    name: "A quadratic on a restricted domain",
    label: "Free response",
    intro: String.raw`The function $f$ is given by $f(x) = (x - 3)^{2} + 1$ for all real numbers $x$. The function $g$ is given by $g(x) = (x - 3)^{2} + 1$ for $x \ge 3$. Answer each part without a calculator, and show the work that leads to each answer.`,
    sources: [],
  },
};

export default {
  forms: [{
    id: "p208",
    name: "Topic 2.8 Quiz: Inverse Functions",
    group: "Unit 2: Exponential and Logarithmic Functions",
    items: [
      { id: "p208-m01", type: "mcq", skill: "u2", topic: "2.8", calc: false, difficulty: "easy", set: "p208-s1",
        question: String.raw`What is the value of $f^{-1}(2)$?`,
        choices: ["$5$", String.raw`$\sqrt{6} - 1$`, String.raw`$\frac{1}{2}$`, String.raw`$\frac{1}{\sqrt{6} - 1}$`],
        why: [
          String.raw`$f^{-1}(2)$ is the input where $f(x) = 2$. The graph passes through $(5, 2)$, and $\sqrt{5 + 4} - 1 = 2$, so $f^{-1}(2) = 5$.`,
          String.raw`$\sqrt{6} - 1$ is $f(2)$, the output at the input $2$. The inverse asks for the input that gives the output $2$.`,
          String.raw`$\frac{1}{2}$ is $2^{-1}$. In $f^{-1}(2)$ the $-1$ names the inverse function; it is not an exponent on $2$.`,
          String.raw`$\dfrac{1}{\sqrt{6} - 1}$ is $\dfrac{1}{f(2)}$, the reciprocal of a value of $f$. The notation $f^{-1}$ means the inverse function, not the reciprocal.`,
        ], answer: 0 },
      { id: "p208-m02", type: "mcq", skill: "u2", topic: "2.8", calc: false, difficulty: "moderate", set: "p208-s1",
        question: String.raw`What is the average rate of change of $f^{-1}$ over the interval $0 \le x \le 2$?`,
        choices: ["$4$", String.raw`$\frac{1}{4}$`, String.raw`$\frac{5}{2}$`, String.raw`$\frac{\sqrt{6} - 2}{2}$`],
        why: [
          String.raw`The points $(-3, 0)$ and $(5, 2)$ on $f$ give $f^{-1}(0) = -3$ and $f^{-1}(2) = 5$. So $\dfrac{f^{-1}(2) - f^{-1}(0)}{2 - 0} = \dfrac{5 - (-3)}{2} = 4$.`,
          String.raw`$\dfrac{1}{4}$ is $\dfrac{2 - 0}{5 - (-3)}$, the average rate of change of $f$ over $[-3, 5]$. For $f^{-1}$ the roles of input and output swap, so the fraction flips.`,
          String.raw`$\dfrac{5}{2}$ is $\dfrac{f^{-1}(2) - 0}{2 - 0}$, which takes $f^{-1}(0)$ to be $0$. The graph of $f$ crosses the $x$-axis at $(-3, 0)$, so $f^{-1}(0) = -3$.`,
          String.raw`$\dfrac{\sqrt{6} - 2}{2}$ is $\dfrac{f(2) - f(0)}{2 - 0}$, the average rate of change of $f$ over $[0, 2]$, not of $f^{-1}$.`,
        ], answer: 0 },
      { id: "p208-m03", type: "mcq", skill: "u2", topic: "2.8", calc: false, difficulty: "easy", set: "p208-s2",
        question: String.raw`What is the value of $k^{-1}(-2)$?`,
        choices: ["$3$", "$7$", String.raw`$-\frac{1}{2}$`, "$-3$"],
        why: [
          String.raw`$k^{-1}(-2)$ is the input where $k(x) = -2$. The table gives $k(3) = -2$, so $k^{-1}(-2) = 3$.`,
          String.raw`$7$ is $k(-2)$, the output at the input $-2$. The inverse runs the table backward: find $-2$ in the $k(x)$ row.`,
          String.raw`$-\frac{1}{2}$ is $\dfrac{1}{-2}$. The notation $k^{-1}$ means the inverse function, not the reciprocal.`,
          String.raw`$-3$ changes the sign of $3$. The inverse swaps the input and the output of $(3, -2)$; it does not reflect the point over an axis.`,
        ], answer: 0 },
      { id: "p208-m04", type: "mcq", skill: "u2", topic: "2.8", calc: false, difficulty: "difficult", set: "p208-s2",
        question: String.raw`Which of the following statements are true?

I. $k^{-1}(1) = 1$
II. $k^{-1}\left(k^{-1}(-2)\right) = -2$
III. $k^{-1}(0)$ is between $1$ and $3$.`,
        choices: ["I and III only", "I only", "I, II, and III", "III only"],
        why: [
          String.raw`I is true because $k(1) = 1$. II is false: $k^{-1}(-2) = 3$, and $k^{-1}(3)$ is the input where $k(x) = 3$. Since $k(0) = 4$ and $k(1) = 1$, that input is between $0$ and $1$, not $-2$. III is true: $k(1) = 1 > 0 > -2 = k(3)$, and $k$ is continuous and decreasing, so $k(x) = 0$ at exactly one $x$ between $1$ and $3$.`,
          String.raw`III is also true. $k$ is continuous and goes from $1$ at $x = 1$ down to $-2$ at $x = 3$, so it takes the value $0$ between them.`,
          String.raw`II is false. Applying $k^{-1}$ twice does not undo itself; $k$ composed with $k^{-1}$ does. Here $k^{-1}(k^{-1}(-2)) = k^{-1}(3)$, a number between $0$ and $1$.`,
          String.raw`I is also true. The table pairs the input $1$ with the output $1$, so $k^{-1}(1) = 1$.`,
        ], answer: 0 },
      { id: "p208-m05", type: "mcq", skill: "u2", topic: "2.8", calc: false, difficulty: "easy",
        question: String.raw`Which of the following functions, each defined for all real numbers, has an inverse function?`,
        choices: [String.raw`$f(x) = 2^{x} - 5$`, String.raw`$f(x) = (x - 1)^{2}$`, String.raw`$f(x) = |x| + 3$`, String.raw`$f(x) = x^{4} - x$`],
        why: [
          String.raw`$2^{x}$ is increasing, so $2^{x} - 5$ is increasing too. An increasing function never repeats an output, so it is one-to-one and has an inverse.`,
          String.raw`This function repeats outputs: $f(0) = 1$ and $f(2) = 1$. It is not one-to-one.`,
          String.raw`This function repeats outputs: $f(-1) = 4$ and $f(1) = 4$. It is not one-to-one.`,
          String.raw`This function repeats outputs: $f(0) = 0$ and $f(1) = 0$. It is not one-to-one.`,
        ], answer: 0 },
      { id: "p208-m06", type: "mcq", skill: "u2", topic: "2.8", calc: true, difficulty: "moderate",
        question: String.raw`The number of members of a climbing gym $t$ months after it opened is modeled by the increasing function $P(t) = 1200 + 85t^{1.2}$ for $t \ge 0$. Which of the following gives the value of $P^{-1}(2000)$, to the nearest thousandth, and its meaning?`,
        choices: [
          String.raw`$6.477$, the number of months after opening when the gym has $2{,}000$ members`,
          String.raw`$6.477$, the number of members the gym has $2{,}000$ months after opening`,
          String.raw`$14.737$, the number of months after opening when the gym has $2{,}000$ members`,
          String.raw`$14.737$, the number of members the gym has $2{,}000$ months after opening`,
        ],
        why: [
          String.raw`$P^{-1}(2000)$ is the time $t$ with $P(t) = 2000$. Then $85t^{1.2} = 800$, so $t = \left(\dfrac{800}{85}\right)^{1/1.2} \approx 6.477$. Its input is a number of members and its output is a number of months.`,
          String.raw`The value is right, but the meaning is reversed. $P$ takes months to members, so $P^{-1}$ takes members to months: $2{,}000$ is a number of members.`,
          String.raw`$14.737$ is $\left(\dfrac{800}{85}\right)^{1.2}$. To undo the power $1.2$, raise to the power $\dfrac{1}{1.2}$. Check: $P(14.737) \approx 3345$, not $2000$.`,
          String.raw`$14.737$ comes from raising to the power $1.2$ instead of $\dfrac{1}{1.2}$, and the meaning also reverses the roles of members and months.`,
        ], answer: 0 },
      { id: "p208-f1a", type: "frq", skill: "u2", topic: "2.8", calc: false, set: "p208-s3", part: "(a)",
        prompt: String.raw`Explain why $f$ does not have an inverse function.`,
        rows: [{ name: "Not one-to-one", earns: String.raw`Gives two inputs with the same output, such as $f(2) = f(4) = 2$, and concludes that $f$ is not one-to-one, so it has no inverse.` }],
        solution: String.raw`$f(2) = (-1)^{2} + 1 = 2$ and $f(4) = 1^{2} + 1 = 2$. Two different inputs give the same output, so $f$ is not one-to-one. An inverse would have to send $2$ back to both $2$ and $4$, so $f$ has no inverse function.` },
      { id: "p208-f1b", type: "frq", skill: "u2", topic: "2.8", calc: false, set: "p208-s3", part: "(b)",
        prompt: String.raw`The function $g$ is increasing, so it has an inverse. Find an expression for $g^{-1}(x)$.`,
        rows: [{ name: "Inverse", earns: String.raw`$g^{-1}(x) = 3 + \sqrt{x - 1}$, with supporting work that keeps the nonnegative square root.` }],
        solution: String.raw`Write $x = (y - 3)^{2} + 1$ with $y \ge 3$ and solve for $y$: $(y - 3)^{2} = x - 1$, so $y - 3 = \pm\sqrt{x - 1}$. Since $y \ge 3$, $y - 3 \ge 0$, so take the nonnegative root: $g^{-1}(x) = 3 + \sqrt{x - 1}$.` },
      { id: "p208-f1c", type: "frq", skill: "u2", topic: "2.8", calc: false, set: "p208-s3", part: "(c)",
        prompt: String.raw`(i) Give the domain and the range of $g^{-1}$.

(ii) Find the value of $g^{-1}(10)$.`,
        rows: [
          { name: "Domain and range", earns: String.raw`Domain $x \ge 1$ and range $y \ge 3$, the range and the domain of $g$ swapped.` },
          { name: "Inverse value", earns: String.raw`$g^{-1}(10) = 6$, with supporting work.` },
        ],
        solution: String.raw`(i) The domain of $g$ is $x \ge 3$. Since $(x - 3)^{2} \ge 0$ and $g$ increases without bound, the range of $g$ is $y \ge 1$. The inverse swaps them: the domain of $g^{-1}$ is $x \ge 1$ and its range is $y \ge 3$.

(ii) $g^{-1}(10) = 3 + \sqrt{10 - 1} = 3 + 3 = 6$. Check: $g(6) = 3^{2} + 1 = 10$.` },
    ],
  }],
};

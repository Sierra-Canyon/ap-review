// AP Precalculus topic quiz, 2.11 Logarithmic Functions.
import { graph } from "../../plot.js";

// f(x) = 2 - log_2(x - 1), vertical asymptote x = 1. Items p211-m01 and p211-m02.
const f1 = (x) => 2 - Math.log2(x - 1);

export const sets = {
  "p211-s1": {
    name: "A reflected logarithmic graph",
    label: "Graph",
    intro: String.raw`The graph of the logarithmic function $f$ is shown below. The line $x = 1$ (dashed) is a vertical asymptote, and the points $(2, 2)$, $(3, 1)$, $(5, 0)$, and $(9, -1)$ are on the graph.`,
    sources: [{ title: "", blocks: [{ svg: graph({
      x: [-1, 11], y: [-3, 5], step: 1, xname: "x", yname: "y",
      fns: [{ f: f1, from: 1.0005, to: 11, label: "f", labelAt: 7 }],
      vlines: [{ x: 1 }],
      dots: [[2, 2, "closed"], [3, 1, "closed"], [5, 0, "closed"], [9, -1, "closed"]],
      alt: "Graph of f, a decreasing curve to the right of the dashed vertical asymptote x = 1. It comes down from very high values near the asymptote, passes through (2, 2), (3, 1), (5, 0), and (9, -1), and keeps falling more and more slowly to the right.",
    }) }] }],
  },
  "p211-s2": {
    name: "A transformed logarithmic function",
    label: "Free response",
    intro: String.raw`The function $k$ is given by $k(x) = 2\log_{3}(x - 2) + 1$. Answer each part without a calculator, and show the work that leads to each answer.`,
    sources: [],
  },
};

export default {
  forms: [{
    id: "p211",
    name: "Topic 2.11 Quiz: Logarithmic Functions",
    group: "Unit 2: Exponential and Logarithmic Functions",
    items: [
      { id: "p211-m01", type: "mcq", skill: "u2", topic: "2.11", calc: false, difficulty: "moderate", set: "p211-s1",
        question: String.raw`Which of the following could define $f$?`,
        choices: [String.raw`$f(x) = 2 - \log_{2}(x - 1)$`, String.raw`$f(x) = 2 + \log_{2}(x - 1)$`, String.raw`$f(x) = 2 - \log_{2}(x + 1)$`, String.raw`$f(x) = \log_{2}(x - 1) - 2$`],
        why: [
          String.raw`The argument $x - 1$ is $0$ at $x = 1$, the asymptote. Check the points: $2 - \log_{2} 1 = 2$, $2 - \log_{2} 2 = 1$, $2 - \log_{2} 4 = 0$, $2 - \log_{2} 8 = -1$. The minus sign makes $f$ decreasing.`,
          String.raw`$2 + \log_{2}(x - 1)$ is increasing, but the graph falls. At $x = 3$ it gives $3$, not $1$.`,
          String.raw`$\log_{2}(x + 1)$ has its asymptote at $x = -1$, not $x = 1$. At $x = 3$ this function gives $0$, not $1$.`,
          String.raw`$\log_{2}(x - 1) - 2$ is increasing and gives $-2$ at $x = 2$, not $2$.`,
        ], answer: 0 },
      { id: "p211-m02", type: "mcq", skill: "u2", topic: "2.11", calc: false, difficulty: "easy", set: "p211-s1",
        question: String.raw`Which statement about $f$ is true?`,
        choices: [
          String.raw`$f$ is decreasing, and its graph is concave up.`,
          String.raw`$f$ is decreasing, and its graph is concave down.`,
          String.raw`$f$ is increasing, and its graph is concave down.`,
          String.raw`$f$ is decreasing, and its graph has a horizontal asymptote.`,
        ],
        why: [
          String.raw`The outputs fall as $x$ increases, so $f$ is decreasing. Over equal steps the drops shrink: from $x = 3$ to $5$ the output falls $1$, and from $x = 5$ to $7$ it falls about $0.58$. The rate of change is negative and increasing, so the graph is concave up.`,
          String.raw`A decreasing graph whose drops get smaller is concave up. Concave down would mean the drops get larger.`,
          String.raw`This describes $\log_{2} x$ before the reflection. The minus sign in front of the log flips both: the graph falls from left to right, so $f$ is decreasing, and its drops get smaller, so it is concave up.`,
          String.raw`A logarithmic function has no horizontal asymptote. $f$ keeps decreasing without bound, just more and more slowly.`,
        ], answer: 0 },
      { id: "p211-m03", type: "mcq", skill: "u2", topic: "2.11", calc: false, difficulty: "easy",
        question: String.raw`Each data set gives the outputs $y$ for the inputs $x = 1, 3, 9, 27$, in order. Which data set could come from a logarithmic function?`,
        choices: [String.raw`$y$: $2, 6, 10, 14$`, String.raw`$y$: $2, 6, 18, 54$`, String.raw`$y$: $1, 9, 81, 729$`, String.raw`$y$: $3, 1, \frac{1}{3}, \frac{1}{9}$`],
        why: [
          String.raw`The inputs are multiplied by $3$ each time while the outputs increase by $4$ each time. Equal factors in the input with equal differences in the output fit $y = 2 + 4\log_{3} x$.`,
          String.raw`These outputs are $2x$, a linear function: they change by $2$ for every increase of $1$ in $x$. The constant ratio comes from the inputs, not from a log.`,
          String.raw`These outputs are $x^{2}$, a power function. Their differences grow, but a log needs equal differences when the input is multiplied by a constant.`,
          String.raw`These outputs are $\dfrac{3}{x}$, a rational function. Each is $\dfrac{1}{3}$ of the one before, so the differences are not equal.`,
        ], answer: 0 },
      { id: "p211-m04", type: "mcq", skill: "u2", topic: "2.11", calc: false, difficulty: "difficult",
        question: String.raw`The function $g$ is given by $g(x) = 7 - 2\log_{3} x$. Which of the following statements are true?

I. $g(243) = -3$
II. The graph of $g$ is concave down.
III. $\displaystyle\lim_{x \to 0^{+}} g(x) = -\infty$`,
        choices: ["I only", "I and II only", "I and III only", "I, II, and III"],
        why: [
          String.raw`I is true: $243 = 3^{5}$, so $g(243) = 7 - 10 = -3$. II is false: $\log_{3} x$ is concave down, and multiplying by $-2$ reflects it, so $g$ is concave up. III is false: as $x \to 0^{+}$, $\log_{3} x \to -\infty$, so $-2\log_{3} x \to \infty$ and $g(x) \to \infty$.`,
          String.raw`II is false. $g$ is a reflection of a concave down log over a horizontal line, so it is concave up; its drops get smaller as $x$ grows.`,
          String.raw`III is false. $\log_{3} x \to -\infty$, but the factor $-2$ changes the sign, so $g(x) \to \infty$.`,
          String.raw`II and III are false. The coefficient $-2$ reflects the graph, which makes it concave up and sends it to $\infty$ near $x = 0$.`,
        ], answer: 0 },
      { id: "p211-m05", type: "mcq", skill: "u2", topic: "2.11", calc: false, difficulty: "easy",
        question: String.raw`Which line is the vertical asymptote of the graph of $y = \log_{5}(2x - 6)$?`,
        choices: [String.raw`$x = 3$`, String.raw`$x = 6$`, String.raw`$x = -3$`, String.raw`$y = 3$`],
        why: [
          String.raw`The asymptote is where the argument is $0$: $2x - 6 = 0$ gives $x = 3$. The domain is $x > 3$.`,
          String.raw`$6$ is the constant in the argument. Solve $2x - 6 = 0$, which gives $x = 3$.`,
          String.raw`The sign is wrong: $2x - 6 = 0$ gives $x = 3$, not $-3$.`,
          String.raw`A logarithmic graph has a vertical asymptote, which is a line $x = c$, not a horizontal line.`,
        ], answer: 0 },
      { id: "p211-m06", type: "mcq", skill: "u2", topic: "2.11", calc: true, difficulty: "moderate",
        question: String.raw`What is the average rate of change of $f(x) = 5\ln(x + 2)$ over the interval $0 \le x \le 4$, to the nearest thousandth?`,
        choices: ["$1.373$", "$5.493$", "$1.733$", "$0.596$"],
        why: [
          String.raw`$\dfrac{f(4) - f(0)}{4 - 0} = \dfrac{5\ln 6 - 5\ln 2}{4} = \dfrac{5\ln 3}{4} \approx 1.373$.`,
          String.raw`$5.493$ is the change $f(4) - f(0) = 5\ln 3$. It still has to be divided by the length of the interval, $4$.`,
          String.raw`$1.733$ is $\dfrac{5\ln 4}{4}$, the log of the difference of the arguments, $6 - 2$. The difference of the logs is $\ln 6 - \ln 2 = \ln 3$.`,
          String.raw`$0.596$ uses the common log, $\dfrac{5(\log 6 - \log 2)}{4}$. The function uses $\ln$.`,
        ], answer: 0 },
      { id: "p211-f1a", type: "frq", skill: "u2", topic: "2.11", calc: false, set: "p211-s2", part: "(a)",
        prompt: String.raw`(i) Give the domain of $k$.

(ii) Determine $\displaystyle\lim_{x \to 2^{+}} k(x)$. Express the answer using the mathematical notation of a limit.`,
        rows: [
          { name: "Domain", earns: String.raw`$x > 2$, because the argument $x - 2$ must be positive.` },
          { name: "Limit at the asymptote", earns: String.raw`$\displaystyle\lim_{x \to 2^{+}} k(x) = -\infty$.` },
        ],
        solution: String.raw`(i) The argument of a logarithm must be positive: $x - 2 > 0$, so the domain is $x > 2$.

(ii) As $x \to 2^{+}$, $x - 2 \to 0^{+}$ and $\log_{3}(x - 2) \to -\infty$. Multiplying by $2$ and adding $1$ keep that, so $\displaystyle\lim_{x \to 2^{+}} k(x) = -\infty$.` },
      { id: "p211-f1b", type: "frq", skill: "u2", topic: "2.11", calc: false, set: "p211-s2", part: "(b)",
        prompt: String.raw`Determine $\displaystyle\lim_{x \to \infty} k(x)$. Express the answer using the mathematical notation of a limit.`,
        rows: [{ name: "End behavior", earns: String.raw`$\displaystyle\lim_{x \to \infty} k(x) = \infty$.` }],
        solution: String.raw`$\log_{3}(x - 2)$ increases without bound as $x \to \infty$, and the positive coefficient $2$ keeps it increasing, so $\displaystyle\lim_{x \to \infty} k(x) = \infty$.` },
      { id: "p211-f1c", type: "frq", skill: "u2", topic: "2.11", calc: false, set: "p211-s2", part: "(c)",
        prompt: String.raw`Find the average rate of change of $k$ over the interval $3 \le x \le 5$ and over the interval $5 \le x \le 11$. Explain how the two values are consistent with the concavity of the graph of $k$.`,
        rows: [{ name: "Rates and concavity", earns: String.raw`$1$ over $[3, 5]$ and $\dfrac{1}{3}$ over $[5, 11]$; the rate of change of $k$ decreases as $x$ increases, which is consistent with the graph of $k$ being concave down.` }],
        solution: String.raw`$k(3) = 2\log_{3} 1 + 1 = 1$, $k(5) = 2\log_{3} 3 + 1 = 3$, and $k(11) = 2\log_{3} 9 + 1 = 5$.

Over $[3, 5]$: $\dfrac{3 - 1}{5 - 3} = 1$. Over $[5, 11]$: $\dfrac{5 - 3}{11 - 5} = \dfrac{1}{3}$.

$k$ is increasing, and its average rate of change is smaller over the later interval. A rate of change that decreases as $x$ increases is what a concave down graph has, and $k$, a log with a positive coefficient, is concave down on its whole domain.` },
    ],
  }],
};

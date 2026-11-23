// AP Precalculus topic quiz, 2.13 Exponential and Logarithmic Equations and Inequalities.
import { graph } from "../../plot.js";

// f(x) = log_2(x + 1) and g(x) = 4 - log_2(x + 1), which meet at (3, 2). Item p213-m03.
const f1 = (x) => Math.log2(x + 1);
const g1 = (x) => 4 - Math.log2(x + 1);

export const sets = {
  "p213-s1": {
    name: "Two logarithmic graphs that cross",
    label: "Graph",
    intro: String.raw`The graphs of $f(x) = \log_{2}(x + 1)$ and $g(x) = 4 - \log_{2}(x + 1)$ are shown below. Both have the vertical asymptote $x = -1$ (dashed). The graphs intersect at the point $(3, 2)$.`,
    sources: [{ title: "", blocks: [{ svg: graph({
      x: [-2, 9], y: [-3, 6], step: 1, xname: "x", yname: "y",
      fns: [{ f: f1, from: -0.998, to: 9, label: "f", labelAt: 7.6 }, { f: g1, from: -0.998, to: 9, label: "g", labelAt: 7.6 }],
      vlines: [{ x: -1 }],
      dots: [[0, 0, "closed"], [1, 1, "closed"], [7, 3, "closed"], [0, 4, "closed"], [1, 3, "closed"], [7, 1, "closed"], [3, 2, "closed"]],
      alt: "Two curves to the right of the dashed vertical asymptote x = -1. The increasing curve, f, passes through (0, 0), (1, 1), (3, 2), and (7, 3). The decreasing curve, g, passes through (0, 4), (1, 3), (3, 2), and (7, 1). They cross at (3, 2); to the left of x = 3 the graph of g is above the graph of f, and to the right the graph of f is above.",
    }) }] }],
  },
  "p213-s2": {
    name: "Three equations and an inequality",
    label: "Free response",
    intro: String.raw`Answer each part without a calculator. Give exact answers, and show the work that leads to each answer.`,
    sources: [],
  },
};

export default {
  forms: [{
    id: "p213",
    name: "Topic 2.13 Quiz: Exponential and Logarithmic Equations and Inequalities",
    group: "Unit 2: Exponential and Logarithmic Functions",
    items: [
      { id: "p213-m01", type: "mcq", skill: "u2", topic: "2.13", calc: false, difficulty: "easy",
        question: String.raw`What is the solution of $\log_{5}(x + 2) = -1$?`,
        choices: [String.raw`$-\frac{9}{5}$`, "$-7$", "$3$", String.raw`$-\frac{11}{5}$`],
        why: [
          String.raw`Rewrite in exponential form: $x + 2 = 5^{-1} = \dfrac{1}{5}$, so $x = \dfrac{1}{5} - 2 = -\dfrac{9}{5}$. The argument is $\dfrac{1}{5} > 0$, so the solution is valid.`,
          String.raw`$-7$ solves $x + 2 = -5$, which multiplies $5$ by $-1$. A negative exponent gives a reciprocal: $5^{-1} = \dfrac{1}{5}$.`,
          String.raw`$3$ solves $x + 2 = 5$, which drops the negative sign of the exponent.`,
          String.raw`$-\dfrac{11}{5}$ solves $x + 2 = -\dfrac{1}{5}$. A positive base to any power is positive: $5^{-1} = \dfrac{1}{5}$.`,
        ], answer: 0 },
      { id: "p213-m02", type: "mcq", skill: "u2", topic: "2.13", calc: false, difficulty: "moderate",
        question: String.raw`What are all solutions of $2\log_{3} x = \log_{3}(x + 6)$?`,
        choices: [String.raw`$x = 3$ only`, String.raw`$x = -2$ only`, String.raw`$x = 3$ and $x = -2$`, String.raw`$x = 6$ only`],
        why: [
          String.raw`Power property: $\log_{3} x^{2} = \log_{3}(x + 6)$, so $x^{2} = x + 6$ and $(x - 3)(x + 2) = 0$. At $x = -2$, $\log_{3}(-2)$ is undefined, so $-2$ is extraneous. Only $x = 3$ works: $2\log_{3} 3 = 2 = \log_{3} 9$.`,
          String.raw`$x = -2$ is the extraneous root. The equation takes $\log_{3} x$, which needs $x > 0$.`,
          String.raw`$x = -2$ solves the quadratic but not the original equation, because $\log_{3}(-2)$ is undefined.`,
          String.raw`$6$ solves $2x = x + 6$, which writes $2\log_{3} x$ as $\log_{3}(2x)$. The coefficient becomes an exponent: $\log_{3} x^{2}$.`,
        ], answer: 0 },
      { id: "p213-m03", type: "mcq", skill: "u2", topic: "2.13", calc: false, difficulty: "easy", set: "p213-s1",
        question: String.raw`What is the solution set of $\log_{2}(x + 1) > 4 - \log_{2}(x + 1)$?`,
        choices: [String.raw`$x > 3$`, String.raw`$-1 < x < 3$`, String.raw`$x \ge 3$`, String.raw`$x > -1$`],
        why: [
          String.raw`The inequality asks where the graph of $f$ is above the graph of $g$, which is to the right of the intersection at $x = 3$. Algebraically, $2\log_{2}(x + 1) > 4$ gives $\log_{2}(x + 1) > 2$, so $x + 1 > 4$ and $x > 3$.`,
          String.raw`$-1 < x < 3$ is where $g$ is above $f$, the solution of $f(x) < g(x)$.`,
          String.raw`At $x = 3$ the two sides are equal, $2 = 2$, so $x = 3$ does not satisfy the strict inequality.`,
          String.raw`$x > -1$ is the domain of both functions, where the logs are defined. The graph of $f$ is above the graph of $g$ only to the right of $x = 3$.`,
        ], answer: 0 },
      { id: "p213-m04", type: "mcq", skill: "u2", topic: "2.13", calc: false, difficulty: "difficult",
        question: String.raw`What is the solution set of $\log_{1/2}(x - 3) > -2$?`,
        choices: [String.raw`$3 < x < 7$`, String.raw`$x > 7$`, String.raw`$x < 7$`, String.raw`$3 < x < \frac{13}{4}$`],
        why: [
          String.raw`The argument must be positive, so $x > 3$. The base $\frac{1}{2}$ is between $0$ and $1$, so $\log_{1/2}$ is decreasing and the inequality reverses: $x - 3 < \left(\frac{1}{2}\right)^{-2} = 4$, so $x < 7$. Both: $3 < x < 7$.`,
          String.raw`$x > 7$ keeps the direction of the inequality. A log with base less than $1$ is decreasing, so a larger output needs a smaller argument. At $x = 11$, $\log_{1/2} 8 = -3$, which is not greater than $-2$.`,
          String.raw`$x < 7$ leaves out the domain. At $x = 0$, $\log_{1/2}(-3)$ is undefined.`,
          String.raw`$\dfrac{13}{4}$ comes from $x - 3 < \dfrac{1}{4}$, which uses $\left(\frac{1}{2}\right)^{2}$. The exponent is $-2$, and $\left(\frac{1}{2}\right)^{-2} = 4$.`,
        ], answer: 0 },
      { id: "p213-m05", type: "mcq", skill: "u2", topic: "2.13", calc: true, difficulty: "easy",
        question: String.raw`What is the solution of $2.5e^{0.4x} = 18$, to the nearest thousandth?`,
        choices: ["$4.935$", "$6.852$", "$7.226$", "$18.000$"],
        why: [
          String.raw`Divide by $2.5$: $e^{0.4x} = 7.2$. Take the natural log: $0.4x = \ln 7.2$, so $x = \dfrac{\ln 7.2}{0.4} \approx 4.935$.`,
          String.raw`$6.852$ is $\dfrac{\ln 15.5}{0.4}$, which subtracts $2.5$ from both sides. The $2.5$ multiplies $e^{0.4x}$, so divide by it.`,
          String.raw`$7.226$ is $\dfrac{\ln 18}{0.4}$, which takes the log before removing the factor $2.5$.`,
          String.raw`$18$ is $\dfrac{7.2}{0.4}$, which divides by $0.4$ without taking the natural log.`,
        ], answer: 0 },
      { id: "p213-m06", type: "mcq", skill: "u2", topic: "2.13", calc: true, difficulty: "moderate",
        question: String.raw`What is the solution of $3^{x} = 5^{x - 1}$, to the nearest thousandth?`,
        choices: ["$3.151$", "$1.465$", "$-3.151$", "$0.594$"],
        why: [
          String.raw`Take the natural log of both sides: $x\ln 3 = (x - 1)\ln 5$. Then $x\ln 5 - x\ln 3 = \ln 5$, so $x = \dfrac{\ln 5}{\ln 5 - \ln 3} \approx 3.151$.`,
          String.raw`$1.465$ is $\dfrac{\ln 5}{\ln 3}$, which drops the $x$ from the right side: $(x - 1)\ln 5$ has an $x\ln 5$ term too.`,
          String.raw`$-3.151$ is $\dfrac{\ln 5}{\ln 3 - \ln 5}$, a sign error when the $x$ terms are collected.`,
          String.raw`$0.594$ is $\dfrac{\ln 5}{\ln 3 + \ln 5}$, which adds $x\ln 5$ to the left side instead of subtracting.`,
        ], answer: 0 },
      { id: "p213-f1a", type: "frq", skill: "u2", topic: "2.13", calc: false, set: "p213-s2", part: "(a)",
        prompt: String.raw`Solve $\log_{3}(x + 7) = 2\log_{3}(x + 1)$ for all values of $x$ in the domain of the equation.`,
        rows: [
          { name: "Quadratic and its roots", earns: String.raw`Rewrites the equation as $x + 7 = (x + 1)^{2}$ and finds $x = 2$ and $x = -3$.` },
          { name: "Rejects the extraneous root", earns: String.raw`Gives $x = 2$ as the only solution, rejecting $x = -3$ because $\log_{3}(-3 + 1) = \log_{3}(-2)$ is undefined.` },
        ],
        solution: String.raw`The domain requires $x + 7 > 0$ and $x + 1 > 0$, so $x > -1$. By the power property, $2\log_{3}(x + 1) = \log_{3}(x + 1)^{2}$, so $x + 7 = (x + 1)^{2} = x^{2} + 2x + 1$. Then $x^{2} + x - 6 = 0$ and $(x + 3)(x - 2) = 0$. The value $x = -3$ is not in the domain, since $\log_{3}(-2)$ is undefined. The only solution is $x = 2$: $\log_{3} 9 = 2 = 2\log_{3} 3$.` },
      { id: "p213-f1b", type: "frq", skill: "u2", topic: "2.13", calc: false, set: "p213-s2", part: "(b)",
        prompt: String.raw`Solve $6e^{2x} - 5 = 13$.`,
        rows: [{ name: "Exponential equation", earns: String.raw`$x = \dfrac{\ln 3}{2}$, with supporting work.` }],
        solution: String.raw`Add $5$: $6e^{2x} = 18$. Divide by $6$: $e^{2x} = 3$. Take the natural log: $2x = \ln 3$, so $x = \dfrac{\ln 3}{2}$.` },
      { id: "p213-f1c", type: "frq", skill: "u2", topic: "2.13", calc: false, set: "p213-s2", part: "(c)",
        prompt: String.raw`Solve the inequality $5 - 2\ln x > 1$.`,
        rows: [{ name: "Inequality with domain", earns: String.raw`$0 < x < e^{2}$, with supporting work that includes the domain $x > 0$.` }],
        solution: String.raw`Subtract $5$: $-2\ln x > -4$. Divide by $-2$, which reverses the inequality: $\ln x < 2$. Since $\ln$ is increasing, $x < e^{2}$. The log also requires $x > 0$, so the solution is $0 < x < e^{2}$.` },
    ],
  }],
};

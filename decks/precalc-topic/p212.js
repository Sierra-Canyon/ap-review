// AP Precalculus topic quiz, 2.12 Logarithmic Function Manipulation.
import { graph } from "../../plot.js";

export const sets = {
  "p212-s1": {
    name: "Two base-2 logarithmic graphs",
    label: "Graph",
    intro: String.raw`The graphs of $f(x) = \log_{2} x$ and of a function $g$ are shown below. Both have the $y$-axis as a vertical asymptote. The graph of $f$ passes through $\left(\frac{1}{2}, -1\right)$, $(1, 0)$, $(2, 1)$, and $(4, 2)$. The graph of $g$ passes through $\left(\frac{1}{2}, -3\right)$, $(1, 0)$, $(2, 3)$, and $(4, 6)$.`,
    sources: [{ title: "", blocks: [{ svg: graph({
      x: [-1, 5], y: [-4, 7], step: 1, xname: "x", yname: "y",
      fns: [{ f: (x) => Math.log2(x), from: 0.003, to: 5, label: "f", labelAt: 4.3 }, { f: (x) => 3 * Math.log2(x), from: 0.03, to: 5, label: "g", labelAt: 3.2 }],
      dots: [[0.5, -1, "closed"], [1, 0, "closed"], [2, 1, "closed"], [4, 2, "closed"], [0.5, -3, "closed"], [2, 3, "closed"], [4, 6, "closed"]],
      alt: "Two increasing logarithmic curves that cross at (1, 0), each with the y-axis as a vertical asymptote. The flatter curve, f, passes through (1/2, -1), (2, 1), and (4, 2). The steeper curve, g, passes through (1/2, -3), (2, 3), and (4, 6); at every x its value is 3 times the value of f.",
    }) }] }],
  },
  "p212-s2": {
    name: "Rewriting logarithmic expressions",
    label: "Free response",
    intro: String.raw`Answer each part without a calculator, and show the work that leads to each answer.`,
    sources: [],
  },
};

export default {
  forms: [{
    id: "p212",
    name: "Topic 2.12 Quiz: Logarithmic Function Manipulation",
    group: "Unit 2: Exponential and Logarithmic Functions",
    items: [
      { id: "p212-m01", type: "mcq", skill: "u2", topic: "2.12", calc: false, difficulty: "easy",
        question: String.raw`For $x > 0$ and $y > 0$, which expression is equivalent to $\ln\left(x^{4}\sqrt{y}\right)$?`,
        choices: [String.raw`$4\ln x + \frac{1}{2}\ln y$`, String.raw`$4\ln x \cdot \frac{1}{2}\ln y$`, String.raw`$\frac{1}{2}\left(4\ln x + \ln y\right)$`, String.raw`$\ln (4x) + \ln \left(\frac{y}{2}\right)$`],
        why: [
          String.raw`Product property, then power property: $\ln x^{4} + \ln y^{1/2} = 4\ln x + \dfrac{1}{2}\ln y$.`,
          String.raw`The log of a product is the sum of the logs, not their product: $\ln\left(x^{4}\sqrt{y}\right) = \ln x^{4} + \ln \sqrt{y}$.`,
          String.raw`The square root applies only to $y$, so only $\ln y$ is multiplied by $\dfrac{1}{2}$.`,
          String.raw`The power property moves an exponent in front as a coefficient: $\ln x^{4} = 4\ln x$, not $\ln (4x)$. And $\sqrt{y}$ is not $\dfrac{y}{2}$.`,
        ], answer: 0 },
      { id: "p212-m02", type: "mcq", skill: "u2", topic: "2.12", calc: false, difficulty: "easy",
        question: String.raw`What is the value of $\log 50 + \log 2$?`,
        choices: ["$2$", "$100$", String.raw`$\log 52$`, String.raw`$\log 25$`],
        why: [
          String.raw`Product property: $\log 50 + \log 2 = \log(50 \cdot 2) = \log 100 = 2$.`,
          String.raw`$100$ is the argument after the logs are combined. The value is $\log 100 = 2$.`,
          String.raw`A sum of logs is the log of a product, not of a sum.`,
          String.raw`$\log 25$ is $\log 50 - \log 2$. Adding logs multiplies the arguments.`,
        ], answer: 0 },
      { id: "p212-m03", type: "mcq", skill: "u2", topic: "2.12", calc: false, difficulty: "moderate",
        question: String.raw`If $\log_{b} 2 = 0.356$ and $\log_{b} 5 = 0.827$, what is the value of $\log_{b} 0.4$?`,
        choices: ["$-0.471$", "$0.430$", "$0.471$", "$1.183$"],
        why: [
          String.raw`$0.4 = \dfrac{2}{5}$, so by the quotient property $\log_{b} 0.4 = \log_{b} 2 - \log_{b} 5 = 0.356 - 0.827 = -0.471$.`,
          String.raw`$0.430 = \dfrac{0.356}{0.827}$ divides the logs. The log of a quotient is a difference of logs, not a quotient of logs.`,
          String.raw`$0.471$ is $\log_{b} 5 - \log_{b} 2 = \log_{b} 2.5$, the quotient upside down. Since $0.4 < 1 < b$, the log is negative.`,
          String.raw`$1.183$ is $\log_{b} 2 + \log_{b} 5 = \log_{b} 10$. Dividing by $5$ subtracts its log.`,
        ], answer: 0 },
      { id: "p212-m04", type: "mcq", skill: "u2", topic: "2.12", calc: false, difficulty: "moderate", set: "p212-s1",
        question: String.raw`Which of the following could define $g$?`,
        choices: [String.raw`$g(x) = \log_{2}\left(x^{3}\right)$`, String.raw`$g(x) = \log_{2}(3x)$`, String.raw`$g(x) = \log_{8} x$`, String.raw`$g(x) = \log_{2} x + 3$`],
        why: [
          String.raw`Each output of $g$ is $3$ times the output of $f$, a vertical dilation by $3$. By the power property, $3\log_{2} x = \log_{2}\left(x^{3}\right)$. Check: $\log_{2} 4^{3} = \log_{2} 64 = 6$.`,
          String.raw`$\log_{2}(3x) = \log_{2} 3 + \log_{2} x$ is a vertical shift, not a dilation. It gives $\log_{2} 3 \ne 0$ at $x = 1$.`,
          String.raw`$\log_{8} x = \dfrac{\log_{2} x}{3}$ is a dilation by $\dfrac{1}{3}$, which would make $g$ flatter than $f$. At $x = 2$ it gives $\dfrac{1}{3}$, not $3$.`,
          String.raw`$\log_{2} x + 3$ shifts the graph up $3$. It gives $3$ at $x = 1$, but $g(1) = 0$.`,
        ], answer: 0 },
      { id: "p212-m05", type: "mcq", skill: "u2", topic: "2.12", calc: false, difficulty: "difficult",
        question: String.raw`For $x > 0$ with $x \ne 1$, which of the following is equal to $\log_{4} x \cdot \log_{x} 32$?`,
        choices: [String.raw`$\frac{5}{2}$`, String.raw`$\frac{2}{5}$`, "$8$", String.raw`$\log_{4} x^{32}$`],
        why: [
          String.raw`Change of base to natural logs: $\dfrac{\ln x}{\ln 4} \cdot \dfrac{\ln 32}{\ln x} = \dfrac{\ln 32}{\ln 4} = \log_{4} 32$. Since $4^{5/2} = 2^{5} = 32$, the value is $\dfrac{5}{2}$.`,
          String.raw`$\dfrac{2}{5}$ is $\log_{32} 4$, the change of base turned upside down.`,
          String.raw`$8 = \dfrac{32}{4}$ divides the arguments. The product simplifies to $\log_{4} 32$, an exponent, not a quotient.`,
          String.raw`$\log_{4} x^{32}$ moves $32$ into an exponent on $x$. The power property applies to an exponent inside a log, and $32$ is an argument here.`,
        ], answer: 0 },
      { id: "p212-m06", type: "mcq", skill: "u2", topic: "2.12", calc: true, difficulty: "easy",
        question: String.raw`What is the value of $\log_{3} 2 + \log_{5} 2$, to the nearest thousandth?`,
        choices: ["$1.062$", "$0.256$", "$0.667$", "$3.907$"],
        why: [
          String.raw`Change of base: $\dfrac{\ln 2}{\ln 3} + \dfrac{\ln 2}{\ln 5} \approx 0.631 + 0.431 = 1.062$.`,
          String.raw`$0.256$ is $\log_{15} 2$. Logs with different bases cannot be combined by multiplying the bases.`,
          String.raw`$0.667$ is $\log_{8} 4$, which adds the bases and adds the arguments. Each log has to be evaluated separately.`,
          String.raw`$3.907$ is $\log_{2} 3 + \log_{2} 5$, with each change-of-base quotient upside down.`,
        ], answer: 0 },
      { id: "p212-f1a", type: "frq", skill: "u2", topic: "2.12", calc: false, set: "p212-s2", part: "(a)",
        prompt: String.raw`For $x > 0$, rewrite $3\log_{2} x - \log_{2}(4x) + 2$ as a single logarithm with base $2$.`,
        rows: [{ name: "Single logarithm", earns: String.raw`$\log_{2}\left(x^{2}\right)$, or $2\log_{2} x$ written as $\log_{2}\left(x^{2}\right)$, with supporting work.` }],
        solution: String.raw`Write $2 = \log_{2} 4$ and use the power, quotient, and product properties: $$3\log_{2} x - \log_{2}(4x) + \log_{2} 4 = \log_{2}\frac{x^{3} \cdot 4}{4x} = \log_{2}\left(x^{2}\right)$$` },
      { id: "p212-f1b", type: "frq", skill: "u2", topic: "2.12", calc: false, set: "p212-s2", part: "(b)",
        prompt: String.raw`For $x > 0$, the function $h$ is given by $h(x) = \ln\left(x^{3}\right) - \ln\left(e^{2}x\right)$. Rewrite $h(x)$ in the form $a\ln x + b$, where $a$ and $b$ are constants.`,
        rows: [{ name: "Form a ln x + b", earns: String.raw`$h(x) = 2\ln x - 2$, with supporting work.` }],
        solution: String.raw`$\ln\left(x^{3}\right) = 3\ln x$ and $\ln\left(e^{2}x\right) = \ln e^{2} + \ln x = 2 + \ln x$. So $h(x) = 3\ln x - 2 - \ln x = 2\ln x - 2$, with $a = 2$ and $b = -2$.` },
      { id: "p212-f1c", type: "frq", skill: "u2", topic: "2.12", calc: false, set: "p212-s2", part: "(c)",
        prompt: String.raw`Use the change of base property to show that $\log_{1/3} x = -\log_{3} x$ for $x > 0$.`,
        rows: [{ name: "Change of base", earns: String.raw`Writes $\log_{1/3} x = \dfrac{\log_{3} x}{\log_{3}(1/3)}$ and uses $\log_{3}\left(\dfrac{1}{3}\right) = -1$ to reach $-\log_{3} x$.` }],
        solution: String.raw`By change of base to base $3$, $\log_{1/3} x = \dfrac{\log_{3} x}{\log_{3}\left(\frac{1}{3}\right)}$. Since $3^{-1} = \dfrac{1}{3}$, $\log_{3}\left(\frac{1}{3}\right) = -1$. So $\log_{1/3} x = \dfrac{\log_{3} x}{-1} = -\log_{3} x$.` },
    ],
  }],
};

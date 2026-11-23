// AP Precalculus topic quiz, Topic 2.3: Exponential Functions.
import { graph } from "../../plot.js";

export const sets = {
  "p203-s1": {
    name: "A shifted exponential graph",
    label: "Graph",
    intro: String.raw`The graph of the function $f$, given by $f(x) = ab^{x} + k$ for constants $a$, $b$, and $k$, is shown. The points $(-1, 7)$, $(0, 4)$, $(1, 2.5)$, and $(2, 1.75)$ are on the graph, and the dashed line $y = 1$ is a horizontal asymptote.`,
    sources: [{ title: "", blocks: [{ svg: graph({
      x: [-2, 5], y: [-1, 9], step: 1, xname: "x", yname: "y",
      fns: [{ f: (x) => 3 * 0.5 ** x + 1, from: -1.6, to: 5 }],
      hlines: [{ y: 1, dash: true }],
      dots: [[-1, 7, "closed"], [0, 4, "closed"], [1, 2.5, "closed"], [2, 1.75, "closed"]],
      alt: "A decreasing curve that falls steeply on the left and levels off toward the dashed horizontal line y = 1 on the right, staying above it. Marked points: (-1, 7), (0, 4), (1, 2.5), and (2, 1.75).",
    }) }] }],
  },
  "p203-s2": {
    name: "A decreasing exponential",
    label: "Free response",
    intro: String.raw`The function $f$ is given by $f(x) = 54 - 2 \cdot 3^{x}$.`,
    sources: [{ title: "", blocks: [{ p: "Answer each part without a calculator. Show the work that leads to each answer." }] }],
  },
};

export default {
  forms: [{
    id: "p203",
    name: "Topic 2.3 Quiz: Exponential Functions",
    group: "Unit 2: Exponential and Logarithmic Functions",
    items: [
      { id: "p203-m01", type: "mcq", skill: "u2", topic: "2.3", calc: false, difficulty: "easy",
        question: String.raw`The function $f$ is given by $f(x) = 0.4(2.5)^{x}$. Which statement about $f$ is true?`,
        choices: [
          String.raw`$f$ shows exponential growth, because $2.5 > 1$.`,
          String.raw`$f$ shows exponential decay, because $0 < 0.4 < 1$.`,
          String.raw`$f$ shows exponential growth, because $f(0) = 0.4 > 0$.`,
          String.raw`$f$ shows exponential decay, because $0.4 < 2.5$.`,
        ],
        why: [
          String.raw`For $f(x) = ab^{x}$ with $a > 0$, the base decides: $b > 1$ gives growth. Here $b = 2.5$.`,
          String.raw`A number between $0$ and $1$ means decay only when it is the base. $0.4$ is the initial value $a$, and a small starting value does not make the function decrease.`,
          String.raw`The conclusion is right, but $f(0) = a > 0$ only says the graph is above the $x$-axis. Growth comes from the base, $2.5 > 1$.`,
          String.raw`Comparing $a$ with $b$ says nothing about growth or decay. Since $b = 2.5 > 1$ and $a > 0$, $f$ grows.`,
        ], answer: 0 },
      { id: "p203-m02", type: "mcq", skill: "u2", topic: "2.3", calc: false, difficulty: "easy",
        question: String.raw`Let $g(x) = 5 \cdot 4^{x} - 2$. What is $\displaystyle \lim_{x \to -\infty} g(x)$?`,
        choices: ["$-2$", String.raw`$\infty$`, "$0$", "$3$"],
        why: [
          String.raw`As $x \to -\infty$, $4^{x} \to 0$, so $5 \cdot 4^{x} \to 0$ and $g(x) \to 0 - 2 = -2$.`,
          String.raw`$g(x) \to \infty$ as $x \to \infty$, the other end. As $x \to -\infty$ the term $5 \cdot 4^{x}$ shrinks toward $0$.`,
          String.raw`$0$ is the limit of $5 \cdot 4^{x}$ alone. The vertical shift of $-2$ moves the asymptote to $y = -2$.`,
          String.raw`$3$ is $g(0) = 5 - 2$, the $y$-intercept, not the value $g$ approaches.`,
        ], answer: 0 },
      { id: "p203-m03", type: "mcq", skill: "u2", topic: "2.3", calc: false, difficulty: "moderate", set: "p203-s1",
        question: String.raw`Which of the following defines $f$?`,
        choices: [String.raw`$f(x) = 3(0.5)^{x} + 1$`, String.raw`$f(x) = 4(0.625)^{x}$`, String.raw`$f(x) = 3(0.5)^{x} - 1$`, String.raw`$f(x) = 5(0.5)^{x} - 1$`],
        why: [
          String.raw`The asymptote $y = 1$ gives $k = 1$. Then $f(x) - 1$ takes the values $6, 3, 1.5, 0.75$, which halve each step, so $b = 0.5$ and $a = f(0) - 1 = 3$.`,
          String.raw`$4(0.625)^{x}$ fits $(0, 4)$ and $(1, 2.5)$ but ignores the shift. It gives $f(2) = 1.5625$, not $1.75$, and its asymptote is $y = 0$.`,
          String.raw`$3(0.5)^{x} - 1$ has the wrong sign on the shift: $f(0) = 2$ and the asymptote is $y = -1$.`,
          String.raw`$5(0.5)^{x} - 1$ passes through $(0, 4)$, but $f(1) = 1.5$ and its asymptote is $y = -1$. The graph levels off at $y = 1$.`,
        ], answer: 0 },
      { id: "p203-m04", type: "mcq", skill: "u2", topic: "2.3", calc: false, difficulty: "easy", set: "p203-s1",
        question: String.raw`What is the range of $f$?`,
        choices: [String.raw`$(1, \infty)$`, String.raw`$(0, \infty)$`, String.raw`$[1, \infty)$`, String.raw`$(-\infty, \infty)$`],
        why: [
          String.raw`The graph gets arbitrarily close to $y = 1$ without reaching it, and it rises without bound to the left, so the range is $y > 1$.`,
          String.raw`$(0, \infty)$ is the range of $ab^{x}$ with $a > 0$ before the shift. The graph is shifted up $1$.`,
          String.raw`$y = 1$ is an asymptote, so $f(x)$ never equals $1$. The interval is open at $1$.`,
          String.raw`$(-\infty, \infty)$ is the domain of $f$, not its range.`,
        ], answer: 0 },
      { id: "p203-m05", type: "mcq", skill: "u2", topic: "2.3", calc: true, difficulty: "difficult",
        question: String.raw`Let $g(x) = 20 - 6(1.4)^{x}$. What is the maximum value of $g$ on the interval $-2 \le x \le 3$, to the nearest thousandth?`,
        choices: ["$16.939$", "$3.536$", "$20$", "$14$"],
        why: [
          String.raw`$6(1.4)^{x}$ increases, so $g$ decreases, and its maximum on the interval is at the left endpoint: $g(-2) = 20 - \dfrac{6}{1.96} \approx 16.939$.`,
          String.raw`$g(3) = 20 - 6(2.744) = 3.536$ is the minimum on the interval. $g$ is decreasing, so the largest value is at $x = -2$.`,
          String.raw`$20$ is the horizontal asymptote. $g$ approaches it as $x \to -\infty$ but never reaches it, and $x$ stops at $-2$.`,
          String.raw`$14$ is $g(0)$. The interval starts at $x = -2$, where $g$ is larger.`,
        ], answer: 0 },
      { id: "p203-m06", type: "mcq", skill: "u2", topic: "2.3", calc: false, difficulty: "moderate",
        question: String.raw`Which function is decreasing and has a graph that is concave down on its entire domain?`,
        choices: [String.raw`$f(x) = -2(3)^{x}$`, String.raw`$f(x) = 2(3)^{x}$`, String.raw`$f(x) = 2\left(\frac{1}{3}\right)^{x}$`, String.raw`$f(x) = -2\left(\frac{1}{3}\right)^{x}$`],
        why: [
          String.raw`$3^{x}$ is increasing and concave up. Multiplying by $-2$ reflects it over the $x$-axis, so $-2(3)^{x}$ is decreasing and concave down.`,
          String.raw`$2(3)^{x}$ is increasing and concave up.`,
          String.raw`$2\left(\frac{1}{3}\right)^{x}$ is decreasing but concave up: it levels off toward the $x$-axis from above.`,
          String.raw`$-2\left(\frac{1}{3}\right)^{x}$ is concave down but increasing: it rises toward the $x$-axis from below.`,
        ], answer: 0 },
      { id: "p203-f1a", type: "frq", skill: "u2", topic: "2.3", calc: false, set: "p203-s2", part: "(a)",
        prompt: String.raw`Find the zero of $f$.`,
        rows: [{ name: "Zero", earns: String.raw`$x = 3$, from $2 \cdot 3^{x} = 54$, so $3^{x} = 27 = 3^{3}$.` }],
        solution: String.raw`$54 - 2 \cdot 3^{x} = 0$ gives $3^{x} = 27 = 3^{3}$, so $x = 3$.` },
      { id: "p203-f1b", type: "frq", skill: "u2", topic: "2.3", calc: false, set: "p203-s2", part: "(b)",
        prompt: String.raw`Describe the end behavior of $f$ as $x$ decreases without bound. Express your answer using the mathematical notation of a limit.`,
        rows: [{ name: "Limit", earns: String.raw`$\displaystyle \lim_{x \to -\infty} f(x) = 54$, written in limit notation.` }],
        solution: String.raw`As $x \to -\infty$, $3^{x} \to 0$, so $2 \cdot 3^{x} \to 0$ and $\displaystyle \lim_{x \to -\infty} f(x) = 54$.` },
      { id: "p203-f1c", type: "frq", skill: "u2", topic: "2.3", calc: false, set: "p203-s2", part: "(c)",
        prompt: String.raw`Is $f$ increasing or decreasing on its domain? Is the graph of $f$ concave up or concave down? Give a reason for each answer.`,
        rows: [
          { name: "Increasing or decreasing", earns: String.raw`Decreasing, because $3^{x}$ is increasing ($3 > 1$) and it is multiplied by $-2 < 0$.` },
          { name: "Concavity", earns: String.raw`Concave down, because the concave up graph of $2 \cdot 3^{x}$ is reflected over a horizontal line by the negative coefficient (the shift by $54$ does not change concavity).` },
        ],
        solution: String.raw`$f(x) = -2 \cdot 3^{x} + 54$. The base $3 > 1$ makes $3^{x}$ increasing and concave up. The coefficient $-2 < 0$ reflects the graph, so $f$ is decreasing and concave down. Adding $54$ shifts the graph up and changes neither property.` },
    ],
  }],
};

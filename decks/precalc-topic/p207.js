// AP Precalculus topic quiz, Topic 2.7: Composition of Functions.
import { graph } from "../../plot.js";

export const sets = {
  "p207-s1": {
    name: "The graphs of f and g",
    label: "Graph",
    intro: String.raw`The graphs of the functions $f$ (solid) and $g$ (dashed) are shown. The graph of $f$ passes through $(0, -2)$, $(1, -1)$, $(2, 1)$, and $(3, 5)$. The graph of $g$ is a line through $(0, 4)$, $(2, 2)$, and $(4, 0)$.`,
    sources: [{ title: "", blocks: [{ svg: graph({
      x: [-2, 6], y: [-4, 7], step: 1, xname: "x", yname: "y",
      fns: [{ f: (x) => 2 ** x - 3, from: -2, to: 3.2, label: "f", labelAt: 2.6 }, { f: (x) => 4 - x, dash: true, label: "g", labelAt: 5 }],
      dots: [[0, -2, "closed"], [1, -1, "closed"], [2, 1, "closed"], [3, 5, "closed"], [0, 4, "closed"], [2, 2, "closed"], [4, 0, "closed"]],
      alt: "Two graphs. The solid curve f rises slowly on the left, just above y = -3, then more and more steeply, through (0, -2), (1, -1), (2, 1), and (3, 5). The dashed line g falls from left to right through (0, 4), (2, 2), and (4, 0).",
    }) }] }],
  },
  "p207-s2": {
    name: "Heating a liquid",
    label: "Free response",
    intro: String.raw`A liquid is heated. Its temperature, in degrees Celsius, $t$ minutes after heating starts is $C(t) = 20 + 5t$. The function $F(c) = 1.8c + 32$ converts a temperature of $c$ degrees Celsius to degrees Fahrenheit.`,
    sources: [{ title: "", blocks: [{ p: "Answer each part without a calculator. Show the work that leads to each answer." }] }],
  },
};

export default {
  forms: [{
    id: "p207",
    name: "Topic 2.7 Quiz: Composition of Functions",
    group: "Unit 2: Exponential and Logarithmic Functions",
    items: [
      { id: "p207-m01", type: "mcq", skill: "u2", topic: "2.7", calc: false, difficulty: "easy", set: "p207-s1",
        question: String.raw`What is $f(g(2))$?`,
        choices: ["$1$", "$3$", "$2$", "$-1$"],
        why: [
          String.raw`From the graph, $g(2) = 2$. Then $f(g(2)) = f(2) = 1$.`,
          String.raw`$3$ is $g(f(2)) = g(1)$. The inner function here is $g$, so evaluate $g(2)$ first.`,
          String.raw`$2$ is the product $f(2) \cdot g(2) = 1 \cdot 2$. A composition feeds one output into the other function.`,
          String.raw`$-1$ is $f(f(2)) = f(1)$, which uses $f$ twice.`,
        ], answer: 0 },
      { id: "p207-m02", type: "mcq", skill: "u2", topic: "2.7", calc: false, difficulty: "moderate", set: "p207-s1",
        question: String.raw`For what value of $x$ is $g(f(x)) = 5$?`,
        choices: ["$1$", "$-1$", "$2$", "$3$"],
        why: [
          String.raw`$g(u) = 4 - u = 5$ when $u = -1$, so $f(x)$ must equal $-1$. From the graph, $f(1) = -1$, so $x = 1$.`,
          String.raw`$-1$ is the value $f(x)$ must take. The question asks for the input $x$ that gives it.`,
          String.raw`$2$ comes from a sign slip, $f(x) = 1$. Solving $4 - f(x) = 5$ gives $f(x) = -1$.`,
          String.raw`$3$ solves $f(x) = 5$, which leaves out $g$.`,
        ], answer: 0 },
      { id: "p207-m03", type: "mcq", skill: "u2", topic: "2.7", calc: false, difficulty: "easy",
        question: String.raw`Let $h(x) = \left(e^{x} + 2\right)^{3}$. Which pair of functions satisfies $h(x) = f(g(x))$?`,
        choices: [
          String.raw`$f(x) = x^{3}$ and $g(x) = e^{x} + 2$`,
          String.raw`$f(x) = e^{x} + 2$ and $g(x) = x^{3}$`,
          String.raw`$f(x) = x^{3} + 2$ and $g(x) = e^{x}$`,
          String.raw`$f(x) = x^{3}$ and $g(x) = e^{x + 2}$`,
        ],
        why: [
          String.raw`The inner step is $e^{x} + 2$ and the outer step cubes it: $f(g(x)) = \left(e^{x} + 2\right)^{3}$.`,
          String.raw`This pair is in the wrong order: $f(g(x)) = e^{x^{3}} + 2$.`,
          String.raw`This cubes $e^{x}$ before adding $2$: $f(g(x)) = e^{3x} + 2$.`,
          String.raw`This gives $f(g(x)) = \left(e^{x + 2}\right)^{3} = e^{3x + 6}$. The $2$ is added to $e^{x}$, not to the exponent.`,
        ], answer: 0 },
      { id: "p207-m04", type: "mcq", skill: "u2", topic: "2.7", calc: false, difficulty: "moderate",
        question: String.raw`Let $f(x) = 2^{x}$ and $g(x) = x^{2} - 1$. Which of the following is $g(f(x))$?`,
        choices: [String.raw`$4^{x} - 1$`, String.raw`$2^{x^{2} - 1}$`, String.raw`$2^{x^{2}} - 1$`, String.raw`$2^{x}\left(x^{2} - 1\right)$`],
        why: [
          String.raw`$g(f(x)) = \left(2^{x}\right)^{2} - 1 = 2^{2x} - 1 = 4^{x} - 1$.`,
          String.raw`$2^{x^{2} - 1}$ is $f(g(x))$, the composition in the other order.`,
          String.raw`$\left(2^{x}\right)^{2}$ is $2^{2x}$, not $2^{x^{2}}$. Raising a power to a power multiplies the exponents.`,
          String.raw`$2^{x}\left(x^{2} - 1\right)$ is the product $f(x) \cdot g(x)$, not a composition.`,
        ], answer: 0 },
      { id: "p207-m05", type: "mcq", skill: "u2", topic: "2.7", calc: false, difficulty: "moderate",
        question: String.raw`Let $f(x) = \sqrt{x}$ and $g(x) = 2^{x} - 8$. What is the domain of $f(g(x))$?`,
        choices: [String.raw`$[3, \infty)$`, String.raw`$[0, \infty)$`, String.raw`$[8, \infty)$`, String.raw`$(-\infty, \infty)$`],
        why: [
          String.raw`$f(g(x)) = \sqrt{2^{x} - 8}$ is defined when $2^{x} - 8 \ge 0$, so $2^{x} \ge 8 = 2^{3}$ and $x \ge 3$.`,
          String.raw`$[0, \infty)$ is the domain of $f$ alone. The condition applies to the output of $g$, so $g(x) \ge 0$.`,
          String.raw`$[8, \infty)$ solves $x - 8 \ge 0$, which drops the exponential. The condition is $2^{x} \ge 8$.`,
          String.raw`$(-\infty, \infty)$ is the domain of $g$, but $f$ cannot take the negative outputs of $g$ for $x < 3$.`,
        ], answer: 0 },
      { id: "p207-m06", type: "mcq", skill: "u2", topic: "2.7", calc: false, difficulty: "difficult",
        question: String.raw`Let $f(x) = 3x + c$ and $g(x) = \dfrac{x}{3} + 2$, where $c$ is a constant. For what value of $c$ is $f(g(x)) = g(f(x))$ for all real $x$?`,
        choices: ["$-6$", "$6$", "$-9$", "$2$"],
        why: [
          String.raw`$f(g(x)) = 3\left(\dfrac{x}{3} + 2\right) + c = x + 6 + c$ and $g(f(x)) = \dfrac{3x + c}{3} + 2 = x + \dfrac{c}{3} + 2$. Setting $6 + c = \dfrac{c}{3} + 2$ gives $\dfrac{2c}{3} = -4$, so $c = -6$.`,
          String.raw`With $c = 6$, $f(g(x)) = x + 12$ and $g(f(x)) = x + 4$, which differ.`,
          String.raw`$-9$ drops the $+2$ in $g(f(x))$: $6 + c = \dfrac{c}{3}$. With $c = -9$, $f(g(x)) = x - 3$ and $g(f(x)) = x - 1$.`,
          String.raw`$2$ makes the constants of $f$ and $g$ match, which is not the condition. With $c = 2$, $f(g(x)) = x + 8$ and $g(f(x)) = x + \dfrac{8}{3}$.`,
        ], answer: 0 },
      { id: "p207-f1a", type: "frq", skill: "u2", topic: "2.7", calc: false, set: "p207-s2", part: "(a)",
        prompt: String.raw`Find $F(C(4))$ and explain what it means in the context of the problem.`,
        rows: [{ name: "Value and meaning", earns: String.raw`$F(C(4)) = F(40) = 104$: $4$ minutes after heating starts, the liquid's temperature is $104$ degrees Fahrenheit.` }],
        solution: String.raw`$C(4) = 20 + 20 = 40$ degrees Celsius, and $F(40) = 1.8(40) + 32 = 104$. Four minutes after heating starts, the temperature of the liquid is $104$ degrees Fahrenheit.` },
      { id: "p207-f1b", type: "frq", skill: "u2", topic: "2.7", calc: false, set: "p207-s2", part: "(b)",
        prompt: String.raw`Write an expression for $F(C(t))$ in terms of $t$, and simplify it.`,
        rows: [{ name: "Composite", earns: String.raw`$F(C(t)) = 1.8(20 + 5t) + 32 = 68 + 9t$.` }],
        solution: String.raw`$F(C(t)) = 1.8(20 + 5t) + 32 = 36 + 9t + 32 = 68 + 9t$.` },
      { id: "p207-f1c", type: "frq", skill: "u2", topic: "2.7", calc: false, set: "p207-s2", part: "(c)",
        prompt: String.raw`At what time $t$ does the liquid reach $212$ degrees Fahrenheit?`,
        rows: [{ name: "Time", earns: String.raw`$68 + 9t = 212$, so $t = 16$ minutes.` }],
        solution: String.raw`By part (b), $68 + 9t = 212$, so $9t = 144$ and $t = 16$ minutes.` },
    ],
  }],
};

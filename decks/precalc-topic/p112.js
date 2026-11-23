// AP Precalculus topic quiz 1.12: Transformations of Functions.
import { graph } from "../../plot.js";

// f is piecewise linear through (-3, 1), (-1, 3), (0, 0), (2, 2). g(x) = f(x - 4) - 2. Items m03 and m04 read this graph.
const F = [[-3, 1], [-1, 3], [0, 0], [2, 2]];
const f = (x) => {
  for (let i = 0; i < F.length - 1; i++) {
    const [x1, y1] = F[i], [x2, y2] = F[i + 1];
    if (x >= x1 - 1e-9 && x <= x2 + 1e-9) return y1 + ((y2 - y1) * (x - x1)) / (x2 - x1);
  }
  return NaN;
};
const g = (x) => f(x - 4) - 2;

export const sets = {
  "p112-s1": {
    name: "The graphs of f and g",
    label: "Graph",
    intro: String.raw`The graphs of the functions $f$ (solid) and $g$ (dashed) are shown below. Each graph consists of three line segments. The graph of $f$ joins the points $(-3, 1)$, $(-1, 3)$, $(0, 0)$, and $(2, 2)$.`,
    sources: [{ title: "", blocks: [{ svg: graph({
      x: [-4, 7], y: [-3, 4], step: 1, xname: "x", yname: "y",
      fns: [{ f, from: -3, to: 2 }, { f: g, from: 1, to: 6, dash: true }],
      dots: [[-3, 1, "closed"], [-1, 3, "closed"], [0, 0, "closed"], [2, 2, "closed"], [1, -1, "closed"], [3, 1, "closed"], [4, -2, "closed"], [6, 0, "closed"]],
      labels: [[-1.3, 3.4, "f"], [5.3, -0.4, "g"]],
      alt: "Two graphs made of line segments. The solid graph of f joins (-3, 1), (-1, 3), (0, 0), and (2, 2). The dashed graph of g has the same shape and joins (1, -1), (3, 1), (4, -2), and (6, 0).",
    }) }] }],
  },
  "p112-s2": {
    name: "A transformed quadratic",
    label: "Free response",
    intro: String.raw`Let $f$ be the function given by $f(x) = x^{2} - 4x$ for $0 \le x \le 5$. The function $g$ is given by $g(x) = -f(x + 2) + 3$.`,
    sources: [{ title: "", blocks: [{ p: String.raw`No calculator is allowed. Show the work that leads to each answer.` }] }],
  },
};

export default {
  forms: [{
    id: "p112",
    name: "Topic 1.12 Quiz: Transformations of Functions",
    group: "Unit 1: Polynomial and Rational Functions",
    items: [
      { id: "p112-m01", type: "mcq", skill: "u1", topic: "1.12", calc: false, difficulty: "easy",
        question: String.raw`Which of the following describes the graph of $y = f\left(\frac{x}{2}\right)$ as a transformation of the graph of $y = f(x)$?`,
        choices: [String.raw`A horizontal dilation by a factor of $2$`, String.raw`A horizontal dilation by a factor of $\frac{1}{2}$`, String.raw`A vertical dilation by a factor of $2$`, String.raw`A vertical dilation by a factor of $\frac{1}{2}$`],
        why: [
          String.raw`Replacing $x$ with $\frac{x}{2}$ is a horizontal dilation by a factor of $2$: the point $(a, f(a))$ moves to $(2a, f(a))$, because $f\left(\frac{2a}{2}\right) = f(a)$.`,
          String.raw`For $y = f(bx)$ the horizontal factor is $\frac{1}{b}$. Here $b = \frac{1}{2}$, so the factor is $2$, not $\frac{1}{2}$.`,
          String.raw`The change is inside the function, to the input, so it is horizontal. A vertical dilation by a factor of $2$ is $y = 2f(x)$.`,
          String.raw`$y = \frac{1}{2}f(x)$ is a vertical dilation by $\frac{1}{2}$. Here the input is divided by $2$, which is horizontal.`,
        ], answer: 0 },
      { id: "p112-m02", type: "mcq", skill: "u1", topic: "1.12", calc: false, difficulty: "moderate",
        question: String.raw`The graph of $y = f(x)$ is reflected over the $y$-axis and then translated $3$ units to the right. Which of the following is an equation of the resulting graph?`,
        choices: [String.raw`$y = f(-x + 3)$`, String.raw`$y = f(-x - 3)$`, String.raw`$y = -f(x - 3)$`, String.raw`$y = f(-x) + 3$`],
        why: [
          String.raw`The reflection over the $y$-axis gives $y = f(-x)$. Translating $3$ units right replaces $x$ with $x - 3$: $y = f(-(x - 3)) = f(-x + 3)$.`,
          String.raw`$f(-x - 3) = f(-(x + 3))$, which translates $3$ units left after the reflection. The $x - 3$ replaces the whole input $x$.`,
          String.raw`$-f(x - 3)$ reflects over the $x$-axis, not the $y$-axis.`,
          String.raw`Adding $3$ to the output translates the graph up, not to the right.`,
        ], answer: 0 },
      { id: "p112-m03", type: "mcq", skill: "u1", topic: "1.12", calc: false, set: "p112-s1", difficulty: "easy",
        question: String.raw`Which of the following gives $g(x)$ in terms of $f$?`,
        choices: [String.raw`$g(x) = f(x - 4) - 2$`, String.raw`$g(x) = f(x + 4) - 2$`, String.raw`$g(x) = f(x - 2) - 4$`, String.raw`$g(x) = f(x - 4) + 2$`],
        why: [
          String.raw`Each point of $f$ moves $4$ units right and $2$ units down: $(-3, 1)$ goes to $(1, -1)$ and $(0, 0)$ goes to $(4, -2)$. A shift $4$ right replaces $x$ with $x - 4$, and a shift $2$ down subtracts $2$.`,
          String.raw`$f(x + 4)$ shifts the graph $4$ units left. The graph of $g$ is to the right of the graph of $f$.`,
          String.raw`This swaps the amounts. The point $(0, 0)$ moves $4$ units right and $2$ units down, to $(4, -2)$.`,
          String.raw`Adding $2$ shifts the graph up. The graph of $g$ is $2$ units lower than the graph of $f$.`,
        ], answer: 0 },
      { id: "p112-m04", type: "mcq", skill: "u1", topic: "1.12", calc: false, set: "p112-s1", difficulty: "moderate",
        question: String.raw`Let $h(x) = -2f(x + 1)$. What is the value of $h(0)$?`,
        choices: ["$-2$", "$-6$", "$2$", "$-3$"],
        why: [
          String.raw`$h(0) = -2f(0 + 1) = -2f(1)$. On the segment from $(0, 0)$ to $(2, 2)$, $f(1) = 1$, so $h(0) = -2$.`,
          String.raw`$-6 = -2f(-1)$, which uses $0 - 1$ as the input. The input of $f$ is $x + 1 = 1$.`,
          String.raw`$2 = 2f(1)$ drops the negative sign, which reflects the graph over the $x$-axis.`,
          String.raw`$-3 = -f(1) - 2$ treats the $-2$ as a shift down instead of a factor that multiplies $f(1)$.`,
        ], answer: 0 },
      { id: "p112-m05", type: "mcq", skill: "u1", topic: "1.12", calc: false, difficulty: "difficult",
        question: String.raw`The point $(4, 5)$ is on the graph of $y = f(x)$. Let $g(x) = -f(2x - 6) + 1$. Which of the following points must be on the graph of $g$?`,
        choices: ["$(5, -4)$", "$(8, -4)$", "$(5, -6)$", "$(14, -4)$"],
        why: [
          String.raw`$g(x)$ uses the value $f(4)$ when $2x - 6 = 4$, so $x = 5$. Then $g(5) = -f(4) + 1 = -5 + 1 = -4$, and $(5, -4)$ is on the graph of $g$.`,
          String.raw`$8 = \frac{4}{2} + 6$ divides first and then shifts by $6$. Since $2x - 6 = 2(x - 3)$, the shift is $3$ units, and $x = \frac{4 + 6}{2} = 5$.`,
          String.raw`$-6 = -(5 + 1)$ reflects after the vertical shift. In $-f(2x - 6) + 1$ the $1$ is added after the reflection.`,
          String.raw`$14 = 2(4) + 6$ multiplies the input by $2$. A factor of $2$ on $x$ inside $f$ divides horizontal distances by $2$.`,
        ], answer: 0 },
      { id: "p112-m06", type: "mcq", skill: "u1", topic: "1.12", calc: true, difficulty: "easy",
        question: String.raw`Let $f(x) = 1.2x^{2} - 3.1x$. The graph of $g$ is the graph of $f$ dilated horizontally by a factor of $2.5$. What is the value of $g(4)$?`,
        choices: ["$-1.888$", "$89.000$", "$17.000$", "$2.720$"],
        why: [
          String.raw`A horizontal dilation by a factor of $2.5$ gives $g(x) = f\left(\frac{x}{2.5}\right)$, so $g(4) = f(1.6) = 1.2(2.56) - 3.1(1.6) = 3.072 - 4.96 = -1.888$.`,
          String.raw`$89.000 = f(10)$ multiplies the input by $2.5$. That is $f(2.5x)$, a horizontal dilation by a factor of $\frac{1}{2.5}$.`,
          String.raw`$17.000 = 2.5f(4)$ is a vertical dilation by a factor of $2.5$, not a horizontal one.`,
          String.raw`$2.720 = \frac{f(4)}{2.5}$ divides the output by $2.5$, which is a vertical dilation.`,
        ], answer: 0 },
      { id: "p112-f1a", type: "frq", skill: "u1", topic: "1.12", calc: false, set: "p112-s2", part: "(a)",
        prompt: String.raw`Describe, in order, the transformations that map the graph of $f$ onto the graph of $g$. Then write an expression for $g(x)$ as a polynomial in standard form.`,
        rows: [
          { name: "Transformations", earns: String.raw`A translation $2$ units left, a reflection over the $x$-axis, and then a translation $3$ units up.` },
          { name: "Expression", earns: String.raw`$g(x) = -x^{2} + 7$, with the work of substituting $x + 2$ into $f$.` },
        ],
        solution: String.raw`Replacing $x$ with $x + 2$ translates the graph $2$ units left. Multiplying the output by $-1$ reflects it over the $x$-axis, and adding $3$ translates it $3$ units up. $$f(x + 2) = (x + 2)^{2} - 4(x + 2) = x^{2} + 4x + 4 - 4x - 8 = x^{2} - 4$$ so $g(x) = -(x^{2} - 4) + 3 = -x^{2} + 7$.` },
      { id: "p112-f1b", type: "frq", skill: "u1", topic: "1.12", calc: false, set: "p112-s2", part: "(b)",
        prompt: String.raw`Find the domain of $g$.`,
        rows: [
          { name: "Domain", earns: String.raw`$-2 \le x \le 3$, because $g$ is defined when $0 \le x + 2 \le 5$.` },
        ],
        solution: String.raw`$g(x)$ is defined when $x + 2$ is in the domain of $f$: $0 \le x + 2 \le 5$, so $-2 \le x \le 3$. This matches the translation $2$ units left of the interval $[0, 5]$.` },
      { id: "p112-f1c", type: "frq", skill: "u1", topic: "1.12", calc: false, set: "p112-s2", part: "(c)",
        prompt: String.raw`Find the range of $g$.`,
        rows: [
          { name: "Range", earns: String.raw`$-2 \le g(x) \le 7$, from the range of $f$, $[-4, 5]$, reflected over the $x$-axis and shifted up $3$ units.` },
        ],
        solution: String.raw`On $[0, 5]$, $f(x) = (x - 2)^{2} - 4$ has its least value $f(2) = -4$ and its greatest value $f(5) = 5$, so the range of $f$ is $[-4, 5]$. A horizontal translation does not change the range. Reflecting over the $x$-axis gives $[-5, 4]$, and shifting up $3$ gives $[-2, 7]$. Check with $g(x) = -x^{2} + 7$ on $[-2, 3]$: $g(0) = 7$ and $g(3) = -2$.` },
    ],
  }],
};

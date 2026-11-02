import { graph } from "../../plot.js";

export const sets = {
  "q204-s1": {
    name: "The graph of f",
    label: "Graph",
    intro: String.raw`The graph of the function $f$, defined on the closed interval $[-4, 5]$, is shown below. It is made of three line segments, with open circles at $(-2, 2)$ and $(3, 0)$ and filled circles at $(-2, -1)$ and $(3, 2)$.`,
    sources: [{ title: "", blocks: [{ svg: graph({ x: [-4, 5], y: [-3, 3], xname: "x", yname: "y", segments: [[-4, 0, -2, 2], [-2, -1, 1, 2], [1, 2, 5, -2]], dots: [[-4, 0, "closed"], [-2, 2, "open"], [-2, -1, "closed"], [3, 0, "open"], [3, 2, "closed"], [5, -2, "closed"]], alt: "Graph of f on [-4, 5]. A segment rises from (-4, 0) to an open circle at (-2, 2). A second segment rises from a filled point at (-2, -1) to (1, 2). A third segment falls from (1, 2) to (5, -2), with an open circle at (3, 0) on it and a filled point above it at (3, 2)." }) }] }],
  },
  "q204-s2": {
    name: "A piecewise function",
    label: "Free response",
    intro: String.raw`Let $f$ be the function defined by $$f(x) = \begin{cases} 2x + b & \text{for } x \le 3 \\ x^{2} - 4x + 5 & \text{for } x > 3 \end{cases}$$ where $b$ is a constant.`,
    sources: [{ title: "", blocks: [{ p: String.raw`Answer each part. Show the work that leads to your answers.` }] }],
  },
};

export default {
  forms: [{
    id: "q204",
    name: "Topic 2.4 Quiz: Differentiability and Continuity",
    group: "Unit 2: Differentiation: Definition and Fundamental Properties",
    items: [
      { id: "q204-m01", type: "mcq", skill: "u2", topic: "2.4", calc: false, set: "q204-s1",
        question: String.raw`On the open interval $-4 < x < 5$, at which values of $c$ does $\displaystyle \lim_{x \to c} f(x)$ exist but $f$ is not differentiable at $x = c$?`,
        choices: ["$c = 1$ and $c = 3$ only", "$c = 1$ only", "$c = 3$ only", "$c = -2$, $c = 1$, and $c = 3$"],
        why: [
          String.raw`At $c = 1$ the graph is unbroken, so the limit is $2$, but the corner (slope $1$ on the left, $-1$ on the right) means $f'(1)$ does not exist. At $c = 3$ the limit is $0$, but $f(3) = 2$, so $f$ is not continuous and therefore not differentiable. At $c = -2$ the one-sided limits are $2$ and $-1$, so the limit does not exist.`,
          String.raw`At $c = 3$ the limit also exists: both sides approach $0$. Since $f(3) = 2 \ne 0$, $f$ is not continuous at $x = 3$, so it is not differentiable there.`,
          String.raw`At $c = 1$ the limit exists and equals $2$, but the slope changes from $1$ to $-1$. A corner means $f$ is not differentiable there.`,
          String.raw`At $c = -2$ the limit does not exist: the graph approaches $2$ from the left and $-1$ from the right.`,
        ], answer: 0 },
      { id: "q204-m02", type: "mcq", skill: "u2", topic: "2.4", calc: false, set: "q204-s1",
        question: String.raw`What is the value of $\displaystyle \lim_{h \to 0^{-}} \dfrac{f(1 + h) - f(1)}{h}$?`,
        choices: ["$1$", "$-1$", "$0$", "The limit does not exist."],
        why: [
          String.raw`For $h < 0$, the points $(1 + h, f(1 + h))$ and $(1, 2)$ both lie on the segment from $(-2, -1)$ to $(1, 2)$, whose slope is $\dfrac{2 - (-1)}{1 - (-2)} = 1$. Every quotient equals $1$, so the left-hand limit is $1$.`,
          String.raw`$-1$ is the slope of the segment to the right of $x = 1$, which gives the limit as $h \to 0^{+}$.`,
          String.raw`$0$ is the average of the two one-sided slopes, $1$ and $-1$. A one-sided limit uses only the side it names.`,
          String.raw`The two-sided limit does not exist because the one-sided limits differ, but this is the left-hand limit only, and it exists.`,
        ], answer: 0 },
      { id: "q204-m03", type: "mcq", skill: "u2", topic: "2.4", calc: false,
        question: String.raw`Which of the following statements is true for every function $f$ and every real number $a$?`,
        choices: [
          String.raw`If $f$ is differentiable at $x = a$, then $f$ is continuous at $x = a$.`,
          String.raw`If $f$ is continuous at $x = a$, then $f$ is differentiable at $x = a$.`,
          String.raw`If $f$ is not differentiable at $x = a$, then $f$ is not continuous at $x = a$.`,
          String.raw`If $\displaystyle \lim_{x \to a} f(x)$ exists, then $f$ is differentiable at $x = a$.`,
        ],
        why: [
          String.raw`Differentiability implies continuity: if $f'(a)$ exists, then $\displaystyle \lim_{x \to a} \left( f(x) - f(a) \right) = \lim_{x \to a} \frac{f(x) - f(a)}{x - a} \cdot (x - a) = f'(a) \cdot 0 = 0$, so $\displaystyle \lim_{x \to a} f(x) = f(a)$.`,
          String.raw`This is the converse, and it is false: $f(x) = |x|$ is continuous at $x = 0$ but has a corner there, so it is not differentiable.`,
          String.raw`This is false: $f(x) = |x|$ is not differentiable at $x = 0$ but is continuous there.`,
          String.raw`This is false: a limit can exist where $f$ is not even defined or not continuous, and then $f$ is not differentiable. For example, $\dfrac{x^{2} - 1}{x - 1}$ has a limit at $x = 1$ but is undefined there.`,
        ], answer: 0 },
      { id: "q204-m04", type: "mcq", skill: "u2", topic: "2.4", calc: false,
        question: String.raw`Let $g(x) = |2x - 6|$. Which of the following is true about $g$ at $x = 3$?`,
        choices: [
          String.raw`$g$ is continuous but not differentiable at $x = 3$.`,
          String.raw`$g$ is differentiable but not continuous at $x = 3$.`,
          String.raw`$g$ is both continuous and differentiable at $x = 3$.`,
          String.raw`$g$ is neither continuous nor differentiable at $x = 3$.`,
        ],
        why: [
          String.raw`$\displaystyle \lim_{x \to 3} g(x) = 0 = g(3)$, so $g$ is continuous. For $x < 3$, $g(x) = 6 - 2x$ with slope $-2$, and for $x > 3$, $g(x) = 2x - 6$ with slope $2$. The one-sided limits of the difference quotient are $-2$ and $2$, so $g'(3)$ does not exist.`,
          String.raw`A function that is differentiable at a point must be continuous there, so this can never happen.`,
          String.raw`The graph has a corner at $(3, 0)$: the difference quotient has limit $-2$ from the left and $2$ from the right, so $g$ is not differentiable at $x = 3$.`,
          String.raw`$g$ is continuous at $x = 3$: both one-sided limits equal $0$, which is $g(3)$. Only differentiability fails.`,
        ], answer: 0 },
      { id: "q204-m05", type: "mcq", skill: "u2", topic: "2.4", calc: false,
        question: String.raw`Let $f(x) = x|x|$. Which of the following is true about $f$ at $x = 0$?`,
        choices: [
          String.raw`$f$ is differentiable at $x = 0$, and $f'(0) = 0$.`,
          String.raw`$f$ is continuous but not differentiable at $x = 0$, because the graph of $|x|$ has a corner there.`,
          String.raw`$f$ is not continuous at $x = 0$.`,
          String.raw`$f$ is differentiable at $x = 0$, and $f'(0) = 1$.`,
        ],
        why: [
          String.raw`$f(0) = 0$, so the difference quotient is $\dfrac{f(0 + h) - f(0)}{h} = \dfrac{h|h|}{h} = |h|$ for $h \ne 0$. Its limit as $h \to 0$ is $0$ from both sides, so $f'(0) = 0$.`,
          String.raw`$|x|$ has a corner at $x = 0$, but multiplying by $x$ removes it. The difference quotient for $f$ is $|h|$, which approaches $0$ from both sides.`,
          String.raw`$\displaystyle \lim_{x \to 0} x|x| = 0 = f(0)$, so $f$ is continuous at $x = 0$.`,
          String.raw`The difference quotient is $|h|$, which approaches $0$, not $1$. A slope of $1$ is the slope of $|x|$ to the right of $0$.`,
        ], answer: 0 },
      { id: "q204-m06", type: "mcq", skill: "u2", topic: "2.4", calc: false,
        question: String.raw`Let $f(x) = \sqrt[3]{x - 2} + 1$. Which of the following is true about $f$ at $x = 2$?`,
        choices: [
          String.raw`$f$ is continuous at $x = 2$, but not differentiable, because $\dfrac{f(2 + h) - f(2)}{h}$ grows without bound as $h \to 0$.`,
          String.raw`$f$ is not continuous at $x = 2$, so it is not differentiable there.`,
          String.raw`$f$ is differentiable at $x = 2$, and $f'(2) = 0$.`,
          String.raw`$f$ is differentiable at $x = 2$, and $f'(2) = 1$.`,
        ],
        why: [
          String.raw`$\displaystyle \lim_{x \to 2} f(x) = 1 = f(2)$, so $f$ is continuous. The difference quotient is $\dfrac{\sqrt[3]{h}}{h} = \dfrac{1}{h^{2/3}}$, which increases without bound as $h \to 0$. The graph has a vertical tangent line at $x = 2$.`,
          String.raw`The cube root is defined for every real number and $\displaystyle \lim_{x \to 2} f(x) = 1 = f(2)$, so $f$ is continuous at $x = 2$.`,
          String.raw`At $x = 2$ the tangent line is vertical, not horizontal. The difference quotient $\dfrac{1}{h^{2/3}}$ has no finite limit.`,
          String.raw`$1$ is the value $f(2)$. The difference quotient $\dfrac{1}{h^{2/3}}$ has no finite limit, so $f'(2)$ does not exist.`,
        ], answer: 0 },
      { id: "q204-f1a", type: "frq", skill: "u2", topic: "2.4", calc: false, set: "q204-s2", part: "(a)",
        prompt: String.raw`Find the value of $b$ for which $f$ is continuous at $x = 3$. Justify your answer using the definition of continuity.`,
        rows: [
          { name: "Limits", earns: String.raw`$\displaystyle \lim_{x \to 3^{-}} f(x) = 6 + b = f(3)$ and $\displaystyle \lim_{x \to 3^{+}} f(x) = 9 - 12 + 5 = 2$` },
          { name: "Answer with justification", earns: String.raw`$b = -4$, because continuity requires $\displaystyle \lim_{x \to 3} f(x) = f(3)$, so both one-sided limits must equal $6 + b$.` },
        ],
        solution: String.raw`$f(3) = 2(3) + b = 6 + b$. From the left, $\displaystyle \lim_{x \to 3^{-}} (2x + b) = 6 + b$. From the right, $\displaystyle \lim_{x \to 3^{+}} \left( x^{2} - 4x + 5 \right) = 9 - 12 + 5 = 2$. $f$ is continuous at $x = 3$ when $\displaystyle \lim_{x \to 3} f(x) = f(3)$, which requires $6 + b = 2$. So $b = -4$.` },
      { id: "q204-f1b", type: "frq", skill: "u2", topic: "2.4", calc: false, set: "q204-s2", part: "(b)",
        prompt: String.raw`Let $b = -4$. Use one-sided limits of the difference quotient $\dfrac{f(3 + h) - f(3)}{h}$ to determine whether $f$ is differentiable at $x = 3$. Justify your answer.`,
        rows: [
          { name: "One-sided limits", earns: String.raw`$\displaystyle \lim_{h \to 0^{-}} \frac{2(3 + h) - 4 - 2}{h} = 2$ and $\displaystyle \lim_{h \to 0^{+}} \frac{(3 + h)^{2} - 4(3 + h) + 5 - 2}{h} = 2$` },
          { name: "Conclusion", earns: String.raw`$f$ is differentiable at $x = 3$ with $f'(3) = 2$, because the two one-sided limits exist and are equal.` },
        ],
        solution: String.raw`With $b = -4$, $f(3) = 2$. For $h < 0$, $\dfrac{f(3 + h) - f(3)}{h} = \dfrac{2(3 + h) - 4 - 2}{h} = \dfrac{2h}{h} = 2$, so the left-hand limit is $2$. For $h > 0$, $$\frac{f(3 + h) - f(3)}{h} = \frac{9 + 6h + h^{2} - 12 - 4h + 5 - 2}{h} = \frac{2h + h^{2}}{h} = 2 + h,$$ so the right-hand limit is $\displaystyle \lim_{h \to 0^{+}} (2 + h) = 2$. The one-sided limits exist and are equal, so $f$ is differentiable at $x = 3$ and $f'(3) = 2$.` },
    ],
  }],
};

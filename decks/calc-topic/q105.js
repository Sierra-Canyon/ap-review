import { graph } from "../../plot.js";

// f: x + 1 for x < 1, f(1) = 0, -2 for x > 1.  g: 1 for x < 1, x - 2 for x >= 1.
const fGraph = graph({
  x: [-2, 4], y: [-3, 3], xname: "x", yname: "y",
  segments: [[-2, -1, 1, 2], [1, -2, 4, -2]],
  dots: [[-2, -1, "closed"], [1, 2, "open"], [1, 0, "closed"], [1, -2, "open"], [4, -2, "closed"]],
  alt: "Graph of f for x from -2 to 4. A segment rises from a closed dot at (-2, -1) to an open circle at (1, 2). A closed dot is at (1, 0). A horizontal segment at y = -2 runs from an open circle at (1, -2) to a closed dot at (4, -2).",
});
const gGraph = graph({
  x: [-2, 4], y: [-3, 3], xname: "x", yname: "y",
  segments: [[-2, 1, 1, 1], [1, -1, 4, 2]],
  dots: [[-2, 1, "closed"], [1, 1, "open"], [1, -1, "closed"], [4, 2, "closed"]],
  alt: "Graph of g for x from -2 to 4. A horizontal segment at y = 1 runs from a closed dot at (-2, 1) to an open circle at (1, 1). A segment rises from a closed dot at (1, -1) to a closed dot at (4, 2).",
});

export const sets = {
  "q105-s1": {
    name: "The graphs of f and g", label: "Graphs",
    intro: String.raw`The graphs of the functions $f$ and $g$ are shown below.`,
    sources: [{ title: "", blocks: [{ p: "Graph of $f$" }, { svg: fGraph }, { p: "Graph of $g$" }, { svg: gGraph }] }],
  },
  "q105-s2": {
    name: "Limits and values of f and g", label: "Free response",
    intro: String.raw`The functions $f$ and $g$ have the limits and values shown in the table.`,
    sources: [{ title: "", blocks: [{ table: {
      head: ["Function", "Limit as $x \\to 1$", "Value at $x = 1$"],
      rows: [["$f$", String.raw`$\lim_{x \to 1} f(x) = 4$`, "$f(1) = 2$"], ["$g$", String.raw`$\lim_{x \to 1} g(x) = -1$`, "$g(1) = 3$"]],
    } }] }],
  },
};

const items = [
  { id: "q105-m1", type: "mcq", skill: "u1", topic: "1.5", calc: false,
    stem: String.raw`$\displaystyle \lim_{x \to 2} f(x) = -3$ and $\displaystyle \lim_{x \to 2} g(x) = 4$.`,
    question: String.raw`What is $\displaystyle \lim_{x \to 2} \left[ f(x)g(x) - 5f(x) \right]$?`,
    choices: ["$3$", "$-27$", "$-9$", "$-12$"],
    why: [
      String.raw`By the product, constant multiple, and difference properties, the limit is $(-3)(4) - 5(-3) = -12 + 15 = 3$.`,
      String.raw`$-27$ comes from $-12 - 15$. Subtracting $5(-3) = -15$ adds $15$.`,
      String.raw`$-9$ drops the factor $5$: $(-3)(4) - (-3) = -9$.`,
      String.raw`$-12$ is only the limit of $f(x)g(x)$. The limit of $-5f(x)$, which is $15$, was left out.`,
    ], answer: 0 },
  { id: "q105-m2", type: "mcq", skill: "u1", topic: "1.5", calc: false,
    stem: String.raw`$\displaystyle \lim_{x \to -1} f(x) = 6$ and $\displaystyle \lim_{x \to -1} g(x) = 1$.`,
    question: String.raw`What is $\displaystyle \lim_{x \to -1} \dfrac{f(x)}{g(x) + 2}$?`,
    choices: ["$2$", "$6$", String.raw`$\frac{1}{2}$`, String.raw`$\frac{8}{3}$`],
    why: [
      String.raw`The limit of the denominator is $1 + 2 = 3$, which is not $0$, so the quotient property applies: $\dfrac{6}{3} = 2$.`,
      String.raw`$6$ is $\frac{6}{1}$: the $2$ was not added to the limit of $g(x)$.`,
      String.raw`$\frac{1}{2}$ is the reciprocal, $\frac{3}{6}$. The limit of $f(x)$ goes in the numerator.`,
      String.raw`$\frac{8}{3}$ adds $2$ to the numerator as well, $\frac{6 + 2}{1 + 2}$. Only the denominator is $g(x) + 2$.`,
    ], answer: 0 },
  { id: "q105-m3", type: "mcq", skill: "u1", topic: "1.5", calc: false, set: "q105-s1",
    question: String.raw`What is $\displaystyle \lim_{x \to 1} \left[ f(x)g(x) \right]$?`,
    choices: ["$2$", "The limit does not exist.", "$0$", "$-2$"],
    why: [
      String.raw`From the left, $f(x) \to 2$ and $g(x) \to 1$, so $f(x)g(x) \to 2$. From the right, $f(x) \to -2$ and $g(x) \to -1$, so $f(x)g(x) \to 2$. Both one-sided limits of the product are $2$, so the limit is $2$.`,
      String.raw`Neither $\lim_{x \to 1} f(x)$ nor $\lim_{x \to 1} g(x)$ exists, so the product property cannot be used. The product still has a limit, because both of its one-sided limits equal $2$.`,
      String.raw`$0$ is $f(1)g(1) = (0)(-1)$. The limit depends on the values near $x = 1$, not at $x = 1$.`,
      String.raw`$-2$ multiplies the left-hand limit of $f$, $2$, by the right-hand limit of $g$, $-1$. Each one-sided limit of the product uses both functions on the same side.`,
    ], answer: 0 },
  { id: "q105-m4", type: "mcq", skill: "u1", topic: "1.5", calc: false,
    question: String.raw`What is $\displaystyle \lim_{x \to \pi/6} \left( 4\sin^2 x + \cos(2x) \right)$?`,
    choices: [String.raw`$\frac{3}{2}$`, String.raw`$\frac{9}{2}$`, String.raw`$1 + \sqrt{3}$`, String.raw`$\frac{3}{4}$`],
    why: [
      String.raw`Limits of sums, products, and compositions of sine and cosine are found by substitution: $4\left(\dfrac{1}{2}\right)^2 + \cos\left(\dfrac{\pi}{3}\right) = 1 + \dfrac{1}{2} = \dfrac{3}{2}$.`,
      String.raw`$\frac{9}{2}$ squares the $4$ as well: $(4 \sin x)^2 = 4$ at $x = \frac{\pi}{6}$, but $4 \sin^2 x = 1$.`,
      String.raw`$1 + \sqrt{3}$ replaces $\cos(2x)$ with $2\cos x = \sqrt{3}$. At $x = \frac{\pi}{6}$, $\cos(2x) = \cos\frac{\pi}{3} = \frac{1}{2}$.`,
      String.raw`$\frac{3}{4}$ drops the factor $4$: $\left(\frac{1}{2}\right)^2 + \frac{1}{2} = \frac{3}{4}$.`,
    ], answer: 0 },
  { id: "q105-m5", type: "mcq", skill: "u1", topic: "1.5", calc: false,
    stem: String.raw`For a function $f$, $\displaystyle \lim_{x \to 2} f(x) = 3$ and $f(2) = 5$. Let $g(x) = x^2 + 1$.`,
    question: String.raw`What is $\displaystyle \lim_{x \to 2} g(f(x))$?`,
    choices: ["$10$", "$26$", "$5$", "$9$"],
    why: [
      String.raw`As $x \to 2$, $f(x) \to 3$, and $g$ is a polynomial, so $g(f(x)) \to g(3) = 3^2 + 1 = 10$.`,
      String.raw`$26$ is $g(f(2)) = g(5)$. The limit uses the value that $f(x)$ approaches, $3$, not $f(2)$.`,
      String.raw`$5$ is $g(2)$. It evaluates $g$ at the number $x$ approaches instead of at the number $f(x)$ approaches.`,
      String.raw`$9$ is $3^2$. The $+1$ in $g(x) = x^2 + 1$ was dropped.`,
    ], answer: 0 },
  { id: "q105-m6", type: "mcq", skill: "u1", topic: "1.5", calc: false,
    question: String.raw`If $\displaystyle \lim_{x \to a} f(x) = 0$ and $\displaystyle \lim_{x \to a} g(x) = 0$, which of the following limits must equal $0$?
I. $\displaystyle \lim_{x \to a} \left[ f(x) + g(x) \right]$
II. $\displaystyle \lim_{x \to a} \left[ f(x)g(x) \right]$
III. $\displaystyle \lim_{x \to a} \dfrac{f(x)}{g(x)}$`,
    choices: ["I and II only", "I only", "II only", "I, II, and III"],
    why: [
      String.raw`By the sum and product properties, the limits in I and II are $0 + 0 = 0$ and $0 \cdot 0 = 0$. The quotient property does not apply to III, because the limit of the denominator is $0$. For example, $f(x) = 2(x - a)$ and $g(x) = x - a$ give a limit of $2$ in III.`,
      String.raw`II must also equal $0$: by the product property, its limit is $0 \cdot 0 = 0$.`,
      String.raw`I must also equal $0$: by the sum property, its limit is $0 + 0 = 0$.`,
      String.raw`III does not have to equal $0$. The quotient property needs a denominator whose limit is not $0$, and $f(x) = 2(x - a)$ with $g(x) = x - a$ gives a limit of $2$.`,
    ], answer: 0 },

  { id: "q105-f1a", type: "frq", skill: "u1", topic: "1.5", calc: false, set: "q105-s2", part: "(a)",
    prompt: String.raw`Find $\displaystyle \lim_{x \to 1} \left[ 3f(x) - x\,g(x) \right]$. Show the work that leads to your answer.`,
    rows: [
      { name: "Answer with work", earns: String.raw`$3(4) - (1)(-1) = 13$, using the limits of $f$ and $g$, not the values $f(1)$ and $g(1)$.` },
    ],
    solution: String.raw`By the difference, constant multiple, and product properties of limits,
$$\lim_{x \to 1} \left[ 3f(x) - x\,g(x) \right] = 3 \lim_{x \to 1} f(x) - \left( \lim_{x \to 1} x \right)\left( \lim_{x \to 1} g(x) \right) = 3(4) - (1)(-1) = 13$$` },
  { id: "q105-f1b", type: "frq", skill: "u1", topic: "1.5", calc: false, set: "q105-s2", part: "(b)",
    prompt: String.raw`Explain why $\displaystyle \lim_{x \to 1} \dfrac{f(x)}{g(x) + x^2}$ cannot be found with the quotient property of limits. Does this limit exist? Give a reason for your answer.`,
    rows: [
      { name: "Denominator", earns: String.raw`$\lim_{x \to 1} \left( g(x) + x^2 \right) = -1 + 1 = 0$, so the quotient property does not apply.` },
      { name: "Conclusion with reason", earns: String.raw`The limit does not exist, because the numerator approaches $4$ while the denominator approaches $0$, so the quotient grows without bound in absolute value.` },
    ],
    solution: String.raw`$\lim_{x \to 1} \left( g(x) + x^2 \right) = -1 + 1 = 0$. The quotient property requires the limit of the denominator to be nonzero, so it does not apply.
The numerator approaches $4$ and the denominator approaches $0$. For $x$ near $1$, the quotient is a number near $4$ divided by a number near $0$, so its absolute value grows without bound. The limit does not exist.` },
  { id: "q105-f1c", type: "frq", skill: "u1", topic: "1.5", calc: false, set: "q105-s2", part: "(c)",
    prompt: String.raw`Find the value of the constant $k$ for which $\displaystyle \lim_{x \to 1} \left[ f(x) + k\,g(x) \right] = f(1) + k\,g(1)$.`,
    rows: [
      { name: "Answer with equation", earns: String.raw`Writes $4 - k = 2 + 3k$ and finds $k = \dfrac{1}{2}$.` },
    ],
    solution: String.raw`By the sum and constant multiple properties, $\lim_{x \to 1} \left[ f(x) + k\,g(x) \right] = 4 + k(-1) = 4 - k$. Also $f(1) + k\,g(1) = 2 + 3k$.
$$4 - k = 2 + 3k \implies 2 = 4k \implies k = \dfrac{1}{2}$$
Check: both sides equal $\dfrac{7}{2}$.` },
];

export default { forms: [{ id: "q105", name: "Topic 1.5 Quiz: Algebraic Properties of Limits", group: "Unit 1: Limits and Continuity", items }] };

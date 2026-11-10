import { graph } from "../../plot.js";

// f'(x) = (x + 2)(x - 1)(x - 3) / 4 on [-3, 4]
const dfGraph = graph({
  x: [-3, 4], y: [-6, 5], xname: "x", yname: "y",
  fns: [{ f: (x) => ((x + 2) * (x - 1) * (x - 3)) / 4, from: -3, to: 4, label: "y = f'(x)", labelAt: 3.3 }],
  alt: "Graph of y = f'(x) for x from -3 to 4. The curve starts at (-3, -6), rises and crosses the x-axis at x = -2, reaches a high point of about 2 near x = -0.8, falls and crosses the x-axis at x = 1, reaches a low point near x = 2.1, and rises to cross the x-axis at x = 3, ending at (4, 4.5). The curve is above the x-axis for -2 < x < 1 and 3 < x < 4, and below it for -3 < x < -2 and 1 < x < 3.",
});

export const sets = {
  "q503-s1": {
    name: "The graph of f'", label: "Graph",
    intro: String.raw`The graph of $f'$, the derivative of a function $f$, is shown below for $-3 \le x \le 4$.`,
    sources: [{ title: "", blocks: [{ svg: dfGraph }] }],
  },
  "q503-s9": {
    name: "The function f", label: "Free response",
    intro: String.raw`Let $f$ be the function defined by $f(x) = x + 2\sin x$ for $0 \le x \le 2\pi$.`,
    sources: [{ title: "", blocks: [{ p: String.raw`$$f(x) = x + 2\sin x, \quad 0 \le x \le 2\pi$$` }] }],
  },
};

const items = [
  { id: "q503-m01", type: "mcq", skill: "u5", topic: "5.3", calc: false, difficulty: "easy",
    question: String.raw`On which interval is $f(x) = x^3 - 3x^2 - 9x + 4$ decreasing?`,
    choices: [String.raw`$(-1, 3)$`, String.raw`$(-\infty, -1)$ and $(3, \infty)$`, String.raw`$(-3, 1)$`, String.raw`$(-\infty, 1)$`],
    why: [
      String.raw`$f'(x) = 3x^2 - 6x - 9 = 3(x - 3)(x + 1)$. $f'(x) < 0$ between the zeros, on $(-1, 3)$, so $f$ is decreasing there.`,
      String.raw`$f'(x) > 0$ on these intervals, so $f$ is increasing there, not decreasing.`,
      String.raw`This factors $x^2 - 2x - 3$ as $(x + 3)(x - 1)$, with the signs reversed. The zeros of $f'$ are $-1$ and $3$.`,
      String.raw`$f''(x) = 6x - 6 < 0$ on $(-\infty, 1)$, so this is where $f$ is concave down. Decreasing depends on the sign of $f'$.`,
    ], answer: 0 },
  { id: "q503-m02", type: "mcq", skill: "u5", topic: "5.3", calc: false, difficulty: "moderate", set: "q503-s1",
    question: String.raw`Which of the following must be true? I. $f(1) > f(-2)$ II. $f(-3) < f(-2)$ III. $f(3) < f(1)$`,
    choices: ["I and III only", "I and II only", "II and III only", "I, II, and III"],
    why: [
      String.raw`I: $f'(x) > 0$ on $(-2, 1)$, so $f$ is increasing on $[-2, 1]$ and $f(1) > f(-2)$. II is false: $f'(x) < 0$ on $(-3, -2)$, so $f$ is decreasing there and $f(-3) > f(-2)$. III: $f'(x) < 0$ on $(1, 3)$, so $f$ is decreasing on $[1, 3]$ and $f(3) < f(1)$.`,
      String.raw`II is false. The graph of $f'$ rises on $(-3, -2)$, but it is below the $x$-axis, so $f$ is decreasing there. Also, III is true: $f'(x) < 0$ on $(1, 3)$.`,
      String.raw`I is true: the graph of $f'$ is above the $x$-axis on $(-2, 1)$, so $f$ increases from $x = -2$ to $x = 1$. II is false, since $f'(x) < 0$ on $(-3, -2)$.`,
      String.raw`II is false. A rising graph of $f'$ means the graph of $f$ is concave up, not that $f$ is increasing. On $(-3, -2)$, $f'(x) < 0$, so $f(-3) > f(-2)$.`,
    ], answer: 0 },
  { id: "q503-m03", type: "mcq", skill: "u5", topic: "5.3", calc: false, difficulty: "easy", set: "q503-s1",
    question: String.raw`On which of the following intervals is $f$ increasing?`,
    choices: [String.raw`$(-2, 1)$`, String.raw`$(1, 3)$`, String.raw`$(-3, -2)$`, String.raw`$(-3, 1)$`],
    why: [
      String.raw`$f$ is increasing where $f'(x) > 0$, that is, where the graph of $f'$ is above the $x$-axis. On $(-2, 1)$ it is.`,
      String.raw`The graph of $f'$ is below the $x$-axis on $(1, 3)$, so $f$ is decreasing there.`,
      String.raw`$f'$ itself is increasing on $(-3, -2)$, but $f'(x) < 0$ there, so $f$ is decreasing.`,
      String.raw`$f'(x) < 0$ on $(-3, -2)$, so $f$ is not increasing on all of $(-3, 1)$.`,
    ], answer: 0 },
  { id: "q503-m04", type: "mcq", skill: "u5", topic: "5.3", calc: false, difficulty: "moderate",
    stem: String.raw`Let $f(x) = x - 2\sqrt{x}$ for $x \ge 0$.`,
    question: String.raw`Which of the following is true?`,
    choices: [
      String.raw`$f$ is decreasing on $(0, 1)$ and increasing on $(1, \infty)$.`,
      String.raw`$f$ is increasing on $(0, 1)$ and decreasing on $(1, \infty)$.`,
      String.raw`$f$ is decreasing on $(0, 4)$ and increasing on $(4, \infty)$.`,
      String.raw`$f$ is decreasing on $\left(0, \frac{1}{4}\right)$ and increasing on $\left(\frac{1}{4}, \infty\right)$.`,
    ],
    why: [
      String.raw`$f'(x) = 1 - \dfrac{1}{\sqrt{x}} = \dfrac{\sqrt{x} - 1}{\sqrt{x}}$ for $x > 0$. This is negative for $0 < x < 1$ and positive for $x > 1$.`,
      String.raw`This reverses the signs. For $0 < x < 1$, $\dfrac{1}{\sqrt{x}} > 1$, so $f'(x) < 0$.`,
      String.raw`$f(0) = f(4) = 0$ and $f(x) < 0$ on $(0, 4)$, but those are values of $f$. Increasing and decreasing depend on the sign of $f'$, which changes at $x = 1$.`,
      String.raw`This uses $\dfrac{1}{2\sqrt{x}}$ for the derivative of $2\sqrt{x}$. The derivative of $2\sqrt{x}$ is $2 \cdot \dfrac{1}{2\sqrt{x}} = \dfrac{1}{\sqrt{x}}$.`,
    ], answer: 0 },
  { id: "q503-m05", type: "mcq", skill: "u5", topic: "5.3", calc: false, difficulty: "moderate",
    question: String.raw`On which interval is $f(x) = \dfrac{x^2}{x^2 + 9}$ increasing?`,
    choices: [String.raw`$(0, \infty)$`, String.raw`$(-\infty, 0)$`, String.raw`$(-\infty, 0)$ and $(0, \infty)$`, String.raw`$(-\infty, \infty)$`],
    why: [
      String.raw`$f'(x) = \dfrac{2x\left(x^2 + 9\right) - x^2(2x)}{\left(x^2 + 9\right)^2} = \dfrac{18x}{\left(x^2 + 9\right)^2}$. The denominator is positive, so $f'(x) > 0$ exactly when $x > 0$.`,
      String.raw`This reverses the order of subtraction in the quotient rule, which gives $-\dfrac{18x}{\left(x^2 + 9\right)^2}$. With the correct order, $f'(x) < 0$ for $x < 0$.`,
      String.raw`$f(x) > 0$ for every $x \ne 0$. Increasing depends on the sign of $f'$, not of $f$.`,
      String.raw`This drops the factor $x$ when simplifying the numerator and gets $\dfrac{18}{\left(x^2 + 9\right)^2} > 0$. The numerator is $18x$, which is negative for $x < 0$.`,
    ], answer: 0 },
  { id: "q503-m06", type: "mcq", skill: "u5", topic: "5.3", calc: true, difficulty: "moderate",
    stem: String.raw`A function $f$ has derivative $f'(x) = 2\cos x + x - 2$.`,
    question: String.raw`On which interval within $0 < x < 4$ is $f$ decreasing?`,
    choices: [String.raw`$(1.109, 3.698)$`, String.raw`$(0, 1.109)$`, String.raw`$(0.524, 2.618)$`, String.raw`$(3.698, 4)$`],
    why: [
      String.raw`Solving $2\cos x + x - 2 = 0$ with a calculator on $(0, 4)$ gives $x \approx 1.109$ and $x \approx 3.698$. $f'(x) < 0$ between them (for example, $f'(2) \approx -0.832$), so $f$ is decreasing on $(1.109, 3.698)$.`,
      String.raw`$f'(x) > 0$ on $(0, 1.109)$ (for example, $f'(0.5) \approx 0.255$), so $f$ is increasing there.`,
      String.raw`$f''(x) = 1 - 2\sin x < 0$ on $\left(\dfrac{\pi}{6}, \dfrac{5\pi}{6}\right)$, so $f'$ is decreasing there. $f$ decreases only where $f'(x) < 0$.`,
      String.raw`$f'(x) > 0$ on $(3.698, 4)$ (for example, $f'(4) \approx 0.693$), so $f$ is increasing there.`,
    ], answer: 0 },
  { id: "q503-f1a", type: "frq", skill: "u5", topic: "5.3", calc: false, set: "q503-s9", part: "(a)",
    prompt: String.raw`Find $f'(x)$. Find all values of $x$ in the open interval $(0, 2\pi)$ at which $f'(x) = 0$.`,
    rows: [
      { name: "Derivative and zeros", earns: String.raw`$f'(x) = 1 + 2\cos x$; $f'(x) = 0$ at $x = \dfrac{2\pi}{3}$ and $x = \dfrac{4\pi}{3}$.` },
    ],
    solution: String.raw`$f'(x) = 1 + 2\cos x$. Setting $1 + 2\cos x = 0$ gives $\cos x = -\dfrac{1}{2}$, so $x = \dfrac{2\pi}{3}$ or $x = \dfrac{4\pi}{3}$.` },
  { id: "q503-f1b", type: "frq", skill: "u5", topic: "5.3", calc: false, set: "q503-s9", part: "(b)",
    prompt: String.raw`Find the interval on which $f$ is decreasing. Justify your answer.`,
    rows: [
      { name: "Interval", earns: String.raw`$\dfrac{2\pi}{3} < x < \dfrac{4\pi}{3}$.` },
      { name: "Justification", earns: String.raw`$f'(x) = 1 + 2\cos x < 0$ on this interval because $\cos x < -\dfrac{1}{2}$ there.` },
    ],
    solution: String.raw`$f'(x) = 1 + 2\cos x < 0$ exactly when $\cos x < -\dfrac{1}{2}$. On $(0, 2\pi)$ this holds for $\dfrac{2\pi}{3} < x < \dfrac{4\pi}{3}$. For example, $f'(\pi) = -1 < 0$, while $f'\left(\dfrac{\pi}{2}\right) = 1 > 0$ and $f'\left(\dfrac{3\pi}{2}\right) = 1 > 0$. So $f$ is decreasing on $\left(\dfrac{2\pi}{3}, \dfrac{4\pi}{3}\right)$.` },
  { id: "q503-f1c", type: "frq", skill: "u5", topic: "5.3", calc: false, set: "q503-s9", part: "(c)",
    prompt: String.raw`Without evaluating $f$, determine which is greater, $f(2.5)$ or $f(4)$. Give a reason for your answer.`,
    rows: [
      { name: "Answer with reason", earns: String.raw`$f(2.5) > f(4)$, because $\dfrac{2\pi}{3} < 2.5 < 4 < \dfrac{4\pi}{3}$ and $f$ is decreasing on $\left[\dfrac{2\pi}{3}, \dfrac{4\pi}{3}\right]$.` },
    ],
    solution: String.raw`$\dfrac{2\pi}{3} \approx 2.094$ and $\dfrac{4\pi}{3} \approx 4.189$, so $2.5$ and $4$ are both in the interval where $f'(x) < 0$. $f$ is decreasing there, so $f(2.5) > f(4)$.` },
];

export default { forms: [{ id: "q503", name: "Topic 5.3 Quiz: Increasing and Decreasing Intervals", group: "Unit 5: Analytical Applications of Differentiation", items }] };

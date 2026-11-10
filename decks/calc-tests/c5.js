// AP Calculus AB unit test, Unit 5: Analytical Applications of Differentiation.
import { graph } from "../../plot.js";

// Graph of f' used by c5t-m04 and c5t-m05: segments (-2, 2)-(-1, 0), (-1, 0)-(1, 3), (1, 3)-(3, -3).
// f' touches the x-axis at x = -1 (no sign change) and crosses it at x = 2; f' falls on (-2, -1) and (1, 3) and rises on (-1, 1).
const fpGraph = graph({
  x: [-2, 3], y: [-3, 4], xname: "x", yname: "y",
  segments: [[-2, 2, -1, 0], [-1, 0, 1, 3], [1, 3, 3, -3]],
  dots: [[-2, 2, "closed"], [3, -3, "closed"]],
  labels: [[1.7, 3.2, "y = f'(x)"]],
  alt: "Graph of the derivative f prime on the interval from x = -2 to x = 3, made of three line segments. It falls from (-2, 2) to touch the x-axis at (-1, 0), rises to (1, 3), and then falls, crossing the x-axis at x = 2, to (3, -3).",
});

// Graph of f(x) = (x - 2)^2 - 1 on [0, 4], used by c5t-m09: f(1) = 0, f'(1) = -2, f''(1) = 2.
const fGraph = graph({
  x: [-1, 5], y: [-2, 4], xname: "x", yname: "y",
  fns: [{ f: (x) => (x - 2) ** 2 - 1, from: 0, to: 4, label: "f", labelAt: 3.7 }],
  dots: [[0, 3, "closed"], [4, 3, "closed"]],
  alt: "Graph of f on the interval from x = 0 to x = 4: a parabola opening upward from (0, 3) down through (1, 0) to its lowest point at (2, -1), then up through (3, 0) to (4, 3).",
});

// Graph of f(x) = x^3 - 6x^2 + 11x - 3 on [0, 4], used by c5t-m01: f(0) = -3, f(1) = f(2) = f(3) = 3, f(4) = 9.
const mvtGraph = graph({
  x: [-1, 5], y: [-4, 10], step: { x: 1, y: 2 }, height: 300, xname: "x", yname: "y",
  fns: [{ f: (x) => x ** 3 - 6 * x ** 2 + 11 * x - 3, from: 0, to: 4, label: "f", labelAt: 3.7 }],
  dots: [[0, -3, "closed"], [4, 9, "closed"]],
  alt: "Graph of f on the interval from x = 0 to x = 4. The graph starts at a closed dot at (0, -3), rises steeply through (1, 3), levels off through (2, 3), rises slowly through (3, 3), and then rises steeply to a closed dot at (4, 9).",
});

// Graph of f' used by c5t-m02: segments (-3, -1)-(-1, 1) and (-1, 1)-(1, 2), open dots at (1, 2) and (1, -2),
// then (1, -2)-(4, 1). f' = 0 at x = -2 and x = 3; f'(1) does not exist; the graph of f' has a corner at x = -1.
const jumpGraph = graph({
  x: [-3, 4], y: [-3, 3], xname: "x", yname: "y",
  segments: [[-3, -1, -1, 1], [-1, 1, 1, 2], [1, -2, 4, 1]],
  dots: [[-3, -1, "closed"], [1, 2, "open"], [1, -2, "open"], [4, 1, "closed"]],
  labels: [[2.6, 1.6, "y = f'(x)"]],
  alt: "Graph of y = f'(x) for x from -3 to 4, made of three line segments. It rises from a closed dot at (-3, -1) through (-2, 0) to a corner at (-1, 1), rises less steeply to an open dot at (1, 2), then starts again at an open dot at (1, -2) and rises through (3, 0) to a closed dot at (4, 1).",
});

// Graph of f(x) = (x^3 - 6x^2 + 18)/4 on [-2, 6], used by c5t-m08: f(-2) = -3.5, f(0) = 4.5, f(2) = 0.5, f(4) = -3.5, f(6) = 4.5.
// f'(x) = (3/4)x(x - 4) and f''(x) = (3/2)(x - 2). Its zeros (about -1.54, 2.17, 5.38) sit away from the tick labels.
const polyGraph = graph({
  x: [-2, 6], y: [-4, 5], step: { x: 1, y: 2 }, xname: "x", yname: "y",
  fns: [{ f: (x) => (x ** 3 - 6 * x ** 2 + 18) / 4, from: -2, to: 6 }],
  dots: [[0, 4.5, "closed"], [4, -3.5, "closed"]],
  alt: "Graph of f for x from -2 to 6. The graph rises from (-2, -3.5) to a high point at (0, 4.5), falls through (2, 0.5), where it changes from concave down to concave up, to a low point at (4, -3.5), and rises to (6, 4.5).",
});

export const sets = {
  "c5t-s5": { name: "The graph of f", label: "Graph",
    intro: String.raw`The graph of a differentiable function $f$ on the closed interval $[0, 4]$ is shown below.`,
    sources: [{ title: "", blocks: [{ svg: mvtGraph }] }] },
  "c5t-s6": { name: "The graph of f'", label: "Graph",
    intro: String.raw`The function $f$ is continuous on the closed interval $[-3, 4]$. The graph of its derivative $f'$, which consists of three line segments, is shown below. $f'(1)$ does not exist.`,
    sources: [{ title: "", blocks: [{ svg: jumpGraph }] }] },
  "c5t-s7": { name: "The graph of a polynomial", label: "Graph",
    intro: String.raw`The graph of a polynomial function $f$ is shown below. It has horizontal tangent lines at $(0, 4.5)$ and $(4, -3.5)$.`,
    sources: [{ title: "", blocks: [{ svg: polyGraph }] }] },
  "c5t-s1": { name: "The graph of f'", label: "Graph",
    intro: String.raw`The function $f$ is differentiable on the closed interval $[-2, 3]$. The graph of its derivative $f'$, which consists of three line segments, is shown below.`,
    sources: [{ title: "", blocks: [{ svg: fpGraph }] }] },
  "c5t-s2": { name: "The graph of f", label: "Graph",
    intro: String.raw`The graph of the twice differentiable function $f$ is shown below.`,
    sources: [{ title: "", blocks: [{ svg: fGraph }] }] },
  "c5t-s3": { name: "A cable to an island", label: "Free response",
    intro: String.raw`An island is $2$ kilometers from the nearest point $P$ on a straight shoreline. A town is on the shoreline $6$ kilometers from $P$. A power cable will run underwater in a straight line from the island to a point $Q$ on the shoreline between $P$ and the town, then along the shoreline to the town. Laying cable costs $6.5$ thousand dollars per kilometer underwater and $4$ thousand dollars per kilometer on land. Let $x$ be the distance, in kilometers, from $P$ to $Q$, where $0 \le x \le 6$, and let $C(x)$ be the total cost, in thousands of dollars.`,
    sources: [{ title: "", blocks: [{ p: String.raw`A graphing calculator is allowed. Give decimal answers to three decimal places.` }] }] },
  "c5t-s4": { name: "Analyzing a function", label: "Free response",
    intro: String.raw`Let $f$ be the function defined by $f(x) = \left(x^2 - 3\right)e^{-x}$ on the closed interval $[-2, 4]$.`,
    sources: [{ title: "", blocks: [{ p: String.raw`Answer each part without a calculator. Show the work that leads to each answer.` }] }] },
};

const items = [
  // Multiple choice, no calculator
  { id: "c5t-m01", type: "mcq", skill: "u5", topic: "5.1", calc: false, difficulty: "easy", set: "c5t-s5",
    question: String.raw`The Mean Value Theorem guarantees a value $c$ in the open interval $(0, 4)$ for which $f'(c)$ equals which of the following?`,
    choices: ["$3$", "$12$", String.raw`$\frac{1}{3}$`, String.raw`$\frac{9}{4}$`],
    why: [
      String.raw`From the graph, $f(0) = -3$ and $f(4) = 9$. $f$ is differentiable, so it is continuous on $[0, 4]$ and differentiable on $(0, 4)$, and the theorem gives $f'(c) = \dfrac{9 - (-3)}{4 - 0} = 3$ for some $c$ in $(0, 4)$.`,
      String.raw`$12$ is the change $f(4) - f(0)$. The slope divides that change by the length of the interval, $4$.`,
      String.raw`This divides the run by the rise, $\dfrac{4 - 0}{9 - (-3)}$. The slope of the secant line is rise over run.`,
      String.raw`This divides $f(4) = 9$ by $4$ and leaves out $f(0) = -3$.`,
    ],
    answer: 0 },
  { id: "c5t-m02", type: "mcq", skill: "u5", topic: "5.2", calc: false, difficulty: "difficult", set: "c5t-s6",
    question: String.raw`How many critical points does $f$ have in the open interval $(-3, 4)$?`,
    choices: ["$3$", "$2$", "$4$", "$1$"],
    why: [
      String.raw`A critical point is a point of the domain where $f'$ is $0$ or does not exist. $f'(x) = 0$ at $x = -2$ and $x = 3$, and $f'(1)$ does not exist while $f$ is defined at $x = 1$ (it is continuous there). That makes three.`,
      String.raw`This counts only the zeros of $f'$, at $x = -2$ and $x = 3$. The point $x = 1$, where $f'$ does not exist, is also a critical point because $f$ is defined there.`,
      String.raw`This also counts $x = -1$, where the graph of $f'$ has a corner. $f'(-1) = 1$ exists and is not $0$, so $x = -1$ is not a critical point of $f$; the corner only means $f''(-1)$ does not exist.`,
      String.raw`This counts only $x = 1$, where $f'$ does not exist. The points $x = -2$ and $x = 3$, where $f'(x) = 0$, are critical points too.`,
    ],
    answer: 0 },
  { id: "c5t-m03", type: "mcq", skill: "u5", topic: "5.3", calc: false, difficulty: "moderate",
    stem: String.raw`Let $f(x) = 3x^5 - 20x^3$.`,
    question: String.raw`On which of the following is $f$ decreasing?`,
    choices: [String.raw`$(-2, 2)$`, String.raw`$(-\infty, -2)$ and $(2, \infty)$`, String.raw`$(0, 2)$ only`, String.raw`$\left(-\sqrt{2}, 0\right)$ and $\left(\sqrt{2}, \infty\right)$`],
    why: [
      String.raw`$f'(x) = 15x^4 - 60x^2 = 15x^2(x - 2)(x + 2)$. Since $15x^2 \ge 0$, $f'(x) < 0$ for $-2 < x < 2$ except at $x = 0$, where $f'(0) = 0$. A single zero does not interrupt decreasing, so $f$ is decreasing on $(-2, 2)$.`,
      String.raw`These are where $f'(x) > 0$, where $f$ is increasing.`,
      String.raw`This misses $(-2, 0)$. The factor $x^2$ is never negative, so $f'$ is negative on both sides of $x = 0$.`,
      String.raw`These are where $f''(x) = 60x^3 - 120x = 60x\left(x^2 - 2\right) > 0$, where the graph is concave up.`,
    ],
    answer: 0 },
  { id: "c5t-m04", type: "mcq", skill: "u5", topic: "5.4", calc: false, difficulty: "moderate", set: "c5t-s1",
    question: String.raw`Which of the following describes all the relative extrema of $f$ on the open interval $(-2, 3)$?`,
    choices: [
      String.raw`A relative maximum at $x = 2$ only`,
      String.raw`A relative minimum at $x = -1$ and a relative maximum at $x = 2$`,
      String.raw`A relative maximum at $x = 1$ and at $x = 2$`,
      String.raw`A relative minimum at $x = -1$ and a relative maximum at $x = 1$`,
    ],
    why: [
      String.raw`$f'(x) = 0$ at $x = -1$ and $x = 2$. At $x = -1$ the graph of $f'$ touches the axis but stays above it, so $f'$ does not change sign and there is no extremum. At $x = 2$, $f'$ changes from positive to negative, so by the First Derivative Test $f$ has a relative maximum there.`,
      String.raw`$f'(-1) = 0$, but $f'$ is positive on both sides of $x = -1$, so $f$ keeps increasing and has no extremum there.`,
      String.raw`At $x = 1$, $f'$ has a relative maximum, but $f'(1) = 3 > 0$, so $f$ is increasing there. Only $x = 2$ is a relative maximum of $f$.`,
      String.raw`These are the relative extrema of $f'$, not of $f$. They are the points of inflection of $f$.`,
    ],
    answer: 0 },
  { id: "c5t-m05", type: "mcq", skill: "u5", topic: "5.6", calc: false, difficulty: "moderate", set: "c5t-s1",
    question: String.raw`On which of the following open intervals is the graph of $f$ concave down?`,
    choices: [String.raw`$(-2, -1)$ and $(1, 3)$`, String.raw`$(-1, 1)$`, String.raw`$(2, 3)$ only`, String.raw`$(-2, -1)$ and $(2, 3)$`],
    why: [
      String.raw`The graph of $f$ is concave down where $f'$ is decreasing. The graph of $f'$ falls from $x = -2$ to $x = -1$ and from $x = 1$ to $x = 3$.`,
      String.raw`On $(-1, 1)$ the graph of $f'$ rises, so the graph of $f$ is concave up there.`,
      String.raw`This is where $f'(x) < 0$, where $f$ is decreasing. Concavity depends on whether $f'$ is increasing or decreasing.`,
      String.raw`This misses $(1, 2)$, where $f'$ is positive but decreasing, so the graph of $f$ is concave down there too.`,
    ],
    answer: 0 },
  { id: "c5t-m06", type: "mcq", skill: "u5", topic: "5.5", calc: false, difficulty: "easy",
    stem: String.raw`Let $f(x) = x^2 + \dfrac{16}{x}$.`,
    question: String.raw`What is the absolute minimum value of $f$ on the closed interval $[1, 4]$?`,
    choices: ["$12$", "$2$", "$17$", "$20$"],
    why: [
      String.raw`$f'(x) = 2x - \dfrac{16}{x^2} = 0$ when $x^3 = 8$, so $x = 2$. The candidates are $f(1) = 17$, $f(2) = 4 + 8 = 12$, and $f(4) = 16 + 4 = 20$. The smallest is $12$.`,
      String.raw`$2$ is the $x$-value where the minimum occurs, not the minimum value.`,
      String.raw`$17$ is the value at the left endpoint. The critical point $x = 2$ gives a smaller value.`,
      String.raw`$20 = f(4)$ is the absolute maximum value.`,
    ],
    answer: 0 },
  { id: "c5t-m07", type: "mcq", skill: "u5", topic: "5.7", calc: false, difficulty: "difficult",
    stem: String.raw`Let $f(x) = x^5 - 5x^4$.`,
    question: String.raw`Which of the following describes all the relative extrema of $f$?`,
    choices: [String.raw`A relative maximum at $x = 0$ and a relative minimum at $x = 4$`, String.raw`A relative minimum at $x = 4$ only`, String.raw`Relative minima at $x = 0$ and $x = 4$`, String.raw`A relative minimum at $x = 0$ and a relative maximum at $x = 4$`],
    why: [
      String.raw`$f'(x) = 5x^4 - 20x^3 = 5x^3(x - 4)$, so the critical points are $x = 0$ and $x = 4$. $f''(x) = 20x^3 - 60x^2$, and $f''(4) = 320 > 0$, so $f$ has a relative minimum at $x = 4$. $f''(0) = 0$, so the Second Derivative Test gives no conclusion at $x = 0$. By the First Derivative Test, $f' > 0$ for $x < 0$ and $f' < 0$ for $0 < x < 4$, so $f$ has a relative maximum at $x = 0$.`,
      String.raw`$f''(0) = 0$ only means the Second Derivative Test fails at $x = 0$. The First Derivative Test still applies: $f'$ changes from positive to negative there.`,
      String.raw`$f'$ changes from positive to negative at $x = 0$, so $x = 0$ is a relative maximum, not a minimum.`,
      String.raw`The types are reversed. $f''(4) = 320 > 0$ means concave up at $x = 4$, a relative minimum.`,
    ],
    answer: 0 },
  { id: "c5t-m08", type: "mcq", skill: "u5", topic: "5.8", calc: false, difficulty: "difficult", set: "c5t-s7",
    question: String.raw`Which of the following could be $f'(x)$?`,
    choices: [String.raw`$\frac{3}{4}x(x - 4)$`, String.raw`$-\frac{3}{4}x(x - 4)$`, String.raw`$\frac{3}{4}x(x - 2)(x - 4)$`, String.raw`$\frac{3}{4}x(x - 4)^2$`],
    why: [
      String.raw`$f$ increases to its high point at $x = 0$, decreases to its low point at $x = 4$, and then increases, so $f'$ must be positive, then negative, then positive, with zeros only at $x = 0$ and $x = 4$. $\dfrac{3}{4}x(x - 4)$ has exactly that sign pattern, and its derivative $\dfrac{3}{2}(x - 2)$ changes sign at $x = 2$, where the graph changes concavity.`,
      String.raw`This is negative for $x < 0$, so $f$ would be decreasing there, but the graph rises to its high point at $x = 0$. The signs are reversed.`,
      String.raw`This is $0$ at $x = 2$, which would put a horizontal tangent at $\left(2, \frac{1}{2}\right)$, but the graph is falling there. A point of inflection is a zero of $f''$, not of $f'$.`,
      String.raw`With the factor $(x - 4)^2$, this $f'$ does not change sign at $x = 4$, so $f$ could not have its low point there. It is also positive on $(0, 4)$, where the graph falls.`,
    ],
    answer: 0 },
  { id: "c5t-m09", type: "mcq", skill: "u5", topic: "5.9", calc: false, difficulty: "easy", set: "c5t-s2",
    question: String.raw`Which of the following is true?`,
    choices: [String.raw`$f'(1) < f(1) < f''(1)$`, String.raw`$f(1) < f'(1) < f''(1)$`, String.raw`$f''(1) < f(1) < f'(1)$`, String.raw`$f'(1) < f''(1) < f(1)$`],
    why: [
      String.raw`The graph passes through $(1, 0)$, so $f(1) = 0$. It is falling at $x = 1$, so $f'(1) < 0$, and it is concave up, so $f''(1) > 0$. That gives $f'(1) < 0 < f''(1)$.`,
      String.raw`The graph is decreasing at $x = 1$, so $f'(1)$ is negative and less than $f(1) = 0$.`,
      String.raw`The graph is concave up at $x = 1$, so $f''(1) > 0$, and decreasing, so $f'(1) < 0$. This reverses both signs.`,
      String.raw`$f''(1) > 0 = f(1)$ because the graph is concave up, so $f''(1)$ cannot be less than $f(1)$.`,
    ],
    answer: 0 },
  { id: "c5t-m10", type: "mcq", skill: "u5", topic: "5.12", calc: false, difficulty: "moderate",
    stem: String.raw`The point $(3, 3)$ lies on the curve $x^3 + y^3 = 6xy$.`,
    question: String.raw`Which of the following is an equation of the line tangent to the curve at $(3, 3)$?`,
    choices: [String.raw`$y = -x + 6$`, String.raw`$y = x$`, String.raw`$y = 2x - 3$`, String.raw`$y = 3$`],
    why: [
      String.raw`Differentiating, $3x^2 + 3y^2\dfrac{dy}{dx} = 6y + 6x\dfrac{dy}{dx}$, so $\dfrac{dy}{dx} = \dfrac{2y - x^2}{y^2 - 2x}$. At $(3, 3)$ this is $\dfrac{6 - 9}{9 - 6} = -1$, and the line is $y - 3 = -(x - 3)$, or $y = -x + 6$.`,
      String.raw`This comes from a sign error that gives $\dfrac{dy}{dx} = \dfrac{x^2 - 2y}{y^2 - 2x} = 1$ at $(3, 3)$. Solving $3y^2\dfrac{dy}{dx} - 6x\dfrac{dy}{dx} = 6y - 3x^2$ gives a slope of $-1$.`,
      String.raw`This differentiates $y^3$ as $3y^2$ without the factor $\dfrac{dy}{dx}$, which gives a slope of $2$. Every $y$ term needs the chain rule.`,
      String.raw`The curve is symmetric about the line $y = x$, but that does not make the tangent at $(3, 3)$ horizontal. Its slope is $-1$.`,
    ],
    answer: 0 },

  // Multiple choice, calculator
  { id: "c5t-m11", type: "mcq", skill: "u5", topic: "5.3", calc: true, difficulty: "easy",
    stem: String.raw`The derivative of a function $f$ is $f'(x) = x^3 - 2^{x}$ for $0 \le x \le 4$.`,
    question: String.raw`On which interval is $f$ increasing?`,
    choices: [String.raw`$1.373 < x < 4$`, String.raw`$0 < x < 1.373$`, String.raw`$0.590 < x < 4$`, String.raw`$1.414 < x < 4$`],
    why: [
      String.raw`$f$ is increasing where $f'(x) > 0$. $f'(0) = -1 < 0$, $f'(4) = 48 > 0$, and on $[0, 4]$ the only zero of $f'$ is $x = 1.373$, so $f'(x) > 0$ for $1.373 < x < 4$.`,
      String.raw`This is where $f'(x) < 0$, where $f$ is decreasing.`,
      String.raw`This is where $f''(x) = 3x^2 - 2^{x}\ln 2 > 0$, where the graph of $f$ is concave up.`,
      String.raw`This treats $2^{x}$ as $2x$, solving $x^3 = 2x$ to get $x = \sqrt{2}$.`,
    ],
    answer: 0 },
  { id: "c5t-m12", type: "mcq", skill: "u5", topic: "5.5", calc: true, difficulty: "easy",
    stem: String.raw`Let $f(x) = x^2 - 6\ln(x + 1)$.`,
    question: String.raw`What is the absolute minimum value of $f$ on the closed interval $[0, 4]$?`,
    choices: ["$-3.307$", "$0$", "$1.303$", "$6.343$"],
    why: [
      String.raw`$f'(x) = 2x - \dfrac{6}{x + 1} = 0$ when $x^2 + x - 3 = 0$, so $x = 1.303$ in $[0, 4]$. The candidates are $f(0) = 0$, $f(1.303) = -3.307$, and $f(4) = 6.343$. The smallest is $-3.307$.`,
      String.raw`$0$ is the value at the left endpoint. The critical point gives a smaller value.`,
      String.raw`$1.303$ is the $x$-value where the minimum occurs, not the minimum value.`,
      String.raw`$6.343 = f(4)$ is the absolute maximum value.`,
    ],
    answer: 0 },
  { id: "c5t-m13", type: "mcq", skill: "u5", topic: "5.6", calc: true, difficulty: "moderate",
    stem: String.raw`The derivative of a function $f$ is $f'(x) = 2\sin x - \dfrac{x^2}{2}$.`,
    question: String.raw`At what value of $x$ in the open interval $(0, 4)$ does the graph of $f$ have a point of inflection?`,
    choices: ["$1.030$", "$1.571$", "$1.252$", "$1.934$"],
    why: [
      String.raw`$f''(x) = 2\cos x - x$. On $(0, 4)$, $f''(x) = 0$ only at $x = 1.030$, and $f''$ changes from positive to negative there, so the concavity of $f$ changes at $x = 1.030$.`,
      String.raw`$1.571$ is $\dfrac{\pi}{2}$, where $\cos x = 0$. There $f''\left(\dfrac{\pi}{2}\right) = -\dfrac{\pi}{2} \ne 0$.`,
      String.raw`This solves $2\cos x = \dfrac{x}{2}$, differentiating $\dfrac{x^2}{2}$ as $\dfrac{x}{2}$. The derivative of $\dfrac{x^2}{2}$ is $x$.`,
      String.raw`$1.934$ solves $f'(x) = 0$, a critical point of $f$. A point of inflection is where $f''$ changes sign.`,
    ],
    answer: 0 },
  { id: "c5t-m14", type: "mcq", skill: "u5", topic: "5.11", calc: true, difficulty: "difficult",
    question: String.raw`What is the least distance from the origin to a point on the graph of $y = e^{-x}$?`,
    choices: ["$0.780$", "$1.000$", "$0.426$", "$0.608$"],
    why: [
      String.raw`The square of the distance is $S(x) = x^2 + e^{-2x}$. $S'(x) = 2x - 2e^{-2x} = 0$ at $x = 0.42630$, and $S'$ changes from negative to positive there. The least distance is $\sqrt{S(0.42630)} = 0.780$.`,
      String.raw`$1$ is the distance to $(0, 1)$, the $y$-intercept. Points to the right of it are closer.`,
      String.raw`$0.426$ is the $x$-coordinate of the closest point, not the distance.`,
      String.raw`$0.608$ is the square of the least distance. The square root was not taken.`,
    ],
    answer: 0 },
  { id: "c5t-m15", type: "mcq", skill: "u5", topic: "5.1", calc: true, difficulty: "moderate",
    stem: String.raw`Let $f(x) = x\ln x$.`,
    question: String.raw`What value of $c$ in the interval $(1, 3)$ satisfies the conclusion of the Mean Value Theorem for $f$ on $[1, 3]$?`,
    choices: ["$1.912$", "$2.000$", "$5.196$", "$0.368$"],
    why: [
      String.raw`The average rate of change is $\dfrac{3\ln 3 - 0}{3 - 1} = 1.64792$. Setting $f'(c) = \ln c + 1 = 1.64792$ gives $c = e^{0.64792} = 1.912$.`,
      String.raw`$2$ is the midpoint of the interval. $f'(2) = \ln 2 + 1 = 1.693$, not the average rate of change.`,
      String.raw`This uses $f'(x) = \ln x$, leaving out the second term of the product rule, so it solves $\ln c = 1.64792$. Also, $5.196$ is not in $(1, 3)$.`,
      String.raw`This solves $f'(c) = 0$, where the tangent line is horizontal. The tangent line must be parallel to the secant line, whose slope is $1.64792$.`,
    ],
    answer: 0 },

  // Free response 1: a cable to an island (calculator)
  { id: "c5t-f1a", type: "frq", skill: "u5", topic: "5.10", calc: true, set: "c5t-s3", part: "(a)",
    prompt: String.raw`Write an expression for $C(x)$.`,
    rows: [
      { name: "Cost function", earns: String.raw`$C(x) = 6.5\sqrt{4 + x^2} + 4(6 - x)$` },
    ],
    solution: String.raw`The underwater cable is the hypotenuse of a right triangle with legs $2$ and $x$, so its length is $\sqrt{4 + x^2}$ kilometers. The cable on land runs from $Q$ to the town, a length of $6 - x$ kilometers.

$$C(x) = 6.5\sqrt{4 + x^2} + 4(6 - x)$$` },
  { id: "c5t-f1b", type: "frq", skill: "u5", topic: "5.11", calc: true, set: "c5t-s3", part: "(b)",
    prompt: String.raw`Find the value of $x$ that minimizes the total cost, and find the minimum cost. Justify your answer.`,
    rows: [
      { name: "Sets derivative to 0", earns: String.raw`$C'(x) = \dfrac{6.5x}{\sqrt{4 + x^2}} - 4 = 0$` },
      { name: "Critical point", earns: String.raw`$x = 1.561$` },
      { name: "Answer with justification", earns: String.raw`Compares $C(0) = 37$, $C(1.561) = 34.247$, $C(6) = 41.110$; the minimum cost is $34.247$ thousand dollars, at $x = 1.561$.` },
    ],
    solution: String.raw`$C'(x) = \dfrac{6.5x}{\sqrt{4 + x^2}} - 4$. Solving $C'(x) = 0$ on $0 < x < 6$ with a calculator gives $x = 1.561$.

$C$ is continuous on the closed interval $[0, 6]$, so by the Candidates Test, compare $C$ at the critical point and at the endpoints:

$$C(0) = 37, \quad C(1.561) = 34.247, \quad C(6) = 41.110.$$

The total cost is least when $x = 1.561$ kilometers, and the minimum cost is $34.247$ thousand dollars.` },
  { id: "c5t-f1c", type: "frq", skill: "u5", topic: "5.1", calc: true, set: "c5t-s3", part: "(c)",
    prompt: String.raw`Explain why there must be a value $c$, $0 < c < 6$, such that $C'(c) = \dfrac{C(6) - C(0)}{6}$. Find this value of $c$.`,
    rows: [
      { name: "Average rate of change", earns: String.raw`$\dfrac{C(6) - C(0)}{6} = 0.685$` },
      { name: "Mean Value Theorem with conditions", earns: String.raw`$C$ is continuous on $[0, 6]$ and differentiable on $(0, 6)$, so the Mean Value Theorem guarantees such a $c$.` },
      { name: "Value of c", earns: String.raw`$c = 2.080$` },
    ],
    solution: String.raw`$\dfrac{C(6) - C(0)}{6} = \dfrac{41.10961 - 37}{6} = 0.685$.

$4 + x^2 > 0$ for all $x$, so $C$ is differentiable for all $x$. So $C$ is continuous on $[0, 6]$ and differentiable on $(0, 6)$, and by the Mean Value Theorem there is a value $c$ in $(0, 6)$ with $C'(c) = 0.685$.

Solving $\dfrac{6.5c}{\sqrt{4 + c^2}} - 4 = 0.68494$ with a calculator gives $c = 2.080$.` },
  { id: "c5t-f1d", type: "frq", skill: "u5", topic: "5.9", calc: true, set: "c5t-s3", part: "(d)",
    prompt: String.raw`Is the rate of change of the total cost with respect to $x$ increasing or decreasing at $x = 3$? Give a reason for your answer.`,
    rows: [
      { name: "Second derivative", earns: String.raw`$C''(3) = 0.555$` },
      { name: "Answer with reason", earns: String.raw`Increasing, because $C''(3) > 0$.` },
    ],
    solution: String.raw`The rate of change of the cost with respect to $x$ is $C'(x)$, and its rate of change is $C''(x) = \dfrac{26}{\left(4 + x^2\right)^{3/2}}$.

$C''(3) = \dfrac{26}{13^{3/2}} = 0.555$.

Since $C''(3) > 0$, the rate of change of the total cost with respect to $x$ is increasing at $x = 3$.` },

  // Free response 2: analyzing a function (no calculator)
  { id: "c5t-f2a", type: "frq", skill: "u5", topic: "5.3", calc: false, set: "c5t-s4", part: "(a)",
    prompt: String.raw`Find $f'(x)$. On what open intervals is $f$ increasing? Justify your answer.`,
    rows: [
      { name: "Derivative", earns: String.raw`$f'(x) = \left(-x^2 + 2x + 3\right)e^{-x} = -(x - 3)(x + 1)e^{-x}$` },
      { name: "Answer with justification", earns: String.raw`$(-1, 3)$, because $f'(x) > 0$ there.` },
    ],
    solution: String.raw`By the product rule, $f'(x) = 2xe^{-x} - \left(x^2 - 3\right)e^{-x} = \left(-x^2 + 2x + 3\right)e^{-x} = -(x - 3)(x + 1)e^{-x}$.

Since $e^{-x} > 0$, the sign of $f'$ is the sign of $-(x - 3)(x + 1)$. For $-1 < x < 3$, $x - 3 < 0$ and $x + 1 > 0$, so $f'(x) > 0$. For $-2 < x < -1$ and $3 < x < 4$, $f'(x) < 0$.

$f$ is increasing on $(-1, 3)$ because $f'(x) > 0$ there.` },
  { id: "c5t-f2b", type: "frq", skill: "u5", topic: "5.4", calc: false, set: "c5t-s4", part: "(b)",
    prompt: String.raw`Find the $x$-coordinate of each relative extremum of $f$ on the open interval $(-2, 4)$, and classify each as a relative maximum or a relative minimum. Justify your answer.`,
    rows: [
      { name: "Relative minimum with justification", earns: String.raw`$x = -1$, because $f'$ changes from negative to positive there.` },
      { name: "Relative maximum with justification", earns: String.raw`$x = 3$, because $f'$ changes from positive to negative there.` },
    ],
    solution: String.raw`The critical points are where $f'(x) = 0$, at $x = -1$ and $x = 3$. $f'$ exists everywhere.

From part (a), $f'$ changes from negative to positive at $x = -1$, so by the First Derivative Test $f$ has a relative minimum at $x = -1$.

$f'$ changes from positive to negative at $x = 3$, so $f$ has a relative maximum at $x = 3$.` },
  { id: "c5t-f2c", type: "frq", skill: "u5", topic: "5.5", calc: false, set: "c5t-s4", part: "(c)",
    prompt: String.raw`Find the absolute maximum value and the absolute minimum value of $f$ on the closed interval $[-2, 4]$. Justify your answers.`,
    rows: [
      { name: "Candidates", earns: String.raw`Evaluates $f$ at the critical points and the endpoints: $f(-2) = e^{2}$, $f(-1) = -2e$, $f(3) = 6e^{-3}$, $f(4) = 13e^{-4}$.` },
      { name: "Absolute maximum", earns: String.raw`$e^{2}$, at $x = -2$` },
      { name: "Absolute minimum", earns: String.raw`$-2e$, at $x = -1$` },
    ],
    solution: String.raw`$f$ is continuous on $[-2, 4]$, so by the Candidates Test, compare its values at the critical points $x = -1$ and $x = 3$ and at the endpoints:

$$f(-2) = (4 - 3)e^{2} = e^{2}, \quad f(-1) = (1 - 3)e^{1} = -2e,$$

$$f(3) = (9 - 3)e^{-3} = \dfrac{6}{e^{3}}, \quad f(4) = (16 - 3)e^{-4} = \dfrac{13}{e^{4}}.$$

Since $e > 2$, $e^{2} > 4$, while $\dfrac{6}{e^{3}} < \dfrac{6}{8} < 1$ and $\dfrac{13}{e^{4}} < \dfrac{13}{16} < 1$. The only negative value is $-2e$.

The absolute maximum value is $e^{2}$, at $x = -2$, and the absolute minimum value is $-2e$, at $x = -1$.` },
  { id: "c5t-f2d", type: "frq", skill: "u5", topic: "5.6", calc: false, set: "c5t-s4", part: "(d)",
    prompt: String.raw`Find the $x$-coordinate of each point of inflection of the graph of $f$ on the open interval $(-2, 4)$. Justify your answer.`,
    rows: [
      { name: "Second derivative", earns: String.raw`$f''(x) = \left(x^2 - 4x - 1\right)e^{-x}$` },
      { name: "Answer with justification", earns: String.raw`$x = 2 - \sqrt{5}$, because $f''$ changes sign there.` },
    ],
    solution: String.raw`By the product rule, $f''(x) = (-2x + 2)e^{-x} - \left(-x^2 + 2x + 3\right)e^{-x} = \left(x^2 - 4x - 1\right)e^{-x}$.

$x^2 - 4x - 1 = 0$ when $x = \dfrac{4 \pm \sqrt{20}}{2} = 2 \pm \sqrt{5}$. Since $\sqrt{5} > 2$, $2 + \sqrt{5} > 4$ is outside the interval, and $2 - \sqrt{5}$ is between $-1$ and $0$, inside it.

Since $e^{-x} > 0$, the sign of $f''$ is the sign of $x^2 - 4x - 1$, which is positive for $-2 < x < 2 - \sqrt{5}$ and negative for $2 - \sqrt{5} < x < 4$. $f''$ changes sign at $x = 2 - \sqrt{5}$, so the graph of $f$ has a point of inflection there.` },
];

export default { forms: [{ id: "c5t", name: "Unit 5 Test", group: "Unit 5: Analytical Applications of Differentiation", items }] };

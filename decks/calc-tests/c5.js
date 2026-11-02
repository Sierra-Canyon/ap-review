// AP Calculus AB unit test, Unit 5: Analytical Applications of Differentiation.
import { graph } from "../../plot.js";

// Graph of f'(x) = (x + 1)^2(2 - x)/2 on [-2, 3], used by c5t-m04 and c5t-m05.
// f'(-2) = 2, f'(-1) = 0, f'(1) = 2, f'(2) = 0, f'(3) = -8; f' has a relative minimum at x = -1 and a relative maximum at x = 1.
const fp = (x) => ((x + 1) ** 2 * (2 - x)) / 2;
const fpGraph = graph({
  x: [-2, 3], y: [-8, 3], step: { x: 1, y: 2 }, height: 300, xname: "x", yname: "y",
  fns: [{ f: fp, from: -2, to: 3, label: "f'", labelAt: 2.6 }],
  dots: [[-2, 2, "closed"], [3, -8, "closed"]],
  alt: "Graph of the derivative f prime on the interval from x = -2 to x = 3. The graph starts at (-2, 2), falls to touch the x-axis at (-1, 0), where it has a low point, rises to a high point at (1, 2), then falls, crossing the x-axis at x = 2, down to (3, -8).",
});

// Graph of f(x) = (x - 2)^2 - 1 on [0, 4], used by c5t-m09: f(1) = 0, f'(1) = -2, f''(1) = 2.
const fGraph = graph({
  x: [-1, 5], y: [-2, 4], xname: "x", yname: "y",
  fns: [{ f: (x) => (x - 2) ** 2 - 1, from: 0, to: 4, label: "f", labelAt: 3.7 }],
  dots: [[0, 3, "closed"], [4, 3, "closed"]],
  alt: "Graph of f on the interval from x = 0 to x = 4: a parabola opening upward from (0, 3) down through (1, 0) to its lowest point at (2, -1), then up through (3, 0) to (4, 3).",
});

export const sets = {
  "c5t-s1": { name: "The graph of f'", label: "Graph",
    intro: String.raw`The function $f$ is twice differentiable on the interval $[-2, 3]$. The graph of its derivative $f'$ is shown below. The graph of $f'$ has horizontal tangent lines at $x = -1$ and $x = 1$.`,
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
  { id: "c5t-m01", type: "mcq", skill: "u5", topic: "5.1", calc: false,
    stem: String.raw`Let $f(x) = \sqrt{x}$.`,
    question: String.raw`What value of $c$ satisfies the conclusion of the Mean Value Theorem for $f$ on the interval $[1, 9]$?`,
    choices: ["$4$", "$5$", "$16$", String.raw`$\frac{1}{64}$`],
    why: [
      String.raw`The average rate of change is $\dfrac{\sqrt{9} - \sqrt{1}}{9 - 1} = \dfrac{2}{8} = \dfrac{1}{4}$. Setting $f'(c) = \dfrac{1}{2\sqrt{c}} = \dfrac{1}{4}$ gives $\sqrt{c} = 2$, so $c = 4$, which is in $(1, 9)$.`,
      String.raw`$5$ is the midpoint of the interval. $f'(5) = \dfrac{1}{2\sqrt{5}} \ne \dfrac{1}{4}$.`,
      String.raw`This uses $f'(c) = \dfrac{1}{\sqrt{c}}$, leaving out the factor $\dfrac{1}{2}$ from the power rule. Also, $16$ is not in $(1, 9)$.`,
      String.raw`This flips the average rate of change, using $\dfrac{9 - 1}{\sqrt{9} - \sqrt{1}} = 4$, and solves $\dfrac{1}{2\sqrt{c}} = 4$.`,
    ],
    answer: 0 },
  { id: "c5t-m02", type: "mcq", skill: "u5", topic: "5.2", calc: false,
    stem: String.raw`Let $f(x) = \left(x^2 - 4\right)^{2/3}$.`,
    question: String.raw`What are all the critical points of $f$?`,
    choices: [String.raw`$x = -2$, $x = 0$, and $x = 2$`, String.raw`$x = 0$ only`, String.raw`$x = -2$ and $x = 2$ only`, String.raw`$x = -4$, $x = 0$, and $x = 4$`],
    why: [
      String.raw`By the chain rule, $f'(x) = \dfrac{2}{3}\left(x^2 - 4\right)^{-1/3}(2x) = \dfrac{4x}{3\sqrt[3]{x^2 - 4}}$. $f'(0) = 0$, and $f'(\pm 2)$ does not exist while $f(\pm 2) = 0$ is defined, so all three are critical points.`,
      String.raw`This finds only where $f'(x) = 0$. Points of the domain where $f'$ does not exist, $x = \pm 2$, are also critical points.`,
      String.raw`This finds only where $f'$ does not exist. It comes from leaving out the chain rule factor $2x$, which gives the zero of $f'$ at $x = 0$.`,
      String.raw`This solves $x^2 - 4 = 0$ as $x = \pm 4$. The zeros of $x^2 - 4$ are $x = \pm 2$.`,
    ],
    answer: 0 },
  { id: "c5t-m03", type: "mcq", skill: "u5", topic: "5.3", calc: false,
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
  { id: "c5t-m04", type: "mcq", skill: "u5", topic: "5.4", calc: false, set: "c5t-s1",
    question: String.raw`Which of the following describes all the relative extrema of $f$ on the open interval $(-2, 3)$?`,
    choices: [
      String.raw`A relative maximum at $x = 2$ only`,
      String.raw`A relative minimum at $x = -1$ and a relative maximum at $x = 2$`,
      String.raw`A relative maximum at $x = 1$ only`,
      String.raw`A relative minimum at $x = -1$ and a relative maximum at $x = 1$`,
    ],
    why: [
      String.raw`$f'(x) = 0$ at $x = -1$ and $x = 2$. At $x = -1$ the graph of $f'$ touches the axis but stays above it, so $f'$ does not change sign and there is no extremum. At $x = 2$, $f'$ changes from positive to negative, so by the First Derivative Test $f$ has a relative maximum there.`,
      String.raw`$f'(-1) = 0$, but $f'$ is positive on both sides of $x = -1$, so $f$ keeps increasing and has no extremum there.`,
      String.raw`At $x = 1$, $f'$ has a relative maximum, but $f'(1) = 2 > 0$, so $f$ is increasing there.`,
      String.raw`These are the relative extrema of $f'$, not of $f$. They are the points of inflection of $f$.`,
    ],
    answer: 0 },
  { id: "c5t-m05", type: "mcq", skill: "u5", topic: "5.6", calc: false, set: "c5t-s1",
    question: String.raw`On which of the following open intervals is the graph of $f$ concave down?`,
    choices: [String.raw`$(-2, -1)$ and $(1, 3)$`, String.raw`$(-1, 1)$`, String.raw`$(2, 3)$ only`, String.raw`$(-2, -1)$ and $(2, 3)$`],
    why: [
      String.raw`The graph of $f$ is concave down where $f'$ is decreasing. The graph of $f'$ falls from $x = -2$ to $x = -1$ and from $x = 1$ to $x = 3$.`,
      String.raw`On $(-1, 1)$ the graph of $f'$ rises, so the graph of $f$ is concave up there.`,
      String.raw`This is where $f'(x) < 0$, where $f$ is decreasing. Concavity depends on whether $f'$ is increasing or decreasing.`,
      String.raw`This misses $(1, 2)$, where $f'$ is positive but decreasing, so the graph of $f$ is concave down there too.`,
    ],
    answer: 0 },
  { id: "c5t-m06", type: "mcq", skill: "u5", topic: "5.5", calc: false,
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
  { id: "c5t-m07", type: "mcq", skill: "u5", topic: "5.7", calc: false,
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
  { id: "c5t-m08", type: "mcq", skill: "u5", topic: "5.8", calc: false,
    stem: String.raw`The graph of a polynomial function $f$ has horizontal tangent lines at exactly $x = -1$ and $x = 3$ and a point of inflection at exactly $x = 1$.`,
    question: String.raw`Which of the following could be $f'(x)$?`,
    choices: [String.raw`$3(x + 1)(x - 3)$`, String.raw`$3(x - 1)^2$`, String.raw`$(x + 1)(x - 1)(x - 3)$`, String.raw`$3(x - 1)(x + 3)$`],
    why: [
      String.raw`$f'(x) = 3(x + 1)(x - 3)$ is $0$ only at $x = -1$ and $x = 3$. Then $f''(x) = 3(2x - 2) = 6(x - 1)$ changes sign only at $x = 1$, so the graph of $f$ has its only point of inflection there.`,
      String.raw`This $f'$ is $0$ only at $x = 1$, so the graph of $f$ would have a horizontal tangent at $x = 1$, not at $x = -1$ and $x = 3$.`,
      String.raw`This $f'$ is also $0$ at $x = 1$, a third horizontal tangent. Its derivative $3x^2 - 6x - 1$ changes sign at $x = 1 \pm \dfrac{2}{\sqrt{3}}$, not at $x = 1$.`,
      String.raw`The signs are reversed: this $f'$ is $0$ at $x = 1$ and $x = -3$.`,
    ],
    answer: 0 },
  { id: "c5t-m09", type: "mcq", skill: "u5", topic: "5.9", calc: false, set: "c5t-s2",
    question: String.raw`Which of the following is true?`,
    choices: [String.raw`$f'(1) < f(1) < f''(1)$`, String.raw`$f(1) < f'(1) < f''(1)$`, String.raw`$f''(1) < f(1) < f'(1)$`, String.raw`$f'(1) < f''(1) < f(1)$`],
    why: [
      String.raw`The graph passes through $(1, 0)$, so $f(1) = 0$. It is falling at $x = 1$, so $f'(1) < 0$, and it is concave up, so $f''(1) > 0$. That gives $f'(1) < 0 < f''(1)$.`,
      String.raw`The graph is decreasing at $x = 1$, so $f'(1)$ is negative and less than $f(1) = 0$.`,
      String.raw`The graph is concave up at $x = 1$, so $f''(1) > 0$, and decreasing, so $f'(1) < 0$. This reverses both signs.`,
      String.raw`$f''(1) > 0 = f(1)$ because the graph is concave up, so $f''(1)$ cannot be less than $f(1)$.`,
    ],
    answer: 0 },
  { id: "c5t-m10", type: "mcq", skill: "u5", topic: "5.12", calc: false,
    stem: String.raw`Consider the curve $y^2 + xy - x^2 = 5$.`,
    question: String.raw`At which points on the curve is the tangent line horizontal?`,
    choices: [String.raw`$(1, 2)$ and $(-1, -2)$`, String.raw`$(1, 2)$ only`, String.raw`$\left(0, \sqrt{5}\right)$ and $\left(0, -\sqrt{5}\right)$`, String.raw`$(2, 1)$ and $(-2, -1)$`],
    why: [
      String.raw`$2yy' + y + xy' - 2x = 0$, so $\dfrac{dy}{dx} = \dfrac{2x - y}{2y + x}$. This is $0$ when $y = 2x$ and $2y + x \ne 0$. Then $4x^2 + 2x^2 - x^2 = 5x^2 = 5$, so $x = \pm 1$, giving $(1, 2)$ and $(-1, -2)$, where $2y + x = \pm 5 \ne 0$.`,
      String.raw`$5x^2 = 5$ has two solutions, $x = 1$ and $x = -1$. The point $(-1, -2)$ is also on the curve with slope $0$.`,
      String.raw`These are where the curve crosses the $y$-axis. There $\dfrac{dy}{dx} = \dfrac{-y}{2y} = -\dfrac{1}{2}$, not $0$.`,
      String.raw`This uses $x = 2y$ instead of $y = 2x$. These points are not on the curve: $1 + 2 - 4 = -1 \ne 5$.`,
    ],
    answer: 0 },

  // Multiple choice, calculator
  { id: "c5t-m11", type: "mcq", skill: "u5", topic: "5.3", calc: true,
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
  { id: "c5t-m12", type: "mcq", skill: "u5", topic: "5.5", calc: true,
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
  { id: "c5t-m13", type: "mcq", skill: "u5", topic: "5.6", calc: true,
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
  { id: "c5t-m14", type: "mcq", skill: "u5", topic: "5.11", calc: true,
    question: String.raw`What is the least distance from the origin to a point on the graph of $y = e^{-x}$?`,
    choices: ["$0.780$", "$1.000$", "$0.426$", "$0.608$"],
    why: [
      String.raw`The square of the distance is $S(x) = x^2 + e^{-2x}$. $S'(x) = 2x - 2e^{-2x} = 0$ at $x = 0.42630$, and $S'$ changes from negative to positive there. The least distance is $\sqrt{S(0.42630)} = 0.780$.`,
      String.raw`$1$ is the distance to $(0, 1)$, the $y$-intercept. Points to the right of it are closer.`,
      String.raw`$0.426$ is the $x$-coordinate of the closest point, not the distance.`,
      String.raw`$0.608$ is the square of the least distance. The square root was not taken.`,
    ],
    answer: 0 },
  { id: "c5t-m15", type: "mcq", skill: "u5", topic: "5.1", calc: true,
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

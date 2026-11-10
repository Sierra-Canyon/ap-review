// AP Calculus AB review bank, Unit 5: Analytical Applications of Differentiation.
import { graph } from "../../plot.js";

// Graph of f' used by c5r-m09, c5r-m10, c5r-m26: straight pieces through (-4, -2), (-2, 2), (1, -1), (3, 1), (5, -1).
// Zeros of f' at -3, 0, 2, 4; corners (where f' changes from increasing to decreasing or back) at -2, 1, 3.
const fpGraph = graph({
  x: [-4, 5], y: [-3, 3], xname: "x", yname: "y",
  segments: [[-4, -2, -2, 2], [-2, 2, 1, -1], [1, -1, 3, 1], [3, 1, 5, -1]],
  dots: [[-4, -2, "closed"], [5, -1, "closed"]],
  alt: "Graph of the derivative f prime on the interval from x = -4 to x = 5, made of four line segments joining the points (-4, -2), (-2, 2), (1, -1), (3, 1), and (5, -1). The graph crosses the x-axis at x = -3, x = 0, x = 2, and x = 4. It rises from x = -4 to x = -2, falls from x = -2 to x = 1, rises from x = 1 to x = 3, and falls from x = 3 to x = 5.",
});

// Graph of f(x) = x^3 - 3x used by c5r-m23.
const cubic = (x) => x ** 3 - 3 * x;
const fGraph = graph({
  x: [-3, 3], y: [-3, 3], xname: "x", yname: "y",
  fns: [{ f: cubic, from: -2.1, to: 2.1, label: "f", labelAt: 1.9 }],
  alt: "Graph of a smooth function f for x from about -2.1 to 2.1. The graph rises to a peak at the point (-1, 2), falls through the origin to a low point at (1, -2), then rises again. It crosses the x-axis at about x = -1.73, x = 0, and x = 1.73, and it changes from concave down to concave up at the origin.",
});

// Graph of f(x) = |x^2 - 4| used by c5r-m25.
const absGraph = graph({
  x: [-3, 3], y: [-1, 6], xname: "x", yname: "y",
  fns: [{ f: (x) => Math.abs(x * x - 4), from: -3, to: 3, label: "f", labelAt: 2.6 }],
  dots: [[-3, 5, "closed"], [3, 5, "closed"]],
  alt: "Graph of f for x from -3 to 3. The graph comes down from (-3, 5) to a sharp corner on the x-axis at (-2, 0), rises along a smooth arch to a rounded peak at (0, 4), falls to a second sharp corner at (2, 0), and rises to (3, 5).",
});

// Graph of f'' = x(x - 3)^2 / 4 on [-1, 4], used by c5r-m28: f''(-1) = -4, f''(1) = 1, f''(2) = 1/2, f''(4) = 1; zero at 0, touch at 3.
const fppGraph = graph({
  x: [-1, 4], y: [-4, 2], xname: "x", yname: "y",
  fns: [{ f: (x) => (x * (x - 3) ** 2) / 4, from: -1, to: 4 }],
  dots: [[-1, -4, "closed"], [4, 1, "closed"]],
  alt: "Graph of the second derivative f double prime for x from -1 to 4. It rises from (-1, -4) and crosses the x-axis at x = 0, rises to a high point near (1, 1), comes back down to touch the x-axis at x = 3 without crossing, and rises to (4, 1).",
});

// Graph of f(x) = -1 + 2(x - 2)/(1 + (x - 2)^2) on [-2, 6], used by c5r-m37: low point (1, -2), high point (3, 0),
// point of inflection (2, -1) where f'(2) = 2 and f''(2) = 0.
const sGraph = graph({
  x: [-2, 6], y: [-3, 1], xname: "x", yname: "y",
  fns: [{ f: (x) => -1 + (2 * (x - 2)) / (1 + (x - 2) ** 2), from: -2, to: 6 }],
  dots: [[1, -2, "closed"], [2, -1, "closed"], [3, 0, "closed"]],
  alt: "Graph of f for x from -2 to 6. The graph falls from about (-2, -1.5) to a low point at (1, -2), rises through the point (2, -1), where it changes from concave up to concave down, to a high point at (3, 0), and then falls slowly toward about (6, -0.5).",
});

// Graph of f(x) = x(x - 3)^2 / 4 on [-1, 5] and four candidate graphs for f', used by c5r-m38.
// f'(x) = 3(x - 1)(x - 3)/4 is Graph C. A is -f', B is f''(x) = (3x - 6)/2, D is 3x(x - 3)/4 (zeros of f).
const cubF = graph({
  x: [-1, 5], y: [-5, 6], step: { x: 1, y: 2 }, xname: "x", yname: "y",
  fns: [{ f: (x) => (x * (x - 3) ** 2) / 4, from: -1, to: 5 }],
  dots: [[1, 1, "closed"], [3, 0, "closed"]],
  alt: "Graph of f for x from -1 to 5. The graph rises from (-1, -4) through the origin to a high point at (1, 1), falls to a low point at (3, 0) on the x-axis, and rises to (5, 5).",
});
const cand = (f, alt) => graph({ x: [-1, 5], y: [-5, 6], step: { x: 1, y: 2 }, xname: "x", yname: "y", width: 260, height: 200, fns: [{ f, from: -1, to: 5 }], alt });
const candA = cand((x) => (-3 * (x - 1) * (x - 3)) / 4, "Graph A: a downward-opening parabola crossing the x-axis at x = 1 and x = 3, highest at x = 2.");
const candB = cand((x) => (3 * x - 6) / 2, "Graph B: a rising straight line crossing the x-axis at x = 2.");
const candC = cand((x) => (3 * (x - 1) * (x - 3)) / 4, "Graph C: an upward-opening parabola crossing the x-axis at x = 1 and x = 3, lowest at x = 2.");
const candD = cand((x) => (3 * x * (x - 3)) / 4, "Graph D: an upward-opening parabola crossing the x-axis at x = 0 and x = 3, lowest at x = 1.5.");

// Graph of f' for c5r-m39: segments through (-3, 0), (-1, 4), (1, 0), (3, 4), (5, 2). f'(x) = 2 at x = -2, 0, 2 and 5.
const fpGraph2 = graph({
  x: [-3, 5], y: [-1, 5], xname: "x", yname: "y",
  segments: [[-3, 0, -1, 4], [-1, 4, 1, 0], [1, 0, 3, 4], [3, 4, 5, 2]],
  dots: [[-3, 0, "closed"], [5, 2, "closed"]],
  alt: "Graph of the derivative f prime for x from -3 to 5, made of four line segments joining the points (-3, 0), (-1, 4), (1, 0), (3, 4), and (5, 2). It touches the x-axis at x = 1.",
});

// Graph of f(x) = (x^3 - 9x^2 + 24x)/4 on [0, 6] with the dashed segment from (0, 0) to (6, 9), used by c5r-m41.
// f'(x) = 3/2 at x = 3 - sqrt(3) and x = 3 + sqrt(3); the segment meets the graph at x = 0, 3, 6.
const mvtGraph = graph({
  x: [0, 6], y: [0, 10], step: { x: 1, y: 2 }, xname: "x", yname: "y",
  fns: [{ f: (x) => (x ** 3 - 9 * x ** 2 + 24 * x) / 4, from: 0, to: 6 }, { f: (x) => 1.5 * x, from: 0, to: 6, dash: true }],
  dots: [[0, 0, "closed"], [6, 9, "closed"]],
  alt: "Graph of f for x from 0 to 6. The graph rises from (0, 0) to a high point at (2, 5), falls to a low point at (4, 4), and rises to (6, 9). A dashed line segment joins (0, 0) and (6, 9).",
});

// Graph of f' for the first free-response question: segment (-3, 2) to (-1, 0), lower semicircle of radius 1 centered at
// the origin, segment (1, 0) to (3, 2), segment (3, 2) to (5, -2).
const semi = (x) => -Math.sqrt(Math.max(0, 1 - x * x));
const frqGraph = graph({
  x: [-3, 5], y: [-3, 3], xname: "x", yname: "y",
  segments: [[-3, 2, -1, 0], [1, 0, 3, 2], [3, 2, 5, -2]],
  fns: [{ f: semi, from: -1, to: 1 }],
  dots: [[-3, 2, "closed"], [5, -2, "closed"]],
  alt: "Graph of the derivative f prime on the interval from x = -3 to x = 5. A line segment falls from (-3, 2) to (-1, 0). Then a semicircle of radius 1 lies below the x-axis from (-1, 0) to (1, 0), with its lowest point at (0, -1). A segment rises from (1, 0) to (3, 2), and a final segment falls from (3, 2) to (5, -2), crossing the x-axis at x = 4.",
});

export const sets = {
  "c5r-s1": { name: "The graph of f'", label: "Graph",
    intro: String.raw`The function $f$ is differentiable on the interval $[-4, 5]$. The graph of its derivative $f'$, which consists of four line segments, is shown below.`,
    sources: [{ title: "", blocks: [{ svg: fpGraph }] }] },
  "c5r-s2": { name: "The graph of f", label: "Graph",
    intro: String.raw`The graph of a differentiable function $f$ is shown below. The graph has horizontal tangent lines at the points $(-1, 2)$ and $(1, -2)$.`,
    sources: [{ title: "", blocks: [{ svg: fGraph }] }] },
  "c5r-s3": { name: "A graph with corners", label: "Graph",
    intro: String.raw`The graph of the continuous function $f(x) = \left|x^2 - 4\right|$ on the interval $[-3, 3]$ is shown below.`,
    sources: [{ title: "", blocks: [{ svg: absGraph }] }] },
  "c5r-s4": { name: "A sign chart for f'", label: "Table",
    intro: String.raw`The function $f$ is continuous for all real numbers. The table shows the sign of $f'(x)$, where it exists.`,
    sources: [{ title: "", blocks: [{ table: { head: ["$x$", "$x < -1$", "$x = -1$", "$-1 < x < 2$", "$x = 2$", "$2 < x < 4$", "$x = 4$", "$x > 4$"], rows: [
      ["$f'(x)$", "positive", "$0$", "negative", "undefined", "negative", "$0$", "positive"],
    ] } }] }] },
  "c5r-s9": { name: "Possible values of f", label: "Table",
    intro: String.raw`The function $f$ is twice differentiable with $f'(x) > 0$ and $f''(x) < 0$ for all $x$. Each row of the table gives possible values of $f(0)$, $f(1)$, and $f(2)$.`,
    sources: [{ title: "", blocks: [{ table: { head: ["Row", "$f(0)$", "$f(1)$", "$f(2)$"], rows: [
      ["A", "$7$", "$4$", "$2$"], ["B", "$2$", "$5$", "$7$"], ["C", "$2$", "$4$", "$7$"], ["D", "$7$", "$5$", "$2$"],
    ] } }] }] },
  "c5r-s10": { name: "The graph of f''", label: "Graph",
    intro: String.raw`The function $f$ is twice differentiable on the interval $[-1, 4]$. The graph of its second derivative $f''$ is shown below. $f''(0) = 0$ and $f''(3) = 0$.`,
    sources: [{ title: "", blocks: [{ svg: fppGraph }] }] },
  "c5r-s11": { name: "A graph of f with a point of inflection", label: "Graph",
    intro: String.raw`The graph of a twice-differentiable function $f$ is shown below. The graph has horizontal tangent lines at $(1, -2)$ and $(3, 0)$, and a point of inflection at $(2, -1)$.`,
    sources: [{ title: "", blocks: [{ svg: sGraph }] }] },
  "c5r-s12": { name: "Choosing the graph of f'", label: "Graphs",
    intro: String.raw`The graph of a differentiable function $f$ is shown first, with a horizontal tangent line at $(1, 1)$ and at $(3, 0)$. Four graphs, labeled A to D, follow it.`,
    sources: [{ title: "", blocks: [{ svg: cubF, caption: "The graph of $f$" }, { svg: candA, caption: "Graph A" }, { svg: candB, caption: "Graph B" }, { svg: candC, caption: "Graph C" }, { svg: candD, caption: "Graph D" }] }] },
  "c5r-s13": { name: "The graph of f' and a line", label: "Graph",
    intro: String.raw`The function $f$ is differentiable on the closed interval $[-3, 5]$. The graph of its derivative $f'$, which consists of four line segments, is shown below. Let $g(x) = f(x) - 2x$.`,
    sources: [{ title: "", blocks: [{ svg: fpGraph2 }] }] },
  "c5r-s14": { name: "Values of f, f', and f''", label: "Table",
    intro: String.raw`The function $f$ is twice differentiable for all real numbers. Selected values of $f$, $f'$, and $f''$ are given in the table below.`,
    sources: [{ title: "", blocks: [{ table: { head: ["$x$", "$1$", "$2$", "$3$", "$4$"], rows: [
      ["$f(x)$", "$5$", "$3$", "$-1$", "$2$"], ["$f'(x)$", "$-2$", "$4$", "$0$", "$-3$"], ["$f''(x)$", "$1$", "$-5$", "$2$", "$6$"],
    ] } }] }] },
  "c5r-s15": { name: "A graph and a secant line", label: "Graph",
    intro: String.raw`The graph of a differentiable function $f$ on the interval $[0, 6]$ is shown below, with the dashed line segment joining $(0, 0)$ and $(6, 9)$. $f$ has a horizontal tangent line at $(2, 5)$ and at $(4, 4)$.`,
    sources: [{ title: "", blocks: [{ svg: mvtGraph }] }] },
  "c5r-s5": { name: "Reading the graph of f'", label: "Free response",
    intro: String.raw`The function $f$ is differentiable on the closed interval $[-3, 5]$. The graph of $f'$, the derivative of $f$, is shown below. It consists of a line segment from $(-3, 2)$ to $(-1, 0)$, a semicircle below the $x$-axis from $(-1, 0)$ to $(1, 0)$, and line segments from $(1, 0)$ to $(3, 2)$ and from $(3, 2)$ to $(5, -2)$. Selected values of $f$ are given in the table.`,
    sources: [{ title: "", blocks: [
      { svg: frqGraph },
      { table: { head: ["$x$", "$-3$", "$-1$", "$0$", "$1$", "$3$", "$4$", "$5$"], rows: [
        ["$f(x)$", "$1$", "$3$", String.raw`$3 - \frac{\pi}{4}$`, String.raw`$3 - \frac{\pi}{2}$`, String.raw`$5 - \frac{\pi}{2}$`, String.raw`$6 - \frac{\pi}{2}$`, String.raw`$5 - \frac{\pi}{2}$`],
      ] } },
      { p: String.raw`Answer each part without a calculator. Show the work that leads to each answer.` },
    ] }] },
  "c5r-s6": { name: "Depth of water in a harbor", label: "Free response",
    intro: String.raw`The depth of the water at a dock in a harbor is modeled by $D(t) = 6 + 2\sin\left(\dfrac{t}{2}\right) - 0.3t$, where $D(t)$ is measured in feet and $t$ is measured in hours after midnight, for $0 \le t \le 12$.`,
    sources: [{ title: "", blocks: [{ p: String.raw`A graphing calculator is allowed. Give decimal answers to three decimal places.` }] }] },
  "c5r-s7": { name: "A curve defined implicitly", label: "Free response",
    intro: String.raw`Consider the curve given by $x^2 + 4xy + 5y^2 = 4$.`,
    sources: [{ title: "", blocks: [{ p: String.raw`Answer each part without a calculator. Show the work that leads to each answer.` }] }] },
  "c5r-s8": { name: "A pen along a wall", label: "Free response",
    intro: String.raw`A rectangular pen is built against a long straight wall, so no fence is needed along the wall. Fence is used for the side parallel to the wall, for the two sides perpendicular to the wall, and for one divider that is also perpendicular to the wall and splits the pen into two parts. A total of $240$ meters of fence is used. Let $x$ be the length, in meters, of each of the three fence pieces perpendicular to the wall.`,
    sources: [{ title: "", blocks: [{ p: String.raw`Answer each part without a calculator. Show the work that leads to each answer.` }] }] },
};

export default [
  // 5.1 Using the Mean Value Theorem
  { id: "c5r-m01", type: "mcq", skill: "u5", topic: "5.1", calc: false, difficulty: "moderate",
    stem: String.raw`Let $f(x) = x^3 - x$.`,
    question: String.raw`What value of $c$ satisfies the conclusion of the Mean Value Theorem for $f$ on the interval $[0, 2]$?`,
    choices: [String.raw`$\frac{2\sqrt{3}}{3}$`, "$1$", String.raw`$\frac{\sqrt{3}}{3}$`, String.raw`$\frac{\sqrt{21}}{3}$`],
    why: [
      String.raw`The average rate of change is $\dfrac{f(2) - f(0)}{2 - 0} = \dfrac{6 - 0}{2} = 3$. Setting $f'(c) = 3c^2 - 1 = 3$ gives $c^2 = \dfrac{4}{3}$, so $c = \dfrac{2}{\sqrt{3}} = \dfrac{2\sqrt{3}}{3}$, which is in $(0, 2)$.`,
      String.raw`$1$ is the midpoint of the interval. The Mean Value Theorem value solves $f'(c) = 3$, and $f'(1) = 2$.`,
      String.raw`This solves $f'(c) = 0$, where the tangent line is horizontal. The theorem matches the slope of the secant line, which is $3$, not $0$.`,
      String.raw`This solves $3c^2 - 1 = 6$, using the change $f(2) - f(0) = 6$ without dividing by the length of the interval.`,
    ],
    answer: 0 },
  { id: "c5r-m02", type: "mcq", skill: "u5", topic: "5.1", calc: false, difficulty: "moderate",
    question: String.raw`For which of the following functions are the hypotheses of the Mean Value Theorem satisfied on the interval $[0, 4]$?`,
    choices: [String.raw`$f(x) = \sqrt{x}$`, String.raw`$f(x) = x + |x - 1|$`, String.raw`$f(x) = \sqrt[3]{x - 3}$`, String.raw`$f(x) = \dfrac{1}{x - 2}$`],
    why: [
      String.raw`$\sqrt{x}$ is continuous on $[0, 4]$, and $f'(x) = \dfrac{1}{2\sqrt{x}}$ exists for every $x$ in the open interval $(0, 4)$. The theorem needs differentiability only on the open interval, so $f'(0)$ not existing does not matter.`,
      String.raw`$x + |x - 1|$ is continuous on $[0, 4]$ but is not differentiable at $x = 1$, where the graph has a corner: the slope is $0$ from the left and $2$ from the right.`,
      String.raw`$\sqrt[3]{x - 3}$ is continuous, but $f'(x) = \dfrac{1}{3(x - 3)^{2/3}}$ does not exist at $x = 3$, where the graph has a vertical tangent line.`,
      String.raw`$\dfrac{1}{x - 2}$ is not defined at $x = 2$, so it is not continuous on $[0, 4]$.`,
    ],
    answer: 0 },
  { id: "c5r-m03", type: "mcq", skill: "u5", topic: "5.1", calc: true, difficulty: "moderate",
    stem: String.raw`Let $f(x) = \ln(x + 1)$.`,
    question: String.raw`What value of $c$ in the interval $(0, 4)$ satisfies the conclusion of the Mean Value Theorem for $f$ on $[0, 4]$?`,
    choices: ["$1.485$", "$2.000$", "$2.485$", "$0.402$"],
    why: [
      String.raw`The average rate of change is $\dfrac{\ln 5 - \ln 1}{4} = 0.40236$. Solving $f'(c) = \dfrac{1}{c + 1} = 0.40236$ gives $c + 1 = 2.48534$, so $c = 1.485$.`,
      String.raw`$2$ is the midpoint of the interval. The Mean Value Theorem value is where $f'(c)$ equals the average rate of change, and $f'(2) = \dfrac{1}{3}$.`,
      String.raw`This uses $f'(x) = \dfrac{1}{x}$, the derivative of $\ln x$, so it solves $\dfrac{1}{c} = 0.40236$. The derivative of $\ln(x + 1)$ is $\dfrac{1}{x + 1}$.`,
      String.raw`$0.402$ is the average rate of change, the slope that $f'(c)$ must equal, not the value of $c$.`,
    ],
    answer: 0 },
  { id: "c5r-m04", type: "mcq", skill: "u5", topic: "5.1", calc: false, difficulty: "easy",
    stem: String.raw`The function $f$ is differentiable for all real numbers, with $f(1) = 4$ and $f(6) = -6$.`,
    question: String.raw`Which of the following must be true?`,
    choices: [
      String.raw`$f'(c) = -2$ for some $c$ in the interval $(1, 6)$.`,
      String.raw`$f'(c) = 2$ for some $c$ in the interval $(1, 6)$.`,
      String.raw`$f'(c) = -10$ for some $c$ in the interval $(1, 6)$.`,
      String.raw`$f'(c) = 0$ for some $c$ in the interval $(1, 6)$.`,
    ],
    why: [
      String.raw`$f$ is differentiable, so it is continuous on $[1, 6]$ and differentiable on $(1, 6)$. By the Mean Value Theorem, some $c$ in $(1, 6)$ has $f'(c) = \dfrac{-6 - 4}{6 - 1} = -2$.`,
      String.raw`The sign is wrong. The function decreases from $4$ to $-6$, so the average rate of change is negative.`,
      String.raw`$-10$ is the total change $f(6) - f(1)$. The Mean Value Theorem uses the change divided by the length of the interval, $5$.`,
      String.raw`This would follow from Rolle's Theorem only if $f(1) = f(6)$. Here the endpoint values differ.`,
    ],
    answer: 0 },

  // 5.2 Extreme Value Theorem, global versus local extrema, critical points
  { id: "c5r-m05", type: "mcq", skill: "u5", topic: "5.2", calc: false, difficulty: "moderate",
    stem: String.raw`Let $f(x) = x - 3x^{2/3}$.`,
    question: String.raw`What are all the critical points of $f$?`,
    choices: [String.raw`$x = 0$ and $x = 8$`, String.raw`$x = 8$ only`, String.raw`$x = 0$ and $x = 27$`, String.raw`$x = 0$, $x = 8$, and $x = 27$`],
    why: [
      String.raw`$f'(x) = 1 - 2x^{-1/3} = \dfrac{x^{1/3} - 2}{x^{1/3}}$. $f'(8) = 0$ because $8^{1/3} = 2$, and $f'(0)$ does not exist while $f(0) = 0$ is defined, so both are critical points.`,
      String.raw`This finds only where $f'(x) = 0$. A critical point is also a point in the domain where $f'$ does not exist, and $f'(0)$ does not exist.`,
      String.raw`$x = 0$ and $x = 27$ are the zeros of $f$, where $x = 3x^{2/3}$. Critical points come from $f'$, and $f'(27) = 1 - \dfrac{2}{3} \ne 0$.`,
      String.raw`$x = 27$ is a zero of $f$, not a critical point. Only $x = 0$ and $x = 8$ are critical points.`,
    ],
    answer: 0 },
  { id: "c5r-m06", type: "mcq", skill: "u5", topic: "5.2", calc: false, difficulty: "moderate",
    question: String.raw`For which of the following does the Extreme Value Theorem guarantee that the function has both an absolute maximum and an absolute minimum on the given interval?`,
    choices: [
      String.raw`$f(x) = \sqrt{9 - x^2}$ on $[-3, 3]$`,
      String.raw`$f(x) = \dfrac{1}{x - 1}$ on $[0, 2]$`,
      String.raw`$f(x) = x^2$ on $(0, 2)$`,
      String.raw`$f(x) = \tan x$ on $[0, \pi]$`,
    ],
    why: [
      String.raw`$9 - x^2 \ge 0$ on $[-3, 3]$, so $f$ is defined and continuous on the whole closed interval. The Extreme Value Theorem applies.`,
      String.raw`$\dfrac{1}{x - 1}$ is not defined at $x = 1$, which is in $[0, 2]$, so $f$ is not continuous there. In fact $f$ has no absolute maximum or minimum on $[0, 2]$: it grows without bound as $x \to 1^{+}$.`,
      String.raw`The interval is open. On $(0, 2)$, $x^2$ gets close to $0$ and $4$ but never reaches them, so it has no absolute extrema there.`,
      String.raw`$\tan x$ is not continuous at $x = \dfrac{\pi}{2}$, which is in $[0, \pi]$, so the theorem does not apply.`,
    ],
    answer: 0 },
  { id: "c5r-m07", type: "mcq", skill: "u5", topic: "5.2", calc: false, difficulty: "moderate",
    stem: String.raw`Let $f(x) = 2x^3 - 3x^2 - 12x$ on the closed interval $[-2, 4]$.`,
    question: String.raw`Which of the following statements is true?`,
    choices: [
      String.raw`The absolute maximum of $f$ on $[-2, 4]$ is at $x = 4$.`,
      String.raw`The absolute maximum of $f$ on $[-2, 4]$ is at $x = -1$.`,
      String.raw`The absolute minimum of $f$ on $[-2, 4]$ is at $x = -2$.`,
      String.raw`$f$ has no absolute maximum on $[-2, 4]$ because $f'(4) \ne 0$.`,
    ],
    why: [
      String.raw`$f'(x) = 6x^2 - 6x - 12 = 6(x - 2)(x + 1)$ changes from positive to negative at $x = -1$, a relative maximum with $f(-1) = 7$. But $f(4) = 32 > 7$, so the absolute maximum is at the endpoint $x = 4$.`,
      String.raw`$f$ has a relative maximum at $x = -1$, but $f(-1) = 7$ is less than the endpoint value $f(4) = 32$.`,
      String.raw`$f(-2) = -4$, but $f(2) = -20$ is smaller. The absolute minimum is at $x = 2$.`,
      String.raw`$f$ is continuous on a closed interval, so the Extreme Value Theorem guarantees an absolute maximum. An absolute maximum can occur at an endpoint where $f'$ is not $0$.`,
    ],
    answer: 0 },

  // 5.3 Increasing and decreasing
  { id: "c5r-m08", type: "mcq", skill: "u5", topic: "5.3", calc: false, difficulty: "moderate",
    stem: String.raw`Let $f(x) = x^4 - 4x^3 + 4x^2$.`,
    question: String.raw`On which of the following is $f$ increasing?`,
    choices: [
      String.raw`$(0, 1)$ and $(2, \infty)$`,
      String.raw`$(-\infty, 0)$ and $(1, 2)$`,
      String.raw`$(2, \infty)$ only`,
      String.raw`$(-\infty, 0)$ and $(2, \infty)$`,
    ],
    why: [
      String.raw`$f'(x) = 4x^3 - 12x^2 + 8x = 4x(x - 1)(x - 2)$. Testing each interval: $f' < 0$ on $(-\infty, 0)$, $f' > 0$ on $(0, 1)$, $f' < 0$ on $(1, 2)$, and $f' > 0$ on $(2, \infty)$.`,
      String.raw`These are the intervals where $f'(x) < 0$, where $f$ is decreasing.`,
      String.raw`This misses the interval $(0, 1)$, where $f'(x) = 4x(x - 1)(x - 2)$ is also positive.`,
      String.raw`This is the sign of $x(x - 2)$ alone. The factor $x - 1$ also changes sign, at $x = 1$.`,
    ],
    answer: 0 },
  { id: "c5r-m09", type: "mcq", skill: "u5", topic: "5.3", calc: false, difficulty: "easy", set: "c5r-s1",
    question: String.raw`On which of the following open intervals is $f$ increasing?`,
    choices: [
      String.raw`$(-3, 0)$ and $(2, 4)$`,
      String.raw`$(-4, -2)$ and $(1, 3)$`,
      String.raw`$(-2, 1)$ and $(3, 5)$`,
      String.raw`$(-4, -3)$, $(0, 2)$, and $(4, 5)$`,
    ],
    why: [
      String.raw`$f$ is increasing where $f'(x) > 0$, where the graph of $f'$ is above the $x$-axis: between $x = -3$ and $x = 0$, and between $x = 2$ and $x = 4$.`,
      String.raw`These are where the graph of $f'$ is rising, so $f''(x) > 0$ and $f$ is concave up. Increasing depends on the sign of $f'$, not on whether $f'$ is rising.`,
      String.raw`These are where the graph of $f'$ is falling, where $f$ is concave down.`,
      String.raw`These are where $f'(x) < 0$, where $f$ is decreasing.`,
    ],
    answer: 0 },

  // 5.4 First Derivative Test
  { id: "c5r-m10", type: "mcq", skill: "u5", topic: "5.4", calc: false, difficulty: "easy", set: "c5r-s1",
    question: String.raw`At which values of $x$ in the open interval $(-4, 5)$ does $f$ have a relative maximum?`,
    choices: [String.raw`$x = 0$ and $x = 4$`, String.raw`$x = -3$ and $x = 2$`, String.raw`$x = -2$ and $x = 3$`, String.raw`$x = -2$, $x = 1$, and $x = 3$`],
    why: [
      String.raw`By the First Derivative Test, $f$ has a relative maximum where $f'$ changes from positive to negative. The graph of $f'$ crosses from above the axis to below it at $x = 0$ and $x = 4$.`,
      String.raw`At $x = -3$ and $x = 2$, $f'$ changes from negative to positive, so these are relative minima of $f$.`,
      String.raw`These are where $f'$ itself has relative maxima. At these points $f'(x) > 0$, so $f$ is still increasing.`,
      String.raw`These are where the graph of $f'$ changes direction, the points of inflection of $f$. $f'$ is not $0$ at any of them.`,
    ],
    answer: 0 },
  { id: "c5r-m11", type: "mcq", skill: "u5", topic: "5.4", calc: false, difficulty: "difficult",
    stem: String.raw`Let $f(x) = x^2\ln x$ for $x > 0$.`,
    question: String.raw`What is the relative minimum value of $f$?`,
    choices: [String.raw`$-\frac{1}{2e}$`, String.raw`$\frac{1}{\sqrt{e}}$`, String.raw`$\frac{1}{2e}$`, "$0$"],
    why: [
      String.raw`$f'(x) = 2x\ln x + x = x(2\ln x + 1)$, which changes from negative to positive at $x = e^{-1/2}$. The value there is $f\left(e^{-1/2}\right) = e^{-1}\left(-\dfrac{1}{2}\right) = -\dfrac{1}{2e}$.`,
      String.raw`$\dfrac{1}{\sqrt{e}} = e^{-1/2}$ is the $x$-value where the minimum occurs. The question asks for the value of $f$ there.`,
      String.raw`The sign is wrong: $\ln\left(e^{-1/2}\right) = -\dfrac{1}{2}$, so $f\left(e^{-1/2}\right)$ is negative.`,
      String.raw`This uses $f'(x) = 2x\ln x$, leaving out the second term of the product rule, so it finds $x = 1$ and $f(1) = 0$.`,
    ],
    answer: 0 },
  { id: "c5r-m12", type: "mcq", skill: "u5", topic: "5.4", calc: false, difficulty: "moderate",
    stem: String.raw`The derivative of a function $f$ is $f'(x) = (x - 1)^2(x + 3)e^{x}$.`,
    question: String.raw`At which values of $x$ does $f$ have a relative minimum?`,
    choices: [String.raw`$x = -3$ only`, String.raw`$x = 1$ only`, String.raw`$x = -3$ and $x = 1$`, String.raw`$x = 3$ only`],
    why: [
      String.raw`$(x - 1)^2 \ge 0$ and $e^{x} > 0$, so the sign of $f'$ is the sign of $x + 3$. $f'$ changes from negative to positive at $x = -3$, a relative minimum. At $x = 1$, $f'$ is positive on both sides, so there is no extremum.`,
      String.raw`$f'(1) = 0$, but $f'$ does not change sign at $x = 1$ because the factor $(x - 1)^2$ is squared. By the First Derivative Test there is no extremum there.`,
      String.raw`Both are critical points, but only $x = -3$ passes the First Derivative Test. $f'$ does not change sign at $x = 1$.`,
      String.raw`The zero of $x + 3$ is $x = -3$, not $x = 3$. This is a sign error.`,
    ],
    answer: 0 },
  { id: "c5r-m13", type: "mcq", skill: "u5", topic: "5.4", calc: false, difficulty: "moderate", set: "c5r-s4",
    question: String.raw`Which of the following describes all the relative extrema of $f$?`,
    choices: [
      String.raw`A relative maximum at $x = -1$ and a relative minimum at $x = 4$`,
      String.raw`A relative maximum at $x = -1$ and relative minima at $x = 2$ and $x = 4$`,
      String.raw`A relative minimum at $x = -1$ and a relative maximum at $x = 4$`,
      String.raw`A relative maximum at $x = -1$ only`,
    ],
    why: [
      String.raw`$f'$ changes from positive to negative at $x = -1$, so $f$ has a relative maximum there. $f'$ changes from negative to positive at $x = 4$, a relative minimum. At $x = 2$, $f'$ is negative on both sides, so there is no extremum.`,
      String.raw`$x = 2$ is a critical point because $f'(2)$ is undefined, but $f'$ is negative on both sides of it, so $f$ keeps decreasing through $x = 2$.`,
      String.raw`The types are reversed. Positive to negative is a relative maximum, and negative to positive is a relative minimum.`,
      String.raw`This misses $x = 4$, where $f'$ changes from negative to positive.`,
    ],
    answer: 0 },

  // 5.5 Candidates Test
  { id: "c5r-m14", type: "mcq", skill: "u5", topic: "5.5", calc: false, difficulty: "moderate",
    stem: String.raw`Let $f(x) = 2x^3 - 15x^2 + 24x$.`,
    question: String.raw`What is the absolute maximum value of $f$ on the closed interval $[0, 6]$?`,
    choices: ["$36$", "$11$", "$-16$", "$60$"],
    why: [
      String.raw`$f'(x) = 6x^2 - 30x + 24 = 6(x - 1)(x - 4)$, so the critical points are $x = 1$ and $x = 4$. The candidates are $f(0) = 0$, $f(1) = 11$, $f(4) = -16$, and $f(6) = 36$. The largest is $36$.`,
      String.raw`$f(1) = 11$ is a relative maximum, but the Candidates Test must also check the endpoints, and $f(6) = 36$ is larger.`,
      String.raw`$-16 = f(4)$ is the absolute minimum value.`,
      String.raw`$60$ is $f'(6)$, the slope at the right endpoint, not the value of $f$.`,
    ],
    answer: 0 },
  { id: "c5r-m15", type: "mcq", skill: "u5", topic: "5.5", calc: false, difficulty: "difficult",
    stem: String.raw`Let $f(x) = \sin(2x) - x$.`,
    question: String.raw`What is the absolute maximum value of $f$ on the closed interval $[0, \pi]$?`,
    choices: [String.raw`$\frac{\sqrt{3}}{2} - \frac{\pi}{6}$`, String.raw`$-\frac{\sqrt{3}}{2} - \frac{5\pi}{6}$`, String.raw`$\frac{1}{2} - \frac{\pi}{6}$`, String.raw`$\frac{\pi}{6}$`],
    why: [
      String.raw`$f'(x) = 2\cos(2x) - 1 = 0$ when $\cos(2x) = \dfrac{1}{2}$, so $2x = \dfrac{\pi}{3}$ or $\dfrac{5\pi}{3}$ and $x = \dfrac{\pi}{6}$ or $\dfrac{5\pi}{6}$. The candidates are $f(0) = 0$, $f\left(\dfrac{\pi}{6}\right) = \dfrac{\sqrt{3}}{2} - \dfrac{\pi}{6}$, $f\left(\dfrac{5\pi}{6}\right) = -\dfrac{\sqrt{3}}{2} - \dfrac{5\pi}{6}$, and $f(\pi) = -\pi$. Since $\dfrac{\sqrt{3}}{2} > \dfrac{\pi}{6}$, the largest is $\dfrac{\sqrt{3}}{2} - \dfrac{\pi}{6} \approx 0.342$.`,
      String.raw`This is $f\left(\dfrac{5\pi}{6}\right) \approx -3.484$, the smallest of the candidate values, so it is the absolute minimum value.`,
      String.raw`This uses $\sin\left(\dfrac{\pi}{3}\right) = \dfrac{1}{2}$, which is the cosine value. $\sin\left(\dfrac{\pi}{3}\right) = \dfrac{\sqrt{3}}{2}$.`,
      String.raw`$\dfrac{\pi}{6}$ is the $x$-value where the maximum occurs, not the maximum value.`,
    ],
    answer: 0 },
  { id: "c5r-m16", type: "mcq", skill: "u5", topic: "5.5", calc: true, difficulty: "moderate",
    stem: String.raw`Let $f(x) = \ln\left(x^2 + 1\right) - \dfrac{x}{2}$.`,
    question: String.raw`What is the absolute maximum value of $f$ on the closed interval $[0, 4]$?`,
    choices: ["$0.837$", "$0.833$", "$3.732$", "$-0.065$"],
    why: [
      String.raw`$f'(x) = \dfrac{2x}{x^2 + 1} - \dfrac{1}{2} = 0$ when $x^2 - 4x + 1 = 0$, so $x = 0.268$ or $x = 3.732$. The candidates are $f(0) = 0$, $f(0.268) = -0.065$, $f(3.732) = 0.837$, and $f(4) = 0.833$. The largest is $0.837$.`,
      String.raw`$0.833$ is $f(4)$, the value at the right endpoint. The value at the critical point $x = 3.732$ is slightly larger.`,
      String.raw`$3.732$ is the $x$-value where the maximum occurs, not the maximum value.`,
      String.raw`$-0.065$ is $f(0.268)$, the absolute minimum value.`,
    ],
    answer: 0 },

  // 5.6 Concavity
  { id: "c5r-m17", type: "mcq", skill: "u5", topic: "5.6", calc: false, difficulty: "easy",
    stem: String.raw`Let $f(x) = x^4 - 6x^3 + 12x^2$.`,
    question: String.raw`On which of the following is the graph of $f$ concave down?`,
    choices: [String.raw`$(1, 2)$`, String.raw`$(-\infty, 1)$ and $(2, \infty)$`, String.raw`$(-\infty, 0)$`, String.raw`$\left(-\infty, \frac{3}{2}\right)$`],
    why: [
      String.raw`$f'(x) = 4x^3 - 18x^2 + 24x$ and $f''(x) = 12x^2 - 36x + 24 = 12(x - 1)(x - 2)$. $f''(x) < 0$ for $1 < x < 2$.`,
      String.raw`These are the intervals where $f''(x) > 0$, where the graph is concave up.`,
      String.raw`This is where $f'(x) < 0$, where $f$ is decreasing. Concavity depends on the sign of $f''$.`,
      String.raw`This is where $f'''(x) = 24x - 36 < 0$, where $f''$ is decreasing. Concavity depends on the sign of $f''$, not on whether $f''$ is decreasing.`,
    ],
    answer: 0 },
  { id: "c5r-m18", type: "mcq", skill: "u5", topic: "5.6", calc: false, difficulty: "moderate",
    stem: String.raw`The second derivative of a function $f$ is $f''(x) = x^3(x - 3)^2(x + 2)$.`,
    question: String.raw`At which values of $x$ does the graph of $f$ have a point of inflection?`,
    choices: [String.raw`$x = -2$ and $x = 0$`, String.raw`$x = -2$, $x = 0$, and $x = 3$`, String.raw`$x = -2$ only`, String.raw`$x = 2$, $x = 0$, and $x = -3$`],
    why: [
      String.raw`A point of inflection is where $f''$ changes sign. $(x - 3)^2 \ge 0$, so the sign of $f''$ is the sign of $x^3(x + 2)$. The odd power $x^3$ changes sign at $x = 0$ and $x + 2$ changes sign at $x = -2$, so $f''$ changes sign at both. At $x = 3$, $f''$ is positive on both sides.`,
      String.raw`$f''(3) = 0$, but $f''$ does not change sign at $x = 3$ because the factor $(x - 3)^2$ is squared.`,
      String.raw`This treats $x^3$ like an even power. $x^3$ is negative for $x < 0$ and positive for $x > 0$, so $f''$ also changes sign at $x = 0$.`,
      String.raw`This is a sign error: the zeros of $x - 3$ and $x + 2$ are $x = 3$ and $x = -2$, and only $x = -2$ and $x = 0$ give sign changes.`,
    ],
    answer: 0 },
  { id: "c5r-m19", type: "mcq", skill: "u5", topic: "5.6", calc: true, difficulty: "moderate",
    stem: String.raw`The derivative of a function $f$ is $f'(x) = \sin\left(x^2\right)$ for $0 < x < 2$.`,
    question: String.raw`On which interval is the graph of $f$ concave up?`,
    choices: [String.raw`$0 < x < 1.253$`, String.raw`$0 < x < 1.772$`, String.raw`$1.253 < x < 2$`, String.raw`$0 < x < 1.571$`],
    why: [
      String.raw`The graph of $f$ is concave up where $f''(x) = 2x\cos\left(x^2\right) > 0$. For $0 < x < 2$ this is where $\cos\left(x^2\right) > 0$, so $x^2 < \dfrac{\pi}{2}$ and $x < 1.253$.`,
      String.raw`This is where $f'(x) = \sin\left(x^2\right) > 0$, where $f$ is increasing. Concavity depends on the sign of $f''$.`,
      String.raw`This is where $f''(x) < 0$, where the graph of $f$ is concave down.`,
      String.raw`This solves $\cos x > 0$ instead of $\cos\left(x^2\right) > 0$, so it gives $x < \dfrac{\pi}{2}$ instead of $x^2 < \dfrac{\pi}{2}$.`,
    ],
    answer: 0 },

  // 5.7 Second Derivative Test
  { id: "c5r-m20", type: "mcq", skill: "u5", topic: "5.7", calc: false, difficulty: "easy",
    stem: String.raw`Let $f(x) = x^3 + 3x^2 - 9x$.`,
    question: String.raw`Which of the following is true?`,
    choices: [
      String.raw`$f$ has a relative maximum at $x = -3$ and a relative minimum at $x = 1$.`,
      String.raw`$f$ has a relative minimum at $x = -3$ and a relative maximum at $x = 1$.`,
      String.raw`$f$ has a relative minimum at $x = -1$.`,
      String.raw`$f$ has relative minima at $x = -3$ and $x = 1$.`,
    ],
    why: [
      String.raw`$f'(x) = 3x^2 + 6x - 9 = 3(x + 3)(x - 1) = 0$ at $x = -3$ and $x = 1$, and $f''(x) = 6x + 6$. By the Second Derivative Test, $f''(-3) = -12 < 0$ gives a relative maximum and $f''(1) = 12 > 0$ gives a relative minimum.`,
      String.raw`The test is reversed. A negative second derivative at a critical point means concave down, which is a relative maximum.`,
      String.raw`$x = -1$ is where $f''(x) = 0$, a point of inflection. $f'(-1) = -12 \ne 0$, so it is not a critical point.`,
      String.raw`$f''(-3) = -12 < 0$, so $x = -3$ is a relative maximum, not a minimum.`,
    ],
    answer: 0 },
  { id: "c5r-m21", type: "mcq", skill: "u5", topic: "5.7", calc: false, difficulty: "easy",
    stem: String.raw`The function $f$ has a continuous second derivative for all real numbers, with $f'(-1) = 0$ and $f''(-1) = 5$.`,
    question: String.raw`Which of the following is true?`,
    choices: [
      String.raw`$f$ has a relative minimum at $x = -1$.`,
      String.raw`$f$ has a relative maximum at $x = -1$.`,
      String.raw`The graph of $f$ has a point of inflection at $x = -1$.`,
      String.raw`There is not enough information to determine whether $f$ has a relative extremum at $x = -1$.`,
    ],
    why: [
      String.raw`$x = -1$ is a critical point because $f'(-1) = 0$, and the graph is concave up there because $f''(-1) > 0$. By the Second Derivative Test, $f$ has a relative minimum at $x = -1$.`,
      String.raw`A relative maximum would need $f''(-1) < 0$. The graph is concave up at $x = -1$.`,
      String.raw`A point of inflection needs $f''$ to change sign. Here $f''(-1) = 5 \ne 0$, and $f''$ is continuous, so $f''$ is positive near $x = -1$.`,
      String.raw`The Second Derivative Test gives a conclusion whenever $f'(c) = 0$ and $f''(c) \ne 0$. It fails only when $f''(c) = 0$.`,
    ],
    answer: 0 },
  { id: "c5r-m22", type: "mcq", skill: "u5", topic: "5.7", calc: false, difficulty: "difficult",
    stem: String.raw`The function $f$ is twice differentiable for all real numbers, with $f'(2) = 0$ and $f''(2) = 0$.`,
    question: String.raw`What can be concluded about $f$ at $x = 2$?`,
    choices: [
      String.raw`No conclusion about an extremum is possible.`,
      String.raw`The graph of $f$ has a point of inflection at $x = 2$.`,
      String.raw`$f$ has neither a relative maximum nor a relative minimum at $x = 2$.`,
      String.raw`$f$ has a relative minimum at $x = 2$, because $f'(2) = 0$.`,
    ],
    why: [
      String.raw`When $f''(2) = 0$, the Second Derivative Test gives no conclusion. $(x - 2)^4$ has a relative minimum at $x = 2$, $-(x - 2)^4$ has a relative maximum, and $(x - 2)^3$ has neither, and all three have $f'(2) = f''(2) = 0$.`,
      String.raw`$f''(2) = 0$ does not guarantee that $f''$ changes sign. For $(x - 2)^4$, $f'' \ge 0$ on both sides, so there is no point of inflection.`,
      String.raw`This is true for $(x - 2)^3$ but not for $(x - 2)^4$, which has a relative minimum at $x = 2$.`,
      String.raw`$f'(2) = 0$ makes $x = 2$ a critical point, but a critical point can be a maximum or neither. $-(x - 2)^4$ has a relative maximum at $x = 2$.`,
    ],
    answer: 0 },

  // 5.8 Sketching graphs of functions and their derivatives
  { id: "c5r-m23", type: "mcq", skill: "u5", topic: "5.8", calc: false, difficulty: "easy", set: "c5r-s2",
    question: String.raw`At which values of $x$ does the graph of $f'$ cross or touch the $x$-axis?`,
    choices: [String.raw`$x = -1$ and $x = 1$`, String.raw`$x = -\sqrt{3}$, $x = 0$, and $x = \sqrt{3}$`, String.raw`$x = 0$ only`, String.raw`$x = 2$ and $x = -2$`],
    why: [
      String.raw`$f'(x) = 0$ where the graph of $f$ has a horizontal tangent line, at the peak $(-1, 2)$ and the low point $(1, -2)$. So the graph of $f'$ meets the $x$-axis at $x = -1$ and $x = 1$.`,
      String.raw`These are the $x$-intercepts of the graph of $f$, where $f(x) = 0$. The graph of $f'$ meets the axis where the slope of $f$ is $0$.`,
      String.raw`At $x = 0$ the graph of $f$ changes concavity, so $f''(0) = 0$. The slope of $f$ there is negative, so $f'(0) < 0$.`,
      String.raw`These are the $y$-values of the high and low points, $2$ and $-2$, used as $x$-values.`,
    ],
    answer: 0 },
  { id: "c5r-m24", type: "mcq", skill: "u5", topic: "5.8", calc: false, difficulty: "difficult",
    stem: String.raw`The function $f$ is twice differentiable for all real numbers, and the graph of $f$ has a point of inflection at $x = 2$.`,
    question: String.raw`Which of the following must be true about the graph of $f'$?`,
    choices: [
      String.raw`The graph of $f'$ has a relative extremum at $x = 2$.`,
      String.raw`The graph of $f'$ crosses the $x$-axis at $x = 2$.`,
      String.raw`The graph of $f'$ has a point of inflection at $x = 2$.`,
      String.raw`The graph of $f'$ is concave up at $x = 2$.`,
    ],
    why: [
      String.raw`At a point of inflection, $f''$ changes sign. Since $f''$ is the derivative of $f'$, the graph of $f'$ changes from increasing to decreasing or from decreasing to increasing at $x = 2$, which is a relative extremum of $f'$.`,
      String.raw`That would mean $f'(2) = 0$, a horizontal tangent on the graph of $f$. A point of inflection can have any slope, for example $x^3 + x$ at $x = 0$ has slope $1$.`,
      String.raw`A point of inflection of $f'$ would come from a sign change of $f'''$. Nothing is known about $f'''$.`,
      String.raw`Concavity of $f'$ depends on $f'''$, which is not given. The graph of $f'$ could be concave up, concave down, or neither at $x = 2$.`,
    ],
    answer: 0 },
  { id: "c5r-m25", type: "mcq", skill: "u5", topic: "5.8", calc: false, difficulty: "moderate", set: "c5r-s3",
    question: String.raw`For which values of $x$ in the open interval $(-3, 3)$ does $f'(x)$ fail to exist?`,
    choices: [String.raw`$x = -2$ and $x = 2$`, String.raw`$x = 0$ only`, String.raw`$x = -2$, $x = 0$, and $x = 2$`, String.raw`$f'(x)$ exists for every $x$ in $(-3, 3)$.`],
    why: [
      String.raw`The graph has sharp corners at $(-2, 0)$ and $(2, 0)$. Near $x = 2$, the slope is $-2x \to -4$ from the left and $2x \to 4$ from the right, so $f'(2)$ does not exist, and the same happens at $x = -2$. The graph of $f'$ has jump discontinuities there.`,
      String.raw`At $x = 0$ the graph has a smooth, rounded peak, so $f'(0) = 0$ exists.`,
      String.raw`$f'(0) = 0$ exists because the peak at $(0, 4)$ is rounded, not a corner.`,
      String.raw`$f$ is continuous everywhere, but continuity does not make it differentiable. The corners at $x = \pm 2$ have different slopes from the left and the right.`,
    ],
    answer: 0 },

  // 5.9 Connecting f, f', and f''
  { id: "c5r-m26", type: "mcq", skill: "u5", topic: "5.9", calc: false, difficulty: "moderate", set: "c5r-s1",
    question: String.raw`On which of the following open intervals is $f$ both decreasing and concave up?`,
    choices: [
      String.raw`$(-4, -3)$ and $(1, 2)$`,
      String.raw`$(-3, -2)$ and $(2, 3)$`,
      String.raw`$(0, 1)$ and $(4, 5)$`,
      String.raw`$(-2, 0)$ and $(3, 4)$`,
    ],
    why: [
      String.raw`$f$ is decreasing where $f' < 0$, on $(-4, -3)$, $(0, 2)$, and $(4, 5)$. $f$ is concave up where $f'$ is increasing, on $(-4, -2)$ and $(1, 3)$. Both hold on $(-4, -3)$ and $(1, 2)$.`,
      String.raw`On these intervals $f' > 0$ and $f'$ is increasing, so $f$ is increasing and concave up.`,
      String.raw`On these intervals $f' < 0$ and $f'$ is decreasing, so $f$ is decreasing and concave down.`,
      String.raw`On these intervals $f' > 0$ and $f'$ is decreasing, so $f$ is increasing and concave down.`,
    ],
    answer: 0 },
  { id: "c5r-m27", type: "mcq", skill: "u5", topic: "5.9", calc: false, difficulty: "moderate", set: "c5r-s9",
    question: String.raw`Which row of the table could give the values of $f$?`,
    choices: ["Row B", "Row C", "Row D", "Row A"],
    why: [
      String.raw`$f' > 0$, so the values must increase. $f'' < 0$, so $f'$ is decreasing and the increases must get smaller. Row B rises by $3$ and then by $2$.`,
      String.raw`Row C rises by $2$ and then by $3$. Growing increases fit a graph that is concave up, so $f'' > 0$.`,
      String.raw`Row D falls, so $f' < 0$ somewhere. Its drops of $2$ and then $3$ fit a function that is decreasing and concave down.`,
      String.raw`Row A falls, so $f' < 0$ somewhere. Its drops of $3$ and then $2$ fit a function that is decreasing and concave up.`,
    ],
    answer: 0 },
  { id: "c5r-m28", type: "mcq", skill: "u5", topic: "5.9", calc: false, difficulty: "difficult", set: "c5r-s10",
    question: String.raw`What is the largest open interval on which $f'$ is increasing?`,
    choices: [String.raw`$(0, 4)$`, String.raw`$(0, 3)$ and $(3, 4)$`, String.raw`$(-1, 1)$ and $(3, 4)$`, String.raw`$(-1, 0)$`],
    why: [
      String.raw`$f''$ is the derivative of $f'$, so $f'$ increases where $f'' > 0$. The graph of $f''$ is above the $x$-axis for $0 < x < 4$ except at $x = 3$, where it touches the axis. One point where $f'' = 0$ does not stop $f'$ from increasing, so $f'$ increases on all of $(0, 4)$.`,
      String.raw`$f''(3) = 0$, but $f''$ is positive on both sides of $x = 3$, so $f'$ keeps increasing through $x = 3$. The largest interval does not split there.`,
      String.raw`These are where the graph of $f''$ is rising. That reads the graph of $f''$ as if it were the graph of $f'$, one derivative too many.`,
      String.raw`On $(-1, 0)$ the graph of $f''$ is below the axis, so $f'$ is decreasing there.`,
    ],
    answer: 0 },

  // 5.10 Introduction to optimization
  { id: "c5r-m29", type: "mcq", skill: "u5", topic: "5.10", calc: false, difficulty: "moderate",
    stem: String.raw`Two positive numbers $x$ and $y$ have a product of $50$.`,
    question: String.raw`What is the least possible value of $x + 2y$?`,
    choices: ["$20$", "$5$", "$10$", String.raw`$15\sqrt{2}$`],
    why: [
      String.raw`$x = \dfrac{50}{y}$, so $S(y) = \dfrac{50}{y} + 2y$ for $y > 0$. $S'(y) = -\dfrac{50}{y^2} + 2 = 0$ at $y = 5$, and $S'$ changes from negative to positive there, so it gives the minimum. Then $x = 10$ and $S(5) = 10 + 10 = 20$.`,
      String.raw`$5$ is the value of $y$ that gives the least sum, not the sum itself.`,
      String.raw`$10$ is the value of $x$ that gives the least sum, not the sum itself.`,
      String.raw`This takes $x = y = \sqrt{50} = 5\sqrt{2}$, so $x + 2y = 15\sqrt{2} \approx 21.2$. Equal numbers do not minimize $x + 2y$.`,
    ],
    answer: 0 },
  { id: "c5r-m30", type: "mcq", skill: "u5", topic: "5.10", calc: false, difficulty: "easy",
    stem: String.raw`A rectangle has its base on the $x$-axis and its two upper corners on the parabola $y = 9 - x^2$, at $(-x, 9 - x^2)$ and $(x, 9 - x^2)$ with $0 < x < 3$.`,
    question: String.raw`Which function should be maximized to find the rectangle with the greatest area?`,
    choices: [String.raw`$A(x) = 2x\left(9 - x^2\right)$`, String.raw`$A(x) = x\left(9 - x^2\right)$`, String.raw`$A(x) = 2x + 2\left(9 - x^2\right)$`, String.raw`$A(x) = 2x\left(9 - 4x^2\right)$`],
    why: [
      String.raw`The base runs from $-x$ to $x$, so its length is $2x$. The height is the $y$-value of the corner, $9 - x^2$. The area is $2x\left(9 - x^2\right)$.`,
      String.raw`This uses $x$ as the length of the base. The base runs from $-x$ to $x$, so its length is $2x$.`,
      String.raw`This adds the base and the height. Area is the product of base and height.`,
      String.raw`This substitutes the base length $2x$ into the parabola. The corner is at $x$, so its height is $9 - x^2$.`,
    ],
    answer: 0 },

  // 5.11 Solving optimization problems
  { id: "c5r-m31", type: "mcq", skill: "u5", topic: "5.11", calc: false, difficulty: "moderate",
    stem: String.raw`A shipping service accepts a box with square ends only if its length plus its girth (the perimeter of a square end) is at most $108$ inches.`,
    question: String.raw`What is the greatest possible volume of such a box, in cubic inches?`,
    choices: ["$11664$", "$46656$", "$5832$", "$18$"],
    why: [
      String.raw`With square ends of side $x$, the girth is $4x$ and the longest allowed length is $108 - 4x$, so $V(x) = x^2(108 - 4x) = 108x^2 - 4x^3$ for $0 < x < 27$. $V'(x) = 216x - 12x^2 = 12x(18 - x)$, which changes from positive to negative at $x = 18$. $V(18) = 18^2 \cdot 36 = 11664$.`,
      String.raw`This takes the girth to be $2x$, so $V(x) = x^2(108 - 2x)$, with its maximum at $x = 36$. The girth is the whole perimeter of the square end, $4x$.`,
      String.raw`$5832 = 18^3$ treats the box as a cube with side $18$. At $x = 18$ the length is $108 - 72 = 36$, not $18$.`,
      String.raw`$18$ inches is the side of the square end of the best box, not its volume.`,
    ],
    answer: 0 },
  { id: "c5r-m32", type: "mcq", skill: "u5", topic: "5.11", calc: false, difficulty: "difficult",
    question: String.raw`What are the $x$-coordinates of the points on the graph of $y = x^2$ that are closest to the point $(0, 3)$?`,
    choices: [String.raw`$x = \pm\frac{\sqrt{10}}{2}$`, "$x = 0$", String.raw`$x = \pm\sqrt{3}$`, String.raw`$x = \pm\frac{\sqrt{11}}{2}$`],
    why: [
      String.raw`The square of the distance is $S(x) = x^2 + \left(x^2 - 3\right)^2$. $S'(x) = 2x + 4x\left(x^2 - 3\right) = 2x\left(2x^2 - 5\right)$, which is $0$ at $x = 0$ and $x = \pm\sqrt{\dfrac{5}{2}} = \pm\dfrac{\sqrt{10}}{2}$. $S(0) = 9$ and $S\left(\pm\dfrac{\sqrt{10}}{2}\right) = \dfrac{5}{2} + \dfrac{1}{4} = \dfrac{11}{4}$, so the closest points have $x = \pm\dfrac{\sqrt{10}}{2}$.`,
      String.raw`$x = 0$ is a critical point of $S$, but $S'$ changes from positive to negative there, so it is a relative maximum of the distance: $S(0) = 9$ is larger than $\dfrac{11}{4}$.`,
      String.raw`These are the points $\left(\pm\sqrt{3}, 3\right)$ level with $(0, 3)$, at distance $\sqrt{3} \approx 1.73$. The least distance is $\dfrac{\sqrt{11}}{2} \approx 1.66$.`,
      String.raw`$\dfrac{\sqrt{11}}{2}$ is the least distance itself, $\sqrt{\dfrac{11}{4}}$, not the $x$-coordinate of the closest points.`,
    ],
    answer: 0 },
  { id: "c5r-m33", type: "mcq", skill: "u5", topic: "5.11", calc: true, difficulty: "moderate",
    stem: String.raw`A cylindrical tank with a bottom and no top is to hold $400$ cubic feet. Its surface area is $S = \pi r^2 + 2\pi rh$, where $r$ is the radius and $h$ is the height, in feet.`,
    question: String.raw`What radius, in feet, makes the surface area as small as possible?`,
    choices: ["$5.031$", "$3.993$", "$6.338$", "$11.284$"],
    why: [
      String.raw`$\pi r^2h = 400$, so $h = \dfrac{400}{\pi r^2}$ and $S(r) = \pi r^2 + \dfrac{800}{r}$. $S'(r) = 2\pi r - \dfrac{800}{r^2} = 0$ gives $r^3 = \dfrac{400}{\pi}$, so $r = 5.031$. $S'$ changes from negative to positive there, so this is the minimum.`,
      String.raw`This uses $S = 2\pi r^2 + 2\pi rh$, a tank with a top and a bottom. The tank has no top.`,
      String.raw`This differentiates $\pi r^2$ as $\pi r$, solving $\pi r = \dfrac{800}{r^2}$.`,
      String.raw`This solves $\pi r^2 = 400$, treating the volume as the area of the base.`,
    ],
    answer: 0 },

  // 5.12 Behaviors of implicit relations
  { id: "c5r-m34", type: "mcq", skill: "u5", topic: "5.12", calc: false, difficulty: "moderate",
    stem: String.raw`Consider the curve $x^2 - xy + y^2 = 27$.`,
    question: String.raw`At which points on the curve is the tangent line horizontal?`,
    choices: [String.raw`$(3, 6)$ and $(-3, -6)$`, String.raw`$(6, 3)$ and $(-6, -3)$`, String.raw`$\left(3\sqrt{3}, 3\sqrt{3}\right)$ and $\left(-3\sqrt{3}, -3\sqrt{3}\right)$`, String.raw`$\left(0, 3\sqrt{3}\right)$ and $\left(0, -3\sqrt{3}\right)$`],
    why: [
      String.raw`$2x - y - xy' + 2yy' = 0$, so $\dfrac{dy}{dx} = \dfrac{y - 2x}{2y - x}$. This is $0$ when $y = 2x$ and $2y - x \ne 0$. Then $x^2 - 2x^2 + 4x^2 = 3x^2 = 27$, so $x = \pm 3$, giving $(3, 6)$ and $(-3, -6)$, where $2y - x = \pm 9 \ne 0$.`,
      String.raw`These are where the denominator $2y - x$ is $0$, where the tangent line is vertical.`,
      String.raw`These points are on the curve, but there $\dfrac{dy}{dx} = \dfrac{-x}{x} = -1$, not $0$.`,
      String.raw`These are where the curve crosses the $y$-axis. There $\dfrac{dy}{dx} = \dfrac{y}{2y} = \dfrac{1}{2}$.`,
    ],
    answer: 0 },
  { id: "c5r-m35", type: "mcq", skill: "u5", topic: "5.12", calc: false, difficulty: "difficult",
    stem: String.raw`For the curve $xy^2 = 4$ with $y > 0$, $\dfrac{dy}{dx} = -\dfrac{y}{2x}$.`,
    question: String.raw`What is the value of $\dfrac{d^2y}{dx^2}$ at the point $(1, 2)$?`,
    choices: [String.raw`$\frac{3}{2}$`, "$-1$", String.raw`$-\frac{3}{2}$`, "$1$"],
    why: [
      String.raw`At $(1, 2)$, $\dfrac{dy}{dx} = -1$. By the quotient rule, $\dfrac{d^2y}{dx^2} = -\dfrac{2x\frac{dy}{dx} - 2y}{4x^2} = -\dfrac{2(1)(-1) - 2(2)}{4(1)^2} = \dfrac{6}{4} = \dfrac{3}{2}$, so the curve is concave up there.`,
      String.raw`$-1$ is the value of $\dfrac{dy}{dx}$ at $(1, 2)$, the first derivative.`,
      String.raw`The negative sign in front of the quotient was dropped.`,
      String.raw`This treats $y$ as a constant, differentiating $-\dfrac{y}{2x}$ as $\dfrac{y}{2x^2}$. Since $y$ depends on $x$, the quotient rule must include $\dfrac{dy}{dx}$.`,
    ],
    answer: 0 },
  { id: "c5r-m36", type: "mcq", skill: "u5", topic: "5.12", calc: false, difficulty: "difficult",
    stem: String.raw`Consider the curve $4x^2 + y^2 - 8x + 6y = 12$.`,
    question: String.raw`At which points on the curve is the tangent line vertical?`,
    choices: [String.raw`$\left(\frac{7}{2}, -3\right)$ and $\left(-\frac{3}{2}, -3\right)$`, String.raw`$(1, 2)$ and $(1, -8)$`, String.raw`$(1, -3)$ only`, String.raw`$\left(-\frac{7}{2}, -3\right)$ and $\left(\frac{3}{2}, -3\right)$`],
    why: [
      String.raw`$8x + 2yy' - 8 + 6y' = 0$, so $\dfrac{dy}{dx} = \dfrac{8 - 8x}{2y + 6} = \dfrac{4 - 4x}{y + 3}$. The tangent is vertical where $y + 3 = 0$ and $4 - 4x \ne 0$. With $y = -3$, $4x^2 - 8x - 21 = 0$, so $(2x - 7)(2x + 3) = 0$ and $x = \dfrac{7}{2}$ or $x = -\dfrac{3}{2}$.`,
      String.raw`These are where the numerator $4 - 4x$ is $0$, where the tangent line is horizontal.`,
      String.raw`$(1, -3)$ makes both the numerator and the denominator $0$, but it is the center of the ellipse and is not on the curve: $4 + 9 - 8 - 18 = -13 \ne 12$.`,
      String.raw`These come from a sign error in factoring $4x^2 - 8x - 21$. The roots are $\dfrac{7}{2}$ and $-\dfrac{3}{2}$.`,
    ],
    answer: 0 },

  // More multiple choice on graphs and tables (added 11/10)
  { id: "c5r-m37", type: "mcq", skill: "u5", topic: "5.9", calc: false, difficulty: "difficult", set: "c5r-s11",
    question: String.raw`Which of the following is true?`,
    choices: [String.raw`$f(2) < f''(2) < f'(2)$`, String.raw`$f''(2) < f(2) < f'(2)$`, String.raw`$f(2) < f'(2) < f''(2)$`, String.raw`$f'(2) < f''(2) < f(2)$`],
    why: [
      String.raw`From the graph, $f(2) = -1$. The graph is rising at $x = 2$, so $f'(2) > 0$. $(2, -1)$ is a point of inflection of a twice-differentiable function, so $f''(2) = 0$. So $f(2) < f''(2) < f'(2)$.`,
      String.raw`This makes $f''(2)$ less than $-1$, as if the graph were concave down at $x = 2$. At a point of inflection, $f''(2) = 0$.`,
      String.raw`This makes $f''(2)$ greater than $f'(2)$, as if the graph were bending up at $x = 2$. At a point of inflection, $f''(2) = 0$, which is less than $f'(2)$.`,
      String.raw`This makes $f'(2)$ the smallest, as if the graph were falling at $x = 2$. The graph rises from $(1, -2)$ to $(3, 0)$, so $f'(2) > 0$.`,
    ],
    answer: 0 },
  { id: "c5r-m38", type: "mcq", skill: "u5", topic: "5.8", calc: false, difficulty: "easy", set: "c5r-s12",
    question: String.raw`Which of the graphs A to D could be the graph of $f'$?`,
    choices: ["Graph C", "Graph A", "Graph B", "Graph D"],
    why: [
      String.raw`$f$ increases on $(-1, 1)$, decreases on $(1, 3)$, and increases on $(3, 5)$, with horizontal tangents at $x = 1$ and $x = 3$. So $f'$ is positive, then negative, then positive, with zeros at $x = 1$ and $x = 3$. Graph C has that pattern.`,
      String.raw`Graph A has the right zeros, but its signs are reversed: it is negative where $f$ is increasing.`,
      String.raw`Graph B crosses the axis at $x = 2$, where $f$ changes concavity. It could be the graph of $f''$, not $f'$.`,
      String.raw`Graph D crosses the axis at $x = 0$ and $x = 3$, the zeros of $f$. $f'$ is $0$ where the graph of $f$ has horizontal tangents, at $x = 1$ and $x = 3$.`,
    ],
    answer: 0 },
  { id: "c5r-m39", type: "mcq", skill: "u5", topic: "5.4", calc: false, difficulty: "difficult", set: "c5r-s13",
    question: String.raw`At which values of $x$ in the open interval $(-3, 5)$ does $g$ have a relative maximum?`,
    choices: [String.raw`$x = 0$ only`, String.raw`$x = -2$ and $x = 2$`, String.raw`$x = -1$ and $x = 3$`, String.raw`$x = -3$ and $x = 1$`],
    why: [
      String.raw`$g'(x) = f'(x) - 2$, so $g' = 0$ where the graph of $f'$ is at height $2$: at $x = -2$, $x = 0$, $x = 2$, and the endpoint $x = 5$. At $x = 0$ the graph of $f'$ falls through height $2$, so $g'$ changes from positive to negative and $g$ has a relative maximum. That is the only such point.`,
      String.raw`At $x = -2$ and $x = 2$ the graph of $f'$ rises through height $2$, so $g'$ changes from negative to positive. These are relative minima of $g$.`,
      String.raw`These are where $f'$ is largest. There $g'(x) = 4 - 2 = 2 > 0$, so $g$ is increasing, not at a maximum.`,
      String.raw`These are where $f'(x) = 0$, which would matter for $f$. For $g$, the critical points come from $f'(x) = 2$.`,
    ],
    answer: 0 },
  { id: "c5r-m40", type: "mcq", skill: "u5", topic: "5.9", calc: false, difficulty: "difficult", set: "c5r-s14",
    question: String.raw`Let $h(x) = f(2x)$. Which of the following describes $h$ at $x = 1$?`,
    choices: [
      String.raw`$h$ is increasing, and its graph is concave down.`,
      String.raw`$h$ is decreasing, and its graph is concave up.`,
      String.raw`$h$ is increasing, and its graph is concave up.`,
      String.raw`$h$ is decreasing, and its graph is concave down.`,
    ],
    why: [
      String.raw`By the chain rule, $h'(x) = 2f'(2x)$ and $h''(x) = 4f''(2x)$. So $h'(1) = 2f'(2) = 8 > 0$ and $h''(1) = 4f''(2) = -20 < 0$: $h$ is increasing and concave down.`,
      String.raw`This reads $f'(1) = -2$ and $f''(1) = 1$. The chain rule evaluates $f'$ and $f''$ at $2x = 2$, not at $x = 1$.`,
      String.raw`The direction is right, but the concavity uses $f''(1) = 1$. $h''(1) = 4f''(2) = -20$.`,
      String.raw`The concavity is right, but the direction uses $f'(1) = -2$. $h'(1) = 2f'(2) = 8$.`,
    ],
    answer: 0 },
  { id: "c5r-m41", type: "mcq", skill: "u5", topic: "5.1", calc: false, difficulty: "moderate", set: "c5r-s15",
    question: String.raw`For how many values of $c$ in the open interval $(0, 6)$ is the line tangent to the graph of $f$ at $x = c$ parallel to the dashed segment?`,
    choices: ["$2$", "$1$", "$3$", "$4$"],
    why: [
      String.raw`The segment has slope $\dfrac{9 - 0}{6 - 0} = \dfrac{3}{2}$. On $(0, 2)$ the graph rises steeply and then levels off to slope $0$, so its slope passes $\dfrac{3}{2}$ once. On $(2, 4)$ the slope is negative. On $(4, 6)$ the slope grows from $0$ and passes $\dfrac{3}{2}$ once more. That makes $2$.`,
      String.raw`The Mean Value Theorem guarantees at least one such $c$, not exactly one. The graph has a tangent of slope $\dfrac{3}{2}$ on $(0, 2)$ and another on $(4, 6)$.`,
      String.raw`This counts where the dashed segment meets the graph, at $x = 0$, $x = 3$, and $x = 6$. Those are crossings, not points where the slopes match.`,
      String.raw`This adds the horizontal tangents at $x = 2$ and $x = 4$. Their slope is $0$, not $\dfrac{3}{2}$.`,
    ],
    answer: 0 },

  // Free response 1: reading the graph of f' (no calculator)
  { id: "c5r-f1a", type: "frq", skill: "u5", topic: "5.4", calc: false, set: "c5r-s5", part: "(a)",
    prompt: String.raw`Find all values of $x$ in the open interval $(-3, 5)$ at which $f$ has a relative maximum and all values at which $f$ has a relative minimum. Justify your answers.`,
    rows: [
      { name: "Relative maxima with justification", earns: String.raw`$x = -1$ and $x = 4$, because $f'$ changes from positive to negative at each.` },
      { name: "Relative minimum with justification", earns: String.raw`$x = 1$, because $f'$ changes from negative to positive there.` },
    ],
    solution: String.raw`The graph of $f'$ meets the $x$-axis at $x = -1$, $x = 1$, and $x = 4$.

$f'(x) > 0$ on $(-3, -1)$ and $f'(x) < 0$ on $(-1, 1)$, so $f'$ changes from positive to negative at $x = -1$. $f'(x) > 0$ on $(1, 4)$ and $f'(x) < 0$ on $(4, 5)$, so $f'$ changes from positive to negative at $x = 4$. By the First Derivative Test, $f$ has relative maxima at $x = -1$ and $x = 4$.

$f'$ changes from negative to positive at $x = 1$, so by the First Derivative Test, $f$ has a relative minimum at $x = 1$.` },
  { id: "c5r-f1b", type: "frq", skill: "u5", topic: "5.6", calc: false, set: "c5r-s5", part: "(b)",
    prompt: String.raw`On what open intervals is the graph of $f$ concave down? Give a reason for your answer.`,
    rows: [
      { name: "Intervals", earns: String.raw`$(-3, 0)$ and $(3, 5)$` },
      { name: "Reason", earns: String.raw`$f'$ is decreasing on these intervals.` },
    ],
    solution: String.raw`The graph of $f$ is concave down where $f'$ is decreasing.

The graph of $f'$ falls along the segment from $x = -3$ to $x = -1$ and continues to fall along the semicircle from $x = -1$ to its lowest point at $x = 0$. It rises from $x = 0$ to $x = 3$ and falls from $x = 3$ to $x = 5$.

So $f'$ is decreasing on $(-3, 0)$ and on $(3, 5)$, and the graph of $f$ is concave down on $(-3, 0)$ and $(3, 5)$.` },
  { id: "c5r-f1c", type: "frq", skill: "u5", topic: "5.6", calc: false, set: "c5r-s5", part: "(c)",
    prompt: String.raw`Find the $x$-coordinate of each point of inflection of the graph of $f$ on the open interval $(-3, 5)$. Give a reason for your answer.`,
    rows: [
      { name: "Answer with reason", earns: String.raw`$x = 0$ and $x = 3$, because $f'$ changes from decreasing to increasing at $x = 0$ and from increasing to decreasing at $x = 3$.` },
    ],
    solution: String.raw`A point of inflection is where the concavity of $f$ changes, which is where $f'$ changes between increasing and decreasing.

At $x = 0$, $f'$ changes from decreasing to increasing. At $x = 3$, $f'$ changes from increasing to decreasing. At $x = -1$ and $x = 1$, $f'$ does not change direction.

The graph of $f$ has points of inflection at $x = 0$ and $x = 3$.` },
  { id: "c5r-f1d", type: "frq", skill: "u5", topic: "5.5", calc: false, set: "c5r-s5", part: "(d)",
    prompt: String.raw`Find the absolute maximum value of $f$ on the closed interval $[-3, 5]$. Justify your answer.`,
    rows: [
      { name: "Candidates", earns: String.raw`Considers the critical points $x = -1$, $x = 1$, $x = 4$ and the endpoints $x = -3$, $x = 5$.` },
      { name: "Answer with justification", earns: String.raw`The absolute maximum value is $6 - \dfrac{\pi}{2}$, at $x = 4$, the largest of the candidate values.` },
    ],
    solution: String.raw`$f'(x) = 0$ at $x = -1$, $x = 1$, and $x = 4$, and $f'$ exists on the whole interval, so these are the only critical points. By the Candidates Test, compare $f$ at these points and at the endpoints:

$$f(-3) = 1, \quad f(-1) = 3, \quad f(1) = 3 - \dfrac{\pi}{2}, \quad f(4) = 6 - \dfrac{\pi}{2}, \quad f(5) = 5 - \dfrac{\pi}{2}.$$

Since $\dfrac{\pi}{2} < 2$, $6 - \dfrac{\pi}{2} > 4$, which is larger than $1$ and $3$, and $6 - \dfrac{\pi}{2}$ is larger than $3 - \dfrac{\pi}{2}$ and $5 - \dfrac{\pi}{2}$.

The absolute maximum value of $f$ on $[-3, 5]$ is $6 - \dfrac{\pi}{2}$, at $x = 4$.` },

  // Free response 2: depth of water in a harbor (calculator)
  { id: "c5r-f2a", type: "frq", skill: "u5", topic: "5.1", calc: true, set: "c5r-s6", part: "(a)",
    prompt: String.raw`Find the average rate of change of $D$ over the interval $0 \le t \le 12$. Must there be a time $t$, $0 < t < 12$, at which $D'(t)$ equals this average rate of change? Justify your answer.`,
    rows: [
      { name: "Average rate of change", earns: String.raw`$\dfrac{D(12) - D(0)}{12} = -0.347$ feet per hour` },
      { name: "Answer with justification", earns: String.raw`Yes. $D$ is differentiable, so it is continuous on $[0, 12]$ and differentiable on $(0, 12)$, and the Mean Value Theorem guarantees such a time.` },
    ],
    solution: String.raw`$D(0) = 6$ and $D(12) = 6 + 2\sin 6 - 3.6 = 1.84117$, so the average rate of change is $\dfrac{1.84117 - 6}{12} = -0.347$ feet per hour.

$D$ is a sum of a sine function and a linear function, so it is differentiable for all $t$. So $D$ is continuous on $[0, 12]$ and differentiable on $(0, 12)$. By the Mean Value Theorem, there is a time $t$ in $(0, 12)$ with $D'(t) = -0.347$.

(Solving $D'(t) = \cos\left(\dfrac{t}{2}\right) - 0.3 = -0.347$ gives $t = 3.235$ and $t = 9.332$.)` },
  { id: "c5r-f2b", type: "frq", skill: "u5", topic: "5.5", calc: true, set: "c5r-s6", part: "(b)",
    prompt: String.raw`Find the greatest depth of the water for $0 \le t \le 12$. Justify your answer.`,
    rows: [
      { name: "Sets derivative to 0", earns: String.raw`$D'(t) = \cos\left(\dfrac{t}{2}\right) - 0.3 = 0$` },
      { name: "Critical points", earns: String.raw`$t = 2.532$ and $t = 10.034$` },
      { name: "Answer with justification", earns: String.raw`Compares $D(0) = 6$, $D(2.532) = 7.148$, $D(10.034) = 1.082$, $D(12) = 1.841$; the greatest depth is $7.148$ feet.` },
    ],
    solution: String.raw`$D'(t) = \cos\left(\dfrac{t}{2}\right) - 0.3$. Solving $D'(t) = 0$ on $0 < t < 12$ with a calculator gives $t = 2.532$ and $t = 10.034$.

By the Candidates Test, compare $D$ at the critical points and at the endpoints:

$$D(0) = 6, \quad D(2.532) = 7.148, \quad D(10.034) = 1.082, \quad D(12) = 1.841.$$

The greatest depth of the water is $7.148$ feet, at $t = 2.532$ hours.` },
  { id: "c5r-f2c", type: "frq", skill: "u5", topic: "5.9", calc: true, set: "c5r-s6", part: "(c)",
    prompt: String.raw`Is the rate of change of the depth of the water increasing or decreasing at time $t = 8$? Give a reason for your answer.`,
    rows: [
      { name: "Second derivative", earns: String.raw`$D''(8) = 0.378$` },
      { name: "Answer with reason", earns: String.raw`Increasing, because $D''(8) > 0$.` },
    ],
    solution: String.raw`The rate of change of the depth is $D'(t)$, and its rate of change is $D''(t) = -\dfrac{1}{2}\sin\left(\dfrac{t}{2}\right)$.

$D''(8) = -\dfrac{1}{2}\sin 4 = 0.378$.

Since $D''(8) > 0$, the rate of change of the depth is increasing at $t = 8$.` },

  // Free response 3: a tilted ellipse (no calculator)
  { id: "c5r-f3a", type: "frq", skill: "u5", topic: "5.12", calc: false, set: "c5r-s7", part: "(a)",
    prompt: String.raw`Show that $\dfrac{dy}{dx} = -\dfrac{x + 2y}{2x + 5y}$.`,
    rows: [
      { name: "Implicit differentiation", earns: String.raw`$2x + 4y + 4x\dfrac{dy}{dx} + 10y\dfrac{dy}{dx} = 0$` },
      { name: "Verification", earns: String.raw`Solves for $\dfrac{dy}{dx}$ to get $-\dfrac{x + 2y}{2x + 5y}$.` },
    ],
    solution: String.raw`Differentiating both sides with respect to $x$, using the product rule on $4xy$:

$$2x + \left(4y + 4x\dfrac{dy}{dx}\right) + 10y\dfrac{dy}{dx} = 0$$

$$(4x + 10y)\dfrac{dy}{dx} = -(2x + 4y)$$

$$\dfrac{dy}{dx} = -\dfrac{2x + 4y}{4x + 10y} = -\dfrac{x + 2y}{2x + 5y}$$` },
  { id: "c5r-f3b", type: "frq", skill: "u5", topic: "5.12", calc: false, set: "c5r-s7", part: "(b)",
    prompt: String.raw`Find the coordinates of all points on the curve at which the line tangent to the curve is horizontal.`,
    rows: [
      { name: "Sets numerator to 0", earns: String.raw`$x + 2y = 0$, so $x = -2y$, substituted into the equation of the curve: $y^2 = 4$.` },
      { name: "Answer", earns: String.raw`$(-4, 2)$ and $(4, -2)$, with the denominator $2x + 5y \ne 0$ at both.` },
    ],
    solution: String.raw`The tangent line is horizontal where $\dfrac{dy}{dx} = 0$, so $x + 2y = 0$ and $2x + 5y \ne 0$.

Substituting $x = -2y$ into the curve: $4y^2 - 8y^2 + 5y^2 = y^2 = 4$, so $y = 2$ or $y = -2$.

The points are $(-4, 2)$ and $(4, -2)$. At $(-4, 2)$, $2x + 5y = 2 \ne 0$, and at $(4, -2)$, $2x + 5y = -2 \ne 0$, so the tangent line is horizontal at both points.` },
  { id: "c5r-f3c", type: "frq", skill: "u5", topic: "5.12", calc: false, set: "c5r-s7", part: "(c)",
    prompt: String.raw`Find the value of $\dfrac{d^2y}{dx^2}$ at the point $(-4, 2)$. Does the curve have a relative maximum, a relative minimum, or neither at $(-4, 2)$? Justify your answer.`,
    rows: [
      { name: "Second derivative", earns: String.raw`$\dfrac{d^2y}{dx^2} = -\dfrac{\left(1 + 2\frac{dy}{dx}\right)(2x + 5y) - (x + 2y)\left(2 + 5\frac{dy}{dx}\right)}{(2x + 5y)^2}$` },
      { name: "Value", earns: String.raw`$\dfrac{d^2y}{dx^2} = -\dfrac{1}{2}$ at $(-4, 2)$` },
      { name: "Conclusion with justification", earns: String.raw`Relative maximum, because $\dfrac{dy}{dx} = 0$ and $\dfrac{d^2y}{dx^2} < 0$ at $(-4, 2)$ (Second Derivative Test).` },
    ],
    solution: String.raw`By the quotient rule,

$$\dfrac{d^2y}{dx^2} = -\dfrac{\left(1 + 2\frac{dy}{dx}\right)(2x + 5y) - (x + 2y)\left(2 + 5\frac{dy}{dx}\right)}{(2x + 5y)^2}.$$

At $(-4, 2)$, $\dfrac{dy}{dx} = 0$, $x + 2y = 0$, and $2x + 5y = 2$, so

$$\dfrac{d^2y}{dx^2} = -\dfrac{(1 + 0)(2) - 0}{2^2} = -\dfrac{1}{2}.$$

At $(-4, 2)$, $\dfrac{dy}{dx} = 0$ and $\dfrac{d^2y}{dx^2} < 0$. By the Second Derivative Test, the curve has a relative maximum at $(-4, 2)$.` },

  // Free response 4: a pen along a wall (no calculator)
  { id: "c5r-f4a", type: "frq", skill: "u5", topic: "5.10", calc: false, set: "c5r-s8", part: "(a)",
    prompt: String.raw`Write an expression for the total area $A(x)$ of the pen in terms of $x$, and give the interval of values of $x$ that make sense in this context.`,
    rows: [
      { name: "Area function", earns: String.raw`$A(x) = x(240 - 3x)$` },
      { name: "Domain", earns: String.raw`$0 < x < 80$` },
    ],
    solution: String.raw`Let $y$ be the length of the side parallel to the wall. The fence pieces are three of length $x$ and one of length $y$, so $3x + y = 240$ and $y = 240 - 3x$.

The area is $A(x) = xy = x(240 - 3x) = 240x - 3x^2$.

Both lengths must be positive: $x > 0$ and $240 - 3x > 0$, so $0 < x < 80$.` },
  { id: "c5r-f4b", type: "frq", skill: "u5", topic: "5.11", calc: false, set: "c5r-s8", part: "(b)",
    prompt: String.raw`Find the dimensions of the pen that give the greatest total area. Justify your answer.`,
    rows: [
      { name: "Derivative", earns: String.raw`$A'(x) = 240 - 6x$` },
      { name: "Critical point", earns: String.raw`$A'(x) = 0$ at $x = 40$` },
      { name: "Answer with justification", earns: String.raw`$x = 40$ meters and $240 - 3(40) = 120$ meters, a maximum because $A'$ changes from positive to negative at $x = 40$ (or $A''(x) = -6 < 0$), the only critical point on $(0, 80)$.` },
    ],
    solution: String.raw`$A'(x) = 240 - 6x$, which is $0$ at $x = 40$.

$A'(x) > 0$ for $0 < x < 40$ and $A'(x) < 0$ for $40 < x < 80$. Since $x = 40$ is the only critical point on $(0, 80)$ and $A'$ changes from positive to negative there, $A$ has its absolute maximum at $x = 40$.

The three pieces perpendicular to the wall are each $40$ meters, and the side parallel to the wall is $240 - 3(40) = 120$ meters. The greatest area is $40 \cdot 120 = 4800$ square meters.` },
];

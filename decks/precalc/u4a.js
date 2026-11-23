// AP Precalculus review bank, Unit 4 (first half): Functions Involving Parameters, Vectors, and Matrices, topics 4.1 to 4.7.
// Unit 4 is taught but not tested on the AP exam. The free response follows the AP question types on Unit 4 content.
import { graph } from "../../plot.js";

// A parametric curve drawn as short segments: (fx(t), fy(t)) for a <= t <= b.
const path = (fx, fy, a, b, n = 240) => {
  const out = [];
  for (let k = 0; k < n; k++) {
    const t0 = a + ((b - a) * k) / n, t1 = a + ((b - a) * (k + 1)) / n;
    out.push([fx(t0), fy(t0), fx(t1), fy(t1)]);
  }
  return out;
};

// p4ar-s2: x = t^2 - 4, y = t^3 - 4t for -2.6 <= t <= 2.6 (a loop through the origin). Item m07 reads it.
const loopX = (t) => t * t - 4, loopY = (t) => t ** 3 - 4 * t;
// p4ar-s3: x = g(t) = (t - 2)^2 - 1, y = h(t) = 4 - (t - 3)^2 / 2 on [0, 5]. Items m16 and m17 read it.
const s3g = (t) => (t - 2) ** 2 - 1, s3h = (t) => 4 - (t - 3) ** 2 / 2;
// p4ar-s6: the rotated ellipse x^2 - xy + y^2 = 3, as two functions of x on [-2, 2]. Items m33 and m34 read it.
const s6up = (x) => (x + Math.sqrt(Math.max(0, 12 - 3 * x * x))) / 2, s6lo = (x) => (x - Math.sqrt(Math.max(0, 12 - 3 * x * x))) / 2;

export const sets = {
  "p4ar-s1": {
    name: "A parametric function from a table",
    label: "Table",
    intro: String.raw`The parametric function $f$ is given by $f(t) = \left(x(t), y(t)\right)$ for $-1 \le t \le 3$. Selected values of $x(t)$ and $y(t)$ are given in the table below.`,
    sources: [{ title: "", blocks: [{ table: { head: ["$t$", "$-1$", "$0$", "$1$", "$2$", "$3$"], rows: [["$x(t)$", "$0$", "$-1$", "$0$", "$3$", "$8$"], ["$y(t)$", "$-1$", "$1$", "$3$", "$5$", "$7$"]] } }] }],
  },
  "p4ar-s2": {
    name: "A curve with a loop",
    label: "Graph",
    intro: String.raw`The graph of the parametric function $f(t) = \left(t^2 - 4,\ t^3 - 4t\right)$ for $-2.6 \le t \le 2.6$ is shown below. The curve passes through the origin twice, and it crosses the $x$-axis at $(-4, 0)$.`,
    sources: [{ title: "", blocks: [{ svg: graph({
      x: [-5, 3], y: [-8, 8], step: { x: 1, y: 2 }, xname: "x", yname: "y",
      segments: path(loopX, loopY, -2.6, 2.6),
      dots: [[0, 0, "closed"], [-4, 0, "closed"]],
      alt: "A parametric curve that forms a closed loop to the left of the y-axis, passing through the origin and through (-4, 0), with its highest point on the loop near (-2.7, 3.1) and its lowest point on the loop near (-2.7, -3.1). Two tails leave the origin and run to the right, one up toward (2.8, 7.2) and one down toward (2.8, -7.2).",
    }) }] }],
  },
  "p4ar-s3": {
    name: "A particle controlled by g and h",
    label: "Graph",
    intro: String.raw`A particle moves in the $xy$-plane so that its position at time $t$ is $\left(g(t), h(t)\right)$ for $0 \le t \le 5$. The graphs of $g$ and $h$ are shown below. The function $g$ has its minimum at $t = 2$, and $h$ has its maximum at $t = 3$.`,
    sources: [{ title: "", blocks: [{ svg: graph({
      x: [-0.5, 5.5], y: [-2, 9], step: 1, xname: "t", yname: "",
      fns: [{ f: s3g, from: 0, to: 5, label: "g", labelAt: 4.4 }, { f: s3h, from: 0, to: 5, dash: true, label: "h", labelAt: 4.6 }],
      dots: [[2, -1, "closed"], [3, 4, "closed"]],
      alt: "Graphs of g (solid) and h (dashed) for t from 0 to 5. The graph of g starts at (0, 3), falls to its minimum at (2, -1), and rises to (5, 8), crossing the t-axis at t = 1 and t = 3. The graph of h starts at (0, -0.5), rises to its maximum at (3, 4), and falls to (5, 2).",
    }) }] }],
  },
  "p4ar-s4": {
    name: "Positions in a table",
    label: "Table",
    intro: String.raw`A particle moves in the $xy$-plane. The table below gives its position $\left(x(t), y(t)\right)$ at selected times $t$. Between consecutive times in the table, each of $x(t)$ and $y(t)$ is either always increasing or always decreasing.`,
    sources: [{ title: "", blocks: [{ table: { head: ["$t$", "$0$", "$1$", "$2$", "$3$", "$4$"], rows: [["$x(t)$", "$3$", "$1$", "$0$", "$2$", "$5$"], ["$y(t)$", "$2$", "$4$", "$3$", "$1$", "$-2$"]] } }] }],
  },
  "p4ar-s5": {
    name: "A path along a line",
    label: "Graph",
    intro: String.raw`A particle moves at a constant rate along the line segment shown below. It is at $(-2, 4)$ at time $t = 0$ and at $(4, 1)$ at time $t = 3$.`,
    sources: [{ title: "", blocks: [{ svg: graph({
      x: [-3, 5], y: [-1, 5], step: 1, xname: "x", yname: "y",
      segments: [[-2, 4, 4, 1]],
      dots: [[-2, 4, "closed"], [4, 1, "closed"]],
      labels: [[-2.4, 4.45, "t = 0"], [3.4, 1.55, "t = 3"]],
      alt: "A line segment from the point (-2, 4), labeled t = 0, down and to the right to the point (4, 1), labeled t = 3.",
    }) }] }],
  },
  "p4ar-s6": {
    name: "A tilted ellipse",
    label: "Graph",
    intro: String.raw`The graph of the equation $x^2 - xy + y^2 = 3$ is shown below. The labeled points are $A(2, 1)$, $B(1, 2)$, $C(-1, 1)$, $D(-2, -1)$, $E(-1, -2)$, and $F(1, -1)$. Point $A$ is the rightmost point of the curve, $B$ is the highest, $D$ is the leftmost, and $E$ is the lowest.`,
    sources: [{ title: "", blocks: [{ svg: graph({
      x: [-3, 3], y: [-3, 3], step: 1, xname: "x", yname: "y",
      fns: [{ f: s6up, from: -2, to: 2 }, { f: s6lo, from: -2, to: 2 }],
      dots: [[2, 1, "closed"], [1, 2, "closed"], [-1, 1, "closed"], [-2, -1, "closed"], [-1, -2, "closed"], [1, -1, "closed"]],
      labels: [[2.12, 1.15, "A"], [1.1, 2.25, "B"], [-1.35, 1.25, "C"], [-2.45, -1.2, "D"], [-1.3, -2.45, "E"], [1.15, -1.4, "F"]],
      alt: "A closed oval curve tilted along the line y = x, through A(2, 1) at its far right, B(1, 2) at its top, C(-1, 1), D(-2, -1) at its far left, E(-1, -2) at its bottom, and F(1, -1). Going around counterclockwise the points are in the order A, B, C, D, E, F.",
    }) }] }],
  },
  "p4ar-s7": {
    name: "A parabola that opens sideways",
    label: "Graph",
    intro: String.raw`The graph of a parabola is shown below. Its vertex is $(-3, 1)$, and it passes through $(-1, 3)$, $(-1, -1)$, $(5, 5)$, and $(5, -3)$.`,
    sources: [{ title: "", blocks: [{ svg: graph({
      x: [-4, 6], y: [-4, 6], step: 1, xname: "x", yname: "y",
      segments: path((t) => 0.5 * (t - 1) ** 2 - 3, (t) => t, -3.4, 5.4),
      dots: [[-3, 1, "closed"], [-1, 3, "closed"], [-1, -1, "closed"], [5, 5, "closed"], [5, -3, "closed"]],
      alt: "A parabola that opens to the right with its vertex at (-3, 1). It passes through (-1, 3) and (-1, -1), and through (5, 5) and (5, -3).",
    }) }] }],
  },
  "p4ar-s8": {
    name: "A hyperbola and its asymptotes",
    label: "Graph",
    intro: String.raw`The graph of a hyperbola is shown below with its asymptotes (dashed). Its vertices are $(-1, -1)$ and $(3, -1)$, and the asymptotes pass through $(-1, -4)$, $(-1, 2)$, $(3, -4)$, and $(3, 2)$.`,
    sources: [{ title: "", blocks: [{ svg: graph({
      x: [-5, 7], y: [-8, 6], step: 1, labelEvery: 2, xname: "x", yname: "y",
      fns: [
        { f: (x) => -1 + 3 * Math.sqrt((x - 1) ** 2 / 4 - 1), from: 3, to: 7 },
        { f: (x) => -1 - 3 * Math.sqrt((x - 1) ** 2 / 4 - 1), from: 3, to: 7 },
        { f: (x) => -1 + 3 * Math.sqrt((x - 1) ** 2 / 4 - 1), from: -5, to: -1 },
        { f: (x) => -1 - 3 * Math.sqrt((x - 1) ** 2 / 4 - 1), from: -5, to: -1 },
        { f: (x) => -1 + 1.5 * (x - 1), dash: true },
        { f: (x) => -1 - 1.5 * (x - 1), dash: true },
      ],
      dots: [[-1, -1, "closed"], [3, -1, "closed"], [-1, -4, "closed"], [-1, 2, "closed"], [3, -4, "closed"], [3, 2, "closed"]],
      alt: "A hyperbola with two branches, one opening to the left from the vertex (-1, -1) and one opening to the right from the vertex (3, -1). Two dashed asymptotes cross at (1, -1); one passes through (-1, -4) and (3, 2), and the other passes through (-1, 2) and (3, -4).",
    }) }] }],
  },
  "p4ar-s9": {
    name: "A kicked ball",
    label: "Free response",
    intro: String.raw`A ball is kicked from ground level. Its position at time $t$ seconds after the kick is $\left(x(t), y(t)\right)$, where $x(t)$ is its horizontal distance from the kicking point, in meters, and $y(t)$ is its height above the ground, in meters. The position is modeled by $$x(t) = at \qquad y(t) = -4.9t^2 + bt$$ where $a$ and $b$ are constants. At time $t = 2$ seconds, the ball is $24$ meters from the kicking point horizontally and $10.4$ meters above the ground.`,
    sources: [{ title: "", blocks: [{ p: String.raw`A calculator is allowed on this question. Give decimal answers correct to three decimal places.` }] }],
  },
  "p4ar-s10": {
    name: "An ellipse and a hyperbola",
    label: "Free response",
    intro: String.raw`The curve $C$ is the graph of $9x^2 + 4y^2 - 36x + 24y + 36 = 0$, and the curve $H$ is the graph of $x^2 - y^2 + 4y = 0$.`,
    sources: [{ title: "", blocks: [{ p: String.raw`No calculator is allowed on this question. Give exact answers.` }] }],
  },
  "p4ar-s11": {
    name: "A Ferris wheel rider",
    label: "Free response",
    intro: String.raw`A Ferris wheel has a radius of $20$ meters, and its center is $25$ meters above the ground. A coordinate system is placed so that the center of the wheel is at $(0, 25)$ and the ground is the $x$-axis, with distances in meters. The wheel turns counterclockwise at a constant rate and completes one revolution every $12$ minutes. At time $t = 0$ minutes, a rider is at the rightmost point of the wheel, $(20, 25)$.`,
    sources: [{ title: "", blocks: [{ p: String.raw`No calculator is allowed on this question. Give exact answers.` }] }],
  },
};

export default [
  // 4.1 Parametric Functions
  { id: "p4ar-m01", type: "mcq", skill: "u4", topic: "4.1", calc: true, difficulty: "easy",
    question: String.raw`The parametric function $f$ is given by $f(t) = \left(e^{0.5t},\ t^2 - 1\right)$. What is the $y$-coordinate of the point on the graph of $f$ where $x = 5$?`,
    choices: ["$9.361$", "$24$", "$3.219$", "$-0.352$"],
    why: [
      String.raw`Solve $e^{0.5t} = 5$: $t = \dfrac{\ln 5}{0.5} = 2\ln 5 \approx 3.219$. Then $y = (3.219)^2 - 1 \approx 9.361$.`,
      String.raw`$24$ is $5^2 - 1$, which puts $x = 5$ into the formula for $y(t)$. The formula takes $t$, so find the $t$ that gives $x = 5$ first.`,
      String.raw`$3.219$ is the value of $t$ that gives $x = 5$. The question asks for the $y$-coordinate, $y(3.219)$.`,
      String.raw`$-0.352$ comes from $t = 0.5\ln 5$, which multiplies by $0.5$ where it should divide.`,
    ], answer: 0 },
  { id: "p4ar-m02", type: "mcq", skill: "u4", topic: "4.1", calc: false, difficulty: "easy", set: "p4ar-s1",
    question: String.raw`Which of the following could define $x(t)$ and $y(t)$?`,
    choices: [String.raw`$x(t) = t^2 - 1,\ y(t) = 2t + 1$`, String.raw`$x(t) = 2t + 1,\ y(t) = t^2 - 1$`, String.raw`$x(t) = t^2 - 1,\ y(t) = 2t - 1$`, String.raw`$x(t) = (t - 1)^2,\ y(t) = 2t + 1$`],
    why: [
      String.raw`Check every column. For $t = -1, 0, 1, 2, 3$, $t^2 - 1$ gives $0, -1, 0, 3, 8$ and $2t + 1$ gives $-1, 1, 3, 5, 7$, which match the table.`,
      String.raw`These are the right formulas with $x$ and $y$ swapped. At $t = 0$ this gives the point $(1, -1)$, not $(-1, 1)$.`,
      String.raw`At $t = 0$, $2t - 1 = -1$, but the table gives $y(0) = 1$. The constant term of $y(t)$ is $y(0)$.`,
      String.raw`At $t = 0$, $(t - 1)^2 = 1$, but the table gives $x(0) = -1$. The table's $x$-values go down and back up around $t = 0$, not $t = 1$.`,
    ], answer: 0 },
  { id: "p4ar-m03", type: "mcq", skill: "u4", topic: "4.1", calc: false, difficulty: "moderate", set: "p4ar-s1",
    question: String.raw`Based on the table, the graph of $f$ meets the $y$-axis at points with which $y$-coordinates?`,
    choices: ["$-1$ and $3$", "$-1$ and $1$", "$1$ only", "$3$ only"],
    why: [
      String.raw`A point is on the $y$-axis when $x(t) = 0$. The table gives $x(t) = 0$ at $t = -1$ and $t = 1$, where $y(-1) = -1$ and $y(1) = 3$. The points are $(0, -1)$ and $(0, 3)$.`,
      String.raw`$-1$ and $1$ are the values of $t$ where $x(t) = 0$, not the $y$-coordinates of the points.`,
      String.raw`$1$ is $y(0)$. Setting $t = 0$ does not put a point on the $y$-axis: $f(0) = (-1, 1)$. The condition is $x(t) = 0$.`,
      String.raw`This keeps only $t = 1$. The domain $-1 \le t \le 3$ includes $t = -1$, where $x(-1) = 0$ as well.`,
    ], answer: 0 },
  { id: "p4ar-m04", type: "mcq", skill: "u4", topic: "4.1", calc: false, difficulty: "moderate",
    question: String.raw`The parametric function $f(t) = \left(t^2 + 1,\ t - 2\right)$ is defined for $-2 \le t \le 1$. Which interval contains exactly the $x$-coordinates of the points on the graph of $f$?`,
    choices: [String.raw`$1 \le x \le 5$`, String.raw`$2 \le x \le 5$`, String.raw`$-2 \le x \le 1$`, String.raw`$-4 \le x \le -1$`],
    why: [
      String.raw`On $-2 \le t \le 1$, $t^2$ takes every value from $0$ (at $t = 0$) to $4$ (at $t = -2$). So $x = t^2 + 1$ takes every value from $1$ to $5$.`,
      String.raw`$x(-2) = 5$ and $x(1) = 2$, but $x$ is not monotonic on the interval. At $t = 0$ it reaches $1$, which is less than $2$.`,
      String.raw`$-2 \le t \le 1$ is the domain of the parameter $t$. The $x$-coordinates are the values of $x(t)$ on that domain.`,
      String.raw`$-4 \le y \le -1$ gives the values of $y(t) = t - 2$, not of $x(t)$.`,
    ], answer: 0 },
  { id: "p4ar-m05", type: "mcq", skill: "u4", topic: "4.1", calc: false, difficulty: "easy",
    question: String.raw`The graph of the parametric function $f(t) = \left(2t - 1,\ 4t + 3\right)$ is a line. Which equation gives $y$ in terms of $x$ for this line?`,
    choices: ["$y = 2x + 5$", "$y = 2x + 1$", "$y = 2x + 3$", String.raw`$y = \frac{1}{2}x - \frac{5}{2}$`],
    why: [
      String.raw`From $x = 2t - 1$, $t = \dfrac{x + 1}{2}$. Then $y = 4\left(\dfrac{x + 1}{2}\right) + 3 = 2x + 2 + 3 = 2x + 5$.`,
      String.raw`This uses $t = \dfrac{x - 1}{2}$. Solving $x = 2t - 1$ for $t$ adds $1$ to $x$ before dividing.`,
      String.raw`This keeps the constant $3$ from $y(t)$ and drops the change that comes from rewriting $t$ in terms of $x$.`,
      String.raw`This solves for $x$ in terms of $y$, which gives $x = \dfrac{1}{2}y - \dfrac{5}{2}$, and then writes it with the variables swapped.`,
    ], answer: 0 },
  { id: "p4ar-m06", type: "mcq", skill: "u4", topic: "4.1", calc: true, difficulty: "easy",
    question: String.raw`The parametric function $f$ is given by $f(t) = \left(t^2 - 4t,\ e^t - 3\right)$. At what $x$-value does the graph of $f$ cross the $x$-axis?`,
    choices: ["$-3.188$", "$1.099$", "$-2$", "$-1.681$"],
    why: [
      String.raw`The graph crosses the $x$-axis where $y(t) = 0$: $e^t = 3$, so $t = \ln 3 \approx 1.099$. Then $x = (1.099)^2 - 4(1.099) \approx -3.188$.`,
      String.raw`$1.099$ is the value of $t$ where $y(t) = 0$. The $x$-value is $x(1.099)$.`,
      String.raw`$-2$ is $y(0)$. At $t = 0$, $x(0) = 0$, so $(0, -2)$ is where the graph crosses the $y$-axis.`,
      String.raw`$-1.681$ uses $t = \log 3 \approx 0.477$, the common logarithm. Solving $e^t = 3$ takes the natural logarithm.`,
    ], answer: 0 },
  { id: "p4ar-m07", type: "mcq", skill: "u4", topic: "4.1", calc: false, difficulty: "difficult", set: "p4ar-s2",
    question: String.raw`Which interval of $t$ traces exactly the part of the loop that lies above the $x$-axis, starting at the origin and ending at $(-4, 0)$?`,
    choices: [String.raw`$-2 \le t \le 0$`, String.raw`$0 \le t \le 2$`, String.raw`$-2 \le t \le 2$`, String.raw`$-4 \le t \le 0$`],
    why: [
      String.raw`The loop starts and ends at the origin, where $t^2 - 4 = 0$ and $t^3 - 4t = 0$: $t = -2$ and $t = 2$. At $t = 0$ the point is $(-4, 0)$. For $-2 < t < 0$, $y = t(t - 2)(t + 2)$ is positive (for example, $y(-1) = 3$), so $-2 \le t \le 0$ traces the upper half from $(0, 0)$ to $(-4, 0)$.`,
      String.raw`On $0 < t < 2$, $y = t(t - 2)(t + 2)$ is negative (for example, $y(1) = -3$), so this interval traces the lower half of the loop.`,
      String.raw`$-2 \le t \le 2$ traces the whole loop, the part below the $x$-axis as well as the part above it.`,
      String.raw`$-4 \le x \le 0$ describes the $x$-coordinates of the loop, not the values of $t$. At $t = -4$ the point is $(12, -48)$, far from the loop.`,
    ], answer: 0 },

  // 4.2 Parametric Functions Modeling Planar Motion
  { id: "p4ar-m08", type: "mcq", skill: "u4", topic: "4.2", calc: false, difficulty: "easy",
    question: String.raw`A particle moves in the $xy$-plane so that its position at time $t \ge 0$ is $\left(5 - 2t,\ 3t - 6\right)$. At what point does the particle cross the $x$-axis?`,
    choices: ["$(1, 0)$", "$(2, 0)$", String.raw`$(0, 1.5)$`, "$(5, 0)$"],
    why: [
      String.raw`The particle is on the $x$-axis when $y = 0$: $3t - 6 = 0$, so $t = 2$. Then $x = 5 - 2(2) = 1$, and the point is $(1, 0)$.`,
      String.raw`$2$ is the time $t$ when $y = 0$, not the $x$-coordinate of the particle at that time.`,
      String.raw`$(0, 1.5)$ is where the particle crosses the $y$-axis, at $t = 2.5$, when $x = 0$.`,
      String.raw`$(5, 0)$ uses $x(0) = 5$, the starting $x$-coordinate. At $t = 0$ the particle is at $(5, -6)$, below the $x$-axis.`,
    ], answer: 0 },
  { id: "p4ar-m09", type: "mcq", skill: "u4", topic: "4.2", calc: false, difficulty: "easy",
    question: String.raw`A particle moves in the $xy$-plane so that its position at time $t \ge 0$ is $\left(t^2 + 1,\ 2t - 1\right)$. Which of the following points does the particle pass through?`,
    choices: ["$(5, 3)$", "$(5, -5)$", "$(3, 5)$", "$(2, 3)$"],
    why: [
      String.raw`$x = 5$ when $t^2 + 1 = 5$, so $t = 2$ (since $t \ge 0$). At $t = 2$, $y = 2(2) - 1 = 3$. Both coordinates match at the same time, so the particle passes through $(5, 3)$.`,
      String.raw`$(5, -5)$ is the position at $t = -2$, which is outside the domain $t \ge 0$.`,
      String.raw`$(3, 5)$ swaps the coordinates of $(5, 3)$. For $x = 3$, $t = \sqrt{2}$, and then $y = 2\sqrt{2} - 1$, not $5$.`,
      String.raw`$(2, 3)$ pairs the time $t = 2$ with the $y$-coordinate. At $t = 2$ the particle is at $(5, 3)$.`,
    ], answer: 0 },
  { id: "p4ar-m10", type: "mcq", skill: "u4", topic: "4.2", calc: true, difficulty: "easy",
    question: String.raw`A drone's position $t$ seconds after it starts a maneuver is $\left(40\ln(t + 1),\ 30 - 2t\right)$, where both coordinates are in meters. What is the drone's $x$-coordinate when its height $y$ is $12$ meters?`,
    choices: ["$92.103$", "$102.598$", "$9$", "$40$"],
    why: [
      String.raw`$30 - 2t = 12$ gives $t = 9$. Then $x = 40\ln(9 + 1) = 40\ln 10 \approx 92.103$ meters.`,
      String.raw`$102.598$ is $40\ln 13$, which uses $t = 12$. The height is $12$ meters at $t = 9$, not $t = 12$.`,
      String.raw`$9$ is the time in seconds when the height is $12$ meters. The question asks for the $x$-coordinate at that time.`,
      String.raw`$40$ is $40\log 10$, which uses the common logarithm. The model uses the natural logarithm.`,
    ], answer: 0 },
  { id: "p4ar-m11", type: "mcq", skill: "u4", topic: "4.2", calc: false, difficulty: "moderate",
    question: String.raw`A particle moves in the $xy$-plane so that its position at time $t$ is $\left(t^2 - 6t + 2,\ 2t + 1\right)$. What is the leftmost point on the particle's path?`,
    choices: ["$(-7, 7)$", "$(3, 7)$", "$(-7, 3)$", "$(2, 1)$"],
    why: [
      String.raw`The leftmost point is where $x(t)$ is least. $x(t) = (t - 3)^2 - 7$, so the least $x$-value is $-7$, at $t = 3$. Then $y(3) = 7$, and the point is $(-7, 7)$.`,
      String.raw`$3$ is the value of $t$ where $x(t)$ is least, not the least $x$-value.`,
      String.raw`This pairs the least $x$-value with $t = 3$. The $y$-coordinate is $y(3) = 2(3) + 1 = 7$.`,
      String.raw`$(2, 1)$ is the position at $t = 0$. The particle keeps moving left until $t = 3$.`,
    ], answer: 0 },
  { id: "p4ar-m12", type: "mcq", skill: "u4", topic: "4.2", calc: true, difficulty: "moderate",
    question: String.raw`A particle moves in the $xy$-plane so that its position at time $t \ge 0$ is $\left(e^{0.3t} - 2,\ 4\sin t\right)$. What is the $y$-coordinate of the particle when it crosses the $y$-axis?`,
    choices: ["$2.955$", "$2.310$", "$0.161$", "$0.566$"],
    why: [
      String.raw`The particle is on the $y$-axis when $x = 0$: $e^{0.3t} = 2$, so $t = \dfrac{\ln 2}{0.3} \approx 2.310$. Then $y = 4\sin(2.310) \approx 2.955$, with the calculator in radian mode.`,
      String.raw`$2.310$ is the time when the particle crosses the $y$-axis, not its $y$-coordinate.`,
      String.raw`$0.161$ is $4\sin(2.310)$ computed in degree mode. The angle $t$ is in radians.`,
      String.raw`$0.566$ is $x(\pi) = e^{0.3\pi} - 2$, where the particle first returns to the $x$-axis. Crossing the $y$-axis needs $x = 0$.`,
    ], answer: 0 },
  { id: "p4ar-m13", type: "mcq", skill: "u4", topic: "4.2", calc: false, difficulty: "difficult",
    question: String.raw`A particle moves in the $xy$-plane so that its position at time $t \ge 0$ is $\left(t^2 - 4t,\ t^2 - 2t + k\right)$, where $k$ is a constant. The particle passes through the point $(5, 13)$. What is the value of $k$?`,
    choices: ["$-2$", "$10$", "$14$", "$13$"],
    why: [
      String.raw`$t^2 - 4t = 5$ gives $(t - 5)(t + 1) = 0$, and $t \ge 0$ leaves $t = 5$. Then $y(5) = 25 - 10 + k = 13$, so $k = -2$.`,
      String.raw`$10$ uses $t = -1$: $1 + 2 + k = 13$. The particle's time is $t \ge 0$, so $t = -1$ is not allowed.`,
      String.raw`$14$ factors $t^2 - 4t - 5$ as $(t + 5)(t - 1)$ and uses $t = 1$: $1 - 2 + k = 13$. The factors are $(t - 5)(t + 1)$.`,
      String.raw`$13$ sets $y(0) = k$ equal to $13$. At $t = 0$ the particle is at $x = 0$, not $x = 5$.`,
    ], answer: 0 },
  { id: "p4ar-m14", type: "mcq", skill: "u4", topic: "4.2", calc: true, difficulty: "difficult",
    question: String.raw`A ball is thrown so that its position $t$ seconds later is $\left(14t,\ -4.9t^2 + 11t + 1.8\right)$, where $x$ is its horizontal distance from the thrower and $y$ is its height above the ground, both in meters. How far from the thrower, horizontally, does the ball hit the ground?`,
    choices: ["$33.573$", "$2.398$", "$15.714$", "$31.429$"],
    why: [
      String.raw`The ball hits the ground when $-4.9t^2 + 11t + 1.8 = 0$. The positive solution is $t \approx 2.398$ seconds, so $x = 14(2.398) \approx 33.573$ meters.`,
      String.raw`$2.398$ is the time in seconds when the ball lands, not the horizontal distance.`,
      String.raw`$15.714$ is $x$ at $t = \dfrac{11}{9.8}$, the time of the greatest height, not the time the ball lands.`,
      String.raw`$31.429$ is $x$ at $t = \dfrac{11}{4.9}$, when the ball is back at its starting height of $1.8$ meters. It is still above the ground then.`,
    ], answer: 0 },

  // 4.3 Parametric Functions and Rates of Change
  { id: "p4ar-m15", type: "mcq", skill: "u4", topic: "4.3", calc: false, difficulty: "easy",
    question: String.raw`A particle moves in the $xy$-plane so that its position at time $t$ is $\left(t^2 - 6t,\ 2t - 5\right)$. For $0 < t < 2$, in which directions is the particle moving?`,
    choices: ["Left and up", "Left and down", "Right and up", "Right and down"],
    why: [
      String.raw`$x(t) = (t - 3)^2 - 9$ is decreasing for $t < 3$, so the particle moves left. $y(t) = 2t - 5$ is increasing for all $t$, so it moves up.`,
      String.raw`On $0 < t < 2$, $y(t)$ is negative, but it is increasing from $-5$ to $-1$. The direction comes from whether $y(t)$ increases, not from its sign.`,
      String.raw`$x(t) = (t - 3)^2 - 9$ has its vertex at $t = 3$, so it is decreasing on $0 < t < 2$ and the particle moves left.`,
      String.raw`Both directions are reversed. $x(t)$ is decreasing and $y(t)$ is increasing on $0 < t < 2$.`,
    ], answer: 0 },
  { id: "p4ar-m16", type: "mcq", skill: "u4", topic: "4.3", calc: false, difficulty: "easy", set: "p4ar-s3",
    question: String.raw`For $0 < t < 1$, in which directions is the particle moving?`,
    choices: ["Left and up", "Right and up", "Left and down", "Right and down"],
    why: [
      String.raw`On $0 < t < 1$, $g$ is decreasing (before its minimum at $t = 2$), so the particle moves left. $h$ is increasing (before its maximum at $t = 3$), so it moves up.`,
      String.raw`$g(t)$ is positive on $0 < t < 1$, but it is decreasing. The particle moves left because $g$ decreases, whatever the sign of $g(t)$.`,
      String.raw`$h(t)$ is negative for $t$ near $0$, but $h$ is increasing on all of $0 < t < 1$, so the particle moves up.`,
      String.raw`Both directions are reversed. $g$ is decreasing and $h$ is increasing on $0 < t < 1$.`,
    ], answer: 0 },
  { id: "p4ar-m17", type: "mcq", skill: "u4", topic: "4.3", calc: false, difficulty: "moderate", set: "p4ar-s3",
    question: String.raw`On which interval is the particle moving to the right and up?`,
    choices: [String.raw`$2 < t < 3$`, String.raw`$0 < t < 2$`, String.raw`$3 < t < 5$`, String.raw`$2 < t < 5$`],
    why: [
      String.raw`The particle moves right where $g$ is increasing, $2 < t < 5$, and up where $h$ is increasing, $0 < t < 3$. Both hold on $2 < t < 3$.`,
      String.raw`On $0 < t < 2$, $h$ is increasing but $g$ is decreasing, so the particle moves left and up.`,
      String.raw`On $3 < t < 5$, $g(t)$ and $h(t)$ are both positive, but $h$ is decreasing. The particle moves right and down there.`,
      String.raw`On $3 < t < 5$, $h$ is decreasing, so the particle moves down. Only $2 < t < 3$ has both conditions.`,
    ], answer: 0 },
  { id: "p4ar-m18", type: "mcq", skill: "u4", topic: "4.3", calc: false, difficulty: "easy",
    question: String.raw`A particle moves along a line so that its position at time $t$ is $\left(5 - 3t,\ 2t + 1\right)$. What is the rate of change of $y$ with respect to $x$ along the path?`,
    choices: [String.raw`$-\frac{2}{3}$`, String.raw`$-\frac{3}{2}$`, "$2$", "$-3$"],
    why: [
      String.raw`Over any time interval of length $\Delta t$, $x$ changes by $-3\Delta t$ and $y$ changes by $2\Delta t$. The rate of change of $y$ with respect to $x$ is $\dfrac{2\Delta t}{-3\Delta t} = -\dfrac{2}{3}$.`,
      String.raw`$-\dfrac{3}{2}$ is the change in $x$ over the change in $y$, the reciprocal of the rate asked for.`,
      String.raw`$2$ is the rate of change of $y$ with respect to $t$. The rate with respect to $x$ divides by the change in $x$.`,
      String.raw`$-3$ is the rate of change of $x$ with respect to $t$.`,
    ], answer: 0 },
  { id: "p4ar-m19", type: "mcq", skill: "u4", topic: "4.3", calc: true, difficulty: "moderate",
    question: String.raw`A particle moves in the $xy$-plane so that its position at time $t$ is $\left(3 + 2\ln(t + 1),\ 0.5t^2 + 1\right)$. What is the average rate of change of $y$ with respect to $x$ for $1 \le t \le 4$?`,
    choices: ["$4.093$", "$0.244$", "$2.500$", "$0.611$"],
    why: [
      String.raw`$y(4) - y(1) = 9 - 1.5 = 7.5$ and $x(4) - x(1) = 2\ln 5 - 2\ln 2 \approx 1.833$. The average rate of change is $\dfrac{7.5}{1.833} \approx 4.093$.`,
      String.raw`$0.244$ is $\dfrac{1.833}{7.5}$, the change in $x$ over the change in $y$. The rate of $y$ with respect to $x$ puts the change in $y$ on top.`,
      String.raw`$2.500$ is $\dfrac{7.5}{3}$, the average rate of change of $y$ with respect to $t$.`,
      String.raw`$0.611$ is $\dfrac{1.833}{3}$, the average rate of change of $x$ with respect to $t$.`,
    ], answer: 0 },
  { id: "p4ar-m20", type: "mcq", skill: "u4", topic: "4.3", calc: false, difficulty: "difficult",
    question: String.raw`A particle moves in the $xy$-plane so that its position at time $t$ is $\left(3t + 1,\ kt^2 + 2t\right)$, where $k$ is a constant. The average rate of change of $y$ with respect to $x$ for $1 \le t \le 3$ is $2$. What is the value of $k$?`,
    choices: ["$1$", String.raw`$\frac{2}{3}$`, String.raw`$-\frac{1}{8}$`, String.raw`$\frac{3}{2}$`],
    why: [
      String.raw`$x(3) - x(1) = 10 - 4 = 6$ and $y(3) - y(1) = (9k + 6) - (k + 2) = 8k + 4$. Then $\dfrac{8k + 4}{6} = 2$, so $8k + 4 = 12$ and $k = 1$.`,
      String.raw`$\dfrac{2}{3}$ comes from $\dfrac{9k + 6}{6} = 2$, which uses $y(3)$ as the change in $y$ and leaves out $y(1)$.`,
      String.raw`$-\dfrac{1}{8}$ comes from $\dfrac{6}{8k + 4} = 2$, which puts the change in $x$ on top.`,
      String.raw`$\dfrac{3}{2}$ comes from $\dfrac{8k}{6} = 2$, which drops the $2t$ term of $y(t)$ when finding the change in $y$.`,
    ], answer: 0 },
  { id: "p4ar-m21", type: "mcq", skill: "u4", topic: "4.3", calc: false, difficulty: "easy", set: "p4ar-s4",
    question: String.raw`Between which two consecutive times in the table is the particle moving to the left and down?`,
    choices: [String.raw`$t = 1$ and $t = 2$`, String.raw`$t = 0$ and $t = 1$`, String.raw`$t = 2$ and $t = 3$`, String.raw`$t = 3$ and $t = 4$`],
    why: [
      String.raw`From $t = 1$ to $t = 2$, $x$ decreases from $1$ to $0$ (left) and $y$ decreases from $4$ to $3$ (down).`,
      String.raw`From $t = 0$ to $t = 1$, $x$ decreases (left) but $y$ increases from $2$ to $4$ (up).`,
      String.raw`From $t = 2$ to $t = 3$, $y$ decreases (down) but $x$ increases from $0$ to $2$ (right).`,
      String.raw`From $t = 3$ to $t = 4$, $y$ becomes negative, but $x$ increases from $2$ to $5$, so the particle moves right and down.`,
    ], answer: 0 },

  // 4.4 Parametrically Defined Circles and Lines
  { id: "p4ar-m22", type: "mcq", skill: "u4", topic: "4.4", calc: false, difficulty: "easy",
    question: String.raw`A particle moves around the unit circle so that its position at time $t$ is $(\cos t, \sin t)$. For $0 < t < \dfrac{\pi}{2}$, in which directions is the particle moving?`,
    choices: ["Left and up", "Right and up", "Left and down", "Right and down"],
    why: [
      String.raw`On $0 < t < \dfrac{\pi}{2}$, $\cos t$ decreases from $1$ to $0$ (left) and $\sin t$ increases from $0$ to $1$ (up).`,
      String.raw`In the first quadrant $x$ and $y$ are both positive, but those are the signs of the coordinates. $\cos t$ is decreasing there, so the particle moves left.`,
      String.raw`Left and down describes $\dfrac{\pi}{2} < t < \pi$, the second quadrant, where $\sin t$ decreases.`,
      String.raw`Right and down describes $\pi < t < \dfrac{3\pi}{2}$, the third quadrant.`,
    ], answer: 0 },
  { id: "p4ar-m23", type: "mcq", skill: "u4", topic: "4.4", calc: false, difficulty: "easy",
    question: String.raw`Which parametric function has the circle $(x - 3)^2 + (y + 2)^2 = 16$ as its graph for $0 \le t \le 2\pi$?`,
    choices: [String.raw`$\left(3 + 4\cos t,\ -2 + 4\sin t\right)$`, String.raw`$\left(-3 + 4\cos t,\ 2 + 4\sin t\right)$`, String.raw`$\left(3 + 16\cos t,\ -2 + 16\sin t\right)$`, String.raw`$\left(3 + 4\cos t,\ 2 + 4\sin t\right)$`],
    why: [
      String.raw`The circle has center $(3, -2)$ and radius $\sqrt{16} = 4$. A circle with center $(h, k)$ and radius $r$ is $\left(h + r\cos t,\ k + r\sin t\right)$.`,
      String.raw`This flips the signs of both center coordinates. $(x - 3)^2$ means the center has $x = 3$, and $(y + 2)^2$ means $y = -2$.`,
      String.raw`$16$ is $r^2$. The radius is $\sqrt{16} = 4$.`,
      String.raw`This flips the sign of the $y$-coordinate of the center. $(y + 2)^2 = (y - (-2))^2$, so the center has $y = -2$.`,
    ], answer: 0 },
  { id: "p4ar-m24", type: "mcq", skill: "u4", topic: "4.4", calc: false, difficulty: "moderate",
    question: String.raw`Which parametric function traces the circle of radius $2$ centered at the origin clockwise, starting at $(0, 2)$ when $t = 0$?`,
    choices: [String.raw`$\left(2\sin t,\ 2\cos t\right)$`, String.raw`$\left(-2\cos t,\ 2\sin t\right)$`, String.raw`$\left(-2\sin t,\ 2\cos t\right)$`, String.raw`$\left(2\sin t,\ -2\cos t\right)$`],
    why: [
      String.raw`At $t = 0$ it gives $(0, 2)$. For $t$ just after $0$, $2\sin t$ increases (right) and $2\cos t$ decreases (down). Moving right and down from the top of the circle is clockwise.`,
      String.raw`This moves clockwise, but it starts at $(-2, 0)$, not $(0, 2)$.`,
      String.raw`This starts at $(0, 2)$, but $-2\sin t$ decreases just after $t = 0$, so the particle moves left from the top. That is counterclockwise.`,
      String.raw`This starts at $(0, -2)$, the bottom of the circle, and moves right from there, which is counterclockwise.`,
    ], answer: 0 },
  { id: "p4ar-m25", type: "mcq", skill: "u4", topic: "4.4", calc: false, difficulty: "easy", set: "p4ar-s5",
    question: String.raw`Which parametric function gives the particle's position at time $t$ for $0 \le t \le 3$?`,
    choices: [String.raw`$\left(-2 + 2t,\ 4 - t\right)$`, String.raw`$\left(-2 + 6t,\ 4 - 3t\right)$`, String.raw`$\left(4 - 2t,\ 1 + t\right)$`, String.raw`$\left(2 + 2t,\ -4 - t\right)$`],
    why: [
      String.raw`The particle starts at $(-2, 4)$. Over $3$ units of time, $x$ changes by $4 - (-2) = 6$ and $y$ changes by $1 - 4 = -3$, so the rates are $\dfrac{6}{3} = 2$ and $\dfrac{-3}{3} = -1$.`,
      String.raw`This uses the total changes $6$ and $-3$ as the rates. The particle would reach $(4, 1)$ at $t = 1$, not $t = 3$.`,
      String.raw`This starts at $(4, 1)$ and moves to $(-2, 4)$, the same segment traced in the opposite direction.`,
      String.raw`This flips the signs of the starting coordinates. At $t = 0$ it gives $(2, -4)$, not $(-2, 4)$.`,
    ], answer: 0 },
  { id: "p4ar-m26", type: "mcq", skill: "u4", topic: "4.4", calc: false, difficulty: "moderate",
    question: String.raw`For $0 \le t \le 4$, the parametric function $\left(1 + 2t,\ 3 - t\right)$ traces the line segment from $(1, 3)$ to $(9, -1)$. Which parametric function traces the same segment in the opposite direction for $0 \le t \le 4$?`,
    choices: [String.raw`$\left(9 - 2t,\ -1 + t\right)$`, String.raw`$\left(1 - 2t,\ 3 + t\right)$`, String.raw`$\left(9 + 2t,\ -1 - t\right)$`, String.raw`$\left(-1 + 2t,\ 9 - t\right)$`],
    why: [
      String.raw`The new path must start at $(9, -1)$ and move toward $(1, 3)$, so the rates are the opposites of $2$ and $-1$. At $t = 4$ it gives $(9 - 8, -1 + 4) = (1, 3)$.`,
      String.raw`Negating both rates without moving the start gives the segment from $(1, 3)$ to $(-7, 7)$, which lies on the same line but is a different segment.`,
      String.raw`This starts at $(9, -1)$ but keeps the original rates, so it moves away from $(1, 3)$ and ends at $(17, -5)$.`,
      String.raw`This takes the coordinates of $(9, -1)$ in the wrong order and starts at $(-1, 9)$, which is not on the segment.`,
    ], answer: 0 },
  { id: "p4ar-m27", type: "mcq", skill: "u4", topic: "4.4", calc: true, difficulty: "difficult",
    question: String.raw`A particle moves counterclockwise at a constant rate around the circle $(x - 1)^2 + (y - 2)^2 = 25$ and completes one revolution every $10$ seconds. At time $t = 0$ it is at $(6, 2)$. What is its position at $t = 4$ seconds?`,
    choices: [String.raw`$(-3.045,\ 4.939)$`, String.raw`$(-3.045,\ -0.939)$`, String.raw`$(5.995,\ 2.219)$`, String.raw`$(-4.045,\ 2.939)$`],
    why: [
      String.raw`The position is $\left(1 + 5\cos\left(\dfrac{2\pi}{10}t\right),\ 2 + 5\sin\left(\dfrac{2\pi}{10}t\right)\right)$. At $t = 4$ the angle is $0.8\pi$ radians, so the position is $\left(1 + 5\cos(0.8\pi),\ 2 + 5\sin(0.8\pi)\right) \approx (-3.045, 4.939)$.`,
      String.raw`This uses $2 - 5\sin(0.8\pi)$, which moves the particle clockwise.`,
      String.raw`This computes $\cos(0.8\pi)$ and $\sin(0.8\pi)$ in degree mode, treating $2.513$ as degrees. The angle is in radians.`,
      String.raw`This leaves out the center: $\left(5\cos(0.8\pi),\ 5\sin(0.8\pi)\right)$ is on a circle centered at the origin.`,
    ], answer: 0 },
  { id: "p4ar-m28", type: "mcq", skill: "u4", topic: "4.4", calc: false, difficulty: "difficult",
    question: String.raw`Which of the following parametric functions trace the entire unit circle?

I. $(\cos 2t, \sin 2t)$ for $0 \le t \le \pi$
II. $(\cos t, \sin t)$ for $0 \le t \le \pi$
III. $(\sin t, \cos t)$ for $0 \le t \le 2\pi$`,
    choices: ["I and III only", "I only", "III only", "I, II, and III"],
    why: [
      String.raw`In I, $2t$ runs from $0$ to $2\pi$, a full turn. In III, $\sin^2 t + \cos^2 t = 1$ and $t$ runs through a full period, so the whole circle is traced, clockwise from $(0, 1)$. In II, $t$ runs through only half a turn, so only the upper semicircle is traced.`,
      String.raw`III also traces the whole circle. Swapping $\sin$ and $\cos$ changes the starting point and the direction, not the set of points.`,
      String.raw`I also traces the whole circle. As $t$ runs from $0$ to $\pi$, the angle $2t$ runs from $0$ to $2\pi$.`,
      String.raw`II traces only the upper half: for $0 \le t \le \pi$, $\sin t \ge 0$.`,
    ], answer: 0 },

  // 4.5 Implicitly Defined Functions
  { id: "p4ar-m29", type: "mcq", skill: "u4", topic: "4.5", calc: false, difficulty: "easy",
    question: String.raw`The equation $x^2y + 3y = 6$ defines $y$ implicitly as a function of $x$. Which of the following gives $y$ explicitly?`,
    choices: [String.raw`$y = \frac{6}{x^2 + 3}$`, String.raw`$y = \frac{6}{x^2} - 3$`, String.raw`$y = \frac{6 - x^2}{3}$`, String.raw`$y = \frac{x^2 + 3}{6}$`],
    why: [
      String.raw`Factor $y$ out of the left side: $y(x^2 + 3) = 6$, so $y = \dfrac{6}{x^2 + 3}$.`,
      String.raw`This divides by $x^2$ and then subtracts $3$, as if the equation were $x^2(y + 3) = 6$. The $3$ multiplies $y$, so factor $y$ out first.`,
      String.raw`This treats $x^2y$ as $x^2 + y$. The term $x^2y$ is a product.`,
      String.raw`This is the reciprocal of the correct expression. $y(x^2 + 3) = 6$ means $y$ is $6$ divided by $x^2 + 3$.`,
    ], answer: 0 },
  { id: "p4ar-m30", type: "mcq", skill: "u4", topic: "4.5", calc: false, difficulty: "easy",
    question: String.raw`The graph of $(x - 2)^2 + (y + 1)^2 = 9$ is a circle. Which function has the lower half of the circle as its graph?`,
    choices: [String.raw`$y = -1 - \sqrt{9 - (x - 2)^2}$`, String.raw`$y = 1 - \sqrt{9 - (x - 2)^2}$`, String.raw`$y = -1 + \sqrt{9 - (x - 2)^2}$`, String.raw`$y = -1 - \sqrt{9 + (x - 2)^2}$`],
    why: [
      String.raw`$(y + 1)^2 = 9 - (x - 2)^2$ gives $y + 1 = \pm\sqrt{9 - (x - 2)^2}$. The lower half takes the negative square root: $y = -1 - \sqrt{9 - (x - 2)^2}$.`,
      String.raw`This subtracts $1$ on the wrong side. From $y + 1 = -\sqrt{9 - (x - 2)^2}$, subtracting $1$ gives $y = -1 - \sqrt{\cdots}$.`,
      String.raw`The positive square root gives the upper half of the circle.`,
      String.raw`Moving $(x - 2)^2$ to the right side changes its sign: $(y + 1)^2 = 9 - (x - 2)^2$.`,
    ], answer: 0 },
  { id: "p4ar-m31", type: "mcq", skill: "u4", topic: "4.5", calc: false, difficulty: "easy",
    question: String.raw`Which of the following equations has a graph on which $y$ is a function of $x$?`,
    choices: [String.raw`$x^2 + y^3 = 8$`, String.raw`$x^2 + y^2 = 8$`, String.raw`$x + y^2 = 8$`, String.raw`$|y| = x + 8$`],
    why: [
      String.raw`$y^3 = 8 - x^2$ gives $y = \sqrt[3]{8 - x^2}$, exactly one value of $y$ for each $x$, because every real number has one cube root.`,
      String.raw`$x = 0$ gives $y^2 = 8$, so $y = \pm 2\sqrt{2}$: two values of $y$ for one $x$.`,
      String.raw`$x = 4$ gives $y^2 = 4$, so $y = \pm 2$: two values of $y$ for one $x$.`,
      String.raw`$x = 0$ gives $|y| = 8$, so $y = \pm 8$: two values of $y$ for one $x$.`,
    ], answer: 0 },
  { id: "p4ar-m32", type: "mcq", skill: "u4", topic: "4.5", calc: false, difficulty: "moderate",
    question: String.raw`The graph of $y^2 - xy - 2x^2 = 0$ is a pair of lines. What are the two lines?`,
    choices: ["$y = 2x$ and $y = -x$", "$y = -2x$ and $y = x$", "$y = 2x$ and $y = x$", String.raw`$y = 2x^2$ and $y = -x$`],
    why: [
      String.raw`Factor the left side as a quadratic in $y$: $y^2 - xy - 2x^2 = (y - 2x)(y + x)$. The product is $0$ when $y = 2x$ or $y = -x$.`,
      String.raw`These come from $(y + 2x)(y - x) = y^2 + xy - 2x^2$, which has the wrong sign on the $xy$ term.`,
      String.raw`$(y - 2x)(y - x) = y^2 - 3xy + 2x^2$, which does not match. The factors of $-2x^2$ need opposite signs.`,
      String.raw`This treats $-2x^2$ as if it gave a factor of $y - 2x^2$. Each factor is linear in $x$ and $y$: $(y - 2x)(y + x)$.`,
    ], answer: 0 },
  { id: "p4ar-m33", type: "mcq", skill: "u4", topic: "4.5", calc: false, difficulty: "moderate", set: "p4ar-s6",
    question: String.raw`On which arcs between consecutive labeled points does $y$ decrease as $x$ increases?`,
    choices: ["Arcs AB and DE only", "Arc AB only", "Arcs DE and EF only", "Arcs BC and EF only"],
    why: [
      String.raw`On arc $AB$, going from $A(2, 1)$ to $B(1, 2)$, $x$ decreases and $y$ increases, so $y$ decreases as $x$ increases. Arc $DE$, from $D(-2, -1)$ to $E(-1, -2)$, is the same: $x$ increases while $y$ decreases. On the other four arcs, $x$ and $y$ change in the same direction.`,
      String.raw`Arc $DE$ also qualifies: from $D(-2, -1)$ to $E(-1, -2)$, $x$ increases while $y$ decreases.`,
      String.raw`On arc $EF$, from $E(-1, -2)$ to $F(1, -1)$, $y$ is negative but increasing as $x$ increases. The sign of $y$ does not decide whether $y$ decreases.`,
      String.raw`On arc $BC$, going from $B$ to $C$, both coordinates decrease, so $y$ increases as $x$ increases. The same is true on arc $EF$.`,
    ], answer: 0 },
  { id: "p4ar-m34", type: "mcq", skill: "u4", topic: "4.5", calc: false, difficulty: "easy", set: "p4ar-s6",
    question: String.raw`What are all values of $y$ for which the point $(1, y)$ is on the curve?`,
    choices: ["$2$ and $-1$", "$2$ only", "$1$ and $-2$", String.raw`$\sqrt{2}$ and $-\sqrt{2}$`],
    why: [
      String.raw`Substitute $x = 1$: $1 - y + y^2 = 3$, so $y^2 - y - 2 = 0$ and $(y - 2)(y + 1) = 0$. The points are $(1, 2)$, which is $B$, and $(1, -1)$, which is $F$.`,
      String.raw`$(1, 2)$ is on the curve, but so is $(1, -1)$, point $F$. A vertical line can meet this curve twice.`,
      String.raw`These solve $y^2 + y - 2 = 0$, which uses $+xy$ in place of $-xy$. The middle term at $x = 1$ is $-y$.`,
      String.raw`This drops the $-xy$ term and solves $1 + y^2 = 3$.`,
    ], answer: 0 },
  { id: "p4ar-m35", type: "mcq", skill: "u4", topic: "4.5", calc: false, difficulty: "difficult",
    question: String.raw`The graph of $y^2 = x^3 - 4x$ is a curve in the $xy$-plane. For which values of $x$ does the vertical line through $x$ meet the curve at exactly two points?`,
    choices: [String.raw`$-2 < x < 0$ or $x > 2$`, String.raw`$x < -2$ or $0 < x < 2$`, String.raw`$x > 2$ only`, String.raw`$-2 \le x \le 0$ or $x \ge 2$`],
    why: [
      String.raw`There are two values of $y$, $\pm\sqrt{x^3 - 4x}$, exactly when $x^3 - 4x = x(x - 2)(x + 2) > 0$. A sign chart on the zeros $-2$, $0$, and $2$ shows the product is positive on $-2 < x < 0$ and $x > 2$.`,
      String.raw`On these intervals $x(x - 2)(x + 2) < 0$, so $y^2$ would be negative and there are no points on the curve.`,
      String.raw`This misses $-2 < x < 0$. For example, $x = -1$ gives $y^2 = -1 + 4 = 3$, so $y = \pm\sqrt{3}$.`,
      String.raw`At $x = -2$, $0$, and $2$, $y^2 = 0$, so the vertical line meets the curve at only one point, $(x, 0)$.`,
    ], answer: 0 },
  { id: "p4ar-m36", type: "mcq", skill: "u4", topic: "4.5", calc: true, difficulty: "easy",
    question: String.raw`The equation $y^5 + y = x$ defines $y$ implicitly as a function of $x$. What is the value of $y$ when $x = 3$?`,
    choices: ["$1.133$", "$1.246$", "$1.500$", "$246$"],
    why: [
      String.raw`Solve $y^5 + y - 3 = 0$ on the calculator, for example by graphing $Y = X^5 + X - 3$ and finding its zero: $y \approx 1.133$.`,
      String.raw`$1.246$ is $\sqrt[5]{3}$, which solves $y^5 = 3$ and leaves out the $+y$ term.`,
      String.raw`$1.500$ solves $2y = 3$, which treats $y^5$ as if it were $y$.`,
      String.raw`$246$ is $3^5 + 3$, which puts $3$ in for $y$ instead of for $x$.`,
    ], answer: 0 },

  // 4.6 Conic Sections
  { id: "p4ar-m37", type: "mcq", skill: "u4", topic: "4.6", calc: false, difficulty: "easy", set: "p4ar-s7",
    question: String.raw`Which equation has this parabola as its graph?`,
    choices: [String.raw`$x = \frac{1}{2}(y - 1)^2 - 3$`, String.raw`$y = \frac{1}{2}(x + 3)^2 + 1$`, String.raw`$x = \frac{1}{2}(y + 1)^2 - 3$`, String.raw`$x = \frac{1}{2}(y - 1)^2 + 3$`],
    why: [
      String.raw`A parabola that opens to the right with vertex $(h, k)$ has the form $x = a(y - k)^2 + h$ with $a > 0$. With vertex $(-3, 1)$ and the point $(-1, 3)$: $-1 = a(2)^2 - 3$, so $a = \dfrac{1}{2}$.`,
      String.raw`This is a parabola that opens up, with $y$ as a function of $x$. A parabola that opens sideways has $x$ as a function of $y$.`,
      String.raw`This has vertex $(-3, -1)$. The factor $(y - k)^2$ with $k = 1$ is $(y - 1)^2$.`,
      String.raw`This has vertex $(3, 1)$. The constant added is $h = -3$.`,
    ], answer: 0 },
  { id: "p4ar-m38", type: "mcq", skill: "u4", topic: "4.6", calc: false, difficulty: "easy",
    question: String.raw`What are the endpoints of the major axis of the ellipse $\dfrac{(x + 3)^2}{9} + \dfrac{(y - 1)^2}{16} = 1$?`,
    choices: ["$(-3, 5)$ and $(-3, -3)$", "$(-6, 1)$ and $(0, 1)$", "$(-3, 17)$ and $(-3, -15)$", "$(3, 5)$ and $(3, -3)$"],
    why: [
      String.raw`The center is $(-3, 1)$. The larger denominator, $16$, is under the $y$ term, so the major axis is vertical with half-length $\sqrt{16} = 4$. The endpoints are $(-3, 1 \pm 4)$.`,
      String.raw`These are the endpoints of the minor axis, $3$ units left and right of the center. The major axis goes with the larger denominator.`,
      String.raw`These move $16$ units from the center. The half-length is $\sqrt{16} = 4$.`,
      String.raw`These use the center $(3, 1)$. $(x + 3)^2$ means the center has $x = -3$.`,
    ], answer: 0 },
  { id: "p4ar-m39", type: "mcq", skill: "u4", topic: "4.6", calc: false, difficulty: "difficult",
    question: String.raw`Which equation is the standard form of the ellipse $x^2 + 4y^2 - 6x + 16y + 21 = 0$?`,
    choices: [String.raw`$\frac{(x - 3)^2}{4} + (y + 2)^2 = 1$`, String.raw`$\frac{(x - 3)^2}{4} + \frac{(y + 2)^2}{4} = 1$`, String.raw`$\frac{(x - 3)^2}{4} + \frac{(y + 2)^2}{16} = 1$`, String.raw`$\frac{(x - 3)^2}{9} + \frac{(y + 2)^2}{4} = 1$`],
    why: [
      String.raw`Complete the square: $(x^2 - 6x + 9) + 4(y^2 + 4y + 4) = -21 + 9 + 16$, so $(x - 3)^2 + 4(y + 2)^2 = 4$. Divide by $4$: $\dfrac{(x - 3)^2}{4} + (y + 2)^2 = 1$.`,
      String.raw`This divides the $y$ term by $4$ without its coefficient. $\dfrac{4(y + 2)^2}{4} = (y + 2)^2$.`,
      String.raw`This multiplies by the coefficient $4$ where it should divide: $\dfrac{4(y + 2)^2}{4} = (y + 2)^2$.`,
      String.raw`$9$ and $4$ are the numbers added inside the parentheses to complete the squares. The denominators come from dividing both sides by $4$.`,
    ], answer: 0 },
  { id: "p4ar-m40", type: "mcq", skill: "u4", topic: "4.6", calc: false, difficulty: "moderate", set: "p4ar-s8",
    question: String.raw`Which equation has this hyperbola as its graph?`,
    choices: [String.raw`$\frac{(x - 1)^2}{4} - \frac{(y + 1)^2}{9} = 1$`, String.raw`$\frac{(y + 1)^2}{9} - \frac{(x - 1)^2}{4} = 1$`, String.raw`$\frac{(x - 1)^2}{9} - \frac{(y + 1)^2}{4} = 1$`, String.raw`$\frac{(x + 1)^2}{4} - \frac{(y - 1)^2}{9} = 1$`],
    why: [
      String.raw`The center is the midpoint of the vertices, $(1, -1)$. The branches open left and right, so the $x$ term is positive, with $a = 2$ (center to vertex). The asymptotes have slopes $\pm\dfrac{3}{2} = \pm\dfrac{b}{a}$, so $b = 3$.`,
      String.raw`This hyperbola opens up and down. The graph opens left and right, so the $x$ term comes first.`,
      String.raw`This swaps $a$ and $b$. The vertices are $2$ units from the center, so $a^2 = 4$ goes under the $x$ term.`,
      String.raw`This flips the signs of the center. A center of $(1, -1)$ gives $(x - 1)^2$ and $(y + 1)^2$.`,
    ], answer: 0 },
  { id: "p4ar-m41", type: "mcq", skill: "u4", topic: "4.6", calc: false, difficulty: "easy",
    question: String.raw`What are the asymptotes of the hyperbola $\dfrac{x^2}{16} - \dfrac{y^2}{9} = 1$?`,
    choices: [String.raw`$y = \pm\frac{3}{4}x$`, String.raw`$y = \pm\frac{4}{3}x$`, String.raw`$y = \pm\frac{9}{16}x$`, String.raw`$y = \pm\frac{16}{9}x$`],
    why: [
      String.raw`Here $a = 4$ and $b = 3$. A hyperbola $\dfrac{x^2}{a^2} - \dfrac{y^2}{b^2} = 1$ has asymptotes $y = \pm\dfrac{b}{a}x = \pm\dfrac{3}{4}x$.`,
      String.raw`$\dfrac{4}{3}$ is $\dfrac{a}{b}$, the reciprocal of the slope.`,
      String.raw`$\dfrac{9}{16}$ is $\dfrac{b^2}{a^2}$. The slope uses $a$ and $b$, not their squares.`,
      String.raw`$\dfrac{16}{9}$ is $\dfrac{a^2}{b^2}$, which uses the squares and inverts the ratio.`,
    ], answer: 0 },
  { id: "p4ar-m42", type: "mcq", skill: "u4", topic: "4.6", calc: false, difficulty: "moderate",
    question: String.raw`An ellipse has center $(-1, 2)$, a horizontal major axis of length $10$, and a minor axis of length $6$. Which equation is the ellipse?`,
    choices: [String.raw`$\frac{(x + 1)^2}{25} + \frac{(y - 2)^2}{9} = 1$`, String.raw`$\frac{(x + 1)^2}{100} + \frac{(y - 2)^2}{36} = 1$`, String.raw`$\frac{(x + 1)^2}{10} + \frac{(y - 2)^2}{6} = 1$`, String.raw`$\frac{(x - 1)^2}{25} + \frac{(y + 2)^2}{9} = 1$`],
    why: [
      String.raw`The half-lengths are $\dfrac{10}{2} = 5$ (horizontal) and $\dfrac{6}{2} = 3$ (vertical), so the denominators are $5^2 = 25$ under the $x$ term and $3^2 = 9$ under the $y$ term.`,
      String.raw`$100$ and $36$ square the full axis lengths. The denominators are the squares of the half-lengths.`,
      String.raw`$10$ and $6$ are the axis lengths. The denominators are the squares of the half-lengths, $25$ and $9$.`,
      String.raw`This flips the signs of the center. A center of $(-1, 2)$ gives $(x + 1)^2$ and $(y - 2)^2$.`,
    ], answer: 0 },
  { id: "p4ar-m43", type: "mcq", skill: "u4", topic: "4.6", calc: false, difficulty: "difficult",
    question: String.raw`What are the vertices of the hyperbola $4x^2 - 9y^2 + 8x + 36y + 4 = 0$?`,
    choices: ["$(-1, 0)$ and $(-1, 4)$", "$(-4, 2)$ and $(2, 2)$", "$(-1, -2)$ and $(-1, 6)$", "$(1, 0)$ and $(1, 4)$"],
    why: [
      String.raw`Complete the square: $4(x + 1)^2 - 4 - 9(y - 2)^2 + 36 + 4 = 0$, so $4(x + 1)^2 - 9(y - 2)^2 = -36$. Dividing by $-36$ gives $\dfrac{(y - 2)^2}{4} - \dfrac{(x + 1)^2}{9} = 1$. It opens up and down from the center $(-1, 2)$ with $a = 2$, so the vertices are $(-1, 2 \pm 2)$.`,
      String.raw`These assume the hyperbola opens left and right because the $x^2$ term is positive in the original equation. After dividing by $-36$, the $y$ term is the positive one.`,
      String.raw`These move $4$ units from the center, using $a^2 = 4$ as the distance. The distance is $a = 2$.`,
      String.raw`These use the center $(1, 2)$. $4x^2 + 8x$ completes to $4(x + 1)^2$, so the center has $x = -1$.`,
    ], answer: 0 },
  { id: "p4ar-m44", type: "mcq", skill: "u4", topic: "4.6", calc: true, difficulty: "easy",
    question: String.raw`The point $(3, k)$, where $k > 0$, lies on the ellipse $\dfrac{x^2}{20} + \dfrac{y^2}{12} = 1$. What is the value of $k$?`,
    choices: ["$2.569$", "$6.600$", "$1.732$", "$2.236$"],
    why: [
      String.raw`$\dfrac{9}{20} + \dfrac{k^2}{12} = 1$ gives $k^2 = 12\left(1 - \dfrac{9}{20}\right) = 6.6$, so $k = \sqrt{6.6} \approx 2.569$.`,
      String.raw`$6.600$ is $k^2$. The value of $k$ is its square root.`,
      String.raw`$1.732$ is $\sqrt{12 - 9}$, which subtracts $x^2$ without dividing it by $20$.`,
      String.raw`$2.236$ swaps the denominators, solving $\dfrac{9}{12} + \dfrac{k^2}{20} = 1$.`,
    ], answer: 0 },

  // 4.7 Parametrization of Implicitly Defined Functions
  { id: "p4ar-m45", type: "mcq", skill: "u4", topic: "4.7", calc: false, difficulty: "easy",
    question: String.raw`Which equation has the same graph as the parametric function $\left(2 + 3\cos t,\ -1 + 5\sin t\right)$ for $0 \le t \le 2\pi$?`,
    choices: [String.raw`$\frac{(x - 2)^2}{9} + \frac{(y + 1)^2}{25} = 1$`, String.raw`$\frac{(x - 2)^2}{3} + \frac{(y + 1)^2}{5} = 1$`, String.raw`$\frac{(x + 2)^2}{9} + \frac{(y - 1)^2}{25} = 1$`, String.raw`$\frac{(x - 2)^2}{25} + \frac{(y + 1)^2}{9} = 1$`],
    why: [
      String.raw`$\cos t = \dfrac{x - 2}{3}$ and $\sin t = \dfrac{y + 1}{5}$. Since $\cos^2 t + \sin^2 t = 1$, $\dfrac{(x - 2)^2}{9} + \dfrac{(y + 1)^2}{25} = 1$.`,
      String.raw`The denominators must be squared: $\left(\dfrac{x - 2}{3}\right)^2 = \dfrac{(x - 2)^2}{9}$.`,
      String.raw`This flips the signs of the center. $x = 2 + 3\cos t$ has center $x$-coordinate $2$, which gives $(x - 2)^2$.`,
      String.raw`This swaps the radii. The horizontal radius is $3$, the coefficient of $\cos t$ in $x(t)$.`,
    ], answer: 0 },
  { id: "p4ar-m46", type: "mcq", skill: "u4", topic: "4.7", calc: false, difficulty: "easy",
    question: String.raw`Which parametric function has the same graph as $x = 3 - 2y^2$?`,
    choices: [String.raw`$\left(3 - 2t^2,\ t\right)$`, String.raw`$\left(t,\ 3 - 2t^2\right)$`, String.raw`$\left(3 + 2t^2,\ t\right)$`, String.raw`$\left(t,\ \sqrt{\frac{3 - t}{2}}\right)$`],
    why: [
      String.raw`Let $y = t$. Then $x = 3 - 2t^2$, and every point $(3 - 2y^2, y)$ is produced as $t$ runs through all real numbers.`,
      String.raw`This is the graph of $y = 3 - 2x^2$, which has $x$ and $y$ swapped. It opens down instead of to the left.`,
      String.raw`The sign of the $t^2$ term changed. This graph is $x = 3 + 2y^2$, which opens to the right.`,
      String.raw`This takes only the positive square root when solving for $y$, so it gives only the upper half of the parabola.`,
    ], answer: 0 },
  { id: "p4ar-m47", type: "mcq", skill: "u4", topic: "4.7", calc: false, difficulty: "easy",
    question: String.raw`Let $f(x) = x^3 + 1$. Which parametric function has the graph of the inverse of $f$ as its graph?`,
    choices: [String.raw`$\left(t^3 + 1,\ t\right)$`, String.raw`$\left(t,\ \sqrt[3]{t} - 1\right)$`, String.raw`$\left(t,\ -t^3 - 1\right)$`, String.raw`$\left(t,\ \frac{1}{t^3 + 1}\right)$`],
    why: [
      String.raw`The graph of $f$ is $\left(t, f(t)\right)$. The inverse swaps every input and output, so its graph is $\left(f(t), t\right) = \left(t^3 + 1, t\right)$.`,
      String.raw`This undoes the steps of $f$ in the wrong order. The inverse subtracts $1$ first and then takes the cube root: $y = \sqrt[3]{x - 1}$. For example, $f(2) = 9$, so the inverse pairs $9$ with $2$, but this choice pairs $9$ with $\sqrt[3]{9} - 1$, which is not $2$.`,
      String.raw`This is the graph of $-f$, the reflection of $f$ across the $x$-axis. The inverse reflects across $y = x$.`,
      String.raw`This is the graph of $\dfrac{1}{f}$, the reciprocal. The inverse function is not the reciprocal.`,
    ], answer: 0 },
  { id: "p4ar-m48", type: "mcq", skill: "u4", topic: "4.7", calc: false, difficulty: "moderate",
    question: String.raw`Which parametric function has the graph of $x^2 + y^2 - 6y = 16$ as its graph for $0 \le t \le 2\pi$?`,
    choices: [String.raw`$\left(5\cos t,\ 3 + 5\sin t\right)$`, String.raw`$\left(5\cos t,\ -3 + 5\sin t\right)$`, String.raw`$\left(\sqrt{7}\cos t,\ 3 + \sqrt{7}\sin t\right)$`, String.raw`$\left(25\cos t,\ 3 + 25\sin t\right)$`],
    why: [
      String.raw`Complete the square: $x^2 + (y^2 - 6y + 9) = 16 + 9$, so $x^2 + (y - 3)^2 = 25$. This is a circle with center $(0, 3)$ and radius $5$.`,
      String.raw`This flips the sign of the center. $y^2 - 6y$ completes to $(y - 3)^2$, so the center has $y = 3$.`,
      String.raw`This subtracts $9$ from $16$ where it should add $9$ to both sides. Completing the square gives $x^2 + (y - 3)^2 = 25$.`,
      String.raw`$25$ is $r^2$. The radius is $\sqrt{25} = 5$.`,
    ], answer: 0 },
  { id: "p4ar-m49", type: "mcq", skill: "u4", topic: "4.7", calc: false, difficulty: "easy",
    question: String.raw`Which parametric function has the graph of the hyperbola $\dfrac{(x + 1)^2}{4} - \dfrac{(y - 3)^2}{16} = 1$ as its graph?`,
    choices: [String.raw`$\left(-1 + 2\sec t,\ 3 + 4\tan t\right)$`, String.raw`$\left(-1 + 2\tan t,\ 3 + 4\sec t\right)$`, String.raw`$\left(-1 + 4\sec t,\ 3 + 2\tan t\right)$`, String.raw`$\left(1 + 2\sec t,\ -3 + 4\tan t\right)$`],
    why: [
      String.raw`Since $\sec^2 t - \tan^2 t = 1$, let $\dfrac{x + 1}{2} = \sec t$ and $\dfrac{y - 3}{4} = \tan t$. Then $x = -1 + 2\sec t$ and $y = 3 + 4\tan t$.`,
      String.raw`This puts $\sec t$ in $y$, which gives a hyperbola opening up and down. The positive term here is the $x$ term, so $\sec t$ goes with $x$.`,
      String.raw`This swaps the coefficients. $\dfrac{(x + 1)^2}{4}$ means $\dfrac{x + 1}{2} = \sec t$, so the coefficient of $\sec t$ is $2$.`,
      String.raw`This flips the signs of the center, which is $(-1, 3)$.`,
    ], answer: 0 },
  { id: "p4ar-m50", type: "mcq", skill: "u4", topic: "4.7", calc: false, difficulty: "moderate",
    question: String.raw`Which parametric function, defined for all real numbers $t$, has exactly the same graph as $y = x^2$?`,
    choices: [String.raw`$\left(t^3,\ t^6\right)$`, String.raw`$\left(\sqrt{t},\ t\right)$`, String.raw`$\left(\sin t,\ \sin^2 t\right)$`, String.raw`$\left(e^t,\ e^{2t}\right)$`],
    why: [
      String.raw`$t^6 = (t^3)^2$, so every point satisfies $y = x^2$. As $t$ runs through all real numbers, $x = t^3$ takes every real value, so the whole parabola is traced.`,
      String.raw`$\sqrt{t}$ is never negative and is undefined for $t < 0$, so this traces only the right half of the parabola.`,
      String.raw`Every point satisfies $y = x^2$, but $x = \sin t$ stays between $-1$ and $1$, so only part of the parabola is traced.`,
      String.raw`$e^{2t} = (e^t)^2$, so every point satisfies $y = x^2$, but $x = e^t$ is always positive, so only the right half is traced.`,
    ], answer: 0 },
  { id: "p4ar-m51", type: "mcq", skill: "u4", topic: "4.7", calc: false, difficulty: "difficult",
    question: String.raw`Which parametric function traces the ellipse $\dfrac{(x - 1)^2}{9} + \dfrac{(y + 2)^2}{4} = 1$ clockwise, starting at the top of the ellipse when $t = 0$?`,
    choices: [String.raw`$\left(1 + 3\sin t,\ -2 + 2\cos t\right)$`, String.raw`$\left(1 + 3\cos t,\ -2 + 2\sin t\right)$`, String.raw`$\left(1 - 3\sin t,\ -2 + 2\cos t\right)$`, String.raw`$\left(1 + 2\sin t,\ -2 + 3\cos t\right)$`],
    why: [
      String.raw`At $t = 0$ this gives $(1, 0)$, the top of the ellipse. For $t$ just after $0$, $x = 1 + 3\sin t$ increases and $y = -2 + 2\cos t$ decreases, so the point moves right and down from the top, which is clockwise.`,
      String.raw`This starts at $(4, -2)$, the rightmost point, and moves counterclockwise.`,
      String.raw`This starts at the top, but $1 - 3\sin t$ decreases just after $t = 0$, so the point moves left from the top. That is counterclockwise.`,
      String.raw`This swaps the radii. The horizontal radius is $3$ and the vertical radius is $2$; this function traces a different ellipse.`,
    ], answer: 0 },

  // Free response 1 (calculator, modeling a non-periodic context): a kicked ball
  { id: "p4ar-f1a", type: "frq", skill: "u4", topic: "4.2", calc: true, set: "p4ar-s9", part: "(a)",
    prompt: String.raw`(i) Use the given information to write two equations that can be used to find the values of $a$ and $b$.

(ii) Find the values of $a$ and $b$.`,
    rows: [
      { name: "Equations", earns: String.raw`$2a = 24$ and $-4.9(2)^2 + 2b = 10.4$.` },
      { name: "Values", earns: String.raw`$a = 12$ and $b = 15$.` },
    ],
    solution: String.raw`(i) At $t = 2$, $x(2) = 24$ and $y(2) = 10.4$: $$2a = 24 \qquad -4.9(2)^2 + 2b = 10.4$$ (ii) The first equation gives $a = 12$. The second gives $-19.6 + 2b = 10.4$, so $2b = 30$ and $b = 15$.` },
  { id: "p4ar-f1b", type: "frq", skill: "u4", topic: "4.2", calc: true, set: "p4ar-s9", part: "(b)",
    prompt: String.raw`Use the values of $a$ and $b$ from part (a).

(i) At what time $t > 0$ does the ball hit the ground?

(ii) How far from the kicking point, horizontally, is the ball when it hits the ground? Indicate units of measure.`,
    rows: [
      { name: "Time", earns: String.raw`Solves $-4.9t^2 + 15t = 0$ for $t > 0$: $t = \dfrac{15}{4.9} \approx 3.061$ seconds.` },
      { name: "Distance with units", earns: String.raw`$x(3.061) = 12(3.061) \approx 36.735$ meters.` },
    ],
    solution: String.raw`(i) The ball is on the ground when $y(t) = 0$: $t(-4.9t + 15) = 0$, so $t = 0$ (the kick) or $t = \dfrac{15}{4.9} \approx 3.061$ seconds. The ball hits the ground at $t \approx 3.061$ seconds.

(ii) $x\left(\dfrac{15}{4.9}\right) = 12 \cdot \dfrac{15}{4.9} \approx 36.735$ meters.` },
  { id: "p4ar-f1c", type: "frq", skill: "u4", topic: "4.3", calc: true, set: "p4ar-s9", part: "(c)",
    prompt: String.raw`Use the values of $a$ and $b$ from part (a).

(i) Find the average rate of change of $y$ with respect to $x$ for $0.5 \le t \le 2$. Show the computations that lead to your answer.

(ii) At time $t = 2$, is the ball moving up or down? Give a reason for your answer.`,
    rows: [
      { name: "Average rate of change", earns: String.raw`$\dfrac{y(2) - y(0.5)}{x(2) - x(0.5)} = \dfrac{10.4 - 6.275}{24 - 6} \approx 0.229$.` },
      { name: "Direction with reason", earns: String.raw`Down, because $y(t) = -4.9t^2 + 15t$ is a quadratic that opens down with its vertex at $t = \dfrac{15}{9.8} \approx 1.531$, so $y$ is decreasing for $t > 1.531$, including near $t = 2$.` },
    ],
    solution: String.raw`(i) $y(0.5) = -4.9(0.25) + 7.5 = 6.275$, $y(2) = 10.4$, $x(0.5) = 6$, and $x(2) = 24$. $$\frac{y(2) - y(0.5)}{x(2) - x(0.5)} = \frac{10.4 - 6.275}{24 - 6} = \frac{4.125}{18} \approx 0.229$$ The height increases by about $0.229$ meters for each meter of horizontal distance over this time interval.

(ii) Down. The graph of $y(t) = -4.9t^2 + 15t$ is a parabola that opens down with its vertex at $t = \dfrac{15}{2(4.9)} \approx 1.531$. The height is decreasing for $t > 1.531$, so at $t = 2$ the ball is moving down.` },

  // Free response 2 (no calculator, symbolic manipulations): an ellipse and a hyperbola
  { id: "p4ar-f2a", type: "frq", skill: "u4", topic: "4.6", calc: false, set: "p4ar-s10", part: "(a)",
    prompt: String.raw`(i) Rewrite the equation of $C$ in standard form by completing the square. Show the work that leads to your answer.

(ii) Find the center of $C$ and the endpoints of its major axis.`,
    rows: [
      { name: "Standard form", earns: String.raw`$\dfrac{(x - 2)^2}{4} + \dfrac{(y + 3)^2}{9} = 1$, with the completed squares shown.` },
      { name: "Center and endpoints", earns: String.raw`Center $(2, -3)$; major axis endpoints $(2, 0)$ and $(2, -6)$.` },
    ],
    solution: String.raw`(i) $$9(x^2 - 4x + 4) + 4(y^2 + 6y + 9) = -36 + 36 + 36$$ $$9(x - 2)^2 + 4(y + 3)^2 = 36$$ $$\frac{(x - 2)^2}{4} + \frac{(y + 3)^2}{9} = 1$$ (ii) The center is $(2, -3)$. The larger denominator, $9$, is under the $y$ term, so the major axis is vertical with half-length $3$. Its endpoints are $(2, -3 + 3) = (2, 0)$ and $(2, -3 - 3) = (2, -6)$.` },
  { id: "p4ar-f2b", type: "frq", skill: "u4", topic: "4.7", calc: false, set: "p4ar-s10", part: "(b)",
    prompt: String.raw`A particle moves along $C$ counterclockwise. At time $t = 0$ it is at the rightmost point of $C$, and it completes one revolution as $t$ increases from $0$ to $2\pi$.

(i) Write parametric functions $x(t)$ and $y(t)$ for the position of the particle.

(ii) Find the exact position of the particle at $t = \dfrac{\pi}{3}$.`,
    rows: [
      { name: "Parametrization", earns: String.raw`$x(t) = 2 + 2\cos t$ and $y(t) = -3 + 3\sin t$.` },
      { name: "Position", earns: String.raw`$\left(3,\ -3 + \dfrac{3\sqrt{3}}{2}\right)$.` },
    ],
    solution: String.raw`(i) From part (a), the horizontal radius is $2$ and the vertical radius is $3$. Starting at the rightmost point $(4, -3)$ and moving counterclockwise, $$x(t) = 2 + 2\cos t \qquad y(t) = -3 + 3\sin t$$ At $t = 0$ this gives $(4, -3)$, and for small $t > 0$ the particle moves left and up, which is counterclockwise.

(ii) $x\left(\dfrac{\pi}{3}\right) = 2 + 2 \cdot \dfrac{1}{2} = 3$ and $y\left(\dfrac{\pi}{3}\right) = -3 + 3 \cdot \dfrac{\sqrt{3}}{2}$. The position is $\left(3,\ -3 + \dfrac{3\sqrt{3}}{2}\right)$.` },
  { id: "p4ar-f2c", type: "frq", skill: "u4", topic: "4.7", calc: false, set: "p4ar-s10", part: "(c)",
    prompt: String.raw`(i) Rewrite the equation of $H$ in standard form, and find the vertices of $H$.

(ii) Write a parametrization of $H$ that uses $\sec t$ and $\tan t$.`,
    rows: [
      { name: "Standard form and vertices", earns: String.raw`$\dfrac{(y - 2)^2}{4} - \dfrac{x^2}{4} = 1$; vertices $(0, 0)$ and $(0, 4)$.` },
      { name: "Parametrization", earns: String.raw`$x(t) = 2\tan t$ and $y(t) = 2 + 2\sec t$.` },
    ],
    solution: String.raw`(i) Complete the square in $y$: $x^2 - (y^2 - 4y + 4) = -4$, so $x^2 - (y - 2)^2 = -4$. Dividing by $-4$, $$\frac{(y - 2)^2}{4} - \frac{x^2}{4} = 1$$ This hyperbola opens up and down from the center $(0, 2)$ with $a = 2$, so the vertices are $(0, 0)$ and $(0, 4)$.

(ii) Since $\sec^2 t - \tan^2 t = 1$, let $\dfrac{y - 2}{2} = \sec t$ and $\dfrac{x}{2} = \tan t$: $$x(t) = 2\tan t \qquad y(t) = 2 + 2\sec t$$` },

  // Free response 3 (no calculator, modeling a periodic context): a Ferris wheel rider
  { id: "p4ar-f3a", type: "frq", skill: "u4", topic: "4.4", calc: false, set: "p4ar-s11", part: "(a)",
    prompt: String.raw`(i) Write parametric functions $x(t)$ and $y(t)$ for the rider's position at time $t$ minutes.

(ii) Find the exact position of the rider at $t = 4$ minutes.`,
    rows: [
      { name: "Parametrization", earns: String.raw`$x(t) = 20\cos\left(\dfrac{\pi}{6}t\right)$ and $y(t) = 25 + 20\sin\left(\dfrac{\pi}{6}t\right)$.` },
      { name: "Position", earns: String.raw`$\left(-10,\ 25 + 10\sqrt{3}\right)$.` },
    ],
    solution: String.raw`(i) The wheel turns $2\pi$ radians every $12$ minutes, so the angle at time $t$ is $\dfrac{2\pi}{12}t = \dfrac{\pi}{6}t$. With center $(0, 25)$, radius $20$, and the start at the rightmost point, $$x(t) = 20\cos\left(\frac{\pi}{6}t\right) \qquad y(t) = 25 + 20\sin\left(\frac{\pi}{6}t\right)$$ (ii) At $t = 4$ the angle is $\dfrac{2\pi}{3}$: $x(4) = 20\left(-\dfrac{1}{2}\right) = -10$ and $y(4) = 25 + 20 \cdot \dfrac{\sqrt{3}}{2} = 25 + 10\sqrt{3}$.` },
  { id: "p4ar-f3b", type: "frq", skill: "u4", topic: "4.4", calc: false, set: "p4ar-s11", part: "(b)",
    prompt: String.raw`(i) For $0 < t < 3$, is the rider moving to the left or to the right, and up or down? Give a reason for your answer.

(ii) Find all times $t$, for $0 \le t \le 12$, when the rider is $35$ meters above the ground.`,
    rows: [
      { name: "Direction with reason", earns: String.raw`Left and up, because on $0 < t < 3$ the angle $\dfrac{\pi}{6}t$ is between $0$ and $\dfrac{\pi}{2}$, where cosine is decreasing and sine is increasing.` },
      { name: "Times", earns: String.raw`$t = 1$ and $t = 5$ minutes.` },
    ],
    solution: String.raw`(i) For $0 < t < 3$, the angle $\dfrac{\pi}{6}t$ increases from $0$ to $\dfrac{\pi}{2}$. On that interval cosine decreases, so $x(t)$ decreases and the rider moves left; sine increases, so $y(t)$ increases and the rider moves up.

(ii) $25 + 20\sin\left(\dfrac{\pi}{6}t\right) = 35$ gives $\sin\left(\dfrac{\pi}{6}t\right) = \dfrac{1}{2}$. For $0 \le t \le 12$ the angle runs from $0$ to $2\pi$, so $\dfrac{\pi}{6}t = \dfrac{\pi}{6}$ or $\dfrac{5\pi}{6}$, and $t = 1$ or $t = 5$ minutes.` },
  { id: "p4ar-f3c", type: "frq", skill: "u4", topic: "4.5", calc: false, set: "p4ar-s11", part: "(c)",
    prompt: String.raw`(i) Write an equation in $x$ and $y$ for the path of the rider.

(ii) Find the average rate of change of $y$ with respect to $x$ for $0 \le t \le 3$.`,
    rows: [
      { name: "Equation", earns: String.raw`$x^2 + (y - 25)^2 = 400$.` },
      { name: "Average rate of change", earns: String.raw`$\dfrac{y(3) - y(0)}{x(3) - x(0)} = \dfrac{45 - 25}{0 - 20} = -1$.` },
    ],
    solution: String.raw`(i) $\cos\left(\dfrac{\pi}{6}t\right) = \dfrac{x}{20}$ and $\sin\left(\dfrac{\pi}{6}t\right) = \dfrac{y - 25}{20}$. Since $\cos^2 + \sin^2 = 1$, $$x^2 + (y - 25)^2 = 400$$ (ii) At $t = 0$ the rider is at $(20, 25)$, and at $t = 3$ the angle is $\dfrac{\pi}{2}$, so the rider is at $(0, 45)$. $$\frac{y(3) - y(0)}{x(3) - x(0)} = \frac{45 - 25}{0 - 20} = -1$$` },
];

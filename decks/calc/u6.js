import { graph } from "../../plot.js";

// Graph of f used by c6r-m14, c6r-m16 to c6r-m19, and c6r-m22. Pieces: the lower quarter of the circle of radius 2
// centered at (2, 0), from (0, 0) down to (2, -2) (area -pi); the segment (2, -2) to (4, 2), crossing the x-axis at x = 3
// (area -1 on [2, 3], +1 on [3, 4]); the segment (4, 2) to (8, -2), crossing at x = 6 (area +2 on [4, 6], -2 on [6, 8]).
// With g(x) = integral from 0 to x of f: g(0) = 0, g(2) = -pi, g(3) = -pi - 1, g(4) = -pi, g(6) = 2 - pi, g(8) = -pi.
const quarter1 = (x) => -Math.sqrt(Math.max(0, 4 - (x - 2) ** 2));
const fGraph = graph({
  x: [0, 8], y: [-3, 3], xname: "x", yname: "y",
  fns: [{ f: quarter1, from: 0, to: 2 }],
  segments: [[2, -2, 4, 2], [4, 2, 8, -2]],
  dots: [[0, 0, "closed"], [8, -2, "closed"]],
  alt: "Graph of f for 0 to 8. From x = 0 to x = 2 it is the lower quarter of the circle of radius 2 centered at (2, 0), falling from (0, 0) to (2, -2). Then a line segment goes from (2, -2) up to (4, 2), crossing the x-axis at x = 3, and another line segment goes from (4, 2) down to (8, -2), crossing the x-axis at x = 6.",
});

// Velocity graph used by c6r-m03: (0, -2) to (3, 4), crossing the t-axis at t = 1, then (3, 4) to (5, 0).
// Signed area: -1 on [0, 1], +4 on [1, 3], +4 on [3, 5]; displacement 7, total distance 9.
const vGraph = graph({
  x: [0, 6], y: [-3, 5], xname: "t", yname: "v(t)",
  segments: [[0, -2, 3, 4], [3, 4, 5, 0]],
  dots: [[0, -2, "closed"], [5, 0, "closed"]],
  alt: "Graph of the velocity v(t) for 0 to 5 seconds, made of two line segments: a straight line from (0, -2) up to (3, 4), crossing the t-axis at t = 1, then a straight line from (3, 4) down to (5, 0).",
});

// Graph of f for the free-response question c6r-s5. Pieces: the segment (0, 3) to (5, -2), crossing the x-axis at x = 3
// (area 9/2 on [0, 3], -2 on [3, 5]); the lower right quarter of the circle of radius 2 centered at (5, 0), from (5, -2) up to
// (7, 0) (area -pi). With g(x) = integral from 3 to x of f: g(0) = -9/2, g(1) = -2, g(3) = 0, g(5) = -2, g(7) = -2 - pi.
const quarter5 = (x) => -Math.sqrt(Math.max(0, 4 - (x - 5) ** 2));
const frqGraph = graph({
  x: [0, 8], y: [-3, 4], xname: "x", yname: "y",
  fns: [{ f: quarter5, from: 5, to: 7 }],
  segments: [[0, 3, 5, -2]],
  dots: [[0, 3, "closed"], [7, 0, "closed"]],
  alt: "Graph of f for 0 to 7. A line segment goes from (0, 3) down to (5, -2), crossing the x-axis at x = 3. From x = 5 to x = 7 the graph is the lower right quarter of the circle of radius 2 centered at (5, 0), rising from (5, -2) to (7, 0).",
});

// Graph of f', used by c6r-m36 to c6r-m39: (0, -2) to (2, 2), crossing at x = 1; (2, 2) to (5, -1), crossing at x = 4;
// (5, -1) to (8, 2), crossing at x = 6. Signed areas: -1, +1, +2, -1/2, -1/2, +2 on [0,1], [1,2], [2,4], [4,5], [5,6], [6,8].
// With f(0) = 3: f(1) = 2, f(2) = 3, f(4) = 5, f(5) = 4.5, f(6) = 4, f(8) = 6.
const fpGraph = graph({
  x: [0, 8], y: [-3, 3], xname: "x", yname: "y",
  segments: [[0, -2, 2, 2], [2, 2, 5, -1], [5, -1, 8, 2]],
  dots: [[0, -2, "closed"], [8, 2, "closed"]],
  alt: "Graph of f', the derivative of f, for 0 to 8, made of three line segments: from (0, -2) up to (2, 2), crossing the x-axis at x = 1; from (2, 2) down to (5, -1), crossing the x-axis at x = 4; and from (5, -1) up to (8, 2), crossing the x-axis at x = 6.",
});

// Graph of f used by c6r-m41 and c6r-m42: (0, -2) to (2, 0) (area -2), (2, 0) to (4, 4) (area 4), then the upper quarter of
// the circle of radius 4 centered at (4, 0), from (4, 4) down to (8, 0) (area 4pi). With h(x) = integral from 2 to x of f:
// h(0) = 2, h'(0) = f(0) = -2, f'(0) = 1. The integral of f from 0 to 8 is 2 + 4pi.
const quarter10 = (x) => Math.sqrt(Math.max(0, 16 - (x - 4) ** 2));
const hGraph = graph({
  x: [0, 9], y: [-3, 5], xname: "x", yname: "y",
  fns: [{ f: quarter10, from: 4, to: 8 }],
  segments: [[0, -2, 2, 0], [2, 0, 4, 4]],
  dots: [[0, -2, "closed"], [8, 0, "closed"]],
  alt: "Graph of f for 0 to 8. A line segment goes from (0, -2) up to (2, 0), and a steeper line segment goes from (2, 0) up to (4, 4). From x = 4 to x = 8 the graph is the upper quarter of the circle of radius 4 centered at (4, 0), falling from (4, 4) to (8, 0).",
});

export const sets = {
  "c6r-s1": { name: "The graph of f", label: "Graph", intro: String.raw`The graph of the continuous function $f$ on the interval $0 \le x \le 8$ is shown below. It consists of a quarter circle and two line segments. Let $g$ be the function defined by $g(x) = \displaystyle\int_{0}^{x} f(t)\,dt$ for $0 \le x \le 8$.`,
    sources: [{ title: "", blocks: [{ svg: fGraph }] }] },
  "c6r-s2": { name: "Rate of flow into a pond", label: "Table", intro: String.raw`Water flows into a pond at a rate of $R(t)$ gallons per hour, where $R$ is a continuous function and $t$ is measured in hours. Selected values of $R(t)$ are shown in the table below.`,
    sources: [{ title: "", blocks: [{ table: { head: ["$t$ (hours)", "$0$", "$3$", "$4$", "$8$", "$10$"], rows: [["$R(t)$ (gallons per hour)", "$5$", "$9$", "$10$", "$6$", "$2$"]] } }] }] },
  "c6r-s3": { name: "A velocity graph", label: "Graph", intro: String.raw`A particle moves along the $x$-axis. The graph of its velocity $v(t)$, in meters per second, for $0 \le t \le 5$ seconds is shown below. The graph consists of two line segments.`,
    sources: [{ title: "", blocks: [{ svg: vGraph }] }] },
  "c6r-s4": { name: "Values of h", label: "Table", intro: String.raw`The function $h$ is continuous on the interval $0 \le x \le 6$. Selected values of $h(x)$ are shown in the table below.`,
    sources: [{ title: "", blocks: [{ table: { head: ["$x$", "$0$", "$1$", "$2$", "$3$", "$4$", "$5$", "$6$"], rows: [["$h(x)$", "$3$", "$5$", "$8$", "$6$", "$4$", "$7$", "$9$"]] } }] }] },
  "c6r-s5": { name: "An accumulation function from a graph", label: "Free response", intro: String.raw`The graph of the continuous function $f$ on the interval $0 \le x \le 7$ is shown below. It consists of a line segment and a quarter circle. Let $g$ be the function defined by $g(x) = \displaystyle\int_{3}^{x} f(t)\,dt$ for $0 \le x \le 7$.`,
    sources: [{ title: "", blocks: [{ svg: frqGraph }, { p: String.raw`Answer each part without a calculator. Show the work that leads to each answer.` }] }] },
  "c6r-s6": { name: "Rainwater in a storage tank", label: "Free response", intro: String.raw`Rainwater flows into a storage tank at a rate of $R(t)$ gallons per hour, where $R$ is a differentiable function and $t$ is measured in hours for $0 \le t \le 12$. Selected values of $R(t)$ are shown in the table below. Water is pumped out of the tank at a rate modeled by $P(t) = 12 + 6\sin\left(\dfrac{t}{3}\right)$ gallons per hour. At time $t = 0$, the tank holds $150$ gallons of water.`,
    sources: [{ title: "", blocks: [
      { table: { head: ["$t$ (hours)", "$0$", "$2$", "$5$", "$9$", "$12$"], rows: [["$R(t)$ (gallons per hour)", "$14$", "$20$", "$26$", "$18$", "$11$"]] } },
      { p: String.raw`A graphing calculator is allowed. Give decimal answers to three decimal places.` }] }] },
  "c6r-s7": { name: "Three antiderivatives", label: "Free response", intro: String.raw`Let $p(x) = x^2 + 4x + 8$. Note that $p(x) > 0$ for all real numbers $x$.`,
    sources: [{ title: "", blocks: [{ p: String.raw`Answer each part without a calculator. Show the work that leads to each answer.` }] }] },
  "c6r-s8": { name: "The graph of f'", label: "Graph", intro: String.raw`The function $f$ is differentiable on the interval $0 \le x \le 8$, and $f(0) = 3$. The graph of $f'$, the derivative of $f$, is shown below. It consists of three line segments.`,
    sources: [{ title: "", blocks: [{ svg: fpGraph }] }] },
  "c6r-s9": { name: "Water leaking from a tank", label: "Table", intro: String.raw`Water leaks from a tank at a rate of $r(t)$ liters per minute, where $r$ is a decreasing, differentiable function and $t$ is measured in minutes. At time $t = 0$, the tank holds $800$ liters of water. Selected values of $r(t)$ are shown in the table below.`,
    sources: [{ title: "", blocks: [{ table: { head: ["$t$ (minutes)", "$0$", "$2$", "$6$", "$7$", "$12$"], rows: [["$r(t)$ (liters per minute)", "$42$", "$36$", "$24$", "$21$", "$10$"]] } }] }] },
  "c6r-s10": { name: "The graph of f", label: "Graph", intro: String.raw`The graph of the continuous function $f$ on the interval $0 \le x \le 8$ is shown below. It consists of two line segments and a quarter circle. Let $h$ be the function defined by $h(x) = \displaystyle\int_{2}^{x} f(t)\,dt$ for $0 \le x \le 8$.`,
    sources: [{ title: "", blocks: [{ svg: hGraph }] }] },
};

export default [
  // 6.1 Exploring accumulations of change
  { id: "c6r-m01", type: "mcq", difficulty: "moderate", skill: "u6", topic: "6.1", calc: false,
    stem: String.raw`A hose is turned on at time $t = 0$. The rate at which water flows from the hose increases at a constant rate from $0$ liters per minute at $t = 0$ to $10$ liters per minute at $t = 4$ minutes. The rate then stays at $10$ liters per minute until $t = 7$ minutes.`,
    question: String.raw`How many liters of water flow from the hose from $t = 0$ to $t = 7$ minutes?`,
    choices: ["$50$", "$70$", "$35$", "$30$"],
    why: [
      String.raw`The amount is the area under the graph of the rate. The first $4$ minutes give a triangle with area $\dfrac{1}{2}(4)(10) = 20$, and the last $3$ minutes give a rectangle with area $3(10) = 30$, for a total of $50$ liters.`,
      String.raw`This uses the rate of $10$ liters per minute for all $7$ minutes. The rate is less than $10$ during the first $4$ minutes.`,
      String.raw`This multiplies the average of the first and last rates, $5$, by $7$ minutes. The rate is constant at $10$ for the last $3$ minutes, so the simple average of the endpoint rates is not the right rate.`,
      String.raw`This counts only the last $3$ minutes and leaves out the water from the first $4$ minutes, while the rate was increasing.`,
    ],
    answer: 0 },
  { id: "c6r-m02", type: "mcq", difficulty: "easy", skill: "u6", topic: "6.1", calc: false,
    stem: String.raw`A population of bacteria grows at a rate of $r(t)$ bacteria per hour, where $t$ is measured in hours.`,
    question: String.raw`Which of the following is the best interpretation of $\displaystyle\int_{0}^{6} r(t)\,dt$?`,
    choices: [
      "The change in the number of bacteria from time $t = 0$ to time $t = 6$ hours",
      "The number of bacteria at time $t = 6$ hours",
      "The rate at which the number of bacteria is growing at time $t = 6$ hours",
      "The average rate of growth of the bacteria from time $t = 0$ to time $t = 6$ hours",
    ],
    why: [
      String.raw`The definite integral of a rate of change over an interval gives the net change in the quantity over that interval, here measured in bacteria.`,
      String.raw`The integral gives only the change in the population. The number at $t = 6$ would also need the number present at $t = 0$.`,
      String.raw`The rate at $t = 6$ is $r(6)$, a single value of the integrand, not the accumulated area.`,
      String.raw`The average rate would be the integral divided by the length of the interval, $\dfrac{1}{6}\displaystyle\int_{0}^{6} r(t)\,dt$.`,
    ],
    answer: 0 },
  { id: "c6r-m03", type: "mcq", difficulty: "moderate", skill: "u6", topic: "6.1", calc: false, set: "c6r-s3",
    question: String.raw`At time $t = 5$ seconds, how far is the particle from its position at time $t = 0$?`,
    choices: ["$7$ meters", "$9$ meters", "$8$ meters", "$10$ meters"],
    why: [
      String.raw`The displacement is the signed area between the graph and the $t$-axis. The triangle below the axis from $t = 0$ to $t = 1$ has area $\dfrac{1}{2}(1)(2) = 1$, and the triangle above it from $t = 1$ to $t = 5$ has area $\dfrac{1}{2}(4)(4) = 8$. The displacement is $8 - 1 = 7$ meters.`,
      String.raw`This adds the area below the axis instead of subtracting it. $9$ meters is the total distance traveled, not the distance from the starting point.`,
      String.raw`This counts only the triangle above the axis and leaves out the first second, when the particle moves backward.`,
      String.raw`This treats the whole graph as one triangle with base $5$ and height $4$. For $0 < t < 1$ the velocity is negative, so that part is not under the triangle.`,
    ],
    answer: 0 },

  // 6.2 Approximating areas with Riemann sums
  { id: "c6r-m04", type: "mcq", difficulty: "moderate", skill: "u6", topic: "6.2", calc: false, set: "c6r-s2",
    question: String.raw`Using a left Riemann sum with the four subintervals indicated by the table, what is the approximation of $\displaystyle\int_{0}^{10} R(t)\,dt$?`,
    choices: ["$76$", "$65$", "$75$", "$30$"],
    why: [
      String.raw`The subintervals have widths $3$, $1$, $4$, and $2$. The left sum is $3(5) + 1(9) + 4(10) + 2(6) = 15 + 9 + 40 + 12 = 76$ gallons.`,
      String.raw`This is the right Riemann sum, $3(9) + 1(10) + 4(6) + 2(2)$, which uses the right endpoint of each subinterval.`,
      String.raw`This treats the four subintervals as having equal width $2.5$. The table values are not equally spaced, so each value must be multiplied by its own width.`,
      String.raw`This adds the left endpoint values $5 + 9 + 10 + 6$ without multiplying by the widths of the subintervals.`,
    ],
    answer: 0 },
  { id: "c6r-m05", type: "mcq", difficulty: "moderate", skill: "u6", topic: "6.2", calc: false, set: "c6r-s2",
    question: String.raw`Using a trapezoidal sum with the four subintervals indicated by the table, what is the approximation of $\displaystyle\int_{0}^{10} R(t)\,dt$?`,
    choices: ["$70.5$", "$71.25$", "$141$", "$76$"],
    why: [
      String.raw`$\dfrac{3(5 + 9)}{2} + \dfrac{1(9 + 10)}{2} + \dfrac{4(10 + 6)}{2} + \dfrac{2(6 + 2)}{2} = 21 + 9.5 + 32 + 8 = 70.5$ gallons.`,
      String.raw`This uses the equal-width trapezoidal rule with width $2.5$. The subintervals in the table have different widths.`,
      String.raw`This forgets the factor $\dfrac{1}{2}$ in the area of each trapezoid.`,
      String.raw`This is the left Riemann sum. A trapezoidal sum averages the two endpoint values on each subinterval.`,
    ],
    answer: 0 },
  { id: "c6r-m06", type: "mcq", difficulty: "moderate", skill: "u6", topic: "6.2", calc: false, set: "c6r-s2",
    stem: String.raw`The function $R$ is increasing on the interval $0 \le t \le 4$.`,
    question: String.raw`A left Riemann sum with the two subintervals $[0, 3]$ and $[3, 4]$ is used to approximate $\displaystyle\int_{0}^{4} R(t)\,dt$. Which of the following gives the approximation and describes it correctly?`,
    choices: [
      "$24$, an underestimate",
      "$24$, an overestimate",
      "$37$, an overestimate",
      "$37$, an underestimate",
    ],
    why: [
      String.raw`The left sum is $3R(0) + 1R(3) = 3(5) + 1(9) = 24$. Since $R$ is increasing, the left endpoint gives the smallest value of $R$ on each subinterval, so each rectangle lies below the graph and the sum is an underestimate.`,
      String.raw`The value is right, but for an increasing function the left endpoint is the lowest point on each subinterval, so the rectangles lie under the graph.`,
      String.raw`$37 = 3(9) + 1(10)$ is the right Riemann sum, not the left Riemann sum.`,
      String.raw`$37$ is the right Riemann sum, and for an increasing function the right sum is an overestimate.`,
    ],
    answer: 0 },
  { id: "c6r-m07", type: "mcq", difficulty: "moderate", skill: "u6", topic: "6.2", calc: false, set: "c6r-s4",
    question: String.raw`Using a midpoint Riemann sum with three subintervals of equal length, what is the approximation of $\displaystyle\int_{0}^{6} h(x)\,dx$?`,
    choices: ["$36$", "$33$", "$30$", "$18$"],
    why: [
      String.raw`The subintervals are $[0, 2]$, $[2, 4]$, and $[4, 6]$ with midpoints $1$, $3$, and $5$. The sum is $2\left(h(1) + h(3) + h(5)\right) = 2(5 + 6 + 7) = 36$.`,
      String.raw`This is a left Riemann sum with six subintervals of width $1$. The question asks for three subintervals and their midpoints.`,
      String.raw`This uses the left endpoints $0$, $2$, and $4$ of the three subintervals instead of their midpoints.`,
      String.raw`This adds $h(1) + h(3) + h(5)$ without multiplying by the width $2$.`,
    ],
    answer: 0 },
  { id: "c6r-m08", type: "mcq", difficulty: "moderate", skill: "u6", topic: "6.2", calc: true,
    question: String.raw`A trapezoidal sum with four subintervals of equal length is used to approximate $\displaystyle\int_{1}^{9} \sqrt{x}\,dx$. Which of the following gives the approximation and describes it correctly?`,
    choices: [
      "$17.228$, an underestimate",
      "$17.228$, an overestimate",
      "$19.228$, an overestimate",
      "$15.228$, an underestimate",
    ],
    why: [
      String.raw`With width $2$, the sum is $\dfrac{2}{2}\left(\sqrt{1} + 2\sqrt{3} + 2\sqrt{5} + 2\sqrt{7} + \sqrt{9}\right) \approx 17.228$. Since $\dfrac{d^2}{dx^2}\sqrt{x} = -\dfrac{1}{4x^{3/2}} < 0$, the graph is concave down, so each trapezoid lies below the curve and the sum is an underestimate.`,
      String.raw`The value is right, but the graph of $\sqrt{x}$ is concave down, so the chords that form the tops of the trapezoids lie below the curve.`,
      String.raw`$19.228 = 2\left(\sqrt{3} + \sqrt{5} + \sqrt{7} + \sqrt{9}\right)$ is the right Riemann sum, not the trapezoidal sum.`,
      String.raw`$15.228 = 2\left(\sqrt{1} + \sqrt{3} + \sqrt{5} + \sqrt{7}\right)$ is the left Riemann sum, not the trapezoidal sum.`,
    ],
    answer: 0 },

  // 6.3 Riemann sums, summation notation, and definite integral notation
  { id: "c6r-m09", type: "mcq", difficulty: "moderate", skill: "u6", topic: "6.3", calc: false,
    question: String.raw`$\displaystyle\lim_{n \to \infty} \sum_{k=1}^{n} \dfrac{4}{n}\left(2 + \dfrac{4k}{n}\right)^2$ is equal to which of the following?`,
    choices: [String.raw`$\displaystyle\int_{2}^{6} x^2\,dx$`, String.raw`$\displaystyle\int_{0}^{4} x^2\,dx$`, String.raw`$\displaystyle\int_{2}^{6} (2 + x)^2\,dx$`, String.raw`$4\displaystyle\int_{2}^{6} x^2\,dx$`],
    why: [
      String.raw`Here $\Delta x = \dfrac{4}{n}$ and $x_k = 2 + \dfrac{4k}{n}$, which runs from $2$ to $6$. The sum is a right Riemann sum for $f(x) = x^2$ on $[2, 6]$, so the limit is $\displaystyle\int_{2}^{6} x^2\,dx = \dfrac{208}{3}$.`,
      String.raw`This takes the limits from $\Delta x$ alone and drops the starting value $2$. It equals $\dfrac{64}{3}$, not $\dfrac{208}{3}$.`,
      String.raw`This uses the shift $2$ twice, once in the limits and again in the integrand. It equals $\dfrac{448}{3}$.`,
      String.raw`The factor $\dfrac{4}{n}$ is $\Delta x$, which becomes $dx$. Keeping the $4$ as a coefficient multiplies the value by $4$.`,
    ],
    answer: 0 },
  { id: "c6r-m10", type: "mcq", difficulty: "easy", skill: "u6", topic: "6.3", calc: false,
    question: String.raw`Which of the following is a right Riemann sum approximation of $\displaystyle\int_{2}^{7} \sqrt{x}\,dx$ with $n$ subintervals of equal length?`,
    choices: [
      String.raw`$\displaystyle\sum_{k=1}^{n} \dfrac{5}{n}\sqrt{2 + \dfrac{5k}{n}}$`,
      String.raw`$\displaystyle\sum_{k=1}^{n} \dfrac{5}{n}\sqrt{\dfrac{5k}{n}}$`,
      String.raw`$\displaystyle\sum_{k=1}^{n} \dfrac{1}{n}\sqrt{2 + \dfrac{5k}{n}}$`,
      String.raw`$\displaystyle\sum_{k=1}^{n} \dfrac{5}{n}\sqrt{2 + \dfrac{k}{n}}$`,
    ],
    why: [
      String.raw`The width of each subinterval is $\Delta x = \dfrac{7 - 2}{n} = \dfrac{5}{n}$, and the right endpoint of the $k$th subinterval is $x_k = 2 + \dfrac{5k}{n}$. The sum is $\displaystyle\sum_{k=1}^{n} f(x_k)\,\Delta x$.`,
      String.raw`These sample points start at $0$ instead of $2$, so this is a Riemann sum for $\displaystyle\int_{0}^{5} \sqrt{x}\,dx$.`,
      String.raw`The width of each subinterval is $\dfrac{5}{n}$, not $\dfrac{1}{n}$.`,
      String.raw`The sample points must step by $\Delta x = \dfrac{5}{n}$. With $\dfrac{k}{n}$ they only reach $3$, not $7$.`,
    ],
    answer: 0 },
  { id: "c6r-m11", type: "mcq", difficulty: "difficult", skill: "u6", topic: "6.3", calc: false,
    question: String.raw`$\displaystyle\lim_{n \to \infty} \sum_{k=1}^{n} \dfrac{\pi}{2n}\cos\left(\dfrac{\pi k}{2n}\right)$ is equal to`,
    choices: ["$1$", String.raw`$\dfrac{2}{\pi}$`, "$-1$", String.raw`$\dfrac{\pi}{2}$`],
    why: [
      String.raw`Here $\Delta x = \dfrac{\pi}{2n}$ and $x_k = \dfrac{\pi k}{2n}$, which runs from $0$ to $\dfrac{\pi}{2}$. The limit is $\displaystyle\int_{0}^{\pi/2} \cos x\,dx = \sin\dfrac{\pi}{2} - \sin 0 = 1$.`,
      String.raw`This is $\displaystyle\int_{0}^{1} \cos\left(\dfrac{\pi x}{2}\right)dx$. It treats $\dfrac{1}{n}$ as $\Delta x$ and drops the factor $\dfrac{\pi}{2}$ that is part of the width of each subinterval.`,
      String.raw`This evaluates $\cos x$ at the endpoints, $\cos\dfrac{\pi}{2} - \cos 0$, instead of an antiderivative of $\cos x$.`,
      String.raw`$\dfrac{\pi}{2}$ is the length of the interval $\left[0, \dfrac{\pi}{2}\right]$, the sum of the widths $\Delta x$, not the value of the sum.`,
    ],
    answer: 0 },

  // 6.4 The Fundamental Theorem of Calculus and accumulation functions
  { id: "c6r-m12", type: "mcq", difficulty: "moderate", skill: "u6", topic: "6.4", calc: false,
    stem: String.raw`Let $F(x) = \displaystyle\int_{1}^{x} \sqrt{t^3 + 1}\,dt$.`,
    question: String.raw`What is the value of $F''(2)$?`,
    choices: ["$2$", "$3$", String.raw`$\dfrac{1}{6}$`, "$4$"],
    why: [
      String.raw`By the Fundamental Theorem of Calculus, $F'(x) = \sqrt{x^3 + 1}$. Then $F''(x) = \dfrac{3x^2}{2\sqrt{x^3 + 1}}$, so $F''(2) = \dfrac{12}{2(3)} = 2$.`,
      String.raw`$3 = \sqrt{2^3 + 1}$ is $F'(2)$, the first derivative.`,
      String.raw`This differentiates $\sqrt{x^3 + 1}$ as $\dfrac{1}{2\sqrt{x^3 + 1}}$ and leaves out the chain rule factor $3x^2$.`,
      String.raw`This differentiates $\sqrt{u}$ as $\dfrac{u'}{\sqrt{u}}$ and loses the factor $\dfrac{1}{2}$.`,
    ],
    answer: 0 },
  { id: "c6r-m13", type: "mcq", difficulty: "moderate", skill: "u6", topic: "6.4", calc: false,
    question: String.raw`For $x > 0$, $\dfrac{d}{dx}\displaystyle\int_{4}^{x^2} \ln t\,dt =$`,
    choices: [String.raw`$2x\ln\left(x^2\right)$`, String.raw`$\ln\left(x^2\right)$`, String.raw`$2x\ln\left(x^2\right) - \ln 4$`, String.raw`$\dfrac{2}{x}$`],
    why: [
      String.raw`By the Fundamental Theorem of Calculus and the chain rule, the derivative is $\ln\left(x^2\right) \cdot \dfrac{d}{dx}\left(x^2\right) = 2x\ln\left(x^2\right)$.`,
      String.raw`This substitutes the upper limit into the integrand but leaves out the chain rule factor $2x$.`,
      String.raw`The lower limit $4$ is a constant, so it adds nothing to the derivative. Subtracting $\ln 4$ treats the derivative like an evaluated antiderivative.`,
      String.raw`This differentiates $\ln\left(x^2\right)$. The derivative of the integral is the integrand evaluated at the upper limit, times the chain rule factor.`,
    ],
    answer: 0 },
  { id: "c6r-m14", type: "mcq", difficulty: "moderate", skill: "u6", topic: "6.4", calc: false, set: "c6r-s1",
    question: String.raw`What is the value of $g(6)$?`,
    choices: [String.raw`$2 - \pi$`, String.raw`$4 + \pi$`, String.raw`$2 - 2\pi$`, String.raw`$3 - \pi$`],
    why: [
      String.raw`$g(6) = \displaystyle\int_{0}^{6} f(t)\,dt$. The quarter circle lies below the axis with area $\dfrac{1}{4}\pi(2)^2 = \pi$, so it contributes $-\pi$. The triangle below the axis from $2$ to $3$ contributes $-1$, and the triangle above the axis from $3$ to $6$, with base $3$ and height $2$, contributes $3$. So $g(6) = -\pi - 1 + 3 = 2 - \pi$.`,
      String.raw`This adds the areas of the regions below the $x$-axis. Those regions count as negative in the definite integral.`,
      String.raw`This uses $\dfrac{1}{2}\pi r^2 = 2\pi$, the area of a half circle. The curved piece is a quarter of the circle.`,
      String.raw`This leaves out the triangle below the axis from $x = 2$ to $x = 3$.`,
    ],
    answer: 0 },
  { id: "c6r-m15", type: "mcq", difficulty: "moderate", skill: "u6", topic: "6.4", calc: false,
    stem: String.raw`Let $h(x) = \displaystyle\int_{x}^{3} e^{t^2 - 4}\,dt$.`,
    question: String.raw`What is the value of $h'(2)$?`,
    choices: ["$-1$", "$1$", "$-4$", String.raw`$e^{5} - 1$`],
    why: [
      String.raw`$h(x) = -\displaystyle\int_{3}^{x} e^{t^2 - 4}\,dt$, so by the Fundamental Theorem of Calculus $h'(x) = -e^{x^2 - 4}$ and $h'(2) = -e^{0} = -1$.`,
      String.raw`The variable is the lower limit. Reversing the limits to put $x$ on top brings in a negative sign.`,
      String.raw`This differentiates the integrand, $\dfrac{d}{dt}e^{t^2 - 4} = 2te^{t^2 - 4}$, which is $4$ at $t = 2$. By the Fundamental Theorem the integrand itself is used, not its derivative.`,
      String.raw`This evaluates the integrand at the two limits and subtracts, $e^{3^2 - 4} - e^{2^2 - 4}$, as if the integrand were an antiderivative.`,
    ],
    answer: 0 },

  // 6.5 Interpreting the behavior of accumulation functions involving area
  { id: "c6r-m16", type: "mcq", difficulty: "moderate", skill: "u6", topic: "6.5", calc: false, set: "c6r-s1",
    question: String.raw`On which of the following intervals is $g$ increasing?`,
    choices: [
      String.raw`$3 < x < 6$`,
      String.raw`$2 < x < 4$`,
      String.raw`$0 < x < 3$ and $6 < x < 8$`,
      String.raw`$3 < x < 4$`,
    ],
    why: [
      String.raw`$g'(x) = f(x)$, and $f(x) > 0$ only on $3 < x < 6$, so $g$ is increasing there.`,
      String.raw`This is where $f$ is increasing, which is where the graph of $g$ is concave up. $g$ increases where $f$ is positive.`,
      String.raw`On these intervals $f(x) < 0$, so $g$ is decreasing there.`,
      String.raw`This is only where $f$ is positive and increasing. $f$ is still positive on $4 < x < 6$, so $g$ keeps increasing there.`,
    ],
    answer: 0 },
  { id: "c6r-m17", type: "mcq", difficulty: "moderate", skill: "u6", topic: "6.5", calc: false, set: "c6r-s1",
    question: String.raw`At what value of $x$ does $g$ have a relative minimum?`,
    choices: ["$3$", "$6$", "$2$", "$4$"],
    why: [
      String.raw`$g'(x) = f(x)$ changes from negative to positive at $x = 3$, so $g$ has a relative minimum there.`,
      String.raw`At $x = 6$, $g' = f$ changes from positive to negative, so $g$ has a relative maximum at $x = 6$.`,
      String.raw`$x = 2$ is where $f$ has its least value. $g' = f$ is negative on both sides of $x = 2$, so $g$ keeps decreasing.`,
      String.raw`$x = 4$ is where $f$ has its greatest value, which is where the graph of $g$ changes concavity. $g' = f$ is positive on both sides.`,
    ],
    answer: 0 },
  { id: "c6r-m18", type: "mcq", difficulty: "moderate", skill: "u6", topic: "6.5", calc: false, set: "c6r-s1",
    question: String.raw`On which of the following intervals is the graph of $g$ concave down?`,
    choices: [String.raw`$0 < x < 2$ and $4 < x < 8$`, String.raw`$2 < x < 4$`, String.raw`$0 < x < 3$ and $6 < x < 8$`, String.raw`$4 < x < 8$`],
    why: [
      String.raw`The graph of $g$ is concave down where $g' = f$ is decreasing. $f$ decreases along the quarter circle from $x = 0$ to $x = 2$ and along the segment from $(4, 2)$ to $(8, -2)$.`,
      String.raw`On $2 < x < 4$, $f$ is increasing, so the graph of $g$ is concave up there.`,
      String.raw`This is where $f < 0$, which is where $g$ is decreasing, not where its graph is concave down.`,
      String.raw`This misses $0 < x < 2$, where the quarter circle falls, so $f$ is decreasing there too.`,
    ],
    answer: 0 },
  { id: "c6r-m19", type: "mcq", difficulty: "difficult", skill: "u6", topic: "6.5", calc: false, set: "c6r-s1",
    question: String.raw`What is the absolute maximum value of $g$ on the interval $0 \le x \le 8$?`,
    choices: ["$0$", String.raw`$2 - \pi$`, String.raw`$-\pi$`, String.raw`$4 + \pi$`],
    why: [
      String.raw`The candidates are the endpoints and the critical points $x = 3$ and $x = 6$: $g(0) = 0$, $g(3) = -\pi - 1$, $g(6) = 2 - \pi$, and $g(8) = -\pi$. Since $\pi > 2$, every value but $g(0)$ is negative, so the absolute maximum is $g(0) = 0$.`,
      String.raw`$2 - \pi = g(6)$ is the relative maximum, but it is negative. The candidates test also checks the left endpoint, where $g(0) = 0$.`,
      String.raw`$-\pi = g(8)$, the value at the right endpoint. The candidates test also checks the left endpoint $x = 0$, where $g(0) = 0$ is greater.`,
      String.raw`This counts every region from $0$ to $6$ as positive area: $\pi + 1 + 3$. The regions below the $x$-axis count as negative in $g$.`,
    ],
    answer: 0 },
  { id: "c6r-m20", type: "mcq", difficulty: "difficult", skill: "u6", topic: "6.5", calc: true,
    stem: String.raw`Let $F(x) = \displaystyle\int_{0}^{x} \cos\left(t^2\right)dt$ for $0 < x < 3$.`,
    question: String.raw`At what value of $x$ does $F$ have a relative minimum?`,
    choices: ["$2.171$", "$1.253$", "$1.772$", "$2.802$"],
    why: [
      String.raw`$F'(x) = \cos\left(x^2\right)$ is $0$ when $x^2 = \dfrac{\pi}{2}$, $\dfrac{3\pi}{2}$, or $\dfrac{5\pi}{2}$ in this interval. $F'$ changes from negative to positive at $x = \sqrt{\dfrac{3\pi}{2}} \approx 2.171$, so $F$ has a relative minimum there.`,
      String.raw`At $x = \sqrt{\dfrac{\pi}{2}} \approx 1.253$, $F'$ changes from positive to negative, so this is a relative maximum.`,
      String.raw`At $x = \sqrt{\pi} \approx 1.772$, $F'(x) = -1$ has its least value. This is where $F$ decreases fastest, a point of inflection, not where $F$ is least.`,
      String.raw`At $x = \sqrt{\dfrac{5\pi}{2}} \approx 2.802$, $F'$ changes from positive to negative, so this is a relative maximum.`,
    ],
    answer: 0 },

  // 6.6 Applying properties of definite integrals
  { id: "c6r-m21", type: "mcq", difficulty: "difficult", skill: "u6", topic: "6.6", calc: false,
    stem: String.raw`The function $f$ is continuous, $\displaystyle\int_{0}^{5} f(x)\,dx = 7$, and $\displaystyle\int_{3}^{5} f(x)\,dx = 2$.`,
    question: String.raw`What is the value of $\displaystyle\int_{3}^{0} \left(2f(x) - 1\right)dx$?`,
    choices: ["$-7$", "$7$", "$-9$", "$-15$"],
    why: [
      String.raw`$\displaystyle\int_{0}^{3} f(x)\,dx = 7 - 2 = 5$, so $\displaystyle\int_{0}^{3} \left(2f(x) - 1\right)dx = 2(5) - 3 = 7$. Reversing the limits changes the sign: $-7$.`,
      String.raw`This is $\displaystyle\int_{0}^{3} \left(2f(x) - 1\right)dx$. Reversing the limits of integration changes the sign.`,
      String.raw`This integrates the constant $1$ as $1$ instead of $1 \cdot (3 - 0) = 3$.`,
      String.raw`This adds the two given integrals to get $9$ for $\displaystyle\int_{0}^{3} f(x)\,dx$. Since $\displaystyle\int_{0}^{3} f + \displaystyle\int_{3}^{5} f = \displaystyle\int_{0}^{5} f$, the value is $7 - 2$.`,
    ],
    answer: 0 },
  { id: "c6r-m22", type: "mcq", difficulty: "difficult", skill: "u6", topic: "6.6", calc: false, set: "c6r-s1",
    question: String.raw`What is the value of $\displaystyle\int_{0}^{8} \left(f(x) + 3\right)dx$?`,
    choices: [String.raw`$24 - \pi$`, String.raw`$3 - \pi$`, String.raw`$30 + \pi$`, String.raw`$-\pi$`],
    why: [
      String.raw`$\displaystyle\int_{0}^{8} f(x)\,dx = -\pi - 1 + 3 - 2 = -\pi$ and $\displaystyle\int_{0}^{8} 3\,dx = 3(8) = 24$, so the value is $24 - \pi$.`,
      String.raw`This integrates the constant $3$ as $3$ instead of $3$ times the length of the interval, $8$.`,
      String.raw`This adds the areas of the regions below the $x$-axis instead of subtracting them, using $\pi + 6$ for $\displaystyle\int_{0}^{8} f(x)\,dx$.`,
      String.raw`This is $\displaystyle\int_{0}^{8} f(x)\,dx$ alone. The integral of the constant $3$ is missing.`,
    ],
    answer: 0 },

  // 6.7 The Fundamental Theorem of Calculus and definite integrals
  { id: "c6r-m23", type: "mcq", difficulty: "easy", skill: "u6", topic: "6.7", calc: false,
    question: String.raw`$\displaystyle\int_{-1}^{2} \left(x^3 - 2x + 1\right)dx =$`,
    choices: [String.raw`$\dfrac{15}{4}$`, "$2$", String.raw`$-\dfrac{15}{4}$`, "$9$"],
    why: [
      String.raw`An antiderivative is $F(x) = \dfrac{x^4}{4} - x^2 + x$. Then $F(2) - F(-1) = (4 - 4 + 2) - \left(\dfrac{1}{4} - 1 - 1\right) = 2 + \dfrac{7}{4} = \dfrac{15}{4}$.`,
      String.raw`This is $F(2)$ alone. The value of the antiderivative at the lower limit, $F(-1) = -\dfrac{7}{4}$, must be subtracted.`,
      String.raw`This computes $F(-1) - F(2)$. The Fundamental Theorem gives $F(2) - F(-1)$.`,
      String.raw`This evaluates the derivative of the integrand, $3x^2 - 2$, at the limits instead of an antiderivative.`,
    ],
    answer: 0 },
  { id: "c6r-m24", type: "mcq", difficulty: "easy", skill: "u6", topic: "6.7", calc: false,
    question: String.raw`$\displaystyle\int_{\pi/3}^{\pi} 4\sin x\,dx =$`,
    choices: ["$6$", "$-6$", String.raw`$-2\sqrt{3}$`, "$4$"],
    why: [
      String.raw`$-4\cos x$ is an antiderivative, so the value is $-4\cos \pi + 4\cos\left(\dfrac{\pi}{3}\right) = 4 + 2 = 6$.`,
      String.raw`This uses $4\cos x$ as the antiderivative. The derivative of $\cos x$ is $-\sin x$, so the antiderivative of $\sin x$ is $-\cos x$.`,
      String.raw`This evaluates the integrand $4\sin x$ at the limits, $4\sin \pi - 4\sin\left(\dfrac{\pi}{3}\right) = -2\sqrt{3}$, instead of an antiderivative.`,
      String.raw`This evaluates $-4\cos x$ at the upper limit only and does not subtract its value at $\dfrac{\pi}{3}$.`,
    ],
    answer: 0 },
  { id: "c6r-m25", type: "mcq", difficulty: "moderate", skill: "u6", topic: "6.7", calc: true,
    stem: String.raw`The function $f$ is differentiable, $f(0) = 1$, and $f'(x) = e^{\sin x}$.`,
    question: String.raw`What is the value of $f(2)$?`,
    choices: ["$5.237$", "$4.237$", "$-3.237$", "$5.965$"],
    why: [
      String.raw`By the Fundamental Theorem of Calculus, $f(2) = f(0) + \displaystyle\int_{0}^{2} e^{\sin x}\,dx \approx 1 + 4.237 = 5.237$.`,
      String.raw`$4.237$ is $\displaystyle\int_{0}^{2} f'(x)\,dx = f(2) - f(0)$, the change in $f$. The starting value $f(0) = 1$ must be added.`,
      String.raw`This subtracts the integral from $f(0)$. Moving from $x = 0$ to $x = 2$ adds the accumulated change.`,
      String.raw`This computes $f(0) + 2f'(2)$, as if the rate at $x = 2$ applied for the whole interval. The rate changes, so the change in $f$ is the integral of $f'$ over $[0, 2]$.`,
    ],
    answer: 0 },

  // 6.8 Finding antiderivatives and indefinite integrals: basic rules and notation
  { id: "c6r-m26", type: "mcq", difficulty: "easy", skill: "u6", topic: "6.8", calc: false,
    question: String.raw`$\displaystyle\int \left(6x^2 - \dfrac{4}{x} + e^{x}\right)dx =$`,
    choices: [
      String.raw`$2x^3 - 4\ln|x| + e^{x} + C$`,
      String.raw`$12x + \dfrac{4}{x^2} + e^{x} + C$`,
      String.raw`$2x^3 - 4\ln|x| + \dfrac{e^{x+1}}{x+1} + C$`,
      String.raw`$6x^3 - 4\ln|x| + e^{x} + C$`,
    ],
    why: [
      String.raw`$\displaystyle\int 6x^2\,dx = 2x^3$, $\displaystyle\int \dfrac{4}{x}\,dx = 4\ln|x|$, and $\displaystyle\int e^{x}\,dx = e^{x}$, so the answer is $2x^3 - 4\ln|x| + e^{x} + C$.`,
      String.raw`This differentiates each term instead of finding an antiderivative.`,
      String.raw`This applies the power rule to $e^{x}$. The exponent is the variable, so the power rule does not apply; $e^{x}$ is its own antiderivative.`,
      String.raw`This raises the exponent of $6x^2$ but does not divide by the new exponent $3$.`,
    ],
    answer: 0 },
  { id: "c6r-m27", type: "mcq", difficulty: "easy", skill: "u6", topic: "6.8", calc: false,
    question: String.raw`$\displaystyle\int \left(\sec x\tan x + \dfrac{1}{1 + x^2}\right)dx =$`,
    choices: [
      String.raw`$\sec x + \arctan x + C$`,
      String.raw`$\tan x + \arctan x + C$`,
      String.raw`$\sec x + \ln\left(1 + x^2\right) + C$`,
      String.raw`$-\sec x + \arctan x + C$`,
    ],
    why: [
      String.raw`$\dfrac{d}{dx}\sec x = \sec x\tan x$ and $\dfrac{d}{dx}\arctan x = \dfrac{1}{1 + x^2}$, so the answer is $\sec x + \arctan x + C$.`,
      String.raw`The derivative of $\tan x$ is $\sec^2 x$, not $\sec x\tan x$.`,
      String.raw`This uses the log rule on $\dfrac{1}{1 + x^2}$, but the numerator is not the derivative of $1 + x^2$. The derivative of $\ln\left(1 + x^2\right)$ is $\dfrac{2x}{1 + x^2}$.`,
      String.raw`The derivative of $\sec x$ is $+\sec x\tan x$, so no negative sign is needed.`,
    ],
    answer: 0 },
  { id: "c6r-m28", type: "mcq", difficulty: "moderate", skill: "u6", topic: "6.8", calc: false,
    stem: String.raw`The function $f$ satisfies $f''(x) = 6x$, $f'(0) = 2$, and $f(0) = -1$.`,
    question: String.raw`What is the value of $f(1)$?`,
    choices: ["$2$", "$0$", "$3$", "$4$"],
    why: [
      String.raw`$f'(x) = 3x^2 + C_1$ with $f'(0) = 2$ gives $f'(x) = 3x^2 + 2$. Then $f(x) = x^3 + 2x + C_2$ with $f(0) = -1$ gives $f(x) = x^3 + 2x - 1$, so $f(1) = 2$.`,
      String.raw`This leaves out the constant from $f'(0) = 2$ and uses $f(x) = x^3 - 1$.`,
      String.raw`This leaves out the constant from $f(0) = -1$ and uses $f(x) = x^3 + 2x$.`,
      String.raw`This antidifferentiates only once and evaluates $3x^2 + 2x - 1$, which mixes the expressions for $f'$ and $f$.`,
    ],
    answer: 0 },

  // 6.9 Integrating using substitution
  { id: "c6r-m29", type: "mcq", difficulty: "easy", skill: "u6", topic: "6.9", calc: false,
    question: String.raw`$\displaystyle\int (2x + 1)\left(x^2 + x + 3\right)^4 dx =$`,
    choices: [
      String.raw`$\dfrac{\left(x^2 + x + 3\right)^5}{5} + C$`,
      String.raw`$\dfrac{\left(x^2 + x + 3\right)^5}{10} + C$`,
      String.raw`$\dfrac{\left(x^2 + x\right)\left(x^2 + x + 3\right)^5}{5} + C$`,
      String.raw`$\dfrac{(2x + 1)\left(x^2 + x + 3\right)^5}{5} + C$`,
    ],
    why: [
      String.raw`Let $u = x^2 + x + 3$, so $du = (2x + 1)\,dx$. Then $\displaystyle\int u^4\,du = \dfrac{u^5}{5} + C = \dfrac{\left(x^2 + x + 3\right)^5}{5} + C$.`,
      String.raw`This divides by $2$ as if $du = 2x\,dx$. Here $du = (2x + 1)\,dx$ exactly, so no constant factor is needed.`,
      String.raw`This antidifferentiates the factor $2x + 1$ and the power separately and multiplies the results. An antiderivative of a product is not the product of antiderivatives.`,
      String.raw`This keeps the factor $2x + 1$ after the substitution. It becomes part of $du = (2x + 1)\,dx$.`,
    ],
    answer: 0 },
  { id: "c6r-m30", type: "mcq", difficulty: "easy", skill: "u6", topic: "6.9", calc: false,
    question: String.raw`$\displaystyle\int_{0}^{1} \dfrac{x}{x^2 + 1}\,dx =$`,
    choices: [String.raw`$\dfrac{1}{2}\ln 2$`, String.raw`$\ln 2$`, String.raw`$\dfrac{\pi}{4}$`, String.raw`$2\ln 2$`],
    why: [
      String.raw`Let $u = x^2 + 1$, so $du = 2x\,dx$, and $u$ runs from $1$ to $2$. The integral is $\dfrac{1}{2}\displaystyle\int_{1}^{2} \dfrac{du}{u} = \dfrac{1}{2}\ln 2$.`,
      String.raw`This loses the factor $\dfrac{1}{2}$ from $du = 2x\,dx$.`,
      String.raw`$\dfrac{\pi}{4} = \displaystyle\int_{0}^{1} \dfrac{1}{x^2 + 1}\,dx$. The factor $x$ in the numerator makes this a log rule integral, not an arctangent.`,
      String.raw`This multiplies by $2$ instead of dividing by $2$ when it replaces $x\,dx$.`,
    ],
    answer: 0 },
  { id: "c6r-m31", type: "mcq", difficulty: "moderate", skill: "u6", topic: "6.9", calc: false,
    question: String.raw`$\displaystyle\int_{0}^{\pi/4} \tan x\sec^2 x\,dx =$`,
    choices: [String.raw`$\dfrac{1}{2}$`, String.raw`$\dfrac{\pi^2}{32}$`, "$1$", String.raw`$\dfrac{2\sqrt{2} - 1}{3}$`],
    why: [
      String.raw`Let $u = \tan x$, so $du = \sec^2 x\,dx$, and $u$ runs from $0$ to $1$. The integral is $\displaystyle\int_{0}^{1} u\,du = \dfrac{1}{2}$.`,
      String.raw`This evaluates $\dfrac{u^2}{2}$ at the $x$ limits $0$ and $\dfrac{\pi}{4}$. After the substitution, the limits must be changed to $u = \tan 0$ and $u = \tan\dfrac{\pi}{4}$.`,
      String.raw`This uses $\tan x$ as the antiderivative, as if the integrand were only $\sec^2 x$. The factor $\tan x$ becomes $u$, so the antiderivative is $\dfrac{u^2}{2}$.`,
      String.raw`This applies the power rule to $\sec^2 x$ as if $\tan x$ were its derivative, using $\dfrac{\sec^3 x}{3}$. The derivative of $\sec x$ is $\sec x\tan x$, not $\tan x$.`,
    ],
    answer: 0 },

  // 6.10 Integrating functions using long division and completing the square
  { id: "c6r-m32", type: "mcq", difficulty: "moderate", skill: "u6", topic: "6.10", calc: false,
    question: String.raw`$\displaystyle\int \dfrac{2x^2 + x - 4}{x - 1}\,dx =$`,
    choices: [
      String.raw`$x^2 + 3x - \ln|x - 1| + C$`,
      String.raw`$x^2 + 3x + \ln|x - 1| + C$`,
      String.raw`$x^2 + 3x + C$`,
      String.raw`$\left(2x^2 + x - 4\right)\ln|x - 1| + C$`,
    ],
    why: [
      String.raw`Long division gives $\dfrac{2x^2 + x - 4}{x - 1} = 2x + 3 - \dfrac{1}{x - 1}$, so the antiderivative is $x^2 + 3x - \ln|x - 1| + C$.`,
      String.raw`The remainder is $-1$, since $(x - 1)(2x + 3) = 2x^2 + x - 3$. This uses $+1$.`,
      String.raw`This leaves out the remainder term $-\dfrac{1}{x - 1}$.`,
      String.raw`This treats the numerator as a constant and uses the log rule. The numerator depends on $x$, so the quotient must be divided out first.`,
    ],
    answer: 0 },
  { id: "c6r-m33", type: "mcq", difficulty: "moderate", skill: "u6", topic: "6.10", calc: false,
    question: String.raw`$\displaystyle\int \dfrac{1}{x^2 - 6x + 25}\,dx =$`,
    choices: [
      String.raw`$\dfrac{1}{4}\arctan\left(\dfrac{x - 3}{4}\right) + C$`,
      String.raw`$\arctan\left(\dfrac{x - 3}{4}\right) + C$`,
      String.raw`$\dfrac{1}{16}\arctan\left(\dfrac{x - 3}{4}\right) + C$`,
      String.raw`$\ln\left(x^2 - 6x + 25\right) + C$`,
    ],
    why: [
      String.raw`Completing the square gives $x^2 - 6x + 25 = (x - 3)^2 + 16$. With $u = x - 3$, $\displaystyle\int \dfrac{du}{u^2 + 4^2} = \dfrac{1}{4}\arctan\left(\dfrac{u}{4}\right) + C$.`,
      String.raw`This leaves out the factor $\dfrac{1}{a} = \dfrac{1}{4}$ in $\displaystyle\int \dfrac{du}{u^2 + a^2} = \dfrac{1}{a}\arctan\left(\dfrac{u}{a}\right) + C$.`,
      String.raw`This uses $\dfrac{1}{a^2} = \dfrac{1}{16}$ instead of $\dfrac{1}{a} = \dfrac{1}{4}$.`,
      String.raw`This uses the log rule, but the numerator $1$ is not the derivative $2x - 6$ of the denominator.`,
    ],
    answer: 0 },

  // 6.14 Selecting techniques for antidifferentiation
  { id: "c6r-m34", type: "mcq", difficulty: "difficult", skill: "u6", topic: "6.14", calc: false,
    question: String.raw`$\displaystyle\int \dfrac{4x - 1}{x^2 + 9}\,dx =$`,
    choices: [
      String.raw`$2\ln\left(x^2 + 9\right) - \dfrac{1}{3}\arctan\left(\dfrac{x}{3}\right) + C$`,
      String.raw`$2\ln\left(x^2 + 9\right) - \arctan\left(\dfrac{x}{3}\right) + C$`,
      String.raw`$\dfrac{1}{3}\left(2x^2 - x\right)\arctan\left(\dfrac{x}{3}\right) + C$`,
      String.raw`$4\ln\left(x^2 + 9\right) - \dfrac{1}{3}\arctan\left(\dfrac{x}{3}\right) + C$`,
    ],
    why: [
      String.raw`Split the fraction: $\displaystyle\int \dfrac{4x}{x^2 + 9}\,dx - \displaystyle\int \dfrac{1}{x^2 + 9}\,dx$. The first is a substitution with $u = x^2 + 9$, $du = 2x\,dx$, giving $2\ln\left(x^2 + 9\right)$, and the second is an arctangent with $a = 3$, giving $\dfrac{1}{3}\arctan\left(\dfrac{x}{3}\right)$.`,
      String.raw`This leaves out the factor $\dfrac{1}{a} = \dfrac{1}{3}$ in $\displaystyle\int \dfrac{dx}{x^2 + a^2} = \dfrac{1}{a}\arctan\left(\dfrac{x}{a}\right) + C$.`,
      String.raw`This antidifferentiates the numerator and multiplies by an antiderivative of $\dfrac{1}{x^2 + 9}$. An antiderivative of a product is not the product of antiderivatives.`,
      String.raw`This replaces $4x\,dx$ with $4\,du$ and loses the factor $\dfrac{1}{2}$ from $du = 2x\,dx$.`,
    ],
    answer: 0 },
  { id: "c6r-m35", type: "mcq", difficulty: "easy", skill: "u6", topic: "6.14", calc: false,
    question: String.raw`$\displaystyle\int \dfrac{3}{\sqrt{1 - 9x^2}}\,dx =$`,
    choices: [
      String.raw`$\arcsin(3x) + C$`,
      String.raw`$3\arcsin(3x) + C$`,
      String.raw`$\dfrac{1}{3}\arcsin(3x) + C$`,
      String.raw`$\arcsin\left(9x^2\right) + C$`,
    ],
    why: [
      String.raw`Let $u = 3x$, so $du = 3\,dx$ and $3\,dx = du$. Then $\displaystyle\int \dfrac{du}{\sqrt{1 - u^2}} = \arcsin u + C = \arcsin(3x) + C$.`,
      String.raw`This keeps the $3$ in the numerator and does not account for $du = 3\,dx$. The derivative of $3\arcsin(3x)$ is $\dfrac{9}{\sqrt{1 - 9x^2}}$.`,
      String.raw`This divides by $9$, the coefficient of $x^2$, and drops the $3$ in the numerator. With $u = 3x$, the $3$ in the numerator is exactly $du$.`,
      String.raw`This puts $9x^2$ inside the arcsine. The form is $\dfrac{1}{\sqrt{1 - u^2}}$ with $u = 3x$, so the arcsine takes $u = 3x$, not $u^2$.`,
    ],
    answer: 0 },

  // Graph of f': c6r-m36 to c6r-m39
  { id: "c6r-m36", type: "mcq", difficulty: "moderate", skill: "u6", topic: "6.7", calc: false, set: "c6r-s8",
    question: String.raw`What is the value of $f(8)$?`,
    choices: ["$6$", "$10$", "$3$", "$5$"],
    why: [
      String.raw`By the Fundamental Theorem, $f(8) = f(0) + \displaystyle\int_{0}^{8} f'(x)\,dx$. The signed areas are $-1$ on $[0, 1]$, $+1$ on $[1, 2]$, $+2$ on $[2, 4]$, $-\dfrac{1}{2}$ on $[4, 5]$, $-\dfrac{1}{2}$ on $[5, 6]$, and $+2$ on $[6, 8]$, for a total of $3$. So $f(8) = 3 + 3 = 6$.`,
      String.raw`This adds the areas of all the regions. Where the graph of $f'$ is below the axis, $f$ decreases, so those areas are subtracted.`,
      String.raw`This is $\displaystyle\int_{0}^{8} f'(x)\,dx = 3$, which is $f(8) - f(0)$, the change in $f$. The starting value $f(0) = 3$ must be added.`,
      String.raw`This adds $f'(8) = 2$, a single value read from the graph, to $f(0)$. The change in $f$ is the area under the graph of $f'$.`,
    ],
    answer: 0 },
  { id: "c6r-m37", type: "mcq", difficulty: "difficult", skill: "u6", topic: "6.5", calc: false, set: "c6r-s8",
    question: String.raw`At what value of $x$ does $f$ attain its absolute maximum on the interval $0 \le x \le 8$?`,
    choices: ["$8$", "$4$", "$2$", "$1$"],
    why: [
      String.raw`The candidates are the endpoints and $x = 4$, where $f'$ changes from positive to negative. Adding signed areas to $f(0) = 3$: $f(4) = 3 - 1 + 1 + 2 = 5$ and $f(8) = 5 - \dfrac{1}{2} - \dfrac{1}{2} + 2 = 6$. The greatest of $3$, $5$, and $6$ is $f(8)$, so the absolute maximum is at $x = 8$.`,
      String.raw`$f$ has a relative maximum at $x = 4$, but the candidates test also checks the endpoints, and $f(8) = f(4) + 1$ is greater.`,
      String.raw`$x = 2$ is where the graph of $f'$ has a peak, so $f'$ changes from increasing to decreasing there. That is a point of inflection of $f$, not a maximum.`,
      String.raw`At $x = 1$, $f'$ changes from negative to positive, so $f$ has a relative minimum there, not a maximum.`,
    ],
    answer: 0 },
  { id: "c6r-m38", type: "mcq", difficulty: "moderate", skill: "u6", topic: "6.5", calc: false, set: "c6r-s8",
    question: String.raw`On which of the following intervals is the graph of $f$ concave down?`,
    choices: [String.raw`$2 < x < 5$`, String.raw`$0 < x < 2$ and $5 < x < 8$`, String.raw`$1 < x < 4$ and $6 < x < 8$`, String.raw`$0 < x < 1$ and $4 < x < 6$`],
    why: [
      String.raw`The graph of $f$ is concave down where $f'$ is decreasing, which is on the segment from $(2, 2)$ to $(5, -1)$.`,
      String.raw`On these intervals $f'$ is increasing, so the graph of $f$ is concave up there.`,
      String.raw`This is where $f'(x) > 0$, which is where $f$ is increasing, not where its graph is concave down.`,
      String.raw`This is where $f'(x) < 0$, which is where $f$ is decreasing, not where its graph is concave down.`,
    ],
    answer: 0 },
  { id: "c6r-m39", type: "mcq", difficulty: "difficult", skill: "u6", topic: "6.5", calc: false, set: "c6r-s8",
    stem: String.raw`Consider the following statements. I. $f$ has a relative maximum at $x = 4$. II. The graph of $f$ has a point of inflection at $x = 5$. III. $f(8) < f(4)$.`,
    question: String.raw`Which of the statements are true?`,
    choices: ["I and II only", "I and III only", "II and III only", "I, II, and III"],
    why: [
      String.raw`I is true: $f'$ changes from positive to negative at $x = 4$. II is true: $f'$ changes from decreasing to increasing at $x = 5$. III is false: $f(8) - f(4) = \displaystyle\int_{4}^{8} f'(x)\,dx = -\dfrac{1}{2} - \dfrac{1}{2} + 2 = 1 > 0$.`,
      String.raw`III is false and II is true. At $x = 5$ the graph of $f'$ changes from decreasing to increasing, so the concavity of $f$ changes there; and $f(8) - f(4) = \displaystyle\int_{4}^{8} f'(x)\,dx = 1 > 0$.`,
      String.raw`I is true, since $f'$ changes from positive to negative at $x = 4$. III is false, since the area of $2$ above the axis on $[6, 8]$ is more than the area of $1$ below it on $[4, 6]$.`,
      String.raw`III is false. From $x = 4$ to $x = 8$ the net signed area under $f'$ is $1$, so $f(8)$ is greater than $f(4)$.`,
    ],
    answer: 0 },
  // Table of a decreasing rate: c6r-m40
  { id: "c6r-m40", type: "mcq", difficulty: "difficult", skill: "u6", topic: "6.2", calc: false, set: "c6r-s9",
    question: String.raw`A right Riemann sum with the four subintervals indicated by the table is used to approximate the amount of water in the tank at time $t = 12$ minutes. Which of the following gives the approximation and tells whether it is an overestimate or an underestimate of the actual amount?`,
    choices: ["$561$ liters, an overestimate", "$561$ liters, an underestimate", "$443$ liters, an underestimate", "$239$ liters, an underestimate"],
    why: [
      String.raw`The right sum for the water that leaks out is $2(36) + 4(24) + 1(21) + 5(10) = 239$ liters, so the tank holds about $800 - 239 = 561$ liters. Since $r$ is decreasing, the right endpoint gives the least rate on each subinterval, so $239$ is less than the actual amount that leaks out, and $561$ is more than the actual amount left.`,
      String.raw`The value is right, but the comparison is backward. The right sum underestimates the water that leaks out, so subtracting it from $800$ overestimates the water left.`,
      String.raw`This uses the left Riemann sum, $2(42) + 4(36) + 1(24) + 5(21) = 357$, which gives $800 - 357 = 443$. The question asks for the right sum.`,
      String.raw`$239$ liters is the right-sum estimate of the water that leaks out. The amount in the tank is $800$ minus that.`,
    ],
    answer: 0 },
  // Graph of f with h(x) = integral from 2 to x: c6r-m41, c6r-m42
  { id: "c6r-m41", type: "mcq", difficulty: "difficult", skill: "u6", topic: "6.4", calc: false, set: "c6r-s10",
    question: String.raw`Which of the following is an equation of the line tangent to the graph of $h$ at $x = 0$?`,
    choices: [String.raw`$y = 2 - 2x$`, String.raw`$y = -2 - 2x$`, String.raw`$y = 2 + x$`, String.raw`$y = -2 + 2x$`],
    why: [
      String.raw`$h(0) = \displaystyle\int_{2}^{0} f(t)\,dt = -\displaystyle\int_{0}^{2} f(t)\,dt = -(-2) = 2$, since the triangle below the axis from $0$ to $2$ has area $2$. By the Fundamental Theorem, $h'(0) = f(0) = -2$. The tangent line is $y = 2 - 2x$.`,
      String.raw`This uses $h(0) = -2$. The integral runs from $2$ down to $0$, so reversing the limits changes the sign of the negative area to $+2$.`,
      String.raw`This uses $f'(0) = 1$, the slope of the graph of $f$, as the slope. The slope of the tangent line to $h$ is $h'(0) = f(0) = -2$.`,
      String.raw`This swaps the two values: it uses $f(0) = -2$ as the value of $h$ and $h(0) = 2$ as the slope.`,
    ],
    answer: 0 },
  { id: "c6r-m42", type: "mcq", difficulty: "difficult", skill: "u6", topic: "6.6", calc: false, set: "c6r-s10",
    question: String.raw`What is the value of $\displaystyle\int_{8}^{0} \left(2f(x) + 1\right)dx$?`,
    choices: [String.raw`$-12 - 8\pi$`, String.raw`$12 + 8\pi$`, String.raw`$-5 - 8\pi$`, String.raw`$-20 - 8\pi$`],
    why: [
      String.raw`$\displaystyle\int_{0}^{8} f(x)\,dx = -2 + 4 + \dfrac{1}{4}\pi(4)^2 = 2 + 4\pi$, so $\displaystyle\int_{0}^{8} \left(2f(x) + 1\right)dx = 2(2 + 4\pi) + 8 = 12 + 8\pi$. Reversing the limits changes the sign: $-12 - 8\pi$.`,
      String.raw`This is the integral from $0$ to $8$. The limits run from $8$ to $0$, which changes the sign.`,
      String.raw`This integrates the constant $1$ as $1$ instead of $1$ times the length of the interval, $8$: $-\left(2(2 + 4\pi) + 1\right)$.`,
      String.raw`This counts the triangle below the axis as positive area, using $6 + 4\pi$ for $\displaystyle\int_{0}^{8} f(x)\,dx$.`,
    ],
    answer: 0 },

    // Free response 1: accumulation function from a graph (no calculator)
  { id: "c6r-f1a", type: "frq", skill: "u6", topic: "6.4", calc: false, set: "c6r-s5", part: "(a)",
    prompt: String.raw`Find $g(0)$ and $g(7)$.`,
    rows: [
      { name: "g(0)", earns: String.raw`$g(0) = -\displaystyle\int_{0}^{3} f(t)\,dt = -\dfrac{9}{2}$` },
      { name: "g(7)", earns: String.raw`$g(7) = -2 - \pi$` },
    ],
    solution: String.raw`$g(0) = \displaystyle\int_{3}^{0} f(t)\,dt = -\displaystyle\int_{0}^{3} f(t)\,dt$. On $[0, 3]$ the region is a triangle above the $x$-axis with base $3$ and height $3$, so $\displaystyle\int_{0}^{3} f(t)\,dt = \dfrac{9}{2}$ and $g(0) = -\dfrac{9}{2}$.

$g(7) = \displaystyle\int_{3}^{5} f(t)\,dt + \displaystyle\int_{5}^{7} f(t)\,dt$. From $3$ to $5$ the region is a triangle below the axis with base $2$ and height $2$, so $\displaystyle\int_{3}^{5} f(t)\,dt = -2$. From $5$ to $7$ the quarter circle of radius $2$ lies below the axis, so $\displaystyle\int_{5}^{7} f(t)\,dt = -\dfrac{1}{4}\pi(2)^2 = -\pi$. So $g(7) = -2 - \pi$.` },
  { id: "c6r-f1b", type: "frq", skill: "u6", topic: "6.4", calc: false, set: "c6r-s5", part: "(b)",
    prompt: String.raw`Find $g'(1)$ and $g''(1)$.`,
    rows: [
      { name: "g'(1)", earns: String.raw`$g'(1) = f(1) = 2$, using $g'(x) = f(x)$` },
      { name: "g''(1)", earns: String.raw`$g''(1) = f'(1) = -1$` },
    ],
    solution: String.raw`By the Fundamental Theorem of Calculus, $g'(x) = f(x)$. The segment from $(0, 3)$ to $(5, -2)$ is the line $y = 3 - x$, so $g'(1) = f(1) = 2$.

$g''(x) = f'(x)$, and $f'(1)$ is the slope of that segment: $\dfrac{-2 - 3}{5 - 0} = -1$. So $g''(1) = -1$.` },
  { id: "c6r-f1c", type: "frq", skill: "u6", topic: "6.5", calc: false, set: "c6r-s5", part: "(c)",
    prompt: String.raw`On the open interval $0 < x < 7$, find the $x$-coordinate of each point at which $g$ has a relative maximum and the $x$-coordinate of each point of inflection of the graph of $g$. Justify your answers.`,
    rows: [
      { name: "Relative maximum", earns: String.raw`Relative maximum at $x = 3$ because $g'(x) = f(x)$ changes from positive to negative there.` },
      { name: "Point of inflection", earns: String.raw`Point of inflection at $x = 5$ because $g'(x) = f(x)$ changes from decreasing to increasing there.` },
    ],
    solution: String.raw`$g'(x) = f(x)$, and on $0 < x < 7$, $f(x) = 0$ only at $x = 3$. Since $f(x) > 0$ for $0 < x < 3$ and $f(x) < 0$ for $3 < x < 7$, $g'$ changes from positive to negative at $x = 3$, so $g$ has a relative maximum at $x = 3$. There is no relative minimum, since $g'$ never changes from negative to positive.

$g''(x) = f'(x)$. $f$ is decreasing on $0 < x < 5$ (the segment) and increasing on $5 < x < 7$ (the quarter circle rises). So $g'$ changes from decreasing to increasing at $x = 5$, and the graph of $g$ has a point of inflection at $x = 5$.` },
  { id: "c6r-f1d", type: "frq", skill: "u6", topic: "6.5", calc: false, set: "c6r-s5", part: "(d)",
    prompt: String.raw`Find the absolute minimum value of $g$ on the interval $0 \le x \le 7$. Justify your answer.`,
    rows: [
      { name: "Candidates", earns: String.raw`Evaluates $g$ at the critical point and the endpoints: $g(0) = -\dfrac{9}{2}$, $g(3) = 0$, $g(7) = -2 - \pi$.` },
      { name: "Answer", earns: String.raw`The absolute minimum value is $-2 - \pi$, at $x = 7$, by the Candidates Test.` },
    ],
    solution: String.raw`$g$ is differentiable on $[0, 7]$ because $f$ is continuous, so its absolute minimum occurs at a critical point or an endpoint. The only critical point is $x = 3$, where $g'(x) = f(x) = 0$.

$g(0) = -\dfrac{9}{2}$ from part (a)

$g(3) = 0$

$g(7) = -2 - \pi$ from part (a)

Since $\pi > 3$, $-2 - \pi < -5 < -\dfrac{9}{2} < 0$. The least value is $-2 - \pi$, so the absolute minimum value of $g$ on $[0, 7]$ is $-2 - \pi$, at $x = 7$.` },

  // Free response 2: rainwater in a tank (calculator)
  { id: "c6r-f2a", type: "frq", skill: "u6", topic: "6.2", calc: true, set: "c6r-s6", part: "(a)",
    prompt: String.raw`Use a trapezoidal sum with the four subintervals indicated by the table to approximate $\displaystyle\int_{0}^{12} R(t)\,dt$. Using correct units, explain the meaning of $\displaystyle\int_{0}^{12} R(t)\,dt$ in the context of the problem.`,
    rows: [
      { name: "Trapezoidal sum", earns: String.raw`$\dfrac{2(14 + 20)}{2} + \dfrac{3(20 + 26)}{2} + \dfrac{4(26 + 18)}{2} + \dfrac{3(18 + 11)}{2} = 234.5$` },
      { name: "Meaning", earns: String.raw`$\displaystyle\int_{0}^{12} R(t)\,dt$ is the total number of gallons of rainwater that flow into the tank from $t = 0$ to $t = 12$ hours.` },
    ],
    solution: String.raw`$\displaystyle\int_{0}^{12} R(t)\,dt \approx \dfrac{2(14 + 20)}{2} + \dfrac{3(20 + 26)}{2} + \dfrac{4(26 + 18)}{2} + \dfrac{3(18 + 11)}{2} = 34 + 69 + 88 + 43.5 = 234.5$ gallons.

$\displaystyle\int_{0}^{12} R(t)\,dt$ is the total amount of rainwater, in gallons, that flows into the tank during the $12$ hours from $t = 0$ to $t = 12$.` },
  { id: "c6r-f2b", type: "frq", skill: "u6", topic: "6.2", calc: true, set: "c6r-s6", part: "(b)",
    prompt: String.raw`The function $R$ is decreasing on the interval $5 \le t \le 12$. Use a left Riemann sum with the two subintervals $[5, 9]$ and $[9, 12]$ to approximate $\displaystyle\int_{5}^{12} R(t)\,dt$. Is this approximation an overestimate or an underestimate? Give a reason for your answer.`,
    rows: [
      { name: "Left sum", earns: String.raw`$4R(5) + 3R(9) = 4(26) + 3(18) = 158$` },
      { name: "Overestimate with reason", earns: String.raw`Overestimate, because $R$ is decreasing on $[5, 12]$, so on each subinterval the value at the left endpoint is the greatest value of $R$.` },
    ],
    solution: String.raw`$\displaystyle\int_{5}^{12} R(t)\,dt \approx 4R(5) + 3R(9) = 4(26) + 3(18) = 104 + 54 = 158$ gallons.

Since $R$ is decreasing on $5 \le t \le 12$, $R(5)$ is the greatest value of $R$ on $[5, 9]$ and $R(9)$ is the greatest value of $R$ on $[9, 12]$. Each rectangle lies above the graph of $R$, so the approximation is an overestimate.` },
  { id: "c6r-f2c", type: "frq", skill: "u6", topic: "6.7", calc: true, set: "c6r-s6", part: "(c)",
    prompt: String.raw`Use your answer from part (a) to approximate the amount of water in the tank at time $t = 12$ hours.`,
    rows: [
      { name: "Integral of P", earns: String.raw`$\displaystyle\int_{0}^{12} P(t)\,dt = 173.766$` },
      { name: "Answer", earns: String.raw`$150 + 234.5 - 173.766 = 210.734$ gallons` },
    ],
    solution: String.raw`The amount of water in the tank at $t = 12$ is $150 + \displaystyle\int_{0}^{12} R(t)\,dt - \displaystyle\int_{0}^{12} P(t)\,dt$.

With a calculator, $\displaystyle\int_{0}^{12} P(t)\,dt = 173.766$.

So the amount is approximately $150 + 234.5 - 173.766 = 210.734$ gallons.` },
  { id: "c6r-f2d", type: "frq", skill: "u6", topic: "6.4", calc: true, set: "c6r-s6", part: "(d)",
    prompt: String.raw`Is the amount of water in the tank increasing or decreasing at time $t = 9$ hours? Give a reason for your answer.`,
    rows: [
      { name: "Answer with reason", earns: String.raw`Increasing, because $R(9) - P(9) = 18 - 12.847 = 5.153 > 0$.` },
    ],
    solution: String.raw`Let $A(t) = 150 + \displaystyle\int_{0}^{t} \left(R(x) - P(x)\right)dx$ be the amount of water in the tank. By the Fundamental Theorem of Calculus, $A'(t) = R(t) - P(t)$.

$A'(9) = R(9) - P(9) = 18 - \left(12 + 6\sin 3\right) = 18 - 12.847 = 5.153 > 0$.

Since $A'(9) > 0$, the amount of water in the tank is increasing at $t = 9$.` },

  // Free response 3: selecting techniques (no calculator)
  { id: "c6r-f3a", type: "frq", skill: "u6", topic: "6.9", calc: false, set: "c6r-s7", part: "(a)",
    prompt: String.raw`Find $\displaystyle\int \dfrac{x + 2}{p(x)}\,dx$.`,
    rows: [
      { name: "Substitution", earns: String.raw`Uses $u = x^2 + 4x + 8$ with $du = (2x + 4)\,dx$, so the integral is $\dfrac{1}{2}\displaystyle\int \dfrac{du}{u}$.` },
      { name: "Answer", earns: String.raw`$\dfrac{1}{2}\ln\left(x^2 + 4x + 8\right) + C$` },
    ],
    solution: String.raw`Let $u = x^2 + 4x + 8$. Then $du = (2x + 4)\,dx$, so $(x + 2)\,dx = \dfrac{1}{2}du$.

$$\int \dfrac{x + 2}{x^2 + 4x + 8}\,dx = \dfrac{1}{2}\int \dfrac{du}{u} = \dfrac{1}{2}\ln|u| + C = \dfrac{1}{2}\ln\left(x^2 + 4x + 8\right) + C$$

The absolute value is not needed because $x^2 + 4x + 8 > 0$.` },
  { id: "c6r-f3b", type: "frq", skill: "u6", topic: "6.10", calc: false, set: "c6r-s7", part: "(b)",
    prompt: String.raw`Find $\displaystyle\int_{-2}^{0} \dfrac{1}{p(x)}\,dx$.`,
    rows: [
      { name: "Completing the square", earns: String.raw`Writes $p(x) = (x + 2)^2 + 4$ and finds the antiderivative $\dfrac{1}{2}\arctan\left(\dfrac{x + 2}{2}\right)$.` },
      { name: "Answer", earns: String.raw`$\dfrac{\pi}{8}$` },
    ],
    solution: String.raw`Completing the square, $x^2 + 4x + 8 = (x + 2)^2 + 4$. With $u = x + 2$,

$$\int \dfrac{dx}{(x + 2)^2 + 4} = \dfrac{1}{2}\arctan\left(\dfrac{x + 2}{2}\right) + C.$$

So $\displaystyle\int_{-2}^{0} \dfrac{dx}{p(x)} = \dfrac{1}{2}\arctan(1) - \dfrac{1}{2}\arctan(0) = \dfrac{1}{2} \cdot \dfrac{\pi}{4} = \dfrac{\pi}{8}$.` },
  { id: "c6r-f3c", type: "frq", skill: "u6", topic: "6.14", calc: false, set: "c6r-s7", part: "(c)",
    prompt: String.raw`Find $\displaystyle\int \dfrac{x^3 + 4x^2 + 8x + 1}{p(x)}\,dx$.`,
    rows: [
      { name: "Long division", earns: String.raw`$\dfrac{x^3 + 4x^2 + 8x + 1}{x^2 + 4x + 8} = x + \dfrac{1}{x^2 + 4x + 8}$` },
      { name: "Answer", earns: String.raw`$\dfrac{x^2}{2} + \dfrac{1}{2}\arctan\left(\dfrac{x + 2}{2}\right) + C$` },
    ],
    solution: String.raw`Since $x\left(x^2 + 4x + 8\right) = x^3 + 4x^2 + 8x$, long division gives

$$\dfrac{x^3 + 4x^2 + 8x + 1}{x^2 + 4x + 8} = x + \dfrac{1}{x^2 + 4x + 8}.$$

Using the antiderivative from part (b),

$$\int \dfrac{x^3 + 4x^2 + 8x + 1}{x^2 + 4x + 8}\,dx = \dfrac{x^2}{2} + \dfrac{1}{2}\arctan\left(\dfrac{x + 2}{2}\right) + C.$$` },
];

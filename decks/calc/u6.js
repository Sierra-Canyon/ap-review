import { graph } from "../../plot.js";

// Graph of f used by c6r-m14 to c6r-m19 and c6r-m22. Pieces: the upper semicircle of radius 2 centered at (-1, 0) on [-3, 1]
// (area 2pi), the segment (1, 0) to (3, -2) (area -2), the segment (3, -2) to (5, 2) (area -1 on [3, 4], +1 on [4, 5]).
// With g(x) = integral from -3 to x of f: g(-3) = 0, g(1) = 2pi, g(3) = 2pi - 2, g(4) = 2pi - 3, g(5) = 2pi - 2.
const semi1 = (x) => Math.sqrt(Math.max(0, 4 - (x + 1) ** 2));
const fGraph = graph({
  x: [-3, 5], y: [-3, 3], xname: "x", yname: "y",
  fns: [{ f: semi1, from: -3, to: 1 }],
  segments: [[1, 0, 3, -2], [3, -2, 5, 2]],
  dots: [[-3, 0, "closed"], [5, 2, "closed"]],
  alt: "Graph of f for -3 to 5. From x = -3 to x = 1 it is the upper half of a circle of radius 2 centered at (-1, 0), rising from (-3, 0) to a high point (-1, 2) and falling back to (1, 0). Then a line segment goes from (1, 0) down to (3, -2), and another line segment goes from (3, -2) up to (5, 2), crossing the x-axis at x = 4.",
});

// Velocity graph used by c6r-m03: (0, 4) to (2, 4), then (2, 4) to (6, -4), crossing the t-axis at t = 4.
const vGraph = graph({
  x: [0, 6], y: [-4, 4], step: { x: 1, y: 2 }, xname: "t", yname: "v(t)",
  segments: [[0, 4, 2, 4], [2, 4, 6, -4]],
  dots: [[0, 4, "closed"], [6, -4, "closed"]],
  alt: "Graph of the velocity v(t) for 0 to 6 seconds, made of two line segments: level at 4 from (0, 4) to (2, 4), then a straight line down from (2, 4) to (6, -4), crossing the t-axis at t = 4.",
});

// Graph of f for the free-response question c6r-s5. Pieces: the segment (-2, 3) to (1, 0) (area 9/2), the lower semicircle of
// radius 2 centered at (3, 0) on [1, 5] (area -2pi), the segment (5, 0) to (7, 2) (area 2).
// With g(x) = integral from 1 to x of f: g(-2) = -9/2, g(-1) = -2, g(1) = 0, g(3) = -pi, g(5) = -2pi, g(7) = 2 - 2pi.
const semi5 = (x) => -Math.sqrt(Math.max(0, 4 - (x - 3) ** 2));
const frqGraph = graph({
  x: [-2, 7], y: [-3, 3], xname: "x", yname: "y",
  fns: [{ f: semi5, from: 1, to: 5 }],
  segments: [[-2, 3, 1, 0], [5, 0, 7, 2]],
  dots: [[-2, 3, "closed"], [7, 2, "closed"]],
  alt: "Graph of f for -2 to 7. A line segment goes from (-2, 3) down to (1, 0). From x = 1 to x = 5 the graph is the lower half of a circle of radius 2 centered at (3, 0), dropping from (1, 0) to a low point (3, -2) and rising back to (5, 0). Then a line segment goes from (5, 0) up to (7, 2).",
});

export const sets = {
  "c6r-s1": { name: "The graph of f", label: "Graph", intro: String.raw`The graph of the continuous function $f$ on the interval $-3 \le x \le 5$ is shown below. It consists of a semicircle and two line segments. Let $g$ be the function defined by $g(x) = \displaystyle\int_{-3}^{x} f(t)\,dt$ for $-3 \le x \le 5$.`,
    sources: [{ title: "", blocks: [{ svg: fGraph }] }] },
  "c6r-s2": { name: "Rate of flow into a pond", label: "Table", intro: String.raw`Water flows into a pond at a rate of $R(t)$ gallons per hour, where $R$ is a continuous function and $t$ is measured in hours. Selected values of $R(t)$ are shown in the table below.`,
    sources: [{ title: "", blocks: [{ table: { head: ["$t$ (hours)", "$0$", "$3$", "$4$", "$8$", "$10$"], rows: [["$R(t)$ (gallons per hour)", "$5$", "$9$", "$10$", "$6$", "$2$"]] } }] }] },
  "c6r-s3": { name: "A velocity graph", label: "Graph", intro: String.raw`A particle moves along the $x$-axis. The graph of its velocity $v(t)$, in meters per second, for $0 \le t \le 6$ seconds is shown below. The graph consists of two line segments.`,
    sources: [{ title: "", blocks: [{ svg: vGraph }] }] },
  "c6r-s4": { name: "Values of h", label: "Table", intro: String.raw`The function $h$ is continuous on the interval $0 \le x \le 6$. Selected values of $h(x)$ are shown in the table below.`,
    sources: [{ title: "", blocks: [{ table: { head: ["$x$", "$0$", "$1$", "$2$", "$3$", "$4$", "$5$", "$6$"], rows: [["$h(x)$", "$3$", "$5$", "$8$", "$6$", "$4$", "$7$", "$9$"]] } }] }] },
  "c6r-s5": { name: "An accumulation function from a graph", label: "Free response", intro: String.raw`The graph of the continuous function $f$ on the interval $-2 \le x \le 7$ is shown below. It consists of a line segment, a semicircle, and another line segment. Let $g$ be the function defined by $g(x) = \displaystyle\int_{1}^{x} f(t)\,dt$ for $-2 \le x \le 7$.`,
    sources: [{ title: "", blocks: [{ svg: frqGraph }, { p: String.raw`Answer each part without a calculator. Show the work that leads to each answer.` }] }] },
  "c6r-s6": { name: "Rainwater in a storage tank", label: "Free response", intro: String.raw`Rainwater flows into a storage tank at a rate of $R(t)$ gallons per hour, where $R$ is a differentiable function and $t$ is measured in hours for $0 \le t \le 12$. Selected values of $R(t)$ are shown in the table below. Water is pumped out of the tank at a rate modeled by $P(t) = 12 + 6\sin\left(\dfrac{t}{3}\right)$ gallons per hour. At time $t = 0$, the tank holds $150$ gallons of water.`,
    sources: [{ title: "", blocks: [
      { table: { head: ["$t$ (hours)", "$0$", "$2$", "$5$", "$9$", "$12$"], rows: [["$R(t)$ (gallons per hour)", "$14$", "$20$", "$26$", "$18$", "$11$"]] } },
      { p: String.raw`A graphing calculator is allowed. Give decimal answers to three decimal places.` }] }] },
  "c6r-s7": { name: "Three antiderivatives", label: "Free response", intro: String.raw`Let $p(x) = x^2 + 4x + 8$. Note that $p(x) > 0$ for all real numbers $x$.`,
    sources: [{ title: "", blocks: [{ p: String.raw`Answer each part without a calculator. Show the work that leads to each answer.` }] }] },
};

export default [
  // 6.1 Exploring accumulations of change
  { id: "c6r-m01", type: "mcq", skill: "u6", topic: "6.1", calc: false,
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
  { id: "c6r-m02", type: "mcq", skill: "u6", topic: "6.1", calc: false,
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
  { id: "c6r-m03", type: "mcq", skill: "u6", topic: "6.1", calc: false, set: "c6r-s3",
    question: String.raw`At time $t = 6$ seconds, how far is the particle from its position at time $t = 0$?`,
    choices: ["$8$ meters", "$16$ meters", "$12$ meters", "$4$ meters"],
    why: [
      String.raw`The displacement is the signed area between the graph and the $t$-axis. The area above the axis is $2(4) + \dfrac{1}{2}(2)(4) = 12$ and the area below is $\dfrac{1}{2}(2)(4) = 4$, so the displacement is $12 - 4 = 8$ meters.`,
      String.raw`This adds the area below the axis instead of subtracting it. $16$ meters is the total distance traveled, not the distance from the starting point.`,
      String.raw`This is the displacement at $t = 4$, where the particle turns around. The particle moves back toward its start for $4 < t < 6$.`,
      String.raw`This uses the speed at $t = 6$, $\left|v(6)\right| = 4$. The distance from the start comes from the area under the velocity graph, not from one value of $v$.`,
    ],
    answer: 0 },

  // 6.2 Approximating areas with Riemann sums
  { id: "c6r-m04", type: "mcq", skill: "u6", topic: "6.2", calc: false, set: "c6r-s2",
    question: String.raw`Using a left Riemann sum with the four subintervals indicated by the table, what is the approximation of $\displaystyle\int_{0}^{10} R(t)\,dt$?`,
    choices: ["$76$", "$65$", "$75$", "$30$"],
    why: [
      String.raw`The subintervals have widths $3$, $1$, $4$, and $2$. The left sum is $3(5) + 1(9) + 4(10) + 2(6) = 15 + 9 + 40 + 12 = 76$ gallons.`,
      String.raw`This is the right Riemann sum, $3(9) + 1(10) + 4(6) + 2(2)$, which uses the right endpoint of each subinterval.`,
      String.raw`This treats the four subintervals as having equal width $2.5$. The table values are not equally spaced, so each value must be multiplied by its own width.`,
      String.raw`This adds the left endpoint values $5 + 9 + 10 + 6$ without multiplying by the widths of the subintervals.`,
    ],
    answer: 0 },
  { id: "c6r-m05", type: "mcq", skill: "u6", topic: "6.2", calc: false, set: "c6r-s2",
    question: String.raw`Using a trapezoidal sum with the four subintervals indicated by the table, what is the approximation of $\displaystyle\int_{0}^{10} R(t)\,dt$?`,
    choices: ["$70.5$", "$71.25$", "$141$", "$76$"],
    why: [
      String.raw`$\dfrac{3(5 + 9)}{2} + \dfrac{1(9 + 10)}{2} + \dfrac{4(10 + 6)}{2} + \dfrac{2(6 + 2)}{2} = 21 + 9.5 + 32 + 8 = 70.5$ gallons.`,
      String.raw`This uses the equal-width trapezoidal rule with width $2.5$. The subintervals in the table have different widths.`,
      String.raw`This forgets the factor $\dfrac{1}{2}$ in the area of each trapezoid.`,
      String.raw`This is the left Riemann sum. A trapezoidal sum averages the two endpoint values on each subinterval.`,
    ],
    answer: 0 },
  { id: "c6r-m06", type: "mcq", skill: "u6", topic: "6.2", calc: false, set: "c6r-s2",
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
  { id: "c6r-m07", type: "mcq", skill: "u6", topic: "6.2", calc: false, set: "c6r-s4",
    question: String.raw`Using a midpoint Riemann sum with three subintervals of equal length, what is the approximation of $\displaystyle\int_{0}^{6} h(x)\,dx$?`,
    choices: ["$36$", "$33$", "$30$", "$18$"],
    why: [
      String.raw`The subintervals are $[0, 2]$, $[2, 4]$, and $[4, 6]$ with midpoints $1$, $3$, and $5$. The sum is $2\left(h(1) + h(3) + h(5)\right) = 2(5 + 6 + 7) = 36$.`,
      String.raw`This is a left Riemann sum with six subintervals of width $1$. The question asks for three subintervals and their midpoints.`,
      String.raw`This uses the left endpoints $0$, $2$, and $4$ of the three subintervals instead of their midpoints.`,
      String.raw`This adds $h(1) + h(3) + h(5)$ without multiplying by the width $2$.`,
    ],
    answer: 0 },
  { id: "c6r-m08", type: "mcq", skill: "u6", topic: "6.2", calc: true,
    question: String.raw`A trapezoidal sum with four subintervals of equal length is used to approximate $\displaystyle\int_{1}^{5} \ln x\,dx$. Which of the following gives the approximation and describes it correctly?`,
    choices: [
      "$3.983$, an underestimate",
      "$3.983$, an overestimate",
      "$4.787$, an overestimate",
      "$3.178$, an underestimate",
    ],
    why: [
      String.raw`With width $1$, the sum is $\dfrac{\ln 1 + \ln 2}{2} + \dfrac{\ln 2 + \ln 3}{2} + \dfrac{\ln 3 + \ln 4}{2} + \dfrac{\ln 4 + \ln 5}{2} \approx 3.983$. Since $\dfrac{d^2}{dx^2}\ln x = -\dfrac{1}{x^2} < 0$, the graph is concave down, so each trapezoid lies below the curve and the sum is an underestimate.`,
      String.raw`The value is right, but the graph of $\ln x$ is concave down, so the chords that form the tops of the trapezoids lie below the curve.`,
      String.raw`$4.787 = \ln 2 + \ln 3 + \ln 4 + \ln 5$ is the right Riemann sum, not the trapezoidal sum.`,
      String.raw`$3.178 = \ln 1 + \ln 2 + \ln 3 + \ln 4$ is the left Riemann sum, not the trapezoidal sum.`,
    ],
    answer: 0 },

  // 6.3 Riemann sums, summation notation, and definite integral notation
  { id: "c6r-m09", type: "mcq", skill: "u6", topic: "6.3", calc: false,
    question: String.raw`$\displaystyle\lim_{n \to \infty} \sum_{k=1}^{n} \dfrac{4}{n}\left(2 + \dfrac{4k}{n}\right)^2$ is equal to which of the following?`,
    choices: [String.raw`$\displaystyle\int_{2}^{6} x^2\,dx$`, String.raw`$\displaystyle\int_{0}^{4} x^2\,dx$`, String.raw`$\displaystyle\int_{2}^{6} (2 + x)^2\,dx$`, String.raw`$4\displaystyle\int_{2}^{6} x^2\,dx$`],
    why: [
      String.raw`Here $\Delta x = \dfrac{4}{n}$ and $x_k = 2 + \dfrac{4k}{n}$, which runs from $2$ to $6$. The sum is a right Riemann sum for $f(x) = x^2$ on $[2, 6]$, so the limit is $\displaystyle\int_{2}^{6} x^2\,dx = \dfrac{208}{3}$.`,
      String.raw`This takes the limits from $\Delta x$ alone and drops the starting value $2$. It equals $\dfrac{64}{3}$, not $\dfrac{208}{3}$.`,
      String.raw`This uses the shift $2$ twice, once in the limits and again in the integrand. It equals $\dfrac{448}{3}$.`,
      String.raw`The factor $\dfrac{4}{n}$ is $\Delta x$, which becomes $dx$. Keeping the $4$ as a coefficient multiplies the value by $4$.`,
    ],
    answer: 0 },
  { id: "c6r-m10", type: "mcq", skill: "u6", topic: "6.3", calc: false,
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
  { id: "c6r-m11", type: "mcq", skill: "u6", topic: "6.3", calc: false,
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
  { id: "c6r-m12", type: "mcq", skill: "u6", topic: "6.4", calc: false,
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
  { id: "c6r-m13", type: "mcq", skill: "u6", topic: "6.4", calc: false,
    question: String.raw`For $x > 0$, $\dfrac{d}{dx}\displaystyle\int_{4}^{x^2} \ln t\,dt =$`,
    choices: [String.raw`$2x\ln\left(x^2\right)$`, String.raw`$\ln\left(x^2\right)$`, String.raw`$2x\ln\left(x^2\right) - \ln 4$`, String.raw`$\dfrac{2}{x}$`],
    why: [
      String.raw`By the Fundamental Theorem of Calculus and the chain rule, the derivative is $\ln\left(x^2\right) \cdot \dfrac{d}{dx}\left(x^2\right) = 2x\ln\left(x^2\right)$.`,
      String.raw`This substitutes the upper limit into the integrand but leaves out the chain rule factor $2x$.`,
      String.raw`The lower limit $4$ is a constant, so it adds nothing to the derivative. Subtracting $\ln 4$ treats the derivative like an evaluated antiderivative.`,
      String.raw`This differentiates $\ln\left(x^2\right)$. The derivative of the integral is the integrand evaluated at the upper limit, times the chain rule factor.`,
    ],
    answer: 0 },
  { id: "c6r-m14", type: "mcq", skill: "u6", topic: "6.4", calc: false, set: "c6r-s1",
    question: String.raw`What is the value of $g(4)$?`,
    choices: [String.raw`$2\pi - 3$`, String.raw`$2\pi + 3$`, String.raw`$4\pi - 3$`, String.raw`$2\pi - 2$`],
    why: [
      String.raw`$g(4) = \displaystyle\int_{-3}^{4} f(t)\,dt$. The semicircle gives $\dfrac{1}{2}\pi(2)^2 = 2\pi$. The region below the axis from $1$ to $4$ is a triangle with base $3$ and height $2$, area $3$, so $g(4) = 2\pi - 3$.`,
      String.raw`This adds the area of the region below the $x$-axis. That region counts as negative in the definite integral.`,
      String.raw`This uses $\pi r^2 = 4\pi$, the area of the whole circle, instead of the semicircle.`,
      String.raw`This is $g(3)$. It leaves out the part of the region below the axis from $x = 3$ to $x = 4$.`,
    ],
    answer: 0 },
  { id: "c6r-m15", type: "mcq", skill: "u6", topic: "6.4", calc: false,
    stem: String.raw`Let $h(x) = \displaystyle\int_{x}^{5} \sqrt{t + 4}\,dt$.`,
    question: String.raw`What is the value of $h'(0)$?`,
    choices: ["$-2$", "$2$", "$1$", "$-3$"],
    why: [
      String.raw`$h(x) = -\displaystyle\int_{5}^{x} \sqrt{t + 4}\,dt$, so by the Fundamental Theorem of Calculus $h'(x) = -\sqrt{x + 4}$ and $h'(0) = -2$.`,
      String.raw`The variable is the lower limit. Reversing the limits to put $x$ on top introduces a negative sign.`,
      String.raw`This computes $\sqrt{5 + 4} - \sqrt{0 + 4} = 3 - 2$, treating the integrand like an antiderivative.`,
      String.raw`This evaluates the integrand at the constant limit $5$. The derivative uses the integrand at the variable limit $x$.`,
    ],
    answer: 0 },

  // 6.5 Interpreting the behavior of accumulation functions involving area
  { id: "c6r-m16", type: "mcq", skill: "u6", topic: "6.5", calc: false, set: "c6r-s1",
    question: String.raw`On which of the following intervals is $g$ increasing?`,
    choices: [
      String.raw`$-3 < x < 1$ and $4 < x < 5$ only`,
      String.raw`$-3 < x < -1$ and $3 < x < 5$ only`,
      String.raw`$1 < x < 4$ only`,
      String.raw`$-3 < x < 1$ only`,
    ],
    why: [
      String.raw`$g'(x) = f(x)$, and $f(x) > 0$ on $-3 < x < 1$ and on $4 < x < 5$, so $g$ is increasing there.`,
      String.raw`These are the intervals where $f$ is increasing, which is where $g$ is concave up. $g$ increases where $f$ is positive.`,
      String.raw`On $1 < x < 4$, $f(x) < 0$, so $g$ is decreasing there.`,
      String.raw`This misses $4 < x < 5$, where the graph of $f$ is above the $x$-axis again.`,
    ],
    answer: 0 },
  { id: "c6r-m17", type: "mcq", skill: "u6", topic: "6.5", calc: false, set: "c6r-s1",
    question: String.raw`At what value of $x$ does $g$ have a relative minimum?`,
    choices: ["$4$", "$1$", "$3$", "$-1$"],
    why: [
      String.raw`$g'(x) = f(x)$ changes from negative to positive at $x = 4$, so $g$ has a relative minimum there.`,
      String.raw`At $x = 1$, $g' = f$ changes from positive to negative, so $g$ has a relative maximum at $x = 1$.`,
      String.raw`$x = 3$ is where $f$ has its minimum. $g' = f$ is still negative on both sides of $x = 3$, so $g$ keeps decreasing.`,
      String.raw`$x = -1$ is where $f$ has its maximum, which is where the graph of $g$ changes concavity. $g' = f$ is positive on both sides.`,
    ],
    answer: 0 },
  { id: "c6r-m18", type: "mcq", skill: "u6", topic: "6.5", calc: false, set: "c6r-s1",
    question: String.raw`On which interval is the graph of $g$ concave down?`,
    choices: [String.raw`$-1 < x < 3$`, String.raw`$1 < x < 4$`, String.raw`$-3 < x < -1$ and $3 < x < 5$`, String.raw`$-1 < x < 1$ only`],
    why: [
      String.raw`The graph of $g$ is concave down where $g' = f$ is decreasing. $f$ decreases along the right half of the semicircle and along the segment from $(1, 0)$ to $(3, -2)$, so on $-1 < x < 3$.`,
      String.raw`This is where $f < 0$, which is where $g$ is decreasing, not where it is concave down.`,
      String.raw`These are the intervals where $f$ is increasing, so the graph of $g$ is concave up there.`,
      String.raw`This stops at $x = 1$, but $f$ keeps decreasing along the segment from $(1, 0)$ to $(3, -2)$.`,
    ],
    answer: 0 },
  { id: "c6r-m19", type: "mcq", skill: "u6", topic: "6.5", calc: false, set: "c6r-s1",
    question: String.raw`What is the absolute maximum value of $g$ on the interval $-3 \le x \le 5$?`,
    choices: [String.raw`$2\pi$`, String.raw`$2\pi - 2$`, "$2$", String.raw`$4\pi$`],
    why: [
      String.raw`The candidates are the endpoints and the critical points $x = 1$ and $x = 4$: $g(-3) = 0$, $g(1) = 2\pi$, $g(4) = 2\pi - 3$, and $g(5) = 2\pi - 3 + 1 = 2\pi - 2$. The largest is $g(1) = 2\pi$.`,
      String.raw`$2\pi - 2 = g(5)$, the value at the right endpoint. It is less than $g(1)$ because the area below the axis from $1$ to $4$ is larger than the area above it from $4$ to $5$.`,
      String.raw`$2$ is the maximum value of $f$, at $x = -1$. The question asks about $g$.`,
      String.raw`This uses $\pi r^2 = 4\pi$ for the semicircle. Its area is $\dfrac{1}{2}\pi(2)^2 = 2\pi$.`,
    ],
    answer: 0 },
  { id: "c6r-m20", type: "mcq", skill: "u6", topic: "6.5", calc: true,
    stem: String.raw`Let $F(x) = \displaystyle\int_{0}^{x} \sin\left(t^2\right)dt$ for $0 < x < 3$.`,
    question: String.raw`At what value of $x$ does $F$ have a relative minimum?`,
    choices: ["$2.507$", "$1.772$", "$2.171$", "$1.253$"],
    why: [
      String.raw`$F'(x) = \sin\left(x^2\right)$ is $0$ when $x^2 = \pi$ or $x^2 = 2\pi$ in this interval. $F'$ changes from negative to positive at $x = \sqrt{2\pi} \approx 2.507$, so $F$ has a relative minimum there.`,
      String.raw`At $x = \sqrt{\pi} \approx 1.772$, $F'$ changes from positive to negative, so this is a relative maximum.`,
      String.raw`At $x = \sqrt{\dfrac{3\pi}{2}} \approx 2.171$, $F'(x) = -1$ has its least value. This is where $F$ decreases fastest, not where $F$ is least.`,
      String.raw`At $x = \sqrt{\dfrac{\pi}{2}} \approx 1.253$, $F'$ has its greatest value. This is a point of inflection of $F$, not an extremum.`,
    ],
    answer: 0 },

  // 6.6 Applying properties of definite integrals
  { id: "c6r-m21", type: "mcq", skill: "u6", topic: "6.6", calc: false,
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
  { id: "c6r-m22", type: "mcq", skill: "u6", topic: "6.6", calc: false, set: "c6r-s1",
    question: String.raw`What is the value of $\displaystyle\int_{-3}^{5} \left(f(x) + 3\right)dx$?`,
    choices: [String.raw`$2\pi + 22$`, String.raw`$2\pi + 1$`, String.raw`$2\pi + 28$`, String.raw`$2\pi - 2$`],
    why: [
      String.raw`$\displaystyle\int_{-3}^{5} f(x)\,dx = 2\pi - 2 - 1 + 1 = 2\pi - 2$ and $\displaystyle\int_{-3}^{5} 3\,dx = 3(8) = 24$, so the value is $2\pi + 22$.`,
      String.raw`This integrates the constant $3$ as $3$ instead of $3$ times the length of the interval, $8$.`,
      String.raw`This adds the areas of the regions below the $x$-axis instead of subtracting them, using $2\pi + 4$ for $\displaystyle\int_{-3}^{5} f(x)\,dx$.`,
      String.raw`This is $\displaystyle\int_{-3}^{5} f(x)\,dx$ alone. The integral of the constant $3$ is missing.`,
    ],
    answer: 0 },

  // 6.7 The Fundamental Theorem of Calculus and definite integrals
  { id: "c6r-m23", type: "mcq", skill: "u6", topic: "6.7", calc: false,
    question: String.raw`$\displaystyle\int_{-1}^{2} \left(x^3 - 2x + 1\right)dx =$`,
    choices: [String.raw`$\dfrac{15}{4}$`, "$2$", String.raw`$-\dfrac{15}{4}$`, "$9$"],
    why: [
      String.raw`An antiderivative is $F(x) = \dfrac{x^4}{4} - x^2 + x$. Then $F(2) - F(-1) = (4 - 4 + 2) - \left(\dfrac{1}{4} - 1 - 1\right) = 2 + \dfrac{7}{4} = \dfrac{15}{4}$.`,
      String.raw`This is $F(2)$ alone. The value of the antiderivative at the lower limit, $F(-1) = -\dfrac{7}{4}$, must be subtracted.`,
      String.raw`This computes $F(-1) - F(2)$. The Fundamental Theorem gives $F(2) - F(-1)$.`,
      String.raw`This evaluates the derivative of the integrand, $3x^2 - 2$, at the limits instead of an antiderivative.`,
    ],
    answer: 0 },
  { id: "c6r-m24", type: "mcq", skill: "u6", topic: "6.7", calc: false,
    question: String.raw`$\displaystyle\int_{\pi/6}^{\pi/2} 4\cos x\,dx =$`,
    choices: ["$2$", "$-2$", String.raw`$2\sqrt{3}$`, "$4$"],
    why: [
      String.raw`$4\sin x$ is an antiderivative, so the value is $4\sin\left(\dfrac{\pi}{2}\right) - 4\sin\left(\dfrac{\pi}{6}\right) = 4 - 2 = 2$.`,
      String.raw`This uses $-4\sin x$ as the antiderivative. The derivative of $\sin x$ is $\cos x$, with no negative sign.`,
      String.raw`This uses $-4\cos x$, the antiderivative of $4\sin x$: $-4\cos\left(\dfrac{\pi}{2}\right) + 4\cos\left(\dfrac{\pi}{6}\right) = 2\sqrt{3}$.`,
      String.raw`This evaluates $4\sin x$ at the upper limit only and does not subtract its value at $\dfrac{\pi}{6}$.`,
    ],
    answer: 0 },
  { id: "c6r-m25", type: "mcq", skill: "u6", topic: "6.7", calc: true,
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
  { id: "c6r-m26", type: "mcq", skill: "u6", topic: "6.8", calc: false,
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
  { id: "c6r-m27", type: "mcq", skill: "u6", topic: "6.8", calc: false,
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
  { id: "c6r-m28", type: "mcq", skill: "u6", topic: "6.8", calc: false,
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
  { id: "c6r-m29", type: "mcq", skill: "u6", topic: "6.9", calc: false,
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
  { id: "c6r-m30", type: "mcq", skill: "u6", topic: "6.9", calc: false,
    question: String.raw`$\displaystyle\int_{0}^{1} \dfrac{x}{x^2 + 1}\,dx =$`,
    choices: [String.raw`$\dfrac{1}{2}\ln 2$`, String.raw`$\ln 2$`, String.raw`$\dfrac{\pi}{4}$`, String.raw`$2\ln 2$`],
    why: [
      String.raw`Let $u = x^2 + 1$, so $du = 2x\,dx$, and $u$ runs from $1$ to $2$. The integral is $\dfrac{1}{2}\displaystyle\int_{1}^{2} \dfrac{du}{u} = \dfrac{1}{2}\ln 2$.`,
      String.raw`This loses the factor $\dfrac{1}{2}$ from $du = 2x\,dx$.`,
      String.raw`$\dfrac{\pi}{4} = \displaystyle\int_{0}^{1} \dfrac{1}{x^2 + 1}\,dx$. The factor $x$ in the numerator makes this a log rule integral, not an arctangent.`,
      String.raw`This multiplies by $2$ instead of dividing by $2$ when it replaces $x\,dx$.`,
    ],
    answer: 0 },
  { id: "c6r-m31", type: "mcq", skill: "u6", topic: "6.9", calc: false,
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
  { id: "c6r-m32", type: "mcq", skill: "u6", topic: "6.10", calc: false,
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
  { id: "c6r-m33", type: "mcq", skill: "u6", topic: "6.10", calc: false,
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
  { id: "c6r-m34", type: "mcq", skill: "u6", topic: "6.14", calc: false,
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
  { id: "c6r-m35", type: "mcq", skill: "u6", topic: "6.14", calc: false,
    question: String.raw`$\displaystyle\int \dfrac{6}{\sqrt{1 - 9x^2}}\,dx =$`,
    choices: [
      String.raw`$2\arcsin(3x) + C$`,
      String.raw`$6\arcsin(3x) + C$`,
      String.raw`$\dfrac{2}{3}\arcsin(3x) + C$`,
      String.raw`$2\arctan(3x) + C$`,
    ],
    why: [
      String.raw`Let $u = 3x$, so $du = 3\,dx$ and $6\,dx = 2\,du$. Then $\displaystyle\int \dfrac{2\,du}{\sqrt{1 - u^2}} = 2\arcsin u + C = 2\arcsin(3x) + C$.`,
      String.raw`This leaves out the factor $\dfrac{1}{3}$ from $du = 3\,dx$.`,
      String.raw`This divides by $9$, the coefficient of $x^2$, instead of by $3$, the coefficient of $x$ in $u = 3x$.`,
      String.raw`The arctangent form is for $\dfrac{1}{1 + u^2}$. A square root of $1 - u^2$ in the denominator gives the arcsine.`,
    ],
    answer: 0 },

  // Free response 1: accumulation function from a graph (no calculator)
  { id: "c6r-f1a", type: "frq", skill: "u6", topic: "6.4", calc: false, set: "c6r-s5", part: "(a)",
    prompt: String.raw`Find $g(-2)$ and $g(7)$.`,
    rows: [
      { name: "g(-2)", earns: String.raw`$g(-2) = -\displaystyle\int_{-2}^{1} f(t)\,dt = -\dfrac{9}{2}$` },
      { name: "g(7)", earns: String.raw`$g(7) = -2\pi + 2$` },
    ],
    solution: String.raw`$g(-2) = \displaystyle\int_{1}^{-2} f(t)\,dt = -\displaystyle\int_{-2}^{1} f(t)\,dt$. On $[-2, 1]$ the region is a triangle above the $x$-axis with base $3$ and height $3$, so $\displaystyle\int_{-2}^{1} f(t)\,dt = \dfrac{9}{2}$ and $g(-2) = -\dfrac{9}{2}$.

$g(7) = \displaystyle\int_{1}^{5} f(t)\,dt + \displaystyle\int_{5}^{7} f(t)\,dt$. The semicircle of radius $2$ lies below the axis, so $\displaystyle\int_{1}^{5} f(t)\,dt = -\dfrac{1}{2}\pi(2)^2 = -2\pi$. From $5$ to $7$ the region is a triangle above the axis with base $2$ and height $2$, area $2$. So $g(7) = -2\pi + 2$.` },
  { id: "c6r-f1b", type: "frq", skill: "u6", topic: "6.4", calc: false, set: "c6r-s5", part: "(b)",
    prompt: String.raw`Find $g'(-1)$ and $g''(-1)$.`,
    rows: [
      { name: "g'(-1)", earns: String.raw`$g'(-1) = f(-1) = 2$, using $g'(x) = f(x)$` },
      { name: "g''(-1)", earns: String.raw`$g''(-1) = f'(-1) = -1$` },
    ],
    solution: String.raw`By the Fundamental Theorem of Calculus, $g'(x) = f(x)$. The segment from $(-2, 3)$ to $(1, 0)$ is the line $y = 1 - x$, so $g'(-1) = f(-1) = 2$.

$g''(x) = f'(x)$, and $f'(-1)$ is the slope of that segment: $\dfrac{0 - 3}{1 - (-2)} = -1$. So $g''(-1) = -1$.` },
  { id: "c6r-f1c", type: "frq", skill: "u6", topic: "6.5", calc: false, set: "c6r-s5", part: "(c)",
    prompt: String.raw`Find the $x$-coordinate of each point at which $g$ has a relative minimum or a relative maximum on the interval $-2 < x < 7$. Classify each one and justify your answer.`,
    rows: [
      { name: "Relative maximum", earns: String.raw`Relative maximum at $x = 1$ because $g'(x) = f(x)$ changes from positive to negative there.` },
      { name: "Relative minimum", earns: String.raw`Relative minimum at $x = 5$ because $g'(x) = f(x)$ changes from negative to positive there.` },
    ],
    solution: String.raw`$g'(x) = f(x)$, so the critical points of $g$ on $-2 < x < 7$ are where $f(x) = 0$: $x = 1$ and $x = 5$.

$f(x) > 0$ for $-2 < x < 1$ and $f(x) < 0$ for $1 < x < 5$, so $g'$ changes from positive to negative at $x = 1$ and $g$ has a relative maximum there.

$f(x) < 0$ for $1 < x < 5$ and $f(x) > 0$ for $5 < x < 7$, so $g'$ changes from negative to positive at $x = 5$ and $g$ has a relative minimum there.` },
  { id: "c6r-f1d", type: "frq", skill: "u6", topic: "6.5", calc: false, set: "c6r-s5", part: "(d)",
    prompt: String.raw`Find the absolute minimum value of $g$ on the interval $-2 \le x \le 7$. Justify your answer.`,
    rows: [
      { name: "Candidates", earns: String.raw`Evaluates $g$ at the critical points and endpoints: $g(-2) = -\dfrac{9}{2}$, $g(1) = 0$, $g(5) = -2\pi$, $g(7) = 2 - 2\pi$.` },
      { name: "Answer", earns: String.raw`The absolute minimum value is $-2\pi$, at $x = 5$, by the Candidates Test.` },
    ],
    solution: String.raw`$g$ is differentiable on $[-2, 7]$ because $f$ is continuous, so its absolute minimum occurs at a critical point or an endpoint.

$g(-2) = -\dfrac{9}{2}$ from part (a)

$g(1) = 0$

$g(5) = -\dfrac{1}{2}\pi(2)^2 = -2\pi$

$g(7) = 2 - 2\pi$ from part (a)

Since $\pi > 3$, $-2\pi < -6 < -\dfrac{9}{2}$, and $-2\pi < 2 - 2\pi < 0$. The least value is $-2\pi$, so the absolute minimum value of $g$ on $[-2, 7]$ is $-2\pi$, at $x = 5$.` },

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

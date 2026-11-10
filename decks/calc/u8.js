import { graph } from "../../plot.js";

// Graph of f for c8r-m02: straight pieces through (0, 4), (2, 0), (4, -2), (6, -2).
const fGraph = graph({
  x: [0, 6], y: [-3, 5], xname: "x", yname: "y",
  segments: [[0, 4, 2, 0], [2, 0, 4, -2], [4, -2, 6, -2]],
  dots: [[0, 4, "closed"], [6, -2, "closed"]],
  alt: "Graph of f for 0 to 6, made of three line segments: from (0, 4) down to (2, 0), from (2, 0) down to (4, -2), then level at -2 from (4, -2) to (6, -2).",
});

// Velocity graph for c8r-m05: straight pieces through (0, 0), (2, 4), (4, 4), (6, 0), (8, -2).
const vGraph = graph({
  x: [0, 8], y: [-3, 5], xname: "t", yname: "v(t)",
  segments: [[0, 0, 2, 4], [2, 4, 4, 4], [4, 4, 6, 0], [6, 0, 8, -2]],
  dots: [[0, 0, "closed"], [8, -2, "closed"]],
  alt: "Graph of the velocity v(t) for 0 to 8 seconds, made of four line segments: from (0, 0) up to (2, 4), level at 4 from (2, 4) to (4, 4), down from (4, 4) to (6, 0), then down from (6, 0) to (8, -2). The graph crosses the t-axis at t = 6.",
});

// c8r-m11: y = 3/x and y = 4 - x meet at (1, 3) and (3, 1).
const m11Graph = graph({
  x: [0, 5], y: [0, 5], xname: "x", yname: "y",
  fns: [{ f: (x) => 3 / x, from: 0.6, to: 5, label: "y = 3/x", labelAt: 4.2 }, { f: (x) => 4 - x, from: 0, to: 4, label: "y = 4 − x", labelAt: 0.4 }],
  dots: [[1, 3, "closed"], [3, 1, "closed"]],
  alt: "The curve y = 3/x and the line y = 4 - x in the first quadrant. They intersect at (1, 3) and (3, 1), and the line is above the curve between those points.",
});

// c8r-m14 and c8r-m37: y = x^2 (x >= 0), y = 6 - x, and the x-axis bound R, with corners (0, 0), (2, 4), (6, 0).
const m14Graph = graph({
  x: [-1, 7], y: [-1, 6], xname: "x", yname: "y",
  fns: [{ f: (x) => x * x, from: 0, to: 2.45, label: "y = x²", labelAt: 2.3 }, { f: (x) => 6 - x, from: 0.5, to: 6.5, label: "y = 6 − x", labelAt: 4.6 }],
  dots: [[0, 0, "closed"], [2, 4, "closed"], [6, 0, "closed"]],
  labels: [[2.4, 1.3, "R"]],
  alt: "The region R bounded by the curve y = x^2 for x at least 0, the line y = 6 - x, and the x-axis. The curve and the line meet at (2, 4). R has corners at (0, 0), (2, 4), and (6, 0): its left side is the curve, its right side is the line, and its bottom is the x-axis from x = 0 to x = 6.",
});

// c8r-m38: f is level at 2 from (0, 2) to (2, 2), then falls in a straight line to (4, 0).
const discGraph = graph({
  x: [-0.5, 5], y: [-1, 3], xname: "x", yname: "y",
  segments: [[0, 2, 2, 2], [2, 2, 4, 0]],
  dots: [[0, 2, "closed"], [2, 2, "closed"], [4, 0, "closed"]],
  labels: [[1.6, 0.9, "R"], [2.9, 1.7, "f"]],
  alt: "Graph of f for 0 to 4, made of two line segments: level at height 2 from (0, 2) to (2, 2), then a straight line down from (2, 2) to (4, 0). The region R lies between the graph of f and the x-axis, to the right of the y-axis.",
});

// c8r-m39: f(x) = -(x + 1)(x - 3), vertex (1, 4); g is the line through (-1, 0) and (2, 3).
const fgGraph = graph({
  x: [-2, 4], y: [-2, 6], xname: "x", yname: "y",
  fns: [{ f: (x) => -(x + 1) * (x - 3), from: -1.6, to: 3.6 }, { f: (x) => x + 1, from: -2, to: 4, label: "g", labelAt: 3.3 }],
  dots: [[-1, 0, "closed"], [1, 4, "closed"], [3, 0, "closed"], [2, 3, "closed"]],
  labels: [[3.0, 1.4, "f"]],
  alt: "The graph of a quadratic function f, a parabola opening down with x-intercepts at (-1, 0) and (3, 0) and vertex at (1, 4), and the graph of a linear function g through (-1, 0) and (2, 3). The marked points are (-1, 0), (1, 4), (3, 0), and (2, 3). The two graphs cross at (-1, 0) and (2, 3), with f above g between them.",
});

// c8r-m40: R is bounded by y = 1 + sqrt(x), y = 1, and x = 4; the dashed line l is y = 4.
const washerGraph = graph({
  x: [-1, 5], y: [-1, 5], xname: "x", yname: "y",
  fns: [{ f: (x) => 1 + Math.sqrt(x), from: 0, to: 4 }],
  segments: [[0, 1, 4, 1], [4, 1, 4, 3]],
  hlines: [{ y: 4 }],
  labels: [[2.7, 1.6, "R"], [-0.7, 4.3, "ℓ"], [0.3, 3.3, "y = 1 + √x"]],
  alt: "The region R bounded by the curve y = 1 + square root of x, the horizontal line y = 1, and the vertical line x = 4. R has corners at (0, 1), (4, 1), and (4, 3). A dashed horizontal line labeled l is drawn at y = 4, above the region.",
});

// c8r-s2: f(x) = 4/(1 + x^2) and g(x) = x^2 meet at x = ±1.250.
const s2Graph = graph({
  x: [-2, 2], y: [-0.5, 4.5], step: { x: 0.5, y: 1 }, labelEvery: 2, xname: "x", yname: "y",
  fns: [{ f: (x) => 4 / (1 + x * x), label: "f", labelAt: -0.6 }, { f: (x) => x * x, label: "g", labelAt: 1.6 }],
  labels: [[-0.1, 2.2, "R"]],
  alt: "The graphs of f(x) = 4/(1 + x^2), a hump with its peak at (0, 4), and g(x) = x^2. They intersect at two points, one with x between -1.5 and -1 and one with x between 1 and 1.5, both at a height between 1 and 2. The region R lies between them, with the graph of f above the graph of g, and the whole region is on or above the x-axis.",
});

// c8r-m17: y = x^3 - 4x + 1 and y = e^(-x) meet at x = -1.365, 0, and 1.884.
const m17Graph = graph({
  x: [-2.5, 2.5], y: [-5, 8], xname: "x", yname: "y",
  fns: [{ f: (x) => x ** 3 - 4 * x + 1, label: "y = x³ − 4x + 1", labelAt: 1.2 }, { f: (x) => Math.exp(-x), from: -2.05, to: 2.5, label: "y = e⁻ˣ", labelAt: -1.9 }],
  alt: "The graphs of y = x^3 - 4x + 1 and y = e^(-x). They intersect at three points: one with x between -1.5 and -1, one at (0, 1), and one with x between 1.5 and 2. Between the first two intersections the cubic is above the exponential curve, and between the last two the exponential curve is above the cubic.",
});

// c8r-s7 (free response): f(x) = 2x + 2 and g(x) = x^2 - 2x + 2 meet at x = 0 and x = 4.
const s7Graph = graph({
  x: [-0.5, 4.5], y: [-1, 11], step: { x: 1, y: 2 }, xname: "x", yname: "y",
  fns: [{ f: (x) => 2 * x + 2, from: -0.5, to: 4.5, label: "f", labelAt: 3.6 }, { f: (x) => x * x - 2 * x + 2, from: -0.5, to: 4.5, label: "g", labelAt: 4.1 }],
  dots: [[0, 2, "closed"], [4, 10, "closed"]],
  labels: [[1.6, 4, "R"]],
  alt: "The graphs of f(x) = 2x + 2, a line, and g(x) = x^2 - 2x + 2, a parabola opening up with vertex (1, 1). They intersect at (0, 2) and (4, 10). The region R lies between them for x from 0 to 4, with the line above the parabola, and the whole region is above the x-axis.",
});

export const sets = {
  "c8r-s1": { name: "The graph of f", label: "Graph", intro: String.raw`The graph of the function $f$ on the interval $0 \le x \le 6$ consists of three line segments, as shown below.`,
    sources: [{ title: "", blocks: [{ svg: fGraph }] }] },
  "c8r-s3": { name: "A velocity graph", label: "Graph", intro: String.raw`A particle moves along the $x$-axis. The graph of its velocity $v(t)$, in meters per second, for $0 \le t \le 8$ seconds consists of four line segments, as shown below. At time $t = 0$, the particle is at $x = -3$.`,
    sources: [{ title: "", blocks: [{ svg: vGraph }] }] },
  "c8r-s4": { name: "Oil in a storage tank", label: "Context", intro: String.raw`A storage tank contains $500$ gallons of oil at time $t = 0$. For $0 \le t \le 10$ hours, oil is pumped into the tank at a rate of $P(t) = 40 + 12\sin\left(\dfrac{t}{3}\right)$ gallons per hour, and oil is drained from the tank at a rate of $D(t) = 30 + 2t$ gallons per hour.`,
    sources: [{ title: "", blocks: [{ p: "A graphing calculator is allowed." }] }] },
  "c8r-s5": { name: "A curve and a line", label: "Graph", intro: String.raw`The graphs of $y = \dfrac{3}{x}$ and $y = 4 - x$ are shown below.`,
    sources: [{ title: "", blocks: [{ svg: m11Graph }] }] },
  "c8r-s6": { name: "A region bounded by a curve, a line, and the x-axis", label: "Graph", intro: String.raw`Let $R$ be the region bounded by the graph of $y = x^2$, the line $y = 6 - x$, and the $x$-axis, shown below.`,
    sources: [{ title: "", blocks: [{ svg: m14Graph }] }] },
  "c8r-s2": { name: "The region R between f and g", label: "Graph", intro: String.raw`Let $f(x) = \dfrac{4}{1 + x^2}$ and $g(x) = x^2$. Let $R$ be the region enclosed by the graphs of $f$ and $g$, shown below. A graphing calculator is allowed.`,
    sources: [{ title: "", blocks: [{ svg: s2Graph }] }] },
  "c8r-s8": { name: "Curves that cross three times", label: "Graph", intro: String.raw`The graphs of $y = x^3 - 4x + 1$ and $y = e^{-x}$ are shown below. A graphing calculator is allowed.`,
    sources: [{ title: "", blocks: [{ svg: m17Graph }] }] },
  "c8r-s9": { name: "Cars in a parking garage", label: "Free response", intro: String.raw`At 6:00 A.M. ($t = 0$) there are $120$ cars in a parking garage. For $0 \le t \le 12$ hours, cars enter the garage at a rate modeled by $E(t) = 60 + 40\sin\left(\dfrac{\pi t}{12}\right)$ cars per hour, and cars leave the garage at a rate modeled by $L(t) = 10t$ cars per hour.`,
    sources: [{ title: "", blocks: [{ p: String.raw`A graphing calculator is allowed. Give decimal answers to three decimal places.` }] }] },
  "c8r-s11": { name: "Lake temperature", label: "Table", intro: String.raw`The temperature of the water in a lake, in degrees Celsius, is modeled by a continuous function $W$ of the time $h$, in hours after sunrise. Selected values of $W(h)$ are shown in the table below.`,
    sources: [{ title: "", blocks: [{ table: { head: ["$h$ (hours)", "$0$", "$2$", "$4$", "$6$", "$8$"], rows: [["$W(h)$ (degrees Celsius)", "$14$", "$15$", "$18$", "$21$", "$20$"]] } }] }] },
  "c8r-s12": { name: "A draining tank", label: "Table", intro: String.raw`A tank holds $200$ liters of water at time $t = 0$. For $0 \le t \le 10$ minutes, water drains from the tank at a rate of $D(t)$ liters per minute, where $D$ is continuous, and water is pumped into the tank at a constant rate of $12$ liters per minute. Selected values of $D(t)$ are shown in the table below.`,
    sources: [{ title: "", blocks: [{ table: { head: ["$t$ (minutes)", "$0$", "$2$", "$5$", "$9$", "$10$"], rows: [["$D(t)$ (liters per minute)", "$8$", "$11$", "$15$", "$20$", "$22$"]] } }] }] },
  "c8r-s13": { name: "A region under a broken line", label: "Graph", intro: String.raw`The graph of the function $f$ on the interval $0 \le x \le 4$ consists of two line segments, as shown below. Let $R$ be the region bounded by the graph of $f$, the $x$-axis, and the $y$-axis.`,
    sources: [{ title: "", blocks: [{ svg: discGraph }] }] },
  "c8r-s14": { name: "A parabola and a line", label: "Graph", intro: String.raw`The graphs of a quadratic function $f$ and a linear function $g$ are shown below. The marked points all have integer coordinates.`,
    sources: [{ title: "", blocks: [{ svg: fgGraph }] }] },
  "c8r-s15": { name: "A region and a line", label: "Graph", intro: String.raw`The figure below shows the region $R$, bounded by the graph of $y = 1 + \sqrt{x}$ and two lines, and the dashed line $\ell$.`,
    sources: [{ title: "", blocks: [{ svg: washerGraph }] }] },
  "c8r-s7": { name: "The region between a line and a parabola", label: "Free response", intro: String.raw`Let $f(x) = 2x + 2$ and $g(x) = x^2 - 2x + 2$. Let $R$ be the region enclosed by the graphs of $f$ and $g$, shown below.`,
    sources: [{ title: "", blocks: [{ svg: s7Graph }, { p: String.raw`Answer each part without a calculator. Show the work that leads to each answer.` }] }] },
  "c8r-s10": { name: "A particle on the x-axis", label: "Free response", intro: String.raw`A particle moves along the $x$-axis. Its velocity at time $t$ seconds is $v(t) = 4\cos\left(\dfrac{t^2}{8}\right)$ meters per second for $0 \le t \le 5$. At time $t = 0$, the particle is at $x = -3$.`,
    sources: [{ title: "", blocks: [{ p: String.raw`A graphing calculator is allowed. Give decimal answers to three decimal places.` }] }] },
};

export default [
  // 8.1 Average value of a function
  { id: "c8r-m01", type: "mcq", skill: "u8", topic: "8.1", calc: false, difficulty: "easy",
    question: String.raw`What is the average value of $f(x) = 6x^2 - 4x + 1$ on the interval $0 \le x \le 2$?`,
    choices: ["$5$", "$10$", "$9$", "$8$"],
    why: [
      String.raw`The average value is $\dfrac{1}{2 - 0}\displaystyle\int_0^2 \left(6x^2 - 4x + 1\right)dx = \dfrac{1}{2}\Big[2x^3 - 2x^2 + x\Big]_0^2 = \dfrac{1}{2}(16 - 8 + 2) = 5$.`,
      String.raw`This is the value of the integral, $10$, without dividing by the length of the interval, $2$.`,
      String.raw`This is the average of the endpoint values, $\dfrac{f(0) + f(2)}{2} = \dfrac{1 + 17}{2}$. The average value of a function uses the integral.`,
      String.raw`This is the average rate of change, $\dfrac{f(2) - f(0)}{2 - 0} = \dfrac{16}{2}$, not the average value of $f$.`,
    ],
    answer: 0 },
  { id: "c8r-m02", type: "mcq", skill: "u8", topic: "8.1", calc: false, difficulty: "moderate", set: "c8r-s1",
    question: String.raw`What is the average value of $f$ on the interval $0 \le x \le 6$?`,
    choices: [String.raw`$-\frac{1}{3}$`, String.raw`$\frac{5}{3}$`, "$-2$", "$1$"],
    why: [
      String.raw`From the areas of the pieces, $\displaystyle\int_0^6 f(x)\,dx = 4 - 2 - 4 = -2$: a triangle of area $4$ above the axis, a triangle of area $2$ below it, and a rectangle of area $4$ below it. The average value is $\dfrac{-2}{6} = -\dfrac{1}{3}$.`,
      String.raw`This adds all three areas as positive, $\dfrac{4 + 2 + 4}{6}$. Area below the $x$-axis counts as negative in the integral.`,
      String.raw`This is $\displaystyle\int_0^6 f(x)\,dx$ without dividing by the length of the interval, $6$.`,
      String.raw`This is the average of the endpoint values, $\dfrac{f(0) + f(6)}{2} = \dfrac{4 + (-2)}{2}$.`,
    ],
    answer: 0 },
  { id: "c8r-m03", type: "mcq", skill: "u8", topic: "8.1", calc: true, difficulty: "easy",
    stem: String.raw`The concentration of a medicine in a patient's blood $t$ hours after it is taken is $C(t) = 8te^{-0.4t}$ milligrams per liter.`,
    question: String.raw`What is the average concentration of the medicine over the first $6$ hours?`,
    choices: [String.raw`$5.763$ milligrams per liter`, String.raw`$34.578$ milligrams per liter`, String.raw`$2.177$ milligrams per liter`, String.raw`$0.726$ milligrams per liter`],
    why: [
      String.raw`The average value is $\dfrac{1}{6}\displaystyle\int_0^6 8te^{-0.4t}\,dt = \dfrac{34.578}{6} = 5.763$ milligrams per liter.`,
      String.raw`This is $\displaystyle\int_0^6 C(t)\,dt$ without dividing by $6$.`,
      String.raw`This is the average of the endpoint values, $\dfrac{C(0) + C(6)}{2}$.`,
      String.raw`This is the average rate of change of $C$, $\dfrac{C(6) - C(0)}{6}$, which has units of milligrams per liter per hour.`,
    ],
    answer: 0 },

  // 8.2 Position, velocity, and acceleration using integrals
  { id: "c8r-m04", type: "mcq", skill: "u8", topic: "8.2", calc: false, difficulty: "difficult",
    stem: String.raw`A particle moves along a line with velocity $v(t) = 2t^2 - 8t + 6$ for $t \ge 0$.`,
    question: String.raw`What is the total distance the particle travels from $t = 0$ to $t = 2$?`,
    choices: ["$4$", String.raw`$\frac{4}{3}$`, String.raw`$\frac{8}{3}$`, String.raw`$\frac{16}{3}$`],
    why: [
      String.raw`$v(t) = 2(t - 1)(t - 3)$ is positive on $0 < t < 1$ and negative on $1 < t < 2$. With $V(t) = \dfrac{2t^3}{3} - 4t^2 + 6t$, $\displaystyle\int_0^1 v(t)\,dt = \dfrac{8}{3}$ and $\displaystyle\int_1^2 v(t)\,dt = \dfrac{4}{3} - \dfrac{8}{3} = -\dfrac{4}{3}$. The total distance is $\dfrac{8}{3} + \dfrac{4}{3} = 4$.`,
      String.raw`This is the displacement, $\displaystyle\int_0^2 v(t)\,dt$. The distance traveled while moving left is subtracted from the distance traveled while moving right.`,
      String.raw`This is the distance for $0 \le t \le 1$ only. The particle also travels $\dfrac{4}{3}$ while moving left on $1 < t < 2$.`,
      String.raw`This is $\displaystyle\int_0^3 \left|v(t)\right|dt = \dfrac{8}{3} + \dfrac{8}{3}$, which runs to $t = 3$, the second zero of $v$, instead of stopping at $t = 2$.`,
    ],
    answer: 0 },
  { id: "c8r-m05", type: "mcq", skill: "u8", topic: "8.2", calc: false, difficulty: "moderate", set: "c8r-s3",
    question: String.raw`What is the position of the particle at $t = 8$?`,
    choices: ["$11$", "$14$", "$15$", "$17$"],
    why: [
      String.raw`From the areas, $\displaystyle\int_0^8 v(t)\,dt = 4 + 8 + 4 - 2 = 14$. So $x(8) = x(0) + 14 = -3 + 14 = 11$.`,
      String.raw`This is the displacement, $\displaystyle\int_0^8 v(t)\,dt$, without adding the starting position $x(0) = -3$.`,
      String.raw`This adds the total distance, $4 + 8 + 4 + 2 = 18$, to $-3$. The area below the $t$-axis is motion to the left and counts as negative.`,
      String.raw`This subtracts the starting position, $14 - (-3)$. The position is $x(0) + \displaystyle\int_0^8 v(t)\,dt$.`,
    ],
    answer: 0 },
  { id: "c8r-m06", type: "mcq", skill: "u8", topic: "8.2", calc: true, difficulty: "moderate",
    stem: String.raw`A particle moves along a line with velocity $v(t) = 3\sin\left(\dfrac{t^2}{4}\right)$ meters per second for $0 \le t \le 5$.`,
    question: String.raw`What is the total distance, in meters, the particle travels from $t = 0$ to $t = 5$?`,
    choices: ["$8.155$", "$2.583$", "$5.369$", "$2.786$"],
    why: [
      String.raw`The total distance is $\displaystyle\int_0^5 \left|v(t)\right|dt = 8.155$. The velocity changes sign at $t = 2\sqrt{\pi} \approx 3.545$, so the particle moves right $5.369$ meters and then left $2.786$ meters.`,
      String.raw`This is the displacement, $\displaystyle\int_0^5 v(t)\,dt$, which subtracts the distance traveled to the left.`,
      String.raw`This is the distance traveled before the particle turns around at $t = 3.545$. It leaves out the motion to the left after that.`,
      String.raw`This is only the distance traveled to the left, on $3.545 < t \le 5$.`,
    ],
    answer: 0 },

  // 8.3 Accumulation in applied contexts
  { id: "c8r-m07", type: "mcq", skill: "u8", topic: "8.3", calc: false, difficulty: "easy",
    stem: String.raw`A tank contains $10$ gallons of water at time $t = 0$. Water flows into the tank at a rate of $R(t)$ gallons per minute, and no water leaves the tank. It is known that $\displaystyle\int_0^5 R(t)\,dt = 40$.`,
    question: "Which of the following is the best interpretation of this equation?",
    choices: [
      String.raw`During the first $5$ minutes, $40$ gallons of water flow into the tank.`,
      String.raw`At time $t = 5$ minutes, water flows into the tank at a rate of $40$ gallons per minute.`,
      String.raw`At time $t = 5$ minutes, the tank contains a total of $40$ gallons of water.`,
      String.raw`During the first $5$ minutes, water flows into the tank at an average rate of $40$ gallons per minute.`,
    ],
    why: [
      String.raw`The integral of a rate over an interval is the total change over that interval. Here it is the number of gallons that flow in from $t = 0$ to $t = 5$.`,
      String.raw`That would be $R(5) = 40$. The integral is an accumulated amount, not a rate at one instant.`,
      String.raw`The tank started with $10$ gallons, so at $t = 5$ it contains $10 + 40 = 50$ gallons.`,
      String.raw`The average rate is $\dfrac{1}{5}\displaystyle\int_0^5 R(t)\,dt = 8$ gallons per minute.`,
    ],
    answer: 0 },
  { id: "c8r-m08", type: "mcq", skill: "u8", topic: "8.3", calc: true, difficulty: "moderate", set: "c8r-s4",
    question: String.raw`How many gallons of oil are in the tank at time $t = 8$ hours?`,
    choices: ["$584.016$", "$888.016$", "$415.984$", "$499.487$"],
    why: [
      String.raw`The amount is $500 + \displaystyle\int_0^8 \left(P(t) - D(t)\right)dt = 500 + 84.016 = 584.016$ gallons.`,
      String.raw`This adds the oil pumped in, $\displaystyle\int_0^8 P(t)\,dt$, but does not subtract the oil drained out.`,
      String.raw`This uses $D(t) - P(t)$, which reverses the sign of the net change.`,
      String.raw`This adds the net rate at one instant, $P(8) - D(8) = -0.513$, to $500$. The net change comes from integrating the net rate.`,
    ],
    answer: 0 },
  { id: "c8r-m09", type: "mcq", skill: "u8", topic: "8.3", calc: true, difficulty: "difficult", set: "c8r-s4",
    question: String.raw`At what time $t$, for $0 \le t \le 10$, is the amount of oil in the tank greatest?`,
    choices: [String.raw`$t = 7.907$`, String.raw`$t = 4.712$`, String.raw`$t = 3.142$`, String.raw`$t = 10$`],
    why: [
      String.raw`The amount $A(t) = 500 + \displaystyle\int_0^t \left(P(s) - D(s)\right)ds$ has $A'(t) = P(t) - D(t)$, which is $0$ only at $t = 7.907$ and changes from positive to negative there. Comparing candidates, $A(0) = 500$, $A(7.907) = 584.039$, and $A(10) = 571.340$, so the greatest amount is at $t = 7.907$.`,
      String.raw`This is when the rate in, $P(t)$, is greatest ($t = \dfrac{3\pi}{2}$). The amount keeps increasing as long as $P(t) > D(t)$.`,
      String.raw`This is when the net rate $P(t) - D(t)$ is greatest ($t = \pi$). The amount is greatest when the net rate changes from positive to negative.`,
      String.raw`At $t = 10$ the amount is $571.340$ gallons, less than at $t = 7.907$, because oil drains faster than it enters after $t = 7.907$.`,
    ],
    answer: 0 },
  { id: "c8r-m10", type: "mcq", skill: "u8", topic: "8.3", calc: false, difficulty: "moderate",
    stem: String.raw`Oil leaks from a pipe at a rate of $r(t) = 6e^{-0.5t}$ liters per hour, where $t$ is measured in hours.`,
    question: "How many liters of oil leak from the pipe during the first $4$ hours?",
    choices: [String.raw`$12\left(1 - e^{-2}\right)$`, String.raw`$6\left(1 - e^{-2}\right)$`, String.raw`$3\left(1 - e^{-2}\right)$`, String.raw`$24e^{-2}$`],
    why: [
      String.raw`$\displaystyle\int_0^4 6e^{-0.5t}\,dt = \Big[-12e^{-0.5t}\Big]_0^4 = -12e^{-2} + 12 = 12\left(1 - e^{-2}\right)$.`,
      String.raw`This leaves out the factor $\dfrac{1}{-0.5} = -2$ from the antiderivative of $e^{-0.5t}$.`,
      String.raw`This multiplies by $0.5$ instead of dividing by $-0.5$ when finding the antiderivative.`,
      String.raw`This is $r(4) \cdot 4$, which treats the leak rate as constant at its value at $t = 4$.`,
    ],
    answer: 0 },

  // 8.4 Area between curves, functions of x
  { id: "c8r-m11", type: "mcq", skill: "u8", topic: "8.4", calc: false, difficulty: "moderate", set: "c8r-s5",
    question: String.raw`What is the area of the region enclosed by the graphs of $y = \dfrac{3}{x}$ and $y = 4 - x$?`,
    choices: [String.raw`$4 - 3\ln 3$`, String.raw`$3\ln 3 - 4$`, "$4$", String.raw`$4 - \ln 3$`],
    why: [
      String.raw`The graphs meet where $\dfrac{3}{x} = 4 - x$, so $x^2 - 4x + 3 = (x - 1)(x - 3) = 0$ and $x = 1$ or $x = 3$. The line is above the curve between them, so the area is $\displaystyle\int_1^3 \left(4 - x - \dfrac{3}{x}\right)dx = \Big[4x - \dfrac{x^2}{2} - 3\ln x\Big]_1^3 = \left(\dfrac{15}{2} - 3\ln 3\right) - \dfrac{7}{2} = 4 - 3\ln 3$.`,
      String.raw`This subtracts in the wrong order, lower curve minus upper curve, so the value is negative.`,
      String.raw`This is $\displaystyle\int_1^3 (4 - x)\,dx$, the area under the line alone. The area under $y = \dfrac{3}{x}$ must be subtracted.`,
      String.raw`This drops the constant $3$ from the antiderivative of $\dfrac{3}{x}$, which is $3\ln x$.`,
    ],
    answer: 0 },
  { id: "c8r-m12", type: "mcq", skill: "u8", topic: "8.4", calc: false, difficulty: "easy",
    stem: String.raw`Let $R$ be the region enclosed by the graphs of $y = x^2 - 3x$ and $y = x$.`,
    question: String.raw`Which of the following gives the area of $R$?`,
    choices: [
      String.raw`$\displaystyle\int_0^4 \left(4x - x^2\right)dx$`,
      String.raw`$\displaystyle\int_0^4 \left(x^2 - 4x\right)dx$`,
      String.raw`$\displaystyle\int_0^3 \left(4x - x^2\right)dx$`,
      String.raw`$\displaystyle\int_0^4 \left(-2x - x^2\right)dx$`,
    ],
    why: [
      String.raw`The graphs meet where $x^2 - 3x = x$, so $x^2 - 4x = 0$ and $x = 0$ or $x = 4$. On $0 < x < 4$, the line is above the parabola (at $x = 1$, $1 > -2$), so the integrand is $x - \left(x^2 - 3x\right) = 4x - x^2$.`,
      String.raw`This is lower curve minus upper curve, so its value is negative.`,
      String.raw`The limits $0$ and $3$ are the $x$-intercepts of the parabola, not the points where the two graphs meet.`,
      String.raw`This drops the parentheses when subtracting: $x - \left(x^2 - 3x\right)$ is $x - x^2 + 3x$, not $x - x^2 - 3x$.`,
    ],
    answer: 0 },
  { id: "c8r-m13", type: "mcq", skill: "u8", topic: "8.4", calc: true, difficulty: "moderate", set: "c8r-s2",
    question: String.raw`What is the area of $R$?`,
    choices: ["$5.866$", "$2.933$", "$7.167$", "$5.471$"],
    why: [
      String.raw`The graphs meet where $\dfrac{4}{1 + x^2} = x^2$, at $x = \pm 1.250$. The area is $\displaystyle\int_{-1.250}^{1.250} \left(\dfrac{4}{1 + x^2} - x^2\right)dx = 5.866$.`,
      String.raw`This integrates only from $0$ to $1.250$, which is half of $R$.`,
      String.raw`This is $\displaystyle\int_{-1.250}^{1.250} \dfrac{4}{1 + x^2}\,dx$, the area under $f$ alone. The area under $g$ must be subtracted.`,
      String.raw`This uses the limits $\pm 1.562$. Solving $x^4 + x^2 - 4 = 0$ gives $x^2 = 1.562$, and $x$ is the square root of that.`,
    ],
    answer: 0 },

  // 8.5 Area between curves, functions of y
  { id: "c8r-m14", type: "mcq", skill: "u8", topic: "8.5", calc: false, difficulty: "moderate", set: "c8r-s6",
    question: String.raw`What is the area of $R$?`,
    choices: [String.raw`$\frac{32}{3}$`, "$16$", String.raw`$\frac{8}{3}$`, String.raw`$\frac{64}{3}$`],
    why: [
      String.raw`Integrate with respect to $y$. Solving for $x$, the curve is $x = \sqrt{y}$ and the line is $x = 6 - y$; they meet at $y = 4$. Each horizontal strip runs from $x = \sqrt{y}$ on the left to $x = 6 - y$ on the right, so the area is $\displaystyle\int_0^4 \left(6 - y - \sqrt{y}\right)dy = \Big[6y - \dfrac{y^2}{2} - \dfrac{2}{3}y^{3/2}\Big]_0^4 = 24 - 8 - \dfrac{16}{3} = \dfrac{32}{3}$.`,
      String.raw`This is $\displaystyle\int_0^4 (6 - y)\,dy$, which measures each strip from the $y$-axis to the line. The left boundary of $R$ is the curve $x = \sqrt{y}$, not the $y$-axis.`,
      String.raw`This is $\displaystyle\int_0^2 x^2\,dx$, the part of $R$ under the curve only. It leaves out the triangle under the line from $x = 2$ to $x = 6$, which has area $8$.`,
      String.raw`This is $\displaystyle\int_0^4 \left(6 - y + \sqrt{y}\right)dy$, which adds the left boundary instead of subtracting it. Strip length is right minus left.`,
    ],
    answer: 0 },
  { id: "c8r-m15", type: "mcq", skill: "u8", topic: "8.5", calc: false, difficulty: "moderate",
    stem: String.raw`Let $R$ be the region bounded by the graph of $y = \sqrt{x - 1}$, the $y$-axis, the $x$-axis, and the line $y = 2$.`,
    question: String.raw`Which of the following gives the area of $R$?`,
    choices: [
      String.raw`$\displaystyle\int_0^2 \left(y^2 + 1\right)dy$`,
      String.raw`$\displaystyle\int_1^5 \sqrt{x - 1}\,dx$`,
      String.raw`$\displaystyle\int_0^2 \sqrt{y - 1}\,dy$`,
      String.raw`$\displaystyle\int_1^5 \left(2 - \sqrt{x - 1}\right)dx$`,
    ],
    why: [
      String.raw`Solving $y = \sqrt{x - 1}$ for $x$ gives $x = y^2 + 1$. For each $y$ from $0$ to $2$, the region runs from the $y$-axis, $x = 0$, to $x = y^2 + 1$, so the area is $\displaystyle\int_0^2 \left(y^2 + 1 - 0\right)dy = \dfrac{14}{3}$.`,
      String.raw`This is the area under the curve above the $x$-axis, which is the region to the right of the curve, not the region between the curve and the $y$-axis.`,
      String.raw`The curve must be solved for $x$ to integrate in $y$. Replacing $x$ with $y$ does not do that.`,
      String.raw`This is the part of $R$ for $1 \le x \le 5$ only, with area $\dfrac{8}{3}$. It leaves out the rectangle $0 \le x \le 1$, $0 \le y \le 2$.`,
    ],
    answer: 0 },

  // 8.6 Curves that intersect at more than two points
  { id: "c8r-m16", type: "mcq", skill: "u8", topic: "8.6", calc: false, difficulty: "difficult",
    question: String.raw`What is the total area of the regions enclosed by the graphs of $y = x^3$ and $y = 2x^2 + 3x$?`,
    choices: [String.raw`$\frac{71}{6}$`, String.raw`$\frac{32}{3}$`, String.raw`$\frac{45}{4}$`, String.raw`$\frac{7}{12}$`],
    why: [
      String.raw`The graphs meet where $x^3 - 2x^2 - 3x = x(x - 3)(x + 1) = 0$, at $x = -1$, $0$, and $3$. On $-1 < x < 0$, $x^3$ is above; on $0 < x < 3$, $2x^2 + 3x$ is above. The area is $\displaystyle\int_{-1}^{0} \left(x^3 - 2x^2 - 3x\right)dx + \int_0^3 \left(2x^2 + 3x - x^3\right)dx = \dfrac{7}{12} + \dfrac{45}{4} = \dfrac{71}{6}$.`,
      String.raw`This is $\left|\displaystyle\int_{-1}^{3} \left(x^3 - 2x^2 - 3x\right)dx\right|$. The upper curve switches at $x = 0$, so part of the area cancels in one integral.`,
      String.raw`This is the area of the region on $0 \le x \le 3$ only.`,
      String.raw`This is the area of the region on $-1 \le x \le 0$ only.`,
    ],
    answer: 0 },
  { id: "c8r-m17", type: "mcq", skill: "u8", topic: "8.6", calc: true, difficulty: "moderate", set: "c8r-s8",
    question: String.raw`What is the total area of the regions enclosed by the two graphs?`,
    choices: ["$4.221$", "$1.605$", "$1.308$", "$2.913$"],
    why: [
      String.raw`The graphs meet where $x^3 - 4x + 1 = e^{-x}$, at $x = -1.365$, $x = 0$, and $x = 1.884$. The area is $\displaystyle\int_{-1.365}^{1.884} \left|x^3 - 4x + 1 - e^{-x}\right|dx = 1.308 + 2.913 = 4.221$.`,
      String.raw`This is $\left|\displaystyle\int_{-1.365}^{1.884} \left(x^3 - 4x + 1 - e^{-x}\right)dx\right|$. The upper curve switches at $x = 0$, so part of the area cancels in one integral.`,
      String.raw`This is the area of the region on $-1.365 \le x \le 0$ only.`,
      String.raw`This is the area of the region on $0 \le x \le 1.884$ only.`,
    ],
    answer: 0 },

  // 8.7 Cross sections: squares and rectangles
  { id: "c8r-m18", type: "mcq", skill: "u8", topic: "8.7", calc: false, difficulty: "easy",
    stem: String.raw`The base of a solid is the region in the first quadrant bounded by the graph of $y = \sqrt{9 - x}$ and the coordinate axes. Cross sections of the solid perpendicular to the $x$-axis are squares.`,
    question: "What is the volume of the solid?",
    choices: [String.raw`$\frac{81}{2}$`, String.raw`$\frac{81\pi}{2}$`, "$18$", String.raw`$\frac{81}{4}$`],
    why: [
      String.raw`A cross section at $x$ is a square with side $\sqrt{9 - x}$, so its area is $9 - x$. The volume is $\displaystyle\int_0^9 (9 - x)\,dx = 81 - \dfrac{81}{2} = \dfrac{81}{2}$.`,
      String.raw`This is $\pi\displaystyle\int_0^9 (9 - x)\,dx$, the disc method. The cross sections are squares, not circles.`,
      String.raw`This is $\displaystyle\int_0^9 \sqrt{9 - x}\,dx$, the area of the base. The side length must be squared.`,
      String.raw`This uses $\dfrac{1}{2}s^2$, the area of an isosceles right triangle with a leg in the base, instead of the area of a square.`,
    ],
    answer: 0 },
  { id: "c8r-m19", type: "mcq", skill: "u8", topic: "8.7", calc: false, difficulty: "difficult",
    stem: String.raw`The base of a solid is the region enclosed by the graph of $y = 2x - x^2$ and the $x$-axis. Cross sections of the solid perpendicular to the $x$-axis are rectangles whose height is $3$ times the length of the base of the rectangle in the region.`,
    question: "What is the volume of the solid?",
    choices: [String.raw`$\frac{16}{5}$`, String.raw`$\frac{16}{15}$`, "$4$", String.raw`$\frac{64}{5}$`],
    why: [
      String.raw`The base of the rectangle at $x$ is $2x - x^2$ and the height is $3\left(2x - x^2\right)$, so the area is $3\left(2x - x^2\right)^2$. The volume is $3\displaystyle\int_0^2 \left(4x^2 - 4x^3 + x^4\right)dx = 3\left(\dfrac{32}{3} - 16 + \dfrac{32}{5}\right) = 3 \cdot \dfrac{16}{15} = \dfrac{16}{5}$.`,
      String.raw`This is $\displaystyle\int_0^2 \left(2x - x^2\right)^2 dx$, the volume for square cross sections. The height is $3$ times the base, so the area has a factor of $3$.`,
      String.raw`This is $3\displaystyle\int_0^2 \left(2x - x^2\right)dx$. The base length was not multiplied by the height.`,
      String.raw`This is $3\displaystyle\int_0^2 \left(4x^2 - x^4\right)dx$, which squares each term separately. The base length $2x - x^2$ must be squared as a whole.`,
    ],
    answer: 0 },
  { id: "c8r-m20", type: "mcq", skill: "u8", topic: "8.7", calc: true, difficulty: "difficult",
    stem: String.raw`The base of a solid is the region bounded by the graph of $y = \ln x$, the $x$-axis, and the line $x = 3$. Cross sections of the solid perpendicular to the $y$-axis are squares.`,
    question: "What is the volume of the solid?",
    choices: ["$1.888$", "$1.029$", "$1.296$", "$5.930$"],
    why: [
      String.raw`For $0 \le y \le \ln 3$, a horizontal segment of the base runs from $x = e^{y}$ to $x = 3$, so the square has side $3 - e^{y}$. The volume is $\displaystyle\int_0^{\ln 3} \left(3 - e^{y}\right)^2 dy = 1.888$.`,
      String.raw`This is $\displaystyle\int_1^3 \left(\ln x\right)^2 dx$, which uses cross sections perpendicular to the $x$-axis.`,
      String.raw`This is $\displaystyle\int_0^{\ln 3} \left(3 - e^{y}\right)dy$, the area of the base. The side length must be squared.`,
      String.raw`This is $\pi\displaystyle\int_0^{\ln 3} \left(3 - e^{y}\right)^2 dy$. The cross sections are squares, so there is no factor of $\pi$.`,
    ],
    answer: 0 },

  // 8.8 Cross sections: triangles and semicircles
  { id: "c8r-m21", type: "mcq", skill: "u8", topic: "8.8", calc: false, difficulty: "difficult",
    stem: String.raw`The base of a solid is the region bounded by the graph of $y = \cos x$ and the $x$-axis for $-\dfrac{\pi}{2} \le x \le \dfrac{\pi}{2}$. Cross sections of the solid perpendicular to the $x$-axis are semicircles with diameters in the base.`,
    question: "What is the volume of the solid?",
    choices: [String.raw`$\frac{\pi^2}{16}$`, String.raw`$\frac{\pi^2}{8}$`, String.raw`$\frac{\pi^2}{4}$`, String.raw`$\frac{\pi^2}{2}$`],
    why: [
      String.raw`A semicircle with diameter $s = \cos x$ has radius $\dfrac{s}{2}$ and area $\dfrac{1}{2}\pi\left(\dfrac{s}{2}\right)^2 = \dfrac{\pi}{8}s^2$. Since $\displaystyle\int_{-\pi/2}^{\pi/2} \cos^2 x\,dx = \int_{-\pi/2}^{\pi/2} \dfrac{1 + \cos 2x}{2}\,dx = \dfrac{\pi}{2}$, the volume is $\dfrac{\pi}{8} \cdot \dfrac{\pi}{2} = \dfrac{\pi^2}{16}$.`,
      String.raw`This uses $\dfrac{\pi}{4}s^2$, the area of a whole circle with diameter $s$, instead of half of it.`,
      String.raw`This uses $\dfrac{\pi}{2}s^2$, which treats $s$ as the radius of the semicircle instead of its diameter.`,
      String.raw`This uses $\pi s^2$, the disc method for revolving the base about the $x$-axis.`,
    ],
    answer: 0 },
  { id: "c8r-m22", type: "mcq", skill: "u8", topic: "8.8", calc: false, difficulty: "moderate",
    stem: String.raw`The base of a solid is the region enclosed by the graph of $y = 2 - 2x^2$ and the $x$-axis. Cross sections of the solid perpendicular to the $x$-axis are equilateral triangles.`,
    question: "What is the volume of the solid?",
    choices: [String.raw`$\frac{16\sqrt{3}}{15}$`, String.raw`$\frac{32\sqrt{3}}{15}$`, String.raw`$\frac{64}{15}$`, String.raw`$\frac{32}{15}$`],
    why: [
      String.raw`An equilateral triangle with side $s = 2 - 2x^2$ has area $\dfrac{\sqrt{3}}{4}s^2$. Since $\displaystyle\int_{-1}^{1} \left(2 - 2x^2\right)^2 dx = 4\int_{-1}^{1} \left(1 - 2x^2 + x^4\right)dx = 4\left(2 - \dfrac{4}{3} + \dfrac{2}{5}\right) = \dfrac{64}{15}$, the volume is $\dfrac{\sqrt{3}}{4} \cdot \dfrac{64}{15} = \dfrac{16\sqrt{3}}{15}$.`,
      String.raw`This uses $\dfrac{\sqrt{3}}{2}s^2$. The height of an equilateral triangle is $\dfrac{\sqrt{3}}{2}s$, and the area is half of base times height.`,
      String.raw`This uses $s^2$, the area of a square cross section.`,
      String.raw`This uses $\dfrac{1}{2}s^2$, the area of an isosceles right triangle with a leg in the base.`,
    ],
    answer: 0 },
  { id: "c8r-m23", type: "mcq", skill: "u8", topic: "8.8", calc: true, difficulty: "moderate",
    stem: String.raw`The base of a solid is the region bounded by the graph of $y = e^{\sin x}$, the $x$-axis, and the lines $x = 0$ and $x = \pi$. Cross sections of the solid perpendicular to the $x$-axis are isosceles right triangles with the hypotenuse in the base.`,
    question: "What is the volume of the solid?",
    choices: ["$3.312$", "$6.624$", "$13.248$", "$5.737$"],
    why: [
      String.raw`An isosceles right triangle with hypotenuse $s$ has legs $\dfrac{s}{\sqrt{2}}$ and area $\dfrac{1}{2}\left(\dfrac{s}{\sqrt{2}}\right)^2 = \dfrac{s^2}{4}$. The volume is $\dfrac{1}{4}\displaystyle\int_0^{\pi} \left(e^{\sin x}\right)^2 dx = 3.312$.`,
      String.raw`This uses $\dfrac{s^2}{2}$, the area when a leg, not the hypotenuse, is in the base.`,
      String.raw`This uses $s^2$, the area of a square cross section.`,
      String.raw`This uses $\dfrac{\sqrt{3}}{4}s^2$, the area of an equilateral triangle.`,
    ],
    answer: 0 },

  // 8.9 Disc method about the x- or y-axis
  { id: "c8r-m24", type: "mcq", skill: "u8", topic: "8.9", calc: false, difficulty: "easy",
    stem: String.raw`The region bounded by the graph of $y = x^{3/2}$, the $x$-axis, and the line $x = 4$ is revolved about the $x$-axis.`,
    question: "What is the volume of the solid generated?",
    choices: [String.raw`$64\pi$`, String.raw`$\frac{64\pi}{5}$`, String.raw`$256\pi$`, String.raw`$\frac{384\pi}{7}$`],
    why: [
      String.raw`Each disc at $x$ has radius $x^{3/2}$. The volume is $\pi\displaystyle\int_0^4 \left(x^{3/2}\right)^2 dx = \pi\displaystyle\int_0^4 x^3\,dx = \pi \cdot \dfrac{256}{4} = 64\pi$.`,
      String.raw`This is $\pi\displaystyle\int_0^4 x^{3/2}\,dx$. The radius $x^{3/2}$ was not squared.`,
      String.raw`This is $\pi(8)^2(4)$, a cylinder that uses the largest radius, $4^{3/2} = 8$, for every disc. The radius changes with $x$.`,
      String.raw`This is $\pi\displaystyle\int_0^8 \left(y^{2/3}\right)^2 dy$, discs about the $y$-axis for the region to the left of the curve. The region is revolved about the $x$-axis.`,
    ],
    answer: 0 },
  { id: "c8r-m25", type: "mcq", skill: "u8", topic: "8.9", calc: false, difficulty: "moderate",
    stem: String.raw`The region in the first quadrant bounded by the graph of $y = x^2 + 1$, the $y$-axis, and the line $y = 5$ is revolved about the $y$-axis.`,
    question: "What is the volume of the solid generated?",
    choices: [String.raw`$8\pi$`, String.raw`$\frac{16\pi}{3}$`, String.raw`$\frac{15\pi}{2}$`, String.raw`$\frac{544\pi}{15}$`],
    why: [
      String.raw`Each disc at height $y$, $1 \le y \le 5$, has radius $x = \sqrt{y - 1}$. The volume is $\pi\displaystyle\int_1^5 (y - 1)\,dy = \pi\Big[\dfrac{y^2}{2} - y\Big]_1^5 = \pi\left(\dfrac{15}{2} + \dfrac{1}{2}\right) = 8\pi$.`,
      String.raw`This is $\pi\displaystyle\int_1^5 \sqrt{y - 1}\,dy$. The radius $\sqrt{y - 1}$ was not squared.`,
      String.raw`This is $\pi\displaystyle\int_0^5 (y - 1)\,dy$. The region starts at $y = 1$, the lowest point of the curve, and the radius is not defined below that.`,
      String.raw`This is $\pi\displaystyle\int_0^2 \left(25 - \left(x^2 + 1\right)^2\right)dx$, washers for revolving the region about the $x$-axis. The region is revolved about the $y$-axis.`,
    ],
    answer: 0 },
  { id: "c8r-m26", type: "mcq", skill: "u8", topic: "8.9", calc: true, difficulty: "easy",
    stem: String.raw`The region bounded by the graph of $y = \dfrac{x}{x + 1}$, the $x$-axis, and the line $x = 3$ is revolved about the $x$-axis.`,
    question: "What is the volume of the solid generated?",
    choices: ["$3.071$", "$5.070$", "$0.977$", "$6.141$"],
    why: [
      String.raw`Each disc at $x$ has radius $\dfrac{x}{x + 1}$. The volume is $\pi\displaystyle\int_0^3 \left(\dfrac{x}{x + 1}\right)^2 dx = 3.071$.`,
      String.raw`This is $\pi\displaystyle\int_0^3 \dfrac{x}{x + 1}\,dx$. The radius was not squared.`,
      String.raw`This is $\displaystyle\int_0^3 \left(\dfrac{x}{x + 1}\right)^2 dx$, which leaves out the factor $\pi$.`,
      String.raw`This is $2\pi\displaystyle\int_0^3 \left(\dfrac{x}{x + 1}\right)^2 dx$, which uses $2\pi r^2$ instead of $\pi r^2$ for the area of a disc.`,
    ],
    answer: 0 },

  // 8.10 Disc method about other axes
  { id: "c8r-m27", type: "mcq", skill: "u8", topic: "8.10", calc: false, difficulty: "difficult",
    stem: String.raw`The region bounded by the graph of $y = \sqrt{x}$, the $y$-axis, and the line $y = 3$ is revolved about the line $y = 3$.`,
    question: "What is the volume of the solid generated?",
    choices: [String.raw`$\frac{27\pi}{2}$`, String.raw`$9\pi$`, String.raw`$\frac{81\pi}{2}$`, String.raw`$\frac{27}{2}$`],
    why: [
      String.raw`The region runs from $x = 0$ to $x = 9$. Each disc at $x$ has radius $3 - \sqrt{x}$, so the volume is $\pi\displaystyle\int_0^9 \left(9 - 6\sqrt{x} + x\right)dx = \pi\left(81 - 108 + \dfrac{81}{2}\right) = \dfrac{27\pi}{2}$.`,
      String.raw`This is $\pi\displaystyle\int_0^9 \left(3 - \sqrt{x}\right)dx$. The radius was not squared.`,
      String.raw`This is $\pi\displaystyle\int_0^9 \left(9 - x\right)dx$, which revolves the region about the $x$-axis using washers with radii $3$ and $\sqrt{x}$.`,
      String.raw`This leaves out the factor $\pi$ in the area of a disc.`,
    ],
    answer: 0 },
  { id: "c8r-m28", type: "mcq", skill: "u8", topic: "8.10", calc: true, difficulty: "difficult",
    stem: String.raw`Let $R$ be the region bounded by the graph of $y = \ln(x + 2)$, the line $x = -1$, and the line $y = 1$. The region $R$ is revolved about the line $x = -1$.`,
    question: "What is the volume of the solid generated?",
    choices: ["$2.381$", "$1.010$", "$2.257$", "$5.921$"],
    why: [
      String.raw`Solving for $x$ gives $x = e^{y} - 2$. For $0 \le y \le 1$, each disc at height $y$ runs from the axis $x = -1$ to the curve, so its radius is $\left(e^{y} - 2\right) - (-1) = e^{y} - 1$. The volume is $\pi\displaystyle\int_0^1 \left(e^{y} - 1\right)^2 dy = 2.381$.`,
      String.raw`This uses the radius $e^{y} - 2$, the distance from the curve to the $y$-axis, not to the line $x = -1$.`,
      String.raw`This is $\pi\displaystyle\int_0^1 \left(e^{y} - 1\right)dy$. The radius was not squared.`,
      String.raw`This uses the radius $\left(e^{y} - 2\right) - 1 = e^{y} - 3$, the distance to the line $x = 1$, not to $x = -1$.`,
    ],
    answer: 0 },

  // 8.11 Washer method about the x- or y-axis
  { id: "c8r-m29", type: "mcq", skill: "u8", topic: "8.11", calc: false, difficulty: "moderate",
    stem: String.raw`The region enclosed by the graphs of $y = 3x - x^2$ and $y = x$ is revolved about the $x$-axis.`,
    question: "What is the volume of the solid generated?",
    choices: [String.raw`$\frac{56\pi}{15}$`, String.raw`$\frac{16\pi}{15}$`, String.raw`$\frac{4\pi}{3}$`, String.raw`$\frac{56}{15}$`],
    why: [
      String.raw`The graphs meet where $3x - x^2 = x$, at $x = 0$ and $x = 2$, and the parabola is on top between them. The outer radius is $3x - x^2$ and the inner radius is $x$, so the volume is $\pi\displaystyle\int_0^2 \left(\left(3x - x^2\right)^2 - x^2\right)dx = \pi\displaystyle\int_0^2 \left(8x^2 - 6x^3 + x^4\right)dx = \pi\left(\dfrac{64}{3} - 24 + \dfrac{32}{5}\right) = \dfrac{56\pi}{15}$.`,
      String.raw`This is $\pi\displaystyle\int_0^2 \left(\left(3x - x^2\right) - x\right)^2 dx$, which squares the difference of the radii. A washer's area is $\pi\left(R^2 - r^2\right)$, not $\pi(R - r)^2$.`,
      String.raw`This is $\pi\displaystyle\int_0^2 \left(\left(3x - x^2\right) - x\right)dx$. Neither radius was squared.`,
      String.raw`This leaves out the factor $\pi$ in the area of a washer.`,
    ],
    answer: 0 },
  { id: "c8r-m30", type: "mcq", skill: "u8", topic: "8.11", calc: false, difficulty: "moderate",
    stem: String.raw`The region in the first quadrant enclosed by the graphs of $y = \sqrt{x}$ and $y = \dfrac{x^2}{8}$ is revolved about the $y$-axis.`,
    question: "Which of the following gives the volume of the solid generated?",
    choices: [
      String.raw`$\displaystyle\pi\int_0^2 \left(8y - y^4\right)dy$`,
      String.raw`$\displaystyle\pi\int_0^4 \left(x - \frac{x^4}{64}\right)dx$`,
      String.raw`$\displaystyle\pi\int_0^2 \left(\sqrt{8y} - y^2\right)^2 dy$`,
      String.raw`$\displaystyle\pi\int_0^4 \left(8y - y^4\right)dy$`,
    ],
    why: [
      String.raw`The graphs meet where $\sqrt{x} = \dfrac{x^2}{8}$, at $(0, 0)$ and $(4, 2)$. In terms of $y$, the curves are $x = y^2$ and $x = \sqrt{8y}$, and for $0 < y < 2$, $\sqrt{8y} > y^2$. The outer radius is $\sqrt{8y}$ and the inner radius is $y^2$, so the volume is $\pi\displaystyle\int_0^2 \left(\left(\sqrt{8y}\right)^2 - \left(y^2\right)^2\right)dy = \pi\displaystyle\int_0^2 \left(8y - y^4\right)dy$.`,
      String.raw`This is the washer integral for revolving the region about the $x$-axis.`,
      String.raw`This squares the difference of the radii instead of subtracting the squares of the radii.`,
      String.raw`This uses the $x$-values $0$ and $4$ as the limits of an integral in $y$. The region runs from $y = 0$ to $y = 2$.`,
    ],
    answer: 0 },
  { id: "c8r-m31", type: "mcq", skill: "u8", topic: "8.11", calc: true, difficulty: "moderate", set: "c8r-s2",
    question: String.raw`The region $R$ is revolved about the $x$-axis. What is the volume of the solid generated?`,
    choices: ["$65.725$", "$55.604$", "$20.921$", "$69.555$"],
    why: [
      String.raw`On $-1.250 \le x \le 1.250$, the outer radius is $f(x) = \dfrac{4}{1 + x^2}$ and the inner radius is $g(x) = x^2$. The volume is $\pi\displaystyle\int_{-1.250}^{1.250} \left(\left(\dfrac{4}{1 + x^2}\right)^2 - x^4\right)dx = 65.725$.`,
      String.raw`This is $\pi\displaystyle\int \left(f(x) - g(x)\right)^2 dx$, which squares the difference of the radii.`,
      String.raw`This leaves out the factor $\pi$ in the area of a washer.`,
      String.raw`This is $\pi\displaystyle\int \left(f(x)\right)^2 dx$, which leaves out the hole made by $g$.`,
    ],
    answer: 0 },

  // 8.12 Washer method about other axes
  { id: "c8r-m32", type: "mcq", skill: "u8", topic: "8.12", calc: false, difficulty: "moderate",
    stem: String.raw`The region bounded by the graph of $y = \dfrac{2}{x}$, the $x$-axis, and the lines $x = 1$ and $x = 2$ is revolved about the line $y = -1$.`,
    question: "What is the volume of the solid generated?",
    choices: [String.raw`$\pi\left(2 + 4\ln 2\right)$`, String.raw`$\pi\left(3 + 4\ln 2\right)$`, String.raw`$\pi\left(2 - 4\ln 2\right)$`, String.raw`$\pi\left(2\ln 2\right)$`],
    why: [
      String.raw`Measured from $y = -1$, the outer radius is $\dfrac{2}{x} + 1$ and the inner radius is $0 + 1 = 1$. The volume is $\pi\displaystyle\int_1^2 \left(\left(\dfrac{2}{x} + 1\right)^2 - 1\right)dx = \pi\displaystyle\int_1^2 \left(\dfrac{4}{x^2} + \dfrac{4}{x}\right)dx = \pi\Big[-\dfrac{4}{x} + 4\ln x\Big]_1^2 = \pi\left(2 + 4\ln 2\right)$.`,
      String.raw`This is $\pi\displaystyle\int_1^2 \left(\dfrac{2}{x} + 1\right)^2 dx$, which leaves out the hole. The region does not touch the line $y = -1$, so the solid has a hole of radius $1$.`,
      String.raw`This uses radii $\dfrac{2}{x} - 1$ and $1$, as if the axis were the line $y = 1$. Its value is negative, which no volume can be.`,
      String.raw`This is $\pi\displaystyle\int_1^2 \left(\left(\dfrac{2}{x} + 1\right) - 1\right)dx$. Neither radius was squared.`,
    ],
    answer: 0 },
  { id: "c8r-m33", type: "mcq", skill: "u8", topic: "8.12", calc: false, difficulty: "easy",
    stem: String.raw`Let $R$ be the region bounded by the graph of $y = \sqrt{x}$, the $x$-axis, and the line $x = 4$. The region $R$ is revolved about the line $y = -2$.`,
    question: "Which of the following gives the volume of the solid generated?",
    choices: [
      String.raw`$\displaystyle\pi\int_0^4 \left(\left(\sqrt{x} + 2\right)^2 - 4\right)dx$`,
      String.raw`$\displaystyle\pi\int_0^4 \left(\left(\sqrt{x} - 2\right)^2 - 4\right)dx$`,
      String.raw`$\displaystyle\pi\int_0^4 \left(\sqrt{x} + 2\right)^2 dx$`,
      String.raw`$\displaystyle\pi\int_0^4 \left(x + 4\right)dx$`,
    ],
    why: [
      String.raw`Vertical washers at $x$ run from $y = 0$ to $y = \sqrt{x}$. Their distances from $y = -2$ are $2$ and $\sqrt{x} + 2$, so the inner radius is $2$ and the outer radius is $\sqrt{x} + 2$.`,
      String.raw`This measures the outer radius as $\sqrt{x} - 2$, the distance to the line $y = 2$. The distance from $y = \sqrt{x}$ to $y = -2$ is $\sqrt{x} + 2$.`,
      String.raw`This leaves out the inner radius. The region does not touch the axis $y = -2$, so the solid has a hole of radius $2$.`,
      String.raw`This squares each radius term by term, writing $\left(\sqrt{x} + 2\right)^2$ as $x + 4$, and leaves out the hole.`,
    ],
    answer: 0 },
  { id: "c8r-m34", type: "mcq", skill: "u8", topic: "8.12", calc: true, difficulty: "moderate", set: "c8r-s2",
    question: String.raw`The region $R$ is revolved about the line $y = -1$. What is the volume of the solid generated?`,
    choices: ["$102.585$", "$28.866$", "$65.725$", "$55.604$"],
    why: [
      String.raw`The outer radius is $f(x) + 1$ and the inner radius is $g(x) + 1 = x^2 + 1$. The volume is $\pi\displaystyle\int_{-1.250}^{1.250} \left(\left(\dfrac{4}{1 + x^2} + 1\right)^2 - \left(x^2 + 1\right)^2\right)dx = 102.585$.`,
      String.raw`This uses $f(x) - 1$ and $g(x) - 1$ as the radii, subtracting $1$ instead of adding it. The distance from a point at height $y$ to the line $y = -1$ is $y + 1$.`,
      String.raw`This is the volume for revolving $R$ about the $x$-axis, with radii $f(x)$ and $g(x)$.`,
      String.raw`This is $\pi\displaystyle\int \left(\left(f(x) + 1\right) - \left(g(x) + 1\right)\right)^2 dx$, which squares the difference of the radii.`,
    ],
    answer: 0 },

  { id: "c8r-m35", type: "mcq", skill: "u8", topic: "8.1", calc: false, difficulty: "moderate", set: "c8r-s11",
    question: String.raw`Using a midpoint Riemann sum with two subintervals of equal length, what is the approximate average temperature of the water, in degrees Celsius, over the interval $0 \le h \le 8$?`,
    choices: ["$18$", "$144$", "$17.6$", "$17.75$"],
    why: [
      String.raw`The two subintervals are $[0, 4]$ and $[4, 8]$, with midpoints $h = 2$ and $h = 6$. So $\displaystyle\int_0^8 W(h)\,dh \approx 4(15) + 4(21) = 144$, and the average value is about $\dfrac{144}{8} = 18$ degrees Celsius.`,
      String.raw`This is the estimate of $\displaystyle\int_0^8 W(h)\,dh$ without dividing by the length of the interval, $8$.`,
      String.raw`This is the average of the five values in the table, $\dfrac{14 + 15 + 18 + 21 + 20}{5}$. The question asks for the average value from a midpoint sum.`,
      String.raw`This uses a trapezoidal sum with four subintervals, $\dfrac{2}{2}\left(14 + 2(15) + 2(18) + 2(21) + 20\right) = 142$, divided by $8$. The question asks for a midpoint sum with two subintervals.`,
    ],
    answer: 0 },
  { id: "c8r-m36", type: "mcq", skill: "u8", topic: "8.3", calc: false, difficulty: "difficult", set: "c8r-s12",
    question: String.raw`Using a trapezoidal sum with the four subintervals indicated by the table to approximate $\displaystyle\int_0^{10} D(t)\,dt$, what is the approximate amount of water, in liters, in the tank at time $t = 10$?`,
    choices: ["$171$", "$51$", "$191$", "$469$"],
    why: [
      String.raw`The trapezoidal sum is $2 \cdot \dfrac{8 + 11}{2} + 3 \cdot \dfrac{11 + 15}{2} + 4 \cdot \dfrac{15 + 20}{2} + 1 \cdot \dfrac{20 + 22}{2} = 19 + 39 + 70 + 21 = 149$. Water pumped in is $12 \cdot 10 = 120$ liters, so the amount at $t = 10$ is about $200 + 120 - 149 = 171$ liters.`,
      String.raw`This is $200 - 149$, which leaves out the $120$ liters pumped into the tank.`,
      String.raw`This uses a left Riemann sum, $2(8) + 3(11) + 4(15) + 1(20) = 129$, for the water drained. The question asks for a trapezoidal sum.`,
      String.raw`This adds the water that drained out, $200 + 120 + 149$. Draining removes water from the tank, so it is subtracted.`,
    ],
    answer: 0 },
  { id: "c8r-m37", type: "mcq", skill: "u8", topic: "8.5", calc: false, difficulty: "difficult", set: "c8r-s6",
    stem: String.raw`Consider the following expressions.

I. $\displaystyle\int_0^4 \left(6 - y - \sqrt{y}\right)dy$

II. $\displaystyle\int_0^2 x^2\,dx + \int_2^6 (6 - x)\,dx$

III. $\displaystyle\int_0^6 \left(6 - x - x^2\right)dx$`,
    question: String.raw`Which of the expressions above give the area of $R$?`,
    choices: ["I and II only", "I only", "II only", "I, II, and III"],
    why: [
      String.raw`I uses horizontal strips from $x = \sqrt{y}$ to $x = 6 - y$ for $0 \le y \le 4$. II uses vertical strips, split at $x = 2$ where the top boundary changes from the curve to the line. Both equal $\dfrac{32}{3}$. III subtracts the curve from the line over all of $[0, 6]$, but the region is bounded below by the $x$-axis, and the integral equals $-54$.`,
      String.raw`II is also correct. With vertical strips the top boundary is $y = x^2$ for $0 \le x \le 2$ and $y = 6 - x$ for $2 \le x \le 6$, so the area splits into those two integrals.`,
      String.raw`I is also correct. Solving each boundary for $x$ gives $x = \sqrt{y}$ and $x = 6 - y$, and right minus left over $0 \le y \le 4$ gives the area.`,
      String.raw`III is not correct. The region is bounded below by the $x$-axis, not by the curve, and for $x > 2$ the curve is above the line. Its value is $-54$, which cannot be an area.`,
    ],
    answer: 0 },
  { id: "c8r-m38", type: "mcq", skill: "u8", topic: "8.9", calc: false, difficulty: "moderate", set: "c8r-s13",
    question: String.raw`The region $R$ is revolved about the $x$-axis. What is the volume of the solid generated?`,
    choices: [String.raw`$\frac{32\pi}{3}$`, String.raw`$6\pi$`, String.raw`$16\pi$`, String.raw`$\frac{56\pi}{3}$`],
    why: [
      String.raw`From the graph, $f(x) = 2$ on $0 \le x \le 2$ and $f(x) = 4 - x$ on $2 \le x \le 4$. The volume is $\pi\displaystyle\int_0^2 2^2\,dx + \pi\int_2^4 (4 - x)^2\,dx = 8\pi + \dfrac{8\pi}{3} = \dfrac{32\pi}{3}$, a cylinder and a cone.`,
      String.raw`This is $\pi\displaystyle\int_0^4 f(x)\,dx = \pi(4 + 2)$, which uses the radius instead of its square.`,
      String.raw`This is $\pi\displaystyle\int_0^4 2^2\,dx$, which treats the radius as $2$ on the whole interval. On $2 \le x \le 4$ the radius is $4 - x$.`,
      String.raw`This is $\pi\displaystyle\int_0^2 (4 - y)^2\,dy$, discs about the $y$-axis. The region is revolved about the $x$-axis.`,
    ],
    answer: 0 },
  { id: "c8r-m39", type: "mcq", skill: "u8", topic: "8.4", calc: false, difficulty: "difficult", set: "c8r-s14",
    question: String.raw`What is the area of the region enclosed by the graphs of $f$ and $g$?`,
    choices: [String.raw`$\frac{9}{2}$`, String.raw`$\frac{27}{2}$`, String.raw`$-\frac{9}{2}$`, String.raw`$\frac{32}{3}$`],
    why: [
      String.raw`The parabola has $x$-intercepts $-1$ and $3$ and passes through $(1, 4)$, so $f(x) = -(x + 1)(x - 3) = -x^2 + 2x + 3$. The line through $(-1, 0)$ and $(2, 3)$ is $g(x) = x + 1$. They meet at $x = -1$ and $x = 2$, so the area is $\displaystyle\int_{-1}^{2} \left(-x^2 + x + 2\right)dx = \Big[-\dfrac{x^3}{3} + \dfrac{x^2}{2} + 2x\Big]_{-1}^{2} = \dfrac{10}{3} + \dfrac{7}{6} = \dfrac{9}{2}$.`,
      String.raw`This is $\displaystyle\int_{-1}^{2} \left(f(x) + g(x)\right)dx$, which adds $g$ instead of subtracting it.`,
      String.raw`This is $\displaystyle\int_{-1}^{2} \left(g(x) - f(x)\right)dx$, the lower graph minus the upper one, so the value is negative.`,
      String.raw`This is $\displaystyle\int_{-1}^{3} f(x)\,dx$, the area between the parabola and the $x$-axis. The region is bounded below by $g$, not the $x$-axis, and ends at $x = 2$, where the graphs cross.`,
    ],
    answer: 0 },
  { id: "c8r-m40", type: "mcq", skill: "u8", topic: "8.12", calc: false, difficulty: "moderate", set: "c8r-s15",
    question: String.raw`The region $R$ is revolved about the line $\ell$. What is the volume of the solid generated?`,
    choices: [String.raw`$24\pi$`, String.raw`$\frac{40\pi}{3}$`, String.raw`$\frac{184\pi}{3}$`, String.raw`$\frac{56\pi}{3}$`],
    why: [
      String.raw`From the figure, $R$ lies between $y = 1$ and $y = 1 + \sqrt{x}$ for $0 \le x \le 4$, and $\ell$ is the line $y = 4$, above $R$. The outer radius is $4 - 1 = 3$ and the inner radius is $4 - \left(1 + \sqrt{x}\right) = 3 - \sqrt{x}$. The volume is $\pi\displaystyle\int_0^4 \left(9 - \left(3 - \sqrt{x}\right)^2\right)dx = \pi\displaystyle\int_0^4 \left(6\sqrt{x} - x\right)dx = \pi(32 - 8) = 24\pi$.`,
      String.raw`This is $\pi\displaystyle\int_0^4 \left(9 - \left(1 + \sqrt{x}\right)^2\right)dx$, which uses the height of the curve, $1 + \sqrt{x}$, as the inner radius. The inner radius is the distance from the curve up to $\ell$, $4 - \left(1 + \sqrt{x}\right)$.`,
      String.raw`This uses radii $5 + \sqrt{x}$ and $5$, the distances to the line $y = -4$. The line $\ell$ is $y = 4$, above the region, so each radius is $4$ minus a height.`,
      String.raw`This is the volume for revolving $R$ about the $x$-axis, with radii $1 + \sqrt{x}$ and $1$.`,
    ],
    answer: 0 },

  // Free response 1: cars in a parking garage (calculator)
  { id: "c8r-f1a", type: "frq", skill: "u8", topic: "8.3", calc: true, set: "c8r-s9", part: "(a)",
    prompt: String.raw`How many cars enter the garage from $t = 0$ to $t = 12$?`,
    rows: [
      { name: "Integral", earns: String.raw`$\displaystyle\int_0^{12} E(t)\,dt$` },
      { name: "Answer", earns: String.raw`$1025.577$ cars` },
    ],
    solution: String.raw`$$\int_0^{12} E(t)\,dt = 1025.577$$

About $1025.577$ cars enter the garage from $t = 0$ to $t = 12$.` },
  { id: "c8r-f1b", type: "frq", skill: "u8", topic: "8.3", calc: true, set: "c8r-s9", part: "(b)",
    prompt: String.raw`Is the number of cars in the garage increasing or decreasing at time $t = 8$? Give a reason for your answer.`,
    rows: [
      { name: "Answer with reason", earns: String.raw`Increasing, because $E(8) - L(8) = 14.641 > 0$.` },
    ],
    solution: String.raw`Let $N(t)$ be the number of cars in the garage. Then $N'(t) = E(t) - L(t)$.

$N'(8) = E(8) - L(8) = 94.641 - 80 = 14.641 > 0$, so the number of cars is increasing at $t = 8$.` },
  { id: "c8r-f1c", type: "frq", skill: "u8", topic: "8.3", calc: true, set: "c8r-s9", part: "(c)",
    prompt: String.raw`At what time $t$, for $0 \le t \le 12$, is the number of cars in the garage greatest? Justify your answer.`,
    rows: [
      { name: "Sets rate to zero", earns: String.raw`Considers $N'(t) = E(t) - L(t) = 0$.` },
      { name: "Answer", earns: String.raw`$t = 8.901$` },
      { name: "Justification", earns: String.raw`Compares $N(0) = 120$, $N(8.901) = 515.912$, and $N(12) = 425.577$, or explains that $N'$ changes from positive to negative at $t = 8.901$ and this is its only zero on the interval.` },
    ],
    solution: String.raw`$N(t) = 120 + \displaystyle\int_0^t \left(E(s) - L(s)\right)ds$, so $N'(t) = E(t) - L(t)$.

$E(t) - L(t) = 0$ on $0 < t < 12$ only at $t = 8.901$. Check the candidates:

$N(0) = 120$

$N(8.901) = 120 + \displaystyle\int_0^{8.901} \left(E(t) - L(t)\right)dt = 515.912$

$N(12) = 120 + \displaystyle\int_0^{12} \left(E(t) - L(t)\right)dt = 425.577$

The number of cars in the garage is greatest at $t = 8.901$ hours.` },

  // Free response 2: the region between a parabola and a line (no calculator)
  { id: "c8r-f2a", type: "frq", skill: "u8", topic: "8.4", calc: false, set: "c8r-s7", part: "(a)",
    prompt: String.raw`Find the area of $R$.`,
    rows: [
      { name: "Integral", earns: String.raw`$\displaystyle\int_0^4 \left((2x + 2) - \left(x^2 - 2x + 2\right)\right)dx$` },
      { name: "Answer", earns: String.raw`$\dfrac{32}{3}$` },
    ],
    solution: String.raw`The graphs meet where $2x + 2 = x^2 - 2x + 2$, so $x^2 - 4x = 0$ and $x = 0$ or $x = 4$. On $0 < x < 4$, $f(x) - g(x) = 4x - x^2 = x(4 - x) > 0$.

$$\int_0^4 \left(4x - x^2\right)dx = \left[2x^2 - \frac{x^3}{3}\right]_0^4 = 32 - \frac{64}{3} = \frac{32}{3}$$` },
  { id: "c8r-f2b", type: "frq", skill: "u8", topic: "8.7", calc: false, set: "c8r-s7", part: "(b)",
    prompt: String.raw`The region $R$ is the base of a solid. For this solid, each cross section perpendicular to the $x$-axis is a square. Find the volume of the solid.`,
    rows: [
      { name: "Integral", earns: String.raw`$\displaystyle\int_0^4 \left(4x - x^2\right)^2 dx$` },
      { name: "Answer", earns: String.raw`$\dfrac{512}{15}$` },
    ],
    solution: String.raw`The side of the square at $x$ is $f(x) - g(x) = 4x - x^2$.

$$\int_0^4 \left(4x - x^2\right)^2 dx = \int_0^4 \left(16x^2 - 8x^3 + x^4\right)dx = \left[\frac{16x^3}{3} - 2x^4 + \frac{x^5}{5}\right]_0^4 = \frac{1024}{3} - 512 + \frac{1024}{5} = \frac{512}{15}$$` },
  { id: "c8r-f2c", type: "frq", skill: "u8", topic: "8.12", calc: false, set: "c8r-s7", part: "(c)",
    prompt: String.raw`Write, but do not evaluate, an integral expression for the volume of the solid generated when $R$ is revolved about the line $y = -1$.`,
    rows: [
      { name: "Limits and constant", earns: String.raw`$\pi\displaystyle\int_0^4$ with an integrand of the form $(\text{outer radius})^2 - (\text{inner radius})^2$` },
      { name: "Outer radius", earns: String.raw`Outer radius $2x + 3$` },
      { name: "Inner radius", earns: String.raw`Inner radius $x^2 - 2x + 3$` },
    ],
    solution: String.raw`The distance from the graph of $f$ to the line $y = -1$ is $f(x) + 1$, and the distance from the graph of $g$ to $y = -1$ is $g(x) + 1$. Since $f(x) \ge g(x) > 0$ on $0 \le x \le 4$, the outer radius is $2x + 3$ and the inner radius is $x^2 - 2x + 3$.

$$\pi\int_0^4 \left((2x + 3)^2 - \left(x^2 - 2x + 3\right)^2\right)dx$$` },

  // Free response 3: a particle on the x-axis (calculator)
  { id: "c8r-f3a", type: "frq", skill: "u8", topic: "8.2", calc: true, set: "c8r-s10", part: "(a)",
    prompt: String.raw`Find the position of the particle at time $t = 5$.`,
    rows: [
      { name: "Integral with initial condition", earns: String.raw`$-3 + \displaystyle\int_0^5 v(t)\,dt$` },
      { name: "Answer", earns: String.raw`$x(5) = 4.553$` },
    ],
    solution: String.raw`$$x(5) = x(0) + \int_0^5 v(t)\,dt = -3 + 7.553 = 4.553$$

The particle is at $x = 4.553$ meters at $t = 5$.` },
  { id: "c8r-f3b", type: "frq", skill: "u8", topic: "8.2", calc: true, set: "c8r-s10", part: "(b)",
    prompt: String.raw`Find the total distance the particle travels from $t = 0$ to $t = 5$.`,
    rows: [
      { name: "Integral", earns: String.raw`$\displaystyle\int_0^5 \left|v(t)\right|dt$` },
      { name: "Answer", earns: String.raw`$14.565$ meters` },
    ],
    solution: String.raw`$$\int_0^5 \left|v(t)\right|dt = 14.565$$

The particle travels $14.565$ meters.` },
  { id: "c8r-f3c", type: "frq", skill: "u8", topic: "8.2", calc: true, set: "c8r-s10", part: "(c)",
    prompt: String.raw`At what time $t$, for $0 < t < 5$, does the particle change direction? Give a reason for your answer. Find the position of the particle at that time.`,
    rows: [
      { name: "Time with reason", earns: String.raw`$t = 3.545$, because $v(t)$ changes sign from positive to negative there.` },
      { name: "Position", earns: String.raw`$x(3.545) = 8.059$` },
    ],
    solution: String.raw`$v(t) = 0$ when $\dfrac{t^2}{8} = \dfrac{\pi}{2}$, so $t = 2\sqrt{\pi} = 3.545$. The next zero would be at $\dfrac{t^2}{8} = \dfrac{3\pi}{2}$, or $t = 6.140$, which is outside the interval. The velocity changes from positive to negative at $t = 3.545$, so the particle changes direction there.

$$x(3.545) = -3 + \int_0^{3.545} v(t)\,dt = -3 + 11.059 = 8.059$$` },
];

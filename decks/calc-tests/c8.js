import { graph } from "../../plot.js";

// c8t-s1: f(x) = 2cos x and g(x) = x^2 - 1 meet at x = ±1.265.
const s1Graph = graph({
  x: [-2, 2], y: [-2, 3], step: { x: 0.5, y: 1 }, labelEvery: 2, xname: "x", yname: "y",
  fns: [{ f: (x) => 2 * Math.cos(x), label: "f", labelAt: -0.5 }, { f: (x) => x * x - 1, label: "g", labelAt: 1.7 }],
  labels: [[-0.15, 0.4, "R"]],
  alt: "The graphs of f(x) = 2cos x and g(x) = x^2 - 1. They intersect at two points, near x = -1.265 and x = 1.265. The region R lies between them, with the graph of f above the graph of g. Part of R is below the x-axis, but all of R is above the line y = -2.",
});

// c8t-s2 (free response): f(x) = 4 ln(x + 1) and g(x) = x^2/2 meet at x = 0 and x = 3.458.
const s2Graph = graph({
  x: [0, 4], y: [-0.5, 7], step: { x: 0.5, y: 1 }, labelEvery: 2, xname: "x", yname: "y",
  fns: [{ f: (x) => 4 * Math.log(x + 1), label: "f", labelAt: 1.3 }, { f: (x) => (x * x) / 2, label: "g", labelAt: 3.6 }],
  dots: [[0, 0, "closed"], [3.458, 5.9789, "closed"]],
  labels: [[1.6, 2.6, "R"]],
  alt: "The graphs of f(x) = 4 ln(x + 1) and g(x) = x^2/2 for x from 0 to 4. They intersect at the origin and near x = 3.458. The region R lies between them for x from 0 to 3.458, with the graph of f above the graph of g, and R is above the x-axis.",
});

// c8t-s3 (free response): E(t) through (0, 1), (2, 5), (6, 5), (8, 1).
const s3Graph = graph({
  x: [0, 8], y: [0, 6], xname: "t", yname: "E(t)",
  segments: [[0, 1, 2, 5], [2, 5, 6, 5], [6, 5, 8, 1]],
  dots: [[0, 1, "closed"], [8, 1, "closed"]],
  hlines: [{ y: 3, dash: true }],
  alt: "Graph of E(t) for 0 to 8 minutes, made of three line segments: from (0, 1) up to (2, 5), level at 5 from (2, 5) to (6, 5), then down from (6, 5) to (8, 1). A dashed horizontal line at height 3 crosses the graph at t = 1 and t = 7.",
});

export const sets = {
  "c8t-s1": { name: "The region R between f and g", label: "Graph", intro: String.raw`Let $f(x) = 2\cos x$ and $g(x) = x^2 - 1$. Let $R$ be the region enclosed by the graphs of $f$ and $g$, shown below.`,
    sources: [{ title: "", blocks: [{ svg: s1Graph }] }] },
  "c8t-s2": { name: "A region between a logarithm and a parabola", label: "Free response", intro: String.raw`Let $f(x) = 4\ln(x + 1)$ and $g(x) = \dfrac{x^2}{2}$. Let $R$ be the region in the first quadrant enclosed by the graphs of $f$ and $g$, shown below.`,
    sources: [{ title: "", blocks: [{ svg: s2Graph }, { p: String.raw`A graphing calculator is allowed. Give decimal answers to three decimal places.` }] }] },
  "c8t-s3": { name: "Water in a tank", label: "Free response", intro: String.raw`A tank contains $20$ liters of water at time $t = 0$. For $0 \le t \le 8$ minutes, water flows into the tank at a rate of $E(t)$ liters per minute, where the graph of $E$ consists of three line segments, as shown below. Water drains out of the tank at a constant rate of $3$ liters per minute. Let $A(t)$ be the number of liters of water in the tank at time $t$.`,
    sources: [{ title: "", blocks: [{ svg: s3Graph }, { p: String.raw`Answer each part without a calculator. Show the work that leads to each answer.` }] }] },
};

const items = [
  // Multiple choice, no calculator
  { id: "c8t-m01", type: "mcq", skill: "u8", topic: "8.1", calc: false,
    question: String.raw`What is the average value of $e^{2x}$ on the interval $0 \le x \le \ln 3$?`,
    choices: [String.raw`$\frac{4}{\ln 3}$`, "$4$", "$5$", String.raw`$\frac{8}{\ln 3}$`],
    why: [
      String.raw`$\displaystyle\int_0^{\ln 3} e^{2x}\,dx = \Big[\dfrac{e^{2x}}{2}\Big]_0^{\ln 3} = \dfrac{9 - 1}{2} = 4$. The average value is $\dfrac{1}{\ln 3 - 0} \cdot 4 = \dfrac{4}{\ln 3}$.`,
      String.raw`This is $\displaystyle\int_0^{\ln 3} e^{2x}\,dx$ without dividing by the length of the interval, $\ln 3$.`,
      String.raw`This is the average of the endpoint values, $\dfrac{e^{0} + e^{2\ln 3}}{2} = \dfrac{1 + 9}{2}$.`,
      String.raw`This is the average rate of change, $\dfrac{9 - 1}{\ln 3}$, not the average value.`,
    ],
    answer: 0 },
  { id: "c8t-m02", type: "mcq", skill: "u8", topic: "8.1", calc: false,
    stem: String.raw`The average value of a continuous function $f$ on the interval $1 \le x \le 5$ is $3$.`,
    question: String.raw`What is the value of $\displaystyle\int_1^5 \left(2f(x) + 1\right)dx$?`,
    choices: ["$28$", "$7$", "$25$", "$24$"],
    why: [
      String.raw`$\displaystyle\int_1^5 f(x)\,dx = (5 - 1)(3) = 12$. So $\displaystyle\int_1^5 \left(2f(x) + 1\right)dx = 2(12) + \int_1^5 1\,dx = 24 + 4 = 28$.`,
      String.raw`This is $2(3) + 1$, the average value of $2f(x) + 1$, not its integral.`,
      String.raw`This is $2(12) + 1$. The integral of the constant $1$ over an interval of length $4$ is $4$.`,
      String.raw`This is $2(12)$, which leaves out the integral of the constant $1$.`,
    ],
    answer: 0 },
  { id: "c8t-m03", type: "mcq", skill: "u8", topic: "8.2", calc: false,
    stem: String.raw`A particle moves along the $x$-axis with acceleration $a(t) = 12t - 6$. At time $t = 0$, its velocity is $-1$ and its position is $x = 3$.`,
    question: String.raw`What is the position of the particle at $t = 2$?`,
    choices: ["$5$", "$2$", "$11$", "$7$"],
    why: [
      String.raw`$v(t) = -1 + \displaystyle\int_0^t (12s - 6)\,ds = 6t^2 - 6t - 1$, and $x(2) = 3 + \displaystyle\int_0^2 \left(6t^2 - 6t - 1\right)dt = 3 + (16 - 12 - 2) = 5$.`,
      String.raw`This is the displacement $\displaystyle\int_0^2 v(t)\,dt$, without adding the starting position $x(0) = 3$.`,
      String.raw`This is the velocity at $t = 2$, $v(2) = 24 - 12 - 1$, not the position.`,
      String.raw`This leaves out the initial velocity, using $v(t) = 6t^2 - 6t$, so the displacement is $4$ instead of $2$.`,
    ],
    answer: 0 },
  { id: "c8t-m04", type: "mcq", skill: "u8", topic: "8.3", calc: false,
    stem: String.raw`A computer downloads a file at a rate of $r(t)$ megabytes per second, where $t$ is measured in seconds. At time $t = 0$, $50$ megabytes of the file have already been downloaded.`,
    question: String.raw`Which of the following is the best interpretation of $50 + \displaystyle\int_0^{30} r(t)\,dt$?`,
    choices: [
      String.raw`The number of megabytes of the file downloaded by time $t = 30$ seconds`,
      String.raw`The rate, in megabytes per second, at which the file is downloading at time $t = 30$ seconds`,
      String.raw`The average rate, in megabytes per second, at which the file downloads during the first $30$ seconds`,
      String.raw`The number of megabytes downloaded during the first $30$ seconds`,
    ],
    why: [
      String.raw`$\displaystyle\int_0^{30} r(t)\,dt$ is the number of megabytes downloaded from $t = 0$ to $t = 30$. Adding the $50$ megabytes downloaded before $t = 0$ gives the total downloaded by $t = 30$.`,
      String.raw`That rate is $r(30)$. The integral accumulates the rate into an amount.`,
      String.raw`The average rate is $\dfrac{1}{30}\displaystyle\int_0^{30} r(t)\,dt$, with no $50$ added.`,
      String.raw`That is $\displaystyle\int_0^{30} r(t)\,dt$ alone. The expression also includes the $50$ megabytes downloaded before $t = 0$.`,
    ],
    answer: 0 },
  { id: "c8t-m05", type: "mcq", skill: "u8", topic: "8.4", calc: false,
    question: String.raw`What is the area of the region enclosed by the graphs of $y = x^2$ and $y = 8 - x^2$?`,
    choices: [String.raw`$\frac{64}{3}$`, String.raw`$\frac{32}{3}$`, String.raw`$\frac{80}{3}$`, String.raw`$\frac{16}{3}$`],
    why: [
      String.raw`The graphs meet where $x^2 = 8 - x^2$, at $x = \pm 2$. The area is $\displaystyle\int_{-2}^{2} \left(8 - 2x^2\right)dx = 32 - \dfrac{32}{3} = \dfrac{64}{3}$.`,
      String.raw`This integrates only from $0$ to $2$, which is half of the region.`,
      String.raw`This is $\displaystyle\int_{-2}^{2} \left(8 - x^2\right)dx$, which does not subtract the lower curve $y = x^2$.`,
      String.raw`This is $\displaystyle\int_{-2}^{2} x^2\,dx$, the area under the lower curve.`,
    ],
    answer: 0 },
  { id: "c8t-m06", type: "mcq", skill: "u8", topic: "8.5", calc: false,
    question: String.raw`What is the area of the region enclosed by the graphs of $x = y^2 - 6$ and $x = 2y + 2$?`,
    choices: ["$36$", "$12$", String.raw`$\frac{80}{3}$`, "$-36$"],
    why: [
      String.raw`The graphs meet where $y^2 - 6 = 2y + 2$, so $y^2 - 2y - 8 = (y - 4)(y + 2) = 0$ and $y = -2$ or $y = 4$. Using right minus left, the area is $\displaystyle\int_{-2}^{4} \left(8 + 2y - y^2\right)dy = \Big[8y + y^2 - \dfrac{y^3}{3}\Big]_{-2}^{4} = \dfrac{80}{3} + \dfrac{28}{3} = 36$.`,
      String.raw`This uses the limits $y = -4$ and $y = 2$, from a sign error in factoring $y^2 - 2y - 8$.`,
      String.raw`This integrates only from $y = 0$ to $y = 4$, which leaves out the part of the region below the $x$-axis.`,
      String.raw`This subtracts in the wrong order, left curve minus right curve. An area is positive.`,
    ],
    answer: 0 },
  { id: "c8t-m07", type: "mcq", skill: "u8", topic: "8.6", calc: false,
    question: String.raw`What is the total area of the regions enclosed by the graphs of $y = x^3 - x$ and $y = 3x$?`,
    choices: ["$8$", "$0$", "$4$", "$5$"],
    why: [
      String.raw`The graphs meet where $x^3 - x = 3x$, so $x\left(x^2 - 4\right) = 0$ and $x = -2$, $0$, or $2$. On $-2 < x < 0$, $x^3 - x$ is above $3x$; on $0 < x < 2$, $3x$ is above. The area is $\displaystyle\int_{-2}^{0} \left(x^3 - 4x\right)dx + \int_0^2 \left(4x - x^3\right)dx = 4 + 4 = 8$.`,
      String.raw`This is $\displaystyle\int_{-2}^{2} \left(4x - x^3\right)dx$. The upper curve switches at $x = 0$, so the two regions cancel in one integral.`,
      String.raw`This is the area of only one of the two regions.`,
      String.raw`This is $\displaystyle\int_{-2}^{2} \left|x^3 - x\right|dx$, the area between the cubic and the $x$-axis, which leaves out the line $y = 3x$.`,
    ],
    answer: 0 },
  { id: "c8t-m08", type: "mcq", skill: "u8", topic: "8.7", calc: false,
    stem: String.raw`The base of a solid is the region bounded by the graph of $y = \dfrac{1}{\sqrt{x}}$, the $x$-axis, and the lines $x = 1$ and $x = 4$. Cross sections of the solid perpendicular to the $x$-axis are squares.`,
    question: "What is the volume of the solid?",
    choices: [String.raw`$\ln 4$`, "$2$", String.raw`$\pi\ln 4$`, String.raw`$\ln 2$`],
    why: [
      String.raw`The square at $x$ has side $\dfrac{1}{\sqrt{x}}$ and area $\dfrac{1}{x}$. The volume is $\displaystyle\int_1^4 \dfrac{1}{x}\,dx = \ln 4 - \ln 1 = \ln 4$.`,
      String.raw`This is $\displaystyle\int_1^4 x^{-1/2}\,dx = \Big[2\sqrt{x}\Big]_1^4$, the area of the base. The side length must be squared.`,
      String.raw`This is $\pi\displaystyle\int_1^4 \dfrac{1}{x}\,dx$, the disc method. The cross sections are squares, not circles.`,
      String.raw`This uses $\dfrac{1}{2}s^2$, the area of an isosceles right triangle with a leg in the base.`,
    ],
    answer: 0 },
  { id: "c8t-m09", type: "mcq", skill: "u8", topic: "8.8", calc: false,
    stem: String.raw`The base of a solid is the region bounded by the graph of $y = x^3$, the $x$-axis, and the line $x = 2$. Cross sections of the solid perpendicular to the $x$-axis are semicircles with diameters in the base.`,
    question: "What is the volume of the solid?",
    choices: [String.raw`$\frac{16\pi}{7}$`, String.raw`$\frac{64\pi}{7}$`, String.raw`$\frac{32\pi}{7}$`, String.raw`$\frac{128\pi}{7}$`],
    why: [
      String.raw`A semicircle with diameter $s = x^3$ has area $\dfrac{1}{2}\pi\left(\dfrac{s}{2}\right)^2 = \dfrac{\pi}{8}s^2$. The volume is $\dfrac{\pi}{8}\displaystyle\int_0^2 x^6\,dx = \dfrac{\pi}{8} \cdot \dfrac{128}{7} = \dfrac{16\pi}{7}$.`,
      String.raw`This uses $\dfrac{\pi}{2}s^2$, which treats $s$ as the radius of the semicircle instead of its diameter.`,
      String.raw`This uses $\dfrac{\pi}{4}s^2$, the area of a whole circle with diameter $s$.`,
      String.raw`This uses $\pi s^2$, the disc method for revolving the base about the $x$-axis.`,
    ],
    answer: 0 },
  { id: "c8t-m10", type: "mcq", skill: "u8", topic: "8.10", calc: false,
    stem: String.raw`The region bounded by the graph of $y = 3 - x^2$ and the line $y = -1$ is revolved about the line $y = -1$.`,
    question: "Which of the following gives the volume of the solid generated?",
    choices: [
      String.raw`$\displaystyle\pi\int_{-2}^{2} \left(4 - x^2\right)^2 dx$`,
      String.raw`$\displaystyle\pi\int_{-2}^{2} \left(3 - x^2\right)^2 dx$`,
      String.raw`$\displaystyle\pi\int_{-2}^{2} \left(2 - x^2\right)^2 dx$`,
      String.raw`$\displaystyle\pi\int_{-\sqrt{3}}^{\sqrt{3}} \left(4 - x^2\right)^2 dx$`,
    ],
    why: [
      String.raw`The curve meets the line where $3 - x^2 = -1$, at $x = \pm 2$. Each disc at $x$ runs from the axis $y = -1$ up to the curve, so its radius is $\left(3 - x^2\right) - (-1) = 4 - x^2$.`,
      String.raw`This uses the radius $3 - x^2$, the distance from the curve to the $x$-axis, not to the line $y = -1$.`,
      String.raw`This subtracts $1$ instead of $-1$, which gives the distance to the line $y = 1$.`,
      String.raw`The limits $\pm\sqrt{3}$ are the $x$-intercepts of the curve. The region ends where the curve meets the line $y = -1$, at $x = \pm 2$.`,
    ],
    answer: 0 },

  // Multiple choice, calculator
  { id: "c8t-m11", type: "mcq", skill: "u8", topic: "8.3", calc: true,
    stem: String.raw`At time $t = 0$, a parking lot is covered by $15$ cubic meters of snow. For $0 \le t \le 6$ hours, snow falls on the lot at a rate of $S(t) = 2 + 3\ln(1 + t)$ cubic meters per hour, and a plow removes snow at a rate of $P(t) = 1 + \dfrac{t}{2}$ cubic meters per hour.`,
    question: String.raw`To the nearest thousandth, how many cubic meters of snow are on the lot at time $t = 6$?`,
    choices: ["$34.864$", "$49.864$", "$19.864$", "$18.838$"],
    why: [
      String.raw`The amount is $15 + \displaystyle\int_0^6 \left(S(t) - P(t)\right)dt = 15 + 19.864 = 34.864$ cubic meters.`,
      String.raw`This is $15 + \displaystyle\int_0^6 S(t)\,dt$, which does not subtract the snow the plow removes.`,
      String.raw`This is the net change $\displaystyle\int_0^6 \left(S(t) - P(t)\right)dt$, without the $15$ cubic meters on the lot at $t = 0$.`,
      String.raw`This adds the net rate at one instant, $S(6) - P(6)$, to $15$. The net change comes from integrating the net rate.`,
    ],
    answer: 0 },
  { id: "c8t-m12", type: "mcq", skill: "u8", topic: "8.2", calc: true,
    stem: String.raw`A particle moves along a line with velocity $v(t) = (t - 2)e^{\sin t}$ for $0 \le t \le 4$.`,
    question: String.raw`What is the total distance the particle travels from $t = 0$ to $t = 4$?`,
    choices: ["$5.471$", "$-1.774$", "$1.774$", "$3.622$"],
    why: [
      String.raw`The total distance is $\displaystyle\int_0^4 \left|v(t)\right|dt = 5.471$. The velocity is negative on $0 < t < 2$ and positive on $2 < t < 4$.`,
      String.raw`This is the displacement, $\displaystyle\int_0^4 v(t)\,dt$, in which motion in opposite directions cancels.`,
      String.raw`This is the absolute value of the displacement, $\left|\displaystyle\int_0^4 v(t)\,dt\right|$. The absolute value belongs inside the integral.`,
      String.raw`This is the distance for $0 \le t \le 2$ only. The particle also travels $1.849$ after it turns around at $t = 2$.`,
    ],
    answer: 0 },
  { id: "c8t-m13", type: "mcq", skill: "u8", topic: "8.4", calc: true, set: "c8t-s1",
    question: String.raw`What is the area of $R$?`,
    choices: ["$4.995$", "$2.497$", "$3.815$", "$4.699$"],
    why: [
      String.raw`The graphs meet where $2\cos x = x^2 - 1$, at $x = \pm 1.265$. The area is $\displaystyle\int_{-1.265}^{1.265} \left(2\cos x - x^2 + 1\right)dx = 4.995$.`,
      String.raw`This integrates only from $0$ to $1.265$, which is half of $R$.`,
      String.raw`This is $\displaystyle\int_{-1.265}^{1.265} 2\cos x\,dx$, which does not subtract $g(x)$.`,
      String.raw`This integrates from $-1$ to $1$, the zeros of $g$, instead of between the intersection points of $f$ and $g$.`,
    ],
    answer: 0 },
  { id: "c8t-m14", type: "mcq", skill: "u8", topic: "8.12", calc: true, set: "c8t-s1",
    question: String.raw`The region $R$ is revolved about the line $y = -2$. What is the volume of the solid generated?`,
    choices: ["$78.732$", "$37.449$", "$46.803$", "$15.965$"],
    why: [
      String.raw`The outer radius is $f(x) + 2 = 2\cos x + 2$ and the inner radius is $g(x) + 2 = x^2 + 1$. The volume is $\pi\displaystyle\int_{-1.265}^{1.265} \left(\left(2\cos x + 2\right)^2 - \left(x^2 + 1\right)^2\right)dx = 78.732$.`,
      String.raw`This is $\pi\displaystyle\int \left(f(x) - g(x)\right)^2 dx$, which squares the difference of the radii.`,
      String.raw`This uses the radii $2 - g(x)$ and $2 - f(x)$, which revolve $R$ about the line $y = 2$.`,
      String.raw`This uses the radii $f(x)$ and $g(x)$, as if revolving about the $x$-axis. Part of $R$ is below the $x$-axis, and the axis is $y = -2$.`,
    ],
    answer: 0 },
  { id: "c8t-m15", type: "mcq", skill: "u8", topic: "8.9", calc: true,
    stem: String.raw`The region bounded by the graph of $y = x\sin x$ and the $x$-axis for $0 \le x \le \pi$ is revolved about the $x$-axis.`,
    question: "What is the volume of the solid generated?",
    choices: ["$13.767$", "$9.870$", "$4.382$", "$31.006$"],
    why: [
      String.raw`Each disc at $x$ has radius $x\sin x$. The volume is $\pi\displaystyle\int_0^{\pi} \left(x\sin x\right)^2 dx = 13.767$.`,
      String.raw`This is $\pi\displaystyle\int_0^{\pi} x\sin x\,dx$. The radius was not squared.`,
      String.raw`This is $\displaystyle\int_0^{\pi} \left(x\sin x\right)^2 dx$, which leaves out the factor $\pi$.`,
      String.raw`This is $\pi\left(\displaystyle\int_0^{\pi} x\sin x\,dx\right)^2$, which squares the integral instead of the radius.`,
    ],
    answer: 0 },

  // Free response 1 (calculator): region between 4 ln(x + 1) and x^2/2
  { id: "c8t-f1a", type: "frq", skill: "u8", topic: "8.4", calc: true, set: "c8t-s2", part: "(a)",
    prompt: String.raw`Find the area of $R$.`,
    rows: [
      { name: "Integral", earns: String.raw`$\displaystyle\int_0^{3.458} \left(4\ln(x + 1) - \dfrac{x^2}{2}\right)dx$, with $3.458$ found from $4\ln(x + 1) = \dfrac{x^2}{2}$` },
      { name: "Answer", earns: String.raw`$5.930$` },
    ],
    solution: String.raw`The graphs meet where $4\ln(x + 1) = \dfrac{x^2}{2}$, at $x = 0$ and $x = b = 3.458$ ($b = 3.45796\ldots$, stored in the calculator). On $0 < x < b$, $4\ln(x + 1) > \dfrac{x^2}{2}$.

$$\int_0^{b} \left(4\ln(x + 1) - \dfrac{x^2}{2}\right)dx = 5.930$$` },
  { id: "c8t-f1b", type: "frq", skill: "u8", topic: "8.11", calc: true, set: "c8t-s2", part: "(b)",
    prompt: String.raw`Find the volume of the solid generated when $R$ is revolved about the $x$-axis.`,
    rows: [
      { name: "Limits and constant", earns: String.raw`$\pi\displaystyle\int_0^{3.458}$ with an integrand of the form $R(x)^2 - r(x)^2$` },
      { name: "Integrand", earns: String.raw`$\left(4\ln(x + 1)\right)^2 - \left(\dfrac{x^2}{2}\right)^2$` },
      { name: "Answer", earns: String.raw`$100.724$` },
    ],
    solution: String.raw`On $0 \le x \le b$, $4\ln(x + 1) \ge \dfrac{x^2}{2} \ge 0$, so the outer radius is $4\ln(x + 1)$ and the inner radius is $\dfrac{x^2}{2}$.

$$\pi\int_0^{b} \left(\left(4\ln(x + 1)\right)^2 - \left(\dfrac{x^2}{2}\right)^2\right)dx = 100.724$$` },
  { id: "c8t-f1c", type: "frq", skill: "u8", topic: "8.8", calc: true, set: "c8t-s2", part: "(c)",
    prompt: String.raw`The region $R$ is the base of a solid. For this solid, each cross section perpendicular to the $x$-axis is a semicircle with its diameter in $R$. Find the volume of the solid.`,
    rows: [
      { name: "Integral", earns: String.raw`$\dfrac{\pi}{8}\displaystyle\int_0^{3.458} \left(4\ln(x + 1) - \dfrac{x^2}{2}\right)^2 dx$` },
      { name: "Answer", earns: String.raw`$4.761$` },
    ],
    solution: String.raw`The diameter of the semicircle at $x$ is $4\ln(x + 1) - \dfrac{x^2}{2}$, so its radius is half of that and its area is $\dfrac{1}{2}\pi\left(\dfrac{1}{2}\left(4\ln(x + 1) - \dfrac{x^2}{2}\right)\right)^2 = \dfrac{\pi}{8}\left(4\ln(x + 1) - \dfrac{x^2}{2}\right)^2$.

$$\frac{\pi}{8}\int_0^{b} \left(4\ln(x + 1) - \dfrac{x^2}{2}\right)^2 dx = 4.761$$` },
  { id: "c8t-f1d", type: "frq", skill: "u8", topic: "8.4", calc: true, set: "c8t-s2", part: "(d)",
    prompt: String.raw`The vertical line $x = k$, where $0 < k < 3.458$, divides $R$ into two regions of equal area. Write, but do not solve, an equation involving one or more integrals whose solution gives the value of $k$.`,
    rows: [
      { name: "Integral in k", earns: String.raw`$\displaystyle\int_0^{k} \left(4\ln(x + 1) - \dfrac{x^2}{2}\right)dx$` },
      { name: "Equation", earns: String.raw`$\displaystyle\int_0^{k} \left(4\ln(x + 1) - \dfrac{x^2}{2}\right)dx = \dfrac{1}{2}(5.930)$, or an equivalent equation` },
    ],
    solution: String.raw`The area of the part of $R$ to the left of $x = k$ is $\displaystyle\int_0^{k} \left(4\ln(x + 1) - \dfrac{x^2}{2}\right)dx$, and it must be half of the area of $R$:

$$\int_0^{k} \left(4\ln(x + 1) - \dfrac{x^2}{2}\right)dx = \frac{1}{2}(5.930)$$

An equivalent equation is $\displaystyle\int_0^{k} \left(4\ln(x + 1) - \dfrac{x^2}{2}\right)dx = \int_k^{3.458} \left(4\ln(x + 1) - \dfrac{x^2}{2}\right)dx$.` },

  // Free response 2 (no calculator): water in a tank
  { id: "c8t-f2a", type: "frq", skill: "u8", topic: "8.3", calc: false, set: "c8t-s3", part: "(a)",
    prompt: String.raw`How many liters of water flow into the tank from $t = 0$ to $t = 8$?`,
    rows: [
      { name: "Integral", earns: String.raw`$\displaystyle\int_0^8 E(t)\,dt$` },
      { name: "Answer", earns: String.raw`$32$ liters` },
    ],
    solution: String.raw`$\displaystyle\int_0^8 E(t)\,dt$ is the area under the graph of $E$:

$$\int_0^8 E(t)\,dt = \frac{1 + 5}{2}(2) + 5(4) + \frac{5 + 1}{2}(2) = 6 + 20 + 6 = 32$$

$32$ liters of water flow into the tank.` },
  { id: "c8t-f2b", type: "frq", skill: "u8", topic: "8.3", calc: false, set: "c8t-s3", part: "(b)",
    prompt: String.raw`Is the amount of water in the tank increasing or decreasing at time $t = 5$? Give a reason for your answer.`,
    rows: [
      { name: "Answer with reason", earns: String.raw`Increasing, because $A'(5) = E(5) - 3 = 5 - 3 = 2 > 0$.` },
    ],
    solution: String.raw`$A'(t) = E(t) - 3$, so $A'(5) = 5 - 3 = 2 > 0$. The amount of water in the tank is increasing at $t = 5$.` },
  { id: "c8t-f2c", type: "frq", skill: "u8", topic: "8.3", calc: false, set: "c8t-s3", part: "(c)",
    prompt: String.raw`Find $A(8)$.`,
    rows: [
      { name: "Integral with initial condition", earns: String.raw`$20 + \displaystyle\int_0^8 \left(E(t) - 3\right)dt$` },
      { name: "Answer", earns: String.raw`$A(8) = 28$ liters` },
    ],
    solution: String.raw`$$A(8) = 20 + \int_0^8 \left(E(t) - 3\right)dt = 20 + 32 - 24 = 28$$

There are $28$ liters of water in the tank at $t = 8$.` },
  { id: "c8t-f2d", type: "frq", skill: "u8", topic: "8.3", calc: false, set: "c8t-s3", part: "(d)",
    prompt: String.raw`At what time $t$, for $0 \le t \le 8$, is the amount of water in the tank greatest? Justify your answer.`,
    rows: [
      { name: "Sets rate to zero", earns: String.raw`Considers $A'(t) = E(t) - 3 = 0$, at $t = 1$ and $t = 7$.` },
      { name: "Answer", earns: String.raw`$t = 7$` },
      { name: "Justification", earns: String.raw`Compares $A(0) = 20$, $A(1) = 19$, $A(7) = 29$, and $A(8) = 28$.` },
    ],
    solution: String.raw`$A'(t) = E(t) - 3 = 0$ when $E(t) = 3$. From the graph, this happens at $t = 1$ and $t = 7$. Check the candidates:

$A(0) = 20$

$A(1) = 20 + \displaystyle\int_0^1 E(t)\,dt - 3(1) = 20 + 2 - 3 = 19$

$A(7) = 20 + \displaystyle\int_0^7 E(t)\,dt - 3(7) = 20 + 30 - 21 = 29$

$A(8) = 28$, from part (c).

The amount of water in the tank is greatest at $t = 7$ minutes.` },
  { id: "c8t-f2e", type: "frq", skill: "u8", topic: "8.1", calc: false, set: "c8t-s3", part: "(e)",
    prompt: String.raw`Find the average rate at which water flows into the tank over the interval $0 \le t \le 8$.`,
    rows: [
      { name: "Answer", earns: String.raw`$\dfrac{1}{8}\displaystyle\int_0^8 E(t)\,dt = \dfrac{32}{8} = 4$ liters per minute` },
    ],
    solution: String.raw`The average value of $E$ on $0 \le t \le 8$ is

$$\frac{1}{8 - 0}\int_0^8 E(t)\,dt = \frac{32}{8} = 4$$

liters per minute.` },
];

export default { forms: [{ id: "c8t", name: "Unit 8 Test", group: "Unit 8: Applications of Integration", items }] };

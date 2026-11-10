import { graph } from "../../plot.js";

// c8t-s1: f(x) = 2cos x and g(x) = x^2 - 1 meet at x = ±1.265.
const s1Graph = graph({
  x: [-2, 2], y: [-2, 3], step: { x: 0.5, y: 1 }, labelEvery: 2, xname: "x", yname: "y",
  fns: [{ f: (x) => 2 * Math.cos(x), label: "f", labelAt: -0.5 }, { f: (x) => x * x - 1, label: "g", labelAt: 1.7 }],
  labels: [[-0.15, 0.4, "R"]],
  alt: "The graphs of f(x) = 2cos x and g(x) = x^2 - 1. They intersect at two points, symmetric about the y-axis, one between x = -1.5 and x = -1 and one between x = 1 and x = 1.5. The region R lies between them, with the graph of f above the graph of g. Part of R is below the x-axis, but all of R is above the line y = -2.",
});

// c8t-s2 (free response): f(x) = 4 ln(x + 1) and g(x) = x^2/2 meet at x = 0 and x = 3.458.
const s2Graph = graph({
  x: [0, 4], y: [-0.5, 7], step: { x: 0.5, y: 1 }, labelEvery: 2, xname: "x", yname: "y",
  fns: [{ f: (x) => 4 * Math.log(x + 1), label: "f", labelAt: 1.3 }, { f: (x) => (x * x) / 2, label: "g", labelAt: 3.6 }],
  dots: [[0, 0, "closed"], [3.458, 5.9789, "closed"]],
  labels: [[1.6, 2.6, "R"]],
  alt: "The graphs of f(x) = 4 ln(x + 1) and g(x) = x^2/2 for x from 0 to 4. They intersect at the origin and at a second point, marked with a dot, just before x = 3.5. The region R lies between them from the origin to that dot, with the graph of f above the graph of g, and R is above the x-axis.",
});

// c8t-s3 (free response): E(t) through (0, 1), (2, 5), (6, 5), (8, 1).
const s3Graph = graph({
  x: [0, 8], y: [0, 6], xname: "t", yname: "E(t)",
  segments: [[0, 1, 2, 5], [2, 5, 6, 5], [6, 5, 8, 1]],
  dots: [[0, 1, "closed"], [8, 1, "closed"]],
  hlines: [{ y: 3, dash: true }],
  alt: "Graph of E(t) for 0 to 8 minutes, made of three line segments: from (0, 1) up to (2, 5), level at 5 from (2, 5) to (6, 5), then down from (6, 5) to (8, 1). A dashed horizontal line at height 3 runs across the whole window.",
});

export const sets = {
  "c8t-s1": { name: "The region R between f and g", label: "Graph", intro: String.raw`Let $f(x) = 2\cos x$ and $g(x) = x^2 - 1$. Let $R$ be the region enclosed by the graphs of $f$ and $g$, shown below.`,
    sources: [{ title: "", blocks: [{ svg: s1Graph }] }] },
  "c8t-s2": { name: "A region between a logarithm and a parabola", label: "Free response", intro: String.raw`Let $f(x) = 4\ln(x + 1)$ and $g(x) = \dfrac{x^2}{2}$. Let $R$ be the region in the first quadrant enclosed by the graphs of $f$ and $g$, shown below.`,
    sources: [{ title: "", blocks: [{ svg: s2Graph }, { p: String.raw`A graphing calculator is allowed. Give decimal answers to three decimal places.` }] }] },
  "c8t-s3": { name: "Water in a tank", label: "Free response", intro: String.raw`A tank contains $20$ liters of water at time $t = 0$. For $0 \le t \le 8$ minutes, water flows into the tank at a rate of $E(t)$ liters per minute, where the graph of $E$ consists of three line segments, as shown below. Water drains out of the tank at a constant rate of $3$ liters per minute, shown by the dashed line. Let $A(t)$ be the number of liters of water in the tank at time $t$.`,
    sources: [{ title: "", blocks: [{ svg: s3Graph }, { p: String.raw`Answer each part without a calculator. Show the work that leads to each answer.` }] }] },
};

const items = [
  // Multiple choice, no calculator
  { id: "c8t-m01", type: "mcq", skill: "u8", topic: "8.1", calc: false, difficulty: "easy",
    question: String.raw`What is the average value of $e^{2x}$ on the interval $0 \le x \le \ln 3$?`,
    choices: [String.raw`$\frac{4}{\ln 3}$`, "$4$", "$5$", String.raw`$\frac{8}{\ln 3}$`],
    why: [
      String.raw`$\displaystyle\int_0^{\ln 3} e^{2x}\,dx = \Big[\dfrac{e^{2x}}{2}\Big]_0^{\ln 3} = \dfrac{9 - 1}{2} = 4$. The average value is $\dfrac{1}{\ln 3 - 0} \cdot 4 = \dfrac{4}{\ln 3}$.`,
      String.raw`This is $\displaystyle\int_0^{\ln 3} e^{2x}\,dx$ without dividing by the length of the interval, $\ln 3$.`,
      String.raw`This is the average of the endpoint values, $\dfrac{e^{0} + e^{2\ln 3}}{2} = \dfrac{1 + 9}{2}$.`,
      String.raw`This is the average rate of change, $\dfrac{9 - 1}{\ln 3}$, not the average value.`,
    ],
    answer: 0 },
  { id: "c8t-m02", type: "mcq", skill: "u8", topic: "8.1", calc: false, difficulty: "moderate",
    stem: String.raw`The average value of a continuous function $f$ on the interval $1 \le x \le 5$ is $3$.`,
    question: String.raw`What is the value of $\displaystyle\int_1^5 \left(5 - f(x)\right)dx$?`,
    choices: ["$8$", "$-7$", "$13$", "$32$"],
    why: [
      String.raw`$\displaystyle\int_1^5 f(x)\,dx = (5 - 1)(3) = 12$. So $\displaystyle\int_1^5 \left(5 - f(x)\right)dx = \int_1^5 5\,dx - 12 = 20 - 12 = 8$.`,
      String.raw`This is $5 - 12$. The integral of the constant $5$ over an interval of length $4$ is $5 \cdot 4 = 20$, not $5$.`,
      String.raw`This integrates the constant $5$ over a length of $5$, giving $25 - 12$. The interval $1 \le x \le 5$ has length $4$.`,
      String.raw`This adds the integrals, $20 + 12$. The integral of $f$ is subtracted.`,
    ],
    answer: 0 },
  { id: "c8t-m03", type: "mcq", skill: "u8", topic: "8.2", calc: false, difficulty: "difficult",
    stem: String.raw`A particle moves along the $x$-axis with acceleration $a(t) = 2t - 4$. At time $t = 0$, its velocity is $3$.`,
    question: String.raw`What is the total distance the particle travels from $t = 0$ to $t = 4$?`,
    choices: ["$4$", String.raw`$\frac{4}{3}$`, String.raw`$\frac{8}{3}$`, String.raw`$\frac{32}{3}$`],
    why: [
      String.raw`$v(t) = 3 + \displaystyle\int_0^t (2s - 4)\,ds = t^2 - 4t + 3 = (t - 1)(t - 3)$, which is positive on $(0, 1)$, negative on $(1, 3)$, and positive on $(3, 4)$. With $V(t) = \dfrac{t^3}{3} - 2t^2 + 3t$, $V(0) = 0$, $V(1) = \dfrac{4}{3}$, $V(3) = 0$, and $V(4) = \dfrac{4}{3}$, so the distance is $\dfrac{4}{3} + \dfrac{4}{3} + \dfrac{4}{3} = 4$.`,
      String.raw`$\dfrac{4}{3}$ is the displacement, $\displaystyle\int_0^4 v(t)\,dt$, in which the motion to the left on $(1, 3)$ cancels part of the motion to the right.`,
      String.raw`This adds only the intervals where $v(t) > 0$, $[0, 1]$ and $[3, 4]$. The motion to the left on $[1, 3]$ also counts toward distance.`,
      String.raw`This leaves out the initial velocity and uses $v(t) = t^2 - 4t$, so the distance is $\displaystyle\int_0^4 \left|t^2 - 4t\right|dt = \dfrac{32}{3}$.`,
    ],
    answer: 0 },
  { id: "c8t-m04", type: "mcq", skill: "u8", topic: "8.3", calc: false, difficulty: "easy",
    stem: String.raw`A computer downloads a file at a rate of $r(t)$ megabytes per second, where $t$ is measured in seconds. At time $t = 0$, $50$ megabytes of the file have already been downloaded.`,
    question: String.raw`Which of the following is the best interpretation of $50 + \displaystyle\int_0^{30} r(t)\,dt$?`,
    choices: [
      String.raw`The amount of the file, in megabytes, downloaded by $t = 30$`,
      String.raw`The rate, in megabytes per second, at which the file downloads at $t = 30$`,
      String.raw`The average rate, in megabytes per second, of the download from $t = 0$ to $t = 30$`,
      String.raw`The amount of the file, in megabytes, downloaded from $t = 0$ to $t = 30$`,
    ],
    why: [
      String.raw`$\displaystyle\int_0^{30} r(t)\,dt$ is the number of megabytes downloaded from $t = 0$ to $t = 30$. Adding the $50$ megabytes downloaded before $t = 0$ gives the total downloaded by $t = 30$.`,
      String.raw`That rate is $r(30)$. The integral accumulates the rate into an amount.`,
      String.raw`The average rate is $\dfrac{1}{30}\displaystyle\int_0^{30} r(t)\,dt$, with no $50$ added.`,
      String.raw`That is $\displaystyle\int_0^{30} r(t)\,dt$ alone. The expression also includes the $50$ megabytes downloaded before $t = 0$.`,
    ],
    answer: 0 },
  { id: "c8t-m05", type: "mcq", skill: "u8", topic: "8.4", calc: false, difficulty: "moderate",
    question: String.raw`What is the area of the region in the first quadrant enclosed by the graphs of $y = \sin\left(\dfrac{\pi x}{2}\right)$ and $y = x$?`,
    choices: [String.raw`$\frac{2}{\pi} - \frac{1}{2}$`, String.raw`$\frac{1}{2} - \frac{2}{\pi}$`, String.raw`$\frac{\pi}{2} - \frac{1}{2}$`, String.raw`$-\frac{2}{\pi} - \frac{1}{2}$`],
    why: [
      String.raw`In the first quadrant the graphs meet at $x = 0$ and $x = 1$, since $\sin\left(\dfrac{\pi}{2}\right) = 1$, and the sine curve is above the line between them. The area is $\displaystyle\int_0^1 \left(\sin\left(\dfrac{\pi x}{2}\right) - x\right)dx = \Big[-\dfrac{2}{\pi}\cos\left(\dfrac{\pi x}{2}\right) - \dfrac{x^2}{2}\Big]_0^1 = -\dfrac{1}{2} + \dfrac{2}{\pi}$.`,
      String.raw`This subtracts the curve from the line, $\displaystyle\int_0^1 \left(x - \sin\left(\dfrac{\pi x}{2}\right)\right)dx$, which is negative.`,
      String.raw`This multiplies by $\dfrac{\pi}{2}$ in the antiderivative, using $-\dfrac{\pi}{2}\cos\left(\dfrac{\pi x}{2}\right)$. The chain rule requires dividing by $\dfrac{\pi}{2}$.`,
      String.raw`This uses $\dfrac{2}{\pi}\cos\left(\dfrac{\pi x}{2}\right)$ as the antiderivative of $\sin\left(\dfrac{\pi x}{2}\right)$. The derivative of $\cos$ is $-\sin$, so the antiderivative has a minus sign.`,
    ],
    answer: 0 },
  { id: "c8t-m06", type: "mcq", skill: "u8", topic: "8.5", calc: false, difficulty: "moderate",
    question: String.raw`What is the area of the region bounded by the graph of $y = \ln x$, the $y$-axis, and the lines $y = -1$ and $y = 1$?`,
    choices: [String.raw`$e - \frac{1}{e}$`, "$e - 1$", String.raw`$e + \frac{1}{e}$`, String.raw`$e^{e} - e^{1/e}$`],
    why: [
      String.raw`Solving $y = \ln x$ for $x$ gives $x = e^{y}$. For $-1 \le y \le 1$ the region runs from the $y$-axis, $x = 0$, to $x = e^{y}$, so the area is $\displaystyle\int_{-1}^{1} e^{y}\,dy = e - e^{-1} = e - \dfrac{1}{e}$.`,
      String.raw`This integrates only from $y = 0$ to $y = 1$, the part of the region above the $x$-axis.`,
      String.raw`This is $\displaystyle\int_{-1}^{1} \left(e - e^{y}\right)dy$, the area between the curve and the line $x = e$. The region lies between the $y$-axis and the curve.`,
      String.raw`This uses $x = \dfrac{1}{e}$ and $x = e$, where the curve meets the two lines, as the limits. An integral in $y$ needs $y$-values, $-1$ and $1$.`,
    ],
    answer: 0 },
  { id: "c8t-m07", type: "mcq", skill: "u8", topic: "8.6", calc: false, difficulty: "difficult",
    question: String.raw`What is the total area of the regions enclosed by the graphs of $y = x^3 - 3x^2 + 4$ and $y = x + 1$?`,
    choices: ["$8$", "$0$", "$4$", String.raw`$\frac{9}{2}$`],
    why: [
      String.raw`$x^3 - 3x^2 + 4 = x + 1$ gives $x^3 - 3x^2 - x + 3 = x^2(x - 3) - (x - 3) = (x - 3)(x - 1)(x + 1) = 0$, so $x = -1$, $1$, or $3$. The cubic is above the line on $(-1, 1)$ and below it on $(1, 3)$. With $H(x) = \dfrac{x^4}{4} - x^3 - \dfrac{x^2}{2} + 3x$, $H(-1) = -\dfrac{9}{4}$, $H(1) = \dfrac{7}{4}$, and $H(3) = -\dfrac{9}{4}$, so the area is $\left(\dfrac{7}{4} + \dfrac{9}{4}\right) + \left(\dfrac{7}{4} + \dfrac{9}{4}\right) = 8$.`,
      String.raw`This is $\displaystyle\int_{-1}^{3} \left(x^3 - 3x^2 - x + 3\right)dx$. The upper curve changes at $x = 1$, so the two regions cancel in one integral.`,
      String.raw`This is the area of only one of the two regions. Each has area $4$.`,
      String.raw`This splits the integral at $x = 0$ instead of at $x = 1$, where the graphs cross, and makes each part positive: $\dfrac{9}{4} + \dfrac{9}{4}$.`,
    ],
    answer: 0 },
  { id: "c8t-m08", type: "mcq", skill: "u8", topic: "8.7", calc: false, difficulty: "easy",
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
  { id: "c8t-m09", type: "mcq", skill: "u8", topic: "8.8", calc: false, difficulty: "moderate",
    stem: String.raw`The base of a solid is the region bounded by the graph of $y = e^{x/2}$, the $x$-axis, the $y$-axis, and the line $x = \ln 9$. Cross sections of the solid perpendicular to the $x$-axis are semicircles with diameters in the base.`,
    question: "What is the volume of the solid?",
    choices: [String.raw`$\pi$`, String.raw`$4\pi$`, String.raw`$2\pi$`, String.raw`$8\pi$`],
    why: [
      String.raw`A semicircle with diameter $s = e^{x/2}$ has area $\dfrac{1}{2}\pi\left(\dfrac{s}{2}\right)^2 = \dfrac{\pi}{8}s^2 = \dfrac{\pi}{8}e^{x}$. The volume is $\dfrac{\pi}{8}\displaystyle\int_0^{\ln 9} e^{x}\,dx = \dfrac{\pi}{8}(9 - 1) = \pi$.`,
      String.raw`This uses $\dfrac{\pi}{2}s^2$, which treats $s$ as the radius of the semicircle instead of its diameter.`,
      String.raw`This uses $\dfrac{\pi}{4}s^2$, the area of a whole circle with diameter $s$.`,
      String.raw`This uses $\pi s^2$, the disc method for revolving the base about the $x$-axis.`,
    ],
    answer: 0 },
  { id: "c8t-m10", type: "mcq", skill: "u8", topic: "8.10", calc: false, difficulty: "moderate",
    stem: String.raw`For $-\pi \le x \le \pi$, let $R$ be the region below the graph of $y = 2\cos x$ and above the line $y = 1$. The region $R$ is revolved about the line $y = 1$.`,
    question: "Which of the following gives the volume of the solid generated?",
    choices: [
      String.raw`$\displaystyle\pi\int_{-\pi/3}^{\pi/3} \left(2\cos x - 1\right)^2 dx$`,
      String.raw`$\displaystyle\pi\int_{-\pi/3}^{\pi/3} \left(4\cos^2 x - 1\right)dx$`,
      String.raw`$\displaystyle\pi\int_{-\pi/2}^{\pi/2} \left(2\cos x - 1\right)^2 dx$`,
      String.raw`$\displaystyle\pi\int_{-\pi/3}^{\pi/3} \left(2\cos x + 1\right)^2 dx$`,
    ],
    why: [
      String.raw`$2\cos x = 1$ at $x = \pm\dfrac{\pi}{3}$, and $2\cos x > 1$ between them. Each disc reaches from the axis $y = 1$ up to the curve, so its radius is $2\cos x - 1$.`,
      String.raw`This squares $2\cos x$ and $1$ separately, as in a washer about the $x$-axis. The radius $2\cos x - 1$ must be squared as a whole.`,
      String.raw`$\pm\dfrac{\pi}{2}$ are the zeros of $2\cos x$, where the curve meets the $x$-axis. $R$ ends where the curve meets the line $y = 1$, at $x = \pm\dfrac{\pi}{3}$.`,
      String.raw`The radius $2\cos x + 1$ is the distance from the curve to the line $y = -1$. The axis is $y = 1$.`,
    ],
    answer: 0 },

  // Multiple choice, calculator
  { id: "c8t-m11", type: "mcq", skill: "u8", topic: "8.3", calc: true, difficulty: "moderate",
    stem: String.raw`At time $t = 0$, a parking lot is covered by $12$ cubic meters of snow. For $0 \le t \le 6$ hours, snow falls on the lot at a rate of $S(t) = 2 + 3\ln(1 + t)$ cubic meters per hour, and a plow removes snow at a rate of $P(t) = 1 + \dfrac{t}{2}$ cubic meters per hour.`,
    question: String.raw`To the nearest thousandth, how many cubic meters of snow are on the lot at time $t = 6$?`,
    choices: ["$31.864$", "$46.864$", "$19.864$", "$15.838$"],
    why: [
      String.raw`The amount is $12 + \displaystyle\int_0^6 \left(S(t) - P(t)\right)dt = 12 + 19.864 = 31.864$ cubic meters.`,
      String.raw`This is $12 + \displaystyle\int_0^6 S(t)\,dt$, which does not subtract the snow the plow removes.`,
      String.raw`This is the net change $\displaystyle\int_0^6 \left(S(t) - P(t)\right)dt$, without the $12$ cubic meters on the lot at $t = 0$.`,
      String.raw`This adds the net rate at one instant, $S(6) - P(6)$, to $12$. The net change comes from integrating the net rate.`,
    ],
    answer: 0 },
  { id: "c8t-m12", type: "mcq", skill: "u8", topic: "8.2", calc: true, difficulty: "moderate",
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
  { id: "c8t-m13", type: "mcq", skill: "u8", topic: "8.4", calc: true, difficulty: "easy", set: "c8t-s1",
    question: String.raw`What is the area of $R$?`,
    choices: ["$4.995$", "$2.497$", "$3.815$", "$4.699$"],
    why: [
      String.raw`The graphs meet where $2\cos x = x^2 - 1$, at $x = \pm 1.265$. The area is $\displaystyle\int_{-1.265}^{1.265} \left(2\cos x - x^2 + 1\right)dx = 4.995$.`,
      String.raw`This integrates only from $0$ to $1.265$, which is half of $R$.`,
      String.raw`This is $\displaystyle\int_{-1.265}^{1.265} 2\cos x\,dx$, which does not subtract $g(x)$.`,
      String.raw`This integrates from $-1$ to $1$, the zeros of $g$, instead of between the intersection points of $f$ and $g$.`,
    ],
    answer: 0 },
  { id: "c8t-m14", type: "mcq", skill: "u8", topic: "8.12", calc: true, difficulty: "difficult", set: "c8t-s1",
    question: String.raw`The region $R$ is revolved about the line $y = -2$. What is the volume of the solid generated?`,
    choices: ["$78.732$", "$37.449$", "$46.803$", "$15.965$"],
    why: [
      String.raw`The outer radius is $f(x) + 2 = 2\cos x + 2$ and the inner radius is $g(x) + 2 = x^2 + 1$. The volume is $\pi\displaystyle\int_{-1.265}^{1.265} \left(\left(2\cos x + 2\right)^2 - \left(x^2 + 1\right)^2\right)dx = 78.732$.`,
      String.raw`This is $\pi\displaystyle\int \left(f(x) - g(x)\right)^2 dx$, which squares the difference of the radii.`,
      String.raw`This uses the radii $2 - g(x)$ and $2 - f(x)$, which revolve $R$ about the line $y = 2$.`,
      String.raw`This uses the radii $f(x)$ and $g(x)$, as if revolving about the $x$-axis. Part of $R$ is below the $x$-axis, and the axis is $y = -2$.`,
    ],
    answer: 0 },
  { id: "c8t-m15", type: "mcq", skill: "u8", topic: "8.9", calc: true, difficulty: "easy",
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

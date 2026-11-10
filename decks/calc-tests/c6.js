import { graph } from "../../plot.js";

// Graph of f for the free-response question c6t-s2. Pieces: the lower semicircle of radius 2 centered at the origin on [-2, 2]
// (area 2pi below the axis), the segment (2, 0) to (6, 4) (area 8), the segment (6, 4) to (8, 2) (area 6).
// With g(x) = integral from 0 to x of f: g(-2) = pi, g(0) = 0, g(2) = -pi, g(6) = 8 - pi, g(8) = 14 - pi.
const lowSemi = (x) => -Math.sqrt(Math.max(0, 4 - x * x));
const fGraph = graph({
  x: [-2.6, 9], y: [-3, 5], xname: "x", yname: "y",
  fns: [{ f: lowSemi, from: -2, to: 2 }],
  segments: [[2, 0, 6, 4], [6, 4, 8, 2]],
  dots: [[8, 2, "closed"]],
  alt: "Graph of f for -2 to 8. From x = -2 to x = 2 the graph is the lower half of a circle of radius 2 centered at the origin, falling from (-2, 0) to a low point (0, -2) and rising back to (2, 0). Then a line segment goes from (2, 0) up to (6, 4), and a line segment goes from (6, 4) down to (8, 2).",
})
  // the semicircle leaves the axis straight down at x = -2 and x = 2, so those two tick labels move 9 pixels outward to clear it
  .replace(/<text class="g-tick" x="([\d.]+)"( y="[\d.]+" text-anchor="middle">)(−?2)<\/text>/g,
    (m, x, rest, t) => `<text class="g-tick" x="${+x + (t === "2" ? 9 : -9)}"${rest}${t}</text>`);

// Graphs for the multiple-choice items c6t-m01 (rate B), c6t-m05 (f, with g = integral from 0 to x of f), c6t-m06 (f').
const rateGraph = graph({ x: [0, 11], y: [0, 45], step: { x: 1, y: 10 }, xname: "t", yname: "B(t)", segments: [[0, 20, 4, 40], [4, 40, 10, 10]],
  alt: "Graph of B(t) for 0 to 10 minutes, made of two line segments: from (0, 20) up to (4, 40), then from (4, 40) down to (10, 10)." });
const m05Graph = graph({ x: [0, 9], y: [-3, 3], xname: "x", yname: "y", segments: [[0, -2, 3, 1], [3, 1, 5, -1], [5, -1, 8, 2]], labels: [[7.1, 1.6, "f"]],
  alt: "Graph of f made of three segments: from (0, negative 2) up to (3, 1), crossing the x-axis at x = 2; from (3, 1) down to (5, negative 1), crossing the x-axis at x = 4; and from (5, negative 1) up to (8, 2), crossing the x-axis at x = 6." });
const m06Graph = graph({ x: [0, 7], y: [-5, 3], xname: "x", yname: "y", segments: [[0, 0, 2, -4], [2, -4, 4, -2], [4, -2, 6, 2]], labels: [[5.6, 2.2, "f'"]],
  alt: "Graph of f prime made of three segments: from the origin down to (2, negative 4), from (2, negative 4) up to (4, negative 2), and from (4, negative 2) up to (6, 2), crossing the x-axis at x = 5." });

export const sets = {
  "c6t-s1": { name: "Visitors at an aquarium", label: "Free response", intro: String.raw`On a certain day, visitors arrive at an aquarium at a rate of $E(t)$ visitors per hour, where $E$ is a continuous function and $t$ is the number of hours after the aquarium opens at 9:00 A.M., $0 \le t \le 8$. Selected values of $E(t)$ are shown in the table below. Visitors leave the aquarium at a rate modeled by $L(t) = 180\sin\left(\dfrac{t}{3}\right)$ visitors per hour. No visitors are in the aquarium at time $t = 0$.`,
    sources: [{ title: "", blocks: [
      { table: { head: ["$t$ (hours)", "$0$", "$1$", "$3$", "$4$", "$7$", "$8$"], rows: [["$E(t)$ (visitors per hour)", "$110$", "$160$", "$230$", "$210$", "$120$", "$40$"]] } },
      { p: String.raw`A graphing calculator is allowed. Give decimal answers to three decimal places.` }] }] },
  "c6t-s2": { name: "An accumulation function from a graph", label: "Free response", intro: String.raw`The graph of the continuous function $f$ on the interval $-2 \le x \le 8$ is shown below. It consists of a semicircle and two line segments. Let $g$ be the function defined by $g(x) = \displaystyle\int_{0}^{x} f(t)\,dt$ for $-2 \le x \le 8$.`,
    sources: [{ title: "", blocks: [{ svg: fGraph }, { p: String.raw`Answer each part without a calculator. Show the work that leads to each answer.` }] }] },
  "c6t-s4": { name: "Filling bottles", label: "Graph", intro: String.raw`A machine fills bottles at a rate of $B(t)$ bottles per minute, where $t$ is measured in minutes. The graph of $B$ for $0 \le t \le 10$ is shown below.`,
    sources: [{ title: "", blocks: [{ svg: rateGraph }] }] },
  "c6t-s5": { name: "The graph of f", label: "Graph", intro: String.raw`The graph of the continuous function $f$ on $[0, 8]$, made of three line segments, is shown below. Let $g(x) = \displaystyle\int_{0}^{x} f(t)\,dt$.`,
    sources: [{ title: "", blocks: [{ svg: m05Graph }] }] },
  "c6t-s6": { name: "The graph of f'", label: "Graph", intro: String.raw`The function $f$ is differentiable on $[0, 6]$, and $f(0) = 12$. The graph of $f'$, the derivative of $f$, is shown below. It consists of three line segments.`,
    sources: [{ title: "", blocks: [{ svg: m06Graph }] }] },
  "c6t-s3": { name: "Speed of a train", label: "Table", intro: String.raw`A train travels along a straight track. Its speed is $v(t)$ meters per second, where $v$ is a continuous function and $t$ is measured in seconds. Selected values of $v(t)$ are shown in the table below.`,
    sources: [{ title: "", blocks: [{ table: { head: ["$t$ (seconds)", "$0$", "$2$", "$4$", "$7$", "$10$", "$12$", "$14$"], rows: [["$v(t)$ (meters per second)", "$3$", "$5$", "$6$", "$10$", "$8$", "$4$", "$1$"]] } }] }] },
};

const items = [
  // Multiple choice, no calculator
  { id: "c6t-m01", type: "mcq", skill: "u6", topic: "6.1", calc: false, difficulty: "easy", set: "c6t-s4",
    question: String.raw`How many bottles does the machine fill from $t = 0$ to $t = 10$ minutes?`,
    choices: ["$270$", "$400$", "$150$", "$-10$"],
    why: [
      String.raw`The number filled is the area under the rate graph. The trapezoid on $[0, 4]$ has area $\dfrac{20 + 40}{2}(4) = 120$, and the trapezoid on $[4, 10]$ has area $\dfrac{40 + 10}{2}(6) = 150$, for a total of $270$ bottles.`,
      String.raw`$40(10) = 400$ uses the highest rate for all 10 minutes. The rate is less than 40 except at $t = 4$.`,
      String.raw`$\dfrac{20 + 10}{2}(10) = 150$ averages only the rates at the two ends. The graph has a corner at $(4, 40)$, so the region is two trapezoids, not one.`,
      String.raw`$B(10) - B(0) = 10 - 20 = -10$ is the change in the rate, in bottles per minute. The number filled is the area under the graph of the rate.`,
    ],
    answer: 0 },
  { id: "c6t-m02", type: "mcq", skill: "u6", topic: "6.2", calc: false, difficulty: "moderate", set: "c6t-s3",
    question: String.raw`Using a midpoint Riemann sum with the three subintervals $[0, 4]$, $[4, 10]$, and $[10, 14]$, what is the approximation of $\displaystyle\int_{0}^{14} v(t)\,dt$?`,
    choices: ["$96$", "$80$", "$76$", "$19$"],
    why: [
      String.raw`The midpoints are $t = 2$, $7$, and $12$, and the widths are $4$, $6$, and $4$. The sum is $4(5) + 6(10) + 4(4) = 20 + 60 + 16 = 96$ meters.`,
      String.raw`This uses the left endpoints $t = 0$, $4$, and $10$: $4(3) + 6(6) + 4(8) = 80$.`,
      String.raw`This uses the right endpoints $t = 4$, $10$, and $14$: $4(6) + 6(8) + 4(1) = 76$.`,
      String.raw`This adds the midpoint values $5 + 10 + 4$ without multiplying by the widths of the subintervals.`,
    ],
    answer: 0 },
  { id: "c6t-m03", type: "mcq", skill: "u6", topic: "6.3", calc: false, difficulty: "moderate",
    question: String.raw`$\displaystyle\lim_{n \to \infty} \sum_{k=1}^{n} \dfrac{2}{n}e^{1 + 2k/n}$ is equal to`,
    choices: [String.raw`$e^{3} - e$`, String.raw`$e^{2} - 1$`, String.raw`$2\left(e^{3} - e\right)$`, String.raw`$e^{3} - 1$`],
    why: [
      String.raw`With $\Delta x = \dfrac{2}{n}$ and $x_k = 1 + \dfrac{2k}{n}$, the sample points run from $1$ to $3$, so the limit is $\displaystyle\int_{1}^{3} e^{x}\,dx = e^{3} - e$.`,
      String.raw`This is $\displaystyle\int_{0}^{2} e^{x}\,dx$. It drops the starting value $1$ from the sample points.`,
      String.raw`The factor $\dfrac{2}{n}$ is $\Delta x$, which becomes $dx$. Keeping the $2$ as a coefficient doubles the value.`,
      String.raw`This uses the correct upper limit $3$ but starts the interval at $0$. The sample points begin just to the right of $x = 1$.`,
    ],
    answer: 0 },
  { id: "c6t-m04", type: "mcq", skill: "u6", topic: "6.4", calc: false, difficulty: "moderate",
    stem: String.raw`Let $h(x) = \displaystyle\int_{0}^{x^2} \sqrt{t + 5}\,dt$.`,
    question: String.raw`What is the value of $h'(2)$?`,
    choices: ["$12$", "$3$", String.raw`$4\sqrt{7}$`, String.raw`$\sqrt{7}$`],
    why: [
      String.raw`By the Fundamental Theorem of Calculus and the chain rule, $h'(x) = \sqrt{x^2 + 5} \cdot 2x$, so $h'(2) = \sqrt{9} \cdot 4 = 12$.`,
      String.raw`This substitutes $x^2$ into the integrand but leaves out the chain rule factor $2x = 4$.`,
      String.raw`This substitutes $x = 2$ into the integrand instead of $x^2 = 4$, then multiplies by $2x$.`,
      String.raw`This substitutes $x = 2$ instead of $x^2$ and also leaves out the chain rule factor.`,
    ],
    answer: 0 },
  { id: "c6t-m05", type: "mcq", skill: "u6", topic: "6.5", calc: false, difficulty: "difficult", set: "c6t-s5",
    question: String.raw`On which of the following intervals is $g$ increasing and its graph concave down?`,
    choices: [String.raw`$(3, 4)$`, String.raw`$(2, 4)$ and $(6, 8)$`, String.raw`$(0, 3)$ and $(5, 8)$`, String.raw`$(2, 3)$ and $(6, 8)$`],
    why: [
      String.raw`$g'(x) = f(x)$ is positive on $(2, 4)$ and $(6, 8)$, and $g''(x) = f'(x)$ is negative where $f$ is decreasing, on $(3, 5)$. Both hold only on $(3, 4)$.`,
      String.raw`$f > 0$ on these intervals, so $g$ is increasing there. On $(2, 3)$ and $(6, 8)$, $f$ is increasing, so the graph of $g$ is concave up there.`,
      String.raw`These are the intervals where $f$ is increasing, which makes the graph of $g$ concave up. On $(0, 2)$, $f < 0$, so $g$ is also decreasing there.`,
      String.raw`On these intervals $g$ is increasing, but $f$ is increasing too, so the graph of $g$ is concave up, not concave down.`,
    ],
    answer: 0 },
  { id: "c6t-m06", type: "mcq", skill: "u6", topic: "6.7", calc: false, difficulty: "moderate", set: "c6t-s6",
    question: String.raw`What is the value of $f(6)$?`,
    choices: ["$2$", "$-10$", "$24$", "$22$"],
    why: [
      String.raw`By the Fundamental Theorem of Calculus, $f(6) = f(0) + \displaystyle\int_{0}^{6} f'(x)\,dx$. The areas are $-4$ on $[0, 2]$, $-\dfrac{4 + 2}{2}(2) = -6$ on $[2, 4]$, $-1$ on $[4, 5]$, and $+1$ on $[5, 6]$, so the integral is $-10$ and $f(6) = 12 - 10 = 2$.`,
      String.raw`$-10$ is $\displaystyle\int_{0}^{6} f'(x)\,dx = f(6) - f(0)$, the change in $f$. The starting value $f(0) = 12$ must be added.`,
      String.raw`$12 + 12 = 24$ counts every region as positive area, $4 + 6 + 1 + 1 = 12$. The regions below the axis are subtracted.`,
      String.raw`$12 + 10 = 22$ adds the size of the change. Since $f' < 0$ for most of the interval, $f$ decreases by $10$.`,
    ],
    answer: 0 },
  { id: "c6t-m07", type: "mcq", skill: "u6", topic: "6.8", calc: false, difficulty: "easy",
    question: String.raw`$\displaystyle\int \left(\dfrac{2}{\sqrt{1 - x^2}} + 3\sin x - 1\right)dx =$`,
    choices: [
      String.raw`$2\arcsin x - 3\cos x - x + C$`,
      String.raw`$2\arcsin x + 3\cos x - x + C$`,
      String.raw`$2\arctan x - 3\cos x - x + C$`,
      String.raw`$2\arcsin x - 3\cos x + C$`,
    ],
    why: [
      String.raw`$\dfrac{d}{dx}\arcsin x = \dfrac{1}{\sqrt{1 - x^2}}$, $\dfrac{d}{dx}(-\cos x) = \sin x$, and $\dfrac{d}{dx}(-x) = -1$, so the answer is $2\arcsin x - 3\cos x - x + C$.`,
      String.raw`The derivative of $\cos x$ is $-\sin x$, so the antiderivative of $\sin x$ is $-\cos x$.`,
      String.raw`The arctangent is the antiderivative of $\dfrac{1}{1 + x^2}$. The antiderivative of $\dfrac{1}{\sqrt{1 - x^2}}$ is $\arcsin x$.`,
      String.raw`This drops the constant term. The antiderivative of $-1$ is $-x$.`,
    ],
    answer: 0 },
  { id: "c6t-m08", type: "mcq", skill: "u6", topic: "6.9", calc: false, difficulty: "easy",
    question: String.raw`$\displaystyle\int_{0}^{\pi/6} \cos(3x)\,dx =$`,
    choices: [String.raw`$\dfrac{1}{3}$`, "$1$", "$3$", String.raw`$-\dfrac{1}{3}$`],
    why: [
      String.raw`Let $u = 3x$, so $du = 3\,dx$, and $u$ runs from $0$ to $\dfrac{\pi}{2}$. The integral is $\dfrac{1}{3}\displaystyle\int_{0}^{\pi/2} \cos u\,du = \dfrac{1}{3}\left(\sin\dfrac{\pi}{2} - \sin 0\right) = \dfrac{1}{3}$.`,
      String.raw`This loses the factor $\dfrac{1}{3}$ from $du = 3\,dx$.`,
      String.raw`This multiplies by $3$ instead of dividing by $3$ when it replaces $dx$.`,
      String.raw`This uses $-\dfrac{1}{3}\sin(3x)$ as the antiderivative. The derivative of $\sin u$ is $+\cos u$.`,
    ],
    answer: 0 },
  { id: "c6t-m09", type: "mcq", skill: "u6", topic: "6.10", calc: false, difficulty: "difficult",
    question: String.raw`$\displaystyle\int_{1}^{4} \dfrac{1}{x^2 - 2x + 10}\,dx =$`,
    choices: [String.raw`$\dfrac{\pi}{12}$`, String.raw`$\dfrac{\pi}{4}$`, String.raw`$\dfrac{\pi}{36}$`, String.raw`$\ln 2$`],
    why: [
      String.raw`Completing the square gives $(x - 1)^2 + 9$, so an antiderivative is $\dfrac{1}{3}\arctan\left(\dfrac{x - 1}{3}\right)$. The value is $\dfrac{1}{3}\arctan 1 - \dfrac{1}{3}\arctan 0 = \dfrac{\pi}{12}$.`,
      String.raw`This leaves out the factor $\dfrac{1}{a} = \dfrac{1}{3}$ in $\displaystyle\int \dfrac{du}{u^2 + a^2} = \dfrac{1}{a}\arctan\left(\dfrac{u}{a}\right) + C$.`,
      String.raw`This uses $\dfrac{1}{a^2} = \dfrac{1}{9}$ instead of $\dfrac{1}{a} = \dfrac{1}{3}$.`,
      String.raw`This uses the log rule, $\ln(18) - \ln(9)$, but the numerator $1$ is not the derivative $2x - 2$ of the denominator.`,
    ],
    answer: 0 },
  { id: "c6t-m10", type: "mcq", skill: "u6", topic: "6.14", calc: false, difficulty: "difficult",
    question: String.raw`$\displaystyle\int \dfrac{e^{x}}{1 + e^{2x}}\,dx =$`,
    choices: [
      String.raw`$\arctan\left(e^{x}\right) + C$`,
      String.raw`$\ln\left(1 + e^{2x}\right) + C$`,
      String.raw`$\dfrac{1}{2}\ln\left(1 + e^{2x}\right) + C$`,
      String.raw`$e^{x}\arctan\left(e^{x}\right) + C$`,
    ],
    why: [
      String.raw`Let $u = e^{x}$, so $du = e^{x}\,dx$ and $e^{2x} = u^2$. The integral is $\displaystyle\int \dfrac{du}{1 + u^2} = \arctan u + C = \arctan\left(e^{x}\right) + C$.`,
      String.raw`This uses the log rule, but the derivative of $1 + e^{2x}$ is $2e^{2x}$, not $e^{x}$.`,
      String.raw`This is an antiderivative of $\dfrac{e^{2x}}{1 + e^{2x}}$. The numerator here is $e^{x}$.`,
      String.raw`This keeps the factor $e^{x}$ after the substitution. It becomes part of $du = e^{x}\,dx$.`,
    ],
    answer: 0 },

  // Multiple choice, calculator
  { id: "c6t-m11", type: "mcq", skill: "u6", topic: "6.2", calc: true, difficulty: "easy",
    question: String.raw`Using a midpoint Riemann sum with two subintervals of equal length, what is the approximation of $\displaystyle\int_{0}^{4} \ln\left(1 + x^3\right)dx$?`,
    choices: ["$8.051$", "$8.232$", "$4.394$", "$12.743$"],
    why: [
      String.raw`The subintervals are $[0, 2]$ and $[2, 4]$, with midpoints $1$ and $3$. The sum is $2\left(\ln 2 + \ln 28\right) \approx 8.051$.`,
      String.raw`$8.232$ is the value of the integral itself. The question asks for the midpoint approximation.`,
      String.raw`This is the left Riemann sum, $2\left(\ln 1 + \ln 9\right)$, which uses the left endpoints $0$ and $2$.`,
      String.raw`This is the right Riemann sum, $2\left(\ln 9 + \ln 65\right)$, which uses the right endpoints $2$ and $4$.`,
    ],
    answer: 0 },
  { id: "c6t-m12", type: "mcq", skill: "u6", topic: "6.4", calc: true, difficulty: "moderate",
    stem: String.raw`Let $G(x) = \displaystyle\int_{2}^{x} \sqrt{3 + \sin t}\,dt$.`,
    question: String.raw`What is the value of $G(0)$?`,
    choices: ["$-3.848$", "$3.848$", "$1.732$", "$-0.245$"],
    why: [
      String.raw`$G(0) = \displaystyle\int_{2}^{0} \sqrt{3 + \sin t}\,dt = -\displaystyle\int_{0}^{2} \sqrt{3 + \sin t}\,dt \approx -3.848$.`,
      String.raw`This is $\displaystyle\int_{0}^{2} \sqrt{3 + \sin t}\,dt$. With the limits from $2$ to $0$, the integral is negative.`,
      String.raw`$1.732 = \sqrt{3 + \sin 0}$ is $G'(0)$, the value of the integrand, not of $G$.`,
      String.raw`This computes $\sqrt{3 + \sin 0} - \sqrt{3 + \sin 2} \approx -0.245$, evaluating the integrand at the limits as if it were an antiderivative.`,
    ],
    answer: 0 },
  { id: "c6t-m13", type: "mcq", skill: "u6", topic: "6.5", calc: true, difficulty: "difficult",
    stem: String.raw`Let $g(x) = \displaystyle\int_{0}^{x} \left(\cos t + \dfrac{t}{4}\right)dt$ for $0 < x < 5$.`,
    question: String.raw`Which of the following gives the $x$-coordinates of all points of inflection of the graph of $g$?`,
    choices: [String.raw`$0.253$ and $2.889$`, String.raw`$2.133$ and $3.595$`, String.raw`$0.253$ only`, String.raw`$1.571$ and $4.712$`],
    why: [
      String.raw`$g'(x) = \cos x + \dfrac{x}{4}$ and $g''(x) = -\sin x + \dfrac{1}{4}$. With a calculator, $g''$ changes sign at $x \approx 0.253$ and $x \approx 2.889$ on $0 < x < 5$, so the graph of $g$ has points of inflection there.`,
      String.raw`These are the zeros of $g'(x) = \cos x + \dfrac{x}{4}$, where $g$ has relative extrema. Inflection points come from sign changes of $g''$.`,
      String.raw`$g''(x) = \dfrac{1}{4} - \sin x$ also changes sign at $x \approx 2.889$, where $\sin x$ falls back below $\dfrac{1}{4}$.`,
      String.raw`These are the zeros of the derivative of $g''$, $-\cos x$, one derivative too far. Points of inflection of $g$ are where $g''$ changes sign.`,
    ],
    answer: 0 },
  { id: "c6t-m14", type: "mcq", skill: "u6", topic: "6.7", calc: true, difficulty: "moderate",
    stem: String.raw`The function $f$ is differentiable, $f(3) = 4$, and $f'(x) = \dfrac{e^{x}}{1 + x^2}$.`,
    question: String.raw`What is the value of $f(1)$?`,
    choices: ["$0.906$", "$7.094$", "$3.094$", "$1.991$"],
    why: [
      String.raw`By the Fundamental Theorem of Calculus, $f(1) = f(3) - \displaystyle\int_{1}^{3} f'(x)\,dx \approx 4 - 3.094 = 0.906$.`,
      String.raw`This adds the integral to $f(3)$. Moving backward from $x = 3$ to $x = 1$ subtracts the change $\displaystyle\int_{1}^{3} f'(x)\,dx$.`,
      String.raw`$3.094$ is $\displaystyle\int_{1}^{3} f'(x)\,dx = f(3) - f(1)$, the change in $f$, not $f(1)$.`,
      String.raw`This subtracts $f'(3) = \dfrac{e^{3}}{10}$ from $f(3)$, as if the rate at $x = 3$ applied over one unit. The change in $f$ is the integral of $f'$.`,
    ],
    answer: 0 },
  { id: "c6t-m15", type: "mcq", skill: "u6", topic: "6.6", calc: true, difficulty: "easy",
    stem: String.raw`The function $f$ is defined by $f(x) = \begin{cases} e^{x} & \text{for } x \le 0 \\ \sqrt{1 + x^2} & \text{for } x > 0 \end{cases}$`,
    question: String.raw`What is the value of $\displaystyle\int_{-2}^{2} f(x)\,dx$?`,
    choices: ["$3.823$", "$7.254$", "$5.916$", "$9.347$"],
    why: [
      String.raw`Split the integral at $x = 0$: $\displaystyle\int_{-2}^{0} e^{x}\,dx + \displaystyle\int_{0}^{2} \sqrt{1 + x^2}\,dx \approx 0.865 + 2.958 = 3.823$.`,
      String.raw`This integrates $e^{x}$ over the whole interval $[-2, 2]$. For $x > 0$, $f$ is given by the other formula.`,
      String.raw`This integrates $\sqrt{1 + x^2}$ over the whole interval $[-2, 2]$. For $x \le 0$, $f(x) = e^{x}$.`,
      String.raw`This swaps the two pieces, integrating $\sqrt{1 + x^2}$ on $[-2, 0]$ and $e^{x}$ on $[0, 2]$.`,
    ],
    answer: 0 },

  // Free response 1: visitors at an aquarium (calculator)
  { id: "c6t-f1a", type: "frq", skill: "u6", topic: "6.2", calc: true, set: "c6t-s1", part: "(a)",
    prompt: String.raw`Use a left Riemann sum with the five subintervals indicated by the table to approximate $\displaystyle\int_{0}^{8} E(t)\,dt$. Using correct units, explain the meaning of $\displaystyle\int_{0}^{8} E(t)\,dt$ in the context of the problem.`,
    rows: [
      { name: "Left sum", earns: String.raw`$1(110) + 2(160) + 1(230) + 3(210) + 1(120) = 1410$` },
      { name: "Meaning", earns: String.raw`$\displaystyle\int_{0}^{8} E(t)\,dt$ is the total number of visitors who arrive at the aquarium from 9:00 A.M. ($t = 0$) to 5:00 P.M. ($t = 8$).` },
    ],
    solution: String.raw`The subintervals have widths $1$, $2$, $1$, $3$, and $1$.

$\displaystyle\int_{0}^{8} E(t)\,dt \approx 1(110) + 2(160) + 1(230) + 3(210) + 1(120) = 110 + 320 + 230 + 630 + 120 = 1410$ visitors.

$\displaystyle\int_{0}^{8} E(t)\,dt$ is the total number of visitors who arrive at the aquarium during the $8$ hours from $t = 0$ to $t = 8$.` },
  { id: "c6t-f1b", type: "frq", skill: "u6", topic: "6.7", calc: true, set: "c6t-s1", part: "(b)",
    prompt: String.raw`Use your answer from part (a) to approximate the number of visitors in the aquarium at time $t = 8$.`,
    rows: [
      { name: "Integral of L", earns: String.raw`$\displaystyle\int_{0}^{8} L(t)\,dt = 1020.236$` },
      { name: "Answer", earns: String.raw`$1410 - 1020.236 = 389.764$, about $390$ visitors` },
    ],
    solution: String.raw`The number of visitors in the aquarium at $t = 8$ is $0 + \displaystyle\int_{0}^{8} E(t)\,dt - \displaystyle\int_{0}^{8} L(t)\,dt$.

With a calculator, $\displaystyle\int_{0}^{8} L(t)\,dt = 1020.236$.

So the number of visitors is approximately $1410 - 1020.236 = 389.764$, or about $390$ visitors.` },
  { id: "c6t-f1c", type: "frq", skill: "u6", topic: "6.4", calc: true, set: "c6t-s1", part: "(c)",
    prompt: String.raw`For parts (c) and (d), use the model $A(t) = 110 + 50t - 7t^2$ visitors per hour, in place of the table, for the rate at which visitors arrive, and the number of visitors in the aquarium at time $t$ is $N(t) = \displaystyle\int_{0}^{t} \left(A(x) - L(x)\right)dx$. Find $N'(5)$. Is the number of visitors in the aquarium increasing or decreasing at time $t = 5$? Give a reason for your answer.`,
    rows: [
      { name: "N'(5)", earns: String.raw`$N'(5) = A(5) - L(5) = 5.827$` },
      { name: "Answer with reason", earns: String.raw`Increasing, because $N'(5) > 0$.` },
    ],
    solution: String.raw`By the Fundamental Theorem of Calculus, $N'(t) = A(t) - L(t)$.

$N'(5) = A(5) - L(5) = 185 - 180\sin\left(\dfrac{5}{3}\right) = 185 - 179.173 = 5.827$.

Since $N'(5) > 0$, the number of visitors in the aquarium is increasing at $t = 5$.` },
  { id: "c6t-f1d", type: "frq", skill: "u6", topic: "6.5", calc: true, set: "c6t-s1", part: "(d)",
    prompt: String.raw`Using the model in part (c), find the time $t$, for $0 \le t \le 8$, at which the number of visitors in the aquarium is greatest. How many visitors are in the aquarium at that time? Justify your answer.`,
    rows: [
      { name: "Critical point", earns: String.raw`Sets $N'(t) = A(t) - L(t) = 0$ and finds $t = 5.450$.` },
      { name: "Justification", earns: String.raw`$N'(t) > 0$ for $0 \le t < 5.450$ and $N'(t) < 0$ for $5.450 < t \le 8$, so $N$ has its absolute maximum at $t = 5.450$.` },
      { name: "Answer", earns: String.raw`$N(5.450) = 292.909$ visitors` },
    ],
    solution: String.raw`$N'(t) = A(t) - L(t) = 0$ at $t = 5.450$ on $0 \le t \le 8$ (with a calculator).

$N'(t) = A(t) - L(t)$ is positive for $0 \le t < 5.450$ and negative for $5.450 < t \le 8$. So $N$ increases until $t = 5.450$ and decreases after it, and the absolute maximum of $N$ on $[0, 8]$ is at $t = 5.450$. (As a check by the Candidates Test, $N(0) = 0$ and $N(8) = 265.097$, both less than $N(5.450)$.)

$N(5.450) = \displaystyle\int_{0}^{5.450} \left(A(x) - L(x)\right)dx = 292.909$, so about $293$ visitors are in the aquarium at that time.` },

  // Free response 2: accumulation function from a graph (no calculator)
  { id: "c6t-f2a", type: "frq", skill: "u6", topic: "6.4", calc: false, set: "c6t-s2", part: "(a)",
    prompt: String.raw`Find $g(-2)$ and $g(8)$.`,
    rows: [
      { name: "g(-2)", earns: String.raw`$g(-2) = -\displaystyle\int_{-2}^{0} f(t)\,dt = \pi$` },
      { name: "g(8)", earns: String.raw`$g(8) = 14 - \pi$` },
    ],
    solution: String.raw`$g(-2) = \displaystyle\int_{0}^{-2} f(t)\,dt = -\displaystyle\int_{-2}^{0} f(t)\,dt$. On $[-2, 0]$ the region is a quarter of a circle of radius $2$, below the $x$-axis, with area $\dfrac{1}{4}\pi(2)^2 = \pi$. So $\displaystyle\int_{-2}^{0} f(t)\,dt = -\pi$ and $g(-2) = \pi$.

$g(8) = \displaystyle\int_{0}^{2} f(t)\,dt + \displaystyle\int_{2}^{6} f(t)\,dt + \displaystyle\int_{6}^{8} f(t)\,dt$. The quarter circle on $[0, 2]$ is below the axis with area $\pi$, the triangle on $[2, 6]$ has area $\dfrac{1}{2}(4)(4) = 8$, and the trapezoid on $[6, 8]$ has area $\dfrac{4 + 2}{2}(2) = 6$. So $g(8) = -\pi + 8 + 6 = 14 - \pi$.` },
  { id: "c6t-f2b", type: "frq", skill: "u6", topic: "6.4", calc: false, set: "c6t-s2", part: "(b)",
    prompt: String.raw`Find $g'(-1)$ and $g''(7)$.`,
    rows: [
      { name: "g'(-1)", earns: String.raw`$g'(-1) = f(-1) = -\sqrt{3}$, using $g'(x) = f(x)$` },
      { name: "g''(7)", earns: String.raw`$g''(7) = f'(7) = -1$` },
    ],
    solution: String.raw`By the Fundamental Theorem of Calculus, $g'(x) = f(x)$. On $[-2, 2]$ the graph is $y = -\sqrt{4 - x^2}$, so $g'(-1) = f(-1) = -\sqrt{4 - 1} = -\sqrt{3}$.

$g''(x) = f'(x)$, and $f'(7)$ is the slope of the segment from $(6, 4)$ to $(8, 2)$: $\dfrac{2 - 4}{8 - 6} = -1$. So $g''(7) = -1$.` },
  { id: "c6t-f2c", type: "frq", skill: "u6", topic: "6.5", calc: false, set: "c6t-s2", part: "(c)",
    prompt: String.raw`Find the $x$-coordinate of each point of inflection of the graph of $g$ on the interval $-2 < x < 8$. Justify your answer.`,
    rows: [
      { name: "Answer", earns: String.raw`$x = 0$ and $x = 6$` },
      { name: "Justification", earns: String.raw`$g' = f$ changes from decreasing to increasing at $x = 0$ and from increasing to decreasing at $x = 6$, and $f$ does not change between increasing and decreasing at any other point.` },
    ],
    solution: String.raw`The graph of $g$ has a point of inflection where $g' = f$ changes from increasing to decreasing or from decreasing to increasing.

$f$ is decreasing on $-2 < x < 0$ (the left half of the lower semicircle), increasing on $0 < x < 6$ (the right half of the semicircle and the segment up to $(6, 4)$), and decreasing on $6 < x < 8$. So $g'$ changes from decreasing to increasing at $x = 0$ and from increasing to decreasing at $x = 6$, and the graph of $g$ has points of inflection at both.

At $x = 2$, $f$ is increasing on both sides, so that is not a point of inflection. The points of inflection are at $x = 0$ and $x = 6$.` },
  { id: "c6t-f2d", type: "frq", skill: "u6", topic: "6.5", calc: false, set: "c6t-s2", part: "(d)",
    prompt: String.raw`Find the absolute minimum value of $g$ on the interval $-2 \le x \le 8$. Justify your answer.`,
    rows: [
      { name: "Candidates", earns: String.raw`Evaluates $g$ at the critical point $x = 2$ and at the endpoints: $g(-2) = \pi$, $g(2) = -\pi$, $g(8) = 14 - \pi$.` },
      { name: "Answer", earns: String.raw`The absolute minimum value is $-\pi$, at $x = 2$, by the Candidates Test.` },
    ],
    solution: String.raw`$g'(x) = f(x) = 0$ at $x = -2$ and $x = 2$, so the only critical point inside the interval is $x = 2$. Since $g$ is continuous on $[-2, 8]$, its absolute minimum occurs at a critical point or an endpoint.

$g(-2) = \pi$

$g(2) = \displaystyle\int_{0}^{2} f(t)\,dt = -\pi$

$g(8) = 14 - \pi$

Since $\pi < 7$, $14 - \pi > -\pi$, and $\pi > -\pi$. The least of these values is $-\pi$, so the absolute minimum value of $g$ on $[-2, 8]$ is $-\pi$, at $x = 2$.` },
  { id: "c6t-f2e", type: "frq", skill: "u6", topic: "6.6", calc: false, set: "c6t-s2", part: "(e)",
    prompt: String.raw`Find the value of $\displaystyle\int_{-2}^{8} \left(2f(x) + 1\right)dx$.`,
    rows: [
      { name: "Answer", earns: String.raw`$2\left(-2\pi + 8 + 6\right) + 10 = 38 - 4\pi$` },
    ],
    solution: String.raw`$\displaystyle\int_{-2}^{8} f(x)\,dx = -2\pi + 8 + 6 = 14 - 2\pi$, since the whole lower semicircle has area $\dfrac{1}{2}\pi(2)^2 = 2\pi$. Also $\displaystyle\int_{-2}^{8} 1\,dx = 10$.

$$\int_{-2}^{8} \left(2f(x) + 1\right)dx = 2\left(14 - 2\pi\right) + 10 = 38 - 4\pi$$` },
];

export default { forms: [{ id: "c6t", name: "Unit 6 Test", group: "Unit 6: Integration and Accumulation of Change", items }] };

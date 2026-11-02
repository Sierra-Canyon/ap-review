import { graph } from "../../plot.js";

// Graph of f for the free-response question c6t-s2. Pieces: the segment (-2, -2) to (0, 0) (area -2), the upper semicircle of
// radius 3 centered at (3, 0) on [0, 6] (area 9pi/2), the segment (6, 0) to (8, -4) (area -4).
// With g(x) = integral from 0 to x of f: g(-2) = 2, g(0) = 0, g(3) = 9pi/4, g(6) = 9pi/2, g(8) = 9pi/2 - 4.
const semi = (x) => Math.sqrt(Math.max(0, 9 - (x - 3) ** 2));
const fGraph = graph({
  x: [-2, 8], y: [-4, 4], xname: "x", yname: "y",
  fns: [{ f: semi, from: 0, to: 6 }],
  segments: [[-2, -2, 0, 0], [6, 0, 8, -4]],
  dots: [[-2, -2, "closed"], [8, -4, "closed"]],
  alt: "Graph of f for -2 to 8. A line segment goes from (-2, -2) up to the origin. From x = 0 to x = 6 the graph is the upper half of a circle of radius 3 centered at (3, 0), rising from (0, 0) to a high point (3, 3) and falling back to (6, 0). Then a line segment goes from (6, 0) down to (8, -4).",
});

export const sets = {
  "c6t-s1": { name: "Visitors at an aquarium", label: "Free response", intro: String.raw`On a certain day, visitors arrive at an aquarium at a rate of $E(t)$ visitors per hour, where $E$ is a continuous function and $t$ is the number of hours after the aquarium opens at 9:00 A.M., $0 \le t \le 8$. Selected values of $E(t)$ are shown in the table below. Visitors leave the aquarium at a rate modeled by $L(t) = 180\sin\left(\dfrac{t}{3}\right)$ visitors per hour. No visitors are in the aquarium at time $t = 0$.`,
    sources: [{ title: "", blocks: [
      { table: { head: ["$t$ (hours)", "$0$", "$1$", "$3$", "$4$", "$7$", "$8$"], rows: [["$E(t)$ (visitors per hour)", "$110$", "$160$", "$230$", "$210$", "$120$", "$40$"]] } },
      { p: String.raw`A graphing calculator is allowed. Give decimal answers to three decimal places.` }] }] },
  "c6t-s2": { name: "An accumulation function from a graph", label: "Free response", intro: String.raw`The graph of the continuous function $f$ on the interval $-2 \le x \le 8$ is shown below. It consists of two line segments and a semicircle. Let $g$ be the function defined by $g(x) = \displaystyle\int_{0}^{x} f(t)\,dt$ for $-2 \le x \le 8$.`,
    sources: [{ title: "", blocks: [{ svg: fGraph }, { p: String.raw`Answer each part without a calculator. Show the work that leads to each answer.` }] }] },
  "c6t-s3": { name: "Speed of a train", label: "Table", intro: String.raw`A train travels along a straight track. Its speed is $v(t)$ meters per second, where $v$ is a continuous function and $t$ is measured in seconds. Selected values of $v(t)$ are shown in the table below.`,
    sources: [{ title: "", blocks: [{ table: { head: ["$t$ (seconds)", "$0$", "$2$", "$4$", "$7$", "$10$", "$12$", "$14$"], rows: [["$v(t)$ (meters per second)", "$3$", "$5$", "$6$", "$10$", "$8$", "$4$", "$1$"]] } }] }] },
};

const items = [
  // Multiple choice, no calculator
  { id: "c6t-m01", type: "mcq", skill: "u6", topic: "6.1", calc: false,
    stem: String.raw`A machine fills bottles at a rate of $B(t)$ bottles per minute, where $t$ is measured in minutes.`,
    question: String.raw`Which of the following gives the number of bottles the machine fills during the first hour?`,
    choices: [
      String.raw`$\displaystyle\int_{0}^{60} B(t)\,dt$`,
      String.raw`$\displaystyle\int_{0}^{1} B(t)\,dt$`,
      String.raw`$B(60) - B(0)$`,
      String.raw`$60B(60)$`,
    ],
    why: [
      String.raw`The number filled is the accumulated rate over the time interval. Since $t$ is in minutes, the first hour is $0 \le t \le 60$, and the number is $\displaystyle\int_{0}^{60} B(t)\,dt$.`,
      String.raw`$t$ is measured in minutes, so this is the number of bottles filled during the first minute.`,
      String.raw`This is the change in the filling rate, in bottles per minute. The number filled is the integral of the rate.`,
      String.raw`This assumes the rate stays equal to $B(60)$ for the whole hour. The rate may change, so the number must be accumulated with an integral.`,
    ],
    answer: 0 },
  { id: "c6t-m02", type: "mcq", skill: "u6", topic: "6.2", calc: false, set: "c6t-s3",
    question: String.raw`Using a midpoint Riemann sum with the three subintervals $[0, 4]$, $[4, 10]$, and $[10, 14]$, what is the approximation of $\displaystyle\int_{0}^{14} v(t)\,dt$?`,
    choices: ["$96$", "$80$", "$76$", "$19$"],
    why: [
      String.raw`The midpoints are $t = 2$, $7$, and $12$, and the widths are $4$, $6$, and $4$. The sum is $4(5) + 6(10) + 4(4) = 20 + 60 + 16 = 96$ meters.`,
      String.raw`This uses the left endpoints $t = 0$, $4$, and $10$: $4(3) + 6(6) + 4(8) = 80$.`,
      String.raw`This uses the right endpoints $t = 4$, $10$, and $14$: $4(6) + 6(8) + 4(1) = 76$.`,
      String.raw`This adds the midpoint values $5 + 10 + 4$ without multiplying by the widths of the subintervals.`,
    ],
    answer: 0 },
  { id: "c6t-m03", type: "mcq", skill: "u6", topic: "6.3", calc: false,
    question: String.raw`$\displaystyle\lim_{n \to \infty} \sum_{k=1}^{n} \dfrac{2}{n}e^{1 + 2k/n}$ is equal to`,
    choices: [String.raw`$e^{3} - e$`, String.raw`$e^{2} - 1$`, String.raw`$2\left(e^{3} - e\right)$`, String.raw`$e^{3} - 1$`],
    why: [
      String.raw`With $\Delta x = \dfrac{2}{n}$ and $x_k = 1 + \dfrac{2k}{n}$, the sample points run from $1$ to $3$, so the limit is $\displaystyle\int_{1}^{3} e^{x}\,dx = e^{3} - e$.`,
      String.raw`This is $\displaystyle\int_{0}^{2} e^{x}\,dx$. It drops the starting value $1$ from the sample points.`,
      String.raw`The factor $\dfrac{2}{n}$ is $\Delta x$, which becomes $dx$. Keeping the $2$ as a coefficient doubles the value.`,
      String.raw`This uses the correct upper limit $3$ but starts the interval at $0$. The sample points begin just to the right of $x = 1$.`,
    ],
    answer: 0 },
  { id: "c6t-m04", type: "mcq", skill: "u6", topic: "6.4", calc: false,
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
  { id: "c6t-m05", type: "mcq", skill: "u6", topic: "6.5", calc: false,
    stem: String.raw`Let $g(x) = \displaystyle\int_{1}^{x} (t - 2)e^{t}\,dt$.`,
    question: String.raw`On which interval is $g$ decreasing and its graph concave up?`,
    choices: [String.raw`$1 < x < 2$`, String.raw`$x < 2$`, String.raw`$x > 1$`, String.raw`$x > 2$`],
    why: [
      String.raw`$g'(x) = (x - 2)e^{x}$ is negative for $x < 2$, and $g''(x) = e^{x} + (x - 2)e^{x} = (x - 1)e^{x}$ is positive for $x > 1$. Both hold on $1 < x < 2$.`,
      String.raw`This is where $g$ is decreasing. For $x < 1$, $g''(x) < 0$, so the graph is concave down there.`,
      String.raw`This is where the graph of $g$ is concave up. For $x > 2$, $g'(x) > 0$, so $g$ is increasing there.`,
      String.raw`For $x > 2$, $g'(x) > 0$, so $g$ is increasing there, not decreasing.`,
    ],
    answer: 0 },
  { id: "c6t-m06", type: "mcq", skill: "u6", topic: "6.7", calc: false,
    question: String.raw`$\displaystyle\int_{1}^{8} \left(x^{1/3} + \dfrac{1}{x}\right)dx =$`,
    choices: [String.raw`$\dfrac{45}{4} + \ln 8$`, String.raw`$12 + \ln 8$`, String.raw`$20 + \ln 8$`, String.raw`$\dfrac{45}{4} + \dfrac{63}{64}$`],
    why: [
      String.raw`An antiderivative is $\dfrac{3}{4}x^{4/3} + \ln x$. Then $\left(\dfrac{3}{4}(16) + \ln 8\right) - \left(\dfrac{3}{4} + 0\right) = \dfrac{45}{4} + \ln 8$.`,
      String.raw`This evaluates $\dfrac{3}{4}x^{4/3}$ at $x = 8$ only and does not subtract its value $\dfrac{3}{4}$ at $x = 1$.`,
      String.raw`This multiplies by the new exponent $\dfrac{4}{3}$ instead of dividing by it, using $\dfrac{4}{3}x^{4/3}$.`,
      String.raw`This uses $-\dfrac{1}{x^2}$, the derivative of $\dfrac{1}{x}$, in place of its antiderivative $\ln x$.`,
    ],
    answer: 0 },
  { id: "c6t-m07", type: "mcq", skill: "u6", topic: "6.8", calc: false,
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
  { id: "c6t-m08", type: "mcq", skill: "u6", topic: "6.9", calc: false,
    question: String.raw`$\displaystyle\int_{0}^{\pi/6} \cos(3x)\,dx =$`,
    choices: [String.raw`$\dfrac{1}{3}$`, "$1$", "$3$", String.raw`$-\dfrac{1}{3}$`],
    why: [
      String.raw`Let $u = 3x$, so $du = 3\,dx$, and $u$ runs from $0$ to $\dfrac{\pi}{2}$. The integral is $\dfrac{1}{3}\displaystyle\int_{0}^{\pi/2} \cos u\,du = \dfrac{1}{3}\left(\sin\dfrac{\pi}{2} - \sin 0\right) = \dfrac{1}{3}$.`,
      String.raw`This loses the factor $\dfrac{1}{3}$ from $du = 3\,dx$.`,
      String.raw`This multiplies by $3$ instead of dividing by $3$ when it replaces $dx$.`,
      String.raw`This uses $-\dfrac{1}{3}\sin(3x)$ as the antiderivative. The derivative of $\sin u$ is $+\cos u$.`,
    ],
    answer: 0 },
  { id: "c6t-m09", type: "mcq", skill: "u6", topic: "6.10", calc: false,
    question: String.raw`$\displaystyle\int_{1}^{4} \dfrac{1}{x^2 - 2x + 10}\,dx =$`,
    choices: [String.raw`$\dfrac{\pi}{12}$`, String.raw`$\dfrac{\pi}{4}$`, String.raw`$\dfrac{\pi}{36}$`, String.raw`$\ln 2$`],
    why: [
      String.raw`Completing the square gives $(x - 1)^2 + 9$, so an antiderivative is $\dfrac{1}{3}\arctan\left(\dfrac{x - 1}{3}\right)$. The value is $\dfrac{1}{3}\arctan 1 - \dfrac{1}{3}\arctan 0 = \dfrac{\pi}{12}$.`,
      String.raw`This leaves out the factor $\dfrac{1}{a} = \dfrac{1}{3}$ in $\displaystyle\int \dfrac{du}{u^2 + a^2} = \dfrac{1}{a}\arctan\left(\dfrac{u}{a}\right) + C$.`,
      String.raw`This uses $\dfrac{1}{a^2} = \dfrac{1}{9}$ instead of $\dfrac{1}{a} = \dfrac{1}{3}$.`,
      String.raw`This uses the log rule, $\ln(18) - \ln(9)$, but the numerator $1$ is not the derivative $2x - 2$ of the denominator.`,
    ],
    answer: 0 },
  { id: "c6t-m10", type: "mcq", skill: "u6", topic: "6.14", calc: false,
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
  { id: "c6t-m11", type: "mcq", skill: "u6", topic: "6.2", calc: true,
    question: String.raw`Using a midpoint Riemann sum with two subintervals of equal length, what is the approximation of $\displaystyle\int_{0}^{4} \ln\left(1 + x^3\right)dx$?`,
    choices: ["$8.051$", "$8.232$", "$4.394$", "$12.743$"],
    why: [
      String.raw`The subintervals are $[0, 2]$ and $[2, 4]$, with midpoints $1$ and $3$. The sum is $2\left(\ln 2 + \ln 28\right) \approx 8.051$.`,
      String.raw`$8.232$ is the value of the integral itself. The question asks for the midpoint approximation.`,
      String.raw`This is the left Riemann sum, $2\left(\ln 1 + \ln 9\right)$, which uses the left endpoints $0$ and $2$.`,
      String.raw`This is the right Riemann sum, $2\left(\ln 9 + \ln 65\right)$, which uses the right endpoints $2$ and $4$.`,
    ],
    answer: 0 },
  { id: "c6t-m12", type: "mcq", skill: "u6", topic: "6.4", calc: true,
    stem: String.raw`Let $G(x) = \displaystyle\int_{2}^{x} \sqrt{3 + \sin t}\,dt$.`,
    question: String.raw`What is the value of $G(0)$?`,
    choices: ["$-3.848$", "$3.848$", "$1.732$", "$0.245$"],
    why: [
      String.raw`$G(0) = \displaystyle\int_{2}^{0} \sqrt{3 + \sin t}\,dt = -\displaystyle\int_{0}^{2} \sqrt{3 + \sin t}\,dt \approx -3.848$.`,
      String.raw`This is $\displaystyle\int_{0}^{2} \sqrt{3 + \sin t}\,dt$. With the limits from $2$ to $0$, the integral is negative.`,
      String.raw`$1.732 = \sqrt{3 + \sin 0}$ is $G'(0)$, the value of the integrand, not of $G$.`,
      String.raw`This computes $\sqrt{3 + \sin 2} - \sqrt{3 + \sin 0} \approx 0.245$, treating the integrand like an antiderivative.`,
    ],
    answer: 0 },
  { id: "c6t-m13", type: "mcq", skill: "u6", topic: "6.5", calc: true,
    stem: String.raw`Let $g(x) = \displaystyle\int_{0}^{x} t\cos t\,dt$ for $0 < x < 5$.`,
    question: String.raw`Which of the following gives the $x$-coordinates of all points of inflection of the graph of $g$?`,
    choices: [String.raw`$0.860$ and $3.426$`, String.raw`$1.571$ and $4.712$`, String.raw`$0.860$ only`, String.raw`$2.289$ only`],
    why: [
      String.raw`$g'(x) = x\cos x$ and $g''(x) = \cos x - x\sin x$. With a calculator, $g''$ changes sign at $x \approx 0.860$ and $x \approx 3.426$ on $0 < x < 5$, so the graph of $g$ has points of inflection there.`,
      String.raw`These are the zeros of $g'(x) = x\cos x$, where $g$ has relative extrema. Inflection points come from sign changes of $g''$.`,
      String.raw`$g''(x) = \cos x - x\sin x$ also changes sign at $x \approx 3.426$, which is in the interval.`,
      String.raw`$2.289$ is where the derivative of $g''$ is $0$, one derivative too far. Points of inflection of $g$ are where $g''$ changes sign.`,
    ],
    answer: 0 },
  { id: "c6t-m14", type: "mcq", skill: "u6", topic: "6.7", calc: true,
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
  { id: "c6t-m15", type: "mcq", skill: "u6", topic: "6.6", calc: true,
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
      { name: "g(-2)", earns: String.raw`$g(-2) = -\displaystyle\int_{-2}^{0} f(t)\,dt = 2$` },
      { name: "g(8)", earns: String.raw`$g(8) = \dfrac{9\pi}{2} - 4$` },
    ],
    solution: String.raw`$g(-2) = \displaystyle\int_{0}^{-2} f(t)\,dt = -\displaystyle\int_{-2}^{0} f(t)\,dt$. On $[-2, 0]$ the region is a triangle below the $x$-axis with base $2$ and height $2$, so $\displaystyle\int_{-2}^{0} f(t)\,dt = -2$ and $g(-2) = 2$.

$g(8) = \displaystyle\int_{0}^{6} f(t)\,dt + \displaystyle\int_{6}^{8} f(t)\,dt$. The semicircle of radius $3$ has area $\dfrac{1}{2}\pi(3)^2 = \dfrac{9\pi}{2}$, and the triangle below the axis from $6$ to $8$ has area $\dfrac{1}{2}(2)(4) = 4$. So $g(8) = \dfrac{9\pi}{2} - 4$.` },
  { id: "c6t-f2b", type: "frq", skill: "u6", topic: "6.4", calc: false, set: "c6t-s2", part: "(b)",
    prompt: String.raw`Find $g'(-1)$ and $g''(7)$.`,
    rows: [
      { name: "g'(-1)", earns: String.raw`$g'(-1) = f(-1) = -1$, using $g'(x) = f(x)$` },
      { name: "g''(7)", earns: String.raw`$g''(7) = f'(7) = -2$` },
    ],
    solution: String.raw`By the Fundamental Theorem of Calculus, $g'(x) = f(x)$. The segment from $(-2, -2)$ to $(0, 0)$ is the line $y = x$, so $g'(-1) = f(-1) = -1$.

$g''(x) = f'(x)$, and $f'(7)$ is the slope of the segment from $(6, 0)$ to $(8, -4)$: $\dfrac{-4 - 0}{8 - 6} = -2$. So $g''(7) = -2$.` },
  { id: "c6t-f2c", type: "frq", skill: "u6", topic: "6.5", calc: false, set: "c6t-s2", part: "(c)",
    prompt: String.raw`Find the $x$-coordinate of each point of inflection of the graph of $g$ on the interval $-2 < x < 8$. Justify your answer.`,
    rows: [
      { name: "Answer", earns: String.raw`$x = 3$ only` },
      { name: "Justification", earns: String.raw`$g' = f$ changes from increasing to decreasing at $x = 3$, and $f$ does not change between increasing and decreasing at any other point.` },
    ],
    solution: String.raw`The graph of $g$ has a point of inflection where $g' = f$ changes from increasing to decreasing or from decreasing to increasing.

$f$ is increasing on $-2 < x < 3$ (along the segment and the left half of the semicircle) and decreasing on $3 < x < 8$ (along the right half of the semicircle and the last segment). So $g'$ changes from increasing to decreasing at $x = 3$, and the graph of $g$ has a point of inflection there.

At $x = 0$, $f$ is increasing on both sides, and at $x = 6$, $f$ is decreasing on both sides, so these are not points of inflection. The only point of inflection is at $x = 3$.` },
  { id: "c6t-f2d", type: "frq", skill: "u6", topic: "6.5", calc: false, set: "c6t-s2", part: "(d)",
    prompt: String.raw`Find the absolute minimum value of $g$ on the interval $-2 \le x \le 8$. Justify your answer.`,
    rows: [
      { name: "Candidates", earns: String.raw`Evaluates $g$ at the critical points $x = 0$ and $x = 6$ and at the endpoints: $g(-2) = 2$, $g(0) = 0$, $g(6) = \dfrac{9\pi}{2}$, $g(8) = \dfrac{9\pi}{2} - 4$.` },
      { name: "Answer", earns: String.raw`The absolute minimum value is $0$, at $x = 0$, by the Candidates Test.` },
    ],
    solution: String.raw`$g'(x) = f(x) = 0$ at $x = 0$ and $x = 6$, the critical points of $g$. Since $g$ is continuous on $[-2, 8]$, its absolute minimum occurs at a critical point or an endpoint.

$g(-2) = 2$

$g(0) = 0$

$g(6) = \dfrac{9\pi}{2}$

$g(8) = \dfrac{9\pi}{2} - 4$

Since $\pi > 3$, $\dfrac{9\pi}{2} - 4 > \dfrac{27}{2} - 4 > 0$. The least of these values is $0$, so the absolute minimum value of $g$ on $[-2, 8]$ is $0$, at $x = 0$.` },
  { id: "c6t-f2e", type: "frq", skill: "u6", topic: "6.6", calc: false, set: "c6t-s2", part: "(e)",
    prompt: String.raw`Find the value of $\displaystyle\int_{-2}^{8} \left(2f(x) + 1\right)dx$.`,
    rows: [
      { name: "Answer", earns: String.raw`$2\left(-2 + \dfrac{9\pi}{2} - 4\right) + 10 = 9\pi - 2$` },
    ],
    solution: String.raw`$\displaystyle\int_{-2}^{8} f(x)\,dx = -2 + \dfrac{9\pi}{2} - 4 = \dfrac{9\pi}{2} - 6$ and $\displaystyle\int_{-2}^{8} 1\,dx = 10$.

$$\int_{-2}^{8} \left(2f(x) + 1\right)dx = 2\left(\dfrac{9\pi}{2} - 6\right) + 10 = 9\pi - 2$$` },
];

export default { forms: [{ id: "c6t", name: "Unit 6 Test", group: "Unit 6: Integration and Accumulation of Change", items }] };

import { graph } from "../../plot.js";

export const sets = {
  "q812-s1": { name: "A region under y = e^(-x)", label: "Graph", intro: String.raw`Let $R$ be the region bounded by the graph of $y = e^{-x}$, the $x$-axis, the $y$-axis, and the line $x = 2$. The region $R$ and a dashed horizontal line are shown below.`,
    sources: [{ title: "", blocks: [{ svg: graph({ x: [-0.5, 3], y: [-0.5, 2.5], step: 0.5, labelEvery: 2, xname: "x", yname: "y",
      fns: [{ f: (x) => Math.exp(-x), from: 0, to: 2.8, label: "y = e⁻ˣ", labelAt: 1.1 }, { f: () => 2, from: 0, to: 3, dash: true }],
      segments: [[2, 0, 2, Math.exp(-2)]],
      labels: [[0.45, 0.25, "R"]],
      alt: "The graph of y = e^(-x) falling from (0, 1) toward the x-axis, and the region R under it from x = 0 to x = 2, bounded by the y-axis, the x-axis, the curve, and the vertical line x = 2. A dashed horizontal line runs across the graph at height y = 2, above R." }) }] }] },
  "q812-s9": { name: "Washers about horizontal lines", label: "Free response", intro: String.raw`Let $R$ be the region enclosed by the graphs of $y = 4 - x^2$ and $y = 4 - x$.`,
    sources: [] },
};

const items = [
  { id: "q812-m01", type: "mcq", skill: "u8", topic: "8.12", calc: false, difficulty: "moderate",
    question: String.raw`The region in the first quadrant enclosed by the graphs of $y = x^3$ and $y = x$ is revolved about the line $y = -1$. What is the volume of the resulting solid?`,
    choices: [String.raw`$\frac{29\pi}{42}$`, String.raw`$\frac{4\pi}{21}$`, String.raw`$\frac{8\pi}{105}$`, String.raw`$\frac{46\pi}{21}$`],
    why: [
      String.raw`The graphs meet at $x = 0$ and $x = 1$, and $x \ge x^3$ on $[0, 1]$. Measured from $y = -1$, the outer radius is $x + 1$ and the inner radius is $x^3 + 1$. The volume is $\pi\displaystyle\int_0^1 \left((x + 1)^2 - \left(x^3 + 1\right)^2\right)dx = \pi\displaystyle\int_0^1 \left(x^2 + 2x - x^6 - 2x^3\right)dx = \pi\left(\dfrac{1}{3} + 1 - \dfrac{1}{7} - \dfrac{1}{2}\right) = \dfrac{29\pi}{42}$.`,
      String.raw`$\dfrac{4\pi}{21}$ is the volume for revolving about the $x$-axis, with radii $x$ and $x^3$. Each radius must be measured from $y = -1$.`,
      String.raw`This squares the difference of the radii, $\pi\displaystyle\int_0^1 \left(x - x^3\right)^2 dx$, in place of subtracting the squares.`,
      String.raw`This adds $1$ to the outer radius only, using $(x + 1)^2 - x^6$. The inner radius is also measured from $y = -1$: $x^3 + 1$.`,
    ], answer: 0 },
  { id: "q812-m02", type: "mcq", skill: "u8", topic: "8.12", calc: true, difficulty: "moderate", set: "q812-s1",
    question: String.raw`The region $R$ is revolved about the dashed line. What is the volume of the resulting solid?`,
    choices: ["$9.324$", "$15.809$", "$12.408$", "$40.942$"],
    why: [
      String.raw`The dashed line is $y = 2$, above $R$. Measured from it, the outer radius reaches the $x$-axis, $2$, and the inner radius reaches the curve, $2 - e^{-x}$. With a calculator, $\pi\displaystyle\int_0^2 \left(2^2 - \left(2 - e^{-x}\right)^2\right)dx = 9.324$.`,
      String.raw`This is $\pi\displaystyle\int_0^2 \left(2 - e^{-x}\right)^2 dx$, the solid made by the region between the curve and the dashed line. $R$ lies below the curve, so the solid is a washer with outer radius $2$.`,
      String.raw`This measures the radii from $y = -2$: $\pi\displaystyle\int_0^2 \left(\left(e^{-x} + 2\right)^2 - 2^2\right)dx$. The dashed line is $y = 2$, above $R$.`,
      String.raw`This adds the squares of the radii, $\pi\displaystyle\int_0^2 \left(2^2 + \left(2 - e^{-x}\right)^2\right)dx$. Each washer has area $\pi\left(R^2 - r^2\right)$.`,
    ], answer: 0 },
  { id: "q812-m03", type: "mcq", skill: "u8", topic: "8.12", calc: false, difficulty: "difficult",
    question: String.raw`The region bounded by the graph of $y = e^{x}$, the line $y = e^{2}$, and the $y$-axis is revolved about the line $x = -1$. Which integral gives the volume of the resulting solid?`,
    choices: [String.raw`$\pi\displaystyle\int_1^{e^{2}} \left(\left(\ln y + 1\right)^2 - 1\right)dy$`, String.raw`$\pi\displaystyle\int_1^{e^{2}} \left(\left(\ln y - 1\right)^2 - 1\right)dy$`, String.raw`$\pi\displaystyle\int_1^{e^{2}} \left(\ln y + 1\right)^2 dy$`, String.raw`$\pi\displaystyle\int_0^{2} \left(\left(e^{x} + 1\right)^2 - 1\right)dx$`],
    why: [
      String.raw`The curve meets $y = e^{2}$ at $x = 2$. Revolving about a vertical line gives horizontal washers. At height $y$, $1 \le y \le e^{2}$, the region runs from $x = 0$ to $x = \ln y$. Measured from $x = -1$, the outer radius is $\ln y + 1$ and the inner radius is $1$.`,
      String.raw`This subtracts $1$ from $\ln y$. The distance from $x = \ln y$ to $x = -1$ is $\ln y - (-1) = \ln y + 1$.`,
      String.raw`This leaves out the hole. The region starts at the $y$-axis, $1$ unit from the axis of revolution, so the inner radius is $1$.`,
      String.raw`This uses vertical washers with radii $e^{x} + 1$ and $1$, which are vertical distances to the line $y = -1$. The axis $x = -1$ is vertical, so the washers are horizontal and the integral is in $y$.`,
    ], answer: 0 },
  { id: "q812-m04", type: "mcq", skill: "u8", topic: "8.12", calc: true, difficulty: "easy",
    question: String.raw`The region bounded by the graph of $y = \sin x$ and the $x$-axis for $0 \le x \le \pi$ is revolved about the line $y = -1$. What is the volume of the resulting solid?`,
    choices: ["$17.501$", "$4.935$", "$27.371$", "$7.632$"],
    why: [
      String.raw`Measured from $y = -1$, the outer radius is $\sin x + 1$ and the inner radius is $1$. With a calculator, $\pi\displaystyle\int_0^{\pi} \left((\sin x + 1)^2 - 1\right)dx = 17.501$.`,
      String.raw`$4.935$ is $\pi\displaystyle\int_0^{\pi} \sin^2 x\,dx$, the volume for revolving about the $x$-axis.`,
      String.raw`This leaves out the hole: $\pi\displaystyle\int_0^{\pi} (\sin x + 1)^2\,dx$. The region is $1$ unit above the axis, so the inner radius is $1$.`,
      String.raw`This uses radii $1$ and $1 - \sin x$, which are measured from $y = 1$. The axis is $y = -1$, below the region.`,
    ], answer: 0 },
  { id: "q812-m05", type: "mcq", skill: "u8", topic: "8.12", calc: false, difficulty: "difficult",
    question: String.raw`The region bounded by the graph of $y = x^2$, the $x$-axis, and the line $x = 1$ is revolved about the line $x = 2$. What is the volume of the resulting solid?`,
    choices: [String.raw`$\frac{5\pi}{6}$`, String.raw`$\frac{5\pi}{2}$`, String.raw`$\frac{\pi}{6}$`, String.raw`$\frac{11\pi}{6}$`],
    why: [
      String.raw`At height $y$, $0 \le y \le 1$, the region runs from $x = \sqrt{y}$ to $x = 1$. Measured from $x = 2$, the outer radius is $2 - \sqrt{y}$ and the inner radius is $1$. The volume is $\pi\displaystyle\int_0^1 \left(\left(2 - \sqrt{y}\right)^2 - 1\right)dy = \pi\left(3 - \dfrac{8}{3} + \dfrac{1}{2}\right) = \dfrac{5\pi}{6}$.`,
      String.raw`This squares $2 - \sqrt{y}$ as $4 - y$, leaving out the middle term $-4\sqrt{y}$.`,
      String.raw`This squares the difference of the radii, $\pi\displaystyle\int_0^1 \left(1 - \sqrt{y}\right)^2 dy$, in place of subtracting the squares.`,
      String.raw`This leaves out the hole: $\pi\displaystyle\int_0^1 \left(2 - \sqrt{y}\right)^2 dy$. The line $x = 1$ is $1$ unit from the axis, so the inner radius is $1$.`,
    ], answer: 0 },
  { id: "q812-m06", type: "mcq", skill: "u8", topic: "8.12", calc: false, difficulty: "easy",
    question: String.raw`The functions $f$ and $g$ are continuous, and $f(x) \ge g(x) \ge 0$ for $a \le x \le b$. The region between their graphs on $[a, b]$ is revolved about the line $y = -3$. Which integral gives the volume of the resulting solid?`,
    choices: [String.raw`$\pi\displaystyle\int_a^b \left((f(x) + 3)^2 - (g(x) + 3)^2\right)dx$`, String.raw`$\pi\displaystyle\int_a^b \left((f(x) - 3)^2 - (g(x) - 3)^2\right)dx$`, String.raw`$\pi\displaystyle\int_a^b \left(f(x) - g(x)\right)^2 dx$`, String.raw`$\pi\displaystyle\int_a^b \left((g(x) + 3)^2 - (f(x) + 3)^2\right)dx$`],
    why: [
      String.raw`The distance from a point at height $y$ to the line $y = -3$ is $y + 3$. The outer radius is $f(x) + 3$ and the inner radius is $g(x) + 3$.`,
      String.raw`These radii are distances to the line $y = 3$. The distance from height $y$ to $y = -3$ is $y - (-3) = y + 3$.`,
      String.raw`This squares the difference of the radii. The washer area is $\pi\left(R^2 - r^2\right)$, and the radii must be measured from $y = -3$.`,
      String.raw`This subtracts the square of the outer radius from the square of the inner radius, so the integral is negative.`,
    ], answer: 0 },
  { id: "q812-f1a", type: "frq", skill: "u8", topic: "8.12", calc: false, set: "q812-s9", part: "(a)",
    prompt: String.raw`Find the volume of the solid generated when $R$ is revolved about the line $y = 5$.`,
    rows: [
      { name: "Integrand", earns: String.raw`Finds the limits $x = 0$ and $x = 1$ and the radii $1 + x$ (outer) and $1 + x^2$ (inner), measured from $y = 5$: $\pi\displaystyle\int_0^1 \left((1 + x)^2 - \left(1 + x^2\right)^2\right)dx$.` },
      { name: "Answer", earns: String.raw`Volume $\dfrac{7\pi}{15}$.` },
    ],
    solution: String.raw`$4 - x^2 = 4 - x$ gives $x^2 - x = 0$, so $x = 0$ and $x = 1$. On $[0, 1]$, $4 - x^2 \ge 4 - x$, so both curves lie below $y = 5$, with $y = 4 - x$ farther from it. The outer radius is $5 - (4 - x) = 1 + x$ and the inner radius is $5 - (4 - x^2) = 1 + x^2$. The volume is $\pi\displaystyle\int_0^1 \left((1 + x)^2 - \left(1 + x^2\right)^2\right)dx = \pi\displaystyle\int_0^1 \left(2x - x^2 - x^4\right)dx = \pi\left(1 - \dfrac{1}{3} - \dfrac{1}{5}\right) = \dfrac{7\pi}{15}$.` },
  { id: "q812-f1b", type: "frq", skill: "u8", topic: "8.12", calc: false, set: "q812-s9", part: "(b)",
    prompt: String.raw`Find the volume of the solid generated when $R$ is revolved about the line $y = -1$.`,
    rows: [
      { name: "Integrand", earns: String.raw`Radii measured from $y = -1$: $\pi\displaystyle\int_0^1 \left((5 - x^2)^2 - (5 - x)^2\right)dx$.` },
      { name: "Answer", earns: String.raw`Volume $\dfrac{23\pi}{15}$.` },
    ],
    solution: String.raw`Measured from $y = -1$, the outer radius is $(4 - x^2) + 1 = 5 - x^2$ and the inner radius is $(4 - x) + 1 = 5 - x$. The volume is $\pi\displaystyle\int_0^1 \left((5 - x^2)^2 - (5 - x)^2\right)dx = \pi\displaystyle\int_0^1 \left(10x - 11x^2 + x^4\right)dx = \pi\left(5 - \dfrac{11}{3} + \dfrac{1}{5}\right) = \dfrac{23\pi}{15}$.` },
];

export default { forms: [{ id: "q812", name: "Topic 8.12 Quiz: Washer Method About Other Lines", group: "Unit 8: Applications of Integration", items }] };

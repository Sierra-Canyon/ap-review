import { graph } from "../../plot.js";

export const sets = {
  "q804-s1": { name: "A parabola and a line", label: "Graph", intro: String.raw`The graph of $f(x) = x^2 - 2x$ and a line $\ell$ are shown below. The line $\ell$ passes through the marked points $(-1, 3)$ and $(1, -1)$.`,
    sources: [{ title: "", blocks: [{ svg: graph({ x: [-2, 3], y: [-2, 4], xname: "x", yname: "y",
      fns: [{ f: (x) => x * x - 2 * x, from: -1.3, to: 2.9 }, { f: (x) => 1 - 2 * x, from: -1.5, to: 1.5, label: "ℓ", labelAt: -1.4 }],
      dots: [[-1, 3, "closed"], [1, -1, "closed"]],
      labels: [[2.62, 1.0, "f"]],
      alt: "The graph of f(x) = x^2 - 2x, an upward parabola with vertex (1, -1) crossing the x-axis at 0 and 2, and a line ℓ that slopes down through the marked points (-1, 3) and (1, -1). The parabola and the line meet at those two points and enclose a region between them, with the line above the parabola." }) }] }] },
  "q804-s9": { name: "The region between f and g", label: "Free response", intro: String.raw`Let $f(x) = 9 - x^2$ and $g(x) = x^2 - 2x - 3$. Let $R$ be the region enclosed by the graphs of $f$ and $g$.`,
    sources: [] },
};

const items = [
  { id: "q804-m01", type: "mcq", skill: "u8", topic: "8.4", calc: false, difficulty: "difficult", set: "q804-s1",
    question: String.raw`What is the area of the region enclosed by the graph of $f$ and the line $\ell$?`,
    choices: [String.raw`$\frac{4}{3}$`, "$2$", String.raw`$\frac{2}{3}$`, String.raw`$-\frac{4}{3}$`],
    why: [
      String.raw`The slope of $\ell$ is $\dfrac{-1 - 3}{1 - (-1)} = -2$, so $\ell$ is $y = 1 - 2x$. It meets the parabola where $x^2 - 2x = 1 - 2x$, at $x = \pm 1$, and the line is above the parabola between them. The area is $\displaystyle\int_{-1}^{1} \left((1 - 2x) - \left(x^2 - 2x\right)\right)dx = \int_{-1}^{1} \left(1 - x^2\right)dx = 2 - \dfrac{2}{3} = \dfrac{4}{3}$.`,
      String.raw`$2$ is $\displaystyle\int_{-1}^{1} (1 - 2x)\,dx$, the integral of the line alone. The integral of $f$ must be subtracted.`,
      String.raw`$\dfrac{2}{3}$ is $\displaystyle\int_{-1}^{1} \left(x^2 - 2x\right)dx$, the integral of $f$ alone, not the area between the graphs.`,
      String.raw`This subtracts the line from the parabola, $\displaystyle\int_{-1}^{1} \left(x^2 - 1\right)dx$. The line is the upper boundary, so the integrand is line minus parabola.`,
    ], answer: 0 },
  { id: "q804-m02", type: "mcq", skill: "u8", topic: "8.4", calc: false, difficulty: "moderate",
    question: String.raw`Which integral gives the area of the region in the first quadrant enclosed by the graphs of $y = 2x$ and $y = x^3$?`,
    choices: [String.raw`$\displaystyle\int_0^{\sqrt{2}} \left(2x - x^3\right)dx$`, String.raw`$\displaystyle\int_0^{\sqrt{2}} \left(x^3 - 2x\right)dx$`, String.raw`$\displaystyle\int_0^{2\sqrt{2}} \left(2x - x^3\right)dx$`, String.raw`$\displaystyle\int_0^{2} \left(2x - x^3\right)dx$`],
    why: [
      String.raw`$x^3 = 2x$ gives $x\left(x^2 - 2\right) = 0$, so in the first quadrant the graphs meet at $x = 0$ and $x = \sqrt{2}$. At $x = 1$, $2x = 2 > 1 = x^3$, so $2x$ is the upper curve and the area is $\displaystyle\int_0^{\sqrt{2}} \left(2x - x^3\right)dx$, which equals $1$.`,
      String.raw`This subtracts the upper curve from the lower one, so the integral is negative.`,
      String.raw`$2\sqrt{2}$ is the $y$-coordinate of the intersection point $\left(\sqrt{2}, 2\sqrt{2}\right)$. The limits of an integral in $x$ are $x$-values.`,
      String.raw`This solves $x^2 = 2$ as $x = 2$. The solution is $x = \sqrt{2}$.`,
    ], answer: 0 },
  { id: "q804-m03", type: "mcq", skill: "u8", topic: "8.4", calc: false, difficulty: "easy",
    question: String.raw`What is the area of the region bounded by the graphs of $y = e^{x}$ and $y = x$ and the vertical lines $x = 0$ and $x = 1$?`,
    choices: [String.raw`$e - \frac{3}{2}$`, String.raw`$e - \frac{1}{2}$`, "$e - 1$", String.raw`$\frac{3}{2} - e$`],
    why: [
      String.raw`On $[0, 1]$, $e^{x} > x$. The area is $\displaystyle\int_0^1 \left(e^{x} - x\right)dx = \left[e^{x} - \dfrac{x^2}{2}\right]_0^1 = \left(e - \dfrac{1}{2}\right) - 1 = e - \dfrac{3}{2}$.`,
      String.raw`This leaves out the lower limit. At $x = 0$ the antiderivative is $e^{0} = 1$, which must be subtracted.`,
      String.raw`$e - 1$ is $\displaystyle\int_0^1 e^{x}\,dx$, the area under the upper curve only.`,
      String.raw`This subtracts the upper curve from the lower one, $\displaystyle\int_0^1 \left(x - e^{x}\right)dx$, which is negative.`,
    ], answer: 0 },
  { id: "q804-m04", type: "mcq", skill: "u8", topic: "8.4", calc: false, difficulty: "moderate",
    question: String.raw`What is the area of the region bounded by the graphs of $y = \dfrac{1}{x}$ and $y = 1$ and the vertical line $x = e$?`,
    choices: ["$e - 2$", "$2 - e$", "$e - 1$", "$1$"],
    why: [
      String.raw`The graphs meet at $x = 1$, and $1 \ge \dfrac{1}{x}$ on $[1, e]$. The area is $\displaystyle\int_1^e \left(1 - \dfrac{1}{x}\right)dx = \left[x - \ln x\right]_1^e = (e - 1) - 1 = e - 2$.`,
      String.raw`This subtracts the upper curve from the lower one, $\displaystyle\int_1^e \left(\dfrac{1}{x} - 1\right)dx$, which is negative.`,
      String.raw`$e - 1$ is $\displaystyle\int_1^e 1\,dx$, the area under $y = 1$ only.`,
      String.raw`$1$ is $\displaystyle\int_1^e \dfrac{1}{x}\,dx$, the area under the lower curve only.`,
    ], answer: 0 },
  { id: "q804-m05", type: "mcq", skill: "u8", topic: "8.4", calc: true, difficulty: "moderate",
    question: String.raw`What is the area of the region enclosed by the graphs of $y = e^{-x^2}$ and $y = x^2$?`,
    choices: ["$0.979$", "$0.490$", "$1.264$", "$1.549$"],
    why: [
      String.raw`With a calculator, the graphs meet at $x = \pm 0.75309$, and $e^{-x^2} > x^2$ between them. The area is $\displaystyle\int_{-0.75309}^{0.75309} \left(e^{-x^2} - x^2\right)dx = 0.979$.`,
      String.raw`This integrates from $0$ to $0.75309$ only. The region also extends to the left of the $y$-axis, to $x = -0.75309$.`,
      String.raw`This integrates $e^{-x^2}$ alone between the intersection points. The area under $y = x^2$ must be subtracted.`,
      String.raw`This adds $x^2$ in place of subtracting it.`,
    ], answer: 0 },
  { id: "q804-m06", type: "mcq", skill: "u8", topic: "8.4", calc: false, difficulty: "easy",
    question: String.raw`What is the area of the region enclosed by the graphs of $y = 8 - x^2$ and $y = 2x$?`,
    choices: ["$36$", String.raw`$\frac{28}{3}$`, "$12$", "$24$"],
    why: [
      String.raw`$8 - x^2 = 2x$ gives $x^2 + 2x - 8 = 0$, so $x = -4$ and $x = 2$. The area is $\displaystyle\int_{-4}^{2} \left(8 - 2x - x^2\right)dx = \left[8x - x^2 - \dfrac{x^3}{3}\right]_{-4}^{2} = \dfrac{28}{3} - \left(-\dfrac{80}{3}\right) = 36$.`,
      String.raw`This integrates from $0$ to $2$ only. The region starts at $x = -4$.`,
      String.raw`This factors $x^2 + 2x - 8$ as $(x - 4)(x + 2)$ and integrates from $-2$ to $4$. The correct factors are $(x + 4)(x - 2)$.`,
      String.raw`This integrates $8 - x^2$ alone from $-4$ to $2$ and leaves out the lower curve $y = 2x$.`,
    ], answer: 0 },
  { id: "q804-f1a", type: "frq", skill: "u8", topic: "8.4", calc: false, set: "q804-s9", part: "(a)",
    prompt: String.raw`Find the area of $R$.`,
    rows: [
      { name: "Integral", earns: String.raw`Finds the intersections $x = -2$ and $x = 3$ and writes $\displaystyle\int_{-2}^{3} \left(f(x) - g(x)\right)dx = \int_{-2}^{3} \left(12 + 2x - 2x^2\right)dx$.` },
      { name: "Answer", earns: String.raw`Area $\dfrac{125}{3}$.` },
    ],
    solution: String.raw`$9 - x^2 = x^2 - 2x - 3$ gives $2x^2 - 2x - 12 = 0$, so $x^2 - x - 6 = (x - 3)(x + 2) = 0$ and $x = -2$ or $x = 3$. At $x = 0$, $f(0) = 9 > g(0) = -3$, so $f$ is the upper curve. The area is $\displaystyle\int_{-2}^{3} \left(12 + 2x - 2x^2\right)dx = \left[12x + x^2 - \dfrac{2x^3}{3}\right]_{-2}^{3} = 27 - \left(-\dfrac{44}{3}\right) = \dfrac{125}{3}$.` },
  { id: "q804-f1b", type: "frq", skill: "u8", topic: "8.4", calc: false, set: "q804-s9", part: "(b)",
    prompt: String.raw`The vertical line $x = k$ divides $R$ into two regions of equal area. Write, but do not solve, an equation involving one or more integrals whose solution gives the value of $k$.`,
    rows: [
      { name: "Equation", earns: String.raw`$\displaystyle\int_{-2}^{k} \left(12 + 2x - 2x^2\right)dx = \dfrac{125}{6}$, or an equivalent equation such as $\displaystyle\int_{-2}^{k} \left(f(x) - g(x)\right)dx = \int_k^{3} \left(f(x) - g(x)\right)dx$.` },
    ],
    solution: String.raw`The part of $R$ to the left of $x = k$ must have half the area of $R$: $\displaystyle\int_{-2}^{k} \left(12 + 2x - 2x^2\right)dx = \dfrac{1}{2} \cdot \dfrac{125}{3} = \dfrac{125}{6}$.` },
];

export default { forms: [{ id: "q804", name: "Topic 8.4 Quiz: Area with Functions of x", group: "Unit 8: Applications of Integration", items }] };

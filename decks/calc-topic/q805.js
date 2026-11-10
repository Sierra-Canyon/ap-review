import { graph } from "../../plot.js";

export const sets = {
  "q805-s1": { name: "A region left of the y-axis", label: "Graph", intro: String.raw`Let $R$ be the region enclosed by the graph of $x = y^2 - 2y$ and the $y$-axis, shown below.`,
    sources: [{ title: "", blocks: [{ svg: graph({ x: [-2, 2], y: [-1, 3], xname: "x", yname: "y",
      fns: [{ f: (x) => 1 + Math.sqrt(1 + x), from: -1, to: 1.9 }, { f: (x) => 1 - Math.sqrt(1 + x), from: -1, to: 1.9 }],
      labels: [[-0.75, 0.9, "R"], [0.25, 2.75, "x = y² − 2y"]],
      alt: "The graph of x = y^2 - 2y, a parabola that opens to the right with vertex (-1, 1). It crosses the y-axis at (0, 0) and (0, 2). The region R lies between the parabola on the left and the y-axis on the right, for y from 0 to 2." }) }] }] },
  "q805-s2": { name: "A region bounded by x = y^3", label: "Graph", intro: String.raw`Let $R$ be the region bounded by the graph of $x = y^3$, the line $x = 8$, and the $x$-axis, shown below.`,
    sources: [{ title: "", blocks: [{ svg: graph({ x: [-1, 9], y: [-0.5, 2.5], step: { x: 1, y: 0.5 }, xname: "x", yname: "y",
      fns: [{ f: (x) => Math.cbrt(x), from: 0, to: 8.8 }],
      segments: [[8, 0, 8, 2]],
      dots: [[8, 2, "closed"]],
      labels: [[5.2, 0.7, "R"], [1.6, 1.9, "x = y³"]],
      alt: "The graph of x = y^3, which is the same curve as y equal to the cube root of x, rising from the origin through (1, 1) to (8, 2), and the vertical line x = 8. The region R lies below the curve and above the x-axis, between x = 0 and x = 8. Its corners are (0, 0), (8, 0), and (8, 2)." }) }] }] },
  "q805-s9": { name: "A region between two parabolas", label: "Free response", intro: String.raw`Let $R$ be the region enclosed by the graphs of $x = 4y - y^2$ and $x = y^2 - 2y$.`,
    sources: [] },
};

const items = [
  { id: "q805-m01", type: "mcq", skill: "u8", topic: "8.5", calc: false, difficulty: "easy",
    question: String.raw`What is the area of the region enclosed by the graph of $x = y^2$ and the line $x = 4$?`,
    choices: [String.raw`$\frac{32}{3}$`, String.raw`$\frac{16}{3}$`, String.raw`$\frac{64}{3}$`, String.raw`$-\frac{32}{3}$`],
    why: [
      String.raw`The curves meet at $y = -2$ and $y = 2$, and $x = 4$ is to the right of $x = y^2$ between them. The area is $\displaystyle\int_{-2}^{2} \left(4 - y^2\right)dy = 16 - \dfrac{16}{3} = \dfrac{32}{3}$.`,
      String.raw`This integrates from $y = 0$ to $y = 2$, which is only the half of the region above the $x$-axis.`,
      String.raw`This adds $y^2$ to $4$ in place of subtracting the left curve from the right one.`,
      String.raw`This subtracts the right curve from the left one, $\displaystyle\int_{-2}^{2} \left(y^2 - 4\right)dy$, which is negative.`,
    ], answer: 0 },
  { id: "q805-m02", type: "mcq", skill: "u8", topic: "8.5", calc: false, difficulty: "easy", set: "q805-s1",
    question: String.raw`Which integral gives the area of the region $R$?`,
    choices: [String.raw`$\displaystyle\int_0^2 \left(2y - y^2\right)dy$`, String.raw`$\displaystyle\int_0^2 \left(y^2 - 2y\right)dy$`, String.raw`$\displaystyle\int_{-1}^{0} \left(2y - y^2\right)dy$`, String.raw`$\displaystyle\int_0^1 \left(2y - y^2\right)dy$`],
    why: [
      String.raw`$y^2 - 2y = 0$ at $y = 0$ and $y = 2$. Between them $y^2 - 2y < 0$, so the $y$-axis ($x = 0$) is the right boundary and the area is $\displaystyle\int_0^2 \left(0 - (y^2 - 2y)\right)dy = \int_0^2 \left(2y - y^2\right)dy$.`,
      String.raw`This subtracts the right boundary $x = 0$ from the left boundary, so the integral is negative.`,
      String.raw`The curve reaches $x = -1$ at its vertex, but the limits of an integral in $y$ are $y$-values, here $0$ and $2$.`,
      String.raw`This stops at $y = 1$, the vertex of the parabola. The region continues up to $y = 2$.`,
    ], answer: 0 },
  { id: "q805-m03", type: "mcq", skill: "u8", topic: "8.5", calc: false, difficulty: "moderate",
    question: String.raw`What is the area of the region enclosed by the graphs of $x = e^{y} - 1$ and $x = (e - 1)y$?`,
    choices: [String.raw`$\frac{3 - e}{2}$`, String.raw`$\frac{e - 3}{2}$`, String.raw`$\frac{3e - 5}{2}$`, String.raw`$\frac{e - 1}{2}$`],
    why: [
      String.raw`The graphs meet where $e^{y} - 1 = (e - 1)y$, at $y = 0$ and $y = 1$. For $0 < y < 1$ the line $x = (e - 1)y$ is to the right of the curve (at $y = \frac{1}{2}$, $0.86 > 0.65$). The area is $\displaystyle\int_0^1 \left((e - 1)y - e^{y} + 1\right)dy = \dfrac{e - 1}{2} - (e - 1) + 1 = \dfrac{3 - e}{2}$.`,
      String.raw`This subtracts the right boundary from the left one, $\displaystyle\int_0^1 \left(e^{y} - 1 - (e - 1)y\right)dy$, which is negative.`,
      String.raw`This adds $e^{y} - 1$ to the line in place of subtracting it: $\displaystyle\int_0^1 \left((e - 1)y + e^{y} - 1\right)dy = \dfrac{e - 1}{2} + (e - 1) - 1$.`,
      String.raw`$\dfrac{e - 1}{2}$ is $\displaystyle\int_0^1 (e - 1)y\,dy$, the area between the line and the $y$-axis. The area between the curve and the $y$-axis must be subtracted.`,
    ], answer: 0 },
  { id: "q805-m04", type: "mcq", skill: "u8", topic: "8.5", calc: false, difficulty: "difficult", set: "q805-s2",
    stem: String.raw`Consider the following expressions.

I. $\displaystyle\int_0^2 \left(8 - y^3\right)dy$

II. $\displaystyle\int_0^8 x^{1/3}\,dx$

III. $\displaystyle\int_0^8 \left(2 - x^{1/3}\right)dx$`,
    question: String.raw`Which of the expressions above give the area of $R$?`,
    choices: ["I and II only", "I only", "I and III only", "I, II, and III"],
    why: [
      String.raw`With horizontal strips, $R$ runs from $x = y^3$ to $x = 8$ for $0 \le y \le 2$, so I gives the area: $16 - 4 = 12$. With vertical strips, $R$ lies between the $x$-axis and $y = x^{1/3}$ for $0 \le x \le 8$, so II gives the area: $\dfrac{3}{4} \cdot 8^{4/3} = 12$. III is the area between the curve and the line $y = 2$, which is $16 - 12 = 4$.`,
      String.raw`II also gives the area. Solving $x = y^3$ for $y$ gives $y = x^{1/3}$, and $R$ lies under that curve for $0 \le x \le 8$, so $\displaystyle\int_0^8 x^{1/3}\,dx = 12$.`,
      String.raw`III is $\displaystyle\int_0^8 \left(2 - x^{1/3}\right)dx = 4$, the area of the region above the curve and below $y = 2$, not $R$. II gives the area of $R$.`,
      String.raw`III equals $4$, the area between the curve and the line $y = 2$. $R$ lies below the curve, and its area is $12$.`,
    ], answer: 0 },
  { id: "q805-m05", type: "mcq", skill: "u8", topic: "8.5", calc: true, difficulty: "moderate",
    question: String.raw`What is the area of the region enclosed by the graphs of $x = 5 - y^2$ and $x = e^{y}$?`,
    choices: ["$9.671$", "$-9.671$", "$13.021$", "$16.371$"],
    why: [
      String.raw`With a calculator, the graphs meet at $y = c = -2.21144$ and $y = d = 1.24114$, and $5 - y^2 > e^{y}$ between them. The area is $\displaystyle\int_c^d \left(5 - y^2 - e^{y}\right)dy = 9.671$.`,
      String.raw`This subtracts the right curve from the left one, $\displaystyle\int_c^d \left(e^{y} - 5 + y^2\right)dy$, which is negative. An area is positive.`,
      String.raw`This integrates $5 - y^2$ alone and leaves out the left boundary $x = e^{y}$.`,
      String.raw`This adds $e^{y}$ in place of subtracting it.`,
    ], answer: 0 },
  { id: "q805-m06", type: "mcq", skill: "u8", topic: "8.5", calc: false, difficulty: "moderate",
    question: String.raw`Let $R$ be the region in the first quadrant bounded by the graph of $y = x^2$, the line $y = 9$, and the $y$-axis. Which integral gives the area of $R$?`,
    choices: [String.raw`$\displaystyle\int_0^9 \sqrt{y}\,dy$`, String.raw`$\displaystyle\int_0^9 \left(3 - \sqrt{y}\right)dy$`, String.raw`$\displaystyle\int_0^3 \sqrt{y}\,dy$`, String.raw`$\displaystyle\int_0^9 y^2\,dy$`],
    why: [
      String.raw`For $0 \le y \le 9$, a horizontal strip runs from the $y$-axis, $x = 0$, to the curve $x = \sqrt{y}$. The area is $\displaystyle\int_0^9 \sqrt{y}\,dy$, which equals $18$.`,
      String.raw`This is the area between $x = \sqrt{y}$ and $x = 3$, the region below the parabola and to its right, not $R$.`,
      String.raw`$3$ is the $x$-coordinate of $(3, 9)$. In an integral with respect to $y$, the limits are $y$-values, $0$ to $9$.`,
      String.raw`Solving $y = x^2$ for $x$ gives $x = \sqrt{y}$, not $y^2$.`,
    ], answer: 0 },
  { id: "q805-f1a", type: "frq", skill: "u8", topic: "8.5", calc: false, set: "q805-s9", part: "(a)",
    prompt: String.raw`Find the area of $R$.`,
    rows: [
      { name: "Integral", earns: String.raw`Finds the intersections $y = 0$ and $y = 3$ and writes $\displaystyle\int_0^3 \left((4y - y^2) - (y^2 - 2y)\right)dy = \int_0^3 \left(6y - 2y^2\right)dy$.` },
      { name: "Answer", earns: "Area $9$." },
    ],
    solution: String.raw`$4y - y^2 = y^2 - 2y$ gives $2y^2 - 6y = 0$, so $y = 0$ and $y = 3$. At $y = 1$, $4y - y^2 = 3$ and $y^2 - 2y = -1$, so $x = 4y - y^2$ is the right boundary. The area is $\displaystyle\int_0^3 \left(6y - 2y^2\right)dy = \left[3y^2 - \dfrac{2y^3}{3}\right]_0^3 = 27 - 18 = 9$.` },
  { id: "q805-f1b", type: "frq", skill: "u8", topic: "8.5", calc: false, set: "q805-s9", part: "(b)",
    prompt: String.raw`Find the area of the part of $R$ that lies below the line $y = 1$.`,
    rows: [
      { name: "Integral", earns: String.raw`$\displaystyle\int_0^1 \left(6y - 2y^2\right)dy$.` },
      { name: "Answer", earns: String.raw`Area $\dfrac{7}{3}$.` },
    ],
    solution: String.raw`For $0 \le y \le 1$, the part of $R$ runs from $x = y^2 - 2y$ to $x = 4y - y^2$. Its area is $\displaystyle\int_0^1 \left(6y - 2y^2\right)dy = \left[3y^2 - \dfrac{2y^3}{3}\right]_0^1 = 3 - \dfrac{2}{3} = \dfrac{7}{3}$.` },
];

export default { forms: [{ id: "q805", name: "Topic 8.5 Quiz: Area with Functions of y", group: "Unit 8: Applications of Integration", items }] };

export const sets = {
  "q805-s9": { name: "A region between two parabolas", label: "Free response", intro: String.raw`Let $R$ be the region enclosed by the graphs of $x = 4y - y^2$ and $x = y^2 - 2y$.`,
    sources: [] },
};

const items = [
  { id: "q805-m01", type: "mcq", skill: "u8", topic: "8.5", calc: false,
    question: String.raw`What is the area of the region enclosed by the graph of $x = y^2$ and the line $x = 4$?`,
    choices: [String.raw`$\frac{32}{3}$`, String.raw`$\frac{16}{3}$`, String.raw`$\frac{64}{3}$`, String.raw`$-\frac{32}{3}$`],
    why: [
      String.raw`The curves meet at $y = -2$ and $y = 2$, and $x = 4$ is to the right of $x = y^2$ between them. The area is $\displaystyle\int_{-2}^{2} \left(4 - y^2\right)dy = 16 - \dfrac{16}{3} = \dfrac{32}{3}$.`,
      String.raw`This integrates from $y = 0$ to $y = 2$, which is only the half of the region above the $x$-axis.`,
      String.raw`This adds $y^2$ to $4$ in place of subtracting the left curve from the right one.`,
      String.raw`This subtracts the right curve from the left one, $\displaystyle\int_{-2}^{2} \left(y^2 - 4\right)dy$, which is negative.`,
    ], answer: 0 },
  { id: "q805-m02", type: "mcq", skill: "u8", topic: "8.5", calc: false,
    question: String.raw`Which integral gives the area of the region enclosed by the graph of $x = y^2 - 2y$ and the $y$-axis?`,
    choices: [String.raw`$\displaystyle\int_0^2 \left(2y - y^2\right)dy$`, String.raw`$\displaystyle\int_0^2 \left(y^2 - 2y\right)dy$`, String.raw`$\displaystyle\int_{-1}^{0} \left(2y - y^2\right)dy$`, String.raw`$\displaystyle\int_0^1 \left(2y - y^2\right)dy$`],
    why: [
      String.raw`$y^2 - 2y = 0$ at $y = 0$ and $y = 2$. Between them $y^2 - 2y < 0$, so the $y$-axis ($x = 0$) is the right boundary and the area is $\displaystyle\int_0^2 \left(0 - (y^2 - 2y)\right)dy = \int_0^2 \left(2y - y^2\right)dy$.`,
      String.raw`This subtracts the right boundary $x = 0$ from the left boundary, so the integral is negative.`,
      String.raw`The curve reaches $x = -1$ at its vertex, but the limits of an integral in $y$ are $y$-values, here $0$ and $2$.`,
      String.raw`This stops at $y = 1$, the vertex of the parabola. The region continues up to $y = 2$.`,
    ], answer: 0 },
  { id: "q805-m03", type: "mcq", skill: "u8", topic: "8.5", calc: false,
    question: String.raw`What is the area of the region enclosed by the graphs of $x = y^2$ and $x = y + 6$?`,
    choices: [String.raw`$\frac{125}{6}$`, String.raw`$\frac{27}{2}$`, String.raw`$\frac{22}{3}$`, String.raw`$\frac{95}{6}$`],
    why: [
      String.raw`$y^2 = y + 6$ gives $(y - 3)(y + 2) = 0$, so $y = -2$ and $y = 3$, and $y + 6 \ge y^2$ between them. The area is $\displaystyle\int_{-2}^{3} \left(y + 6 - y^2\right)dy = \left[\dfrac{y^2}{2} + 6y - \dfrac{y^3}{3}\right]_{-2}^{3} = \dfrac{27}{2} + \dfrac{22}{3} = \dfrac{125}{6}$.`,
      String.raw`This integrates from $y = 0$ to $y = 3$ only. The region extends down to $y = -2$.`,
      String.raw`This integrates from $y = -2$ to $y = 0$ only. The region extends up to $y = 3$.`,
      String.raw`This factors $y^2 - y - 6$ as $(y + 3)(y - 2)$ and integrates from $-3$ to $2$. The correct factors are $(y - 3)(y + 2)$.`,
    ], answer: 0 },
  { id: "q805-m04", type: "mcq", skill: "u8", topic: "8.5", calc: false,
    question: String.raw`What is the area of the region bounded by the graph of $x = y^3$, the line $x = 8$, and the $x$-axis?`,
    choices: ["$12$", "$4$", "$16$", "$20$"],
    why: [
      String.raw`The curve $x = y^3$ meets $x = 8$ at $y = 2$. For $0 \le y \le 2$ the region runs from $x = y^3$ to $x = 8$, so the area is $\displaystyle\int_0^2 \left(8 - y^3\right)dy = 16 - 4 = 12$.`,
      String.raw`$4$ is $\displaystyle\int_0^2 y^3\,dy$, the area between the curve and the $y$-axis, which is the region on the other side of the curve.`,
      String.raw`$16$ is $\displaystyle\int_0^2 8\,dy$, the area of the whole rectangle. The part to the left of $x = y^3$ must be subtracted.`,
      String.raw`This adds $y^3$ to $8$ in place of subtracting the left boundary from the right one.`,
    ], answer: 0 },
  { id: "q805-m05", type: "mcq", skill: "u8", topic: "8.5", calc: true,
    question: String.raw`What is the area of the region enclosed by the graphs of $x = 5 - y^2$ and $x = e^{y}$?`,
    choices: ["$9.671$", "$3.109$", "$13.021$", "$16.371$"],
    why: [
      String.raw`With a calculator, the graphs meet at $y = c = -2.21144$ and $y = d = 1.24114$, and $5 - y^2 > e^{y}$ between them. The area is $\displaystyle\int_c^d \left(5 - y^2 - e^{y}\right)dy = 9.671$.`,
      String.raw`This integrates from $y = 0$ to $y = d$ only. The region also lies below the $x$-axis, down to $y = -2.21144$.`,
      String.raw`This integrates $5 - y^2$ alone and leaves out the left boundary $x = e^{y}$.`,
      String.raw`This adds $e^{y}$ in place of subtracting it.`,
    ], answer: 0 },
  { id: "q805-m06", type: "mcq", skill: "u8", topic: "8.5", calc: false,
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

export const sets = {
  "q812-s9": { name: "Washers about horizontal lines", label: "Free response", intro: String.raw`Let $R$ be the region enclosed by the graphs of $y = 4 - x^2$ and $y = 4 - x$.`,
    sources: [] },
};

const items = [
  { id: "q812-m01", type: "mcq", skill: "u8", topic: "8.12", calc: false,
    question: String.raw`The region enclosed by the graphs of $y = \sqrt{x}$ and $y = x$ is revolved about the line $y = -1$. What is the volume of the resulting solid?`,
    choices: [String.raw`$\frac{\pi}{2}$`, String.raw`$\frac{\pi}{6}$`, String.raw`$\frac{\pi}{30}$`, String.raw`$\frac{5\pi}{2}$`],
    why: [
      String.raw`On $[0, 1]$, $\sqrt{x} \ge x$. Measured from $y = -1$, the outer radius is $\sqrt{x} + 1$ and the inner radius is $x + 1$. The volume is $\pi\displaystyle\int_0^1 \left(\left(\sqrt{x} + 1\right)^2 - (x + 1)^2\right)dx = \pi\displaystyle\int_0^1 \left(2\sqrt{x} - x - x^2\right)dx = \pi\left(\dfrac{4}{3} - \dfrac{1}{2} - \dfrac{1}{3}\right) = \dfrac{\pi}{2}$.`,
      String.raw`$\dfrac{\pi}{6}$ is the volume for revolving about the $x$-axis, with radii $\sqrt{x}$ and $x$. Each radius must be measured from $y = -1$.`,
      String.raw`This squares the difference of the radii, $\pi\displaystyle\int_0^1 \left(\sqrt{x} - x\right)^2 dx$, in place of subtracting the squares.`,
      String.raw`This adds $1$ to the outer radius only, using $\left(\sqrt{x} + 1\right)^2 - x^2$. The inner radius is also measured from $y = -1$: $x + 1$.`,
    ], answer: 0 },
  { id: "q812-m02", type: "mcq", skill: "u8", topic: "8.12", calc: false,
    question: String.raw`The region enclosed by the graph of $y = x^2$ and the line $y = 1$ is revolved about the line $y = 2$. What is the volume of the resulting solid?`,
    choices: [String.raw`$\frac{56\pi}{15}$`, String.raw`$\frac{8\pi}{5}$`, String.raw`$\frac{16\pi}{15}$`, String.raw`$\frac{104\pi}{15}$`],
    why: [
      String.raw`For $-1 \le x \le 1$, the far boundary from $y = 2$ is $y = x^2$ and the near boundary is $y = 1$. The outer radius is $2 - x^2$ and the inner radius is $1$, so the volume is $\pi\displaystyle\int_{-1}^{1} \left((2 - x^2)^2 - 1\right)dx = \pi\left(6 - \dfrac{8}{3} + \dfrac{2}{5}\right) = \dfrac{56\pi}{15}$.`,
      String.raw`$\dfrac{8\pi}{5}$ is the volume for revolving about the $x$-axis, with radii $1$ and $x^2$.`,
      String.raw`This uses a single radius $1 - x^2$, the height of the region. The solid has a hole of radius $1$ around $y = 2$.`,
      String.raw`This uses radii $3$ and $x^2 + 2$, which are measured from $y = -2$. The axis is $y = 2$, above the region.`,
    ], answer: 0 },
  { id: "q812-m03", type: "mcq", skill: "u8", topic: "8.12", calc: false,
    question: String.raw`The region bounded by the line $y = 3x$, the line $y = 6$, and the $y$-axis is revolved about the line $x = -3$. Which integral gives the volume of the resulting solid?`,
    choices: [String.raw`$\pi\displaystyle\int_0^6 \left(\left(\dfrac{y}{3} + 3\right)^2 - 9\right)dy$`, String.raw`$\pi\displaystyle\int_0^6 \left(\left(\dfrac{y}{3} - 3\right)^2 - 9\right)dy$`, String.raw`$\pi\displaystyle\int_0^6 \left(\dfrac{y}{3} + 3\right)^2 dy$`, String.raw`$\pi\displaystyle\int_0^2 \left((3x + 3)^2 - 9\right)dx$`],
    why: [
      String.raw`At height $y$, $0 \le y \le 6$, the region runs from $x = 0$ to $x = \dfrac{y}{3}$. Measured from $x = -3$, the outer radius is $\dfrac{y}{3} + 3$ and the inner radius is $3$. The volume is $\pi\displaystyle\int_0^6 \left(\left(\dfrac{y}{3} + 3\right)^2 - 9\right)dy = 44\pi$.`,
      String.raw`This subtracts $3$ from $\dfrac{y}{3}$. The distance from $x = \dfrac{y}{3}$ to $x = -3$ is $\dfrac{y}{3} - (-3) = \dfrac{y}{3} + 3$.`,
      String.raw`This leaves out the hole. The region starts at the $y$-axis, $3$ units from the axis of revolution, so the inner radius is $3$.`,
      String.raw`Revolving about a vertical line gives horizontal washers, so the integral is in $y$, with radii measured horizontally.`,
    ], answer: 0 },
  { id: "q812-m04", type: "mcq", skill: "u8", topic: "8.12", calc: true,
    question: String.raw`The region bounded by the graph of $y = \sin x$ and the $x$-axis for $0 \le x \le \pi$ is revolved about the line $y = -1$. What is the volume of the resulting solid?`,
    choices: ["$17.501$", "$4.935$", "$27.371$", "$7.632$"],
    why: [
      String.raw`Measured from $y = -1$, the outer radius is $\sin x + 1$ and the inner radius is $1$. With a calculator, $\pi\displaystyle\int_0^{\pi} \left((\sin x + 1)^2 - 1\right)dx = 17.501$.`,
      String.raw`$4.935$ is $\pi\displaystyle\int_0^{\pi} \sin^2 x\,dx$, the volume for revolving about the $x$-axis.`,
      String.raw`This leaves out the hole: $\pi\displaystyle\int_0^{\pi} (\sin x + 1)^2\,dx$. The region is $1$ unit above the axis, so the inner radius is $1$.`,
      String.raw`This uses radii $1$ and $1 - \sin x$, which are measured from $y = 1$. The axis is $y = -1$, below the region.`,
    ], answer: 0 },
  { id: "q812-m05", type: "mcq", skill: "u8", topic: "8.12", calc: false,
    question: String.raw`The region bounded by the graph of $y = x^2$, the $x$-axis, and the line $x = 1$ is revolved about the line $x = 2$. What is the volume of the resulting solid?`,
    choices: [String.raw`$\frac{5\pi}{6}$`, String.raw`$\frac{5\pi}{2}$`, String.raw`$\frac{\pi}{6}$`, String.raw`$\frac{11\pi}{6}$`],
    why: [
      String.raw`At height $y$, $0 \le y \le 1$, the region runs from $x = \sqrt{y}$ to $x = 1$. Measured from $x = 2$, the outer radius is $2 - \sqrt{y}$ and the inner radius is $1$. The volume is $\pi\displaystyle\int_0^1 \left(\left(2 - \sqrt{y}\right)^2 - 1\right)dy = \pi\left(3 - \dfrac{8}{3} + \dfrac{1}{2}\right) = \dfrac{5\pi}{6}$.`,
      String.raw`This squares $2 - \sqrt{y}$ as $4 - y$, leaving out the middle term $-4\sqrt{y}$.`,
      String.raw`This squares the difference of the radii, $\pi\displaystyle\int_0^1 \left(1 - \sqrt{y}\right)^2 dy$, in place of subtracting the squares.`,
      String.raw`This leaves out the hole: $\pi\displaystyle\int_0^1 \left(2 - \sqrt{y}\right)^2 dy$. The line $x = 1$ is $1$ unit from the axis, so the inner radius is $1$.`,
    ], answer: 0 },
  { id: "q812-m06", type: "mcq", skill: "u8", topic: "8.12", calc: false,
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

export const sets = {
  "q811-s9": { name: "Washers about the axes", label: "Free response", intro: String.raw`Let $R$ be the region in the first quadrant enclosed by the graphs of $y = \sqrt{x}$ and $y = x^2$.`,
    sources: [] },
};

const items = [
  { id: "q811-m01", type: "mcq", skill: "u8", topic: "8.11", calc: false,
    question: String.raw`The region enclosed by the graphs of $y = x + 2$ and $y = x^2$ is revolved about the $x$-axis. What is the volume of the resulting solid?`,
    choices: [String.raw`$\frac{72\pi}{5}$`, String.raw`$\frac{42\pi}{5}$`, String.raw`$\frac{9\pi}{2}$`, String.raw`$\frac{81\pi}{10}$`],
    why: [
      String.raw`The graphs meet at $x = -1$ and $x = 2$, with $x + 2 \ge x^2 \ge 0$ between them. The outer radius is $x + 2$ and the inner radius is $x^2$. The volume is $\pi\displaystyle\int_{-1}^{2} \left((x + 2)^2 - x^4\right)dx = \pi\left(21 - \dfrac{33}{5}\right) = \dfrac{72\pi}{5}$.`,
      String.raw`This squares $x + 2$ as $x^2 + 4$, leaving out the middle term $4x$.`,
      String.raw`This is $\pi$ times the area of the region, $\pi\displaystyle\int_{-1}^{2} \left(x + 2 - x^2\right)dx$. Each washer has area $\pi\left(R^2 - r^2\right)$.`,
      String.raw`This squares the difference of the radii, $\pi\displaystyle\int_{-1}^{2} \left(x + 2 - x^2\right)^2 dx$. The washer area is $\pi\left(R^2 - r^2\right)$, not $\pi(R - r)^2$.`,
    ], answer: 0 },
  { id: "q811-m02", type: "mcq", skill: "u8", topic: "8.11", calc: false,
    question: String.raw`The region in the first quadrant enclosed by the graphs of $y = x^3$ and $y = 4x$ is revolved about the $y$-axis. What is the volume of the resulting solid?`,
    choices: [String.raw`$\frac{128\pi}{15}$`, String.raw`$\frac{512\pi}{21}$`, String.raw`$\frac{256\pi}{105}$`, String.raw`$4\pi$`],
    why: [
      String.raw`The graphs meet in the first quadrant at $(0, 0)$ and $(2, 8)$. At height $y$, $0 \le y \le 8$, the region runs from $x = \dfrac{y}{4}$ to $x = y^{1/3}$. The outer radius is $y^{1/3}$ and the inner radius is $\dfrac{y}{4}$, so the volume is $\pi\displaystyle\int_0^8 \left(y^{2/3} - \dfrac{y^2}{16}\right)dy = \pi\left(\dfrac{96}{5} - \dfrac{32}{3}\right) = \dfrac{128\pi}{15}$.`,
      String.raw`This is $\pi\displaystyle\int_0^2 \left(16x^2 - x^6\right)dx$, the volume for revolving about the $x$-axis.`,
      String.raw`This squares the difference of the radii, $\pi\displaystyle\int_0^8 \left(y^{1/3} - \dfrac{y}{4}\right)^2 dy$, in place of subtracting the squares.`,
      String.raw`This does not square the radii: $\pi\displaystyle\int_0^8 \left(y^{1/3} - \dfrac{y}{4}\right)dy$.`,
    ], answer: 0 },
  { id: "q811-m03", type: "mcq", skill: "u8", topic: "8.11", calc: false,
    question: String.raw`The region bounded by the graph of $y = e^{x}$ and the lines $y = 1$ and $x = 1$ is revolved about the $x$-axis. Which integral gives the volume of the resulting solid?`,
    choices: [String.raw`$\pi\displaystyle\int_0^1 \left(e^{2x} - 1\right)dx$`, String.raw`$\pi\displaystyle\int_0^1 \left(e^{x} - 1\right)^2 dx$`, String.raw`$\pi\displaystyle\int_0^1 \left(e^{x^2} - 1\right)dx$`, String.raw`$\pi\displaystyle\int_0^1 \left(1 - e^{2x}\right)dx$`],
    why: [
      String.raw`The region lies between $y = 1$ and $y = e^{x}$ for $0 \le x \le 1$. The outer radius is $e^{x}$ and the inner radius is $1$, so each washer has area $\pi\left(e^{2x} - 1\right)$.`,
      String.raw`This squares the difference of the radii. The washer area is $\pi\left(R^2 - r^2\right)$, not $\pi(R - r)^2$.`,
      String.raw`This squares $e^{x}$ as $e^{x^2}$. The square of $e^{x}$ is $e^{2x}$.`,
      String.raw`This subtracts the outer radius squared from the inner one, so the integral is negative.`,
    ], answer: 0 },
  { id: "q811-m04", type: "mcq", skill: "u8", topic: "8.11", calc: false,
    question: String.raw`The region bounded by the line $y = x$, the $x$-axis, and the line $x = 2$ is revolved about the $y$-axis. What is the volume of the resulting solid?`,
    choices: [String.raw`$\frac{16\pi}{3}$`, String.raw`$\frac{8\pi}{3}$`, String.raw`$8\pi$`, String.raw`$6\pi$`],
    why: [
      String.raw`At height $y$, $0 \le y \le 2$, the region runs from $x = y$ to $x = 2$. The outer radius is $2$ and the inner radius is $y$, so the volume is $\pi\displaystyle\int_0^2 \left(4 - y^2\right)dy = \pi\left(8 - \dfrac{8}{3}\right) = \dfrac{16\pi}{3}$.`,
      String.raw`$\dfrac{8\pi}{3}$ is $\pi\displaystyle\int_0^2 x^2\,dx$, the cone formed by revolving the region about the $x$-axis.`,
      String.raw`$8\pi$ is the volume of the whole cylinder of radius $2$ and height $2$. The hole of radius $y$ must be removed.`,
      String.raw`This does not square the inner radius: $\pi\displaystyle\int_0^2 \left(4 - y\right)dy$.`,
    ], answer: 0 },
  { id: "q811-m05", type: "mcq", skill: "u8", topic: "8.11", calc: true,
    question: String.raw`The region enclosed by the graphs of $y = \cos x$ and $y = x^2$ is revolved about the $x$-axis. What is the volume of the resulting solid?`,
    choices: ["$3.677$", "$2.747$", "$3.439$", "$1.171$"],
    why: [
      String.raw`With a calculator, the graphs meet at $x = \pm 0.82413$, with $\cos x \ge x^2 \ge 0$ between them. The volume is $\pi\displaystyle\int_{-0.82413}^{0.82413} \left(\cos^2 x - x^4\right)dx = 3.677$.`,
      String.raw`This squares the difference of the radii, $\pi\displaystyle\int (\cos x - x^2)^2\,dx$, in place of subtracting the squares.`,
      String.raw`This does not square the radii: $\pi\displaystyle\int (\cos x - x^2)\,dx$.`,
      String.raw`This leaves out the factor $\pi$ in the area of a washer.`,
    ], answer: 0 },
  { id: "q811-m06", type: "mcq", skill: "u8", topic: "8.11", calc: false,
    question: String.raw`The region bounded by the graph of $y = x^2 + 1$ and the lines $y = 1$ and $x = 2$ is revolved about the $x$-axis. What is the volume of the resulting solid?`,
    choices: [String.raw`$\frac{176\pi}{15}$`, String.raw`$\frac{32\pi}{5}$`, String.raw`$\frac{206\pi}{15}$`, String.raw`$\frac{236\pi}{15}$`],
    why: [
      String.raw`For $0 \le x \le 2$, the outer radius is $x^2 + 1$ and the inner radius is $1$. The volume is $\pi\displaystyle\int_0^2 \left((x^2 + 1)^2 - 1\right)dx = \pi\displaystyle\int_0^2 \left(x^4 + 2x^2\right)dx = \pi\left(\dfrac{32}{5} + \dfrac{16}{3}\right) = \dfrac{176\pi}{15}$.`,
      String.raw`This uses the difference $x^2$ as a single radius, $\pi\displaystyle\int_0^2 \left(x^2\right)^2 dx$. The radii are measured from the $x$-axis: $x^2 + 1$ and $1$.`,
      String.raw`This leaves out the hole: $\pi\displaystyle\int_0^2 \left(x^2 + 1\right)^2 dx$. The region does not reach the $x$-axis, so the inner radius $1$ must be subtracted.`,
      String.raw`This adds the square of the inner radius in place of subtracting it.`,
    ], answer: 0 },
  { id: "q811-f1a", type: "frq", skill: "u8", topic: "8.11", calc: false, set: "q811-s9", part: "(a)",
    prompt: String.raw`Find the volume of the solid generated when $R$ is revolved about the $x$-axis.`,
    rows: [
      { name: "Integral", earns: String.raw`$\pi\displaystyle\int_0^1 \left(\left(\sqrt{x}\right)^2 - \left(x^2\right)^2\right)dx$, with limits $0$ and $1$.` },
      { name: "Answer", earns: String.raw`Volume $\dfrac{3\pi}{10}$.` },
    ],
    solution: String.raw`$\sqrt{x} = x^2$ at $x = 0$ and $x = 1$, and $\sqrt{x} \ge x^2$ on $[0, 1]$. The outer radius is $\sqrt{x}$ and the inner radius is $x^2$. The volume is $\pi\displaystyle\int_0^1 \left(x - x^4\right)dx = \pi\left(\dfrac{1}{2} - \dfrac{1}{5}\right) = \dfrac{3\pi}{10}$.` },
  { id: "q811-f1b", type: "frq", skill: "u8", topic: "8.11", calc: false, set: "q811-s9", part: "(b)",
    prompt: String.raw`Find the volume of the solid generated when $R$ is revolved about the $y$-axis.`,
    rows: [
      { name: "Integral", earns: String.raw`Writes the boundaries as $x = y^2$ and $x = \sqrt{y}$ and sets up $\pi\displaystyle\int_0^1 \left(\left(\sqrt{y}\right)^2 - \left(y^2\right)^2\right)dy$.` },
      { name: "Answer", earns: String.raw`Volume $\dfrac{3\pi}{10}$.` },
    ],
    solution: String.raw`Solving for $x$, the curves are $x = y^2$ (from $y = \sqrt{x}$) and $x = \sqrt{y}$ (from $y = x^2$). At height $y$, $0 \le y \le 1$, the region runs from $x = y^2$ to $x = \sqrt{y}$, so the outer radius is $\sqrt{y}$ and the inner radius is $y^2$. The volume is $\pi\displaystyle\int_0^1 \left(y - y^4\right)dy = \pi\left(\dfrac{1}{2} - \dfrac{1}{5}\right) = \dfrac{3\pi}{10}$.` },
];

export default { forms: [{ id: "q811", name: "Topic 8.11 Quiz: Washer Method About an Axis", group: "Unit 8: Applications of Integration", items }] };

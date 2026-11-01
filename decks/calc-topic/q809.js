export const sets = {
  "q809-s9": { name: "Revolving a region under y = 1/x", label: "Free response", intro: String.raw`Let $R$ be the region bounded by the graph of $y = \dfrac{1}{x}$, the $x$-axis, and the vertical lines $x = 1$ and $x = 3$.`,
    sources: [] },
};

const items = [
  { id: "q809-m01", type: "mcq", skill: "u8", topic: "8.9", calc: false,
    question: String.raw`The region bounded by the graph of $y = x^2 + 2$, the $x$-axis, and the lines $x = 0$ and $x = 1$ is revolved about the $x$-axis. What is the volume of the resulting solid?`,
    choices: [String.raw`$\frac{83\pi}{15}$`, String.raw`$\frac{21\pi}{5}$`, String.raw`$\frac{7\pi}{3}$`, String.raw`$\frac{83}{15}$`],
    why: [
      String.raw`Each disc has radius $x^2 + 2$. The volume is $\pi\displaystyle\int_0^1 \left(x^2 + 2\right)^2 dx = \pi\displaystyle\int_0^1 \left(x^4 + 4x^2 + 4\right)dx = \pi\left(\dfrac{1}{5} + \dfrac{4}{3} + 4\right) = \dfrac{83\pi}{15}$.`,
      String.raw`This squares $x^2 + 2$ as $x^4 + 4$, leaving out the middle term $4x^2$.`,
      String.raw`This integrates $\pi\left(x^2 + 2\right)$, so the radius is not squared.`,
      String.raw`This leaves out the factor $\pi$ in the area of a disc, $\pi r^2$.`,
    ], answer: 0 },
  { id: "q809-m02", type: "mcq", skill: "u8", topic: "8.9", calc: false,
    question: String.raw`The region bounded by the graph of $y = x^4$, the line $y = 16$, and the $y$-axis, with $x \ge 0$, is revolved about the $y$-axis. What is the volume of the resulting solid?`,
    choices: [String.raw`$\frac{128\pi}{3}$`, String.raw`$\frac{512\pi}{9}$`, String.raw`$\frac{128\pi}{5}$`, String.raw`$\frac{128}{3}$`],
    why: [
      String.raw`The discs are horizontal with radius $x = y^{1/4}$ for $0 \le y \le 16$. The volume is $\pi\displaystyle\int_0^{16} y^{1/2}\,dy = \pi \cdot \dfrac{2}{3} \cdot 16^{3/2} = \dfrac{128\pi}{3}$.`,
      String.raw`This is $\pi\displaystyle\int_0^2 \left(x^4\right)^2 dx$, the volume for revolving the region under $y = x^4$ about the $x$-axis.`,
      String.raw`This integrates $\pi y^{1/4}$, so the radius is not squared.`,
      String.raw`This leaves out the factor $\pi$ in the area of a disc.`,
    ], answer: 0 },
  { id: "q809-m03", type: "mcq", skill: "u8", topic: "8.9", calc: false,
    question: String.raw`The region bounded by the graph of $y = e^{x/2}$, the $x$-axis, and the lines $x = 0$ and $x = 2$ is revolved about the $x$-axis. What is the volume of the resulting solid?`,
    choices: [String.raw`$\pi\left(e^{2} - 1\right)$`, String.raw`$2\pi(e - 1)$`, String.raw`$\pi e^{2}$`, String.raw`$e^{2} - 1$`],
    why: [
      String.raw`The radius is $e^{x/2}$, so each disc has area $\pi e^{x}$. The volume is $\pi\displaystyle\int_0^2 e^{x}\,dx = \pi\left(e^{2} - 1\right)$.`,
      String.raw`This integrates $\pi e^{x/2}$, so the radius is not squared.`,
      String.raw`This leaves out the lower limit. At $x = 0$ the antiderivative is $\pi e^{0} = \pi$, which must be subtracted.`,
      String.raw`This leaves out the factor $\pi$ in the area of a disc.`,
    ], answer: 0 },
  { id: "q809-m04", type: "mcq", skill: "u8", topic: "8.9", calc: false,
    question: String.raw`The region bounded by the graph of $y = \sec x$, the $x$-axis, and the lines $x = 0$ and $x = \dfrac{\pi}{3}$ is revolved about the $x$-axis. What is the volume of the resulting solid?`,
    choices: [String.raw`$\pi\sqrt{3}$`, String.raw`$\pi\ln\left(2 + \sqrt{3}\right)$`, String.raw`$\sqrt{3}$`, String.raw`$\pi$`],
    why: [
      String.raw`The volume is $\pi\displaystyle\int_0^{\pi/3} \sec^2 x\,dx = \pi\left[\tan x\right]_0^{\pi/3} = \pi\left(\sqrt{3} - 0\right) = \pi\sqrt{3}$.`,
      String.raw`This integrates $\pi\sec x$, so the radius is not squared.`,
      String.raw`This leaves out the factor $\pi$ in the area of a disc.`,
      String.raw`This uses $\sec x$ as the antiderivative of $\sec^2 x$. The derivative of $\sec x$ is $\sec x \tan x$; the antiderivative of $\sec^2 x$ is $\tan x$.`,
    ], answer: 0 },
  { id: "q809-m05", type: "mcq", skill: "u8", topic: "8.9", calc: true,
    question: String.raw`The region bounded by the graph of $y = \ln\left(1 + x^2\right)$, the $x$-axis, and the line $x = 2$ is revolved about the $x$-axis. What is the volume of the resulting solid?`,
    choices: ["$4.881$", "$4.502$", "$1.554$", "$9.005$"],
    why: [
      String.raw`The graph meets the $x$-axis at $x = 0$. With a calculator, $\pi\displaystyle\int_0^2 \left(\ln\left(1 + x^2\right)\right)^2 dx = 4.881$.`,
      String.raw`$4.502$ is $\pi\displaystyle\int_0^2 \ln\left(1 + x^2\right)dx$, with the radius not squared.`,
      String.raw`$1.554$ is $\displaystyle\int_0^2 \left(\ln\left(1 + x^2\right)\right)^2 dx$, without the factor $\pi$.`,
      String.raw`This squares the radius as $\ln\left(\left(1 + x^2\right)^2\right) = 2\ln\left(1 + x^2\right)$. The square of the radius is $\left(\ln\left(1 + x^2\right)\right)^2$.`,
    ], answer: 0 },
  { id: "q809-m06", type: "mcq", skill: "u8", topic: "8.9", calc: false,
    question: String.raw`The region in the first quadrant bounded by the graph of $y = 4 - x^2$ and the coordinate axes is revolved about the $y$-axis. What is the volume of the resulting solid?`,
    choices: [String.raw`$8\pi$`, String.raw`$\frac{256\pi}{15}$`, String.raw`$\frac{16\pi}{3}$`, String.raw`$16\pi$`],
    why: [
      String.raw`The discs are horizontal with radius $x = \sqrt{4 - y}$ for $0 \le y \le 4$. The volume is $\pi\displaystyle\int_0^4 (4 - y)\,dy = \pi\left(16 - 8\right) = 8\pi$.`,
      String.raw`This is $\pi\displaystyle\int_0^2 \left(4 - x^2\right)^2 dx$, the volume for revolving the region about the $x$-axis.`,
      String.raw`This integrates $\pi\left(4 - x^2\right)$ with respect to $x$ from $0$ to $2$. The squared radius is $x^2 = 4 - y$, and it must be integrated with respect to $y$ from $0$ to $4$.`,
      String.raw`$16\pi$ is the volume of a cylinder of radius $2$ and height $4$. The radius shrinks to $0$ as $y$ increases to $4$.`,
    ], answer: 0 },
  { id: "q809-f1a", type: "frq", skill: "u8", topic: "8.9", calc: false, set: "q809-s9", part: "(a)",
    prompt: String.raw`Find the volume of the solid generated when $R$ is revolved about the $x$-axis.`,
    rows: [
      { name: "Integral", earns: String.raw`$\pi\displaystyle\int_1^3 \left(\dfrac{1}{x}\right)^2 dx$.` },
      { name: "Answer", earns: String.raw`Volume $\dfrac{2\pi}{3}$.` },
    ],
    solution: String.raw`Each disc has radius $\dfrac{1}{x}$. The volume is $\pi\displaystyle\int_1^3 \dfrac{1}{x^2}\,dx = \pi\left[-\dfrac{1}{x}\right]_1^3 = \pi\left(-\dfrac{1}{3} + 1\right) = \dfrac{2\pi}{3}$.` },
  { id: "q809-f1b", type: "frq", skill: "u8", topic: "8.9", calc: false, set: "q809-s9", part: "(b)",
    prompt: String.raw`The vertical line $x = k$, where $1 < k < 3$, divides the solid in part (a) into two pieces of equal volume. Find the value of $k$.`,
    rows: [
      { name: "Equation", earns: String.raw`$\pi\displaystyle\int_1^k \dfrac{1}{x^2}\,dx = \dfrac{\pi}{3}$.` },
      { name: "Answer", earns: String.raw`$k = \dfrac{3}{2}$.` },
    ],
    solution: String.raw`The piece from $x = 1$ to $x = k$ must have half the volume, $\dfrac{\pi}{3}$. Then $\pi\displaystyle\int_1^k \dfrac{1}{x^2}\,dx = \pi\left(1 - \dfrac{1}{k}\right) = \dfrac{\pi}{3}$, so $\dfrac{1}{k} = \dfrac{2}{3}$ and $k = \dfrac{3}{2}$.` },
];

export default { forms: [{ id: "q809", name: "Topic 8.9 Quiz: Disc Method About an Axis", group: "Unit 8: Applications of Integration", items }] };

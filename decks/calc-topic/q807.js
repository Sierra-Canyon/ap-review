export const sets = {
  "q807-s9": { name: "A solid on a parabolic base", label: "Free response", intro: String.raw`Let $R$ be the region enclosed by the graph of $y = 3x - x^2$ and the $x$-axis.`,
    sources: [] },
};

const items = [
  { id: "q807-m01", type: "mcq", skill: "u8", topic: "8.7", calc: false, difficulty: "easy",
    question: String.raw`The base of a solid is the region in the first quadrant bounded by the line $y = 4 - x$ and the coordinate axes. Cross sections of the solid perpendicular to the $x$-axis are squares. What is the volume of the solid?`,
    choices: [String.raw`$\frac{64}{3}$`, String.raw`$\frac{64\pi}{3}$`, "$8$", String.raw`$\frac{128}{3}$`],
    why: [
      String.raw`A square with side $4 - x$ has area $(4 - x)^2$. The volume is $\displaystyle\int_0^4 (4 - x)^2\,dx = \left[-\dfrac{(4 - x)^3}{3}\right]_0^4 = \dfrac{64}{3}$.`,
      String.raw`This uses the disc formula $\pi(4 - x)^2$. A square cross section has area $s^2$, with no factor of $\pi$.`,
      String.raw`$8$ is $\displaystyle\int_0^4 (4 - x)\,dx$, the area of the base. The side length must be squared.`,
      String.raw`This squares $4$ and $x$ separately, $\displaystyle\int_0^4 \left(16 - x^2\right)dx$. The side $4 - x$ must be squared as a whole.`,
    ], answer: 0 },
  { id: "q807-m02", type: "mcq", skill: "u8", topic: "8.7", calc: false, difficulty: "moderate",
    question: String.raw`The base of a solid is the region bounded by the graph of $y = \dfrac{2}{x + 1}$, the $x$-axis, the $y$-axis, and the line $x = 1$. Cross sections of the solid perpendicular to the $x$-axis are rectangles whose height is half the length of the side in the base. What is the volume of the solid?`,
    choices: ["$1$", String.raw`$\frac{1}{2}$`, String.raw`$\ln 2$`, String.raw`$2\ln 2$`],
    why: [
      String.raw`The side in the base is $s = \dfrac{2}{x + 1}$ and the height is $\dfrac{1}{2}s$, so the area is $\dfrac{1}{2}s^2 = \dfrac{2}{(x + 1)^2}$. The volume is $\displaystyle\int_0^1 \dfrac{2}{(x + 1)^2}\,dx = \left[-\dfrac{2}{x + 1}\right]_0^1 = -1 + 2 = 1$.`,
      String.raw`This squares the height, using $\left(\dfrac{1}{2}s\right)^2 = \dfrac{1}{4}s^2$. The area of a rectangle is base times height, $s \cdot \dfrac{1}{2}s$.`,
      String.raw`$\ln 2$ is half the area of the base, $\dfrac{1}{2}\displaystyle\int_0^1 \dfrac{2}{x + 1}\,dx$. The cross section area $\dfrac{1}{2}s^2$ needs the side squared.`,
      String.raw`This uses $2\ln(x + 1)$ as an antiderivative of $\dfrac{2}{(x + 1)^2}$. An antiderivative of $(x + 1)^{-2}$ is $-(x + 1)^{-1}$.`,
    ], answer: 0 },
  { id: "q807-m03", type: "mcq", skill: "u8", topic: "8.7", calc: false, difficulty: "moderate",
    question: String.raw`The base of a solid is the region enclosed by the graphs of $y = x^2$ and $y = x^4$. Cross sections of the solid perpendicular to the $x$-axis are squares. Which integral gives the volume of the solid?`,
    choices: [String.raw`$\displaystyle\int_{-1}^{1} \left(x^2 - x^4\right)^2 dx$`, String.raw`$\displaystyle\int_{-1}^{1} \left(x^4 - x^8\right)dx$`, String.raw`$\pi\displaystyle\int_{-1}^{1} \left(x^4 - x^8\right)dx$`, String.raw`$\displaystyle\int_{-1}^{1} \left(x^2 - x^4\right)dx$`],
    why: [
      String.raw`The graphs meet at $x = -1$, $0$, and $1$, and $x^2 \ge x^4$ on $[-1, 1]$. The side of a square is $x^2 - x^4$, so its area is $\left(x^2 - x^4\right)^2$, and the volume is $\displaystyle\int_{-1}^{1} \left(x^2 - x^4\right)^2 dx = \dfrac{16}{315}$.`,
      String.raw`This subtracts the squares of the two functions. The side is the difference $x^2 - x^4$, and that whole difference is squared.`,
      String.raw`This is the washer volume for revolving the region about the $x$-axis, not a solid with square cross sections.`,
      String.raw`This is the area of the base. The side length must be squared to give the area of each square.`,
    ], answer: 0 },
  { id: "q807-m04", type: "mcq", skill: "u8", topic: "8.7", calc: false, difficulty: "difficult",
    question: String.raw`The base of a solid is the region enclosed by the graph of $y = x^2$ and the line $y = 4$. Cross sections of the solid perpendicular to the $y$-axis are squares. What is the volume of the solid?`,
    choices: ["$32$", "$8$", String.raw`$\frac{512}{15}$`, String.raw`$\frac{32}{3}$`],
    why: [
      String.raw`At height $y$, the region runs from $x = -\sqrt{y}$ to $x = \sqrt{y}$, so the side is $2\sqrt{y}$ and the area is $4y$. The volume is $\displaystyle\int_0^4 4y\,dy = 32$.`,
      String.raw`This uses $\sqrt{y}$ as the side, which is only the half of the width to the right of the $y$-axis.`,
      String.raw`This uses squares perpendicular to the $x$-axis with side $4 - x^2$. The cross sections are perpendicular to the $y$-axis.`,
      String.raw`$\dfrac{32}{3}$ is the area of the base. The side length must be squared.`,
    ], answer: 0 },
  { id: "q807-m05", type: "mcq", skill: "u8", topic: "8.7", calc: true, difficulty: "easy",
    question: String.raw`The base of a solid is the region bounded by the graph of $y = e^{-x^2}$, the $x$-axis, and the lines $x = -1$ and $x = 1$. Cross sections of the solid perpendicular to the $x$-axis are squares. What is the volume of the solid?`,
    choices: ["$1.196$", "$1.494$", "$1.690$", "$3.758$"],
    why: [
      String.raw`The area of a square with side $e^{-x^2}$ is $\left(e^{-x^2}\right)^2 = e^{-2x^2}$. With a calculator, $\displaystyle\int_{-1}^{1} e^{-2x^2}\,dx = 1.196$.`,
      String.raw`$1.494$ is $\displaystyle\int_{-1}^{1} e^{-x^2}\,dx$, the area of the base. The side must be squared.`,
      String.raw`This squares the exponent, using $e^{-x^4}$. Squaring $e^{-x^2}$ doubles the exponent: $e^{-2x^2}$.`,
      String.raw`This includes a factor of $\pi$, as for discs. Square cross sections have area $s^2$.`,
    ], answer: 0 },
  { id: "q807-m06", type: "mcq", skill: "u8", topic: "8.7", calc: false, difficulty: "moderate",
    question: String.raw`The base of a solid is the region bounded by the graph of $y = \dfrac{1}{x}$, the $x$-axis, and the lines $x = 1$ and $x = 2$. Cross sections of the solid perpendicular to the $x$-axis are rectangles of height $x^2$. What is the volume of the solid?`,
    choices: [String.raw`$\frac{3}{2}$`, String.raw`$\ln 2$`, String.raw`$\frac{1}{2}$`, String.raw`$\frac{7}{3}$`],
    why: [
      String.raw`Each rectangle has base $\dfrac{1}{x}$ and height $x^2$, so its area is $x$. The volume is $\displaystyle\int_1^2 x\,dx = \dfrac{4 - 1}{2} = \dfrac{3}{2}$.`,
      String.raw`$\ln 2$ is $\displaystyle\int_1^2 \dfrac{1}{x}\,dx$, the area of the base. Each cross section area is base times height.`,
      String.raw`This uses squares, $\displaystyle\int_1^2 \dfrac{1}{x^2}\,dx$. The height is $x^2$, not the base length.`,
      String.raw`This integrates the height $x^2$ alone and leaves out the base length $\dfrac{1}{x}$.`,
    ], answer: 0 },
  { id: "q807-f1a", type: "frq", skill: "u8", topic: "8.7", calc: false, set: "q807-s9", part: "(a)",
    prompt: String.raw`Find the area of $R$.`,
    rows: [
      { name: "Answer", earns: String.raw`$\displaystyle\int_0^3 \left(3x - x^2\right)dx = \dfrac{9}{2}$.` },
    ],
    solution: String.raw`$3x - x^2 = x(3 - x) = 0$ at $x = 0$ and $x = 3$. The area is $\displaystyle\int_0^3 \left(3x - x^2\right)dx = \left[\dfrac{3x^2}{2} - \dfrac{x^3}{3}\right]_0^3 = \dfrac{27}{2} - 9 = \dfrac{9}{2}$.` },
  { id: "q807-f1b", type: "frq", skill: "u8", topic: "8.7", calc: false, set: "q807-s9", part: "(b)",
    prompt: String.raw`The region $R$ is the base of a solid. For this solid, each cross section perpendicular to the $x$-axis is a square. Find the volume of the solid.`,
    rows: [
      { name: "Integral", earns: String.raw`$\displaystyle\int_0^3 \left(3x - x^2\right)^2 dx$.` },
      { name: "Answer", earns: String.raw`Volume $\dfrac{81}{10}$.` },
    ],
    solution: String.raw`The side of a square at $x$ is $3x - x^2$. The volume is $\displaystyle\int_0^3 \left(3x - x^2\right)^2 dx = \int_0^3 \left(9x^2 - 6x^3 + x^4\right)dx = \left[3x^3 - \dfrac{3x^4}{2} + \dfrac{x^5}{5}\right]_0^3 = 81 - \dfrac{243}{2} + \dfrac{243}{5} = \dfrac{81}{10}$.` },
  { id: "q807-f1c", type: "frq", skill: "u8", topic: "8.7", calc: false, set: "q807-s9", part: "(c)",
    prompt: String.raw`A second solid also has base $R$. For this solid, each cross section perpendicular to the $x$-axis is a rectangle whose height is twice the length of its base in $R$. Find the volume of the solid.`,
    rows: [
      { name: "Answer", earns: String.raw`$\displaystyle\int_0^3 2\left(3x - x^2\right)^2 dx = \dfrac{81}{5}$.` },
    ],
    solution: String.raw`Each rectangle has base $3x - x^2$ and height $2\left(3x - x^2\right)$, so its area is $2\left(3x - x^2\right)^2$. The volume is $\displaystyle\int_0^3 2\left(3x - x^2\right)^2 dx = 2 \cdot \dfrac{81}{10} = \dfrac{81}{5}$.` },
];

export default { forms: [{ id: "q807", name: "Topic 8.7 Quiz: Cross Sections, Squares and Rectangles", group: "Unit 8: Applications of Integration", items }] };

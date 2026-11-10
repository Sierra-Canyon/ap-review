export const sets = {
  "q808-s9": { name: "Solids on a triangular base", label: "Free response", intro: String.raw`Let $R$ be the region in the first quadrant bounded by the line $y = 6 - 2x$, the $x$-axis, and the $y$-axis. The region $R$ is the base of each solid described below.`,
    sources: [] },
};

const items = [
  { id: "q808-m01", type: "mcq", skill: "u8", topic: "8.8", calc: false, difficulty: "moderate",
    question: String.raw`The base of a solid is the region bounded by the graph of $y = \sqrt[3]{x}$, the $x$-axis, and the line $x = 8$. Cross sections of the solid perpendicular to the $x$-axis are semicircles whose diameters lie in the base. What is the volume of the solid?`,
    choices: [String.raw`$\frac{12\pi}{5}$`, String.raw`$\frac{48\pi}{5}$`, String.raw`$\frac{24\pi}{5}$`, String.raw`$\frac{96\pi}{5}$`],
    why: [
      String.raw`The diameter is $x^{1/3}$, so the radius is $\dfrac{x^{1/3}}{2}$ and the area is $\dfrac{\pi}{2}\left(\dfrac{x^{1/3}}{2}\right)^2 = \dfrac{\pi}{8}x^{2/3}$. The volume is $\dfrac{\pi}{8}\displaystyle\int_0^8 x^{2/3}\,dx = \dfrac{\pi}{8} \cdot \dfrac{3}{5} \cdot 32 = \dfrac{12\pi}{5}$.`,
      String.raw`This uses the diameter $x^{1/3}$ as the radius, giving $\dfrac{\pi}{2}x^{2/3}$.`,
      String.raw`This uses whole circles of diameter $x^{1/3}$, with area $\dfrac{\pi}{4}x^{2/3}$. A semicircle has half that area.`,
      String.raw`This uses whole circles with radius $x^{1/3}$, as in the disc method.`,
    ], answer: 0 },
  { id: "q808-m02", type: "mcq", skill: "u8", topic: "8.8", calc: false, difficulty: "moderate",
    question: String.raw`The base of a solid is the region in the first quadrant enclosed by the graph of $y = 4x - x^3$ and the $x$-axis. Cross sections of the solid perpendicular to the $x$-axis are equilateral triangles. What is the volume of the solid?`,
    choices: [String.raw`$\frac{256\sqrt{3}}{105}$`, String.raw`$\frac{512}{105}$`, String.raw`$\frac{1024}{105}$`, String.raw`$\frac{512\sqrt{3}}{105}$`],
    why: [
      String.raw`In the first quadrant the graph meets the $x$-axis at $x = 0$ and $x = 2$. An equilateral triangle with side $s = 4x - x^3$ has area $\dfrac{\sqrt{3}}{4}s^2$. Since $\displaystyle\int_0^2 \left(4x - x^3\right)^2 dx = \int_0^2 \left(16x^2 - 8x^4 + x^6\right)dx = \dfrac{128}{3} - \dfrac{256}{5} + \dfrac{128}{7} = \dfrac{1024}{105}$, the volume is $\dfrac{\sqrt{3}}{4} \cdot \dfrac{1024}{105} = \dfrac{256\sqrt{3}}{105}$.`,
      String.raw`This uses the area $\dfrac{1}{2}s^2$, which belongs to an isosceles right triangle with a leg of length $s$. An equilateral triangle with side $s$ has height $\dfrac{\sqrt{3}}{2}s$.`,
      String.raw`$\dfrac{1024}{105}$ is the volume with square cross sections, area $s^2$.`,
      String.raw`This uses the height $\dfrac{\sqrt{3}}{2}s$ as the area factor and leaves out the $\dfrac{1}{2}$ in $\dfrac{1}{2} \cdot s \cdot \dfrac{\sqrt{3}}{2}s$.`,
    ], answer: 0 },
  { id: "q808-m03", type: "mcq", skill: "u8", topic: "8.8", calc: false, difficulty: "moderate",
    question: String.raw`The base of a solid is the region bounded by the graph of $y = e^{x}$, the $x$-axis, and the lines $x = 0$ and $x = 1$. Cross sections of the solid perpendicular to the $x$-axis are isosceles right triangles whose hypotenuses lie in the base. What is the volume of the solid?`,
    choices: [String.raw`$\frac{e^{2} - 1}{8}$`, String.raw`$\frac{e^{2} - 1}{4}$`, String.raw`$\frac{e - 1}{4}$`, String.raw`$\frac{e^{2}}{8}$`],
    why: [
      String.raw`An isosceles right triangle with hypotenuse $s$ has legs $\dfrac{s}{\sqrt{2}}$ and area $\dfrac{s^2}{4}$. With $s = e^{x}$, the volume is $\dfrac{1}{4}\displaystyle\int_0^1 e^{2x}\,dx = \dfrac{1}{4} \cdot \dfrac{e^{2} - 1}{2} = \dfrac{e^{2} - 1}{8}$.`,
      String.raw`This uses the area $\dfrac{s^2}{2}$, which is right when a leg, not the hypotenuse, lies in the base.`,
      String.raw`This does not square the side: $\dfrac{1}{4}\displaystyle\int_0^1 e^{x}\,dx$. The area is $\dfrac{1}{4}\left(e^{x}\right)^2 = \dfrac{1}{4}e^{2x}$.`,
      String.raw`This leaves out the lower limit. At $x = 0$ the antiderivative $\dfrac{1}{8}e^{2x}$ equals $\dfrac{1}{8}$, which must be subtracted.`,
    ], answer: 0 },
  { id: "q808-m04", type: "mcq", skill: "u8", topic: "8.8", calc: false, difficulty: "difficult",
    question: String.raw`The base of a solid is the region enclosed by the graph of $y = x^2$ and the line $y = 9$. Cross sections of the solid perpendicular to the $y$-axis are semicircles whose diameters lie in the base. Which integral gives the volume of the solid?`,
    choices: [String.raw`$\displaystyle\int_0^9 \dfrac{\pi}{2}y\,dy$`, String.raw`$\displaystyle\int_0^9 2\pi y\,dy$`, String.raw`$\displaystyle\int_0^9 \dfrac{\pi}{8}y\,dy$`, String.raw`$\displaystyle\int_0^9 \pi y\,dy$`],
    why: [
      String.raw`At height $y$, the base runs from $x = -\sqrt{y}$ to $x = \sqrt{y}$, so the diameter is $2\sqrt{y}$ and the radius is $\sqrt{y}$. A semicircle of radius $\sqrt{y}$ has area $\dfrac{\pi}{2}y$.`,
      String.raw`This uses the diameter $2\sqrt{y}$ as the radius: $\dfrac{\pi}{2}\left(2\sqrt{y}\right)^2 = 2\pi y$.`,
      String.raw`This uses $\sqrt{y}$ as the diameter. That is only half the width of the base, from the $y$-axis to the curve.`,
      String.raw`This is the area of a whole circle of radius $\sqrt{y}$. A semicircle has half that area.`,
    ], answer: 0 },
  { id: "q808-m05", type: "mcq", skill: "u8", topic: "8.8", calc: true, difficulty: "moderate",
    question: String.raw`The base of a solid is the region in the first quadrant bounded by the graph of $y = \cos\left(x^2\right)$ and the coordinate axes. Cross sections of the solid perpendicular to the $x$-axis are equilateral triangles. What is the volume of the solid?`,
    choices: ["$0.373$", "$0.861$", "$0.338$", "$0.746$"],
    why: [
      String.raw`The graph meets the $x$-axis where $x^2 = \dfrac{\pi}{2}$, at $x = \sqrt{\pi/2} = 1.25331$. The area of an equilateral triangle with side $s$ is $\dfrac{\sqrt{3}}{4}s^2$. With a calculator, $\dfrac{\sqrt{3}}{4}\displaystyle\int_0^{1.25331} \cos^2\left(x^2\right)dx = 0.373$.`,
      String.raw`$0.861$ is the volume with square cross sections, area $s^2$.`,
      String.raw`$0.338$ is the volume with semicircular cross sections, area $\dfrac{\pi}{8}s^2$.`,
      String.raw`This uses $\dfrac{\sqrt{3}}{2}s^2$, the height times the side without the factor $\dfrac{1}{2}$.`,
    ], answer: 0 },
  { id: "q808-m06", type: "mcq", skill: "u8", topic: "8.8", calc: false, difficulty: "moderate",
    question: String.raw`The base of a solid is the region enclosed by the graphs of $y = 3 - x^2$ and $y = 2x^2$. Cross sections of the solid perpendicular to the $x$-axis are isosceles right triangles with one leg in the base. What is the volume of the solid?`,
    choices: [String.raw`$\frac{24}{5}$`, String.raw`$\frac{48}{5}$`, String.raw`$\frac{12}{5}$`, String.raw`$\frac{32}{5}$`],
    why: [
      String.raw`The graphs meet where $3 - x^2 = 2x^2$, at $x = \pm 1$. The leg is $s = (3 - x^2) - 2x^2 = 3 - 3x^2$, and the area is $\dfrac{1}{2}s^2 = \dfrac{9}{2}\left(1 - x^2\right)^2$. The volume is $\dfrac{9}{2}\displaystyle\int_{-1}^{1} \left(1 - x^2\right)^2 dx = \dfrac{9}{2} \cdot \dfrac{16}{15} = \dfrac{24}{5}$.`,
      String.raw`$\dfrac{48}{5}$ is the volume with square cross sections. A right triangle with legs $s$ and $s$ has half the area of the square.`,
      String.raw`This uses the area $\dfrac{1}{4}s^2$, which is right when the hypotenuse lies in the base.`,
      String.raw`This uses $\dfrac{1}{2}\left((3 - x^2)^2 - (2x^2)^2\right)$. The leg is the difference $3 - 3x^2$, and the whole difference is squared.`,
    ], answer: 0 },
  { id: "q808-f1a", type: "frq", skill: "u8", topic: "8.8", calc: false, set: "q808-s9", part: "(a)",
    prompt: String.raw`For one solid, each cross section perpendicular to the $x$-axis is an isosceles right triangle whose hypotenuse lies in $R$. Find the volume of this solid.`,
    rows: [
      { name: "Integral", earns: String.raw`$\displaystyle\int_0^3 \dfrac{1}{4}(6 - 2x)^2\,dx$, using the area $\dfrac{s^2}{4}$ for a hypotenuse of length $s$.` },
      { name: "Answer", earns: "Volume $9$." },
    ],
    solution: String.raw`The line meets the $x$-axis at $x = 3$. An isosceles right triangle with hypotenuse $s$ has legs $\dfrac{s}{\sqrt{2}}$, so its area is $\dfrac{1}{2}\left(\dfrac{s}{\sqrt{2}}\right)^2 = \dfrac{s^2}{4}$. With $s = 6 - 2x$, the volume is $\displaystyle\int_0^3 \dfrac{1}{4}(6 - 2x)^2\,dx = \int_0^3 (3 - x)^2\,dx = \left[-\dfrac{(3 - x)^3}{3}\right]_0^3 = 9$.` },
  { id: "q808-f1b", type: "frq", skill: "u8", topic: "8.8", calc: false, set: "q808-s9", part: "(b)",
    prompt: String.raw`For another solid, each cross section perpendicular to the $y$-axis is a semicircle whose diameter lies in $R$. Find the volume of this solid.`,
    rows: [
      { name: "Integral", earns: String.raw`Writes the diameter in terms of $y$, $x = \dfrac{6 - y}{2}$, and sets up $\displaystyle\int_0^6 \dfrac{\pi}{2}\left(\dfrac{6 - y}{4}\right)^2 dy$.` },
      { name: "Answer", earns: String.raw`Volume $\dfrac{9\pi}{4}$.` },
    ],
    solution: String.raw`Solving $y = 6 - 2x$ for $x$ gives $x = \dfrac{6 - y}{2}$, so at height $y$, $0 \le y \le 6$, the diameter is $\dfrac{6 - y}{2}$ and the radius is $\dfrac{6 - y}{4}$. The volume is $\displaystyle\int_0^6 \dfrac{\pi}{2}\left(\dfrac{6 - y}{4}\right)^2 dy = \dfrac{\pi}{32}\int_0^6 (6 - y)^2\,dy = \dfrac{\pi}{32} \cdot 72 = \dfrac{9\pi}{4}$.` },
];

export default { forms: [{ id: "q808", name: "Topic 8.8 Quiz: Cross Sections, Triangles and Semicircles", group: "Unit 8: Applications of Integration", items }] };

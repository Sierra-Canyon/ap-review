export const sets = {
  "q810-s9": { name: "Discs about horizontal lines", label: "Free response", intro: String.raw`Let $f(x) = \dfrac{3}{x}$. Let $R$ be the region bounded by the graph of $f$ and the lines $y = 3$ and $x = 3$. Let $S$ be the region bounded by the graph of $f$ and the lines $y = 1$ and $x = 1$.`,
    sources: [] },
};

const items = [
  { id: "q810-m01", type: "mcq", skill: "u8", topic: "8.10", calc: false, difficulty: "moderate",
    question: String.raw`The region bounded by the graph of $y = x^4$, the line $y = 1$, and the $y$-axis is revolved about the line $y = 1$. What is the volume of the resulting solid?`,
    choices: [String.raw`$\frac{32\pi}{45}$`, String.raw`$\frac{8\pi}{9}$`, String.raw`$\frac{4\pi}{5}$`, String.raw`$\frac{68\pi}{45}$`],
    why: [
      String.raw`The region lies between $y = x^4$ and $y = 1$ for $0 \le x \le 1$, so each disc has radius $1 - x^4$. The volume is $\pi\displaystyle\int_0^1 \left(1 - x^4\right)^2 dx = \pi\displaystyle\int_0^1 \left(1 - 2x^4 + x^8\right)dx = \pi\left(1 - \dfrac{2}{5} + \dfrac{1}{9}\right) = \dfrac{32\pi}{45}$.`,
      String.raw`This squares each term separately, using $1 - x^8$. The radius $1 - x^4$ must be squared as a whole: $1 - 2x^4 + x^8$.`,
      String.raw`This does not square the radius: $\pi\displaystyle\int_0^1 \left(1 - x^4\right)dx$.`,
      String.raw`This uses the radius $1 + x^4$. The distance from the curve up to the line $y = 1$ is $1 - x^4$.`,
    ], answer: 0 },
  { id: "q810-m02", type: "mcq", skill: "u8", topic: "8.10", calc: false, difficulty: "moderate",
    question: String.raw`The region bounded by the graph of $y = \dfrac{2}{x}$ and the lines $x = 2$ and $y = 4$ is revolved about the line $x = 2$. Which integral gives the volume of the resulting solid?`,
    choices: [String.raw`$\pi\displaystyle\int_1^4 \left(2 - \dfrac{2}{y}\right)^2 dy$`, String.raw`$\pi\displaystyle\int_1^4 \left(4 - \dfrac{4}{y^2}\right)dy$`, String.raw`$\pi\displaystyle\int_1^4 \left(2 + \dfrac{2}{y}\right)^2 dy$`, String.raw`$\pi\displaystyle\int_{1/2}^{2} \left(4 - \dfrac{2}{x}\right)^2 dx$`],
    why: [
      String.raw`The curve meets $y = 4$ at $x = \dfrac{1}{2}$ and meets $x = 2$ at $y = 1$. The discs are horizontal: at height $y$, $1 \le y \le 4$, the region runs from $x = \dfrac{2}{y}$ to $x = 2$, so the radius is $2 - \dfrac{2}{y}$.`,
      String.raw`This squares $2$ and $\dfrac{2}{y}$ separately. The radius $2 - \dfrac{2}{y}$ must be squared as a whole.`,
      String.raw`This adds $\dfrac{2}{y}$ to $2$. The distance from the curve $x = \dfrac{2}{y}$ to the line $x = 2$ is $2 - \dfrac{2}{y}$.`,
      String.raw`This uses vertical discs of radius $4 - \dfrac{2}{x}$, which revolves the region about the horizontal line $y = 4$. Revolving about the vertical line $x = 2$ gives horizontal discs and an integral in $y$.`,
    ], answer: 0 },
  { id: "q810-m03", type: "mcq", skill: "u8", topic: "8.10", calc: false, difficulty: "easy",
    question: String.raw`The region bounded by the line $y = x$, the $x$-axis, and the line $x = 3$ is revolved about the line $x = 3$. What is the volume of the resulting solid?`,
    choices: [String.raw`$9\pi$`, String.raw`$18\pi$`, String.raw`$27\pi$`, String.raw`$\frac{9\pi}{2}$`],
    why: [
      String.raw`At height $y$, $0 \le y \le 3$, the region runs from $x = y$ to $x = 3$, so the radius is $3 - y$. The volume is $\pi\displaystyle\int_0^3 (3 - y)^2\,dy = \pi \cdot 9 = 9\pi$.`,
      String.raw`This squares $3$ and $y$ separately: $\pi\displaystyle\int_0^3 \left(9 - y^2\right)dy$. The radius $3 - y$ must be squared as a whole.`,
      String.raw`This uses a radius of $3$ at every height, the volume of a cylinder. The radius shrinks to $0$ at $y = 3$.`,
      String.raw`This does not square the radius: $\pi\displaystyle\int_0^3 (3 - y)\,dy$.`,
    ], answer: 0 },
  { id: "q810-m04", type: "mcq", skill: "u8", topic: "8.10", calc: true, difficulty: "easy",
    question: String.raw`The region bounded by the graph of $y = \sin x$, the line $y = 1$, and the $y$-axis is revolved about the line $y = 1$. What is the volume of the resulting solid?`,
    choices: ["$1.119$", "$2.467$", "$1.793$", "$13.685$"],
    why: [
      String.raw`The graph meets $y = 1$ at $x = \dfrac{\pi}{2}$, so the region lies between $y = \sin x$ and $y = 1$ for $0 \le x \le \dfrac{\pi}{2}$ and the radius is $1 - \sin x$. With a calculator, $\pi\displaystyle\int_0^{\pi/2} (1 - \sin x)^2\,dx = 1.119$.`,
      String.raw`This squares $1$ and $\sin x$ separately: $\pi\displaystyle\int_0^{\pi/2} \left(1 - \sin^2 x\right)dx$. The radius must be squared as a whole.`,
      String.raw`This does not square the radius: $\pi\displaystyle\int_0^{\pi/2} (1 - \sin x)\,dx$.`,
      String.raw`This uses the radius $1 + \sin x$. The distance from the curve up to the line $y = 1$ is $1 - \sin x$.`,
    ], answer: 0 },
  { id: "q810-m05", type: "mcq", skill: "u8", topic: "8.10", calc: false, difficulty: "difficult",
    question: String.raw`The region bounded by the graph of $y = x^3$, the $x$-axis, and the line $x = 1$ is revolved about the line $x = 1$. What is the volume of the resulting solid?`,
    choices: [String.raw`$\frac{\pi}{10}$`, String.raw`$\frac{2\pi}{5}$`, String.raw`$\frac{9\pi}{14}$`, String.raw`$\frac{\pi}{4}$`],
    why: [
      String.raw`At height $y$, $0 \le y \le 1$, the region runs from $x = y^{1/3}$ to $x = 1$, so the radius is $1 - y^{1/3}$. The volume is $\pi\displaystyle\int_0^1 \left(1 - y^{1/3}\right)^2 dy = \pi\left(1 - \dfrac{3}{2} + \dfrac{3}{5}\right) = \dfrac{\pi}{10}$.`,
      String.raw`This squares each term separately, using $1 - y^{2/3}$. The radius $1 - y^{1/3}$ must be squared as a whole.`,
      String.raw`This is $\pi\displaystyle\int_0^1 \left(1 - x^3\right)^2 dx$, which treats the line $x = 1$ as if it were horizontal. About a vertical line, the discs are horizontal and the integral is in $y$.`,
      String.raw`This does not square the radius: $\pi\displaystyle\int_0^1 \left(1 - y^{1/3}\right)dy$.`,
    ], answer: 0 },
  { id: "q810-m06", type: "mcq", skill: "u8", topic: "8.10", calc: false, difficulty: "difficult",
    question: String.raw`The region enclosed by the graph of $y = x^3 - 3x$ and the line $y = 2$ is revolved about the line $y = 2$. Which integral gives the volume of the resulting solid?`,
    choices: [String.raw`$\pi\displaystyle\int_{-1}^{2} \left(2 - x^3 + 3x\right)^2 dx$`, String.raw`$\pi\displaystyle\int_{-1}^{2} \left(x^3 - 3x + 2\right)^2 dx$`, String.raw`$\pi\displaystyle\int_{-\sqrt{3}}^{\sqrt{3}} \left(2 - x^3 + 3x\right)^2 dx$`, String.raw`$\pi\displaystyle\int_{-1}^{2} \left(4 - \left(x^3 - 3x\right)^2\right)dx$`],
    why: [
      String.raw`$x^3 - 3x = 2$ gives $x^3 - 3x - 2 = (x - 2)(x + 1)^2 = 0$, so the curve touches the line at $x = -1$, crosses it at $x = 2$, and lies below it in between. Each disc reaches from the curve up to $y = 2$, so its radius is $2 - \left(x^3 - 3x\right) = 2 - x^3 + 3x$.`,
      String.raw`The radius $\left(x^3 - 3x\right) + 2$ is the distance from the curve to the line $y = -2$. The axis is $y = 2$, above the region, so the radius is $2 - \left(x^3 - 3x\right)$.`,
      String.raw`$\pm\sqrt{3}$ are zeros of $x^3 - 3x$, where the curve meets the $x$-axis. The region ends where the curve meets $y = 2$, at $x = -1$ and $x = 2$.`,
      String.raw`This squares $2$ and $x^3 - 3x$ separately, as in a washer about the $x$-axis. The radius $2 - \left(x^3 - 3x\right)$ must be squared as a whole.`,
    ], answer: 0 },
  { id: "q810-f1a", type: "frq", skill: "u8", topic: "8.10", calc: false, set: "q810-s9", part: "(a)",
    prompt: String.raw`Find the volume of the solid generated when $R$ is revolved about the line $y = 3$.`,
    rows: [
      { name: "Integral", earns: String.raw`$\pi\displaystyle\int_1^3 \left(3 - \dfrac{3}{x}\right)^2 dx$.` },
      { name: "Answer", earns: String.raw`Volume $\pi(24 - 18\ln 3)$.` },
    ],
    solution: String.raw`The graph of $f$ meets $y = 3$ at $x = 1$, so $R$ lies between $y = \dfrac{3}{x}$ and $y = 3$ for $1 \le x \le 3$. Each disc has radius $3 - \dfrac{3}{x}$. The volume is $\pi\displaystyle\int_1^3 \left(9 - \dfrac{18}{x} + \dfrac{9}{x^2}\right)dx = \pi\left[9x - 18\ln x - \dfrac{9}{x}\right]_1^3 = \pi\left((27 - 18\ln 3 - 3) - (9 - 0 - 9)\right) = \pi(24 - 18\ln 3)$.` },
  { id: "q810-f1b", type: "frq", skill: "u8", topic: "8.10", calc: false, set: "q810-s9", part: "(b)",
    prompt: String.raw`Find the volume of the solid generated when $S$ is revolved about the line $y = 1$.`,
    rows: [
      { name: "Integral", earns: String.raw`$\pi\displaystyle\int_1^3 \left(\dfrac{3}{x} - 1\right)^2 dx$.` },
      { name: "Answer", earns: String.raw`Volume $\pi(8 - 6\ln 3)$.` },
    ],
    solution: String.raw`The graph of $f$ meets $y = 1$ at $x = 3$, so $S$ lies between $y = 1$ and $y = \dfrac{3}{x}$ for $1 \le x \le 3$. Each disc has radius $\dfrac{3}{x} - 1$. The volume is $\pi\displaystyle\int_1^3 \left(\dfrac{9}{x^2} - \dfrac{6}{x} + 1\right)dx = \pi\left[-\dfrac{9}{x} - 6\ln x + x\right]_1^3 = \pi\left((-3 - 6\ln 3 + 3) - (-9 + 1)\right) = \pi(8 - 6\ln 3)$.` },
];

export default { forms: [{ id: "q810", name: "Topic 8.10 Quiz: Disc Method About Other Lines", group: "Unit 8: Applications of Integration", items }] };

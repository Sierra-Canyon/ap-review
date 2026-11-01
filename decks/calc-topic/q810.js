export const sets = {
  "q810-s9": { name: "Discs about horizontal lines", label: "Free response", intro: String.raw`Let $f(x) = \dfrac{3}{x}$. Let $R$ be the region bounded by the graph of $f$ and the lines $y = 3$ and $x = 3$. Let $S$ be the region bounded by the graph of $f$ and the lines $y = 1$ and $x = 1$.`,
    sources: [] },
};

const items = [
  { id: "q810-m01", type: "mcq", skill: "u8", topic: "8.10", calc: false,
    question: String.raw`The region bounded by the graph of $y = x^2$, the line $y = 1$, and the $y$-axis is revolved about the line $y = 1$. What is the volume of the resulting solid?`,
    choices: [String.raw`$\frac{8\pi}{15}$`, String.raw`$\frac{4\pi}{5}$`, String.raw`$\frac{2\pi}{3}$`, String.raw`$\frac{28\pi}{15}$`],
    why: [
      String.raw`The region lies between $y = x^2$ and $y = 1$ for $0 \le x \le 1$, so each disc has radius $1 - x^2$. The volume is $\pi\displaystyle\int_0^1 \left(1 - x^2\right)^2 dx = \pi\left(1 - \dfrac{2}{3} + \dfrac{1}{5}\right) = \dfrac{8\pi}{15}$.`,
      String.raw`This squares each term separately, using $1 - x^4$. The radius $1 - x^2$ must be squared as a whole: $1 - 2x^2 + x^4$.`,
      String.raw`This does not square the radius: $\pi\displaystyle\int_0^1 \left(1 - x^2\right)dx$.`,
      String.raw`This uses the radius $1 + x^2$. The distance from the curve up to the line $y = 1$ is $1 - x^2$.`,
    ], answer: 0 },
  { id: "q810-m02", type: "mcq", skill: "u8", topic: "8.10", calc: false,
    question: String.raw`The region bounded by the graph of $y = x^2$, the $x$-axis, and the line $x = 2$ is revolved about the line $x = 2$. Which integral gives the volume of the resulting solid?`,
    choices: [String.raw`$\pi\displaystyle\int_0^4 \left(2 - \sqrt{y}\right)^2 dy$`, String.raw`$\pi\displaystyle\int_0^4 (4 - y)\,dy$`, String.raw`$\pi\displaystyle\int_0^4 \left(2 + \sqrt{y}\right)^2 dy$`, String.raw`$\pi\displaystyle\int_0^2 \left(2 - x^2\right)^2 dx$`],
    why: [
      String.raw`The discs are horizontal. At height $y$, $0 \le y \le 4$, the region runs from $x = \sqrt{y}$ to $x = 2$, so the radius is $2 - \sqrt{y}$. The volume is $\pi\displaystyle\int_0^4 \left(2 - \sqrt{y}\right)^2 dy = \dfrac{8\pi}{3}$.`,
      String.raw`This squares $2$ and $\sqrt{y}$ separately. The radius $2 - \sqrt{y}$ must be squared as a whole.`,
      String.raw`This adds $\sqrt{y}$ to $2$. The distance from the curve to the line $x = 2$ is $2 - \sqrt{y}$.`,
      String.raw`Revolving about a vertical line gives horizontal discs, so the integral is in $y$. This expression is not a radius measured from $x = 2$.`,
    ], answer: 0 },
  { id: "q810-m03", type: "mcq", skill: "u8", topic: "8.10", calc: false,
    question: String.raw`The region bounded by the line $y = x$, the $x$-axis, and the line $x = 3$ is revolved about the line $x = 3$. What is the volume of the resulting solid?`,
    choices: [String.raw`$9\pi$`, String.raw`$18\pi$`, String.raw`$27\pi$`, String.raw`$\frac{9\pi}{2}$`],
    why: [
      String.raw`At height $y$, $0 \le y \le 3$, the region runs from $x = y$ to $x = 3$, so the radius is $3 - y$. The volume is $\pi\displaystyle\int_0^3 (3 - y)^2\,dy = \pi \cdot 9 = 9\pi$.`,
      String.raw`This squares $3$ and $y$ separately: $\pi\displaystyle\int_0^3 \left(9 - y^2\right)dy$. The radius $3 - y$ must be squared as a whole.`,
      String.raw`This uses a radius of $3$ at every height, the volume of a cylinder. The radius shrinks to $0$ at $y = 3$.`,
      String.raw`This does not square the radius: $\pi\displaystyle\int_0^3 (3 - y)\,dy$.`,
    ], answer: 0 },
  { id: "q810-m04", type: "mcq", skill: "u8", topic: "8.10", calc: true,
    question: String.raw`The region bounded by the graph of $y = \sin x$, the line $y = 1$, and the $y$-axis is revolved about the line $y = 1$. What is the volume of the resulting solid?`,
    choices: ["$1.119$", "$2.467$", "$1.793$", "$13.685$"],
    why: [
      String.raw`The graph meets $y = 1$ at $x = \dfrac{\pi}{2}$, so the region lies between $y = \sin x$ and $y = 1$ for $0 \le x \le \dfrac{\pi}{2}$ and the radius is $1 - \sin x$. With a calculator, $\pi\displaystyle\int_0^{\pi/2} (1 - \sin x)^2\,dx = 1.119$.`,
      String.raw`This squares $1$ and $\sin x$ separately: $\pi\displaystyle\int_0^{\pi/2} \left(1 - \sin^2 x\right)dx$. The radius must be squared as a whole.`,
      String.raw`This does not square the radius: $\pi\displaystyle\int_0^{\pi/2} (1 - \sin x)\,dx$.`,
      String.raw`This uses the radius $1 + \sin x$. The distance from the curve up to the line $y = 1$ is $1 - \sin x$.`,
    ], answer: 0 },
  { id: "q810-m05", type: "mcq", skill: "u8", topic: "8.10", calc: false,
    question: String.raw`The region bounded by the graph of $y = x^3$, the $x$-axis, and the line $x = 1$ is revolved about the line $x = 1$. What is the volume of the resulting solid?`,
    choices: [String.raw`$\frac{\pi}{10}$`, String.raw`$\frac{2\pi}{5}$`, String.raw`$\frac{9\pi}{14}$`, String.raw`$\frac{\pi}{4}$`],
    why: [
      String.raw`At height $y$, $0 \le y \le 1$, the region runs from $x = y^{1/3}$ to $x = 1$, so the radius is $1 - y^{1/3}$. The volume is $\pi\displaystyle\int_0^1 \left(1 - y^{1/3}\right)^2 dy = \pi\left(1 - \dfrac{3}{2} + \dfrac{3}{5}\right) = \dfrac{\pi}{10}$.`,
      String.raw`This squares each term separately, using $1 - y^{2/3}$. The radius $1 - y^{1/3}$ must be squared as a whole.`,
      String.raw`This is $\pi\displaystyle\int_0^1 \left(1 - x^3\right)^2 dx$, which treats the line $x = 1$ as if it were horizontal. About a vertical line, the discs are horizontal and the integral is in $y$.`,
      String.raw`This does not square the radius: $\pi\displaystyle\int_0^1 \left(1 - y^{1/3}\right)dy$.`,
    ], answer: 0 },
  { id: "q810-m06", type: "mcq", skill: "u8", topic: "8.10", calc: false,
    question: String.raw`The region enclosed by the graph of $y = x^2 + 1$ and the line $y = 2$ is revolved about the line $y = 2$. What is the volume of the resulting solid?`,
    choices: [String.raw`$\frac{16\pi}{15}$`, String.raw`$\frac{64\pi}{15}$`, String.raw`$\frac{4\pi}{3}$`, String.raw`$\frac{8\pi}{15}$`],
    why: [
      String.raw`The graphs meet at $x = \pm 1$. The radius is $2 - (x^2 + 1) = 1 - x^2$, and the volume is $\pi\displaystyle\int_{-1}^{1} \left(1 - x^2\right)^2 dx = \pi \cdot \dfrac{16}{15} = \dfrac{16\pi}{15}$.`,
      String.raw`This is $\pi\displaystyle\int_{-1}^{1} \left(2^2 - (x^2 + 1)^2\right)dx$, the washer volume for revolving about the $x$-axis. The axis here is $y = 2$, which touches the region, so there is no hole.`,
      String.raw`This does not square the radius: $\pi\displaystyle\int_{-1}^{1} \left(1 - x^2\right)dx$.`,
      String.raw`This integrates from $0$ to $1$ only. The region runs from $x = -1$ to $x = 1$.`,
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

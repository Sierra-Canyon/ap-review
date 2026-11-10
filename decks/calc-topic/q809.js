import { graph } from "../../plot.js";

export const sets = {
  "q809-s1": { name: "A region beside the y-axis", label: "Graph", intro: String.raw`Let $R$ be the region bounded by the graph of $y = \dfrac{6}{x}$, the lines $y = 2$ and $y = 6$, and the $y$-axis, shown below.`,
    sources: [{ title: "", blocks: [{ svg: graph({ x: [-1, 7], y: [-1, 7], xname: "x", yname: "y",
      fns: [{ f: (x) => 6 / x, from: 0.9, to: 6.8, label: "y = 6/x", labelAt: 4.5 }],
      segments: [[0, 2, 3, 2], [0, 6, 1, 6]],
      dots: [[1, 6, "closed"], [3, 2, "closed"]],
      labels: [[0.6, 3.6, "R"]],
      alt: "The graph of y = 6/x for x > 0 and the region R. R is bounded on the left by the y-axis, below by the segment y = 2 from (0, 2) to (3, 2), above by the segment y = 6 from (0, 6) to (1, 6), and on the right by the curve from (1, 6) down to (3, 2)." }) }] }] },
  "q809-s9": { name: "Revolving a region under y = 1/x", label: "Free response", intro: String.raw`Let $R$ be the region bounded by the graph of $y = \dfrac{1}{x}$, the $x$-axis, and the vertical lines $x = 1$ and $x = 3$.`,
    sources: [] },
};

const items = [
  { id: "q809-m01", type: "mcq", skill: "u8", topic: "8.9", calc: false, difficulty: "easy",
    question: String.raw`The region bounded by the graph of $y = x^2 + 2$, the $x$-axis, and the lines $x = 0$ and $x = 1$ is revolved about the $x$-axis. What is the volume of the resulting solid?`,
    choices: [String.raw`$\frac{83\pi}{15}$`, String.raw`$\frac{21\pi}{5}$`, String.raw`$\frac{7\pi}{3}$`, String.raw`$\frac{83}{15}$`],
    why: [
      String.raw`Each disc has radius $x^2 + 2$. The volume is $\pi\displaystyle\int_0^1 \left(x^2 + 2\right)^2 dx = \pi\displaystyle\int_0^1 \left(x^4 + 4x^2 + 4\right)dx = \pi\left(\dfrac{1}{5} + \dfrac{4}{3} + 4\right) = \dfrac{83\pi}{15}$.`,
      String.raw`This squares $x^2 + 2$ as $x^4 + 4$, leaving out the middle term $4x^2$.`,
      String.raw`This integrates $\pi\left(x^2 + 2\right)$, so the radius is not squared.`,
      String.raw`This leaves out the factor $\pi$ in the area of a disc, $\pi r^2$.`,
    ], answer: 0 },
  { id: "q809-m02", type: "mcq", skill: "u8", topic: "8.9", calc: false, difficulty: "difficult",
    question: String.raw`The region bounded by the graph of $y = x^4$, the line $y = 16$, and the $y$-axis, with $x \ge 0$, is revolved about the $y$-axis. What is the volume of the resulting solid?`,
    choices: [String.raw`$\frac{128\pi}{3}$`, String.raw`$\frac{512\pi}{9}$`, String.raw`$\frac{128\pi}{5}$`, String.raw`$\frac{128}{3}$`],
    why: [
      String.raw`The discs are horizontal with radius $x = y^{1/4}$ for $0 \le y \le 16$. The volume is $\pi\displaystyle\int_0^{16} y^{1/2}\,dy = \pi \cdot \dfrac{2}{3} \cdot 16^{3/2} = \dfrac{128\pi}{3}$.`,
      String.raw`This is $\pi\displaystyle\int_0^2 \left(x^4\right)^2 dx$, the volume for revolving the region under $y = x^4$ about the $x$-axis.`,
      String.raw`This integrates $\pi y^{1/4}$, so the radius is not squared.`,
      String.raw`This leaves out the factor $\pi$ in the area of a disc.`,
    ], answer: 0 },
  { id: "q809-m03", type: "mcq", skill: "u8", topic: "8.9", calc: false, difficulty: "easy",
    question: String.raw`The region bounded by the graph of $y = e^{x/2}$, the $x$-axis, and the lines $x = 0$ and $x = 2$ is revolved about the $x$-axis. What is the volume of the resulting solid?`,
    choices: [String.raw`$\pi\left(e^{2} - 1\right)$`, String.raw`$2\pi(e - 1)$`, String.raw`$\pi e^{2}$`, String.raw`$e^{2} - 1$`],
    why: [
      String.raw`The radius is $e^{x/2}$, so each disc has area $\pi e^{x}$. The volume is $\pi\displaystyle\int_0^2 e^{x}\,dx = \pi\left(e^{2} - 1\right)$.`,
      String.raw`This integrates $\pi e^{x/2}$, so the radius is not squared.`,
      String.raw`This leaves out the lower limit. At $x = 0$ the antiderivative is $\pi e^{0} = \pi$, which must be subtracted.`,
      String.raw`This leaves out the factor $\pi$ in the area of a disc.`,
    ], answer: 0 },
  { id: "q809-m04", type: "mcq", skill: "u8", topic: "8.9", calc: false, difficulty: "moderate",
    question: String.raw`The region bounded by the graph of $y = \sec x$, the $x$-axis, and the lines $x = 0$ and $x = \dfrac{\pi}{3}$ is revolved about the $x$-axis. What is the volume of the resulting solid?`,
    choices: [String.raw`$\pi\sqrt{3}$`, String.raw`$\pi\ln\left(2 + \sqrt{3}\right)$`, String.raw`$\sqrt{3}$`, String.raw`$\pi$`],
    why: [
      String.raw`The volume is $\pi\displaystyle\int_0^{\pi/3} \sec^2 x\,dx = \pi\left[\tan x\right]_0^{\pi/3} = \pi\left(\sqrt{3} - 0\right) = \pi\sqrt{3}$.`,
      String.raw`This integrates $\pi\sec x$, so the radius is not squared.`,
      String.raw`This leaves out the factor $\pi$ in the area of a disc.`,
      String.raw`This uses $\sec x$ as the antiderivative of $\sec^2 x$. The derivative of $\sec x$ is $\sec x \tan x$; the antiderivative of $\sec^2 x$ is $\tan x$.`,
    ], answer: 0 },
  { id: "q809-m05", type: "mcq", skill: "u8", topic: "8.9", calc: true, difficulty: "easy",
    question: String.raw`The region bounded by the graph of $y = \ln\left(1 + x^2\right)$, the $x$-axis, and the line $x = 2$ is revolved about the $x$-axis. What is the volume of the resulting solid?`,
    choices: ["$4.881$", "$4.502$", "$1.554$", "$9.005$"],
    why: [
      String.raw`The graph meets the $x$-axis at $x = 0$. With a calculator, $\pi\displaystyle\int_0^2 \left(\ln\left(1 + x^2\right)\right)^2 dx = 4.881$.`,
      String.raw`$4.502$ is $\pi\displaystyle\int_0^2 \ln\left(1 + x^2\right)dx$, with the radius not squared.`,
      String.raw`$1.554$ is $\displaystyle\int_0^2 \left(\ln\left(1 + x^2\right)\right)^2 dx$, without the factor $\pi$.`,
      String.raw`This squares the radius as $\ln\left(\left(1 + x^2\right)^2\right) = 2\ln\left(1 + x^2\right)$. The square of the radius is $\left(\ln\left(1 + x^2\right)\right)^2$.`,
    ], answer: 0 },
  { id: "q809-m06", type: "mcq", skill: "u8", topic: "8.9", calc: false, difficulty: "difficult", set: "q809-s1",
    question: String.raw`The region $R$ is revolved about the $y$-axis. What is the volume of the resulting solid?`,
    choices: [String.raw`$12\pi$`, String.raw`$6\pi\ln 3$`, String.raw`$\frac{52\pi}{27}$`, String.raw`$36\pi\ln 3$`],
    why: [
      String.raw`The discs are horizontal. At height $y$, $2 \le y \le 6$, the region runs from the $y$-axis to $x = \dfrac{6}{y}$, so the radius is $\dfrac{6}{y}$. The volume is $\pi\displaystyle\int_2^6 \dfrac{36}{y^2}\,dy = 36\pi\left[-\dfrac{1}{y}\right]_2^6 = 36\pi\left(\dfrac{1}{2} - \dfrac{1}{6}\right) = 12\pi$.`,
      String.raw`This does not square the radius: $\pi\displaystyle\int_2^6 \dfrac{6}{y}\,dy = 6\pi\ln 3$.`,
      String.raw`This solves $y = \dfrac{6}{x}$ for $x$ as $x = \dfrac{y}{6}$ and integrates $\pi\left(\dfrac{y}{6}\right)^2$. Solving correctly gives $x = \dfrac{6}{y}$.`,
      String.raw`This uses $\ln y$ as an antiderivative of $\dfrac{1}{y^2}$, giving $36\pi(\ln 6 - \ln 2)$. An antiderivative of $y^{-2}$ is $-y^{-1}$.`,
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

import { graph } from "../../plot.js";

export const sets = {
  "q801-s9": { name: "The graph of f", label: "Free response", intro: String.raw`The function $f$ is defined on the closed interval $[-2, 6]$. The graph of $f$, which consists of four line segments, is shown below.`,
    sources: [{ title: "", blocks: [{ svg: graph({ x: [-2, 6], y: [-3, 5], xname: "x", yname: "y",
      segments: [[-2, 0, 0, 4], [0, 4, 2, 4], [2, 4, 4, 0], [4, 0, 6, -2]],
      dots: [[-2, 0, "closed"], [0, 4, "closed"], [2, 4, "closed"], [4, 0, "closed"], [6, -2, "closed"]],
      alt: "Graph of f on [-2, 6] made of four line segments: from (-2, 0) up to (0, 4), level from (0, 4) to (2, 4), down from (2, 4) to (4, 0), and down from (4, 0) to (6, -2)." }) }] }] },
};

const items = [
  { id: "q801-m01", type: "mcq", skill: "u8", topic: "8.1", calc: false,
    question: String.raw`What is the average value of $f(x) = x^2 + 2x + 1$ on the interval $[0, 3]$?`,
    choices: ["$7$", "$21$", String.raw`$\frac{17}{2}$`, "$5$"],
    why: [
      String.raw`The average value is $\dfrac{1}{3 - 0}\displaystyle\int_0^3 \left(x^2 + 2x + 1\right)dx = \dfrac{1}{3}\left[\dfrac{x^3}{3} + x^2 + x\right]_0^3 = \dfrac{1}{3}(9 + 9 + 3) = 7$.`,
      String.raw`$21$ is the value of the integral. It must be divided by the length of the interval, $3$.`,
      String.raw`$\dfrac{17}{2}$ is the average of the endpoint values $f(0) = 1$ and $f(3) = 16$. The average value of a function uses the integral, not two values.`,
      String.raw`$5$ is the average rate of change, $\dfrac{f(3) - f(0)}{3 - 0} = \dfrac{15}{3}$. That is the average of $f'$, not of $f$.`,
    ], answer: 0 },
  { id: "q801-m02", type: "mcq", skill: "u8", topic: "8.1", calc: false,
    question: String.raw`What is the average value of $\sec^2 x$ on the interval $\left[0, \dfrac{\pi}{4}\right]$?`,
    choices: [String.raw`$\frac{4}{\pi}$`, "$1$", String.raw`$\frac{3}{2}$`, String.raw`$\frac{\pi}{4}$`],
    why: [
      String.raw`$\displaystyle\int_0^{\pi/4} \sec^2 x\,dx = \left[\tan x\right]_0^{\pi/4} = 1 - 0 = 1$. Dividing by the length $\dfrac{\pi}{4}$ gives $\dfrac{4}{\pi}$.`,
      String.raw`$1$ is the value of the integral. It must be divided by the length of the interval, $\dfrac{\pi}{4}$.`,
      String.raw`$\dfrac{3}{2}$ is the average of the endpoint values $\sec^2 0 = 1$ and $\sec^2 \dfrac{\pi}{4} = 2$, not the average value of the function.`,
      String.raw`This multiplies the integral by the length $\dfrac{\pi}{4}$ in place of dividing by it.`,
    ], answer: 0 },
  { id: "q801-m03", type: "mcq", skill: "u8", topic: "8.1", calc: false,
    question: String.raw`The function $f$ is continuous, and the average value of $f$ on the interval $[2, 6]$ is $5$. If $\displaystyle\int_2^4 f(x)\,dx = 8$, what is the value of $\displaystyle\int_4^6 f(x)\,dx$?`,
    choices: ["$12$", "$20$", "$6$", "$-3$"],
    why: [
      String.raw`The average value is $\dfrac{1}{4}\displaystyle\int_2^6 f(x)\,dx = 5$, so $\displaystyle\int_2^6 f(x)\,dx = 20$. Then $\displaystyle\int_4^6 f(x)\,dx = 20 - 8 = 12$.`,
      String.raw`$20$ is the integral over all of $[2, 6]$. The part on $[2, 4]$, which is $8$, must be subtracted.`,
      String.raw`$6$ is the average value of $f$ on $[4, 6]$, $\dfrac{12}{2}$. The question asks for the integral itself.`,
      String.raw`This subtracts the integral $8$ from the average value $5$. The average value must first be multiplied by the length $4$ to give the integral on $[2, 6]$.`,
    ], answer: 0 },
  { id: "q801-m04", type: "mcq", skill: "u8", topic: "8.1", calc: false,
    question: String.raw`What is the average value of $f(x) = \dfrac{1}{x}$ on the interval $\left[1, e^{2}\right]$?`,
    choices: [String.raw`$\frac{2}{e^{2} - 1}$`, "$2$", String.raw`$\frac{2}{e^{2}}$`, String.raw`$\frac{1 + e^{-2}}{2}$`],
    why: [
      String.raw`$\displaystyle\int_1^{e^2} \dfrac{1}{x}\,dx = \ln\left(e^{2}\right) - \ln 1 = 2$. Dividing by the length $e^{2} - 1$ gives $\dfrac{2}{e^{2} - 1}$.`,
      String.raw`$2$ is the value of the integral. It must be divided by the length of the interval, $e^{2} - 1$.`,
      String.raw`This divides by the right endpoint $e^{2}$. The length of the interval is $e^{2} - 1$.`,
      String.raw`This is the average of the endpoint values $f(1) = 1$ and $f\left(e^{2}\right) = e^{-2}$, not the average value of the function.`,
    ], answer: 0 },
  { id: "q801-m05", type: "mcq", skill: "u8", topic: "8.1", calc: true,
    question: String.raw`What is the average value of $f(x) = \sqrt{1 + x^3}$ on the interval $[0, 2]$?`,
    choices: ["$1.621$", "$3.241$", "$2$", "$1.414$"],
    why: [
      String.raw`With a calculator, $\displaystyle\int_0^2 \sqrt{1 + x^3}\,dx = 3.24131\ldots$, and dividing by the length $2$ gives $1.621$.`,
      String.raw`$3.241$ is the value of the integral. It must be divided by the length of the interval, $2$.`,
      String.raw`$2$ is the average of the endpoint values $f(0) = 1$ and $f(2) = 3$, not the average value of the function.`,
      String.raw`$1.414$ is $f(1)$, the value at the midpoint of the interval. The average value comes from the integral.`,
    ], answer: 0 },
  { id: "q801-m06", type: "mcq", skill: "u8", topic: "8.1", calc: false,
    question: String.raw`Let $f(x) = x^2$. For what value of $c$ in the interval $[0, 3]$ is $f(c)$ equal to the average value of $f$ on $[0, 3]$?`,
    choices: [String.raw`$\sqrt{3}$`, "$3$", String.raw`$\frac{3}{2}$`, "$9$"],
    why: [
      String.raw`The average value is $\dfrac{1}{3}\displaystyle\int_0^3 x^2\,dx = \dfrac{1}{3} \cdot 9 = 3$. Solving $c^2 = 3$ with $c$ in $[0, 3]$ gives $c = \sqrt{3}$.`,
      String.raw`$3$ is the average value of $f$, not the input $c$ where $f(c) = 3$.`,
      String.raw`$\dfrac{3}{2}$ is the midpoint of the interval. $f\left(\dfrac{3}{2}\right) = \dfrac{9}{4}$, which is not the average value $3$.`,
      String.raw`$9$ is the value of $\displaystyle\int_0^3 x^2\,dx$, and it is not in $[0, 3]$.`,
    ], answer: 0 },
  { id: "q801-f1a", type: "frq", skill: "u8", topic: "8.1", calc: false, set: "q801-s9", part: "(a)",
    prompt: String.raw`Find the average value of $f$ on the interval $[-2, 6]$. Show the work that leads to your answer.`,
    rows: [
      { name: "Integral", earns: String.raw`Finds $\displaystyle\int_{-2}^{6} f(x)\,dx = 4 + 8 + 4 - 2 = 14$ from the areas of the regions.` },
      { name: "Answer", earns: String.raw`Divides by the length of the interval: $\dfrac{1}{8}\displaystyle\int_{-2}^{6} f(x)\,dx = \dfrac{14}{8} = \dfrac{7}{4}$.` },
    ],
    solution: String.raw`The integral is the signed area between the graph and the $x$-axis. On $[-2, 0]$ the triangle has area $\dfrac{1}{2}(2)(4) = 4$, on $[0, 2]$ the rectangle has area $8$, on $[2, 4]$ the triangle has area $4$, and on $[4, 6]$ the triangle lies below the axis with area $\dfrac{1}{2}(2)(2) = 2$. So $\displaystyle\int_{-2}^{6} f(x)\,dx = 4 + 8 + 4 - 2 = 14$, and the average value is $\dfrac{1}{6 - (-2)} \cdot 14 = \dfrac{7}{4}$.` },
  { id: "q801-f1b", type: "frq", skill: "u8", topic: "8.1", calc: false, set: "q801-s9", part: "(b)",
    prompt: String.raw`Find the average rate of change of $f$ on the interval $[-2, 6]$.`,
    rows: [
      { name: "Answer", earns: String.raw`$\dfrac{f(6) - f(-2)}{6 - (-2)} = \dfrac{-2 - 0}{8} = -\dfrac{1}{4}$.` },
    ],
    solution: String.raw`$\dfrac{f(6) - f(-2)}{6 - (-2)} = \dfrac{-2 - 0}{8} = -\dfrac{1}{4}$.` },
  { id: "q801-f1c", type: "frq", skill: "u8", topic: "8.1", calc: false, set: "q801-s9", part: "(c)",
    prompt: String.raw`Is there a value $c$ in the interval $[-2, 6]$ for which $f(c)$ equals the average value of $f$ on $[-2, 6]$? Justify your answer.`,
    rows: [
      { name: "Answer with justification", earns: String.raw`Yes, with a reason: either the Intermediate Value Theorem with its conditions checked ($f$ is continuous on $[0, 4]$ and $f(4) = 0 < \dfrac{7}{4} < 4 = f(0)$), or an explicit value such as $c = \dfrac{25}{8}$, where $f(c) = 8 - 2c = \dfrac{7}{4}$.` },
    ],
    solution: String.raw`Yes. The graph of $f$ is made of connected line segments, so $f$ is continuous on $[0, 4]$. Since $f(4) = 0 < \dfrac{7}{4} < 4 = f(0)$, the Intermediate Value Theorem guarantees a value $c$ between $0$ and $4$ with $f(c) = \dfrac{7}{4}$, the average value from part (a).` },
];

export default { forms: [{ id: "q801", name: "Topic 8.1 Quiz: Average Value of a Function", group: "Unit 8: Applications of Integration", items }] };

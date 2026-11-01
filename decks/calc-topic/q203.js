import { graph } from "../../plot.js";

const f3 = (x) => 3 - (x - 2) / 2 + (x - 2) ** 2 / 4;

export const sets = {
  "q203-s1": {
    name: "A reservoir",
    label: "Table",
    intro: String.raw`The amount of water in a reservoir, $R(t)$ million gallons, is a differentiable function of time $t$ days. Selected values are shown in the table.`,
    sources: [{ title: "", blocks: [{ table: { head: ["$t$ (days)", "$0$", "$4$", "$6$", "$9$", "$15$"], rows: [["$R(t)$ (million gallons)", "$120$", "$138$", "$151$", "$169$", "$190$"]] } }] }],
  },
  "q203-s2": {
    name: "The graph of f and a tangent line",
    label: "Graph",
    intro: String.raw`The graph of the function $f$ and the line tangent to the graph of $f$ at $x = 6$ (dashed) are shown below.`,
    sources: [{ title: "", blocks: [{ svg: graph({ x: [-1, 8], y: [0, 9], xname: "x", yname: "y", fns: [{ f: f3, from: -1, to: 8, label: "f", labelAt: 1 }, { f: (x) => 5 + 1.5 * (x - 6), from: 3, to: 8, dash: true }], dots: [[6, 5, "closed"], [4, 2, "closed"], [8, 8, "closed"]], alt: "Graph of f, a curve that opens upward, with its lowest point near x = 3. The dashed tangent line at x = 6 touches the curve at (6, 5) and also passes through the grid points (4, 2) and (8, 8)." }) }] }],
  },
  "q203-s3": {
    name: "Values of f near x = 2",
    label: "Table",
    intro: String.raw`Selected values of a differentiable function $f$ are shown in the table.`,
    sources: [{ title: "", blocks: [{ table: { head: ["$x$", "$1.8$", "$1.9$", "$2.0$", "$2.1$", "$2.2$"], rows: [["$f(x)$", "$5.12$", "$5.43$", "$5.80$", "$6.23$", "$6.72$"]] } }] }],
  },
  "q203-s4": {
    name: "Air pressure by altitude",
    label: "Table",
    intro: String.raw`The air pressure $P(a)$, in kilopascals, is a differentiable function of the altitude $a$ meters above sea level. Selected values are shown in the table.`,
    sources: [{ title: "", blocks: [{ table: { head: ["$a$ (meters)", "$0$", "$500$", "$1000$", "$1500$"], rows: [["$P(a)$ (kilopascals)", "$101.3$", "$95.5$", "$89.9$", "$84.6$"]] } }] }],
  },
  "q203-s5": {
    name: "Difference quotients",
    label: "Table",
    intro: String.raw`For a differentiable function $f$, the table gives values of the difference quotient $\dfrac{f(1 + h) - f(1)}{h}$ for several values of $h$.`,
    sources: [{ title: "", blocks: [{ table: { head: ["$h$", "$-0.1$", "$-0.01$", "$-0.001$", "$0.001$", "$0.01$", "$0.1$"], rows: [[String.raw`$\dfrac{f(1 + h) - f(1)}{h}$`, "$2.5868$", "$2.7047$", "$2.7169$", "$2.7196$", "$2.7319$", "$2.8588$"]] } }] }],
  },
  "q203-s6": {
    name: "Downloads of a new app",
    label: "Free response",
    intro: String.raw`A new app is released at time $t = 0$. The total number of downloads of the app, in thousands, is given by a differentiable function $N$ of time $t$, in days. Selected values of $N(t)$ are shown in the table.`,
    sources: [{ title: "", blocks: [{ table: { head: ["$t$ (days)", "$0$", "$2$", "$5$", "$8$", "$12$"], rows: [["$N(t)$ (thousands of downloads)", "$6.0$", "$11.9$", "$27.1$", "$43.9$", "$55.9$"]] } }] }],
  },
};

export default {
  forms: [{
    id: "q203",
    name: "Topic 2.3 Quiz: Estimating Derivatives at a Point",
    group: "Unit 2: Differentiation: Definition and Fundamental Properties",
    items: [
      { id: "q203-m01", type: "mcq", skill: "u2", topic: "2.3", calc: false, set: "q203-s1",
        question: String.raw`Using the data in the table, what is the best estimate of $R'(7)$, in million gallons per day?`,
        choices: ["$6$", "$18$", String.raw`$\frac{1}{6}$`, String.raw`$\frac{14}{3}$`],
        why: [
          String.raw`The closest data points on either side of $t = 7$ are $t = 6$ and $t = 9$: $R'(7) \approx \dfrac{R(9) - R(6)}{9 - 6} = \dfrac{169 - 151}{3} = 6$.`,
          String.raw`$18$ is the change $R(9) - R(6)$. Divide by the $3$ days between the readings.`,
          String.raw`$\dfrac{1}{6}$ is the reciprocal, $\dfrac{9 - 6}{R(9) - R(6)}$, which would be days per million gallons.`,
          String.raw`$\dfrac{14}{3}$ is $\dfrac{190 - 120}{15 - 0}$, the average rate over all $15$ days. The interval $[6, 9]$, which contains $t = 7$, gives the best estimate.`,
        ], answer: 0 },
      { id: "q203-m02", type: "mcq", skill: "u2", topic: "2.3", calc: true,
        question: String.raw`Let $g(x) = \dfrac{x^{2}}{1 + e^{x}}$. What is the value of $g'(1.5)$?`,
        choices: ["$0.212$", "$0.410$", "$0.208$", "$0.274$"],
        why: [
          String.raw`The calculator's numerical derivative of $g$ at $x = 1.5$ gives $g'(1.5) \approx 0.212$.`,
          String.raw`$0.410$ is $g(1.5)$, the value of the function, not its rate of change.`,
          String.raw`$0.208$ is $\dfrac{g(2) - g(1)}{2 - 1}$, the average rate of change over $[1, 2]$. The calculator can find the derivative at $x = 1.5$ directly.`,
          String.raw`$0.274$ is $\dfrac{g(1.5) - g(0)}{1.5 - 0}$, the slope of the line from the origin to the point on the graph, not the slope of the tangent line.`,
        ], answer: 0 },
      { id: "q203-m03", type: "mcq", skill: "u2", topic: "2.3", calc: false, set: "q203-s2",
        question: String.raw`What is the value of $f'(6)$?`,
        choices: [String.raw`$\frac{3}{2}$`, String.raw`$\frac{2}{3}$`, "$5$", String.raw`$-\frac{3}{2}$`],
        why: [
          String.raw`$f'(6)$ is the slope of the tangent line. The line passes through $(4, 2)$ and $(8, 8)$, so its slope is $\dfrac{8 - 2}{8 - 4} = \dfrac{3}{2}$.`,
          String.raw`$\dfrac{2}{3}$ is run over rise, $\dfrac{8 - 4}{8 - 2}$. Slope is the change in $y$ over the change in $x$.`,
          String.raw`$5$ is $f(6)$, the height of the point of tangency, not the slope.`,
          String.raw`The tangent line rises from left to right, so its slope is positive.`,
        ], answer: 0 },
      { id: "q203-m04", type: "mcq", skill: "u2", topic: "2.3", calc: false, set: "q203-s3",
        question: String.raw`Using the values at $x = 1.9$ and $x = 2.1$, what is the estimate of $f'(2)$?`,
        choices: ["$4$", "$0.8$", "$0.4$", "$5.8$"],
        why: [
          String.raw`$f'(2) \approx \dfrac{f(2.1) - f(1.9)}{2.1 - 1.9} = \dfrac{6.23 - 5.43}{0.2} = \dfrac{0.8}{0.2} = 4$.`,
          String.raw`$0.8$ is the change in $f$. It still has to be divided by the change in $x$, $0.2$.`,
          String.raw`$0.4$ divides the change in $f$ by $2$ instead of by $2.1 - 1.9 = 0.2$.`,
          String.raw`$5.8$ is $f(2)$, the value of the function at $x = 2$, not its rate of change.`,
        ], answer: 0 },
      { id: "q203-m05", type: "mcq", skill: "u2", topic: "2.3", calc: false, set: "q203-s4",
        question: String.raw`Using the data in the table, what is the best estimate of $P'(750)$?`,
        choices: ["$-0.0112$ kilopascals per meter", "$-5.6$ kilopascals per meter", "$-0.0112$ meters per kilopascal", "$0.0112$ kilopascals per meter"],
        why: [
          String.raw`$P'(750) \approx \dfrac{P(1000) - P(500)}{1000 - 500} = \dfrac{89.9 - 95.5}{500} = -0.0112$ kilopascals per meter. The units are the units of $P$ over the units of $a$.`,
          String.raw`$-5.6$ kilopascals is the change in pressure from $500$ to $1000$ meters. Divide by the $500$ meters of altitude.`,
          String.raw`The number is right but the units are reversed. A derivative $P'(a)$ has units of $P$ per unit of $a$: kilopascals per meter.`,
          String.raw`The pressure drops from $95.5$ to $89.9$ as the altitude increases, so the estimate is negative.`,
        ], answer: 0 },
      { id: "q203-m06", type: "mcq", skill: "u2", topic: "2.3", calc: false, set: "q203-s5",
        question: String.raw`Based on the table, which of the following is the best estimate of $f'(1)$?`,
        choices: ["$2.718$", "$2.859$", "$2.587$", String.raw`$f'(1)$ cannot be estimated because the quotient is undefined at $h = 0$.`],
        why: [
          String.raw`$f'(1)$ is the limit of the quotient as $h \to 0$. The values with the smallest $|h|$ are $2.7169$ and $2.7196$, and the limit lies between them, so $f'(1) \approx 2.718$.`,
          String.raw`$2.859$ uses $h = 0.1$, the value farthest from $h = 0$ on the right. The values closest to $h = 0$ give the best estimate.`,
          String.raw`$2.587$ uses $h = -0.1$, the value farthest from $h = 0$ on the left. The values closest to $h = 0$ give the best estimate.`,
          String.raw`The derivative is a limit, so the quotient never has to be evaluated at $h = 0$. Its values as $h$ approaches $0$ from both sides estimate the limit.`,
        ], answer: 0 },
      { id: "q203-f1a", type: "frq", skill: "u2", topic: "2.3", calc: true, set: "q203-s6", part: "(a)",
        prompt: String.raw`Use the data in the table to estimate $N'(3.5)$. Show the computations that lead to your answer. Indicate units of measure.`,
        rows: [
          { name: "Difference quotient", earns: String.raw`Uses the data at $t = 2$ and $t = 5$: $\dfrac{N(5) - N(2)}{5 - 2}$` },
          { name: "Estimate with units", earns: String.raw`$N'(3.5) \approx 5.067$ thousand downloads per day` },
        ],
        solution: String.raw`$t = 3.5$ lies between the data points $t = 2$ and $t = 5$. $$N'(3.5) \approx \frac{N(5) - N(2)}{5 - 2} = \frac{27.1 - 11.9}{3} = 5.067$$ thousand downloads per day.` },
      { id: "q203-f1b", type: "frq", skill: "u2", topic: "2.3", calc: true, set: "q203-s6", part: "(b)",
        prompt: String.raw`The number of downloads is modeled by $M(t) = \dfrac{60}{1 + 9e^{-0.4t}}$. Use the model to find $M'(3.5)$. According to the model, is the number of downloads increasing faster at $t = 3.5$ or at $t = 10$? Give a reason for your answer.`,
        rows: [
          { name: "Model value", earns: String.raw`$M'(3.5) = 5.139$` },
          { name: "Answer with reason", earns: String.raw`Faster at $t = 3.5$, because $M'(3.5) = 5.139 > M'(10) = 2.916$.` },
        ],
        solution: String.raw`Using the numerical derivative on a calculator, $M'(3.5) = 5.139$ thousand downloads per day and $M'(10) = 2.916$ thousand downloads per day. Since $M'(3.5) > M'(10)$, the number of downloads is increasing faster at $t = 3.5$.` },
    ],
  }],
};

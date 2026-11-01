export const sets = {
  "q501-s1": {
    name: "Values of f", label: "Table",
    intro: String.raw`The function $f$ is differentiable for all real numbers. Selected values of $f$ are given in the table below.`,
    sources: [{ title: "", blocks: [{ table: { head: ["$x$", "$0$", "$2$", "$5$", "$7$"], rows: [["$f(x)$", "$4$", "$10$", "$1$", "$8$"]] } }] }],
  },
  "q501-s9": {
    name: "Water temperature", label: "Free response",
    intro: String.raw`The temperature of a pot of water, in degrees Celsius, is modeled by a differentiable function $W$ of time $t$, in minutes. Selected values of $W(t)$ are given in the table below.`,
    sources: [{ title: "", blocks: [{ table: { head: ["$t$ (minutes)", "$0$", "$4$", "$9$", "$15$"], rows: [["$W(t)$ (degrees Celsius)", "$20$", "$41$", "$47$", "$41$"]] } }] }],
  },
};

const items = [
  { id: "q501-m01", type: "mcq", skill: "u5", topic: "5.1", calc: false,
    question: String.raw`Let $f(x) = x^3 + x$. What value of $c$ satisfies the conclusion of the Mean Value Theorem for $f$ on the interval $[0, 3]$?`,
    choices: [String.raw`$\sqrt{3}$`, String.raw`$\frac{3}{2}$`, String.raw`$\frac{\sqrt{30}}{3}$`, String.raw`$\sqrt{\frac{29}{3}}$`],
    why: [
      String.raw`The average rate of change is $\dfrac{f(3) - f(0)}{3 - 0} = \dfrac{30 - 0}{3} = 10$. Setting $f'(c) = 3c^2 + 1 = 10$ gives $c^2 = 3$, so $c = \sqrt{3}$, which is in $(0, 3)$.`,
      String.raw`$\dfrac{3}{2}$ is the midpoint of the interval. The Mean Value Theorem gives a point where $f'(c)$ equals the average rate of change, and $f'\left(\dfrac{3}{2}\right) = \dfrac{31}{4}$, not $10$.`,
      String.raw`This sets $3c^2 = 10$, leaving out the $+1$ in $f'(c) = 3c^2 + 1$.`,
      String.raw`This sets $3c^2 + 1 = 30$, using the change $f(3) - f(0)$ without dividing by the length of the interval. That value of $c$ is not even in $(0, 3)$.`,
    ], answer: 0 },
  { id: "q501-m02", type: "mcq", skill: "u5", topic: "5.1", calc: false,
    question: String.raw`Let $f(x) = \dfrac{x + 1}{x - 2}$. On which of the following intervals are the hypotheses of the Mean Value Theorem satisfied?`,
    choices: [String.raw`$[3, 6]$`, String.raw`$[0, 4]$`, String.raw`$[-1, 2]$`, String.raw`$[1, 3]$`],
    why: [
      String.raw`$f$ is a rational function defined everywhere except $x = 2$, so it is continuous on $[3, 6]$ and differentiable on $(3, 6)$.`,
      String.raw`$x = 2$ is in $[0, 4]$, and $f$ is not defined there, so $f$ is not continuous on $[0, 4]$.`,
      String.raw`$f(2)$ is not defined, so $f$ is not continuous on $[-1, 2]$. Continuity is required at the endpoints too.`,
      String.raw`$x = 2$ is in $[1, 3]$, and $f$ has a vertical asymptote there, so $f$ is not continuous on $[1, 3]$.`,
    ], answer: 0 },
  { id: "q501-m03", type: "mcq", skill: "u5", topic: "5.1", calc: false, set: "q501-s1",
    question: String.raw`Which of the following must be true?`,
    choices: [
      String.raw`$f'(c) = -3$ for some $c$ in $(2, 5)$.`,
      String.raw`$f'(c) = 3$ for some $c$ in $(2, 5)$.`,
      String.raw`$f'(c) = -9$ for some $c$ in $(2, 5)$.`,
      String.raw`$f'(c) = 0$ for some $c$ in $(0, 2)$.`,
    ],
    why: [
      String.raw`$f$ is differentiable, so it is continuous on $[2, 5]$ and differentiable on $(2, 5)$. By the Mean Value Theorem, some $c$ in $(2, 5)$ has $f'(c) = \dfrac{f(5) - f(2)}{5 - 2} = \dfrac{1 - 10}{3} = -3$.`,
      String.raw`This reverses the order of subtraction. $f$ decreases from $10$ to $1$, so the average rate of change on $[2, 5]$ is negative.`,
      String.raw`$-9$ is the change $f(5) - f(2)$. The Mean Value Theorem uses the change divided by the length of the interval, $3$.`,
      String.raw`$f(0) = 4$ and $f(2) = 10$ are not equal, so nothing forces $f'(c) = 0$ on $(0, 2)$. The theorem gives $f'(c) = 3$ there.`,
    ], answer: 0 },
  { id: "q501-m04", type: "mcq", skill: "u5", topic: "5.1", calc: false,
    stem: String.raw`A car travels along a straight highway. Its position $p(t)$, in miles, at time $t$ hours is a differentiable function with $p(0) = 12$ and $p(3) = 207$.`,
    question: String.raw`According to the Mean Value Theorem, at some time $t$ with $0 < t < 3$, the velocity of the car must equal which of the following, in miles per hour?`,
    choices: ["$65$", "$69$", "$97.5$", "$195$"],
    why: [
      String.raw`$p$ is differentiable, so the Mean Value Theorem applies on $[0, 3]$: $p'(t) = \dfrac{207 - 12}{3 - 0} = \dfrac{195}{3} = 65$ for some $t$ in $(0, 3)$.`,
      String.raw`$\dfrac{207}{3} = 69$ leaves out the starting position $p(0) = 12$.`,
      String.raw`$\dfrac{195}{2}$ divides the change in position by $2$ instead of by the elapsed time, $3$ hours.`,
      String.raw`$195$ miles is the change in position. The velocity is that change divided by $3$ hours.`,
    ], answer: 0 },
  { id: "q501-m05", type: "mcq", skill: "u5", topic: "5.1", calc: false,
    stem: String.raw`Let $f(x) = x(x - 4)^2$. Then $f(0) = f(4) = 0$.`,
    question: String.raw`What value of $c$ in the open interval $(0, 4)$ satisfies $f'(c) = 0$, as guaranteed by Rolle's Theorem?`,
    choices: [String.raw`$\frac{4}{3}$`, "$4$", "$2$", String.raw`$\frac{8}{3}$`],
    why: [
      String.raw`$f(x) = x^3 - 8x^2 + 16x$, so $f'(x) = 3x^2 - 16x + 16 = (3x - 4)(x - 4)$. $f'(x) = 0$ at $x = \dfrac{4}{3}$ and $x = 4$, and only $\dfrac{4}{3}$ is in the open interval $(0, 4)$.`,
      String.raw`$f'(4) = 0$, but $4$ is an endpoint. Rolle's Theorem gives a value strictly inside the interval.`,
      String.raw`$2$ is the midpoint, and $f'(2) = 12 - 32 + 16 = -4 \ne 0$.`,
      String.raw`$x = \dfrac{8}{3}$ solves $f''(x) = 6x - 16 = 0$. The theorem is about $f'$, not $f''$.`,
    ], answer: 0 },
  { id: "q501-m06", type: "mcq", skill: "u5", topic: "5.1", calc: true,
    question: String.raw`Let $f(x) = \sin x$. What value of $c$ satisfies the conclusion of the Mean Value Theorem for $f$ on the interval $[1, 3]$?`,
    choices: ["$1.929$", "$2.000$", "$2.347$", "$1.057$"],
    why: [
      String.raw`The average rate of change is $\dfrac{\sin 3 - \sin 1}{3 - 1} \approx -0.35018$. Setting $f'(c) = \cos c = -0.35018$ with $1 < c < 3$ gives $c \approx 1.929$.`,
      String.raw`$2$ is the midpoint of $[1, 3]$. $f'(2) = \cos 2 \approx -0.416$, which is not the average rate of change.`,
      String.raw`This sets $\cos c = \sin 3 - \sin 1 \approx -0.700$, the change in $f$, without dividing by the length of the interval, $2$.`,
      String.raw`This sets $\cos c$ equal to $\dfrac{\sin 1 + \sin 3}{2}$, the average of the function values, not the slope of the secant line.`,
    ], answer: 0 },
  { id: "q501-f1a", type: "frq", skill: "u5", topic: "5.1", calc: false, set: "q501-s9", part: "(a)",
    prompt: String.raw`Must there be a time $t$ with $0 < t < 9$ at which $W'(t) = 3$? Justify your answer.`,
    rows: [
      { name: "Average rate of change", earns: String.raw`$\dfrac{W(9) - W(0)}{9 - 0} = \dfrac{47 - 20}{9} = 3$.` },
      { name: "Conclusion with Mean Value Theorem", earns: String.raw`Yes. $W$ is differentiable, so it is continuous on $[0, 9]$ and differentiable on $(0, 9)$; by the Mean Value Theorem, $W'(t) = 3$ for some $t$ in $(0, 9)$.` },
    ],
    solution: String.raw`$W$ is differentiable, so $W$ is continuous on $[0, 9]$ and differentiable on $(0, 9)$. The average rate of change is $\dfrac{W(9) - W(0)}{9 - 0} = \dfrac{47 - 20}{9} = 3$. By the Mean Value Theorem, there is a time $t$ with $0 < t < 9$ at which $W'(t) = 3$ degrees Celsius per minute.` },
  { id: "q501-f1b", type: "frq", skill: "u5", topic: "5.1", calc: false, set: "q501-s9", part: "(b)",
    prompt: String.raw`Must there be a time $t$ with $4 < t < 15$ at which $W'(t) = 0$? Justify your answer.`,
    rows: [
      { name: "Average rate of change", earns: String.raw`$\dfrac{W(15) - W(4)}{15 - 4} = \dfrac{41 - 41}{11} = 0$.` },
      { name: "Conclusion with Mean Value Theorem", earns: String.raw`Yes. $W$ is continuous on $[4, 15]$ and differentiable on $(4, 15)$; by the Mean Value Theorem (or Rolle's Theorem), $W'(t) = 0$ for some $t$ in $(4, 15)$.` },
    ],
    solution: String.raw`$W$ is continuous on $[4, 15]$ and differentiable on $(4, 15)$ because $W$ is differentiable. Since $W(4) = W(15) = 41$, the average rate of change on $[4, 15]$ is $\dfrac{41 - 41}{15 - 4} = 0$. By the Mean Value Theorem, there is a time $t$ with $4 < t < 15$ at which $W'(t) = 0$.` },
];

export default { forms: [{ id: "q501", name: "Topic 5.1 Quiz: The Mean Value Theorem", group: "Unit 5: Analytical Applications of Differentiation", items }] };

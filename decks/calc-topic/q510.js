export const sets = {
  "q510-s9": {
    name: "Fuel efficiency", label: "Free response",
    intro: String.raw`The fuel efficiency of a car, in miles per gallon, when it travels at a constant speed of $v$ miles per hour is modeled by $E(v) = -0.01v^2 + 1.2v + 2$ for $20 \le v \le 80$.`,
    sources: [{ title: "", blocks: [{ p: String.raw`$$E(v) = -0.01v^2 + 1.2v + 2, \quad 20 \le v \le 80$$` }] }],
  },
};

const items = [
  { id: "q510-m01", type: "mcq", skill: "u5", topic: "5.10", calc: false,
    question: String.raw`For $-2 \le x \le 1$, the graph of $y = 4 - x^2$ lies on or above the graph of $y = x + 2$. What is the greatest vertical distance between the two graphs on this interval?`,
    choices: [String.raw`$\frac{9}{4}$`, String.raw`$-\frac{1}{2}$`, "$2$", "$4$"],
    why: [
      String.raw`The vertical distance is $D(x) = (4 - x^2) - (x + 2) = 2 - x - x^2$. $D'(x) = -1 - 2x = 0$ at $x = -\dfrac{1}{2}$. The candidates are $D(-2) = 0$, $D(1) = 0$, and $D\left(-\dfrac{1}{2}\right) = 2 + \dfrac{1}{2} - \dfrac{1}{4} = \dfrac{9}{4}$.`,
      String.raw`$x = -\dfrac{1}{2}$ is where the greatest distance occurs, not the distance.`,
      String.raw`$D(0) = 2$ is the distance at $x = 0$, where the parabola has its vertex. The distance is greater at $x = -\dfrac{1}{2}$.`,
      String.raw`$4$ is the greatest value of $4 - x^2$ alone, not of the difference between the two graphs.`,
    ], answer: 0 },
  { id: "q510-m02", type: "mcq", skill: "u5", topic: "5.10", calc: false,
    stem: String.raw`A company's profit, in dollars, from making and selling $x$ units of a product is $P(x) = -0.02x^2 + 40x - 5000$.`,
    question: String.raw`How many units should the company make and sell to maximize profit?`,
    choices: ["$1000$", "$2000$", "$15000$", "$40$"],
    why: [
      String.raw`$P'(x) = -0.04x + 40 = 0$ at $x = 1000$. $P''(x) = -0.04 < 0$, so this is the maximum.`,
      String.raw`This solves $-0.02x + 40 = 0$, leaving out the factor $2$ from the derivative of $x^2$.`,
      String.raw`$P(1000) = 15000$ is the maximum profit in dollars, not the number of units.`,
      String.raw`$40 = P'(0)$ is the rate at which profit changes when no units are made. The maximum occurs where $P'(x) = 0$.`,
    ], answer: 0 },
  { id: "q510-m03", type: "mcq", skill: "u5", topic: "5.10", calc: false,
    stem: String.raw`A ball is thrown upward. Its height, in feet, $t$ seconds after it is thrown is $h(t) = -16t^2 + 64t + 6$.`,
    question: String.raw`What is the greatest height the ball reaches, in feet?`,
    choices: ["$70$", "$2$", "$6$", "$64$"],
    why: [
      String.raw`$h'(t) = -32t + 64 = 0$ at $t = 2$, and $h''(t) = -32 < 0$, so the maximum height is $h(2) = -64 + 128 + 6 = 70$ feet.`,
      String.raw`$t = 2$ seconds is when the greatest height occurs, not the height itself.`,
      String.raw`This uses $h'(t) = -16t + 64$, which gives $t = 4$ and $h(4) = 6$. The derivative of $-16t^2$ is $-32t$.`,
      String.raw`$64$ feet per second is the initial velocity $h'(0)$, not a height.`,
    ], answer: 0 },
  { id: "q510-m04", type: "mcq", skill: "u5", topic: "5.10", calc: false,
    question: String.raw`What is the least distance from the origin to a point on the graph of $y = \dfrac{4}{x}$ with $x > 0$?`,
    choices: [String.raw`$2\sqrt{2}$`, "$8$", "$2$", String.raw`$\sqrt{17}$`],
    why: [
      String.raw`The square of the distance is $D(x) = x^2 + \dfrac{16}{x^2}$. $D'(x) = 2x - \dfrac{32}{x^3} = 0$ when $x^4 = 16$, so $x = 2$, and $D'$ changes from negative to positive there. $D(2) = 4 + 4 = 8$, so the least distance is $\sqrt{8} = 2\sqrt{2}$.`,
      String.raw`$8$ is the square of the distance. The distance is its square root.`,
      String.raw`$2$ is the $x$-coordinate of the closest point $(2, 2)$, not the distance.`,
      String.raw`$\sqrt{17}$ is the distance to $(1, 4)$, which is not the closest point.`,
    ], answer: 0 },
  { id: "q510-m05", type: "mcq", skill: "u5", topic: "5.10", calc: false,
    question: String.raw`At what value of $x$ is the slope of the graph of $f(x) = -x^3 + 6x^2 + 1$ greatest?`,
    choices: ["$2$", "$4$", "$0$", "$12$"],
    why: [
      String.raw`The slope is $f'(x) = -3x^2 + 12x$. Its derivative $f''(x) = -6x + 12$ is $0$ at $x = 2$ and changes from positive to negative there, so the slope is greatest at $x = 2$.`,
      String.raw`$f'(4) = 0$, so $f$ itself has a relative maximum at $x = 4$. The slope there is $0$, not its greatest value.`,
      String.raw`$f'(0) = 0$, so $f$ has a relative minimum at $x = 0$.`,
      String.raw`$12 = f'(2)$ is the greatest slope, not the value of $x$ where it occurs.`,
    ], answer: 0 },
  { id: "q510-m06", type: "mcq", skill: "u5", topic: "5.10", calc: true,
    stem: String.raw`A rectangle has one vertex at the origin, one vertex on the positive $x$-axis, one vertex on the positive $y$-axis, and the fourth vertex on the graph of $y = \cos x$, with $0 < x < \dfrac{\pi}{2}$.`,
    question: String.raw`What is the greatest possible area of the rectangle?`,
    choices: ["$0.561$", "$0.860$", "$0.555$", "$0.652$"],
    why: [
      String.raw`The area is $A(x) = x\cos x$. Solving $A'(x) = \cos x - x\sin x = 0$ with a calculator gives $x \approx 0.86033$, where $A'$ changes from positive to negative. The maximum area is $A(0.86033) \approx 0.561$.`,
      String.raw`$0.860$ is the width $x$ that gives the greatest area, not the area.`,
      String.raw`$0.555$ is the area when $x = \dfrac{\pi}{4}$, the midpoint of the interval. That is not where $A'(x) = 0$.`,
      String.raw`$0.652$ is the height $\cos(0.86033)$ of the best rectangle, not its area.`,
    ], answer: 0 },
  { id: "q510-f1a", type: "frq", skill: "u5", topic: "5.10", calc: false, set: "q510-s9", part: "(a)",
    prompt: String.raw`Find $E'(v)$. Find the speed $v$ in the interval $20 < v < 80$ at which $E'(v) = 0$.`,
    rows: [
      { name: "Derivative and critical point", earns: String.raw`$E'(v) = -0.02v + 1.2$; $E'(v) = 0$ at $v = 60$.` },
    ],
    solution: String.raw`$E'(v) = -0.02v + 1.2$. Setting $-0.02v + 1.2 = 0$ gives $v = \dfrac{1.2}{0.02} = 60$ miles per hour.` },
  { id: "q510-f1b", type: "frq", skill: "u5", topic: "5.10", calc: false, set: "q510-s9", part: "(b)",
    prompt: String.raw`Find the greatest fuel efficiency of the car for $20 \le v \le 80$. Justify your answer.`,
    rows: [
      { name: "Candidates", earns: String.raw`$E(20) = 22$, $E(60) = 38$, $E(80) = 34$.` },
      { name: "Answer with units", earns: String.raw`The greatest fuel efficiency is $38$ miles per gallon, at $60$ miles per hour.` },
    ],
    solution: String.raw`$E$ is continuous on $[20, 80]$, and its only critical point is $v = 60$. Checking the candidates: $E(20) = -4 + 24 + 2 = 22$, $E(60) = -36 + 72 + 2 = 38$, and $E(80) = -64 + 96 + 2 = 34$. The greatest value is $38$, so the greatest fuel efficiency is $38$ miles per gallon, at a speed of $60$ miles per hour.` },
];

export default { forms: [{ id: "q510", name: "Topic 5.10 Quiz: Introduction to Optimization", group: "Unit 5: Analytical Applications of Differentiation", items }] };

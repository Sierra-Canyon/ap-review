// AP Precalculus topic quiz 1.13: Function Model Selection and Assumption Articulation.

export const sets = {
  "p113-s1": {
    name: "Air temperature and altitude",
    label: "Table",
    intro: String.raw`A weather balloon records the air temperature $T$, in degrees Celsius, at an altitude of $h$ kilometers above the ground. The table below gives the recorded values.`,
    sources: [{ title: "", blocks: [{ table: { head: ["Altitude $h$ (km)", "$0$", "$1$", "$2$", "$3$", "$4$"], rows: [["Temperature $T$ ($^\\circ$C)", "$15$", "$8.5$", "$2$", "$-4.5$", "$-11$"]] } }] }],
  },
  "p113-s2": {
    name: "Workers painting a building",
    label: "Table",
    intro: String.raw`A painting company estimates the time $h$, in hours, that it takes $n$ workers, all working at the same rate, to paint a building. The table below gives the estimates.`,
    sources: [{ title: "", blocks: [{ table: { head: ["Workers $n$", "$2$", "$3$", "$4$", "$5$", "$6$", "$8$"], rows: [["Time $h$ (hours)", "$30$", "$20$", "$15$", "$12$", "$10$", "$7.5$"]] } }] }],
  },
  "p113-s3": {
    name: "Price and revenue",
    label: "Free response",
    intro: String.raw`A coffee shop tests different prices for a bag of coffee beans. The table below gives the shop's daily revenue $R$, in dollars, from the beans when the price is $p$ dollars per bag.`,
    sources: [{ title: "", blocks: [
      { table: { head: ["Price $p$ (dollars)", "$2.00$", "$2.50$", "$3.00$", "$3.50$", "$4.00$", "$4.50$"], rows: [["Revenue $R$ (dollars)", "$280.00$", "$312.50$", "$330.00$", "$332.50$", "$320.00$", "$292.50$"]] } },
      { p: String.raw`A graphing calculator is allowed. Show the work that leads to each answer.` },
    ] }],
  },
};

export default {
  forms: [{
    id: "p113",
    name: "Topic 1.13 Quiz: Function Model Selection",
    group: "Unit 1: Polynomial and Rational Functions",
    items: [
      { id: "p113-m01", type: "mcq", skill: "u1", topic: "1.13", calc: false, set: "p113-s1", difficulty: "easy",
        question: String.raw`Which type of function best models $T$ as a function of $h$, and why?`,
        choices: [String.raw`Linear, because the first differences are all $-6.5$`, String.raw`Linear, because the temperatures decrease as $h$ increases`, String.raw`Quadratic, because the temperatures change from positive to negative`, String.raw`Quadratic, because the first differences are all $-6.5$`],
        why: [
          String.raw`Over equal steps of $1$ kilometer, the temperature changes by $8.5 - 15 = -6.5$, then $-6.5$, $-6.5$, and $-6.5$. Constant first differences over equal-length input intervals mean a linear model.`,
          String.raw`A decreasing pattern alone does not make a model linear; a quadratic can also decrease. The reason is that the first differences are constant.`,
          String.raw`A change in sign does not point to a quadratic. A linear function can also change from positive to negative.`,
          String.raw`Constant first differences indicate a linear function. A quadratic function has constant second differences and first differences that change.`,
        ], answer: 0 },
      { id: "p113-m02", type: "mcq", skill: "u1", topic: "1.13", calc: false, difficulty: "easy",
        stem: String.raw`A rectangular poster has a perimeter of $60$ inches. One side of the poster has length $w$ inches.`,
        question: String.raw`Which function gives the area $A(w)$ of the poster, in square inches?`,
        choices: [String.raw`$A(w) = w(30 - w)$`, String.raw`$A(w) = w(60 - w)$`, String.raw`$A(w) = w(60 - 2w)$`, String.raw`$A(w) = 2w + 2(30 - w)$`],
        why: [
          String.raw`The perimeter is $2w + 2L = 60$, so the other side has length $L = 30 - w$, and the area is $A(w) = w(30 - w)$.`,
          String.raw`$60 - w$ treats $60$ as the sum of one length and one width. The sum of one length and one width is half the perimeter, $30$.`,
          String.raw`$60 - 2w$ subtracts the two sides of length $w$ but does not divide the remaining $60 - 2w$ inches between the other two sides.`,
          String.raw`$2w + 2(30 - w)$ is the perimeter, which always equals $60$. The area is the product of the two side lengths.`,
        ], answer: 0 },
      { id: "p113-m03", type: "mcq", skill: "u1", topic: "1.13", calc: false, difficulty: "moderate",
        stem: String.raw`A rectangular poster has a perimeter of $60$ inches. One side of the poster has length $w$ inches, and its area, in square inches, is $A(w) = w(30 - w)$.`,
        question: String.raw`Which of the following is the most appropriate domain for $A$ in this context?`,
        choices: [String.raw`$0 < w < 30$`, String.raw`$0 < w < 60$`, String.raw`$0 \le w \le 30$`, String.raw`$w > 0$`],
        why: [
          String.raw`Both sides must have positive length: $w > 0$ and $30 - w > 0$, so $0 < w < 30$.`,
          String.raw`For $30 < w < 60$ the other side, $30 - w$, is negative, and the model gives a negative area.`,
          String.raw`At $w = 0$ or $w = 30$ one side has length $0$, so there is no poster. The endpoints are not in the domain.`,
          String.raw`For $w \ge 30$ the other side would have length $30 - w \le 0$, which is not possible for a poster.`,
        ], answer: 0 },
      { id: "p113-m04", type: "mcq", skill: "u1", topic: "1.13", calc: false, set: "p113-s2", difficulty: "moderate",
        question: String.raw`Which function is the most appropriate model for $h$ in terms of $n$?`,
        choices: [String.raw`$h(n) = \frac{60}{n}$`, String.raw`$h(n) = 45 - 7.5n$`, String.raw`$h(n) = \frac{n}{60}$`, String.raw`$h(n) = 50 - 10n$`],
        why: [
          String.raw`For every column, $n \cdot h = 60$: $2(30) = 3(20) = 4(15) = 5(12) = 6(10) = 8(7.5) = 60$. The time is inversely proportional to the number of workers, so $h(n) = \dfrac{60}{n}$, a rational model.`,
          String.raw`This line passes through $(2, 30)$ and $(4, 15)$, but it gives $h(8) = -15$, not $7.5$. The time does not drop by the same amount for each added worker.`,
          String.raw`$\dfrac{n}{60}$ increases as $n$ increases. More workers take less time, and $\frac{2}{60}$ is not $30$.`,
          String.raw`This line passes through $(2, 30)$ and $(3, 20)$, but it gives $h(5) = 0$, not $12$.`,
        ], answer: 0 },
      { id: "p113-m05", type: "mcq", skill: "u1", topic: "1.13", calc: true, difficulty: "difficult",
        stem: String.raw`An open box is made from a $20$-inch by $14$-inch sheet of cardboard by cutting a square with side length $x$ inches from each corner and folding up the sides. The volume of the box, in cubic inches, is $V(x) = x(20 - 2x)(14 - 2x)$.`,
        question: String.raw`What is the greatest possible volume of the box, in cubic inches?`,
        choices: ["$339.013$", "$678.025$", "$336.000$", "$2.704$"],
        why: [
          String.raw`The sides must have positive length, so $0 < x < 7$. On a graphing calculator, the maximum of $V$ on this interval is at $x \approx 2.704$, where $V \approx 339.013$ cubic inches.`,
          String.raw`$678.025$ is the maximum of $x(20 - x)(14 - x)$, which cuts only $x$ from each dimension. A square is cut from both ends of each side, so each dimension loses $2x$.`,
          String.raw`$336.000 = V(3)$ checks only whole-number cuts. The maximum is at $x \approx 2.704$, where $V$ is a little greater.`,
          String.raw`$2.704$ is the side length of the cut that gives the greatest volume, not the volume.`,
        ], answer: 0 },
      { id: "p113-m06", type: "mcq", skill: "u1", topic: "1.13", calc: false, difficulty: "moderate",
        stem: String.raw`The average number of riders per day on a new bus line, $t$ weeks after the line opens, is modeled by $R(t) = \dfrac{400t}{t + 5}$.`,
        question: String.raw`Which of the following is a prediction of this model for large values of $t$?`,
        choices: ["Ridership levels off near 400 riders per day.", "Ridership grows without bound.", "Ridership levels off near 80 riders per day.", "Ridership decreases toward 0 riders per day."],
        why: [
          String.raw`The numerator and denominator have the same degree, so $\displaystyle \lim_{t \to \infty} \frac{400t}{t + 5} = \frac{400}{1} = 400$. The model assumes ridership grows more and more slowly and levels off near $400$ riders per day.`,
          String.raw`$R(t) = 400 - \dfrac{2000}{t + 5}$ is always less than $400$, so the model does not grow without bound.`,
          String.raw`$80 = \frac{400}{5}$ divides by the constant in the denominator. The horizontal asymptote comes from the ratio of the leading coefficients, $\frac{400}{1}$.`,
          String.raw`$R$ is increasing for $t \ge 0$ and approaches $400$, not $0$. A limit of $0$ would need the denominator to have a greater degree.`,
        ], answer: 0 },
      { id: "p113-f1a", type: "frq", skill: "u1", topic: "1.13", calc: true, set: "p113-s3", part: "(a)",
        prompt: String.raw`(i) Which type of function, linear, quadratic, or cubic, best models $R$ as a function of $p$? (ii) Give a reason for your answer based on the values in the table.`,
        rows: [
          { name: "Model", earns: String.raw`Quadratic.` },
          { name: "Reason", earns: String.raw`Over equal-length input intervals of $0.50$ dollar, the first differences $32.5, 17.5, 2.5, -12.5, -27.5$ are not constant and the second differences are all $-15$.` },
        ],
        solution: String.raw`(i) A quadratic model. (ii) The prices are equally spaced by $0.50$. The first differences of $R$ are $32.5$, $17.5$, $2.5$, $-12.5$, and $-27.5$, which are not constant, so $R$ is not linear. The second differences are $-15$, $-15$, $-15$, and $-15$, which are constant, so $R$ is best modeled by a quadratic function.` },
      { id: "p113-f1b", type: "frq", skill: "u1", topic: "1.13", calc: true, set: "p113-s3", part: "(b)",
        prompt: String.raw`Use a quadratic regression to write an expression for $R(p)$. According to the model, what price gives the greatest daily revenue?`,
        rows: [
          { name: "Model and price", earns: String.raw`$R(p) = -30p^{2} + 200p$, and the greatest revenue is at $p \approx 3.333$, about \$3.33 per bag.` },
        ],
        solution: String.raw`A quadratic regression on the six points gives $R(p) = -30p^{2} + 200p + 0$, which fits every value exactly; for example, $R(3) = -270 + 600 = 330$. The parabola opens down, so the greatest revenue is at the vertex, $p = \dfrac{-200}{2(-30)} = \dfrac{10}{3} \approx 3.333$ dollars per bag.` },
      { id: "p113-f1c", type: "frq", skill: "u1", topic: "1.13", calc: true, set: "p113-s3", part: "(c)",
        prompt: String.raw`Give a restriction on the domain of the model in part (b) that is appropriate in this context. Give a reason for your answer.`,
        rows: [
          { name: "Domain with reason", earns: String.raw`$0 < p \le 6.667$ (or a similar interval), because the price must be positive and the model gives a negative revenue for $p > \frac{20}{3} \approx 6.667$.` },
        ],
        solution: String.raw`The price must be positive, and revenue cannot be negative. $R(p) = -30p^{2} + 200p = -10p(3p - 20)$ is $0$ at $p = 0$ and at $p = \frac{20}{3} \approx 6.667$, and negative for $p > 6.667$. An appropriate domain is $0 < p \le 6.667$. Since the data cover only prices from \$2.00 to \$4.50, the model is most reliable on $2 \le p \le 4.5$, which is also an acceptable answer with that reason.` },
    ],
  }],
};

// AP Precalculus topic quiz 1.14: Function Model Construction and Application.

export const sets = {
  "p114-s1": {
    name: "Hours studied and test scores",
    label: "Table",
    intro: String.raw`Six students reported the number of hours $h$ they studied for a test and their scores $S$ on the test. The data are given in the table below.`,
    sources: [{ title: "", blocks: [{ table: { head: ["Hours studied $h$", "$1$", "$2$", "$3$", "$4$", "$5$", "$6$"], rows: [["Score $S$", "$62$", "$66$", "$71$", "$73$", "$79$", "$83$"]] } }] }],
  },
  "p114-s2": {
    name: "Skaters at an ice rink",
    label: "Free response",
    intro: String.raw`A seasonal ice rink opens at time $t = 0$. The number of skaters at the rink each week, in hundreds, $t$ weeks after it opens is modeled by $$A(t) = at^{2} + bt + 2,$$ where $a$ and $b$ are constants. According to the model, there are $34$ hundred skaters in week $t = 2$ and $52$ hundred skaters in week $t = 5$.`,
    sources: [{ title: "", blocks: [{ p: String.raw`A graphing calculator is allowed. Show the work that leads to each answer.` }] }],
  },
};

export default {
  forms: [{
    id: "p114",
    name: "Topic 1.14 Quiz: Function Model Construction",
    group: "Unit 1: Polynomial and Rational Functions",
    items: [
      { id: "p114-m01", type: "mcq", skill: "u1", topic: "1.14", calc: false, difficulty: "easy",
        stem: String.raw`A farmer has $120$ meters of fence to enclose a rectangular pen along a straight river. No fence is needed along the river. The two sides of the pen perpendicular to the river each have length $x$ meters.`,
        question: String.raw`Which function gives the area $A(x)$ of the pen, in square meters?`,
        choices: [String.raw`$A(x) = x(120 - 2x)$`, String.raw`$A(x) = x(120 - x)$`, String.raw`$A(x) = x(60 - x)$`, String.raw`$A(x) = x + (120 - 2x)$`],
        why: [
          String.raw`The two sides of length $x$ use $2x$ meters of fence, so the side parallel to the river has length $120 - 2x$. The area is $A(x) = x(120 - 2x)$.`,
          String.raw`$120 - x$ subtracts only one of the two sides of length $x$.`,
          String.raw`$60 - x$ fences all four sides: $2x + 2L = 120$. The side along the river needs no fence.`,
          String.raw`$x + (120 - 2x)$ adds two side lengths. The area is their product.`,
        ], answer: 0 },
      { id: "p114-m02", type: "mcq", skill: "u1", topic: "1.14", calc: true, set: "p114-s1", difficulty: "moderate",
        question: String.raw`A linear regression is used to model the score $S$ as a function of the hours studied $h$. According to the model, what score would a student who studies for $7$ hours earn?`,
        choices: ["$86.933$", "$87.068$", "$87.600$", "$87.200$"],
        why: [
          String.raw`Linear regression with $h$ as the input gives $S \approx 4.171429h + 57.733333$, so the predicted score at $h = 7$ is about $86.933$. Use the stored regression equation, not rounded coefficients.`,
          String.raw`$87.068$ comes from swapping the variables: it fits $h$ as a linear function of $S$ and then solves for $S$ when $h = 7$. The score is the output, so $h$ goes in the first list.`,
          String.raw`$87.600$ is the prediction of a quadratic regression. The question calls for a linear model.`,
          String.raw`$87.200$ uses the line through the first and last data points, with slope $\frac{83 - 62}{6 - 1} = 4.2$. A regression line uses all six points.`,
        ], answer: 0 },
      { id: "p114-m03", type: "mcq", skill: "u1", topic: "1.14", calc: false, difficulty: "moderate",
        stem: String.raw`A cyclist rides at a constant speed of $12$ miles per hour for the first $1.5$ hours of a ride and then at a constant speed of $9$ miles per hour for the rest of the ride. Let $D(t)$ be the distance, in miles, that the cyclist has ridden $t$ hours after the start.`,
        question: String.raw`Which of the following gives $D(t)$ for $t > 1.5$?`,
        choices: [String.raw`$D(t) = 18 + 9(t - 1.5)$`, String.raw`$D(t) = 18 + 9t$`, String.raw`$D(t) = 12t + 9(t - 1.5)$`, String.raw`$D(t) = 9(t - 1.5)$`],
        why: [
          String.raw`In the first $1.5$ hours the cyclist rides $12(1.5) = 18$ miles. After that, the time at $9$ miles per hour is $t - 1.5$ hours, so $D(t) = 18 + 9(t - 1.5)$. At $t = 1.5$ both pieces give $18$ miles.`,
          String.raw`$9t$ counts the slower speed from the start of the ride. The second piece starts at $t = 1.5$, so its time is $t - 1.5$.`,
          String.raw`$12t$ keeps the faster speed for the whole ride. The cyclist rides at $12$ miles per hour only for the first $1.5$ hours.`,
          String.raw`This leaves out the $18$ miles ridden in the first $1.5$ hours.`,
        ], answer: 0 },
      { id: "p114-m04", type: "mcq", skill: "u1", topic: "1.14", calc: false, difficulty: "easy",
        stem: String.raw`A group of $n$ hikers shares a $2.4$-liter jug of water equally. Each hiker also carries a $0.5$-liter bottle of water.`,
        question: String.raw`Which function gives the amount of water $W(n)$, in liters, that each hiker has?`,
        choices: [String.raw`$W(n) = \frac{2.4}{n} + 0.5$`, String.raw`$W(n) = \frac{2.4 + 0.5}{n}$`, String.raw`$W(n) = \frac{2.4}{n + 0.5}$`, String.raw`$W(n) = 2.4n + 0.5$`],
        why: [
          String.raw`Each hiker gets $\dfrac{2.4}{n}$ liters from the shared jug plus $0.5$ liter from the bottle, so $W(n) = \dfrac{2.4}{n} + 0.5$.`,
          String.raw`This divides the bottle among the hikers too. Each hiker keeps a whole $0.5$-liter bottle.`,
          String.raw`This adds $0.5$ to the number of hikers. The $0.5$ liter is added to each share, not to $n$.`,
          String.raw`$2.4n$ multiplies the jug by the number of hikers. Sharing the jug equally divides it by $n$.`,
        ], answer: 0 },
      { id: "p114-m05", type: "mcq", skill: "u1", topic: "1.14", calc: true, difficulty: "difficult",
        stem: String.raw`A ball is thrown upward from a height of $1.5$ meters. Its height, in meters, $t$ seconds after it is thrown is modeled by $h(t) = -4.9t^{2} + vt + 1.5$, where $v$ is a constant. One second after it is thrown, the ball is $12.3$ meters high.`,
        question: String.raw`According to the model, how many seconds after it is thrown does the ball hit the ground?`,
        choices: ["$3.297$", "$1.602$", "$3.595$", "$3.204$"],
        why: [
          String.raw`$h(1) = -4.9 + v + 1.5 = 12.3$, so $v = 15.7$. Solve $-4.9t^{2} + 15.7t + 1.5 = 0$ by graphing or with the quadratic formula: $t \approx -0.093$ or $t \approx 3.297$. Time after the throw is positive, so the ball lands at $t \approx 3.297$ seconds.`,
          String.raw`$1.602 = \frac{15.7}{9.8}$ is the time of the vertex, when the ball is highest, not when it lands.`,
          String.raw`$3.595$ comes from $v = 17.2$, which solves $-4.9 + v = 12.3$ and leaves out the starting height $1.5$.`,
          String.raw`$3.204$ solves $-4.9t^{2} + 15.7t = 0$, which drops the starting height $1.5$ when finding the landing time.`,
        ], answer: 0 },
      { id: "p114-m06", type: "mcq", skill: "u1", topic: "1.14", calc: true, difficulty: "easy",
        stem: String.raw`A phone battery is at $85\%$ when a video starts. While the video streams, the battery charge drops by $6.4$ percentage points per hour.`,
        question: String.raw`Using a linear model, how many hours after the video starts will the battery be at $25\%$?`,
        choices: ["$9.375$", "$13.281$", "$3.906$", "$17.188$"],
        why: [
          String.raw`The charge is $B(t) = 85 - 6.4t$ percent after $t$ hours. Solve $85 - 6.4t = 25$: $6.4t = 60$, so $t = 9.375$ hours.`,
          String.raw`$13.281 = \frac{85}{6.4}$ is the time until the battery reaches $0\%$, not $25\%$.`,
          String.raw`$3.906 = \frac{25}{6.4}$ is the time for the charge to drop by $25$ percentage points, not to drop to $25\%$.`,
          String.raw`$17.188 = \frac{85 + 25}{6.4}$ adds the two percents. The charge must drop by $85 - 25 = 60$ percentage points.`,
        ], answer: 0 },
      { id: "p114-f1a", type: "frq", skill: "u1", topic: "1.14", calc: true, set: "p114-s2", part: "(a)",
        prompt: String.raw`(i) Use the given data to write two equations that can be used to find the values of $a$ and $b$. (ii) Find the values of $a$ and $b$.`,
        rows: [
          { name: "Equations", earns: String.raw`$4a + 2b + 2 = 34$ and $25a + 5b + 2 = 52$.` },
          { name: "Values", earns: String.raw`$a = -2$ and $b = 20$.` },
        ],
        solution: String.raw`(i) $A(2) = 34$ gives $4a + 2b + 2 = 34$, and $A(5) = 52$ gives $25a + 5b + 2 = 52$. (ii) The equations simplify to $2a + b = 16$ and $5a + b = 10$. Subtracting the first from the second gives $3a = -6$, so $a = -2$, and then $b = 16 - 2(-2) = 20$.` },
      { id: "p114-f1b", type: "frq", skill: "u1", topic: "1.14", calc: true, set: "p114-s2", part: "(b)",
        prompt: String.raw`Find the average rate of change of $A$ over the interval $2 \le t \le 5$. Show the computations that lead to your answer, and indicate units of measure.`,
        rows: [
          { name: "Average rate of change", earns: String.raw`$\dfrac{A(5) - A(2)}{5 - 2} = \dfrac{52 - 34}{3} = 6$ hundred skaters per week, per week.` },
        ],
        solution: String.raw`$$\frac{A(5) - A(2)}{5 - 2} = \frac{52 - 34}{3} = 6$$ From week $2$ to week $5$, the number of skaters each week increased by an average of $6$ hundred skaters per week.` },
      { id: "p114-f1c", type: "frq", skill: "u1", topic: "1.14", calc: true, set: "p114-s2", part: "(c)",
        prompt: String.raw`The rink closes for the season when the model predicts $0$ skaters. Find the time $t$ when this happens, and use it to give an appropriate domain for the model.`,
        rows: [
          { name: "Closing time and domain", earns: String.raw`$t \approx 10.099$ weeks, so the domain is $0 \le t \le 10.099$.` },
        ],
        solution: String.raw`With $a = -2$ and $b = 20$, $A(t) = -2t^{2} + 20t + 2$. Solve $-2t^{2} + 20t + 2 = 0$: $t = \dfrac{-20 - \sqrt{400 + 16}}{-4} = \dfrac{20 + \sqrt{416}}{4} \approx 10.099$. The other solution, $t \approx -0.099$, is before the rink opens. The model applies from opening until the predicted count reaches $0$, so an appropriate domain is $0 \le t \le 10.099$.` },
    ],
  }],
};

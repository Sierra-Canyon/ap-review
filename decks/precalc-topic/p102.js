// AP Precalculus topic quiz, 1.2 Rates of Change.
import { graph } from "../../plot.js";

// f(x) = x^3/4 - 9x^2/4 + 5x + 1 on [0, 6]: f(0) = 1, f(1) = 4, f(4) = 1, f(6) = 4.
const fB = (x) => x ** 3 / 4 - (9 * x * x) / 4 + 5 * x + 1;

export const sets = {
  "p102-s1": {
    name: "A curve through four points",
    label: "Graph",
    intro: String.raw`The graph of the function $f$, defined on the closed interval $[0, 6]$, is shown below. The labeled points $(0, 1)$, $(1, 4)$, $(4, 1)$, and $(6, 4)$ are on the graph.`,
    sources: [{ title: "", blocks: [{ svg: graph({
      x: [-0.5, 6.5], y: [-1, 6], step: 1, xname: "x", yname: "y",
      fns: [{ f: fB, from: 0, to: 6, label: "f", labelAt: 2.6 }],
      dots: [[0, 1, "closed"], [1, 4, "closed"], [4, 1, "closed"], [6, 4, "closed"]],
      alt: "Graph of f on [0, 6]. The curve rises from (0, 1) through (1, 4) to a high point near (1.5, 4.3), falls through (4, 1) to a low point near (4.5, 0.7), then rises to (6, 4).",
    }) }] }],
  },
  "p102-s2": {
    name: "Downloads of an app",
    label: "Table",
    intro: String.raw`The total number of downloads of a new app, $D(t)$, in thousands, $t$ weeks after the app was released is given in the table below for selected values of $t$.`,
    sources: [{ title: "", blocks: [{ table: { head: [String.raw`$t$ (weeks)`, "$0$", "$3$", "$5$", "$9$", "$10$"], rows: [[String.raw`$D(t)$ (thousands)`, "$2.0$", "$7.4$", "$12.0$", "$17.6$", "$18.5$"]] } }] }],
  },
  "p102-s3": {
    name: "A medicine in the blood",
    label: "Free response",
    intro: String.raw`The concentration of a medicine in a patient's blood $t$ hours after a dose is modeled by $$C(t) = \frac{12t}{t^{2} + 4}$$ milligrams per liter, for $0 \le t \le 12$.`,
    sources: [{ title: "", blocks: [{ p: String.raw`A graphing calculator is allowed on this question. Give decimal answers correct to three places after the decimal point.` }] }],
  },
};

export default {
  forms: [{
    id: "p102",
    name: "Topic 1.2 Quiz: Rates of Change",
    group: "Unit 1: Polynomial and Rational Functions",
    items: [
      { id: "p102-m01", type: "mcq", skill: "u1", topic: "1.2", calc: false, difficulty: "easy",
        question: String.raw`Let $f(x) = 2x^{2} - x + 3$. What is the average rate of change of $f$ over the interval $[1, 4]$?`,
        choices: ["$9$", "$27$", String.raw`$\frac{1}{9}$`, String.raw`$\frac{27}{4}$`],
        why: [
          String.raw`$f(4) = 32 - 4 + 3 = 31$ and $f(1) = 2 - 1 + 3 = 4$, so $\dfrac{f(4) - f(1)}{4 - 1} = \dfrac{27}{3} = 9$.`,
          String.raw`$27$ is the change in $f$, $f(4) - f(1)$, without dividing by the length of the interval, $3$.`,
          String.raw`$\dfrac{1}{9}$ is $\dfrac{3}{27}$, the change in $x$ over the change in $f$, which is the reciprocal.`,
          String.raw`$\dfrac{27}{4}$ divides the change in $f$ by the right endpoint, $4$, instead of the length of the interval, $4 - 1 = 3$.`,
        ], answer: 0 },
      { id: "p102-m02", type: "mcq", skill: "u1", topic: "1.2", calc: false, difficulty: "easy", set: "p102-s1",
        question: String.raw`Over which interval is the average rate of change of $f$ greatest?`,
        choices: ["$[0, 1]$", "$[4, 6]$", "$[0, 6]$", "$[1, 4]$"],
        why: [
          String.raw`The average rates of change are $\dfrac{4 - 1}{1 - 0} = 3$ on $[0, 1]$, $\dfrac{4 - 1}{6 - 4} = \dfrac{3}{2}$ on $[4, 6]$, $\dfrac{4 - 1}{6 - 0} = \dfrac{1}{2}$ on $[0, 6]$, and $\dfrac{1 - 4}{4 - 1} = -1$ on $[1, 4]$. The greatest is $3$, on $[0, 1]$.`,
          String.raw`On $[4, 6]$, $f$ rises by $3$, the same change as on $[0, 1]$, but over an interval twice as long, so the rate is only $\dfrac{3}{2}$.`,
          String.raw`$[0, 6]$ is the longest interval, but the outputs change by only $3$ over $6$ units, a rate of $\dfrac{1}{2}$.`,
          String.raw`The outputs change by $3$ in size on $[1, 4]$, but the change is $1 - 4 = -3$, so the rate is $-1$, the least of the four.`,
        ], answer: 0 },
      { id: "p102-m03", type: "mcq", skill: "u1", topic: "1.2", calc: true, difficulty: "moderate",
        question: String.raw`Let $f(x) = 0.4x^{3} - x$. The average rate of change of $f$ over the interval $[2, 2.001]$ is used to estimate the rate of change of $f$ at $x = 2$. What is this estimate?`,
        choices: ["$3.802$", "$1.200$", "$0.004$", "$0.263$"],
        why: [
          String.raw`$\dfrac{f(2.001) - f(2)}{2.001 - 2} \approx \dfrac{1.2038 - 1.2}{0.001} \approx 3.802$. On a short interval the average rate of change is close to the rate of change at $x = 2$.`,
          String.raw`$1.200$ is $f(2)$, the value of the function at $x = 2$, not its rate of change there.`,
          String.raw`$0.004$ is the change in $f$, $f(2.001) - f(2) \approx 0.0038$, rounded, without dividing by the change in $x$, $0.001$.`,
          String.raw`$0.263$ is the reciprocal of the estimate, the change in $x$ over the change in $f$.`,
        ], answer: 0 },
      { id: "p102-m04", type: "mcq", skill: "u1", topic: "1.2", calc: false, difficulty: "easy",
        question: String.raw`A city's buses carried an average of $12{,}400$ riders per day in $2015$ and $10{,}800$ riders per day in $2023$. What is the average rate of change of the daily ridership, in riders per day per year, from $2015$ to $2023$?`,
        choices: ["$-200$", "$-1{,}600$", "$-177.8$", "$-0.005$"],
        why: [
          String.raw`$\dfrac{10{,}800 - 12{,}400}{2023 - 2015} = \dfrac{-1{,}600}{8} = -200$ riders per day per year.`,
          String.raw`$-1{,}600$ is the change in ridership, without dividing by the $8$ years that passed.`,
          String.raw`$-177.8$ is $\dfrac{-1{,}600}{9}$, which counts the years from $2015$ to $2023$ as $9$. The change in time is $2023 - 2015 = 8$ years.`,
          String.raw`$-0.005$ is $\dfrac{8}{-1{,}600}$, the change in years over the change in ridership, which is the reciprocal.`,
        ], answer: 0 },
      { id: "p102-m05", type: "mcq", skill: "u1", topic: "1.2", calc: false, difficulty: "difficult",
        question: String.raw`For every $x > 0$, the average rate of change of the function $P$ over the interval $[0, x]$ is $40 - 2x$. What is the value of $P(10) - P(4)$?`,
        choices: ["$72$", "$-12$", "$120$", "$156$"],
        why: [
          String.raw`The average rate of change over $[0, x]$ is $\dfrac{P(x) - P(0)}{x}$, so $P(x) - P(0) = x(40 - 2x)$. Then $P(10) - P(0) = 10(20) = 200$ and $P(4) - P(0) = 4(32) = 128$, so $P(10) - P(4) = 200 - 128 = 72$.`,
          String.raw`$-12$ is $(40 - 20) - (40 - 8)$, the change in the average rate of change. The question asks for the change in $P$.`,
          String.raw`$120$ is $6(40 - 20)$, which multiplies the average rate over $[0, 10]$ by the length of $[4, 10]$. That rate belongs to a different interval.`,
          String.raw`$156$ multiplies the average of the two rates, $\dfrac{20 + 32}{2} = 26$, by $6$. Rates over $[0, 10]$ and $[0, 4]$ do not average to the rate over $[4, 10]$.`,
        ], answer: 0 },
      { id: "p102-m06", type: "mcq", skill: "u1", topic: "1.2", calc: false, difficulty: "moderate", set: "p102-s2",
        question: String.raw`Over which interval is the average rate of change of $D$ greatest?`,
        choices: ["$[3, 5]$", "$[5, 9]$", "$[0, 3]$", "$[0, 10]$"],
        why: [
          String.raw`The average rates of change are $\dfrac{5.4}{3} = 1.8$ on $[0, 3]$, $\dfrac{4.6}{2} = 2.3$ on $[3, 5]$, $\dfrac{5.6}{4} = 1.4$ on $[5, 9]$, and $\dfrac{16.5}{10} = 1.65$ on $[0, 10]$ thousand downloads per week. The greatest is on $[3, 5]$.`,
          String.raw`$[5, 9]$ has the greatest change, $5.6$ thousand downloads, but it is spread over $4$ weeks, so the rate is $1.4$ thousand per week.`,
          String.raw`The rate on $[0, 3]$ is $\dfrac{7.4 - 2.0}{3} = 1.8$ thousand per week, less than the $2.3$ on $[3, 5]$.`,
          String.raw`The rate over the whole table is $\dfrac{18.5 - 2.0}{10} = 1.65$ thousand per week. It averages fast and slow weeks together.`,
        ], answer: 0 },
      { id: "p102-f1a", type: "frq", skill: "u1", topic: "1.2", calc: true, set: "p102-s3", part: "(a)",
        prompt: String.raw`Find the average rate of change of $C$ over the interval $0 \le t \le 2$. Show the computations that lead to your answer, and indicate units of measure.`,
        rows: [{ name: "Average rate of change", earns: String.raw`$\dfrac{C(2) - C(0)}{2 - 0} = \dfrac{3 - 0}{2} = 1.5$ milligrams per liter per hour, with the computation and units.` }],
        solution: String.raw`$C(2) = \dfrac{24}{8} = 3$ and $C(0) = 0$, so $\dfrac{C(2) - C(0)}{2 - 0} = \dfrac{3}{2} = 1.5$ milligrams per liter per hour.` },
      { id: "p102-f1b", type: "frq", skill: "u1", topic: "1.2", calc: true, set: "p102-s3", part: "(b)",
        prompt: String.raw`Interpret the meaning of your answer from part (a) in the context of the problem.`,
        rows: [{ name: "Interpretation", earns: String.raw`Over the first $2$ hours after the dose, the concentration of the medicine increased by an average of $1.5$ milligrams per liter per hour. The answer names the interval and the units.` }],
        solution: String.raw`On the interval $0 \le t \le 2$ hours, the concentration of the medicine in the patient's blood increased by an average of $1.5$ milligrams per liter per hour.` },
      { id: "p102-f1c", type: "frq", skill: "u1", topic: "1.2", calc: true, set: "p102-s3", part: "(c)",
        prompt: String.raw`Use the average rate of change of $C$ over the interval $[5, 5.001]$ to estimate the rate of change of $C$ at $t = 5$. Is the concentration increasing or decreasing at $t = 5$? Give a reason for your answer.`,
        rows: [
          { name: "Estimate", earns: String.raw`$\dfrac{C(5.001) - C(5)}{0.001} \approx -0.300$ milligrams per liter per hour.` },
          { name: "Conclusion with reason", earns: String.raw`Decreasing, because the estimated rate of change at $t = 5$ is negative.` },
        ],
        solution: String.raw`$C(5) = \dfrac{60}{29} \approx 2.068966$ and $C(5.001) \approx 2.068666$, so $\dfrac{C(5.001) - C(5)}{0.001} \approx -0.300$ milligrams per liter per hour. The rate of change is negative, so the concentration is decreasing at $t = 5$.` },
    ],
  }],
};

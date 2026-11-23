// AP Precalculus topic quiz, 1.3 Rates of Change in Linear and Quadratic Functions.
import { graph } from "../../plot.js";

// f(x) = -(x - 1)^2 + 6 on [-2, 4]: vertex (1, 6), endpoints (-2, -3) and (4, -3).
const fC = (x) => -((x - 1) ** 2) + 6;

export const sets = {
  "p103-s1": {
    name: "Values of y",
    label: "Table",
    intro: String.raw`Values of $y$ for equally spaced values of $x$ are given in the table below.`,
    sources: [{ title: "", blocks: [{ table: { head: ["$x$", "$-1$", "$1$", "$3$", "$5$", "$7$"], rows: [["$y$", "$9$", "$5$", "$5$", "$9$", "$17$"]] } }] }],
  },
  "p103-s2": {
    name: "A parabola opening down",
    label: "Graph",
    intro: String.raw`The graph of the quadratic function $f$ on the interval $[-2, 4]$ is shown below. Its vertex is $(1, 6)$.`,
    sources: [{ title: "", blocks: [{ svg: graph({
      x: [-2.5, 4.5], y: [-4, 7], step: 1, xname: "x", yname: "y",
      fns: [{ f: fC, from: -2, to: 4, label: "f", labelAt: 3.1 }],
      dots: [[-2, -3, "closed"], [1, 6, "closed"], [4, -3, "closed"]],
      alt: "Graph of the quadratic f on [-2, 4], a parabola opening down. It rises from (-2, -3) to the vertex (1, 6), then falls to (4, -3).",
    }) }] }],
  },
  "p103-s3": {
    name: "Ticket price increases",
    label: "Free response",
    intro: String.raw`A theater plans to raise its ticket price in steps of $\$1$. The table below gives the predicted nightly revenue $R(n)$, in hundreds of dollars, after $n$ increases of $\$1$.`,
    sources: [{ title: "", blocks: [{ table: { head: ["$n$", "$0$", "$1$", "$2$", "$3$", "$4$"], rows: [[String.raw`$R(n)$ (hundreds of dollars)`, "$40$", "$46$", "$50$", "$52$", "$52$"]] } }] }],
  },
};

export default {
  forms: [{
    id: "p103",
    name: "Topic 1.3 Quiz: Rates of Change in Linear and Quadratic Functions",
    group: "Unit 1: Polynomial and Rational Functions",
    items: [
      { id: "p103-m01", type: "mcq", skill: "u1", topic: "1.3", calc: false, difficulty: "easy",
        question: String.raw`For which function is the average rate of change over every interval equal to $-4$?`,
        choices: [String.raw`$f(x) = 7 - 4x$`, String.raw`$f(x) = 7 - 4x^{2}$`, String.raw`$f(x) = 4x - 7$`, String.raw`$f(x) = 7x - 4$`],
        why: [
          String.raw`A linear function has the same average rate of change over every interval, equal to its slope. The slope of $7 - 4x$ is $-4$.`,
          String.raw`$7 - 4x^{2}$ is quadratic, so its average rates of change differ from interval to interval. Over $[0, 1]$ the rate is $-4$, but over $[1, 2]$ it is $-12$.`,
          String.raw`$4x - 7$ is linear with slope $4$, not $-4$. Its outputs increase.`,
          String.raw`$7x - 4$ has slope $7$. The $-4$ is the constant term, which does not affect the rate of change.`,
        ], answer: 0 },
      { id: "p103-m02", type: "mcq", skill: "u1", topic: "1.3", calc: false, difficulty: "moderate", set: "p103-s1",
        question: String.raw`Which function fits every value in the table?`,
        choices: [String.raw`$y = 0.5(x - 2)^{2} + 4.5$`, String.raw`$y = 2(x - 2)^{2} + 4.5$`, String.raw`$y = 0.5(x + 2)^{2} + 4.5$`, String.raw`$y = -2x + 7$`],
        why: [
          String.raw`The average rates of change over consecutive intervals of length $2$ are $-2, 0, 2, 4$, which increase by a constant $2$, so $y$ is quadratic. Equal values at $x = 1$ and $x = 3$ put the vertex at $x = 2$. Check: at $x = 1$, $0.5(1) + 4.5 = 5$, and at $x = 7$, $0.5(25) + 4.5 = 17$.`,
          String.raw`At $x = 1$ this gives $2 + 4.5 = 6.5$, not $5$. The leading coefficient $2$ treats the constant change in the $y$-values, $4$, as $2a$ for inputs $1$ apart, but the inputs are $2$ apart.`,
          String.raw`This puts the vertex at $x = -2$. The equal values at $x = 1$ and $x = 3$ put it at $x = 2$, so the factor is $(x - 2)$.`,
          String.raw`This line passes through the first two points only. The average rates of change are not constant, so the data are not linear.`,
        ], answer: 0 },
      { id: "p103-m03", type: "mcq", skill: "u1", topic: "1.3", calc: false, difficulty: "easy",
        question: String.raw`A linear function $f$ satisfies $f(3) = 10$ and $f(7) = -2$. What is the average rate of change of $f$ over the interval $[-5, 20]$?`,
        choices: ["$-3$", "$-12$", "$3$", String.raw`$-\frac{1}{3}$`],
        why: [
          String.raw`A linear function has the same average rate of change over every interval: $\dfrac{-2 - 10}{7 - 3} = -3$. So the rate over $[-5, 20]$ is also $-3$.`,
          String.raw`$-12$ is the change $f(7) - f(3)$, without dividing by $7 - 3 = 4$.`,
          String.raw`$3$ subtracts the outputs in the opposite order from the inputs, $\dfrac{10 - (-2)}{7 - 3}$. The function decreases.`,
          String.raw`$-\dfrac{1}{3}$ is $\dfrac{7 - 3}{-2 - 10}$, the change in $x$ over the change in $f$.`,
        ], answer: 0 },
      { id: "p103-m04", type: "mcq", skill: "u1", topic: "1.3", calc: false, difficulty: "difficult",
        question: String.raw`Let $f(x) = -(x - 3)^{2} + 8$. Which of the following statements are true? $$\begin{aligned} &\text{I. Over consecutive intervals of length } 1, \text{ the average rates of change of } f \text{ decrease by } 2. \\ &\text{II. The average rate of change of } f \text{ over } [1, 5] \text{ is } 0. \\ &\text{III. On } [3, 6], f \text{ is decreasing and its rate of change is increasing.} \end{aligned}$$`,
        choices: ["I and II only", "I and III only", "II and III only", "I, II, and III"],
        why: [
          String.raw`I: the leading coefficient is $a = -1$, so the average rates over consecutive intervals of length $1$ change by $2a = -2$. True. II: $f(1) = 4 = f(5)$, so the rate over $[1, 5]$ is $0$. True. III: right of the vertex $f$ decreases, and the graph is concave down everywhere, so the rate of change is decreasing. False.`,
          String.raw`II is true, not III. $f(1) = 4$ and $f(5) = 4$, because $1$ and $5$ are the same distance from the vertex at $x = 3$, so the average rate over $[1, 5]$ is $0$. III fails because the graph is concave down.`,
          String.raw`III is false. The graph opens down, so its rate of change decreases on every interval. I is true, since $2a = -2$.`,
          String.raw`III is false. A parabola that opens down is concave down everywhere, so its rate of change is decreasing on $[3, 6]$, not increasing.`,
        ], answer: 0 },
      { id: "p103-m05", type: "mcq", skill: "u1", topic: "1.3", calc: false, difficulty: "moderate",
        question: String.raw`The values of a quadratic function $g$ at $x = 0, 2, 4, 6, 8$ are $3.25$, $4.13$, $5.49$, $7.33$, and $9.65$. By how much do the average rates of change of $g$ over consecutive intervals of length $2$ increase each time?`,
        choices: ["$0.24$", "$0.12$", "$0.44$", "$0.48$"],
        why: [
          String.raw`The average rates of change over $[0, 2]$, $[2, 4]$, $[4, 6]$, $[6, 8]$ are $\dfrac{0.88}{2} = 0.44$, $\dfrac{1.36}{2} = 0.68$, $\dfrac{1.84}{2} = 0.92$, and $\dfrac{2.32}{2} = 1.16$. Each is $0.24$ more than the one before.`,
          String.raw`$0.12$ is $\dfrac{0.24}{2}$, the change in the average rates per unit of $x$. The question asks for the change from one interval to the next.`,
          String.raw`$0.44$ is the first average rate of change, over $[0, 2]$, not the amount by which the rates increase.`,
          String.raw`$0.48$ is the constant change in the differences of the $g$-values, $1.36 - 0.88$. Those differences must first be divided by $2$ to give average rates of change.`,
        ], answer: 0 },
      { id: "p103-m06", type: "mcq", skill: "u1", topic: "1.3", calc: false, difficulty: "easy", set: "p103-s2",
        question: String.raw`Which statement describes $f$ on the interval $(1, 4)$?`,
        choices: [
          String.raw`$f$ is decreasing, and its rate of change is decreasing.`,
          String.raw`$f$ is decreasing, and its rate of change is increasing.`,
          String.raw`$f$ is increasing, and its rate of change is decreasing.`,
          String.raw`$f$ is increasing, and its rate of change is increasing.`,
        ],
        why: [
          String.raw`To the right of the vertex the graph falls, so $f$ is decreasing. A parabola that opens down is concave down, so its rate of change is decreasing: the graph falls more steeply as $x$ increases.`,
          String.raw`$f$ is decreasing, but the graph gets steeper going down, so the negative rate of change is decreasing, not increasing.`,
          String.raw`This describes $f$ on $(-2, 1)$, to the left of the vertex, where the graph rises.`,
          String.raw`The graph falls on $(1, 4)$, and a parabola that opens down never has an increasing rate of change.`,
        ], answer: 0 },
      { id: "p103-f1a", type: "frq", skill: "u1", topic: "1.3", calc: true, set: "p103-s3", part: "(a)",
        prompt: String.raw`Find the average rates of change of $R$ over the consecutive intervals $[0, 1]$, $[1, 2]$, $[2, 3]$, and $[3, 4]$. Explain why a quadratic function is an appropriate model for $R$.`,
        rows: [
          { name: "Average rates of change", earns: String.raw`$6$, $4$, $2$, and $0$ hundred dollars per increase.` },
          { name: "Reason", earns: String.raw`Over consecutive equal-length input intervals, the average rates of change decrease by a constant amount, $2$, so the rate of change of the average rates of change is constant, which fits a quadratic.` },
        ],
        solution: String.raw`The average rates of change are $\dfrac{46 - 40}{1} = 6$, $\dfrac{50 - 46}{1} = 4$, $\dfrac{52 - 50}{1} = 2$, and $\dfrac{52 - 52}{1} = 0$ hundred dollars per increase. They change by the same amount, $-2$, over each interval of length $1$. A constant rate of change of the average rates of change over equal-length intervals is the pattern of a quadratic function.` },
      { id: "p103-f1b", type: "frq", skill: "u1", topic: "1.3", calc: true, set: "p103-s3", part: "(b)",
        prompt: String.raw`Assume the pattern in the average rates of change continues. Find $R(5)$. Does the predicted revenue increase or decrease from $n = 4$ to $n = 5$?`,
        rows: [{ name: "Value and direction", earns: String.raw`$R(5) = 52 + (-2) = 50$, so the predicted revenue decreases.` }],
        solution: String.raw`The next average rate of change is $0 - 2 = -2$, so $R(5) = R(4) - 2 = 50$ hundred dollars. Since $50 < 52$, the predicted revenue decreases from $n = 4$ to $n = 5$.` },
    ],
  }],
};

import { graph } from "../../plot.js";

// g: segments (0, 1)-(2, 4), (2, 4)-(4, 2) with an open dot at (4, 2); closed dot at (4, 0), segments (4, 0)-(6, 3), (6, 3)-(8, 1).
// Corners at x = 2 and x = 6; a jump at x = 4, where g(4) = 0.
const gGraph = graph({
  x: [0, 8], y: [-1, 5], xname: "x", yname: "y",
  segments: [[0, 1, 2, 4], [2, 4, 4, 2], [4, 0, 6, 3], [6, 3, 8, 1]],
  dots: [[0, 1, "closed"], [4, 2, "open"], [4, 0, "closed"], [8, 1, "closed"]],
  alt: "Graph of g for x from 0 to 8, made of line segments. It rises from a closed dot at (0, 1) to a corner at (2, 4), falls to an open dot at (4, 2), jumps down to a closed dot at (4, 0), rises to a corner at (6, 3), and falls to a closed dot at (8, 1).",
});

export const sets = {
  "q501-s1": {
    name: "Values of f", label: "Table",
    intro: String.raw`The function $f$ is differentiable for all real numbers. Selected values of $f$ are given in the table below.`,
    sources: [{ title: "", blocks: [{ table: { head: ["$x$", "$0$", "$2$", "$5$", "$7$"], rows: [["$f(x)$", "$4$", "$10$", "$1$", "$8$"]] } }] }],
  },
  "q501-s2": {
    name: "The graph of g", label: "Graph",
    intro: String.raw`The function $g$ is defined on the closed interval $[0, 8]$. Its graph, made of line segments, is shown below. $g(4) = 0$.`,
    sources: [{ title: "", blocks: [{ svg: gGraph }] }],
  },
  "q501-s9": {
    name: "Water temperature", label: "Free response",
    intro: String.raw`The temperature of a pot of water, in degrees Celsius, is modeled by a differentiable function $W$ of time $t$, in minutes. Selected values of $W(t)$ are given in the table below.`,
    sources: [{ title: "", blocks: [{ table: { head: ["$t$ (minutes)", "$0$", "$4$", "$9$", "$15$"], rows: [["$W(t)$ (degrees Celsius)", "$20$", "$41$", "$47$", "$41$"]] } }] }],
  },
};

const items = [
  { id: "q501-m01", type: "mcq", skill: "u5", topic: "5.1", calc: false, difficulty: "moderate",
    question: String.raw`Let $f(x) = (x + 1)^3$. What value of $c$ satisfies the conclusion of the Mean Value Theorem for $f$ on the interval $[-2, 1]$?`,
    choices: ["$0$", String.raw`$-\frac{1}{2}$`, String.raw`$-1 + \sqrt{3}$`, String.raw`$-2$ and $0$`],
    why: [
      String.raw`The average rate of change is $\dfrac{f(1) - f(-2)}{1 - (-2)} = \dfrac{8 - (-1)}{3} = 3$. Setting $f'(c) = 3(c + 1)^2 = 3$ gives $(c + 1)^2 = 1$, so $c = 0$ or $c = -2$. Only $c = 0$ is in the open interval $(-2, 1)$.`,
      String.raw`$-\dfrac{1}{2}$ is the midpoint of the interval. $f'\left(-\dfrac{1}{2}\right) = \dfrac{3}{4}$, not $3$.`,
      String.raw`This sets $3(c + 1)^2 = 9$, using the change $f(1) - f(-2) = 9$ without dividing by the length of the interval, $3$.`,
      String.raw`$c = -2$ also solves $f'(c) = 3$, but it is an endpoint. The theorem gives a value strictly inside the interval.`,
    ], answer: 0 },
  { id: "q501-m02", type: "mcq", skill: "u5", topic: "5.1", calc: false, difficulty: "moderate", set: "q501-s2",
    question: String.raw`On which of the following intervals does $g$ satisfy the hypotheses of the Mean Value Theorem?`,
    choices: [String.raw`$[0, 2]$`, String.raw`$[1, 3]$`, String.raw`$[3, 5]$`, String.raw`$[5, 7]$`],
    why: [
      String.raw`On $[0, 2]$ the graph is one line segment, so $g$ is continuous on $[0, 2]$ and differentiable on $(0, 2)$. The corner at $x = 2$ is an endpoint, and the theorem needs differentiability only on the open interval.`,
      String.raw`The corner at $x = 2$ is inside $(1, 3)$, so $g$ is not differentiable on all of $(1, 3)$.`,
      String.raw`$g$ jumps at $x = 4$, which is inside $[3, 5]$, so $g$ is not continuous on $[3, 5]$.`,
      String.raw`The corner at $x = 6$ is inside $(5, 7)$, so $g$ is not differentiable on all of $(5, 7)$.`,
    ], answer: 0 },
  { id: "q501-m03", type: "mcq", skill: "u5", topic: "5.1", calc: false, difficulty: "difficult", set: "q501-s1",
    question: String.raw`Which of the following must be true? I. $f'(c) = -3$ for some $c$ in $(2, 5)$. II. The absolute maximum value of $f$ on $[0, 7]$ is at least $10$. III. $f'(x) < 0$ for all $x$ in $(2, 5)$.`,
    choices: ["I and II only", "I only", "I and III only", "I, II, and III"],
    why: [
      String.raw`I: $f$ is differentiable, so it is continuous on $[2, 5]$ and differentiable on $(2, 5)$, and the Mean Value Theorem gives $f'(c) = \dfrac{1 - 10}{5 - 2} = -3$ for some $c$ in $(2, 5)$. II: $f$ is continuous on the closed interval $[0, 7]$, so by the Extreme Value Theorem it has an absolute maximum there, and $f(2) = 10$ means that maximum is at least $10$. III need not hold: $f$ could rise above $10$ just after $x = 2$ and then fall to $1$.`,
      String.raw`II also must be true. $f$ is continuous on the closed interval $[0, 7]$, so it has an absolute maximum there by the Extreme Value Theorem, and that maximum cannot be less than $f(2) = 10$.`,
      String.raw`III does not follow. An average rate of change of $-3$ on $[2, 5]$ does not make $f'$ negative everywhere on $(2, 5)$; $f$ may increase for part of the interval. This choice also misses II, which follows from the Extreme Value Theorem.`,
      String.raw`III is not guaranteed. The table gives only $f(2) = 10$ and $f(5) = 1$, and a differentiable $f$ could increase for a while after $x = 2$ before falling to $1$.`,
    ], answer: 0 },
  { id: "q501-m04", type: "mcq", skill: "u5", topic: "5.1", calc: false, difficulty: "easy",
    stem: String.raw`The population of a small town is modeled by a differentiable function $P$, where $P(t)$ is the number of people $t$ years after 2010. $P(0) = 1200$ and $P(8) = 720$.`,
    question: String.raw`According to the Mean Value Theorem, at some time $t$ with $0 < t < 8$, $P'(t)$ must equal which of the following, in people per year?`,
    choices: ["$-60$", "$-480$", "$-150$", String.raw`$-\frac{1}{60}$`],
    why: [
      String.raw`$P$ is differentiable, so the Mean Value Theorem applies on $[0, 8]$: $P'(t) = \dfrac{720 - 1200}{8 - 0} = \dfrac{-480}{8} = -60$ for some $t$ in $(0, 8)$.`,
      String.raw`$-480$ people is the change in population. The rate divides that change by the $8$ years.`,
      String.raw`$-\dfrac{1200}{8} = -150$ leaves out the final population $P(8) = 720$, as if the town emptied.`,
      String.raw`This divides the time by the change in population, $\dfrac{8}{-480}$. The rate is the change in population over the change in time.`,
    ], answer: 0 },
  { id: "q501-m05", type: "mcq", skill: "u5", topic: "5.1", calc: false, difficulty: "difficult",
    stem: String.raw`Let $f(x) = e^{x}\left(x^2 - 4x\right)$. Then $f(0) = f(4) = 0$.`,
    question: String.raw`What value of $c$ in the open interval $(0, 4)$ satisfies $f'(c) = 0$, as guaranteed by Rolle's Theorem?`,
    choices: [String.raw`$1 + \sqrt{5}$`, "$2$", String.raw`$1 - \sqrt{5}$`, String.raw`$3 - \sqrt{5}$`],
    why: [
      String.raw`By the product rule, $f'(x) = e^{x}\left(x^2 - 4x\right) + e^{x}(2x - 4) = e^{x}\left(x^2 - 2x - 4\right)$. Since $e^{x} > 0$, $f'(x) = 0$ when $x^2 - 2x - 4 = 0$, so $x = 1 \pm \sqrt{5}$. Only $1 + \sqrt{5} \approx 3.24$ is in $(0, 4)$.`,
      String.raw`This differentiates only the factor $x^2 - 4x$, giving $e^{x}(2x - 4)$. The product rule also needs the term $e^{x}\left(x^2 - 4x\right)$.`,
      String.raw`$1 - \sqrt{5} \approx -1.24$ also solves $x^2 - 2x - 4 = 0$, but it is not in $(0, 4)$.`,
      String.raw`This subtracts the two terms of the product rule, $e^{x}\left(x^2 - 4x\right) - e^{x}(2x - 4) = e^{x}\left(x^2 - 6x + 4\right)$. The product rule adds them.`,
    ], answer: 0 },
  { id: "q501-m06", type: "mcq", skill: "u5", topic: "5.1", calc: true, difficulty: "moderate",
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

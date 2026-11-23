// AP Precalculus topic quiz, 1.1 Change in Tandem.
import { graph } from "../../plot.js";

// f(x) = -x^3/4 + 3x on [-4, 4]: relative min (-2, -4), relative max (2, 4), inflection (0, 0), endpoints (-4, 4) and (4, -4).
const fA = (x) => -(x ** 3) / 4 + 3 * x;

export const sets = {
  "p101-s1": {
    name: "A cubic on a closed interval",
    label: "Graph",
    intro: String.raw`The graph of the function $f$, defined on the closed interval $[-4, 4]$, is shown below. The labeled points are $(-4, 4)$, $(-2, -4)$, $(0, 0)$, $(2, 4)$, and $(4, -4)$. The graph has a relative minimum at $x = -2$, a relative maximum at $x = 2$, and a point of inflection at $x = 0$.`,
    sources: [{ title: "", blocks: [{ svg: graph({
      x: [-4.5, 4.5], y: [-5, 5], step: 1, xname: "x", yname: "y",
      fns: [{ f: fA, from: -4, to: 4, label: "f", labelAt: 3.2 }],
      dots: [[-4, 4, "closed"], [-2, -4, "closed"], [0, 0, "closed"], [2, 4, "closed"], [4, -4, "closed"]],
      alt: "Graph of f on [-4, 4]. The curve falls from (-4, 4) to a low point at (-2, -4), rises through the inflection point (0, 0) to a high point at (2, 4), then falls to (4, -4).",
    }) }] }],
  },
  "p101-s2": {
    name: "Values of g",
    label: "Table",
    intro: String.raw`Selected values of the function $g$ are given in the table below. The graph of $g$ has no point of inflection on the interval $[0, 10]$.`,
    sources: [{ title: "", blocks: [{ table: { head: ["$x$", "$0$", "$2$", "$4$", "$6$", "$8$", "$10$"], rows: [["$g(x)$", "$1.0$", "$4.6$", "$6.4$", "$7.0$", "$6.2$", "$3.6$"]] } }] }],
  },
  "p101-s3": {
    name: "An oven heating up",
    label: "Free response",
    intro: String.raw`An oven is turned on at time $h = 0$. The temperature of the oven, in degrees Fahrenheit, $h$ minutes after it is turned on is given by an increasing function $T$. Selected values of $T(h)$ are given in the table below.`,
    sources: [{ title: "", blocks: [{ table: { head: [String.raw`$h$ (minutes)`, "$0$", "$2$", "$4$", "$6$", "$8$"], rows: [[String.raw`$T(h)$ (degrees Fahrenheit)`, "$70$", "$190$", "$270$", "$320$", "$345$"]] } }] }],
  },
};

export default {
  forms: [{
    id: "p101",
    name: "Topic 1.1 Quiz: Change in Tandem",
    group: "Unit 1: Polynomial and Rational Functions",
    items: [
      { id: "p101-m01", type: "mcq", skill: "u1", topic: "1.1", calc: false, difficulty: "easy", set: "p101-s1",
        question: String.raw`On which interval is $f$ increasing?`,
        choices: ["$[-2, 2]$", String.raw`$[-4, -2]$ and $[2, 4]$`, "$[-4, 0]$", "$[-4, 4]$"],
        why: [
          String.raw`As $x$ increases from $-2$ to $2$, the graph rises from the relative minimum $(-2, -4)$ to the relative maximum $(2, 4)$, so $f$ is increasing on $[-2, 2]$.`,
          String.raw`On $[-4, -2]$ and $[2, 4]$ the graph falls. These are the intervals where $f$ is decreasing.`,
          String.raw`On $[-4, 0]$ the graph is concave up, but it falls from $x = -4$ to $x = -2$. Concave up describes the rate of change, not the direction of $f$.`,
          String.raw`$[-4, 4]$ is the whole domain, and it is also the set of outputs from $-4$ to $4$. The graph rises on only part of the domain.`,
        ], answer: 0 },
      { id: "p101-m02", type: "mcq", skill: "u1", topic: "1.1", calc: false, difficulty: "moderate", set: "p101-s1",
        question: String.raw`On which interval is the rate of change of $f$ positive and decreasing?`,
        choices: ["$(0, 2)$", "$(-2, 0)$", "$(2, 4)$", "$(-4, -2)$"],
        why: [
          String.raw`The rate of change is positive where $f$ is increasing, on $(-2, 2)$. It is decreasing where the graph is concave down, to the right of the inflection point at $x = 0$. Both hold on $(0, 2)$.`,
          String.raw`On $(-2, 0)$, $f$ is increasing, so the rate is positive, but the graph is concave up, so the rate is increasing.`,
          String.raw`On $(2, 4)$ the graph is concave down, so the rate is decreasing, but $f$ is decreasing there, so the rate is negative.`,
          String.raw`On $(-4, -2)$, $f$ is decreasing and the graph is concave up, so the rate is negative and increasing. Both parts fail.`,
        ], answer: 0 },
      { id: "p101-m03", type: "mcq", skill: "u1", topic: "1.1", calc: false, difficulty: "easy",
        question: String.raw`Which of the following equations defines $y$ as a function of $x$?`,
        choices: [String.raw`$x^{2} + 3y = 6$`, String.raw`$x + y^{2} = 6$`, String.raw`$x - |y| = 6$`, String.raw`$x^{2} + 3y^{2} = 6$`],
        why: [
          String.raw`Solving for $y$ gives $y = \dfrac{6 - x^{2}}{3}$, so each input $x$ gives exactly one output $y$.`,
          String.raw`At $x = 2$, $y^{2} = 4$, so $y = 2$ and $y = -2$ both work. One input with two outputs is not a function.`,
          String.raw`At $x = 7$, $|y| = 1$, so $y = 1$ and $y = -1$ both work. One input has two outputs.`,
          String.raw`At $x = 0$, $y^{2} = 2$, so $y = \sqrt{2}$ and $y = -\sqrt{2}$ both work. One input has two outputs.`,
        ], answer: 0 },
      { id: "p101-m04", type: "mcq", skill: "u1", topic: "1.1", calc: false, difficulty: "moderate", set: "p101-s2",
        question: String.raw`Which statement about $g$ on the interval $[0, 6]$ is supported by the table?`,
        choices: [
          String.raw`$g$ is increasing, and its rate of change is decreasing.`,
          String.raw`$g$ is increasing, and its rate of change is increasing.`,
          String.raw`$g$ is decreasing, and its rate of change is decreasing.`,
          String.raw`$g$ is decreasing, and its rate of change is increasing.`,
        ],
        why: [
          String.raw`The values rise from $1.0$ to $7.0$, so $g$ is increasing. The average rates of change over $[0, 2]$, $[2, 4]$, $[4, 6]$ are $1.8$, $0.9$, $0.3$. They get smaller, so the rate of change is decreasing.`,
          String.raw`$g$ is increasing, but the average rates of change $1.8$, $0.9$, $0.3$ get smaller. The rate of change is decreasing, so the graph is concave down.`,
          String.raw`The rate of change is decreasing, but on $[0, 6]$ the values of $g$ rise. $g$ decreases only after $x = 6$.`,
          String.raw`Both parts are reversed. On $[0, 6]$ the values rise, and the average rates of change $1.8$, $0.9$, $0.3$ get smaller.`,
        ], answer: 0 },
      { id: "p101-m05", type: "mcq", skill: "u1", topic: "1.1", calc: false, difficulty: "difficult",
        question: String.raw`Water drains from a tank. The height of the water $H(t)$, in centimeters, is a function of the time $t$, in minutes. For $0 < t < 10$, $H$ is decreasing and the rate of change of $H$ is decreasing. Which of the following must be true? $$\begin{aligned} &\text{I. } H(6) < H(2) \\ &\text{II. The water level drops more from } t = 6 \text{ to } t = 8 \text{ than from } t = 2 \text{ to } t = 4. \\ &\text{III. } H(t) = 0 \text{ for some } t \text{ with } 0 < t < 10. \end{aligned}$$`,
        choices: ["I and II only", "II and III only", "I and III only", "I, II, and III"],
        why: [
          String.raw`I: $H$ is decreasing, so $H(6) < H(2)$. II: the rate of change is negative and decreasing, so it becomes more negative over time. The average rate over $[6, 8]$ is less than the average rate over $[2, 4]$, so the drop from $t = 6$ to $t = 8$ is larger. III: nothing given says the tank empties. Only I and II must be true.`,
          String.raw`I must also be true, because a decreasing $H$ gives $H(6) < H(2)$. III does not have to be true: the tank may still hold water at $t = 10$.`,
          String.raw`III does not have to be true: a decreasing $H$ can stay above $0$ for the whole interval. II must be true, because the rate of change becomes more negative.`,
          String.raw`III does not have to be true. A decreasing function need not reach $0$; the tank may still hold water at $t = 10$.`,
        ], answer: 0 },
      { id: "p101-m06", type: "mcq", skill: "u1", topic: "1.1", calc: true, difficulty: "easy",
        question: String.raw`Let $f(x) = 0.5x^{3} - 2x + 1$. On which interval is $f$ decreasing?`,
        choices: [String.raw`$[-1.155, 1.155]$`, String.raw`$(-\infty, -1.155] \cup [1.155, \infty)$`, String.raw`$[0.539, 1.675]$`, String.raw`$[-0.540, 2.540]$`],
        why: [
          String.raw`A graph of $f$ shows a relative maximum at $x \approx -1.155$ and a relative minimum at $x \approx 1.155$. The graph falls between them, so $f$ is decreasing on $[-1.155, 1.155]$.`,
          String.raw`These are the intervals where $f$ is increasing, to the left of the relative maximum and to the right of the relative minimum.`,
          String.raw`$0.539$ and $1.675$ are zeros of $f$, and $f(x) \le 0$ between them. Being negative is not the same as decreasing.`,
          String.raw`$-0.540$ and $2.540$ are the relative minimum and maximum values, which are outputs. The interval is written with inputs.`,
        ], answer: 0 },
      { id: "p101-f1a", type: "frq", skill: "u1", topic: "1.1", calc: false, set: "p101-s3", part: "(a)",
        prompt: String.raw`Find the average rate of change of $T$ over each of the intervals $[0, 2]$, $[2, 4]$, $[4, 6]$, and $[6, 8]$. Indicate units of measure.`,
        rows: [{ name: "Average rates of change", earns: String.raw`$60$, $40$, $25$, and $12.5$ degrees Fahrenheit per minute, with units.` }],
        solution: String.raw`$\dfrac{190 - 70}{2} = 60$, $\dfrac{270 - 190}{2} = 40$, $\dfrac{320 - 270}{2} = 25$, and $\dfrac{345 - 320}{2} = 12.5$ degrees Fahrenheit per minute.` },
      { id: "p101-f1b", type: "frq", skill: "u1", topic: "1.1", calc: false, set: "p101-s3", part: "(b)",
        prompt: String.raw`Based on your answers to part (a), is the rate of change of $T$ increasing or decreasing on $[0, 8]$? Is the graph of $T$ concave up or concave down on $[0, 8]$? Give a reason for your answers.`,
        rows: [
          { name: "Rate of change", earns: String.raw`Decreasing, because the average rates of change over consecutive equal-length intervals decrease ($60 > 40 > 25 > 12.5$).` },
          { name: "Concavity", earns: String.raw`Concave down, because the rate of change of $T$ is decreasing.` },
        ],
        solution: String.raw`The average rates of change over consecutive intervals of length $2$ are $60$, $40$, $25$, $12.5$, which decrease, so the rate of change of $T$ is decreasing. A function whose rate of change is decreasing has a graph that is concave down, so the graph of $T$ is concave down on $[0, 8]$.` },
      { id: "p101-f1c", type: "frq", skill: "u1", topic: "1.1", calc: false, set: "p101-s3", part: "(c)",
        prompt: String.raw`A cook says, "The oven is cooling down during the first $8$ minutes, because the rate of change of its temperature is decreasing." Explain why the cook's statement is incorrect.`,
        rows: [{ name: "Explanation", earns: String.raw`States that the rates of change are positive, so $T$ is increasing and the oven is heating up; a decreasing rate of change means the temperature rises more slowly.` }],
        solution: String.raw`Every average rate of change found in part (a) is positive, so the temperature is increasing and the oven is heating, not cooling. A decreasing rate of change means only that the temperature rises more slowly as time passes.` },
    ],
  }],
};

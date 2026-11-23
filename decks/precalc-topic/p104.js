// AP Precalculus topic quiz, 1.4 Polynomial Functions and Rates of Change.
import { graph } from "../../plot.js";

// q(x) = 0.5x^3 - 1.5x^2 = 0.5x^2(x - 3) on [-1, 4]: relative max (0, 0), inflection (1, -1), relative min (2, -2), endpoints (-1, -2) and (4, 8).
const qD = (x) => 0.5 * x ** 3 - 1.5 * x * x;

export const sets = {
  "p104-s1": {
    name: "A cubic on a closed interval",
    label: "Graph",
    intro: String.raw`The graph of the polynomial function $q$, defined on the closed interval $[-1, 4]$, is shown below. The labeled points are $(-1, -2)$, $(0, 0)$, $(1, -1)$, $(2, -2)$, and $(4, 8)$.`,
    sources: [{ title: "", blocks: [{ svg: graph({
      x: [-1.5, 4.5], y: [-3, 9], step: 1, xname: "x", yname: "y",
      fns: [{ f: qD, from: -1, to: 4, label: "q", labelAt: 3.4 }],
      dots: [[-1, -2, "closed"], [0, 0, "closed"], [1, -1, "closed"], [2, -2, "closed"], [4, 8, "closed"]],
      alt: "Graph of q on [-1, 4]. The curve rises from (-1, -2) to a high point at (0, 0), falls through (1, -1) to a low point at (2, -2), then rises steeply to (4, 8).",
    }) }] }],
  },
  "p104-s2": {
    name: "A cubic with two turning points",
    label: "Free response",
    intro: String.raw`Let $p(x) = x^{3} - 6x^{2} + 9x + 2$. The graph of $p$ has a relative maximum at $(1, 6)$ and a relative minimum at $(3, 2)$. The graph of $p$ is concave down for $x < 2$ and concave up for $x > 2$.`,
    sources: [{ title: "", blocks: [{ p: String.raw`A calculator is not allowed on this question.` }] }],
  },
};

export default {
  forms: [{
    id: "p104",
    name: "Topic 1.4 Quiz: Polynomial Functions and Rates of Change",
    group: "Unit 1: Polynomial and Rational Functions",
    items: [
      { id: "p104-m01", type: "mcq", skill: "u1", topic: "1.4", calc: false, difficulty: "easy",
        question: String.raw`Which polynomial has degree $4$?`,
        choices: [String.raw`$(x^{2} - 3)(2x^{2} + x)$`, String.raw`$4x^{3} - 2x + x^{2} - 7$`, String.raw`$x^{4} + 3x^{5} - 1$`, String.raw`$(x^{2} + 4)^{3}$`],
        why: [
          String.raw`The leading term is $x^{2} \cdot 2x^{2} = 2x^{4}$, so the degree is $4$.`,
          String.raw`This polynomial has $4$ terms, but its highest power of $x$ is $3$, so its degree is $3$.`,
          String.raw`The first-written term is $x^{4}$, but the term $3x^{5}$ has a higher power, so the degree is $5$.`,
          String.raw`The leading term is $(x^{2})^{3} = x^{6}$, so the degree is $6$. The exponent $3$ is not the degree.`,
        ], answer: 0 },
      { id: "p104-m02", type: "mcq", skill: "u1", topic: "1.4", calc: false, difficulty: "moderate", set: "p104-s1",
        question: String.raw`Which statement about $q$ on $[-1, 4]$ is true?`,
        choices: [
          String.raw`$q$ has a relative maximum at $x = 0$ and its absolute maximum at $x = 4$.`,
          String.raw`$q$ has a relative maximum at $x = 0$ and its absolute maximum at $x = 0$.`,
          String.raw`$q$ has a relative maximum at $x = 4$ and its absolute maximum at $x = 4$.`,
          String.raw`$q$ has a relative maximum at $x = 2$ and its absolute maximum at $x = 4$.`,
        ],
        why: [
          String.raw`At $x = 0$, $q$ changes from increasing to decreasing, so $(0, 0)$ is a relative maximum. The greatest output on the whole interval is $q(4) = 8$, at the right endpoint, so the absolute maximum is at $x = 4$.`,
          String.raw`$q(0) = 0$ is greater than the outputs near it, but $q(4) = 8$ is greater still. The endpoint must be checked for the absolute maximum.`,
          String.raw`$x = 4$ is an endpoint, where the graph does not change from increasing to decreasing. Here $q$ has its absolute maximum but not a relative maximum, and the relative maximum is at $x = 0$.`,
          String.raw`At $x = 2$, $q$ changes from decreasing to increasing, which is a relative minimum, not a relative maximum.`,
        ], answer: 0 },
      { id: "p104-m03", type: "mcq", skill: "u1", topic: "1.4", calc: false, difficulty: "easy", set: "p104-s1",
        question: String.raw`At which value of $x$ does the graph of $q$ have a point of inflection?`,
        choices: ["$x = 1$", "$x = 0$", "$x = 2$", "$x = 3$"],
        why: [
          String.raw`The graph is concave down near the relative maximum at $x = 0$ and concave up near the relative minimum at $x = 2$. The concavity changes halfway between, at $(1, -1)$.`,
          String.raw`$x = 0$ is a relative maximum, where $q$ changes from increasing to decreasing. The concavity does not change there.`,
          String.raw`$x = 2$ is a relative minimum, where $q$ changes from decreasing to increasing. The concavity does not change there.`,
          String.raw`$x = 3$ is a zero of $q$, where the graph crosses the $x$-axis. A zero is not a point of inflection.`,
        ], answer: 0 },
      { id: "p104-m04", type: "mcq", skill: "u1", topic: "1.4", calc: false, difficulty: "moderate",
        question: String.raw`A polynomial function $f$ satisfies $f(-3) = 5$, $f(0) = -1$, and $f(4) = 6$. Which of the following must be true?`,
        choices: [
          String.raw`$f$ has a relative minimum in $(-3, 4)$.`,
          String.raw`$f$ has a relative maximum in $(-3, 4)$.`,
          String.raw`$f$ has exactly two zeros in $(-3, 4)$.`,
          String.raw`$f$ has a point of inflection in $(-3, 4)$.`,
        ],
        why: [
          String.raw`On the closed interval $[-3, 4]$, the polynomial $f$ reaches a least value. Since $f(0) = -1$ is less than both endpoint values, the least value occurs inside $(-3, 4)$, where $f$ changes from decreasing to increasing. That point is a relative minimum.`,
          String.raw`A quadratic opening up, such as one through the three given points, has no relative maximum. The values force a low point, not a high point.`,
          String.raw`$f$ has at least one zero in $(-3, 0)$ and at least one in $(0, 4)$, but it could have more, for example if the graph wiggles across the axis.`,
          String.raw`A quadratic through the three points has no point of inflection, so one does not have to exist.`,
        ], answer: 0 },
      { id: "p104-m05", type: "mcq", skill: "u1", topic: "1.4", calc: false, difficulty: "difficult",
        question: String.raw`Let $p(x) = (x + 2)(x - 1)^{2}(x - 4)$. Which of the following statements are true? $$\begin{aligned} &\text{I. } p \text{ has a relative extremum at } x = 1. \\ &\text{II. } p \text{ has a relative extremum between } x = -2 \text{ and } x = 1. \\ &\text{III. } p \text{ has a global maximum.} \end{aligned}$$`,
        choices: ["I and II only", "I and III only", "II and III only", "I, II, and III"],
        why: [
          String.raw`I: near $x = 1$, $(x + 2)(x - 4)$ is negative and $(x - 1)^{2} \ge 0$, so $p(x) \le 0 = p(1)$ and $p$ has a relative maximum at $x = 1$. II: $p(-2) = p(1) = 0$ and $p$ is negative between them (for example $p(0) = -8$), so $p$ has a relative minimum there. III: the leading term is $x^{4}$, so both ends go up and there is no global maximum.`,
          String.raw`III is false, and II is true. $p$ is $0$ at $x = -2$ and $x = 1$ and negative between, so it must turn around between them, which gives a relative minimum.`,
          String.raw`III is false, and I is true. Because of the squared factor, $p$ touches $0$ at $x = 1$ from below and turns back down, which is a relative maximum.`,
          String.raw`III is false. The degree is $4$ and the leading coefficient is positive, so $p(x)$ increases without bound at both ends and has no global maximum.`,
        ], answer: 0 },
      { id: "p104-m06", type: "mcq", skill: "u1", topic: "1.4", calc: true, difficulty: "easy",
        question: String.raw`The number of insects in a colony, in thousands, $t$ weeks after a study begins is modeled by $P(t) = -0.4t^{3} + 3.1t^{2} + 2t + 15$ for $0 \le t \le 8$. According to the model, what is the greatest number of insects, in thousands, during the study?`,
        choices: ["$53.228$", "$5.471$", "$24.600$", "$15.000$"],
        why: [
          String.raw`A graph of $P$ on $[0, 8]$ shows a relative maximum at $t \approx 5.471$, where $P \approx 53.228$. The endpoint values, $P(0) = 15$ and $P(8) = 24.6$, are smaller, so the absolute maximum is $53.228$ thousand.`,
          String.raw`$5.471$ is the time, in weeks, when the maximum occurs. The question asks for the number of insects.`,
          String.raw`$24.600$ is $P(8)$, the value at the right endpoint. The model reaches a much larger value earlier.`,
          String.raw`$15.000$ is $P(0)$, the starting value, which is the least value on $[0, 8]$.`,
        ], answer: 0 },
      { id: "p104-f1a", type: "frq", skill: "u1", topic: "1.4", calc: false, set: "p104-s2", part: "(a)",
        prompt: String.raw`(i) On what interval is $p$ decreasing? (ii) Find the absolute maximum value of $p$ on the interval $[0, 4]$. Give a reason for your answer.`,
        rows: [
          { name: "Decreasing", earns: String.raw`$[1, 3]$, from the relative maximum at $x = 1$ to the relative minimum at $x = 3$.` },
          { name: "Absolute maximum", earns: String.raw`$6$, after comparing the relative maximum $p(1) = 6$ with the endpoint values $p(0) = 2$ and $p(4) = 6$.` },
        ],
        solution: String.raw`(i) $p$ changes from increasing to decreasing at the relative maximum $x = 1$ and from decreasing to increasing at the relative minimum $x = 3$, so $p$ is decreasing on $[1, 3]$. (ii) The candidates are the relative maximum and the endpoints: $p(1) = 6$, $p(0) = 2$, and $p(4) = 64 - 96 + 36 + 2 = 6$. The absolute maximum value is $6$, reached at $x = 1$ and $x = 4$.` },
      { id: "p104-f1b", type: "frq", skill: "u1", topic: "1.4", calc: false, set: "p104-s2", part: "(b)",
        prompt: String.raw`Does $p$ have a global maximum on the set of all real numbers? Give a reason for your answer.`,
        rows: [{ name: "Answer with reason", earns: String.raw`No, because $p$ has odd degree $3$ with a positive leading coefficient, so $p(x)$ increases without bound as $x$ increases.` }],
        solution: String.raw`No. The leading term is $x^{3}$, so as $x$ increases without bound, $p(x)$ increases without bound. For any output, a larger output exists, so $p$ has no global maximum.` },
      { id: "p104-f1c", type: "frq", skill: "u1", topic: "1.4", calc: false, set: "p104-s2", part: "(c)",
        prompt: String.raw`On the interval $(2, 3)$, $p$ is decreasing. Is the rate of change of $p$ increasing or decreasing on $(2, 3)$? Give a reason for your answer.`,
        rows: [{ name: "Answer with reason", earns: String.raw`Increasing, because the graph of $p$ is concave up for $x > 2$.` }],
        solution: String.raw`The graph of $p$ is concave up for $x > 2$, so the rate of change of $p$ is increasing on $(2, 3)$. The rate of change is negative there, and it increases toward $0$ as $x$ approaches the relative minimum at $x = 3$.` },
    ],
  }],
};

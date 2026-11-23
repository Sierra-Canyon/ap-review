// AP Precalculus topic quiz 1.10: Rational Functions and Holes.
import { graph } from "../../plot.js";

// h(x) = (x^2 - x - 2) / (x^2 - 4) = (x + 1) / (x + 2) for x != 2, with a hole at (2, 3/4). Items m03 and m04 read this graph.
const h = (x) => (x + 1) / (x + 2);

export const sets = {
  "p110-s1": {
    name: "A graph with a hole",
    label: "Graph",
    intro: String.raw`The graph of the rational function $h$ is shown below. The dashed lines $x = -2$ and $y = 1$ are asymptotes of the graph, the graph crosses the $x$-axis at $x = -1$, and the open circle at $\left(2, \frac{3}{4}\right)$ marks a point that is not on the graph.`,
    sources: [{ title: "", blocks: [{ svg: graph({
      x: [-7, 6], y: [-4, 5], step: 1, xname: "x", yname: "y",
      fns: [{ f: h, from: -7, to: -2.04 }, { f: h, from: -1.96, to: 6 }],
      vlines: [{ x: -2 }], hlines: [{ y: 1 }],
      dots: [[2, 0.75, "open"], [-1, 0, "closed"]],
      alt: "Graph of h with a dashed vertical asymptote x = -2 and a dashed horizontal asymptote y = 1. On the left, the curve rises from just above y = 1 toward positive infinity as x approaches -2 from the left. On the right of x = -2, the curve comes up from negative infinity, crosses the x-axis at x = -1, passes through (0, 1/2), and rises toward y = 1, with an open circle at (2, 3/4).",
    }) }] }],
  },
  "p110-s2": {
    name: "A hole and an asymptote",
    label: "Free response",
    intro: String.raw`Let $q$ be the function given by $$q(x) = \dfrac{2x^{2} - 7x + 3}{x^{2} - 5x + 6}.$$`,
    sources: [{ title: "", blocks: [{ p: String.raw`No calculator is allowed. Show the work that leads to each answer.` }] }],
  },
};

export default {
  forms: [{
    id: "p110",
    name: "Topic 1.10 Quiz: Rational Functions and Holes",
    group: "Unit 1: Polynomial and Rational Functions",
    items: [
      { id: "p110-m01", type: "mcq", skill: "u1", topic: "1.10", calc: false, difficulty: "easy",
        question: String.raw`Let $f(x) = \dfrac{(x - 2)(x + 7)}{(x + 7)(2x + 1)}$. At which value of $x$ does the graph of $f$ have a hole?`,
        choices: ["$x = -7$", "$x = 7$", String.raw`$x = -\frac{1}{2}$`, "$x = 2$"],
        why: [
          String.raw`The factor $x + 7$ appears once in the numerator and once in the denominator, so it cancels and leaves a hole at $x = -7$.`,
          String.raw`The factor $x + 7$ is $0$ at $x = -7$, not at $x = 7$.`,
          String.raw`The factor $2x + 1$ is only in the denominator, so $x = -\frac{1}{2}$ is a vertical asymptote.`,
          String.raw`The factor $x - 2$ is only in the numerator, so $x = 2$ is a zero of $f$.`,
        ], answer: 0 },
      { id: "p110-m02", type: "mcq", skill: "u1", topic: "1.10", calc: false, difficulty: "moderate",
        question: String.raw`Let $g(x) = \dfrac{x^{2} + 2x - 15}{x^{2} - 9}$. What are the coordinates of the hole in the graph of $g$?`,
        choices: [String.raw`$\left(3, \frac{4}{3}\right)$`, String.raw`$(3, 0)$`, String.raw`$\left(\frac{4}{3}, 3\right)$`, String.raw`$(-5, 0)$`],
        why: [
          String.raw`$g(x) = \dfrac{(x + 5)(x - 3)}{(x - 3)(x + 3)}$. The factor $x - 3$ cancels, so the hole is at $x = 3$. For $x \ne 3$, $g(x) = \dfrac{x + 5}{x + 3}$, which approaches $\dfrac{8}{6} = \dfrac{4}{3}$ as $x$ approaches $3$.`,
          String.raw`This takes the hole to be on the $x$-axis. The $y$-coordinate comes from the reduced form, $\dfrac{3 + 5}{3 + 3} = \dfrac{4}{3}$.`,
          String.raw`The coordinates are in the wrong order. The $x$-coordinate of the hole is $3$.`,
          String.raw`$(-5, 0)$ is the $x$-intercept, where the factor $x + 5$ makes $g(x) = 0$.`,
        ], answer: 0 },
      { id: "p110-m03", type: "mcq", skill: "u1", topic: "1.10", calc: false, set: "p110-s1", difficulty: "moderate",
        question: String.raw`Which of the following could define $h$?`,
        choices: [String.raw`$h(x) = \frac{x^{2} - x - 2}{x^{2} - 4}$`, String.raw`$h(x) = \frac{x + 1}{x + 2}$`, String.raw`$h(x) = \frac{x^{2} + 3x + 2}{x^{2} - 4}$`, String.raw`$h(x) = \frac{x^{2} - x - 2}{x^{2} + 4x + 4}$`],
        why: [
          String.raw`$\dfrac{(x - 2)(x + 1)}{(x - 2)(x + 2)} = \dfrac{x + 1}{x + 2}$ for $x \ne 2$. The shared factor $x - 2$ gives a hole at $x = 2$, where the reduced form gives $\frac{3}{4}$. The factor $x + 2$ gives the asymptote $x = -2$, and $x + 1$ gives the zero at $x = -1$.`,
          String.raw`$\dfrac{x + 1}{x + 2}$ is defined at $x = 2$, so its graph has no hole there: it passes through $\left(2, \frac{3}{4}\right)$.`,
          String.raw`$\dfrac{(x + 1)(x + 2)}{(x - 2)(x + 2)}$ cancels $x + 2$ instead. Its hole is at $x = -2$ and its asymptote is $x = 2$.`,
          String.raw`$\dfrac{(x - 2)(x + 1)}{(x + 2)^{2}}$ shares no factor, so it has no hole. It has a zero at $x = 2$.`,
        ], answer: 0 },
      { id: "p110-m04", type: "mcq", skill: "u1", topic: "1.10", calc: false, set: "p110-s1", difficulty: "easy",
        question: String.raw`Which of the following is true about $h$ at $x = 2$?`,
        choices: [
          String.raw`$\lim_{x \to 2} h(x) = \frac{3}{4}$ and $h(2)$ is undefined`,
          String.raw`$\lim_{x \to 2} h(x) = \frac{3}{4}$ and $h(2) = \frac{3}{4}$`,
          String.raw`$\lim_{x \to 2} h(x)$ does not exist and $h(2)$ is undefined`,
          String.raw`$\lim_{x \to 2} h(x) = 0$ and $h(2) = 0$`,
        ],
        why: [
          String.raw`The open circle shows that $\left(2, \frac{3}{4}\right)$ is not on the graph, so $h(2)$ is undefined. The graph approaches the height $\frac{3}{4}$ from both sides of $x = 2$, so the limit is $\frac{3}{4}$.`,
          String.raw`The open circle means the point is missing from the graph. At a hole the function has no value.`,
          String.raw`The values of $h$ approach $\frac{3}{4}$ from both sides of the hole, so the limit exists. A limit fails to exist at the asymptote $x = -2$, not at the hole.`,
          String.raw`A hole is not always on the $x$-axis. The graph near $x = 2$ approaches $\frac{3}{4}$, not $0$.`,
        ], answer: 0 },
      { id: "p110-m05", type: "mcq", skill: "u1", topic: "1.10", calc: false, difficulty: "difficult",
        question: String.raw`Let $f(x) = \dfrac{(x + 1)^{2}(x - 4)}{(x + 1)(x - 4)^{2}}$. Which of the following statements are true?

I. The graph of $f$ has a hole at $x = -1$.
II. The graph of $f$ has a hole at $x = 4$.
III. $x = -1$ is a zero of $f$.`,
        choices: ["I only", "I and III only", "I and II only", "II and III only"],
        why: [
          String.raw`For $x \ne -1$ and $x \ne 4$, $f(x) = \dfrac{x + 1}{x - 4}$. The factor $x + 1$ has multiplicity $2$ on top and $1$ on the bottom, so it leaves no factor in the denominator: I is true, and the hole is at $(-1, 0)$. The factor $x - 4$ has multiplicity $1$ on top and $2$ on the bottom, so $x - 4$ remains in the denominator and $x = 4$ is a vertical asymptote: II is false. III is false because $f(-1)$ is undefined, even though the hole sits on the $x$-axis.`,
          String.raw`III is false. The reduced form is $0$ at $x = -1$, but $-1$ is not in the domain of $f$, so the graph has a hole on the $x$-axis there, not a zero.`,
          String.raw`II is false. After one factor of $x - 4$ cancels, another remains in the denominator, so $x = 4$ is a vertical asymptote.`,
          String.raw`II and III are both false: $x = 4$ is a vertical asymptote, and $f(-1)$ is undefined.`,
        ], answer: 0 },
      { id: "p110-m06", type: "mcq", skill: "u1", topic: "1.10", calc: false, difficulty: "moderate",
        question: String.raw`Let $k(x) = \dfrac{x^{3} - 8}{x^{2} + 3x - 10}$. What are the coordinates of the hole in the graph of $k$?`,
        choices: [String.raw`$\left(2, \frac{12}{7}\right)$`, String.raw`$(2, 0)$`, String.raw`$\left(2, \frac{8}{7}\right)$`, String.raw`$\left(\frac{12}{7}, 2\right)$`],
        why: [
          String.raw`The numerator and the denominator are both $0$ at $x = 2$. Factoring, $k(x) = \dfrac{(x - 2)(x^{2} + 2x + 4)}{(x - 2)(x + 5)} = \dfrac{x^{2} + 2x + 4}{x + 5}$ for $x \ne 2$, which approaches $\dfrac{4 + 4 + 4}{2 + 5} = \dfrac{12}{7}$ as $x$ approaches $2$.`,
          String.raw`At $x = 2$ the expression is $\frac{0}{0}$, which is not $0$. The values of $k$ near $x = 2$ approach $\frac{12}{7}$.`,
          String.raw`$\frac{8}{7}$ comes from factoring $x^{3} - 8$ as $(x - 2)(x^{2} + 4)$, which leaves out the middle term. The other factor is $x^{2} + 2x + 4$.`,
          String.raw`The coordinates are in the wrong order. The hole is at $x = 2$.`,
        ], answer: 0 },
      { id: "p110-f1a", type: "frq", skill: "u1", topic: "1.10", calc: false, set: "p110-s2", part: "(a)",
        prompt: String.raw`At what value of $x$ does the graph of $q$ have a hole? Give a reason for your answer.`,
        rows: [
          { name: "Hole with reason", earns: String.raw`$x = 3$, because $x - 3$ is a factor of the numerator, $(2x - 1)(x - 3)$, and of the denominator, $(x - 2)(x - 3)$, with the same multiplicity, $1$.` },
        ],
        solution: String.raw`The numerator factors as $(2x - 1)(x - 3)$ and the denominator as $(x - 2)(x - 3)$. The factor $x - 3$ has multiplicity $1$ in both, so after it cancels no factor $x - 3$ remains in the denominator. The graph has a hole at $x = 3$.` },
      { id: "p110-f1b", type: "frq", skill: "u1", topic: "1.10", calc: false, set: "p110-s2", part: "(b)",
        prompt: String.raw`Find the $y$-coordinate of the hole. Express your answer using limit notation.`,
        rows: [
          { name: "Limit", earns: String.raw`$\displaystyle \lim_{x \to 3} q(x) = \lim_{x \to 3} \frac{2x - 1}{x - 2} = 5$, so the hole is at $(3, 5)$.` },
        ],
        solution: String.raw`For $x \ne 3$, $q(x) = \dfrac{2x - 1}{x - 2}$. $$\lim_{x \to 3} q(x) = \lim_{x \to 3} \frac{2x - 1}{x - 2} = \frac{5}{1} = 5$$ The hole is at $(3, 5)$.` },
      { id: "p110-f1c", type: "frq", skill: "u1", topic: "1.10", calc: false, set: "p110-s2", part: "(c)",
        prompt: String.raw`The denominator of $q$ is also $0$ at $x = 2$. Explain why the graph of $q$ has a vertical asymptote at $x = 2$ instead of a hole.`,
        rows: [
          { name: "Reason", earns: String.raw`The factor $x - 2$ is in the denominator but not in the numerator (the numerator equals $-3$ at $x = 2$), so it does not cancel and $|q(x)|$ grows without bound as $x \to 2$.` },
        ],
        solution: String.raw`At $x = 2$ the numerator is $2(2)^{2} - 7(2) + 3 = 8 - 14 + 3 = -3$, which is not $0$, so $x - 2$ is not a factor of the numerator and does not cancel. Near $x = 2$ the reduced form $\dfrac{2x - 1}{x - 2}$ has a numerator close to $3$ and a denominator close to $0$, so $\displaystyle \lim_{x \to 2^{-}} q(x) = -\infty$ and $\displaystyle \lim_{x \to 2^{+}} q(x) = \infty$. The line $x = 2$ is a vertical asymptote.` },
    ],
  }],
};

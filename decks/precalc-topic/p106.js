// AP Precalculus topic quiz, 1.6 Polynomial Functions and End Behavior.
import { graph } from "../../plot.js";

// g(x) = 0.2x(x + 2)^2(1 - x)(x - 3) = -0.2x^5 + 1.8x^3 + 0.8x^2 - 2.4x: degree 5, leading coefficient -0.2.
// Touches the x-axis at x = -2, crosses at x = 0, 1, 3. Relative max near (-0.92, 1.62) and (2.38, 7.81), relative min near (0.55, -0.79).
const gF = (x) => 0.2 * x * (x + 2) ** 2 * (1 - x) * (x - 3);

// Four candidate graphs for p106-m04. Only C has both ends going down.
const cA = (x) => 0.15 * (x + 3) * (x + 1) * (x - 2); // odd degree, positive: down on the left, up on the right
const cB = (x) => -0.15 * (x + 2) * (x - 1) * (x - 3); // odd degree, negative: up on the left, down on the right
const cC = (x) => -0.1 * (x + 2) ** 2 * (x - 1) * (x - 3); // even degree, negative: down at both ends
const cD = (x) => 0.1 * x * x * (x + 3) * (x - 2); // even degree, positive: up at both ends
const small = (f, name, alt) => ({ title: name, blocks: [{ svg: graph({
  x: [-4, 4], y: [-5, 5], step: 1, labelEvery: 2, width: 240, height: 180, xname: "x", yname: "y",
  fns: [{ f, from: -4, to: 4 }], alt,
}) }] });

export const sets = {
  "p106-s1": {
    name: "A polynomial of degree 5",
    label: "Graph",
    intro: String.raw`Part of the graph of the polynomial function $g$ is shown below. The graph touches the $x$-axis at $x = -2$ and crosses it at $x = 0$, $x = 1$, and $x = 3$. Beyond the part that is shown, the graph continues in the same directions.`,
    sources: [{ title: "", blocks: [{ svg: graph({
      x: [-3.2, 3.6], y: [-6, 10], step: { x: 1, y: 2 }, xname: "x", yname: "y",
      fns: [{ f: gF, from: -3.2, to: 3.6, label: "g", labelAt: 1.9 }],
      dots: [[-2, 0, "closed"], [0, 0, "closed"], [1, 0, "closed"], [3, 0, "closed"]],
      alt: "Graph of g. It comes down from the top left, touches the x-axis at x = -2 without crossing, rises to a high point near (-0.9, 1.6), crosses the x-axis at x = 0 to a low point near (0.5, -0.8), crosses again at x = 1, rises to a high point near (2.4, 7.8), then falls across the x-axis at x = 3 and continues down toward the bottom right.",
    }) }] }],
  },
  "p106-s2": {
    name: "Four graphs",
    label: "Graph",
    intro: String.raw`Four graphs are shown below. In each graph, the curve continues in the same directions beyond the part that is shown.`,
    sources: [
      small(cA, "Graph A", "Graph A. The curve comes up from the bottom left, crosses the x-axis three times, and rises toward the top right."),
      small(cB, "Graph B", "Graph B. The curve comes down from the top left, crosses the x-axis three times, and falls toward the bottom right."),
      small(cC, "Graph C", "Graph C. The curve rises from the bottom left, touches the x-axis at x = -2 from below, dips, rises across the x-axis at x = 1 to a high point, crosses back at x = 3, and falls toward the bottom right."),
      small(cD, "Graph D", "Graph D. The curve comes down from the top left, crosses the x-axis at x = -3, touches it at the origin from below, crosses at x = 2, and rises toward the top right."),
    ],
  },
  "p106-s3": {
    name: "A product of factors",
    label: "Free response",
    intro: String.raw`Let $p$ be the function given by $p(x) = (2x + 1)(3 - x)^{3}$.`,
    sources: [{ title: "", blocks: [{ p: String.raw`A calculator is not allowed on this question. Show the work that leads to each answer.` }] }],
  },
};

export default {
  forms: [{
    id: "p106",
    name: "Topic 1.6 Quiz: Polynomial Functions and End Behavior",
    group: "Unit 1: Polynomial and Rational Functions",
    items: [
      { id: "p106-m01", type: "mcq", skill: "u1", topic: "1.6", calc: false, difficulty: "easy",
        question: String.raw`Which polynomial function satisfies $\displaystyle \lim_{x \to -\infty} f(x) = \infty$ and $\displaystyle \lim_{x \to \infty} f(x) = -\infty$?`,
        choices: [String.raw`$f(x) = 4 - 2x^{3}$`, String.raw`$f(x) = 2x^{3} + 4x$`, String.raw`$f(x) = 4x - 2x^{2}$`, String.raw`$f(x) = 2x^{2} + 4x$`],
        why: [
          String.raw`The leading term is $-2x^{3}$: odd degree and a negative leading coefficient. For large negative $x$, $-2x^{3}$ is large and positive, and for large positive $x$ it is large and negative, so the outputs increase without bound on the left and decrease without bound on the right.`,
          String.raw`The leading term $2x^{3}$ has a positive coefficient, so $f(x) \to -\infty$ as $x \to -\infty$ and $f(x) \to \infty$ as $x \to \infty$. Both ends are the reverse of what is given.`,
          String.raw`The leading term is $-2x^{2}$, not the first-written term $4x$. An even degree with a negative leading coefficient sends both ends to $-\infty$.`,
          String.raw`The leading term $2x^{2}$ has even degree and a positive coefficient, so both ends go to $\infty$.`,
        ], answer: 0 },
      { id: "p106-m02", type: "mcq", skill: "u1", topic: "1.6", calc: false, difficulty: "easy",
        question: String.raw`Let $p(x) = -3x^{5} + 2x^{2} + 7$. Which of the following describes the end behavior of $p$?`,
        choices: [
          String.raw`$\lim_{x \to -\infty} p(x) = \infty$ and $\lim_{x \to \infty} p(x) = -\infty$`,
          String.raw`$\lim_{x \to -\infty} p(x) = -\infty$ and $\lim_{x \to \infty} p(x) = \infty$`,
          String.raw`$\lim_{x \to -\infty} p(x) = -\infty$ and $\lim_{x \to \infty} p(x) = -\infty$`,
          String.raw`$\lim_{x \to -\infty} p(x) = \infty$ and $\lim_{x \to \infty} p(x) = \infty$`,
        ],
        why: [
          String.raw`The leading term $-3x^{5}$ controls the end behavior. For $x$ large and negative, $x^{5}$ is large and negative, so $-3x^{5}$ is large and positive. For $x$ large and positive, $-3x^{5}$ is large and negative.`,
          String.raw`This is the end behavior of $3x^{5}$. The negative leading coefficient reflects both ends.`,
          String.raw`Both ends going to $-\infty$ fits an even degree with a negative leading coefficient. The degree here is $5$, which is odd, so the ends go in opposite directions.`,
          String.raw`Both ends going to $\infty$ fits an even degree with a positive leading coefficient. The degree is odd and the leading coefficient is negative.`,
        ], answer: 0 },
      { id: "p106-m03", type: "mcq", skill: "u1", topic: "1.6", calc: false, difficulty: "moderate", set: "p106-s1",
        question: String.raw`Which of the following could define $g$?`,
        choices: [String.raw`$g(x) = 0.2x(x + 2)^{2}(1 - x)(x - 3)$`, String.raw`$g(x) = 0.2x(x + 2)^{2}(x - 1)(x - 3)^{2}$`, String.raw`$g(x) = -0.2x(x + 2)^{2}(1 - x)(x - 3)$`, String.raw`$g(x) = 0.2x^{2}(x + 2)^{2}(1 - x)(x - 3)$`],
        why: [
          String.raw`The leading term is $0.2 \cdot x \cdot x^{2} \cdot (-x) \cdot x = -0.2x^{5}$: odd degree and a negative leading coefficient, so the graph rises on the left and falls on the right, as shown. The squared factor $(x + 2)^{2}$ gives the touch at $x = -2$, and the other factors give the crossings at $0$, $1$, and $3$.`,
          String.raw`The leading term is $0.2x^{6}$, so both ends would go up. The graph falls on the right.`,
          String.raw`The factor $(1 - x)$ contributes $-x$, so the leading term here is $-0.2 \cdot (-x^{5}) = 0.2x^{5}$. The graph would fall on the left and rise on the right.`,
          String.raw`The leading term is $-0.2x^{6}$, an even degree, so both ends would go down. The graph rises on the left.`,
        ], answer: 0 },
      { id: "p106-m04", type: "mcq", skill: "u1", topic: "1.6", calc: false, difficulty: "easy", set: "p106-s2",
        question: String.raw`Which graph could be the graph of a polynomial function of even degree with a negative leading coefficient?`,
        choices: ["Graph C", "Graph A", "Graph B", "Graph D"],
        why: [
          String.raw`An even degree sends both ends in the same direction, and a negative leading coefficient makes that direction down: $\displaystyle \lim_{x \to -\infty} f(x) = -\infty$ and $\displaystyle \lim_{x \to \infty} f(x) = -\infty$. Only Graph C falls at both ends.`,
          String.raw`Graph A falls on the left and rises on the right. That is an odd degree with a positive leading coefficient.`,
          String.raw`Graph B rises on the left and falls on the right. That is an odd degree with a negative leading coefficient.`,
          String.raw`Graph D rises at both ends. That is an even degree with a positive leading coefficient.`,
        ], answer: 0 },
      { id: "p106-m05", type: "mcq", skill: "u1", topic: "1.6", calc: false, difficulty: "moderate",
        question: String.raw`Let $h(x) = (1 - 2x)^{3}(x + 5)^{2}$. Which of the following describes the end behavior of $h$?`,
        choices: [
          String.raw`$\lim_{x \to -\infty} h(x) = \infty$ and $\lim_{x \to \infty} h(x) = -\infty$`,
          String.raw`$\lim_{x \to -\infty} h(x) = -\infty$ and $\lim_{x \to \infty} h(x) = \infty$`,
          String.raw`$\lim_{x \to -\infty} h(x) = \infty$ and $\lim_{x \to \infty} h(x) = \infty$`,
          String.raw`$\lim_{x \to -\infty} h(x) = -\infty$ and $\lim_{x \to \infty} h(x) = -\infty$`,
        ],
        why: [
          String.raw`The leading term is $(-2x)^{3} \cdot x^{2} = -8x^{5}$. The degree $5$ is odd and the leading coefficient $-8$ is negative, so $h(x) \to \infty$ on the left and $h(x) \to -\infty$ on the right.`,
          String.raw`This treats the leading coefficient as positive. In $(1 - 2x)^{3}$ the $x$ term is $-2x$, and $(-2x)^{3} = -8x^{3}$.`,
          String.raw`This multiplies the exponents, $3 \cdot 2 = 6$, and treats the leading coefficient as positive. The degrees add, $3 + 2 = 5$, and the leading coefficient is $(-2)^{3} = -8$.`,
          String.raw`This multiplies the exponents, $3 \cdot 2 = 6$, to get an even degree. The degrees of the factors add to $5$, so the ends go in opposite directions.`,
        ], answer: 0 },
      { id: "p106-m06", type: "mcq", skill: "u1", topic: "1.6", calc: false, difficulty: "difficult",
        question: String.raw`Let $p(x) = x^{n}(2 - x)^{3}$, where $n$ is a positive integer. If $\displaystyle \lim_{x \to -\infty} p(x) = -\infty$, which of the following could be the value of $n$, and what is $\displaystyle \lim_{x \to \infty} p(x)$?`,
        choices: [
          String.raw`$n = 3$, and $\lim_{x \to \infty} p(x) = -\infty$`,
          String.raw`$n = 2$, and $\lim_{x \to \infty} p(x) = -\infty$`,
          String.raw`$n = 3$, and $\lim_{x \to \infty} p(x) = \infty$`,
          String.raw`$n = 2$, and $\lim_{x \to \infty} p(x) = \infty$`,
        ],
        why: [
          String.raw`The leading term is $x^{n}(-x)^{3} = -x^{n + 3}$. For $p(x) \to -\infty$ as $x \to -\infty$, $x^{n + 3}$ must go to $\infty$ there, so $n + 3$ is even and $n$ is odd; $n = 3$ works. As $x \to \infty$, $-x^{n + 3} \to -\infty$ for every $n$.`,
          String.raw`With $n = 2$ the leading term is $-x^{5}$, and $-x^{5} \to \infty$ as $x \to -\infty$. That contradicts the given left-end limit.`,
          String.raw`$n = 3$ is right, but then $p$ has degree $6$, which is even, so both ends go the same way. The left end goes to $-\infty$, so the right end does too.`,
          String.raw`This reads $(2 - x)^{3}$ as $(x - 2)^{3}$, so the leading term looks like $x^{n + 3}$ and both answers flip. The leading term of $(2 - x)^{3}$ is $(-x)^{3} = -x^{3}$.`,
        ], answer: 0 },
      { id: "p106-f1a", type: "frq", skill: "u1", topic: "1.6", calc: false, set: "p106-s3", part: "(a)",
        prompt: String.raw`Find the degree and the leading coefficient of $p$.`,
        rows: [{ name: "Degree and leading coefficient", earns: String.raw`Degree $4$ and leading coefficient $-2$, from the leading term $(2x)(-x)^{3} = -2x^{4}$.` }],
        solution: String.raw`The leading term of $2x + 1$ is $2x$, and the leading term of $(3 - x)^{3}$ is $(-x)^{3} = -x^{3}$. The leading term of $p$ is their product, $2x \cdot (-x^{3}) = -2x^{4}$. The degree is $4$ and the leading coefficient is $-2$.` },
      { id: "p106-f1b", type: "frq", skill: "u1", topic: "1.6", calc: false, set: "p106-s3", part: "(b)",
        prompt: String.raw`Describe the end behavior of $p$ using limit notation. Give a reason for your answer.`,
        rows: [
          { name: "Limits", earns: String.raw`$\displaystyle \lim_{x \to -\infty} p(x) = -\infty$ and $\displaystyle \lim_{x \to \infty} p(x) = -\infty$, both in limit notation.` },
          { name: "Reason", earns: String.raw`The degree $4$ is even and the leading coefficient $-2$ is negative, so the leading term $-2x^{4}$ decreases without bound as $x$ increases or decreases without bound.` },
        ],
        solution: String.raw`For large $|x|$, $p(x)$ behaves like its leading term $-2x^{4}$. Since $x^{4}$ increases without bound as $x \to \infty$ and as $x \to -\infty$, $-2x^{4}$ decreases without bound at both ends: $$\lim_{x \to -\infty} p(x) = -\infty \quad \text{and} \quad \lim_{x \to \infty} p(x) = -\infty$$` },
      { id: "p106-f1c", type: "frq", skill: "u1", topic: "1.6", calc: false, set: "p106-s3", part: "(c)",
        prompt: String.raw`Let $q(x) = p(x) + kx^{5}$, where $k$ is a nonzero constant. For what values of $k$ is $\displaystyle \lim_{x \to \infty} q(x) = \infty$? Give a reason for your answer.`,
        rows: [{ name: "Values with reason", earns: String.raw`$k > 0$, because $kx^{5}$ is the leading term of $q$ (degree $5$ is greater than $4$), and $kx^{5} \to \infty$ as $x \to \infty$ only when $k > 0$.` }],
        solution: String.raw`Since $k \ne 0$ and $5 > 4$, the leading term of $q$ is $kx^{5}$. As $x \to \infty$, $x^{5} \to \infty$, so $kx^{5} \to \infty$ when $k > 0$ and $kx^{5} \to -\infty$ when $k < 0$. So $\displaystyle \lim_{x \to \infty} q(x) = \infty$ exactly when $k > 0$.` },
    ],
  }],
};

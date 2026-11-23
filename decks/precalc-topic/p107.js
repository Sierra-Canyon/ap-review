// AP Precalculus topic quiz, 1.7 Rational Functions and End Behavior.
import { graph } from "../../plot.js";

// r(x) = (2x + 2) / (x - 3): horizontal asymptote y = 2, vertical asymptote x = 3, zero at x = -1, r(0) = -2/3.
const rG = (x) => (2 * x + 2) / (x - 3);

export const sets = {
  "p107-s1": {
    name: "A rational function with two asymptotes",
    label: "Graph",
    intro: String.raw`The graph of the rational function $r$ is shown below. The dashed lines $y = 2$ and $x = 3$ are asymptotes of the graph, and the graph crosses the $x$-axis at $x = -1$.`,
    sources: [{ title: "", blocks: [{ svg: graph({
      x: [-8, 10], y: [-6, 10], step: { x: 1, y: 2 }, labelEvery: 2, xname: "x", yname: "y",
      fns: [{ f: rG, from: -8, to: 2.85 }, { f: rG, from: 3.15, to: 10 }],
      vlines: [{ x: 3 }], hlines: [{ y: 2 }],
      dots: [[-1, 0, "closed"]],
      alt: "Graph of r with a dashed horizontal asymptote y = 2 and a dashed vertical asymptote x = 3. On the left, the curve comes in just below y = 2, falls through (-1, 0) and (0, -2/3), and drops toward negative infinity as x approaches 3 from the left. On the right of x = 3, the curve comes down from positive infinity and levels off just above y = 2.",
    }) }] }],
  },
  "p107-s2": {
    name: "Values of r for inputs far from 0",
    label: "Table",
    intro: String.raw`The table below gives values of the rational function $r$, rounded to four decimal places, for selected inputs far from $0$.`,
    sources: [{ title: "", blocks: [{ table: { head: ["$x$", "$-1000$", "$-100$", "$-10$", "$10$", "$100$", "$1000$"], rows: [["$r(x)$", "$-2.0015$", "$-2.0155$", "$-2.2051$", "$-1.8974$", "$-1.9855$", "$-1.9985$"]] } }] }],
  },
  "p107-s3": {
    name: "Two related rational functions",
    label: "Free response",
    intro: String.raw`Let $f$ and $g$ be the functions given by $$f(x) = \dfrac{6x^{2} - 4x}{3x^{2} + 2} \quad \text{and} \quad g(x) = \dfrac{6x^{3} - 4x^{2}}{3x^{2} + 2}.$$`,
    sources: [{ title: "", blocks: [{ p: String.raw`A calculator is not allowed on this question. Show the work that leads to each answer.` }] }],
  },
};

export default {
  forms: [{
    id: "p107",
    name: "Topic 1.7 Quiz: Rational Functions and End Behavior",
    group: "Unit 1: Polynomial and Rational Functions",
    items: [
      { id: "p107-m01", type: "mcq", skill: "u1", topic: "1.7", calc: false, difficulty: "easy",
        question: String.raw`What is the horizontal asymptote of the graph of $h(x) = \dfrac{12x^{2} + 5}{4x^{2} - x + 3}$?`,
        choices: ["$y = 3$", String.raw`$y = \frac{5}{3}$`, String.raw`$y = \frac{1}{3}$`, "$y = 12$"],
        why: [
          String.raw`The numerator and denominator both have degree $2$, so as $x \to \pm\infty$, $h(x)$ approaches the ratio of the leading coefficients, $\dfrac{12}{4} = 3$.`,
          String.raw`$\dfrac{5}{3}$ is the ratio of the constant terms, which is $h(0)$. The leading terms control the end behavior.`,
          String.raw`$\dfrac{1}{3}$ is $\dfrac{4}{12}$, the ratio of the leading coefficients turned upside down.`,
          String.raw`$12$ is the leading coefficient of the numerator alone. It must be divided by the leading coefficient of the denominator, $4$.`,
        ], answer: 0 },
      { id: "p107-m02", type: "mcq", skill: "u1", topic: "1.7", calc: false, difficulty: "easy", set: "p107-s1",
        question: String.raw`Which of the following could define $r$?`,
        choices: [String.raw`$r(x) = \frac{2x + 2}{x - 3}$`, String.raw`$r(x) = \frac{x + 1}{2x - 6}$`, String.raw`$r(x) = \frac{x + 1}{x - 3}$`, String.raw`$r(x) = \frac{2x^{2} + 2}{x - 3}$`],
        why: [
          String.raw`The numerator and denominator both have degree $1$, so the horizontal asymptote is $y = \dfrac{2}{1} = 2$. The denominator is $0$ at $x = 3$, and the numerator $2(x + 1)$ is $0$ at $x = -1$. All three match the graph.`,
          String.raw`The ratio of the leading coefficients is $\dfrac{1}{2}$, so the horizontal asymptote would be $y = \dfrac{1}{2}$, not $y = 2$.`,
          String.raw`The ratio of the leading coefficients is $\dfrac{1}{1}$, so the horizontal asymptote would be $y = 1$, not $y = 2$.`,
          String.raw`The numerator has degree $2$, one more than the denominator, so the graph would have a slant asymptote and no horizontal asymptote. Also, $2x^{2} + 2$ is never $0$.`,
        ], answer: 0 },
      { id: "p107-m03", type: "mcq", skill: "u1", topic: "1.7", calc: false, difficulty: "moderate",
        question: String.raw`Let $r(x) = \dfrac{1 - 4x^{3}}{(x + 2)(3 - x)}$. Which of the following describes the end behavior of $r$?`,
        choices: [
          String.raw`$\lim_{x \to -\infty} r(x) = -\infty$ and $\lim_{x \to \infty} r(x) = \infty$`,
          String.raw`$\lim_{x \to -\infty} r(x) = \infty$ and $\lim_{x \to \infty} r(x) = -\infty$`,
          String.raw`$\lim_{x \to -\infty} r(x) = 4$ and $\lim_{x \to \infty} r(x) = 4$`,
          String.raw`$\lim_{x \to -\infty} r(x) = -4$ and $\lim_{x \to \infty} r(x) = -4$`,
        ],
        why: [
          String.raw`The leading term of the numerator is $-4x^{3}$. The leading term of the denominator is $x \cdot (-x) = -x^{2}$. Their quotient is $\dfrac{-4x^{3}}{-x^{2}} = 4x$, so $r(x)$ behaves like $4x$ for large $|x|$: it decreases without bound on the left and increases without bound on the right.`,
          String.raw`This takes the denominator's leading term as $x^{2}$. The factor $(3 - x)$ contributes $-x$, so the leading term is $-x^{2}$ and the quotient is $4x$, not $-4x$.`,
          String.raw`$4$ is the ratio of the leading coefficients, which gives the limit only when the degrees are equal. The numerator's degree, $3$, is greater than the denominator's, $2$, so $r(x)$ is unbounded.`,
          String.raw`This uses the ratio of the leading coefficients, which applies only when the degrees are equal, and also takes the denominator's leading term as $x^{2}$.`,
        ], answer: 0 },
      { id: "p107-m04", type: "mcq", skill: "u1", topic: "1.7", calc: false, difficulty: "easy",
        question: String.raw`The graph of which function has a slant asymptote?`,
        choices: [String.raw`$y = \frac{4x^{3}}{x^{2} + 1}$`, String.raw`$y = \frac{4x^{3} + 1}{x^{4} + 1}$`, String.raw`$y = \frac{4x^{3} - 1}{x^{3} + 1}$`, String.raw`$y = \frac{4x^{3} + x}{x + 1}$`],
        why: [
          String.raw`The degree of the numerator, $3$, is exactly one more than the degree of the denominator, $2$. The quotient of the leading terms is $4x$, so the graph has a slant asymptote.`,
          String.raw`The denominator has the greater degree, so $y \to 0$ as $x \to \pm\infty$. The graph has the horizontal asymptote $y = 0$.`,
          String.raw`The degrees are equal, so the graph has the horizontal asymptote $y = \dfrac{4}{1} = 4$.`,
          String.raw`The degree of the numerator is two more than the degree of the denominator. The quotient of the leading terms is $4x^{2}$, so the end behavior is like a parabola, not a line.`,
        ], answer: 0 },
      { id: "p107-m05", type: "mcq", skill: "u1", topic: "1.7", calc: false, difficulty: "moderate", set: "p107-s2",
        question: String.raw`Which of the following could define $r$?`,
        choices: [String.raw`$r(x) = \frac{4x^{2} - 3x}{5 - 2x^{2}}$`, String.raw`$r(x) = \frac{4x^{2} - 3x}{2x^{2} + 5}$`, String.raw`$r(x) = \frac{5 - 2x^{2}}{4x^{2} - 3x}$`, String.raw`$r(x) = \frac{4x^{3} - 3x}{5 - 2x^{2}}$`],
        why: [
          String.raw`The table shows $r(x)$ getting close to $-2$ at both ends. The numerator and denominator have degree $2$ with leading terms $4x^{2}$ and $-2x^{2}$, so the limit at both ends is $\dfrac{4}{-2} = -2$. Check: $r(10) = \dfrac{370}{-195} \approx -1.8974$.`,
          String.raw`Here the leading terms are $4x^{2}$ and $2x^{2}$, so $r(x)$ approaches $2$, not $-2$. Writing the denominator as $5 - 2x^{2}$ puts its leading term second, and its sign matters.`,
          String.raw`This is the reciprocal. Its limit at both ends is $\dfrac{-2}{4} = -\dfrac{1}{2}$.`,
          String.raw`The quotient of the leading terms is $\dfrac{4x^{3}}{-2x^{2}} = -2x$, so $r(x)$ would increase without bound on the left and decrease without bound on the right instead of leveling off.`,
        ], answer: 0 },
      { id: "p107-m06", type: "mcq", skill: "u1", topic: "1.7", calc: false, difficulty: "difficult",
        question: String.raw`Let $r(x) = \dfrac{p(x)}{q(x)}$, where $p$ and $q$ are polynomial functions, and $\displaystyle \lim_{x \to \infty} r(x) = \dfrac{3}{2}$. Which of the following must be true? $$\begin{aligned} &\text{I. } p \text{ and } q \text{ have the same degree.} \\ &\text{II. } \lim_{x \to -\infty} r(x) = \tfrac{3}{2}. \\ &\text{III. The graph of } r \text{ never crosses the line } y = \tfrac{3}{2}. \end{aligned}$$`,
        choices: ["I and II only", "I and III only", "II and III only", "I, II, and III"],
        why: [
          String.raw`I: a nonzero finite limit at infinity happens only when the degrees are equal; a greater numerator degree gives an unbounded limit, and a greater denominator degree gives $0$. II: with equal degrees, $r(x)$ approaches the ratio of the leading coefficients at both ends. III: a graph can cross its horizontal asymptote. For example, $\dfrac{3x^{2} + x}{2x^{2} + 1}$ equals $\dfrac{3}{2}$ at $x = \dfrac{3}{2}$.`,
          String.raw`III does not have to be true. $\dfrac{3x^{2} + x}{2x^{2} + 1} = \dfrac{3}{2}$ when $2x = 3$, so that graph crosses $y = \dfrac{3}{2}$ at $x = \dfrac{3}{2}$. II must be true.`,
          String.raw`I must be true, and III does not have to be. If the degrees differed, the limit would be $0$ or unbounded, not $\dfrac{3}{2}$.`,
          String.raw`III does not have to be true. A horizontal asymptote describes the ends of the graph, and the graph can cross it at finite $x$.`,
        ], answer: 0 },
      { id: "p107-f1a", type: "frq", skill: "u1", topic: "1.7", calc: false, set: "p107-s3", part: "(a)",
        prompt: String.raw`Write an equation for the horizontal asymptote of the graph of $f$. Find the value of $x$ at which the graph of $f$ crosses this asymptote.`,
        rows: [
          { name: "Asymptote", earns: String.raw`$y = 2$, because the degrees are equal and the ratio of the leading coefficients is $\dfrac{6}{3} = 2$.` },
          { name: "Crossing", earns: String.raw`$x = -1$, from solving $6x^{2} - 4x = 2(3x^{2} + 2)$.` },
        ],
        solution: String.raw`The numerator and the denominator both have degree $2$, so $\displaystyle \lim_{x \to \pm\infty} f(x) = \frac{6}{3} = 2$ and the horizontal asymptote is $y = 2$. The graph meets it where $\dfrac{6x^{2} - 4x}{3x^{2} + 2} = 2$. Since $3x^{2} + 2 > 0$, this gives $6x^{2} - 4x = 6x^{2} + 4$, so $-4x = 4$ and $x = -1$. Check: $f(-1) = \dfrac{6 + 4}{3 + 2} = 2$.` },
      { id: "p107-f1b", type: "frq", skill: "u1", topic: "1.7", calc: false, set: "p107-s3", part: "(b)",
        prompt: String.raw`Describe the end behavior of $g$ using limit notation. Give a reason for your answer.`,
        rows: [
          { name: "Limits", earns: String.raw`$\displaystyle \lim_{x \to -\infty} g(x) = -\infty$ and $\displaystyle \lim_{x \to \infty} g(x) = \infty$, both in limit notation.` },
          { name: "Reason", earns: String.raw`The quotient of the leading terms is $\dfrac{6x^{3}}{3x^{2}} = 2x$, so for large $|x|$, $g(x)$ behaves like $2x$.` },
        ],
        solution: String.raw`The numerator has degree $3$ and the denominator has degree $2$. The quotient of the leading terms is $\dfrac{6x^{3}}{3x^{2}} = 2x$, so for large $|x|$ the values of $g(x)$ behave like $2x$, which decreases without bound on the left and increases without bound on the right: $$\lim_{x \to -\infty} g(x) = -\infty \quad \text{and} \quad \lim_{x \to \infty} g(x) = \infty$$` },
    ],
  }],
};

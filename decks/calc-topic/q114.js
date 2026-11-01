import { graph } from "../../plot.js";

export const sets = {
  "q114-s1": {
    name: "The graph of f",
    label: "Graph",
    intro: String.raw`The graph of the function $f$ is shown below. The dashed lines are $x = 1$ and $y = 1$.`,
    sources: [{ title: "", blocks: [
      { svg: graph({
        x: [-3, 5], y: [-4, 6], xname: "x", yname: "y",
        fns: [{ f: (x) => x / (x - 1), from: -3, to: 0.99 }, { f: (x) => x / (x - 1), from: 1.01, to: 5 }],
        vlines: [{ x: 1 }], hlines: [{ y: 1 }],
        alt: "Graph of f with a dashed vertical line at x = 1 and a dashed horizontal line at y = 1. To the left of x = 1 the curve starts near (-3, 0.75), passes through (0, 0), and falls without bound as x approaches 1 from the left. To the right of x = 1 the curve comes down from above, rising without bound as x approaches 1 from the right, passes through (2, 2) and (3, 1.5), and levels off toward y = 1.",
      }) },
    ] }],
  },
  "q114-s2": {
    name: "The function g",
    label: "Free response",
    intro: String.raw`Let $g$ be the function defined by $g(x) = \dfrac{2x + 1}{x^2 - x - 6}$.`,
    sources: [{ title: "", blocks: [{ p: String.raw`Answer each part without a calculator. Show the work that leads to each answer.` }] }],
  },
};

const items = [
  {
    id: "q114-m1", type: "mcq", skill: "u1", topic: "1.14", calc: false,
    question: String.raw`$\displaystyle \lim_{x \to 4^{+}} \dfrac{x + 1}{16 - x^2}$ is`,
    choices: [String.raw`$-\infty$`, String.raw`$\infty$`, "$-1$", "$0$"],
    why: [
      String.raw`As $x \to 4^{+}$, the numerator approaches $5$. For $x > 4$, $x^2 > 16$, so $16 - x^2$ is negative and approaches $0$. A positive number divided by small negative numbers decreases without bound.`,
      String.raw`This misses the sign of the denominator. For $x$ slightly greater than $4$, $16 - x^2 < 0$.`,
      String.raw`$-1$ is the ratio of the leading coefficients, $1$ and $-1$. Leading coefficients say nothing about the behavior near $x = 4$, where the numerator approaches $5$ and the denominator approaches $0$.`,
      String.raw`The numerator approaches $5$, not $0$. A numerator near $5$ over a denominator near $0$ is unbounded.`,
    ],
    answer: 0,
  },
  {
    id: "q114-m2", type: "mcq", skill: "u1", topic: "1.14", calc: false,
    question: String.raw`On the interval $0 < x < \pi$, what are all the vertical asymptotes of the graph of $y = \tan(2x)$?`,
    choices: [String.raw`$x = \frac{\pi}{4}$ and $x = \frac{3\pi}{4}$`, String.raw`$x = \frac{\pi}{2}$ only`, String.raw`$x = \frac{\pi}{4}$ only`, String.raw`$x = \frac{\pi}{2}$ and $x = \pi$`],
    why: [
      String.raw`$\tan(2x) = \dfrac{\sin(2x)}{\cos(2x)}$ is unbounded where $\cos(2x) = 0$ and $\sin(2x) \neq 0$. On $0 < x < \pi$, $2x$ is between $0$ and $2\pi$, so $2x = \dfrac{\pi}{2}$ or $2x = \dfrac{3\pi}{2}$, which gives $x = \dfrac{\pi}{4}$ and $x = \dfrac{3\pi}{4}$.`,
      String.raw`$x = \frac{\pi}{2}$ is the asymptote of $\tan x$. For $\tan(2x)$, at $x = \frac{\pi}{2}$ the value is $\tan \pi = 0$.`,
      String.raw`This finds only $2x = \frac{\pi}{2}$. On $0 < x < \pi$, $2x$ also reaches $\frac{3\pi}{2}$.`,
      String.raw`$\tan(2x) = 0$ at $x = \frac{\pi}{2}$, and $x = \pi$ is outside the open interval. These come from the zeros of $\sin(2x)$, not $\cos(2x)$.`,
    ],
    answer: 0,
  },
  {
    id: "q114-m3", type: "mcq", skill: "u1", topic: "1.14", calc: false,
    question: String.raw`$\displaystyle \lim_{x \to 1} \dfrac{x - 4}{(x - 1)^2}$ is`,
    choices: [String.raw`$-\infty$`, String.raw`$\infty$`, "$-3$", "$0$"],
    why: [
      String.raw`As $x \to 1$, the numerator approaches $-3$, and $(x - 1)^2$ is positive on both sides and approaches $0$. A negative number over small positive numbers decreases without bound from both sides.`,
      String.raw`The numerator approaches $-3$, which is negative, so the quotient is negative near $x = 1$.`,
      String.raw`$-3$ is the limit of the numerator alone. The denominator approaches $0$.`,
      String.raw`The denominator approaches $0$ while the numerator does not, so the quotient grows in size without bound.`,
    ],
    answer: 0,
  },
  {
    id: "q114-m4", type: "mcq", skill: "u1", topic: "1.14", calc: false,
    question: String.raw`$\displaystyle \lim_{x \to \pi^{+}} \csc x$ is`,
    choices: [String.raw`$-\infty$`, String.raw`$\infty$`, "$0$", "$-1$"],
    why: [
      String.raw`$\csc x = \dfrac{1}{\sin x}$. For $x$ slightly greater than $\pi$, $\sin x$ is negative and approaches $0$, so $\dfrac{1}{\sin x}$ decreases without bound.`,
      String.raw`$\infty$ is the limit from the left. Just to the right of $\pi$, $\sin x < 0$.`,
      String.raw`$\sin \pi = 0$, but $\csc x$ is the reciprocal of $\sin x$, so it grows in size without bound.`,
      String.raw`$-1$ is $\cos \pi$. The cosecant is $\dfrac{1}{\sin x}$.`,
    ],
    answer: 0,
  },
  {
    id: "q114-m5", type: "mcq", skill: "u1", topic: "1.14", calc: false, set: "q114-s1",
    question: "Which of the following is true?",
    choices: [String.raw`$\lim_{x \to 1^{-}} f(x) = -\infty$`, String.raw`$\lim_{x \to 1^{+}} f(x) = -\infty$`, String.raw`$\lim_{x \to 1} f(x) = \infty$`, String.raw`$\lim_{x \to 1^{-}} f(x) = 1$`],
    why: [
      String.raw`To the left of the dashed line $x = 1$, the graph falls without bound, so $\lim_{x \to 1^{-}} f(x) = -\infty$.`,
      String.raw`To the right of $x = 1$ the graph rises without bound, so the right-hand limit is $\infty$.`,
      String.raw`The two sides go in opposite directions, $-\infty$ on the left and $\infty$ on the right, so the two-sided limit is neither $\infty$ nor $-\infty$.`,
      String.raw`$y = 1$ is the horizontal asymptote, which describes $f(x)$ as $x \to \infty$, not as $x \to 1$.`,
    ],
    answer: 0,
  },
  {
    id: "q114-m6", type: "mcq", skill: "u1", topic: "1.14", calc: false,
    question: String.raw`Which of the following functions has a vertical asymptote at $x = 3$?`,
    choices: [String.raw`$\ln(x - 3)$`, String.raw`$\frac{x^2 - 9}{x - 3}$`, String.raw`$\frac{x - 3}{x + 3}$`, String.raw`$e^{x - 3}$`],
    why: [
      String.raw`As $x \to 3^{+}$, $x - 3 \to 0^{+}$ and $\ln(x - 3) \to -\infty$, so $x = 3$ is a vertical asymptote.`,
      String.raw`$\dfrac{x^2 - 9}{x - 3} = x + 3$ for $x \neq 3$, so the limit at $x = 3$ is $6$: a hole, not an asymptote.`,
      String.raw`The denominator is $0$ at $x = -3$, so the asymptote is $x = -3$. At $x = 3$ the function equals $0$.`,
      String.raw`$e^{x - 3}$ is defined and continuous for all $x$. At $x = 3$ it equals $1$.`,
    ],
    answer: 0,
  },
  {
    id: "q114-f1a", type: "frq", skill: "u1", topic: "1.14", calc: false, set: "q114-s2", part: "(a)",
    prompt: String.raw`Find the equation of each vertical asymptote of the graph of $g$. Explain the reasoning.`,
    rows: [
      { name: "Asymptotes with reason", earns: String.raw`$x = 3$ and $x = -2$, because $x^2 - x - 6 = (x - 3)(x + 2)$ is $0$ there while the numerator $2x + 1$ is not $0$ (it equals $7$ and $-3$).` },
    ],
    solution: String.raw`Factor the denominator: $x^2 - x - 6 = (x - 3)(x + 2)$, which is $0$ at $x = 3$ and $x = -2$. The numerator is $2(3) + 1 = 7$ at $x = 3$ and $2(-2) + 1 = -3$ at $x = -2$, neither $0$, so no factor cancels. The vertical asymptotes are $x = 3$ and $x = -2$.`,
  },
  {
    id: "q114-f1b", type: "frq", skill: "u1", topic: "1.14", calc: false, set: "q114-s2", part: "(b)",
    prompt: String.raw`Find $\displaystyle \lim_{x \to 3^{-}} g(x)$ and $\displaystyle \lim_{x \to 3^{+}} g(x)$. Explain the reasoning.`,
    rows: [
      { name: "Left-hand limit", earns: String.raw`$\lim_{x \to 3^{-}} g(x) = -\infty$, because the numerator approaches $7$, $x + 2$ approaches $5$, and $x - 3$ is negative and approaches $0$.` },
      { name: "Right-hand limit", earns: String.raw`$\lim_{x \to 3^{+}} g(x) = \infty$, because $x - 3$ is positive and approaches $0$.` },
    ],
    solution: String.raw`Write $g(x) = \dfrac{2x + 1}{(x - 3)(x + 2)}$. As $x \to 3$, the numerator approaches $7$ and $x + 2$ approaches $5$. For $x < 3$, $x - 3 < 0$, so the denominator is negative and approaches $0$, and $\displaystyle \lim_{x \to 3^{-}} g(x) = -\infty$. For $x > 3$, $x - 3 > 0$, so the denominator is positive and approaches $0$, and $\displaystyle \lim_{x \to 3^{+}} g(x) = \infty$.`,
  },
  {
    id: "q114-f1c", type: "frq", skill: "u1", topic: "1.14", calc: false, set: "q114-s2", part: "(c)",
    prompt: String.raw`Find $\displaystyle \lim_{x \to -2^{+}} g(x)$. Explain the reasoning.`,
    rows: [
      { name: "Limit with reason", earns: String.raw`$\lim_{x \to -2^{+}} g(x) = \infty$, because the numerator approaches $-3$, $x - 3$ approaches $-5$, and $x + 2$ is positive, so the denominator is negative and approaches $0$.` },
    ],
    solution: String.raw`As $x \to -2^{+}$, the numerator approaches $-3$ and $x - 3$ approaches $-5$. For $x > -2$, $x + 2 > 0$, so $(x - 3)(x + 2)$ is negative and approaches $0$. A negative number divided by small negative numbers is positive and increases without bound, so $\displaystyle \lim_{x \to -2^{+}} g(x) = \infty$.`,
  },
];

export default { forms: [{ id: "q114", name: "Topic 1.14 Quiz: Infinite Limits and Vertical Asymptotes", group: "Unit 1: Limits and Continuity", items }] };

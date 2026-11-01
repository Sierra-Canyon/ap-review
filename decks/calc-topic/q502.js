import { graph } from "../../plot.js";

// f: line segments through (-3, 1), (-1, 4), (1, 0), (3, 2), (5, -2)
const fGraph = graph({
  x: [-3, 5], y: [-3, 5], xname: "x", yname: "y",
  segments: [[-3, 1, -1, 4], [-1, 4, 1, 0], [1, 0, 3, 2], [3, 2, 5, -2]],
  dots: [[-3, 1, "closed"], [5, -2, "closed"]],
  alt: "Graph of f for x from -3 to 5, made of line segments. It rises from a closed dot at (-3, 1) to (-1, 4), falls to (1, 0), rises to (3, 2), and falls to a closed dot at (5, -2).",
});

export const sets = {
  "q502-s1": {
    name: "The graph of f", label: "Graph",
    intro: String.raw`The graph of the continuous function $f$, defined on the closed interval $[-3, 5]$, consists of four line segments, as shown below.`,
    sources: [{ title: "", blocks: [{ svg: fGraph }] }],
  },
  "q502-s9": {
    name: "The function g", label: "Free response",
    intro: String.raw`Let $g$ be the function defined by $g(x) = x^{4/3} - 4x^{1/3}$ for all real numbers $x$.`,
    sources: [{ title: "", blocks: [{ p: String.raw`$$g(x) = x^{4/3} - 4x^{1/3}$$` }] }],
  },
};

const items = [
  { id: "q502-m01", type: "mcq", skill: "u5", topic: "5.2", calc: false,
    question: String.raw`What are the critical points of $f(x) = 2x^3 + 3x^2 - 36x$?`,
    choices: [String.raw`$x = -3$ and $x = 2$`, String.raw`$x = 2$ only`, String.raw`$x = -\frac{1}{2}$ only`, String.raw`$x = 3$ and $x = -2$`],
    why: [
      String.raw`$f'(x) = 6x^2 + 6x - 36 = 6(x + 3)(x - 2)$, which is $0$ at $x = -3$ and $x = 2$. $f'$ is defined everywhere, so these are the only critical points.`,
      String.raw`$f'(x) = 0$ has two solutions. The negative root $x = -3$ is also a critical point.`,
      String.raw`$x = -\dfrac{1}{2}$ solves $f''(x) = 12x + 6 = 0$. Critical points come from $f'(x) = 0$ or $f'$ undefined.`,
      String.raw`This factors $x^2 + x - 6$ as $(x - 3)(x + 2)$, with the signs reversed. $f'(3) = 36 \ne 0$.`,
    ], answer: 0 },
  { id: "q502-m02", type: "mcq", skill: "u5", topic: "5.2", calc: false,
    question: String.raw`What are the critical points of $f(x) = x^2 + |x - 1|$?`,
    choices: [String.raw`$x = \frac{1}{2}$ and $x = 1$`, String.raw`$x = \frac{1}{2}$ only`, String.raw`$x = 1$ only`, String.raw`$x = -\frac{1}{2}$ and $x = \frac{1}{2}$`],
    why: [
      String.raw`For $x < 1$, $f(x) = x^2 - x + 1$ and $f'(x) = 2x - 1$, which is $0$ at $x = \dfrac{1}{2}$. For $x > 1$, $f'(x) = 2x + 1 > 0$. At $x = 1$ the one-sided slopes are $1$ and $3$, so $f'(1)$ does not exist, and $f(1) = 1$ is defined. The critical points are $x = \dfrac{1}{2}$ and $x = 1$.`,
      String.raw`This misses $x = 1$, where the graph has a corner: $f$ is defined there but $f'(1)$ does not exist.`,
      String.raw`This finds the corner but misses $x = \dfrac{1}{2}$, where $f'(x) = 2x - 1 = 0$ on the piece $x < 1$.`,
      String.raw`$x = -\dfrac{1}{2}$ solves $2x + 1 = 0$, but that formula for $f'$ holds only for $x > 1$, so this value does not count.`,
    ], answer: 0 },
  { id: "q502-m03", type: "mcq", skill: "u5", topic: "5.2", calc: false,
    question: String.raw`For which of the following does the Extreme Value Theorem guarantee that the function has an absolute maximum value on the given interval?`,
    choices: [
      String.raw`$f(x) = \dfrac{1}{x + 3}$ on $[-2, 2]$`,
      String.raw`$f(x) = \dfrac{1}{x}$ on $[-1, 1]$`,
      String.raw`$f(x) = \tan x$ on $\left[0, \dfrac{\pi}{2}\right)$`,
      String.raw`$f(x) = x^2$ on $(-1, 1)$`,
    ],
    why: [
      String.raw`$\dfrac{1}{x + 3}$ is continuous everywhere except $x = -3$, so it is continuous on the closed interval $[-2, 2]$, and the Extreme Value Theorem applies.`,
      String.raw`$\dfrac{1}{x}$ is not defined at $x = 0$, so it is not continuous on $[-1, 1]$.`,
      String.raw`The interval $\left[0, \dfrac{\pi}{2}\right)$ is not closed, and $\tan x$ grows without bound as $x \to \dfrac{\pi}{2}^{-}$.`,
      String.raw`The interval $(-1, 1)$ is not closed. Here $x^2$ approaches $1$ near the ends but never reaches it, so there is no maximum.`,
    ], answer: 0 },
  { id: "q502-m04", type: "mcq", skill: "u5", topic: "5.2", calc: false, set: "q502-s1",
    question: String.raw`At what value of $x$ does $f$ attain its absolute minimum on the interval $[-3, 5]$?`,
    choices: ["$5$", "$1$", "$-3$", "$-1$"],
    why: [
      String.raw`The candidates are the endpoints and the corners: $f(-3) = 1$, $f(-1) = 4$, $f(1) = 0$, $f(3) = 2$, $f(5) = -2$. The least value is $-2$, at $x = 5$.`,
      String.raw`$f(1) = 0$ is a relative minimum, but $f(5) = -2$ is smaller. Endpoints must be checked.`,
      String.raw`$x = -3$ is an endpoint, but $f(-3) = 1$ is not the least value.`,
      String.raw`$f(-1) = 4$ is the absolute maximum, not the minimum.`,
    ], answer: 0 },
  { id: "q502-m05", type: "mcq", skill: "u5", topic: "5.2", calc: false,
    question: String.raw`What are the critical points of $f(x) = \cos(2x) + 2\cos x$ on the interval $0 < x < 2\pi$?`,
    choices: [String.raw`$x = \frac{2\pi}{3}$, $x = \pi$, and $x = \frac{4\pi}{3}$`, String.raw`$x = \pi$ only`, String.raw`$x = \frac{2\pi}{3}$ and $x = \frac{4\pi}{3}$ only`, String.raw`$x = \frac{\pi}{3}$, $x = \pi$, and $x = \frac{5\pi}{3}$`],
    why: [
      String.raw`$f'(x) = -2\sin(2x) - 2\sin x = -4\sin x\cos x - 2\sin x = -2\sin x(2\cos x + 1)$. On $(0, 2\pi)$, $\sin x = 0$ at $x = \pi$, and $\cos x = -\dfrac{1}{2}$ at $x = \dfrac{2\pi}{3}$ and $x = \dfrac{4\pi}{3}$. $f'$ is defined everywhere, so these are all the critical points.`,
      String.raw`This keeps only the factor $\sin x$. The factor $2\cos x + 1$ is also $0$, at $x = \dfrac{2\pi}{3}$ and $x = \dfrac{4\pi}{3}$.`,
      String.raw`This divides $-2\sin x(2\cos x + 1) = 0$ by $\sin x$, which loses the solution $x = \pi$, where $\sin x = 0$.`,
      String.raw`This uses $2\sin(2x)$ for the derivative of $\cos(2x)$, which gives $f'(x) = 2\sin x(2\cos x - 1)$ and $\cos x = \dfrac{1}{2}$. The derivative of $\cos(2x)$ is $-2\sin(2x)$.`,
    ], answer: 0 },
  { id: "q502-m06", type: "mcq", skill: "u5", topic: "5.2", calc: true,
    question: String.raw`Let $f(x) = \cos x + \dfrac{x^2}{4}$. At what value of $x$ in the open interval $(0, 4)$ does $f$ have a critical point?`,
    choices: ["$1.895$", "$1.047$", "$3.142$", String.raw`$0$ and $1.895$`],
    why: [
      String.raw`$f'(x) = -\sin x + \dfrac{x}{2}$. Solving $f'(x) = 0$ with a calculator on $(0, 4)$ gives $x \approx 1.895$.`,
      String.raw`$x = \dfrac{\pi}{3} \approx 1.047$ solves $f''(x) = -\cos x + \dfrac{1}{2} = 0$. Critical points come from $f'$, not $f''$.`,
      String.raw`$x = \pi$ solves $\sin x = 0$, which drops the $\dfrac{x}{2}$ term of $f'(x)$.`,
      String.raw`$f'(0) = 0$, but $0$ is not in the open interval $(0, 4)$.`,
    ], answer: 0 },
  { id: "q502-f1a", type: "frq", skill: "u5", topic: "5.2", calc: false, set: "q502-s9", part: "(a)",
    prompt: String.raw`Find $g'(x)$. Find all critical points of $g$.`,
    rows: [
      { name: "Derivative", earns: String.raw`$g'(x) = \dfrac{4}{3}x^{1/3} - \dfrac{4}{3}x^{-2/3}$, or an equivalent form such as $\dfrac{4(x - 1)}{3x^{2/3}}$.` },
      { name: "Critical points", earns: String.raw`$x = 1$ (where $g'(x) = 0$) and $x = 0$ (where $g'(x)$ does not exist).` },
    ],
    solution: String.raw`$g'(x) = \dfrac{4}{3}x^{1/3} - \dfrac{4}{3}x^{-2/3} = \dfrac{4}{3}x^{-2/3}(x - 1) = \dfrac{4(x - 1)}{3x^{2/3}}$. $g'(x) = 0$ when $x = 1$. $g'(0)$ does not exist, and $g(0) = 0$ is defined. The critical points are $x = 0$ and $x = 1$.` },
  { id: "q502-f1b", type: "frq", skill: "u5", topic: "5.2", calc: false, set: "q502-s9", part: "(b)",
    prompt: String.raw`Does the Extreme Value Theorem guarantee that $g$ has an absolute maximum value on the interval $[-1, 8]$? Give a reason for your answer.`,
    rows: [
      { name: "Answer with reason", earns: String.raw`Yes, because $g$ is continuous on the closed interval $[-1, 8]$.` },
    ],
    solution: String.raw`Yes. $g$ is a sum of constant multiples of $x^{4/3}$ and $x^{1/3}$, which are continuous for all real numbers, so $g$ is continuous on the closed interval $[-1, 8]$. By the Extreme Value Theorem, $g$ attains an absolute maximum value on $[-1, 8]$.` },
  { id: "q502-f1c", type: "frq", skill: "u5", topic: "5.2", calc: false, set: "q502-s9", part: "(c)",
    prompt: String.raw`$x = 0$ is a critical point of $g$. Does $g$ have a relative extremum at $x = 0$? Give a reason for your answer.`,
    rows: [
      { name: "Answer with reason", earns: String.raw`No, because $g'(x) < 0$ on both sides of $x = 0$ (for $x < 1$, $x \ne 0$), so $g'$ does not change sign at $x = 0$.` },
    ],
    solution: String.raw`$g'(x) = \dfrac{4(x - 1)}{3x^{2/3}}$. For $x$ near $0$, $x^{2/3} > 0$ and $x - 1 < 0$, so $g'(x) < 0$ on both sides of $x = 0$. $g$ is decreasing on both sides of $x = 0$, so $g$ has neither a relative maximum nor a relative minimum at $x = 0$.` },
];

export default { forms: [{ id: "q502", name: "Topic 5.2 Quiz: Extrema and Critical Points", group: "Unit 5: Analytical Applications of Differentiation", items }] };

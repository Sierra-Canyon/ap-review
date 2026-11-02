import { graph } from "../../plot.js";

export const sets = {
  "q112-s1": {
    name: "The graph of g",
    label: "Graph",
    intro: String.raw`The graph of the function $g$ is shown below.`,
    sources: [{ title: "", blocks: [
      { svg: graph({
        x: [-3, 4], y: [-3, 4], xname: "x", yname: "y",
        segments: [[-3, -1, 1, 3], [1, 0, 4, 3]],
        dots: [[-1, 1, "open"], [-1, -2, "closed"], [1, 3, "closed"], [1, 0, "open"]],
        alt: "Graph of g for x from -3 to 4, made of two line segments. The first segment rises from (-3, -1) to a filled dot at (1, 3). It has an open circle at (-1, 1), and a filled dot at (-1, -2) shows g(-1) = -2. An open circle at (1, 0) starts the second segment, which rises to (4, 3).",
      }) },
    ] }],
  },
  "q112-s2": {
    name: "The function f",
    label: "Free response",
    intro: String.raw`Let $f$ be the function defined by $$f(x) = \begin{cases} 3 - x^2, & x < 1 \\ \dfrac{x + 3}{x + 1}, & x \geq 1. \end{cases}$$`,
    sources: [{ title: "", blocks: [{ p: String.raw`Answer each part without a calculator. Show the work that leads to each answer.` }] }],
  },
};

const items = [
  {
    id: "q112-m1", type: "mcq", skill: "u1", topic: "1.12", calc: false,
    question: String.raw`On which of the following intervals is $q(x) = \dfrac{x^2 - 4}{\ln x}$ continuous?`,
    choices: ["$(0, 1)$", "$[0, 1)$", "$(-1, 1)$", "$(0, 2)$"],
    why: [
      String.raw`$\ln x$ is continuous for $x > 0$, and $\ln x = 0$ only at $x = 1$. A quotient of continuous functions is continuous wherever the denominator is not $0$, so $q$ is continuous for $x > 0$, $x \neq 1$, and $(0, 1)$ lies inside that set.`,
      String.raw`$\ln x$ is not defined at $x = 0$, so $q$ is not continuous on an interval that includes $x = 0$.`,
      String.raw`$\ln x$ is defined only for $x > 0$, so $q$ is undefined on $(-1, 0]$.`,
      String.raw`$(0, 2)$ contains $x = 1$, where $\ln 1 = 0$ makes the denominator $0$.`,
    ],
    answer: 0,
  },
  {
    id: "q112-m2", type: "mcq", skill: "u1", topic: "1.12", calc: false,
    question: "Which of the following functions is continuous for all real numbers?",
    choices: [String.raw`$\sqrt[3]{x - 5}$`, String.raw`$\sqrt{x - 5}$`, String.raw`$\frac{x - 5}{x^2 - 25}$`, String.raw`$\frac{1}{e^{x} - 1}$`],
    why: [
      String.raw`A cube root is defined for every real number, including negative numbers, and is continuous everywhere. So $\sqrt[3]{x - 5}$ is continuous for all real numbers.`,
      String.raw`$\sqrt{x - 5}$ is undefined for $x < 5$.`,
      String.raw`$x^2 - 25 = 0$ at $x = 5$ and $x = -5$, where the function is undefined.`,
      String.raw`$e^{x} - 1 = 0$ at $x = 0$, where the function is undefined.`,
    ],
    answer: 0,
  },
  {
    id: "q112-m3", type: "mcq", skill: "u1", topic: "1.12", calc: false,
    question: String.raw`Let $h(x) = \begin{cases} \dfrac{6}{x - 1}, & x < 0 \\ x^2 - 6, & x \geq 0. \end{cases}$ Which of the following describes all values of $x$ at which $h$ is continuous?`,
    choices: ["All real numbers", String.raw`All $x$ except $x = 1$`, String.raw`All $x$ except $x = 0$`, String.raw`All $x$ except $x = 0$ and $x = 1$`],
    why: [
      String.raw`For $x < 0$, $x - 1 < -1$, so the rational piece is continuous there. For $x > 0$, $x^2 - 6$ is a polynomial. At $x = 0$, $\lim_{x \to 0^{-}} h(x) = \dfrac{6}{-1} = -6$, $\lim_{x \to 0^{+}} h(x) = -6$, and $h(0) = -6$. So $h$ is continuous everywhere.`,
      String.raw`$\dfrac{6}{x - 1}$ is undefined at $x = 1$, but that piece is used only for $x < 0$. At $x = 1$, $h(x) = x^2 - 6$.`,
      String.raw`Both one-sided limits at $x = 0$ equal $-6 = h(0)$, so the pieces meet and $h$ is continuous at $x = 0$.`,
      String.raw`Neither value is a discontinuity: the pieces meet at $x = 0$, and the expression $\dfrac{6}{x - 1}$ is not used at $x = 1$.`,
    ],
    answer: 0,
  },
  {
    id: "q112-m4", type: "mcq", skill: "u1", topic: "1.12", calc: false,
    question: String.raw`Let $p(x) = \dfrac{x + 1}{x^2 - 2x - 8}$. On which of the following closed intervals is $p$ continuous?`,
    choices: ["$[-1, 3]$", "$[-3, 0]$", "$[0, 5]$", "$[-2, 4]$"],
    why: [
      String.raw`$x^2 - 2x - 8 = (x - 4)(x + 2)$, so $p$ is continuous for all $x$ except $x = -2$ and $x = 4$. Neither value is in $[-1, 3]$.`,
      String.raw`$[-3, 0]$ contains $x = -2$, where the denominator is $0$.`,
      String.raw`$[0, 5]$ contains $x = 4$, where the denominator is $0$.`,
      String.raw`$p$ is undefined at both endpoints, $x = -2$ and $x = 4$.`,
    ],
    answer: 0,
  },
  {
    id: "q112-m5", type: "mcq", skill: "u1", topic: "1.12", calc: false, set: "q112-s1",
    question: String.raw`On which of the following closed intervals is $g$ continuous?`,
    choices: ["$[0, 1]$", "$[1, 3]$", "$[-2, 0]$", "$[0, 2]$"],
    why: [
      String.raw`$g$ is continuous at every $x$ in $[0, 1)$. At the right endpoint, $\lim_{x \to 1^{-}} g(x) = 3 = g(1)$, which is the one-sided condition a closed interval requires at an endpoint.`,
      String.raw`At the left endpoint $x = 1$, continuity on $[1, 3]$ needs $\lim_{x \to 1^{+}} g(x) = g(1)$. The right-hand limit is $0$ and $g(1) = 3$.`,
      String.raw`$[-2, 0]$ contains $x = -1$, where $\lim_{x \to -1} g(x) = 1$ but $g(-1) = -2$.`,
      String.raw`$[0, 2]$ contains $x = 1$ as an interior point, and $\lim_{x \to 1} g(x)$ does not exist there.`,
    ],
    answer: 0,
  },
  {
    id: "q112-m6", type: "mcq", skill: "u1", topic: "1.12", calc: false,
    question: String.raw`Which of the following functions is continuous on the closed interval $[0, \pi]$?`,
    choices: [String.raw`$\frac{1}{2 + \cos x}$`, String.raw`$\sec x$`, String.raw`$\cot x$`, String.raw`$\frac{1}{1 + \cos x}$`],
    why: [
      String.raw`$\cos x \geq -1$, so $2 + \cos x \geq 1$ and the denominator is never $0$. The quotient is continuous on $[0, \pi]$.`,
      String.raw`$\sec x = \dfrac{1}{\cos x}$ is undefined at $x = \dfrac{\pi}{2}$.`,
      String.raw`$\cot x = \dfrac{\cos x}{\sin x}$ is undefined at $x = 0$ and $x = \pi$, where $\sin x = 0$.`,
      String.raw`At $x = \pi$, $1 + \cos \pi = 0$, so the function is undefined at the right endpoint.`,
    ],
    answer: 0,
  },
  {
    id: "q112-f1a", type: "frq", skill: "u1", topic: "1.12", calc: false, set: "q112-s2", part: "(a)",
    prompt: String.raw`Explain why $f$ is continuous at every $x$ with $x < 1$ and at every $x$ with $x > 1$.`,
    rows: [
      { name: "Reason", earns: String.raw`For $x < 1$, $f(x) = 3 - x^2$ is a polynomial, which is continuous everywhere. For $x > 1$, $f(x) = \dfrac{x+3}{x+1}$ is a rational function whose denominator is not $0$ there (since $x + 1 > 2$), so it is continuous.` },
    ],
    solution: String.raw`For $x < 1$, $f(x) = 3 - x^2$. Polynomials are continuous for all real numbers, so $f$ is continuous at every $x < 1$. For $x > 1$, $f(x) = \dfrac{x+3}{x+1}$. A rational function is continuous wherever its denominator is not $0$, and for $x > 1$, $x + 1 > 2$, so $f$ is continuous at every $x > 1$.`,
  },
  {
    id: "q112-f1b", type: "frq", skill: "u1", topic: "1.12", calc: false, set: "q112-s2", part: "(b)",
    prompt: String.raw`Show that $f$ is continuous at $x = 1$.`,
    rows: [
      { name: "One-sided limits", earns: String.raw`$\lim_{x \to 1^{-}} f(x) = 3 - 1^2 = 2$ and $\lim_{x \to 1^{+}} f(x) = \dfrac{1 + 3}{1 + 1} = 2$.` },
      { name: "Conclusion", earns: String.raw`$f(1) = 2$ and $\lim_{x \to 1} f(x) = 2 = f(1)$, so $f$ is continuous at $x = 1$.` },
    ],
    solution: String.raw`$\displaystyle \lim_{x \to 1^{-}} f(x) = 3 - 1^2 = 2$ and $\displaystyle \lim_{x \to 1^{+}} f(x) = \dfrac{1 + 3}{1 + 1} = 2$. The one-sided limits are equal, so $\displaystyle \lim_{x \to 1} f(x) = 2$. Also $f(1) = \dfrac{4}{2} = 2$. Since $f(1)$ is defined, the limit exists, and $\displaystyle \lim_{x \to 1} f(x) = f(1)$, $f$ is continuous at $x = 1$.`,
  },
  {
    id: "q112-f1c", type: "frq", skill: "u1", topic: "1.12", calc: false, set: "q112-s2", part: "(c)",
    prompt: String.raw`Let $k(x) = \dfrac{1}{f(x)}$. Is $k$ continuous on the closed interval $[-2, 0]$? Justify your answer.`,
    rows: [
      { name: "Answer with reason", earns: String.raw`No: $f\left(-\sqrt{3}\right) = 3 - 3 = 0$ and $-2 < -\sqrt{3} < 0$, so $k$ is undefined at $x = -\sqrt{3}$, a point of $[-2, 0]$.` },
    ],
    solution: String.raw`On $[-2, 0]$, $f(x) = 3 - x^2$, which equals $0$ when $x^2 = 3$. The value $x = -\sqrt{3} \approx -1.73$ lies in $[-2, 0]$. At that point the denominator of $k$ is $0$, so $k$ is undefined there and is not continuous on $[-2, 0]$.`,
  },
];

export default { forms: [{ id: "q112", name: "Topic 1.12 Quiz: Continuity over an Interval", group: "Unit 1: Limits and Continuity", items }] };

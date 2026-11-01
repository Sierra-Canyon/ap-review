import { graph } from "../../plot.js";

export const sets = {
  "q104-s1": {
    name: "Values of f near x = 3", label: "Table",
    intro: String.raw`The function $f$ is not defined at $x = 3$. Selected values of $f$ are shown in the table.`,
    sources: [{ title: "", blocks: [{ table: {
      head: ["$x$", "$2.9$", "$2.99$", "$2.999$", "$3.001$", "$3.01$", "$3.1$"],
      rows: [["$f(x)$", "$0.25158$", "$0.25016$", "$0.25002$", "$0.24998$", "$0.24984$", "$0.24846$"]],
    } }] }],
  },
  "q104-s2": {
    name: "Values of g near x = 0", label: "Table",
    intro: String.raw`Selected values of a function $g$ are shown in the table.`,
    sources: [{ title: "", blocks: [{ table: {
      head: ["$x$", "$-0.1$", "$-0.01$", "$-0.001$", "$0.001$", "$0.01$", "$0.1$"],
      rows: [["$g(x)$", "$-2.1$", "$-2.01$", "$-2.001$", "$1.000001$", "$1.0001$", "$1.01$"]],
    } }] }],
  },
  "q104-s3": {
    name: "Values of h near x = 2", label: "Table",
    intro: String.raw`Selected values of a function $h$ are shown in the table.`,
    sources: [{ title: "", blocks: [{ table: {
      head: ["$x$", "$1.9$", "$1.99$", "$1.999$", "$2$", "$2.001$", "$2.01$", "$2.1$"],
      rows: [["$h(x)$", "$3.61$", "$3.9601$", "$3.996001$", "$7$", "$4.004001$", "$4.0401$", "$4.41$"]],
    } }] }],
  },
  "q104-s4": {
    name: "Values of k for x greater than 1", label: "Table",
    intro: String.raw`Selected values of a function $k$ are shown in the table.`,
    sources: [{ title: "", blocks: [{ table: {
      head: ["$x$", "$1.1$", "$1.01$", "$1.001$", "$1.0001$"],
      rows: [["$k(x)$", "$3.331$", "$3.030301$", "$3.003003$", "$3.00030003$"]],
    } }] }],
  },
  "q104-s5": {
    name: "Values of p near x = -1", label: "Table",
    intro: String.raw`The function $p$ is not defined at $x = -1$. Selected values of $p$ are shown in the table.`,
    sources: [{ title: "", blocks: [{ table: {
      head: ["$x$", "$-1.1$", "$-1.01$", "$-1.001$", "$-0.999$", "$-0.99$", "$-0.9$"],
      rows: [["$p(x)$", "$-0.47619$", "$-0.49751$", "$-0.49975$", "$-0.50025$", "$-0.50251$", "$-0.52632$"]],
    } }] }],
  },
  "q104-s6": {
    name: "Values of q near x = 2", label: "Free response",
    intro: String.raw`The function $q$ is defined for all $x \ne 2$. Selected values of $q(x)$ are shown in the table.`,
    sources: [{ title: "", blocks: [{ table: {
      head: ["$x$", "$1.9$", "$1.99$", "$1.999$", "$2.001$", "$2.01$", "$2.1$"],
      rows: [["$q(x)$", "$2.67868$", "$2.76300$", "$2.77163$", "$2.77355$", "$2.78222$", "$2.87094$"]],
    } }] }],
  },
};

const items = [
  { id: "q104-m1", type: "mcq", skill: "u1", topic: "1.4", calc: false, set: "q104-s1",
    question: String.raw`Based on the table, which of the following is the best estimate of $\displaystyle \lim_{x \to 3} f(x)$?`,
    choices: ["$0.25$", "$0.24846$", "$0$", String.raw`The limit does not exist, because $f(3)$ is undefined.`],
    why: [
      String.raw`From the left, the values $0.25158$, $0.25016$, $0.25002$ approach $0.25$. From the right, the values $0.24846$, $0.24984$, $0.24998$ also approach $0.25$. The best estimate is $0.25$.`,
      String.raw`$0.24846$ is $f(3.1)$, the value farthest from $x = 3$ on the right. The limit is the value the outputs approach as $x$ gets closer to $3$.`,
      String.raw`No value in the table is near $0$. The outputs approach $0.25$ from both sides.`,
      String.raw`A limit can exist where the function is undefined. The values on both sides of $x = 3$ approach $0.25$.`,
    ], answer: 0 },
  { id: "q104-m2", type: "mcq", skill: "u1", topic: "1.4", calc: false, set: "q104-s2",
    question: String.raw`Based on the table, which of the following is the best conclusion about $\displaystyle \lim_{x \to 0} g(x)$?`,
    choices: ["The limit does not exist.", "$-2$", "$1$", String.raw`$-\frac{1}{2}$`],
    why: [
      String.raw`From the left, the values approach $-2$, and from the right, they approach $1$. The one-sided limits differ, so the limit does not exist.`,
      String.raw`$-2$ is only the left-hand limit. From the right, the values approach $1$.`,
      String.raw`$1$ is only the right-hand limit. From the left, the values approach $-2$.`,
      String.raw`$-\frac{1}{2}$ is the average of $-2$ and $1$. One-sided limits that differ mean the limit does not exist.`,
    ], answer: 0 },
  { id: "q104-m3", type: "mcq", skill: "u1", topic: "1.4", calc: false, set: "q104-s3",
    question: String.raw`Based on the table, which of the following is the best estimate of $\displaystyle \lim_{x \to 2} h(x)$?`,
    choices: ["$4$", "$7$", "$5.5$", "The limit does not exist."],
    why: [
      String.raw`As $x$ approaches $2$ from either side, $h(x)$ approaches $4$: $3.996001$ on the left and $4.004001$ on the right. The value $h(2) = 7$ does not affect the limit.`,
      String.raw`$7$ is $h(2)$. The limit depends on the values of $h(x)$ for $x$ near $2$, and those approach $4$.`,
      String.raw`$5.5$ is the average of the limit $4$ and the value $h(2) = 7$.`,
      String.raw`Both sides approach $4$, so the limit exists. A function value that differs from the limit does not keep the limit from existing.`,
    ], answer: 0 },
  { id: "q104-m4", type: "mcq", skill: "u1", topic: "1.4", calc: true,
    question: String.raw`Which of the following is the best approximation of $\displaystyle \lim_{x \to 0} \dfrac{5^{x} - 2^{x}}{x}$?`,
    choices: ["$0.916$", "$0$", "$3$", "$2.5$"],
    why: [
      String.raw`A table of values near $0$ gives $0.92690$ at $x = 0.01$, $0.91735$ at $x = 0.001$, $0.91524$ at $x = -0.001$, and $0.90581$ at $x = -0.01$. The values from both sides close in on about $0.916$.`,
      String.raw`Substituting $x = 0$ gives $\frac{0}{0}$, which is not $0$. A table of values near $x = 0$ shows the quotient approaches about $0.916$.`,
      String.raw`$3$ is the difference of the bases, $5 - 2$. A table of values near $x = 0$ shows the quotient approaches about $0.916$.`,
      String.raw`$2.5$ is the ratio of the bases, $\frac{5}{2}$. A table of values near $x = 0$ shows the quotient approaches about $0.916$.`,
    ], answer: 0 },
  { id: "q104-m5", type: "mcq", skill: "u1", topic: "1.4", calc: false, set: "q104-s4",
    question: "Which of the following is best supported by the table?",
    choices: [String.raw`$\lim_{x \to 1^{+}} k(x) = 3$`, String.raw`$\lim_{x \to 1} k(x) = 3$`, "$k(1) = 3$", String.raw`$\lim_{x \to 1^{+}} k(x) = 3.331$`],
    why: [
      String.raw`Every $x$ in the table is greater than $1$, and the values of $k(x)$ approach $3$ as $x$ approaches $1$. The table supports a right-hand limit of $3$.`,
      String.raw`The table has no values with $x < 1$, so it says nothing about the left-hand limit. The two-sided limit cannot be estimated from it.`,
      String.raw`The table does not include $x = 1$, and a limit does not determine the value $k(1)$.`,
      String.raw`$3.331$ is $k(1.1)$, the value farthest from $x = 1$. As $x$ gets closer to $1$, the values approach $3$.`,
    ], answer: 0 },
  { id: "q104-m6", type: "mcq", skill: "u1", topic: "1.4", calc: false, set: "q104-s5",
    question: String.raw`Based on the table, which of the following is the best estimate of $\displaystyle \lim_{x \to -1} p(x)$?`,
    choices: ["$-0.5$", "$0.5$", "$-0.47619$", String.raw`The limit does not exist, because the values are above $-0.5$ on one side and below it on the other.`],
    why: [
      String.raw`From the left, the values $-0.47619$, $-0.49751$, $-0.49975$ approach $-0.5$. From the right, the values $-0.52632$, $-0.50251$, $-0.50025$ also approach $-0.5$.`,
      String.raw`Every value in the table is negative. The sign was dropped.`,
      String.raw`$-0.47619$ is $p(-1.1)$, the value farthest from $x = -1$ on the left. The values closer to $x = -1$ approach $-0.5$.`,
      String.raw`The values can approach the limit from above on one side and from below on the other. Both sides approach the same number, $-0.5$, so the limit exists.`,
    ], answer: 0 },

  { id: "q104-f1a", type: "frq", skill: "u1", topic: "1.4", calc: false, set: "q104-s6", part: "(a)",
    prompt: String.raw`Use the table to estimate $\displaystyle \lim_{x \to 2^{-}} q(x)$ and $\displaystyle \lim_{x \to 2^{+}} q(x)$, each to two decimal places.`,
    rows: [
      { name: "One-sided estimates", earns: String.raw`$\lim_{x \to 2^{-}} q(x) \approx 2.77$ and $\lim_{x \to 2^{+}} q(x) \approx 2.77$, from the values closest to $x = 2$.` },
    ],
    solution: String.raw`From the left, the values $2.67868$, $2.76300$, $2.77163$ approach about $2.77$, so $\lim_{x \to 2^{-}} q(x) \approx 2.77$. From the right, the values $2.87094$, $2.78222$, $2.77355$ approach about $2.77$, so $\lim_{x \to 2^{+}} q(x) \approx 2.77$.` },
  { id: "q104-f1b", type: "frq", skill: "u1", topic: "1.4", calc: false, set: "q104-s6", part: "(b)",
    prompt: String.raw`Based on your answers to part (a), estimate $\displaystyle \lim_{x \to 2} q(x)$. Give a reason for your answer.`,
    rows: [
      { name: "Estimate with reason", earns: String.raw`$\lim_{x \to 2} q(x) \approx 2.77$, because the left-hand and right-hand estimates are equal.` },
    ],
    solution: String.raw`The left-hand and right-hand limits are both about $2.77$. Since the one-sided limits agree, $\lim_{x \to 2} q(x) \approx 2.77$. The limit exists even though $q(2)$ is not defined.` },
  { id: "q104-f1c", type: "frq", skill: "u1", topic: "1.4", calc: false, set: "q104-s6", part: "(c)",
    prompt: String.raw`The function $s$ is defined by $s(x) = q(x)$ for $x < 2$ and $s(x) = q(x) + 1$ for $x > 2$. Estimate $\displaystyle \lim_{x \to 2^{+}} s(x)$, and determine whether $\displaystyle \lim_{x \to 2} s(x)$ exists. Explain your reasoning.`,
    rows: [
      { name: "Right-hand limit", earns: String.raw`$\lim_{x \to 2^{+}} s(x) \approx 3.77$.` },
      { name: "Conclusion with reason", earns: String.raw`$\lim_{x \to 2} s(x)$ does not exist, because the left-hand limit, about $2.77$, is not equal to the right-hand limit, about $3.77$.` },
    ],
    solution: String.raw`For $x > 2$, $s(x) = q(x) + 1$, and the values $3.87094$, $3.78222$, $3.77355$ approach about $3.77$, so $\lim_{x \to 2^{+}} s(x) \approx 3.77$. For $x < 2$, $s(x) = q(x)$, so $\lim_{x \to 2^{-}} s(x) \approx 2.77$. The one-sided limits are not equal, so $\lim_{x \to 2} s(x)$ does not exist.` },
];

export default { forms: [{ id: "q104", name: "Topic 1.4 Quiz: Limits from Tables", group: "Unit 1: Limits and Continuity", items }] };

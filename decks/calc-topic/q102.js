import { graph } from "../../plot.js";

export const sets = {
  "q102-s1": {
    name: "A piecewise function g", label: "Free response",
    intro: String.raw`The function $g$ is defined below, where $c$ is a constant.`,
    sources: [{ title: "", blocks: [{ p: String.raw`$$g(x) = \begin{cases} x^2 - 1 & \text{for } x < 3 \\ 5 & \text{for } x = 3 \\ 2x + c & \text{for } x > 3 \end{cases}$$` }] }],
  },
};

const items = [
  { id: "q102-m1", type: "mcq", skill: "u1", topic: "1.2", calc: false,
    question: String.raw`Which of the following is equivalent to the statement $\displaystyle \lim_{x \to 4} f(x) = 6$?`,
    choices: [
      String.raw`$\lim_{x \to 4^{-}} f(x) = 6$ and $\lim_{x \to 4^{+}} f(x) = 6$`,
      String.raw`$f(4) = 6$`,
      String.raw`$\lim_{x \to 4^{-}} f(x) = 6$ or $\lim_{x \to 4^{+}} f(x) = 6$`,
      String.raw`$\lim_{x \to 6} f(x) = 4$`,
    ],
    why: [
      String.raw`A two-sided limit equals $6$ exactly when the left-hand limit and the right-hand limit both equal $6$.`,
      String.raw`$f(4) = 6$ is a statement about the value of $f$ at $4$. The limit can equal $6$ when $f(4)$ is a different number or is undefined.`,
      String.raw`One matching one-sided limit is not enough. If the left-hand limit is $6$ and the right-hand limit is $2$, the two-sided limit does not exist.`,
      String.raw`This swaps the input and the output. The number $x$ approaches goes under $\lim$, and the number $f(x)$ approaches goes after the equals sign.`,
    ], answer: 0 },
  { id: "q102-m2", type: "mcq", skill: "u1", topic: "1.2", calc: false,
    stem: String.raw`Let $W(t)$ be the amount of water, in gallons, in a tank $t$ minutes after a pump is turned on.`,
    question: String.raw`Which of the following is the meaning of $\displaystyle \lim_{t \to 6} W(t) = 120$?`,
    choices: [
      String.raw`As $t$ gets closer to $6$, $W(t)$ gets as close to $120$ as desired.`,
      String.raw`The tank holds exactly 120 gallons at $t = 6$.`,
      "The tank never holds more than 120 gallons.",
      String.raw`As $W(t)$ gets closer to $6$, $t$ gets closer to $120$.`,
    ],
    why: [
      String.raw`A limit describes the values of $W(t)$ for $t$ near $6$: as $t$ approaches $6$ minutes, the amount of water approaches 120 gallons.`,
      String.raw`This states $W(6) = 120$. The limit describes values of $W(t)$ for $t$ near $6$, and $W(6)$ could be a different number.`,
      String.raw`The limit says nothing about a maximum amount. $W(t)$ could be greater than 120 for some values of $t$.`,
      String.raw`This swaps the input and the output. In $\lim_{t \to 6} W(t) = 120$, the input $t$ approaches $6$ and the output $W(t)$ approaches $120$.`,
    ], answer: 0 },
  { id: "q102-m3", type: "mcq", skill: "u1", topic: "1.2", calc: false,
    stem: String.raw`For a function $f$, $\displaystyle \lim_{x \to -3^{-}} f(x) = -2$, $\displaystyle \lim_{x \to -3^{+}} f(x) = -2$, and $f(-3) = 6$.`,
    question: String.raw`What is $\displaystyle \lim_{x \to -3} f(x)$?`,
    choices: ["$-2$", "$6$", "$2$", "The limit does not exist."],
    why: [
      String.raw`The left-hand and right-hand limits both equal $-2$, so the two-sided limit exists and equals $-2$. The value $f(-3) = 6$ does not affect the limit.`,
      String.raw`$6$ is the value $f(-3)$. A limit depends on the values of $f(x)$ for $x$ near $-3$, not at $x = -3$.`,
      String.raw`$2$ is the average of the limit $-2$ and the value $f(-3) = 6$. The limit is the common value of the one-sided limits, $-2$.`,
      String.raw`The limit exists because both one-sided limits equal $-2$. A function value that differs from the limit does not keep the limit from existing.`,
    ], answer: 0 },
  { id: "q102-m4", type: "mcq", skill: "u1", topic: "1.2", calc: false,
    stem: String.raw`For a function $g$, $\displaystyle \lim_{x \to -1^{-}} g(x) = 4$ and $\displaystyle \lim_{x \to -1^{+}} g(x) = -2$.`,
    question: String.raw`What is $\displaystyle \lim_{x \to -1} g(x)$?`,
    choices: ["The limit does not exist.", "$1$", "$4$", "$-2$"],
    why: [
      String.raw`A two-sided limit exists only when the left-hand and right-hand limits are equal. Here they are $4$ and $-2$, so $\lim_{x \to -1} g(x)$ does not exist.`,
      String.raw`$1$ is the average of the one-sided limits, $\frac{4 + (-2)}{2}$. Averaging does not produce a limit when the one-sided limits differ.`,
      String.raw`$4$ is only the left-hand limit. The right-hand limit is $-2$, so the two-sided limit does not exist.`,
      String.raw`$-2$ is only the right-hand limit. The left-hand limit is $4$, so the two-sided limit does not exist.`,
    ], answer: 0 },
  { id: "q102-m5", type: "mcq", skill: "u1", topic: "1.2", calc: false,
    question: String.raw`Which of the following describes what $\displaystyle \lim_{x \to a} f(x) = L$ means?`,
    choices: [
      String.raw`$f(x)$ can be made as close to $L$ as desired by taking $x$ close enough to $a$, with $x \ne a$.`,
      "$f(a) = L$",
      String.raw`$f(x) = L$ for every $x$ close to $a$.`,
      String.raw`$x$ can be made as close to $a$ as desired by taking $f(x)$ close enough to $L$.`,
    ],
    why: [
      String.raw`This is the meaning of the limit: the outputs $f(x)$ approach $L$ as the inputs $x$ approach $a$. The value of $f$ at $x = a$ is not considered.`,
      String.raw`$f(a) = L$ is a statement about the value of $f$ at $a$. A limit can equal $L$ when $f(a)$ is a different number or is undefined.`,
      String.raw`$f(x)$ only needs to get close to $L$, not equal it. For example, $\lim_{x \to 0} (x + 3) = 3$, but $x + 3 \ne 3$ for every $x \ne 0$.`,
      String.raw`This reverses the roles of input and output. The limit controls how close $f(x)$ is to $L$ when $x$ is close to $a$.`,
    ], answer: 0 },
  { id: "q102-m6", type: "mcq", skill: "u1", topic: "1.2", calc: false,
    stem: String.raw`The function $f$ is defined by $f(x) = \sqrt{x + 7}$ for $x < 2$ and $f(x) = 4 - x$ for $x \ge 2$.`,
    question: String.raw`What is $\displaystyle \lim_{x \to 2^{-}} f(x)$?`,
    choices: ["$3$", "$2$", String.raw`$\frac{5}{2}$`, "The limit does not exist."],
    why: [
      String.raw`For $x < 2$, $f(x) = \sqrt{x + 7}$, so $\lim_{x \to 2^{-}} f(x) = \sqrt{9} = 3$.`,
      String.raw`$2$ is $f(2) = 4 - 2$ and the right-hand limit. The left-hand limit uses the formula for $x < 2$.`,
      String.raw`$\frac{5}{2}$ is the average of the left-hand limit $3$ and the right-hand limit $2$.`,
      String.raw`The two-sided limit at $x = 2$ does not exist, because the one-sided limits are $3$ and $2$. The left-hand limit exists and equals $3$.`,
    ], answer: 0 },

  { id: "q102-f1a", type: "frq", skill: "u1", topic: "1.2", calc: false, set: "q102-s1", part: "(a)",
    prompt: String.raw`Write the left-hand limit of $g$ at $x = 3$ in limit notation, and find its value.`,
    rows: [
      { name: "Notation and value", earns: String.raw`$\lim_{x \to 3^{-}} g(x) = 8$, written with $x \to 3^{-}$.` },
    ],
    solution: String.raw`For $x < 3$, $g(x) = x^2 - 1$.
$$\lim_{x \to 3^{-}} g(x) = \lim_{x \to 3^{-}} \left( x^2 - 1 \right) = 9 - 1 = 8$$` },
  { id: "q102-f1b", type: "frq", skill: "u1", topic: "1.2", calc: false, set: "q102-s1", part: "(b)",
    prompt: String.raw`Find the value of $c$ for which $\displaystyle \lim_{x \to 3} g(x)$ exists. Justify your answer.`,
    rows: [
      { name: "Right-hand limit", earns: String.raw`$\lim_{x \to 3^{+}} g(x) = 6 + c$.` },
      { name: "Answer with justification", earns: String.raw`$c = 2$, because the two-sided limit exists only when the one-sided limits are equal: $6 + c = 8$.` },
    ],
    solution: String.raw`For $x > 3$, $g(x) = 2x + c$, so
$$\lim_{x \to 3^{+}} g(x) = \lim_{x \to 3^{+}} (2x + c) = 6 + c$$
The limit $\lim_{x \to 3} g(x)$ exists only when the left-hand and right-hand limits are equal. From part (a), $6 + c = 8$, so $c = 2$.` },
  { id: "q102-f1c", type: "frq", skill: "u1", topic: "1.2", calc: false, set: "q102-s1", part: "(c)",
    prompt: String.raw`For the value of $c$ found in part (b), is $\displaystyle \lim_{x \to 3} g(x)$ equal to $g(3)$? Explain your reasoning.`,
    rows: [
      { name: "Answer with explanation", earns: String.raw`No: $\lim_{x \to 3} g(x) = 8$ and $g(3) = 5$. The limit depends on the values of $g(x)$ for $x$ near $3$, not on $g(3)$.` },
    ],
    solution: String.raw`No. With $c = 2$, both one-sided limits equal $8$, so $\lim_{x \to 3} g(x) = 8$. The definition gives $g(3) = 5$. The limit is determined by the values of $g(x)$ for $x$ near $3$, and the value at $x = 3$ does not change it, so $\lim_{x \to 3} g(x) \ne g(3)$.` },
];

export default { forms: [{ id: "q102", name: "Topic 1.2 Quiz: Limits and Limit Notation", group: "Unit 1: Limits and Continuity", items }] };

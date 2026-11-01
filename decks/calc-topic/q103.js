import { graph } from "../../plot.js";

// f: x + 5 on [-4, -2), f(-2) = -1, x + 1 on (-2, 1), f(1) = 4, 3 - x on (1, 3], x - 3 on [3, 5]
const fGraph = graph({
  x: [-4, 5], y: [-2, 5], xname: "x", yname: "y",
  segments: [[-4, 1, -2, 3], [-2, -1, 1, 2], [1, 2, 3, 0], [3, 0, 5, 2]],
  dots: [[-4, 1, "closed"], [-2, 3, "open"], [-2, -1, "closed"], [1, 2, "open"], [1, 4, "closed"], [5, 2, "closed"]],
  alt: "Graph of f for x from -4 to 5, made of line segments. A segment rises from a closed dot at (-4, 1) to an open circle at (-2, 3). A closed dot is at (-2, -1), and a segment rises from it to an open circle at (1, 2). A separate closed dot is at (1, 4). A segment falls from (1, 2) to (3, 0), and another segment rises from (3, 0) to a closed dot at (5, 2).",
});

// h: -(x + 1)^2 + 2 on [-3, 0] except h(-1) = 0, x + 1 on [0, 2], x - 3 on (2, 4]
const hGraph = graph({
  x: [-3, 4], y: [-3, 4], xname: "x", yname: "y",
  fns: [{ f: (x) => -((x + 1) ** 2) + 2, from: -3, to: 0 }],
  segments: [[0, 1, 2, 3], [2, -1, 4, 1]],
  dots: [[-3, -2, "closed"], [-1, 2, "open"], [-1, 0, "closed"], [2, 3, "closed"], [2, -1, "open"], [4, 1, "closed"]],
  alt: "Graph of h for x from -3 to 4. From a closed dot at (-3, -2), a curve rises to an open circle at its highest point, (-1, 2), then falls to (0, 1). A separate closed dot is at (-1, 0). From (0, 1), a line segment rises to a closed dot at (2, 3). From an open circle at (2, -1), a line segment rises to a closed dot at (4, 1).",
});

export const sets = {
  "q103-s1": {
    name: "The graph of f", label: "Graph",
    intro: String.raw`The graph of the function $f$, defined for $-4 \le x \le 5$, is shown below.`,
    sources: [{ title: "", blocks: [{ svg: fGraph }] }],
  },
  "q103-s2": {
    name: "The graph of h", label: "Free response",
    intro: String.raw`The graph of the function $h$, defined for $-3 \le x \le 4$, is shown below.`,
    sources: [{ title: "", blocks: [{ svg: hGraph }] }],
  },
};

const items = [
  { id: "q103-m1", type: "mcq", skill: "u1", topic: "1.3", calc: false, set: "q103-s1",
    question: String.raw`$\displaystyle \lim_{x \to -2^{-}} f(x)$ is`,
    choices: ["$3$", "$-1$", "$1$", "nonexistent"],
    why: [
      String.raw`As $x$ approaches $-2$ from the left, the graph follows the segment that rises toward the open circle at $(-2, 3)$. The left-hand limit is $3$.`,
      String.raw`$-1$ is $f(-2)$, the closed dot, and it is also the right-hand limit. The left-hand limit uses the segment to the left of $x = -2$.`,
      String.raw`$1$ is the average of $3$ and $-1$. The left-hand limit uses only the values of $f$ to the left of $x = -2$.`,
      String.raw`The two-sided limit at $x = -2$ does not exist, but the left-hand limit does: from the left, $f(x)$ approaches $3$.`,
    ], answer: 0 },
  { id: "q103-m2", type: "mcq", skill: "u1", topic: "1.3", calc: false, set: "q103-s1",
    question: String.raw`$\displaystyle \lim_{x \to 1} f(x)$ is`,
    choices: ["$2$", "$4$", "$3$", "nonexistent"],
    why: [
      String.raw`From both sides of $x = 1$, the segments approach the open circle at $(1, 2)$. Both one-sided limits are $2$, so the limit is $2$.`,
      String.raw`$4$ is the value $f(1)$, shown by the closed dot. The limit depends on the values of $f$ near $x = 1$, which approach $2$.`,
      String.raw`$3$ is the average of the limit $2$ and the value $f(1) = 4$.`,
      String.raw`The open circle shows a hole at $(1, 2)$, but both one-sided limits equal $2$, so the limit exists.`,
    ], answer: 0 },
  { id: "q103-m3", type: "mcq", skill: "u1", topic: "1.3", calc: false, set: "q103-s1",
    question: String.raw`$\displaystyle \lim_{x \to -2} f(x)$ is`,
    choices: ["nonexistent", "$3$", "$-1$", "$1$"],
    why: [
      String.raw`The left-hand limit at $x = -2$ is $3$ and the right-hand limit is $-1$. They are not equal, so the limit does not exist.`,
      String.raw`$3$ is only the left-hand limit. From the right, $f(x)$ approaches $-1$.`,
      String.raw`$-1$ is $f(-2)$ and the right-hand limit. From the left, $f(x)$ approaches $3$.`,
      String.raw`$1$ is the average of the one-sided limits. When the one-sided limits differ, the limit does not exist.`,
    ], answer: 0 },
  { id: "q103-m4", type: "mcq", skill: "u1", topic: "1.3", calc: false, set: "q103-s1",
    question: String.raw`What is the value of $f(1) + \displaystyle \lim_{x \to -2^{+}} f(x)$?`,
    choices: ["$3$", "$1$", "$7$", "$5$"],
    why: [
      String.raw`The closed dot gives $f(1) = 4$, and as $x$ approaches $-2$ from the right, $f(x)$ approaches $-1$. The sum is $4 + (-1) = 3$.`,
      String.raw`This uses $2$, the limit at $x = 1$, in place of the value $f(1) = 4$: $2 + (-1) = 1$.`,
      String.raw`This uses $3$, the left-hand limit at $x = -2$, in place of the right-hand limit $-1$: $4 + 3 = 7$.`,
      String.raw`This uses the limit $2$ in place of $f(1) = 4$ and the left-hand limit $3$ in place of the right-hand limit $-1$: $2 + 3 = 5$.`,
    ], answer: 0 },
  { id: "q103-m5", type: "mcq", skill: "u1", topic: "1.3", calc: false, set: "q103-s1",
    question: String.raw`For how many values of $c$ in the open interval $-4 < c < 5$ does $\displaystyle \lim_{x \to c} f(x)$ fail to exist?`,
    choices: ["$1$", "$2$", "$3$", "$0$"],
    why: [
      String.raw`Only at $c = -2$ do the one-sided limits differ ($3$ from the left and $-1$ from the right). At $c = 1$ both sides approach $2$, and at $c = 3$ both sides approach $0$, so those limits exist.`,
      String.raw`This counts $c = 1$. The hole and the separate dot at $x = 1$ do not keep the limit from existing, because both sides approach $2$.`,
      String.raw`This counts $c = 1$ and the corner at $c = 3$. At each of those points, both sides approach the same value.`,
      String.raw`At $c = -2$, the left-hand limit is $3$ and the right-hand limit is $-1$, so that limit fails to exist.`,
    ], answer: 0 },
  { id: "q103-m6", type: "mcq", skill: "u1", topic: "1.3", calc: false, set: "q103-s1",
    question: String.raw`Based on the graph, which of the following statements are true?
I. $\displaystyle \lim_{x \to 1} f(x) = f(1)$
II. $\displaystyle \lim_{x \to 3} f(x) = 0$
III. $\displaystyle \lim_{x \to -2^{+}} f(x) = f(-2)$`,
    choices: ["II and III only", "II only", "I and II only", "I, II, and III"],
    why: [
      String.raw`I is false: the limit at $x = 1$ is $2$, and $f(1) = 4$. II is true: both segments meet at $(3, 0)$. III is true: from the right, $f(x)$ approaches $-1$, and the closed dot gives $f(-2) = -1$.`,
      String.raw`III is also true. The right-hand limit at $x = -2$ is $-1$, the same as the value $f(-2)$ at the closed dot.`,
      String.raw`I is false: the limit at $x = 1$ is $2$, but $f(1) = 4$. III is true, because the right-hand limit at $x = -2$ and $f(-2)$ are both $-1$.`,
      String.raw`I is false: the limit at $x = 1$ is $2$, but the closed dot gives $f(1) = 4$.`,
    ], answer: 0 },

  { id: "q103-f1a", type: "frq", skill: "u1", topic: "1.3", calc: false, set: "q103-s2", part: "(a)",
    prompt: String.raw`Find $\displaystyle \lim_{x \to -1} h(x)$ and $h(-1)$.`,
    rows: [
      { name: "Limit", earns: String.raw`$\lim_{x \to -1} h(x) = 2$.` },
      { name: "Value", earns: String.raw`$h(-1) = 0$.` },
    ],
    solution: String.raw`From both sides of $x = -1$, the curve approaches the open circle at $(-1, 2)$, so $\lim_{x \to -1} h(x) = 2$. The closed dot at $(-1, 0)$ gives $h(-1) = 0$.` },
  { id: "q103-f1b", type: "frq", skill: "u1", topic: "1.3", calc: false, set: "q103-s2", part: "(b)",
    prompt: String.raw`Find $\displaystyle \lim_{x \to 2^{-}} h(x)$ and $\displaystyle \lim_{x \to 2^{+}} h(x)$.`,
    rows: [
      { name: "One-sided limits", earns: String.raw`$\lim_{x \to 2^{-}} h(x) = 3$ and $\lim_{x \to 2^{+}} h(x) = -1$.` },
    ],
    solution: String.raw`From the left, the segment rises to the closed dot at $(2, 3)$, so $\lim_{x \to 2^{-}} h(x) = 3$. From the right, the segment approaches the open circle at $(2, -1)$, so $\lim_{x \to 2^{+}} h(x) = -1$.` },
  { id: "q103-f1c", type: "frq", skill: "u1", topic: "1.3", calc: false, set: "q103-s2", part: "(c)",
    prompt: String.raw`Does $\displaystyle \lim_{x \to 2} h(x)$ exist? Justify your answer.`,
    rows: [
      { name: "Answer with justification", earns: String.raw`No, because the left-hand limit, $3$, is not equal to the right-hand limit, $-1$.` },
    ],
    solution: String.raw`No. A two-sided limit exists only when the left-hand and right-hand limits are equal. From part (b), $\lim_{x \to 2^{-}} h(x) = 3$ and $\lim_{x \to 2^{+}} h(x) = -1$, so $\lim_{x \to 2} h(x)$ does not exist.` },
];

export default { forms: [{ id: "q103", name: "Topic 1.3 Quiz: Limits from Graphs", group: "Unit 1: Limits and Continuity", items }] };

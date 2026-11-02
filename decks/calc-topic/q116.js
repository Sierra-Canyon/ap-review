export const sets = {
  "q116-s1": {
    name: "Values of f",
    label: "Table",
    intro: String.raw`The function $f$ is continuous on the closed interval $[0, 6]$. Selected values of $f$ are given in the table below.`,
    sources: [{ title: "", blocks: [
      { table: { head: ["$x$", "$0$", "$2$", "$4$", "$6$"], rows: [["$f(x)$", "$1$", "$4$", "$-2$", "$3$"]] } },
    ] }],
  },
  "q116-s2": {
    name: "Greenhouse temperature",
    label: "Free response",
    intro: String.raw`The temperature inside a greenhouse is modeled by a function $W$, where $W(t)$ is measured in degrees Celsius and $t$ is measured in hours. The function $W$ is continuous on the closed interval $0 \leq t \leq 12$. Selected values of $W(t)$ are given in the table.`,
    sources: [{ title: "", blocks: [
      { table: { head: ["$t$ (hours)", "$0$", "$3$", "$7$", "$12$"], rows: [["$W(t)$ (degrees Celsius)", "$18$", "$25$", "$21$", "$30$"]] } },
    ] }],
  },
};

const items = [
  {
    id: "q116-m1", type: "mcq", skill: "u1", topic: "1.16", calc: false,
    question: String.raw`A function $g$ is continuous on the closed interval $[1, 5]$, with $g(1) = -3$ and $g(5) = 4$. Which of the following must be true?`,
    choices: [
      String.raw`$g(c) = 0$ for at least one $c$ in $(1, 5)$.`,
      String.raw`$g(3) = \frac{1}{2}$`,
      String.raw`$g(c) = 5$ for at least one $c$ in $(1, 5)$.`,
      String.raw`$g$ is increasing on $[1, 5]$.`,
    ],
    why: [
      String.raw`$g$ is continuous on $[1, 5]$ and $0$ is between $g(1) = -3$ and $g(5) = 4$, so by the Intermediate Value Theorem there is a $c$ in $(1, 5)$ with $g(c) = 0$.`,
      String.raw`$\frac{1}{2}$ is the average of $-3$ and $4$, and $3$ is the midpoint of the interval. The theorem says $g$ takes the value $\frac{1}{2}$ somewhere in $(1, 5)$, not at the midpoint.`,
      String.raw`$5$ is not between $-3$ and $4$, so the theorem does not guarantee it.`,
      String.raw`Continuity and the endpoint values do not tell whether $g$ increases. $g$ could rise and fall on the interval.`,
    ],
    answer: 0,
  },
  {
    id: "q116-m2", type: "mcq", skill: "u1", topic: "1.16", calc: false, set: "q116-s1",
    question: String.raw`For which of the following values of $N$ must the equation $f(x) = N$ have at least three solutions in the interval $(0, 6)$?`,
    choices: ["$2$", String.raw`$3.5$`, "$0$", "$-3$"],
    why: [
      String.raw`$f$ is continuous, and $2$ is between the endpoint values on each of $[0, 2]$ ($1$ and $4$), $[2, 4]$ ($4$ and $-2$), and $[4, 6]$ ($-2$ and $3$). By the Intermediate Value Theorem, $f(x) = 2$ has a solution in each of $(0, 2)$, $(2, 4)$, and $(4, 6)$.`,
      String.raw`$3.5$ is between $1$ and $4$ and between $4$ and $-2$, but not between $-2$ and $3$, so only two solutions are guaranteed.`,
      String.raw`$0$ is not between $f(0) = 1$ and $f(2) = 4$, so only the solutions in $(2, 4)$ and $(4, 6)$ are guaranteed.`,
      String.raw`$-3$ is less than every value in the table, so the theorem guarantees no solution.`,
    ],
    answer: 0,
  },
  {
    id: "q116-m3", type: "mcq", skill: "u1", topic: "1.16", calc: false,
    question: String.raw`Let $p(x) = \ln x + x - 2$. On which of the following intervals does the Intermediate Value Theorem guarantee a solution of $p(x) = 0$?`,
    choices: ["$[1, 2]$", "$[0, 1]$", "$[2, 3]$", String.raw`$\left[\frac{1}{2}, 1\right]$`],
    why: [
      String.raw`$p$ is continuous for $x > 0$, so it is continuous on $[1, 2]$. $p(1) = 0 + 1 - 2 = -1 < 0$ and $p(2) = \ln 2 > 0$, so $0$ is between $p(1)$ and $p(2)$ and a solution exists in $(1, 2)$.`,
      String.raw`$\ln x$ is not defined at $x = 0$, so $p$ is not continuous on $[0, 1]$ and the theorem does not apply there.`,
      String.raw`$p(2) = \ln 2$ and $p(3) = \ln 3 + 1$ are both positive, so the theorem gives no guarantee.`,
      String.raw`$p\left(\frac{1}{2}\right) = -\ln 2 - \frac{3}{2}$ and $p(1) = -1$ are both negative, so the theorem gives no guarantee.`,
    ],
    answer: 0,
  },
  {
    id: "q116-m4", type: "mcq", skill: "u1", topic: "1.16", calc: false,
    question: String.raw`$\tan\left(\dfrac{\pi}{4}\right) = 1$ and $\tan\left(\dfrac{3\pi}{4}\right) = -1$, but $\tan x = 0$ has no solution in the interval $\left(\dfrac{\pi}{4}, \dfrac{3\pi}{4}\right)$. Why does this not contradict the Intermediate Value Theorem?`,
    choices: [
      String.raw`$\tan x$ is not continuous on $\left[\frac{\pi}{4}, \frac{3\pi}{4}\right]$.`,
      String.raw`$0$ is not between $1$ and $-1$.`,
      "The theorem applies only to polynomials.",
      String.raw`$\tan\left(\frac{\pi}{4}\right)$ and $\tan\left(\frac{3\pi}{4}\right)$ have the same sign.`,
    ],
    why: [
      String.raw`$\tan x = \dfrac{\sin x}{\cos x}$ is undefined at $x = \dfrac{\pi}{2}$, which lies in the interval. The continuity hypothesis fails, so the theorem makes no claim.`,
      String.raw`$0$ is between $-1$ and $1$. The hypothesis that fails is continuity.`,
      String.raw`The theorem applies to any function that is continuous on a closed interval, not only to polynomials.`,
      String.raw`$\tan\left(\frac{\pi}{4}\right) = 1$ is positive and $\tan\left(\frac{3\pi}{4}\right) = -1$ is negative, so the signs differ.`,
    ],
    answer: 0,
  },
  {
    id: "q116-m5", type: "mcq", skill: "u1", topic: "1.16", calc: false,
    question: String.raw`A function $k$ is continuous on $[-2, 4]$, with $k(-2) = 5$ and $k(4) = -1$. For which of the following values of $N$ does the Intermediate Value Theorem guarantee that $k(c) = N$ for some $c$ in the open interval $(-2, 4)$?`,
    choices: ["$3$", "$6$", "$-2$", "$5$"],
    why: [
      String.raw`$3$ is between $k(4) = -1$ and $k(-2) = 5$, and $k$ is continuous on $[-2, 4]$, so some $c$ in $(-2, 4)$ has $k(c) = 3$.`,
      String.raw`$6$ is greater than both endpoint values, $5$ and $-1$.`,
      String.raw`$-2$ is the left endpoint of the interval, an $x$-value. As an output, $-2$ is less than both $-1$ and $5$.`,
      String.raw`$k(-2) = 5$ happens at the endpoint $x = -2$, which is not in the open interval. The theorem guarantees only values strictly between $-1$ and $5$.`,
    ],
    answer: 0,
  },
  {
    id: "q116-m6", type: "mcq", skill: "u1", topic: "1.16", calc: false,
    question: String.raw`Let $r(x) = \begin{cases} x^2 - 3, & x \leq 2 \\ 3x - 5, & x > 2. \end{cases}$ Does the Intermediate Value Theorem guarantee a value $c$ in $(0, 3)$ with $r(c) = 0$?`,
    choices: [
      String.raw`Yes, because $r$ is continuous on $[0, 3]$ and $r(0) < 0 < r(3)$.`,
      String.raw`No, because $r$ is defined by two different expressions on $[0, 3]$.`,
      String.raw`Yes, because $r(0)$ and $r(3)$ have opposite signs, whether or not $r$ is continuous.`,
      String.raw`No, because $r(0)$ and $r(3)$ are both positive.`,
    ],
    why: [
      String.raw`Each piece is a polynomial. At $x = 2$, $\lim_{x \to 2^{-}} r(x) = 4 - 3 = 1$, $\lim_{x \to 2^{+}} r(x) = 6 - 5 = 1$, and $r(2) = 1$, so $r$ is continuous on $[0, 3]$. Since $r(0) = -3 < 0 < 4 = r(3)$, the theorem applies.`,
      String.raw`A piecewise function can be continuous. The pieces meet at $x = 2$, where both one-sided limits equal $r(2) = 1$.`,
      String.raw`The answer is yes, but the reason is wrong: the theorem requires continuity on the closed interval, and that has to be checked.`,
      String.raw`$r(0) = 0^2 - 3 = -3$ is negative, and $r(3) = 9 - 5 = 4$ is positive.`,
    ],
    answer: 0,
  },
  {
    id: "q116-f1a", type: "frq", skill: "u1", topic: "1.16", calc: false, set: "q116-s2", part: "(a)",
    prompt: String.raw`Must there be a time $t$, for $3 < t < 7$, at which $W(t) = 24$? Justify your answer.`,
    rows: [
      { name: "Conditions", earns: String.raw`States that $W$ is continuous on $[3, 7]$ and that $W(7) = 21 < 24 < 25 = W(3)$.` },
      { name: "Conclusion", earns: "Yes, by the Intermediate Value Theorem." },
    ],
    solution: String.raw`$W$ is continuous on $[0, 12]$, so it is continuous on $[3, 7]$. Since $W(7) = 21 < 24 < 25 = W(3)$, the Intermediate Value Theorem guarantees a time $t$ with $3 < t < 7$ at which $W(t) = 24$. Yes, there must be such a time.`,
  },
  {
    id: "q116-f1b", type: "frq", skill: "u1", topic: "1.16", calc: false, set: "q116-s2", part: "(b)",
    prompt: String.raw`Can the Intermediate Value Theorem be used with the data in the table to conclude that $W(t) = 32$ for some $t$ in the interval $0 < t < 12$? Give a reason for your answer.`,
    rows: [
      { name: "Answer with reason", earns: String.raw`No, because $32$ is greater than every value in the table ($18$, $25$, $21$, and $30$), so $32$ is not between $W(a)$ and $W(b)$ for any two times $a$ and $b$ in the table.` },
    ],
    solution: String.raw`The Intermediate Value Theorem guarantees only values between $W(a)$ and $W(b)$ for times $a$ and $b$ where $W$ is known. The largest value in the table is $W(12) = 30$, and $32 > 30$, so $32$ is not between any two table values. The theorem cannot be used to conclude that $W(t) = 32$ for some $t$. (The temperature might reach $32$ degrees Celsius between table times, but the data do not guarantee it.)`,
  },
];

export default { forms: [{ id: "q116", name: "Topic 1.16 Quiz: Intermediate Value Theorem", group: "Unit 1: Limits and Continuity", items }] };

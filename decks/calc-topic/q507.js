export const sets = {
  "q507-s1": {
    name: "Values of f' and f''", label: "Table",
    intro: String.raw`A function $f$ has a continuous second derivative. Selected values of $f'$ and $f''$ are given in the table below.`,
    sources: [{ title: "", blocks: [{ table: { head: ["$x$", "$1$", "$2$", "$3$"], rows: [["$f'(x)$", "$0$", "$3$", "$0$"], ["$f''(x)$", "$-2$", "$0$", "$4$"]] } }] }],
  },
  "q507-s9": {
    name: "The function f", label: "Free response",
    intro: String.raw`Let $f$ be the function defined by $f(x) = x^4 - 18x^2 + 5$.`,
    sources: [{ title: "", blocks: [{ p: String.raw`$$f(x) = x^4 - 18x^2 + 5$$` }] }],
  },
};

const items = [
  { id: "q507-m01", type: "mcq", skill: "u5", topic: "5.7", calc: false, difficulty: "easy",
    stem: String.raw`Let $f(x) = 2x^3 - 9x^2 + 12x$.`,
    question: String.raw`Using the Second Derivative Test, which of the following is true?`,
    choices: [
      String.raw`$f$ has a relative maximum at $x = 1$ and a relative minimum at $x = 2$.`,
      String.raw`$f$ has a relative minimum at $x = 1$ and a relative maximum at $x = 2$.`,
      String.raw`$f$ has a relative minimum at $x = \frac{3}{2}$.`,
      String.raw`The Second Derivative Test gives no conclusion at $x = 1$ or $x = 2$.`,
    ],
    why: [
      String.raw`$f'(x) = 6x^2 - 18x + 12 = 6(x - 1)(x - 2)$ and $f''(x) = 12x - 18$. $f''(1) = -6 < 0$, so $x = 1$ is a relative maximum; $f''(2) = 6 > 0$, so $x = 2$ is a relative minimum.`,
      String.raw`This reverses the test. A negative second derivative at a critical point means the graph is concave down there, which gives a relative maximum.`,
      String.raw`$x = \dfrac{3}{2}$ is where $f''(x) = 0$. It is not a critical point, since $f'\left(\dfrac{3}{2}\right) = -\dfrac{3}{2} \ne 0$.`,
      String.raw`The test fails only when $f''(c) = 0$. Here $f''(1) = -6$ and $f''(2) = 6$ are both nonzero.`,
    ], answer: 0 },
  { id: "q507-m02", type: "mcq", skill: "u5", topic: "5.7", calc: false, difficulty: "easy", set: "q507-s1",
    question: String.raw`Which of the following is true?`,
    choices: [
      String.raw`$f$ has a relative maximum at $x = 1$ and a relative minimum at $x = 3$.`,
      String.raw`$f$ has a relative minimum at $x = 1$ and a relative maximum at $x = 3$.`,
      String.raw`$f$ has a relative extremum at $x = 2$ because $f''(2) = 0$.`,
      String.raw`The Second Derivative Test gives no conclusion at $x = 1$ or $x = 3$.`,
    ],
    why: [
      String.raw`At $x = 1$, $f'(1) = 0$ and $f''(1) < 0$, so $f$ has a relative maximum. At $x = 3$, $f'(3) = 0$ and $f''(3) > 0$, so $f$ has a relative minimum.`,
      String.raw`This reverses the test. A negative second derivative at a critical point means concave down, which gives a relative maximum.`,
      String.raw`$f'(2) = 3 \ne 0$, so $x = 2$ is not a critical point. $f''(2) = 0$ says nothing about an extremum there.`,
      String.raw`The test fails only when $f''(c) = 0$ at a critical point. Here $f''(1) = -2$ and $f''(3) = 4$ are both nonzero.`,
    ], answer: 0 },
  { id: "q507-m03", type: "mcq", skill: "u5", topic: "5.7", calc: false, difficulty: "difficult",
    stem: String.raw`The function $f(x) = x^3e^{x}$ has critical points at $x = -3$ and $x = 0$.`,
    question: String.raw`What does the Second Derivative Test conclude about these critical points?`,
    choices: [
      String.raw`A relative minimum at $x = -3$; no conclusion at $x = 0$`,
      String.raw`A relative minimum at $x = -3$ and a relative maximum at $x = 0$`,
      String.raw`A relative maximum at $x = -3$; no conclusion at $x = 0$`,
      String.raw`A relative minimum at $x = -3$ and a relative minimum at $x = 0$`,
    ],
    why: [
      String.raw`$f'(x) = 3x^2e^{x} + x^3e^{x} = x^2(x + 3)e^{x}$ and $f''(x) = x\left(x^2 + 6x + 6\right)e^{x}$. $f''(-3) = -3(9 - 18 + 6)e^{-3} = 9e^{-3} > 0$, so $x = -3$ is a relative minimum. $f''(0) = 0$, so the Second Derivative Test gives no conclusion at $x = 0$.`,
      String.raw`$f''(0) = 0$, which is neither positive nor negative, so the test cannot classify $x = 0$.`,
      String.raw`$f''(-3) = 9e^{-3} > 0$ means concave up at $x = -3$, which gives a relative minimum.`,
      String.raw`$f''(0) = 0$, so the test gives no conclusion at $x = 0$. (The First Derivative Test shows $f$ has no extremum there, since $f'(x) = x^2(x + 3)e^{x} > 0$ on both sides of $0$.)`,
    ], answer: 0 },
  { id: "q507-m04", type: "mcq", skill: "u5", topic: "5.7", calc: false, difficulty: "easy",
    question: String.raw`At what value of $x$ in the interval $0 < x < 2\pi$ does $f(x) = x + 2\cos x$ have a relative maximum?`,
    choices: [String.raw`$\frac{\pi}{6}$`, String.raw`$\frac{5\pi}{6}$`, String.raw`$\frac{\pi}{3}$`, String.raw`$\frac{7\pi}{6}$`],
    why: [
      String.raw`$f'(x) = 1 - 2\sin x = 0$ when $\sin x = \dfrac{1}{2}$, at $x = \dfrac{\pi}{6}$ and $x = \dfrac{5\pi}{6}$. $f''(x) = -2\cos x$, and $f''\left(\dfrac{\pi}{6}\right) = -\sqrt{3} < 0$, so $f$ has a relative maximum at $x = \dfrac{\pi}{6}$.`,
      String.raw`$f''\left(\dfrac{5\pi}{6}\right) = \sqrt{3} > 0$, so $x = \dfrac{5\pi}{6}$ is a relative minimum.`,
      String.raw`$\cos\dfrac{\pi}{3} = \dfrac{1}{2}$. The critical points come from $\sin x = \dfrac{1}{2}$, not $\cos x = \dfrac{1}{2}$.`,
      String.raw`This solves $\sin x = -\dfrac{1}{2}$, a sign error in $f'(x)$. The derivative of $2\cos x$ is $-2\sin x$.`,
    ], answer: 0 },
  { id: "q507-m05", type: "mcq", skill: "u5", topic: "5.7", calc: false, difficulty: "difficult",
    stem: String.raw`Let $g(x) = \dfrac{x^2 + 3}{x - 1}$ for $x \ne 1$. Then $g'(x) = \dfrac{(x + 1)(x - 3)}{(x - 1)^2}$ and $g''(x) = \dfrac{8}{(x - 1)^3}$.`,
    question: String.raw`What is the relative maximum value of $g$?`,
    choices: ["$-2$", "$6$", "$-1$", "$3$"],
    why: [
      String.raw`$g'(x) = 0$ at $x = -1$ and $x = 3$. $g''(-1) = \dfrac{8}{-8} = -1 < 0$, so $g$ has a relative maximum at $x = -1$, with value $g(-1) = \dfrac{1 + 3}{-2} = -2$.`,
      String.raw`$g(3) = \dfrac{12}{2} = 6$ is the relative minimum value, since $g''(3) = 1 > 0$. A relative maximum value can be less than a relative minimum value when the graph has a vertical asymptote between them.`,
      String.raw`$x = -1$ is where the relative maximum occurs. The value is $g(-1) = -2$.`,
      String.raw`$x = 3$ is where the relative minimum occurs, and it is a location, not a value.`,
    ], answer: 0 },
  { id: "q507-m06", type: "mcq", skill: "u5", topic: "5.7", calc: true, difficulty: "moderate",
    stem: String.raw`A function $f$ has derivative $f'(x) = e^{x} - 4x$.`,
    question: String.raw`At what value of $x$ in the interval $0 < x < 3$ does $f$ have a relative minimum?`,
    choices: ["$2.153$", "$0.357$", "$1.386$", String.raw`$f$ has no relative minimum on $(0, 3)$.`],
    why: [
      String.raw`Solving $e^{x} - 4x = 0$ with a calculator gives $x \approx 0.357$ and $x \approx 2.153$. $f''(x) = e^{x} - 4$, and $f''(2.153) \approx 4.613 > 0$, so $f$ has a relative minimum at $x \approx 2.153$.`,
      String.raw`$f''(0.357) \approx -2.570 < 0$, so $x \approx 0.357$ is a relative maximum.`,
      String.raw`$x = \ln 4 \approx 1.386$ solves $f''(x) = 0$. It is not a critical point: $f'(\ln 4) = 4 - 4\ln 4 < 0$.`,
      String.raw`$f'$ has two zeros on $(0, 3)$, and $f'' > 0$ at the larger one, so there is a relative minimum.`,
    ], answer: 0 },
  { id: "q507-f1a", type: "frq", skill: "u5", topic: "5.7", calc: false, set: "q507-s9", part: "(a)",
    prompt: String.raw`Find the $x$-coordinates of all critical points of $f$.`,
    rows: [
      { name: "Critical points", earns: String.raw`$f'(x) = 4x^3 - 36x = 4x(x - 3)(x + 3)$; $x = -3$, $x = 0$, and $x = 3$.` },
    ],
    solution: String.raw`$f'(x) = 4x^3 - 36x = 4x(x^2 - 9) = 4x(x - 3)(x + 3)$. $f'$ is defined everywhere and $f'(x) = 0$ at $x = -3$, $x = 0$, and $x = 3$.` },
  { id: "q507-f1b", type: "frq", skill: "u5", topic: "5.7", calc: false, set: "q507-s9", part: "(b)",
    prompt: String.raw`Use the Second Derivative Test to determine whether each critical point is the location of a relative maximum or a relative minimum of $f$.`,
    rows: [
      { name: "Second derivative values", earns: String.raw`$f''(x) = 12x^2 - 36$; $f''(-3) = 72$, $f''(0) = -36$, $f''(3) = 72$.` },
      { name: "Conclusions", earns: String.raw`Relative minimums at $x = -3$ and $x = 3$ because $f'' > 0$ there; relative maximum at $x = 0$ because $f''(0) < 0$.` },
    ],
    solution: String.raw`$f''(x) = 12x^2 - 36$. At $x = -3$: $f''(-3) = 108 - 36 = 72 > 0$, so $f'(-3) = 0$ and $f''(-3) > 0$ give a relative minimum. At $x = 0$: $f''(0) = -36 < 0$, so $f$ has a relative maximum. At $x = 3$: $f''(3) = 72 > 0$, so $f$ has a relative minimum.` },
];

export default { forms: [{ id: "q507", name: "Topic 5.7 Quiz: The Second Derivative Test", group: "Unit 5: Analytical Applications of Differentiation", items }] };

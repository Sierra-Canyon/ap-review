// AP Precalculus unit test, Unit 1: Polynomial and Rational Functions (topics 1.1 to 1.14).
import { graph } from "../../plot.js";

// f(x) = (x^3 - 3x^2 - 9x)/4 + 2 on [-3, 5]: relative max (-1, 3.25), inflection (1, -0.75), relative min (3, -4.75), endpoints (-3, -4.75) and (5, 3.25).
const fT = (x) => (x ** 3 - 3 * x * x - 9 * x) / 4 + 2;
// p(x) = (x + 2)(x - 1)^2(x - 3)/4: crosses at -2 and 3, touches at 1; p(0) = -1.5; relative min near (-1.15, -4.08) and (2.40, -1.29).
const pT = (x) => ((x + 2) * (x - 1) ** 2 * (x - 3)) / 4;

export const sets = {
  "pt1-s1": {
    name: "A cubic on a closed interval",
    label: "Graph",
    intro: String.raw`The graph of the function $f$, defined on the closed interval $[-3, 5]$, is shown below. The labeled points are $(-3, -4.75)$, $(-1, 3.25)$, $(1, -0.75)$, $(3, -4.75)$, and $(5, 3.25)$. The graph has a point of inflection at $x = 1$.`,
    sources: [{ title: "", blocks: [{ svg: graph({
      x: [-3.5, 5.5], y: [-6, 5], step: 1, xname: "x", yname: "y",
      fns: [{ f: fT, from: -3, to: 5, label: "f", labelAt: 4.3 }],
      dots: [[-3, -4.75, "closed"], [-1, 3.25, "closed"], [1, -0.75, "closed"], [3, -4.75, "closed"], [5, 3.25, "closed"]],
      alt: "Graph of f on [-3, 5]. The curve rises from (-3, -4.75) to a high point at (-1, 3.25), falls through (1, -0.75) to a low point at (3, -4.75), then rises to (5, 3.25).",
    }) }] }],
  },
  "pt1-s2": {
    name: "Values of a quadratic function",
    label: "Table",
    intro: String.raw`The function $g$ is quadratic. Selected values of $g$ are given in the table below; the value $g(6)$ is not shown.`,
    sources: [{ title: "", blocks: [{ table: { head: ["$x$", "$0$", "$2$", "$4$", "$6$", "$8$"], rows: [["$g(x)$", "$5$", "$9$", "$17$", "?", "$45$"]] } }] }],
  },
  "pt1-s3": {
    name: "A polynomial of degree 4",
    label: "Graph",
    intro: String.raw`The graph of the polynomial function $p$, of degree $4$, is shown below. The graph crosses the $x$-axis at $x = -2$ and $x = 3$ and touches it at $x = 1$ without crossing. The graph passes through $(0, -1.5)$.`,
    sources: [{ title: "", blocks: [{ svg: graph({
      x: [-3, 4], y: [-5, 5], step: 1, xname: "x", yname: "y",
      fns: [{ f: pT, from: -3, to: 4, label: "p", labelAt: 3.3 }],
      dots: [[-2, 0, "closed"], [1, 0, "closed"], [3, 0, "closed"], [0, -1.5, "closed"]],
      alt: "Graph of p. It comes down from the top left, crosses the x-axis at x = -2, reaches a low point near (-1.1, -4.1), rises through (0, -1.5) to touch the x-axis at x = 1, dips to a low point near (2.4, -1.3), crosses the x-axis at x = 3, and rises toward the top right.",
    }) }] }],
  },
  "pt1-s4": {
    name: "Monthly profit",
    label: "Table",
    intro: String.raw`A new shop's monthly profit $P$, in thousands of dollars, $x$ months after it opens is modeled by a quadratic function $P(x) = ax^{2} + bx + c$ whose graph passes through the three points in the table below.`,
    sources: [{ title: "", blocks: [{ table: { head: [String.raw`$x$ (months)`, "$1$", "$3$", "$7$"], rows: [[String.raw`$P(x)$ (thousands of dollars)`, "$2.5$", "$8.1$", "$9.7$"]] } }] }],
  },
  "pt1-s5": {
    name: "A cubic and a quadratic",
    label: "Free response",
    intro: String.raw`The function $f$ is given by $f(x) = -0.5x^{3} + 1.5x^{2} + 2x - 1$. Selected values of the function $g$ are given in the table below.`,
    sources: [{ title: "", blocks: [
      { table: { head: ["$x$", "$0$", "$1$", "$2$", "$3$", "$4$", "$5$"], rows: [["$g(x)$", "$2$", "$-0.5$", "$0$", "$3.5$", "$10$", "$19.5$"]] } },
      { p: String.raw`A graphing calculator is allowed on this question. Give decimal answers correct to three places after the decimal point.` },
    ] }],
  },
  "pt1-s6": {
    name: "Polynomial and rational expressions",
    label: "Free response",
    intro: String.raw`Answer each part without a calculator. Give exact answers, and show the work that leads to each answer.`,
    sources: [{ title: "", blocks: [{ p: String.raw`In part (c), $r$ is the function given by $r(x) = \dfrac{x^{3} - x^{2} - 2x}{x^{2} - 4}$.` }] }],
  },
};

const items = [
  // Multiple choice, no calculator
  { id: "pt1-m01", type: "mcq", skill: "u1", topic: "1.1", calc: false, difficulty: "easy", set: "pt1-s1",
    question: String.raw`On which interval is $f$ decreasing?`,
    choices: ["$[-1, 3]$", String.raw`$[-3, -1] \cup [3, 5]$`, "$[-4.75, 3.25]$", "$[1, 5]$"],
    why: [
      String.raw`As $x$ increases from $-1$ to $3$, the graph falls from the high point $(-1, 3.25)$ to the low point $(3, -4.75)$, so $f$ is decreasing on $[-1, 3]$.`,
      String.raw`On $[-3, -1]$ and $[3, 5]$ the graph rises. These are the intervals where $f$ is increasing.`,
      String.raw`$-4.75$ and $3.25$ are outputs, the least and greatest values of $f$. An interval where $f$ decreases is written with inputs.`,
      String.raw`On $[1, 5]$ the graph is concave up, but it rises from $x = 3$ to $x = 5$. Concavity describes the rate of change, not the direction of $f$.`,
    ], answer: 0 },
  { id: "pt1-m02", type: "mcq", skill: "u1", topic: "1.12", calc: false, difficulty: "easy",
    question: String.raw`The graph of $g$ is obtained from the graph of $f(x) = x^{2}$ by a vertical dilation by a factor of $3$, followed by a translation $2$ units to the right. Which of the following defines $g$?`,
    choices: [String.raw`$g(x) = 3(x - 2)^{2}$`, String.raw`$g(x) = 3(x + 2)^{2}$`, String.raw`$g(x) = (3x - 6)^{2}$`, String.raw`$g(x) = 3x^{2} - 2$`],
    why: [
      String.raw`The vertical dilation gives $3f(x) = 3x^{2}$. Translating $2$ units right replaces $x$ with $x - 2$: $g(x) = 3(x - 2)^{2}$.`,
      String.raw`Replacing $x$ with $x + 2$ translates the graph $2$ units left.`,
      String.raw`$(3x - 6)^{2} = 9(x - 2)^{2}$. Putting the factor $3$ inside the square dilates by $9$, not $3$.`,
      String.raw`Subtracting $2$ from the output translates the graph down, not to the right.`,
    ], answer: 0 },
  { id: "pt1-m03", type: "mcq", skill: "u1", topic: "1.3", calc: false, difficulty: "moderate", set: "pt1-s2",
    question: String.raw`What is the value of $g(6)$?`,
    choices: ["$29$", "$25$", "$23$", "$33$"],
    why: [
      String.raw`The average rates of change over $[0, 2]$ and $[2, 4]$ are $\dfrac{4}{2} = 2$ and $\dfrac{8}{2} = 4$. For a quadratic, the average rates over consecutive equal-length intervals change by a constant, here $2$, so the rate over $[4, 6]$ is $6$ and over $[6, 8]$ is $8$. Then $g(6) = 17 + 2(6) = 29$, and $29 + 2(8) = 45$ checks with the table.`,
      String.raw`$25 = 17 + 8$ repeats the last change in $g$, as if $g$ were linear from $x = 4$ on. Then $g(8)$ would be $33$, not $45$.`,
      String.raw`$23 = 17 + 6$ adds the average rate of change over $[4, 6]$ without multiplying by the interval length $2$.`,
      String.raw`$33 = 17 + 16$ doubles the change in $g$ each time ($4$, $8$, $16$), an exponential pattern. Then $g(8)$ would be $33 + 32 = 65$, not $45$.`,
    ], answer: 0 },
  { id: "pt1-m04", type: "mcq", skill: "u1", topic: "1.4", calc: false, difficulty: "moderate",
    question: String.raw`What are the degree and the leading coefficient of $p(x) = (3 - 2x)^{3}(x^{2} + 1)$?`,
    choices: [
      String.raw`Degree $5$, leading coefficient $-8$`,
      String.raw`Degree $5$, leading coefficient $-2$`,
      String.raw`Degree $5$, leading coefficient $27$`,
      String.raw`Degree $6$, leading coefficient $-8$`,
    ],
    why: [
      String.raw`The leading term of $(3 - 2x)^{3}$ is $(-2x)^{3} = -8x^{3}$, and the leading term of $x^{2} + 1$ is $x^{2}$. Their product is $-8x^{5}$.`,
      String.raw`$-2$ is the coefficient of $x$ inside the cube. It must be cubed: $(-2)^{3} = -8$.`,
      String.raw`$27 = 3^{3}$ cubes the first-written term, the constant $3$. The leading term comes from the highest power of $x$.`,
      String.raw`$6$ multiplies the exponents $3$ and $2$. The degrees of the factors add: $3 + 2 = 5$.`,
    ], answer: 0 },
  { id: "pt1-m05", type: "mcq", skill: "u1", topic: "1.5", calc: false, difficulty: "moderate", set: "pt1-s3",
    question: String.raw`Which of the following could define $p$?`,
    choices: [String.raw`$p(x) = \frac{1}{4}(x + 2)(x - 1)^{2}(x - 3)$`, String.raw`$p(x) = \frac{1}{4}(x - 2)(x + 1)^{2}(x + 3)$`, String.raw`$p(x) = \frac{1}{4}(x + 2)^{2}(x - 1)(x - 3)$`, String.raw`$p(x) = -\frac{1}{4}(x + 2)(x - 1)^{2}(x - 3)$`],
    why: [
      String.raw`Crossings at $x = -2$ and $x = 3$ give the factors $(x + 2)$ and $(x - 3)$ with odd multiplicity, and the touch at $x = 1$ gives $(x - 1)^{2}$. The leading coefficient $\frac{1}{4}$ is positive, so both ends rise, and $p(0) = \frac{1}{4}(2)(1)(-3) = -1.5$.`,
      String.raw`These factors are $0$ at $x = 2$, $x = -1$, and $x = -3$. A zero at $x = a$ gives the factor $x - a$, so the signs are reversed.`,
      String.raw`This squares the wrong factor. The graph would touch the $x$-axis at $x = -2$ and cross at $x = 1$.`,
      String.raw`The negative leading coefficient would make both ends fall. The graph rises at both ends.`,
    ], answer: 0 },
  { id: "pt1-m06", type: "mcq", skill: "u1", topic: "1.5", calc: false, difficulty: "moderate",
    question: String.raw`A polynomial function $p$ of degree $6$ with real coefficients has zeros at $x = 3i$ and $x = 1 + 2i$. What is the greatest possible number of $x$-intercepts of the graph of $p$?`,
    choices: ["$2$", "$4$", "$6$", "$3$"],
    why: [
      String.raw`With real coefficients, the conjugates $-3i$ and $1 - 2i$ are also zeros. These four non-real zeros use $4$ of the $6$ zeros counted with multiplicity, leaving at most $2$ real zeros, so at most $2$ $x$-intercepts.`,
      String.raw`$4 = 6 - 2$ subtracts only the two given zeros. Their conjugates must also be zeros.`,
      String.raw`$6$ is the degree. Non-real zeros are not $x$-intercepts.`,
      String.raw`$3 = 6 - 3$ counts the conjugate of only one of the given zeros. Each non-real zero has its own conjugate.`,
    ], answer: 0 },
  { id: "pt1-m07", type: "mcq", skill: "u1", topic: "1.6", calc: false, difficulty: "easy",
    question: String.raw`Let $h(x) = -2x^{6} + 5x^{3} - 1$. What is $\displaystyle \lim_{x \to -\infty} h(x)$?`,
    choices: [String.raw`$-\infty$`, String.raw`$\infty$`, "$-2$", "$-1$"],
    why: [
      String.raw`The leading term $-2x^{6}$ controls the end behavior. For $x$ large and negative, $x^{6}$ is large and positive, so $-2x^{6}$ decreases without bound.`,
      String.raw`An even power of a negative number is positive, but the leading coefficient $-2$ makes $-2x^{6}$ negative.`,
      String.raw`$-2$ is the leading coefficient. A polynomial of degree $6$ does not level off at a constant.`,
      String.raw`$-1$ is $h(0)$, the constant term, not the end behavior.`,
    ], answer: 0 },
  { id: "pt1-m08", type: "mcq", skill: "u1", topic: "1.7", calc: false, difficulty: "easy",
    question: String.raw`What is $\displaystyle \lim_{x \to -\infty} \frac{6x^{2} + 1}{3x^{2} - x}$?`,
    choices: ["$2$", String.raw`$\frac{1}{2}$`, "$-2$", String.raw`$-\infty$`],
    why: [
      String.raw`The numerator and denominator have the same degree, so the limit is the ratio of the leading coefficients, $\dfrac{6}{3} = 2$. The squares $x^{2}$ are positive for negative $x$ too.`,
      String.raw`$\dfrac{1}{2}$ is $\dfrac{3}{6}$, the ratio turned upside down.`,
      String.raw`Letting $x \to -\infty$ does not make the limit negative here: both leading terms contain $x^{2}$, which is positive.`,
      String.raw`The degrees are equal, so the outputs level off. A limit of $-\infty$ needs the numerator to have the greater degree.`,
    ], answer: 0 },
  { id: "pt1-m09", type: "mcq", skill: "u1", topic: "1.7", calc: false, difficulty: "difficult",
    question: String.raw`Let $r(x) = \dfrac{ax^{3} + 2}{(2x - 1)^{2}(x + 3)}$, where $a$ is a constant. If $\displaystyle \lim_{x \to \infty} r(x) = -2$, what is the value of $a$?`,
    choices: ["$-8$", "$-4$", "$-2$", String.raw`$-\frac{1}{2}$`],
    why: [
      String.raw`The leading term of the denominator is $(2x)^{2} \cdot x = 4x^{3}$. The degrees are equal, so the limit is $\dfrac{a}{4} = -2$, and $a = -8$.`,
      String.raw`$-4$ uses $2x^{3}$ as the leading term of the denominator. The factor $2x - 1$ is squared, so its $2$ is squared too.`,
      String.raw`$-2$ treats the leading coefficient of the denominator as $1$. Expanding $(2x - 1)^{2}(x + 3)$ gives $4x^{3}$ as the leading term.`,
      String.raw`$-\dfrac{1}{2}$ solves $4a = -2$, multiplying by $4$ instead of dividing. The limit is $\dfrac{a}{4}$.`,
    ], answer: 0 },
  { id: "pt1-m10", type: "mcq", skill: "u1", topic: "1.8", calc: false, difficulty: "moderate",
    question: String.raw`Let $r(x) = \dfrac{x^{3} - 9x}{x^{2} - 3x}$. What are all the real zeros of $r$?`,
    choices: [String.raw`$x = -3$ only`, String.raw`$x = -3$, $x = 0$, and $x = 3$`, String.raw`$x = 0$ and $x = 3$`, String.raw`$x = -3$ and $x = 3$`],
    why: [
      String.raw`$r(x) = \dfrac{x(x - 3)(x + 3)}{x(x - 3)}$. The numerator is $0$ at $-3$, $0$, and $3$, but $0$ and $3$ also make the denominator $0$, so they are not in the domain; the graph has holes there. The only real zero is $x = -3$.`,
      String.raw`These are the zeros of the numerator. A zero of $r$ must be in the domain, and $r(0)$ and $r(3)$ are undefined.`,
      String.raw`$0$ and $3$ are zeros of the denominator, where $r$ is undefined. They give holes, not zeros.`,
      String.raw`$x = 3$ makes the denominator $0$, so $r(3)$ is undefined. The graph has a hole at $x = 3$, not a zero.`,
    ], answer: 0 },
  // Multiple choice, calculator
  { id: "pt1-m11", type: "mcq", skill: "u1", topic: "1.2", calc: true, difficulty: "easy",
    question: String.raw`Let $g(x) = \dfrac{40}{x^{2} + 1}$. The average rate of change of $g$ over the interval $[3, 3.001]$ is used to estimate the rate of change of $g$ at $x = 3$. What is this estimate?`,
    choices: ["$-2.399$", "$4.000$", "$-0.002$", "$-0.417$"],
    why: [
      String.raw`$\dfrac{g(3.001) - g(3)}{3.001 - 3} \approx \dfrac{3.997601 - 4}{0.001} \approx -2.399$. Over a short interval the average rate of change is close to the rate of change at $x = 3$.`,
      String.raw`$4.000$ is $g(3)$, the value of the function, not its rate of change.`,
      String.raw`$-0.002$ is the change in $g$, about $-0.0024$, without dividing by the change in $x$, $0.001$.`,
      String.raw`$-0.417$ is the reciprocal of the estimate, the change in $x$ over the change in $g$.`,
    ], answer: 0 },
  { id: "pt1-m12", type: "mcq", skill: "u1", topic: "1.4", calc: true, difficulty: "easy",
    question: String.raw`Let $p(x) = 0.2x^{4} - x^{3} + 0.5x^{2} + 3x + 2$. What is the absolute minimum value of $p$ on the interval $[-1, 4]$?`,
    choices: ["$0.513$", "$-0.782$", "$0.700$", "$4.657$"],
    why: [
      String.raw`A graph of $p$ on $[-1, 4]$ shows relative minimums at $x \approx -0.782$, where $p \approx 0.513$, and at $x \approx 2.849$, where $p \approx 4.657$. The endpoint values are $p(-1) = 0.7$ and $p(4) = 9.2$. The least of these is $0.513$.`,
      String.raw`$-0.782$ is the input where the minimum occurs. The question asks for the minimum value, an output.`,
      String.raw`$0.700$ is $p(-1)$, the left endpoint value. The graph dips below it just to the right of $x = -1$.`,
      String.raw`$4.657$ is the relative minimum on the right side of the interval. The relative minimum at $x \approx -0.782$ is lower.`,
    ], answer: 0 },
  { id: "pt1-m13", type: "mcq", skill: "u1", topic: "1.9", calc: true, difficulty: "easy",
    question: String.raw`Which of the following is an equation of a vertical asymptote of the graph of $r(x) = \dfrac{2x + 7}{x^{2} - 4x - 3}$?`,
    choices: ["$x = 4.646$", "$x = -4.646$", "$x = -1.292$", "$x = -3.500$"],
    why: [
      String.raw`The denominator is $0$ at $x = 2 \pm \sqrt{7}$, so $x \approx 4.646$ and $x \approx -0.646$. The numerator is not $0$ at either value, so both lines are vertical asymptotes, and $x = 4.646$ is one of them.`,
      String.raw`$-4.646$ is a zero of $x^{2} + 4x - 3$, which changes the sign of the middle term. The zeros of $x^{2} - 4x - 3$ are $2 \pm \sqrt{7}$.`,
      String.raw`$-1.292$ is $4 - \sqrt{28}$, which applies the quadratic formula without dividing by $2a = 2$. The zeros are $\dfrac{4 \pm \sqrt{28}}{2} = 2 \pm \sqrt{7}$.`,
      String.raw`$x = -3.5$ makes the numerator $0$, and the denominator is $23.25$ there, so $x = -3.5$ is a zero of $r$, not an asymptote.`,
    ], answer: 0 },
  { id: "pt1-m14", type: "mcq", skill: "u1", topic: "1.13", calc: true, difficulty: "easy",
    stem: String.raw`The volume of water in a reservoir, in millions of gallons, $t$ months after the start of a year is modeled by $V(t) = 0.05t^{3} - 0.9t^{2} + 3.6t + 20$ for $0 \le t \le 12$.`,
    question: String.raw`According to the model, what is the greatest volume of water in the reservoir during the year, in millions of gallons?`,
    choices: ["$24.157$", "$2.536$", "$20.000$", "$15.843$"],
    why: [
      String.raw`A graph of $V$ on $[0, 12]$ shows a relative maximum at $t \approx 2.536$, where $V \approx 24.157$, and a relative minimum at $t \approx 9.464$, where $V \approx 15.843$. The endpoint values are $V(0) = 20$ and $V(12) = 20$. The greatest value is $24.157$ million gallons.`,
      String.raw`$2.536$ is the time, in months, when the greatest volume occurs, not the volume.`,
      String.raw`$20.000$ is the volume at both endpoints, $t = 0$ and $t = 12$. The model is larger in between.`,
      String.raw`$15.843$ is the relative minimum value, the least volume, not the greatest.`,
    ], answer: 0 },
  { id: "pt1-m15", type: "mcq", skill: "u1", topic: "1.14", calc: true, difficulty: "difficult", set: "pt1-s4",
    question: String.raw`According to the model, how many months after the shop opens does the monthly profit fall back to $0$?`,
    choices: ["$10.648$", "$0.352$", "$5.500$", "$11.000$"],
    why: [
      String.raw`The three points give $a + b + c = 2.5$, $9a + 3b + c = 8.1$, and $49a + 7b + c = 9.7$. Solving the system (for example with a matrix on a calculator) gives $a = -0.4$, $b = 4.4$, $c = -1.5$. Then $-0.4x^{2} + 4.4x - 1.5 = 0$ at $x \approx 0.352$ and $x \approx 10.648$. The profit falls back to $0$ after its peak, at $x \approx 10.648$ months.`,
      String.raw`$0.352$ is the earlier zero, when the profit first rises above $0$. The question asks when it falls back to $0$.`,
      String.raw`$5.500 = -\dfrac{4.4}{2(-0.4)}$ is the input at the vertex, when the profit is greatest.`,
      String.raw`$11.000$ solves $-0.4x^{2} + 4.4x = 0$, which leaves out the constant $c = -1.5$.`,
    ], answer: 0 },
  // Free response 1: Function Concepts, calculator
  { id: "pt1-f1a", type: "frq", skill: "u1", topic: "1.3", calc: true, set: "pt1-s5", part: "(a)",
    prompt: String.raw`(i) Based on the table, which type of function, linear, quadratic, or cubic, best models $g$? (ii) Give a reason for your answer in (i) based on the values in the table.`,
    rows: [
      { name: "(i) Model", earns: "Quadratic." },
      { name: "(ii) Reason", earns: String.raw`Over consecutive equal-length input intervals, the first differences $-2.5, 0.5, 3.5, 6.5, 9.5$ are not constant, and the second differences are all $3$, which is constant.` },
    ],
    solution: String.raw`(i) Quadratic. (ii) The inputs are equally spaced by $1$. The first differences of $g$ are $-0.5 - 2 = -2.5$, $0.5$, $3.5$, $6.5$, and $9.5$, which are not constant, so $g$ is not linear. The second differences are all $3$, which is constant over consecutive equal-length intervals, the pattern of a quadratic function.` },
  { id: "pt1-f1b", type: "frq", skill: "u1", topic: "1.4", calc: true, set: "pt1-s5", part: "(b)",
    prompt: String.raw`(i) Find the $x$-coordinate of each relative maximum of $f$. (ii) Describe the end behavior of $f$ using limit notation.`,
    rows: [
      { name: "(i) Relative maximum", earns: String.raw`$x \approx 2.528$ only.` },
      { name: "(ii) End behavior", earns: String.raw`$\displaystyle \lim_{x \to -\infty} f(x) = \infty$ and $\displaystyle \lim_{x \to \infty} f(x) = -\infty$.` },
    ],
    solution: String.raw`(i) A graph of $f$ shows a relative minimum at $x \approx -0.528$ and a relative maximum at $x \approx 2.528$. $f$ changes from increasing to decreasing only at $x \approx 2.528$. (ii) The leading term $-0.5x^{3}$ has odd degree and a negative leading coefficient, so $$\lim_{x \to -\infty} f(x) = \infty \quad \text{and} \quad \lim_{x \to \infty} f(x) = -\infty$$` },
  { id: "pt1-f1c", type: "frq", skill: "u1", topic: "1.14", calc: true, set: "pt1-s5", part: "(c)",
    prompt: String.raw`(i) Use the table to write an expression for $g(x)$. (ii) Find all values of $x$ for which $f(x) = g(x)$.`,
    rows: [
      { name: "(i) Expression for g", earns: String.raw`$g(x) = 1.5x^{2} - 4x + 2$, from a quadratic regression or equivalent work.` },
      { name: "(ii) Solution", earns: String.raw`$x \approx -3.691$, $x \approx 0.511$, and $x \approx 3.180$.` },
    ],
    solution: String.raw`(i) A quadratic regression on the six points, or the values $g(0) = 2$, $g(1) = -0.5$, $g(2) = 0$, gives $g(x) = 1.5x^{2} - 4x + 2$, which fits every value in the table; for example, $g(5) = 37.5 - 20 + 2 = 19.5$. (ii) Graph $y = -0.5x^{3} + 1.5x^{2} + 2x - 1$ and $y = 1.5x^{2} - 4x + 2$ and find the intersections. The graphs meet at $x \approx -3.691$, $x \approx 0.511$, and $x \approx 3.180$. (Equivalently, these are the zeros of $f(x) - g(x) = -0.5x^{3} + 6x - 3$.)` },
  // Free response 2: Symbolic Manipulations, no calculator
  { id: "pt1-f2a", type: "frq", skill: "u1", topic: "1.11", calc: false, set: "pt1-s6", part: "(a)",
    prompt: String.raw`(i) Rewrite $\dfrac{2x^{3} - 3x^{2} + 4x - 5}{x - 2}$ in the form $q(x) + \dfrac{k}{x - 2}$, where $q$ is a polynomial and $k$ is a constant. (ii) Use the binomial theorem to expand $(3x - 2)^{4}$. Write the result as a polynomial in standard form.`,
    rows: [
      { name: "(i) Division", earns: String.raw`$2x^{2} + x + 6 + \dfrac{7}{x - 2}$, with supporting work.` },
      { name: "(ii) Expansion", earns: String.raw`$81x^{4} - 216x^{3} + 216x^{2} - 96x + 16$, with supporting work.` },
    ],
    solution: String.raw`(i) Synthetic division by $x - 2$ with the coefficients $2, -3, 4, -5$ gives $2, 1, 6$ and a remainder of $7$: $$\frac{2x^{3} - 3x^{2} + 4x - 5}{x - 2} = 2x^{2} + x + 6 + \frac{7}{x - 2}$$ (ii) Row $4$ of Pascal's triangle is $1, 4, 6, 4, 1$. $$(3x - 2)^{4} = (3x)^{4} + 4(3x)^{3}(-2) + 6(3x)^{2}(-2)^{2} + 4(3x)(-2)^{3} + (-2)^{4} = 81x^{4} - 216x^{3} + 216x^{2} - 96x + 16$$` },
  { id: "pt1-f2b", type: "frq", skill: "u1", topic: "1.5", calc: false, set: "pt1-s6", part: "(b)",
    prompt: String.raw`(i) Find all zeros, real and non-real, of $p(x) = x^{4} + 2x^{2} - 15$. (ii) Solve $\dfrac{2x - 1}{x + 3} \le 1$. Give the answer as an interval.`,
    rows: [
      { name: "(i) Zeros", earns: String.raw`$x = \sqrt{3}$, $x = -\sqrt{3}$, $x = i\sqrt{5}$, and $x = -i\sqrt{5}$, with supporting work.` },
      { name: "(ii) Inequality", earns: String.raw`$(-3, 4]$, with supporting work that excludes $x = -3$.` },
    ],
    solution: String.raw`(i) $x^{4} + 2x^{2} - 15 = (x^{2} - 3)(x^{2} + 5)$. Then $x^{2} = 3$ gives $x = \pm\sqrt{3}$, and $x^{2} = -5$ gives $x = \pm i\sqrt{5}$. (ii) Subtract $1$: $\dfrac{2x - 1}{x + 3} - \dfrac{x + 3}{x + 3} = \dfrac{x - 4}{x + 3} \le 0$. The quotient is $0$ at $x = 4$ and undefined at $x = -3$. Test values: at $x = -4$, $\dfrac{-8}{-1} = 8 > 0$; at $x = 0$, $\dfrac{-4}{3} < 0$; at $x = 5$, $\dfrac{1}{8} > 0$. The solution is $-3 < x \le 4$, or $(-3, 4]$.` },
  { id: "pt1-f2c", type: "frq", skill: "u1", topic: "1.10", calc: false, set: "pt1-s6", part: "(c)",
    prompt: String.raw`(i) Find the coordinates of the hole in the graph of $r$. (ii) Write an equation for the slant asymptote of the graph of $r$.`,
    rows: [
      { name: "(i) Hole", earns: String.raw`$\left(2, \dfrac{3}{2}\right)$, with supporting work.` },
      { name: "(ii) Slant asymptote", earns: String.raw`$y = x - 1$, with supporting work.` },
    ],
    solution: String.raw`(i) $r(x) = \dfrac{x(x - 2)(x + 1)}{(x - 2)(x + 2)}$. The factor $x - 2$ cancels, so the graph has a hole at $x = 2$. For $x \ne 2$, $r(x) = \dfrac{x(x + 1)}{x + 2}$, and $\displaystyle \lim_{x \to 2} \frac{x(x + 1)}{x + 2} = \frac{6}{4} = \frac{3}{2}$. The hole is at $\left(2, \dfrac{3}{2}\right)$. (ii) Dividing, $\dfrac{x^{2} + x}{x + 2} = x - 1 + \dfrac{2}{x + 2}$. As $x \to \pm\infty$, $\dfrac{2}{x + 2} \to 0$, so the slant asymptote is $y = x - 1$.` },
];

export default {
  forms: [{
    id: "pt1",
    name: "Unit 1 Test",
    group: "Unit 1: Polynomial and Rational Functions",
    items,
  }],
};

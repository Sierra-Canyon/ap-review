import { graph } from "../../plot.js";

export const sets = {
  "q605-s1": { name: "The graph of f", label: "Graph", intro: String.raw`The graph of the continuous function $f$ on $[-2, 6]$, made of three line segments, is shown below. Let $g(x) = \displaystyle \int_0^x f(t)\,dt$ for $-2 \le x \le 6$.`,
    sources: [{ title: "", blocks: [{ svg: graph({ x: [-2, 7], y: [-3, 3], xname: "x", yname: "y", segments: [[-2, 2, 0, -2], [0, -2, 3, 1], [3, 1, 6, -2]], labels: [[3.3, 1.5, "f"]],
      alt: "Graph of f made of three segments: from (negative 2, 2) down to (0, negative 2), crossing the x-axis at x = negative 1; from (0, negative 2) up to (3, 1), crossing the x-axis at x = 2; and from (3, 1) down to (6, negative 2), crossing the x-axis at x = 4." }) }] }] },
  "q605-s9": { name: "An accumulation function", label: "Free response", intro: String.raw`Let $F(x) = \displaystyle \int_0^x \left( t^2 - 6t + 8 \right) dt$ for $0 \le x \le 6$.`,
    sources: [{ title: "", blocks: [{ p: String.raw`$$F(x) = \int_0^x \left( t^2 - 6t + 8 \right) dt, \quad 0 \le x \le 6$$` }] }] },
};

const items = [
  { id: "q605-m01", type: "mcq", skill: "u6", topic: "6.5", calc: false, difficulty: "moderate", set: "q605-s1",
    question: String.raw`On which of the following intervals is $g$ increasing?`,
    choices: ["$(-2, -1)$ and $(2, 4)$", "$(0, 3)$ only", "$(-1, 2)$ and $(4, 6)$", "$(-2, 0)$ and $(3, 6)$"],
    why: [
      String.raw`$g'(x) = f(x)$, and $f(x) > 0$ on $(-2, -1)$ and on $(2, 4)$, so $g$ is increasing on those intervals.`,
      String.raw`$f$ is increasing on $(0, 3)$, which makes the graph of $g$ concave up there. $g$ increases where $f$ is positive.`,
      String.raw`On these intervals $f(x) < 0$, so $g$ is decreasing there.`,
      String.raw`These are the intervals where $f$ is decreasing, which is where the graph of $g$ is concave down.`,
    ], answer: 0 },
  { id: "q605-m02", type: "mcq", skill: "u6", topic: "6.5", calc: false, difficulty: "moderate", set: "q605-s1",
    question: String.raw`At which values of $x$ in the open interval $(-2, 6)$ does $g$ have a relative maximum?`,
    choices: ["$-1$ and $4$", "$2$ only", "$0$ and $3$", "$-1$, $2$, and $4$"],
    why: [
      String.raw`$g' = f$ changes from positive to negative at $x = -1$ and at $x = 4$, so $g$ has a relative maximum at both.`,
      String.raw`At $x = 2$, $g' = f$ changes from negative to positive. That is a relative minimum.`,
      String.raw`$f$ has a relative minimum at $x = 0$ and a relative maximum at $x = 3$. Those are where $g' = f$ changes between decreasing and increasing, so they are points of inflection of the graph of $g$.`,
      String.raw`These are all the zeros of $f$. At $x = 2$, $f$ changes from negative to positive, which gives a relative minimum, not a maximum.`,
    ], answer: 0 },
  { id: "q605-m03", type: "mcq", skill: "u6", topic: "6.5", calc: false, difficulty: "difficult", set: "q605-s1",
    question: String.raw`What is the average rate of change of $g$ on the interval $[-2, 6]$?`,
    choices: [String.raw`$-\frac{3}{8}$`, String.raw`$-\frac{1}{2}$`, String.raw`$\frac{7}{8}$`, String.raw`$\frac{3}{8}$`],
    why: [
      String.raw`$g(-2) = -\displaystyle \int_{-2}^0 f(t)\,dt = -(1 - 1) = 0$. $g(6) = -2 + \dfrac{1}{2} + \dfrac{1}{2} - 2 = -3$, from the triangles on $[0, 2]$, $[2, 3]$, $[3, 4]$, and $[4, 6]$. The average rate of change is $\dfrac{g(6) - g(-2)}{6 - (-2)} = \dfrac{-3 - 0}{8} = -\dfrac{3}{8}$.`,
      String.raw`$-\dfrac{1}{2} = \dfrac{f(6) - f(-2)}{8} = \dfrac{-2 - 2}{8}$ is the average rate of change of $f$, not of $g$.`,
      String.raw`$\dfrac{7}{8}$ adds all the areas between the graph and the axis, $1 + 1 + 2 + \dfrac{1}{2} + \dfrac{1}{2} + 2 = 7$, as if they were all above the axis.`,
      String.raw`$\dfrac{3}{8}$ subtracts in the wrong order, $\dfrac{g(-2) - g(6)}{8}$.`,
    ], answer: 0 },
  { id: "q605-m04", type: "mcq", skill: "u6", topic: "6.5", calc: false, difficulty: "moderate", set: "q605-s1",
    question: String.raw`On which of the following intervals is the graph of $g$ concave down?`,
    choices: ["$(-2, 0)$ and $(3, 6)$", "$(0, 3)$ only", "$(-1, 2)$ and $(4, 6)$", "$(-2, -1)$ and $(2, 4)$"],
    why: [
      String.raw`$g''(x) = f'(x)$, and $f$ is decreasing on $(-2, 0)$ and on $(3, 6)$, so the graph of $g$ is concave down there.`,
      String.raw`$f$ is increasing on $(0, 3)$, so $g'' > 0$ and the graph of $g$ is concave up there.`,
      String.raw`$f(x) < 0$ on these intervals, which makes $g$ decreasing. Concavity depends on whether $f$ is increasing or decreasing.`,
      String.raw`$f(x) > 0$ on these intervals, which makes $g$ increasing. Concavity depends on the slope of $f$, not its sign.`,
    ], answer: 0 },
  { id: "q605-m05", type: "mcq", skill: "u6", topic: "6.5", calc: false, difficulty: "difficult", set: "q605-s1",
    question: String.raw`At what value of $x$ does $g$ attain its absolute minimum on $[-2, 6]$?`,
    choices: ["$6$", "$2$", "$0$", "$4$"],
    why: [
      String.raw`The candidates are the endpoints and the critical points: $g(-2) = 0$, $g(-1) = 1$, $g(2) = -2$, $g(4) = -1$, and $g(6) = -1 - 2 = -3$. The least value is $g(6) = -3$, at the right endpoint.`,
      String.raw`$g$ has a relative minimum at $x = 2$, where $g(2) = -2$. After $x = 4$, $g$ decreases again and reaches $g(6) = -3$, which is smaller.`,
      String.raw`$f$ has a relative minimum at $x = 0$, where it changes from decreasing to increasing. That gives a point of inflection of the graph of $g$, not a minimum of $g$.`,
      String.raw`At $x = 4$, $g' = f$ changes from positive to negative, so $g$ has a relative maximum there.`,
    ], answer: 0 },
  { id: "q605-m06", type: "mcq", skill: "u6", topic: "6.5", calc: false, difficulty: "easy", set: "q605-s1",
    question: String.raw`Which of the following describes $g$ at $x = 1$?`,
    choices: ["$g$ is decreasing and its graph is concave up.", "$g$ is increasing and its graph is concave up.", "$g$ is decreasing and its graph is concave down.", "$g$ is increasing and its graph is concave down."],
    why: [
      String.raw`$g'(1) = f(1) = -1 < 0$, so $g$ is decreasing. $g''(1) = f'(1) = 1 > 0$, since $f$ is increasing on $(0, 3)$, so the graph of $g$ is concave up.`,
      String.raw`$f$ is increasing at $x = 1$, but its value $f(1) = -1$ is negative, so $g$ is decreasing.`,
      String.raw`$g$ is decreasing, but $f$ is increasing at $x = 1$, so $g'' > 0$ and the graph is concave up.`,
      String.raw`Both parts are reversed: $f(1) < 0$ and $f$ is increasing at $x = 1$.`,
    ], answer: 0 },
  { id: "q605-f1a", type: "frq", skill: "u6", topic: "6.5", calc: false, set: "q605-s9", part: "(a)",
    prompt: String.raw`At what value of $x$ in the open interval $(0, 6)$ does $F$ have a relative maximum? Justify your answer.`,
    rows: [
      { name: "Answer with justification", earns: String.raw`$x = 2$, because $F'(x) = (x - 2)(x - 4)$ changes from positive to negative at $x = 2$.` },
    ],
    solution: String.raw`By the Fundamental Theorem of Calculus, $F'(x) = x^2 - 6x + 8 = (x - 2)(x - 4)$, which is $0$ at $x = 2$ and $x = 4$. $F'(x) > 0$ on $(0, 2)$ and $F'(x) < 0$ on $(2, 4)$, so $F'$ changes from positive to negative at $x = 2$, and $F$ has a relative maximum at $x = 2$. (At $x = 4$, $F'$ changes from negative to positive, which is a relative minimum.)` },
  { id: "q605-f1b", type: "frq", skill: "u6", topic: "6.5", calc: false, set: "q605-s9", part: "(b)",
    prompt: String.raw`On what open interval is the graph of $F$ concave up? Give a reason for your answer.`,
    rows: [
      { name: "Answer with reason", earns: String.raw`$(3, 6)$, because $F''(x) = 2x - 6 > 0$ there.` },
    ],
    solution: String.raw`$F''(x) = \dfrac{d}{dx}\left( x^2 - 6x + 8 \right) = 2x - 6$, which is positive for $x > 3$. The graph of $F$ is concave up on $(3, 6)$, where $F'$ is increasing.` },
  { id: "q605-f1c", type: "frq", skill: "u6", topic: "6.5", calc: false, set: "q605-s9", part: "(c)",
    prompt: String.raw`Find the absolute minimum value of $F$ on the closed interval $[0, 6]$. Justify your answer.`,
    rows: [
      { name: "Candidates", earns: String.raw`Considers the endpoints and the critical points: $F(0) = 0$, $F(2) = \dfrac{20}{3}$, $F(4) = \dfrac{16}{3}$, $F(6) = 12$.` },
      { name: "Answer", earns: String.raw`The absolute minimum value is $0$, at $x = 0$.` },
    ],
    solution: String.raw`$F$ is continuous on $[0, 6]$, so its absolute minimum occurs at an endpoint or a critical point. Using $F(x) = \dfrac{x^3}{3} - 3x^2 + 8x$:
$$F(0) = 0, \quad F(2) = \dfrac{8}{3} - 12 + 16 = \dfrac{20}{3}, \quad F(4) = \dfrac{64}{3} - 48 + 32 = \dfrac{16}{3}, \quad F(6) = 72 - 108 + 48 = 12.$$
The absolute minimum value of $F$ on $[0, 6]$ is $0$, at the endpoint $x = 0$. The relative minimum at $x = 4$ is not the absolute minimum.` },
];

export default { forms: [{ id: "q605", name: "Topic 6.5 Quiz: Behavior of Accumulation Functions", group: "Unit 6: Integration and Accumulation of Change", items }] };

import { graph } from "../../plot.js";

export const sets = {
  "q605-s1": { name: "The graph of f", label: "Graph", intro: String.raw`The graph of the continuous function $f$ on $[-2, 6]$, made of four line segments, is shown below. Let $g(x) = \displaystyle \int_0^x f(t)\,dt$ for $-2 \le x \le 6$.`,
    sources: [{ title: "", blocks: [{ svg: graph({ x: [-2, 6], y: [-3, 3], xname: "x", yname: "y", segments: [[-2, -2, 0, 2], [0, 2, 2, 2], [2, 2, 4, -2], [4, -2, 6, 0]], labels: [[0.8, 2.4, "f"]],
      alt: "Graph of f made of four segments: from (negative 2, negative 2) up to (0, 2), crossing the x-axis at x = negative 1; a horizontal segment at height 2 from x = 0 to x = 2; from (2, 2) down to (4, negative 2), crossing the x-axis at x = 3; and from (4, negative 2) up to (6, 0)." }) }] }] },
  "q605-s9": { name: "An accumulation function", label: "Free response", intro: String.raw`Let $F(x) = \displaystyle \int_0^x \left( t^2 - 6t + 8 \right) dt$ for $0 \le x \le 6$.`,
    sources: [{ title: "", blocks: [{ p: String.raw`$$F(x) = \int_0^x \left( t^2 - 6t + 8 \right) dt, \quad 0 \le x \le 6$$` }] }] },
};

const items = [
  { id: "q605-m01", type: "mcq", skill: "u6", topic: "6.5", calc: false, set: "q605-s1",
    question: String.raw`On which of the following intervals is $g$ increasing?`,
    choices: ["$(-1, 3)$ only", "$(-2, 0)$ and $(4, 6)$", "$(0, 6)$ only", "$(-2, -1)$ and $(3, 6)$"],
    why: [
      String.raw`$g'(x) = f(x)$, and $f(x) > 0$ on $(-1, 3)$, so $g$ is increasing there.`,
      String.raw`These are the intervals where $f$ is increasing. Those are where $g$ is concave up.`,
      String.raw`$g(x) > 0$ on $(0, 6)$, but being positive is not the same as increasing. On $(3, 6)$, $f < 0$, so $g$ is decreasing.`,
      String.raw`On these intervals $f(x) < 0$, so $g$ is decreasing there.`,
    ], answer: 0 },
  { id: "q605-m02", type: "mcq", skill: "u6", topic: "6.5", calc: false, set: "q605-s1",
    question: String.raw`At what value of $x$ does $g$ have a relative maximum?`,
    choices: ["$3$", "$-1$", "$2$", "$4$"],
    why: [
      String.raw`$g' = f$ changes from positive to negative at $x = 3$, so $g$ has a relative maximum there.`,
      String.raw`At $x = -1$, $g' = f$ changes from negative to positive. That is a relative minimum.`,
      String.raw`At $x = 2$, $f$ begins to decrease, but $f$ is still positive, so $g$ is still increasing.`,
      String.raw`$x = 4$ is where $f$ has its minimum. That is where $g$ changes concavity.`,
    ], answer: 0 },
  { id: "q605-m03", type: "mcq", skill: "u6", topic: "6.5", calc: false, set: "q605-s1",
    question: String.raw`What is the value of $g(6)$?`,
    choices: ["$2$", "$8$", "$6$", "$0$"],
    why: [
      String.raw`On $[0, 3]$ the area above the axis is $4 + 1 = 5$. On $[3, 6]$ the area below the axis is $1 + 2 = 3$. So $g(6) = 5 - 3 = 2$.`,
      String.raw`$8$ adds all four areas, $4 + 1 + 1 + 2$, as if they were all above the axis.`,
      String.raw`$6 = 4 + 1 - 1 + 2$ subtracts the triangle on $[3, 4]$ but adds the triangle on $[4, 6]$, which is also below the axis.`,
      String.raw`$0$ is $f(6)$, a height on the graph, not the accumulated area.`,
    ], answer: 0 },
  { id: "q605-m04", type: "mcq", skill: "u6", topic: "6.5", calc: false, set: "q605-s1",
    question: String.raw`On which of the following intervals is the graph of $g$ concave down?`,
    choices: ["$(2, 4)$ only", "$(3, 6)$ only", "$(-2, 0)$ and $(4, 6)$", "$(0, 4)$ only"],
    why: [
      String.raw`$g''(x) = f'(x)$, and $f$ is decreasing only on $(2, 4)$, so $g$ is concave down only there.`,
      String.raw`$f(x) < 0$ on $(3, 6)$, which makes $g$ decreasing there. Concavity depends on whether $f$ is increasing or decreasing.`,
      String.raw`$f$ is increasing on these intervals, so $g$ is concave up there.`,
      String.raw`On $(0, 2)$, $f$ is constant, so $g'' = 0$ and the graph of $g$ is a line segment there, not concave down.`,
    ], answer: 0 },
  { id: "q605-m05", type: "mcq", skill: "u6", topic: "6.5", calc: false, set: "q605-s1",
    question: String.raw`What is the absolute minimum value of $g$ on $[-2, 6]$?`,
    choices: ["$-1$", "$0$", "$2$", "$-2$"],
    why: [
      String.raw`The candidates are the endpoints and the critical points: $g(-2) = -\displaystyle \int_{-2}^0 f(t)\,dt = -(-1 + 1) = 0$, $g(-1) = -\displaystyle \int_{-1}^0 f(t)\,dt = -1$, $g(3) = 5$, and $g(6) = 2$. The least value is $-1$.`,
      String.raw`$0$ is $g(-2)$, the value at the left endpoint. The value at the critical point $x = -1$ is smaller.`,
      String.raw`$2$ is $g(6)$, the value at the right endpoint, which is not the smallest candidate.`,
      String.raw`$-2$ is the minimum value of $f$, not of $g$.`,
    ], answer: 0 },
  { id: "q605-m06", type: "mcq", skill: "u6", topic: "6.5", calc: false, set: "q605-s1",
    question: String.raw`Which of the following describes $g$ at $x = 5$?`,
    choices: ["$g$ is decreasing and its graph is concave up.", "$g$ is increasing and its graph is concave up.", "$g$ is decreasing and its graph is concave down.", "$g$ is increasing and its graph is concave down."],
    why: [
      String.raw`$g'(5) = f(5) = -1 < 0$, so $g$ is decreasing. $g''(5) = f'(5) = 1 > 0$, since $f$ is increasing on $(4, 6)$, so the graph of $g$ is concave up.`,
      String.raw`$f$ is increasing at $x = 5$, but its value $f(5) = -1$ is negative, so $g$ is decreasing.`,
      String.raw`$g$ is decreasing, but $f$ is increasing at $x = 5$, so $g'' > 0$ and the graph is concave up.`,
      String.raw`Both parts are reversed: $f(5) < 0$ and $f$ is increasing at $x = 5$.`,
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

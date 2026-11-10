import { graph } from "../../plot.js";

// q602-s2: f(x) = (x^3 - 8x^2 + 4x)/16 + 4 on [0, 8]; f(0) = 4, f(2) = 3, f(4) = 1, f(6) = 1, f(8) = 6 (marked points).
const cubic = (x) => (x ** 3 - 8 * x ** 2 + 4 * x) / 16 + 4;

export const sets = {
  "q602-s1": { name: "A runner's velocity", label: "Table", intro: String.raw`A runner's velocity $v(t)$, in meters per second, is measured at selected times $t$, in seconds. The velocity is a continuous function of $t$.`,
    sources: [{ title: "", blocks: [{ table: { head: ["$t$ (seconds)", "$0$", "$1$", "$4$", "$6$"], rows: [["$v(t)$ (meters per second)", "$2$", "$5$", "$8$", "$3$"]] } }] }] },
  "q602-s2": { name: "The graph of f", label: "Graph", intro: String.raw`The graph of the function $f$ on the interval $0 \le x \le 8$ is shown below. The marked points on the graph are $(0, 4)$, $(2, 3)$, $(4, 1)$, $(6, 1)$, and $(8, 6)$.`,
    sources: [{ title: "", blocks: [{ svg: graph({ x: [0, 9], y: [0, 7], xname: "x", yname: "y", fns: [{ f: cubic, from: 0, to: 8 }], dots: [[0, 4, "closed"], [2, 3, "closed"], [4, 1, "closed"], [6, 1, "closed"], [8, 6, "closed"]], labels: [[7.1, 5.9, "f"]],
      alt: "Graph of a smooth curve f on 0 to 8 with marked points (0, 4), (2, 3), (4, 1), (6, 1), and (8, 6). The curve falls from (0, 4) to a low point a little above the x-axis between x = 4 and x = 6, then rises steeply to (8, 6)." }) }] }] },
  "q602-s9": { name: "Cars at a toll plaza", label: "Free response", intro: String.raw`Cars pass through a toll plaza at a rate of $C(t)$ cars per minute, where $t$ is measured in minutes and $C$ is continuous. Selected values of $C(t)$ are given in the table below.`,
    sources: [{ title: "", blocks: [{ table: { head: ["$t$ (minutes)", "$0$", "$4$", "$6$", "$12$", "$20$"], rows: [["$C(t)$ (cars per minute)", "$18$", "$24$", "$22$", "$15$", "$9$"]] } }] }] },
};

const items = [
  { id: "q602-m01", type: "mcq", skill: "u6", topic: "6.2", calc: false, difficulty: "easy", set: "q602-s2",
    question: String.raw`What is the right Riemann sum approximation of $\displaystyle \int_0^8 f(x)\,dx$ using 4 subintervals of equal length?`,
    choices: ["$22$", "$18$", "$11$", "$20$"],
    why: [
      String.raw`Each subinterval has width 2, and the right endpoints are $2, 4, 6, 8$: $2\left( 3 + 1 + 1 + 6 \right) = 22$.`,
      String.raw`$18$ uses the left endpoints $0, 2, 4, 6$: $2\left( 4 + 3 + 1 + 1 \right)$.`,
      String.raw`$3 + 1 + 1 + 6 = 11$ adds the heights at the right endpoints without multiplying by the width 2.`,
      String.raw`$20$ is the trapezoidal sum, the average of the left sum $18$ and the right sum $22$.`,
    ], answer: 0 },
  { id: "q602-m02", type: "mcq", skill: "u6", topic: "6.2", calc: false, difficulty: "moderate", set: "q602-s1",
    question: String.raw`Using a trapezoidal sum with the three subintervals given by the table, what is the approximation of $\displaystyle \int_0^{6} v(t)\,dt$?`,
    choices: ["$34$", "$33$", "$35$", "$31$"],
    why: [
      String.raw`$1 \cdot \dfrac{2 + 5}{2} + 3 \cdot \dfrac{5 + 8}{2} + 2 \cdot \dfrac{8 + 3}{2} = 3.5 + 19.5 + 11 = 34$.`,
      String.raw`$33$ is the left Riemann sum: $1(2) + 3(5) + 2(8)$.`,
      String.raw`$35$ is the right Riemann sum: $1(5) + 3(8) + 2(3)$.`,
      String.raw`$31$ treats every subinterval as having width $\dfrac{6}{3} = 2$. The subintervals in the table have widths 1, 3, and 2.`,
    ], answer: 0 },
  { id: "q602-m03", type: "mcq", skill: "u6", topic: "6.2", calc: false, difficulty: "difficult",
    stem: String.raw`The function $f$ is increasing and concave down on $[a, b]$. Let $A = \displaystyle \int_a^b f(x)\,dx$. Using the same number of equal subintervals, let $L$, $R$, $M$, and $T$ be the left Riemann sum, right Riemann sum, midpoint Riemann sum, and trapezoidal sum approximations of $A$.`,
    question: "Which of the following is true?",
    choices: ["$L < T < A < M < R$", "$L < M < A < T < R$", "$R < T < A < M < L$", "$L < A < T < M < R$"],
    why: [
      String.raw`Because $f$ is increasing, the left sum is too small and the right sum is too large. Because $f$ is concave down, each trapezoid lies below the curve, so $T < A$, and each midpoint rectangle has the same area as a tangent line trapezoid lying above the curve, so $M > A$. Also $T$ is the average of $L$ and $R$, so $L < T$, and $f$ at each midpoint is less than $f$ at the right endpoint, so $M < R$.`,
      String.raw`This switches $M$ and $T$. That order is correct when $f$ is concave up, not concave down.`,
      String.raw`This switches $L$ and $R$. That order holds for a decreasing function.`,
      String.raw`For a concave down function, the trapezoids lie below the curve, so $T < A$, not $T > A$.`,
    ], answer: 0 },
  { id: "q602-m04", type: "mcq", skill: "u6", topic: "6.2", calc: false, difficulty: "moderate", set: "q602-s2",
    question: String.raw`What is the midpoint Riemann sum approximation of $\displaystyle \int_0^8 f(x)\,dx$ using 2 subintervals of equal length?`,
    choices: ["$16$", "$20$", "$28$", "$8$"],
    why: [
      String.raw`The subintervals are $[0, 4]$ and $[4, 8]$, each of width 4, with midpoints $2$ and $6$: $4\left( f(2) + f(6) \right) = 4(3 + 1) = 16$.`,
      String.raw`$20 = 4\left( f(0) + f(4) \right)$ uses the left endpoints of the two subintervals, not the midpoints.`,
      String.raw`$28 = 4\left( f(4) + f(8) \right)$ uses the right endpoints of the two subintervals, not the midpoints.`,
      String.raw`$8 = 2(3 + 1)$ uses the width 2 from four subintervals. With two subintervals of equal length, each has width 4.`,
    ], answer: 0 },
  { id: "q602-m05", type: "mcq", skill: "u6", topic: "6.2", calc: false, difficulty: "easy",
    stem: String.raw`The function $f$ is positive and decreasing on $[0, 6]$. Nothing is known about the concavity of $f$.`,
    question: String.raw`Which of the following must be an overestimate of $\displaystyle \int_0^6 f(x)\,dx$?`,
    choices: [
      "The left Riemann sum with 3 subintervals of equal length",
      "The right Riemann sum with 3 subintervals of equal length",
      "The right Riemann sum with 6 subintervals of equal length",
      "The midpoint Riemann sum with 3 subintervals of equal length",
    ],
    why: [
      String.raw`For a decreasing function, the value at the left endpoint is the largest value on each subinterval, so each left rectangle lies above the curve and the left sum is an overestimate.`,
      String.raw`For a decreasing function, the right endpoint gives the smallest value on each subinterval, so the right sum is an underestimate.`,
      "More subintervals make the right sum closer to the integral, but every right rectangle still lies below the curve, so it is still an underestimate.",
      "Whether a midpoint sum is too large or too small depends on concavity, which is not known.",
    ], answer: 0 },
  { id: "q602-m06", type: "mcq", skill: "u6", topic: "6.2", calc: true, difficulty: "easy",
    question: String.raw`What is the trapezoidal sum approximation of $\displaystyle \int_1^3 \dfrac{e^{x}}{x}\,dx$ using 4 subintervals of equal length?`,
    choices: ["$8.131$", "$7.137$", "$9.125$", "$7.993$"],
    why: [
      String.raw`Each subinterval has width $0.5$: $\dfrac{0.5}{2}\left[ f(1) + 2f(1.5) + 2f(2) + 2f(2.5) + f(3) \right] \approx 8.131$, where $f(x) = \dfrac{e^{x}}{x}$.`,
      String.raw`$7.137$ is the left Riemann sum, using $x = 1, 1.5, 2, 2.5$.`,
      String.raw`$9.125$ is the right Riemann sum, using $x = 1.5, 2, 2.5, 3$.`,
      String.raw`$7.993$ is the midpoint Riemann sum, using $x = 1.25, 1.75, 2.25, 2.75$.`,
    ], answer: 0 },
  { id: "q602-f1a", type: "frq", skill: "u6", topic: "6.2", calc: false, set: "q602-s9", part: "(a)",
    prompt: String.raw`Use a right Riemann sum with the four subintervals indicated by the table to approximate $\displaystyle \int_0^{20} C(t)\,dt$. Using correct units, explain the meaning of $\displaystyle \int_0^{20} C(t)\,dt$ in the context of the problem.`,
    rows: [
      { name: "Right Riemann sum", earns: String.raw`$4(24) + 2(22) + 6(15) + 8(9) = 302$.` },
      { name: "Meaning with units", earns: String.raw`$\displaystyle \int_0^{20} C(t)\,dt$ is the number of cars that pass through the toll plaza from $t = 0$ to $t = 20$ minutes.` },
    ],
    solution: String.raw`The subintervals have widths 4, 2, 6, and 8, and the right endpoints are $t = 4, 6, 12, 20$:
$$\int_0^{20} C(t)\,dt \approx 4(24) + 2(22) + 6(15) + 8(9) = 96 + 44 + 90 + 72 = 302.$$
$\displaystyle \int_0^{20} C(t)\,dt$ is the total number of cars that pass through the toll plaza during the 20 minutes from $t = 0$ to $t = 20$. It is approximately 302 cars.` },
  { id: "q602-f1b", type: "frq", skill: "u6", topic: "6.2", calc: false, set: "q602-s9", part: "(b)",
    prompt: String.raw`Use a trapezoidal sum with the four subintervals indicated by the table to approximate $\displaystyle \int_0^{20} C(t)\,dt$.`,
    rows: [
      { name: "Trapezoidal sum", earns: String.raw`$4 \cdot \dfrac{18 + 24}{2} + 2 \cdot \dfrac{24 + 22}{2} + 6 \cdot \dfrac{22 + 15}{2} + 8 \cdot \dfrac{15 + 9}{2} = 337$.` },
    ],
    solution: String.raw`$$\int_0^{20} C(t)\,dt \approx 4 \cdot \dfrac{18 + 24}{2} + 2 \cdot \dfrac{24 + 22}{2} + 6 \cdot \dfrac{22 + 15}{2} + 8 \cdot \dfrac{15 + 9}{2} = 84 + 46 + 111 + 96 = 337.$$` },
];

export default { forms: [{ id: "q602", name: "Topic 6.2 Quiz: Approximating Areas with Riemann Sums", group: "Unit 6: Integration and Accumulation of Change", items }] };

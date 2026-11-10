import { graph } from "../../plot.js";

const vpts = [[0, 2], [2, 2], [4, -3], [6, -3], [8, 1]];
export const sets = {
  "q402-s1": { name: "The graph of v", label: "Graph", intro: String.raw`A particle moves along the $x$-axis. The graph of its velocity $v(t)$ for $0 \le t \le 8$ consists of four line segments, as shown below.`,
    sources: [{ title: "", blocks: [{ svg: graph({ x: [0, 8], y: [-4, 3], xname: "t", yname: "v(t)", segments: vpts.slice(1).map((p, i) => [vpts[i][0], vpts[i][1], p[0], p[1]]), dots: vpts.map(([a, b]) => [a, b, "closed"]),
      alt: "Graph of the velocity v(t) for 0 to 8, made of line segments through the points (0, 2), (2, 2), (4, negative 3), (6, negative 3), and (8, 1). The graph crosses the t-axis at t = 2.8 and t = 7.5." }) }] }] },
  "q402-s2": { name: "The graph of x", label: "Graph", intro: String.raw`A particle moves along the $x$-axis. The graph of its position $x(t)$ for $0 \le t \le 6$ is shown below. The graph has horizontal tangents at $t = 1$ and $t = 5$ and a point of inflection at $t = 3$.`,
    sources: [{ title: "", blocks: [{ svg: graph({ x: [0, 6.5], y: [0, 10.5], xname: "t", yname: "x(t)", fns: [{ f: (t) => 0.25 * t ** 3 - 2.25 * t ** 2 + 3.75 * t + 7, from: 0, to: 6 }], dots: [[1, 8.75, "closed"], [3, 4.75, "closed"], [5, 0.75, "closed"]],
      alt: "Graph of the position x(t) for t from 0 to 6. The graph starts at (0, 7), rises to a high point at (1, 8.75), falls through (3, 4.75), where it changes from concave down to concave up, reaches a low point at (5, 0.75), and rises to (6, 2.5)." }) }] }] },
  "q402-s9": { name: "A particle on the x-axis", label: "Free response", intro: String.raw`A particle moves along the $x$-axis so that its position at time $t$ seconds is $x(t) = 2t^3 - 15t^2 + 36t$ meters, for $0 \le t \le 5$.`,
    sources: [{ title: "", blocks: [{ p: String.raw`$$x(t) = 2t^3 - 15t^2 + 36t, \quad 0 \le t \le 5$$` }] }] },
};

const items = [
  { id: "q402-m01", type: "mcq", skill: "u4", topic: "4.2", calc: false, difficulty: "difficult", set: "q402-s2",
    question: String.raw`At which of the following times is the velocity of the particle least?`,
    choices: [String.raw`$t = 3$`, String.raw`$t = 5$`, String.raw`$t = 1$`, String.raw`$t = 0$`],
    why: [
      String.raw`The velocity is the slope of the graph of $x$. The graph falls for $1 < t < 5$, so $v(t) < 0$ there. It is concave down until $t = 3$ and concave up after, so $v$ decreases until $t = 3$ and increases after. The graph falls most steeply at $t = 3$, where the velocity is least.`,
      String.raw`$t = 5$ is where the position is least. The graph has a horizontal tangent there, so $v(5) = 0$, not the least velocity.`,
      String.raw`The graph has a horizontal tangent at $t = 1$, so $v(1) = 0$. The velocity is negative for $1 < t < 5$, so $0$ is not its least value.`,
      String.raw`The graph is steep at $t = 0$, but it is rising, so the velocity there is positive. This is where the speed is large, not where the velocity is least.`,
    ], answer: 0 },
  { id: "q402-m02", type: "mcq", skill: "u4", topic: "4.2", calc: false, difficulty: "difficult",
    stem: String.raw`A particle moves along a line with velocity $v(t) = t^2 - 5t + 4$ for $0 \le t \le 6$.`,
    question: String.raw`For which values of $t$ is the speed of the particle increasing?`,
    choices: [
      String.raw`$1 < t < \frac{5}{2}$ and $4 < t < 6$`,
      String.raw`$\frac{5}{2} < t < 6$ only`,
      String.raw`$0 < t < 1$ and $4 < t < 6$`,
      String.raw`$0 < t < 1$ and $\frac{5}{2} < t < 4$`,
    ],
    why: [
      String.raw`$v(t) = (t - 1)(t - 4)$ is negative on $1 < t < 4$ and positive on $0 \le t < 1$ and $4 < t \le 6$. $a(t) = 2t - 5$ is negative for $t < \frac{5}{2}$ and positive for $t > \frac{5}{2}$. Speed increases where $v$ and $a$ have the same sign: $1 < t < \frac{5}{2}$ and $4 < t < 6$.`,
      String.raw`This is where $a(t) > 0$. Speed also depends on the sign of $v$: on $\frac{5}{2} < t < 4$, $v < 0$ and $a > 0$, so the speed is decreasing.`,
      String.raw`This is where $v(t) > 0$, where the particle moves to the right. It ignores the sign of the acceleration.`,
      String.raw`On these intervals $v$ and $a$ have opposite signs, so the speed is decreasing there.`,
    ], answer: 0 },
  { id: "q402-m03", type: "mcq", skill: "u4", topic: "4.2", calc: false, difficulty: "moderate", set: "q402-s1",
    question: String.raw`At which of the following times is the speed of the particle greatest?`,
    choices: [String.raw`$t = 5$`, String.raw`$t = 1$`, String.raw`$t = 7$`, String.raw`$t = 3$`],
    why: [
      String.raw`Speed is $|v(t)|$. At $t = 5$, $v = -3$ and the speed is $3$, the largest value of $|v(t)|$ on the graph.`,
      String.raw`At $t = 1$ the velocity is greatest, $v = 2$, but the speed is only $2$. A negative velocity of $-3$ has a greater speed.`,
      String.raw`At $t = 7$ the acceleration (the slope, $2$) is greatest, but $v(7) = -1$, so the speed is only $1$.`,
      String.raw`At $t = 3$ the acceleration has its greatest magnitude, $\frac{5}{2}$, but $v(3) = -\frac{1}{2}$, so the speed is only $\frac{1}{2}$.`,
    ], answer: 0 },
  { id: "q402-m04", type: "mcq", skill: "u4", topic: "4.2", calc: false, difficulty: "moderate",
    stem: String.raw`A particle moves along the $x$-axis with position $x(t) = 4\ln(t + 1) - t$ for $t \ge 0$.`,
    question: String.raw`What is the acceleration of the particle at the time it is at rest?`,
    choices: [String.raw`$-\frac{1}{4}$`, String.raw`$\frac{1}{4}$`, "$0$", String.raw`$4\ln 4 - 3$`],
    why: [
      String.raw`$v(t) = \dfrac{4}{t + 1} - 1 = 0$ when $t = 3$. $a(t) = -\dfrac{4}{(t + 1)^2}$, so $a(3) = -\dfrac{4}{16} = -\dfrac{1}{4}$.`,
      String.raw`The derivative of $\dfrac{4}{t + 1} = 4(t + 1)^{-1}$ is $-4(t + 1)^{-2}$. The negative sign was dropped.`,
      String.raw`$0$ is the velocity at $t = 3$, not the acceleration.`,
      String.raw`$4\ln 4 - 3$ is the position $x(3)$, not the acceleration.`,
    ], answer: 0 },
  { id: "q402-m05", type: "mcq", skill: "u4", topic: "4.2", calc: true, difficulty: "moderate",
    stem: String.raw`A particle moves along a line with velocity $v(t) = e^{\sin t} - 1.5$ for $0 \le t \le 4$.`,
    question: String.raw`Which of the following is true at time $t = 2$?`,
    choices: [
      String.raw`$a(2) = -1.033$, and the speed is decreasing.`,
      String.raw`$a(2) = -1.033$, and the speed is increasing.`,
      String.raw`$a(2) = 1.033$, and the speed is increasing.`,
      String.raw`$a(2) = 0.983$, and the speed is increasing.`,
    ],
    why: [
      String.raw`$a(t) = v'(t) = e^{\sin t}\cos t$, so $a(2) = e^{\sin 2}\cos 2 \approx -1.033$. Also $v(2) = e^{\sin 2} - 1.5 \approx 0.983 > 0$. Velocity and acceleration have opposite signs, so the speed is decreasing.`,
      String.raw`The acceleration is right, but $v(2) > 0$ and $a(2) < 0$ have opposite signs, so the speed is decreasing.`,
      String.raw`$\cos 2 < 0$, so $a(2)$ is negative. The sign was lost.`,
      String.raw`$0.983$ is the velocity $v(2)$, not the acceleration.`,
    ], answer: 0 },
  { id: "q402-m06", type: "mcq", skill: "u4", topic: "4.2", calc: false, difficulty: "easy",
    stem: String.raw`A ball is thrown upward. Its height, in feet, $t$ seconds after it is thrown is $h(t) = -16t^2 + 48t + 6$.`,
    question: String.raw`What is the maximum height of the ball?`,
    choices: ["$42$ feet", "$54$ feet", String.raw`$\frac{3}{2}$ feet`, "$6$ feet"],
    why: [
      String.raw`$h'(t) = -32t + 48 = 0$ at $t = \frac{3}{2}$, where the velocity changes from positive to negative. $h\left(\frac{3}{2}\right) = -16\left(\frac{9}{4}\right) + 72 + 6 = 42$ feet.`,
      String.raw`This uses $-16\left(\frac{3}{2}\right)$ in place of $-16\left(\frac{3}{2}\right)^2$: $-24 + 72 + 6 = 54$.`,
      String.raw`$\frac{3}{2}$ is the time, in seconds, at which the maximum occurs, not the height.`,
      String.raw`$6$ feet is the starting height $h(0)$, not the maximum.`,
    ], answer: 0 },
  { id: "q402-f1a", type: "frq", skill: "u4", topic: "4.2", calc: false, set: "q402-s9", part: "(a)",
    prompt: String.raw`For what values of $t$, $0 < t < 5$, is the particle moving to the left? Justify your answer.`,
    rows: [
      { name: "Answer with justification", earns: String.raw`$2 < t < 3$, because $v(t) = 6(t - 2)(t - 3) < 0$ on that interval.` },
    ],
    solution: String.raw`$v(t) = x'(t) = 6t^2 - 30t + 36 = 6(t - 2)(t - 3)$. The particle moves to the left when $v(t) < 0$, which happens for $2 < t < 3$.` },
  { id: "q402-f1b", type: "frq", skill: "u4", topic: "4.2", calc: false, set: "q402-s9", part: "(b)",
    prompt: String.raw`Is the speed of the particle increasing or decreasing at time $t = 4$? Give a reason for your answer.`,
    rows: [
      { name: "Answer with reason", earns: String.raw`Increasing, because $v(4) = 12 > 0$ and $a(4) = 18 > 0$ have the same sign.` },
    ],
    solution: String.raw`$v(4) = 6(2)(1) = 12$. $a(t) = v'(t) = 12t - 30$, so $a(4) = 18$. Since $v(4)$ and $a(4)$ are both positive, the speed is increasing at $t = 4$.` },
  { id: "q402-f1c", type: "frq", skill: "u4", topic: "4.2", calc: false, set: "q402-s9", part: "(c)",
    prompt: String.raw`Find the total distance traveled by the particle for $0 \le t \le 5$.`,
    rows: [
      { name: "Positions", earns: String.raw`Uses the positions where the particle changes direction: $x(0) = 0$, $x(2) = 28$, $x(3) = 27$, $x(5) = 55$.` },
      { name: "Answer", earns: String.raw`Total distance $= 28 + 1 + 28 = 57$ meters.` },
    ],
    solution: String.raw`The particle changes direction at $t = 2$ and $t = 3$. $x(0) = 0$, $x(2) = 16 - 60 + 72 = 28$, $x(3) = 54 - 135 + 108 = 27$, and $x(5) = 250 - 375 + 180 = 55$. Total distance $= |28 - 0| + |27 - 28| + |55 - 27| = 28 + 1 + 28 = 57$ meters.` },
];

export default { forms: [{ id: "q402", name: "Topic 4.2 Quiz: Straight-Line Motion", group: "Unit 4: Contextual Applications of Differentiation", items }] };

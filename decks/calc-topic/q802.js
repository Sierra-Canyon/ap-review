import { graph } from "../../plot.js";

export const sets = {
  "q802-s1": { name: "A velocity graph", label: "Graph", intro: String.raw`A particle moves along the $x$-axis. The graph of its velocity $v(t)$, for $0 \le t \le 6$, consists of three line segments and is shown below. At time $t = 0$, the particle is at $x = 1$.`,
    sources: [{ title: "", blocks: [{ svg: graph({ x: [0, 6], y: [-3, 3], xname: "t", yname: "v(t)",
      segments: [[0, 2, 2, 2], [2, 2, 4, -2], [4, -2, 6, -2]],
      dots: [[0, 2, "closed"], [6, -2, "closed"]],
      alt: "Graph of v(t) on [0, 6]: level at v = 2 from t = 0 to t = 2, a straight segment from (2, 2) down to (4, -2) that crosses the t-axis at t = 3, then level at v = -2 from t = 4 to t = 6." }) }] }] },
  "q802-s9": { name: "A particle on the x-axis", label: "Free response", intro: String.raw`A particle moves along the $x$-axis with velocity $v(t) = t^2 - 8t + 12$ for $t \ge 0$, where $t$ is measured in seconds and $v(t)$ in meters per second. At time $t = 0$, the particle is at $x = 3$.`,
    sources: [] },
};

const items = [
  { id: "q802-m01", type: "mcq", skill: "u8", topic: "8.2", calc: false,
    question: String.raw`A particle moves along a line with velocity $v(t) = t^2 - 7t + 10$. What is the total distance the particle travels from $t = 0$ to $t = 6$?`,
    choices: ["$15$", "$6$", String.raw`$\frac{21}{2}$`, "$-6$"],
    why: [
      String.raw`$v(t) = (t - 2)(t - 5)$ changes sign at $t = 2$ and $t = 5$. With $F(t) = \dfrac{t^3}{3} - \dfrac{7t^2}{2} + 10t$, $F(0) = 0$, $F(2) = \dfrac{26}{3}$, $F(5) = \dfrac{25}{6}$, and $F(6) = 6$. The distance is $\dfrac{26}{3} + \left(\dfrac{26}{3} - \dfrac{25}{6}\right) + \left(6 - \dfrac{25}{6}\right) = \dfrac{52}{6} + \dfrac{27}{6} + \dfrac{11}{6} = 15$.`,
      String.raw`$6$ is the displacement, $\displaystyle\int_0^6 v(t)\,dt$. Distance needs $\displaystyle\int_0^6 |v(t)|\,dt$, so the interval $[2, 5]$, where $v(t) < 0$, counts as positive.`,
      String.raw`This adds only the intervals where $v(t) > 0$ and leaves out $[2, 5]$, where the particle moves left. That motion also counts toward distance.`,
      String.raw`$-6$ is $v(6) - v(0) = 4 - 10$, the change in velocity. Distance comes from integrating $|v(t)|$.`,
    ], answer: 0 },
  { id: "q802-m02", type: "mcq", skill: "u8", topic: "8.2", calc: false,
    question: String.raw`A particle moves along the $x$-axis with velocity $v(t) = 3t^2 - 2t$. At time $t = 0$ the particle is at $x = 2$. What is the position of the particle at time $t = 2$?`,
    choices: ["$6$", "$4$", "$8$", "$10$"],
    why: [
      String.raw`$x(2) = 2 + \displaystyle\int_0^2 (3t^2 - 2t)\,dt = 2 + \left[t^3 - t^2\right]_0^2 = 2 + 4 = 6$.`,
      String.raw`$4$ is the displacement. The initial position $x(0) = 2$ must be added.`,
      String.raw`$8$ is $v(2)$, the velocity at $t = 2$, not the position.`,
      String.raw`This adds the velocity $v(2) = 8$ to the initial position. The change in position is the integral of $v$, not a value of $v$.`,
    ], answer: 0 },
  { id: "q802-m03", type: "mcq", skill: "u8", topic: "8.2", calc: false,
    question: String.raw`A particle moves along a line with acceleration $a(t) = 4 - 2t$. Its velocity at time $t = 1$ is $v(1) = 3$. What is $v(4)$?`,
    choices: ["$0$", "$-3$", "$3$", "$-4$"],
    why: [
      String.raw`$v(4) = v(1) + \displaystyle\int_1^4 (4 - 2t)\,dt = 3 + \left[4t - t^2\right]_1^4 = 3 + (0 - 3) = 0$.`,
      String.raw`$-3$ is the change in velocity from $t = 1$ to $t = 4$. The known velocity $v(1) = 3$ must be added.`,
      String.raw`This integrates from $0$ to $4$, as if $3$ were the velocity at $t = 0$. The given value is at $t = 1$, so the integral starts at $1$.`,
      String.raw`$-4$ is $a(4)$, the acceleration at $t = 4$, not the velocity.`,
    ], answer: 0 },
  { id: "q802-m04", type: "mcq", skill: "u8", topic: "8.2", calc: false, set: "q802-s1",
    question: String.raw`What is the total distance the particle travels from $t = 0$ to $t = 6$?`,
    choices: ["$10$", "$0$", "$1$", "$11$"],
    why: [
      String.raw`Distance is the total area between the graph of $v$ and the $t$-axis: $4$ on $[0, 2]$, $1$ on $[2, 3]$, $1$ on $[3, 4]$, and $4$ on $[4, 6]$. The total is $4 + 1 + 1 + 4 = 10$.`,
      String.raw`$0$ is the displacement, $\displaystyle\int_0^6 v(t)\,dt = 4 + 1 - 1 - 4$. Distance counts the areas below the axis as positive.`,
      String.raw`$1$ is the position $x(6) = 1 + 0$, not the distance traveled.`,
      String.raw`This adds the starting position $x(0) = 1$ to the distance. Distance traveled does not depend on where the particle starts.`,
    ], answer: 0 },
  { id: "q802-m05", type: "mcq", skill: "u8", topic: "8.2", calc: true,
    question: String.raw`A particle moves along a line with velocity $v(t) = 4\sin(0.9t) - 1$. What is the total distance the particle travels from $t = 0$ to $t = 5$?`,
    choices: ["$10.974$", "$0.381$", "$10.694$", "$5.677$"],
    why: [
      String.raw`With a calculator, $\displaystyle\int_0^5 |v(t)|\,dt = 10.974$. (The velocity changes sign at $t = 0.281$ and $t = 3.210$.)`,
      String.raw`$0.381$ is the displacement, $\displaystyle\int_0^5 v(t)\,dt$. Distance is the integral of $|v(t)|$.`,
      String.raw`This misses the short interval $[0, 0.281]$ where $v(t) < 0$ and integrates $v$ across it, so the leftward motion there cancels part of the rightward motion.`,
      String.raw`$5.677$ counts only the interval $[0.281, 3.210]$, where the particle moves right. The leftward motion also adds to the distance.`,
    ], answer: 0 },
  { id: "q802-m06", type: "mcq", skill: "u8", topic: "8.2", calc: false,
    question: String.raw`A particle moves along the $x$-axis with continuous velocity $v(t)$. At time $t = 2$ the particle is at $x = 7$. Which expression gives the position of the particle at time $t = 5$?`,
    choices: [String.raw`$7 + \displaystyle\int_2^5 v(t)\,dt$`, String.raw`$\displaystyle\int_2^5 v(t)\,dt$`, String.raw`$7 + \displaystyle\int_0^5 v(t)\,dt$`, String.raw`$7 + v(5) - v(2)$`],
    why: [
      String.raw`The position at $t = 5$ is the known position at $t = 2$ plus the change in position, $x(5) = x(2) + \displaystyle\int_2^5 v(t)\,dt$.`,
      String.raw`This is only the displacement from $t = 2$ to $t = 5$. The starting position $7$ must be added.`,
      String.raw`The known position is at $t = 2$, so the integral must start at $2$, not $0$.`,
      String.raw`$v(5) - v(2)$ is the change in velocity, not the change in position. The change in position is the integral of $v$.`,
    ], answer: 0 },
  { id: "q802-f1a", type: "frq", skill: "u8", topic: "8.2", calc: false, set: "q802-s9", part: "(a)",
    prompt: String.raw`Find the position of the particle at time $t = 3$.`,
    rows: [
      { name: "Integral", earns: String.raw`Sets up $x(3) = 3 + \displaystyle\int_0^3 \left(t^2 - 8t + 12\right)dt$.` },
      { name: "Answer", earns: String.raw`$x(3) = 12$.` },
    ],
    solution: String.raw`$x(3) = x(0) + \displaystyle\int_0^3 \left(t^2 - 8t + 12\right)dt = 3 + \left[\dfrac{t^3}{3} - 4t^2 + 12t\right]_0^3 = 3 + (9 - 36 + 36) = 3 + 9 = 12$. The particle is at $x = 12$.` },
  { id: "q802-f1b", type: "frq", skill: "u8", topic: "8.2", calc: false, set: "q802-s9", part: "(b)",
    prompt: String.raw`Find the total distance the particle travels from $t = 0$ to $t = 7$. Show the work that leads to your answer.`,
    rows: [
      { name: "Sign analysis", earns: String.raw`Finds that $v(t) = (t - 2)(t - 6)$ changes sign at $t = 2$ and $t = 6$ and splits the integral of $|v(t)|$ there.` },
      { name: "Answer", earns: String.raw`Total distance $\dfrac{71}{3}$ meters.` },
    ],
    solution: String.raw`$v(t) = (t - 2)(t - 6)$ is positive on $[0, 2)$, negative on $(2, 6)$, and positive on $(6, 7]$. Let $F(t) = \dfrac{t^3}{3} - 4t^2 + 12t$, so $F(0) = 0$, $F(2) = \dfrac{32}{3}$, $F(6) = 0$, and $F(7) = \dfrac{7}{3}$. The distance is $\displaystyle\int_0^7 |v(t)|\,dt = \left(\dfrac{32}{3} - 0\right) + \left(\dfrac{32}{3} - 0\right) + \left(\dfrac{7}{3} - 0\right) = \dfrac{71}{3}$ meters.` },
];

export default { forms: [{ id: "q802", name: "Topic 8.2 Quiz: Motion Using Integrals", group: "Unit 8: Applications of Integration", items }] };

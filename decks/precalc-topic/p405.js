// AP Precalculus topic quiz 4.5 (Unit 4 is taught but not on the AP exam). Keys and every number are computed in the
// writer's scratch scripts.
import { graph } from "../../plot.js";

// p405-s1: y^2 = (x - 1)^2 (x + 2), drawn as y = (x - 1)sqrt(x + 2) and y = -(x - 1)sqrt(x + 2) for -2 <= x <= 3.
const up = (x) => (x - 1) * Math.sqrt(Math.max(0, x + 2)), dn = (x) => -(x - 1) * Math.sqrt(Math.max(0, x + 2));

export const sets = {
  "p405-s1": {
    name: "A curve that crosses itself",
    label: "Graph",
    intro: String.raw`The graph of the equation $y^2 = (x - 1)^2(x + 2)$ is shown below. The curve has no points with $x < -2$, it passes through $(-2, 0)$, and it crosses itself at $(1, 0)$.`,
    sources: [{ title: "", blocks: [{ svg: graph({
      x: [-3, 4], y: [-5, 5], step: 1, xname: "x", yname: "y",
      fns: [{ f: up, from: -2, to: 3.2 }, { f: dn, from: -2, to: 3.2 }],
      dots: [[-2, 0, "closed"], [1, 0, "closed"]],
      labels: [[-2.85, 0.35, "(−2, 0)"], [1.1, 0.45, "(1, 0)"]],
      alt: "A curve that forms a closed loop between x = -2 and x = 1 and then continues to the right as two branches. The loop starts at (-2, 0), bulges up to about (-1, 2) and down to about (-1, -2), and closes at (1, 0). At (1, 0) the curve crosses itself: one branch rises to the upper right toward (3, 4.5) and the other falls to the lower right toward (3, -4.5).",
    }) }] }],
  },
  "p405-s2": {
    name: "An implicitly defined curve",
    label: "Free response",
    intro: String.raw`A curve in the $xy$-plane is defined by the equation $xy - y^2 = 4$.`,
    sources: [{ title: "", blocks: [{ p: String.raw`No calculator is allowed on this question. Show the work that leads to your answers.` }] }],
  },
};

export default {
  forms: [{
    id: "p405",
    name: "Topic 4.5 Quiz: Implicitly Defined Functions",
    group: "Unit 4: Functions Involving Parameters, Vectors, and Matrices",
    items: [
      { id: "p405-m01", type: "mcq", skill: "u4", topic: "4.5", calc: false, difficulty: "easy",
        question: String.raw`The equation $3x - 2y + xy = 4$ defines $y$ implicitly as a function of $x$. Which of the following gives $y$ explicitly?`,
        choices: [String.raw`$y = \frac{4 - 3x}{x - 2}$`, String.raw`$y = \frac{4 - 3x}{2 - x}$`, String.raw`$y = \frac{4 - 3x}{x}$`, String.raw`$y = \frac{3x - 4}{x - 2}$`],
        why: [
          String.raw`Collect the $y$ terms: $xy - 2y = 4 - 3x$, so $y(x - 2) = 4 - 3x$ and $y = \dfrac{4 - 3x}{x - 2}$.`,
          String.raw`This writes the $y$ terms as $y(2 - x)$, which is $2y - xy$. The equation has $-2y + xy = y(x - 2)$.`,
          String.raw`This drops the $-2y$ term and solves $xy = 4 - 3x$. Both $y$ terms must be factored together.`,
          String.raw`This moves $3x$ to the right side without changing its sign. Subtracting $3x$ from both sides gives $4 - 3x$.`,
        ], answer: 0 },
      { id: "p405-m02", type: "mcq", skill: "u4", topic: "4.5", calc: false, difficulty: "easy",
        question: String.raw`Which of the following points lies on the graph of $x^3 + xy + y^2 = 7$?`,
        choices: ["$(2, -1)$", "$(-1, 2)$", "$(2, 1)$", "$(1, -2)$"],
        why: [
          String.raw`$2^3 + (2)(-1) + (-1)^2 = 8 - 2 + 1 = 7$.`,
          String.raw`$(-1)^3 + (-1)(2) + 2^2 = -1 - 2 + 4 = 1$, not $7$. Swapping the coordinates of a point on the curve does not give another point on it.`,
          String.raw`$2^3 + (2)(1) + 1^2 = 11$, not $7$. The sign of $y$ changes the $xy$ term.`,
          String.raw`$1^3 + (1)(-2) + (-2)^2 = 3$, not $7$.`,
        ], answer: 0 },
      { id: "p405-m03", type: "mcq", skill: "u4", topic: "4.5", calc: true, difficulty: "moderate",
        question: String.raw`The equation $x^2 + 4y^2 = 20$, with $y < 0$, defines $y$ implicitly as a function of $x$. What is the value of $y$ when $x = 1.5$?`,
        choices: ["$-2.107$", "$2.107$", "$-4.213$", "$-2.151$"],
        why: [
          String.raw`$4y^2 = 20 - 1.5^2 = 17.75$, so $y^2 = 4.4375$. With $y < 0$, $y = -\sqrt{4.4375} \approx -2.107$.`,
          String.raw`$2.107$ is on the upper half of the curve. The condition $y < 0$ keeps only the negative square root.`,
          String.raw`$-4.213$ is $-\sqrt{17.75}$, which forgets to divide by the coefficient $4$ on $y^2$.`,
          String.raw`$-2.151$ uses $20 - 1.5$ instead of $20 - 1.5^2$. The equation has $x^2$.`,
        ], answer: 0 },
      { id: "p405-m04", type: "mcq", skill: "u4", topic: "4.5", calc: false, difficulty: "moderate", set: "p405-s1",
        question: String.raw`For which values of $x$ is there exactly one point on the curve?`,
        choices: [String.raw`$x = -2$ and $x = 1$`, String.raw`$x = -2$ only`, String.raw`$x = 1$ only`, String.raw`$-2 \le x \le 1$`],
        why: [
          String.raw`For each $x$, $y = \pm(x - 1)\sqrt{x + 2}$. The two values are equal only when $(x - 1)\sqrt{x + 2} = 0$, at $x = -2$ and $x = 1$. Every other $x \ge -2$ gives two points.`,
          String.raw`At $x = 1$ both branches also meet, at $(1, 0)$, so the vertical line $x = 1$ meets the curve only once.`,
          String.raw`At $x = -2$ the loop closes at the single point $(-2, 0)$, so that line also meets the curve once.`,
          String.raw`Between $-2$ and $1$, each vertical line meets the loop twice, once above the $x$-axis and once below.`,
        ], answer: 0 },
      { id: "p405-m05", type: "mcq", skill: "u4", topic: "4.5", calc: false, difficulty: "easy",
        question: String.raw`Which pair of functions together have the graph of $x = y^2 - 4y$?`,
        choices: [String.raw`$y = 2 + \sqrt{x + 4}$ and $y = 2 - \sqrt{x + 4}$`, String.raw`$y = 2 + \sqrt{x - 4}$ and $y = 2 - \sqrt{x - 4}$`, String.raw`$y = -2 + \sqrt{x + 4}$ and $y = -2 - \sqrt{x + 4}$`, String.raw`$y = \sqrt{x + 4}$ and $y = -\sqrt{x + 4}$`],
        why: [
          String.raw`Complete the square: $x + 4 = y^2 - 4y + 4 = (y - 2)^2$. So $y - 2 = \pm\sqrt{x + 4}$, and $y = 2 \pm \sqrt{x + 4}$.`,
          String.raw`Completing the square adds $4$ to both sides, so the left side is $x + 4$, not $x - 4$.`,
          String.raw`$(y - 2)^2$ gives $y = 2 \pm \ldots$. The sign inside the square is opposite to the shift.`,
          String.raw`This solves $(y - 2)^2 = x + 4$ for $y - 2$ and stops. Add $2$ to both sides to get $y$.`,
        ], answer: 0 },
      { id: "p405-m06", type: "mcq", skill: "u4", topic: "4.5", calc: false, difficulty: "difficult",
        question: String.raw`The graph of $x^2y - 4y - x^2 + 4 = 0$ is made of straight lines. Which lines are they?`,
        choices: ["$x = 2$, $x = -2$, and $y = 1$", "$y = 1$ only", "$x = 2$ and $y = 1$", "$x = 2$, $x = -2$, and $y = -1$"],
        why: [
          String.raw`Group the terms: $y(x^2 - 4) - (x^2 - 4) = (x^2 - 4)(y - 1) = (x - 2)(x + 2)(y - 1) = 0$. A product is $0$ when a factor is $0$: $x = 2$, $x = -2$, or $y = 1$.`,
          String.raw`This divides both sides by $x^2 - 4$, which loses the points where $x^2 - 4 = 0$. Every point with $x = 2$ or $x = -2$ satisfies the equation.`,
          String.raw`$x^2 = 4$ has two solutions, $x = 2$ and $x = -2$. Both lines are part of the graph.`,
          String.raw`The factor is $y - 1$, which is $0$ when $y = 1$. At $y = -1$, the point $(0, -1)$ gives $0 + 4 - 0 + 4 = 8$, not $0$.`,
        ], answer: 0 },
      { id: "p405-f1a", type: "frq", skill: "u4", topic: "4.5", calc: false, set: "p405-s2", part: "(a)",
        prompt: String.raw`Find the coordinates of every point on the curve with $x = 5$.`,
        rows: [{ name: "Points", earns: String.raw`Solves $y^2 - 5y + 4 = 0$ to get $y = 1$ and $y = 4$, and gives both points, $(5, 1)$ and $(5, 4)$.` }],
        solution: String.raw`With $x = 5$: $5y - y^2 = 4$, so $y^2 - 5y + 4 = (y - 1)(y - 4) = 0$. The points are $(5, 1)$ and $(5, 4)$.` },
      { id: "p405-f1b", type: "frq", skill: "u4", topic: "4.5", calc: false, set: "p405-s2", part: "(b)",
        prompt: String.raw`The curve is the union of the graphs of two functions of $x$. Write both functions.`,
        rows: [{ name: "Functions", earns: String.raw`$y = \dfrac{x + \sqrt{x^2 - 16}}{2}$ and $y = \dfrac{x - \sqrt{x^2 - 16}}{2}$, from the quadratic formula applied to $y^2 - xy + 4 = 0$.` }],
        solution: String.raw`Write the equation as a quadratic in $y$: $y^2 - xy + 4 = 0$. The quadratic formula with $a = 1$, $b = -x$, and $c = 4$ gives $$y = \frac{x \pm \sqrt{x^2 - 16}}{2}.$$ The two functions are $y = \dfrac{x + \sqrt{x^2 - 16}}{2}$ and $y = \dfrac{x - \sqrt{x^2 - 16}}{2}$. A check at $x = 5$: $\dfrac{5 \pm 3}{2}$ gives $4$ and $1$, as in part (a).` },
      { id: "p405-f1c", type: "frq", skill: "u4", topic: "4.5", calc: false, set: "p405-s2", part: "(c)",
        prompt: String.raw`Does the curve have a point with $x = 3$? Give a reason for your answer.`,
        rows: [
          { name: "Discriminant", earns: String.raw`At $x = 3$, the quadratic $y^2 - 3y + 4 = 0$ has discriminant $9 - 16 = -7$ (or $x^2 - 16 < 0$).` },
          { name: "Conclusion with reason", earns: String.raw`No, because a negative discriminant means no real value of $y$ satisfies the equation when $x = 3$.` },
        ],
        solution: String.raw`With $x = 3$, the equation is $3y - y^2 = 4$, or $y^2 - 3y + 4 = 0$. Its discriminant is $(-3)^2 - 4(1)(4) = -7 < 0$, so there is no real $y$. The curve has no point with $x = 3$. In the same way, the curve has no points with $-4 < x < 4$, where $x^2 - 16 < 0$.` },
    ],
  }],
};

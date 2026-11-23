// AP Precalculus topic quiz 4.1 (Unit 4 is taught but not on the AP exam). Keys and every number are computed in the
// writer's scratch scripts.
import { graph } from "../../plot.js";

// A parametric path drawn as short segments.
function path(fx, fy, t0, t1, n = 120) {
  const out = [];
  for (let k = 0; k < n; k++) {
    const a = t0 + ((t1 - t0) * k) / n, b = t0 + ((t1 - t0) * (k + 1)) / n;
    out.push([fx(a), fy(a), fx(b), fy(b)]);
  }
  return out;
}

export const sets = {
  "p401-s1": {
    name: "A parametric function in a table",
    label: "Table",
    intro: String.raw`The parametric function $f$ is given by $f(t) = \left(x(t), y(t)\right)$ for $0 \le t \le 4$. Selected values of $x(t)$ and $y(t)$ are given in the table below.`,
    sources: [{ title: "", blocks: [{ table: { head: ["$t$", "$0$", "$1$", "$2$", "$3$", "$4$"], rows: [["$x(t)$", "$7$", "$4$", "$1$", "$-2$", "$-5$"], ["$y(t)$", "$-3$", "$-4$", "$-3$", "$0$", "$5$"]] } }] }],
  },
  "p401-s2": {
    name: "A curve with two endpoints",
    label: "Graph",
    intro: String.raw`The graph of the parametric function $f(t) = \left(t^2 - 1,\ t + 1\right)$ for $a \le t \le b$ is shown below. Its endpoints are $(3, -1)$ and $(0, 2)$.`,
    sources: [{ title: "", blocks: [{ svg: graph({
      x: [-2, 4], y: [-2, 3], step: 1, xname: "x", yname: "y",
      segments: path((t) => t * t - 1, (t) => t + 1, -2, 1),
      dots: [[3, -1, "closed"], [0, 2, "closed"]],
      labels: [[3.05, -0.75, "(3, −1)"], [0.1, 2.3, "(0, 2)"]],
      alt: "A curved arc shaped like part of a parabola that opens to the right. It starts at the endpoint (3, -1), runs up and to the left to its leftmost point (-1, 1), and then curves up and to the right to the endpoint (0, 2).",
    }) }] }],
  },
  "p401-s3": {
    name: "A curve and its equation",
    label: "Free response",
    intro: String.raw`The parametric function $f$ is given by $f(t) = \left(2t - 1,\ t^2 - 4t\right)$ for $-1 \le t \le 4$.`,
    sources: [{ title: "", blocks: [{ p: String.raw`No calculator is allowed on this question. Show the work that leads to your answers.` }] }],
  },
};

export default {
  forms: [{
    id: "p401",
    name: "Topic 4.1 Quiz: Parametric Functions",
    group: "Unit 4: Functions Involving Parameters, Vectors, and Matrices",
    items: [
      { id: "p401-m01", type: "mcq", skill: "u4", topic: "4.1", calc: true, difficulty: "easy",
        question: String.raw`The parametric function $f$ is given by $f(t) = \left(\ln(t + 2),\ 3 - t^2\right)$ for $t \ge 0$. What is the $x$-coordinate of the point on the graph of $f$ where $y = -2$?`,
        choices: ["$1.444$", "$2.236$", "$1.946$", "$0.627$"],
        why: [
          String.raw`Solve $3 - t^2 = -2$: $t^2 = 5$, and $t \ge 0$ gives $t = \sqrt{5} \approx 2.236$. Then $x = \ln(2.236 + 2) \approx 1.444$.`,
          String.raw`$2.236$ is the value of $t$ where $y = -2$. The question asks for the $x$-coordinate, $x(2.236)$.`,
          String.raw`$1.946$ is $\ln 7$, which uses $t = 5$. The equation $t^2 = 5$ gives $t = \sqrt{5}$, not $t = 5$.`,
          String.raw`$0.627$ is $\log(4.236)$, the common logarithm. The function uses the natural logarithm.`,
        ], answer: 0 },
      { id: "p401-m02", type: "mcq", skill: "u4", topic: "4.1", calc: false, difficulty: "easy", set: "p401-s1",
        question: String.raw`Based on the table, at what point does the graph of $f$ cross the $x$-axis?`,
        choices: ["$(-2, 0)$", "$(3, 0)$", "$(7, -3)$", "$(0, -2)$"],
        why: [
          String.raw`A point is on the $x$-axis when $y(t) = 0$. The table gives $y(3) = 0$, and $x(3) = -2$, so the point is $(-2, 0)$.`,
          String.raw`$3$ is the value of $t$ where $y(t) = 0$. The $x$-coordinate of the point is $x(3) = -2$.`,
          String.raw`$(7, -3)$ is $f(0)$, the point where $t = 0$. That point is below the $x$-axis because $y(0) = -3$.`,
          String.raw`$(0, -2)$ has the coordinates of the right point in the wrong order. The point is $\left(x(3), y(3)\right) = (-2, 0)$.`,
        ], answer: 0 },
      { id: "p401-m03", type: "mcq", skill: "u4", topic: "4.1", calc: false, difficulty: "moderate",
        question: String.raw`The parametric function $f$ is given by $f(t) = \left(t^2 + 2t,\ t^2 - 2t\right)$. What are the $y$-coordinates of all the points on the graph of $f$ where $x = 3$?`,
        choices: ["$-1$ and $15$", "$1$ and $-3$", "$-1$ only", "$3$ only"],
        why: [
          String.raw`Solve $t^2 + 2t = 3$: $(t + 3)(t - 1) = 0$, so $t = -3$ or $t = 1$. Then $y(-3) = 9 + 6 = 15$ and $y(1) = 1 - 2 = -1$.`,
          String.raw`$1$ and $-3$ are the values of $t$ where $x = 3$. Each one still has to be put into $y(t)$.`,
          String.raw`$-1$ is $y(1)$ only. The equation $t^2 + 2t = 3$ also has the solution $t = -3$, which gives a second point, $(3, 15)$.`,
          String.raw`$3$ is $3^2 - 2(3)$, which puts $x = 3$ into the formula for $y(t)$. That formula takes $t$, so solve for $t$ first.`,
        ], answer: 0 },
      { id: "p401-m04", type: "mcq", skill: "u4", topic: "4.1", calc: false, difficulty: "easy",
        question: String.raw`The parametric function $f$ is given by $f(t) = \left(t + 2,\ t^2 - 1\right)$. Which equation in $x$ and $y$ has the same graph as $f$?`,
        choices: ["$y = (x - 2)^2 - 1$", "$y = (x + 2)^2 - 1$", "$y = x^2 - 3$", "$x = (y - 2)^2 - 1$"],
        why: [
          String.raw`From $x = t + 2$, $t = x - 2$. Then $y = t^2 - 1 = (x - 2)^2 - 1$.`,
          String.raw`This uses $t = x + 2$. Solving $x = t + 2$ for $t$ subtracts $2$ from $x$.`,
          String.raw`This treats $y = t^2 - 1$ and $x = t + 2$ as two separate functions and combines their constants. Write $t$ in terms of $x$ and substitute.`,
          String.raw`This is the right equation with $x$ and $y$ swapped. It describes a parabola that opens to the right, but $y = t^2 - 1$ with $x = t + 2$ opens up.`,
        ], answer: 0 },
      { id: "p401-m05", type: "mcq", skill: "u4", topic: "4.1", calc: false, difficulty: "moderate", set: "p401-s2",
        question: String.raw`What interval of $t$ gives exactly the graph shown?`,
        choices: [String.raw`$-2 \le t \le 1$`, String.raw`$0 \le t \le 3$`, String.raw`$-1 \le t \le 2$`, String.raw`$-2 \le t \le 2$`],
        why: [
          String.raw`The endpoint $(3, -1)$ has $t + 1 = -1$, so $t = -2$; check $x(-2) = 4 - 1 = 3$. The endpoint $(0, 2)$ has $t + 1 = 2$, so $t = 1$; check $x(1) = 0$. As $t$ runs from $-2$ to $1$, $y = t + 1$ rises from $-1$ to $2$, which traces the arc once.`,
          String.raw`$0 \le x \le 3$ is the span of the endpoints' $x$-coordinates, not an interval of $t$. At $t = 3$ the point is $(8, 4)$, which is not on the graph.`,
          String.raw`$-1 \le y \le 2$ gives the $y$-coordinates of the arc. The values of $t$ are one less: $t = y - 1$.`,
          String.raw`At $t = 2$ the point is $(3, 3)$, which is not on the graph. The upper endpoint $(0, 2)$ comes from $t = 1$.`,
        ], answer: 0 },
      { id: "p401-m06", type: "mcq", skill: "u4", topic: "4.1", calc: false, difficulty: "difficult",
        question: String.raw`The graph of the parametric function $f(t) = \left(t^2 - 3t,\ t^2 - t - 6\right)$ passes through the point $(4, 6)$. For what value of $t$ is $f(t) = (4, 6)$?`,
        choices: ["$4$", "$-1$", "$-3$", "$-1$ and $4$"],
        why: [
          String.raw`$x = 4$ gives $t^2 - 3t - 4 = 0$, so $t = 4$ or $t = -1$. $y = 6$ gives $t^2 - t - 12 = 0$, so $t = 4$ or $t = -3$. Both coordinates must match at the same $t$, and only $t = 4$ is in both lists.`,
          String.raw`$t = -1$ gives $x = 4$, but $y(-1) = 1 + 1 - 6 = -4$, so $f(-1) = (4, -4)$.`,
          String.raw`$t = -3$ gives $y = 6$, but $x(-3) = 9 + 9 = 18$, so $f(-3) = (18, 6)$.`,
          String.raw`These are the solutions of $x(t) = 4$ alone. At $t = -1$ the $y$-coordinate is $-4$, not $6$.`,
        ], answer: 0 },
      { id: "p401-f1a", type: "frq", skill: "u4", topic: "4.1", calc: false, set: "p401-s3", part: "(a)",
        prompt: String.raw`Find the coordinates of every point where the graph of $f$ meets the $x$-axis.`,
        rows: [{ name: "Points", earns: String.raw`Sets $t^2 - 4t = 0$ to get $t = 0$ and $t = 4$, and gives both points, $(-1, 0)$ and $(7, 0)$.` }],
        solution: String.raw`The graph meets the $x$-axis where $y(t) = 0$: $t^2 - 4t = t(t - 4) = 0$, so $t = 0$ or $t = 4$. Both are in $-1 \le t \le 4$. Then $x(0) = -1$ and $x(4) = 7$, so the points are $(-1, 0)$ and $(7, 0)$.` },
      { id: "p401-f1b", type: "frq", skill: "u4", topic: "4.1", calc: false, set: "p401-s3", part: "(b)",
        prompt: String.raw`Write an equation for $y$ in terms of $x$ whose graph contains the graph of $f$.`,
        rows: [{ name: "Equation", earns: String.raw`Solves $x = 2t - 1$ for $t = \dfrac{x + 1}{2}$ and substitutes to get $y = \left(\dfrac{x + 1}{2}\right)^2 - 4\left(\dfrac{x + 1}{2}\right)$ or an equivalent form.` }],
        solution: String.raw`From $x = 2t - 1$, $t = \dfrac{x + 1}{2}$. Then $$y = \left(\frac{x + 1}{2}\right)^2 - 4\left(\frac{x + 1}{2}\right) = \frac{x^2 - 6x - 7}{4} = \frac{(x - 7)(x + 1)}{4}.$$ The factored form agrees with part (a): $y = 0$ at $x = -1$ and $x = 7$.` },
      { id: "p401-f1c", type: "frq", skill: "u4", topic: "4.1", calc: false, set: "p401-s3", part: "(c)",
        prompt: String.raw`On what interval of $x$-values is the equation from part (b) the graph of $f$? Give a reason for your answer.`,
        rows: [{ name: "Interval with reason", earns: String.raw`$-3 \le x \le 7$, because $x(t) = 2t - 1$ is increasing, so the $x$-values run from $x(-1) = -3$ to $x(4) = 7$.` }],
        solution: String.raw`The parameter is restricted to $-1 \le t \le 4$, so the graph of $f$ is only part of the parabola. Since $x(t) = 2t - 1$ is increasing, the $x$-coordinates run from $x(-1) = -3$ to $x(4) = 7$. The graph of $f$ is the part of the parabola with $-3 \le x \le 7$, from $(-3, 5)$ to $(7, 0)$.` },
    ],
  }],
};

// AP Precalculus topic quiz 4.6 (Unit 4 is taught but not on the AP exam). Keys and every number are computed in the
// writer's scratch scripts.
import { graph } from "../../plot.js";

// p406-s1: the ellipse (x - 2)^2 / 16 + (y + 1)^2 / 4 = 1, drawn as its upper and lower halves.
const half = (x) => 2 * Math.sqrt(Math.max(0, 1 - ((x - 2) * (x - 2)) / 16));
// p406-s2: the parabola y - 4 = -(1/2)(x - 1)^2.
const par = (x) => 4 - 0.5 * (x - 1) * (x - 1);

export const sets = {
  "p406-s1": {
    name: "An ellipse on a grid",
    label: "Graph",
    intro: String.raw`The graph of an ellipse is shown below. The endpoints of its axes are marked.`,
    sources: [{ title: "", blocks: [{ svg: graph({
      x: [-3, 7], y: [-4, 2], step: 1, xname: "x", yname: "y", width: 360, height: 252,
      fns: [{ f: (x) => -1 + half(x), from: -2, to: 6 }, { f: (x) => -1 - half(x), from: -2, to: 6 }],
      dots: [[-2, -1, "closed"], [6, -1, "closed"], [2, 1, "closed"], [2, -3, "closed"]],
      alt: "An ellipse that is wider than it is tall. Its axis endpoints are marked at (-2, -1) and (6, -1) on the left and right, and at (2, 1) and (2, -3) on the top and bottom, so its center is (2, -1).",
    }) }] }],
  },
  "p406-s2": {
    name: "A parabola that opens down",
    label: "Graph",
    intro: String.raw`The graph of a parabola is shown below. Its vertex and two other points on it are marked.`,
    sources: [{ title: "", blocks: [{ svg: graph({
      x: [-4, 6], y: [-5, 5], step: 1, xname: "x", yname: "y",
      fns: [{ f: par, from: -3.2, to: 5.2 }],
      dots: [[1, 4, "closed"], [-1, 2, "closed"], [3, 2, "closed"]],
      labels: [[1.15, 4.3, "(1, 4)"], [-2.6, 2.3, "(−1, 2)"], [3.2, 2.3, "(3, 2)"]],
      alt: "A parabola that opens down with its vertex at (1, 4). The points (-1, 2) and (3, 2) are marked on it, and it passes through (-3, -4) and (5, -4).",
    }) }] }],
  },
  "p406-s3": {
    name: "A hyperbola in general form",
    label: "Free response",
    intro: String.raw`The curve $H$ is the graph of the equation $x^2 - 4y^2 - 4x - 24y - 48 = 0$.`,
    sources: [{ title: "", blocks: [{ p: String.raw`No calculator is allowed on this question. Show the work that leads to your answers.` }] }],
  },
};

export default {
  forms: [{
    id: "p406",
    name: "Topic 4.6 Quiz: Conic Sections",
    group: "Unit 4: Functions Involving Parameters, Vectors, and Matrices",
    items: [
      { id: "p406-m01", type: "mcq", skill: "u4", topic: "4.6", calc: false, difficulty: "easy", set: "p406-s1",
        question: String.raw`Which equation has this ellipse as its graph?`,
        choices: [String.raw`$\frac{(x - 2)^2}{16} + \frac{(y + 1)^2}{4} = 1$`, String.raw`$\frac{(x + 2)^2}{16} + \frac{(y - 1)^2}{4} = 1$`, String.raw`$\frac{(x - 2)^2}{4} + \frac{(y + 1)^2}{2} = 1$`, String.raw`$\frac{(x - 2)^2}{4} + \frac{(y + 1)^2}{16} = 1$`],
        why: [
          String.raw`The center is the midpoint of $(-2, -1)$ and $(6, -1)$, which is $(2, -1)$. The horizontal radius is $4$ and the vertical radius is $2$, so the denominators are $4^2 = 16$ under $(x - 2)^2$ and $2^2 = 4$ under $(y + 1)^2$.`,
          String.raw`This ellipse has center $(-2, 1)$. A center $(h, k)$ appears as $(x - h)$ and $(y - k)$, so $(2, -1)$ gives $(x - 2)$ and $(y + 1)$.`,
          String.raw`The denominators are the radii themselves. In standard form they are the squares of the radii, $16$ and $4$.`,
          String.raw`This puts the larger denominator under $(y + 1)^2$, which makes the ellipse taller than it is wide. The graph is wider, so $16$ goes under $(x - 2)^2$.`,
        ], answer: 0 },
      { id: "p406-m02", type: "mcq", skill: "u4", topic: "4.6", calc: false, difficulty: "easy",
        question: String.raw`What are the vertices of the hyperbola $\dfrac{(y - 3)^2}{25} - \dfrac{(x - 1)^2}{9} = 1$?`,
        choices: [String.raw`$(1, -2)$ and $(1, 8)$`, String.raw`$(-4, 3)$ and $(6, 3)$`, String.raw`$(1, 0)$ and $(1, 6)$`, String.raw`$(1, -22)$ and $(1, 28)$`],
        why: [
          String.raw`The $y$-term is positive, so the hyperbola opens up and down from its center $(1, 3)$. The vertices are $\sqrt{25} = 5$ units above and below the center: $(1, -2)$ and $(1, 8)$.`,
          String.raw`These are $5$ units left and right of the center, as if the hyperbola opened left and right. The positive squared term is the $y$-term, so it opens up and down.`,
          String.raw`These are $3$ units from the center, using $\sqrt{9}$ from the $x$-term. The vertices of an up and down hyperbola use the denominator of the $y$-term.`,
          String.raw`These are $25$ units from the center. The distance to each vertex is $\sqrt{25} = 5$, not $25$.`,
        ], answer: 0 },
      { id: "p406-m03", type: "mcq", skill: "u4", topic: "4.6", calc: false, difficulty: "moderate",
        question: String.raw`The graph of $y^2 + 6y - 4x + 1 = 0$ is a parabola. What is its vertex, and in which direction does it open?`,
        choices: [String.raw`Vertex $(-2, -3)$; opens right`, String.raw`Vertex $(-3, -2)$; opens right`, String.raw`Vertex $(2, 3)$; opens right`, String.raw`Vertex $(-2, -3)$; opens left`],
        why: [
          String.raw`Complete the square in $y$: $y^2 + 6y + 9 = 4x - 1 + 9$, so $(y + 3)^2 = 4(x + 2)$ and $x + 2 = \frac{1}{4}(y + 3)^2$. The vertex is $(-2, -3)$, and the positive coefficient $\frac{1}{4}$ means the parabola opens right.`,
          String.raw`This lists the coordinates of the vertex in the reverse order. In $x + 2 = \frac{1}{4}(y + 3)^2$, the vertex has $x = -2$ and $y = -3$.`,
          String.raw`This uses the signs inside the parentheses. $(x + 2)$ and $(y + 3)$ mean $x = -2$ and $y = -3$ at the vertex.`,
          String.raw`The term $-4x$ is on the left side. After moving it, $x + 2 = \frac{1}{4}(y + 3)^2$ has a positive coefficient, so $x$ grows as $y$ moves away from $-3$ and the parabola opens right.`,
        ], answer: 0 },
      { id: "p406-m04", type: "mcq", skill: "u4", topic: "4.6", calc: false, difficulty: "easy", set: "p406-s2",
        question: String.raw`Which equation has this parabola as its graph?`,
        choices: [String.raw`$y - 4 = -\frac{1}{2}(x - 1)^2$`, String.raw`$y - 4 = -(x - 1)^2$`, String.raw`$x - 1 = -\frac{1}{2}(y - 4)^2$`, String.raw`$y + 4 = -\frac{1}{2}(x + 1)^2$`],
        why: [
          String.raw`The vertex is $(1, 4)$, so $y - 4 = a(x - 1)^2$. The point $(3, 2)$ gives $-2 = a(2)^2$, so $a = -\frac{1}{2}$.`,
          String.raw`$a = -1$ treats the drop of $2$ over a run of $2$ as a slope. In vertex form, the drop is $a$ times the square of the run: $-2 = a(2)^2$.`,
          String.raw`This is the form of a parabola that opens left or right. The graph opens down, so $y - k$ equals $a(x - h)^2$.`,
          String.raw`This parabola has vertex $(-1, -4)$. The vertex $(1, 4)$ gives $(x - 1)$ and $(y - 4)$.`,
        ], answer: 0 },
      { id: "p406-m05", type: "mcq", skill: "u4", topic: "4.6", calc: false, difficulty: "moderate",
        question: String.raw`What are the asymptotes of the hyperbola $\dfrac{(x + 1)^2}{9} - \dfrac{(y - 2)^2}{36} = 1$?`,
        choices: [String.raw`$y - 2 = \pm 2(x + 1)$`, String.raw`$y - 2 = \pm \frac{1}{2}(x + 1)$`, String.raw`$y - 2 = \pm 4(x + 1)$`, String.raw`$y + 2 = \pm 2(x - 1)$`],
        why: [
          String.raw`The center is $(-1, 2)$, $a = \sqrt{9} = 3$ with $x$, and $b = \sqrt{36} = 6$ with $y$. The asymptotes are $y - 2 = \pm\frac{b}{a}(x + 1) = \pm 2(x + 1)$.`,
          String.raw`$\frac{1}{2}$ is $\frac{a}{b} = \frac{3}{6}$, the reciprocal of the slope. The slopes are $\pm\frac{b}{a} = \pm\frac{6}{3}$.`,
          String.raw`$4 = \frac{36}{9}$ divides the denominators before taking square roots. The slope is $\frac{\sqrt{36}}{\sqrt{9}} = 2$.`,
          String.raw`These lines pass through $(1, -2)$. The center of the hyperbola is $(-1, 2)$, so the asymptotes use $(x + 1)$ and $(y - 2)$.`,
        ], answer: 0 },
      { id: "p406-m06", type: "mcq", skill: "u4", topic: "4.6", calc: false, difficulty: "difficult",
        question: String.raw`What are the endpoints of the major axis of the ellipse $4x^2 + 25y^2 + 24x - 50y - 39 = 0$?`,
        choices: [String.raw`$(-8, 1)$ and $(2, 1)$`, String.raw`$(-3, -1)$ and $(-3, 3)$`, String.raw`$(-5, 1)$ and $(-1, 1)$`, String.raw`$(-2, -1)$ and $(8, -1)$`],
        why: [
          String.raw`$4(x^2 + 6x + 9) + 25(y^2 - 2y + 1) = 39 + 36 + 25$, so $4(x + 3)^2 + 25(y - 1)^2 = 100$. Dividing by $100$ gives $\frac{(x + 3)^2}{25} + \frac{(y - 1)^2}{4} = 1$. The major axis is horizontal with radius $5$, so its endpoints are $(-3 \pm 5, 1)$: $(-8, 1)$ and $(2, 1)$.`,
          String.raw`These are the endpoints of the minor axis, $2$ units above and below the center. The major axis goes with the larger denominator, $25$, under $(x + 3)^2$.`,
          String.raw`This uses a radius of $2$ from the coefficient $4$ on $x^2$. After dividing by $100$, the denominator under $(x + 3)^2$ is $25$, so the radius is $5$.`,
          String.raw`This uses the center $(3, -1)$. Completing the square gives $(x + 3)^2$ and $(y - 1)^2$, so the center is $(-3, 1)$.`,
        ], answer: 0 },
      { id: "p406-f1a", type: "frq", skill: "u4", topic: "4.6", calc: false, set: "p406-s3", part: "(a)",
        prompt: String.raw`Rewrite the equation of $H$ in standard form by completing the square.`,
        rows: [{ name: "Standard form", earns: String.raw`$\dfrac{(x - 2)^2}{16} - \dfrac{(y + 3)^2}{4} = 1$, with the completed squares shown.` }],
        solution: String.raw`Group the terms: $(x^2 - 4x) - 4(y^2 + 6y) = 48$. Complete each square: $(x^2 - 4x + 4) - 4(y^2 + 6y + 9) = 48 + 4 - 36$, so $(x - 2)^2 - 4(y + 3)^2 = 16$. Divide by $16$: $$\frac{(x - 2)^2}{16} - \frac{(y + 3)^2}{4} = 1.$$` },
      { id: "p406-f1b", type: "frq", skill: "u4", topic: "4.6", calc: false, set: "p406-s3", part: "(b)",
        prompt: String.raw`Find the center and the vertices of $H$.`,
        rows: [{ name: "Center and vertices", earns: String.raw`Center $(2, -3)$ and vertices $(-2, -3)$ and $(6, -3)$.` }],
        solution: String.raw`From the standard form, the center is $(2, -3)$. The $x$-term is positive, so $H$ opens left and right, and the vertices are $\sqrt{16} = 4$ units from the center: $(2 - 4, -3) = (-2, -3)$ and $(2 + 4, -3) = (6, -3)$.` },
      { id: "p406-f1c", type: "frq", skill: "u4", topic: "4.6", calc: false, set: "p406-s3", part: "(c)",
        prompt: String.raw`Write equations for the asymptotes of $H$.`,
        rows: [{ name: "Asymptotes", earns: String.raw`$y + 3 = \dfrac{1}{2}(x - 2)$ and $y + 3 = -\dfrac{1}{2}(x - 2)$.` }],
        solution: String.raw`Here $a = 4$ goes with $x$ and $b = 2$ goes with $y$. The asymptotes pass through the center $(2, -3)$ with slopes $\pm\dfrac{b}{a} = \pm\dfrac{1}{2}$: $$y + 3 = \frac{1}{2}(x - 2) \quad \text{and} \quad y + 3 = -\frac{1}{2}(x - 2).$$` },
    ],
  }],
};

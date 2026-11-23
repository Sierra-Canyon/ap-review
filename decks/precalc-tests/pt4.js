// AP Precalculus unit test, Unit 4: Functions Involving Parameters, Vectors, and Matrices (topics 4.1 to 4.14). Unit 4
// is taught but not on the AP exam, so its free response has no AP type: question 1 is parametric motion with a
// calculator and question 2 is vectors and matrices without one, both 6 points in the AP's part structure.
import { graph } from "../../plot.js";

// A parametric path drawn as short segments.
function path(fx, fy, t0, t1, n = 160) {
  const out = [];
  for (let k = 0; k < n; k++) {
    const a = t0 + ((t1 - t0) * k) / n, b = t0 + ((t1 - t0) * (k + 1)) / n;
    out.push([fx(a), fy(a), fx(b), fy(b)]);
  }
  return out;
}
// An arrow from (x1, y1) to (x2, y2) as three segments (shaft and two head strokes).
function arrow(x1, y1, x2, y2, h = 0.4) {
  const a = Math.atan2(y2 - y1, x2 - x1), s = 0.45;
  return [
    [x1, y1, x2, y2],
    [x2, y2, x2 - h * Math.cos(a - s), y2 - h * Math.sin(a - s)],
    [x2, y2, x2 - h * Math.cos(a + s), y2 - h * Math.sin(a + s)],
  ];
}

export const sets = {
  "pt4-s1": {
    name: "A parametric function in a table",
    label: "Table",
    intro: String.raw`Selected values of the parametric function $f(t) = \left(x(t), y(t)\right)$ are given in the table below.`,
    sources: [{ title: "", blocks: [{ table: { head: ["$t$", "$-1$", "$0$", "$1$", "$2$"], rows: [["$x(t)$", "$5$", "$3$", "$1$", "$-1$"], ["$y(t)$", "$2$", "$1$", "$2$", "$5$"]] } }] }],
  },
  "pt4-s2": {
    name: "A parabola that opens left",
    label: "Graph",
    intro: String.raw`The graph of a parabola is shown below. Its vertex and two other points on it are marked.`,
    sources: [{ title: "", blocks: [{ svg: graph({
      x: [-7, 4], y: [-6, 4], step: 1, xname: "x", yname: "y",
      segments: path((s) => 2 - 0.5 * (s + 1) * (s + 1), (s) => s, -5.6, 3.6),
      dots: [[2, -1, "closed"], [0, 1, "closed"], [0, -3, "closed"]],
      labels: [[2.2, -1.75, "(2, −1)"], [0.15, 1.35, "(0, 1)"], [0.15, -3.6, "(0, −3)"]],
      alt: "A parabola that opens to the left with its vertex at (2, -1). The points (0, 1) and (0, -3) are marked on it, and it passes through (-6, 3) and (-6, -5).",
    }) }] }],
  },
  "pt4-s3": {
    name: "A vector on a grid",
    label: "Diagram",
    intro: String.raw`The vector $\overrightarrow{PQ}$ is shown on the grid below. Its tail is $P(-1, -1)$ and its head is $Q(3, 2)$.`,
    sources: [{ title: "", blocks: [{ svg: graph({
      x: [-3, 5], y: [-3, 4], step: 1, xname: "x", yname: "y", width: 360, height: 322,
      segments: arrow(-1, -1, 3, 2),
      dots: [[-1, -1, "closed"]],
      labels: [[-1.9, -1.6, "P"], [3.1, 2.25, "Q"]],
      alt: "A coordinate grid with an arrow from P at (-1, -1) up and to the right to its head Q at (3, 2).",
    }) }] }],
  },
  "pt4-s4": {
    name: "A toy car in a parking lot",
    label: "Free response",
    intro: String.raw`A remote-controlled toy car moves across an empty parking lot. Its position at time $t$ minutes is $\left(x(t), y(t)\right)$, where $x(t) = 6 + 5\cos(0.8t)$ and $y(t) = 0.4t^2 - 2t + 6$ for $0 \le t \le 6$. Both coordinates are in meters.`,
    sources: [{ title: "", blocks: [{ p: String.raw`A graphing calculator is required for this question. Give decimal answers correct to three decimal places.` }] }],
  },
  "pt4-s5": {
    name: "Two vectors and a transformation",
    label: "Free response",
    intro: String.raw`Let $\vec{u} = \langle 3, 1 \rangle$ and $\vec{w} = \langle -1, 3 \rangle$. The linear transformation $L$ is given by $L(\vec{v}) = A\vec{v}$, where $A = \begin{bmatrix} 3 & -1 \\ 2 & 1 \end{bmatrix}$ and $\vec{v}$ is written as a column.`,
    sources: [{ title: "", blocks: [{ p: String.raw`No calculator is allowed on this question. Show the work that leads to your answers.` }] }],
  },
};

const items = [
  // Part A: no calculator
  { id: "pt4-m01", type: "mcq", skill: "u4", topic: "4.1", calc: false, difficulty: "easy", set: "pt4-s1",
    question: String.raw`Which parametric function could give the values in the table?`,
    choices: [String.raw`$\left(3 - 2t,\ t^{2} + 1\right)$`, String.raw`$\left(3 - 2t,\ |t| + 1\right)$`, String.raw`$\left(2t - 3,\ t^{2} + 1\right)$`, String.raw`$\left(t^{2} + 1,\ 3 - 2t\right)$`],
    why: [
      String.raw`Check every column: $3 - 2t$ gives $5, 3, 1, -1$ and $t^{2} + 1$ gives $2, 1, 2, 5$ for $t = -1, 0, 1, 2$.`,
      String.raw`$|t| + 1$ matches the first three columns, but at $t = 2$ it gives $3$, not $5$. Every column must match.`,
      String.raw`$2t - 3$ gives $x(0) = -3$, but the table has $x(0) = 3$. The $x$-values fall by $2$ as $t$ increases by $1$, so the slope is $-2$.`,
      String.raw`This switches the two coordinates. At $t = 0$ it gives the point $(1, 3)$, but the table gives $(3, 1)$.`,
    ], answer: 0 },
  { id: "pt4-m02", type: "mcq", skill: "u4", topic: "4.3", calc: false, difficulty: "easy",
    question: String.raw`A particle moves in the $xy$-plane so that its position at time $t$ is $\left(5 - t^{2},\ 2^{t}\right)$. For $1 < t < 3$, in which directions is the particle moving?`,
    choices: ["Left and up", "Right and up", "Left and down", "Right and down"],
    why: [
      String.raw`On $1 < t < 3$, $x(t) = 5 - t^{2}$ decreases from $4$ to $-4$, so the particle moves left. $y(t) = 2^{t}$ increases from $2$ to $8$, so it moves up.`,
      String.raw`$x(t)$ is positive for part of the interval, but its values fall from $4$ to $-4$. Direction comes from whether $x(t)$ increases or decreases, not from its sign.`,
      String.raw`The particle moves left, but $2^{t}$ increases as $t$ increases, so it moves up, not down.`,
      String.raw`Both directions are reversed. $x(t)$ falls and $y(t)$ rises on this interval.`,
    ], answer: 0 },
  { id: "pt4-m03", type: "mcq", skill: "u4", topic: "4.4", calc: false, difficulty: "moderate",
    question: String.raw`A particle moves counterclockwise once around the circle with center $(1, -2)$ and radius $3$ as $t$ increases from $0$ to $2\pi$. At $t = 0$ it is at the lowest point of the circle. Which parametric function gives its position?`,
    choices: [String.raw`$\left(1 + 3\sin t,\ -2 - 3\cos t\right)$`, String.raw`$\left(1 - 3\sin t,\ -2 - 3\cos t\right)$`, String.raw`$\left(1 + 3\cos t,\ -2 + 3\sin t\right)$`, String.raw`$\left(-1 + 3\sin t,\ 2 - 3\cos t\right)$`],
    why: [
      String.raw`At $t = 0$: $(1, -2 - 3) = (1, -5)$, the lowest point. At $t = \frac{\pi}{2}$: $(1 + 3, -2) = (4, -2)$, the rightmost point. Going from the bottom to the right side is counterclockwise.`,
      String.raw`This starts at $(1, -5)$, but at $t = \frac{\pi}{2}$ it is at $(-2, -2)$, the leftmost point. From the bottom to the left side is clockwise.`,
      String.raw`This traces the circle counterclockwise, but it starts at $(4, -2)$, the rightmost point.`,
      String.raw`This circle has center $(-1, 2)$. The constants added in a parametric function are the coordinates of the center, $1$ and $-2$.`,
    ], answer: 0 },
  { id: "pt4-m04", type: "mcq", skill: "u4", topic: "4.5", calc: false, difficulty: "difficult",
    question: String.raw`For which values of $x$ does the graph of $x^{2} + xy + y^{2} = 12$ have exactly one point?`,
    choices: [String.raw`$x = -4$ and $x = 4$`, String.raw`$x = -2\sqrt{3}$ and $x = 2\sqrt{3}$`, String.raw`$x = 0$ only`, String.raw`$-4 < x < 4$`],
    why: [
      String.raw`As a quadratic in $y$, the equation is $y^{2} + xy + (x^{2} - 12) = 0$, with discriminant $x^{2} - 4(x^{2} - 12) = 48 - 3x^{2}$. There is exactly one $y$ when the discriminant is $0$: $x^{2} = 16$, so $x = -4$ or $x = 4$.`,
      String.raw`These come from setting $y = 0$. At $x = 2\sqrt{3}$, the equation $y^{2} + 2\sqrt{3}\,y = 0$ has two solutions, $y = 0$ and $y = -2\sqrt{3}$.`,
      String.raw`At $x = 0$ the equation is $y^{2} = 12$, which has two solutions, $y = \pm 2\sqrt{3}$.`,
      String.raw`On $-4 < x < 4$ the discriminant $48 - 3x^{2}$ is positive, so each of these $x$-values has two points.`,
    ], answer: 0 },
  { id: "pt4-m05", type: "mcq", skill: "u4", topic: "4.6", calc: false, difficulty: "easy", set: "pt4-s2",
    question: String.raw`Which equation has this parabola as its graph?`,
    choices: [String.raw`$x - 2 = -\frac{1}{2}(y + 1)^2$`, String.raw`$y + 1 = -\frac{1}{2}(x - 2)^2$`, String.raw`$x + 2 = -\frac{1}{2}(y - 1)^2$`, String.raw`$x - 2 = -2(y + 1)^2$`],
    why: [
      String.raw`The parabola opens left from its vertex $(2, -1)$, so $x - 2 = a(y + 1)^2$ with $a < 0$. The point $(0, 1)$ gives $-2 = a(2)^2$, so $a = -\frac{1}{2}$.`,
      String.raw`This is the form of a parabola that opens up or down. A parabola that opens left has $x - h$ equal to $a(y - k)^2$.`,
      String.raw`This parabola has vertex $(-2, 1)$. The vertex $(2, -1)$ gives $(x - 2)$ and $(y + 1)$.`,
      String.raw`$a = -2$ divides the change in $y$ squared by the change in $x$. The equation $-2 = a(2)^2$ gives $a = -\frac{1}{2}$.`,
    ], answer: 0 },
  { id: "pt4-m06", type: "mcq", skill: "u4", topic: "4.7", calc: false, difficulty: "moderate",
    question: String.raw`What are the vertex and the axis of symmetry of the graph of the parametric function $\left(t^{2} - 4t + 1,\ t\right)$?`,
    choices: [String.raw`Vertex $(-3, 2)$; axis $y = 2$`, String.raw`Vertex $(2, -3)$; axis $x = 2$`, String.raw`Vertex $(-3, 2)$; axis $x = -3$`, String.raw`Vertex $(3, -2)$; axis $y = -2$`],
    why: [
      String.raw`With $y = t$, the graph is $x = y^{2} - 4y + 1 = (y - 2)^{2} - 3$, a parabola that opens right. Its vertex is $(-3, 2)$, and its axis of symmetry is the horizontal line $y = 2$.`,
      String.raw`This treats $x = (y - 2)^{2} - 3$ as if $x$ and $y$ were switched. Here $y = 2$ and $x = -3$ at the vertex.`,
      String.raw`The vertex is right, but the parabola opens right, so its axis is horizontal: $y = 2$.`,
      String.raw`This flips the signs of the vertex. $(y - 2)^{2} - 3$ is smallest at $y = 2$, where $x = -3$.`,
    ], answer: 0 },
  { id: "pt4-m07", type: "mcq", skill: "u4", topic: "4.8", calc: false, difficulty: "easy", set: "pt4-s3",
    question: String.raw`What is the magnitude of $\overrightarrow{PQ}$?`,
    choices: ["$5$", String.raw`$\sqrt{7}$`, String.raw`$\sqrt{13}$`, "$25$"],
    why: [
      String.raw`$\overrightarrow{PQ} = \langle 3 - (-1), 2 - (-1) \rangle = \langle 4, 3 \rangle$, so its magnitude is $\sqrt{16 + 9} = 5$.`,
      String.raw`$\sqrt{7} = \sqrt{16 - 9}$ subtracts the squares of the components. The magnitude adds them.`,
      String.raw`$\sqrt{13} = \sqrt{3^{2} + 2^{2}}$ is the distance from the origin to $Q$. The vector starts at $P$, so its components are head minus tail.`,
      String.raw`$25$ is the square of the magnitude. Take the square root.`,
    ], answer: 0 },
  { id: "pt4-m08", type: "mcq", skill: "u4", topic: "4.9", calc: false, difficulty: "moderate",
    question: String.raw`A particle moves in the $xy$-plane with velocity vector $\vec{v}(t) = \langle t^{2} - 4,\ 3 - t \rangle$ for $0 < t < 5$. On which interval is the particle moving to the left and upward?`,
    choices: [String.raw`$0 < t < 2$`, String.raw`$2 < t < 3$`, String.raw`$0 < t < 3$`, String.raw`$-2 < t < 2$`],
    why: [
      String.raw`The particle moves left when the $x$-component of velocity is negative: $t^{2} - 4 < 0$ for $0 < t < 2$. It moves up when the $y$-component is positive: $3 - t > 0$ for $t < 3$. Both hold for $0 < t < 2$.`,
      String.raw`On $2 < t < 3$, $t^{2} - 4$ is positive, so the particle moves to the right and upward.`,
      String.raw`$0 < t < 3$ uses only the $y$-component. For $2 < t < 3$ the $x$-component is positive, so the particle moves right.`,
      String.raw`$t^{2} - 4 < 0$ holds for $-2 < t < 2$, but the motion is defined only for $0 < t < 5$.`,
    ], answer: 0 },
  { id: "pt4-m09", type: "mcq", skill: "u4", topic: "4.10", calc: false, difficulty: "easy",
    question: String.raw`Let $A = \begin{bmatrix} 2 & -1 \\ 4 & 3 \end{bmatrix}$ and $\vec{v} = \begin{bmatrix} 3 \\ 1 \end{bmatrix}$. What is $A\vec{v}$?`,
    choices: [String.raw`$\begin{bmatrix} 5 \\ 15 \end{bmatrix}$`, String.raw`$\begin{bmatrix} 10 \\ 0 \end{bmatrix}$`, String.raw`$\begin{bmatrix} 7 \\ 15 \end{bmatrix}$`, String.raw`$\begin{bmatrix} 6 & -1 \\ 12 & 3 \end{bmatrix}$`],
    why: [
      String.raw`Each entry is a row of $A$ times $\vec{v}$: $2(3) + (-1)(1) = 5$ and $4(3) + 3(1) = 15$.`,
      String.raw`This multiplies the columns of $A$ by $\vec{v}$: $2(3) + 4(1) = 10$ and $-1(3) + 3(1) = 0$. Each entry of $A\vec{v}$ uses a row of $A$.`,
      String.raw`The entry $7$ treats $(-1)(1)$ as $+1$. The first entry is $6 - 1 = 5$.`,
      String.raw`This multiplies column $1$ of $A$ by $3$ and column $2$ by $1$ but does not add the columns. A $2 \times 2$ matrix times a $2 \times 1$ vector is $2 \times 1$.`,
    ], answer: 0 },
  { id: "pt4-m10", type: "mcq", skill: "u4", topic: "4.12", calc: false, difficulty: "difficult",
    question: String.raw`The linear transformation $T$ is given by $T(\vec{v}) = A\vec{v}$, where $A = \begin{bmatrix} 2 & 1 \\ 5 & 3 \end{bmatrix}$. Two input vectors have outputs $\langle 1, 2 \rangle$ and $\langle 3, 7 \rangle$. Which matrix has the two input vectors as its columns, in that order?`,
    choices: [String.raw`$\begin{bmatrix} 1 & 2 \\ -1 & -1 \end{bmatrix}$`, String.raw`$\begin{bmatrix} 4 & 13 \\ 11 & 36 \end{bmatrix}$`, String.raw`$\begin{bmatrix} -12 & 5 \\ -29 & 12 \end{bmatrix}$`, String.raw`$\begin{bmatrix} -7 & -26 \\ 3 & 11 \end{bmatrix}$`],
    why: [
      String.raw`$\det A = 6 - 5 = 1$, so $A^{-1} = \begin{bmatrix} 3 & -1 \\ -5 & 2 \end{bmatrix}$. The inputs are $A^{-1}\begin{bmatrix} 1 & 3 \\ 2 & 7 \end{bmatrix} = \begin{bmatrix} 1 & 2 \\ -1 & -1 \end{bmatrix}$. Check: $A\begin{bmatrix} 1 \\ -1 \end{bmatrix} = \begin{bmatrix} 1 \\ 2 \end{bmatrix}$ and $A\begin{bmatrix} 2 \\ -1 \end{bmatrix} = \begin{bmatrix} 3 \\ 7 \end{bmatrix}$.`,
      String.raw`This is $A\begin{bmatrix} 1 & 3 \\ 2 & 7 \end{bmatrix}$, which applies $T$ to the outputs. The inputs come from $A^{-1}$.`,
      String.raw`This is $\begin{bmatrix} 1 & 3 \\ 2 & 7 \end{bmatrix}A^{-1}$, the product in the reverse order. $T$ multiplies by $A$ on the left, so undoing it multiplies by $A^{-1}$ on the left.`,
      String.raw`This uses $\begin{bmatrix} 3 & -5 \\ -1 & 2 \end{bmatrix}$, the transpose of $A^{-1}$, which puts $-5$ and $-1$ in each other's places. $A^{-1} = \begin{bmatrix} 3 & -1 \\ -5 & 2 \end{bmatrix}$.`,
    ], answer: 0 },
  // Part B: calculator
  { id: "pt4-m11", type: "mcq", skill: "u4", topic: "4.2", calc: true, difficulty: "easy",
    question: String.raw`A particle moves in the $xy$-plane so that its position at time $t \ge 0$ is $\left(t + 2\cos t,\ t^{2} - 3\right)$, where $t$ is in radians. What is the $x$-coordinate of the particle when it crosses the $x$-axis?`,
    choices: ["$1.411$", "$1.732$", "$3.731$", "$1.020$"],
    why: [
      String.raw`The particle is on the $x$-axis when $t^{2} - 3 = 0$, and $t \ge 0$ gives $t = \sqrt{3} \approx 1.732$. Then $x = 1.732 + 2\cos(1.732) \approx 1.411$.`,
      String.raw`$1.732$ is the time $t = \sqrt{3}$. The $x$-coordinate is $t + 2\cos t$ at that time.`,
      String.raw`$3.731$ evaluates $\cos(1.732)$ in degree mode. The parameter is in radians.`,
      String.raw`$1.020$ uses $t = 3$, from $t^{2} - 3 = 0$ solved as $t = 3$. The solution is $t = \sqrt{3}$.`,
    ], answer: 0 },
  { id: "pt4-m12", type: "mcq", skill: "u4", topic: "4.11", calc: true, difficulty: "moderate",
    question: String.raw`A triangle has vertices $(0, 0)$, $(7.5, 2.2)$, and $(-1.8, 4.6)$. What is the area of the triangle?`,
    choices: ["$19.23$", "$38.46$", "$15.27$", "$30.54$"],
    why: [
      String.raw`The parallelogram with sides $\langle 7.5, 2.2 \rangle$ and $\langle -1.8, 4.6 \rangle$ has area $\left|\det\begin{bmatrix} 7.5 & -1.8 \\ 2.2 & 4.6 \end{bmatrix}\right| = |34.5 + 3.96| = 38.46$. The triangle is half of it: $19.23$.`,
      String.raw`$38.46$ is the area of the parallelogram with these two sides. The triangle is half of the parallelogram.`,
      String.raw`$15.27 = \frac{1}{2}(34.5 - 3.96)$ subtracts $3.96$. The determinant is $7.5(4.6) - (-1.8)(2.2) = 34.5 + 3.96$.`,
      String.raw`$30.54 = 34.5 - 3.96$ uses the wrong sign for $bc$ and does not halve the parallelogram's area.`,
    ], answer: 0 },
  { id: "pt4-m13", type: "mcq", skill: "u4", topic: "4.13", calc: true, difficulty: "easy",
    question: String.raw`The vector $\langle 6, 1 \rangle$ is rotated $50^\circ$ counterclockwise about the origin. What is the resulting vector?`,
    choices: [String.raw`$\langle 3.091, 5.239 \rangle$`, String.raw`$\langle 4.623, -3.953 \rangle$`, String.raw`$\langle 3.953, 4.623 \rangle$`, String.raw`$\langle 6.052, -0.609 \rangle$`],
    why: [
      String.raw`The rotation matrix is $\begin{bmatrix} \cos 50^\circ & -\sin 50^\circ \\ \sin 50^\circ & \cos 50^\circ \end{bmatrix}$. It gives $\langle 6\cos 50^\circ - \sin 50^\circ,\ 6\sin 50^\circ + \cos 50^\circ \rangle \approx \langle 3.091, 5.239 \rangle$.`,
      String.raw`$\langle 4.623, -3.953 \rangle$ is the clockwise rotation, from $\begin{bmatrix} \cos 50^\circ & \sin 50^\circ \\ -\sin 50^\circ & \cos 50^\circ \end{bmatrix}$.`,
      String.raw`$\langle 3.953, 4.623 \rangle$ switches sine and cosine in the rotation matrix.`,
      String.raw`$\langle 6.052, -0.609 \rangle$ evaluates $\cos 50$ and $\sin 50$ in radian mode. The angle is in degrees.`,
    ], answer: 0 },
  { id: "pt4-m14", type: "mcq", skill: "u4", topic: "4.14", calc: true, difficulty: "easy",
    question: String.raw`Each day, every rental scooter in a city ends the day in either the downtown zone (D) or the campus zone (C). Of the scooters in zone D one day, $72\%$ are in zone D the next day. Of the scooters in zone C one day, $35\%$ are in zone D the next day. Today, $60\%$ of the scooters are in zone D. What percent of the scooters will be in zone D tomorrow?`,
    choices: [String.raw`$57.2\%$`, String.raw`$54.4\%$`, String.raw`$42.8\%$`, String.raw`$49.8\%$`],
    why: [
      String.raw`With today's zone as the columns, $T = \begin{bmatrix} 0.72 & 0.35 \\ 0.28 & 0.65 \end{bmatrix}$, and $T\begin{bmatrix} 0.6 \\ 0.4 \end{bmatrix}$ has first entry $0.72(0.6) + 0.35(0.4) = 0.572$, or $57.2\%$.`,
      String.raw`$54.4\% = 0.72(0.6) + 0.28(0.4)$ uses $0.28$, the share of zone D scooters that move to zone C. Scooters from zone C move to zone D at the rate $0.35$.`,
      String.raw`$42.8\%$ is the share in zone C tomorrow.`,
      String.raw`$49.8\% = 0.72(0.4) + 0.35(0.6)$ switches today's shares of the two zones.`,
    ], answer: 0 },
  { id: "pt4-m15", type: "mcq", skill: "u4", topic: "4.14", calc: true, difficulty: "difficult",
    question: String.raw`Each week, a student studies either at a coffee shop (C) or at home (H). If the student studies at the coffee shop one week, the probability of studying there the next week is $0.55$. If the student studies at home one week, the probability of switching to the coffee shop the next week is $0.3$. The probability that the student studies at the coffee shop this week is $0.4125$. What is the probability that the student studied at the coffee shop two weeks ago?`,
    choices: [String.raw`$60\%$`, String.raw`$45\%$`, String.raw`$40\%$`, String.raw`$40.1\%$`],
    why: [
      String.raw`With last week's place as the columns, $T = \begin{bmatrix} 0.55 & 0.3 \\ 0.45 & 0.7 \end{bmatrix}$. Two weeks ago, the state was $(T^{-1})^{2}\begin{bmatrix} 0.4125 \\ 0.5875 \end{bmatrix} = \begin{bmatrix} 0.6 \\ 0.4 \end{bmatrix}$, so the probability is $60\%$. Check: $T^{2}\begin{bmatrix} 0.6 \\ 0.4 \end{bmatrix} = \begin{bmatrix} 0.4125 \\ 0.5875 \end{bmatrix}$.`,
      String.raw`$45\%$ is $T^{-1}\begin{bmatrix} 0.4125 \\ 0.5875 \end{bmatrix}$, last week's probability. Two weeks back needs $T^{-1}$ twice.`,
      String.raw`$40\%$ is the probability that the student studied at home two weeks ago.`,
      String.raw`$40.1\%$ comes from $T^{2}\begin{bmatrix} 0.4125 \\ 0.5875 \end{bmatrix}$, two weeks ahead. Going back uses $T^{-1}$.`,
    ], answer: 0 },
  // Free response 1: parametric motion, calculator
  { id: "pt4-f1a", type: "frq", skill: "u4", topic: "4.2", calc: true, set: "pt4-s4", part: "(a)",
    prompt: String.raw`(i) Find the position of the car at time $t = 2$. (ii) Find the average rate of change of $y$ with respect to $x$ for $1 \le t \le 5$. Show the computations that lead to your answer.`,
    rows: [
      { name: "(i) Position", earns: String.raw`$(5.854, 3.6)$.` },
      { name: "(ii) Average rate of change", earns: String.raw`$\dfrac{y(5) - y(1)}{x(5) - x(1)} = \dfrac{6 - 4.4}{2.732 - 9.484} \approx -0.237$, with the computation shown.` },
    ],
    solution: String.raw`(i) $x(2) = 6 + 5\cos(1.6) \approx 5.854$ and $y(2) = 1.6 - 4 + 6 = 3.6$, so the car is at $(5.854, 3.6)$. (ii) $x(1) = 6 + 5\cos(0.8) \approx 9.484$, $y(1) = 4.4$, $x(5) = 6 + 5\cos 4 \approx 2.732$, and $y(5) = 6$. The average rate of change of $y$ with respect to $x$ is $\dfrac{6 - 4.4}{2.732 - 9.484} = \dfrac{1.6}{-6.752} \approx -0.237$.` },
  { id: "pt4-f1b", type: "frq", skill: "u4", topic: "4.3", calc: true, set: "pt4-s4", part: "(b)",
    prompt: String.raw`(i) Find the interval of $t$ on which the car is moving to the left and upward. (ii) Give a reason for your answer to (i).`,
    rows: [
      { name: "(i) Interval", earns: String.raw`$2.5 < t < 3.927$.` },
      { name: "(ii) Reason", earns: String.raw`On this interval $x(t)$ is decreasing, because $0.8t$ is between $0$ and $\pi$, and $y(t)$ is increasing, because $t$ is past the vertex $t = 2.5$ of the parabola $y(t)$.` },
    ],
    solution: String.raw`(i) and (ii) The car moves left when $x(t)$ decreases. $\cos(0.8t)$ decreases while $0 \le 0.8t \le \pi$, which is $0 \le t \le \dfrac{\pi}{0.8} \approx 3.927$, and increases after that. The car moves up when $y(t)$ increases. $y(t) = 0.4t^2 - 2t + 6$ is a parabola that opens up with vertex at $t = \dfrac{2}{0.8} = 2.5$, so $y(t)$ decreases for $t < 2.5$ and increases for $t > 2.5$. Both hold for $2.5 < t < 3.927$.` },
  { id: "pt4-f1c", type: "frq", skill: "u4", topic: "4.2", calc: true, set: "pt4-s4", part: "(c)",
    prompt: String.raw`(i) A traffic cone is at the point $(4, 2)$. Find the time at which the car is closest to the cone, and find the distance between them at that time. (ii) Is the car ever at the point $(2, 6)$? Give a reason for your answer.`,
    rows: [
      { name: "(i) Closest approach", earns: String.raw`$t \approx 2.480$ minutes, at a distance of about $1.500$ meters, from the minimum of $\sqrt{\left(x(t) - 4\right)^2 + \left(y(t) - 2\right)^2}$ on $0 \le t \le 6$.` },
      { name: "(ii) Answer with reason", earns: String.raw`No, because $y(t) = 6$ only at $t = 0$ and $t = 5$, and $x(0) = 11$ and $x(5) \approx 2.732$, so $x(t) \ne 2$ at either time.` },
    ],
    solution: String.raw`(i) The distance from the car to the cone is $D(t) = \sqrt{\left(6 + 5\cos(0.8t) - 4\right)^2 + \left(0.4t^2 - 2t + 6 - 2\right)^2}$. Graphing $D$ on $0 \le t \le 6$ and finding its minimum gives $t \approx 2.480$ minutes, where $D \approx 1.500$ meters. (ii) $y(t) = 6$ gives $0.4t^2 - 2t = 0$, so $t = 0$ or $t = 5$. Both coordinates must match at the same time, but $x(0) = 11$ and $x(5) = 6 + 5\cos 4 \approx 2.732$. Neither is $2$, so the car is never at $(2, 6)$.` },
  // Free response 2: vectors and matrices, no calculator
  { id: "pt4-f2a", type: "frq", skill: "u4", topic: "4.8", calc: false, set: "pt4-s5", part: "(a)",
    prompt: String.raw`(i) Find $2\vec{u} - \vec{w}$ and its magnitude. (ii) Find $\vec{u} \cdot \vec{w}$, and use it to decide whether $\vec{u}$ and $\vec{w}$ are perpendicular.`,
    rows: [
      { name: "(i) Vector and magnitude", earns: String.raw`$2\vec{u} - \vec{w} = \langle 7, -1 \rangle$, with magnitude $\sqrt{50} = 5\sqrt{2}$.` },
      { name: "(ii) Dot product and conclusion", earns: String.raw`$\vec{u} \cdot \vec{w} = 3(-1) + 1(3) = 0$, so $\vec{u}$ and $\vec{w}$ are perpendicular.` },
    ],
    solution: String.raw`(i) $2\vec{u} - \vec{w} = \langle 6 - (-1), 2 - 3 \rangle = \langle 7, -1 \rangle$, and its magnitude is $\sqrt{49 + 1} = \sqrt{50} = 5\sqrt{2}$. (ii) $\vec{u} \cdot \vec{w} = 3(-1) + 1(3) = 0$. A dot product of $0$ means the vectors are perpendicular.` },
  { id: "pt4-f2b", type: "frq", skill: "u4", topic: "4.13", calc: false, set: "pt4-s5", part: "(b)",
    prompt: String.raw`(i) Find $L(\vec{u})$ and $L(\vec{w})$. (ii) The square with sides $\vec{u}$ and $\vec{w}$ has one vertex at the origin. Find the area of the image of this square under $L$.`,
    rows: [
      { name: "(i) Images", earns: String.raw`$L(\vec{u}) = \langle 8, 7 \rangle$ and $L(\vec{w}) = \langle -6, 1 \rangle$.` },
      { name: "(ii) Area", earns: String.raw`$50$, because the square has area $\lVert \vec{u} \rVert^2 = 10$ and $L$ multiplies areas by $|\det A| = 5$.` },
    ],
    solution: String.raw`(i) $A\begin{bmatrix} 3 \\ 1 \end{bmatrix} = \begin{bmatrix} 9 - 1 \\ 6 + 1 \end{bmatrix} = \begin{bmatrix} 8 \\ 7 \end{bmatrix}$ and $A\begin{bmatrix} -1 \\ 3 \end{bmatrix} = \begin{bmatrix} -3 - 3 \\ -2 + 3 \end{bmatrix} = \begin{bmatrix} -6 \\ 1 \end{bmatrix}$. (ii) The square's side length is $\lVert \vec{u} \rVert = \sqrt{10}$, so its area is $10$. $\det A = 3(1) - (-1)(2) = 5$, and a linear transformation multiplies areas by $|\det A|$, so the image has area $10 \times 5 = 50$. Check: $\left|\det\begin{bmatrix} 8 & -6 \\ 7 & 1 \end{bmatrix}\right| = |8 + 42| = 50$.` },
  { id: "pt4-f2c", type: "frq", skill: "u4", topic: "4.11", calc: false, set: "pt4-s5", part: "(c)",
    prompt: String.raw`(i) Find $A^{-1}$. (ii) Use $A^{-1}$ to find the vector $\vec{v}$ for which $L(\vec{v}) = \langle 7, 3 \rangle$.`,
    rows: [
      { name: "(i) Inverse", earns: String.raw`$A^{-1} = \dfrac{1}{5}\begin{bmatrix} 1 & 1 \\ -2 & 3 \end{bmatrix}$, or an equivalent matrix.` },
      { name: "(ii) Input vector", earns: String.raw`$\vec{v} = A^{-1}\begin{bmatrix} 7 \\ 3 \end{bmatrix} = \langle 2, -1 \rangle$, with supporting work.` },
    ],
    solution: String.raw`(i) $\det A = 5$. Swap the diagonal entries, change the signs of the other two, and divide by $5$: $A^{-1} = \dfrac{1}{5}\begin{bmatrix} 1 & 1 \\ -2 & 3 \end{bmatrix}$. (ii) $$\vec{v} = \frac{1}{5}\begin{bmatrix} 1(7) + 1(3) \\ -2(7) + 3(3) \end{bmatrix} = \frac{1}{5}\begin{bmatrix} 10 \\ -5 \end{bmatrix} = \begin{bmatrix} 2 \\ -1 \end{bmatrix}$$ Check: $A\begin{bmatrix} 2 \\ -1 \end{bmatrix} = \begin{bmatrix} 6 + 1 \\ 4 - 1 \end{bmatrix} = \begin{bmatrix} 7 \\ 3 \end{bmatrix}$.` },
];

export default {
  forms: [{
    id: "pt4",
    name: "Unit 4 Test",
    group: "Unit 4: Functions Involving Parameters, Vectors, and Matrices",
    items,
  }],
};

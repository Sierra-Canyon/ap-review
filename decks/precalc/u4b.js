// AP Precalculus review bank, Unit 4 (second half): Vectors and Matrices, topics 4.8 to 4.14.
// Unit 4 is taught but not on the AP exam. Keys and every number are computed in the writer's scratch scripts.
import { graph } from "../../plot.js";

// An arrow from (x1, y1) to (x2, y2) as three segments (shaft and two head strokes). Every window that uses it has the
// same scale on both axes, so the head looks the same in every direction.
function arrow(x1, y1, x2, y2, h = 0.4) {
  const a = Math.atan2(y2 - y1, x2 - x1), s = 0.45;
  return [
    [x1, y1, x2, y2],
    [x2, y2, x2 - h * Math.cos(a - s), y2 - h * Math.sin(a - s)],
    [x2, y2, x2 - h * Math.cos(a + s), y2 - h * Math.sin(a + s)],
  ];
}
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
  "p4br-s1": {
    name: "Two vectors on a grid",
    label: "Diagram",
    intro: String.raw`Vectors $\vec{u}$ and $\vec{v}$ are shown on the grid below. Vector $\vec{u}$ has its tail at $(1, -3)$ and its head at $(-2, 1)$. Vector $\vec{v}$ has its tail at $(-4, -1)$ and its head at $(-2, 3)$.`,
    sources: [{ title: "", blocks: [{ svg: graph({
      x: [-5, 5], y: [-4, 4], step: 1, xname: "x", yname: "y", width: 360, height: 300,
      segments: [...arrow(1, -3, -2, 1), ...arrow(-4, -1, -2, 3)],
      dots: [[1, -3, "closed"], [-4, -1, "closed"]],
      labels: [[0.6, -1.4, "u"], [-3.6, 1.3, "v"]],
      alt: "A coordinate grid from -5 to 5 horizontally and -4 to 4 vertically with two arrows. Arrow u starts at (1, -3) and points up and to the left to its head at (-2, 1). Arrow v starts at (-4, -1) and points up and to the right to its head at (-2, 3).",
    }) }] }],
  },
  "p4br-s2": {
    name: "A particle on a sideways parabola",
    label: "Graph",
    intro: String.raw`A particle moves in the $xy$-plane. Its position vector at time $t$ is $\vec{p}(t) = \langle 4 - t^{2}, 2t \rangle$ for $-3 \le t \le 3$, and its velocity vector is $\vec{v}(t) = \langle -2t, 2 \rangle$. The path of the particle is shown below, with the positions at $t = -2$, $t = 0$, and $t = 2$ marked.`,
    sources: [{ title: "", blocks: [{ svg: graph({
      x: [-6, 5], y: [-7, 7], step: 1, xname: "x", yname: "y", width: 280, height: 416, labelEvery: 2,
      segments: path((t) => 4 - t * t, (t) => 2 * t, -3, 3),
      dots: [[0, -4, "closed"], [4, 0, "closed"], [0, 4, "closed"]],
      labels: [[0.3, -4.6, "t = −2"], [1.9, 0.5, "t = 0"], [0.3, 4.6, "t = 2"]],
      alt: "The path of the particle is a parabola that opens to the left. It starts at (-5, -6) when t = -3, passes through (0, -4) at t = -2, reaches its rightmost point (4, 0) at t = 0, passes through (0, 4) at t = 2, and ends at (-5, 6) when t = 3.",
    }) }] }],
  },
  "p4br-s3": {
    name: "A parallelogram on a grid",
    label: "Diagram",
    intro: String.raw`Parallelogram $ABCD$ is shown below, with vertices $A(-3, -1)$, $B(2, 0)$, $C(4, 4)$, and $D(-1, 3)$.`,
    sources: [{ title: "", blocks: [{ svg: graph({
      x: [-4, 5], y: [-2, 5], step: 1, xname: "x", yname: "y", width: 360, height: 270,
      segments: [[-3, -1, 2, 0], [2, 0, 4, 4], [4, 4, -1, 3], [-1, 3, -3, -1]],
      dots: [[-3, -1, "closed"], [2, 0, "closed"], [4, 4, "closed"], [-1, 3, "closed"]],
      labels: [[-3.6, -1.5, "A"], [2.2, 0.25, "B"], [4.15, 4.3, "C"], [-1.4, 3.4, "D"]],
      alt: "Parallelogram ABCD on a coordinate grid, with vertices A at (-3, -1), B at (2, 0), C at (4, 4), and D at (-1, 3). Side AB rises gently to the right and side AD rises steeply to the right.",
    }) }] }],
  },
  "p4br-s4": {
    name: "A triangle and its image",
    label: "Diagram",
    intro: String.raw`A linear transformation $T$ maps triangle $OPQ$ to triangle $OP'Q'$, as shown below. The vertices are $O(0, 0)$, $P(3, 1)$, $Q(1, 2)$, $P'(2, 7)$, and $Q'(-1, 4)$, so $T(\langle 3, 1 \rangle) = \langle 2, 7 \rangle$ and $T(\langle 1, 2 \rangle) = \langle -1, 4 \rangle$.`,
    sources: [{ title: "", blocks: [{ svg: graph({
      x: [-2, 4], y: [-1, 8], step: 1, xname: "x", yname: "y", width: 240, height: 330,
      segments: [[0, 0, 3, 1], [3, 1, 1, 2], [1, 2, 0, 0], [0, 0, 2, 7], [2, 7, -1, 4], [-1, 4, 0, 0]],
      dots: [[0, 0, "closed"], [3, 1, "closed"], [1, 2, "closed"], [2, 7, "closed"], [-1, 4, "closed"]],
      labels: [[3.1, 0.6, "P"], [1.15, 2.3, "Q"], [2.15, 7.2, "P′"], [-1.6, 4.3, "Q′"], [-0.5, -0.6, "O"]],
      alt: "Two triangles share the vertex O at the origin. Triangle OPQ is small and low, with P at (3, 1) and Q at (1, 2). Its image, triangle OP'Q', is taller, with P' at (2, 7) and Q' at (-1, 4).",
    }) }] }],
  },
  "p4br-s5": {
    name: "Biking or taking the bus",
    label: "Table",
    intro: String.raw`Each workday, every commuter in a town either bikes or takes the bus to work. The table below gives the probability of each choice tomorrow, based on the choice today. In a transition matrix for this situation, the columns give today's choice (bike, then bus) and the rows give tomorrow's choice (bike, then bus), so each column sums to $1$.`,
    sources: [{ title: "", blocks: [{ table: { head: ["Choice today", "Bikes tomorrow", "Takes the bus tomorrow"], rows: [["Bikes", "$0.7$", "$0.3$"], ["Takes the bus", "$0.4$", "$0.6$"]] } }] }],
  },
  "p4br-s6": {
    name: "A robot and a charging station",
    label: "Graph",
    intro: String.raw`A robot moves across a warehouse floor. Its position, in meters, relative to a corner of the floor at time $t$ minutes is $\vec{p}(t) = \langle t^{2} - 3, 2t + 1 \rangle$ for $0 \le t \le 3$. A charging station is at the point $S(1, 2)$. The path of the robot and the point $S$ are shown below.`,
    sources: [{ title: "", blocks: [{ svg: graph({
      x: [-4, 7], y: [-1, 8], step: 1, xname: "x", yname: "y", width: 390, height: 330,
      segments: path((t) => t * t - 3, (t) => 2 * t + 1, 0, 3),
      dots: [[-3, 1, "closed"], [6, 7, "closed"], [1, 2, "closed"]],
      labels: [[-3.8, 1.6, "t = 0"], [5.1, 7.5, "t = 3"], [1.2, 1.4, "S"]],
      alt: "The robot's path is a curve from (-3, 1) at t = 0 to (6, 7) at t = 3. It rises steeply at first and then bends to the right, passing through (-2, 3) at t = 1 and (1, 5) at t = 2. The charging station S is the point (1, 2), below the path.",
    }) }] }],
  },
  "p4br-s7": {
    name: "A boat leaving a dock",
    label: "Free response",
    intro: String.raw`A boat leaves a dock at time $t = 0$. For $0 \le t \le 20$ seconds, the position of the boat, in meters, relative to the dock is $\vec{p}(t) = \langle 3t, 40 - 0.1t^{2} \rangle$, and the velocity of the boat, in meters per second, is $\vec{v}(t) = \langle 3, -0.2t \rangle$. A buoy is anchored at the point $(45, 20)$.`,
    sources: [{ title: "", blocks: [{ p: String.raw`A graphing calculator is allowed. Give decimal answers correct to three decimal places.` }] }],
  },
  "p4br-s8": {
    name: "Bikes at two stations",
    label: "Free response",
    intro: String.raw`A bike-share program has $200$ bikes at two stations, North and South. Every bike ends each day at one of the two stations. Of the bikes at North at the start of a day, $80\%$ are at North at the start of the next day. Of the bikes at South at the start of a day, $35\%$ are at North at the start of the next day. On Monday morning, $120$ bikes are at North and $80$ are at South. Let $T$ be the transition matrix whose columns give the station at the start of a day (North, then South) and whose rows give the station at the start of the next day (North, then South).`,
    sources: [{ title: "", blocks: [{ p: String.raw`A graphing calculator is allowed. Give decimal answers correct to three decimal places.` }] }],
  },
  "p4br-s9": {
    name: "A matrix and the maps it defines",
    label: "Free response",
    intro: String.raw`Let $A = \begin{bmatrix} 3 & 1 \\ 4 & 2 \end{bmatrix}$, and let $L$ be the linear transformation defined by $L(\vec{v}) = A\vec{v}$, where vectors are written as columns.`,
    sources: [{ title: "", blocks: [{ p: String.raw`No calculator is allowed. Give exact answers.` }] }],
  },
};

export default [
  // 4.8 Vectors
  { id: "p4br-m01", type: "mcq", skill: "u4", topic: "4.8", calc: false, set: "p4br-s1", difficulty: "easy",
    question: String.raw`What is the magnitude of $\vec{u}$?`,
    choices: ["$5$", "$25$", String.raw`$\sqrt{5}$`, String.raw`$\sqrt{10}$`],
    why: [
      String.raw`$\vec{u} = \langle -2 - 1, 1 - (-3) \rangle = \langle -3, 4 \rangle$, so $\lVert \vec{u} \rVert = \sqrt{(-3)^{2} + 4^{2}} = \sqrt{25} = 5$.`,
      String.raw`$25$ is $(-3)^{2} + 4^{2}$, the square of the magnitude. The square root is missing.`,
      String.raw`$\sqrt{5}$ is the distance from the origin to the head $(-2, 1)$. The components come from the head minus the tail.`,
      String.raw`$\sqrt{10}$ is the distance from the origin to the tail $(1, -3)$. A vector's magnitude is the distance from its tail to its head.`,
    ], answer: 0 },
  { id: "p4br-m02", type: "mcq", skill: "u4", topic: "4.8", calc: false, set: "p4br-s1", difficulty: "easy",
    question: String.raw`Which vector is $2\vec{u} - \vec{v}$?`,
    choices: [String.raw`$\langle -8, 4 \rangle$`, String.raw`$\langle -4, 12 \rangle$`, String.raw`$\langle -5, 0 \rangle$`, String.raw`$\langle -8, 0 \rangle$`],
    why: [
      String.raw`$\vec{u} = \langle -3, 4 \rangle$ and $\vec{v} = \langle 2, 4 \rangle$, so $2\vec{u} - \vec{v} = \langle -6 - 2, 8 - 4 \rangle = \langle -8, 4 \rangle$.`,
      String.raw`$\langle -4, 12 \rangle$ is $2\vec{u} + \vec{v}$. The vector $\vec{v}$ is subtracted, not added.`,
      String.raw`$\langle -5, 0 \rangle$ is $\vec{u} - \vec{v}$, which leaves out the scalar $2$.`,
      String.raw`$\langle -8, 0 \rangle$ doubles only the $x$-component of $\vec{u}$. A scalar multiplies every component: $2\vec{u} = \langle -6, 8 \rangle$.`,
    ], answer: 0 },
  { id: "p4br-m03", type: "mcq", skill: "u4", topic: "4.8", calc: false, difficulty: "easy",
    question: String.raw`What is the unit vector in the same direction as $\vec{w} = \langle 8, -15 \rangle$?`,
    choices: [String.raw`$\left\langle \frac{8}{17}, -\frac{15}{17} \right\rangle$`, String.raw`$\left\langle -\frac{8}{17}, \frac{15}{17} \right\rangle$`, String.raw`$\left\langle \frac{8}{23}, -\frac{15}{23} \right\rangle$`, String.raw`$\left\langle \frac{17}{8}, -\frac{17}{15} \right\rangle$`],
    why: [
      String.raw`$\lVert \vec{w} \rVert = \sqrt{64 + 225} = 17$, and $\dfrac{1}{17}\vec{w} = \left\langle \dfrac{8}{17}, -\dfrac{15}{17} \right\rangle$ has magnitude $1$ and the direction of $\vec{w}$.`,
      String.raw`This vector has magnitude $1$ but points in the opposite direction, since it is $-\dfrac{1}{17}\vec{w}$.`,
      String.raw`This divides by $8 + 15 = 23$, the sum of the component lengths. The magnitude of $\vec{w}$ is $17$, so this vector is shorter than $1$.`,
      String.raw`This divides $17$ by each component, taking reciprocals. A unit vector divides each component by the magnitude.`,
    ], answer: 0 },
  { id: "p4br-m04", type: "mcq", skill: "u4", topic: "4.8", calc: false, difficulty: "easy",
    question: String.raw`Vectors $\vec{a}$ and $\vec{b}$ have magnitudes $\lVert \vec{a} \rVert = 6$ and $\lVert \vec{b} \rVert = 4$, and the angle between them is $\dfrac{2\pi}{3}$. What is $\vec{a} \cdot \vec{b}$?`,
    choices: ["$-12$", "$12$", String.raw`$12\sqrt{3}$`, "$24$"],
    why: [
      String.raw`$\vec{a} \cdot \vec{b} = \lVert \vec{a} \rVert \lVert \vec{b} \rVert \cos\theta = 6(4)\cos\dfrac{2\pi}{3} = 24\left(-\dfrac{1}{2}\right) = -12$.`,
      String.raw`$12$ uses $\cos\dfrac{2\pi}{3} = \dfrac{1}{2}$. The angle is in Quadrant II, where cosine is negative.`,
      String.raw`$12\sqrt{3}$ uses $\sin\dfrac{2\pi}{3}$ in place of $\cos\dfrac{2\pi}{3}$.`,
      String.raw`$24$ is the product of the magnitudes, without the factor $\cos\theta$.`,
    ], answer: 0 },
  { id: "p4br-m05", type: "mcq", skill: "u4", topic: "4.8", calc: true, difficulty: "moderate",
    question: String.raw`A drone flies with a velocity relative to the air of $12$ meters per second on a bearing of $060^\circ$ (measured clockwise from north). A wind blows due south at $4$ meters per second. What is the speed of the drone relative to the ground, in meters per second?`,
    choices: ["$10.583$", "$8.767$", "$14.422$", "$16.000$"],
    why: [
      String.raw`A bearing of $060^\circ$ is a standard-position angle of $90^\circ - 60^\circ = 30^\circ$, so the drone's air velocity is $\langle 12\cos 30^\circ, 12\sin 30^\circ \rangle \approx \langle 10.392, 6 \rangle$. The wind is $\langle 0, -4 \rangle$. The sum is $\langle 10.392, 2 \rangle$, with magnitude $\sqrt{10.392^{2} + 2^{2}} \approx 10.583$.`,
      String.raw`$8.767$ uses the bearing $60^\circ$ as the standard-position angle, giving $\langle 6, 10.392 \rangle$ before adding the wind. Bearings are measured clockwise from north.`,
      String.raw`$14.422$ adds $\langle 0, 4 \rangle$, a wind blowing north. A wind that blows due south points in the negative $y$-direction.`,
      String.raw`$16.000$ adds the magnitudes, $12 + 4$. Magnitudes add only when the vectors point the same way.`,
    ], answer: 0 },
  { id: "p4br-m06", type: "mcq", skill: "u4", topic: "4.8", calc: false, difficulty: "moderate",
    question: String.raw`For what value of $k$ are the vectors $\langle k, 6 \rangle$ and $\langle 2, -3 \rangle$ perpendicular?`,
    choices: ["$9$", "$-4$", "$4$", "$-9$"],
    why: [
      String.raw`Perpendicular vectors have a dot product of $0$: $2k + 6(-3) = 2k - 18 = 0$, so $k = 9$.`,
      String.raw`$k = -4$ makes the vectors parallel, since $\langle -4, 6 \rangle = -2\langle 2, -3 \rangle$. Perpendicular vectors have a dot product of $0$.`,
      String.raw`$k = 4$ comes from setting the ratios $\dfrac{k}{2}$ and $\dfrac{6}{3}$ equal, which drops the negative sign and tests for parallel vectors, not perpendicular ones.`,
      String.raw`$k = -9$ comes from a sign slip in $2k - 18 = 0$. With $k = -9$, the dot product is $-36$.`,
    ], answer: 0 },
  { id: "p4br-m07", type: "mcq", skill: "u4", topic: "4.8", calc: true, difficulty: "difficult",
    question: String.raw`Vector $\vec{p}$ has magnitude $7$ and a direction angle of $200^\circ$ in standard position. Vector $\vec{q} = \langle 3, -1 \rangle$. What is $\vec{p} \cdot \vec{q}$?`,
    choices: ["$-17.339$", "$-0.605$", "$-20.801$", "$16.344$"],
    why: [
      String.raw`$\vec{p} = \langle 7\cos 200^\circ, 7\sin 200^\circ \rangle \approx \langle -6.578, -2.394 \rangle$, so $\vec{p} \cdot \vec{q} \approx 3(-6.578) + (-1)(-2.394) \approx -17.339$.`,
      String.raw`$-0.605$ swaps sine and cosine, using $\langle 7\sin 200^\circ, 7\cos 200^\circ \rangle$. The $x$-component of a vector in standard position uses cosine.`,
      String.raw`$-20.801$ is $\lVert \vec{p} \rVert \lVert \vec{q} \rVert \cos 200^\circ$, which treats $200^\circ$ as the angle between the vectors. That angle is the direction of $\vec{p}$ alone; $\vec{q}$ has its own direction.`,
      String.raw`$16.344$ evaluates $\cos 200$ and $\sin 200$ with the calculator in radian mode. The angle is in degrees.`,
    ], answer: 0 },

  // 4.9 Vector-Valued Functions
  { id: "p4br-m08", type: "mcq", skill: "u4", topic: "4.9", calc: false, set: "p4br-s2", difficulty: "easy",
    question: String.raw`What is the position vector of the particle at $t = 1$?`,
    choices: [String.raw`$\langle 3, 2 \rangle$`, String.raw`$\langle -1, 2 \rangle$`, String.raw`$\langle -2, 2 \rangle$`, String.raw`$\langle 3, -2 \rangle$`],
    why: [
      String.raw`$\vec{p}(1) = \langle 4 - 1^{2}, 2(1) \rangle = \langle 3, 2 \rangle$.`,
      String.raw`$\langle -1, 2 \rangle$ is $\vec{p}(1) - \vec{p}(0)$, the displacement from $t = 0$ to $t = 1$, not the position vector.`,
      String.raw`$\langle -2, 2 \rangle$ is $\vec{v}(1)$, the velocity vector at $t = 1$, not the position vector.`,
      String.raw`$\langle 3, -2 \rangle$ is $\vec{p}(-1)$, the position at $t = -1$.`,
    ], answer: 0 },
  { id: "p4br-m09", type: "mcq", skill: "u4", topic: "4.9", calc: false, set: "p4br-s2", difficulty: "moderate",
    question: String.raw`On which interval is the particle moving to the left and upward?`,
    choices: ["$0 < t < 3$", "$-3 < t < 0$", "$-3 < t < -2$ or $2 < t < 3$", "$-2 < t < 2$"],
    why: [
      String.raw`The particle moves left when the $x$-component of the velocity, $-2t$, is negative, which is when $t > 0$. It moves up when the $y$-component, $2$, is positive, which is always. Both hold for $0 < t < 3$.`,
      String.raw`For $-3 < t < 0$, $-2t > 0$, so the particle moves to the right and upward.`,
      String.raw`On these intervals $4 - t^{2} < 0$, so the particle is to the left of the $y$-axis. That describes where the particle is, not the direction it moves. On $-3 < t < -2$ it moves to the right.`,
      String.raw`For $-2 < t < 2$ the particle is to the right of the $y$-axis, which is a statement about position. On $-2 < t < 0$ it moves to the right.`,
    ], answer: 0 },
  { id: "p4br-m10", type: "mcq", skill: "u4", topic: "4.9", calc: false, difficulty: "easy",
    question: String.raw`A particle's position vector is $\vec{p}(t) = \langle 2t + 1, t^{2} - 3 \rangle$. What is $\lVert \vec{p}(2) \rVert$?`,
    choices: [String.raw`$\sqrt{26}$`, "$6$", "$26$", String.raw`$4\sqrt{2}$`],
    why: [
      String.raw`$\vec{p}(2) = \langle 5, 1 \rangle$, so $\lVert \vec{p}(2) \rVert = \sqrt{5^{2} + 1^{2}} = \sqrt{26}$.`,
      String.raw`$6$ adds the components, $5 + 1$, instead of using the square root of the sum of their squares.`,
      String.raw`$26$ is $5^{2} + 1^{2}$, the square of the magnitude.`,
      String.raw`$4\sqrt{2}$ is the magnitude of $\vec{p}(2) - \vec{p}(0) = \langle 4, 4 \rangle$, the displacement from $t = 0$, not the position at $t = 2$.`,
    ], answer: 0 },
  { id: "p4br-m11", type: "mcq", skill: "u4", topic: "4.9", calc: false, difficulty: "difficult",
    question: String.raw`A particle's position vector is $\vec{p}(t) = \langle t^{2} - 1, 2t \rangle$. At time $t = a$, the position vector has magnitude $10$ and its head lies in Quadrant IV. What is $\vec{p}(a)$?`,
    choices: [String.raw`$\langle 8, -6 \rangle$`, String.raw`$\langle 8, 6 \rangle$`, String.raw`$\langle 6, -8 \rangle$`, String.raw`$\langle 1, -2\sqrt{2} \rangle$`],
    why: [
      String.raw`$\lVert \vec{p}(t) \rVert^{2} = (t^{2} - 1)^{2} + 4t^{2} = t^{4} + 2t^{2} + 1 = (t^{2} + 1)^{2}$, so $\lVert \vec{p}(t) \rVert = t^{2} + 1$. Then $t^{2} + 1 = 10$ gives $t = \pm 3$. Quadrant IV needs $2t < 0$, so $a = -3$ and $\vec{p}(-3) = \langle 8, -6 \rangle$.`,
      String.raw`$\langle 8, 6 \rangle$ is $\vec{p}(3)$. It has magnitude $10$, but its head is in Quadrant I.`,
      String.raw`$\langle 6, -8 \rangle$ has magnitude $10$ and lies in Quadrant IV, but it is not on the path: $t^{2} - 1 = 6$ gives $t = \pm\sqrt{7}$, and then $2t = \pm 2\sqrt{7}$, not $-8$.`,
      String.raw`$\langle 1, -2\sqrt{2} \rangle$ comes from setting $(t^{2} + 1)^{2} = 10$, the squared magnitude, equal to $10$. Its magnitude is $3$.`,
    ], answer: 0 },
  { id: "p4br-m12", type: "mcq", skill: "u4", topic: "4.9", calc: false, difficulty: "moderate",
    question: String.raw`A particle moves in the $xy$-plane for $0 < t < 5$ with velocity vector $\vec{v}(t) = \langle (t - 1)(t - 4), 3 - t \rangle$. On which interval is the particle moving to the right and downward?`,
    choices: ["$4 < t < 5$", "$3 < t < 5$", "$0 < t < 1$", "$3 < t < 4$"],
    why: [
      String.raw`Moving right needs $(t - 1)(t - 4) > 0$, which holds for $t < 1$ or $t > 4$. Moving down needs $3 - t < 0$, which holds for $t > 3$. Both hold for $4 < t < 5$.`,
      String.raw`On $3 < t < 5$ the particle moves down, but on $3 < t < 4$ the $x$-component is negative, so it moves to the left there.`,
      String.raw`On $0 < t < 1$ the particle moves to the right, but $3 - t > 0$, so it moves upward.`,
      String.raw`On $3 < t < 4$ the particle moves down, but $(t - 1)(t - 4) < 0$, so it moves to the left.`,
    ], answer: 0 },
  { id: "p4br-m13", type: "mcq", skill: "u4", topic: "4.9", calc: true, set: "p4br-s6", difficulty: "difficult",
    question: String.raw`At what time $t$ is the robot exactly $5$ meters from the charging station?`,
    choices: ["$2.594$", "$1.963$", "$0.936$", "$3.000$"],
    why: [
      String.raw`The vector from $S$ to the robot is $\vec{p}(t) - \langle 1, 2 \rangle = \langle t^{2} - 4, 2t - 1 \rangle$. Solving $(t^{2} - 4)^{2} + (2t - 1)^{2} = 25$ with a calculator gives $t \approx 2.594$ in $0 \le t \le 3$. The other solution, $t = -2$, is outside the interval.`,
      String.raw`$1.963$ solves $\lVert \vec{p}(t) \rVert = 5$, the time the robot is $5$ meters from the corner of the floor, not from the station.`,
      String.raw`$0.936$ solves $\lVert \vec{p}(t) + \langle 1, 2 \rangle \rVert = 5$, which adds the station's position instead of subtracting it.`,
      String.raw`$3.000$ uses only the $x$-distance, $t^{2} - 4 = 5$. Distance uses both components.`,
    ], answer: 0 },
  { id: "p4br-m14", type: "mcq", skill: "u4", topic: "4.9", calc: false, difficulty: "easy",
    question: String.raw`A particle's position vector is $\vec{p}(t) = \langle t^{3} - 2t, 5 - t^{2} \rangle$. What is the displacement vector of the particle from $t = 0$ to $t = 2$?`,
    choices: [String.raw`$\langle 4, -4 \rangle$`, String.raw`$\langle 4, 1 \rangle$`, String.raw`$\langle -4, 4 \rangle$`, String.raw`$\langle 4, 6 \rangle$`],
    why: [
      String.raw`$\vec{p}(0) = \langle 0, 5 \rangle$ and $\vec{p}(2) = \langle 4, 1 \rangle$, so the displacement is $\vec{p}(2) - \vec{p}(0) = \langle 4, -4 \rangle$.`,
      String.raw`$\langle 4, 1 \rangle$ is the position at $t = 2$. The displacement subtracts the starting position.`,
      String.raw`$\langle -4, 4 \rangle$ is $\vec{p}(0) - \vec{p}(2)$, the start minus the end, which points the opposite way.`,
      String.raw`$\langle 4, 6 \rangle$ is $\vec{p}(2) + \vec{p}(0)$. Displacement is a difference of positions, not a sum.`,
    ], answer: 0 },

  // 4.10 Matrices
  { id: "p4br-m15", type: "mcq", skill: "u4", topic: "4.10", calc: false, difficulty: "easy",
    question: String.raw`Matrix $A$ has dimensions $3 \times 2$ and matrix $B$ has dimensions $2 \times 4$. What are the dimensions of $AB$?`,
    choices: [String.raw`$3 \times 4$`, String.raw`$2 \times 2$`, String.raw`$4 \times 3$`, String.raw`$3 \times 2$`],
    why: [
      String.raw`The inner dimensions, $2$ and $2$, match, so $AB$ is defined. It has the number of rows of $A$ and the number of columns of $B$: $3 \times 4$.`,
      String.raw`$2 \times 2$ uses the inner dimensions, which must match but do not appear in the product.`,
      String.raw`$4 \times 3$ lists columns before rows. A matrix's dimensions are rows by columns, and $AB$ has $3$ rows.`,
      String.raw`$3 \times 2$ is the size of $A$. Multiplying by $B$ changes the number of columns to $4$.`,
    ], answer: 0 },
  { id: "p4br-m16", type: "mcq", skill: "u4", topic: "4.10", calc: false, difficulty: "easy",
    question: String.raw`$$M = \begin{bmatrix} 4 & -1 & 7 \\ 0 & 5 & -3 \\ 2 & 8 & -6 \end{bmatrix}$$ What is the entry of $M$ in row $3$, column $2$?`,
    choices: ["$8$", "$-3$", "$-6$", "$-1$"],
    why: [
      String.raw`Row $3$ is $\begin{bmatrix} 2 & 8 & -6 \end{bmatrix}$, and its second entry is $8$.`,
      String.raw`$-3$ is in row $2$, column $3$. Rows are counted down and columns across, and the row is named first.`,
      String.raw`$-6$ is in row $3$, column $3$, the last entry of the correct row.`,
      String.raw`$-1$ is in row $1$, column $2$, the correct column but the first row.`,
    ], answer: 0 },
  { id: "p4br-m17", type: "mcq", skill: "u4", topic: "4.10", calc: false, difficulty: "easy",
    question: String.raw`What is the product $\begin{bmatrix} 2 & -1 & 4 \end{bmatrix} \begin{bmatrix} 3 \\ 5 \\ 2 \end{bmatrix}$?`,
    choices: [String.raw`$\begin{bmatrix} 9 \end{bmatrix}$`, String.raw`$\begin{bmatrix} 19 \end{bmatrix}$`, String.raw`$\begin{bmatrix} 6 & -5 & 8 \end{bmatrix}$`, String.raw`$\begin{bmatrix} 6 & -3 & 12 \\ 10 & -5 & 20 \\ 4 & -2 & 8 \end{bmatrix}$`],
    why: [
      String.raw`A $1 \times 3$ matrix times a $3 \times 1$ matrix is $1 \times 1$: $2(3) + (-1)(5) + 4(2) = 6 - 5 + 8 = 9$.`,
      String.raw`$\begin{bmatrix} 19 \end{bmatrix}$ takes $(-1)(5)$ as $+5$, a sign slip.`,
      String.raw`This multiplies matching entries and stops. A matrix product adds those products into one entry.`,
      String.raw`This is the $3 \times 3$ product in the other order, the column times the row. Order matters in matrix multiplication.`,
    ], answer: 0 },
  { id: "p4br-m18", type: "mcq", skill: "u4", topic: "4.10", calc: false, difficulty: "moderate",
    question: String.raw`Let $A = \begin{bmatrix} 2 & -1 \\ 3 & 4 \end{bmatrix}$ and $B = \begin{bmatrix} 1 & 5 \\ -2 & 0 \end{bmatrix}$. Which matrix is $BA$?`,
    choices: [String.raw`$\begin{bmatrix} 17 & 19 \\ -4 & 2 \end{bmatrix}$`, String.raw`$\begin{bmatrix} 4 & 10 \\ -5 & 15 \end{bmatrix}$`, String.raw`$\begin{bmatrix} 2 & -5 \\ -6 & 0 \end{bmatrix}$`, String.raw`$\begin{bmatrix} 17 & -4 \\ 19 & 2 \end{bmatrix}$`],
    why: [
      String.raw`Each entry of $BA$ is a row of $B$ times a column of $A$. Row $1$: $1(2) + 5(3) = 17$ and $1(-1) + 5(4) = 19$. Row $2$: $-2(2) + 0(3) = -4$ and $-2(-1) + 0(4) = 2$.`,
      String.raw`This is $AB$, the product in the other order. Matrix multiplication is not commutative, and here $AB \ne BA$.`,
      String.raw`This multiplies matching entries. A matrix product multiplies rows by columns.`,
      String.raw`This places each row of $BA$ in a column, so it is the transpose of $BA$.`,
    ], answer: 0 },
  { id: "p4br-m19", type: "mcq", skill: "u4", topic: "4.10", calc: false, difficulty: "moderate",
    question: String.raw`Matrix $A$ is $2 \times 3$, matrix $B$ is $3 \times 3$, and matrix $C$ is $3 \times 2$. Which of the following products are defined?
I. $AB$
II. $BA$
III. $CA$`,
    choices: ["I and III only", "I only", "II and III only", "I, II, and III"],
    why: [
      String.raw`A product is defined when the number of columns of the left matrix equals the number of rows of the right one. $AB$: $3 = 3$, defined. $BA$: $3 \ne 2$, not defined. $CA$: $2 = 2$, defined (a $3 \times 3$ result).`,
      String.raw`$CA$ is also defined: $C$ has $2$ columns and $A$ has $2$ rows.`,
      String.raw`$BA$ is not defined, since $B$ has $3$ columns and $A$ has only $2$ rows. $AB$ is defined.`,
      String.raw`$BA$ is not defined. That $AB$ is defined does not make $BA$ defined.`,
    ], answer: 0 },
  { id: "p4br-m20", type: "mcq", skill: "u4", topic: "4.10", calc: false, difficulty: "difficult",
    question: String.raw`$$\begin{bmatrix} a & 3 \\ 2 & b \end{bmatrix} \begin{bmatrix} 2 & -1 \\ 1 & 4 \end{bmatrix} = \begin{bmatrix} 11 & 8 \\ 1 & -14 \end{bmatrix}$$ What is the value of $a - b$?`,
    choices: ["$7$", "$-1$", "$-7$", "$-12$"],
    why: [
      String.raw`Row $1$ times column $1$: $2a + 3 = 11$, so $a = 4$. Row $2$ times column $1$: $4 + b = 1$, so $b = -3$. The other two entries check: $-4 + 12 = 8$ and $-2 + 4(-3) = -14$. Then $a - b = 4 - (-3) = 7$.`,
      String.raw`$-1$ comes from solving $4 + b = 1$ as $b = 5$, a sign slip. Then $a - b = 4 - 5 = -1$.`,
      String.raw`$-7$ is $b - a$, the difference in the other order.`,
      String.raw`$-12$ is the product $ab$.`,
    ], answer: 0 },
  { id: "p4br-m21", type: "mcq", skill: "u4", topic: "4.10", calc: true, difficulty: "easy",
    question: String.raw`A bakery sells muffins for $\$2.75$, scones for $\$3.40$, and cookies for $\$1.85$. The price matrix is $P = \begin{bmatrix} 2.75 & 3.40 & 1.85 \end{bmatrix}$, and the matrix $Q = \begin{bmatrix} 48 & 36 \\ 25 & 40 \\ 60 & 72 \end{bmatrix}$ gives the number of muffins, scones, and cookies (rows) sold on Saturday and on Sunday (columns). The product $PQ$ gives the revenue for each day. What was the revenue on Sunday?`,
    choices: [String.raw`$\$368.20$`, String.raw`$\$328.00$`, String.raw`$\$696.20$`, String.raw`$\$400.60$`],
    why: [
      String.raw`The Sunday entry of $PQ$ is $P$ times column $2$ of $Q$: $2.75(36) + 3.40(40) + 1.85(72) = 99 + 136 + 133.20 = 368.20$.`,
      String.raw`$\$328.00$ is $P$ times column $1$, the Saturday revenue.`,
      String.raw`$\$696.20$ adds the two entries of $PQ$, the revenue for both days together.`,
      String.raw`$\$400.60$ pairs the prices with the Sunday column read from the bottom up, $2.75(72) + 3.40(40) + 1.85(36)$. Each price multiplies the count for the same item.`,
    ], answer: 0 },

  // 4.11 The Inverse and Determinant of a Matrix
  { id: "p4br-m22", type: "mcq", skill: "u4", topic: "4.11", calc: false, difficulty: "easy",
    question: String.raw`What is the determinant of $\begin{bmatrix} -3 & 5 \\ 2 & -4 \end{bmatrix}$?`,
    choices: ["$2$", "$22$", "$-2$", "$-7$"],
    why: [
      String.raw`$ad - bc = (-3)(-4) - (5)(2) = 12 - 10 = 2$.`,
      String.raw`$22$ is $ad + bc$. The determinant subtracts $bc$.`,
      String.raw`$-2$ is $bc - ad$, the subtraction in the wrong order.`,
      String.raw`$-7$ is $a + d$, the sum of the main diagonal, not the determinant.`,
    ], answer: 0 },
  { id: "p4br-m23", type: "mcq", skill: "u4", topic: "4.11", calc: false, difficulty: "easy",
    question: String.raw`What is the inverse of $\begin{bmatrix} 5 & 3 \\ 3 & 2 \end{bmatrix}$?`,
    choices: [String.raw`$\begin{bmatrix} 2 & -3 \\ -3 & 5 \end{bmatrix}$`, String.raw`$\begin{bmatrix} -2 & 3 \\ 3 & -5 \end{bmatrix}$`, String.raw`$\begin{bmatrix} 2 & 3 \\ 3 & 5 \end{bmatrix}$`, String.raw`$\begin{bmatrix} \frac{1}{5} & \frac{1}{3} \\ \frac{1}{3} & \frac{1}{2} \end{bmatrix}$`],
    why: [
      String.raw`The determinant is $5(2) - 3(3) = 1$. The inverse is $\dfrac{1}{1}\begin{bmatrix} 2 & -3 \\ -3 & 5 \end{bmatrix}$: swap $a$ and $d$, negate $b$ and $c$, and divide by $1$.`,
      String.raw`This is the negative of the inverse, which comes from using $bc - ad = -1$ as the determinant.`,
      String.raw`This swaps $a$ and $d$ but does not negate $b$ and $c$. Its product with the original matrix is not the identity.`,
      String.raw`This takes the reciprocal of each entry. A matrix inverse is not found entry by entry.`,
    ], answer: 0 },
  { id: "p4br-m24", type: "mcq", skill: "u4", topic: "4.11", calc: false, difficulty: "easy",
    question: String.raw`Which of the following matrices does NOT have an inverse?`,
    choices: [String.raw`$\begin{bmatrix} 6 & -4 \\ -9 & 6 \end{bmatrix}$`, String.raw`$\begin{bmatrix} 6 & 4 \\ -9 & 6 \end{bmatrix}$`, String.raw`$\begin{bmatrix} 0 & 3 \\ -2 & 0 \end{bmatrix}$`, String.raw`$\begin{bmatrix} 2 & 0 \\ 0 & -5 \end{bmatrix}$`],
    why: [
      String.raw`A $2 \times 2$ matrix has an inverse exactly when its determinant is not $0$. Here $6(6) - (-4)(-9) = 36 - 36 = 0$.`,
      String.raw`The determinant is $36 - (4)(-9) = 72$, which is not $0$, so this matrix has an inverse.`,
      String.raw`The determinant is $0 - (3)(-2) = 6$. Zero entries on the diagonal do not make the determinant $0$.`,
      String.raw`The determinant is $-10$. A negative determinant still allows an inverse. Only a determinant of $0$ rules one out.`,
    ], answer: 0 },
  { id: "p4br-m25", type: "mcq", skill: "u4", topic: "4.11", calc: false, difficulty: "easy",
    question: String.raw`The determinant of $\begin{bmatrix} k & 3 \\ -2 & 5 \end{bmatrix}$ is $21$. What is the value of $k$?`,
    choices: ["$3$", String.raw`$\frac{27}{5}$`, String.raw`$-\frac{27}{5}$`, String.raw`$\frac{21}{5}$`],
    why: [
      String.raw`$5k - 3(-2) = 5k + 6 = 21$, so $5k = 15$ and $k = 3$.`,
      String.raw`$k = \dfrac{27}{5}$ solves $5k + 3(-2) = 21$, which adds $bc$ instead of subtracting it.`,
      String.raw`$k = -\dfrac{27}{5}$ solves $3(-2) - 5k = 21$, which is $bc - ad$.`,
      String.raw`$k = \dfrac{21}{5}$ solves $5k = 21$ and leaves out the $bc$ term.`,
    ], answer: 0 },
  { id: "p4br-m26", type: "mcq", skill: "u4", topic: "4.11", calc: false, difficulty: "moderate",
    question: String.raw`What is the inverse of $\begin{bmatrix} 4 & 2 \\ 1 & 3 \end{bmatrix}$?`,
    choices: [String.raw`$\begin{bmatrix} \frac{3}{10} & -\frac{1}{5} \\ -\frac{1}{10} & \frac{2}{5} \end{bmatrix}$`, String.raw`$\begin{bmatrix} 3 & -2 \\ -1 & 4 \end{bmatrix}$`, String.raw`$\begin{bmatrix} \frac{2}{5} & \frac{1}{5} \\ \frac{1}{10} & \frac{3}{10} \end{bmatrix}$`, String.raw`$\begin{bmatrix} \frac{3}{10} & -\frac{1}{10} \\ -\frac{1}{5} & \frac{2}{5} \end{bmatrix}$`],
    why: [
      String.raw`The determinant is $4(3) - 2(1) = 10$, so the inverse is $\dfrac{1}{10}\begin{bmatrix} 3 & -2 \\ -1 & 4 \end{bmatrix} = \begin{bmatrix} \frac{3}{10} & -\frac{1}{5} \\ -\frac{1}{10} & \frac{2}{5} \end{bmatrix}$.`,
      String.raw`This is the matrix with $a$ and $d$ swapped and $b$ and $c$ negated, but without the factor $\dfrac{1}{10}$. Its product with the original matrix is $10I$, not $I$.`,
      String.raw`This is $\dfrac{1}{10}$ times the original matrix, with no swap and no sign changes.`,
      String.raw`This is the transpose of the inverse: the entries $-\dfrac{1}{5}$ and $-\dfrac{1}{10}$ are in each other's places.`,
    ], answer: 0 },
  { id: "p4br-m27", type: "mcq", skill: "u4", topic: "4.11", calc: false, set: "p4br-s3", difficulty: "moderate",
    question: String.raw`What is the area of parallelogram $ABCD$?`,
    choices: ["$18$", "$6$", "$9$", "$22$"],
    why: [
      String.raw`The sides from $A$ are $\overrightarrow{AB} = \langle 5, 1 \rangle$ and $\overrightarrow{AD} = \langle 2, 4 \rangle$. The area is $\left| \det \begin{bmatrix} 5 & 2 \\ 1 & 4 \end{bmatrix} \right| = |20 - 2| = 18$.`,
      String.raw`$6$ uses the coordinates of $B$ and $D$ as the side vectors, $\det \begin{bmatrix} 2 & -1 \\ 0 & 3 \end{bmatrix}$. That works only when a vertex is at the origin; the sides here start at $A$.`,
      String.raw`$9$ is half the determinant, the area of triangle $ABD$, not of the parallelogram.`,
      String.raw`$22$ is $20 + 2$, the determinant computed with a plus sign.`,
    ], answer: 0 },
  { id: "p4br-m28", type: "mcq", skill: "u4", topic: "4.11", calc: true, difficulty: "difficult",
    question: String.raw`A triangle has vertices $P(1.5, -2)$, $Q(6.2, 1.4)$, and $R(-0.8, 4.5)$. What is the area of the triangle?`,
    choices: ["$19.185$", "$38.370$", "$14.510$", "$11.365$"],
    why: [
      String.raw`The sides from $P$ are $\overrightarrow{PQ} = \langle 4.7, 3.4 \rangle$ and $\overrightarrow{PR} = \langle -2.3, 6.5 \rangle$. The parallelogram they span has area $\left| \det \begin{bmatrix} 4.7 & -2.3 \\ 3.4 & 6.5 \end{bmatrix} \right| = |30.55 + 7.82| = 38.37$, and the triangle is half of it: $19.185$.`,
      String.raw`$38.370$ is the area of the parallelogram spanned by the two sides. The triangle is half of it.`,
      String.raw`$14.510$ uses the coordinates of $Q$ and $R$ as the side vectors, which treats $P$ as if it were the origin.`,
      String.raw`$11.365$ uses $ad + bc = 30.55 + (-7.82)$ in place of $ad - bc$, then takes half.`,
    ], answer: 0 },

  // 4.12 Linear Transformations and Matrices
  { id: "p4br-m29", type: "mcq", skill: "u4", topic: "4.12", calc: false, difficulty: "easy",
    question: String.raw`Which of the following is a linear transformation from $\mathbb{R}^{2}$ to $\mathbb{R}^{2}$?`,
    choices: [String.raw`$L(x, y) = \langle 4y, x - 3y \rangle$`, String.raw`$L(x, y) = \langle x + 4, 3y \rangle$`, String.raw`$L(x, y) = \langle x^{2}, x - 3y \rangle$`, String.raw`$L(x, y) = \langle 4xy, -3y \rangle$`],
    why: [
      String.raw`A linear transformation has the form $\langle ax + by, cx + dy \rangle$. Here $a = 0$, $b = 4$, $c = 1$, and $d = -3$. A coefficient of $0$ is allowed.`,
      String.raw`The constant $4$ makes this a translation. It sends $\langle 0, 0 \rangle$ to $\langle 4, 0 \rangle$, but a linear transformation sends the zero vector to the zero vector.`,
      String.raw`The term $x^{2}$ is not of the form $ax + by$. For example, doubling the input $\langle 1, 0 \rangle$ quadruples the first output.`,
      String.raw`The term $4xy$ is a product of the variables, which is not of the form $ax + by$.`,
    ], answer: 0 },
  { id: "p4br-m30", type: "mcq", skill: "u4", topic: "4.12", calc: false, difficulty: "easy",
    question: String.raw`The linear transformation $L(x, y) = \langle 2x - 5y, 3x + y \rangle$ can be written as $L(\vec{v}) = A\vec{v}$, where $\vec{v}$ is written as a column. Which matrix is $A$?`,
    choices: [String.raw`$\begin{bmatrix} 2 & -5 \\ 3 & 1 \end{bmatrix}$`, String.raw`$\begin{bmatrix} 2 & 3 \\ -5 & 1 \end{bmatrix}$`, String.raw`$\begin{bmatrix} 2 & 5 \\ 3 & 1 \end{bmatrix}$`, String.raw`$\begin{bmatrix} -5 & 2 \\ 1 & 3 \end{bmatrix}$`],
    why: [
      String.raw`Row $1$ holds the coefficients of the first output, $2x - 5y$, and row $2$ holds those of $3x + y$: $\begin{bmatrix} 2 & -5 \\ 3 & 1 \end{bmatrix}\begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 2x - 5y \\ 3x + y \end{bmatrix}$.`,
      String.raw`This places the coefficients of each output in a column. Multiplying it by $\begin{bmatrix} x \\ y \end{bmatrix}$ gives $\langle 2x + 3y, -5x + y \rangle$.`,
      String.raw`This drops the negative sign on $-5y$.`,
      String.raw`This switches the columns, so the first column multiplies $x$ by the coefficients of $y$. It gives $\langle -5x + 2y, x + 3y \rangle$.`,
    ], answer: 0 },
  { id: "p4br-m31", type: "mcq", skill: "u4", topic: "4.12", calc: false, difficulty: "easy",
    question: String.raw`Let $A = \begin{bmatrix} 1 & -2 \\ 3 & 0 \end{bmatrix}$. What is $A\begin{bmatrix} 4 \\ -1 \end{bmatrix}$?`,
    choices: [String.raw`$\begin{bmatrix} 6 \\ 12 \end{bmatrix}$`, String.raw`$\begin{bmatrix} 1 \\ -8 \end{bmatrix}$`, String.raw`$\begin{bmatrix} 2 \\ 12 \end{bmatrix}$`, String.raw`$\begin{bmatrix} 4 \\ 0 \end{bmatrix}$`],
    why: [
      String.raw`Row $1$: $1(4) + (-2)(-1) = 6$. Row $2$: $3(4) + 0(-1) = 12$.`,
      String.raw`This is $\begin{bmatrix} 4 & -1 \end{bmatrix} A$, the row vector times the matrix, which multiplies the vector by the columns of $A$.`,
      String.raw`This takes $(-2)(-1)$ as $-2$, a sign slip in the first row.`,
      String.raw`This multiplies only the main diagonal entries, $1(4)$ and $0(-1)$, and leaves out the other terms.`,
    ], answer: 0 },
  { id: "p4br-m32", type: "mcq", skill: "u4", topic: "4.12", calc: false, set: "p4br-s4", difficulty: "difficult",
    question: String.raw`Which matrix $A$ gives $T(\vec{v}) = A\vec{v}$ for every vector $\vec{v}$ written as a column?`,
    choices: [String.raw`$\begin{bmatrix} 1 & -1 \\ 2 & 1 \end{bmatrix}$`, String.raw`$\begin{bmatrix} 1 & 2 \\ -1 & 1 \end{bmatrix}$`, String.raw`$\begin{bmatrix} 2 & -1 \\ 7 & 4 \end{bmatrix}$`, String.raw`$\begin{bmatrix} 2 & 7 \\ -1 & 4 \end{bmatrix}$`],
    why: [
      String.raw`Let $A = \begin{bmatrix} a & b \\ c & d \end{bmatrix}$. The first row gives $3a + b = 2$ and $a + 2b = -1$, so $a = 1$ and $b = -1$. The second row gives $3c + d = 7$ and $c + 2d = 4$, so $c = 2$ and $d = 1$. Check: $A\begin{bmatrix} 3 \\ 1 \end{bmatrix} = \begin{bmatrix} 2 \\ 7 \end{bmatrix}$ and $A\begin{bmatrix} 1 \\ 2 \end{bmatrix} = \begin{bmatrix} -1 \\ 4 \end{bmatrix}$.`,
      String.raw`This is the transpose of the matrix of $T$. It sends $\langle 3, 1 \rangle$ to $\langle 5, -2 \rangle$, not to $\langle 2, 7 \rangle$.`,
      String.raw`This puts the images $P'$ and $Q'$ in the columns. That matrix sends $\langle 1, 0 \rangle$ and $\langle 0, 1 \rangle$ to $P'$ and $Q'$, but $T$ sends $P$ and $Q$ there.`,
      String.raw`This puts the images $P'$ and $Q'$ in the rows. The images of $P$ and $Q$ are outputs, not rows of the matrix.`,
    ], answer: 0 },
  { id: "p4br-m33", type: "mcq", skill: "u4", topic: "4.12", calc: false, set: "p4br-s4", difficulty: "moderate",
    question: String.raw`What is $T(\langle 4, 3 \rangle)$?`,
    choices: [String.raw`$\langle 1, 11 \rangle$`, String.raw`$\langle 10, -1 \rangle$`, String.raw`$\langle -2, 28 \rangle$`, String.raw`$\langle 5, 14 \rangle$`],
    why: [
      String.raw`$\langle 4, 3 \rangle = \langle 3, 1 \rangle + \langle 1, 2 \rangle$, and a linear transformation preserves sums, so $T(\langle 4, 3 \rangle) = \langle 2, 7 \rangle + \langle -1, 4 \rangle = \langle 1, 11 \rangle$.`,
      String.raw`$\langle 10, -1 \rangle$ applies the transpose of the matrix of $T$ to $\langle 4, 3 \rangle$, with the rows and columns switched.`,
      String.raw`$\langle -2, 28 \rangle$ multiplies the images component by component. A linear transformation sends a sum of inputs to the sum of their images.`,
      String.raw`$\langle 5, 14 \rangle$ adds the input $\langle 4, 3 \rangle$ to $T(\langle 4, 3 \rangle)$, combining an input with an output.`,
    ], answer: 0 },
  { id: "p4br-m34", type: "mcq", skill: "u4", topic: "4.12", calc: true, difficulty: "moderate",
    question: String.raw`Let $A = \begin{bmatrix} 1.5 & -0.4 \\ 0.6 & 2.2 \end{bmatrix}$. The linear transformation $L(\vec{v}) = A\vec{v}$ maps a vector $\vec{v}$ to $\langle 3.1, -4.6 \rangle$. What is $\vec{v}$?`,
    choices: [String.raw`$\langle 1.407, -2.475 \rangle$`, String.raw`$\langle 6.490, -8.260 \rangle$`, String.raw`$\langle 2.706, -1.599 \rangle$`, String.raw`$\langle -2.475, 1.407 \rangle$`],
    why: [
      String.raw`$\det A = 1.5(2.2) - (-0.4)(0.6) = 3.54$, so $A^{-1}$ exists and $\vec{v} = A^{-1}\begin{bmatrix} 3.1 \\ -4.6 \end{bmatrix} \approx \begin{bmatrix} 1.407 \\ -2.475 \end{bmatrix}$.`,
      String.raw`$\langle 6.490, -8.260 \rangle$ is $A\begin{bmatrix} 3.1 \\ -4.6 \end{bmatrix}$, which applies $L$ to the output again instead of undoing it.`,
      String.raw`$\langle 2.706, -1.599 \rangle$ uses the transpose of $A^{-1}$.`,
      String.raw`$\langle -2.475, 1.407 \rangle$ lists the components of $A^{-1}\begin{bmatrix} 3.1 \\ -4.6 \end{bmatrix}$ in the wrong order.`,
    ], answer: 0 },

  // 4.13 Matrices as Functions
  { id: "p4br-m35", type: "mcq", skill: "u4", topic: "4.13", calc: false, difficulty: "easy",
    question: String.raw`A linear transformation $L$ satisfies $L(\langle 1, 0 \rangle) = \langle 3, -2 \rangle$ and $L(\langle 0, 1 \rangle) = \langle -1, 4 \rangle$. What is $L(\langle 2, -3 \rangle)$?`,
    choices: [String.raw`$\langle 9, -16 \rangle$`, String.raw`$\langle 12, -14 \rangle$`, String.raw`$\langle 2, 2 \rangle$`, String.raw`$\langle 6, -12 \rangle$`],
    why: [
      String.raw`$\langle 2, -3 \rangle = 2\langle 1, 0 \rangle - 3\langle 0, 1 \rangle$, so $L(\langle 2, -3 \rangle) = 2\langle 3, -2 \rangle - 3\langle -1, 4 \rangle = \langle 9, -16 \rangle$. Equivalently, the matrix of $L$ has columns $\langle 3, -2 \rangle$ and $\langle -1, 4 \rangle$.`,
      String.raw`$\langle 12, -14 \rangle$ puts the images in the rows of the matrix instead of the columns.`,
      String.raw`$\langle 2, 2 \rangle$ adds the two images and ignores the input.`,
      String.raw`$\langle 6, -12 \rangle$ multiplies $2$ by the first entry of $L(\langle 1, 0 \rangle)$ and $-3$ by the second entry of $L(\langle 0, 1 \rangle)$, using only the main diagonal of the matrix.`,
    ], answer: 0 },
  { id: "p4br-m36", type: "mcq", skill: "u4", topic: "4.13", calc: false, difficulty: "easy",
    question: String.raw`Which matrix rotates every vector in the plane by $\dfrac{2\pi}{3}$ radians counterclockwise about the origin?`,
    choices: [String.raw`$\begin{bmatrix} -\frac{1}{2} & -\frac{\sqrt{3}}{2} \\ \frac{\sqrt{3}}{2} & -\frac{1}{2} \end{bmatrix}$`, String.raw`$\begin{bmatrix} -\frac{1}{2} & \frac{\sqrt{3}}{2} \\ -\frac{\sqrt{3}}{2} & -\frac{1}{2} \end{bmatrix}$`, String.raw`$\begin{bmatrix} \frac{\sqrt{3}}{2} & -\frac{1}{2} \\ \frac{1}{2} & \frac{\sqrt{3}}{2} \end{bmatrix}$`, String.raw`$\begin{bmatrix} -\frac{\sqrt{3}}{2} & -\frac{1}{2} \\ \frac{1}{2} & -\frac{\sqrt{3}}{2} \end{bmatrix}$`],
    why: [
      String.raw`The rotation matrix is $\begin{bmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{bmatrix}$ with $\cos\dfrac{2\pi}{3} = -\dfrac{1}{2}$ and $\sin\dfrac{2\pi}{3} = \dfrac{\sqrt{3}}{2}$.`,
      String.raw`This is the rotation by $\dfrac{2\pi}{3}$ clockwise, which has $-\sin\theta$ below the diagonal instead of above it.`,
      String.raw`This is the rotation by $\dfrac{\pi}{6}$. It uses the values of $\cos\dfrac{\pi}{6}$ and $\sin\dfrac{\pi}{6}$, the reference angle, without the Quadrant II signs.`,
      String.raw`This swaps the roles of sine and cosine while keeping the Quadrant II signs. It is the rotation by $\dfrac{5\pi}{6}$.`,
    ], answer: 0 },
  { id: "p4br-m37", type: "mcq", skill: "u4", topic: "4.13", calc: false, difficulty: "easy",
    question: String.raw`A region in the plane has area $6$. What is the area of its image under the linear transformation with matrix $\begin{bmatrix} 3 & 1 \\ 2 & -1 \end{bmatrix}$?`,
    choices: ["$30$", "$-30$", "$6$", String.raw`$\frac{6}{5}$`],
    why: [
      String.raw`A linear transformation multiplies every area by the absolute value of its determinant. Here $\det = 3(-1) - 1(2) = -5$, so the image has area $6 \cdot |-5| = 30$.`,
      String.raw`$-30$ uses the determinant without the absolute value. An area cannot be negative.`,
      String.raw`$6$ uses $ad + bc = -3 + 2 = -1$ as the determinant, so the area seems unchanged.`,
      String.raw`$\dfrac{6}{5}$ divides by the size of the determinant instead of multiplying.`,
    ], answer: 0 },
  { id: "p4br-m38", type: "mcq", skill: "u4", topic: "4.13", calc: false, difficulty: "moderate",
    question: String.raw`Let $F(x, y) = \langle 2x + y, x - 3y \rangle$ and $G(x, y) = \langle -y, x + 4y \rangle$. Which of the following is $(F \circ G)(x, y)$?`,
    choices: [String.raw`$\langle x + 2y, -3x - 13y \rangle$`, String.raw`$\langle -x + 3y, 6x - 11y \rangle$`, String.raw`$\langle -y, x - 12y \rangle$`, String.raw`$\langle 2x, 2x + y \rangle$`],
    why: [
      String.raw`$F(G(x, y)) = F(-y, x + 4y) = \langle 2(-y) + (x + 4y), -y - 3(x + 4y) \rangle = \langle x + 2y, -3x - 13y \rangle$. This matches the matrix product $\begin{bmatrix} 2 & 1 \\ 1 & -3 \end{bmatrix}\begin{bmatrix} 0 & -1 \\ 1 & 4 \end{bmatrix} = \begin{bmatrix} 1 & 2 \\ -3 & -13 \end{bmatrix}$.`,
      String.raw`This is $(G \circ F)(x, y)$, which applies $F$ first. In $F \circ G$, $G$ is applied first, and its matrix is on the right.`,
      String.raw`This multiplies the matching entries of the two matrices, which does not compose the functions.`,
      String.raw`This adds the two matrices, which gives $F + G$, not $F \circ G$.`,
    ], answer: 0 },
  { id: "p4br-m39", type: "mcq", skill: "u4", topic: "4.13", calc: true, difficulty: "moderate",
    question: String.raw`The vector $\langle 4, 1 \rangle$ is rotated $35^\circ$ counterclockwise about the origin. What is the resulting vector?`,
    choices: [String.raw`$\langle 2.703, 3.113 \rangle$`, String.raw`$\langle 3.850, -1.475 \rangle$`, String.raw`$\langle -3.187, -2.616 \rangle$`, String.raw`$\langle 3.113, 2.703 \rangle$`],
    why: [
      String.raw`$\begin{bmatrix} \cos 35^\circ & -\sin 35^\circ \\ \sin 35^\circ & \cos 35^\circ \end{bmatrix}\begin{bmatrix} 4 \\ 1 \end{bmatrix} = \begin{bmatrix} 4\cos 35^\circ - \sin 35^\circ \\ 4\sin 35^\circ + \cos 35^\circ \end{bmatrix} \approx \begin{bmatrix} 2.703 \\ 3.113 \end{bmatrix}$.`,
      String.raw`$\langle 3.850, -1.475 \rangle$ is the rotation by $35^\circ$ clockwise, which comes from placing $-\sin\theta$ in row $2$ instead of row $1$.`,
      String.raw`$\langle -3.187, -2.616 \rangle$ evaluates $\cos 35$ and $\sin 35$ in radian mode. The angle is in degrees.`,
      String.raw`$\langle 3.113, 2.703 \rangle$ lists the components in the wrong order. Its direction is not $35^\circ$ more than the direction of $\langle 4, 1 \rangle$.`,
    ], answer: 0 },
  { id: "p4br-m40", type: "mcq", skill: "u4", topic: "4.13", calc: false, difficulty: "difficult",
    question: String.raw`Let $F(x, y) = \langle 3x + 5y, x + 2y \rangle$. A linear transformation $G$ satisfies $(G \circ F)(x, y) = \langle x + 4y, 3y \rangle$. Which of the following is $G(x, y)$?`,
    choices: [String.raw`$\langle -2x + 7y, -3x + 9y \rangle$`, String.raw`$\langle 2x - 7y, -x + 5y \rangle$`, String.raw`$\langle 7x + 13y, 3x + 6y \rangle$`, String.raw`$\langle 3x + 27y, x + 10y \rangle$`],
    why: [
      String.raw`With matrices, $G_{m}F_{m} = H$, where $F_{m} = \begin{bmatrix} 3 & 5 \\ 1 & 2 \end{bmatrix}$ and $H = \begin{bmatrix} 1 & 4 \\ 0 & 3 \end{bmatrix}$. Since $\det F_{m} = 1$, $F_{m}^{-1} = \begin{bmatrix} 2 & -5 \\ -1 & 3 \end{bmatrix}$, and $G_{m} = HF_{m}^{-1} = \begin{bmatrix} -2 & 7 \\ -3 & 9 \end{bmatrix}$.`,
      String.raw`This is $F_{m}^{-1}H$, which solves $F \circ G = H$. In $G \circ F$, $F$ acts first, so $F_{m}^{-1}$ goes on the right of $H$.`,
      String.raw`This is $HF_{m}$, which multiplies by $F_{m}$ instead of by its inverse.`,
      String.raw`This is $F_{m}H$, which multiplies by $F_{m}$ instead of its inverse and also uses the wrong order.`,
    ], answer: 0 },
  { id: "p4br-m41", type: "mcq", skill: "u4", topic: "4.13", calc: false, difficulty: "difficult",
    question: String.raw`Let $R = \begin{bmatrix} \cos\frac{\pi}{4} & -\sin\frac{\pi}{4} \\ \sin\frac{\pi}{4} & \cos\frac{\pi}{4} \end{bmatrix}$. What is $R^{3}\begin{bmatrix} 2 \\ 0 \end{bmatrix}$?`,
    choices: [String.raw`$\begin{bmatrix} -\sqrt{2} \\ \sqrt{2} \end{bmatrix}$`, String.raw`$\begin{bmatrix} 3\sqrt{2} \\ 3\sqrt{2} \end{bmatrix}$`, String.raw`$\begin{bmatrix} -\sqrt{2} \\ -\sqrt{2} \end{bmatrix}$`, String.raw`$\begin{bmatrix} \sqrt{2} \\ -\sqrt{2} \end{bmatrix}$`],
    why: [
      String.raw`$R$ rotates by $\dfrac{\pi}{4}$ counterclockwise, so $R^{3}$ rotates by $\dfrac{3\pi}{4}$. The vector $\langle 2, 0 \rangle$ becomes $\left\langle 2\cos\dfrac{3\pi}{4}, 2\sin\dfrac{3\pi}{4} \right\rangle = \langle -\sqrt{2}, \sqrt{2} \rangle$.`,
      String.raw`This is $3R\begin{bmatrix} 2 \\ 0 \end{bmatrix}$, which triples the vector instead of rotating it three times. $R^{3}$ composes three rotations.`,
      String.raw`This is the rotation by $\dfrac{3\pi}{4}$ clockwise, which is $R^{-3}$, not $R^{3}$.`,
      String.raw`This uses $\cos\dfrac{3\pi}{4} = \dfrac{\sqrt{2}}{2}$ and $\sin\dfrac{3\pi}{4} = -\dfrac{\sqrt{2}}{2}$, the signs of Quadrant IV. It is the opposite of the correct vector.`,
    ], answer: 0 },

  // 4.14 Matrices Modeling Contexts
  { id: "p4br-m42", type: "mcq", skill: "u4", topic: "4.14", calc: false, set: "p4br-s5", difficulty: "easy",
    question: String.raw`Which matrix is the transition matrix $T$ for this situation?`,
    choices: [String.raw`$\begin{bmatrix} 0.7 & 0.4 \\ 0.3 & 0.6 \end{bmatrix}$`, String.raw`$\begin{bmatrix} 0.7 & 0.3 \\ 0.4 & 0.6 \end{bmatrix}$`, String.raw`$\begin{bmatrix} 0.3 & 0.6 \\ 0.7 & 0.4 \end{bmatrix}$`, String.raw`$\begin{bmatrix} 0.7 & 0.6 \\ 0.3 & 0.4 \end{bmatrix}$`],
    why: [
      String.raw`Column $1$ is today's bikers: $0.7$ bike tomorrow and $0.3$ take the bus. Column $2$ is today's bus riders: $0.4$ bike tomorrow and $0.6$ take the bus. Each column sums to $1$.`,
      String.raw`This copies the table's rows into the matrix's rows, so today's choice is in the rows. Its columns sum to $1.1$ and $0.9$.`,
      String.raw`This switches the two rows, so row $1$ would mean taking the bus tomorrow, not biking.`,
      String.raw`This switches the entries of column $2$, so $0.6$ would be the chance that a bus rider bikes tomorrow.`,
    ], answer: 0 },
  { id: "p4br-m43", type: "mcq", skill: "u4", topic: "4.14", calc: false, set: "p4br-s5", difficulty: "easy",
    question: String.raw`Today, $50\%$ of the commuters bike and $50\%$ take the bus. What percent of the commuters bike tomorrow?`,
    choices: [String.raw`$55\%$`, String.raw`$50\%$`, String.raw`$45\%$`, String.raw`$35\%$`],
    why: [
      String.raw`$T\begin{bmatrix} 0.5 \\ 0.5 \end{bmatrix} = \begin{bmatrix} 0.7(0.5) + 0.4(0.5) \\ 0.3(0.5) + 0.6(0.5) \end{bmatrix} = \begin{bmatrix} 0.55 \\ 0.45 \end{bmatrix}$, so $55\%$ bike tomorrow.`,
      String.raw`$50\%$ uses the first row of the table, $0.7(0.5) + 0.3(0.5)$, which adds the chances of the two choices for today's bikers.`,
      String.raw`$45\%$ is the share that takes the bus tomorrow.`,
      String.raw`$35\%$ counts only the bikers who keep biking, $0.7(0.5)$, and leaves out the bus riders who switch to biking.`,
    ], answer: 0 },
  { id: "p4br-m44", type: "mcq", skill: "u4", topic: "4.14", calc: true, set: "p4br-s5", difficulty: "moderate",
    question: String.raw`On Monday, $20\%$ of the commuters bike. To the nearest tenth of a percent, what percent of the commuters bike on Thursday of the same week?`,
    choices: [String.raw`$56.1\%$`, String.raw`$53.8\%$`, String.raw`$56.8\%$`, String.raw`$45.0\%$`],
    why: [
      String.raw`Thursday is $3$ days after Monday, so compute $T^{3}\begin{bmatrix} 0.2 \\ 0.8 \end{bmatrix} \approx \begin{bmatrix} 0.5614 \\ 0.4386 \end{bmatrix}$. About $56.1\%$ bike.`,
      String.raw`$53.8\%$ is $T^{2}\begin{bmatrix} 0.2 \\ 0.8 \end{bmatrix}$, which is Wednesday.`,
      String.raw`$56.8\%$ is $T^{4}\begin{bmatrix} 0.2 \\ 0.8 \end{bmatrix}$, which is Friday. Monday counts as the starting state, not as one step.`,
      String.raw`$45.0\%$ uses the transpose of $T$, which puts today's choice in the rows. Its columns do not sum to $1$.`,
    ], answer: 0 },
  { id: "p4br-m45", type: "mcq", skill: "u4", topic: "4.14", calc: true, set: "p4br-s5", difficulty: "difficult",
    question: String.raw`If this pattern continues for many days, about what percent of the commuters take the bus each day in the long run?`,
    choices: [String.raw`$42.9\%$`, String.raw`$57.1\%$`, String.raw`$50.0\%$`, String.raw`$40.0\%$`],
    why: [
      String.raw`High powers of $T$ approach a matrix whose columns are both the steady state. With a calculator, $T^{50} \approx \begin{bmatrix} 0.571 & 0.571 \\ 0.429 & 0.429 \end{bmatrix}$. The second row is the bus, so about $42.9\%$ take the bus. (Exactly, $0.3b = 0.4(1 - b)$ for the bike share $b$, so $b = \frac{4}{7}$ and the bus share is $\frac{3}{7}$.)`,
      String.raw`$57.1\%$ is the long-run share that bikes. The question asks about the bus, the second row of $T$.`,
      String.raw`$50.0\%$ is the long-run split for the transpose of $T$, which treats the rows as today's choice.`,
      String.raw`$40.0\%$ is the chance that a bus rider switches to biking, one entry of $T$, not a long-run share.`,
    ], answer: 0 },
  { id: "p4br-m46", type: "mcq", skill: "u4", topic: "4.14", calc: false, difficulty: "easy",
    question: String.raw`Each night, a cat sleeps either indoors (I) or on the porch (P). The transition matrix below has the previous night's location as its columns and the next night's location as its rows. $$\begin{array}{c} \\ \text{I} \\ \text{P} \end{array}\begin{array}{c} \begin{array}{cc} \text{I} & \text{P} \end{array} \\ \begin{bmatrix} 0.75 & 0.6 \\ 0.25 & 0.4 \end{bmatrix} \end{array}$$ What does the entry $0.6$ represent?`,
    choices: [
      "The probability the cat sleeps indoors, given it slept on the porch the night before",
      "The probability the cat sleeps on the porch, given it slept indoors the night before",
      "The probability the cat sleeps indoors on any night, whatever happened the night before",
      "The probability the cat sleeps on the porch on two nights in a row",
    ],
    why: [
      String.raw`The entry $0.6$ is in the column for the porch (the previous night) and the row for indoors (the next night).`,
      String.raw`This reverses the condition. The previous night is the column, which is P, and the next night is the row, which is I.`,
      String.raw`Each entry depends on the previous night's location. The share of nights spent indoors in the long run comes from the steady state, not from one entry.`,
      String.raw`The probability of the porch two nights in a row is the entry in row P and column P, which is $0.4$.`,
    ], answer: 0 },
  { id: "p4br-m47", type: "mcq", skill: "u4", topic: "4.14", calc: false, difficulty: "moderate",
    question: String.raw`Each week, every volunteer at an animal shelter either walks dogs (D) or cleans kennels (C). A volunteer who walks dogs one week switches to cleaning the next week with probability $0.2$. A volunteer who cleans one week keeps cleaning the next week with probability $0.45$. Which is the transition matrix, with this week's job as the columns (D, then C) and next week's job as the rows (D, then C)?`,
    choices: [String.raw`$\begin{bmatrix} 0.8 & 0.55 \\ 0.2 & 0.45 \end{bmatrix}$`, String.raw`$\begin{bmatrix} 0.8 & 0.45 \\ 0.2 & 0.55 \end{bmatrix}$`, String.raw`$\begin{bmatrix} 0.8 & 0.2 \\ 0.55 & 0.45 \end{bmatrix}$`, String.raw`$\begin{bmatrix} 0.2 & 0.55 \\ 0.8 & 0.45 \end{bmatrix}$`],
    why: [
      String.raw`Column D: a dog walker switches with probability $0.2$, so stays with $0.8$. Column C: a cleaner stays with probability $0.45$, so switches to dogs with $0.55$. Rows are next week's job, D on top.`,
      String.raw`This puts $0.45$ in row D of column C, treating the chance of staying as the chance of switching to dogs.`,
      String.raw`This puts this week's job in the rows. Its columns do not sum to $1$.`,
      String.raw`This treats $0.2$ as the chance a dog walker stays with dogs. The $0.2$ is the chance of switching to cleaning.`,
    ], answer: 0 },
  { id: "p4br-m48", type: "mcq", skill: "u4", topic: "4.14", calc: true, difficulty: "difficult",
    question: String.raw`Each year, the trees in a forest are classified as healthy or infected. The transition matrix is $\begin{bmatrix} 0.9 & 0.3 \\ 0.1 & 0.7 \end{bmatrix}$, with this year's state as the columns (healthy, then infected) and next year's state as the rows (healthy, then infected). This year, $72\%$ of the trees are healthy. To the nearest tenth of a percent, what percent of the trees were healthy two years ago?`,
    choices: [String.raw`$66.7\%$`, String.raw`$70.0\%$`, String.raw`$73.9\%$`, String.raw`$33.3\%$`],
    why: [
      String.raw`Going back one year multiplies by the inverse: $T^{-1}\begin{bmatrix} 0.72 \\ 0.28 \end{bmatrix} = \begin{bmatrix} 0.70 \\ 0.30 \end{bmatrix}$. Going back again, $T^{-1}\begin{bmatrix} 0.70 \\ 0.30 \end{bmatrix} \approx \begin{bmatrix} 0.667 \\ 0.333 \end{bmatrix}$, so about $66.7\%$ were healthy.`,
      String.raw`$70.0\%$ is the healthy share one year ago, $T^{-1}$ applied once.`,
      String.raw`$73.9\%$ is $T^{2}\begin{bmatrix} 0.72 \\ 0.28 \end{bmatrix}$, two years in the future. Earlier years use $T^{-1}$.`,
      String.raw`$33.3\%$ is the infected share two years ago, the second entry of $(T^{-1})^{2}\begin{bmatrix} 0.72 \\ 0.28 \end{bmatrix}$.`,
    ], answer: 0 },

  // Free response 1: a boat leaving a dock (vectors and vector-valued functions, calculator)
  { id: "p4br-f1a", type: "frq", skill: "u4", topic: "4.9", calc: true, set: "p4br-s7", part: "(a)",
    prompt: String.raw`(i) Find the distance between the boat and the dock at time $t = 10$.
(ii) Find the displacement vector of the boat from $t = 0$ to $t = 10$.`,
    rows: [
      { name: "A(i) Distance", earns: String.raw`$\vec{p}(10) = \langle 30, 30 \rangle$ and $\lVert \vec{p}(10) \rVert = \sqrt{30^{2} + 30^{2}} = 30\sqrt{2} \approx 42.426$ meters.` },
      { name: "A(ii) Displacement", earns: String.raw`$\vec{p}(10) - \vec{p}(0) = \langle 30, 30 \rangle - \langle 0, 40 \rangle = \langle 30, -10 \rangle$.` },
    ],
    solution: String.raw`(i) $\vec{p}(10) = \langle 3(10), 40 - 0.1(10)^{2} \rangle = \langle 30, 30 \rangle$. The dock is at the origin, so the distance is $$\lVert \vec{p}(10) \rVert = \sqrt{30^{2} + 30^{2}} = 30\sqrt{2} \approx 42.426 \text{ meters}$$ (ii) $\vec{p}(0) = \langle 0, 40 \rangle$, so the displacement is $\vec{p}(10) - \vec{p}(0) = \langle 30, -10 \rangle$ meters.` },
  { id: "p4br-f1b", type: "frq", skill: "u4", topic: "4.8", calc: true, set: "p4br-s7", part: "(b)",
    prompt: String.raw`(i) Find the vector from the boat's position at $t = 10$ to the buoy.
(ii) At $t = 10$, is the boat moving directly toward the buoy? Give a reason for your answer.`,
    rows: [
      { name: "B(i) Vector to the buoy", earns: String.raw`$\langle 45, 20 \rangle - \langle 30, 30 \rangle = \langle 15, -10 \rangle$.` },
      { name: "B(ii) Conclusion with reason", earns: String.raw`Yes, because $\vec{v}(10) = \langle 3, -2 \rangle$ and $\langle 15, -10 \rangle = 5\langle 3, -2 \rangle$ is a positive scalar multiple of the velocity, so the two vectors have the same direction.` },
    ],
    solution: String.raw`(i) The vector from the boat to the buoy is the buoy's position minus the boat's position: $\langle 45, 20 \rangle - \langle 30, 30 \rangle = \langle 15, -10 \rangle$.
(ii) $\vec{v}(10) = \langle 3, -0.2(10) \rangle = \langle 3, -2 \rangle$. Since $\langle 15, -10 \rangle = 5\langle 3, -2 \rangle$ and $5 > 0$, the vector to the buoy has the same direction as the velocity. Yes, at $t = 10$ the boat is moving directly toward the buoy.` },
  { id: "p4br-f1c", type: "frq", skill: "u4", topic: "4.9", calc: true, set: "p4br-s7", part: "(c)",
    prompt: String.raw`(i) Find the time $t$, for $0 \le t \le 20$, at which the boat is $50$ meters from the dock.
(ii) Find the speed of the boat at the time found in (i).`,
    rows: [
      { name: "C(i) Time", earns: String.raw`Solves $(3t)^{2} + (40 - 0.1t^{2})^{2} = 50^{2}$ to get $t \approx 15.942$ seconds.` },
      { name: "C(ii) Speed", earns: String.raw`$\lVert \vec{v}(15.942) \rVert = \sqrt{3^{2} + (-0.2 \cdot 15.942)^{2}} \approx 4.378$ meters per second.` },
    ],
    solution: String.raw`(i) The boat is $50$ meters from the dock when $\lVert \vec{p}(t) \rVert = 50$: $$(3t)^{2} + (40 - 0.1t^{2})^{2} = 2500$$ A calculator gives $t \approx 15.942$ seconds, the only solution in $0 \le t \le 20$.
(ii) The speed is the magnitude of the velocity: $$\lVert \vec{v}(15.942) \rVert = \sqrt{3^{2} + (-3.188)^{2}} \approx 4.378 \text{ meters per second}$$ (Use the stored value of $t$, not a rounded one.)` },

  // Free response 2: bikes at two stations (transition matrices, calculator)
  { id: "p4br-f2a", type: "frq", skill: "u4", topic: "4.14", calc: true, set: "p4br-s8", part: "(a)",
    prompt: String.raw`(i) Write the transition matrix $T$.
(ii) Find the number of bikes at North on Tuesday morning. Show the work that leads to your answer.`,
    rows: [
      { name: "A(i) Matrix", earns: String.raw`$T = \begin{bmatrix} 0.8 & 0.35 \\ 0.2 & 0.65 \end{bmatrix}$.` },
      { name: "A(ii) Tuesday", earns: String.raw`$T\begin{bmatrix} 120 \\ 80 \end{bmatrix} = \begin{bmatrix} 124 \\ 76 \end{bmatrix}$, so $124$ bikes are at North.` },
    ],
    solution: String.raw`(i) Column North: $80\%$ stay at North and $20\%$ move to South. Column South: $35\%$ move to North and $65\%$ stay. $$T = \begin{bmatrix} 0.8 & 0.35 \\ 0.2 & 0.65 \end{bmatrix}$$ (ii) $$T\begin{bmatrix} 120 \\ 80 \end{bmatrix} = \begin{bmatrix} 0.8(120) + 0.35(80) \\ 0.2(120) + 0.65(80) \end{bmatrix} = \begin{bmatrix} 124 \\ 76 \end{bmatrix}$$ On Tuesday morning, $124$ bikes are at North.` },
  { id: "p4br-f2b", type: "frq", skill: "u4", topic: "4.14", calc: true, set: "p4br-s8", part: "(b)",
    prompt: String.raw`(i) Find the number of bikes at North on Thursday morning of the same week.
(ii) The same pattern held the day before. Find the number of bikes at North on Sunday morning, the day before Monday.`,
    rows: [
      { name: "B(i) Thursday", earns: String.raw`$T^{3}\begin{bmatrix} 120 \\ 80 \end{bmatrix} \approx \begin{bmatrix} 126.61 \\ 73.39 \end{bmatrix}$, so about $126.610$ bikes (about $127$) are at North.` },
      { name: "B(ii) Sunday", earns: String.raw`$T^{-1}\begin{bmatrix} 120 \\ 80 \end{bmatrix} \approx \begin{bmatrix} 111.111 \\ 88.889 \end{bmatrix}$, so about $111$ bikes were at North.` },
    ],
    solution: String.raw`(i) Thursday is three days after Monday: $$T^{3}\begin{bmatrix} 120 \\ 80 \end{bmatrix} \approx \begin{bmatrix} 126.610 \\ 73.390 \end{bmatrix}$$ About $127$ bikes are at North on Thursday morning.
(ii) Sunday is one day before Monday, so multiply by the inverse: $\det T = 0.8(0.65) - 0.35(0.2) = 0.45$, and $$T^{-1}\begin{bmatrix} 120 \\ 80 \end{bmatrix} = \frac{1}{0.45}\begin{bmatrix} 0.65 & -0.35 \\ -0.2 & 0.8 \end{bmatrix}\begin{bmatrix} 120 \\ 80 \end{bmatrix} \approx \begin{bmatrix} 111.111 \\ 88.889 \end{bmatrix}$$ About $111$ bikes were at North on Sunday morning.` },
  { id: "p4br-f2c", type: "frq", skill: "u4", topic: "4.14", calc: true, set: "p4br-s8", part: "(c)",
    prompt: String.raw`(i) If this pattern continues for many days, about how many bikes will be at North each morning in the long run?
(ii) The city wants at least $130$ bikes at North each morning in the long run. Will this pattern meet that goal? Give a reason for your answer.`,
    rows: [
      { name: "C(i) Long run", earns: String.raw`The steady state is $\left\langle \frac{7}{11}, \frac{4}{11} \right\rangle$ of the bikes, so about $200 \cdot \frac{7}{11} \approx 127.273$ bikes at North.` },
      { name: "C(ii) Conclusion with reason", earns: String.raw`No, because the long-run number at North, about $127.273$, is less than $130$.` },
    ],
    solution: String.raw`(i) High powers of $T$ approach $\begin{bmatrix} 0.636 & 0.636 \\ 0.364 & 0.364 \end{bmatrix}$, so $T^{n}\begin{bmatrix} 120 \\ 80 \end{bmatrix}$ approaches $\begin{bmatrix} 127.273 \\ 72.727 \end{bmatrix}$. Exactly, a steady share $n$ at North satisfies $0.2n = 0.35(1 - n)$, so $n = \frac{7}{11}$ and $200 \cdot \frac{7}{11} \approx 127.273$. About $127$ bikes are at North in the long run.
(ii) No. In the long run about $127.273$ bikes are at North each morning, which is less than $130$.` },

  // Free response 3: a matrix and the maps it defines (symbolic, no calculator)
  { id: "p4br-f3a", type: "frq", skill: "u4", topic: "4.11", calc: false, set: "p4br-s9", part: "(a)",
    prompt: String.raw`(i) Find $\det A$ and $A^{-1}$.
(ii) Find the vector $\vec{v}$ for which $L(\vec{v}) = \langle 5, 8 \rangle$. Show the work that leads to your answer.`,
    rows: [
      { name: "A(i) Determinant and inverse", earns: String.raw`$\det A = 2$ and $A^{-1} = \begin{bmatrix} 1 & -\frac{1}{2} \\ -2 & \frac{3}{2} \end{bmatrix}$.` },
      { name: "A(ii) Vector", earns: String.raw`$\vec{v} = A^{-1}\begin{bmatrix} 5 \\ 8 \end{bmatrix} = \begin{bmatrix} 1 \\ 2 \end{bmatrix}$, with supporting work.` },
    ],
    solution: String.raw`(i) $\det A = 3(2) - 1(4) = 2$, so $$A^{-1} = \frac{1}{2}\begin{bmatrix} 2 & -1 \\ -4 & 3 \end{bmatrix} = \begin{bmatrix} 1 & -\frac{1}{2} \\ -2 & \frac{3}{2} \end{bmatrix}$$ (ii) $A\vec{v} = \begin{bmatrix} 5 \\ 8 \end{bmatrix}$, so $$\vec{v} = A^{-1}\begin{bmatrix} 5 \\ 8 \end{bmatrix} = \begin{bmatrix} 5 - 4 \\ -10 + 12 \end{bmatrix} = \begin{bmatrix} 1 \\ 2 \end{bmatrix}$$ Check: $A\begin{bmatrix} 1 \\ 2 \end{bmatrix} = \begin{bmatrix} 3 + 2 \\ 4 + 4 \end{bmatrix} = \begin{bmatrix} 5 \\ 8 \end{bmatrix}$.` },
  { id: "p4br-f3b", type: "frq", skill: "u4", topic: "4.13", calc: false, set: "p4br-s9", part: "(b)",
    prompt: String.raw`Let $R$ be the linear transformation that rotates every vector $\dfrac{\pi}{2}$ radians counterclockwise about the origin.
(i) Find the matrix of $L \circ R$.
(ii) The triangle with vertices $(0, 0)$, $(2, 0)$, and $(0, 3)$ is mapped by $L \circ R$. Find the area of the image.`,
    rows: [
      { name: "B(i) Matrix of the composition", earns: String.raw`$AR_{m} = \begin{bmatrix} 3 & 1 \\ 4 & 2 \end{bmatrix}\begin{bmatrix} 0 & -1 \\ 1 & 0 \end{bmatrix} = \begin{bmatrix} 1 & -3 \\ 2 & -4 \end{bmatrix}$.` },
      { name: "B(ii) Area", earns: String.raw`The triangle has area $3$ and $\left|\det\begin{bmatrix} 1 & -3 \\ 2 & -4 \end{bmatrix}\right| = 2$, so the image has area $6$.` },
    ],
    solution: String.raw`(i) The rotation by $\dfrac{\pi}{2}$ has matrix $R_{m} = \begin{bmatrix} \cos\frac{\pi}{2} & -\sin\frac{\pi}{2} \\ \sin\frac{\pi}{2} & \cos\frac{\pi}{2} \end{bmatrix} = \begin{bmatrix} 0 & -1 \\ 1 & 0 \end{bmatrix}$. In $L \circ R$, $R$ acts first, so its matrix is on the right: $$AR_{m} = \begin{bmatrix} 3 & 1 \\ 4 & 2 \end{bmatrix}\begin{bmatrix} 0 & -1 \\ 1 & 0 \end{bmatrix} = \begin{bmatrix} 1 & -3 \\ 2 & -4 \end{bmatrix}$$ (ii) The triangle has area $\frac{1}{2}(2)(3) = 3$. A linear transformation multiplies area by the absolute value of its determinant, and $\det(AR_{m}) = 1(-4) - (-3)(2) = 2$. The image has area $3 \cdot 2 = 6$.` },
  { id: "p4br-f3c", type: "frq", skill: "u4", topic: "4.11", calc: false, set: "p4br-s9", part: "(c)",
    prompt: String.raw`Let $M = \begin{bmatrix} k & 6 \\ 2 & k - 1 \end{bmatrix}$, where $k$ is a constant.
(i) Find all values of $k$ for which $M$ has no inverse.
(ii) For the positive value of $k$ found in (i), find a nonzero vector $\vec{w}$ with $M\vec{w} = \langle 0, 0 \rangle$, and explain why the transformation $\vec{x} \mapsto M\vec{x}$ has no inverse.`,
    rows: [
      { name: "C(i) Values of k", earns: String.raw`$k(k - 1) - 12 = 0$, so $k = 4$ or $k = -3$.` },
      { name: "C(ii) Vector and reason", earns: String.raw`A nonzero multiple of $\langle 3, -2 \rangle$, with the reason that $\vec{w}$ and $\langle 0, 0 \rangle$ both map to $\langle 0, 0 \rangle$, so the transformation is not one-to-one.` },
    ],
    solution: String.raw`(i) $M$ has no inverse when $\det M = 0$: $$k(k - 1) - 6(2) = k^{2} - k - 12 = (k - 4)(k + 3) = 0$$ so $k = 4$ or $k = -3$.
(ii) With $k = 4$, $M = \begin{bmatrix} 4 & 6 \\ 2 & 3 \end{bmatrix}$. Both rows give $2x + 3y = 0$ after dividing, so $\vec{w} = \langle 3, -2 \rangle$ works: $M\begin{bmatrix} 3 \\ -2 \end{bmatrix} = \begin{bmatrix} 12 - 12 \\ 6 - 6 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$. Since $\langle 3, -2 \rangle$ and $\langle 0, 0 \rangle$ have the same output, the transformation is not one-to-one, so no inverse can undo it.` },
];

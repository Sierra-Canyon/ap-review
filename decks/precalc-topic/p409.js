// AP Precalculus topic quiz 4.9 (Unit 4 is taught but not on the AP exam). Keys and every number are computed in the
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
  "p409-s1": {
    name: "A particle on a curved path",
    label: "Graph",
    intro: String.raw`A particle moves in the $xy$-plane. Its position vector at time $t$ is $\vec{p}(t) = \langle t^{2} - 2t, 4 - t^{2} \rangle$ for $-1 \le t \le 3$, and its velocity vector is $\vec{v}(t) = \langle 2t - 2, -2t \rangle$. The path of the particle is shown below, with its positions at $t = -1, 0, 1, 2,$ and $3$ marked.`,
    sources: [{ title: "", blocks: [{ svg: graph({
      x: [-2, 5], y: [-6, 5], step: 1, xname: "x", yname: "y", width: 250, height: 370,
      segments: path((t) => t * t - 2 * t, (t) => 4 - t * t, -1, 3),
      dots: [[3, 3, "closed"], [0, 4, "closed"], [-1, 3, "closed"], [0, 0, "closed"], [3, -5, "closed"]],
      labels: [[3.15, 3.2, "t = −1"], [0.15, 4.35, "t = 0"], [-1.9, 2.4, "t = 1"], [0.2, -0.6, "t = 2"], [3.15, -5.2, "t = 3"]],
      alt: "The path of the particle starts at (3, 3) when t = -1, moves left and up to (0, 4) at t = 0, curves left and down to its leftmost point (-1, 3) at t = 1, then moves right and down through the origin at t = 2 and ends at (3, -5) when t = 3.",
    }) }] }],
  },
  "p409-s2": {
    name: "Velocity vectors in a table",
    label: "Table",
    intro: String.raw`A particle moves in the $xy$-plane. Its velocity vector $\vec{v}(t)$ at selected times $t$ is given in the table below.`,
    sources: [{ title: "", blocks: [{ table: { head: ["$t$", "$0$", "$1$", "$2$", "$3$", "$4$"], rows: [[String.raw`$\vec{v}(t)$`, String.raw`$\langle 4, 3 \rangle$`, String.raw`$\langle -5, 1 \rangle$`, String.raw`$\langle -4, -4 \rangle$`, String.raw`$\langle 1, 5 \rangle$`, String.raw`$\langle 3, -3 \rangle$`]] } }] }],
  },
  "p409-s3": {
    name: "A particle moving away from the origin",
    label: "Free response",
    intro: String.raw`A particle moves in the $xy$-plane for $0 \le t \le 4$. Its position vector is $\vec{p}(t) = \langle t^{2} - 3t, 2t - 1 \rangle$, and its velocity vector is $\vec{v}(t) = \langle 2t - 3, 2 \rangle$.`,
    sources: [{ title: "", blocks: [{ p: String.raw`A graphing calculator is allowed. Answer each part, and give decimal answers to three places after the decimal point.` }] }],
  },
};

export default {
  forms: [{
    id: "p409",
    name: "Topic 4.9 Quiz: Vector-Valued Functions",
    group: "Unit 4: Functions Involving Parameters, Vectors, and Matrices",
    items: [
      { id: "p409-m01", type: "mcq", skill: "u4", topic: "4.9", calc: false, difficulty: "easy", set: "p409-s1",
        question: String.raw`What is $\lVert \vec{p}(3) \rVert$, the distance of the particle from the origin at $t = 3$?`,
        choices: [String.raw`$\sqrt{34}$`, "$8$", "$4$", String.raw`$3\sqrt{10}$`],
        why: [
          String.raw`$\vec{p}(3) = \langle 9 - 6, 4 - 9 \rangle = \langle 3, -5 \rangle$, so $\lVert \vec{p}(3) \rVert = \sqrt{9 + 25} = \sqrt{34}$.`,
          String.raw`$8 = 3 + 5$ adds the lengths of the components. The magnitude is $\sqrt{3^{2} + (-5)^{2}}$.`,
          String.raw`$4 = \sqrt{25 - 9}$ subtracts the squares. Both squares are added.`,
          String.raw`$3\sqrt{10}$ is the magnitude of the displacement $\vec{p}(3) - \vec{p}(0) = \langle 3, -9 \rangle$. The position vector at $t = 3$ starts at the origin.`,
        ], answer: 0 },
      { id: "p409-m02", type: "mcq", skill: "u4", topic: "4.9", calc: false, difficulty: "moderate", set: "p409-s1",
        question: String.raw`On which interval is the particle moving to the left and downward?`,
        choices: [String.raw`$0 < t < 1$`, String.raw`$-1 < t < 0$`, String.raw`$1 < t \le 3$`, String.raw`$-1 < t < 1$`],
        why: [
          String.raw`The particle moves left when the $x$-component of velocity is negative, $2t - 2 < 0$, so $t < 1$. It moves down when the $y$-component is negative, $-2t < 0$, so $t > 0$. Both hold for $0 < t < 1$.`,
          String.raw`On $-1 < t < 0$, the $y$-component $-2t$ is positive, so the particle moves left and upward.`,
          String.raw`On $1 < t \le 3$, the $x$-component $2t - 2$ is positive, so the particle moves right and downward.`,
          String.raw`$-1 < t < 1$ uses only the $x$-component. For $-1 < t < 0$ the particle moves upward.`,
        ], answer: 0 },
      { id: "p409-m03", type: "mcq", skill: "u4", topic: "4.9", calc: true, difficulty: "easy",
        question: String.raw`A particle moves in the plane with velocity vector $\vec{v}(t) = \langle 2\cos t, 3\sin t \rangle$, where $t$ is in radians. To the nearest thousandth, what is the speed of the particle at $t = 2$?`,
        choices: ["$2.852$", "$2.002$", "$3.560$", "$8.134$"],
        why: [
          String.raw`Speed is the magnitude of velocity: $\lVert \vec{v}(2) \rVert = \sqrt{(2\cos 2)^{2} + (3\sin 2)^{2}} \approx \sqrt{0.693 + 7.441} \approx 2.852$.`,
          String.raw`$2.002$ comes from evaluating $\cos 2$ and $\sin 2$ in degree mode. Here $t$ is in radians.`,
          String.raw`$3.560$ adds the absolute values of the components, $0.832 + 2.728$. Speed is the square root of the sum of their squares.`,
          String.raw`$8.134$ is the square of the speed. Take the square root.`,
        ], answer: 0 },
      { id: "p409-m04", type: "mcq", skill: "u4", topic: "4.9", calc: false, difficulty: "difficult",
        question: String.raw`A particle's position vector is $\vec{p}(t) = \langle 3\cos t, 3\sin t + 2 \rangle$. For $0 \le t < 2\pi$, at which times is the particle a distance of $\sqrt{7}$ from the origin?`,
        choices: [String.raw`$t = \frac{7\pi}{6}$ and $t = \frac{11\pi}{6}$`, String.raw`$t = \frac{\pi}{6}$ and $t = \frac{5\pi}{6}$`, String.raw`$t = \frac{7\pi}{6}$ only`, String.raw`$t = \frac{2\pi}{3}$ and $t = \frac{4\pi}{3}$`],
        why: [
          String.raw`$\lVert \vec{p}(t) \rVert^{2} = 9\cos^{2} t + 9\sin^{2} t + 12\sin t + 4 = 13 + 12\sin t$. Setting it equal to $7$ gives $\sin t = -\frac{1}{2}$, so $t = \frac{7\pi}{6}$ or $t = \frac{11\pi}{6}$.`,
          String.raw`These solve $\sin t = \frac{1}{2}$. The equation $13 + 12\sin t = 7$ gives $\sin t = -\frac{1}{2}$.`,
          String.raw`$\sin t = -\frac{1}{2}$ has two solutions in $[0, 2\pi)$, one in Quadrant III and one in Quadrant IV. $\frac{11\pi}{6}$ is the other.`,
          String.raw`These solve $\cos t = -\frac{1}{2}$. After the identity $\cos^{2} t + \sin^{2} t = 1$, the equation involves only $\sin t$.`,
        ], answer: 0 },
      { id: "p409-m05", type: "mcq", skill: "u4", topic: "4.9", calc: false, difficulty: "moderate", set: "p409-s2",
        question: String.raw`At which of the times in the table is the speed of the particle greatest?`,
        choices: ["$t = 2$", "$t = 0$", "$t = 1$", "$t = 3$"],
        why: [
          String.raw`Speed is $\lVert \vec{v}(t) \rVert$. The speeds are $5$, $\sqrt{26}$, $\sqrt{32}$, $\sqrt{26}$, and $\sqrt{18}$ at $t = 0, 1, 2, 3, 4$. The greatest is $\sqrt{32}$ at $t = 2$.`,
          String.raw`At $t = 0$ the sum of the components, $4 + 3 = 7$, is greatest, but the speed is only $\sqrt{16 + 9} = 5$.`,
          String.raw`At $t = 1$ the horizontal component has the greatest size, $5$, but the speed is $\sqrt{25 + 1} = \sqrt{26} < \sqrt{32}$.`,
          String.raw`At $t = 3$ the vertical component is greatest, $5$, but the speed is $\sqrt{1 + 25} = \sqrt{26} < \sqrt{32}$.`,
        ], answer: 0 },
      { id: "p409-m06", type: "mcq", skill: "u4", topic: "4.9", calc: false, difficulty: "easy", set: "p409-s2",
        question: String.raw`At which of the times in the table is the particle moving to the right and downward?`,
        choices: ["$t = 4$", "$t = 0$", "$t = 1$", "$t = 2$"],
        why: [
          String.raw`Moving right and downward needs a positive $x$-component and a negative $y$-component of velocity. Only $\vec{v}(4) = \langle 3, -3 \rangle$ has both.`,
          String.raw`$\vec{v}(0) = \langle 4, 3 \rangle$ has a positive $y$-component, so the particle moves right and upward.`,
          String.raw`$\vec{v}(1) = \langle -5, 1 \rangle$ has a negative $x$-component and a positive $y$-component, so the particle moves left and upward.`,
          String.raw`$\vec{v}(2) = \langle -4, -4 \rangle$ has a negative $x$-component, so the particle moves left and downward.`,
        ], answer: 0 },
      { id: "p409-f1a", type: "frq", skill: "u4", topic: "4.9", calc: true, set: "p409-s3", part: "(a)",
        prompt: String.raw`Find the position vector of the particle at $t = 4$ and the distance of the particle from the origin at $t = 4$.`,
        rows: [
          { name: "Position and distance", earns: String.raw`$\vec{p}(4) = \langle 4, 7 \rangle$ and the distance is $\sqrt{65} \approx 8.062$.` },
        ],
        solution: String.raw`$\vec{p}(4) = \langle 16 - 12, 8 - 1 \rangle = \langle 4, 7 \rangle$. The distance from the origin is $\lVert \vec{p}(4) \rVert = \sqrt{16 + 49} = \sqrt{65} \approx 8.062$.` },
      { id: "p409-f1b", type: "frq", skill: "u4", topic: "4.9", calc: true, set: "p409-s3", part: "(b)",
        prompt: String.raw`For what values of $t$, $0 \le t \le 4$, is the particle moving to the left? Give a reason for your answer.`,
        rows: [
          { name: "Interval with reason", earns: String.raw`$0 \le t < 1.5$, because the $x$-component of velocity, $2t - 3$, is negative there.` },
        ],
        solution: String.raw`The particle moves to the left when the $x$-component of its velocity is negative: $2t - 3 < 0$ gives $t < 1.5$. So the particle moves left for $0 \le t < 1.5$.` },
      { id: "p409-f1c", type: "frq", skill: "u4", topic: "4.9", calc: true, set: "p409-s3", part: "(c)",
        prompt: String.raw`(i) Find the time $t$, $0 \le t \le 4$, at which the particle is $6$ units from the origin.
(ii) Find the speed of the particle at the time found in (i).`,
        rows: [
          { name: "C(i) Time", earns: String.raw`$t \approx 3.415$, from solving $\sqrt{(t^{2} - 3t)^{2} + (2t - 1)^{2}} = 6$.` },
          { name: "C(ii) Speed", earns: String.raw`$\lVert \vec{v}(3.415) \rVert = \sqrt{(2t - 3)^{2} + 4} \approx 4.321$.` },
        ],
        solution: String.raw`(i) The distance from the origin is $\lVert \vec{p}(t) \rVert = \sqrt{(t^{2} - 3t)^{2} + (2t - 1)^{2}}$. Graphing $y = \sqrt{(x^{2} - 3x)^{2} + (2x - 1)^{2}}$ and $y = 6$ on $0 \le x \le 4$ gives one intersection, at $t \approx 3.415$. (ii) At that time $\vec{v}(t) = \langle 2t - 3, 2 \rangle \approx \langle 3.830, 2 \rangle$, so the speed is $\sqrt{3.830^{2} + 2^{2}} \approx 4.321$.` },
    ],
  }],
};

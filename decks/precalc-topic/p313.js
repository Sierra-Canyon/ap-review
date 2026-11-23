// AP Precalculus topic quiz 3.13: Trigonometry and Polar Coordinates.
import { graph } from "../../plot.js";

const R = String.raw;
const PI = Math.PI;

// G() wraps graph(): tick labels written by hand (xt, yt), and extra pieces drawn under the curves: rings (circles
// centered at the origin) and polar grid rays.
function G(o) {
  const w = o.width || 360, h = o.height || 260;
  const kx = (w - 60) / (o.x[1] - o.x[0]), ky = (h - 60) / (o.y[1] - o.y[0]);
  const sx = (x) => +(30 + (x - o.x[0]) * kx).toFixed(2), sy = (y) => +(h - 30 - (y - o.y[0]) * ky).toFixed(2);
  const clampX = Math.min(o.x[1], Math.max(o.x[0], 0)), clampY = Math.min(o.y[1], Math.max(o.y[0], 0));
  const labels = [...(o.labels || [])];
  for (const [x, t] of o.xt || []) labels.push([x - (t.length * 3.4) / kx, clampY - 15 / ky, t]);
  for (const [y, t] of o.yt || []) labels.push([clampX - (t.length * 7 + 6) / kx, y - 4 / ky, t]);
  const svg = graph({ ...o, labels, labelEvery: 1e9 });
  const id = "g" + graph.n;
  let add = "";
  for (const r of o.rings || []) add += `<ellipse class="g-grid" fill="none" cx="${sx(0)}" cy="${sy(0)}" rx="${+(r * kx).toFixed(2)}" ry="${+(r * ky).toFixed(2)}"/>`;
  for (const [a, b, c, d] of o.rays || []) add += `<line class="g-grid" x1="${sx(a)}" y1="${sy(b)}" x2="${sx(c)}" y2="${sy(d)}"/>`;
  return svg.replace("</defs>\n", `</defs>\n<g clip-path="url(#${id}c)">${add}</g>`);
}
// Rays of a polar grid every pi/4, out to radius R.
const spokes = (Rr) => Array.from({ length: 8 }, (_, k) => [0, 0, Rr * Math.cos((k * PI) / 4), Rr * Math.sin((k * PI) / 4)]);
const at = (r, t) => [r * Math.cos(t), r * Math.sin(t)];

// The points the polar grid shows. The verification script recomputes the key from these same coordinates.
const PA = at(2, PI / 4), PB = at(2, (5 * PI) / 4), PC = at(2, (3 * PI) / 4), PD = at(2, (7 * PI) / 4);

export const sets = {
  "p313-s1": {
    name: "Four points on a polar grid",
    label: "Polar grid",
    intro: R`Points $A$, $B$, $C$, and $D$ are shown on a polar grid. The circles have radii $1$, $2$, and $3$, and the rays are drawn every $\dfrac{\pi}{4}$ radians.`,
    sources: [{ title: "", blocks: [{ svg: G({
      x: [-3.4, 3.4], y: [-3.4, 3.4], step: 10, width: 300, height: 300,
      rings: [1, 2, 3], rays: spokes(3),
      dots: [[...PA, "closed"], [...PB, "closed"], [...PC, "closed"], [...PD, "closed"]],
      labels: [[PA[0] + 0.15, PA[1] + 0.15, "A"], [PB[0] - 0.45, PB[1] - 0.4, "B"], [PC[0] - 0.45, PC[1] + 0.15, "C"], [PD[0] + 0.15, PD[1] - 0.4, "D"]],
      xt: [[1, "1"], [2, "2"], [3, "3"]],
      alt: "Polar grid with circles of radius 1, 2, and 3 and rays every pi/4 radians. Four points lie on the circle of radius 2: A on the ray at angle pi/4 in Quadrant I, C on the ray at angle 3 pi/4 in Quadrant II, B on the ray at angle 5 pi/4 in Quadrant III, and D on the ray at angle 7 pi/4 in Quadrant IV.",
    }) }] }],
  },
  "p313-s2": {
    name: "A complex number in the complex plane",
    label: "Graph",
    intro: R`The complex number $z = -3 + 4i$ is shown as a point in the complex plane. The horizontal axis is the real axis, and the vertical axis is the imaginary axis.`,
    sources: [{ title: "", blocks: [{ svg: graph({
      x: [-5, 3], y: [-1.5, 5.5], step: 1, xname: "Re", yname: "Im", width: 320, height: 290,
      segments: [[0, 0, -3, 4]],
      dots: [[-3, 4, "closed"]],
      labels: [[-3.6, 4.3, "z"]],
      alt: "Complex plane with the point z = -3 + 4i in the second quadrant, 3 units left of the imaginary axis and 4 units above the real axis, joined to the origin by a segment.",
    }) }] }],
  },
  "p313-s3": {
    name: "Two points in rectangular and polar form",
    label: "Free response",
    intro: R`Point $A$ has rectangular coordinates $\left(-2\sqrt{3}, 2\right)$. Point $B$ has polar coordinates $\left(-4, \dfrac{\pi}{3}\right)$.`,
    sources: [{ title: "", blocks: [{ p: R`Answer each part. Give exact answers, and show the work that leads to each answer.` }] }],
  },
};

export default {
  forms: [{
    id: "p313",
    name: "Topic 3.13 Quiz: Trigonometry and Polar Coordinates",
    group: "Unit 3: Trigonometric and Polar Functions",
    items: [
      { id: "p313-m01", type: "mcq", skill: "u3", topic: "3.13", calc: false, difficulty: "easy",
        question: R`The point $P$ has polar coordinates $\left(6, -\dfrac{\pi}{6}\right)$. What are the rectangular coordinates of $P$?`,
        choices: [R`$\left(3\sqrt{3}, -3\right)$`, R`$\left(-3, 3\sqrt{3}\right)$`, R`$\left(3\sqrt{3}, 3\right)$`, R`$\left(3, -3\sqrt{3}\right)$`],
        why: [
          R`$x = 6\cos\left(-\dfrac{\pi}{6}\right) = 6 \cdot \dfrac{\sqrt{3}}{2} = 3\sqrt{3}$ and $y = 6\sin\left(-\dfrac{\pi}{6}\right) = 6 \cdot \left(-\dfrac{1}{2}\right) = -3$.`,
          R`This uses $x = r\sin\theta$ and $y = r\cos\theta$. The $x$-coordinate uses cosine.`,
          R`This uses the angle $\dfrac{\pi}{6}$. A negative angle is measured clockwise, which puts $P$ below the $x$-axis.`,
          R`This uses the values for $\dfrac{\pi}{3}$: $\cos\dfrac{\pi}{3} = \dfrac{1}{2}$ and $\sin\dfrac{\pi}{3} = \dfrac{\sqrt{3}}{2}$.`,
        ], answer: 0 },
      { id: "p313-m02", type: "mcq", skill: "u3", topic: "3.13", calc: false, difficulty: "easy", set: "p313-s1",
        question: R`Which point has polar coordinates $\left(-2, \dfrac{\pi}{4}\right)$?`,
        choices: [R`$B$`, R`$A$`, R`$C$`, R`$D$`],
        why: [
          R`A negative $r$ puts the point on the ray opposite the angle. The ray opposite $\dfrac{\pi}{4}$ is at $\dfrac{\pi}{4} + \pi = \dfrac{5\pi}{4}$, and $B$ is $2$ units out on it.`,
          R`$A$ is $\left(2, \dfrac{\pi}{4}\right)$. With $r = -2$ the point is on the opposite side of the pole.`,
          R`$C$ is $\left(2, \dfrac{3\pi}{4}\right)$, the reflection of $A$ across the $y$-axis. A negative $r$ reflects through the pole.`,
          R`$D$ is $\left(2, -\dfrac{\pi}{4}\right)$, the reflection of $A$ across the $x$-axis. A negative $r$ reflects through the pole.`,
        ], answer: 0 },
      { id: "p313-m03", type: "mcq", skill: "u3", topic: "3.13", calc: true, difficulty: "easy",
        question: R`Which of the following gives polar coordinates $(r, \theta)$ of the point $(5, -2)$ with $r > 0$ and $0 \le \theta < 2\pi$?`,
        choices: ["$(5.385, 5.903)$", "$(5.385, -0.381)$", "$(5.385, 2.761)$", "$(5.385, 1.190)$"],
        why: [
          R`$r = \sqrt{5^{2} + (-2)^{2}} = \sqrt{29} \approx 5.385$. The point is in Quadrant IV, and $\arctan\left(-\dfrac{2}{5}\right) \approx -0.3805$, so $\theta = 2\pi - 0.3805 \approx 5.903$.`,
          R`$-0.381$ is the calculator's value of $\arctan\left(-\dfrac{2}{5}\right)$. It names the right direction, but it is not in $0 \le \theta < 2\pi$.`,
          R`$2.761 \approx \pi - 0.381$ is in Quadrant II. Adding $\pi$ is needed only when $x < 0$.`,
          R`$1.190 = \arctan\dfrac{5}{2}$ uses $\dfrac{x}{y}$ instead of $\dfrac{y}{x}$.`,
        ], answer: 0 },
      { id: "p313-m04", type: "mcq", skill: "u3", topic: "3.13", calc: false, difficulty: "moderate",
        question: R`What are the rectangular coordinates of the point with polar coordinates $\left(-4, \dfrac{5\pi}{6}\right)$?`,
        choices: [R`$\left(2\sqrt{3}, -2\right)$`, R`$\left(-2\sqrt{3}, 2\right)$`, R`$\left(-2, 2\sqrt{3}\right)$`, R`$\left(2\sqrt{3}, 2\right)$`],
        why: [
          R`$x = -4\cos\dfrac{5\pi}{6} = -4\left(-\dfrac{\sqrt{3}}{2}\right) = 2\sqrt{3}$ and $y = -4\sin\dfrac{5\pi}{6} = -4\left(\dfrac{1}{2}\right) = -2$. The point is in Quadrant IV, opposite the ray at $\dfrac{5\pi}{6}$.`,
          R`This uses $r = 4$. With $r = -4$ the point is on the opposite side of the pole, in Quadrant IV.`,
          R`This uses $x = r\sin\theta$ and $y = r\cos\theta$, with sine and cosine swapped.`,
          R`This applies the negative $r$ to $x$ only. Both coordinates are multiplied by $r = -4$.`,
        ], answer: 0 },
      { id: "p313-m05", type: "mcq", skill: "u3", topic: "3.13", calc: true, difficulty: "moderate", set: "p313-s2",
        question: R`Which of the following is $z$ written in polar form, with the angle in radians?`,
        choices: [R`$5(\cos 2.214 + i\sin 2.214)$`, R`$5(\cos(-0.927) + i\sin(-0.927))$`, R`$5(\cos 0.927 + i\sin 0.927)$`, R`$7(\cos 2.214 + i\sin 2.214)$`],
        why: [
          R`$r = \sqrt{(-3)^{2} + 4^{2}} = 5$. The point is in Quadrant II, and $\arctan\left(\dfrac{4}{-3}\right) \approx -0.927$, so $\theta = \pi - 0.927 \approx 2.214$.`,
          R`$-0.927$ is the calculator's value of $\arctan\left(-\dfrac{4}{3}\right)$, which points into Quadrant IV. Since the real part is negative, $\pi$ must be added.`,
          R`$0.927 = \arctan\dfrac{4}{3}$ ignores the negative real part and points into Quadrant I.`,
          R`$7 = 3 + 4$ adds the distances along the axes. The modulus is $\sqrt{3^{2} + 4^{2}} = 5$.`,
        ], answer: 0 },
      { id: "p313-m06", type: "mcq", skill: "u3", topic: "3.13", calc: false, difficulty: "difficult",
        question: R`Which of the following is one of the zeros of $x^{2} + 4x + 8$, written in polar form?`,
        choices: [R`$2\sqrt{2}\left(\cos\dfrac{3\pi}{4} + i\sin\dfrac{3\pi}{4}\right)$`, R`$2\sqrt{2}\left(\cos\dfrac{\pi}{4} + i\sin\dfrac{\pi}{4}\right)$`, R`$8\left(\cos\dfrac{3\pi}{4} + i\sin\dfrac{3\pi}{4}\right)$`, R`$2\sqrt{2}\left(\cos\dfrac{7\pi}{4} + i\sin\dfrac{7\pi}{4}\right)$`],
        why: [
          R`$x = \dfrac{-4 \pm \sqrt{16 - 32}}{2} = -2 \pm 2i$. For $-2 + 2i$, $r = \sqrt{4 + 4} = 2\sqrt{2}$, and the point is in Quadrant II on the line $y = -x$, so $\theta = \dfrac{3\pi}{4}$.`,
          R`This is $2 + 2i$, which comes from dropping the negative sign on $-b$ in the quadratic formula. $(2 + 2i)^{2} + 4(2 + 2i) + 8 = 16 + 16i \ne 0$.`,
          R`$8$ is $r^{2} = (-2)^{2} + 2^{2}$. The modulus is its square root, $2\sqrt{2}$.`,
          R`This is $2 - 2i$. It takes $\theta = \arctan\left(\dfrac{2}{-2}\right) = -\dfrac{\pi}{4}$ for $-2 + 2i$ without moving the angle to Quadrant II.`,
        ], answer: 0 },
      { id: "p313-f1a", type: "frq", skill: "u3", topic: "3.13", calc: false, set: "p313-s3", part: "(a)",
        prompt: R`Find polar coordinates $(r, \theta)$ of point $A$ with $r > 0$ and $0 \le \theta < 2\pi$.`,
        rows: [
          { name: "Value of r", earns: R`$r = \sqrt{\left(-2\sqrt{3}\right)^{2} + 2^{2}} = 4$.` },
          { name: "Value of theta", earns: R`$\theta = \dfrac{5\pi}{6}$, with a reason that $A$ is in Quadrant II (for example, $\cos\theta = -\dfrac{\sqrt{3}}{2}$ and $\sin\theta = \dfrac{1}{2}$).` },
        ],
        solution: R`$r = \sqrt{12 + 4} = 4$. Then $\cos\theta = \dfrac{-2\sqrt{3}}{4} = -\dfrac{\sqrt{3}}{2}$ and $\sin\theta = \dfrac{2}{4} = \dfrac{1}{2}$, so $\theta$ is in Quadrant II with reference angle $\dfrac{\pi}{6}$, and $\theta = \dfrac{5\pi}{6}$. Polar coordinates of $A$ are $\left(4, \dfrac{5\pi}{6}\right)$.` },
      { id: "p313-f1b", type: "frq", skill: "u3", topic: "3.13", calc: false, set: "p313-s3", part: "(b)",
        prompt: R`Find the rectangular coordinates of point $B$.`,
        rows: [{ name: "Coordinates", earns: R`$\left(-2, -2\sqrt{3}\right)$, with supporting work from $x = r\cos\theta$ and $y = r\sin\theta$.` }],
        solution: R`$x = -4\cos\dfrac{\pi}{3} = -4 \cdot \dfrac{1}{2} = -2$ and $y = -4\sin\dfrac{\pi}{3} = -4 \cdot \dfrac{\sqrt{3}}{2} = -2\sqrt{3}$. The point is $\left(-2, -2\sqrt{3}\right)$, in Quadrant III.` },
      { id: "p313-f1c", type: "frq", skill: "u3", topic: "3.13", calc: false, set: "p313-s3", part: "(c)",
        prompt: R`Find polar coordinates $(r, \theta)$ of point $A$ with $r < 0$ and $0 \le \theta < 2\pi$.`,
        rows: [{ name: "Coordinates", earns: R`$\left(-4, \dfrac{11\pi}{6}\right)$.` }],
        solution: R`With $r = -4$, the angle must point in the opposite direction from $\dfrac{5\pi}{6}$: $\theta = \dfrac{5\pi}{6} + \pi = \dfrac{11\pi}{6}$, which is in $[0, 2\pi)$. A check: $-4\cos\dfrac{11\pi}{6} = -2\sqrt{3}$ and $-4\sin\dfrac{11\pi}{6} = 2$.` },
    ],
  }],
};

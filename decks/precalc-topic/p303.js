// AP Precalculus topic quiz, Topic 3.3: Sine and Cosine Function Values.
import { graph } from "../../plot.js";

const arc = (s, a, b, n = 90) => Array.from({ length: n }, (_, k) => {
  const t0 = a + ((b - a) * k) / n, t1 = a + ((b - a) * (k + 1)) / n;
  return [s * Math.cos(t0), s * Math.sin(t0), s * Math.cos(t1), s * Math.sin(t1)];
});
const th = 2 * Math.PI + Math.atan2(-0.6, 0.8);

export const sets = {
  "p303-s1": {
    name: "A point in quadrant IV",
    label: "Diagram",
    intro: String.raw`The figure shows the unit circle. The point $P(0.8, -0.6)$ is on the circle, and the angle $\theta$, with $0 < \theta < 2\pi$, is in standard position with its terminal ray through $P$.`,
    sources: [{ title: "", blocks: [{ svg: graph({
      x: [-1.25, 1.25], y: [-1.25, 1.25], step: 0.5, xname: "x", yname: "y", width: 320, height: 320,
      segments: [...arc(1, 0, 2 * Math.PI, 120), [0, 0, 0.8, -0.6], ...arc(0.22, 0, th, 60)],
      dots: [[0.8, -0.6, "closed"]],
      labels: [[0.86, -0.72, "P"], [-0.33, 0.25, "θ"]],
      alt: "The unit circle centered at the origin. A ray from the origin goes down and to the right to the point P on the circle in the fourth quadrant, at (0.8, -0.6). A small arc marks the angle theta, measured counterclockwise from the positive x-axis almost all the way around to the ray.",
    }) }] }],
  },
  "p303-s2": {
    name: "An angle in quadrant IV",
    label: "Free response",
    intro: String.raw`The angle $\theta$ is in standard position with $\dfrac{3\pi}{2} < \theta < 2\pi$, and $\cos\theta = \dfrac{1}{4}$.`,
    sources: [{ title: "", blocks: [{ p: "Answer each part. Give exact answers, and show the work that leads to them." }] }],
  },
};

export default {
  forms: [{
    id: "p303",
    name: "Topic 3.3 Quiz: Sine and Cosine Function Values",
    group: "Unit 3: Trigonometric and Polar Functions",
    items: [
      { id: "p303-m01", type: "mcq", skill: "u3", topic: "3.3", calc: false, difficulty: "easy",
        question: String.raw`What is the value of $\cos\dfrac{7\pi}{6}$?`,
        choices: [String.raw`$-\frac{\sqrt{3}}{2}$`, String.raw`$-\frac{1}{2}$`, String.raw`$\frac{\sqrt{3}}{2}$`, String.raw`$-\frac{\sqrt{2}}{2}$`],
        why: [
          String.raw`The angle $\dfrac{7\pi}{6}$ is in quadrant III with reference angle $\dfrac{\pi}{6}$. Its point on the unit circle is $\left(-\dfrac{\sqrt{3}}{2}, -\dfrac{1}{2}\right)$, and cosine is the $x$-coordinate.`,
          String.raw`$-\dfrac{1}{2}$ is the $y$-coordinate, $\sin\dfrac{7\pi}{6}$. Cosine is the $x$-coordinate.`,
          String.raw`$\dfrac{\sqrt{3}}{2}$ is $\cos\dfrac{\pi}{6}$, the reference angle's value. In quadrant III the $x$-coordinate is negative.`,
          String.raw`$-\dfrac{\sqrt{2}}{2}$ is the value for a reference angle of $\dfrac{\pi}{4}$. The reference angle of $\dfrac{7\pi}{6}$ is $\dfrac{\pi}{6}$.`,
        ], answer: 0 },
      { id: "p303-m02", type: "mcq", skill: "u3", topic: "3.3", calc: false, difficulty: "easy", set: "p303-s1",
        question: String.raw`What is the value of $\sin\theta$?`,
        choices: [String.raw`$-0.6$`, String.raw`$0.8$`, String.raw`$0.6$`, String.raw`$-0.75$`],
        why: [
          String.raw`The point where the terminal ray meets the unit circle is $(\cos\theta, \sin\theta)$, so $\sin\theta$ is the $y$-coordinate of $P$, $-0.6$.`,
          String.raw`$0.8$ is the $x$-coordinate of $P$, which is $\cos\theta$.`,
          String.raw`$0.6$ drops the sign. $P$ is below the $x$-axis, so $\sin\theta < 0$.`,
          String.raw`$-0.75$ is $\dfrac{-0.6}{0.8}$, which is $\tan\theta$.`,
        ], answer: 0 },
      { id: "p303-m03", type: "mcq", skill: "u3", topic: "3.3", calc: false, difficulty: "moderate", set: "p303-s1",
        question: String.raw`The point $Q$ is the reflection of $P$ over the $y$-axis. The point $Q$ is on the terminal ray of which of the following angles in standard position?`,
        choices: [String.raw`$\pi - \theta$`, String.raw`$-\theta$`, String.raw`$\theta + \pi$`, String.raw`$\frac{\pi}{2} - \theta$`],
        why: [
          String.raw`$Q = (-0.8, -0.6)$. The point of $\pi - \theta$ on the unit circle is $\bigl(\cos(\pi - \theta), \sin(\pi - \theta)\bigr) = (-\cos\theta, \sin\theta) = (-0.8, -0.6)$.`,
          String.raw`The angle $-\theta$ gives $(\cos\theta, -\sin\theta) = (0.8, 0.6)$, the reflection of $P$ over the $x$-axis.`,
          String.raw`The angle $\theta + \pi$ gives $(-\cos\theta, -\sin\theta) = (-0.8, 0.6)$, the point opposite $P$ through the origin.`,
          String.raw`The angle $\dfrac{\pi}{2} - \theta$ gives $(\sin\theta, \cos\theta) = (-0.6, 0.8)$, the reflection of $P$ over the line $y = x$.`,
        ], answer: 0 },
      { id: "p303-m04", type: "mcq", skill: "u3", topic: "3.3", calc: false, difficulty: "moderate",
        question: String.raw`The angle $\theta$ is in quadrant II, and $\cos\theta = -\dfrac{2}{7}$. What is the value of $\sin\theta$?`,
        choices: [String.raw`$\frac{3\sqrt{5}}{7}$`, String.raw`$-\frac{3\sqrt{5}}{7}$`, String.raw`$\frac{45}{49}$`, String.raw`$\frac{5}{7}$`],
        why: [
          String.raw`$\sin^{2}\theta = 1 - \cos^{2}\theta = 1 - \dfrac{4}{49} = \dfrac{45}{49}$. In quadrant II, $\sin\theta > 0$, so $\sin\theta = \dfrac{\sqrt{45}}{7} = \dfrac{3\sqrt{5}}{7}$.`,
          String.raw`This has the sign of quadrant III or IV. In quadrant II the $y$-coordinate is positive.`,
          String.raw`$\dfrac{45}{49}$ is $\sin^{2}\theta$. The square root is still needed.`,
          String.raw`$\dfrac{5}{7}$ is $1 - \dfrac{2}{7}$, which subtracts $\cos\theta$ instead of $\cos^{2}\theta$ and uses $\sin\theta$ for $\sin^{2}\theta$.`,
        ], answer: 0 },
      { id: "p303-m05", type: "mcq", skill: "u3", topic: "3.3", calc: false, difficulty: "difficult",
        question: String.raw`Which of the following is a value of $\theta$ in the interval $0 \le \theta < 2\pi$ for which $\sin\theta = \cos\dfrac{5\pi}{6}$?`,
        choices: [String.raw`$\frac{4\pi}{3}$`, String.raw`$\frac{7\pi}{6}$`, String.raw`$\frac{5\pi}{6}$`, String.raw`$\frac{2\pi}{3}$`],
        why: [
          String.raw`$\cos\dfrac{5\pi}{6} = -\dfrac{\sqrt{3}}{2}$. The $y$-coordinate is $-\dfrac{\sqrt{3}}{2}$ at reference angle $\dfrac{\pi}{3}$ in quadrants III and IV, so $\theta = \dfrac{4\pi}{3}$ or $\dfrac{5\pi}{3}$. Only $\dfrac{4\pi}{3}$ is listed.`,
          String.raw`$\cos\dfrac{7\pi}{6} = -\dfrac{\sqrt{3}}{2}$, but $\sin\dfrac{7\pi}{6} = -\dfrac{1}{2}$. The equation needs the $y$-coordinate to equal $-\dfrac{\sqrt{3}}{2}$.`,
          String.raw`$\sin\dfrac{5\pi}{6} = \dfrac{1}{2}$, which does not equal $\cos\dfrac{5\pi}{6} = -\dfrac{\sqrt{3}}{2}$. The sine and cosine of one angle are different.`,
          String.raw`$\sin\dfrac{2\pi}{3} = \dfrac{\sqrt{3}}{2}$, which has the right size but the wrong sign. The value $-\dfrac{\sqrt{3}}{2}$ needs a point below the $x$-axis.`,
        ], answer: 0 },
      { id: "p303-m06", type: "mcq", skill: "u3", topic: "3.3", calc: true, difficulty: "easy",
        question: String.raw`The terminal ray of an angle of $2.5$ radians in standard position meets the unit circle at the point $P$. What are the coordinates of $P$?`,
        choices: [String.raw`$(-0.801, 0.598)$`, String.raw`$(0.598, -0.801)$`, String.raw`$(0.999, 0.044)$`, String.raw`$(0.801, 0.598)$`],
        why: [
          String.raw`$P = (\cos 2.5, \sin 2.5) \approx (-0.801, 0.598)$, in radian mode. The angle $2.5$ is between $\dfrac{\pi}{2}$ and $\pi$, so $P$ is in quadrant II, which matches the signs.`,
          String.raw`This gives $(\sin 2.5, \cos 2.5)$, with the coordinates swapped. The $x$-coordinate is the cosine.`,
          String.raw`These are the cosine and sine of $2.5$ degrees. The angle is in radians.`,
          String.raw`This drops the sign of $\cos 2.5$. An angle of $2.5$ radians is past $\dfrac{\pi}{2} \approx 1.571$, so $P$ is left of the $y$-axis.`,
        ], answer: 0 },
      { id: "p303-f1a", type: "frq", skill: "u3", topic: "3.3", calc: false, set: "p303-s2", part: "(a)",
        prompt: String.raw`Find the exact value of $\sin\theta$. Give a reason for its sign.`,
        rows: [{ name: "Value and sign", earns: String.raw`$\sin\theta = -\dfrac{\sqrt{15}}{4}$ from $\sin^{2}\theta = 1 - \dfrac{1}{16} = \dfrac{15}{16}$, negative because the terminal ray is in quadrant IV, below the $x$-axis.` }],
        solution: String.raw`$\sin^{2}\theta + \cos^{2}\theta = 1$, so $\sin^{2}\theta = 1 - \dfrac{1}{16} = \dfrac{15}{16}$. Since $\dfrac{3\pi}{2} < \theta < 2\pi$, the terminal ray is in quadrant IV, where $y < 0$. So $\sin\theta = -\dfrac{\sqrt{15}}{4}$.` },
      { id: "p303-f1b", type: "frq", skill: "u3", topic: "3.3", calc: false, set: "p303-s2", part: "(b)",
        prompt: String.raw`The terminal ray of $\theta$ meets the circle of radius $8$ centered at the origin at the point $B$. Find the exact coordinates of $B$.`,
        rows: [{ name: "Coordinates", earns: String.raw`$B = (8\cos\theta, 8\sin\theta) = \left(2, -2\sqrt{15}\right)$.` }],
        solution: String.raw`On a circle of radius $8$, the point on the terminal ray of $\theta$ is $(8\cos\theta, 8\sin\theta) = \left(8 \cdot \dfrac{1}{4}, 8 \cdot \left(-\dfrac{\sqrt{15}}{4}\right)\right) = \left(2, -2\sqrt{15}\right)$.` },
      { id: "p303-f1c", type: "frq", skill: "u3", topic: "3.3", calc: false, set: "p303-s2", part: "(c)",
        prompt: String.raw`The angle $\beta$, with $0 < \beta < 2\pi$, satisfies $\cos\beta = \dfrac{1}{4}$ and $\sin\beta > 0$. Write $\beta$ in terms of $\theta$, and give the point where the terminal ray of $\beta$ meets the unit circle.`,
        rows: [{ name: "Angle and point", earns: String.raw`$\beta = 2\pi - \theta$ (the reflection of the ray of $\theta$ over the $x$-axis), with point $\left(\dfrac{1}{4}, \dfrac{\sqrt{15}}{4}\right)$.` }],
        solution: String.raw`The point for $\beta$ has the same $x$-coordinate, $\dfrac{1}{4}$, and a positive $y$-coordinate, so it is the reflection of $\left(\dfrac{1}{4}, -\dfrac{\sqrt{15}}{4}\right)$ over the $x$-axis: $\left(\dfrac{1}{4}, \dfrac{\sqrt{15}}{4}\right)$. Reflecting over the $x$-axis replaces $\theta$ with $-\theta$, and $-\theta + 2\pi$ is in $0 < \beta < 2\pi$, so $\beta = 2\pi - \theta$.` },
    ],
  }],
};

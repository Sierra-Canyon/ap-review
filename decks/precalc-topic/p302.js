// AP Precalculus topic quiz, Topic 3.2: Sine, Cosine, and Tangent.
import { graph } from "../../plot.js";

// A circle of radius r centered at the origin, and an arc of radius s from angle a to angle b, as line segments.
const arc = (s, a, b, n = 90) => Array.from({ length: n }, (_, k) => {
  const t0 = a + ((b - a) * k) / n, t1 = a + ((b - a) * (k + 1)) / n;
  return [s * Math.cos(t0), s * Math.sin(t0), s * Math.cos(t1), s * Math.sin(t1)];
});
const th = Math.atan2(3, -Math.sqrt(7));

export const sets = {
  "p302-s1": {
    name: "A circle of radius 4",
    label: "Diagram",
    intro: String.raw`The figure shows a circle of radius $4$ centered at the origin. The point $P\left(-\sqrt{7}, 3\right)$ is on the circle, and the angle $\theta$ is in standard position with its terminal ray through $P$.`,
    sources: [{ title: "", blocks: [{ svg: graph({
      x: [-5, 5], y: [-5, 5], step: 1, xname: "x", yname: "y", width: 320, height: 320,
      segments: [...arc(4, 0, 2 * Math.PI, 120), [0, 0, -Math.sqrt(7), 3], ...arc(0.8, 0, th, 30)],
      dots: [[-Math.sqrt(7), 3, "closed"]],
      labels: [[-3.4, 3.5, "P"], [0.5, 0.95, "θ"]],
      alt: "A circle of radius 4 centered at the origin. A ray from the origin goes up and to the left to the point P on the circle in the second quadrant, at about (-2.65, 3). A small arc marks the angle theta from the positive x-axis to the ray.",
    }) }] }],
  },
  "p302-s2": {
    name: "A point in quadrant III",
    label: "Free response",
    intro: String.raw`The angle $\theta$ is in standard position, and its terminal ray passes through the point $(-20, -21)$.`,
    sources: [{ title: "", blocks: [{ p: "Answer each part. Give exact answers, and show the work that leads to them." }] }],
  },
};

export default {
  forms: [{
    id: "p302",
    name: "Topic 3.2 Quiz: Sine, Cosine, and Tangent",
    group: "Unit 3: Trigonometric and Polar Functions",
    items: [
      { id: "p302-m01", type: "mcq", skill: "u3", topic: "3.2", calc: false, difficulty: "easy",
        question: String.raw`An angle of $-\dfrac{5\pi}{6}$ radians is in standard position. Which angle $\alpha$ with $0 \le \alpha < 2\pi$ is coterminal with it?`,
        choices: [String.raw`$\frac{7\pi}{6}$`, String.raw`$\frac{5\pi}{6}$`, String.raw`$\frac{\pi}{6}$`, String.raw`$\frac{17\pi}{6}$`],
        why: [
          String.raw`Adding one full revolution keeps the terminal ray in place: $-\dfrac{5\pi}{6} + 2\pi = \dfrac{7\pi}{6}$, which is between $0$ and $2\pi$.`,
          String.raw`$\dfrac{5\pi}{6}$ drops the negative sign. Its terminal ray is in quadrant II, while the ray of $-\dfrac{5\pi}{6}$ is in quadrant III.`,
          String.raw`$\dfrac{\pi}{6}$ is the reference angle, the acute angle the ray makes with the $x$-axis. A coterminal angle must end on the same ray.`,
          String.raw`$\dfrac{17\pi}{6}$ adds $2\pi$ to $\dfrac{5\pi}{6}$ instead of to $-\dfrac{5\pi}{6}$. It is also not less than $2\pi$.`,
        ], answer: 0 },
      { id: "p302-m02", type: "mcq", skill: "u3", topic: "3.2", calc: false, difficulty: "easy", set: "p302-s1",
        question: String.raw`What is the value of $\cos\theta$?`,
        choices: [String.raw`$-\frac{\sqrt{7}}{4}$`, String.raw`$-\sqrt{7}$`, String.raw`$\frac{3}{4}$`, String.raw`$-\frac{4}{\sqrt{7}}$`],
        why: [
          String.raw`On a circle of radius $r$, $\cos\theta = \dfrac{x}{r}$. Here $x = -\sqrt{7}$ and $r = 4$, so $\cos\theta = -\dfrac{\sqrt{7}}{4}$.`,
          String.raw`$-\sqrt{7}$ is the $x$-coordinate of $P$. On a circle of radius $4$ it must be divided by $4$.`,
          String.raw`$\dfrac{3}{4}$ is $\dfrac{y}{r}$, which is $\sin\theta$. Cosine uses the $x$-coordinate.`,
          String.raw`$-\dfrac{4}{\sqrt{7}}$ is $\dfrac{r}{x}$, the reciprocal of $\cos\theta$.`,
        ], answer: 0 },
      { id: "p302-m03", type: "mcq", skill: "u3", topic: "3.2", calc: false, difficulty: "moderate", set: "p302-s1",
        question: String.raw`What is the value of $\tan\theta$?`,
        choices: [String.raw`$-\frac{3}{\sqrt{7}}$`, String.raw`$-\frac{\sqrt{7}}{3}$`, String.raw`$\frac{3}{\sqrt{7}}$`, String.raw`$\frac{3}{4}$`],
        why: [
          String.raw`$\tan\theta = \dfrac{y}{x} = \dfrac{3}{-\sqrt{7}} = -\dfrac{3}{\sqrt{7}}$. The radius does not appear, because it cancels in $\dfrac{\sin\theta}{\cos\theta}$.`,
          String.raw`$-\dfrac{\sqrt{7}}{3}$ is $\dfrac{x}{y}$, the reciprocal. Tangent is the $y$-coordinate over the $x$-coordinate.`,
          String.raw`$\dfrac{3}{\sqrt{7}}$ drops the sign. In quadrant II, $x < 0$ and $y > 0$, so the tangent is negative.`,
          String.raw`$\dfrac{3}{4}$ is $\dfrac{y}{r}$, which is $\sin\theta$, not $\tan\theta$.`,
        ], answer: 0 },
      { id: "p302-m04", type: "mcq", skill: "u3", topic: "3.2", calc: false, difficulty: "moderate",
        question: String.raw`The terminal ray of an angle $\theta$ in standard position passes through the point $(7, -24)$. What is the value of $\sin(\theta + \pi)$?`,
        choices: [String.raw`$\frac{24}{25}$`, String.raw`$-\frac{24}{25}$`, String.raw`$-\frac{7}{25}$`, String.raw`$\frac{7}{25}$`],
        why: [
          String.raw`The distance from the origin to $(7, -24)$ is $\sqrt{49 + 576} = 25$. Adding $\pi$ turns the ray halfway around, so the ray of $\theta + \pi$ passes through $(-7, 24)$, and $\sin(\theta + \pi) = \dfrac{24}{25}$.`,
          String.raw`$-\dfrac{24}{25}$ is $\sin\theta$. The angle $\theta + \pi$ points in the opposite direction, which changes the sign of $y$.`,
          String.raw`$-\dfrac{7}{25}$ is $\dfrac{x}{r}$ for the opposite point $(-7, 24)$, which is $\cos(\theta + \pi)$. Sine uses $y$.`,
          String.raw`$\dfrac{7}{25}$ is $\cos\theta$, the $x$-coordinate of the original point over $r$.`,
        ], answer: 0 },
      { id: "p302-m05", type: "mcq", skill: "u3", topic: "3.2", calc: false, difficulty: "difficult",
        stem: String.raw`A circle of radius $r$ is centered at the origin, and $\dfrac{\pi}{2} < \theta < \pi$. The point $P$ is on the circle and on the terminal ray of $\theta$. The point $Q$ is on the circle and on the terminal ray of $\pi - \theta$.`,
        question: String.raw`Which of the following is equal to the $x$-coordinate of $Q$ minus the $x$-coordinate of $P$?`,
        choices: [String.raw`$-2r\cos\theta$`, String.raw`$2r\cos\theta$`, String.raw`$0$`, String.raw`$-2r\sin\theta$`],
        why: [
          String.raw`$P = (r\cos\theta, r\sin\theta)$. The angle $\pi - \theta$ reflects the ray over the $y$-axis, so $Q = (-r\cos\theta, r\sin\theta)$. The difference is $-r\cos\theta - r\cos\theta = -2r\cos\theta$, which is positive because $\cos\theta < 0$.`,
          String.raw`$2r\cos\theta$ is the $x$-coordinate of $P$ minus that of $Q$. It is negative here, but $Q$ is in quadrant I, to the right of $P$.`,
          String.raw`$0$ would mean $P$ and $Q$ have the same $x$-coordinate, as for a reflection over the $x$-axis. The angle $\pi - \theta$ reflects over the $y$-axis, which keeps $y$ and changes $x$.`,
          String.raw`$-2r\sin\theta$ uses sine for the $x$-coordinate. On a circle of radius $r$, the $x$-coordinate is $r\cos\theta$.`,
        ], answer: 0 },
      { id: "p302-m06", type: "mcq", skill: "u3", topic: "3.2", calc: true, difficulty: "easy",
        question: String.raw`The string of a pendulum is $0.8$ meter long. As the pendulum swings from one side to the other, its bob travels along an arc of length $0.5$ meter. What is the measure, in degrees, of the angle the string turns through?`,
        choices: [String.raw`$35.810$`, String.raw`$0.625$`, String.raw`$1.600$`, String.raw`$0.011$`],
        why: [
          String.raw`The radian measure is the arc length over the radius: $\dfrac{0.5}{0.8} = 0.625$ radian. In degrees, $0.625 \cdot \dfrac{180}{\pi} \approx 35.810$.`,
          String.raw`$0.625$ is the measure in radians. It still has to be converted to degrees.`,
          String.raw`$1.600$ is the radius over the arc length, $\dfrac{0.8}{0.5}$. The radian measure is arc length over radius.`,
          String.raw`$0.011$ multiplies $0.625$ by $\dfrac{\pi}{180}$, which converts degrees to radians. The conversion from radians to degrees multiplies by $\dfrac{180}{\pi}$.`,
        ], answer: 0 },
      { id: "p302-f1a", type: "frq", skill: "u3", topic: "3.2", calc: false, set: "p302-s2", part: "(a)",
        prompt: String.raw`Find the exact values of $\sin\theta$ and $\cos\theta$.`,
        rows: [{ name: "Sine and cosine", earns: String.raw`Finds $r = \sqrt{(-20)^{2} + (-21)^{2}} = 29$ and gives $\sin\theta = -\dfrac{21}{29}$ and $\cos\theta = -\dfrac{20}{29}$.` }],
        solution: String.raw`The distance from the origin to $(-20, -21)$ is $r = \sqrt{400 + 441} = \sqrt{841} = 29$. So $\sin\theta = \dfrac{y}{r} = -\dfrac{21}{29}$ and $\cos\theta = \dfrac{x}{r} = -\dfrac{20}{29}$.` },
      { id: "p302-f1b", type: "frq", skill: "u3", topic: "3.2", calc: false, set: "p302-s2", part: "(b)",
        prompt: String.raw`Find the exact value of $\tan\theta$. Explain why $\tan\theta$ is positive even though the point is not in quadrant I.`,
        rows: [{ name: "Tangent and reason", earns: String.raw`$\tan\theta = \dfrac{-21}{-20} = \dfrac{21}{20}$, positive because $x$ and $y$ are both negative, so their quotient is positive.` }],
        solution: String.raw`$\tan\theta = \dfrac{y}{x} = \dfrac{-21}{-20} = \dfrac{21}{20}$. In quadrant III both coordinates are negative, and the quotient of two negative numbers is positive.` },
      { id: "p302-f1c", type: "frq", skill: "u3", topic: "3.2", calc: false, set: "p302-s2", part: "(c)",
        prompt: String.raw`Find the exact value of $\sin(-\theta)$. Show how the terminal ray of $-\theta$ is related to the terminal ray of $\theta$.`,
        rows: [{ name: "Value with reason", earns: String.raw`States that the ray of $-\theta$ is the reflection of the ray of $\theta$ over the $x$-axis, so it passes through $(-20, 21)$, and gives $\sin(-\theta) = \dfrac{21}{29}$.` }],
        solution: String.raw`Measuring the same angle clockwise reflects the terminal ray over the $x$-axis, so the ray of $-\theta$ passes through $(-20, 21)$, still at distance $29$ from the origin. Then $\sin(-\theta) = \dfrac{21}{29}$.` },
    ],
  }],
};

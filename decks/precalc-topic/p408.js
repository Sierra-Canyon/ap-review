// AP Precalculus topic quiz 4.8 (Unit 4 is taught but not on the AP exam). Keys and every number are computed in the
// writer's scratch scripts.
import { graph } from "../../plot.js";

// An arrow from (x1, y1) to (x2, y2) as three segments (shaft and two head strokes). The window uses the same scale on
// both axes, so the heads look the same in every direction.
function arrow(x1, y1, x2, y2, h = 0.4) {
  const a = Math.atan2(y2 - y1, x2 - x1), s = 0.45;
  return [
    [x1, y1, x2, y2],
    [x2, y2, x2 - h * Math.cos(a - s), y2 - h * Math.sin(a - s)],
    [x2, y2, x2 - h * Math.cos(a + s), y2 - h * Math.sin(a + s)],
  ];
}

export const sets = {
  "p408-s1": {
    name: "Three vectors on a grid",
    label: "Diagram",
    intro: String.raw`Vectors $\vec{a}$, $\vec{b}$, and $\vec{c}$ are shown on the grid below. Vector $\vec{a}$ has its tail at $(-4, -3)$ and its head at $(-1, 3)$. Vector $\vec{b}$ has its tail at $(1, 2)$ and its head at $(5, 0)$. Vector $\vec{c}$ has its tail at $(2, -3)$ and its head at $(3, -1)$.`,
    sources: [{ title: "", blocks: [{ svg: graph({
      x: [-5, 6], y: [-4, 4], step: 1, xname: "x", yname: "y", width: 396, height: 288,
      segments: [...arrow(-4, -3, -1, 3), ...arrow(1, 2, 5, 0), ...arrow(2, -3, 3, -1)],
      dots: [[-4, -3, "closed"], [1, 2, "closed"], [2, -3, "closed"]],
      labels: [[-3.3, 0.3, "a"], [3.1, 1.5, "b"], [2.7, -2.4, "c"]],
      alt: "A coordinate grid from -5 to 6 horizontally and -4 to 4 vertically with three arrows. Arrow a starts at (-4, -3) and points up and to the right to its head at (-1, 3). Arrow b starts at (1, 2) and points down and to the right to its head at (5, 0). Arrow c starts at (2, -3) and points up and to the right to its head at (3, -1).",
    }) }] }],
  },
  "p408-s2": {
    name: "A right angle at P",
    label: "Free response",
    intro: String.raw`Points $P(-2, 1)$, $Q(3, 7)$, and $R(4, -4)$ are in the $xy$-plane.`,
    sources: [{ title: "", blocks: [{ p: String.raw`Answer each part. Show the work that leads to your answers.` }] }],
  },
};

export default {
  forms: [{
    id: "p408",
    name: "Topic 4.8 Quiz: Vectors",
    group: "Unit 4: Functions Involving Parameters, Vectors, and Matrices",
    items: [
      { id: "p408-m01", type: "mcq", skill: "u4", topic: "4.8", calc: false, difficulty: "easy", set: "p408-s1",
        question: String.raw`What is the magnitude of $\vec{b}$?`,
        choices: [String.raw`$2\sqrt{5}$`, "$6$", String.raw`$2\sqrt{3}$`, "$20$"],
        why: [
          String.raw`$\vec{b} = \langle 5 - 1, 0 - 2 \rangle = \langle 4, -2 \rangle$, so $\lVert \vec{b} \rVert = \sqrt{4^{2} + (-2)^{2}} = \sqrt{20} = 2\sqrt{5}$.`,
          String.raw`$6$ adds the lengths of the components, $4 + 2$. The magnitude is the square root of the sum of their squares.`,
          String.raw`$2\sqrt{3} = \sqrt{16 - 4}$ subtracts the squares. The component $-2$ squares to $+4$, which is added.`,
          String.raw`$20$ is $\lVert \vec{b} \rVert^{2}$. Take the square root to get the magnitude.`,
        ], answer: 0 },
      { id: "p408-m02", type: "mcq", skill: "u4", topic: "4.8", calc: false, difficulty: "easy", set: "p408-s1",
        question: String.raw`Which vector is $\vec{a} + \vec{b}$?`,
        choices: [String.raw`$\langle 7, 4 \rangle$`, String.raw`$\langle -1, 8 \rangle$`, String.raw`$\langle 6, -3 \rangle$`, String.raw`$\langle -3, -1 \rangle$`],
        why: [
          String.raw`$\vec{a} = \langle -1 - (-4), 3 - (-3) \rangle = \langle 3, 6 \rangle$ and $\vec{b} = \langle 4, -2 \rangle$, so $\vec{a} + \vec{b} = \langle 7, 4 \rangle$.`,
          String.raw`$\langle -1, 8 \rangle$ is $\vec{a} - \vec{b}$. Add the components.`,
          String.raw`$\langle 6, -3 \rangle$ runs from the head of $\vec{a}$, $(-1, 3)$, to the head of $\vec{b}$, $(5, 0)$. A sum adds the components of the two vectors.`,
          String.raw`$\langle -3, -1 \rangle$ adds the coordinates of the two tails, $(-4, -3)$ and $(1, 2)$. Each vector's components are head minus tail.`,
        ], answer: 0 },
      { id: "p408-m03", type: "mcq", skill: "u4", topic: "4.8", calc: false, difficulty: "moderate", set: "p408-s1",
        question: String.raw`Which of the following statements are true?
I. $\vec{a}$ and $\vec{c}$ have the same direction.
II. $\vec{a}$ is perpendicular to $\vec{c}$.
III. $\vec{b}$ and $\vec{c}$ have the same magnitude.`,
        choices: ["I only", "I and II only", "I and III only", "I, II, and III"],
        why: [
          String.raw`$\vec{a} = \langle 3, 6 \rangle = 3\langle 1, 2 \rangle = 3\vec{c}$, a positive multiple, so I is true. $\vec{a} \cdot \vec{c} = 3(1) + 6(2) = 15 \ne 0$, so II is false. $\lVert \vec{b} \rVert = 2\sqrt{5}$ and $\lVert \vec{c} \rVert = \sqrt{5}$, so III is false.`,
          String.raw`II is false: $\vec{a} \cdot \vec{c} = 3 + 12 = 15$, not $0$. Vectors with the same direction are parallel, not perpendicular. It is $\vec{b}$ that is perpendicular to $\vec{a}$, since $\vec{a} \cdot \vec{b} = 12 - 12 = 0$.`,
          String.raw`III is false: $\lVert \vec{b} \rVert = \sqrt{20} = 2\sqrt{5}$ but $\lVert \vec{c} \rVert = \sqrt{1 + 4} = \sqrt{5}$.`,
          String.raw`II and III are false: $\vec{a} \cdot \vec{c} = 15 \ne 0$, and $\lVert \vec{b} \rVert = 2\sqrt{5}$ is twice $\lVert \vec{c} \rVert = \sqrt{5}$.`,
        ], answer: 0 },
      { id: "p408-m04", type: "mcq", skill: "u4", topic: "4.8", calc: false, difficulty: "moderate",
        question: String.raw`Which vector has magnitude $10$ and the same direction as $\langle -5, 12 \rangle$?`,
        choices: [String.raw`$\left\langle -\frac{50}{13}, \frac{120}{13} \right\rangle$`, String.raw`$\left\langle -\frac{5}{13}, \frac{12}{13} \right\rangle$`, String.raw`$\langle -50, 120 \rangle$`, String.raw`$\left\langle \frac{50}{13}, -\frac{120}{13} \right\rangle$`],
        why: [
          String.raw`$\lVert \langle -5, 12 \rangle \rVert = \sqrt{25 + 144} = 13$, so the unit vector is $\left\langle -\frac{5}{13}, \frac{12}{13} \right\rangle$. Multiply it by $10$: $\left\langle -\frac{50}{13}, \frac{120}{13} \right\rangle$.`,
          String.raw`This is the unit vector, with magnitude $1$. It still has to be multiplied by $10$.`,
          String.raw`$\langle -50, 120 \rangle$ multiplies by $10$ without first dividing by the magnitude $13$, so its magnitude is $130$.`,
          String.raw`This vector has magnitude $10$ but points the opposite way, since it is $-1$ times the correct vector.`,
        ], answer: 0 },
      { id: "p408-m05", type: "mcq", skill: "u4", topic: "4.8", calc: true, difficulty: "difficult",
        question: String.raw`A hiker walks $6$ kilometers on a bearing of $160^\circ$ and then $4$ kilometers on a bearing of $040^\circ$. Bearings are measured clockwise from north. To the nearest thousandth of a kilometer, how far is the hiker from the starting point?`,
        choices: ["$5.292$", "$10$", "$8.718$", "$7.197$"],
        why: [
          String.raw`A bearing $b$ is the standard angle $90^\circ - b$. The legs are $6\langle \cos(-70^\circ), \sin(-70^\circ) \rangle \approx \langle 2.052, -5.638 \rangle$ and $4\langle \cos 50^\circ, \sin 50^\circ \rangle \approx \langle 2.571, 3.064 \rangle$. Their sum is about $\langle 4.623, -2.574 \rangle$, with magnitude $\sqrt{28} \approx 5.292$.`,
          String.raw`$10 = 6 + 4$ adds the distances. The two legs point in different directions, so the magnitude of the sum is less than the sum of the magnitudes.`,
          String.raw`$8.718 = \sqrt{6^{2} + 4^{2} + 2(6)(4)\cos 60^\circ}$ uses the $120^\circ$ turn as the angle of the triangle. The angle inside the triangle at the turn is $180^\circ - 120^\circ = 60^\circ$, so the Law of Cosines gives $\sqrt{36 + 16 - 48\cos 60^\circ}$.`,
          String.raw`$7.197$ adds the absolute values of the components of the sum, $4.623 + 2.574$. The distance is the magnitude of that sum.`,
        ], answer: 0 },
      { id: "p408-m06", type: "mcq", skill: "u4", topic: "4.8", calc: true, difficulty: "moderate",
        question: String.raw`To the nearest thousandth of a degree, what is the angle between the vectors $\langle 5, -2 \rangle$ and $\langle -1, 4 \rangle$?`,
        choices: [String.raw`$125.838^\circ$`, String.raw`$54.162^\circ$`, String.raw`$82.235^\circ$`, String.raw`$2.196^\circ$`],
        why: [
          String.raw`$\cos\theta = \dfrac{(5)(-1) + (-2)(4)}{\sqrt{29}\sqrt{17}} = \dfrac{-13}{\sqrt{493}}$, so $\theta = \cos^{-1}\left(\dfrac{-13}{\sqrt{493}}\right) \approx 125.838^\circ$.`,
          String.raw`$54.162^\circ$ uses $+13$ in the numerator. The dot product is negative, so the angle is obtuse.`,
          String.raw`$82.235^\circ$ comes from a dot product of $-5 + 8 = 3$, which drops the negative sign of $-2$.`,
          String.raw`$2.196$ is the correct angle in radians. Set the calculator to degree mode.`,
        ], answer: 0 },
      { id: "p408-f1a", type: "frq", skill: "u4", topic: "4.8", calc: false, set: "p408-s2", part: "(a)",
        prompt: String.raw`Find the component form of $\overrightarrow{PQ}$ and the magnitude of $\overrightarrow{PQ}$.`,
        rows: [
          { name: "Components", earns: String.raw`$\overrightarrow{PQ} = \langle 3 - (-2), 7 - 1 \rangle = \langle 5, 6 \rangle$.` },
          { name: "Magnitude", earns: String.raw`$\lVert \overrightarrow{PQ} \rVert = \sqrt{5^{2} + 6^{2}} = \sqrt{61}$.` },
        ],
        solution: String.raw`$\overrightarrow{PQ}$ is head minus tail: $\langle 3 - (-2), 7 - 1 \rangle = \langle 5, 6 \rangle$. Its magnitude is $\sqrt{25 + 36} = \sqrt{61}$.` },
      { id: "p408-f1b", type: "frq", skill: "u4", topic: "4.8", calc: false, set: "p408-s2", part: "(b)",
        prompt: String.raw`Is angle $QPR$ a right angle? Give a reason for your answer.`,
        rows: [
          { name: "Dot product and conclusion", earns: String.raw`$\overrightarrow{PR} = \langle 6, -5 \rangle$ and $\overrightarrow{PQ} \cdot \overrightarrow{PR} = 30 - 30 = 0$, so the vectors are perpendicular and angle $QPR$ is a right angle.` },
        ],
        solution: String.raw`$\overrightarrow{PR} = \langle 4 - (-2), -4 - 1 \rangle = \langle 6, -5 \rangle$. Then $\overrightarrow{PQ} \cdot \overrightarrow{PR} = 5(6) + 6(-5) = 0$. A dot product of $0$ means $\overrightarrow{PQ}$ and $\overrightarrow{PR}$ are perpendicular, so angle $QPR$ is a right angle.` },
      { id: "p408-f1c", type: "frq", skill: "u4", topic: "4.8", calc: false, set: "p408-s2", part: "(c)",
        prompt: String.raw`Find the coordinates of point $S$ so that $PQSR$, with its vertices in that order, is a parallelogram.`,
        rows: [
          { name: "Point S", earns: String.raw`$S = Q + \overrightarrow{PR} = (3 + 6, 7 - 5) = (9, 2)$.` },
        ],
        solution: String.raw`In parallelogram $PQSR$, side $QS$ is parallel to and as long as side $PR$, so $\overrightarrow{QS} = \overrightarrow{PR} = \langle 6, -5 \rangle$. Then $S = (3 + 6, 7 + (-5)) = (9, 2)$. Check: $\overrightarrow{RS} = \langle 9 - 4, 2 - (-4) \rangle = \langle 5, 6 \rangle = \overrightarrow{PQ}$.` },
    ],
  }],
};

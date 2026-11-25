// AP Physics 1 topic quiz 2.3: Newton's third law.
import { graph } from "../../plot.js";
import { scene } from "../../diagrams.js";
const R = String.raw;

const forceGraph = () => graph({ x: [0, 80], y: [0, 8], step: { x: 10, y: 2 }, labelEvery: 2, xname: "t (ms)", yname: "F (N)", segments: [[0, 0, 20, 6], [20, 6, 60, 0]],
  alt: "Graph of the force on cart A in newtons versus time in milliseconds. The force rises in a straight line from 0 at 0 milliseconds to 6.0 newtons at 20 milliseconds, then falls in a straight line to 0 at 60 milliseconds." });
const springBlock = () => scene({ width: 360, height: 300, alt: "A light spring hangs from the ceiling with a block hanging from its lower end. Four arrows are labeled. F1 points up at the top of the block, F2 points down at the bottom end of the spring, F3 points down from the block's center, and F4 points up at the top end of the spring.", items: [
  { ground: { from: [260, 270], to: [100, 270] } }, { line: { from: [180, 270], to: [180, 244] } }, { spring: { from: [180, 244], to: [180, 150], coils: 7, amp: 10 } },
  { rect: { x: 180, y: 124, w: 60, h: 52, label: "block" } },
  { arrow: { from: [205, 150], to: [205, 198], label: "F_1", dx: 10 } }, { arrow: { from: [155, 198], to: [155, 152], label: "F_2", dx: -10 } },
  { arrow: { from: [180, 98], to: [180, 52], label: "F_3" } }, { arrow: { from: [200, 246], to: [200, 272], label: "F_4", dx: 10 } }] });

export const sets = {
  "q23-s1": { name: "A cart collision", label: "Graph", intro: R`Cart A collides with cart B on a low-friction track. Cart B has twice the mass of cart A. The graph shows the force exerted on cart A by cart B during the collision. Positive is to the right.`, sources: [{ title: "", blocks: [{ svg: forceGraph() }] }] },
  "q23-s2": { name: "Two force sensors", label: "Table", intro: R`Two carts collide, and a force sensor on each cart records the magnitude of the force exerted on that cart. Cart B has twice the mass of cart A. The table shows the readings at four times.`, sources: [{ title: "", blocks: [{ table: { head: ["Time (ms)", "Force on A (N)", "Force on B (N)"], rows: [["10", "2.0", "2.0"], ["20", "4.5", "4.5"], ["30", "6.0", "5.0"], ["40", "3.0", "3.0"]] } }] }] },
  "q23-s3": { name: "A block on a spring", label: "Setup", intro: R`A block hangs at rest from a spring of negligible mass attached to the ceiling. The arrows show four of the forces in the situation. $F_1$ is the force of the spring on the block, $F_2$ is the force of the block on the spring, $F_3$ is the force of Earth on the block, and $F_4$ is the force of the ceiling on the spring.`, sources: [{ title: "", blocks: [{ svg: springBlock() }] }] },
  "q23-s4": { name: "A student pushing a crate", label: "Free response", intro: R`A $60$ kg student wearing roller skates pushes on a $20$ kg crate that rolls on wheels. They are on a level floor, and friction is negligible. The student exerts a constant horizontal force of $30$ N on the crate, and both start from rest.`, sources: [{ title: "", blocks: [{ p: R`Assume the student keeps both feet on the skates and does not touch anything else.` }] }] },
};

const items = [
  { id: "q23-m1", type: "mcq", skill: "u2", topic: "2.3", difficulty: "easy",
    stem: R`A student pushes as hard as possible on a heavy dumpster, and the dumpster does not move.`,
    question: R`How does the force of the student on the dumpster compare with the force of the dumpster on the student?`,
    choices: [R`They are equal, because they are a third-law pair`, R`The student's is larger, because the student is the one pushing`, R`The dumpster's is larger, because the dumpster does not move`, R`The dumpster exerts no force, because it stays at rest`],
    why: [R`The two forces are an interaction pair. By Newton's third law they are equal in magnitude and opposite in direction, whether or not either object moves.`,
      R`Who starts the push does not matter. Interaction pairs are always equal.`,
      R`Staying at rest means the net force on the dumpster is zero, because friction from the ground balances the push. It does not make the dumpster's force on the student larger.`,
      R`A resting object can still exert forces. The dumpster pushes back on the student with a force equal to the student's push.`], answer: 0 },
  { id: "q23-m2", type: "mcq", skill: "u2", topic: "2.3", difficulty: "moderate", set: "q23-s1",
    question: R`What is the force exerted on cart B by cart A at $t = 40$ ms?`,
    choices: [R`$3.0$ N, opposite the force on A`, R`$6.0$ N, opposite to the force on A`, R`$3.0$ N, in the same direction as the force on A`, R`$1.5$ N, opposite to the force on A`],
    why: [R`At $t = 40$ ms the graph shows $3.0$ N on A. By the third law, A exerts an equal force on B in the opposite direction at every instant, whatever the masses.`,
      R`$6.0$ N is the peak force on A, read at the wrong time, or doubled because B has twice the mass.`,
      R`The forces of an interaction pair point in opposite directions.`,
      R`$1.5$ N divides the force by the mass ratio. The pair is equal, even though the two carts accelerate differently.`], answer: 0 },
  { id: "q23-m3", type: "mcq", skill: "u2", topic: "2.3", difficulty: "moderate", set: "q23-s2",
    question: R`Which statement about the readings is correct?`,
    choices: [R`The $30$ ms row, because the forces must be equal at every instant`, R`No row is inconsistent, because the heavier cart B should feel the larger force`, R`Every row is inconsistent, because the force on B should be twice the force on A`, R`No row is inconsistent, because the forces need to be equal only on average`],
    why: [R`The force of A on B and the force of B on A are an interaction pair. They are equal at every instant, so the $6.0$ N and $5.0$ N at $30$ ms cannot both be right.`,
      R`The third law does not depend on mass. Cart B accelerates less because it has more mass, not because the force on it is larger.`,
      R`Equal readings at $10$, $20$, and $40$ ms are exactly what the third law predicts. The force is not scaled by the mass.`,
      R`The pair is equal at each instant of the collision, not just on average.`], answer: 0 },
  { id: "q23-m4", type: "mcq", skill: "u2", topic: "2.3", difficulty: "moderate", set: "q23-s3",
    question: R`Which two forces form a third-law pair?`,
    choices: [R`$F_1$ and $F_2$`, R`$F_1$ and $F_3$`, R`$F_2$ and $F_4$`, R`$F_3$ and $F_4$`],
    why: [R`$F_1$ is the force of the spring on the block and $F_2$ is the force of the block on the spring. The same two objects interact, with the roles swapped.`,
      R`$F_1$ and $F_3$ are equal and opposite, but both act on the block. They balance because the block is at rest. They are not a pair.`,
      R`$F_2$ and $F_4$ are equal and opposite, but both act on the spring. They balance because the spring has negligible mass. They are not a pair.`,
      R`$F_3$ and $F_4$ act on different objects and involve different interactions, with Earth and the ceiling. They are not a pair.`], answer: 0 },
  { id: "q23-m5", type: "mcq", skill: "u2", topic: "2.3", difficulty: "moderate",
    stem: R`A $0.50$ kg ball is released from rest above the ground and falls. Air resistance is negligible. The mass of Earth is $6.0 \times 10^{24}$ kg.`,
    question: R`What is the magnitude of the acceleration of Earth toward the ball just after release?`,
    choices: [R`$8.2 \times 10^{-25}$ m/s²`, R`$9.8$ m/s²`, R`$4.9$ m/s²`, R`$8.3 \times 10^{-26}$ m/s²`],
    why: [R`The ball's weight is $mg = (0.50)(9.8) = 4.9$ N. By the third law the ball pulls up on Earth with $4.9$ N, so $a = \dfrac{F}{M} = \dfrac{4.9}{6.0 \times 10^{24}} = 8.2 \times 10^{-25}$ m/s².`,
      R`$9.8$ m/s² is the ball's acceleration. Earth has the same force but a vastly larger mass.`,
      R`$4.9$ is the force in newtons, not an acceleration. It was not divided by Earth's mass.`,
      R`$8.3 \times 10^{-26}$ m/s² is the mass ratio $\dfrac{0.50}{6.0 \times 10^{24}}$. The force, $4.9$ N, was left out.`], answer: 0 },
  { id: "q23-m6", type: "mcq", skill: "u2", topic: "2.3", difficulty: "easy",
    stem: R`A small magnet exerts an attractive force of $0.080$ N on a paper clip.`,
    question: R`What force does the paper clip exert on the magnet?`,
    choices: [R`$0.080$ N, directed toward the clip`, R`$0.080$ N, directed away from the clip`, R`Less than $0.080$ N, because the clip has less mass`, R`More than $0.080$ N, because the magnet has more mass`],
    why: [R`The clip exerts a force on the magnet equal in magnitude to the magnet's force on the clip, and opposite in direction. The magnet's force on the clip points toward the magnet, so the clip's force on the magnet points toward the clip.`,
      R`A repulsive force would mean the pair does not attract. The clip's force on the magnet is also an attraction, so it points toward the clip.`,
      R`The pair is equal even though the clip has less mass.`,
      R`The magnet's larger mass does not make its partner force larger. The pair is equal.`], answer: 0 },
  { id: "q23-f1a", type: "frq", skill: "u2", topic: "2.3", set: "q23-s4", part: "(a)",
    prompt: R`State the magnitude and direction of the force exerted by the crate on the student, and name the law that determines it.`,
    rows: [{ name: "Force", earns: R`States $30$ N, directed opposite to the student's push on the crate (backward on the student).` },
      { name: "Law", earns: R`Names Newton's third law (the forces of an interaction pair are equal in magnitude and opposite in direction).` }],
    solution: R`The crate exerts a force of $30$ N on the student, directed opposite to the student's push. This follows from Newton's third law: the force of the student on the crate and the force of the crate on the student are an interaction pair.` },
  { id: "q23-f1b", type: "frq", skill: "u2", topic: "2.3", set: "q23-s4", part: "(b)",
    prompt: R`Determine the magnitude of the acceleration of the student and of the crate, and explain why the accelerations are different even though the forces are equal in magnitude.`,
    rows: [{ name: "Accelerations", earns: R`Uses $a = \dfrac{F_{net}}{m}$ to obtain $0.50$ m/s² for the student and $1.5$ m/s² for the crate.` },
      { name: "Explanation", earns: R`Explains that the same magnitude of net force acts on objects of different mass, so the object with less mass (the crate) has the greater acceleration.` }],
    solution: R`Student: $a = \dfrac{30}{60} = 0.50$ m/s². Crate: $a = \dfrac{30}{20} = 1.5$ m/s². The force on each object has the same magnitude, $30$ N, but the acceleration is the net force divided by the object's own mass, so the crate, with less mass, accelerates more.` },
];
export default { forms: [{ id: "q23", name: "Topic 2.3 Quiz: Newton's Third Law", group: "Unit 2: Force and Translational Dynamics", items }] };

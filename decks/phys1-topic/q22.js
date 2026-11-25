// AP Physics 1 topic quiz 2.2: forces and free-body diagrams.
import { scene } from "../../diagrams.js";
const R = String.raw;

const rad = (d) => (d * Math.PI) / 180;
const arr = (x, y, angle, len, label) => ({ arrow: { from: [x, y], to: [x + len * Math.cos(rad(angle)), y + len * Math.sin(rad(angle))], label } });
// four labeled panels in a 2 by 2 grid; each panel is { letter, items(cx, cy) } drawn around its center
const panels4 = (alt, list, pw = 210, ph = 170) => {
  const items = [];
  list.forEach((p, i) => {
    const ox = 10 + (i % 2) * (pw + 10), oy = 10 + (i < 2 ? ph + 10 : 0);
    items.push({ line: { from: [ox, oy], to: [ox + pw, oy] } }, { line: { from: [ox + pw, oy], to: [ox + pw, oy + ph] } }, { line: { from: [ox + pw, oy + ph], to: [ox, oy + ph] } }, { line: { from: [ox, oy + ph], to: [ox, oy] } },
      { label: { x: ox + 14, y: oy + ph - 16, text: p.letter } }, ...p.items(ox + pw / 2, oy + ph / 2));
  });
  return scene({ width: 2 * pw + 30, height: 2 * ph + 30, alt, items });
};
const puck = (letter, forces) => ({ letter, items: (cx, cy) => [{ dot: { x: cx, y: cy, r: 4 } }, ...forces.map(([a, l, t]) => arr(cx, cy, a, l, t))] });
const puckPanels = () => panels4("Four free-body diagrams of a hockey puck, each a dot with arrows. A: an upward arrow N and a downward arrow W of equal length. B: the same two arrows plus a rightward arrow labeled force of motion. C: only a downward arrow W. D: an upward arrow N that is longer than the downward arrow W.", [
  puck("A", [[90, 50, "N"], [-90, 50, "W"]]), puck("B", [[90, 50, "N"], [-90, 50, "W"], [0, 60, "F"]]),
  puck("C", [[-90, 50, "W"]]), puck("D", [[90, 60, "N"], [-90, 40, "W"]])].reduce((acc, p, i) => (acc.push({ ...p, letter: "ABCD"[i] }), acc), []));
// block on a 30 degree incline pulled up the slope: each panel lists [angle, length, label]
const slope = (letter, forces) => ({ letter, items: (cx, cy) => {
  const a = rad(30), t = [Math.cos(a), Math.sin(a)], n = [-Math.sin(a), Math.cos(a)], s = [cx - 13 * n[0], cy - 13 * n[1]];
  return [{ line: { from: [s[0] - 95 * t[0], s[1] - 95 * t[1]], to: [s[0] + 95 * t[0], s[1] + 95 * t[1]] } }, { rect: { x: cx, y: cy, w: 34, h: 22, rot: 30 } }, { dot: { x: cx, y: cy, r: 3 } }, ...forces.map(([ang, l, lab]) => arr(cx, cy, ang, l, lab))];
} });
const W = 80, Nn = 69, Fr = 14;
const slopePanels = () => panels4("Four free-body diagrams of a block on a rough incline that rises to the right at 30 degrees, each drawn from the center of the block. A: weight straight down of length 80, normal force perpendicular to the incline of length 69, tension up the slope of length 64, friction down the slope of length 14. B: the same as A but the tension is shorter, length 36. C: the same as A but the normal force points straight up. D: the same as A but the weight arrow points into the incline, perpendicular to the surface, instead of straight down.", [
  slope("A", [[270, W, "W"], [120, Nn, "N"], [30, 64, "T"], [210, Fr, "f"]]), slope("B", [[270, W, "W"], [120, Nn, "N"], [30, 36, "T"], [210, Fr, "f"]]),
  slope("C", [[270, W, "W"], [90, Nn, "N"], [30, 64, "T"], [210, Fr, "f"]]), slope("D", [[300, W, "W"], [120, Nn, "N"], [30, 64, "T"], [210, Fr, "f"]])], 230, 215);
const pushed = () => scene({ width: 360, height: 200, alt: "A box of mass m on a horizontal table. A force F, drawn at an angle theta below the horizontal, pushes on the upper left corner of the box and points down and to the right.", items: [
  { ground: { from: [20, 70], to: [340, 70] } }, { rect: { x: 220, y: 92, w: 60, h: 44, label: "m" } },
  { arrow: { from: [110, 154], to: [190, 108], label: "F", at: "tail", dx: -4, dy: 4 } }, { line: { from: [110, 154], to: [160, 154], dash: true } }, { arc: { x: 110, y: 154, r: 38, from: -30, to: 0, label: "θ" } }] });
const handBlocks = () => scene({ width: 440, height: 150, alt: "A hand pushes block A to the right. Block A touches block B on its right. Both blocks rest on a horizontal table.", items: [
  { ground: { from: [10, 50], to: [430, 50] } }, { rect: { x: 190, y: 74, w: 70, h: 48, label: "A" } }, { rect: { x: 260, y: 74, w: 70, h: 48, label: "B" } },
  { arrow: { from: [70, 74], to: [150, 74] } }, { label: { x: 110, y: 94, text: "push" } }, { label: { x: 40, y: 74, text: "hand" } }] });

export const sets = {
  "q22-s1": { name: "A puck on ice", label: "Diagrams", intro: R`A hockey puck slides to the right across a level sheet of ice. Friction and air resistance are negligible. Four free-body diagrams are shown, each with the puck as a dot.`, sources: [{ title: "", blocks: [{ svg: puckPanels() }] }] },
  "q22-s2": { name: "A box pushed at an angle", label: "Setup", intro: R`A hand pushes on a box of mass $m$ with a force of magnitude $F$ directed at an angle $\theta$ below the horizontal. The box rests on a table and does not move.`, sources: [{ title: "", blocks: [{ svg: pushed() }] }] },
  "q22-s3": { name: "Two touching blocks", label: "Setup", intro: R`A hand pushes block A to the right. Block A pushes block B, and both blocks speed up to the right along a table with negligible friction.`, sources: [{ title: "", blocks: [{ svg: handBlocks() }] }] },
  "q22-s4": { name: "A block pulled up a slope", label: "Diagrams", intro: R`A rope parallel to a rough incline pulls a block up the incline. The block is speeding up. Four free-body diagrams of the block are shown. The arrow lengths show the relative sizes of the forces.`, sources: [{ title: "", blocks: [{ svg: slopePanels() }] }] },
  "q22-s5": { name: "A suitcase pulled on a level floor", label: "Free response", intro: R`A $5.0$ kg suitcase is pulled along a level floor by a strap that makes an angle of $40^\circ$ above the horizontal. The suitcase moves at constant velocity.`, sources: [{ title: "", blocks: [{ p: R`The floor exerts a friction force on the suitcase.` }] }] },
};

const items = [
  { id: "q22-m1", type: "mcq", skill: "u2", topic: "2.2", difficulty: "easy", set: "q22-s1",
    question: R`Which diagram correctly shows the forces on the puck?`,
    choices: ["Diagram A", "Diagram B", "Diagram C", "Diagram D"],
    why: [R`Only two forces act on the puck: the weight $W$ down and the normal force $N$ up from the ice. The puck moves at constant velocity, so the two arrows have equal length.`,
      R`Diagram B adds a force to the right "of motion." Nothing pushes the puck forward. A moving object needs no force to keep moving.`,
      R`Diagram C leaves out the normal force of the ice, which must balance the weight.`,
      R`In Diagram D the normal force is longer than the weight. The net force would be upward, and the puck would accelerate off the ice.`], answer: 0 },
  { id: "q22-m2", type: "mcq", skill: "u2", topic: "2.2", difficulty: "easy",
    stem: R`A student sits on a chair that rests on the floor.`,
    question: R`Which of the following forces does NOT belong on the free-body diagram of the chair?`,
    choices: [R`The force of the chair on the student`, R`The downward force of the student on the chair`, R`The upward force of the floor on the chair`, R`The gravitational force of Earth on the chair`],
    why: [R`A free-body diagram shows only forces exerted on the chair. The force of the chair on the student is exerted on the student, so it belongs on the student's diagram.`,
      R`The student pushes down on the chair, so this force acts on the chair and belongs on its diagram.`,
      R`The floor pushes up on the chair with a normal force, which acts on the chair.`,
      R`Earth pulls on the chair, which is the chair's weight.`], answer: 0 },
  { id: "q22-m3", type: "mcq", skill: "u2", topic: "2.2", difficulty: "moderate", set: "q22-s2",
    question: R`Which expression gives the magnitude of the normal force the table exerts on the box?`,
    choices: [R`$mg + F\sin\theta$`, R`$mg - F\sin\theta$`, R`$mg + F\cos\theta$`, R`$mg$`],
    why: [R`The box does not accelerate vertically. Taking up as positive, $N - mg - F\sin\theta = 0$, so $N = mg + F\sin\theta$. The push has a downward component $F\sin\theta$.`,
      R`$mg - F\sin\theta$ treats the vertical component of the push as if it pointed up.`,
      R`$mg + F\cos\theta$ uses the horizontal component of the push. The vertical component is $F\sin\theta$ for an angle measured from the horizontal.`,
      R`$mg$ ignores the push. The push has a downward component, so the table must support more than the weight.`], answer: 0 },
  { id: "q22-m4", type: "mcq", skill: "u2", topic: "2.2", difficulty: "moderate", set: "q22-s3",
    question: R`Which list gives all of the forces exerted on block B?`,
    choices: [R`Its weight, the normal force of the table, and the force of A on B`,
      R`Its weight, the normal force of the table, the force of A on B, and the force of the hand`,
      R`Its weight, the normal force of the table, and a forward force due to its motion`,
      R`Its weight, the weight of A, the normal force of the table, and the force of A on B`],
    why: [R`Block B is pulled down by Earth, pushed up by the table, and pushed to the right by block A, which touches it. These are all of the interactions of B with other objects.`,
      R`The hand touches only block A. Its force acts on A, not on B.`,
      R`There is no force "due to motion." Forces are interactions with other objects, and the only horizontal interaction of B is with A.`,
      R`The weight of A is a force exerted on A, not on B. A's weight reaches B only through the force A exerts on B.`], answer: 0 },
  { id: "q22-m5", type: "mcq", skill: "u2", topic: "2.2", difficulty: "difficult", set: "q22-s4",
    question: R`Which diagram correctly shows the forces on the block?`,
    choices: ["Diagram A", "Diagram B", "Diagram C", "Diagram D"],
    why: [R`The weight points straight down, the normal force is perpendicular to the incline and shorter than the weight (it balances only $W\cos 30^\circ$), friction points down the slope opposing the motion, and the tension up the slope is longer than $W\sin 30^\circ + f$, so the net force is up the slope.`,
      R`In Diagram B the tension $T = 36$ is less than $W\sin 30^\circ + f = 40 + 14 = 54$ in the same units. The net force would point down the slope, and the block would not speed up.`,
      R`In Diagram C the normal force is drawn straight up. A surface exerts a normal force perpendicular to the surface.`,
      R`In Diagram D the weight is drawn perpendicular to the incline. Gravity always pulls straight down.`], answer: 0 },
  { id: "q22-m6", type: "mcq", skill: "u2", topic: "2.2", difficulty: "moderate",
    stem: R`A $1.5$ kg book rests on a horizontal table. A student presses straight down on the book with a force of $6.0$ N, and the book stays at rest.`,
    question: R`What is the magnitude of the normal force the table exerts on the book?`,
    choices: [R`$20.7$ N`, R`$8.7$ N`, R`$14.7$ N`, R`$6.0$ N`],
    why: [R`The book is at rest, so the forces balance vertically: $N = mg + 6.0 = (1.5)(9.8) + 6.0 = 20.7$ N.`,
      R`$8.7$ N subtracts the push, $14.7 - 6.0$, as if it pointed up.`,
      R`$14.7$ N is the book's weight alone, which ignores the downward push.`,
      R`$6.0$ N is the force of the student only. The table also supports the book's weight.`], answer: 0 },
  { id: "q22-f1a", type: "frq", skill: "u2", topic: "2.2", set: "q22-s5", part: "(a)",
    prompt: R`On a dot representing the suitcase, draw and label the forces exerted on the suitcase. Draw each force as a single arrow starting at the dot, with the relative lengths consistent with constant velocity.`,
    rows: [{ name: "Forces and directions", earns: R`Draws and labels four arrows from the dot: the weight (or gravitational force) straight down, the normal force straight up, the force of the strap directed $40^\circ$ above the horizontal in the direction of motion, and the friction force horizontal and opposite to the motion. No extra forces (such as a "force of motion") appear.` },
      { name: "Relative lengths", earns: R`Draws the horizontal component of the strap force equal to the friction force, and the normal force shorter than the weight, so that the vertical forces balance with the vertical component of the strap force.` }],
    solution: R`The diagram is a dot with four arrows. The weight points straight down and is the longest vertical arrow. The normal force points straight up and is shorter than the weight. The strap force points up and forward at $40^\circ$ above the horizontal. The friction force points backward, horizontal, and its length equals the horizontal component of the strap force. Nothing is drawn for the motion itself.` },
  { id: "q22-f1b", type: "frq", skill: "u2", topic: "2.2", set: "q22-s5", part: "(b)",
    prompt: R`Is the magnitude of the normal force on the suitcase greater than, less than, or equal to the magnitude of its weight? Justify your answer.`,
    rows: [{ name: "Comparison", earns: R`States that the normal force is less than the weight.` },
      { name: "Justification", earns: R`Explains that the vertical forces balance, $N + F_T\sin 40^\circ = mg$, so the upward component of the strap force supports part of the weight and the floor supports less.` }],
    solution: R`The normal force is less than the weight. The suitcase has no vertical acceleration, so $N + F_T\sin 40^\circ = mg$. The strap pulls up with a vertical component, so the floor needs to supply only $N = mg - F_T\sin 40^\circ$, which is less than $mg$.` },
];
export default { forms: [{ id: "q22", name: "Topic 2.2 Quiz: Forces and Free-Body Diagrams", group: "Unit 2: Force and Translational Dynamics", items }] };

// AP Physics 1 topic quiz 5.5: Rotational equilibrium.
import { scene, beam } from "../../diagrams.js";
const R = String.raw;
const one = (blocks, title = "") => [{ title, blocks }];
const mc = (n, difficulty, o) => ({ id: `q55-m${n}`, type: "mcq", skill: "u5", topic: "5.5", difficulty, ...o, answer: 0 });
const fr = (id, part, set, o) => ({ id: `q55-${id}`, type: "frq", skill: "u5", topic: "5.5", set, part, ...o });

const balanceRod = () => beam({ length: 100, pivot: 20, tick: 10, unit: "cm", items: [{ at: 0, mass: "5.0 kg" }, { at: 60, mass: "m" }],
  alt: "A light rod 100 centimeters long rests on a pivot at the 20 centimeter mark. A 5.0 kilogram mass hangs from the left end of the rod at the 0 centimeter mark. A mass labeled m hangs from the 60 centimeter mark." });
const cabinet = () => scene({ width: 380, height: 230, alt: "A cabinet 0.80 meters wide and 2.0 meters tall stands on a floor. A horizontal force F pushes to the right on the left side of the cabinet at a height of 1.5 meters above the floor. The lower right corner of the cabinet is marked as the edge it tips about.", items: [
  { ground: { from: [40, 40], to: [340, 40] } }, { rect: { x: 220, y: 110, w: 56, h: 140 } }, { dot: { x: 248, y: 40, r: 4 } }, { label: { x: 300, y: 56, text: "tips about", anchor: "start" } },
  { arrow: { from: [110, 145], to: [190, 145], label: "F", at: "tail" } }, { line: { from: [64, 40], to: [64, 145], dash: true } }, { label: { x: 58, y: 92, text: "1.5 m", anchor: "end" } }, { label: { x: 220, y: 20, text: "0.80 m" } }] });
const pipe = () => scene({ width: 400, height: 230, alt: "A horizontal pipe 3.0 meters long. Worker A lifts straight up on the left end. Worker B lifts straight up at a point 2.4 meters from the left end, which is 0.60 meters from the right end. A downward arrow at the center of the pipe is labeled 300 newtons.", items: [
  { rect: { x: 200, y: 140, w: 300, h: 10 } }, { arrow: { from: [50, 70], to: [50, 133], label: "F_A", at: "tail" } }, { arrow: { from: [290, 70], to: [290, 133], label: "F_B", at: "tail" } },
  { arrow: { from: [200, 200], to: [200, 147], label: "300 N", at: "tail" } }, { line: { from: [50, 36], to: [290, 36] } }, { label: { x: 170, y: 20, text: "2.4 m" } }, { line: { from: [290, 36], to: [350, 36] } }, { label: { x: 320, y: 20, text: "0.60 m" } }] });
const plank = () => beam({ length: 3.0, pivot: 1.0, tick: 0.5, unit: "m", items: [{ at: 0, mass: "m" }, { at: 3.0, mass: "2.0 kg" }],
  alt: "A uniform plank 3.0 meters long rests on a pivot 1.0 meter from its left end. A mass labeled m hangs from the left end of the plank. A 2.0 kilogram mass hangs from the right end." });
const carScales = () => scene({ width: 420, height: 230, alt: "A car seen from the side, facing right, with its front wheel on a scale on the right and its rear wheel on a scale on the left. The distance between the axles is 2.8 meters. The scale under the front wheel is labeled 8600 newtons.", items: [
  { rect: { x: 210, y: 112, w: 250, h: 40 } }, { circle: { x: 140, y: 82, r: 16 } }, { circle: { x: 280, y: 82, r: 16 } },
  { rect: { x: 140, y: 60, w: 54, h: 10 } }, { rect: { x: 280, y: 60, w: 54, h: 10 } }, { label: { x: 280, y: 38, text: "8600 N" } }, { label: { x: 140, y: 38, text: "rear scale" } },
  { line: { from: [140, 160], to: [280, 160] } }, { label: { x: 210, y: 176, text: "2.8 m" } }, { label: { x: 210, y: 112, text: "1400 kg" } }] });
const boardRocks = () => scene({ width: 420, height: 200, alt: "A uniform board 4.0 meters long rests on two supports. The left support is under the left end of the board. The right support is 3.0 meters from the left end, so the right end of the board overhangs. A child stands on the board 2.5 meters from the left end.", items: [
  { rect: { x: 220, y: 100, w: 320, h: 10 } }, { pivot: { x: 60, y: 95, size: 30 } }, { pivot: { x: 300, y: 95, size: 30 } }, { rect: { x: 260, y: 130, w: 24, h: 40, label: "" } }, { label: { x: 260, y: 160, text: "child" } },
  { line: { from: [60, 40], to: [300, 40] } }, { label: { x: 180, y: 24, text: "3.0 m" } }, { line: { from: [60, 52], to: [260, 52], dash: true } }, { label: { x: 160, y: 66, text: "2.5 m" } }] });

export const sets = {
  "q55-s1": { name: "A balanced rod", label: "Diagram", intro: R`A light rod rests on a pivot $20$ cm from its left end, as shown. A $5.0$ kg mass hangs from the left end, and a mass $m$ hangs $60$ cm from the left end. The rod is at rest and horizontal.`, sources: one([{ svg: balanceRod() }]) },
  "q55-s2": { name: "A tall cabinet", label: "Diagram", intro: R`A uniform cabinet of mass $60$ kg is $0.80$ m wide and $2.0$ m tall. It stands on a rough floor. A person pushes horizontally on the cabinet with a force $F$ at a height of $1.5$ m, as shown. The floor is rough enough that the cabinet does not slide.`, sources: one([{ svg: cabinet() }]) },
  "q55-s3": { name: "Two workers carrying a pipe", label: "Diagram", intro: R`Two workers carry a uniform pipe of length $3.0$ m and weight $300$ N. Worker A lifts at the left end. Worker B lifts at a point $0.60$ m from the right end. Both lift straight up, and the pipe is at rest and horizontal.`, sources: one([{ svg: pipe() }]) },
  "q55-s4": { name: "A plank on a pivot", label: "Diagram", intro: R`A uniform plank of mass $6.0$ kg and length $3.0$ m rests on a pivot $1.0$ m from its left end, as shown. A mass $m$ hangs from the left end of the plank, and a $2.0$ kg mass hangs from the right end. The plank is at rest and horizontal.`, sources: one([{ svg: plank() }]) },
  "q55-s5": { name: "A car on two scales", label: "Diagram", intro: R`A car of mass $1400$ kg rests on two platform scales, one under the front wheels and one under the rear wheels. The distance between the front axle and the rear axle is $2.8$ m. The scale under the front wheels reads $8600$ N.`, sources: one([{ svg: carScales() }]) },
  "q55-s6": { name: "A board on two rocks", label: "Free response", intro: R`A uniform board of mass $20$ kg and length $4.0$ m rests on two rocks. The left rock is under the left end of the board. The right rock is $3.0$ m from the left end. A child of mass $20$ kg stands on the board $2.5$ m from the left end, as shown. The board is at rest.`, sources: one([{ svg: boardRocks() }]) },
};

const items = [
  mc(1, "easy", { set: "q55-s1", question: "What is the value of $m$?",
    choices: [R`$2.5$ kg`, R`$10$ kg`, R`$1.7$ kg`, R`$5.0$ kg`],
    why: [R`The rod is at rest, so the torques about the pivot balance: $(5.0)g(0.20) = mg(0.40)$, which gives $m = 2.5$ kg.`, R`This inverts the ratio of the distances, $(5.0)(0.40)/(0.20)$.`, R`This measures the distance of $m$ from the left end, $0.60$ m, instead of from the pivot.`, R`This assumes the two masses must be equal.`] }),
  mc(2, "easy", { stem: "A rigid object is at rest and stays at rest.", question: "Which of the following must be true?",
    choices: ["The net force and the net torque are both zero.", "The net force is zero, but the net torque can have any value.", "The net torque is zero, but the net force can have any value.", "Each force on it is balanced by an equal and opposite force at the same point."],
    why: [R`An object that stays at rest has no linear acceleration and no angular acceleration. The net force is zero, and the net torque is zero about every point.`, R`A nonzero net torque would give the object an angular acceleration, so it would not stay at rest.`, R`A nonzero net force would give the object a linear acceleration, so it would not stay at rest.`, R`Equilibrium does not require forces to act at the same point. A seesaw balances with forces at different points.`] }),
  mc(3, "moderate", { set: "q55-s2", question: "What is the smallest force $F$ that makes the cabinet begin to tip?",
    choices: [R`$157$ N`, R`$314$ N`, R`$118$ N`, R`$588$ N`],
    why: [R`The cabinet begins to tip about its lower right edge, where the floor's force acts. The torque of $F$ equals the torque of the weight about that edge: $F(1.5) = (60)(9.8)(0.40)$, so $F = 157$ N.`, R`This uses the full width, $0.80$ m, as the lever arm of the weight. The weight acts at the center, $0.40$ m from the edge.`, R`This uses the height of the cabinet, $2.0$ m, as the lever arm of $F$, instead of the $1.5$ m height where the force is applied.`, R`This sets $F$ equal to the weight of the cabinet, and leaves out the lever arms.`] }),
  mc(4, "moderate", { set: "q55-s3", question: "What force does worker B exert on the pipe?",
    choices: [R`$188$ N`, R`$150$ N`, R`$113$ N`, R`$375$ N`],
    why: [R`Take torques about the left end. The weight acts at the center, $1.5$ m from that end, and worker B lifts $2.4$ m from it: $F_B(2.4) = (300)(1.5)$, so $F_B = 188$ N.`, R`This splits the weight equally between the two workers. They are not the same distance from the center.`, R`This is the force of worker A, $300 - 188$.`, R`This places the weight at the right end of the pipe, $3.0$ m from the left end, instead of at the center.`] }),
  mc(5, "moderate", { set: "q55-s4", question: "What is the value of $m$?",
    choices: [R`$7.0$ kg`, R`$4.0$ kg`, R`$13.0$ kg`, R`$9.0$ kg`],
    why: [R`The plank's weight acts at its center, $0.50$ m to the right of the pivot. Torques about the pivot: $m g(1.0) = (6.0)g(0.50) + (2.0)g(2.0)$, so $m = 3.0 + 4.0 = 7.0$ kg.`, R`This leaves out the torque of the plank's own weight.`, R`This measures the plank's center of mass $1.5$ m from the pivot, instead of $0.50$ m.`, R`This measures the $2.0$ kg mass $3.0$ m from the pivot, instead of $2.0$ m.`] }),
  mc(6, "difficult", { set: "q55-s5", question: "How far is the center of mass of the car from the rear axle?",
    choices: [R`$1.76$ m`, R`$1.04$ m`, R`$1.40$ m`, R`$0.627$ m`],
    why: [R`The weight is $(1400)(9.8) = 13\,720$ N. Take torques about the rear axle, where the rear scale pushes: $(8600)(2.8) = (13\,720)x$, so $x = 1.76$ m.`, R`This is the distance from the front axle, $2.8 - 1.76$.`, R`This assumes the center of mass is halfway between the axles, which would make the two scales read the same.`, R`This is the fraction of the weight on the front scale, $8600/13\,720$, without multiplying by the wheelbase.`] }),
  fr("f1a", "(a)", "q55-s6", { prompt: R`Calculate the magnitude of the force that the right rock exerts on the board.`,
    rows: [{ name: "Torque equation", earns: R`Writes that the net torque about the left rock is zero, with the weights of the board and the child acting at $2.0$ m and $2.5$ m, and the force of the right rock acting at $3.0$ m.` },
      { name: "Force", earns: R`Solves $F_R(3.0) = (196)(2.0) + (196)(2.5)$ and obtains $F_R = 294$ N.` }],
    solution: R`The board is at rest, so the net torque about the left rock is zero. The left rock's force has zero lever arm. $F_R(3.0) = (20)(9.8)(2.0) + (20)(9.8)(2.5) = 882$ N·m, so $F_R = 294$ N.` }),
  fr("f1b", "(b)", "q55-s6", { prompt: R`The child walks slowly toward the right end of the board. Does the force exerted by the right rock increase, decrease, or stay the same? Justify your answer.`,
    rows: [{ name: "Claim", earns: R`States that the force exerted by the right rock increases.` },
      { name: "Justification", earns: R`States that the torque of the child's weight about the left rock increases because its lever arm increases, so the right rock, whose lever arm stays $3.0$ m, must exert a larger force to keep the net torque zero.` }],
    solution: R`The force increases. About the left rock, the child's weight has a larger lever arm as the child moves right, so its torque grows. The right rock's lever arm stays $3.0$ m, so $F_R$ must grow to keep the net torque equal to zero.` }),
];
export default { forms: [{ id: "q55", name: "Topic 5.5 Quiz: Rotational Equilibrium", group: "Unit 5: Torque and Rotational Dynamics", items }] };

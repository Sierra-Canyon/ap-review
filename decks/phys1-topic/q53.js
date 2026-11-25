// AP Physics 1 topic quiz 5.3: Torque.
import { scene, beam } from "../../diagrams.js";
const R = String.raw;
const one = (blocks, title = "") => [{ title, blocks }];
const mc = (n, difficulty, o) => ({ id: `q53-m${n}`, type: "mcq", skill: "u5", topic: "5.3", difficulty, ...o, answer: 0 });
const fr = (id, part, set, o) => ({ id: `q53-${id}`, type: "frq", skill: "u5", topic: "5.3", set, part, ...o });

const divingBoard = () => beam({ length: 3.0, pivot: 0, tick: 0.5, unit: "m", items: [{ at: 2.4, force: "down", label: "500 N" }],
  alt: "A horizontal diving board 3.0 meters long is held at its left end by a support. A downward force arrow labeled 500 newtons acts on the board at the 2.4 meter mark, measured from the support." });
const steering = () => scene({ width: 340, height: 270, alt: "A steering wheel of radius 0.19 meters seen from the front. A force of 12 newtons acts tangent to the rim at the right side and points up. A second force of 12 newtons acts tangent to the rim at the left side and points down. A dashed line from the center to the top of the rim is labeled 0.19 meters.", items: [
  { circle: { x: 170, y: 135, r: 84, fill: "dash" } }, { dot: { x: 170, y: 135, r: 3 } }, { line: { from: [170, 135], to: [170, 219], dash: true } }, { label: { x: 196, y: 180, text: "0.19 m" } },
  { arrow: { from: [254, 135], to: [254, 205], label: "12 N", dx: 18 } }, { arrow: { from: [86, 135], to: [86, 65], label: "12 N", dx: -18 } }] });
const stone = () => scene({ width: 340, height: 260, alt: "A grindstone, a solid disk of radius 0.25 meters and mass 4.0 kilograms, seen from the front. A force of 8.0 newtons acts tangent to the rim at the right side and points up. A dashed line from the center to the bottom of the rim is labeled 0.25 meters.", items: [
  { circle: { x: 170, y: 130, r: 80, fill: "dash" } }, { dot: { x: 170, y: 130, r: 3 } }, { label: { x: 170, y: 144, text: "4.0 kg" } }, { line: { from: [170, 130], to: [170, 50], dash: true } }, { label: { x: 206, y: 90, text: "0.25 m" } },
  { arrow: { from: [250, 130], to: [250, 200], label: "8.0 N", dx: 18 } }] });
const boom = () => scene({ width: 360, height: 270, alt: "A horizontal boom 2.0 meters long is attached to a wall at its left end by a hinge. A cable attached to the right end of the boom pulls up and toward the wall with a force of 300 newtons. The cable makes an angle of 25 degrees with the vertical, which is shown as a dashed line.", items: [
  { ground: { from: [60, 230], to: [60, 40] } }, { rect: { x: 170, y: 120, w: 220, h: 10 } }, { pivot: { x: 60, y: 120, kind: "pin" } }, { label: { x: 170, y: 96, text: "2.0 m" } },
  { line: { from: [280, 120], to: [280, 235], dash: true } }, { arrow: { from: [280, 120], to: [237, 214], label: "300 N", dx: -4, dy: 4 } }, { arc: { x: 280, y: 120, r: 54, from: 90, to: 115, label: "25°" } }] });

export const sets = {
  "q53-s1": { name: "A diving board", label: "Diagram", intro: R`A diver of weight $500$ N stands on a diving board that is held by a support at its left end, as shown. Ignore the weight of the board.`, sources: one([{ svg: divingBoard() }]) },
  "q53-s2": { name: "A steering wheel", label: "Diagram", intro: R`A driver turns a steering wheel of radius $0.19$ m by pushing on opposite sides of the rim with two forces of the same magnitude, each tangent to the rim, as shown.`, sources: one([{ svg: steering() }]) },
  "q53-s3": { name: "Three forces on a lever", label: "Table", intro: R`Three forces act on a lever that can turn about a fixed pivot. The table gives the magnitude of each force, the distance from the pivot to the point where it acts, the angle between the force and the line from the pivot to that point, and the sense in which the force tends to turn the lever.`,
    sources: one([{ table: { head: ["Force", "Magnitude (N)", "Distance from pivot (m)", "Angle (degrees)", "Tends to turn the lever"], rows: [["A", "10", "0.40", "90", "counterclockwise"], ["B", "20", "0.30", "30", "clockwise"], ["C", "8.0", "0.50", "0", "counterclockwise"]] } }]) },
  "q53-s6": { name: "A grindstone", label: "Diagram", intro: R`A grindstone is a uniform solid disk of mass $4.0$ kg and radius $0.25$ m. It starts from rest on a frictionless axle through its center. A constant force of $8.0$ N is applied tangent to its rim, as shown. A solid disk has rotational inertia $\tfrac12 MR^2$.`, sources: one([{ svg: stone() }]) },
  "q53-s4": { name: "A boom and a cable", label: "Diagram", intro: R`A horizontal boom of length $2.0$ m is attached to a wall by a hinge at its left end. A cable pulls on the right end of the boom with a force of $300$ N, as shown.`, sources: one([{ svg: boom() }]) },
  "q53-s5": { name: "A deck hatch", label: "Free response", intro: R`A uniform hatch of mass $20$ kg and length $1.5$ m is hinged along its lower edge on a deck. The hatch is propped open at an angle of $30^\circ$ above the horizontal.`,
    sources: one([{ p: R`The hatch can turn about the hinge. Treat it as a thin uniform board.` }]) },
};

const items = [
  mc(1, "easy", { question: "Which of the following is a unit of torque?",
    choices: [R`N·m`, R`N·m/s`, R`kg·m/s`, R`N/m²`],
    why: [R`Torque is a force times a distance, $\tau = rF\sin\theta$, so its units are newton meters.`, R`These are the units of power, which is energy per second.`, R`These are the units of linear momentum.`, R`These are the units of pressure, which is force per area.`] }),
  mc(2, "easy", { set: "q53-s1", question: "What is the magnitude of the torque that the diver's weight exerts about the support?",
    choices: [R`$1200$ N·m`, R`$1500$ N·m`, R`$600$ N·m`, R`$208$ N·m`],
    why: [R`The force is perpendicular to the board and acts $2.4$ m from the support: $\tau = rF = (2.4)(500) = 1200$ N·m.`, R`This uses the full length of the board, $3.0$ m, as the lever arm.`, R`This uses half of the $2.4$ m distance, $1.2$ m, as the lever arm.`, R`This divides the force by the distance, $500/2.4$.`] }),
  mc(3, "moderate", { set: "q53-s2", question: "What is the magnitude of the net torque that the two forces exert about the center of the wheel?",
    choices: [R`$4.6$ N·m`, R`$2.3$ N·m`, R`$0$ N·m`, R`$9.1$ N·m`],
    why: [R`Each force is perpendicular to its lever arm, and both tend to turn the wheel counterclockwise. Each gives $(0.19)(12) = 2.28$ N·m, so the net torque is $2(2.28) = 4.6$ N·m.`, R`This is the torque of one force. The other force adds the same amount in the same sense.`, R`This treats the forces as canceling because they are equal and opposite. Equal and opposite forces cancel in the net force, but their torques add here.`, R`This uses the diameter, $0.38$ m, as the lever arm of each force.`] }),
  mc(4, "moderate", { set: "q53-s6", stem: R`The force acts for $3.0$ s.`, question: "What is the angular speed of the grindstone at the end of the $3.0$ s?",
    choices: [R`$48$ rad/s`, R`$24$ rad/s`, R`$96$ rad/s`, R`$192$ rad/s`],
    why: [R`$\tau = rF = (0.25)(8.0) = 2.0$ N·m and $I = \tfrac12(4.0)(0.25)^2 = 0.125$ kg·m². Then $\alpha = \tau/I = 16$ rad/s² and $\omega = \alpha t = (16)(3.0) = 48$ rad/s.`, R`This uses $MR^2$ for the rotational inertia, which doubles $I$ and halves $\alpha$.`, R`This uses the diameter, $0.50$ m, as the lever arm, which doubles the torque.`, R`This uses the force, $8.0$ N, in place of the torque: $\alpha = F/I = 64$ rad/s².`] }),
  mc(5, "moderate", { set: "q53-s3", question: "What is the net torque on the lever about the pivot?",
    choices: [R`$1.0$ N·m counterclockwise`, R`$1.0$ N·m clockwise`, R`$7.0$ N·m counterclockwise`, R`$1.2$ N·m clockwise`],
    why: [R`Use $\tau = rF\sin\theta$. A: $(0.40)(10)\sin 90^\circ = 4.0$ N·m counterclockwise. B: $(0.30)(20)\sin 30^\circ = 3.0$ N·m clockwise. C: $(0.50)(8.0)\sin 0^\circ = 0$. The net torque is $4.0 - 3.0 = 1.0$ N·m counterclockwise.`, R`This has the correct size and the wrong sense, from subtracting the counterclockwise torque from the clockwise one.`, R`This adds the three sizes, $4.0 + 3.0 + 0$, without giving force B a clockwise sign.`, R`This uses $\cos\theta$ in place of $\sin\theta$ for each force: $0 - 5.2 + 4.0$.`] }),
  mc(6, "difficult", { set: "q53-s4", question: "What is the magnitude of the torque that the cable exerts on the boom about the hinge?",
    choices: [R`$544$ N·m`, R`$254$ N·m`, R`$600$ N·m`, R`$272$ N·m`],
    why: [R`The angle given is measured from the vertical, so the angle between the cable and the boom is $90^\circ - 25^\circ = 65^\circ$. Then $\tau = rF\sin 65^\circ = (2.0)(300)(0.906) = 544$ N·m.`, R`This uses $\sin 25^\circ$, the sine of the angle from the vertical, as if it were the angle between the cable and the boom.`, R`This treats the cable force as perpendicular to the boom and leaves out the angle: $(2.0)(300)$.`, R`This uses a lever arm of $1.0$ m, the middle of the boom, with the correct angle factor.`] }),
  fr("f1a", "(a)", "q53-s5", { prompt: R`Calculate the magnitude of the torque that the weight of the hatch exerts about the hinge.`,
    rows: [{ name: "Lever arm", earns: R`Takes the weight to act at the center of the hatch, and uses a lever arm of $(L/2)\cos 30^\circ = 0.65$ m (or $\tau = r F\sin 60^\circ$ with $r = 0.75$ m).` },
      { name: "Torque", earns: R`Obtains $\tau = (20)(9.8)(0.65) \approx 127$ N·m, with units.` }],
    solution: R`The weight acts at the center, $0.75$ m from the hinge along the hatch. The weight points straight down, so the angle between the weight and the hatch is $60^\circ$. $\tau = rF\sin 60^\circ = (0.75)(196)(0.866) = 127$ N·m.` }),
  fr("f1b", "(b)", "q53-s5", { prompt: R`A person pulls on the free end of the hatch with a force of $90$ N perpendicular to the hatch, in the direction that tends to open it further. Calculate the magnitude of the net torque on the hatch about the hinge, and state whether the net torque tends to open or close the hatch.`,
    rows: [{ name: "Torque of the pull", earns: R`Obtains the torque of the pull, $(1.5)(90) = 135$ N·m, because the force is perpendicular to the hatch.` },
      { name: "Net torque", earns: R`Subtracts the torque of the weight from the torque of the pull, obtains about $7.7$ N·m, and states that it tends to open the hatch.` }],
    solution: R`The pull is perpendicular to the hatch at the end: $\tau = (1.5)(90) = 135$ N·m. It opposes the torque of the weight, $127$ N·m. The net torque is $135 - 127 = 7.7$ N·m, and it tends to open the hatch.` }),
];
export default { forms: [{ id: "q53", name: "Topic 5.3 Quiz: Torque", group: "Unit 5: Torque and Rotational Dynamics", items }] };

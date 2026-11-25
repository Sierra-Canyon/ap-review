// AP Physics 1 topic quiz 6.4: Conservation of angular momentum.
import { scene } from "../../diagrams.js";
const R = String.raw;
const one = (blocks, title = "") => [{ title, blocks }];

const puckTop = () => scene({ width: 340, height: 250, alt: "A top view of a horizontal table. A small hole at the center of a dashed circular path. A string runs from the hole to a puck on the circle, and a velocity arrow at the puck points along the circle, tangent to it. The radius is labeled r.",
  items: [
    { arc: { x: 150, y: 125, r: 95, from: 0, to: 359.9, dash: true } },
    { line: { from: [150, 125], to: [245, 125] } }, { dot: { x: 150, y: 125, r: 4 } }, { label: { x: 150, y: 105, text: "hole" } },
    { circle: { x: 245, y: 125, r: 12 } }, { arrow: { from: [245, 137], to: [245, 205], label: "v", kind: "velocity" } },
    { label: { x: 198, y: 138, text: "r" } },
  ] });

export const sets = {
  "q64-s1": { name: "A puck and a string through a hole", label: "Diagram", intro: R`A puck of mass $0.40$ kg moves in a horizontal circle on a frictionless table. It is attached to a string that passes through a small hole at the center of the circle. A person below the table slowly pulls the string down, so the radius of the puck's circle decreases. The puck starts at a radius of $0.60$ m with a speed of $2.0$ m/s.`, sources: one([{ svg: puckTop() }]) },
  "q64-s2": { name: "A satellite extends its booms", label: "Passage", intro: R`A satellite spins freely in space with a rotational inertia of $500$ kg·m² and an angular speed of $0.12$ rad/s. The satellite extends long booms, which increases its rotational inertia to $800$ kg·m². No external torque acts on the satellite.`, sources: one([{ p: R`The satellite turns about a fixed axis.` }]) },
  "q64-s3": { name: "A block on a turntable", label: "Free response", intro: R`A turntable is a uniform disk of mass $2.0$ kg and radius $0.15$ m, with a rotational inertia of $\tfrac12 MR^2$. It turns at $4.0$ rad/s on a frictionless vertical axle. A small block of mass $0.20$ kg rests on the turntable at its center and turns with it. A slight nudge sends the block sliding outward. Friction between the block and the turntable acts until the block stops sliding at the rim, where it then turns with the turntable.`,
    sources: one([{ p: R`Treat the block as a point mass. The nudge adds a negligible amount of energy and angular momentum.` }]) },
};

const items = [
  { id: "q64-m1", type: "mcq", skill: "u6", topic: "6.4", difficulty: "easy", set: "q64-s1",
    question: R`Which quantity of the puck remains constant as the string is pulled down?`,
    choices: [R`Its angular momentum about the hole`, R`Its total kinetic energy while it circles the hole`, R`Its angular speed while it circles the hole`, R`Its linear speed while it circles the hole`],
    why: [R`The string pulls the puck toward the hole, so the string's force passes through the hole and exerts no torque about it. With no net torque, the angular momentum about the hole is conserved.`,
      R`The person does work as the string is pulled, so the puck's kinetic energy changes.`,
      R`The angular speed increases as the radius shrinks, because $L = mr^2\omega$ stays the same while $r$ decreases.`,
      R`The speed increases as the radius shrinks, because $L = mvr$ stays the same while $r$ decreases.`], answer: 0 },
  { id: "q64-m2", type: "mcq", skill: "u6", topic: "6.4", difficulty: "easy", set: "q64-s2",
    question: R`What is the angular speed of the satellite after the booms extend?`,
    choices: [R`$0.075$ rad/s`, R`$0.19$ rad/s`, R`$0.12$ rad/s`, R`$0.047$ rad/s`],
    why: [R`With no external torque, $I_i\omega_i = I_f\omega_f$, so $\omega_f = (500)(0.12)/800 = 0.075$ rad/s.`,
      R`This multiplies by the ratio $I_f/I_i$ instead of $I_i/I_f$. A greater rotational inertia gives a smaller angular speed.`,
      R`This leaves the angular speed unchanged. Conservation of angular momentum keeps $I\omega$ constant, not $\omega$.`,
      R`This squares the ratio of the rotational inertias, $(500/800)^2$. Angular momentum depends on $I\omega$, not $I\omega^2$.`], answer: 0 },
  { id: "q64-m3", type: "mcq", skill: "u6", topic: "6.4", difficulty: "moderate",
    stem: R`Two small beads, each of mass $0.50$ kg, ride on a light horizontal rod that turns at $2.0$ rad/s about a vertical axis through its center. The beads start $0.60$ m from the axis, on opposite sides of it. Strings tied to the beads run down the hollow axle and are pulled together, so each bead moves to $0.20$ m from the axis. No external torque acts on the system.`,
    question: R`What is the angular speed of the rod after the beads move in?`,
    choices: [R`$18$ rad/s`, R`$6.0$ rad/s`, R`$0.22$ rad/s`, R`$2.0$ rad/s`],
    why: [R`The beads supply all the rotational inertia: $I_i = 2(0.50)(0.60)^2 = 0.36$ kg·m² and $I_f = 2(0.50)(0.20)^2 = 0.040$ kg·m². Then $\omega_f = \dfrac{I_i}{I_f}\omega_i = 9.0 \times 2.0 = 18$ rad/s.`,
      R`This uses a factor of $3$, the ratio of the distances. The rotational inertia depends on $r^2$, so the angular speed changes by $3^2 = 9$.`,
      R`This inverts the ratio, so the angular speed decreases. Moving the beads inward reduces the rotational inertia.`,
      R`This leaves the angular speed unchanged. Angular momentum is conserved, but the rotational inertia changes.`], answer: 0 },
  { id: "q64-m4", type: "mcq", skill: "u6", topic: "6.4", difficulty: "moderate",
    stem: R`A uniform disk of mass $M$ and radius $R$, with rotational inertia $\tfrac12 MR^2$, turns at angular speed $\omega_0$ on a frictionless vertical axle. A putty ball of mass $m$ moves tangentially at speed $v$ in the same direction as the rim and sticks to the rim. Treat the ball as a point mass.`,
    question: R`Which expression gives the angular speed of the disk and putty afterward?`,
    choices: [R`$\dfrac{MR\omega_0 + 2mv}{(M + 2m)R}$`, R`$\dfrac{MR\omega_0 + 2mv}{MR}$`, R`$\dfrac{M\omega_0}{M + 2m}$`, R`$\dfrac{MR\omega_0 + mv}{(M + m)R}$`],
    why: [R`The angular momentum about the axle is conserved: $\tfrac12 MR^2\omega_0 + mvR = \left(\tfrac12 MR^2 + mR^2\right)\omega$. Solving gives $\omega = \dfrac{MR\omega_0 + 2mv}{(M + 2m)R}$.`,
      R`This leaves the putty's rotational inertia, $mR^2$, out of the final angular momentum.`,
      R`This leaves out the angular momentum of the moving putty, $mvR$, before the collision.`,
      R`This gives the putty a rotational inertia of $\tfrac12 mR^2$, the formula for a disk. A ball stuck at the rim is a point mass at distance $R$, with rotational inertia $mR^2$.`], answer: 0 },
  { id: "q64-m5", type: "mcq", skill: "u6", topic: "6.4", difficulty: "moderate", set: "q64-s2",
    question: R`How does the satellite's rotational kinetic energy after the booms extend compare with its rotational kinetic energy before?`,
    choices: [R`It decreases to $\tfrac58$ of its original value.`, R`It increases to $\tfrac85$ of its original value, because $I$ increases.`, R`It is unchanged, because angular momentum is conserved.`, R`It decreases to $\tfrac{25}{64}$ of its original value.`],
    why: [R`With $L$ constant, $K = \dfrac{L^2}{2I}$, so $K_f/K_i = I_i/I_f = 500/800 = \tfrac58$. The kinetic energy decreases.`,
      R`This inverts the ratio. Kinetic energy at constant angular momentum is inversely proportional to the rotational inertia.`,
      R`Angular momentum is conserved, but kinetic energy is not. The rotational inertia increases, so the kinetic energy changes.`,
      R`This squares the ratio of the angular speeds, $(\omega_f/\omega_i)^2$, and forgets that the rotational inertia also changes.`], answer: 0 },
  { id: "q64-m6", type: "mcq", skill: "u6", topic: "6.4", difficulty: "difficult", set: "q64-s1",
    question: R`How much work does the person do on the puck while the radius decreases from $0.60$ m to $0.20$ m?`,
    choices: [R`$6.4$ J`, R`$7.2$ J`, R`$0.71$ J`, R`$64$ J`],
    why: [R`Angular momentum is conserved: $mv_ir_i = mv_fr_f$, so $v_f = (2.0)(0.60)/(0.20) = 6.0$ m/s. The work equals the change in kinetic energy: $\tfrac12 (0.40)(6.0)^2 - \tfrac12 (0.40)(2.0)^2 = 7.2 - 0.80 = 6.4$ J.`,
      R`This is the final kinetic energy. The work is the change in kinetic energy, final minus initial.`,
      R`This puts the radii in the wrong order, $v_f = v_i r_f/r_i = 0.67$ m/s, which gives a decrease in kinetic energy. The puck speeds up as the radius shrinks.`,
      R`This takes the speed to be proportional to $1/r^2$, giving $v_f = 18$ m/s. That is the scaling for the angular speed, not the speed.`], answer: 0 },
  { id: "q64-f1a", type: "frq", skill: "u6", topic: "6.4", set: "q64-s3", part: "(a)",
    prompt: R`Calculate the angular speed of the turntable after the block stops sliding at the rim.`,
    rows: [{ name: "Conservation law", earns: R`Applies conservation of angular momentum, with the rotational inertia of the system increasing from $\tfrac12 MR^2$ to $\tfrac12 MR^2 + mR^2$.` }, { name: "Angular speed", earns: R`Obtains $\omega = 3.3$ rad/s, with units.` }],
    solution: R`No external torque acts about the axle, so angular momentum is conserved. Initially only the turntable contributes, $I_i = \tfrac12 (2.0)(0.15)^2 = 0.0225$ kg·m². At the end $I_f = 0.0225 + (0.20)(0.15)^2 = 0.0270$ kg·m². Then $\omega_f = \dfrac{I_i\omega_i}{I_f} = \dfrac{(0.0225)(4.0)}{0.0270} = 3.3$ rad/s.` },
  { id: "q64-f1b", type: "frq", skill: "u6", topic: "6.4", set: "q64-s3", part: "(b)",
    prompt: R`Is the total kinetic energy of the turntable and block after the block stops sliding greater than, less than, or equal to the total kinetic energy before the nudge? Justify your answer.`,
    rows: [{ name: "Comparison", earns: R`States that the kinetic energy is less after.` }, { name: "Justification", earns: R`Explains that the angular momentum is the same but the rotational inertia is greater, so $K = L^2/2I$ is smaller, with the difference transferred to thermal energy by kinetic friction between the block and the turntable. (Calculating $0.18$ J before and $0.15$ J after also earns the point.)` }],
    solution: R`The kinetic energy is less after. Angular momentum $L$ is constant, and $K = L^2/(2I)$, so the greater rotational inertia gives a smaller kinetic energy. Numerically, $K_i = \tfrac12 (0.0225)(4.0)^2 = 0.18$ J and $K_f = \tfrac12 (0.0270)(3.33)^2 = 0.15$ J. The difference is transferred to thermal energy by kinetic friction while the block slides.` },
];

export default { forms: [{ id: "q64", group: "Unit 6: Energy and Momentum of Rotating Systems", name: "Topic 6.4 Quiz: Conservation of Angular Momentum", items }] };

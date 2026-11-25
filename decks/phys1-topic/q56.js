// AP Physics 1 topic quiz 5.6: Newton's second law in rotational form.
import { graph } from "../../plot.js";
import { scene } from "../../diagrams.js";
const R = String.raw;
const one = (blocks, title = "") => [{ title, blocks }];
const pics = (word, svgs) => svgs.map((s, i) => ({ title: `${word} ${"ABCD"[i]}`, blocks: [{ svg: s }] }));
const mc = (n, difficulty, o) => ({ id: `q56-m${n}`, type: "mcq", skill: "u5", topic: "5.6", difficulty, ...o, answer: 0 });
const fr = (id, part, set, o) => ({ id: `q56-${id}`, type: "frq", skill: "u5", topic: "5.6", set, part, ...o });

const wg = { x: [0, 6], y: [0, 8], step: { x: 1, y: 2 }, xname: "t (s)", yname: "ω (rad/s)", width: 300, height: 220 };
const omegaPics = [
  graph({ ...wg, segments: [[0, 4, 6, 4]], alt: "Angular velocity versus time. A horizontal line at 4 radians per second from 0 to 6 seconds." }),
  graph({ ...wg, fns: [{ f: (t) => (t * t) / 4.5, from: 0, to: 6 }], alt: "Angular velocity versus time. A curve that opens upward, starting at 0 at 0 seconds and reaching 8 radians per second at 6 seconds." }),
  graph({ ...wg, segments: [[0, 0, 6, 8]], alt: "Angular velocity versus time. A straight line rising from 0 at 0 seconds to 8 radians per second at 6 seconds." }),
  graph({ ...wg, segments: [[0, 8, 6, 0]], alt: "Angular velocity versus time. A straight line falling from 8 radians per second at 0 seconds to 0 at 6 seconds." }),
];
const twoForces = () => scene({ width: 360, height: 270, alt: "A uniform solid disk of radius 0.30 meters seen from the front, with an axle at its center. A force of 12 newtons acts tangent to the rim at the right side and points up. A force of 8.0 newtons acts tangent to the disk at a point halfway between the center and the rim on the left side and also points up.", items: [
  { circle: { x: 180, y: 135, r: 86, fill: "dash" } }, { dot: { x: 180, y: 135, r: 3 } }, { arrow: { from: [266, 135], to: [266, 205], label: "12 N", dx: 18 } },
  { arrow: { from: [137, 135], to: [137, 175], label: "8.0 N" } }, { line: { from: [180, 135], to: [180, 49], dash: true } }, { label: { x: 208, y: 90, text: "0.30 m" } }] });
const wheelsGraph = () => graph({ x: [0, 8.5], y: [0, 16], step: { x: 1, y: 2 }, xname: "τ (N·m)", yname: "α (rad/s²)", segments: [[0, 0, 7.5, 5], [0, 0, 7.5, 15]], dots: [[6, 4, "closed"], [6, 12, "closed"]], vlines: [{ x: 6, dash: true }], labels: [[7.8, 5, "P"], [7.8, 15, "Q"]],
  alt: "Graph of angular acceleration in radians per second squared versus net torque in newton meters for wheels P and Q. Both are straight lines through the origin. At a net torque of 6 newton meters, wheel P has an angular acceleration of 4 and wheel Q has an angular acceleration of 12." });
const rodForce = () => scene({ width: 400, height: 230, alt: "A uniform rod of length L seen from above lies on a table and can turn about a pin at its left end. A force F acts on the rod and points up the page, perpendicular to the rod, at a point three fourths of the way from the pin to the free end.", items: [
  { rect: { x: 190, y: 120, w: 260, h: 12 } }, { pivot: { x: 60, y: 120, kind: "pin" } }, { arrow: { from: [255, 60], to: [255, 112], label: "F", at: "tail" } },
  { line: { from: [60, 175], to: [255, 175] } }, { label: { x: 158, y: 190, text: "3L/4" } }, { line: { from: [60, 160], to: [60, 190] } }, { line: { from: [255, 160], to: [255, 190] } }] });

export const sets = {
  "q56-s1": { name: "A wheel with a constant torque", label: "Graphs", intro: R`A wheel is at rest at $t = 0$ when a constant net torque begins to act on it. The wheel turns about a fixed axle. Four graphs of the angular velocity $\omega$ of the wheel as a function of time $t$ are shown.`, sources: pics("Graph", omegaPics) },
  "q56-s2": { name: "A disk with two forces", label: "Diagram", intro: R`A uniform solid disk of mass $4.0$ kg and radius $0.30$ m turns on a frictionless axle through its center. Two forces, each tangent to the disk, act on it as shown. A solid disk has rotational inertia $\tfrac12 MR^2$.`, sources: one([{ svg: twoForces() }]) },
  "q56-s3": { name: "Two wheels and a torque", label: "Graph", intro: R`A student applies different constant net torques to each of two wheels, P and Q, and measures the angular acceleration of each wheel. The graph shows the results.`, sources: one([{ svg: wheelsGraph() }]) },
  "q56-s4": { name: "A rod on a table", label: "Diagram", intro: R`A uniform rod of mass $M$ and length $L$ lies on a horizontal, frictionless table and can turn about a vertical pin at its left end. The rod is shown from above. A force of magnitude $F$ directed along the table and perpendicular to the rod acts at a point $3L/4$ from the pin, as shown. The rotational inertia of a uniform rod about an axis through one end is $\tfrac13 ML^2$.`, sources: one([{ svg: rodForce() }]) },
  "q56-s5": { name: "A disk and a rope", label: "Free response", intro: R`A uniform solid disk of mass $2.0$ kg and radius $0.25$ m turns on a frictionless horizontal axle through its center. A light rope is wound around the rim of the disk. The disk starts from rest, and the rope is pulled with a constant tension of $6.0$ N for $3.0$ s. The rope does not slip. A solid disk has rotational inertia $\tfrac12 MR^2$.`,
    sources: one([{ p: R`The rope leaves the disk tangent to the rim.` }]) },
};

const items = [
  mc(1, "easy", { stem: R`A solid sphere of mass $4.0$ kg and radius $0.15$ m turns about a fixed axis through its center. A solid sphere has rotational inertia $\tfrac25 MR^2$. The net torque on the sphere is $0.18$ N·m.`, question: "What is the angular acceleration of the sphere?",
    choices: [R`$5.0$ rad/s²`, R`$4.0$ rad/s²`, R`$2.0$ rad/s²`, R`$0.20$ rad/s²`],
    why: [R`$I = \tfrac25(4.0)(0.15)^2 = 0.036$ kg·m², so $\alpha = \tau/I = 0.18/0.036 = 5.0$ rad/s².`, R`This uses $\tfrac12 MR^2$, the formula for a disk, which gives $I = 0.045$ kg·m².`, R`This uses $MR^2$, the formula for a hoop, which gives $I = 0.090$ kg·m².`, R`This inverts the second law: $I/\tau = 0.036/0.18$.`] }),
  mc(2, "easy", { set: "q56-s1", question: "Which graph could show the angular velocity of the wheel?",
    choices: ["Graph C", "Graph A", "Graph B", "Graph D"],
    why: [R`A constant net torque gives a constant angular acceleration, $\alpha = \tau/I$. Starting from rest, $\omega = \alpha t$, which is a straight line through the origin with a positive slope.`, R`This shows a constant angular velocity that is not zero, which would need zero angular acceleration and an initial angular velocity.`, R`This shows an angular acceleration that grows with time, which would need a torque that grows with time.`, R`This shows an angular velocity that falls, but the wheel starts from rest and the torque speeds it up.`] }),
  mc(3, "moderate", { set: "q56-s2", question: "What is the magnitude of the angular acceleration of the disk?",
    choices: [R`$13.3$ rad/s²`, R`$26.7$ rad/s²`, R`$20.0$ rad/s²`, R`$6.67$ rad/s²`],
    why: [R`The forces tend to turn the disk in opposite senses. $\tau_{net} = (12)(0.30) - (8.0)(0.15) = 3.6 - 1.2 = 2.4$ N·m. $I = \tfrac12(4.0)(0.30)^2 = 0.18$ kg·m². So $\alpha = 2.4/0.18 = 13.3$ rad/s².`, R`This adds the two torques, $3.6 + 1.2$, although the forces turn the disk in opposite senses.`, R`This leaves out the $8.0$ N force: $3.6/0.18$.`, R`This uses the full radius, $0.30$ m, as the lever arm of the $8.0$ N force: $(3.6 - 2.4)/0.18$.`] }),
  mc(4, "moderate", { stem: R`A wheel has rotational inertia $I$ about its axle and starts from rest. A constant net torque $\tau$ acts on the wheel for a time $t$.`, question: "What is the angular displacement of the wheel during this time?",
    choices: [R`$\dfrac{\tau t^2}{2I}$`, R`$\dfrac{\tau t^2}{I}$`, R`$\dfrac{I t^2}{2\tau}$`, R`$\dfrac{\tau t}{I}$`],
    why: [R`$\alpha = \tau/I$ and $\theta = \tfrac12\alpha t^2$, so $\theta = \dfrac{\tau t^2}{2I}$.`, R`This leaves out the factor of $\tfrac12$ in $\theta = \tfrac12\alpha t^2$.`, R`This inverts the second law, using $\alpha = I/\tau$.`, R`This is the angular velocity, $\omega = \alpha t$, not the angular displacement.`] }),
  mc(5, "moderate", { set: "q56-s3", question: R`What is the ratio $I_P/I_Q$ of the rotational inertias of the wheels?`,
    choices: [R`$3.0$`, R`$0.33$`, R`$0.11$`, R`$0.50$`],
    why: [R`Since $I = \tau/\alpha$, at $\tau = 6.0$ N·m wheel P has $I_P = 6.0/4.0 = 1.5$ kg·m² and wheel Q has $I_Q = 6.0/12 = 0.50$ kg·m². The ratio is $3.0$.`, R`This is $I_Q/I_P$, the inverse of the ratio asked for.`, R`This is the inverse ratio, $I_Q/I_P$, squared.`, R`This is the rotational inertia of wheel Q alone, $0.50$ kg·m².`] }),
  mc(6, "difficult", { set: "q56-s4", question: R`What is the angular acceleration of the rod just after the force is applied?`,
    choices: [R`$\dfrac{9F}{4ML}$`, R`$\dfrac{3F}{4ML}$`, R`$\dfrac{3F}{ML}$`, R`$\dfrac{9F}{ML}$`],
    why: [R`The force is perpendicular to the rod, so $\tau = F(3L/4)$. With $I = \tfrac13 ML^2$, $\alpha = \tau/I = \dfrac{9F}{4ML}$.`, R`This uses $ML^2$ for the rotational inertia, which treats the rod's mass as if it were all at the free end.`, R`This uses $L$ as the lever arm, as if the force acted at the free end.`, R`This uses $\tfrac{1}{12}ML^2$, the rotational inertia about the center of the rod, instead of about the end.`] }),
  fr("f1a", "(a)", "q56-s5", { prompt: R`Calculate the angular acceleration of the disk.`,
    rows: [{ name: "Torque and inertia", earns: R`Uses $\tau = rF = (0.25)(6.0) = 1.5$ N·m and $I = \tfrac12 MR^2 = 0.0625$ kg·m².` },
      { name: "Angular acceleration", earns: R`Uses $\tau = I\alpha$ and obtains $\alpha = 24$ rad/s².` }],
    solution: R`$\tau = rT = (0.25)(6.0) = 1.5$ N·m. $I = \tfrac12(2.0)(0.25)^2 = 0.0625$ kg·m². $\alpha = \tau/I = 1.5/0.0625 = 24$ rad/s².` }),
  fr("f1b", "(b)", "q56-s5", { prompt: R`Calculate the angular speed of the disk at the end of the $3.0$ s.`,
    rows: [{ name: "Angular speed", earns: R`Uses $\omega = \omega_0 + \alpha t$ with $\omega_0 = 0$ and obtains $\omega = 72$ rad/s.` }],
    solution: R`$\omega = \alpha t = (24)(3.0) = 72$ rad/s.` }),
  fr("f1c", "(c)", "q56-s5", { prompt: R`The disk is replaced by a thin hoop with the same mass and radius, and the rope is pulled with the same tension. Is the angular acceleration greater than, less than, or equal to the angular acceleration of the disk? Justify your answer.`,
    rows: [{ name: "Claim and justification", earns: R`States that the angular acceleration is less, because the torque is the same and the hoop's rotational inertia, $MR^2$, is greater than the disk's, $\tfrac12 MR^2$, so $\alpha = \tau/I$ is smaller (half as large).` }],
    solution: R`Less. The torque $rT$ is unchanged, but $I$ doubles from $\tfrac12 MR^2$ to $MR^2$, so $\alpha = \tau/I$ is half as large, $12$ rad/s².` }),
];
export default { forms: [{ id: "q56", name: "Topic 5.6 Quiz: Newton's Second Law in Rotational Form", group: "Unit 5: Torque and Rotational Dynamics", items }] };

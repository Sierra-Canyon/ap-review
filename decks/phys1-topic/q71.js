// AP Physics 1 topic quiz 7.1: Defining simple harmonic motion.
import { graph } from "../../plot.js";
const R = String.raw;
const one = (blocks, title = "") => [{ title, blocks }];

// F = -40 x, a cart on a horizontal spring
const fxLine = graph({ width: 360, height: 240, x: [-0.3, 0.3], y: [-12, 12], step: { x: 0.1, y: 4 }, xname: "x (m)", yname: "F (N)", segments: [[-0.3, 12, 0.3, -12]],
  alt: "Net force versus position for a cart. A straight line through the origin with negative slope runs from positive 12 newtons at x equal to negative 0.30 meters to negative 12 newtons at x equal to positive 0.30 meters. At x equal to 0.20 meters the force is negative 8 newtons." });
// x = 0.10 cos(pi t / 2), four labeled points at t = 0.5, 1.5, 2.5, 3.5 s
const xt = (t) => 0.1 * Math.cos((Math.PI * t) / 2);
const xtGraph = graph({ width: 400, height: 240, x: [0, 4], y: [-0.15, 0.15], step: { x: 0.5, y: 0.05 }, labelEvery: 2, xname: "t (s)", yname: "x (m)", fns: [{ f: xt, from: 0, to: 4 }],
  dots: [[0.5, xt(0.5), "closed"], [1.5, xt(1.5), "closed"], [2.5, xt(2.5), "closed"], [3.5, xt(3.5), "closed"]],
  labels: [[0.5, xt(0.5) + 0.025, "A"], [1.5, xt(1.5) - 0.025, "B"], [2.5, xt(2.5) - 0.025, "C"], [3.5, xt(3.5) + 0.025, "D"]],
  alt: "Position versus time for a block. The curve starts at the maximum of 0.10 meters at 0 seconds, crosses 0 at 1.0 second, reaches the minimum of negative 0.10 meters at 2.0 seconds, crosses 0 at 3.0 seconds, and returns to 0.10 meters at 4.0 seconds. Point A is at 0.5 seconds on the falling part above the axis, point B is at 1.5 seconds on the falling part below the axis, point C is at 2.5 seconds on the rising part below the axis, and point D is at 3.5 seconds on the rising part above the axis." });

export const sets = {
  "q71-s1": { name: "Force on a cart at different positions", label: "Graph", intro: R`The graph shows the net force $F$ on a cart attached to a horizontal spring as a function of the cart's position $x$, where $x = 0$ is the equilibrium position.`, sources: one([{ svg: fxLine }]) },
  "q71-s2": { name: "Force measurements", label: "Data table", intro: R`A student uses a force sensor to measure the net force on a cart on a track at four positions to the right of the equilibrium position $x = 0$. Positive $x$ and positive force are to the right.`,
    sources: one([{ table: { head: ["$x$ (m)", "$0.05$", "$0.10$", "$0.15$", "$0.20$"], rows: [["$F$ (N)", "$-0.80$", "$-1.6$", "$-2.4$", "$-3.2$"]] } }]) },
  "q71-s3": { name: "Position of a block", label: "Graph", intro: R`A block oscillates on a horizontal spring. The graph shows its position $x$ as a function of time, with $x$ positive to the right. Points A, B, C, and D mark four instants.`, sources: one([{ svg: xtGraph }]) },
  "q71-s4": { name: "A cart on an air track", label: "Free response", intro: R`A $0.60$ kg cart on a nearly frictionless air track is attached to a spring. A student measures the force the spring exerts on the cart at two positions. When the cart is $0.050$ m to the right of its equilibrium position, the spring pulls the cart to the left with a force of $3.0$ N. When the cart is $0.100$ m to the left of its equilibrium position, the spring pushes the cart to the right with a force of $6.0$ N.`,
    sources: one([{ p: R`The spring obeys Hooke's law, and air resistance is negligible.` }]) },
};

const mc = (id, difficulty, o) => ({ id: `q71-${id}`, type: "mcq", skill: "u7", topic: "7.1", difficulty, ...o, answer: 0 });
const items = [
  mc("m1", "easy", { question: R`An object undergoes simple harmonic motion along a line with its equilibrium position at $x = 0$ and an amplitude $A$. At which position is the object's speed zero while the magnitude of its acceleration is greatest?`,
    choices: [R`$x = \pm A$`, R`$x = 0$`, R`$x = \pm A/2$`, R`$x = \pm A/\sqrt{2}$`],
    why: [R`The restoring force $F = -kx$ and the acceleration are greatest in magnitude where $|x|$ is greatest, at $x = \pm A$. There the object reverses direction, so its speed is zero.`,
      R`At equilibrium the net force and the acceleration are zero, and the speed is greatest.`,
      R`At half the amplitude the object is still moving, and the acceleration is only half its maximum.`,
      R`At this position the object is still moving, and the acceleration is about $71\%$ of its maximum. Speed is zero only at the turning points.`] }),
  mc("m2", "easy", { set: "q71-s1", question: R`What is the spring constant of the spring?`,
    choices: [R`$40$ N/m`, R`$8.0$ N/m`, R`$1.6$ N/m`, R`$0.025$ N/m`],
    why: [R`The line is $F = -kx$. At $x = 0.20$ m the force is $-8$ N, so $k = 8/0.20 = 40$ N/m.`,
      R`This reads the force at $x = 0.20$ m but does not divide by the displacement.`,
      R`This multiplies the force by the displacement, $(8)(0.20) = 1.6$, instead of dividing.`,
      R`This divides the displacement by the force, $0.20/8 = 0.025$. The spring constant is force divided by displacement.`] }),
  mc("m3", "moderate", { set: "q71-s2", question: R`Do these measurements indicate that the cart's motion is simple harmonic?`,
    choices: [R`Yes, because the net force is proportional to the displacement and points toward the equilibrium position`,
      R`Yes, because the magnitude of the net force increases as the cart moves farther from the equilibrium position`,
      R`No, because the net force on the cart is not constant as the cart moves from one position to another`,
      R`No, because the net force is negative at every position listed in the table for the cart`],
    why: [R`The ratio $F/x$ is $-16$ N/m at every position, so $F$ is proportional to $x$. The force is negative where $x$ is positive, so it points toward $x = 0$. That is a restoring force of the form $F = -kx$.`,
      R`An increasing magnitude is necessary but not sufficient. A force that grows as $x^2$ also increases with distance. Here $F/x$ is constant, which is the test.`,
      R`Simple harmonic motion does not need a constant force. The force changes with position, and it must change in proportion to the displacement.`,
      R`All four positions are to the right of equilibrium, so a force to the left (negative) is directed toward equilibrium, as a restoring force must be.`] }),
  mc("m4", "moderate", { stem: R`A $0.40$ kg block hangs at rest from a vertical spring and stretches it by $0.049$ m. The block is then pulled down an additional $0.050$ m and released from rest. The spring obeys Hooke's law, and air resistance is negligible. Use $g = 9.8$ m/s².`,
    question: R`What are the magnitude and direction of the net force on the block at the instant it is released?`,
    choices: [R`$4.0$ N, upward`, R`$7.9$ N, upward`, R`$3.9$ N, downward`, R`$0.080$ N, upward`],
    why: [R`The spring constant is $k = mg/d = (0.40)(9.8)/0.049 = 80$ N/m. At equilibrium the spring force cancels the weight, so the net force depends only on the extra stretch: $F = ky = (80)(0.050) = 4.0$ N, upward.`,
      R`This is the total spring force, $k(0.049 + 0.050) = 7.9$ N. The weight, $3.9$ N downward, must be subtracted to get the net force.`,
      R`This is the weight alone. The spring also pulls on the block.`,
      R`This subtracts the weight from $ky$, $4.0 - 3.9$. The weight is already balanced by the part of the spring force due to the first $0.049$ m of stretch.`] }),
  mc("m5", "difficult", { set: "q71-s3", question: R`At which labeled point is the block moving in the positive $x$ direction while the net force on the block is directed in the negative $x$ direction?`,
    choices: ["Point D", "Point A", "Point B", "Point C"],
    why: [R`At point D the position is positive, so the restoring force points in the negative $x$ direction. The curve is rising, so the block is moving in the positive $x$ direction.`,
      R`At point A the position is positive, so the force is in the negative $x$ direction, but the curve is falling, so the block is moving in the negative $x$ direction.`,
      R`At point B the position is negative, so the force is in the positive $x$ direction, and the block is moving in the negative $x$ direction. Neither condition is met.`,
      R`At point C the block is moving in the positive $x$ direction, but the position is negative, so the force is in the positive $x$ direction.`] }),
  mc("m6", "moderate", { stem: R`A ball bounces elastically on a hard floor and repeats the same motion every $1.2$ s.`,
    question: R`Which of the following does simple harmonic motion require that the ball's motion lacks?`,
    choices: ["A restoring force proportional to the displacement", "A speed that stays constant during the motion", "An acceleration that stays constant during the motion", "A period that depends on the mass of the object"],
    why: [R`Simple harmonic motion requires a net force proportional to the displacement from an equilibrium position and directed toward it. The ball's net force in the air is constant, and during contact it is a large force from the floor.`,
      R`Neither simple harmonic motion nor the ball's motion has constant speed. The speed changes continuously in both.`,
      R`Simple harmonic motion does not have constant acceleration, since the force changes with position. The ball in the air does have constant acceleration, so this is not something it lacks.`,
      R`The period of simple harmonic motion on a spring does depend on the mass, but for a pendulum it does not, so this is not a requirement.`] }),
  { id: "q71-f1a", type: "frq", skill: "u7", topic: "7.1", set: "q71-s4", part: "(a)",
    prompt: R`Use the two measurements to show that the cart's motion can be simple harmonic.`,
    rows: [{ name: "Ratio", earns: R`Calculates $F/|x|$ for both measurements and shows that it is the same, $60$ N/m, both times.` },
      { name: "Conclusion", earns: R`States that the force is proportional to the displacement and directed opposite to it, toward equilibrium, which is the condition for simple harmonic motion.` }],
    solution: R`For the first measurement $F/|x| = 3.0/0.050 = 60$ N/m. For the second, $F/|x| = 6.0/0.100 = 60$ N/m. The force has the same ratio to the displacement at both positions and points opposite to the displacement each time, so $F = -kx$ with $k = 60$ N/m. A restoring force proportional to the displacement is the condition for simple harmonic motion.` },
  { id: "q71-f1b", type: "frq", skill: "u7", topic: "7.1", set: "q71-s4", part: "(b)",
    prompt: R`The cart is held $0.080$ m to the left of its equilibrium position and released from rest. Calculate the magnitude of the cart's acceleration at the instant of release, and give its direction.`,
    rows: [{ name: "Setup", earns: R`Applies Newton's second law with the spring force, $a = kx/m$ (or $ma = kx$), with values substituted.` },
      { name: "Result", earns: R`Obtains $8.0$ m/s² directed to the right, toward the equilibrium position.` }],
    solution: R`The net force is the spring force, so $ma = kx$ and $a = \dfrac{kx}{m} = \dfrac{(60)(0.080)}{0.60} = 8.0$ m/s². The cart is to the left of equilibrium, so the acceleration is directed to the right, toward the equilibrium position.` },
];

export default { forms: [{ id: "q71", group: "Unit 7: Oscillations", name: "Topic 7.1 Quiz: Defining Simple Harmonic Motion", items }] };

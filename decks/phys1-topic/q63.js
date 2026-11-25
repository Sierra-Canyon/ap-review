// AP Physics 1 topic quiz 6.3: Angular momentum and angular impulse.
import { graph } from "../../plot.js";
import { scene } from "../../diagrams.js";
const R = String.raw;
const one = (blocks, title = "") => [{ title, blocks }];

const lGraph = () => graph({ x: [0, 10], y: [0, 10], step: { x: 1, y: 2 }, xname: "t (s)", yname: "L (kg·m²/s)", segments: [[0, 0, 4, 8], [4, 8, 6, 8], [6, 8, 10, 2]],
  alt: "Graph of the wheel's angular momentum in kilogram meters squared per second versus time in seconds. It rises in a straight line from 0 at 0 seconds to 8 at 4 seconds, stays at 8 until 6 seconds, then falls in a straight line to 2 at 10 seconds." });

const wheel = () => scene({ width: 360, height: 230, alt: "A wheel seen from the front with its axle at the center. A force arrow of 30 newtons starts at a point on the right side of the rim and points up and to the right. A dashed line extends the radius beyond the rim, and the angle between the dashed line and the force is marked 30 degrees.",
  items: [
    { circle: { x: 120, y: 110, r: 62 } }, { dot: { x: 120, y: 110, r: 4 } }, { line: { from: [120, 110], to: [182, 110] } },
    { label: { x: 150, y: 96, text: "R" } },
    { line: { from: [182, 110], to: [290, 110], dash: true } },
    { arrow: { from: [182, 110], to: [262, 156], label: "F = 30 N", kind: "force" } },
    { arc: { x: 182, y: 110, r: 52, from: 0, to: 30, label: "30°" } },
  ] });

export const sets = {
  "q63-s1": { name: "A spinning wheel", label: "Graph", intro: R`The graph shows the angular momentum of a wheel about its fixed axle as a function of time. Counterclockwise is positive.`, sources: one([{ svg: lGraph() }]) },
  "q63-s2": { name: "A force on a wheel", label: "Diagram", intro: R`A wheel of radius $R = 0.40$ m and rotational inertia $2.0$ kg·m² is at rest on a frictionless axle. A constant force of magnitude $30$ N is applied at the rim for $5.0$ s, in the direction shown.`, sources: one([{ svg: wheel() }]) },
  "q63-s3": { name: "A wind turbine rotor", label: "Free response", intro: R`A wind turbine rotor has a rotational inertia of $900$ kg·m² about its axle. The rotor starts from rest. A steady wind exerts a constant net torque of $150$ N·m on the rotor for $12$ s. Friction at the axle is negligible.`,
    sources: one([{ p: R`Treat the torque as the only torque on the rotor.` }]) },
};

const items = [
  { id: "q63-m1", type: "mcq", skill: "u6", topic: "6.3", difficulty: "easy",
    stem: R`A $0.20$ kg toy airplane on a tether flies in a horizontal circle of radius $0.80$ m at a constant speed of $3.0$ m/s.`,
    question: R`What is the magnitude of the airplane's angular momentum about the center of the circle?`,
    choices: [R`$0.48$ kg·m²/s`, R`$0.60$ kg·m²/s`, R`$1.4$ kg·m²/s`, R`$0.38$ kg·m²/s`],
    why: [R`For a point mass moving perpendicular to the radius, $L = mvr = (0.20)(3.0)(0.80) = 0.48$ kg·m²/s.`,
      R`This is the linear momentum, $mv$, with no factor of $r$. Angular momentum has units of kg·m²/s.`,
      R`This is $mv^2 r$, with the speed squared.`,
      R`This is $mr^2 v$, with the radius squared.`], answer: 0 },
  { id: "q63-m2", type: "mcq", skill: "u6", topic: "6.3", difficulty: "easy", set: "q63-s1",
    question: R`What is the magnitude of the net torque on the wheel from $t = 0$ to $t = 4.0$ s?`,
    choices: [R`$2.0$ N·m`, R`$8.0$ N·m`, R`$0.50$ N·m`, R`$32$ N·m`],
    why: [R`The net torque is the rate of change of angular momentum, the slope of the graph: $\tau = \Delta L/\Delta t = (8.0 - 0)/(4.0) = 2.0$ N·m.`,
      R`This reads the value of the angular momentum at $4.0$ s. The torque is the slope, not the value.`,
      R`This inverts the slope, $\Delta t/\Delta L$.`,
      R`This multiplies the angular momentum by the time. The torque is the change in angular momentum divided by the time.`], answer: 0 },
  { id: "q63-m3", type: "mcq", skill: "u6", topic: "6.3", difficulty: "moderate", set: "q63-s2",
    question: R`What is the angular speed of the wheel after $5.0$ s?`,
    choices: [R`$15$ rad/s`, R`$26$ rad/s`, R`$30$ rad/s`, R`$3.0$ rad/s`],
    why: [R`Only the component of the force perpendicular to the radius produces torque: $\tau = RF\sin 30^\circ = (0.40)(30)(0.50) = 6.0$ N·m. The angular impulse is $\tau\Delta t = I\omega$, so $\omega = (6.0)(5.0)/(2.0) = 15$ rad/s.`,
      R`This uses $\cos 30^\circ$ in place of $\sin 30^\circ$. The angle given is between the force and the radius, so the perpendicular component is $F\sin 30^\circ$.`,
      R`This uses the whole force, $\tau = RF = 12$ N·m, as if the force were perpendicular to the radius.`,
      R`This is the angular acceleration, $\tau/I = 3.0$ rad/s², with the time left out.`], answer: 0 },
  { id: "q63-m4", type: "mcq", skill: "u6", topic: "6.3", difficulty: "moderate",
    stem: R`A spacecraft's reaction wheel has a rotational inertia of $0.080$ kg·m² and spins at $3000$ rpm. A brake exerts a constant torque on the wheel and brings it to rest in $20$ s.`,
    question: R`What is the magnitude of the braking torque?`,
    choices: [R`$1.3$ N·m`, R`$12$ N·m`, R`$0.63$ N·m`, R`$0.20$ N·m`],
    why: [R`$\omega = 3000 \times 2\pi/60 = 314$ rad/s and $L = I\omega = 25.1$ kg·m²/s. The angular impulse $\tau\Delta t$ equals the change in $L$, so $\tau = 25.1/20 = 1.3$ N·m.`,
      R`This uses $3000$ as the angular speed in rad/s. The speed is $3000$ rpm, which is $314$ rad/s.`,
      R`This uses $\tfrac12 I\omega$, a half that belongs to kinetic energy and not to angular momentum.`,
      R`This treats $3000$ rpm as $50$ rad/s. It converts to revolutions per second but not to radians per second.`], answer: 0 },
  { id: "q63-m5", type: "mcq", skill: "u6", topic: "6.3", difficulty: "moderate",
    stem: R`A motor applies a torque to a spinner that is at rest, with rotational inertia $3.0$ kg·m². The torque increases at a steady rate from $0$ to $12$ N·m over $4.0$ s.`,
    question: R`What is the angular speed of the spinner at $t = 4.0$ s?`,
    choices: [R`$8.0$ rad/s`, R`$16$ rad/s`, R`$24$ rad/s`, R`$2.0$ rad/s`],
    why: [R`The angular impulse is the area under the torque-time graph, a triangle: $\tfrac12 (12)(4.0) = 24$ kg·m²/s. Then $\omega = L/I = 24/3.0 = 8.0$ rad/s.`,
      R`This uses the greatest torque for the whole time, $(12)(4.0)/3.0$. The torque was $12$ N·m only at the end.`,
      R`This is the angular impulse, $24$ kg·m²/s, and does not divide by the rotational inertia.`,
      R`This divides the average torque, $6.0$ N·m, by $I$ and leaves out the time.`], answer: 0 },
  { id: "q63-m6", type: "mcq", skill: "u6", topic: "6.3", difficulty: "difficult",
    stem: R`Two asteroids are uniform solid spheres made of the same rock, so they have the same density. Asteroid B has twice the radius of asteroid A. Both asteroids rotate about an axis through their centers with the same period.`,
    question: R`What is the ratio of the angular momentum of asteroid B to that of asteroid A?`,
    choices: [R`$32$`, R`$4$`, R`$8$`, R`$16$`],
    why: [R`For a solid sphere $L = I\omega = \tfrac25 mr^2\omega$. The same period means the same $\omega$. With the same density, $m \propto r^3$, so $L \propto r^5$ and the ratio is $2^5 = 32$.`,
      R`This treats the mass as the same and uses only $r^2$. A sphere with twice the radius has $8$ times the volume and the same density, so $8$ times the mass.`,
      R`This counts the factor of $8$ from the greater mass and leaves out the $r^2$ in the rotational inertia.`,
      R`This takes the mass to be proportional to the surface area, $r^2$, which gives $L \propto r^4$. Mass is proportional to volume, $r^3$.`], answer: 0 },
  { id: "q63-f1a", type: "frq", skill: "u6", topic: "6.3", set: "q63-s3", part: "(a)",
    prompt: R`Calculate the angular speed of the rotor after $12$ s.`,
    rows: [{ name: "Angular impulse", earns: R`Uses the angular impulse-momentum relation, $\tau\Delta t = I\omega$ (or $\Delta L = \tau\Delta t$ with $L_0 = 0$).` }, { name: "Angular speed", earns: R`Obtains $\omega = 2.0$ rad/s, with units.` }],
    solution: R`The angular impulse equals the change in angular momentum: $\tau\Delta t = I\omega - 0$. Then $\omega = \dfrac{\tau\Delta t}{I} = \dfrac{(150)(12)}{900} = 2.0$ rad/s.` },
  { id: "q63-f1b", type: "frq", skill: "u6", topic: "6.3", set: "q63-s3", part: "(b)",
    prompt: R`The same torque acts for $24$ s instead of $12$ s. By what factor is the rotor's final kinetic energy greater than in part (a)? Justify your answer.`,
    rows: [{ name: "Factor", earns: R`States that the final kinetic energy is $4$ times as great.` }, { name: "Justification", earns: R`Explains that the angular momentum, and so the angular speed, doubles when the time doubles, and the kinetic energy $\tfrac12 I\omega^2$ is proportional to $\omega^2$.` }],
    solution: R`The final kinetic energy is $4$ times as great. The angular impulse $\tau\Delta t$ doubles, so $L = I\omega$ doubles, and so does the angular speed. The kinetic energy $K = \tfrac12 I\omega^2$ is proportional to $\omega^2$, so it increases by a factor of $2^2 = 4$.` },
];

export default { forms: [{ id: "q63", group: "Unit 6: Energy and Momentum of Rotating Systems", name: "Topic 6.3 Quiz: Angular Momentum and Angular Impulse", items }] };

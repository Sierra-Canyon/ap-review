// AP Physics 1 topic quiz 2.5: Newton's second law.
import { graph } from "../../plot.js";
import { scene, incline, fbd } from "../../diagrams.js";
const R = String.raw;

const twoForces = () => fbd({ box: { label: "3.0 kg", w: 64 }, width: 380, forces: [{ angle: 0, length: 90, label: "20 N" }, { angle: 180, length: 36, label: "8.0 N" }],
  alt: "Free-body diagram of a 3.0 kilogram block on a frictionless horizontal surface with a 20 newton arrow to the right and a shorter 8.0 newton arrow to the left." });
const carVt = () => graph({ x: [0, 14], y: [0, 12], step: { x: 2, y: 2 }, xname: "t (s)", yname: "v (m/s)", segments: [[0, 0, 5, 10], [5, 10, 10, 10], [10, 10, 12.5, 0]],
  alt: "Graph of the car's velocity in meters per second versus time in seconds. The velocity rises in a straight line from 0 at 0 seconds to 10 at 5 seconds, stays at 10 until 10 seconds, then falls in a straight line to 0 at 12.5 seconds." });
const aVsInv = () => graph({ x: [0, 2.5], y: [0, 7], step: { x: 0.5, y: 1 }, labelEvery: 1, xname: "1/m (1/kg)", yname: "a (m/s²)", segments: [[0, 0, 2.2, 6.6]], dots: [[0.5, 1.5, "closed"], [1.0, 3.0, "closed"], [1.5, 4.5, "closed"], [2.0, 6.0, "closed"]],
  alt: "Graph of the acceleration a in meters per second squared versus the reciprocal of mass in inverse kilograms. Four data points lie on a straight line through the origin, passing through 1.0 and 3.0 and through 2.0 and 6.0." });
const liftBox = () => scene({ width: 300, height: 230, alt: "A person stands on a scale inside an elevator car. A downward arrow beside the elevator is labeled a equals 1.2 meters per second squared, showing the elevator speeding up while moving down.", items: [
  { rect: { x: 130, y: 115, w: 110, h: 150 } }, { rect: { x: 130, y: 128, w: 60, h: 28, label: "55 kg" } }, { line: { from: [90, 62], to: [170, 62] } }, { label: { x: 130, y: 76, text: "scale" } },
  { arrow: { from: [215, 150], to: [215, 90], kind: "velocity", label: "a = 1.2 m/s²", dx: 44 } }] });
const inclinePulley = () => {
  const a = (30 * Math.PI) / 180, t = [Math.cos(a), Math.sin(a)], n = [-Math.sin(a), Math.cos(a)], c = [150 + 12 * n[0], 103.5 + 12 * n[1]];
  return scene({ width: 340, height: 230, alt: "A block of mass m on a frictionless incline that rises to the right at angle theta. A string runs parallel to the incline from the block up to a pulley at the top right corner, then down to a hanging block of mass M.", items: [
    { ground: { from: [40, 40], to: [270, 40] } }, { line: { from: [40, 40], to: [260, 167] } }, { line: { from: [260, 40], to: [260, 167] } },
    { arc: { x: 40, y: 40, r: 40, from: 0, to: 30, label: "θ" } },
    { rect: { x: c[0], y: c[1], w: 44, h: 30, rot: 30, label: "m" } },
    { rope: { points: [[c[0] + 22 * t[0], c[1] + 22 * t[1]], [266, 186]] } }, { pulley: { x: 274, y: 184, r: 10 } },
    { rope: { points: [[284, 184], [284, 150]] } }, { rect: { x: 284, y: 130, w: 40, h: 36, label: "M" } }] });
};

export const sets = {
  "q25-s1": { name: "A block on a frictionless incline", label: "Setup", intro: R`A $5.0$ kg block slides down a frictionless incline that makes an angle of $37^\circ$ with the horizontal.`, sources: [{ title: "", blocks: [{ svg: incline({ angle: 37, block: { label: "5.0 kg" }, forces: [], labels: { angle: "37°" }, alt: "A block on a frictionless incline that rises to the right at 37 degrees. The block's mass is 5.0 kilograms." }) }] }] },
  "q25-s2": { name: "A block with two forces", label: "Diagram", intro: R`The free-body diagram shows the only horizontal forces on a $3.0$ kg block that rests on a horizontal surface. The vertical forces cancel.`, sources: [{ title: "", blocks: [{ svg: twoForces() }] }] },
  "q25-s3": { name: "Velocity of a car", label: "Graph", intro: R`A $1200$ kg car moves in a straight line along a horizontal road. The graph shows its velocity as a function of time.`, sources: [{ title: "", blocks: [{ svg: carVt() }] }] },
  "q25-s4": { name: "Acceleration versus 1/m", label: "Graph", intro: R`In a lab, a student applies the same constant net force to a cart and changes the cart's mass $m$ by adding blocks. The graph shows the measured acceleration $a$ as a function of $\dfrac{1}{m}$.`, sources: [{ title: "", blocks: [{ svg: aVsInv() }] }] },
  "q25-s5": { name: "A student in an elevator", label: "Setup", intro: R`A $55$ kg student stands on a bathroom scale in an elevator. The elevator starts moving downward and speeds up at $1.2$ m/s².`, sources: [{ title: "", blocks: [{ svg: liftBox() }] }] },
  "q25-s6": { name: "A block on an incline joined to a hanging block", label: "Setup", intro: R`A block of mass $m$ rests on a frictionless incline of angle $\theta$. A light string runs from it over a light, frictionless pulley to a hanging block of mass $M$. The blocks are released from rest, and block $M$ moves down.`, sources: [{ title: "", blocks: [{ svg: inclinePulley() }] }] },
  "q25-s7": { name: "Two carts joined by a string", label: "Free response", intro: R`A $6.0$ kg cart and a $3.0$ kg cart are joined by a light string and rest on a level, frictionless track. A horizontal force of $27$ N pulls on the $6.0$ kg cart, in the direction away from the $3.0$ kg cart. The string stays taut.`, sources: [{ title: "", blocks: [{ p: R`Both carts have the same acceleration.` }] }] },
};

const items = [
  { id: "q25-m1", type: "mcq", skill: "u2", topic: "2.5", difficulty: "easy", set: "q25-s1",
    question: R`What is the magnitude of the block's acceleration?`,
    choices: [R`$5.9$ m/s²`, R`$7.8$ m/s²`, R`$9.8$ m/s²`, R`$7.4$ m/s²`],
    why: [R`Only the component of the weight along the incline accelerates the block: $ma = mg\sin 37^\circ$, so $a = (9.8)(0.60) = 5.9$ m/s².`,
      R`$7.8$ m/s² is $g\cos 37^\circ$, the component of gravity perpendicular to the incline.`,
      R`$9.8$ m/s² is the acceleration in free fall. The incline's normal force cancels part of the weight.`,
      R`$7.4$ m/s² is $g\tan 37^\circ$, which has no basis in the force components.`], answer: 0 },
  { id: "q25-m2", type: "mcq", skill: "u2", topic: "2.5", difficulty: "easy", set: "q25-s2",
    question: R`What is the magnitude of the block's acceleration?`,
    choices: [R`$4.0$ m/s²`, R`$6.7$ m/s²`, R`$9.3$ m/s²`, R`$2.7$ m/s²`],
    why: [R`The net force is $20 - 8.0 = 12$ N to the right, so $a = \dfrac{12}{3.0} = 4.0$ m/s².`,
      R`$6.7$ m/s² uses only the $20$ N force, $\dfrac{20}{3.0}$.`,
      R`$9.3$ m/s² adds the two forces, $\dfrac{28}{3.0}$, though they point in opposite directions.`,
      R`$2.7$ m/s² uses only the $8.0$ N force, $\dfrac{8.0}{3.0}$.`], answer: 0 },
  { id: "q25-m3", type: "mcq", skill: "u2", topic: "2.5", difficulty: "moderate", set: "q25-s3",
    question: R`What is the magnitude of the net force on the car from $t = 10$ s to $t = 12.5$ s?`,
    choices: [R`$4800$ N`, R`$2400$ N`, R`$960$ N`, R`$12000$ N`],
    why: [R`The slope of the graph from $10$ s to $12.5$ s gives $a = \dfrac{0 - 10}{2.5} = -4.0$ m/s². Then $F_{net} = ma = (1200)(4.0) = 4800$ N, directed opposite to the velocity.`,
      R`$2400$ N is the net force from $0$ to $5$ s, where the slope is $2.0$ m/s². It is the wrong interval.`,
      R`$960$ N uses the whole $12.5$ s for the change in speed, $\dfrac{10}{12.5} = 0.80$ m/s². The braking takes only $2.5$ s.`,
      R`$12000$ N is the car's mass times its speed, $(1200)(10)$, which is not a force.`], answer: 0 },
  { id: "q25-m4", type: "mcq", skill: "u2", topic: "2.5", difficulty: "moderate", set: "q25-s4",
    question: R`What is the magnitude of the net force on the cart?`,
    choices: [R`$3.0$ N`, R`$0.33$ N`, R`$1.5$ N`, R`$6.0$ N`],
    why: [R`Newton's second law gives $a = F_{net}\left(\dfrac{1}{m}\right)$, so the slope of the line is the net force: $\dfrac{6.0 - 3.0}{2.0 - 1.0} = 3.0$ N.`,
      R`$0.33$ N is the reciprocal of the slope. Acceleration is the net force times $\dfrac{1}{m}$, so the slope is $F_{net}$, not $\dfrac{1}{F_{net}}$.`,
      R`$1.5$ N is the acceleration at $\dfrac{1}{m} = 0.50$ kg⁻¹, a point on the line and not the slope.`,
      R`$6.0$ N is the highest acceleration on the graph, read as a force. The slope, not a single value of $a$, equals the force.`], answer: 0 },
  { id: "q25-m5", type: "mcq", skill: "u2", topic: "2.5", difficulty: "moderate", set: "q25-s5",
    question: R`What does the scale read while the elevator speeds up?`,
    choices: [R`$473$ N`, R`$539$ N`, R`$605$ N`, R`$66.0$ N`],
    why: [R`Taking down as positive, $mg - N = ma$, so $N = m(g - a) = (55)(9.8 - 1.2) = 473$ N. The scale reads the normal force.`,
      R`$539$ N is the student's weight, $(55)(9.8)$. It would be the reading only if the elevator did not accelerate.`,
      R`$605$ N is $m(g + a)$, the reading when the acceleration is upward.`,
      R`$66.0$ N is $ma$, the net force. The scale reads the normal force, which also balances most of the weight.`], answer: 0 },
  { id: "q25-m6", type: "mcq", skill: "u2", topic: "2.5", difficulty: "difficult", set: "q25-s6",
    question: R`What is the magnitude of the acceleration of block $M$?`,
    choices: [R`$\dfrac{(M - m\sin\theta)\,g}{M + m}$`, R`$\dfrac{(M - m)\,g}{M + m}$`, R`$\dfrac{(M - m\cos\theta)\,g}{M + m}$`, R`$\dfrac{(M - m\sin\theta)\,g}{M}$`],
    why: [R`Treat the two blocks and the string as one system with mass $M + m$. The net force along the path is $Mg - mg\sin\theta$, so $a = \dfrac{(M - m\sin\theta)g}{M + m}$.`,
      R`This treats the setup as an Atwood machine and uses the full weight $mg$ of the block. Only the component $mg\sin\theta$ acts along the incline.`,
      R`This uses the component perpendicular to the incline, $mg\cos\theta$. The component along the incline is $mg\sin\theta$.`,
      R`This divides by $M$ alone. Both blocks accelerate, so the total mass $M + m$ is needed.`], answer: 0 },
  { id: "q25-f1a", type: "frq", skill: "u2", topic: "2.5", set: "q25-s7", part: "(a)",
    prompt: R`Determine the magnitude of the acceleration of the carts.`,
    rows: [{ name: "Second law for the system", earns: R`Applies Newton's second law to the two carts as one system: $F = (m_1 + m_2)a$, with the string's tension as an internal force.` },
      { name: "Acceleration", earns: R`Obtains $a = \dfrac{27}{9.0} = 3.0$ m/s².` }],
    solution: R`Treat both carts as one system of mass $9.0$ kg. The string's forces are internal. The only horizontal external force is $27$ N, so $a = \dfrac{27}{9.0} = 3.0$ m/s².` },
  { id: "q25-f1b", type: "frq", skill: "u2", topic: "2.5", set: "q25-s7", part: "(b)",
    prompt: R`Determine the tension in the string.`,
    rows: [{ name: "Second law for the rear cart", earns: R`Applies Newton's second law to the $3.0$ kg cart alone, where the only horizontal force on it is the tension: $T = m a$.` },
      { name: "Tension", earns: R`Obtains $T = (3.0)(3.0) = 9.0$ N.` }],
    solution: R`The tension is the only horizontal force on the $3.0$ kg cart, so $T = ma = (3.0)(3.0) = 9.0$ N.` },
];
export default { forms: [{ id: "q25", name: "Topic 2.5 Quiz: Newton's Second Law", group: "Unit 2: Force and Translational Dynamics", items }] };

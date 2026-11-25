// AP Physics 1 topic quiz 2.1: systems and center of mass.
import { atwood, scene } from "../../diagrams.js";
const R = String.raw;

const stick = () => {
  const x0 = 40, x1 = 400, sx = (d) => x0 + (d / 100) * (x1 - x0), items = [{ rect: { x: (x0 + x1) / 2, y: 100, w: x1 - x0, h: 10 } }, { line: { from: [x0, 50], to: [x1, 50] } }];
  for (let d = 0; d <= 100; d += 10) items.push({ line: { from: [sx(d), 50], to: [sx(d), 57] } }, { label: { x: sx(d), y: 36, text: String(d) } });
  items.push({ label: { x: x1 + 22, y: 36, text: "cm", anchor: "start" } }, { rect: { x: sx(90), y: 126, w: 40, h: 26, label: "clay" } });
  return scene({ width: 470, height: 160, alt: "A horizontal meterstick marked from 0 to 100 centimeters with a lump of clay stuck on top of it at the 90 centimeter mark.", items });
};
const grid = () => {
  const px = (x) => 50 + x * 48, py = (y) => 30 + y * 36, items = [{ arrow: { from: [px(0), py(0)], to: [px(6.3), py(0)], kind: "plain" } }, { arrow: { from: [px(0), py(0)], to: [px(0), py(6.2)], kind: "plain" } }, { label: { x: px(6.3) + 6, y: py(0) - 4, text: "x (m)", anchor: "start" } }, { label: { x: px(0) + 8, y: py(6.2) + 8, text: "y (m)", anchor: "start" } }];
  for (let k = 1; k <= 6; k++) items.push({ line: { from: [px(k), py(0)], to: [px(k), py(0) + 5] } }, { label: { x: px(k), y: py(0) - 14, text: String(k) } }, { line: { from: [px(0), py(k)], to: [px(0) + 5, py(k)] } }, { label: { x: px(0) - 14, y: py(k), text: String(k) } });
  for (const [x, y, m] of [[1, 2, "A 2.0 kg"], [5, 1, "B 3.0 kg"], [3, 5, "C 1.0 kg"]]) items.push({ circle: { x: px(x), y: py(y), r: 7 } }, { label: { x: px(x) + 12, y: py(y) + 12, text: m, anchor: "start" } });
  return scene({ width: 400, height: 280, alt: "A coordinate grid in meters. Particle A of 2.0 kilograms is at x equals 1.0 and y equals 2.0, particle B of 3.0 kilograms is at x equals 5.0 and y equals 1.0, and particle C of 1.0 kilogram is at x equals 3.0 and y equals 5.0.", items });
};

export const sets = {
  "q21-s1": { name: "A meterstick with clay", label: "Setup", intro: R`A uniform meterstick of mass $0.30$ kg has a lump of clay of mass $0.10$ kg stuck to it at the $90$ cm mark.`, sources: [{ title: "", blocks: [{ svg: stick() }] }] },
  "q21-s2": { name: "Three particles", label: "Setup", intro: R`Three small particles lie in a plane. Their masses and positions are shown on the grid.`, sources: [{ title: "", blocks: [{ svg: grid() }] }] },
  "q21-s3": { name: "A pulley with two blocks", label: "Setup", intro: R`A $3.0$ kg block and a $1.0$ kg block hang from a light string over a light, frictionless pulley. The blocks are released from rest, and the $3.0$ kg block moves down.`, sources: [{ title: "", blocks: [{ svg: atwood({ m1: "3.0 kg", m2: "1.0 kg", heavier: "left", motion: true, alt: "A pulley fixed to the ceiling with a 3.0 kilogram block on the left and a 1.0 kilogram block on the right joined by a string. The left block moves down and the right block moves up." }) }] }] },
  "q21-s4": { name: "Two balls on a light rod", label: "Free response", intro: R`A $0.40$ kg ball and a $0.10$ kg ball are attached to the ends of a light rod $0.50$ m long. The rod lies on a frictionless horizontal table.`, sources: [{ title: "", blocks: [{ p: R`Treat the balls as point masses.` }] }] },
};

const items = [
  { id: "q21-m1", type: "mcq", skill: "u2", topic: "2.1", difficulty: "easy", set: "q21-s1",
    question: R`How far from the $0$ cm end of the stick is the center of mass of the stick and clay together?`,
    choices: [R`$60$ cm`, R`$70$ cm`, R`$80$ cm`, R`$40$ cm`],
    why: [R`The stick acts as a $0.30$ kg point mass at its midpoint, $50$ cm. $x_{cm} = \dfrac{(0.30)(50) + (0.10)(90)}{0.40} = 60$ cm.`,
      R`$70$ cm is the unweighted average of $50$ cm and $90$ cm. It ignores that the stick is three times as massive as the clay.`,
      R`$80$ cm swaps the masses, weighting the clay's position by $0.30$ kg and the stick's by $0.10$ kg.`,
      R`$40$ cm is the center of mass measured from the $100$ cm end, $100 - 60$, not from the $0$ cm end.`], answer: 0 },
  { id: "q21-m2", type: "mcq", skill: "u2", topic: "2.1", difficulty: "easy",
    stem: R`A $3.0$ kg block and a $1.0$ kg block hang from the ends of a light string that passes over a light pulley. The system is the two blocks and the string.`,
    question: R`Which of the following is an internal force of this system?`,
    choices: [R`The tension in the string`, R`The weight of the $3.0$ kg block`, R`The force of the pulley on the string`, R`The weight of the $1.0$ kg block`],
    why: [R`Tension is exerted by the string on a block and by a block on the string. All of these objects are inside the system, so tension is internal.`,
      R`Weight is exerted by Earth, which is not part of the system, so it is external.`,
      R`The pulley is not part of the system, so the force it exerts on the string is external.`,
      R`Weight is exerted by Earth, which is not part of the system, so it is external.`], answer: 0 },
  { id: "q21-m3", type: "mcq", skill: "u2", topic: "2.1", difficulty: "moderate", set: "q21-s2",
    question: R`What are the coordinates of the center of mass of the three particles?`,
    choices: [R`$(3.3\text{ m},\ 2.0\text{ m})$`, R`$(3.0\text{ m},\ 2.7\text{ m})$`, R`$(2.0\text{ m},\ 3.3\text{ m})$`, R`$(3.4\text{ m},\ 1.4\text{ m})$`],
    why: [R`$x_{cm} = \dfrac{(2.0)(1.0) + (3.0)(5.0) + (1.0)(3.0)}{6.0} = 3.3$ m and $y_{cm} = \dfrac{(2.0)(2.0) + (3.0)(1.0) + (1.0)(5.0)}{6.0} = 2.0$ m.`,
      R`$(3.0\text{ m},\ 2.7\text{ m})$ is the unweighted average of the three positions. The masses were ignored.`,
      R`$(2.0\text{ m},\ 3.3\text{ m})$ gives the correct values with the $x$ and $y$ coordinates swapped.`,
      R`$(3.4\text{ m},\ 1.4\text{ m})$ leaves out particle C, using only A and B with a total mass of $5.0$ kg.`], answer: 0 },
  { id: "q21-m4", type: "mcq", skill: "u2", topic: "2.1", difficulty: "moderate", set: "q21-s2",
    question: R`Particle B is moved $1.0$ m in the $-x$ direction, and the other two particles stay where they are. By how much does the center of mass of the three particles shift?`,
    choices: [R`$0.50$ m in the $-x$ direction`, R`$1.0$ m in the $-x$ direction`, R`$0.33$ m in the $-x$ direction`, R`$0.50$ m in the $+x$ direction`],
    why: [R`The shift is $\Delta x_{cm} = \dfrac{m_B \Delta x_B}{M} = \dfrac{(3.0)(-1.0)}{6.0} = -0.50$ m, which is $0.50$ m in the $-x$ direction.`,
      R`$1.0$ m is the displacement of B itself. The center of mass moves only by B's share of the total mass.`,
      R`$0.33$ m divides by the number of particles, $3$, instead of the total mass, which treats the masses as equal.`,
      R`The center of mass moves in the same direction as the displaced particle, so the shift is toward $-x$, not $+x$.`], answer: 0 },
  { id: "q21-m5", type: "mcq", skill: "u2", topic: "2.1", difficulty: "difficult", set: "q21-s3",
    question: R`What is the acceleration of the center of mass of the two blocks while they move?`,
    choices: [R`$2.45$ m/s² downward`, R`$4.90$ m/s² downward`, R`$9.80$ m/s² downward`, R`$7.35$ m/s² downward`],
    why: [R`Each block has acceleration $a = \dfrac{(3.0 - 1.0)g}{4.0} = 4.9$ m/s², the $3.0$ kg block downward and the $1.0$ kg block upward. Taking down as positive, $a_{cm} = \dfrac{(3.0)(4.9) + (1.0)(-4.9)}{4.0} = 2.45$ m/s² downward. As a check, the external forces are the weights, $39.2$ N down, and the pulley's support, $2T = 29.4$ N up, so $a_{cm} = \dfrac{9.8}{4.0} = 2.45$ m/s².`,
      R`$4.90$ m/s² is the acceleration of each block. The blocks move in opposite directions, so their accelerations do not simply add to give the acceleration of the center of mass.`,
      R`$9.80$ m/s² assumes the center of mass is in free fall. The pulley's support force acts on the system, so it is not.`,
      R`$7.35$ m/s² uses only the weight of the heavier block, $\dfrac{(3.0)(9.8)}{4.0}$, as the net external force.`], answer: 0 },
  { id: "q21-m6", type: "mcq", skill: "u2", topic: "2.1", difficulty: "moderate",
    stem: R`A $2.0$ kg cart moving at $3.0$ m/s to the right approaches a $1.0$ kg cart at rest on a level, frictionless track. The carts will stick together when they collide.`,
    question: R`What is the speed of the center of mass of the two carts before the collision?`,
    choices: [R`$2.0$ m/s`, R`$3.0$ m/s`, R`$1.5$ m/s`, R`$1.0$ m/s`],
    why: [R`$v_{cm} = \dfrac{m_1 v_1 + m_2 v_2}{m_1 + m_2} = \dfrac{(2.0)(3.0) + (1.0)(0)}{3.0} = 2.0$ m/s. No external horizontal force acts, so this speed does not change in the collision.`,
      R`$3.0$ m/s is the speed of the moving cart alone, which ignores the cart at rest.`,
      R`$1.5$ m/s averages the two speeds, $\dfrac{3.0 + 0}{2}$, without weighting by mass.`,
      R`$1.0$ m/s divides the $3.0$ m/s by the total mass, $\dfrac{(1.0)(3.0)}{3.0}$, so the moving cart's mass was left out of the numerator.`], answer: 0 },
  { id: "q21-f1a", type: "frq", skill: "u2", topic: "2.1", set: "q21-s4", part: "(a)",
    prompt: R`Calculate the distance of the center of mass of the two balls from the $0.40$ kg ball.`,
    rows: [{ name: "Setup", earns: R`Writes the center of mass as a mass-weighted average of positions, for example $x_{cm} = \dfrac{(0.40)(0) + (0.10)(0.50)}{0.50}$.` },
      { name: "Value", earns: R`Obtains $0.10$ m (from the $0.40$ kg ball, toward the $0.10$ kg ball).` }],
    solution: R`Place the $0.40$ kg ball at $x = 0$ and the $0.10$ kg ball at $x = 0.50$ m. $x_{cm} = \dfrac{(0.40)(0) + (0.10)(0.50)}{0.40 + 0.10} = 0.10$ m from the $0.40$ kg ball.` },
  { id: "q21-f1b", type: "frq", skill: "u2", topic: "2.1", set: "q21-s4", part: "(b)",
    prompt: R`A constant horizontal force of $2.0$ N, directed along the rod away from the $0.40$ kg ball, is applied to the $0.10$ kg ball. Determine the magnitude of the acceleration of the center of mass, and explain why the force the rod exerts on the balls does not affect it.`,
    rows: [{ name: "Acceleration", earns: R`Uses the total mass of the system and obtains $a_{cm} = \dfrac{2.0\text{ N}}{0.50\text{ kg}} = 4.0$ m/s².` },
      { name: "Justification", earns: R`States that the rod's forces on the balls are internal and cancel in pairs, so only the net external force (the applied $2.0$ N) determines the acceleration of the center of mass.` }],
    solution: R`The acceleration of the center of mass is the net external force divided by the total mass: $a_{cm} = \dfrac{2.0}{0.50} = 4.0$ m/s². The rod exerts equal and opposite forces on the two balls, which are internal to the system, so they do not change the acceleration of the center of mass.` },
];
export default { forms: [{ id: "q21", name: "Topic 2.1 Quiz: Systems and Center of Mass", group: "Unit 2: Force and Translational Dynamics", items }] };

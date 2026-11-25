// AP Physics 1 topic quiz 4.4: Elastic and inelastic collisions.
import { bars } from "../../plot.js";
import { scene } from "../../diagrams.js";
const R = String.raw;
const one = (blocks, title = "") => [{ title, blocks }];

const keBars = () => bars({ labels: ["Before", "After"], series: [{ name: "Cart A", values: [9, 1] }, { name: "Cart B", values: [0, 8] }], y: [0, 10], step: 2, yname: "Kinetic energy (J)", width: 380, height: 260, fmt: (v) => v.toFixed(1),
  alt: "Bar chart of kinetic energy in joules. Before the collision, cart A has 9.0 and cart B has 0. After the collision, cart A has 1.0 and cart B has 8.0." });
const springCarts = () => {
  const items = [{ ground: { from: [10, 40], to: [430, 40] } }];
  for (const x of [110, 320]) items.push({ circle: { x: x - 20, y: 47, r: 7 } }, { circle: { x: x + 20, y: 47, r: 7 } });
  items.push({ rect: { x: 110, y: 68, w: 76, h: 28, label: "A", mass: "2.0 kg" } }, { rect: { x: 320, y: 68, w: 76, h: 28, label: "B", mass: "1.0 kg" } },
    { spring: { from: [148, 68], to: [212, 68], coils: 6, amp: 7 } },
    { arrow: { from: [110, 110], to: [194, 110], kind: "velocity", label: "3.0 m/s" } }, { label: { x: 320, y: 110, text: "at rest" } });
  return scene({ width: 440, height: 150, alt: "Cart A of mass 2.0 kilograms moves to the right at 3.0 meters per second toward cart B of mass 1.0 kilogram, which is at rest. A spring bumper is attached to the right side of cart A, facing cart B.", items });
};

export const sets = {
  "q44-s1": { name: "Kinetic energy of two carts", label: "Chart", intro: R`Cart A, of mass $2.0$ kg, moves to the right and collides with cart B, of mass $1.0$ kg, which is at rest on a low-friction track. The bar chart shows the kinetic energy of each cart just before and just after the collision.`, sources: one([{ svg: keBars() }]) },
  "q44-s2": { name: "Carts with a spring bumper", label: "Diagram", intro: R`Cart A has a spring bumper on its right side. Cart A moves to the right toward cart B, which is at rest, as shown. The carts move on a level, frictionless track. The spring is light, and it is compressed during the collision and then returns to its original length.`, sources: one([{ svg: springCarts() }]) },
  "q44-s3": { name: "Two air-track gliders", label: "Free response", intro: R`A $0.30$ kg glider X moves to the right at $4.0$ m/s on a level air track, where friction is negligible. It collides with a $0.10$ kg glider Y at rest. Just after the collision, glider Y moves to the right at $6.0$ m/s. Take the positive direction to be to the right.`,
    sources: one([{ p: R`Both gliders stay on the track and move along it.` }]) },
};

const items = [
  { id: "q44-m1", type: "mcq", skill: "u4", topic: "4.4", difficulty: "easy",
    stem: R`A cue ball moving at $3.0$ m/s hits an identical ball at rest head-on on a level, frictionless table. The collision is elastic.`,
    question: R`Which describes the motion of the balls just after the collision?`,
    choices: [R`The cue ball stops, and the other ball moves at $3.0$ m/s.`, R`Both balls move off together in the same direction at $1.5$ m/s.`, R`The cue ball moves at $1.0$ m/s, and the other ball moves at $2.0$ m/s.`, R`The cue ball bounces back at $3.0$ m/s, and the other ball moves at $3.0$ m/s.`],
    why: [R`Momentum and kinetic energy are both conserved. For equal masses, $v_1' = 0$ and $v_2' = 3.0$ m/s satisfies $mv = m(0) + m(3.0)$ and $\tfrac{1}{2}mv^2 = \tfrac{1}{2}m(3.0)^2$.`,
      R`This conserves momentum, but the total kinetic energy falls from $4.5m$ to $2.25m$. That is the result for a perfectly inelastic collision.`,
      R`This conserves momentum, $1.0 + 2.0 = 3.0$, but the total kinetic energy is $2.5m$, not $4.5m$. An elastic collision keeps the kinetic energy.`,
      R`This fails to conserve momentum. The total after is zero, but the total before is $3.0m$.`], answer: 0 },
  { id: "q44-m2", type: "mcq", skill: "u4", topic: "4.4", difficulty: "easy", set: "q44-s1",
    question: R`Which statement correctly describes the collision?`,
    choices: [R`Elastic, because the total kinetic energy is unchanged.`, R`Inelastic, because cart A lost most of its own kinetic energy.`, R`Perfectly inelastic, because the kinetic energy of cart A decreased.`, R`Impossible, because cart B gained kinetic energy from nothing.`],
    why: [R`The total kinetic energy before is $9.0$ J. After, it is $1.0 + 8.0 = 9.0$ J. A collision that keeps the total kinetic energy is elastic.`,
      R`Cart A lost most of its own kinetic energy, but it was transferred to cart B. Only the total determines the type of collision.`,
      R`A perfectly inelastic collision is one in which the objects stick together and move with the same velocity, and the total kinetic energy decreases. Neither is true here.`,
      R`Cart B gained $8.0$ J, which came from cart A. The total energy of the system did not increase.`], answer: 0 },
  { id: "q44-m3", type: "mcq", skill: "u4", topic: "4.4", difficulty: "moderate",
    stem: R`A $2.0$ kg block moves to the right at $7.0$ m/s on a frictionless surface and hits a $6.0$ kg block moving to the left at $1.0$ m/s. The blocks stick together.`,
    question: R`How much kinetic energy is converted to other forms in the collision?`,
    choices: [R`$48$ J`, R`$27$ J`, R`$4.0$ J`, R`$52$ J`],
    why: [R`Momentum gives $(2.0)(7.0) + (6.0)(-1.0) = (8.0)v$, so $v = +1.0$ m/s. The kinetic energy falls from $\tfrac{1}{2}(2.0)(7.0)^2 + \tfrac{1}{2}(6.0)(1.0)^2 = 52$ J to $\tfrac{1}{2}(8.0)(1.0)^2 = 4.0$ J, a loss of $48$ J.`,
      R`This treats the left-moving block's velocity as positive, $v = 2.5$ m/s, which gives a final energy of $25$ J. The block moves to the left, so its momentum is negative.`,
      R`This is the kinetic energy after the collision, not the energy converted.`,
      R`This is the kinetic energy before the collision. Some kinetic energy remains after the blocks stick, because they still move.`], answer: 0 },
  { id: "q44-m4", type: "mcq", skill: "u4", topic: "4.4", difficulty: "moderate",
    stem: R`A $1.0$ kg ball moves to the right at $4.0$ m/s and strikes a $1.0$ kg ball at rest on a frictionless table. The balls do not stick together.`,
    question: R`Which of the following could be the velocities of the balls just after the collision?`,
    choices: [R`Ball 1: $+1.0$ m/s, Ball 2: $+3.0$ m/s`, R`Ball 1: $-1.0$ m/s, Ball 2: $+5.0$ m/s`, R`Ball 1: $+2.0$ m/s, Ball 2: $+3.0$ m/s`, R`Ball 1: $+3.0$ m/s, Ball 2: $+1.0$ m/s`],
    why: [R`The total momentum is $4.0$ kg·m/s, and $1.0 + 3.0 = 4.0$. The kinetic energy is $\tfrac{1}{2}(1.0)^2 + \tfrac{1}{2}(3.0)^2 = 5.0$ J, below the initial $8.0$ J, and ball 2 moves ahead of ball 1. This is an inelastic collision.`,
      R`The total momentum is $4.0$ kg·m/s, but the kinetic energy would be $13$ J, more than the initial $8.0$ J. A collision with no energy source cannot increase the kinetic energy.`,
      R`The total momentum would be $5.0$ kg·m/s, not $4.0$ kg·m/s. Momentum is conserved in every collision.`,
      R`Momentum and energy are both acceptable, but ball 1 would move faster than ball 2 and pass through it. After a collision, the ball behind cannot be moving faster than the ball ahead.`], answer: 0 },
  { id: "q44-m5", type: "mcq", skill: "u4", topic: "4.4", difficulty: "moderate",
    stem: R`A $1.0$ kg block moving at $6.0$ m/s collides head-on with a $2.0$ kg block at rest on a frictionless surface. The collision is elastic.`,
    question: R`What is the speed of the $2.0$ kg block just after the collision?`,
    choices: [R`$4.0$ m/s`, R`$2.0$ m/s`, R`$3.0$ m/s`, R`$6.0$ m/s`],
    why: [R`Momentum and kinetic energy are both conserved. Solving the two equations gives $v_2' = \dfrac{2m_1}{m_1 + m_2}v = \dfrac{2(1.0)}{3.0}(6.0) = 4.0$ m/s, and the $1.0$ kg block rebounds at $2.0$ m/s.`,
      R`This is the speed if the blocks stuck together, $\dfrac{6.0}{3.0}$. An elastic collision does not leave the blocks moving together.`,
      R`This assumes the first block stops and the second block takes all of its momentum, $\dfrac{6.0}{2.0}$. That does not conserve kinetic energy.`,
      R`This assumes the speeds simply swap, as they do for equal masses. The masses are not equal here.`], answer: 0 },
  { id: "q44-m6", type: "mcq", skill: "u4", topic: "4.4", difficulty: "difficult", set: "q44-s2",
    question: R`What is the greatest amount of energy stored in the spring during the collision?`,
    choices: [R`$3.0$ J`, R`$7.5$ J`, R`$6.0$ J`, R`$9.0$ J`],
    why: [R`The spring is most compressed when the carts move with the same velocity. Momentum gives $(2.0)(3.0) = (3.0)v$, so $v = 2.0$ m/s. The stored energy is the kinetic energy lost: $\tfrac{1}{2}(2.0)(3.0)^2 - \tfrac{1}{2}(3.0)(2.0)^2 = 9.0 - 6.0 = 3.0$ J.`,
      R`This inverts the mass ratio when finding the common velocity, $v = 1.0$ m/s. The common velocity is $2.0$ m/s.`,
      R`This is the kinetic energy of the carts at the moment of greatest compression. Only the energy lost from the kinetic energy is stored in the spring.`,
      R`This is the initial kinetic energy. The carts still move at maximum compression, so only part of this energy is stored.`], answer: 0 },
  { id: "q44-f1a", type: "frq", skill: "u4", topic: "4.4", set: "q44-s3", part: "(a)",
    prompt: R`Determine the velocity of glider X just after the collision.`,
    rows: [{ name: "Conservation of momentum", earns: R`Writes $m_X v_{Xi} = m_X v_{Xf} + m_Y v_{Yf}$, or equivalent: $(0.30)(4.0) = (0.30)v_{Xf} + (0.10)(6.0)$.` },
      { name: "Velocity", earns: R`Obtains $v_{Xf} = +2.0$ m/s, to the right, with units.` }],
    solution: R`Momentum is conserved: $(0.30)(4.0) = (0.30)v_{Xf} + (0.10)(6.0)$. Then $1.2 = 0.30v_{Xf} + 0.60$, so $v_{Xf} = +2.0$ m/s, to the right.` },
  { id: "q44-f1b", type: "frq", skill: "u4", topic: "4.4", set: "q44-s3", part: "(b)",
    prompt: R`Is the collision elastic, inelastic, or perfectly inelastic? Justify your answer with a calculation.`,
    rows: [{ name: "Kinetic energies", earns: R`Calculates the total kinetic energy before, $\tfrac{1}{2}(0.30)(4.0)^2 = 2.4$ J, and after, $\tfrac{1}{2}(0.30)(2.0)^2 + \tfrac{1}{2}(0.10)(6.0)^2 = 2.4$ J.` },
      { name: "Classification", earns: R`States that the collision is elastic because the total kinetic energy is unchanged.` }],
    solution: R`The total kinetic energy before is $\tfrac{1}{2}(0.30)(4.0)^2 = 2.4$ J. After, it is $\tfrac{1}{2}(0.30)(2.0)^2 + \tfrac{1}{2}(0.10)(6.0)^2 = 0.60 + 1.8 = 2.4$ J. The kinetic energy is unchanged, so the collision is elastic.` },
];
export default { forms: [{ id: "q44", name: "Topic 4.4 Quiz: Elastic and Inelastic Collisions", group: "Unit 4: Linear Momentum", items }] };

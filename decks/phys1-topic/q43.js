// AP Physics 1 topic quiz 4.3: Conservation of linear momentum.
import { graph } from "../../plot.js";
import { scene } from "../../diagrams.js";
const R = String.raw;
const one = (blocks, title = "") => [{ title, blocks }];

const bumper = () => {
  const items = [{ ground: { from: [10, 40], to: [430, 40] } }, { label: { x: 12, y: 144, text: "Before", anchor: "start" } }];
  for (const x of [120, 330]) items.push({ circle: { x: x - 20, y: 47, r: 7 } }, { circle: { x: x + 20, y: 47, r: 7 } });
  items.push({ rect: { x: 120, y: 68, w: 76, h: 28, label: "A", mass: "200 kg" } }, { rect: { x: 330, y: 68, w: 76, h: 28, label: "B", mass: "300 kg" } },
    { arrow: { from: [120, 110], to: [204, 110], kind: "velocity" } }, { label: { x: 162, y: 126, text: "3.0 m/s" } },
    { arrow: { from: [330, 110], to: [274, 110], kind: "velocity" } }, { label: { x: 302, y: 126, text: "2.0 m/s" } });
  return scene({ width: 440, height: 160, alt: "Before the collision, bumper car A of mass 200 kilograms moves to the right at 3.0 meters per second, and bumper car B of mass 300 kilograms moves to the left at 2.0 meters per second, toward each other on a level floor.", items });
};
const vtPair = () => graph({ x: [0, 4], y: [-4, 8], step: { x: 1, y: 2 }, xname: "t (s)", yname: "v (m/s)", segments: [[0, 6, 2, 6], [2, -2, 4, -2], [0, 0, 2, 0], [2, 2, 4, 2]], vlines: [{ x: 2, dash: true }], labels: [[1, 6.8, "A"], [3, -3, "A"], [1, 0.8, "B"], [3, 2.8, "B"]],
  alt: "Graph of velocity in meters per second versus time in seconds for two carts. Cart A has velocity 6 until 2 seconds, then negative 2. Cart B has velocity 0 until 2 seconds, then 2. A dashed vertical line marks the collision at 2 seconds." });

export const sets = {
  "q43-s1": { name: "Two bumper cars", label: "Diagram", intro: R`Two bumper cars move toward each other on a level, frictionless floor, as shown. When they collide, they lock together. Treat each car and its driver as one object.`, sources: one([{ svg: bumper() }]) },
  "q43-s2": { name: "Velocities of two carts", label: "Graph", intro: R`Cart A has a mass of $2.0$ kg. Cart B has an unknown mass and is at rest before the collision. The carts move on a low-friction track and collide once. The graph shows the velocity of each cart as a function of time, with the positive direction to the right.`, sources: one([{ svg: vtPair() }]) },
  "q43-s3": { name: "Two lab carts with Velcro", label: "Free response", intro: R`A $0.40$ kg lab cart moves to the right at $2.0$ m/s on a level, low-friction track. A $0.60$ kg cart moves to the left at $0.50$ m/s on the same track. The carts collide head-on. Take the positive direction to be to the right.`,
    sources: one([{ p: R`In the first trial, Velcro on the carts makes them stick together. In a second trial, the Velcro is removed, and the carts bounce apart.` }]) },
};

const items = [
  { id: "q43-m1", type: "mcq", skill: "u4", topic: "4.3", difficulty: "easy",
    stem: R`An $8000$ kg railway car rolls at $3.0$ m/s along a level track toward a stationary $4000$ kg railway car. The cars couple together on impact. Ignore friction.`,
    question: R`What is the speed of the coupled cars just after the collision?`,
    choices: [R`$2.0$ m/s`, R`$1.5$ m/s`, R`$4.5$ m/s`, R`$1.0$ m/s`],
    why: [R`The coupled cars form an isolated system, so $(8000)(3.0) = (8000 + 4000)v$ and $v = 2.0$ m/s.`,
      R`This averages the initial speeds, $\dfrac{3.0 + 0}{2}$. Momentum, not speed, is shared in the collision, and the masses differ.`,
      R`This inverts the mass ratio, $3.0 \times \dfrac{12000}{8000}$. The speed after must be less than $3.0$ m/s because mass was added.`,
      R`This uses only the mass of the stationary car in the numerator, $\dfrac{(3.0)(4000)}{12000}$. The moving car carries the momentum.`], answer: 0 },
  { id: "q43-m2", type: "mcq", skill: "u4", topic: "4.3", difficulty: "easy", set: "q43-s1",
    question: R`Which statement describes the cars just after the collision?`,
    choices: [R`The cars stop and remain at rest.`, R`The cars move to the right at $2.4$ m/s.`, R`The cars move to the right at $0.50$ m/s.`, R`The cars move to the left at $2.0$ m/s.`],
    why: [R`The total momentum before is $(200)(3.0) + (300)(-2.0) = 0$. Momentum is conserved, so the locked cars have zero momentum and are at rest.`,
      R`This adds the sizes of the two momenta, $\dfrac{600 + 600}{500}$. The cars move in opposite directions, so the momenta have opposite signs.`,
      R`This averages the two velocities, $\dfrac{3.0 + (-2.0)}{2}$. The masses differ, so the average velocity does not give the final velocity.`,
      R`This assumes the heavier car keeps its velocity. In a collision between objects of equal and opposite momenta, neither car keeps its motion.`], answer: 0 },
  { id: "q43-m3", type: "mcq", skill: "u4", topic: "4.3", difficulty: "moderate",
    stem: R`A block of mass $M$ is at rest on a horizontal, frictionless surface. It breaks into two pieces, one of mass $m$ and one of mass $M - m$. The piece of mass $m$ moves to the right at speed $v$.`,
    question: R`What is the speed of the piece of mass $M - m$?`,
    choices: [R`$\dfrac{mv}{M - m}$`, R`$v + \dfrac{mv}{M - m}$`, R`$\dfrac{(M - m)v}{m}$`, R`$\dfrac{mv}{M - 2m}$`],
    why: [R`The total momentum is zero before and after: $mv - (M - m)v' = 0$. Solving gives $v' = \dfrac{mv}{M - m}$, directed to the left.`,
      R`This is the speed of the second piece relative to the first. The question asks for its speed relative to the surface.`,
      R`This inverts the ratio of the masses. The lighter piece moves faster, so the speed is the heavier piece's momentum divided by its own mass, not by $m$.`,
      R`This subtracts $m$ twice. The mass of the second piece is $M - m$.`], answer: 0 },
  { id: "q43-m4", type: "mcq", skill: "u4", topic: "4.3", difficulty: "moderate",
    stem: R`A $0.50$ kg bean bag moving to the right at $6.0$ m/s hits a $2.0$ kg cart at rest on a level, frictionless track. The bean bag bounces straight back at $2.0$ m/s.`,
    question: R`What is the speed of the cart just after the collision?`,
    choices: [R`$2.0$ m/s`, R`$1.0$ m/s`, R`$1.2$ m/s`, R`$1.5$ m/s`],
    why: [R`Momentum is conserved: $(0.50)(6.0) = (0.50)(-2.0) + (2.0)v$. Then $3.0 = -1.0 + 2.0v$, so $v = 2.0$ m/s.`,
      R`This treats the bean bag's final velocity as $+2.0$ m/s, $3.0 = 1.0 + 2.0v$. The bean bag moves to the left, so its velocity is negative.`,
      R`This assumes the bean bag sticks to the cart, $\dfrac{3.0}{2.5}$. The bean bag bounces, so it does not move with the cart.`,
      R`This ignores the bean bag's momentum after the collision, $\dfrac{3.0}{2.0}$. The bean bag still has momentum after it rebounds.`], answer: 0 },
  { id: "q43-m5", type: "mcq", skill: "u4", topic: "4.3", difficulty: "moderate",
    stem: R`A $120$ kg boat is $5.0$ m long and is at rest in still water. An $80$ kg person stands at the rear of the boat and walks to the front. Ignore the force of the water on the boat.`,
    question: R`How far does the boat move relative to the water?`,
    choices: [R`$2.0$ m`, R`$3.0$ m`, R`$3.3$ m`, R`$5.0$ m`],
    why: [R`No external horizontal force acts, so the center of mass of the person and boat does not move. If the boat moves $d$ backward, the person moves $5.0 - d$ forward relative to the water, and $(80)(5.0 - d) = (120)d$. Then $d = 2.0$ m.`,
      R`This is the distance the person moves relative to the water, $\dfrac{(120)(5.0)}{200}$. The boat moves the other share of the $5.0$ m.`,
      R`This inverts the ratio of the masses, $\dfrac{80}{120}(5.0)$. The lighter object moves farther, so the boat moves less than the person.`,
      R`This assumes the boat moves the whole length the person walked. The person moves forward relative to the water as well.`], answer: 0 },
  { id: "q43-m6", type: "mcq", skill: "u4", topic: "4.3", difficulty: "difficult", set: "q43-s2",
    question: R`What is the velocity of the center of mass of the two carts after the collision?`,
    choices: [R`$1.2$ m/s`, R`$3.0$ m/s`, R`$0.0$ m/s`, R`$1.5$ m/s`],
    why: [R`For cart A, $\Delta p = (2.0)(-2.0 - 6.0) = -16$ kg·m/s, so cart B gains $+16$ kg·m/s. Its speed changes by $2.0$ m/s, so $m_B = 8.0$ kg. The total momentum is $12$ kg·m/s and is conserved, so $v_{cm} = \dfrac{12}{2.0 + 8.0} = 1.2$ m/s.`,
      R`This averages the initial velocities of the carts, $\dfrac{6.0 + 0}{2}$. The center of mass moves at the total momentum over the total mass.`,
      R`This averages the final velocities, $\dfrac{-2.0 + 2.0}{2}$. The carts have different masses, and the center of mass keeps the momentum of the system.`,
      R`This divides the total momentum by $m_B$ alone, $\dfrac{12}{8.0}$. The center of mass moves with the total momentum divided by the total mass.`], answer: 0 },
  { id: "q43-f1a", type: "frq", skill: "u4", topic: "4.3", set: "q43-s3", part: "(a)",
    prompt: R`Is the total momentum of the two-cart system conserved during the collision? Justify your answer.`,
    rows: [{ name: "Conserved, with justification", earns: R`States that the momentum is conserved because the net external force on the two-cart system is zero (the forces between the carts are internal, and the vertical forces cancel).` }],
    solution: R`Yes. The only forces that change the carts' horizontal momentum are the forces the carts exert on each other. These are internal to the system, and the track is low-friction, so the net external horizontal force is zero. The total momentum is conserved.` },
  { id: "q43-f1b", type: "frq", skill: "u4", topic: "4.3", set: "q43-s3", part: "(b)",
    prompt: R`In the first trial, determine the velocity of the carts just after they stick together.`,
    rows: [{ name: "Conservation with signs", earns: R`Writes $m_1 v_1 + m_2 v_2 = (m_1 + m_2)v$ with the $0.60$ kg cart's velocity negative: $(0.40)(2.0) + (0.60)(-0.50) = (1.0)v$.` },
      { name: "Velocity", earns: R`Obtains $v = +0.50$ m/s, to the right, with units.` }],
    solution: R`By conservation of momentum, $(0.40)(2.0) + (0.60)(-0.50) = (0.40 + 0.60)v$. Then $0.80 - 0.30 = (1.0)v$, so $v = +0.50$ m/s, to the right.` },
  { id: "q43-f1c", type: "frq", skill: "u4", topic: "4.3", set: "q43-s3", part: "(c)",
    prompt: R`In the second trial, the $0.40$ kg cart moves to the left at $0.25$ m/s just after the collision. Determine the velocity of the $0.60$ kg cart just after the collision.`,
    rows: [{ name: "Velocity", earns: R`Uses the total momentum of $+0.50$ kg·m/s to obtain $v_2 = \dfrac{0.50 - (0.40)(-0.25)}{0.60} = +1.0$ m/s, to the right.` }],
    solution: R`The total momentum is $0.50$ kg·m/s. Then $0.50 = (0.40)(-0.25) + (0.60)v_2$, so $v_2 = \dfrac{0.50 + 0.10}{0.60} = +1.0$ m/s, to the right.` },
];
export default { forms: [{ id: "q43", name: "Topic 4.3 Quiz: Conservation of Linear Momentum", group: "Unit 4: Linear Momentum", items }] };

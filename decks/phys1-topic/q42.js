// AP Physics 1 topic quiz 4.2: Change in momentum and impulse.
import { graph } from "../../plot.js";
const R = String.raw;
const one = (blocks, title = "") => [{ title, blocks }];

const fSled = () => graph({ x: [0, 5], y: [0, 12], step: { x: 1, y: 2 }, xname: "t (s)", yname: "F (N)", segments: [[0, 0, 2, 10], [2, 10, 4, 0]],
  alt: "Graph of the horizontal force in newtons versus time in seconds. The force rises in a straight line from 0 at 0 seconds to 10 at 2 seconds, then falls in a straight line to 0 at 4 seconds." });
const pCart = () => graph({ x: [0, 11], y: [-10, 14], step: { x: 1, y: 2 }, labelEvery: 2, xname: "t (s)", yname: "p (kg·m/s)", segments: [[0, 0, 4, 12], [4, 12, 6, 12], [6, 12, 10, -8]],
  alt: "Graph of the cart's momentum in kilograms meters per second versus time in seconds. The momentum rises in a straight line from 0 at 0 seconds to 12 at 4 seconds, stays at 12 until 6 seconds, then falls in a straight line to negative 8 at 10 seconds." });
const fCrate = () => graph({ x: [0, 10], y: [-6, 10], step: { x: 1, y: 2 }, labelEvery: 1, xname: "t (s)", yname: "F (N)", segments: [[0, 0, 2, 8], [2, 8, 5, 8], [5, 8, 5, -4], [5, -4, 9, -4], [9, -4, 9, 0]],
  alt: "Graph of the net horizontal force in newtons versus time in seconds, with positive to the right. The force rises in a straight line from 0 at 0 seconds to 8 at 2 seconds, stays at 8 until 5 seconds, drops to negative 4, stays at negative 4 until 9 seconds, then returns to 0." });
const fSled2 = () => graph({ x: [0, 8], y: [0, 12], step: { x: 1, y: 2 }, xname: "t (s)", yname: "F (N)", segments: [[0, 0, 0, 10], [0, 10, 2, 10], [2, 10, 2, 4], [2, 4, 6, 4], [6, 4, 6, 0]],
  alt: "Graph of the net horizontal force in newtons versus time in seconds. The force is 10 from 0 to 2 seconds, then 4 from 2 to 6 seconds, then 0." });

export const sets = {
  "q42-s1": { name: "A sled pushed on ice", label: "Graph", intro: R`A $2.5$ kg sled is at rest on frictionless ice. A horizontal force then acts on it. The graph shows the force as a function of time.`, sources: one([{ svg: fSled() }]) },
  "q42-s2": { name: "Momentum of a cart", label: "Graph", intro: R`The graph shows the momentum of a cart on a straight, horizontal track as a function of time. Only the net force on the cart changes its momentum.`, sources: one([{ svg: pCart() }]) },
  "q42-s3": { name: "Four impacts", label: "Table", intro: R`In four trials, a ball strikes a wall along a line perpendicular to the wall. The table gives the ball's mass, its velocity just before and just after the impact (positive toward the wall), and the time of contact.`,
    sources: one([{ table: { head: ["Trial", "Mass (kg)", "Velocity before (m/s)", "Velocity after (m/s)", "Contact time (s)"], rows: [["A", "$0.10$", "$+6.0$", "$-4.0$", "$0.020$"], ["B", "$0.20$", "$+5.0$", "$0$", "$0.010$"], ["C", "$0.050$", "$+12$", "$-12$", "$0.020$"], ["D", "$0.50$", "$+2.0$", "$-1.0$", "$0.050$"]] } }]) },
  "q42-s4": { name: "A crate on a smooth floor", label: "Graph", intro: R`A $4.0$ kg crate slides on a level, frictionless floor. At $t = 0$ it is moving to the left at $2.0$ m/s. The graph shows the net horizontal force on the crate as a function of time, with the positive direction to the right.`, sources: one([{ svg: fCrate() }]) },
  "q42-s5": { name: "A sled pulled across ice", label: "Free response", intro: R`A $6.0$ kg sled is at rest on a level sheet of ice, where friction is negligible. Starting at $t = 0$, a rope exerts a horizontal force on the sled. The graph shows the net horizontal force on the sled as a function of time.`, sources: one([{ svg: fSled2() }]) },
};

const items = [
  { id: "q42-m1", type: "mcq", skill: "u4", topic: "4.2", difficulty: "easy", set: "q42-s1",
    question: R`What is the sled's speed at $t = 4$ s?`,
    choices: [R`$8.0$ m/s`, R`$16$ m/s`, R`$20$ m/s`, R`$4.0$ m/s`],
    why: [R`The impulse is the area under the graph, $\tfrac{1}{2}(4)(10) = 20$ N·s. Then $v = \dfrac{J}{m} = \dfrac{20}{2.5} = 8.0$ m/s.`,
      R`This leaves out the factor of $\tfrac{1}{2}$ in the area of the triangle, $(4)(10) = 40$ N·s, and divides by $2.5$ kg.`,
      R`This is the impulse, $20$ N·s, reported as the speed. The impulse must be divided by the mass.`,
      R`This divides the peak force by the mass, $\dfrac{10}{2.5} = 4.0$ m/s². That is an acceleration at one instant, not a speed.`], answer: 0 },
  { id: "q42-m2", type: "mcq", skill: "u4", topic: "4.2", difficulty: "easy",
    stem: R`A $0.045$ kg golf ball leaves a club at $40$ m/s. The ball starts from rest, and the club is in contact with it for $3.0$ ms. Ignore the ball's weight.`,
    question: R`What is the magnitude of the average force the club exerts on the ball?`,
    choices: [R`$6.0 \times 10^{2}$ N`, R`$0.60$ N`, R`$5.4$ N`, R`$2.4 \times 10^{4}$ N`],
    why: [R`The impulse is $J = \Delta p = (0.045)(40) = 1.8$ N·s. Then $F_{avg} = \dfrac{J}{\Delta t} = \dfrac{1.8}{0.0030} = 6.0 \times 10^{2}$ N.`,
      R`This divides by $3.0$ instead of $0.0030$ s. The contact time of $3.0$ ms must be converted to seconds.`,
      R`This multiplies the impulse by the contact time number, $(1.8)(3.0)$. The force is the impulse divided by the time.`,
      R`This uses $mv^2$ for the change in momentum, $(0.045)(40)^2 = 72$ N·s. The change in momentum is $mv$.`], answer: 0 },
  { id: "q42-m3", type: "mcq", skill: "u4", topic: "4.2", difficulty: "moderate", set: "q42-s2",
    question: R`What is the net force on the cart at $t = 8$ s?`,
    choices: [R`$-5.0$ N`, R`$+5.0$ N`, R`$+2.0$ N`, R`$-3.3$ N`],
    why: [R`Since $F_{net} = \dfrac{\Delta p}{\Delta t}$, the net force is the slope of the momentum graph. From $6$ s to $10$ s the slope is $\dfrac{-8 - 12}{4} = -5.0$ N.`,
      R`The size is right, but the momentum is decreasing, so the slope and the force are negative.`,
      R`This reads the momentum at $8$ s, $+2.0$ kg·m/s, as if it were the force. The force is the slope, not a value of the momentum.`,
      R`This is the average slope from $4$ s to $10$ s, $\dfrac{-8 - 12}{6}$. The graph has a steeper slope than this at $8$ s.`], answer: 0 },
  { id: "q42-m4", type: "mcq", skill: "u4", topic: "4.2", difficulty: "moderate", set: "q42-s3",
    question: R`In which trial is the magnitude of the average force on the ball greatest?`,
    choices: [R`Trial B`, R`Trial A`, R`Trial C`, R`Trial D`],
    why: [R`The average force is $\dfrac{|\Delta p|}{\Delta t}$. The values are $A$: $\dfrac{(0.10)(10)}{0.020} = 50$ N, $B$: $\dfrac{(0.20)(5.0)}{0.010} = 100$ N, $C$: $\dfrac{(0.050)(24)}{0.020} = 60$ N, $D$: $\dfrac{(0.50)(3.0)}{0.050} = 30$ N. Trial B is greatest.`,
      R`Trial A rebounds, which suggests the largest change, but its change in momentum is only $1.0$ kg·m/s, and its contact time is twice that of B.`,
      R`Trial C has the largest change in velocity, $24$ m/s, but its mass is small, so the force is $60$ N. The force depends on the change in momentum and on the time.`,
      R`Trial D has the largest change in momentum, $1.5$ kg·m/s, but it is spread over the longest contact time, so its force is only $30$ N.`], answer: 0 },
  { id: "q42-m5", type: "mcq", skill: "u4", topic: "4.2", difficulty: "moderate",
    stem: R`A $0.15$ kg hockey puck slides east at $30$ m/s across ice. A stick strikes the puck, and it leaves the stick moving north at $40$ m/s.`,
    question: R`What is the magnitude of the impulse the stick exerts on the puck?`,
    choices: [R`$7.5$ N·s`, R`$10.5$ N·s`, R`$1.5$ N·s`, R`$6.0$ N·s`],
    why: [R`The change in momentum is a vector. The momentum changes from $4.5$ kg·m/s east to $6.0$ kg·m/s north, and the two components are perpendicular, so $|\Delta \vec{p}| = \sqrt{4.5^2 + 6.0^2} = 7.5$ N·s.`,
      R`This adds the sizes of the two momenta, $4.5 + 6.0$. The initial momentum must be subtracted as a vector, and the directions are perpendicular.`,
      R`This subtracts the sizes, $6.0 - 4.5$, as if the puck had stayed on one line.`,
      R`This is the final momentum alone. The impulse is the change in momentum, which also removes the initial eastward momentum.`], answer: 0 },
  { id: "q42-m6", type: "mcq", skill: "u4", topic: "4.2", difficulty: "difficult", set: "q42-s4",
    question: R`What is the velocity of the crate at $t = 9$ s?`,
    choices: [R`$2.0$ m/s to the right`, R`$4.0$ m/s to the right`, R`$6.0$ m/s to the right`, R`$6.0$ m/s to the left`],
    why: [R`The impulse is the signed area: $\tfrac{1}{2}(2)(8) + (3)(8) + (4)(-4) = 8 + 24 - 16 = 16$ N·s. Then $v = v_0 + \dfrac{J}{m} = -2.0 + \dfrac{16}{4.0} = +2.0$ m/s, to the right.`,
      R`This leaves out the initial velocity, $v = \dfrac{J}{m}$. The crate already had momentum before the force acted.`,
      R`This adds the initial speed as $+2.0$ m/s. The crate started moving to the left, so $v_0 = -2.0$ m/s.`,
      R`This applies the sign of the initial velocity to the impulse as well, $-2.0 - 4.0$. The impulse is positive, so it increases the velocity.`], answer: 0 },
  { id: "q42-f1a", type: "frq", skill: "u4", topic: "4.2", set: "q42-s5", part: "(a)",
    prompt: R`Determine the magnitude of the impulse the force exerts on the sled from $t = 0$ to $t = 6$ s.`,
    rows: [{ name: "Area under the graph", earns: R`States that the impulse equals the area under the force-time graph, or splits the area into the two rectangles.` },
      { name: "Impulse", earns: R`Obtains $(10)(2) + (4)(4) = 36$ N·s with units.` }],
    solution: R`The impulse is the area under the force-time graph. The area is $(10)(2) + (4)(4) = 20 + 16 = 36$ N·s.` },
  { id: "q42-f1b", type: "frq", skill: "u4", topic: "4.2", set: "q42-s5", part: "(b)",
    prompt: R`Determine the speed of the sled at $t = 6$ s.`,
    rows: [{ name: "Impulse-momentum theorem", earns: R`Applies $J = \Delta p = m v_f - m v_i$ with $v_i = 0$, or equivalent.` },
      { name: "Speed", earns: R`Obtains $v_f = \dfrac{36}{6.0} = 6.0$ m/s with units.` }],
    solution: R`By the impulse-momentum theorem, $J = m v_f - m v_i$ with $v_i = 0$, so $v_f = \dfrac{J}{m} = \dfrac{36}{6.0} = 6.0$ m/s.` },
];
export default { forms: [{ id: "q42", name: "Topic 4.2 Quiz: Change in Momentum and Impulse", group: "Unit 4: Linear Momentum", items }] };

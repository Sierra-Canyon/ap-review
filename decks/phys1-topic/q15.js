// AP Physics 1, Topic 1.5 Quiz: Vectors and Motion in Two Dimensions. Six multiple choice, then one free-response question (4 points).
import { scene } from "../../diagrams.js";

const r = String.raw;
const SK = { skill: "u1", topic: "1.5" };

// Strobe picture of a ball leaving a table edge: equal time steps, horizontal spacing 45 px, drops in the ratio 1 : 4 : 9 : 16.
const strobe = scene({ width: 400, height: 220, alt: "A strobe picture of a ball leaving the edge of a table moving horizontally. Five dots show the ball at equal time intervals. The dots are equally spaced horizontally. The vertical distance between successive dots grows larger from one dot to the next, so the dots trace a curve that bends downward.",
  items: [
    { ground: { from: [20, 20], to: [380, 20] } }, { poly: { points: [[30, 20], [30, 172], [74, 172], [74, 20]] } },
    ...[0, 1, 2, 3, 4].map((i) => ({ dot: { x: 74 + 54 * i, y: 180 - 5.4 * i * i, r: 4.5 } })),
    { label: { x: 74, y: 198, text: "start" } },
  ] });
// A boat crossing a canal 120 m wide: boat velocity relative to the water (up) and the current (right), 20 px per m/s.
const canal = scene({ width: 420, height: 230, alt: "A canal drawn between two horizontal banks, 120 meters apart, marked by a double-headed vertical arrow on the left. The lower bank is at the bottom. A boat is at the lower bank with a green arrow pointing straight across the canal toward the upper bank, labeled 4.0 meters per second relative to the water. A second green arrow on the right points along the canal, labeled 3.0 meters per second, the current.",
  items: [
    { ground: { from: [30, 30], to: [400, 30] } }, { line: { from: [30, 200], to: [400, 200] } },
    { arrow: { from: [60, 115], to: [60, 30], kind: "plain" } }, { arrow: { from: [60, 115], to: [60, 200], kind: "plain" } }, { label: { x: 60, y: 122, text: "120 m" } },
    { circle: { x: 160, y: 42, r: 9, label: "B" } },
    { arrow: { from: [160, 54], to: [160, 134], kind: "velocity", label: "4.0 m/s", dx: 40, dy: -8 } },
    { arrow: { from: [260, 108], to: [320, 108], kind: "velocity", label: "3.0 m/s", dy: 14 } }, { label: { x: 290, y: 86, text: "current" } },
  ] });

export const sets = {
  "q15-s1": { name: "A ball leaving a table", label: "Diagram", intro: r`A ball rolls off the edge of a horizontal table. The picture shows the ball's position at equal time intervals. Air resistance is negligible.`, sources: [{ title: "", blocks: [{ svg: strobe }] }] },
  "q15-s2": { name: "A ball thrown from a cliff", label: "Table", intro: r`A ball is thrown from the edge of a cliff at an angle above the horizontal. Air resistance is negligible. A sensor records the horizontal component $v_x$ and the vertical component $v_y$ of the ball's velocity, with up positive.`,
    sources: [{ title: "", blocks: [{ table: { head: ["$t$ (s)", "$0$", "$1.0$", "$2.0$", "$3.0$", "$4.0$"], rows: [["$v_x$ (m/s)", "$15$", "$15$", "$15$", "$15$", "$15$"], ["$v_y$ (m/s)", "$+9.8$", "$0$", "$-9.8$", "$-19.6$", "$-29.4$"]] } }] }] },
  "q15-s3": { name: "A boat crossing a canal", label: "Free response", intro: r`A canal is $120$ m wide and its water flows at $3.0$ m/s parallel to its banks, as shown. A boat points straight across the canal, and its speed relative to the water is $4.0$ m/s.`, sources: [{ title: "", blocks: [{ svg: canal }] }] },
};

const items = [
  { id: "q15-m01", type: "mcq", ...SK, difficulty: "easy",
    question: r`A javelin is thrown at $24$ m/s at an angle of $30^\circ$ above the horizontal. What is the vertical component of its initial velocity?`,
    choices: [r`$12$ m/s`, r`$21$ m/s`, r`$24$ m/s`, r`$14$ m/s`],
    why: [r`$v_y = v \sin\theta = (24)\sin 30^\circ = 12$ m/s.`, r`This is $v\cos\theta$, the horizontal component. Sine and cosine were swapped.`, r`This is the full speed, with the angle ignored.`, r`This is $v\tan\theta$. The component along an axis uses sine or cosine, not tangent.`], answer: 0 },
  { id: "q15-m02", type: "mcq", ...SK, difficulty: "easy", set: "q15-s1",
    question: "Which statement describes the components of the ball's velocity as it falls?",
    choices: ["The horizontal component is constant, and the vertical component grows.", "Both components are constant, because the ball keeps to one curved path.", "The horizontal component shrinks, and the vertical component keeps growing.", "Both components grow, because the ball speeds up along its curved path."],
    why: ["The dots are equally spaced horizontally at equal time intervals, so the horizontal velocity is constant. The vertical gaps grow, so the vertical velocity increases.", "The vertical gaps between dots grow, so the vertical velocity is not constant.", "The horizontal spacing is equal, so the horizontal velocity does not decrease. Without air resistance nothing slows the horizontal motion.", "The equal horizontal spacing shows that the horizontal velocity does not increase."], answer: 0 },
  { id: "q15-m03", type: "mcq", ...SK, difficulty: "moderate",
    question: r`A ball launched horizontally at speed $v$ from a height $h$ lands a horizontal distance $R$ from its launch point. A second ball is launched horizontally at speed $2v$ from a height $4h$ on the same planet. Air resistance is negligible. How far from its launch point does the second ball land?`,
    choices: [r`$4R$`, r`$2R$`, r`$6R$`, r`$8R$`],
    why: [r`The fall time is $t = \sqrt{2h/g}$, so a height of $4h$ doubles the time. The range is $v t$, so doubling both the speed and the time gives $4R$.`, r`This accounts for the doubled speed only. The greater height also doubles the fall time.`, r`This adds the two factors, $2 + 4$. The factors multiply.`, r`This multiplies the speed factor by the height factor, $2 \times 4$. Time is proportional to $\sqrt{h}$, not to $h$.`], answer: 0 },
  { id: "q15-m04", type: "mcq", ...SK, difficulty: "moderate",
    question: r`A diver pushes off horizontally from a platform at $2.5$ m/s and enters the water $4.5$ m from the base of the platform. Treat the diver as a projectile. How high is the platform above the water?`,
    choices: [r`$16$ m`, r`$32$ m`, r`$18$ m`, r`$8.8$ m`],
    why: [r`The fall time is $t = \dfrac{4.5}{2.5} = 1.8$ s. Then $h = \tfrac{1}{2} g t^2 = \tfrac{1}{2}(9.8)(1.8)^2 = 16$ m.`, r`This leaves out the factor $\tfrac{1}{2}$, $g t^2$.`, r`This is $g t$, which is the vertical speed at entry, not the height.`, r`This is $\tfrac{1}{2} g t$. The time was not squared.`], answer: 0 },
  { id: "q15-m05", type: "mcq", ...SK, difficulty: "moderate", set: "q15-s2",
    question: r`What is the ball's speed at $t = 3.0$ s?`,
    choices: [r`$25$ m/s`, r`$35$ m/s`, r`$20$ m/s`, r`$15$ m/s`],
    why: [r`The speed is the magnitude of the velocity: $\sqrt{v_x^2 + v_y^2} = \sqrt{15^2 + 19.6^2} = 25$ m/s.`, r`This adds the components, $15 + 19.6$. Components of perpendicular directions add as a vector sum.`, r`This is the vertical component alone, $19.6$ m/s.`, r`This is the horizontal component alone. The vertical motion contributes to the speed.`], answer: 0 },
  { id: "q15-m06", type: "mcq", ...SK, difficulty: "difficult",
    question: r`A football is punted from level ground. It lands $45$ m from the kicker $3.0$ s after the punt. Air resistance is negligible. What was the ball's initial speed?`,
    choices: [r`$21$ m/s`, r`$30$ m/s`, r`$33$ m/s`, r`$15$ m/s`],
    why: [r`The horizontal velocity is $\dfrac{45}{3.0} = 15$ m/s. The ball rises for half the flight time, so $v_{0y} = g(1.5) = 14.7$ m/s. The speed is $\sqrt{15^2 + 14.7^2} = 21$ m/s.`, r`This adds the components, $15 + 14.7$, instead of finding the magnitude of the vector.`, r`This uses the whole flight time to find the vertical component, $v_{0y} = g(3.0) = 29.4$ m/s. The ball needs only half the flight time to reach its highest point.`, r`This is the horizontal component alone. The ball also starts with a vertical velocity.`], answer: 0 },
  { id: "q15-f1a", type: "frq", ...SK, set: "q15-s3", part: "(a)", prompt: "Determine the magnitude and direction of the boat's velocity relative to the bank. Give the direction as an angle from the line straight across the canal.",
    rows: [{ name: "Speed", earns: r`States $5.0$ m/s, obtained from $\sqrt{4.0^2 + 3.0^2}$.` }, { name: "Direction", earns: r`States an angle of about $37^\circ$ from the line straight across, toward the downstream side.` }],
    solution: r`The two velocities are perpendicular, so the speed relative to the bank is $\sqrt{(4.0)^2 + (3.0)^2} = 5.0$ m/s. The angle from the line straight across is $\tan^{-1}\left(\dfrac{3.0}{4.0}\right) = 37^\circ$, toward the downstream side.` },
  { id: "q15-f1b", type: "frq", ...SK, set: "q15-s3", part: "(b)", prompt: "Calculate the time the boat takes to cross the canal.",
    rows: [{ name: "Crossing time", earns: r`States $30$ s, obtained as $120 / 4.0$, using only the velocity component across the canal.` }],
    solution: r`The motion across the canal is independent of the current. $t = \dfrac{120 \text{ m}}{4.0 \text{ m/s}} = 30$ s.` },
  { id: "q15-f1c", type: "frq", ...SK, set: "q15-s3", part: "(c)", prompt: "Calculate the distance the boat is carried downstream by the time it reaches the far bank.",
    rows: [{ name: "Downstream distance", earns: r`States $90$ m, obtained as $3.0 \times 30$ s, using the crossing time from part (b).` }],
    solution: r`The current carries the boat downstream at $3.0$ m/s for the $30$ s crossing: $d = (3.0)(30) = 90$ m.` },
];

export default { forms: [{ id: "q15", name: "Topic 1.5 Quiz: Vectors and Motion in Two Dimensions", group: "Unit 1: Kinematics", items }] };

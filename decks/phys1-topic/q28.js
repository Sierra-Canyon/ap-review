// AP Physics 1 topic quiz 2.8: spring forces.
import { graph } from "../../plot.js";
import { scene, springMass } from "../../diagrams.js";
const R = String.raw;

const fVsX = () => graph({ x: [0, 6], y: [0, 10], step: { x: 1, y: 2 }, xname: "x (cm)", yname: "F (N)", segments: [[0, 0, 5.6, 8.96]], dots: [[5, 8, "closed"]],
  alt: "Graph of a spring's force in newtons versus its extension in centimeters. The data fall on a straight line through the origin, and the point at 5.0 centimeters has a force of 8.0 newtons." });
const hanging = () => scene({ width: 300, height: 250, alt: "A light spring hangs from the ceiling with a 1.0 kilogram block hanging from its lower end. The spring's force constant is 250 newtons per meter.", items: [
  { ground: { from: [190, 225], to: [50, 225] } }, { line: { from: [120, 225], to: [120, 200] } }, { spring: { from: [120, 200], to: [120, 110], coils: 8, amp: 10 } }, { label: { x: 175, y: 155, text: "k = 250 N/m", anchor: "start" } },
  { rect: { x: 120, y: 82, w: 56, h: 50, label: "1.0 kg" } }] });
const scale = () => scene({ width: 360, height: 220, alt: "A spring scale hangs horizontally between two pulleys. A cord from each end of the scale runs over a pulley and down to a 5.0 kilogram block. Both blocks hang at rest.", items: [
  { rect: { x: 180, y: 150, w: 90, h: 26, label: "scale" } },
  { rope: { points: [[135, 150], [48, 150]] } }, { pulley: { x: 40, y: 150, r: 10 } }, { rope: { points: [[30, 150], [30, 92]] } }, { rect: { x: 30, y: 72, w: 46, h: 40, label: "5.0 kg" } },
  { rope: { points: [[225, 150], [312, 150]] } }, { pulley: { x: 320, y: 150, r: 10 } }, { rope: { points: [[330, 150], [330, 92]] } }, { rect: { x: 330, y: 72, w: 46, h: 40, label: "5.0 kg" } }] });

export const sets = {
  "q28-s1": { name: "Force versus extension", label: "Graph", intro: R`A student pulls on a spring with a force sensor and records the force $F$ as a function of the spring's extension $x$ from its relaxed length. The data are shown.`, sources: [{ title: "", blocks: [{ svg: fVsX() }] }] },
  "q28-s2": { name: "A block hanging from a spring", label: "Setup", intro: R`A $1.0$ kg block hangs at rest from a light spring with a force constant of $250$ N/m.`, sources: [{ title: "", blocks: [{ svg: hanging() }] }] },
  "q28-s3": { name: "Spring length data", label: "Table", intro: R`A student hangs masses from a light vertical spring and measures the spring's total length each time. The spring obeys Hooke's law. The relaxed length is not known.`, sources: [{ title: "", blocks: [{ table: { head: ["Hanging mass (g)", "Spring length (cm)"], rows: [["100", "14.0"], ["200", "18.0"], ["300", "22.0"]] } }] }] },
  "q28-s4": { name: "A spring scale between two blocks", label: "Setup", intro: R`A light spring scale hangs horizontally. Each end is attached to a cord that passes over a light, frictionless pulley and supports a $5.0$ kg block. The blocks hang at rest.`, sources: [{ title: "", blocks: [{ svg: scale() }] }] },
  "q28-s5": { name: "A block on a spring", label: "Setup", intro: R`A $0.50$ kg block rests on a frictionless horizontal table and is attached to a spring of force constant $80$ N/m. The block is pulled $15$ cm from the position where the spring is relaxed and released from rest.`, sources: [{ title: "", blocks: [{ svg: springMass({ orientation: "horizontal", stretch: 40, mass: "0.50 kg", k: "80 N/m", eq: "x = 0", x: "15 cm", alt: "A 0.50 kilogram block on a frictionless horizontal table attached to a spring of 80 newtons per meter whose other end is fixed to a wall on the left. The block is displaced 15 centimeters to the right of the position where the spring is relaxed." }) }] }] },
  "q28-s6": { name: "A cart on a spring", label: "Free response", intro: R`A $0.40$ kg cart on a frictionless horizontal track is attached to a spring with a force constant of $25$ N/m. The other end of the spring is fixed to a wall. The cart is pulled $0.20$ m from the position where the spring is relaxed and released from rest.`, sources: [{ title: "", blocks: [{ p: R`The spring has negligible mass.` }] }] },
};

const items = [
  { id: "q28-m1", type: "mcq", skill: "u2", topic: "2.8", difficulty: "easy", set: "q28-s1",
    question: R`What is the force constant of the spring?`,
    choices: [R`$160$ N/m`, R`$1.6$ N/m`, R`$0.63$ N/m`, R`$1600$ N/m`],
    why: [R`The slope of the graph is the force constant. $k = \dfrac{F}{x} = \dfrac{8.0\text{ N}}{0.050\text{ m}} = 160$ N/m. The extension must be in meters.`,
      R`$1.6$ N/m divides by $5.0$, the extension in centimeters. The slope is $1.6$ N/cm, which is $160$ N/m.`,
      R`$0.63$ N/m inverts the slope, $\dfrac{x}{F} = \dfrac{5.0}{8.0}$. The force constant is force per extension.`,
      R`$1600$ N/m converts the extension incorrectly, using $0.0050$ m for $5.0$ cm.`], answer: 0 },
  { id: "q28-m2", type: "mcq", skill: "u2", topic: "2.8", difficulty: "easy", set: "q28-s2",
    question: R`By how much is the spring stretched?`,
    choices: [R`$3.92$ cm`, R`$25.5$ cm`, R`$0.400$ cm`, R`$39.2$ cm`],
    why: [R`The block is at rest, so the spring force equals the weight: $kx = mg$. $x = \dfrac{(1.0)(9.8)}{250} = 0.0392$ m $= 3.92$ cm.`,
      R`$25.5$ cm inverts the relationship, $x = \dfrac{k}{mg}$.`,
      R`$0.400$ cm leaves out $g$, using $x = \dfrac{m}{k}$.`,
      R`$39.2$ cm has the correct number, $0.0392$ m, but converts it to centimeters by multiplying by $1000$ instead of $100$.`], answer: 0 },
  { id: "q28-m3", type: "mcq", skill: "u2", topic: "2.8", difficulty: "moderate", set: "q28-s3",
    question: R`What is the spring's force constant?`,
    choices: [R`$24.5$ N/m`, R`$7.00$ N/m`, R`$0.245$ N/m`, R`$49.0$ N/m`],
    why: [R`Each additional $100$ g adds $0.980$ N of force and increases the length by $4.0$ cm, which equals the increase in extension. $k = \dfrac{\Delta F}{\Delta x} = \dfrac{0.980}{0.040} = 24.5$ N/m.`,
      R`$7.00$ N/m uses the total length instead of the extension, $\dfrac{0.980}{0.140}$. The relaxed length is not given, so the change in length must be used.`,
      R`$0.245$ N/m leaves the length change in centimeters, $\dfrac{0.980}{4.0}$.`,
      R`$49.0$ N/m pairs a $200$ g change in mass, $1.96$ N, with a $4.0$ cm change in length that came from a $100$ g change.`], answer: 0 },
  { id: "q28-m4", type: "mcq", skill: "u2", topic: "2.8", difficulty: "moderate", set: "q28-s4",
    question: R`What does the scale read?`,
    choices: [R`$49$ N`, R`$98$ N`, R`$0$ N`, R`$25$ N`],
    why: [R`Each block is at rest, so the tension in its cord is $mg = 49$ N. The scale is at rest, and each end is pulled with $49$ N. A spring scale reads the force at one end, so it reads $49$ N.`,
      R`$98$ N adds the two cord forces. The scale reads the force on one end, not the sum.`,
      R`$0$ N uses the net force on the scale, which is zero. The scale reads the stretching force at each end, not the net force.`,
      R`$25$ N takes half of one block's weight, as if the two cords shared a single load.`], answer: 0 },
  { id: "q28-m5", type: "mcq", skill: "u2", topic: "2.8", difficulty: "moderate", set: "q28-s5",
    question: R`What is the magnitude of the block's acceleration just after it is released?`,
    choices: [R`$24$ m/s²`, R`$12$ m/s²`, R`$6.0$ m/s²`, R`$0.042$ m/s²`],
    why: [R`The spring force is $kx = (80)(0.15) = 12$ N, and it is the net horizontal force. $a = \dfrac{F}{m} = \dfrac{12}{0.50} = 24$ m/s².`,
      R`$12$ m/s² is the spring force in newtons. It was not divided by the mass.`,
      R`$6.0$ m/s² multiplies the force by the mass, $(12)(0.50)$, instead of dividing.`,
      R`$0.042$ m/s² inverts the quotient, $\dfrac{m}{kx} = \dfrac{0.50}{12}$.`], answer: 0 },
  { id: "q28-m6", type: "mcq", skill: "u2", topic: "2.8", difficulty: "moderate",
    stem: R`A force $F$ stretches a spring of force constant $k$ by a distance $x$. A second spring has a force constant of $3k$.`,
    question: R`By what distance does a force of $2F$ stretch the second spring?`,
    choices: [R`$\dfrac{2x}{3}$`, R`$\dfrac{3x}{2}$`, R`$6x$`, R`$\dfrac{x}{6}$`],
    why: [R`The extension is $\dfrac{F}{k}$, so for the second spring $x_2 = \dfrac{2F}{3k} = \dfrac{2}{3}\left(\dfrac{F}{k}\right) = \dfrac{2x}{3}$.`,
      R`$\dfrac{3x}{2}$ inverts the ratio. A stiffer spring stretches less.`,
      R`$6x$ multiplies by both factors, $(2)(3)$. The larger force increases the stretch, but the larger constant decreases it.`,
      R`$\dfrac{x}{6}$ divides by both factors. The larger force increases the stretch.`], answer: 0 },
  { id: "q28-f1a", type: "frq", skill: "u2", topic: "2.8", set: "q28-s6", part: "(a)",
    prompt: R`Determine the magnitude of the force the spring exerts on the cart at the moment it is released.`,
    rows: [{ name: "Spring force", earns: R`Uses Hooke's law, $F = kx$, to obtain $(25)(0.20) = 5.0$ N.` }],
    solution: R`$F = kx = (25)(0.20) = 5.0$ N.` },
  { id: "q28-f1b", type: "frq", skill: "u2", topic: "2.8", set: "q28-s6", part: "(b)",
    prompt: R`Determine the magnitude and direction of the cart's acceleration at the moment it is released.`,
    rows: [{ name: "Second law", earns: R`Applies Newton's second law with the spring force as the net force: $a = \dfrac{5.0}{0.40}$.` },
      { name: "Value and direction", earns: R`Obtains $12.5$ m/s², directed toward the wall, the position where the spring is relaxed.` }],
    solution: R`The spring force is the net horizontal force, so $a = \dfrac{F}{m} = \dfrac{5.0}{0.40} = 12.5$ m/s². The spring pulls the cart toward the position where the spring is relaxed, so the acceleration points toward the wall.` },
  { id: "q28-f1c", type: "frq", skill: "u2", topic: "2.8", set: "q28-s6", part: "(c)",
    prompt: R`As the cart moves toward the position where the spring is relaxed, does the magnitude of its acceleration increase, decrease, or stay the same? Justify your answer.`,
    rows: [{ name: "Change with justification", earns: R`States that the magnitude of the acceleration decreases, because the spring's extension decreases, so the spring force $kx$ and the acceleration $\dfrac{kx}{m}$ decrease.` }],
    solution: R`The acceleration decreases. The net force is the spring force $kx$, which gets smaller as the extension $x$ gets smaller, so $a = \dfrac{kx}{m}$ decreases.` },
];
export default { forms: [{ id: "q28", name: "Topic 2.8 Quiz: Spring Forces", group: "Unit 2: Force and Translational Dynamics", items }] };

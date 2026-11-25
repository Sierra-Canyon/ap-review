// AP Physics 1, Topic 1.4 Quiz: Reference Frames and Relative Motion. Six multiple choice, then one free-response question (4 points).
import { scene } from "../../diagrams.js";

const r = String.raw;
const SK = { skill: "u1", topic: "1.4" };

// Tractor and pickup, velocities relative to the ground at 8 px per m/s.
const vehicles = scene({ width: 460, height: 150, alt: "A tractor on the left and a pickup truck on the right on a straight road. A green arrow above the tractor points right and is labeled 6.0 meters per second. A longer green arrow above the pickup points right and is labeled 15 meters per second. Both velocities are measured relative to the ground.",
  items: [
    { ground: { from: [20, 30], to: [440, 30] } },
    { rect: { x: 90, y: 50, w: 70, h: 32, label: "tractor" } }, { rect: { x: 290, y: 50, w: 80, h: 32, label: "pickup" } },
    { arrow: { from: [90, 98], to: [138, 98], kind: "velocity" } }, { label: { x: 114, y: 114, text: "6.0 m/s" } },
    { arrow: { from: [290, 98], to: [410, 98], kind: "velocity" } }, { label: { x: 350, y: 114, text: "15 m/s" } },
  ] });
// A sprinter behind a jogger, 45 m apart, at 8 px per m/s.
const chase = scene({ width: 460, height: 150, alt: "A sprinter on the left and a jogger on the right on a straight path, 45 meters apart as shown by a double-headed arrow. A green arrow from the sprinter points right and is labeled 9.0 meters per second. A shorter green arrow from the jogger points right and is labeled 6.0 meters per second.",
  items: [
    { ground: { from: [20, 30], to: [440, 30] } },
    { circle: { x: 60, y: 46, r: 11, label: "S" } }, { circle: { x: 340, y: 46, r: 11, label: "J" } },
    { arrow: { from: [74, 76], to: [146, 76], kind: "velocity" } }, { label: { x: 110, y: 92, text: "9.0 m/s" } },
    { arrow: { from: [354, 76], to: [402, 76], kind: "velocity" } }, { label: { x: 378, y: 92, text: "6.0 m/s" } },
    { arrow: { from: [200, 118], to: [60, 118], kind: "plain" } }, { arrow: { from: [200, 118], to: [340, 118], kind: "plain" } }, { label: { x: 200, y: 132, text: "45 m" } },
    { line: { from: [60, 112], to: [60, 124] } }, { line: { from: [340, 112], to: [340, 124] } },
  ] });

// Three velocities in a chain, 20 px per v: truck 5v east (relative to the ground), van 2v west (relative to the truck), motorcycle 4v east (relative to the van).
const chain = scene({ width: 380, height: 150, alt: "Three arrows with labels. The top arrow points right, is 5v long, and is labeled the truck relative to the ground. The middle arrow points left, is 2v long, and is labeled the van relative to the truck. The bottom arrow points right, is 4v long, and is labeled the motorcycle relative to the van.",
  items: [
    { label: { x: 10, y: 124, text: "truck, relative to the ground", anchor: "start" } }, { arrow: { from: [230, 124], to: [330, 124], kind: "velocity" } }, { label: { x: 352, y: 120, text: "5v" } },
    { label: { x: 10, y: 84, text: "van, relative to the truck", anchor: "start" } }, { arrow: { from: [270, 84], to: [230, 84], kind: "velocity" } }, { label: { x: 212, y: 80, text: "2v" } },
    { label: { x: 10, y: 44, text: "motorcycle, relative to the van", anchor: "start" } }, { arrow: { from: [230, 44], to: [310, 44], kind: "velocity" } }, { label: { x: 332, y: 40, text: "4v" } },
  ] });

export const sets = {
  "q14-s1": { name: "A tractor and a pickup", label: "Diagram", intro: r`A tractor and a pickup truck move along a straight road, as shown. The arrows show their velocities relative to the ground.`, sources: [{ title: "", blocks: [{ svg: vehicles }] }] },
  "q14-s2": { name: "A sprinter and a jogger", label: "Diagram", intro: r`A sprinter runs behind a jogger on a straight path. At one instant the sprinter is $45$ m behind the jogger. Both speeds are measured relative to the ground and stay constant.`, sources: [{ title: "", blocks: [{ svg: chase }] }] },
  "q14-s4": { name: "Three moving vehicles", label: "Diagram", intro: r`A truck, a van, and a motorcycle move along a straight road. Positive is east. The arrows show how fast each moves relative to the object named beside it.`, sources: [{ title: "", blocks: [{ svg: chain }] }] },
  "q14-s3": { name: "A conveyor belt", label: "Free response",
    intro: r`A conveyor belt moves east at $0.60$ m/s relative to the floor. A package slides along the belt at a constant $0.40$ m/s west relative to the belt. Observer 1 stands at rest on the floor. Observer 2 walks east beside the belt at a constant $1.0$ m/s relative to the floor. Positive is east.`,
    sources: [{ title: "", blocks: [] }] },
};

const items = [
  { id: "q14-m01", type: "mcq", ...SK, difficulty: "easy", set: "q14-s1",
    question: "What is the pickup's velocity relative to the tractor?",
    choices: [r`$9.0$ m/s to the right`, r`$21$ m/s to the right`, r`$9.0$ m/s to the left`, r`$15$ m/s to the right`],
    why: [r`$v_{P/T} = v_P - v_T = 15 - 6.0 = 9.0$ m/s. The positive sign means to the right.`, r`This adds the two velocities. Both vehicles move the same way, so the velocities are subtracted.`, r`This subtracts in the wrong order, $6.0 - 15$. The tractor sees the pickup pulling ahead, to the right.`, r`This is the pickup's velocity relative to the ground. The question asks for the velocity relative to the tractor.`], answer: 0 },
  { id: "q14-m02", type: "mcq", ...SK, difficulty: "easy",
    question: r`A student walks forward on a treadmill at $1.4$ m/s relative to the belt. The belt moves backward at $1.4$ m/s relative to the floor. Which statement describes the student's motion relative to the floor?`,
    choices: ["The student stays in place, at rest relative to the floor.", r`The student moves forward at $2.8$ m/s relative to the floor.`, r`The student moves backward at $2.8$ m/s relative to the floor.`, r`The student moves forward at $1.4$ m/s relative to the floor.`],
    why: [r`With forward positive, $v_{S/F} = v_{S/B} + v_{B/F} = +1.4 + (-1.4) = 0$.`, r`This adds the speeds. The belt moves in the opposite direction, so its velocity is negative.`, r`This adds the speeds with the belt's sign, treating the student's walking as backward too.`, r`This is the student's velocity relative to the belt. The belt's motion was left out.`], answer: 0 },
  { id: "q14-m03", type: "mcq", ...SK, difficulty: "moderate",
    question: r`A truck moves east at $15$ m/s relative to the ground. The truck driver measures a motorcycle's velocity to be $4.0$ m/s west. What is the motorcycle's velocity relative to the ground?`,
    choices: [r`$11$ m/s east`, r`$19$ m/s east`, r`$4.0$ m/s west`, r`$11$ m/s west`],
    why: [r`$v_{M/G} = v_{M/T} + v_{T/G} = -4.0 + 15 = +11$ m/s, which is $11$ m/s east.`, r`This adds the magnitudes, $15 + 4.0$, and ignores that the driver measures the motorcycle moving west.`, r`This is the velocity the driver measures. The question asks for the velocity relative to the ground.`, r`This has the correct size but the wrong direction. The truck's $15$ m/s east is larger than $4.0$ m/s west.`], answer: 0 },
  { id: "q14-m04", type: "mcq", ...SK, difficulty: "moderate", set: "q14-s2",
    question: "How long does it take the sprinter to catch up to the jogger?",
    choices: [r`$15$ s`, r`$5.0$ s`, r`$7.5$ s`, r`$3.0$ s`],
    why: [r`Relative to the jogger, the sprinter closes the gap at $9.0 - 6.0 = 3.0$ m/s, so $t = \dfrac{45}{3.0} = 15$ s.`, r`This divides the gap by the sprinter's speed, $\dfrac{45}{9.0}$, as if the jogger were standing still.`, r`This divides the gap by the jogger's speed, $\dfrac{45}{6.0}$.`, r`This is the relative speed, $3.0$ m/s, read as a time.`], answer: 0 },
  { id: "q14-m05", type: "mcq", ...SK, difficulty: "moderate",
    question: "Observer 1 stands on the ice. Observer 2 skates past at constant velocity. Both watch a puck glide across the ice at constant velocity. Which statement is correct?",
    choices: ["They measure different puck velocities but agree that the puck's acceleration is zero.", "They measure different puck velocities, so one of them measures a nonzero acceleration.", "They measure the same puck velocity, because the puck's motion does not depend on the observer.", "They measure the same puck velocity but different accelerations, because their positions differ."],
    why: [r`The skater's velocity relative to the ice is constant, so the two measured velocities differ by a constant. The change in velocity is zero in both frames, so both measure zero acceleration.`, r`The measured velocities differ by a constant, so neither observer sees the velocity change. Both measure zero acceleration.`, "Velocity depends on the observer's own motion. The puck's velocity relative to a moving skater is different from its velocity relative to the ice.", "The velocities differ because the observers move relative to each other, not because their positions differ. The accelerations are the same."], answer: 0 },
  { id: "q14-m06", type: "mcq", ...SK, difficulty: "difficult", set: "q14-s4",
    question: r`What is the motorcycle's velocity relative to the ground?`,
    choices: [r`$7v$ east`, r`$11v$ east`, r`$3v$ east`, r`$v$ west`],
    why: [r`The van's velocity relative to the ground is $5v - 2v = 3v$ east. The motorcycle's is $3v + 4v = 7v$ east.`, r`This adds all three magnitudes, $5v + 2v + 4v$, and ignores that the van moves west relative to the truck.`, r`This stops at the van's velocity relative to the ground, $3v$. The motorcycle's velocity relative to the van was not added.`, r`This subtracts the last velocity, $5v - 2v - 4v$. The motorcycle moves east relative to the van, so $4v$ is added.`], answer: 0 },
  { id: "q14-f1a", type: "frq", ...SK, set: "q14-s3", part: "(a)", prompt: "Determine the velocity of the package relative to the floor.",
    rows: [{ name: "Velocity relative to the floor", earns: r`States $+0.20$ m/s (east), obtained as $0.60 + (-0.40)$.` }],
    solution: r`$v_{P/F} = v_{P/B} + v_{B/F} = -0.40 + 0.60 = +0.20$ m/s, which is $0.20$ m/s east.` },
  { id: "q14-f1b", type: "frq", ...SK, set: "q14-s3", part: "(b)", prompt: "Determine the velocity of the package as measured by Observer 2.",
    rows: [{ name: "Velocity relative to Observer 2", earns: r`States $-0.80$ m/s (or $0.80$ m/s west), obtained as $0.20 - 1.0$.` }],
    solution: r`$v_{P/2} = v_{P/F} - v_{2/F} = +0.20 - 1.0 = -0.80$ m/s, which is $0.80$ m/s west.` },
  { id: "q14-f1c", type: "frq", ...SK, set: "q14-s3", part: "(c)", prompt: "Do the two observers measure the same acceleration for the package? Justify your answer.",
    rows: [{ name: "Claim", earns: "States that the observers measure the same acceleration, which is zero." }, { name: "Justification", earns: r`States that the observers' velocities differ by a constant, because Observer 2 moves at constant velocity relative to the floor, so the package's velocity does not change in either frame.` }],
    solution: r`Yes. The package moves at constant velocity relative to the floor, so Observer 1 measures zero acceleration. Observer 2 moves at constant velocity relative to the floor, so the package's velocity relative to Observer 2 differs from its velocity relative to the floor by a constant. It does not change, so Observer 2 also measures zero acceleration.` },
];

export default { forms: [{ id: "q14", name: "Topic 1.4 Quiz: Reference Frames and Relative Motion", group: "Unit 1: Kinematics", items }] };

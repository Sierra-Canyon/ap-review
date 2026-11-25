// AP Physics 1, Topic 1.1 Quiz: Scalars and Vectors in One Dimension. Six multiple choice, then one free-response question (4 points).
import { scene } from "../../diagrams.js";

const r = String.raw;
const SK = { skill: "u1", topic: "1.1" };

// Two skaters moving toward each other; arrows drawn at 25 px per m/s.
const skaters = scene({ width: 420, height: 130, alt: "Two skaters on a straight rink. Skater A is on the left with a green arrow pointing right labeled 4.0 meters per second. Skater B is on the right with a longer green arrow pointing left labeled 6.0 meters per second. A gray arrow at the bottom points right and is labeled positive direction.",
  items: [
    { ground: { from: [20, 30], to: [400, 30] } },
    { circle: { x: 60, y: 48, r: 11, label: "A" } }, { circle: { x: 360, y: 48, r: 11, label: "B" } },
    { arrow: { from: [74, 48], to: [174, 48], kind: "velocity" } }, { label: { x: 124, y: 66, text: "4.0 m/s" } },
    { arrow: { from: [346, 48], to: [196, 48], kind: "velocity" } }, { label: { x: 271, y: 66, text: "6.0 m/s" } },
    { arrow: { from: [150, 100], to: [250, 100], kind: "plain" } }, { label: { x: 200, y: 116, text: "positive direction" } },
  ] });

// A cart's two legs: d east, then 3d west (one d is 40 px).
const trip = scene({ width: 380, height: 130, alt: "A horizontal line with a cart's trip drawn as two arrows. The cart starts at the point marked start. The upper arrow points right for a distance d and is labeled d, time t. The lower arrow points left, three times as long, ending left of the start, and is labeled 3d, time 2t.",
  items: [
    { arrow: { from: [200, 96], to: [240, 96], kind: "velocity" } }, { label: { x: 220, y: 110, text: "d, time t" } },
    { arrow: { from: [240, 52], to: [120, 52], kind: "velocity" } }, { label: { x: 150, y: 38, text: "3d, time 2t" } },
    { line: { from: [200, 52], to: [200, 110], dash: true } }, { label: { x: 200, y: 122, text: "start" } },
    { line: { from: [240, 52], to: [240, 96], dash: true } },
  ] });

export const sets = {
  "q11-s1": { name: "Two skaters", label: "Diagram", intro: r`Two skaters glide toward each other along a straight line, as shown. Positive is to the right.`, sources: [{ title: "", blocks: [{ svg: skaters }] }] },
  "q11-s2": { name: "A boat on a pond", label: "Table", intro: r`A radio-controlled boat moves along a straight line on a pond. Positive is east. The table gives its position $x$ relative to a dock.`,
    sources: [{ title: "", blocks: [{ table: { head: ["$t$ (s)", "$0$", "$2.0$", "$4.0$", "$6.0$"], rows: [["$x$ (m)", "$+2$", "$+9$", "$+5$", "$-1$"]] } }] }] },
  "q11-s4": { name: "A cart's trip", label: "Diagram", intro: r`A cart rolls along a straight track, as shown. Positive is east.`, sources: [{ title: "", blocks: [{ svg: trip }] }] },
  "q11-s3": { name: "A utility cart", label: "Free response",
    intro: r`A groundskeeper drives a utility cart along a straight path. Positive is east. The cart moves $40$ m east, then $65$ m west, and then $15$ m east. The whole trip takes $25$ s.`,
    sources: [{ title: "", blocks: [] }] },
};

const items = [
  { id: "q11-m01", type: "mcq", ...SK, difficulty: "easy",
    question: "Which list contains only vector quantities?",
    choices: ["Displacement, velocity, and acceleration", "Distance, average speed, and acceleration", "Displacement, speed, and elapsed time", "Distance, velocity, and elapsed time"],
    why: ["Displacement, velocity, and acceleration each have a magnitude and a direction, so each is a vector.", "Distance and speed are scalars. They have a magnitude only.", "Speed and elapsed time are scalars. They have a magnitude only.", "Distance and elapsed time are scalars. They have a magnitude only."], answer: 0 },
  { id: "q11-m02", type: "mcq", ...SK, difficulty: "easy", set: "q11-s1",
    question: "Which choice gives the velocity of each skater?",
    choices: [r`A: $+4.0$ m/s; B: $-6.0$ m/s`, r`A: $+4.0$ m/s; B: $+6.0$ m/s`, r`A: $-4.0$ m/s; B: $+6.0$ m/s`, r`A: $+6.0$ m/s; B: $-4.0$ m/s`],
    why: ["Skater A moves in the positive direction at $4.0$ m/s, so $v_A = +4.0$ m/s. Skater B moves in the negative direction at $6.0$ m/s, so $v_B = -6.0$ m/s.", "This gives B's speed. B moves to the left, so its velocity is negative.", "This takes positive to be the left. The problem states that positive is to the right.", "This swaps the two magnitudes. A's arrow is the shorter one."], answer: 0 },
  { id: "q11-m03", type: "mcq", ...SK, difficulty: "moderate", set: "q11-s2",
    question: "During which interval is the boat's displacement the most negative?",
    choices: [r`$t = 4.0$ s to $t = 6.0$ s`, r`$t = 0$ to $t = 2.0$ s`, r`$t = 2.0$ s to $t = 4.0$ s`, r`$t = 0$ to $t = 6.0$ s`],
    why: [r`The displacements are $+7$ m, $-4$ m, and $-6$ m for the three consecutive intervals. The most negative is $-6$ m, from $4.0$ s to $6.0$ s.`, r`The displacement is $+7$ m. It has the largest magnitude but it is positive.`, r`The displacement is $-4$ m, which is negative but smaller in magnitude than $-6$ m.`, r`The displacement over the whole trip is $-3$ m. The boat moved $+7$ m before it moved back, so the net change is smaller.`], answer: 0 },
  { id: "q11-m04", type: "mcq", ...SK, difficulty: "moderate",
    question: r`An object moves along a straight line. Which relationship between the distance $d$ it travels and the magnitude of its displacement $|\Delta x|$ is always true?`,
    choices: [r`$d \ge |\Delta x|$`, r`$d \le |\Delta x|$`, r`$d = |\Delta x|$`, r`$d > |\Delta x|$`],
    why: [r`Distance adds the length of every segment of the motion. Displacement is the net change in position, so it can only be equal to or smaller than the distance. They are equal when the object never reverses direction.`, r`This reverses the relationship. Reversing direction makes the distance larger than the displacement, never smaller.`, r`This holds only when the object never reverses direction. It fails when the object turns around.`, r`This is false when the object moves in one direction only. Then the distance equals the magnitude of the displacement.`], answer: 0 },
  { id: "q11-m05", type: "mcq", ...SK, difficulty: "moderate",
    question: r`Two displacement vectors lie along the same straight line. One has magnitude $7.0$ m and the other has magnitude $3.0$ m. Which statement describes the magnitude of their vector sum?`,
    choices: [r`It is $4.0$ m or $10.0$ m, depending on the directions.`, r`It is always $10.0$ m, because magnitudes of vectors add like numbers.`, r`It is always $4.0$ m, because the longer vector outweighs the shorter one.`, r`It is $7.6$ m, because they combine like the legs of a right triangle.`],
    why: [r`Vectors on one line add with signs. Opposite directions give $7.0 - 3.0 = 4.0$ m, and the same direction gives $7.0 + 3.0 = 10.0$ m.`, r`This adds the magnitudes regardless of direction. That is correct only when both vectors point the same way.`, r`This subtracts the magnitudes regardless of direction. That is correct only when the vectors point opposite ways.`, r`$\sqrt{7.0^2 + 3.0^2} = 7.6$ m applies to perpendicular vectors. These vectors lie on the same line.`], answer: 0 },
  { id: "q11-m06", type: "mcq", ...SK, difficulty: "difficult", set: "q11-s4",
    question: r`The cart rolls a distance $d$ east in a time $t$ and then a distance $3d$ west in a time $2t$. Which choice gives the cart's average speed and the magnitude of its average velocity for the whole trip?`,
    choices: [r`$\dfrac{4d}{3t}$ and $\dfrac{2d}{3t}$`, r`$\dfrac{2d}{3t}$ and $\dfrac{4d}{3t}$`, r`$\dfrac{4d}{3t}$ and $\dfrac{4d}{3t}$`, r`$\dfrac{2d}{3t}$ and $\dfrac{2d}{3t}$`],
    why: [r`The distance is $d + 3d = 4d$, so the average speed is $\dfrac{4d}{3t}$. The displacement is $d - 3d = -2d$, so the magnitude of the average velocity is $\dfrac{2d}{3t}$.`, "This swaps the two quantities. Average speed uses distance, and average velocity uses displacement.", "This uses the distance for the average velocity. Average velocity is displacement divided by time, and the cart ends up closer to its start than the distance it traveled.", "This uses the displacement for the average speed. Average speed is distance divided by time."], answer: 0 },
  { id: "q11-f1a", type: "frq", ...SK, set: "q11-s3", part: "(a)", prompt: "Determine the distance the cart travels and the cart's displacement.",
    rows: [{ name: "Distance", earns: r`States that the distance traveled is $120$ m.` }, { name: "Displacement", earns: r`States that the displacement is $10$ m west (or $-10$ m with east positive), with the direction.` }],
    solution: r`The distance is the sum of the lengths of the segments: $40 + 65 + 15 = 120$ m. The displacement is the net change in position: $+40 - 65 + 15 = -10$ m, which is $10$ m west.` },
  { id: "q11-f1b", type: "frq", ...SK, set: "q11-s3", part: "(b)", prompt: "Calculate the magnitude and direction of the cart's average velocity for the trip.",
    rows: [{ name: "Average velocity", earns: r`States that the average velocity is $0.40$ m/s west (or $-0.40$ m/s), obtained as displacement divided by time.` }],
    solution: r`$v_{avg} = \dfrac{\Delta x}{\Delta t} = \dfrac{-10 \text{ m}}{25 \text{ s}} = -0.40$ m/s, which is $0.40$ m/s west.` },
  { id: "q11-f1c", type: "frq", ...SK, set: "q11-s3", part: "(c)", prompt: "A student says that the cart's average speed has the same value as the magnitude of its average velocity. Explain why the student is incorrect.",
    rows: [{ name: "Explanation", earns: r`States that average speed is distance divided by time ($4.8$ m/s) and average velocity is displacement divided by time ($0.40$ m/s), and that they differ because the cart reversed direction, so the distance is greater than the magnitude of the displacement.` }],
    solution: r`Average speed is the distance divided by the time, $\dfrac{120 \text{ m}}{25 \text{ s}} = 4.8$ m/s. The magnitude of the average velocity is the magnitude of the displacement divided by the time, $0.40$ m/s. They differ because the cart reversed direction, so the distance traveled is larger than the magnitude of the displacement.` },
];

export default { forms: [{ id: "q11", name: "Topic 1.1 Quiz: Scalars and Vectors in One Dimension", group: "Unit 1: Kinematics", items }] };

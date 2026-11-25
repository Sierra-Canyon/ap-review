// AP Physics 1, Topic 1.2 Quiz: Displacement, Velocity, and Acceleration. Six multiple choice, then one free-response question (3 points).
import { graph } from "../../plot.js";

const r = String.raw;
const SK = { skill: "u1", topic: "1.2" };

const tractorV = graph({ x: [0, 8], y: [-4, 6], step: 1, xname: "t (s)", yname: "v (m/s)", segments: [[0, -2, 3, 4], [3, 4, 6, 4], [6, 4, 8, 0]],
  dots: [[0, -2, "closed"], [3, 4, "closed"], [6, 4, "closed"], [8, 0, "closed"]],
  alt: "Velocity versus time for a tractor. The line rises from negative 2 meters per second at 0 seconds, crosses zero at 1 second, and reaches 4 meters per second at 3 seconds. It stays at 4 meters per second until 6 seconds and then falls to 0 at 8 seconds." });

export const sets = {
  "q12-s1": { name: "A tractor's velocity", label: "Graph", intro: r`A tractor moves along a straight line. The graph shows its velocity $v$, with positive to the right, as a function of time $t$.`, sources: [{ title: "", blocks: [{ svg: tractorV }] }] },
  "q12-s2": { name: "A canoe on a lake", label: "Table", intro: r`A canoeist paddles along a straight line on a lake. A GPS unit records the canoe's position $x$ along the line at several times.`,
    sources: [{ title: "", blocks: [{ table: { head: ["$t$ (s)", "$x$ (m)"], rows: [["$0$", "$0$"], ["$2.0$", "$8.0$"], ["$5.0$", "$17$"], ["$6.0$", "$29$"], ["$10$", "$41$"]] } }] }] },
  "q12-s3": { name: "A toy truck", label: "Free response", intro: r`A toy truck moves along a straight track, and positive is to the right. A motion sensor records the truck's velocity $v$ at four times.`,
    sources: [{ title: "", blocks: [{ table: { head: ["$t$ (s)", "$0$", "$2.0$", "$4.0$", "$6.0$"], rows: [["$v$ (m/s)", "$+1.0$", "$+5.0$", "$+9.0$", "$+5.0$"]] } }] }] },
};

const items = [
  { id: "q12-m01", type: "mcq", ...SK, difficulty: "easy",
    question: r`A subway train moves along a straight track. Its velocity changes from $+12$ m/s to $+30$ m/s in $9.0$ s. What is the train's average acceleration?`,
    choices: [r`$+2.0$ m/s$^2$`, r`$+3.3$ m/s$^2$`, r`$+4.7$ m/s$^2$`, r`$+18$ m/s$^2$`],
    why: [r`$a_{avg} = \dfrac{\Delta v}{\Delta t} = \dfrac{30 - 12}{9.0} = +2.0$ m/s$^2$.`, r`This divides the final velocity by the time, $\dfrac{30}{9.0}$. Average acceleration uses the change in velocity.`, r`This adds the two velocities, $\dfrac{12 + 30}{9.0}$, instead of subtracting them.`, r`This is the change in velocity, $18$ m/s. It was not divided by the time.`], answer: 0 },
  { id: "q12-m02", type: "mcq", ...SK, difficulty: "easy", set: "q12-s1",
    question: r`What is the tractor's average acceleration from $t = 0$ to $t = 3.0$ s?`,
    choices: [r`$+2.0$ m/s$^2$`, r`$+1.3$ m/s$^2$`, r`$+0.67$ m/s$^2$`, r`$-2.0$ m/s$^2$`],
    why: [r`$a_{avg} = \dfrac{4.0 - (-2.0)}{3.0} = +2.0$ m/s$^2$. The change in velocity is $6.0$ m/s.`, r`This divides only the final velocity by the time, $\dfrac{4.0}{3.0}$.`, r`This subtracts the speeds, $\dfrac{4.0 - 2.0}{3.0}$, instead of subtracting the signed velocities.`, r`This subtracts in the wrong order, $\dfrac{-2.0 - 4.0}{3.0}$. The velocity increases, so the acceleration is positive.`], answer: 0 },
  { id: "q12-m03", type: "mcq", ...SK, difficulty: "moderate",
    question: r`A truck travels east at $24$ m/s for $10$ s and then east at $8.0$ m/s for $30$ s. What is the truck's average velocity for the full $40$ s?`,
    choices: [r`$12$ m/s`, r`$16$ m/s`, r`$20$ m/s`, r`$32$ m/s`],
    why: [r`The displacement is $24 \times 10 + 8.0 \times 30 = 480$ m, so $v_{avg} = \dfrac{480}{40} = 12$ m/s.`, r`This averages the two velocities, $\dfrac{24 + 8.0}{2}$. The truck spent unequal times at the two velocities.`, r`This weights each velocity by the other interval's time, $24\left(\dfrac{30}{40}\right) + 8.0\left(\dfrac{10}{40}\right)$.`, r`This adds the two velocities. Velocities are not added to find an average.`], answer: 0 },
  { id: "q12-m04", type: "mcq", ...SK, difficulty: "moderate", set: "q12-s2",
    question: "During which interval is the canoe's average velocity the greatest?",
    choices: [r`$t = 5.0$ s to $t = 6.0$ s`, r`$t = 6.0$ s to $t = 10$ s`, r`$t = 0$ to $t = 2.0$ s`, r`$t = 2.0$ s to $t = 5.0$ s`],
    why: [r`The average velocities are $4.0$ m/s, $3.0$ m/s, $12$ m/s, and $3.0$ m/s for the four consecutive intervals. The greatest is $12$ m/s, from $5.0$ s to $6.0$ s.`, r`The displacement is also $12$ m, but it takes $4.0$ s, so the average velocity is only $3.0$ m/s.`, r`The average velocity is $\dfrac{8.0}{2.0} = 4.0$ m/s, which is less than $12$ m/s.`, r`The average velocity is $\dfrac{9.0}{3.0} = 3.0$ m/s, which is less than $12$ m/s.`], answer: 0 },
  { id: "q12-m05", type: "mcq", ...SK, difficulty: "moderate", set: "q12-s1",
    question: r`During the interval from $t = 0$ to $t = 1.0$ s, the tractor is`,
    choices: ["slowing down while moving left", "slowing down while moving right", "gaining speed while moving left", "gaining speed while moving right"],
    why: [r`The velocity is negative, so the tractor moves left. Its velocity rises toward zero, so the acceleration is positive and points opposite the velocity. The speed decreases.`, r`The velocity is negative, so the tractor moves to the left, not the right.`, r`The velocity is negative, but the acceleration is positive. Opposite signs mean the speed decreases.`, r`The velocity is negative, so the tractor moves left. The positive slope shows the acceleration is positive, which does not make it move right.`], answer: 0 },
  { id: "q12-m06", type: "mcq", ...SK, difficulty: "difficult",
    question: r`A tram starts from rest on a straight track and moves with constant acceleration. It travels $24$ m in the first $4.0$ s and continues with the same acceleration. What is its average velocity from $t = 4.0$ s to $t = 8.0$ s?`,
    choices: [r`$18$ m/s`, r`$9.0$ m/s`, r`$6.0$ m/s`, r`$24$ m/s`],
    why: [r`From $24 = \tfrac{1}{2} a (4.0)^2$, $a = 3.0$ m/s$^2$. Then $v(4.0) = 12$ m/s and $v(8.0) = 24$ m/s. With constant acceleration the average velocity is $\dfrac{12 + 24}{2} = 18$ m/s.`, r`This drops the factor $\tfrac{1}{2}$ in $x = \tfrac{1}{2} a t^2$, which gives $a = 1.5$ m/s$^2$ and an average of $9.0$ m/s.`, r`This is the average velocity of the first $4.0$ s, $\dfrac{24}{4.0}$, used for the second interval.`, r`This is the velocity at $t = 8.0$ s, not the average over the interval.`], answer: 0 },
  { id: "q12-f1a", type: "frq", ...SK, set: "q12-s3", part: "(a)", prompt: r`Calculate the truck's average acceleration from $t = 0$ to $t = 4.0$ s.`,
    rows: [{ name: "Average acceleration", earns: r`States $a_{avg} = +2.0$ m/s$^2$, obtained from $\Delta v / \Delta t = (9.0 - 1.0)/4.0$, with units.` }],
    solution: r`$a_{avg} = \dfrac{\Delta v}{\Delta t} = \dfrac{9.0 - 1.0}{4.0} = +2.0$ m/s$^2$.` },
  { id: "q12-f1b", type: "frq", ...SK, set: "q12-s3", part: "(b)", prompt: r`Is the truck speeding up or slowing down from $t = 4.0$ s to $t = 6.0$ s? Justify your answer using the signs of the truck's velocity and average acceleration.`,
    rows: [{ name: "Claim", earns: "States that the truck is slowing down." }, { name: "Justification", earns: r`States that the velocity is positive and the average acceleration is negative ($-2.0$ m/s$^2$), so they point in opposite directions.` }],
    solution: r`The truck is slowing down. Its velocity is positive, $+9.0$ m/s to $+5.0$ m/s, and its average acceleration is $\dfrac{5.0 - 9.0}{2.0} = -2.0$ m/s$^2$. The velocity and the acceleration have opposite signs, so the speed decreases.` },
];

export default { forms: [{ id: "q12", name: "Topic 1.2 Quiz: Displacement, Velocity, and Acceleration", group: "Unit 1: Kinematics", items }] };

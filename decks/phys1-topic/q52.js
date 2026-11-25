// AP Physics 1 topic quiz 5.2: Connecting linear and rotational motion.
import { graph } from "../../plot.js";
import { scene } from "../../diagrams.js";
const R = String.raw;
const one = (blocks, title = "") => [{ title, blocks }];
const mc = (n, difficulty, o) => ({ id: `q52-m${n}`, type: "mcq", skill: "u5", topic: "5.2", difficulty, ...o, answer: 0 });
const fr = (id, part, set, o) => ({ id: `q52-${id}`, type: "frq", skill: "u5", topic: "5.2", set, part, ...o });

const hoist = () => scene({ width: 380, height: 250, alt: "A drum of radius 0.20 meters turns about a fixed horizontal axle. A rope wound on the rim leaves the right side of the drum and hangs straight down to a bucket. An arrow beside the bucket points up and is labeled 0.30 meters per second squared.", items: [
  { circle: { x: 150, y: 175, r: 48 } }, { dot: { x: 150, y: 175, r: 3 } }, { line: { from: [150, 175], to: [198, 175], dash: true } }, { label: { x: 166, y: 189, text: "0.20 m" } },
  { line: { from: [198, 175], to: [198, 95] } }, { rect: { x: 198, y: 75, w: 64, h: 34, label: "bucket" } },
  { arrow: { from: [252, 70], to: [252, 120], kind: "plain", label: "0.30 m/s²" } }] });
const reel = () => graph({ x: [0, 5], y: [0, 50], step: { x: 1, y: 10 }, xname: "t (s)", yname: "ω (rad/s)", segments: [[0, 0, 4, 40]],
  alt: "Graph of the angular velocity of a fishing reel in radians per second versus time in seconds. A straight line rises from 0 at 0 seconds to 40 radians per second at 4 seconds." });

export const sets = {
  "q52-s1": { name: "A hoist drum", label: "Diagram", intro: R`A bucket is raised by a rope that is wound on a drum. The rope does not slip on the drum. The bucket starts from rest and accelerates upward at a constant $0.30$ m/s².`, sources: one([{ svg: hoist() }]) },
  "q52-s2": { name: "A fishing reel", label: "Graph", intro: R`A fishing reel has a spool of radius $0.030$ m. The line is pulled off the spool without slipping while the spool speeds up from rest. The graph shows the angular velocity $\omega$ of the spool as a function of time $t$.`, sources: one([{ svg: reel() }]) },
  "q52-s3": { name: "A garage door cable", label: "Free response", intro: R`A garage door opener winds a cable onto a drum of radius $0.060$ m. The drum turns at a constant angular speed of $5.0$ rad/s, and the cable winds onto the drum without slipping.`,
    sources: one([{ p: R`The cable is wound in a single layer, so the radius at which it winds does not change.` }]) },
};

const items = [
  mc(1, "easy", { stem: R`A winch drum has a radius of $0.15$ m. A cable winds onto the drum without slipping as the drum turns through $8.0$ rad.`, question: "How much cable winds onto the drum?",
    choices: [R`$1.2$ m`, R`$53$ m`, R`$0.019$ m`, R`$2.4$ m`],
    why: [R`$s = \theta r = (8.0)(0.15) = 1.2$ m.`, R`This divides the angle by the radius, $8.0/0.15$.`, R`This divides the radius by the angle, $0.15/8.0$.`, R`This uses the diameter, $0.30$ m, as the radius.`] }),
  mc(2, "easy", { set: "q52-s1", question: "What is the angular acceleration of the drum?",
    choices: [R`$1.5$ rad/s²`, R`$0.060$ rad/s²`, R`$0.67$ rad/s²`, R`$0.75$ rad/s²`],
    why: [R`The bucket's acceleration equals the tangential acceleration of the rim: $\alpha = a/r = 0.30/0.20 = 1.5$ rad/s².`, R`This multiplies instead of dividing: $(0.30)(0.20)$.`, R`This divides the radius by the acceleration, $0.20/0.30$.`, R`This uses the diameter, $0.40$ m, as the radius.`] }),
  mc(3, "moderate", { set: "q52-s2", question: R`How much line comes off the spool from $t = 0$ to $t = 4.0$ s?`,
    choices: [R`$2.4$ m`, R`$4.8$ m`, R`$1.2$ m`, R`$80$ m`],
    why: [R`The angle is the area under the graph, $\tfrac12(4.0)(40) = 80$ rad. The line length is $s = \theta r = (80)(0.030) = 2.4$ m.`, R`This uses the final angular velocity as if it lasted the whole time: $(40)(0.030)(4.0)$.`, R`This is the speed of the line at $t = 4.0$ s, $\omega r = 1.2$ m/s, reported as a length.`, R`This is the angle in radians, $80$ rad, without multiplying by the radius.`] }),
  mc(4, "moderate", { stem: R`A flywheel of radius $0.40$ m starts from rest and speeds up with a constant angular acceleration of $2.5$ rad/s².`, question: R`What is the magnitude of the total acceleration of a point on the rim at $t = 1.0$ s?`,
    choices: [R`$2.69$ m/s²`, R`$1.00$ m/s²`, R`$2.50$ m/s²`, R`$3.50$ m/s²`],
    why: [R`The tangential acceleration is $\alpha r = 1.0$ m/s². At $t = 1.0$ s, $\omega = 2.5$ rad/s, so the centripetal acceleration is $\omega^2 r = 2.5$ m/s². These are perpendicular, so $a = \sqrt{1.0^2 + 2.5^2} = 2.69$ m/s².`, R`This is only the tangential acceleration, $\alpha r$.`, R`This is only the centripetal acceleration, $\omega^2 r$.`, R`This adds the two components as if they pointed the same way, $1.0 + 2.5$.`] }),
  mc(5, "moderate", { stem: R`The minute hand of a wall clock is $0.15$ m long.`, question: "What is the speed of the tip of the minute hand?",
    choices: [R`$2.6 \times 10^{-4}$ m/s`, R`$1.6 \times 10^{-2}$ m/s`, R`$2.2 \times 10^{-5}$ m/s`, R`$1.7 \times 10^{-3}$ m/s`],
    why: [R`The hand turns once in $3600$ s, so $\omega = 2\pi/3600 = 1.75 \times 10^{-3}$ rad/s and $v = \omega r = 2.6 \times 10^{-4}$ m/s.`, R`This uses $60$ s as the period, which is the period of the second hand.`, R`This uses a period of $12$ hours, which is the period of the hour hand.`, R`This is the angular speed, $1.7 \times 10^{-3}$ rad/s, without multiplying by the radius.`] }),
  mc(6, "difficult", { stem: R`Wheel X has radius $r$ and wheel Y has radius $2r$. Both wheels start from rest. The rim of each wheel has the same constant tangential acceleration.`, question: R`At a later time $t$, how does the centripetal acceleration of a point on the rim of wheel Y compare with that of a point on the rim of wheel X?`,
    choices: ["Half as great", "Twice as great", "One fourth as great", "The same as for wheel X"],
    why: [R`The tangential acceleration is the same, so after time $t$ the rim speeds are the same, $v = a_t t$. Then $a_c = v^2/r$ is inversely proportional to the radius, so wheel Y has half the centripetal acceleration.`, R`This uses $a_c = \omega^2 r$ with the same $\omega$ for both wheels. The angular speeds are not equal: $\omega_Y$ is half of $\omega_X$.`, R`This uses the ratio of the angular speeds, one half, squared, and leaves out the factor of $2$ from the radius.`, R`This assumes that equal rim speeds give equal centripetal acceleration, which leaves out the radius in $v^2/r$.`] }),
  fr("f1a", "(a)", "q52-s3", { prompt: R`Determine the speed of the cable as it winds onto the drum, and the time needed to wind $2.1$ m of cable onto the drum.`,
    rows: [{ name: "Speed", earns: R`Uses $v = \omega r$ and obtains $v = 0.30$ m/s.` },
      { name: "Time", earns: R`Divides the length by the speed, $t = (2.1)/(0.30)$, and obtains $t = 7.0$ s.` }],
    solution: R`$v = \omega r = (5.0)(0.060) = 0.30$ m/s. $t = s/v = 2.1/0.30 = 7.0$ s.` }),
  fr("f1b", "(b)", "q52-s3", { prompt: R`The drum is replaced by a drum of radius $0.12$ m that also turns at $5.0$ rad/s. Does the cable now wind onto the drum faster, slower, or at the same speed as before? Justify your answer.`,
    rows: [{ name: "Claim", earns: R`States that the cable winds on faster than before.` },
      { name: "Justification", earns: R`States that the speed of the cable equals the rim speed, $v = \omega r$, so for the same $\omega$ a larger radius gives a larger speed (twice as large, $0.60$ m/s).` }],
    solution: R`Faster. The cable moves at the rim speed $v = \omega r$. The angular speed is unchanged and the radius doubles, so the speed doubles to $0.60$ m/s.` }),
];
export default { forms: [{ id: "q52", name: "Topic 5.2 Quiz: Connecting Linear and Rotational Motion", group: "Unit 5: Torque and Rotational Dynamics", items }] };

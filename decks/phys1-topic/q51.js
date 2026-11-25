// AP Physics 1 topic quiz 5.1: Rotational kinematics.
import { graph } from "../../plot.js";
const R = String.raw;
const one = (blocks, title = "") => [{ title, blocks }];
const mc = (n, difficulty, o) => ({ id: `q51-m${n}`, type: "mcq", skill: "u5", topic: "5.1", difficulty, ...o, answer: 0 });
const fr = (id, part, set, o) => ({ id: `q51-${id}`, type: "frq", skill: "u5", topic: "5.1", set, part, ...o });

const shaft = () => graph({ x: [0, 5], y: [0, 16], step: { x: 1, y: 2 }, xname: "t (s)", yname: "ω (rad/s)", segments: [[0, 2, 4, 14]],
  alt: "Graph of the angular velocity of a motor shaft in radians per second versus time in seconds. A straight line rises from 2 radians per second at 0 seconds to 14 radians per second at 4 seconds." });
const joint = () => graph({ x: [0, 4], y: [0, 32], step: { x: 1, y: 4 }, xname: "t (s)", yname: "θ (rad)", fns: [{ f: (t) => 2 * t * t, from: 0, to: 4 }],
  alt: "Graph of the angular position of a robot joint in radians versus time in seconds. A curve that opens upward starts at 0 at 0 seconds and passes through 8 radians at 2 seconds and 18 radians at 3 seconds, reaching 32 radians at 4 seconds." });
const drum = () => graph({ x: [0, 7], y: [-8, 8], step: { x: 1, y: 2 }, xname: "t (s)", yname: "ω (rad/s)", segments: [[0, 6, 4, -6], [4, -6, 6, -6]],
  alt: "Graph of the angular velocity of a washing machine drum in radians per second versus time in seconds. A straight line falls from 6 at 0 seconds through 0 at 2 seconds to negative 6 at 4 seconds. The graph then stays at negative 6 until 6 seconds." });

export const sets = {
  "q51-s1": { name: "A motor shaft", label: "Graph", intro: R`A motor shaft turns about a fixed axis. The graph shows the angular velocity $\omega$ of the shaft as a function of time $t$.`, sources: one([{ svg: shaft() }]) },
  "q51-s2": { name: "A robot joint", label: "Graph", intro: R`A joint in a robot arm starts from rest and turns with constant angular acceleration. The graph shows the angular position $\theta$ of the joint as a function of time $t$.`, sources: one([{ svg: joint() }]) },
  "q51-s3": { name: "A washing machine drum", label: "Graph", intro: R`The drum of a washing machine turns about a fixed axis. The graph shows the angular velocity $\omega$ of the drum as a function of time $t$, with counterclockwise positive.`, sources: one([{ svg: drum() }]) },
  "q51-s4": { name: "A lawn mower blade", label: "Free response", intro: R`A lawn mower blade is at rest. When the motor starts, the blade turns with a constant angular acceleration of $40$ rad/s² for $2.5$ s. The motor is then switched off, and friction gives the blade a constant angular acceleration of $-8.0$ rad/s² until the blade stops. Take the direction in which the blade turns as positive.`,
    sources: one([{ p: R`The blade turns about a fixed axis through its center.` }]) },
};

const items = [
  mc(1, "easy", { stem: R`A lawn sprinkler head turns at a constant $45$ rpm.`, question: "Through what angle does the head turn in $8.0$ s?",
    choices: [R`$37.7$ rad`, R`$6.00$ rad`, R`$360$ rad`, R`$2260$ rad`],
    why: [R`$\omega = (45)(2\pi/60) = 4.71$ rad/s, so $\theta = \omega t = (4.71)(8.0) = 37.7$ rad.`, R`This leaves out the factor $2\pi$ in the conversion: $(45/60)(8.0)$.`, R`This uses $45$ as if it were in rad/s: $(45)(8.0)$.`, R`This multiplies by $2\pi$ but never divides by $60$ s per minute.`] }),
  mc(2, "easy", { set: "q51-s1", question: "What is the magnitude of the angular acceleration of the shaft?",
    choices: [R`$3.0$ rad/s²`, R`$3.5$ rad/s²`, R`$8.0$ rad/s²`, R`$12$ rad/s²`],
    why: [R`The slope of the graph is the angular acceleration: $\alpha = (14 - 2.0)/(4.0 - 0) = 3.0$ rad/s².`, R`This divides the final angular velocity by the time, $14/4.0$, and ignores that the shaft was already turning at $t = 0$.`, R`This is the average angular velocity, $(2.0 + 14)/2$.`, R`This is the change in angular velocity, $14 - 2.0$, never divided by the time.`] }),
  mc(3, "moderate", { set: "q51-s2", question: R`What is the angular velocity of the joint at $t = 3.0$ s?`,
    choices: [R`$12$ rad/s`, R`$6.0$ rad/s`, R`$8.0$ rad/s`, R`$4.0$ rad/s`],
    why: [R`From rest, $\theta = \tfrac12\alpha t^2$. At $t = 2.0$ s the graph reads $8.0$ rad, so $\alpha = 2(8.0)/(2.0)^2 = 4.0$ rad/s². Then $\omega = \alpha t = (4.0)(3.0) = 12$ rad/s.`, R`This is the average angular velocity over the first $3.0$ s, $\theta/t = 18/3.0$, not the value at $t = 3.0$ s.`, R`This is the angular position at $t = 2.0$ s, read from the graph.`, R`This is the angular acceleration, not the angular velocity.`] }),
  mc(4, "moderate", { stem: R`A winch drum starts from rest and speeds up with a constant angular acceleration of $0.80$ rad/s².`, question: R`How long does it take for the drum to reach an angular speed of $2.0$ revolutions per second?`,
    choices: [R`$15.7$ s`, R`$2.50$ s`, R`$0.398$ s`, R`$150$ s`],
    why: [R`$\omega = (2.0)(2\pi) = 12.6$ rad/s, so $t = \omega/\alpha = 12.6/0.80 = 15.7$ s.`, R`This uses $2.0$ as the angular speed in rad/s: $2.0/0.80$.`, R`This divides by $2\pi$ instead of multiplying: $(2.0/2\pi)/0.80$.`, R`This treats $2.0$ rev/s as $120$ rad/s, by multiplying by $60$ instead of $2\pi$.`] }),
  mc(5, "moderate", { stem: R`A rotor is turning at $40$ rad/s when a brake gives it a constant angular acceleration of $-5.0$ rad/s² until it stops.`, question: "How many revolutions does the rotor make while it slows to a stop?",
    choices: [R`$25.5$`, R`$160$`, R`$50.9$`, R`$4.05$`],
    why: [R`$\omega^2 = \omega_0^2 + 2\alpha\theta$ gives $\theta = (40)^2/[2(5.0)] = 160$ rad. Dividing by $2\pi$ rad per revolution gives $25.5$ revolutions.`, R`This is the angle in radians, $160$ rad, reported as revolutions.`, R`This leaves out the factor of $2$ in $\omega^2 = \omega_0^2 + 2\alpha\theta$ and gets $320$ rad, then converts to revolutions.`, R`This divides by $2\pi$ twice.`] }),
  mc(6, "difficult", { set: "q51-s3", question: R`What is the angular displacement of the drum from $t = 0$ to $t = 6.0$ s?`,
    choices: [R`$-12$ rad`, R`$+12$ rad`, R`$0$ rad`, R`$+24$ rad`],
    why: [R`The angular displacement is the signed area under the graph. From $0$ to $4.0$ s the positive triangle (area $+6.0$ rad) cancels the negative one ($-6.0$ rad). From $4.0$ s to $6.0$ s the area is $(-6.0)(2.0) = -12$ rad. The total is $-12$ rad.`, R`This is the correct size with the wrong sign: the drum ends up displaced clockwise from where it started.`, R`This counts only the first $4.0$ s, where the positive and negative areas cancel, and leaves out the last $2.0$ s at constant angular velocity.`, R`This adds the sizes of all three areas, $6 + 6 + 12$, which is the total angle the drum turns, not its displacement.`] }),
  fr("f1a", "(a)", "q51-s4", { topic: "5.1", prompt: R`Determine the angular speed of the blade at the moment the motor is switched off, and the angle through which the blade turns while the motor is on.`,
    rows: [{ name: "Angular speed", earns: R`Uses $\omega = \omega_0 + \alpha t$ with $\omega_0 = 0$ and obtains $\omega = 100$ rad/s.` },
      { name: "Angle", earns: R`Uses $\theta = \omega_0 t + \tfrac12\alpha t^2$ with $\omega_0 = 0$ and obtains $\theta = 125$ rad.` }],
    solution: R`$\omega = \alpha t = (40)(2.5) = 100$ rad/s. $\theta = \tfrac12\alpha t^2 = \tfrac12(40)(2.5)^2 = 125$ rad.` }),
  fr("f1b", "(b)", "q51-s4", { topic: "5.1", prompt: R`Determine the number of revolutions the blade makes after the motor is switched off, until the blade stops.`,
    rows: [{ name: "Equation and angle", earns: R`Uses $\omega^2 = \omega_0^2 + 2\alpha\theta$ with $\omega_0 = 100$ rad/s, $\omega = 0$, and $\alpha = -8.0$ rad/s², and obtains $\theta = 625$ rad.` },
      { name: "Revolutions", earns: R`Converts to revolutions by dividing by $2\pi$ rad per revolution and obtains about $99$ revolutions (accept $99.5$ or $100$).` }],
    solution: R`$0 = (100)^2 + 2(-8.0)\theta$, so $\theta = 625$ rad. Revolutions $= 625/(2\pi) = 99.5$.` }),
];
export default { forms: [{ id: "q51", name: "Topic 5.1 Quiz: Rotational Kinematics", group: "Unit 5: Torque and Rotational Dynamics", items }] };

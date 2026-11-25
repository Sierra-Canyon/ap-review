// AP Physics 1 topic quiz 3.3: potential energy.
import { graph } from "../../plot.js";
const R = String.raw;

// Gravitational potential energy of a 1.0 kg ball launched upward from the edge of a cliff at t = 0 and landing 3.0 s later at the bottom.
const g = 9.8, v0 = 9.8, U = (t) => g * (v0 * t - 0.5 * g * t * t);
const pick = (f, label, alt) => graph({ x: [0, 3], y: [-160, 160], step: { x: 1, y: 80 }, width: 300, height: 220, xname: "t (s)", yname: "U (J)", fns: [{ f }], labels: [[0.35, 135, label]], alt });
const gravU = { key: U, b: (t) => (4 * 48.02 / 9) * t * (3 - t), c: (t) => (-144.06 / 3) * t, d: (t) => -U(t) };

export const sets = {
  "q33-s1": { name: "Energy stored in a spring", label: "Graph", intro: R`The graph shows the elastic potential energy $U$ stored in a spring as a function of the distance $x$ the spring is stretched from its relaxed length.`, sources: [{ title: "", blocks: [{ svg: graph({ x: [0, 0.4], y: [0, 8], step: { x: 0.1, y: 2 }, xname: "x (m)", yname: "U (J)", fns: [{ f: (x) => 50 * x * x }], dots: [[0.2, 2, "closed"]], alt: "Graph of the elastic potential energy of a spring against stretch. The curve rises from the origin, passes through the point (0.20 meters, 2.0 joules), and reaches 8.0 joules at a stretch of 0.40 meters." }) }] }] },
  "q33-s2": { name: "A ball thrown from a cliff", label: "Graphs", intro: R`A $1.0$ kg ball is thrown straight up from the edge of a cliff at $t = 0$ with a speed of $9.8$ m/s. The ball rises, falls past the edge, and lands on the ground at the bottom of the cliff at $t = 3.0$ s. Ignore air resistance. Four graphs of the gravitational potential energy $U$ of the ball and Earth system against time are shown. The zero of potential energy is at the edge of the cliff.`, sources: [{ title: "", blocks: [
    { svg: pick(gravU.b, "Graph A", "Graph A. The curve rises from zero in an arch, peaks at about 48 joules at t = 1.5 seconds, and returns to zero at t = 3.0 seconds."), caption: "" },
    { svg: pick(gravU.key, "Graph B", "Graph B. The curve rises from zero to a peak of about 48 joules at t = 1.0 second, falls through zero at t = 2.0 seconds, and ends at about negative 144 joules at t = 3.0 seconds."), caption: "" },
    { svg: pick(gravU.c, "Graph C", "Graph C. A straight line falls from zero at t = 0 to about negative 144 joules at t = 3.0 seconds."), caption: "" },
    { svg: pick(gravU.d, "Graph D", "Graph D. The curve falls from zero to a minimum of about negative 48 joules at t = 1.0 second, rises through zero at t = 2.0 seconds, and ends at about 144 joules at t = 3.0 seconds."), caption: "" }] }] },
  "q33-s3": { name: "A ball on a platform", label: "Free response", intro: R`A $0.35$ kg ball sits on a platform $4.0$ m above the ground. The ball is then pushed off and comes to rest on a ledge $1.0$ m above the ground. Consider the system of the ball and Earth, and take the ground as the zero of gravitational potential energy.`, sources: [{ title: "", blocks: [{ p: R`Use $g = 9.8$ m/s$^2$.` }] }] },
};

const items = [
  { id: "q33-m1", type: "mcq", skill: "u3", topic: "3.3", difficulty: "easy",
    stem: R`A spring with spring constant $240$ N/m is compressed $0.10$ m from its relaxed length.`,
    question: R`How much elastic potential energy is stored in the spring?`,
    choices: [R`$1.20$ J`, R`$2.40$ J`, R`$24.0$ J`, R`$12.0$ J`],
    why: [R`$U_s = \dfrac{1}{2}kx^2 = \dfrac{1}{2}(240)(0.10)^2 = 1.20$ J.`,
      R`$2.40$ J is $kx^2$, which leaves out the factor of $\dfrac{1}{2}$.`,
      R`$24.0$ J is $kx$, the spring force in newtons, which is not an energy.`,
      R`$12.0$ J is $\dfrac{1}{2}kx$, which does not square the compression.`], answer: 0 },
  { id: "q33-m2", type: "mcq", skill: "u3", topic: "3.3", difficulty: "easy",
    stem: R`A spring is compressed $5.0$ cm from its relaxed length and the elastic potential energy is recorded. The spring is then released, and later it is stretched $5.0$ cm from its relaxed length.`,
    question: R`How does the elastic potential energy of the spring compare in the two cases?`,
    choices: [R`It is the same, because $U_s$ depends on $x^2$.`, R`It is greater when stretched, because the spring is longer.`, R`It is greater when compressed, because the coils push together.`, R`It is negative when compressed, because $x$ is negative.`],
    why: [R`$U_s = \dfrac{1}{2}kx^2$ depends on the square of the distance from the relaxed length, so equal distances give equal energies whether the spring is stretched or compressed.`,
      R`The length of the spring does not matter. The energy depends on how far the spring is from its relaxed length.`,
      R`Compressing and stretching by the same amount store the same energy. The direction of the displacement does not change $x^2$.`,
      R`$x^2$ is positive for either sign of $x$, so the elastic potential energy is never negative.`], answer: 0 },
  { id: "q33-m3", type: "mcq", skill: "u3", topic: "3.3", difficulty: "moderate", set: "q33-s1",
    question: R`What is the spring constant of the spring?`,
    choices: [R`$100$ N/m`, R`$10$ N/m`, R`$20$ N/m`, R`$50$ N/m`],
    why: [R`Read one point from the graph: $U = 2.0$ J at $x = 0.20$ m. From $U = \dfrac{1}{2}kx^2$, $k = \dfrac{2U}{x^2} = \dfrac{2(2.0)}{(0.20)^2} = 100$ N/m.`,
      R`$10$ N/m is $\dfrac{U}{x}$, which treats the energy as proportional to $x$.`,
      R`$20$ N/m is $\dfrac{2U}{x}$, which does not square the stretch.`,
      R`$50$ N/m is $\dfrac{U}{x^2}$, which leaves out the factor of $2$.`], answer: 0 },
  { id: "q33-m4", type: "mcq", skill: "u3", topic: "3.3", difficulty: "moderate",
    stem: R`A $65$ kg skier descends from a ridge at an elevation of $2400$ m above sea level to a lodge at an elevation of $2150$ m above sea level. The system is the skier and Earth.`,
    question: R`What is the change in the gravitational potential energy of the system?`,
    choices: [R`$-1.59 \times 10^{5}$ J`, R`$+1.59 \times 10^{5}$ J`, R`$1.53 \times 10^{6}$ J`, R`$1.37 \times 10^{6}$ J`],
    why: [R`$\Delta U = mg\,\Delta h = (65)(9.8)(2150 - 2400) = -1.59 \times 10^{5}$ J. The potential energy decreases because the skier moves down.`,
      R`$+1.59 \times 10^{5}$ J has the right size but the wrong sign. The skier is lower at the end, so the energy decreases.`,
      R`$1.53 \times 10^{6}$ J is the potential energy at the ridge with sea level as the zero. The question asks for a change.`,
      R`$1.37 \times 10^{6}$ J is the potential energy at the lodge with sea level as the zero. The question asks for a change.`], answer: 0 },
  { id: "q33-m5", type: "mcq", skill: "u3", topic: "3.3", difficulty: "moderate",
    stem: R`A $3.0$ kg block and a $5.0$ kg block are connected by a light string that passes over a frictionless pulley. The blocks are released from rest. The $5.0$ kg block descends $0.80$ m while the $3.0$ kg block rises $0.80$ m. The system is the two blocks and Earth.`,
    question: R`What is the change in the gravitational potential energy of the system?`,
    choices: [R`$-15.7$ J`, R`$-39.2$ J`, R`$-62.7$ J`, R`$+15.7$ J`],
    why: [R`The $5.0$ kg block loses $(5.0)(9.8)(0.80) = 39.2$ J and the $3.0$ kg block gains $(3.0)(9.8)(0.80) = 23.5$ J. $\Delta U = -39.2 + 23.5 = -15.7$ J.`,
      R`$-39.2$ J counts only the descending block and leaves out the energy gained by the rising block.`,
      R`$-62.7$ J treats both blocks as descending, $(5.0 + 3.0)(9.8)(0.80)$.`,
      R`$+15.7$ J has the right size but the wrong sign. The heavier block moves down, so the total potential energy decreases.`], answer: 0 },
  { id: "q33-m6", type: "mcq", skill: "u3", topic: "3.3", difficulty: "difficult", set: "q33-s2",
    question: R`Which graph correctly shows the gravitational potential energy of the ball and Earth system as a function of time?`,
    choices: ["Graph B", "Graph A", "Graph C", "Graph D"],
    why: [R`With the zero at the edge, $U = mgh$, where $h = v_0 t - \dfrac{1}{2}gt^2 = 9.8t - 4.9t^2$. The ball rises to $4.9$ m at $t = 1.0$ s ($U = 48$ J), passes the edge again at $t = 2.0$ s, and is $14.7$ m below the edge at $t = 3.0$ s ($U = -144$ J).`,
      R`Graph A has the ball return to the zero level at $t = 3.0$ s. The ball lands below the edge of the cliff, so $U$ ends negative.`,
      R`Graph C is a straight line, which would mean the height changes at a constant rate. The ball's velocity changes because of gravity.`,
      R`Graph D has the signs reversed, as if $U$ were measured with downward as the positive direction. $U$ increases as the ball goes up.`], answer: 0 },
  { id: "q33-f1a", type: "frq", skill: "u3", topic: "3.3", set: "q33-s3", part: "(a)",
    prompt: R`Calculate the gravitational potential energy of the system when the ball is on the platform.`,
    rows: [{ name: "Potential energy", earns: R`Uses $U_g = mgh$ and obtains $13.7$ J.` }],
    solution: R`$U_g = mgh = (0.35)(9.8)(4.0) = 13.7$ J.` },
  { id: "q33-f1b", type: "frq", skill: "u3", topic: "3.3", set: "q33-s3", part: "(b)",
    prompt: R`Calculate the change in the gravitational potential energy of the system as the ball moves from the platform to the ledge.`,
    rows: [{ name: "Change in potential energy", earns: R`Obtains $-10.3$ J, with a negative sign (or states a decrease of $10.3$ J).` }],
    solution: R`$\Delta U_g = mg\,\Delta h = (0.35)(9.8)(1.0 - 4.0) = -10.3$ J. The potential energy decreases by $10.3$ J.` },
  { id: "q33-f1c", type: "frq", skill: "u3", topic: "3.3", set: "q33-s3", part: "(c)",
    prompt: R`A student says, "The ball has $13.7$ J of gravitational potential energy by itself, whether or not Earth is there." Explain why Earth must be included in the system.`,
    rows: [{ name: "Explanation", earns: R`States that gravitational potential energy belongs to the interaction between the ball and Earth, so without Earth in the system there is no gravitational potential energy to count.` }],
    solution: R`Gravitational potential energy is stored in the gravitational interaction between two objects, here the ball and Earth. A system that contains only the ball has no gravitational potential energy, because the force of gravity from Earth would then be an external force doing work on the system.` },
];
export default { forms: [{ id: "q33", name: "Topic 3.3 Quiz: Potential Energy", group: "Unit 3: Work, Energy, and Power", items }] };

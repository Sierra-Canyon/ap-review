// AP Physics 1 topic quiz 7.4: Energy of simple harmonic oscillators.
import { graph, bars } from "../../plot.js";
const R = String.raw;
const one = (blocks, title = "") => [{ title, blocks }];
const pics = (word, svgs) => svgs.map((s, i) => ({ title: `${word} ${"ABCD"[i]}`, blocks: [{ svg: s }] }));

// U = (1/2)(500) x^2 and total energy 0.40 J
const uGraph = graph({ width: 400, height: 250, x: [-0.05, 0.05], y: [0, 0.5], step: { x: 0.02, y: 0.1 }, xname: "x (m)", yname: "Energy (J)", fns: [{ f: (x) => 250 * x * x }], hlines: [{ y: 0.4 }],
  labels: [[-0.03, 0.44, "E (total)"], [0.034, 0.15, "U"]],
  alt: "Graph of energy in joules against position in meters. A parabola labeled U opens upward with its minimum of 0 at x equal to 0, passes through 0.10 joules at x equal to plus and minus 0.020 meters, and reaches 0.40 joules at x equal to plus and minus 0.040 meters. A dashed horizontal line labeled E, the total energy, is at 0.40 joules." });
// four bar charts at x = A/2: K, U, total
const ch = (k, u, tag, alt) => bars({ width: 300, height: 210, labels: ["Kinetic", "Elastic", "Total"], values: [k, u, k + u], y: [0, 5], step: 1, yname: `${tag}: energy (J)`, alt });
const chartPics = [
  ch(2, 2, "Chart A", "Chart A: bars of 2 joules for kinetic energy, 2 joules for elastic potential energy, and 4 joules for the total."),
  ch(3, 1, "Chart B", "Chart B: bars of 3 joules for kinetic energy, 1 joule for elastic potential energy, and 4 joules for the total."),
  ch(1, 3, "Chart C", "Chart C: bars of 1 joule for kinetic energy, 3 joules for elastic potential energy, and 4 joules for the total."),
  ch(0, 4, "Chart D", "Chart D: a kinetic energy bar of 0, an elastic potential energy bar of 4 joules, and a total of 4 joules."),
];
// K(t) = 0.20 sin^2(pi t / 0.6), a 0.50 kg block with T = 1.2 s
const kGraph = graph({ width: 400, height: 240, x: [0, 1.8], y: [0, 0.25], step: { x: 0.3, y: 0.05 }, xname: "t (s)", yname: "K (J)", fns: [{ f: (t) => 0.2 * Math.sin((Math.PI * t) / 0.6) ** 2 }],
  alt: "Kinetic energy versus time for a block on a spring. The curve starts at 0 at 0 seconds, rises to a maximum of 0.20 joules at 0.30 seconds, returns to 0 at 0.60 seconds, rises to 0.20 joules again at 0.90 seconds, returns to 0 at 1.2 seconds, and reaches 0.20 joules at 1.5 seconds and 0 at 1.8 seconds." });

export const sets = {
  "q74-s1": { name: "Energy of an oscillator", label: "Graph", intro: R`A block oscillates on a horizontal spring on a frictionless surface. The graph shows the elastic potential energy $U$ stored in the spring and the total mechanical energy $E$ as functions of the block's position $x$, where $x = 0$ is the equilibrium position.`, sources: one([{ svg: uGraph }]) },
  "q74-s2": { name: "Four bar charts", label: "Bar charts", intro: R`A block oscillates on a horizontal spring on a frictionless surface with amplitude $A$. Charts A through D show the block's kinetic energy, the elastic potential energy of the spring, and their total.`, sources: pics("Chart", chartPics) },
  "q74-s3": { name: "Kinetic energy of a block", label: "Graph", intro: R`A $0.50$ kg block oscillates on a horizontal spring on a frictionless surface. The graph shows the block's kinetic energy $K$ as a function of time.`, sources: one([{ svg: kGraph }]) },
  "q74-s4": { name: "A block on a spring", label: "Free response", intro: R`A $0.25$ kg block on a frictionless horizontal surface is attached to a spring with spring constant $100$ N/m. The block is pulled $0.10$ m from its equilibrium position and released from rest.`,
    sources: one([{ p: R`Air resistance is negligible.` }]) },
};

const mc = (id, difficulty, o) => ({ id: `q74-${id}`, type: "mcq", skill: "u7", topic: "7.4", difficulty, ...o, answer: 0 });
const items = [
  mc("m1", "easy", { stem: R`A $0.10$ kg block on a frictionless horizontal surface is attached to a spring with spring constant $360$ N/m. The block is pulled $0.050$ m from equilibrium and released from rest.`,
    question: R`What is the maximum speed of the block?`,
    choices: [R`$3.0$ m/s`, R`$9.0$ m/s`, R`$2.1$ m/s`, R`$4.2$ m/s`],
    why: [R`Energy is conserved: $\tfrac12 kA^2 = \tfrac12 mv^2$, so $v = A\sqrt{k/m} = (0.050)\sqrt{360/0.10} = 3.0$ m/s.`,
      R`This is $v^2$, $kA^2/m = 9.0$. The speed is its square root.`,
      R`This drops the $\tfrac12$ from the kinetic energy only: $mv^2 = \tfrac12 kA^2$ gives $\sqrt{kA^2/2m} = 2.1$ m/s.`,
      R`This drops the $\tfrac12$ from the elastic energy only: $\tfrac12 mv^2 = kA^2$ gives $\sqrt{2kA^2/m} = 4.2$ m/s.`] }),
  mc("m2", "easy", { set: "q74-s1", question: R`What is the kinetic energy of the oscillator when the block is $0.020$ m from the equilibrium position?`,
    choices: [R`$0.30$ J`, R`$0.10$ J`, R`$0.40$ J`, R`$0.20$ J`],
    why: [R`At $x = 0.020$ m the graph shows $U = 0.10$ J, and the total is $E = 0.40$ J. Then $K = E - U = 0.30$ J.`,
      R`This is the elastic potential energy at that position, not the kinetic energy.`,
      R`This is the total mechanical energy. Part of it is stored in the spring at this position.`,
      R`This treats $U$ as proportional to $x$, giving $U = 0.20$ J at half the amplitude. $U$ is proportional to $x^2$, so it is $0.10$ J.`] }),
  mc("m3", "moderate", { set: "q74-s2", question: R`Which chart shows the energies of the block when it is at $x = A/2$?`,
    choices: ["Chart B", "Chart A", "Chart C", "Chart D"],
    why: [R`$U = \tfrac12 k(A/2)^2 = \tfrac14\left(\tfrac12 kA^2\right)$, so the spring holds one fourth of the total energy and the kinetic energy is the other three fourths. Chart B shows $3$ and $1$ out of $4$.`,
      R`This splits the energy equally, as if $U$ were proportional to $x$ rather than $x^2$.`,
      R`This swaps the two energies, putting three fourths of the energy in the spring.`,
      R`This puts all of the energy in the spring, which is correct only at $x = \pm A$.`] }),
  mc("m4", "moderate", { stem: R`A spring hangs vertically, and a $3.0$ kg block hanging at rest stretches it by $0.12$ m. The block is then attached to the same spring on a frictionless horizontal table. The block is pulled to a position where the spring is stretched by $0.18$ m and released from rest. Use $g = 9.8$ m/s².`,
    question: R`What is the speed of the block when it passes the position at which the spring is relaxed?`,
    choices: [R`$1.6$ m/s`, R`$0.52$ m/s`, R`$1.1$ m/s`, R`$2.6$ m/s`],
    why: [R`The spring constant is $k = mg/d = (3.0)(9.8)/0.12 = 245$ N/m. Then $\tfrac12 kA^2 = \tfrac12 mv^2$ gives $v = A\sqrt{k/m} = (0.18)\sqrt{245/3.0} = 1.6$ m/s.`,
      R`This finds $k$ as $m/d = 25$, leaving out $g$, so the spring seems much softer.`,
      R`This uses the hanging stretch, $0.12$ m, as the amplitude instead of the $0.18$ m the block is pulled on the table.`,
      R`This is $v^2 = kA^2/m = 2.6$, not the speed.`] }),
  mc("m5", "difficult", { set: "q74-s3", question: R`What is the spring constant of the spring?`,
    choices: [R`$14$ N/m`, R`$55$ N/m`, R`$220$ N/m`, R`$2.6$ N/m`],
    why: [R`The block passes through equilibrium, where $K$ is greatest, twice in each cycle. The peaks are $0.60$ s apart, so the period is $T = 1.2$ s. Then $k = m(2\pi/T)^2 = (0.50)(2\pi/1.2)^2 = 14$ N/m.`,
      R`This reads the spacing between peaks, $0.60$ s, as the period. The kinetic energy graph repeats twice per oscillation.`,
      R`This reads the time of the first peak, $0.30$ s, as the period.`,
      R`This does not square the angular frequency: $k = m\omega = (0.50)(5.24) = 2.6$.`] }),
  mc("m6", "moderate", { stem: R`A block on a horizontal spring oscillates with amplitude $A$. The spring is replaced with a spring that has twice the spring constant, and the block is again released from rest at amplitude $A$.`,
    question: R`How do the block's total mechanical energy and maximum speed change?`,
    choices: [R`Energy doubles; maximum speed increases by $\sqrt{2}$`, R`Energy doubles; maximum speed doubles`, R`Energy is unchanged; maximum speed increases by $\sqrt{2}$`, R`Energy increases by $\sqrt{2}$; maximum speed doubles`],
    why: [R`The energy is $\tfrac12 kA^2$, so doubling $k$ at the same $A$ doubles it. Then $v_{\max} = A\sqrt{k/m}$ increases by a factor of $\sqrt{2}$.`,
      R`The energy doubles, but the maximum speed is proportional to $\sqrt{k}$, so it does not double.`,
      R`The amplitude is the same, but the stored energy $\tfrac12 kA^2$ depends on $k$ and doubles.`,
      R`The energy is proportional to $k$, not $\sqrt{k}$, and the maximum speed is proportional to $\sqrt{k}$, not $k$.`] }),
  { id: "q74-f1a", type: "frq", skill: "u7", topic: "7.4", set: "q74-s4", part: "(a)",
    prompt: R`Calculate the total mechanical energy of the block and spring.`,
    rows: [{ name: "Energy", earns: R`Uses $E = \tfrac12 kA^2$ with the amplitude of $0.10$ m to obtain $0.50$ J.` }],
    solution: R`At the release point the block is at rest, so all the energy is stored in the spring: $E = \tfrac12 kA^2 = \tfrac12 (100)(0.10)^2 = 0.50$ J.` },
  { id: "q74-f1b", type: "frq", skill: "u7", topic: "7.4", set: "q74-s4", part: "(b)",
    prompt: R`Calculate the maximum speed of the block.`,
    rows: [{ name: "Maximum speed", earns: R`Sets the kinetic energy at equilibrium equal to the total energy and obtains $v = 2.0$ m/s.` }],
    solution: R`At equilibrium all the energy is kinetic: $\tfrac12 mv^2 = 0.50$ J, so $v = \sqrt{\dfrac{2(0.50)}{0.25}} = 2.0$ m/s.` },
  { id: "q74-f1c", type: "frq", skill: "u7", topic: "7.4", set: "q74-s4", part: "(c)",
    prompt: R`On one set of axes, sketch graphs of the block's kinetic energy $K$ and the spring's elastic potential energy $U$ as functions of the block's position $x$ from $x = -0.10$ m to $x = +0.10$ m. Label the axes with quantities and units, and label the maximum energy value.`,
    rows: [{ name: "Elastic energy", earns: R`Draws $U$ as an upward-opening parabola with its minimum of $0$ at $x = 0$ and a maximum of $0.50$ J at $x = \pm 0.10$ m.` },
      { name: "Kinetic energy", earns: R`Draws $K$ as a downward-opening parabola with its maximum of $0.50$ J at $x = 0$ and $0$ at $x = \pm 0.10$ m, so that the two curves add to a constant, with the axes labeled with quantities and units.` }],
    solution: R`The vertical axis is energy in J, and the horizontal axis is $x$ in m. The $U$ curve is $\tfrac12 kx^2$, an upward-opening parabola that is $0$ at $x = 0$ and $0.50$ J at $x = \pm 0.10$ m. The $K$ curve is $0.50 - \tfrac12 kx^2$, a downward-opening parabola that is $0.50$ J at $x = 0$ and $0$ at $x = \pm 0.10$ m. The curves cross at $x = \pm 0.071$ m, where each is $0.25$ J, and the sum is the constant $0.50$ J at every position.` },
];

export default { forms: [{ id: "q74", group: "Unit 7: Oscillations", name: "Topic 7.4 Quiz: Energy of Simple Harmonic Oscillators", items }] };

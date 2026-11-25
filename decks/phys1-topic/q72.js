// AP Physics 1 topic quiz 7.2: Frequency and period of simple harmonic motion.
import { graph } from "../../plot.js";
const R = String.raw;
const one = (blocks, title = "") => [{ title, blocks }];

// x = 0.05 cos(2 pi t / 0.6), a 0.30 kg block
const xg = graph({ width: 400, height: 240, x: [0, 1.2], y: [-7.5, 7.5], step: { x: 0.1, y: 2.5 }, labelEvery: 2, xname: "t (s)", yname: "x (cm)", fns: [{ f: (t) => 5 * Math.cos((2 * Math.PI * t) / 0.6) }],
  alt: "Position versus time for a block. The curve starts at the maximum of 5.0 centimeters at 0 seconds, crosses 0 at 0.15 seconds, reaches the minimum of negative 5.0 centimeters at 0.30 seconds, crosses 0 at 0.45 seconds, and returns to 5.0 centimeters at 0.60 seconds. It repeats for a second full cycle that ends at 1.2 seconds." });

export const sets = {
  "q72-s1": { name: "Position of a block", label: "Graph", intro: R`A $0.30$ kg block oscillates on a horizontal spring on a frictionless surface. The graph shows the block's position $x$ as a function of time.`, sources: one([{ svg: xg }]) },
  "q72-s2": { name: "A block on a spring", label: "Free response", intro: R`A $0.90$ kg block on a frictionless horizontal surface is attached to a spring with spring constant $100$ N/m. The block is pulled aside and released from rest, and it oscillates.`,
    sources: one([{ p: R`Air resistance is negligible.` }]) },
};

const mc = (id, difficulty, o) => ({ id: `q72-${id}`, type: "mcq", skill: "u7", topic: "7.2", difficulty, ...o, answer: 0 });
const items = [
  mc("m1", "easy", { stem: R`A $0.50$ kg block on a frictionless horizontal surface is attached to a spring with spring constant $200$ N/m and oscillates.`,
    question: R`What is the frequency of the oscillation?`,
    choices: [R`$3.2$ Hz`, R`$20$ Hz`, R`$0.31$ Hz`, R`$130$ Hz`],
    why: [R`$T = 2\pi\sqrt{m/k} = 2\pi\sqrt{0.50/200} = 0.314$ s, so $f = 1/T = 3.2$ Hz.`,
      R`This is the angular frequency, $\omega = \sqrt{k/m} = 20$ rad/s. The frequency is $\omega/2\pi$.`,
      R`This is the period in seconds, $0.31$ s, reported as a frequency. The frequency is the reciprocal of the period.`,
      R`This multiplies $\omega$ by $2\pi$ instead of dividing: $2\pi(20) = 126$.`] }),
  mc("m2", "easy", { question: R`A student lengthens the string of a simple pendulum from $0.40$ m to $1.60$ m. By what factor does the period of the pendulum change?`,
    choices: [R`$2$`, R`$4$`, R`$16$`, R`$0.5$`],
    why: [R`$T = 2\pi\sqrt{L/g}$ is proportional to $\sqrt{L}$. The length increases by a factor of $4$, so the period increases by a factor of $\sqrt{4} = 2$.`,
      R`This treats the period as proportional to the length. It is proportional to the square root of the length.`,
      R`This squares the length ratio. The period depends on $\sqrt{L}$, not $L^2$.`,
      R`This inverts the relationship. A longer pendulum has a longer period, not a shorter one.`] }),
  mc("m3", "moderate", { set: "q72-s1", question: R`What is the spring constant of the spring?`,
    choices: [R`$33$ N/m`, R`$130$ N/m`, R`$0.83$ N/m`, R`$3.1$ N/m`],
    why: [R`The graph repeats every $0.60$ s, so $T = 0.60$ s. Then $k = m(2\pi/T)^2 = (0.30)(2\pi/0.60)^2 = 33$ N/m.`,
      R`This reads the time of the first minimum, $0.30$ s, as the period. That is half a period, and it gives $k = (0.30)(2\pi/0.30)^2 = 131$ N/m.`,
      R`This uses $k = m/T^2 = 0.30/0.36$ and leaves out the factor of $4\pi^2$.`,
      R`This does not square the angular frequency: $k = m\omega = (0.30)(10.5) = 3.1$ N/m.`] }),
  mc("m4", "difficult", { stem: R`A block of mass $m$ is attached to two identical springs, each with spring constant $k$, and oscillates on a frictionless horizontal surface. In arrangement 1 the springs are joined end to end, with the block on one end and a wall on the other. In arrangement 2 the two springs are attached side by side between the block and the wall, so they stretch together by the same amount as the block moves.`,
    question: R`What is the ratio of the period in arrangement 1 to the period in arrangement 2?`,
    choices: [R`$2$`, R`$1.4$`, R`$4$`, R`$0.5$`],
    why: [R`Springs in series have an effective constant $k/2$, and springs side by side have $2k$. Then $T_1/T_2 = \sqrt{\dfrac{m/(k/2)}{m/(2k)}} = \sqrt{4} = 2$.`,
      R`This is $\sqrt{2}$, the ratio of arrangement 1 to a single spring. It ignores that arrangement 2 has twice the stiffness.`,
      R`This finds the ratio of the effective spring constants, $2k/(k/2) = 4$, without taking the square root.`,
      R`This inverts the ratio. The softer arrangement, with the springs in series, has the longer period.`] }),
  mc("m5", "moderate", { question: R`A cart on a spring oscillates at $5.0$ Hz. The cart is replaced with one that has $3$ times the mass, and the spring is replaced with one that has $12$ times the spring constant. What is the new frequency?`,
    choices: [R`$10$ Hz`, R`$20$ Hz`, R`$2.5$ Hz`, R`$17$ Hz`],
    why: [R`$f = \dfrac{1}{2\pi}\sqrt{k/m}$, so $f$ scales with $\sqrt{k/m}$. The ratio $k/m$ increases by $12/3 = 4$, so $f$ increases by $\sqrt{4} = 2$, to $10$ Hz.`,
      R`This multiplies the frequency by $k/m = 4$ without taking the square root.`,
      R`This inverts the factor, using $\sqrt{m/k} = 1/2$. The stiffer spring raises the frequency more than the extra mass lowers it.`,
      R`This applies only the spring change, $\sqrt{12} = 3.5$, and leaves out the effect of the larger mass.`] }),
  mc("m6", "moderate", { stem: R`On Earth, a pendulum clock and a clock that keeps time with a block oscillating on a spring both run correctly. Both clocks are moved to Mars, where the gravitational field strength is $0.38$ times its value on Earth. The spring clock oscillates horizontally.`,
    question: R`Which statement describes how the clocks run on Mars?`,
    choices: [R`Only the pendulum clock runs slow, because only its period depends on the value of $g$`,
      R`Only the spring clock runs slow, because the block weighs less and stretches the spring less`,
      R`Both clocks run slow, because both depend on the gravitational force on the oscillating mass`,
      R`Both clocks keep correct time, because the period of any oscillator is independent of location`],
    why: [R`The pendulum's period is $2\pi\sqrt{L/g}$, so a smaller $g$ gives a longer period and a slow clock. The spring clock's period is $2\pi\sqrt{m/k}$, which does not involve $g$.`,
      R`A horizontal spring clock's period depends on $m$ and $k$ only. The block's weight is balanced by the surface and plays no part.`,
      R`The spring clock's period does not depend on $g$, so it keeps correct time.`,
      R`The pendulum's period depends on $g$, so it changes when $g$ changes.`] }),
  { id: "q72-f1a", type: "frq", skill: "u7", topic: "7.2", set: "q72-s2", part: "(a)",
    prompt: R`Calculate the period of the oscillation.`,
    rows: [{ name: "Equation", earns: R`Uses $T = 2\pi\sqrt{m/k}$ with the given values substituted.` },
      { name: "Period", earns: R`Obtains $T = 0.60$ s, with units.` }],
    solution: R`$T = 2\pi\sqrt{\dfrac{m}{k}} = 2\pi\sqrt{\dfrac{0.90}{100}} = 0.60$ s.` },
  { id: "q72-f1b", type: "frq", skill: "u7", topic: "7.2", set: "q72-s2", part: "(b)",
    prompt: R`The block is replaced with a $3.6$ kg block, and the experiment is repeated with the same spring and the same amplitude. By what factor does the period change? Justify your answer.`,
    rows: [{ name: "Claim", earns: R`States that the period increases by a factor of $2$ (the new period is about $1.2$ s).` },
      { name: "Justification", earns: R`Justifies with $T = 2\pi\sqrt{m/k}$: the period is proportional to $\sqrt{m}$, the mass increases by a factor of $4$, so the period increases by a factor of $\sqrt{4} = 2$.` }],
    solution: R`The period of a mass on a spring is $T = 2\pi\sqrt{m/k}$, so for the same $k$ the period is proportional to $\sqrt{m}$. The mass is $4$ times as large, so the period is $\sqrt{4} = 2$ times as large, about $1.2$ s. The amplitude does not affect the period.` },
];

export default { forms: [{ id: "q72", group: "Unit 7: Oscillations", name: "Topic 7.2 Quiz: Frequency and Period of Simple Harmonic Motion", items }] };

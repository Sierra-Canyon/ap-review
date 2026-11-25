// AP Physics 1 topic quiz 7.3: Representing and analyzing simple harmonic motion.
import { graph } from "../../plot.js";
const R = String.raw;
const one = (blocks, title = "") => [{ title, blocks }];
const pics = (word, svgs) => svgs.map((s, i) => ({ title: `${word} ${"ABCD"[i]}`, blocks: [{ svg: s }] }));

// four candidate position graphs, T = 3.0 s
const T3 = 3.0, s = (t) => Math.sin((2 * Math.PI * t) / T3), c = (t) => Math.cos((2 * Math.PI * t) / T3);
const pg = (f, tag, alt) => graph({ width: 300, height: 200, x: [0, 3.5], y: [-1.4, 1.4], step: { x: 0.5, y: 1 }, labelEvery: 2, xname: "t (s)", yname: "x", fns: [{ f, to: 3 }], labels: [[0.1, 1.2, tag]], alt });
const posPics = [
  pg(c, "Graph A", "Graph A: a cosine curve that starts at its maximum, crosses 0 at 0.75 seconds, reaches its minimum at 1.5 seconds, crosses 0 at 2.25 seconds, and returns to its maximum at 3.0 seconds."),
  pg((t) => -s(t), "Graph B", "Graph B: an upside-down sine curve that starts at 0, falls to its minimum at 0.75 seconds, crosses 0 at 1.5 seconds, reaches its maximum at 2.25 seconds, and returns to 0 at 3.0 seconds."),
  pg(s, "Graph C", "Graph C: a sine curve that starts at 0, rises to its maximum at 0.75 seconds, crosses 0 at 1.5 seconds, reaches its minimum at 2.25 seconds, and returns to 0 at 3.0 seconds."),
  pg((t) => -c(t), "Graph D", "Graph D: an upside-down cosine curve that starts at its minimum, crosses 0 at 0.75 seconds, reaches its maximum at 1.5 seconds, crosses 0 at 2.25 seconds, and returns to its minimum at 3.0 seconds."),
];
// acceleration a = -6.0 cos(2 pi t / 1.5)
const aGraph = graph({ width: 400, height: 240, x: [0, 3], y: [-8, 8], step: { x: 0.25, y: 2 }, labelEvery: 2, xname: "t (s)", yname: "a (m/s²)", fns: [{ f: (t) => -6 * Math.cos((2 * Math.PI * t) / 1.5) }],
  alt: "Acceleration versus time for a block on a spring. The curve starts at negative 6.0 meters per second squared at 0 seconds, crosses 0 at 0.375 seconds, reaches positive 6.0 at 0.75 seconds, crosses 0 at 1.125 seconds, and returns to negative 6.0 at 1.5 seconds. It repeats for a second cycle that ends at 3.0 seconds." });
// x1 = 0.10 cos(pi t), x2 = 0.10 sin(pi t)
const twoX = graph({ width: 400, height: 240, x: [0, 2], y: [-0.15, 0.15], step: { x: 0.25, y: 0.05 }, labelEvery: 2, xname: "t (s)", yname: "x (m)", fns: [{ f: (t) => 0.1 * Math.cos(Math.PI * t) }, { f: (t) => 0.1 * Math.sin(Math.PI * t), dash: true }], labels: [[1.0, 0.13, "Block 1 solid, block 2 dashed"]],
  alt: "Position versus time for two blocks, each with amplitude 0.10 meters and period 2.0 seconds. The solid curve for block 1 starts at the maximum of 0.10 meters at 0 seconds, crosses 0 at 0.5 seconds, reaches negative 0.10 meters at 1.0 second, and returns to 0.10 meters at 2.0 seconds. The dashed curve for block 2 starts at 0, reaches 0.10 meters at 0.5 seconds, crosses 0 at 1.0 second, reaches negative 0.10 meters at 1.5 seconds, and returns to 0 at 2.0 seconds. The curves cross at 0.25 seconds and at 1.25 seconds." });

export const sets = {
  "q73-s1": { name: "Four position graphs", label: "Graphs", intro: R`Graphs A through D each show the position $x$ of a block that oscillates on a horizontal spring with a period of $3.0$ s. Positive $x$ is to the right.`, sources: pics("Graph", posPics) },
  "q73-s2": { name: "Acceleration of a block", label: "Graph", intro: R`The graph shows the acceleration of a block on a horizontal spring as a function of time.`, sources: one([{ svg: aGraph }]) },
  "q73-s3": { name: "Two oscillating blocks", label: "Graph", intro: R`Block 1 and block 2 have the same mass and are attached to identical horizontal springs on a frictionless surface. The graph shows the position of each block as a function of time.`, sources: one([{ svg: twoX }]) },
  "q73-s4": { name: "A block released from rest", label: "Free response", intro: R`A $0.50$ kg block on a frictionless horizontal surface is attached to a spring. The block is pulled to $x = +0.12$ m, where $x = 0$ is the equilibrium position, and released from rest at $t = 0$. The block oscillates with a period of $0.80$ s.`,
    sources: one([{ p: R`Positive $x$ and positive force are to the right.` }]) },
};

const mc = (id, difficulty, o) => ({ id: `q73-${id}`, type: "mcq", skill: "u7", topic: "7.3", difficulty, ...o, answer: 0 });
const items = [
  mc("m1", "easy", { set: "q73-s1", stem: R`At $t = 0$ the block passes through its equilibrium position moving to the right.`, question: R`Which graph shows the position of the block as a function of time?`,
    choices: ["Graph C", "Graph A", "Graph B", "Graph D"],
    why: [R`The block starts at $x = 0$ and moves toward positive $x$, so $x$ rises first. That is a sine curve with a period of $3.0$ s, Graph C.`,
      R`Graph A starts at the maximum, which describes a block released from rest at the right end.`,
      R`Graph B starts at $x = 0$ but moves toward negative $x$, which describes a block moving to the left.`,
      R`Graph D starts at the minimum, which describes a block released from rest at the left end.`] }),
  mc("m2", "easy", { question: R`The position of a block on a spring is given by $x = 0.15\sin(6.0\pi t)$, where $x$ is in meters and $t$ is in seconds. What is the frequency of the oscillation?`,
    choices: [R`$3.0$ Hz`, R`$19$ Hz`, R`$6.0$ Hz`, R`$0.33$ Hz`],
    why: [R`The angular frequency is $\omega = 6.0\pi$ rad/s, so $f = \omega/2\pi = 3.0$ Hz.`,
      R`This reads $6.0\pi = 19$ as the frequency. It is the angular frequency in rad/s.`,
      R`This drops the factor of $\pi$ and treats the coefficient as the frequency. The frequency is $\omega/2\pi$.`,
      R`This is the period, $1/f = 0.33$ s, reported as a frequency.`] }),
  mc("m3", "moderate", { set: "q73-s2", question: R`What is the amplitude of the block's oscillation?`,
    choices: [R`$0.34$ m`, R`$1.4$ m`, R`$14$ m`, R`$0.085$ m`],
    why: [R`The period is $T = 1.5$ s, so $\omega = 2\pi/T = 4.19$ rad/s. The maximum acceleration is $A\omega^2 = 6.0$ m/s², so $A = 6.0/(4.19)^2 = 0.34$ m.`,
      R`This divides by $\omega$ instead of $\omega^2$: $6.0/4.19 = 1.4$.`,
      R`This divides by the square of the frequency, $f^2 = (0.67)^2$, instead of the square of the angular frequency.`,
      R`This reads the time from the first maximum to the first minimum, $0.75$ s, as the period. That gives $\omega = 8.38$ rad/s and $A = 6.0/70.2 = 0.085$ m.`] }),
  mc("m4", "moderate", { stem: R`A block of mass $m$ is attached to a horizontal spring with spring constant $k$ on a frictionless surface. The block is pulled to the right until the elastic potential energy stored in the spring is $U_0$, and it is released from rest at $t = 0$. Positive $x$ is to the right, and $x = 0$ is the equilibrium position.`,
    question: R`Which expression gives the position of the block as a function of time?`,
    choices: [R`$x = \sqrt{\dfrac{2U_0}{k}}\cos\left(\sqrt{\dfrac{k}{m}}\,t\right)$`, R`$x = \sqrt{\dfrac{U_0}{k}}\cos\left(\sqrt{\dfrac{k}{m}}\,t\right)$`, R`$x = \dfrac{2U_0}{k}\cos\left(\sqrt{\dfrac{k}{m}}\,t\right)$`, R`$x = \sqrt{\dfrac{2U_0}{k}}\sin\left(\sqrt{\dfrac{k}{m}}\,t\right)$`],
    why: [R`The amplitude comes from $U_0 = \tfrac12 kA^2$, so $A = \sqrt{2U_0/k}$. The block starts at $x = +A$, so $x = A\cos(\omega t)$ with $\omega = \sqrt{k/m}$.`,
      R`This drops the factor of $\tfrac12$ in the elastic energy, using $U_0 = kA^2$.`,
      R`This solves $U_0 = \tfrac12 kA$ for $A$, without squaring the amplitude.`,
      R`A sine function starts at $x = 0$. The block starts at its maximum, which needs a cosine.`] }),
  mc("m5", "difficult", { set: "q73-s3", question: R`At what time after $t = 0$ is the net force on block 1 first equal to the net force on block 2?`,
    choices: [R`$0.25$ s`, R`$0.50$ s`, R`$0.75$ s`, R`$1.00$ s`],
    why: [R`The springs and masses are identical, so the net forces are equal only when the positions are equal. The curves first cross at $0.25$ s, where $0.10\cos(\pi t) = 0.10\sin(\pi t)$.`,
      R`At $0.50$ s block 2 is at its maximum, $0.10$ m, and block 1 is at $x = 0$, so the forces are different.`,
      R`At $0.75$ s the positions are equal in size but opposite in sign, so the forces are equal in size but opposite in direction.`,
      R`At $1.00$ s block 1 is at its minimum, $-0.10$ m, and block 2 is at $x = 0$.`] }),
  mc("m6", "moderate", { question: R`The position of a block on a spring is $x = 0.050\cos(12t)$, where $x$ is in meters and $t$ is in seconds. What is the maximum magnitude of the block's acceleration?`,
    choices: [R`$7.2$ m/s²`, R`$0.60$ m/s²`, R`$0.36$ m/s²`, R`$86$ m/s²`],
    why: [R`The maximum acceleration is $A\omega^2 = (0.050)(12)^2 = 7.2$ m/s².`,
      R`This is the maximum speed, $A\omega = 0.60$ m/s, not the maximum acceleration.`,
      R`This squares the maximum speed, $(A\omega)^2$. The maximum acceleration is $A\omega^2$.`,
      R`This multiplies the amplitude by $\omega^3$. The acceleration involves $\omega^2$.`] }),
  { id: "q73-f1a", type: "frq", skill: "u7", topic: "7.3", set: "q73-s4", part: "(a)",
    prompt: R`Calculate the angular frequency of the block's motion and the spring constant of the spring.`,
    rows: [{ name: "Angular frequency", earns: R`Uses $\omega = 2\pi/T$ to obtain $7.9$ rad/s.` },
      { name: "Spring constant", earns: R`Uses $k = m\omega^2$ to obtain $31$ N/m.` }],
    solution: R`$\omega = \dfrac{2\pi}{T} = \dfrac{2\pi}{0.80} = 7.9$ rad/s. Since $\omega = \sqrt{k/m}$, $k = m\omega^2 = (0.50)(7.85)^2 = 31$ N/m.` },
  { id: "q73-f1b", type: "frq", skill: "u7", topic: "7.3", set: "q73-s4", part: "(b)",
    prompt: R`On a set of axes, sketch a graph of the net force on the block as a function of time from $t = 0$ to $t = 1.6$ s. Label the axes with quantities and units, and label the values of the force at its extremes.`,
    rows: [{ name: "Shape and timing", earns: R`Draws a sinusoidal curve that starts at its minimum at $t = 0$, crosses zero at $0.20$ s, reaches its maximum at $0.40$ s, and shows two full cycles, repeating every $0.80$ s.` },
      { name: "Values and labels", earns: R`Labels the extreme values as $-3.7$ N and $+3.7$ N, with the axes labeled with force in N and time in s.` }],
    solution: R`The drawing has $F$ in N on the vertical axis and $t$ in s on the horizontal axis. At $t = 0$ the block is at $x = +0.12$ m, so the net force is $-kA = -(30.8)(0.12) = -3.7$ N, the minimum. The curve is a negative cosine with a period of $0.80$ s: it crosses zero at $0.20$ s, reaches $+3.7$ N at $0.40$ s, crosses zero at $0.60$ s, returns to $-3.7$ N at $0.80$ s, and repeats through $1.6$ s.` },
];

export default { forms: [{ id: "q73", group: "Unit 7: Oscillations", name: "Topic 7.3 Quiz: Representing and Analyzing Simple Harmonic Motion", items }] };

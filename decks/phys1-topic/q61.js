// AP Physics 1 topic quiz 6.1: Rotational kinetic energy.
import { scene } from "../../diagrams.js";
const R = String.raw;
const one = (blocks, title = "") => [{ title, blocks }];

const dumbbell = () => scene({ width: 360, height: 170, alt: "A light horizontal rod with a pivot at one point. A sphere labeled 2.0 kg sits 0.30 meters to the left of the pivot, and a sphere labeled 1.0 kg sits 0.60 meters to the right of the pivot.",
  items: [
    { line: { from: [50, 95], to: [320, 95] } }, { pivot: { x: 140, y: 95, size: 26 } },
    { circle: { x: 50, y: 95, r: 15 } }, { circle: { x: 320, y: 95, r: 11 } },
    { label: { x: 50, y: 125, text: "2.0 kg" } }, { label: { x: 320, y: 125, text: "1.0 kg" } },
    { label: { x: 95, y: 108, text: "0.30 m" } }, { label: { x: 230, y: 108, text: "0.60 m" } },
  ] });

export const sets = {
  "q61-s1": { name: "Two spheres on a rod", label: "Diagram", intro: R`Two small spheres are fixed to a rod of negligible mass. The rod turns about a vertical axis through the pivot at a constant angular speed of $4.0$ rad/s. The diagram shows the masses and their distances from the pivot.`, sources: one([{ svg: dumbbell() }]) },
  "q61-s2": { name: "A rolling hoop", label: "Free response", intro: R`A thin hoop of mass $2.0$ kg and radius $0.40$ m rolls without slipping along a level gym floor. The center of the hoop moves at a constant speed of $3.0$ m/s. The rotational inertia of the hoop about its center is $MR^2$.`,
    sources: one([{ p: R`Air resistance is negligible.` }]) },
};

const items = [
  { id: "q61-m1", type: "mcq", skill: "u6", topic: "6.1", difficulty: "easy",
    stem: R`A helicopter's main rotor has a rotational inertia of $1200$ kg·m² about its axis. The rotor turns at a constant $30$ rad/s.`,
    question: R`What is the rotational kinetic energy of the rotor?`,
    choices: [R`$5.4 \times 10^{5}$ J`, R`$1.1 \times 10^{6}$ J`, R`$1.8 \times 10^{4}$ J`, R`$2.1 \times 10^{7}$ J`],
    why: [R`$K = \tfrac12 I\omega^2 = \tfrac12 (1200)(30)^2 = 5.4 \times 10^{5}$ J.`,
      R`This drops the factor of $\tfrac12$: $I\omega^2 = 1.08 \times 10^{6}$ J.`,
      R`This does not square the angular speed: $\tfrac12 I\omega = 1.8 \times 10^{4}$. The kinetic energy depends on $\omega^2$.`,
      R`This treats $30$ as revolutions per second, which gives $\omega = 2\pi(30) = 188$ rad/s. The $30$ is already in rad/s.`], answer: 0 },
  { id: "q61-m2", type: "mcq", skill: "u6", topic: "6.1", difficulty: "easy",
    stem: R`A spinning top has a constant rotational inertia. Its angular speed increases from $20$ rad/s to $60$ rad/s.`,
    question: R`By what factor does the top's rotational kinetic energy increase?`,
    choices: [R`$9$`, R`$3$`, R`$6$`, R`$27$`],
    why: [R`$K = \tfrac12 I\omega^2$ is proportional to $\omega^2$. The angular speed triples, so the kinetic energy increases by a factor of $3^2 = 9$.`,
      R`This is the factor for the angular speed. The kinetic energy depends on the square of the angular speed.`,
      R`This multiplies $3$ by $2$. The exponent on $\omega$ is $2$, so the factor is $3^2$, not $3 \times 2$.`,
      R`This cubes the factor, $3^3$. The kinetic energy is proportional to $\omega^2$, not $\omega^3$.`], answer: 0 },
  { id: "q61-m3", type: "mcq", skill: "u6", topic: "6.1", difficulty: "moderate", set: "q61-s1",
    question: R`What is the rotational kinetic energy of the rod and spheres?`,
    choices: [R`$4.3$ J`, R`$9.6$ J`, R`$2.9$ J`, R`$19$ J`],
    why: [R`$I = \sum m r^2 = (2.0)(0.30)^2 + (1.0)(0.60)^2 = 0.54$ kg·m². Then $K = \tfrac12 I\omega^2 = \tfrac12 (0.54)(4.0)^2 = 4.3$ J.`,
      R`This does not square the distances, so $I = (2.0)(0.30) + (1.0)(0.60) = 1.2$ kg·m². Rotational inertia uses $r^2$.`,
      R`This counts only the $1.0$ kg sphere: $I = 0.36$ kg·m². Both spheres turn with the rod and both contribute.`,
      R`This puts both masses at the sum of the distances, $0.90$ m, so $I = (3.0)(0.90)^2 = 2.4$ kg·m². The spheres are on opposite sides of the pivot, at $0.30$ m and $0.60$ m.`], answer: 0 },
  { id: "q61-m4", type: "mcq", skill: "u6", topic: "6.1", difficulty: "moderate",
    stem: R`A thin-walled hollow ball of mass $0.060$ kg rolls without slipping at $4.0$ m/s along level ground. The rotational inertia of the ball about its center is $\tfrac23 mr^2$.`,
    question: R`What is the total kinetic energy of the ball?`,
    choices: [R`$0.80$ J`, R`$0.48$ J`, R`$0.32$ J`, R`$1.1$ J`],
    why: [R`Rolling without slipping gives $\omega = v/r$. $K_{trans} = \tfrac12 mv^2 = 0.48$ J and $K_{rot} = \tfrac12 (\tfrac23 mr^2)(v/r)^2 = \tfrac13 mv^2 = 0.32$ J. The total is $0.80$ J.`,
      R`This is only the translational kinetic energy, $\tfrac12 mv^2$. The ball also turns.`,
      R`This is only the rotational kinetic energy. The ball also moves forward.`,
      R`This drops the factor of $\tfrac12$ in the rotational term: $0.48 + I\omega^2 = 0.48 + 0.64 = 1.1$ J.`], answer: 0 },
  { id: "q61-m5", type: "mcq", skill: "u6", topic: "6.1", difficulty: "moderate",
    stem: R`Disk 1 is a uniform solid disk of mass $m$ and radius $r$. Disk 2 is a uniform solid disk of mass $2m$ and radius $r/2$. Each disk spins about its center at the same angular speed.`,
    question: R`What is the ratio of the rotational kinetic energy of disk 2 to that of disk 1?`,
    choices: [R`$\tfrac12$`, R`$2$`, R`$\tfrac14$`, R`$1$`],
    why: [R`For a uniform disk $I = \tfrac12 mr^2$, so $\dfrac{I_2}{I_1} = \dfrac{2m (r/2)^2}{m r^2} = \dfrac12$. With the same $\omega$, $K = \tfrac12 I\omega^2$ has the same ratio, $\tfrac12$.`,
      R`This uses only the mass ratio. The radius enters the rotational inertia squared.`,
      R`This uses only the radius, $(\tfrac12)^2$, and leaves out the doubled mass.`,
      R`This uses $r$ instead of $r^2$: $2 \times \tfrac12 = 1$. Rotational inertia depends on the square of the radius.`], answer: 0 },
  { id: "q61-m6", type: "mcq", skill: "u6", topic: "6.1", difficulty: "difficult",
    stem: R`A buffing wheel is a uniform solid disk of mass $8.0$ kg and diameter $0.30$ m, with rotational inertia $\tfrac12 mr^2$. It spins at $300$ rpm. A piece of metal pressed against the rim exerts a constant friction force of $20$ N tangent to the rim and brings the wheel to rest. Other friction is negligible.`,
    question: R`Through how many revolutions does the wheel turn while it stops?`,
    choices: [R`$2.4$ rev`, R`$4.7$ rev`, R`$1.2$ rev`, R`$2.1 \times 10^{2}$ rev`],
    why: [R`$\omega = 300 \times 2\pi/60 = 31.4$ rad/s and $I = \tfrac12 (8.0)(0.15)^2 = 0.090$ kg·m², so $K = \tfrac12 I\omega^2 = 44$ J. The friction force does work $F(2\pi r) = (20)(2\pi)(0.15) = 18.8$ J each revolution. The number of revolutions is $44/18.8 = 2.4$.`,
      R`This drops the factor of $\tfrac12$ in $K$, which doubles the energy to remove.`,
      R`This uses the diameter, $0.30$ m, as the lever arm for the friction force, which doubles the work per revolution. The force acts at the rim, a distance $r = 0.15$ m from the axis.`,
      R`This leaves the angular speed at $300$ rad/s instead of converting from rpm. The energy is far too large.`], answer: 0 },
  { id: "q61-f1a", type: "frq", skill: "u6", topic: "6.1", set: "q61-s2", part: "(a)",
    prompt: R`Calculate the rotational kinetic energy of the hoop.`,
    rows: [{ name: "Angular speed", earns: R`Uses the rolling condition to find $\omega = v/R = 7.5$ rad/s.` }, { name: "Rotational kinetic energy", earns: R`Calculates $K_{rot} = \tfrac12 I\omega^2 = 9.0$ J, with units.` }],
    solution: R`Rolling without slipping gives $\omega = v/R = (3.0)/(0.40) = 7.5$ rad/s. Then $K_{rot} = \tfrac12 (MR^2)\omega^2 = \tfrac12 (2.0)(0.40)^2(7.5)^2 = 9.0$ J.` },
  { id: "q61-f1b", type: "frq", skill: "u6", topic: "6.1", set: "q61-s2", part: "(b)",
    prompt: R`The hoop's speed is doubled. By what factor does the hoop's total kinetic energy change? Justify your answer.`,
    rows: [{ name: "Factor", earns: R`States that the total kinetic energy becomes $4$ times as great.` }, { name: "Justification", earns: R`Explains that $K_{trans} = \tfrac12 Mv^2$ and, because $\omega = v/R$ doubles, $K_{rot} = \tfrac12 I\omega^2$ also depends on $v^2$, so both terms increase by a factor of $4$.` }],
    solution: R`The total kinetic energy increases by a factor of $4$. The translational term $\tfrac12 Mv^2$ is proportional to $v^2$. Rolling without slipping gives $\omega = v/R$, so doubling $v$ doubles $\omega$, and $\tfrac12 I\omega^2$ is also proportional to $v^2$. Both terms, and so their sum, increase by $2^2 = 4$.` },
];

export default { forms: [{ id: "q61", group: "Unit 6: Energy and Momentum of Rotating Systems", name: "Topic 6.1 Quiz: Rotational Kinetic Energy", items }] };

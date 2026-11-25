// AP Physics 1 topic quiz 6.6: Motion of orbiting satellites.
import { scene } from "../../diagrams.js";
const R = String.raw;
const one = (blocks, title = "") => [{ title, blocks }];

// An ellipse with semi-axes a = 130, b = 80 centered at (180, 115); the planet sits at the focus on the right, 102.5 from the center.
const ellipse = () => {
  const a = 130, b = 80, cx = 180, cy = 115, pts = [];
  for (let t = 0; t <= 360; t += 4) pts.push([cx + a * Math.cos((t * Math.PI) / 180), cy + b * Math.sin((t * Math.PI) / 180)]);
  return scene({ width: 360, height: 230, alt: "An elliptical orbit. A planet is at the focus on the right side, close to the right end of the ellipse. Point A is on the right end of the orbit, nearest the planet. Point B is at the top of the orbit. Point C is at the left end of the orbit, farthest from the planet.",
    items: [
      { rope: { points: pts } }, { circle: { x: 282.5, y: 115, r: 13, fill: "body" } }, { label: { x: 268, y: 88, text: "planet" } },
      { dot: { x: 310, y: 115, r: 4 } }, { label: { x: 326, y: 128, text: "A" } },
      { dot: { x: 180, y: 195, r: 4 } }, { label: { x: 180, y: 210, text: "B" } },
      { dot: { x: 50, y: 115, r: 4 } }, { label: { x: 34, y: 128, text: "C" } },
    ] });
};

export const sets = {
  "q66-s1": { name: "An elliptical orbit", label: "Diagram", intro: R`A moon follows the elliptical orbit shown around a planet. Points A, B, and C are positions of the moon on its orbit.`, sources: one([{ svg: ellipse() }]) },
  "q66-s2": { name: "A probe in a circular orbit", label: "Free response", intro: R`A probe of mass $m$ moves in a circular orbit of radius $3R$ around a planet of mass $M$ and radius $R$. The only force on the probe is the gravitational force from the planet. Express all answers in terms of $m$, $M$, $R$, and fundamental constants.`,
    sources: one([{ p: R`Take the gravitational potential energy to be zero when the probe and the planet are infinitely far apart.` }]) },
};

const items = [
  { id: "q66-m1", type: "mcq", skill: "u6", topic: "6.6", difficulty: "easy",
    stem: R`A satellite moves in a circular orbit around a planet. A maneuver moves it to a new circular orbit with $9$ times the original radius.`,
    question: R`By what factor does the satellite's orbital speed change?`,
    choices: [R`$\tfrac13$`, R`$\tfrac19$`, R`$3$`, R`$\tfrac{1}{81}$`],
    why: [R`For a circular orbit $\dfrac{GMm}{r^2} = \dfrac{mv^2}{r}$, so $v = \sqrt{GM/r}$. A radius $9$ times as great gives a speed $\tfrac{1}{\sqrt{9}} = \tfrac13$ as great.`,
      R`This takes the speed to be proportional to $1/r$. The speed is proportional to $1/\sqrt{r}$.`,
      R`This inverts the factor. A satellite in a larger orbit moves more slowly.`,
      R`This takes the speed to be proportional to $1/r^2$. The speed is proportional to $1/\sqrt{r}$.`], answer: 0 },
  { id: "q66-m2", type: "mcq", skill: "u6", topic: "6.6", difficulty: "easy", set: "q66-s1",
    question: R`At which point is the moon's speed greatest?`,
    choices: [R`Point A, the closest point`, R`Point B, at the middle distance`, R`Point C, the farthest point`, R`All three points, because the orbit is closed`],
    why: [R`The gravitational force exerts no torque about the planet, so the moon's angular momentum $L = mvr$ is constant. The speed is greatest where the distance $r$ is least, at point A.`,
      R`Point B is at a distance from the planet between those of A and C, so the speed there is between the greatest and the least.`,
      R`Point C is the farthest from the planet, so the moon is slowest there.`,
      R`The speed is the same everywhere only for a circular orbit. In an ellipse the distance changes, and so does the speed.`], answer: 0 },
  { id: "q66-m3", type: "mcq", skill: "u6", topic: "6.6", difficulty: "moderate",
    stem: R`A comet moves in an elliptical orbit around the Sun. At its closest approach, it is $1.5 \times 10^{11}$ m from the Sun and moves at $4.0 \times 10^{4}$ m/s. At its farthest point, it is $6.0 \times 10^{11}$ m from the Sun.`,
    question: R`What is the comet's speed at its farthest point?`,
    choices: [R`$1.0 \times 10^{4}$ m/s`, R`$2.0 \times 10^{4}$ m/s`, R`$1.6 \times 10^{5}$ m/s`, R`$2.5 \times 10^{3}$ m/s`],
    why: [R`The Sun's gravitational force exerts no torque about the Sun, so $mv_pr_p = mv_ar_a$. Then $v_a = v_p r_p/r_a = (4.0 \times 10^{4})(1.5)/(6.0) = 1.0 \times 10^{4}$ m/s.`,
      R`This takes the speed to be proportional to $1/\sqrt{r}$, which applies to circular orbits. In an ellipse, $v \propto 1/r$ from conservation of angular momentum.`,
      R`This inverts the ratio, so the comet speeds up as it moves away from the Sun.`,
      R`This squares the ratio of the distances. The speed is proportional to $1/r$, not $1/r^2$.`], answer: 0 },
  { id: "q66-m4", type: "mcq", skill: "u6", topic: "6.6", difficulty: "moderate",
    stem: R`Planet A has mass $M$ and radius $R$, and its escape speed from the surface is $v_A$. Planet B has mass $4M$ and radius $2R$.`,
    question: R`What is the escape speed from the surface of planet B?`,
    choices: [R`$\sqrt{2}\,v_A$`, R`$2v_A$`, R`$\dfrac{v_A}{\sqrt{2}}$`, R`$2\sqrt{2}\,v_A$`],
    why: [R`Setting the total energy to zero, $\tfrac12 mv^2 = GMm/R$, gives $v_{esc} = \sqrt{2GM/R}$. For planet B, $\sqrt{2G(4M)/(2R)} = \sqrt{2}\sqrt{2GM/R}\,$, which is $\sqrt{2}\,v_A$.`,
      R`This accounts for the greater mass and ignores the greater radius. Together they give a factor of $\sqrt{4/2}$.`,
      R`This accounts for the greater radius and ignores the greater mass.`,
      R`This takes the escape speed to be proportional to $M$ instead of $\sqrt{M}$, which gives $4/\sqrt{2}$.`], answer: 0 },
  { id: "q66-m5", type: "mcq", skill: "u6", topic: "6.6", difficulty: "moderate",
    stem: R`A satellite moves in a circular orbit of radius $4r$ around a planet. A maneuver moves it to a circular orbit of radius $r$.`,
    question: R`Compared with the original orbit, what are the satellite's speed and angular momentum in the new orbit?`,
    choices: [R`$v$ is twice as great and $L$ is half as great.`, R`$v$ is twice as great and $L$ is twice as great.`, R`$v$ is four times as great and $L$ is unchanged.`, R`$v$ is half as great and $L$ is two times as great.`],
    why: [R`For a circular orbit $v = \sqrt{GM/r}$, so a quarter of the radius gives twice the speed. The angular momentum $L = mvr$ is multiplied by $2 \times \tfrac14 = \tfrac12$.`,
      R`The speed is right, but $L = mvr$ also depends on the radius, which decreased by a factor of $4$.`,
      R`This takes the speed to be proportional to $1/r$ and assumes the angular momentum is conserved. The maneuver exerts a torque, and $v \propto 1/\sqrt{r}$ in circular orbits.`,
      R`This reverses the speed change. A satellite in a smaller orbit moves faster.`], answer: 0 },
  { id: "q66-m6", type: "mcq", skill: "u6", topic: "6.6", difficulty: "difficult",
    stem: R`A probe is launched from the surface of a planet of mass $M$ and radius $R$ at a speed of $2.0$ times the planet's escape speed $v_e$. Air resistance and the planet's rotation are negligible.`,
    question: R`What is the probe's speed when it is very far from the planet?`,
    choices: [R`$\sqrt{3}\,v_e$`, R`$2v_e$`, R`$v_e$`, R`$\sqrt{5}\,v_e$`],
    why: [R`Energy is conserved: $\tfrac12 m(2v_e)^2 - \dfrac{GMm}{R} = \tfrac12 mv_\infty^2$. With $\tfrac12 mv_e^2 = GMm/R$, $\tfrac12 mv_\infty^2 = 4\left(\tfrac12 mv_e^2\right) - \tfrac12 mv_e^2$, so $v_\infty = \sqrt{3}\,v_e$.`,
      R`This ignores the work done against gravity, as if the probe kept its launch speed.`,
      R`This subtracts the speeds, $2v_e - v_e$. Energies subtract, not speeds.`,
      R`This adds the escape energy to the launch energy instead of subtracting it, $4 + 1$.`], answer: 0 },
  { id: "q66-f1a", type: "frq", skill: "u6", topic: "6.6", set: "q66-s2", part: "(a)",
    prompt: R`Derive an expression for the kinetic energy of the probe. Start from a fundamental physics principle.`,
    rows: [{ name: "Second law", earns: R`Applies Newton's second law with the gravitational force as the centripetal force, $\dfrac{GMm}{(3R)^2} = \dfrac{mv^2}{3R}$.` }, { name: "Kinetic energy", earns: R`Uses $K = \tfrac12 mv^2$ to obtain $K = \dfrac{GMm}{6R}$.` }],
    solution: R`The gravitational force provides the centripetal force: $\dfrac{GMm}{(3R)^2} = \dfrac{mv^2}{3R}$, so $v^2 = \dfrac{GM}{3R}$. Then $K = \tfrac12 mv^2 = \dfrac{GMm}{6R}$.` },
  { id: "q66-f1b", type: "frq", skill: "u6", topic: "6.6", set: "q66-s2", part: "(b)",
    prompt: R`Determine the minimum additional energy that must be given to the probe so that it can escape from the planet.`,
    rows: [{ name: "Total energy", earns: R`Adds the kinetic and potential energies, $E = \dfrac{GMm}{6R} - \dfrac{GMm}{3R} = -\dfrac{GMm}{6R}$.` }, { name: "Additional energy", earns: R`Requires a total energy of at least zero and obtains $\Delta E = \dfrac{GMm}{6R}$.` }],
    solution: R`The potential energy at $3R$ is $U = -\dfrac{GMm}{3R}$. The total energy is $E = K + U = \dfrac{GMm}{6R} - \dfrac{GMm}{3R} = -\dfrac{GMm}{6R}$. To escape, the total energy must be at least zero, so the minimum additional energy is $\Delta E = \dfrac{GMm}{6R}$.` },
];

export default { forms: [{ id: "q66", group: "Unit 6: Energy and Momentum of Rotating Systems", name: "Topic 6.6 Quiz: Motion of Orbiting Satellites", items }] };

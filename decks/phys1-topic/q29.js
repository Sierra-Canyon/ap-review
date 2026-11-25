// AP Physics 1 topic quiz 2.9: circular motion.
import { scene, incline } from "../../diagrams.js";
const R = String.raw;

const track = () => {
  const cx = 180, cy = 115, r = 70, pts = [];
  for (let k = 0; k <= 72; k++) pts.push([cx + r * Math.cos((k * 5 * Math.PI) / 180), cy + r * Math.sin((k * 5 * Math.PI) / 180)]);
  return scene({ width: 360, height: 270, alt: "A circular track seen from above. A car is at the top of the circle. Four arrows start at the car: arrow A points straight up and away from the center, arrow B points straight down toward the center, arrow C points to the right along the track, and arrow D points to the left along the track.", items: [
    { rope: { points: pts } }, { dot: { x: cx, y: cy + r, r: 5 } }, { label: { x: cx - 12, y: cy + r - 14, text: "car", anchor: "end" } },
    { arrow: { from: [cx, cy + r], to: [cx, cy + r + 55], label: "A" } }, { arrow: { from: [cx, cy + r], to: [cx, cy + r - 55], label: "B" } },
    { arrow: { from: [cx, cy + r], to: [cx + 60, cy + r], label: "C" } }, { arrow: { from: [cx, cy + r], to: [cx - 60, cy + r], label: "D" } }] });
};
const conical = () => {
  const px = 170, py = 215, L = 130, th = (35 * Math.PI) / 180, bx = px + L * Math.sin(th), by = py - L * Math.cos(th);
  return scene({ width: 340, height: 250, alt: "A conical pendulum. A string of length L hangs from a fixed point on the ceiling and makes an angle theta with the vertical. A bob on its end moves in a horizontal circle of radius r. A dashed vertical line runs from the support point to the plane of the circle, and a dashed horizontal line of length r runs from that line to the bob.", items: [
    { ground: { from: [260, py], to: [80, py] } }, { line: { from: [px, py], to: [px, by] , dash: true } }, { line: { from: [px, by], to: [bx, by], dash: true } },
    { rope: { points: [[px, py], [bx, by]] } }, { circle: { x: bx, y: by, r: 10, label: "m" } },
    { arc: { x: px, y: py, r: 44, from: -90, to: -55, label: "θ" } }, { label: { x: (px + bx) / 2 + 14, y: (py + by) / 2 + 12, text: "L" } }, { label: { x: (px + bx) / 2, y: by - 12, text: "r" } }] });
};

export const sets = {
  "q29-s1": { name: "A car on a circular track", label: "Diagram", intro: R`A car moves clockwise around a circular track at constant speed. The diagram shows the track from above. At the instant shown, the car is at the top of the circle.`, sources: [{ title: "", blocks: [{ svg: track() }] }] },
  "q29-s2": { name: "A banked curve", label: "Setup", intro: R`A road curves around a circle of radius $60$ m and is banked at an angle of $25^\circ$ to the horizontal, as shown in cross section. The center of the circle is to the right. A car drives around the curve at a speed for which no friction force is needed.`, sources: [{ title: "", blocks: [{ svg: incline({ angle: 25, block: { label: "car" }, labels: { angle: "25°" }, forces: [], alt: "Cross section of a banked road that rises to the right at 25 degrees, with a car on it. The center of the circular path is to the right of the car." }) }] }] },
  "q29-s3": { name: "Whirling a stopper", label: "Table", intro: R`A student whirls a rubber stopper on a string in a horizontal circle and measures the radius $r$ of the circle and the period $T$ of the motion in three trials.`, sources: [{ title: "", blocks: [{ table: { head: ["Trial", "Radius r (m)", "Period T (s)"], rows: [["1", "0.80", "2.0"], ["2", "0.50", "1.0"], ["3", "0.20", "0.80"]] } }] }] },
  "q29-s4": { name: "A conical pendulum", label: "Setup", intro: R`A small bob of mass $m$ hangs from a string of length $L$. The bob moves at constant speed $v$ in a horizontal circle, and the string makes an angle $\theta$ with the vertical.`, sources: [{ title: "", blocks: [{ svg: conical() }] }] },
  "q29-s5": { name: "A child on a merry-go-round", label: "Free response", intro: R`A $40$ kg child sits at the rim of a horizontal merry-go-round of radius $2.0$ m. The merry-go-round turns at a constant rate, and the child goes around once every $4.0$ s. The child does not slip.`, sources: [{ title: "", blocks: [{ p: R`Treat the child as a point mass at the rim.` }] }] },
};

const items = [
  { id: "q29-m1", type: "mcq", skill: "u2", topic: "2.9", difficulty: "easy",
    stem: R`A $45$ kg cyclist moves at a constant speed of $6.0$ m/s around a circular track of radius $30$ m.`,
    question: R`What is the magnitude of the net force on the cyclist?`,
    choices: [R`$54$ N`, R`$9.0$ N`, R`$270$ N`, R`$1620$ N`],
    why: [R`The net force is the centripetal force: $F = \dfrac{mv^2}{r} = \dfrac{(45)(6.0)^2}{30} = 54$ N.`,
      R`$9.0$ N uses $v$ instead of $v^2$, $\dfrac{(45)(6.0)}{30}$.`,
      R`$270$ N is $mv$, with neither the square nor the division by $r$.`,
      R`$1620$ N is $mv^2$, with no division by $r$.`], answer: 0 },
  { id: "q29-m2", type: "mcq", skill: "u2", topic: "2.9", difficulty: "easy", set: "q29-s1",
    question: R`Which arrow shows the direction of the car's acceleration?`,
    choices: ["Arrow B", "Arrow A", "Arrow C", "Arrow D"],
    why: [R`The car moves at constant speed in a circle, so its acceleration points toward the center of the circle. At the top of the circle, the center is straight down, which is Arrow B.`,
      R`Arrow A points away from the center. No force or acceleration points outward.`,
      R`Arrow C points along the velocity. At constant speed there is no acceleration along the velocity.`,
      R`Arrow D points opposite the velocity, which would mean the car is slowing down.`], answer: 0 },
  { id: "q29-m3", type: "mcq", skill: "u2", topic: "2.9", difficulty: "moderate", set: "q29-s2",
    question: R`What is the speed of the car?`,
    choices: [R`$16.6$ m/s`, R`$15.8$ m/s`, R`$23.1$ m/s`, R`$5.29$ m/s`],
    why: [R`Only the normal force and the weight act. $N\cos\theta = mg$ and $N\sin\theta = \dfrac{mv^2}{r}$, so $v^2 = rg\tan\theta$ and $v = \sqrt{(60)(9.8)\tan 25^\circ} = 16.6$ m/s.`,
      R`$15.8$ m/s uses $\sin\theta$ instead of $\tan\theta$, which ignores that the normal force is also balancing the weight.`,
      R`$23.1$ m/s uses $\cos\theta$ in place of $\tan\theta$.`,
      R`$5.29$ m/s leaves out $g$, $\sqrt{r\tan\theta}$.`], answer: 0 },
  { id: "q29-m4", type: "mcq", skill: "u2", topic: "2.9", difficulty: "moderate", set: "q29-s3",
    question: R`Which of the following ranks the trials by the magnitude of the stopper's centripetal acceleration, from greatest to least?`,
    choices: [R`Trial 2 > Trial 3 > Trial 1`, R`Trial 1 > Trial 2 > Trial 3`, R`Trial 3 > Trial 2 > Trial 1`, R`Trial 2 > Trial 1 > Trial 3`],
    why: [R`$a_c = \dfrac{4\pi^2 r}{T^2}$ gives $7.9$ m/s² for Trial 1, $19.7$ m/s² for Trial 2, and $12.3$ m/s² for Trial 3. The ranking is $2 > 3 > 1$.`,
      R`This ranks by radius, which assumes a larger circle means a larger acceleration. The period matters as well.`,
      R`This ranks by period, with the shortest period first. The radius also matters.`,
      R`This ranks by speed, $\dfrac{2\pi r}{T} = 2.5, 3.1, 1.6$ m/s. The acceleration depends on $\dfrac{v^2}{r}$, not on the speed alone.`], answer: 0 },
  { id: "q29-m5", type: "mcq", skill: "u2", topic: "2.9", difficulty: "moderate",
    stem: R`A $50$ kg rider sits in a seat on a Ferris wheel of radius $12$ m. The wheel turns at a constant rate so that the rider moves at $4.0$ m/s. Consider the rider at the top of the wheel.`,
    question: R`What is the magnitude of the force the seat exerts on the rider at the top?`,
    choices: [R`$423$ N`, R`$557$ N`, R`$490$ N`, R`$66.7$ N`],
    why: [R`At the top the center is below the rider. Taking down as positive, $mg - N = \dfrac{mv^2}{r}$, so $N = (50)\left(9.8 - \dfrac{16}{12}\right) = 423$ N.`,
      R`$557$ N is the force at the bottom, $m\left(g + \dfrac{v^2}{r}\right)$. At the top the acceleration points down and the seat force is smaller than the weight.`,
      R`$490$ N is the weight. It would be the force only if the rider were not accelerating.`,
      R`$66.7$ N is the net force, $\dfrac{mv^2}{r}$. The seat force is the weight minus the net force.`], answer: 0 },
  { id: "q29-m6", type: "mcq", skill: "u2", topic: "2.9", difficulty: "difficult", set: "q29-s4",
    question: R`Which expression gives the speed $v$ of the bob?`,
    choices: [R`$\sqrt{gL\sin\theta\tan\theta}$`, R`$\sqrt{gL\tan\theta}$`, R`$\sqrt{gL\sin\theta}$`, R`$\sqrt{\dfrac{gL\sin\theta}{\tan\theta}}$`],
    why: [R`Vertically, $T\cos\theta = mg$. Horizontally, $T\sin\theta = \dfrac{mv^2}{r}$ with $r = L\sin\theta$. Dividing, $\dfrac{v^2}{rg} = \tan\theta$, so $v = \sqrt{gL\sin\theta\tan\theta}$.`,
      R`$\sqrt{gL\tan\theta}$ uses $L$ as the radius of the circle. The radius is $L\sin\theta$.`,
      R`$\sqrt{gL\sin\theta}$ uses the radius $L\sin\theta$ but leaves out the $\tan\theta$ from the force balance.`,
      R`This inverts the tangent. The ratio of the horizontal to the vertical component of the tension is $\tan\theta$, not $\dfrac{1}{\tan\theta}$.`], answer: 0 },
  { id: "q29-f1a", type: "frq", skill: "u2", topic: "2.9", set: "q29-s5", part: "(a)",
    prompt: R`Calculate the child's speed.`,
    rows: [{ name: "Speed", earns: R`Uses distance over time, $v = \dfrac{2\pi r}{T}$, and obtains $3.1$ m/s.` }],
    solution: R`In one period the child travels the circumference: $v = \dfrac{2\pi r}{T} = \dfrac{2\pi(2.0)}{4.0} = 3.1$ m/s.` },
  { id: "q29-f1b", type: "frq", skill: "u2", topic: "2.9", set: "q29-s5", part: "(b)",
    prompt: R`Determine the magnitude and direction of the net force on the child.`,
    rows: [{ name: "Second law", earns: R`Uses $F_{net} = \dfrac{mv^2}{r}$ with the speed from part (a).` },
      { name: "Value and direction", earns: R`Obtains about $2.0 \times 10^2$ N (197 N), directed toward the center of the merry-go-round.` }],
    solution: R`$F_{net} = \dfrac{mv^2}{r} = \dfrac{(40)(3.14)^2}{2.0} = 197$ N, directed toward the center of the merry-go-round.` },
  { id: "q29-f1c", type: "frq", skill: "u2", topic: "2.9", set: "q29-s5", part: "(c)",
    prompt: R`Identify the force exerted on the child that provides this net force, and name the object that exerts it.`,
    rows: [{ name: "Force and object", earns: R`Identifies the static friction force exerted on the child by the merry-go-round (the surface the child sits on), directed toward the center.` }],
    solution: R`The static friction force exerted by the merry-go-round on the child points toward the center. Gravity and the normal force are vertical and cancel, so friction is the only horizontal force and provides the net force.` },
];
export default { forms: [{ id: "q29", name: "Topic 2.9 Quiz: Circular Motion", group: "Unit 2: Force and Translational Dynamics", items }] };

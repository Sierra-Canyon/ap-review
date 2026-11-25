// AP Physics 1 topic quiz 3.2: work.
import { scene } from "../../diagrams.js";
import { graph } from "../../plot.js";
const R = String.raw;

const slide = () => {
  const x0 = 40, y0 = 40, run = 208, rise = 120, L = 240, a = (30 * Math.PI) / 180, t = 0.68, bw = 54, bh = 30;
  const cx = x0 + t * L * Math.cos(a) - (Math.sin(a) * bh) / 2, cy = y0 + t * L * Math.sin(a) + (Math.cos(a) * bh) / 2;
  return scene({ width: 340, height: 220, alt: "A block of mass 3.0 kilograms near the top of a frictionless incline that rises to the right at 30 degrees. The length of the incline along the slope is 4.0 meters and the vertical height of the top above the bottom is 2.0 meters.", items: [
    { ground: { from: [x0 - 14, y0], to: [x0 + run + 14, y0] } }, { ground: { from: [x0, y0], to: [x0 + run, y0 + rise] } },
    { line: { from: [x0 + run, y0], to: [x0 + run, y0 + rise] } },
    { arc: { x: x0, y: y0, r: 42, from: 0, to: 30, label: "30°" } },
    { rect: { x: cx, y: cy, w: bw, h: bh, rot: 30, label: "3.0 kg" } },
    { label: { x: x0 + run / 2 - 26, y: y0 + rise / 2 + 20, text: "4.0 m" } }, { label: { x: x0 + run + 10, y: y0 + rise / 2, text: "2.0 m", anchor: "start" } }] });
};

export const sets = {
  "q32-s1": { name: "A block on an incline", label: "Diagram", intro: R`A $3.0$ kg block is released from rest at the top of the frictionless incline shown. The incline is $4.0$ m long and makes an angle of $30^\circ$ with the horizontal. The block slides all the way to the bottom.`, sources: [{ title: "", blocks: [{ svg: slide() }] }] },
  "q32-s2": { name: "A block and a changing force", label: "Graph", intro: R`A $4.0$ kg block starts from rest at $x = 0$ on a frictionless horizontal surface. A force along the $x$-axis acts on the block. The graph shows the $x$-component of the force as a function of position.`, sources: [{ title: "", blocks: [{ svg: graph({ x: [0, 6], y: [-10, 10], step: { x: 1, y: 2 }, xname: "x (m)", yname: "F (N)", segments: [[0, 8, 2, 8], [2, 8, 6, -8]], alt: "Graph of the force on a block against position from 0 to 6.0 meters. The force is a constant 8 newtons from 0 to 2.0 meters, then decreases in a straight line, passing through zero at 4.0 meters, to negative 8 newtons at 6.0 meters." }) }] }] },
  "q32-s3": { name: "A pushed book", label: "Free response", intro: R`A student pushes a $1.2$ kg book from rest across a level desk with a constant horizontal force of $5.0$ N. The book moves $0.80$ m. The kinetic friction force on the book from the desk is $1.5$ N.`, sources: [{ title: "", blocks: [{ p: R`Treat the book as a point mass.` }] }] },
};

const items = [
  { id: "q32-m1", type: "mcq", skill: "u3", topic: "3.2", difficulty: "easy",
    stem: R`A student pushes a lawn mower with a force of $80$ N directed along the handle, which makes an angle of $30^\circ$ below the horizontal. The mower moves $6.0$ m along level ground.`,
    question: R`How much work does the student do on the mower?`,
    choices: [R`$416$ J`, R`$240$ J`, R`$480$ J`, R`$554$ J`],
    why: [R`Only the component of the force along the displacement does work: $W = Fd\cos\theta = (80)(6.0)\cos 30^\circ = 416$ J.`,
      R`$240$ J uses $\sin 30^\circ$, the component perpendicular to the displacement.`,
      R`$480$ J is $Fd$, which ignores the angle between the force and the displacement.`,
      R`$554$ J divides by $\cos 30^\circ$ instead of multiplying by it.`], answer: 0 },
  { id: "q32-m2", type: "mcq", skill: "u3", topic: "3.2", difficulty: "easy", set: "q32-s1",
    question: R`How much work does gravity do on the block as it slides from the top to the bottom of the incline?`,
    choices: [R`$58.8$ J`, R`$118$ J`, R`$102$ J`, R`$29.4$ J`],
    why: [R`The work done by gravity depends on the vertical drop: $W = mgh = (3.0)(9.8)(2.0) = 58.8$ J.`,
      R`$118$ J is $mgL$, which uses the length of the incline instead of the vertical drop.`,
      R`$102$ J is $mgL\cos 30^\circ$, which uses the wrong component of the weight along the slope.`,
      R`$29.4$ J multiplies $mgh$ by $\sin 30^\circ$ a second time. The factor $\sin 30^\circ$ is already included in the vertical drop.`], answer: 0 },
  { id: "q32-m3", type: "mcq", skill: "u3", topic: "3.2", difficulty: "moderate", set: "q32-s2",
    question: R`What is the net work done on the block as it moves from $x = 0$ to $x = 6.0$ m?`,
    choices: [R`$16$ J`, R`$32$ J`, R`$24$ J`, R`$48$ J`],
    why: [R`Work is the signed area under the graph. From $0$ to $2.0$ m the area is $(8)(2.0) = 16$ J. From $2.0$ m to $4.0$ m it is $\dfrac{1}{2}(2.0)(8) = 8$ J. From $4.0$ m to $6.0$ m the force is negative and the area is $-8$ J. The total is $16 + 8 - 8 = 16$ J.`,
      R`$32$ J adds the sizes of all three areas and ignores the negative sign of the last one.`,
      R`$24$ J counts only the positive areas and leaves out the negative work after $x = 4.0$ m.`,
      R`$48$ J multiplies the largest force by the whole distance, $(8)(6.0)$.`], answer: 0 },
  { id: "q32-m4", type: "mcq", skill: "u3", topic: "3.2", difficulty: "moderate", set: "q32-s2",
    question: R`What is the speed of the block at $x = 4.0$ m?`,
    choices: [R`$3.46$ m/s`, R`$2.45$ m/s`, R`$2.83$ m/s`, R`$6.00$ m/s`],
    why: [R`From $0$ to $4.0$ m the net work is $16 + 8 = 24$ J. The block starts from rest, so $24 = \dfrac{1}{2}(4.0)v^2$ and $v = 3.46$ m/s.`,
      R`$2.45$ m/s leaves out the factor of $\dfrac{1}{2}$ in the kinetic energy, $24 = mv^2$.`,
      R`$2.83$ m/s uses the net work through $x = 6.0$ m, which is $16$ J, instead of the work through $x = 4.0$ m.`,
      R`$6.00$ m/s divides the work by the mass, $24 \div 4.0$, and does not use $K = \dfrac{1}{2}mv^2$.`], answer: 0 },
  { id: "q32-m5", type: "mcq", skill: "u3", topic: "3.2", difficulty: "moderate",
    stem: R`A $0.40$ kg ball is thrown straight up from a point $1.5$ m above the ground. It rises $3.0$ m above the release point, then falls and lands on the ground. Ignore air resistance.`,
    question: R`How much work does gravity do on the ball from the instant it is released until it lands?`,
    choices: [R`$5.88$ J`, R`$-5.88$ J`, R`$17.6$ J`, R`$35.3$ J`],
    why: [R`Gravity is a conservative force, so only the net vertical displacement matters. The ball ends $1.5$ m below its release point, in the direction of the weight: $W = mg(1.5) = (0.40)(9.8)(1.5) = 5.88$ J.`,
      R`$-5.88$ J has the wrong sign. The net displacement is downward, the same direction as the weight, so the work is positive.`,
      R`$17.6$ J is $mg(4.5)$, the work during the fall only. The work during the rise is negative and must be included.`,
      R`$35.3$ J is $mg$ times the total distance traveled, $9.0$ m. Work depends on displacement along the force, not on the path length.`], answer: 0 },
  { id: "q32-m6", type: "mcq", skill: "u3", topic: "3.2", difficulty: "difficult",
    stem: R`A crate of mass $m$ rests on the flat bed of a truck. The truck accelerates from rest on a level road with constant acceleration $a$, and the crate does not slip. After the truck has moved a distance $d$ along the road, an observer standing beside the road measures the work done on the crate by the static friction force from the bed.`,
    question: R`The work done on the crate by this friction force is`,
    choices: [R`$mad$`, R`$0$`, R`$-mad$`, R`$mgd$`],
    why: [R`The crate accelerates with the truck, and static friction is the only horizontal force on it, so $f = ma$. In the road frame the crate moves a distance $d$ in the direction of $f$: $W = fd = mad$.`,
      R`Zero treats static friction as doing no work because the crate does not slip. It does no work in the truck's frame, but in the road frame the crate is displaced by $d$.`,
      R`$-mad$ has the wrong sign. The friction force on the crate points forward, in the direction of its displacement.`,
      R`$mgd$ would be the work of a friction force equal to the weight of the crate. The static friction force is $ma$, which is not given as $mg$.`], answer: 0 },
  { id: "q32-f1a", type: "frq", skill: "u3", topic: "3.2", set: "q32-s3", part: "(a)",
    prompt: R`Calculate the work done on the book by the student's push.`,
    rows: [{ name: "Work by the push", earns: R`Uses $W = Fd$ with the force along the displacement and obtains $4.0$ J.` }],
    solution: R`The force and displacement point the same way, so $W = Fd = (5.0)(0.80) = 4.0$ J.` },
  { id: "q32-f1b", type: "frq", skill: "u3", topic: "3.2", set: "q32-s3", part: "(b)",
    prompt: R`Calculate the work done on the book by the friction force.`,
    rows: [{ name: "Work by friction", earns: R`Obtains $-1.2$ J, with a negative sign because the friction force is opposite to the displacement.` }],
    solution: R`Friction points opposite to the displacement, so $W_f = -fd = -(1.5)(0.80) = -1.2$ J.` },
  { id: "q32-f1c", type: "frq", skill: "u3", topic: "3.2", set: "q32-s3", part: "(c)",
    prompt: R`Use the work-energy theorem to calculate the speed of the book after it has moved $0.80$ m.`,
    rows: [{ name: "Work-energy theorem", earns: R`Sets the net work, $4.0 - 1.2 = 2.8$ J, equal to the change in kinetic energy, $\dfrac{1}{2}mv^2$, since the book starts from rest.` },
      { name: "Speed", earns: R`Obtains $v = 2.2$ m/s.` }],
    solution: R`The net work is $W_{net} = 4.0 + (-1.2) = 2.8$ J. By the work-energy theorem, $W_{net} = \Delta K = \dfrac{1}{2}mv^2$, so $v = \sqrt{\dfrac{2(2.8)}{1.2}} = 2.2$ m/s.` },
];
export default { forms: [{ id: "q32", name: "Topic 3.2 Quiz: Work", group: "Unit 3: Work, Energy, and Power", items }] };

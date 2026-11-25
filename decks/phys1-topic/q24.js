// AP Physics 1 topic quiz 2.4: Newton's first law.
import { graph } from "../../plot.js";
import { scene, fbd } from "../../diagrams.js";
const R = String.raw;

const crateFbd = () => fbd({ box: { label: "crate", w: 64 }, forces: [{ angle: 0, length: 80, label: "40 N" }, { angle: 180, length: 80, label: "40 N" }, { angle: 90, length: 60, label: "30 N" }, { angle: -90, length: 60, label: "30 N" }],
  alt: "Free-body diagram of a crate with four arrows: 40 newtons to the right, 40 newtons to the left, 30 newtons up, and 30 newtons down." });
const cables = () => {
  const L = 140, c = Math.cos((25 * Math.PI) / 180), s = Math.sin((25 * Math.PI) / 180), jx = 180, jy = 110;
  return scene({ width: 360, height: 210, alt: "A sign of mass 12 kilograms hangs from the junction of two straight cables. Each cable runs up and outward to the ceiling, making an angle of 25 degrees with the horizontal.", items: [
    { ground: { from: [330, jy + L * s], to: [30, jy + L * s] } },
    { rope: { points: [[jx - L * c, jy + L * s], [jx, jy]] } }, { rope: { points: [[jx, jy], [jx + L * c, jy + L * s]] } },
    { rect: { x: jx, y: jy - 28, w: 64, h: 36, label: "12 kg" } },
    { arc: { x: jx, y: jy, r: 40, from: 0, to: 25, label: "25°" } }, { arc: { x: jx, y: jy, r: 40, from: 155, to: 180, label: "25°" } }] });
};
const topView = () => scene({ width: 360, height: 240, alt: "Top view of a box on a smooth floor with compass directions marked. One horizontal force of 30 newtons points east and another of 40 newtons points north. A third horizontal force, not shown, also acts.", items: [
  { rect: { x: 150, y: 110, w: 44, h: 36, label: "5.0 kg" } },
  { arrow: { from: [172, 110], to: [250, 110], label: "30 N east" } }, { arrow: { from: [150, 128], to: [150, 218], label: "40 N north", dx: 40 } },
  { label: { x: 300, y: 30, text: "N" } }, { arrow: { from: [300, 40], to: [300, 70], kind: "plain" } }, { label: { x: 270, y: 20, text: "E" } }, { arrow: { from: [285, 20], to: [300, 20], kind: "plain" } }] });
const tVsTheta = (n) => {
  const fs = { A: () => 0.5, B: (x) => 1 / (2 * Math.sin((x * Math.PI) / 180)), C: (x) => 3 * (1 - x / 90), D: (x) => 1 / (2 * Math.cos((x * Math.PI) / 180)) };
  const alts = { A: "a horizontal line at 0.5", B: "a curve that falls steeply from about 2.9 at 10 degrees and flattens to 0.5 at 90 degrees", C: "a straight line falling from 3 at 0 degrees to 0 at 90 degrees", D: "a curve that rises from 0.5 at 0 degrees, slowly at first and then steeply" };
  const [from, to] = n === "B" ? [10, 90] : n === "D" ? [0, 80] : [0, 90];
  return { title: "Graph " + n, blocks: [{ svg: graph({ width: 260, height: 200, x: [0, 90], y: [0, 3], step: { x: 30, y: 1 }, xname: "θ (degrees)", yname: "T (units of mg)", fns: [{ f: fs[n], from, to }], alt: `Graph ${n} of the tension T in units of mg versus the angle θ: ${alts[n]}.` }) }] };
};

export const sets = {
  "q24-s1": { name: "A crate's free-body diagram", label: "Diagram", intro: R`The free-body diagram shows all of the forces exerted on a crate at one instant.`, sources: [{ title: "", blocks: [{ svg: crateFbd() }] }] },
  "q24-s2": { name: "A sign on two cables", label: "Setup", intro: R`A $12$ kg sign hangs at rest from two light cables, each making an angle of $25^\circ$ with the horizontal ceiling, as shown.`, sources: [{ title: "", blocks: [{ svg: cables() }] }] },
  "q24-s3": { name: "A box on a smooth floor", label: "Top view", intro: R`Three horizontal forces act on a $5.0$ kg box on a smooth floor, and the box moves at constant velocity. The diagram, seen from above, shows two of the forces.`, sources: [{ title: "", blocks: [{ svg: topView() }] }] },
  "q24-s4": { name: "A sign on two ropes", label: "Graphs", intro: R`A sign of weight $mg$ hangs at rest from two light ropes. Each rope makes an angle $\theta$ with the horizontal, and $\theta$ can be set anywhere from $10^\circ$ to $90^\circ$ by changing where the ropes are attached. Four graphs are shown, each giving the tension $T$ in one rope as a function of $\theta$.`, sources: ["A", "B", "C", "D"].map(tVsTheta) },
  "q24-s5": { name: "A crate pushed across a floor", label: "Free response", intro: R`A worker pushes a $40$ kg crate across a level warehouse floor. The crate moves in a straight line at a constant speed of $0.80$ m/s while the worker pushes horizontally with a force of $55$ N.`, sources: [{ title: "", blocks: [{ p: R`Friction is the only other horizontal force on the crate.` }] }] },
};

const items = [
  { id: "q24-m1", type: "mcq", skill: "u2", topic: "2.4", difficulty: "easy",
    stem: R`A skater glides in a straight line at a constant speed of $4.0$ m/s over level ice. Friction and air resistance are negligible.`,
    question: R`Which statement about the forces on the skater is correct?`,
    choices: [R`The net force on the skater is zero`, R`A forward force from the original push still acts`, R`The normal force is larger than the skater's weight`, R`The skater's weight is larger than the normal force`],
    why: [R`The velocity is constant, so the acceleration is zero and the net force is zero (Newton's first law). The weight and the normal force are equal and opposite.`,
      R`A force is an interaction with another object. The push ended when the skater left the pushing object, and no force is needed to keep a moving object moving.`,
      R`If the normal force were larger than the weight, the net force would be upward and the skater would accelerate upward.`,
      R`If the weight were larger, the net force would be downward and the skater would accelerate downward.`], answer: 0 },
  { id: "q24-m2", type: "mcq", skill: "u2", topic: "2.4", difficulty: "easy", set: "q24-s1",
    question: R`Which of the following could describe the motion of the crate?`,
    choices: [R`It is at rest or at constant velocity`, R`It is speeding up as it moves to the right`, R`It is slowing down as it moves to the right`, R`It is at rest now and always stays at rest`],
    why: [R`The forces cancel in both directions: $40 - 40 = 0$ and $30 - 30 = 0$. The net force is zero, so the acceleration is zero. The crate is either at rest or moving at constant velocity.`,
      R`Speeding up to the right needs a net force to the right. The rightward and leftward forces are equal.`,
      R`Slowing down while moving right needs a net force to the left. There is none.`,
      R`Zero net force allows constant velocity as well as rest, so "at rest only" is too restrictive.`], answer: 0 },
  { id: "q24-m3", type: "mcq", skill: "u2", topic: "2.4", difficulty: "moderate", set: "q24-s2",
    question: R`What is the tension in each cable?`,
    choices: [R`$139$ N`, R`$58.8$ N`, R`$64.9$ N`, R`$278$ N`],
    why: [R`The sign is at rest. Vertically, $2T\sin 25^\circ = mg = (12)(9.8) = 117.6$ N, so $T = \dfrac{117.6}{2\sin 25^\circ} = 139$ N.`,
      R`$58.8$ N assumes each cable carries half the weight. Each cable carries half of the weight only through its vertical component, which is $T\sin 25^\circ$, not $T$.`,
      R`$64.9$ N uses the cosine in place of the sine, $\dfrac{117.6}{2\cos 25^\circ}$. The vertical component is $T\sin 25^\circ$ when the angle is measured from the horizontal.`,
      R`$278$ N counts only one cable as holding up the sign, $\dfrac{117.6}{\sin 25^\circ}$.`], answer: 0 },
  { id: "q24-m4", type: "mcq", skill: "u2", topic: "2.4", difficulty: "moderate",
    stem: R`A kite is at rest relative to the ground in a steady wind. The kite weighs $2.0$ N. The string pulls on the kite with a force of $5.0$ N, directed $37^\circ$ below the horizontal toward the ground. The air exerts the only other force on the kite. Use $\sin 37^\circ = 0.60$ and $\cos 37^\circ = 0.80$.`,
    question: R`What is the magnitude of the force exerted by the air on the kite?`,
    choices: [R`$6.4$ N`, R`$7.0$ N`, R`$3.0$ N`, R`$5.0$ N`],
    why: [R`The kite is at rest, so the air's force cancels the sum of the weight and the string's force. The string's force has components $4.0$ N toward the person and $3.0$ N downward. With the weight, the downward total is $5.0$ N. The air's force has components $4.0$ N away from the person and $5.0$ N up, so its magnitude is $\sqrt{4.0^2 + 5.0^2} = 6.4$ N.`,
      R`$7.0$ N adds the weight and the string's tension, $2.0 + 5.0$, as if both pointed the same way.`,
      R`$3.0$ N subtracts the weight from the tension, $5.0 - 2.0$, as if the forces were opposite and along one line.`,
      R`$5.0$ N is the string's tension alone, which ignores the weight and the direction of the string.`], answer: 0 },
  { id: "q24-m5", type: "mcq", skill: "u2", topic: "2.4", difficulty: "moderate", set: "q24-s3",
    question: R`Which of the following gives the magnitude and direction of the third force?`,
    choices: [R`$50$ N at $53^\circ$ south of west`, R`$50$ N at $37^\circ$ south of west`, R`$70$ N at $45^\circ$ south of west`, R`$50$ N at $53^\circ$ north of east`],
    why: [R`The box moves at constant velocity, so the net force is zero. The first two forces add to $\sqrt{30^2 + 40^2} = 50$ N at $\tan^{-1}\dfrac{40}{30} = 53^\circ$ north of east. The third force is equal in magnitude and opposite in direction: $50$ N at $53^\circ$ south of west.`,
      R`$37^\circ$ is the angle measured from north, $\tan^{-1}\dfrac{30}{40}$, rather than from east.`,
      R`$70$ N adds the magnitudes of the two forces, $30 + 40$. Forces at right angles add as vectors.`,
      R`This is the direction of the sum of the first two forces. The third force must point opposite to that sum.`], answer: 0 },
  { id: "q24-m6", type: "mcq", skill: "u2", topic: "2.4", difficulty: "difficult", set: "q24-s4",
    question: R`Which graph correctly shows the tension $T$ in one rope as a function of $\theta$?`,
    choices: ["Graph B", "Graph A", "Graph C", "Graph D"],
    why: [R`The sign is at rest, so $2T\sin\theta = mg$ and $T = \dfrac{mg}{2\sin\theta}$. The tension is large for small angles, falls steeply, and levels off at $\dfrac{mg}{2}$ at $90^\circ$. That is Graph B.`,
      R`Graph A shows a constant tension of $\dfrac{mg}{2}$, as if each rope always carried half the weight along its length. At small angles each rope must pull much harder than that.`,
      R`Graph C falls in a straight line to zero at $90^\circ$. At $90^\circ$ the ropes are vertical and each supports half the weight, so $T$ is not zero.`,
      R`Graph D rises with $\theta$, as if $T = \dfrac{mg}{2\cos\theta}$. The vertical component of the tension is $T\sin\theta$ for an angle measured from the horizontal, so the tension is smallest when the ropes are vertical.`], answer: 0 },
  { id: "q24-f1a", type: "frq", skill: "u2", topic: "2.4", set: "q24-s5", part: "(a)",
    prompt: R`Determine the magnitude and direction of the friction force on the crate. Justify your answer.`,
    rows: [{ name: "Friction force", earns: R`States that friction is $55$ N, directed opposite to the motion (backward).` },
      { name: "Justification", earns: R`Justifies with Newton's first law: the crate moves at constant velocity, so the net force on it is zero and the friction force balances the $55$ N push.` }],
    solution: R`The crate moves at constant velocity, so by Newton's first law the net horizontal force is zero. The friction force has magnitude $55$ N and points opposite to the motion, balancing the worker's push.` },
  { id: "q24-f1b", type: "frq", skill: "u2", topic: "2.4", set: "q24-s5", part: "(b)",
    prompt: R`A student says, "The crate is moving forward, so the worker's push must be greater than the friction force." Is the student correct? Explain.`,
    rows: [{ name: "Claim", earns: R`States that the student is not correct (the push equals the friction force).` },
      { name: "Explanation", earns: R`Explains that a net force in the direction of motion would make the crate speed up. Moving at constant velocity requires zero net force, and motion alone does not require a net force.` }],
    solution: R`The student is not correct. If the push were greater than the friction force, the net force would be forward and the crate would accelerate. The crate moves at constant velocity, so the net force is zero and the push equals the friction force. Motion at constant velocity does not need a net force.` },
];
export default { forms: [{ id: "q24", name: "Topic 2.4 Quiz: Newton's First Law", group: "Unit 2: Force and Translational Dynamics", items }] };

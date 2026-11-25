// AP Physics 1 review, Unit 3: Work, Energy, and Power (topics 3.1 to 3.5). Multiple choice with a free-response TBR and MR.
import { graph, bars } from "../../plot.js";
import { scene, incline, pendulum } from "../../diagrams.js";

const r = String.raw;
const src = (blocks) => [{ title: "", blocks }];
const mc = (id, topic, difficulty, o) => ({ id: "p3r-" + id, type: "mcq", skill: "u3", topic, difficulty, ...o, answer: 0 });

// ---- diagrams and graphs ----
// a smooth track through (x, height in meters) nodes: 10 pixels per meter above a ground line at y = 30
const trackPts = (nodes) => {
  const pts = [];
  for (let i = 0; i < nodes.length - 1; i++) {
    const [x0, h0] = nodes[i], [x1, h1] = nodes[i + 1];
    for (let x = x0; x < x1; x += 4) { const t = (x - x0) / (x1 - x0), s = t * t * (3 - 2 * t); pts.push([x, 30 + 10 * (h0 + (h1 - h0) * s)]); }
  }
  const [xl, hl] = nodes[nodes.length - 1]; pts.push([xl, 30 + 10 * hl]);
  return pts;
};
const coaster = () => {
  const nodes = [[40, 12], [150, 2], [260, 8], [370, 0]], names = ["A", "B", "C", "D"], hs = ["12 m", "2.0 m", "8.0 m", "0 m"];
  return scene({ width: 420, height: 180, alt: "A roller coaster track on a frictionless path. Point A at the left is 12 meters above the ground and is where the car starts from rest. The track dips to point B, 2.0 meters above the ground, rises to a second hilltop at point C, 8.0 meters above the ground, and ends at point D on the ground.", items: [
    { line: { from: [20, 30], to: [400, 30] } }, { rope: { points: trackPts(nodes) } },
    ...nodes.flatMap(([x, h], i) => [{ dot: { x, y: 30 + 10 * h } }, { label: { x, y: 30 + 10 * h + (i === 1 ? 24 : 14), text: names[i] + ", " + hs[i] } }]),
  ] });
};
const fx1 = graph({ x: [0, 6], y: [-4, 8], step: { x: 1, y: 2 }, segments: [[0, 6, 2, 6], [2, -3, 6, -3]], dots: [[0, 6, "closed"], [2, 6, "closed"], [2, -3, "closed"], [6, -3, "closed"]], vlines: [{ x: 2 }], xname: "x", yname: "F (N)", alt: "Net force on the cart versus position from 0 to 6 meters. The force is a constant positive 6 newtons from 0 to 2 meters and a constant negative 3 newtons from 2 to 6 meters." });
const kx = graph({ x: [0, 5], y: [0, 30], step: { x: 1, y: 5 }, segments: [[0, 9, 4, 25]], dots: [[0, 9, "closed"], [4, 25, "closed"]], xname: "x", yname: "K (J)", alt: "Kinetic energy of a crate versus position. A straight line rises from 9 joules at x equal to 0 to 25 joules at x equal to 4.0 meters." });
const fourFx = (letter, segs, alt) => ({ title: "Graph " + letter, blocks: [{ svg: graph({ x: [0, 4], y: [0, 8], step: { x: 1, y: 2 }, segments: segs, labels: [[0.2, 7.4, "Graph " + letter]], xname: "x", yname: "F (N)", width: 300, height: 200, alt }) }] });
const vt = graph({ x: [0, 7], y: [-5, 5], step: 1, segments: [[0, 0, 2, 4], [2, 4, 5, 4], [5, 4, 7, -4]], xname: "t", yname: "v (m/s)", alt: "Velocity of a cart versus time. The velocity rises from 0 to 4 meters per second between 0 and 2 seconds, stays at 4 meters per second until 5 seconds, then falls steadily to negative 4 meters per second at 7 seconds, crossing zero at 6 seconds." });
const springFx = graph({ x: [0, 0.5], y: [0, 24], step: { x: 0.1, y: 4 }, segments: [[0, 0, 0.4, 20]], dots: [[0.4, 20, "closed"]], xname: "x", yname: "F (N)", alt: "Force needed to stretch a spring versus the stretch. A straight line from the origin reaches 20 newtons at a stretch of 0.40 meters." });
const hoistBars = bars({ labels: ["P1", "P2", "P3", "P4"], series: [{ name: "Kinetic", values: [0, 8, 12, 3] }, { name: "Spring", values: [12, 4, 0, 9] }], y: [0, 14], step: 2, yname: "Energy (J)", width: 460, height: 260, alt: "Bar chart of the kinetic energy and the spring potential energy of a block at four instants. At P1 kinetic 0 joules and spring 12. At P2 kinetic 8 and spring 4. At P3 kinetic 12 and spring 0. At P4 kinetic 3 and spring 9." });
const g2 = [[0.5, 3.9], [1.0, 7.1], [1.5, 11.4], [2.0, 14.5], [2.5, 18.9], [3.0, 21.8]];
const fit = graph({ x: [0, 3], y: [0, 24], step: { x: 0.5, y: 4 }, fns: [{ f: (x) => 7.4 * x, from: 0, to: 3 }], dots: g2.map(([a, b]) => [a, b, "closed"]), xname: "h", yname: "v² (m²/s²)", alt: "Square of the speed versus drop height for a ball dropped on another planet. Six data points lie close to a best fit line through the origin that reaches 22.2 square meters per second squared at a height of 3.0 meters." });
const tbrGraph = graph({ x: [0, 6], y: [0, 14], step: { x: 1, y: 2 }, segments: [[0, 12, 2, 12], [2, 12, 6, 0]], dots: [[0, 12, "closed"], [2, 12, "closed"], [6, 0, "closed"]], xname: "x", yname: "F (N)", alt: "Applied force on the crate versus position. The force is a constant 12 newtons from 0 to 2.0 meters, then decreases steadily to 0 newtons at 6.0 meters." });

export const sets = {
  "p3r-s01": { name: "A cart on a track", label: "Graph", intro: r`A $1.0$ kg cart moves along a horizontal track at $2.0$ m/s when it passes $x = 0$. The graph shows the net force on the cart, along its line of motion, from $x = 0$ to $x = 6.0$ m.`, sources: src([{ svg: fx1 }]) },
  "p3r-s02": { name: "Energy of a crate", label: "Graph", intro: r`A $2.0$ kg crate slides along a horizontal floor. The graph shows its kinetic energy as a function of position, and the net force on the crate is constant. Position $x$ is in meters.`, sources: src([{ svg: kx }]) },
  "p3r-s03": { name: "Four force graphs", label: "Graphs", intro: r`A $1.5$ kg cart starts from rest and is pushed along a track from $x = 0$ to $x = 4.0$ m by a force along the track. Four possible graphs of the force against position are shown.`, sources: [
    fourFx("A", [[0, 6, 4, 6]], "Graph A: a constant force of 6 newtons from 0 to 4 meters."),
    fourFx("B", [[0, 0, 4, 3]], "Graph B: a force rising steadily from 0 newtons at 0 meters to 3 newtons at 4 meters."),
    fourFx("C", [[0, 0, 4, 6]], "Graph C: a force rising steadily from 0 newtons at 0 meters to 6 newtons at 4 meters."),
    fourFx("D", [[0, 4, 4, 4]], "Graph D: a constant force of 4 newtons from 0 to 4 meters."),
  ] },
  "p3r-s04": { name: "A cart reverses", label: "Graph", intro: r`A $2.0$ kg cart moves along a straight track. The graph shows its velocity as a function of time, with $t$ in seconds.`, sources: src([{ svg: vt }]) },
  "p3r-s05": { name: "A block on a rough incline", label: "Setup", intro: r`A block of mass $m$ is released from rest on an incline that makes an angle $\theta$ with the horizontal. The coefficient of kinetic friction between the block and the incline is $\mu$. The block slides a distance $L$ along the incline.`, sources: src([{ svg: incline({ angle: 30, block: { label: "m" }, alt: "A block of mass m on an incline that rises to the right at angle theta above the horizontal." }) }]) },
  "p3r-s06": { name: "Stretching a spring", label: "Graph", intro: r`The graph shows the force a student applies to stretch a spring, as a function of the stretch $x$ from its relaxed length, with $x$ in meters.`, sources: src([{ svg: springFx }]) },
  "p3r-s07": { name: "A roller coaster", label: "Setup", intro: r`A roller coaster car starts from rest at point A and rolls along the frictionless track shown. Heights are measured above the ground.`, sources: src([{ svg: coaster() }]) },
  "p3r-s08": { name: "A block on a spring", label: "Bar chart", intro: r`A $0.50$ kg block on a frictionless horizontal surface is attached to a spring. The bar chart shows the kinetic energy of the block and the potential energy stored in the spring at four instants, P1 to P4.`, sources: src([{ svg: hoistBars }]) },
  "p3r-s09": { name: "A swinging bob", label: "Setup", intro: r`A small bob of mass $0.40$ kg hangs from a light string $2.0$ m long. The bob is pulled aside until the string makes an angle of $37^\circ$ with the vertical and is released from rest. Ignore air resistance.`, sources: src([{ svg: pendulum({ angle: 37, path: true, label: "m", alt: "A pendulum with a bob on a string, pulled to the right until the string makes an angle of 37 degrees with the dashed vertical line, with a dashed arc showing the path." }) }]) },
  "p3r-s10": { name: "Data from another planet", label: "Graph", intro: r`A student drops a ball from several heights $h$ on the surface of another planet and measures its speed $v$ just before it lands. Air resistance is negligible. The graph shows $v^2$ against $h$, with $h$ in meters, and the best fit line.`, sources: src([{ svg: fit }]) },
  "p3r-s11": { name: "A cart pulled up a ramp", label: "Setup", intro: r`A cart of mass $m$ is pulled up a frictionless incline of angle $\theta$ at a constant speed $v$ by a force $F$ parallel to the incline.`, sources: src([{ svg: incline({ angle: 25, block: { label: "m" }, forces: [{ dir: "up-slope", length: 70, shift: 34, label: "F" }], alt: "A cart of mass m on an incline at angle theta, with a force F drawn up the incline." }) }]) },
  "p3r-s12": { name: "Four hoists", label: "Table", intro: r`Four hoists each lift a load from the ground at a constant speed. The table gives the load, the height, and the time for each.`, sources: src([{ table: { head: ["Hoist", "Load mass (kg)", "Height (m)", "Time (s)"], rows: [["W", "100", "10", "25"], ["X", "200", "3.0", "12"], ["Y", "150", "6.0", "15"], ["Z", "400", "2.0", "10"]] } }]) },
  "p3r-s13": { name: "A crate pushed across a floor", label: "Free response", frq: "TBR", intro: r`A $3.0$ kg crate starts from rest at $x = 0$ on a rough horizontal floor. A horizontal force $F$ pushes the crate in the $+x$ direction, and the magnitude of $F$ depends on position as shown in the graph. The floor exerts a constant kinetic friction force of $4.0$ N on the crate while it moves.`, sources: src([{ svg: tbrGraph }]) },
  "p3r-s14": { name: "A motor pulling a cart up a ramp", label: "Free response", frq: "MR", intro: r`A motor pulls a cart of mass $m$ up a rough incline that makes an angle $\theta$ with the horizontal, using a cable parallel to the incline that exerts a force of magnitude $T$. The cart moves up the incline at a constant speed $v$. The coefficient of kinetic friction between the cart and the incline is $\mu$.`, sources: src([{ svg: incline({ angle: 20, block: { label: "m" }, forces: [{ dir: "up-slope", length: 70, shift: 34, label: "T" }], alt: "A cart of mass m on an incline at angle theta, pulled up the incline by a cable that exerts a force T." }) }]) },
};

export default [
  // ---------------- 3.1 Translational kinetic energy ----------------
  mc("m01", "3.1", "easy", { question: r`A cyclist and bicycle have a combined mass of $80$ kg and travel at $6.0$ m/s. Their translational kinetic energy is`,
    choices: [r`$1440$ J`, r`$2880$ J`, r`$480$ J`, r`$240$ J`],
    why: [r`$K = \tfrac{1}{2}mv^2 = \tfrac{1}{2}(80)(6.0)^2 = 1440$ J.`, r`$2880$ J is $mv^2$, with the factor $\tfrac{1}{2}$ left out.`, r`$480$ J is $mv$, which is the momentum, not the energy.`, r`$240$ J is $\tfrac{1}{2}mv$, with the speed not squared.`] }),
  mc("m02", "3.1", "easy", { question: r`The speed of a cart triples while its mass stays the same. The translational kinetic energy of the cart becomes`,
    choices: [r`$9$ times as large`, r`$3$ times as large`, r`$6$ times as large`, r`$\sqrt{3}$ times as large`],
    why: [r`$K = \tfrac{1}{2}mv^2$, so tripling $v$ multiplies $K$ by $3^2 = 9$.`, r`$3$ times treats $K$ as proportional to $v$ instead of $v^2$.`, r`$6$ multiplies the speed factor by $2$ for no reason; the factor is $3^2$.`, r`$\sqrt{3}$ takes a square root of the speed factor, which reverses the relationship.`] }),
  mc("m03", "3.1", "moderate", { question: r`A skateboarder of mass $60$ kg speeds up from $2.0$ m/s to $5.0$ m/s. The increase in the skateboarder's kinetic energy is`,
    choices: [r`$630$ J`, r`$270$ J`, r`$870$ J`, r`$90$ J`],
    why: [r`$\Delta K = \tfrac{1}{2}m(v_f^2 - v_i^2) = \tfrac{1}{2}(60)(25 - 4) = 630$ J.`, r`$270$ J is $\tfrac{1}{2}m(\Delta v)^2$, which squares the change in speed instead of taking the difference of the squares.`, r`$870$ J adds the two kinetic energies instead of subtracting them.`, r`$90$ J is $\tfrac{1}{2}m\,\Delta v$, with no squares at all.`] }),
  mc("m04", "3.1", "moderate", { stem: r`Cart A has mass $m$ and speed $2v$. Cart B has mass $2m$ and speed $v$.`, question: r`How do their translational kinetic energies compare?`,
    choices: [r`$K_A = 2K_B$`, r`$K_A = K_B$`, r`$K_A = 4K_B$`, r`$K_B = 2K_A$`],
    why: [r`$K_A = \tfrac{1}{2}m(2v)^2 = 2mv^2$ and $K_B = \tfrac{1}{2}(2m)v^2 = mv^2$, so $K_A = 2K_B$.`, r`$K_A = K_B$ treats the kinetic energy as proportional to $mv$, which is $2mv$ for both carts.`, r`$K_A = 4K_B$ squares the speed ratio but ignores that cart B has twice the mass.`, r`$K_B = 2K_A$ weighs the mass ratio and ignores that the speed enters squared.`] }),
  mc("m05", "3.1", "moderate", { question: r`A ball is dropped from rest. Ignore air resistance. Its kinetic energy is $K_0$ after $1.0$ s of fall. Its kinetic energy after $2.0$ s of fall is`,
    choices: [r`$4K_0$`, r`$2K_0$`, r`$8K_0$`, r`$K_0$`],
    why: [r`The speed is proportional to the time, so the speed doubles. Kinetic energy is proportional to $v^2$, so it becomes $4K_0$.`, r`$2K_0$ treats kinetic energy as proportional to the time of fall.`, r`$8K_0$ multiplies the factor $2$ for the speed by the factor $4$ for the distance fallen.`, r`$K_0$ treats the kinetic energy as constant, which is true only at constant speed.`] }),
  mc("m06", "3.1", "difficult", { stem: r`A $2.0$ kg cart moves east at $3.0$ m/s. A moment later it moves north at $4.0$ m/s.`, question: r`The change in the cart's translational kinetic energy is`,
    choices: [r`$7$ J`, r`$25$ J`, r`$1$ J`, r`$14$ J`],
    why: [r`Kinetic energy is a scalar and depends only on speed: $\Delta K = \tfrac{1}{2}(2.0)(4.0^2 - 3.0^2) = 7$ J.`, r`$25$ J uses the size of the velocity change, $5.0$ m/s, as if it were a speed.`, r`$1$ J squares the difference of the speeds instead of taking the difference of the squares.`, r`$14$ J is $m(v_f^2 - v_i^2)$, with the factor $\tfrac{1}{2}$ left out.`] }),
  mc("m07", "3.1", "easy", { question: r`A crate moving at $5.0$ m/s has a translational kinetic energy of $250$ J. The mass of the crate is`,
    choices: [r`$20$ kg`, r`$10$ kg`, r`$50$ kg`, r`$100$ kg`],
    why: [r`$m = 2K/v^2 = 2(250)/(5.0)^2 = 20$ kg.`, r`$10$ kg is $K/v^2$, with the factor of $2$ lost.`, r`$50$ kg is $K/v$, with the speed not squared.`, r`$100$ kg is $2K/v$, with the speed not squared.`] }),

  // ---------------- 3.2 Work ----------------
  mc("m08", "3.2", "moderate", { set: "p3r-s01", question: r`The net work done on the cart as it moves from $x = 0$ to $x = 6.0$ m is`,
    choices: [r`$0$ J`, r`$24$ J`, r`$12$ J`, r`$-12$ J`],
    why: [r`The area from $0$ to $2.0$ m is $+(6)(2) = +12$ J. The area from $2.0$ m to $6.0$ m is $-(3)(4) = -12$ J. The sum is $0$.`, r`$24$ J adds the sizes of the two areas, ignoring that the second one is negative work.`, r`$12$ J counts only the positive area.`, r`$-12$ J counts only the negative area.`] }),
  mc("m09", "3.2", "moderate", { set: "p3r-s01", question: r`The speed of the cart when it reaches $x = 4.0$ m is`,
    choices: [r`$4.0$ m/s`, r`$3.5$ m/s`, r`$2.0$ m/s`, r`$5.3$ m/s`],
    why: [r`The work from $0$ to $4.0$ m is $12 - 6 = 6$ J. The initial kinetic energy is $\tfrac{1}{2}(1.0)(2.0)^2 = 2$ J, so $K = 8$ J and $v = \sqrt{2(8)/1.0} = 4.0$ m/s.`, r`$3.5$ m/s uses only the net work, $\sqrt{2(6)/1.0}$, and leaves out the initial kinetic energy.`, r`$2.0$ m/s is the speed at $x = 6.0$ m, where the net work from the start is zero.`, r`$5.3$ m/s is the speed at $x = 2.0$ m, where only the positive area has been counted.`] }),
  mc("m10", "3.2", "moderate", { set: "p3r-s02", question: r`The magnitude of the net force on the crate is`,
    choices: [r`$4.0$ N`, r`$6.3$ N`, r`$16$ N`, r`$2.0$ N`],
    why: [r`The net work equals the change in kinetic energy, so the net force is the slope of the graph: $(25 - 9)/4.0 = 4.0$ N.`, r`$6.3$ N is the ratio $25/4.0$, which ignores that the line does not start at zero.`, r`$16$ N is the change in kinetic energy in joules, not divided by the distance.`, r`$2.0$ N divides the slope by the mass, as if the slope were $\tfrac{1}{2}ma$ with $m = 2.0$ kg.`] }),
  mc("m11", "3.2", "easy", { set: "p3r-s02", question: r`The net work done on the crate between $x = 1.0$ m and $x = 3.0$ m is`,
    choices: [r`$8.0$ J`, r`$16$ J`, r`$21$ J`, r`$13$ J`],
    why: [r`The kinetic energy is $13$ J at $x = 1.0$ m and $21$ J at $x = 3.0$ m, so $W_{net} = \Delta K = 8.0$ J.`, r`$16$ J is the net work over the whole graph, from $0$ to $4.0$ m.`, r`$21$ J is the kinetic energy at $x = 3.0$ m, not the change.`, r`$13$ J is the kinetic energy at $x = 1.0$ m, not the change.`] }),
  mc("m12", "3.2", "moderate", { set: "p3r-s03", question: r`The cart must reach a speed of $4.0$ m/s at $x = 4.0$ m. Which graph shows a force that does this?`,
    choices: ["Graph C", "Graph A", "Graph B", "Graph D"],
    why: [r`The needed work is $\tfrac{1}{2}(1.5)(4.0)^2 = 12$ J. Graph C is a triangle with area $\tfrac{1}{2}(4.0)(6) = 12$ J.`, r`Graph A has an area of $(6)(4.0) = 24$ J, which is too much.`, r`Graph B has an area of $\tfrac{1}{2}(4.0)(3) = 6$ J, which is too little.`, r`Graph D has an area of $(4)(4.0) = 16$ J, which gives a speed above $4.0$ m/s.`] }),
  mc("m13", "3.2", "difficult", { set: "p3r-s04", question: r`The net work done on the cart from $t = 5.0$ s to $t = 7.0$ s is`,
    choices: [r`$0$ J`, r`$-16$ J`, r`$+16$ J`, r`$-32$ J`],
    why: [r`The speed is $4.0$ m/s at both times, so $\Delta K = 0$ and the net work is $0$. The cart slows to rest and then speeds up in the opposite direction by the same amount.`, r`$-16$ J is the work from $5.0$ s to $6.0$ s only, when the cart slows to rest.`, r`$+16$ J treats the second second as speeding up and counts only that interval.`, r`$-32$ J uses $-mv^2$, with the factor $\tfrac{1}{2}$ left out.`] }),
  mc("m14", "3.2", "moderate", { set: "p3r-s05", question: r`The work done on the block by the friction force as it slides the distance $L$ is`,
    choices: [r`$-\mu m g L\cos\theta$`, r`$-\mu m g L\sin\theta$`, r`$-\mu m g L$`, r`$+\mu m g L\cos\theta$`],
    why: [r`The normal force is $mg\cos\theta$, so the friction force is $\mu mg\cos\theta$. It points up the incline while the displacement is down the incline, so $W = -\mu mgL\cos\theta$.`, r`Using $\sin\theta$ takes the component of weight along the incline as the normal force.`, r`Using $mg$ for the normal force ignores the angle of the incline.`, r`The sign is positive only if the friction force pointed along the displacement. Friction opposes the motion, so its work is negative.`] }),
  mc("m15", "3.2", "difficult", { set: "p3r-s05", question: r`The speed of the block after sliding the distance $L$ is`,
    choices: [r`$\sqrt{2gL(\sin\theta - \mu\cos\theta)}$`, r`$\sqrt{2gL(\sin\theta + \mu\cos\theta)}$`, r`$\sqrt{2gL(\cos\theta - \mu\sin\theta)}$`, r`$\sqrt{2gL(\sin\theta - \mu)}$`],
    why: [r`The net work is $mgL\sin\theta - \mu mgL\cos\theta = \tfrac{1}{2}mv^2$. The mass cancels and $v = \sqrt{2gL(\sin\theta - \mu\cos\theta)}$.`, r`The plus sign adds the work of friction to the work of gravity, but friction removes energy.`, r`This swaps sine and cosine, which would be correct only if $\theta$ were measured from the vertical.`, r`Dropping $\cos\theta$ from the friction term uses $N = mg$ instead of $N = mg\cos\theta$.`] }),
  mc("m16", "3.2", "easy", { question: r`A child pulls a wagon with a rope that exerts a force of $40$ N at $60^\circ$ above the horizontal. The wagon moves $5.0$ m along level ground. The work done by the rope on the wagon is`,
    choices: [r`$100$ J`, r`$200$ J`, r`$173$ J`, r`$0$ J`],
    why: [r`Only the component along the displacement does work: $W = Fd\cos60^\circ = (40)(5.0)(0.50) = 100$ J.`, r`$200$ J is $Fd$, with the angle ignored.`, r`$173$ J uses $\sin60^\circ$, the component perpendicular to the displacement.`, r`$0$ J would be correct only if the force were perpendicular to the displacement.`] }),
  mc("m17", "3.2", "easy", { question: r`A student lifts a book at constant speed from the floor to a shelf. Which statement about the work done on the book is correct?`,
    choices: [r`The hand does positive work, gravity does negative work, and the net work is zero.`, r`The hand does positive work, gravity does negative work, and the net work is positive.`, r`The hand does positive work, gravity does zero work, and the net work is positive.`, r`The hand does zero work, gravity does negative work, and the net work is negative.`],
    why: [r`The hand's force is along the displacement (positive work) and gravity's force is opposite to it (negative work). The speed is constant, so $\Delta K = 0$ and the net work is zero.`, r`A positive net work would speed the book up, but the speed is constant.`, r`Gravity pulls down while the book moves up, so it does negative work, not zero.`, r`The hand pushes up in the direction of motion, so its work is positive, and the net work cannot be negative at constant speed.`] }),
  mc("m18", "3.2", "moderate", { question: r`A car traveling at $20$ m/s brakes with a constant force and skids to a stop in a distance $d$ on a level road. The same car, with the same braking force, is traveling at $30$ m/s. It skids to a stop in a distance of`,
    choices: [r`$2.25d$`, r`$1.5d$`, r`$1.25d$`, r`$3.4d$`],
    why: [r`The work of the braking force removes all the kinetic energy: $Fd = \tfrac{1}{2}mv^2$. The distance is proportional to $v^2$, so it is $(30/20)^2d = 2.25d$.`, r`$1.5d$ treats the distance as proportional to the speed.`, r`$1.25d$ uses the difference of the squares, $(30^2 - 20^2)/20^2$, which is the extra distance beyond $d$ as a fraction of $d$, not the total distance.`, r`$3.4d$ cubes the speed ratio.`] }),
  mc("m19", "3.2", "moderate", { question: r`A constant net force $F$ acts on a cart of mass $m$ over a distance $d$, starting from rest, and the cart reaches a final speed $v$. The same force acts over the same distance on a cart of mass $2m$ that starts from rest. Its final speed is`,
    choices: [r`$0.71v$`, r`$0.50v$`, r`$1.0v$`, r`$1.4v$`],
    why: [r`The work $Fd$ is the same, so the kinetic energy is the same: $\tfrac{1}{2}(2m)v'^2 = \tfrac{1}{2}mv^2$, giving $v' = v/\sqrt{2} = 0.71v$.`, r`$0.50v$ halves the speed for twice the mass, but the speed depends on the square root of the mass.`, r`$1.0v$ treats the speed as independent of the mass; it is the kinetic energy that is the same.`, r`$1.4v$ puts the mass ratio in the wrong place.`] }),
  mc("m20", "3.2", "easy", { question: r`The net work done on a $4.0$ kg cart that starts from rest is $50$ J. The final speed of the cart is`,
    choices: [r`$5.0$ m/s`, r`$25$ m/s`, r`$3.5$ m/s`, r`$12.5$ m/s`],
    why: [r`$W_{net} = \Delta K$, so $50 = \tfrac{1}{2}(4.0)v^2$ and $v = 5.0$ m/s.`, r`$25$ m/s is $v^2$; the square root was not taken.`, r`$3.5$ m/s is $\sqrt{W/m}$, with the factor of $2$ left out.`, r`$12.5$ m/s is $W/m$, with the factor of $2$ and the root both left out.`] }),
  mc("m21", "3.2", "difficult", { stem: r`A crate of mass $m$ is pulled a distance $d$ across a rough horizontal floor at constant velocity by a rope. The rope exerts a force of magnitude $T$ at an angle $\theta$ above the horizontal, and the coefficient of kinetic friction is $\mu$.`, question: r`The work done on the crate by the friction force is`,
    choices: [r`$-Td\cos\theta$`, r`$-\mu mgd$`, r`$-\mu(mg + T\sin\theta)d$`, r`$-Td\sin\theta$`],
    why: [r`The velocity is constant, so the net work is zero. The normal force and weight do no work, so the work of friction is the opposite of the rope's work: $-Td\cos\theta$.`, r`$-\mu mgd$ uses $N = mg$, but the rope's vertical component reduces the normal force.`, r`$-\mu(mg + T\sin\theta)d$ adds the vertical pull of the rope to the weight, but the rope lifts the crate and reduces the normal force.`, r`$-Td\sin\theta$ uses the vertical component of the tension, which does no work on the horizontal motion.`] }),

  // ---------------- 3.3 Potential energy ----------------
  mc("m22", "3.3", "easy", { set: "p3r-s06", question: r`The elastic potential energy stored in the spring when it is stretched $0.20$ m is`,
    choices: [r`$1.0$ J`, r`$2.0$ J`, r`$4.0$ J`, r`$8.0$ J`],
    why: [r`The area under the line from $0$ to $0.20$ m is $\tfrac{1}{2}(0.20)(10) = 1.0$ J.`, r`$2.0$ J is $Fx$ with $F = 10$ N, a rectangle instead of a triangle.`, r`$4.0$ J is the energy stored at a stretch of $0.40$ m.`, r`$8.0$ J is $Fx = (20)(0.40)$ at the end of the graph, a rectangle instead of a triangle.`] }),
  mc("m23", "3.3", "moderate", { set: "p3r-s06", question: r`The additional energy stored when the spring is stretched from $0.20$ m to $0.40$ m is`,
    choices: [r`$3.0$ J`, r`$4.0$ J`, r`$2.0$ J`, r`$1.0$ J`],
    why: [r`The spring constant is $k = 50$ N/m. The energy is $\tfrac{1}{2}(50)(0.40)^2 - \tfrac{1}{2}(50)(0.20)^2 = 4.0 - 1.0 = 3.0$ J.`, r`$4.0$ J is the total energy stored at $0.40$ m, not the additional energy.`, r`$2.0$ J is $(10\ \text{N})(0.20\ \text{m})$, using the force at $0.20$ m over the second interval.`, r`$1.0$ J assumes that equal stretches store equal energy.`] }),
  mc("m24", "3.3", "easy", { question: r`A $4.0$ kg backpack is lifted from the floor onto a table $0.50$ m high. The increase in the gravitational potential energy of the backpack and Earth system is`,
    choices: [r`$19.6$ J`, r`$9.8$ J`, r`$4.9$ J`, r`$2.0$ J`],
    why: [r`$\Delta U_g = mg\Delta h = (4.0)(9.8)(0.50) = 19.6$ J.`, r`$9.8$ J includes a factor of $\tfrac{1}{2}$, which belongs to kinetic and spring energy, not gravitational energy.`, r`$4.9$ J leaves out the mass.`, r`$2.0$ J is $mh$, with $g$ left out.`] }),
  mc("m25", "3.3", "moderate", { question: r`A student sets the zero of gravitational potential energy for a $0.50$ kg ball and Earth system at the roof of a building. The ball is then on the ground $20$ m below the roof. The gravitational potential energy of the system is`,
    choices: [r`$-98$ J`, r`$+98$ J`, r`$0$ J`, r`$-49$ J`],
    why: [r`The ground is $20$ m below the chosen zero, so $U_g = mgh = (0.50)(9.8)(-20) = -98$ J.`, r`$+98$ J would be the value $20$ m above the zero, not below it.`, r`$0$ J would be the value at the roof, not on the ground.`, r`$-49$ J includes a factor of $\tfrac{1}{2}$, which does not belong in gravitational potential energy.`] }),
  mc("m26", "3.3", "moderate", { question: r`A spring with constant $k$ is compressed a distance $x$. A second spring with constant $2k$ is compressed a distance $x/2$. The energy stored in the second spring is`,
    choices: [r`half as much as in the first spring`, r`exactly the same as in the first spring`, r`one fourth as much as in the first spring`, r`twice as much as in the first spring`],
    why: [r`$U = \tfrac{1}{2}kx^2$. For the second spring, $\tfrac{1}{2}(2k)(x/2)^2 = \tfrac{1}{4}kx^2$, which is half of $\tfrac{1}{2}kx^2$.`, r`The same energy would result if the product $kx$ were what mattered. The compression is squared.`, r`One fourth squares the compression change but ignores the doubled constant.`, r`Twice as much uses the constant change but ignores that the compression is squared.`] }),
  mc("m27", "3.3", "difficult", { stem: r`A block of mass $m$ hangs at rest from a vertical spring and stretches it a distance $d$ beyond its relaxed length. The block was lowered slowly by hand from the position where the spring was relaxed to this equilibrium position.`, question: r`For the system of the block, spring, and Earth, the change in total potential energy is`,
    choices: [r`$-\tfrac{1}{2}mgd$`, r`$-mgd$`, r`$+\tfrac{1}{2}mgd$`, r`$-\tfrac{3}{2}mgd$`],
    why: [r`At equilibrium $kd = mg$, so $k = mg/d$. The gravitational energy changes by $-mgd$ and the spring energy by $+\tfrac{1}{2}kd^2 = +\tfrac{1}{2}mgd$. The total change is $-\tfrac{1}{2}mgd$.`, r`$-mgd$ counts the change in gravitational energy and leaves out the energy stored in the spring.`, r`$+\tfrac{1}{2}mgd$ counts only the energy stored in the spring and leaves out the loss of gravitational energy.`, r`$-\tfrac{3}{2}mgd$ gives the spring energy the wrong sign, subtracting it from the loss of gravitational energy.`] }),

  // ---------------- 3.4 Conservation of energy ----------------
  mc("m28", "3.4", "easy", { stem: r`A rock is thrown straight up. Treat the rock alone as the system and ignore air resistance.`, question: r`Why does the kinetic energy of the system decrease as the rock rises?`,
    choices: [r`Earth's gravity, outside the system, does negative work on the rock.`, r`The rock's kinetic energy changes into potential energy stored inside the system.`, r`The system is closed, so its energy cannot change while the rock rises.`, r`The rock's kinetic energy is changed into thermal energy of the system.`],
    why: [r`Earth is not in the system, so gravity is an external force. It does negative work on the rock, and the work changes the system's kinetic energy.`, r`A system of the rock alone has no gravitational potential energy, because that energy belongs to the rock and Earth together.`, r`The system is open: an outside force does work on it, so its energy changes.`, r`Without air resistance, no thermal energy is produced.`] }),
  mc("m29", "3.4", "easy", { question: r`A student lifts a ball at constant speed from the floor to a shelf. Consider the system of the ball and Earth. This system is`,
    choices: [r`open, and its total energy increases`, r`closed, and its total energy stays the same`, r`open, and its total energy stays the same`, r`closed, and its total energy increases`],
    why: [r`The student's hand is outside the system and does positive work on it, so the system is open and its total energy (the gravitational potential energy) increases.`, r`A closed system has no net work done on it by outside forces. The hand does work here.`, r`An open system with a net transfer of energy into it cannot keep the same energy.`, r`A closed system cannot gain energy, so this pair of statements is contradictory.`] }),
  mc("m30", "3.4", "easy", { question: r`A water balloon is dropped from rest from a window $2.5$ m above the ground. Ignoring air resistance, its speed just before it reaches the ground is`,
    choices: [r`$7.0$ m/s`, r`$4.95$ m/s`, r`$24.5$ m/s`, r`$49.0$ m/s`],
    why: [r`$mgh = \tfrac{1}{2}mv^2$, so $v = \sqrt{2gh} = \sqrt{2(9.8)(2.5)} = 7.0$ m/s.`, r`$4.95$ m/s is $\sqrt{gh}$, with the factor of $2$ left out.`, r`$24.5$ m/s is $gh$, which is $v^2/2$.`, r`$49.0$ m/s is $2gh$, which is $v^2$; the square root was not taken.`] }),
  mc("m31", "3.4", "easy", { question: r`A $2.0$ kg object is $3.0$ m above the floor and moves at $4.0$ m/s. Taking the floor as the zero of gravitational potential energy, the mechanical energy of the object and Earth system is`,
    choices: [r`$75$ J`, r`$59$ J`, r`$16$ J`, r`$43$ J`],
    why: [r`$E = K + U_g = \tfrac{1}{2}(2.0)(4.0)^2 + (2.0)(9.8)(3.0) = 16 + 58.8 \approx 75$ J.`, r`$59$ J counts only the gravitational potential energy.`, r`$16$ J counts only the kinetic energy.`, r`$43$ J subtracts the kinetic energy from the potential energy instead of adding.`] }),
  mc("m32", "3.4", "easy", { question: r`A ball is thrown straight up at $14$ m/s. Ignoring air resistance, the greatest height it reaches above the release point is`,
    choices: [r`$10$ m`, r`$20$ m`, r`$5.0$ m`, r`$1.4$ m`],
    why: [r`$\tfrac{1}{2}mv^2 = mgh$, so $h = v^2/2g = 196/19.6 = 10$ m.`, r`$20$ m is $v^2/g$, with the factor of $\tfrac{1}{2}$ left out.`, r`$5.0$ m puts a factor of $\tfrac{1}{2}$ on both sides of the energy equation.`, r`$1.4$ m is $v/g$, which is a time, not a height.`] }),
  mc("m33", "3.4", "moderate", { set: "p3r-s07", question: r`The speed of the car at point C is closest to`,
    choices: [r`$8.9$ m/s`, r`$15$ m/s`, r`$11$ m/s`, r`$6.3$ m/s`],
    why: [r`Point C is $12 - 8.0 = 4.0$ m below A. $v = \sqrt{2g\Delta h} = \sqrt{2(9.8)(4.0)} = 8.9$ m/s.`, r`$15$ m/s uses the full $12$ m as the drop, which is the speed at ground level.`, r`$11$ m/s uses the height of C above B, $6.0$ m, instead of the drop from A to C.`, r`$6.3$ m/s is $\sqrt{g\Delta h}$, with the factor of $2$ left out.`] }),
  mc("m34", "3.4", "easy", { set: "p3r-s07", question: r`Which ranking of the speeds of the car at the four points is correct?`,
    choices: [r`$v_D > v_B > v_C > v_A$`, r`$v_A > v_C > v_B > v_D$`, r`$v_B > v_D > v_C > v_A$`, r`$v_D > v_C > v_B > v_A$`],
    why: [r`The car starts from rest at A. The lower the point, the more potential energy has become kinetic energy: D is lowest, then B, then C, then A.`, r`This ranks the points by height, which reverses the speed order.`, r`B and D are ranked backward; D is lower than B, so the car is faster at D.`, r`C is higher than B, so the car moves slower at C than at B.`] }),
  mc("m35", "3.4", "easy", { set: "p3r-s08", question: r`At which instant is the speed of the block greatest?`,
    choices: [r`P3`, r`P1`, r`P2`, r`P4`],
    why: [r`The speed is greatest where the kinetic energy is greatest. The kinetic energy is $12$ J at P3.`, r`At P1 the kinetic energy is zero, so the block is momentarily at rest.`, r`At P2 the kinetic energy is $8$ J, less than at P3.`, r`At P4 the kinetic energy is $3$ J, less than at P3.`] }),
  mc("m36", "3.4", "moderate", { set: "p3r-s08", question: r`The speed of the block at P3 is closest to`,
    choices: [r`$6.9$ m/s`, r`$4.9$ m/s`, r`$48$ m/s`, r`$3.5$ m/s`],
    why: [r`At P3, $K = 12$ J, so $v = \sqrt{2K/m} = \sqrt{2(12)/0.50} = 6.9$ m/s.`, r`$4.9$ m/s is $\sqrt{K/m}$, with the factor of $2$ left out.`, r`$48$ m/s is $2K/m$, which is $v^2$; the square root was not taken.`, r`$3.5$ m/s is $\sqrt{2Km}$, which multiplies by the mass instead of dividing.`] }),
  mc("m37", "3.4", "difficult", { set: "p3r-s08", question: r`The distance of the block from its equilibrium position at P4 is how many times its distance from equilibrium at P2?`,
    choices: [r`$1.5$`, r`$2.25$`, r`$0.67$`, r`$0.44$`],
    why: [r`The spring energy is $\tfrac{1}{2}kx^2$. It is $9$ J at P4 and $4$ J at P2, so $x_4/x_2 = \sqrt{9/4} = 1.5$.`, r`$2.25$ is the ratio of the spring energies, $9/4$; the energy is proportional to $x^2$, not $x$.`, r`$0.67$ is the inverse of the correct ratio, $x_2/x_4$.`, r`$0.44$ is the inverse of the energy ratio, $4/9$.`] }),
  mc("m38", "3.4", "moderate", { set: "p3r-s09", question: r`The speed of the bob at the lowest point of its swing is closest to`,
    choices: [r`$2.8$ m/s`, r`$5.6$ m/s`, r`$6.3$ m/s`, r`$4.9$ m/s`],
    why: [r`The bob falls a height $h = L(1 - \cos37^\circ) = 0.40$ m. $v = \sqrt{2gh} = \sqrt{2(9.8)(0.40)} = 2.8$ m/s.`, r`$5.6$ m/s uses $h = L\cos37^\circ$, the height of the starting point above the pivot, not the drop.`, r`$6.3$ m/s uses the whole string length as the drop.`, r`$4.9$ m/s uses $h = L\sin37^\circ$, the horizontal distance of the starting point from the vertical.`] }),
  mc("m39", "3.4", "moderate", { stem: r`A $2.0$ kg block is released from rest at the top of a rough ramp. The top is $3.0$ m above the bottom, and the block has a speed of $5.0$ m/s at the bottom.`, question: r`The work done on the block by friction as it slides down the ramp is closest to`,
    choices: [r`$-34$ J`, r`$+34$ J`, r`$-84$ J`, r`$-59$ J`],
    why: [r`$W_f = \Delta K + \Delta U = \tfrac{1}{2}(2.0)(5.0)^2 - (2.0)(9.8)(3.0) = 25 - 58.8 = -34$ J.`, r`The work of friction is negative because the friction force opposes the motion.`, r`$-84$ J adds the kinetic energy gained to the potential energy lost instead of subtracting.`, r`$-59$ J assumes that all of the potential energy was removed by friction, which ignores the kinetic energy at the bottom.`] }),
  mc("m40", "3.4", "moderate", { stem: r`A spring with constant $490$ N/m is compressed $0.10$ m against a $0.50$ kg block on a frictionless horizontal surface. The block is released, leaves the spring, and slides up a frictionless ramp.`, question: r`The greatest height the block reaches above the horizontal surface is`,
    choices: [r`$0.50$ m`, r`$1.0$ m`, r`$0.25$ m`, r`$10$ m`],
    why: [r`$\tfrac{1}{2}kx^2 = mgh$, so $h = \dfrac{(0.5)(490)(0.10)^2}{(0.50)(9.8)} = 0.50$ m.`, r`$1.0$ m uses $kx^2$ for the spring energy, with the factor $\tfrac{1}{2}$ left out.`, r`$0.25$ m applies the factor $\tfrac{1}{2}$ to the gravitational energy as well.`, r`$10$ m uses $kx$, a force, in place of the spring energy.`] }),
  mc("m41", "3.4", "moderate", { question: r`A sled slides down a snowy hill and comes to rest at the bottom. Which system conserves its total energy, if thermal energy is counted?`,
    choices: [r`the sled, snow, and Earth together`, r`the sled and Earth, without the snow`, r`the sled alone, without Earth or snow`, r`the sled and snow, without Earth`],
    why: [r`Friction acts between the sled and the snow, and gravity is internal when Earth is included. With all three inside, nothing outside does work, and the lost mechanical energy appears as thermal energy of the sled and the snow.`, r`With the snow outside the system, friction is an external force doing work on the system.`, r`With Earth and the snow outside the system, both gravity and friction are external forces doing work on the sled.`, r`With Earth outside the system, gravity is an external force doing work on the sled.`] }),
  mc("m42", "3.4", "moderate", { set: "p3r-s10", question: r`According to the graph, the acceleration due to gravity on this planet is closest to`,
    choices: [r`$3.7$ m/s²`, r`$7.4$ m/s²`, r`$1.9$ m/s²`, r`$14.8$ m/s²`],
    why: [r`$mgh = \tfrac{1}{2}mv^2$ gives $v^2 = 2gh$, so the slope of $v^2$ against $h$ is $2g$. The slope is $22.2/3.0 = 7.4$ m/s², so $g = 3.7$ m/s².`, r`$7.4$ m/s² is the slope itself, which equals $2g$.`, r`$1.9$ m/s² divides the slope by $4$.`, r`$14.8$ m/s² multiplies the slope by $2$ instead of dividing.`] }),
  mc("m43", "3.4", "moderate", { stem: r`A box slides across a level floor and comes to rest. Treat the box alone as the system.`, question: r`The change in the box's kinetic energy is equal to`,
    choices: [r`the work done on the box by the floor's friction force`, r`zero, because the kinetic energy of the box is conserved`, r`the work done on the box by the normal force of the floor`, r`the work done on the box by gravity`],
    why: [r`The only external force with a component along the motion is friction. The net work on the box equals its change in kinetic energy, and here that is the work of friction.`, r`The kinetic energy drops to zero, so it is not conserved.`, r`The normal force is perpendicular to the displacement, so it does no work.`, r`Gravity is perpendicular to the displacement on a level floor, so it does no work.`] }),
  mc("m44", "3.4", "moderate", { stem: r`A block is dropped onto a vertical spring and momentarily stops at the lowest point of its motion. Treat the block, the spring, and Earth as the system and ignore friction and air resistance.`, question: r`At the lowest point,`,
    choices: [r`the kinetic energy is zero, and the total energy is unchanged`, r`the kinetic energy is zero, so the total energy of the system is zero`, r`the kinetic energy is zero, and the total energy is less than before the drop`, r`the kinetic energy is zero, and the spring energy equals the gravitational energy`],
    why: [r`The system is closed, so its total energy is constant. The kinetic energy has become potential energy: the block is lower and the spring is compressed.`, r`Zero kinetic energy does not mean zero total energy; the system still holds potential energy.`, r`With no friction and no outside force doing work, nothing is lost from the system.`, r`The two potential energies are not equal in general; only their sum is fixed by conservation of energy.`] }),
  mc("m45", "3.4", "moderate", { stem: r`A $60$ kg skateboarder starts from rest at the top of a half-pipe $3.0$ m above the bottom. On the far side she rises to a height of $2.4$ m before stopping.`, question: r`The mechanical energy converted to thermal energy is closest to`,
    choices: [r`$3.5 \times 10^{2}$ J`, r`$1.8 \times 10^{3}$ J`, r`$1.4 \times 10^{3}$ J`, r`$3.6 \times 10^{1}$ J`],
    why: [r`The energy lost is $mg(3.0 - 2.4) = (60)(9.8)(0.60) = 353$ J, or about $3.5 \times 10^{2}$ J.`, r`$1.8 \times 10^{3}$ J is $mg(3.0)$, the whole initial energy.`, r`$1.4 \times 10^{3}$ J is $mg(2.4)$, the energy at the end.`, r`$3.6 \times 10^{1}$ J is $m(0.60)$, with $g$ left out.`] }),
  mc("m46", "3.4", "moderate", { stem: r`Block A has mass $m$ and block B has mass $2m$. Each is released from rest at the same height on its own frictionless ramp.`, question: r`At the bottom of the ramps, which statement is correct?`,
    choices: [r`$K_B = 2K_A$ and $v_B = v_A$`, r`$K_B = 2K_A$ and $v_B = 2v_A$`, r`$K_B = K_A$ and $v_B = v_A$`, r`$K_B = 4K_A$ and $v_B = 2v_A$`],
    why: [r`$\tfrac{1}{2}mv^2 = mgh$ gives $v = \sqrt{2gh}$, independent of mass. The kinetic energy, $mgh$, is proportional to the mass, so $K_B = 2K_A$.`, r`The speed does not depend on the mass, so block B is not faster.`, r`The kinetic energy is $mgh$, which is larger for the larger mass.`, r`The speeds are equal, and a doubled speed would give four times the energy only for equal masses.`] }),
  mc("m47", "3.4", "moderate", { question: r`A student wants to find how much mechanical energy a block loses to thermal energy while sliding from rest down a rough ramp. Which set of measurements is enough?`,
    choices: [r`the mass, the release height, and the speed at the bottom`, r`the release height and the speed at the bottom`, r`the ramp length, the angle, and the speed at the bottom`, r`the mass of the block and the length of the ramp`],
    why: [r`The lost energy is $mgh - \tfrac{1}{2}mv^2$, so the mass, the height, and the speed at the bottom are all needed.`, r`The energies are $mgh$ and $\tfrac{1}{2}mv^2$, so the mass is needed to find the energy in joules.`, r`The ramp length does not give the height, and the mass is also needed.`, r`Neither the height nor the final speed would be known, so the energies cannot be found.`] }),
  mc("m48", "3.4", "difficult", { stem: r`A block of mass $m$ is released from rest at a height $h$ on a frictionless curved track. It then crosses a horizontal rough section of length $L$ with coefficient of kinetic friction $\mu$ and climbs a second frictionless curved track. It stops momentarily at a height $\tfrac{1}{2}h$.`, question: r`The length $L$ is`,
    choices: [r`$\dfrac{h}{2\mu}$`, r`$\dfrac{h}{\mu}$`, r`$\dfrac{2h}{\mu}$`, r`$\dfrac{\mu h}{2}$`],
    why: [r`The energy lost to friction is $\mu mgL = mgh - mg(h/2) = mgh/2$. The mass and $g$ cancel, and $L = h/(2\mu)$.`, r`$h/\mu$ is the length at which the block would stop on the rough section, not reach $h/2$.`, r`$2h/\mu$ uses the whole height as the energy lost and then doubles it.`, r`$\mu h/2$ puts the coefficient in the numerator.`] }),
  mc("m49", "3.4", "difficult", { stem: r`A rubber ball is dropped from a height $h$ onto a hard floor and rebounds to a height $0.64h$. Ignore air resistance.`, question: r`The ratio of the ball's speed just after the bounce to its speed just before the bounce is`,
    choices: [r`$0.80$`, r`$0.64$`, r`$0.36$`, r`$0.20$`],
    why: [r`The kinetic energy is proportional to the height reached, so $K_{after}/K_{before} = 0.64$. The speed ratio is $\sqrt{0.64} = 0.80$.`, r`$0.64$ is the ratio of the kinetic energies, not of the speeds.`, r`$0.36$ is the fraction of the energy lost in the bounce.`, r`$0.20$ is the fraction of the speed lost in the bounce.`] }),
  mc("m50", "3.4", "difficult", { stem: r`A small block slides without friction from rest at a height $h$ down a track and into a vertical loop of radius $R$.`, question: r`The smallest height $h$ for which the block stays in contact with the track at the top of the loop is`,
    choices: [r`$2.5R$`, r`$2.0R$`, r`$3.0R$`, r`$0.5R$`],
    why: [r`At the top the track just provides no force, so $mg = mv^2/R$ and $v^2 = gR$. Energy conservation gives $mgh = mg(2R) + \tfrac{1}{2}m(gR)$, so $h = 2.5R$.`, r`$2.0R$ lets the block reach the height of the top with no speed, but it would leave the track before it got there.`, r`$3.0R$ uses $v^2 = 2gR$ at the top, which is more speed than the minimum.`, r`$0.5R$ equates $mgh$ to $\tfrac{1}{2}mv^2$ with $v^2 = gR$ and ignores the rise to the top of the loop.`] }),

  // ---------------- 3.5 Power ----------------
  mc("m51", "3.5", "easy", { question: r`A hoist lifts a $25$ kg load a height of $6.0$ m at constant speed in $5.0$ s. The average power the hoist supplies to the load is`,
    choices: [r`$294$ W`, r`$30$ W`, r`$1470$ W`, r`$49$ W`],
    why: [r`$P = \dfrac{mgh}{t} = \dfrac{(25)(9.8)(6.0)}{5.0} = 294$ W.`, r`$30$ W is $mh/t$, with $g$ left out.`, r`$1470$ W is the work $mgh$ in joules, not divided by the time.`, r`$49$ W is $mg/t$, with the height left out.`] }),
  mc("m52", "3.5", "easy", { question: r`Two winches lift identical loads through the same height. The first winch takes $6.0$ s and the second takes $18$ s. Compared with the first winch, the second winch`,
    choices: [r`does the same work with one third the power`, r`does one third of the work with the same power`, r`does three times the work with the same power`, r`does the same work with three times the power`],
    why: [r`The work $mgh$ is the same for both. Power is work divided by time, so tripling the time cuts the power to one third.`, r`The work depends on the load and the height, which are the same, so the work is not one third.`, r`The work is not tripled by taking longer.`, r`Taking more time for the same work means less power, not more.`] }),
  mc("m53", "3.5", "moderate", { question: r`A car travels at a constant $25$ m/s on a level road. Air resistance and friction together exert a force of $600$ N opposite to the motion. The power the engine delivers to the wheels is`,
    choices: [r`$1.5 \times 10^{4}$ W`, r`$2.4 \times 10^{1}$ W`, r`$3.8 \times 10^{5}$ W`, r`$7.5 \times 10^{3}$ W`],
    why: [r`The speed is constant, so the engine force is $600$ N. $P = Fv = (600)(25) = 1.5 \times 10^{4}$ W.`, r`$24$ W is $F/v$, which divides instead of multiplies.`, r`$3.8 \times 10^{5}$ W is $Fv^2$, with the speed squared.`, r`$7.5 \times 10^{3}$ W is $\tfrac{1}{2}Fv$, which applies the kinetic energy factor to the power.`] }),
  mc("m54", "3.5", "moderate", { set: "p3r-s11", question: r`The power delivered by the force $F$ is`,
    choices: [r`$mgv\sin\theta$`, r`$mgv\cos\theta$`, r`$mgv$`, r`$\dfrac{mg\sin\theta}{v}$`],
    why: [r`The speed is constant, so $F = mg\sin\theta$ along the incline. $P = Fv = mgv\sin\theta$.`, r`$mgv\cos\theta$ uses the component of the weight perpendicular to the incline.`, r`$mgv$ uses the whole weight, ignoring the angle of the incline.`, r`$mg\sin\theta/v$ divides by the speed instead of multiplying.`] }),
  mc("m55", "3.5", "moderate", { set: "p3r-s12", question: r`Which ranking of the hoists from greatest average power to least average power is correct?`,
    choices: [r`$Z > Y > X > W$`, r`$W > Y > Z > X$`, r`$Z > X > Y > W$`, r`$W > Y > X > Z$`],
    why: [r`$P = mgh/t$ gives $784$ W for Z, $588$ W for Y, $490$ W for X, and $392$ W for W.`, r`This ranks by the work $mgh$ and ignores the time.`, r`This ranks by the load mass alone.`, r`This ranks by the time taken, which is backward; the longer time means less power.`] }),
  mc("m56", "3.5", "difficult", { stem: r`A constant net force of magnitude $F$ acts along the line of motion on an object of mass $m$ that is at rest at $t = 0$.`, question: r`The instantaneous power delivered by the force at time $t$ is`,
    choices: [r`$\dfrac{F^2t}{m}$`, r`$\dfrac{F^2t}{2m}$`, r`$\dfrac{Ft}{m}$`, r`$\dfrac{F^2t^2}{2m}$`],
    why: [r`The speed at time $t$ is $v = at = Ft/m$. $P = Fv = F^2t/m$.`, r`$F^2t/(2m)$ is the average power over the interval, not the power at time $t$.`, r`$Ft/m$ is the speed, not the power.`, r`$F^2t^2/(2m)$ is the kinetic energy gained, not the power.`] }),

  // ---------------- Free response: TBR (12 points) ----------------
  { id: "p3r-f1a", type: "frq", skill: "u3", topic: "3.2", set: "p3r-s13", part: "(a)", prompt: r`On the dot representing the crate, draw and label the forces acting on the crate when it is at $x = 1.0$ m. Draw the arrows with lengths that show how the magnitudes of the forces compare.`,
    rows: [
      { name: "Vertical forces", earns: r`Draws a weight arrow pointing down and a normal force arrow pointing up, both labeled, with equal lengths.` },
      { name: "Horizontal forces", earns: r`Draws the applied force pointing in the $+x$ direction and the friction force pointing in the $-x$ direction, both labeled, with the applied force arrow longer than the friction arrow.` },
      { name: "No extra forces", earns: r`Shows no other forces, such as a "force of motion," and every arrow starts on the crate.` },
    ],
    solution: r`The diagram has four arrows from the crate. The weight $mg$ points down and the normal force $F_N$ points up, with equal lengths. The applied force $F = 12$ N points right and the friction force $f = 4.0$ N points left, with the right arrow three times as long as the left arrow.` },
  { id: "p3r-f1b1", type: "frq", skill: "u3", topic: "3.2", set: "p3r-s13", part: "(b)(i)", prompt: r`Use the graph to determine the work done on the crate by the force $F$ as the crate moves from $x = 0$ to $x = 6.0$ m.`,
    rows: [
      { name: "Setup", earns: r`Uses the area under the graph, with a rectangle for $0$ to $2.0$ m and a triangle for $2.0$ m to $6.0$ m, for example $(12)(2.0) + \tfrac{1}{2}(12)(4.0)$.` },
      { name: "Answer", earns: r`Obtains $48$ J, with units.` },
    ],
    solution: r`The work equals the area under the force graph: $W_F = (12\ \text{N})(2.0\ \text{m}) + \tfrac{1}{2}(12\ \text{N})(4.0\ \text{m}) = 24 + 24 = 48$ J.` },
  { id: "p3r-f1b2", type: "frq", skill: "u3", topic: "3.2", set: "p3r-s13", part: "(b)(ii)", prompt: r`Calculate the speed of the crate at $x = 6.0$ m.`,
    rows: [
      { name: "Principle", earns: r`States or uses the work-energy theorem: the net work equals the change in kinetic energy.` },
      { name: "Net work", earns: r`Finds the net work as the work of $F$ minus the work of friction, for example $48 - (4.0)(6.0) = 24$ J.` },
      { name: "Speed", earns: r`Solves $24 = \tfrac{1}{2}(3.0)v^2$ to obtain $v = 4.0$ m/s, with units.` },
    ],
    solution: r`By the work-energy theorem, $W_{net} = \Delta K$. The net work is $W_F - fd = 48 - (4.0)(6.0) = 24$ J. The crate starts from rest, so $24 = \tfrac{1}{2}(3.0)v^2$ and $v = \sqrt{16} = 4.0$ m/s.` },
  { id: "p3r-f1c", type: "frq", skill: "u3", topic: "3.1", set: "p3r-s13", part: "(c)", prompt: r`On a set of axes, sketch a graph of the kinetic energy of the crate as a function of position from $x = 0$ to $x = 6.0$ m. Label the kinetic energy at $x = 2.0$ m and at $x = 6.0$ m.`,
    rows: [
      { name: "Shape", earns: r`Draws a straight line from the origin up to $x = 2.0$ m, then a curve that keeps rising with decreasing slope to a maximum near $x = 4.7$ m and then falls.` },
      { name: "Values", earns: r`Labels the kinetic energy as $16$ J at $x = 2.0$ m and $24$ J at $x = 6.0$ m.` },
    ],
    solution: r`From $0$ to $2.0$ m the net force is $12 - 4.0 = 8.0$ N, so $K = 8.0x$ rises along a straight line to $16$ J. After $2.0$ m the net force decreases and reaches zero at $x = 2.0 + 8/3 \approx 4.7$ m, so the graph keeps rising with decreasing slope to a maximum of about $27$ J there. Beyond $4.7$ m the net force is negative and the kinetic energy falls to $24$ J at $x = 6.0$ m.` },
  { id: "p3r-f1d", type: "frq", skill: "u3", topic: "3.2", set: "p3r-s13", part: "(d)", prompt: r`The experiment is repeated on a rougher floor, where the friction force is $8.0$ N. The force $F$ is the same. Is the speed of the crate at $x = 6.0$ m greater than, less than, or equal to the speed in part (b)(ii)? Justify your answer.`,
    rows: [
      { name: "Claim", earns: r`States that the speed is less than the speed in part (b)(ii).` },
      { name: "Justification", earns: r`Explains that the work of friction is larger in magnitude, so the net work, and therefore the final kinetic energy, is smaller.` },
    ],
    solution: r`The speed is less. The work done by $F$ is still $48$ J, but friction now removes $(8.0)(6.0) = 48$ J, so the net work is smaller. By the work-energy theorem the final kinetic energy is smaller than before, so the crate is slower at $x = 6.0$ m (in fact it stops there).` },

  // ---------------- Free response: MR (10 points) ----------------
  { id: "p3r-f2a", type: "frq", skill: "u3", topic: "3.4", set: "p3r-s14", part: "(a)", prompt: r`Consider the system of the cart and Earth, with the gravitational potential energy zero at the bottom of the incline. Draw bar charts showing the kinetic energy and the gravitational potential energy of the system when the cart is at the bottom and when it has risen to a height $h$ at the same speed.`,
    rows: [
      { name: "Kinetic energy", earns: r`Draws kinetic energy bars of equal height in the two charts.` },
      { name: "Potential energy", earns: r`Draws no gravitational potential energy bar at the bottom and a positive bar at height $h$.` },
    ],
    solution: r`Both charts have a kinetic energy bar of the same height, because the speed is constant. The chart at the bottom has no gravitational potential energy bar. The chart at height $h$ has a gravitational potential energy bar of height $mgh$.` },
  { id: "p3r-f2b", type: "frq", skill: "u3", topic: "3.5", set: "p3r-s14", part: "(b)", prompt: r`Derive an expression for the power the motor delivers to the cart in terms of $m$, $\theta$, $\mu$, $v$, and fundamental constants.`,
    rows: [
      { name: "Constant speed", earns: r`States that the net force along the incline is zero because the speed is constant, or applies Newton's second law along the incline with zero acceleration.` },
      { name: "Cable force", earns: r`Obtains $T = mg\sin\theta + \mu mg\cos\theta$, using $N = mg\cos\theta$.` },
      { name: "Power", earns: r`Uses $P = Tv$ to obtain $P = mgv(\sin\theta + \mu\cos\theta)$.` },
    ],
    solution: r`The acceleration is zero, so along the incline $T - mg\sin\theta - f = 0$. Perpendicular to the incline $N = mg\cos\theta$, so $f = \mu mg\cos\theta$ and $T = mg\sin\theta + \mu mg\cos\theta$. The force and the velocity are in the same direction, so $P = Tv = mgv(\sin\theta + \mu\cos\theta)$.` },
  { id: "p3r-f2c1", type: "frq", skill: "u3", topic: "3.5", set: "p3r-s14", part: "(c)(i)", prompt: r`The cart has mass $m = 40$ kg, the incline has $\theta = 20^\circ$, $\mu = 0.15$, and $v = 1.5$ m/s. Calculate the power the motor delivers to the cart.`,
    rows: [
      { name: "Substitution", earns: r`Substitutes the given values into the expression from part (b), for example $(40)(9.8)(1.5)(\sin20^\circ + 0.15\cos20^\circ)$.` },
      { name: "Answer", earns: r`Obtains a power of about $2.8 \times 10^{2}$ W (between $283$ W and $284$ W), with units.` },
    ],
    solution: r`$P = mgv(\sin\theta + \mu\cos\theta) = (40)(9.8)(1.5)(0.342 + 0.141) \approx 284$ W.` },
  { id: "p3r-f2c2", type: "frq", skill: "u3", topic: "3.5", set: "p3r-s14", part: "(c)(ii)", prompt: r`The cart travels $18$ m along the incline at this constant speed. Calculate the energy the motor delivers to the cart during this motion.`,
    rows: [
      { name: "Energy", earns: r`Uses $E = Pt$ with $t = 18/1.5 = 12$ s, or $E = TL$ with $T \approx 189$ N, to obtain about $3.4 \times 10^{3}$ J, with units.` },
    ],
    solution: r`The time is $t = L/v = 18/1.5 = 12$ s, so $E = Pt = (284)(12) \approx 3.4 \times 10^{3}$ J.` },
  { id: "p3r-f2d", type: "frq", skill: "u3", topic: "3.5", set: "p3r-s14", part: "(d)", prompt: r`The experiment is repeated on an incline with a larger coefficient of kinetic friction, with the same $m$, $\theta$, and $v$. Does the power the motor delivers increase, decrease, or stay the same? Justify your answer.`,
    rows: [
      { name: "Claim", earns: r`States that the power increases.` },
      { name: "Justification", earns: r`Explains that the friction force is larger, so the cable force $T$ is larger at the same constant speed, and $P = Tv$ increases.` },
    ],
    solution: r`The power increases. The friction force $\mu mg\cos\theta$ is larger, so at constant speed the cable force $T = mg\sin\theta + \mu mg\cos\theta$ is larger. The speed is the same, so $P = Tv$ is larger.` },
];

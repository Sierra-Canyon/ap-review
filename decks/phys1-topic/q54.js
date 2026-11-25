// AP Physics 1 topic quiz 5.4: Rotational inertia.
import { scene } from "../../diagrams.js";
const R = String.raw;
const one = (blocks, title = "") => [{ title, blocks }];
const mc = (n, difficulty, o) => ({ id: `q54-m${n}`, type: "mcq", skill: "u5", topic: "5.4", difficulty, ...o, answer: 0 });
const fr = (id, part, set, o) => ({ id: `q54-${id}`, type: "frq", skill: "u5", topic: "5.4", set, part, ...o });

const hoop = () => scene({ width: 340, height: 250, alt: "A thin hoop of mass 0.50 kilograms and radius 0.20 meters seen from the front. A dot at the center marks the axis, which is perpendicular to the page. A dashed line from the center to the rim is labeled 0.20 meters.", items: [
  { circle: { x: 170, y: 125, r: 80, fill: "dash" } }, { dot: { x: 170, y: 125, r: 4 } }, { label: { x: 170, y: 100, text: "axis" } }, { line: { from: [170, 125], to: [250, 125], dash: true } }, { label: { x: 210, y: 140, text: "0.20 m" } }, { label: { x: 170, y: 225, text: "0.50 kg" } }] });
const rodClay = () => scene({ width: 380, height: 210, alt: "A uniform rod of mass 1.2 kilograms and length 0.60 meters is shown horizontal. A pin at its left end marks the axis of rotation, perpendicular to the page. A small ball of mass 0.30 kilograms is attached to the right end of the rod.", items: [
  { rect: { x: 190, y: 120, w: 260, h: 12 } }, { pivot: { x: 60, y: 120, kind: "pin" } }, { label: { x: 60, y: 92, text: "axis" } }, { circle: { x: 320, y: 120, r: 13 } }, { label: { x: 320, y: 90, text: "0.30 kg" } },
  { label: { x: 190, y: 148, text: "1.2 kg, 0.60 m" } }] });
const sphere = () => scene({ width: 380, height: 250, alt: "A uniform solid sphere of mass M and radius R is shown as a circle. A dashed vertical line touches the sphere at its right edge and is labeled axis. A dashed horizontal line from the center of the sphere to the right edge is labeled R.", items: [
  { circle: { x: 170, y: 125, r: 70 } }, { dot: { x: 170, y: 125, r: 3 } }, { line: { from: [170, 125], to: [240, 125], dash: true } }, { label: { x: 205, y: 139, text: "R" } },
  { line: { from: [240, 30], to: [240, 220], dash: true } }, { label: { x: 262, y: 200, text: "axis", anchor: "start" } }, { label: { x: 170, y: 105, text: "M" } }] });

export const sets = {
  "q54-s5": { name: "A thin hoop", label: "Diagram", intro: R`A thin hoop has a mass of $0.50$ kg and a radius of $0.20$ m. It turns about an axis through its center and perpendicular to its plane, as shown.`, sources: one([{ svg: hoop() }]) },
  "q54-s1": { name: "A rod with a ball on its end", label: "Diagram", intro: R`A uniform rod of mass $1.2$ kg and length $0.60$ m can turn about a fixed axis perpendicular to the page at its left end. A small ball of mass $0.30$ kg is attached to the right end of the rod, as shown. The rotational inertia of a uniform rod about an axis through one end is $\tfrac13 ML^2$.`, sources: one([{ svg: rodClay() }]) },
  "q54-s2": { name: "Four rotating objects", label: "Table", intro: R`Four objects each turn about a fixed axis through their centers. For the hoops and the disk the axis is perpendicular to the plane of the object. The table gives the shape, the mass, and the radius of each object. A hoop has rotational inertia $MR^2$, a solid disk $\tfrac12 MR^2$, and a solid sphere $\tfrac25 MR^2$.`,
    sources: one([{ table: { head: ["Object", "Shape", "Mass (kg)", "Radius (m)"], rows: [["A", "thin hoop", "2.0", "0.30"], ["B", "solid disk", "4.0", "0.50"], ["C", "solid sphere", "5.0", "0.40"], ["D", "thin hoop", "1.0", "0.60"]] } }]) },
  "q54-s3": { name: "A sphere and a tangent axis", label: "Diagram", intro: R`A uniform solid sphere of mass $M$ and radius $R$ has rotational inertia $\tfrac25 MR^2$ about an axis through its center. The sphere is turned about a different axis that is parallel to the first and touches the surface of the sphere, as shown.`, sources: one([{ svg: sphere() }]) },
  "q54-s4": { name: "Two balls on a light rod", label: "Free response", intro: R`A light rod of length $0.80$ m has a ball of mass $0.50$ kg attached at one end and a ball of mass $0.30$ kg attached at the other end. The mass of the rod and the sizes of the balls can be ignored. The rod can turn in a horizontal plane about a vertical axis A through the center of the rod.`,
    sources: one([{ p: R`Axis B is a second vertical axis, through the end of the rod where the $0.50$ kg ball is attached.` }]) },
};

const items = [
  mc(1, "easy", { set: "q54-s5", question: "What is the rotational inertia of the hoop about this axis?",
    choices: [R`$0.020$ kg·m²`, R`$0.010$ kg·m²`, R`$0.10$ kg·m²`, R`$0.0080$ kg·m²`],
    why: [R`For a thin hoop, $I = MR^2 = (0.50)(0.20)^2 = 0.020$ kg·m².`, R`This uses $\tfrac12 MR^2$, the formula for a solid disk.`, R`This does not square the radius: $MR = (0.50)(0.20)$.`, R`This uses $\tfrac25 MR^2$, the formula for a solid sphere.`] }),
  mc(2, "easy", { stem: R`Disk P and disk Q have the same mass and are both thin and uniform. The radius of disk Q is twice the radius of disk P. Each disk turns about an axis through its center and perpendicular to its face.`, question: R`How does the rotational inertia of disk Q compare with that of disk P?`,
    choices: [R`Four times as great, because $I$ is proportional to $R^2$`, R`Twice as great, because $I$ is proportional to the radius $R$`, R`The same, because the two disks have the same mass and shape`, R`One fourth as great, because $I$ is proportional to $1/R^2$`],
    why: [R`For a solid disk, $I = \tfrac12 MR^2$. With $M$ equal and $R$ doubled, $I$ is multiplied by $2^2 = 4$.`, R`This treats $I$ as proportional to $R$, with the radius not squared.`, R`This assumes that equal mass gives equal rotational inertia. The distance of the mass from the axis matters too.`, R`This inverts the ratio: more distant mass increases $I$, it does not decrease it.`] }),
  mc(3, "moderate", { set: "q54-s1", question: "What is the rotational inertia of the rod and ball about the axis?",
    choices: [R`$0.252$ kg·m²`, R`$0.144$ kg·m²`, R`$0.540$ kg·m²`, R`$0.171$ kg·m²`],
    why: [R`The inertias add for parts on the same axis. Rod: $\tfrac13(1.2)(0.60)^2 = 0.144$ kg·m². Ball: $mL^2 = (0.30)(0.60)^2 = 0.108$ kg·m². The total is $0.252$ kg·m².`, R`This is the rod alone, with the ball left out.`, R`This treats the rod as a point mass at its end, $ML^2 = 0.432$, and then adds the ball.`, R`This puts the ball at the middle of the rod, $0.30$ m from the axis, instead of at the end.`] }),
  mc(4, "moderate", { stem: R`A solid sanding disk has a mass of $300$ g and a diameter of $12$ cm. It turns about an axis through its center and perpendicular to its face. A solid disk has rotational inertia $\tfrac12 MR^2$.`, question: "What is the rotational inertia of the disk about this axis?",
    choices: [R`$5.4 \times 10^{-4}$ kg·m²`, R`$2.2 \times 10^{-3}$ kg·m²`, R`$1.1 \times 10^{-3}$ kg·m²`, R`$9.0 \times 10^{-3}$ kg·m²`],
    why: [R`$M = 0.300$ kg and $R = 0.060$ m, so $I = \tfrac12(0.300)(0.060)^2 = 5.4 \times 10^{-4}$ kg·m².`, R`This uses the diameter, $0.12$ m, as the radius.`, R`This uses $MR^2$, the formula for a hoop.`, R`This does not square the radius: $\tfrac12 MR$.`] }),
  mc(5, "moderate", { set: "q54-s2", question: "Rank the objects from greatest to least rotational inertia about their axes.",
    choices: ["B, D, C, A", "C, B, A, D", "D, B, C, A", "B, C, D, A"],
    why: [R`$I_A = (2.0)(0.30)^2 = 0.18$, $I_B = \tfrac12(4.0)(0.50)^2 = 0.50$, $I_C = \tfrac25(5.0)(0.40)^2 = 0.32$, $I_D = (1.0)(0.60)^2 = 0.36$, all in kg·m². The order is B, D, C, A.`, R`This ranks by mass alone.`, R`This ranks by radius alone.`, R`This uses $MR^2$ for every shape, which gives $B = 1.0$, $C = 0.80$, $D = 0.36$, $A = 0.18$.`] }),
  mc(6, "difficult", { set: "q54-s3", question: "What is the rotational inertia of the sphere about the axis shown?",
    choices: [R`$\tfrac75 MR^2$`, R`$\tfrac25 MR^2$`, R`$MR^2$`, R`$\tfrac{22}{5} MR^2$`],
    why: [R`The axis is parallel to one through the center and a distance $R$ away. By the parallel-axis theorem, $I = I_{cm} + Md^2 = \tfrac25 MR^2 + MR^2 = \tfrac75 MR^2$.`, R`This is the inertia about the center. It does not account for the axis being moved to the surface.`, R`This adds only the $Md^2$ term and leaves out the inertia about the center.`, R`This uses the diameter, $d = 2R$, as the distance between the axes: $\tfrac25 MR^2 + M(2R)^2$.`] }),
  fr("f1a", "(a)", "q54-s4", { prompt: R`Calculate the rotational inertia of the two balls about axis A.`,
    rows: [{ name: "Setup", earns: R`Uses $I = \sum mr^2$ with each ball $0.40$ m from axis A.` },
      { name: "Value", earns: R`Obtains $I_A = (0.50 + 0.30)(0.40)^2 = 0.128$ kg·m², with units.` }],
    solution: R`$I_A = m_1 r^2 + m_2 r^2 = (0.50)(0.40)^2 + (0.30)(0.40)^2 = 0.080 + 0.048 = 0.128$ kg·m².` }),
  fr("f1b", "(b)", "q54-s4", { prompt: R`Is the rotational inertia of the balls about axis B greater than, less than, or equal to the rotational inertia about axis A? Justify your answer with a calculation.`,
    rows: [{ name: "Claim", earns: R`States that the rotational inertia about axis B is greater than about axis A.` },
      { name: "Calculation", earns: R`Shows that $I_B = (0.30)(0.80)^2 = 0.192$ kg·m², because the $0.50$ kg ball is on the axis and the $0.30$ kg ball is $0.80$ m away, and compares it with $0.128$ kg·m².` }],
    solution: R`Greater. About axis B the $0.50$ kg ball is at $r = 0$ and the $0.30$ kg ball is $0.80$ m away, so $I_B = (0.30)(0.80)^2 = 0.192$ kg·m², which is larger than $0.128$ kg·m².` }),
];
export default { forms: [{ id: "q54", name: "Topic 5.4 Quiz: Rotational Inertia", group: "Unit 5: Torque and Rotational Dynamics", items }] };

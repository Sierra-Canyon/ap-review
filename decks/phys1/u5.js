// AP Physics 1 review, Unit 5: Torque and Rotational Dynamics (5.1 to 5.6). 49 multiple choice, one MR and one QQT free-response question.
import { graph } from "../../plot.js";
import { scene } from "../../diagrams.js";

const r = String.raw;
const pics = (word, svgs, title = "") => svgs.map((s, i) => ({ title: `${title}${title ? ", " : ""}${word} ${"ABCD"[i]}`, blocks: [{ svg: s }] }));
const one = (blocks, title = "") => [{ title, blocks }];
const rad = (d) => (d * Math.PI) / 180;

// ---- 5.1 graphs ----
const fanGraph = graph({ width: 415, x: [0, 7], y: [0, 20], step: { x: 1, y: 4 }, xname: "t (s)", yname: "ω (rad/s)", segments: [[0, 4, 6, 16]],
  alt: "Angular velocity versus time for a fan. A straight line rises from 4 radians per second at 0 seconds to 16 radians per second at 6 seconds." });
const tc = { width: 415, x: [0, 8], y: [0, 10], step: { x: 1, y: 2 }, xname: "t (s)", yname: "θ (rad)" };
const thetaPics = [
  graph({ ...tc, segments: [[0, 0, 4, 8], [4, 8, 8, 8]], alt: "Angular position versus time. A straight line rises from 0 radians at 0 seconds to 8 radians at 4 seconds, then the graph is flat at 8 radians until 8 seconds." }),
  graph({ ...tc, fns: [{ f: (t) => 0.125 * t * t, from: 0, to: 8 }], alt: "Angular position versus time. A curve that starts flat at 0 radians and gets steeper, rising to 8 radians at 8 seconds." }),
  graph({ ...tc, fns: [{ f: (t) => 4 * t - 0.5 * t * t, from: 0, to: 4 }], segments: [[4, 8, 8, 8]], alt: "Angular position versus time. A curve rises from 0 radians at 0 seconds, getting less steep, and becomes flat at 8 radians at 4 seconds. The graph stays flat at 8 radians until 8 seconds." }),
  graph({ ...tc, fns: [{ f: (t) => 4 * t - 0.5 * t * t, from: 0, to: 8 }], alt: "Angular position versus time. A curve rises from 0 radians at 0 seconds to a maximum of 8 radians at 4 seconds, then falls back to 0 radians at 8 seconds." }),
];

// ---- 5.2 diagrams ----
// bicycle chain drive: two circles joined by the outer tangent lines of the chain
const chainDrive = (() => {
  const c1 = [120, 115], c2 = [300, 115], r1 = 50, r2 = 20, d = c2[0] - c1[0], s = (r1 - r2) / d, co = Math.sqrt(1 - s * s);
  const items = [{ circle: { x: c1[0], y: c1[1], r: r1 } }, { circle: { x: c2[0], y: c2[1], r: r2 } }, { dot: { x: c1[0], y: c1[1] } }, { dot: { x: c2[0], y: c2[1] } }];
  for (const k of [1, -1]) items.push({ line: { from: [c1[0] + r1 * s, c1[1] + k * r1 * co], to: [c2[0] + r2 * s, c2[1] + k * r2 * co] } });
  items.push({ line: { from: c1, to: [c1[0] - r1, c1[1]], dash: true } }, { label: { x: c1[0] - 25, y: c1[1] - 10, text: "10 cm" } },
    { line: { from: c2, to: [c2[0] + r2, c2[1]], dash: true } }, { label: { x: c2[0] + 8, y: c2[1] - 32, text: "4.0 cm" } },
    { label: { x: c1[0], y: 40, text: "Front sprocket" } }, { label: { x: c2[0], y: 65, text: "Rear sprocket" } });
  return scene({ width: 400, height: 190, alt: "A bicycle chain drive. A front sprocket of radius 10 centimeters and a smaller rear sprocket of radius 4.0 centimeters are joined by a chain that runs around both.", items });
})();
const vtRim = graph({ width: 415, x: [0, 4], y: [0, 8], step: { x: 1, y: 2 }, xname: "t (s)", yname: "v (m/s)", segments: [[0, 0, 3, 6]],
  alt: "Speed of a rim point versus time. A straight line rises from 0 meters per second at 0 seconds to 6 meters per second at 3 seconds." });

// ---- 5.3 diagrams ----
const rodPic = (kind, alt) => {
  const items = [{ pivot: { x: 40, y: 50, kind: "pin" } }, { rect: { x: 105, y: 50, w: 130, h: 10 } }, { label: { x: 40, y: 28, text: "P" } }];
  const f = { end: [[170, 50], [170, 105]], along: [[170, 50], [225, 50]], angled: [[170, 50], [208, 88]], mid: [[105, 50], [105, 105]] }[kind];
  items.push({ arrow: { from: f[0], to: f[1], label: "F" } });
  return scene({ width: 250, height: 130, alt, items });
};
const zeroPics = [
  rodPic("end", "A rod pivoted at its left end, with a force F at its right end perpendicular to the rod, pointing up."),
  rodPic("along", "A rod pivoted at its left end, with a force F at its right end pointing along the rod, away from the pivot."),
  rodPic("angled", "A rod pivoted at its left end, with a force F at its right end pointing up and to the right at 45 degrees to the rod."),
  rodPic("mid", "A rod pivoted at its left end, with a force F at the middle of the rod perpendicular to the rod, pointing up."),
];
const gate = scene({ width: 420, height: 190, alt: "Top view of a gate hinged at its left edge. The gate is 1.2 meters wide. A 40 newton force acts on the free edge, pointing away from the gate at 30 degrees above the line of the gate.", items: [
  { rect: { x: 180, y: 70, w: 240, h: 10 } }, { pivot: { x: 60, y: 70, kind: "pin" } },
  { arrow: { from: [300, 70], to: [370, 110], label: "40 N", dx: -8, dy: 10 } }, { arc: { x: 300, y: 70, r: 44, from: 0, to: 30, label: "30°" } },
  { line: { from: [60, 40], to: [300, 40] } }, { line: { from: [60, 35], to: [60, 45] } }, { line: { from: [300, 35], to: [300, 45] } }, { label: { x: 180, y: 25, text: "1.2 m" } },
] });
const pulley2 = scene({ width: 360, height: 240, alt: "A compound pulley made of a large disk and a small disk on one axle. A rope on the rim of the large disk, on the right, pulls straight down with 20 newtons. A rope on the rim of the small disk, on the left, pulls straight down with 50 newtons.", items: [
  { circle: { x: 180, y: 150, r: 60 } }, { circle: { x: 180, y: 150, r: 20 } }, { dot: { x: 180, y: 150 } },
  { arrow: { from: [240, 150], to: [240, 100], label: "20 N", dx: 10 } }, { arrow: { from: [160, 150], to: [160, 60], label: "50 N", dx: -10 } },
] });
const flagpole = scene({ width: 360, height: 210, alt: "A uniform horizontal pole of mass 3.0 kilograms and length 2.0 meters is attached by a hinge to a wall at its left end. A 1.0 kilogram flag hangs from its right end.", items: [
  { ground: { from: [50, 190], to: [50, 20] } }, { rect: { x: 170, y: 140, w: 240, h: 10, label: "" } }, { pivot: { x: 50, y: 140, kind: "pin" } },
  { label: { x: 170, y: 160, text: "pole, 3.0 kg" } }, { line: { from: [290, 135], to: [290, 90] } }, { rect: { x: 290, y: 68, w: 50, h: 40, label: "1.0 kg" } },
  { line: { from: [50, 185], to: [290, 185] } }, { line: { from: [50, 180], to: [50, 190] } }, { line: { from: [290, 180], to: [290, 190] } }, { label: { x: 170, y: 198, text: "2.0 m" } },
] });
const crank = (() => {
  const ax = [100, 175], L = 150, a = rad(-30), pd = [ax[0] + L * Math.cos(a), ax[1] + L * Math.sin(a)];
  return scene({ width: 360, height: 250, alt: "A bicycle crank arm 0.17 meters long, pointing down and to the right at 30 degrees below the horizontal. A 400 newton force pushes straight down on the pedal at its end.", items: [
    { rect: { x: (ax[0] + pd[0]) / 2, y: (ax[1] + pd[1]) / 2, w: L, h: 9, rot: -30 } }, { pivot: { x: ax[0], y: ax[1], kind: "pin" } },
    { line: { from: ax, to: [ax[0] + 175, ax[1]], dash: true } }, { arc: { x: ax[0], y: ax[1], r: 60, from: -30, to: 0, label: "30°" } },
    { arrow: { from: pd, to: [pd[0], pd[1] - 62], label: "400 N", dx: 28 } },
  ] });
})();
const hangRod = (() => {
  const p = [110, 215], L = 190, a = rad(-50), tip = [p[0] + L * Math.cos(a), p[1] + L * Math.sin(a)], cm = [(p[0] + tip[0]) / 2, (p[1] + tip[1]) / 2];
  return scene({ width: 320, height: 250, alt: "A uniform rod of length 1.2 meters and mass 2.0 kilograms hangs from a pivot at its upper end, held at an angle of 40 degrees from the vertical. A downward arrow at the middle of the rod shows its weight.", items: [
    { ground: { from: [200, 232], to: [40, 232] } }, { rect: { x: cm[0], y: cm[1], w: L, h: 8, rot: -50 } }, { pivot: { x: p[0], y: p[1], kind: "pin" } },
    { line: { from: p, to: [p[0], 50], dash: true } }, { arc: { x: p[0], y: p[1], r: 55, from: -90, to: -50, label: "40°" } },
    { dot: { x: cm[0], y: cm[1] } }, { arrow: { from: cm, to: [cm[0], cm[1] - 55], label: "mg", dx: 14 } },
  ] });
})();
const forearm = scene({ width: 430, height: 215, alt: "A horizontal forearm pivots at the elbow on the left. The biceps pulls up with 300 newtons at a point 4.0 centimeters from the elbow. An object of weight 40 newtons hangs from the hand, 35 centimeters from the elbow.", items: [
  { rect: { x: 195, y: 110, w: 270, h: 16 } }, { pivot: { x: 60, y: 110, kind: "pin" } },
  { arrow: { from: [91, 118], to: [91, 185], label: "300 N", dx: 24 } }, { arrow: { from: [320, 102], to: [320, 45], label: "40 N", dx: 24 } },
  { line: { from: [60, 82], to: [91, 82] } }, { label: { x: 76, y: 66, text: "4.0 cm" } },
  { line: { from: [60, 28], to: [320, 28] } }, { line: { from: [60, 23], to: [60, 33] } }, { line: { from: [320, 23], to: [320, 33] } }, { label: { x: 190, y: 14, text: "35 cm" } },
] });
const tbl = (head, rows) => ({ table: { head, rows } });

// ---- 5.4 diagrams ----
const dumbbell = scene({ width: 430, height: 160, alt: "Two small spheres of mass m are attached to the ends of a light rod of length L. Axis P is perpendicular to the page at the center of the rod. Axis Q is perpendicular to the page at the left end of the rod.", items: [
  { rect: { x: 215, y: 90, w: 300, h: 6 } }, { circle: { x: 65, y: 90, r: 14, label: "m" } }, { circle: { x: 365, y: 90, r: 14, label: "m" } },
  { line: { from: [215, 112], to: [215, 68], dash: true } }, { label: { x: 215, y: 56, text: "P" } }, { line: { from: [65, 112], to: [65, 68], dash: true } }, { label: { x: 65, y: 56, text: "Q" } },
  { line: { from: [65, 135], to: [365, 135] } }, { line: { from: [65, 130], to: [65, 140] } }, { line: { from: [365, 130], to: [365, 140] } }, { label: { x: 215, y: 148, text: "L" } },
] });
const beads = scene({ width: 430, height: 170, alt: "A light rod rotates about a vertical axis through its left end. Three beads are fixed to it: 100 grams at 10 centimeters from the axis, 200 grams at 20 centimeters, and 300 grams at 30 centimeters.", items: [
  { rect: { x: 190, y: 100, w: 280, h: 6 } }, { pivot: { x: 50, y: 100, kind: "pin" } }, { label: { x: 50, y: 75, text: "axis" } },
  { circle: { x: 130, y: 100, r: 10 } }, { circle: { x: 210, y: 100, r: 13 } }, { circle: { x: 290, y: 100, r: 16 } },
  { label: { x: 130, y: 128, text: "100 g" } }, { label: { x: 210, y: 130, text: "200 g" } }, { label: { x: 290, y: 133, text: "300 g" } },
  { line: { from: [50, 60], to: [290, 60] } }, { line: { from: [50, 55], to: [50, 65] } }, { line: { from: [130, 55], to: [130, 65] } }, { line: { from: [210, 55], to: [210, 65] } }, { line: { from: [290, 55], to: [290, 65] } },
  { label: { x: 130, y: 44, text: "10 cm" } }, { label: { x: 210, y: 44, text: "20 cm" } }, { label: { x: 290, y: 44, text: "30 cm" } },
] });
const iVsR2 = graph({ width: 415, x: [0, 0.3], y: [0, 0.12], step: { x: 0.05, y: 0.02 }, xname: "r² (m²)", yname: "I (kg·m²)", segments: [[0, 0, 0.3, 0.12]],
  dots: [[0.05, 0.021, "closed"], [0.10, 0.039, "closed"], [0.15, 0.061, "closed"], [0.20, 0.079, "closed"], [0.25, 0.101, "closed"], [0.30, 0.119, "closed"]],
  alt: "Rotational inertia I in kilogram meters squared versus r squared in square meters. Six data points lie close to a straight best-fit line through the origin that reaches 0.12 at r squared equal to 0.30." });

// ---- 5.5 diagrams ----
const mobile = scene({ width: 420, height: 235, alt: "A light horizontal rod hangs from a string. A 0.30 kilogram mass hangs from the rod 0.40 meters to the left of the string, and a mass m hangs 0.15 meters to the right of the string.", items: [
  { ground: { from: [300, 215], to: [160, 215] } }, { rect: { x: 180, y: 140, w: 220, h: 8 } }, { line: { from: [230, 144], to: [230, 215] } },
  { line: { from: [70, 136], to: [70, 98] } }, { rect: { x: 70, y: 76, w: 56, h: 42, label: "0.30 kg" } },
  { line: { from: [290, 136], to: [290, 98] } }, { rect: { x: 290, y: 76, w: 44, h: 42, label: "m" } },
  { line: { from: [70, 168], to: [230, 168] } }, { line: { from: [70, 163], to: [70, 173] } }, { line: { from: [230, 163], to: [230, 173] } }, { label: { x: 150, y: 181, text: "0.40 m" } },
  { line: { from: [230, 168], to: [290, 168] } }, { line: { from: [290, 163], to: [290, 173] } }, { label: { x: 260, y: 181, text: "0.15 m" } },
] });
// four bars with three vertical forces each (2 px per newton): [x as a fraction of the bar, newtons, direction]
const barPic = (forces, alt) => {
  const bx = (f) => 20 + 240 * f, items = [{ rect: { x: 140, y: 100, w: 240, h: 8 } }];
  for (const [f, n, dir] of forces) {
    if (dir === "down") items.push({ arrow: { from: [bx(f), 108 + n * 1.6], to: [bx(f), 108], label: n + " N", at: "tail" } });
    else items.push({ arrow: { from: [bx(f), 96 - n * 1.6], to: [bx(f), 96], label: n + " N", at: "tail" } });
  }
  return scene({ width: 280, height: 190, alt, items });
};
const barPics = [
  barPic([[0.1, 30, "down"], [0.7, 15, "down"], [0.4, 45, "up"]], "A bar with a 30 newton downward force at 0.10 of its length, a 15 newton downward force at 0.70, and a 45 newton upward force at 0.40."),
  barPic([[0.1, 30, "down"], [1.0, 15, "down"], [0.4, 30, "up"]], "A bar with a 30 newton downward force at 0.10 of its length, a 15 newton downward force at 1.0, and a 30 newton upward force at 0.40."),
  barPic([[0.1, 30, "down"], [1.0, 15, "down"], [0.4, 45, "up"]], "A bar with a 30 newton downward force at 0.10 of its length, a 15 newton downward force at 1.0, and a 45 newton upward force at 0.40."),
  barPic([[0.1, 30, "down"], [1.0, 20, "down"], [0.4, 40, "up"]], "A bar with a 30 newton downward force at 0.10 of its length, a 20 newton downward force at 1.0, and a 40 newton upward force at 0.40."),
];
const hingedBeam = scene({ width: 450, height: 230, alt: "A uniform horizontal beam 4.0 meters long and of mass 20 kilograms is attached to a wall by a hinge at its left end. A vertical cable holds up its right end. A 30 kilogram block hangs from the beam 3.0 meters from the wall.", items: [
  { ground: { from: [40, 190], to: [40, 40] } }, { rect: { x: 220, y: 120, w: 360, h: 12 } }, { pivot: { x: 40, y: 120, kind: "pin" } },
  { label: { x: 150, y: 142, text: "beam, 20 kg" } }, { line: { from: [400, 126], to: [400, 200] } }, { ground: { from: [440, 200], to: [350, 200] } },
  { line: { from: [310, 114], to: [310, 78] } }, { rect: { x: 310, y: 56, w: 56, h: 42, label: "30 kg" } },
  { line: { from: [40, 30], to: [400, 30] } }, { line: { from: [40, 25], to: [40, 35] } }, { line: { from: [400, 25], to: [400, 35] } }, { label: { x: 220, y: 16, text: "4.0 m" } },
] });
const wheelbarrow = scene({ width: 450, height: 265, alt: "A wheelbarrow. The wheel axle is on the ground at the left. The 450 newton weight of the load acts 0.50 meters from the axle, and a person lifts straight up on the handle 1.50 meters from the axle.", items: [
  { ground: { from: [20, 30], to: [430, 30] } }, { circle: { x: 100, y: 65, r: 35 } }, { dot: { x: 100, y: 65 } },
  { rect: { x: 255, y: 112, w: 310, h: 8 } }, { arrow: { from: [200, 175], to: [200, 118], label: "450 N", at: "tail" } }, { arrow: { from: [400, 60], to: [400, 106], label: "F", at: "tail" } },
  { line: { from: [100, 205], to: [200, 205] } }, { line: { from: [100, 200], to: [100, 210] } }, { line: { from: [200, 200], to: [200, 210] } }, { label: { x: 150, y: 219, text: "0.50 m" } },
  { line: { from: [100, 238], to: [400, 238] } }, { line: { from: [100, 233], to: [100, 243] } }, { line: { from: [400, 233], to: [400, 243] } }, { label: { x: 250, y: 252, text: "1.50 m" } },
] });
const doorPic = scene({ width: 300, height: 290, alt: "A door seen from the front, 2.0 meters tall and 0.80 meters wide, with hinges at the top and bottom of its left edge. A downward arrow at the center of the door shows its 200 newton weight.", items: [
  { rect: { x: 150, y: 140, w: 96, h: 240 } }, { dot: { x: 102, y: 255, r: 4 } }, { dot: { x: 102, y: 25, r: 4 } },
  { label: { x: 60, y: 255, text: "top hinge" } }, { label: { x: 52, y: 25, text: "bottom hinge" } },
  { dot: { x: 150, y: 140 } }, { arrow: { from: [150, 140], to: [150, 70], label: "200 N", dx: 28 } },
] });
const rodString = scene({ width: 450, height: 235, alt: "A uniform horizontal rod of mass M and length L is attached to a wall by a hinge at its left end. A vertical string is attached to the rod at a distance L over 4 from its right end and holds it up. A block of mass m hangs from the right end.", items: [
  { ground: { from: [40, 190], to: [40, 40] } }, { rect: { x: 220, y: 120, w: 360, h: 10 } }, { pivot: { x: 40, y: 120, kind: "pin" } },
  { label: { x: 150, y: 140, text: "M" } }, { line: { from: [310, 125], to: [310, 200] } }, { ground: { from: [350, 200], to: [270, 200] } },
  { line: { from: [400, 115], to: [400, 80] } }, { rect: { x: 400, y: 58, w: 44, h: 38, label: "m" } },
  { line: { from: [40, 30], to: [400, 30] } }, { line: { from: [40, 25], to: [40, 35] } }, { line: { from: [400, 25], to: [400, 35] } }, { label: { x: 220, y: 16, text: "L" } },
  { line: { from: [310, 160], to: [400, 160] } }, { line: { from: [310, 155], to: [310, 165] } }, { line: { from: [400, 155], to: [400, 165] } }, { label: { x: 355, y: 172, text: "L/4" } },
] });
const leanPole = (() => {
  const b = [170, 30], L = 210, t = rad(25), top = [b[0] + L * Math.sin(t), b[1] + L * Math.cos(t)];
  return scene({ width: 370, height: 270, alt: "A uniform pole of mass M and length L is hinged at its base on the ground and leans to the right at an angle theta from the vertical. A horizontal cable runs from the top of the pole to a wall on the left.", items: [
    { ground: { from: [20, 30], to: [350, 30] } }, { ground: { from: [40, 250], to: [40, 30] } },
    { rect: { x: (b[0] + top[0]) / 2, y: (b[1] + top[1]) / 2, w: L, h: 8, rot: 65 } }, { pivot: { x: b[0], y: b[1], kind: "pin" } },
    { line: { from: top, to: [40, top[1]] } }, { line: { from: b, to: [b[0], 250], dash: true } }, { arc: { x: b[0], y: b[1], r: 70, from: 65, to: 90, label: "θ" } },
    { label: { x: (b[0] + top[0]) / 2 + 20, y: (b[1] + top[1]) / 2 - 10, text: "M" } },
  ] });
})();

// ---- 5.6 diagrams ----
const massivePulley = scene({ width: 450, height: 240, alt: "A block of mass m1 rests on a table and is joined by a string over a pulley at the table edge to a hanging block of mass m2. The pulley is a disk of mass M.", items: [
  { ground: { from: [30, 150], to: [300, 150] } }, { rect: { x: 130, y: 175, w: 64, h: 50, label: "m_1" } },
  { circle: { x: 320, y: 153, r: 22, label: "M" } }, { rope: { points: [[162, 175], [320, 175]] } }, { rope: { points: [[342, 153], [342, 100]] } }, { rect: { x: 342, y: 76, w: 50, h: 42, label: "m_2" } },
] });
const torqueTime = graph({ width: 415, x: [0, 9], y: [-6, 8], step: { x: 1, y: 2 }, xname: "t (s)", yname: "τ (N·m)", segments: [[0, 6, 3, 6], [3, 6, 3, 0], [3, 0, 5, 0], [5, 0, 5, -4], [5, -4, 8, -4]],
  alt: "Net torque versus time. The torque is 6.0 newton meters from 0 to 3 seconds, 0 from 3 to 5 seconds, and negative 4.0 newton meters from 5 to 8 seconds." });

// ---- free-response diagrams ----
const mrRod = scene({ width: 430, height: 190, alt: "Top view of a light rod of length L that can turn about a vertical axle at its left end on a frictionless horizontal table. A sphere of mass 2m is attached at the middle of the rod and a sphere of mass m at the right end. A force F perpendicular to the rod acts at the right end.", items: [
  { rect: { x: 215, y: 80, w: 300, h: 5 } }, { pivot: { x: 65, y: 80, kind: "pin" } }, { label: { x: 65, y: 55, text: "axle" } },
  { circle: { x: 215, y: 80, r: 14, label: "2m" } }, { circle: { x: 365, y: 80, r: 11, label: "m" } },
  { arrow: { from: [365, 91], to: [365, 150], label: "F", dx: 12 } },
  { line: { from: [65, 40], to: [365, 40] } }, { line: { from: [65, 35], to: [65, 45] } }, { line: { from: [365, 35], to: [365, 45] } }, { label: { x: 215, y: 26, text: "L" } },
] });
const qqtBoom = (() => {
  const h = [60, 90], e = [380, 90], w = [60, 190];
  return scene({ width: 450, height: 240, alt: "A uniform horizontal boom of mass M and length L is attached to a wall by a hinge at its left end. A cable runs from the right end of the boom up to the wall, making an angle theta with the boom.", items: [
    { ground: { from: [60, 220], to: [60, 20] } }, { rect: { x: 220, y: 90, w: 320, h: 12 } }, { pivot: { x: 60, y: 90, kind: "pin" } }, { label: { x: 160, y: 70, text: "boom, M" } },
    { line: { from: e, to: [60, 219] } }, { arc: { x: 380, y: 90, r: 55, from: 160, to: 180, label: "θ" } },
    { line: { from: [60, 28], to: [380, 28] } }, { line: { from: [60, 23], to: [60, 33] } }, { line: { from: [380, 23], to: [380, 33] } }, { label: { x: 220, y: 14, text: "L" } },
  ] });
})();

// ---- sets ----
export const sets = {
  "p5r-s01": { name: "A ceiling fan speeding up", label: "Graph", intro: r`A ceiling fan is switched to a higher setting while its blades are already turning. The graph shows the angular velocity $\omega$ of the fan as a function of time $t$. The fan speeds up at a constant rate.`, sources: one([{ svg: fanGraph }]) },
  "p5r-s02": { name: "A turntable slowing down", label: "Graphs", intro: r`A turntable is spinning at $4.0$ rad/s when its motor is switched off. Friction in its bearing gives it a constant angular acceleration of $-1.0$ rad/s² while it is turning, and the bearing exerts no torque once the turntable has stopped. Four graphs of the angular position $\theta$ of a mark on the turntable as a function of time $t$ are shown.`, sources: pics("Graph", thetaPics) },
  "p5r-s03": { name: "Four wheels with constant angular acceleration", label: "Table", intro: r`Four wheels each have a constant angular acceleration. The table gives each wheel's angular velocity at the start and at the end of a time interval, with counterclockwise positive.`,
    sources: one([tbl(["Wheel", "$\\omega$ at start (rad/s)", "$\\omega$ at end (rad/s)", "Time interval (s)"], [["A", "$0$", "$+20$", "$4.0$"], ["B", "$+10$", "$+30$", "$5.0$"], ["C", "$+20$", "$+40$", "$8.0$"], ["D", "$+40$", "$+10$", "$5.0$"]])]) },
  "p5r-s04": { name: "A bicycle chain drive", label: "Diagram", intro: r`On a bicycle, a chain connects a front sprocket of radius $10$ cm to a rear sprocket of radius $4.0$ cm, as shown. The chain does not slip or stretch.`, sources: one([{ svg: chainDrive }]) },
  "p5r-s05": { name: "Speed of a point on a wheel", label: "Graph", intro: r`A point on the rim of a wheel of radius $0.25$ m has a speed $v$ that increases at a constant rate, as shown in the graph. The wheel turns about a fixed axle.`, sources: one([{ svg: vtRim }]) },
  "p5r-s06": { name: "Four wheels turning steadily", label: "Table", intro: r`Four different wheels each turn at a constant rate. The table gives the radius of each wheel and the speed of a point on its rim.`,
    sources: one([tbl(["Wheel", "Radius (m)", "Speed of a rim point (m/s)"], [["A", "$0.10$", "$2.0$"], ["B", "$0.40$", "$2.4$"], ["C", "$0.050$", "$0.90$"], ["D", "$0.20$", "$1.0$"]])]) },
  "p5r-s07": { name: "Four rods and four forces", label: "Diagrams", intro: r`Four identical rods can each turn about a pivot $P$ at the left end. A force of the same magnitude $F$ is applied to each rod, as shown.`, sources: pics("Rod", zeroPics) },
  "p5r-s08": { name: "A gate pulled open", label: "Diagram", intro: r`A gate is hinged along one edge and is shown from above. A person pulls on the free edge with a force of magnitude $40$ N directed $30^\circ$ from the line of the gate, as shown.`, sources: one([{ svg: gate }]) },
  "p5r-s09": { name: "A compound pulley", label: "Diagram", intro: r`A compound pulley is made of two disks fixed together on one axle. The large disk has radius $0.30$ m and the small disk has radius $0.10$ m. Ropes wound on the rims pull straight down at the points where they leave the pulley, with the forces shown.`, sources: one([{ svg: pulley2 }]) },
  "p5r-s10": { name: "Four forces on four rods", label: "Table", intro: r`A force acts on each of four rods that are free to turn about a pivot at one end. The table gives the magnitude of each force, the distance from the pivot to the point where the force is applied, and the angle between the force and the rod.`,
    sources: one([tbl(["Rod", "Force (N)", "Distance from pivot (m)", "Angle between force and rod"], [["A", "$10$", "$0.50$", "$90^\\circ$"], ["B", "$20$", "$0.30$", "$30^\\circ$"], ["C", "$15$", "$0.60$", "$90^\\circ$"], ["D", "$25$", "$0.40$", "$45^\\circ$"]])]) },
  "p5r-s11": { name: "A flagpole", label: "Diagram", intro: r`A uniform pole of mass $3.0$ kg and length $2.0$ m is attached to a wall by a hinge at its left end and is held horizontal. A flag of mass $1.0$ kg hangs from the right end of the pole.`, sources: one([{ svg: flagpole }]) },
  "p5r-s12": { name: "A bicycle pedal", label: "Diagram", intro: r`A cyclist pushes straight down on a pedal with a force of $400$ N. The crank arm is $0.17$ m long and makes an angle of $30^\circ$ below the horizontal, as shown.`, sources: one([{ svg: crank }]) },
  "p5r-s13": { name: "A rod hanging at an angle", label: "Diagram", intro: r`A uniform rod of length $1.2$ m and mass $2.0$ kg can swing about a pivot at its upper end. It is held at rest at an angle of $40^\circ$ from the vertical, as shown.`, sources: one([{ svg: hangRod }]) },
  "p5r-s14": { name: "A forearm holding an object", label: "Diagram", intro: r`A person holds an object of weight $40$ N in the hand with the forearm horizontal. The biceps exerts a force of $300$ N perpendicular to the forearm at a point $4.0$ cm from the elbow, and the weight of the object acts $35$ cm from the elbow. Ignore the weight of the forearm.`, sources: one([{ svg: forearm }]) },
  "p5r-s15": { name: "Two spheres on a light rod", label: "Diagram", intro: r`Two small spheres, each of mass $m$, are attached to the ends of a light rod of length $L$. Axis P passes through the center of the rod and axis Q passes through the left end. Both axes are perpendicular to the rod.`, sources: one([{ svg: dumbbell }]) },
  "p5r-s16": { name: "Three beads on a rod", label: "Diagram", intro: r`Three small beads are fixed to a light rod that turns about a vertical axis through its left end, as shown. The distance of each bead from the axis is marked.`, sources: one([{ svg: beads }]) },
  "p5r-s17": { name: "Rotational inertia of a block on a rod", label: "Graph", intro: r`A student attaches a small block to the end of a light rod and measures the rotational inertia $I$ of the system about an axis at the other end of the rod. The student repeats this for several rod lengths $r$. The graph shows $I$ as a function of $r^2$, with a best-fit line.`, sources: one([{ svg: iVsR2 }]) },
  "p5r-s18": { name: "A rod hung from a string", label: "Diagram", intro: r`A light rod hangs horizontally from a string, as shown. A $0.30$ kg mass hangs $0.40$ m to the left of the string and a mass $m$ hangs $0.15$ m to the right of the string. The rod is in equilibrium.`, sources: one([{ svg: mobile }]) },
  "p5r-s19": { name: "Four bars with three forces each", label: "Diagrams", intro: r`Four bars, each of negligible mass, are acted on by the three vertical forces shown. The upward force is exerted by a support. The length of each arrow is proportional to the magnitude of the force. The position of each force along the bar is shown.`, sources: pics("Bar", barPics) },
  "p5r-s20": { name: "A beam held by a hinge and a cable", label: "Diagram", intro: r`A uniform horizontal beam of mass $20$ kg and length $4.0$ m is attached to a wall by a hinge at its left end. A vertical cable holds up the right end. A $30$ kg block hangs from the beam $3.0$ m from the wall, as shown. Use $g = 10$ m/s².`, sources: one([{ svg: hingedBeam }]) },
  "p5r-s21": { name: "A wheelbarrow", label: "Diagram", intro: r`A wheelbarrow carries a load whose weight is $450$ N. The weight of the wheelbarrow itself is negligible. The person lifts straight up on the handle, as shown. The wheelbarrow is at rest.`, sources: one([{ svg: wheelbarrow }]) },
  "p5r-s22": { name: "A door on two hinges", label: "Diagram", intro: r`A uniform door has a weight of $200$ N, a height of $2.0$ m, and a width of $0.80$ m. It is held by two hinges on its left edge, one at the top corner and one at the bottom corner. The bottom hinge supports the whole weight of the door.`, sources: one([{ svg: doorPic }]) },
  "p5r-s23": { name: "A rod held by a string and a hinge", label: "Diagram", intro: r`A uniform horizontal rod of mass $M$ and length $L$ is attached to a wall by a hinge at its left end. A vertical string attached at a distance $L/4$ from the right end holds the rod up, and a block of mass $m$ hangs from the right end. The system is at rest.`, sources: one([{ svg: rodString }]) },
  "p5r-s24": { name: "A leaning pole held by a cable", label: "Diagram", intro: r`A uniform pole of mass $M$ and length $L$ is hinged at its base on the ground. A horizontal cable attached to the top of the pole and to a wall holds the pole at rest at an angle $\theta$ from the vertical, as shown.`, sources: one([{ svg: leanPole }]) },
  "p5r-s25": { name: "A block and a massive pulley", label: "Diagram", intro: r`A block of mass $m_1$ on a frictionless table is connected by a light string over a pulley to a hanging block of mass $m_2$. The pulley is a uniform solid disk of mass $M$ and radius $R$, with rotational inertia $\tfrac12 MR^2$, and it turns on a frictionless axle. The string does not slip on the pulley.`, sources: one([{ svg: massivePulley }]) },
  "p5r-s26": { name: "Torque on a wheel", label: "Graph", intro: r`A wheel is at rest at $t = 0$. It turns on a fixed axle with negligible friction, and its rotational inertia about the axle is $2.0$ kg·m². The graph shows the net torque on the wheel as a function of time, with counterclockwise positive.`, sources: one([{ svg: torqueTime }]) },
  "p5r-s27": { name: "Torque and angular acceleration data", label: "Table", intro: r`A student applies several constant torques to a wheel and measures the wheel's angular acceleration for each. A constant friction torque from the axle also acts on the wheel. The data are shown.`,
    sources: one([tbl(["Applied torque (N·m)", "$2.0$", "$3.0$", "$4.0$", "$5.0$"], [["Angular acceleration (rad/s²)", "$0.50$", "$1.00$", "$1.50$", "$2.00$"]])]) },
  "p5r-s28": { name: "A rod with two spheres, pushed", label: "Free response", frq: "MR", intro: r`A light rod of negligible mass and length $L$ can turn without friction about a vertical axle at its left end. The rod lies on a horizontal, frictionless table and is shown from above. A small sphere of mass $2m$ is attached to the middle of the rod and a small sphere of mass $m$ is attached to the right end. The rod is at rest when a force of constant magnitude $F$, always perpendicular to the rod, is applied to the right end. The force is removed at time $t_1$. Express algebraic answers in terms of $F$, $L$, $m$, $t_1$, and physical constants, as appropriate.`, sources: one([{ svg: mrRod }]) },
  "p5r-s29": { name: "A boom held by a cable", label: "Free response", frq: "QQT", intro: r`A uniform horizontal boom of mass $M$ and length $L$ is attached to a wall by a hinge at its left end. A light cable connects the right end of the boom to the wall above the hinge, and the cable makes an angle $\theta$ with the boom, as shown. The system is at rest. Express algebraic answers in terms of $M$, $L$, $\theta$, and physical constants, as appropriate.`, sources: one([{ svg: qqtBoom }]) },
};

// ---- multiple choice ----
const mc = (id, topic, difficulty, o) => ({ id: `p5r-${id}`, type: "mcq", skill: "u5", topic, difficulty, ...o, answer: 0 });
const S = (n) => `p5r-s${String(n).padStart(2, "0")}`;

const mcq = [
  // 5.1
  mc("m01", "5.1", "easy", { set: S(1), question: r`What is the magnitude of the fan's angular acceleration?`,
    choices: [r`$2.0$ rad/s²`, r`$2.67$ rad/s²`, r`$10.0$ rad/s²`, r`$0.50$ rad/s²`],
    why: [r`The angular acceleration is the slope of the graph: $\alpha = \dfrac{16 - 4}{6 - 0} = 2.0$ rad/s².`, r`This divides the final angular velocity by the time, $16/6$, and ignores the starting value of $4$ rad/s.`, r`This is the average angular velocity, $(4 + 16)/2$, not a rate of change.`, r`This inverts the slope, dividing the time interval by the change in angular velocity, $6/12$.`] }),
  mc("m02", "5.1", "moderate", { set: S(1), question: r`Through what angle does the fan turn between $t = 0$ and $t = 6$ s?`,
    choices: [r`$60$ rad`, r`$96$ rad`, r`$24$ rad`, r`$72$ rad`],
    why: [r`The angle is the area under the angular velocity graph, a trapezoid: $\theta = \tfrac12(4 + 16)(6) = 60$ rad. Equivalently, $\theta = \omega_{avg}\,t = (10)(6)$.`, r`This multiplies the final angular velocity by the time, $16 \times 6$, as if the fan had turned at $16$ rad/s the whole time.`, r`This multiplies the starting angular velocity by the time, $4 \times 6$, and leaves out the speeding up.`, r`This multiplies the change in angular velocity by the time, $12 \times 6$, which is not the area under the graph.`] }),
  mc("m03", "5.1", "difficult", { set: S(1), question: r`How many revolutions does the fan make between $t = 2$ s and $t = 6$ s?`,
    choices: [r`$7.6$ rev`, r`$48$ rev`, r`$15$ rev`, r`$300$ rev`],
    why: [r`At $t = 2$ s the line reads $\omega = 8$ rad/s. The angle is the area under the graph from $2$ s to $6$ s: $\theta = \tfrac12(8 + 16)(4) = 48$ rad. One revolution is $2\pi$ rad, so $48/(2\pi) = 7.6$ rev.`, r`This is the angle in radians, $48$ rad, reported as if it were revolutions.`, r`This divides $48$ by $\pi$ instead of $2\pi$.`, r`This multiplies by $2\pi$ instead of dividing, converting revolutions to radians in the wrong direction.`] }),
  mc("m04", "5.1", "easy", { stem: r`A drill chuck turns at a constant $1200$ rpm.`, question: "What is the angular speed of the chuck?",
    choices: [r`$126$ rad/s`, r`$20$ rad/s`, r`$3.2$ rad/s`, r`$4.5\times10^{5}$ rad/s`],
    why: [r`Each revolution is $2\pi$ rad and each minute is $60$ s: $\omega = (1200)(2\pi)/60 = 126$ rad/s.`, r`This is $1200/60$, the number of revolutions per second. It leaves out the $2\pi$ rad in each revolution.`, r`This divides $20$ rev/s by $2\pi$, converting in the wrong direction.`, r`This multiplies by $60$ instead of dividing, so the units are minutes per second instead of seconds per minute.`] }),
  mc("m05", "5.1", "moderate", { stem: r`The angular speed of a flywheel increases at a constant rate from $30$ rad/s to $90$ rad/s while the flywheel turns through an angle of $120$ rad.`, question: "What is the magnitude of the flywheel's angular acceleration?",
    choices: [r`$30$ rad/s²`, r`$60$ rad/s²`, r`$15$ rad/s²`, r`$34$ rad/s²`],
    why: [r`No time is given, so use $\omega^2 = \omega_0^2 + 2\alpha\theta$. Then $\alpha = \dfrac{90^2 - 30^2}{2(120)} = 30$ rad/s².`, r`This leaves out the $2$ in $2\alpha\theta$: $(90^2 - 30^2)/120$.`, r`This squares the change in angular speed, $(90 - 30)^2$, instead of the difference of the squares.`, r`This ignores the initial angular speed, using $90^2/(2 \times 120)$.`] }),
  mc("m06", "5.1", "moderate", { set: S(2), question: "Which graph shows the angular position of the mark as a function of time?",
    choices: ["Graph C", "Graph A", "Graph B", "Graph D"],
    why: [r`The slope of an angular position graph is the angular velocity. With constant $\alpha = -1.0$ rad/s², $\omega$ falls steadily from $4.0$ rad/s to $0$ at $t = 4.0$ s, so the slope decreases steadily to zero. After that the turntable is at rest and the graph is flat. Graph C does this.`, r`In Graph A the slope is constant until $4$ s, which means $\omega$ stays at $4.0$ rad/s and then drops to zero at once. That is not a constant angular acceleration.`, r`In Graph B the slope starts at zero and increases, which describes a turntable speeding up from rest.`, r`In Graph D the slope becomes negative after $4$ s, so the turntable would turn backward. The bearing exerts no torque once the turntable has stopped, so it does not.`] }),
  mc("m07", "5.1", "moderate", { set: S(3), question: "Which wheel has the angular acceleration of greatest magnitude?",
    choices: ["Wheel D", "Wheel A", "Wheel B", "Wheel C"],
    why: [r`Use $\alpha = \Delta\omega/\Delta t$. Wheel D: $(10 - 40)/5.0 = -6.0$ rad/s², a magnitude of $6.0$ rad/s². The others are A: $+5.0$, B: $+4.0$, C: $+2.5$ rad/s².`, r`Wheel A has the greatest positive angular acceleration, $+5.0$ rad/s², but wheel D has a larger magnitude, $6.0$ rad/s², because it is slowing down.`, r`Wheel B has an angular acceleration of $+4.0$ rad/s², which is less than $6.0$ rad/s².`, r`Wheel C ends with the greatest angular velocity, but its angular acceleration is only $+2.5$ rad/s². A large angular velocity does not mean a large angular acceleration.`] }),
  mc("m08", "5.1", "moderate", { stem: r`A turbine speeds up at a constant rate from rest to $3000$ rpm in $40$ s.`, question: "How many revolutions does the turbine make during these $40$ s?",
    choices: [r`$1000$ rev`, r`$2000$ rev`, r`$6300$ rev`, r`$60\,000$ rev`],
    why: [r`The average angular speed is half the final value, $1500$ rpm $= 25$ rev/s. Then $25 \times 40 = 1000$ rev.`, r`This uses the final angular speed, $50$ rev/s, for the whole time and leaves out the speeding up.`, r`This is the angle in radians, $\tfrac12(314)(40) = 6280$ rad, reported as revolutions.`, r`This multiplies $\tfrac12(3000)$ rpm by $40$ s without converting minutes to seconds.`] }),

  // 5.2
  mc("m09", "5.2", "moderate", { set: S(4), stem: r`The front sprocket turns with angular speed $\omega$.`, question: "What is the angular speed of the rear sprocket?",
    choices: [r`$2.5\,\omega$`, r`$0.40\,\omega$`, r`$\omega$`, r`$6.3\,\omega$`],
    why: [r`The chain moves at the same speed along both rims, so $v = \omega r$ is the same for both: $\omega(10) = \omega_{rear}(4.0)$. Then $\omega_{rear} = 2.5\,\omega$.`, r`This inverts the ratio of the radii. The smaller sprocket must turn faster, not slower.`, r`Points share one angular speed only when they are on the same rigid object. The two sprockets are separate objects joined by the chain, and the chain speed is what they share.`, r`This squares the ratio of the radii, $2.5^2$. The relation between the speeds is linear in the radius.`] }),
  mc("m10", "5.2", "difficult", { set: S(4), stem: r`The front sprocket turns at $60$ rpm. The rear sprocket is fixed to the rear wheel, which has a radius of $0.34$ m and rolls on the road without slipping.`, question: "What is the speed of the bicycle?",
    choices: [r`$5.3$ m/s`, r`$2.14$ m/s`, r`$0.854$ m/s`, r`$10.7$ m/s`],
    why: [r`The front sprocket turns at $\omega = (60)(2\pi)/60 = 6.28$ rad/s. The chain gives $\omega_{rear} = 2.5(6.28) = 15.7$ rad/s, and the wheel turns with the rear sprocket. The bicycle's speed is $v = \omega_{rear} R = (15.7)(0.34) = 5.3$ m/s.`, r`This uses the angular speed of the front sprocket, $6.28$ rad/s, with the wheel radius and skips the chain.`, r`This inverts the ratio of the sprockets, giving the rear sprocket an angular speed of only $2.5$ rad/s.`, r`This uses the wheel's diameter, $0.68$ m, as its radius.`] }),
  mc("m11", "5.2", "moderate", { set: S(5), question: "What is the angular acceleration of the wheel?",
    choices: [r`$8.0$ rad/s²`, r`$2.0$ rad/s²`, r`$0.50$ rad/s²`, r`$24$ rad/s²`],
    why: [r`The slope of the graph is the tangential acceleration, $a_t = 6.0/3.0 = 2.0$ m/s². Then $\alpha = a_t/r = 2.0/0.25 = 8.0$ rad/s².`, r`This is the tangential acceleration, $2.0$ m/s², which has different units from the angular acceleration.`, r`This multiplies by the radius instead of dividing, $(2.0)(0.25)$.`, r`This is the angular speed of the rim point at $3.0$ s, $6.0/0.25 = 24$ rad/s, not the angular acceleration.`] }),
  mc("m12", "5.2", "moderate", { set: S(6), question: "Rank the wheels from greatest to least angular speed.",
    choices: ["A, C, B, D", "B, A, D, C", "B, D, A, C", "D, B, C, A"],
    why: [r`Use $\omega = v/r$. A: $2.0/0.10 = 20$ rad/s. B: $2.4/0.40 = 6.0$ rad/s. C: $0.90/0.050 = 18$ rad/s. D: $1.0/0.20 = 5.0$ rad/s. The order is A, C, B, D.`, r`This ranks the wheels by the speed of the rim point, which is not the same as the angular speed.`, r`This ranks the wheels by radius, largest first. A larger radius with a similar speed gives a smaller angular speed.`, r`This reverses the correct order, ranking from least to greatest.`] }),
  mc("m13", "5.2", "easy", { stem: r`A merry-go-round of radius $2.5$ m speeds up from rest with a constant angular acceleration of $0.40$ rad/s². A child sits $2.0$ m from the center.`, question: "What is the magnitude of the child's tangential acceleration?",
    choices: [r`$0.80$ m/s²`, r`$1.0$ m/s²`, r`$0.20$ m/s²`, r`$0.40$ m/s²`],
    why: [r`The tangential acceleration is $a_t = \alpha r = (0.40)(2.0) = 0.80$ m/s².`, r`This uses the radius of the merry-go-round, $2.5$ m, instead of the child's distance from the center.`, r`This divides the angular acceleration by the distance, $0.40/2.0$, instead of multiplying.`, r`This is the angular acceleration, $0.40$ rad/s², which is the same for every point but is not the tangential acceleration.`] }),
  mc("m14", "5.2", "difficult", { stem: r`A cord is wound around a drum of radius $R$. The drum starts at rest and turns with a constant angular acceleration $\alpha$, and the cord unwinds from the rim without slipping.`, question: r`What length of cord has unwound after a time $t$?`,
    choices: [r`$\tfrac12 \alpha R t^2$`, r`$\alpha R t^2$`, r`$\dfrac{\alpha t^2}{2R}$`, r`$\tfrac12 \alpha t^2$`],
    why: [r`The drum turns through $\theta = \tfrac12 \alpha t^2$. The length unwound is the arc length $s = R\theta = \tfrac12 \alpha R t^2$.`, r`This leaves out the $\tfrac12$ in $\theta = \tfrac12 \alpha t^2$.`, r`This divides by $R$ instead of multiplying. Arc length is $R\theta$, not $\theta/R$.`, r`This is the angle in radians, $\theta = \tfrac12\alpha t^2$. It has no units of length, because it was not multiplied by $R$.`] }),

  // 5.3
  mc("m15", "5.3", "easy", { stem: r`A rod is free to turn about a pivot at one end. A force of constant magnitude acts at the other end of the rod, and the angle between the force and the rod can be changed.`, question: "For which angle between the force and the rod is the magnitude of the torque about the pivot greatest?",
    choices: [r`$90^\circ$`, r`$180^\circ$`, r`$135^\circ$`, r`$150^\circ$`],
    why: [r`The torque is $\tau = rF\sin\theta$, which is greatest when $\sin\theta = 1$, at $90^\circ$.`, r`At $180^\circ$ the force points along the line of the rod, its line of action passes through the pivot, and the torque is zero.`, r`At $135^\circ$ the torque is $rF\sin 135^\circ = 0.71\,rF$, less than the maximum.`, r`At $150^\circ$ the torque is $rF\sin 150^\circ = 0.50\,rF$, less than the maximum.`] }),
  mc("m16", "5.3", "easy", { set: S(7), question: "For which rod is the magnitude of the torque about the pivot $P$ equal to zero?",
    choices: ["Rod B", "Rod A", "Rod C", "Rod D"],
    why: [r`In Rod B the force points along the rod, so its line of action passes through the pivot. The lever arm is zero, and so is the torque.`, r`In Rod A the force is perpendicular to the rod at the end, which gives the greatest torque, $\tau = FL$.`, r`In Rod C the force is at $45^\circ$ to the rod, so $\tau = FL\sin 45^\circ$, which is not zero.`, r`In Rod D the force is perpendicular to the rod, halfway along it. The torque is $F(L/2)$, which is not zero.`] }),
  mc("m17", "5.3", "moderate", { set: S(8), question: "What is the magnitude of the torque that the force exerts about the hinge?",
    choices: [r`$24$ N·m`, r`$48$ N·m`, r`$42$ N·m`, r`$20$ N·m`],
    why: [r`The angle between the force and the line from the hinge to the point of application is $30^\circ$. Then $\tau = rF\sin\theta = (1.2)(40)\sin 30^\circ = 24$ N·m.`, r`This leaves out $\sin\theta$ and takes the whole force as perpendicular to the gate, $(1.2)(40)$.`, r`This uses $\cos 30^\circ$ in place of $\sin 30^\circ$: $(1.2)(40)\cos 30^\circ$. The angle given is measured from the gate, so the component perpendicular to the gate is $F\sin 30^\circ$.`, r`This is the perpendicular component of the force, $40\sin 30^\circ = 20$ N, with units of torque and no lever arm.`] }),
  mc("m18", "5.3", "moderate", { set: S(9), question: "What is the net torque on the pulley about its axle?",
    choices: [r`$1.0$ N·m clockwise`, r`$1.0$ N·m counterclockwise`, r`$11$ N·m clockwise`, r`$9.0$ N·m counterclockwise`],
    why: [r`The $20$ N force on the right produces a clockwise torque of $(20)(0.30) = 6.0$ N·m. The $50$ N force on the left produces a counterclockwise torque of $(50)(0.10) = 5.0$ N·m. The net torque is $1.0$ N·m clockwise.`, r`This has the right magnitude but the wrong direction. The larger torque, $6.0$ N·m, is clockwise.`, r`This adds the two torques. They turn the pulley in opposite directions, so they subtract.`, r`This uses the radius of the large disk, $0.30$ m, for both forces: $(50 - 20)(0.30)$.`] }),
  mc("m19", "5.3", "moderate", { set: S(10), question: "Rank the magnitudes of the torques about the pivots from greatest to least.",
    choices: ["C, D, A, B", "D, C, B, A", "D, B, C, A", "C, A, D, B"],
    why: [r`Use $\tau = rF\sin\theta$. A: $(0.50)(10) = 5.0$ N·m. B: $(0.30)(20)\sin 30^\circ = 3.0$ N·m. C: $(0.60)(15) = 9.0$ N·m. D: $(0.40)(25)\sin 45^\circ = 7.1$ N·m. The order is C, D, A, B.`, r`This ranks $rF$ without the angle, which makes B and D look larger than they are.`, r`This ranks the rods by the size of the force alone.`, r`This ranks the rods by the distance from the pivot alone.`] }),
  mc("m20", "5.3", "moderate", { set: S(11), question: "What is the magnitude of the net torque about the hinge due to the gravitational forces on the pole and the flag?",
    choices: [r`$49$ N·m`, r`$19.6$ N·m`, r`$78.4$ N·m`, r`$29.4$ N·m`],
    why: [r`The pole's weight acts at its center, $1.0$ m from the hinge: $(3.0)(9.8)(1.0) = 29.4$ N·m. The flag's weight acts $2.0$ m from the hinge: $(1.0)(9.8)(2.0) = 19.6$ N·m. Both turn the pole the same way, so the net torque is $49$ N·m.`, r`This is the torque of the flag alone, and it leaves out the weight of the pole.`, r`This puts the weight of the pole at its end, $(3.0 + 1.0)(9.8)(2.0)$.`, r`This is the torque of the pole alone, and it leaves out the flag.`] }),
  mc("m21", "5.3", "difficult", { set: S(12), question: "What is the magnitude of the torque that the force exerts about the axle of the crank?",
    choices: [r`$59$ N·m`, r`$34$ N·m`, r`$68$ N·m`, r`$79$ N·m`],
    why: [r`The force is vertical and the crank is $30^\circ$ below the horizontal, so the angle between the crank and the force is $60^\circ$. The lever arm is the horizontal distance from the axle to the pedal, $r\cos 30^\circ$. Then $\tau = (400)(0.17)\cos 30^\circ = 59$ N·m.`, r`This uses $\sin 30^\circ$, treating the $30^\circ$ given as the angle between the force and the crank. It is the angle between the crank and the horizontal.`, r`This leaves out the angle and takes the lever arm as the full length of the crank, $(400)(0.17)$.`, r`This divides by $\cos 30^\circ$ instead of multiplying by it.`] }),
  mc("m22", "5.3", "difficult", { set: S(13), question: "What is the magnitude of the torque that the rod's weight exerts about the pivot?",
    choices: [r`$7.6$ N·m`, r`$9.01$ N·m`, r`$11.8$ N·m`, r`$15.1$ N·m`],
    why: [r`The weight, $mg = 19.6$ N, acts at the center of the rod, $0.60$ m from the pivot, and the angle between the rod and the vertical force is $40^\circ$. Then $\tau = (0.60)(19.6)\sin 40^\circ = 7.6$ N·m.`, r`This uses $\cos 40^\circ$ instead of $\sin 40^\circ$. The $40^\circ$ is measured from the vertical, the line of the force.`, r`This leaves out the angle, $(0.60)(19.6)$, and treats the weight as perpendicular to the rod.`, r`This puts the weight at the end of the rod, $1.2$ m from the pivot, instead of at its center.`] }),
  mc("m23", "5.3", "moderate", { stem: r`A force of magnitude $F$ is applied perpendicular to a rod at a distance $d$ from the pivot, and it produces a torque of magnitude $\tau$. In a second trial, a force of magnitude $3F$ is applied at a distance $d/2$ from the pivot, at an angle of $30^\circ$ to the rod.`, question: "What is the magnitude of the torque in the second trial?",
    choices: [r`$\dfrac{3}{4}\tau$`, r`$\dfrac{3}{2}\tau$`, r`$\dfrac{3\sqrt{3}}{4}\tau$`, r`$3\tau$`],
    why: [r`The second torque is $(d/2)(3F)\sin 30^\circ = \dfrac{3}{4}Fd$. The first is $\tau = Fd$, so the ratio is $\dfrac{3}{4}$.`, r`This leaves out $\sin 30^\circ$ and treats the force as perpendicular to the rod: $(d/2)(3F) = \tfrac32 Fd$.`, r`This uses $\cos 30^\circ$ in place of $\sin 30^\circ$.`, r`This multiplies only by the factor of $3$ in the force and ignores the shorter distance and the angle.`] }),
  mc("m24", "5.3", "moderate", { stem: r`A child pushes tangentially with a force of $60$ N on a playground carousel, at a distance of $2.0$ m from its axle. Friction in the axle exerts a constant torque of $30$ N·m that opposes the motion. The carousel has a rotational inertia of $150$ kg·m² and starts from rest.`, question: "What is the angular speed of the carousel after the child has pushed for $4.0$ s?",
    choices: [r`$2.4$ rad/s`, r`$3.2$ rad/s`, r`$4.0$ rad/s`, r`$0.60$ rad/s`],
    why: [r`The net torque is $(60)(2.0) - 30 = 90$ N·m. Then $\alpha = \tau_{net}/I = 90/150 = 0.60$ rad/s², and $\omega = \alpha t = (0.60)(4.0) = 2.4$ rad/s.`, r`This leaves out the friction torque: $\alpha = 120/150$.`, r`This adds the friction torque to the push instead of subtracting: $\alpha = 150/150$.`, r`This is the angular acceleration, $0.60$ rad/s². It was not multiplied by the time.`] }),
  mc("m25", "5.3", "moderate", { set: S(14), question: "What is the net torque on the forearm about the elbow?",
    choices: [r`$2.0$ N·m, clockwise`, r`$2.0$ N·m, counterclockwise`, r`$26$ N·m, clockwise`, r`$14$ N·m, clockwise`],
    why: [r`The weight pulls down on the right and gives a clockwise torque of $(40)(0.35) = 14$ N·m. The biceps pulls up on the right and gives a counterclockwise torque of $(300)(0.040) = 12$ N·m. The net torque is $2.0$ N·m clockwise.`, r`This has the right magnitude but the wrong direction. The larger torque, $14$ N·m, is clockwise.`, r`This adds the two torques, but they turn the forearm in opposite directions.`, r`This is the torque of the weight alone, and it leaves out the biceps.`] }),

  // 5.4
  mc("m26", "5.4", "easy", { set: S(15), question: "How does the rotational inertia of the two spheres about axis Q compare with their rotational inertia about axis P?",
    choices: ["Twice as great", "Four times as great", "The same as before", "One half as great"],
    why: [r`About P each sphere is $L/2$ from the axis: $I_P = 2m(L/2)^2 = \tfrac12 mL^2$. About Q one sphere is on the axis and the other is $L$ away: $I_Q = mL^2$. The rotational inertia about Q is twice as great.`, r`This compares one sphere at distance $L$ with one sphere at $L/2$ and squares the ratio, $2^2$. It leaves out that about P there are two spheres contributing.`, r`The total mass is the same, but rotational inertia also depends on the distances from the axis.`, r`This reverses the comparison. Moving the axis to the end puts one sphere farther from it, so the rotational inertia increases.`] }),
  mc("m27", "5.4", "moderate", { set: S(15), stem: r`The two spheres are moved toward the center of the rod, so that each is a distance $L/4$ from axis P.`, question: "By what factor does the rotational inertia about axis P change?",
    choices: ["It becomes one fourth as great", "It becomes one half as great", "It becomes one sixteenth as great", "It does not change"],
    why: [r`Originally $I_P = 2m(L/2)^2 = \tfrac12 mL^2$. Now $I_P = 2m(L/4)^2 = \tfrac18 mL^2$. The new value is one fourth of the original: each distance is halved, and $I$ depends on the square of the distance.`, r`This takes $I$ as proportional to the distance, not its square.`, r`This compares the new distance, $L/4$, with $L$ instead of with the original distance, $L/2$, and squares the ratio.`, r`The mass is unchanged, but the rotational inertia depends on how the mass is distributed about the axis.`] }),
  mc("m28", "5.4", "moderate", { set: S(16), question: "What is the rotational inertia of the beads about the axis? Ignore the mass of the rod.",
    choices: [r`$0.036$ kg·m²`, r`$0.14$ kg·m²`, r`$0.024$ kg·m²`, r`$36$ kg·m²`],
    why: [r`Convert to kilograms and meters, then use $I = \sum mr^2$: $(0.100)(0.10)^2 + (0.200)(0.20)^2 + (0.300)(0.30)^2 = 0.001 + 0.008 + 0.027 = 0.036$ kg·m².`, r`This uses $\sum mr$, leaving out the square of each distance.`, r`This uses the total mass and the average distance, $(0.600)(0.20)^2$. The beads at larger distances count for more.`, r`This leaves the masses in grams, $\sum mr^2$ with $m$ in g and $r$ in m, so the result is not in kilograms.`] }),
  mc("m29", "5.4", "moderate", { set: S(17), question: "What is the mass of the block? Ignore the mass of the rod.",
    choices: [r`$0.40$ kg`, r`$2.5$ kg`, r`$0.12$ kg`, r`$0.63$ kg`],
    why: [r`For a small block on a light rod, $I = mr^2$, so a graph of $I$ versus $r^2$ is a line through the origin with slope $m$. The slope is $\dfrac{0.12}{0.30} = 0.40$ kg.`, r`This is the inverse of the slope, $r^2/I$.`, r`This is the value of $I$ at the last point, not the slope.`, r`This is the square root of the slope. The graph already plots $r^2$, so the slope is $m$ itself.`] }),
  mc("m30", "5.4", "easy", { question: "Which of the following does the rotational inertia of a rigid object about an axis NOT depend on?",
    choices: ["Its angular speed", "The position of the rotation axis", "How its mass is distributed", "The total mass of the object"],
    why: [r`Rotational inertia is $I = \sum mr^2$. It depends on the masses and their distances from the axis, not on how fast the object is turning.`, r`Changing the position of the axis changes every distance $r$, so it changes $I$.`, r`Mass farther from the axis contributes more to $I$, so the distribution matters.`, r`Each term in $\sum mr^2$ is proportional to a mass, so the total mass matters.`] }),
  mc("m31", "5.4", "difficult", { stem: r`Disk P and disk Q are made of the same material and have the same thickness. The radius of disk Q is twice the radius of disk P. Each disk turns about an axis through its center and perpendicular to its face. A solid disk of mass $M$ and radius $R$ has rotational inertia $\tfrac12 MR^2$.`, question: "How does the rotational inertia of disk Q compare with that of disk P?",
    choices: [r`$16$ times as great`, r`$4$ times as great`, r`$8$ times as great`, r`$2$ times as great`],
    why: [r`Same material and thickness means the mass is proportional to the area, so doubling the radius makes $M_Q = 4M_P$. Then $I_Q = \tfrac12 (4M_P)(2R_P)^2 = 16\left(\tfrac12 M_P R_P^2\right)$.`, r`This accounts only for the $R^2$ in the formula and treats the masses as equal.`, r`This multiplies the factor of $2$ in the radius by the factor of $4$ in the mass, which uses $R^1$ instead of $R^2$ for the radius.`, r`This treats the rotational inertia as proportional to the radius.`] }),

  // 5.5
  mc("m32", "5.5", "easy", { set: S(18), question: "What is the value of $m$?",
    choices: [r`$0.80$ kg`, r`$0.11$ kg`, r`$0.30$ kg`, r`$2.1$ kg`],
    why: [r`The rod is in rotational equilibrium, so the torques about the string cancel: $(0.30)(g)(0.40) = m g(0.15)$. Then $m = 0.80$ kg.`, r`This inverts the ratio of the distances: $(0.30)(0.15/0.40)$.`, r`This sets the masses equal, which ignores the different distances from the string.`, r`This squares the ratio of the distances: $(0.30)(0.40/0.15)^2$.`] }),
  mc("m33", "5.5", "moderate", { set: S(19), question: "Which bar is in equilibrium?",
    choices: ["Bar C", "Bar A", "Bar B", "Bar D"],
    why: [r`Equilibrium needs zero net force and zero net torque. In Bar C the upward force, $45$ N, equals the two downward forces, $30 + 15$ N. About the support, the $30$ N force at $0.30$ of the bar's length counterclockwise and the $15$ N force at $0.60$ of the length clockwise give $9.0$ and $9.0$ in the same units, so the torques cancel.`, r`In Bar A the forces balance, but about the support the torques are $30(0.30) = 9.0$ and $15(0.30) = 4.5$, which do not cancel. The bar would turn.`, r`In Bar B the torques about the support cancel, but the upward force, $30$ N, is less than the downward forces, $45$ N. The bar would accelerate downward.`, r`In Bar D the net force is $10$ N downward and the torques are $9.0$ and $12$, so neither condition is met.`] }),
  mc("m34", "5.5", "moderate", { set: S(20), question: "What is the tension in the cable?",
    choices: [r`$325$ N`, r`$225$ N`, r`$425$ N`, r`$500$ N`],
    why: [r`Take torques about the hinge, which removes the unknown hinge force. The beam's weight acts at its center: $T(4.0) = (20)(10)(2.0) + (30)(10)(3.0) = 1300$ N·m, so $T = 325$ N.`, r`This leaves out the torque of the beam's own weight: $(30)(10)(3.0)/4.0$.`, r`This puts the beam's weight at its right end: $[(20)(10)(4.0) + (30)(10)(3.0)]/4.0$.`, r`This is the total weight, $(20 + 30)(10)$. The cable and the hinge share it.`] }),
  mc("m35", "5.5", "difficult", { set: S(20), question: "What are the magnitude and direction of the force that the hinge exerts on the beam?",
    choices: [r`$175$ N, upward`, r`$175$ N, downward`, r`$325$ N, upward`, r`$500$ N, upward`],
    why: [r`The net vertical force on the beam is zero: $F_{hinge} + T - (20 + 30)(10) = 0$. With $T = 325$ N, $F_{hinge} = 500 - 325 = 175$ N, upward.`, r`This has the right magnitude but the wrong direction. The weights are greater than the tension, so the hinge must push up.`, r`This is the tension in the cable. The hinge force is the part of the total weight that the cable does not support.`, r`This is the total weight and leaves out the force that the cable exerts.`] }),
  mc("m36", "5.5", "moderate", { set: S(21), question: "What is the magnitude of the force $F$ that the person exerts on the handle?",
    choices: [r`$150$ N`, r`$1350$ N`, r`$225$ N`, r`$450$ N`],
    why: [r`Take torques about the axle: $F(1.50) = (450)(0.50)$, so $F = 150$ N.`, r`This inverts the lever arms: $(450)(1.50)/(0.50)$.`, r`This uses the distance from the load to the handle, $1.00$ m, as the lever arm of $F$ instead of the distance from the axle.`, r`This has the person hold the whole weight of the load. The wheel supports part of it.`] }),
  mc("m37", "5.5", "difficult", { set: S(22), question: "What is the magnitude of the horizontal force that the top hinge exerts on the door?",
    choices: [r`$40$ N`, r`$80$ N`, r`$200$ N`, r`$20$ N`],
    why: [r`Take torques about the bottom hinge, so the forces there have no torque. The weight acts at the center, $0.40$ m from the hinge line, and the top hinge's horizontal force acts $2.0$ m above: $F(2.0) = (200)(0.40)$, so $F = 40$ N.`, r`This uses the full width of the door, $0.80$ m, as the lever arm of the weight.`, r`This sets the force equal to the weight of the door. The hinge force is horizontal and is not equal to the weight.`, r`This splits the $40$ N between the two hinges. The torque balance requires the top hinge alone to exert it.`] }),
  mc("m38", "5.5", "difficult", { set: S(23), question: "What is the tension in the string?",
    choices: [r`$\dfrac{2}{3}(M + 2m)g$`, r`$\dfrac{4}{3}(M + m)g$`, r`$\dfrac{4}{3}\,mg$`, r`$(M + m)g$`],
    why: [r`Take torques about the hinge. The string is $3L/4$ from the hinge, the rod's weight acts at $L/2$, and the block hangs at $L$: $T\left(\tfrac{3L}{4}\right) = Mg\left(\tfrac{L}{2}\right) + mg(L)$. Then $T = \dfrac{2}{3}(M + 2m)g$.`, r`This puts the rod's weight at the right end, at distance $L$ instead of $L/2$.`, r`This leaves out the torque of the rod's weight.`, r`This assumes the string supports the entire weight, as if it were attached at the right end.`] }),
  mc("m39", "5.5", "difficult", { set: S(24), question: "What is the tension in the cable?",
    choices: [r`$\tfrac12 Mg\tan\theta$`, r`$\tfrac12 Mg\sin\theta$`, r`$\tfrac12 Mg\cot\theta$`, r`$Mg\tan\theta$`],
    why: [r`Take torques about the hinge. The cable's force is horizontal and acts at height $L\cos\theta$, so its lever arm is $L\cos\theta$. The weight acts at the center of the pole, at horizontal distance $\tfrac12 L\sin\theta$. Then $T(L\cos\theta) = Mg(\tfrac12 L\sin\theta)$, so $T = \tfrac12 Mg\tan\theta$.`, r`This takes the lever arm of the cable as $L$ and leaves out the factor $\cos\theta$.`, r`This swaps the two lever arms, as if $\theta$ were measured from the horizontal.`, r`This puts the pole's weight at its top, at horizontal distance $L\sin\theta$, instead of at its center.`] }),
  mc("m40", "5.5", "moderate", { stem: r`A compound pulley has an inner radius of $0.10$ m, an outer radius of $0.30$ m, and a mass of $3.0$ kg. It turns on a fixed axle through its center. A $6.0$ kg block hangs from a rope wound around the inner rim, and a second block hangs from a rope wound around the outer rim on the other side. The pulley and the blocks are at rest.`, question: "What is the magnitude of the force that the axle exerts on the pulley?",
    choices: [r`$108$ N`, r`$78.4$ N`, r`$264.6$ N`, r`$58.8$ N`],
    why: [r`The torques about the axle cancel: $(6.0)(g)(0.10) = m_2 g(0.30)$, so $m_2 = 2.0$ kg. The axle supports the pulley and both blocks: $(3.0 + 6.0 + 2.0)(9.8) = 108$ N.`, r`This leaves out the weight of the pulley, $(6.0 + 2.0)(9.8)$.`, r`This inverts the ratio of the radii, giving the second block $18$ kg: $(3.0 + 6.0 + 18)(9.8)$.`, r`This counts only the weight of the $6.0$ kg block.`] }),
  mc("m41", "5.5", "moderate", { stem: r`A uniform plank of length $2.0$ m and weight $60$ N rests horizontally with its left end on a scale and its right end on a fixed support. A crate weighing $40$ N sits on the plank $0.50$ m from the left end.`, question: "What does the scale read?",
    choices: [r`$60$ N`, r`$50$ N`, r`$40$ N`, r`$100$ N`],
    why: [r`Take torques about the right end, which removes the unknown force there: $S(2.0) = (60)(1.0) + (40)(1.5)$. Then $S = 60$ N.`, r`This splits the total weight, $100$ N, equally between the two ends. The crate is closer to the left end, so the left end carries more than the plank's half share.`, r`This measures the crate's distance from the wrong end, using $0.50$ m instead of $1.5$ m as its lever arm about the right end.`, r`This is the total weight of the plank and crate. The support at the right end carries part of it.`] }),

  // 5.6
  mc("m42", "5.6", "difficult", { set: S(25), question: "What is the magnitude of the acceleration of the hanging block?",
    choices: [r`$\dfrac{m_2 g}{m_1 + m_2 + M/2}$`, r`$\dfrac{m_2 g}{m_1 + m_2}$`, r`$\dfrac{m_2 g}{m_1 + m_2 + M}$`, r`$\dfrac{m_2 g}{m_1 + M/2}$`],
    why: [r`Hanging block: $m_2 g - T_2 = m_2 a$. Table block: $T_1 = m_1 a$. Pulley: $(T_2 - T_1)R = \tfrac12 MR^2\left(\dfrac{a}{R}\right)$, so $T_2 - T_1 = \tfrac12 Ma$. Adding gives $m_2 g = (m_1 + m_2 + \tfrac12 M)a$.`, r`This treats the pulley as massless, which makes the tension the same on both sides. A pulley with rotational inertia needs a net torque, so the tensions differ.`, r`This uses $MR^2$ for the pulley, the rotational inertia of a hoop, instead of $\tfrac12 MR^2$.`, r`This leaves the hanging block's own mass out of the mass that is accelerated.`] }),
  mc("m43", "5.6", "moderate", { set: S(26), question: r`What is the angular velocity of the wheel at $t = 3.0$ s?`,
    choices: [r`$9.0$ rad/s`, r`$18$ rad/s`, r`$3.0$ rad/s`, r`$36$ rad/s`],
    why: [r`From $0$ to $3.0$ s, $\alpha = \tau/I = 6.0/2.0 = 3.0$ rad/s². Then $\omega = \alpha t = (3.0)(3.0) = 9.0$ rad/s.`, r`This is $\tau t$. It leaves out the division by the rotational inertia.`, r`This is the angular acceleration. It was not multiplied by the time.`, r`This multiplies $\tau t$ by the rotational inertia instead of dividing.`] }),
  mc("m44", "5.6", "moderate", { set: S(26), question: r`What is the angular velocity of the wheel at $t = 8.0$ s?`,
    choices: [r`$3.0$ rad/s`, r`$9.0$ rad/s`, r`$15$ rad/s`, r`$-6.0$ rad/s`],
    why: [r`From $0$ to $3.0$ s the wheel reaches $9.0$ rad/s. From $3.0$ to $5.0$ s the torque is zero and $\omega$ stays at $9.0$ rad/s. From $5.0$ to $8.0$ s, $\alpha = -4.0/2.0 = -2.0$ rad/s², so $\Delta\omega = (-2.0)(3.0) = -6.0$ rad/s and $\omega = 3.0$ rad/s.`, r`This leaves out the last interval, where the negative torque slows the wheel.`, r`This adds $6.0$ rad/s instead of subtracting it. The negative torque reduces $\omega$.`, r`This applies the last interval to a wheel at rest. The wheel has $9.0$ rad/s at $5.0$ s, so the change must be added to that.`] }),
  mc("m45", "5.6", "moderate", { set: S(27), question: "What is the rotational inertia of the wheel?",
    choices: [r`$2.0$ kg·m²`, r`$4.0$ kg·m²`, r`$0.50$ kg·m²`, r`$2.5$ kg·m²`],
    why: [r`With friction, $\alpha = (\tau - \tau_f)/I$, so a graph of $\alpha$ versus $\tau$ has slope $1/I$. The slope is $\dfrac{2.00 - 0.50}{5.0 - 2.0} = 0.50$ kg⁻¹·m⁻², so $I = 2.0$ kg·m².`, r`This is $\tau/\alpha$ for the first trial, $2.0/0.50$. It treats the whole applied torque as the net torque and leaves out the friction.`, r`This is the slope of the data, which equals $1/I$, reported as if it were $I$.`, r`This is $\tau/\alpha$ for the last trial, $5.0/2.00$, which also leaves out the friction.`] }),
  mc("m46", "5.6", "moderate", { stem: r`A uniform solid disk of mass $8.0$ kg and radius $0.30$ m turns at $600$ rpm on a fixed axle. A brake pad pressed against the rim exerts a constant friction force of $20$ N tangent to the rim. No other torque acts. A solid disk has rotational inertia $\tfrac12 MR^2$.`, question: "How long does it take the disk to stop?",
    choices: [r`$3.8$ s`, r`$36$ s`, r`$7.5$ s`, r`$1.9$ s`],
    why: [r`$I = \tfrac12(8.0)(0.30)^2 = 0.36$ kg·m² and $\tau = (20)(0.30) = 6.0$ N·m, so $\alpha = 6.0/0.36 = 16.7$ rad/s². The initial angular speed is $(600)(2\pi)/60 = 62.8$ rad/s, so $t = \omega/\alpha = 3.8$ s.`, r`This leaves the initial angular speed as $600$ in place of rad/s: $600/16.7$.`, r`This uses $MR^2$ for the disk, which doubles the rotational inertia.`, r`This uses the disk's diameter, $0.60$ m, as the lever arm of the brake force, which doubles the torque.`] }),
  mc("m47", "5.6", "moderate", { stem: r`Disk X has mass $M$ and radius $R$. Disk Y has mass $2M$ and radius $R/2$. Both disks are at rest on frictionless axles through their centers, and the same constant torque is applied to each. A solid disk has rotational inertia $\tfrac12 MR^2$.`, question: "After the same time, how does the angular speed of disk Y compare with that of disk X?",
    choices: ["Twice as great", "One half as great", "Four times as great", "The same as before"],
    why: [r`$I_Y = \tfrac12(2M)(R/2)^2 = \tfrac14 MR^2$, which is half of $I_X = \tfrac12 MR^2$. With the same torque, $\alpha_Y = 2\alpha_X$, and since $\omega = \alpha t$, $\omega_Y = 2\omega_X$.`, r`This counts only the doubled mass, which would double the rotational inertia and halve the angular acceleration.`, r`This counts only the halved radius, which reduces $I$ to one fourth and makes $\alpha$ four times as great.`, r`The doubled mass and halved radius do not cancel, because $I$ depends on $R^2$.`] }),
  mc("m48", "5.6", "moderate", { stem: r`A turntable is a uniform solid disk of mass $3.0$ kg and radius $0.20$ m. It starts from rest on an axle. A motor exerts a torque of $0.15$ N·m, and friction in the axle exerts a torque of $0.030$ N·m that opposes the motion. A solid disk has rotational inertia $\tfrac12 MR^2$.`, question: "What is the angular speed of the turntable after $5.0$ s?",
    choices: [r`$10$ rad/s`, r`$12.5$ rad/s`, r`$15.0$ rad/s`, r`$5.0$ rad/s`],
    why: [r`$I = \tfrac12(3.0)(0.20)^2 = 0.060$ kg·m². The net torque is $0.15 - 0.030 = 0.12$ N·m, so $\alpha = 0.12/0.060 = 2.0$ rad/s² and $\omega = (2.0)(5.0) = 10$ rad/s.`, r`This leaves out the friction torque: $\alpha = 0.15/0.060$.`, r`This adds the friction torque to the motor's torque instead of subtracting it.`, r`This uses $MR^2$ for the rotational inertia, which doubles it.`] }),
  mc("m49", "5.6", "moderate", { stem: r`A light string is wrapped around the rim of a thin hoop of mass $3.0$ kg and radius $0.40$ m. The hoop turns on a fixed horizontal axle through its center, and a thin hoop has rotational inertia $MR^2$. The hoop starts at rest, and the string is pulled with a constant force of $6.0$ N tangent to the rim until $2.0$ m of string has unwound. The string does not slip.`, question: "What is the angular speed of the hoop when $2.0$ m of string has unwound?",
    choices: [r`$7.1$ rad/s`, r`$10$ rad/s`, r`$4.5$ rad/s`, r`$11$ rad/s`],
    why: [r`$\alpha = \tau/I = FR/(MR^2) = 6.0/[(3.0)(0.40)] = 5.0$ rad/s². The angle turned is $\theta = s/R = 2.0/0.40 = 5.0$ rad. Then $\omega = \sqrt{2\alpha\theta} = \sqrt{2(5.0)(5.0)} = 7.1$ rad/s.`, r`This uses $\tfrac12 MR^2$ for the hoop, which gives $\alpha = 10$ rad/s².`, r`This uses the length of string, $2.0$, as the angle in radians: $\sqrt{2(5.0)(2.0)}$.`, r`This divides the torque by $MR^2$ without the lever arm in the numerator, so $\alpha = F/(MR^2) = 12.5$ rad/s².`] }),
];

// ---- free response ----
const f = (id, topic, set, part, o) => ({ id: `p5r-${id}`, type: "frq", skill: "u5", topic, set, part, ...o });
const frq = [
  // MR, 10 points
  f("f1a", "5.6", "p5r-s28", "(a)", { prompt: r`On the axes provided, sketch a graph of the angular velocity $\omega$ of the rod as a function of time $t$ from $t = 0$ to $t = 2t_1$. Label $t_1$ on the time axis.`,
    rows: [{ name: "Speeding up", earns: r`Draws a straight line segment that starts at the origin and has a constant positive slope from $t = 0$ to $t = t_1$.` },
      { name: "After the force is removed", earns: r`Draws a horizontal line at the value of $\omega$ reached at $t_1$ from $t_1$ to $2t_1$, with $t_1$ labeled on the time axis where the slope changes.` }],
    solution: r`The graph has the time axis labeled $t$ and the vertical axis labeled $\omega$. From the origin, a straight line rises with constant positive slope up to $t = t_1$, which is labeled on the time axis. From $t_1$ to $2t_1$ the graph is a horizontal line at the height reached at $t_1$. The angular acceleration is constant while the constant torque acts, and it is zero afterward because no torque acts.` }),
  f("f1b", "5.6", "p5r-s28", "(b)", { prompt: r`Derive an expression for the angular velocity $\omega_1$ of the rod at time $t_1$. Start from a fundamental principle or an equation in the reference information.`,
    rows: [{ name: "Net torque and the second law", earns: r`Writes $\tau_{net} = I\alpha$ and takes the net torque as $FL$, because the force is perpendicular to the rod at distance $L$ from the axle.` },
      { name: "Rotational inertia", earns: r`Calculates the rotational inertia of the spheres, $I = mL^2 + 2m(L/2)^2 = \tfrac32 mL^2$, with the rod's mass negligible.` },
      { name: "Angular velocity", earns: r`Uses $\omega_1 = \alpha t_1$ for constant angular acceleration from rest and obtains $\omega_1 = \dfrac{2Ft_1}{3mL}$.` }],
    solution: r`The net torque about the axle is $\tau = FL$. The rotational inertia is $I = \sum mr^2 = m L^2 + 2m\left(\dfrac{L}{2}\right)^2 = \dfrac{3}{2}mL^2$. From $\tau = I\alpha$, $\alpha = \dfrac{FL}{\tfrac32 mL^2} = \dfrac{2F}{3mL}$. The torque is constant, so $\alpha$ is constant, and starting from rest, $\omega_1 = \alpha t_1 = \dfrac{2Ft_1}{3mL}$.` }),
  f("f1c", "5.2", "p5r-s28", "(c)", { prompt: r`The force has magnitude $F = 1.5$ N, the rod has length $L = 0.50$ m, the mass is $m = 0.40$ kg, and the force is removed at $t_1 = 2.0$ s. Calculate the speed of the sphere at the right end of the rod at time $t_1$.`,
    rows: [{ name: "Angular velocity", earns: r`Substitutes the values into the expression from part (b) and obtains $\omega_1 = 10$ rad/s.` },
      { name: "Speed", earns: r`Uses $v = \omega_1 L$ and obtains $v = 5.0$ m/s, with units.` }],
    solution: r`$\omega_1 = \dfrac{2Ft_1}{3mL} = \dfrac{2(1.5)(2.0)}{3(0.40)(0.50)} = 10$ rad/s. The speed of the sphere at distance $L$ from the axle is $v = \omega_1 L = (10)(0.50) = 5.0$ m/s.` }),
  f("f1d", "5.3", "p5r-s28", "(d)", { prompt: r`In a second trial, the same force $F$, always perpendicular to the rod, is applied at the midpoint of the rod, a distance $L/2$ from the axle, for the same time $t_1$. Is the angular velocity of the rod at $t_1$ greater than, less than, or equal to $\omega_1$ from part (b)? Justify your answer.`,
    rows: [{ name: "Claim", earns: r`States that the angular velocity at $t_1$ is less than $\omega_1$.` },
      { name: "Torque", earns: r`States that the torque is smaller, because the lever arm is $L/2$ instead of $L$ while the force is the same, and the rotational inertia of the system is unchanged.` },
      { name: "Second law", earns: r`Uses $\tau = I\alpha$ to state that the smaller torque gives a smaller angular acceleration, so $\omega = \alpha t_1$ is smaller for the same time.` }],
    solution: r`The angular velocity is less. The torque is now $F(L/2)$, half as large as before, because the lever arm is half as long. The spheres have not moved, so the rotational inertia $I$ is the same. By $\tau = I\alpha$, the angular acceleration is half as large, and for the same time $t_1$ the angular velocity $\omega = \alpha t_1$ is half of $\omega_1$.` }),
  // QQT, 8 points
  f("f2a", "5.3", "p5r-s29", "(a)", { prompt: r`Three forces act on the boom: its weight, the tension in the cable, and the force exerted by the hinge. Which of these forces exerts no torque on the boom about the hinge? Justify your answer.`,
    rows: [{ name: "Identification", earns: r`Identifies the force exerted by the hinge.` },
      { name: "Justification", earns: r`States that the hinge force acts at the axis of rotation, so its lever arm is zero, and $\tau = rF\sin\theta = 0$ for $r = 0$.` }],
    solution: r`The force exerted by the hinge exerts no torque about the hinge. It acts at the point about which the torques are calculated, so its distance from the axis is $r = 0$, and $\tau = rF\sin\theta = 0$.` }),
  f("f2b", "5.5", "p5r-s29", "(b)", { prompt: r`Derive an expression for the tension $T$ in the cable. Start from a fundamental principle or an equation in the reference information.`,
    rows: [{ name: "Rotational equilibrium", earns: r`States that the boom is at rest, so the net torque on it about the hinge is zero.` },
      { name: "Torques", earns: r`Writes the torque of the tension, $TL\sin\theta$, and the torque of the weight, $Mg(L/2)$, with opposite signs, such as $TL\sin\theta = Mg\dfrac{L}{2}$.` },
      { name: "Expression", earns: r`Solves for the tension, $T = \dfrac{Mg}{2\sin\theta}$.` }],
    solution: r`The boom is in rotational equilibrium, so the net torque about the hinge is zero. The weight acts at the center, a distance $L/2$ from the hinge, and its force is perpendicular to the boom. The tension acts at the right end, and the angle between the cable and the boom is $\theta$. Then $TL\sin\theta - Mg\dfrac{L}{2} = 0$, so $T = \dfrac{Mg}{2\sin\theta}$.` }),
  f("f2c", "5.5", "p5r-s29", "(c)", { prompt: r`The cable is moved so that it is attached to the boom at its midpoint, a distance $L/2$ from the hinge, and it still makes the same angle $\theta$ with the boom. Is the tension in the cable greater than, less than, or equal to the tension in part (b)? Justify your answer using torque.`,
    rows: [{ name: "Claim", earns: r`States that the tension is greater than in part (b).` },
      { name: "Torque of the weight", earns: r`States that the torque of the boom's weight about the hinge is unchanged, because the weight still acts at the center of the boom, so the cable must supply the same torque.` },
      { name: "Lever arm", earns: r`States that the lever arm of the tension is now half as long, $(L/2)\sin\theta$, so the tension must be larger to produce the same torque. Stating $T' = \dfrac{Mg}{\sin\theta}$, twice the original, also earns the point.` }],
    solution: r`The tension is greater. The boom is still at rest, so the cable must still exert a torque about the hinge equal to the torque of the weight, $Mg(L/2)$, which has not changed. The cable now acts $L/2$ from the hinge, so its lever arm is $(L/2)\sin\theta$, half as long as before. A smaller lever arm needs a larger force for the same torque: $T'(L/2)\sin\theta = Mg(L/2)$ gives $T' = \dfrac{Mg}{\sin\theta}$, which is twice $T$.` }),
];

export default [...mcq, ...frq];

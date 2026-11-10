import { graph } from "../../plot.js";

// Diagrams drawn away from the origin with no grid (step 100), so no axes or grid lines appear.
// s1: gutter cross-section, walls of height x and a base of width 12 - 2x.
const gutter = graph({
  x: [0.5, 11], y: [1, 6], step: 100, width: 320, height: 170,
  segments: [[2, 5, 2, 2], [2, 2, 9, 2], [9, 2, 9, 5]],
  labels: [[1.35, 3.6, "x"], [9.3, 3.6, "x"], [4.6, 1.2, "12 − 2x"]],
  alt: "Cross-section of the gutter: an open rectangle shaped like a U. The two vertical sides are each labeled x, and the bottom is labeled 12 - 2x.",
});
// s2: poster with a printed region; margins 2 inches at top and bottom, 1 inch at each side.
const poster = graph({
  x: [0.5, 8.5], y: [0.5, 9.5], step: 100, width: 260, height: 290,
  segments: [[1, 1, 8, 1], [8, 1, 8, 9], [8, 9, 1, 9], [1, 9, 1, 1], [2, 3, 7, 3], [7, 3, 7, 7], [7, 7, 2, 7], [2, 7, 2, 3]],
  labels: [[3.1, 5.2, "printed region"], [1.15, 5.2, "1"], [7.3, 5.2, "1"], [4.3, 8.1, "2"], [4.3, 2.1, "2"]],
  alt: "A rectangular poster with a smaller rectangle inside it labeled printed region. The margin between the printed region and the edge of the poster is labeled 2 at the top and at the bottom, and 1 at the left and at the right.",
});
// s3: cross-section of a cone of radius 3 and height 6 with an inscribed cylinder of radius r and height h.
const cone = graph({
  x: [0.3, 7.7], y: [0.3, 7.6], step: 100, width: 300, height: 270,
  segments: [[1, 1, 7, 1], [1, 1, 4, 7], [4, 7, 7, 1], [2.5, 1, 2.5, 4], [2.5, 4, 5.5, 4], [5.5, 4, 5.5, 1]],
  vlines: [{ x: 4 }],
  labels: [[4.6, 4.25, "r"], [5.7, 2.4, "h"], [5.4, 0.45, "3"], [3.62, 5.2, "6"]],
  alt: "Cross-section of a cone standing on its base: a triangle with base 6 and height 6, with a dashed vertical center line. Half of the base is labeled 3 and the height is labeled 6. A rectangle stands on the base, centered, with its top corners on the slanted sides. Half of its top edge is labeled r and its height is labeled h.",
});

export const sets = {
  "q511-s1": {
    name: "A rain gutter", label: "Diagram",
    intro: String.raw`A rain gutter is made from a flat sheet of metal $12$ inches wide by bending up $x$ inches along each long edge. Its cross-section, an open rectangle, is shown below.`,
    sources: [{ title: "", blocks: [{ svg: gutter }] }],
  },
  "q511-s2": {
    name: "A poster", label: "Diagram",
    intro: String.raw`A rectangular poster has a printed region of $50$ square inches. The margins around the printed region, in inches, are shown below.`,
    sources: [{ title: "", blocks: [{ svg: poster }] }],
  },
  "q511-s3": {
    name: "A cylinder in a cone", label: "Diagram",
    intro: String.raw`A right circular cylinder of radius $r$ and height $h$ is inscribed in a right circular cone of radius $3$ and height $6$. A cross-section through the axis of the cone is shown below.`,
    sources: [{ title: "", blocks: [{ svg: cone }] }],
  },
  "q511-s9": {
    name: "A running track", label: "Free response",
    intro: String.raw`A running track is shaped like a rectangle with a semicircle attached to each of its two shorter sides. The inside edge of the track is $400$ meters long: two straight sides, each $x$ meters long, and two semicircles, each of radius $r$ meters. The rectangle is $x$ meters long and $2r$ meters wide.`,
    sources: [{ title: "", blocks: [{ p: String.raw`$$2x + 2\pi r = 400, \qquad \text{area of the rectangle} = 2rx$$` }] }],
  },

};

const items = [
  { id: "q511-m01", type: "mcq", skill: "u5", topic: "5.11", calc: false, difficulty: "easy", set: "q511-s1",
    question: String.raw`What is the greatest possible area of the cross-section, in square inches?`,
    choices: ["$18$", "$3$", "$36$", "$16$"],
    why: [
      String.raw`The cross-section is $x$ inches tall and $12 - 2x$ inches wide, so $A(x) = x(12 - 2x) = 12x - 2x^2$ for $0 < x < 6$. $A'(x) = 12 - 4x = 0$ at $x = 3$, and $A''(x) = -4 < 0$, so the greatest area is $A(3) = 3 \cdot 6 = 18$.`,
      String.raw`$x = 3$ inches is the bend that gives the greatest area, not the area.`,
      String.raw`This uses $12 - x$ for the width. Bending up $x$ inches on both edges takes $2x$ inches from the width.`,
      String.raw`This makes all three sides equal, $4$ inches each. Then $A = 4 \cdot 4 = 16$, which is less than $A(3) = 18$.`,
    ], answer: 0 },
  { id: "q511-m02", type: "mcq", skill: "u5", topic: "5.11", calc: false, difficulty: "moderate", set: "q511-s2",
    question: String.raw`What is the least possible total area of the poster, in square inches?`,
    choices: ["$98$", "$50$", "$5$", String.raw`$58 + 30\sqrt{2}$`],
    why: [
      String.raw`Let the printed region be $w$ inches wide and $\dfrac{50}{w}$ inches tall. The poster is $w + 2$ wide and $\dfrac{50}{w} + 4$ tall, so $A(w) = (w + 2)\left(\dfrac{50}{w} + 4\right) = 58 + 4w + \dfrac{100}{w}$. $A'(w) = 4 - \dfrac{100}{w^2} = 0$ at $w = 5$, and $A''(w) = \dfrac{200}{w^3} > 0$, so the least area is $A(5) = 7 \cdot 14 = 98$.`,
      String.raw`$50$ square inches is the printed region alone. The margins add to the total area.`,
      String.raw`$5$ inches is the width of the printed region in the best poster, not an area.`,
      String.raw`$58 + 30\sqrt{2} \approx 100.4$ makes the printed region a square, $\sqrt{50}$ by $\sqrt{50}$. The margins are unequal, so a square is not best.`,
    ], answer: 0 },
  { id: "q511-m03", type: "mcq", skill: "u5", topic: "5.11", calc: false, difficulty: "moderate",
    stem: String.raw`A truck makes a $250$-mile trip at a constant speed of $v$ miles per hour. The driver is paid \$36 per hour, and fuel costs $\dfrac{v^2}{100}$ dollars per hour.`,
    question: String.raw`What speed $v$, in miles per hour, makes the total cost of the trip least?`,
    choices: ["$60$", "$300$", "$3600$", "$6$"],
    why: [
      String.raw`The trip takes $\dfrac{250}{v}$ hours, so the cost is $C(v) = \dfrac{250}{v}\left(36 + \dfrac{v^2}{100}\right) = \dfrac{9000}{v} + 2.5v$. $C'(v) = -\dfrac{9000}{v^2} + 2.5 = 0$ when $v^2 = 3600$, so $v = 60$. $C''(v) = \dfrac{18000}{v^3} > 0$, so this is the least cost.`,
      String.raw`\$300 is the least cost, $C(60) = 150 + 150$, not the speed.`,
      String.raw`This differentiates $\dfrac{9000}{v}$ as $-\dfrac{9000}{v}$ instead of $-\dfrac{9000}{v^2}$, so it solves $\dfrac{9000}{v} = 2.5$.`,
      String.raw`This drops the factor $100$ when solving: $\dfrac{9000}{v^2} = 2.5$ gives $v^2 = 3600$, not $36$.`,
    ], answer: 0 },
  { id: "q511-m04", type: "mcq", skill: "u5", topic: "5.11", calc: false, difficulty: "easy",
    stem: String.raw`The average cost per item, in dollars, of producing $x$ items is $A(x)$. It is known that $A'(40) = 0$ and $A''(x) > 0$ for all $x > 0$.`,
    question: String.raw`Which of the following is the best interpretation?`,
    choices: [
      String.raw`The average cost per item is least when 40 items are produced.`,
      String.raw`The average cost per item is greatest when 40 items are produced.`,
      String.raw`The average cost per item equals \$0 when 40 items are produced.`,
      String.raw`The total cost of production is least when 40 items are produced.`,
    ],
    why: [
      String.raw`$A$ has a critical point at $x = 40$, and $A'' > 0$ for all $x > 0$ means $A'$ is increasing, so $A' < 0$ before $40$ and $A' > 0$ after. $A(40)$ is the absolute minimum: the least average cost per item.`,
      String.raw`$A'' > 0$ means the graph of $A$ is concave up, so the critical point is a minimum, not a maximum.`,
      String.raw`$A'(40) = 0$ says the rate of change of the average cost is $0$, not that the average cost is $0$.`,
      String.raw`The information is about the average cost per item $A$, not the total cost $xA(x)$.`,
    ], answer: 0 },
  { id: "q511-m05", type: "mcq", skill: "u5", topic: "5.11", calc: false, difficulty: "difficult", set: "q511-s3",
    question: String.raw`What is the greatest possible volume of the cylinder?`,
    choices: [String.raw`$8\pi$`, String.raw`$18\pi$`, String.raw`$\frac{27\pi}{4}$`, String.raw`$24\pi$`],
    why: [
      String.raw`By similar triangles, the cone narrows $3$ units of radius over $6$ units of height, so $\dfrac{6 - h}{r} = \dfrac{6}{3}$ and $h = 6 - 2r$. Then $V(r) = \pi r^2(6 - 2r) = \pi\left(6r^2 - 2r^3\right)$ for $0 < r < 3$. $V'(r) = \pi\left(12r - 6r^2\right) = 6\pi r(2 - r) = 0$ at $r = 2$, where $V'$ changes from positive to negative. $V(2) = \pi(4)(2) = 8\pi$.`,
      String.raw`$18\pi = \dfrac{1}{3}\pi(3)^2(6)$ is the volume of the cone. The cylinder fits inside it, so its volume is less.`,
      String.raw`This uses half the cone's radius, $r = \dfrac{3}{2}$, with $h = 3$. $V'\left(\dfrac{3}{2}\right) > 0$, so a wider cylinder holds more.`,
      String.raw`This uses $r = 2$ with $h = 6$, the height of the cone. The top corners of the cylinder must stay on the cone, so $h = 6 - 2r = 2$.`,
    ], answer: 0 },
  { id: "q511-m06", type: "mcq", skill: "u5", topic: "5.11", calc: true, difficulty: "difficult",
    stem: String.raw`A wire 10 meters long is cut into two pieces. One piece, of length $x$ meters, is bent into a square, and the other is bent into a circle.`,
    question: String.raw`What value of $x$ makes the total area enclosed by the two shapes least?`,
    choices: ["$5.601$", "$4.399$", "$5.000$", "$3.501$"],
    why: [
      String.raw`The square has side $\dfrac{x}{4}$ and the circle has radius $\dfrac{10 - x}{2\pi}$, so $A(x) = \dfrac{x^2}{16} + \dfrac{(10 - x)^2}{4\pi}$. $A'(x) = \dfrac{x}{8} - \dfrac{10 - x}{2\pi} = 0$ gives $x = \dfrac{40}{\pi + 4} \approx 5.601$. $A''(x) > 0$, so this is the minimum.`,
      String.raw`$4.399$ meters is the length of the piece used for the circle, $10 - x$.`,
      String.raw`$5$ cuts the wire in half. The two shapes enclose area at different rates, so equal pieces do not minimize the total.`,
      String.raw`$3.501$ square meters is the least total area, $A(5.601)$, not the length $x$.`,
    ], answer: 0 },
  { id: "q511-f1a", type: "frq", skill: "u5", topic: "5.11", calc: false, set: "q511-s9", part: "(a)",
    prompt: String.raw`Write an expression for the area $A$ of the rectangle in terms of $r$ alone.`,
    rows: [
      { name: "Expression", earns: String.raw`Uses $x = 200 - \pi r$ to get $A(r) = 2r(200 - \pi r) = 400r - 2\pi r^2$.` },
    ],
    solution: String.raw`From $2x + 2\pi r = 400$, $x = 200 - \pi r$. Then $A(r) = 2r(200 - \pi r) = 400r - 2\pi r^2$ for $0 < r < \dfrac{200}{\pi}$.` },
  { id: "q511-f1b", type: "frq", skill: "u5", topic: "5.11", calc: false, set: "q511-s9", part: "(b)",
    prompt: String.raw`Find the value of $r$ that makes the area of the rectangle greatest. Justify that your answer gives the absolute maximum.`,
    rows: [
      { name: "Critical point", earns: String.raw`$A'(r) = 400 - 4\pi r = 0$ gives $r = \dfrac{100}{\pi}$.` },
      { name: "Justification", earns: String.raw`$A'(r) > 0$ for $0 < r < \dfrac{100}{\pi}$ and $A'(r) < 0$ for $r > \dfrac{100}{\pi}$; since $r = \dfrac{100}{\pi}$ is the only critical point, $A\left(\dfrac{100}{\pi}\right)$ is the absolute maximum.` },
    ],
    solution: String.raw`$A'(r) = 400 - 4\pi r$, which is $0$ only at $r = \dfrac{100}{\pi}$. For $0 < r < \dfrac{100}{\pi}$, $A'(r) > 0$, and for $\dfrac{100}{\pi} < r < \dfrac{200}{\pi}$, $A'(r) < 0$. $A$ increases and then decreases, and $r = \dfrac{100}{\pi}$ is the only critical point, so $A$ has its absolute maximum at $r = \dfrac{100}{\pi} \approx 31.8$ meters.` },
  { id: "q511-f1c", type: "frq", skill: "u5", topic: "5.11", calc: false, set: "q511-s9", part: "(c)",
    prompt: String.raw`Find the length $x$ of each straight side and the greatest area of the rectangle. Indicate units of measure.`,
    rows: [
      { name: "Length and area with units", earns: String.raw`$x = 100$ meters and $A = \dfrac{20000}{\pi}$ square meters.` },
    ],
    solution: String.raw`$x = 200 - \pi \cdot \dfrac{100}{\pi} = 100$ meters. $A = 2 \cdot \dfrac{100}{\pi} \cdot 100 = \dfrac{20000}{\pi} \approx 6366.2$ square meters. (The straight sides take half of the $400$ meters.)` },
];

export default { forms: [{ id: "q511", name: "Topic 5.11 Quiz: Solving Optimization Problems", group: "Unit 5: Analytical Applications of Differentiation", items }] };

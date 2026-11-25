// AP Physics 1, Topic 1.3 Quiz: Representing Motion. Six multiple choice, then one free-response question (4 points).
import { graph } from "../../plot.js";

const r = String.raw;
const SK = { skill: "u1", topic: "1.3" };
const pics = (word, svgs) => svgs.map((s, i) => ({ title: `${word} ${"ABCD"[i]}`, blocks: [{ svg: s }] }));
const qx = (o) => graph({ x: [0, 6], y: [-1, 8], step: 100, width: 220, height: 160, xname: "t", yname: "x", ...o });

// 1: position of an object, x = 6t - t^2
const parab = graph({ x: [0, 6], y: [0, 10], step: { x: 1, y: 2 }, xname: "t (s)", yname: "x (m)", fns: [{ f: (t) => 6 * t - t * t }],
  alt: "Position versus time for an object. A smooth arch starts at 0 meters at 0 seconds, rises to a peak of 9 meters at 3 seconds, and falls back to 0 meters at 6 seconds." });

// 2: four position graphs; key is the downward-opening parabola with a peak.
const xKey = (t) => 2 + 3 * t - 0.5 * t * t;
const posPics = [
  qx({ segments: [[0, 2, 3, 6.5], [3, 6.5, 6, 2]], alt: "Position versus time. A straight line rises from a starting value to a peak at the middle time, and a second straight line falls back to the starting value. There is a sharp corner at the peak." }),
  qx({ fns: [{ f: (t) => 6.5 - 3 * t + 0.5 * t * t }], alt: "Position versus time. A smooth U-shaped curve starts high, falls to a minimum at the middle time, and rises back to the starting value." }),
  qx({ fns: [{ f: xKey }], alt: "Position versus time. A smooth arch starts at a low value, rises with a decreasing slope to a peak at the middle time, and then falls with an increasing downward slope." }),
  qx({ fns: [{ f: (t) => (t <= 3 ? 2 + 4.5 * (1 - (1 - t / 3) ** 2) : 6.5) }], alt: "Position versus time. A curve rises with a decreasing slope until the middle time, then stays level at a constant value." }),
];

// 3: velocity graph with area above and below the axis
const areaV = graph({ x: [0, 8], y: [-3, 5], step: 1, xname: "t (s)", yname: "v (m/s)", segments: [[0, 0, 2, 4], [2, 4, 5, 4], [5, 4, 8, -2]],
  dots: [[0, 0, "closed"], [2, 4, "closed"], [5, 4, "closed"], [8, -2, "closed"]],
  alt: "Velocity versus time for a cart. The line rises from 0 at 0 seconds to 4 meters per second at 2 seconds, stays at 4 meters per second until 5 seconds, then falls in a straight line, crossing zero at 7 seconds and reaching negative 2 meters per second at 8 seconds." });

// 4: acceleration graph (steps)
const accG = graph({ x: [0, 8], y: [-4, 3], step: 1, xname: "t (s)", yname: "a (m/s²)", segments: [[0, 2, 3, 2], [3, -1, 5, -1], [5, -3, 7, -3]],
  dots: [[0, 2, "closed"], [3, 2, "open"], [3, -1, "closed"], [5, -1, "open"], [5, -3, "closed"], [7, -3, "closed"]],
  alt: "Acceleration versus time for a cart. The value is 2 meters per second squared from 0 to 3 seconds, negative 1 from 3 to 5 seconds, and negative 3 from 5 to 7 seconds." });

// free response: position of a toy tram
const frqX = graph({ x: [0, 9], y: [-3, 8], step: 1, xname: "t (s)", yname: "x (m)", segments: [[0, 0, 3, 6], [3, 6, 5, 6], [5, 6, 9, -2]],
  dots: [[0, 0, "closed"], [3, 6, "closed"], [5, 6, "closed"], [9, -2, "closed"]],
  alt: "Position versus time for a toy tram. The line rises from 0 at 0 seconds to 6 meters at 3 seconds, stays at 6 meters until 5 seconds, and then falls in a straight line to negative 2 meters at 9 seconds." });

export const sets = {
  "q13-s1": { name: "Position of an object", label: "Graph", intro: r`The graph shows the position $x$ of an object that moves along a straight line.`, sources: [{ title: "", blocks: [{ svg: parab }] }] },
  "q13-s2": { name: "Slowing, stopping, and reversing", label: "Graphs", intro: r`An object moves along the $x$-axis. It moves in the positive direction while slowing down at a constant rate, stops momentarily, and then moves in the negative direction while speeding up at the same constant rate. Choose the graph of the object's position as a function of time.`, sources: pics("Graph", posPics) },
  "q13-s3": { name: "Velocity of a cart", label: "Graph", intro: r`A cart moves along a straight track. The graph shows its velocity $v$ as a function of time $t$.`, sources: [{ title: "", blocks: [{ svg: areaV }] }] },
  "q13-s4": { name: "Acceleration of a cart", label: "Graph", intro: r`A cart moves along a straight track. At $t = 0$ its velocity is $-3.0$ m/s. The graph shows the cart's acceleration $a$ as a function of time $t$.`, sources: [{ title: "", blocks: [{ svg: accG }] }] },
  "q13-s5": { name: "A toy tram", label: "Free response", intro: r`A toy tram moves along a straight track. The graph shows its position $x$ as a function of time $t$, with positive to the right.`, sources: [{ title: "", blocks: [{ svg: frqX }] }] },
};

const items = [
  { id: "q13-m01", type: "mcq", ...SK, difficulty: "easy", set: "q13-s1",
    question: "At which times is the object momentarily at rest?",
    choices: [r`$t = 3$ s only`, r`$t = 0$ and $t = 6$ s only`, r`$t = 0$, $t = 3$ s, and $t = 6$ s`, "The object is never at rest."],
    why: [r`The velocity is the slope of the position graph. The slope is zero only at the peak, $t = 3$ s.`, r`At $t = 0$ and $t = 6$ s the position is zero, but the graph has a steep slope there. Zero position is not zero velocity.`, r`The slope is zero only at the peak. At $t = 0$ and $t = 6$ s the position is zero but the velocity is not.`, r`The object is at rest where the slope is zero, which happens at the peak of the curve.`], answer: 0 },
  { id: "q13-m02", type: "mcq", ...SK, difficulty: "moderate", set: "q13-s2",
    question: "Which graph shows the object's position as a function of time?",
    choices: ["Graph C", "Graph A", "Graph B", "Graph D"],
    why: [r`The velocity decreases at a constant rate, so the slope of the position graph decreases steadily: positive and shrinking, zero at the stop, then negative and growing in magnitude. That is a smooth arch, which is Graph C.`, r`Two straight lines mean two constant velocities with an instant change at the turn. The object here changes velocity at a constant rate.`, r`A U-shape has a negative slope first and a positive slope later. The object moves in the positive direction first.`, r`A curve that levels off means the object stops and stays at rest. The object here moves back in the negative direction.`], answer: 0 },
  { id: "q13-m03", type: "mcq", ...SK, difficulty: "easy",
    question: r`A rock is thrown straight down from a bridge at $6.0$ m/s. Air resistance is negligible. What is the rock's speed $3.0$ s after it is thrown?`,
    choices: [r`$35$ m/s`, r`$29$ m/s`, r`$50$ m/s`, r`$23$ m/s`],
    why: [r`With down as positive, $v = v_0 + g t = 6.0 + (9.8)(3.0) = 35$ m/s.`, r`This is $g t$ alone. The initial speed of $6.0$ m/s was left out.`, r`This is $v_0 + \tfrac{1}{2} g t^2 = 6.0 + 44$. That expression gives the distance fallen plus a speed, not a speed.`, r`This subtracts, $6.0 - 29$, as if gravity opposed the initial motion. The rock is thrown downward, so gravity adds to its speed.`], answer: 0 },
  { id: "q13-m04", type: "mcq", ...SK, difficulty: "moderate", set: "q13-s3",
    question: r`What is the cart's displacement from $t = 0$ to $t = 8$ s?`,
    choices: [r`$19$ m`, r`$21$ m`, r`$23$ m`, r`$18$ m`],
    why: [r`The displacement is the signed area under the graph: $\tfrac{1}{2}(2)(4) + (3)(4) + \tfrac{1}{2}(2)(4) - \tfrac{1}{2}(1)(2) = 4 + 12 + 4 - 1 = 19$ m.`, r`This adds the area below the axis as if it were positive, which gives the distance traveled, $21$ m.`, r`This leaves out the factor $\tfrac{1}{2}$ for the first triangle, $8 + 12 + 4 - 1$.`, r`This leaves out the factor $\tfrac{1}{2}$ for the area below the axis, $4 + 12 + 4 - 2$.`], answer: 0 },
  { id: "q13-m05", type: "mcq", ...SK, difficulty: "moderate",
    question: r`A car moving at $24$ m/s brakes to a stop with a constant acceleration of magnitude $4.0$ m/s$^2$. How far does the car travel while stopping?`,
    choices: [r`$72$ m`, r`$144$ m`, r`$36$ m`, r`$12$ m`],
    why: [r`$v^2 = v_0^2 + 2 a \Delta x$ with $v = 0$ gives $\Delta x = \dfrac{24^2}{2(4.0)} = 72$ m.`, r`This is $v_0 t = (24)(6.0)$. It uses the initial speed for the whole $6.0$ s, but the car slows down.`, r`This applies the factor $\tfrac{1}{2}$ twice, using half the average speed, $\tfrac{1}{2}(12)(6.0)$.`, r`This is $\tfrac{1}{2} a t$ instead of $\tfrac{1}{2} a t^2$, so the time was not squared.`], answer: 0 },
  { id: "q13-m06", type: "mcq", ...SK, difficulty: "difficult", set: "q13-s4",
    question: r`What is the cart's velocity at $t = 7.0$ s?`,
    choices: [r`$-5.0$ m/s`, r`$-2.0$ m/s`, r`$+1.0$ m/s`, r`$+11$ m/s`],
    why: [r`The change in velocity is the area under the graph: $(2)(3) + (-1)(2) + (-3)(2) = -2.0$ m/s. Then $v = -3.0 + (-2.0) = -5.0$ m/s.`, r`This is the area alone. The initial velocity of $-3.0$ m/s must be added to it.`, r`This adds the area to $+3.0$ m/s. The initial velocity is negative.`, r`This counts the areas below the axis as positive, $6 + 2 + 6 = 14$, and then adds $-3.0$. Areas below the axis are negative.`], answer: 0 },
  { id: "q13-f1a", type: "frq", ...SK, set: "q13-s5", part: "(a)", prompt: r`Determine the tram's velocity at $t = 7$ s.`,
    rows: [{ name: "Velocity", earns: r`States $-2.0$ m/s, obtained as the slope of the graph from $5$ s to $9$ s, with the sign and units.` }],
    solution: r`The velocity is the slope of the position graph. From $5$ s to $9$ s, $v = \dfrac{-2 - 6}{9 - 5} = -2.0$ m/s.` },
  { id: "q13-f1b", type: "frq", ...SK, set: "q13-s5", part: "(b)", prompt: r`On a sheet of paper, sketch a graph of the tram's velocity as a function of time from $t = 0$ to $t = 9$ s. Label the axes with the quantity and units, and give values on the velocity axis.`,
    rows: [{ name: "Shape and values", earns: r`The graph shows three horizontal segments: at $+2.0$ m/s from $0$ to $3$ s, at $0$ from $3$ s to $5$ s, and at $-2.0$ m/s from $5$ s to $9$ s.` }, { name: "Labels", earns: r`The axes are labeled with the quantities and units ($t$ in s, $v$ in m/s), with a scale that shows the values $+2.0$ and $-2.0$.` }],
    solution: r`The drawing has time in seconds on the horizontal axis and velocity in m/s on the vertical axis. The graph is a horizontal segment at $+2.0$ m/s from $t = 0$ to $3$ s, a horizontal segment on the time axis ($v = 0$) from $3$ s to $5$ s, and a horizontal segment at $-2.0$ m/s from $5$ s to $9$ s. The slopes of the position graph, $+2.0$, $0$, and $-2.0$ m/s, set these values.` },
  { id: "q13-f1c", type: "frq", ...SK, set: "q13-s5", part: "(c)", prompt: r`Determine the total distance the tram travels from $t = 0$ to $t = 9$ s.`,
    rows: [{ name: "Distance", earns: r`States $14$ m, obtained as $6$ m forward plus $8$ m back, with units.` }],
    solution: r`The tram moves $6$ m in the positive direction from $0$ to $3$ s and is at rest until $5$ s. From $5$ s to $9$ s it moves from $+6$ m to $-2$ m, which is $8$ m. The distance is $6 + 8 = 14$ m.` },
];

export default { forms: [{ id: "q13", name: "Topic 1.3 Quiz: Representing Motion", group: "Unit 1: Kinematics", items }] };

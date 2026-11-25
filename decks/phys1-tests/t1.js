// AP Physics 1, Unit 1 Test: Kinematics. Eighteen multiple choice (1.1: 2, 1.2: 2, 1.3: 8, 1.4: 2, 1.5: 4), then one Experimental Design and Analysis question (10 points).
import { graph } from "../../plot.js";
import { scene } from "../../diagrams.js";

const r = String.raw;
const U = { skill: "u1" };
const pics = (word, svgs) => svgs.map((s, i) => ({ title: `${word} ${"ABCD"[i]}`, blocks: [{ svg: s }] }));

// ---------- drawings ----------
// 1.2: x = t^2 / 2 with two marked points
const xq = graph({ x: [0, 7], y: [0, 26], step: { x: 1, y: 4 }, xname: "t (s)", yname: "x (m)", fns: [{ f: (t) => 0.5 * t * t }], dots: [[2, 2, "closed"], [6, 18, "closed"]], labels: [[2.5, 4.5, "P"], [6.5, 19.5, "Q"]],
  alt: "Position versus time for an object. A smooth curve bends upward from the origin. Point P is at 2 seconds and 2 meters. Point Q is at 6 seconds and 18 meters." });
// 1.3: velocity graph with labeled points
const vPts = graph({ x: [0, 9], y: [-9, 7], step: 1, xname: "t (s)", yname: "v (m/s)", segments: [[0, 6, 3, 0], [3, 0, 4, -8], [4, -8, 7, -8], [7, -8, 9, 0]],
  dots: [[1, 4, "closed"], [3.5, -4, "closed"], [5.5, -8, "closed"], [8, -4, "closed"]], labels: [[1.4, 5, "P"], [3.9, -3.2, "Q"], [5.5, -6.6, "R"], [8.4, -3, "S"]],
  alt: "Velocity versus time for an object. The line falls from 6 meters per second at 0 seconds to 0 at 3 seconds, then falls steeply to negative 8 meters per second at 4 seconds. It stays at negative 8 until 7 seconds and rises to 0 at 9 seconds. Point P is at 1 second on the first segment, Q is at 3.5 seconds on the steep segment, R is at 5.5 seconds on the level segment, and S is at 8 seconds on the final segment." });
const qa = (o) => graph({ x: [0, 6], y: [-3, 3], step: 100, width: 220, height: 160, xname: "t", yname: "a", ...o });
const accPics = [
  qa({ segments: [[0, -1.5, 6, -1.5]], alt: "Acceleration versus time. A level line at a negative value." }),
  qa({ segments: [[0, 0, 6, 2.5]], alt: "Acceleration versus time. A straight line rises from zero at the start to a positive value at the end." }),
  qa({ segments: [[0, 1.5, 6, 1.5]], alt: "Acceleration versus time. A level line at a positive value." }),
  qa({ segments: [[0, 0.05, 6, 0.05]], alt: "Acceleration versus time. A level line at zero." }),
];
const vArea = graph({ x: [0, 6], y: [-5, 3], step: 1, xname: "t (s)", yname: "v (m/s)", segments: [[0, 2, 2, 2], [2, 2, 5, -4], [5, -4, 6, -4]],
  dots: [[0, 2, "closed"], [2, 2, "closed"], [5, -4, "closed"], [6, -4, "closed"]],
  alt: "Velocity versus time for a glider. The line stays at 2 meters per second from 0 to 2 seconds, falls in a straight line through zero at 3 seconds to negative 4 meters per second at 5 seconds, and stays at negative 4 until 6 seconds." });
const vTent = graph({ x: [0, 6], y: [-3, 3], step: 1, xname: "t (s)", yname: "v (m/s)", segments: [[0, 2, 3, 2], [3, -2, 6, -2]], dots: [[0, 2, "closed"], [3, 2, "open"], [3, -2, "closed"], [6, -2, "closed"]],
  alt: "Velocity versus time for a cart. The velocity is 2 meters per second from 0 to 3 seconds and negative 2 meters per second from 3 to 6 seconds." });
const qx = (o) => graph({ x: [0, 6], y: [-7, 8], step: 100, width: 220, height: 160, xname: "t", yname: "x", ...o });
const tentPics = [
  qx({ segments: [[0, 0, 3, 6], [3, 6, 6, 6]], alt: "Position versus time. A straight line rises from zero to a value at the middle time, then stays level." }),
  qx({ segments: [[0, 0, 3, 6], [3, 6, 6, 0]], alt: "Position versus time. A straight line rises from zero to a peak at the middle time, then a straight line falls back to zero at the end." }),
  qx({ segments: [[0, 0, 3, -6], [3, -6, 6, 0]], alt: "Position versus time. A straight line falls from zero to a negative minimum at the middle time, then rises back to zero at the end." }),
  qx({ segments: [[0, 0, 3, 6], [3, 6, 6, -6]], alt: "Position versus time. A straight line rises from zero to a peak at the middle time, then falls more steeply to a negative value at the end." }),
];
const vSlow = graph({ x: [0, 9], y: [-6, 7], step: 1, xname: "t (s)", yname: "v (m/s)", segments: [[0, 0, 2, -4], [2, -4, 4, -4], [4, -4, 6, 0], [6, 0, 8, 5]],
  dots: [[0, 0, "closed"], [2, -4, "closed"], [4, -4, "closed"], [6, 0, "closed"], [8, 5, "closed"]],
  alt: "Velocity versus time for a cart. The line falls from 0 to negative 4 meters per second at 2 seconds, stays at negative 4 until 4 seconds, rises to 0 at 6 seconds, and rises to 5 meters per second at 8 seconds." });
// 1.3 difficult: stopping distance versus initial speed squared, best-fit line through the origin
const stopData = [[4, 0.52], [9, 1.10], [16, 2.05], [25, 3.10], [36, 4.5]];
const stopGraph = graph({ x: [0, 40], y: [0, 5], step: { x: 5, y: 1 }, xname: "v₀² (m²/s²)", yname: "d (m)", segments: [[0, 0, 36, 4.5]], dots: stopData.map(([a, b]) => [a, b, "closed"]),
  alt: "Stopping distance d versus the square of the initial speed. Five data points lie close to a straight best-fit line through the origin. The line passes through the point at 36 square meters per square second and 4.5 meters." });
// 1.4: three road users, velocities relative to the ground at 5 px per m/s
const road = scene({ width: 480, height: 150, alt: "A truck, a car, and a cyclist on a straight road. A green arrow above the truck points right and is labeled 18 meters per second. A longer green arrow above the car points right and is labeled 24 meters per second. A short green arrow above the cyclist points left and is labeled 6.0 meters per second.",
  items: [
    { ground: { from: [20, 30], to: [460, 30] } },
    { rect: { x: 70, y: 50, w: 70, h: 32, label: "truck" } }, { rect: { x: 230, y: 50, w: 60, h: 32, label: "car" } }, { circle: { x: 410, y: 44, r: 12, label: "C" } },
    { arrow: { from: [70, 98], to: [160, 98], kind: "velocity" } }, { label: { x: 115, y: 114, text: "18 m/s" } },
    { arrow: { from: [230, 98], to: [350, 98], kind: "velocity" } }, { label: { x: 290, y: 114, text: "24 m/s" } },
    { arrow: { from: [410, 98], to: [380, 98], kind: "velocity" } }, { label: { x: 410, y: 114, text: "6.0 m/s" } },
  ] });
// 1.5: balloon, velocity components at 10 px per m/s
const balloon = scene({ width: 320, height: 150, alt: "A balloon drawn as a circle. A green arrow pointing straight up is labeled 5.0 meters per second relative to the air. A longer green arrow pointing to the right is labeled wind, 12 meters per second east.",
  items: [
    { circle: { x: 60, y: 40, r: 9, label: "B" } },
    { arrow: { from: [60, 52], to: [60, 102], kind: "velocity" } }, { label: { x: 60, y: 116, text: "5.0 m/s relative to the air", anchor: "start" } },
    { arrow: { from: [74, 40], to: [194, 40], kind: "velocity" } }, { label: { x: 134, y: 24, text: "wind, 12 m/s east" } },
  ] });
// EDA data
const tbl = (head, rows) => ({ table: { head, rows } });

export const sets = {
  "t1-s01": { name: "Four reports", label: "Table", intro: r`A student writes four reports about a lab cart that moves along a straight track.`,
    sources: [{ title: "", blocks: [tbl(["Report", "Statement"], [["A", "The cart moved $3.0$ m."], ["B", "The cart moved $3.0$ m to the left."], ["C", "The cart's speed was $3.0$ m/s."], ["D", "The cart's velocity was $3.0$ m/s to the left."]])] }] },
  "t1-s02": { name: "Position of an object", label: "Graph", intro: r`The graph shows the position $x$ of an object that moves along a straight line.`, sources: [{ title: "", blocks: [{ svg: xq }] }] },
  "t1-s03": { name: "Velocity of an object", label: "Graph", intro: r`The graph shows the velocity $v$ of an object that moves along a straight line. Positive is to the right.`, sources: [{ title: "", blocks: [{ svg: vPts }] }] },
  "t1-s04": { name: "Slowing in the negative direction", label: "Graphs", intro: r`A cart moves in the negative direction and slows down at a constant rate until it stops. Choose the graph of the cart's acceleration as a function of time during this motion.`, sources: pics("Graph", accPics) },
  "t1-s05": { name: "Velocity of a glider", label: "Graph", intro: r`A glider moves along a straight air track. The graph shows its velocity $v$ as a function of time $t$.`, sources: [{ title: "", blocks: [{ svg: vArea }] }] },
  "t1-s06": { name: "From velocity to position", label: "Graphs", intro: r`The first graph shows the velocity of a cart that is at $x = 0$ at $t = 0$. Choose the graph of the cart's position as a function of time.`,
    sources: [{ title: "Velocity graph", blocks: [{ svg: vTent }] }, ...pics("Position graph", tentPics)] },
  "t1-s07": { name: "Velocity of a cart", label: "Graph", intro: r`The graph shows the velocity $v$ of a cart on a straight track.`, sources: [{ title: "", blocks: [{ svg: vSlow }] }] },
  "t1-s08": { name: "Stopping distance", label: "Graph", intro: r`Students slide a puck across a rough, level floor at several initial speeds $v_0$ and measure the stopping distance $d$ each time. They plot $d$ versus $v_0^2$. The best-fit line passes through the origin and the point $(36 \text{ m}^2/\text{s}^2, 4.5 \text{ m})$.`, sources: [{ title: "", blocks: [{ svg: stopGraph }] }] },
  "t1-s09": { name: "Three road users", label: "Diagram", intro: r`A truck, a car, and a cyclist move along a straight road. The arrows show their velocities relative to the ground.`, sources: [{ title: "", blocks: [{ svg: road }] }] },
  "t1-s10": { name: "A weather balloon", label: "Diagram", intro: r`A weather balloon rises at $5.0$ m/s relative to the air while a steady wind carries it east at $12$ m/s, as shown.`, sources: [{ title: "", blocks: [{ svg: balloon }] }] },
  "t1-s11": { name: "Range and launch angle", label: "Free response", frq: "EDA",
    intro: r`A launcher fires a foam ball from ground level. The launch speed $v_0$ is the same for every launch, and the launch angle $\theta$ above the horizontal can be changed. The ball lands on level ground at a horizontal distance $R$ from the launcher. Air resistance is negligible. Students want to determine $v_0$.`,
    sources: [{ title: "Data for part (c)", blocks: [{ p: r`The students launch the ball at five angles and measure the range each time.` }, tbl(["$\theta$ (degrees)", "$5$", "$15$", "$25$", "$35$", "$45$"], [["$R$ (m)", "$0.65$", "$1.80$", "$2.85$", "$3.40$", "$3.70$"]])] }] },
};

const items = [
  // ===================== 1.1 =====================
  { id: "t1-m01", type: "mcq", ...U, topic: "1.1", difficulty: "easy",
    question: r`An object's speed is $5.0$ m/s. Which statement must be true?`,
    choices: [r`The magnitude of its velocity is $5.0$ m/s.`, r`Its velocity is $5.0$ m/s in the positive direction.`, "Its acceleration is zero, because its speed is constant.", r`Its displacement in every second is $5.0$ m.`],
    why: [r`Speed is the magnitude of the velocity vector, so the magnitude of the velocity is $5.0$ m/s.`, "The speed gives no direction. The object might move in the negative direction.", "A constant speed does not mean zero acceleration. An object moving at constant speed on a curve accelerates.", r`The displacement in a second is $5.0$ m only if the object moves in a straight line without turning around. The speed does not say that.`], answer: 0 },
  { id: "t1-m02", type: "mcq", ...U, topic: "1.1", difficulty: "easy", set: "t1-s01",
    question: "Which two reports describe vector quantities?",
    choices: ["B and D", "A and C", "B and C", "A and D"],
    why: ["Report B gives a distance with a direction, so it is a displacement. Report D gives a speed with a direction, so it is a velocity. Both are vectors.", "Reports A and C give a distance and a speed, which are scalars. They have no direction.", "Report B is a vector, but report C gives a speed with no direction, so it is a scalar.", "Report D is a vector, but report A gives a distance with no direction, so it is a scalar."], answer: 0 },
  // ===================== 1.2 =====================
  { id: "t1-m03", type: "mcq", ...U, topic: "1.2", difficulty: "moderate",
    question: r`A glider on an air track moves with velocity $+0.60$ m/s. After a collision it moves with velocity $-0.40$ m/s. The collision lasts $0.50$ s. What is the glider's average acceleration during the collision?`,
    choices: [r`$-2.0$ m/s$^2$`, r`$+2.0$ m/s$^2$`, r`$-0.40$ m/s$^2$`, r`$+0.40$ m/s$^2$`],
    why: [r`$a_{avg} = \dfrac{-0.40 - 0.60}{0.50} = -2.0$ m/s$^2$.`, r`This subtracts in the wrong order, $\dfrac{0.60 - (-0.40)}{0.50}$, which gives the wrong sign.`, r`This subtracts the speeds, $\dfrac{0.40 - 0.60}{0.50}$, instead of the signed velocities.`, r`This adds the signed velocities, $\dfrac{0.60 + (-0.40)}{0.50}$, instead of subtracting.`], answer: 0 },
  { id: "t1-m04", type: "mcq", ...U, topic: "1.2", difficulty: "moderate", set: "t1-s02",
    question: "What is the object's average velocity from point P to point Q?",
    choices: [r`$4.0$ m/s`, r`$3.0$ m/s`, r`$6.0$ m/s`, r`$16$ m/s`],
    why: [r`$v_{avg} = \dfrac{\Delta x}{\Delta t} = \dfrac{18 - 2}{6 - 2} = 4.0$ m/s.`, r`This is the average velocity from the origin to Q, $\dfrac{18}{6}$, not from P to Q.`, r`This is the instantaneous velocity at Q, the slope of the tangent there. The question asks for the average between two points.`, r`This is the displacement from P to Q. It was not divided by the time interval.`], answer: 0 },
  // ===================== 1.3 =====================
  { id: "t1-m05", type: "mcq", ...U, topic: "1.3", difficulty: "easy", set: "t1-s03",
    question: "At which labeled point is the object's speed the greatest?",
    choices: ["R", "P", "Q", "S"],
    why: ["Speed is the magnitude of the velocity. The greatest magnitude on the graph is $8$ m/s, along the level segment that contains R.", "Point P has the highest value of $v$, but $+4$ m/s is a smaller magnitude than the $-8$ m/s at R.", "Point Q is on the steepest part of the graph, but steepness is acceleration. The speed there is only $4$ m/s.", "At S the speed is $4$ m/s, less than $8$ m/s."], answer: 0 },
  { id: "t1-m06", type: "mcq", ...U, topic: "1.3", difficulty: "moderate", set: "t1-s04",
    question: "Which graph is correct?",
    choices: ["Graph C", "Graph A", "Graph B", "Graph D"],
    why: ["The velocity is negative and rises toward zero at a constant rate. The slope of the velocity graph is positive and constant, so the acceleration is a constant positive value.", "A negative acceleration would make a cart that moves in the negative direction speed up. This cart slows down.", "A growing acceleration would mean the velocity changes at an increasing rate. The cart slows at a constant rate.", "Zero acceleration would mean constant velocity. The cart slows down."], answer: 0 },
  { id: "t1-m07", type: "mcq", ...U, topic: "1.3", difficulty: "moderate", set: "t1-s05",
    question: r`What is the glider's displacement from $t = 0$ to $t = 6$ s?`,
    choices: [r`$-3.0$ m`, r`$+3.0$ m`, r`$13$ m`, r`$-6.0$ m`],
    why: [r`The displacement is the signed area: $(2)(2) + \tfrac{1}{2}(1)(2) - \tfrac{1}{2}(2)(4) - (1)(4) = 4 + 1 - 4 - 4 = -3.0$ m.`, r`This has the right size and the wrong sign.`, r`This adds the sizes of all the areas, $4 + 1 + 4 + 4$, which gives the distance traveled, not the displacement.`, r`This leaves out the factor $\tfrac{1}{2}$ for both triangles, $4 + 2 - 8 - 4$.`], answer: 0 },
  { id: "t1-m08", type: "mcq", ...U, topic: "1.3", difficulty: "moderate",
    question: r`An object starts from rest and moves with constant acceleration. It takes a time $T$ to travel a distance $d$. How long does it take to travel a distance $3d$ from rest?`,
    choices: [r`$\sqrt{3}\,T$`, r`$3T$`, r`$9T$`, r`$\dfrac{T}{\sqrt{3}}$`],
    why: [r`From rest, $x = \tfrac{1}{2} a t^2$, so $t = \sqrt{2x/a}$. Tripling $x$ multiplies the time by $\sqrt{3}$.`, r`This treats the distance as proportional to the time. From rest, the distance is proportional to $t^2$.`, r`This treats the time as proportional to the square of the distance. The time is proportional to the square root of the distance.`, r`This inverts the factor. A greater distance takes a longer time.`], answer: 0 },
  { id: "t1-m09", type: "mcq", ...U, topic: "1.3", difficulty: "moderate", set: "t1-s06",
    question: "Which position graph is correct?",
    choices: ["Graph B", "Graph A", "Graph C", "Graph D"],
    why: ["The velocity is $+2$ m/s for $3$ s, so the position rises $6$ m. Then the velocity is $-2$ m/s for $3$ s, so the position falls $6$ m back to zero.", "A level line means zero velocity. The cart moves at $-2$ m/s during the second half.", "A line that first falls means the cart first moves in the negative direction. It first moves in the positive direction.", "The second slope is steeper than the first, which means a speed greater than $2$ m/s. The speed is the same in both halves."], answer: 0 },
  { id: "t1-m10", type: "mcq", ...U, topic: "1.3", difficulty: "difficult",
    question: r`A ball is thrown straight up at $9.8$ m/s from a balcony that is $14.7$ m above the ground. The ball misses the balcony on the way down. Air resistance is negligible. How long after it is thrown does the ball hit the ground?`,
    choices: [r`$3.0$ s`, r`$1.7$ s`, r`$2.0$ s`, r`$1.0$ s`],
    why: [r`With up positive, $-14.7 = 9.8 t - 4.9 t^2$. This gives $4.9 t^2 - 9.8 t - 14.7 = 0$, so $t^2 - 2t - 3 = 0$ and $t = 3.0$ s.`, r`This ignores the initial upward speed and finds the time to fall $14.7$ m from rest, $\sqrt{2(14.7)/9.8}$.`, r`This is the time for the ball to rise and return to the balcony. It still has $14.7$ m to fall.`, r`This takes the initial velocity to be downward, $14.7 = 9.8 t + 4.9 t^2$.`], answer: 0 },
  { id: "t1-m11", type: "mcq", ...U, topic: "1.3", difficulty: "moderate", set: "t1-s07",
    question: "During which interval is the cart slowing down while it moves in the negative direction?",
    choices: [r`$t = 4$ s to $t = 6$ s`, r`$t = 0$ to $t = 2$ s`, r`$t = 2$ s to $t = 4$ s`, r`$t = 6$ s to $t = 8$ s`],
    why: [r`From $4$ s to $6$ s the velocity is negative and rises toward zero. The speed decreases while the cart moves in the negative direction.`, r`From $0$ to $2$ s the velocity becomes more negative. The cart speeds up in the negative direction.`, r`From $2$ s to $4$ s the velocity is constant, so the speed does not change.`, r`From $6$ s to $8$ s the velocity is positive and growing. The cart speeds up in the positive direction.`], answer: 0 },
  { id: "t1-m12", type: "mcq", ...U, topic: "1.3", difficulty: "difficult", set: "t1-s08",
    question: "What is the magnitude of the puck's acceleration?",
    choices: [r`$4.0$ m/s$^2$`, r`$8.0$ m/s$^2$`, r`$0.25$ m/s$^2$`, r`$0.13$ m/s$^2$`],
    why: [r`For a constant deceleration, $v^2 = v_0^2 - 2 a d$ with $v = 0$ gives $d = \dfrac{v_0^2}{2a}$. The slope is $\dfrac{1}{2a} = \dfrac{4.5}{36} = 0.125$ s$^2$/m, so $a = \dfrac{1}{2(0.125)} = 4.0$ m/s$^2$.`, r`This is $\dfrac{1}{\text{slope}}$. It leaves out the factor of $2$ in $d = v_0^2/(2a)$.`, r`This is $2 \times \text{slope}$. The slope is $\dfrac{1}{2a}$, so $a$ is $\dfrac{1}{2 \times \text{slope}}$.`, r`This is the slope itself, which equals $\dfrac{1}{2a}$, not $a$.`], answer: 0 },
  // ===================== 1.4 =====================
  { id: "t1-m13", type: "mcq", ...U, topic: "1.4", difficulty: "easy",
    question: r`A runner jogs east at $3.0$ m/s relative to the ground. A bus drives east at $11$ m/s relative to the ground. What is the runner's velocity as measured by a passenger on the bus?`,
    choices: [r`$8.0$ m/s west`, r`$14$ m/s east`, r`$8.0$ m/s east`, r`$14$ m/s west`],
    why: [r`$v_{R/B} = v_R - v_B = 3.0 - 11 = -8.0$ m/s, which is $8.0$ m/s west. The bus passenger sees the runner fall behind.`, r`This adds the two speeds. Both move east, so the velocities are subtracted.`, r`This has the right size but the wrong direction. The bus is faster, so the runner moves backward relative to it.`, r`This adds the speeds and then reverses the direction.`], answer: 0 },
  { id: "t1-m14", type: "mcq", ...U, topic: "1.4", difficulty: "moderate", set: "t1-s09",
    question: "Which pair has the greatest speed relative to each other?",
    choices: ["The car and the cyclist", "The truck and the cyclist", "The car and the truck", "All three pairs have the same relative speed."],
    why: ["The car and the cyclist move in opposite directions, so the relative speed is $24 + 6.0 = 30$ m/s, the greatest of the three.", "The truck and the cyclist have a relative speed of $18 + 6.0 = 24$ m/s, which is less than $30$ m/s.", "The car and the truck move in the same direction, so the relative speed is $24 - 18 = 6.0$ m/s, the least of the three.", "The relative speed depends on both velocities, and the three pairs have different values: $30$, $24$, and $6.0$ m/s."], answer: 0 },
  // ===================== 1.5 =====================
  { id: "t1-m15", type: "mcq", ...U, topic: "1.5", difficulty: "easy",
    question: r`Ball X is dropped from rest from a height $h$ above level ground. At the same instant, an identical ball Y is launched horizontally from the same height. Air resistance is negligible. Which statement is correct?`,
    choices: ["They land at the same time, because their vertical motions are identical.", "Ball X lands first, because ball Y has to travel farther along a curved path.", "Ball Y lands first, because it moves with a greater speed from the very start.", "They land at the same time, because they have the same speed when they land."],
    why: ["The vertical motion depends only on the height and gravity. Both balls start with zero vertical velocity from the same height, so they take the same time to fall.", "The distance traveled along the path does not set the fall time. The horizontal motion is independent of the vertical motion.", "The extra speed of ball Y is horizontal. It does not change the vertical motion that sets the fall time.", "The times are equal, but the landing speeds differ. Ball Y also has a horizontal velocity, so it lands with a greater speed."], answer: 0 },
  { id: "t1-m16", type: "mcq", ...U, topic: "1.5", difficulty: "moderate",
    question: r`A fountain nozzle sprays a stream of water at $18$ m/s at an angle of $40^\circ$ above the horizontal. Air resistance is negligible. How long does a drop of water take to reach the highest point of its path?`,
    choices: [r`$1.2$ s`, r`$1.4$ s`, r`$1.8$ s`, r`$2.4$ s`],
    why: [r`The vertical velocity is zero at the highest point. $t = \dfrac{v_{0y}}{g} = \dfrac{18\sin 40^\circ}{9.8} = 1.2$ s.`, r`This uses the horizontal component, $\dfrac{18\cos 40^\circ}{9.8}$. Sine and cosine were swapped.`, r`This uses the full speed as the vertical component, $\dfrac{18}{9.8}$.`, r`This is the total time in the air, $2 \times 1.2$ s. The question asks for the time to the highest point.`], answer: 0 },
  { id: "t1-m17", type: "mcq", ...U, topic: "1.5", difficulty: "difficult",
    question: r`A ball is launched from level ground with speed $v$ at an angle $\theta$ above the horizontal. Air resistance is negligible. Which expression gives the maximum height the ball reaches above the ground?`,
    choices: [r`$\dfrac{v^2 \sin^2\theta}{2g}$`, r`$\dfrac{v^2 \sin\theta}{2g}$`, r`$\dfrac{v^2 \sin^2\theta}{g}$`, r`$\dfrac{v^2 \cos^2\theta}{2g}$`],
    why: [r`At the top the vertical velocity is zero, so $0 = (v\sin\theta)^2 - 2 g H$ and $H = \dfrac{v^2\sin^2\theta}{2g}$.`, r`This does not square the sine. The whole vertical component is squared in $v_y^2$.`, r`This leaves out the factor of $2$ in $v_y^2 = 2 g H$.`, r`This uses the horizontal component $v\cos\theta$. The height depends on the vertical component.`], answer: 0 },
  { id: "t1-m18", type: "mcq", ...U, topic: "1.5", difficulty: "moderate", set: "t1-s10",
    question: "What are the magnitude and direction of the balloon's velocity relative to the ground?",
    choices: [r`$13$ m/s, $23^\circ$ above the horizontal`, r`$13$ m/s, $67^\circ$ above the horizontal`, r`$17$ m/s, $23^\circ$ above the horizontal`, r`$17$ m/s, $67^\circ$ above the horizontal`],
    why: [r`The components are perpendicular. The speed is $\sqrt{12^2 + 5.0^2} = 13$ m/s, and the angle above the horizontal is $\tan^{-1}\left(\dfrac{5.0}{12}\right) = 23^\circ$.`, r`The speed is correct, but $\tan^{-1}(12/5.0) = 67^\circ$ is the angle from the vertical, not from the horizontal.`, r`The direction is correct, but $17$ m/s is the sum $12 + 5.0$ of the components. Perpendicular components add as a vector sum.`, r`This adds the components for the speed and uses the angle from the vertical.`], answer: 0 },
  // ===================== free response (EDA) =====================
  { id: "t1-f1a", type: "frq", ...U, topic: "1.5", set: "t1-s11", part: "(a)", prompt: r`Describe an experimental procedure to collect data on how the range $R$ depends on the launch angle $\theta$. Identify the independent and dependent variables, and state the equipment used to measure each.`,
    rows: [{ name: "Independent variable", earns: r`Identifies the launch angle $\theta$ as the independent variable and states that it is measured with a protractor (or an angle gauge).` }, { name: "Dependent variable", earns: r`Identifies the range $R$ as the dependent variable and states that it is measured with a meter stick or a measuring tape (and that the launch speed is kept the same).` }],
    solution: r`Set the launcher to a chosen angle $\theta$, measured with a protractor, and fire the ball from ground level. Measure the horizontal distance $R$ from the launcher to the landing point with a meter stick or tape measure. Keep the launch speed the same for every launch, repeat each angle several times and average the ranges, and then change the angle and repeat.` },
  { id: "t1-f1b", type: "frq", ...U, topic: "1.5", set: "t1-s11", part: "(b)", prompt: r`Starting from the kinematic equations, derive an expression for the range $R$ in terms of $v_0$, $\theta$, and $g$.`,
    rows: [{ name: "Time of flight", earns: r`Uses the vertical motion with zero net vertical displacement to find the time of flight, $t = \dfrac{2 v_0 \sin\theta}{g}$.` }, { name: "Range", earns: r`Substitutes the time into the horizontal motion $R = v_0 \cos\theta \, t$ to obtain $R = \dfrac{2 v_0^2 \sin\theta \cos\theta}{g}$.` }],
    solution: r`Vertically, the ball starts and ends at ground level: $0 = (v_0 \sin\theta) t - \tfrac{1}{2} g t^2$, so $t = \dfrac{2 v_0 \sin\theta}{g}$. Horizontally, the velocity is constant: $R = (v_0 \cos\theta) t = \dfrac{2 v_0^2 \sin\theta \cos\theta}{g}$.` },
  { id: "t1-f1ci", type: "frq", ...U, topic: "1.5", set: "t1-s11", part: "(c)(i)", prompt: r`The students will use a graph to determine $v_0$ from their data. Indicate which quantities should be plotted on the vertical and horizontal axes so that the data fall on a straight line. Explain how $v_0$ can be determined from the slope of the line.`,
    rows: [{ name: "Quantities to plot", earns: r`Indicates that $R$ is plotted on one axis and $\sin\theta\cos\theta$ on the other (either assignment is accepted).` }, { name: "Linear relationship", earns: r`Uses the expression from part (b) to show that $R = \left(\dfrac{2 v_0^2}{g}\right)\sin\theta\cos\theta$ has the form of a straight line through the origin, with slope $\dfrac{2 v_0^2}{g}$ when $R$ is on the vertical axis (or its inverse when the axes are reversed).` }, { name: "Slope gives the speed", earns: r`States that $v_0 = \sqrt{\dfrac{g \times \text{slope}}{2}}$, consistent with the axes chosen.` }],
    solution: r`Plot $R$ on the vertical axis and $\sin\theta\cos\theta$ on the horizontal axis. From part (b), $R = \left(\dfrac{2 v_0^2}{g}\right)\sin\theta\cos\theta$, which has the form $y = m x$ with slope $m = \dfrac{2 v_0^2}{g}$. The speed is $v_0 = \sqrt{\dfrac{g\,m}{2}}$.` },
  { id: "t1-f1cii", type: "frq", ...U, topic: "1.5", set: "t1-s11", part: "(c)(ii)", prompt: r`On a sheet of paper, calculate $\sin\theta\cos\theta$ for each angle in the table. Plot the data on a grid, with the quantities from part (c)(i) on the axes, and draw a best-fit straight line.`,
    rows: [{ name: "Axes and points", earns: r`The axes are labeled with the quantities and units ($R$ in m, and $\sin\theta\cos\theta$ with no units), the scales use more than half of each axis, and the five points are plotted correctly.` }, { name: "Best-fit line", earns: "A straight best-fit line is drawn through the data, passing at or near the origin, with points on both sides of the line." }],
    solution: r`The values of $\sin\theta\cos\theta$ are $0.087$, $0.250$, $0.383$, $0.470$, and $0.500$ for $5^\circ$, $15^\circ$, $25^\circ$, $35^\circ$, and $45^\circ$. The graph has $\sin\theta\cos\theta$ from $0$ to $0.5$ on the horizontal axis and $R$ in meters from $0$ to $4$ on the vertical axis. The five points are $(0.087, 0.65)$, $(0.250, 1.80)$, $(0.383, 2.85)$, $(0.470, 3.40)$, and $(0.500, 3.70)$. The best-fit line is straight, passes near the origin, and rises to about $3.7$ m at $0.5$.` },
  { id: "t1-f1ciii", type: "frq", ...U, topic: "1.5", set: "t1-s11", part: "(c)(iii)", prompt: r`Use the best-fit line to determine the launch speed $v_0$.`,
    rows: [{ name: "Launch speed", earns: r`Calculates the slope from two points on the best-fit line (not data points), about $7.4$ m, and obtains $v_0 \approx 6.0$ m/s (any value from $5.7$ to $6.3$ m/s is accepted), with units.` }],
    solution: r`Take two points on the best-fit line, for example $(0, 0)$ and $(0.50, 3.7)$ m. The slope is $\dfrac{3.7 - 0}{0.50 - 0} = 7.4$ m. Then $v_0 = \sqrt{\dfrac{g \times \text{slope}}{2}} = \sqrt{\dfrac{(9.8)(7.4)}{2}} = 6.0$ m/s.` },
];

export default { forms: [{ id: "t1", name: "Unit 1 Test", group: "Unit 1: Kinematics", items }] };

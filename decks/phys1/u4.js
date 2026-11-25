// AP Physics 1 review, Unit 4: Linear Momentum (4.1 to 4.4). 45 multiple choice, one QQT and one EDA free-response question.
import { graph, bars } from "../../plot.js";
import { scene } from "../../diagrams.js";

const r = String.raw;
const pics = (word, svgs, title = "") => svgs.map((s, i) => ({ title: `${title}${title ? ", " : ""}${word} ${"ABCD"[i]}`, blocks: [{ svg: s }] }));
const one = (blocks, title = "") => [{ title, blocks }];

// ---- graphs and diagrams ----
// two carts on a track, each with a mass label and a velocity arrow (length proportional to speed)
const cartPair = (list, alt) => {
  const items = [{ ground: { from: [10, 40], to: [430, 40] } }, { label: { x: 12, y: 144, text: "Before", anchor: "start" } }];
  list.forEach((c) => {
    items.push({ circle: { x: c.x - 20, y: 47, r: 7 } }, { circle: { x: c.x + 20, y: 47, r: 7 } }, { rect: { x: c.x, y: 68, w: 76, h: 28, label: c.label } });
    if (c.v) items.push({ arrow: { from: [c.x, 110], to: [c.x + c.v * 28, 110], kind: "velocity" } }, { label: { x: c.x + c.v * 14, y: 126, text: c.vlabel } });
    else items.push({ label: { x: c.x, y: 110, text: c.vlabel } });
  });
  return scene({ width: 440, height: 160, alt, items });
};
const xtCart = graph({ width: 415, x: [0, 8], y: [-3, 5], step: 1, xname: "t(s)", yname: "x (m)", segments: [[0, 0, 2, 4], [2, 4, 4, 4], [4, 4, 7, -2]],
  alt: "Position versus time for a cart. The line rises from 0 meters at 0 seconds to 4 meters at 2 seconds, stays at 4 meters until 4 seconds, then falls to negative 2 meters at 7 seconds." });
const ftTrap = graph({ width: 415, x: [0, 6], y: [0, 8], step: { x: 1, y: 2 }, xname: "t(s)", yname: "F (N)", segments: [[0, 0, 2, 6], [2, 6, 4, 6], [4, 6, 5, 0]],
  alt: "Force versus time. The force rises in a straight line from 0 newtons at 0 seconds to 6 newtons at 2 seconds, stays at 6 newtons until 4 seconds, then falls in a straight line to 0 newtons at 5 seconds." });
const ftSign = graph({ width: 415, x: [0, 6], y: [-8, 6], step: { x: 1, y: 2 }, xname: "t(s)", yname: "F (N)", segments: [[0, 4, 3, 4], [3, 4, 3, -6], [3, -6, 5, -6], [5, -6, 5, 0], [5, 0, 6, 0]],
  alt: "Force versus time. The force is 4 newtons from 0 to 3 seconds, then negative 6 newtons from 3 to 5 seconds, then 0 newtons from 5 to 6 seconds." });
const T = 2 * 12 / 9.8;
const pBall = [
  graph({ width: 415, x: [0, 3], y: [-8, 8], step: { x: 1, y: 4 }, xname: "t(s)", yname: "p (kg·m/s)", segments: [[0, 6, T / 2, 0], [T / 2, 0, T, 6]], alt: "Momentum versus time. A V shape: the line falls from 6 to 0 at about 1.2 seconds, then rises back to 6 at about 2.4 seconds." }),
  graph({ width: 415, x: [0, 3], y: [-8, 8], step: { x: 1, y: 4 }, xname: "t(s)", yname: "p (kg·m/s)", segments: [[0, 6, T, 0]], alt: "Momentum versus time. A straight line falls from 6 at 0 seconds to 0 at about 2.4 seconds." }),
  graph({ width: 415, x: [0, 3], y: [-8, 8], step: { x: 1, y: 4 }, xname: "t(s)", yname: "p (kg·m/s)", segments: [[0, 6, T, -6]], alt: "Momentum versus time. A straight line falls from 6 at 0 seconds, crosses zero at about 1.2 seconds, and reaches negative 6 at about 2.4 seconds." }),
  graph({ width: 415, x: [0, 3], y: [-8, 8], step: { x: 1, y: 4 }, xname: "t(s)", yname: "p (kg·m/s)", segments: [[0, -6, T, 6]], alt: "Momentum versus time. A straight line rises from negative 6 at 0 seconds, crosses zero at about 1.2 seconds, and reaches 6 at about 2.4 seconds." }),
];
const ftFloor = graph({ width: 415, x: [0, 60], y: [0, 50], step: { x: 10, y: 10 }, xname: "t(ms)", yname: "F (N)", segments: [[0, 0, 25, 40], [25, 40, 50, 0]],
  alt: "Force versus time during contact. The force rises in a straight line from 0 newtons at 0 milliseconds to 40 newtons at 25 milliseconds, then falls to 0 newtons at 50 milliseconds." });
const ptCart = graph({ width: 415, x: [0, 8], y: [-8, 8], step: { x: 1, y: 2 }, xname: "t(s)", yname: "p (kg·m/s)", segments: [[0, 0, 2, 6], [2, 6, 4, 6], [4, 6, 7, -6]],
  alt: "Momentum versus time. The line rises from 0 at 0 seconds to 6 at 2 seconds, stays at 6 until 4 seconds, then falls to negative 6 at 7 seconds." });
const fOpt = (a, c) => graph({ width: 415, x: [0, 8], y: [-6, 6], step: { x: 1, y: 2 }, xname: "t(s)", yname: "F (N)",
  segments: [[0, a, 2, a], [2, a, 2, 0], [2, 0, 4, 0], [4, 0, 4, c], [4, c, 7, c]],
  alt: `Force versus time in three steps: ${a} newtons from 0 to 2 seconds, 0 newtons from 2 to 4 seconds, and ${c} newtons from 4 to 7 seconds.` });
const fPics = [
  fOpt(3, 4),
  fOpt(3, -4),
  fOpt(-3, 4),
  graph({ width: 415, x: [0, 8], y: [-6, 6], step: { x: 1, y: 2 }, xname: "t(s)", yname: "F (N)", segments: [[0, 0, 2, 6], [2, 6, 4, 6], [4, 6, 7, -6]], alt: "Force versus time. The line rises from 0 at 0 seconds to 6 newtons at 2 seconds, stays at 6 newtons until 4 seconds, then falls to negative 6 newtons at 7 seconds." }),
];
const xtMerge = graph({ width: 415, x: [0, 6], y: [0, 12], step: { x: 1, y: 2 }, xname: "t(s)", yname: "x (m)", segments: [[0, 0, 2, 6], [0, 12, 2, 6], [2, 6, 6, 10]],
  labels: [[0.9, 1.4, "A"], [0.9, 10.6, "B"], [4.3, 6.9, "A and B"]],
  alt: "Position versus time for two carts. Cart A rises from 0 meters at 0 seconds to 6 meters at 2 seconds. Cart B falls from 12 meters to 6 meters over the same time. At 2 seconds they meet and move together, rising to 10 meters at 6 seconds." });
const barsAB = bars({ labels: ["Cart A", "Cart B", "System"], series: [{ name: "Before", values: [12, 0, 12] }, { name: "After", values: [2.4, 9.6, 12] }], y: [0, 14], step: 2, yname: "p (kg·m/s)", fmt: (v) => v.toFixed(1),
  alt: "Bar chart of momentum in kilogram meters per second. Before the collision: cart A 12.0, cart B 0.0, system 12.0. After: cart A 2.4, cart B 9.6, system 12.0." });
const cartsStick = cartPair([{ x: 110, label: "2.0 kg", v: 3, vlabel: "3.0 m/s" }, { x: 330, label: "1.0 kg", vlabel: "at rest" }],
  "Before the collision, a 2.0 kilogram cart moves right at 3.0 meters per second toward a 1.0 kilogram cart at rest.");
const cartsOpp = cartPair([{ x: 110, label: "3.0 kg", v: 3, vlabel: "3.0 m/s" }, { x: 330, label: "5.0 kg", v: -2, vlabel: "2.0 m/s" }],
  "Before the collision, a 3.0 kilogram cart moves right at 3.0 meters per second and a 5.0 kilogram cart moves left at 2.0 meters per second, toward each other.");
const clayCart = scene({ width: 440, height: 170, alt: "A lump of clay of mass m moves to the right with speed v0 toward a cart of mass M at rest on a level track.", items: [
  { ground: { from: [10, 40], to: [430, 40] } },
  { circle: { x: 60, y: 110, r: 11, label: "m" } }, { arrow: { from: [80, 110], to: [150, 110], kind: "velocity", label: "v_0" } },
  { circle: { x: 270, y: 47, r: 7 } }, { circle: { x: 350, y: 47, r: 7 } }, { rect: { x: 310, y: 75, w: 110, h: 30, label: "M" } },
] });

// ---- sets ----
export const sets = {
  "p4r-s01": { name: "Position of a cart", label: "Graph", intro: r`The graph shows the position of a $2.0$ kg cart on a straight track as a function of time.`, sources: one([{ svg: xtCart }]) },
  "p4r-s02": { name: "A force on a cart", label: "Graph", intro: r`A $3.0$ kg cart on a level, frictionless track is acted on by a horizontal force. The graph shows the force as a function of time, with the positive direction to the right.`, sources: one([{ svg: ftTrap }]) },
  "p4r-s03": { name: "A force that changes sign", label: "Graph", intro: r`A $2.0$ kg cart starts from rest on a level, frictionless track. A horizontal force acts on it as shown, with the positive direction to the right.`, sources: one([{ svg: ftSign }]) },
  "p4r-s04": { name: "A ball thrown upward", label: "Graphs", intro: r`A $0.50$ kg ball is thrown straight up at $12$ m/s and returns to its starting height. Ignore air resistance. Up is the positive direction. Four graphs of the ball's momentum $p$ as a function of time $t$ are shown.`, sources: pics("Graph", pBall) },
  "p4r-s05": { name: "A ball bouncing off the floor", label: "Graph", intro: r`A $0.25$ kg ball moving straight down at $3.0$ m/s hits a floor and rebounds. The graph shows the net force on the ball as a function of time during the contact, with up as the positive direction.`, sources: one([{ svg: ftFloor }]) },
  "p4r-s06": { name: "Momentum of a cart", label: "Graphs", intro: r`The first graph shows the momentum of a cart on a straight track as a function of time. The positive direction is to the right. Four graphs of force are shown below it.`,
    sources: [{ title: "Momentum of the cart", blocks: [{ svg: ptCart }] }, ...pics("Graph", fPics, "Net force on the cart")] },
  "p4r-s07": { name: "Four collisions", label: "Table", intro: r`Four objects each take part in a collision. The table gives each object's mass and its velocity just before and just after its collision. Positive is to the right.`,
    sources: one([{ table: { head: ["Object", "Mass (kg)", "Velocity before (m/s)", "Velocity after (m/s)"], rows: [["P", "$3.0$", "$+2.0$", "$0$"], ["Q", "$0.50$", "$+10$", "$-10$"], ["R", "$4.0$", "$+1.0$", "$+3.0$"], ["S", "$1.5$", "$-4.0$", "$+2.0$"]] } }]) },
  "p4r-s08": { name: "Cart collision trials", label: "Table", intro: r`Students send a cart of mass $m_1$ into a second cart of mass $m_2$ on a low-friction track and record the velocities of both carts just before and just after the collision. Positive is to the right.`,
    sources: one([{ table: { head: ["Trial", "$m_1$ (kg)", "$v_1$ before (m/s)", "$m_2$ (kg)", "$v_2$ before (m/s)", "$v_1$ after (m/s)", "$v_2$ after (m/s)"],
      rows: [["1", "$1.0$", "$+4.0$", "$3.0$", "$0$", "$-2.0$", "$+2.0$"], ["2", "$2.0$", "$+3.0$", "$1.0$", "$-3.0$", "$+1.0$", "$+1.0$"], ["3", "$1.0$", "$+5.0$", "$1.0$", "$0$", "$+1.0$", "$+3.0$"]] } }]) },
  "p4r-s09": { name: "Two carts that stick", label: "Diagram", intro: r`A $2.0$ kg cart moving at $3.0$ m/s collides with a $1.0$ kg cart at rest on a low-friction track, as shown. The carts stick together.`, sources: one([{ svg: cartsStick }]) },
  "p4r-s10": { name: "Carts approaching each other", label: "Diagram", intro: r`Two carts move toward each other on a low-friction track, as shown. When they collide, they stick together.`, sources: one([{ svg: cartsOpp }]) },
  "p4r-s11": { name: "Positions of two carts", label: "Graph", intro: r`Cart A has a mass of $2.0$ kg. Cart B has an unknown mass. The carts move on a low-friction track and collide once. The graph shows the position of each cart as a function of time. After the collision the carts move together.`, sources: one([{ svg: xtMerge }]) },
  "p4r-s12": { name: "Momentum bar chart", label: "Chart", intro: r`Cart A, of mass $3.0$ kg, moves to the right and collides with cart B, of mass $2.0$ kg, which is at rest on a low-friction track. The bar chart shows the momentum of each cart, and of the system, just before and just after the collision. All of the momenta are to the right.`, sources: one([{ svg: barsAB }]) },
  "p4r-s13": { name: "A ball dropped onto a force sensor", label: "Free response", frq: "EDA",
    intro: r`A student wants to determine how much of its speed a ball keeps when it bounces. The ball has a mass of $0.050$ kg. The student drops the ball from rest from different heights $h$ onto a force sensor on a table. The sensor records the force it exerts on the ball as a function of time during the bounce. The ball rebounds straight up with a speed that is $r$ times its speed just before it hit the sensor, where $r$ is the same for every drop. The contact time is short, so the impulse of the ball's weight during the contact can be ignored. Use $g = 9.8$ m/s².`,
    sources: one([{ p: r`The student's data for five drops are shown. $J$ is the magnitude of the impulse the sensor exerted on the ball, found from the area under the force-time graph.` }, { table: { head: ["$h$ (m)", "$0.20$", "$0.40$", "$0.60$", "$0.80$", "$1.00$"], rows: [["$J$ (N·s)", "$0.16$", "$0.22$", "$0.27$", "$0.32$", "$0.35$"]] } }], "Data") },
  "p4r-s14": { name: "Clay thrown at a cart", label: "Free response", frq: "QQT",
    intro: r`A lump of clay of mass $m$ is thrown horizontally with speed $v_0$ toward a cart of mass $M$ that is at rest on a level, low-friction track, as shown. The clay hits the cart and sticks to it. Express algebraic answers in terms of $m$, $M$, and $v_0$.`,
    sources: one([{ svg: clayCart }]) },
};

// ---- multiple choice ----
const mc = (id, topic, difficulty, o) => ({ id: `p4r-${id}`, type: "mcq", skill: "u4", topic, difficulty, ...o, answer: 0 });
const S = (n) => `p4r-s${String(n).padStart(2, "0")}`;

const mcq = [
  // 4.1
  mc("m01", "4.1", "easy", { stem: r`Cart X has four times the mass of cart Y. The two carts have momenta of equal magnitude.`, question: "How does the speed of cart X compare with the speed of cart Y?",
    choices: ["One fourth as great", "One half as great", "Four times as great", "The same"],
    why: [r`Momentum is $mv$. With equal magnitudes, $4m\,v_X = m\,v_Y$, so $v_X = v_Y/4$.`, r`This would be true if cart X had twice the mass. With four times the mass, the speed must be one fourth.`, r`This reverses the ratio: the heavier cart needs the smaller speed to have the same momentum.`, r`Equal speeds would give cart X four times the momentum of cart Y, because its mass is four times as great.`] }),
  mc("m02", "4.1", "easy", { set: S(1), question: r`What is the magnitude of the cart's momentum between $t = 0$ and $t = 2$ s?`,
    choices: [r`$4.0$ kg·m/s`, r`$8.0$ kg·m/s`, r`$2.0$ kg·m/s`, r`$1.0$ kg·m/s`],
    why: [r`The velocity is the slope: $(4 - 0)\text{ m}/(2 - 0)\text{ s} = 2.0$ m/s. Then $p = mv = (2.0)(2.0) = 4.0$ kg·m/s.`, r`This multiplies the mass by the displacement, $(2.0)(4) = 8.0$, instead of by the velocity.`, r`This is the velocity alone. Momentum is the mass times the velocity.`, r`This divides the velocity by the mass, $2.0/2.0$, instead of multiplying.`] }),
  mc("m03", "4.1", "moderate", { set: S(1), question: r`How does the cart's momentum at $t = 5$ s compare with its momentum at $t = 1$ s?`,
    choices: ["Equal in size and opposite in direction", "The same size and pointing in the same direction", "Zero at both times, because the cart is at the same position", "Larger at 5 s, because the cart has gone farther"],
    why: [r`At $t = 1$ s the slope is $+2.0$ m/s, so $p = +4.0$ kg·m/s. At $t = 5$ s the slope is $(-2 - 4)/(7 - 4) = -2.0$ m/s, so $p = -4.0$ kg·m/s. The momenta have the same size and opposite directions.`, r`This uses the speeds only. The slope is positive at 1 s and negative at 5 s, so the directions differ.`, r`The cart is at $x = 2$ m at both times, but momentum depends on the slope, not on the position.`, r`Distance from the start does not set momentum. The speeds at the two times are equal.`] }),
  mc("m04", "4.1", "moderate", { stem: r`A $0.20$ kg ball is dropped from rest from a height of $1.8$ m above a floor. Ignore air resistance.`, question: "What is the magnitude of the ball's momentum just before it reaches the floor?",
    choices: [r`$1.2$ kg·m/s`, r`$0.84$ kg·m/s`, r`$3.5$ kg·m/s`, r`$0.12$ kg·m/s`],
    why: [r`$v = \sqrt{2gh} = \sqrt{2(9.8)(1.8)} = 5.9$ m/s, so $p = mv = (0.20)(5.9) = 1.2$ kg·m/s.`, r`This uses $v = \sqrt{gh}$ and leaves out the factor of 2.`, r`This is $mgh = 3.5$, the energy in joules, not the momentum.`, r`This is the mass times the fall time, $(0.20)(0.61)$, not the mass times the speed.`] }),
  mc("m05", "4.1", "moderate", { stem: r`Object X has twice the mass of object Y. The two objects have the same kinetic energy.`, question: r`What is the ratio $p_X / p_Y$ of their momenta?`,
    choices: [r`$\sqrt{2}$`, r`$2$`, r`$\dfrac{1}{\sqrt{2}}$`, r`$1$`],
    why: [r`$K = \dfrac{p^2}{2m}$, so $p = \sqrt{2mK}$. With equal $K$, $p_X / p_Y = \sqrt{m_X / m_Y} = \sqrt{2}$.`, r`This would be the ratio if the speeds were equal. Equal kinetic energy means the heavier object is slower.`, r`This inverts the ratio. The heavier object has the greater momentum.`, r`Equal momenta would need equal $mv$, but equal kinetic energy needs equal $mv^2$, so the momenta differ.`] }),
  mc("m06", "4.1", "easy", { stem: r`A $4.0$ kg cart moves to the right at $2.0$ m/s on a track. A $2.0$ kg cart on the same track moves to the left at $3.0$ m/s.`, question: "What is the total momentum of the two-cart system?",
    choices: [r`$2.0$ kg·m/s to the right`, r`$14$ kg·m/s to the right`, r`$2.0$ kg·m/s to the left`, r`$0$`],
    why: [r`Take right as positive: $(4.0)(2.0) + (2.0)(-3.0) = 8.0 - 6.0 = +2.0$ kg·m/s.`, r`This adds the magnitudes, $8.0 + 6.0$, but momentum is a vector and the carts move in opposite directions.`, r`This has the correct size but the wrong sign. The right-moving cart has the larger momentum.`, r`The momenta have different sizes, $8.0$ and $6.0$ kg·m/s, so they do not cancel.`] }),

  // 4.2
  mc("m07", "4.2", "easy", { set: S(2), question: r`What is the magnitude of the impulse on the cart between $t = 2$ s and $t = 4$ s?`,
    choices: [r`$12$ N·s`, r`$6.0$ N·s`, r`$21$ N·s`, r`$24$ N·s`],
    why: [r`Impulse is the area under the graph. From 2 s to 4 s the force is $6.0$ N, so the area is $(6.0)(2.0) = 12$ N·s.`, r`This is the force alone, $6.0$ N. The impulse is the force times the time.`, r`This is the area for the whole graph, $6 + 12 + 3 = 21$ N·s.`, r`This uses a time of $4$ s instead of the $2$ s interval.`] }),
  mc("m08", "4.2", "moderate", { set: S(2), stem: r`At $t = 0$ the cart is moving to the left at $2.0$ m/s.`, question: r`What is the velocity of the cart at $t = 5$ s?`,
    choices: [r`$5.0$ m/s to the right`, r`$7.0$ m/s to the right`, r`$9.0$ m/s to the right`, r`$5.0$ m/s to the left`],
    why: [r`The area is $\tfrac12(2)(6) + (2)(6) + \tfrac12(1)(6) = 21$ N·s. With right as positive, $J = m(v - v_0)$ gives $21 = 3.0(v + 2.0)$, so $v = +5.0$ m/s.`, r`This treats the cart as starting from rest, $21/3.0 = 7.0$, and ignores its initial velocity.`, r`This adds the initial speed to the change in velocity, $7.0 + 2.0$, but the cart started in the opposite direction.`, r`This has the right size but the wrong direction. The impulse is positive and larger than the initial momentum, $6.0$ kg·m/s, so the final velocity is to the right.`] }),
  mc("m09", "4.2", "difficult", { set: S(2), stem: r`At $t = 0$ the cart is moving to the left at $2.0$ m/s.`, question: r`What is the change in the cart's kinetic energy from $t = 0$ to $t = 5$ s?`,
    choices: [r`$32$ J`, r`$38$ J`, r`$74$ J`, r`$21$ J`],
    why: [r`The area under the graph is $21$ N·s, so $v = -2.0 + 21/3.0 = +5.0$ m/s. Then $\Delta K = \tfrac12(3.0)(5.0^2 - 2.0^2) = 31.5 \approx 32$ J.`, r`This is the final kinetic energy, $\tfrac12(3.0)(5.0)^2 = 37.5$ J, not the change.`, r`This squares the change in velocity, $\tfrac12(3.0)(7.0)^2$, but kinetic energy depends on the squares of the velocities.`, r`This is the impulse in newton-seconds, $21$, which is not an energy.`] }),
  mc("m10", "4.2", "moderate", { set: S(3), question: "What is the greatest speed of the cart during the 5 s shown, and when does it occur?",
    choices: [r`$6.0$ m/s at $3.0$ s`, r`$12$ m/s at $3.0$ s`, r`$6.0$ m/s at $5.0$ s`, r`$2.0$ m/s at $3.0$ s`],
    why: [r`From 0 to 3 s the impulse is $(4)(3) = 12$ N·s, so $v = 12/2.0 = 6.0$ m/s. After 3 s the force is opposite to the velocity and the cart slows, so the speed is greatest at $3.0$ s.`, r`This is the change in momentum, $12$ kg·m/s, not divided by the mass.`, r`The impulse from 3 s to 5 s is $-12$ N·s, so the cart is at rest at $5.0$ s, not at its greatest speed.`, r`This is the acceleration, $F/m = 2.0$ m/s², not a speed.`] }),
  mc("m11", "4.2", "moderate", { set: S(4), question: "Which graph shows the ball's momentum from the moment it is thrown until it returns to its starting height?",
    choices: ["Graph C", "Graph A", "Graph B", "Graph D"],
    why: [r`Gravity is the only net force, so the momentum changes at the constant rate $-mg$. The graph is a straight line with a negative slope that starts at $+6.0$ kg·m/s, crosses zero at the top, and ends at $-6.0$ kg·m/s.`, r`This shows the magnitude of the momentum, which is not the vector. The ball is moving down in the second half, so the momentum is negative.`, r`This line stops at zero. The ball returns to its starting height moving down, so its momentum is not zero.`, r`This line starts at a negative value. The ball is thrown up, so the initial momentum is positive.`] }),
  mc("m12", "4.2", "easy", { set: S(5), question: "What is the average net force on the ball during the contact?",
    choices: [r`$20$ N`, r`$40$ N`, r`$1.0$ N`, r`$15$ N`],
    why: [r`The impulse is the area, $\tfrac12(0.050\text{ s})(40\text{ N}) = 1.0$ N·s. The average net force is $J/\Delta t = 1.0/0.050 = 20$ N.`, r`This is the peak force, not the average.`, r`This is the impulse in N·s. The average force is the impulse divided by the contact time.`, r`This uses only the incoming momentum, $(0.25)(3.0)/0.050 = 15$ N.`] }),
  mc("m13", "4.2", "moderate", { set: S(5), question: "What is the velocity of the ball just after it leaves the floor?",
    choices: [r`$1.0$ m/s upward`, r`$4.0$ m/s upward`, r`$7.0$ m/s upward`, r`$1.0$ m/s downward`],
    why: [r`With up as positive, $p_i = (0.25)(-3.0) = -0.75$ kg·m/s and $J = +1.0$ N·s. Then $p_f = -0.75 + 1.0 = +0.25$ kg·m/s, so $v = 0.25/0.25 = +1.0$ m/s.`, r`This is $J/m$, which leaves out the initial momentum.`, r`This treats the incoming momentum as $+0.75$, so $p_f = 0.75 + 1.0$ and $v = 1.75/0.25 = 7.0$ m/s.`, r`This has the right size and the wrong sign. The impulse is greater than the incoming momentum, so the ball moves up.`] }),
  mc("m14", "4.2", "easy", { set: S(6), question: r`What is the average net force on the cart from $t = 2$ s to $t = 7$ s?`,
    choices: [r`$2.4$ N in the negative direction`, r`$2.4$ N in the positive direction`, r`$1.2$ N in the negative direction`, r`$1.7$ N in the negative direction`],
    why: [r`The net force is the rate of change of momentum: $\dfrac{-6 - 6}{7 - 2} = -2.4$ N.`, r`This has the right size and the wrong sign. The momentum decreases, so the force is negative.`, r`This uses the final momentum only, $-6/5$, and leaves out the initial momentum of $+6$.`, r`This divides the change by the whole $7$ s instead of the $5$ s interval, $12/7$.`] }),
  mc("m15", "4.2", "difficult", { set: S(6), question: "Which graph shows the net force on the cart as a function of time?",
    choices: ["Graph B", "Graph A", "Graph C", "Graph D"],
    why: [r`The force is the slope of the momentum graph: $+3$ N from 0 to 2 s, $0$ from 2 to 4 s, and $-4$ N from 4 to 7 s. The graph with those three steps is correct.`, r`This has the correct size for the last step but the wrong sign. The momentum decreases from 4 to 7 s, so the force is negative.`, r`This reverses the sign of the first step and also the last step. The momentum increases from 0 to 2 s, so the force is positive there.`, r`This copies the shape of the momentum graph. The force is the slope of that graph, not its height.`] }),
  mc("m16", "4.2", "moderate", { set: S(7), question: "Which choice ranks the magnitudes of the impulses on the objects from greatest to least?",
    choices: ["Q > S > R > P", "R > P > S > Q", "R > Q > S > P", "Q > S > P = R"],
    why: [r`$|\Delta p| = m|\Delta v|$ with signs kept: $P: 6.0$, $Q: (0.50)(20) = 10$, $R: (4.0)(2.0) = 8.0$, $S: (1.5)(6.0) = 9.0$. So $Q > S > R > P$.`, r`This uses the change in speed, which makes Q zero because it rebounds at the same speed. Impulse depends on the change in velocity.`, r`This ranks the momenta after the collision, $12, 5.0, 3.0, 0$, not the changes.`, r`This ranks the changes in velocity only, $20, 6.0, 2.0, 2.0$, and ignores the masses.`] }),
  mc("m17", "4.2", "easy", { stem: r`A crash-test dummy of mass $70$ kg is moving at $15$ m/s when its seat belt and airbag bring it to rest in $0.060$ s.`, question: "What is the magnitude of the average net force on the dummy during the stop?",
    choices: [r`$1.8 \times 10^{4}$ N`, r`$1.1 \times 10^{3}$ N`, r`$63$ N`, r`$2.5 \times 10^{2}$ N`],
    why: [r`$F = \dfrac{m\,\Delta v}{\Delta t} = \dfrac{(70)(15)}{0.060} = 1.75 \times 10^{4} \approx 1.8 \times 10^{4}$ N.`, r`This is the change in momentum, $1050$ kg·m/s, which has not been divided by the time.`, r`This multiplies the change in momentum by the time instead of dividing.`, r`This is $\Delta v / \Delta t$, which leaves out the mass.`] }),
  mc("m18", "4.2", "moderate", { stem: r`A $0.15$ kg ball hits a wall at $20$ m/s and rebounds along the same line at $14$ m/s. The ball is in contact with the wall for $5.0$ ms.`, question: "What is the magnitude of the average force the wall exerts on the ball?",
    choices: [r`$1.0 \times 10^{3}$ N`, r`$1.8 \times 10^{2}$ N`, r`$4.2 \times 10^{2}$ N`, r`$6.0 \times 10^{2}$ N`],
    why: [r`The velocity changes from $+20$ to $-14$ m/s, so $|\Delta p| = (0.15)(34) = 5.1$ kg·m/s. Then $F = 5.1/0.0050 = 1.0 \times 10^{3}$ N.`, r`This subtracts the speeds, $20 - 14 = 6$, but the ball reverses direction, so the speeds add.`, r`This uses only the rebound speed, $(0.15)(14)/0.0050$.`, r`This uses only the incoming speed, $(0.15)(20)/0.0050$.`] }),
  mc("m19", "4.2", "easy", { stem: r`In a car crash, a passenger stops in a longer time when an airbag is used than when the passenger hits a rigid dashboard.`, question: "How does the airbag change the passenger's change in momentum and the average force on the passenger?",
    choices: ["The change in momentum is the same, and the average force is smaller", "The change in momentum is smaller, and the average force is also smaller", "The change in momentum is the same, and the average force is also larger", "The change in momentum is smaller, and the average force is unchanged"],
    why: [r`The passenger goes from the same speed to rest either way, so $\Delta p$ is the same. Since $F_{\text{avg}} = \Delta p / \Delta t$, a longer time gives a smaller average force.`, r`The change in momentum depends on the mass and the speed change, which do not depend on the airbag.`, r`A longer stopping time makes the average force smaller, not larger.`, r`The change in momentum is the same, and the force changes because the time changes.`] }),
  mc("m20", "4.2", "moderate", { stem: r`Two carts, one of mass $m$ and one of mass $4m$, start from rest on a level, frictionless track. The same constant horizontal force pushes each cart through the same distance.`, question: "How do the magnitudes of the momenta of the carts compare after the push?",
    choices: ["The $4m$ cart has twice the momentum of the $m$ cart", "The $4m$ cart has four times the momentum of the $m$ cart", "The carts have equal momenta, because the same force acts on each", "The $m$ cart has twice as much momentum as the $4m$ cart"],
    why: [r`The work $Fd$ is the same, so the kinetic energies are equal. With $p = \sqrt{2mK}$, the momentum is proportional to $\sqrt{m}$, so the $4m$ cart has $\sqrt{4} = 2$ times the momentum.`, r`This takes the momentum to be proportional to the mass. At equal kinetic energy it is proportional to $\sqrt{m}$.`, r`Equal momenta would need equal times of push. The carts take different times to cover the same distance.`, r`This inverts the comparison. The heavier cart is slower but has the greater momentum.`] }),
  mc("m21", "4.2", "moderate", { stem: r`A $2.0$ kg block slides on a level surface at $6.0$ m/s and comes to rest after $3.0$ s. Friction is the only horizontal force.`, question: "What is the coefficient of kinetic friction between the block and the surface?",
    choices: [r`$0.20$`, r`$0.41$`, r`$0.61$`, r`$2.0$`],
    why: [r`The friction impulse equals the change in momentum: $\mu m g\,t = m v$, so $\mu = \dfrac{v}{gt} = \dfrac{6.0}{(9.8)(3.0)} = 0.20$.`, r`This is $F/g$ with $F = 4.0$ N. The friction force is $\mu m g$, so the mass must be divided out too.`, r`This is $v/g$ and leaves out the time.`, r`This is the acceleration, $v/t = 2.0$ m/s², not the coefficient of friction.`] }),
  mc("m22", "4.2", "moderate", { stem: r`A $0.40$ kg ball is thrown at $20$ m/s at an angle of $30°$ above the horizontal and lands at the height from which it was thrown. Ignore air resistance.`, question: "What is the magnitude of the total impulse gravity exerts on the ball during the flight?",
    choices: [r`$8.0$ N·s`, r`$0$ N·s`, r`$16$ N·s`, r`$14$ N·s`],
    why: [r`Gravity acts only vertically. The vertical velocity changes from $+10$ to $-10$ m/s, so $|J| = (0.40)(20) = 8.0$ N·s.`, r`The speed is the same at launch and landing, but the velocity is not. The vertical component reverses.`, r`This uses the full speed, $2(0.40)(20)$, but gravity changes only the vertical component.`, r`This uses the horizontal component, $2(0.40)(20)\cos 30°$. The horizontal velocity does not change.`] }),
  mc("m23", "4.2", "difficult", { stem: r`A ball of mass $m$ is dropped from rest at a height $h$ above a floor and rebounds to a height $h/4$. The ball is in contact with the floor for a time $\Delta t$. Ignore air resistance.`, question: "What is the magnitude of the average force the floor exerts on the ball during the contact?",
    choices: [r`$\dfrac{3m\sqrt{2gh}}{2\,\Delta t} + mg$`, r`$\dfrac{3m\sqrt{2gh}}{2\,\Delta t}$`, r`$\dfrac{3m\sqrt{2gh}}{2\,\Delta t} - mg$`, r`$\dfrac{m\sqrt{2gh}}{2\,\Delta t} + mg$`],
    why: [r`The speed before is $\sqrt{2gh}$ and after is $\sqrt{2g(h/4)} = \tfrac12\sqrt{2gh}$, in opposite directions, so $\Delta p = \tfrac32 m\sqrt{2gh}$. The net force is $F - mg = \Delta p/\Delta t$, so $F = \dfrac{3m\sqrt{2gh}}{2\Delta t} + mg$.`, r`This is the net force. The floor also has to support the weight, so $mg$ must be added.`, r`This subtracts the weight. The floor force points up, and the net force is $F - mg$, so $mg$ is added.`, r`This takes the change in speed, $\sqrt{2gh} - \tfrac12\sqrt{2gh}$, but the ball reverses direction, so the speeds add.`] }),

  // 4.3
  mc("m24", "4.3", "easy", { stem: r`Cart 1 rolls on a level, low-friction track toward cart 2, which is at rest. The carts collide and bounce apart.`, question: "For which choice of system is the total momentum constant during the collision?",
    choices: ["Both carts together", "Cart 1 only", "Cart 2 only", "Cart 1 and the track together"],
    why: [r`The forces the carts exert on each other are internal to this system, and the net external force is zero. Its momentum is constant.`, r`Cart 2 exerts a force on cart 1, which is external to this system, so its momentum changes.`, r`Cart 1 exerts a force on cart 2, which is external to this system, so its momentum changes.`, r`Cart 2 still exerts an external force on this system. The track does not remove that force.`] }),
  mc("m25", "4.3", "easy", { stem: r`A $5.0$ kg rifle at rest fires a $0.010$ kg bullet at $500$ m/s. Ignore any force from the shooter.`, question: "What is the speed and direction of the rifle just after the shot?",
    choices: [r`$1.0$ m/s opposite to the bullet's direction`, r`$5.0$ m/s opposite to the bullet's direction`, r`$22$ m/s opposite to the bullet's direction`, r`$1.0$ m/s in the bullet's direction`],
    why: [r`The total momentum starts at zero: $0 = (0.010)(500) + (5.0)v$, so $v = -1.0$ m/s, opposite to the bullet.`, r`This is the bullet's momentum, $5.0$ kg·m/s, which has not been divided by the rifle's mass.`, r`This assumes the rifle and bullet get equal kinetic energy. Only the momentum is conserved.`, r`The rifle recoils. The total momentum stays zero, so the rifle moves opposite to the bullet.`] }),
  mc("m26", "4.3", "easy", { stem: r`A $3.0$ kg fish swimming east at $1.0$ m/s swallows a $1.0$ kg fish at rest. Ignore the force of the water.`, question: "What is the velocity of the larger fish just after it swallows the smaller fish?",
    choices: [r`$0.75$ m/s east`, r`$1.0$ m/s east`, r`$0.50$ m/s east`, r`$1.5$ m/s east`],
    why: [r`$(3.0)(1.0) + 0 = (4.0)v$, so $v = 0.75$ m/s east.`, r`This ignores the added mass. The mass that moves increases, so the speed must drop.`, r`This averages the two initial speeds, $(1.0 + 0)/2$. Momentum conservation weights them by mass.`, r`This divides by the difference of the masses, $3.0/(3.0 - 1.0)$, instead of the sum.`] }),
  mc("m27", "4.3", "easy", { set: S(8), question: "Which trial's data could not come from the collision of an isolated two-cart system?",
    choices: ["Trial 3", "Trial 1", "Trial 2", "None, because momentum is conserved in every collision"],
    why: [r`Trial 3 has $p_i = (1.0)(5.0) = 5.0$ kg·m/s and $p_f = (1.0)(1.0) + (1.0)(3.0) = 4.0$ kg·m/s. The momentum changed, so the carts were not isolated or a measurement is wrong.`, r`In Trial 1, $p_i = 4.0$ and $p_f = -2.0 + 6.0 = 4.0$ kg·m/s. Momentum is conserved. A cart that reverses direction does not violate conservation.`, r`In Trial 2, $p_i = 6.0 - 3.0 = 3.0$ and $p_f = 2.0 + 1.0 = 3.0$ kg·m/s. Momentum is conserved. Losing kinetic energy does not violate it.`, r`Momentum is conserved only for an isolated system. Data that show a change mean the carts were not isolated or a measurement is wrong.`] }),
  mc("m28", "4.3", "easy", { set: S(9), question: "What is the speed of the carts just after the collision?",
    choices: [r`$2.0$ m/s`, r`$1.5$ m/s`, r`$3.0$ m/s`, r`$1.0$ m/s`],
    why: [r`$(2.0)(3.0) + 0 = (3.0)v$, so $v = 2.0$ m/s.`, r`This averages the two initial speeds, $(3.0 + 0)/2$.`, r`This ignores the added mass. The speed must drop because more mass moves.`, r`This multiplies the initial speed by the small cart's share of the mass, $3.0 \times \tfrac13$, instead of the large cart's share.`] }),
  mc("m29", "4.3", "moderate", { set: S(10), question: "What is the velocity of the carts just after the collision?",
    choices: [r`$0.13$ m/s to the left`, r`$0.13$ m/s to the right`, r`$2.4$ m/s to the left`, r`$0.50$ m/s to the right`],
    why: [r`With right as positive: $(3.0)(3.0) + (5.0)(-2.0) = -1.0$ kg·m/s. Then $v = -1.0/8.0 = -0.125$ m/s, which is $0.13$ m/s to the left.`, r`This has the correct size and the wrong sign. The left-moving cart has the larger momentum, $10$ against $9.0$ kg·m/s.`, r`This adds the magnitudes of the momenta, $(9.0 + 10)/8.0$. The momenta are in opposite directions and subtract.`, r`This averages the two velocities, $(3.0 - 2.0)/2$, and ignores the masses.`] }),
  mc("m30", "4.3", "moderate", { set: S(11), question: "What is the mass of cart B?",
    choices: [r`$1.0$ kg`, r`$2.0$ kg`, r`$3.0$ kg`, r`$0.40$ kg`],
    why: [r`The slopes give $v_A = +3.0$ m/s, $v_B = -3.0$ m/s, and $v_f = +1.0$ m/s after. Then $(2.0)(3.0) - 3.0\,m_B = (2.0 + m_B)(1.0)$, so $m_B = 1.0$ kg.`, r`This sets the magnitudes of the momenta equal, $(2.0)(3.0) = m_B(3.0)$. The system has a net momentum, so they are not equal.`, r`This is the mass of the two carts together, $2.0 + 1.0$.`, r`This reads the final speed as $2.0$ m/s instead of $1.0$ m/s, which gives $6.0 - 3m_B = 4.0 + 2m_B$.`] }),
  mc("m31", "4.3", "moderate", { set: S(12), question: "What is the speed of cart A just after the collision?",
    choices: [r`$0.80$ m/s`, r`$2.4$ m/s`, r`$1.2$ m/s`, r`$4.0$ m/s`],
    why: [r`The bar shows $p_A = 2.4$ kg·m/s after the collision, so $v_A = p_A/m_A = 2.4/3.0 = 0.80$ m/s.`, r`This is the momentum, $2.4$ kg·m/s, read as a speed.`, r`This divides by the mass of cart B, $2.4/2.0$, instead of the mass of cart A.`, r`This is the speed of cart A before the collision, $12/3.0$. The bar for cart A after is much shorter.`] }),
  mc("m32", "4.3", "moderate", { stem: r`A shell moving horizontally at the top of its flight explodes into two fragments. Air resistance is negligible. Both fragments are in the air for a while after the explosion.`, question: "Which describes the motion of the center of mass of the two fragments while both are in the air?",
    choices: ["It follows the shell's original parabola", "It falls straight down, since one fragment may drop vertically", "It moves in a straight line at constant velocity", "It follows a new parabola that depends on how the fragments separate"],
    why: [r`The explosion forces are internal, so only gravity acts on the system. The center of mass keeps the motion the whole shell would have had.`, r`Only a fragment that happens to have zero horizontal velocity falls straight down. The center of mass keeps the shell's horizontal velocity.`, r`Gravity is an external force, so the center of mass accelerates downward at $g$.`, r`The internal forces of the explosion do not change the motion of the center of mass, so the way the fragments separate does not matter.`] }),
  mc("m33", "4.3", "moderate", { stem: r`A $5.0$ kg cart rolls at $2.0$ m/s on a level, low-friction track. A $1.0$ kg bag of sand is dropped from rest, straight down, into the cart and stays in it.`, question: "What is the speed of the cart just after the sand lands?",
    choices: [r`$1.7$ m/s`, r`$2.0$ m/s`, r`$2.5$ m/s`, r`$0.83$ m/s`],
    why: [r`The sand has no horizontal momentum, and no horizontal external force acts. $(5.0)(2.0) = (6.0)v$, so $v = 1.7$ m/s.`, r`This ignores the added mass. The horizontal momentum is shared with the sand, so the cart slows.`, r`This divides by the difference of the masses, $10/(5.0 - 1.0)$, instead of the sum.`, r`This is $5.0/6.0$. It does not use the cart's initial speed.`] }),
  mc("m34", "4.3", "moderate", { stem: r`A $1.0$ kg block moves to the right at $6.0$ m/s on a frictionless table and hits a $2.0$ kg block that is moving to the right at $1.0$ m/s. After the collision the $2.0$ kg block moves to the right at $3.0$ m/s.`, question: "What is the velocity of the $1.0$ kg block after the collision?",
    choices: [r`$2.0$ m/s to the right`, r`$0$`, r`$4.0$ m/s to the right`, r`$2.0$ m/s to the left`],
    why: [r`$(1.0)(6.0) + (2.0)(1.0) = (1.0)v + (2.0)(3.0)$, so $8.0 = v + 6.0$ and $v = +2.0$ m/s.`, r`This leaves out the initial momentum of the $2.0$ kg block: $6.0 = v + 6.0$.`, r`This leaves out the mass of the $2.0$ kg block after the collision: $6.0 + 1.0 = v + 3.0$.`, r`This treats the $2.0$ kg block as moving left initially: $6.0 - 2.0 = v + 6.0$.`] }),
  mc("m35", "4.3", "moderate", { stem: r`A block of mass $M$ moving to the right at speed $v$ collides with a block of mass $3M$ moving to the left at speed $v/2$ on a frictionless surface. The blocks stick together.`, question: "What are the speed and direction of the blocks just after the collision?",
    choices: [r`$\dfrac{v}{8}$ to the left`, r`$\dfrac{5v}{8}$ to the left`, r`$\dfrac{v}{8}$ to the right`, r`$\dfrac{3v}{8}$ to the left`],
    why: [r`Take right as positive: $Mv + 3M(-v/2) = 4M\,v_f$, so $v_f = -\dfrac{v}{8}$. The blocks move to the left, the original direction of the $3M$ block.`, r`This adds the magnitudes of the momenta, $Mv + \tfrac32 Mv$, instead of subtracting them.`, r`This has the correct size and the wrong direction. The $3M$ block has the larger momentum, $\tfrac32 Mv$.`, r`This uses only the momentum of the $3M$ block, $\tfrac32 Mv/4M$, and leaves out the momentum of the $M$ block.`] }),
  mc("m36", "4.3", "moderate", { stem: r`A $2.0$ kg object at rest breaks into two pieces, of mass $0.50$ kg and $1.5$ kg. The lighter piece moves at $6.0$ m/s.`, question: "What is the total kinetic energy of the two pieces just after the break?",
    choices: [r`$12$ J`, r`$9.0$ J`, r`$3.0$ J`, r`$2.3$ J`],
    why: [r`The total momentum is zero, so $(1.5)v = (0.50)(6.0)$ and $v = 2.0$ m/s. Then $K = \tfrac12(0.50)(6.0)^2 + \tfrac12(1.5)(2.0)^2 = 9.0 + 3.0 = 12$ J.`, r`This is the kinetic energy of the lighter piece alone.`, r`This is the kinetic energy of the heavier piece alone.`, r`This uses $p^2/2m$ with the whole $2.0$ kg mass, $(3.0)^2/[2(2.0)]$, instead of the mass of each piece.`] }),
  mc("m37", "4.3", "difficult", { stem: r`A $2.0$ kg block is released from rest at the top of a smooth curved ramp of height $0.80$ m. The ramp is fixed to a $6.0$ kg cart that can roll without friction on a level track. The block slides to the bottom, where the ramp is horizontal.`, question: "What is the speed of the block relative to the ground when it reaches the bottom of the ramp?",
    choices: [r`$3.4$ m/s`, r`$4.0$ m/s`, r`$4.6$ m/s`, r`$1.1$ m/s`],
    why: [r`Horizontal momentum is conserved: $2.0\,v_b = 6.0\,v_c$, so $v_c = v_b/3$. Energy is conserved: $(2.0)(9.8)(0.80) = \tfrac12(2.0)v_b^2 + \tfrac12(6.0)v_c^2 = \tfrac43 v_b^2$. So $v_b = 3.4$ m/s.`, r`This is $\sqrt{2gh}$, which applies only if the ramp is fixed. Here the cart takes some of the energy.`, r`This is the speed of the block relative to the cart, $3.4 + 1.1$, not relative to the ground.`, r`This is the speed of the cart, $v_c = v_b/3$, not of the block.`] }),
  mc("m38", "4.3", "difficult", { stem: r`A $1.0$ kg cart moving to the right at $6.0$ m/s hits a $2.0$ kg cart at rest and sticks to it. The combined carts then hit a $1.0$ kg cart moving to the left at $4.0$ m/s and stick to it. All motion is on a low-friction track.`, question: "What is the velocity of the final combined carts?",
    choices: [r`$0.50$ m/s to the right`, r`$2.5$ m/s to the right`, r`$0.50$ m/s to the left`, r`$0.67$ m/s to the right`],
    why: [r`After the first collision, $(1.0)(6.0) = (3.0)v_1$, so $v_1 = 2.0$ m/s. After the second, $(3.0)(2.0) + (1.0)(-4.0) = (4.0)v_2$, so $v_2 = +0.50$ m/s.`, r`This takes the last cart's momentum as positive: $(6.0 + 4.0)/4.0$.`, r`This has the right size and the wrong sign. The $3.0$ kg carts have the larger momentum, $6.0$ against $4.0$ kg·m/s.`, r`This divides the net momentum by $3.0$ kg instead of the full $4.0$ kg, $(6.0 - 4.0)/3.0$.`] }),

  // 4.4
  mc("m39", "4.4", "easy", { set: S(9), question: "How much kinetic energy is converted to other forms in the collision?",
    choices: [r`$3.0$ J`, r`$6.0$ J`, r`$9.0$ J`, r`$0$ J`],
    why: [r`Before: $\tfrac12(2.0)(3.0)^2 = 9.0$ J. After, $v = 2.0$ m/s: $\tfrac12(3.0)(2.0)^2 = 6.0$ J. The loss is $9.0 - 6.0 = 3.0$ J.`, r`This is the kinetic energy after the collision, not the amount lost.`, r`This is the kinetic energy before the collision, not the amount lost.`, r`Kinetic energy is conserved only in an elastic collision. When objects stick, kinetic energy is lost.`] }),
  mc("m40", "4.4", "easy", { stem: r`A steel ball is dropped onto a steel plate fixed to the floor. The ball rebounds to $90\%$ of the height from which it was dropped.`, question: "How should the collision between the ball and the plate be classified?",
    choices: ["Inelastic, because some kinetic energy is lost", "Elastic, because the ball rebounds from the plate", "Elastic, because the momentum of the system is conserved", "Perfectly inelastic, because the ball loses speed"],
    why: [r`The ball leaves with less speed than it arrived with, so some kinetic energy was converted to other forms. The objects do not stick, so the collision is inelastic but not perfectly inelastic.`, r`Rebounding does not make a collision elastic. Elastic means the kinetic energy is the same before and after.`, r`Momentum is conserved in every collision with no net external impulse, so it cannot be used to tell the types apart.`, r`Perfectly inelastic means the objects stick together. The ball does not stick to the plate.`] }),
  mc("m41", "4.4", "moderate", { set: S(8), question: "In which trial is the collision elastic?",
    choices: ["Trial 1 only", "Trial 2 only", "Trial 3 only", "Trials 1 and 2"],
    why: [r`Trial 1: $K_i = \tfrac12(1.0)(4.0)^2 = 8.0$ J and $K_f = \tfrac12(1.0)(2.0)^2 + \tfrac12(3.0)(2.0)^2 = 8.0$ J. The kinetic energy is the same, so it is elastic.`, r`Trial 2: $K_i = 9.0 + 4.5 = 13.5$ J and $K_f = \tfrac12(3.0)(1.0)^2 = 1.5$ J. Kinetic energy is lost, and the carts stick.`, r`Trial 3 does not even conserve momentum, and $K_i = 12.5$ J while $K_f = 5.0$ J.`, r`Momentum is conserved in both trials, but kinetic energy is conserved only in Trial 1.`] }),
  mc("m42", "4.4", "moderate", { set: S(12), question: "Which statement correctly classifies the collision?",
    choices: ["Elastic, because the kinetic energy is $24$ J both before and after", "Elastic, because the momentum of the system is the same before and after", "Inelastic, because cart A slows down and loses momentum to cart B", "Perfectly inelastic, because the carts exchange momentum during the impact"],
    why: [r`Before: $K = \dfrac{p^2}{2m} = \dfrac{12^2}{2(3.0)} = 24$ J. After: $\dfrac{2.4^2}{2(3.0)} + \dfrac{9.6^2}{2(2.0)} = 0.96 + 23.04 = 24$ J. The kinetic energy is unchanged, so the collision is elastic.`, r`Momentum is the same in every collision, so it cannot show that the collision is elastic. The kinetic energy has to be checked.`, r`A cart slowing down does not mean kinetic energy is lost. Here the kinetic energy passes to cart B.`, r`Perfectly inelastic means the carts stick and move together. Here they move apart at different speeds.`] }),
  mc("m43", "4.4", "moderate", { stem: r`A block of mass $2M$ moving at speed $v$ collides with a block of mass $M$ at rest. The blocks stick together.`, question: "What fraction of the initial kinetic energy is converted to other forms?",
    choices: [r`$\dfrac{1}{3}$`, r`$\dfrac{1}{2}$`, r`$\dfrac{2}{3}$`, r`$\dfrac{4}{9}$`],
    why: [r`$2Mv = 3M v_f$, so $v_f = \tfrac23 v$. Then $K_f = \tfrac12(3M)(\tfrac49 v^2) = \tfrac23 M v^2$ and $K_i = M v^2$. The fraction lost is $1 - \tfrac23 = \tfrac13$.`, r`This is the answer for two equal masses. The masses here are not equal.`, r`This is the fraction of the kinetic energy that remains, not the fraction lost.`, r`This is $(v_f/v)^2$, which leaves out the change in mass.`] }),
  mc("m44", "4.4", "difficult", { set: S(11), question: "How much kinetic energy is converted to other forms in the collision?",
    choices: [r`$12$ J`, r`$1.5$ J`, r`$13.5$ J`, r`$8.0$ J`],
    why: [r`The slopes give $v_A = 3.0$, $v_B = -3.0$, $v_f = 1.0$ m/s, and momentum gives $m_B = 1.0$ kg. Before: $\tfrac12(2.0)(9.0) + \tfrac12(1.0)(9.0) = 13.5$ J. After: $\tfrac12(3.0)(1.0)^2 = 1.5$ J. The loss is $12$ J.`, r`This is the kinetic energy after the collision, not the amount lost.`, r`This is the kinetic energy before the collision, not the amount lost.`, r`This is the loss for cart A alone, $9.0 - 1.0$. Cart B also loses kinetic energy.`] }),
  mc("m45", "4.4", "difficult", { stem: r`A $0.020$ kg bullet moving horizontally at $200$ m/s embeds in a $0.98$ kg block hanging at rest from a long, light string. Ignore air resistance.`, question: "How high above its starting position does the block rise?",
    choices: [r`$0.82$ m`, r`$1.6$ m`, r`$41$ m`, r`$0.20$ m`],
    why: [r`Momentum in the collision: $(0.020)(200) = (1.0)v$, so $v = 4.0$ m/s. Energy on the swing: $\tfrac12 v^2 = g h$, so $h = 16/19.6 = 0.82$ m.`, r`This uses $h = v^2/g$ and leaves out the factor of one half.`, r`This sets the bullet's initial kinetic energy equal to the final potential energy, but the collision loses most of the kinetic energy.`, r`This uses $h = v/(2g)$. Energy conservation gives $v^2/(2g)$.`] }),
];

// ---- free response ----
const f = (id, topic, set, part, o) => ({ id: `p4r-${id}`, type: "frq", skill: "u4", topic, set, part, ...o });
const frq = [
  // QQT, 8 points
  f("f1a", "4.3", "p4r-s14", "(a)", { prompt: r`Is the total momentum of the clay-and-cart system conserved during the collision? Justify your answer.`,
    rows: [{ name: "Claim and justification", earns: r`Answers yes, because the forces between the clay and the cart are internal and there is no net external horizontal force on the system.` }],
    solution: r`Yes. The clay and the cart exert equal and opposite forces on each other, and these forces are internal to the system. The vertical forces are balanced, and the track exerts no horizontal force, so the net external horizontal force is zero and the system's horizontal momentum is conserved.` }),
  f("f1b", "4.3", "p4r-s14", "(b)(i)", { prompt: r`Derive an expression for the speed $v_f$ of the cart just after the clay sticks to it.`,
    rows: [{ name: "Conservation of momentum", earns: r`Writes $m v_0 = (m + M)v_f$, or an equivalent statement that the initial momentum equals the final momentum.` },
      { name: "Expression", earns: r`Solves to $v_f = \dfrac{m v_0}{m + M}$.` }],
    solution: r`The momentum of the system is conserved, so $m v_0 + M(0) = (m + M)v_f$. Solving, $v_f = \dfrac{m v_0}{m + M}$.` }),
  f("f1c", "4.4", "p4r-s14", "(b)(ii)", { prompt: r`Derive an expression for the fraction of the clay's initial kinetic energy that is converted to other forms during the collision.`,
    rows: [{ name: "Energies", earns: r`Writes the initial kinetic energy $\tfrac12 m v_0^2$ and the final kinetic energy $\tfrac12(m + M)v_f^2$, with $v_f$ from part (b)(i) substituted.` },
      { name: "Fraction", earns: r`Obtains the fraction $\dfrac{K_i - K_f}{K_i} = \dfrac{M}{m + M}$.` }],
    solution: r`The initial kinetic energy is $K_i = \tfrac12 m v_0^2$. The final kinetic energy is $K_f = \tfrac12(m + M)\left(\dfrac{m v_0}{m + M}\right)^2 = \dfrac{m^2 v_0^2}{2(m + M)}$. The fraction lost is $\dfrac{K_i - K_f}{K_i} = 1 - \dfrac{m}{m + M} = \dfrac{M}{m + M}$.` }),
  f("f1d", "4.2", "p4r-s14", "(c)", { prompt: r`In a second trial, the same clay is thrown at the same cart with the same speed $v_0$, but it bounces straight back with speed $v_0/2$ and does not stick. Is the cart's speed just after the collision larger than, smaller than, or the same as in part (b)(i)? Justify your answer in terms of momentum.`,
    rows: [{ name: "Claim", earns: r`States that the cart's final speed is larger than in part (b)(i).` },
      { name: "Change in the clay's momentum", earns: r`States that the clay's change in momentum is greater when it bounces back, because its velocity reverses ($mv_0$ to $-\tfrac12 mv_0$) instead of staying forward.` },
      { name: "Momentum transfer", earns: r`States that, by conservation of momentum (or equal and opposite impulses), the cart gains the momentum the clay loses, so the cart gains more momentum and, with the same cart mass $M$, has a greater speed.` }],
    solution: r`The cart's final speed is larger. When the clay sticks, it keeps a forward velocity, so its change in momentum is $m v_0 - m v_f$, which is less than $m v_0$. When it bounces back, its momentum changes from $m v_0$ to $-\tfrac12 m v_0$, a change of $\tfrac32 m v_0$, which is greater. The system's momentum is conserved, so the cart gains whatever momentum the clay loses. The cart gains more momentum in the second trial, and its mass $M$ is the same, so its speed is larger. Check: the cart's speed is $\dfrac{3 m v_0}{2M}$, which is greater than $\dfrac{m v_0}{m + M}$ because $3(m + M) > 2M$.` }),
  // EDA, 10 points
  f("f2a", "4.2", "p4r-s13", "(a)", { prompt: r`Describe how the student can measure the drop height $h$ and the impulse $J$ for one drop. Name the instrument used for each measurement.`,
    rows: [{ name: "Height", earns: r`States that the height $h$ is measured with a meter stick (or ruler), from the sensor to the point where the ball is released from rest.` },
      { name: "Impulse", earns: r`States that the force sensor, connected to a computer or interface, records force versus time, and the impulse $J$ is the area under the force-time graph for the contact.` }],
    solution: r`Hold a meter stick vertically next to the sensor and release the ball from rest at a measured height $h$ above the sensor. The force sensor, connected to a computer, records the force as a function of time while the ball is in contact. The impulse $J$ is the area under that force-time graph, found with the software.` }),
  f("f2b", "4.2", "p4r-s13", "(b)", { prompt: r`Derive an expression for the impulse $J$ in terms of $m$, $h$, $g$, and $r$. Start from a fundamental principle.`,
    rows: [{ name: "Speeds", earns: r`Finds the speed just before impact, $v = \sqrt{2gh}$, from energy conservation or kinematics, and the speed just after, $rv$, directed opposite.` },
      { name: "Impulse-momentum theorem", earns: r`Applies $J = \Delta p = m(rv) - m(-v)$ and obtains $J = m(1 + r)\sqrt{2gh}$.` }],
    solution: r`The ball falls from rest, so its speed just before impact is $v = \sqrt{2gh}$, directed down. It leaves with speed $rv$, directed up. The impulse equals the change in momentum, taking up as positive: $J = m(rv) - m(-v) = m(1 + r)v = m(1 + r)\sqrt{2gh}$.` }),
  f("f2c", "4.2", "p4r-s13", "(c)(i)", { prompt: r`The student plots a graph to find $r$ from the data. Which two quantities should be plotted so that the graph is a straight line? Explain how the slope of the line is used to find $r$.`,
    rows: [{ name: "Quantities", earns: r`Chooses $J$ and $\sqrt{h}$ (either may be on the vertical axis), or $J^2$ and $h$.` },
      { name: "Relationship", earns: r`Uses the expression from part (b), $J = m(1 + r)\sqrt{2g}\,\sqrt{h}$, to show that the plot is linear and passes through the origin.` },
      { name: "Slope", earns: r`States that the slope of the $J$ versus $\sqrt{h}$ graph is $m(1 + r)\sqrt{2g}$, so $r$ is found from $r = \dfrac{\text{slope}}{m\sqrt{2g}} - 1$ (or the equivalent for the other axes).` }],
    solution: r`Plot $J$ on the vertical axis and $\sqrt{h}$ on the horizontal axis. From part (b), $J = m(1 + r)\sqrt{2g}\,\sqrt{h}$, which has the form $y = (\text{slope})\,x$. The slope is $m(1 + r)\sqrt{2g}$, so $r = \dfrac{\text{slope}}{m\sqrt{2g}} - 1$. (Plotting $J^2$ against $h$ is also linear, with slope $m^2(1 + r)^2(2g)$.)` }),
  f("f2d", "4.2", "p4r-s13", "(c)(ii)", { prompt: r`On paper, make a graph of the data that can be used to find $r$. Label the axes, with units, and draw a best-fit line.`,
    rows: [{ name: "Axes and points", earns: r`Labels both axes with the quantities and units ($J$ in N·s and $\sqrt{h}$ in $\sqrt{\text{m}}$, or the quantities chosen in part (c)(i)), uses a linear scale that fills at least half of each axis, and plots the five points correctly (for $\sqrt{h}$: $0.45$, $0.63$, $0.77$, $0.89$, $1.00$).` },
      { name: "Best-fit line", earns: r`Draws a single straight best-fit line that follows the trend of the points (it passes close to the origin) and does not connect the points one by one.` }],
    solution: r`The graph has $\sqrt{h}$ (in $\sqrt{\text{m}}$) on the horizontal axis, with values $0.45$, $0.63$, $0.77$, $0.89$, and $1.00$, and $J$ (in N·s) on the vertical axis, with values $0.16$, $0.22$, $0.27$, $0.32$, and $0.35$. The points lie close to a straight line through the origin, and the best-fit line is drawn through them with about equal scatter above and below.` }),
  f("f2e", "4.2", "p4r-s13", "(c)(iii)", { prompt: r`Use the best-fit line to determine $r$.`,
    rows: [{ name: "Value of r", earns: r`Calculates the slope using two points on the best-fit line (not data points), about $0.35$ N·s per $\sqrt{\text{m}}$, and obtains $r \approx 0.6$ (accept $0.55$ to $0.65$).` }],
    solution: r`The best-fit line passes through the origin and through about $(1.00,\ 0.35)$, so the slope is about $0.35$ N·s/$\sqrt{\text{m}}$. Then $m\sqrt{2g} = (0.050)\sqrt{19.6} = 0.221$ N·s/$\sqrt{\text{m}}$, and $1 + r = 0.35/0.221 = 1.6$, so $r \approx 0.6$.` }),
];

export default [...mcq, ...frq];

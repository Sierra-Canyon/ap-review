// AP Physics 1 topic quiz 8.4: Fluids and Conservation Laws.
import { scene } from "../../diagrams.js";
const R = String.raw;
const one = (blocks, title = "") => [{ title, blocks }];

// The stream from a faucet: v(y)^2 = v0^2 + 2 g h and A v is constant, so the diameter shrinks as d0 * (v0^2 / v^2)^(1/4).
const faucetPic = () => {
  const top = 266, bottom = 116, v0 = 1.0, d0 = 8.0, pxPerMm = 40 / 8.0, pts = [];
  const half = (y) => { const h = ((top - y) / (top - bottom)) * 0.2; return (d0 * Math.pow(v0 * v0 / (v0 * v0 + 2 * 9.8 * h), 0.25) * pxPerMm) / 2; };
  const ys = []; for (let k = 0; k <= 10; k++) ys.push(top - ((top - bottom) * k) / 10);
  const left = ys.map((y) => [150 - half(y), y]), right = ys.map((y) => [150 + half(y), y]).reverse();
  return scene({ width: 320, height: 300, alt: "A faucet with a stream of water falling vertically. The stream has a diameter of 8.0 millimeters at the opening and becomes narrower as it falls. A dashed line 0.20 meters below the opening marks the place where the diameter of the stream is to be found.", items: [
    { poly: { points: [...left, ...right], fill: "fluid" } }, { rect: { x: 150, y: 275, w: 90, h: 18, label: "faucet" } },
    { label: { x: 180, y: 252, text: "8.0 mm", anchor: "start" } },
    { line: { from: [90, bottom], to: [215, bottom], dash: true } }, { label: { x: 200, y: bottom + 12, text: "d = ?", anchor: "start" } },
    { arrow: { from: [60, 188], to: [60, bottom], kind: "plain" } }, { arrow: { from: [60, 188], to: [60, top], kind: "plain" } }, { label: { x: 52, y: 191, text: "0.20 m", anchor: "end" } },
  ] });
};

export const sets = {
  "q84-s1": { name: "Water from a faucet", label: "Diagram", intro: R`Water leaves a faucet with a speed of $1.0$ m/s through a circular opening of diameter $8.0$ mm. The stream falls vertically. Treat the water as an ideal fluid with a constant volume flow rate, and neglect air resistance. Use $g = 9.8$ m/s².`, sources: one([{ svg: faucetPic() }]) },
  "q84-s2": { name: "A pitot tube", label: "Free response", intro: R`A pitot tube is mounted on an airplane that moves with speed $v$ through still air of density $\rho$. In the frame of the airplane, the air approaches the tube with speed $v$. Opening 1, at the tip of the tube, faces the oncoming air, and the air there is brought to rest, at pressure $P_1$. Opening 2, on the side of the tube, is in air that moves with speed $v$ at pressure $P_2$. The two openings are at the same height. A sensor measures the difference $\Delta P = P_1 - P_2$.`,
    sources: one([{ p: R`Treat the air as an ideal fluid.` }]) },
};

const items = [
  { id: "q84-m1", type: "mcq", skill: "u8", topic: "8.4", difficulty: "easy",
    stem: R`Air flows through a rectangular duct that measures $0.40$ m by $0.30$ m at a speed of $2.5$ m/s. The air leaves the duct through a vent with an opening of area $0.050$ m². Treat the air as incompressible.`,
    question: R`What is the speed of the air leaving the vent?`,
    choices: [R`$6.0$ m/s`, R`$1.0$ m/s`, R`$20$ m/s`, R`$2.5$ m/s`],
    why: [R`By the continuity equation, $A_1 v_1 = A_2 v_2$. Then $v_2 = \dfrac{(0.40)(0.30)(2.5)}{0.050} = 6.0$ m/s.`,
      R`This inverts the ratio of the areas, which makes the speed decrease when the area decreases.`,
      R`This uses only the $0.40$ m side of the duct as its area, $(0.40)(2.5)/0.050$.`,
      R`This says the speed does not change. The same volume of air per second passes through a smaller area, so the speed increases.`], answer: 0 },
  { id: "q84-m2", type: "mcq", skill: "u8", topic: "8.4", difficulty: "easy",
    stem: R`A student holds one end of a strip of paper just below the lips and blows air horizontally across the top surface of the strip. The strip rises.`,
    question: R`Which statement best explains why the strip rises?`,
    choices: [R`Faster air above the strip means a lower pressure above than below.`, R`Faster air above the strip means a higher pressure above than below.`, R`Faster air below the strip means a lower pressure below than above it.`, R`Moving air pushes up on the strip, so the pressures above and below are equal.`],
    why: [R`Bernoulli's equation says that where the speed of the air is greater, the pressure is lower. The lower pressure above the strip, with the atmospheric pressure below, gives a net upward force.`,
      R`Faster air has a lower pressure, not a higher pressure. With a higher pressure above, the strip would be pushed down.`,
      R`The student blows air across the top of the strip, so the faster air is above the strip, not below it.`,
      R`A net force on the strip requires a pressure difference. If the pressures were equal, the strip would not rise.`], answer: 0 },
  { id: "q84-m3", type: "mcq", skill: "u8", topic: "8.4", difficulty: "moderate",
    stem: R`A river is $20$ m wide and $3.0$ m deep and flows at $2.0$ m/s. Farther downstream, the river is $12$ m wide and $2.0$ m deep. Treat the water as an incompressible fluid.`,
    question: R`What is the speed of the water downstream?`,
    choices: [R`$5.0$ m/s`, R`$3.3$ m/s`, R`$3.0$ m/s`, R`$0.80$ m/s`],
    why: [R`The cross-sectional area is the width times the depth. By continuity, $v_2 = \dfrac{(20)(3.0)(2.0)}{(12)(2.0)} = 5.0$ m/s.`,
      R`This accounts for the change in width only, $(20/12)(2.0)$, and leaves out the change in depth.`,
      R`This accounts for the change in depth only, $(3.0/2.0)(2.0)$, and leaves out the change in width.`,
      R`This multiplies the speed by the ratio of the areas, $(24/60)(2.0)$, instead of dividing. A smaller area gives a greater speed.`], answer: 0 },
  { id: "q84-m4", type: "mcq", skill: "u8", topic: "8.4", difficulty: "moderate",
    stem: R`Water flows at $0.50$ m/s through a pipe with an inner diameter of $18$ mm that supplies a shower head. The shower head has $12$ identical circular holes, each with a diameter of $3.0$ mm. The water leaves all of the holes at the same speed.`,
    question: R`What is the speed of the water as it leaves each hole?`,
    choices: [R`$1.5$ m/s`, R`$18$ m/s`, R`$0.25$ m/s`, R`$3.0$ m/s`],
    why: [R`The area is proportional to the square of the diameter. By continuity, $v_{hole} = v_{pipe}\dfrac{d_{pipe}^2}{N d_{hole}^2} = (0.50)\dfrac{18^2}{(12)(3.0)^2} = 1.5$ m/s.`,
      R`This does not divide by the number of holes. The water divides among $12$ holes, so each hole carries one twelfth of the flow.`,
      R`This uses the ratio of the diameters instead of the ratio of the areas, $(0.50)(18/3.0)/12$.`,
      R`This uses the ratio of the diameters instead of the ratio of the areas, $(0.50)(18/3.0)$, and does not divide by the number of holes.`], answer: 0 },
  { id: "q84-m5", type: "mcq", skill: "u8", topic: "8.4", difficulty: "moderate",
    stem: R`A siphon tube drains water from a large open tank. The outlet of the tube is open to the atmosphere and is $0.60$ m below the water surface in the tank. Treat the water as an ideal fluid in steady flow, and neglect the speed of the water surface in the tank. Use $g = 9.8$ m/s².`,
    question: R`What is the speed of the water as it leaves the outlet?`,
    choices: [R`$3.4$ m/s`, R`$2.4$ m/s`, R`$12$ m/s`, R`$5.9$ m/s`],
    why: [R`The pressure is atmospheric at the surface and at the outlet, and the surface speed is negligible. Bernoulli's equation gives $\rho g h = \tfrac12 \rho v^2$, so $v = \sqrt{2gh} = \sqrt{2(9.8)(0.60)} = 3.4$ m/s.`,
      R`This drops the factor of $\tfrac12$ from the kinetic energy term, $\rho g h = \rho v^2$, which gives $v = \sqrt{gh}$.`,
      R`This is $2gh$, which is the square of the speed. The speed is the square root of it.`,
      R`This is $gh$ with no square root and no factor of $2$.`], answer: 0 },
  { id: "q84-m6", type: "mcq", skill: "u8", topic: "8.4", difficulty: "difficult", set: "q84-s1",
    question: R`What is the diameter of the stream $0.20$ m below the opening?`,
    choices: [R`$5.4$ mm`, R`$5.7$ mm`, R`$3.6$ mm`, R`$8.0$ mm`],
    why: [R`The speed after falling $0.20$ m is $v = \sqrt{v_0^2 + 2gh} = \sqrt{1.0 + 2(9.8)(0.20)} = 2.22$ m/s. The volume flow rate is constant, so $d^2 v$ is constant and $d = (8.0)\sqrt{1.0/2.22} = 5.4$ mm.`,
      R`This uses $v = \sqrt{2gh} = 1.98$ m/s, which leaves out the initial speed of the water.`,
      R`This takes the diameter, not the area, to be inversely proportional to the speed: $8.0/2.22$.`,
      R`This says the stream keeps its diameter. The water speeds up as it falls, so the area of the stream must decrease.`], answer: 0 },
  { id: "q84-f1a", type: "frq", skill: "u8", topic: "8.4", set: "q84-s2", part: "(a)",
    prompt: R`Using Bernoulli's equation, derive an expression for $\Delta P$ in terms of $\rho$ and $v$.`,
    rows: [{ name: "Bernoulli's equation", earns: R`Applies Bernoulli's equation between the two openings at the same height, with a speed of zero at opening 1 and a speed of $v$ at opening 2: $P_1 = P_2 + \tfrac12\rho v^2$.` }, { name: "Expression", earns: R`Obtains $\Delta P = P_1 - P_2 = \tfrac12\rho v^2$.` }],
    solution: R`Bernoulli's equation is $P + \rho g y + \tfrac12\rho v^2 = $ constant along a streamline. The two openings are at the same height, so the $\rho g y$ terms cancel. At opening 1 the air is at rest, and at opening 2 its speed is $v$: $P_1 + 0 = P_2 + \tfrac12\rho v^2$. Then $\Delta P = P_1 - P_2 = \tfrac12\rho v^2$.` },
  { id: "q84-f1b", type: "frq", skill: "u8", topic: "8.4", set: "q84-s2", part: "(b)",
    prompt: R`The density of the air is $1.20$ kg/m³, and the sensor reads $\Delta P = 1.5$ kPa. Calculate the speed of the airplane.`,
    rows: [{ name: "Speed", earns: R`Converts the pressure to $1.5 \times 10^{3}$ Pa and obtains $v = 50$ m/s, with units.` }],
    solution: R`$v = \sqrt{\dfrac{2\Delta P}{\rho}} = \sqrt{\dfrac{2(1.5 \times 10^{3})}{1.20}} = 50$ m/s.` },
  { id: "q84-f1c", type: "frq", skill: "u8", topic: "8.4", set: "q84-s2", part: "(c)",
    prompt: R`The airplane flies at twice the speed through air of the same density. By what factor does $\Delta P$ change? Justify your answer.`,
    rows: [{ name: "Factor and justification", earns: R`States that $\Delta P$ becomes four times as great, because $\Delta P = \tfrac12\rho v^2$ is proportional to the square of the speed.` }],
    solution: R`Since $\Delta P = \tfrac12\rho v^2$ and $\rho$ is unchanged, $\Delta P$ is proportional to $v^2$. Doubling $v$ multiplies $\Delta P$ by $2^2 = 4$.` },
];

export default { forms: [{ id: "q84", group: "Unit 8: Fluids", name: "Topic 8.4 Quiz: Fluids and Conservation Laws", items }] };

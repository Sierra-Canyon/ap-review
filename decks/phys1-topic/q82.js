// AP Physics 1 topic quiz 8.2: Pressure.
import { scene } from "../../diagrams.js";
const R = String.raw;
const one = (blocks, title = "") => [{ title, blocks }];

// A concrete block resting on a table, drawn with its three edge lengths.
const blockPic = () => scene({ width: 360, height: 200, alt: "A rectangular concrete block rests on a table. The long front edge is labeled 24 centimeters, the depth edge going back is labeled 10 centimeters, and the vertical edge is labeled 6.0 centimeters.", items: [
  { ground: { from: [20, 50], to: [330, 50] } },
  { poly: { points: [[60, 95], [240, 95], [280, 123], [100, 123]] } }, { poly: { points: [[240, 50], [280, 78], [280, 123], [240, 95]] } }, { poly: { points: [[60, 50], [240, 50], [240, 95], [60, 95]] } },
  { label: { x: 150, y: 28, text: "24 cm" } }, { label: { x: 292, y: 100, text: "6.0 cm", anchor: "start" } }, { label: { x: 276, y: 140, text: "10 cm", anchor: "start" } },
] });

// A U-tube of mercury: the gas arm is connected to a tank, the other arm is open, and the open arm stands 12 cm higher.
const manometerPic = () => scene({ width: 360, height: 310, alt: "A U-tube manometer containing mercury. The left arm is connected to a tank labeled Gas. The right arm is open to the atmosphere. The mercury surface in the right arm is higher than the mercury surface in the left arm, and the difference in height is labeled h equals 12 centimeters.", items: [
  { fluid: { x: 110, y: 40, w: 30, h: 80 } }, { fluid: { x: 140, y: 40, w: 60, h: 30 } }, { fluid: { x: 200, y: 40, w: 30, h: 152 } },
  { rope: { points: [[110, 240], [110, 40], [230, 40], [230, 225]], cls: "d-wall" } }, { rope: { points: [[140, 240], [140, 70], [200, 70], [200, 225]], cls: "d-wall" } },
  { rect: { x: 125, y: 265, w: 110, h: 50, label: "Gas" } },
  { line: { from: [140, 120], to: [270, 120], dash: true } }, { line: { from: [200, 192], to: [270, 192], dash: true } },
  { arrow: { from: [262, 156], to: [262, 192], kind: "plain" } }, { arrow: { from: [262, 156], to: [262, 120], kind: "plain" } }, { label: { x: 272, y: 156, text: "h = 12 cm", anchor: "start" } },
  { label: { x: 215, y: 240, text: "Open" } },
] });

// A tank of water with a piston of mass m resting on the water surface.
const pistonPic = () => scene({ width: 340, height: 300, alt: "A cylindrical tank filled with water to a depth h. A piston of mass m and area A rests on the water surface. Arrows show the atmosphere, at pressure P zero, pushing down on the piston. Point P is on the bottom of the tank.", items: [
  { fluid: { x: 60, y: 30, w: 180, h: 140 } }, { rope: { points: [[60, 250], [60, 30], [240, 30], [240, 250]], cls: "d-wall" } },
  { rect: { x: 150, y: 182, w: 176, h: 24, label: "m" } },
  { arrow: { from: [100, 238], to: [100, 196], kind: "plain" } }, { arrow: { from: [150, 238], to: [150, 196], kind: "plain", label: "P_0", at: "tail" } }, { arrow: { from: [200, 238], to: [200, 196], kind: "plain" } },
  { arrow: { from: [90, 170], to: [90, 30], kind: "plain" } }, { label: { x: 82, y: 100, text: "h", anchor: "end" } },
  { dot: { x: 200, y: 30, r: 4 } }, { label: { x: 200, y: 46, text: "P" } },
] });

export const sets = {
  "q82-s1": { name: "A concrete block on a table", label: "Diagram", intro: R`A concrete block has the shape of a rectangular box. The diagram shows the block resting on a table with the dimensions of its edges. The block can rest on the table on any one of its three different faces.`, sources: one([{ svg: blockPic() }]) },
  "q82-s2": { name: "A manometer", label: "Diagram", intro: R`A U-tube manometer contains mercury, which has a density of $13600$ kg/m³. One arm of the tube is connected to a tank of gas, and the other arm is open to the atmosphere, where the pressure is $1.01 \times 10^{5}$ Pa. Use $g = 9.8$ m/s².`, sources: one([{ svg: manometerPic() }]) },
  "q82-s3": { name: "A piston on water", label: "Diagram", intro: R`A tank has a cylindrical shape with a cross-sectional area $A$ and is filled with water of density $\rho$ to a depth $h$. A piston of mass $m$ and area $A$ rests on the water surface, so that no water leaks around it. The air above the piston is at atmospheric pressure $P_0$, and the water is at rest.`, sources: one([{ svg: pistonPic() }]) },
  "q82-s4": { name: "A hydraulic press", label: "Free response", intro: R`A hydraulic press has a small piston of area $A_1 = 2.0 \times 10^{-3}$ m² and a large piston of area $A_2 = 8.0 \times 10^{-2}$ m². The two pistons are at the same height and are connected by a tube that is filled with oil. A force $F_1$ is applied to the small piston, and the oil exerts a force $F_2$ on the large piston.`,
    sources: one([{ p: R`Treat the oil as an incompressible fluid at rest, and neglect the weights of the pistons. Use $g = 9.8$ m/s².` }]) },
};

const items = [
  { id: "q82-m1", type: "mcq", skill: "u8", topic: "8.2", difficulty: "easy", set: "q82-s1",
    question: R`What is the ratio of the greatest pressure to the least pressure that the block can exert on the table?`,
    choices: [R`$4.0$`, R`$16$`, R`$1.0$`, R`$2.4$`],
    why: [R`The force on the table is the same weight each time, so the pressure $P = F/A$ is inversely proportional to the area of the face in contact. The smallest face is $10 \times 6.0$ cm and the largest is $24 \times 10$ cm, so the ratio is $\dfrac{(24)(10)}{(10)(6.0)} = 4.0$.`,
      R`This squares the ratio. The pressure is inversely proportional to the area, not to the square of the area.`,
      R`This says the pressure is the same because the weight is the same. The area of contact also changes the pressure.`,
      R`This uses the ratio of two of the edges, $24/10$, instead of the ratio of the areas of the faces.`], answer: 0 },
  { id: "q82-m2", type: "mcq", skill: "u8", topic: "8.2", difficulty: "easy",
    stem: R`A rectangular tabletop measures $1.2$ m by $0.80$ m. The atmospheric pressure is $1.01 \times 10^{5}$ Pa.`,
    question: R`What is the magnitude of the force that the atmosphere exerts on the top surface of the table?`,
    choices: [R`$9.70 \times 10^{4}$ N`, R`$1.21 \times 10^{5}$ N`, R`$4.04 \times 10^{5}$ N`, R`$9.89 \times 10^{3}$ N`],
    why: [R`The force is the pressure times the area: $F = PA = (1.01 \times 10^{5})(1.2)(0.80) = 9.70 \times 10^{4}$ N.`,
      R`This multiplies the pressure by the $1.2$ m length of the table only, not by the area.`,
      R`This multiplies the pressure by the perimeter of the table, $4.0$ m.`,
      R`This divides the force by $g$, which gives a mass in kilograms, not a force.`], answer: 0 },
  { id: "q82-m3", type: "mcq", skill: "u8", topic: "8.2", difficulty: "moderate", set: "q82-s2",
    stem: R`The mercury surface in the open arm is $12$ cm higher than the mercury surface in the arm connected to the tank.`,
    question: R`What is the absolute pressure of the gas in the tank?`,
    choices: [R`$1.17 \times 10^{5}$ Pa`, R`$1.60 \times 10^{4}$ Pa`, R`$8.50 \times 10^{4}$ Pa`, R`$1.01 \times 10^{5}$ Pa`],
    why: [R`The gas pushes the mercury down in its own arm, so the gas pressure is greater than atmospheric pressure by $\rho g h = (13600)(9.8)(0.12) = 1.60 \times 10^{4}$ Pa. The absolute pressure is $1.01 \times 10^{5} + 1.60 \times 10^{4} = 1.17 \times 10^{5}$ Pa.`,
      R`This is the gauge pressure, $\rho g h$. The question asks for the absolute pressure.`,
      R`This subtracts $\rho g h$ from atmospheric pressure. The gas side is lower, so the gas pressure is greater than atmospheric pressure.`,
      R`This is atmospheric pressure. The two mercury surfaces are at different heights, so the gas pressure is different.`], answer: 0 },
  { id: "q82-m4", type: "mcq", skill: "u8", topic: "8.2", difficulty: "moderate",
    stem: R`A barometer filled with mercury (density $13600$ kg/m³) has a column that is $0.758$ m tall. A second barometer is built at the same place with a tall tube filled with water (density $1000$ kg/m³).`,
    question: R`What is the height of the water column in the second barometer?`,
    choices: [R`$1.03 \times 10^{1}$ m`, R`$5.57 \times 10^{-2}$ m`, R`$7.58 \times 10^{-1}$ m`, R`$5.57 \times 10^{-5}$ m`],
    why: [R`The column of liquid supports the atmosphere, so $\rho g h$ is the same for both liquids. Then $h_w = h_{Hg}\,\rho_{Hg}/\rho_w = (0.758)(13.6) = 10.3$ m.`,
      R`This divides by the density ratio instead of multiplying. The less dense liquid needs a taller column.`,
      R`This says the height does not depend on the liquid. The pressure at the bottom of the column is the same, so the height is inversely proportional to the density.`,
      R`This divides the height by the density of mercury, $0.758/13600$, instead of multiplying by the ratio of the densities.`], answer: 0 },
  { id: "q82-m5", type: "mcq", skill: "u8", topic: "8.2", difficulty: "moderate",
    stem: R`A tank that is open to the atmosphere ($1.01 \times 10^{5}$ Pa) holds a layer of oil $0.40$ m deep, with a density of $800$ kg/m³, floating on a layer of water $0.60$ m deep, with a density of $1000$ kg/m³. Use $g = 9.8$ m/s².`,
    question: R`What is the absolute pressure at the bottom of the tank?`,
    choices: [R`$1.10 \times 10^{5}$ Pa`, R`$1.11 \times 10^{5}$ Pa`, R`$1.07 \times 10^{5}$ Pa`, R`$9.02 \times 10^{3}$ Pa`],
    why: [R`The pressure increases with depth through each layer: $P = P_0 + \rho_o g h_o + \rho_w g h_w = 1.01 \times 10^{5} + (800)(9.8)(0.40) + (1000)(9.8)(0.60) = 1.10 \times 10^{5}$ Pa.`,
      R`This treats the whole $1.00$ m as water, $P_0 + (1000)(9.8)(1.00)$, which leaves out the lower density of the oil.`,
      R`This includes only the water layer. The oil above it also adds pressure.`,
      R`This is the gauge pressure at the bottom. The absolute pressure includes the atmosphere.`], answer: 0 },
  { id: "q82-m6", type: "mcq", skill: "u8", topic: "8.2", difficulty: "difficult", set: "q82-s3",
    question: R`Which expression gives the absolute pressure at point $P$ on the bottom of the tank?`,
    choices: [R`$P_0 + \dfrac{mg}{A} + \rho g h$`, R`$P_0 + \rho g h$`, R`$\dfrac{mg}{A} + \rho g h$`, R`$P_0 + \dfrac{mg}{A} + \dfrac{\rho g h}{2}$`],
    why: [R`The pressure at the water surface is the atmospheric pressure plus the pressure from the piston's weight, $P_0 + mg/A$. The pressure then increases by $\rho g h$ over the depth $h$.`,
      R`This leaves out the pressure that the weight of the piston adds, $mg/A$.`,
      R`This leaves out the atmospheric pressure that acts on top of the piston.`,
      R`This uses only half of the depth term, as if the pressure were measured at the middle of the water instead of at the bottom.`], answer: 0 },
  { id: "q82-f1a", type: "frq", skill: "u8", topic: "8.2", set: "q82-s4", part: "(a)",
    prompt: R`Derive an expression for the force $F_2$ in terms of $F_1$, $A_1$, and $A_2$. Start from a fundamental principle.`,
    rows: [{ name: "Principle", earns: R`States that a pressure applied to an enclosed fluid is transmitted equally to every part of the fluid, so the pressure under the small piston equals the pressure under the large piston, $\dfrac{F_1}{A_1} = \dfrac{F_2}{A_2}$.` }, { name: "Expression", earns: R`Solves to obtain $F_2 = F_1\dfrac{A_2}{A_1}$, or an equivalent expression.` }],
    solution: R`The oil is an enclosed fluid at rest, and the two pistons are at the same height. The pressure that the small piston applies to the oil is transmitted equally, so the pressure at the large piston is the same: $\dfrac{F_1}{A_1} = \dfrac{F_2}{A_2}$. Then $F_2 = F_1\dfrac{A_2}{A_1}$.` },
  { id: "q82-f1b", type: "frq", skill: "u8", topic: "8.2", set: "q82-s4", part: "(b)",
    prompt: R`A force $F_1 = 150$ N is applied to the small piston. Calculate the greatest mass that the large piston can hold at rest.`,
    rows: [{ name: "Mass", earns: R`Obtains $F_2 = 6.0 \times 10^{3}$ N and a mass of $6.1 \times 10^{2}$ kg, with units.` }],
    solution: R`$F_2 = (150)\dfrac{8.0 \times 10^{-2}}{2.0 \times 10^{-3}} = 6.0 \times 10^{3}$ N. The large piston holds a weight equal to $F_2$, so $m = F_2/g = \dfrac{6.0 \times 10^{3}}{9.8} = 6.1 \times 10^{2}$ kg.` },
  { id: "q82-f1c", type: "frq", skill: "u8", topic: "8.2", set: "q82-s4", part: "(c)",
    prompt: R`The small piston is pushed down by $0.20$ m. Calculate how far the large piston rises, and justify your answer.`,
    rows: [{ name: "Distance and justification", earns: R`Obtains $5.0 \times 10^{-3}$ m, using the fact that the oil is incompressible, so the volume that the small piston pushes out equals the volume that the large piston takes in, $A_1 d_1 = A_2 d_2$.` }],
    solution: R`The oil is incompressible, so the volume that leaves the small cylinder equals the volume that enters the large cylinder: $A_1 d_1 = A_2 d_2$. Then $d_2 = d_1\dfrac{A_1}{A_2} = (0.20)\dfrac{2.0 \times 10^{-3}}{8.0 \times 10^{-2}} = 5.0 \times 10^{-3}$ m.` },
];

export default { forms: [{ id: "q82", group: "Unit 8: Fluids", name: "Topic 8.2 Quiz: Pressure", items }] };

// AP Physics 1 topic quiz 8.3: Fluids and Newton's Laws.
import { bars } from "../../plot.js";
import { scene } from "../../diagrams.js";
const R = String.raw;
const one = (blocks, title = "") => [{ title, blocks }];

const forceBars = () => bars({ labels: ["A", "B", "C"], series: [{ name: "Weight", values: [6.0, 2.0, 3.0] }, { name: "Buoyant force", values: [4.0, 5.0, 3.0] }], y: [0, 8], step: 1, yname: "Force (N)", fmt: (v) => v.toFixed(1),
  alt: "Bar chart of the weight and the buoyant force, in newtons, on three objects. Object A has a weight of 6.0 and a buoyant force of 4.0. Object B has a weight of 2.0 and a buoyant force of 5.0. Object C has a weight of 3.0 and a buoyant force of 3.0." });

// The same hydrometer floats in two liquids: 12 cm of the tube is below the surface in liquid 1 and 9.0 cm in liquid 2.
const hydroPic = () => scene({ width: 440, height: 290, alt: "Two beakers side by side. The same sealed glass tube floats upright in each. In the beaker labeled Liquid 1, 12 centimeters of the tube are below the liquid surface. In the beaker labeled Liquid 2, 9.0 centimeters of the tube are below the liquid surface.", items: [
  { fluid: { x: 40, y: 30, w: 160, h: 150 } }, { rope: { points: [[40, 215], [40, 30], [200, 30], [200, 215]], cls: "d-wall" } },
  { rect: { x: 120, y: 174, w: 14, h: 132 } }, { arrow: { from: [145, 180], to: [145, 108], kind: "plain" } }, { label: { x: 153, y: 144, text: "12 cm", anchor: "start" } }, { label: { x: 120, y: 12, text: "Liquid 1" } },
  { fluid: { x: 250, y: 30, w: 170, h: 150 } }, { rope: { points: [[250, 215], [250, 30], [420, 30], [420, 215]], cls: "d-wall" } },
  { rect: { x: 335, y: 192, w: 14, h: 132 } }, { arrow: { from: [362, 180], to: [362, 126], kind: "plain" } }, { label: { x: 370, y: 153, text: "9.0 cm", anchor: "start" } }, { label: { x: 335, y: 12, text: "Liquid 2" } },
] });

// A wooden block floats with a steel ball hanging below it on a string.
const ballPic = () => scene({ width: 320, height: 260, alt: "A beaker of water. A wooden block floats at rest with its lower part under the water surface. A steel ball hangs from the bottom of the block on a string and is completely under water.", items: [
  { fluid: { x: 40, y: 30, w: 220, h: 120 } }, { rope: { points: [[40, 230], [40, 30], [260, 30], [260, 230]], cls: "d-wall" } },
  { rect: { x: 150, y: 128, w: 100, h: 60, label: "wood" } }, { rope: { points: [[150, 98], [150, 66]] } }, { circle: { x: 150, y: 56, r: 10 } }, { label: { x: 168, y: 56, text: "steel ball", anchor: "start" } },
] });

export const sets = {
  "q83-s1": { name: "Weight and buoyant force", label: "Bar chart", intro: R`Three objects, A, B, and C, are each held completely under water. The bar chart shows the weight of each object and the buoyant force that the water exerts on it. Each object is then released from rest.`, sources: one([{ svg: forceBars() }]) },
  "q83-s2": { name: "A hydrometer", label: "Diagram", intro: R`A hydrometer is a sealed glass tube of uniform cross section with a weight at its bottom, so that it floats upright. The same hydrometer floats at rest in two different liquids, as shown. Liquid 1 has a density of $900$ kg/m³.`, sources: one([{ svg: hydroPic() }]) },
  "q83-s3": { name: "A block with a ball hanging below it", label: "Diagram", intro: R`A wooden block with a mass of $0.60$ kg and a volume of $1.0 \times 10^{-3}$ m³ floats in water, which has a density of $1000$ kg/m³. A steel ball with a mass of $0.30$ kg and a volume of $4.0 \times 10^{-5}$ m³ hangs from the block on a light string. The ball is completely under water, and the system is at rest.`, sources: one([{ svg: ballPic() }]) },
  "q83-s4": { name: "A cube between oil and water", label: "Free response", intro: R`A tank holds a layer of oil of density $\rho_o$ floating on a layer of water of density $\rho_w$, where $\rho_o < \rho_w$. A solid cube of density $\rho_b$ and volume $V$, where $\rho_o < \rho_b < \rho_w$, floats at rest. The lower part of the cube is in the water and the upper part is in the oil, so the cube is completely immersed in the two liquids.`,
    sources: one([{ p: R`Let $x$ be the fraction of the volume of the cube that is in the water.` }]) },
};

const items = [
  { id: "q83-m1", type: "mcq", skill: "u8", topic: "8.3", difficulty: "easy",
    stem: R`A solid iron anchor is lowered from just below the surface of a lake to a greater depth. The anchor stays completely under water and is at rest at each depth.`,
    question: R`How does the buoyant force on the anchor at the greater depth compare with the buoyant force just below the surface?`,
    choices: [R`It is the same, because the anchor displaces the same volume of water.`, R`It is greater, because the pressure on the anchor is greater at the greater depth.`, R`It is smaller, because the anchor is farther from the surface of the water.`, R`It is the same, because the buoyant force equals the weight of the anchor.`],
    why: [R`The buoyant force is the weight of the displaced fluid, $\rho_{fluid}Vg$. The volume of the anchor and the density of the water do not change with depth, so the force does not change.`,
      R`The pressure is greater on every face, but the pressure difference between the bottom and the top of the anchor is the same, so the net force does not change.`,
      R`The buoyant force does not depend on the distance from the surface.`,
      R`The conclusion is correct, but the reason is not. The anchor sinks, so its weight is greater than the buoyant force.`], answer: 0 },
  { id: "q83-m2", type: "mcq", skill: "u8", topic: "8.3", difficulty: "easy", set: "q83-s1",
    question: R`Which objects begin to move upward immediately after they are released?`,
    choices: [R`Object B only`, R`Objects A and C`, R`Objects B and C`, R`All three objects`],
    why: [R`An object moves upward if the buoyant force is greater than the weight. Only object B has this: $5.0 - 2.0 = 3.0$ N of net upward force.`,
      R`Object A has a weight greater than the buoyant force, so it begins to sink, and object C has no net force. Neither moves upward.`,
      R`Object C has a buoyant force equal to its weight, so the net force is zero and it stays at rest.`,
      R`Objects A and C do not have a net upward force.`], answer: 0 },
  { id: "q83-m3", type: "mcq", skill: "u8", topic: "8.3", difficulty: "moderate",
    stem: R`A solid object weighs $8.0$ N in air. The object is lowered on a string into a can that is filled to the brim with water, until the object is completely submerged and at rest. The water that overflows from the can has a mass of $0.40$ kg. Use $g = 9.8$ m/s².`,
    question: R`What is the tension in the string?`,
    choices: [R`$4.1$ N`, R`$3.9$ N`, R`$12$ N`, R`$7.6$ N`],
    why: [R`The buoyant force equals the weight of the displaced water: $F_B = (0.40)(9.8) = 3.92$ N. The object is at rest, so $T = W - F_B = 8.0 - 3.92 = 4.1$ N.`,
      R`This is the buoyant force. The string supports the weight minus the buoyant force.`,
      R`This adds the buoyant force to the weight, $8.0 + 3.92$. The buoyant force is upward, like the tension.`,
      R`This subtracts the mass, $0.40$, as if it were a force in newtons.`], answer: 0 },
  { id: "q83-m4", type: "mcq", skill: "u8", topic: "8.3", difficulty: "moderate", set: "q83-s2",
    question: R`What is the density of liquid 2?`,
    choices: [R`$1.20 \times 10^{3}$ kg/m³`, R`$6.75 \times 10^{2}$ kg/m³`, R`$1.60 \times 10^{3}$ kg/m³`, R`$9.00 \times 10^{2}$ kg/m³`],
    why: [R`The hydrometer floats at rest in both liquids, so the buoyant force is the same: $\rho_1 g A d_1 = \rho_2 g A d_2$. Then $\rho_2 = \rho_1 d_1/d_2 = 900(12/9.0) = 1200$ kg/m³.`,
      R`This inverts the ratio of the depths. The liquid in which less of the tube is submerged has the greater density.`,
      R`This squares the ratio of the depths. The submerged volume is proportional to the depth, not to its square.`,
      R`This says the densities are equal because the weight of the hydrometer is the same. The weight is equal, but the displaced volumes are not.`], answer: 0 },
  { id: "q83-m5", type: "mcq", skill: "u8", topic: "8.3", difficulty: "moderate",
    stem: R`A beaker and the water in it have a combined mass of $1.20$ kg and rest on a scale. A wooden block with a mass of $0.30$ kg and a volume of $5.0 \times 10^{-4}$ m³ is placed in the water and floats at rest. No water spills.`,
    question: R`What does the scale read?`,
    choices: [R`$1.50$ kg`, R`$1.20$ kg`, R`$1.70$ kg`, R`$0.90$ kg`],
    why: [R`The block floats, so the buoyant force on it equals its weight. By Newton's third law, the block pushes down on the water with the same force. The scale supports the beaker, the water, and the block: $1.20 + 0.30 = 1.50$ kg.`,
      R`This leaves out the block. The block's weight is transferred to the water, and then to the scale, through the buoyant force.`,
      R`This adds $0.50$ kg, the mass of $5.0 \times 10^{-4}$ m³ of water, as if the whole block were under water.`,
      R`This subtracts the block's mass. The buoyant force is a push on the block upward and a push on the water downward, so it adds to the reading.`], answer: 0 },
  { id: "q83-m6", type: "mcq", skill: "u8", topic: "8.3", difficulty: "difficult", set: "q83-s3",
    question: R`What fraction of the volume of the wooden block is above the water surface?`,
    choices: [R`$14\%$`, R`$10\%$`, R`$40\%$`, R`$86\%$`],
    why: [R`Take the block and the ball as one system at rest. The total buoyant force equals the total weight: $\rho g(V_{sub} + V_{ball}) = (m_{block} + m_{ball})g$. Then $V_{sub} = 0.90/1000 - 4.0 \times 10^{-5} = 8.6 \times 10^{-4}$ m³, which is $86\%$ of the block. The fraction above the surface is $14\%$.`,
      R`This leaves out the buoyant force on the ball, so it takes $V_{sub} = 0.90/1000$ m³.`,
      R`This leaves out the ball entirely, so it takes $V_{sub} = 0.60/1000$ m³.`,
      R`This is the fraction of the block that is below the surface, not above it.`], answer: 0 },
  { id: "q83-f1a", type: "frq", skill: "u8", topic: "8.3", set: "q83-s4", part: "(a)",
    prompt: R`On the dot provided, which represents the cube, draw and label the forces that act on the cube. Draw the lengths of the arrows to show the relative sizes of the forces.`,
    rows: [{ name: "Free-body diagram", earns: R`Draws and labels a downward arrow for the weight, and an upward arrow for the buoyant force (or one upward arrow from each liquid), with the total length of the upward arrows equal to the length of the weight arrow.` }],
    solution: R`The drawing shows the dot with two arrows. A downward arrow labeled $mg$ (weight). An upward arrow labeled $F_B$ (buoyant force), equal in length to the weight arrow because the cube is at rest. Two upward arrows, one labeled $F_{B,o}$ for the oil and one labeled $F_{B,w}$ for the water, whose lengths add up to the length of the weight arrow, are also correct.` },
  { id: "q83-f1b", type: "frq", skill: "u8", topic: "8.3", set: "q83-s4", part: "(b)",
    prompt: R`Derive an expression for $x$ in terms of $\rho_o$, $\rho_w$, and $\rho_b$. Start from a fundamental principle.`,
    rows: [{ name: "Setup", earns: R`States that the cube is at rest, so the net force is zero, and that each liquid's buoyant force equals the weight of the liquid displaced, to write $\rho_o g(1 - x)V + \rho_w g xV = \rho_b g V$.` }, { name: "Expression", earns: R`Solves to obtain $x = \dfrac{\rho_b - \rho_o}{\rho_w - \rho_o}$, or an equivalent expression.` }],
    solution: R`The cube is at rest, so the upward buoyant forces equal the weight, $mg = \rho_b g V$. By Archimedes' principle, each buoyant force is the weight of the displaced liquid: $F_{B,o} = \rho_o g(1 - x)V$ and $F_{B,w} = \rho_w g xV$. Then $\rho_o(1 - x) + \rho_w x = \rho_b$, so $x(\rho_w - \rho_o) = \rho_b - \rho_o$ and $x = \dfrac{\rho_b - \rho_o}{\rho_w - \rho_o}$.` },
  { id: "q83-f1c", type: "frq", skill: "u8", topic: "8.3", set: "q83-s4", part: "(c)",
    prompt: R`The oil has a density of $800$ kg/m³, the water has a density of $1000$ kg/m³, and the cube has a density of $880$ kg/m³. Calculate $x$.`,
    rows: [{ name: "Fraction", earns: R`Obtains $x = 0.40$ (or $40\%$).` }],
    solution: R`$x = \dfrac{880 - 800}{1000 - 800} = \dfrac{80}{200} = 0.40$.` },
];

export default { forms: [{ id: "q83", group: "Unit 8: Fluids", name: "Topic 8.3 Quiz: Fluids and Newton's Laws", items }] };

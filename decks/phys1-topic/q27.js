// AP Physics 1 topic quiz 2.7: kinetic and static friction.
import { graph } from "../../plot.js";
import { scene, tablePulley } from "../../diagrams.js";
const R = String.raw;

const pushedBox = () => scene({ width: 360, height: 150, alt: "A 10 kilogram box at rest on a horizontal floor with a 20 newton arrow pointing to the right, showing a horizontal push on the box.", items: [
  { ground: { from: [20, 40], to: [340, 40] } }, { rect: { x: 200, y: 66, w: 70, h: 52, label: "10 kg" } }, { arrow: { from: [70, 66], to: [160, 66] } }, { label: { x: 115, y: 84, text: "20 N" } }] });
const slideV = () => graph({ x: [0, 4], y: [0, 7], step: { x: 1, y: 1 }, xname: "t (s)", yname: "v (m/s)", segments: [[0, 6, 3, 0]],
  alt: "Graph of the block's velocity in meters per second versus time in seconds. The velocity falls in a straight line from 6.0 at time 0 to 0 at 3.0 seconds." });

export const sets = {
  "q27-s1": { name: "A box pushed on a floor", label: "Setup", intro: R`A $10$ kg box rests on a level floor. The coefficient of static friction between the box and the floor is $0.60$, and the coefficient of kinetic friction is $0.40$. A person pushes horizontally on the box with a force of $20$ N, and the box does not move.`, sources: [{ title: "", blocks: [{ svg: pushedBox() }] }] },
  "q27-s2": { name: "A block sliding to a stop", label: "Graph", intro: R`A block slides to the right across a level, rough horizontal surface. Friction is the only horizontal force on the block. The graph shows the block's velocity as a function of time.`, sources: [{ title: "", blocks: [{ svg: slideV() }] }] },
  "q27-s3": { name: "A block on a table joined to a hanging block", label: "Setup", intro: R`A $4.0$ kg block on a horizontal table is joined by a light string over a light, frictionless pulley to a $2.0$ kg block that hangs. The coefficient of kinetic friction between the table and the $4.0$ kg block is $0.25$. The blocks are released from rest and move.`, sources: [{ title: "", blocks: [{ svg: tablePulley({ m1: "4.0 kg", m2: "2.0 kg", motion: true, friction: true, alt: "A 4.0 kilogram block on a rough table connected by a string over a pulley at the table's edge to a 2.0 kilogram block hanging below. Arrows show the table block moving right and the hanging block moving down." }) }] }] },
  "q27-s4": { name: "A rubber block on a lab table", label: "Free response", intro: R`A student pulls a $0.50$ kg rubber block across a level lab table with a horizontal spring scale. The block moves at constant speed, and the scale reads $1.5$ N.`, sources: [{ title: "", blocks: [{ p: R`Assume the scale's reading is the force it exerts on the block.` }] }] },
};

const items = [
  { id: "q27-m1", type: "mcq", skill: "u2", topic: "2.7", difficulty: "easy",
    stem: R`A $2.5$ kg book slides across a horizontal table. The coefficient of kinetic friction between the book and the table is $0.30$.`,
    question: R`What is the magnitude of the friction force on the book?`,
    choices: [R`$7.35$ N`, R`$0.750$ N`, R`$24.5$ N`, R`$81.7$ N`],
    why: [R`The normal force equals the weight, so $f_k = \mu_k N = (0.30)(2.5)(9.8) = 7.35$ N.`,
      R`$0.750$ N leaves out $g$, $\mu_k m$. The normal force is $mg$, not $m$.`,
      R`$24.5$ N is the weight, $mg$. The friction force is $\mu_k$ times the normal force.`,
      R`$81.7$ N divides by the coefficient, $\dfrac{mg}{\mu_k}$, instead of multiplying.`], answer: 0 },
  { id: "q27-m2", type: "mcq", skill: "u2", topic: "2.7", difficulty: "easy", set: "q27-s1",
    question: R`What is the magnitude of the friction force the floor exerts on the box?`,
    choices: [R`$20$ N`, R`$59$ N`, R`$39$ N`, R`$98$ N`],
    why: [R`The box is at rest, so the net horizontal force is zero. Static friction adjusts to match the push: $f = 20$ N. This is less than the maximum, $\mu_s N = 59$ N.`,
      R`$59$ N is the maximum static friction, $\mu_s N = (0.60)(98)$. Static friction takes this value only when the box is about to slide.`,
      R`$39$ N is kinetic friction, $\mu_k N = (0.40)(98)$. The box is not sliding.`,
      R`$98$ N is the box's weight, which is the normal force, not a friction force.`], answer: 0 },
  { id: "q27-m3", type: "mcq", skill: "u2", topic: "2.7", difficulty: "moderate", set: "q27-s2",
    question: R`What is the coefficient of kinetic friction between the block and the surface?`,
    choices: [R`$0.20$`, R`$0.61$`, R`$0.31$`, R`$2.0$`],
    why: [R`The slope of the graph gives $a = \dfrac{0 - 6.0}{3.0} = -2.0$ m/s², so the deceleration is $2.0$ m/s². Friction is the net force: $\mu_k mg = ma$, so $\mu_k = \dfrac{a}{g} = \dfrac{2.0}{9.8} = 0.20$.`,
      R`$0.61$ divides the initial speed by $g$, $\dfrac{6.0}{9.8}$, instead of the deceleration.`,
      R`$0.31$ divides the time by $g$, $\dfrac{3.0}{9.8}$. The coefficient comes from the slope of the graph.`,
      R`$2.0$ is the deceleration. It still has to be divided by $g$ to give a coefficient, which has no units.`], answer: 0 },
  { id: "q27-m4", type: "mcq", skill: "u2", topic: "2.7", difficulty: "moderate", set: "q27-s3",
    question: R`What is the magnitude of the acceleration of the blocks?`,
    choices: [R`$1.63$ m/s²`, R`$3.27$ m/s²`, R`$4.90$ m/s²`, R`$2.45$ m/s²`],
    why: [R`Treat both blocks as one system with mass $6.0$ kg. The net force along the path is $m_2 g - \mu_k m_1 g = 19.6 - (0.25)(39.2) = 9.8$ N, so $a = \dfrac{9.8}{6.0} = 1.63$ m/s².`,
      R`$3.27$ m/s² leaves out friction, $\dfrac{19.6}{6.0}$.`,
      R`$4.90$ m/s² divides the net force by only the hanging block's mass, $\dfrac{9.8}{2.0}$. Both blocks accelerate.`,
      R`$2.45$ m/s² takes friction as $\mu_k m_2 g$, using the hanging block's weight as the normal force, $\dfrac{19.6 - 4.9}{6.0}$.`], answer: 0 },
  { id: "q27-m5", type: "mcq", skill: "u2", topic: "2.7", difficulty: "moderate",
    stem: R`A car brakes with its wheels locked and skids to a stop on a level road. The coefficient of kinetic friction between the tires and the road is $0.80$. The car's speed when the skid begins is $20$ m/s.`,
    question: R`How far does the car skid?`,
    choices: [R`$25.5$ m`, R`$51.0$ m`, R`$20.4$ m`, R`$250$ m`],
    why: [R`Friction is the net force: $a = \mu_k g = (0.80)(9.8) = 7.84$ m/s². Then $v^2 = 2ad$ gives $d = \dfrac{v^2}{2\mu_k g} = \dfrac{400}{15.7} = 25.5$ m.`,
      R`$51.0$ m leaves out the factor of $2$ in $v^2 = 2ad$, $\dfrac{v^2}{\mu_k g}$.`,
      R`$20.4$ m leaves out the coefficient of friction, $\dfrac{v^2}{2g}$, which would be the stopping distance if the deceleration were $g$.`,
      R`$250$ m leaves out $g$ from the deceleration, $\dfrac{v^2}{2\mu_k}$.`], answer: 0 },
  { id: "q27-m6", type: "mcq", skill: "u2", topic: "2.7", difficulty: "difficult",
    stem: R`A $20$ kg box rests on a level floor. A person pushes on the box with a force of $80$ N directed $30^\circ$ below the horizontal. The box is on the verge of sliding.`,
    question: R`What is the coefficient of static friction between the box and the floor?`,
    choices: [R`$0.294$`, R`$0.353$`, R`$0.339$`, R`$0.444$`],
    why: [R`The horizontal component of the push, $80\cos 30^\circ = 69.3$ N, equals the maximum static friction. The normal force supports the weight and the downward component of the push: $N = 196 + 80\sin 30^\circ = 236$ N. So $\mu_s = \dfrac{69.3}{236} = 0.294$.`,
      R`$0.353$ takes the normal force as the weight alone, $\dfrac{69.3}{196}$. The downward component of the push adds to it.`,
      R`$0.339$ uses the whole $80$ N as the horizontal force, $\dfrac{80}{236}$. Only the horizontal component acts against friction.`,
      R`$0.444$ subtracts the vertical component of the push from the weight, $\dfrac{69.3}{196 - 40}$, as if the push were directed upward.`], answer: 0 },
  { id: "q27-f1a", type: "frq", skill: "u2", topic: "2.7", set: "q27-s4", part: "(a)",
    prompt: R`Determine the coefficient of kinetic friction between the block and the table.`,
    rows: [{ name: "Setup", earns: R`Uses constant speed to set the friction force equal to the scale's force, $f_k = 1.5$ N, with $N = mg$ and $f_k = \mu_k N$.` },
      { name: "Value", earns: R`Obtains $\mu_k = \dfrac{1.5}{(0.50)(9.8)} = 0.31$.` }],
    solution: R`The block moves at constant speed, so the friction force equals the pull: $f_k = 1.5$ N. The normal force is $mg = (0.50)(9.8) = 4.9$ N. $\mu_k = \dfrac{f_k}{N} = \dfrac{1.5}{4.9} = 0.31$.` },
  { id: "q27-f1b", type: "frq", skill: "u2", topic: "2.7", set: "q27-s4", part: "(b)",
    prompt: R`The student repeats the experiment with a $1.0$ kg block made of the same rubber, pulled at constant speed on the same table. Predict the reading of the scale, and justify your prediction.`,
    rows: [{ name: "Prediction", earns: R`Predicts that the reading doubles, to $3.0$ N.` },
      { name: "Justification", earns: R`Explains that the coefficient is the same for the same surfaces, the normal force doubles with the mass, so the kinetic friction force $\mu_k N$ doubles, and at constant speed the pull equals the friction force.` }],
    solution: R`The scale reads $3.0$ N. The surfaces are the same, so $\mu_k$ is unchanged. The normal force $mg$ doubles, so the friction force $\mu_k N$ doubles to $3.0$ N. At constant speed the pull equals the friction force.` },
];
export default { forms: [{ id: "q27", name: "Topic 2.7 Quiz: Kinetic and Static Friction", group: "Unit 2: Force and Translational Dynamics", items }] };

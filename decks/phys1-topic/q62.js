// AP Physics 1 topic quiz 6.2: Torque and work.
import { graph } from "../../plot.js";
const R = String.raw;
const one = (blocks, title = "") => [{ title, blocks }];

const pulleyGraph = () => graph({ x: [0, 6], y: [0, 8], step: { x: 1, y: 2 }, xname: "θ (rad)", yname: "τ (N·m)", segments: [[0, 6, 2, 6], [2, 6, 5, 0]],
  alt: "Graph of the motor's torque in newton meters versus the angle turned in radians. The torque is constant at 6 from 0 to 2 radians, then decreases in a straight line to 0 at 5 radians." });

export const sets = {
  "q62-s1": { name: "A motor turning a pulley", label: "Graph", intro: R`A motor turns a pulley. The graph shows the torque the motor exerts on the pulley as a function of the angle $\theta$ through which the pulley has turned, starting from $\theta = 0$.`, sources: one([{ svg: pulleyGraph() }]) },
  "q62-s2": { name: "Three machines", label: "Table", intro: R`Three machines each exert a constant torque on a shaft while the shaft turns through the angle shown. The torque has the same direction as the shaft's rotation in every case.`,
    sources: one([{ table: { head: ["Machine", "Torque (N·m)", "Angle turned"], rows: [["X", "$8.0$", R`$2.0$ rad`], ["Y", "$3.0$", R`$1.5$ rev`], ["Z", "$20$", R`$45^\circ$`]] } }]) },
  "q62-s3": { name: "A swinging boom", label: "Free response", intro: R`A uniform boom of mass $40$ kg and length $3.0$ m is hinged at one end to a vertical post and swings in a horizontal plane. The rotational inertia of the boom about the hinge is $\tfrac13 ML^2$. A worker pushes on the free end of the boom with a constant force of $50$ N that is always perpendicular to the boom. The boom starts from rest and turns through $90^\circ$. Friction in the hinge is negligible.`,
    sources: one([{ p: R`Treat the boom as a rigid rod that turns only about its hinge.` }]) },
};

const items = [
  { id: "q62-m1", type: "mcq", skill: "u6", topic: "6.2", difficulty: "easy",
    stem: R`A person pushes on the handle of a hand-crank ice cream maker with a constant force of $40$ N that is perpendicular to the crank arm. The crank arm is $0.25$ m long, and the crank turns through $3.0$ revolutions.`,
    question: R`How much work does the person do on the crank?`,
    choices: [R`$1.9 \times 10^{2}$ J`, R`$3.0 \times 10^{1}$ J`, R`$7.5 \times 10^{2}$ J`, R`$3.8 \times 10^{2}$ J`],
    why: [R`The torque is $\tau = Fr = (40)(0.25) = 10$ N·m and the angle is $3.0 \times 2\pi = 18.8$ rad, so $W = \tau\theta = 1.9 \times 10^{2}$ J.`,
      R`This uses $3.0$ as the angle. Work is $\tau\theta$ with $\theta$ in radians, and $3.0$ revolutions is $18.8$ rad.`,
      R`This multiplies the force by the angle, $(40)(18.8)$, without the lever arm. The work is the torque times the angle.`,
      R`This doubles the lever arm to $0.50$ m, which gives a torque of $20$ N·m. The crank arm is $0.25$ m.`], answer: 0 },
  { id: "q62-m2", type: "mcq", skill: "u6", topic: "6.2", difficulty: "easy", set: "q62-s1",
    question: R`How much work does the motor do on the pulley as the pulley turns from $\theta = 0$ to $\theta = 5.0$ rad?`,
    choices: [R`$21$ J`, R`$30$ J`, R`$15$ J`, R`$12$ J`],
    why: [R`The work is the area under the graph. The rectangle from $0$ to $2.0$ rad has area $(6.0)(2.0) = 12$ J, and the triangle from $2.0$ to $5.0$ rad has area $\tfrac12 (6.0)(3.0) = 9.0$ J. The total is $21$ J.`,
      R`This multiplies the greatest torque by the whole angle, $(6.0)(5.0)$. The torque is $6.0$ N·m only for the first $2.0$ rad.`,
      R`This multiplies half the greatest torque by the whole angle. The graph is level for the first $2.0$ rad, so the average torque is greater than half the greatest.`,
      R`This counts only the first $2.0$ rad, where the torque is constant, and leaves out the triangle.`], answer: 0 },
  { id: "q62-m3", type: "mcq", skill: "u6", topic: "6.2", difficulty: "moderate", set: "q62-s2",
    question: R`Which ranking of the work done by the machines, from greatest to least, is correct?`,
    choices: [R`Y $>$ X $>$ Z`, R`Z $>$ X $>$ Y`, R`Z $>$ Y $>$ X`, R`X $>$ Z $>$ Y`],
    why: [R`Work is $\tau\theta$ with $\theta$ in radians. Machine X does $(8.0)(2.0) = 16$ J, machine Y does $(3.0)(1.5 \times 2\pi) = 28$ J, and machine Z does $(20)(\pi/4) = 15.7$ J. So Y $>$ X $>$ Z.`,
      R`This multiplies the numbers in the table without converting units, which gives $16$, $4.5$, and $900$.`,
      R`This converts the revolutions to radians but uses $45$ for the angle of machine Z, so Z appears to do $900$ J.`,
      R`This converts the degrees to radians but uses $1.5$ for the angle of machine Y, so Y appears to do only $4.5$ J.`], answer: 0 },
  { id: "q62-m4", type: "mcq", skill: "u6", topic: "6.2", difficulty: "moderate",
    stem: R`A motor increases the angular speed of a platform with rotational inertia $I$ from $\omega_1$ to $\omega_2$ while the platform turns through an angle $\theta$. The net torque on the platform is constant.`,
    question: R`Which expression gives the magnitude of the net torque?`,
    choices: [R`$\dfrac{I(\omega_2^2 - \omega_1^2)}{2\theta}$`, R`$\dfrac{I(\omega_2^2 - \omega_1^2)}{\theta}$`, R`$\dfrac{I(\omega_2 - \omega_1)^2}{2\theta}$`, R`$\dfrac{I(\omega_2 - \omega_1)}{2\theta}$`],
    why: [R`The net work equals the change in rotational kinetic energy: $\tau\theta = \tfrac12 I\omega_2^2 - \tfrac12 I\omega_1^2$. Solving gives $\tau = \dfrac{I(\omega_2^2 - \omega_1^2)}{2\theta}$.`,
      R`This leaves out the factor of $\tfrac12$ in the kinetic energy.`,
      R`This squares the difference of the angular speeds. The change in kinetic energy is the difference of the squares, $\omega_2^2 - \omega_1^2$.`,
      R`This uses the change in angular speed, not the change in $\omega^2$. Kinetic energy depends on $\omega^2$.`], answer: 0 },
  { id: "q62-m5", type: "mcq", skill: "u6", topic: "6.2", difficulty: "moderate",
    stem: R`Disk A has rotational inertia $I$ and disk B has rotational inertia $3I$. Each disk starts from rest on a frictionless axle. The same constant net torque turns each disk through the same angle.`,
    question: R`What is the ratio $\omega_A/\omega_B$ of the angular speeds of the disks after they turn through that angle?`,
    choices: [R`$\sqrt{3}$`, R`$3$`, R`$\dfrac{1}{\sqrt{3}}$`, R`$\dfrac{1}{3}$`],
    why: [R`The same torque through the same angle does the same work, so both disks end with the same kinetic energy: $\tfrac12 I\omega_A^2 = \tfrac12 (3I)\omega_B^2$. Then $\omega_A/\omega_B = \sqrt{3}$.`,
      R`This assumes the angular speed is inversely proportional to the rotational inertia. The kinetic energy, not the angular speed, is the same for both disks.`,
      R`This inverts the ratio. The disk with the smaller rotational inertia ends with the greater angular speed.`,
      R`This inverts the ratio and also does not take the square root.`], answer: 0 },
  { id: "q62-m6", type: "mcq", skill: "u6", topic: "6.2", difficulty: "difficult",
    stem: R`A flywheel with a rotational inertia of $0.50$ kg·m² turns counterclockwise at $12$ rad/s. A motor then exerts a constant counterclockwise torque of $6.0$ N·m while the flywheel turns through $2.0$ revolutions. A constant clockwise friction torque of $1.0$ N·m acts on the axle the whole time.`,
    question: R`What is the flywheel's angular speed at the end of the $2.0$ revolutions?`,
    choices: [R`$20$ rad/s`, R`$21$ rad/s`, R`$22$ rad/s`, R`$14$ rad/s`],
    why: [R`The net torque is $6.0 - 1.0 = 5.0$ N·m, and $2.0$ revolutions is $4\pi = 12.6$ rad. The net work is $(5.0)(12.6) = 63$ J. Then $\tfrac12 I\omega^2 = \tfrac12 (0.50)(12)^2 + 63 = 99$ J, so $\omega = 20$ rad/s.`,
      R`This ignores the friction torque and uses $6.0$ N·m as the net torque.`,
      R`This adds the friction torque to the motor torque, $7.0$ N·m. Friction opposes the motion and does negative work.`,
      R`This uses $2.0$ rad in place of $2.0$ revolutions, so the net work is only $10$ J.`], answer: 0 },
  { id: "q62-f1a", type: "frq", skill: "u6", topic: "6.2", set: "q62-s3", part: "(a)",
    prompt: R`Calculate the work done by the worker's force while the boom turns through $90^\circ$.`,
    rows: [{ name: "Torque", earns: R`Calculates the torque of the force about the hinge, $\tau = FL = (50)(3.0) = 150$ N·m.` }, { name: "Work", earns: R`Uses $W = \tau\theta$ with $\theta = \pi/2$ rad and obtains $W = 2.4 \times 10^{2}$ J, with units.` }],
    solution: R`The force is perpendicular to the boom at the free end, so $\tau = FL = (50)(3.0) = 150$ N·m. The angle is $90^\circ = \pi/2$ rad, so $W = \tau\theta = (150)(\pi/2) = 2.4 \times 10^{2}$ J.` },
  { id: "q62-f1b", type: "frq", skill: "u6", topic: "6.2", set: "q62-s3", part: "(b)",
    prompt: R`Calculate the angular speed of the boom when it has turned through $90^\circ$.`,
    rows: [{ name: "Energy relation", earns: R`Sets the work equal to the change in rotational kinetic energy, $W = \tfrac12 I\omega^2$, with $I = \tfrac13 ML^2 = 120$ kg·m².` }, { name: "Angular speed", earns: R`Obtains $\omega = 2.0$ rad/s, with units.` }],
    solution: R`The rotational inertia is $I = \tfrac13 ML^2 = \tfrac13 (40)(3.0)^2 = 120$ kg·m². The boom starts from rest and only the worker's force does work, so $W = \tfrac12 I\omega^2$. Then $\omega = \sqrt{2W/I} = \sqrt{2(236)/120} = 2.0$ rad/s.` },
];

export default { forms: [{ id: "q62", group: "Unit 6: Energy and Momentum of Rotating Systems", name: "Topic 6.2 Quiz: Torque and Work", items }] };

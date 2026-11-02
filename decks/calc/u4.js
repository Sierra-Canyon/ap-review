import { graph } from "../../plot.js";

// Velocity graph used by c4r-m07 and c4r-m30: v(0) = -2, v(2) = 2, v(5) = 2, v(8) = -4 (straight pieces).
const vGraph = graph({
  x: [0, 8], y: [-4, 3], xname: "t", yname: "v(t)",
  segments: [[0, -2, 2, 2], [2, 2, 5, 2], [5, 2, 8, -4]],
  dots: [[0, -2, "closed"], [8, -4, "closed"]],
  alt: "Graph of the velocity v(t) for 0 to 8 seconds, made of three line segments: from (0, -2) up to (2, 2), level at 2 from (2, 2) to (5, 2), then down from (5, 2) to (8, -4).",
});

export const sets = {
  "c4r-s1": { name: "A velocity graph", label: "Graph", intro: String.raw`A particle moves along the $x$-axis. The graph of its velocity $v(t)$, in meters per second, for $0 \le t \le 8$ seconds is shown below. The graph consists of three line segments.`,
    sources: [{ title: "", blocks: [{ svg: vGraph }] }] },
  "c4r-s2": { name: "Values of f and g", label: "Table", intro: String.raw`The functions $f$ and $g$ have continuous second derivatives for all real numbers, and $g''(x) \ne 0$ near $x = 2$. Selected values of the functions and their derivatives are shown in the table below.`,
    sources: [{ title: "", blocks: [{ table: { head: ["$x$", "$f(x)$", "$f'(x)$", "$f''(x)$", "$g(x)$", "$g'(x)$", "$g''(x)$"], rows: [["$2$", "$0$", "$0$", "$3$", "$0$", "$0$", "$-6$"]] } }] }] },
  "c4r-s3": { name: "Two particles", label: "Free response", intro: String.raw`Particle $P$ moves along the $x$-axis with position $x_P(t) = 4\sin\left(\dfrac{\pi t}{3}\right)$ for $0 \le t \le 6$, where $t$ is measured in seconds and $x_P(t)$ in meters. Particle $Q$ moves along the $x$-axis with position $x_Q(t) = t^2 - 4t$ for $0 \le t \le 6$.`,
    sources: [{ title: "", blocks: [{ p: String.raw`Answer each part without a calculator. Show the work that leads to each answer.` }] }] },
  "c4r-s4": { name: "A melting block of ice", label: "Free response", intro: String.raw`A block of ice in the shape of a right circular cylinder is melting. Its radius $r$ decreases at a constant rate of $0.2$ centimeter per minute, and its height $h$ decreases at a constant rate of $0.5$ centimeter per minute. The volume of the block is $V = \pi r^2h$, and its surface area is $S = 2\pi r^2 + 2\pi rh$.`,
    sources: [{ title: "", blocks: [{ p: String.raw`Answer each part without a calculator. Show the work that leads to each answer.` }] }] },
  "c4r-s5": { name: "Power used by a building", label: "Free response", intro: String.raw`The electric power used by an office building, in kilowatts, is modeled by $P(t) = 60 + 15\sin\left(\dfrac{t}{2}\right) + 0.4t$, where $t$ is the number of hours after 6:00 A.M. and $0 \le t \le 10$.`,
    sources: [{ title: "", blocks: [{ p: String.raw`A graphing calculator is allowed. Give decimal answers to three decimal places.` }] }] },
};

export default [
  // 4.1 Interpreting the meaning of the derivative in context
  { id: "c4r-m01", type: "mcq", skill: "u4", topic: "4.1", calc: false,
    stem: String.raw`A candle burns down. The height of the candle, in centimeters, $t$ hours after it is lit is $H(t)$.`,
    question: String.raw`Which of the following is the best interpretation of $H'(2) = -1.8$?`,
    choices: [
      String.raw`At $t = 2$ hours, the height of the candle is decreasing at a rate of $1.8$ centimeters per hour.`,
      String.raw`The candle burns down $1.8$ centimeters during the first $2$ hours.`,
      String.raw`At $t = 2$ hours, the candle is $1.8$ centimeters shorter than when it was lit.`,
      String.raw`At $t = 2$ hours, the height of the candle is decreasing at a rate of $1.8$ hours per centimeter.`,
    ],
    why: [
      String.raw`$H'(2)$ is the instantaneous rate of change of $H$ at $t = 2$. Its units are the output units over the input units, centimeters per hour, and the negative sign means the height is decreasing at that instant.`,
      String.raw`This describes a total change over an interval, $H(2) - H(0)$. The derivative is a rate at one instant.`,
      String.raw`This also describes the total change $H(2) - H(0)$, not the rate at $t = 2$.`,
      String.raw`The units are reversed. The rate of change of $H$ is centimeters per hour, output over input.`,
    ],
    answer: 0 },
  { id: "c4r-m02", type: "mcq", skill: "u4", topic: "4.1", calc: false,
    stem: String.raw`The fuel efficiency of a car, in miles per gallon, when the car travels at a constant speed of $v$ miles per hour is $F(v)$.`,
    question: String.raw`Which of the following is the best interpretation of $F'(55) = -0.4$?`,
    choices: [
      String.raw`At a speed of $55$ miles per hour, the fuel efficiency is decreasing at a rate of $0.4$ miles per gallon for each mile per hour of increase in speed.`,
      String.raw`At a speed of $55$ miles per hour, the fuel efficiency of the car is $0.4$ miles per gallon.`,
      String.raw`At a speed of $55$ miles per hour, the car uses fuel at a rate of $0.4$ gallons per hour.`,
      String.raw`When the speed increases from $0$ to $55$ miles per hour, the fuel efficiency drops by $0.4$ miles per gallon.`,
    ],
    why: [
      String.raw`$F'(55)$ is the rate of change of fuel efficiency with respect to speed at $v = 55$. The units are miles per gallon per (mile per hour), and the negative sign means efficiency is decreasing as speed increases.`,
      String.raw`This treats the derivative as the value of the function. $F(55)$ is the fuel efficiency at $55$ miles per hour, not $F'(55)$.`,
      String.raw`The input of $F$ is speed, not time, so $F'$ is not a rate per hour. This also confuses fuel efficiency with fuel used.`,
      String.raw`This describes the total change $F(55) - F(0)$ over an interval, not the rate of change at $v = 55$.`,
    ],
    answer: 0 },
  { id: "c4r-m03", type: "mcq", skill: "u4", topic: "4.1", calc: false,
    stem: String.raw`The area of an oil slick, in square meters, $t$ hours after a leak begins is $A(t)$.`,
    question: String.raw`What are the units of $A''(t)$?`,
    choices: ["square meters per hour per hour", "square meters per hour", "meters per hour per hour", "square meters"],
    why: [
      String.raw`$A'(t)$ is in square meters per hour. $A''(t)$ is the rate of change of $A'(t)$ with respect to time, so it is in square meters per hour per hour.`,
      String.raw`These are the units of $A'(t)$, the first derivative. Differentiating again divides by hours once more.`,
      String.raw`The output of $A$ is area, so the units keep square meters. Differentiating does not change square meters to meters.`,
      String.raw`These are the units of $A(t)$ itself.`,
    ],
    answer: 0 },

  // 4.2 Straight-line motion
  { id: "c4r-m04", type: "mcq", skill: "u4", topic: "4.2", calc: false,
    stem: String.raw`A particle moves along the $x$-axis with position $x(t) = t^3 - 6t^2 + 9t + 2$ for $t \ge 0$.`,
    question: String.raw`What is the velocity of the particle at the time when its acceleration is $0$?`,
    choices: ["$-3$", "$4$", "$0$", "$9$"],
    why: [
      String.raw`$v(t) = 3t^2 - 12t + 9$ and $a(t) = 6t - 12$, so $a(t) = 0$ at $t = 2$. Then $v(2) = 12 - 24 + 9 = -3$.`,
      String.raw`$x(2) = 8 - 24 + 18 + 2 = 4$ is the position at $t = 2$, not the velocity.`,
      String.raw`This assumes zero acceleration means the particle is at rest. Zero acceleration means the velocity is not changing at that instant, and $v(2) = -3$.`,
      String.raw`$v(0) = 9$ is the velocity at $t = 0$, where $a(0) = -12 \ne 0$.`,
    ],
    answer: 0 },
  { id: "c4r-m05", type: "mcq", skill: "u4", topic: "4.2", calc: false,
    stem: String.raw`A particle moves along a line with velocity $v(t) = \sin t$ for $0 < t < 2\pi$.`,
    question: String.raw`On which of the following intervals is the speed of the particle increasing?`,
    choices: [String.raw`$0 < t < \frac{\pi}{2}$ and $\pi < t < \frac{3\pi}{2}$`, String.raw`$0 < t < \pi$ only`, String.raw`$\frac{\pi}{2} < t < \frac{3\pi}{2}$ only`, String.raw`$0 < t < \frac{\pi}{2}$ only`],
    why: [
      String.raw`Speed increases when $v(t)$ and $a(t)$ have the same sign. $a(t) = \cos t$. Both $\sin t$ and $\cos t$ are positive on $0 < t < \dfrac{\pi}{2}$, and both are negative on $\pi < t < \dfrac{3\pi}{2}$.`,
      String.raw`This is where $v(t) > 0$, where the particle moves in the positive direction. On $\dfrac{\pi}{2} < t < \pi$, $a(t) < 0$, so the particle is slowing down.`,
      String.raw`This is where $a(t) < 0$. Negative acceleration increases speed only when the velocity is also negative.`,
      String.raw`This finds where $v$ and $a$ are both positive but leaves out where both are negative, $\pi < t < \dfrac{3\pi}{2}$.`,
    ],
    answer: 0 },
  { id: "c4r-m06", type: "mcq", skill: "u4", topic: "4.2", calc: false,
    stem: String.raw`The position of a particle moving along a line is $s(t) = t^3 - 12t^2 + 45t$ for $t \ge 0$.`,
    question: String.raw`What is the acceleration of the particle at the first time its velocity is $0$?`,
    choices: ["$-6$", "$6$", "$54$", "$-24$"],
    why: [
      String.raw`$v(t) = 3t^2 - 24t + 45 = 3(t - 3)(t - 5)$, so the velocity is first $0$ at $t = 3$. $a(t) = 6t - 24$, so $a(3) = -6$.`,
      String.raw`$a(5) = 6$. The velocity is $0$ at $t = 5$ too, but $t = 3$ comes first.`,
      String.raw`$s(3) = 27 - 108 + 135 = 54$ is the position at $t = 3$, not the acceleration.`,
      String.raw`$a(0) = -24$ is the acceleration at $t = 0$, where $v(0) = 45 \ne 0$.`,
    ],
    answer: 0 },
  { id: "c4r-m07", type: "mcq", skill: "u4", topic: "4.2", calc: false, set: "c4r-s1",
    question: String.raw`Which of the following describes the motion of the particle at $t = 7$?`,
    choices: ["Moving to the left and speeding up", "Moving to the left and slowing down", "Moving to the right and slowing down", "Moving to the right and speeding up"],
    why: [
      String.raw`On $5 < t < 8$ the graph is a line with slope $-2$, so $a(7) = -2$, and $v(7) = 2 - 2(2) = -2$. The velocity is negative, so the particle moves left, and $v$ and $a$ have the same sign, so it is speeding up.`,
      String.raw`This assumes negative acceleration always means slowing down. With $v(7) < 0$ and $a(7) < 0$, the speed $|v|$ is increasing.`,
      String.raw`The graph is below the $t$-axis at $t = 7$, so $v(7) < 0$ and the particle moves left. A falling graph does not mean the particle moves right.`,
      String.raw`The particle is speeding up, but $v(7) = -2 < 0$, so it moves to the left.`,
    ],
    answer: 0 },
  { id: "c4r-m30", type: "mcq", skill: "u4", topic: "4.2", calc: false, set: "c4r-s1",
    question: String.raw`How many times does the particle change direction on the interval $0 < t < 8$?`,
    choices: ["Two", "One", "Three", "None"],
    why: [
      String.raw`The particle changes direction where $v(t)$ changes sign. The graph crosses the $t$-axis at $t = 1$ (from negative to positive) and at $t = 6$ (from positive to negative), so two times.`,
      String.raw`This counts only one of the two crossings. $v$ changes sign at both $t = 1$ and $t = 6$.`,
      String.raw`This adds a corner at $t = 2$ or $t = 5$ to the two crossings. A corner is where the acceleration changes. $v$ stays positive there, so the direction does not change.`,
      String.raw`This misses the sign changes of $v$. The graph crosses the $t$-axis at $t = 1$ and $t = 6$, and $v(t)$ changes sign at each crossing, so the particle changes direction twice.`,
    ],
    answer: 0 },
  { id: "c4r-m08", type: "mcq", skill: "u4", topic: "4.2", calc: true,
    stem: String.raw`A particle moves along the $x$-axis with velocity $v(t) = 2\sin(0.8t) - 1$ for $0 \le t \le 6$.`,
    question: String.raw`At what time $t$ does the particle first change direction?`,
    choices: ["$0.654$", "$3.272$", "$1.963$", "$0.524$"],
    why: [
      String.raw`$v(0) = -1 < 0$. Solving $2\sin(0.8t) - 1 = 0$ gives $\sin(0.8t) = 0.5$, so $0.8t = \dfrac{\pi}{6}$ and $t = 0.654$. $v$ changes from negative to positive there, so the particle changes direction.`,
      String.raw`$t = 3.272$, from $0.8t = \dfrac{5\pi}{6}$, is the second time $v$ changes sign, not the first.`,
      String.raw`$t = 1.963$ is where $a(t) = 1.6\cos(0.8t) = 0$, the maximum of $v$. The direction changes where $v$ changes sign.`,
      String.raw`$0.524$ is $\dfrac{\pi}{6}$, the value of $0.8t$ at the answer. Dividing by $0.8$ was left out.`,
    ],
    answer: 0 },
  { id: "c4r-m09", type: "mcq", skill: "u4", topic: "4.2", calc: false,
    stem: String.raw`A particle moves along the $x$-axis with position $x(t) = t^2 - 8\ln t$ for $t > 0$.`,
    question: String.raw`At $t = 1$, what is the speed of the particle, and is the speed increasing or decreasing?`,
    choices: ["The speed is $6$, and the speed is decreasing.", "The speed is $-6$, and the speed is decreasing.", "The speed is $6$, and the speed is increasing.", "The speed is $1$, and the speed is increasing."],
    why: [
      String.raw`$v(t) = 2t - \dfrac{8}{t}$, so $v(1) = -6$ and the speed is $|v(1)| = 6$. $a(t) = 2 + \dfrac{8}{t^2}$, so $a(1) = 10$. Since $v(1) < 0$ and $a(1) > 0$ have opposite signs, the speed is decreasing.`,
      String.raw`Speed is the absolute value of velocity, so it cannot be negative. $-6$ is the velocity.`,
      String.raw`This assumes positive acceleration always increases speed. Here $v(1) < 0$ and $a(1) > 0$, so the particle is slowing down.`,
      String.raw`$x(1) = 1 - 8\ln 1 = 1$ is the position, not the speed.`,
    ],
    answer: 0 },

  // 4.3 Rates of change in applied contexts other than motion
  { id: "c4r-m10", type: "mcq", skill: "u4", topic: "4.3", calc: true,
    stem: String.raw`The number of people in a town who have heard a rumor $t$ days after it starts is modeled by $P(t) = \dfrac{1200}{1 + 5e^{-0.4t}}$.`,
    question: String.raw`At what rate is the number of people who have heard the rumor changing at $t = 3$ days?`,
    choices: ["$115.108$ people per day", "$478.856$ people per day", "$92.952$ people per day", "$-287.770$ people per day"],
    why: [
      String.raw`$P'(t) = \dfrac{1200 \cdot 5 \cdot 0.4\, e^{-0.4t}}{\left(1 + 5e^{-0.4t}\right)^2}$, so $P'(3) = 115.108$ people per day. A calculator's numerical derivative gives the same value.`,
      String.raw`$P(3) = 478.856$ is the number of people who have heard the rumor at $t = 3$, not the rate.`,
      String.raw`$\dfrac{P(3) - P(0)}{3} = 92.952$ is the average rate of change over $0 \le t \le 3$, not the rate at $t = 3$.`,
      String.raw`The chain rule factor $-0.4$ from $e^{-0.4t}$ was left out, which gives $-\dfrac{1200 \cdot 5e^{-1.2}}{\left(1 + 5e^{-1.2}\right)^2} = -287.770$.`,
    ],
    answer: 0 },
  { id: "c4r-m11", type: "mcq", skill: "u4", topic: "4.3", calc: false,
    stem: String.raw`The kinetic energy, in joules, of a $1500$-kilogram car moving at $v$ meters per second is $K = \dfrac{1}{2}(1500)v^2$.`,
    question: String.raw`What is the rate of change of the kinetic energy with respect to the speed when $v = 20$?`,
    choices: ["$30000$ joules per (meter per second)", "$300000$ joules per (meter per second)", "$15000$ joules per (meter per second)", "$60000$ joules per (meter per second)"],
    why: [
      String.raw`$K = 750v^2$, so $\dfrac{dK}{dv} = 1500v$. At $v = 20$ the rate is $30000$ joules per (meter per second).`,
      String.raw`$K(20) = 750(400) = 300000$ joules is the kinetic energy, not its rate of change.`,
      String.raw`This differentiates $v^2$ as $v$, leaving out the factor $2$ from the power rule: $750(20) = 15000$.`,
      String.raw`The factor $\dfrac{1}{2}$ was left out: $2(1500)(20) = 60000$.`,
    ],
    answer: 0 },
  { id: "c4r-m12", type: "mcq", skill: "u4", topic: "4.3", calc: false,
    stem: String.raw`The mass of sand in the top chamber of a large hourglass, in grams, $t$ minutes after it is turned over is $M(t) = 200 - 6t^{3/2}$.`,
    question: String.raw`At what rate is the mass of sand in the top chamber changing at $t = 4$ minutes?`,
    choices: ["$-18$ grams per minute", "$-12$ grams per minute", "$152$ grams per minute", "$-72$ grams per minute"],
    why: [
      String.raw`$M'(t) = -6 \cdot \dfrac{3}{2}t^{1/2} = -9\sqrt{t}$, so $M'(4) = -18$ grams per minute.`,
      String.raw`The factor $\dfrac{3}{2}$ from the power rule was left out: $-6\sqrt{4} = -12$.`,
      String.raw`$M(4) = 200 - 6(8) = 152$ grams is the mass at $t = 4$, not the rate.`,
      String.raw`The exponent was not lowered: $-9 \cdot 4^{3/2} = -72$. The power rule gives $t^{3/2 - 1} = t^{1/2}$.`,
    ],
    answer: 0 },

  // 4.4 Introduction to related rates
  { id: "c4r-m13", type: "mcq", skill: "u4", topic: "4.4", calc: false,
    stem: String.raw`The variables $x$ and $y$ are differentiable functions of $t$ with $2x^2 - y^2 = 7$.`,
    question: String.raw`If $\dfrac{dx}{dt} = 3$ when $x = 2$ and $y = 1$, what is $\dfrac{dy}{dt}$ at that instant?`,
    choices: ["$12$", "$-12$", "$3$", "$4$"],
    why: [
      String.raw`Differentiating with respect to $t$ gives $4x\dfrac{dx}{dt} - 2y\dfrac{dy}{dt} = 0$, so $\dfrac{dy}{dt} = \dfrac{2x}{y}\cdot\dfrac{dx}{dt} = \dfrac{2(2)}{1}(3) = 12$.`,
      String.raw`The sign was lost when $-2y\dfrac{dy}{dt}$ was moved to the other side of the equation.`,
      String.raw`$x$ and $y$ were switched: $\dfrac{2y}{x}\cdot\dfrac{dx}{dt} = \dfrac{2}{2}(3) = 3$.`,
      String.raw`$\dfrac{2x}{y} = 4$ is $\dfrac{dy}{dx}$. Multiplying by $\dfrac{dx}{dt} = 3$ was left out.`,
    ],
    answer: 0 },
  { id: "c4r-m14", type: "mcq", skill: "u4", topic: "4.4", calc: false,
    stem: String.raw`A box with a square base has base edge $x$ and height $h$, both functions of time $t$. Its volume is $V = x^2h$.`,
    question: String.raw`Which of the following gives $\dfrac{dV}{dt}$?`,
    choices: [
      String.raw`$2xh\dfrac{dx}{dt} + x^2\dfrac{dh}{dt}$`,
      String.raw`$2x\dfrac{dx}{dt}\cdot\dfrac{dh}{dt}$`,
      String.raw`$2xh + x^2$`,
      String.raw`$2xh\dfrac{dx}{dt}$`,
    ],
    why: [
      String.raw`By the product rule and the chain rule, $\dfrac{dV}{dt} = \dfrac{d}{dt}\left(x^2\right) h + x^2\dfrac{dh}{dt} = 2xh\dfrac{dx}{dt} + x^2\dfrac{dh}{dt}$.`,
      String.raw`This multiplies the derivatives of the two factors. The derivative of a product is not the product of the derivatives.`,
      String.raw`This differentiates with respect to $x$ and $h$ but leaves out the chain rule factors $\dfrac{dx}{dt}$ and $\dfrac{dh}{dt}$.`,
      String.raw`This treats $h$ as a constant. Both $x$ and $h$ change with $t$, so the product rule gives a second term $x^2\dfrac{dh}{dt}$.`,
    ],
    answer: 0 },
  { id: "c4r-m15", type: "mcq", skill: "u4", topic: "4.4", calc: false,
    stem: String.raw`The radius of a circle decreases at a constant rate of $0.5$ centimeter per second.`,
    question: String.raw`At the instant the radius is $4$ centimeters, at what rate is the area of the circle changing?`,
    choices: [String.raw`$-4\pi$ square centimeters per second`, String.raw`$4\pi$ square centimeters per second`, String.raw`$-8\pi$ square centimeters per second`, String.raw`$-\pi$ square centimeters per second`],
    why: [
      String.raw`$A = \pi r^2$, so $\dfrac{dA}{dt} = 2\pi r\dfrac{dr}{dt} = 2\pi(4)(-0.5) = -4\pi$ square centimeters per second.`,
      String.raw`The radius is decreasing, so $\dfrac{dr}{dt} = -0.5$, not $0.5$.`,
      String.raw`$2\pi r = 8\pi$ is $\dfrac{dA}{dr}$. Multiplying by $\dfrac{dr}{dt} = -0.5$ was left out.`,
      String.raw`The factor $r$ was dropped: $2\pi(-0.5) = -\pi$. The derivative of $\pi r^2$ with respect to $t$ is $2\pi r\dfrac{dr}{dt}$.`,
    ],
    answer: 0 },

  // 4.5 Solving related rates problems
  { id: "c4r-m16", type: "mcq", skill: "u4", topic: "4.5", calc: false,
    stem: String.raw`A $13$-foot ladder leans against a vertical wall. The bottom of the ladder slides away from the wall at $2$ feet per second.`,
    question: String.raw`At what rate is the height of the top of the ladder changing when the bottom is $5$ feet from the wall?`,
    choices: [String.raw`$-\frac{5}{6}$ foot per second`, String.raw`$\frac{5}{6}$ foot per second`, String.raw`$-\frac{24}{5}$ feet per second`, String.raw`$-2$ feet per second`],
    why: [
      String.raw`$x^2 + y^2 = 169$. When $x = 5$, $y = 12$. Then $2x\dfrac{dx}{dt} + 2y\dfrac{dy}{dt} = 0$ gives $\dfrac{dy}{dt} = -\dfrac{5(2)}{12} = -\dfrac{5}{6}$ foot per second.`,
      String.raw`The top of the ladder moves down, so its height is decreasing. The sign was lost when solving for $\dfrac{dy}{dt}$.`,
      String.raw`$x$ and $y$ were switched: $-\dfrac{12(2)}{5} = -\dfrac{24}{5}$.`,
      String.raw`This assumes the top moves at the same rate as the bottom. The rates are related through $x^2 + y^2 = 169$, not equal.`,
    ],
    answer: 0 },
  { id: "c4r-m17", type: "mcq", skill: "u4", topic: "4.5", calc: false,
    stem: String.raw`Water is poured at $4$ cubic feet per minute into a tank shaped like a cone with its vertex at the bottom. The tank is $9$ feet tall and has a radius of $3$ feet at the top. The volume of a cone is $V = \dfrac{1}{3}\pi r^2h$.`,
    question: String.raw`How fast is the depth of the water rising when the water is $6$ feet deep?`,
    choices: [String.raw`$\frac{1}{\pi}$ foot per minute`, String.raw`$\frac{3}{\pi}$ feet per minute`, String.raw`$\frac{4}{3\pi}$ foot per minute`, String.raw`$\frac{1}{81\pi}$ foot per minute`],
    why: [
      String.raw`By similar triangles $\dfrac{r}{h} = \dfrac{3}{9}$, so $r = \dfrac{h}{3}$ and $V = \dfrac{\pi h^3}{27}$. Then $\dfrac{dV}{dt} = \dfrac{\pi h^2}{9}\cdot\dfrac{dh}{dt}$, so $4 = \dfrac{36\pi}{9}\cdot\dfrac{dh}{dt}$ and $\dfrac{dh}{dt} = \dfrac{1}{\pi}$ foot per minute.`,
      String.raw`This holds the radius fixed at $2$, its value when $h = 6$, before differentiating: $4 = \dfrac{4\pi}{3}\cdot\dfrac{dh}{dt}$. The radius changes as the water rises, so substitute $r = \dfrac{h}{3}$ first.`,
      String.raw`This holds the radius fixed at $3$, the radius at the top of the tank: $4 = 3\pi\dfrac{dh}{dt}$. The radius of the water's surface depends on $h$.`,
      String.raw`The ratio is upside down: $r = 3h$ gives $V = 3\pi h^3$ and $4 = 9\pi(36)\dfrac{dh}{dt}$. Similar triangles give $\dfrac{r}{h} = \dfrac{3}{9}$.`,
    ],
    answer: 0 },
  { id: "c4r-m18", type: "mcq", skill: "u4", topic: "4.5", calc: false,
    stem: String.raw`A softball field is a square with sides of $60$ feet. A runner runs from home plate toward first base at $20$ feet per second.`,
    question: String.raw`At what rate is the distance between the runner and third base changing when the runner is $45$ feet from home plate?`,
    choices: ["$12$ feet per second", "$20$ feet per second", String.raw`$\frac{100}{3}$ feet per second`, "$16$ feet per second"],
    why: [
      String.raw`Home to first and home to third are perpendicular sides of the square. With $x$ the runner's distance from home, the distance to third base is $D = \sqrt{x^2 + 60^2}$. When $x = 45$, $D = 75$. From $2D\dfrac{dD}{dt} = 2x\dfrac{dx}{dt}$, $\dfrac{dD}{dt} = \dfrac{45(20)}{75} = 12$ feet per second.`,
      String.raw`This assumes the distance to third base changes at the runner's speed. The rates are related through $D^2 = x^2 + 60^2$, not equal.`,
      String.raw`This inverts the ratio: $\dfrac{75(20)}{45}$. Solving $2D\dfrac{dD}{dt} = 2x\dfrac{dx}{dt}$ gives $\dfrac{dD}{dt} = \dfrac{x}{D}\cdot\dfrac{dx}{dt}$.`,
      String.raw`This uses the fixed side, $60$, in place of the runner's distance $x = 45$: $\dfrac{60(20)}{75} = 16$.`,
    ],
    answer: 0 },
  { id: "c4r-m19", type: "mcq", skill: "u4", topic: "4.5", calc: true,
    stem: String.raw`A triangle has two sides of fixed lengths $8$ centimeters and $11$ centimeters. The angle $\theta$ between them increases at $0.15$ radian per second. The area of the triangle is $A = \dfrac{1}{2}(8)(11)\sin\theta$.`,
    question: String.raw`At what rate is the area changing when $\theta = 1.1$ radians?`,
    choices: ["$2.994$ square centimeters per second", "$19.958$ square centimeters per second", "$5.882$ square centimeters per second", "$5.987$ square centimeters per second"],
    why: [
      String.raw`$\dfrac{dA}{dt} = 44\cos\theta\,\dfrac{d\theta}{dt} = 44\cos(1.1)(0.15) = 2.994$ square centimeters per second.`,
      String.raw`$44\cos(1.1) = 19.958$ is $\dfrac{dA}{d\theta}$. Multiplying by $\dfrac{d\theta}{dt} = 0.15$ was left out.`,
      String.raw`This uses $\sin\theta$ in place of its derivative $\cos\theta$: $44\sin(1.1)(0.15) = 5.882$.`,
      String.raw`The factor $\dfrac{1}{2}$ was left out: $88\cos(1.1)(0.15) = 5.987$.`,
    ],
    answer: 0 },
  { id: "c4r-m20", type: "mcq", skill: "u4", topic: "4.5", calc: true,
    stem: String.raw`Water drains from a spherical tank of radius $5$ meters. When the water is $h$ meters deep, the volume of water in the tank is $V = \dfrac{\pi}{3}h^2(15 - h)$ cubic meters. The water drains at $0.8$ cubic meter per minute.`,
    question: String.raw`At what rate is the depth of the water changing when the water is $3.6$ meters deep?`,
    choices: ["$-0.011$ meter per minute", "$0.011$ meter per minute", "$-0.007$ meter per minute", "$-0.005$ meter per minute"],
    why: [
      String.raw`$V = \dfrac{\pi}{3}\left(15h^2 - h^3\right)$, so $\dfrac{dV}{dt} = \pi\left(10h - h^2\right)\dfrac{dh}{dt}$. At $h = 3.6$, $-0.8 = 23.04\pi\dfrac{dh}{dt}$, so $\dfrac{dh}{dt} = -0.011$ meter per minute.`,
      String.raw`The water drains, so $\dfrac{dV}{dt} = -0.8$ and the depth is decreasing. The sign was lost.`,
      String.raw`This differentiates only the $15h^2$ term: $-0.8 = \dfrac{\pi}{3}(30h)\dfrac{dh}{dt}$. The $-h^3$ term also depends on $h$.`,
      String.raw`This divides $-0.8$ by the volume $V(3.6)$ instead of by $\dfrac{dV}{dh}$ at $h = 3.6$.`,
    ],
    answer: 0 },

  // 4.6 Approximating values using local linearity and linearization
  { id: "c4r-m21", type: "mcq", skill: "u4", topic: "4.6", calc: false,
    stem: String.raw`A differentiable function $f$ has $f(-1) = 4$ and $f'(-1) = 2.5$.`,
    question: String.raw`Using the line tangent to the graph of $f$ at $x = -1$, what is the approximate value of $f(-1.2)$?`,
    choices: ["$3.5$", "$4.5$", "$1$", "$-0.5$"],
    why: [
      String.raw`The tangent line is $y = 4 + 2.5(x + 1)$. At $x = -1.2$, $y = 4 + 2.5(-0.2) = 3.5$.`,
      String.raw`This uses $x + 1 = 0.2$. Moving from $x = -1$ to $x = -1.2$ is a change of $-0.2$.`,
      String.raw`This uses $2.5x + 4$, with $x$ in place of $x + 1$: $2.5(-1.2) + 4 = 1$.`,
      String.raw`$2.5(-0.2) = -0.5$ is the change in $y$ along the tangent line. Adding it to $f(-1) = 4$ was left out.`,
    ],
    answer: 0 },
  { id: "c4r-m22", type: "mcq", skill: "u4", topic: "4.6", calc: false,
    question: String.raw`Using the local linear approximation of $f(x) = x^5$ at $x = 2$, what is the approximate value of $(2.02)^5$?`,
    choices: ["$33.6$", "$32.8$", "$34.56$", "$1.6$"],
    why: [
      String.raw`$f(2) = 32$ and $f'(x) = 5x^4$, so $f'(2) = 80$. Then $(2.02)^5 \approx 32 + 80(0.02) = 33.6$.`,
      String.raw`This uses $f'(2) = 5(2)^3 = 40$. The power rule lowers the exponent by one, from $5$ to $4$.`,
      String.raw`This uses $f'(2) = 4(2)^5 = 128$, taking the new exponent as the coefficient and keeping the old exponent.`,
      String.raw`$80(0.02) = 1.6$ is only the change in $y$. Adding $f(2) = 32$ was left out.`,
    ],
    answer: 0 },
  { id: "c4r-m23", type: "mcq", skill: "u4", topic: "4.6", calc: false,
    stem: String.raw`A twice-differentiable function $g$ has $g(5) = -2$, $g'(5) = 0.6$, and $g''(x) < 0$ for all $x$.`,
    question: String.raw`The line tangent to the graph of $g$ at $x = 5$ is used to approximate $g(4.5)$. Which of the following is true?`,
    choices: [
      String.raw`The approximation is $-2.3$, and it is an overestimate.`,
      String.raw`The approximation is $-2.3$, and it is an underestimate.`,
      String.raw`The approximation is $-1.7$, and it is an overestimate.`,
      String.raw`The approximation is $-1.7$, and it is an underestimate.`,
    ],
    why: [
      String.raw`$g(4.5) \approx -2 + 0.6(-0.5) = -2.3$. Since $g'' < 0$, the graph of $g$ is concave down and lies below its tangent lines on both sides of $x = 5$, so the tangent line value is an overestimate.`,
      String.raw`The value $-2.3$ is right, but a concave down graph lies below its tangent line, so the tangent line gives an overestimate. This holds to the left of $x = 5$ as well as to the right.`,
      String.raw`$-2 + 0.6(0.5) = -1.7$ uses $+0.5$ for the change in $x$. Moving from $x = 5$ to $x = 4.5$ is a change of $-0.5$.`,
      String.raw`$-1.7$ uses the wrong sign for the change in $x$, and a concave down graph gives an overestimate, not an underestimate.`,
    ],
    answer: 0 },
  { id: "c4r-m24", type: "mcq", skill: "u4", topic: "4.6", calc: false,
    stem: String.raw`Let $g(x) = \ln(3x - 2)$.`,
    question: String.raw`Using the line tangent to the graph of $g$ at $x = 1$, what is the approximate value of $g(1.1)$?`,
    choices: ["$0.3$", "$0.1$", "$3.3$", "$1.3$"],
    why: [
      String.raw`$g(1) = \ln 1 = 0$ and $g'(x) = \dfrac{3}{3x - 2}$, so $g'(1) = 3$. The tangent line is $y = 3(x - 1)$, and at $x = 1.1$, $y = 0.3$.`,
      String.raw`This uses $g'(x) = \dfrac{1}{3x - 2}$, leaving out the chain rule factor $3$, so the slope is $1$.`,
      String.raw`This uses $y = 3x$, with $x$ in place of $x - 1$: $3(1.1) = 3.3$.`,
      String.raw`This uses $g(1) = 1$. Since $\ln 1 = 0$, the tangent line starts at $y = 0$.`,
    ],
    answer: 0 },
  { id: "c4r-m25", type: "mcq", skill: "u4", topic: "4.6", calc: true,
    stem: String.raw`A differentiable function $f$ has $f(4) = 1.5$ and $f'(x) = \dfrac{\ln\left(x^2 + 1\right)}{x}$.`,
    question: String.raw`Using the line tangent to the graph of $f$ at $x = 4$, what is the approximate value of $f(4.3)$?`,
    choices: ["$1.712$", "$1.707$", "$1.288$", "$0.212$"],
    why: [
      String.raw`$f'(4) = \dfrac{\ln 17}{4} = 0.70830$. The tangent line gives $f(4.3) \approx 1.5 + 0.70830(0.3) = 1.712$.`,
      String.raw`This uses the slope at $x = 4.3$, $f'(4.3) = 0.69067$. The tangent line at $x = 4$ uses $f'(4)$.`,
      String.raw`This subtracts $0.70830(0.3)$, which approximates $f(3.7)$. Moving from $x = 4$ to $x = 4.3$ is a change of $+0.3$.`,
      String.raw`$0.70830(0.3) = 0.212$ is only the change in $y$. Adding $f(4) = 1.5$ was left out.`,
    ],
    answer: 0 },

  // 4.7 L'Hospital's Rule
  { id: "c4r-m26", type: "mcq", skill: "u4", topic: "4.7", calc: false,
    question: String.raw`$\displaystyle \lim_{x \to 0} \dfrac{\ln(1 + 5x)}{3x}$ is`,
    choices: [String.raw`$\frac{5}{3}$`, String.raw`$\frac{1}{3}$`, String.raw`$\frac{3}{5}$`, "$0$"],
    why: [
      String.raw`The limit has the form $\dfrac{0}{0}$, so by L'Hospital's Rule it equals $\displaystyle \lim_{x \to 0} \dfrac{5/(1 + 5x)}{3} = \dfrac{5}{3}$.`,
      String.raw`The chain rule factor $5$ was left out: the derivative of $\ln(1 + 5x)$ is $\dfrac{5}{1 + 5x}$, not $\dfrac{1}{1 + 5x}$.`,
      String.raw`This is the reciprocal. The numerator's derivative goes on top.`,
      String.raw`This treats $\dfrac{0}{0}$ as $0$. The form $\dfrac{0}{0}$ is indeterminate and calls for L'Hospital's Rule.`,
    ],
    answer: 0 },
  { id: "c4r-m27", type: "mcq", skill: "u4", topic: "4.7", calc: false,
    question: String.raw`$\displaystyle \lim_{x \to 1} \dfrac{\ln x}{x^2 - 1}$ is`,
    choices: [String.raw`$\frac{1}{2}$`, "$2$", "$0$", "nonexistent"],
    why: [
      String.raw`The limit has the form $\dfrac{0}{0}$, so by L'Hospital's Rule it equals $\displaystyle \lim_{x \to 1} \dfrac{1/x}{2x} = \dfrac{1}{2}$.`,
      String.raw`This is the reciprocal: $\dfrac{2x}{1/x}$ at $x = 1$. The derivative of the numerator goes on top.`,
      String.raw`This treats $\dfrac{0}{0}$ as $0$. The form $\dfrac{0}{0}$ is indeterminate and calls for L'Hospital's Rule.`,
      String.raw`The form $\dfrac{0}{0}$ does not mean the limit fails to exist. L'Hospital's Rule shows the limit is $\dfrac{1}{2}$.`,
    ],
    answer: 0 },
  { id: "c4r-m28", type: "mcq", skill: "u4", topic: "4.7", calc: false, set: "c4r-s2",
    question: String.raw`$\displaystyle \lim_{x \to 2} \dfrac{f(x)}{g(x)}$ is`,
    choices: [String.raw`$-\frac{1}{2}$`, "nonexistent", "$0$", "$-2$"],
    why: [
      String.raw`$f(2) = g(2) = 0$, so the form is $\dfrac{0}{0}$, and L'Hospital's Rule gives $\displaystyle \lim_{x \to 2} \dfrac{f'(x)}{g'(x)}$. Since $f'(2) = g'(2) = 0$, this is again $\dfrac{0}{0}$. Applying the rule again, the limit is $\dfrac{f''(2)}{g''(2)} = \dfrac{3}{-6} = -\dfrac{1}{2}$.`,
      String.raw`After one application the form is still $\dfrac{0}{0}$, which is indeterminate. It does not mean the limit fails to exist. Apply the rule a second time.`,
      String.raw`This reads $\dfrac{f'(2)}{g'(2)} = \dfrac{0}{0}$ as $0$. That form is indeterminate, so the rule is applied again.`,
      String.raw`This is the reciprocal, $\dfrac{g''(2)}{f''(2)} = \dfrac{-6}{3}$.`,
    ],
    answer: 0 },
  { id: "c4r-m29", type: "mcq", skill: "u4", topic: "4.7", calc: false,
    question: String.raw`$\displaystyle \lim_{x \to 0} \dfrac{e^{x} - 1 - x}{x^2}$ is`,
    choices: [String.raw`$\frac{1}{2}$`, "$0$", "$1$", "nonexistent"],
    why: [
      String.raw`The form is $\dfrac{0}{0}$. One application gives $\dfrac{e^{x} - 1}{2x}$, still $\dfrac{0}{0}$. A second gives $\dfrac{e^{x}}{2}$, which approaches $\dfrac{1}{2}$.`,
      String.raw`This stops after one application and reads $\dfrac{e^{x} - 1}{2x}$ as $0$ because the numerator is $0$. That form is still $\dfrac{0}{0}$.`,
      String.raw`The factor $2$ from the derivative of $x^2$ was left out, giving $\dfrac{e^{x} - 1}{x}$ and then $e^{x} \to 1$.`,
      String.raw`The form $\dfrac{0}{0}$ does not mean the limit fails to exist. Two applications of L'Hospital's Rule give $\dfrac{1}{2}$.`,
    ],
    answer: 0 },

  // Free response 1: two particles (no calculator)
  { id: "c4r-f1a", type: "frq", skill: "u4", topic: "4.2", calc: false, set: "c4r-s3", part: "(a)",
    prompt: String.raw`Find the velocity and the acceleration of particle $P$ at time $t = 1$. Is the speed of particle $P$ increasing or decreasing at $t = 1$? Give a reason for your answer.`,
    rows: [
      { name: "Velocity and acceleration", earns: String.raw`$v_P(1) = \dfrac{2\pi}{3}$ and $a_P(1) = -\dfrac{2\sqrt{3}\pi^2}{9}$, from $v_P(t) = \dfrac{4\pi}{3}\cos\left(\dfrac{\pi t}{3}\right)$ and $a_P(t) = -\dfrac{4\pi^2}{9}\sin\left(\dfrac{\pi t}{3}\right)$.` },
      { name: "Speed with reason", earns: String.raw`Decreasing, because $v_P(1) > 0$ and $a_P(1) < 0$ have opposite signs.` },
    ],
    solution: String.raw`$v_P(t) = \dfrac{4\pi}{3}\cos\left(\dfrac{\pi t}{3}\right)$ and $a_P(t) = -\dfrac{4\pi^2}{9}\sin\left(\dfrac{\pi t}{3}\right)$.

$v_P(1) = \dfrac{4\pi}{3}\cdot\dfrac{1}{2} = \dfrac{2\pi}{3}$ meters per second and $a_P(1) = -\dfrac{4\pi^2}{9}\cdot\dfrac{\sqrt{3}}{2} = -\dfrac{2\sqrt{3}\pi^2}{9}$ meters per second per second.

The speed of particle $P$ is decreasing at $t = 1$ because $v_P(1)$ and $a_P(1)$ have opposite signs.` },
  { id: "c4r-f1b", type: "frq", skill: "u4", topic: "4.2", calc: false, set: "c4r-s3", part: "(b)",
    prompt: String.raw`At what times $t$, $0 < t < 6$, does particle $P$ change direction? Justify your answer.`,
    rows: [
      { name: "Zeros of velocity", earns: String.raw`$v_P(t) = 0$ when $\cos\left(\dfrac{\pi t}{3}\right) = 0$, at $t = \dfrac{3}{2}$ and $t = \dfrac{9}{2}$.` },
      { name: "Answer with justification", earns: String.raw`$t = \dfrac{3}{2}$ and $t = \dfrac{9}{2}$, because $v_P(t)$ changes sign at each of these times.` },
    ],
    solution: String.raw`$v_P(t) = \dfrac{4\pi}{3}\cos\left(\dfrac{\pi t}{3}\right) = 0$ when $\dfrac{\pi t}{3} = \dfrac{\pi}{2}$ or $\dfrac{3\pi}{2}$, so at $t = \dfrac{3}{2}$ and $t = \dfrac{9}{2}$.

$v_P(t) > 0$ for $0 < t < \dfrac{3}{2}$, $v_P(t) < 0$ for $\dfrac{3}{2} < t < \dfrac{9}{2}$, and $v_P(t) > 0$ for $\dfrac{9}{2} < t < 6$.

Particle $P$ changes direction at $t = \dfrac{3}{2}$ and $t = \dfrac{9}{2}$ because its velocity changes sign at those times.` },
  { id: "c4r-f1c", type: "frq", skill: "u4", topic: "4.2", calc: false, set: "c4r-s3", part: "(c)",
    prompt: String.raw`For what values of $t$, $0 < t < 6$, are particles $P$ and $Q$ moving in the same direction? Justify your answer.`,
    rows: [
      { name: "Velocity of Q", earns: String.raw`$v_Q(t) = 2t - 4$, which is negative for $0 < t < 2$ and positive for $2 < t < 6$.` },
      { name: "Answer with justification", earns: String.raw`$\dfrac{3}{2} < t < 2$ and $\dfrac{9}{2} < t < 6$, because $v_P(t)$ and $v_Q(t)$ have the same sign on these intervals.` },
    ],
    solution: String.raw`$v_Q(t) = 2t - 4$, so $v_Q(t) < 0$ for $0 < t < 2$ and $v_Q(t) > 0$ for $2 < t < 6$.

From part (b), $v_P(t) > 0$ on $0 < t < \dfrac{3}{2}$ and $\dfrac{9}{2} < t < 6$, and $v_P(t) < 0$ on $\dfrac{3}{2} < t < \dfrac{9}{2}$.

Both velocities are negative on $\dfrac{3}{2} < t < 2$, and both are positive on $\dfrac{9}{2} < t < 6$. The particles move in the same direction on these two intervals.` },

  // Free response 2: a melting block of ice (no calculator)
  { id: "c4r-f2a", type: "frq", skill: "u4", topic: "4.4", calc: false, set: "c4r-s4", part: "(a)",
    prompt: String.raw`At a certain instant, $r = 10$ centimeters and $h = 30$ centimeters. Find the rate at which the volume of the block is changing at that instant. Indicate units of measure.`,
    rows: [
      { name: "Product rule and chain rule", earns: String.raw`$\dfrac{dV}{dt} = \pi\left(2rh\dfrac{dr}{dt} + r^2\dfrac{dh}{dt}\right)$` },
      { name: "Answer with units", earns: String.raw`$\dfrac{dV}{dt} = -170\pi$ cubic centimeters per minute.` },
    ],
    solution: String.raw`$\dfrac{dV}{dt} = \pi\left(2rh\dfrac{dr}{dt} + r^2\dfrac{dh}{dt}\right)$, with $\dfrac{dr}{dt} = -0.2$ and $\dfrac{dh}{dt} = -0.5$.

$\dfrac{dV}{dt} = \pi\left(2(10)(30)(-0.2) + 100(-0.5)\right) = \pi(-120 - 50) = -170\pi$ cubic centimeters per minute.` },
  { id: "c4r-f2b", type: "frq", skill: "u4", topic: "4.5", calc: false, set: "c4r-s4", part: "(b)",
    prompt: String.raw`At the same instant, find the rate at which the surface area of the block is changing. Indicate units of measure.`,
    rows: [
      { name: "Derivative", earns: String.raw`$\dfrac{dS}{dt} = 4\pi r\dfrac{dr}{dt} + 2\pi\left(\dfrac{dr}{dt}h + r\dfrac{dh}{dt}\right)$` },
      { name: "Answer with units", earns: String.raw`$\dfrac{dS}{dt} = -30\pi$ square centimeters per minute.` },
    ],
    solution: String.raw`$\dfrac{dS}{dt} = 4\pi r\dfrac{dr}{dt} + 2\pi\left(\dfrac{dr}{dt}h + r\dfrac{dh}{dt}\right)$.

$\dfrac{dS}{dt} = 4\pi(10)(-0.2) + 2\pi\left((-0.2)(30) + 10(-0.5)\right) = -8\pi + 2\pi(-11) = -30\pi$ square centimeters per minute.` },
  { id: "c4r-f2c", type: "frq", skill: "u4", topic: "4.5", calc: false, set: "c4r-s4", part: "(c)",
    prompt: String.raw`At a later instant, the radius is $6$ centimeters and the volume is decreasing at a rate of $66\pi$ cubic centimeters per minute. Find the height of the block at that instant.`,
    rows: [
      { name: "Equation", earns: String.raw`$-66\pi = \pi\left(2(6)h(-0.2) + 36(-0.5)\right)$` },
      { name: "Answer", earns: String.raw`$h = 20$ centimeters` },
    ],
    solution: String.raw`$\dfrac{dV}{dt} = -66\pi$ when $r = 6$, so $-66\pi = \pi\left(2(6)h(-0.2) + 36(-0.5)\right) = \pi(-2.4h - 18)$.

Then $2.4h + 18 = 66$, so $2.4h = 48$ and $h = 20$ centimeters.` },

  // Free response 3: power used by a building (calculator)
  { id: "c4r-f3a", type: "frq", skill: "u4", topic: "4.1", calc: true, set: "c4r-s5", part: "(a)",
    prompt: String.raw`Find $P'(3)$. Using correct units, interpret the meaning of $P'(3)$ in the context of the problem.`,
    rows: [
      { name: "Answer", earns: String.raw`$P'(3) = 0.931$` },
      { name: "Interpretation", earns: String.raw`At $t = 3$ hours (9:00 A.M.), the power used by the building is increasing at a rate of $0.931$ kilowatt per hour.` },
    ],
    solution: String.raw`$P'(t) = 7.5\cos\left(\dfrac{t}{2}\right) + 0.4$, so $P'(3) = 0.931$.

At 9:00 A.M., 3 hours after 6:00 A.M., the power used by the building is increasing at a rate of $0.931$ kilowatt per hour.` },
  { id: "c4r-f3b", type: "frq", skill: "u4", topic: "4.3", calc: true, set: "c4r-s5", part: "(b)",
    prompt: String.raw`At $t = 3$, is the power used by the building increasing at an increasing rate or increasing at a decreasing rate? Give a reason for your answer.`,
    rows: [
      { name: "Second derivative", earns: String.raw`$P''(3) = -3.741$, from $P''(t) = -3.75\sin\left(\dfrac{t}{2}\right)$.` },
      { name: "Answer with reason", earns: String.raw`Increasing at a decreasing rate, because $P'(3) > 0$ and $P''(3) < 0$.` },
    ],
    solution: String.raw`$P''(t) = -3.75\sin\left(\dfrac{t}{2}\right)$, so $P''(3) = -3.741$.

$P'(3) = 0.931 > 0$, so the power used is increasing at $t = 3$. $P''(3) < 0$, so the rate of increase, $P'$, is decreasing. The power used is increasing at a decreasing rate.` },
  { id: "c4r-f3c", type: "frq", skill: "u4", topic: "4.3", calc: true, set: "c4r-s5", part: "(c)",
    prompt: String.raw`Find all times $t$, $0 < t < 10$, at which the power used by the building is decreasing at a rate of $2$ kilowatts per hour.`,
    rows: [
      { name: "Setup", earns: String.raw`$P'(t) = -2$` },
      { name: "Answer", earns: String.raw`$t = 3.793$ and $t = 8.773$` },
    ],
    solution: String.raw`The power used is decreasing at $2$ kilowatts per hour when $P'(t) = -2$, that is, $7.5\cos\left(\dfrac{t}{2}\right) + 0.4 = -2$.

Solving on $0 < t < 10$ with a calculator gives $t = 3.793$ and $t = 8.773$.` },
  { id: "c4r-f3d", type: "frq", skill: "u4", topic: "4.6", calc: true, set: "c4r-s5", part: "(d)",
    prompt: String.raw`Use the line tangent to the graph of $P$ at $t = 6$ to approximate $P(6.2)$. Is this approximation an overestimate or an underestimate of $P(6.2)$? Give a reason for your answer.`,
    rows: [
      { name: "Tangent line", earns: String.raw`$y = 64.517 - 7.025(t - 6)$, from $P(6) = 64.517$ and $P'(6) = -7.025$.` },
      { name: "Approximation", earns: String.raw`$P(6.2) \approx 63.112$` },
      { name: "Overestimate with reason", earns: String.raw`Overestimate, because $P''(t) = -3.75\sin\left(\dfrac{t}{2}\right) < 0$ for $6 \le t \le 6.2$, so the graph of $P$ is concave down there and lies below its tangent line.` },
    ],
    solution: String.raw`$P(6) = 64.517$ and $P'(6) = -7.025$, so the tangent line is $y = 64.517 - 7.025(t - 6)$.

$P(6.2) \approx 64.517 - 7.025(0.2) = 63.112$ kilowatts.

For $6 \le t \le 6.2$, $3 \le \dfrac{t}{2} \le 3.1 < \pi$, so $\sin\left(\dfrac{t}{2}\right) > 0$ and $P''(t) = -3.75\sin\left(\dfrac{t}{2}\right) < 0$. The graph of $P$ is concave down on this interval, so it lies below the tangent line, and the approximation is an overestimate.` },
];

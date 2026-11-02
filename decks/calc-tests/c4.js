export const sets = {
  "c4t-s1": { name: "A patch of algae", label: "Free response", intro: String.raw`The radius of a circular patch of algae on a pond is modeled by $r(t) = 6 - 5e^{-0.2t}$, where $r(t)$ is measured in meters and $t$ is measured in days, $0 \le t \le 12$. The area of the patch is $A(t) = \pi\left(r(t)\right)^2$ square meters.`,
    sources: [{ title: "", blocks: [{ p: String.raw`A graphing calculator is allowed. Give decimal answers to three decimal places.` }] }] },
  "c4t-s2": { name: "A robot on a track", label: "Free response", intro: String.raw`A robot moves along a straight track. Its position at time $t$ seconds, $0 \le t \le 4$, is $x(t) = \left(t^2 - 5t + 7\right)e^{t}$ meters to the right of a fixed marker. Its velocity is $v(t)$ and its acceleration is $a(t)$.`,
    sources: [{ title: "", blocks: [{ p: String.raw`Answer each part without a calculator. Show the work that leads to each answer.` }] }] },
};

const items = [
  // Multiple choice, no calculator
  { id: "c4t-m01", type: "mcq", skill: "u4", topic: "4.1", calc: false,
    stem: String.raw`The air pressure, in millibars, at an altitude of $h$ kilometers above sea level is $P(h)$.`,
    question: String.raw`Which of the following is the best interpretation of $P'(2) = -95$?`,
    choices: [
      String.raw`At an altitude of $2$ kilometers, the air pressure is decreasing at a rate of $95$ millibars per kilometer as the altitude increases.`,
      String.raw`The air pressure drops $95$ millibars between sea level and an altitude of $2$ kilometers.`,
      String.raw`At an altitude of $2$ kilometers, the air pressure is $95$ millibars.`,
      String.raw`After $2$ hours, the air pressure is decreasing at a rate of $95$ millibars per hour.`,
    ],
    why: [
      String.raw`$P'(2)$ is the rate of change of air pressure with respect to altitude at $h = 2$. Its units are millibars per kilometer, and the negative sign means the pressure decreases as the altitude increases there.`,
      String.raw`This describes a total change over an interval, $P(2) - P(0)$. The derivative is a rate at $h = 2$.`,
      String.raw`This treats the derivative as the value of the function. $P(2)$ is the pressure at $2$ kilometers, not $P'(2)$.`,
      String.raw`The input of $P$ is altitude in kilometers, not time in hours, so the rate is in millibars per kilometer.`,
    ],
    answer: 0 },
  { id: "c4t-m02", type: "mcq", skill: "u4", topic: "4.2", calc: false,
    stem: String.raw`A particle moves along the $x$-axis with position $x(t) = 2t^3 - 21t^2 + 60t$ for $t \ge 0$.`,
    question: String.raw`For what values of $t$ is the particle moving to the left?`,
    choices: [String.raw`$2 < t < 5$`, String.raw`$0 \le t < 3.5$`, String.raw`$0 \le t < 2$ and $t > 5$`, String.raw`$2 < t < 3.5$`],
    why: [
      String.raw`$v(t) = 6t^2 - 42t + 60 = 6(t - 2)(t - 5)$. The particle moves left when $v(t) < 0$, which is $2 < t < 5$.`,
      String.raw`This is where the acceleration $a(t) = 12t - 42$ is negative. Direction depends on the sign of the velocity.`,
      String.raw`This is where $v(t) > 0$, where the particle moves to the right.`,
      String.raw`This is where $v(t)$ and $a(t)$ are both negative, where the particle speeds up while moving left. It also moves left on $3.5 \le t < 5$, while slowing down.`,
    ],
    answer: 0 },
  { id: "c4t-m03", type: "mcq", skill: "u4", topic: "4.2", calc: false,
    stem: String.raw`A particle moves along a line with velocity $v(t) = t^2 - 2t$ for $t \ge 0$.`,
    question: String.raw`What is the acceleration of the particle at the instant its velocity is $8$?`,
    choices: ["$6$", "$-6$", "$14$", "$4$"],
    why: [
      String.raw`$t^2 - 2t = 8$ gives $t^2 - 2t - 8 = 0$, so $(t - 4)(t + 2) = 0$ and $t = 4$ since $t \ge 0$. $a(t) = 2t - 2$, so $a(4) = 6$.`,
      String.raw`$a(-2) = -6$ uses the root $t = -2$, which is outside $t \ge 0$.`,
      String.raw`$a(8) = 14$ substitutes the velocity $8$ for $t$. First solve $v(t) = 8$ for $t$.`,
      String.raw`$t = 4$ is the time, not the acceleration. The last step, evaluating $a(4)$, was left out.`,
    ],
    answer: 0 },
  { id: "c4t-m04", type: "mcq", skill: "u4", topic: "4.3", calc: false,
    stem: String.raw`The revenue, in dollars, from selling $x$ tickets to a concert is $R(x) = 50x - 0.1x^2$.`,
    question: String.raw`What is the rate of change of the revenue with respect to the number of tickets when $x = 120$?`,
    choices: ["$26$ dollars per ticket", "$4560$ dollars per ticket", "$38$ dollars per ticket", "$-24$ dollars per ticket"],
    why: [
      String.raw`$R'(x) = 50 - 0.2x$, so $R'(120) = 50 - 24 = 26$ dollars per ticket.`,
      String.raw`$R(120) = 6000 - 1440 = 4560$ dollars is the total revenue from $120$ tickets, not the rate.`,
      String.raw`This differentiates $0.1x^2$ as $0.1x$, leaving out the factor $2$ from the power rule: $50 - 0.1(120) = 38$.`,
      String.raw`$-0.2(120) = -24$ leaves out the derivative of $50x$, which is $50$.`,
    ],
    answer: 0 },
  { id: "c4t-m05", type: "mcq", skill: "u4", topic: "4.4", calc: false,
    stem: String.raw`The variables $x$ and $y$ are differentiable functions of $t$ with $x^3 + y^2 = 17$.`,
    question: String.raw`If $\dfrac{dx}{dt} = 3$ when $x = 2$ and $y = 3$, what is $\dfrac{dy}{dt}$ at that instant?`,
    choices: ["$-6$", "$6$", "$-2$", String.raw`$-\frac{3}{2}$`],
    why: [
      String.raw`Differentiating with respect to $t$ gives $3x^2\dfrac{dx}{dt} + 2y\dfrac{dy}{dt} = 0$, so $\dfrac{dy}{dt} = -\dfrac{3x^2}{2y}\cdot\dfrac{dx}{dt} = -\dfrac{12}{6}(3) = -6$.`,
      String.raw`The sign was lost when $3x^2\dfrac{dx}{dt}$ was moved to the other side of the equation.`,
      String.raw`$-\dfrac{3x^2}{2y} = -2$ is $\dfrac{dy}{dx}$. Multiplying by $\dfrac{dx}{dt} = 3$ was left out.`,
      String.raw`The coefficients were switched: $-\dfrac{2y}{3x^2}\cdot\dfrac{dx}{dt} = -\dfrac{6}{12}(3) = -\dfrac{3}{2}$.`,
    ],
    answer: 0 },
  { id: "c4t-m06", type: "mcq", skill: "u4", topic: "4.5", calc: false,
    stem: String.raw`A cylinder is built so that its height is always twice its radius. The radius increases at a rate of $0.5$ centimeter per second. The volume of a cylinder is $V = \pi r^2h$.`,
    question: String.raw`At what rate is the volume of the cylinder increasing when the radius is $4$ centimeters?`,
    choices: [String.raw`$48\pi$ cubic centimeters per second`, String.raw`$96\pi$ cubic centimeters per second`, String.raw`$32\pi$ cubic centimeters per second`, String.raw`$128\pi$ cubic centimeters per second`],
    why: [
      String.raw`With $h = 2r$, $V = 2\pi r^3$, so $\dfrac{dV}{dt} = 6\pi r^2\dfrac{dr}{dt} = 6\pi(16)(0.5) = 48\pi$ cubic centimeters per second.`,
      String.raw`$6\pi r^2 = 96\pi$ is $\dfrac{dV}{dr}$. Multiplying by $\dfrac{dr}{dt} = 0.5$ was left out.`,
      String.raw`This holds the height fixed at $8$: $2\pi rh\dfrac{dr}{dt} = 2\pi(4)(8)(0.5)$. The height grows with the radius, so substitute $h = 2r$ before differentiating.`,
      String.raw`$V = 2\pi(4)^3 = 128\pi$ is the volume when $r = 4$, not its rate of change.`,
    ],
    answer: 0 },
  { id: "c4t-m07", type: "mcq", skill: "u4", topic: "4.6", calc: false,
    stem: String.raw`Let $f(x) = \sqrt{x + 3}$.`,
    question: String.raw`Using the line tangent to the graph of $f$ at $x = 1$, what is the approximate value of $f(1.2)$?`,
    choices: ["$2.05$", "$2.1$", "$1.95$", "$2.2$"],
    why: [
      String.raw`$f(1) = 2$ and $f'(x) = \dfrac{1}{2\sqrt{x + 3}}$, so $f'(1) = \dfrac{1}{4}$. Then $f(1.2) \approx 2 + \dfrac{1}{4}(0.2) = 2.05$.`,
      String.raw`This uses $f'(1) = \dfrac{1}{\sqrt{4}} = \dfrac{1}{2}$, leaving out the $2$ in the denominator from the power rule.`,
      String.raw`The slope is positive, so the tangent line rises from $x = 1$ to $x = 1.2$. Subtracting $0.05$ uses the wrong sign.`,
      String.raw`This uses a slope of $1$, adding the full change in $x$ to $f(1)$.`,
    ],
    answer: 0 },
  { id: "c4t-m08", type: "mcq", skill: "u4", topic: "4.6", calc: false,
    stem: String.raw`The depth of water in a river, in feet, $t$ hours after a storm begins is $D(t)$, a twice-differentiable function with $D(10) = 8$, $D'(10) = 0.6$, and $D''(t) < 0$ for $0 < t < 24$.`,
    question: String.raw`The line tangent to the graph of $D$ at $t = 10$ is used to approximate the depth at $t = 10.5$. Which of the following is true?`,
    choices: [
      "The approximation is $8.3$ feet, and it is an overestimate.",
      "The approximation is $8.3$ feet, and it is an underestimate.",
      "The approximation is $7.7$ feet, and it is an overestimate.",
      "The approximation is $14.3$ feet, and it is an overestimate.",
    ],
    why: [
      String.raw`$D(10.5) \approx 8 + 0.6(0.5) = 8.3$ feet. Since $D'' < 0$, the graph of $D$ is concave down and lies below its tangent lines, so the approximation is an overestimate.`,
      String.raw`The value $8.3$ is right, but a concave down graph lies below its tangent line, so the tangent line value is an overestimate.`,
      String.raw`$8 - 0.6(0.5) = 7.7$ uses the wrong sign. $D'(10) > 0$, so the tangent line rises from $t = 10$ to $t = 10.5$.`,
      String.raw`This uses $8 + 0.6t$, with $t$ in place of $t - 10$: $8 + 0.6(10.5) = 14.3$.`,
    ],
    answer: 0 },
  { id: "c4t-m09", type: "mcq", skill: "u4", topic: "4.7", calc: false,
    question: String.raw`$\displaystyle \lim_{x \to \pi} \dfrac{\sin x}{x - \pi}$ is`,
    choices: ["$-1$", "$1$", "$0$", "nonexistent"],
    why: [
      String.raw`The limit has the form $\dfrac{0}{0}$, so by L'Hospital's Rule it equals $\displaystyle \lim_{x \to \pi} \dfrac{\cos x}{1} = \cos\pi = -1$.`,
      String.raw`This uses $\cos\pi = 1$. The cosine of $\pi$ is $-1$.`,
      String.raw`This treats $\dfrac{0}{0}$ as $0$. The form $\dfrac{0}{0}$ is indeterminate and calls for L'Hospital's Rule.`,
      String.raw`The form $\dfrac{0}{0}$ does not mean the limit fails to exist. L'Hospital's Rule shows the limit is $-1$.`,
    ],
    answer: 0 },
  { id: "c4t-m10", type: "mcq", skill: "u4", topic: "4.7", calc: false,
    question: String.raw`$\displaystyle \lim_{x \to \infty} \dfrac{\ln\left(x^2 + 1\right)}{\ln x}$ is`,
    choices: ["$2$", "$1$", "$0$", "nonexistent"],
    why: [
      String.raw`The limit has the form $\dfrac{\infty}{\infty}$. By L'Hospital's Rule it equals $\displaystyle \lim_{x \to \infty} \dfrac{2x/\left(x^2 + 1\right)}{1/x} = \lim_{x \to \infty} \dfrac{2x^2}{x^2 + 1} = 2$.`,
      String.raw`This assumes the two logarithms grow at the same rate. The chain rule factor $2x$ from $x^2 + 1$ makes the numerator grow twice as fast.`,
      String.raw`This assumes the numerator grows more slowly. After L'Hospital's Rule the limit is $\dfrac{2x^2}{x^2 + 1} \to 2$.`,
      String.raw`The form $\dfrac{\infty}{\infty}$ does not mean the limit fails to exist. L'Hospital's Rule gives $2$.`,
    ],
    answer: 0 },

  // Multiple choice, calculator
  { id: "c4t-m11", type: "mcq", skill: "u4", topic: "4.1", calc: true,
    stem: String.raw`The length of daylight in a city, in hours, $d$ days after the start of a year is modeled by $L(d) = 12 + 2.4\sin\left(\dfrac{2\pi(d - 80)}{365}\right)$.`,
    question: String.raw`Which of the following is true at $d = 150$?`,
    choices: [
      "The length of daylight is increasing at a rate of $0.015$ hour per day.",
      "The length of daylight is decreasing at a rate of $0.015$ hour per day.",
      "The length of daylight is increasing at a rate of $0.858$ hour per day.",
      "The length of daylight is increasing at a rate of $14.241$ hours per day.",
    ],
    why: [
      String.raw`$L'(d) = 2.4\cdot\dfrac{2\pi}{365}\cos\left(\dfrac{2\pi(d - 80)}{365}\right)$, so $L'(150) = 0.015$. The positive rate means the daylight is getting longer by about $0.015$ hour per day on day $150$.`,
      String.raw`$L'(150) = 0.015 > 0$, so the length of daylight is increasing, not decreasing.`,
      String.raw`The chain rule factor $\dfrac{2\pi}{365}$ was left out: $2.4\cos\left(\dfrac{140\pi}{365}\right) = 0.858$.`,
      String.raw`$L(150) = 14.241$ hours is the length of daylight on day $150$, not its rate of change.`,
    ],
    answer: 0 },
  { id: "c4t-m12", type: "mcq", skill: "u4", topic: "4.2", calc: true,
    stem: String.raw`A particle moves along a line with velocity $v(t) = \cos\left(\dfrac{t^2}{4}\right)$ for $t \ge 0$.`,
    question: String.raw`What is the acceleration of the particle at $t = 3$?`,
    choices: ["$-1.167$", "$-0.778$", "$1.167$", "$-0.628$"],
    why: [
      String.raw`$a(t) = v'(t) = -\dfrac{t}{2}\sin\left(\dfrac{t^2}{4}\right)$, so $a(3) = -1.5\sin(2.25) = -1.167$.`,
      String.raw`The chain rule factor $\dfrac{t}{2}$ was left out: $-\sin(2.25) = -0.778$.`,
      String.raw`The derivative of cosine is negative sine. Dropping the negative sign gives $1.167$.`,
      String.raw`$v(3) = \cos(2.25) = -0.628$ is the velocity, not the acceleration.`,
    ],
    answer: 0 },
  { id: "c4t-m13", type: "mcq", skill: "u4", topic: "4.3", calc: true,
    stem: String.raw`The mass, in grams, of a radioactive substance remaining $t$ days after it is measured is $A(t) = 50\left(\dfrac{1}{2}\right)^{t/8}$.`,
    question: String.raw`At what rate is the mass changing at $t = 10$ days?`,
    choices: ["$-1.821$ grams per day", "$-2.898$ grams per day", "$21.022$ grams per day", "$-14.572$ grams per day"],
    why: [
      String.raw`$A'(t) = 50\left(\dfrac{1}{2}\right)^{t/8}\ln\left(\dfrac{1}{2}\right)\cdot\dfrac{1}{8}$, so $A'(10) = -1.821$ grams per day.`,
      String.raw`$\dfrac{A(10) - A(0)}{10} = -2.898$ is the average rate of change over $0 \le t \le 10$, not the rate at $t = 10$.`,
      String.raw`$A(10) = 21.022$ grams is the mass at $t = 10$, not its rate of change.`,
      String.raw`The chain rule factor $\dfrac{1}{8}$ from the exponent $\dfrac{t}{8}$ was left out: $50\left(\dfrac{1}{2}\right)^{1.25}\ln\left(\dfrac{1}{2}\right) = -14.572$.`,
    ],
    answer: 0 },
  { id: "c4t-m14", type: "mcq", skill: "u4", topic: "4.5", calc: true,
    stem: String.raw`Oil is pumped into a cylindrical tank with radius $2.3$ meters at a rate of $1.5$ cubic meters per minute. The volume of a cylinder is $V = \pi r^2h$.`,
    question: String.raw`How fast is the level of the oil rising?`,
    choices: ["$0.090$ meter per minute", "$0.104$ meter per minute", "$0.208$ meter per minute", "$0.284$ meter per minute"],
    why: [
      String.raw`The radius is fixed, so $\dfrac{dV}{dt} = \pi r^2\dfrac{dh}{dt}$. Then $1.5 = \pi(2.3)^2\dfrac{dh}{dt}$ and $\dfrac{dh}{dt} = \dfrac{1.5}{5.29\pi} = 0.090$ meter per minute.`,
      String.raw`This divides by the circumference, $2\pi r$, instead of the area of the base, $\pi r^2$.`,
      String.raw`This divides by $\pi r$, leaving out the square on the radius.`,
      String.raw`This divides by $r^2 = 5.29$, leaving out the factor $\pi$ in the area of the base.`,
    ],
    answer: 0 },
  { id: "c4t-m15", type: "mcq", skill: "u4", topic: "4.5", calc: true,
    stem: String.raw`A point moves along the graph of $y = e^{0.5x}$ so that its $x$-coordinate increases at a rate of $1.4$ units per second.`,
    question: String.raw`At what rate is the distance from the point to the origin changing when $x = 1.2$?`,
    choices: ["$1.835$ units per second", "$3.670$ units per second", "$1.311$ units per second", "$1.275$ units per second"],
    why: [
      String.raw`The distance satisfies $D^2 = x^2 + y^2 = x^2 + e^{x}$, so $2D\dfrac{dD}{dt} = \left(2x + e^{x}\right)\dfrac{dx}{dt}$. At $x = 1.2$, $D = \sqrt{1.44 + e^{1.2}} = 2.18177$, so $\dfrac{dD}{dt} = \dfrac{\left(2.4 + e^{1.2}\right)(1.4)}{2(2.18177)} = 1.835$ units per second.`,
      String.raw`The factor $2$ on $2D\dfrac{dD}{dt}$ was left out, which doubles the answer.`,
      String.raw`This is $\dfrac{dD}{dx}$ at $x = 1.2$. Multiplying by $\dfrac{dx}{dt} = 1.4$ was left out.`,
      String.raw`$\dfrac{dy}{dt} = 0.5e^{0.6}(1.4) = 1.275$ is the rate of change of the $y$-coordinate, not of the distance to the origin.`,
    ],
    answer: 0 },

  // Free response 1: a patch of algae (calculator)
  { id: "c4t-f1a", type: "frq", skill: "u4", topic: "4.1", calc: true, set: "c4t-s1", part: "(a)",
    prompt: String.raw`Find $r'(4)$. Using correct units, interpret the meaning of $r'(4)$ in the context of the problem.`,
    rows: [
      { name: "Answer", earns: String.raw`$r'(4) = 0.449$` },
      { name: "Interpretation", earns: String.raw`At $t = 4$ days, the radius of the patch is increasing at a rate of $0.449$ meter per day.` },
    ],
    solution: String.raw`$r'(t) = 5(0.2)e^{-0.2t} = e^{-0.2t}$, so $r'(4) = e^{-0.8} = 0.449$.

At $t = 4$ days, the radius of the patch of algae is increasing at a rate of $0.449$ meter per day.` },
  { id: "c4t-f1b", type: "frq", skill: "u4", topic: "4.5", calc: true, set: "c4t-s1", part: "(b)",
    prompt: String.raw`Find the rate at which the area of the patch is changing at time $t = 4$ days. Indicate units of measure.`,
    rows: [
      { name: "Chain rule", earns: String.raw`$\dfrac{dA}{dt} = 2\pi r\dfrac{dr}{dt}$` },
      { name: "Answer with units", earns: String.raw`$A'(4) = 10.597$ square meters per day.` },
    ],
    solution: String.raw`$A = \pi r^2$, so $\dfrac{dA}{dt} = 2\pi r\dfrac{dr}{dt}$.

$r(4) = 6 - 5e^{-0.8} = 3.75336$ and $r'(4) = 0.44933$.

$A'(4) = 2\pi(3.75336)(0.44933) = 10.597$ square meters per day.` },
  { id: "c4t-f1c", type: "frq", skill: "u4", topic: "4.3", calc: true, set: "c4t-s1", part: "(c)",
    prompt: String.raw`At what time $t$ is the radius of the patch increasing at a rate of $0.3$ meter per day?`,
    rows: [
      { name: "Setup", earns: String.raw`$r'(t) = 0.3$` },
      { name: "Answer", earns: String.raw`$t = 6.020$` },
    ],
    solution: String.raw`The radius is increasing at $0.3$ meter per day when $r'(t) = e^{-0.2t} = 0.3$.

Solving with a calculator, or as $t = 5\ln\left(\dfrac{10}{3}\right)$, gives $t = 6.020$ days.` },
  { id: "c4t-f1d", type: "frq", skill: "u4", topic: "4.6", calc: true, set: "c4t-s1", part: "(d)",
    prompt: String.raw`Use the line tangent to the graph of $A$ at $t = 4$ to approximate the area of the patch at $t = 4.5$. Is this approximation an overestimate or an underestimate of $A(4.5)$? Give a reason for your answer.`,
    rows: [
      { name: "Tangent line", earns: String.raw`$y = 44.258 + 10.597(t - 4)$, from $A(4) = 44.258$ and $A'(4) = 10.597$.` },
      { name: "Approximation", earns: String.raw`$A(4.5) \approx 49.556$ square meters.` },
      { name: "Overestimate with reason", earns: String.raw`Overestimate, because $A''(t) < 0$ for $4 \le t \le 4.5$, so the graph of $A$ is concave down there and lies below its tangent line.` },
    ],
    solution: String.raw`$A(4) = \pi(3.75336)^2 = 44.258$ and $A'(4) = 10.597$, so the tangent line is $y = 44.258 + 10.597(t - 4)$.

$A(4.5) \approx A(4) + A'(4)(0.5) = 49.556$ square meters, using the stored values of $A(4)$ and $A'(4)$.

$A''(t) = 2\pi\left[\left(r'(t)\right)^2 + r(t)r''(t)\right] = 2\pi e^{-0.2t}\left(2e^{-0.2t} - 1.2\right)$. This is negative when $e^{-0.2t} < 0.6$, which is true for $t > 2.554$. A calculator graph of $A''$ confirms $A''(t) < 0$ on $4 \le t \le 4.5$, with $A''(4) = -0.851$. The graph of $A$ is concave down on this interval, so it lies below its tangent line, and the approximation is an overestimate.` },

  // Free response 2: a robot on a track (no calculator)
  { id: "c4t-f2a", type: "frq", skill: "u4", topic: "4.2", calc: false, set: "c4t-s2", part: "(a)",
    prompt: String.raw`Find the velocity $v(t)$ of the robot. For what values of $t$, $0 < t < 3$, is the robot moving to the left? Justify your answer.`,
    rows: [
      { name: "Velocity", earns: String.raw`$v(t) = (2t - 5)e^{t} + \left(t^2 - 5t + 7\right)e^{t} = (t - 1)(t - 2)e^{t}$` },
      { name: "Answer with justification", earns: String.raw`$1 < t < 2$, because $v(t) < 0$ on that interval.` },
    ],
    solution: String.raw`By the product rule, $v(t) = x'(t) = (2t - 5)e^{t} + \left(t^2 - 5t + 7\right)e^{t} = \left(t^2 - 3t + 2\right)e^{t} = (t - 1)(t - 2)e^{t}$.

Since $e^{t} > 0$, the sign of $v(t)$ is the sign of $(t - 1)(t - 2)$. For $1 < t < 2$, $t - 1 > 0$ and $t - 2 < 0$, so $v(t) < 0$. For $0 < t < 1$ and $2 < t < 3$, $v(t) > 0$.

The robot moves to the left for $1 < t < 2$ because its velocity is negative there.` },
  { id: "c4t-f2b", type: "frq", skill: "u4", topic: "4.2", calc: false, set: "c4t-s2", part: "(b)",
    prompt: String.raw`Is the speed of the robot increasing or decreasing at $t = \dfrac{3}{2}$? Give a reason for your answer.`,
    rows: [
      { name: "Acceleration", earns: String.raw`$a(t) = \left(t^2 - t - 1\right)e^{t}$, so $a\left(\dfrac{3}{2}\right) = -\dfrac{1}{4}e^{3/2}$.` },
      { name: "Speed with reason", earns: String.raw`Increasing, because $v\left(\dfrac{3}{2}\right) = -\dfrac{1}{4}e^{3/2} < 0$ and $a\left(\dfrac{3}{2}\right) < 0$ have the same sign.` },
    ],
    solution: String.raw`$a(t) = v'(t) = (2t - 3)e^{t} + \left(t^2 - 3t + 2\right)e^{t} = \left(t^2 - t - 1\right)e^{t}$.

$v\left(\dfrac{3}{2}\right) = \left(\dfrac{1}{2}\right)\left(-\dfrac{1}{2}\right)e^{3/2} = -\dfrac{1}{4}e^{3/2}$ and $a\left(\dfrac{3}{2}\right) = \left(\dfrac{9}{4} - \dfrac{3}{2} - 1\right)e^{3/2} = -\dfrac{1}{4}e^{3/2}$.

The speed is increasing at $t = \dfrac{3}{2}$ because the velocity and the acceleration are both negative.` },
  { id: "c4t-f2c", type: "frq", skill: "u4", topic: "4.6", calc: false, set: "c4t-s2", part: "(c)",
    prompt: String.raw`Use the line tangent to the graph of $x$ at $t = 3$ to approximate the position of the robot at $t = 3.1$. Is this approximation an overestimate or an underestimate of $x(3.1)$? Give a reason for your answer.`,
    rows: [
      { name: "Tangent line", earns: String.raw`$y = e^{3} + 2e^{3}(t - 3)$, from $x(3) = e^{3}$ and $v(3) = 2e^{3}$.` },
      { name: "Approximation", earns: String.raw`$x(3.1) \approx 1.2e^{3}$ meters.` },
      { name: "Underestimate with reason", earns: String.raw`Underestimate, because $x''(t) = a(t) = \left(t^2 - t - 1\right)e^{t} > 0$ for $3 \le t \le 3.1$, so the graph of $x$ is concave up there and lies above its tangent line.` },
    ],
    solution: String.raw`$x(3) = (9 - 15 + 7)e^{3} = e^{3}$ and $v(3) = (2)(1)e^{3} = 2e^{3}$, so the tangent line is $y = e^{3} + 2e^{3}(t - 3)$.

$x(3.1) \approx e^{3} + 2e^{3}(0.1) = 1.2e^{3}$ meters.

For $3 \le t \le 3.1$, $t^2 - t - 1 \ge 9 - 3 - 1 = 5 > 0$ and $e^{t} > 0$, so $x''(t) = a(t) > 0$. The graph of $x$ is concave up on this interval, so it lies above its tangent line, and the approximation is an underestimate.` },
  { id: "c4t-f2d", type: "frq", skill: "u4", topic: "4.7", calc: false, set: "c4t-s2", part: "(d)",
    prompt: String.raw`Find $\displaystyle \lim_{t \to 2} \dfrac{x(t) - e^{2}}{(t - 2)^2}$. Show the work that leads to your answer.`,
    rows: [
      { name: "L'Hospital's Rule", earns: String.raw`Shows the form is $\dfrac{0}{0}$ because $x(2) = e^{2}$, and applies L'Hospital's Rule to get $\displaystyle \lim_{t \to 2} \dfrac{v(t)}{2(t - 2)}$, again $\dfrac{0}{0}$ because $v(2) = 0$.` },
      { name: "Answer", earns: String.raw`$\displaystyle \lim_{t \to 2} \dfrac{a(t)}{2} = \dfrac{a(2)}{2} = \dfrac{e^{2}}{2}$` },
    ],
    solution: String.raw`$x(2) = (4 - 10 + 7)e^{2} = e^{2}$, so the numerator and the denominator both approach $0$ as $t \to 2$. By L'Hospital's Rule,

$$\lim_{t \to 2} \dfrac{x(t) - e^{2}}{(t - 2)^2} = \lim_{t \to 2} \dfrac{v(t)}{2(t - 2)}.$$

Since $v(2) = 0$, this is again of the form $\dfrac{0}{0}$. Applying L'Hospital's Rule again,

$$\lim_{t \to 2} \dfrac{v(t)}{2(t - 2)} = \lim_{t \to 2} \dfrac{a(t)}{2} = \dfrac{(4 - 2 - 1)e^{2}}{2} = \dfrac{e^{2}}{2}.$$` },
];

export default { forms: [{ id: "c4t", name: "Unit 4 Test", group: "Unit 4: Contextual Applications of Differentiation", items }] };

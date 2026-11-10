import { graph } from "../../plot.js";

// A slope field with one segment at each lattice point. The window extends half a unit past the outer points so no
// segment is clipped, the units are square, and the tick numbers sit outside the frame.
const minus = (n) => String(n).replace("-", "−");
function fieldGraph({ x: [x0, x1], y: [y0, y1], u = 50, f, alt }) {
  const labels = [];
  for (let i = x0; i <= x1; i++) labels.push([i - (i < 0 ? 8 : 4) / u, y0 - 0.5 - 17 / u, minus(i)]);
  for (let j = y0; j <= y1; j++) labels.push([x0 - 0.5 - (j < 0 ? 22 : 14) / u, j - 4 / u, minus(j)]);
  return graph({ x: [x0 - 0.5, x1 + 0.5], y: [y0 - 0.5, y1 + 0.5], width: (x1 - x0 + 1) * u + 60, height: (y1 - y0 + 1) * u + 60,
    labelEvery: 1000, labels, xname: "x", yname: "y", field: { f, step: 1 }, alt });
}

export const sets = {
  "c7t-s1": { name: "A slope field", label: "Graph", intro: String.raw`The slope field for a certain differential equation is shown below.`,
    sources: [{ title: "", blocks: [{ svg: fieldGraph({ x: [-3, 3], y: [-2, 3], u: 44, f: (x, y) => x * (y - 1),
      alt: "Slope field on the grid from x = -3 to 3 and y = -2 to 3. The segments are horizontal along the y-axis and along the row y = 1. Above y = 1 the slopes are positive to the right of the y-axis and negative to the left, for example slope 1 at (1, 2) and slope -1 at (-1, 2). Below y = 1 the signs are reversed, for example slope -1 at (1, 0) and slope 1 at (-1, 0). Slopes grow steeper farther from both lines." }) }] }] },
  "c7t-s2": { name: "A slope field that depends on y", label: "Graph", intro: String.raw`The slope field for the differential equation $\dfrac{dy}{dx} = \dfrac{y + 1}{2}$ is shown below.`,
    sources: [{ title: "", blocks: [{ svg: fieldGraph({ x: [-4, 2], y: [-3, 3], u: 44, f: (x, y) => (y + 1) / 2,
      alt: "Slope field on the grid from x = -4 to 2 and y = -3 to 3. All segments in the same row are parallel. The segments in the row y = -1 are horizontal. Above y = -1 the slopes are positive and grow steeper higher up: 1/2 at y = 0, 1 at y = 1, 2 at y = 3. Below y = -1 the slopes are negative: -1/2 at y = -2 and -1 at y = -3." }) }] }] },
  "c7t-s3": { name: "Learning to type", label: "Free response", intro: String.raw`A student practices typing every day. The student's typing speed $S(t)$, in words per minute, $t$ weeks after the practice begins satisfies the differential equation
$$\dfrac{dS}{dt} = 0.25(120 - S),$$
with $S(0) = 20$. For $t \ge 0$, $20 \le S(t) < 120$.`,
    sources: [{ title: "", blocks: [{ p: String.raw`A graphing calculator is allowed. Give decimal answers to three decimal places.` }] }] },
  "c7t-s4": { name: "A slope field and a particular solution", label: "Free response", intro: String.raw`Consider the differential equation $\dfrac{dy}{dx} = (2 - y)e^{x}$. Its slope field is shown below. Let $y = f(x)$ be the particular solution to the differential equation with $f(0) = 1$.`,
    sources: [{ title: "", blocks: [{ svg: fieldGraph({ x: [-3, 2], y: [0, 4], u: 48, f: (x, y) => (2 - y) * Math.exp(x),
      alt: "Slope field for dy/dx = (2 - y) e^x on the grid from x = -3 to 2 and y = 0 to 4. Every segment in the row y = 2 is horizontal. Below y = 2 the slopes are positive and above y = 2 they are negative. In the column x = 0 the slopes are 2 - y: slope 2 at (0, 0), slope 1 at (0, 1), slope -1 at (0, 3), slope -2 at (0, 4). Segments are nearly horizontal at the left edge and steep at the right edge." }) }, { p: String.raw`Answer each part without a calculator. Show the work that leads to each answer.` }] }] },
  "c7t-s5": { name: "Four slope fields", label: "Graph", intro: String.raw`Four slope fields, labeled 1, 2, 3 and 4, are shown below.`,
    sources: [
      { title: "Field 1", blocks: [{ svg: fieldGraph({ x: [-2, 2], y: [-1, 4], u: 40, f: (x, y) => y - x,
        alt: "Field 1, on the grid from x = -2 to 2 and y = -1 to 4. The segments are horizontal at the points on the line y = x, such as (-1, -1), (0, 0), (1, 1) and (2, 2). Slopes are positive above that line and negative below it: slope 2 at (0, 2) and slope -2 at (1, -1)." }) }] },
      { title: "Field 2", blocks: [{ svg: fieldGraph({ x: [-2, 2], y: [-1, 4], u: 40, f: (x, y) => y - x * x,
        alt: "Field 2, on the grid from x = -2 to 2 and y = -1 to 4. The segments are horizontal at (0, 0), (1, 1), (-1, 1), (2, 4) and (-2, 4), which lie on the parabola y = x^2. Slopes are positive above the parabola and negative below it: slope 2 at (0, 2), slope -2 at (2, 2) and slope -2 at (1, -1)." }) }] },
      { title: "Field 3", blocks: [{ svg: fieldGraph({ x: [-2, 2], y: [-1, 4], u: 40, f: (x, y) => x * x - y,
        alt: "Field 3, on the grid from x = -2 to 2 and y = -1 to 4. The segments are horizontal at (0, 0), (1, 1), (-1, 1), (2, 4) and (-2, 4), which lie on the parabola y = x^2. Slopes are negative above the parabola and positive below it: slope -2 at (0, 2), slope 2 at (2, 2) and slope 2 at (1, -1)." }) }] },
      { title: "Field 4", blocks: [{ svg: fieldGraph({ x: [-2, 2], y: [-1, 4], u: 40, f: (x, y) => x - y * y,
        alt: "Field 4, on the grid from x = -2 to 2 and y = -1 to 4. The segments are horizontal at (0, 0), (1, 1) and (1, -1), which lie on the parabola x = y^2 that opens to the right. Slopes are negative above and to the left of it, for example -4 at (0, 2), and positive to the right of it between its branches, for example 1 at (2, 1)." }) }] },
    ] },
};

const items = [
  // Multiple choice, no calculator
  { id: "c7t-m01", type: "mcq", skill: "u7", topic: "7.1", calc: false, difficulty: "easy",
    stem: String.raw`The velocity $v$ of a falling skydiver, in meters per second, $t$ seconds after the jump satisfies $\dfrac{dv}{dt} = 9.8 - 0.2v$ for $0 \le v < 49$.`,
    question: String.raw`Which of the following statements describes this model?`,
    choices: [
      String.raw`The rate at which $v$ changes decreases as $v$ increases.`,
      String.raw`The rate at which $v$ changes is proportional to the velocity $v$.`,
      String.raw`$v$ increases at a constant rate of $9.8$ meters per second per second.`,
      String.raw`The rate at which $v$ changes is greatest when $v$ is close to $49$.`,
    ],
    why: [
      String.raw`$\dfrac{dv}{dt} = 9.8 - 0.2v$, so as $v$ increases, $0.2v$ increases and the rate decreases. For example, the rate is $9.8$ when $v = 0$ and $3.8$ when $v = 30$.`,
      String.raw`A rate proportional to $v$ would be $kv$. Here the rate is $9.8$ when $v = 0$, so it is not a constant times $v$.`,
      String.raw`$9.8$ is the rate only when $v = 0$. The rate $9.8 - 0.2v$ changes as $v$ changes.`,
      String.raw`At $v = 49$ the rate is $9.8 - 0.2(49) = 0$. The rate is greatest when $v$ is smallest.`,
    ],
    answer: 0 },
  { id: "c7t-m02", type: "mcq", skill: "u7", topic: "7.2", calc: false, difficulty: "moderate",
    question: String.raw`Which of the following functions is a solution to the differential equation $x\dfrac{dy}{dx} = 2y + x^3$ for $x > 0$?`,
    choices: [String.raw`$y = x^3 + 5x^2$`, String.raw`$y = x^3 + 5x^2 + 5$`, String.raw`$y = \dfrac{x^3}{2}$`, String.raw`$y = -x^3 + 5x^2$`],
    why: [
      String.raw`For $y = x^3 + 5x^2$, $x\dfrac{dy}{dx} = x\left(3x^2 + 10x\right) = 3x^3 + 10x^2$ and $2y + x^3 = 2x^3 + 10x^2 + x^3 = 3x^3 + 10x^2$. The two sides are equal.`,
      String.raw`$x\dfrac{dy}{dx} = 3x^3 + 10x^2$, but $2y + x^3 = 3x^3 + 10x^2 + 10$. The added constant $5$ does not cancel.`,
      String.raw`$x\dfrac{dy}{dx} = \dfrac{3}{2}x^3$, but $2y + x^3 = 2x^3$. The two sides differ by $\dfrac{1}{2}x^3$.`,
      String.raw`$x\dfrac{dy}{dx} = -3x^3 + 10x^2$, but $2y + x^3 = -x^3 + 10x^2$. The sign on $x^3$ makes the two sides differ.`,
    ],
    answer: 0 },
  { id: "c7t-m03", type: "mcq", skill: "u7", topic: "7.2", calc: false, difficulty: "easy",
    question: String.raw`For what nonzero value of the constant $k$ is $y = kx^2$ a solution to the differential equation $\left(\dfrac{dy}{dx}\right)^2 = 16y$?`,
    choices: ["$4$", "$2$", "$16$", "$8$"],
    why: [
      String.raw`$\dfrac{dy}{dx} = 2kx$, so $\left(\dfrac{dy}{dx}\right)^2 = 4k^2x^2$ and $16y = 16kx^2$. These are equal for all $x$ when $4k^2 = 16k$, so $k = 4$ (or $k = 0$).`,
      String.raw`This solves $4k^2 = 16$, leaving out the $k$ in $16y = 16kx^2$. For $k = 2$, $4k^2x^2 = 16x^2$ but $16y = 32x^2$.`,
      String.raw`This solves $k^2 = 16k$, which does not square the factor $2$ in $2kx$. For $k = 16$, $4k^2x^2 = 1024x^2$ but $16y = 256x^2$.`,
      String.raw`This solves $2k^2 = 16k$, which doubles $k$ instead of squaring $2k$. For $k = 8$, $4k^2x^2 = 256x^2$ but $16y = 128x^2$.`,
    ],
    answer: 0 },
  { id: "c7t-m04", type: "mcq", skill: "u7", topic: "7.3", calc: false, difficulty: "easy", set: "c7t-s1",
    question: String.raw`The slope field shown is for which of the following differential equations?`,
    choices: [String.raw`$\dfrac{dy}{dx} = x(y - 1)$`, String.raw`$\dfrac{dy}{dx} = y(x - 1)$`, String.raw`$\dfrac{dy}{dx} = x(1 - y)$`, String.raw`$\dfrac{dy}{dx} = x + y - 1$`],
    why: [
      String.raw`The field is horizontal along $x = 0$ and along $y = 1$, where $x(y - 1) = 0$. At $(1, 2)$ the slope is $1$ and at $(1, 0)$ it is $-1$, matching $x(y - 1)$.`,
      String.raw`This equation is horizontal along $y = 0$ and $x = 1$. The field has nonzero slopes there, such as slope $-1$ at $(1, 0)$, and horizontal segments along the $y$-axis instead.`,
      String.raw`This has the right horizontal lines but the opposite signs: it gives slope $-1$ at $(1, 2)$, where the field shows a segment with positive slope.`,
      String.raw`This is horizontal only on the line $y = 1 - x$, such as at $(1, 0)$. The field has slope $-1$ at $(1, 0)$ and is horizontal along both $x = 0$ and $y = 1$.`,
    ],
    answer: 0 },
  { id: "c7t-m05", type: "mcq", skill: "u7", topic: "7.3", calc: false, difficulty: "moderate", set: "c7t-s5",
    question: String.raw`Which of the slope fields shown is the slope field for $\dfrac{dy}{dx} = y - x^2$?`,
    choices: ["Field 2", "Field 1", "Field 3", "Field 4"],
    why: [
      String.raw`A segment is horizontal where $y - x^2 = 0$, on the parabola $y = x^2$: at $(0, 0)$, $(\pm 1, 1)$ and $(\pm 2, 4)$. Above the parabola $y > x^2$, so the slopes are positive, as in Field 2.`,
      String.raw`Field 1 is horizontal along the line $y = x$, at $(1, 1)$ and $(2, 2)$, which fits $y - x$. For $y - x^2$, the slope at $(2, 2)$ is $2 - 4 = -2$.`,
      String.raw`Field 3 is horizontal on the same parabola, but its slopes are negative above it, which fits $x^2 - y$. For $y - x^2$, the slope at $(0, 2)$ is $2$.`,
      String.raw`Field 4 is horizontal on the parabola $x = y^2$, at $(1, 1)$ and $(1, -1)$, which switches the roles of $x$ and $y$. For $y - x^2$, the slope at $(1, -1)$ is $-2$.`,
    ],
    answer: 0 },
  { id: "c7t-m06", type: "mcq", skill: "u7", topic: "7.4", calc: false, difficulty: "moderate", set: "c7t-s2",
    question: String.raw`Let $y = g(x)$ be the solution to the differential equation with $g(0) = 0$. What is $\displaystyle \lim_{x \to -\infty} g(x)$?`,
    choices: ["$-1$", String.raw`$\frac{1}{2}$`, String.raw`$-\infty$`, String.raw`$\infty$`],
    why: [
      String.raw`At $(0, 0)$ the slope is $\dfrac{1}{2} > 0$, so moving to the left the curve goes down. Above $y = -1$ every slope is positive, and the slopes approach $0$ as $y$ approaches $-1$. The curve flattens toward the horizontal row $y = -1$ and never crosses it, because $y = -1$ is itself a solution. So $g(x) \to -1$ as $x \to -\infty$.`,
      String.raw`$\dfrac{1}{2}$ is the slope of the segment at $(0, 0)$, the value of $g'(0)$, not a value of $g$.`,
      String.raw`The curve does decrease as $x$ moves left, but it would have to cross the solution $y = -1$ to decrease without bound. Solution curves cannot cross it.`,
      String.raw`This describes the behavior as $x \to \infty$, where the slopes grow and the solution increases without bound. The question asks about $x \to -\infty$.`,
    ],
    answer: 0 },
  { id: "c7t-m07", type: "mcq", skill: "u7", topic: "7.4", calc: false, difficulty: "moderate",
    question: String.raw`Let $y = f(x)$ be the solution to the differential equation $\dfrac{dy}{dx} = (x - 1)y^2$ with $f(1) = 2$. Which of the following is true about $f$ at $x = 1$?`,
    choices: [
      String.raw`$f$ has a relative minimum at $x = 1$.`,
      String.raw`$f$ has a relative maximum at $x = 1$.`,
      String.raw`The graph of $f$ has a point of inflection at $x = 1$.`,
      String.raw`$f$ has neither a relative extremum nor a point of inflection at $x = 1$.`,
    ],
    why: [
      String.raw`At $x = 1$, $\dfrac{dy}{dx} = 0 \cdot 4 = 0$. Near $x = 1$, $y^2 > 0$, so the sign of $\dfrac{dy}{dx}$ is the sign of $x - 1$: negative for $x < 1$ and positive for $x > 1$. By the First Derivative Test, $f$ has a relative minimum at $x = 1$. (Also $\dfrac{d^2y}{dx^2} = y^2 + 2(x - 1)y\dfrac{dy}{dx} = 4 > 0$ there.)`,
      String.raw`A relative maximum needs $\dfrac{dy}{dx}$ to change from positive to negative. Here it changes from negative to positive.`,
      String.raw`A point of inflection needs a change in concavity. At $x = 1$, $\dfrac{d^2y}{dx^2} = 4 > 0$, and the first derivative changes sign, which makes $x = 1$ an extremum.`,
      String.raw`The derivative is $0$ at $x = 1$ and changes sign there, so $f$ does have a relative extremum.`,
    ],
    answer: 0 },
  { id: "c7t-m08", type: "mcq", skill: "u7", topic: "7.6", calc: false, difficulty: "moderate",
    question: String.raw`Which of the following is the general solution to the differential equation $\dfrac{dy}{dx} = \dfrac{1 + y}{x}$ for $x > 0$?`,
    choices: [String.raw`$y = Cx - 1$`, String.raw`$y = x + C$`, String.raw`$y = Ce^{x} - 1$`, String.raw`$y = Cx + 1$`],
    why: [
      String.raw`Separating, $\dfrac{dy}{1 + y} = \dfrac{dx}{x}$, so $\ln|1 + y| = \ln x + C_1$. Then $|1 + y| = e^{C_1}x$, so $1 + y = Cx$ and $y = Cx - 1$.`,
      String.raw`The constant was added after exponentiating: $1 + y = x + C_1$. The constant becomes a factor. For $y = x + C$, $y' = 1$ but $\dfrac{1 + y}{x} = 1 + \dfrac{1 + C}{x}$.`,
      String.raw`This integrates $\dfrac{1}{x}$ as $x$ instead of $\ln x$, as if the equation were $\dfrac{dy}{dx} = 1 + y$.`,
      String.raw`This is a sign error when solving $1 + y = Cx$ for $y$. For $y = Cx + 1$, $y' = C$ but $\dfrac{1 + y}{x} = C + \dfrac{2}{x}$.`,
    ],
    answer: 0 },
  { id: "c7t-m09", type: "mcq", skill: "u7", topic: "7.6", calc: false, difficulty: "easy",
    question: String.raw`Which of the following is the general solution to the differential equation $\dfrac{dy}{dx} = y\sec^2 x$ for $-\dfrac{\pi}{2} < x < \dfrac{\pi}{2}$?`,
    choices: [String.raw`$y = Ce^{\tan x}$`, String.raw`$y = e^{\tan x} + C$`, String.raw`$y = Ce^{\sec x}$`, String.raw`$y = \tan x + C$`],
    why: [
      String.raw`Separating, $\dfrac{dy}{y} = \sec^2 x\,dx$, so $\ln|y| = \tan x + C_1$. Then $|y| = e^{C_1}e^{\tan x}$, so $y = Ce^{\tan x}$.`,
      String.raw`The constant was added after exponentiating. From $\ln|y| = \tan x + C_1$, the constant becomes a factor $e^{C_1}$, not a term.`,
      String.raw`This uses $\displaystyle\int \sec^2 x\,dx = \sec x$. The antiderivative of $\sec^2 x$ is $\tan x$.`,
      String.raw`This integrates the right side but treats $\displaystyle\int \dfrac{dy}{y}$ as $y$ instead of $\ln|y|$.`,
    ],
    answer: 0 },
  { id: "c7t-m10", type: "mcq", skill: "u7", topic: "7.7", calc: false, difficulty: "moderate",
    question: String.raw`Let $y = f(x)$ be the solution to the differential equation $\dfrac{dy}{dx} = -2xy^2$ with $f(1) = \dfrac{1}{2}$. What is $f(2)$?`,
    choices: [String.raw`$\dfrac{1}{5}$`, "$-1$", String.raw`$-\dfrac{1}{4}$`, "$0$"],
    why: [
      String.raw`Separating, $\dfrac{dy}{y^2} = -2x\,dx$, so $-\dfrac{1}{y} = -x^2 + C$. With $f(1) = \dfrac{1}{2}$, $-2 = -1 + C$ and $C = -1$. Then $\dfrac{1}{y} = x^2 + 1$, so $f(x) = \dfrac{1}{x^2 + 1}$ and $f(2) = \dfrac{1}{5}$.`,
      String.raw`This integrates $y^{-2}$ as $\dfrac{1}{y}$, losing the negative sign: $\dfrac{1}{y} = -x^2 + 3$ gives $f(2) = \dfrac{1}{-1} = -1$.`,
      String.raw`The constant was added after solving for $y$: $y = \dfrac{1}{x^2} + C$ with $C = -\dfrac{1}{2}$ gives $\dfrac{1}{4} - \dfrac{1}{2}$.`,
      String.raw`This is the tangent line approximation $\dfrac{1}{2} + \left(-\dfrac{1}{2}\right)(1)$ from the slope at $\left(1, \dfrac{1}{2}\right)$, not the value of the solution.`,
    ],
    answer: 0 },

  // Multiple choice, calculator
  { id: "c7t-m11", type: "mcq", skill: "u7", topic: "7.1", calc: true, difficulty: "moderate",
    stem: String.raw`A quantity $Q$ increases at a rate proportional to the square root of $Q$. When $Q = 40$, the quantity is increasing at a rate of $6$ units per hour.`,
    question: String.raw`At what rate, in units per hour, is $Q$ increasing when $Q = 65$?`,
    choices: ["$7.649$", "$9.750$", "$15.844$", "$4.743$"],
    why: [
      String.raw`$\dfrac{dQ}{dt} = k\sqrt{Q}$. From $6 = k\sqrt{40}$, $k = \dfrac{6}{\sqrt{40}}$. When $Q = 65$, $\dfrac{dQ}{dt} = \dfrac{6}{\sqrt{40}}\sqrt{65} = 7.649$.`,
      String.raw`This makes the rate proportional to $Q$: $6 \cdot \dfrac{65}{40}$. The rate is proportional to $\sqrt{Q}$.`,
      String.raw`This makes the rate proportional to $Q^2$: $6\left(\dfrac{65}{40}\right)^2$.`,
      String.raw`This uses the increase $65 - 40 = 25$ in place of $Q$: $6\sqrt{\dfrac{25}{40}}$.`,
    ],
    answer: 0 },
  { id: "c7t-m12", type: "mcq", skill: "u7", topic: "7.4", calc: true, difficulty: "difficult",
    question: String.raw`Let $y = f(x)$ be the solution to the differential equation $\dfrac{dy}{dx} = \sin(xy)$ with $f(1) = 2$. What is the value of $\dfrac{d^2y}{dx^2}$ at the point $(1, 2)$?`,
    choices: ["$-1.211$", "$-0.832$", "$-0.416$", "$-1.248$"],
    why: [
      String.raw`By the chain and product rules, $\dfrac{d^2y}{dx^2} = \cos(xy)\left(y + x\dfrac{dy}{dx}\right)$. At $(1, 2)$, $\dfrac{dy}{dx} = \sin 2 = 0.909297$, so $\dfrac{d^2y}{dx^2} = \cos 2\,(2 + 0.909297) = -1.211$.`,
      String.raw`This is $\cos(xy) \cdot y$, which leaves out the term $x\dfrac{dy}{dx}$ from the product rule on $xy$.`,
      String.raw`This is $\cos(xy)$ alone, which leaves out the derivative of the inner function $xy$.`,
      String.raw`This treats $\dfrac{dy}{dx}$ as $1$ in the product rule, giving $\cos 2\,(2 + 1)$. At $(1, 2)$, $\dfrac{dy}{dx} = \sin 2$.`,
    ],
    answer: 0 },
  { id: "c7t-m13", type: "mcq", skill: "u7", topic: "7.7", calc: true, difficulty: "difficult",
    question: String.raw`Let $y = f(x)$ be the solution to the differential equation $\dfrac{dy}{dx} = x\left(1 + y^2\right)$ with $f(0) = 1$. What is $f(1)$?`,
    choices: ["$3.408$", "$1.546$", "$14.101$", "$-4.588$"],
    why: [
      String.raw`Separating, $\dfrac{dy}{1 + y^2} = x\,dx$, so $\arctan y = \dfrac{x^2}{2} + C$. With $f(0) = 1$, $C = \arctan 1 = \dfrac{\pi}{4}$. Then $f(x) = \tan\left(\dfrac{x^2}{2} + \dfrac{\pi}{4}\right)$ and $f(1) = \tan\left(0.5 + \dfrac{\pi}{4}\right) = 3.408$.`,
      String.raw`The constant was added after taking the tangent: $y = \tan\left(\dfrac{x^2}{2}\right) + 1$. The constant belongs inside, with $\arctan y$.`,
      String.raw`This uses $C = 1$, the value of $y$, instead of $C = \arctan 1 = \dfrac{\pi}{4}$, giving $\tan(1.5)$.`,
      String.raw`This integrates $x$ as $x$ instead of $\dfrac{x^2}{2}$, giving $\tan\left(1 + \dfrac{\pi}{4}\right)$.`,
    ],
    answer: 0 },
  { id: "c7t-m14", type: "mcq", skill: "u7", topic: "7.8", calc: true, difficulty: "easy",
    stem: String.raw`A radioactive substance decays at a rate proportional to the amount present. Its half-life is $12$ years. A sample has $50$ grams at time $t = 0$.`,
    question: String.raw`How many grams of the substance remain after $20$ years?`,
    choices: ["$15.749$", "$9.444$", "$8.333$", "$32.988$"],
    why: [
      String.raw`The amount is $A(t) = 50e^{kt}$ with $e^{12k} = \dfrac{1}{2}$, so $k = -\dfrac{\ln 2}{12}$. Then $A(20) = 50\left(\dfrac{1}{2}\right)^{20/12} = 15.749$ grams.`,
      String.raw`This uses $k = -\dfrac{1}{12}$, so $A(20) = 50e^{-20/12}$. The decay constant is $-\dfrac{\ln 2}{12}$, from $e^{12k} = \dfrac{1}{2}$.`,
      String.raw`This assumes the sample loses $25$ grams every $12$ years at a constant rate, a linear model.`,
      String.raw`This inverts the time ratio, using $\left(\dfrac{1}{2}\right)^{12/20}$. The exponent is the number of half-lives, $\dfrac{20}{12}$.`,
    ],
    answer: 0 },
  { id: "c7t-m15", type: "mcq", skill: "u7", topic: "7.8", calc: true, difficulty: "difficult",
    stem: String.raw`The number of fish $P$ in a lake satisfies $\dfrac{dP}{dt} = kP$, where $t$ is measured in years. There are $500$ fish at time $t = 0$ and $740$ fish at time $t = 4$.`,
    question: String.raw`At what rate, in fish per year, is the number of fish increasing at time $t = 6$?`,
    choices: ["$88.234$", "$900.249$", "$60.000$", "$49.005$"],
    why: [
      String.raw`$P(t) = 500e^{kt}$ with $e^{4k} = 1.48$, so $k = \dfrac{\ln 1.48}{4} = 0.098011$. Then $P(6) = 500(1.48)^{1.5} = 900.249$, and $\dfrac{dP}{dt} = kP(6) = 88.234$ fish per year.`,
      String.raw`This is $P(6)$, the number of fish at $t = 6$, not the rate at which the number is changing.`,
      String.raw`This is the average rate of change $\dfrac{740 - 500}{4}$ over the first $4$ years, not the instantaneous rate at $t = 6$.`,
      String.raw`This is $k(500)$, the rate at $t = 0$, not at $t = 6$.`,
    ],
    answer: 0 },

  // Free response 1: learning to type (calculator)
  { id: "c7t-f1a", type: "frq", skill: "u7", topic: "7.4", calc: true, set: "c7t-s3", part: "(a)",
    prompt: String.raw`Find $\dfrac{d^2S}{dt^2}$ in terms of $S$. Is the graph of $S$ concave up or concave down for $t \ge 0$? Give a reason for your answer.`,
    rows: [
      { name: "Second derivative", earns: String.raw`$\dfrac{d^2S}{dt^2} = -0.25\dfrac{dS}{dt} = -0.0625(120 - S)$` },
      { name: "Concavity with reason", earns: String.raw`Concave down, because $S < 120$ makes $120 - S > 0$, so $\dfrac{d^2S}{dt^2} < 0$.` },
    ],
    solution: String.raw`Differentiating $\dfrac{dS}{dt} = 0.25(120 - S)$ with respect to $t$,
$$\dfrac{d^2S}{dt^2} = -0.25\dfrac{dS}{dt} = -0.25(0.25)(120 - S) = -0.0625(120 - S).$$

For $20 \le S < 120$, $120 - S > 0$, so $\dfrac{d^2S}{dt^2} < 0$. The graph of $S$ is concave down for $t \ge 0$.` },
  { id: "c7t-f1b", type: "frq", skill: "u7", topic: "7.6", calc: true, set: "c7t-s3", part: "(b)",
    prompt: String.raw`Use separation of variables to find the general solution to the differential equation $\dfrac{dS}{dt} = 0.25(120 - S)$ for $S < 120$. Write your answer in a form that includes a constant of integration.`,
    rows: [
      { name: "Separation of variables", earns: String.raw`$\dfrac{dS}{120 - S} = 0.25\,dt$. A response with no separation of variables earns no points in parts (b) and (c).` },
      { name: "Antiderivatives", earns: String.raw`$-\ln\left|120 - S\right| = 0.25t$ (each side antidifferentiated correctly)` },
      { name: "Constant of integration", earns: String.raw`$-\ln\left|120 - S\right| = 0.25t + C$. A response without a constant of integration earns only the first two points of this part and no points in part (c).` },
    ],
    solution: String.raw`Separate the variables: $\dfrac{1}{120 - S}\,dS = 0.25\,dt$.

Antidifferentiate each side. With $u = 120 - S$, $du = -dS$, so $\displaystyle\int \dfrac{dS}{120 - S} = -\ln|120 - S|$. Then
$$-\ln\left|120 - S\right| = 0.25t + C.$$

Since $120 - S > 0$, this is $120 - S = e^{-0.25t - C} = Ae^{-0.25t}$, so $S = 120 - Ae^{-0.25t}$, where $A = e^{-C}$ is a positive constant.` },
  { id: "c7t-f1c", type: "frq", skill: "u7", topic: "7.7", calc: true, set: "c7t-s3", part: "(c)",
    prompt: String.raw`Find $S(t)$, the particular solution to the differential equation with $S(0) = 20$.`,
    rows: [
      { name: "Initial condition", earns: String.raw`Substitutes $t = 0$, $S = 20$: $-\ln 100 = C$.` },
      { name: "Solves for S", earns: String.raw`$S(t) = 120 - 100e^{-0.25t}$` },
    ],
    solution: String.raw`From part (b), $-\ln(120 - S) = 0.25t + C$. With $S(0) = 20$, $-\ln 100 = C$.

Then $-\ln(120 - S) = 0.25t - \ln 100$, so $\ln(120 - S) = \ln 100 - 0.25t$ and $120 - S = 100e^{-0.25t}$. Solving,
$$S(t) = 120 - 100e^{-0.25t}.$$` },
  { id: "c7t-f1d", type: "frq", skill: "u7", topic: "7.8", calc: true, set: "c7t-s3", part: "(d)",
    prompt: String.raw`Using your answer from part (c), find the time at which the student's typing speed is $90$ words per minute. Find the average rate of change of $S$ over the interval $0 \le t \le 8$. Indicate units of measure.`,
    rows: [
      { name: "Time", earns: String.raw`$120 - 100e^{-0.25t} = 90$ gives $t = 4\ln\left(\dfrac{10}{3}\right) = 4.816$ weeks.` },
      { name: "Average rate with units", earns: String.raw`$\dfrac{S(8) - S(0)}{8} = 10.808$ words per minute per week` },
    ],
    solution: String.raw`$120 - 100e^{-0.25t} = 90$ gives $e^{-0.25t} = 0.3$, so $t = -4\ln 0.3 = 4\ln\left(\dfrac{10}{3}\right) = 4.816$ weeks.

$S(8) = 120 - 100e^{-2} = 106.466$ and $S(0) = 20$, so the average rate of change is
$$\dfrac{S(8) - S(0)}{8 - 0} = \dfrac{86.466}{8} = 10.808 \text{ words per minute per week}.$$` },

  // Free response 2: a slope field and a particular solution (no calculator)
  { id: "c7t-f2a", type: "frq", skill: "u7", topic: "7.2", calc: false, set: "c7t-s4", part: "(a)",
    prompt: String.raw`The slope field suggests that the constant function $y = 2$ is a solution to the differential equation. Describe the feature of the slope field that suggests this, and verify that $y = 2$ is a solution.`,
    rows: [
      { name: "Slope field", earns: String.raw`Every segment in the row $y = 2$ is horizontal.` },
      { name: "Verification", earns: String.raw`For $y = 2$, $\dfrac{dy}{dx} = 0$ and $(2 - y)e^{x} = 0 \cdot e^{x} = 0$ for all $x$.` },
    ],
    solution: String.raw`In the slope field, every segment in the row $y = 2$ is horizontal, so a curve that follows the field along that row is a horizontal line.

If $y = 2$, then $\dfrac{dy}{dx} = 0$, and the right side is $(2 - 2)e^{x} = 0$ for every $x$. The two sides are equal, so $y = 2$ is a solution.` },
  { id: "c7t-f2b", type: "frq", skill: "u7", topic: "7.4", calc: false, set: "c7t-s4", part: "(b)",
    prompt: String.raw`Write an equation for the line tangent to the graph of $y = f(x)$ at $x = 0$. Use it to approximate $f(0.2)$.`,
    rows: [
      { name: "Tangent line", earns: String.raw`$\left.\dfrac{dy}{dx}\right|_{(0, 1)} = (2 - 1)e^{0} = 1$, so $y = 1 + x$.` },
      { name: "Approximation", earns: String.raw`$f(0.2) \approx 1.2$` },
    ],
    solution: String.raw`At $(0, 1)$, $\dfrac{dy}{dx} = (2 - 1)e^{0} = 1$. The tangent line is $y = 1 + 1(x - 0) = 1 + x$.

$f(0.2) \approx 1 + 0.2 = 1.2$.` },
  { id: "c7t-f2c", type: "frq", skill: "u7", topic: "7.6", calc: false, set: "c7t-s4", part: "(c)",
    prompt: String.raw`Use separation of variables to find the general solution to the differential equation for $y < 2$. Write your answer in a form that includes a constant of integration.`,
    rows: [
      { name: "Separation of variables", earns: String.raw`$\dfrac{dy}{2 - y} = e^{x}\,dx$. A response with no separation of variables earns no points in parts (c) and (d).` },
      { name: "Antiderivatives", earns: String.raw`$-\ln|2 - y| = e^{x}$ (each side antidifferentiated correctly)` },
      { name: "Constant of integration", earns: String.raw`$-\ln|2 - y| = e^{x} + C$. A response without a constant of integration earns only the first two points of this part and no points in part (d).` },
    ],
    solution: String.raw`Separate the variables: $\dfrac{1}{2 - y}\,dy = e^{x}\,dx$.

Antidifferentiate each side. With $u = 2 - y$, $du = -dy$, so $\displaystyle\int \dfrac{dy}{2 - y} = -\ln|2 - y|$. Then
$$-\ln|2 - y| = e^{x} + C.$$

For $y < 2$, $2 - y = e^{-e^{x} - C}$, so the general solution is $y = 2 - e^{-e^{x} - C}$, where $C$ is a constant.` },
  { id: "c7t-f2d", type: "frq", skill: "u7", topic: "7.7", calc: false, set: "c7t-s4", part: "(d)",
    prompt: String.raw`Find $y = f(x)$, the particular solution with $f(0) = 1$.`,
    rows: [
      { name: "Initial condition", earns: String.raw`Substitutes $x = 0$, $y = 1$: $-\ln 1 = e^{0} + C$, so $C = -1$.` },
      { name: "Solves for y", earns: String.raw`$f(x) = 2 - e^{1 - e^{x}}$` },
    ],
    solution: String.raw`From part (c), $-\ln|2 - y| = e^{x} + C$. With $f(0) = 1$, $-\ln 1 = e^{0} + C$, so $0 = 1 + C$ and $C = -1$.

Then $-\ln|2 - y| = e^{x} - 1$, so $\ln|2 - y| = 1 - e^{x}$. Since $f(0) = 1 < 2$, $2 - y > 0$, so $2 - y = e^{1 - e^{x}}$ and
$$f(x) = 2 - e^{1 - e^{x}}.$$` },
];

export default { forms: [{ id: "c7t", name: "Unit 7 Test", group: "Unit 7: Differential Equations", items }] };

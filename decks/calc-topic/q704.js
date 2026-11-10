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
  "q704-s1": { name: "A slope field that depends on x", label: "Graph", intro: String.raw`The slope field for a differential equation is shown below.`,
    sources: [{ title: "", blocks: [{ svg: fieldGraph({ x: [-1, 3], y: [-2, 2], u: 56, f: (x, y) => ((x - 1) * (x - 1)) / 2,
      alt: "Slope field on the grid from x = -1 to 3 and y = -2 to 2. All segments in the same column are parallel. The segments in the column x = 1 are horizontal. Every other segment has positive slope: 1/2 in the columns x = 0 and x = 2, and 2 in the columns x = -1 and x = 3." }) }] }] },
  "q704-s2": { name: "A slope field with a line of horizontal segments", label: "Graph", intro: String.raw`The slope field for the differential equation $\dfrac{dy}{dx} = y - 2x$ is shown below.`,
    sources: [{ title: "", blocks: [{ svg: fieldGraph({ x: [-2, 2], y: [-3, 3], u: 48, f: (x, y) => y - 2 * x,
      alt: "Slope field for dy/dx = y - 2x on the grid from x = -2 to 2 and y = -3 to 3. The segments are horizontal at (-1, -2), (0, 0) and (1, 2), which lie on the line y = 2x. Slopes are positive above that line and negative below it: slope 1 at (0, 1), slope 2 at (0, 2), slope -1 at (0, -1), and slope -2 at (1, 0)." }) }] }] },
  "q704-s3": { name: "A slope field", label: "Graph", intro: String.raw`The slope field for a differential equation is shown below.`,
    sources: [{ title: "", blocks: [{ svg: fieldGraph({ x: [-2, 2], y: [-1, 3], u: 56, f: (x, y) => -2 * x * y,
      alt: "Slope field on the grid from x = -2 to 2 and y = -1 to 3. Every segment on the x-axis and on the y-axis is horizontal. Above the x-axis, slopes are positive to the left of the y-axis and negative to the right; below the x-axis the signs are reversed. In the column x = 1 the slopes are -2 at y = 1, -4 at y = 2 and -6 at y = 3. In the column x = -1 they are 2, 4 and 6." }) }] }] },
  "q704-s4": { name: "A slope field with a horizontal row", label: "Graph", intro: String.raw`The slope field for a differential equation is shown below.`,
    sources: [{ title: "", blocks: [{ svg: fieldGraph({ x: [-2, 2], y: [-2, 3], u: 50, f: (x, y) => (x * x * (2 - y)) / 2,
      alt: "Slope field on the grid from x = -2 to 2 and y = -2 to 3. The segments in the row y = 2 are horizontal, and so are the segments on the y-axis. Away from the y-axis, the slopes are positive below the row y = 2 and negative above it. Along each row below y = 2 the slopes grow steeper farther from the y-axis: in the row y = -1, the slope is 3/2 at x = 1 and x = -1 and 6 at x = 2 and x = -2. In the row y = 1 the slope is 1/2 at x = 1 and 2 at x = 2." }) }] }] },
  "q704-s9": { name: "A particular solution", label: "Free response", intro: String.raw`Let $y = f(x)$ be the particular solution to the differential equation $\dfrac{dy}{dx} = (x - 2)(y + 1)$ with initial condition $f(2) = 3$.`,
    sources: [{ title: "", blocks: [{ p: String.raw`$$\dfrac{dy}{dx} = (x - 2)(y + 1), \quad f(2) = 3$$` }] }] },
};

const items = [
  { id: "q704-m01", type: "mcq", skill: "u7", topic: "7.4", calc: false, difficulty: "difficult", set: "q704-s1",
    question: String.raw`Let $y = f(x)$ be the solution to the differential equation with $f(1) = 0$. At $x = 1$, the graph of $f$ has`,
    choices: ["a point of inflection", "a relative minimum", "a relative maximum", "neither a relative extremum nor a point of inflection"],
    why: [
      String.raw`The segment at $(1, 0)$ is horizontal, but the slopes are positive on both sides of $x = 1$, so $f$ is increasing and has no extremum there. Moving right, the slopes decrease from $2$ to $\dfrac{1}{2}$ to $0$ and then increase to $\dfrac{1}{2}$ and $2$. So $f'$ changes from decreasing to increasing at $x = 1$, and the graph changes from concave down to concave up.`,
      String.raw`A relative minimum needs $f'$ to change from negative to positive. The slopes to the left of $x = 1$ are positive, $\dfrac{1}{2}$ at $x = 0$ and $2$ at $x = -1$, so $f$ is increasing there.`,
      String.raw`A relative maximum needs $f'$ to change from positive to negative. The slopes to the right of $x = 1$ are positive, $\dfrac{1}{2}$ at $x = 2$, so $f$ keeps increasing.`,
      String.raw`There is no extremum, but the concavity does change. The slopes decrease to $0$ at $x = 1$ and then increase, so $f'$ has a minimum there and the graph changes from concave down to concave up.`,
    ], answer: 0 },
  { id: "q704-m02", type: "mcq", skill: "u7", topic: "7.4", calc: false, difficulty: "easy", set: "q704-s2",
    question: String.raw`Which of the following describes all the points of the $xy$-plane at which the solution curve through the point is increasing?`,
    choices: [String.raw`Above the line $y = 2x$`, String.raw`Above the line $y = 2x + 2$`, String.raw`Above the line $y = -2x$`, String.raw`To the right of the $y$-axis`],
    why: [
      String.raw`A solution curve is increasing where $\dfrac{dy}{dx} = y - 2x > 0$, that is, where $y > 2x$. In the field, the segments above the line of horizontal segments through $(-1, -2)$, $(0, 0)$ and $(1, 2)$ have positive slope.`,
      String.raw`This region is too small. The point $(0, 1)$ is below $y = 2x + 2$, but the slope there is $1 - 0 = 1 > 0$. The line $y = 2x + 2$ is where the concavity of the solution curves changes.`,
      String.raw`The point $(1, 0)$ is above $y = -2x$, but the slope there is $0 - 2 = -2 < 0$. The horizontal segments lie on $y = 2x$, not $y = -2x$.`,
      String.raw`The point $(1, 0)$ is to the right of the $y$-axis, but the slope there is $-2$. The sign of $y - 2x$ depends on both coordinates.`,
    ], answer: 0 },
  { id: "q704-m03", type: "mcq", skill: "u7", topic: "7.4", calc: false, difficulty: "moderate",
    stem: String.raw`Let $y = g(x)$ be the solution to the differential equation $\dfrac{dy}{dx} = x + y - 1$ with $g(0) = -2$.`,
    question: String.raw`At $x = 0$, which of the following is true about the graph of $g$?`,
    choices: ["It is decreasing and concave down.", "It is decreasing and concave up.", "It is increasing and concave down.", "It is increasing and concave up."],
    why: [
      String.raw`$\dfrac{dy}{dx} = 0 - 2 - 1 = -3 < 0$, so $g$ is decreasing. $\dfrac{d^2y}{dx^2} = 1 + \dfrac{dy}{dx} = 1 - 3 = -2 < 0$, so the graph is concave down.`,
      String.raw`This takes $\dfrac{d^2y}{dx^2} = 1$, treating $y$ as a constant. Since $y$ depends on $x$, $\dfrac{d^2y}{dx^2} = 1 + \dfrac{dy}{dx} = -2$.`,
      String.raw`$\dfrac{dy}{dx} = 0 + (-2) - 1 = -3$ is negative, so $g$ is decreasing.`,
      String.raw`Both signs are wrong: $\dfrac{dy}{dx} = -3$ and $\dfrac{d^2y}{dx^2} = -2$.`,
    ], answer: 0 },
  { id: "q704-m04", type: "mcq", skill: "u7", topic: "7.4", calc: false, difficulty: "difficult", set: "q704-s3",
    question: String.raw`Which of the following functions could be a solution to the differential equation whose slope field is shown?`,
    choices: [String.raw`$y = 2e^{-x^2}$`, String.raw`$y = \dfrac{2}{1 + x^2}$`, String.raw`$y = 2 - x^2$`, String.raw`$y = 2e^{x^2}$`],
    why: [
      String.raw`This curve passes through $(0, 2)$ with a horizontal tangent, stays above the $x$-axis, rises to the left of the $y$-axis and falls to the right, as the field does there. The field has slope $-2xy$ (for example $-2$ at $(1, 1)$ and $-4$ at $(1, 2)$), and $\dfrac{d}{dx}\left(2e^{-x^2}\right) = -4xe^{-x^2} = -2x\left(2e^{-x^2}\right)$.`,
      String.raw`This curve has the right shape, but it passes through $(1, 1)$ with slope $-\dfrac{4x}{\left(1 + x^2\right)^2} = -1$ there. The field shows slope $-2$ at $(1, 1)$.`,
      String.raw`This curve crosses the $x$-axis at $x = \pm\sqrt{2}$ with slopes $\mp 2\sqrt{2}$. Every segment on the $x$-axis is horizontal, so a solution curve cannot cross it steeply.`,
      String.raw`This curve rises to the right of the $y$-axis. Above the $x$-axis and to the right of the $y$-axis, every segment in the field has negative slope.`,
    ], answer: 0 },
  { id: "q704-m05", type: "mcq", skill: "u7", topic: "7.4", calc: false, difficulty: "moderate", set: "q704-s4",
    question: String.raw`Let $y = h(x)$ be the solution to the differential equation with $h(0) = -1$. What is $\displaystyle \lim_{x \to \infty} h(x)$?`,
    choices: ["$2$", "$-1$", String.raw`$\infty$`, String.raw`$-\infty$`],
    why: [
      String.raw`Below the row $y = 2$ every slope off the $y$-axis is positive, so $h$ increases for $x > 0$. Every segment in the row $y = 2$ is horizontal, so the constant function $y = 2$ is a solution and $h$ cannot cross it. Along each row below $y = 2$ the slopes grow steeper as $x$ increases, so $h$ cannot level off below $2$. So $h(x) \to 2$.`,
      String.raw`$-1$ is the value $h(0)$. The segment at $(0, -1)$ is horizontal, but the slopes to the right of it are positive, so $h$ does not stay at $-1$.`,
      String.raw`$h$ increases, but to increase without bound it would have to cross the row $y = 2$, where every segment is horizontal. Solution curves cannot cross the solution $y = 2$.`,
      String.raw`This is the behavior as $x \to -\infty$. To the left of the $y$-axis the slopes below $y = 2$ are also positive, so moving left the curve falls without bound. As $x \to \infty$ it rises.`,
    ], answer: 0 },
  { id: "q704-m06", type: "mcq", skill: "u7", topic: "7.4", calc: false, difficulty: "moderate", set: "q704-s2",
    question: String.raw`In which region of the $xy$-plane are all solution curves of the differential equation concave up?`,
    choices: [String.raw`$y > 2x + 2$`, String.raw`$y > 2x$`, String.raw`$y < 2x + 2$`, String.raw`$y > 2x - 2$`],
    why: [
      String.raw`$\dfrac{d^2y}{dx^2} = \dfrac{dy}{dx} - 2 = (y - 2x) - 2 = y - 2x - 2$, which is positive when $y > 2x + 2$.`,
      String.raw`$y > 2x$ is where $\dfrac{dy}{dx} > 0$, the region where solution curves increase. Concavity depends on $\dfrac{d^2y}{dx^2} = y - 2x - 2$.`,
      String.raw`In this region $\dfrac{d^2y}{dx^2} = y - 2x - 2 < 0$, so the curves are concave down.`,
      String.raw`This uses $\dfrac{d^2y}{dx^2} = \dfrac{dy}{dx} + 2$, a sign error on the derivative of $-2x$.`,
    ], answer: 0 },
  { id: "q704-f1a", type: "frq", skill: "u7", topic: "7.4", calc: false, set: "q704-s9", part: "(a)",
    prompt: String.raw`Find $\dfrac{d^2y}{dx^2}$ in terms of $x$ and $y$.`,
    rows: [
      { name: "Second derivative", earns: String.raw`$\dfrac{d^2y}{dx^2} = (y + 1) + (x - 2)\dfrac{dy}{dx} = (y + 1) + (x - 2)^2(y + 1)$.` },
    ],
    solution: String.raw`By the product rule, $\dfrac{d^2y}{dx^2} = (1)(y + 1) + (x - 2)\dfrac{dy}{dx} = (y + 1) + (x - 2)(x - 2)(y + 1) = (y + 1)\left(1 + (x - 2)^2\right)$.` },
  { id: "q704-f1b", type: "frq", skill: "u7", topic: "7.4", calc: false, set: "q704-s9", part: "(b)",
    prompt: String.raw`Does $f$ have a relative minimum, a relative maximum, or neither at $x = 2$? Justify your answer.`,
    rows: [
      { name: "Critical point", earns: String.raw`$\dfrac{dy}{dx} = (2 - 2)(3 + 1) = 0$ at $(2, 3)$.` },
      { name: "Answer with justification", earns: String.raw`Relative minimum, because $\dfrac{d^2y}{dx^2} = 4 > 0$ at $(2, 3)$ (Second Derivative Test).` },
    ],
    solution: String.raw`At $(2, 3)$, $\dfrac{dy}{dx} = (0)(4) = 0$, so $f'(2) = 0$. From part (a), $\dfrac{d^2y}{dx^2} = (3 + 1)\left(1 + 0^2\right) = 4 > 0$ at $(2, 3)$. By the Second Derivative Test, $f$ has a relative minimum at $x = 2$.` },
  { id: "q704-f1c", type: "frq", skill: "u7", topic: "7.4", calc: false, set: "q704-s9", part: "(c)",
    prompt: String.raw`Is the constant function $y = -1$ a solution of the differential equation? Explain your reasoning.`,
    rows: [
      { name: "Answer with reason", earns: String.raw`Yes, because for $y = -1$, $\dfrac{dy}{dx} = 0$ and $(x - 2)(-1 + 1) = 0$ for all $x$.` },
    ],
    solution: String.raw`If $y = -1$, then $\dfrac{dy}{dx} = 0$. Also $(x - 2)(y + 1) = (x - 2)(0) = 0$ for every $x$. Both sides are $0$, so $y = -1$ is a solution.` },
];

export default { forms: [{ id: "q704", name: "Topic 7.4 Quiz: Reasoning Using Slope Fields", group: "Unit 7: Differential Equations", items }] };

import { graph } from "../../plot.js";

export const sets = {
  "q704-s1": { name: "A slope field", label: "Graph", intro: String.raw`The slope field for the differential equation $\dfrac{dy}{dx} = \dfrac{xy}{2}$ is shown below.`,
    sources: [{ title: "", blocks: [{ svg: graph({ x: [-3, 3], y: [-3, 3], xname: "x", yname: "y", field: { f: (x, y) => (x * y) / 2, step: 1 },
      alt: "Slope field on the grid from x = -3 to 3 and y = -3 to 3. Segments on both axes are horizontal. Slopes are positive in the first and third quadrants and negative in the second and fourth quadrants, and they grow steeper farther from the axes." }) }] }] },
  "q704-s2": { name: "A slope field", label: "Graph", intro: String.raw`The slope field for a differential equation is shown below.`,
    sources: [{ title: "", blocks: [{ svg: graph({ x: [-3, 3], y: [-3, 3], xname: "x", yname: "y", field: { f: (x, y) => -x, step: 1 },
      alt: "Slope field on the grid from x = -3 to 3 and y = -3 to 3. All segments in the same vertical column have the same slope. Segments on the y-axis are horizontal. In the column x = 1 the slope is -1, in the column x = 2 it is -2, in the column x = -1 it is 1, and in the column x = -2 it is 2." }) }] }] },
  "q704-s9": { name: "A particular solution", label: "Free response", intro: String.raw`Let $y = f(x)$ be the particular solution to the differential equation $\dfrac{dy}{dx} = (x - 2)(y + 1)$ with initial condition $f(2) = 3$.`,
    sources: [{ title: "", blocks: [{ p: String.raw`$$\dfrac{dy}{dx} = (x - 2)(y + 1), \quad f(2) = 3$$` }] }] },
};

const items = [
  { id: "q704-m01", type: "mcq", skill: "u7", topic: "7.4", calc: false, set: "q704-s1",
    question: String.raw`The solution curve of the differential equation that passes through the point $(0, -1)$ has which of the following at $x = 0$?`,
    choices: ["A relative maximum", "A relative minimum", "A point of inflection", "Neither a relative extremum nor a point of inflection"],
    why: [
      String.raw`At $(0, -1)$ the slope is $0$. Just to the left, $x < 0$ and $y < 0$, so the slopes are positive; just to the right they are negative. The curve rises and then falls, so $x = 0$ is a relative maximum.`,
      String.raw`Below the $x$-axis the slopes are positive to the left of $x = 0$ and negative to the right, so the curve rises then falls. That is a maximum, not a minimum.`,
      String.raw`The slope changes sign from positive to negative at $x = 0$, which gives a relative extremum. At $(0, -1)$, $\dfrac{d^2y}{dx^2} = \dfrac{y}{2} + \dfrac{x}{2}\cdot\dfrac{dy}{dx} = -\dfrac{1}{2} \neq 0$.`,
      String.raw`The slope at $(0, -1)$ is $\dfrac{0 \cdot (-1)}{2} = 0$, and it changes from positive to negative there, so the curve has a relative maximum.`,
    ], answer: 0 },
  { id: "q704-m02", type: "mcq", skill: "u7", topic: "7.4", calc: false,
    question: String.raw`Which of the following constant functions is a solution of the differential equation $\dfrac{dy}{dx} = (y - 3)(x + 1)$?`,
    choices: ["$y = 3$", "$y = -1$", "$y = -3$", "$y = 0$"],
    why: [
      String.raw`If $y = 3$, then $\dfrac{dy}{dx} = 0$ and $(3 - 3)(x + 1) = 0$ for every $x$. The horizontal line $y = 3$ is a solution.`,
      String.raw`The factor $x + 1$ is $0$ on the vertical line $x = -1$, not on a horizontal line. For $y = -1$, $(y - 3)(x + 1) = -4(x + 1)$, which is not $0$ for all $x$.`,
      String.raw`For $y = -3$, $(y - 3)(x + 1) = -6(x + 1) \neq 0$. The zero of $y - 3$ is $y = 3$, not $y = -3$.`,
      String.raw`For $y = 0$, $(y - 3)(x + 1) = -3(x + 1)$, which is not $0$ for all $x$.`,
    ], answer: 0 },
  { id: "q704-m03", type: "mcq", skill: "u7", topic: "7.4", calc: false,
    stem: String.raw`Let $y = g(x)$ be the solution to the differential equation $\dfrac{dy}{dx} = x + y - 1$ with $g(0) = -2$.`,
    question: String.raw`At $x = 0$, which of the following is true about the graph of $g$?`,
    choices: ["It is decreasing and concave down.", "It is decreasing and concave up.", "It is increasing and concave down.", "It is increasing and concave up."],
    why: [
      String.raw`$\dfrac{dy}{dx} = 0 - 2 - 1 = -3 < 0$, so $g$ is decreasing. $\dfrac{d^2y}{dx^2} = 1 + \dfrac{dy}{dx} = 1 - 3 = -2 < 0$, so the graph is concave down.`,
      String.raw`This takes $\dfrac{d^2y}{dx^2} = 1$, treating $y$ as a constant. Since $y$ depends on $x$, $\dfrac{d^2y}{dx^2} = 1 + \dfrac{dy}{dx} = -2$.`,
      String.raw`$\dfrac{dy}{dx} = 0 + (-2) - 1 = -3$ is negative, so $g$ is decreasing.`,
      String.raw`Both signs are wrong: $\dfrac{dy}{dx} = -3$ and $\dfrac{d^2y}{dx^2} = -2$.`,
    ], answer: 0 },
  { id: "q704-m04", type: "mcq", skill: "u7", topic: "7.4", calc: false, set: "q704-s2",
    question: String.raw`Which of the following could be a solution of the differential equation whose slope field is shown?`,
    choices: [String.raw`$y = 3 - \frac{x^2}{2}$`, String.raw`$y = \frac{x^2}{2} - 3$`, String.raw`$y = 3 - x$`, String.raw`$y = e^{-x}$`],
    why: [
      String.raw`$\dfrac{d}{dx}\left(3 - \dfrac{x^2}{2}\right) = -x$, which is $0$ on the $y$-axis, positive for $x < 0$, negative for $x > 0$, and equal to $-1$ at $x = 1$ and $-2$ at $x = 2$, matching the field.`,
      String.raw`This has derivative $x$, which is negative to the left of the $y$-axis. The field has positive slopes there.`,
      String.raw`This has constant slope $-1$, but the field has slope $0$ on the $y$-axis.`,
      String.raw`This has derivative $-e^{-x}$, which is never $0$, but the field has horizontal segments on the $y$-axis.`,
    ], answer: 0 },
  { id: "q704-m05", type: "mcq", skill: "u7", topic: "7.4", calc: false,
    stem: String.raw`Let $y = h(x)$ be the solution to the differential equation $\dfrac{dy}{dx} = y^2 - 4$ with $h(0) = 1$.`,
    question: String.raw`What is $\displaystyle \lim_{x \to \infty} h(x)$?`,
    choices: ["$-2$", "$2$", "$1$", String.raw`$-\infty$`],
    why: [
      String.raw`The constant functions $y = 2$ and $y = -2$ are solutions. Between them, $y^2 - 4 < 0$, so $h$ decreases from $1$. Solution curves cannot cross $y = -2$, and the slopes approach $0$ as $y$ approaches $-2$, so $h(x) \to -2$.`,
      String.raw`At $y = 1$, $\dfrac{dy}{dx} = 1 - 4 = -3 < 0$, so $h$ decreases, away from $2$.`,
      String.raw`$1$ is the initial value. The slope at $y = 1$ is $-3$, so $h$ does not stay at $1$.`,
      String.raw`$h$ decreases, but it cannot pass the equilibrium solution $y = -2$, so it does not decrease without bound.`,
    ], answer: 0 },
  { id: "q704-m06", type: "mcq", skill: "u7", topic: "7.4", calc: false,
    question: String.raw`For the differential equation $\dfrac{dy}{dx} = y - x$, in which region of the $xy$-plane are all solution curves concave up?`,
    choices: [String.raw`$y > x + 1$`, String.raw`$y > x$`, String.raw`$y < x + 1$`, String.raw`$y > x - 1$`],
    why: [
      String.raw`$\dfrac{d^2y}{dx^2} = \dfrac{dy}{dx} - 1 = y - x - 1$, which is positive when $y > x + 1$.`,
      String.raw`$y > x$ is where $\dfrac{dy}{dx} > 0$, the region where solutions increase. Concavity depends on $\dfrac{d^2y}{dx^2} = y - x - 1$.`,
      String.raw`In this region $\dfrac{d^2y}{dx^2} = y - x - 1 < 0$, so the curves are concave down.`,
      String.raw`This uses $\dfrac{d^2y}{dx^2} = \dfrac{dy}{dx} + 1$, a sign error on the derivative of $-x$.`,
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

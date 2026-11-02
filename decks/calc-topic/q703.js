import { graph } from "../../plot.js";

export const sets = {
  "q703-s1": { name: "A slope field", label: "Graph", intro: String.raw`The slope field for a differential equation is shown below.`,
    sources: [{ title: "", blocks: [{ svg: graph({ x: [-3, 3], y: [-3, 3], xname: "x", yname: "y", field: { f: (x, y) => x + y, step: 1 },
      alt: "Slope field on the grid from x = -3 to 3 and y = -3 to 3. Segments are horizontal at the points on the line y = -x, such as (0, 0), (1, -1) and (-2, 2). Slopes are positive above that line and negative below it, and they grow steeper farther from it. The segments along any line parallel to y = -x all have the same slope." }) }] }] },
  "q703-s2": { name: "Another slope field", label: "Graph", intro: String.raw`The slope field for a differential equation is shown below.`,
    sources: [{ title: "", blocks: [{ svg: graph({ x: [-3, 3], y: [-2, 4], xname: "x", yname: "y", field: { f: (x, y) => y - 1, step: 1 },
      alt: "Slope field on the grid from x = -3 to 3 and y = -2 to 4. All segments in the same horizontal row have the same slope. Segments in the row y = 1 are horizontal. Slopes are positive in the rows above y = 1 and negative in the rows below it, and they grow steeper farther from y = 1." }) }] }] },
  "q703-s9": { name: "The slope field of dy/dx = x + 2y", label: "Free response", intro: String.raw`Consider the differential equation $\dfrac{dy}{dx} = x + 2y$.`,
    sources: [{ title: "", blocks: [{ p: String.raw`$$\dfrac{dy}{dx} = x + 2y$$` }] }] },
};

const items = [
  { id: "q703-m01", type: "mcq", skill: "u7", topic: "7.3", calc: false, set: "q703-s1",
    question: String.raw`Which differential equation has the slope field shown?`,
    choices: [String.raw`$\dfrac{dy}{dx} = x + y$`, String.raw`$\dfrac{dy}{dx} = x - y$`, String.raw`$\dfrac{dy}{dx} = xy$`, String.raw`$\dfrac{dy}{dx} = y - x$`],
    why: [
      String.raw`The segments are horizontal where $x + y = 0$, along the line $y = -x$, and the slopes are positive above that line, where $x + y > 0$. For example, the slope at $(1, 1)$ is $2$.`,
      String.raw`For $x - y$, the horizontal segments would lie along $y = x$, and the slope at $(1, 1)$ would be $0$. In the field, the slope at $(1, 1)$ is positive.`,
      String.raw`For $xy$, every segment on both axes would be horizontal. In the field, the segment at $(0, 2)$ has a positive slope.`,
      String.raw`For $y - x$, the horizontal segments would lie along $y = x$, and the slope at $(1, 1)$ would be $0$.`,
    ], answer: 0 },
  { id: "q703-m02", type: "mcq", skill: "u7", topic: "7.3", calc: false,
    question: String.raw`In the slope field for which of the following differential equations are all of the segments along the horizontal line $y = 2$ horizontal?`,
    choices: [String.raw`$\dfrac{dy}{dx} = x(y - 2)$`, String.raw`$\dfrac{dy}{dx} = y(x - 2)$`, String.raw`$\dfrac{dy}{dx} = y + 2$`, String.raw`$\dfrac{dy}{dx} = x - 2$`],
    why: [
      String.raw`At every point with $y = 2$, the slope is $x(2 - 2) = 0$, so every segment on the line $y = 2$ is horizontal.`,
      String.raw`At $y = 2$ the slope is $2(x - 2)$, which is $0$ only at $x = 2$. This form has horizontal segments along the vertical line $x = 2$.`,
      String.raw`At $y = 2$ the slope is $4$, not $0$. The horizontal segments are along $y = -2$.`,
      String.raw`The slope $x - 2$ is $0$ only on the vertical line $x = 2$, not on the line $y = 2$.`,
    ], answer: 0 },
  { id: "q703-m03", type: "mcq", skill: "u7", topic: "7.3", calc: false,
    question: String.raw`In the slope field for a differential equation, every segment on any vertical line $x = c$ has the same slope as every other segment on that line. Which of the following could be the differential equation?`,
    choices: [String.raw`$\dfrac{dy}{dx} = \cos x$`, String.raw`$\dfrac{dy}{dx} = y^2$`, String.raw`$\dfrac{dy}{dx} = x + y$`, String.raw`$\dfrac{dy}{dx} = xy$`],
    why: [
      String.raw`The slope $\cos x$ depends on $x$ alone, so all points with the same $x$ have the same slope.`,
      String.raw`The slope $y^2$ depends on $y$ alone, so the segments match along horizontal lines, not vertical ones.`,
      String.raw`On the line $x = 0$, the slope $x + y$ is $1$ at $y = 1$ and $2$ at $y = 2$, so the slopes on a vertical line differ.`,
      String.raw`On the line $x = 1$, the slope $xy$ is $1$ at $y = 1$ and $2$ at $y = 2$, so the slopes on a vertical line differ.`,
    ], answer: 0 },
  { id: "q703-m04", type: "mcq", skill: "u7", topic: "7.3", calc: false,
    question: String.raw`In the slope field for the differential equation $\dfrac{dy}{dx} = 2x - y$, what is the slope of the segment drawn at the point $(-1, 3)$?`,
    choices: ["$-5$", "$7$", "$1$", "$-4$"],
    why: [
      String.raw`$\dfrac{dy}{dx} = 2(-1) - 3 = -2 - 3 = -5$.`,
      String.raw`This swaps the coordinates, using $x = 3$ and $y = -1$: $6 + 1 = 7$.`,
      String.raw`This adds $y$ in place of subtracting it: $-2 + 3 = 1$.`,
      String.raw`This leaves out the factor $2$: $-1 - 3 = -4$.`,
    ], answer: 0 },
  { id: "q703-m05", type: "mcq", skill: "u7", topic: "7.3", calc: false, set: "q703-s2",
    question: String.raw`Which differential equation has the slope field shown?`,
    choices: [String.raw`$\dfrac{dy}{dx} = y - 1$`, String.raw`$\dfrac{dy}{dx} = 1 - y$`, String.raw`$\dfrac{dy}{dx} = x - 1$`, String.raw`$\dfrac{dy}{dx} = x(y - 1)$`],
    why: [
      String.raw`The slopes are the same across each row, so they depend on $y$ alone. They are $0$ at $y = 1$, positive above, and negative below, which matches $y - 1$. For example, the slope at $(0, 3)$ is $2$.`,
      String.raw`For $1 - y$, the slopes would be negative above $y = 1$. In the field, the slope at $(0, 3)$ is positive.`,
      String.raw`For $x - 1$, the slopes would depend on $x$ and match down each column, with horizontal segments along $x = 1$.`,
      String.raw`For $x(y - 1)$, every segment on the $y$-axis would be horizontal, and the slopes would change sign across $x = 0$. In the field, the slope at $(0, 3)$ is not $0$.`,
    ], answer: 0 },
  { id: "q703-m06", type: "mcq", skill: "u7", topic: "7.3", calc: false,
    question: String.raw`Which statement about the slope field for the differential equation $\dfrac{dy}{dx} = x^2 + y^2$ is true?`,
    choices: [
      "Every segment except the one at the origin has a positive slope.",
      String.raw`Every segment on the $y$-axis is horizontal.`,
      "The segments in the second quadrant have negative slopes.",
      "Every segment on a vertical line has the same slope.",
    ],
    why: [
      String.raw`$x^2 + y^2 \geq 0$, and it equals $0$ only at $(0, 0)$. So every other segment has a positive slope.`,
      String.raw`On the $y$-axis, $x = 0$ and the slope is $y^2$, which is positive except at the origin.`,
      String.raw`In the second quadrant $x < 0$, but $x^2 > 0$, so the slope $x^2 + y^2$ is positive there.`,
      String.raw`On the line $x = 1$, the slope is $1 + y^2$, which changes with $y$.`,
    ], answer: 0 },
  { id: "q703-f1a", type: "frq", skill: "u7", topic: "7.3", calc: false, set: "q703-s9", part: "(a)",
    prompt: String.raw`Find the slope of the segment that would be drawn in the slope field at each of the points $(0, 1)$, $(2, -1)$, $(-2, 1)$, and $(1, 0)$.`,
    rows: [
      { name: "Zero slopes", earns: String.raw`Slopes $0$ at $(2, -1)$ and at $(-2, 1)$.` },
      { name: "Nonzero slopes", earns: String.raw`Slope $2$ at $(0, 1)$ and slope $1$ at $(1, 0)$.` },
    ],
    solution: String.raw`At $(0, 1)$: $0 + 2(1) = 2$. At $(2, -1)$: $2 + 2(-1) = 0$. At $(-2, 1)$: $-2 + 2(1) = 0$. At $(1, 0)$: $1 + 2(0) = 1$.` },
  { id: "q703-f1b", type: "frq", skill: "u7", topic: "7.3", calc: false, set: "q703-s9", part: "(b)",
    prompt: String.raw`Describe all points in the $xy$-plane at which the segments of the slope field are horizontal.`,
    rows: [
      { name: "Answer", earns: String.raw`The points on the line $y = -\dfrac{x}{2}$, where $x + 2y = 0$.` },
    ],
    solution: String.raw`A segment is horizontal where $\dfrac{dy}{dx} = 0$, that is, where $x + 2y = 0$. These are the points on the line $y = -\dfrac{x}{2}$.` },
  { id: "q703-f1c", type: "frq", skill: "u7", topic: "7.3", calc: false, set: "q703-s9", part: "(c)",
    prompt: String.raw`Describe the region of the $xy$-plane in which the segments of the slope field have positive slope.`,
    rows: [
      { name: "Answer", earns: String.raw`The region above the line $y = -\dfrac{x}{2}$, where $x + 2y > 0$.` },
    ],
    solution: String.raw`The slope is positive where $x + 2y > 0$, that is, where $y > -\dfrac{x}{2}$. This is the region above the line $y = -\dfrac{x}{2}$.` },
];

export default { forms: [{ id: "q703", name: "Topic 7.3 Quiz: Sketching Slope Fields", group: "Unit 7: Differential Equations", items }] };

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
  "q703-s1": { name: "A slope field", label: "Graph", intro: String.raw`The slope field for a differential equation is shown below.`,
    sources: [{ title: "", blocks: [{ svg: fieldGraph({ x: [-2, 2], y: [-2, 2], u: 56, f: (x, y) => x - 2 * y,
      alt: "Slope field on the grid from x = -2 to 2 and y = -2 to 2. The segments are horizontal at (0, 0), (2, 1) and (-2, -1), which lie on the line y = x/2. The segment at (1, 0) has slope 1, the segment at (0, 1) has slope -2, the segment at (0, -1) has slope 2, and the segment at (1, 1) has slope -1. Slopes are negative above the line y = x/2 and positive below it." }) }] }] },
  "q703-s2": { name: "A slope field that depends on y", label: "Graph", intro: String.raw`The slope field for a differential equation is shown below.`,
    sources: [{ title: "", blocks: [{ svg: fieldGraph({ x: [-2, 2], y: [-2, 2], u: 56, f: (x, y) => (y * y) / 2,
      alt: "Slope field on the grid from x = -2 to 2 and y = -2 to 2. All segments in the same row are parallel. The segments in the row y = 0 are horizontal. The rows y = 1 and y = -1 both have slope 1/2, and the rows y = 2 and y = -2 both have slope 2. No segment has negative slope." }) }] }] },
  "q703-s3": { name: "Four slope fields", label: "Graph", intro: String.raw`Four slope fields, labeled 1, 2, 3 and 4, are shown below.`,
    sources: [
      { title: "Field 1", blocks: [{ svg: fieldGraph({ x: [-3, 3], y: [-2, 2], u: 40, f: (x, y) => Math.cos(y),
        alt: "Field 1, on the grid from x = -3 to 3 and y = -2 to 2. All segments in the same row are parallel. The row y = 0 has slope 1, the rows y = 1 and y = -1 have slope about 0.54, and the rows y = 2 and y = -2 have slope about -0.42." }) }] },
      { title: "Field 2", blocks: [{ svg: fieldGraph({ x: [-3, 3], y: [-2, 2], u: 40, f: (x, y) => -Math.cos(x),
        alt: "Field 2, on the grid from x = -3 to 3 and y = -2 to 2. All segments in the same column are parallel. The column x = 0 has slope -1, the columns x = 1 and x = -1 have slope about -0.54, the columns x = 2 and x = -2 have slope about 0.42, and the columns x = 3 and x = -3 have slope about 0.99." }) }] },
      { title: "Field 3", blocks: [{ svg: fieldGraph({ x: [-3, 3], y: [-2, 2], u: 40, f: (x, y) => Math.cos(x),
        alt: "Field 3, on the grid from x = -3 to 3 and y = -2 to 2. All segments in the same column are parallel. The column x = 0 has slope 1, the columns x = 1 and x = -1 have slope about 0.54, the columns x = 2 and x = -2 have slope about -0.42, and the columns x = 3 and x = -3 have slope about -0.99." }) }] },
      { title: "Field 4", blocks: [{ svg: fieldGraph({ x: [-3, 3], y: [-2, 2], u: 40, f: (x, y) => Math.sin(x),
        alt: "Field 4, on the grid from x = -3 to 3 and y = -2 to 2. All segments in the same column are parallel. The column x = 0 is horizontal. The columns x = 1, 2 and 3 have positive slopes of about 0.84, 0.91 and 0.14, and the columns x = -1, -2 and -3 have the opposite slopes." }) }] },
    ] },
  "q703-s9": { name: "The slope field of dy/dx = x + 2y", label: "Free response", intro: String.raw`Consider the differential equation $\dfrac{dy}{dx} = x + 2y$.`,
    sources: [{ title: "", blocks: [{ p: String.raw`$$\dfrac{dy}{dx} = x + 2y$$` }] }] },
};

const items = [
  { id: "q703-m01", type: "mcq", skill: "u7", topic: "7.3", calc: false, difficulty: "easy", set: "q703-s1",
    question: String.raw`Which differential equation has the slope field shown?`,
    choices: [String.raw`$\dfrac{dy}{dx} = x - 2y$`, String.raw`$\dfrac{dy}{dx} = 2y - x$`, String.raw`$\dfrac{dy}{dx} = 2x - y$`, String.raw`$\dfrac{dy}{dx} = x - y$`],
    why: [
      String.raw`The segments are horizontal at $(0, 0)$, $(2, 1)$ and $(-2, -1)$, where $x - 2y = 0$. The slope at $(1, 0)$ is $1 - 0 = 1$ and the slope at $(0, 1)$ is $0 - 2 = -2$, as drawn.`,
      String.raw`This has the same horizontal segments, along $y = \dfrac{x}{2}$, but the opposite signs: it gives slope $-1$ at $(1, 0)$, where the field shows slope $1$.`,
      String.raw`This switches the coefficients. Its horizontal segments lie along $y = 2x$, such as at $(1, 2)$, where the field shows slope $1 - 4 = -3$.`,
      String.raw`This has horizontal segments along $y = x$, such as at $(1, 1)$, where the field shows slope $-1$.`,
    ], answer: 0 },
  { id: "q703-m02", type: "mcq", skill: "u7", topic: "7.3", calc: false, difficulty: "easy",
    question: String.raw`In the slope field for which of the following differential equations are all of the segments along the horizontal line $y = 2$ horizontal?`,
    choices: [String.raw`$\dfrac{dy}{dx} = x(y - 2)$`, String.raw`$\dfrac{dy}{dx} = y(x - 2)$`, String.raw`$\dfrac{dy}{dx} = y + 2$`, String.raw`$\dfrac{dy}{dx} = x - 2$`],
    why: [
      String.raw`At every point with $y = 2$, the slope is $x(2 - 2) = 0$, so every segment on the line $y = 2$ is horizontal.`,
      String.raw`At $y = 2$ the slope is $2(x - 2)$, which is $0$ only at $x = 2$. This form has horizontal segments along the vertical line $x = 2$.`,
      String.raw`At $y = 2$ the slope is $4$, not $0$. The horizontal segments are along $y = -2$.`,
      String.raw`The slope $x - 2$ is $0$ only on the vertical line $x = 2$, not on the line $y = 2$.`,
    ], answer: 0 },
  { id: "q703-m03", type: "mcq", skill: "u7", topic: "7.3", calc: false, difficulty: "moderate", set: "q703-s3",
    question: String.raw`Which of the slope fields shown is the slope field for $\dfrac{dy}{dx} = \cos x$?`,
    choices: ["Field 3", "Field 1", "Field 2", "Field 4"],
    why: [
      String.raw`The slope $\cos x$ depends only on $x$, so each column of segments is parallel. On the $y$-axis the slope is $\cos 0 = 1$, and at $x = \pm 2$ it is $\cos 2 \approx -0.42$. Field 3 shows this.`,
      String.raw`In Field 1 the rows are parallel, so its slope depends only on $y$, as for $\cos y$. For $\cos x$ the segments in each column are parallel.`,
      String.raw`Field 2 has parallel columns, but its slope on the $y$-axis is $-1$, which fits $-\cos x$. For $\cos x$ the slope there is $\cos 0 = 1$.`,
      String.raw`Field 4 has parallel columns, but its segments on the $y$-axis are horizontal, which fits $\sin x$. For $\cos x$ the slope there is $1$.`,
    ], answer: 0 },
  { id: "q703-m04", type: "mcq", skill: "u7", topic: "7.3", calc: false, difficulty: "easy",
    question: String.raw`In the slope field for the differential equation $\dfrac{dy}{dx} = 3x - 2y$, what is the slope of the segment drawn at the point $(-2, -7)$?`,
    choices: ["$8$", "$-17$", "$-20$", "$-8$"],
    why: [
      String.raw`$\dfrac{dy}{dx} = 3(-2) - 2(-7) = -6 + 14 = 8$.`,
      String.raw`This swaps the coordinates, using $x = -7$ and $y = -2$: $-21 + 4 = -17$.`,
      String.raw`This adds $2y$ in place of subtracting it: $-6 + 2(-7) = -20$.`,
      String.raw`This computes $2y - 3x = -14 + 6 = -8$, the opposite of the slope.`,
    ], answer: 0 },
  { id: "q703-m05", type: "mcq", skill: "u7", topic: "7.3", calc: false, difficulty: "easy", set: "q703-s2",
    question: String.raw`Which differential equation has the slope field shown?`,
    choices: [String.raw`$\dfrac{dy}{dx} = \dfrac{y^2}{2}$`, String.raw`$\dfrac{dy}{dx} = \dfrac{y^3}{2}$`, String.raw`$\dfrac{dy}{dx} = \dfrac{x^2}{2}$`, String.raw`$\dfrac{dy}{dx} = \dfrac{y}{2}$`],
    why: [
      String.raw`The segments in each row are parallel, so the slope depends only on $y$. The row $y = 0$ is horizontal, and the slopes are $\dfrac{1}{2}$ at $y = \pm 1$ and $2$ at $y = \pm 2$, which are the values of $\dfrac{y^2}{2}$.`,
      String.raw`An odd power of $y$ is negative below the $x$-axis: $\dfrac{y^3}{2}$ gives $-\dfrac{1}{2}$ at $y = -1$. The field has no negative slopes.`,
      String.raw`This slope depends only on $x$, so the segments in each column would be parallel. In the field, the rows are parallel.`,
      String.raw`This slope is negative below the $x$-axis, $-\dfrac{1}{2}$ at $y = -1$, and is $1$ at $y = 2$. The field shows slope $\dfrac{1}{2}$ at $y = -1$ and $2$ at $y = 2$.`,
    ], answer: 0 },
  { id: "q703-m06", type: "mcq", skill: "u7", topic: "7.3", calc: false, difficulty: "difficult",
    question: String.raw`Which of the following statements about the slope field for the differential equation $\dfrac{dy}{dx} = x^2(y - 1)$ are true?
I. Every segment on the line $y = 1$ is horizontal.
II. Every segment on the $y$-axis is horizontal.
III. Every segment in the second quadrant above the line $y = 1$ has negative slope.`,
    choices: ["I and II only", "I only", "II and III only", "I, II, and III"],
    why: [
      String.raw`I is true: at $y = 1$ the slope is $x^2 \cdot 0 = 0$. II is true: at $x = 0$ the slope is $0 \cdot (y - 1) = 0$. III is false: for $x < 0$ and $y > 1$, $x^2 > 0$ and $y - 1 > 0$, so the slope is positive.`,
      String.raw`II is also true. On the $y$-axis $x = 0$, so the slope $x^2(y - 1)$ is $0$ for every $y$.`,
      String.raw`I is true, since $y - 1 = 0$ on the line $y = 1$. III is false: $x^2$ is positive for $x < 0$, so the sign of the slope is the sign of $y - 1$, which is positive above $y = 1$.`,
      String.raw`III is false. The factor $x^2$ is never negative, so a negative $x$ does not make the slope negative. Above $y = 1$ every slope off the $y$-axis is positive.`,
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

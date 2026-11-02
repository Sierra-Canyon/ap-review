import { graph } from "../../plot.js";

export const sets = {
  "c7r-s1": { name: "A slope field", label: "Graph", intro: String.raw`The slope field for a certain differential equation is shown below.`,
    sources: [{ title: "", blocks: [{ svg: graph({ x: [-2, 2], y: [-2, 2], xname: "x", yname: "y", field: { f: (x, y) => 2 * x + y, step: 1 },
      alt: "Slope field on the grid from x = -2 to 2 and y = -2 to 2. The segments are horizontal at (0, 0), (1, -2) and (-1, 2). The segment at (0, 1) has slope 1, the segment at (0, -1) has slope -1, the segment at (1, 0) has slope 2, and the segment at (-1, 0) has slope -2. Slopes increase from left to right along each row and from bottom to top along each column." }) }] }] },
  "c7r-s2": { name: "Another slope field", label: "Graph", intro: String.raw`The slope field for a certain differential equation is shown below.`,
    sources: [{ title: "", blocks: [{ svg: graph({ x: [-2, 2], y: [-2, 2], xname: "x", yname: "y", field: { f: (x, y) => x * x - 1, step: 1 },
      alt: "Slope field on the grid from x = -2 to 2 and y = -2 to 2. All segments in the same column are parallel. In the columns x = -1 and x = 1 the segments are horizontal, in the column x = 0 the segments have slope -1, and in the columns x = -2 and x = 2 the segments have slope 3." }) }] }] },
  "c7r-s3": { name: "A slope field with a horizontal row", label: "Graph", intro: String.raw`The slope field for the differential equation $\dfrac{dy}{dx} = \dfrac{2 - y}{2}$ is shown below.`,
    sources: [{ title: "", blocks: [{ svg: graph({ x: [-1, 5], y: [-1, 5], xname: "x", yname: "y", field: { f: (x, y) => (2 - y) / 2, step: 1 },
      alt: "Slope field on the grid from x = -1 to 5 and y = -1 to 5. All segments in the same row are parallel. The segments in the row y = 2 are horizontal. Above y = 2 the segments have negative slope, getting steeper higher up: slope -1/2 at y = 3, -1 at y = 4, -3/2 at y = 5. Below y = 2 the segments have positive slope: 1/2 at y = 1, 1 at y = 0, 3/2 at y = -1." }) }] }] },
  "c7r-s4": { name: "A slope field with vertical segments", label: "Graph", intro: String.raw`The slope field for the differential equation $\dfrac{dy}{dx} = -\dfrac{x}{y}$ is shown below at the points where $y \ne 0$.`,
    sources: [{ title: "", blocks: [{ svg: graph({ x: [-3, 3], y: [-3, 3], xname: "x", yname: "y", field: { f: (x, y) => -x / y, step: 1 },
      alt: "Slope field on the grid from x = -3 to 3 and y = -3 to 3, with no segments on the x-axis. Segments on the y-axis are horizontal. Above the x-axis, segments to the left of the y-axis have positive slope and segments to the right have negative slope, becoming steep near the x-axis. Below the x-axis the pattern is reversed. The segments are tangent to circles centered at the origin." }) }] }] },
  "c7r-s5": { name: "A particular solution", label: "Free response", intro: String.raw`Consider the differential equation $\dfrac{dy}{dx} = e^{x}y^2$. Let $y = f(x)$ be the particular solution to the differential equation with the initial condition $f(0) = \dfrac{1}{2}$.`,
    sources: [{ title: "", blocks: [{ p: String.raw`Answer each part without a calculator. Show the work that leads to each answer.` }] }] },
  "c7r-s6": { name: "A slope field and a line", label: "Free response", intro: String.raw`Consider the differential equation $\dfrac{dy}{dx} = 3x - y + 1$. Its slope field is shown below.`,
    sources: [{ title: "", blocks: [{ svg: graph({ x: [-1, 3], y: [-2, 6], height: 460, xname: "x", yname: "y", field: { f: (x, y) => 3 * x - y + 1, step: 1 },
      alt: "Slope field for dy/dx = 3x - y + 1 on the grid from x = -1 to 3 and y = -2 to 6. The segments are horizontal along the line y = 3x + 1, for example at (-1, -2), (0, 1) and (1, 4). The segments at the points (0, -2), (1, 1), (2, 4) all have slope 3 and lie along the line y = 3x - 2." }) }, { p: String.raw`Answer each part without a calculator. Show the work that leads to each answer.` }] }] },
  "c7r-s7": { name: "Subscribers to a channel", label: "Free response", intro: String.raw`The number of subscribers to a new video channel $t$ months after it launches is $N(t)$. The number of subscribers increases at a rate proportional to the number of subscribers. At time $t = 0$ there are $1200$ subscribers, and at time $t = 4$ months there are $1800$ subscribers.`,
    sources: [{ title: "", blocks: [{ p: String.raw`A graphing calculator is allowed. Give decimal answers to three decimal places.` }] }] },
};

export default [
  // 7.1 Modeling situations with differential equations
  { id: "c7r-m01", type: "mcq", skill: "u7", topic: "7.1", calc: false,
    stem: String.raw`A school has $800$ students. The rate at which a rumor spreads through the school is proportional to the number of students who have not yet heard it. Let $R$ be the number of students who have heard the rumor $t$ hours after it starts, and let $k$ be a positive constant.`,
    question: String.raw`Which differential equation models this situation?`,
    choices: [String.raw`$\dfrac{dR}{dt} = k(800 - R)$`, String.raw`$\dfrac{dR}{dt} = kR$`, String.raw`$\dfrac{dR}{dt} = k(R - 800)$`, String.raw`$\dfrac{dR}{dt} = kt(800 - R)$`],
    why: [
      String.raw`The number of students who have not heard the rumor is $800 - R$. The rate $\dfrac{dR}{dt}$ is proportional to that number, so $\dfrac{dR}{dt} = k(800 - R)$.`,
      String.raw`This makes the rate proportional to the number who have heard the rumor, not the number who have not.`,
      String.raw`Since $R < 800$ and $k > 0$, this rate is negative, so the number who have heard the rumor would decrease.`,
      String.raw`The extra factor $t$ makes the rate depend on the time as well. The rate is proportional only to $800 - R$.`,
    ],
    answer: 0 },
  { id: "c7r-m02", type: "mcq", skill: "u7", topic: "7.1", calc: false,
    stem: String.raw`A boat coasts after its motor is turned off. Because of the drag of the water, its speed $v$, in meters per second, decreases at a rate proportional to the square of the speed. Let $k$ be a positive constant.`,
    question: String.raw`Which differential equation models the speed $v$ as a function of the time $t$?`,
    choices: [String.raw`$\dfrac{dv}{dt} = -kv^2$`, String.raw`$\dfrac{dv}{dt} = kv^2$`, String.raw`$\dfrac{dv}{dt} = -\dfrac{k}{v^2}$`, String.raw`$\dfrac{dv}{dt} = -kv$`],
    why: [
      String.raw`The rate of change of the speed is $\dfrac{dv}{dt}$. It is proportional to $v^2$, and it is negative because the speed decreases, so $\dfrac{dv}{dt} = -kv^2$ with $k > 0$.`,
      String.raw`With $k > 0$ this rate is positive, so the boat would speed up. The speed decreases, so the rate is negative.`,
      String.raw`This makes the rate inversely proportional to $v^2$. Proportional to $v^2$ means a constant times $v^2$.`,
      String.raw`This makes the rate proportional to the speed itself, not to the square of the speed.`,
    ],
    answer: 0 },
  { id: "c7r-m03", type: "mcq", skill: "u7", topic: "7.1", calc: false,
    stem: String.raw`The balance $B$, in dollars, of an account $t$ years after it is opened satisfies $\dfrac{dB}{dt} = 0.04B - 1500$. The term $0.04B$ is the interest earned per year, and $1500$ dollars per year is withdrawn.`,
    question: String.raw`For what balance $B$ is the balance not changing?`,
    choices: [String.raw`$37{,}500$ dollars`, String.raw`$60$ dollars`, String.raw`$1{,}500$ dollars`, String.raw`$1{,}440$ dollars`],
    why: [
      String.raw`The balance is not changing when $\dfrac{dB}{dt} = 0$: $0.04B - 1500 = 0$, so $B = \dfrac{1500}{0.04} = 37{,}500$ dollars.`,
      String.raw`This is $0.04(1500)$. Solving $0.04B = 1500$ requires dividing $1500$ by $0.04$, not multiplying.`,
      String.raw`At $B = 1500$, $\dfrac{dB}{dt} = 60 - 1500 = -1440$, so the balance is decreasing. The withdrawal rate is not the balance at which the interest equals the withdrawals.`,
      String.raw`This is $1500 - 0.04(1500)$, a mix of the two terms. The balance is constant when the interest $0.04B$ equals the withdrawals $1500$.`,
    ],
    answer: 0 },

  // 7.2 Verifying solutions for differential equations
  { id: "c7r-m04", type: "mcq", skill: "u7", topic: "7.2", calc: false,
    question: String.raw`Which of the following functions is a solution to the differential equation $\dfrac{dy}{dx} = 6 - 2y$?`,
    choices: [String.raw`$y = 3 + 4e^{-2x}$`, String.raw`$y = 3 + 4e^{2x}$`, String.raw`$y = 6 + 4e^{-2x}$`, String.raw`$y = 6 - 4e^{-2x}$`],
    why: [
      String.raw`For $y = 3 + 4e^{-2x}$, $\dfrac{dy}{dx} = -8e^{-2x}$ and $6 - 2y = 6 - 6 - 8e^{-2x} = -8e^{-2x}$. The two sides are equal for all $x$.`,
      String.raw`$\dfrac{dy}{dx} = 8e^{2x}$, but $6 - 2y = -8e^{2x}$. The exponent has the wrong sign.`,
      String.raw`$\dfrac{dy}{dx} = -8e^{-2x}$, but $6 - 2y = -6 - 8e^{-2x}$. The constant term must make $6 - 2y$ equal $0$ when the exponential part is removed, so it is $3$, not $6$.`,
      String.raw`$\dfrac{dy}{dx} = 8e^{-2x}$, but $6 - 2y = -6 + 8e^{-2x}$. The constant term should be $3$, the value of $y$ where $6 - 2y = 0$.`,
    ],
    answer: 0 },
  { id: "c7r-m05", type: "mcq", skill: "u7", topic: "7.2", calc: false,
    question: String.raw`For which of the following values of $k$ is $y = x^{k}$ a solution to the differential equation $x^2y'' - 2xy' - 4y = 0$ for $x > 0$?`,
    choices: ["$4$", "$-4$", "$1$", "$3$"],
    why: [
      String.raw`$y' = kx^{k - 1}$ and $y'' = k(k - 1)x^{k - 2}$, so $x^2y'' - 2xy' - 4y = \left(k^2 - k - 2k - 4\right)x^{k} = (k - 4)(k + 1)x^{k}$. This is $0$ for all $x > 0$ when $k = 4$ or $k = -1$, and $4$ is the only one listed.`,
      String.raw`This reverses the signs of the roots: $(k - 4)(k + 1) = 0$ gives $k = 4$ or $k = -1$, not $k = -4$ or $k = 1$. At $k = -4$, $k^2 - 3k - 4 = 24 \ne 0$.`,
      String.raw`This reverses the signs of the roots: $(k - 4)(k + 1) = 0$ gives $k = 4$ or $k = -1$, not $k = -4$ or $k = 1$. At $k = 1$, $k^2 - 3k - 4 = -6 \ne 0$.`,
      String.raw`This drops the $-4y$ term and solves $k^2 - 3k = 0$. At $k = 3$, $k^2 - 3k - 4 = -4 \ne 0$.`,
    ],
    answer: 0 },
  { id: "c7r-m06", type: "mcq", skill: "u7", topic: "7.2", calc: false,
    question: String.raw`The function $y = e^{3x} + 2e^{-x}$ is a solution to which of the following differential equations?`,
    choices: [String.raw`$y'' - 2y' - 3y = 0$`, String.raw`$y'' + 2y' - 3y = 0$`, String.raw`$y'' - 9y = 0$`, String.raw`$y'' - 2y' + 3y = 0$`],
    why: [
      String.raw`$y' = 3e^{3x} - 2e^{-x}$ and $y'' = 9e^{3x} + 2e^{-x}$. Then $y'' - 2y' - 3y = \left(9 - 6 - 3\right)e^{3x} + \left(2 + 4 - 6\right)e^{-x} = 0$.`,
      String.raw`$y'' + 2y' - 3y = (9 + 6 - 3)e^{3x} + (2 - 4 - 6)e^{-x} = 12e^{3x} - 8e^{-x}$, which is not $0$. This equation fits $e^{-3x}$ and $e^{x}$, the exponents with the opposite signs.`,
      String.raw`This fits the $e^{3x}$ term only. For the $e^{-x}$ term, $y'' - 9y$ gives $(2 - 18)e^{-x} = -16e^{-x}$.`,
      String.raw`$y'' - 2y' + 3y = (9 - 6 + 3)e^{3x} + (2 + 4 + 6)e^{-x}$, which is not $0$. The sign on the $3y$ term is wrong.`,
    ],
    answer: 0 },
  { id: "c7r-m07", type: "mcq", skill: "u7", topic: "7.2", calc: false,
    question: String.raw`Which of the following is NOT a solution to the differential equation $\dfrac{dy}{dx} = \dfrac{2y}{x}$ for $x > 0$?`,
    choices: [String.raw`$y = x^2 + 1$`, String.raw`$y = 0$`, String.raw`$y = 4x^2$`, String.raw`$y = -x^2$`],
    why: [
      String.raw`For $y = x^2 + 1$, $\dfrac{dy}{dx} = 2x$, but $\dfrac{2y}{x} = 2x + \dfrac{2}{x}$. These are not equal, so this function is not a solution.`,
      String.raw`For $y = 0$, both sides are $0$, so the constant function $y = 0$ is a solution.`,
      String.raw`For $y = 4x^2$, $\dfrac{dy}{dx} = 8x$ and $\dfrac{2y}{x} = \dfrac{8x^2}{x} = 8x$, so it is a solution.`,
      String.raw`For $y = -x^2$, $\dfrac{dy}{dx} = -2x$ and $\dfrac{2y}{x} = \dfrac{-2x^2}{x} = -2x$, so it is a solution.`,
    ],
    answer: 0 },

  // 7.3 Sketching slope fields
  { id: "c7r-m08", type: "mcq", skill: "u7", topic: "7.3", calc: false, set: "c7r-s1",
    question: String.raw`The slope field shown is for which of the following differential equations?`,
    choices: [String.raw`$\dfrac{dy}{dx} = 2x + y$`, String.raw`$\dfrac{dy}{dx} = -2x - y$`, String.raw`$\dfrac{dy}{dx} = x + 2y$`, String.raw`$\dfrac{dy}{dx} = 2xy$`],
    why: [
      String.raw`The segments are horizontal at $(0, 0)$, $(1, -2)$ and $(-1, 2)$, which lie on $y = -2x$. At $(0, 1)$ the slope is $1$ and at $(1, 0)$ the slope is $2$. For $2x + y$ these slopes are $0$, $0$, $0$, $1$ and $2$, which match.`,
      String.raw`This equation also has horizontal segments on $y = -2x$, but its slopes have the opposite signs: at $(1, 0)$ it gives $-2$, while the field shows a segment with positive slope there.`,
      String.raw`This equation has slope $0$ on the line $y = -\dfrac{x}{2}$, such as at $(2, -1)$. The field shows a segment of slope $3$ at $(2, -1)$ and horizontal segments at $(1, -2)$ instead.`,
      String.raw`This equation has slope $0$ everywhere on both axes. The field shows nonzero slopes on the axes, such as slope $1$ at $(0, 1)$ and slope $2$ at $(1, 0)$.`,
    ],
    answer: 0 },
  { id: "c7r-m09", type: "mcq", skill: "u7", topic: "7.3", calc: false, set: "c7r-s2",
    question: String.raw`The slope field shown is for which of the following differential equations?`,
    choices: [String.raw`$\dfrac{dy}{dx} = x^2 - 1$`, String.raw`$\dfrac{dy}{dx} = y^2 - 1$`, String.raw`$\dfrac{dy}{dx} = 1 - x^2$`, String.raw`$\dfrac{dy}{dx} = x^2 - y^2$`],
    why: [
      String.raw`Segments in the same column are parallel, so the slope depends only on $x$. The slope is $0$ at $x = \pm 1$, $-1$ at $x = 0$ and $3$ at $x = \pm 2$, which are the values of $x^2 - 1$.`,
      String.raw`If the slope were $y^2 - 1$, segments in the same row would be parallel and the rows $y = \pm 1$ would be horizontal. In the field, the slopes change across each row.`,
      String.raw`This has the right horizontal columns at $x = \pm 1$ but the opposite signs: it gives slope $1$ at $x = 0$, while the field shows slope $-1$ there.`,
      String.raw`This slope depends on $y$ as well as $x$, so it gives slope $0$ at $(0, 0)$ and $-1$ at $(0, 1)$. The field shows slope $-1$ at every point of the column $x = 0$.`,
    ],
    answer: 0 },
  { id: "c7r-m10", type: "mcq", skill: "u7", topic: "7.3", calc: false,
    question: String.raw`In the slope field for the differential equation $\dfrac{dy}{dx} = \dfrac{x^2 - 4}{y + 1}$, at which of the following points is the line segment horizontal?`,
    choices: [String.raw`$(-2, 3)$`, String.raw`$(2, -1)$`, String.raw`$(4, 2)$`, String.raw`$(0, 4)$`],
    why: [
      String.raw`A segment is horizontal where $\dfrac{dy}{dx} = 0$: the numerator $x^2 - 4$ is $0$ and the denominator is not. At $(-2, 3)$, $\dfrac{dy}{dx} = \dfrac{0}{4} = 0$.`,
      String.raw`The numerator is $0$ at $x = 2$, but $y = -1$ makes the denominator $0$, so $\dfrac{dy}{dx}$ is undefined there and no segment is drawn.`,
      String.raw`This solves $x^2 - 4 = 0$ as $x = 4$ instead of $x = \pm 2$. At $(4, 2)$, $\dfrac{dy}{dx} = \dfrac{12}{3} = 4$.`,
      String.raw`At $(0, 4)$, $\dfrac{dy}{dx} = \dfrac{-4}{5}$, which is not $0$. The segment is horizontal only where $x = \pm 2$.`,
    ],
    answer: 0 },
  { id: "c7r-m11", type: "mcq", skill: "u7", topic: "7.3", calc: false,
    question: String.raw`Which of the following describes the slope field for the differential equation $\dfrac{dy}{dx} = 1 + y^2$?`,
    choices: [
      "Every segment has positive slope, and segments in the same row (the same value of y) are parallel.",
      "Every segment has positive slope, and segments in the same column (the same value of x) are parallel.",
      "The segments along the x-axis are horizontal.",
      "The segments below the x-axis have negative slope.",
    ],
    why: [
      String.raw`The slope $1 + y^2$ depends only on $y$, so points with the same $y$ have the same slope. Since $y^2 \ge 0$, the slope is at least $1$ everywhere.`,
      String.raw`Parallel columns would mean the slope depends only on $x$. Here $x$ does not appear, so the slope changes as $y$ changes within a column.`,
      String.raw`On the $x$-axis $y = 0$, so the slope is $1 + 0 = 1$, not $0$.`,
      String.raw`For $y < 0$, $y^2 > 0$, so the slope $1 + y^2$ is still positive. Squaring removes the sign of $y$.`,
    ],
    answer: 0 },

  // 7.4 Reasoning using slope fields
  { id: "c7r-m12", type: "mcq", skill: "u7", topic: "7.4", calc: false, set: "c7r-s3",
    question: String.raw`Let $y = f(x)$ be the solution to the differential equation with $f(0) = 4$. What is $\displaystyle \lim_{x \to \infty} f(x)$?`,
    choices: ["$2$", "$4$", "$0$", String.raw`$-\infty$`],
    why: [
      String.raw`At $(0, 4)$ the slope is $\dfrac{2 - 4}{2} = -1$, so the solution decreases. Above $y = 2$ every slope is negative and the slopes approach $0$ as $y$ approaches $2$. The solution curve follows the field down toward the horizontal row $y = 2$ and never crosses it, because $y = 2$ is itself a solution. So $f(x) \to 2$.`,
      String.raw`$4$ is the starting value $f(0)$. The slope at $(0, 4)$ is $-1$, so the solution does not stay at $4$.`,
      String.raw`To reach $0$ the curve would have to cross the row $y = 2$, where the segments are horizontal and $y = 2$ is a solution. Solution curves cannot cross it.`,
      String.raw`The solution is decreasing, but the slopes flatten out as $y$ approaches $2$, so the curve levels off instead of decreasing without bound.`,
    ],
    answer: 0 },
  { id: "c7r-m13", type: "mcq", skill: "u7", topic: "7.4", calc: false, set: "c7r-s4",
    question: String.raw`Let $y = g(x)$ be the solution to the differential equation with $g(0) = 2$. Which of the following is true?`,
    choices: [
      String.raw`$g$ has a relative maximum at $x = 0$.`,
      String.raw`$g$ has a relative minimum at $x = 0$.`,
      String.raw`$g$ is increasing on its whole domain.`,
      String.raw`The graph of $g$ has a point of inflection at $x = 0$.`,
    ],
    why: [
      String.raw`At $(0, 2)$ the slope is $-\dfrac{0}{2} = 0$. Above the $x$-axis the field has positive slopes for $x < 0$ and negative slopes for $x > 0$, so $g$ increases and then decreases. By the First Derivative Test, $g$ has a relative maximum at $x = 0$. The solution is the upper half of the circle $x^2 + y^2 = 4$.`,
      String.raw`A relative minimum needs the slope to change from negative to positive. Above the $x$-axis the slope changes from positive to negative at $x = 0$.`,
      String.raw`For $0 < x < 2$ and $y > 0$, $\dfrac{dy}{dx} = -\dfrac{x}{y} < 0$, so $g$ is decreasing there.`,
      String.raw`The slope changes sign at $x = 0$, which makes $x = 0$ an extremum. The curve is concave down on both sides of $x = 0$, since it is the upper half of a circle, so there is no change in concavity.`,
    ],
    answer: 0 },
  { id: "c7r-m14", type: "mcq", skill: "u7", topic: "7.4", calc: false,
    question: String.raw`Which of the following constant functions is a solution to the differential equation $\dfrac{dy}{dx} = (2y - 5)\left(x^2 + 1\right)$?`,
    choices: [String.raw`$y = \dfrac{5}{2}$`, String.raw`$y = 5$`, String.raw`$y = -\dfrac{5}{2}$`, String.raw`$y = -1$`],
    why: [
      String.raw`A constant function has derivative $0$, so it is a solution when $(2y - 5)\left(x^2 + 1\right) = 0$ for every $x$. Since $x^2 + 1 > 0$, this requires $2y - 5 = 0$, so $y = \dfrac{5}{2}$. In the slope field, every segment in the row $y = \dfrac{5}{2}$ is horizontal.`,
      String.raw`This solves $2y - 5 = 0$ without dividing by $2$. For $y = 5$, $\dfrac{dy}{dx} = 5\left(x^2 + 1\right)$, which is never $0$.`,
      String.raw`This is a sign error in solving $2y - 5 = 0$. For $y = -\dfrac{5}{2}$, $\dfrac{dy}{dx} = -10\left(x^2 + 1\right)$, which is never $0$.`,
      String.raw`This comes from setting $x^2 + 1 = 0$, which has no real solution, and then using $-1$ as a value of $y$. For $y = -1$, $\dfrac{dy}{dx} = -7\left(x^2 + 1\right) \ne 0$.`,
    ],
    answer: 0 },
  { id: "c7r-m15", type: "mcq", skill: "u7", topic: "7.4", calc: false,
    stem: String.raw`Let $y = f(x)$ be the solution to the differential equation $\dfrac{dy}{dx} = x - y^2$ whose graph passes through the point $(1, 2)$.`,
    question: String.raw`At the point $(1, 2)$, the graph of $f$ is`,
    choices: ["decreasing and concave up", "decreasing and concave down", "increasing and concave up", "increasing and concave down"],
    why: [
      String.raw`$\dfrac{dy}{dx} = 1 - 4 = -3 < 0$, so $f$ is decreasing. By implicit differentiation, $\dfrac{d^2y}{dx^2} = 1 - 2y\dfrac{dy}{dx} = 1 - 2(2)(-3) = 13 > 0$, so the graph is concave up.`,
      String.raw`This uses $\dfrac{d^2y}{dx^2} = 1 - 2y = -3$, which leaves out the factor $\dfrac{dy}{dx}$ from the chain rule on $y^2$.`,
      String.raw`The slope $x - y^2$ at $(1, 2)$ is $1 - 4 = -3$, which is negative. Using $y^2 - x = 3$ reverses the sign.`,
      String.raw`The slope at $(1, 2)$ is $-3$, so $f$ is decreasing, not increasing. Concave down also comes from leaving out $\dfrac{dy}{dx}$ in the chain rule, which gives $-3$ instead of $13$.`,
    ],
    answer: 0 },

  // 7.6 Finding general solutions using separation of variables
  { id: "c7r-m16", type: "mcq", skill: "u7", topic: "7.6", calc: false,
    question: String.raw`Which of the following is the general solution to the differential equation $\dfrac{dy}{dx} = 4xy$?`,
    choices: [String.raw`$y = Ce^{2x^2}$`, String.raw`$y = e^{2x^2} + C$`, String.raw`$y = Ce^{4x^2}$`, String.raw`$y = 2x^2 + C$`],
    why: [
      String.raw`Separating, $\dfrac{dy}{y} = 4x\,dx$, so $\ln|y| = 2x^2 + C_1$. Then $|y| = e^{C_1}e^{2x^2}$, and $y = Ce^{2x^2}$, where $C$ is any constant ($C = 0$ gives the solution $y = 0$).`,
      String.raw`The constant was added after exponentiating. From $\ln|y| = 2x^2 + C_1$, the constant becomes a factor $e^{C_1}$, not a term. Checking: $y' = 4xe^{2x^2}$ but $4xy = 4xe^{2x^2} + 4Cx$.`,
      String.raw`The antiderivative of $4x$ is $2x^2$, not $4x^2$. With $e^{4x^2}$, $y' = 8xy$.`,
      String.raw`This integrates $\dfrac{dy}{y}$ as $y$ instead of $\ln|y|$.`,
    ],
    answer: 0 },
  { id: "c7r-m17", type: "mcq", skill: "u7", topic: "7.6", calc: false,
    question: String.raw`Which of the following is a general solution to the differential equation $\dfrac{dy}{dx} = \dfrac{x^2 + 1}{y^2}$?`,
    choices: [String.raw`$y^3 = x^3 + 3x + C$`, String.raw`$y^3 = \dfrac{x^3}{3} + x + C$`, String.raw`$y = \dfrac{x^3}{3} + x + C$`, String.raw`$-\dfrac{1}{y} = \dfrac{x^3}{3} + x + C$`],
    why: [
      String.raw`Separating, $y^2\,dy = \left(x^2 + 1\right)dx$, so $\dfrac{y^3}{3} = \dfrac{x^3}{3} + x + C_1$. Multiplying by $3$, $y^3 = x^3 + 3x + C$.`,
      String.raw`The left side was integrated as $y^3$ instead of $\dfrac{y^3}{3}$, or only the left side was multiplied by $3$.`,
      String.raw`This integrates the numerator $x^2 + 1$ and ignores the $y^2$ in the denominator. The variables were not separated.`,
      String.raw`This separates as $\dfrac{dy}{y^2}$, which is the equation $\dfrac{dy}{dx} = \left(x^2 + 1\right)y^2$. Here $y^2$ is in the denominator, so it moves to the left as $y^2\,dy$.`,
    ],
    answer: 0 },
  { id: "c7r-m18", type: "mcq", skill: "u7", topic: "7.6", calc: false,
    question: String.raw`Which of the following is the general solution to the differential equation $\dfrac{dy}{dx} = e^{2x + y}$?`,
    choices: [String.raw`$y = -\ln\left(C - \dfrac{1}{2}e^{2x}\right)$`, String.raw`$y = \ln\left(\dfrac{1}{2}e^{2x} + C\right)$`, String.raw`$y = -\ln\left(C - 2e^{2x}\right)$`, String.raw`$y = 2x + C$`],
    why: [
      String.raw`$e^{2x + y} = e^{2x}e^{y}$, so separating gives $e^{-y}\,dy = e^{2x}\,dx$. Then $-e^{-y} = \dfrac{1}{2}e^{2x} + C_1$, so $e^{-y} = C - \dfrac{1}{2}e^{2x}$ and $y = -\ln\left(C - \dfrac{1}{2}e^{2x}\right)$.`,
      String.raw`This separates as $e^{y}\,dy = e^{2x}\,dx$, which is the equation $\dfrac{dy}{dx} = e^{2x - y}$. The factor $e^{y}$ must move to the left as $e^{-y}$.`,
      String.raw`This uses $\displaystyle\int e^{2x}\,dx = 2e^{2x}$. The antiderivative is $\dfrac{1}{2}e^{2x}$, since the chain rule gives a factor of $2$ when differentiating.`,
      String.raw`This takes $\ln$ of both sides of $\dfrac{dy}{dx} = e^{2x + y}$ as if it were $y = e^{2x + y}$. For $y = 2x + C$, $y' = 2$, while $e^{2x + y} = e^{4x + C}$ is not constant.`,
    ],
    answer: 0 },
  { id: "c7r-m19", type: "mcq", skill: "u7", topic: "7.6", calc: false,
    question: String.raw`Which of the following is a correct separation of variables for the differential equation $\dfrac{dy}{dx} = \dfrac{xy^2}{1 + x^2}$?`,
    choices: [String.raw`$\dfrac{1}{y^2}\,dy = \dfrac{x}{1 + x^2}\,dx$`, String.raw`$y^2\,dy = \dfrac{x}{1 + x^2}\,dx$`, String.raw`$\dfrac{1}{y^2}\,dy = \dfrac{1 + x^2}{x}\,dx$`, String.raw`$y^2\,dy = \dfrac{1 + x^2}{x}\,dx$`],
    why: [
      String.raw`Divide both sides by $y^2$ and multiply by $dx$: $\dfrac{1}{y^2}\,dy = \dfrac{x}{1 + x^2}\,dx$. All the $y$ terms are with $dy$ and all the $x$ terms are with $dx$.`,
      String.raw`$y^2$ was moved to the left by multiplying instead of dividing. Undoing this gives $\dfrac{dy}{dx} = \dfrac{x}{y^2\left(1 + x^2\right)}$.`,
      String.raw`The $x$ part was inverted. Undoing this gives $\dfrac{dy}{dx} = \dfrac{y^2\left(1 + x^2\right)}{x}$.`,
      String.raw`Both parts were inverted. Undoing this gives $\dfrac{dy}{dx} = \dfrac{1 + x^2}{xy^2}$, the reciprocal of the given rate.`,
    ],
    answer: 0 },

  // 7.7 Finding particular solutions using initial conditions and separation of variables
  { id: "c7r-m20", type: "mcq", skill: "u7", topic: "7.7", calc: false,
    question: String.raw`Let $y = f(x)$ be the solution to the differential equation $\dfrac{dy}{dx} = \dfrac{4x}{3y^2}$ with $f(1) = 2$. Which of the following is $f(x)$?`,
    choices: [String.raw`$\sqrt[3]{2x^2 + 6}$`, String.raw`$\sqrt[3]{2x^2 + 8}$`, String.raw`$\sqrt[3]{4x^2 + 4}$`, String.raw`$\sqrt[3]{6x^2 + 2}$`],
    why: [
      String.raw`Separating, $3y^2\,dy = 4x\,dx$, so $y^3 = 2x^2 + C$. With $f(1) = 2$, $8 = 2 + C$ and $C = 6$. Then $f(x) = \sqrt[3]{2x^2 + 6}$.`,
      String.raw`This uses $C = y^3 = 8$ and forgets the $2x^2$ term when substituting $x = 1$. Then $f(1) = \sqrt[3]{10} \ne 2$.`,
      String.raw`This uses $\displaystyle\int 4x\,dx = 4x^2$. The antiderivative of $4x$ is $2x^2$.`,
      String.raw`The factor $3$ was dropped: $y^2\,dy = 4x\,dx$ gives $\dfrac{y^3}{3} = 2x^2 + C$ and $y^3 = 6x^2 + 2$. The correct separation is $3y^2\,dy = 4x\,dx$.`,
    ],
    answer: 0 },
  { id: "c7r-m21", type: "mcq", skill: "u7", topic: "7.7", calc: false,
    question: String.raw`Let $y = f(x)$ be the solution to the differential equation $\dfrac{dy}{dx} = 2x(y + 1)$ with $f(0) = 2$. What is $f(1)$?`,
    choices: [String.raw`$3e - 1$`, String.raw`$2e$`, String.raw`$3e$`, String.raw`$e + 1$`],
    why: [
      String.raw`Separating, $\dfrac{dy}{y + 1} = 2x\,dx$, so $\ln|y + 1| = x^2 + C$ and $y + 1 = Ae^{x^2}$. With $f(0) = 2$, $A = 3$, so $f(x) = 3e^{x^2} - 1$ and $f(1) = 3e - 1$.`,
      String.raw`This solves $\dfrac{dy}{dx} = 2xy$ and ignores the $+1$, giving $y = 2e^{x^2}$.`,
      String.raw`This finds $y + 1 = 3e^{x^2}$ correctly but gives $f(1) + 1 = 3e$ as the answer, without subtracting $1$.`,
      String.raw`The constant was added after exponentiating: $y + 1 = e^{x^2} + C$ with $3 = 1 + C$. The constant must be a factor, $y + 1 = Ae^{x^2}$.`,
    ],
    answer: 0 },
  { id: "c7r-m22", type: "mcq", skill: "u7", topic: "7.7", calc: true,
    question: String.raw`Let $y = f(x)$ be the solution to the differential equation $\dfrac{dy}{dx} = \dfrac{y^2}{x + 1}$ with $f(0) = 1$. What is $f(0.5)$?`,
    choices: ["$1.682$", "$0.712$", "$1.500$", "$1.304$"],
    why: [
      String.raw`Separating, $\dfrac{dy}{y^2} = \dfrac{dx}{x + 1}$, so $-\dfrac{1}{y} = \ln(x + 1) + C$. With $f(0) = 1$, $C = -1$, so $f(x) = \dfrac{1}{1 - \ln(x + 1)}$ and $f(0.5) = \dfrac{1}{1 - \ln 1.5} = 1.682$.`,
      String.raw`The antiderivative of $y^{-2}$ was written as $\dfrac{1}{y}$ instead of $-\dfrac{1}{y}$. That gives $f(x) = \dfrac{1}{1 + \ln(x + 1)}$ and $0.712$.`,
      String.raw`This is the tangent line approximation $1 + 1(0.5)$. The question asks for the value of the solution, which comes from solving the differential equation.`,
      String.raw`This integrates $y^2\,dy$, as if $y^2$ were on the left without dividing: $\dfrac{y^3}{3} = \ln(x + 1) + \dfrac{1}{3}$ gives $1.304$.`,
    ],
    answer: 0 },
  { id: "c7r-m23", type: "mcq", skill: "u7", topic: "7.7", calc: false,
    question: String.raw`Let $y = f(x)$ be the solution to the differential equation $\dfrac{dy}{dx} = \dfrac{4x^3}{y}$ with $f(1) = -3$. Which of the following is $f(x)$?`,
    choices: [String.raw`$-\sqrt{2x^4 + 7}$`, String.raw`$\sqrt{2x^4 + 7}$`, String.raw`$-\sqrt{x^4 + 8}$`, String.raw`$-\sqrt{2x^4 + 9}$`],
    why: [
      String.raw`Separating, $y\,dy = 4x^3\,dx$, so $\dfrac{y^2}{2} = x^4 + C$ and $y^2 = 2x^4 + C_1$. With $f(1) = -3$, $9 = 2 + C_1$, so $C_1 = 7$. Since $f(1) < 0$, take the negative root: $f(x) = -\sqrt{2x^4 + 7}$.`,
      String.raw`This takes the positive root, so $f(1) = 3$. The initial condition $f(1) = -3$ requires the negative root.`,
      String.raw`The factor $\dfrac{1}{2}$ from $\displaystyle\int y\,dy = \dfrac{y^2}{2}$ was dropped, giving $y^2 = x^4 + C$ with $C = 8$.`,
      String.raw`This uses $C_1 = 9$, the value of $y^2$, without subtracting $2x^4 = 2$ at $x = 1$. Then $f(1) = -\sqrt{11} \ne -3$.`,
    ],
    answer: 0 },

  // 7.8 Exponential models with differential equations
  { id: "c7r-m24", type: "mcq", skill: "u7", topic: "7.8", calc: false,
    stem: String.raw`A quantity $y$ satisfies $\dfrac{dy}{dt} = ky$, where $k$ is a constant and $t$ is measured in years. After $6$ years, $y$ is one third of its value at $t = 0$.`,
    question: String.raw`What is the value of $k$?`,
    choices: [String.raw`$-\dfrac{\ln 3}{6}$`, String.raw`$\dfrac{\ln 3}{6}$`, String.raw`$-\dfrac{1}{9}$`, String.raw`$-\dfrac{\ln 6}{3}$`],
    why: [
      String.raw`The solution is $y = y_0e^{kt}$. Then $\dfrac{1}{3}y_0 = y_0e^{6k}$, so $6k = \ln\dfrac{1}{3} = -\ln 3$ and $k = -\dfrac{\ln 3}{6}$.`,
      String.raw`This has the wrong sign. The quantity decreases, so $k < 0$: $\ln\dfrac{1}{3} = -\ln 3$.`,
      String.raw`This assumes the quantity loses two thirds of its starting value at a constant rate over $6$ years, a linear model: $-\dfrac{2/3}{6}$. Solving $e^{6k} = \dfrac{1}{3}$ needs a logarithm.`,
      String.raw`The roles of $3$ and $6$ were switched. Solving $e^{6k} = \dfrac{1}{3}$ puts $\ln 3$ in the numerator and $6$ in the denominator.`,
    ],
    answer: 0 },
  { id: "c7r-m25", type: "mcq", skill: "u7", topic: "7.8", calc: true,
    stem: String.raw`The population $P$ of a town grows at a rate proportional to its size. The population was $800$ at time $t = 0$ and $1100$ at time $t = 3$ years.`,
    question: String.raw`What is the population at time $t = 10$ years?`,
    choices: ["$2312.592$", "$1800.000$", "$2792.274$", "$3179.814$"],
    why: [
      String.raw`$\dfrac{dP}{dt} = kP$ gives $P = 800e^{kt}$. From $1100 = 800e^{3k}$, $k = \dfrac{1}{3}\ln\left(\dfrac{11}{8}\right) = 0.10615$. Then $P(10) = 800e^{10k} = 2312.592$.`,
      String.raw`This assumes the population grows by the same $100$ people each year, a linear model. Growth proportional to size is exponential.`,
      String.raw`This uses the average rate $\dfrac{300}{800 \cdot 3} = 0.125$ as $k$. The value of $k$ comes from solving $e^{3k} = \dfrac{11}{8}$.`,
      String.raw`This uses $1100$ as the starting population at $t = 0$, so it gives the population $10$ years after $t = 3$.`,
    ],
    answer: 0 },
  { id: "c7r-m26", type: "mcq", skill: "u7", topic: "7.8", calc: true,
    stem: String.raw`A hot metal rod is dropped into a large tank of water. The temperature $T$ of the rod, in degrees Celsius, $t$ minutes later satisfies $\dfrac{dT}{dt} = -0.12(T - 15)$, and $T(0) = 95$.`,
    question: String.raw`What is the temperature of the rod at time $t = 4$ minutes?`,
    choices: ["$64.503$", "$58.784$", "$144.286$", "$56.600$"],
    why: [
      String.raw`Separating, $\dfrac{dT}{T - 15} = -0.12\,dt$, so $T - 15 = Ae^{-0.12t}$. With $T(0) = 95$, $A = 80$, so $T(t) = 15 + 80e^{-0.12t}$ and $T(4) = 15 + 80e^{-0.48} = 64.503$.`,
      String.raw`This is $95e^{-0.48}$, the solution of $\dfrac{dT}{dt} = -0.12T$. It ignores the water temperature of $15$ in the model.`,
      String.raw`This uses $e^{0.48}$ instead of $e^{-0.48}$, a sign error that makes the rod heat up.`,
      String.raw`This is the tangent line approximation $95 + (-9.6)(4)$ from the rate at $t = 0$. The rate of cooling slows as the rod cools, so the line underestimates the temperature.`,
    ],
    answer: 0 },
  { id: "c7r-m27", type: "mcq", skill: "u7", topic: "7.8", calc: false,
    stem: String.raw`A colony of bees grows at a rate proportional to its size. When the colony has $3000$ bees, it is growing at a rate of $240$ bees per week.`,
    question: String.raw`At what rate is the colony growing when it has $4500$ bees?`,
    choices: [String.raw`$360$ bees per week`, String.raw`$240$ bees per week`, String.raw`$160$ bees per week`, String.raw`$540$ bees per week`],
    why: [
      String.raw`$\dfrac{dP}{dt} = kP$, so $240 = k(3000)$ and $k = 0.08$. When $P = 4500$, $\dfrac{dP}{dt} = 0.08(4500) = 360$ bees per week.`,
      String.raw`This treats the growth rate as constant. In this model the rate grows with the size of the colony.`,
      String.raw`This makes the rate inversely proportional to the size: $240 \cdot \dfrac{3000}{4500}$. A larger colony grows faster, not slower.`,
      String.raw`This makes the rate proportional to the square of the size: $240\left(\dfrac{4500}{3000}\right)^2$.`,
    ],
    answer: 0 },
  { id: "c7r-m28", type: "mcq", skill: "u7", topic: "7.8", calc: true,
    question: String.raw`A quantity $y$ satisfies $\dfrac{dy}{dt} = 0.35y$ with $y(0) = 2$. At what time $t$ is $y = 10$?`,
    choices: ["$4.598$", "$6.579$", "$11.429$", "$0.563$"],
    why: [
      String.raw`The solution is $y = 2e^{0.35t}$. Setting $2e^{0.35t} = 10$ gives $e^{0.35t} = 5$, so $t = \dfrac{\ln 5}{0.35} = 4.598$.`,
      String.raw`This solves $e^{0.35t} = 10$ and leaves out the initial value $2$.`,
      String.raw`This assumes $y$ grows at its starting rate $0.35(2) = 0.7$ forever: $\dfrac{10 - 2}{0.7}$. The rate grows as $y$ grows.`,
      String.raw`This multiplies $\ln 5$ by $0.35$ instead of dividing by it.`,
    ],
    answer: 0 },

  // Free response 1: a particular solution (no calculator)
  { id: "c7r-f1a", type: "frq", skill: "u7", topic: "7.4", calc: false, set: "c7r-s5", part: "(a)",
    prompt: String.raw`Write an equation for the line tangent to the graph of $y = f(x)$ at $x = 0$. Use it to approximate $f(0.4)$.`,
    rows: [
      { name: "Tangent line", earns: String.raw`$\left.\dfrac{dy}{dx}\right|_{\left(0, \frac{1}{2}\right)} = \dfrac{1}{4}$, so $y = \dfrac{1}{2} + \dfrac{1}{4}x$.` },
      { name: "Approximation", earns: String.raw`$f(0.4) \approx 0.6$` },
    ],
    solution: String.raw`At $\left(0, \dfrac{1}{2}\right)$, $\dfrac{dy}{dx} = e^{0}\left(\dfrac{1}{2}\right)^2 = \dfrac{1}{4}$. The tangent line is $y = \dfrac{1}{2} + \dfrac{1}{4}(x - 0)$.

$f(0.4) \approx \dfrac{1}{2} + \dfrac{1}{4}(0.4) = 0.6$.` },
  { id: "c7r-f1b", type: "frq", skill: "u7", topic: "7.6", calc: false, set: "c7r-s5", part: "(b)",
    prompt: String.raw`Use separation of variables to find the general solution to the differential equation for $y \ne 0$. Write your answer in a form that includes a constant of integration.`,
    rows: [
      { name: "Separation of variables", earns: String.raw`$\dfrac{1}{y^2}\,dy = e^{x}\,dx$. A response with no separation of variables earns no points in parts (b) and (c).` },
      { name: "Antiderivatives", earns: String.raw`$-\dfrac{1}{y} = e^{x}$ (each side antidifferentiated correctly)` },
      { name: "Constant of integration", earns: String.raw`$-\dfrac{1}{y} = e^{x} + C$. A response without a constant of integration earns only the first two points of this part and no points in part (c).` },
    ],
    solution: String.raw`Separate the variables: $\dfrac{1}{y^2}\,dy = e^{x}\,dx$.

Antidifferentiate each side: $\displaystyle\int y^{-2}\,dy = \int e^{x}\,dx$, so
$$-\dfrac{1}{y} = e^{x} + C.$$

Solving for $y$, the general solution is $y = -\dfrac{1}{e^{x} + C}$, where $C$ is a constant.` },
  { id: "c7r-f1c", type: "frq", skill: "u7", topic: "7.7", calc: false, set: "c7r-s5", part: "(c)",
    prompt: String.raw`Find $y = f(x)$, the particular solution with $f(0) = \dfrac{1}{2}$.`,
    rows: [
      { name: "Initial condition", earns: String.raw`Substitutes $x = 0$, $y = \dfrac{1}{2}$ into the general solution: $-2 = 1 + C$, so $C = -3$.` },
      { name: "Solves for y", earns: String.raw`$f(x) = \dfrac{1}{3 - e^{x}}$` },
    ],
    solution: String.raw`From part (b), $-\dfrac{1}{y} = e^{x} + C$. With $f(0) = \dfrac{1}{2}$, $-2 = e^{0} + C = 1 + C$, so $C = -3$.

Then $-\dfrac{1}{y} = e^{x} - 3$, so $\dfrac{1}{y} = 3 - e^{x}$ and
$$f(x) = \dfrac{1}{3 - e^{x}}.$$

This solution passes through $\left(0, \dfrac{1}{2}\right)$ and is defined for $x < \ln 3$.` },

  // Free response 2: a slope field and a line (no calculator)
  { id: "c7r-f2a", type: "frq", skill: "u7", topic: "7.2", calc: false, set: "c7r-s6", part: "(a)",
    prompt: String.raw`Show that $y = 3x - 2$ is a solution to the differential equation.`,
    rows: [
      { name: "Derivative", earns: String.raw`For $y = 3x - 2$, $\dfrac{dy}{dx} = 3$.` },
      { name: "Verification", earns: String.raw`$3x - y + 1 = 3x - (3x - 2) + 1 = 3$, which equals $\dfrac{dy}{dx}$ for all $x$.` },
    ],
    solution: String.raw`If $y = 3x - 2$, then $\dfrac{dy}{dx} = 3$.

Substituting into the right side, $3x - y + 1 = 3x - (3x - 2) + 1 = 3$.

Both sides equal $3$ for every $x$, so $y = 3x - 2$ is a solution. In the slope field, the segments at $(0, -2)$, $(1, 1)$ and $(2, 4)$ all have slope $3$ and lie along this line.` },
  { id: "c7r-f2b", type: "frq", skill: "u7", topic: "7.4", calc: false, set: "c7r-s6", part: "(b)",
    prompt: String.raw`Find $\dfrac{d^2y}{dx^2}$ in terms of $x$ and $y$. Is the solution curve that passes through the point $(2, 1)$ concave up or concave down at that point? Give a reason for your answer.`,
    rows: [
      { name: "Second derivative", earns: String.raw`$\dfrac{d^2y}{dx^2} = 3 - \dfrac{dy}{dx} = y - 3x + 2$` },
      { name: "Concavity with reason", earns: String.raw`Concave down, because $\left.\dfrac{d^2y}{dx^2}\right|_{(2, 1)} = -3 < 0$.` },
    ],
    solution: String.raw`Differentiating $\dfrac{dy}{dx} = 3x - y + 1$ with respect to $x$,
$$\dfrac{d^2y}{dx^2} = 3 - \dfrac{dy}{dx} = 3 - (3x - y + 1) = y - 3x + 2.$$

At $(2, 1)$, $\dfrac{d^2y}{dx^2} = 1 - 6 + 2 = -3 < 0$, so the solution curve is concave down at $(2, 1)$.` },
  { id: "c7r-f2c", type: "frq", skill: "u7", topic: "7.4", calc: false, set: "c7r-s6", part: "(c)",
    prompt: String.raw`Let $y = h(x)$ be the solution to the differential equation with $h(0) = 1$. Does $h$ have a relative minimum, a relative maximum, or neither at $x = 0$? Justify your answer.`,
    rows: [
      { name: "Critical point", earns: String.raw`$h'(0) = 3(0) - 1 + 1 = 0$` },
      { name: "Answer with justification", earns: String.raw`Relative minimum, by the Second Derivative Test, because $h'(0) = 0$ and $h''(0) = 1 - 0 + 2 = 3 > 0$.` },
    ],
    solution: String.raw`At $(0, 1)$, $h'(0) = \dfrac{dy}{dx} = 3(0) - 1 + 1 = 0$, so $x = 0$ is a critical point of $h$.

From part (b), $h''(0) = \dfrac{d^2y}{dx^2} = 1 - 3(0) + 2 = 3 > 0$.

Since $h'(0) = 0$ and $h''(0) > 0$, the Second Derivative Test shows that $h$ has a relative minimum at $x = 0$.` },

  // Free response 3: subscribers to a channel (calculator)
  { id: "c7r-f3a", type: "frq", skill: "u7", topic: "7.1", calc: true, set: "c7r-s7", part: "(a)",
    prompt: String.raw`Write a differential equation that models this situation. Define any constant you use.`,
    rows: [
      { name: "Differential equation", earns: String.raw`$\dfrac{dN}{dt} = kN$, where $k$ is a constant of proportionality.` },
    ],
    solution: String.raw`The rate of change of the number of subscribers is $\dfrac{dN}{dt}$, and it is proportional to $N$:
$$\dfrac{dN}{dt} = kN,$$
where $k$ is a constant. Since the number of subscribers increases, $k > 0$.` },
  { id: "c7r-f3b", type: "frq", skill: "u7", topic: "7.8", calc: true, set: "c7r-s7", part: "(b)",
    prompt: String.raw`Use separation of variables to find $N(t)$, and find the value of $k$.`,
    rows: [
      { name: "Separation and antiderivatives", earns: String.raw`$\dfrac{dN}{N} = k\,dt$, so $\ln N = kt + C$.` },
      { name: "Uses initial condition", earns: String.raw`$N(t) = 1200e^{kt}$` },
      { name: "Value of k", earns: String.raw`$1800 = 1200e^{4k}$, so $k = \dfrac{1}{4}\ln 1.5 = 0.101$.` },
    ],
    solution: String.raw`Separating, $\dfrac{dN}{N} = k\,dt$. Antidifferentiating, $\ln N = kt + C$ (with $N > 0$), so $N = e^{C}e^{kt}$.

With $N(0) = 1200$, $e^{C} = 1200$, so $N(t) = 1200e^{kt}$.

With $N(4) = 1800$, $e^{4k} = 1.5$, so $k = \dfrac{\ln 1.5}{4} = 0.101$ (more precisely $0.10136628$).` },
  { id: "c7r-f3c", type: "frq", skill: "u7", topic: "7.8", calc: true, set: "c7r-s7", part: "(c)",
    prompt: String.raw`At what time $t$ does the channel have $5000$ subscribers? How fast is the number of subscribers increasing at that time? Indicate units of measure.`,
    rows: [
      { name: "Time", earns: String.raw`$1200e^{kt} = 5000$ gives $t = 14.079$ months.` },
      { name: "Rate with units", earns: String.raw`$\dfrac{dN}{dt} = k(5000) = 506.831$ subscribers per month.` },
    ],
    solution: String.raw`Solve $1200e^{kt} = 5000$: $t = \dfrac{\ln\left(\dfrac{5000}{1200}\right)}{k} = \dfrac{4\ln\left(\dfrac{25}{6}\right)}{\ln 1.5} = 14.079$ months.

At that time, $\dfrac{dN}{dt} = kN = (0.10136628)(5000) = 506.831$ subscribers per month.` },
];

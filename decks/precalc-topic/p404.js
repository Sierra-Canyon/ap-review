// AP Precalculus topic quiz 4.4 (Unit 4 is taught but not on the AP exam). Keys and every number are computed in the
// writer's scratch scripts.
import { graph } from "../../plot.js";

export const sets = {
  "p404-s1": {
    name: "Half of a circle",
    label: "Graph",
    intro: String.raw`The graph below is the right half of the circle with center $(0, 1)$ and radius $3$. A particle traces it once, starting at $(0, -2)$ and ending at $(0, 4)$.`,
    sources: [{ title: "", blocks: [{ svg: graph({
      x: [-4, 4], y: [-3, 5], step: 1, xname: "x", yname: "y",
      fns: [{ f: (x) => 1 + Math.sqrt(Math.max(0, 9 - x * x)), from: 0, to: 3 }, { f: (x) => 1 - Math.sqrt(Math.max(0, 9 - x * x)), from: 0, to: 3 }],
      dots: [[0, -2, "closed"], [0, 4, "closed"], [3, 1, "closed"], [0, 1, "open"]],
      labels: [[0.15, -2.6, "start (0, −2)"], [0.15, 4.25, "end (0, 4)"], [3.05, 1.25, "(3, 1)"]],
      alt: "The right half of a circle centered at (0, 1) with radius 3. The arc starts at (0, -2) at the bottom, labeled start, passes through its rightmost point (3, 1), and ends at (0, 4) at the top, labeled end. The center (0, 1) is marked with an open dot.",
    }) }] }],
  },
  "p404-s2": {
    name: "A particle on a line",
    label: "Free response",
    intro: String.raw`A particle moves along a straight line at a constant rate in each coordinate. At time $t = 0$ it is at $(-4, 2)$, and at time $t = 3$ it is at $(2, 5)$.`,
    sources: [{ title: "", blocks: [{ p: String.raw`No calculator is allowed on this question. Show the work that leads to your answers.` }] }],
  },
};

export default {
  forms: [{
    id: "p404",
    name: "Topic 4.4 Quiz: Parametrically Defined Circles and Lines",
    group: "Unit 4: Functions Involving Parameters, Vectors, and Matrices",
    items: [
      { id: "p404-m01", type: "mcq", skill: "u4", topic: "4.4", calc: false, difficulty: "easy",
        question: String.raw`A particle moves around the unit circle so that its position at time $t$ is $(\cos t, \sin t)$. For $\dfrac{3\pi}{2} < t < 2\pi$, in which directions is the particle moving?`,
        choices: ["Right and up", "Right and down", "Left and up", "Left and down"],
        why: [
          String.raw`On $\dfrac{3\pi}{2} < t < 2\pi$, $\cos t$ increases from $0$ to $1$, so the particle moves right, and $\sin t$ increases from $-1$ to $0$, so it moves up.`,
          String.raw`The particle is below the $x$-axis, so $\sin t$ is negative, but $\sin t$ is increasing toward $0$. A negative coordinate does not mean the particle moves down.`,
          String.raw`The particle does move up, but $\cos t$ increases from $0$ to $1$ here, so the particle moves right, not left.`,
          String.raw`These are the directions for $\dfrac{\pi}{2} < t < \pi$, where $\cos t$ and $\sin t$ both decrease.`,
        ], answer: 0 },
      { id: "p404-m02", type: "mcq", skill: "u4", topic: "4.4", calc: false, difficulty: "easy",
        question: String.raw`Which describes the graph of the parametric function $\left(2 + 5\cos t,\ -3 + 5\sin t\right)$ for $0 \le t \le 2\pi$?`,
        choices: ["A circle with center $(2, -3)$ and radius $5$", "A circle with center $(-2, 3)$ and radius $5$", "A circle with center $(2, -3)$ and radius $25$", String.raw`A circle with center $(2, -3)$ and radius $\sqrt{5}$`],
        why: [
          String.raw`$(x - 2)^2 + (y + 3)^2 = 25\cos^2 t + 25\sin^2 t = 25$, a circle with center $(2, -3)$ and radius $5$.`,
          String.raw`This uses the opposite signs, as if reading $(x - h)$ from an equation. In the parametric form, the center is the pair of constants added, $(2, -3)$.`,
          String.raw`$25$ is the square of the radius, the number on the right side of $(x - 2)^2 + (y + 3)^2 = 25$.`,
          String.raw`The coefficient $5$ is the radius itself. A radius of $\sqrt{5}$ would need the coefficient $\sqrt{5}$.`,
        ], answer: 0 },
      { id: "p404-m03", type: "mcq", skill: "u4", topic: "4.4", calc: false, difficulty: "difficult", set: "p404-s1",
        question: String.raw`Which parametric function, for $0 \le t \le \pi$, traces the arc shown, starting at $(0, -2)$ and ending at $(0, 4)$?`,
        choices: [String.raw`$\left(3\sin t,\ 1 - 3\cos t\right)$`, String.raw`$\left(3\cos t,\ 1 + 3\sin t\right)$`, String.raw`$\left(-3\sin t,\ 1 - 3\cos t\right)$`, String.raw`$\left(3\sin t,\ 1 + 3\cos t\right)$`],
        why: [
          String.raw`At $t = 0$: $(0, 1 - 3) = (0, -2)$. At $t = \dfrac{\pi}{2}$: $(3, 1)$. At $t = \pi$: $(0, 1 + 3) = (0, 4)$. Since $3\sin t \ge 0$ on $[0, \pi]$, every point is on the right half.`,
          String.raw`This starts at $(3, 1)$ and ends at $(-3, 1)$, which traces the upper half of the circle.`,
          String.raw`Here $x = -3\sin t \le 0$, so it passes through $(-3, 1)$ and traces the left half.`,
          String.raw`This traces the right half, but it starts at $(0, 4)$ and ends at $(0, -2)$, the opposite direction.`,
        ], answer: 0 },
      { id: "p404-m04", type: "mcq", skill: "u4", topic: "4.4", calc: false, difficulty: "moderate",
        question: String.raw`A particle moves along a line at a constant rate in each coordinate. It is at $(2, -1)$ at time $t = 0$ and at $(8, 11)$ at time $t = 3$. Where is it at time $t = 5$?`,
        choices: ["$(12, 19)$", "$(32, 59)$", "$(18, 31)$", "$(22, 9)$"],
        why: [
          String.raw`In $3$ units of time, $x$ changes by $6$ and $y$ by $12$, so the rates are $2$ and $4$. The position is $(2 + 2t, -1 + 4t)$, and at $t = 5$ it is $(12, 19)$.`,
          String.raw`This uses the changes $6$ and $12$ as rates per unit of time. They happen over $3$ units of time, so divide by $3$.`,
          String.raw`This starts from $(8, 11)$ at $t = 0$. That is the position at $t = 3$, so only $2$ more units of time pass after it.`,
          String.raw`This swaps the rates: $x$ changes by $2$ per unit of time and $y$ by $4$, not the other way around.`,
        ], answer: 0 },
      { id: "p404-m05", type: "mcq", skill: "u4", topic: "4.4", calc: true, difficulty: "easy",
        question: String.raw`A particle moves around the circle of radius $4$ centered at the origin so that its position at time $t$ is $\left(4\cos t,\ 4\sin t\right)$. What is its position at $t = 2$?`,
        choices: [String.raw`$(-1.665,\ 3.637)$`, String.raw`$(3.998,\ 0.140)$`, String.raw`$(3.637,\ -1.665)$`, String.raw`$(-0.416,\ 0.909)$`],
        why: [
          String.raw`In radian mode, $4\cos 2 \approx -1.665$ and $4\sin 2 \approx 3.637$.`,
          String.raw`These values come from degree mode: $4\cos 2^\circ$ and $4\sin 2^\circ$. The parameter $t$ is in radians.`,
          String.raw`This puts $4\sin 2$ first and $4\cos 2$ second. The $x$-coordinate is $4\cos t$.`,
          String.raw`These are $\cos 2$ and $\sin 2$, the point on the unit circle. Multiply both by the radius, $4$.`,
        ], answer: 0 },
      { id: "p404-m06", type: "mcq", skill: "u4", topic: "4.4", calc: false, difficulty: "moderate",
        question: String.raw`How does the graph of $\left(3\cos\left(t + \dfrac{\pi}{2}\right),\ 3\sin\left(t + \dfrac{\pi}{2}\right)\right)$ for $0 \le t \le 2\pi$ compare with the graph of $\left(3\cos t,\ 3\sin t\right)$ for $0 \le t \le 2\pi$?`,
        choices: [String.raw`The same circle, starting at $(0, 3)$`, String.raw`The circle moved left $\frac{\pi}{2}$ units`, String.raw`The same circle, starting at $(0, -3)$`, "The same circle, traced clockwise"],
        why: [
          String.raw`Adding $\dfrac{\pi}{2}$ to $t$ does not change $x^2 + y^2 = 9$, so the graph is the same circle. At $t = 0$ the point is $\left(3\cos\tfrac{\pi}{2}, 3\sin\tfrac{\pi}{2}\right) = (0, 3)$, and the circle is still traced counterclockwise.`,
          String.raw`The shift is inside the parameter, not added to $x$. Moving the circle needs a constant added to $3\cos t$ or $3\sin t$.`,
          String.raw`$(0, -3)$ comes from $t - \dfrac{\pi}{2}$. At $t = 0$ this function gives $\sin\dfrac{\pi}{2} = 1$, so $y = 3$.`,
          String.raw`As $t$ increases, $t + \dfrac{\pi}{2}$ increases too, so the particle still goes counterclockwise.`,
        ], answer: 0 },
      { id: "p404-f1a", type: "frq", skill: "u4", topic: "4.4", calc: false, set: "p404-s2", part: "(a)",
        prompt: String.raw`Write parametric functions $x(t)$ and $y(t)$ for the position of the particle.`,
        rows: [{ name: "Functions", earns: String.raw`$x(t) = -4 + 2t$ and $y(t) = 2 + t$.` }],
        solution: String.raw`In $3$ units of time, $x$ changes by $2 - (-4) = 6$ and $y$ changes by $5 - 2 = 3$, so $x$ changes at $2$ units per unit of time and $y$ at $1$. Starting from $(-4, 2)$: $x(t) = -4 + 2t$ and $y(t) = 2 + t$.` },
      { id: "p404-f1b", type: "frq", skill: "u4", topic: "4.4", calc: false, set: "p404-s2", part: "(b)",
        prompt: String.raw`At what point does the particle cross the $y$-axis?`,
        rows: [{ name: "Point", earns: String.raw`$(0, 4)$, from $x(t) = 0$ at $t = 2$.` }],
        solution: String.raw`The particle is on the $y$-axis when $-4 + 2t = 0$, so $t = 2$. Then $y(2) = 4$, and the point is $(0, 4)$.` },
      { id: "p404-f1c", type: "frq", skill: "u4", topic: "4.4", calc: false, set: "p404-s2", part: "(c)",
        prompt: String.raw`A second particle moves counterclockwise around the circle of radius $2$ whose center is the first particle's position at $t = 3$. It starts at the rightmost point of the circle at $t = 0$ and completes one revolution as $t$ increases from $0$ to $2\pi$. Write parametric functions for the position of the second particle.`,
        rows: [{ name: "Functions", earns: String.raw`$x(t) = 2 + 2\cos t$ and $y(t) = 5 + 2\sin t$, for $0 \le t \le 2\pi$.` }],
        solution: String.raw`The center is $(2, 5)$ and the radius is $2$. The rightmost point is $(4, 5)$, which is where $\cos t = 1$ and $\sin t = 0$, at $t = 0$. As $t$ increases, $(\cos t, \sin t)$ goes counterclockwise, so $x(t) = 2 + 2\cos t$ and $y(t) = 5 + 2\sin t$ for $0 \le t \le 2\pi$.` },
    ],
  }],
};

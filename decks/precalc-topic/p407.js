// AP Precalculus topic quiz 4.7 (Unit 4 is taught but not on the AP exam). Keys and every number are computed in the
// writer's scratch scripts.

export const sets = {
  "p407-s1": {
    name: "An ellipse in general form",
    label: "Free response",
    intro: String.raw`The curve $E$ is the graph of the equation $4x^2 + y^2 - 16x + 6y + 9 = 0$. A particle moves along $E$ counterclockwise. At time $t = 0$ it is at the rightmost point of $E$, and it goes around $E$ once as $t$ increases from $0$ to $2\pi$.`,
    sources: [{ title: "", blocks: [{ p: String.raw`No calculator is allowed on this question. Show the work that leads to your answers.` }] }],
  },
};

export default {
  forms: [{
    id: "p407",
    name: "Topic 4.7 Quiz: Parametrization of Implicitly Defined Functions",
    group: "Unit 4: Functions Involving Parameters, Vectors, and Matrices",
    items: [
      { id: "p407-m01", type: "mcq", skill: "u4", topic: "4.7", calc: false, difficulty: "easy",
        question: String.raw`Which equation has the same graph as the parametric function $\left(3 + 2\sec t,\ -1 + 5\tan t\right)$?`,
        choices: [String.raw`$\frac{(x - 3)^2}{4} - \frac{(y + 1)^2}{25} = 1$`, String.raw`$\frac{(x + 3)^2}{4} - \frac{(y - 1)^2}{25} = 1$`, String.raw`$\frac{(x - 3)^2}{2} - \frac{(y + 1)^2}{5} = 1$`, String.raw`$\frac{(x - 3)^2}{4} + \frac{(y + 1)^2}{25} = 1$`],
        why: [
          String.raw`$\sec t = \frac{x - 3}{2}$ and $\tan t = \frac{y + 1}{5}$. Since $\sec^2 t - \tan^2 t = 1$, the graph is $\frac{(x - 3)^2}{4} - \frac{(y + 1)^2}{25} = 1$.`,
          String.raw`This hyperbola has center $(-3, 1)$. The constants added in the parametric function are the center, $(3, -1)$.`,
          String.raw`The denominators are the coefficients $2$ and $5$. Squaring $\frac{x - 3}{2}$ and $\frac{y + 1}{5}$ puts $4$ and $25$ in the denominators.`,
          String.raw`This is an ellipse, which comes from $\cos^2 t + \sin^2 t = 1$. The identity for secant and tangent is $\sec^2 t - \tan^2 t = 1$, with a minus sign.`,
        ], answer: 0 },
      { id: "p407-m02", type: "mcq", skill: "u4", topic: "4.7", calc: false, difficulty: "moderate",
        question: String.raw`Which parametric function, for $0 \le t \le 2\pi$, has the graph of $x^2 + y^2 + 4x - 10y + 20 = 0$ as its graph?`,
        choices: [String.raw`$\left(-2 + 3\cos t,\ 5 + 3\sin t\right)$`, String.raw`$\left(2 + 3\cos t,\ -5 + 3\sin t\right)$`, String.raw`$\left(-2 + 7\cos t,\ 5 + 7\sin t\right)$`, String.raw`$\left(-2 + 9\cos t,\ 5 + 9\sin t\right)$`],
        why: [
          String.raw`$(x^2 + 4x + 4) + (y^2 - 10y + 25) = -20 + 4 + 25$, so $(x + 2)^2 + (y - 5)^2 = 9$. This circle has center $(-2, 5)$ and radius $3$, so it is $\left(-2 + 3\cos t, 5 + 3\sin t\right)$.`,
          String.raw`This circle has center $(2, -5)$. In $(x + 2)^2 + (y - 5)^2 = 9$ the center is $(-2, 5)$, and the parametric function adds the center's coordinates.`,
          String.raw`The radius $7$ comes from $20 + 4 + 25 = 49$, which moves $20$ to the right side without changing its sign. The right side is $-20 + 4 + 25 = 9$.`,
          String.raw`$9$ is the square of the radius. The coefficient of $\cos t$ and $\sin t$ is the radius, $3$.`,
        ], answer: 0 },
      { id: "p407-m03", type: "mcq", skill: "u4", topic: "4.7", calc: false, difficulty: "easy",
        question: String.raw`Let $f(x) = 2^{x} - 3$. Which parametric function has the graph of the inverse of $f$ as its graph?`,
        choices: [String.raw`$\left(2^{t} - 3,\ t\right)$`, String.raw`$\left(t,\ 2^{t} - 3\right)$`, String.raw`$\left(t,\ \log_{2} t + 3\right)$`, String.raw`$\left(t,\ \frac{1}{2^{t} - 3}\right)$`],
        why: [
          String.raw`The graph of $f$ is $\left(t, f(t)\right)$. The inverse switches the coordinates, so its graph is $\left(f(t), t\right) = \left(2^{t} - 3, t\right)$.`,
          String.raw`$\left(t, 2^{t} - 3\right)$ is the graph of $f$ itself. The inverse switches the two coordinates.`,
          String.raw`Solving $x = 2^{y} - 3$ gives $y = \log_{2}(x + 3)$. This choice takes the logarithm before adding $3$ to $x$.`,
          String.raw`This is the graph of $\frac{1}{f}$, the reciprocal of $f$. The inverse function undoes $f$; it is not $\frac{1}{f}$.`,
        ], answer: 0 },
      { id: "p407-m04", type: "mcq", skill: "u4", topic: "4.7", calc: false, difficulty: "easy",
        question: String.raw`Which parametric function, for $0 \le t \le 2\pi$, has the graph of $\dfrac{(x - 5)^2}{4} + \dfrac{(y + 3)^2}{49} = 1$ as its graph?`,
        choices: [String.raw`$\left(5 + 2\cos t,\ -3 + 7\sin t\right)$`, String.raw`$\left(5 + 4\cos t,\ -3 + 49\sin t\right)$`, String.raw`$\left(-5 + 2\cos t,\ 3 + 7\sin t\right)$`, String.raw`$\left(5 + 7\cos t,\ -3 + 2\sin t\right)$`],
        why: [
          String.raw`The center is $(5, -3)$, the horizontal radius is $\sqrt{4} = 2$, and the vertical radius is $\sqrt{49} = 7$. Then $\frac{(x - 5)^2}{4} + \frac{(y + 3)^2}{49} = \cos^2 t + \sin^2 t = 1$.`,
          String.raw`The coefficients $4$ and $49$ are the squares of the radii. Then $\frac{(x - 5)^2}{4} = 4\cos^2 t$, which does not give the equation.`,
          String.raw`This ellipse has center $(-5, 3)$. The factor $(x - 5)$ means the center has $x = 5$, and $(y + 3)$ means $y = -3$.`,
          String.raw`This switches the radii, which makes the ellipse wider than it is tall. The larger denominator, $49$, is under $(y + 3)^2$, so the radius $7$ goes with $\sin t$ in $y$.`,
        ], answer: 0 },
      { id: "p407-m05", type: "mcq", skill: "u4", topic: "4.7", calc: false, difficulty: "moderate",
        question: String.raw`Which describes the graph of the parametric function $\left(\sqrt{t},\ t - 4\right)$ for $t \ge 0$?`,
        choices: [String.raw`The part of $y = x^2 - 4$ with $x \ge 0$`, String.raw`All of the parabola $y = x^2 - 4$`, String.raw`The part of $y = x^2 - 4$ with $y \ge 0$`, String.raw`The part of $x = y^2 - 4$ with $y \ge 0$`],
        why: [
          String.raw`From $x = \sqrt{t}$, $t = x^2$, so $y = x^2 - 4$. Since $\sqrt{t} \ge 0$, only the points with $x \ge 0$ appear: the right half of the parabola, starting at $(0, -4)$.`,
          String.raw`The points satisfy $y = x^2 - 4$, but $x = \sqrt{t}$ is never negative. The left half of the parabola is missing.`,
          String.raw`The condition $t \ge 0$ limits $x = \sqrt{t}$, not $y$. At $t = 0$ the point is $(0, -4)$, which has $y < 0$.`,
          String.raw`This substitutes for the wrong variable. From $x = \sqrt{t}$, $t = x^2$, and then $y = t - 4 = x^2 - 4$.`,
        ], answer: 0 },
      { id: "p407-m06", type: "mcq", skill: "u4", topic: "4.7", calc: false, difficulty: "difficult",
        question: String.raw`Which parametric function has the graph of the hyperbola $4x^2 - y^2 - 8x - 4y + 16 = 0$ as its graph?`,
        choices: [String.raw`$\left(1 + 2\tan t,\ -2 + 4\sec t\right)$`, String.raw`$\left(1 + 2\sec t,\ -2 + 4\tan t\right)$`, String.raw`$\left(-1 + 2\tan t,\ 2 + 4\sec t\right)$`, String.raw`$\left(1 + 4\tan t,\ -2 + 2\sec t\right)$`],
        why: [
          String.raw`$4(x - 1)^2 - 4 - (y + 2)^2 + 4 + 16 = 0$ gives $4(x - 1)^2 - (y + 2)^2 = -16$. Dividing by $-16$: $\frac{(y + 2)^2}{16} - \frac{(x - 1)^2}{4} = 1$, which opens up and down. With $y + 2 = 4\sec t$ and $x - 1 = 2\tan t$, $\sec^2 t - \tan^2 t = 1$ gives the equation.`,
          String.raw`This hyperbola opens left and right. The $x^2$ term is positive in the given equation, but the right side is $-16$, so after dividing, the $y$-term is the positive one.`,
          String.raw`This hyperbola has center $(-1, 2)$. Completing the squares gives $(x - 1)^2$ and $(y + 2)^2$, so the center is $(1, -2)$.`,
          String.raw`This switches the two numbers: $\frac{(x - 1)^2}{4}$ needs $x - 1 = 2\tan t$, and $\frac{(y + 2)^2}{16}$ needs $y + 2 = 4\sec t$.`,
        ], answer: 0 },
      { id: "p407-f1a", type: "frq", skill: "u4", topic: "4.7", calc: false, set: "p407-s1", part: "(a)",
        prompt: String.raw`Rewrite the equation of $E$ in standard form.`,
        rows: [{ name: "Standard form", earns: String.raw`$\dfrac{(x - 2)^2}{4} + \dfrac{(y + 3)^2}{16} = 1$, with the completed squares shown.` }],
        solution: String.raw`$4(x^2 - 4x + 4) + (y^2 + 6y + 9) = -9 + 16 + 9$, so $4(x - 2)^2 + (y + 3)^2 = 16$. Divide by $16$: $$\frac{(x - 2)^2}{4} + \frac{(y + 3)^2}{16} = 1.$$` },
      { id: "p407-f1b", type: "frq", skill: "u4", topic: "4.7", calc: false, set: "p407-s1", part: "(b)",
        prompt: String.raw`Write parametric functions $x(t)$ and $y(t)$ for the position of the particle.`,
        rows: [{ name: "Parametrization", earns: String.raw`$x(t) = 2 + 2\cos t$ and $y(t) = -3 + 4\sin t$, for $0 \le t \le 2\pi$.` }],
        solution: String.raw`The center is $(2, -3)$, the horizontal radius is $2$, and the vertical radius is $4$. At $t = 0$, $\cos t = 1$ and $\sin t = 0$, so $\left(2 + 2\cos t, -3 + 4\sin t\right)$ starts at the rightmost point $(4, -3)$. As $t$ increases, $(\cos t, \sin t)$ moves counterclockwise, so $x(t) = 2 + 2\cos t$ and $y(t) = -3 + 4\sin t$.` },
      { id: "p407-f1c", type: "frq", skill: "u4", topic: "4.7", calc: false, set: "p407-s1", part: "(c)",
        prompt: String.raw`Using your answer from part (b), find every time $t$, $0 \le t < 2\pi$, at which the particle is on the line $y = -1$, and find the particle's position at each of those times.`,
        rows: [
          { name: "Times", earns: String.raw`Solves $-3 + 4\sin t = -1$ to get $\sin t = \dfrac{1}{2}$, so $t = \dfrac{\pi}{6}$ and $t = \dfrac{5\pi}{6}$.` },
          { name: "Positions", earns: String.raw`$\left(2 + \sqrt{3}, -1\right)$ at $t = \dfrac{\pi}{6}$ and $\left(2 - \sqrt{3}, -1\right)$ at $t = \dfrac{5\pi}{6}$.` },
        ],
        solution: String.raw`$-3 + 4\sin t = -1$ gives $\sin t = \dfrac{1}{2}$, so $t = \dfrac{\pi}{6}$ or $t = \dfrac{5\pi}{6}$ in $0 \le t < 2\pi$. Then $x\left(\dfrac{\pi}{6}\right) = 2 + 2\left(\dfrac{\sqrt{3}}{2}\right) = 2 + \sqrt{3}$ and $x\left(\dfrac{5\pi}{6}\right) = 2 + 2\left(-\dfrac{\sqrt{3}}{2}\right) = 2 - \sqrt{3}$. The positions are $\left(2 + \sqrt{3}, -1\right)$ and $\left(2 - \sqrt{3}, -1\right)$.` },
    ],
  }],
};

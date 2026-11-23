// AP Precalculus topic quiz, Topic 3.6: Sinusoidal Function Transformations.
import { graph } from "../../plot.js";

const P = Math.PI;

export const sets = {
  "p306-s1": {
    name: "A sinusoid with labeled extremes",
    label: "Graph",
    intro: String.raw`The graph of the sinusoidal function $f$ is shown below. The point $(0, -2)$ is a minimum point of the graph, and $(4, 4)$ is the next maximum point to its right.`,
    sources: [{ title: "", blocks: [{ svg: graph({
      x: [-3, 11], y: [-3, 5], step: 1, xname: "x", yname: "y",
      fns: [{ f: (x) => -3 * Math.cos((P * x) / 4) + 1, from: -2, to: 10 }],
      dots: [[0, -2, "closed"], [4, 4, "closed"]],
      labels: [[0.3, -2.45, "(0, −2)"], [4.2, 4.4, "(4, 4)"]],
      alt: "Graph of a sinusoidal function f for x from -2 to 10. It passes through (-2, 1), falls to the labeled minimum point (0, -2), rises through (2, 1) to the labeled maximum point (4, 4), falls through (6, 1) to a minimum at (8, -2), and rises to (10, 1).",
    }) }] }],
  },
  "p306-s2": {
    name: "A translated sine graph",
    label: "Graph",
    intro: String.raw`The graphs of $y = \sin x$ (dashed) and $y = g(x)$ (solid) for $0 \le x \le 2\pi$ are shown below. The graph of $g$ is a horizontal translation of the graph of $y = \sin x$, and $g(x) = \sin(x - c)$ for a constant $c$ with $0 < c < \pi$. The maximum points $\left(\dfrac{\pi}{2}, 1\right)$ and $\left(\dfrac{7\pi}{6}, 1\right)$ are marked.`,
    sources: [{ title: "", blocks: [{ svg: graph({
      x: [-0.4, 2 * P + 0.5], y: [-1.5, 1.6], step: { x: P / 6, y: 0.5 }, labelEvery: 1000, xname: "x", yname: "y", width: 400,
      fns: [{ f: Math.sin, from: 0, to: 2 * P, dash: true }, { f: (x) => Math.sin(x - (2 * P) / 3), from: 0, to: 2 * P }],
      dots: [[P / 2, 1, "closed"], [(7 * P) / 6, 1, "closed"]],
      labels: [[P / 2 - 0.35, 1.25, "(π/2, 1)"], [(7 * P) / 6 - 0.2, 1.25, "(7π/6, 1)"], [P - 0.1, -0.3, "π"], [2 * P - 0.2, -0.3, "2π"], [-0.35, 1.03, "1"], [-0.45, -1.08, "−1"]],
      alt: "Graphs of y = sin x, dashed, and y = g(x), solid, from 0 to 2 pi, with grid lines every pi/6. The dashed sine curve has its maximum at (pi/2, 1). The solid curve has the same shape, moved to the right, with its maximum at (7 pi/6, 1) and its minimum at (pi/6, -1); it crosses the x-axis going up at 2 pi/3 and going down at 5 pi/3.",
    }) }] }],
  },
  "p306-s3": {
    name: "A transformed sine function",
    label: "Free response",
    intro: String.raw`The function $g$ is given by $g(x) = -2\sin\left(\dfrac{\pi}{3}(x + 1)\right) + 5$.`,
    sources: [{ title: "", blocks: [{ p: "Answer each part. Show the work that leads to your answers." }] }],
  },
};

export default {
  forms: [{
    id: "p306",
    name: "Topic 3.6 Quiz: Sinusoidal Function Transformations",
    group: "Unit 3: Trigonometric and Polar Functions",
    items: [
      { id: "p306-m01", type: "mcq", skill: "u3", topic: "3.6", calc: false, difficulty: "easy", set: "p306-s1",
        question: String.raw`What is the amplitude of $f$?`,
        choices: ["$3$", "$6$", "$4$", "$1$"],
        why: [
          String.raw`The amplitude is half the distance from the minimum to the maximum: $\dfrac{4 - (-2)}{2} = 3$.`,
          String.raw`$6$ is the whole distance from the minimum $-2$ to the maximum $4$. The amplitude is half of it.`,
          String.raw`$4$ is the maximum value. The amplitude is measured from the midline $y = 1$, not from the $x$-axis.`,
          String.raw`$1$ is the midline value, $\dfrac{4 + (-2)}{2}$. The amplitude is the distance from the midline to the maximum.`,
        ], answer: 0 },
      { id: "p306-m02", type: "mcq", skill: "u3", topic: "3.6", calc: false, difficulty: "moderate", set: "p306-s1",
        question: String.raw`The function can be written as $f(x) = a\cos(bx) + d$, where $b > 0$. What is the value of $b$?`,
        choices: [String.raw`$\frac{\pi}{4}$`, String.raw`$\frac{\pi}{2}$`, "$8$", String.raw`$\frac{1}{8}$`],
        why: [
          String.raw`From a minimum to the next maximum is half a period, so the period is $2(4 - 0) = 8$. Then $\dfrac{2\pi}{b} = 8$ gives $b = \dfrac{\pi}{4}$.`,
          String.raw`$\dfrac{\pi}{2}$ comes from taking the distance $4$ from the minimum to the maximum as the whole period. That distance is half a period.`,
          String.raw`$8$ is the period. The constant $b$ satisfies $\dfrac{2\pi}{b} = 8$.`,
          String.raw`$\dfrac{1}{8}$ is the frequency, the reciprocal of the period. The constant $b$ is $2\pi$ times the frequency.`,
        ], answer: 0 },
      { id: "p306-m03", type: "mcq", skill: "u3", topic: "3.6", calc: false, difficulty: "difficult", set: "p306-s1",
        question: String.raw`Which of the following could be an equation for $f$?`,
        choices: [
          String.raw`$f(x) = 3\sin\left(\frac{\pi}{4}(x - 2)\right) + 1$`,
          String.raw`$f(x) = 3\sin\left(\frac{\pi}{4}(x + 2)\right) + 1$`,
          String.raw`$f(x) = -3\sin\left(\frac{\pi}{4}(x - 2)\right) + 1$`,
          String.raw`$f(x) = 3\sin\left(\frac{\pi}{4}(x - 2)\right) - 1$`,
        ],
        why: [
          String.raw`The amplitude is $3$, the midline is $y = 1$, and $b = \dfrac{\pi}{4}$. A sine with positive $a$ crosses its midline going up at the start of its cycle. $f$ does this at $x = 2$, halfway from the minimum at $0$ to the maximum at $4$, so the phase shift is $2$ to the right.`,
          String.raw`This shifts sine $2$ units to the left, so it crosses its midline going up at $x = -2$. There $f$ is going down, from the maximum at $x = -4$ to the minimum at $x = 0$.`,
          String.raw`With $a = -3$, the graph crosses the midline going down at $x = 2$. The graph of $f$ is rising at $x = 2$.`,
          String.raw`This has midline $y = -1$. The midline of $f$ is $y = \dfrac{4 + (-2)}{2} = 1$.`,
        ], answer: 0 },
      { id: "p306-m04", type: "mcq", skill: "u3", topic: "3.6", calc: false, difficulty: "easy",
        question: String.raw`What is the range of $g(x) = 4\sin(x - 1) - 6$?`,
        choices: [String.raw`$[-10, -2]$`, String.raw`$[-4, 4]$`, String.raw`$[2, 10]$`, String.raw`$[-7, -5]$`],
        why: [
          String.raw`The midline is $y = -6$ and the amplitude is $4$, so the values run from $-6 - 4 = -10$ to $-6 + 4 = -2$. The horizontal shift does not change the range.`,
          String.raw`$[-4, 4]$ is the range of $4\sin x$. It leaves out the vertical translation down $6$ units.`,
          String.raw`$[2, 10]$ translates up $6$ units instead of down.`,
          String.raw`$[-7, -5]$ uses an amplitude of $1$. The factor $4$ stretches the graph vertically.`,
        ], answer: 0 },
      { id: "p306-m05", type: "mcq", skill: "u3", topic: "3.6", calc: false, difficulty: "moderate",
        question: String.raw`The function $f(x) = \sin(bx)$, where $b > 0$, completes exactly $3$ cycles on the interval $0 \le x \le \pi$. What is the value of $b$?`,
        choices: ["$6$", "$3$", String.raw`$\frac{\pi}{3}$`, String.raw`$\frac{1}{6}$`],
        why: [
          String.raw`Three cycles in a length of $\pi$ means the period is $\dfrac{\pi}{3}$. Then $\dfrac{2\pi}{b} = \dfrac{\pi}{3}$, so $b = 6$.`,
          String.raw`$\sin(3x)$ has period $\dfrac{2\pi}{3}$, so it completes only $1.5$ cycles on $[0, \pi]$. The number of cycles in $2\pi$ is $b$.`,
          String.raw`$\dfrac{\pi}{3}$ is the period. The constant $b$ is $\dfrac{2\pi}{\text{period}}$.`,
          String.raw`$\dfrac{1}{6}$ is the reciprocal of $b$. $\sin\left(\dfrac{x}{6}\right)$ has period $12\pi$, a horizontal stretch instead of a compression.`,
        ], answer: 0 },
      { id: "p306-m06", type: "mcq", skill: "u3", topic: "3.6", calc: false, difficulty: "easy", set: "p306-s2",
        question: String.raw`What is the value of $c$?`,
        choices: [String.raw`$\frac{2\pi}{3}$`, String.raw`$\frac{7\pi}{6}$`, String.raw`$-\frac{2\pi}{3}$`, String.raw`$\frac{4\pi}{3}$`],
        why: [
          String.raw`The maximum moves from $x = \dfrac{\pi}{2}$ to $x = \dfrac{7\pi}{6}$, a shift of $\dfrac{7\pi}{6} - \dfrac{\pi}{2} = \dfrac{2\pi}{3}$ to the right. $\sin(x - c)$ shifts right by $c$, so $c = \dfrac{2\pi}{3}$.`,
          String.raw`$\dfrac{7\pi}{6}$ is where the maximum of $g$ is. The shift is the distance it moved from $\dfrac{\pi}{2}$.`,
          String.raw`$\sin\left(x + \dfrac{2\pi}{3}\right)$ shifts left. The graph of $g$ is to the right of the sine graph. It also breaks $0 < c < \pi$.`,
          String.raw`$\sin\left(x - \dfrac{4\pi}{3}\right)$ moves the maximum to $\dfrac{\pi}{2} + \dfrac{4\pi}{3} = \dfrac{11\pi}{6}$. A shift of $\dfrac{4\pi}{3}$ to the left would give $g$, but $\sin(x - c)$ shifts right.`,
        ], answer: 0 },
      { id: "p306-f1a", type: "frq", skill: "u3", topic: "3.6", calc: false, set: "p306-s3", part: "(a)",
        prompt: String.raw`Find the amplitude, the equation of the midline, and the period of the graph of $g$.`,
        rows: [
          { name: "Amplitude and midline", earns: String.raw`Amplitude $2$ and midline $y = 5$.` },
          { name: "Period", earns: String.raw`Period $\dfrac{2\pi}{\pi/3} = 6$.` },
        ],
        solution: String.raw`The amplitude is $|-2| = 2$ and the midline is $y = 5$. The period is $\dfrac{2\pi}{b} = \dfrac{2\pi}{\pi/3} = 6$.` },
      { id: "p306-f1b", type: "frq", skill: "u3", topic: "3.6", calc: false, set: "p306-s3", part: "(b)",
        prompt: String.raw`Describe a sequence of transformations that maps the graph of $y = \sin x$ to the graph of $y = g(x)$.`,
        rows: [{ name: "Transformations", earns: String.raw`A horizontal dilation by a factor of $\dfrac{3}{\pi}$, a translation $1$ unit left, a vertical dilation by a factor of $2$ with a reflection over the $x$-axis, and a translation $5$ units up, in an order that gives $g$ (a horizontal dilation applied after the left translation must be paired with a translation of $\dfrac{\pi}{3}$ instead).` }],
        solution: String.raw`Start with $y = \sin x$. Dilate horizontally by a factor of $\dfrac{3}{\pi}$ to get $y = \sin\left(\dfrac{\pi}{3}x\right)$, then translate $1$ unit left to get $y = \sin\left(\dfrac{\pi}{3}(x + 1)\right)$. Dilate vertically by a factor of $2$ and reflect over the $x$-axis to get $y = -2\sin\left(\dfrac{\pi}{3}(x + 1)\right)$, and finally translate $5$ units up.` },
      { id: "p306-f1c", type: "frq", skill: "u3", topic: "3.6", calc: false, set: "p306-s3", part: "(c)",
        prompt: String.raw`Find the maximum value of $g$ and the least positive value of $x$ at which it occurs.`,
        rows: [{ name: "Maximum and location", earns: String.raw`Maximum value $7$, at $x = \dfrac{7}{2}$, from $\sin\left(\dfrac{\pi}{3}(x + 1)\right) = -1$ when $\dfrac{\pi}{3}(x + 1) = \dfrac{3\pi}{2}$.` }],
        solution: String.raw`Because $a = -2 < 0$, $g$ is greatest when $\sin\left(\dfrac{\pi}{3}(x + 1)\right) = -1$, and then $g(x) = 2 + 5 = 7$. This happens when $\dfrac{\pi}{3}(x + 1) = \dfrac{3\pi}{2} + 2\pi n$, so $x + 1 = \dfrac{9}{2} + 6n$ and $x = \dfrac{7}{2} + 6n$. The least positive value is $x = \dfrac{7}{2}$.` },
    ],
  }],
};

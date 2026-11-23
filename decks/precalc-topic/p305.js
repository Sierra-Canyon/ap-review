// AP Precalculus topic quiz, Topic 3.5: Sinusoidal Functions.
export const sets = {
  "p305-s1": {
    name: "A reflected cosine",
    label: "Free response",
    intro: String.raw`The function $f$ is given by $f(x) = 4 - 2\cos x$ for $0 \le x \le 2\pi$.`,
    sources: [{ title: "", blocks: [{ p: "Answer each part. Give a reason where one is asked for." }] }],
  },
};

export default {
  forms: [{
    id: "p305",
    name: "Topic 3.5 Quiz: Sinusoidal Functions",
    group: "Unit 3: Trigonometric and Polar Functions",
    items: [
      { id: "p305-m01", type: "mcq", skill: "u3", topic: "3.5", calc: false, difficulty: "easy",
        question: String.raw`A sinusoidal function has a maximum value of $4$, and its midline is $y = -1$. What is its minimum value?`,
        choices: [String.raw`$-6$`, String.raw`$-4$`, String.raw`$-5$`, String.raw`$-9$`],
        why: [
          String.raw`The amplitude is the distance from the midline to the maximum, $4 - (-1) = 5$. The minimum is the same distance below the midline: $-1 - 5 = -6$.`,
          String.raw`$-4$ reflects the maximum over the $x$-axis. The minimum is as far below the midline $y = -1$ as the maximum is above it.`,
          String.raw`$-5$ subtracts the maximum from the midline, $-1 - 4$. The amplitude is $5$, not $4$.`,
          String.raw`$-9$ uses twice the maximum, $-1 - 2(4)$, as if $4$ were the amplitude and the minimum were two amplitudes below the midline.`,
        ], answer: 0 },
      { id: "p305-m02", type: "mcq", skill: "u3", topic: "3.5", calc: false, difficulty: "easy",
        question: String.raw`On which of the following intervals is the graph of $y = \cos x$ concave up?`,
        choices: [String.raw`$\left(\frac{\pi}{2}, \frac{3\pi}{2}\right)$`, String.raw`$(0, \pi)$`, String.raw`$\left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$`, String.raw`$(\pi, 2\pi)$`],
        why: [
          String.raw`A sinusoid is concave up where it is below its midline. $\cos x < 0$ on $\left(\dfrac{\pi}{2}, \dfrac{3\pi}{2}\right)$, the arc around the minimum at $x = \pi$.`,
          String.raw`$\cos x$ is decreasing on $(0, \pi)$, but it is concave down on the first half of that interval.`,
          String.raw`This is the arc around the maximum at $x = 0$, where the graph is concave down.`,
          String.raw`$\cos x$ is increasing on $(\pi, 2\pi)$, but it is concave down on the second half of that interval.`,
        ], answer: 0 },
      { id: "p305-m03", type: "mcq", skill: "u3", topic: "3.5", calc: false, difficulty: "moderate",
        question: String.raw`What is the frequency of $g(x) = 3\sin(4\pi x)$?`,
        choices: ["$2$", String.raw`$\frac{1}{2}$`, String.raw`$4\pi$`, String.raw`$2\pi$`],
        why: [
          String.raw`The period is $\dfrac{2\pi}{4\pi} = \dfrac{1}{2}$, and the frequency is the reciprocal of the period, $2$ cycles per unit of $x$.`,
          String.raw`$\dfrac{1}{2}$ is the period. The frequency is its reciprocal.`,
          String.raw`$4\pi$ is the coefficient of $x$. It sets the period, $\dfrac{2\pi}{4\pi}$, but it is not the frequency.`,
          String.raw`$2\pi$ is the period of $y = \sin x$. The factor $4\pi$ shortens the period.`,
        ], answer: 0 },
      { id: "p305-m04", type: "mcq", skill: "u3", topic: "3.5", calc: false, difficulty: "moderate",
        question: String.raw`Let $f(x) = \sin x$. Which of the following statements are true?

I. $f(x + \pi) = -f(x)$ for all $x$
II. $f(\pi - x) = f(x)$ for all $x$
III. $f\left(x + \dfrac{\pi}{2}\right) = f(x)$ for all $x$`,
        choices: ["I and II only", "I only", "II and III only", "I, II, and III"],
        why: [
          String.raw`Moving half a period, $\pi$, takes each point of the sine graph to a point the same distance on the other side of the midline, so I is true. The graph is symmetric about $x = \dfrac{\pi}{2}$, so II is true. $\dfrac{\pi}{2}$ is not a period: $f\left(0 + \dfrac{\pi}{2}\right) = 1$ but $f(0) = 0$, so III is false.`,
          String.raw`II is also true. On the unit circle, $\pi - x$ reflects the point over the $y$-axis, which keeps its $y$-coordinate.`,
          String.raw`III is false: $f\left(\dfrac{\pi}{2}\right) = 1 \ne f(0) = 0$. The period of sine is $2\pi$, and I is true.`,
          String.raw`III is false, because $\dfrac{\pi}{2}$ is not a period of sine: $f\left(\dfrac{\pi}{2}\right) = 1$ while $f(0) = 0$.`,
        ], answer: 0 },
      { id: "p305-m05", type: "mcq", skill: "u3", topic: "3.5", calc: false, difficulty: "difficult",
        question: String.raw`Over which of the following intervals is the average rate of change of $f(x) = \sin x$ the greatest?`,
        choices: [String.raw`$\left[-\frac{\pi}{8}, \frac{\pi}{8}\right]$`, String.raw`$\left[0, \frac{\pi}{4}\right]$`, String.raw`$\left[\frac{\pi}{4}, \frac{\pi}{2}\right]$`, String.raw`$\left[\frac{3\pi}{4}, \pi\right]$`],
        why: [
          String.raw`All four intervals have length $\dfrac{\pi}{4}$, so the greatest average rate of change has the greatest rise. Sine increases fastest where it crosses its midline going up, at $x = 0$: it is concave up just before $0$ and concave down just after. The interval centered at $0$ gives $\dfrac{2\sin\frac{\pi}{8}}{\pi/4} \approx 0.97$, more than $\dfrac{\sin\frac{\pi}{4}}{\pi/4} \approx 0.90$ on $\left[0, \dfrac{\pi}{4}\right]$.`,
          String.raw`On $\left[0, \dfrac{\pi}{4}\right]$ sine is concave down, so its rate of change is already falling. Its average rate, about $0.90$, is less than on the interval centered at $0$.`,
          String.raw`Near the maximum at $\dfrac{\pi}{2}$ sine levels off. The average rate here is about $0.37$.`,
          String.raw`Sine decreases on $\left[\dfrac{3\pi}{4}, \pi\right]$, so its average rate of change there is negative.`,
        ], answer: 0 },
      { id: "p305-m06", type: "mcq", skill: "u3", topic: "3.5", calc: false, difficulty: "easy",
        question: String.raw`What is the amplitude of $y = -5\cos x + 2$?`,
        choices: ["$5$", String.raw`$-5$`, "$10$", "$7$"],
        why: [
          String.raw`The amplitude is $|a| = |-5| = 5$, the distance from the midline $y = 2$ to the maximum $7$ or the minimum $-3$.`,
          String.raw`An amplitude is a distance, so it is never negative. The sign of $a$ shows a reflection.`,
          String.raw`$10$ is the distance from the minimum $-3$ to the maximum $7$. The amplitude is half of that.`,
          String.raw`$7$ is the maximum value, $5 + 2$. The amplitude is measured from the midline.`,
        ], answer: 0 },
      { id: "p305-f1a", type: "frq", skill: "u3", topic: "3.5", calc: false, set: "p305-s1", part: "(a)",
        prompt: String.raw`Find the amplitude of $f$ and the equation of its midline.`,
        rows: [{ name: "Amplitude and midline", earns: String.raw`Amplitude $2$ and midline $y = 4$.` }],
        solution: String.raw`$f(x) = -2\cos x + 4$ has amplitude $|-2| = 2$ and midline $y = 4$. Its values run from $2$ to $6$.` },
      { id: "p305-f1b", type: "frq", skill: "u3", topic: "3.5", calc: false, set: "p305-s1", part: "(b)",
        prompt: String.raw`On what interval is $f$ decreasing and the rate of change of $f$ increasing? Give a reason for your answer.`,
        rows: [{ name: "Interval with reason", earns: String.raw`$\dfrac{3\pi}{2} < x < 2\pi$, because $f$ decreases from its maximum at $x = \pi$ to its minimum at $x = 2\pi$, and the graph is below the midline (concave up) after $x = \dfrac{3\pi}{2}$.` }],
        solution: String.raw`$f$ has its minimum $2$ at $x = 0$ and $x = 2\pi$ and its maximum $6$ at $x = \pi$, so $f$ decreases on $(\pi, 2\pi)$. The rate of change of a sinusoid increases where the graph is concave up, which is where the graph is below the midline: $f(x) < 4$ when $\cos x > 0$, on $\left(0, \dfrac{\pi}{2}\right)$ and $\left(\dfrac{3\pi}{2}, 2\pi\right)$. Both hold on $\dfrac{3\pi}{2} < x < 2\pi$.` },
      { id: "p305-f1c", type: "frq", skill: "u3", topic: "3.5", calc: false, set: "p305-s1", part: "(c)",
        prompt: String.raw`Find all values of $x$ in the interval $0 < x < 2\pi$ at which the graph of $f$ has a point of inflection. Give a reason for your answer.`,
        rows: [{ name: "Inputs with reason", earns: String.raw`$x = \dfrac{\pi}{2}$ and $x = \dfrac{3\pi}{2}$, because the graph crosses its midline there, so its concavity changes.` }],
        solution: String.raw`The graph of a sinusoid changes concavity where it crosses its midline. $f(x) = 4$ when $\cos x = 0$, at $x = \dfrac{\pi}{2}$ and $x = \dfrac{3\pi}{2}$. The graph is concave up below the midline and concave down above it, so both are points of inflection.` },
    ],
  }],
};

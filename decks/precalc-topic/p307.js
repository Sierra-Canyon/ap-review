// AP Precalculus topic quiz, Topic 3.7: Sinusoidal Function Context and Data Modeling.
import { graph } from "../../plot.js";

const R = String.raw;

// The lit percent of the Moon, as measured every 3 days. The values are 50 - 50cos(pi t / 15) rounded to tenths.
const moon = [[0, 0], [3, 9.5], [6, 34.5], [9, 65.5], [12, 90.5], [15, 100], [18, 90.5], [21, 65.5], [24, 34.5], [27, 9.5], [30, 0]];

export const sets = {
  "p307-s1": {
    name: "The lit part of the Moon",
    label: "Graph",
    intro: R`The percent $L$ of the Moon's visible face that is lit was recorded every $3$ days, where $t$ is the number of days after a new moon. The data are shown below. A new moon ($0$ percent lit) occurs at $t = 0$ and again at $t = 30$, and a full moon ($100$ percent lit) occurs at $t = 15$. The data are modeled by a sinusoidal function.`,
    sources: [{ title: "", blocks: [{ svg: graph({
      x: [-2, 32], y: [-12, 112], step: { x: 3, y: 25 }, xname: "t", yname: "L", width: 400,
      dots: moon.map(([t, v]) => [t, v, "closed"]),
      alt: "Eleven data points for t = 0, 3, 6, and so on up to 30 days. L is 0 at t = 0, rises through 9.5, 34.5, 65.5, and 90.5 to 100 at t = 15, then falls back through 90.5, 65.5, 34.5, and 9.5 to 0 at t = 30.",
    }) }] }],
  },
  "p307-s2": {
    name: "A carnival ride",
    label: "Table",
    intro: R`A basket on a rotating carnival ride moves up and down. Its height $h$, in meters, $t$ seconds after the ride starts, is a sinusoidal function of $t$. Selected values are shown in the table.`,
    sources: [{ title: "", blocks: [{ table: {
      head: ["$t$ (seconds)", "$0$", "$1$", "$2$", "$3$", "$4$", "$5$", "$6$"],
      rows: [["$h(t)$ (meters)", "$4$", "$8$", "$16$", "$20$", "$16$", "$8$", "$4$"]],
    } }] }],
  },
  "p307-s3": {
    name: "Air in the lungs",
    label: "Free response",
    intro: R`During steady breathing, the volume of air in a person's lungs, in liters, $t$ seconds after a recording starts, is modeled by a sinusoidal function $V$. The volume reaches its greatest value, $3.4$ liters, at $t = 1.5$, and the next least value, $2.6$ liters, at $t = 4$.`,
    sources: [{ title: "", blocks: [{ p: "Answer each part. Show the work that leads to your answers." }] }],
  },
};

export default {
  forms: [{
    id: "p307",
    name: "Topic 3.7 Quiz: Sinusoidal Context and Data Modeling",
    group: "Unit 3: Trigonometric and Polar Functions",
    items: [
      { id: "p307-m01", type: "mcq", skill: "u3", topic: "3.7", calc: false, difficulty: "easy", set: "p307-s1",
        question: R`What is the period of the sinusoidal model?`,
        choices: ["$30$ days", "$15$ days", "$100$ days", "$7.5$ days"],
        why: [
          R`The data go from a new moon at $t = 0$ to a full moon at $t = 15$ and back to a new moon at $t = 30$, so one full cycle takes $30$ days.`,
          R`$15$ days is the time from a least value to the next greatest value. That is half of a cycle.`,
          R`$100$ is the greatest value of $L$, a percent. The period is a length of time on the horizontal axis.`,
          R`$7.5$ days is the time from the new moon to the half-lit point, a quarter of a cycle.`,
        ], answer: 0 },
      { id: "p307-m02", type: "mcq", skill: "u3", topic: "3.7", calc: false, difficulty: "moderate", set: "p307-s1",
        question: R`Which of the following is an equation for the sinusoidal model?`,
        choices: [
          R`$L(t) = 50 - 50\cos\left(\frac{\pi}{15}t\right)$`,
          R`$L(t) = 50 + 50\cos\left(\frac{\pi}{15}t\right)$`,
          R`$L(t) = 50 - 50\cos\left(\frac{\pi}{30}t\right)$`,
          R`$L(t) = 50 - 50\sin\left(\frac{\pi}{15}t\right)$`,
        ],
        why: [
          R`The midline is $\dfrac{100 + 0}{2} = 50$ and the amplitude is $50$. The period is $30$, so $b = \dfrac{2\pi}{30} = \dfrac{\pi}{15}$. The model is least at $t = 0$, so it is a reflected cosine: $L(t) = 50 - 50\cos\left(\dfrac{\pi}{15}t\right)$, which gives $L(0) = 0$ and $L(15) = 100$.`,
          R`This model gives $L(0) = 100$. A cosine without a reflection starts at its greatest value, but the data start at the least value.`,
          R`$\dfrac{\pi}{30}$ comes from $b = \dfrac{\pi}{\text{period}}$. With this value, $L(15) = 50$ and the period is $60$ days. The formula is $b = \dfrac{2\pi}{\text{period}}$.`,
          R`This model gives $L(0) = 50$. A sine starts on its midline, but at $t = 0$ the data are at the least value.`,
        ], answer: 0 },
      { id: "p307-m03", type: "mcq", skill: "u3", topic: "3.7", calc: false, difficulty: "easy",
        question: R`The height, in centimeters, of the needle of a sewing machine above its plate is modeled by $h(t) = 1.2\sin(30\pi t) + 2.5$, where $t$ is the time in seconds. Each complete up-and-down cycle of the needle makes one stitch. According to the model, how many stitches does the machine make each second?`,
        choices: ["$15$", R`$15\pi$`, R`$30\pi$`, R`$\frac{1}{15}$`],
        why: [
          R`The period is $\dfrac{2\pi}{30\pi} = \dfrac{1}{15}$ second, so the needle completes $15$ cycles, and makes $15$ stitches, each second.`,
          R`$15\pi$ divides $30\pi$ by $2$ instead of by $2\pi$. The number of cycles per second is $\dfrac{b}{2\pi} = \dfrac{30\pi}{2\pi} = 15$.`,
          R`$30\pi$ is $b$, the number of radians the argument passes through each second. One cycle uses $2\pi$ radians.`,
          R`$\dfrac{1}{15}$ is the period, the number of seconds for one stitch. The number of stitches per second is its reciprocal.`,
        ], answer: 0 },
      { id: "p307-m04", type: "mcq", skill: "u3", topic: "3.7", calc: true, difficulty: "moderate",
        question: R`The temperature of the water at the surface of a lake, in degrees Celsius, is modeled by $T(t) = 21 + 3.5\sin\left(\dfrac{\pi}{12}(t - 9)\right)$, where $t$ is the number of hours after midnight. According to the model, at what time $t$ does the temperature first reach $23$ degrees Celsius?`,
        choices: [R`$t = 11.323$`, R`$t = 9.608$`, R`$t = 18.677$`, R`$t = 0.677$`],
        why: [
          R`$T$ is least at $t = 3$ and greatest at $t = 15$, so it first reaches $23$ while rising after $t = 9$. Solve $\sin\left(\dfrac{\pi}{12}(t - 9)\right) = \dfrac{2}{3.5}$: $\dfrac{\pi}{12}(t - 9) = \arcsin\left(\dfrac{2}{3.5}\right) \approx 0.608$, so $t = 9 + \dfrac{12}{\pi}(0.608) \approx 11.323$.`,
          R`$9.608$ adds $\arcsin\left(\dfrac{2}{3.5}\right) \approx 0.608$ to $9$ without dividing by $\dfrac{\pi}{12}$. The whole argument $\dfrac{\pi}{12}(t - 9)$ equals $0.608$.`,
          R`$18.677$ is the second time the temperature is $23$, while it falls after the maximum at $t = 15$. The first time comes before the maximum.`,
          R`$0.677$ comes from the argument $\dfrac{\pi}{12}(t + 9)$, a shift in the wrong direction. With $t - 9$, the temperature at $t = 0$ is about $18.5$ degrees and falling.`,
        ], answer: 0 },
      { id: "p307-m05", type: "mcq", skill: "u3", topic: "3.7", calc: false, difficulty: "difficult",
        question: R`A float bobs up and down in a wave pool. Its height above the bottom of the pool is a sinusoidal function of time. At $t = 1$ second the float is at its greatest height, $1.4$ meters, and at $t = 4$ seconds it is at the next least height, $0.6$ meter. The float is $1.2$ meters above the bottom at $t = 0$. At what time $t > 0$ is the float $1.2$ meters above the bottom for the fourth time?`,
        choices: [R`$t = 12$`, R`$t = 8$`, R`$t = 20$`, R`$t = 4.5$`],
        why: [
          R`The midline is $1$, the amplitude is $0.4$, and the period is $2(4 - 1) = 6$, so $h(t) = 0.4\cos\left(\dfrac{\pi}{3}(t - 1)\right) + 1$. Then $h(t) = 1.2$ when $\cos\left(\dfrac{\pi}{3}(t - 1)\right) = \dfrac{1}{2}$, so $t - 1 = \pm 1 + 6k$. The times after $t = 0$ are $2$, $6$, $8$, $12$, and so on. The fourth is $t = 12$.`,
          R`$8$ counts $t = 0$ as the first time. The question asks for times $t > 0$, so the list starts at $t = 2$.`,
          R`$20$ uses only one time per cycle, $t = 2, 8, 14, 20$. In each cycle the float passes $1.2$ meters twice, once rising and once falling.`,
          R`$4.5$ uses a period of $3$, the time from the greatest height to the least height. That is half of a cycle, so the period is $6$.`,
        ], answer: 0 },
      { id: "p307-m06", type: "mcq", skill: "u3", topic: "3.7", calc: false, difficulty: "easy", set: "p307-s2",
        question: R`Which of the following gives the midline and the amplitude of $h$?`,
        choices: [
          R`midline $h = 12$, amplitude $8$`,
          R`midline $h = 12$, amplitude $16$`,
          R`midline $h = 12$, amplitude $20$`,
          R`midline $h = 10$, amplitude $10$`,
        ],
        why: [
          R`The greatest value is $20$ and the least is $4$. The midline is their average, $\dfrac{20 + 4}{2} = 12$, and the amplitude is half their difference, $\dfrac{20 - 4}{2} = 8$.`,
          R`$16$ is the full difference $20 - 4$. The amplitude is half of it.`,
          R`$20$ is the greatest height. The amplitude is measured from the midline, $20 - 12 = 8$.`,
          R`$10$ is half of the greatest height, as if the least height were $0$. The least height is $4$, so the midline is $\dfrac{20 + 4}{2} = 12$.`,
        ], answer: 0 },
      { id: "p307-f1a", type: "frq", skill: "u3", topic: "3.7", calc: false, set: "p307-s3", part: "(a)",
        prompt: R`The function $V$ can be written in the form $V(t) = a\sin\bigl(b(t + c)\bigr) + d$. Find values of the constants $a$, $b$, $c$, and $d$.`,
        rows: [
          { name: "a and d", earns: R`$a = 0.4$ and $d = 3$.` },
          { name: "b and c", earns: R`$b = \dfrac{2\pi}{5}$ and $c = -\dfrac{1}{4}$ (or another value of $c$ that matches the given $a$ and $b$, such as $c = \dfrac{19}{4}$).` },
        ],
        solution: R`The midline is $d = \dfrac{3.4 + 2.6}{2} = 3$ and the amplitude is $a = \dfrac{3.4 - 2.6}{2} = 0.4$. The time from a greatest value to the next least value is half a period, so the period is $2(4 - 1.5) = 5$ and $b = \dfrac{2\pi}{5}$. The function crosses the midline while increasing halfway between the least value at $t = -1$ and the greatest value at $t = 1.5$, at $t = 0.25$. So $V(t) = 0.4\sin\left(\dfrac{2\pi}{5}\left(t - \dfrac{1}{4}\right)\right) + 3$ and $c = -\dfrac{1}{4}$.` },
      { id: "p307-f1b", type: "frq", skill: "u3", topic: "3.7", calc: false, set: "p307-s3", part: "(b)",
        prompt: R`One complete cycle of $V$ is one breath. According to the model, how many breaths does the person take per minute?`,
        rows: [{ name: "Breaths per minute", earns: R`$12$ breaths per minute, from $\dfrac{60}{5}$ with a period of $5$ seconds.` }],
        solution: R`The period is $5$ seconds, so the person takes one breath every $5$ seconds, or $\dfrac{60}{5} = 12$ breaths per minute.` },
      { id: "p307-f1c", type: "frq", skill: "u3", topic: "3.7", calc: false, set: "p307-s3", part: "(c)",
        prompt: R`On the interval $2.75 < t < 4$, is the rate of change of $V$ increasing or decreasing? Give a reason for your answer.`,
        rows: [{ name: "Answer with reason", earns: R`Increasing, because on this interval $V$ is below its midline (it falls from the midline value $3$ at $t = 2.75$ to its least value at $t = 4$), so the graph of $V$ is concave up.` }],
        solution: R`$V(2.75) = 3$, the midline value, and $V$ decreases to its least value at $t = 4$. On $2.75 < t < 4$ the graph is below the midline, where a sinusoid is concave up. So the rate of change of $V$ is increasing: it is negative and gets closer to $0$ as $t$ approaches $4$.` },
    ],
  }],
};

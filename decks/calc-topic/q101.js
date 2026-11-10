import { graph } from "../../plot.js";

export const sets = {
  "q101-s1": {
    name: "Average rates of change of f", label: "Table",
    intro: String.raw`The table gives the average rate of change of a function $f$ over the interval $[2, 2 + h]$ for three values of $h$.`,
    sources: [{ title: "", blocks: [{ table: {
      head: ["$h$", "$0.1$", "$0.01$", "$0.001$"],
      rows: [[String.raw`Average rate of change of $f$ over $[2, 2 + h]$`, "$-0.23810$", "$-0.24876$", "$-0.24988$"]],
    } }] }],
  },
  "q101-s2": {
    name: "Fuel in a truck", label: "Table",
    intro: String.raw`The amount of fuel in the tank of a truck is modeled by a function $F$, where $F(t)$ is measured in gallons and $t$ is measured in hours. Selected values of $F(t)$ are shown in the table.`,
    sources: [{ title: "", blocks: [{ table: {
      head: ["$t$ (hours)", "$0$", "$2$", "$5$", "$6$", "$10$"],
      rows: [["$F(t)$ (gallons)", "$34$", "$24$", "$19$", "$16$", "$5$"]],
    } }] }],
  },
  "q101-s4": {
    name: "Average velocities near t = 3", label: "Table",
    intro: String.raw`A particle moves along a line. Its position at time $t$ seconds is $s(t)$ meters, and $s$ is continuous. The table gives the average velocity of the particle, in meters per second, over the interval between $t = 3$ and $t = 3 + h$ for six values of $h$.`,
    sources: [{ title: "", blocks: [{ table: {
      head: ["$h$", "$-0.1$", "$-0.01$", "$-0.001$", "$0.001$", "$0.01$", "$0.1$"],
      rows: [[String.raw`$\dfrac{s(3 + h) - s(3)}{h}$`, "$2.1$", "$2.01$", "$2.001$", "$4.999$", "$4.99$", "$4.9$"]],
    } }] }],
  },
  "q101-s3": {
    name: "A rock dropped from a bridge", label: "Free response",
    intro: String.raw`A rock is dropped from a bridge. The distance, in meters, that the rock has fallen $t$ seconds after it is released is given by the function $d$ below, for $0 \le t \le 3$.`,
    sources: [{ title: "", blocks: [{ p: String.raw`$$d(t) = 4.9t^2$$` }] }],
  },
};

const items = [
  { id: "q101-m1", type: "mcq", difficulty: "easy", skill: "u1", topic: "1.1", calc: false,
    stem: String.raw`A ball is thrown upward. Its height, in meters, $t$ seconds after it is thrown is $h(t) = 30t - 5t^2$.`,
    question: String.raw`What is the average velocity of the ball, in meters per second, over the interval $1 \le t \le 3$?`,
    choices: ["$10$", "$20$", "$35$", "$-10$"],
    why: [
      String.raw`$h(1) = 25$ and $h(3) = 45$, so the average velocity is $\dfrac{h(3) - h(1)}{3 - 1} = \dfrac{45 - 25}{2} = 10$ meters per second.`,
      String.raw`$20$ is the change in height, $h(3) - h(1)$. It was not divided by the length of the interval, $3 - 1 = 2$.`,
      String.raw`$35$ is the average of the two heights, $\dfrac{25 + 45}{2}$. That is a height in meters, not a rate of change.`,
      String.raw`$-10$ subtracts in the wrong order, $\dfrac{h(1) - h(3)}{3 - 1}$. The height increases from 25 meters to 45 meters, so the average velocity is positive.`,
    ], answer: 0 },
  { id: "q101-m2", type: "mcq", difficulty: "easy", skill: "u1", topic: "1.1", calc: false, set: "q101-s1",
    question: "Based on the table, which of the following best describes the instantaneous rate of change of $f$ at $x = 2$?",
    choices: ["It is about $-0.25$.", "It is about $-0.23810$.", "It is about $0$.", "It cannot be estimated."],
    why: [
      String.raw`As $h$ gets closer to $0$, the average rates of change $-0.23810$, $-0.24876$, and $-0.24988$ get closer to $-0.25$. The instantaneous rate of change at $x = 2$ is the value these averages approach, so the best estimate is $-0.25$.`,
      String.raw`$-0.23810$ is the average rate of change over the longest interval in the table, $[2, 2.1]$. Shorter intervals give better estimates of the rate at the instant $x = 2$.`,
      String.raw`The rate at an instant is not $0$ just because the interval shrinks to a point. The change in $f$ and the length of the interval both shrink, and their quotient approaches $-0.25$.`,
      String.raw`The average rate cannot be computed with $h = 0$, but the instantaneous rate is the value the averages approach as $h$ approaches $0$. The table shows that value is about $-0.25$.`,
    ], answer: 0 },
  { id: "q101-m3", type: "mcq", difficulty: "moderate", skill: "u1", topic: "1.1", calc: false,
    stem: String.raw`The position of a particle moving along a line is $s(t)$, where $t$ is measured in seconds.`,
    question: String.raw`Which of the following expressions give a good approximation of the velocity of the particle at the instant $t = 4$?
I. $\dfrac{s(4.01) - s(4)}{0.01}$
II. $\dfrac{s(4) - s(3.99)}{-0.01}$
III. $\dfrac{s(4.01) - s(3.99)}{0.01}$`,
    choices: ["I only", "I and II only", "I and III only", "I, II, and III"],
    why: [
      String.raw`I is the average velocity over $[4, 4.01]$: the change in position divided by the elapsed time, $0.01$ second. II divides the change in position over $[3.99, 4]$ by $-0.01$, but the elapsed time is $4 - 3.99 = 0.01$, so II is the negative of the average velocity. III divides the change over $[3.99, 4.01]$ by $0.01$, but that interval lasts $0.02$ second, so III is twice the average velocity.`,
      String.raw`II has the wrong sign. From $t = 3.99$ to $t = 4$ the elapsed time is $4 - 3.99 = 0.01$, not $-0.01$, so II is the negative of the average velocity over $[3.99, 4]$.`,
      String.raw`III uses a good interval, $[3.99, 4.01]$, but that interval is $0.02$ second long. Dividing by $0.01$ doubles the average velocity.`,
      String.raw`Only I divides a change in position by the elapsed time. II has the wrong sign, and III divides by half the length of its interval.`,
    ], answer: 0 },
  { id: "q101-m4", type: "mcq", difficulty: "easy", skill: "u1", topic: "1.1", calc: false, set: "q101-s2",
    question: String.raw`What is the average rate of change of $F$ over the interval $2 \le t \le 6$, in gallons per hour?`,
    choices: ["$-2$", "$2$", "$-8$", "$-3$"],
    why: [
      String.raw`$\dfrac{F(6) - F(2)}{6 - 2} = \dfrac{16 - 24}{4} = -2$ gallons per hour. The amount of fuel is decreasing, so the rate is negative.`,
      String.raw`The change $16 - 24 = -8$ is negative because the amount of fuel falls. A positive answer reverses the sign.`,
      String.raw`$-8$ gallons is the change in the amount of fuel. It was not divided by the elapsed time, $4$ hours.`,
      String.raw`$-3$ is $\dfrac{F(6) - F(0)}{6 - 0} = \dfrac{16 - 34}{6}$, the average rate of change over $[0, 6]$, not over $[2, 6]$.`,
    ], answer: 0 },
  { id: "q101-m5", type: "mcq", difficulty: "easy", skill: "u1", topic: "1.1", calc: false,
    question: String.raw`Let $g(x) = \sqrt{x}$. The average rate of change of $g$ over which of the following intervals gives the best approximation of the instantaneous rate of change of $g$ at $x = 4$?`,
    choices: ["$[4, 4.001]$", "$[4, 4.1]$", "$[3, 5]$", "$[0, 4]$"],
    why: [
      String.raw`The shorter the interval that contains $x = 4$, the closer its average rate of change is to the rate at the instant $x = 4$. Over $[4, 4.001]$, the average rate of change is $\dfrac{\sqrt{4.001} - 2}{0.001} \approx 0.24998$, the closest of the four to the instantaneous rate of $0.25$.`,
      String.raw`$[4, 4.1]$ contains $x = 4$, but it is 100 times as long as $[4, 4.001]$. Its average rate of change, about $0.2485$, is a worse estimate.`,
      String.raw`$[3, 5]$ is centered at $x = 4$, but it is 2 units long. Its average rate of change, about $0.2520$, is a worse estimate than the one from $[4, 4.001]$.`,
      String.raw`$[0, 4]$ is 4 units long. Its average rate of change is $\dfrac{2 - 0}{4 - 0} = 0.5$, twice the rate at $x = 4$.`,
    ], answer: 0 },
  { id: "q101-m6", type: "mcq", difficulty: "difficult", skill: "u1", topic: "1.1", calc: false, set: "q101-s4",
    question: String.raw`Based on the table, which of the following best describes the velocity of the particle at the instant $t = 3$?`,
    choices: ["It does not exist.", "It is about $5$.", "It is about $2$.", "It is about $3.5$."],
    why: [
      String.raw`The velocity at $t = 3$ is the single value the average velocities approach as $h$ approaches $0$ from both sides. For $h < 0$ the averages $2.1$, $2.01$, $2.001$ approach $2$, and for $h > 0$ the averages $4.9$, $4.99$, $4.999$ approach $5$. The two sides approach different values, so the velocity at $t = 3$ does not exist, even though $s$ is continuous there.`,
      String.raw`$5$ is the value the averages approach only for $h > 0$, over intervals after $t = 3$. Over intervals before $t = 3$ the averages approach $2$.`,
      String.raw`$2$ is the value the averages approach only for $h < 0$, over intervals before $t = 3$. Over intervals after $t = 3$ the averages approach $5$.`,
      String.raw`$3.5$ is the mean of $2$ and $5$, the values the two sides approach. Averaging the two sides does not give a velocity at the instant, because no single value is approached.`,
    ], answer: 0 },

  { id: "q101-f1a", type: "frq", skill: "u1", topic: "1.1", calc: false, set: "q101-s3", part: "(a)",
    prompt: String.raw`Find the average velocity of the rock over the time interval $1 \le t \le 3$. Indicate units of measure.`,
    rows: [
      { name: "Setup", earns: String.raw`Writes the difference quotient $\dfrac{d(3) - d(1)}{3 - 1}$ with $d(3) = 44.1$ and $d(1) = 4.9$.` },
      { name: "Answer with units", earns: String.raw`$19.6$ meters per second.` },
    ],
    solution: String.raw`$d(3) = 4.9(9) = 44.1$ and $d(1) = 4.9$.
$$\text{Average velocity} = \dfrac{d(3) - d(1)}{3 - 1} = \dfrac{44.1 - 4.9}{2} = 19.6 \text{ meters per second}$$` },
  { id: "q101-f1b", type: "frq", skill: "u1", topic: "1.1", calc: false, set: "q101-s3", part: "(b)",
    prompt: String.raw`For $0 < h \le 1$, write and simplify an expression for the average velocity of the rock over the time interval $[2, 2 + h]$.`,
    rows: [
      { name: "Expression", earns: String.raw`$\dfrac{d(2 + h) - d(2)}{h}$ simplified to $19.6 + 4.9h$, with the algebra shown.` },
    ],
    solution: String.raw`$$\dfrac{d(2 + h) - d(2)}{h} = \dfrac{4.9(2 + h)^2 - 4.9(4)}{h} = \dfrac{4.9\left(4 + 4h + h^2 - 4\right)}{h} = \dfrac{4.9\left(4h + h^2\right)}{h} = 19.6 + 4.9h$$
The average velocity over $[2, 2 + h]$ is $19.6 + 4.9h$ meters per second.` },
  { id: "q101-f1c", type: "frq", skill: "u1", topic: "1.1", calc: false, set: "q101-s3", part: "(c)",
    prompt: String.raw`Use your result from part (b) to find the velocity of the rock at the instant $t = 2$. Explain your reasoning.`,
    rows: [
      { name: "Answer with reasoning", earns: String.raw`$19.6$ meters per second, because the average velocity $19.6 + 4.9h$ over $[2, 2 + h]$ approaches $19.6$ as $h$ approaches $0$.` },
    ],
    solution: String.raw`As $h$ approaches $0$, the interval $[2, 2 + h]$ shrinks to the instant $t = 2$, and the average velocity $19.6 + 4.9h$ approaches $19.6$. The velocity at $t = 2$ is the value these average velocities approach, so it is $19.6$ meters per second.` },
];

export default { forms: [{ id: "q101", name: "Topic 1.1 Quiz: Change at an Instant", group: "Unit 1: Limits and Continuity", items }] };

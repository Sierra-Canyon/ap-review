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
  "q101-s3": {
    name: "A rock dropped from a bridge", label: "Free response",
    intro: String.raw`A rock is dropped from a bridge. The distance, in meters, that the rock has fallen $t$ seconds after it is released is given by the function $d$ below, for $0 \le t \le 3$.`,
    sources: [{ title: "", blocks: [{ p: String.raw`$$d(t) = 4.9t^2$$` }] }],
  },
};

const items = [
  { id: "q101-m1", type: "mcq", skill: "u1", topic: "1.1", calc: false,
    stem: String.raw`A ball is thrown upward. Its height, in meters, $t$ seconds after it is thrown is $h(t) = 30t - 5t^2$.`,
    question: String.raw`What is the average velocity of the ball, in meters per second, over the interval $1 \le t \le 3$?`,
    choices: ["$10$", "$20$", "$35$", "$-10$"],
    why: [
      String.raw`$h(1) = 25$ and $h(3) = 45$, so the average velocity is $\dfrac{h(3) - h(1)}{3 - 1} = \dfrac{45 - 25}{2} = 10$ meters per second.`,
      String.raw`$20$ is the change in height, $h(3) - h(1)$. It was not divided by the length of the interval, $3 - 1 = 2$.`,
      String.raw`$35$ is the average of the two heights, $\dfrac{25 + 45}{2}$. That is a height in meters, not a rate of change.`,
      String.raw`$-10$ subtracts in the wrong order, $\dfrac{h(1) - h(3)}{3 - 1}$. The height increases from 25 meters to 45 meters, so the average velocity is positive.`,
    ], answer: 0 },
  { id: "q101-m2", type: "mcq", skill: "u1", topic: "1.1", calc: false, set: "q101-s1",
    question: String.raw`Based on the table, which of the following is the best estimate of the instantaneous rate of change of $f$ at $x = 2$?`,
    choices: ["$-0.25$", "$-0.23810$", "$0$", String.raw`It cannot be estimated, because the average rate of change is undefined when $h = 0$.`],
    why: [
      String.raw`As $h$ gets closer to $0$, the average rates of change $-0.23810$, $-0.24876$, and $-0.24988$ get closer to $-0.25$. The instantaneous rate of change at $x = 2$ is the value these averages approach, so the best estimate is $-0.25$.`,
      String.raw`$-0.23810$ is the average rate of change over the longest interval in the table, $[2, 2.1]$. Shorter intervals give better estimates of the rate at the instant $x = 2$.`,
      String.raw`The rate at an instant is not $0$ just because the interval shrinks to a point. The change in $f$ and the length of the interval both shrink, and their quotient approaches $-0.25$.`,
      String.raw`The average rate cannot be computed with $h = 0$, but the instantaneous rate is the value the averages approach as $h$ approaches $0$. The table shows that value is about $-0.25$.`,
    ], answer: 0 },
  { id: "q101-m3", type: "mcq", skill: "u1", topic: "1.1", calc: false,
    stem: String.raw`The position of a particle moving along a line is $s(t)$, where $t$ is measured in seconds.`,
    question: String.raw`Which of the following gives the best approximation of the velocity of the particle at the instant $t = 4$?`,
    choices: [String.raw`$\frac{s(4.01) - s(4)}{0.01}$`, String.raw`$\frac{s(4.01) - s(4)}{4}$`, String.raw`$s(4.01) - s(4)$`, String.raw`$\frac{s(4)}{4}$`],
    why: [
      String.raw`The velocity at an instant is approximated by the average velocity over a short interval that contains the instant. Over $[4, 4.01]$, the average velocity is the change in position divided by the elapsed time, $0.01$ seconds.`,
      String.raw`This divides the change in position by $4$, the time at the start of the interval, instead of by the elapsed time $4.01 - 4 = 0.01$.`,
      String.raw`This is the change in position over $[4, 4.01]$, a distance. It was not divided by the elapsed time of $0.01$ seconds.`,
      String.raw`$\dfrac{s(4)}{4}$ uses the whole interval $[0, 4]$ and also assumes $s(0) = 0$. An average over four seconds does not approximate the velocity at one instant.`,
    ], answer: 0 },
  { id: "q101-m4", type: "mcq", skill: "u1", topic: "1.1", calc: false, set: "q101-s2",
    question: String.raw`What is the average rate of change of $F$ over the interval $2 \le t \le 6$, in gallons per hour?`,
    choices: ["$-2$", "$2$", "$-8$", "$-3$"],
    why: [
      String.raw`$\dfrac{F(6) - F(2)}{6 - 2} = \dfrac{16 - 24}{4} = -2$ gallons per hour. The amount of fuel is decreasing, so the rate is negative.`,
      String.raw`The change $16 - 24 = -8$ is negative because the amount of fuel falls. A positive answer reverses the sign.`,
      String.raw`$-8$ gallons is the change in the amount of fuel. It was not divided by the elapsed time, $4$ hours.`,
      String.raw`$-3$ is $\dfrac{F(6) - F(0)}{6 - 0} = \dfrac{16 - 34}{6}$, the average rate of change over $[0, 6]$, not over $[2, 6]$.`,
    ], answer: 0 },
  { id: "q101-m5", type: "mcq", skill: "u1", topic: "1.1", calc: false,
    question: String.raw`Let $g(x) = \sqrt{x}$. The average rate of change of $g$ over which of the following intervals gives the best approximation of the instantaneous rate of change of $g$ at $x = 4$?`,
    choices: ["$[4, 4.001]$", "$[4, 4.1]$", "$[3, 5]$", "$[0, 4]$"],
    why: [
      String.raw`The shorter the interval that contains $x = 4$, the closer its average rate of change is to the rate at the instant $x = 4$. Over $[4, 4.001]$, the average rate of change is $\dfrac{\sqrt{4.001} - 2}{0.001} \approx 0.24998$, the closest of the four to the instantaneous rate of $0.25$.`,
      String.raw`$[4, 4.1]$ contains $x = 4$, but it is 100 times as long as $[4, 4.001]$. Its average rate of change, about $0.2485$, is a worse estimate.`,
      String.raw`$[3, 5]$ is centered at $x = 4$, but it is 2 units long. Its average rate of change, about $0.2520$, is a worse estimate than the one from $[4, 4.001]$.`,
      String.raw`$[0, 4]$ is 4 units long. Its average rate of change is $\dfrac{2 - 0}{4 - 0} = 0.5$, twice the rate at $x = 4$.`,
    ], answer: 0 },
  { id: "q101-m6", type: "mcq", skill: "u1", topic: "1.1", calc: false,
    stem: String.raw`The position of a car at time $t$ is $s(t)$. The velocity of the car at the instant $t = 3$ cannot be found directly as $\dfrac{\text{change in position}}{\text{change in time}}$.`,
    question: "Which of the following is the reason?",
    choices: [
      String.raw`At a single instant the change in time is $0$, so the quotient would be $\frac{0}{0}$, which is undefined.`,
      String.raw`At a single instant the change in position is $0$, so the velocity is $0$.`,
      String.raw`The position $s(3)$ is not defined at a single instant.`,
      String.raw`The velocity at $t = 3$ always equals the average velocity over $[0, 3]$.`,
    ],
    why: [
      String.raw`Over the "interval" from $t = 3$ to $t = 3$, both the change in position and the change in time are $0$, and $\frac{0}{0}$ is undefined. The velocity at the instant is found instead as the value that average velocities over shorter and shorter intervals containing $t = 3$ approach.`,
      String.raw`The change in position over a single instant is $0$, but so is the change in time. The quotient $\frac{0}{0}$ is undefined, not $0$, and a moving car does not have velocity $0$.`,
      String.raw`The car has a position at every instant, so $s(3)$ is defined. The problem is the change in time, which is $0$ at a single instant.`,
      String.raw`The average velocity over $[0, 3]$ describes three seconds of motion. It equals the velocity at $t = 3$ only by coincidence.`,
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

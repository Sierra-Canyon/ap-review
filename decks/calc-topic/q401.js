export const sets = {
  "q401-s1": { name: "Elevation of a road", label: "Table", intro: String.raw`A straight road leads away from a town. The elevation of the road, in feet, at a distance of $x$ miles from the town is given by a differentiable function $E$. Selected values of $E(x)$ and $E'(x)$ are shown in the table below.`,
    sources: [{ title: "", blocks: [{ table: { head: [String.raw`$x$ (miles)`, "$0$", "$2$", "$3$", "$5$"], rows: [[String.raw`$E(x)$ (feet)`, "$600$", "$840$", "$780$", "$620$"], [String.raw`$E'(x)$ (feet per mile)`, "$150$", "$20$", "$-90$", "$-60$"]] } }] }] },
  "q401-s9": { name: "Emptying a grain silo", label: "Free response", intro: String.raw`Grain is unloaded from a silo. The amount of grain in the silo, in tons, is modeled by $G(t) = 80 - 6t + 0.1t^2$, where $t$ is measured in hours and $0 \le t \le 20$.`,
    sources: [{ title: "", blocks: [{ p: String.raw`$$G(t) = 80 - 6t + 0.1t^2, \quad 0 \le t \le 20$$` }] }] },
};

const items = [
  { id: "q401-m01", type: "mcq", skill: "u4", topic: "4.1", calc: false, difficulty: "easy",
    stem: String.raw`A bakery's cost, in dollars, of making $n$ loaves of bread is $C(n)$.`,
    question: String.raw`Which of the following is the best interpretation of $C'(200) = 1.35$?`,
    choices: [
      String.raw`At 200 loaves, the cost is increasing at \$1.35 per loaf.`,
      String.raw`The total cost of making the first 200 loaves of bread is \$1.35.`,
      String.raw`The average cost of each of the first 200 loaves is \$1.35.`,
      String.raw`Making 200 more loaves after the first 200 would cost about \$1.35.`,
    ],
    why: [
      String.raw`$C'(200)$ is the rate of change of cost with respect to the number of loaves at $n = 200$. Its units are dollars per loaf, so when 200 loaves have been made, the cost is increasing at \$1.35 per loaf.`,
      String.raw`This reads $C'(200)$ as the value $C(200)$. The derivative is a rate, not a total cost.`,
      String.raw`This describes the average $\dfrac{C(200)}{200}$, not the instantaneous rate of change at $n = 200$.`,
      String.raw`The rate is per loaf. Two hundred more loaves would cost about $200(1.35) = 270$ dollars, not \$1.35.`,
    ], answer: 0 },
  { id: "q401-m02", type: "mcq", skill: "u4", topic: "4.1", calc: false, difficulty: "easy",
    stem: String.raw`The temperature of a lake, in degrees Celsius, at a depth of $h$ meters below the surface is $T(h)$.`,
    question: String.raw`What are the units of $T'(h)$?`,
    choices: ["degrees Celsius per meter", "meters of depth per degree Celsius", "degrees Celsius per minute", "degrees Celsius per meter per meter"],
    why: [
      String.raw`$T'(h)$ is the change in output per unit change in input: degrees Celsius per meter of depth.`,
      String.raw`These are the units of the rate of change of depth with respect to temperature, the reciprocal.`,
      String.raw`The input $h$ is a depth in meters, not a time, so the rate is per meter, not per minute.`,
      String.raw`These are the units of the second derivative $T''(h)$.`,
    ], answer: 0 },
  { id: "q401-m03", type: "mcq", skill: "u4", topic: "4.1", calc: false, difficulty: "easy", set: "q401-s1",
    question: String.raw`Based on the table, which of the following is true at $x = 3$ miles?`,
    choices: [
      "The elevation is decreasing at a rate of 90 feet per mile.",
      "The elevation is decreasing at a rate of 160 feet per mile.",
      "The elevation is increasing at a rate of 180 feet per mile.",
      "The elevation is decreasing at a rate of 780 feet per mile.",
    ],
    why: [
      String.raw`The rate of change of elevation at $x = 3$ is $E'(3) = -90$ feet per mile, read from the $E'(x)$ row. The negative sign means the elevation is decreasing there.`,
      String.raw`$E(3) - E(5) = 780 - 620 = 160$ feet is the total drop over the next 2 miles, not a rate at $x = 3$.`,
      String.raw`$E(3) - E(0) = 780 - 600 = 180$ feet is the total change in elevation from the town, not a rate at $x = 3$.`,
      String.raw`$780$ feet is the elevation $E(3)$, read from the wrong row. The rate is in the $E'(x)$ row.`,
    ], answer: 0 },
  { id: "q401-m04", type: "mcq", skill: "u4", topic: "4.1", calc: false, difficulty: "difficult",
    stem: String.raw`The number of fish in a lake $t$ years after a study begins is modeled by a twice-differentiable function $P$. It is known that $P(2) = 800$, $P'(2) = -40$, and $P''(2) = 6$.`,
    question: String.raw`Which of the following statements must be true?

I. At $t = 2$, the number of fish is decreasing at a rate of 40 fish per year.
II. At $t = 2$, the rate at which the number of fish decreases is getting smaller.
III. Exactly 760 fish are in the lake at $t = 3$.`,
    choices: ["I and II only", "I only", "I, II, and III", "I and III only"],
    why: [
      String.raw`I is true: $P'(2) = -40$ fish per year, so the number is decreasing at 40 fish per year. II is true: $P''(2) > 0$ means $P'$ is increasing at $t = 2$, so the negative rate moves toward $0$ and the decrease slows. III need not be true: $P'(2)$ is the rate at one instant, and the rate changes over the year, so $P(3)$ is only about $760$.`,
      String.raw`II is also true. A negative $P'$ that is increasing moves toward $0$, so the rate at which the number decreases is getting smaller.`,
      String.raw`III treats the rate at $t = 2$ as the exact change over the next year. Since $P''(2) \ne 0$, the rate is changing, so $800 - 40 = 760$ is only an estimate.`,
      String.raw`II is true and III is not. $P''(2) > 0$ means the decrease is slowing, and $760$ is only an estimate of $P(3)$, because the rate changes over the year.`,
    ], answer: 0 },
  { id: "q401-m05", type: "mcq", skill: "u4", topic: "4.1", calc: false, difficulty: "difficult",
    stem: String.raw`A plant's height, in centimeters, $w$ weeks after it is planted is $H(w)$, where $H$ is increasing. The function $W$ is the inverse of $H$, so $W(30)$ is the number of weeks it takes the plant to reach a height of 30 centimeters.`,
    question: String.raw`If $W'(30) = 0.4$, which of the following is true?`,
    choices: [
      "When the plant is 30 centimeters tall, it is growing at a rate of 2.5 centimeters per week.",
      "When the plant is 30 centimeters tall, it is growing at a rate of 0.4 centimeters per week.",
      "At 30 weeks, the plant is growing at a rate of 0.4 centimeters per week.",
      "At 30 weeks, the plant is growing at a rate of 2.5 centimeters per week.",
    ],
    why: [
      String.raw`$W'(30) = 0.4$ weeks per centimeter at a height of 30 centimeters. The growth rate is the reciprocal, $H'(W(30)) = \dfrac{1}{0.4} = 2.5$ centimeters per week, at the moment the height is 30 centimeters.`,
      String.raw`$0.4$ has units of weeks per centimeter. The growth rate in centimeters per week is its reciprocal, $2.5$.`,
      String.raw`The input of $W$ is a height, not a time, and $0.4$ is in weeks per centimeter, not centimeters per week.`,
      String.raw`The reciprocal $2.5$ is right, but the input 30 is a height of 30 centimeters, not 30 weeks.`,
    ], answer: 0 },
  { id: "q401-m06", type: "mcq", skill: "u4", topic: "4.1", calc: true, difficulty: "easy",
    stem: String.raw`The amount of a medicine in a patient's bloodstream, in milligrams, $t$ hours after it is given is $M(t) = 40te^{-0.3t}$.`,
    question: String.raw`Which of the following is a correct interpretation of $M'(5)$?`,
    choices: [
      String.raw`At $t = 5$ hours, the amount of medicine is decreasing at a rate of $4.463$ milligrams per hour.`,
      String.raw`At $t = 5$ hours, the amount of medicine is increasing at a rate of $4.463$ milligrams per hour.`,
      String.raw`At $t = 5$ hours, the amount of medicine is increasing at a rate of $8.925$ milligrams per hour.`,
      String.raw`At $t = 5$ hours, the amount of medicine is decreasing at a rate of $44.626$ milligrams per hour.`,
    ],
    why: [
      String.raw`$M'(t) = 40e^{-0.3t}(1 - 0.3t)$, so $M'(5) = -20e^{-1.5} \approx -4.463$. The negative sign means the amount is decreasing at 4.463 milligrams per hour.`,
      String.raw`The magnitude is right, but $M'(5) \approx -4.463$ is negative, so the amount is decreasing.`,
      String.raw`$\dfrac{M(5) - M(0)}{5} \approx 8.925$ is the average rate of change over the first 5 hours, not the rate at $t = 5$.`,
      String.raw`$M(5) = 200e^{-1.5} \approx 44.626$ milligrams is the amount of medicine at $t = 5$, not its rate of change.`,
    ], answer: 0 },
  { id: "q401-f1a", type: "frq", skill: "u4", topic: "4.1", calc: false, set: "q401-s9", part: "(a)",
    prompt: String.raw`Find $G'(10)$. Using correct units, interpret the meaning of $G'(10)$ in the context of the problem.`,
    rows: [
      { name: "Answer", earns: String.raw`$G'(10) = -4$, from $G'(t) = -6 + 0.2t$.` },
      { name: "Interpretation", earns: String.raw`At time $t = 10$ hours, the amount of grain in the silo is decreasing at a rate of 4 tons per hour.` },
    ],
    solution: String.raw`$G'(t) = -6 + 0.2t$, so $G'(10) = -6 + 2 = -4$. At time $t = 10$ hours, the amount of grain in the silo is decreasing at a rate of 4 tons per hour.` },
  { id: "q401-f1b", type: "frq", skill: "u4", topic: "4.1", calc: false, set: "q401-s9", part: "(b)",
    prompt: String.raw`Find $G''(10)$, with units. At $t = 10$, is the rate at which the amount of grain is decreasing getting larger or smaller? Give a reason for your answer.`,
    rows: [
      { name: "Second derivative", earns: String.raw`$G''(10) = 0.2$ tons per hour per hour.` },
      { name: "Answer with reason", earns: String.raw`Smaller, because $G'(10) < 0$ and $G''(10) > 0$, so the negative rate $G'$ is increasing toward $0$.` },
    ],
    solution: String.raw`$G''(t) = 0.2$, so $G''(10) = 0.2$ tons per hour per hour. Since $G'(10) = -4 < 0$ and $G''(10) = 0.2 > 0$, the rate $G'$ is negative and increasing toward $0$. The amount of grain is decreasing, and the rate at which it decreases is getting smaller.` },
];

export default { forms: [{ id: "q401", name: "Topic 4.1 Quiz: The Derivative in Context", group: "Unit 4: Contextual Applications of Differentiation", items }] };

export const sets = {
  "q701-s9": { name: "A cooling cake", label: "Free response", intro: String.raw`A cake is taken out of an oven and placed in a kitchen where the air temperature is a constant 70 degrees Fahrenheit. The temperature of the cake at time $t$ minutes is $T(t)$ degrees Fahrenheit. The rate at which the temperature of the cake changes is proportional to the difference between the temperature of the cake and the temperature of the kitchen. At time $t = 0$, the temperature of the cake is 350 degrees Fahrenheit and is decreasing at a rate of 14 degrees Fahrenheit per minute.`,
    sources: [{ title: "", blocks: [{ p: String.raw`$$T(0) = 350, \quad T'(0) = -14$$` }] }] },
};

const items = [
  { id: "q701-m01", type: "mcq", skill: "u7", topic: "7.1", calc: false,
    question: String.raw`The population $P$ of a town grows at a rate proportional to the square root of the population. If $k$ is a positive constant, which differential equation models this situation?`,
    choices: [String.raw`$\dfrac{dP}{dt} = k\sqrt{P}$`, String.raw`$\dfrac{dP}{dt} = kP$`, String.raw`$P = k\sqrt{t}$`, String.raw`$\dfrac{dP}{dt} = k\sqrt{t}$`],
    why: [
      String.raw`"The rate at which $P$ grows" is $\dfrac{dP}{dt}$, and "proportional to the square root of the population" means a constant times $\sqrt{P}$.`,
      String.raw`This rate is proportional to the population itself, not to its square root.`,
      String.raw`This describes the population, not its rate of change. The statement is about $\dfrac{dP}{dt}$.`,
      String.raw`This rate is proportional to the square root of time. The statement says the square root of the population.`,
    ], answer: 0 },
  { id: "q701-m02", type: "mcq", skill: "u7", topic: "7.1", calc: false,
    question: String.raw`A bowl of soup is left in a room kept at 20 degrees Celsius. The temperature $H$ of the soup, in degrees Celsius, changes at a rate proportional to the difference between the temperature of the soup and the temperature of the room. Which differential equation models this situation, where $k$ is a constant?`,
    choices: [String.raw`$\dfrac{dH}{dt} = k(H - 20)$`, String.raw`$\dfrac{dH}{dt} = kH - 20$`, String.raw`$\dfrac{dH}{dt} = k(t - 20)$`, String.raw`$\dfrac{dH}{dt} = \dfrac{k}{H - 20}$`],
    why: [
      String.raw`The difference between the two temperatures is $H - 20$, and the rate of change $\dfrac{dH}{dt}$ is a constant times that difference.`,
      String.raw`Only $H$ is multiplied by $k$ here. The whole difference $H - 20$ must be multiplied by the constant.`,
      String.raw`This uses time $t$ in place of the soup's temperature $H$.`,
      String.raw`This rate is inversely proportional to the difference, not proportional to it.`,
    ], answer: 0 },
  { id: "q701-m03", type: "mcq", skill: "u7", topic: "7.1", calc: false,
    question: String.raw`Water drains from a tank so that the depth $h$ of the water decreases at a rate proportional to the square root of the depth. If $k$ is a positive constant, which differential equation models this situation?`,
    choices: [String.raw`$\dfrac{dh}{dt} = -k\sqrt{h}$`, String.raw`$\dfrac{dh}{dt} = k\sqrt{h}$`, String.raw`$\dfrac{dh}{dt} = -kh$`, String.raw`$\dfrac{dh}{dt} = -k\sqrt{t}$`],
    why: [
      String.raw`The depth decreases, so $\dfrac{dh}{dt} < 0$. With $k > 0$, the rate is $-k\sqrt{h}$.`,
      String.raw`With $k > 0$, this rate is positive, so the depth would increase. The depth decreases.`,
      String.raw`This rate is proportional to the depth, not to the square root of the depth.`,
      String.raw`This rate depends on the square root of time. The statement says the square root of the depth.`,
    ], answer: 0 },
  { id: "q701-m04", type: "mcq", skill: "u7", topic: "7.1", calc: false,
    stem: String.raw`The amount $Q$ of a chemical in a tank, in grams, at time $t$ minutes satisfies the differential equation $\dfrac{dQ}{dt} = 6 - 0.5Q$.`,
    question: String.raw`At the instant when the tank contains 8 grams of the chemical, at what rate is the amount changing, in grams per minute?`,
    choices: ["$2$", "$4$", "$10$", "$8$"],
    why: [
      String.raw`Substitute $Q = 8$: $\dfrac{dQ}{dt} = 6 - 0.5(8) = 6 - 4 = 2$. The amount is increasing at 2 grams per minute.`,
      String.raw`$0.5(8) = 4$ is only the second term. The rate is $6 - 4$.`,
      String.raw`This adds $0.5Q$ in place of subtracting it: $6 + 4 = 10$.`,
      String.raw`$8$ is the amount $Q$, not its rate of change $\dfrac{dQ}{dt}$.`,
    ], answer: 0 },
  { id: "q701-m05", type: "mcq", skill: "u7", topic: "7.1", calc: false,
    question: String.raw`The rate of change of $y$ with respect to $x$ is inversely proportional to the cube of $x$. If $k$ is a nonzero constant, which differential equation describes this relationship?`,
    choices: [String.raw`$\dfrac{dy}{dx} = \dfrac{k}{x^3}$`, String.raw`$\dfrac{dy}{dx} = kx^3$`, String.raw`$\dfrac{dy}{dx} = \dfrac{k}{y^3}$`, String.raw`$y = \dfrac{k}{x^3}$`],
    why: [
      String.raw`"Inversely proportional to the cube of $x$" means a constant divided by $x^3$, and the quantity is the rate of change $\dfrac{dy}{dx}$.`,
      String.raw`This rate is directly proportional to $x^3$, not inversely proportional.`,
      String.raw`This uses the cube of $y$. The statement says the cube of $x$.`,
      String.raw`This describes $y$, not its rate of change $\dfrac{dy}{dx}$.`,
    ], answer: 0 },
  { id: "q701-m06", type: "mcq", skill: "u7", topic: "7.1", calc: false,
    question: String.raw`A pump adds a medicine to a patient's bloodstream at a constant rate of 5 milligrams per hour. At the same time, the body removes the medicine at a rate proportional to the amount $A$ of medicine present, in milligrams. If $k$ is a positive constant, which differential equation models the amount of medicine in the bloodstream?`,
    choices: [String.raw`$\dfrac{dA}{dt} = 5 - kA$`, String.raw`$\dfrac{dA}{dt} = kA - 5$`, String.raw`$\dfrac{dA}{dt} = -kA$`, String.raw`$A = 5 - kt$`],
    why: [
      String.raw`The rate of change is the rate in minus the rate out. The pump adds 5 milligrams per hour and the body removes $kA$ milligrams per hour, so $\dfrac{dA}{dt} = 5 - kA$.`,
      String.raw`The signs are reversed: this treats the removal as an addition and the pump as a removal.`,
      String.raw`This models only the removal and leaves out the 5 milligrams per hour added by the pump.`,
      String.raw`This is a linear formula for the amount, not a differential equation, and it leaves out the dependence of the removal rate on $A$.`,
    ], answer: 0 },
  { id: "q701-f1a", type: "frq", skill: "u7", topic: "7.1", calc: false, set: "q701-s9", part: "(a)",
    prompt: String.raw`Write a differential equation for $\dfrac{dT}{dt}$ that models this situation, and find the value of the constant of proportionality.`,
    rows: [
      { name: "Differential equation", earns: String.raw`$\dfrac{dT}{dt} = k(T - 70)$.` },
      { name: "Constant", earns: String.raw`Uses $T(0) = 350$ and $T'(0) = -14$ to find $k = -0.05$ (or $k = 0.05$ if the equation is written as $\dfrac{dT}{dt} = -k(T - 70)$).` },
    ],
    solution: String.raw`The difference between the temperatures is $T - 70$, so $\dfrac{dT}{dt} = k(T - 70)$. At $t = 0$: $-14 = k(350 - 70) = 280k$, so $k = -\dfrac{14}{280} = -0.05$. The differential equation is $\dfrac{dT}{dt} = -0.05(T - 70)$.` },
  { id: "q701-f1b", type: "frq", skill: "u7", topic: "7.1", calc: false, set: "q701-s9", part: "(b)",
    prompt: String.raw`Find the rate at which the temperature of the cake is changing when its temperature is 150 degrees Fahrenheit. Indicate units of measure.`,
    rows: [
      { name: "Answer with units", earns: String.raw`$\dfrac{dT}{dt} = -4$ degrees Fahrenheit per minute.` },
    ],
    solution: String.raw`$\dfrac{dT}{dt} = -0.05(150 - 70) = -0.05(80) = -4$. The temperature is decreasing at 4 degrees Fahrenheit per minute.` },
  { id: "q701-f1c", type: "frq", skill: "u7", topic: "7.1", calc: false, set: "q701-s9", part: "(c)",
    prompt: String.raw`Use the differential equation to explain why the cake cools more slowly as its temperature approaches 70 degrees Fahrenheit.`,
    rows: [
      { name: "Explanation", earns: String.raw`$\left| \dfrac{dT}{dt} \right| = 0.05(T - 70)$ for $T > 70$, which decreases toward $0$ as $T$ decreases toward $70$.` },
    ],
    solution: String.raw`For $T > 70$, $\dfrac{dT}{dt} = -0.05(T - 70) < 0$, so the cake is cooling, and the rate of cooling is $\left| \dfrac{dT}{dt} \right| = 0.05(T - 70)$. As $T$ decreases toward $70$, the factor $T - 70$ decreases toward $0$, so the rate of cooling decreases toward $0$.` },
];

export default { forms: [{ id: "q701", name: "Topic 7.1 Quiz: Modeling with Differential Equations", group: "Unit 7: Differential Equations", items }] };

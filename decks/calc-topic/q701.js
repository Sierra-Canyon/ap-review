export const sets = {
  "q701-s9": { name: "A cooling cake", label: "Free response", intro: String.raw`A cake is taken out of an oven and placed in a kitchen where the air temperature is a constant 65 degrees Fahrenheit. The temperature of the cake at time $t$ minutes is $T(t)$ degrees Fahrenheit. The rate at which the temperature of the cake changes is proportional to the difference between the temperature of the cake and the temperature of the kitchen. At time $t = 0$, the temperature of the cake is 345 degrees Fahrenheit and is decreasing at a rate of 14 degrees Fahrenheit per minute.`,
    sources: [{ title: "", blocks: [{ p: String.raw`$$T(0) = 345, \quad T'(0) = -14$$` }] }] },
};

const items = [
  { id: "q701-m01", type: "mcq", skill: "u7", topic: "7.1", calc: false, difficulty: "easy",
    question: String.raw`A spherical snowball melts so that its volume $V$ decreases at a rate proportional to its surface area $A$. If $k$ is a positive constant, which differential equation models this situation?`,
    choices: [String.raw`$\dfrac{dV}{dt} = -kA$`, String.raw`$\dfrac{dV}{dt} = kA$`, String.raw`$\dfrac{dV}{dt} = -kV$`, String.raw`$\dfrac{dA}{dt} = -kV$`],
    why: [
      String.raw`The rate at which the volume changes is $\dfrac{dV}{dt}$. It is a constant times the surface area, and the volume decreases, so with $k > 0$ the rate is $-kA$.`,
      String.raw`With $k > 0$ this rate is positive, so the volume would increase. The snowball is melting, so its volume decreases.`,
      String.raw`This makes the rate proportional to the volume. The statement says the rate is proportional to the surface area.`,
      String.raw`This swaps the two quantities: it gives the rate of change of the surface area in terms of the volume.`,
    ], answer: 0 },
  { id: "q701-m02", type: "mcq", skill: "u7", topic: "7.1", calc: false, difficulty: "moderate",
    question: String.raw`The volume of timber $V$ in a forest, in cubic meters, grows at a rate of 5 percent of the volume per year. At the same time, timber is harvested at a constant rate of 2000 cubic meters per year. Which differential equation models the volume of timber, where $t$ is measured in years?`,
    choices: [String.raw`$\dfrac{dV}{dt} = 0.05V - 2000$`, String.raw`$\dfrac{dV}{dt} = 5V - 2000$`, String.raw`$\dfrac{dV}{dt} = 0.05V + 2000$`, String.raw`$\dfrac{dV}{dt} = 0.05(V - 2000)$`],
    why: [
      String.raw`The growth is 5 percent of the volume, $0.05V$ cubic meters per year, and the harvest removes 2000 cubic meters per year, so $\dfrac{dV}{dt} = 0.05V - 2000$.`,
      String.raw`This uses 5 in place of 5 percent. As a decimal, 5 percent is $0.05$.`,
      String.raw`The harvest removes timber, so its rate is subtracted, not added.`,
      String.raw`This multiplies the harvest by $0.05$ as well, so it removes only 100 cubic meters per year. The harvest rate is 2000 cubic meters per year.`,
    ], answer: 0 },
  { id: "q701-m03", type: "mcq", skill: "u7", topic: "7.1", calc: false, difficulty: "moderate",
    question: String.raw`The rate of change of $y$ with respect to $x$ is directly proportional to $x$ and inversely proportional to the square of $y$. If $k$ is a nonzero constant, which differential equation describes this relationship?`,
    choices: [String.raw`$\dfrac{dy}{dx} = \dfrac{kx}{y^2}$`, String.raw`$\dfrac{dy}{dx} = kxy^2$`, String.raw`$\dfrac{dy}{dx} = \dfrac{ky^2}{x}$`, String.raw`$\dfrac{dy}{dx} = \dfrac{k}{xy^2}$`],
    why: [
      String.raw`"Directly proportional to $x$" puts $x$ in the numerator, and "inversely proportional to the square of $y$" puts $y^2$ in the denominator, so $\dfrac{dy}{dx} = \dfrac{kx}{y^2}$.`,
      String.raw`This makes the rate directly proportional to $y^2$. Inversely proportional means $y^2$ goes in the denominator.`,
      String.raw`This reverses both relationships: it is inversely proportional to $x$ and directly proportional to $y^2$.`,
      String.raw`This makes the rate inversely proportional to $x$ as well. The rate is directly proportional to $x$, so $x$ goes in the numerator.`,
    ], answer: 0 },
  { id: "q701-m04", type: "mcq", skill: "u7", topic: "7.1", calc: false, difficulty: "easy",
    stem: String.raw`The amount $Q$ of a chemical in a tank, in grams, at time $t$ minutes satisfies the differential equation $\dfrac{dQ}{dt} = 6 - 0.5Q$.`,
    question: String.raw`At the instant when the tank contains 8 grams of the chemical, at what rate is the amount changing, in grams per minute?`,
    choices: ["$2$", "$10$", "$-2$", "$44$"],
    why: [
      String.raw`Substitute $Q = 8$: $\dfrac{dQ}{dt} = 6 - 0.5(8) = 6 - 4 = 2$. The amount is increasing at 2 grams per minute.`,
      String.raw`This adds $0.5Q$ in place of subtracting it: $6 + 4 = 10$.`,
      String.raw`This subtracts in the wrong order: $0.5(8) - 6 = -2$.`,
      String.raw`This subtracts before multiplying: $(6 - 0.5)(8) = 44$. The product $0.5Q$ is computed first.`,
    ], answer: 0 },
  { id: "q701-m05", type: "mcq", skill: "u7", topic: "7.1", calc: false, difficulty: "easy",
    question: String.raw`The rate of change of $y$ with respect to $x$ is inversely proportional to the cube of $x$. If $k$ is a nonzero constant, which differential equation describes this relationship?`,
    choices: [String.raw`$\dfrac{dy}{dx} = \dfrac{k}{x^3}$`, String.raw`$\dfrac{dy}{dx} = kx^3$`, String.raw`$\dfrac{dy}{dx} = \dfrac{k}{y^3}$`, String.raw`$y = \dfrac{k}{x^3}$`],
    why: [
      String.raw`"Inversely proportional to the cube of $x$" means a constant divided by $x^3$, and the quantity is the rate of change $\dfrac{dy}{dx}$.`,
      String.raw`This rate is directly proportional to $x^3$, not inversely proportional.`,
      String.raw`This uses the cube of $y$. The statement says the cube of $x$.`,
      String.raw`This describes $y$, not its rate of change $\dfrac{dy}{dx}$.`,
    ], answer: 0 },
  { id: "q701-m06", type: "mcq", skill: "u7", topic: "7.1", calc: false, difficulty: "difficult",
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
      { name: "Differential equation", earns: String.raw`$\dfrac{dT}{dt} = k(T - 65)$.` },
      { name: "Constant", earns: String.raw`Uses $T(0) = 345$ and $T'(0) = -14$ to find $k = -0.05$ (or $k = 0.05$ if the equation is written as $\dfrac{dT}{dt} = -k(T - 65)$).` },
    ],
    solution: String.raw`The difference between the temperatures is $T - 65$, so $\dfrac{dT}{dt} = k(T - 65)$. At $t = 0$: $-14 = k(345 - 65) = 280k$, so $k = -\dfrac{14}{280} = -0.05$. The differential equation is $\dfrac{dT}{dt} = -0.05(T - 65)$.` },
  { id: "q701-f1b", type: "frq", skill: "u7", topic: "7.1", calc: false, set: "q701-s9", part: "(b)",
    prompt: String.raw`Find the rate at which the temperature of the cake is changing when its temperature is 145 degrees Fahrenheit. Indicate units of measure.`,
    rows: [
      { name: "Answer with units", earns: String.raw`$\dfrac{dT}{dt} = -4$ degrees Fahrenheit per minute.` },
    ],
    solution: String.raw`$\dfrac{dT}{dt} = -0.05(145 - 65) = -0.05(80) = -4$. The temperature is decreasing at 4 degrees Fahrenheit per minute.` },
  { id: "q701-f1c", type: "frq", skill: "u7", topic: "7.1", calc: false, set: "q701-s9", part: "(c)",
    prompt: String.raw`Use the differential equation to explain why the cake cools more slowly as its temperature approaches 65 degrees Fahrenheit.`,
    rows: [
      { name: "Explanation", earns: String.raw`$\left| \dfrac{dT}{dt} \right| = 0.05(T - 65)$ for $T > 65$, which decreases toward $0$ as $T$ decreases toward $65$.` },
    ],
    solution: String.raw`For $T > 65$, $\dfrac{dT}{dt} = -0.05(T - 65) < 0$, so the cake is cooling, and the rate of cooling is $\left| \dfrac{dT}{dt} \right| = 0.05(T - 65)$. As $T$ decreases toward $65$, the factor $T - 65$ decreases toward $0$, so the rate of cooling decreases toward $0$.` },
];

export default { forms: [{ id: "q701", name: "Topic 7.1 Quiz: Modeling with Differential Equations", group: "Unit 7: Differential Equations", items }] };

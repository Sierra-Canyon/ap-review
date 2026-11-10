export const sets = {
  "q708-s9": { name: "Medicine in the bloodstream", label: "Free response", intro: String.raw`The amount of a medicine in a patient's bloodstream, in milligrams, $t$ hours after an injection is $M(t)$. The amount decreases at a rate proportional to the amount present, so $\dfrac{dM}{dt} = kM$ for some constant $k$. At $t = 0$ there are 250 milligrams in the bloodstream, and at $t = 3$ there are 160 milligrams.`,
    sources: [{ title: "", blocks: [{ p: String.raw`$$\dfrac{dM}{dt} = kM, \quad M(0) = 250, \quad M(3) = 160$$` }] }] },
};

const items = [
  { id: "q708-m01", type: "mcq", skill: "u7", topic: "7.8", calc: false, difficulty: "easy",
    question: String.raw`Which function is the solution to the differential equation $\dfrac{dy}{dt} = -0.3y$ with $y(0) = 50$?`,
    choices: [String.raw`$y = 50e^{-0.3t}$`, String.raw`$y = 50e^{0.3t}$`, String.raw`$y = e^{-0.3t} + 49$`, String.raw`$y = 50 - 0.3t$`],
    why: [
      String.raw`A solution of $\dfrac{dy}{dt} = ky$ is $y = y_0e^{kt}$. Here $k = -0.3$ and $y_0 = 50$.`,
      String.raw`The sign of the exponent is the sign of $k$, which is $-0.3$. This function grows.`,
      String.raw`The initial value multiplies the exponential; it is not added. Here $\dfrac{dy}{dt} = -0.3e^{-0.3t}$, which is not $-0.3y$.`,
      String.raw`This decreases at the constant rate $0.3$, but the rate of change must be $-0.3y$, which depends on $y$.`,
    ], answer: 0 },
  { id: "q708-m02", type: "mcq", skill: "u7", topic: "7.8", calc: false, difficulty: "easy",
    question: String.raw`A population $P$ grows at a rate proportional to its size, $\dfrac{dP}{dt} = kP$, where $t$ is measured in years. Every 4 years the population increases by 50 percent. What is the value of $k$?`,
    choices: [String.raw`$\dfrac{\ln 1.5}{4}$`, String.raw`$\dfrac{4}{\ln 1.5}$`, String.raw`$\dfrac{\ln 0.5}{4}$`, String.raw`$\dfrac{0.5}{4}$`],
    why: [
      String.raw`$P = P_0e^{kt}$, and an increase of 50 percent in 4 years means $e^{4k} = 1.5$. Then $4k = \ln 1.5$ and $k = \dfrac{\ln 1.5}{4}$.`,
      String.raw`This is the reciprocal of $k$: it solves $4k = \ln 1.5$ as $k = \dfrac{4}{\ln 1.5}$.`,
      String.raw`This uses the increase, $0.5$, in place of the growth factor, $1.5$. Since $\ln 0.5 < 0$, it would make the population decrease.`,
      String.raw`This divides the 50 percent increase by 4 years, as if the growth were linear. The exponent requires $\ln 1.5$.`,
    ], answer: 0 },
  { id: "q708-m03", type: "mcq", skill: "u7", topic: "7.8", calc: false, difficulty: "moderate",
    question: String.raw`A radioactive substance decays according to $\dfrac{dy}{dt} = ky$. A sample of 80 grams decays to 20 grams in 10 hours. What is the half-life of the substance?`,
    choices: ["5 hours", "10 hours", "2.5 hours", "20 hours"],
    why: [
      String.raw`From 80 to 20 grams the amount is multiplied by $\dfrac{1}{4} = \left(\dfrac{1}{2}\right)^2$, which is two half-lives. Two half-lives take 10 hours, so one takes 5 hours. Check: $e^{10k} = \dfrac{1}{4}$ gives $k = -\dfrac{\ln 4}{10}$, and the half-life is $\dfrac{\ln 2}{|k|} = \dfrac{10\ln 2}{2\ln 2} = 5$.`,
      String.raw`In 10 hours the amount falls to one fourth, not one half. Ten hours is two half-lives.`,
      String.raw`This divides 10 hours by 4, treating the decrease to one fourth as four half-lives. One fourth is $\left(\dfrac{1}{2}\right)^2$, two half-lives.`,
      String.raw`This doubles the time in place of halving it. In 10 hours the amount has halved twice.`,
    ], answer: 0 },
  { id: "q708-m04", type: "mcq", skill: "u7", topic: "7.8", calc: true, difficulty: "difficult",
    question: String.raw`The amount of caffeine in a person's bloodstream decreases at a rate proportional to the amount present. There are 160 milligrams at $t = 0$ and 115 milligrams at $t = 2$ hours. At what time $t$, in hours, will 40 milligrams remain?`,
    choices: ["$8.396$", "$5.333$", "$4.198$", "$1.742$"],
    why: [
      String.raw`$A = 160e^{kt}$ with $e^{2k} = \dfrac{115}{160}$, so $k = \dfrac{1}{2}\ln\dfrac{115}{160} \approx -0.16511$. Then $160e^{kt} = 40$ gives $t = \dfrac{\ln 0.25}{k} \approx 8.396$ hours.`,
      String.raw`This assumes a constant loss of 22.5 milligrams per hour: $\dfrac{160 - 40}{22.5} \approx 5.333$. A rate proportional to the amount gives exponential decay, which slows down.`,
      String.raw`This uses $k = \ln\dfrac{115}{160}$ without dividing by the 2 hours: $\dfrac{\ln 0.25}{\ln(115/160)} \approx 4.198$.`,
      String.raw`This finds when 40 milligrams have been removed, solving $160e^{kt} = 120$. The question asks when 40 milligrams remain.`,
    ], answer: 0 },
  { id: "q708-m05", type: "mcq", skill: "u7", topic: "7.8", calc: false, difficulty: "moderate",
    question: String.raw`A quantity $y$ satisfies $\dfrac{dy}{dt} = ky$ for a constant $k$, with $y(0) = 12$ and $y(2) = 3$. What is $y(4)$?`,
    choices: [String.raw`$\dfrac{3}{4}$`, "$-6$", String.raw`$\dfrac{3}{2}$`, String.raw`$\dfrac{1}{16}$`],
    why: [
      String.raw`$y = 12e^{kt}$ with $e^{2k} = \dfrac{3}{12} = \dfrac{1}{4}$. Then $y(4) = 12\left(e^{2k}\right)^2 = 12 \cdot \dfrac{1}{16} = \dfrac{3}{4}$.`,
      String.raw`This assumes the quantity falls by the same amount, 9, every 2 units of time. Exponential change multiplies by the same factor, $\dfrac{1}{4}$, every 2 units of time.`,
      String.raw`This halves $3$, but over 2 units of time the quantity is multiplied by $\dfrac{1}{4}$, not $\dfrac{1}{2}$.`,
      String.raw`$\left(\dfrac{1}{4}\right)^2 = \dfrac{1}{16}$ is the factor $e^{4k}$. It must multiply the initial amount $12$.`,
    ], answer: 0 },
  { id: "q708-m06", type: "mcq", skill: "u7", topic: "7.8", calc: false, difficulty: "easy",
    question: String.raw`The amount of a substance is $y = 300e^{-0.2t}$, a solution of $\dfrac{dy}{dt} = -0.2y$. At what time $t$ is $y = 150$?`,
    choices: [String.raw`$5\ln 2$`, String.raw`$0.2\ln 2$`, String.raw`$-5\ln 2$`, "$2.5$"],
    why: [
      String.raw`$300e^{-0.2t} = 150$ gives $e^{-0.2t} = \dfrac{1}{2}$, so $-0.2t = -\ln 2$ and $t = \dfrac{\ln 2}{0.2} = 5\ln 2$.`,
      String.raw`This multiplies $\ln 2$ by $0.2$ in place of dividing by it.`,
      String.raw`$\ln\dfrac{1}{2} = -\ln 2$ and the coefficient $-0.2$ is also negative, so the two negatives cancel and $t$ is positive.`,
      String.raw`This uses the starting rate $0.2(300) = 60$ as if it stayed constant, $\dfrac{150}{60} = 2.5$, treating the decay as linear. The rate of decay slows as $y$ decreases.`,
    ], answer: 0 },
  { id: "q708-f1a", type: "frq", skill: "u7", topic: "7.8", calc: true, set: "q708-s9", part: "(a)",
    prompt: String.raw`Write an expression for $M(t)$ and find the value of $k$.`,
    rows: [
      { name: "Model", earns: String.raw`$M(t) = 250e^{kt}$.` },
      { name: "Constant", earns: String.raw`$k = \dfrac{1}{3}\ln\left(\dfrac{160}{250}\right) \approx -0.149$.` },
    ],
    solution: String.raw`A solution of $\dfrac{dM}{dt} = kM$ with $M(0) = 250$ is $M(t) = 250e^{kt}$. From $M(3) = 160$: $e^{3k} = \dfrac{160}{250} = 0.64$, so $k = \dfrac{\ln 0.64}{3} \approx -0.149$ (more precisely $-0.148762$). Then $M(t) = 250e^{-0.148762t}$.` },
  { id: "q708-f1b", type: "frq", skill: "u7", topic: "7.8", calc: true, set: "q708-s9", part: "(b)",
    prompt: String.raw`At what time $t$ will the amount of medicine in the bloodstream be 50 milligrams?`,
    rows: [
      { name: "Answer", earns: String.raw`Solves $250e^{kt} = 50$: $t \approx 10.819$ hours.` },
    ],
    solution: String.raw`$250e^{kt} = 50$ gives $e^{kt} = 0.2$, so $t = \dfrac{\ln 0.2}{k} = \dfrac{3\ln 0.2}{\ln 0.64} \approx 10.819$ hours.` },
  { id: "q708-f1c", type: "frq", skill: "u7", topic: "7.8", calc: true, set: "q708-s9", part: "(c)",
    prompt: String.raw`Find the rate at which the amount of medicine is changing at time $t = 3$ hours. Indicate units of measure.`,
    rows: [
      { name: "Answer with units", earns: String.raw`$M'(3) = 160k \approx -23.802$ milligrams per hour.` },
    ],
    solution: String.raw`$M'(3) = kM(3) = 160k = 160 \cdot \dfrac{\ln 0.64}{3} \approx -23.802$. The amount of medicine is decreasing at about 23.802 milligrams per hour.` },
];

export default { forms: [{ id: "q708", name: "Topic 7.8 Quiz: Exponential Models", group: "Unit 7: Differential Equations", items }] };

export const sets = {
  "q702-s9": { name: "A family of solutions", label: "Free response", intro: String.raw`Consider the differential equation $\dfrac{dy}{dx} = x - y$.`,
    sources: [{ title: "", blocks: [{ p: String.raw`$$\dfrac{dy}{dx} = x - y$$` }] }] },
};

const items = [
  { id: "q702-m01", type: "mcq", skill: "u7", topic: "7.2", calc: false, difficulty: "easy",
    question: String.raw`The function $y = 4e^{-x/2}$ is a solution of which of the following differential equations?`,
    choices: [String.raw`$\dfrac{dy}{dx} = -\dfrac{y}{2}$`, String.raw`$\dfrac{dy}{dx} = -2y$`, String.raw`$\dfrac{dy}{dx} = \dfrac{y}{2}$`, String.raw`$\dfrac{dy}{dx} = 4y$`],
    why: [
      String.raw`$\dfrac{dy}{dx} = 4e^{-x/2} \cdot \left(-\dfrac{1}{2}\right) = -2e^{-x/2}$, and $-\dfrac{y}{2} = -\dfrac{4e^{-x/2}}{2} = -2e^{-x/2}$. The two sides are equal.`,
      String.raw`This uses the reciprocal of the constant in the exponent. For this $y$, $-2y = -8e^{-x/2}$, but $\dfrac{dy}{dx} = -2e^{-x/2}$.`,
      String.raw`This drops the negative sign from the exponent. For this $y$, $\dfrac{y}{2} = 2e^{-x/2}$, but $\dfrac{dy}{dx} = -2e^{-x/2}$.`,
      String.raw`This uses the coefficient $4$ as the constant. For this $y$, $4y = 16e^{-x/2}$, but $\dfrac{dy}{dx} = -2e^{-x/2}$.`,
    ], answer: 0 },
  { id: "q702-m02", type: "mcq", skill: "u7", topic: "7.2", calc: false, difficulty: "difficult",
    question: String.raw`Which of the following functions are solutions of the differential equation $\dfrac{dy}{dx} = \dfrac{y}{x} + 1$ for $x > 0$?
I. $y = x\ln x$
II. $y = x\ln x + 3x$
III. $y = x + \ln x$`,
    choices: ["I and II only", "I only", "II and III only", "I, II, and III"],
    why: [
      String.raw`I: $\dfrac{dy}{dx} = \ln x + 1$ by the product rule, and $\dfrac{y}{x} + 1 = \ln x + 1$. II: $\dfrac{dy}{dx} = \ln x + 1 + 3 = \ln x + 4$, and $\dfrac{y}{x} + 1 = \ln x + 3 + 1 = \ln x + 4$. III: $\dfrac{dy}{dx} = 1 + \dfrac{1}{x}$, but $\dfrac{y}{x} + 1 = 2 + \dfrac{\ln x}{x}$. So I and II are solutions and III is not.`,
      String.raw`II is also a solution. The term $3x$ adds $3$ to $\dfrac{dy}{dx}$ and also adds $3$ to $\dfrac{y}{x}$, so both sides equal $\ln x + 4$.`,
      String.raw`I is a solution: $\dfrac{dy}{dx} = \ln x + 1 = \dfrac{y}{x} + 1$. III is not: $\dfrac{dy}{dx} = 1 + \dfrac{1}{x}$, while $\dfrac{y}{x} + 1 = 2 + \dfrac{\ln x}{x}$.`,
      String.raw`III is not a solution: $\dfrac{dy}{dx} = 1 + \dfrac{1}{x}$, while $\dfrac{y}{x} + 1 = 2 + \dfrac{\ln x}{x}$. At $x = e$, these are $1 + \dfrac{1}{e}$ and $2 + \dfrac{1}{e}$.`,
    ], answer: 0 },
  { id: "q702-m03", type: "mcq", skill: "u7", topic: "7.2", calc: false, difficulty: "moderate",
    question: String.raw`For which of the following values of $k$ is $y = e^{kx}$ a solution of the differential equation $y'' - y' - 6y = 0$?`,
    choices: ["$3$", "$-3$", String.raw`$\sqrt{6}$`, String.raw`$-\sqrt{6}$`],
    why: [
      String.raw`$y' = ke^{kx}$ and $y'' = k^2e^{kx}$, so $y'' - y' - 6y = (k^2 - k - 6)e^{kx} = (k - 3)(k + 2)e^{kx}$. This is $0$ when $k = 3$ or $k = -2$, and $3$ is the only one listed.`,
      String.raw`This factors $k^2 - k - 6$ as $(k + 3)(k - 2)$, which flips the signs of the roots. With $k = -3$: $9 + 3 - 6 = 6 \neq 0$.`,
      String.raw`This solves $k^2 - 6 = 0$, leaving out the term $-y' = -ke^{kx}$. With $k = \sqrt{6}$: $6 - \sqrt{6} - 6 = -\sqrt{6} \neq 0$.`,
      String.raw`This solves $k^2 - 6 = 0$, leaving out the term $-y' = -ke^{kx}$. With $k = -\sqrt{6}$: $6 + \sqrt{6} - 6 = \sqrt{6} \neq 0$.`,
    ], answer: 0 },
  { id: "q702-m04", type: "mcq", skill: "u7", topic: "7.2", calc: false, difficulty: "easy",
    question: String.raw`For every constant $C$, the function $y = \dfrac{1}{x + C}$ is a solution of which differential equation?`,
    choices: [String.raw`$\dfrac{dy}{dx} = -y^2$`, String.raw`$\dfrac{dy}{dx} = y^2$`, String.raw`$\dfrac{dy}{dx} = -\dfrac{1}{y^2}$`, String.raw`$\dfrac{dy}{dx} = -\dfrac{1}{x^2}$`],
    why: [
      String.raw`$\dfrac{dy}{dx} = -\dfrac{1}{(x + C)^2}$, and $y^2 = \dfrac{1}{(x + C)^2}$, so $\dfrac{dy}{dx} = -y^2$.`,
      String.raw`The derivative of $(x + C)^{-1}$ is $-(x + C)^{-2}$. This drops the negative sign.`,
      String.raw`$-\dfrac{1}{y^2} = -(x + C)^2$, which is not the derivative. This takes the reciprocal of $y^2$.`,
      String.raw`This is the derivative only when $C = 0$. For other values of $C$, $\dfrac{dy}{dx} = -\dfrac{1}{(x + C)^2}$.`,
    ], answer: 0 },
  { id: "q702-m05", type: "mcq", skill: "u7", topic: "7.2", calc: false, difficulty: "moderate",
    question: String.raw`Which of the following is a solution of the differential equation $\dfrac{dy}{dx} = 3x^2(y - 2)$ that also satisfies $y(0) = 5$?`,
    choices: [String.raw`$y = 2 + 3e^{x^3}$`, String.raw`$y = 5e^{x^3}$`, String.raw`$y = 3 + 2e^{x^3}$`, String.raw`$y = 2 + 3e^{3x^2}$`],
    why: [
      String.raw`$y(0) = 2 + 3 = 5$. Also $\dfrac{dy}{dx} = 3e^{x^3} \cdot 3x^2$, and $3x^2(y - 2) = 3x^2 \cdot 3e^{x^3}$. The two sides are equal.`,
      String.raw`$y(0) = 5$, but $\dfrac{dy}{dx} = 15x^2e^{x^3}$ while $3x^2(y - 2) = 15x^2e^{x^3} - 6x^2$. This solves $\dfrac{dy}{dx} = 3x^2y$, without the $-2$.`,
      String.raw`$y(0) = 5$, but $\dfrac{dy}{dx} = 6x^2e^{x^3}$ while $3x^2(y - 2) = 3x^2\left(1 + 2e^{x^3}\right)$. The constant term must be $2$, the value where $y - 2 = 0$.`,
      String.raw`$y(0) = 5$, but $\dfrac{dy}{dx} = 18xe^{3x^2}$ while $3x^2(y - 2) = 9x^2e^{3x^2}$. The exponent must be an antiderivative of $3x^2$, which is $x^3$, not $3x^2$ itself.`,
    ], answer: 0 },
  { id: "q702-m06", type: "mcq", skill: "u7", topic: "7.2", calc: false, difficulty: "moderate",
    question: String.raw`A linear function $y = ax + b$ is a solution of the differential equation $\dfrac{dy}{dx} = 2y - 4x$. Which function is it?`,
    choices: [String.raw`$y = 2x + 1$`, String.raw`$y = 2x - 1$`, String.raw`$y = 4x + 2$`, String.raw`$y = x + \frac{1}{2}$`],
    why: [
      String.raw`Substitute: $a = 2(ax + b) - 4x = (2a - 4)x + 2b$. Matching coefficients, $2a - 4 = 0$ and $a = 2b$, so $a = 2$ and $b = 1$. Check: $2(2x + 1) - 4x = 2 = \dfrac{dy}{dx}$.`,
      String.raw`$\dfrac{dy}{dx} = 2$, but $2(2x - 1) - 4x = -2$. The sign of $b$ is wrong.`,
      String.raw`$\dfrac{dy}{dx} = 4$, but $2(4x + 2) - 4x = 4x + 4$, which depends on $x$.`,
      String.raw`$\dfrac{dy}{dx} = 1$, but $2\left(x + \frac{1}{2}\right) - 4x = 1 - 2x$, which depends on $x$.`,
    ], answer: 0 },
  { id: "q702-f1a", type: "frq", skill: "u7", topic: "7.2", calc: false, set: "q702-s9", part: "(a)",
    prompt: String.raw`Show that $y = x - 1 + Ce^{-x}$ is a solution of the differential equation for every constant $C$.`,
    rows: [
      { name: "Derivative", earns: String.raw`$\dfrac{dy}{dx} = 1 - Ce^{-x}$.` },
      { name: "Verification", earns: String.raw`Substitutes to show $x - y = x - \left(x - 1 + Ce^{-x}\right) = 1 - Ce^{-x} = \dfrac{dy}{dx}$.` },
    ],
    solution: String.raw`If $y = x - 1 + Ce^{-x}$, then $\dfrac{dy}{dx} = 1 - Ce^{-x}$. Also $x - y = x - x + 1 - Ce^{-x} = 1 - Ce^{-x}$. The two sides are equal for all $x$, so $y = x - 1 + Ce^{-x}$ is a solution for every constant $C$.` },
  { id: "q702-f1b", type: "frq", skill: "u7", topic: "7.2", calc: false, set: "q702-s9", part: "(b)",
    prompt: String.raw`Find the value of $C$ for which the solution in part (a) satisfies $y(0) = 4$.`,
    rows: [
      { name: "Answer", earns: String.raw`$C = 5$.` },
    ],
    solution: String.raw`$y(0) = 0 - 1 + Ce^{0} = C - 1$. Setting $C - 1 = 4$ gives $C = 5$, so $y = x - 1 + 5e^{-x}$.` },
  { id: "q702-f1c", type: "frq", skill: "u7", topic: "7.2", calc: false, set: "q702-s9", part: "(c)",
    prompt: String.raw`Is $y = x$ a solution of the differential equation? Justify your answer.`,
    rows: [
      { name: "Answer with justification", earns: String.raw`No, because $\dfrac{dy}{dx} = 1$ while $x - y = 0$.` },
    ],
    solution: String.raw`If $y = x$, then $\dfrac{dy}{dx} = 1$, but $x - y = x - x = 0$. Since $1 \neq 0$, $y = x$ is not a solution.` },
];

export default { forms: [{ id: "q702", name: "Topic 7.2 Quiz: Verifying Solutions", group: "Unit 7: Differential Equations", items }] };

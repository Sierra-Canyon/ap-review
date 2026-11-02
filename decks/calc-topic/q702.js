export const sets = {
  "q702-s9": { name: "A family of solutions", label: "Free response", intro: String.raw`Consider the differential equation $\dfrac{dy}{dx} = x - y$.`,
    sources: [{ title: "", blocks: [{ p: String.raw`$$\dfrac{dy}{dx} = x - y$$` }] }] },
};

const items = [
  { id: "q702-m01", type: "mcq", skill: "u7", topic: "7.2", calc: false,
    question: String.raw`Which of the following functions is a solution of the differential equation $\dfrac{dy}{dx} = 3y$?`,
    choices: [String.raw`$y = 5e^{3x}$`, String.raw`$y = e^{3x} + 2$`, String.raw`$y = 3e^{x}$`, String.raw`$y = xe^{3x}$`],
    why: [
      String.raw`$\dfrac{dy}{dx} = 15e^{3x} = 3\left(5e^{3x}\right) = 3y$, so the equation is satisfied for all $x$.`,
      String.raw`$\dfrac{dy}{dx} = 3e^{3x}$, but $3y = 3e^{3x} + 6$. The added constant breaks the equation.`,
      String.raw`$\dfrac{dy}{dx} = 3e^{x}$, but $3y = 9e^{x}$. The factor $3$ belongs in the exponent.`,
      String.raw`By the product rule, $\dfrac{dy}{dx} = e^{3x} + 3xe^{3x}$, which is $3y + e^{3x}$, not $3y$.`,
    ], answer: 0 },
  { id: "q702-m02", type: "mcq", skill: "u7", topic: "7.2", calc: false,
    question: String.raw`Which of the following functions satisfies the differential equation $y'' + 4y = 0$?`,
    choices: [String.raw`$y = \sin(2x)$`, String.raw`$y = \sin(4x)$`, String.raw`$y = e^{2x}$`, String.raw`$y = \cos x$`],
    why: [
      String.raw`$y' = 2\cos(2x)$ and $y'' = -4\sin(2x)$, so $y'' + 4y = -4\sin(2x) + 4\sin(2x) = 0$.`,
      String.raw`$y'' = -16\sin(4x)$, so $y'' + 4y = -12\sin(4x)$, which is not $0$ for all $x$.`,
      String.raw`$y'' = 4e^{2x}$, so $y'' + 4y = 8e^{2x} \neq 0$. The equation needs $y'' = -4y$, but for $e^{2x}$, $y'' = 4y$.`,
      String.raw`$y'' = -\cos x$, so $y'' + 4y = 3\cos x$, which is not $0$ for all $x$.`,
    ], answer: 0 },
  { id: "q702-m03", type: "mcq", skill: "u7", topic: "7.2", calc: false,
    question: String.raw`For which of the following values of $k$ is $y = e^{kx}$ a solution of the differential equation $y'' - y' - 6y = 0$?`,
    choices: ["$3$", "$2$", "$-3$", "$6$"],
    why: [
      String.raw`$y' = ke^{kx}$ and $y'' = k^2e^{kx}$, so $y'' - y' - 6y = (k^2 - k - 6)e^{kx} = (k - 3)(k + 2)e^{kx}$. This is $0$ when $k = 3$ or $k = -2$, and $3$ is the only one listed.`,
      String.raw`With $k = 2$: $k^2 - k - 6 = 4 - 2 - 6 = -4 \neq 0$. The factors are $(k - 3)(k + 2)$, so the roots are $3$ and $-2$.`,
      String.raw`With $k = -3$: $9 + 3 - 6 = 6 \neq 0$. This flips the signs of the roots $3$ and $-2$.`,
      String.raw`With $k = 6$: $36 - 6 - 6 = 24 \neq 0$. This takes the constant term $6$ as the answer.`,
    ], answer: 0 },
  { id: "q702-m04", type: "mcq", skill: "u7", topic: "7.2", calc: false,
    question: String.raw`For every constant $C$, the function $y = \dfrac{1}{x + C}$ is a solution of which differential equation?`,
    choices: [String.raw`$\dfrac{dy}{dx} = -y^2$`, String.raw`$\dfrac{dy}{dx} = y^2$`, String.raw`$\dfrac{dy}{dx} = -\dfrac{1}{y^2}$`, String.raw`$\dfrac{dy}{dx} = -\dfrac{1}{x^2}$`],
    why: [
      String.raw`$\dfrac{dy}{dx} = -\dfrac{1}{(x + C)^2}$, and $y^2 = \dfrac{1}{(x + C)^2}$, so $\dfrac{dy}{dx} = -y^2$.`,
      String.raw`The derivative of $(x + C)^{-1}$ is $-(x + C)^{-2}$. This drops the negative sign.`,
      String.raw`$-\dfrac{1}{y^2} = -(x + C)^2$, which is not the derivative. This takes the reciprocal of $y^2$.`,
      String.raw`This is the derivative only when $C = 0$. For other values of $C$, $\dfrac{dy}{dx} = -\dfrac{1}{(x + C)^2}$.`,
    ], answer: 0 },
  { id: "q702-m05", type: "mcq", skill: "u7", topic: "7.2", calc: false,
    question: String.raw`Which of the following is a solution of the differential equation $\dfrac{dy}{dx} = 2xy$ that also satisfies $y(0) = 3$?`,
    choices: [String.raw`$y = 3e^{x^2}$`, String.raw`$y = e^{x^2} + 2$`, String.raw`$y = 3e^{2x}$`, String.raw`$y = x^2 + 3$`],
    why: [
      String.raw`$y(0) = 3e^0 = 3$, and $\dfrac{dy}{dx} = 3e^{x^2} \cdot 2x = 2x\left(3e^{x^2}\right) = 2xy$.`,
      String.raw`$y(0) = 3$, but $\dfrac{dy}{dx} = 2xe^{x^2}$ while $2xy = 2xe^{x^2} + 4x$. It does not satisfy the differential equation.`,
      String.raw`$y(0) = 3$, but $\dfrac{dy}{dx} = 6e^{2x}$, which is not $2x \cdot 3e^{2x}$.`,
      String.raw`$y(0) = 3$, but $\dfrac{dy}{dx} = 2x$ while $2xy = 2x^3 + 6x$.`,
    ], answer: 0 },
  { id: "q702-m06", type: "mcq", skill: "u7", topic: "7.2", calc: false,
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

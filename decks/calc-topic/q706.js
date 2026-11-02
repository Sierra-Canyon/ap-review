export const sets = {
  "q706-s9": { name: "A separable equation", label: "Free response", intro: String.raw`Consider the differential equation $\dfrac{dy}{dx} = xy^2$.`,
    sources: [{ title: "", blocks: [{ p: String.raw`$$\dfrac{dy}{dx} = xy^2$$` }] }] },
};

const items = [
  { id: "q706-m01", type: "mcq", skill: "u7", topic: "7.6", calc: false,
    question: String.raw`Which of the following is the general solution of the differential equation $\dfrac{dy}{dx} = \dfrac{x}{y}$?`,
    choices: [String.raw`$y^2 = x^2 + C$`, String.raw`$y^2 = 2x^2 + C$`, String.raw`$y = \frac{x^2}{2} + C$`, String.raw`$\ln|y| = \ln|x| + C$`],
    why: [
      String.raw`Separate: $y\,dy = x\,dx$. Integrate: $\dfrac{y^2}{2} = \dfrac{x^2}{2} + C_1$. Multiply by 2: $y^2 = x^2 + C$.`,
      String.raw`This integrates $x\,dx$ as $x^2$ in place of $\dfrac{x^2}{2}$ before multiplying both sides by 2.`,
      String.raw`This integrates only the $x$ in the numerator and never moves $y$ to the left side.`,
      String.raw`This separates as $\dfrac{dy}{y} = \dfrac{dx}{x}$, which is the equation $\dfrac{dy}{dx} = \dfrac{y}{x}$, the reciprocal of the given slope.`,
    ], answer: 0 },
  { id: "q706-m02", type: "mcq", skill: "u7", topic: "7.6", calc: false,
    question: String.raw`Which of the following is the general solution of the differential equation $\dfrac{dy}{dx} = 3x^2y$?`,
    choices: [String.raw`$y = Ce^{x^3}$`, String.raw`$y = e^{x^3} + C$`, String.raw`$y = Ce^{6x}$`, String.raw`$y = x^3 + C$`],
    why: [
      String.raw`Separate: $\dfrac{dy}{y} = 3x^2\,dx$. Integrate: $\ln|y| = x^3 + C_1$. Then $|y| = e^{C_1}e^{x^3}$, so $y = Ce^{x^3}$.`,
      String.raw`From $\ln|y| = x^3 + C_1$, exponentiating gives $e^{x^3 + C_1} = e^{C_1}e^{x^3}$. The constant multiplies; it does not add.`,
      String.raw`This differentiates $3x^2$ to get $6x$ in place of integrating it to get $x^3$.`,
      String.raw`This integrates $3x^2$ but leaves out the factor $y$, solving $\dfrac{dy}{dx} = 3x^2$.`,
    ], answer: 0 },
  { id: "q706-m03", type: "mcq", skill: "u7", topic: "7.6", calc: false,
    question: String.raw`Which of the following is the general solution of the differential equation $\dfrac{dy}{dx} = e^{x - y}$?`,
    choices: [String.raw`$y = \ln\left(e^{x} + C\right)$`, String.raw`$y = x + C$`, String.raw`$y = e^{x} + C$`, String.raw`$y = -\ln\left(e^{x} + C\right)$`],
    why: [
      String.raw`Write $e^{x - y} = e^{x}e^{-y}$ and separate: $e^{y}\,dy = e^{x}\,dx$. Integrate: $e^{y} = e^{x} + C$, so $y = \ln\left(e^{x} + C\right)$.`,
      String.raw`This treats the equation as $\dfrac{dy}{dx} = 1$. For $y = x + C$, $e^{x - y} = e^{-C}$, which is $1$ only when $C = 0$.`,
      String.raw`This stops at $e^{y} = e^{x} + C$ and drops the exponential on the left. Solving for $y$ needs the natural log.`,
      String.raw`The sign is wrong: $e^{y} = e^{x} + C$ gives $y = \ln\left(e^{x} + C\right)$, not its opposite.`,
    ], answer: 0 },
  { id: "q706-m04", type: "mcq", skill: "u7", topic: "7.6", calc: false,
    question: String.raw`Which of the following is a correct separation of variables for the differential equation $\dfrac{dy}{dx} = y^2\sin x$?`,
    choices: [String.raw`$\displaystyle \int \frac{1}{y^2}\,dy = \int \sin x\,dx$`, String.raw`$\displaystyle \int y^2\,dy = \int \sin x\,dx$`, String.raw`$\displaystyle \int dy = \int y^2\sin x\,dx$`, String.raw`$\displaystyle \int \frac{1}{y^2}\,dy = \int \frac{1}{\sin x}\,dx$`],
    why: [
      String.raw`Divide both sides by $y^2$ and multiply by $dx$: $\dfrac{1}{y^2}\,dy = \sin x\,dx$. Each side has one variable.`,
      String.raw`Moving $y^2$ to the left side requires dividing by it, not leaving it as a factor.`,
      String.raw`The right side still contains $y$, so the variables are not separated, and $y$ cannot be integrated with respect to $x$.`,
      String.raw`Only $y^2$ moves to the left. The factor $\sin x$ stays on the right as it is.`,
    ], answer: 0 },
  { id: "q706-m05", type: "mcq", skill: "u7", topic: "7.6", calc: false,
    question: String.raw`Which of the following is the general solution of the differential equation $\dfrac{dy}{dx} = 1 + y^2$?`,
    choices: [String.raw`$y = \tan(x + C)$`, String.raw`$y = \tan x + C$`, String.raw`$y = x + \frac{x^3}{3} + C$`, String.raw`$y = C\tan x$`],
    why: [
      String.raw`Separate: $\dfrac{dy}{1 + y^2} = dx$. Integrate: $\arctan y = x + C$, so $y = \tan(x + C)$.`,
      String.raw`From $\arctan y = x + C$, the constant goes inside the tangent. For $y = \tan x + C$, $\dfrac{dy}{dx} = \sec^2 x = 1 + \tan^2 x$, which is not $1 + y^2$ unless $C = 0$.`,
      String.raw`This integrates $1 + x^2$ with respect to $x$, replacing $y$ with $x$ in place of separating the variables.`,
      String.raw`From $\arctan y = x + C$, the constant is added inside the tangent, not multiplied outside it.`,
    ], answer: 0 },
  { id: "q706-m06", type: "mcq", skill: "u7", topic: "7.6", calc: false,
    question: String.raw`Which of the following is the general solution of the differential equation $\dfrac{dy}{dx} = 2x\sqrt{y}$, where $y > 0$ and $x^2 + C > 0$?`,
    choices: [String.raw`$y = \dfrac{\left(x^2 + C\right)^2}{4}$`, String.raw`$y = \left(x^2 + C\right)^2$`, String.raw`$y = \dfrac{x^4}{4} + C$`, String.raw`$y = \left(\dfrac{3}{2}\left(x^2 + C\right)\right)^{2/3}$`],
    why: [
      String.raw`Separate: $y^{-1/2}\,dy = 2x\,dx$. Integrate: $2\sqrt{y} = x^2 + C$, so $\sqrt{y} = \dfrac{x^2 + C}{2}$ and $y = \dfrac{\left(x^2 + C\right)^2}{4}$.`,
      String.raw`This takes $\displaystyle \int y^{-1/2}\,dy$ to be $\sqrt{y}$, leaving out the factor $2$ from $2\sqrt{y}$.`,
      String.raw`This squares $x^2 + C$ term by term. The square $\dfrac{\left(x^2 + C\right)^2}{4}$ has the middle term $\dfrac{Cx^2}{2}$, which depends on $x$ and cannot be absorbed into the constant.`,
      String.raw`This separates as $\sqrt{y}\,dy = 2x\,dx$, multiplying by $\sqrt{y}$ in place of dividing by it.`,
    ], answer: 0 },
  { id: "q706-f1a", type: "frq", skill: "u7", topic: "7.6", calc: false, set: "q706-s9", part: "(a)",
    prompt: String.raw`For $y \neq 0$, find the general solution of the differential equation. Write $y$ as a function of $x$.`,
    rows: [
      { name: "Separation of variables", earns: String.raw`$\dfrac{1}{y^2}\,dy = x\,dx$.` },
      { name: "Antiderivatives", earns: String.raw`$-\dfrac{1}{y} = \dfrac{x^2}{2} + C_1$.` },
      { name: "Solves for y", earns: String.raw`$y = -\dfrac{2}{x^2 + C}$, or an equivalent form such as $y = -\dfrac{1}{\frac{x^2}{2} + C_1}$, with a constant of integration.` },
    ],
    solution: String.raw`Separate: $\dfrac{dy}{y^2} = x\,dx$. Integrate: $-\dfrac{1}{y} = \dfrac{x^2}{2} + C_1$. Then $\dfrac{1}{y} = -\dfrac{x^2 + 2C_1}{2}$, so $y = -\dfrac{2}{x^2 + C}$, where $C = 2C_1$.` },
  { id: "q706-f1b", type: "frq", skill: "u7", topic: "7.6", calc: false, set: "q706-s9", part: "(b)",
    prompt: String.raw`For which values of the constant $C$ is the solution in part (a) defined for all real numbers $x$? Explain your reasoning.`,
    rows: [
      { name: "Answer with reason", earns: String.raw`$C > 0$, because then $x^2 + C > 0$ for every $x$, so the denominator is never $0$.` },
    ],
    solution: String.raw`$y = -\dfrac{2}{x^2 + C}$ is undefined where $x^2 + C = 0$. If $C > 0$, then $x^2 + C \geq C > 0$ for every $x$, so the solution is defined for all $x$. If $C \leq 0$, then $x = \pm\sqrt{-C}$ makes the denominator $0$. The answer is $C > 0$.` },
];

export default { forms: [{ id: "q706", name: "Topic 7.6 Quiz: General Solutions by Separation of Variables", group: "Unit 7: Differential Equations", items }] };

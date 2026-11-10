export const sets = {
  "q706-s9": { name: "A separable equation", label: "Free response", intro: String.raw`Consider the differential equation $\dfrac{dy}{dx} = xy^2$.`,
    sources: [{ title: "", blocks: [{ p: String.raw`$$\dfrac{dy}{dx} = xy^2$$` }] }] },
};

const items = [
  { id: "q706-m01", type: "mcq", skill: "u7", topic: "7.6", calc: false, difficulty: "easy",
    question: String.raw`Which of the following is the general solution of the differential equation $\dfrac{dy}{dx} = \dfrac{\sin x}{\cos y}$?`,
    choices: [String.raw`$\sin y = C - \cos x$`, String.raw`$\sin y = \cos x + C$`, String.raw`$\cos y = C - \cos x$`, String.raw`$y = C - \cos x$`],
    why: [
      String.raw`Separate: $\cos y\,dy = \sin x\,dx$. Integrate: $\sin y = -\cos x + C$, which is $\sin y = C - \cos x$.`,
      String.raw`This loses the negative sign: the antiderivative of $\sin x$ is $-\cos x$, not $\cos x$.`,
      String.raw`This integrates only the right side and leaves $\cos y$ as it is. The antiderivative of $\cos y$ with respect to $y$ is $\sin y$.`,
      String.raw`This drops the factor $\cos y$, solving $\dfrac{dy}{dx} = \sin x$ in place of the given equation.`,
    ], answer: 0 },
  { id: "q706-m02", type: "mcq", skill: "u7", topic: "7.6", calc: false, difficulty: "moderate",
    question: String.raw`Which of the following is the general solution of the differential equation $\dfrac{dy}{dx} = \dfrac{y}{1 + x^2}$?`,
    choices: [String.raw`$y = Ce^{\arctan x}$`, String.raw`$y = e^{\arctan x} + C$`, String.raw`$y = \arctan x + C$`, String.raw`$y = Ce^{\tan x}$`],
    why: [
      String.raw`Separate: $\dfrac{dy}{y} = \dfrac{dx}{1 + x^2}$. Integrate: $\ln|y| = \arctan x + C_1$. Then $|y| = e^{C_1}e^{\arctan x}$, so $y = Ce^{\arctan x}$.`,
      String.raw`From $\ln|y| = \arctan x + C_1$, exponentiating gives $e^{C_1}e^{\arctan x}$. The constant multiplies; it does not add.`,
      String.raw`This leaves out the factor $y$, solving $\dfrac{dy}{dx} = \dfrac{1}{1 + x^2}$ in place of the given equation.`,
      String.raw`The antiderivative of $\dfrac{1}{1 + x^2}$ is $\arctan x$, not $\tan x$.`,
    ], answer: 0 },
  { id: "q706-m03", type: "mcq", skill: "u7", topic: "7.6", calc: false, difficulty: "difficult",
    question: String.raw`Which of the following is the general solution of the differential equation $\dfrac{dy}{dx} = 2xe^{y}$?`,
    choices: [String.raw`$y = -\ln\left(C - x^2\right)$`, String.raw`$y = \ln\left(x^2 + C\right)$`, String.raw`$y = -\ln\left(x^2 + C\right)$`, String.raw`$y = x^2 + C$`],
    why: [
      String.raw`Separate: $e^{-y}\,dy = 2x\,dx$. Integrate: $-e^{-y} = x^2 + C_1$, so $e^{-y} = C - x^2$, where $C = -C_1$. Then $-y = \ln\left(C - x^2\right)$ and $y = -\ln\left(C - x^2\right)$.`,
      String.raw`This separates as $e^{y}\,dy = 2x\,dx$, multiplying by $e^{y}$ in place of dividing by it. That is the equation $\dfrac{dy}{dx} = 2xe^{-y}$.`,
      String.raw`This integrates $e^{-y}$ as $e^{-y}$, losing the negative sign from the inner function $-y$. The antiderivative is $-e^{-y}$.`,
      String.raw`This drops the factor $e^{y}$, solving $\dfrac{dy}{dx} = 2x$ in place of the given equation.`,
    ], answer: 0 },
  { id: "q706-m04", type: "mcq", skill: "u7", topic: "7.6", calc: false, difficulty: "easy",
    question: String.raw`Which of the following is a correct separation of variables for the differential equation $\dfrac{dy}{dx} = y^2\sin x$?`,
    choices: [String.raw`$\displaystyle \int \frac{1}{y^2}\,dy = \int \sin x\,dx$`, String.raw`$\displaystyle \int y^2\,dy = \int \sin x\,dx$`, String.raw`$\displaystyle \int dy = \int y^2\sin x\,dx$`, String.raw`$\displaystyle \int \frac{1}{y^2}\,dy = \int \frac{1}{\sin x}\,dx$`],
    why: [
      String.raw`Divide both sides by $y^2$ and multiply by $dx$: $\dfrac{1}{y^2}\,dy = \sin x\,dx$. Each side has one variable.`,
      String.raw`Moving $y^2$ to the left side requires dividing by it, not leaving it as a factor.`,
      String.raw`The right side still contains $y$, so the variables are not separated, and $y$ cannot be integrated with respect to $x$.`,
      String.raw`Only $y^2$ moves to the left. The factor $\sin x$ stays on the right as it is.`,
    ], answer: 0 },
  { id: "q706-m05", type: "mcq", skill: "u7", topic: "7.6", calc: false, difficulty: "moderate",
    question: String.raw`Which of the following is the general solution of the differential equation $\dfrac{dy}{dx} = \dfrac{1 + y^2}{x}$ for $x > 0$?`,
    choices: [String.raw`$y = \tan(\ln x + C)$`, String.raw`$y = \tan(\ln x) + C$`, String.raw`$y = C\tan(\ln x)$`, String.raw`$y = \tan\left(C - \dfrac{1}{x^2}\right)$`],
    why: [
      String.raw`Separate: $\dfrac{dy}{1 + y^2} = \dfrac{dx}{x}$. Integrate: $\arctan y = \ln x + C$ for $x > 0$, so $y = \tan(\ln x + C)$.`,
      String.raw`From $\arctan y = \ln x + C$, the constant goes inside the tangent. For $y = \tan(\ln x) + C$, $\dfrac{dy}{dx} = \dfrac{\sec^2(\ln x)}{x}$, which equals $\dfrac{1 + y^2}{x}$ only when $C = 0$.`,
      String.raw`From $\arctan y = \ln x + C$, the constant is added inside the tangent, not multiplied outside it.`,
      String.raw`This differentiates $\dfrac{1}{x}$, getting $-\dfrac{1}{x^2}$, in place of integrating it to get $\ln x$.`,
    ], answer: 0 },
  { id: "q706-m06", type: "mcq", skill: "u7", topic: "7.6", calc: false, difficulty: "moderate",
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

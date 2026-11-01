export const sets = {
  "q610-s9": { name: "Division and completing the square", label: "Free response", intro: String.raw`Let $h(x) = \dfrac{x^3 + 2x^2 - x + 4}{x + 2}$ for $x > -2$.`,
    sources: [{ title: "", blocks: [{ p: String.raw`$$h(x) = \dfrac{x^3 + 2x^2 - x + 4}{x + 2}, \quad x > -2$$` }] }] },
};

const items = [
  { id: "q610-m01", type: "mcq", skill: "u6", topic: "6.10", calc: false,
    question: String.raw`$\displaystyle \int \dfrac{x^2 + 5x + 2}{x + 3}\,dx =$`,
    choices: [String.raw`$\frac{x^2}{2} + 2x - 4\ln|x + 3| + C$`, String.raw`$\frac{x^2}{2} + 2x + C$`, String.raw`$\frac{x^2}{2} + 2x + 4\ln|x + 3| + C$`, String.raw`$\dfrac{\frac{x^3}{3} + \frac{5x^2}{2} + 2x}{\frac{x^2}{2} + 3x} + C$`],
    why: [
      String.raw`Long division gives $x^2 + 5x + 2 = (x + 3)(x + 2) - 4$, so the integrand is $x + 2 - \dfrac{4}{x + 3}$, with antiderivative $\dfrac{x^2}{2} + 2x - 4\ln|x + 3| + C$.`,
      String.raw`This drops the remainder. The term $-\dfrac{4}{x + 3}$ contributes $-4\ln|x + 3|$.`,
      String.raw`The remainder is $2 - 6 = -4$, not $+4$: $(x + 3)(x + 2) = x^2 + 5x + 6$, which is 4 more than the numerator.`,
      String.raw`This finds antiderivatives of the numerator and denominator separately. The integral of a quotient is not the quotient of the integrals.`,
    ], answer: 0 },
  { id: "q610-m02", type: "mcq", skill: "u6", topic: "6.10", calc: false,
    question: String.raw`$\displaystyle \int \dfrac{1}{x^2 - 8x + 25}\,dx =$`,
    choices: [String.raw`$\frac{1}{3}\arctan\left( \frac{x - 4}{3} \right) + C$`, String.raw`$\arctan\left( \frac{x - 4}{3} \right) + C$`, String.raw`$\ln\left( x^2 - 8x + 25 \right) + C$`, String.raw`$\frac{1}{9}\arctan\left( \frac{x - 4}{3} \right) + C$`],
    why: [
      String.raw`Complete the square: $x^2 - 8x + 25 = (x - 4)^2 + 9$. With $u = \dfrac{x - 4}{3}$, $dx = 3\,du$, and the integral is $\displaystyle \int \dfrac{3\,du}{9\left( u^2 + 1 \right)} = \dfrac{1}{3}\arctan u + C$.`,
      String.raw`This leaves out the factor $\dfrac{1}{3}$. Its derivative is $\dfrac{3}{(x - 4)^2 + 9}$.`,
      String.raw`The numerator 1 is not the derivative of $x^2 - 8x + 25$, so the integral is not a logarithm.`,
      String.raw`This divides by the constant 9 from $(x - 4)^2 + 9$ but leaves out the factor 3 from $dx = 3\,du$.`,
    ], answer: 0 },
  { id: "q610-m03", type: "mcq", skill: "u6", topic: "6.10", calc: false,
    question: String.raw`$\displaystyle \int \dfrac{x}{x + 2}\,dx =$`,
    choices: [String.raw`$x - 2\ln|x + 2| + C$`, String.raw`$x + 2\ln|x + 2| + C$`, String.raw`$x - \ln|x + 2| + C$`, String.raw`$\dfrac{x^2/2}{x^2/2 + 2x} + C$`],
    why: [
      String.raw`Divide: $\dfrac{x}{x + 2} = 1 - \dfrac{2}{x + 2}$, with antiderivative $x - 2\ln|x + 2| + C$.`,
      String.raw`$x = (x + 2) - 2$, so the remainder is $-2$, not $+2$.`,
      String.raw`This drops the coefficient of the remainder. The term $-\dfrac{2}{x + 2}$ contributes $-2\ln|x + 2|$.`,
      String.raw`This finds antiderivatives of the numerator and denominator separately. The integral of a quotient is not the quotient of the integrals.`,
    ], answer: 0 },
  { id: "q610-m04", type: "mcq", skill: "u6", topic: "6.10", calc: false,
    question: String.raw`$\displaystyle \int_0^1 \dfrac{1}{x^2 + 2x + 2}\,dx =$`,
    choices: [String.raw`$\arctan 2 - \frac{\pi}{4}$`, String.raw`$\arctan 2$`, String.raw`$\frac{\pi}{4}$`, String.raw`$\ln\frac{5}{2}$`],
    why: [
      String.raw`$x^2 + 2x + 2 = (x + 1)^2 + 1$, so an antiderivative is $\arctan(x + 1)$. The integral is $\arctan 2 - \arctan 1 = \arctan 2 - \dfrac{\pi}{4}$.`,
      String.raw`This leaves out the value at the lower limit, $\arctan(0 + 1) = \dfrac{\pi}{4}$.`,
      String.raw`$\dfrac{\pi}{4}$ is $\arctan 1$, the value at the lower limit only.`,
      String.raw`This uses $\ln\left( x^2 + 2x + 2 \right)$ as the antiderivative. The numerator is not the derivative of the denominator.`,
    ], answer: 0 },
  { id: "q610-m05", type: "mcq", skill: "u6", topic: "6.10", calc: false,
    question: String.raw`$\displaystyle \int \dfrac{x^2}{x^2 + 1}\,dx =$`,
    choices: [String.raw`$x - \arctan x + C$`, String.raw`$x + \arctan x + C$`, String.raw`$x - \ln\left( x^2 + 1 \right) + C$`, String.raw`$x - \frac{1}{2}\ln\left( x^2 + 1 \right) + C$`],
    why: [
      String.raw`Divide: $\dfrac{x^2}{x^2 + 1} = 1 - \dfrac{1}{x^2 + 1}$, with antiderivative $x - \arctan x + C$.`,
      String.raw`$x^2 = \left( x^2 + 1 \right) - 1$, so the remainder is $-1$, not $+1$.`,
      String.raw`The antiderivative of $\dfrac{1}{x^2 + 1}$ is $\arctan x$, not $\ln\left( x^2 + 1 \right)$, because the numerator is not $2x$.`,
      String.raw`$\dfrac{1}{2}\ln\left( x^2 + 1 \right)$ is an antiderivative of $\dfrac{x}{x^2 + 1}$, not of $\dfrac{1}{x^2 + 1}$.`,
    ], answer: 0 },
  { id: "q610-m06", type: "mcq", skill: "u6", topic: "6.10", calc: false,
    question: String.raw`$\displaystyle \int \dfrac{1}{\sqrt{-x^2 + 4x - 3}}\,dx =$`,
    choices: [String.raw`$\arcsin(x - 2) + C$`, String.raw`$\arctan(x - 2) + C$`, String.raw`$\arcsin(x + 2) + C$`, String.raw`$2\arcsin(x - 2) + C$`],
    why: [
      String.raw`Complete the square: $-x^2 + 4x - 3 = 1 - \left( x^2 - 4x + 4 \right) = 1 - (x - 2)^2$. With $u = x - 2$, the integral is $\displaystyle \int \dfrac{du}{\sqrt{1 - u^2}} = \arcsin u + C$.`,
      String.raw`$\arctan u$ is the antiderivative of $\dfrac{1}{1 + u^2}$. Here the integrand is $\dfrac{1}{\sqrt{1 - u^2}}$.`,
      String.raw`$x^2 - 4x + 4 = (x - 2)^2$, not $(x + 2)^2$.`,
      String.raw`With $u = x - 2$, $du = dx$, so no factor of 2 appears.`,
    ], answer: 0 },
  { id: "q610-f1a", type: "frq", skill: "u6", topic: "6.10", calc: false, set: "q610-s9", part: "(a)",
    prompt: String.raw`Use long division to write $h(x)$ as a polynomial plus a remainder term.`,
    rows: [
      { name: "Division", earns: String.raw`$h(x) = x^2 - 1 + \dfrac{6}{x + 2}$` },
    ],
    solution: String.raw`$x^2(x + 2) = x^3 + 2x^2$ leaves $-x + 4$. Then $-1(x + 2) = -x - 2$ leaves $6$. So $x^3 + 2x^2 - x + 4 = (x + 2)\left( x^2 - 1 \right) + 6$ and
$$h(x) = x^2 - 1 + \dfrac{6}{x + 2}.$$` },
  { id: "q610-f1b", type: "frq", skill: "u6", topic: "6.10", calc: false, set: "q610-s9", part: "(b)",
    prompt: String.raw`Evaluate $\displaystyle \int_0^2 h(x)\,dx$.`,
    rows: [
      { name: "Antiderivative", earns: String.raw`$\dfrac{x^3}{3} - x + 6\ln|x + 2|$` },
      { name: "Answer", earns: String.raw`$\dfrac{2}{3} + 6\ln 2$` },
    ],
    solution: String.raw`$$\int_0^2 \left( x^2 - 1 + \dfrac{6}{x + 2} \right) dx = \left[ \dfrac{x^3}{3} - x + 6\ln|x + 2| \right]_0^2 = \left( \dfrac{8}{3} - 2 + 6\ln 4 \right) - 6\ln 2 = \dfrac{2}{3} + 6\ln 2.$$` },
  { id: "q610-f1c", type: "frq", skill: "u6", topic: "6.10", calc: false, set: "q610-s9", part: "(c)",
    prompt: String.raw`Find $\displaystyle \int \dfrac{2}{x^2 + 10x + 29}\,dx$.`,
    rows: [
      { name: "Answer", earns: String.raw`Completes the square, $(x + 5)^2 + 4$, and finds $\arctan\left( \dfrac{x + 5}{2} \right) + C$.` },
    ],
    solution: String.raw`$x^2 + 10x + 29 = (x + 5)^2 + 4$. Let $u = \dfrac{x + 5}{2}$, so $dx = 2\,du$ and $(x + 5)^2 + 4 = 4\left( u^2 + 1 \right)$:
$$\int \dfrac{2}{4\left( u^2 + 1 \right)} \cdot 2\,du = \int \dfrac{du}{u^2 + 1} = \arctan u + C = \arctan\left( \dfrac{x + 5}{2} \right) + C.$$` },
];

export default { forms: [{ id: "q610", name: "Topic 6.10 Quiz: Long Division and Completing the Square", group: "Unit 6: Integration and Accumulation of Change", items }] };

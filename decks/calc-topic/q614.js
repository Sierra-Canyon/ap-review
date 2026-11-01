export const sets = {
  "q614-s9": { name: "Choosing a technique", label: "Free response", intro: String.raw`Each of the following integrals needs a different technique. Show the technique you use.`,
    sources: [{ title: "", blocks: [{ p: String.raw`$$\int \dfrac{2x^2 + 3}{x^2 + 1}\,dx, \qquad \int \dfrac{\cos x}{1 + \sin^2 x}\,dx, \qquad \int_2^3 \dfrac{1}{x^2 - 4x + 5}\,dx$$` }] }] },
};

const items = [
  { id: "q614-m01", type: "mcq", skill: "u6", topic: "6.14", calc: false,
    question: String.raw`$\displaystyle \int \dfrac{3x - 2}{x^2 + 4}\,dx =$`,
    choices: [String.raw`$\frac{3}{2}\ln\left( x^2 + 4 \right) - \arctan\left( \frac{x}{2} \right) + C$`, String.raw`$3\ln\left( x^2 + 4 \right) - \arctan\left( \frac{x}{2} \right) + C$`, String.raw`$\frac{3}{2}\ln\left( x^2 + 4 \right) - 2\arctan\left( \frac{x}{2} \right) + C$`, String.raw`$\frac{3}{2}\ln\left( x^2 + 4 \right) + C$`],
    why: [
      String.raw`Split the fraction: $\dfrac{3x}{x^2 + 4} - \dfrac{2}{x^2 + 4}$. The first part, by $u = x^2 + 4$, gives $\dfrac{3}{2}\ln\left( x^2 + 4 \right)$. For the second, $\displaystyle \int \dfrac{2}{x^2 + 4}\,dx = 2 \cdot \dfrac{1}{2}\arctan\left( \dfrac{x}{2} \right) = \arctan\left( \dfrac{x}{2} \right)$.`,
      String.raw`With $u = x^2 + 4$, $3x\,dx = \dfrac{3}{2}\,du$, so the logarithm needs the factor $\dfrac{1}{2}$.`,
      String.raw`$\displaystyle \int \dfrac{1}{x^2 + 4}\,dx = \dfrac{1}{2}\arctan\left( \dfrac{x}{2} \right)$. This answer leaves out the $\dfrac{1}{2}$.`,
      String.raw`This handles only $\dfrac{3x}{x^2 + 4}$. The term $-\dfrac{2}{x^2 + 4}$ adds $-\arctan\left( \dfrac{x}{2} \right)$.`,
    ], answer: 0 },
  { id: "q614-m02", type: "mcq", skill: "u6", topic: "6.14", calc: false,
    question: String.raw`$\displaystyle \int \dfrac{\left( \sqrt{x} + 1 \right)^2}{x}\,dx =$`,
    choices: [String.raw`$x + 4\sqrt{x} + \ln|x| + C$`, String.raw`$x + 2\sqrt{x} + \ln|x| + C$`, String.raw`$\frac{\left( \sqrt{x} + 1 \right)^3}{3}\ln|x| + C$`, String.raw`$x + 4\sqrt{x} - \frac{1}{x^2} + C$`],
    why: [
      String.raw`Expand and divide: $\dfrac{x + 2\sqrt{x} + 1}{x} = 1 + 2x^{-1/2} + \dfrac{1}{x}$. The antiderivative is $x + 4x^{1/2} + \ln|x| + C$.`,
      String.raw`$\displaystyle \int 2x^{-1/2}\,dx = 2 \cdot \dfrac{x^{1/2}}{1/2} = 4\sqrt{x}$. This answer does not divide by the new exponent $\dfrac{1}{2}$.`,
      String.raw`This finds antiderivatives of the numerator and denominator separately and multiplies them. The fraction must be rewritten first.`,
      String.raw`$-\dfrac{1}{x^2}$ is the derivative of $\dfrac{1}{x}$. The antiderivative of $\dfrac{1}{x}$ is $\ln|x|$.`,
    ], answer: 0 },
  { id: "q614-m03", type: "mcq", skill: "u6", topic: "6.14", calc: false,
    question: String.raw`For which of the following integrals does the substitution $u = 1 + x^2$ turn the integrand into a power of $u$ times a constant?`,
    choices: [String.raw`$\displaystyle \int \dfrac{x}{\left( 1 + x^2 \right)^3}\,dx$`, String.raw`$\displaystyle \int \dfrac{1}{1 + x^2}\,dx$`, String.raw`$\displaystyle \int \dfrac{x^2}{1 + x^2}\,dx$`, String.raw`$\displaystyle \int \left( 1 + x^2 \right)^3 dx$`],
    why: [
      String.raw`$du = 2x\,dx$, and the factor $x\,dx = \dfrac{1}{2}\,du$ is present, so the integral becomes $\dfrac{1}{2}\displaystyle \int u^{-3}\,du$.`,
      String.raw`There is no factor of $x$ to pair with $dx$ to form $du$. This integral is $\arctan x + C$.`,
      String.raw`The numerator is $x^2$, not $x$, so the substitution leaves $x$ in the integrand. Long division, giving $1 - \dfrac{1}{1 + x^2}$, works here.`,
      String.raw`There is no factor of $x$ to form $du = 2x\,dx$. Expanding the cube and integrating term by term works here.`,
    ], answer: 0 },
  { id: "q614-m04", type: "mcq", skill: "u6", topic: "6.14", calc: false,
    question: String.raw`$\displaystyle \int \tan x\,dx =$`,
    choices: [String.raw`$-\ln|\cos x| + C$`, String.raw`$\ln|\cos x| + C$`, String.raw`$\sec^2 x + C$`, String.raw`$\ln|\sin x| + C$`],
    why: [
      String.raw`Rewrite $\tan x = \dfrac{\sin x}{\cos x}$ and let $u = \cos x$, so $du = -\sin x\,dx$. The integral is $-\displaystyle \int \dfrac{du}{u} = -\ln|\cos x| + C$.`,
      String.raw`This loses the negative sign from $du = -\sin x\,dx$.`,
      String.raw`$\sec^2 x$ is the derivative of $\tan x$, not an antiderivative.`,
      String.raw`$\ln|\sin x|$ is an antiderivative of $\dfrac{\cos x}{\sin x} = \cot x$.`,
    ], answer: 0 },
  { id: "q614-m05", type: "mcq", skill: "u6", topic: "6.14", calc: false,
    question: String.raw`$\displaystyle \int \dfrac{x^3}{x^2 + 1}\,dx =$`,
    choices: [String.raw`$\frac{x^2}{2} - \frac{1}{2}\ln\left( x^2 + 1 \right) + C$`, String.raw`$\frac{x^2}{2} - \arctan x + C$`, String.raw`$\frac{x^2}{2} + \frac{1}{2}\ln\left( x^2 + 1 \right) + C$`, String.raw`$\frac{1}{2}\ln\left( x^2 + 1 \right) + C$`],
    why: [
      String.raw`Long division gives $\dfrac{x^3}{x^2 + 1} = x - \dfrac{x}{x^2 + 1}$. Then $\displaystyle \int x\,dx = \dfrac{x^2}{2}$, and with $u = x^2 + 1$, $\displaystyle \int \dfrac{x}{x^2 + 1}\,dx = \dfrac{1}{2}\ln\left( x^2 + 1 \right)$.`,
      String.raw`The remainder is $-\dfrac{x}{x^2 + 1}$, which has an $x$ in the numerator, so it gives a logarithm, not $\arctan x$.`,
      String.raw`$x^3 = x\left( x^2 + 1 \right) - x$, so the remainder term is subtracted.`,
      String.raw`This treats $x^3$ as the derivative of $x^2 + 1$. That derivative is $2x$, so long division is needed first.`,
    ], answer: 0 },
  { id: "q614-m06", type: "mcq", skill: "u6", topic: "6.14", calc: false,
    question: String.raw`$\displaystyle \int_0^{1/2} \dfrac{2}{1 + 4x^2}\,dx =$`,
    choices: [String.raw`$\frac{\pi}{4}$`, String.raw`$\frac{\pi}{2}$`, String.raw`$\frac{\pi}{8}$`, String.raw`$\ln 2$`],
    why: [
      String.raw`Let $u = 2x$, so $du = 2\,dx$. The limits become $u = 0$ and $u = 1$, and the integral is $\displaystyle \int_0^1 \dfrac{du}{1 + u^2} = \arctan 1 - \arctan 0 = \dfrac{\pi}{4}$.`,
      String.raw`This uses $2\arctan(2x)$ as the antiderivative, which leaves out the chain rule: the derivative of $2\arctan(2x)$ is $\dfrac{4}{1 + 4x^2}$.`,
      String.raw`$\dfrac{1}{2}\arctan(2x)$ is an antiderivative of $\dfrac{1}{1 + 4x^2}$. The numerator 2 is left out.`,
      String.raw`This uses $\ln\left( 1 + 4x^2 \right)$, as if the numerator were the derivative of $1 + 4x^2$. That derivative is $8x$, not 2.`,
    ], answer: 0 },
  { id: "q614-f1a", type: "frq", skill: "u6", topic: "6.14", calc: false, set: "q614-s9", part: "(a)",
    prompt: String.raw`Find $\displaystyle \int \dfrac{2x^2 + 3}{x^2 + 1}\,dx$.`,
    rows: [
      { name: "Answer", earns: String.raw`Rewrites the integrand as $2 + \dfrac{1}{x^2 + 1}$ and finds $2x + \arctan x + C$.` },
    ],
    solution: String.raw`Divide: $2x^2 + 3 = 2\left( x^2 + 1 \right) + 1$, so $\dfrac{2x^2 + 3}{x^2 + 1} = 2 + \dfrac{1}{x^2 + 1}$. Then
$$\int \left( 2 + \dfrac{1}{x^2 + 1} \right) dx = 2x + \arctan x + C.$$` },
  { id: "q614-f1b", type: "frq", skill: "u6", topic: "6.14", calc: false, set: "q614-s9", part: "(b)",
    prompt: String.raw`Find $\displaystyle \int \dfrac{\cos x}{1 + \sin^2 x}\,dx$.`,
    rows: [
      { name: "Answer", earns: String.raw`Uses $u = \sin x$, $du = \cos x\,dx$, and finds $\arctan(\sin x) + C$.` },
    ],
    solution: String.raw`Let $u = \sin x$, so $du = \cos x\,dx$:
$$\int \dfrac{\cos x}{1 + \sin^2 x}\,dx = \int \dfrac{du}{1 + u^2} = \arctan u + C = \arctan(\sin x) + C.$$` },
  { id: "q614-f1c", type: "frq", skill: "u6", topic: "6.14", calc: false, set: "q614-s9", part: "(c)",
    prompt: String.raw`Evaluate $\displaystyle \int_2^3 \dfrac{1}{x^2 - 4x + 5}\,dx$.`,
    rows: [
      { name: "Antiderivative", earns: String.raw`Completes the square, $(x - 2)^2 + 1$, and finds the antiderivative $\arctan(x - 2)$.` },
      { name: "Answer", earns: String.raw`$\dfrac{\pi}{4}$` },
    ],
    solution: String.raw`$x^2 - 4x + 5 = (x - 2)^2 + 1$, so an antiderivative is $\arctan(x - 2)$:
$$\int_2^3 \dfrac{1}{(x - 2)^2 + 1}\,dx = \arctan(1) - \arctan(0) = \dfrac{\pi}{4}.$$` },
];

export default { forms: [{ id: "q614", name: "Topic 6.14 Quiz: Selecting Techniques for Antidifferentiation", group: "Unit 6: Integration and Accumulation of Change", items }] };

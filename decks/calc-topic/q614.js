export const sets = {
  "q614-s9": { name: "Choosing a technique", label: "Free response", intro: String.raw`Each of the following integrals needs a different technique. Show the technique you use.`,
    sources: [{ title: "", blocks: [{ p: String.raw`$$\int \dfrac{x^4}{x^2 + 1}\,dx, \qquad \int \dfrac{1}{x\left( 1 + (\ln x)^2 \right)}\,dx, \qquad \int_0^1 \dfrac{x}{(x + 1)^2}\,dx$$` }] }] },
};

const items = [
  { id: "q614-m01", type: "mcq", skill: "u6", topic: "6.14", calc: false, difficulty: "difficult",
    question: String.raw`$\displaystyle \int \dfrac{\sin^2 x}{1 - \cos x}\,dx =$`,
    choices: [String.raw`$x + \sin x + C$`, String.raw`$x - \sin x + C$`, String.raw`$\ln|1 - \cos x| + C$`, String.raw`$1 + \sin x + C$`],
    why: [
      String.raw`Use $\sin^2 x = 1 - \cos^2 x = (1 - \cos x)(1 + \cos x)$. The integrand simplifies to $1 + \cos x$ wherever $\cos x \ne 1$, with antiderivative $x + \sin x + C$.`,
      String.raw`The derivative of $\sin x$ is $\cos x$, so the antiderivative of $+\cos x$ is $+\sin x$.`,
      String.raw`This treats the numerator as the derivative of the denominator. The derivative of $1 - \cos x$ is $\sin x$, not $\sin^2 x$.`,
      String.raw`This rewrites the integrand as $1 + \cos x$ but keeps the $1$ in place of integrating it to $x$.`,
    ], answer: 0 },
  { id: "q614-m02", type: "mcq", skill: "u6", topic: "6.14", calc: false, difficulty: "easy",
    question: String.raw`$\displaystyle \int \dfrac{\left( \sqrt{x} + 1 \right)^2}{x}\,dx =$`,
    choices: [String.raw`$x + 4\sqrt{x} + \ln|x| + C$`, String.raw`$x + 2\sqrt{x} + \ln|x| + C$`, String.raw`$\frac{\left( \sqrt{x} + 1 \right)^3}{3}\ln|x| + C$`, String.raw`$x + 4\sqrt{x} - \frac{1}{x^2} + C$`],
    why: [
      String.raw`Expand and divide: $\dfrac{x + 2\sqrt{x} + 1}{x} = 1 + 2x^{-1/2} + \dfrac{1}{x}$. The antiderivative is $x + 4x^{1/2} + \ln|x| + C$.`,
      String.raw`$\displaystyle \int 2x^{-1/2}\,dx = 2 \cdot \dfrac{x^{1/2}}{1/2} = 4\sqrt{x}$. This answer does not divide by the new exponent $\dfrac{1}{2}$.`,
      String.raw`This finds antiderivatives of the numerator and denominator separately and multiplies them. The fraction must be rewritten first.`,
      String.raw`$-\dfrac{1}{x^2}$ is the derivative of $\dfrac{1}{x}$. The antiderivative of $\dfrac{1}{x}$ is $\ln|x|$.`,
    ], answer: 0 },
  { id: "q614-m03", type: "mcq", skill: "u6", topic: "6.14", calc: false, difficulty: "moderate",
    question: String.raw`For which of the following integrals does the substitution $u = 1 + x^2$ turn the integrand into a power of $u$ times a constant?`,
    choices: [String.raw`$\displaystyle \int \dfrac{x}{\left( 1 + x^2 \right)^3}\,dx$`, String.raw`$\displaystyle \int \dfrac{1}{1 + x^2}\,dx$`, String.raw`$\displaystyle \int \dfrac{x^2}{1 + x^2}\,dx$`, String.raw`$\displaystyle \int \dfrac{x^2}{\left( 1 + x^2 \right)^3}\,dx$`],
    why: [
      String.raw`$du = 2x\,dx$, and the factor $x\,dx = \dfrac{1}{2}\,du$ is present, so the integral becomes $\dfrac{1}{2}\displaystyle \int u^{-3}\,du$.`,
      String.raw`There is no factor of $x$ to pair with $dx$ to form $du$. This integral is $\arctan x + C$.`,
      String.raw`The numerator is $x^2$, not $x$, so the substitution leaves $x$ in the integrand. Long division, giving $1 - \dfrac{1}{1 + x^2}$, works here.`,
      String.raw`After $x\,dx = \dfrac{1}{2}\,du$, one factor of $x = \sqrt{u - 1}$ is left over, so the integrand is not a constant times a power of $u$.`,
    ], answer: 0 },
  { id: "q614-m04", type: "mcq", skill: "u6", topic: "6.14", calc: false, difficulty: "moderate",
    question: String.raw`$\displaystyle \int \tan x\,dx =$`,
    choices: [String.raw`$-\ln|\cos x| + C$`, String.raw`$\ln|\cos x| + C$`, String.raw`$\sec^2 x + C$`, String.raw`$-\ln|\sin x| + C$`],
    why: [
      String.raw`Rewrite $\tan x = \dfrac{\sin x}{\cos x}$ and let $u = \cos x$, so $du = -\sin x\,dx$. The integral is $-\displaystyle \int \dfrac{du}{u} = -\ln|\cos x| + C$.`,
      String.raw`This loses the negative sign from $du = -\sin x\,dx$.`,
      String.raw`$\sec^2 x$ is the derivative of $\tan x$, not an antiderivative.`,
      String.raw`The derivative of $-\ln|\sin x|$ is $-\dfrac{\cos x}{\sin x} = -\cot x$. This switches the roles of sine and cosine.`,
    ], answer: 0 },
  { id: "q614-m05", type: "mcq", skill: "u6", topic: "6.14", calc: false, difficulty: "difficult",
    question: String.raw`$\displaystyle \int \dfrac{e^{2x}}{e^{x} + 1}\,dx =$`,
    choices: [String.raw`$e^{x} - \ln\left( e^{x} + 1 \right) + C$`, String.raw`$\ln\left( e^{x} + 1 \right) + C$`, String.raw`$e^{x} + \ln\left( e^{x} + 1 \right) + C$`, String.raw`$e^{x} - x + C$`],
    why: [
      String.raw`Let $u = e^{x}$, so $du = e^{x}\,dx$ and $e^{2x}\,dx = u\,du$. Then $\displaystyle \int \dfrac{u}{u + 1}\,du = \int \left( 1 - \dfrac{1}{u + 1} \right) du = u - \ln(u + 1) + C = e^{x} - \ln\left( e^{x} + 1 \right) + C$.`,
      String.raw`This treats the numerator as the derivative of the denominator. The derivative of $e^{x} + 1$ is $e^{x}$, not $e^{2x}$.`,
      String.raw`$\dfrac{u}{u + 1} = 1 - \dfrac{1}{u + 1}$, so the logarithm term is subtracted.`,
      String.raw`This factors as if the numerator were $e^{2x} - 1 = \left( e^{x} - 1 \right)\left( e^{x} + 1 \right)$. The numerator is $e^{2x}$, so the division leaves a remainder.`,
    ], answer: 0 },
  { id: "q614-m06", type: "mcq", skill: "u6", topic: "6.14", calc: false, difficulty: "moderate",
    question: String.raw`$\displaystyle \int_0^{1/2} \dfrac{2}{1 + 4x^2}\,dx =$`,
    choices: [String.raw`$\frac{\pi}{4}$`, String.raw`$\frac{\pi}{2}$`, String.raw`$\frac{\pi}{8}$`, String.raw`$\ln 2$`],
    why: [
      String.raw`Let $u = 2x$, so $du = 2\,dx$. The limits become $u = 0$ and $u = 1$, and the integral is $\displaystyle \int_0^1 \dfrac{du}{1 + u^2} = \arctan 1 - \arctan 0 = \dfrac{\pi}{4}$.`,
      String.raw`This uses $2\arctan(2x)$ as the antiderivative, which leaves out the chain rule: the derivative of $2\arctan(2x)$ is $\dfrac{4}{1 + 4x^2}$.`,
      String.raw`$\dfrac{1}{2}\arctan(2x)$ is an antiderivative of $\dfrac{1}{1 + 4x^2}$. The numerator 2 is left out.`,
      String.raw`This uses $\ln\left( 1 + 4x^2 \right)$, as if the numerator were the derivative of $1 + 4x^2$. That derivative is $8x$, not 2.`,
    ], answer: 0 },
  { id: "q614-f1a", type: "frq", skill: "u6", topic: "6.14", calc: false, set: "q614-s9", part: "(a)",
    prompt: String.raw`Find $\displaystyle \int \dfrac{x^4}{x^2 + 1}\,dx$.`,
    rows: [
      { name: "Answer", earns: String.raw`Rewrites the integrand as $x^2 - 1 + \dfrac{1}{x^2 + 1}$ and finds $\dfrac{x^3}{3} - x + \arctan x + C$.` },
    ],
    solution: String.raw`Divide: $x^4 = \left( x^2 + 1 \right)\left( x^2 - 1 \right) + 1$, so $\dfrac{x^4}{x^2 + 1} = x^2 - 1 + \dfrac{1}{x^2 + 1}$. Then
$$\int \left( x^2 - 1 + \dfrac{1}{x^2 + 1} \right) dx = \dfrac{x^3}{3} - x + \arctan x + C.$$` },
  { id: "q614-f1b", type: "frq", skill: "u6", topic: "6.14", calc: false, set: "q614-s9", part: "(b)",
    prompt: String.raw`Find $\displaystyle \int \dfrac{1}{x\left( 1 + (\ln x)^2 \right)}\,dx$ for $x > 0$.`,
    rows: [
      { name: "Answer", earns: String.raw`Uses $u = \ln x$, $du = \dfrac{1}{x}\,dx$, and finds $\arctan(\ln x) + C$.` },
    ],
    solution: String.raw`Let $u = \ln x$, so $du = \dfrac{1}{x}\,dx$:
$$\int \dfrac{1}{x\left( 1 + (\ln x)^2 \right)}\,dx = \int \dfrac{du}{1 + u^2} = \arctan u + C = \arctan(\ln x) + C.$$` },
  { id: "q614-f1c", type: "frq", skill: "u6", topic: "6.14", calc: false, set: "q614-s9", part: "(c)",
    prompt: String.raw`Evaluate $\displaystyle \int_0^1 \dfrac{x}{(x + 1)^2}\,dx$.`,
    rows: [
      { name: "Antiderivative", earns: String.raw`Uses $u = x + 1$ to rewrite the integrand as $\dfrac{u - 1}{u^2} = \dfrac{1}{u} - \dfrac{1}{u^2}$ and finds the antiderivative $\ln|u| + \dfrac{1}{u}$.` },
      { name: "Answer", earns: String.raw`$\ln 2 - \dfrac{1}{2}$` },
    ],
    solution: String.raw`Let $u = x + 1$, so $du = dx$ and $x = u - 1$. When $x = 0$, $u = 1$, and when $x = 1$, $u = 2$:
$$\int_0^1 \dfrac{x}{(x + 1)^2}\,dx = \int_1^2 \left( \dfrac{1}{u} - \dfrac{1}{u^2} \right) du = \left[ \ln u + \dfrac{1}{u} \right]_1^2 = \left( \ln 2 + \dfrac{1}{2} \right) - (0 + 1) = \ln 2 - \dfrac{1}{2}.$$` },
];

export default { forms: [{ id: "q614", name: "Topic 6.14 Quiz: Selecting Techniques for Antidifferentiation", group: "Unit 6: Integration and Accumulation of Change", items }] };

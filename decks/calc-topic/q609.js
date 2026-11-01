export const sets = {
  "q609-s9": { name: "Two integrals by substitution", label: "Free response", intro: String.raw`Use substitution to answer the following.`,
    sources: [{ title: "", blocks: [{ p: String.raw`$$\int x^2\left( x^3 - 2 \right)^5 dx \qquad \text{and} \qquad \int_0^{\ln 2} \dfrac{e^{x}}{\left( 1 + e^{x} \right)^2}\,dx$$` }] }] },
};

const items = [
  { id: "q609-m01", type: "mcq", skill: "u6", topic: "6.9", calc: false,
    question: String.raw`$\displaystyle \int x^3\left( x^4 - 1 \right)^3 dx =$`,
    choices: [String.raw`$\frac{\left( x^4 - 1 \right)^4}{16} + C$`, String.raw`$\frac{\left( x^4 - 1 \right)^4}{4} + C$`, String.raw`$\frac{x^4\left( x^4 - 1 \right)^4}{16} + C$`, String.raw`$12x^3\left( x^4 - 1 \right)^2 + C$`],
    why: [
      String.raw`Let $u = x^4 - 1$, so $du = 4x^3\,dx$ and $x^3\,dx = \dfrac{1}{4}\,du$. Then $\displaystyle \int \dfrac{1}{4}u^3\,du = \dfrac{u^4}{16} + C = \dfrac{\left( x^4 - 1 \right)^4}{16} + C$.`,
      String.raw`This leaves out the factor $\dfrac{1}{4}$ from $x^3\,dx = \dfrac{1}{4}\,du$. Its derivative is $4x^3\left( x^4 - 1 \right)^3$.`,
      String.raw`This finds an antiderivative of each factor separately and multiplies them. The integral of a product is not the product of the integrals.`,
      String.raw`This differentiates $\left( x^4 - 1 \right)^3$ in place of finding an antiderivative.`,
    ], answer: 0 },
  { id: "q609-m02", type: "mcq", skill: "u6", topic: "6.9", calc: false,
    question: String.raw`$\displaystyle \int \dfrac{\ln x}{x}\,dx =$`,
    choices: [String.raw`$\frac{(\ln x)^2}{2} + C$`, String.raw`$\ln\left( \ln x \right) + C$`, String.raw`$(\ln x)^2 + C$`, String.raw`$\frac{1}{x^2} + C$`],
    why: [
      String.raw`Let $u = \ln x$, so $du = \dfrac{1}{x}\,dx$. Then $\displaystyle \int u\,du = \dfrac{u^2}{2} + C = \dfrac{(\ln x)^2}{2} + C$.`,
      String.raw`$\ln(\ln x)$ is an antiderivative of $\dfrac{1}{x\ln x}$, with $\ln x$ in the denominator.`,
      String.raw`The derivative of $(\ln x)^2$ is $\dfrac{2\ln x}{x}$, twice the integrand. The power rule needs the division by 2.`,
      String.raw`This treats $\ln x$ as its derivative $\dfrac{1}{x}$ and multiplies, which is not a substitution.`,
    ], answer: 0 },
  { id: "q609-m03", type: "mcq", skill: "u6", topic: "6.9", calc: false,
    question: String.raw`$\displaystyle \int_0^3 \dfrac{x}{\sqrt{x^2 + 16}}\,dx =$`,
    choices: ["$1$", "$2$", String.raw`$\sqrt{3}$`, String.raw`$\frac{1}{2}$`],
    why: [
      String.raw`Let $u = x^2 + 16$, so $du = 2x\,dx$. When $x = 0$, $u = 16$, and when $x = 3$, $u = 25$. The integral is $\dfrac{1}{2}\displaystyle \int_{16}^{25} u^{-1/2}\,du = \left[ u^{1/2} \right]_{16}^{25} = 5 - 4 = 1$.`,
      String.raw`This leaves out the factor $\dfrac{1}{2}$ from $x\,dx = \dfrac{1}{2}\,du$, giving $2(5 - 4)$.`,
      String.raw`This evaluates $\sqrt{u}$ at the $x$ limits 0 and 3. The limits must be changed to $u = 16$ and $u = 25$.`,
      String.raw`This multiplies by $\dfrac{1}{2}$ again after the power rule has already canceled it: $\dfrac{1}{2} \cdot \dfrac{u^{1/2}}{1/2} = u^{1/2}$.`,
    ], answer: 0 },
  { id: "q609-m04", type: "mcq", skill: "u6", topic: "6.9", calc: false,
    stem: String.raw`The substitution $u = x^2 + 1$ is used in $\displaystyle \int_1^3 x\sqrt{x^2 + 1}\,dx$.`,
    question: "Which of the following is equal to the integral?",
    choices: [String.raw`$\displaystyle \frac{1}{2}\int_2^{10} \sqrt{u}\,du$`, String.raw`$\displaystyle \int_2^{10} \sqrt{u}\,du$`, String.raw`$\displaystyle \frac{1}{2}\int_1^3 \sqrt{u}\,du$`, String.raw`$\displaystyle 2\int_2^{10} \sqrt{u}\,du$`],
    why: [
      String.raw`$du = 2x\,dx$, so $x\,dx = \dfrac{1}{2}\,du$. The limits become $u = 1^2 + 1 = 2$ and $u = 3^2 + 1 = 10$.`,
      String.raw`This leaves out the factor $\dfrac{1}{2}$ from $x\,dx = \dfrac{1}{2}\,du$.`,
      String.raw`These are the $x$ limits. With $u$ as the variable, the limits must be values of $u$: 2 and 10.`,
      String.raw`This multiplies by 2 in place of dividing by 2. Since $du = 2x\,dx$, $x\,dx$ is half of $du$.`,
    ], answer: 0 },
  { id: "q609-m05", type: "mcq", skill: "u6", topic: "6.9", calc: false,
    question: String.raw`$\displaystyle \int \cos^4 x\sin x\,dx =$`,
    choices: [String.raw`$-\frac{\cos^5 x}{5} + C$`, String.raw`$\frac{\cos^5 x}{5} + C$`, String.raw`$-\frac{\sin^5 x}{5} + C$`, String.raw`$-\cos^5 x + C$`],
    why: [
      String.raw`Let $u = \cos x$, so $du = -\sin x\,dx$. Then $\displaystyle -\int u^4\,du = -\dfrac{u^5}{5} + C = -\dfrac{\cos^5 x}{5} + C$.`,
      String.raw`This loses the negative sign from $du = -\sin x\,dx$.`,
      String.raw`The derivative of $-\dfrac{\sin^5 x}{5}$ is $-\sin^4 x\cos x$. The roles of sine and cosine are switched.`,
      String.raw`The derivative of $-\cos^5 x$ is $5\cos^4 x\sin x$. The power rule needs the division by 5.`,
    ], answer: 0 },
  { id: "q609-m06", type: "mcq", skill: "u6", topic: "6.9", calc: false,
    question: String.raw`$\displaystyle \int_0^{\pi/4} \sec^2 x\, e^{\tan x}\,dx =$`,
    choices: ["$e - 1$", "$e$", String.raw`$e^{\pi/4} - 1$`, "$1 - e$"],
    why: [
      String.raw`Let $u = \tan x$, so $du = \sec^2 x\,dx$. The limits become $u = \tan 0 = 0$ and $u = \tan\dfrac{\pi}{4} = 1$. The integral is $\displaystyle \int_0^1 e^{u}\,du = e - 1$.`,
      String.raw`This leaves out the value at the lower limit, $e^0 = 1$.`,
      String.raw`This evaluates $e^{u}$ at the $x$ limits. The upper limit for $u$ is $\tan\dfrac{\pi}{4} = 1$, not $\dfrac{\pi}{4}$.`,
      String.raw`This subtracts in the wrong order, $F(0) - F(1)$.`,
    ], answer: 0 },
  { id: "q609-f1a", type: "frq", skill: "u6", topic: "6.9", calc: false, set: "q609-s9", part: "(a)",
    prompt: String.raw`Find $\displaystyle \int x^2\left( x^3 - 2 \right)^5 dx$.`,
    rows: [
      { name: "Substitution", earns: String.raw`$u = x^3 - 2$ and $du = 3x^2\,dx$, giving $\displaystyle \dfrac{1}{3}\int u^5\,du$.` },
      { name: "Answer", earns: String.raw`$\dfrac{\left( x^3 - 2 \right)^6}{18} + C$` },
    ],
    solution: String.raw`Let $u = x^3 - 2$. Then $du = 3x^2\,dx$, so $x^2\,dx = \dfrac{1}{3}\,du$:
$$\int x^2\left( x^3 - 2 \right)^5 dx = \dfrac{1}{3}\int u^5\,du = \dfrac{1}{3} \cdot \dfrac{u^6}{6} + C = \dfrac{\left( x^3 - 2 \right)^6}{18} + C.$$` },
  { id: "q609-f1b", type: "frq", skill: "u6", topic: "6.9", calc: false, set: "q609-s9", part: "(b)",
    prompt: String.raw`Evaluate $\displaystyle \int_0^{\ln 2} \dfrac{e^{x}}{\left( 1 + e^{x} \right)^2}\,dx$.`,
    rows: [
      { name: "Integral in u", earns: String.raw`$\displaystyle \int_2^3 u^{-2}\,du$ with $u = 1 + e^{x}$, or an equivalent antiderivative in $x$.` },
      { name: "Answer", earns: String.raw`$\dfrac{1}{6}$` },
    ],
    solution: String.raw`Let $u = 1 + e^{x}$. Then $du = e^{x}\,dx$. When $x = 0$, $u = 1 + 1 = 2$, and when $x = \ln 2$, $u = 1 + 2 = 3$:
$$\int_0^{\ln 2} \dfrac{e^{x}}{\left( 1 + e^{x} \right)^2}\,dx = \int_2^3 u^{-2}\,du = \left[ -\dfrac{1}{u} \right]_2^3 = -\dfrac{1}{3} + \dfrac{1}{2} = \dfrac{1}{6}.$$` },
];

export default { forms: [{ id: "q609", name: "Topic 6.9 Quiz: Integrating Using Substitution", group: "Unit 6: Integration and Accumulation of Change", items }] };

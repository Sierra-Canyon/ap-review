export const sets = {
  "q609-s1": { name: "Values of f, f', g, and g'", label: "Table", intro: String.raw`The functions $f$ and $g$ are differentiable, and their derivatives are continuous. Selected values of $f$, $f'$, $g$, and $g'$ are shown in the table below.`,
    sources: [{ title: "", blocks: [{ table: { head: ["$x$", "$1$", "$2$", "$3$", "$4$", "$5$"], rows: [
      ["$f(x)$", "$3$", "$4$", "$0$", "$2$", "$-1$"],
      ["$f'(x)$", "$2$", "$-1$", "$1$", "$3$", "$4$"],
      ["$g(x)$", "$2$", "$1$", "$5$", "$3$", "$4$"],
      ["$g'(x)$", "$1$", "$3$", "$-2$", "$2$", "$5$"]] } }] }] },
  "q609-s9": { name: "Two integrals by substitution", label: "Free response", intro: String.raw`Use substitution to answer the following.`,
    sources: [{ title: "", blocks: [{ p: String.raw`$$\int x^2\left( x^3 - 2 \right)^5 dx \qquad \text{and} \qquad \int_0^{\ln 2} \dfrac{e^{x}}{\left( 1 + e^{x} \right)^2}\,dx$$` }] }] },
};

const items = [
  { id: "q609-m01", type: "mcq", skill: "u6", topic: "6.9", calc: false, difficulty: "easy",
    question: String.raw`$\displaystyle \int x^3\left( x^4 - 1 \right)^3 dx =$`,
    choices: [String.raw`$\frac{\left( x^4 - 1 \right)^4}{16} + C$`, String.raw`$\frac{\left( x^4 - 1 \right)^4}{4} + C$`, String.raw`$\frac{x^4\left( x^4 - 1 \right)^4}{16} + C$`, String.raw`$12x^3\left( x^4 - 1 \right)^2 + C$`],
    why: [
      String.raw`Let $u = x^4 - 1$, so $du = 4x^3\,dx$ and $x^3\,dx = \dfrac{1}{4}\,du$. Then $\displaystyle \int \dfrac{1}{4}u^3\,du = \dfrac{u^4}{16} + C = \dfrac{\left( x^4 - 1 \right)^4}{16} + C$.`,
      String.raw`This leaves out the factor $\dfrac{1}{4}$ from $x^3\,dx = \dfrac{1}{4}\,du$. Its derivative is $4x^3\left( x^4 - 1 \right)^3$.`,
      String.raw`This finds an antiderivative of each factor separately and multiplies them. The integral of a product is not the product of the integrals.`,
      String.raw`This differentiates $\left( x^4 - 1 \right)^3$ in place of finding an antiderivative.`,
    ], answer: 0 },
  { id: "q609-m02", type: "mcq", skill: "u6", topic: "6.9", calc: false, difficulty: "moderate",
    question: String.raw`$\displaystyle \int \dfrac{e^{\sqrt{x}}}{\sqrt{x}}\,dx =$`,
    choices: [String.raw`$2e^{\sqrt{x}} + C$`, String.raw`$e^{\sqrt{x}} + C$`, String.raw`$\frac{1}{2}e^{\sqrt{x}} + C$`, String.raw`$2\sqrt{x}\,e^{\sqrt{x}} + C$`],
    why: [
      String.raw`Let $u = \sqrt{x}$, so $du = \dfrac{1}{2\sqrt{x}}\,dx$ and $\dfrac{dx}{\sqrt{x}} = 2\,du$. Then $\displaystyle \int 2e^{u}\,du = 2e^{u} + C = 2e^{\sqrt{x}} + C$.`,
      String.raw`The derivative of $e^{\sqrt{x}}$ is $\dfrac{e^{\sqrt{x}}}{2\sqrt{x}}$, half of the integrand. The factor 2 from $\dfrac{dx}{\sqrt{x}} = 2\,du$ is missing.`,
      String.raw`This multiplies by $\dfrac{1}{2}$ in place of 2. Since $du = \dfrac{1}{2\sqrt{x}}\,dx$, the factor $\dfrac{1}{\sqrt{x}}\,dx$ is twice $du$.`,
      String.raw`This finds an antiderivative of $\dfrac{1}{\sqrt{x}}$, which is $2\sqrt{x}$, and keeps $e^{\sqrt{x}}$ as if it were a constant.`,
    ], answer: 0 },
  { id: "q609-m03", type: "mcq", skill: "u6", topic: "6.9", calc: false, difficulty: "moderate",
    question: String.raw`$\displaystyle \int_0^{12} \dfrac{x}{\sqrt{x^2 + 25}}\,dx =$`,
    choices: ["$8$", "$16$", String.raw`$2\sqrt{3}$`, "$13$"],
    why: [
      String.raw`Let $u = x^2 + 25$, so $du = 2x\,dx$. When $x = 0$, $u = 25$, and when $x = 12$, $u = 169$. The integral is $\dfrac{1}{2}\displaystyle \int_{25}^{169} u^{-1/2}\,du = \left[ u^{1/2} \right]_{25}^{169} = 13 - 5 = 8$.`,
      String.raw`This leaves out the factor $\dfrac{1}{2}$ from $x\,dx = \dfrac{1}{2}\,du$, giving $2(13 - 5)$.`,
      String.raw`This evaluates $\sqrt{u}$ at the $x$ limits 0 and 12. The limits must be changed to $u = 25$ and $u = 169$.`,
      String.raw`$13 = \sqrt{169}$ is the value at the upper limit only. The value at the lower limit, $\sqrt{25} = 5$, must be subtracted.`,
    ], answer: 0 },
  { id: "q609-m04", type: "mcq", skill: "u6", topic: "6.9", calc: false, difficulty: "difficult",
    stem: String.raw`The substitution $u = x^3 + 1$ is used in $\displaystyle \int_0^2 \dfrac{x^2}{\sqrt{x^3 + 1}}\,dx$.`,
    question: "Which of the following is equal to the integral?",
    choices: [String.raw`$\displaystyle \frac{1}{3}\int_1^9 \dfrac{1}{\sqrt{u}}\,du$`, String.raw`$\displaystyle \int_1^9 \dfrac{1}{\sqrt{u}}\,du$`, String.raw`$\displaystyle \frac{1}{3}\int_0^2 \dfrac{1}{\sqrt{u}}\,du$`, String.raw`$\displaystyle 3\int_1^9 \dfrac{1}{\sqrt{u}}\,du$`],
    why: [
      String.raw`$du = 3x^2\,dx$, so $x^2\,dx = \dfrac{1}{3}\,du$. The limits become $u = 0^3 + 1 = 1$ and $u = 2^3 + 1 = 9$.`,
      String.raw`This leaves out the factor $\dfrac{1}{3}$ from $x^2\,dx = \dfrac{1}{3}\,du$.`,
      String.raw`These are the $x$ limits. With $u$ as the variable, the limits must be values of $u$: 1 and 9.`,
      String.raw`This multiplies by 3 in place of dividing by 3. Since $du = 3x^2\,dx$, $x^2\,dx$ is one third of $du$.`,
    ], answer: 0 },
  { id: "q609-m05", type: "mcq", skill: "u6", topic: "6.9", calc: false, difficulty: "easy",
    question: String.raw`$\displaystyle \int \cos^4 x\sin x\,dx =$`,
    choices: [String.raw`$-\frac{\cos^5 x}{5} + C$`, String.raw`$\frac{\cos^5 x}{5} + C$`, String.raw`$-\frac{\sin^5 x}{5} + C$`, String.raw`$-\cos^5 x + C$`],
    why: [
      String.raw`Let $u = \cos x$, so $du = -\sin x\,dx$. Then $\displaystyle -\int u^4\,du = -\dfrac{u^5}{5} + C = -\dfrac{\cos^5 x}{5} + C$.`,
      String.raw`This loses the negative sign from $du = -\sin x\,dx$.`,
      String.raw`The derivative of $-\dfrac{\sin^5 x}{5}$ is $-\sin^4 x\cos x$. The roles of sine and cosine are switched.`,
      String.raw`The derivative of $-\cos^5 x$ is $5\cos^4 x\sin x$. The power rule needs the division by 5.`,
    ], answer: 0 },
  { id: "q609-m06", type: "mcq", skill: "u6", topic: "6.9", calc: false, difficulty: "difficult", set: "q609-s1",
    question: String.raw`What is the value of $\displaystyle \int_1^3 f'\left( g(x) \right) g'(x)\,dx$?`,
    choices: ["$-5$", "$-3$", "$5$", "$-15$"],
    why: [
      String.raw`Let $u = g(x)$, so $du = g'(x)\,dx$. The limits become $u = g(1) = 2$ and $u = g(3) = 5$, and the integral is $\displaystyle \int_2^5 f'(u)\,du = f(5) - f(2) = -1 - 4 = -5$.`,
      String.raw`$f(3) - f(1) = 0 - 3 = -3$ uses the $x$ limits in $f$. After the substitution $u = g(x)$, the limits are $g(1) = 2$ and $g(3) = 5$.`,
      String.raw`$f'(5) - f'(2) = 4 - (-1) = 5$ evaluates $f'$ at the new limits. An antiderivative of $f'(u)$ is $f(u)$, so the values of $f$ are needed.`,
      String.raw`$-15 = (-5)(3)$ also multiplies by $g(3) - g(1) = 3$. The factor $g'(x)\,dx$ becomes $du$, so nothing is left to multiply.`,
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

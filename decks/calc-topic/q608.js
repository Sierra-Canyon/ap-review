export const sets = {
  "q608-s9": { name: "Antiderivatives", label: "Free response", intro: String.raw`Answer the following questions about antiderivatives.`,
    sources: [{ title: "", blocks: [{ p: String.raw`The function $f$ is defined for $x > 0$ with $f'(x) = 3x^2 - 4x + \dfrac{2}{x}$ and $f(1) = 5$.` }] }] },
};

const items = [
  { id: "q608-m01", type: "mcq", skill: "u6", topic: "6.8", calc: false, difficulty: "easy",
    question: String.raw`$\displaystyle \int \left( 3\sqrt{x} - \dfrac{4}{x^3} \right) dx =$`,
    choices: [String.raw`$2x^{3/2} + 2x^{-2} + C$`, String.raw`$2x^{3/2} - 2x^{-2} + C$`, String.raw`$\frac{3}{2}x^{-1/2} + 12x^{-4} + C$`, String.raw`$\frac{9}{2}x^{3/2} + 2x^{-2} + C$`],
    why: [
      String.raw`$\displaystyle \int 3x^{1/2}\,dx = 3 \cdot \dfrac{x^{3/2}}{3/2} = 2x^{3/2}$ and $\displaystyle \int -4x^{-3}\,dx = -4 \cdot \dfrac{x^{-2}}{-2} = 2x^{-2}$.`,
      String.raw`Dividing $-4x^{-2}$ by the new exponent $-2$ gives $+2x^{-2}$. This answer loses that sign.`,
      String.raw`This differentiates each term in place of finding an antiderivative.`,
      String.raw`This multiplies by $\dfrac{3}{2}$ in place of dividing by it: $3 \cdot \dfrac{3}{2} = \dfrac{9}{2}$.`,
    ], answer: 0 },
  { id: "q608-m02", type: "mcq", skill: "u6", topic: "6.8", calc: false, difficulty: "easy",
    question: String.raw`$\displaystyle \int \left( 4\cos x - \csc^2 x \right) dx =$`,
    choices: [String.raw`$4\sin x + \cot x + C$`, String.raw`$4\sin x - \cot x + C$`, String.raw`$-4\sin x + \cot x + C$`, String.raw`$-4\sin x + 2\csc^2 x\cot x + C$`],
    why: [
      String.raw`$\dfrac{d}{dx}\left( 4\sin x \right) = 4\cos x$ and $\dfrac{d}{dx}\cot x = -\csc^2 x$, so the antiderivative is $4\sin x + \cot x + C$.`,
      String.raw`The derivative of $-\cot x$ is $+\csc^2 x$. The antiderivative of $-\csc^2 x$ is $+\cot x$.`,
      String.raw`The derivative of $\sin x$ is $\cos x$, with no negative sign, so the antiderivative of $4\cos x$ is $+4\sin x$.`,
      String.raw`This differentiates each term in place of finding an antiderivative.`,
    ], answer: 0 },
  { id: "q608-m03", type: "mcq", skill: "u6", topic: "6.8", calc: false, difficulty: "easy",
    question: String.raw`$\displaystyle \int \dfrac{x^3 + 5x}{x^2}\,dx =$`,
    choices: [String.raw`$\frac{x^2}{2} + 5\ln|x| + C$`, String.raw`$\dfrac{\frac{x^4}{4} + \frac{5x^2}{2}}{\frac{x^3}{3}} + C$`, String.raw`$\frac{x^2}{2} - \frac{5}{x^2} + C$`, String.raw`$x + 5\ln|x| + C$`],
    why: [
      String.raw`Divide each term by $x^2$: $x + \dfrac{5}{x}$. The antiderivative is $\dfrac{x^2}{2} + 5\ln|x| + C$.`,
      String.raw`This finds antiderivatives of the numerator and denominator separately. The integral of a quotient is not the quotient of the integrals.`,
      String.raw`$-\dfrac{5}{x^2}$ is the derivative of $\dfrac{5}{x}$, not an antiderivative. The antiderivative of $\dfrac{5}{x}$ is $5\ln|x|$.`,
      String.raw`This rewrites $\dfrac{x^3}{x^2}$ as $x$ but does not find its antiderivative, $\dfrac{x^2}{2}$.`,
    ], answer: 0 },
  { id: "q608-m04", type: "mcq", skill: "u6", topic: "6.8", calc: false, difficulty: "easy",
    question: String.raw`$\displaystyle \int \dfrac{5}{\sqrt{1 - x^2}}\,dx =$`,
    choices: [String.raw`$5\arcsin x + C$`, String.raw`$5\arctan x + C$`, String.raw`$-5\sqrt{1 - x^2} + C$`, String.raw`$\frac{5x}{\left( 1 - x^2 \right)^{3/2}} + C$`],
    why: [
      String.raw`$\dfrac{d}{dx}\arcsin x = \dfrac{1}{\sqrt{1 - x^2}}$, so the antiderivative is $5\arcsin x + C$.`,
      String.raw`$\dfrac{d}{dx}\arctan x = \dfrac{1}{1 + x^2}$, which has no square root.`,
      String.raw`The derivative of $-5\sqrt{1 - x^2}$ is $\dfrac{5x}{\sqrt{1 - x^2}}$, which has an extra factor of $x$.`,
      String.raw`This is the derivative of $\dfrac{5}{\sqrt{1 - x^2}}$, not an antiderivative.`,
    ], answer: 0 },
  { id: "q608-m05", type: "mcq", skill: "u6", topic: "6.8", calc: false, difficulty: "moderate",
    question: String.raw`$\displaystyle \int x\left( x - 2 \right)^2 dx =$`,
    choices: [String.raw`$\frac{x^4}{4} - \frac{4x^3}{3} + 2x^2 + C$`, String.raw`$\frac{x\left( x - 2 \right)^3}{3} + C$`, String.raw`$\frac{x^4}{4} + 2x^2 + C$`, String.raw`$\frac{x^2}{2} \cdot \frac{\left( x - 2 \right)^3}{3} + C$`],
    why: [
      String.raw`Expand first: $x\left( x^2 - 4x + 4 \right) = x^3 - 4x^2 + 4x$, with antiderivative $\dfrac{x^4}{4} - \dfrac{4x^3}{3} + 2x^2 + C$.`,
      String.raw`This treats the factor $x$ as a constant and applies the power rule to $\left( x - 2 \right)^2$. Its derivative, by the product rule, is not $x\left( x - 2 \right)^2$.`,
      String.raw`This squares each term separately, using $x^2 + 4$ for $\left( x - 2 \right)^2$. The middle term $-4x$ is missing.`,
      String.raw`This finds an antiderivative of each factor and multiplies them. The integral of a product is not the product of the integrals.`,
    ], answer: 0 },
  { id: "q608-m06", type: "mcq", skill: "u6", topic: "6.8", calc: false, difficulty: "moderate",
    stem: String.raw`The function $f$ satisfies $f'(x) = 2x - \sin x$ and $f(0) = 3$.`,
    question: String.raw`$f(x) =$`,
    choices: [String.raw`$x^2 + \cos x + 2$`, String.raw`$x^2 + \cos x + 3$`, String.raw`$x^2 - \cos x + 4$`, String.raw`$x^2 - \cos x + 3$`],
    why: [
      String.raw`$f(x) = x^2 + \cos x + C$, and $f(0) = 0 + 1 + C = 3$, so $C = 2$.`,
      String.raw`This sets $C = 3$ without using $\cos 0 = 1$. Then $f(0) = 4$.`,
      String.raw`This takes $-\cos x$ as the antiderivative of $-\sin x$. The derivative of $-\cos x$ is $+\sin x$.`,
      String.raw`This has the wrong sign on $\cos x$, and it also gives $f(0) = 2$.`,
    ], answer: 0 },
  { id: "q608-f1a", type: "frq", skill: "u6", topic: "6.8", calc: false, set: "q608-s9", part: "(a)",
    prompt: String.raw`Find $f(x)$.`,
    rows: [
      { name: "Antiderivative", earns: String.raw`$f(x) = x^3 - 2x^2 + 2\ln x + C$` },
      { name: "Answer", earns: String.raw`Uses $f(1) = 5$ to find $C = 6$: $f(x) = x^3 - 2x^2 + 2\ln x + 6$.` },
    ],
    solution: String.raw`$f(x) = \displaystyle \int \left( 3x^2 - 4x + \dfrac{2}{x} \right) dx = x^3 - 2x^2 + 2\ln x + C$, where $\ln|x| = \ln x$ because $x > 0$. Then $f(1) = 1 - 2 + 0 + C = 5$, so $C = 6$ and
$$f(x) = x^3 - 2x^2 + 2\ln x + 6.$$` },
  { id: "q608-f1b", type: "frq", skill: "u6", topic: "6.8", calc: false, set: "q608-s9", part: "(b)",
    prompt: String.raw`Find $\displaystyle \int \dfrac{x^2 - 3\sqrt{x}}{x}\,dx$ for $x > 0$.`,
    rows: [
      { name: "Rewrite", earns: String.raw`$\dfrac{x^2 - 3\sqrt{x}}{x} = x - 3x^{-1/2}$` },
      { name: "Answer", earns: String.raw`$\dfrac{x^2}{2} - 6\sqrt{x} + C$` },
    ],
    solution: String.raw`Divide each term by $x$: $\dfrac{x^2}{x} - \dfrac{3x^{1/2}}{x} = x - 3x^{-1/2}$. Then
$$\int \left( x - 3x^{-1/2} \right) dx = \dfrac{x^2}{2} - 3 \cdot \dfrac{x^{1/2}}{1/2} + C = \dfrac{x^2}{2} - 6\sqrt{x} + C.$$` },
];

export default { forms: [{ id: "q608", name: "Topic 6.8 Quiz: Antiderivatives and Indefinite Integrals", group: "Unit 6: Integration and Accumulation of Change", items }] };

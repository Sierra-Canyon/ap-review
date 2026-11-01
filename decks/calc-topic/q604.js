import { graph } from "../../plot.js";

export const sets = {
  "q604-s1": { name: "The graph of f", label: "Graph", intro: String.raw`The graph of the continuous function $f$, made of three line segments, is shown below. Let $g(x) = \displaystyle \int_1^x f(t)\,dt$.`,
    sources: [{ title: "", blocks: [{ svg: graph({ x: [-1, 6], y: [-2, 4], xname: "x", yname: "y", segments: [[-1, 1, 1, 3], [1, 3, 3, -1], [3, -1, 5, 1]], labels: [[4.2, 1.3, "f"]],
      alt: "Graph of f made of three segments: from (negative 1, 1) up to (1, 3), from (1, 3) down to (3, negative 1), and from (3, negative 1) up to (5, 1). The value f(2) is 1." }) }] }] },
  "q604-s9": { name: "An accumulation function", label: "Free response", intro: String.raw`Let $F(x) = \displaystyle \int_1^x \sqrt{t^2 + 3}\,dt$.`,
    sources: [{ title: "", blocks: [{ p: String.raw`$$F(x) = \int_1^x \sqrt{t^2 + 3}\,dt$$` }] }] },
};

const items = [
  { id: "q604-m01", type: "mcq", skill: "u6", topic: "6.4", calc: false,
    stem: String.raw`Let $H(x) = \displaystyle \int_x^{\pi} \sin\left( t^2 \right) dt$.`,
    question: String.raw`$H'(x) =$`,
    choices: [String.raw`$-\sin\left( x^2 \right)$`, String.raw`$\sin\left( x^2 \right)$`, String.raw`$-2x\cos\left( x^2 \right)$`, String.raw`$\sin\left( \pi^2 \right) - \sin\left( x^2 \right)$`],
    why: [
      String.raw`$H(x) = -\displaystyle \int_{\pi}^x \sin\left( t^2 \right) dt$, so by the Fundamental Theorem of Calculus, $H'(x) = -\sin\left( x^2 \right)$.`,
      String.raw`The variable is the lower limit. Reversing the limits to put $x$ on top gives a negative sign.`,
      String.raw`This differentiates the integrand. The Fundamental Theorem gives the integrand itself, evaluated at $x$.`,
      String.raw`This evaluates the integrand at both limits and subtracts. The derivative of the accumulation function is the integrand at $x$ only.`,
    ], answer: 0 },
  { id: "q604-m02", type: "mcq", skill: "u6", topic: "6.4", calc: false,
    question: String.raw`$\dfrac{d}{dx} \displaystyle \int_0^{x^3} \cos t\,dt =$`,
    choices: [String.raw`$3x^2\cos\left( x^3 \right)$`, String.raw`$\cos\left( x^3 \right)$`, String.raw`$-3x^2\sin\left( x^3 \right)$`, String.raw`$\cos\left( 3x^2 \right)$`],
    why: [
      String.raw`By the Fundamental Theorem and the chain rule, the derivative is $\cos\left( x^3 \right) \cdot \dfrac{d}{dx}\left( x^3 \right) = 3x^2\cos\left( x^3 \right)$.`,
      String.raw`This leaves out the chain rule factor $3x^2$, the derivative of the upper limit.`,
      String.raw`This differentiates $\cos$. The Fundamental Theorem gives the integrand $\cos t$ evaluated at $t = x^3$.`,
      String.raw`This evaluates the integrand at the derivative of the upper limit, $3x^2$, in place of multiplying by it.`,
    ], answer: 0 },
  { id: "q604-m03", type: "mcq", skill: "u6", topic: "6.4", calc: false, set: "q604-s1",
    question: String.raw`What is the value of $g'(2)$?`,
    choices: ["$1$", "$2$", "$-2$", "$3$"],
    why: [
      String.raw`By the Fundamental Theorem of Calculus, $g'(x) = f(x)$, so $g'(2) = f(2) = 1$. The point $(2, 1)$ is on the segment from $(1, 3)$ to $(3, -1)$.`,
      String.raw`$2$ is $g(2) = \displaystyle \int_1^2 f(t)\,dt$, the area of the trapezoid with heights 3 and 1. The question asks for the derivative of $g$.`,
      String.raw`$-2$ is the slope of the graph of $f$ at $x = 2$, which is $f'(2) = g''(2)$.`,
      String.raw`$3$ is $f(1)$, the value at the lower limit of integration.`,
    ], answer: 0 },
  { id: "q604-m04", type: "mcq", skill: "u6", topic: "6.4", calc: false,
    stem: String.raw`Let $g(x) = \displaystyle \int_0^{2x} \left( t^2 + 3t \right) dt$.`,
    question: String.raw`What is the value of $g'(1)$?`,
    choices: ["$20$", "$10$", "$8$", "$14$"],
    why: [
      String.raw`$g'(x) = \left( (2x)^2 + 3(2x) \right) \cdot 2$, so $g'(1) = (4 + 6)(2) = 20$.`,
      String.raw`$10$ is the integrand at $t = 2$. The chain rule factor 2, from the derivative of $2x$, is missing.`,
      String.raw`$8 = 2(1 + 3)$ evaluates the integrand at $t = 1$ in place of $t = 2x = 2$.`,
      String.raw`$14 = 2(2 \cdot 2 + 3)$ differentiates the integrand before evaluating it.`,
    ], answer: 0 },
  { id: "q604-m05", type: "mcq", skill: "u6", topic: "6.4", calc: false,
    stem: String.raw`The function $f$ is continuous, and $\displaystyle \int_4^x f(t)\,dt = x^2 - 3x - 4$ for all real numbers $x$.`,
    question: String.raw`What is the value of $f(4)$?`,
    choices: ["$5$", "$0$", "$2$", "$13$"],
    why: [
      String.raw`Differentiating both sides and using the Fundamental Theorem of Calculus gives $f(x) = 2x - 3$, so $f(4) = 5$.`,
      String.raw`$0$ is the value of the integral at $x = 4$, where the limits are equal. The function $f$ is the derivative of the integral.`,
      String.raw`$2$ is the second derivative of $x^2 - 3x - 4$, which is $f'(4)$.`,
      String.raw`$13$ comes from $x^2 - 3$, which drops the $x$ when differentiating $3x$.`,
    ], answer: 0 },
  { id: "q604-m06", type: "mcq", skill: "u6", topic: "6.4", calc: false,
    stem: String.raw`Let $F(x) = \displaystyle \int_{-1}^x \left( t^3 - 4t \right) dt$.`,
    question: String.raw`What is the value of $F''(2)$?`,
    choices: ["$8$", "$0$", String.raw`$-\frac{9}{4}$`, "$12$"],
    why: [
      String.raw`By the Fundamental Theorem, $F'(x) = x^3 - 4x$, so $F''(x) = 3x^2 - 4$ and $F''(2) = 12 - 4 = 8$.`,
      String.raw`$0$ is $F'(2) = 8 - 8$. One more derivative is needed.`,
      String.raw`$-\dfrac{9}{4}$ is $F(2)$, the value of the integral itself.`,
      String.raw`$12$ is $3x^2$ at $x = 2$. The derivative of $-4x$ is $-4$, not $0$.`,
    ], answer: 0 },
  { id: "q604-f1a", type: "frq", skill: "u6", topic: "6.4", calc: false, set: "q604-s9", part: "(a)",
    prompt: String.raw`Find $F'(1)$. Write an equation for the line tangent to the graph of $F$ at $x = 1$.`,
    rows: [
      { name: String.raw`$F'(1)$`, earns: String.raw`$F'(x) = \sqrt{x^2 + 3}$ by the Fundamental Theorem of Calculus, so $F'(1) = 2$.` },
      { name: "Tangent line", earns: String.raw`$y = 2(x - 1)$, using $F(1) = 0$.` },
    ],
    solution: String.raw`The integrand is continuous, so by the Fundamental Theorem of Calculus, $F'(x) = \sqrt{x^2 + 3}$ and $F'(1) = \sqrt{4} = 2$. Since the limits are equal, $F(1) = \displaystyle \int_1^1 \sqrt{t^2 + 3}\,dt = 0$. The tangent line is $y - 0 = 2(x - 1)$, or $y = 2(x - 1)$.` },
  { id: "q604-f1b", type: "frq", skill: "u6", topic: "6.4", calc: false, set: "q604-s9", part: "(b)",
    prompt: String.raw`Let $H(x) = F\left( x^3 \right) = \displaystyle \int_1^{x^3} \sqrt{t^2 + 3}\,dt$. Find $H'(x)$ and $H'(1)$.`,
    rows: [
      { name: String.raw`$H'(x)$`, earns: String.raw`$H'(x) = 3x^2\sqrt{x^6 + 3}$ by the chain rule.` },
      { name: String.raw`$H'(1)$`, earns: "$6$" },
    ],
    solution: String.raw`By the chain rule, $H'(x) = F'\left( x^3 \right) \cdot 3x^2 = 3x^2\sqrt{\left( x^3 \right)^2 + 3} = 3x^2\sqrt{x^6 + 3}$. Then $H'(1) = 3\sqrt{4} = 6$.` },
];

export default { forms: [{ id: "q604", name: "Topic 6.4 Quiz: The Fundamental Theorem and Accumulation Functions", group: "Unit 6: Integration and Accumulation of Change", items }] };

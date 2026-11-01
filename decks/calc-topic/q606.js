import { graph } from "../../plot.js";

export const sets = {
  "q606-s1": { name: "A semicircle and a segment", label: "Graph", intro: String.raw`The graph of the continuous function $f$ on $[-2, 6]$ is shown below. It is made of a semicircle of radius 2 centered at the origin and a line segment from $(2, 0)$ to $(6, -3)$.`,
    sources: [{ title: "", blocks: [{ svg: graph({ x: [-3, 7], y: [-4, 3], xname: "x", yname: "y", fns: [{ f: (x) => Math.sqrt(Math.max(0, 4 - x * x)), from: -2, to: 2 }], segments: [[2, 0, 6, -3]], labels: [[0.3, 2.3, "f"]],
      alt: "Graph of f: the upper half of the circle of radius 2 centered at the origin, from (negative 2, 0) up to (0, 2) and down to (2, 0), followed by a line segment from (2, 0) down to (6, negative 3)." }) }] }] },
  "q606-s9": { name: "Two integrals", label: "Free response", intro: String.raw`The functions $f$ and $g$ are continuous on the real numbers and satisfy the following.`,
    sources: [{ title: "", blocks: [{ p: String.raw`$$\int_0^3 f(x)\,dx = 5, \qquad \int_0^7 f(x)\,dx = 2, \qquad \int_3^7 g(x)\,dx = 6$$` }] }] },
};

const items = [
  { id: "q606-m01", type: "mcq", skill: "u6", topic: "6.6", calc: false,
    stem: String.raw`The function $f$ is continuous, $\displaystyle \int_0^6 f(x)\,dx = 10$, $\displaystyle \int_0^2 f(x)\,dx = 3$, and $\displaystyle \int_4^6 f(x)\,dx = -1$.`,
    question: String.raw`What is the value of $\displaystyle \int_2^4 f(x)\,dx$?`,
    choices: ["$8$", "$6$", "$14$", "$12$"],
    why: [
      String.raw`$\displaystyle \int_0^6 f = \int_0^2 f + \int_2^4 f + \int_4^6 f$, so $10 = 3 + \displaystyle \int_2^4 f + (-1)$ and $\displaystyle \int_2^4 f(x)\,dx = 8$.`,
      String.raw`$10 - 3 - 1 = 6$ subtracts $1$ in place of subtracting $-1$.`,
      String.raw`$10 + 3 + 1 = 14$ adds the known pieces to the whole integral in place of subtracting them.`,
      String.raw`$10 + 3 - 1 = 12$ adds the integral over $[0, 2]$ in place of subtracting it.`,
    ], answer: 0 },
  { id: "q606-m02", type: "mcq", skill: "u6", topic: "6.6", calc: false,
    stem: String.raw`The function $f$ is continuous, and $\displaystyle \int_2^5 f(x)\,dx = 4$.`,
    question: String.raw`What is the value of $\displaystyle \int_2^5 \left( 3f(x) - 2 \right) dx$?`,
    choices: ["$6$", "$10$", "$2$", "$18$"],
    why: [
      String.raw`$\displaystyle \int_2^5 \left( 3f(x) - 2 \right) dx = 3\int_2^5 f(x)\,dx - \int_2^5 2\,dx = 3(4) - 2(3) = 6$.`,
      String.raw`$12 - 2 = 10$ subtracts the constant 2 without multiplying it by the length of the interval, 3.`,
      String.raw`$12 - 2(5) = 2$ multiplies the constant by the upper limit 5 in place of the length $5 - 2 = 3$.`,
      String.raw`$12 + 6 = 18$ adds the integral of the constant term in place of subtracting it.`,
    ], answer: 0 },
  { id: "q606-m03", type: "mcq", skill: "u6", topic: "6.6", calc: false,
    question: String.raw`What is the value of $\displaystyle \int_{-2}^{4} |x|\,dx$?`,
    choices: ["$10$", "$6$", "$8$", "$-6$"],
    why: [
      String.raw`Split at $0$: $\displaystyle \int_{-2}^{0} (-x)\,dx + \int_0^4 x\,dx$. These are triangles with areas $\dfrac{1}{2}(2)(2) = 2$ and $\dfrac{1}{2}(4)(4) = 8$, so the integral is $10$.`,
      String.raw`$6 = 8 - 2$ is $\displaystyle \int_{-2}^4 x\,dx$. The graph of $|x|$ is above the axis on $[-2, 0]$, so that area is added.`,
      String.raw`$8$ is only the triangle on $[0, 4]$. The triangle on $[-2, 0]$ is left out.`,
      String.raw`$-6$ is $\displaystyle \int_4^{-2} x\,dx$, which drops the absolute value and reverses the limits.`,
    ], answer: 0 },
  { id: "q606-m04", type: "mcq", skill: "u6", topic: "6.6", calc: false, set: "q606-s1",
    question: String.raw`What is the value of $\displaystyle \int_6^{-2} f(x)\,dx$?`,
    choices: [String.raw`$6 - 2\pi$`, String.raw`$2\pi - 6$`, String.raw`$-2\pi - 6$`, String.raw`$6 - 4\pi$`],
    why: [
      String.raw`$\displaystyle \int_{-2}^{6} f(x)\,dx = \dfrac{1}{2}\pi(2)^2 - \dfrac{1}{2}(4)(3) = 2\pi - 6$. Reversing the limits changes the sign: $\displaystyle \int_6^{-2} f(x)\,dx = 6 - 2\pi$.`,
      String.raw`$2\pi - 6$ is $\displaystyle \int_{-2}^{6} f(x)\,dx$. The limits in the question run from 6 down to $-2$, which changes the sign.`,
      String.raw`This treats the triangle below the axis as positive area, which gives $2\pi + 6$, and then reverses the sign.`,
      String.raw`$4\pi$ is the area of a whole circle of radius 2. The graph is only the upper half, with area $2\pi$.`,
    ], answer: 0 },
  { id: "q606-m05", type: "mcq", skill: "u6", topic: "6.6", calc: false,
    stem: String.raw`The functions $f$ and $g$ are continuous, $\displaystyle \int_1^4 f(x)\,dx = 5$, and $\displaystyle \int_4^1 g(x)\,dx = 2$.`,
    question: String.raw`What is the value of $\displaystyle \int_1^4 \left( 2f(x) + 3g(x) \right) dx$?`,
    choices: ["$4$", "$16$", "$7$", "$-16$"],
    why: [
      String.raw`$\displaystyle \int_1^4 g(x)\,dx = -\int_4^1 g(x)\,dx = -2$, so the integral is $2(5) + 3(-2) = 4$.`,
      String.raw`$2(5) + 3(2) = 16$ uses $\displaystyle \int_4^1 g = 2$ without reversing the limits, which changes the sign.`,
      String.raw`$5 + 2 = 7$ leaves out the constant multiples 2 and 3.`,
      String.raw`$-16$ reverses the sign of the whole sum in place of only the integral of $g$.`,
    ], answer: 0 },
  { id: "q606-m06", type: "mcq", skill: "u6", topic: "6.6", calc: false,
    stem: String.raw`The function $f$ is continuous on the real numbers.`,
    question: "Which of the following must be true?",
    choices: [
      String.raw`$\displaystyle \int_2^7 f(x)\,dx = \int_2^4 f(x)\,dx + \int_4^7 f(x)\,dx$`,
      String.raw`$\displaystyle \int_2^7 f(x)\,dx = \int_7^2 f(x)\,dx$`,
      String.raw`$\displaystyle \int_2^7 \left( f(x) \right)^2 dx = \left( \int_2^7 f(x)\,dx \right)^2$`,
      String.raw`$\displaystyle \int_2^7 \left( f(x) + 1 \right) dx = \int_2^7 f(x)\,dx + 1$`,
    ],
    why: [
      String.raw`Integrals over adjacent intervals add: $\displaystyle \int_a^b f + \int_b^c f = \int_a^c f$ for a continuous function.`,
      String.raw`Reversing the limits changes the sign: $\displaystyle \int_7^2 f(x)\,dx = -\int_2^7 f(x)\,dx$. The two are equal only when the integral is $0$.`,
      String.raw`The integral of a square is not the square of the integral. For $f(x) = 1$, the left side is $5$ and the right side is $25$.`,
      String.raw`$\displaystyle \int_2^7 1\,dx = 5$, not $1$. The constant has to be multiplied by the length of the interval.`,
    ], answer: 0 },
  { id: "q606-f1a", type: "frq", skill: "u6", topic: "6.6", calc: false, set: "q606-s9", part: "(a)",
    prompt: String.raw`Find the value of $\displaystyle \int_3^7 f(x)\,dx$.`,
    rows: [
      { name: "Answer", earns: String.raw`$\displaystyle \int_3^7 f(x)\,dx = \int_0^7 f(x)\,dx - \int_0^3 f(x)\,dx = 2 - 5 = -3$.` },
    ],
    solution: String.raw`$\displaystyle \int_0^7 f(x)\,dx = \int_0^3 f(x)\,dx + \int_3^7 f(x)\,dx$, so $\displaystyle \int_3^7 f(x)\,dx = 2 - 5 = -3$.` },
  { id: "q606-f1b", type: "frq", skill: "u6", topic: "6.6", calc: false, set: "q606-s9", part: "(b)",
    prompt: String.raw`Find the value of $\displaystyle \int_3^7 \left( 2f(x) - g(x) + 1 \right) dx$.`,
    rows: [
      { name: "Properties of integrals", earns: String.raw`$\displaystyle 2\int_3^7 f(x)\,dx - \int_3^7 g(x)\,dx + \int_3^7 1\,dx$` },
      { name: "Answer", earns: String.raw`$2(-3) - 6 + 4 = -8$` },
    ],
    solution: String.raw`$$\int_3^7 \left( 2f(x) - g(x) + 1 \right) dx = 2\int_3^7 f(x)\,dx - \int_3^7 g(x)\,dx + \int_3^7 1\,dx = 2(-3) - 6 + (7 - 3) = -8.$$` },
  { id: "q606-f1c", type: "frq", skill: "u6", topic: "6.6", calc: false, set: "q606-s9", part: "(c)",
    prompt: String.raw`The constant $k$ satisfies $\displaystyle \int_0^3 \left( f(x) + k \right) dx = 11$. Find the value of $k$.`,
    rows: [
      { name: "Answer", earns: String.raw`$5 + 3k = 11$, so $k = 2$.` },
    ],
    solution: String.raw`$\displaystyle \int_0^3 \left( f(x) + k \right) dx = \int_0^3 f(x)\,dx + \int_0^3 k\,dx = 5 + 3k$. Setting $5 + 3k = 11$ gives $k = 2$.` },
];

export default { forms: [{ id: "q606", name: "Topic 6.6 Quiz: Applying Properties of Definite Integrals", group: "Unit 6: Integration and Accumulation of Change", items }] };

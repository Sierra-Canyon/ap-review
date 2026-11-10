import { graph } from "../../plot.js";

export const sets = {
  "q606-s1": { name: "The graph of f", label: "Graph", intro: String.raw`The graph of the continuous function $f$ on $[0, 8]$, made of four line segments, is shown below.`,
    sources: [{ title: "", blocks: [{ svg: graph({ x: [0, 9], y: [-4, 4], xname: "x", yname: "y", segments: [[0, 0, 1, 3], [1, 3, 3, -3], [3, -3, 6, 0], [6, 0, 8, 2]], labels: [[1.3, 3.2, "f"]],
      alt: "Graph of f made of four segments: from the origin up to (1, 3); from (1, 3) down to (3, negative 3), crossing the x-axis at x = 2; from (3, negative 3) up to (6, 0); and from (6, 0) up to (8, 2)." }) }] }] },
  "q606-s9": { name: "Two integrals", label: "Free response", intro: String.raw`The functions $f$ and $g$ are continuous on the real numbers and satisfy the following.`,
    sources: [{ title: "", blocks: [{ p: String.raw`$$\int_0^3 f(x)\,dx = 5, \qquad \int_0^7 f(x)\,dx = 2, \qquad \int_3^7 g(x)\,dx = 6$$` }] }] },
};

const items = [
  { id: "q606-m01", type: "mcq", skill: "u6", topic: "6.6", calc: false, difficulty: "easy",
    stem: String.raw`The function $f$ is continuous, $\displaystyle \int_0^6 f(x)\,dx = 10$, $\displaystyle \int_0^2 f(x)\,dx = 3$, and $\displaystyle \int_4^6 f(x)\,dx = -1$.`,
    question: String.raw`What is the value of $\displaystyle \int_2^4 f(x)\,dx$?`,
    choices: ["$8$", "$-8$", "$14$", "$12$"],
    why: [
      String.raw`$\displaystyle \int_0^6 f = \int_0^2 f + \int_2^4 f + \int_4^6 f$, so $10 = 3 + \displaystyle \int_2^4 f + (-1)$ and $\displaystyle \int_2^4 f(x)\,dx = 8$.`,
      String.raw`$3 + (-1) - 10 = -8$ subtracts the whole integral from the known pieces. The missing piece is the whole minus the pieces: $10 - 3 - (-1)$.`,
      String.raw`$10 + 3 + 1 = 14$ adds the known pieces to the whole integral in place of subtracting them.`,
      String.raw`$10 + 3 - 1 = 12$ adds the integral over $[0, 2]$ in place of subtracting it.`,
    ], answer: 0 },
  { id: "q606-m02", type: "mcq", skill: "u6", topic: "6.6", calc: false, difficulty: "moderate",
    stem: String.raw`The function $f$ is continuous, and $\displaystyle \int_2^5 f(x)\,dx = 4$.`,
    question: String.raw`What is the value of $\displaystyle \int_2^5 \left( 3f(x) - 2 \right) dx$?`,
    choices: ["$6$", "$10$", "$12$", "$18$"],
    why: [
      String.raw`$\displaystyle \int_2^5 \left( 3f(x) - 2 \right) dx = 3\int_2^5 f(x)\,dx - \int_2^5 2\,dx = 3(4) - 2(3) = 6$.`,
      String.raw`$12 - 2 = 10$ subtracts the constant 2 without multiplying it by the length of the interval, 3.`,
      String.raw`$3(4) = 12$ leaves out the integral of the constant term, $\displaystyle \int_2^5 2\,dx = 6$.`,
      String.raw`$12 + 6 = 18$ adds the integral of the constant term in place of subtracting it.`,
    ], answer: 0 },
  { id: "q606-m03", type: "mcq", skill: "u6", topic: "6.6", calc: false, difficulty: "moderate", set: "q606-s1",
    question: String.raw`What is the value of $\displaystyle \int_0^6 \left| f(x) \right| dx$?`,
    choices: ["$9$", "$-3$", "$3$", "$6$"],
    why: [
      String.raw`The graph of $|f|$ reflects the part below the axis upward. On $[0, 2]$ the triangle above the axis has area $\dfrac{1}{2}(2)(3) = 3$, and on $[2, 6]$ the triangle below the axis has area $\dfrac{1}{2}(4)(3) = 6$. The integral is $3 + 6 = 9$.`,
      String.raw`$-3 = 3 - 6$ is $\displaystyle \int_0^6 f(x)\,dx$. The absolute value makes the region below the axis count as positive.`,
      String.raw`$3$ is the absolute value of $\displaystyle \int_0^6 f(x)\,dx = -3$. The absolute value applies to $f(x)$ before integrating, not to the result.`,
      String.raw`$6 = \dfrac{3}{2} + \dfrac{9}{2}$ treats the triangle on $[1, 3]$, which straddles the axis, as contributing $0$. With the absolute value its two halves add $\dfrac{3}{2} + \dfrac{3}{2} = 3$.`,
    ], answer: 0 },
  { id: "q606-m04", type: "mcq", skill: "u6", topic: "6.6", calc: false, difficulty: "moderate", set: "q606-s1",
    question: String.raw`What is the value of $\displaystyle \int_8^0 f(x)\,dx$?`,
    choices: ["$1$", "$-1$", "$-11$", "$11$"],
    why: [
      String.raw`The areas are $3$ above the axis on $[0, 2]$, $6$ below the axis on $[2, 6]$, and $\dfrac{1}{2}(2)(2) = 2$ above the axis on $[6, 8]$, so $\displaystyle \int_0^8 f(x)\,dx = 3 - 6 + 2 = -1$. Reversing the limits changes the sign: $\displaystyle \int_8^0 f(x)\,dx = 1$.`,
      String.raw`$-1$ is $\displaystyle \int_0^8 f(x)\,dx$. The limits in the question run from 8 down to 0, which changes the sign.`,
      String.raw`This counts the region below the axis as positive, $3 + 6 + 2 = 11$, and then reverses the sign. The region below the axis is subtracted.`,
      String.raw`$11 = 3 + 6 + 2$ adds the three areas as if they were all above the axis, and it also ignores the reversed limits.`,
    ], answer: 0 },
  { id: "q606-m05", type: "mcq", skill: "u6", topic: "6.6", calc: false, difficulty: "difficult",
    stem: String.raw`The functions $f$ and $g$ are continuous, $\displaystyle \int_1^4 f(x)\,dx = 5$, and $\displaystyle \int_4^1 g(x)\,dx = 2$.`,
    question: String.raw`What is the value of $\displaystyle \int_1^4 \left( 2f(x) + 3g(x) \right) dx$?`,
    choices: ["$4$", "$16$", "$-4$", "$-16$"],
    why: [
      String.raw`$\displaystyle \int_1^4 g(x)\,dx = -\int_4^1 g(x)\,dx = -2$, so the integral is $2(5) + 3(-2) = 4$.`,
      String.raw`$2(5) + 3(2) = 16$ uses $\displaystyle \int_4^1 g = 2$ without reversing the limits, which changes the sign.`,
      String.raw`$2(-5) + 3(2) = -4$ changes the sign of the integral of $f$ in place of the integral of $g$. Only $\displaystyle \int_4^1 g(x)\,dx$ has reversed limits.`,
      String.raw`$-16$ reverses the sign of the whole sum in place of only the integral of $g$.`,
    ], answer: 0 },
  { id: "q606-m06", type: "mcq", skill: "u6", topic: "6.6", calc: false, difficulty: "easy",
    stem: String.raw`The function $f$ is continuous on the real numbers.`,
    question: "Which of the following must be true?",
    choices: [
      String.raw`$\displaystyle \int_2^7 f(x)\,dx = \int_2^4 f(x)\,dx + \int_4^7 f(x)\,dx$`,
      String.raw`$\displaystyle \int_2^7 f(x)\,dx = \int_{7}^{4} f(x)\,dx + \int_{4}^{2} f(x)\,dx$`,
      String.raw`$\displaystyle \int_2^7 \left( f(x) \right)^2 dx = \left( \int_2^7 f(x)\,dx \right)^2$`,
      String.raw`$\displaystyle \int_2^7 \left( f(x) + 1 \right) dx = \int_2^7 f(x)\,dx + 1$`,
    ],
    why: [
      String.raw`Integrals over adjacent intervals add: $\displaystyle \int_a^b f + \int_b^c f = \int_a^c f$ for a continuous function.`,
      String.raw`Both pieces on the right run backward, so their sum is $\displaystyle \int_7^2 f(x)\,dx = -\int_2^7 f(x)\,dx$. The two sides are equal only when the integral is $0$.`,
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

// AP Precalculus topic quiz, 2.9 Logarithmic Expressions.

// A logarithmic scale from 0.01 to 1,000 (positions are base-10 logs). A = 10^1.75, B = 10^-1.75.
const lx = (e) => +(40 + ((e + 2) / 5) * 440).toFixed(2);
const logScale = `<svg class="graph" viewBox="0 0 520 110" width="520" height="110" role="img" aria-label="A number line with a logarithmic scale. Labeled tick marks for 0.01, 0.1, 1, 10, 100, and 1,000 are equally spaced. Point B is one fourth of the way from the tick for 0.01 to the tick for 0.1. Point A is three fourths of the way from the tick for 10 to the tick for 100." xmlns="http://www.w3.org/2000/svg">
<line class="g-axis" x1="20" y1="60" x2="500" y2="60"/>
${[-2, -1, 0, 1, 2, 3].map((e, k) => `<line class="g-axis" x1="${lx(e)}" y1="52" x2="${lx(e)}" y2="68"/><text class="g-tick" x="${lx(e)}" y="88" text-anchor="middle">${["0.01", "0.1", "1", "10", "100", "1,000"][k]}</text>`).join("")}
${[[1.75, "A"], [-1.75, "B"]].map(([e, n]) => `<circle class="g-dot" cx="${lx(e)}" cy="60" r="4"/><text class="g-label" x="${lx(e)}" y="42" text-anchor="middle">${n}</text>`).join("")}
</svg>`;

export const sets = {
  "p209-s1": {
    name: "Two points on a logarithmic scale",
    label: "Diagram",
    intro: String.raw`On the number line below, equal distances stand for equal ratios: the tick marks for $0.01$, $0.1$, $1$, $10$, $100$, and $1{,}000$ are equally spaced. Point $A$ is three fourths of the way from the tick for $10$ to the tick for $100$. Point $B$ is one fourth of the way from the tick for $0.01$ to the tick for $0.1$.`,
    sources: [{ title: "", blocks: [{ svg: logScale }] }],
  },
  "p209-s2": {
    name: "Exponents and logarithms",
    label: "Free response",
    intro: String.raw`Answer each part without a calculator. Give exact values, and show the work that leads to each answer.`,
    sources: [],
  },
};

export default {
  forms: [{
    id: "p209",
    name: "Topic 2.9 Quiz: Logarithmic Expressions",
    group: "Unit 2: Exponential and Logarithmic Functions",
    items: [
      { id: "p209-m01", type: "mcq", skill: "u2", topic: "2.9", calc: false, difficulty: "easy",
        question: String.raw`If $\log_{b} 81 = 4$, what is the value of $b$?`,
        choices: ["$3$", String.raw`$\pm 3$`, String.raw`$\frac{81}{4}$`, "$324$"],
        why: [
          String.raw`$\log_{b} 81 = 4$ means $b^{4} = 81$. Since $3^{4} = 81$ and the base of a logarithm must be positive, $b = 3$.`,
          String.raw`$(-3)^{4} = 81$ as well, but the base of a logarithm must be positive, so $-3$ is not a possible value of $b$.`,
          String.raw`$\dfrac{81}{4}$ divides by the exponent instead of taking the fourth root.`,
          String.raw`$324 = 81 \cdot 4$ multiplies the argument by the value of the log. A logarithm is an exponent: $b^{4} = 81$.`,
        ], answer: 0 },
      { id: "p209-m02", type: "mcq", skill: "u2", topic: "2.9", calc: false, difficulty: "easy",
        question: String.raw`Which equation is equivalent to $\ln x = 4$?`,
        choices: [String.raw`$x = e^{4}$`, String.raw`$x = 4^{e}$`, String.raw`$x = 10^{4}$`, String.raw`$e = x^{4}$`],
        why: [
          String.raw`$\ln x$ is the logarithm with base $e$, so $\ln x = 4$ means $e^{4} = x$.`,
          String.raw`$4^{e}$ switches the base and the exponent. The base of $\ln$ is $e$ and the value of the log, $4$, is the exponent.`,
          String.raw`$10^{4}$ uses base $10$, the base of the common log. $\ln$ has base $e$.`,
          String.raw`$e = x^{4}$ makes $x$ the base. In $\log_{e} x = 4$, the base is $e$ and $x$ is the result.`,
        ], answer: 0 },
      { id: "p209-m03", type: "mcq", skill: "u2", topic: "2.9", calc: false, difficulty: "moderate", set: "p209-s1",
        question: String.raw`What number does point $A$ stand for?`,
        choices: [String.raw`$10^{7/4}$`, "$77.5$", String.raw`$10^{3/4}$`, "$17.5$"],
        why: [
          String.raw`Position on the line is the common log of the number. The tick for $10$ is at $\log 10 = 1$ and the tick for $100$ is at $2$, so $A$ is at $1 + \dfrac{3}{4} = \dfrac{7}{4}$. $A$ stands for $10^{7/4}$, about $56$.`,
          String.raw`$77.5 = 10 + \dfrac{3}{4}(90)$ is three fourths of the way on an ordinary number line. On a log scale, equal distances stand for equal factors, not equal differences.`,
          String.raw`$10^{3/4}$ uses only the distance past the tick for $10$. That tick is already at $\log 10 = 1$, so the position is $1 + \dfrac{3}{4}$.`,
          String.raw`$17.5 = 10 \cdot 1.75$ multiplies by the position. The number is $10$ raised to the position: $10^{1.75}$.`,
        ], answer: 0 },
      { id: "p209-m04", type: "mcq", skill: "u2", topic: "2.9", calc: false, difficulty: "difficult", set: "p209-s1",
        question: String.raw`The number that $A$ stands for is how many times the number that $B$ stands for?`,
        choices: [String.raw`$10^{3.5}$`, "$3.5$", String.raw`$10^{3}$`, String.raw`$10^{-3.5}$`],
        why: [
          String.raw`$A$ is at $\log x = 1.75$ and $B$ is at $-2 + 0.25 = -1.75$. The ratio is $\dfrac{10^{1.75}}{10^{-1.75}} = 10^{1.75 - (-1.75)} = 10^{3.5}$.`,
          String.raw`$3.5$ is the distance between $A$ and $B$ in tick spaces, which is the log of the ratio. The ratio is $10^{3.5}$.`,
          String.raw`$10^{3}$ counts only the whole tick spaces between the two points and drops the two quarter spaces at the ends.`,
          String.raw`$10^{-3.5}$ is the number for $B$ divided by the number for $A$. The question asks for $A$ divided by $B$.`,
        ], answer: 0 },
      { id: "p209-m05", type: "mcq", skill: "u2", topic: "2.9", calc: false, difficulty: "easy",
        question: String.raw`What is the value of $\log_{2}\left(\log_{3} 81\right)$?`,
        choices: ["$2$", "$4$", "$3$", String.raw`$\frac{1}{2}$`],
        why: [
          String.raw`Work from the inside out: $\log_{3} 81 = 4$, since $3^{4} = 81$. Then $\log_{2} 4 = 2$, since $2^{2} = 4$.`,
          String.raw`$4$ is the inner log, $\log_{3} 81$. The outer $\log_{2}$ still has to be applied.`,
          String.raw`$3$ is $\log_{3} 27$, not $\log_{3} 81$; it uses $3^{3}$ for $81$.`,
          String.raw`$\frac{1}{2}$ is $\log_{4} 2$, with the base and the argument of the outer log switched.`,
        ], answer: 0 },
      { id: "p209-m06", type: "mcq", skill: "u2", topic: "2.9", calc: true, difficulty: "moderate",
        question: String.raw`A message chosen from $N$ equally likely messages carries $\log_{2} N$ bits of information. To the nearest thousandth, how many bits does a message chosen from $1{,}000$ equally likely messages carry?`,
        choices: ["$9.966$", "$3.000$", "$6.908$", "$500$"],
        why: [
          String.raw`$\log_{2} 1000 = \dfrac{\ln 1000}{\ln 2} \approx 9.966$. Check: $2^{10} = 1024$ is just over $1000$, so the value is just under $10$.`,
          String.raw`$3$ is $\log 1000$, the common log with base $10$. The base here is $2$.`,
          String.raw`$6.908$ is $\ln 1000$, the natural log with base $e$. The base here is $2$.`,
          String.raw`$500 = \dfrac{1000}{2}$ divides by the base. A logarithm is an exponent: $2^{c} = 1000$.`,
        ], answer: 0 },
      { id: "p209-f1a", type: "frq", skill: "u2", topic: "2.9", calc: false, set: "p209-s2", part: "(a)",
        prompt: String.raw`Rewrite the equation $4^{-3/2} = \dfrac{1}{8}$ in logarithmic form.`,
        rows: [{ name: "Logarithmic form", earns: String.raw`$\log_{4}\left(\dfrac{1}{8}\right) = -\dfrac{3}{2}$.` }],
        solution: String.raw`$b^{c} = a$ is equivalent to $\log_{b} a = c$. Here the base is $4$, the exponent is $-\dfrac{3}{2}$, and the result is $\dfrac{1}{8}$, so $\log_{4}\left(\dfrac{1}{8}\right) = -\dfrac{3}{2}$.` },
      { id: "p209-f1b", type: "frq", skill: "u2", topic: "2.9", calc: false, set: "p209-s2", part: "(b)",
        prompt: String.raw`Find the exact value of $\log_{1/3} 27$.`,
        rows: [{ name: "Value", earns: String.raw`$-3$, with supporting work such as $\left(\dfrac{1}{3}\right)^{-3} = 27$.` }],
        solution: String.raw`$\log_{1/3} 27$ is the exponent $c$ with $\left(\dfrac{1}{3}\right)^{c} = 27$. Since $\left(\dfrac{1}{3}\right)^{c} = 3^{-c}$ and $27 = 3^{3}$, $-c = 3$ and $c = -3$.` },
      { id: "p209-f1c", type: "frq", skill: "u2", topic: "2.9", calc: false, set: "p209-s2", part: "(c)",
        prompt: String.raw`Explain why $\log_{6}(-36)$ is not a real number.`,
        rows: [{ name: "Reason", earns: String.raw`States that $\log_{6}(-36)$ would be an exponent $c$ with $6^{c} = -36$, and that $6^{c} > 0$ for every real $c$, so no real exponent works.` }],
        solution: String.raw`$\log_{6}(-36)$ would be the real number $c$ with $6^{c} = -36$. A positive base raised to any real power is positive, so $6^{c} > 0$ for every real $c$ and can never equal $-36$. So $\log_{6}(-36)$ is not a real number.` },
    ],
  }],
};

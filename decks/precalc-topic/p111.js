// AP Precalculus topic quiz 1.11: Equivalent Representations of Polynomial and Rational Expressions.
// p(x) = 2x^3 - 3x^2 - 5x + 6 = (x - 1)(x - 2)(2x + 3) gives the table in p111-s1.

export const sets = {
  "p111-s1": {
    name: "Values of a cubic polynomial",
    label: "Table",
    intro: String.raw`The polynomial function $p$ has degree $3$ and leading coefficient $2$. The table below gives values of $p(x)$ for selected values of $x$.`,
    sources: [{ title: "", blocks: [{ table: { head: ["$x$", "$-3$", "$-2$", "$-1$", "$0$", "$1$", "$2$", "$3$"], rows: [["$p(x)$", "$-60$", "$-12$", "$6$", "$6$", "$0$", "$0$", "$18$"]] } }] }],
  },
  "p111-s2": {
    name: "A rational function with a slant asymptote",
    label: "Free response",
    intro: String.raw`Let $f$ be the function given by $$f(x) = \dfrac{2x^{3} - x^{2} + 3x + 1}{x^{2} + 1}.$$`,
    sources: [{ title: "", blocks: [{ p: String.raw`No calculator is allowed. Show the work that leads to each answer.` }] }],
  },
};

export default {
  forms: [{
    id: "p111",
    name: "Topic 1.11 Quiz: Equivalent Representations",
    group: "Unit 1: Polynomial and Rational Functions",
    items: [
      { id: "p111-m01", type: "mcq", skill: "u1", topic: "1.11", calc: false, difficulty: "easy",
        question: String.raw`Which of the following is equivalent to $\dfrac{x^{3} - 2x^{2} + 5}{x - 3}$ for $x \ne 3$?`,
        choices: [String.raw`$x^{2} + x + 3 + \frac{14}{x - 3}$`, String.raw`$x^{2} - 5x + 15 - \frac{40}{x - 3}$`, String.raw`$x + 1 + \frac{8}{x - 3}$`, String.raw`$x^{2} + x + 3 + \frac{5}{x - 3}$`],
        why: [
          String.raw`Divide $x^{3} - 2x^{2} + 0x + 5$ by $x - 3$. Synthetic division with $3$ and the coefficients $1, -2, 0, 5$ gives $1, 1, 3$ and a remainder of $14$, so the quotient is $x^{2} + x + 3$ and the expression equals $x^{2} + x + 3 + \dfrac{14}{x - 3}$.`,
          String.raw`This is the result of dividing by $x + 3$, which uses $-3$ in synthetic division. The divisor $x - 3$ calls for $3$.`,
          String.raw`This leaves out the $0x$ term, so the $5$ is treated as the coefficient of $x$ and the division is one degree short.`,
          String.raw`The quotient is right, but $5$ is the constant term of the dividend, not the remainder. The remainder is the last value of the synthetic division, $14$.`,
        ], answer: 0 },
      { id: "p111-m02", type: "mcq", skill: "u1", topic: "1.11", calc: false, difficulty: "moderate",
        question: String.raw`When $(x - 3)^{6}$ is expanded and written in descending powers of $x$, what is the third term?`,
        choices: [String.raw`$135x^{4}$`, String.raw`$15x^{4}$`, String.raw`$-135x^{4}$`, String.raw`$-540x^{3}$`],
        why: [
          String.raw`By the binomial theorem, the third term is $\dbinom{6}{2}x^{4}(-3)^{2} = 15 \cdot 9x^{4} = 135x^{4}$. Row $6$ of Pascal's triangle is $1, 6, 15, 20, 15, 6, 1$, and the third entry is $15$.`,
          String.raw`$15$ is $\dbinom{6}{2}$ alone. The factor $(-3)^{2} = 9$ from the second term of the binomial is missing.`,
          String.raw`$(-3)^{2} = 9$ is positive. The odd powers of $-3$ give the negative terms.`,
          String.raw`$-540x^{3}$ is the fourth term, $\dbinom{6}{3}x^{3}(-3)^{3} = 20(-27)x^{3}$. The first term has $k = 0$, so the third term has $k = 2$.`,
        ], answer: 0 },
      { id: "p111-m03", type: "mcq", skill: "u1", topic: "1.11", calc: true, difficulty: "easy",
        question: String.raw`What is the remainder when $p(x) = x^{5} - 2.4x^{3} + x - 7$ is divided by $x - 1.3$?`,
        choices: ["$-7.260$", "$-6.740$", "$-7.000$", "$-0.200$"],
        why: [
          String.raw`The remainder when $p(x)$ is divided by $x - 1.3$ equals $p(1.3) = 1.3^{5} - 2.4(1.3)^{3} + 1.3 - 7 \approx 3.713 - 5.273 + 1.3 - 7 \approx -7.260$.`,
          String.raw`$-6.740$ is $p(-1.3)$, the remainder for dividing by $x + 1.3$.`,
          String.raw`$-7.000$ is $p(0)$, the constant term of $p$.`,
          String.raw`$-0.200$ is about the constant term of the quotient, $-0.1999$, not the remainder.`,
        ], answer: 0 },
      { id: "p111-m04", type: "mcq", skill: "u1", topic: "1.11", calc: false, difficulty: "difficult",
        question: String.raw`Let $p(x) = x^{3} + ax^{2} + bx + 6$, where $a$ and $b$ are constants. The binomial $x - 1$ is a factor of $p(x)$, and the remainder when $p(x)$ is divided by $x + 1$ is $10$. What is the value of $b$?`,
        choices: ["$-6$", "$4$", "$-1$", "$6$"],
        why: [
          String.raw`$x - 1$ is a factor, so $p(1) = 1 + a + b + 6 = 0$ and $a + b = -7$. The remainder for $x + 1$ is $p(-1) = -1 + a - b + 6 = 10$, so $a - b = 5$. Subtracting the equations gives $2b = -12$, so $b = -6$ (and $a = -1$). Check: $p(x) = x^{3} - x^{2} - 6x + 6$ has $p(1) = 0$ and $p(-1) = 10$.`,
          String.raw`$4$ comes from switching the two conditions, $p(-1) = 0$ and $p(1) = 10$. A factor $x - 1$ means $p(1) = 0$, and dividing by $x + 1$ leaves the remainder $p(-1)$.`,
          String.raw`$-1$ is the value of $a$, not $b$.`,
          String.raw`$6$ has the wrong sign. Subtracting $a - b = 5$ from $a + b = -7$ gives $2b = -12$.`,
        ], answer: 0 },
      { id: "p111-m05", type: "mcq", skill: "u1", topic: "1.11", calc: false, set: "p111-s1", difficulty: "easy",
        question: String.raw`What is the remainder when $p(x)$ is divided by $x + 2$?`,
        choices: ["$-12$", "$0$", "$6$", "$-60$"],
        why: [
          String.raw`The remainder when $p(x)$ is divided by $x + 2$ is $p(-2)$, and the table gives $p(-2) = -12$.`,
          String.raw`$0$ is $p(2)$, the remainder for dividing by $x - 2$.`,
          String.raw`$6$ is $p(0)$, the constant term of $p$.`,
          String.raw`$-60$ is $p(-3)$, one column too far to the left.`,
        ], answer: 0 },
      { id: "p111-m06", type: "mcq", skill: "u1", topic: "1.11", calc: false, set: "p111-s1", difficulty: "moderate",
        question: String.raw`Which of the following is equivalent to $p(x)$?`,
        choices: [String.raw`$(x - 1)(x - 2)(2x + 3)$`, String.raw`$(x + 1)(x + 2)(2x - 3)$`, String.raw`$2(x - 1)(x - 2)(x - 3)$`, String.raw`$(x - 1)(x - 2)(2x - 3)$`],
        why: [
          String.raw`The table gives $p(1) = 0$ and $p(2) = 0$, so $x - 1$ and $x - 2$ are factors, and the leading coefficient $2$ gives $p(x) = (x - 1)(x - 2)(2x + c)$. Then $p(0) = (-1)(-2)(c) = 2c = 6$, so $c = 3$.`,
          String.raw`This reverses the signs. Its zeros are $-1$, $-2$, and $\frac{3}{2}$, but the table shows $p(-1) = 6$ and $p(-2) = -12$.`,
          String.raw`This has constant term $2(-1)(-2)(-3) = -12$, but $p(0) = 6$. The table also gives $p(3) = 18$, not $0$.`,
          String.raw`This has constant term $(-1)(-2)(-3) = -6$, but $p(0) = 6$.`,
        ], answer: 0 },
      { id: "p111-f1a", type: "frq", skill: "u1", topic: "1.11", calc: false, set: "p111-s2", part: "(a)",
        prompt: String.raw`Use polynomial long division to write $f(x)$ in the form $q(x) + \dfrac{r(x)}{x^{2} + 1}$, where $q$ and $r$ are polynomials and the degree of $r$ is less than $2$.`,
        rows: [
          { name: "Quotient", earns: String.raw`$q(x) = 2x - 1$, with the work of the division shown.` },
          { name: "Remainder", earns: String.raw`$r(x) = x + 2$, so $f(x) = 2x - 1 + \dfrac{x + 2}{x^{2} + 1}$.` },
        ],
        solution: String.raw`Divide $2x^{3} - x^{2} + 3x + 1$ by $x^{2} + 1$. First, $2x(x^{2} + 1) = 2x^{3} + 2x$, which leaves $-x^{2} + x + 1$. Next, $-1(x^{2} + 1) = -x^{2} - 1$, which leaves $x + 2$. The quotient is $2x - 1$ and the remainder is $x + 2$: $$f(x) = 2x - 1 + \frac{x + 2}{x^{2} + 1}$$ Check: $(x^{2} + 1)(2x - 1) + (x + 2) = 2x^{3} - x^{2} + 2x - 1 + x + 2 = 2x^{3} - x^{2} + 3x + 1$.` },
      { id: "p111-f1b", type: "frq", skill: "u1", topic: "1.11", calc: false, set: "p111-s2", part: "(b)",
        prompt: String.raw`Write an equation for the slant asymptote of the graph of $f$. Give a reason for your answer.`,
        rows: [
          { name: "Asymptote with reason", earns: String.raw`$y = 2x - 1$, because $\dfrac{x + 2}{x^{2} + 1} \to 0$ as $x \to \pm\infty$ (the remainder has lower degree than the divisor), so $f(x)$ gets closer to $2x - 1$.` },
        ],
        solution: String.raw`The degree of $x + 2$ is less than the degree of $x^{2} + 1$, so $\dfrac{x + 2}{x^{2} + 1} \to 0$ as $x \to \infty$ and as $x \to -\infty$. Then $f(x) - (2x - 1) \to 0$, and the slant asymptote is $y = 2x - 1$.` },
      { id: "p111-f1c", type: "frq", skill: "u1", topic: "1.11", calc: false, set: "p111-s2", part: "(c)",
        prompt: String.raw`For large positive values of $x$, is the graph of $f$ above or below its slant asymptote? Give a reason for your answer.`,
        rows: [
          { name: "Answer with reason", earns: String.raw`Above, because $f(x) - (2x - 1) = \dfrac{x + 2}{x^{2} + 1}$, and for $x > 0$ both $x + 2$ and $x^{2} + 1$ are positive.` },
        ],
        solution: String.raw`From part (a), $f(x) - (2x - 1) = \dfrac{x + 2}{x^{2} + 1}$. For $x > 0$ the numerator $x + 2$ is positive and the denominator $x^{2} + 1$ is positive, so $f(x) > 2x - 1$. The graph of $f$ is above its slant asymptote for large positive $x$.` },
    ],
  }],
};

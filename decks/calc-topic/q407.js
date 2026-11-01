export const sets = {
  "q407-s9": { name: "Functions f and g", label: "Free response", intro: String.raw`The functions $f$ and $g$ are twice differentiable for all real numbers. Selected values of $f$, $f'$, $g$, and $g'$ are given in the table below.`,
    sources: [{ title: "", blocks: [{ table: { head: ["$x$", "$f(x)$", "$f'(x)$", "$g(x)$", "$g'(x)$"], rows: [["$1$", "$4$", "$-2$", "$0$", "$3$"], ["$3$", "$0$", "$5$", "$2$", "$-1$"]] } }] }] },
};

const items = [
  { id: "q407-m01", type: "mcq", skill: "u4", topic: "4.7", calc: false,
    question: String.raw`$\displaystyle \lim_{x \to 0} \dfrac{e^{3x} - 1}{\sin(2x)}$ is`,
    choices: [String.raw`$\frac{3}{2}$`, String.raw`$\frac{2}{3}$`, "$1$", "$3$"],
    why: [
      String.raw`The form is $\dfrac{0}{0}$. By L'Hospital's Rule, the limit is $\displaystyle \lim_{x \to 0} \dfrac{3e^{3x}}{2\cos(2x)} = \dfrac{3}{2}$.`,
      String.raw`This divides the derivative of the denominator by the derivative of the numerator. The numerator's derivative goes on top.`,
      String.raw`This leaves out both chain rule factors, $3$ and $2$: $\dfrac{e^{0}}{\cos 0} = 1$.`,
      String.raw`This leaves out the chain rule factor $2$ from $\sin(2x)$.`,
    ], answer: 0 },
  { id: "q407-m02", type: "mcq", skill: "u4", topic: "4.7", calc: false,
    question: String.raw`$\displaystyle \lim_{x \to \infty} \dfrac{\ln x}{\sqrt{x}}$ is`,
    choices: ["$0$", "$2$", String.raw`$\frac{1}{2}$`, "nonexistent"],
    why: [
      String.raw`The form is $\dfrac{\infty}{\infty}$. By L'Hospital's Rule, the limit is $\displaystyle \lim_{x \to \infty} \dfrac{1/x}{1/(2\sqrt{x})} = \lim_{x \to \infty} \dfrac{2}{\sqrt{x}} = 0$.`,
      String.raw`$\dfrac{1/x}{1/(2\sqrt{x})}$ simplifies to $\dfrac{2\sqrt{x}}{x} = \dfrac{2}{\sqrt{x}}$, not $2$.`,
      String.raw`This inverts the quotient of derivatives and drops $\sqrt{x}$. The quotient is $\dfrac{2}{\sqrt{x}}$, which approaches $0$.`,
      String.raw`The form $\dfrac{\infty}{\infty}$ is indeterminate, not a reason the limit fails to exist. L'Hospital's Rule gives $0$.`,
    ], answer: 0 },
  { id: "q407-m03", type: "mcq", skill: "u4", topic: "4.7", calc: false,
    question: String.raw`$\displaystyle \lim_{x \to 2} \dfrac{x^3 - 8}{\ln(x - 1)}$ is`,
    choices: ["$12$", String.raw`$\frac{1}{12}$`, "$24$", "nonexistent"],
    why: [
      String.raw`The form is $\dfrac{0}{0}$, since $\ln 1 = 0$. By L'Hospital's Rule, the limit is $\displaystyle \lim_{x \to 2} \dfrac{3x^2}{1/(x - 1)} = \dfrac{12}{1} = 12$.`,
      String.raw`This puts the derivative of the denominator on top. The limit is the derivative of the numerator over the derivative of the denominator.`,
      String.raw`This differentiates $\ln(x - 1)$ as $\dfrac{1}{x}$. The derivative is $\dfrac{1}{x - 1}$, which is $1$ at $x = 2$.`,
      String.raw`The form $\dfrac{0}{0}$ is indeterminate, not a reason the limit fails to exist. L'Hospital's Rule gives $12$.`,
    ], answer: 0 },
  { id: "q407-m04", type: "mcq", skill: "u4", topic: "4.7", calc: false,
    stem: String.raw`The functions $f$ and $g$ are differentiable, with $f(3) = g(3) = 0$, $f'(3) = 4$, and $g'(3) = -2$. The derivatives $f'$ and $g'$ are continuous.`,
    question: String.raw`What is $\displaystyle \lim_{x \to 3} \dfrac{f(x)}{g(x)}$?`,
    choices: ["$-2$", String.raw`$-\frac{1}{2}$`, "$0$", "$2$"],
    why: [
      String.raw`Since $f$ and $g$ are differentiable, they are continuous, so both approach $0$ and the form is $\dfrac{0}{0}$. By L'Hospital's Rule, the limit is $\dfrac{f'(3)}{g'(3)} = \dfrac{4}{-2} = -2$.`,
      String.raw`This divides $g'(3)$ by $f'(3)$. The numerator's derivative goes on top.`,
      String.raw`$\dfrac{0}{0}$ is indeterminate, not $0$.`,
      String.raw`$g'(3) = -2$ is negative, so the quotient is $-2$. The sign was lost.`,
    ], answer: 0 },
  { id: "q407-m05", type: "mcq", skill: "u4", topic: "4.7", calc: false,
    question: String.raw`$\displaystyle \lim_{x \to 0} \dfrac{1 - \cos(3x)}{x^2}$ is`,
    choices: [String.raw`$\frac{9}{2}$`, String.raw`$\frac{3}{2}$`, String.raw`$\frac{1}{2}$`, "$0$"],
    why: [
      String.raw`The form is $\dfrac{0}{0}$. L'Hospital's Rule gives $\displaystyle \lim_{x \to 0} \dfrac{3\sin(3x)}{2x}$, still $\dfrac{0}{0}$. Applying it again gives $\displaystyle \lim_{x \to 0} \dfrac{9\cos(3x)}{2} = \dfrac{9}{2}$.`,
      String.raw`This keeps the chain rule factor $3$ once but leaves it out of the second derivative. The derivative of $3\sin(3x)$ is $9\cos(3x)$.`,
      String.raw`This leaves out both chain rule factors of $3$.`,
      String.raw`After one use of the rule the form is still $\dfrac{0}{0}$, which is indeterminate, not $0$. The rule must be applied again.`,
    ], answer: 0 },
  { id: "q407-m06", type: "mcq", skill: "u4", topic: "4.7", calc: false,
    question: String.raw`If $\displaystyle \lim_{x \to 0} \dfrac{\sin(kx)}{e^{2x} - 1} = 5$, what is the value of the constant $k$?`,
    choices: ["$10$", "$5$", String.raw`$\frac{2}{5}$`, String.raw`$\frac{5}{2}$`],
    why: [
      String.raw`The form is $\dfrac{0}{0}$. By L'Hospital's Rule, the limit is $\displaystyle \lim_{x \to 0} \dfrac{k\cos(kx)}{2e^{2x}} = \dfrac{k}{2}$. Setting $\dfrac{k}{2} = 5$ gives $k = 10$.`,
      String.raw`This leaves out the chain rule factor $2$ from $e^{2x}$, so the limit becomes $k$.`,
      String.raw`This puts the derivative of the denominator on top, solving $\dfrac{2}{k} = 5$.`,
      String.raw`This solves $\dfrac{k}{2} = 5$ by dividing by $2$ in place of multiplying.`,
    ], answer: 0 },
  { id: "q407-f1a", type: "frq", skill: "u4", topic: "4.7", calc: false, set: "q407-s9", part: "(a)",
    prompt: String.raw`Find $\displaystyle \lim_{x \to 3} \dfrac{f(x)}{g(x) - 2}$. Show the work that leads to your answer.`,
    rows: [
      { name: "Indeterminate form", earns: String.raw`Shows the form is $\dfrac{0}{0}$: since $f$ and $g$ are differentiable, they are continuous, so $\displaystyle \lim_{x \to 3} f(x) = 0$ and $\displaystyle \lim_{x \to 3} (g(x) - 2) = 0$.` },
      { name: "Answer", earns: String.raw`Uses L'Hospital's Rule: $\dfrac{f'(3)}{g'(3)} = \dfrac{5}{-1} = -5$.` },
    ],
    solution: String.raw`Since $f$ and $g$ are differentiable, they are continuous, so $\displaystyle \lim_{x \to 3} f(x) = f(3) = 0$ and $\displaystyle \lim_{x \to 3} (g(x) - 2) = 2 - 2 = 0$. The form is $\dfrac{0}{0}$, so by L'Hospital's Rule, $\displaystyle \lim_{x \to 3} \dfrac{f(x)}{g(x) - 2} = \lim_{x \to 3} \dfrac{f'(x)}{g'(x)} = \dfrac{5}{-1} = -5$. The derivatives $f'$ and $g'$ are continuous because $f$ and $g$ are twice differentiable, so this last limit equals $\dfrac{f'(3)}{g'(3)}$.` },
  { id: "q407-f1b", type: "frq", skill: "u4", topic: "4.7", calc: false, set: "q407-s9", part: "(b)",
    prompt: String.raw`Find $\displaystyle \lim_{x \to 1} \dfrac{x f(x) - 4}{g(x)}$. Show the work that leads to your answer.`,
    rows: [
      { name: "Indeterminate form", earns: String.raw`Shows the form is $\dfrac{0}{0}$: $\displaystyle \lim_{x \to 1} (x f(x) - 4) = 1 \cdot 4 - 4 = 0$ and $\displaystyle \lim_{x \to 1} g(x) = 0$.` },
      { name: "Answer", earns: String.raw`Uses L'Hospital's Rule with the product rule: $\dfrac{f(1) + 1 \cdot f'(1)}{g'(1)} = \dfrac{4 - 2}{3} = \dfrac{2}{3}$.` },
    ],
    solution: String.raw`Since $f$ and $g$ are continuous, $\displaystyle \lim_{x \to 1} (x f(x) - 4) = 1 \cdot 4 - 4 = 0$ and $\displaystyle \lim_{x \to 1} g(x) = 0$. The form is $\dfrac{0}{0}$, so by L'Hospital's Rule, $\displaystyle \lim_{x \to 1} \dfrac{x f(x) - 4}{g(x)} = \lim_{x \to 1} \dfrac{f(x) + x f'(x)}{g'(x)} = \dfrac{4 + 1(-2)}{3} = \dfrac{2}{3}$. The derivatives $f'$ and $g'$ are continuous because $f$ and $g$ are twice differentiable.` },
];

export default { forms: [{ id: "q407", name: "Topic 4.7 Quiz: L'Hospital's Rule", group: "Unit 4: Contextual Applications of Differentiation", items }] };

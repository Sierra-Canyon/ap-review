export const sets = {
  "q407-s9": { name: "Functions f and g", label: "Free response", intro: String.raw`The functions $f$ and $g$ are twice differentiable for all real numbers. Selected values of $f$, $f'$, $g$, and $g'$ are given in the table below.`,
    sources: [{ title: "", blocks: [{ table: { head: ["$x$", "$f(x)$", "$f'(x)$", "$g(x)$", "$g'(x)$"], rows: [["$1$", "$4$", "$-2$", "$0$", "$3$"], ["$3$", "$0$", "$5$", "$2$", "$-1$"]] } }] }] },
};

const items = [
  { id: "q407-m01", type: "mcq", skill: "u4", topic: "4.7", calc: false, difficulty: "moderate",
    question: String.raw`$\displaystyle \lim_{x \to 0} \dfrac{e^{3x} - 1}{\sin(2x)}$ is`,
    choices: [String.raw`$\frac{3}{2}$`, String.raw`$\frac{2}{3}$`, "$1$", "$3$"],
    why: [
      String.raw`The form is $\dfrac{0}{0}$. By L'Hospital's Rule, the limit is $\displaystyle \lim_{x \to 0} \dfrac{3e^{3x}}{2\cos(2x)} = \dfrac{3}{2}$.`,
      String.raw`This divides the derivative of the denominator by the derivative of the numerator. The numerator's derivative goes on top.`,
      String.raw`This leaves out both chain rule factors, $3$ and $2$: $\dfrac{e^{0}}{\cos 0} = 1$.`,
      String.raw`This leaves out the chain rule factor $2$ from $\sin(2x)$.`,
    ], answer: 0 },
  { id: "q407-m02", type: "mcq", skill: "u4", topic: "4.7", calc: false, difficulty: "moderate",
    question: String.raw`$\displaystyle \lim_{x \to \infty} \dfrac{\ln x}{\sqrt{x}}$ is`,
    choices: ["$0$", String.raw`$\infty$`, String.raw`$\frac{1}{2}$`, "nonexistent"],
    why: [
      String.raw`The form is $\dfrac{\infty}{\infty}$. By L'Hospital's Rule, the limit is $\displaystyle \lim_{x \to \infty} \dfrac{1/x}{1/(2\sqrt{x})} = \lim_{x \to \infty} \dfrac{2}{\sqrt{x}} = 0$.`,
      String.raw`This assumes the numerator grows faster. After L'Hospital's Rule the quotient is $\dfrac{2}{\sqrt{x}}$, which approaches $0$, so $\sqrt{x}$ grows faster than $\ln x$.`,
      String.raw`This keeps only the constant $\dfrac{1}{2}$ from $\dfrac{1}{2\sqrt{x}}$. The quotient of the derivatives is $\dfrac{2}{\sqrt{x}}$, which approaches $0$.`,
      String.raw`The form $\dfrac{\infty}{\infty}$ is indeterminate, not a reason the limit fails to exist. L'Hospital's Rule gives $0$.`,
    ], answer: 0 },
  { id: "q407-m03", type: "mcq", skill: "u4", topic: "4.7", calc: false, difficulty: "easy",
    question: String.raw`$\displaystyle \lim_{x \to 2} \dfrac{x^3 - 8}{\ln(x - 1)}$ is`,
    choices: ["$12$", String.raw`$\frac{1}{12}$`, "$24$", "nonexistent"],
    why: [
      String.raw`The form is $\dfrac{0}{0}$, since $\ln 1 = 0$. By L'Hospital's Rule, the limit is $\displaystyle \lim_{x \to 2} \dfrac{3x^2}{1/(x - 1)} = \dfrac{12}{1} = 12$.`,
      String.raw`This puts the derivative of the denominator on top. The limit is the derivative of the numerator over the derivative of the denominator.`,
      String.raw`This differentiates $\ln(x - 1)$ as $\dfrac{1}{x}$. The derivative is $\dfrac{1}{x - 1}$, which is $1$ at $x = 2$.`,
      String.raw`The form $\dfrac{0}{0}$ is indeterminate, not a reason the limit fails to exist. L'Hospital's Rule gives $12$.`,
    ], answer: 0 },
  { id: "q407-m04", type: "mcq", skill: "u4", topic: "4.7", calc: false, difficulty: "difficult",
    stem: String.raw`The function $f$ is differentiable, its derivative $f'$ is continuous, $f(1) = 0$, and $f'(1) = 6$.`,
    question: String.raw`What is $\displaystyle \lim_{x \to 1} \dfrac{f\left(x^2\right)}{x - 1}$?`,
    choices: ["$12$", "$6$", "$0$", String.raw`$\frac{1}{12}$`],
    why: [
      String.raw`Since $f$ is continuous, $f\left(x^2\right) \to f(1) = 0$, and $x - 1 \to 0$, so the form is $\dfrac{0}{0}$. By L'Hospital's Rule and the chain rule, the limit is $\displaystyle \lim_{x \to 1} \dfrac{2x f'\left(x^2\right)}{1} = 2(1)f'(1) = 12$.`,
      String.raw`This leaves out the chain rule factor $2x$: the derivative of $f\left(x^2\right)$ is $2x f'\left(x^2\right)$, not $f'\left(x^2\right)$.`,
      String.raw`$\dfrac{0}{0}$ is indeterminate, not $0$.`,
      String.raw`This puts the derivative of the denominator on top. The numerator's derivative goes on top.`,
    ], answer: 0 },
  { id: "q407-m05", type: "mcq", skill: "u4", topic: "4.7", calc: false, difficulty: "difficult",
    question: String.raw`$\displaystyle \lim_{x \to 0} \dfrac{\cos(2x) - 1}{x\sin x}$ is`,
    choices: ["$-2$", "$2$", String.raw`$-\frac{1}{2}$`, "$0$"],
    why: [
      String.raw`The form is $\dfrac{0}{0}$. L'Hospital's Rule gives $\displaystyle \lim_{x \to 0} \dfrac{-2\sin(2x)}{\sin x + x\cos x}$, still $\dfrac{0}{0}$. Applying it again gives $\displaystyle \lim_{x \to 0} \dfrac{-4\cos(2x)}{2\cos x - x\sin x} = \dfrac{-4}{2} = -2$.`,
      String.raw`The derivative of $\cos(2x)$ is $-2\sin(2x)$. Dropping the negative sign gives $2$.`,
      String.raw`This leaves out both chain rule factors of $2$ from $\cos(2x)$, which gives the limit of $\dfrac{\cos x - 1}{x\sin x}$.`,
      String.raw`This differentiates $x\sin x$ as $\cos x$, skipping the product rule. Then $\dfrac{-2\sin(2x)}{\cos x} \to 0$. The derivative is $\sin x + x\cos x$.`,
    ], answer: 0 },
  { id: "q407-m06", type: "mcq", skill: "u4", topic: "4.7", calc: false, difficulty: "difficult",
    question: String.raw`If $\displaystyle \lim_{x \to 0} \dfrac{\sqrt{1 + kx} - 1}{x} = 3$, what is the value of the constant $k$?`,
    choices: ["$6$", "$3$", String.raw`$\frac{3}{2}$`, String.raw`$\frac{2}{3}$`],
    why: [
      String.raw`The form is $\dfrac{0}{0}$. By L'Hospital's Rule, the limit is $\displaystyle \lim_{x \to 0} \dfrac{k}{2\sqrt{1 + kx}} = \dfrac{k}{2}$. Setting $\dfrac{k}{2} = 3$ gives $k = 6$.`,
      String.raw`This leaves out the factor $\dfrac{1}{2}$ from the power rule, so the limit becomes $k$.`,
      String.raw`This solves $\dfrac{k}{2} = 3$ by dividing by $2$ in place of multiplying.`,
      String.raw`This puts the derivative of the denominator on top, solving $\dfrac{2}{k} = 3$.`,
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

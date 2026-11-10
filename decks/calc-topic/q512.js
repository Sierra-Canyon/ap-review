export const sets = {
  "q512-s9": {
    name: "An implicit curve", label: "Free response",
    intro: String.raw`Consider the curve given by $y^3 - 3xy = 2$. It can be shown that $\dfrac{dy}{dx} = \dfrac{y}{y^2 - x}$.`,
    sources: [{ title: "", blocks: [{ p: String.raw`$$y^3 - 3xy = 2, \qquad \dfrac{dy}{dx} = \dfrac{y}{y^2 - x}$$` }] }],
  },
};

const items = [
  { id: "q512-m01", type: "mcq", skill: "u5", topic: "5.12", calc: false, difficulty: "moderate",
    question: String.raw`At which points on the curve $y^2 = x^3 - 12x + 20$ is the tangent line horizontal?`,
    choices: [String.raw`$(2, 2)$, $(2, -2)$, $(-2, 6)$, and $(-2, -6)$`, String.raw`$(2, 2)$ and $(-2, 6)$ only`, String.raw`$(2, 0)$ and $(-2, 0)$`, String.raw`$\left(0, 2\sqrt{5}\right)$ and $\left(0, -2\sqrt{5}\right)$`],
    why: [
      String.raw`$2yy' = 3x^2 - 12$, so $\dfrac{dy}{dx} = \dfrac{3x^2 - 12}{2y}$. The numerator is $0$ at $x = \pm 2$. At $x = 2$, $y^2 = 8 - 24 + 20 = 4$, so $y = \pm 2$; at $x = -2$, $y^2 = -8 + 24 + 20 = 36$, so $y = \pm 6$. The denominator is not $0$ at any of these four points.`,
      String.raw`$y^2 = 4$ and $y^2 = 36$ each have a negative solution too. The curve is symmetric about the $x$-axis.`,
      String.raw`These points are not on the curve: at $x = 2$, $y^2 = 4$, not $0$. Also, $y = 0$ would make the denominator $0$.`,
      String.raw`At $x = 0$, $\dfrac{dy}{dx} = \dfrac{-12}{2y} \ne 0$.`,
    ], answer: 0 },
  { id: "q512-m02", type: "mcq", skill: "u5", topic: "5.12", calc: false, difficulty: "moderate",
    question: String.raw`At which points does the curve $x = y^3 - 3y$ have a vertical tangent line?`,
    choices: [String.raw`$(-2, 1)$ and $(2, -1)$`, String.raw`$(1, -2)$ and $(-1, 2)$`, String.raw`$(0, 0)$ only`, "The curve has no vertical tangent lines."],
    why: [
      String.raw`Differentiating, $1 = (3y^2 - 3)\dfrac{dy}{dx}$, so $\dfrac{dy}{dx} = \dfrac{1}{3y^2 - 3}$. The denominator is $0$ at $y = \pm 1$. When $y = 1$, $x = 1 - 3 = -2$; when $y = -1$, $x = -1 + 3 = 2$.`,
      String.raw`This swaps the coordinates. The values $y = \pm 1$ are $y$-coordinates, and the matching $x$-values come from $x = y^3 - 3y$.`,
      String.raw`At $(0, 0)$, $\dfrac{dy}{dx} = \dfrac{1}{-3} = -\dfrac{1}{3}$, which is defined, so the tangent line is not vertical.`,
      String.raw`$\dfrac{dy}{dx} = \dfrac{1}{3y^2 - 3}$ is undefined where $3y^2 - 3 = 0$, and the curve has points with $y = \pm 1$.`,
    ], answer: 0 },
  { id: "q512-m03", type: "mcq", skill: "u5", topic: "5.12", calc: false, difficulty: "difficult",
    question: String.raw`For the curve $x^3 + y^3 = 9$, what is the value of $\dfrac{d^2y}{dx^2}$ at the point $(1, 2)$?`,
    choices: [String.raw`$-\frac{9}{16}$`, String.raw`$-\frac{1}{4}$`, String.raw`$-\frac{1}{2}$`, String.raw`$\frac{9}{16}$`],
    why: [
      String.raw`$3x^2 + 3y^2y' = 0$ gives $y' = -\dfrac{x^2}{y^2}$, so $y'(1, 2) = -\dfrac{1}{4}$. By the quotient rule, $y'' = -\dfrac{2xy^2 - x^2 \cdot 2yy'}{y^4}$. At $(1, 2)$: $-\dfrac{8 - 4\left(-\frac{1}{4}\right)}{16} = -\dfrac{9}{16}$.`,
      String.raw`$-\dfrac{1}{4}$ is the value of $\dfrac{dy}{dx}$ at $(1, 2)$, not of $\dfrac{d^2y}{dx^2}$.`,
      String.raw`This treats $y$ as a constant when differentiating $-\dfrac{x^2}{y^2}$, giving $-\dfrac{2x}{y^2} = -\dfrac{1}{2}$. The quotient rule needs the $y'$ term too.`,
      String.raw`This loses the negative sign in front of $\dfrac{x^2}{y^2}$ when differentiating.`,
    ], answer: 0 },
  { id: "q512-m04", type: "mcq", skill: "u5", topic: "5.12", calc: false, difficulty: "difficult",
    stem: String.raw`Consider the curve $x^2 - y^2 = 9$ near the point $(5, 4)$.`,
    question: String.raw`Which of the following is true at $(5, 4)$?`,
    choices: [
      String.raw`$\dfrac{dy}{dx} > 0$ and $\dfrac{d^2y}{dx^2} < 0$`,
      String.raw`$\dfrac{dy}{dx} > 0$ and $\dfrac{d^2y}{dx^2} > 0$`,
      String.raw`$\dfrac{dy}{dx} < 0$ and $\dfrac{d^2y}{dx^2} < 0$`,
      String.raw`$\dfrac{dy}{dx} < 0$ and $\dfrac{d^2y}{dx^2} > 0$`,
    ],
    why: [
      String.raw`$2x - 2yy' = 0$ gives $y' = \dfrac{x}{y} = \dfrac{5}{4} > 0$. Then $y'' = \dfrac{y - xy'}{y^2} = \dfrac{4 - 5 \cdot \frac{5}{4}}{16} = -\dfrac{9}{64} < 0$. The curve is increasing and concave down there.`,
      String.raw`$y'' = \dfrac{y - xy'}{y^2}$, and $y - xy' = 4 - \dfrac{25}{4} < 0$, so $y'' < 0$.`,
      String.raw`$y' = \dfrac{x}{y}$, and $x$ and $y$ are both positive at $(5, 4)$, so $y' > 0$.`,
      String.raw`Both signs are reversed. $y' = \dfrac{5}{4}$ and $y'' = -\dfrac{9}{64}$.`,
    ], answer: 0 },
  { id: "q512-m05", type: "mcq", skill: "u5", topic: "5.12", calc: false, difficulty: "difficult",
    question: String.raw`At which point or points does the curve $xy^2 + x^3 = 16$ have a horizontal tangent line?`,
    choices: ["There are none.", String.raw`$(0, 0)$`, String.raw`$\left(2\sqrt[3]{2}, 0\right)$`, String.raw`$(2, 2)$`],
    why: [
      String.raw`$y^2 + 2xyy' + 3x^2 = 0$ gives $\dfrac{dy}{dx} = -\dfrac{y^2 + 3x^2}{2xy}$. The numerator $y^2 + 3x^2$ is $0$ only at $(0, 0)$, which is not on the curve ($0 \ne 16$). So $\dfrac{dy}{dx}$ is never $0$ on the curve.`,
      String.raw`$(0, 0)$ makes the numerator $0$, but it is not on the curve: $0 + 0 \ne 16$.`,
      String.raw`At $\left(2\sqrt[3]{2}, 0\right)$ the denominator $2xy$ is $0$ and the numerator is not, so the tangent line there is vertical.`,
      String.raw`$(2, 2)$ is on the curve, since $8 + 8 = 16$, but $\dfrac{dy}{dx} = -\dfrac{4 + 12}{8} = -2$ there.`,
    ], answer: 0 },
  { id: "q512-m06", type: "mcq", skill: "u5", topic: "5.12", calc: true, difficulty: "moderate",
    stem: String.raw`The point $(1, b)$ lies on the curve $x^2 + xy + y^3 = 9$.`,
    question: String.raw`What is the slope of the line tangent to the curve at $(1, b)$?`,
    choices: ["$-0.346$", "$-2.892$", "$0.346$", "$-0.380$"],
    why: [
      String.raw`With $x = 1$, $1 + b + b^3 = 9$, and a calculator gives $b \approx 1.83375$. Differentiating, $2x + y + xy' + 3y^2y' = 0$, so $\dfrac{dy}{dx} = -\dfrac{2x + y}{x + 3y^2}$. At $(1, 1.83375)$ this is $-\dfrac{3.83375}{11.08791} \approx -0.346$.`,
      String.raw`This is the reciprocal, $-\dfrac{x + 3y^2}{2x + y}$. The terms with $y'$ belong in the denominator.`,
      String.raw`The sign is lost. Solving $(x + 3y^2)y' = -(2x + y)$ gives a negative slope here.`,
      String.raw`This differentiates $xy$ as $y$ only, leaving out the $xy'$ term, so the denominator is $3y^2$ instead of $x + 3y^2$.`,
    ], answer: 0 },
  { id: "q512-f1a", type: "frq", skill: "u5", topic: "5.12", calc: false, set: "q512-s9", part: "(a)",
    prompt: String.raw`Find all points on the curve at which the tangent line is vertical.`,
    rows: [
      { name: "Setup", earns: String.raw`Sets $y^2 - x = 0$ and substitutes $x = y^2$ into the equation of the curve: $-2y^3 = 2$.` },
      { name: "Point", earns: String.raw`$(1, -1)$, where the numerator $y \ne 0$.` },
    ],
    solution: String.raw`The tangent line is vertical where the denominator $y^2 - x = 0$ and the numerator is not $0$. Substituting $x = y^2$: $y^3 - 3y^3 = -2y^3 = 2$, so $y = -1$ and $x = 1$. At $(1, -1)$ the numerator is $y = -1 \ne 0$, so the tangent line is vertical there. This is the only such point.` },
  { id: "q512-f1b", type: "frq", skill: "u5", topic: "5.12", calc: false, set: "q512-s9", part: "(b)",
    prompt: String.raw`The point $(1, 2)$ is on the curve. Find the value of $\dfrac{d^2y}{dx^2}$ at $(1, 2)$. Is the curve concave up or concave down at this point? Give a reason for your answer.`,
    rows: [
      { name: "Second derivative", earns: String.raw`$\dfrac{d^2y}{dx^2} = -\dfrac{4}{27}$ at $(1, 2)$, using $\dfrac{dy}{dx} = \dfrac{2}{3}$ there.` },
      { name: "Concavity with reason", earns: String.raw`Concave down, because $\dfrac{d^2y}{dx^2} < 0$ at $(1, 2)$.` },
    ],
    solution: String.raw`At $(1, 2)$, $\dfrac{dy}{dx} = \dfrac{2}{4 - 1} = \dfrac{2}{3}$. By the quotient rule, $\dfrac{d^2y}{dx^2} = \dfrac{\frac{dy}{dx}\left(y^2 - x\right) - y\left(2y\frac{dy}{dx} - 1\right)}{\left(y^2 - x\right)^2}$. At $(1, 2)$ with $\dfrac{dy}{dx} = \dfrac{2}{3}$: $\dfrac{\frac{2}{3}(3) - 2\left(\frac{8}{3} - 1\right)}{9} = \dfrac{2 - \frac{10}{3}}{9} = -\dfrac{4}{27}$. Since $\dfrac{d^2y}{dx^2} < 0$, the curve is concave down at $(1, 2)$.` },
];

export default { forms: [{ id: "q512", name: "Topic 5.12 Quiz: Behaviors of Implicit Relations", group: "Unit 5: Analytical Applications of Differentiation", items }] };

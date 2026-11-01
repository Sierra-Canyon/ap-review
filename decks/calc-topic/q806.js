export const sets = {
  "q806-s9": { name: "A cubic and a line", label: "Free response", intro: String.raw`Let $f(x) = x^3 - 3x^2$ and $g(x) = 4x$. The graphs of $f$ and $g$ enclose two regions.`,
    sources: [] },
};

const items = [
  { id: "q806-m01", type: "mcq", skill: "u8", topic: "8.6", calc: false,
    question: String.raw`What is the total area of the regions enclosed by the graphs of $y = x^3$ and $y = x$?`,
    choices: [String.raw`$\frac{1}{2}$`, "$0$", String.raw`$\frac{1}{4}$`, String.raw`$-\frac{1}{2}$`],
    why: [
      String.raw`The graphs meet at $x = -1$, $0$, and $1$. On $[-1, 0]$, $x^3 \ge x$; on $[0, 1]$, $x \ge x^3$. The area is $\displaystyle\int_{-1}^{0} \left(x^3 - x\right)dx + \int_0^1 \left(x - x^3\right)dx = \dfrac{1}{4} + \dfrac{1}{4} = \dfrac{1}{2}$.`,
      String.raw`$0$ is $\displaystyle\int_{-1}^{1} \left(x - x^3\right)dx$. The upper curve changes at $x = 0$, so the two regions cancel unless the integral is split there.`,
      String.raw`$\dfrac{1}{4}$ is the area of only one of the two regions.`,
      String.raw`This uses the wrong upper curve on both intervals, so both integrals are negative.`,
    ], answer: 0 },
  { id: "q806-m02", type: "mcq", skill: "u8", topic: "8.6", calc: false,
    question: String.raw`Which expression gives the total area of the regions enclosed by the graphs of $y = x^3$ and $y = 2x - x^2$?`,
    choices: [
      String.raw`$\displaystyle\int_{-2}^{0} \left(x^3 + x^2 - 2x\right)dx + \int_0^1 \left(2x - x^2 - x^3\right)dx$`,
      String.raw`$\displaystyle\int_{-2}^{1} \left(2x - x^2 - x^3\right)dx$`,
      String.raw`$\displaystyle\int_{-2}^{0} \left(2x - x^2 - x^3\right)dx + \int_0^1 \left(x^3 + x^2 - 2x\right)dx$`,
      String.raw`$\displaystyle\int_0^1 \left(2x - x^2 - x^3\right)dx$`,
    ],
    why: [
      String.raw`$x^3 = 2x - x^2$ gives $x^3 + x^2 - 2x = x(x + 2)(x - 1) = 0$, so $x = -2$, $0$, and $1$. At $x = -1$, $x^3 = -1 > -3 = 2x - x^2$, so $x^3$ is on top on $[-2, 0]$; at $x = \dfrac{1}{2}$, $2x - x^2 = \dfrac{3}{4} > \dfrac{1}{8}$, so $2x - x^2$ is on top on $[0, 1]$. The total area is $\dfrac{8}{3} + \dfrac{5}{12} = \dfrac{37}{12}$.`,
      String.raw`This single integral equals $\dfrac{5}{12} - \dfrac{8}{3} = -\dfrac{9}{4}$, because the region on $[-2, 0]$, where $x^3$ is on top, counts as negative. The integral must be split at $x = 0$.`,
      String.raw`This reverses the upper and lower curves on both intervals, so the expression equals $-\dfrac{37}{12}$.`,
      String.raw`This gives the area of only the region on $[0, 1]$. There is a second region on $[-2, 0]$.`,
    ], answer: 0 },
  { id: "q806-m03", type: "mcq", skill: "u8", topic: "8.6", calc: false,
    question: String.raw`What is the total area of the regions enclosed by the graph of $y = x^3 - x^2 - 6x$ and the $x$-axis?`,
    choices: [String.raw`$\frac{253}{12}$`, String.raw`$\frac{125}{12}$`, String.raw`$\frac{63}{4}$`, String.raw`$\frac{16}{3}$`],
    why: [
      String.raw`$x^3 - x^2 - 6x = x(x - 3)(x + 2)$ is positive on $(-2, 0)$ and negative on $(0, 3)$. With $F(x) = \dfrac{x^4}{4} - \dfrac{x^3}{3} - 3x^2$, $\displaystyle\int_{-2}^{0} = \dfrac{16}{3}$ and $\displaystyle\int_0^3 = -\dfrac{63}{4}$. The area is $\dfrac{16}{3} + \dfrac{63}{4} = \dfrac{253}{12}$.`,
      String.raw`This is $\left|\displaystyle\int_{-2}^{3} \left(x^3 - x^2 - 6x\right)dx\right| = \left|\dfrac{16}{3} - \dfrac{63}{4}\right|$. The two regions partly cancel unless the integral is split at $x = 0$.`,
      String.raw`$\dfrac{63}{4}$ is the area of the region on $[0, 3]$ only.`,
      String.raw`$\dfrac{16}{3}$ is the area of the region on $[-2, 0]$ only.`,
    ], answer: 0 },
  { id: "q806-m04", type: "mcq", skill: "u8", topic: "8.6", calc: true,
    question: String.raw`What is the total area of the regions enclosed by the graphs of $y = x^3 - 3x + 1$ and $y = e^{x/2} - 1$?`,
    choices: ["$6.586$", "$3.189$", "$4.887$", "$1.698$"],
    why: [
      String.raw`With a calculator, the graphs meet at $x = a = -1.95701$, $x = b = 0.28950$, and $x = c = 1.80500$. The cubic is on top on $(a, b)$ and $e^{x/2} - 1$ is on top on $(b, c)$. The area is $\displaystyle\int_a^b \left(x^3 - 3x + 2 - e^{x/2}\right)dx + \int_b^c \left(e^{x/2} - 2 - x^3 + 3x\right)dx = 4.887 + 1.698 = 6.586$.`,
      String.raw`This is $\left|\displaystyle\int_a^c \left(x^3 - 3x + 2 - e^{x/2}\right)dx\right|$. The upper curve changes at $x = b$, so the integral must be split there or the smaller region cancels part of the larger one.`,
      String.raw`$4.887$ is the area of the region on $(a, b)$ only.`,
      String.raw`$1.698$ is the area of the region on $(b, c)$ only.`,
    ], answer: 0 },
  { id: "q806-m05", type: "mcq", skill: "u8", topic: "8.6", calc: false,
    question: String.raw`The graphs of the continuous functions $f$ and $g$ intersect at $x = 0$, $x = 2$, and $x = 5$. The graph of $f$ is above the graph of $g$ on $(0, 2)$, and the region between them there has area $5$. The graph of $g$ is above the graph of $f$ on $(2, 5)$, and the region between them there has area $3$. What is the value of $\displaystyle\int_0^5 \left(f(x) - g(x)\right)dx$?`,
    choices: ["$2$", "$8$", "$-2$", "$-8$"],
    why: [
      String.raw`On $[0, 2]$, $f - g \ge 0$, so that part of the integral is $5$. On $[2, 5]$, $f - g \le 0$, so that part is $-3$. The integral is $5 - 3 = 2$.`,
      String.raw`$8$ is the total area of the two regions. The integral of $f - g$ counts the region where $g$ is on top as negative.`,
      String.raw`This is $\displaystyle\int_0^5 \left(g(x) - f(x)\right)dx$, the integral with the functions reversed.`,
      String.raw`This makes both regions negative. Only the region where $g$ is above $f$ counts as negative in $\displaystyle\int_0^5 (f - g)\,dx$.`,
    ], answer: 0 },
  { id: "q806-m06", type: "mcq", skill: "u8", topic: "8.6", calc: false,
    question: String.raw`What is the total area of the regions between the graphs of $y = \cos x$ and $y = \cos(2x)$ on the interval $[0, \pi]$?`,
    choices: [String.raw`$\frac{3\sqrt{3}}{2}$`, "$0$", String.raw`$\frac{3\sqrt{3}}{4}$`, String.raw`$\frac{\sqrt{3}}{2}$`],
    why: [
      String.raw`$\cos(2x) = \cos x$ gives $2\cos^2 x - \cos x - 1 = (2\cos x + 1)(\cos x - 1) = 0$, so $x = 0$ and $x = \dfrac{2\pi}{3}$ on $[0, \pi]$. With $G(x) = \sin x - \dfrac{1}{2}\sin(2x)$, the area is $\displaystyle\int_0^{2\pi/3} \left(\cos x - \cos(2x)\right)dx + \int_{2\pi/3}^{\pi} \left(\cos(2x) - \cos x\right)dx = \dfrac{3\sqrt{3}}{4} + \dfrac{3\sqrt{3}}{4} = \dfrac{3\sqrt{3}}{2}$.`,
      String.raw`$0$ is $\displaystyle\int_0^{\pi} \left(\cos x - \cos(2x)\right)dx$. The upper curve changes at $x = \dfrac{2\pi}{3}$, so the integral must be split there.`,
      String.raw`$\dfrac{3\sqrt{3}}{4}$ is the area of only one of the two regions.`,
      String.raw`This splits the integral at $x = \dfrac{\pi}{3}$. The solution of $\cos x = -\dfrac{1}{2}$ on $[0, \pi]$ is $x = \dfrac{2\pi}{3}$.`,
    ], answer: 0 },
  { id: "q806-f1a", type: "frq", skill: "u8", topic: "8.6", calc: false, set: "q806-s9", part: "(a)",
    prompt: String.raw`Find the $x$-coordinates of the points where the graphs of $f$ and $g$ intersect.`,
    rows: [
      { name: "Intersections", earns: String.raw`$x = -1$, $x = 0$, and $x = 4$, from $x^3 - 3x^2 - 4x = x(x - 4)(x + 1) = 0$.` },
    ],
    solution: String.raw`$x^3 - 3x^2 = 4x$ gives $x^3 - 3x^2 - 4x = x(x^2 - 3x - 4) = x(x - 4)(x + 1) = 0$, so $x = -1$, $x = 0$, and $x = 4$.` },
  { id: "q806-f1b", type: "frq", skill: "u8", topic: "8.6", calc: false, set: "q806-s9", part: "(b)",
    prompt: String.raw`Find the total area of the two regions enclosed by the graphs of $f$ and $g$.`,
    rows: [
      { name: "Integrals", earns: String.raw`$\displaystyle\int_{-1}^{0} \left(f(x) - g(x)\right)dx + \int_0^4 \left(g(x) - f(x)\right)dx$, with the correct upper function on each interval.` },
      { name: "Answer", earns: String.raw`Total area $\dfrac{131}{4}$.` },
    ],
    solution: String.raw`Let $h(x) = f(x) - g(x) = x^3 - 3x^2 - 4x$. At $x = -\dfrac{1}{2}$, $h = \dfrac{9}{8} > 0$, so $f$ is on top on $[-1, 0]$; at $x = 1$, $h = -6 < 0$, so $g$ is on top on $[0, 4]$. With $H(x) = \dfrac{x^4}{4} - x^3 - 2x^2$, $H(-1) = -\dfrac{3}{4}$, $H(0) = 0$, and $H(4) = -32$. The area is $\displaystyle\int_{-1}^{0} h(x)\,dx - \int_0^4 h(x)\,dx = \dfrac{3}{4} + 32 = \dfrac{131}{4}$.` },
  { id: "q806-f1c", type: "frq", skill: "u8", topic: "8.6", calc: false, set: "q806-s9", part: "(c)",
    prompt: String.raw`Find the value of $\displaystyle\int_{-1}^{4} \left(f(x) - g(x)\right)dx$, and explain why it is not the total area found in part (b).`,
    rows: [
      { name: "Value and reason", earns: String.raw`$\displaystyle\int_{-1}^{4} \left(f(x) - g(x)\right)dx = \dfrac{3}{4} - 32 = -\dfrac{125}{4}$, with the reason that $f - g < 0$ on $(0, 4)$, so that region counts as negative.` },
    ],
    solution: String.raw`$\displaystyle\int_{-1}^{4} \left(f(x) - g(x)\right)dx = H(4) - H(-1) = -32 + \dfrac{3}{4} = -\dfrac{125}{4}$. This is not the area because $f(x) - g(x) < 0$ on $(0, 4)$, so the region where $g$ is above $f$ contributes $-32$ and cancels the region on $(-1, 0)$ instead of adding to it.` },
];

export default { forms: [{ id: "q806", name: "Topic 8.6 Quiz: Curves with Several Intersections", group: "Unit 8: Applications of Integration", items }] };

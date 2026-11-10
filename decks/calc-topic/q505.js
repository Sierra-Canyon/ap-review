export const sets = {
  "q505-s1": {
    name: "Values of f", label: "Table",
    intro: String.raw`The function $f$ is continuous on the closed interval $[-2, 6]$ and differentiable on $(-2, 6)$. Its only critical points in $(-2, 6)$ are $x = 0$ and $x = 3$. Selected values of $f$ are given in the table below.`,
    sources: [{ title: "", blocks: [{ table: { head: ["$x$", "$-2$", "$0$", "$3$", "$6$"], rows: [["$f(x)$", "$4$", "$-1$", "$7$", "$-3$"]] } }] }],
  },
  "q505-s9": {
    name: "Medication concentration", label: "Free response",
    intro: String.raw`The concentration of a medication in a patient's blood, in milligrams per liter, is modeled by $C(t) = 20te^{-t/2}$, where $t$ is the number of hours after the medication is given, for $0 \le t \le 6$.`,
    sources: [{ title: "", blocks: [{ p: String.raw`$$C(t) = 20te^{-t/2}, \quad 0 \le t \le 6$$` }] }],
  },
};

const items = [
  { id: "q505-m01", type: "mcq", skill: "u5", topic: "5.5", calc: false, difficulty: "easy",
    question: String.raw`What is the absolute minimum value of $f(x) = x^3 - 6x^2$ on the interval $[-1, 5]$?`,
    choices: ["$-32$", "$-25$", "$-7$", "$4$"],
    why: [
      String.raw`$f'(x) = 3x^2 - 12x = 3x(x - 4) = 0$ at $x = 0$ and $x = 4$, both in $[-1, 5]$. The candidates are $f(-1) = -7$, $f(0) = 0$, $f(4) = 64 - 96 = -32$, and $f(5) = 125 - 150 = -25$. The least is $-32$.`,
      String.raw`$f(5) = -25$ is the value at the right endpoint. The critical point $x = 4$ gives a smaller value.`,
      String.raw`$f(-1) = -7$ is the value at the left endpoint, but $f(4) = -32$ is smaller.`,
      String.raw`$x = 4$ is where the minimum occurs. The minimum value is $f(4) = -32$.`,
    ], answer: 0 },
  { id: "q505-m02", type: "mcq", skill: "u5", topic: "5.5", calc: false, difficulty: "easy",
    question: String.raw`At what value of $x$ does $f(x) = 6\sqrt{x} - x^{3/2}$ attain its absolute maximum on the interval $[0, 4]$?`,
    choices: ["$2$", "$4$", "$0$", String.raw`$4\sqrt{2}$`],
    why: [
      String.raw`$f'(x) = \dfrac{3}{\sqrt{x}} - \dfrac{3}{2}\sqrt{x} = \dfrac{6 - 3x}{2\sqrt{x}}$, which is $0$ at $x = 2$. The candidates are $f(0) = 0$, $f(2) = 6\sqrt{2} - 2\sqrt{2} = 4\sqrt{2} \approx 5.66$, and $f(4) = 12 - 8 = 4$. The greatest value is at $x = 2$.`,
      String.raw`$x = 4$ is the right endpoint, but $f(4) = 4$ is less than $f(2) = 4\sqrt{2}$. The largest $x$ does not give the largest value.`,
      String.raw`$f(0) = 0$ is the least of the candidate values, so the absolute minimum is at $x = 0$.`,
      String.raw`$4\sqrt{2}$ is the absolute maximum value, $f(2)$. The question asks where it occurs.`,
    ], answer: 0 },
  { id: "q505-m03", type: "mcq", skill: "u5", topic: "5.5", calc: false, difficulty: "difficult",
    question: String.raw`What is the absolute maximum value of $f(x) = 2\sin x + \cos(2x)$ on the interval $[0, \pi]$?`,
    choices: [String.raw`$\frac{3}{2}$`, "$1$", "$3$", String.raw`$\frac{2 + \sqrt{3}}{2}$`],
    why: [
      String.raw`$f'(x) = 2\cos x - 2\sin(2x) = 2\cos x(1 - 2\sin x)$, which is $0$ at $x = \dfrac{\pi}{6}$, $\dfrac{\pi}{2}$, and $\dfrac{5\pi}{6}$. $f(0) = f(\pi) = 1$, $f\left(\dfrac{\pi}{2}\right) = 2 - 1 = 1$, and $f\left(\dfrac{\pi}{6}\right) = f\left(\dfrac{5\pi}{6}\right) = 1 + \dfrac{1}{2} = \dfrac{3}{2}$. The greatest is $\dfrac{3}{2}$.`,
      String.raw`$1$ is the value at the endpoints and at $x = \dfrac{\pi}{2}$. This misses the critical points where $\sin x = \dfrac{1}{2}$.`,
      String.raw`This takes $\cos(2x)$ at $x = \dfrac{\pi}{2}$ as $1$. In fact $\cos \pi = -1$, so $f\left(\dfrac{\pi}{2}\right) = 2 - 1 = 1$.`,
      String.raw`This evaluates $\cos(2x)$ at $x = \dfrac{\pi}{6}$ as $\cos\dfrac{\pi}{6} = \dfrac{\sqrt{3}}{2}$, forgetting to double the angle. In fact $\cos\dfrac{\pi}{3} = \dfrac{1}{2}$.`,
    ], answer: 0 },
  { id: "q505-m04", type: "mcq", skill: "u5", topic: "5.5", calc: false, difficulty: "moderate", set: "q505-s1",
    question: String.raw`At what value of $x$ does $f$ attain its absolute minimum on $[-2, 6]$?`,
    choices: [String.raw`$x = 6$`, String.raw`$x = 0$`, String.raw`$x = -2$`, String.raw`$x = 3$`],
    why: [
      String.raw`The candidates are the endpoints and the critical points: $f(-2) = 4$, $f(0) = -1$, $f(3) = 7$, $f(6) = -3$. The least value is $-3$, at $x = 6$.`,
      String.raw`$f(0) = -1$ is the least value among the critical points, but the endpoint value $f(6) = -3$ is smaller.`,
      String.raw`$f(-2) = 4$ is not the least of the candidate values.`,
      String.raw`$f(3) = 7$ is the absolute maximum value, not the minimum.`,
    ], answer: 0 },
  { id: "q505-m05", type: "mcq", skill: "u5", topic: "5.5", calc: false, difficulty: "moderate",
    question: String.raw`What is the absolute maximum value of $f(x) = 2x - e^{x}$ on the interval $[0, 2]$?`,
    choices: [String.raw`$2\ln 2 - 2$`, String.raw`$\ln 2$`, "$-1$", String.raw`$4 - e^{2}$`],
    why: [
      String.raw`$f'(x) = 2 - e^{x} = 0$ at $x = \ln 2$, which is in $[0, 2]$. The candidates are $f(0) = -1$, $f(\ln 2) = 2\ln 2 - 2 \approx -0.614$, and $f(2) = 4 - e^{2} \approx -3.389$. The greatest is $2\ln 2 - 2$.`,
      String.raw`$x = \ln 2$ is where the maximum occurs, not the maximum value.`,
      String.raw`$f(0) = -1$ is the value at the left endpoint, but $f(\ln 2) \approx -0.614$ is greater.`,
      String.raw`$f(2) = 4 - e^{2}$ is the absolute minimum value on $[0, 2]$.`,
    ], answer: 0 },
  { id: "q505-m06", type: "mcq", skill: "u5", topic: "5.5", calc: true, difficulty: "easy",
    question: String.raw`What is the absolute maximum value of $f(x) = e^{x/2}\cos x$ on the interval $[0, 3]$?`,
    choices: ["$1.128$", "$1.000$", "$0.464$", "$-4.437$"],
    why: [
      String.raw`$f'(x) = e^{x/2}\left(\dfrac{1}{2}\cos x - \sin x\right) = 0$ when $\tan x = \dfrac{1}{2}$, so $x \approx 0.46365$ in $[0, 3]$. The candidates are $f(0) = 1$, $f(0.46365) \approx 1.128$, and $f(3) \approx -4.437$. The greatest is $1.128$.`,
      String.raw`$f(0) = 1$ is the left endpoint value, but $f$ is larger at the critical point $x \approx 0.464$.`,
      String.raw`$0.464$ is where the maximum occurs, not the maximum value.`,
      String.raw`$f(3) \approx -4.437$ is the absolute minimum value on $[0, 3]$.`,
    ], answer: 0 },
  { id: "q505-f1a", type: "frq", skill: "u5", topic: "5.5", calc: false, set: "q505-s9", part: "(a)",
    prompt: String.raw`Find $C'(t)$.`,
    rows: [
      { name: "Derivative", earns: String.raw`$C'(t) = 20e^{-t/2} - 10te^{-t/2}$, or an equivalent form such as $10e^{-t/2}(2 - t)$.` },
    ],
    solution: String.raw`By the product rule, $C'(t) = 20e^{-t/2} + 20t\left(-\dfrac{1}{2}e^{-t/2}\right) = 20e^{-t/2} - 10te^{-t/2} = 10e^{-t/2}(2 - t)$.` },
  { id: "q505-f1b", type: "frq", skill: "u5", topic: "5.5", calc: false, set: "q505-s9", part: "(b)",
    prompt: String.raw`Find the absolute maximum concentration of the medication for $0 \le t \le 6$. Justify your answer.`,
    rows: [
      { name: "Critical point", earns: String.raw`Sets $C'(t) = 0$: $t = 2$.` },
      { name: "Answer with Candidates Test", earns: String.raw`Compares $C(0) = 0$, $C(2) = \dfrac{40}{e}$, and $C(6) = \dfrac{120}{e^{3}}$; the absolute maximum is $\dfrac{40}{e}$ milligrams per liter, at $t = 2$.` },
    ],
    solution: String.raw`$C'(t) = 10e^{-t/2}(2 - t) = 0$ only at $t = 2$, since $e^{-t/2} > 0$. $C$ is continuous on $[0, 6]$, so the absolute maximum occurs at a critical point or an endpoint. $C(0) = 0$, $C(2) = 40e^{-1} = \dfrac{40}{e}$, and $C(6) = 120e^{-3} = \dfrac{120}{e^{3}}$. Since $\dfrac{120}{e^{3}} = \dfrac{40}{e} \cdot \dfrac{3}{e^{2}}$ and $\dfrac{3}{e^{2}} < 1$, the greatest value is $\dfrac{40}{e}$. The absolute maximum concentration is $\dfrac{40}{e} \approx 14.7$ milligrams per liter, at $t = 2$ hours.` },
];

export default { forms: [{ id: "q505", name: "Topic 5.5 Quiz: The Candidates Test", group: "Unit 5: Analytical Applications of Differentiation", items }] };

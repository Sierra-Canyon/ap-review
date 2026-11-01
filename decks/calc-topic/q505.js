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
  { id: "q505-m01", type: "mcq", skill: "u5", topic: "5.5", calc: false,
    question: String.raw`What is the absolute minimum value of $f(x) = x^3 - 27x$ on the interval $[0, 4]$?`,
    choices: ["$-54$", "$0$", "$3$", "$54$"],
    why: [
      String.raw`$f'(x) = 3x^2 - 27 = 0$ at $x = \pm 3$; only $x = 3$ is in $[0, 4]$. The candidates are $f(0) = 0$, $f(3) = 27 - 81 = -54$, and $f(4) = 64 - 108 = -44$. The least is $-54$.`,
      String.raw`$f(0) = 0$ is the absolute maximum value on $[0, 4]$, not the minimum.`,
      String.raw`$x = 3$ is where the minimum occurs. The minimum value is $f(3) = -54$.`,
      String.raw`$f(-3) = 54$ uses the critical point $x = -3$, which is not in $[0, 4]$.`,
    ], answer: 0 },
  { id: "q505-m02", type: "mcq", skill: "u5", topic: "5.5", calc: false,
    question: String.raw`What is the absolute maximum value of $f(x) = 5\sqrt{x} - x^{3/2}$ on the interval $[0, 4]$?`,
    choices: [String.raw`$\frac{10\sqrt{15}}{9}$`, "$2$", String.raw`$\frac{5}{3}$`, "$0$"],
    why: [
      String.raw`$f'(x) = \dfrac{5}{2\sqrt{x}} - \dfrac{3}{2}\sqrt{x} = \dfrac{5 - 3x}{2\sqrt{x}}$, which is $0$ at $x = \dfrac{5}{3}$. The candidates are $f(0) = 0$, $f(4) = 10 - 8 = 2$, and $f\left(\dfrac{5}{3}\right) = \sqrt{\dfrac{5}{3}}\left(5 - \dfrac{5}{3}\right) = \dfrac{10}{3}\sqrt{\dfrac{5}{3}} = \dfrac{10\sqrt{15}}{9} \approx 4.30$. The greatest is $\dfrac{10\sqrt{15}}{9}$.`,
      String.raw`$f(4) = 2$ is the value at the right endpoint, but $f$ is larger at the critical point.`,
      String.raw`$x = \dfrac{5}{3}$ is where the maximum occurs, not the maximum value.`,
      String.raw`$f(0) = 0$ is the absolute minimum value on $[0, 4]$.`,
    ], answer: 0 },
  { id: "q505-m03", type: "mcq", skill: "u5", topic: "5.5", calc: false,
    question: String.raw`What is the absolute maximum value of $f(x) = 2\sin x + \cos(2x)$ on the interval $[0, \pi]$?`,
    choices: [String.raw`$\frac{3}{2}$`, "$1$", "$2$", "$3$"],
    why: [
      String.raw`$f'(x) = 2\cos x - 2\sin(2x) = 2\cos x(1 - 2\sin x)$, which is $0$ at $x = \dfrac{\pi}{6}$, $\dfrac{\pi}{2}$, and $\dfrac{5\pi}{6}$. $f(0) = f(\pi) = 1$, $f\left(\dfrac{\pi}{2}\right) = 2 - 1 = 1$, and $f\left(\dfrac{\pi}{6}\right) = f\left(\dfrac{5\pi}{6}\right) = 1 + \dfrac{1}{2} = \dfrac{3}{2}$. The greatest is $\dfrac{3}{2}$.`,
      String.raw`$1$ is the value at the endpoints and at $x = \dfrac{\pi}{2}$. This misses the critical points where $\sin x = \dfrac{1}{2}$.`,
      String.raw`$2$ is the greatest value of $2\sin x$ alone. At $x = \dfrac{\pi}{2}$, $\cos(2x) = -1$, so $f\left(\dfrac{\pi}{2}\right) = 1$.`,
      String.raw`$3$ adds the greatest values of the two terms, but they do not occur at the same $x$.`,
    ], answer: 0 },
  { id: "q505-m04", type: "mcq", skill: "u5", topic: "5.5", calc: false, set: "q505-s1",
    question: String.raw`At what value of $x$ does $f$ attain its absolute minimum on $[-2, 6]$?`,
    choices: [String.raw`$x = 6$`, String.raw`$x = 0$`, String.raw`$x = -2$`, String.raw`$x = 3$`],
    why: [
      String.raw`The candidates are the endpoints and the critical points: $f(-2) = 4$, $f(0) = -1$, $f(3) = 7$, $f(6) = -3$. The least value is $-3$, at $x = 6$.`,
      String.raw`$f(0) = -1$ is the least value among the critical points, but the endpoint value $f(6) = -3$ is smaller.`,
      String.raw`$f(-2) = 4$ is not the least of the candidate values.`,
      String.raw`$f(3) = 7$ is the absolute maximum value, not the minimum.`,
    ], answer: 0 },
  { id: "q505-m05", type: "mcq", skill: "u5", topic: "5.5", calc: false,
    question: String.raw`What is the absolute minimum value of $f(x) = x - 2\ln x$ on the interval $[1, e^{2}]$?`,
    choices: [String.raw`$2 - 2\ln 2$`, "$1$", String.raw`$e^{2} - 4$`, "$2$"],
    why: [
      String.raw`$f'(x) = 1 - \dfrac{2}{x} = 0$ at $x = 2$. The candidates are $f(1) = 1$, $f(2) = 2 - 2\ln 2 \approx 0.614$, and $f(e^{2}) = e^{2} - 4 \approx 3.389$. The least is $2 - 2\ln 2$.`,
      String.raw`$f(1) = 1$ is the left endpoint value, but $f(2) = 2 - 2\ln 2 < 1$.`,
      String.raw`$f(e^{2}) = e^{2} - 4$ is the absolute maximum value.`,
      String.raw`$x = 2$ is where the minimum occurs. The minimum value is $f(2) = 2 - 2\ln 2$.`,
    ], answer: 0 },
  { id: "q505-m06", type: "mcq", skill: "u5", topic: "5.5", calc: true,
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
      { name: "Answer with candidates test", earns: String.raw`Compares $C(0) = 0$, $C(2) = \dfrac{40}{e}$, and $C(6) = \dfrac{120}{e^{3}}$; the absolute maximum is $\dfrac{40}{e}$ milligrams per liter, at $t = 2$.` },
    ],
    solution: String.raw`$C'(t) = 10e^{-t/2}(2 - t) = 0$ only at $t = 2$, since $e^{-t/2} > 0$. $C$ is continuous on $[0, 6]$, so the absolute maximum occurs at a critical point or an endpoint. $C(0) = 0$, $C(2) = 40e^{-1} = \dfrac{40}{e}$, and $C(6) = 120e^{-3} = \dfrac{120}{e^{3}}$. Since $\dfrac{120}{e^{3}} = \dfrac{40}{e} \cdot \dfrac{3}{e^{2}}$ and $\dfrac{3}{e^{2}} < 1$, the greatest value is $\dfrac{40}{e}$. The absolute maximum concentration is $\dfrac{40}{e} \approx 14.7$ milligrams per liter, at $t = 2$ hours.` },
];

export default { forms: [{ id: "q505", name: "Topic 5.5 Quiz: The Candidates Test", group: "Unit 5: Analytical Applications of Differentiation", items }] };

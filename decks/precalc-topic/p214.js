// AP Precalculus topic quiz, 2.14 Logarithmic Function Context and Data Modeling.
import { graph } from "../../plot.js";

const age = [1, 2, 3, 5, 8, 12], height = [1.3, 1.9, 2.5, 3.1, 3.8, 4.1];

export const sets = {
  "p214-s1": {
    name: "Height of a young tree",
    label: "Table and graph",
    intro: String.raw`A forester measures the height of a young tree. Its height $h$, in meters, at age $t$ years is given in the table and plotted below.`,
    sources: [{ title: "", blocks: [
      { table: { head: [String.raw`$t$ (years)`, ...age.map((v) => `$${v}$`)], rows: [[String.raw`$h$ (meters)`, ...height.map((v) => `$${v}$`)]] } },
      { svg: graph({
        x: [-1, 14], y: [-0.5, 5], step: { x: 1, y: 0.5 }, labelEvery: 2, xname: "t", yname: "h",
        dots: age.map((t, i) => [t, height[i], "closed"]),
        alt: "Scatterplot of tree height h in meters against age t in years: (1, 1.3), (2, 1.9), (3, 2.5), (5, 3.1), (8, 3.8), (12, 4.1). The points rise quickly at first and then more and more slowly.",
      }) },
    ] }],
  },
  "p214-s2": {
    name: "Sound level and distance",
    label: "Free response",
    intro: String.raw`The sound level near a loudspeaker, in decibels, at a distance of $d$ meters from the speaker is modeled by $L(d) = a + b\log d$ for $1 \le d \le 50$, where $a$ and $b$ are constants. According to the model, the sound level is $88$ decibels at $d = 2$ meters and $74$ decibels at $d = 10$ meters. A calculator may be used.`,
    sources: [],
  },
};

export default {
  forms: [{
    id: "p214",
    name: "Topic 2.14 Quiz: Logarithmic Function Context and Data Modeling",
    group: "Unit 2: Exponential and Logarithmic Functions",
    items: [
      { id: "p214-m01", type: "mcq", skill: "u2", topic: "2.14", calc: false, difficulty: "easy", set: "p214-s1",
        question: String.raw`The data are modeled by $h = a + b\ln t$, with $b > 0$. According to the model, what happens to the tree's height each time its age doubles?`,
        choices: [
          String.raw`It increases by $b\ln 2$.`,
          String.raw`It doubles.`,
          String.raw`It increases by $2b$.`,
          String.raw`It is multiplied by $b\ln 2$.`,
        ],
        why: [
          String.raw`$h(2t) - h(t) = b\ln(2t) - b\ln t = b\ln 2$. Each doubling of the age adds the same amount, $b\ln 2$ meters.`,
          String.raw`A logarithmic model turns a factor in the input into an added amount in the output. Doubling the output would need an exponential relationship.`,
          String.raw`$2b$ replaces $\ln 2$ with $2$. By the product property, $\ln(2t) = \ln 2 + \ln t$, so doubling $t$ adds $\ln 2 \approx 0.693$ to $\ln t$, not $2$.`,
          String.raw`The change is added, not multiplied: $h(2t) = h(t) + b\ln 2$.`,
        ], answer: 0 },
      { id: "p214-m02", type: "mcq", skill: "u2", topic: "2.14", calc: true, difficulty: "moderate", set: "p214-s1",
        question: String.raw`A logarithmic regression of the form $h = a + b\ln t$ is fit to the data. To the nearest thousandth, what height does the regression predict at age $20$ years?`,
        choices: ["$4.757$", "$6.442$", "$10.356$", "$2.752$"],
        why: [
          String.raw`The regression gives $a \approx 1.212$ and $b \approx 1.183$. Then $h(20) = 1.212 + 1.183\ln 20 \approx 4.757$ meters.`,
          String.raw`$6.442$ comes from a linear regression, which keeps the early fast growth going and overestimates.`,
          String.raw`$10.356$ comes from an exponential regression, which is concave up and grows faster and faster. The data are concave down.`,
          String.raw`$2.752$ uses the regression's $a$ and $b$ with the common log, $1.212 + 1.183\log 20$. The model uses $\ln t$.`,
        ], answer: 0 },
      { id: "p214-m03", type: "mcq", skill: "u2", topic: "2.14", calc: false, difficulty: "easy",
        question: String.raw`In a single-elimination tournament, a tournament with $8$ players needs $3$ rounds, one with $16$ players needs $4$ rounds, one with $32$ players needs $5$ rounds, and one with $64$ players needs $6$ rounds. Which function gives the number of rounds $R$ for $n$ players?`,
        choices: [String.raw`$R = \log_{2} n$`, String.raw`$R = \log n$`, String.raw`$R = 2^{n}$`, String.raw`$R = \frac{n}{8} + 2$`],
        why: [
          String.raw`Each time the number of players doubles, one more round is needed. That is the pattern of $\log_{2} n$: $\log_{2} 8 = 3$, $\log_{2} 16 = 4$, $\log_{2} 32 = 5$, $\log_{2} 64 = 6$.`,
          String.raw`$\log n$ has base $10$; it adds $1$ when $n$ is multiplied by $10$. For example, $\log 8 \approx 0.9$, not $3$.`,
          String.raw`$2^{n}$ is the inverse pattern: it doubles the output when the input increases by $1$. Here the input doubles and the output increases by $1$.`,
          String.raw`$\dfrac{n}{8} + 2$ fits the first two tournaments but is linear: it gives $6$ rounds for $32$ players, not $5$.`,
        ], answer: 0 },
      { id: "p214-m04", type: "mcq", skill: "u2", topic: "2.14", calc: false, difficulty: "moderate",
        question: String.raw`The value of an investment $t$ years after it is made is $P = 2000(1.05)^{t}$ dollars. Which expression gives the time $t$, in years, at which the value is $P$ dollars?`,
        choices: [String.raw`$\dfrac{\ln(P/2000)}{\ln 1.05}$`, String.raw`$\dfrac{\ln P}{2000\ln 1.05}$`, String.raw`$\dfrac{\ln(P/2000)}{0.05}$`, String.raw`$\ln\left(\dfrac{P}{2000}\right)\ln 1.05$`],
        why: [
          String.raw`Divide by $2000$: $(1.05)^{t} = \dfrac{P}{2000}$. Take the natural log: $t\ln 1.05 = \ln\left(\dfrac{P}{2000}\right)$, so $t = \dfrac{\ln(P/2000)}{\ln 1.05}$, which is $\log_{1.05}\left(\dfrac{P}{2000}\right)$.`,
          String.raw`This takes the log of $P$ before dividing by $2000$. The $2000$ multiplies the power, so divide by it first.`,
          String.raw`Dividing by $0.05$ treats the growth as continuous, $2000e^{0.05t}$. The growth factor each year is $1.05$, so divide by $\ln 1.05$.`,
          String.raw`This multiplies by $\ln 1.05$ instead of dividing. The equation $t\ln 1.05 = \ln\left(\dfrac{P}{2000}\right)$ is solved by dividing.`,
        ], answer: 0 },
      { id: "p214-m05", type: "mcq", skill: "u2", topic: "2.14", calc: false, difficulty: "easy",
        question: String.raw`For a function $f$, $f(4) = 0$, and each time the input is multiplied by $4$, the output decreases by $2$. Which of the following could define $f$?`,
        choices: [String.raw`$f(x) = 2 - 2\log_{4} x$`, String.raw`$f(x) = 4 - 2\log_{2} x$`, String.raw`$f(x) = -2\log_{4} x$`, String.raw`$f(x) = 2\log_{4} x - 2$`],
        why: [
          String.raw`Multiplying $x$ by $4$ adds $1$ to $\log_{4} x$, so it subtracts $2$ from $2 - 2\log_{4} x$. And $f(4) = 2 - 2(1) = 0$.`,
          String.raw`$4 - 2\log_{2} x$ gives $0$ at $x = 4$, but multiplying $x$ by $4$ adds $2$ to $\log_{2} x$, so the output decreases by $4$.`,
          String.raw`$-2\log_{4} x$ decreases by $2$ each time, but $f(4) = -2$, not $0$.`,
          String.raw`$2\log_{4} x - 2$ gives $0$ at $x = 4$, but it increases by $2$ each time the input is multiplied by $4$.`,
        ], answer: 0 },
      { id: "p214-m06", type: "mcq", skill: "u2", topic: "2.14", calc: true, difficulty: "difficult",
        question: String.raw`After a cleanup, the concentration of a pollutant in a pond decreases exponentially. It is $40$ parts per million at $t = 0$ days and $25$ parts per million at $t = 3$ days. The time $t$ at which the concentration is $C$ parts per million is a logarithmic function of $C$. To the nearest thousandth, at what time is the concentration $5$ parts per million?`,
        choices: ["$13.273$", "$7.000$", "$4.424$", "$1.500$"],
        why: [
          String.raw`The concentration is $C = 40(0.625)^{t/3}$, since it is multiplied by $\dfrac{25}{40} = 0.625$ every $3$ days. Solving for $t$: $t = \dfrac{3\ln(C/40)}{\ln 0.625}$. At $C = 5$, $t = \dfrac{3\ln 0.125}{\ln 0.625} \approx 13.273$ days.`,
          String.raw`$7$ treats the decrease as linear: $15$ parts per million in $3$ days is $5$ a day, so $35$ takes $7$ days. The decrease is by a constant factor, not a constant amount.`,
          String.raw`$4.424$ is $\dfrac{\ln 0.125}{\ln 0.625}$, which treats $0.625$ as the factor for $1$ day. It is the factor for $3$ days, so multiply by $3$.`,
          String.raw`$1.5$ is $\dfrac{3\ln 5}{\ln 25}$, which takes logs of the concentrations instead of their ratios to $40$.`,
        ], answer: 0 },
      { id: "p214-f1a", type: "frq", skill: "u2", topic: "2.14", calc: true, set: "p214-s2", part: "(a)",
        prompt: String.raw`(i) Use the given data to write two equations that can be used to find the values of the constants $a$ and $b$ in the expression for $L(d)$.

(ii) Find the values of $a$ and $b$ as decimal approximations.`,
        rows: [
          { name: "Two equations", earns: String.raw`$a + b\log 2 = 88$ and $a + b\log 10 = 74$.` },
          { name: "Values of a and b", earns: String.raw`$b = \dfrac{-14}{\log 5} \approx -20.029$ and $a \approx 94.029$.` },
        ],
        solution: String.raw`$L(2) = 88$ and $L(10) = 74$ give $$a + b\log 2 = 88 \qquad a + b\log 10 = 74$$ Subtracting the first equation from the second: $b(\log 10 - \log 2) = -14$, so $b\log 5 = -14$ and $b = \dfrac{-14}{\log 5} \approx -20.029$. Then $a = 88 - b\log 2 \approx 88 + 20.029(0.301) \approx 94.029$.` },
      { id: "p214-f1b", type: "frq", skill: "u2", topic: "2.14", calc: true, set: "p214-s2", part: "(b)",
        prompt: String.raw`Find the average rate of change of the sound level from $d = 2$ to $d = 10$ meters. Express the answer using correct units.`,
        rows: [{ name: "Average rate of change with units", earns: String.raw`$\dfrac{L(10) - L(2)}{10 - 2} = \dfrac{74 - 88}{8} = -1.75$ decibels per meter.` }],
        solution: String.raw`$$\frac{L(10) - L(2)}{10 - 2} = \frac{74 - 88}{8} = -1.75 \text{ decibels per meter}$$ From $2$ to $10$ meters away, the sound level decreases by an average of $1.75$ decibels for each meter.` },
      { id: "p214-f1c", type: "frq", skill: "u2", topic: "2.14", calc: true, set: "p214-s2", part: "(c)",
        prompt: String.raw`According to the model, at what distance from the speaker is the sound level $65$ decibels? Give the answer to the nearest thousandth of a meter.`,
        rows: [{ name: "Distance", earns: String.raw`$94.029 - 20.029\log d = 65$ gives $d \approx 28.141$ meters.` }],
        solution: String.raw`Solve $a + b\log d = 65$: $\log d = \dfrac{65 - a}{b} \approx \dfrac{65 - 94.029}{-20.029} \approx 1.44934$, so $d \approx 10^{1.44934} \approx 28.141$ meters, using the unrounded values of $a$ and $b$.` },
    ],
  }],
};

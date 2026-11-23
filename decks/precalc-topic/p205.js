// AP Precalculus topic quiz, Topic 2.5: Exponential Function Context and Data Modeling.

export const sets = {
  "p205-s1": {
    name: "Views of a video",
    label: "Table",
    intro: String.raw`A video was posted online. The total number of views $V$, in thousands, at the end of day $d$ after it was posted is given in the table.`,
    sources: [{ title: "", blocks: [
      { table: { head: ["Day $d$", "$1$", "$2$", "$3$", "$4$", "$5$", "$6$"], rows: [["Views $V$ (thousands)", "$3.1$", "$4.4$", "$6.0$", "$8.7$", "$12.1$", "$17.2$"]] } },
      { p: "A calculator is allowed on these questions." },
    ] }],
  },
  "p205-s2": {
    name: "A medical tracer",
    label: "Free response",
    intro: String.raw`A hospital receives $250$ milligrams of a radioactive tracer at 8:00 AM. At 2:00 PM the same day, $180$ milligrams remain. The amount remaining is modeled by $A(t) = 250b^{t}$, where $t$ is the number of hours after 8:00 AM and $b$ is a positive constant.`,
    sources: [{ title: "", blocks: [{ p: "A calculator is allowed. Give decimal answers to three decimal places." }] }],
  },
};

export default {
  forms: [{
    id: "p205",
    name: "Topic 2.5 Quiz: Exponential Models in Context",
    group: "Unit 2: Exponential and Logarithmic Functions",
    items: [
      { id: "p205-m01", type: "mcq", skill: "u2", topic: "2.5", calc: false, difficulty: "easy",
        question: String.raw`A painting was worth $\$18{,}000$ in $2010$, and its value increases by $6\%$ every $5$ years. Which function gives its value, in dollars, $t$ years after $2010$?`,
        choices: [String.raw`$V(t) = 18{,}000(1.06)^{\frac{t}{5}}$`, String.raw`$V(t) = 18{,}000(1.06)^{5t}$`, String.raw`$V(t) = 18{,}000(1.012)^{t}$`, String.raw`$V(t) = 18{,}000(0.06)^{\frac{t}{5}}$`],
        why: [
          String.raw`The value is multiplied by $1.06$ once per $5$ years, so after $t$ years it has been multiplied $\dfrac{t}{5}$ times: $V(t) = 18{,}000(1.06)^{\frac{t}{5}}$.`,
          String.raw`$(1.06)^{5t}$ multiplies by $1.06$ five times each year. The $5$-year period divides $t$.`,
          String.raw`$1.012$ splits the $6\%$ evenly over $5$ years. Five years of $1.2\%$ growth give $1.012^{5} \approx 1.0615$, not $1.06$.`,
          String.raw`$0.06$ is the rate alone. The growth factor is $1 + 0.06 = 1.06$.`,
        ], answer: 0 },
      { id: "p205-m02", type: "mcq", skill: "u2", topic: "2.5", calc: true, difficulty: "moderate",
        question: String.raw`The number of members of a hiking club is modeled by $N(t) = 40(1.02)^{t}$, where $t$ is in years. By about what percent does the membership increase every $10$ years?`,
        choices: [String.raw`$21.9\%$`, String.raw`$20.0\%$`, String.raw`$2.0\%$`, String.raw`$121.9\%$`],
        why: [
          String.raw`Over $10$ years the factor is $1.02^{10} \approx 1.219$, an increase of about $21.9\%$.`,
          String.raw`$20\%$ adds $2\%$ ten times. The growth compounds, so the factors multiply: $1.02^{10}$.`,
          String.raw`$2\%$ is the increase each year, not over $10$ years.`,
          String.raw`$1.219$ is the factor over $10$ years. The percent increase is $1.219 - 1 = 0.219$, or $21.9\%$.`,
        ], answer: 0 },
      { id: "p205-m03", type: "mcq", skill: "u2", topic: "2.5", calc: false, difficulty: "easy",
        question: String.raw`The amount of a drug in a patient's blood, in milligrams, is modeled by $M(t) = 40\left(\frac{1}{2}\right)^{\frac{t}{12}}$, where $t$ is the number of hours after a dose. Which statement is true?`,
        choices: [
          "The amount is halved every 12 hours.",
          "The amount is halved every hour.",
          "The amount falls by 12% every hour.",
          "The amount is halved every 24 hours.",
        ],
        why: [
          String.raw`Each time $t$ increases by $12$, the exponent $\dfrac{t}{12}$ increases by $1$ and the amount is multiplied by $\dfrac{1}{2}$. The half-life is $12$ hours.`,
          String.raw`The exponent is $\dfrac{t}{12}$, not $t$, so one hour multiplies the amount by $\left(\frac{1}{2}\right)^{\frac{1}{12}} \approx 0.944$.`,
          String.raw`$12$ is the number of hours in one halving, not a percent. Each hour the amount falls by about $5.6\%$.`,
          String.raw`In $24$ hours the exponent rises by $2$, so the amount is multiplied by $\frac{1}{4}$, not $\frac{1}{2}$.`,
        ], answer: 0 },
      { id: "p205-m04", type: "mcq", skill: "u2", topic: "2.5", calc: true, difficulty: "moderate", set: "p205-s1",
        question: String.raw`An exponential regression $V = ab^{d}$ is fit to the data. To the nearest thousandth, how many thousand views does the regression predict at the end of day $10$?`,
        choices: ["$67.228$", "$26.468$", "$72.474$", "$47.750$"],
        why: [
          String.raw`The regression gives $a \approx 2.197$ and $b \approx 1.408$. Then $V(10) = ab^{10} \approx 67.228$ thousand views. Keep the stored values of $a$ and $b$ to avoid rounding error.`,
          String.raw`$26.468$ comes from a linear regression. The values grow by a nearly constant ratio, about $1.4$, so the model is exponential.`,
          String.raw`$72.474$ comes from a model built on the first two points only, $3.1\left(\frac{4.4}{3.1}\right)^{d - 1}$. A regression uses all six data points.`,
          String.raw`$47.750$ is the regression's prediction for day $9$, one day early.`,
        ], answer: 0 },
      { id: "p205-m05", type: "mcq", skill: "u2", topic: "2.5", calc: true, difficulty: "difficult", set: "p205-s1",
        question: String.raw`Using the exponential regression $V = ab^{d}$, what is the first whole-number day $d$ at the end of which the model predicts more than $100$ thousand total views?`,
        choices: ["$12$", "$11$", "$37$", "$32$"],
        why: [
          String.raw`Solving $ab^{d} = 100$ with the regression values gives $d = \dfrac{\ln(100/a)}{\ln b} \approx 11.161$. The model predicts about $94.652$ thousand for $d = 11$ and $133.262$ thousand for $d = 12$, so the answer is day $12$.`,
          String.raw`$11$ rounds $11.161$ down. At $d = 11$ the model gives about $94.652$ thousand, still below $100$.`,
          String.raw`$37$ comes from the linear regression, which predicts far slower growth than the data show.`,
          String.raw`$32$ solves $ab^{d} = 100{,}000$. The data are in thousands, so $100$ thousand views is $V = 100$.`,
        ], answer: 0 },
      { id: "p205-m06", type: "mcq", skill: "u2", topic: "2.5", calc: false, difficulty: "easy",
        question: String.raw`An account starts with $\$5{,}000$ and earns $3.6\%$ annual interest compounded continuously. Which function gives the balance, in dollars, after $t$ years?`,
        choices: [String.raw`$B(t) = 5{,}000e^{0.036t}$`, String.raw`$B(t) = 5{,}000e^{3.6t}$`, String.raw`$B(t) = 5{,}000(1.036)^{t}$`, String.raw`$B(t) = 5{,}000 + e^{0.036t}$`],
        why: [
          String.raw`Continuous compounding gives $Pe^{rt}$ with $r$ as a decimal: $5{,}000e^{0.036t}$.`,
          String.raw`$3.6$ is the rate as a percent. It must be written as the decimal $0.036$.`,
          String.raw`$(1.036)^{t}$ is compounding once a year, not continuously.`,
          String.raw`The initial amount multiplies the growth factor. It is not added to it.`,
        ], answer: 0 },
      { id: "p205-f1a", type: "frq", skill: "u2", topic: "2.5", calc: true, set: "p205-s2", part: "(a)",
        prompt: String.raw`Find the value of $b$.`,
        rows: [{ name: "Value of b", earns: String.raw`$250b^{6} = 180$, so $b = (0.72)^{\frac{1}{6}} \approx 0.947$.` }],
        solution: String.raw`2:00 PM is $t = 6$, so $250b^{6} = 180$, $b^{6} = 0.72$, and $b = 0.72^{\frac{1}{6}} \approx 0.947$ (stored as $0.946721\ldots$).` },
      { id: "p205-f1b", type: "frq", skill: "u2", topic: "2.5", calc: true, set: "p205-s2", part: "(b)",
        prompt: String.raw`Find the half-life of the tracer, in hours.`,
        rows: [{ name: "Half-life", earns: String.raw`Solves $b^{t} = 0.5$: $t = \dfrac{\ln 0.5}{\ln b} \approx 12.660$ hours.` }],
        solution: String.raw`The half-life is the time when $A(t) = 125$, so $b^{t} = 0.5$ and $t = \dfrac{\ln 0.5}{\ln b} = \dfrac{6\ln 0.5}{\ln 0.72} \approx 12.660$ hours.` },
      { id: "p205-f1c", type: "frq", skill: "u2", topic: "2.5", calc: true, set: "p205-s2", part: "(c)",
        prompt: String.raw`(i) According to the model, how many milligrams of the tracer remain at 11:00 PM the same day? (ii) By what percent does the amount of tracer decrease each hour?`,
        rows: [
          { name: "(i) Amount", earns: String.raw`$A(15) = 250b^{15} \approx 109.969$ milligrams.` },
          { name: "(ii) Percent", earns: String.raw`$1 - b \approx 0.053$, a decrease of about $5.328\%$ each hour.` },
        ],
        solution: String.raw`(i) 11:00 PM is $t = 15$: $A(15) = 250(0.72)^{\frac{15}{6}} \approx 109.969$ milligrams. (ii) Each hour the amount is multiplied by $b \approx 0.94672$, so it decreases by $1 - b \approx 0.05328$, about $5.328\%$.` },
    ],
  }],
};

// AP Precalculus unit test, Unit 2: Exponential and Logarithmic Functions (topics 2.1 to 2.15).
import { graph } from "../../plot.js";

// A semi-log plot: the vertical axis is log10 y, labeled by decades, with light lines at 2 to 9 times each decade.
function semilog(o) {
  const width = 360, height = 260, PAD = 30;
  const [x0, x1] = o.x, [y0, y1] = o.y;
  const sx = (v) => +(PAD + ((v - x0) / (x1 - x0)) * (width - 2 * PAD)).toFixed(2);
  const sy = (v) => +(height - PAD - ((v - y0) / (y1 - y0)) * (height - 2 * PAD)).toFixed(2);
  const svg = graph({ ...o, step: { x: 1, y: 1 }, labelEvery: 1000 });
  const extra = [];
  for (let k = Math.floor(y0); k < y1; k++) for (let m = 2; m <= 9; m++) {
    const v = k + Math.log10(m);
    if (v > y0 && v < y1) extra.push(`<line class="g-grid" x1="${PAD}" y1="${sy(v)}" x2="${width - PAD}" y2="${sy(v)}" stroke-opacity="0.45"/>`);
  }
  for (let k = Math.ceil(y0); k <= y1; k++) extra.push(`<text class="g-tick" x="${sx(Math.max(x0, 0)) - 5}" y="${sy(k) + 4}" text-anchor="end">${o.decade(k)}</text>`);
  for (let i = Math.max(1, Math.ceil(x0)); i <= x1; i++) extra.push(`<text class="g-tick" x="${sx(i)}" y="${height - PAD + 14}" text-anchor="middle">${i}</text>`);
  return svg.replace(/(<line class="g-axis")/, extra.join("") + "$1");
}

export const sets = {
  "pt2-s1": {
    name: "The graphs of f and g",
    label: "Graph",
    intro: String.raw`The graph of $f$ (solid) consists of line segments joining $(-4, 0)$, $(-2, 4)$, $(1, -2)$, and $(4, 1)$. The graph of $g$ (dashed) is the line $g(x) = \dfrac{x}{2} + 1$.`,
    sources: [{ title: "", blocks: [{ svg: graph({
      x: [-5, 5], y: [-3, 5], step: 1, xname: "x", yname: "y",
      segments: [[-4, 0, -2, 4], [-2, 4, 1, -2], [1, -2, 4, 1]],
      fns: [{ f: (x) => x / 2 + 1, dash: true, label: "g", labelAt: 3.6 }],
      dots: [[-4, 0, "closed"], [-2, 4, "closed"], [1, -2, "closed"], [4, 1, "closed"]],
      alt: "The solid graph of f is made of line segments from (-4, 0) up to (-2, 4), down to (1, -2), and up to (4, 1). It crosses the origin on the way down. The dashed line g rises from left to right through (-2, 0), (0, 1), and (4, 3).",
    }) }] }],
  },
  "pt2-s2": {
    name: "A logarithmic graph",
    label: "Graph",
    intro: String.raw`The graph of the function $h$ is shown. The points $\left(\frac{1}{2}, 0\right)$, $(1, 1)$, $(2, 2)$, $(4, 3)$, and $(8, 4)$ are on the graph, and the graph has a vertical asymptote at $x = 0$. The function $h$ is the inverse of an exponential function $f$.`,
    sources: [{ title: "", blocks: [{ svg: graph({
      x: [-1, 9], y: [-3, 5], step: 1, xname: "x", yname: "y",
      fns: [{ f: (x) => 1 + Math.log2(x), from: 0.06, to: 9 }],
      vlines: [{ x: 0, dash: true }],
      dots: [[0.5, 0, "closed"], [1, 1, "closed"], [2, 2, "closed"], [4, 3, "closed"], [8, 4, "closed"]],
      alt: "An increasing curve that falls without bound as x approaches 0 from the right and rises more and more slowly to the right. Marked points: (1/2, 0), (1, 1), (2, 2), (4, 3), and (8, 4).",
    }) }] }],
  },
  "pt2-s3": {
    name: "A logarithmic table",
    label: "Table",
    intro: String.raw`The function $f$ is given by $f(x) = \log_{2}(x - h) + k$, where $h$ and $k$ are constants. Selected values of $f$ are given in the table.`,
    sources: [{ title: "", blocks: [{ table: { head: ["$x$", "$1.5$", "$2$", "$3$", "$5$", "$9$"], rows: [["$f(x)$", "$2$", "$3$", "$4$", "$5$", "$6$"]] } }] }],
  },
  "pt2-s4": {
    name: "Data and an exponential model",
    label: "Table",
    intro: String.raw`The model $E(x) = 2.7(1.53)^{x}$ was fit to the data in the table.`,
    sources: [{ title: "", blocks: [{ table: { head: ["$x$", "$1$", "$2$", "$3$", "$4$", "$5$"], rows: [["$y$", "$4.1$", "$6.3$", "$9.8$", "$14.9$", "$23.0$"]] } }] }],
  },
  "pt2-s5": {
    name: "Data on a semi-log plot",
    label: "Semi-log plot",
    intro: String.raw`Five data points $(x, y)$ are plotted on a semi-log plot: the vertical axis shows $y$ on a logarithmic scale (base $10$). The points lie on a line. The points for $x = 1$ and $x = 5$ are at $y = 8$ and $y = 50$.`,
    sources: [{ title: "", blocks: [{ svg: semilog({
      x: [-0.6, 6], y: [0, 2.2], xname: "x", yname: "y",
      decade: (k) => ["1", "10", "100"][k],
      dots: [1, 2, 3, 4, 5].map((x) => [x, Math.log10(8 * 6.25 ** ((x - 1) / 4)), "closed"]),
      alt: "Semi-log plot with x from 0 to 6 on a regular scale and y on a logarithmic scale with labels 1, 10, and 100 equally spaced. Five points rise along a straight line: at x = 1 the point is at y = 8, at x = 3 it is at y = 20, and at x = 5 it is at y = 50.",
    }) }] }],
  },
  "pt2-s6": {
    name: "Lily pads on a pond",
    label: "Free response",
    intro: String.raw`Lily pads are spreading across the surface of a pond. The area covered by lily pads, in square meters, is modeled by $A(t) = ab^{t}$, where $t$ is the number of days since the first measurement and $a$ and $b$ are positive constants. On day $2$, the lily pads covered $36$ square meters, and on day $6$, they covered $74.6496$ square meters.`,
    sources: [{ title: "", blocks: [{ p: "A calculator is allowed. Give decimal answers to three decimal places." }] }],
  },
  "pt2-s7": {
    name: "Exponential and logarithmic expressions",
    label: "Free response",
    intro: String.raw`Answer each part without a calculator. Give exact answers, and show the work that leads to each answer.`,
    sources: [],
  },
};

const items = [
  // Multiple choice, no calculator
  { id: "pt2-m01", type: "mcq", skill: "u2", topic: "2.1", calc: false, difficulty: "easy",
    question: String.raw`An arithmetic sequence has $a_2 = -4$ and $a_6 = 14$. What is the common difference?`,
    choices: ["$4.5$", "$3.6$", "$2.5$", "$18$"],
    why: [
      String.raw`From $a_2$ to $a_6$ is $4$ steps, so $d = \dfrac{14 - (-4)}{6 - 2} = \dfrac{18}{4} = 4.5$.`,
      String.raw`$3.6$ divides by $5$, counting the terms from $a_2$ to $a_6$ instead of the steps between them.`,
      String.raw`$2.5$ is $\dfrac{14 - 4}{4}$, which drops the negative sign of $a_2$.`,
      String.raw`$18$ is the total change over $4$ steps, not the change per step.`,
    ], answer: 0 },
  { id: "pt2-m02", type: "mcq", skill: "u2", topic: "2.2", calc: false, difficulty: "easy",
    question: String.raw`An exponential function $f$ has $f(0) = 6$ and $f(1) = 4$. What is $f(3)$?`,
    choices: [String.raw`$\frac{16}{9}$`, "$0$", String.raw`$\frac{8}{3}$`, String.raw`$\frac{2}{9}$`],
    why: [
      String.raw`The factor is $\dfrac{4}{6} = \dfrac{2}{3}$, so $f(x) = 6\left(\frac{2}{3}\right)^{x}$ and $f(3) = 6 \cdot \dfrac{8}{27} = \dfrac{16}{9}$.`,
      String.raw`$0$ subtracts $2$ each step, a linear pattern. An exponential function multiplies by the same factor each step.`,
      String.raw`$\dfrac{8}{3}$ is $f(2)$, one step short.`,
      String.raw`$\dfrac{2}{9} = 6\left(\frac{1}{3}\right)^{3}$ uses the fraction lost, $\frac{1}{3}$, as the factor. The fraction kept is $\frac{2}{3}$.`,
    ], answer: 0 },
  { id: "pt2-m03", type: "mcq", skill: "u2", topic: "2.3", calc: false, difficulty: "moderate",
    question: String.raw`The function $f$ is given by $f(x) = -3(0.4)^{x} + 5$. Which of the following are true? I. $f$ is increasing. II. The graph of $f$ is concave down. III. $\displaystyle \lim_{x \to \infty} f(x) = 5$`,
    choices: ["I, II, and III", "III only", "I and III only", "II and III only"],
    why: [
      String.raw`$(0.4)^{x}$ is decreasing and concave up. Multiplying by $-3$ reflects it, so $f$ is increasing and concave down. As $x \to \infty$, $(0.4)^{x} \to 0$, so $f(x) \to 5$. All three are true.`,
      String.raw`I and II are also true. The base $0.4 < 1$ alone suggests decay, but the negative coefficient reflects the graph, so $f$ increases and is concave down.`,
      String.raw`II is also true. The reflection of a concave up graph over a horizontal line is concave down.`,
      String.raw`I is also true. $-3(0.4)^{x}$ rises toward $0$ as $x$ increases, so $f$ increases toward $5$.`,
    ], answer: 0 },
  { id: "pt2-m04", type: "mcq", skill: "u2", topic: "2.4", calc: false, difficulty: "difficult",
    question: String.raw`What value of $x$ satisfies $\sqrt{8^{x}} = \dfrac{1}{4} \cdot 2^{x + 5}$?`,
    choices: ["$6$", "$1.5$", "$14$", "$10$"],
    why: [
      String.raw`$\sqrt{8^{x}} = 2^{\frac{3x}{2}}$ and $\dfrac{1}{4} \cdot 2^{x + 5} = 2^{-2} \cdot 2^{x + 5} = 2^{x + 3}$. So $\dfrac{3x}{2} = x + 3$, $\dfrac{x}{2} = 3$, and $x = 6$.`,
      String.raw`$1.5$ solves $3x = x + 3$, which ignores the square root. $\sqrt{8^{x}} = 8^{\frac{x}{2}} = 2^{\frac{3x}{2}}$.`,
      String.raw`$14$ solves $\dfrac{3x}{2} = x + 7$, which writes $\dfrac{1}{4}$ as $2^{2}$. Since $\dfrac{1}{4} = 2^{-2}$, the exponent is $x + 3$.`,
      String.raw`$10$ solves $\dfrac{3x}{2} = x + 5$, which leaves out the factor $\dfrac{1}{4}$.`,
    ], answer: 0 },
  { id: "pt2-m05", type: "mcq", skill: "u2", topic: "2.7", calc: false, difficulty: "easy", set: "pt2-s1",
    question: String.raw`What is $g(f(-2))$?`,
    choices: ["$3$", "$0$", "$4$", "$1$"],
    why: [
      String.raw`From the graph, $f(-2) = 4$. Then $g(4) = \dfrac{4}{2} + 1 = 3$.`,
      String.raw`$0$ is $f(g(-2)) = f(0)$, the composition in the other order.`,
      String.raw`$4$ is $f(-2)$, the inner value. It still has to be put into $g$.`,
      String.raw`$1$ is $g(g(-2)) = g(0)$, which uses $g$ twice.`,
    ], answer: 0 },
  { id: "pt2-m06", type: "mcq", skill: "u2", topic: "2.8", calc: false, difficulty: "easy",
    question: String.raw`The function $f$ is given by $f(x) = 2x^{3} + 1$. What is $f^{-1}(17)$?`,
    choices: ["$2$", String.raw`$\sqrt[3]{9}$`, String.raw`$\frac{1}{17}$`, "$9{,}827$"],
    why: [
      String.raw`$f^{-1}(17)$ is the input with $f(x) = 17$: $2x^{3} + 1 = 17$, so $x^{3} = 8$ and $x = 2$.`,
      String.raw`$\sqrt[3]{9}$ comes from $2x^{3} = 18$, which adds $1$ to $17$ instead of subtracting it. Then $f\left(\sqrt[3]{9}\right) = 19$, not $17$.`,
      String.raw`$\dfrac{1}{17}$ is the reciprocal of $17$. The notation $f^{-1}$ means the inverse function, not $\dfrac{1}{f}$.`,
      String.raw`$9{,}827$ is $f(17) = 2(17)^{3} + 1$, the function instead of its inverse.`,
    ], answer: 0 },
  { id: "pt2-m07", type: "mcq", skill: "u2", topic: "2.9", calc: false, difficulty: "moderate",
    question: String.raw`What is the value of $\log_{2}\left(\dfrac{\sqrt{2}}{16}\right)$?`,
    choices: [String.raw`$-\frac{7}{2}$`, String.raw`$\frac{7}{2}$`, "$-2$", String.raw`$-\frac{9}{2}$`],
    why: [
      String.raw`$\dfrac{\sqrt{2}}{16} = \dfrac{2^{\frac{1}{2}}}{2^{4}} = 2^{\frac{1}{2} - 4} = 2^{-\frac{7}{2}}$, so the log is $-\dfrac{7}{2}$.`,
      String.raw`$\dfrac{7}{2}$ has the wrong sign. The argument is less than $1$, so its base-$2$ log is negative.`,
      String.raw`$-2$ multiplies $\dfrac{1}{2}$ by $-4$. Dividing powers subtracts the exponents: $\dfrac{1}{2} - 4$.`,
      String.raw`$-\dfrac{9}{2}$ subtracts in the wrong way: $-4 - \dfrac{1}{2}$. The $\sqrt{2}$ is in the numerator, so it adds $\dfrac{1}{2}$.`,
    ], answer: 0 },
  { id: "pt2-m08", type: "mcq", skill: "u2", topic: "2.10", calc: false, difficulty: "easy", set: "pt2-s2",
    question: String.raw`What is $f(3)$?`,
    choices: ["$4$", String.raw`$\log_{2} 3 + 1$`, "$16$", String.raw`$\frac{1}{3}$`],
    why: [
      String.raw`Since $h = f^{-1}$, $f(3)$ is the input of $h$ whose output is $3$. The graph passes through $(4, 3)$, so $f(3) = 4$.`,
      String.raw`$\log_{2} 3 + 1$ is $h(3)$, the value of $h$ at $3$. The graph fits $h(x) = \log_{2} x + 1$, and $f(3)$ is the input that $h$ sends to $3$.`,
      String.raw`$16 = 2^{3 + 1}$ undoes the shift in the wrong direction. Solving $y = \log_{2} x + 1$ for $x$ gives $f(x) = 2^{x - 1}$, so $f(3) = 2^{2} = 4$.`,
      String.raw`$\dfrac{1}{3}$ is the reciprocal of $3$. The inverse undoes the function; it does not take a reciprocal.`,
    ], answer: 0 },
  { id: "pt2-m09", type: "mcq", skill: "u2", topic: "2.11", calc: false, difficulty: "difficult", set: "pt2-s3",
    question: String.raw`What is the domain of $f$?`,
    choices: [String.raw`$x > 1$`, String.raw`$x \ge 1$`, String.raw`$x > 1.5$`, String.raw`$x > -1$`],
    why: [
      String.raw`Each time $x - 1$ doubles ($1, 2, 4, 8$ for $x = 2, 3, 5, 9$), $f$ increases by $1$, so $f(x) = \log_{2}(x - 1) + 3$. Check: $f(1.5) = \log_{2} 0.5 + 3 = 2$. The argument $x - 1$ must be positive, so $x > 1$.`,
      String.raw`At $x = 1$ the argument $x - 1$ is $0$, and $\log_{2} 0$ is undefined. The line $x = 1$ is a vertical asymptote, so the endpoint is not included.`,
      String.raw`$1.5$ is the smallest input in the table, but $f$ is defined for every $x$ with $x - 1 > 0$, including $1 < x < 1.5$.`,
      String.raw`$x > -1$ has the shift in the wrong direction. In $\log_{2}(x - h)$ with $h = 1$, the graph of $\log_{2} x$ moves right $1$, so the domain is $x > 1$.`,
    ], answer: 0 },
  { id: "pt2-m10", type: "mcq", skill: "u2", topic: "2.12", calc: false, difficulty: "easy",
    question: String.raw`For $x > 0$, which expression is equivalent to $\log_{3}\left(x^{2}\right) - \log_{3}(9x)$?`,
    choices: [String.raw`$\log_{3} x - 2$`, String.raw`$\log_{3} x - 9$`, String.raw`$3\log_{3} x - 2$`, String.raw`$\log_{3}\left(x^{2} - 9x\right)$`],
    why: [
      String.raw`$\log_{3}\left(x^{2}\right) = 2\log_{3} x$ and $\log_{3}(9x) = 2 + \log_{3} x$. The difference is $2\log_{3} x - 2 - \log_{3} x = \log_{3} x - 2$.`,
      String.raw`$9$ should be $\log_{3} 9 = 2$. The product property turns the factor $9$ into its log.`,
      String.raw`$3\log_{3} x$ adds $\log_{3} x$ instead of subtracting it. The minus sign applies to the whole $\log_{3}(9x)$.`,
      String.raw`A difference of logs is the log of a quotient, $\log_{3}\left(\dfrac{x^{2}}{9x}\right)$, not the log of a difference.`,
    ], answer: 0 },
  // Multiple choice, calculator
  { id: "pt2-m11", type: "mcq", skill: "u2", topic: "2.5", calc: true, difficulty: "easy",
    question: String.raw`A delivery truck bought for $\$64{,}000$ loses $12\%$ of its value each year. To the nearest dollar, what is its value after $5$ years?`,
    choices: [String.raw`$\$33{,}775$`, String.raw`$\$25{,}600$`, String.raw`$\$112{,}790$`, String.raw`$\$33{,}920$`],
    why: [
      String.raw`Each year the value is multiplied by $1 - 0.12 = 0.88$, so after $5$ years it is $64{,}000(0.88)^{5} \approx \$33{,}775$.`,
      String.raw`$\$25{,}600$ subtracts $12\%$ of the original price each year, a linear model: $64{,}000(1 - 0.6)$.`,
      String.raw`$\$112{,}790$ is $64{,}000(1.12)^{5}$, which treats the loss as growth.`,
      String.raw`$\$33{,}920$ rounds $0.88^{5}$ to $0.53$ before multiplying. Keep the full value until the last step.`,
    ], answer: 0 },
  { id: "pt2-m12", type: "mcq", skill: "u2", topic: "2.6", calc: true, difficulty: "moderate", set: "pt2-s4",
    question: String.raw`What is the residual of the model at $x = 5$, to the nearest thousandth?`,
    choices: ["$0.363$", "$-0.363$", "$22.637$", "$0.374$"],
    why: [
      String.raw`$E(5) = 2.7(1.53)^{5} \approx 22.637$, so the residual is $23.0 - 22.637 \approx 0.363$.`,
      String.raw`$-0.363$ is predicted minus actual. A residual is actual minus predicted.`,
      String.raw`$22.637$ is the model's prediction, not the residual.`,
      String.raw`$0.374$ rounds $1.53^{5}$ to $8.38$ before multiplying by $2.7$. Rounding early changes the answer.`,
    ], answer: 0 },
  { id: "pt2-m13", type: "mcq", skill: "u2", topic: "2.13", calc: true, difficulty: "difficult",
    question: String.raw`For what values of $t \ge 0$ is $450e^{-0.08t} + 40 < 120$? Round to the nearest thousandth.`,
    choices: [String.raw`$t > 21.590$`, String.raw`$t < 21.590$`, String.raw`$t > 16.522$`, String.raw`$t > 9.377$`],
    why: [
      String.raw`Subtract $40$: $450e^{-0.08t} < 80$, so $e^{-0.08t} < \dfrac{8}{45}$ and $-0.08t < \ln\dfrac{8}{45}$. Dividing by $-0.08$ reverses the inequality: $t > \dfrac{\ln(8/45)}{-0.08} \approx 21.590$.`,
      String.raw`The left side decreases as $t$ increases, so it drops below $120$ after the crossing, not before. Dividing by $-0.08$ reverses the inequality.`,
      String.raw`$16.522$ solves $450e^{-0.08t} = 120$, which leaves out the $+40$. Subtract $40$ before dividing by $450$.`,
      String.raw`$9.377$ uses the common log in place of the natural log. Undoing $e$ takes $\ln$.`,
    ], answer: 0 },
  { id: "pt2-m14", type: "mcq", skill: "u2", topic: "2.14", calc: true, difficulty: "easy",
    question: String.raw`The height of a plant, in centimeters, $t$ weeks after it is planted is modeled by $H(t) = 4 + 6\ln(t + 1)$. To the nearest thousandth of a week, when does the model predict a height of $20$ centimeters?`,
    choices: ["$13.392$", "$14.392$", "$27.032$", "$463.159$"],
    why: [
      String.raw`$4 + 6\ln(t + 1) = 20$ gives $\ln(t + 1) = \dfrac{8}{3}$, so $t = e^{\frac{8}{3}} - 1 \approx 13.392$ weeks.`,
      String.raw`$14.392$ is $e^{\frac{8}{3}}$, the value of $t + 1$. Subtract $1$ to get $t$.`,
      String.raw`$27.032$ is $e^{\frac{20}{6}} - 1$, which divides by $6$ before subtracting $4$.`,
      String.raw`$463.159$ is $10^{\frac{8}{3}} - 1$. The model uses $\ln$, so undo it with base $e$.`,
    ], answer: 0 },
  { id: "pt2-m15", type: "mcq", skill: "u2", topic: "2.15", calc: true, difficulty: "moderate", set: "pt2-s5",
    question: String.raw`Which exponential function models the data?`,
    choices: [String.raw`$y = 5.060(1.581)^{x}$`, String.raw`$y = 8(1.581)^{x}$`, String.raw`$y = 5.120(1.563)^{x}$`, String.raw`$y = 0.704(1.581)^{x}$`],
    why: [
      String.raw`From $x = 1$ to $x = 5$, $y$ is multiplied by $\dfrac{50}{8} = 6.25$, so $b^{4} = 6.25$ and $b = 6.25^{\frac{1}{4}} \approx 1.581$. Then $a = \dfrac{8}{b} \approx 5.060$.`,
      String.raw`$8$ is $y$ at $x = 1$, not at $x = 0$. The value of $a$ is $\dfrac{8}{b}$.`,
      String.raw`$1.5625$ divides $6.25$ by $4$. Four steps multiply to $b^{4}$, so take the fourth root.`,
      String.raw`$0.704$ is $\log a$, the vertical intercept of the line on the semi-log plot. The coefficient is $a = 10^{0.704} \approx 5.060$.`,
    ], answer: 0 },
  // Free response 1: Modeling a Non-Periodic Context, calculator
  { id: "pt2-f1a", type: "frq", skill: "u2", topic: "2.5", calc: true, set: "pt2-s6", part: "(a)",
    prompt: String.raw`(i) Use the given data to write two equations that can be used to find the values of the constants $a$ and $b$ in the expression for $A(t)$. (ii) Find the values of $a$ and $b$.`,
    rows: [
      { name: "(i) Equations", earns: String.raw`$ab^{2} = 36$ and $ab^{6} = 74.6496$.` },
      { name: "(ii) Constants", earns: String.raw`$b = 1.2$ and $a = 25$, with work such as $b^{4} = \dfrac{74.6496}{36} = 2.0736$.` },
    ],
    solution: String.raw`(i) $A(2) = ab^{2} = 36$ and $A(6) = ab^{6} = 74.6496$. (ii) Dividing, $b^{4} = \dfrac{74.6496}{36} = 2.0736$, so $b = 2.0736^{\frac{1}{4}} = 1.2$. Then $a = \dfrac{36}{1.2^{2}} = \dfrac{36}{1.44} = 25$.` },
  { id: "pt2-f1b", type: "frq", skill: "u2", topic: "2.5", calc: true, set: "pt2-s6", part: "(b)",
    prompt: String.raw`(i) Use the given data to find the average rate of change of the area covered by lily pads, in square meters per day, from $t = 2$ to $t = 6$. Show the computations that lead to your answer. (ii) Interpret the meaning of your answer from (i) in the context of the problem.`,
    rows: [
      { name: "(i) Average rate of change", earns: String.raw`$\dfrac{74.6496 - 36}{6 - 2} = 9.662$ square meters per day, with the computation shown.` },
      { name: "(ii) Interpretation", earns: String.raw`From day $2$ to day $6$, the area covered by lily pads increased by an average of $9.662$ square meters per day. The answer names the interval and the units.` },
    ],
    solution: String.raw`(i) $\dfrac{A(6) - A(2)}{6 - 2} = \dfrac{74.6496 - 36}{4} = \dfrac{38.6496}{4} = 9.6624 \approx 9.662$ square meters per day. (ii) On the interval from $t = 2$ to $t = 6$ days, the area covered by lily pads increased by about $9.662$ square meters per day on average.` },
  { id: "pt2-f1c", type: "frq", skill: "u2", topic: "2.13", calc: true, set: "pt2-s6", part: "(c)",
    prompt: String.raw`(i) Is the average rate of change of $A$ from $t = 6$ to $t = 10$ greater than, less than, or equal to the answer from (b)(i)? Give a reason for your answer using characteristics of the function $A$. (ii) The surface of the pond has an area of $200$ square meters. According to the model, at what time $t$ do the lily pads cover the whole surface? Explain why the model cannot be used for times after that.`,
    rows: [
      { name: "(i) Comparison with reason", earns: String.raw`Greater, because $A$ is an increasing exponential function with $a > 0$ and $b > 1$, so its graph is concave up and its average rates of change increase over consecutive equal-length intervals.` },
      { name: "(ii) Time and domain", earns: String.raw`$t = \dfrac{\ln 8}{\ln 1.2} \approx 11.405$ days, and the model does not apply after that because the lily pads cannot cover more than the $200$ square meters of the pond.` },
    ],
    solution: String.raw`(i) $A(t) = 25(1.2)^{t}$ with $a = 25 > 0$ and $b = 1.2 > 1$, so $A$ is increasing and concave up. Over equal-length intervals, its average rate of change increases, so the rate from $t = 6$ to $t = 10$ is greater. (Check: $\dfrac{A(10) - A(6)}{4} \approx 20.036$.) (ii) $25(1.2)^{t} = 200$ gives $1.2^{t} = 8$ and $t = \dfrac{\ln 8}{\ln 1.2} \approx 11.405$ days. After that the model predicts more than $200$ square meters, which is more than the area of the pond, so the model applies only for $t \le 11.405$.` },
  // Free response 2: Symbolic Manipulations, no calculator
  { id: "pt2-f2a", type: "frq", skill: "u2", topic: "2.4", calc: false, set: "pt2-s7", part: "(a)",
    prompt: String.raw`(i) Rewrite $\dfrac{8^{x} \cdot \sqrt{2}}{4^{x - 1}}$ as a single power of $2$. (ii) For $x > 0$, rewrite $\ln\left(\dfrac{e^{2}}{x}\right) + 3\ln x - \ln\left(ex^{2}\right)$ as a constant.`,
    rows: [
      { name: "(i) Power of 2", earns: String.raw`$2^{x + \frac{5}{2}}$, with supporting work.` },
      { name: "(ii) Constant", earns: String.raw`$1$, with supporting work.` },
    ],
    solution: String.raw`(i) $\dfrac{2^{3x} \cdot 2^{\frac{1}{2}}}{2^{2x - 2}} = 2^{3x + \frac{1}{2} - 2x + 2} = 2^{x + \frac{5}{2}}$. (ii) $\ln\left(\dfrac{e^{2}}{x}\right) = 2 - \ln x$ and $\ln\left(ex^{2}\right) = 1 + 2\ln x$, so the expression is $(2 - \ln x) + 3\ln x - (1 + 2\ln x) = 1$.` },
  { id: "pt2-f2b", type: "frq", skill: "u2", topic: "2.13", calc: false, set: "pt2-s7", part: "(b)",
    prompt: String.raw`(i) Solve $3^{x + 1} = 2^{2x}$ for $x$. Write the answer in terms of natural logarithms. (ii) Solve $2\log_{5}(x - 1) = \log_{5}(x + 5)$ for all values of $x$ in the domain of the equation.`,
    rows: [
      { name: "(i) Exponential equation", earns: String.raw`$x = \dfrac{\ln 3}{\ln 4 - \ln 3}$ (or an equivalent form such as $\dfrac{\ln 3}{\ln(4/3)}$), with supporting work.` },
      { name: "(ii) Log equation", earns: String.raw`$x = 4$ only, with supporting work and $x = -1$ rejected because $x - 1 > 0$ is required.` },
    ],
    solution: String.raw`(i) Take $\ln$ of both sides: $(x + 1)\ln 3 = 2x\ln 2 = x\ln 4$. Then $\ln 3 = x(\ln 4 - \ln 3)$, so $x = \dfrac{\ln 3}{\ln 4 - \ln 3}$. (ii) The equation needs $x - 1 > 0$ and $x + 5 > 0$, so $x > 1$. Then $\log_{5}(x - 1)^{2} = \log_{5}(x + 5)$ gives $(x - 1)^{2} = x + 5$, so $x^{2} - 3x - 4 = 0$ and $(x - 4)(x + 1) = 0$. $x = -1$ is not in the domain, so the only solution is $x = 4$.` },
  { id: "pt2-f2c", type: "frq", skill: "u2", topic: "2.13", calc: false, set: "pt2-s7", part: "(c)",
    prompt: String.raw`The function $f$ is given by $f(x) = \log_{3}(2x - 4) + 1$. (i) Find an expression for $f^{-1}(x)$. (ii) Solve $f(x) \le 3$. Give the answer as an interval.`,
    rows: [
      { name: "(i) Inverse", earns: String.raw`$f^{-1}(x) = \dfrac{3^{x - 1} + 4}{2}$, or an equivalent form, with supporting work.` },
      { name: "(ii) Inequality", earns: String.raw`$2 < x \le \dfrac{13}{2}$, which includes the domain condition $x > 2$.` },
    ],
    solution: String.raw`(i) Write $y = \log_{3}(2x - 4) + 1$, swap $x$ and $y$: $x - 1 = \log_{3}(2y - 4)$, so $2y - 4 = 3^{x - 1}$ and $f^{-1}(x) = \dfrac{3^{x - 1} + 4}{2}$. (ii) $\log_{3}(2x - 4) \le 2$ gives $2x - 4 \le 9$, so $x \le \dfrac{13}{2}$. The log needs $2x - 4 > 0$, so $x > 2$. The solution is $\left(2, \dfrac{13}{2}\right]$.` },
];

export default {
  forms: [{
    id: "pt2",
    name: "Unit 2 Test",
    group: "Unit 2: Exponential and Logarithmic Functions",
    items,
  }],
};

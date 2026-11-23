// AP Precalculus review bank, Unit 2 (second half): topics 2.8 to 2.15, inverse, logarithmic, and semi-log work.
import { graph } from "../../plot.js";

// A semi-log grid on top of graph(): the vertical axis is in log units (base 10), with decade labels and minor lines at
// 2 to 9 times each power of ten. graph() draws the curve, dots, and frame; this adds the log ticks and their labels.
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

// f(x) = x^3/4 + 1 on [-2, 2], with y = x dashed. Items p2br-m05 to p2br-m07.
const g1 = (x) => x ** 3 / 4 + 1;
// h(x) = 3 - 2^x. Items p2br-m20 and p2br-m21.
const g3 = (x) => 3 - 2 ** x;

// A logarithmic number line from 1 to 10,000 (positions are base-10 logs). P = 5, Q = 8000, M halfway between them.
const nlX = (v) => +(30 + (Math.log10(v) / 4) * 460).toFixed(2);
const numberLine = `<svg class="graph" viewBox="0 0 520 110" width="520" height="110" role="img" aria-label="A number line with a logarithmic scale. Labeled tick marks for 1, 10, 100, 1,000, and 10,000 are equally spaced. Point P is a little more than two thirds of the way from 1 to 10. Point Q is a little less than one tenth of the way from 10,000 back toward 1,000. Point M is exactly halfway between P and Q." xmlns="http://www.w3.org/2000/svg">
<line class="g-axis" x1="20" y1="60" x2="500" y2="60"/>
${[1, 10, 100, 1000, 10000].map((v, k) => `<line class="g-axis" x1="${nlX(v)}" y1="52" x2="${nlX(v)}" y2="68"/><text class="g-tick" x="${nlX(v)}" y="88" text-anchor="middle">${["1", "10", "100", "1,000", "10,000"][k]}</text>`).join("")}
${[5, 8000, 200].map((v, k) => `<circle class="g-dot" cx="${nlX(v)}" cy="60" r="4"/><text class="g-label" x="${nlX(v)}" y="42" text-anchor="middle">${["P", "Q", "M"][k]}</text>`).join("")}
</svg>`;

export const sets = {
  "p2br-s1": {
    name: "A table of a decreasing function",
    label: "Table",
    intro: String.raw`The table below gives every value of the function $f$, which is defined only for the six inputs shown.`,
    sources: [{ title: "", blocks: [{ table: { head: ["$x$", "$-2$", "$-1$", "$0$", "$1$", "$2$", "$3$"], rows: [["$f(x)$", "$9$", "$5$", "$3$", "$2$", "$0$", "$-4$"]] } }] }],
  },
  "p2br-s2": {
    name: "A cubic on a closed interval",
    label: "Graph",
    intro: String.raw`The graph of $f(x) = \dfrac{x^{3}}{4} + 1$ on its domain, $-2 \le x \le 2$, is shown below. The points $(-2, -1)$, $(0, 1)$, and $(2, 3)$ are on the graph. The dashed line is $y = x$.`,
    sources: [{ title: "", blocks: [{ svg: graph({
      x: [-3, 4], y: [-3, 4], step: 1, xname: "x", yname: "y",
      fns: [{ f: g1, from: -2, to: 2, label: "f", labelAt: 1.3 }, { f: (x) => x, dash: true }],
      dots: [[-2, -1, "closed"], [0, 1, "closed"], [2, 3, "closed"]],
      alt: "Graph of f, an increasing curve from the endpoint (-2, -1) through (0, 1) to the endpoint (2, 3). It is steep near both ends and flat near (0, 1). The dashed line y = x lies below the curve for every x from -2 to 2.",
    }) }] }],
  },
  "p2br-s3": {
    name: "A logarithmic number line",
    label: "Diagram",
    intro: String.raw`On the number line below, equal distances stand for equal ratios: the tick marks for $1$, $10$, $100$, $1{,}000$, and $10{,}000$ are equally spaced. Point $P$ stands for $5$ and point $Q$ stands for $8{,}000$. Point $M$ is halfway between $P$ and $Q$ on the line.`,
    sources: [{ title: "", blocks: [{ svg: numberLine }] }],
  },
  "p2br-s4": {
    name: "A logarithmic graph",
    label: "Graph",
    intro: String.raw`The graph of the function $f$ is shown below. The points $\left(\frac{1}{4}, -1\right)$, $(1, 0)$, $(4, 1)$, and $(16, 2)$ are on the graph, and the graph has a vertical asymptote at $x = 0$.`,
    sources: [{ title: "", blocks: [{ svg: graph({
      x: [-2, 18], y: [-3, 3], step: { x: 2, y: 1 }, xname: "x", yname: "y",
      fns: [{ f: (x) => Math.log(x) / Math.log(4), from: 0.004, to: 17.5, label: "f", labelAt: 12 }],
      dots: [[0.25, -1, "closed"], [1, 0, "closed"], [4, 1, "closed"], [16, 2, "closed"]],
      alt: "Graph of f, an increasing curve that rises steeply near the y-axis and then flattens. It passes through (1/4, -1), (1, 0), (4, 1), and (16, 2), and it falls without bound as x approaches 0 from the right.",
    }) }] }],
  },
  "p2br-s5": {
    name: "A table of an exponential function",
    label: "Table",
    intro: String.raw`The exponential function $f$ is defined for all real numbers. Selected values of $f$ are given in the table below. The function $g$ is the inverse of $f$.`,
    sources: [{ title: "", blocks: [{ table: { head: ["$x$", "$-1$", "$0$", "$1$", "$2$", "$3$"], rows: [["$f(x)$", "$2.5$", "$5$", "$10$", "$20$", "$40$"]] } }] }],
  },
  "p2br-s6": {
    name: "A reflected and shifted exponential",
    label: "Graph",
    intro: String.raw`The graph of $h(x) = 3 - 2^{x}$ is shown below with its horizontal asymptote, $y = 3$ (dashed). The points $(0, 2)$, $(1, 1)$, and $(2, -1)$ are on the graph.`,
    sources: [{ title: "", blocks: [{ svg: graph({
      x: [-4, 4], y: [-3, 4], step: 1, xname: "x", yname: "y",
      fns: [{ f: g3, label: "h", labelAt: 2.35 }],
      hlines: [{ y: 3 }],
      dots: [[0, 2, "closed"], [1, 1, "closed"], [2, -1, "closed"]],
      alt: "Graph of h, a decreasing curve that stays just below the dashed line y = 3 on the far left, passes through (0, 2), (1, 1), and (2, -1), and falls steeply to the right.",
    }) }] }],
  },
  "p2br-s7": {
    name: "A table with a logarithmic pattern",
    label: "Table",
    intro: String.raw`Selected values of the function $f$ are given in the table below.`,
    sources: [{ title: "", blocks: [{ table: { head: ["$x$", "$-1$", "$1$", "$5$", "$13$", "$29$"], rows: [["$f(x)$", "$1$", "$2$", "$3$", "$4$", "$5$"]] } }] }],
  },
  "p2br-s8": {
    name: "Two logarithmic graphs",
    label: "Graph",
    intro: String.raw`The graphs of $f(x) = \log_{3} x$ and of a function $g$ are shown below. The graph of $f$ passes through $\left(\frac{1}{3}, -1\right)$, $(1, 0)$, $(3, 1)$, and $(9, 2)$. The graph of $g$ passes through $\left(\frac{1}{9}, 0\right)$, $\left(\frac{1}{3}, 1\right)$, $(1, 2)$, and $(3, 3)$.`,
    sources: [{ title: "", blocks: [{ svg: graph({
      x: [-1, 10], y: [-2, 4], step: 1, xname: "x", yname: "y",
      fns: [{ f: (x) => Math.log(x) / Math.log(3), from: 0.01, to: 10, label: "f", labelAt: 7 }, { f: (x) => Math.log(9 * x) / Math.log(3), from: 0.002, to: 10, label: "g", labelAt: 6 }],
      dots: [[1 / 3, -1, "closed"], [1, 0, "closed"], [3, 1, "closed"], [9, 2, "closed"], [1 / 9, 0, "closed"], [1 / 3, 1, "closed"], [1, 2, "closed"], [3, 3, "closed"]],
      alt: "Two increasing logarithmic curves, each with the y-axis as a vertical asymptote. The lower curve, f, passes through (1/3, -1), (1, 0), (3, 1), and (9, 2). The upper curve, g, has the same shape and sits 2 units higher at every x; it passes through (1/9, 0), (1/3, 1), (1, 2), and (3, 3).",
    }) }] }],
  },
  "p2br-s9": {
    name: "Typing speed",
    label: "Table and graph",
    intro: String.raw`A student practices typing every day. The student's typing speed $W$, in words per minute, measured on day $d$ of practice, is given in the table and plotted below.`,
    sources: [{ title: "", blocks: [
      { table: { head: [String.raw`$d$ (days)`, "$1$", "$2$", "$4$", "$6$", "$8$", "$10$", "$12$"], rows: [[String.raw`$W$ (words per minute)`, "$21$", "$30$", "$42$", "$46$", "$52$", "$54$", "$57$"]] } },
      { svg: graph({
        x: [-1, 14], y: [-5, 65], step: { x: 2, y: 10 }, xname: "d", yname: "W",
        dots: [[1, 21], [2, 30], [4, 42], [6, 46], [8, 52], [10, 54], [12, 57]],
        alt: "Scatterplot of typing speed W against day d: (1, 21), (2, 30), (4, 42), (6, 46), (8, 52), (10, 54), (12, 57). The points rise quickly at first and then more and more slowly.",
      }) },
    ] }],
  },
  "p2br-s10": {
    name: "Data on a semi-log plot",
    label: "Semi-log plot",
    intro: String.raw`Five data points $(x, y)$ are plotted below on a semi-log plot: the vertical axis shows $y$ on a logarithmic scale (base $10$), so equal distances on that axis stand for equal ratios. The points for $x = 0$ and $x = 4$ are at $y = 10$ and $y = 1{,}000$.`,
    sources: [{ title: "", blocks: [{ svg: semilog({
      x: [-1.3, 5], y: [0, 3.4], xname: "x", yname: "y",
      decade: (k) => ["1", "10", "100", "1,000"][k],
      dots: [0, 1, 2, 3, 4].map((x) => [x, 1 + 0.5 * x, "closed"]),
      alt: "Semi-log plot with x from 0 to 4 on a regular scale and y on a logarithmic scale with labels 1, 10, 100, and 1,000 equally spaced. Five points lie on a straight rising line: at x = 0 the point is at y = 10, at x = 2 it is at y = 100, and at x = 4 it is at y = 1,000. The points at x = 1 and x = 3 lie halfway between, on the same line.",
    }) }] }],
  },
  "p2br-s11": {
    name: "A plot of ln y",
    label: "Graph",
    intro: String.raw`For a set of data $(x, y)$ with every $y > 0$, the points $(x, \ln y)$ are plotted below. They lie on a line that passes through $(0, 2)$ and $(5, -1)$.`,
    sources: [{ title: "", blocks: [{ svg: graph({
      x: [-1, 6], y: [-2, 3], step: { x: 1, y: 0.5 }, labelEvery: 2, xname: "x", yname: "ln y",
      dots: [0, 1, 2, 3, 4, 5].map((x) => [x, 2 - 0.6 * x, "closed"]),
      alt: "Plot of ln y against x. Six points lie on a falling straight line: (0, 2), (1, 1.4), (2, 0.8), (3, 0.2), (4, -0.4), and (5, -1).",
    }) }] }],
  },
  "p2br-s12": {
    name: "App downloads",
    label: "Free response",
    intro: String.raw`A company launched a new app. The total number of downloads of the app, in thousands, $t$ months after the launch is modeled by $D(t) = a + b\ln t$ for $1 \le t \le 36$, where $a$ and $b$ are constants. According to the model, there were $20$ thousand total downloads at $t = 2$ months and $44$ thousand total downloads at $t = 8$ months.`,
    sources: [],
  },
  "p2br-s13": {
    name: "Logarithmic and exponential expressions",
    label: "Free response",
    intro: String.raw`Answer each part without a calculator. Give exact answers, and show the work that leads to each answer.`,
    sources: [],
  },
  "p2br-s14": {
    name: "A table and a logarithmic function",
    label: "Free response",
    intro: String.raw`The function $g$ is increasing and defined for all real numbers. Selected values of $g$ are given in the table below. The function $f$ is given by $f(x) = 2\log_{3} x - 1$ for $x > 0$.`,
    sources: [{ title: "", blocks: [{ table: { head: ["$x$", "$0$", "$1$", "$2$", "$3$", "$4$"], rows: [["$g(x)$", "$3$", "$6$", "$12$", "$24$", "$48$"]] } }] }],
  },
};

export default [
  // 2.8 Inverse functions
  { id: "p2br-m01", type: "mcq", skill: "u2", topic: "2.8", calc: false, difficulty: "easy", set: "p2br-s1",
    question: String.raw`Which statement explains why $f$ has an inverse function?`,
    choices: [
      String.raw`Each output of $f$ comes from exactly one input.`,
      String.raw`Each input of $f$ in the table has exactly one output.`,
      String.raw`The outputs of $f$ include positive and negative values.`,
      String.raw`The inputs of $f$ in the table are equally spaced integers.`,
    ],
    why: [
      String.raw`A function has an inverse when it is one-to-one. The six outputs $9, 5, 3, 2, 0, -4$ are all different, so each output can be traced back to a single input.`,
      String.raw`Every function gives one output for each input. That makes $f$ a function, not an invertible one: a function can repeat an output and still do this.`,
      String.raw`The signs of the outputs do not matter. A function whose outputs are $1, -1, 1$ has both signs and is not one-to-one.`,
      String.raw`The spacing of the inputs does not matter. Equally spaced inputs with outputs $4, 1, 4$ give a function with no inverse.`,
    ], answer: 0 },
  { id: "p2br-m02", type: "mcq", skill: "u2", topic: "2.8", calc: false, difficulty: "moderate", set: "p2br-s1",
    question: String.raw`The function $g$ is defined by $g(x) = f(x) + 3$ for the six inputs in the table. What is the value of $g^{-1}(5)$?`,
    choices: ["$1$", "$2$", "$-4$", "$-1$"],
    why: [
      String.raw`$g^{-1}(5)$ is the input where $g(x) = 5$, so $f(x) + 3 = 5$ and $f(x) = 2$. The table gives $f(1) = 2$, so $g^{-1}(5) = 1$.`,
      String.raw`$2$ is $f^{-1}(5) + 3 = -1 + 3$. The shift of $3$ is added to the outputs of $f$, so it has to be undone on the input of $f^{-1}$: $g^{-1}(5) = f^{-1}(5 - 3)$.`,
      String.raw`$-4$ is $f^{-1}(5) - 3$. Subtracting $3$ is right, but it belongs inside: $f^{-1}(5 - 3) = f^{-1}(2)$.`,
      String.raw`$-1$ is $f^{-1}(5)$, which ignores the $+3$ in $g$. Check: $g(-1) = 5 + 3 = 8$, not $5$.`,
    ], answer: 0 },
  { id: "p2br-m03", type: "mcq", skill: "u2", topic: "2.8", calc: false, difficulty: "easy",
    question: String.raw`If $f(x) = \dfrac{3x - 4}{5}$, which of the following is $f^{-1}(x)$?`,
    choices: [String.raw`$\dfrac{5x + 4}{3}$`, String.raw`$\dfrac{5}{3x - 4}$`, String.raw`$\dfrac{5x - 4}{3}$`, String.raw`$\dfrac{5x}{3} + 4$`],
    why: [
      String.raw`Write $x = \dfrac{3y - 4}{5}$ and solve for $y$: $5x = 3y - 4$, so $3y = 5x + 4$ and $y = \dfrac{5x + 4}{3}$.`,
      String.raw`$\dfrac{5}{3x - 4}$ is the reciprocal $\dfrac{1}{f(x)}$. The notation $f^{-1}$ means the inverse function, not the reciprocal.`,
      String.raw`$\dfrac{5x - 4}{3}$ keeps the $-4$. To undo subtracting $4$, add $4$: $3y = 5x + 4$.`,
      String.raw`$\dfrac{5x}{3} + 4$ undoes the steps in the wrong order. $f$ subtracts $4$ before dividing by $5$, so the inverse multiplies by $5$, then adds $4$, then divides by $3$.`,
    ], answer: 0 },
  { id: "p2br-m04", type: "mcq", skill: "u2", topic: "2.8", calc: false, difficulty: "difficult",
    question: String.raw`The function $f$ is given by $f(x) = \dfrac{2x + 1}{x - 3}$ for $x \ne 3$. Which of the following gives $f^{-1}(x)$ and the domain of $f^{-1}$?`,
    choices: [
      String.raw`$f^{-1}(x) = \dfrac{3x + 1}{x - 2}$ for $x \ne 2$`,
      String.raw`$f^{-1}(x) = \dfrac{3x + 1}{x - 2}$ for $x \ne 3$`,
      String.raw`$f^{-1}(x) = \dfrac{1 - 3x}{x - 2}$ for $x \ne 2$`,
      String.raw`$f^{-1}(x) = \dfrac{1 - 3x}{x - 2}$ for $x \ne 3$`,
    ],
    why: [
      String.raw`Solve $x = \dfrac{2y + 1}{y - 3}$ for $y$: $xy - 3x = 2y + 1$, so $xy - 2y = 3x + 1$ and $y = \dfrac{3x + 1}{x - 2}$. The domain of $f^{-1}$ is the range of $f$. Since $f$ has a horizontal asymptote at $y = 2$ and never equals $2$, the domain of $f^{-1}$ is $x \ne 2$.`,
      String.raw`The expression is right, but $x \ne 3$ is the domain of $f$. The domain of $f^{-1}$ is the range of $f$, which leaves out $2$, the value of $f$'s horizontal asymptote.`,
      String.raw`$\dfrac{1 - 3x}{x - 2}$ comes from moving $-3x$ to the other side without changing its sign: $y(x - 2) = 1 - 3x$. Correctly, $xy - 3x = 2y + 1$ gives $y(x - 2) = 3x + 1$.`,
      String.raw`This has the sign error in moving $-3x$ and also keeps the domain of $f$ instead of swapping domain and range.`,
    ], answer: 0 },
  { id: "p2br-m05", type: "mcq", skill: "u2", topic: "2.8", calc: false, difficulty: "easy", set: "p2br-s2",
    question: String.raw`Which of the following points is on the graph of $f^{-1}$?`,
    choices: ["$(3, 2)$", "$(2, 3)$", "$(2, -3)$", "$(-2, 3)$"],
    why: [
      String.raw`The point $(2, 3)$ is on the graph of $f$, so $f(2) = 3$ and $f^{-1}(3) = 2$. Swapping the coordinates gives $(3, 2)$ on the graph of $f^{-1}$.`,
      String.raw`$(2, 3)$ is on the graph of $f$ itself. The inverse swaps the coordinates.`,
      String.raw`$(2, -3)$ is the reflection of $(2, 3)$ over the $x$-axis. The graph of $f^{-1}$ is the reflection over the line $y = x$.`,
      String.raw`$(-2, 3)$ is the reflection of $(2, 3)$ over the $y$-axis, not over the line $y = x$.`,
    ], answer: 0 },
  { id: "p2br-m06", type: "mcq", skill: "u2", topic: "2.8", calc: false, difficulty: "moderate", set: "p2br-s2",
    question: String.raw`What are the domain and range of $f^{-1}$?`,
    choices: [
      String.raw`Domain $[-1, 3]$; range $[-2, 2]$`,
      String.raw`Domain $[-2, 2]$; range $[-1, 3]$`,
      String.raw`Domain $[-3, 1]$; range $[-2, 2]$`,
      String.raw`Domain $[-1, 3]$; range $[-1, 3]$`,
    ],
    why: [
      String.raw`$f$ is increasing on $[-2, 2]$, from $f(-2) = -1$ to $f(2) = 3$, so its range is $[-1, 3]$. The inverse swaps them: the domain of $f^{-1}$ is $[-1, 3]$ and its range is $[-2, 2]$.`,
      String.raw`These are the domain and range of $f$, not swapped.`,
      String.raw`$[-3, 1]$ is the range of $f$ with its signs changed, as if the graph were reflected over the $x$-axis. The inverse keeps the outputs $-1$ to $3$ and uses them as inputs.`,
      String.raw`The domain is right, but the range of $f^{-1}$ is the domain of $f$, $[-2, 2]$, not the range of $f$ again.`,
    ], answer: 0 },
  { id: "p2br-m07", type: "mcq", skill: "u2", topic: "2.8", calc: false, difficulty: "difficult", set: "p2br-s2",
    question: String.raw`Which of the following statements are true?

I. $f^{-1}(1) = 0$
II. The domain of $f^{-1}$ is $-2 \le x \le 2$.
III. $f^{-1}(x) < f(x)$ for every $x$ with $-1 \le x \le 2$.`,
    choices: ["I and III only", "I only", "I and II only", "I, II, and III"],
    why: [
      String.raw`I is true because $f(0) = 1$. II is false: the domain of $f^{-1}$ is the range of $f$, $[-1, 3]$. III is true: the graph of $f$ lies above $y = x$, so $f(x) > x$ on its domain. Reflecting over $y = x$ puts the graph of $f^{-1}$ below $y = x$, so on $[-1, 2]$, where both are defined, $f^{-1}(x) < x < f(x)$.`,
      String.raw`III is also true. Because $f(x) > x$, the reflection gives $f^{-1}(x) < x$, so $f^{-1}(x)$ is below $f(x)$ wherever both are defined.`,
      String.raw`II is false. $[-2, 2]$ is the domain of $f$; the domain of $f^{-1}$ is the range of $f$, $[-1, 3]$. III is true.`,
      String.raw`II is false: the domain of $f^{-1}$ is $[-1, 3]$, the range of $f$, not the domain of $f$.`,
    ], answer: 0 },
  { id: "p2br-m08", type: "mcq", skill: "u2", topic: "2.8", calc: true, difficulty: "moderate",
    question: String.raw`The function $f(x) = x^{3} + 2x - 1$ is increasing for all real numbers, so it has an inverse. What is the value of $f^{-1}(4)$?`,
    choices: ["$1.328$", "$71$", "$0.014$", "$1.710$"],
    why: [
      String.raw`$f^{-1}(4)$ is the input with $f(x) = 4$. Solve $x^{3} + 2x - 1 = 4$, or $x^{3} + 2x - 5 = 0$, with a graphing calculator: $x \approx 1.328$.`,
      String.raw`$71$ is $f(4) = 64 + 8 - 1$, the output at $x = 4$. The inverse asks for the input that gives the output $4$.`,
      String.raw`$0.014$ is $\dfrac{1}{f(4)} = \dfrac{1}{71}$, the reciprocal of $f(4)$, not the inverse function's value.`,
      String.raw`$1.710$ is $\sqrt[3]{5}$, which solves $x^{3} - 1 = 4$. It leaves out the $2x$ term: $f(1.710) \approx 7.42$, not $4$.`,
    ], answer: 0 },

  // 2.9 Logarithmic expressions
  { id: "p2br-m09", type: "mcq", skill: "u2", topic: "2.9", calc: false, difficulty: "easy",
    question: String.raw`Which equation is equivalent to $6^{x} = 30$?`,
    choices: [String.raw`$x = \log_{6} 30$`, String.raw`$x = \log_{30} 6$`, String.raw`$30 = \log_{6} x$`, String.raw`$6 = \log_{x} 30$`],
    why: [
      String.raw`$b^{c} = a$ is equivalent to $\log_{b} a = c$. With base $6$, exponent $x$, and result $30$: $x = \log_{6} 30$.`,
      String.raw`$\log_{30} 6 = x$ means $30^{x} = 6$. The base and the argument are switched.`,
      String.raw`$30 = \log_{6} x$ means $6^{30} = x$. The exponent and the result are switched.`,
      String.raw`$6 = \log_{x} 30$ means $x^{6} = 30$, which makes the unknown the base.`,
    ], answer: 0 },
  { id: "p2br-m10", type: "mcq", skill: "u2", topic: "2.9", calc: false, difficulty: "easy",
    question: String.raw`What is the value of $\log_{8} 2$?`,
    choices: [String.raw`$\dfrac{1}{3}$`, "$3$", String.raw`$-\dfrac{1}{3}$`, "$4$"],
    why: [
      String.raw`$\log_{8} 2$ is the exponent $c$ with $8^{c} = 2$. Since $8 = 2^{3}$, $8^{1/3} = 2$, so $\log_{8} 2 = \dfrac{1}{3}$.`,
      String.raw`$3$ is $\log_{2} 8$. The base and the argument are switched.`,
      String.raw`$8^{-1/3} = \dfrac{1}{2}$, not $2$. The sign is wrong.`,
      String.raw`$4$ is $8 \div 2$. A logarithm is an exponent, not a quotient.`,
    ], answer: 0 },
  { id: "p2br-m11", type: "mcq", skill: "u2", topic: "2.9", calc: false, difficulty: "easy",
    question: String.raw`What is the value of $\log 0.001 + \ln e^{5}$?`,
    choices: ["$2$", "$8$", "$3$", "$7$"],
    why: [
      String.raw`$0.001 = 10^{-3}$, so $\log 0.001 = -3$, and $\ln e^{5} = 5$. The sum is $-3 + 5 = 2$.`,
      String.raw`$8$ uses $\log 0.001 = 3$. A number between $0$ and $1$ has a negative common log: $10^{-3} = 0.001$.`,
      String.raw`$3$ uses $\log 0.001 = -2$, counting the two zeros after the decimal point. $10^{-2} = 0.01$, not $0.001$.`,
      String.raw`$7$ uses $\log 0.001 = 2$, which has both the wrong count and the wrong sign.`,
    ], answer: 0 },
  { id: "p2br-m12", type: "mcq", skill: "u2", topic: "2.9", calc: false, difficulty: "moderate",
    question: String.raw`The value of $\log_{4} 50$ is between which two consecutive integers?`,
    choices: ["$2$ and $3$", "$12$ and $13$", "$1$ and $2$", "$3$ and $4$"],
    why: [
      String.raw`$4^{2} = 16$ and $4^{3} = 64$. Since $16 < 50 < 64$ and $\log_{4}$ is increasing, $2 < \log_{4} 50 < 3$.`,
      String.raw`$12.5$ is $50 \div 4$. The logarithm is the exponent on $4$, not the quotient.`,
      String.raw`$\log 50 \approx 1.7$ uses base $10$. The base here is $4$.`,
      String.raw`$4^{3} = 64$ is already greater than $50$, so $\log_{4} 50 < 3$.`,
    ], answer: 0 },
  { id: "p2br-m13", type: "mcq", skill: "u2", topic: "2.9", calc: false, difficulty: "moderate",
    question: String.raw`What is the value of $\log_{9} 27$?`,
    choices: [String.raw`$\dfrac{3}{2}$`, String.raw`$\dfrac{2}{3}$`, "$3$", String.raw`$\dfrac{1}{3}$`],
    why: [
      String.raw`Write both numbers as powers of $3$: $9^{c} = 27$ means $3^{2c} = 3^{3}$, so $2c = 3$ and $c = \dfrac{3}{2}$.`,
      String.raw`$\dfrac{2}{3}$ is $\log_{27} 9$. The base and the argument are switched.`,
      String.raw`$3$ is $27 \div 9$. A logarithm is an exponent, not a quotient.`,
      String.raw`$\dfrac{1}{3}$ is $\dfrac{9}{27}$, a quotient with the numbers inverted.`,
    ], answer: 0 },
  { id: "p2br-m14", type: "mcq", skill: "u2", topic: "2.9", calc: false, difficulty: "difficult", set: "p2br-s3",
    question: String.raw`What number does point $M$ stand for?`,
    choices: ["$200$", "$40{,}000$", "$4{,}002.5$", "$1{,}600$"],
    why: [
      String.raw`Position on the line is $\log$ of the number. $M$ is at $\dfrac{\log 5 + \log 8000}{2} = \dfrac{\log 40000}{2} = \log\sqrt{40000} = \log 200$. So $M$ stands for $200$, the geometric mean of $5$ and $8{,}000$.`,
      String.raw`$40{,}000 = 5 \cdot 8000$ is the number whose log is the sum of the two positions. The halfway position is half of that sum, so take the square root.`,
      String.raw`$4{,}002.5$ is the arithmetic mean, which is halfway on an ordinary number line. On a log scale, halfway means equal ratios: $\dfrac{M}{5} = \dfrac{8000}{M}$.`,
      String.raw`$1{,}600 = \dfrac{8000}{5}$ is the ratio of $Q$ to $P$. Halfway splits that ratio into two equal factors of $40$, so $M = 5 \cdot 40$.`,
    ], answer: 0 },
  { id: "p2br-m15", type: "mcq", skill: "u2", topic: "2.9", calc: true, difficulty: "difficult",
    question: String.raw`The loudness of a sound, in decibels, is $L = 10\log\left(\dfrac{I}{I_{0}}\right)$, where $I$ is the sound's intensity and $I_{0}$ is a fixed reference intensity. A vacuum cleaner has a loudness of $65$ decibels. A leaf blower's sound has $40$ times the intensity of the vacuum cleaner's. To the nearest thousandth, what is the loudness of the leaf blower, in decibels?`,
    choices: ["$81.021$", "$2600$", "$105$", "$66.602$"],
    why: [
      String.raw`$L = 10\log\left(\dfrac{40I}{I_{0}}\right) = 10\log 40 + 10\log\left(\dfrac{I}{I_{0}}\right) = 10\log 40 + 65 \approx 16.021 + 65 = 81.021$.`,
      String.raw`$2600 = 65 \cdot 40$ treats loudness as proportional to intensity. Multiplying the intensity adds to the logarithm.`,
      String.raw`$105 = 65 + 40$ adds the factor itself. The amount added is $10\log 40$, not $40$.`,
      String.raw`$66.602 = 65 + \log 40$ drops the coefficient $10$ in the formula.`,
    ], answer: 0 },

  // 2.10 Inverses of exponential functions
  { id: "p2br-m16", type: "mcq", skill: "u2", topic: "2.10", calc: false, difficulty: "easy", set: "p2br-s4",
    question: String.raw`Which of the following is an equation for $f$?`,
    choices: [String.raw`$y = \log_{4} x$`, String.raw`$y = 4^{x}$`, String.raw`$y = 4\log x$`, String.raw`$y = \sqrt[4]{x}$`],
    why: [
      String.raw`Each marked point fits $4^{y} = x$: $4^{-1} = \frac{1}{4}$, $4^{0} = 1$, $4^{1} = 4$, $4^{2} = 16$. So $y = \log_{4} x$, which also has the vertical asymptote $x = 0$.`,
      String.raw`$y = 4^{x}$ is the inverse of $f$. Its graph has a horizontal asymptote, not a vertical one, and passes through $(1, 4)$, not $(4, 1)$.`,
      String.raw`$y = 4\log x$ puts the $4$ in the coefficient instead of the base. At $x = 4$ it gives $4\log 4 \approx 2.41$, not $1$.`,
      String.raw`$y = \sqrt[4]{x}$ passes through $(16, 2)$, but it gives $1$ at $x = 1$ instead of $0$, and it has no vertical asymptote.`,
    ], answer: 0 },
  { id: "p2br-m17", type: "mcq", skill: "u2", topic: "2.10", calc: false, difficulty: "easy", set: "p2br-s4",
    question: String.raw`What is the value of $f^{-1}(1.5)$?`,
    choices: ["$8$", "$64$", "$5.0625$", "$0.292$"],
    why: [
      String.raw`$f(x) = \log_{4} x$, so $f^{-1}(x) = 4^{x}$ and $f^{-1}(1.5) = 4^{3/2} = \left(\sqrt{4}\right)^{3} = 8$.`,
      String.raw`$64 = 4^{3}$ uses the numerator of $\dfrac{3}{2}$ and leaves out the square root that the denominator $2$ stands for.`,
      String.raw`$5.0625 = 1.5^{4}$ switches the base and the exponent.`,
      String.raw`$0.292$ is $f(1.5) = \log_{4} 1.5$, the function's value, not its inverse's.`,
    ], answer: 0 },
  { id: "p2br-m18", type: "mcq", skill: "u2", topic: "2.10", calc: false, difficulty: "moderate", set: "p2br-s4",
    question: String.raw`On the graph of $f$, each time $x$ is multiplied by $4$, $f(x)$ increases by $1$. Which statement describes $f^{-1}$?`,
    choices: [
      String.raw`When $x$ increases by $1$, $f^{-1}(x)$ is multiplied by $4$.`,
      String.raw`When $x$ is multiplied by $4$, $f^{-1}(x)$ increases by $1$.`,
      String.raw`When $x$ increases by $1$, $f^{-1}(x)$ increases by $4$.`,
      String.raw`When $x$ increases by $1$, $f^{-1}(x)$ is divided by $4$.`,
    ],
    why: [
      String.raw`The inverse swaps inputs and outputs, so the roles swap too: equal additive steps in the input of $f^{-1}$ give equal multiplying factors in its output. For example, $f^{-1}(0) = 1$, $f^{-1}(1) = 4$, $f^{-1}(2) = 16$.`,
      String.raw`This describes $f$ itself, the logarithm, not its inverse.`,
      String.raw`Equal additive changes in both input and output describe a linear function. $f^{-1}(x) = 4^{x}$ is exponential.`,
      String.raw`Dividing by $4$ describes $\left(\frac{1}{4}\right)^{x}$, a decreasing function. $f^{-1}$ is increasing, since $f$ is.`,
    ], answer: 0 },
  { id: "p2br-m19", type: "mcq", skill: "u2", topic: "2.10", calc: false, difficulty: "moderate", set: "p2br-s5",
    question: String.raw`Which of the following is an expression for $g(x)$?`,
    choices: [String.raw`$\log_{2}\left(\dfrac{x}{5}\right)$`, String.raw`$\dfrac{\log_{2} x}{5}$`, String.raw`$5\log_{2} x$`, String.raw`$\log_{5}\left(\dfrac{x}{2}\right)$`],
    why: [
      String.raw`The outputs double for each increase of $1$ in $x$, and $f(0) = 5$, so $f(x) = 5 \cdot 2^{x}$. Solve $x = 5 \cdot 2^{y}$: $2^{y} = \dfrac{x}{5}$, so $g(x) = \log_{2}\left(\dfrac{x}{5}\right)$. Check: $g(40) = \log_{2} 8 = 3$.`,
      String.raw`$\dfrac{\log_{2} x}{5}$ divides after taking the log. The $5$ multiplies $2^{y}$, so divide $x$ by $5$ first. Check: $\dfrac{\log_{2} 40}{5} \approx 1.06$, not $3$.`,
      String.raw`$5\log_{2} x$ moves the coefficient outside the log instead of undoing it. Check: $5\log_{2} 5 \approx 11.6$, not $0$.`,
      String.raw`$\log_{5}\left(\dfrac{x}{2}\right)$ swaps the base $2$ and the coefficient $5$. Check: $\log_{5} 20 \approx 1.86$, not $3$.`,
    ], answer: 0 },
  { id: "p2br-m20", type: "mcq", skill: "u2", topic: "2.10", calc: false, difficulty: "easy", set: "p2br-s6",
    question: String.raw`What is the value of $h^{-1}(-1)$?`,
    choices: ["$2$", "$2.5$", "$-2$", "$0.4$"],
    why: [
      String.raw`$h^{-1}(-1)$ is the input where $h(x) = -1$. The graph passes through $(2, -1)$, and $3 - 2^{2} = -1$. So $h^{-1}(-1) = 2$.`,
      String.raw`$2.5$ is $h(-1) = 3 - 2^{-1}$, the output at $x = -1$, not the input that gives $-1$.`,
      String.raw`$-2$ reflects $(2, -1)$ over the $x$-axis and reads the wrong coordinate. The inverse swaps the coordinates of $(2, -1)$.`,
      String.raw`$0.4$ is $\dfrac{1}{h(-1)} = \dfrac{1}{2.5}$. The notation $h^{-1}$ means the inverse function, not the reciprocal.`,
    ], answer: 0 },
  { id: "p2br-m21", type: "mcq", skill: "u2", topic: "2.10", calc: false, difficulty: "easy", set: "p2br-s6",
    question: String.raw`Which statement about the graph of $h^{-1}$ is true?`,
    choices: [
      String.raw`It has a vertical asymptote at $x = 3$.`,
      String.raw`It has a horizontal asymptote at $y = 3$.`,
      String.raw`It has a vertical asymptote at $x = -3$.`,
      String.raw`It has a horizontal asymptote at $y = 0$.`,
    ],
    why: [
      String.raw`Reflecting over $y = x$ turns the horizontal asymptote $y = 3$ of $h$ into a vertical asymptote $x = 3$. In symbols, $h^{-1}(x) = \log_{2}(3 - x)$, defined for $x < 3$.`,
      String.raw`$y = 3$ is the asymptote of $h$. The reflection over $y = x$ makes it vertical.`,
      String.raw`The asymptote $y = 3$ reflects over $y = x$ to $x = 3$. The sign does not change.`,
      String.raw`$y = 0$ is the asymptote of $2^{x}$. The inverse of an exponential is logarithmic, and a logarithmic graph has a vertical asymptote and no horizontal one.`,
    ], answer: 0 },
  { id: "p2br-m22", type: "mcq", skill: "u2", topic: "2.10", calc: true, difficulty: "difficult",
    question: String.raw`The function $f$ is given by $f(x) = a \cdot b^{x}$, where $a > 0$ and $b > 0$, and $g$ is the inverse of $f$. If $g(10) = 0$ and $g(40) = 3$, what is $g(25)$, to the nearest thousandth?`,
    choices: ["$1.983$", "$1.500$", "$3.185$", "$0.661$"],
    why: [
      String.raw`$g(10) = 0$ means $f(0) = 10$, so $a = 10$. $g(40) = 3$ means $10b^{3} = 40$, so $b = \sqrt[3]{4}$. Then $g(25)$ solves $10\left(\sqrt[3]{4}\right)^{x} = 25$: $x = \dfrac{\ln 2.5}{\ln\sqrt[3]{4}} = \dfrac{3\ln 2.5}{\ln 4} \approx 1.983$.`,
      String.raw`$1.500$ interpolates linearly: $25$ is halfway from $10$ to $40$, so halfway from $0$ to $3$. $g$ is logarithmic, not linear.`,
      String.raw`$3.185$ uses $b = \dfrac{4}{3}$, dividing the ratio $4$ by the exponent $3$ instead of taking the cube root.`,
      String.raw`$0.661$ is $\dfrac{\ln 2.5}{\ln 4}$, which treats $4$ as the growth factor for one unit instead of for three.`,
    ], answer: 0 },

  // 2.11 Logarithmic functions
  { id: "p2br-m23", type: "mcq", skill: "u2", topic: "2.11", calc: false, difficulty: "easy",
    question: String.raw`What are the domain and range of $f(x) = -2\ln(x - 4) + 1$?`,
    choices: [
      String.raw`Domain $x > 4$; range all real numbers`,
      String.raw`Domain $x > -4$; range all real numbers`,
      String.raw`Domain $x > 4$; range $y > 1$`,
      String.raw`Domain all real numbers; range $y > 4$`,
    ],
    why: [
      String.raw`The argument must be positive: $x - 4 > 0$, so $x > 4$. A logarithm takes every real value, and multiplying by $-2$ and adding $1$ keeps that, so the range is all real numbers.`,
      String.raw`$x > -4$ has the sign of the shift wrong. $x - 4 > 0$ gives $x > 4$.`,
      String.raw`The $+1$ shifts the graph up but does not bound it. The range of any logarithmic function is all real numbers.`,
      String.raw`This swaps the domain and the range. The input of a logarithm is restricted; its output is not.`,
    ], answer: 0 },
  { id: "p2br-m24", type: "mcq", skill: "u2", topic: "2.11", calc: false, difficulty: "moderate",
    question: String.raw`The function $g$ is given by $g(x) = 5 - \log_{3}(x + 2)$. What is $\displaystyle\lim_{x \to -2^{+}} g(x)$?`,
    choices: [String.raw`$\infty$`, String.raw`$-\infty$`, "$5$", "$0$"],
    why: [
      String.raw`As $x \to -2^{+}$, $x + 2 \to 0^{+}$, so $\log_{3}(x + 2) \to -\infty$. Subtracting it gives $5 - (-\infty)$, so $g(x) \to \infty$.`,
      String.raw`$-\infty$ is the limit of $\log_{3}(x + 2)$ alone. The minus sign in front reflects the graph, so $g$ increases without bound.`,
      String.raw`$5$ is the vertical shift. The graph has a vertical asymptote at $x = -2$, so $g$ does not approach a finite value there.`,
      String.raw`$0$ is the limit of the argument $x + 2$, not of the logarithm.`,
    ], answer: 0 },
  { id: "p2br-m25", type: "mcq", skill: "u2", topic: "2.11", calc: false, difficulty: "moderate",
    question: String.raw`What is the domain of $f(x) = \ln\left(9 - x^{2}\right)$?`,
    choices: [String.raw`$-3 < x < 3$`, String.raw`$x < -3$ or $x > 3$`, String.raw`$x < 3$`, String.raw`$0 < x < 3$`],
    why: [
      String.raw`The argument must be positive: $9 - x^{2} > 0$, so $x^{2} < 9$, which gives $-3 < x < 3$.`,
      String.raw`This solves $9 - x^{2} < 0$, where the argument is negative and the log is undefined.`,
      String.raw`$x < 3$ solves $9 - x^{2} > 0$ as if it were $3 - x > 0$. At $x = -4$, $9 - 16 < 0$.`,
      String.raw`$0 < x < 3$ applies the parent domain $x > 0$ to $x$ itself. Negative inputs such as $x = -1$ give $\ln 8$, which is defined.`,
    ], answer: 0 },
  { id: "p2br-m26", type: "mcq", skill: "u2", topic: "2.11", calc: false, difficulty: "moderate", set: "p2br-s7",
    question: String.raw`Which of the following functions fits every value in the table?`,
    choices: [String.raw`$f(x) = \log_{2}(x + 3)$`, String.raw`$f(x) = \log_{2}(x - 3)$`, String.raw`$f(x) = \log_{2} x + 3$`, String.raw`$f(x) = \log_{3}(x + 2)$`],
    why: [
      String.raw`The outputs rise by $1$ while the values of $x + 3$, which are $2, 4, 8, 16, 32$, double. That is the pattern of $\log_{2}(x + 3)$: for example, $\log_{2}(13 + 3) = 4$.`,
      String.raw`$\log_{2}(x - 3)$ shifts the wrong way. At $x = -1$ it is $\log_{2}(-4)$, which is undefined.`,
      String.raw`$\log_{2} x + 3$ shifts up instead of left. At $x = -1$ it is undefined, and at $x = 1$ it gives $3$, not $2$.`,
      String.raw`$\log_{3}(x + 2)$ gives $\log_{3} 1 = 0$ at $x = -1$, not $1$.`,
    ], answer: 0 },
  { id: "p2br-m27", type: "mcq", skill: "u2", topic: "2.11", calc: false, difficulty: "difficult",
    question: String.raw`The function $f$ is given by $f(x) = \log_{2}(x - h) + k$, where $h$ and $k$ are constants. The graph of $f$ has a vertical asymptote at $x = -3$ and passes through the point $(5, 1)$. What are the values of $h$ and $k$?`,
    choices: [String.raw`$h = -3$, $k = -2$`, String.raw`$h = 3$, $k = -2$`, String.raw`$h = -3$, $k = 4$`, String.raw`$h = 3$, $k = 0$`],
    why: [
      String.raw`The asymptote is where $x - h = 0$, so $h = -3$. Then $f(5) = \log_{2}(5 + 3) + k = 3 + k = 1$, so $k = -2$.`,
      String.raw`$h = 3$ has the wrong sign. With $h = 3$ the asymptote would be $x = 3$.`,
      String.raw`$k = 4$ adds $3$ to $1$ instead of subtracting: $3 + k = 1$ gives $k = -2$.`,
      String.raw`This uses $h = 3$, so it evaluates $\log_{2}(5 - 3) = 1$ and gets $k = 0$. The asymptote $x = -3$ requires $h = -3$.`,
    ], answer: 0 },
  { id: "p2br-m28", type: "mcq", skill: "u2", topic: "2.11", calc: false, difficulty: "easy",
    question: String.raw`The function $f$ is given by $f(x) = 4 - \ln x$. What is $\displaystyle\lim_{x \to \infty} f(x)$?`,
    choices: [String.raw`$-\infty$`, String.raw`$\infty$`, "$4$", "$0$"],
    why: [
      String.raw`$\ln x$ increases without bound as $x \to \infty$, so $4 - \ln x$ decreases without bound: the limit is $-\infty$.`,
      String.raw`$\infty$ is the limit of $\ln x$. The minus sign reflects the graph over a horizontal line, so $f$ decreases.`,
      String.raw`$4$ treats $\ln x$ as if it approached $0$. A logarithm has no horizontal asymptote.`,
      String.raw`$0$ treats the log as leveling off. $\ln x$ grows slowly but without bound.`,
    ], answer: 0 },
  { id: "p2br-m29", type: "mcq", skill: "u2", topic: "2.11", calc: false, difficulty: "moderate",
    question: String.raw`The function $f$ is given by $f(x) = \log_{0.5}(x - 1)$. Which of the following statements are true?

I. $f$ is decreasing on its domain.
II. The graph of $f$ is concave up on its domain.
III. The graph of $f$ has a vertical asymptote at $x = 1$.`,
    choices: ["I, II, and III", "I and III only", "III only", "II and III only"],
    why: [
      String.raw`A base between $0$ and $1$ makes the log decreasing (I). $\log_{0.5} u = -\log_{2} u$, the reflection of a concave down graph over the $x$-axis, so it is concave up (II). The argument is $0$ at $x = 1$ (III). All three are true.`,
      String.raw`II is also true. $\log_{0.5}(x - 1) = -\log_{2}(x - 1)$ is a reflection of a concave down graph, which makes it concave up.`,
      String.raw`I and II are also true. A base less than $1$ gives a decreasing log, and its graph is concave up.`,
      String.raw`I is also true. Since $0 < 0.5 < 1$, the outputs fall as $x$ grows: $f(2) = 0$ and $f(3) = -1$.`,
    ], answer: 0 },
  { id: "p2br-m30", type: "mcq", skill: "u2", topic: "2.11", calc: true, difficulty: "easy",
    question: String.raw`The function $f$ is given by $f(x) = 3\ln x - 2$. What is the range of $f$ on the interval $1 \le x \le 10$, with the endpoint rounded to the nearest thousandth?`,
    choices: [String.raw`$[-2, 4.908]$`, String.raw`$[-2, 6.908]$`, String.raw`$[-2, 1]$`, String.raw`$[-2, 28]$`],
    why: [
      String.raw`$f$ is increasing, so its least and greatest values on $[1, 10]$ are at the endpoints: $f(1) = 3\ln 1 - 2 = -2$ and $f(10) = 3\ln 10 - 2 \approx 4.908$.`,
      String.raw`$6.908$ is $3\ln 10$, which leaves out the $-2$.`,
      String.raw`$1$ is $3\log 10 - 2$, using the common log instead of the natural log.`,
      String.raw`$28$ is $3(10) - 2$, which drops the logarithm.`,
    ], answer: 0 },

  // 2.12 Logarithmic function manipulation
  { id: "p2br-m31", type: "mcq", skill: "u2", topic: "2.12", calc: false, difficulty: "easy",
    question: String.raw`For $x > 0$ and $y > 0$, which expression is equivalent to $\log_{6}\left(\dfrac{36x^{3}}{y}\right)$?`,
    choices: [
      String.raw`$2 + 3\log_{6} x - \log_{6} y$`,
      String.raw`$6 + 3\log_{6} x - \log_{6} y$`,
      String.raw`$2 + \log_{6} (3x) - \log_{6} y$`,
      String.raw`$2 + 3\log_{6} x + \log_{6} y$`,
    ],
    why: [
      String.raw`Product, quotient, and power properties: $\log_{6} 36 + \log_{6} x^{3} - \log_{6} y = 2 + 3\log_{6} x - \log_{6} y$.`,
      String.raw`$\log_{6} 36 = 2$, since $6^{2} = 36$. The $6$ is $36 \div 6$, not a logarithm.`,
      String.raw`The power property moves the exponent in front as a coefficient: $\log_{6} x^{3} = 3\log_{6} x$, not $\log_{6}(3x)$.`,
      String.raw`Dividing by $y$ subtracts $\log_{6} y$. The sign is wrong.`,
    ], answer: 0 },
  { id: "p2br-m32", type: "mcq", skill: "u2", topic: "2.12", calc: false, difficulty: "easy",
    question: String.raw`For $a > 0$ and $b > 0$, which expression is equivalent to $2\ln a - \ln b + \ln 3$?`,
    choices: [String.raw`$\ln\left(\dfrac{3a^{2}}{b}\right)$`, String.raw`$\ln\left(\dfrac{6a}{b}\right)$`, String.raw`$\ln\left(a^{2} - b + 3\right)$`, String.raw`$\ln\left(3a^{2}b\right)$`],
    why: [
      String.raw`$2\ln a = \ln a^{2}$ by the power property. Then adding logs multiplies and subtracting divides: $\ln a^{2} - \ln b + \ln 3 = \ln\dfrac{3a^{2}}{b}$.`,
      String.raw`$6a$ multiplies the $2$ into the argument as a factor. The coefficient becomes an exponent: $2\ln a = \ln a^{2}$.`,
      String.raw`The sum and difference of logs is the log of a product and quotient, not the log of a sum and difference.`,
      String.raw`$-\ln b$ divides by $b$; it does not multiply.`,
    ], answer: 0 },
  { id: "p2br-m33", type: "mcq", skill: "u2", topic: "2.12", calc: false, difficulty: "moderate",
    question: String.raw`Let $f(x) = \log_{5} x$ and $g(x) = \log_{5}\left(25x^{2}\right)$ for $x > 0$. Which of the following expresses $g$ in terms of $f$?`,
    choices: [String.raw`$g(x) = 2f(x) + 2$`, String.raw`$g(x) = 2f(x) + 25$`, String.raw`$g(x) = f(x) + 2$`, String.raw`$g(x) = 2f(x) + 4$`],
    why: [
      String.raw`$\log_{5}\left(25x^{2}\right) = \log_{5} 25 + \log_{5} x^{2} = 2 + 2\log_{5} x = 2f(x) + 2$: a vertical dilation by a factor of $2$, then a shift up $2$.`,
      String.raw`$25$ is the factor inside the argument. The product property turns it into $\log_{5} 25 = 2$.`,
      String.raw`$f(x) + 2$ is $\log_{5}(25x)$. The power property also turns $x^{2}$ into $2\log_{5} x$.`,
      String.raw`$2f(x) + 4$ is $\log_{5}\left((25x)^{2}\right)$, with the exponent applied to $25$ as well.`,
    ], answer: 0 },
  { id: "p2br-m34", type: "mcq", skill: "u2", topic: "2.12", calc: false, difficulty: "easy",
    question: String.raw`For $x > 0$, which expression is equivalent to $\log_{8} x$?`,
    choices: [String.raw`$\dfrac{1}{3}\log_{2} x$`, String.raw`$3\log_{2} x$`, String.raw`$\log_{2}\left(\dfrac{x}{3}\right)$`, String.raw`$\dfrac{1}{8}\log_{2} x$`],
    why: [
      String.raw`Change of base: $\log_{8} x = \dfrac{\log_{2} x}{\log_{2} 8} = \dfrac{\log_{2} x}{3}$.`,
      String.raw`$3\log_{2} x$ multiplies by $\log_{2} 8$ instead of dividing. Check at $x = 8$: $3\log_{2} 8 = 9$, but $\log_{8} 8 = 1$.`,
      String.raw`Dividing a log by $3$ is not the same as dividing its argument by $3$.`,
      String.raw`$\dfrac{1}{8}$ divides by the base itself instead of by $\log_{2} 8 = 3$.`,
    ], answer: 0 },
  { id: "p2br-m35", type: "mcq", skill: "u2", topic: "2.12", calc: true, difficulty: "easy",
    question: String.raw`What is the value of $\log_{7} 200$, to the nearest thousandth?`,
    choices: ["$2.723$", "$0.367$", "$1.456$", "$28.571$"],
    why: [
      String.raw`Change of base: $\log_{7} 200 = \dfrac{\ln 200}{\ln 7} \approx \dfrac{5.298}{1.946} \approx 2.723$. Check: $7^{2.723} \approx 200$.`,
      String.raw`$0.367$ is $\dfrac{\ln 7}{\ln 200}$, the change-of-base quotient upside down. That is $\log_{200} 7$.`,
      String.raw`$1.456$ is $\log\left(\dfrac{200}{7}\right)$. A quotient of logs is not the log of a quotient.`,
      String.raw`$28.571$ is $200 \div 7$, a quotient with no logarithm.`,
    ], answer: 0 },
  { id: "p2br-m36", type: "mcq", skill: "u2", topic: "2.12", calc: false, difficulty: "difficult",
    question: String.raw`If $\log_{b} 2 = p$ and $\log_{b} 3 = q$, which expression is equal to $\log_{b}\left(b\sqrt{12}\right)$?`,
    choices: [String.raw`$1 + p + \dfrac{q}{2}$`, String.raw`$p + \dfrac{q}{2}$`, String.raw`$1 + 2p + q$`, String.raw`$1 + \dfrac{p + q}{2}$`],
    why: [
      String.raw`$\log_{b}\left(b\sqrt{12}\right) = \log_{b} b + \dfrac{1}{2}\log_{b}\left(2^{2} \cdot 3\right) = 1 + \dfrac{1}{2}(2p + q) = 1 + p + \dfrac{q}{2}$.`,
      String.raw`This leaves out $\log_{b} b = 1$ from the factor $b$.`,
      String.raw`This leaves out the $\dfrac{1}{2}$ from the square root.`,
      String.raw`This writes $12$ as $2 \cdot 3$, dropping a factor of $2$. Since $12 = 2^{2} \cdot 3$, $\log_{b} 12 = 2p + q$.`,
    ], answer: 0 },
  { id: "p2br-m37", type: "mcq", skill: "u2", topic: "2.12", calc: false, difficulty: "easy", set: "p2br-s8",
    question: String.raw`Which equation describes $g$ in terms of $f$?`,
    choices: [String.raw`$g(x) = f(x) + 2$`, String.raw`$g(x) = f(x + 2)$`, String.raw`$g(x) = f(x) - 2$`, String.raw`$g(x) = 2f(x)$`],
    why: [
      String.raw`At each $x$ the graph of $g$ is $2$ units above $f$: at $x = 1$, $f$ is $0$ and $g$ is $2$; at $x = 3$, $f$ is $1$ and $g$ is $3$. So $g(x) = f(x) + 2$.`,
      String.raw`$f(x + 2)$ shifts left $2$, which would move the asymptote to $x = -2$. Both graphs have the asymptote $x = 0$.`,
      String.raw`$f(x) - 2$ shifts down. The graph of $g$ is above $f$.`,
      String.raw`$2f(x)$ doubles each output, so it would still pass through $(1, 0)$. $g(1) = 2$.`,
    ], answer: 0 },
  { id: "p2br-m38", type: "mcq", skill: "u2", topic: "2.12", calc: false, difficulty: "moderate", set: "p2br-s8",
    question: String.raw`The function $g$ can be written as $g(x) = \log_{3}(cx)$ for a constant $c$. What is the value of $c$?`,
    choices: ["$9$", "$2$", String.raw`$\dfrac{1}{9}$`, "$6$"],
    why: [
      String.raw`$g(x) = f(x) + 2 = \log_{3} x + \log_{3} 9 = \log_{3}(9x)$, so $c = 9$. Check: $g\left(\frac{1}{9}\right) = \log_{3} 1 = 0$.`,
      String.raw`$2$ is the vertical shift. Inside the log, the shift becomes the factor $3^{2}$.`,
      String.raw`$\dfrac{1}{9}$ gives $\log_{3} x - 2$, a shift down.`,
      String.raw`$6 = 3 \cdot 2$ multiplies the base by the shift instead of raising it to that power.`,
    ], answer: 0 },

  // 2.13 Exponential and logarithmic equations and inequalities
  { id: "p2br-m39", type: "mcq", skill: "u2", topic: "2.13", calc: false, difficulty: "easy",
    question: String.raw`What is the solution of $5e^{2x} = 40$?`,
    choices: [String.raw`$\dfrac{\ln 8}{2}$`, String.raw`$\dfrac{\ln 35}{2}$`, String.raw`$\dfrac{\ln 40}{10}$`, String.raw`$\dfrac{\ln 40}{2}$`],
    why: [
      String.raw`Divide by $5$: $e^{2x} = 8$. Take the natural log: $2x = \ln 8$, so $x = \dfrac{\ln 8}{2}$.`,
      String.raw`$\dfrac{\ln 35}{2}$ subtracts $5$ from both sides. The $5$ multiplies $e^{2x}$, so divide by $5$.`,
      String.raw`$\dfrac{\ln 40}{10}$ multiplies $5 \cdot 2$ as if $5e^{2x}$ were $e^{10x}$. Divide by $5$ first.`,
      String.raw`$\dfrac{\ln 40}{2}$ takes the log of $40$ without removing the factor $5$. $\ln\left(5e^{2x}\right) = \ln 5 + 2x$, not $2x$.`,
    ], answer: 0 },
  { id: "p2br-m40", type: "mcq", skill: "u2", topic: "2.13", calc: false, difficulty: "easy",
    question: String.raw`What is the solution of $\log_{4}(3x + 1) = 3$?`,
    choices: ["$21$", String.raw`$\dfrac{11}{3}$`, String.raw`$\dfrac{80}{3}$`, String.raw`$\dfrac{65}{3}$`],
    why: [
      String.raw`Rewrite in exponential form: $3x + 1 = 4^{3} = 64$, so $3x = 63$ and $x = 21$.`,
      String.raw`$\dfrac{11}{3}$ solves $3x + 1 = 12$, which multiplies $4 \cdot 3$ instead of raising $4$ to the power $3$.`,
      String.raw`$\dfrac{80}{3}$ solves $3x + 1 = 3^{4} = 81$, which switches the base and the exponent.`,
      String.raw`$\dfrac{65}{3}$ solves $3x = 64 + 1$. The $1$ is subtracted from both sides: $3x = 63$.`,
    ], answer: 0 },
  { id: "p2br-m41", type: "mcq", skill: "u2", topic: "2.13", calc: false, difficulty: "easy",
    question: String.raw`What is the solution of $4^{x + 1} = 8^{x - 2}$?`,
    choices: ["$8$", "$4$", "$7$", "$-8$"],
    why: [
      String.raw`Write both sides with base $2$: $2^{2(x + 1)} = 2^{3(x - 2)}$, so $2x + 2 = 3x - 6$ and $x = 8$.`,
      String.raw`$4$ solves $2x + 2 = 3x - 2$, which multiplies only the $x$ by $3$. The exponent $3$ applies to all of $x - 2$.`,
      String.raw`$7$ solves $2x + 1 = 3x - 6$, which multiplies only the $x$ by $2$ on the left.`,
      String.raw`$-8$ has a sign error in the last step: $2x + 2 = 3x - 6$ gives $8 = x$.`,
    ], answer: 0 },
  { id: "p2br-m42", type: "mcq", skill: "u2", topic: "2.13", calc: false, difficulty: "moderate",
    question: String.raw`What are all solutions of $\log_{3} x + \log_{3}(x - 8) = 2$?`,
    choices: [String.raw`$x = 9$ only`, String.raw`$x = -1$ only`, String.raw`$x = 9$ and $x = -1$`, String.raw`$x = 8.5$ only`],
    why: [
      String.raw`Combine: $\log_{3}\left(x(x - 8)\right) = 2$, so $x^{2} - 8x = 9$ and $(x - 9)(x + 1) = 0$. At $x = -1$ both arguments are negative, so $-1$ is extraneous. Only $x = 9$ works: $\log_{3} 9 + \log_{3} 1 = 2$.`,
      String.raw`$x = -1$ is the extraneous root: $\log_{3}(-1)$ is undefined.`,
      String.raw`$x = -1$ must be rejected because the original equation takes the log of $x$ and of $x - 8$, which must both be positive.`,
      String.raw`$8.5$ solves $x + (x - 8) = 9$. The sum of two logs is the log of the product, not of the sum.`,
    ], answer: 0 },
  { id: "p2br-m43", type: "mcq", skill: "u2", topic: "2.13", calc: true, difficulty: "moderate",
    question: String.raw`What is the solution set of $\ln(x - 2) < 1$, with endpoints rounded to the nearest thousandth?`,
    choices: [String.raw`$2 < x < 4.718$`, String.raw`$x < 4.718$`, String.raw`$x > 2$`, String.raw`$2 < x < 12$`],
    why: [
      String.raw`The argument must be positive, so $x > 2$. Since $\ln$ is increasing, $\ln(x - 2) < 1$ means $x - 2 < e$, so $x < 2 + e \approx 4.718$. Both conditions: $2 < x < 4.718$.`,
      String.raw`$x < 4.718$ leaves out the domain. At $x = 0$, $\ln(-2)$ is undefined.`,
      String.raw`$x > 2$ is only the domain of the logarithm. At $x = 5$, $\ln 3 \approx 1.1$, which is not less than $1$.`,
      String.raw`$12$ comes from $x - 2 < 10$, which treats $\ln$ as a base $10$ logarithm.`,
    ], answer: 0 },
  { id: "p2br-m44", type: "mcq", skill: "u2", topic: "2.13", calc: false, difficulty: "easy",
    question: String.raw`The function $f$ is given by $f(x) = 3^{x + 1} - 5$. Which of the following is $f^{-1}(x)$?`,
    choices: [String.raw`$\log_{3}(x + 5) - 1$`, String.raw`$\log_{3}(x - 5) + 1$`, String.raw`$\log_{3}(x + 5) + 1$`, String.raw`$\log_{3}(x + 1) - 5$`],
    why: [
      String.raw`Solve $x = 3^{y + 1} - 5$: $x + 5 = 3^{y + 1}$, so $y + 1 = \log_{3}(x + 5)$ and $y = \log_{3}(x + 5) - 1$.`,
      String.raw`This keeps the signs of both shifts. Undoing them changes both signs.`,
      String.raw`The $-5$ is undone correctly, but the $+1$ in the exponent is undone by subtracting $1$, not adding it.`,
      String.raw`This swaps exp for log but leaves the shifts where they were. The inverse undoes the steps in reverse order.`,
    ], answer: 0 },
  { id: "p2br-m45", type: "mcq", skill: "u2", topic: "2.13", calc: false, difficulty: "difficult",
    question: String.raw`The function $g$ is given by $g(x) = 3\ln(x - 1) + 2$ for $x > 1$. Which of the following is $g^{-1}(x)$?`,
    choices: [String.raw`$e^{(x - 2)/3} + 1$`, String.raw`$e^{(x + 2)/3} - 1$`, String.raw`$\dfrac{e^{x} - 2}{3} + 1$`, String.raw`$e^{3(x - 2)} + 1$`],
    why: [
      String.raw`Solve $x = 3\ln(y - 1) + 2$ by undoing the steps in reverse order: $x - 2 = 3\ln(y - 1)$, then $\dfrac{x - 2}{3} = \ln(y - 1)$, then $y - 1 = e^{(x - 2)/3}$, so $y = e^{(x - 2)/3} + 1$.`,
      String.raw`This changes the sign of each shift in the wrong place: subtract $2$ before dividing, and add $1$ at the end.`,
      String.raw`This undoes the log first. The last step of $g$ is adding $2$, so that is the first step to undo, then the $3$, then the log.`,
      String.raw`This multiplies by $3$ instead of dividing. The $3$ multiplies the log, so its inverse divides $x - 2$ by $3$.`,
    ], answer: 0 },
  { id: "p2br-m46", type: "mcq", skill: "u2", topic: "2.13", calc: true, difficulty: "difficult",
    question: String.raw`The amount of a medicine in a patient's body $t$ hours after a dose is $200(0.85)^{t}$ milligrams. For what values of $t \ge 0$ is the amount less than $50$ milligrams? Round to the nearest thousandth.`,
    choices: [String.raw`$t > 8.530$`, String.raw`$t < 8.530$`, String.raw`$t > 0.762$`, String.raw`$t > 5.000$`],
    why: [
      String.raw`$200(0.85)^{t} < 50$ gives $(0.85)^{t} < 0.25$. Taking logs, $t\ln 0.85 < \ln 0.25$. Since $\ln 0.85 < 0$, dividing reverses the inequality: $t > \dfrac{\ln 0.25}{\ln 0.85} \approx 8.530$.`,
      String.raw`$t < 8.530$ keeps the direction after dividing by $\ln 0.85$, which is negative. The amount is decreasing, so it is below $50$ after $8.530$ hours, not before.`,
      String.raw`$0.762$ is $\dfrac{\ln 50}{\ln 170}$, which multiplies $200 \cdot 0.85$ first. The exponent applies only to $0.85$.`,
      String.raw`$5$ treats the decrease as linear: $15\%$ of $200$ is $30$ milligrams an hour. The decrease is $15\%$ of the current amount each hour.`,
    ], answer: 0 },

  // 2.14 Logarithmic function context and data modeling
  { id: "p2br-m47", type: "mcq", skill: "u2", topic: "2.14", calc: false, difficulty: "easy",
    question: String.raw`For a function $f$, $f(1) = 4$, and each time the input is multiplied by $10$, the output increases by $3$. Which of the following could define $f$?`,
    choices: [String.raw`$f(x) = 4 + 3\log x$`, String.raw`$f(x) = 4 + \dfrac{1}{3}\log x$`, String.raw`$f(x) = 4 + \log_{3} x$`, String.raw`$f(x) = 4\left(10^{x/3}\right)$`],
    why: [
      String.raw`Multiplying $x$ by $10$ adds $1$ to $\log x$, so adds $3$ to $3\log x$. And $f(1) = 4 + 3\log 1 = 4$.`,
      String.raw`$4 + \dfrac{1}{3}\log x$ divides by $3$ instead of multiplying: multiplying $x$ by $10$ adds only $\dfrac{1}{3}$.`,
      String.raw`$4 + \log_{3} x$ adds $1$ each time $x$ is multiplied by $3$, not $10$.`,
      String.raw`$4\left(10^{x/3}\right)$ is exponential: its output is multiplied by $10$ when the input increases by $3$, the reverse pattern.`,
    ], answer: 0 },
  { id: "p2br-m48", type: "mcq", skill: "u2", topic: "2.14", calc: true, difficulty: "easy",
    question: String.raw`The balance of an account, in dollars, $t$ years after it is opened is $A(t) = 500e^{0.045t}$. How many years does it take for the balance to triple? Round to the nearest thousandth.`,
    choices: ["$24.414$", "$0.244$", "$162.516$", "$66.667$"],
    why: [
      String.raw`Solve $500e^{0.045t} = 1500$: $e^{0.045t} = 3$, so $t = \dfrac{\ln 3}{0.045} \approx 24.414$ years.`,
      String.raw`$0.244$ is $\dfrac{\ln 3}{4.5}$, which uses the percent $4.5$ instead of the rate $0.045$.`,
      String.raw`$162.516$ is $\dfrac{\ln 1500}{0.045}$, which takes the log of the final balance instead of the ratio $\dfrac{1500}{500} = 3$.`,
      String.raw`$66.667$ is $\dfrac{3}{0.045}$, which leaves out the natural log.`,
    ], answer: 0 },
  { id: "p2br-m49", type: "mcq", skill: "u2", topic: "2.14", calc: false, difficulty: "easy", set: "p2br-s9",
    question: String.raw`Which type of model is most appropriate for these data, and why?`,
    choices: [
      String.raw`Logarithmic, because $W$ increases and is concave down`,
      String.raw`Exponential, because $W$ increases and is concave down`,
      String.raw`Linear, because $W$ increases throughout`,
      String.raw`Logarithmic, because $W$ increases and is concave up`,
    ],
    why: [
      String.raw`$W$ rises quickly and then by smaller and smaller amounts: $9$ words per minute from day $1$ to day $2$, then $3$ from day $10$ to day $12$. An increasing, concave down pattern fits $a + b\ln d$ with $b > 0$.`,
      String.raw`An increasing exponential model is concave up. These data level off.`,
      String.raw`A linear model has a constant rate of change. These data rise by less over each later interval of equal length.`,
      String.raw`The model type is right, but the data are concave down: the rate of increase gets smaller.`,
    ], answer: 0 },
  { id: "p2br-m50", type: "mcq", skill: "u2", topic: "2.14", calc: true, difficulty: "moderate", set: "p2br-s9",
    question: String.raw`A logarithmic regression of the form $W = a + b\ln d$ is fit to the data. To the nearest thousandth, what typing speed does the regression predict for day $20$?`,
    choices: ["$64.525$", "$85.715$", "$124.781$", "$39.735$"],
    why: [
      String.raw`The regression gives $a \approx 20.703$ and $b \approx 14.628$. Then $W(20) = 20.703 + 14.628\ln 20 \approx 64.525$ words per minute.`,
      String.raw`$85.715$ comes from a linear regression, which keeps the early fast rise going and overestimates.`,
      String.raw`$124.781$ comes from an exponential regression, which is concave up and grows faster and faster.`,
      String.raw`$39.735$ uses the regression's $a$ and $b$ with the common log, $20.703 + 14.628\log 20$. The model uses $\ln d$.`,
    ], answer: 0 },
  { id: "p2br-m51", type: "mcq", skill: "u2", topic: "2.14", calc: true, difficulty: "difficult",
    question: String.raw`A function of the form $f(x) = a + b\ln x$ passes through the points $(2, 7)$ and $(16, 13)$. To the nearest thousandth, what is $f(40)$?`,
    choices: ["$15.644$", "$23.286$", "$10.644$", "$13.811$"],
    why: [
      String.raw`Subtract the equations: $b(\ln 16 - \ln 2) = 6$, so $b = \dfrac{6}{\ln 8} \approx 2.885$. Then $a = 7 - b\ln 2 = 7 - 2 = 5$. So $f(40) = 5 + 2.885\ln 40 \approx 15.644$.`,
      String.raw`$23.286$ is the value of the line through the two points at $x = 40$. The model is logarithmic, not linear.`,
      String.raw`$10.644$ is $b\ln 40$ alone. It leaves out $a = 5$.`,
      String.raw`$13.811$ uses $b = \dfrac{6}{\ln 14}$, the log of the difference of the inputs. The difference of the logs is $\ln 16 - \ln 2 = \ln 8$.`,
    ], answer: 0 },
  { id: "p2br-m52", type: "mcq", skill: "u2", topic: "2.14", calc: true, difficulty: "moderate",
    question: String.raw`The magnitude of an earthquake is $M = \log\left(\dfrac{I}{S}\right)$, where $I$ is its intensity and $S$ is a fixed standard intensity. One earthquake has magnitude $6.2$ and another has magnitude $4.7$. To the nearest thousandth, how many times as intense as the second earthquake is the first?`,
    choices: ["$31.623$", "$1.500$", "$1.319$", "$4.482$"],
    why: [
      String.raw`$\log\left(\dfrac{I_{1}}{S}\right) - \log\left(\dfrac{I_{2}}{S}\right) = \log\left(\dfrac{I_{1}}{I_{2}}\right) = 6.2 - 4.7 = 1.5$, so $\dfrac{I_{1}}{I_{2}} = 10^{1.5} \approx 31.623$.`,
      String.raw`$1.5$ is the difference in magnitudes, which is the log of the ratio, not the ratio.`,
      String.raw`$1.319 = \dfrac{6.2}{4.7}$ treats magnitude as proportional to intensity.`,
      String.raw`$4.482 = e^{1.5}$ uses base $e$. The formula uses the common log, so the ratio is $10^{1.5}$.`,
    ], answer: 0 },
  { id: "p2br-m53", type: "mcq", skill: "u2", topic: "2.14", calc: false, difficulty: "easy",
    question: String.raw`A computer search of a sorted list of $n$ items takes about $T(n) = 12 + 4\log_{2} n$ microseconds. According to the model, by how much does the search time increase when the length of the list doubles?`,
    choices: ["$4$ microseconds", "$12$ microseconds", String.raw`$4\log_{2} n$ microseconds`, "$16$ microseconds"],
    why: [
      String.raw`$T(2n) - T(n) = 4\log_{2}(2n) - 4\log_{2} n = 4\log_{2} 2 = 4$ microseconds.`,
      String.raw`$12$ is the constant term, which is the same in $T(n)$ and $T(2n)$ and does not add to the change.`,
      String.raw`$4\log_{2} n$ treats $\log_{2}(2n)$ as $2\log_{2} n$. The product property gives $\log_{2}(2n) = 1 + \log_{2} n$.`,
      String.raw`$16$ is $T(2)$, a value of the model, not the change when $n$ doubles.`,
    ], answer: 0 },

  // 2.15 Semi-log plots
  { id: "p2br-m54", type: "mcq", skill: "u2", topic: "2.15", calc: false, difficulty: "easy", set: "p2br-s10",
    question: String.raw`Which statement about the data is true?`,
    choices: [
      String.raw`An exponential model fits, since the points lie on a line on this plot.`,
      String.raw`A linear model fits, since the points lie on a line on this plot.`,
      String.raw`A logarithmic model fits, since the vertical axis has a log scale.`,
      String.raw`An exponential model fits, since the values of $y$ increase.`,
    ],
    why: [
      String.raw`On a semi-log plot, $\log y$ is graphed against $x$. Points on a line mean $\log y = mx + c$, so $y = 10^{c}\left(10^{m}\right)^{x}$, an exponential function.`,
      String.raw`The line is in $\log y$, not in $y$. The values $10, 100, 1000$ at $x = 0, 2, 4$ have a constant ratio, not a constant difference.`,
      String.raw`The scale of the axis does not decide the model. A logarithmic model would curve on this plot.`,
      String.raw`Increasing values alone do not show an exponential pattern. A linear or quadratic model also increases; it is the straight line on the semi-log plot that does.`,
    ], answer: 0 },
  { id: "p2br-m55", type: "mcq", skill: "u2", topic: "2.15", calc: false, difficulty: "moderate", set: "p2br-s10",
    question: String.raw`Which equation gives the line through the plotted points in terms of $\log y$?`,
    choices: [String.raw`$\log y = 0.5x + 1$`, String.raw`$\log y = x + 0.5$`, String.raw`$\log y = 0.5x + 10$`, String.raw`$\log y = 2x + 1$`],
    why: [
      String.raw`At $x = 0$, $\log 10 = 1$, and at $x = 4$, $\log 1000 = 3$. The slope is $\dfrac{3 - 1}{4 - 0} = 0.5$ and the intercept is $1$.`,
      String.raw`This swaps the slope and the intercept.`,
      String.raw`$10$ is the value of $y$ at $x = 0$. The intercept of the line in $\log y$ is $\log 10 = 1$.`,
      String.raw`$2$ is run over rise, $\dfrac{4}{2}$. The slope is the change in $\log y$ over the change in $x$.`,
    ], answer: 0 },
  { id: "p2br-m56", type: "mcq", skill: "u2", topic: "2.15", calc: false, difficulty: "moderate", set: "p2br-s10",
    question: String.raw`Which exponential function models the data?`,
    choices: [String.raw`$y = 10\left(10^{0.5x}\right)$`, String.raw`$y = 10(0.5)^{x}$`, String.raw`$y = 0.5\left(10^{x}\right)$`, String.raw`$y = 10 + 10^{0.5x}$`],
    why: [
      String.raw`$\log y = 0.5x + 1$, so $y = 10^{0.5x + 1} = 10\left(10^{0.5x}\right)$. Check: $x = 4$ gives $10 \cdot 100 = 1000$.`,
      String.raw`$0.5$ is the slope of the line in $\log y$. The growth factor is $10^{0.5}$, not $0.5$; this function decreases.`,
      String.raw`This puts the slope in front and drops the intercept. At $x = 0$ it gives $0.5$, not $10$.`,
      String.raw`$10^{0.5x + 1}$ is a product, $10^{1} \cdot 10^{0.5x}$, not a sum. At $x = 0$ this gives $11$.`,
    ], answer: 0 },
  { id: "p2br-m57", type: "mcq", skill: "u2", topic: "2.15", calc: false, difficulty: "difficult", set: "p2br-s11",
    question: String.raw`Which exponential function models the data?`,
    choices: [String.raw`$y = e^{2}\left(e^{-0.6}\right)^{x}$`, String.raw`$y = 2\left(e^{-0.6}\right)^{x}$`, String.raw`$y = e^{2}(-0.6)^{x}$`, String.raw`$y = e^{2}\left(10^{-0.6}\right)^{x}$`],
    why: [
      String.raw`The slope is $\dfrac{-1 - 2}{5 - 0} = -0.6$, so $\ln y = 2 - 0.6x$. Then $y = e^{2 - 0.6x} = e^{2}\left(e^{-0.6}\right)^{x}$.`,
      String.raw`$2$ is the intercept of $\ln y$, so the initial value is $e^{2}$, not $2$.`,
      String.raw`$-0.6$ is the slope of $\ln y$. The base is $e^{-0.6}$, and an exponential base cannot be negative.`,
      String.raw`The axis shows $\ln y$, so the base is $e$. Base $10$ goes with $\log y$.`,
    ], answer: 0 },
  { id: "p2br-m58", type: "mcq", skill: "u2", topic: "2.15", calc: false, difficulty: "easy",
    question: String.raw`The function $f(x) = 3 \cdot 2^{x}$ is graphed on a semi-log plot, with $\log y$ on the vertical axis. Which describes the graph?`,
    choices: [
      String.raw`A line with slope $\log 2$ and vertical intercept $\log 3$`,
      String.raw`A line with slope $2$ and vertical intercept $3$`,
      String.raw`A line with slope $\log 3$ and vertical intercept $\log 2$`,
      String.raw`A curve that is increasing and concave up`,
    ],
    why: [
      String.raw`$\log f(x) = \log 3 + x\log 2$, which is linear in $x$ with slope $\log 2$ and intercept $\log 3$.`,
      String.raw`The plot shows $\log y$, so the slope and the intercept are logs of the base and of the initial value.`,
      String.raw`This swaps the roles: the base $2$ gives the slope, and the initial value $3$ gives the intercept.`,
      String.raw`On an ordinary graph $f$ is concave up, but on a semi-log plot any exponential is a line.`,
    ], answer: 0 },
  { id: "p2br-m59", type: "mcq", skill: "u2", topic: "2.15", calc: true, difficulty: "moderate",
    question: String.raw`The population $P$ of a town $t$ years after 2000 is modeled on a semi-log plot by the line $\log P = 0.015t + 4.2$. According to the model, by what percent does the population grow each year, to the nearest tenth of a percent?`,
    choices: [String.raw`$3.5\%$`, String.raw`$1.5\%$`, String.raw`$4.2\%$`, String.raw`$103.5\%$`],
    why: [
      String.raw`$P = 10^{4.2}\left(10^{0.015}\right)^{t}$, and $10^{0.015} \approx 1.035$. A growth factor of $1.035$ means $3.5\%$ growth each year.`,
      String.raw`$1.5\%$ reads the slope $0.015$ as the rate. The slope is $\log$ of the growth factor.`,
      String.raw`$4.2$ is the intercept, $\log$ of the population in 2000. It says nothing about the rate.`,
      String.raw`$103.5\%$ is the growth factor written as a percent. The percent growth is the factor minus $1$.`,
    ], answer: 0 },
  { id: "p2br-m60", type: "mcq", skill: "u2", topic: "2.15", calc: false, difficulty: "moderate",
    question: String.raw`A data set is modeled by $y = a \cdot b^{x}$ with $a > 0$ and $b > 0$, and the points $(x, \log y)$ are graphed. Which of the following statements are true?

I. If $0 < b < 1$, the graph is a line with negative slope.
II. The vertical intercept of the graph is $\log a$.
III. If $a$ is doubled, the slope of the graph doubles.`,
    choices: ["I and II only", "I only", "II and III only", "I, II, and III"],
    why: [
      String.raw`$\log y = \log a + x\log b$. If $0 < b < 1$, then $\log b < 0$, so I is true. At $x = 0$, $\log y = \log a$, so II is true. Doubling $a$ adds $\log 2$ to the intercept and leaves the slope $\log b$ alone, so III is false.`,
      String.raw`II is also true: at $x = 0$, $\log y = \log a$.`,
      String.raw`III is false. The slope is $\log b$; changing $a$ only shifts the line up or down.`,
      String.raw`III is false. Doubling $a$ shifts the line up by $\log 2$; the slope stays $\log b$.`,
    ], answer: 0 },
  { id: "p2br-m61", type: "mcq", skill: "u2", topic: "2.15", calc: false, difficulty: "easy",
    question: String.raw`Each data set gives $y$ for $x = 1, 2, 3, 4$. Which data set lies on a line when $\log y$ is plotted against $x$?`,
    choices: [String.raw`$y$: $3, 6, 12, 24$`, String.raw`$y$: $3, 6, 9, 12$`, String.raw`$y$: $1, 4, 9, 16$`, String.raw`$y$: $2, 4, 8, 14$`],
    why: [
      String.raw`Each value is $2$ times the one before, so $y = 1.5 \cdot 2^{x}$ and $\log y = \log 1.5 + x\log 2$, a line.`,
      String.raw`These values have a constant difference of $3$. They are linear in $y$, so $\log y$ curves.`,
      String.raw`These are the squares $x^{2}$. The ratios $4, 2.25, 1.78$ are not constant.`,
      String.raw`The ratios are $2, 2, 1.75$. The last one breaks the pattern, so the points are not on one line.`,
    ], answer: 0 },

  // Free response 1 (Modeling a Non-Periodic Context, calculator): app downloads
  { id: "p2br-f1a", type: "frq", skill: "u2", topic: "2.14", calc: true, set: "p2br-s12", part: "(a)",
    prompt: String.raw`(i) Use the given data to write two equations that can be used to find the values of the constants $a$ and $b$ in the expression for $D(t)$.

(ii) Find the values of $a$ and $b$ as decimal approximations.`,
    rows: [
      { name: "Two equations", earns: String.raw`$a + b\ln 2 = 20$ and $a + b\ln 8 = 44$.` },
      { name: "Values of a and b", earns: String.raw`$b = \dfrac{24}{\ln 4} \approx 17.312$ and $a = 8$.` },
    ],
    solution: String.raw`$D(2) = 20$ and $D(8) = 44$ give $$a + b\ln 2 = 20 \qquad a + b\ln 8 = 44$$ Subtracting the first equation from the second: $b(\ln 8 - \ln 2) = 24$, so $b\ln 4 = 24$ and $b = \dfrac{24}{\ln 4} \approx 17.312$. Then $a = 20 - b\ln 2 = 20 - \dfrac{24\ln 2}{2\ln 2} = 20 - 12 = 8$.` },
  { id: "p2br-f1b", type: "frq", skill: "u2", topic: "2.14", calc: true, set: "p2br-s12", part: "(b)",
    prompt: String.raw`(i) Use the given data to find the average rate of change of the total number of downloads, in thousands per month, from $t = 2$ to $t = 8$ months. Express the answer using correct units.

(ii) Interpret the meaning of the answer from (i) in context.`,
    rows: [
      { name: "Average rate of change with units", earns: String.raw`$\dfrac{D(8) - D(2)}{8 - 2} = \dfrac{44 - 20}{6} = 4$ thousand downloads per month.` },
      { name: "Interpretation", earns: String.raw`From $t = 2$ to $t = 8$ months after the launch, the total number of downloads increased by an average of $4$ thousand downloads per month.` },
    ],
    solution: String.raw`$$\frac{D(8) - D(2)}{8 - 2} = \frac{44 - 20}{6} = 4 \text{ thousand downloads per month}$$ On the interval from $2$ to $8$ months after the launch, the total number of downloads increased by an average of $4$ thousand downloads per month.` },
  { id: "p2br-f1c", type: "frq", skill: "u2", topic: "2.13", calc: true, set: "p2br-s12", part: "(c)",
    prompt: String.raw`(i) Is the average rate of change of $D$ from $t = 8$ to $t = 14$ greater than, less than, or equal to the answer from part (b)(i)? Explain your reasoning using characteristics of the function $D$.

(ii) According to the model, at what time $t$ will the total number of downloads reach $60$ thousand? Give the answer to the nearest thousandth of a month.`,
    rows: [
      { name: "Comparison with reason", earns: String.raw`Less than. Because $b > 0$, $D$ is increasing and its graph is concave down, so the rate of change of $D$ decreases as $t$ increases; over the later interval of the same length the average rate of change is less than $4$.` },
      { name: "Time", earns: String.raw`$8 + 17.312\ln t = 60$ gives $t \approx 20.159$ months.` },
    ],
    solution: String.raw`(i) Less than. With $b \approx 17.312 > 0$, $D(t) = a + b\ln t$ is increasing and concave down, so its rate of change decreases as $t$ increases. The interval $8 \le t \le 14$ has the same length as $2 \le t \le 8$ and comes later, so its average rate of change is less than $4$ thousand downloads per month. (The value is $\dfrac{b\ln(14/8)}{6} \approx 1.615$.)

(ii) Solve $8 + \dfrac{24}{\ln 4}\ln t = 60$: $\ln t = \dfrac{52\ln 4}{24}$, so $t = 4^{13/6} \approx 20.159$ months.` },

  // Free response 2 (Symbolic Manipulations, no calculator): logarithmic and exponential expressions
  { id: "p2br-f2a", type: "frq", skill: "u2", topic: "2.12", calc: false, set: "p2br-s13", part: "(a)",
    prompt: String.raw`(i) For $x > 3$, rewrite $2\ln(x + 3) - \ln\left(x^{2} - 9\right) + \ln(x - 3)$ as a single natural logarithm of a polynomial.

(ii) For $x > 0$, rewrite $\log_{9} x + \log_{3} x$ as a constant times $\log_{3} x$.`,
    rows: [
      { name: "Single logarithm", earns: String.raw`$\ln(x + 3)$, with supporting work.` },
      { name: "Constant times a log", earns: String.raw`$\dfrac{3}{2}\log_{3} x$, with supporting work.` },
    ],
    solution: String.raw`(i) $$2\ln(x + 3) - \ln\left(x^{2} - 9\right) + \ln(x - 3) = \ln\frac{(x + 3)^{2}(x - 3)}{(x - 3)(x + 3)} = \ln(x + 3)$$ (ii) By change of base, $\log_{9} x = \dfrac{\log_{3} x}{\log_{3} 9} = \dfrac{1}{2}\log_{3} x$. So $\log_{9} x + \log_{3} x = \dfrac{1}{2}\log_{3} x + \log_{3} x = \dfrac{3}{2}\log_{3} x$.` },
  { id: "p2br-f2b", type: "frq", skill: "u2", topic: "2.13", calc: false, set: "p2br-s13", part: "(b)",
    prompt: String.raw`(i) Solve $\ln(x + 4) - \ln(x - 2) = \ln x$ for all values of $x$ in the domain of the equation.

(ii) Solve $3^{2x} - 4 \cdot 3^{x} - 12 = 0$ for all real values of $x$.`,
    rows: [
      { name: "Log equation", earns: String.raw`$x = 4$, with supporting work that rejects $x = -1$.` },
      { name: "Exponential equation", earns: String.raw`$x = \log_{3} 6$, with supporting work.` },
    ],
    solution: String.raw`(i) The domain requires $x > 2$. Combine: $\ln\dfrac{x + 4}{x - 2} = \ln x$, so $\dfrac{x + 4}{x - 2} = x$. Then $x + 4 = x^{2} - 2x$, so $x^{2} - 3x - 4 = 0$ and $(x - 4)(x + 1) = 0$. The value $x = -1$ is not in the domain, so the only solution is $x = 4$.

(ii) Let $u = 3^{x}$. Then $u^{2} - 4u - 12 = 0$, so $(u - 6)(u + 2) = 0$. Since $3^{x} > 0$, $3^{x} = -2$ has no solution, and $3^{x} = 6$ gives $x = \log_{3} 6$.` },
  { id: "p2br-f2c", type: "frq", skill: "u2", topic: "2.8", calc: false, set: "p2br-s13", part: "(c)",
    prompt: String.raw`The function $h$ is given by $h(x) = 2^{x - 1} + 3$.

(i) Find an expression for $h^{-1}(x)$.

(ii) What is the domain of $h^{-1}$? Give a reason for your answer.`,
    rows: [
      { name: "Inverse", earns: String.raw`$h^{-1}(x) = \log_{2}(x - 3) + 1$, with supporting work.` },
      { name: "Domain with reason", earns: String.raw`$x > 3$, because the domain of $h^{-1}$ is the range of $h$, and $2^{x - 1} > 0$ makes the range of $h$ equal to $y > 3$.` },
    ],
    solution: String.raw`(i) Solve $x = 2^{y - 1} + 3$ for $y$: $x - 3 = 2^{y - 1}$, so $y - 1 = \log_{2}(x - 3)$ and $h^{-1}(x) = \log_{2}(x - 3) + 1$.

(ii) The domain of $h^{-1}$ is the range of $h$. Since $2^{x - 1} > 0$ for every real $x$, $h(x) > 3$, and $h$ takes every value greater than $3$. So the domain of $h^{-1}$ is $x > 3$, which matches the argument $x - 3 > 0$ in the expression from (i).` },

  // Free response 3 (Function Concepts, calculator): a table and a logarithmic function
  { id: "p2br-f3a", type: "frq", skill: "u2", topic: "2.8", calc: true, set: "p2br-s14", part: "(a)",
    prompt: String.raw`(i) Find the value of $(f \circ g)(3)$ as a decimal approximation, or indicate that it is not defined.

(ii) Find the value of $g^{-1}(12)$, or indicate that it is not defined.`,
    rows: [
      { name: "Composition", earns: String.raw`$(f \circ g)(3) = f(24) = 2\log_{3} 24 - 1 \approx 4.786$.` },
      { name: "Inverse value", earns: String.raw`$g^{-1}(12) = 2$, because $g(2) = 12$.` },
    ],
    solution: String.raw`(i) $(f \circ g)(3) = f(g(3)) = f(24) = 2\log_{3} 24 - 1 = \dfrac{2\ln 24}{\ln 3} - 1 \approx 4.786$.

(ii) $g$ is increasing, so it is one-to-one and has an inverse. The table gives $g(2) = 12$, so $g^{-1}(12) = 2$.` },
  { id: "p2br-f3b", type: "frq", skill: "u2", topic: "2.11", calc: true, set: "p2br-s14", part: "(b)",
    prompt: String.raw`(i) Find an expression for $f^{-1}(x)$.

(ii) Determine $\displaystyle\lim_{x \to 0^{+}} f(x)$. Express the answer using the mathematical notation of a limit.`,
    rows: [
      { name: "Inverse", earns: String.raw`$f^{-1}(x) = 3^{(x + 1)/2}$.` },
      { name: "Limit", earns: String.raw`$\displaystyle\lim_{x \to 0^{+}} f(x) = -\infty$.` },
    ],
    solution: String.raw`(i) Solve $x = 2\log_{3} y - 1$ for $y$: $\dfrac{x + 1}{2} = \log_{3} y$, so $f^{-1}(x) = 3^{(x + 1)/2}$.

(ii) As $x \to 0^{+}$, $\log_{3} x$ decreases without bound, and multiplying by $2$ and subtracting $1$ keeps that: $\displaystyle\lim_{x \to 0^{+}} f(x) = -\infty$.` },
  { id: "p2br-f3c", type: "frq", skill: "u2", topic: "2.10", calc: true, set: "p2br-s14", part: "(c)",
    prompt: String.raw`(i) Which of the following function types best models $g$: linear, quadratic, exponential, or logarithmic?

(ii) Give a reason for your answer in (i) based on the values in the table.`,
    rows: [
      { name: "Function type", earns: "Exponential." },
      { name: "Reason", earns: String.raw`Over consecutive input intervals of equal length $1$, the output values change by a constant ratio of $2$: $\dfrac{6}{3} = \dfrac{12}{6} = \dfrac{24}{12} = \dfrac{48}{24} = 2$.` },
    ],
    solution: String.raw`(i) Exponential.

(ii) The inputs $0, 1, 2, 3, 4$ are equally spaced, and the ratios of consecutive outputs are $\dfrac{6}{3} = \dfrac{12}{6} = \dfrac{24}{12} = \dfrac{48}{24} = 2$. Output values that change proportionally over equal-length input intervals fit an exponential model, here $g(x) = 3 \cdot 2^{x}$.` },
];

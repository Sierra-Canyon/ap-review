// AP Precalculus topic quiz, 2.15 Semi-log Plots.
import { graph } from "../../plot.js";

// A semi-log grid on top of graph(): the vertical axis is in log units (base 10), with decade labels and minor lines at
// 2 to 9 times each power of ten. graph() draws the curves, dots, and frame; this adds the log ticks and their labels.
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

// y = 5000 (10^-0.5)^x at x = 0 to 6. Items p215-m01 and p215-m02.
const logY1 = (x) => Math.log10(5000) - 0.5 * x;
// Culture A = 500 (1.25)^t and culture B = 40 (2)^t. Items p215-m03 and p215-m04.
const logA = (t) => Math.log10(500 * 1.25 ** t), logB = (t) => Math.log10(40 * 2 ** t);
const ts = [0, 1, 2, 3, 4, 5, 6];

export const sets = {
  "p215-s1": {
    name: "Decreasing data on a semi-log plot",
    label: "Semi-log plot",
    intro: String.raw`Seven data points $(x, y)$ are plotted below on a semi-log plot: the vertical axis shows $y$ on a logarithmic scale (base $10$), so equal distances on that axis stand for equal ratios. The points lie on a line. The point for $x = 0$ is at $y = 5{,}000$, and the point for $x = 6$ is at $y = 5$.`,
    sources: [{ title: "", blocks: [{ svg: semilog({
      x: [-1.3, 7], y: [0, 4.3], xname: "x", yname: "y",
      decade: (k) => ["1", "10", "100", "1,000", "10,000"][k],
      dots: ts.map((x) => [x, logY1(x), "closed"]),
      alt: "Semi-log plot with x from 0 to 6 on a regular scale and y on a logarithmic scale with labels 1, 10, 100, 1,000, and 10,000 equally spaced. Seven points lie on a straight falling line: at x = 0 the point is at y = 5,000, at x = 2 it is at y = 500, at x = 4 it is at y = 50, and at x = 6 it is at y = 5. The points at x = 1, 3, and 5 lie halfway between, on the same line.",
    }) }] }],
  },
  "p215-s2": {
    name: "Two bacteria cultures",
    label: "Semi-log plot",
    intro: String.raw`The numbers of bacteria in two cultures $t$ hours after they are started are modeled by $A(t) = 500(1.25)^{t}$ and $B(t) = 40(2)^{t}$. Both models are graphed below on a semi-log plot, with the number of bacteria on a logarithmic scale (base $10$).`,
    sources: [{ title: "", blocks: [{ svg: semilog({
      x: [-0.9, 7], y: [1, 4.2], xname: "t", yname: "bacteria",
      decade: (k) => ["1", "10", "100", "1,000", "10,000"][k],
      fns: [{ f: logA, from: 0, to: 6.5, label: "A", labelAt: 6.5 }, { f: logB, from: 0, to: 6.5, label: "B", labelAt: 6.2 }],
      dots: [...ts.map((t) => [t, logA(t), "closed"]), ...ts.map((t) => [t, logB(t), "closed"])],
      alt: "Semi-log plot of two straight lines, with t from 0 to 6 hours on a regular scale and the number of bacteria on a logarithmic scale with labels 10, 100, 1,000, and 10,000 equally spaced. Line A starts at 500 and rises slowly, reaching about 1,900 at t = 6. Line B starts at 40 and rises steeply, reaching 2,560 at t = 6. The lines cross between t = 5 and t = 6.",
    }) }] }],
  },
  "p215-s3": {
    name: "Signatures on a petition",
    label: "Free response",
    intro: String.raw`The total number of signatures $S$ on an online petition $t$ days after it was posted is given in the table below for selected days. A calculator may be used.`,
    sources: [{ title: "", blocks: [{ table: { head: [String.raw`$t$ (days)`, "$1$", "$3$", "$5$", "$7$"], rows: [[String.raw`$S$ (signatures)`, "$1{,}210$", "$4{,}820$", "$19{,}500$", "$76{,}300$"]] } }] }],
  },
};

export default {
  forms: [{
    id: "p215",
    name: "Topic 2.15 Quiz: Semi-log Plots",
    group: "Unit 2: Exponential and Logarithmic Functions",
    items: [
      { id: "p215-m01", type: "mcq", skill: "u2", topic: "2.15", calc: false, difficulty: "easy", set: "p215-s1",
        question: String.raw`Based on the plot, what happens to $y$ each time $x$ increases by $2$?`,
        choices: [
          String.raw`It is divided by $10$.`,
          String.raw`It decreases by $1$.`,
          String.raw`It is divided by $2$.`,
          String.raw`It decreases by $4{,}500$.`,
        ],
        why: [
          String.raw`From $x = 0$ to $x = 2$ the points drop one decade, from $5{,}000$ to $500$, and again from $500$ to $50$. On a log scale, an equal drop means an equal factor: $y$ is divided by $10$.`,
          String.raw`$\log y$ decreases by $1$, but $y$ itself goes from $5{,}000$ to $500$, a decrease of $4{,}500$.`,
          String.raw`Dividing by $2$ reads the slope, $-\frac{1}{2}$ per unit of $x$, as a factor. The slope is in $\log y$: over $2$ units, $\log y$ drops $1$, so $y$ is divided by $10$.`,
          String.raw`$4{,}500$ is the drop from $x = 0$ to $x = 2$ only. From $x = 2$ to $x = 4$, $y$ drops from $500$ to $50$, only $450$. On a semi-log plot, equal vertical distances are equal ratios, not equal differences.`,
        ], answer: 0 },
      { id: "p215-m02", type: "mcq", skill: "u2", topic: "2.15", calc: false, difficulty: "moderate", set: "p215-s1",
        question: String.raw`Which equation models the data?`,
        choices: [String.raw`$y = 5000\left(10^{-0.5x}\right)$`, String.raw`$y = 5000(0.5)^{x}$`, String.raw`$y = 5000\left(10^{-2x}\right)$`, String.raw`$y = 5000 - 0.5x$`],
        why: [
          String.raw`$\log y$ goes from $\log 5000$ at $x = 0$ to $\log 5 = \log 5000 - 3$ at $x = 6$, a slope of $-\dfrac{3}{6} = -0.5$. So $\log y = \log 5000 - 0.5x$ and $y = 5000\left(10^{-0.5x}\right)$. Check: $x = 6$ gives $5000 \cdot 10^{-3} = 5$.`,
          String.raw`$0.5$ is the size of the slope of the line in $\log y$, not the factor. At $x = 6$ this gives about $78$, not $5$.`,
          String.raw`$-2$ is run over rise, $\dfrac{6}{-3}$. The slope is the change in $\log y$ over the change in $x$. At $x = 6$ this gives $5000 \cdot 10^{-12}$.`,
          String.raw`$5000 - 0.5x$ is linear in $y$. The line on a semi-log plot is linear in $\log y$, which makes $y$ exponential.`,
        ], answer: 0 },
      { id: "p215-m03", type: "mcq", skill: "u2", topic: "2.15", calc: false, difficulty: "easy", set: "p215-s2",
        question: String.raw`Which statement explains why the line for $B$ is steeper than the line for $A$ on the semi-log plot?`,
        choices: [
          String.raw`The slope of each line is the log of its growth factor, and $2 > 1.25$.`,
          String.raw`The slope of each line is the log of its initial value, and $40 < 500$.`,
          String.raw`The slope of each line is its growth factor, and $2 > 1.25$.`,
          String.raw`The slope of each line is its growth factor minus $1$, and $1 > 0.25$.`,
        ],
        why: [
          String.raw`$\log B(t) = \log 40 + t\log 2$ and $\log A(t) = \log 500 + t\log 1.25$. The slopes are $\log 2 \approx 0.301$ and $\log 1.25 \approx 0.097$, and the larger growth factor gives the larger slope.`,
          String.raw`The log of the initial value is the vertical intercept, where the line starts, not its slope.`,
          String.raw`The slope is $\log 2 \approx 0.301$, not $2$. On a semi-log plot the growth factor appears as its log.`,
          String.raw`The slope is $\log 2$, not $2 - 1 = 1$. The percent rate of growth is not the slope of the line.`,
        ], answer: 0 },
      { id: "p215-m04", type: "mcq", skill: "u2", topic: "2.15", calc: true, difficulty: "moderate", set: "p215-s2",
        question: String.raw`At what time $t$ do the two cultures have the same number of bacteria, to the nearest thousandth of an hour?`,
        choices: ["$5.374$", "$2.756$", "$5.485$", "$13.045$"],
        why: [
          String.raw`Set the lines equal: $\log 500 + t\log 1.25 = \log 40 + t\log 2$. Then $t(\log 2 - \log 1.25) = \log 500 - \log 40$, so $t = \dfrac{\log 12.5}{\log 1.6} \approx 5.374$, where the lines cross on the plot.`,
          String.raw`$2.756$ is $\dfrac{\log 12.5}{\log 2 + \log 1.25}$, which adds the slopes. The lines meet when the difference in slopes makes up the difference in intercepts.`,
          String.raw`$5.485$ uses the slopes rounded to $0.3$ and $0.1$. Rounding the logs early moves the answer.`,
          String.raw`$13.045$ is $\dfrac{\ln 460}{\ln 1.6}$, which uses the difference of the initial values, $500 - 40$, instead of their ratio, $12.5$.`,
        ], answer: 0 },
      { id: "p215-m05", type: "mcq", skill: "u2", topic: "2.15", calc: true, difficulty: "easy",
        question: String.raw`A data set is modeled on a semi-log plot by the line $\log y = 2.1 - 0.12x$, where $\log$ is the common logarithm. Which exponential model, with constants rounded to the nearest thousandth, is equivalent?`,
        choices: [String.raw`$y = 125.893(0.759)^{x}$`, String.raw`$y = 2.1(0.759)^{x}$`, String.raw`$y = 8.166(0.887)^{x}$`, String.raw`$y = 125.893(0.880)^{x}$`],
        why: [
          String.raw`$y = 10^{2.1 - 0.12x} = 10^{2.1}\left(10^{-0.12}\right)^{x} \approx 125.893(0.759)^{x}$.`,
          String.raw`$2.1$ is $\log$ of the initial value. The initial value is $10^{2.1} \approx 125.893$.`,
          String.raw`$8.166 = e^{2.1}$ and $0.887 = e^{-0.12}$ use base $e$. The line is in the common log, so the base is $10$.`,
          String.raw`$0.880 = 1 - 0.12$ reads the slope as a percent decrease. The factor is $10^{-0.12} \approx 0.759$.`,
        ], answer: 0 },
      { id: "p215-m06", type: "mcq", skill: "u2", topic: "2.15", calc: false, difficulty: "difficult",
        question: String.raw`For a data set modeled by $y = a \cdot b^{x}$, the points $(x, \log_{2} y)$ lie on the line through $(1, 5)$ and $(4, -1)$. Which exponential function models the data?`,
        choices: [String.raw`$y = 128\left(\frac{1}{4}\right)^{x}$`, String.raw`$y = 32\left(\frac{1}{4}\right)^{x}$`, String.raw`$y = 128 \cdot 4^{x}$`, String.raw`$y = 10^{7}\left(10^{-2}\right)^{x}$`],
        why: [
          String.raw`The slope is $\dfrac{-1 - 5}{4 - 1} = -2$, so $\log_{2} y = 5 - 2(x - 1) = 7 - 2x$. Then $y = 2^{7}\left(2^{-2}\right)^{x} = 128\left(\frac{1}{4}\right)^{x}$. Check: $x = 1$ gives $32 = 2^{5}$.`,
          String.raw`$32 = 2^{5}$ is the value of $y$ at $x = 1$, not at $x = 0$. The vertical intercept of the line is $7$, so $a = 2^{7}$.`,
          String.raw`The slope is negative, so the base is $2^{-2} = \frac{1}{4}$, and $y$ decreases. With $4^{x}$, $y$ would increase.`,
          String.raw`The axis shows $\log_{2} y$, so the base is $2$. Base $10$ goes with the common log.`,
        ], answer: 0 },
      { id: "p215-f1a", type: "frq", skill: "u2", topic: "2.15", calc: true, set: "p215-s3", part: "(a)",
        prompt: String.raw`Find $\log S$ for each value in the table, and use the results to explain why an exponential model is appropriate for $S$.`,
        rows: [{ name: "Logs and reason", earns: String.raw`$\log S \approx 3.083, 3.683, 4.290, 4.883$; over equal $2$-day intervals these change by nearly equal amounts (about $0.6$), so $\log S$ is close to linear in $t$ and $S$ is close to exponential.` }],
        solution: String.raw`$\log 1210 \approx 3.083$, $\log 4820 \approx 3.683$, $\log 19500 \approx 4.290$, and $\log 76300 \approx 4.883$. The inputs are equally spaced, $2$ days apart, and the changes in $\log S$ are about $0.600$, $0.607$, and $0.592$, nearly constant. Points $(t, \log S)$ that lie close to a line mean $S$ changes by nearly the same factor over equal intervals, so an exponential model is appropriate.` },
      { id: "p215-f1b", type: "frq", skill: "u2", topic: "2.15", calc: true, set: "p215-s3", part: "(b)",
        prompt: String.raw`Use a linear regression of $\log S$ on $t$ to write a linear model for $\log S$. Give the constants to the nearest thousandth.`,
        rows: [{ name: "Linear model", earns: String.raw`$\log S = 0.300t + 2.783$.` }],
        solution: String.raw`A linear regression on the points $(1, 3.083)$, $(3, 3.683)$, $(5, 4.290)$, $(7, 4.883)$, using the unrounded logs, gives $\log S \approx 0.300t + 2.783$.` },
      { id: "p215-f1c", type: "frq", skill: "u2", topic: "2.15", calc: true, set: "p215-s3", part: "(c)",
        prompt: String.raw`(i) Rewrite the model from part (b) as an exponential model of the form $S = a \cdot b^{t}$.

(ii) Use the model to predict the total number of signatures $10$ days after the petition was posted.`,
        rows: [
          { name: "Exponential model", earns: String.raw`$S = 10^{2.783}\left(10^{0.300}\right)^{t} \approx 607.235(1.997)^{t}$.` },
          { name: "Prediction", earns: String.raw`About $611{,}589$ signatures (answers from rounded constants that are close to this are accepted).` },
        ],
        solution: String.raw`(i) $S = 10^{0.300t + 2.783} = 10^{2.783}\left(10^{0.300}\right)^{t} \approx 607.235(1.997)^{t}$, using the unrounded regression constants.

(ii) $S(10) = 10^{2.783 + 0.300(10)} \approx 611{,}589$ signatures with the unrounded constants. The model predicts about $611{,}600$ total signatures on day $10$.` },
    ],
  }],
};

// AP Precalculus topic quiz, Topic 2.1: Change in Arithmetic and Geometric Sequences.
import { graph } from "../../plot.js";

export const sets = {
  "p201-s1": {
    name: "The price of a console",
    label: "Table",
    intro: String.raw`The price, in dollars, of a game console in year $n$ of its sales forms a geometric sequence $p_n$. The table gives the first four terms.`,
    sources: [{ title: "", blocks: [{ table: { head: ["$n$", "$1$", "$2$", "$3$", "$4$"], rows: [["$p_n$ (dollars)", "$500$", "$400$", "$320$", "$256$"]] } }] }],
  },
  "p201-s2": {
    name: "A geometric sequence",
    label: "Graph",
    intro: String.raw`The graph shows the terms $a_0$ through $a_4$ of a geometric sequence. The points are $(0, -16)$, $(1, -8)$, $(2, -4)$, $(3, -2)$, and $(4, -1)$.`,
    sources: [{ title: "", blocks: [{ svg: graph({
      x: [-1, 6], y: [-18, 4], step: { x: 1, y: 2 }, labelEvery: 2, xname: "n", yname: "a",
      dots: [[0, -16, "closed"], [1, -8, "closed"], [2, -4, "closed"], [3, -2, "closed"], [4, -1, "closed"]],
      alt: "Five separate points, not joined, all below the horizontal axis: (0, -16), (1, -8), (2, -4), (3, -2), and (4, -1). Each point is half as far below the axis as the one before it.",
    }) }] }],
  },
  "p201-s3": {
    name: "Planting trees",
    label: "Free response",
    intro: String.raw`A landscaping company plants $120$ trees in year $1$ of a project. In each year after that, it plants $15$ more trees than it planted the year before. Let $a_n$ be the number of trees the company plants in year $n$.`,
    sources: [{ title: "", blocks: [{ p: "A calculator is allowed. Give decimal answers to three decimal places." }] }],
  },
};

export default {
  forms: [{
    id: "p201",
    name: "Topic 2.1 Quiz: Arithmetic and Geometric Sequences",
    group: "Unit 2: Exponential and Logarithmic Functions",
    items: [
      { id: "p201-m01", type: "mcq", skill: "u2", topic: "2.1", calc: false, difficulty: "easy",
        question: String.raw`An arithmetic sequence has $a_3 = 17$ and $a_4 = 22$. What is $a_{10}$?`,
        choices: ["$52$", "$57$", "$47$", "$50$"],
        why: [
          String.raw`The common difference is $22 - 17 = 5$. From $a_4$ to $a_{10}$ is $6$ steps, so $a_{10} = 22 + 6(5) = 52$.`,
          String.raw`$57$ adds $7$ differences to $a_4$. From term $4$ to term $10$ there are only $10 - 4 = 6$ steps.`,
          String.raw`$47$ adds $6$ differences to $a_3$. From term $3$ to term $10$ there are $7$ steps, so this is $a_9$.`,
          String.raw`$50$ is $10 \cdot 5$, the difference times the index. It leaves out the starting value: $a_n = a_1 + (n - 1)d$ with $a_1 = 7$.`,
        ], answer: 0 },
      { id: "p201-m02", type: "mcq", skill: "u2", topic: "2.1", calc: true, difficulty: "moderate", set: "p201-s1",
        question: String.raw`If the pattern continues, what is the price of the console in year $8$?`,
        choices: [String.raw`$\$104.86$`, String.raw`$\$83.89$`, String.raw`$\$131.07$`, String.raw`$\$42.95$`],
        why: [
          String.raw`The common ratio is $\dfrac{400}{500} = 0.8$, so $p_n = 500(0.8)^{n - 1}$ and $p_8 = 500(0.8)^{7} \approx 104.86$ dollars.`,
          String.raw`$500(0.8)^{8} \approx 83.89$ uses the exponent $n$ instead of $n - 1$. This is the price in year $9$.`,
          String.raw`$500(0.8)^{6} \approx 131.07$ is the price in year $7$, one year too early.`,
          String.raw`$256(0.8)^{8} \approx 42.95$ starts from year $4$ but takes $8$ steps. From year $4$ to year $8$ is $4$ steps.`,
        ], answer: 0 },
      { id: "p201-m03", type: "mcq", skill: "u2", topic: "2.1", calc: false, difficulty: "easy", set: "p201-s1",
        question: String.raw`By what percent does the price decrease from each year to the next?`,
        choices: [String.raw`$20\%$`, String.raw`$80\%$`, String.raw`$25\%$`, String.raw`$0.8\%$`],
        why: [
          String.raw`Each price is $0.8$ times the one before, so each year the price keeps $80\%$ and loses $100\% - 80\% = 20\%$.`,
          String.raw`$80\%$ is the share of the price that is kept each year, not the share that is lost.`,
          String.raw`$25\%$ divides the drop by the new price, $\dfrac{100}{400}$. A percent decrease is measured against the earlier price, $\dfrac{100}{500}$.`,
          String.raw`$0.8$ is the ratio written as a decimal. As a percent it is $80\%$, and that is the part kept, not the decrease.`,
        ], answer: 0 },
      { id: "p201-m04", type: "mcq", skill: "u2", topic: "2.1", calc: true, difficulty: "moderate",
        question: String.raw`A geometric sequence has $g_2 = 12$ and $g_5 = 40.5$. What is $g_8$, to the nearest thousandth?`,
        choices: ["$136.688$", "$69$", "$91.125$", "$1{,}556.956$"],
        why: [
          String.raw`From $g_2$ to $g_5$ is $3$ steps, so $r^{3} = \dfrac{40.5}{12} = 3.375$ and $r = 1.5$. Then $g_8 = 40.5(1.5)^{3} = 136.6875 \approx 136.688$.`,
          String.raw`$69$ treats the sequence as arithmetic: $d = \dfrac{40.5 - 12}{3} = 9.5$ and $40.5 + 3(9.5) = 69$. The sequence is geometric, so terms change by a common ratio.`,
          String.raw`$40.5(1.5)^{2} = 91.125$ is $g_7$. From $g_5$ to $g_8$ is $3$ steps.`,
          String.raw`$40.5(3.375)^{3} \approx 1{,}556.956$ uses $3.375$ as the ratio. $3.375$ is $r^{3}$, so the ratio is its cube root, $1.5$.`,
        ], answer: 0 },
      { id: "p201-m05", type: "mcq", skill: "u2", topic: "2.1", calc: true, difficulty: "difficult",
        question: String.raw`A geometric sequence has $a_1 = 0.5$ and $a_4 = 13.5$. What is the least value of $n$ for which $a_n > 10{,}000$?`,
        choices: ["$11$", "$10$", "$5$", "$2{,}309$"],
        why: [
          String.raw`$r^{3} = \dfrac{13.5}{0.5} = 27$, so $r = 3$ and $a_n = 0.5(3)^{n - 1}$. Then $a_{10} = 0.5(3)^{9} = 9{,}841.5$, which is not above $10{,}000$, and $a_{11} = 0.5(3)^{10} = 29{,}524.5$. The least $n$ is $11$.`,
          String.raw`$a_{10} = 9{,}841.5$ is still less than $10{,}000$. This answer comes from using the exponent $n$ instead of $n - 1$: $0.5(3)^{n} > 10{,}000$ first holds at $n = 10$.`,
          String.raw`$5$ uses $27$ as the ratio. $27$ is $r^{3}$, the factor over three steps, so $r = 3$.`,
          String.raw`$2{,}309$ treats the sequence as arithmetic with $d = \dfrac{13.5 - 0.5}{3} = \dfrac{13}{3}$. The terms grow by a common ratio, not a common difference.`,
        ], answer: 0 },
      { id: "p201-m06", type: "mcq", skill: "u2", topic: "2.1", calc: false, difficulty: "easy", set: "p201-s2",
        question: String.raw`If the pattern continues, what is $a_6$?`,
        choices: [String.raw`$-\frac{1}{4}$`, String.raw`$\frac{1}{4}$`, String.raw`$-\frac{1}{2}$`, "$1$"],
        why: [
          String.raw`The common ratio is $\dfrac{-8}{-16} = \dfrac{1}{2}$, so $a_5 = -\dfrac{1}{2}$ and $a_6 = -\dfrac{1}{4}$.`,
          String.raw`Multiplying by $\dfrac{1}{2}$ never changes the sign, so every term stays negative.`,
          String.raw`$-\dfrac{1}{2}$ is $a_5$, one term too early.`,
          String.raw`$1$ continues the last difference: $a_4 - a_3 = 1$, so $-1 + 2(1) = 1$. The terms share a common ratio, not a common difference.`,
        ], answer: 0 },
      { id: "p201-f1a", type: "frq", skill: "u2", topic: "2.1", calc: true, set: "p201-s3", part: "(a)",
        prompt: String.raw`Write an explicit formula for $a_n$.`,
        rows: [{ name: "Formula", earns: String.raw`$a_n = 120 + 15(n - 1)$, or an equivalent form such as $a_n = 105 + 15n$.` }],
        solution: String.raw`The sequence is arithmetic with $a_1 = 120$ and common difference $15$, so $a_n = 120 + 15(n - 1) = 105 + 15n$.` },
      { id: "p201-f1b", type: "frq", skill: "u2", topic: "2.1", calc: true, set: "p201-s3", part: "(b)",
        prompt: String.raw`In which year does the company first plant more than $400$ trees? Show the work that leads to your answer.`,
        rows: [{ name: "Year", earns: String.raw`Year $20$, with supporting work such as $a_{19} = 390$ and $a_{20} = 405$, or solving $120 + 15(n - 1) > 400$ to get $n > 19.667$.` }],
        solution: String.raw`$120 + 15(n - 1) > 400$ gives $n - 1 > 18.667$, so $n > 19.667$. The least whole number is $n = 20$: $a_{19} = 390$ and $a_{20} = 405$.` },
      { id: "p201-f1c", type: "frq", skill: "u2", topic: "2.1", calc: true, set: "p201-s3", part: "(c)",
        prompt: String.raw`Under a second plan, the company plants $120$ trees in year $1$, and in each year after that it plants $10\%$ more trees than the year before. Let $b_n$ be the number of trees planted in year $n$ under this plan. (i) Write an explicit formula for $b_n$. (ii) In year $15$, which plan plants more trees, and how many more?`,
        rows: [
          { name: "(i) Formula", earns: String.raw`$b_n = 120(1.1)^{n - 1}$.` },
          { name: "(ii) Comparison", earns: String.raw`The second plan, by $b_{15} - a_{15} = 455.700 - 330 = 125.700$ trees (about $126$).` },
        ],
        solution: String.raw`(i) The sequence is geometric with $b_1 = 120$ and ratio $1.1$, so $b_n = 120(1.1)^{n - 1}$. (ii) $a_{15} = 120 + 15(14) = 330$ and $b_{15} = 120(1.1)^{14} \approx 455.700$. The second plan plants more, by about $125.700$ trees.` },
    ],
  }],
};

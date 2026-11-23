// AP Precalculus topic quiz 4.14 (Unit 4 is taught but not on the AP exam). Keys and every number are computed in the
// writer's scratch scripts.

export const sets = {
  "p414-s1": {
    name: "Print books or e-books",
    label: "Context",
    intro: String.raw`Each month, every member of a library borrows either mostly print books or mostly e-books. Of the members who borrow mostly print books one month, $85\%$ borrow mostly print books the next month and the rest switch to e-books. Of the members who borrow mostly e-books one month, $25\%$ switch to print books the next month and the rest keep borrowing e-books. In a transition matrix $T$ for this situation, the columns give this month's choice (print, then e-book) and the rows give next month's choice (print, then e-book).`,
    sources: [{ title: "", blocks: [{ p: String.raw`Use this information for the questions in this set.` }] }],
  },
  "p414-s2": {
    name: "Farmers market or supermarket",
    label: "Free response",
    intro: String.raw`A town has $5{,}000$ households, and each week every household does its main shopping at either the farmers market (F) or the supermarket (S). Of the households that shop at the farmers market one week, $60\%$ shop there the next week. Of the households that shop at the supermarket one week, $10\%$ switch to the farmers market the next week. In week $0$, $1{,}200$ households shop at the farmers market and $3{,}800$ shop at the supermarket.`,
    sources: [{ title: "", blocks: [{ p: String.raw`A graphing calculator is allowed. Write each transition matrix with this week's store as the columns (F, then S) and next week's store as the rows (F, then S).` }] }],
  },
};

export default {
  forms: [{
    id: "p414",
    name: "Topic 4.14 Quiz: Matrices Modeling Contexts",
    group: "Unit 4: Functions Involving Parameters, Vectors, and Matrices",
    items: [
      { id: "p414-m01", type: "mcq", skill: "u4", topic: "4.14", calc: false, difficulty: "easy", set: "p414-s1",
        question: String.raw`Which matrix is $T$?`,
        choices: [String.raw`$\begin{bmatrix} 0.85 & 0.25 \\ 0.15 & 0.75 \end{bmatrix}$`, String.raw`$\begin{bmatrix} 0.85 & 0.15 \\ 0.25 & 0.75 \end{bmatrix}$`, String.raw`$\begin{bmatrix} 0.15 & 0.75 \\ 0.85 & 0.25 \end{bmatrix}$`, String.raw`$\begin{bmatrix} 0.85 & 0.75 \\ 0.15 & 0.25 \end{bmatrix}$`],
        why: [
          String.raw`Column $1$ is for print readers: $0.85$ stay with print and $0.15$ switch. Column $2$ is for e-book readers: $0.25$ switch to print and $0.75$ stay. Each column sums to $1$.`,
          String.raw`This puts this month's choice in the rows, so its rows sum to $1$. In $T$ the columns are this month's choice.`,
          String.raw`This swaps the rows, so the top row gives next month's e-book readers. The top row is next month's print readers.`,
          String.raw`Column $2$ has its entries in the wrong rows: $0.75$ is the chance an e-book reader stays with e-books, which belongs in row $2$.`,
        ], answer: 0 },
      { id: "p414-m02", type: "mcq", skill: "u4", topic: "4.14", calc: false, difficulty: "easy", set: "p414-s1",
        question: String.raw`This month, $60\%$ of the members borrow mostly print books and $40\%$ borrow mostly e-books. What percent of the members borrow mostly print books next month?`,
        choices: [String.raw`$61\%$`, String.raw`$57\%$`, String.raw`$39\%$`, String.raw`$49\%$`],
        why: [
          String.raw`$T\begin{bmatrix} 0.6 \\ 0.4 \end{bmatrix} = \begin{bmatrix} 0.85(0.6) + 0.25(0.4) \\ 0.15(0.6) + 0.75(0.4) \end{bmatrix} = \begin{bmatrix} 0.61 \\ 0.39 \end{bmatrix}$, so $61\%$ borrow mostly print books.`,
          String.raw`$57\% = 0.85(0.6) + 0.15(0.4)$ uses the first row of the matrix with this month's choice in the rows. The $0.15$ are print readers who leave print.`,
          String.raw`$39\%$ is the share who borrow mostly e-books next month.`,
          String.raw`$49\%$ multiplies $T$ by $\begin{bmatrix} 0.4 \\ 0.6 \end{bmatrix}$, with the starting shares in the reverse order.`,
        ], answer: 0 },
      { id: "p414-m03", type: "mcq", skill: "u4", topic: "4.14", calc: true, difficulty: "moderate", set: "p414-s1",
        question: String.raw`This month, $60\%$ of the members borrow mostly print books and $40\%$ borrow mostly e-books. To the nearest tenth of a percent, what percent of the members borrow mostly print books three months from now?`,
        choices: [String.raw`$62.0\%$`, String.raw`$61.6\%$`, String.raw`$62.2\%$`, String.raw`$54.1\%$`],
        why: [
          String.raw`Three months from now the state vector is $T^{3}\begin{bmatrix} 0.6 \\ 0.4 \end{bmatrix} = \begin{bmatrix} 0.6196 \\ 0.3804 \end{bmatrix}$, so about $62.0\%$ borrow mostly print books.`,
          String.raw`$61.6\%$ comes from $T^{2}\begin{bmatrix} 0.6 \\ 0.4 \end{bmatrix}$, two months from now. Three months need $T^{3}$.`,
          String.raw`$62.2\%$ comes from $T^{4}\begin{bmatrix} 0.6 \\ 0.4 \end{bmatrix}$, one month too many.`,
          String.raw`$54.1\%$ uses the matrix with this month's choice in the rows, $\begin{bmatrix} 0.85 & 0.15 \\ 0.25 & 0.75 \end{bmatrix}$. Its columns do not sum to $1$.`,
        ], answer: 0 },
      { id: "p414-m04", type: "mcq", skill: "u4", topic: "4.14", calc: true, difficulty: "difficult", set: "p414-s1",
        question: String.raw`If this pattern continues for many months, about what percent of the members will borrow mostly e-books each month in the long run?`,
        choices: [String.raw`$37.5\%$`, String.raw`$62.5\%$`, String.raw`$50\%$`, String.raw`$40\%$`],
        why: [
          String.raw`For a large power, such as $T^{100}$, both columns are about $\begin{bmatrix} 0.625 \\ 0.375 \end{bmatrix}$, so in the long run about $37.5\%$ borrow mostly e-books. Check: $T\begin{bmatrix} 0.625 \\ 0.375 \end{bmatrix} = \begin{bmatrix} 0.625 \\ 0.375 \end{bmatrix}$.`,
          String.raw`$62.5\%$ is the long-run share of print readers, the other entry of the steady-state vector.`,
          String.raw`An equal split is not steady: $T\begin{bmatrix} 0.5 \\ 0.5 \end{bmatrix} = \begin{bmatrix} 0.55 \\ 0.45 \end{bmatrix}$.`,
          String.raw`$40\%$ is this month's share. The shares change each month: $T\begin{bmatrix} 0.6 \\ 0.4 \end{bmatrix} = \begin{bmatrix} 0.61 \\ 0.39 \end{bmatrix}$.`,
        ], answer: 0 },
      { id: "p414-m05", type: "mcq", skill: "u4", topic: "4.14", calc: true, difficulty: "difficult",
        question: String.raw`Each week, every member of a gym trains either in the morning (M) or in the evening (E). The transition matrix is $G = \begin{bmatrix} 0.7 & 0.2 \\ 0.3 & 0.8 \end{bmatrix}$, with last week's time as the columns (M, then E) and this week's time as the rows (M, then E). This week, $46\%$ of the members train in the morning. What percent of the members trained in the morning last week?`,
        choices: [String.raw`$52\%$`, String.raw`$48\%$`, String.raw`$43\%$`, String.raw`$41.2\%$`],
        why: [
          String.raw`Last week's state is $G^{-1}\begin{bmatrix} 0.46 \\ 0.54 \end{bmatrix} = \begin{bmatrix} 0.52 \\ 0.48 \end{bmatrix}$, so $52\%$ trained in the morning. Check: $0.7(0.52) + 0.2(0.48) = 0.46$.`,
          String.raw`$48\%$ is the share who trained in the evening last week.`,
          String.raw`$43\%$ is $G\begin{bmatrix} 0.46 \\ 0.54 \end{bmatrix}$, next week's morning share. Going back a week uses $G^{-1}$.`,
          String.raw`$41.2\%$ uses the inverse of the transpose of $G$, which treats the rows as last week's time.`,
        ], answer: 0 },
      { id: "p414-m06", type: "mcq", skill: "u4", topic: "4.14", calc: false, difficulty: "easy",
        question: String.raw`A transition matrix has the current state as its columns and the next state as its rows. Which of the following could be a transition matrix?`,
        choices: [String.raw`$\begin{bmatrix} 0.4 & 1 \\ 0.6 & 0 \end{bmatrix}$`, String.raw`$\begin{bmatrix} 0.4 & 0.6 \\ 0.7 & 0.3 \end{bmatrix}$`, String.raw`$\begin{bmatrix} 1.2 & 0.3 \\ -0.2 & 0.7 \end{bmatrix}$`, String.raw`$\begin{bmatrix} 0.3 & 0.6 \\ 0.5 & 0.4 \end{bmatrix}$`],
        why: [
          String.raw`Every entry is a probability from $0$ to $1$, and each column sums to $1$: $0.4 + 0.6 = 1$ and $1 + 0 = 1$. Entries of $0$ and $1$ are allowed.`,
          String.raw`The rows sum to $1$, but the columns sum to $1.1$ and $0.9$. With the current state as columns, each column must sum to $1$.`,
          String.raw`The columns sum to $1$, but $1.2$ and $-0.2$ are not probabilities.`,
          String.raw`Every entry is between $0$ and $1$, but the first column sums to $0.8$.`,
        ], answer: 0 },
      { id: "p414-f1a", type: "frq", skill: "u4", topic: "4.14", calc: true, set: "p414-s2", part: "(a)",
        prompt: String.raw`Write the transition matrix $T$.`,
        rows: [
          { name: "Transition matrix", earns: String.raw`$T = \begin{bmatrix} 0.6 & 0.1 \\ 0.4 & 0.9 \end{bmatrix}$.` },
        ],
        solution: String.raw`Column $1$ is for farmers market households: $0.6$ stay and $0.4$ switch. Column $2$ is for supermarket households: $0.1$ switch and $0.9$ stay. $$T = \begin{bmatrix} 0.6 & 0.1 \\ 0.4 & 0.9 \end{bmatrix}$$` },
      { id: "p414-f1b", type: "frq", skill: "u4", topic: "4.14", calc: true, set: "p414-s2", part: "(b)",
        prompt: String.raw`Find the number of households that shop at the farmers market in week $2$. Show the work that leads to your answer.`,
        rows: [
          { name: "Week 2", earns: String.raw`$T^{2}\begin{bmatrix} 1200 \\ 3800 \end{bmatrix} = \begin{bmatrix} 1050 \\ 3950 \end{bmatrix}$, so $1{,}050$ households.` },
        ],
        solution: String.raw`Week $1$: $T\begin{bmatrix} 1200 \\ 3800 \end{bmatrix} = \begin{bmatrix} 720 + 380 \\ 480 + 3420 \end{bmatrix} = \begin{bmatrix} 1100 \\ 3900 \end{bmatrix}$. Week $2$: $T\begin{bmatrix} 1100 \\ 3900 \end{bmatrix} = \begin{bmatrix} 660 + 390 \\ 440 + 3510 \end{bmatrix} = \begin{bmatrix} 1050 \\ 3950 \end{bmatrix}$. In week $2$, $1{,}050$ households shop at the farmers market.` },
      { id: "p414-f1c", type: "frq", skill: "u4", topic: "4.14", calc: true, set: "p414-s2", part: "(c)",
        prompt: String.raw`(i) If this pattern continues for many weeks, about how many households will shop at the farmers market each week in the long run?
(ii) The same pattern held the week before week $0$. Find the number of households that shopped at the farmers market that week.`,
        rows: [
          { name: "C(i) Long run", earns: String.raw`About $1{,}000$ households, from a large power of $T$ times $\begin{bmatrix} 1200 \\ 3800 \end{bmatrix}$ or from solving $T\vec{x} = \vec{x}$.` },
          { name: "C(ii) Week before", earns: String.raw`$T^{-1}\begin{bmatrix} 1200 \\ 3800 \end{bmatrix} = \begin{bmatrix} 1400 \\ 3600 \end{bmatrix}$, so $1{,}400$ households.` },
        ],
        solution: String.raw`(i) $T^{100}\begin{bmatrix} 1200 \\ 3800 \end{bmatrix} \approx \begin{bmatrix} 1000 \\ 4000 \end{bmatrix}$. Equivalently, a steady state $\langle f, 5000 - f \rangle$ needs $0.4f = 0.1(5000 - f)$, so $f = 1000$. In the long run about $1{,}000$ households shop at the farmers market each week. (ii) $T^{-1} = \dfrac{1}{0.5}\begin{bmatrix} 0.9 & -0.1 \\ -0.4 & 0.6 \end{bmatrix}$, and $T^{-1}\begin{bmatrix} 1200 \\ 3800 \end{bmatrix} = \begin{bmatrix} 1400 \\ 3600 \end{bmatrix}$. Check: $0.6(1400) + 0.1(3600) = 1200$.` },
    ],
  }],
};

// AP Precalculus topic quiz 4.10 (Unit 4 is taught but not on the AP exam). Keys and every number are computed in the
// writer's scratch scripts.

export const sets = {
  "p410-s1": {
    name: "Two matrices, two orders",
    label: "Free response",
    intro: String.raw`Let $A = \begin{bmatrix} 2 & -1 \\ 0 & 3 \end{bmatrix}$ and $B = \begin{bmatrix} 1 & 4 \\ -2 & 1 \end{bmatrix}$.`,
    sources: [{ title: "", blocks: [{ p: String.raw`Answer each part. Show the work that leads to your answers.` }] }],
  },
};

export default {
  forms: [{
    id: "p410",
    name: "Topic 4.10 Quiz: Matrices",
    group: "Unit 4: Functions Involving Parameters, Vectors, and Matrices",
    items: [
      { id: "p410-m01", type: "mcq", skill: "u4", topic: "4.10", calc: false, difficulty: "easy",
        question: String.raw`Which of the following matrices has dimensions $3 \times 1$?`,
        choices: [String.raw`$\begin{bmatrix} 4 \\ 0 \\ -2 \end{bmatrix}$`, String.raw`$\begin{bmatrix} 4 & 0 & -2 \end{bmatrix}$`, String.raw`$\begin{bmatrix} 4 & 1 \\ 0 & 2 \\ -2 & 5 \end{bmatrix}$`, String.raw`$\begin{bmatrix} 4 & 0 & -2 \\ 1 & 2 & 5 \end{bmatrix}$`],
        why: [
          String.raw`Dimensions are rows by columns. This matrix has $3$ rows and $1$ column.`,
          String.raw`This matrix has $1$ row and $3$ columns, so it is $1 \times 3$, a row matrix.`,
          String.raw`This matrix has $3$ rows but $2$ columns, so it is $3 \times 2$.`,
          String.raw`This matrix has $2$ rows and $3$ columns, so it is $2 \times 3$.`,
        ], answer: 0 },
      { id: "p410-m02", type: "mcq", skill: "u4", topic: "4.10", calc: false, difficulty: "easy",
        question: String.raw`Matrix $A$ has dimensions $4 \times 1$ and matrix $B$ has dimensions $1 \times 3$. What are the dimensions of $AB$?`,
        choices: [String.raw`$4 \times 3$`, String.raw`$3 \times 4$`, String.raw`$1 \times 1$`, String.raw`$AB$ is not defined.`],
        why: [
          String.raw`The inner dimensions match ($1$ and $1$), so $AB$ is defined, and its dimensions are the outer ones: $4 \times 3$.`,
          String.raw`$3 \times 4$ lists the outer dimensions in the reverse order. $AB$ has the rows of $A$ and the columns of $B$.`,
          String.raw`$1 \times 1$ uses the inner dimensions. The inner dimensions must match, and the outer ones give the size of the product.`,
          String.raw`$AB$ is defined because the number of columns of $A$, $1$, equals the number of rows of $B$, $1$. It is $BA$ that is not defined.`,
        ], answer: 0 },
      { id: "p410-m03", type: "mcq", skill: "u4", topic: "4.10", calc: false, difficulty: "easy",
        question: String.raw`Let $A = \begin{bmatrix} 3 & -2 \\ 2 & 4 \end{bmatrix}$ and $B = \begin{bmatrix} 5 & 1 \\ -2 & 8 \end{bmatrix}$. What is the entry in row $2$, column $1$ of $AB$?`,
        choices: ["$2$", "$10$", "$-4$", "$11$"],
        why: [
          String.raw`Multiply row $2$ of $A$ by column $1$ of $B$: $2(5) + 4(-2) = 2$.`,
          String.raw`$10$ is the row $2$, column $1$ entry of $BA$: $(-2)(3) + 8(2)$. The order of the factors matters.`,
          String.raw`$-4$ multiplies only the row $2$, column $1$ entries of the two matrices, $2(-2)$. A product entry is a sum of products.`,
          String.raw`$11$ multiplies column $1$ of $A$ by column $1$ of $B$: $3(5) + 2(-2)$. Use row $2$ of $A$.`,
        ], answer: 0 },
      { id: "p410-m04", type: "mcq", skill: "u4", topic: "4.10", calc: false, difficulty: "moderate",
        question: String.raw`Let $P = \begin{bmatrix} 1 & 0 & 2 \\ -1 & 3 & 1 \end{bmatrix}$ and $Q = \begin{bmatrix} 2 & 1 \\ 0 & -1 \\ 4 & 3 \end{bmatrix}$. Which matrix is $PQ$?`,
        choices: [String.raw`$\begin{bmatrix} 10 & 7 \\ 2 & -1 \end{bmatrix}$`, String.raw`$\begin{bmatrix} 10 & 2 \\ 7 & -1 \end{bmatrix}$`, String.raw`$\begin{bmatrix} 10 & 7 \\ 2 & 5 \end{bmatrix}$`, String.raw`$\begin{bmatrix} 10 & 7 \\ -2 & -1 \end{bmatrix}$`],
        why: [
          String.raw`$PQ$ is $2 \times 2$. Row $1$ of $P$ gives $2 + 0 + 8 = 10$ and $1 + 0 + 6 = 7$. Row $2$ gives $-2 + 0 + 4 = 2$ and $-1 - 3 + 3 = -1$.`,
          String.raw`This matrix has the right entries in the wrong places: row $i$, column $j$ of $PQ$ comes from row $i$ of $P$ and column $j$ of $Q$, so $7$ belongs in row $1$, column $2$.`,
          String.raw`The entry $5$ treats $3(-1)$ as $+3$. Row $2$, column $2$ is $(-1)(1) + 3(-1) + 1(3) = -1$.`,
          String.raw`The entry $-2$ leaves out the product $1(4)$. Row $2$, column $1$ is $(-1)(2) + 3(0) + 1(4) = 2$.`,
        ], answer: 0 },
      { id: "p410-m05", type: "mcq", skill: "u4", topic: "4.10", calc: false, difficulty: "difficult",
        question: String.raw`Let $A = \begin{bmatrix} k & 1 \\ 2 & k \end{bmatrix}$, where $k$ is a constant. If $A^{2} = \begin{bmatrix} 11 & 6 \\ 12 & 11 \end{bmatrix}$, what is the value of $k$?`,
        choices: ["$3$", String.raw`$-3$ or $3$`, String.raw`$\sqrt{11}$`, String.raw`$\sqrt{10}$`],
        why: [
          String.raw`$A^{2} = AA = \begin{bmatrix} k^{2} + 2 & 2k \\ 4k & k^{2} + 2 \end{bmatrix}$. The row $1$, column $2$ entry gives $2k = 6$, so $k = 3$, and then $k^{2} + 2 = 11$ and $4k = 12$ also hold.`,
          String.raw`$k^{2} + 2 = 11$ gives $k = \pm 3$, but $k = -3$ makes $2k = -6$, not $6$. Every entry must match.`,
          String.raw`$\sqrt{11}$ squares each entry of $A$, so $k^{2} = 11$. A matrix power is a matrix product, not an entrywise square.`,
          String.raw`$\sqrt{10}$ multiplies row $1$ by row $1$, $k^{2} + 1 = 11$. The row $1$, column $1$ entry is row $1$ times column $1$, $k^{2} + 2$.`,
        ], answer: 0 },
      { id: "p410-m06", type: "mcq", skill: "u4", topic: "4.10", calc: true, difficulty: "easy",
        question: String.raw`One bag of Mix A holds $40$ grams of nuts, $25$ grams of raisins, and $15$ grams of chocolate. One bag of Mix B holds $30$ grams of nuts, $20$ grams of raisins, and $30$ grams of chocolate. Nuts, raisins, and chocolate have $6.07$, $2.99$, and $5.46$ calories per gram. The matrices are $M = \begin{bmatrix} 40 & 25 & 15 \\ 30 & 20 & 30 \end{bmatrix}$ and $C = \begin{bmatrix} 6.07 \\ 2.99 \\ 5.46 \end{bmatrix}$. How many calories are in one bag of Mix B?`,
        choices: ["$405.70$", "$399.45$", "$387.20$", "$805.15$"],
        why: [
          String.raw`$MC = \begin{bmatrix} 399.45 \\ 405.70 \end{bmatrix}$. Row $2$ is Mix B: $30(6.07) + 20(2.99) + 30(5.46) = 405.70$ calories.`,
          String.raw`$399.45$ is row $1$ of $MC$, the calories in one bag of Mix A.`,
          String.raw`$387.20 = 80 \times \frac{6.07 + 2.99 + 5.46}{3}$ uses the average of the three rates for all $80$ grams. Each ingredient's grams are multiplied by its own rate.`,
          String.raw`$805.15$ adds both entries of $MC$, the calories in one bag of each mix together.`,
        ], answer: 0 },
      { id: "p410-f1a", type: "frq", skill: "u4", topic: "4.10", calc: false, set: "p410-s1", part: "(a)",
        prompt: String.raw`Find $AB$.`,
        rows: [
          { name: "Product AB", earns: String.raw`$AB = \begin{bmatrix} 4 & 7 \\ -6 & 3 \end{bmatrix}$.` },
        ],
        solution: String.raw`Each entry is a row of $A$ times a column of $B$: $$AB = \begin{bmatrix} 2(1) + (-1)(-2) & 2(4) + (-1)(1) \\ 0(1) + 3(-2) & 0(4) + 3(1) \end{bmatrix} = \begin{bmatrix} 4 & 7 \\ -6 & 3 \end{bmatrix}$$` },
      { id: "p410-f1b", type: "frq", skill: "u4", topic: "4.10", calc: false, set: "p410-s1", part: "(b)",
        prompt: String.raw`Find $BA$. Is $AB = BA$? Give a reason for your answer.`,
        rows: [
          { name: "Product BA and comparison", earns: String.raw`$BA = \begin{bmatrix} 2 & 11 \\ -4 & 5 \end{bmatrix}$, and $AB \ne BA$ because their entries differ (for example, $4 \ne 2$ in row $1$, column $1$).` },
        ],
        solution: String.raw`$$BA = \begin{bmatrix} 1(2) + 4(0) & 1(-1) + 4(3) \\ -2(2) + 1(0) & -2(-1) + 1(3) \end{bmatrix} = \begin{bmatrix} 2 & 11 \\ -4 & 5 \end{bmatrix}$$ The row $1$, column $1$ entries are $4$ in $AB$ and $2$ in $BA$, so $AB \ne BA$. Matrix multiplication depends on the order of the factors.` },
      { id: "p410-f1c", type: "frq", skill: "u4", topic: "4.10", calc: false, set: "p410-s1", part: "(c)",
        prompt: String.raw`Find the values of $x$ and $y$ for which $A\begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 7 \\ 9 \end{bmatrix}$.`,
        rows: [
          { name: "Values", earns: String.raw`$x = 5$ and $y = 3$, with supporting work.` },
        ],
        solution: String.raw`$A\begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 2x - y \\ 3y \end{bmatrix}$, so $3y = 9$ and $2x - y = 7$. Then $y = 3$ and $2x = 10$, so $x = 5$.` },
    ],
  }],
};

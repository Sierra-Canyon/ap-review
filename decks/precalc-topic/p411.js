// AP Precalculus topic quiz 4.11 (Unit 4 is taught but not on the AP exam). Keys and every number are computed in the
// writer's scratch scripts.

export const sets = {
  "p411-s1": {
    name: "A triangle at the origin",
    label: "Free response",
    intro: String.raw`Triangle $OPQ$ has vertices $O(0, 0)$, $P(5, 2)$, and $Q(1, 4)$. Let $M = \begin{bmatrix} 5 & 1 \\ 2 & 4 \end{bmatrix}$, whose columns are the vectors $\overrightarrow{OP}$ and $\overrightarrow{OQ}$.`,
    sources: [{ title: "", blocks: [{ p: String.raw`Answer each part. Show the work that leads to your answers.` }] }],
  },
};

export default {
  forms: [{
    id: "p411",
    name: "Topic 4.11 Quiz: The Inverse and Determinant of a Matrix",
    group: "Unit 4: Functions Involving Parameters, Vectors, and Matrices",
    items: [
      { id: "p411-m01", type: "mcq", skill: "u4", topic: "4.11", calc: false, difficulty: "easy",
        question: String.raw`What is the determinant of $\begin{bmatrix} 4 & 3 \\ 2 & 3 \end{bmatrix}$?`,
        choices: ["$6$", "$18$", "$-6$", "$12$"],
        why: [
          String.raw`$\det = ad - bc = 4(3) - 3(2) = 12 - 6 = 6$.`,
          String.raw`$18 = 12 + 6$ computes $ad + bc$. The determinant subtracts $bc$.`,
          String.raw`$-6$ computes $bc - ad$, the subtraction in the reverse order.`,
          String.raw`$12$ is only $ad$. The product $bc = 6$ must be subtracted.`,
        ], answer: 0 },
      { id: "p411-m02", type: "mcq", skill: "u4", topic: "4.11", calc: false, difficulty: "easy",
        question: String.raw`Let $A = \begin{bmatrix} 4 & 1 \\ 7 & 2 \end{bmatrix}$. Which matrix $B$ satisfies $AB = I$, where $I$ is the $2 \times 2$ identity matrix?`,
        choices: [String.raw`$\begin{bmatrix} 2 & -1 \\ -7 & 4 \end{bmatrix}$`, String.raw`$\begin{bmatrix} 2 & 1 \\ 7 & 4 \end{bmatrix}$`, String.raw`$\begin{bmatrix} -4 & -1 \\ -7 & -2 \end{bmatrix}$`, String.raw`$\begin{bmatrix} 4 & 7 \\ 1 & 2 \end{bmatrix}$`],
        why: [
          String.raw`$\det A = 8 - 7 = 1$, so $A^{-1} = \begin{bmatrix} 2 & -1 \\ -7 & 4 \end{bmatrix}$. Check: $AB = \begin{bmatrix} 8 - 7 & -4 + 4 \\ 14 - 14 & -7 + 8 \end{bmatrix} = I$.`,
          String.raw`This swaps the diagonal entries but does not change the signs of the other two. Then $AB = \begin{bmatrix} 15 & 8 \\ 28 & 15 \end{bmatrix}$.`,
          String.raw`This is $-A$, the additive inverse. $A(-A)$ is not $I$.`,
          String.raw`This is the transpose of $A$. Then $AB = \begin{bmatrix} 17 & 30 \\ 30 & 53 \end{bmatrix}$.`,
        ], answer: 0 },
      { id: "p411-m03", type: "mcq", skill: "u4", topic: "4.11", calc: false, difficulty: "moderate",
        question: String.raw`What is the inverse of $\begin{bmatrix} 2 & 5 \\ -1 & 4 \end{bmatrix}$?`,
        choices: [String.raw`$\dfrac{1}{13}\begin{bmatrix} 4 & -5 \\ 1 & 2 \end{bmatrix}$`, String.raw`$\begin{bmatrix} 4 & -5 \\ 1 & 2 \end{bmatrix}$`, String.raw`$\dfrac{1}{3}\begin{bmatrix} 4 & -5 \\ 1 & 2 \end{bmatrix}$`, String.raw`$\dfrac{1}{13}\begin{bmatrix} 4 & 5 \\ -1 & 2 \end{bmatrix}$`],
        why: [
          String.raw`$\det = 2(4) - 5(-1) = 13$. Swap the diagonal entries, change the signs of the other two, and divide by $13$: $\dfrac{1}{13}\begin{bmatrix} 4 & -5 \\ 1 & 2 \end{bmatrix}$.`,
          String.raw`This leaves out the factor $\dfrac{1}{13}$. Its product with the matrix is $13I$, not $I$.`,
          String.raw`The $3$ comes from $8 - 5$, which drops the sign of $-1$. The determinant is $8 - (-5) = 13$.`,
          String.raw`This swaps the diagonal but does not change the signs of $5$ and $-1$.`,
        ], answer: 0 },
      { id: "p411-m04", type: "mcq", skill: "u4", topic: "4.11", calc: false, difficulty: "moderate",
        question: String.raw`For which values of $k$ does the matrix $\begin{bmatrix} k & 4 \\ k & k \end{bmatrix}$ have no inverse?`,
        choices: [String.raw`$k = 0$ or $k = 4$`, String.raw`$k = 4$ only`, String.raw`$k = -2$ or $k = 2$`, String.raw`$k = -4$ or $k = 0$`],
        why: [
          String.raw`A $2 \times 2$ matrix has no inverse when its determinant is $0$: $k \cdot k - 4k = k(k - 4) = 0$, so $k = 0$ or $k = 4$.`,
          String.raw`Dividing $k^{2} - 4k = 0$ by $k$ loses the solution $k = 0$. At $k = 0$ the matrix is $\begin{bmatrix} 0 & 4 \\ 0 & 0 \end{bmatrix}$, with determinant $0$.`,
          String.raw`These solve $k^{2} - 4 = 0$. The product $bc$ is $4k$, not $4$.`,
          String.raw`These solve $k^{2} + 4k = 0$, which adds $bc$. The determinant is $ad - bc$.`,
        ], answer: 0 },
      { id: "p411-m05", type: "mcq", skill: "u4", topic: "4.11", calc: true, difficulty: "difficult",
        question: String.raw`A parking lot is shaped like a parallelogram. On a grid measured in meters, one corner is at the origin and the two sides from that corner are the vectors $\langle 18.4, 3.1 \rangle$ and $\langle 5.6, 12.7 \rangle$. What is the area of the parking lot, in square meters?`,
        choices: ["$216.32$", "$251.04$", "$108.16$", "$233.68$"],
        why: [
          String.raw`The area is $\left| \det \begin{bmatrix} 18.4 & 5.6 \\ 3.1 & 12.7 \end{bmatrix} \right| = |18.4(12.7) - 5.6(3.1)| = |233.68 - 17.36| = 216.32$ square meters.`,
          String.raw`$251.04 = 233.68 + 17.36$ adds the two products. The determinant subtracts them.`,
          String.raw`$108.16$ is half the determinant, the area of the triangle formed by the two sides. The parallelogram has twice that area.`,
          String.raw`$233.68$ is only $18.4 \times 12.7$. The product $5.6 \times 3.1$ must be subtracted.`,
        ], answer: 0 },
      { id: "p411-m06", type: "mcq", skill: "u4", topic: "4.11", calc: false, difficulty: "moderate",
        question: String.raw`Let $A = \begin{bmatrix} 2 & 3 \\ 2 & 5 \end{bmatrix}$. Which of the following statements are true?
I. $\det A = 16$
II. $\begin{bmatrix} 5 & -3 \\ -2 & 2 \end{bmatrix} A = I$
III. $A^{-1} = \dfrac{1}{4}\begin{bmatrix} 5 & -3 \\ -2 & 2 \end{bmatrix}$`,
        choices: ["III only", "I and III only", "II and III only", "I, II, and III"],
        why: [
          String.raw`$\det A = 2(5) - 3(2) = 4$, so I is false. The matrix in II times $A$ is $\begin{bmatrix} 10 - 6 & 15 - 15 \\ -4 + 4 & -6 + 10 \end{bmatrix} = 4I$, so II is false. Dividing it by $\det A = 4$ gives $A^{-1}$, so III is true.`,
          String.raw`I is false: $16 = 10 + 6$ computes $ad + bc$. The determinant is $ad - bc = 10 - 6 = 4$.`,
          String.raw`II is false: swapping the diagonal and changing the signs of the other entries gives a matrix whose product with $A$ is $(\det A)I = 4I$. The factor $\dfrac{1}{4}$ is needed to get $I$.`,
          String.raw`I and II are false: $\det A = 10 - 6 = 4$, not $10 + 6$, and the matrix in II times $A$ is $4I$, not $I$.`,
        ], answer: 0 },
      { id: "p411-f1a", type: "frq", skill: "u4", topic: "4.11", calc: false, set: "p411-s1", part: "(a)",
        prompt: String.raw`(i) Find $\det M$.
(ii) Find the area of triangle $OPQ$.`,
        rows: [
          { name: "A(i) Determinant", earns: String.raw`$\det M = 5(4) - 1(2) = 18$.` },
          { name: "A(ii) Area", earns: String.raw`The area of triangle $OPQ$ is $\dfrac{1}{2}|\det M| = 9$.` },
        ],
        solution: String.raw`(i) $\det M = 5(4) - 1(2) = 18$. (ii) The parallelogram with sides $\overrightarrow{OP}$ and $\overrightarrow{OQ}$ has area $|\det M| = 18$. Triangle $OPQ$ is half of it, so its area is $9$.` },
      { id: "p411-f1b", type: "frq", skill: "u4", topic: "4.11", calc: false, set: "p411-s1", part: "(b)",
        prompt: String.raw`Find $M^{-1}$.`,
        rows: [
          { name: "Inverse", earns: String.raw`$M^{-1} = \dfrac{1}{18}\begin{bmatrix} 4 & -1 \\ -2 & 5 \end{bmatrix}$, or an equivalent matrix.` },
        ],
        solution: String.raw`$M^{-1} = \dfrac{1}{\det M}\begin{bmatrix} 4 & -1 \\ -2 & 5 \end{bmatrix} = \begin{bmatrix} \frac{2}{9} & -\frac{1}{18} \\ -\frac{1}{9} & \frac{5}{18} \end{bmatrix}$.` },
      { id: "p411-f1c", type: "frq", skill: "u4", topic: "4.11", calc: false, set: "p411-s1", part: "(c)",
        prompt: String.raw`Use $M^{-1}$ to find the vector $\vec{v}$ for which $M\vec{v} = \begin{bmatrix} 3 \\ -6 \end{bmatrix}$.`,
        rows: [
          { name: "Vector", earns: String.raw`$\vec{v} = M^{-1}\begin{bmatrix} 3 \\ -6 \end{bmatrix} = \begin{bmatrix} 1 \\ -2 \end{bmatrix}$, with supporting work.` },
        ],
        solution: String.raw`$$\vec{v} = M^{-1}\begin{bmatrix} 3 \\ -6 \end{bmatrix} = \frac{1}{18}\begin{bmatrix} 4(3) + (-1)(-6) \\ -2(3) + 5(-6) \end{bmatrix} = \frac{1}{18}\begin{bmatrix} 18 \\ -36 \end{bmatrix} = \begin{bmatrix} 1 \\ -2 \end{bmatrix}$$ Check: $M\begin{bmatrix} 1 \\ -2 \end{bmatrix} = \begin{bmatrix} 5 - 2 \\ 2 - 8 \end{bmatrix} = \begin{bmatrix} 3 \\ -6 \end{bmatrix}$.` },
    ],
  }],
};

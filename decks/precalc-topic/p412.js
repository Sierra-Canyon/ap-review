// AP Precalculus topic quiz 4.12 (Unit 4 is taught but not on the AP exam). Keys and every number are computed in the
// writer's scratch scripts.
import { graph } from "../../plot.js";

// An arrow from (x1, y1) to (x2, y2) as three segments (shaft and two head strokes). The window uses the same scale on
// both axes, so the heads look the same in every direction.
function arrow(x1, y1, x2, y2, h = 0.35) {
  const a = Math.atan2(y2 - y1, x2 - x1), s = 0.45;
  return [
    [x1, y1, x2, y2],
    [x2, y2, x2 - h * Math.cos(a - s), y2 - h * Math.sin(a - s)],
    [x2, y2, x2 - h * Math.cos(a + s), y2 - h * Math.sin(a + s)],
  ];
}

export const sets = {
  "p412-s1": {
    name: "Two vectors from the origin",
    label: "Diagram",
    intro: String.raw`Vectors $\vec{u}$ and $\vec{w}$ are drawn from the origin on the grid below. The head of $\vec{u}$ is at $(2, 1)$ and the head of $\vec{w}$ is at $(-1, 3)$.`,
    sources: [{ title: "", blocks: [{ svg: graph({
      x: [-3, 4], y: [-1, 4], step: 1, xname: "x", yname: "y", width: 340, height: 260,
      segments: [...arrow(0, 0, 2, 1), ...arrow(0, 0, -1, 3)],
      dots: [[0, 0, "closed"]],
      labels: [[1.1, 0.95, "u"], [-1.05, 1.6, "w"]],
      alt: "A coordinate grid from -3 to 4 horizontally and -1 to 4 vertically. Two arrows start at the origin. Arrow u points to (2, 1). Arrow w points to (-1, 3).",
    }) }] }],
  },
  "p412-s2": {
    name: "A transformation and its matrix",
    label: "Free response",
    intro: String.raw`The linear transformation $T$ is defined by $T(x, y) = \langle 2x - y, x + 3y \rangle$.`,
    sources: [{ title: "", blocks: [{ p: String.raw`Answer each part. Show the work that leads to your answers.` }] }],
  },
};

export default {
  forms: [{
    id: "p412",
    name: "Topic 4.12 Quiz: Linear Transformations and Matrices",
    group: "Unit 4: Functions Involving Parameters, Vectors, and Matrices",
    items: [
      { id: "p412-m01", type: "mcq", skill: "u4", topic: "4.12", calc: false, difficulty: "easy",
        question: String.raw`Which of the following is NOT a linear transformation from $\mathbb{R}^{2}$ to $\mathbb{R}^{2}$?`,
        choices: [String.raw`$L(x, y) = \langle x + 2, y \rangle$`, String.raw`$L(x, y) = \langle 3x, -y \rangle$`, String.raw`$L(x, y) = \langle 0, x - y \rangle$`, String.raw`$L(x, y) = \langle y, x \rangle$`],
        why: [
          String.raw`A linear transformation has the form $\langle ax + by, cx + dy \rangle$ and sends $\langle 0, 0 \rangle$ to $\langle 0, 0 \rangle$. Here $L(0, 0) = \langle 2, 0 \rangle$, so this translation is not linear.`,
          String.raw`$\langle 3x, -y \rangle = \langle 3x + 0y, 0x - 1y \rangle$ has the linear form, with $b = c = 0$.`,
          String.raw`A component of $0$ is allowed: $\langle 0x + 0y, 1x - 1y \rangle$ has the linear form.`,
          String.raw`$\langle y, x \rangle = \langle 0x + 1y, 1x + 0y \rangle$ has the linear form. It reflects the plane across the line $y = x$.`,
        ], answer: 0 },
      { id: "p412-m02", type: "mcq", skill: "u4", topic: "4.12", calc: false, difficulty: "easy",
        question: String.raw`The linear transformation $L$ is given by $L(\vec{v}) = A\vec{v}$, where $A = \begin{bmatrix} 2 & -3 \\ 1 & 5 \end{bmatrix}$ and $\vec{v}$ is written as a column. Which of the following is $L(x, y)$?`,
        choices: [String.raw`$\langle 2x - 3y, x + 5y \rangle$`, String.raw`$\langle 2x + y, -3x + 5y \rangle$`, String.raw`$\langle -3x + 2y, 5x + y \rangle$`, String.raw`$\langle 2x + 5y, -3x + y \rangle$`],
        why: [
          String.raw`$\begin{bmatrix} 2 & -3 \\ 1 & 5 \end{bmatrix}\begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 2x - 3y \\ x + 5y \end{bmatrix}$. Each row of $A$ gives one component.`,
          String.raw`This reads the columns of $A$ as the components. Each component comes from a row of $A$ times $\begin{bmatrix} x \\ y \end{bmatrix}$.`,
          String.raw`This pairs the first entry of each row with $y$ and the second with $x$. The first column of $A$ multiplies $x$.`,
          String.raw`This reads the diagonals of $A$: $2$ and $5$ in the first component, $-3$ and $1$ in the second. The first component is row $1$ times $\begin{bmatrix} x \\ y \end{bmatrix}$, $2x - 3y$.`,
        ], answer: 0 },
      { id: "p412-m03", type: "mcq", skill: "u4", topic: "4.12", calc: false, difficulty: "easy", set: "p412-s1",
        question: String.raw`Which matrix has $\vec{u}$ as its first column and $\vec{w}$ as its second column?`,
        choices: [String.raw`$\begin{bmatrix} 2 & -1 \\ 1 & 3 \end{bmatrix}$`, String.raw`$\begin{bmatrix} 2 & 1 \\ -1 & 3 \end{bmatrix}$`, String.raw`$\begin{bmatrix} -1 & 2 \\ 3 & 1 \end{bmatrix}$`, String.raw`$\begin{bmatrix} 2 & 1 & -1 & 3 \end{bmatrix}$`],
        why: [
          String.raw`$\vec{u} = \langle 2, 1 \rangle$ and $\vec{w} = \langle -1, 3 \rangle$, since both start at the origin. Written as columns, they give $\begin{bmatrix} 2 & -1 \\ 1 & 3 \end{bmatrix}$.`,
          String.raw`This writes the vectors as rows. Each vector is a column.`,
          String.raw`This puts $\vec{w}$ first. $\vec{u}$ is the first column.`,
          String.raw`This $1 \times 4$ matrix lists all four components in one row. Two vectors in the plane form a $2 \times 2$ matrix, one vector per column.`,
        ], answer: 0 },
      { id: "p412-m04", type: "mcq", skill: "u4", topic: "4.12", calc: false, difficulty: "moderate", set: "p412-s1",
        question: String.raw`The linear transformation $T$ is given by $T(\vec{v}) = A\vec{v}$, where $A = \begin{bmatrix} 1 & 2 \\ -1 & 1 \end{bmatrix}$. Which matrix has $T(\vec{u})$ as its first column and $T(\vec{w})$ as its second column?`,
        choices: [String.raw`$\begin{bmatrix} 4 & 5 \\ -1 & 4 \end{bmatrix}$`, String.raw`$\begin{bmatrix} 3 & 3 \\ -2 & 5 \end{bmatrix}$`, String.raw`$\begin{bmatrix} 0 & 7 \\ -3 & 2 \end{bmatrix}$`, String.raw`$\begin{bmatrix} 2 & -2 \\ -1 & 3 \end{bmatrix}$`],
        why: [
          String.raw`$A\begin{bmatrix} 2 & -1 \\ 1 & 3 \end{bmatrix} = \begin{bmatrix} 2 + 2 & -1 + 6 \\ -2 + 1 & 1 + 3 \end{bmatrix} = \begin{bmatrix} 4 & 5 \\ -1 & 4 \end{bmatrix}$. Each column is $A$ times one input vector.`,
          String.raw`This is $\begin{bmatrix} 2 & -1 \\ 1 & 3 \end{bmatrix}A$, the product in the reverse order. $T$ multiplies by $A$ on the left.`,
          String.raw`This is $A\begin{bmatrix} 2 & 1 \\ -1 & 3 \end{bmatrix}$, which writes the inputs as rows. The inputs are the columns of the right factor.`,
          String.raw`This multiplies matching entries of $A$ and the input matrix. A matrix product multiplies rows by columns.`,
        ], answer: 0 },
      { id: "p412-m05", type: "mcq", skill: "u4", topic: "4.12", calc: false, difficulty: "difficult",
        question: String.raw`A linear transformation $T(x, y) = \langle ax + by, cx + dy \rangle$ satisfies $T(1, 1) = \langle 5, -2 \rangle$ and $T(1, -1) = \langle 1, 4 \rangle$. What is $T(3, 1)$?`,
        choices: [String.raw`$\langle 11, 0 \rangle$`, String.raw`$\langle 6, 2 \rangle$`, String.raw`$\langle 16, -2 \rangle$`, String.raw`$\langle 9, -8 \rangle$`],
        why: [
          String.raw`$a + b = 5$ and $a - b = 1$ give $a = 3$, $b = 2$. $c + d = -2$ and $c - d = 4$ give $c = 1$, $d = -3$. Then $T(3, 1) = \langle 9 + 2, 3 - 3 \rangle = \langle 11, 0 \rangle$. Also, $\langle 3, 1 \rangle = 2\langle 1, 1 \rangle + \langle 1, -1 \rangle$, so $T(3, 1) = 2\langle 5, -2 \rangle + \langle 1, 4 \rangle$.`,
          String.raw`$\langle 6, 2 \rangle$ adds the two given outputs. $\langle 3, 1 \rangle$ is $2\langle 1, 1 \rangle + 1\langle 1, -1 \rangle$, so the first output counts twice.`,
          String.raw`$\langle 16, -2 \rangle = 3\langle 5, -2 \rangle + \langle 1, 4 \rangle$ uses the components of $\langle 3, 1 \rangle$ as the weights. The weights are $2$ and $1$.`,
          String.raw`$\langle 9, -8 \rangle$ comes from swapping the constants, $a = 2$, $b = 3$, $c = -3$, $d = 1$. Then $a - b = -1$, not $1$.`,
        ], answer: 0 },
      { id: "p412-m06", type: "mcq", skill: "u4", topic: "4.12", calc: false, difficulty: "easy",
        question: String.raw`Let $A = \begin{bmatrix} 0.8 & -0.6 \\ 0.6 & 0.8 \end{bmatrix}$. The linear transformation $L(\vec{v}) = A\vec{v}$ is applied to $\vec{v} = \langle 10, -5 \rangle$. What is $L(\vec{v})$?`,
        choices: [String.raw`$\langle 11, 2 \rangle$`, String.raw`$\langle 5, -10 \rangle$`, String.raw`$\langle 5, 10 \rangle$`, String.raw`$\langle 8, -4 \rangle$`],
        why: [
          String.raw`$A\begin{bmatrix} 10 \\ -5 \end{bmatrix} = \begin{bmatrix} 0.8(10) + (-0.6)(-5) \\ 0.6(10) + 0.8(-5) \end{bmatrix} = \begin{bmatrix} 8 + 3 \\ 6 - 4 \end{bmatrix} = \begin{bmatrix} 11 \\ 2 \end{bmatrix}$.`,
          String.raw`$\langle 5, -10 \rangle$ multiplies the row vector $\begin{bmatrix} 10 & -5 \end{bmatrix}$ by $A$. The vector is a column on the right of $A$.`,
          String.raw`$\langle 5, 10 \rangle$ drops the negative sign of $-5$. Then $(-0.6)(5) = -3$ and $0.8(5) = 4$ get the wrong signs.`,
          String.raw`$\langle 8, -4 \rangle$ uses only the diagonal entries of $A$. Each component adds two products.`,
        ], answer: 0 },
      { id: "p412-f1a", type: "frq", skill: "u4", topic: "4.12", calc: false, set: "p412-s2", part: "(a)",
        prompt: String.raw`(i) Find the matrix $A$ for which $T(\vec{v}) = A\vec{v}$, where $\vec{v}$ is written as a column.
(ii) Find $T(-1, 4)$.`,
        rows: [
          { name: "A(i) Matrix", earns: String.raw`$A = \begin{bmatrix} 2 & -1 \\ 1 & 3 \end{bmatrix}$.` },
          { name: "A(ii) Output", earns: String.raw`$T(-1, 4) = \langle -6, 11 \rangle$.` },
        ],
        solution: String.raw`(i) The coefficients of $x$ and $y$ in each component form a row: $A = \begin{bmatrix} 2 & -1 \\ 1 & 3 \end{bmatrix}$. (ii) $A\begin{bmatrix} -1 \\ 4 \end{bmatrix} = \begin{bmatrix} -2 - 4 \\ -1 + 12 \end{bmatrix} = \begin{bmatrix} -6 \\ 11 \end{bmatrix}$, so $T(-1, 4) = \langle -6, 11 \rangle$.` },
      { id: "p412-f1b", type: "frq", skill: "u4", topic: "4.12", calc: false, set: "p412-s2", part: "(b)",
        prompt: String.raw`Find the vector $\langle x, y \rangle$ for which $T(x, y) = \langle 7, 7 \rangle$.`,
        rows: [
          { name: "Input vector", earns: String.raw`$\langle x, y \rangle = \langle 4, 1 \rangle$, with supporting work.` },
        ],
        solution: String.raw`Solve $2x - y = 7$ and $x + 3y = 7$. From the first equation, $y = 2x - 7$. Then $x + 6x - 21 = 7$, so $x = 4$ and $y = 1$. Check: $T(4, 1) = \langle 8 - 1, 4 + 3 \rangle = \langle 7, 7 \rangle$.` },
      { id: "p412-f1c", type: "frq", skill: "u4", topic: "4.12", calc: false, set: "p412-s2", part: "(c)",
        prompt: String.raw`The function $S$ is defined by $S(x, y) = \langle 2x - y + 1, x + 3y \rangle$. Is $S$ a linear transformation? Give a reason for your answer.`,
        rows: [
          { name: "Conclusion with reason", earns: String.raw`No, because $S(0, 0) = \langle 1, 0 \rangle$, and a linear transformation maps $\langle 0, 0 \rangle$ to $\langle 0, 0 \rangle$.` },
        ],
        solution: String.raw`$S(0, 0) = \langle 0 - 0 + 1, 0 \rangle = \langle 1, 0 \rangle$. Every linear transformation $\langle ax + by, cx + dy \rangle$ sends $\langle 0, 0 \rangle$ to $\langle 0, 0 \rangle$, so $S$ is not linear. The constant $1$ makes $S$ the transformation $T$ followed by a translation.` },
    ],
  }],
};

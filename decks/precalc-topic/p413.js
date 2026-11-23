// AP Precalculus topic quiz 4.13 (Unit 4 is taught but not on the AP exam). Keys and every number are computed in the
// writer's scratch scripts.
import { graph } from "../../plot.js";

export const sets = {
  "p413-s1": {
    name: "A trapezoid and a transformation",
    label: "Graph",
    intro: String.raw`Trapezoid $OABC$ has vertices $O(0, 0)$, $A(5, 0)$, $B(4, 3)$, and $C(1, 3)$, as shown below. The linear transformation $L$ is given by $L(\vec{v}) = M\vec{v}$, where $M = \begin{bmatrix} 1 & 3 \\ -2 & 1 \end{bmatrix}$ and $\vec{v}$ is written as a column.`,
    sources: [{ title: "", blocks: [{ svg: graph({
      x: [-1, 6], y: [-1, 4], step: 1, xname: "x", yname: "y", width: 340, height: 260,
      segments: [[0, 0, 5, 0], [5, 0, 4, 3], [4, 3, 1, 3], [1, 3, 0, 0]],
      dots: [[0, 0, "closed"], [5, 0, "closed"], [4, 3, "closed"], [1, 3, "closed"]],
      labels: [[-0.45, -0.5, "O"], [5.1, 0.25, "A"], [4.1, 3.25, "B"], [0.6, 3.25, "C"]],
      alt: "Trapezoid OABC on a coordinate grid. O is at the origin, A is at (5, 0) on the x-axis, B is at (4, 3), and C is at (1, 3). Sides OA and CB are horizontal.",
    }) }] }],
  },
  "p413-s2": {
    name: "A transformation, a reflection, and their composition",
    label: "Free response",
    intro: String.raw`The linear transformation $F$ is defined by $F(x, y) = \langle x + 2y, 3x + 4y \rangle$. The linear transformation $G$ reflects every vector across the $x$-axis, so $G(x, y) = \langle x, -y \rangle$.`,
    sources: [{ title: "", blocks: [{ p: String.raw`Answer each part. Show the work that leads to your answers.` }] }],
  },
};

export default {
  forms: [{
    id: "p413",
    name: "Topic 4.13 Quiz: Matrices as Functions",
    group: "Unit 4: Functions Involving Parameters, Vectors, and Matrices",
    items: [
      { id: "p413-m01", type: "mcq", skill: "u4", topic: "4.13", calc: false, difficulty: "easy",
        question: String.raw`A linear transformation $L$ satisfies $L(\langle 1, 0 \rangle) = \langle 2, 5 \rangle$ and $L(\langle 0, 1 \rangle) = \langle -3, 1 \rangle$. Which matrix $A$ gives $L(\vec{v}) = A\vec{v}$, where $\vec{v}$ is written as a column?`,
        choices: [String.raw`$\begin{bmatrix} 2 & -3 \\ 5 & 1 \end{bmatrix}$`, String.raw`$\begin{bmatrix} 2 & 5 \\ -3 & 1 \end{bmatrix}$`, String.raw`$\begin{bmatrix} -3 & 2 \\ 1 & 5 \end{bmatrix}$`, String.raw`$\begin{bmatrix} 5 & 1 \\ 2 & -3 \end{bmatrix}$`],
        why: [
          String.raw`The first column of $A$ is $L(\langle 1, 0 \rangle)$ and the second column is $L(\langle 0, 1 \rangle)$, so $A = \begin{bmatrix} 2 & -3 \\ 5 & 1 \end{bmatrix}$.`,
          String.raw`This writes the images as rows. Then $A\begin{bmatrix} 1 \\ 0 \end{bmatrix} = \begin{bmatrix} 2 \\ -3 \end{bmatrix}$, not $\langle 2, 5 \rangle$.`,
          String.raw`This puts the image of $\langle 0, 1 \rangle$ in the first column. The first column must be the image of $\langle 1, 0 \rangle$.`,
          String.raw`This writes each image with its components in the reverse order, so $A\begin{bmatrix} 1 \\ 0 \end{bmatrix} = \begin{bmatrix} 5 \\ 2 \end{bmatrix}$.`,
        ], answer: 0 },
      { id: "p413-m02", type: "mcq", skill: "u4", topic: "4.13", calc: false, difficulty: "easy",
        question: String.raw`The vector $\langle 4, -2 \rangle$ is rotated $\dfrac{\pi}{2}$ radians clockwise about the origin. What is the resulting vector?`,
        choices: [String.raw`$\langle -2, -4 \rangle$`, String.raw`$\langle 2, 4 \rangle$`, String.raw`$\langle -4, 2 \rangle$`, String.raw`$\langle -2, 4 \rangle$`],
        why: [
          String.raw`A clockwise rotation by $\frac{\pi}{2}$ is a rotation by $-\frac{\pi}{2}$, with matrix $\begin{bmatrix} 0 & 1 \\ -1 & 0 \end{bmatrix}$. It sends $\langle 4, -2 \rangle$ to $\langle -2, -4 \rangle$.`,
          String.raw`$\langle 2, 4 \rangle$ is the counterclockwise rotation, with matrix $\begin{bmatrix} 0 & -1 \\ 1 & 0 \end{bmatrix}$.`,
          String.raw`$\langle -4, 2 \rangle$ is the rotation by $\pi$, which only changes both signs.`,
          String.raw`$\langle -2, 4 \rangle$ only swaps the components, which reflects the vector across the line $y = x$.`,
        ], answer: 0 },
      { id: "p413-m03", type: "mcq", skill: "u4", topic: "4.13", calc: false, difficulty: "moderate", set: "p413-s1",
        question: String.raw`What is the area of the image of trapezoid $OABC$ under $L$?`,
        choices: ["$84$", "$60$", "$7$", "$19$"],
        why: [
          String.raw`The trapezoid has area $\frac{1}{2}(5 + 3)(3) = 12$. A linear transformation multiplies areas by $|\det M| = |1(1) - 3(-2)| = 7$, so the image has area $12 \times 7 = 84$.`,
          String.raw`$60$ uses $|ad + bc| = |1 - 6| = 5$. The determinant is $ad - bc = 1 + 6 = 7$.`,
          String.raw`$7$ is the area of the image of the unit square. It still has to be multiplied by the trapezoid's area, $12$.`,
          String.raw`$19 = 12 + 7$ adds the determinant to the area. Areas are multiplied by $|\det M|$.`,
        ], answer: 0 },
      { id: "p413-m04", type: "mcq", skill: "u4", topic: "4.13", calc: false, difficulty: "easy", set: "p413-s1",
        question: String.raw`What is the image of vertex $B$ under $L$?`,
        choices: [String.raw`$(13, -5)$`, String.raw`$(-2, 15)$`, String.raw`$(15, -2)$`, String.raw`$(13, 11)$`],
        why: [
          String.raw`$M\begin{bmatrix} 4 \\ 3 \end{bmatrix} = \begin{bmatrix} 1(4) + 3(3) \\ -2(4) + 1(3) \end{bmatrix} = \begin{bmatrix} 13 \\ -5 \end{bmatrix}$.`,
          String.raw`$(-2, 15)$ uses the columns of $M$ as rows, which computes $M^{T}\begin{bmatrix} 4 \\ 3 \end{bmatrix}$.`,
          String.raw`$(15, -2)$ multiplies $M$ by $\begin{bmatrix} 3 \\ 4 \end{bmatrix}$, with the coordinates of $B$ swapped.`,
          String.raw`$(13, 11)$ drops the sign of $-2$ in the second row: $2(4) + 1(3) = 11$. The second entry is $-2(4) + 1(3) = -5$.`,
        ], answer: 0 },
      { id: "p413-m05", type: "mcq", skill: "u4", topic: "4.13", calc: false, difficulty: "moderate",
        question: String.raw`The linear transformations $F$ and $G$ are given by $F(\vec{v}) = A\vec{v}$ and $G(\vec{v}) = B\vec{v}$, where $A = \begin{bmatrix} 1 & 2 \\ 0 & -1 \end{bmatrix}$ and $B = \begin{bmatrix} 3 & 0 \\ 1 & 1 \end{bmatrix}$. Which matrix gives the composition $F \circ G$?`,
        choices: [String.raw`$\begin{bmatrix} 5 & 2 \\ -1 & -1 \end{bmatrix}$`, String.raw`$\begin{bmatrix} 3 & 6 \\ 1 & 1 \end{bmatrix}$`, String.raw`$\begin{bmatrix} 3 & 0 \\ 0 & -1 \end{bmatrix}$`, String.raw`$\begin{bmatrix} 4 & 2 \\ 1 & 0 \end{bmatrix}$`],
        why: [
          String.raw`$(F \circ G)(\vec{v}) = F(B\vec{v}) = AB\vec{v}$, and $AB = \begin{bmatrix} 3 + 2 & 0 + 2 \\ 0 - 1 & 0 - 1 \end{bmatrix} = \begin{bmatrix} 5 & 2 \\ -1 & -1 \end{bmatrix}$.`,
          String.raw`This is $BA$, the matrix of $G \circ F$. In $F \circ G$, $G$ acts first, so $B$ is next to $\vec{v}$.`,
          String.raw`This multiplies matching entries of $A$ and $B$. A composition is a matrix product.`,
          String.raw`This is $A + B$. A composition multiplies the matrices.`,
        ], answer: 0 },
      { id: "p413-m06", type: "mcq", skill: "u4", topic: "4.13", calc: false, difficulty: "difficult",
        question: String.raw`The linear transformation $F$ is defined by $F(x, y) = \langle 3x + y, 5x + 2y \rangle$. For which vector $\langle x, y \rangle$ is $F(x, y) = \langle 4, 9 \rangle$?`,
        choices: [String.raw`$\langle -1, 7 \rangle$`, String.raw`$\langle 21, 38 \rangle$`, String.raw`$\langle 17, 47 \rangle$`, String.raw`$\langle -37, 23 \rangle$`],
        why: [
          String.raw`The matrix of $F$ is $A = \begin{bmatrix} 3 & 1 \\ 5 & 2 \end{bmatrix}$ with $\det A = 1$, so $A^{-1} = \begin{bmatrix} 2 & -1 \\ -5 & 3 \end{bmatrix}$ and $A^{-1}\begin{bmatrix} 4 \\ 9 \end{bmatrix} = \begin{bmatrix} -1 \\ 7 \end{bmatrix}$. Check: $F(-1, 7) = \langle -3 + 7, -5 + 14 \rangle = \langle 4, 9 \rangle$.`,
          String.raw`$\langle 21, 38 \rangle$ is $F(4, 9)$, which applies $F$ to the output. The input comes from $F^{-1}$.`,
          String.raw`$\langle 17, 47 \rangle$ uses $\begin{bmatrix} 2 & 1 \\ 5 & 3 \end{bmatrix}$, which swaps the diagonal of $A$ without changing the signs of the other entries.`,
          String.raw`$\langle -37, 23 \rangle$ uses the transpose of $A^{-1}$, $\begin{bmatrix} 2 & -5 \\ -1 & 3 \end{bmatrix}$. The inverse of $A$ is $\begin{bmatrix} 2 & -1 \\ -5 & 3 \end{bmatrix}$.`,
        ], answer: 0 },
      { id: "p413-f1a", type: "frq", skill: "u4", topic: "4.13", calc: false, set: "p413-s2", part: "(a)",
        prompt: String.raw`Find the matrix $A$ for which $F(\vec{v}) = A\vec{v}$, where $\vec{v}$ is written as a column.`,
        rows: [
          { name: "Matrix", earns: String.raw`$A = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}$.` },
        ],
        solution: String.raw`The coefficients of $x$ and $y$ in each component of $F$ form a row: $A = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}$.` },
      { id: "p413-f1b", type: "frq", skill: "u4", topic: "4.13", calc: false, set: "p413-s2", part: "(b)",
        prompt: String.raw`A square in the plane has area $5$. Find the area of the image of the square under $F$.`,
        rows: [
          { name: "Area", earns: String.raw`$|\det A| = |4 - 6| = 2$, so the image has area $5 \times 2 = 10$.` },
        ],
        solution: String.raw`$\det A = 1(4) - 2(3) = -2$. A linear transformation multiplies every area by $|\det A| = 2$, so the image of the square has area $10$.` },
      { id: "p413-f1c", type: "frq", skill: "u4", topic: "4.13", calc: false, set: "p413-s2", part: "(c)",
        prompt: String.raw`(i) Find the matrix of the composition $F \circ G$.
(ii) Find $(F \circ G)(2, 1)$.`,
        rows: [
          { name: "C(i) Matrix", earns: String.raw`The matrix of $F \circ G$ is $AB = \begin{bmatrix} 1 & -2 \\ 3 & -4 \end{bmatrix}$, where $B = \begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix}$.` },
          { name: "C(ii) Output", earns: String.raw`$(F \circ G)(2, 1) = \langle 0, 2 \rangle$.` },
        ],
        solution: String.raw`(i) The matrix of $G$ is $B = \begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix}$. In $F \circ G$, $G$ acts first, so the matrix is $$AB = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}\begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix} = \begin{bmatrix} 1 & -2 \\ 3 & -4 \end{bmatrix}$$ (ii) $\begin{bmatrix} 1 & -2 \\ 3 & -4 \end{bmatrix}\begin{bmatrix} 2 \\ 1 \end{bmatrix} = \begin{bmatrix} 0 \\ 2 \end{bmatrix}$. Check: $G(2, 1) = \langle 2, -1 \rangle$ and $F(2, -1) = \langle 0, 2 \rangle$.` },
    ],
  }],
};

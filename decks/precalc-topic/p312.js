// AP Precalculus topic quiz 3.12: Equivalent Representations of Trigonometric Functions.
const R = String.raw;

export const sets = {
  "p312-s1": {
    name: "Rewriting and solving with identities",
    label: "Free response",
    intro: R`Answer each part. Give exact answers, and show the work that leads to each answer. Angles are in radians.`,
    sources: [{ title: "", blocks: [{ p: R`No calculator is allowed on this question.` }] }],
  },
};

export default {
  forms: [{
    id: "p312",
    name: "Topic 3.12 Quiz: Equivalent Representations of Trigonometric Functions",
    group: "Unit 3: Trigonometric and Polar Functions",
    items: [
      { id: "p312-m01", type: "mcq", skill: "u3", topic: "3.12", calc: false, difficulty: "easy",
        question: R`What is the exact value of $\cos\left(\dfrac{\pi}{12}\right)$?`,
        choices: [R`$\dfrac{\sqrt{6} + \sqrt{2}}{4}$`, R`$\dfrac{\sqrt{6} - \sqrt{2}}{4}$`, R`$\dfrac{1 - \sqrt{2}}{2}$`, R`$\dfrac{\sqrt{3}}{4}$`],
        why: [
          R`$\dfrac{\pi}{12} = \dfrac{\pi}{3} - \dfrac{\pi}{4}$, so $\cos\dfrac{\pi}{12} = \cos\dfrac{\pi}{3}\cos\dfrac{\pi}{4} + \sin\dfrac{\pi}{3}\sin\dfrac{\pi}{4} = \dfrac{\sqrt{2}}{4} + \dfrac{\sqrt{6}}{4} = \dfrac{\sqrt{6} + \sqrt{2}}{4}$.`,
          R`This uses a minus sign between the products, as in $\cos(\alpha + \beta)$. The difference formula for cosine adds the products. The value is $\sin\dfrac{\pi}{12}$.`,
          R`$\dfrac{1 - \sqrt{2}}{2} = \cos\dfrac{\pi}{3} - \cos\dfrac{\pi}{4}$. Cosine does not distribute over a difference of angles, and the result is negative even though $\dfrac{\pi}{12}$ is in Quadrant I.`,
          R`$\dfrac{\sqrt{3}}{4} = \dfrac{1}{2}\cos\dfrac{\pi}{6}$. Halving the angle does not halve the cosine.`,
        ], answer: 0 },
      { id: "p312-m02", type: "mcq", skill: "u3", topic: "3.12", calc: false, difficulty: "easy",
        question: R`Which of the following is equivalent to $\dfrac{\sin^{2}x}{1 - \cos x}$ wherever it is defined?`,
        choices: [R`$1 + \cos x$`, R`$1 - \cos x$`, R`$\cos x$`, R`$\dfrac{1}{1 + \cos x}$`],
        why: [
          R`$\sin^{2}x = 1 - \cos^{2}x = (1 - \cos x)(1 + \cos x)$, so $\dfrac{(1 - \cos x)(1 + \cos x)}{1 - \cos x} = 1 + \cos x$.`,
          R`This factors $1 - \cos^{2}x$ as $(1 - \cos x)^{2}$. A difference of squares factors as $(1 - \cos x)(1 + \cos x)$.`,
          R`This cancels term by term, $1$ with $1$ and $\cos x$ with $\cos^{2}x$. Only common factors cancel.`,
          R`This is the reciprocal of the correct expression. The factor $1 - \cos x$ cancels, leaving $1 + \cos x$ in the numerator.`,
        ], answer: 0 },
      { id: "p312-m03", type: "mcq", skill: "u3", topic: "3.12", calc: false, difficulty: "easy",
        question: R`If $\sin\theta = -\dfrac{1}{3}$, what is the value of $\cos(2\theta)$?`,
        choices: [R`$\dfrac{7}{9}$`, R`$-\dfrac{7}{9}$`, R`$\dfrac{2\sqrt{2}}{3}$`, R`$-\dfrac{2}{3}$`],
        why: [
          R`$\cos(2\theta) = 1 - 2\sin^{2}\theta = 1 - 2\left(\dfrac{1}{9}\right) = \dfrac{7}{9}$.`,
          R`$-\dfrac{7}{9} = 2\sin^{2}\theta - 1$, the double-angle identity with the sign reversed.`,
          R`$\dfrac{2\sqrt{2}}{3} = \sqrt{1 - \sin^{2}\theta}$ is the size of $\cos\theta$. The question asks for $\cos(2\theta)$, which $1 - 2\sin^{2}\theta$ gives with no square root.`,
          R`$-\dfrac{2}{3} = 2\sin\theta$. Doubling the angle does not double the value.`,
        ], answer: 0 },
      { id: "p312-m04", type: "mcq", skill: "u3", topic: "3.12", calc: false, difficulty: "moderate",
        question: R`What are all solutions of $2\cos^{2}x - 5\sin x + 1 = 0$ on the interval $0 \le x < 2\pi$?`,
        choices: [R`$\dfrac{\pi}{6}, \dfrac{5\pi}{6}$`, R`$\dfrac{7\pi}{6}, \dfrac{11\pi}{6}$`, R`$\dfrac{\pi}{6}, \dfrac{11\pi}{6}$`, R`$\dfrac{\pi}{2}$ only`],
        why: [
          R`Replace $\cos^{2}x$ with $1 - \sin^{2}x$: $2 - 2\sin^{2}x - 5\sin x + 1 = 0$, so $2\sin^{2}x + 5\sin x - 3 = 0$ and $(2\sin x - 1)(\sin x + 3) = 0$. Since $\sin x = -3$ is impossible, $\sin x = \dfrac{1}{2}$, so $x = \dfrac{\pi}{6}, \dfrac{5\pi}{6}$.`,
          R`These solve $\sin x = -\dfrac{1}{2}$, from a sign error in the factors.`,
          R`These angles have $\cos x = \dfrac{\sqrt{3}}{2}$. Since $\sin\dfrac{11\pi}{6} = -\dfrac{1}{2}$, it is not a solution.`,
          R`This comes from $\cos^{2}x = 1 + \sin^{2}x$, a wrong form of the Pythagorean identity, which leads to $(2\sin x - 3)(\sin x - 1) = 0$.`,
        ], answer: 0 },
      { id: "p312-m05", type: "mcq", skill: "u3", topic: "3.12", calc: false, difficulty: "moderate",
        question: R`Angle $A$ is in Quadrant II with $\sin A = \dfrac{3}{5}$, and angle $B$ is in Quadrant III with $\cos B = -\dfrac{8}{17}$. What is the value of $\cos(A - B)$?`,
        choices: [R`$-\dfrac{13}{85}$`, R`$\dfrac{77}{85}$`, R`$-\dfrac{77}{85}$`, R`$-\dfrac{84}{85}$`],
        why: [
          R`In Quadrant II, $\cos A = -\dfrac{4}{5}$. In Quadrant III, $\sin B = -\dfrac{15}{17}$. Then $\cos(A - B) = \cos A\cos B + \sin A\sin B = \dfrac{32}{85} - \dfrac{45}{85} = -\dfrac{13}{85}$.`,
          R`$\dfrac{77}{85} = \cos A\cos B - \sin A\sin B$ is $\cos(A + B)$. The difference formula adds the products.`,
          R`$-\dfrac{77}{85}$ takes $\cos A = \dfrac{4}{5}$. Cosine is negative in Quadrant II.`,
          R`$-\dfrac{84}{85} = \sin A\cos B - \cos A\sin B$ is $\sin(A - B)$, the sine formula.`,
        ], answer: 0 },
      { id: "p312-m06", type: "mcq", skill: "u3", topic: "3.12", calc: false, difficulty: "difficult",
        question: R`What is the sum of all solutions of $\cos(2x) + 3\sin x = 2$ on the interval $0 \le x < 2\pi$?`,
        choices: [R`$\dfrac{3\pi}{2}$`, R`$\pi$`, R`$\dfrac{9\pi}{2}$`, R`$\dfrac{\pi}{2}$`],
        why: [
          R`With $\cos(2x) = 1 - 2\sin^{2}x$, the equation becomes $2\sin^{2}x - 3\sin x + 1 = 0$, so $(2\sin x - 1)(\sin x - 1) = 0$. Then $\sin x = \dfrac{1}{2}$ gives $\dfrac{\pi}{6}, \dfrac{5\pi}{6}$, and $\sin x = 1$ gives $\dfrac{\pi}{2}$. The sum is $\dfrac{\pi}{6} + \dfrac{5\pi}{6} + \dfrac{\pi}{2} = \dfrac{3\pi}{2}$.`,
          R`$\pi = \dfrac{\pi}{6} + \dfrac{5\pi}{6}$ leaves out the solution $\dfrac{\pi}{2}$ from $\sin x = 1$.`,
          R`$\dfrac{9\pi}{2} = \dfrac{7\pi}{6} + \dfrac{11\pi}{6} + \dfrac{3\pi}{2}$ comes from $\sin x = -\dfrac{1}{2}$ and $\sin x = -1$, a sign error in the factors.`,
          R`$\dfrac{\pi}{2}$ is the one solution found by inspection, since $\cos\pi + 3 = 2$. The other two come from $\sin x = \dfrac{1}{2}$.`,
        ], answer: 0 },
      { id: "p312-f1a", type: "frq", skill: "u3", topic: "3.12", calc: false, set: "p312-s1", part: "(a)",
        prompt: R`Rewrite $\dfrac{\sec^{2}x}{\tan x}$ as a constant times a single trigonometric function of $2x$.`,
        rows: [{ name: "Expression", earns: R`$2\csc(2x)$, with supporting work that uses the double-angle identity for sine.` }],
        solution: R`$\dfrac{\sec^{2}x}{\tan x} = \dfrac{1}{\cos^{2}x} \cdot \dfrac{\cos x}{\sin x} = \dfrac{1}{\sin x\cos x} = \dfrac{2}{2\sin x\cos x} = \dfrac{2}{\sin(2x)} = 2\csc(2x)$.` },
      { id: "p312-f1b", type: "frq", skill: "u3", topic: "3.12", calc: false, set: "p312-s1", part: "(b)",
        prompt: R`Rewrite $\cos\left(x + \dfrac{\pi}{3}\right) + \cos\left(x - \dfrac{\pi}{3}\right)$ as a single trigonometric function of $x$.`,
        rows: [{ name: "Expression", earns: R`$\cos x$, with supporting work that uses the sum and difference identities for cosine.` }],
        solution: R`$\cos\left(x + \dfrac{\pi}{3}\right) = \cos x\cos\dfrac{\pi}{3} - \sin x\sin\dfrac{\pi}{3}$ and $\cos\left(x - \dfrac{\pi}{3}\right) = \cos x\cos\dfrac{\pi}{3} + \sin x\sin\dfrac{\pi}{3}$. Adding, the sine terms cancel: $2\cos x\cos\dfrac{\pi}{3} = 2\cos x \cdot \dfrac{1}{2} = \cos x$.` },
      { id: "p312-f1c", type: "frq", skill: "u3", topic: "3.12", calc: false, set: "p312-s1", part: "(c)",
        prompt: R`Solve $\cos(2x) + 5\cos x + 3 = 0$ for $0 \le x < 2\pi$.`,
        rows: [
          { name: "Quadratic in cosine", earns: R`Uses $\cos(2x) = 2\cos^{2}x - 1$ to get $2\cos^{2}x + 5\cos x + 2 = 0$ and factors it as $(2\cos x + 1)(\cos x + 2) = 0$.` },
          { name: "Solutions", earns: R`$x = \dfrac{2\pi}{3}, \dfrac{4\pi}{3}$, rejecting $\cos x = -2$ because it is outside $[-1, 1]$.` },
        ],
        solution: R`$2\cos^{2}x - 1 + 5\cos x + 3 = 0$, so $2\cos^{2}x + 5\cos x + 2 = 0$ and $(2\cos x + 1)(\cos x + 2) = 0$. The factor $\cos x + 2 = 0$ has no solution, because $\cos x \ge -1$. From $\cos x = -\dfrac{1}{2}$, $x = \dfrac{2\pi}{3}$ or $x = \dfrac{4\pi}{3}$.` },
    ],
  }],
};

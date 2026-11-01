import { graph } from "../../plot.js";

export const sets = {
  "q208-s1": {
    name: "The graphs of f and g",
    label: "Graph",
    intro: String.raw`The graphs of the functions $f$ and $g$, each made of two line segments, are shown below. Let $h(x) = f(x)g(x)$.`,
    sources: [{ title: "", blocks: [{ svg: graph({ x: [-1, 6], y: [-1, 7], xname: "x", yname: "y", segments: [[0, 0, 3, 6], [3, 6, 5, 2], [0, 5, 4, 1], [4, 1, 5, 3]], dots: [[0, 0, "closed"], [3, 6, "closed"], [5, 2, "closed"], [0, 5, "closed"], [4, 1, "closed"], [5, 3, "closed"]], labels: [[3.15, 6.3, "f"], [3.3, 1.1, "g"]], alt: "Graphs of f and g on [0, 5]. The graph of f is made of segments from (0, 0) to (3, 6) and from (3, 6) to (5, 2). The graph of g is made of segments from (0, 5) to (4, 1) and from (4, 1) to (5, 3)." }) }] }],
  },
  "q208-s2": {
    name: "Values of f, g, and their derivatives",
    label: "Free response",
    intro: String.raw`The functions $f$ and $g$ are differentiable for all real numbers. The table gives values of $f$, $g$, and their derivatives at selected values of $x$.`,
    sources: [{ title: "", blocks: [{ table: { head: ["$x$", "$f(x)$", "$f'(x)$", "$g(x)$", "$g'(x)$"], rows: [["$2$", "$3$", "$-2$", "$-1$", "$4$"], ["$4$", "$1$", "$5$", "$2$", "$-3$"]] } }] }],
  },
};

export default {
  forms: [{
    id: "q208",
    name: "Topic 2.8 Quiz: The Product Rule",
    group: "Unit 2: Differentiation: Definition and Fundamental Properties",
    items: [
      { id: "q208-m01", type: "mcq", skill: "u2", topic: "2.8", calc: false,
        question: String.raw`If $f(x) = e^{x}\ln x$, then $f'(x) =$`,
        choices: [String.raw`$e^{x}\left( \ln x + \frac{1}{x} \right)$`, String.raw`$\frac{e^{x}}{x}$`, String.raw`$e^{x}\left( \ln x - \frac{1}{x} \right)$`, String.raw`$e^{x} + \frac{1}{x}$`],
        why: [
          String.raw`By the product rule, $f'(x) = e^{x} \cdot \ln x + e^{x} \cdot \dfrac{1}{x} = e^{x}\left( \ln x + \dfrac{1}{x} \right)$.`,
          String.raw`$\dfrac{e^{x}}{x}$ is the product of the two derivatives, $e^{x}$ and $\dfrac{1}{x}$. The product rule adds $f'g$ and $fg'$.`,
          String.raw`This subtracts the second term. The product rule adds the two terms.`,
          String.raw`$e^{x} + \dfrac{1}{x}$ is the sum of the two derivatives, which is the derivative of $e^{x} + \ln x$, not of $e^{x}\ln x$.`,
        ], answer: 0 },
      { id: "q208-m02", type: "mcq", skill: "u2", topic: "2.8", calc: false,
        question: String.raw`Let $h(x) = f(x)g(x)$, where $f$ and $g$ are differentiable. If $f(1) = 2$, $f'(1) = 3$, $g(1) = 4$, and $h'(1) = 10$, what is the value of $g'(1)$?`,
        choices: ["$-1$", String.raw`$\frac{10}{3}$`, "$1$", "$11$"],
        why: [
          String.raw`$h'(1) = f'(1)g(1) + f(1)g'(1)$, so $10 = 3(4) + 2g'(1)$. Then $2g'(1) = -2$ and $g'(1) = -1$.`,
          String.raw`$\dfrac{10}{3}$ comes from $h'(1) = f'(1)g'(1)$, the product of the derivatives. The product rule is $f'g + fg'$.`,
          String.raw`$1$ comes from $10 = 3(4) - 2g'(1)$. The product rule adds the two terms.`,
          String.raw`$11$ comes from $2g'(1) = 10 + 12$. Subtracting $12$ from both sides gives $2g'(1) = -2$.`,
        ], answer: 0 },
      { id: "q208-m03", type: "mcq", skill: "u2", topic: "2.8", calc: false,
        question: String.raw`If $y = (2x + 1)\cos x$, what is the value of $\dfrac{dy}{dx}$ at $x = \dfrac{\pi}{2}$?`,
        choices: [String.raw`$-\pi - 1$`, String.raw`$\pi + 1$`, "$-2$", "$0$"],
        why: [
          String.raw`$\dfrac{dy}{dx} = 2\cos x - (2x + 1)\sin x$. At $x = \dfrac{\pi}{2}$: $2(0) - (\pi + 1)(1) = -\pi - 1$.`,
          String.raw`This uses $\dfrac{d}{dx}(\cos x) = \sin x$. The derivative of $\cos x$ is $-\sin x$, so the second term is negative.`,
          String.raw`$-2$ is the product of the derivatives, $2 \cdot (-\sin x)$, at $x = \frac{\pi}{2}$. The product rule adds $f'g$ and $fg'$.`,
          String.raw`$0$ is only the first term, $2\cos\frac{\pi}{2}$. The term $-(2x + 1)\sin x$ is missing.`,
        ], answer: 0 },
      { id: "q208-m04", type: "mcq", skill: "u2", topic: "2.8", calc: false,
        question: String.raw`If $f(x) = \sqrt{x}\,\ln x$, what is the value of $f'\left( e^{2} \right)$?`,
        choices: [String.raw`$\frac{2}{e}$`, String.raw`$\frac{1}{2e^{3}}$`, String.raw`$\frac{1}{e}$`, "$2e$"],
        why: [
          String.raw`$f'(x) = \dfrac{1}{2\sqrt{x}}\ln x + \sqrt{x} \cdot \dfrac{1}{x} = \dfrac{\ln x}{2\sqrt{x}} + \dfrac{1}{\sqrt{x}}$. At $x = e^{2}$, $\sqrt{x} = e$ and $\ln x = 2$, so $f'\left( e^{2} \right) = \dfrac{2}{2e} + \dfrac{1}{e} = \dfrac{2}{e}$.`,
          String.raw`$\dfrac{1}{2e^{3}}$ is $\dfrac{1}{2\sqrt{x}} \cdot \dfrac{1}{x}$ at $x = e^{2}$, the product of the derivatives. The product rule is $f'g + fg'$.`,
          String.raw`$\dfrac{1}{e}$ is only one of the two terms of the product rule. Each term equals $\dfrac{1}{e}$ at $x = e^{2}$, and they add to $\dfrac{2}{e}$.`,
          String.raw`$2e$ is $f\left( e^{2} \right) = e \cdot 2$, the value of the function.`,
        ], answer: 0 },
      { id: "q208-m05", type: "mcq", skill: "u2", topic: "2.8", calc: false, set: "q208-s1",
        question: String.raw`What is the value of $h'(1)$?`,
        choices: ["$6$", "$-2$", "$10$", "$8$"],
        why: [
          String.raw`From the graphs, $f(1) = 2$ and $f'(1) = 2$ (the slope of the segment from $(0, 0)$ to $(3, 6)$), and $g(1) = 4$ and $g'(1) = -1$ (the slope of the segment from $(0, 5)$ to $(4, 1)$). $h'(1) = f'(1)g(1) + f(1)g'(1) = 2(4) + 2(-1) = 6$.`,
          String.raw`$-2$ is $f'(1)g'(1) = 2(-1)$, the product of the slopes. The product rule is $f'g + fg'$.`,
          String.raw`$10$ is $f'(1)g(1) - f(1)g'(1) = 8 - (-2)$. The product rule adds the terms.`,
          String.raw`$8$ is $h(1) = f(1)g(1) = 2(4)$, the value of $h$, not its derivative.`,
        ], answer: 0 },
      { id: "q208-m06", type: "mcq", skill: "u2", topic: "2.8", calc: false,
        question: String.raw`For $0 < x < \pi$, at which values of $x$ does the graph of $y = \sin x \cos x$ have a horizontal tangent line?`,
        choices: [String.raw`$\frac{\pi}{4}$ and $\frac{3\pi}{4}$`, String.raw`$\frac{\pi}{2}$ only`, String.raw`$\frac{\pi}{4}$ only`, "There are no such values."],
        why: [
          String.raw`By the product rule, $\dfrac{dy}{dx} = \cos x \cdot \cos x + \sin x \cdot (-\sin x) = \cos^{2} x - \sin^{2} x$. This is $0$ when $\cos^{2} x = \sin^{2} x$, that is, $\tan x = \pm 1$: $x = \dfrac{\pi}{4}$ and $x = \dfrac{3\pi}{4}$.`,
          String.raw`$x = \dfrac{\pi}{2}$ solves $\cos x \cdot (-\sin x) = 0$, the product of the derivatives. At $x = \frac{\pi}{2}$ the derivative is $0 - 1 = -1$.`,
          String.raw`$\cos^{2} x = \sin^{2} x$ also holds at $x = \dfrac{3\pi}{4}$, where $\cos x = -\sin x$.`,
          String.raw`This comes from using $\dfrac{d}{dx}(\cos x) = \sin x$, which gives $\cos^{2} x + \sin^{2} x = 1$. The derivative of $\cos x$ is $-\sin x$.`,
        ], answer: 0 },
      { id: "q208-f1a", type: "frq", skill: "u2", topic: "2.8", calc: false, set: "q208-s2", part: "(a)",
        prompt: String.raw`Let $h(x) = f(x)g(x)$. Find $h'(4)$.`,
        rows: [
          { name: "Product rule", earns: String.raw`$h'(4) = f'(4)g(4) + f(4)g'(4)$` },
          { name: "Answer", earns: String.raw`$h'(4) = 7$` },
        ],
        solution: String.raw`By the product rule, $h'(4) = f'(4)g(4) + f(4)g'(4) = (5)(2) + (1)(-3) = 10 - 3 = 7$.` },
      { id: "q208-f1b", type: "frq", skill: "u2", topic: "2.8", calc: false, set: "q208-s2", part: "(b)",
        prompt: String.raw`Let $k(x) = f(x) \cdot f(x)$. Write an equation for the line tangent to the graph of $k$ at $x = 2$.`,
        rows: [
          { name: "Derivative", earns: String.raw`$k'(2) = f'(2)f(2) + f(2)f'(2) = -12$` },
          { name: "Tangent line", earns: String.raw`$y = 9 - 12(x - 2)$` },
        ],
        solution: String.raw`$k(2) = f(2) \cdot f(2) = 3 \cdot 3 = 9$. By the product rule, $k'(x) = f'(x)f(x) + f(x)f'(x) = 2f(x)f'(x)$, so $k'(2) = 2(3)(-2) = -12$. The tangent line is $y = 9 - 12(x - 2)$.` },
    ],
  }],
};

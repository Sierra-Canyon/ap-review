export const sets = {
  "q603-s9": { name: "Riemann sums for a parabola", label: "Free response", intro: String.raw`Let $f(x) = 9 - x^2$.`,
    sources: [{ title: "", blocks: [{ p: String.raw`$$f(x) = 9 - x^2$$` }] }] },
};

const items = [
  { id: "q603-m01", type: "mcq", skill: "u6", topic: "6.3", calc: false,
    question: String.raw`Which of the following is equal to $\displaystyle \lim_{n \to \infty} \sum_{k=1}^{n} \dfrac{2}{n} \cdot \dfrac{1}{3 + \dfrac{2k}{n}}$?`,
    choices: [String.raw`$\displaystyle \int_3^5 \dfrac{1}{x}\,dx$`, String.raw`$\displaystyle \int_0^1 \dfrac{1}{3 + 2x}\,dx$`, String.raw`$\displaystyle \int_3^5 \dfrac{1}{3 + x}\,dx$`, String.raw`$\displaystyle \int_2^4 \dfrac{1}{x}\,dx$`],
    why: [
      String.raw`With $\Delta x = \dfrac{2}{n}$ and $x_k = 3 + \dfrac{2k}{n}$, the sample points run from just above 3 up to 5, and the height at each is $\dfrac{1}{x_k}$. The limit is $\displaystyle \int_3^5 \dfrac{1}{x}\,dx$.`,
      String.raw`This uses $x_k = \dfrac{k}{n}$ on $[0, 1]$, which needs a width of $\dfrac{1}{n}$. The sum has width $\dfrac{2}{n}$, so this integral is only half of the limit.`,
      String.raw`This counts the 3 twice: the interval already starts at 3, so the height at $x_k$ is $\dfrac{1}{x_k}$, not $\dfrac{1}{3 + x_k}$.`,
      String.raw`This starts the interval at $2$, the numerator of the width $\dfrac{2}{n}$. The interval starts at $3$, the first term of $3 + \dfrac{2k}{n}$.`,
    ], answer: 0 },
  { id: "q603-m02", type: "mcq", skill: "u6", topic: "6.3", calc: false,
    question: String.raw`Which of the following limits of right Riemann sums is equal to $\displaystyle \int_2^5 x^3\,dx$?`,
    choices: [
      String.raw`$\displaystyle \lim_{n \to \infty} \sum_{k=1}^{n} \dfrac{3}{n} \left( 2 + \dfrac{3k}{n} \right)^3$`,
      String.raw`$\displaystyle \lim_{n \to \infty} \sum_{k=1}^{n} \dfrac{1}{n} \left( 2 + \dfrac{3k}{n} \right)^3$`,
      String.raw`$\displaystyle \lim_{n \to \infty} \sum_{k=1}^{n} \dfrac{3}{n} \left( \dfrac{3k}{n} \right)^3$`,
      String.raw`$\displaystyle \lim_{n \to \infty} \sum_{k=1}^{n} \dfrac{3}{n} \left( 2 + \dfrac{k}{n} \right)^3$`,
    ],
    why: [
      String.raw`The interval has length $5 - 2 = 3$, so $\Delta x = \dfrac{3}{n}$, and the right endpoints are $x_k = 2 + \dfrac{3k}{n}$.`,
      String.raw`This uses $\Delta x = \dfrac{1}{n}$. The width of each subinterval is the length of the interval, 3, divided by $n$.`,
      String.raw`This leaves out the left endpoint 2, so the sample points run over $[0, 3]$. The limit is $\displaystyle \int_0^3 x^3\,dx$.`,
      String.raw`This steps by $\dfrac{1}{n}$ from 2, so the sample points only reach 3, while the width is $\dfrac{3}{n}$.`,
    ], answer: 0 },
  { id: "q603-m03", type: "mcq", skill: "u6", topic: "6.3", calc: false,
    question: String.raw`Which of the following is the left Riemann sum approximation of $\displaystyle \int_0^2 e^{x}\,dx$ using 4 subintervals of equal length?`,
    choices: [String.raw`$\displaystyle \sum_{k=0}^{3} \dfrac{1}{2} e^{k/2}$`, String.raw`$\displaystyle \sum_{k=1}^{4} \dfrac{1}{2} e^{k/2}$`, String.raw`$\displaystyle \sum_{k=0}^{3} e^{k/2}$`, String.raw`$\displaystyle \sum_{k=0}^{3} \dfrac{1}{2} e^{k}$`],
    why: [
      String.raw`The width is $\dfrac{2}{4} = \dfrac{1}{2}$, and the left endpoints are $0, \dfrac{1}{2}, 1, \dfrac{3}{2}$, which are $\dfrac{k}{2}$ for $k = 0, 1, 2, 3$.`,
      String.raw`$k = 1$ to $4$ gives the right endpoints $\dfrac{1}{2}, 1, \dfrac{3}{2}, 2$. This is the right Riemann sum.`,
      String.raw`This adds the heights without multiplying by the width $\dfrac{1}{2}$.`,
      String.raw`This uses the endpoints $0, 1, 2, 3$, which step by 1 and go past $x = 2$. The endpoints step by $\dfrac{1}{2}$.`,
    ], answer: 0 },
  { id: "q603-m04", type: "mcq", skill: "u6", topic: "6.3", calc: false,
    question: String.raw`What is the value of $\displaystyle \lim_{n \to \infty} \sum_{k=1}^{n} \dfrac{6}{n} \sqrt{9 - \left( -3 + \dfrac{6k}{n} \right)^2}$?`,
    choices: [String.raw`$\frac{9\pi}{2}$`, String.raw`$9\pi$`, String.raw`$\frac{9\pi}{4}$`, "$18$"],
    why: [
      String.raw`The limit is $\displaystyle \int_{-3}^{3} \sqrt{9 - x^2}\,dx$. The graph of $y = \sqrt{9 - x^2}$ on $[-3, 3]$ is the upper half of a circle of radius 3, so the integral is $\dfrac{1}{2}\pi(3)^2 = \dfrac{9\pi}{2}$.`,
      String.raw`$9\pi$ is the area of the whole circle of radius 3. The graph of $y = \sqrt{9 - x^2}$ is only the upper half.`,
      String.raw`$\dfrac{9\pi}{4}$ is a quarter circle, which would come from the interval $[0, 3]$. The sample points run from $-3$ to $3$.`,
      String.raw`$18$ is the area of the 6 by 3 rectangle around the half circle.`,
    ], answer: 0 },
  { id: "q603-m05", type: "mcq", skill: "u6", topic: "6.3", calc: false,
    question: String.raw`Which of the following is equal to $\displaystyle \int_0^{\pi} \sin x\,dx$?`,
    choices: [
      String.raw`$\displaystyle \lim_{n \to \infty} \sum_{k=1}^{n} \dfrac{\pi}{n} \sin\left( \dfrac{\pi k}{n} \right)$`,
      String.raw`$\displaystyle \lim_{n \to \infty} \sum_{k=1}^{n} \dfrac{1}{n} \sin\left( \dfrac{\pi k}{n} \right)$`,
      String.raw`$\displaystyle \lim_{n \to \infty} \sum_{k=1}^{n} \dfrac{\pi}{n} \sin\left( \dfrac{k}{n} \right)$`,
      String.raw`$\displaystyle \lim_{n \to \infty} \sum_{k=1}^{n} \dfrac{\pi}{n} \sin\left( \pi + \dfrac{\pi k}{n} \right)$`,
    ],
    why: [
      String.raw`On $[0, \pi]$, $\Delta x = \dfrac{\pi}{n}$ and the right endpoints are $x_k = \dfrac{\pi k}{n}$, so this is the limit of right Riemann sums for $\displaystyle \int_0^{\pi} \sin x\,dx$.`,
      String.raw`The width is $\dfrac{1}{n}$ in place of $\dfrac{\pi}{n}$, so this limit is $\dfrac{1}{\pi}\displaystyle \int_0^{\pi} \sin x\,dx$.`,
      String.raw`The sample points $\dfrac{k}{n}$ only run over $[0, 1]$, so they do not match the width $\dfrac{\pi}{n}$ or the interval $[0, \pi]$.`,
      String.raw`The sample points $\pi + \dfrac{\pi k}{n}$ run over $[\pi, 2\pi]$, so this is $\displaystyle \int_{\pi}^{2\pi} \sin x\,dx$.`,
    ], answer: 0 },
  { id: "q603-m06", type: "mcq", skill: "u6", topic: "6.3", calc: false,
    stem: String.raw`The function $f$ is continuous on the real numbers.`,
    question: String.raw`The sum $\displaystyle \sum_{k=1}^{6} f\left( 1 + 0.5k \right)(0.5)$ is a right Riemann sum approximation of which of the following?`,
    choices: [String.raw`$\displaystyle \int_1^4 f(x)\,dx$`, String.raw`$\displaystyle \int_0^3 f(x)\,dx$`, String.raw`$\displaystyle \int_1^{3.5} f(x)\,dx$`, String.raw`$\displaystyle \int_{1.5}^4 f(x)\,dx$`],
    why: [
      String.raw`There are 6 subintervals of width $0.5$, so the interval has length 3. The right endpoints are $1.5, 2, \ldots, 4$, so the interval starts at $1$ and ends at $4$.`,
      String.raw`This has the right length but drops the starting value 1 in $1 + 0.5k$.`,
      String.raw`$3.5$ is the right endpoint for $k = 5$. The last right endpoint is $1 + 0.5(6) = 4$.`,
      String.raw`$1.5$ is the first right endpoint, not the start of the interval. The first subinterval is $[1, 1.5]$.`,
    ], answer: 0 },
  { id: "q603-f1a", type: "frq", skill: "u6", topic: "6.3", calc: false, set: "q603-s9", part: "(a)",
    prompt: String.raw`Write, in summation notation, the right Riemann sum approximation of $\displaystyle \int_0^3 f(x)\,dx$ using 3 subintervals of equal length. Find the value of the sum.`,
    rows: [
      { name: "Summation notation", earns: String.raw`$\displaystyle \sum_{k=1}^{3} \left( 9 - k^2 \right)(1)$ or an equivalent sum.` },
      { name: "Value", earns: "$13$" },
    ],
    solution: String.raw`The width is $\dfrac{3 - 0}{3} = 1$, and the right endpoints are $x = 1, 2, 3$:
$$\sum_{k=1}^{3} f(k) \cdot 1 = \sum_{k=1}^{3} \left( 9 - k^2 \right) = 8 + 5 + 0 = 13.$$` },
  { id: "q603-f1b", type: "frq", skill: "u6", topic: "6.3", calc: false, set: "q603-s9", part: "(b)",
    prompt: String.raw`Write $\displaystyle \int_0^3 f(x)\,dx$ as a limit of right Riemann sums using $n$ subintervals of equal length.`,
    rows: [
      { name: "Limit of Riemann sums", earns: String.raw`$\displaystyle \lim_{n \to \infty} \sum_{k=1}^{n} \dfrac{3}{n} \left( 9 - \left( \dfrac{3k}{n} \right)^2 \right)$` },
    ],
    solution: String.raw`With $\Delta x = \dfrac{3}{n}$ and right endpoints $x_k = \dfrac{3k}{n}$,
$$\int_0^3 f(x)\,dx = \lim_{n \to \infty} \sum_{k=1}^{n} \dfrac{3}{n} \left( 9 - \left( \dfrac{3k}{n} \right)^2 \right).$$` },
  { id: "q603-f1c", type: "frq", skill: "u6", topic: "6.3", calc: false, set: "q603-s9", part: "(c)",
    prompt: String.raw`Write $\displaystyle \lim_{n \to \infty} \sum_{k=1}^{n} \dfrac{2}{n} \left( 9 - \left( 1 + \dfrac{2k}{n} \right)^2 \right)$ as a definite integral.`,
    rows: [
      { name: "Definite integral", earns: String.raw`$\displaystyle \int_1^3 \left( 9 - x^2 \right) dx$` },
    ],
    solution: String.raw`The width is $\Delta x = \dfrac{2}{n}$, and the sample points $x_k = 1 + \dfrac{2k}{n}$ are the right endpoints of a partition of $[1, 3]$. The height at each sample point is $9 - x_k^2 = f(x_k)$, so the limit is
$$\int_1^3 \left( 9 - x^2 \right) dx.$$` },
];

export default { forms: [{ id: "q603", name: "Topic 6.3 Quiz: Riemann Sums and Definite Integral Notation", group: "Unit 6: Integration and Accumulation of Change", items }] };

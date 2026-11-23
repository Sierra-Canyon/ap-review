// AP Precalculus topic quiz, Topic 2.6: Competing Function Model Validation.
import { graph } from "../../plot.js";

const resid = [0.6, -0.4, -0.8, 0.5, 0.2, -0.6, 0.7, -0.3];

export const sets = {
  "p206-s1": {
    name: "A table of values",
    label: "Table",
    intro: String.raw`The table gives values of $y$ for equally spaced values of $x$.`,
    sources: [{ title: "", blocks: [{ table: { head: ["$x$", "$0$", "$1$", "$2$", "$3$", "$4$"], rows: [["$y$", "$64$", "$48$", "$36$", "$27$", "$20.25$"]] } }] }],
  },
  "p206-s2": {
    name: "A residual plot",
    label: "Graph",
    intro: String.raw`An exponential model was fit to a data set for $x = 1, 2, \ldots, 8$. The residual plot for the model (actual value minus predicted value) is shown. The residuals are $0.6$, $-0.4$, $-0.8$, $0.5$, $0.2$, $-0.6$, $0.7$, and $-0.3$.`,
    sources: [{ title: "", blocks: [{ svg: graph({
      x: [0, 9], y: [-1.2, 1.2], step: { x: 1, y: 0.2 }, labelEvery: 2, xname: "x", yname: "residual",
      dots: resid.map((r, i) => [i + 1, r, "closed"]),
      alt: "Residual plot for x = 1 to 8. The residuals are 0.6, -0.4, -0.8, 0.5, 0.2, -0.6, 0.7, and -0.3. They are scattered above and below zero with no clear pattern.",
    }) }] }],
  },
  "p206-s3": {
    name: "Data and an exponential model",
    label: "Table",
    intro: String.raw`The table gives a data set. The model $E(x) = 12(1.196)^{x}$ was fit to the data.`,
    sources: [{ title: "", blocks: [
      { table: { head: ["$x$", "$0$", "$2$", "$4$", "$6$", "$8$"], rows: [["$y$", "$12.1$", "$17.0$", "$24.6$", "$35.2$", "$50.3$"]] } },
      { p: "A calculator is allowed on this question." },
    ] }],
  },
  "p206-s4": {
    name: "A growing culture",
    label: "Free response",
    intro: String.raw`The number of cells $N$ in a culture was counted every hour. The counts are given in the table, where $t$ is the number of hours after the first count.`,
    sources: [{ title: "", blocks: [
      { table: { head: ["$t$ (hours)", "$0$", "$1$", "$2$", "$3$", "$4$"], rows: [["$N$ (cells)", "$50$", "$61$", "$73$", "$89$", "$108$"]] } },
      { p: "Answer each part without a calculator. Show the work that leads to each answer." },
    ] }],
  },
};

export default {
  forms: [{
    id: "p206",
    name: "Topic 2.6 Quiz: Competing Function Model Validation",
    group: "Unit 2: Exponential and Logarithmic Functions",
    items: [
      { id: "p206-m01", type: "mcq", skill: "u2", topic: "2.6", calc: false, difficulty: "easy", set: "p206-s1",
        question: String.raw`Which type of function best models the data, and why?`,
        choices: [
          "Exponential, because consecutive values of y have a constant ratio.",
          "Linear, because consecutive values of y differ by a constant amount.",
          "Quadratic, because the second differences of the values of y are constant.",
          "Exponential, because the values of y decrease each time x increases by 1.",
        ],
        why: [
          String.raw`Each value is $0.75$ times the one before: $\dfrac{48}{64} = \dfrac{36}{48} = \dfrac{27}{36} = \dfrac{20.25}{27} = 0.75$. A constant ratio over equal steps in $x$ means exponential.`,
          String.raw`The differences are $-16$, $-12$, $-9$, and $-6.75$, which are not constant.`,
          String.raw`The second differences are $4$, $3$, and $2.25$, which are not constant.`,
          String.raw`The conclusion is right but the reason is not. Linear and quadratic data can also decrease. The constant ratio is what shows an exponential pattern.`,
        ], answer: 0 },
      { id: "p206-m02", type: "mcq", skill: "u2", topic: "2.6", calc: false, difficulty: "easy", set: "p206-s2",
        question: String.raw`Is the exponential model appropriate for the data?`,
        choices: [
          "Yes, because the residuals show no clear pattern.",
          "No, because some of the residuals are less than zero.",
          "No, because the residuals are not all equal to zero.",
          "Yes, because most of the residuals are above zero.",
        ],
        why: [
          String.raw`The residuals are small and scattered above and below $0$ with no curve or trend, so the model captures the pattern of the data.`,
          String.raw`Negative residuals only mean the model overestimates at those points. An appropriate model has residuals on both sides of $0$.`,
          String.raw`Real data almost never fit a model exactly. What matters is whether the residuals show a pattern.`,
          String.raw`Four residuals are positive and four are negative, so this is false. The model is appropriate because there is no pattern.`,
        ], answer: 0 },
      { id: "p206-m03", type: "mcq", skill: "u2", topic: "2.6", calc: false, difficulty: "moderate", set: "p206-s2",
        question: String.raw`At $x = 3$, the model predicts $14.6$. What is the actual data value at $x = 3$?`,
        choices: ["$13.8$", "$15.4$", "$-0.8$", "$14.6$"],
        why: [
          String.raw`The residual at $x = 3$ is $-0.8$. Since residual $=$ actual $-$ predicted, actual $= 14.6 + (-0.8) = 13.8$.`,
          String.raw`$15.4$ subtracts the residual from the prediction, which treats the residual as predicted minus actual.`,
          String.raw`$-0.8$ is the residual, the error at $x = 3$, not the data value.`,
          String.raw`$14.6$ is the model's prediction. The actual value differs from it by the residual.`,
        ], answer: 0 },
      { id: "p206-m04", type: "mcq", skill: "u2", topic: "2.6", calc: false, difficulty: "difficult",
        question: String.raw`A city uses an exponential model of the number of daily riders on a new bus route to decide how many buses to run. For each of the first six months, the residual (actual minus predicted) is positive, and the residuals grow each month. Which conclusion is best supported?`,
        choices: [
          "The model underestimates ridership, so it may call for too few buses.",
          "The model overestimates ridership, so it may call for too many buses.",
          "The model underestimates ridership, so it may call for too many buses.",
          "The model fits the data well, since every residual has the same sign.",
        ],
        why: [
          String.raw`Positive residuals mean actual riders exceed the predictions, and the gap is growing. Planning from the model would supply fewer buses than riders need.`,
          String.raw`This reverses the sign. A positive residual means the actual value is above the prediction, so the model is too low.`,
          String.raw`The model is too low, so buses planned from it would be too few, not too many.`,
          String.raw`Residuals of one sign that grow form a pattern. A good fit has residuals scattered on both sides of $0$.`,
        ], answer: 0 },
      { id: "p206-m05", type: "mcq", skill: "u2", topic: "2.6", calc: true, difficulty: "moderate", set: "p206-s3",
        question: String.raw`What is the residual of the model at $x = 6$, to the nearest thousandth?`,
        choices: ["$0.079$", "$-0.079$", "$35.121$", "$-50.912$"],
        why: [
          String.raw`$E(6) = 12(1.196)^{6} \approx 35.121$, so the residual is $35.2 - 35.121 \approx 0.079$.`,
          String.raw`$-0.079$ is predicted minus actual. A residual is actual minus predicted.`,
          String.raw`$35.121$ is the model's prediction $E(6)$, not the residual.`,
          String.raw`$-50.912$ computes $E(6)$ as $12(1.196)(6) = 86.112$, multiplying by $6$ instead of raising $1.196$ to the power $6$.`,
        ], answer: 0 },
      { id: "p206-m06", type: "mcq", skill: "u2", topic: "2.6", calc: false, difficulty: "easy",
        question: String.raw`The amount of water in a leaking tank, in liters, is modeled by $W(t) = 180 - 7.5t$, where $t$ is the number of minutes after the leak starts. Which domain is most appropriate for the model?`,
        choices: [String.raw`$0 \le t \le 24$`, String.raw`$0 \le t \le 180$`, String.raw`$t \ge 0$`, String.raw`$0 \le t \le 7.5$`],
        why: [
          String.raw`The tank is empty when $180 - 7.5t = 0$, at $t = 24$. After that the model gives negative amounts of water, so the model applies for $0 \le t \le 24$.`,
          String.raw`$180$ is the starting amount of water in liters, not a time.`,
          String.raw`For $t > 24$ the model gives a negative amount of water, which is not possible.`,
          String.raw`$7.5$ is the number of liters lost each minute, not the time when the tank is empty.`,
        ], answer: 0 },
      { id: "p206-f1a", type: "frq", skill: "u2", topic: "2.6", calc: false, set: "p206-s4", part: "(a)",
        prompt: String.raw`Is a linear model or an exponential model more appropriate for these data? Give a reason based on the table.`,
        rows: [{ name: "Model with reason", earns: String.raw`Exponential, because the ratios of consecutive counts are about the same (each count is about $1.2$ times the one before), while the differences $11$, $12$, $16$, $19$ increase.` }],
        solution: String.raw`The differences are $11$, $12$, $16$, and $19$, which grow, so the data are not linear. The ratios $\dfrac{61}{50} = 1.22$, $\dfrac{73}{61} \approx 1.20$, $\dfrac{89}{73} \approx 1.22$, and $\dfrac{108}{89} \approx 1.21$ are nearly equal, so an exponential model is more appropriate.` },
      { id: "p206-f1b", type: "frq", skill: "u2", topic: "2.6", calc: false, set: "p206-s4", part: "(b)",
        prompt: String.raw`The model $M(t) = 50(1.2)^{t}$ is proposed. Find the residual of the model at $t = 3$.`,
        rows: [{ name: "Residual", earns: String.raw`$M(3) = 50(1.728) = 86.4$, so the residual is $89 - 86.4 = 2.6$.` }],
        solution: String.raw`$M(3) = 50(1.2)^{3} = 50(1.728) = 86.4$. The residual is actual minus predicted: $89 - 86.4 = 2.6$.` },
      { id: "p206-f1c", type: "frq", skill: "u2", topic: "2.6", calc: false, set: "p206-s4", part: "(c)",
        prompt: String.raw`Does the model overestimate or underestimate the number of cells at $t = 3$? Explain using your answer from part (b).`,
        rows: [{ name: "Interpretation", earns: String.raw`Underestimates, because the residual $2.6$ is positive: the actual count is $2.6$ cells more than the model predicts.` }],
        solution: String.raw`The residual is positive, so the actual count, $89$, is greater than the prediction, $86.4$. The model underestimates the number of cells at $t = 3$ by $2.6$ cells.` },
    ],
  }],
};

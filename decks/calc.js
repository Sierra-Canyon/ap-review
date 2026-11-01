// AP Calculus AB: all eight units of the AB course (CED topics; nothing from BC).
// decks/calc/u1.js to u8.js: the review bank, source-style multiple choice and free response scored point by point.
// decks/calc-topic/q101.js ...: a quiz for each topic (6 multiple choice and a 3 or 4 point free response).
// decks/calc-tests/c1.js to c8.js: a unit test per unit in the AP exam's shape (15 multiple choice, 10 without a calculator
// then 5 with; two 9-point free-response questions, the calculator one first), 33 points.
// None of the quiz or test questions are in review. Every key was checked by computation, then by a second reader.
// Math is LaTeX in $...$ (drawn as MathML); graphs come from plot.js. In a multiple-choice item the right choice is first.
import * as u1 from "./calc/u1.js";
import * as u2 from "./calc/u2.js";
import * as u3 from "./calc/u3.js";
import * as u4 from "./calc/u4.js";
import * as u5 from "./calc/u5.js";
import * as u6 from "./calc/u6.js";
import * as u7 from "./calc/u7.js";
import * as u8 from "./calc/u8.js";
import * as c1 from "./calc-tests/c1.js";
import * as c2 from "./calc-tests/c2.js";
import * as c3 from "./calc-tests/c3.js";
import * as c4 from "./calc-tests/c4.js";
import * as c5 from "./calc-tests/c5.js";
import * as c6 from "./calc-tests/c6.js";
import * as c7 from "./calc-tests/c7.js";
import * as c8 from "./calc-tests/c8.js";
import * as q101 from "./calc-topic/q101.js";
import * as q102 from "./calc-topic/q102.js";
import * as q103 from "./calc-topic/q103.js";
import * as q104 from "./calc-topic/q104.js";
import * as q105 from "./calc-topic/q105.js";
import * as q106 from "./calc-topic/q106.js";
import * as q107 from "./calc-topic/q107.js";
import * as q108 from "./calc-topic/q108.js";
import * as q109 from "./calc-topic/q109.js";
import * as q110 from "./calc-topic/q110.js";
import * as q111 from "./calc-topic/q111.js";
import * as q112 from "./calc-topic/q112.js";
import * as q113 from "./calc-topic/q113.js";
import * as q114 from "./calc-topic/q114.js";
import * as q115 from "./calc-topic/q115.js";
import * as q116 from "./calc-topic/q116.js";
import * as q201 from "./calc-topic/q201.js";
import * as q202 from "./calc-topic/q202.js";
import * as q203 from "./calc-topic/q203.js";
import * as q204 from "./calc-topic/q204.js";
import * as q205 from "./calc-topic/q205.js";
import * as q206 from "./calc-topic/q206.js";
import * as q207 from "./calc-topic/q207.js";
import * as q208 from "./calc-topic/q208.js";
import * as q209 from "./calc-topic/q209.js";
import * as q210 from "./calc-topic/q210.js";
import * as q301 from "./calc-topic/q301.js";
import * as q302 from "./calc-topic/q302.js";
import * as q303 from "./calc-topic/q303.js";
import * as q304 from "./calc-topic/q304.js";
import * as q305 from "./calc-topic/q305.js";
import * as q306 from "./calc-topic/q306.js";
import * as q401 from "./calc-topic/q401.js";
import * as q402 from "./calc-topic/q402.js";
import * as q403 from "./calc-topic/q403.js";
import * as q404 from "./calc-topic/q404.js";
import * as q405 from "./calc-topic/q405.js";
import * as q406 from "./calc-topic/q406.js";
import * as q407 from "./calc-topic/q407.js";
import * as q501 from "./calc-topic/q501.js";
import * as q502 from "./calc-topic/q502.js";
import * as q503 from "./calc-topic/q503.js";
import * as q504 from "./calc-topic/q504.js";
import * as q505 from "./calc-topic/q505.js";
import * as q506 from "./calc-topic/q506.js";
import * as q507 from "./calc-topic/q507.js";
import * as q508 from "./calc-topic/q508.js";
import * as q509 from "./calc-topic/q509.js";
import * as q510 from "./calc-topic/q510.js";
import * as q511 from "./calc-topic/q511.js";
import * as q512 from "./calc-topic/q512.js";
import * as q601 from "./calc-topic/q601.js";
import * as q602 from "./calc-topic/q602.js";
import * as q603 from "./calc-topic/q603.js";
import * as q604 from "./calc-topic/q604.js";
import * as q605 from "./calc-topic/q605.js";
import * as q606 from "./calc-topic/q606.js";
import * as q607 from "./calc-topic/q607.js";
import * as q608 from "./calc-topic/q608.js";
import * as q609 from "./calc-topic/q609.js";
import * as q610 from "./calc-topic/q610.js";
import * as q614 from "./calc-topic/q614.js";
import * as q701 from "./calc-topic/q701.js";
import * as q702 from "./calc-topic/q702.js";
import * as q703 from "./calc-topic/q703.js";
import * as q704 from "./calc-topic/q704.js";
import * as q706 from "./calc-topic/q706.js";
import * as q707 from "./calc-topic/q707.js";
import * as q708 from "./calc-topic/q708.js";
import * as q801 from "./calc-topic/q801.js";
import * as q802 from "./calc-topic/q802.js";
import * as q803 from "./calc-topic/q803.js";
import * as q804 from "./calc-topic/q804.js";
import * as q805 from "./calc-topic/q805.js";
import * as q806 from "./calc-topic/q806.js";
import * as q807 from "./calc-topic/q807.js";
import * as q808 from "./calc-topic/q808.js";
import * as q809 from "./calc-topic/q809.js";
import * as q810 from "./calc-topic/q810.js";
import * as q811 from "./calc-topic/q811.js";
import * as q812 from "./calc-topic/q812.js";

const reviews = [u1, u2, u3, u4, u5, u6, u7, u8];
const tests = [c1, c2, c3, c4, c5, c6, c7, c8];
const quizzes = [q101, q102, q103, q104, q105, q106, q107, q108, q109, q110, q111, q112, q113, q114, q115, q116, q201, q202, q203, q204, q205, q206, q207, q208, q209, q210, q301, q302, q303, q304, q305, q306, q401, q402, q403, q404, q405, q406, q407, q501, q502, q503, q504, q505, q506, q507, q508, q509, q510, q511, q512, q601, q602, q603, q604, q605, q606, q607, q608, q609, q610, q614, q701, q702, q703, q704, q706, q707, q708, q801, q802, q803, q804, q805, q806, q807, q808, q809, q810, q811, q812];
const points = (f) => f.items.reduce((t, it) => t + (it.type === "frq" ? it.rows.length : 1), 0);
const skills = [
    { id: "u1", name: "Unit 1: Limits and Continuity", from: "Topics 1.1 to 1.16", short: "U1" },
    { id: "u2", name: "Unit 2: Differentiation: Definition and Fundamental Properties", from: "Topics 2.1 to 2.10", short: "U2" },
    { id: "u3", name: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions", from: "Topics 3.1 to 3.6", short: "U3" },
    { id: "u4", name: "Unit 4: Contextual Applications of Differentiation", from: "Topics 4.1 to 4.7", short: "U4" },
    { id: "u5", name: "Unit 5: Analytical Applications of Differentiation", from: "Topics 5.1 to 5.12", short: "U5" },
    { id: "u6", name: "Unit 6: Integration and Accumulation of Change", from: "Topics 6.1 to 6.10, 6.14", short: "U6" },
    { id: "u7", name: "Unit 7: Differential Equations", from: "Topics 7.1 to 7.4, 7.6 to 7.8", short: "U7" },
    { id: "u8", name: "Unit 8: Applications of Integration", from: "Topics 8.1 to 8.12", short: "U8" },
];
const group = (n) => skills[n - 1].name;
// Each unit lists its topic quizzes, then its test. The Class tab gives the quizzes their own column.
const forms = [1, 2, 3, 4, 5, 6, 7, 8].flatMap((n) => [
  ...quizzes.flatMap((m) => m.default.forms).filter((f) => f.id[1] === String(n))
    .map((f) => ({ ...f, group: group(n), col: `Unit ${n} topic quizzes`, short: f.id[1] + "." + +f.id.slice(2), total: points(f) })),
  ...tests[n - 1].default.forms.map((f) => ({ ...f, group: group(n), short: "U" + n, total: points(f) })),
]);

export default {
  id: "calc",
  course: "AP Calculus AB",
  title: "Review: all eight units",
  lang: "math",
  typeNames: { mcq: "Multiple choice", frq: "Free response" },
  blurb: "Multiple choice and free response for every unit, with graphs, tables, and the AP scoring guidelines. Each question says whether a calculator is allowed.",
  focus: [
    { id: "mcq", name: "Multiple choice", types: ["mcq"] },
    { id: "frq", name: "Free response", types: ["frq"], size: 4 },
  ],
  skills,
  sets: Object.assign({}, ...reviews.map((u) => u.sets), ...tests.map((m) => m.sets), ...quizzes.map((m) => m.sets)),
  forms,
  mock: {
    name: "Quizzes and tests",
    title: "Topic quizzes and unit tests",
    cta: "Take a quiz or test",
    stat: [forms.length, "quizzes and tests"],
    total: 33,
    clock: null,
    blurb: "A quiz for every topic and a test for every unit, in the shape of the AP exam. None of their questions are in review.",
    intro: [
      ["Topic quizzes", "check one topic at a time: 6 multiple-choice questions and one free-response question, about 10 points."],
      ["Unit tests", "are the AP exam in miniature: Section I is 15 multiple-choice questions, 10 without a calculator and 5 with one; Section II is two free-response questions of 9 points, the calculator one first. 33 points."],
      ["How scoring works.", "Multiple choice is scored for you. When you finish, you score each free-response part yourself against the scoring guidelines, one point at a time, before the solutions appear. Work on paper as on the exam."],
      ["On the exam,", "Section I is 45 questions in 105 minutes (30 without a calculator, 15 with), and Section II is six free-response questions in 90 minutes (2 with a calculator, 4 without)."],
    ],
    sections: { mcq: "Section I, Part A (no calculator)", "mcq-calc": "Section I, Part B (calculator)", "frq-calc": "Section II, Part A (calculator)", frq: "Section II, Part B (no calculator)" },
    partA: { points: 1, slots: [] },
    partB: { kind: "rubric" },
  },
  items: reviews.flatMap((u) => u.default),
};

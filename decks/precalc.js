// AP Precalculus: all four units of the CED (Units 1 to 3 are on the AP exam; Unit 4 is taught, not tested).
// decks/precalc/u<N>a.js and u<N>b.js: the review bank, multiple choice and free response scored point by point.
// decks/precalc-topic/p101.js ...: a quiz for each topic (6 multiple choice and a 3 or 4 point free response).
// decks/precalc-tests/pt1.js to pt4.js: a test per unit in the AP exam's shape (15 multiple choice, 10 without a
// calculator then 5 with; two 6-point free-response questions, the calculator one first), 27 points.
// Modeled on a full read of Albert's AP Precalculus (notes in ../private/albert-notes/precalc-*.md); no question is
// taken from Albert or the College Board. Every key was checked by computation. In a multiple-choice item the right
// choice is first (the site shuffles review and spreads keys evenly on forms).

import * as r_u1a from "./precalc/u1a.js";
import * as r_u1b from "./precalc/u1b.js";
import * as r_u2a from "./precalc/u2a.js";
import * as r_u2b from "./precalc/u2b.js";
import * as r_u3a from "./precalc/u3a.js";
import * as r_u3b from "./precalc/u3b.js";
import * as r_u4a from "./precalc/u4a.js";
import * as r_u4b from "./precalc/u4b.js";
import * as p101 from "./precalc-topic/p101.js";
import * as p102 from "./precalc-topic/p102.js";
import * as p103 from "./precalc-topic/p103.js";
import * as p104 from "./precalc-topic/p104.js";
import * as p105 from "./precalc-topic/p105.js";
import * as p106 from "./precalc-topic/p106.js";
import * as p107 from "./precalc-topic/p107.js";
import * as p108 from "./precalc-topic/p108.js";
import * as p109 from "./precalc-topic/p109.js";
import * as p110 from "./precalc-topic/p110.js";
import * as p111 from "./precalc-topic/p111.js";
import * as p112 from "./precalc-topic/p112.js";
import * as p113 from "./precalc-topic/p113.js";
import * as p114 from "./precalc-topic/p114.js";
import * as p201 from "./precalc-topic/p201.js";
import * as p202 from "./precalc-topic/p202.js";
import * as p203 from "./precalc-topic/p203.js";
import * as p204 from "./precalc-topic/p204.js";
import * as p205 from "./precalc-topic/p205.js";
import * as p206 from "./precalc-topic/p206.js";
import * as p207 from "./precalc-topic/p207.js";
import * as p208 from "./precalc-topic/p208.js";
import * as p209 from "./precalc-topic/p209.js";
import * as p210 from "./precalc-topic/p210.js";
import * as p211 from "./precalc-topic/p211.js";
import * as p212 from "./precalc-topic/p212.js";
import * as p213 from "./precalc-topic/p213.js";
import * as p214 from "./precalc-topic/p214.js";
import * as p215 from "./precalc-topic/p215.js";
import * as p301 from "./precalc-topic/p301.js";
import * as p302 from "./precalc-topic/p302.js";
import * as p303 from "./precalc-topic/p303.js";
import * as p304 from "./precalc-topic/p304.js";
import * as p305 from "./precalc-topic/p305.js";
import * as p306 from "./precalc-topic/p306.js";
import * as p307 from "./precalc-topic/p307.js";
import * as p308 from "./precalc-topic/p308.js";
import * as p309 from "./precalc-topic/p309.js";
import * as p310 from "./precalc-topic/p310.js";
import * as p311 from "./precalc-topic/p311.js";
import * as p312 from "./precalc-topic/p312.js";
import * as p313 from "./precalc-topic/p313.js";
import * as p314 from "./precalc-topic/p314.js";
import * as p315 from "./precalc-topic/p315.js";
import * as p401 from "./precalc-topic/p401.js";
import * as p402 from "./precalc-topic/p402.js";
import * as p403 from "./precalc-topic/p403.js";
import * as p404 from "./precalc-topic/p404.js";
import * as p405 from "./precalc-topic/p405.js";
import * as p406 from "./precalc-topic/p406.js";
import * as p407 from "./precalc-topic/p407.js";
import * as p408 from "./precalc-topic/p408.js";
import * as p409 from "./precalc-topic/p409.js";
import * as p410 from "./precalc-topic/p410.js";
import * as p411 from "./precalc-topic/p411.js";
import * as p412 from "./precalc-topic/p412.js";
import * as p413 from "./precalc-topic/p413.js";
import * as p414 from "./precalc-topic/p414.js";
import * as pt1 from "./precalc-tests/pt1.js";
import * as pt2 from "./precalc-tests/pt2.js";
import * as pt3 from "./precalc-tests/pt3.js";
import * as pt4 from "./precalc-tests/pt4.js";

const reviews = [r_u1a, r_u1b, r_u2a, r_u2b, r_u3a, r_u3b, r_u4a, r_u4b];
const tests = [pt1, pt2, pt3, pt4];
const quizzes = [p101, p102, p103, p104, p105, p106, p107, p108, p109, p110, p111, p112, p113, p114, p201, p202, p203, p204, p205, p206, p207, p208, p209, p210, p211, p212, p213, p214, p215, p301, p302, p303, p304, p305, p306, p307, p308, p309, p310, p311, p312, p313, p314, p315, p401, p402, p403, p404, p405, p406, p407, p408, p409, p410, p411, p412, p413, p414];
const points = (f) => f.items.reduce((t, it) => t + (it.type === "frq" ? it.rows.length : 1), 0);
const skills = [
  { id: "u1", name: "Unit 1: Polynomial and Rational Functions", from: "Topics 1.1 to 1.14", short: "U1" },
  { id: "u2", name: "Unit 2: Exponential and Logarithmic Functions", from: "Topics 2.1 to 2.15", short: "U2" },
  { id: "u3", name: "Unit 3: Trigonometric and Polar Functions", from: "Topics 3.1 to 3.15", short: "U3" },
  { id: "u4", name: "Unit 4: Functions Involving Parameters, Vectors, and Matrices", from: "Topics 4.1 to 4.14 (not on the AP exam)", short: "U4" },
];
const group = (n) => skills[n - 1].name;
// Each unit lists its topic quizzes, then its test. The Class tab gives the quizzes their own column.
const forms = [1, 2, 3, 4].flatMap((n) => [
  ...quizzes.flatMap((m) => m.default.forms).filter((f) => f.id[1] === String(n))
    .map((f) => ({ ...f, group: group(n), col: `Unit ${n} topic quizzes`, short: f.id[1] + "." + +f.id.slice(2), total: points(f) })),
  ...tests[n - 1].default.forms.map((f) => ({ ...f, group: group(n), short: "U" + n, total: points(f) })),
]);

export default {
  id: "precalc",
  course: "AP Precalculus",
  title: "Review: all four units",
  lang: "math",
  typeNames: { mcq: "Multiple choice", frq: "Free response" },
  blurb: "Multiple choice and free response for every unit, with graphs, tables, and the AP scoring guidelines. Each question says whether a calculator is allowed.",
  focus: [
    { id: "mcq", name: "Multiple choice", types: ["mcq"] },
    { id: "frq", name: "Free response", types: ["frq"], size: 4 },
    { id: "exam", name: "AP exam units (1 to 3)", skills: ["u1", "u2", "u3"] },
  ],
  skills,
  sets: Object.assign({}, ...reviews.map((u) => u.sets), ...tests.map((m) => m.sets), ...quizzes.map((m) => m.sets)),
  forms,
  mock: {
    name: "Quizzes and tests",
    title: "Topic quizzes and unit tests",
    cta: "Take a quiz or test",
    stat: [forms.length, "quizzes and tests"],
    total: 27,
    clock: null,
    blurb: "A quiz for every topic and a test for every unit, in the shape of the AP exam. None of their questions are in review.",
    intro: [
      ["Topic quizzes", "check one topic at a time: 6 multiple-choice questions and one free-response question, about 10 points."],
      ["Unit tests", "are the AP exam in miniature: Section I is 15 multiple-choice questions, 10 without a calculator and 5 with one; Section II is two free-response questions of 6 points, the calculator one first. 27 points."],
      ["How scoring works.", "Multiple choice is scored for you. When you finish, you score each free-response part yourself against the scoring guidelines, one point at a time, before the solutions appear. Work on paper as on the exam."],
      ["On the exam,", "Section I is 40 questions in 120 minutes (28 without a calculator, 12 with), and Section II is four free-response questions in 60 minutes (2 with a calculator, 2 without). Unit 4 is not on the exam."],
    ],
    sections: { mcq: "Section I, Part A (no calculator)", "mcq-calc": "Section I, Part B (calculator)", "frq-calc": "Section II, Part A (calculator)", frq: "Section II, Part B (no calculator)" },
    partA: { points: 1, slots: [] },
    partB: { kind: "rubric" },
  },
  items: reviews.flatMap((u) => u.default),
};

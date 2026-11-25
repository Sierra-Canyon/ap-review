// AP Physics 1: all eight units of the CED (2024-25 revision), modeled on a full read of Albert's AP Physics 1 bank
// (notes in ../private/albert-notes/phys1-*.md); no question is taken from Albert or the College Board.
// decks/phys1/u<N>.js: the review bank, multiple choice and free response in the four AP types, scored point by point.
// decks/phys1-topic/q<U><T>.js: a quiz for each topic (6 multiple choice and a 3 or 4 point free response).
// decks/phys1-tests/t1.js to t8.js: a test per unit in the shape of Albert's unit assessments (18 multiple choice, 20
// for Unit 2, then one AP free-response question). decks/phys1-exams/e1.js, e2.js: full practice exams (42 multiple
// choice, then MR, TBR, EDA, QQT; 82 points). Every key was checked by computation. In a multiple-choice item the
// right choice is first (the site shuffles review and spreads keys evenly on forms).

import * as r_u1 from "./phys1/u1.js";
import * as r_u2a from "./phys1/u2a.js";
import * as r_u2b from "./phys1/u2b.js";
import * as r_u2c from "./phys1/u2c.js";
import * as r_u3 from "./phys1/u3.js";
import * as r_u4 from "./phys1/u4.js";
import * as r_u5 from "./phys1/u5.js";
import * as r_u6 from "./phys1/u6.js";
import * as r_u7 from "./phys1/u7.js";
import * as r_u8 from "./phys1/u8.js";
import * as q11 from "./phys1-topic/q11.js";
import * as q12 from "./phys1-topic/q12.js";
import * as q13 from "./phys1-topic/q13.js";
import * as q14 from "./phys1-topic/q14.js";
import * as q15 from "./phys1-topic/q15.js";
import * as q21 from "./phys1-topic/q21.js";
import * as q22 from "./phys1-topic/q22.js";
import * as q23 from "./phys1-topic/q23.js";
import * as q24 from "./phys1-topic/q24.js";
import * as q25 from "./phys1-topic/q25.js";
import * as q26 from "./phys1-topic/q26.js";
import * as q27 from "./phys1-topic/q27.js";
import * as q28 from "./phys1-topic/q28.js";
import * as q29 from "./phys1-topic/q29.js";
import * as q31 from "./phys1-topic/q31.js";
import * as q32 from "./phys1-topic/q32.js";
import * as q33 from "./phys1-topic/q33.js";
import * as q34 from "./phys1-topic/q34.js";
import * as q35 from "./phys1-topic/q35.js";
import * as q41 from "./phys1-topic/q41.js";
import * as q42 from "./phys1-topic/q42.js";
import * as q43 from "./phys1-topic/q43.js";
import * as q44 from "./phys1-topic/q44.js";
import * as q51 from "./phys1-topic/q51.js";
import * as q52 from "./phys1-topic/q52.js";
import * as q53 from "./phys1-topic/q53.js";
import * as q54 from "./phys1-topic/q54.js";
import * as q55 from "./phys1-topic/q55.js";
import * as q56 from "./phys1-topic/q56.js";
import * as q61 from "./phys1-topic/q61.js";
import * as q62 from "./phys1-topic/q62.js";
import * as q63 from "./phys1-topic/q63.js";
import * as q64 from "./phys1-topic/q64.js";
import * as q65 from "./phys1-topic/q65.js";
import * as q66 from "./phys1-topic/q66.js";
import * as q71 from "./phys1-topic/q71.js";
import * as q72 from "./phys1-topic/q72.js";
import * as q73 from "./phys1-topic/q73.js";
import * as q74 from "./phys1-topic/q74.js";
import * as q81 from "./phys1-topic/q81.js";
import * as q82 from "./phys1-topic/q82.js";
import * as q83 from "./phys1-topic/q83.js";
import * as q84 from "./phys1-topic/q84.js";
import * as t1 from "./phys1-tests/t1.js";
import * as t2 from "./phys1-tests/t2.js";
import * as t3 from "./phys1-tests/t3.js";
import * as t4 from "./phys1-tests/t4.js";
import * as t5 from "./phys1-tests/t5.js";
import * as t6 from "./phys1-tests/t6.js";
import * as t7 from "./phys1-tests/t7.js";
import * as t8 from "./phys1-tests/t8.js";
import * as e1 from "./phys1-exams/e1.js";
import * as e2 from "./phys1-exams/e2.js";

const reviews = [r_u1, r_u2a, r_u2b, r_u2c, r_u3, r_u4, r_u5, r_u6, r_u7, r_u8];
const quizzes = [q11, q12, q13, q14, q15, q21, q22, q23, q24, q25, q26, q27, q28, q29, q31, q32, q33, q34, q35, q41, q42, q43, q44, q51, q52, q53, q54, q55, q56, q61, q62, q63, q64, q65, q66, q71, q72, q73, q74, q81, q82, q83, q84];
const tests = [t1, t2, t3, t4, t5, t6, t7, t8];
const exams = [e1, e2];
const points = (f) => f.items.reduce((t, it) => t + (it.type === "frq" ? it.rows.length : 1), 0);
const skills = [
  { id: "u1", name: "Unit 1: Kinematics", from: "Topics 1.1 to 1.5", short: "U1" },
  { id: "u2", name: "Unit 2: Force and Translational Dynamics", from: "Topics 2.1 to 2.9", short: "U2" },
  { id: "u3", name: "Unit 3: Work, Energy, and Power", from: "Topics 3.1 to 3.5", short: "U3" },
  { id: "u4", name: "Unit 4: Linear Momentum", from: "Topics 4.1 to 4.4", short: "U4" },
  { id: "u5", name: "Unit 5: Torque and Rotational Dynamics", from: "Topics 5.1 to 5.6", short: "U5" },
  { id: "u6", name: "Unit 6: Energy and Momentum of Rotating Systems", from: "Topics 6.1 to 6.6", short: "U6" },
  { id: "u7", name: "Unit 7: Oscillations", from: "Topics 7.1 to 7.4", short: "U7" },
  { id: "u8", name: "Unit 8: Fluids", from: "Topics 8.1 to 8.4", short: "U8" },
];
const group = (n) => skills[n - 1].name;
// Each unit lists its topic quizzes, then its test; the practice exams come last.
const forms = [1, 2, 3, 4, 5, 6, 7, 8].flatMap((n) => [
  ...quizzes.flatMap((m) => m.default.forms).filter((f) => f.id[1] === String(n))
    .map((f) => ({ ...f, group: group(n), col: `Unit ${n} topic quizzes`, short: f.id[1] + "." + f.id[2], total: points(f) })),
  ...tests.flatMap((m) => m.default.forms).filter((f) => f.id === "t" + n).map((f) => ({ ...f, group: group(n), short: "U" + n, total: points(f) })),
]).concat(exams.flatMap((m) => m.default.forms).map((f, i) => ({ ...f, group: "Practice exams", short: "PE" + (i + 1), total: points(f) })));

export default {
  id: "phys1",
  course: "AP Physics 1",
  title: "Review: all eight units",
  lang: "math",
  calcChips: false,
  typeNames: { mcq: "Multiple choice", frq: "Free response" },
  blurb: "Multiple choice and free response for every unit, with diagrams, graphs, and data, and free response in the four AP types scored the way the AP scores it. A calculator and the equation sheet are allowed throughout, as on the exam.",
  focus: [
    { id: "mcq", name: "Multiple choice", types: ["mcq"] },
    { id: "frq", name: "Free response", types: ["frq"], size: 5 },
  ],
  skills,
  sets: Object.assign({}, ...reviews.map((u) => u.sets), ...quizzes.map((m) => m.sets), ...tests.map((m) => m.sets), ...exams.map((m) => m.sets)),
  forms,
  mock: {
    name: "Quizzes and tests",
    title: "Topic quizzes, unit tests, and practice exams",
    cta: "Take a quiz or test",
    stat: [forms.length, "quizzes, tests, and exams"],
    total: 38,
    clock: null,
    blurb: "A quiz for every topic, a test for every unit, and two full practice exams. None of their questions are in review.",
    intro: [
      ["Topic quizzes", "check one topic at a time: 6 multiple-choice questions and one short free-response question, about 10 points."],
      ["Unit tests", "have 18 multiple-choice questions (20 for Unit 2) and one AP free-response question: Mathematical Routines (10 points), Translation Between Representations (12), Experimental Design and Analysis (10), or Qualitative/Quantitative Translation (8)."],
      ["Practice exams", "are the whole AP exam: 42 multiple-choice questions, then the four free-response questions, 82 points. On the exam, Section I takes 85 minutes and Section II 95 minutes."],
      ["How scoring works.", "Multiple choice is scored for you. When you finish, you score each free-response part yourself against the scoring guidelines, one point at a time, before the solutions appear. Work on paper as on the exam, with a calculator and the equation sheet."],
    ],
    sections: { mcq: "Section I: Multiple choice", frq: "Section II: Free response" },
    partA: { points: 1, slots: [] },
    partB: { kind: "rubric" },
  },
  items: reviews.flatMap((u) => u.default),
};

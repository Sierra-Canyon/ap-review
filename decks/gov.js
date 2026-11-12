// AP U.S. Government and Politics · review bank, topic quizzes, and unit tests for all five units of the CED.
// Ms. Salter's Periods B and H share this deck (courses.js). Modeled on a full read of Albert's AP U.S. Government bank
// (1,049 practice questions, 25 free-response questions, the unit assessments, and three practice exams): the same kinds
// of question, the same spread of difficulty, and about the same share of charts and tables. No question is taken from
// Albert or the College Board. Primary texts are public-domain and quoted verbatim with their source; passages that
// summarize modern arguments and scenarios were written for this bank and are labeled so; every data set is real and cited.
// In a multiple-choice item the right choice is always written first; the site shuffles them.
import * as u1 from "./gov/u1.js";
import * as u2a from "./gov/u2a.js";
import * as u2b from "./gov/u2b.js";
import * as u3 from "./gov/u3.js";
import * as u4 from "./gov/u4.js";
import * as u5a from "./gov/u5a.js";
import * as u5b from "./gov/u5b.js";

// Unit tests (decks/gov-mocks/): one per unit, the AP exam in miniature: 20 multiple choice and two free-response
// questions (one concept application or quantitative analysis, one SCOTUS comparison or argument essay).
import * as g1a from "./gov-mocks/g1a.js";
import * as g2a from "./gov-mocks/g2a.js";
import * as g3a from "./gov-mocks/g3a.js";
import * as g4a from "./gov-mocks/g4a.js";
import * as g5a from "./gov-mocks/g5a.js";
// Topic quizzes (decks/gov-topic/): one for each CED topic, 8 multiple choice and one concept application (3 parts),
// 11 points. Nothing in a quiz or a test is in review, and quizzes and tests do not share sources.
import * as t11 from "./gov-topic/t11.js";
import * as t12 from "./gov-topic/t12.js";
import * as t13 from "./gov-topic/t13.js";
import * as t14 from "./gov-topic/t14.js";
import * as t15 from "./gov-topic/t15.js";
import * as t16 from "./gov-topic/t16.js";
import * as t17 from "./gov-topic/t17.js";
import * as t18 from "./gov-topic/t18.js";
import * as t19 from "./gov-topic/t19.js";
import * as t21 from "./gov-topic/t21.js";
import * as t22 from "./gov-topic/t22.js";
import * as t23 from "./gov-topic/t23.js";
import * as t24 from "./gov-topic/t24.js";
import * as t25 from "./gov-topic/t25.js";
import * as t26 from "./gov-topic/t26.js";
import * as t27 from "./gov-topic/t27.js";
import * as t28 from "./gov-topic/t28.js";
import * as t29 from "./gov-topic/t29.js";
import * as t210 from "./gov-topic/t210.js";
import * as t211 from "./gov-topic/t211.js";
import * as t212 from "./gov-topic/t212.js";
import * as t213 from "./gov-topic/t213.js";
import * as t214 from "./gov-topic/t214.js";
import * as t215 from "./gov-topic/t215.js";
import * as t31 from "./gov-topic/t31.js";
import * as t32 from "./gov-topic/t32.js";
import * as t33 from "./gov-topic/t33.js";
import * as t34 from "./gov-topic/t34.js";
import * as t35 from "./gov-topic/t35.js";
import * as t36 from "./gov-topic/t36.js";
import * as t37 from "./gov-topic/t37.js";
import * as t38 from "./gov-topic/t38.js";
import * as t39 from "./gov-topic/t39.js";
import * as t310 from "./gov-topic/t310.js";
import * as t311 from "./gov-topic/t311.js";
import * as t312 from "./gov-topic/t312.js";
import * as t313 from "./gov-topic/t313.js";
import * as t41 from "./gov-topic/t41.js";
import * as t42 from "./gov-topic/t42.js";
import * as t43 from "./gov-topic/t43.js";
import * as t44 from "./gov-topic/t44.js";
import * as t45 from "./gov-topic/t45.js";
import * as t46 from "./gov-topic/t46.js";
import * as t47 from "./gov-topic/t47.js";
import * as t48 from "./gov-topic/t48.js";
import * as t49 from "./gov-topic/t49.js";
import * as t410 from "./gov-topic/t410.js";
import * as t51 from "./gov-topic/t51.js";
import * as t52 from "./gov-topic/t52.js";
import * as t53 from "./gov-topic/t53.js";
import * as t54 from "./gov-topic/t54.js";
import * as t55 from "./gov-topic/t55.js";
import * as t56 from "./gov-topic/t56.js";
import * as t57 from "./gov-topic/t57.js";
import * as t58 from "./gov-topic/t58.js";
import * as t59 from "./gov-topic/t59.js";
import * as t510 from "./gov-topic/t510.js";
import * as t511 from "./gov-topic/t511.js";
import * as t512 from "./gov-topic/t512.js";
import * as t513 from "./gov-topic/t513.js";

const units = [u1, u2a, u2b, u3, u4, u5a, u5b];
const mocks = [g1a, g2a, g3a, g4a, g5a];
const topics = [t11, t12, t13, t14, t15, t16, t17, t18, t19, t21, t22, t23, t24, t25, t26, t27, t28, t29, t210, t211, t212, t213, t214, t215, t31, t32, t33, t34, t35, t36, t37, t38, t39, t310, t311, t312, t313, t41, t42, t43, t44, t45, t46, t47, t48, t49, t410, t51, t52, t53, t54, t55, t56, t57, t58, t59, t510, t511, t512, t513];
const rowsMax = (it) => (it.rows || []).reduce((t, r) => t + (r.max ?? (r.levels ? r.levels.length - 1 : 1)), 0);
const total = (f) => f.items.reduce((t, it) => t + (it.type === "essay" ? rowsMax(it) : 1), 0);
// On the page each unit lists its topic quizzes in topic order, then its test. The Class tab gives the quizzes their own column.
const tests = mocks.flatMap((m) => m.default.forms).map((f) => ({ ...f, short: "U" + f.id[1], total: total(f) }));
const quizzes = topics.flatMap((m) => m.default.forms).map((f) => ({ ...f, short: f.id[1] + "." + f.id.slice(2), col: `Unit ${f.id[1]} topic quizzes`, total: total(f) }));
const forms = [1, 2, 3, 4, 5].flatMap((n) => {
  const unit = [...quizzes, ...tests].filter((f) => f.id[1] === String(n));
  const date = unit.find((f) => f.date)?.date;
  return unit.map((f) => ({ ...f, ...(date ? { date } : {}) }));
});

const SETS = Object.assign({}, ...units.map((u) => u.sets), ...mocks.map((m) => m.sets), ...topics.map((m) => m.sets));
// A question on a chart or a data table: its set has a source with an svg, img, or table block.
const isVisual = (it) => !!SETS[it.set]?.sources?.some((src) => (src.blocks || []).some((b) => b.svg || b.img || b.table));

export default {
  id: "gov",
  course: "AP U.S. Government and Politics",
  title: "Review: all five units",
  lang: "none",
  // No dates yet: add { name, date } entries (next first) and a date on each form when Ms. Salter sends them.
  dates: [],
  typeNames: { mcq: "Multiple choice", fr: "Free response", essay: "Essay" },
  blurb: "Multiple choice on founding documents, Supreme Court cases, scenarios, and data, with concept application, quantitative analysis, SCOTUS comparison, and argument essays scored with the AP rubric.",
  focus: [
    { id: "mcq", name: "Multiple choice", types: ["mcq"] },
    { id: "fr", name: "Free response", types: ["fr"], size: 7 },
    { id: "essay", name: "Essays", types: ["essay"], size: 2 },
    { id: "charts", name: "Charts and data", filter: isVisual },
    { id: "u1", name: "Unit 1", skills: ["u1"] },
    { id: "u2", name: "Unit 2", skills: ["u2"] },
    { id: "u3", name: "Unit 3", skills: ["u3"] },
    { id: "u4", name: "Unit 4", skills: ["u4"] },
    { id: "u5", name: "Unit 5", skills: ["u5"] },
  ],
  mix: { filter: isVisual, per: 2 },
  skills: [
    { id: "u1", name: "Unit 1: Foundations of American Democracy", from: "Topics 1.1 to 1.9", short: "U1" },
    { id: "u2", name: "Unit 2: Interactions Among Branches of Government", from: "Topics 2.1 to 2.15", short: "U2" },
    { id: "u3", name: "Unit 3: Civil Liberties and Civil Rights", from: "Topics 3.1 to 3.13", short: "U3" },
    { id: "u4", name: "Unit 4: American Political Ideologies and Beliefs", from: "Topics 4.1 to 4.10", short: "U4" },
    { id: "u5", name: "Unit 5: Political Participation", from: "Topics 5.1 to 5.13", short: "U5" },
  ],
  sets: SETS,
  forms,
  mock: {
    name: "Quizzes and tests",
    title: "Topic quizzes and unit tests",
    cta: "Take a quiz or test",
    stat: [forms.length, "quizzes and tests"],
    total: 30,
    clock: null,
    blurb: "A quiz for each topic and a test for each unit in the shape of the AP exam. None of their sources or questions are in review.",
    intro: [
      ["Topic quizzes", "check one topic at a time: 8 multiple-choice questions and one concept application question of three parts, 11 points."],
      ["Unit tests", "are the AP exam in miniature: Section I is 20 multiple-choice questions; Section II is two free-response questions, one concept application or quantitative analysis question and one SCOTUS comparison or argument essay. 1 point for each multiple-choice question and each free-response part, and the rubric's points for the essay."],
      ["How scoring works.", "Multiple choice is scored for you. When you finish, you score each free-response part and the essay yourself, with the AP scoring guidelines, before the model answers appear."],
      ["On the exam,", "Section I is 55 multiple-choice questions in 80 minutes. Section II is four free-response questions in 100 minutes: concept application, quantitative analysis, SCOTUS comparison, and the argument essay."],
    ],
    sections: { mcq: "Section I", fr: "Section II", essay: "Section II" },
    partA: { points: 1, slots: [] },
    partB: { kind: "rubric" },
  },
  items: units.flatMap((u) => u.default),
};

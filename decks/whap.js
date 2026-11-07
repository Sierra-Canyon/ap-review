// AP World History: Modern · review bank, all nine units of the CED.
// Each unit (decks/whap/u1.js to u9.js) has stimulus-based multiple choice in sets of three or four questions on one source,
// three short-answer questions (SAQ), two long essay questions (LEQ), and, for Units 3 to 9, a document-based question (DBQ).
// Every primary source is a public-domain text quoted verbatim, with its citation and the page it was copied from.
// Passages that summarize historians' interpretations were written for this bank and are labeled so; no historian is quoted.
// Modeled on the AP exam's format (which Albert's bank also follows); no question is taken from Albert or the College Board.
// In a multiple-choice item the right choice is always written first; the site shuffles them.
import * as u1 from "./whap/u1.js";
import * as u2 from "./whap/u2.js";
import * as u3 from "./whap/u3.js";
import * as u4 from "./whap/u4.js";
import * as u5 from "./whap/u5.js";
import * as u6 from "./whap/u6.js";
import * as u7 from "./whap/u7.js";
import * as u8 from "./whap/u8.js";
import * as u9 from "./whap/u9.js";
// Maps and charts for Units 1 to 3 (decks/whap/visual.js): maps drawn by tools/build-maps.mjs, charts of cited data.
import * as visual from "./whap/visual.js";
// More review for Units 1 to 3 (11/6), to bring each topic closer to the coverage of Albert's practice by topic.
import * as u1x from "./whap/u1x.js";
import * as u2x from "./whap/u2x.js";
import * as u3x from "./whap/u3x.js";
// Maps, a chart, and pictures for Units 4 to 6 (decks/whap/visual2.js), and more review for Units 4 to 6 (11/6), also aligned with Albert.
import * as visual2 from "./whap/visual2.js";
import * as u4x from "./whap/u4x.js";
import * as u5x from "./whap/u5x.js";
import * as u6x from "./whap/u6x.js";
import * as u7x from "./whap/u7x.js";
import * as u8x from "./whap/u8x.js";
import * as u9x from "./whap/u9x.js";
// Maps, pictures, and primary sources for Units 1 to 6 (11/7), modeled on Albert's items read one by one.
import * as visual3 from "./whap/visual3.js";

// Unit assessments (decks/whap-mocks/): one form per unit, two for Unit 2, written only for the mocks. No item or source in them is in review.
// Each is the AP exam in miniature: 15 source-based multiple choice, two short-answer questions (6 parts), and one long essay, 27 points.
import * as w1a from "./whap-mocks/w1a.js";
import * as w2a from "./whap-mocks/w2a.js";
import * as w2b from "./whap-mocks/w2b.js";
import * as w3a from "./whap-mocks/w3a.js";
import * as w3b from "./whap-mocks/w3b.js";
import * as w4a from "./whap-mocks/w4a.js";
import * as w5a from "./whap-mocks/w5a.js";
import * as w6a from "./whap-mocks/w6a.js";
import * as w7a from "./whap-mocks/w7a.js";
import * as w8a from "./whap-mocks/w8a.js";
import * as w9a from "./whap-mocks/w9a.js";
// Topic quizzes (decks/whap-topic/): one for each CED topic in Units 1 to 3, 8 source-based multiple choice and one
// short-answer question (3 parts), 11 points. Written only for the quizzes: no item or source in them is in review or a unit assessment.
import * as t11 from "./whap-topic/t11.js";
import * as t12 from "./whap-topic/t12.js";
import * as t13 from "./whap-topic/t13.js";
import * as t14 from "./whap-topic/t14.js";
import * as t15 from "./whap-topic/t15.js";
import * as t16 from "./whap-topic/t16.js";
import * as t17 from "./whap-topic/t17.js";
import * as t21 from "./whap-topic/t21.js";
import * as t22 from "./whap-topic/t22.js";
import * as t23 from "./whap-topic/t23.js";
import * as t24 from "./whap-topic/t24.js";
import * as t25 from "./whap-topic/t25.js";
import * as t26 from "./whap-topic/t26.js";
import * as t27 from "./whap-topic/t27.js";
import * as t31 from "./whap-topic/t31.js";
import * as t32 from "./whap-topic/t32.js";
import * as t33 from "./whap-topic/t33.js";
import * as t34 from "./whap-topic/t34.js";

const units = [u1, u2, u3, u4, u5, u6, u7, u8, u9, visual, u1x, u2x, u3x, visual2, u4x, u5x, u6x, u7x, visual3, u8x, u9x];
const mocks = [w1a, w2a, w2b, w3a, w3b, w4a, w5a, w6a, w7a, w8a, w9a];
const rowsMax = (it) => (it.rows || []).reduce((t, r) => t + (r.max ?? (r.levels ? r.levels.length - 1 : 1)), 0);
const topics = [t11, t12, t13, t14, t15, t16, t17, t21, t22, t23, t24, t25, t26, t27, t31, t32, t33, t34];
const total = (f) => f.items.reduce((t, it) => t + (it.type === "essay" ? rowsMax(it) : 1), 0);
// On the page each unit lists its topic quizzes, then its assessments. The Class tab gives the quizzes their own column.
const assessments = mocks.flatMap((m) => m.default.forms).map((f) => ({ ...f, short: { w2a: "U2A", w2b: "U2B", w3a: "U3A", w3b: "U3B" }[f.id] || "U" + f.id[1], total: total(f) }));
const quizzes = topics.flatMap((m) => m.default.forms).map((f) => ({ ...f, short: f.id[1] + "." + f.id[2], col: `Unit ${f.id[1]} topic quizzes`, total: total(f) }));
const forms = [1, 2, 3, 4, 5, 6, 7, 8, 9].flatMap((n) => {
  const unit = [...quizzes, ...assessments].filter((f) => f.id[1] === String(n));
  const date = unit.find((f) => f.date)?.date;
  // Unit 1 was tested before the site had dates: it goes under "Earlier this year" on the quizzes and tests page.
  return unit.map((f) => ({ ...f, ...(date ? { date } : {}), ...(n === 1 ? { past: true } : {}) }));
});

export default {
  id: "whap",
  course: "AP World History: Modern",
  title: "Review: all nine units",
  lang: "none",
  dates: [{ name: "The Unit 2 Test", date: "2026-11-04" }],
  typeNames: { mcq: "Multiple choice", fr: "Short answer", essay: "Essay" },
  blurb: "Source-based multiple choice, short-answer questions, and LEQ and DBQ essays scored with the AP rubric, for every unit.",
  focus: [
    { id: "mcq", name: "Multiple choice", types: ["mcq"] },
    { id: "saq", name: "Short answer", types: ["fr"], size: 6 },
    { id: "essay", name: "Essays", types: ["essay"], size: 2 },
    { id: "u2", name: "Unit 2 only", skills: ["u2"] },
    { id: "maps", name: "Maps and charts", filter: (it) => /^u\d-v\d/.test(it.id) },
  ],
  skills: [
    { id: "u1", name: "Unit 1: The Global Tapestry", from: "c. 1200 to c. 1450", short: "U1" },
    { id: "u2", name: "Unit 2: Networks of Exchange", from: "c. 1200 to c. 1450", short: "U2" },
    { id: "u3", name: "Unit 3: Land-Based Empires", from: "c. 1450 to c. 1750", short: "U3" },
    { id: "u4", name: "Unit 4: Transoceanic Interconnections", from: "c. 1450 to c. 1750", short: "U4" },
    { id: "u5", name: "Unit 5: Revolutions", from: "c. 1750 to c. 1900", short: "U5" },
    { id: "u6", name: "Unit 6: Consequences of Industrialization", from: "c. 1750 to c. 1900", short: "U6" },
    { id: "u7", name: "Unit 7: Global Conflict", from: "c. 1900 to the present", short: "U7" },
    { id: "u8", name: "Unit 8: Cold War and Decolonization", from: "c. 1900 to the present", short: "U8" },
    { id: "u9", name: "Unit 9: Globalization", from: "c. 1900 to the present", short: "U9" },
  ],
  sets: Object.assign({}, ...units.map((u) => u.sets), ...mocks.map((m) => m.sets), ...topics.map((m) => m.sets)),
  forms,
  mock: {
    name: "Quizzes and tests",
    title: "Topic quizzes and unit assessments",
    cta: "Take a quiz or test",
    stat: [forms.length, "quizzes and tests"],
    total: 27,
    clock: null,
    blurb: "A quiz for each topic in Units 1 and 2, and an assessment for each unit in the shape of the AP exam. None of their sources or questions are in review.",
    intro: [
      ["Topic quizzes", "(Units 1 and 2) check one topic at a time: 8 multiple-choice questions on sources and one short-answer question of three parts, 11 points."],
      ["Unit assessments", "are the AP exam in miniature: Section I, Part A is 15 multiple-choice questions on sources; Section I, Part B is two short-answer questions of three parts each; Section II is one long essay question. 27 points: 1 for each multiple-choice question, 1 for each short-answer part, and up to 6 for the essay."],
      ["How scoring works.", "Multiple choice is scored for you. When you finish, you score each short-answer part and the essay yourself, with the AP scoring guidelines and rubric, before the model answers appear."],
      ["On the exam,", "Section I, Part A is 55 minutes for 55 questions, Part B is 40 minutes for three short answers, and the long essay is 40 minutes."],
    ],
    sections: { mcq: "Section I, Part A", fr: "Section I, Part B", essay: "Section II" },
    partA: { points: 1, slots: [] },
    partB: { kind: "rubric" },
  },
  items: units.flatMap((u) => u.default),
};

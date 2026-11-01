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

// Unit assessments (decks/whap-mocks/): one form per unit, two for Unit 2, written only for the mocks. No item or source in them is in review.
// Each is the AP exam in miniature: 15 source-based multiple choice, two short-answer questions (6 parts), and one long essay, 27 points.
import * as w1a from "./whap-mocks/w1a.js";
import * as w2a from "./whap-mocks/w2a.js";
import * as w2b from "./whap-mocks/w2b.js";
import * as w3a from "./whap-mocks/w3a.js";
import * as w4a from "./whap-mocks/w4a.js";
import * as w5a from "./whap-mocks/w5a.js";
import * as w6a from "./whap-mocks/w6a.js";
import * as w7a from "./whap-mocks/w7a.js";
import * as w8a from "./whap-mocks/w8a.js";
import * as w9a from "./whap-mocks/w9a.js";

const units = [u1, u2, u3, u4, u5, u6, u7, u8, u9];
const mocks = [w1a, w2a, w2b, w3a, w4a, w5a, w6a, w7a, w8a, w9a];
const rowsMax = (it) => (it.rows || []).reduce((t, r) => t + (r.max ?? (r.levels ? r.levels.length - 1 : 1)), 0);
const forms = mocks.flatMap((m) => m.default.forms).map((f) => ({
  ...f,
  short: { w2a: "U2A", w2b: "U2B" }[f.id] || "U" + f.id[1],
  total: f.items.reduce((t, it) => t + (it.type === "essay" ? rowsMax(it) : 1), 0),
}));

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
  sets: Object.assign({}, ...units.map((u) => u.sets), ...mocks.map((m) => m.sets)),
  forms,
  mock: {
    name: "Unit assessment",
    title: "Unit assessments",
    total: 27,
    clock: null,
    blurb: "One for each unit, two for Unit 2, in the shape of the AP exam. None of their sources or questions are in review.",
    intro: [
      ["", "Each unit assessment is the AP exam in miniature: Section I, Part A is 15 multiple-choice questions on sources; Section I, Part B is two short-answer questions of three parts each; Section II is one long essay question. 27 points: 1 for each multiple-choice question, 1 for each short-answer part, and up to 6 for the essay."],
      ["How scoring works.", "Multiple choice is scored for you. When you finish, you score each short-answer part and the essay yourself, with the AP scoring guidelines and rubric, before the model answers appear."],
      ["On the exam,", "Section I, Part A is 55 minutes for 55 questions, Part B is 40 minutes for three short answers, and the long essay is 40 minutes."],
    ],
    sections: { mcq: "Section I, Part A", fr: "Section I, Part B", essay: "Section II" },
    partA: { points: 1, slots: [] },
    partB: { kind: "rubric" },
  },
  items: units.flatMap((u) => u.default),
};

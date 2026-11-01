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

const units = [u1, u2, u3, u4, u5, u6, u7, u8, u9];

export default {
  id: "whap",
  course: "AP World History: Modern",
  title: "Review: all nine units",
  lang: "none",
  typeNames: { mcq: "Multiple choice", fr: "Short answer", essay: "Essay" },
  blurb: "Source-based multiple choice, short-answer questions, and LEQ and DBQ essays scored with the AP rubric, for every unit.",
  focus: [
    { id: "mcq", name: "Multiple choice", types: ["mcq"] },
    { id: "saq", name: "Short answer", types: ["fr"], size: 6 },
    { id: "essay", name: "Essays", types: ["essay"], size: 2 },
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
  sets: Object.assign({}, ...units.map((u) => u.sets)),
  mock: null,
  items: units.flatMap((u) => u.default),
};

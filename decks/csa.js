// AP Computer Science A · Unit 2: Selection and Iteration · review deck
// Review items are in decks/csa-u2/review-*.js; the mock quizzes and tests in decks/csa-u2/mocks-*.js.
// Every block of Java here was compiled and run with Java 21 by tools/verify-java.mjs.
// In a multiple-choice item the right choice is always written first; the site shuffles them.
// Modeled on the class's AP Classroom quizzes and tests (Q3 to Q5, U2T) and the AP exam's format, without reusing their items.

import reviewA from "./csa-u2/review-a.js";
import reviewB from "./csa-u2/review-b.js";
import reviewFrq from "./csa-u2/review-frq.js";
import mocks1 from "./csa-u2/mocks-1.js";
import mocks2 from "./csa-u2/mocks-2.js";
// Review and a third Quiz 5 mock built on the crawler quests (13 to 17), added 11/3.
import reviewCrawler from "./csa-u2/review-crawler.js";
import mocks3 from "./csa-u2/mocks-3.js";
// Mock assessments for the whole year, two forms of each (decks/csa-year/).
import q1q2 from "./csa-year/q1-q2.js";
import u1 from "./csa-year/u1.js";
import q3q4 from "./csa-year/q3-q4.js";
import ps from "./csa-year/ps.js";
import mt from "./csa-year/mt.js";
import u3 from "./csa-year/u3.js";
import u4a from "./csa-year/u4a.js";
import u4 from "./csa-year/u4.js";
import apa from "./csa-year/apa.js";
import apb from "./csa-year/apb.js";

const fallForms = [...mocks1.forms, ...mocks2.forms, ...mocks3.forms].map((f) => ({
  ...f,
  group: f.id.startsWith("q5") ? "Quiz 5: String Algorithms" : "Unit 2 Test",
  date: f.id.startsWith("q5") ? "2026-11-06" : "2026-11-17",
}));
const shortName = (f) => f.name.replace(/^Quiz (\d+) Practice /, "Q$1 ").replace(/^Unit (\w+) Test Practice /, "U$1 ").replace(/^Unit 4A Checkpoint Practice /, "4A ")
  .replace(/^AP Practice Section /, "PS ").replace(/^Midterm Practice /, "Mid ").replace(/^AP Practice Exam /, "AP ");

export default {
  id: "csa",
  course: "AP Computer Science A",
  title: "Unit 2: Selection and Iteration",
  // The countdown shows the next of these.
  dates: [
    { name: "Quiz 5", date: "2026-11-06" },
    { name: "The Unit 2 Progress Check", date: "2026-11-13" },
    { name: "The Unit 2 Test", date: "2026-11-17" },
    { name: "The AP Practice Section", date: "2026-12-08" },
    { name: "The midterm", date: "2026-12-14" },
    { name: "Quiz 6", date: "2027-01-12" },
    { name: "Quiz 7", date: "2027-01-19" },
    { name: "The Unit 3 Test", date: "2027-01-28" },
    { name: "Quiz 8", date: "2027-02-04" },
    { name: "The Unit 4A Checkpoint", date: "2027-02-23" },
    { name: "The Unit 4 Test", date: "2027-03-18" },
    { name: "The AP Practice Exam", date: "2027-04-05" },
    { name: "The AP exam", date: "2027-05-12" },
  ],
  lang: "java",
  typeNames: { mcq: "Code reading", output: "Type the output", code: "Free response" },
  blurb: "Code-reading questions, type-the-output questions, and free responses scored row by row like the test's rubric.",
  focus: [
    { id: "string", name: "Quiz 5 (11/6)", skills: ["string"] },
    { id: "u2test", name: "Unit 2 Test (11/17)", skills: ["bool", "if", "while", "for", "algo", "string", "nested", "runtime", "frq"] },
    { id: "quests", name: "Quests 13 to 17", filter: (it) => it.id.startsWith("u2c-") },
    { id: "read", name: "Code reading", types: ["mcq", "output"] },
    { id: "code", name: "Free response", types: ["code"], size: 3 },
  ],
  skills: [
    { id: "bool", name: "Boolean expressions", from: "2.2, 2.5, 2.6", short: "Boolean" },
    { id: "if", name: "if statements", from: "2.3, 2.4", short: "if" },
    { id: "while", name: "while loops", from: "2.7", short: "while" },
    { id: "for", name: "for loops", from: "2.8", short: "for" },
    { id: "algo", name: "Selection and iteration algorithms", from: "2.9", short: "Algorithms" },
    { id: "string", name: "String algorithms", from: "2.10", short: "Strings" },
    { id: "nested", name: "Nested loops", from: "2.11", short: "Nested" },
    { id: "runtime", name: "Informal run-time analysis", from: "2.12", short: "Run time" },
    { id: "frq", name: "Writing the code", from: "Free response", short: "FRQ" },
    // Skills the year's mocks use that Unit 2 review does not have yet.
    { id: "types", name: "Types, output, and concatenation", from: "Unit 1", short: "Types" },
    { id: "arith", name: "Arithmetic and casting", from: "Unit 1", short: "Arith." },
    { id: "objects", name: "Objects, methods, String and Math", from: "Unit 1", short: "Objects" },
    { id: "classes", name: "Writing classes", from: "Unit 3", short: "Classes" },
    { id: "arrays", name: "Arrays", from: "Unit 4", short: "Arrays" },
    { id: "arraylist", name: "ArrayList", from: "Unit 4", short: "ArrayList" },
    { id: "search", name: "Searching and sorting", from: "Unit 4", short: "Search" },
    { id: "twod", name: "2D arrays", from: "Unit 4", short: "2D" },
    { id: "files", name: "Text files and data sets", from: "Unit 4", short: "Files" },
    { id: "recursion", name: "Recursion tracing", from: "Unit 4", short: "Recursion" },
  ],
  forms: [...q1q2.forms, ...u1.forms, ...q3q4.forms, ...fallForms, ...ps.forms, ...mt.forms, ...u3.forms, ...u4a.forms, ...u4.forms, ...apa.forms, ...apb.forms]
    .map((f) => ({
      ...f,
      short: shortName(f),
      // 1 point per multiple choice, 1 per rubric row
      total: f.items.reduce((t, it) => t + (it.type === "code" ? it.rows.length : 1), 0),
    }))
    .sort((a, b) => a.date.localeCompare(b.date)),
  mock: {
    name: "Mock test",
    title: "Practice for every assessment this year",
    total: 27,
    clock: null,
    blurb: "Practice forms for every quiz and test this year, from Quiz 1 to the AP Practice Exam, each the same shape as the real one. None of their questions are in review.",
    intro: [
      ["", "Each quiz and test this year has practice forms in the same shape as the real one: quizzes are six multiple choice, tests add free responses, and the AP Practice Exam is the full exam (42 multiple choice and four free responses). Multiple choice is 1 point each; a free response is 1 point per rubric row."],
      ["", "No IDE and no compiler, as on the real assessments. No feedback until the end. You score free responses yourself, row by row. None of these questions are in review, so each form shows how you do on code you have not practiced."],
    ],
    partA: { points: 1, slots: [] },
    partB: { kind: "rubric" },
  },
  items: [...reviewA, ...reviewB, ...reviewFrq, ...reviewCrawler],
};

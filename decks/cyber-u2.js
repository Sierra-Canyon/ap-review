// AP Cybersecurity · Unit 2 Test: Securing Spaces · review deck
// Scenario items are in decks/cyber-u2/mc-*.js, the free responses in fr-*.js, and the vocabulary
// (built from the course Anki deck by tools/build-cyber-vocab.mjs) in vocab.js.
// In a multiple-choice item the right choice is always written first; the site shuffles them.
// Every word in an answer or a distractor is a term from the course Anki deck (Units 1 and 2).

import frameworks from "./cyber-u2/mc-frameworks.js";
import physical from "./cyber-u2/mc-physical.js";
import risk from "./cyber-u2/mc-risk.js";
import vocab from "./cyber-u2/vocab.js";
import library, { set as librarySet } from "./cyber-u2/fr-library.js";
import storage, { set as storageSet } from "./cyber-u2/fr-storage.js";
import theater, { set as theaterSet } from "./cyber-u2/fr-theater.js";
// Three fixed mock tests, written only for the mocks: none of their items is in review.
import mock1, { set as mock1Set } from "./cyber-u2-mocks/mock1.js";
import mock2, { set as mock2Set } from "./cyber-u2-mocks/mock2.js";
import mock3, { set as mock3Set } from "./cyber-u2-mocks/mock3.js";

export default {
  id: "cyber-u2",
  course: "AP Cybersecurity",
  title: "Unit 2 Test: Securing Spaces",
  quizName: "The Unit 2 Test",
  quizDate: "2026-11-02",
  lang: "none",
  typeNames: { mcq: "Scenario", vocab: "Vocabulary", fr: "Free response" },
  blurb: "Vocabulary from the course deck, scenario questions at Riverside and elsewhere, and free-response parts scored the way the AP exam scores them.",
  focus: [
    { id: "vocab", name: "Vocabulary", types: ["vocab"] },
    { id: "mcq", name: "Scenarios", types: ["mcq"] },
    { id: "fr", name: "Free response", types: ["fr"], size: 5 },
  ],
  skills: [
    { id: "cia", name: "The CIA triad and AAA", from: "M11, M12", short: "CIA" },
    { id: "layers", name: "Defense in depth", from: "M12", short: "Layers" },
    { id: "controls", name: "Function and nature", from: "M12 to M14", short: "Controls" },
    { id: "governance", name: "Governance and the principles", from: "M14 to M16", short: "Gov." },
    { id: "physical", name: "Physical security", from: "M16 to M19", short: "Physical" },
    { id: "environment", name: "Environmental controls", from: "M20", short: "Env." },
    { id: "risk", name: "Rating and treating risk", from: "M21 to M23", short: "Risk" },
    { id: "adversaries", name: "Adversaries", from: "M23, M24", short: "Adv." },
    { id: "killchain", name: "The kill chain and OSINT", from: "M24 to M26", short: "Kill chain" },
    { id: "social", name: "Social engineering", from: "Unit 1", short: "Social" },
    { id: "fr-policy", name: "The policy (Part A)", from: "Free response", short: "FR: A" },
    { id: "fr-log", name: "Reading the log (Parts B and C)", from: "Free response", short: "FR: B, C" },
    { id: "fr-risk", name: "Rating a risk (Part D)", from: "Free response", short: "FR: D" },
    { id: "fr-control", name: "Classify, then what remains (Part E)", from: "Free response", short: "FR: E" },
  ],
  sets: { library: librarySet, storage: storageSet, theater: theaterSet, [mock1Set.id]: mock1Set, [mock2Set.id]: mock2Set, [mock3Set.id]: mock3Set },
  forms: [
    { id: "m1", name: "Mock Test 1", items: mock1 },
    { id: "m2", name: "Mock Test 2", items: mock2 },
    { id: "m3", name: "Mock Test 3", items: mock3 },
  ],
  mock: {
    name: "Mock test",
    title: "Unit 2 Test practice",
    total: 75,
    clock: null,
    blurb: "Three mock tests, each twenty-five multiple choice and one free response with ten parts, the same shape as the test. None of their questions are in review.",
    intro: [
      ["Part A.", "Twenty-five multiple-choice questions, 2 points each (50 points)."],
      ["Part B.", "One free response at a building you have never seen: four sources, five parts, ten subparts at 1 point each. Your raw score times 2.5 is your Part B score out of 25."],
      ["", "No feedback until the end. You score Part B yourself, one subpart at a time, with the scoring guidelines. None of these questions are in review, so each mock test shows how you do on questions you have not practiced."],
    ],
    partA: {
      points: 2,
      slots: [
        ["cia"], ["cia"], ["layers"], ["controls"], ["controls"], ["controls"], ["governance"], ["governance"],
        ["physical"], ["physical"], ["physical"], ["physical"], ["physical"], ["environment"],
        ["risk"], ["risk"], ["risk"], ["risk"], ["risk"], ["adversaries"], ["adversaries"],
        ["social"], ["social"], ["killchain"], ["killchain"],
      ],
    },
    partB: { kind: "fr", scale: 2.5 },
  },
  items: [...vocab, ...frameworks, ...physical, ...risk, ...library, ...storage, ...theater],
};

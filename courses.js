// The courses on the site. A roster entry lists the courses a student is in ({ login, name, courses: ["csp"] });
// an entry with no courses list is in AP CSP, the site's first course. The teacher sees every course.
// To add a test: write a deck in decks/, import it here, and put it first in its course's decks.
import cspQ3 from "./decks/csp-q3.js";
import cyberU2 from "./decks/cyber-u2.js";
import csa from "./decks/csa.js";
import whap from "./decks/whap.js";
import calc from "./decks/calc.js";

export const courses = [
  { id: "csp", name: "AP Computer Science Principles", short: "AP CSP", period: "Period D", book: true, decks: [cspQ3] },
  { id: "csa", name: "AP Computer Science A", short: "AP CSA", period: "Period B", book: false, decks: [csa] },
  { id: "cyber", name: "AP Cybersecurity", short: "AP Cyber", period: "Period F", book: false, decks: [cyberU2] },
  // passwords: students sign in with a school email and a password (a teacher makes their first one), not GitHub.
  // AP World History has more than one section. Each section is its own course (its own roster and Class tab) on the same deck,
  // so its students share one bank, one set of quizzes and tests, and their progress follows them if they change sections.
  // To add a section: copy a line with a new id, short, and period; add the id to the deck's list in firestore.rules
  // (deckCourses, so its teacher may edit questions); and add it to the teacher's courses on the Class tab.
  { id: "whap", name: "AP World History: Modern", short: "AP World (B)", period: "Period B", book: false, passwords: true, decks: [whap] },
  { id: "whap-c", name: "AP World History: Modern", short: "AP World (C)", period: "Period C", book: false, passwords: true, decks: [whap] },
  { id: "whap-d", name: "AP World History: Modern", short: "AP World (D)", period: "Period D", book: false, passwords: true, decks: [whap] },
  // AP Calculus AB (Ms. Bryan) has three sections on one deck, like AP World. Periods A, B, D.
  { id: "calc-a", name: "AP Calculus AB", short: "AP Calc AB (A)", period: "Period A", book: false, passwords: true, decks: [calc] },
  { id: "calc", name: "AP Calculus AB", short: "AP Calc AB (B)", period: "Period B", book: false, passwords: true, decks: [calc] },
  { id: "calc-d", name: "AP Calculus AB", short: "AP Calc AB (D)", period: "Period D", book: false, passwords: true, decks: [calc] },
];
export const courseById = (id) => courses.find((c) => c.id === id);
export const coursesOf = (rosterEntry) => (rosterEntry?.courses?.length ? rosterEntry.courses : ["csp"]).filter((id) => courseById(id));

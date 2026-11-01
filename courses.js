// The courses on the site. A roster entry lists the courses a student is in ({ login, name, courses: ["csp"] });
// an entry with no courses list is in AP CSP, the site's first course. The teacher sees every course.
// To add a test: write a deck in decks/, import it here, and put it first in its course's decks.
import cspQ3 from "./decks/csp-q3.js";
import cyberU2 from "./decks/cyber-u2.js";
import csa from "./decks/csa.js";

export const courses = [
  { id: "csp", name: "AP Computer Science Principles", short: "AP CSP", period: "Period D", book: true, decks: [cspQ3] },
  { id: "csa", name: "AP Computer Science A", short: "AP CSA", period: "Period B", book: false, decks: [csa] },
  { id: "cyber", name: "AP Cybersecurity", short: "AP Cyber", period: "Period F", book: false, decks: [cyberU2] },
];
export const courseById = (id) => courses.find((c) => c.id === id);
export const coursesOf = (rosterEntry) => (rosterEntry?.courses?.length ? rosterEntry.courses : ["csp"]).filter((id) => courseById(id));

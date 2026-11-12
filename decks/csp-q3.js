// AP CSP · fall review deck: Quiz 3 (Lists and Loops), the written-response drills WR4 to WR6, and Quiz 4 (Functions and Loops).
// The id stays "csp-q3" so students' progress and the Firestore rules keep working.
// Every block of code here was compiled and run on .NET 10 by tools/verify.mjs (run it on each file: this one, csp-q4/*.js, csp-q3-mocks/*.js).
// In a multiple-choice item the right choice is always written first; the site shuffles them.

import mockMC from "./csp-q3-mocks/mc.js";
import mockWR from "./csp-q3-mocks/wr.js";
import q4A from "./csp-q4/review-a.js";
import q4WR from "./csp-q4/review-wr.js";
import q4Mocks from "./csp-q4/mocks.js";
// Milestone 2 written responses (11/11): review on sample features (review-m2) and practice for WR7 to WR12 (mocks-m2).
import m2Review from "./csp-q4/review-m2.js";
import m2Mocks from "./csp-q4/mocks-m2.js";
// Spring 2027: the Big Ideas taught on Khan Academy. Each review item opens on the day its topic is taught.
import bi1 from "./csp-spring/bi1.js";
import bi2 from "./csp-spring/bi2.js";
import bi3 from "./csp-spring/bi3.js";
import bi4 from "./csp-spring/bi4.js";
import bi5 from "./csp-spring/bi5.js";
import bi1m from "./csp-spring-mocks/bi1m.js";
import bi2m from "./csp-spring-mocks/bi2m.js";
import bi3m from "./csp-spring-mocks/bi3m.js";
import bi4m from "./csp-spring-mocks/bi4m.js";
import bi5m from "./csp-spring-mocks/bi5m.js";
import pe3a from "./csp-spring-mocks/pe3a.js";
import pe3b from "./csp-spring-mocks/pe3b.js";
const SPRING = [...bi1.items, ...bi2.items, ...bi4.items, ...bi5.items, ...bi3.items];
const BI = { "1": ["crd-collab", "crd-purpose", "crd-design", "crd-errors"], "2": ["bits", "limits", "text-analog", "compression", "data-use", "bigdata"],
  "3": ["pc-vars", "pc-cond", "pc-proc", "pc-loops", "pc-lists", "robot", "algo-build", "algo-search", "algo-hard", "sim"],
  "4": ["internet", "ip-routing", "packets-web", "protocols", "parallel"], "5": ["innovations", "crowd", "divide", "mlbias", "copyright", "privacy", "attacks", "crypto"] };
const sform = (id, name, mod, group, date) => ({ id, name, items: mod.items, group, date, total: mod.items.length * 2 });
// Fixed mock quizzes, written only for the mocks: none of their items is in review.
const mockItems = [...mockMC.items, ...mockWR.items, ...q4Mocks.items];
const form = (prefix) => mockItems.filter((it) => it.id.startsWith(prefix + "-"));
const Q3 = { group: "Quiz 3: Lists and Loops", date: "2026-11-03" };
const Q4 = { group: "Quiz 4: Functions and Loops", date: "2026-11-20" };
// The Milestone 2 openers (8 minutes, two prompts) and the two longer written responses after them, on the real dates.
const WR = {
  m2wr7: ["WR7: The Command Chain", "2026-11-12"], m2wr8: ["WR8: The Command", "2026-11-16"], m2wr9: ["WR9: The List", "2026-11-17"],
  m2wr10: ["WR10: MyCount", "2026-11-18"], m2wr11: ["WR11: The Finished Feature", "2026-11-23"], m2wr12: ["WR12: Practice Written Response", "2026-12-09"],
};
// The released prompts each WR asks (rebuilt 11/11: the same prompts on every form). A WR's button on Home picks the
// written-response review items tagged with those prompts (each item's `released`).
const ASKS = {
  wr7: ["2024s1-2b", "2025s1-2a"], wr8: ["2025s1-2a", "2025s1-2b"], wr9: ["2026-2c", "2025s2-2b"],
  wr10: ["2024s1-2b", "2024s1-2c"], wr11: ["2026-2c", "2025s1-2b", "2025s1-2a"], wr12: ["2026-q1", "2026-2a", "2026-2b", "2026-2c"],
};
const asks = (wr) => (it) => it.type === "wr" && ASKS[wr].includes(it.released);
const wrForms = m2Mocks.forms.map((f) => ({ ...f, group: WR[f.id][0], date: WR[f.id][1], total: f.items.length * 4 }));

export default {
  id: "csp-q3",
  course: "AP Computer Science Principles",
  title: "Lists, Loops, and Functions",
  // The countdown shows the next of these.
  dates: [
    { name: "WR7", date: "2026-11-12" },
    { name: "WR8", date: "2026-11-16" },
    { name: "WR9", date: "2026-11-17" },
    { name: "WR10", date: "2026-11-18" },
    { name: "Quiz 4", date: "2026-11-20" },
    { name: "WR11", date: "2026-11-23" },
    { name: "WR12", date: "2026-12-09" },
    { name: "Big Idea 1 mock quiz", date: "2027-01-27" },
    { name: "Big Idea 2 mock quiz", date: "2027-02-11" },
    { name: "The BI2 Progress Check", date: "2027-02-12" },
    { name: "The BI4 Progress Check", date: "2027-02-25" },
    { name: "The BI5 Progress Check", date: "2027-03-16" },
    { name: "Big Idea 5 mock quiz", date: "2027-03-17" },
    { name: "Big Idea 4 mock quiz", date: "2027-03-19" },
    { name: "Big Idea 3 mock quiz", date: "2027-04-21" },
    { name: "The BI3 Progress Check", date: "2027-04-22" },
    { name: "Practice Exam 1", date: "2027-04-26" },
    { name: "Practice Exam 2", date: "2027-05-03" },
    { name: "Practice Exam 3", date: "2027-05-10" },
    { name: "The AP exam", date: "2027-05-14" },
  ],
  lang: "csharp",
  blurb: "Code-reading questions, output and trace tables, and written responses scored with the quiz's own rubric rows.",
  focus: [
    { id: "wr7", name: "WR7 (11/12)", filter: asks("wr7"), size: 4 },
    { id: "wr8", name: "WR8 (11/16)", filter: asks("wr8"), size: 4 },
    { id: "wr9", name: "WR9 (11/17)", filter: asks("wr9"), size: 4 },
    { id: "wr10", name: "WR10 (11/18)", filter: asks("wr10"), size: 4 },
    { id: "wr11", name: "WR11 (11/23)", filter: asks("wr11"), size: 4 },
    { id: "q4", name: "Quiz 4 (11/20)", skills: ["totals", "grid", "draw", "walk", "rewrite", "wr-params", "wr-logic"] },
    { id: "bi1", name: "Big Idea 1", skills: BI["1"] },
    { id: "bi2", name: "Big Idea 2", skills: BI["2"] },
    { id: "bi4", name: "Big Idea 4", skills: BI["4"] },
    { id: "bi5", name: "Big Idea 5", skills: BI["5"] },
    { id: "bi1245", name: "Big Ideas 1, 2, 4, 5", skills: [...BI["1"], ...BI["2"], ...BI["4"], ...BI["5"]] },
    { id: "bi3", name: "Big Idea 3", skills: BI["3"] },
  ],
  skills: [
    { id: "index", name: "Index and Count", from: "Lists 1", short: "Lists 1" },
    { id: "parallel", name: "Parallel lists", from: "Lists 2", short: "Lists 2" },
    { id: "byhand", name: "Finding with if", from: "Lists 3", short: "Lists 3" },
    { id: "forloop", name: "The parts of a for loop", from: "For 1", short: "For 1" },
    { id: "listloop", name: "A loop over a list", from: "For 2", short: "For 2" },
    { id: "totals", name: "Totals and records", from: "For 3, Quest 13", short: "For 3" },
    { id: "grid", name: "Rows and columns", from: "For 4, Quest 14", short: "For 4" },
    { id: "draw", name: "Drawing a level", from: "For 5, Quest 15", short: "For 5" },
    { id: "walk", name: "The walk", from: "For 6, Quest 16", short: "For 6" },
    { id: "rewrite", name: "The Milestone 2 functions", from: "Milestone 2", short: "Rewrites" },
    { id: "wr-nolist", name: "Without the list (2026, 2(c))", from: "Written response", short: "WR: no list" },
    { id: "wr-calls", name: "A call with the same outcome (2024 Set 2, 2(b))", from: "Written response", short: "WR: calls" },
    { id: "wr-grows", name: "When the list grows (2025 Set 1, 2(c))", from: "Written response", short: "WR: grows" },
    { id: "wr-validity", name: "checkValidity (2024 Set 1, 2(c))", from: "Written response", short: "WR: valid" },
    { id: "wr-algo", name: "What stops the loop (2026, 2(a))", from: "Written response", short: "WR: stops" },
    { id: "wr-proc", name: "A logic error in the procedure (2025 Set 1, 2(b))", from: "Written response", short: "WR: proc" },
    { id: "wr-params", name: "Parameters (2024 Set 2, 2(c))", from: "Written response", short: "WR: params" },
    { id: "wr-logic", name: "A logic error (2025 Set 2, 2(b))", from: "Written response", short: "WR: logic" },
    { id: "wr-io", name: "Input and output (Question 1)", from: "WR7, WR8", short: "WR: I/O" },
    { id: "wr-select", name: "A selection statement (2025, 2(a))", from: "WR7, WR8", short: "WR: if" },
    { id: "wr-listuse", name: "Your list (2(c) and 2(b))", from: "WR9", short: "WR: list" },
    { id: "wr-count", name: "Your counting procedure", from: "WR10", short: "WR: count" },
    { id: "wr-report", name: "Your report procedure", from: "WR11, WR12", short: "WR: report" },

    { id: "crd-collab", name: "Collaboration", from: "BI1", short: "Collaboration" },
    { id: "crd-purpose", name: "Program purpose and function", from: "BI1", short: "Program" },
    { id: "crd-design", name: "Design and development", from: "BI1", short: "Design" },
    { id: "crd-errors", name: "Errors and testing", from: "BI1", short: "Errors" },
    { id: "bits", name: "Bits and binary", from: "BI2", short: "Bits" },
    { id: "limits", name: "Overflow and roundoff", from: "BI2", short: "Overflow" },
    { id: "text-analog", name: "Text and analog data", from: "BI2", short: "Text" },
    { id: "compression", name: "Compression", from: "BI2", short: "Compression" },
    { id: "data-use", name: "Using data", from: "BI2", short: "Using" },
    { id: "bigdata", name: "Big data", from: "BI2", short: "Big" },
    { id: "internet", name: "The Internet", from: "BI4", short: "The" },
    { id: "ip-routing", name: "Addresses and routing", from: "BI4", short: "Addresses" },
    { id: "packets-web", name: "Packets and the web", from: "BI4", short: "Packets" },
    { id: "protocols", name: "Protocols and scale", from: "BI4", short: "Protocols" },
    { id: "parallel", name: "Parallel and distributed", from: "BI4", short: "Parallel" },
    { id: "innovations", name: "Effects of innovations", from: "BI5", short: "Effects" },
    { id: "crowd", name: "Crowdsourcing and sensors", from: "BI5", short: "Crowdsourcing" },
    { id: "divide", name: "The digital divide", from: "BI5", short: "The" },
    { id: "mlbias", name: "Bias in algorithms", from: "BI5", short: "Bias" },
    { id: "copyright", name: "Copyright and licenses", from: "BI5", short: "Copyright" },
    { id: "privacy", name: "Personal data", from: "BI5", short: "Personal" },
    { id: "attacks", name: "Cyber attacks", from: "BI5", short: "Cyber" },
    { id: "crypto", name: "Encryption and logins", from: "BI5", short: "Encryption" },
    { id: "pc-vars", name: "Variables and math", from: "BI3", short: "Variables" },
    { id: "pc-cond", name: "Conditions and IF", from: "BI3", short: "Conditions" },
    { id: "pc-proc", name: "Procedures", from: "BI3", short: "Procedures" },
    { id: "pc-loops", name: "REPEAT loops", from: "BI3", short: "REPEAT" },
    { id: "pc-lists", name: "Lists", from: "BI3", short: "Lists" },
    { id: "robot", name: "The robot", from: "BI3", short: "The" },
    { id: "algo-build", name: "Building algorithms", from: "BI3", short: "Building" },
    { id: "algo-search", name: "Search and efficiency", from: "BI3", short: "Search" },
    { id: "algo-hard", name: "Hard problems", from: "BI3", short: "Hard" },
    { id: "sim", name: "Simulations", from: "BI3", short: "Simulations" },
  ],
  forms: [
    { id: "m1", name: "Quiz 3 Mock 1", items: form("q3m1"), ...Q3 },
    { id: "m2", name: "Quiz 3 Mock 2", items: form("q3m2"), ...Q3 },
    { id: "m3", name: "Quiz 3 Mock 3", items: form("q3m3"), ...Q3 },
    { id: "q4m1", name: "Quiz 4 Mock 1", items: form("q4m1"), ...Q4 },
    { id: "q4m2", name: "Quiz 4 Mock 2", items: form("q4m2"), ...Q4 },
    { id: "q4m3", name: "Quiz 4 Mock 3", items: form("q4m3"), ...Q4 },
    ...wrForms,
    sform("bi1m", "Big Idea 1 mock quiz", bi1m, "Big Idea 1: Creative Development", "2027-01-27"),
    sform("bi2m", "Big Idea 2 mock quiz", bi2m, "Big Idea 2: Data", "2027-02-11"),
    sform("bi5m", "Big Idea 5 mock quiz", bi5m, "Big Idea 5: Impact of Computing", "2027-03-17"),
    sform("bi4m", "Big Idea 4 mock quiz", bi4m, "Big Idea 4: Computer Systems and Networks", "2027-03-19"),
    sform("bi3m", "Big Idea 3 mock quiz", bi3m, "Big Idea 3: Algorithms and Programming", "2027-04-21"),
    sform("pe3a", "Practice Exam 3 Part 1", pe3a, "Practice Exam 3", "2027-05-10"),
    sform("pe3b", "Practice Exam 3 Part 2", pe3b, "Practice Exam 3", "2027-05-12"),
  ],
  mock: {
    name: "Mock quiz",
    title: "Quiz practice",
    total: 20,
    clock: "25:00",
    blurb: "Fall: mock quizzes for Quiz 3 and Quiz 4, six multiple choice and two written responses each, and practice for WR7 to WR12 on sample features. Spring: a multiple-choice mock quiz for each Big Idea, and Practice Exam 3 in two parts. None of their questions are in review.",
    intro: [
      ["Fall quizzes.", "Six multiple-choice items, 2 points each, then two written responses, 4 points each, scored with the quiz's rubric rows."],
      ["WR7 to WR12.", "The same released AP prompts as the real quiz, asked about a sample feature. WR7 to WR11 ask about printed code, and WR12 about your own, so each answer ends with how to say it on the quiz and about your own code."],
      ["Spring.", "A Big Idea mock quiz is 10 or 15 multiple-choice items, 2 points each. Practice Exam 3 is two parts of 25 multiple-choice items, at the AP exam's pace of about 1 minute 40 seconds a question."],
      ["", "No feedback until the end. None of these questions are in review, so each mock shows how you do on questions you have not practiced."],
    ],
    partA: { points: 2, slots: [["totals"], ["grid"], ["draw"], ["walk"], ["rewrite"], ["rewrite"]] },
    partB: { kind: "wr", points: 4, slots: [["wr-params"], ["wr-logic"]] },
  },
  items: [
    // ---------------------------------------------------------------- Index and Count
    {
      id: "q3-i01", skill: "index", type: "mcq",
      stem: "Consider the following code segment.",
      code: `List<string> pack = new List<string>();
pack.Add("lantern");
pack.Add("map");
pack.Add("rope");
pack.Add("chalk");
pack.Add("flint");
Console.WriteLine(pack.Count + " " + pack[3]);`,
      question: "What is printed?",
      choices: ["5 chalk", "4 chalk", "5 rope", "4 flint"],
      why: [
        "Count is how many items: 5. Index 3 is the fourth item: lantern 0, map 1, rope 2, chalk 3.",
        "Count is how many items, 5. The last index is 4, one less than Count.",
        "rope is the third item, at index 2. Indexes start at 0.",
        "Count is 5, and index 3 is chalk. flint is at index 4.",
      ],
      answer: 0,
      verify: { out: "5 chalk" },
    },
    {
      id: "q3-i02", skill: "index", type: "mcq",
      stem: "Consider the following code segment.",
      code: `List<int> gold = new List<int>();
gold.Add(12);
gold.Add(7);
gold.Add(30);
Console.WriteLine(gold[gold.Count - 1]);`,
      question: "What is printed?",
      choices: ["30", "7", "2", "It builds, then crashes when it runs (ArgumentOutOfRangeException)."],
      why: [
        "gold.Count is 3, so gold.Count - 1 is 2, the last index. gold[2] is 30.",
        "7 is gold[1]. gold.Count - 1 is 2.",
        "2 is the index. The line prints the value at that index.",
        "Count - 1 is always the last index of a list that has items, so it is in range.",
      ],
      answer: 0,
      verify: { out: "30" },
    },
    {
      id: "q3-i03", skill: "index", type: "mcq",
      stem: "Consider the following code segment.",
      code: `List<string> spells = new List<string>();
spells.Add("spark");
spells.Add("frost");
Console.WriteLine(spells[spells.Count]);`,
      question: "What happens?",
      choices: [
        "It builds, then crashes when it runs (ArgumentOutOfRangeException).",
        "It prints frost.",
        "It does not build: spells.Count cannot be used as an index.",
        "It prints spark.",
      ],
      why: [
        "spells.Count is 2, and the indexes are 0 and 1. The compiler only checks that the index is an int. Index 2 is not there, and that is found out when the line runs.",
        "frost is spells[1], the last index. spells.Count is 2.",
        "spells.Count is an int, and any int can go in the brackets. The build succeeds.",
        "spark is spells[0].",
      ],
      answer: 0,
      verify: { crash: "ArgumentOutOfRangeException" },
    },
    {
      id: "q3-i04", skill: "index", type: "mcq",
      stem: "Consider the following code segment.",
      code: `List<string> pack = new List<string>();
pack.Add("rope");
pack.Add("torch");
pack.Add("bread");
Console.WriteLine(pack.Length);`,
      question: "What happens?",
      choices: [
        "It does not build: 'List<string>' does not contain a definition for 'Length'.",
        "It prints 3.",
        "It prints 2.",
        "It builds, then crashes when it runs.",
      ],
      why: [
        "A list has Count, not Length. The build stops with CS1061.",
        "pack.Count would print 3. A list has no Length.",
        "2 is the last index, and the line does not build.",
        "The compiler finds this before the program runs.",
      ],
      answer: 0,
      verify: { error: "CS1061" },
    },
    {
      id: "q3-i05", skill: "index", type: "output",
      stem: "Consider the following code segment.",
      code: `List<string> camp = new List<string>();
Console.WriteLine(camp.Count);
camp.Add("tent");
camp.Add("kettle");
Console.WriteLine(camp.Count);
Console.WriteLine(camp[1]);`,
      question: "Type exactly what is printed, one line per line.",
      answer: "0\n2\nkettle",
      why: "A new list has nothing in it, so Count is 0. After two Adds, Count is 2. Index 1 is the second item, kettle.",
      verify: { out: "0\n2\nkettle" },
    },
    {
      id: "q3-i06", skill: "index", type: "mcq",
      stem: "This function is meant to return the last item of any list that has at least one item.",
      code: `string Last(List<string> pack)
{
    return ________;
}`,
      question: "What goes in the blank?",
      choices: ["pack[pack.Count - 1]", "pack[pack.Count]", "pack[2]", "pack[Count - 1]"],
      mono: true,
      why: [
        "The function asks the list how long it is and takes one away, so it is right for a list of 1, of 3, or of 100.",
        "pack.Count is one past the last index. It builds, then crashes with ArgumentOutOfRangeException.",
        "pack[2] is the last item only when the list has exactly 3 items. A list of 1 crashes.",
        "Count belongs to a list, so it is written pack.Count. Count alone does not build: The name 'Count' does not exist in the current context.",
      ],
      answer: 0,
      verify: {
        cases: [
          { run: `List<string> a = new List<string>(); a.Add("map"); Console.WriteLine(Last(a)); a.Add("coin"); a.Add("rope"); a.Add("key"); Console.WriteLine(Last(a));
string Last(List<string> pack) { return pack[pack.Count - 1]; }`, out: "map\nkey" },
          { run: `List<string> a = new List<string>(); a.Add("map"); Console.WriteLine(Last(a));
string Last(List<string> pack) { return pack[pack.Count]; }`, crash: "ArgumentOutOfRangeException" },
          { run: `List<string> a = new List<string>(); a.Add("map"); Console.WriteLine(Last(a));
string Last(List<string> pack) { return pack[2]; }`, crash: "ArgumentOutOfRangeException" },
          { run: `List<string> a = new List<string>(); a.Add("map"); Console.WriteLine(Last(a));
string Last(List<string> pack) { return pack[Count - 1]; }`, error: "CS0103" },
        ],
      },
    },
    {
      id: "q3-i07", skill: "index", type: "output",
      stem: "Consider the following code segment.",
      code: `List<string> pack = new List<string>();
Console.WriteLine(Peek(pack));
pack.Add("map");
pack.Add("coin");
Console.WriteLine(Peek(pack));

string Peek(List<string> pack)
{
    if (pack.Count == 0)
    {
        return "empty";
    }
    return pack[0];
}`,
      question: "Type exactly what is printed, one line per line.",
      answer: "empty\nmap",
      why: "The first call gets an empty list, so the test is true and it returns empty before pack[0] is ever read. The second call gets a list of two, and pack[0] is map.",
      verify: { out: "empty\nmap" },
    },
    {
      id: "q3-i08", skill: "index", type: "mcq",
      stem: "Consider the following code segment.",
      code: `List<string> path = new List<string>();
path.Add("north");
path.Add("east");
path.Add("north");
path.Add("west");
Console.WriteLine(path[2] + " " + path[path.Count - 2]);`,
      question: "What is printed?",
      choices: ["north north", "east north", "north west", "east east"],
      why: [
        "The indexes are north 0, east 1, north 2, west 3. path.Count is 4, so path.Count - 2 is 2. Both halves read index 2.",
        "east is index 1. Index 2 is the second north.",
        "west is index 3, which is path.Count - 1.",
        "east is at index 1, and neither half asks for index 1.",
      ],
      answer: 0,
      verify: { out: "north north" },
    },

    // ---------------------------------------------------------------- Parallel lists
    {
      id: "q3-p01", skill: "parallel", type: "mcq",
      stem: "Consider the following code segment.",
      code: `List<string> names = new List<string>();
List<int> health = new List<int>();
names.Add("Rook");
health.Add(10);
names.Add("Mote");
health.Add(7);
names.Add("Pip");
health.Add(6);
Console.WriteLine(names[2] + " " + health[1]);`,
      question: "What is printed?",
      choices: ["Pip 7", "Pip 6", "Mote 7", "Mote 6"],
      why: [
        "names[2] is Pip. health[1] is 7, Mote's health. The two indexes are different, so the line mixes two characters.",
        "6 is health[2]. The line asks for health[1].",
        "Mote is names[1]. The line asks for names[2].",
        "Both halves are off: names[2] is Pip and health[1] is 7.",
      ],
      answer: 0,
      verify: { out: "Pip 7" },
    },
    {
      id: "q3-p02", skill: "parallel", type: "mcq",
      stem: "Pip is meant to have 6 health and Mote 7. One line is missing.",
      code: `List<string> names = new List<string>();
List<int> health = new List<int>();
names.Add("Rook");
health.Add(10);
names.Add("Mote");
names.Add("Pip");
health.Add(6);
Console.WriteLine(names[1] + " " + health[1]);`,
      question: "What is printed?",
      choices: ["Mote 6", "Mote 7", "Pip 6", "It builds, then crashes when it runs (ArgumentOutOfRangeException)."],
      why: [
        "health holds only 10 and 6, so health[1] is 6. Nothing in C# ties health[1] to names[1], so Mote gets Pip's health.",
        "7 was never added to health.",
        "names[1] is Mote. Pip is names[2].",
        "health has two items, so index 1 is there. Asking for health[2] would crash.",
      ],
      answer: 0,
      verify: { out: "Mote 6" },
    },
    {
      id: "q3-p03", skill: "parallel", type: "mcq",
      stem: "The same lists as before, with Mote's health still missing.",
      code: `List<string> names = new List<string>();
List<int> health = new List<int>();
names.Add("Rook");
health.Add(10);
names.Add("Mote");
names.Add("Pip");
health.Add(6);
Console.WriteLine(names.Count + " " + health.Count);
Console.WriteLine(health[2]);`,
      question: "What happens?",
      choices: [
        "It prints 3 2, then crashes (ArgumentOutOfRangeException).",
        "It prints 3 3, then 6.",
        "It prints 3 2, then 6.",
        "It does not build: the two lists are different lengths.",
      ],
      why: [
        "names has three items and health has two. The first line prints 3 2. health[2] is past the end of health, and that line crashes.",
        "Only two numbers were added to health, so its Count is 2.",
        "6 is health[1]. health has no index 2.",
        "The compiler does not know or check how long a list is. The lengths are only known when the program runs.",
      ],
      answer: 0,
      verify: { out: "3 2", crash: "ArgumentOutOfRangeException" },
    },
    {
      id: "q3-p04", skill: "parallel", type: "mcq",
      stem: "Consider the following code segment.",
      code: `List<string> names = new List<string>();
List<int> health = new List<int>();
List<int> mana = new List<int>();
names.Add("Rook");
health.Add(10);
mana.Add(3);
names.Add("Bram");
health.Add(9);
mana.Add(2);
PrintMana(names, health, mana, 1);

void PrintMana(List<string> names, List<int> mana, List<int> health, int i)
{
    Console.WriteLine(names[i] + " has " + mana[i] + " mana.");
}`,
      question: "What is printed?",
      choices: ["Bram has 9 mana.", "Bram has 2 mana.", "Rook has 3 mana.", "It does not build: the lists are passed in the wrong order."],
      why: [
        "The second argument is the health list, and it lands in the second parameter, which is called mana. Inside the function, mana[1] is Bram's health, 9.",
        "Arguments go to parameters by position, not by name. The parameter called mana is holding the health list.",
        "i is 1, so the line is about Bram.",
        "health and mana are both List<int>. A list of ints went where a list of ints was promised, so it builds.",
      ],
      answer: 0,
      verify: { out: "Bram has 9 mana." },
    },
    {
      id: "q3-p05", skill: "parallel", type: "mcq",
      stem: "Consider the following code segment.",
      code: `List<string> names = new List<string>();
List<int> health = new List<int>();
List<int> attack = new List<int>();
AddHero(names, health, attack, 6, "Pip", 2);

void AddHero(List<string> names, List<int> health, List<int> attack, string name, int hp, int atk)
{
    names.Add(name);
    health.Add(hp);
    attack.Add(atk);
}`,
      question: "What happens?",
      choices: [
        "It does not build: Argument 4: cannot convert from 'int' to 'string'.",
        "It adds a hero named 6 with 0 health.",
        "It adds Pip with 6 health and 2 attack.",
        "It builds, then crashes when it runs.",
      ],
      why: [
        "The fourth parameter is a string and the fourth argument is 6, an int. Swapping two arguments of different types is caught by the compiler (CS1503).",
        "The compiler stops the build, so nothing is added.",
        "Arguments go to parameters by position. 6 is in the name slot.",
        "The compiler finds this before the program runs.",
      ],
      answer: 0,
      verify: { error: "CS1503" },
    },
    {
      id: "q3-p06", skill: "parallel", type: "mcq",
      stem: "The party is Rook at index 0, Mote at index 1, and Hero at index 2. PrintMember prints one character's line.",
      code: `void PrintMember(List<string> names, List<int> health, List<int> attack, int i)
{
    Console.WriteLine(names[i] + " has " + health[i] + " health and " + attack[i] + " attack.");
}`,
      question: "Which call prints Mote's line?",
      choices: [
        "PrintMember(names, health, attack, 1);",
        "PrintMember(names, health, attack, 2);",
        "PrintMember(names, health, attack, \"Mote\");",
        "PrintMember(names[1], health[1], attack[1], 1);",
      ],
      mono: true,
      why: [
        "A character is an index. Mote is index 1 in all three lists.",
        "Index 2 is Hero.",
        "i is an int. A name in quotes is a string, so it does not build.",
        "names[1] is one string, not a list. The first three parameters want whole lists, so it does not build.",
      ],
      answer: 0,
      verify: {
        cases: [
          { run: `List<string> names = new List<string> { "Rook", "Mote", "Hero" }; List<int> health = new List<int> { 10, 7, 8 }; List<int> attack = new List<int> { 4, 3, 3 };
PrintMember(names, health, attack, 1);
void PrintMember(List<string> names, List<int> health, List<int> attack, int i) { Console.WriteLine(names[i] + " has " + health[i] + " health and " + attack[i] + " attack."); }`, out: "Mote has 7 health and 3 attack." },
          { run: `List<string> names = new List<string> { "Rook", "Mote", "Hero" }; List<int> health = new List<int> { 10, 7, 8 }; List<int> attack = new List<int> { 4, 3, 3 };
PrintMember(names, health, attack, 2);
void PrintMember(List<string> names, List<int> health, List<int> attack, int i) { Console.WriteLine(names[i] + " has " + health[i] + " health and " + attack[i] + " attack."); }`, out: "Hero has 8 health and 3 attack." },
          { run: `List<string> names = new List<string> { "Rook", "Mote", "Hero" }; List<int> health = new List<int> { 10, 7, 8 }; List<int> attack = new List<int> { 4, 3, 3 };
PrintMember(names, health, attack, "Mote");
void PrintMember(List<string> names, List<int> health, List<int> attack, int i) { Console.WriteLine(names[i]); }`, error: "CS1503" },
          { run: `List<string> names = new List<string> { "Rook", "Mote", "Hero" }; List<int> health = new List<int> { 10, 7, 8 }; List<int> attack = new List<int> { 4, 3, 3 };
PrintMember(names[1], health[1], attack[1], 1);
void PrintMember(List<string> names, List<int> health, List<int> attack, int i) { Console.WriteLine(names[i]); }`, error: "CS1503" },
        ],
      },
    },
    {
      id: "q3-p07", skill: "parallel", type: "output",
      stem: "Consider the following code segment.",
      code: `List<string> names = new List<string>();
List<int> health = new List<int>();
names.Add("Wolf");
health.Add(6);
names.Add("Bat");
health.Add(3);
names.Add("Slime");
health.Add(2);
Console.WriteLine(Status(names, health, 0));
Console.WriteLine(Status(names, health, 2));

string Status(List<string> names, List<int> health, int i)
{
    if (health[i] < 5)
    {
        return names[i] + " is weak";
    }
    return names[i] + " is strong";
}`,
      question: "Type exactly what is printed, one line per line.",
      answer: "Wolf is strong\nSlime is weak",
      why: "Index 0 is Wolf with 6 health, and 6 < 5 is false. Index 2 is Slime with 2 health, and 2 < 5 is true. The same i is used in both lists.",
      verify: { out: "Wolf is strong\nSlime is weak" },
    },

    // ---------------------------------------------------------------- Finding with if
    {
      id: "q3-b01", skill: "byhand", type: "mcq",
      stem: "Consider the following code segment.",
      code: `List<string> names = new List<string>();
List<int> health = new List<int>();
names.Add("Wolf");
health.Add(6);
names.Add("Bat");
health.Add(3);
names.Add("Slime");
health.Add(2);
Console.WriteLine(HealthOf(names, health, "slime"));

int HealthOf(List<string> names, List<int> health, string wanted)
{
    if (names[0] == wanted)
    {
        return health[0];
    }
    else if (names[1] == wanted)
    {
        return health[1];
    }
    else if (names[2] == wanted)
    {
        return health[2];
    }
    return -1;
}`,
      question: "What is printed?",
      choices: ["-1", "2", "0", "It builds, then crashes when it runs."],
      why: [
        "== on two strings compares every character, capitals included. slime is not Slime, so none of the tests is true and the function returns -1.",
        "2 is Slime's health. The call asks for slime, with a small s.",
        "0 is never returned by this function. Not found is -1.",
        "All three indexes are in range for a list of three.",
      ],
      answer: 0,
      verify: { out: "-1" },
    },
    {
      id: "q3-b02", skill: "byhand", type: "mcq",
      stem: "This version uses three separate ifs, each with a return.",
      code: `List<string> items = new List<string>();
items.Add("arrow");
items.Add("potion");
items.Add("potion");
Console.WriteLine(FindInThree(items, "potion"));

int FindInThree(List<string> items, string wanted)
{
    if (items[0] == wanted)
    {
        return 0;
    }
    if (items[1] == wanted)
    {
        return 1;
    }
    if (items[2] == wanted)
    {
        return 2;
    }
    return -1;
}`,
      question: "What is printed?",
      choices: ["1", "2", "-1", "1, and then 2 on the next line"],
      why: [
        "items[1] is potion, so return 1 runs. return leaves the whole function, so the third test is never asked.",
        "The function returned at index 1 and never reached the test for index 2.",
        "potion is in the list, at index 1 and index 2.",
        "A function returns once. Console.WriteLine is called once.",
      ],
      answer: 0,
      verify: { out: "1" },
    },
    {
      id: "q3-b03", skill: "byhand", type: "mcq",
      stem: "Consider the following code segment.",
      code: `List<string> bag = new List<string>();
bag.Add("potion");
bag.Add("arrow");
bag.Add("potion");
Console.WriteLine(CountPotions(bag));

int CountPotions(List<string> bag)
{
    int count = 0;
    if (bag[0] == "potion")
    {
        count = count + 1;
    }
    if (bag[1] == "potion")
    {
        count = count + 1;
    }
    if (bag[2] == "potion")
    {
        count = count + 1;
    }
    return count;
}`,
      question: "What is printed?",
      choices: ["2", "1", "3", "0"],
      why: [
        "These are separate ifs, so all three tests are asked. Index 0 and index 2 are potion.",
        "With else if in front of the second and third tests, the chain would stop after index 0 and print 1. These are separate ifs.",
        "bag[1] is arrow, so the second test is false.",
        "bag[0] is potion, so count is at least 1.",
      ],
      answer: 0,
      verify: { out: "2" },
    },
    {
      id: "q3-b04", skill: "byhand", type: "mcq",
      stem: "The party is Rook, Mote, and Hero, with attack 4, 3, and 3. FindInThree returns the index of the name, or -1.",
      code: `int where = FindInThree(names, "Grub");
Console.WriteLine(attack[where]);

int FindInThree(List<string> names, string wanted)
{
    if (names[0] == wanted)
    {
        return 0;
    }
    else if (names[1] == wanted)
    {
        return 1;
    }
    else if (names[2] == wanted)
    {
        return 2;
    }
    return -1;
}`,
      question: "What happens?",
      choices: [
        "It builds, then crashes when it runs (ArgumentOutOfRangeException).",
        "It prints -1.",
        "It prints 3, the last attack.",
        "It does not build: where might be -1.",
      ],
      why: [
        "Grub is not in the party, so where is -1. -1 is never an index, and attack[-1] crashes. The answer has to be checked, if (where != -1), before it goes in square brackets.",
        "The line prints attack[where], not where.",
        "A list does not count back from the end. attack[-1] crashes.",
        "The compiler cannot know what FindInThree will return. It builds.",
      ],
      answer: 0,
      verify: {
        run: `List<string> names = new List<string> { "Rook", "Mote", "Hero" };
List<int> attack = new List<int> { 4, 3, 3 };
int where = FindInThree(names, "Grub");
Console.WriteLine(attack[where]);
int FindInThree(List<string> names, string wanted)
{
    if (names[0] == wanted) { return 0; }
    else if (names[1] == wanted) { return 1; }
    else if (names[2] == wanted) { return 2; }
    return -1;
}`,
        crash: "ArgumentOutOfRangeException",
      },
    },
    {
      id: "q3-b05", skill: "byhand", type: "mcq",
      stem: "Someone changes the last line of FindInThree from return -1; to return 0;.",
      question: "What goes wrong?",
      choices: [
        "A caller cannot tell \"not there\" from \"found at index 0\".",
        "It does not build: a function cannot return 0.",
        "It crashes every time the item is missing.",
        "Nothing: 0 and -1 both mean not found.",
      ],
      why: [
        "0 is a real index. FindInThree(items, \"shield\") and FindInThree(items, \"potion\") on a list that starts with potion would both give 0. -1 is never an index, so it cannot be mistaken for one.",
        "0 is an int, and the function returns an int. It builds.",
        "Returning 0 does not crash. Using the 0 as an index gives the first item, which is the wrong answer with no warning.",
        "0 already means index 0, the first item.",
      ],
      answer: 0,
      verify: {
        run: `List<string> items = new List<string> { "potion", "arrow", "rope" };
Console.WriteLine(FindInThree(items, "shield") + " " + FindInThree(items, "potion"));
int FindInThree(List<string> items, string wanted)
{
    if (items[0] == wanted) { return 0; }
    else if (items[1] == wanted) { return 1; }
    else if (items[2] == wanted) { return 2; }
    return 0;
}`,
        out: "0 0",
      },
    },
    {
      id: "q3-b06", skill: "byhand", type: "mcq",
      stem: "FindInThree was written for a list of three. This list has two items.",
      code: `List<string> items = new List<string>();
items.Add("potion");
items.Add("arrow");
Console.WriteLine(FindInThree(items, "potion"));
Console.WriteLine(FindInThree(items, "shield"));

int FindInThree(List<string> items, string wanted)
{
    if (items[0] == wanted)
    {
        return 0;
    }
    else if (items[1] == wanted)
    {
        return 1;
    }
    else if (items[2] == wanted)
    {
        return 2;
    }
    return -1;
}`,
      question: "What happens?",
      choices: [
        "It prints 0, then crashes (ArgumentOutOfRangeException).",
        "It prints 0, then -1.",
        "It crashes before anything is printed.",
        "It prints -1, then -1.",
      ],
      why: [
        "The first call finds potion at index 0 and returns before items[2] is read. The second call tests index 0, then 1, then asks for items[2], which is not there.",
        "To return -1 the second call has to get past the test for items[2], and that test crashes.",
        "The first call returns at its first test, so 0 prints before the crash.",
        "potion is at index 0, so the first call returns 0.",
      ],
      answer: 0,
      verify: { out: "0", crash: "ArgumentOutOfRangeException" },
    },
    {
      id: "q3-b07", skill: "byhand", type: "output",
      stem: "Consider the following code segment.",
      code: `List<string> names = new List<string>();
List<int> health = new List<int>();
names.Add("Rook");
health.Add(10);
names.Add("Mote");
health.Add(7);
names.Add("Hero");
health.Add(8);
Console.WriteLine(HealthOf(names, health, "Hero"));
Console.WriteLine(HealthOf(names, health, "Mote"));
Console.WriteLine(HealthOf(names, health, "Grub"));

int HealthOf(List<string> names, List<int> health, string wanted)
{
    if (names[0] == wanted)
    {
        return health[0];
    }
    else if (names[1] == wanted)
    {
        return health[1];
    }
    else if (names[2] == wanted)
    {
        return health[2];
    }
    return -1;
}`,
      question: "Type exactly what is printed, one line per line.",
      answer: "8\n7\n-1",
      why: "The name is looked for in names, and the answer comes from health at the same index. Grub is not there, so the chain ends and the function returns -1.",
      verify: { out: "8\n7\n-1" },
    },
    {
      id: "q3-b08", skill: "byhand", type: "mcq",
      stem: "One test in this function uses a single equals sign.",
      code: `int FindInThree(List<string> items, string wanted)
{
    if (items[0] = wanted)
    {
        return 0;
    }
    else if (items[1] == wanted)
    {
        return 1;
    }
    else if (items[2] == wanted)
    {
        return 2;
    }
    return -1;
}`,
      question: "What happens?",
      choices: [
        "It does not build: Cannot implicitly convert type 'string' to 'bool'.",
        "It always returns 0.",
        "It builds, then crashes when it runs.",
        "It works the same as ==.",
      ],
      why: [
        "= puts wanted into items[0], and the result is a string. An if needs a true or false (CS0029). == is the test.",
        "The compiler stops the build first.",
        "The compiler finds this before the program runs.",
        "= stores a value. == compares two values.",
      ],
      answer: 0,
      verify: {
        run: `List<string> items = new List<string> { "potion", "arrow", "rope" };
Console.WriteLine(FindInThree(items, "arrow"));
int FindInThree(List<string> items, string wanted)
{
    if (items[0] = wanted) { return 0; }
    else if (items[1] == wanted) { return 1; }
    else if (items[2] == wanted) { return 2; }
    return -1;
}`,
        error: "CS0029",
      },
    },

    // ---------------------------------------------------------------- The parts of a for loop
    {
      id: "q3-f01", skill: "forloop", type: "output",
      stem: "Consider the following code segment.",
      code: `for (int i = 0; i < 4; i++)
{
    Console.WriteLine(i);
}`,
      question: "Type exactly what is printed, one line per line.",
      answer: "0\n1\n2\n3",
      why: "i starts at 0 and the test i < 4 is asked before every pass. When i is 4 the test is false and the loop stops, so 4 is never printed.",
      verify: { out: "0\n1\n2\n3" },
    },
    {
      id: "q3-f02", skill: "forloop", type: "mcq",
      stem: "Consider the following code segment.",
      code: `for (int i = 1; i <= 5; i++)
{
    Console.WriteLine("Swing!");
}`,
      question: "How many times is Swing! printed?",
      choices: ["5", "4", "6", "0"],
      why: [
        "i takes the values 1, 2, 3, 4, and 5. That is five passes. When i is 6, 6 <= 5 is false.",
        "Starting at 1 with < 5 would be four passes. This test is <=.",
        "Starting at 0 with <= 5 would be six passes. This loop starts at 1.",
        "1 <= 5 is true, so the first pass runs.",
      ],
      answer: 0,
      verify: { out: "Swing!\nSwing!\nSwing!\nSwing!\nSwing!" },
    },
    {
      id: "q3-f03", skill: "forloop", type: "mcq",
      stem: "Consider the following code segment.",
      code: `int passes = 0;
for (int i = 0; i < 0; i++)
{
    passes = passes + 1;
}
Console.WriteLine(passes);`,
      question: "What is printed?",
      choices: ["0", "1", "-1", "It does not build: the loop never runs."],
      why: [
        "The test is asked before the first pass, and 0 < 0 is false. The body never runs, so passes is still 0.",
        "A for loop does not have to run once. The test comes first.",
        "Nothing subtracts from passes.",
        "A loop that runs zero times is allowed, and it builds.",
      ],
      answer: 0,
      verify: { out: "0" },
    },
    {
      id: "q3-f04", skill: "forloop", type: "output",
      stem: "Consider the following code segment.",
      code: `Console.WriteLine(Arrows(3));
Console.WriteLine("[" + Arrows(0) + "]");

string Arrows(int n)
{
    string line = "";
    for (int i = 1; i <= n; i++)
    {
        line = line + ">";
    }
    return line;
}`,
      question: "Type exactly what is printed, one line per line.",
      answer: ">>>\n[]",
      why: "Starting at 1 with i <= n gives n passes: 1, 2, 3 for Arrows(3). For Arrows(0), 1 <= 0 is false before the first pass, so the string stays empty and the brackets print with nothing between them.",
      verify: { out: ">>>\n[]" },
    },
    {
      id: "q3-f05", skill: "forloop", type: "mcq",
      stem: "Consider the following function.",
      code: `string Rungs(int n)
{
    string ladder = "";
    for (int i = 0; i <= n; i++)
    {
        ladder = ladder + "=";
    }
    return ladder;
}`,
      question: "What is printed by Console.WriteLine(\"[\" + Rungs(2) + \"]\"); ?",
      choices: ["[===]", "[==]", "[=]", "[====]"],
      mono: true,
      why: [
        "i takes 0, 1, and 2, because 2 <= 2 is true. That is three passes, one more than n. With i < n it would be two.",
        "Two passes would need i < n. The test is <=.",
        "i starts at 0, and 0, 1, and 2 all pass the test.",
        "When i is 3, 3 <= 2 is false and the loop stops.",
      ],
      answer: 0,
      verify: { run: `Console.WriteLine("[" + Rungs(2) + "]");
string Rungs(int n) { string ladder = ""; for (int i = 0; i <= n; i++) { ladder = ladder + "="; } return ladder; }`, out: "[===]" },
    },
    {
      id: "q3-f06", skill: "forloop", type: "output",
      stem: "Consider the following code segment.",
      code: `Console.WriteLine(Bar(3, 6));
Console.WriteLine(Bar(0, 4));

string Bar(int hp, int maxHp)
{
    string bar = "";
    for (int i = 0; i < maxHp; i++)
    {
        if (i < hp)
        {
            bar = bar + "#";
        }
        else
        {
            bar = bar + ".";
        }
    }
    return bar;
}`,
      question: "Type exactly what is printed, one line per line.",
      answer: "###...\n....",
      why: "maxHp decides how many characters: 6, then 4. i < hp is true for i of 0, 1, and 2 in the first call, and for no i in the second, because 0 < 0 is false.",
      verify: { out: "###...\n...." },
    },
    {
      id: "q3-f07", skill: "forloop", type: "trace",
      stem: "Trace Dashes(3), one row per time the test is asked.",
      code: `string Dashes(int n)
{
    string line = "";
    for (int i = 0; i < n; i++)
    {
        line = line + "-";
    }
    return line;
}`,
      question: "Fill in the table. Write true or false for the test, and the dashes in line after that pass.",
      columns: ["i", "i < n", "line after the pass"],
      rows: [
        ["0", "true", "-"],
        ["1", "true", "--"],
        ["2", "true", "---"],
        ["3", "false", "(no pass)"],
      ],
      given: [[0, 0], [1, 0], [2, 0], [3, 0], [3, 2]],
      why: "The test is asked four times and is true three times. When i is 3 the test is false, the body does not run, and Dashes(3) returns ---.",
      verify: {
        run: `string line = "";
int n = 3;
int i;
for (i = 0; i < n; i++)
{
    line = line + "-";
    Console.WriteLine(i + "," + "true" + "," + line);
}
Console.WriteLine(i + "," + (i < n ? "true" : "false") + ",(no pass)");`,
        out: "0,true,-\n1,true,--\n2,true,---\n3,false,(no pass)",
      },
    },
    {
      id: "q3-f08", skill: "forloop", type: "mcq",
      stem: "n is an int parameter, and n is at least 1.",
      question: "Which loop runs its body exactly n times?",
      choices: [
        "for (int i = 0; i < n; i++)",
        "for (int i = 0; i <= n; i++)",
        "for (int i = 1; i < n; i++)",
        "for (int i = n; i < n; i++)",
      ],
      mono: true,
      why: [
        "i takes 0 up to n - 1. That is n values.",
        "i takes 0 up to n. That is n + 1 values, one too many.",
        "i takes 1 up to n - 1. That is n - 1 values, one too few.",
        "i starts at n, and n < n is false, so the body runs zero times.",
      ],
      answer: 0,
      verify: {
        run: `int n = 4; int a = 0, b = 0, c = 0, d = 0;
for (int i = 0; i < n; i++) { a++; }
for (int i = 0; i <= n; i++) { b++; }
for (int i = 1; i < n; i++) { c++; }
for (int i = n; i < n; i++) { d++; }
Console.WriteLine(a + " " + b + " " + c + " " + d);`,
        out: "4 5 3 0",
      },
    },
    {
      id: "q3-f09", skill: "forloop", type: "output",
      stem: "Consider the following code segment.",
      code: `for (int i = 0; i < 3; i++)
{
    Console.WriteLine("Room " + (i + 1));
}`,
      question: "Type exactly what is printed, one line per line.",
      answer: "Room 1\nRoom 2\nRoom 3",
      why: "i is 0, 1, and 2. Each line prints i + 1, so the rooms are numbered from 1 while i still starts at 0.",
      verify: { out: "Room 1\nRoom 2\nRoom 3" },
    },
    {
      id: "q3-f10", skill: "forloop", type: "trace",
      stem: "Trace the loop, one row per pass.",
      code: `int hits = 0;
for (int i = 0; i < 4; i++)
{
    if (i > 1)
    {
        hits = hits + 2;
    }
}
Console.WriteLine(hits);`,
      question: "Fill in hits after each pass, then what is printed.",
      columns: ["i", "i > 1", "hits after the pass"],
      rows: [
        ["0", "false", "0"],
        ["1", "false", "0"],
        ["2", "true", "2"],
        ["3", "true", "4"],
        ["printed", "", "4"],
      ],
      given: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [4, 1]],
      why: "The if is asked on every pass. It is true only when i is 2 and when i is 3, and each time hits goes up by 2.",
      verify: {
        run: `int hits = 0;
for (int i = 0; i < 4; i++)
{
    bool t = i > 1;
    if (i > 1) { hits = hits + 2; }
    Console.WriteLine(i + "," + (t ? "true" : "false") + "," + hits);
}
Console.WriteLine("printed,," + hits);`,
        out: "0,false,0\n1,false,0\n2,true,2\n3,true,4\nprinted,,4",
      },
    },

    // ---------------------------------------------------------------- A loop over a list
    {
      id: "q3-l01", skill: "listloop", type: "output",
      stem: "Consider the following code segment.",
      code: `List<string> monsters = new List<string>();
monsters.Add("Bat");
monsters.Add("Wolf");
monsters.Add("Slime");
monsters.Add("Ogre");
for (int i = 0; i < monsters.Count; i++)
{
    Console.WriteLine(i + ": " + monsters[i]);
}`,
      question: "Type exactly what is printed, one line per line.",
      answer: "0: Bat\n1: Wolf\n2: Slime\n3: Ogre",
      why: "monsters.Count is 4, so i runs 0, 1, 2, and 3, and each pass reads the item at index i.",
      verify: { out: "0: Bat\n1: Wolf\n2: Slime\n3: Ogre" },
    },
    {
      id: "q3-l02", skill: "listloop", type: "mcq",
      stem: "Consider the following code segment.",
      code: `List<string> monsters = new List<string>();
monsters.Add("Bat");
monsters.Add("Wolf");
monsters.Add("Slime");
for (int i = 0; i <= monsters.Count; i++)
{
    Console.WriteLine(monsters[i]);
}`,
      question: "What happens?",
      choices: [
        "It prints Bat, Wolf, and Slime, then crashes (ArgumentOutOfRangeException).",
        "It crashes before anything is printed.",
        "It prints Bat, Wolf, and Slime, and stops.",
        "It does not build: <= cannot be used with Count.",
      ],
      why: [
        "The first three passes are fine. On the fourth, i is 3, 3 <= 3 is true, and monsters[3] is not there. Every line printed before the crash.",
        "Indexes 0, 1, and 2 are in range, so three lines print first.",
        "The test lets i reach 3, one past the last index.",
        "<= compares two ints, and it builds.",
      ],
      answer: 0,
      verify: { out: "Bat\nWolf\nSlime", crash: "ArgumentOutOfRangeException" },
    },
    {
      id: "q3-l03", skill: "listloop", type: "mcq",
      stem: "Consider the following code segment.",
      code: `List<string> names = new List<string>();
names.Add("Rook");
names.Add("Hero");
names.Add("Hero");
Console.WriteLine(FindAnywhere(names, "Hero"));

int FindAnywhere(List<string> names, string wanted)
{
    for (int i = 0; i < names.Count; i++)
    {
        if (names[i] == wanted)
        {
            return i;
        }
    }
    return -1;
}`,
      question: "What is printed?",
      choices: ["1", "2", "3", "-1"],
      why: [
        "return i leaves the whole function the first time the test is true, at index 1. Index 2 is never looked at.",
        "The loop never reaches index 2, because the function returned at index 1.",
        "3 is the Count. The function returns an index.",
        "Hero is in the list, so the return inside the loop runs before return -1 is reached.",
      ],
      answer: 0,
      verify: { out: "1" },
    },
    {
      id: "q3-l04", skill: "listloop", type: "mcq",
      stem: "This FindAnywhere has an else inside the loop. The party is Rook, Mote, and Hero.",
      code: `Console.WriteLine(FindAnywhere(names, "Rook"));
Console.WriteLine(FindAnywhere(names, "Mote"));
Console.WriteLine(FindAnywhere(names, "Hero"));

int FindAnywhere(List<string> names, string wanted)
{
    for (int i = 0; i < names.Count; i++)
    {
        if (names[i] == wanted)
        {
            return i;
        }
        else
        {
            return -1;
        }
    }
    return -1;
}`,
      question: "Which of the three calls gives the right index?",
      choices: ["Only the call for Rook", "All three", "None of them", "Only the call for Hero"],
      why: [
        "On the first pass, either the if or the else returns, so the loop only ever looks at index 0. Rook is at index 0 and gets 0. Mote and Hero get -1. The compiler warns: Unreachable code detected.",
        "The else returns -1 the first time a name does not match, so Mote and Hero are never reached.",
        "Rook is at index 0, the one index the loop looks at, so that call returns 0, which is right.",
        "Hero is at index 2, and the loop never gets past index 0.",
      ],
      answer: 0,
      verify: {
        run: `List<string> names = new List<string> { "Rook", "Mote", "Hero" };
Console.WriteLine(FindAnywhere(names, "Rook"));
Console.WriteLine(FindAnywhere(names, "Mote"));
Console.WriteLine(FindAnywhere(names, "Hero"));
int FindAnywhere(List<string> names, string wanted)
{
    for (int i = 0; i < names.Count; i++)
    {
        if (names[i] == wanted) { return i; }
        else { return -1; }
    }
    return -1;
}`,
        out: "0\n-1\n-1",
        warning: "CS0162",
      },
    },
    {
      id: "q3-l05", skill: "listloop", type: "output",
      stem: "Consider the following code segment.",
      code: `List<string> names = new List<string>();
names.Add("Wolf");
names.Add("Bat");
names.Add("Slime");
string joined = "";
for (int i = 0; i < names.Count; i++)
{
    joined = joined + names[i] + ", ";
}
Console.WriteLine("[" + joined + "]");`,
      question: "Type exactly what is printed. Watch the spaces.",
      answer: "[Wolf, Bat, Slime, ]",
      why: "Every pass adds a comma and a space after the name, the last pass included. That leaves \", \" at the end, just before the bracket.",
      verify: { out: "[Wolf, Bat, Slime, ]" },
    },
    {
      id: "q3-l06", skill: "listloop", type: "output",
      stem: "Consider the following code segment.",
      code: `List<string> pack = new List<string>();
pack.Add("rope");
pack.Add("torch");
pack.Add("bread");
for (int i = 1; i < pack.Count; i++)
{
    Console.WriteLine(pack[i]);
}`,
      question: "Type exactly what is printed, one line per line.",
      answer: "torch\nbread",
      why: "The loop starts at 1, so pack[0], rope, is skipped. It does not crash: i stops at 2, the last index.",
      verify: { out: "torch\nbread" },
    },
    {
      id: "q3-l07", skill: "listloop", type: "mcq",
      stem: "Consider the following code segment.",
      code: `List<string> names = new List<string>();
PrintAll(names);
Console.WriteLine("done");

void PrintAll(List<string> names)
{
    for (int i = 0; i < names.Count; i++)
    {
        Console.WriteLine(names[i]);
    }
}`,
      question: "What happens?",
      choices: [
        "It prints done.",
        "It builds, then crashes on names[0].",
        "It does not build: an empty list cannot be passed.",
        "It prints a blank line, then done.",
      ],
      why: [
        "names.Count is 0, and 0 < 0 is false before the first pass. The loop runs zero times, so names[0] is never read.",
        "The test stops the loop before names[i] is reached.",
        "An empty list is still a List<string>.",
        "The body never runs, so Console.WriteLine(names[i]) is never called.",
      ],
      answer: 0,
      verify: { out: "done" },
    },
    {
      id: "q3-l08", skill: "listloop", type: "output",
      stem: "Consider the following code segment.",
      code: `List<string> bag = new List<string>();
bag.Add("potion");
bag.Add("arrow");
bag.Add("potion");
bag.Add("potion");
Console.WriteLine(CountOf(bag, "potion"));
Console.WriteLine(CountOf(bag, "shield"));

int CountOf(List<string> bag, string wanted)
{
    int count = 0;
    for (int i = 0; i < bag.Count; i++)
    {
        if (bag[i] == wanted)
        {
            count = count + 1;
        }
    }
    return count;
}`,
      question: "Type exactly what is printed, one line per line.",
      answer: "3\n0",
      why: "The loop asks the question for every index. potion is at 0, 2, and 3. shield is nowhere, so count stays 0. return count is after the loop, so every item is checked first.",
      verify: { out: "3\n0" },
    },
    {
      id: "q3-l09", skill: "listloop", type: "output",
      stem: "Consider the following code segment.",
      code: `List<string> names = new List<string>();
List<int> health = new List<int>();
names.Add("Rook");
health.Add(10);
names.Add("Mote");
health.Add(0);
names.Add("Hero");
health.Add(8);
names.Add("Pip");
health.Add(0);
for (int i = 0; i < names.Count; i++)
{
    if (health[i] > 0)
    {
        Console.WriteLine(names[i]);
    }
}`,
      question: "Type exactly what is printed, one line per line.",
      answer: "Rook\nHero",
      why: "One i reads both lists. health[1] and health[3] are 0, and 0 > 0 is false, so Mote and Pip are skipped.",
      verify: { out: "Rook\nHero" },
    },
    {
      id: "q3-l10", skill: "listloop", type: "mcq",
      stem: "The party now has four characters: Rook, Mote, Hero, and Pip.",
      code: `void PrintRoster(List<string> names)
{
    for (int i = 0; i < 3; i++)
    {
        Console.WriteLine(names[i]);
    }
}`,
      question: "What does PrintRoster(names) print?",
      choices: ["Rook, Mote, and Hero, one per line", "Rook, Mote, Hero, and Pip, one per line", "Rook, Mote, and Hero, then it crashes", "Nothing"],
      why: [
        "The test is i < 3, a number written by hand, so i stops at 2 and Pip, at index 3, is never printed. i < names.Count would print all four.",
        "The loop runs three times, whatever the list's Count is.",
        "Indexes 0, 1, and 2 are all in range, and the loop stops there.",
        "0 < 3 is true, so the loop runs.",
      ],
      answer: 0,
      verify: {
        run: `List<string> names = new List<string> { "Rook", "Mote", "Hero", "Pip" };
PrintRoster(names);
void PrintRoster(List<string> names) { for (int i = 0; i < 3; i++) { Console.WriteLine(names[i]); } }`,
        out: "Rook\nMote\nHero",
      },
    },
    {
      id: "q3-l11", skill: "listloop", type: "output",
      stem: "This search keeps going after a match.",
      code: `List<string> items = new List<string>();
items.Add("potion");
items.Add("arrow");
items.Add("potion");
Console.WriteLine(FindLast(items, "potion"));
Console.WriteLine(FindLast(items, "rope"));

int FindLast(List<string> items, string wanted)
{
    int found = -1;
    for (int i = 0; i < items.Count; i++)
    {
        if (items[i] == wanted)
        {
            found = i;
        }
    }
    return found;
}`,
      question: "Type exactly what is printed, one line per line.",
      answer: "2\n-1",
      why: "There is no return inside the loop, so every index is checked and a later match overwrites found. The last potion is at index 2. rope never matches, so found keeps its starting value, -1.",
      verify: { out: "2\n-1" },
    },
    {
      id: "q3-l12", skill: "listloop", type: "mcq",
      stem: "This function is meant to count the monsters with less than 5 health.",
      code: `List<int> health = new List<int>();
health.Add(2);
health.Add(9);
health.Add(3);
Console.WriteLine(CountWeak(health));

int CountWeak(List<int> health)
{
    int count = 0;
    for (int i = 0; i < health.Count; i++)
    {
        if (health[i] < 5)
        {
            count = count + 1;
        }
        return count;
    }
    return count;
}`,
      question: "What is printed?",
      choices: ["1", "2", "0", "It does not build: return cannot be inside a loop."],
      why: [
        "return count is inside the loop, so the function leaves at the end of the first pass. health[0] is 2, so count is 1 by then. The compiler warns: Unreachable code detected.",
        "2 would be right if return count were after the loop's closing brace.",
        "health[0] is 2, and 2 < 5 is true, so count becomes 1 before the return.",
        "return can be inside a loop. It builds, with a warning.",
      ],
      answer: 0,
      verify: { out: "1", warning: "CS0162" },
    },
    {
      id: "q3-l13", skill: "listloop", type: "trace",
      stem: "Trace CountOf(bag, \"potion\") for the bag potion, arrow, potion.",
      code: `int CountOf(List<string> bag, string wanted)
{
    int count = 0;
    for (int i = 0; i < bag.Count; i++)
    {
        if (bag[i] == wanted)
        {
            count = count + 1;
        }
    }
    return count;
}`,
      question: "Fill in bag[i] and count after each pass, then what the function returns.",
      columns: ["i", "bag[i]", "count after the pass"],
      rows: [
        ["0", "potion", "1"],
        ["1", "arrow", "1"],
        ["2", "potion", "2"],
        ["returns", "", "2"],
      ],
      given: [[0, 0], [1, 0], [2, 0], [3, 0], [3, 1]],
      why: "bag.Count is 3, so there are three passes. count goes up only when bag[i] is potion.",
      verify: {
        run: `List<string> bag = new List<string> { "potion", "arrow", "potion" };
int count = 0;
for (int i = 0; i < bag.Count; i++)
{
    if (bag[i] == "potion") { count = count + 1; }
    Console.WriteLine(i + "," + bag[i] + "," + count);
}
Console.WriteLine("returns,," + count);`,
        out: "0,potion,1\n1,arrow,1\n2,potion,2\nreturns,,2",
      },
    },

    // ---------------------------------------------------------------- Written response: without the list
    {
      id: "q3-w01", skill: "wr-nolist", type: "wr",
      source: "2026 exam, question 2(c)",
      listI: `List<string> monsters = new List<string>();
monsters.Add("Bat");
monsters.Add("Wolf");
monsters.Add("Slime");`,
      listII: `void PrintMonsters(List<string> monsters)
{
    for (int i = 0; i < monsters.Count; i++)
    {
        Console.WriteLine("A " + monsters[i] + " blocks the way.");
    }
}`,
      call: "PrintMonsters(monsters);",
      prompt: "Consider the list included in part (i) of the List section of your Personalized Project Reference. Explain how the list uses abstraction to manage complexity in your program. Suppose the list was not included in your program. Describe how you would need to adjust the code segment in part (ii) of the List section of your Personalized Project Reference so that it has the same behavior. If it is not possible to have the same behavior without the use of the list, explain why.",
      rows: [
        {
          name: "How the list manages complexity",
          levels: [
            "Missing, or about some other program.",
            "Vague: it stores data or keeps things organized, with nothing about monsters or PrintMonsters.",
            "One name, monsters, holds every monster, so PrintMonsters has one parameter and works for any number of monsters.",
          ],
        },
        {
          name: "How List (ii) changes without the list",
          levels: [
            "Missing, or only about List (i), not PrintMonsters.",
            "Says separate variables would be used, but not what happens to PrintMonsters.",
            "A variable and a parameter for each monster, the loop replaced by one Console.WriteLine per monster, and a new parameter, line, and argument for every monster added. Or: a list that grows while the game runs cannot be printed without the list.",
          ],
        },
      ],
      model: "The list monsters holds every monster under one name. PrintMonsters takes that one list as its only parameter, and the loop prints one line for each item, so it works for 3 monsters or 30 without changing.\n\nWithout the list, each monster needs its own variable: monster1, monster2, and monster3. PrintMonsters would need a parameter for each one, PrintMonsters(string monster1, string monster2, string monster3), and the loop would be replaced by three Console.WriteLine lines, one per monster. Every new monster means another variable, another parameter, another Console.WriteLine, and a changed call.",
      note: "The exam gives its one point only when both halves are there.",
      facts: "PrintMonsters(monsters) prints three lines. After monsters.Add(\"Ogre\"); the same call prints four, with no change to PrintMonsters. The three-variable version still prints three lines after a fourth variable is declared.",
      verify: {
        cases: [
          { run: `List<string> monsters = new List<string> { "Bat", "Wolf", "Slime" };
PrintMonsters(monsters);
monsters.Add("Ogre");
PrintMonsters(monsters);
void PrintMonsters(List<string> monsters) { for (int i = 0; i < monsters.Count; i++) { Console.WriteLine("A " + monsters[i] + " blocks the way."); } }`,
            out: "A Bat blocks the way.\nA Wolf blocks the way.\nA Slime blocks the way.\nA Bat blocks the way.\nA Wolf blocks the way.\nA Slime blocks the way.\nA Ogre blocks the way." },
          { run: `string monster1 = "Bat"; string monster2 = "Wolf"; string monster3 = "Slime"; string monster4 = "Ogre";
PrintMonsters(monster1, monster2, monster3);
void PrintMonsters(string monster1, string monster2, string monster3)
{
    Console.WriteLine("A " + monster1 + " blocks the way.");
    Console.WriteLine("A " + monster2 + " blocks the way.");
    Console.WriteLine("A " + monster3 + " blocks the way.");
}`, out: "A Bat blocks the way.\nA Wolf blocks the way.\nA Slime blocks the way." },
        ],
      },
    },
    {
      id: "q3-w02", skill: "wr-nolist", type: "wr",
      source: "2026 exam, question 2(c)",
      listI: `List<string> bag = new List<string>();
bag.Add("potion");
bag.Add("arrow");
bag.Add("potion");
bag.Add("rope");`,
      listII: `int CountOf(List<string> bag, string wanted)
{
    int count = 0;
    for (int i = 0; i < bag.Count; i++)
    {
        if (bag[i] == wanted)
        {
            count = count + 1;
        }
    }
    return count;
}`,
      call: "Console.WriteLine(CountOf(bag, \"potion\"));",
      prompt: "Consider the list included in part (i) of the List section of your Personalized Project Reference. Explain how the list uses abstraction to manage complexity in your program. Suppose the list was not included in your program. Describe how you would need to adjust the code segment in part (ii) of the List section of your Personalized Project Reference so that it has the same behavior. If it is not possible to have the same behavior without the use of the list, explain why.",
      rows: [
        {
          name: "How the list manages complexity",
          levels: [
            "Missing, or about some other program.",
            "Vague: it stores data or keeps things organized, with nothing about bag or CountOf.",
            "One name, bag, holds every item, so CountOf has one list parameter and the same loop counts a bag of any size.",
          ],
        },
        {
          name: "How List (ii) changes without the list",
          levels: [
            "Missing, or only about List (i), not CountOf.",
            "Says separate variables would be used, but not what happens to CountOf.",
            "A variable and a parameter for each item, the loop replaced by a separate if for each item (not else if), and a new parameter, if, and argument for every item picked up. Or: a bag that grows while the game runs cannot be counted without the list.",
          ],
        },
      ],
      model: "The list bag holds every item the player carries under one name. CountOf takes the whole bag as one parameter, and the loop asks the same question about every item, so it counts a bag of 4 items or 40.\n\nWithout the list, the items would be four variables, item1 to item4. CountOf would need a parameter for each, and the loop would become four separate if statements, one per item, each adding 1 to count when that item equals wanted. They have to be separate ifs, not else if, or the count stops at the first match. Every item the player picks up means a new variable, a new parameter, a new if, and a changed call.",
      note: "The exam gives its one point only when both halves are there.",
      facts: "CountOf(bag, \"potion\") is 2. The four-variable version with separate ifs is also 2. With else if it is 1.",
      verify: {
        cases: [
          { run: `List<string> bag = new List<string> { "potion", "arrow", "potion", "rope" };
Console.WriteLine(CountOf(bag, "potion"));
int CountOf(List<string> bag, string wanted) { int count = 0; for (int i = 0; i < bag.Count; i++) { if (bag[i] == wanted) { count = count + 1; } } return count; }`, out: "2" },
          { run: `Console.WriteLine(CountOf("potion", "arrow", "potion", "rope", "potion"));
Console.WriteLine(CountElse("potion", "arrow", "potion", "rope", "potion"));
int CountOf(string item1, string item2, string item3, string item4, string wanted)
{
    int count = 0;
    if (item1 == wanted) { count = count + 1; }
    if (item2 == wanted) { count = count + 1; }
    if (item3 == wanted) { count = count + 1; }
    if (item4 == wanted) { count = count + 1; }
    return count;
}
int CountElse(string item1, string item2, string item3, string item4, string wanted)
{
    int count = 0;
    if (item1 == wanted) { count = count + 1; }
    else if (item2 == wanted) { count = count + 1; }
    else if (item3 == wanted) { count = count + 1; }
    else if (item4 == wanted) { count = count + 1; }
    return count;
}`, out: "2\n1" },
        ],
      },
    },
    {
      id: "q3-w03", skill: "wr-nolist", type: "wr",
      source: "2026 exam, question 2(c)",
      listI: `List<string> names = new List<string>();
names.Add("Rook");
names.Add("Mote");
names.Add("Hero");`,
      listII: `int FindAnywhere(List<string> names, string wanted)
{
    for (int i = 0; i < names.Count; i++)
    {
        if (names[i] == wanted)
        {
            return i;
        }
    }
    return -1;
}`,
      call: "Console.WriteLine(FindAnywhere(names, \"Mote\"));",
      prompt: "Consider the list included in part (i) of the List section of your Personalized Project Reference. Explain how the list uses abstraction to manage complexity in your program. Suppose the list was not included in your program. Describe how you would need to adjust the code segment in part (ii) of the List section of your Personalized Project Reference so that it has the same behavior. If it is not possible to have the same behavior without the use of the list, explain why.",
      rows: [
        {
          name: "How the list manages complexity",
          levels: [
            "Missing, or about some other program.",
            "Vague: it stores data or keeps things organized, with nothing about names or FindAnywhere.",
            "One name, names, holds the whole party in order, so FindAnywhere has one list parameter and searches a party of any size.",
          ],
        },
        {
          name: "How List (ii) changes without the list",
          levels: [
            "Missing, or only about List (i), not FindAnywhere.",
            "Says separate variables would be used, but not what happens to FindAnywhere.",
            "A variable and a parameter for each name, the loop replaced by an if and else if for each name returning its position, return -1 at the end, and a new parameter and test for every hero who joins. Or: a party that grows while the game runs cannot be searched without the list.",
          ],
        },
      ],
      model: "The list names keeps the whole party, in order, under one name. FindAnywhere takes that one list, and its loop checks every index, so the same five lines search a party of 3 or a party of 30.\n\nWithout the list, the party is three variables: name1, name2, and name3. FindAnywhere would need a parameter for each one, and the loop would be replaced by a chain: if name1 equals wanted return 0, else if name2 equals wanted return 1, else if name3 equals wanted return 2, then return -1. Every hero who joins means another variable, another parameter, another else if, and a changed call. A party that grows while the game is running could not be searched this way at all.",
      note: "The exam gives its one point only when both halves are there.",
      facts: "FindAnywhere(names, \"Mote\") is 1. The three-variable chain also gives 1, and -1 for Grub.",
      verify: {
        cases: [
          { run: `List<string> names = new List<string> { "Rook", "Mote", "Hero" };
Console.WriteLine(FindAnywhere(names, "Mote"));
int FindAnywhere(List<string> names, string wanted) { for (int i = 0; i < names.Count; i++) { if (names[i] == wanted) { return i; } } return -1; }`, out: "1" },
          { run: `Console.WriteLine(FindInThree("Rook", "Mote", "Hero", "Mote"));
Console.WriteLine(FindInThree("Rook", "Mote", "Hero", "Grub"));
int FindInThree(string name1, string name2, string name3, string wanted)
{
    if (name1 == wanted) { return 0; }
    else if (name2 == wanted) { return 1; }
    else if (name3 == wanted) { return 2; }
    return -1;
}`, out: "1\n-1" },
        ],
      },
    },

    // ---------------------------------------------------------------- Written response: a logic error
    {
      id: "q3-w04", skill: "wr-logic", type: "wr",
      source: "2025 exam, Set 2, question 2(b)",
      listI: `List<string> monsters = new List<string>();
monsters.Add("Bat");
monsters.Add("Wolf");
monsters.Add("Slime");`,
      listII: `void PrintMonsters(List<string> monsters)
{
    for (int i = 0; i < monsters.Count; i++)
    {
        Console.WriteLine("A " + monsters[i] + " blocks the way.");
    }
}`,
      call: "PrintMonsters(monsters);",
      prompt: "Consider the code segment in part (ii) of the List section of your Personalized Project Reference. Suppose another programmer modifies this code segment. Describe a modification the other programmer could make to this code segment that would result in a logic error. Explain why this modification would result in a logic error.",
      rows: [
        {
          name: "A modification to List (ii) that still runs",
          levels: [
            "None, a change that does not build (a missing semicolon or brace), or a change to the list instead of PrintMonsters.",
            "A change too vague to try (\"change the loop\").",
            "A specific change to PrintMonsters that builds and runs.",
          ],
        },
        {
          name: "Why it is a logic error, consistent with the code",
          levels: [
            "Missing, or the result described is not what the changed code does.",
            "Says it would be wrong, without saying what comes out wrong.",
            "Says what comes out wrong and why, naming the monsters that are missed or repeated.",
          ],
        },
      ],
      model: "The other programmer could change int i = 0 to int i = 1. The program still builds and runs, but the first pass reads monsters[1], so the Bat at index 0 is never printed. Only the Wolf and the Slime appear, and nothing warns that a monster was skipped.",
      note: "A crash is a logic error if the response explains it. A syntax error is not, and \"the program will not run\" with no explanation earns nothing.",
      factsTable: [
        ["int i = 1", "A Wolf and A Slime only: the Bat is skipped"],
        ["i < monsters.Count - 1", "A Bat and A Wolf only: the Slime is skipped"],
        ["i <= monsters.Count", "all three lines, then a crash (ArgumentOutOfRangeException) when i is 3"],
        ["monsters[0] in place of monsters[i]", "A Bat blocks the way. three times"],
      ],
      verify: {
        cases: [
          { run: `List<string> monsters = new List<string> { "Bat", "Wolf", "Slime" };
for (int i = 1; i < monsters.Count; i++) { Console.WriteLine("A " + monsters[i] + " blocks the way."); }`, out: "A Wolf blocks the way.\nA Slime blocks the way." },
          { run: `List<string> monsters = new List<string> { "Bat", "Wolf", "Slime" };
for (int i = 0; i < monsters.Count - 1; i++) { Console.WriteLine("A " + monsters[i] + " blocks the way."); }`, out: "A Bat blocks the way.\nA Wolf blocks the way." },
          { run: `List<string> monsters = new List<string> { "Bat", "Wolf", "Slime" };
for (int i = 0; i <= monsters.Count; i++) { Console.WriteLine("A " + monsters[i] + " blocks the way."); }`, out: "A Bat blocks the way.\nA Wolf blocks the way.\nA Slime blocks the way.", crash: "ArgumentOutOfRangeException" },
          { run: `List<string> monsters = new List<string> { "Bat", "Wolf", "Slime" };
for (int i = 0; i < monsters.Count; i++) { Console.WriteLine("A " + monsters[0] + " blocks the way."); }`, out: "A Bat blocks the way.\nA Bat blocks the way.\nA Bat blocks the way." },
        ],
      },
    },
    {
      id: "q3-w05", skill: "wr-logic", type: "wr",
      source: "2025 exam, Set 2, question 2(b)",
      listI: `List<string> bag = new List<string>();
bag.Add("potion");
bag.Add("arrow");
bag.Add("potion");
bag.Add("rope");`,
      listII: `int CountOf(List<string> bag, string wanted)
{
    int count = 0;
    for (int i = 0; i < bag.Count; i++)
    {
        if (bag[i] == wanted)
        {
            count = count + 1;
        }
    }
    return count;
}`,
      call: "Console.WriteLine(CountOf(bag, \"potion\"));",
      prompt: "Consider the code segment in part (ii) of the List section of your Personalized Project Reference. Suppose another programmer modifies this code segment. Describe a modification the other programmer could make to this code segment that would result in a logic error. Explain why this modification would result in a logic error.",
      rows: [
        {
          name: "A modification to List (ii) that still runs",
          levels: [
            "None, a change that does not build (a missing semicolon or brace), or a change to the list instead of CountOf.",
            "A change too vague to try (\"change the loop\").",
            "A specific change to CountOf that builds and runs.",
          ],
        },
        {
          name: "Why it is a logic error, consistent with the code",
          levels: [
            "Missing, or the result described is not what the changed code does.",
            "Says it would be wrong, without saying what comes out wrong.",
            "Says what comes out wrong and why, with the count it gives for this bag.",
          ],
        },
      ],
      model: "The other programmer could move return count; inside the loop, right after the if. It still builds, but the function now leaves at the end of the first pass. For this bag, CountOf(bag, \"potion\") gives 1 instead of 2, because the potion at index 2 is never checked.",
      note: "A crash is a logic error if the response explains it. A syntax error is not, and \"the program will not run\" with no explanation earns nothing.",
      factsTable: [
        ["return count; inside the loop", "1: only bag[0] is checked (the compiler warns Unreachable code detected)"],
        ["int i = 1", "1: the potion at index 0 is skipped"],
        ["!= in place of ==", "2: it counts arrow and rope, the items that are not potions"],
        ["int count = 1", "3: one too many for every call"],
      ],
      verify: {
        cases: [
          { run: `List<string> bag = new List<string> { "potion", "arrow", "potion", "rope" };
Console.WriteLine(CountOf(bag, "potion"));
int CountOf(List<string> bag, string wanted) { int count = 0; for (int i = 0; i < bag.Count; i++) { if (bag[i] == wanted) { count = count + 1; } return count; } return count; }`, out: "1", warning: "CS0162" },
          { run: `List<string> bag = new List<string> { "potion", "arrow", "potion", "rope" };
Console.WriteLine(CountOf(bag, "potion"));
int CountOf(List<string> bag, string wanted) { int count = 0; for (int i = 1; i < bag.Count; i++) { if (bag[i] == wanted) { count = count + 1; } } return count; }`, out: "1" },
          { run: `List<string> bag = new List<string> { "potion", "arrow", "potion", "rope" };
Console.WriteLine(CountOf(bag, "potion"));
int CountOf(List<string> bag, string wanted) { int count = 0; for (int i = 0; i < bag.Count; i++) { if (bag[i] != wanted) { count = count + 1; } } return count; }`, out: "2" },
          { run: `List<string> bag = new List<string> { "potion", "arrow", "potion", "rope" };
Console.WriteLine(CountOf(bag, "potion"));
int CountOf(List<string> bag, string wanted) { int count = 1; for (int i = 0; i < bag.Count; i++) { if (bag[i] == wanted) { count = count + 1; } } return count; }`, out: "3" },
        ],
      },
    },
    {
      id: "q3-w06", skill: "wr-logic", type: "wr",
      source: "2025 exam, Set 2, question 2(b)",
      listI: `List<string> names = new List<string>();
names.Add("Rook");
names.Add("Mote");
names.Add("Hero");`,
      listII: `int FindAnywhere(List<string> names, string wanted)
{
    for (int i = 0; i < names.Count; i++)
    {
        if (names[i] == wanted)
        {
            return i;
        }
    }
    return -1;
}`,
      call: "Console.WriteLine(FindAnywhere(names, \"Hero\"));",
      prompt: "Consider the code segment in part (ii) of the List section of your Personalized Project Reference. Suppose another programmer modifies this code segment. Describe a modification the other programmer could make to this code segment that would result in a logic error. Explain why this modification would result in a logic error.",
      rows: [
        {
          name: "A modification to List (ii) that still runs",
          levels: [
            "None, a change that does not build (a missing semicolon or brace), or a change to the list instead of FindAnywhere.",
            "A change too vague to try (\"change the loop\").",
            "A specific change to FindAnywhere that builds and runs.",
          ],
        },
        {
          name: "Why it is a logic error, consistent with the code",
          levels: [
            "Missing, or the result described is not what the changed code does.",
            "Says it would be wrong, without saying what comes out wrong.",
            "Says what comes out wrong and why, with the index it gives for a name in this party.",
          ],
        },
      ],
      model: "The other programmer could add else { return -1; } after the if, inside the loop. It still builds, but now the function returns on the first pass whether or not the name matched. FindAnywhere(names, \"Hero\") gives -1 instead of 2, because Rook is not Hero and the else returns before Mote or Hero is ever checked. Only Rook would be found.",
      note: "A crash is a logic error if the response explains it. A syntax error is not, and \"the program will not run\" with no explanation earns nothing.",
      factsTable: [
        ["else { return -1; } inside the loop", "-1 for Hero (and for Mote): only index 0 is checked"],
        ["i < names.Count - 1", "-1 for Hero: the last index is never checked"],
        ["int i = 1", "-1 for Rook: index 0 is never checked"],
        ["return i; changed to return i + 1;", "3 for Hero: every answer is one too high, and 3 is not an index"],
      ],
      verify: {
        cases: [
          { run: `List<string> names = new List<string> { "Rook", "Mote", "Hero" };
Console.WriteLine(F(names, "Hero") + " " + F(names, "Mote"));
int F(List<string> names, string wanted) { for (int i = 0; i < names.Count; i++) { if (names[i] == wanted) { return i; } else { return -1; } } return -1; }`, out: "-1 -1", warning: "CS0162" },
          { run: `List<string> names = new List<string> { "Rook", "Mote", "Hero" };
Console.WriteLine(F(names, "Hero"));
int F(List<string> names, string wanted) { for (int i = 0; i < names.Count - 1; i++) { if (names[i] == wanted) { return i; } } return -1; }`, out: "-1" },
          { run: `List<string> names = new List<string> { "Rook", "Mote", "Hero" };
Console.WriteLine(F(names, "Rook"));
int F(List<string> names, string wanted) { for (int i = 1; i < names.Count; i++) { if (names[i] == wanted) { return i; } } return -1; }`, out: "-1" },
          { run: `List<string> names = new List<string> { "Rook", "Mote", "Hero" };
Console.WriteLine(F(names, "Hero"));
int F(List<string> names, string wanted) { for (int i = 0; i < names.Count; i++) { if (names[i] == wanted) { return i + 1; } } return -1; }`, out: "3" },
        ],
      },
    },
    ...q4A.items,
    ...q4WR.items,
    ...m2Review.items,
    ...SPRING,
  ],
};

// Topic 2.2 Quiz: Structures, Powers, and Functions of Congress
import { bars } from "../../plot.js";

const comma = (v) => v.toLocaleString("en-US");
// Résumés of Congressional Activity, Congressional Record Daily Digest. "Public bills enacted" adds the Senate and House columns.
const work = {
  years: ["2021", "2022", "2023", "2024"],
  label: ["2021 (117th, 1st session)", "2022 (117th, 2nd session)", "2023 (118th, 1st session)", "2024 (118th, 2nd session)"],
  introduced: [11304, 6516, 12185, 7121],
  reported: [396, 817, 588, 1008],
  enacted: [85, 247, 63, 237],
};

export const sets = {
  "t22-s1": {
    id: "t22-s1", name: "Measures introduced, reported, and enacted, 2021 to 2024", intro: "Use the chart and table below to answer the questions that follow.", label: "Chart",
    sources: [{ title: "Chart", blocks: [
      { svg: bars({ labels: work.years, series: [{ name: "Measures reported by committees", values: work.reported }, { name: "Public bills enacted into law", values: work.enacted }], y: [0, 1200], step: 200, yname: "Number", fmt: comma, width: 560,
        alt: "Grouped bar chart by session of Congress. Measures reported by committees: 2021, 396; 2022, 817; 2023, 588; 2024, 1,008. Public bills enacted into law: 2021, 85; 2022, 247; 2023, 63; 2024, 237." }),
        caption: "Measures reported by House and Senate committees and public bills enacted into law in each session of the 117th and 118th Congresses, 2021 to 2024. The table also gives the number of measures introduced." },
      { table: { head: ["Session", "Measures introduced", "Measures reported by committees", "Public bills enacted into law"], rows: work.label.map((l, i) => [l, comma(work.introduced[i]), comma(work.reported[i]), String(work.enacted[i])]) } },
      { p: "Measures include bills and resolutions. Public bills enacted adds the bills that began in the Senate and those that began in the House." },
      { cite: "U.S. Senate, Résumés of Congressional Activity, \"Data on Legislative Activity,\" Congressional Record Daily Digest, for the 117th Congress, 1st and 2nd sessions, and the 118th Congress, 1st and 2nd sessions.", url: "https://www.senate.gov/legislative/ResumesofCongressionalActivity1947present.htm", kind: "data" },
    ] }],
  },
  "t22-s2": {
    id: "t22-s2", name: "A bridge in the spending bill", intro: "Use the scenario below to answer parts A, B, and C.",
    sources: [{ title: "Scenario", blocks: [
      { p: "Representative Lin serves on the House Appropriations Committee. When the committee writes the yearly spending bill for transportation, she adds $8 million to repair a bridge in her district, listed by name in the bill. Several members who planned to vote against the bill change their votes after projects for their own districts are added. A budget watchdog group publishes a list of the projects and calls them wasteful. The president wants the rest of the bill but says she dislikes several of the projects." },
      { cite: "Scenario written for this review.", kind: "scenario" },
    ] }],
  },
};

const lead = "Use the scenario to answer parts A, B, and C.";

export default {
  forms: [
    { id: "t22", name: "Topic 2.2 Quiz: Structures, Powers, and Functions of Congress", group: "Unit 2: Interactions Among Branches of Government",
      items: [
        { id: "t22-m01", skill: "u2", type: "mcq", set: "t22-s1", topic: "2.2", difficulty: "easy",
          question: "In which session did committees report the most measures?",
          choices: ["2024", "2022", "2023", "2021"],
          why: [
            "Correct. Committees reported 1,008 measures in 2024, the most of the four sessions.",
            "Committees reported 817 measures in 2022, fewer than in 2024.",
            "Committees reported 588 measures in 2023.",
            "Committees reported 396 measures in 2021, the fewest shown.",
          ],
          answer: 0 },
        { id: "t22-m02", skill: "u2", type: "mcq", set: "t22-s1", topic: "2.2", difficulty: "difficult",
          question: "In 2023, members introduced 12,185 measures, and committees reported 588. Which feature of Congress best explains this gap?",
          choices: [
            "Committee chairs decide which bills receive hearings and markups.",
            "The president vetoes most bills before committees can act on them.",
            "Senators filibuster most bills on the day they are introduced.",
            "The Rules Committee must clear every bill introduced in either chamber.",
          ],
          why: [
            "Correct. Bills are referred to committees, and chairs control the agenda, so most bills never get a hearing or a markup and die in committee.",
            "A veto comes after both chambers pass a bill, long after committee action.",
            "A filibuster happens on the Senate floor, after a bill is reported, and cannot explain the House's numbers.",
            "The House Rules Committee sets floor terms for bills already reported; it has no role in the Senate.",
          ],
          answer: 0 },
        { id: "t22-m03", skill: "u2", type: "mcq", set: "t22-s1", topic: "2.2", difficulty: "moderate",
          question: "Which pattern appears in both Congresses shown?",
          choices: [
            "More public bills became law in the second session than in the first.",
            "More measures were introduced in the second session than in the first.",
            "Committees reported fewer measures in the second session than in the first.",
            "The number of laws enacted fell in each session compared with the one before.",
          ],
          why: [
            "Correct. Enactments rose from 85 to 247 in the 117th Congress and from 63 to 237 in the 118th.",
            "Introductions fell in each second session (11,304 to 6,516 and 12,185 to 7,121).",
            "Reported measures rose in each second session (396 to 817 and 588 to 1,008).",
            "Enactments rose in 2022 and in 2024, so they did not fall every session.",
          ],
          answer: 0 },
        { id: "t22-m04", skill: "u2", type: "mcq", topic: "2.2", difficulty: "moderate",
          question: "A senator tells her party's leader that she will object to taking up a nominee for a federal agency until the agency reverses a decision that hurts her state. This tactic is called",
          choices: ["a hold", "cloture", "a discharge petition", "a rider"],
          why: [
            "Correct. A hold is a senator's notice that she will object to unanimous consent on a measure or nomination, which signals a possible filibuster and stalls it.",
            "Cloture is the vote of 60 senators that ends debate; it is a tool against delay, not for it.",
            "A discharge petition is a House tool that forces a bill out of committee with 218 signatures.",
            "A rider is an unrelated provision attached to a bill, not an objection to a nomination.",
          ],
          answer: 0 },
        { id: "t22-m05", skill: "u2", type: "mcq", topic: "2.2", difficulty: "easy",
          question: "Which is a power of the Speaker of the House?",
          choices: [
            "Referring bills to House committees",
            "Breaking tie votes in the Senate",
            "Scheduling debate on the Senate floor",
            "Appointing federal judges with the president",
          ],
          why: [
            "Correct. The Speaker, chosen by the majority party, refers bills to committees, names members of some committees, and controls the House floor.",
            "The vice president breaks ties in the Senate under Article I, Section 3.",
            "The Senate majority leader schedules Senate floor business.",
            "The president nominates judges, and the Senate confirms them; the House has no role.",
          ],
          answer: 0 },
        { id: "t22-m06", skill: "u2", type: "mcq", topic: "2.2", difficulty: "easy",
          question: "The president signs a treaty with several nations to protect fisheries. What must happen before the treaty binds the United States?",
          choices: [
            "Two-thirds of senators present must vote to approve it.",
            "A majority of both the House and the Senate must pass it.",
            "Two-thirds of the House must ratify it and the Senate consent.",
            "Three-fourths of the state legislatures must ratify the treaty.",
          ],
          why: [
            "Correct. Article II, Section 2 lets the president make treaties with the advice and consent of the Senate, provided two-thirds of the senators present concur.",
            "Ordinary bills need majorities in both chambers; treaties go only to the Senate.",
            "The House has no constitutional role in approving treaties.",
            "State legislatures ratify constitutional amendments, not treaties.",
          ],
          answer: 0 },
        { id: "t22-m07", skill: "u2", type: "mcq", topic: "2.2", difficulty: "moderate",
          question: "A House member from a farm district agrees to vote for a coastal member's flood insurance bill. In return, the coastal member agrees to vote for a crop insurance bill. This is an example of",
          choices: ["logrolling", "pork-barrel spending", "a filibuster", "a markup"],
          why: [
            "Correct. Logrolling is trading votes so that each member gets support for the bill that matters most to her.",
            "Pork-barrel spending is money for a project in one member's district; the trade of votes is the key here.",
            "A filibuster is unlimited debate in the Senate; these are House members trading votes.",
            "A markup is a committee session where members revise a bill's text.",
          ],
          answer: 0 },
        { id: "t22-m08", skill: "u2", type: "mcq", topic: "2.2", difficulty: "difficult",
          question: "Which cut could Congress make only by changing an existing law, rather than by passing a smaller yearly appropriation?",
          choices: [
            "Lowering Social Security retirement benefits",
            "Cutting the budget of the National Park Service",
            "Buying fewer new ships for the Navy next year",
            "Reducing grants for NASA science research",
          ],
          why: [
            "Correct. Social Security is mandatory spending: benefits are set by law and paid automatically, so cutting them requires amending that law.",
            "Park Service operations are discretionary spending, set each year in appropriations bills.",
            "Defense purchases are discretionary and are funded through yearly appropriations.",
            "NASA research grants are discretionary and can be reduced in the next appropriations bill.",
          ],
          answer: 0 },
        { id: "t22-ca1a", skill: "u2", type: "fr", set: "t22-s2", part: "Concept application", sub: "A", topic: "2.2", lead,
          prompt: "Describe the practice Representative Lin used to bring federal money to her district.",
          earns: "Describes pork-barrel spending (an earmark): money in a bill for a specific project in a member's own district.",
          yes: ["Pork-barrel spending: Lin placed money for a named bridge in her district into the spending bill.", "An earmark, which directs part of an appropriation to a specific local project chosen by a member."],
          no: ["\"Logrolling.\" That names the vote trading in part B, not Lin's own project.", "\"Pork.\" Naming the term without describing it does not earn the point."],
          example: "Lin used pork-barrel spending, also called an earmark. She wrote $8 million for a specific bridge in her own district into the transportation spending bill so that federal money would go to her constituents.",
          notExample: "Lin used her power to make the bill better for the country." },
        { id: "t22-ca1b", skill: "u2", type: "fr", set: "t22-s2", part: "Concept application", sub: "B", topic: "2.2", lead,
          prompt: "Explain how adding projects for members' districts can help a spending bill pass.",
          earns: "Explains that projects give members a local reason to vote yes, building a majority coalition (often through logrolling).",
          yes: ["Members who get a project can claim credit at home, so they switch to yes, as several members did in the scenario.", "Leaders trade projects for votes, a form of logrolling that turns opponents into supporters until the bill has a majority."],
          no: ["\"The projects are good for the district.\" This does not explain the effect on votes.", "\"The president must sign it.\" This is about a later step, not passage."],
          example: "When a member's district gets a project, she can claim credit with her voters, so she has a reason to support the whole bill. In the scenario, members who planned to vote no changed their votes after their projects were added, which built a majority.",
          notExample: "Spending bills pass because Congress has the power of the purse." },
        { id: "t22-ca1c", skill: "u2", type: "fr", set: "t22-s2", part: "Concept application", sub: "C", topic: "2.2", lead,
          prompt: "Explain why the president cannot remove the projects she dislikes while signing the rest of the bill.",
          earns: "Explains that the president must sign or veto the whole bill, since the line-item veto was struck down in Clinton v. City of New York (1998) (or that Article I's presentment clause allows no partial veto).",
          yes: ["The Constitution lets her sign or veto the bill as a whole; the Supreme Court struck down the Line Item Veto Act in Clinton v. City of New York (1998).", "Under the presentment clause she must approve or return the entire bill, so to block the projects she would have to veto the bill she wants."],
          no: ["\"She can use an executive order to cancel them.\" A president cannot cancel appropriations by order.", "\"Congress controls money.\" True but does not explain the limit on her veto."],
          example: "Article I lets the president sign a bill or veto the whole bill; there is no line-item veto. Congress tried to give presidents one in 1996, but in Clinton v. City of New York (1998) the Supreme Court struck it down. So she must accept the projects or veto the transportation funding she wants.",
          notExample: "The president can remove the projects because she is the head of the executive branch." },
      ] },
  ],
};

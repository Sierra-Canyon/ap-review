// Topic 2.14 Quiz: Holding the Bureaucracy Accountable
import { bars } from "../../plot.js";

// U.S. Government Accountability Office, "Performance," annual measures, fiscal years 2020 to 2025 (actual results).
const gao = {
  years: ["2020", "2021", "2022", "2023", "2024", "2025"],
  testimonies: [59, 67, 72, 57, 60, 46],
  benefits: ["77.6", "66.2", "55.6", "70.4", "67.5", "62.7"],
  implemented: ["77", "76", "77", "75", "70", "77"],
};

export const sets = {
  "t214-s1": {
    id: "t214-s1", name: "GAO testimony and results, fiscal years 2020 to 2025", intro: "Use the chart and table below to answer the questions that follow.", label: "Chart",
    sources: [{ title: "Chart", blocks: [
      { svg: bars({ labels: gao.years, values: gao.testimonies, y: [0, 100], step: 20, yname: "Testimonies before Congress", xname: "Fiscal year", width: 520,
        alt: "Bar chart of the number of times GAO officials testified before congressional committees each fiscal year: " + gao.years.map((y, i) => `${y}, ${gao.testimonies[i]}`).join("; ") + "." }),
        caption: "Number of times Government Accountability Office (GAO) officials testified before congressional committees, fiscal years 2020 to 2025. GAO's target for 2025 was 90." },
      { table: { head: ["Fiscal year", "Testimonies", "Financial benefits (billions of dollars)", "Past recommendations implemented (%)"], rows: gao.years.map((y, i) => [y, String(gao.testimonies[i]), gao.benefits[i], gao.implemented[i]]) } },
      { p: "Financial benefits are GAO's estimates of money saved or gained because agencies or Congress acted on its work. Starting in 2025, the implementation rate is measured over five years instead of four." },
      { cite: "U.S. Government Accountability Office, \"Performance,\" table of annual performance measures, fiscal years 2020 to 2025 (accessed November 2026).", url: "https://www.gao.gov/about/what-gao-does/performance", kind: "data" },
    ] }],
  },
  "t214-s2": {
    id: "t214-s2", name: "Grants for repairs that never happened", intro: "Use the scenario below to answer parts A, B, and C.",
    sources: [{ title: "Scenario", blocks: [
      { p: "An inspector general's report finds that a regional office of a federal housing agency approved $40 million in repair grants to landlords who never made the repairs. The House Oversight Committee calls the agency's director to testify, and she blames a shortage of staff. The committee chair announces a bill that would cut the agency's administrative budget by 10 percent unless it adopts new inspection rules within six months. The president says the director still has her full confidence but orders the agency to report to the White House every month on its progress." },
      { cite: "Scenario written for this review.", kind: "scenario" },
    ] }],
  },
};

const lead = "Use the scenario to answer parts A, B, and C.";

export default {
  forms: [
    { id: "t214", name: "Topic 2.14 Quiz: Holding the Bureaucracy Accountable", group: "Unit 2: Interactions Among Branches of Government",
      items: [
        { id: "t214-m01", skill: "u2", type: "mcq", set: "t214-s1", topic: "2.14", difficulty: "easy",
          question: "The Government Accountability Office, the source of these data, is",
          choices: [
            "an agency of Congress that audits and investigates federal programs",
            "an office in the White House that prepares the president's budget",
            "a federal court that decides disputes over government contracts",
            "an independent agency that enforces federal campaign finance laws",
          ],
          why: [
            "Correct. GAO works for Congress, auditing agencies and reporting on how federal money is spent, which is why its officials testify before committees.",
            "The Office of Management and Budget prepares the president's budget.",
            "GAO is not a court, though it reviews some contract protests.",
            "The Federal Election Commission enforces campaign finance laws.",
          ],
          answer: 0 },
        { id: "t214-m02", skill: "u2", type: "mcq", set: "t214-s1", topic: "2.14", difficulty: "moderate",
          question: "Which statement is supported by the chart and table?",
          choices: [
            "GAO testified fewer times in 2025 than in any other year shown.",
            "GAO's financial benefits rose every year from 2020 to 2025.",
            "Testimonies and financial benefits both peaked in 2022.",
            "More than 80 percent of past recommendations were implemented each year.",
          ],
          why: [
            "Correct. GAO testified 46 times in 2025, below every other year and far below its target of 90.",
            "Financial benefits fell from $77.6 billion in 2020 to $55.6 billion in 2022 before rising and falling again.",
            "Testimonies peaked in 2022 (72), but financial benefits were lowest that year ($55.6 billion).",
            "The implementation rate ranged from 70 to 77 percent.",
          ],
          answer: 0 },
        { id: "t214-m03", skill: "u2", type: "mcq", set: "t214-s1", topic: "2.14", difficulty: "difficult",
          question: "Which is a limitation of using these data to judge how well Congress oversees the bureaucracy?",
          choices: [
            "They measure GAO's work and leave out hearings and inquiries Congress holds without GAO.",
            "They do not report how many times GAO officials testified before Congress each year.",
            "They cover only years in which one party controlled both the House and the Senate.",
            "They report financial benefits in thousands of dollars rather than billions of dollars.",
          ],
          why: [
            "Correct. Congress oversees agencies through many hearings, investigations, and inspector general reports that do not involve GAO testimony, so these figures show only part of oversight.",
            "Testimonies are reported for every year in the chart and table.",
            "Control was split in several of these years; for example, in fiscal year 2020 Democrats held the House and Republicans the Senate.",
            "The table states benefits in billions of dollars.",
          ],
          answer: 0 },
        { id: "t214-m04", skill: "u2", type: "mcq", topic: "2.14", difficulty: "easy",
          question: "Which is an example of congressional oversight of the bureaucracy?",
          choices: [
            "A committee questions FEMA's chief about a slow disaster response.",
            "A senator introduces a bill to rename a post office in her hometown.",
            "The House passes a resolution honoring a championship college team.",
            "A representative speaks at a campaign rally in his home district.",
          ],
          why: [
            "Correct. Oversight is Congress's review of how agencies carry out the laws, often through hearings with agency heads.",
            "Naming a post office is lawmaking, not review of an agency.",
            "A resolution honoring a team does not review an agency.",
            "Campaigning is not an oversight activity.",
          ],
          answer: 0 },
        { id: "t214-m05", skill: "u2", type: "mcq", topic: "2.14", difficulty: "moderate",
          question: "Inspectors general help hold federal agencies accountable by",
          choices: [
            "auditing their agency and reporting problems to Congress",
            "deciding lawsuits that citizens bring against their own agency",
            "confirming the senior officials the president names to the agency",
            "writing the agency's yearly budget and sending it to Congress",
          ],
          why: [
            "Correct. Under the Inspector General Act of 1978, inspectors general investigate waste and fraud inside agencies and report to agency heads and Congress.",
            "Courts decide lawsuits against agencies.",
            "The Senate confirms senior officials.",
            "Budgets are prepared by agencies and the Office of Management and Budget for the president.",
          ],
          answer: 0 },
        { id: "t214-m06", skill: "u2", type: "mcq", topic: "2.14", difficulty: "moderate",
          question: "Congress adds language to a spending bill barring the Department of Energy from using any funds to close a research laboratory. This is an example of",
          choices: [
            "using the power of the purse to direct an agency",
            "a one-house legislative veto of an agency rule",
            "a signing statement that limits the agency",
            "judicial review of the agency's decision",
          ],
          why: [
            "Correct. Congress can attach limits to appropriations, telling agencies what they may or may not spend money on.",
            "The Supreme Court struck down one-house legislative vetoes in INS v. Chadha (1983); this limit is part of a law both chambers pass.",
            "A signing statement is the president's comment on a bill, not a limit Congress writes.",
            "Judicial review is done by courts, not Congress.",
          ],
          answer: 0 },
        { id: "t214-m07", skill: "u2", type: "mcq", topic: "2.14", difficulty: "difficult",
          question: "Which is a tool the president can use to hold an executive department accountable, paired with a real limit on that tool?",
          choices: [
            "Removing the department's secretary, though a replacement needs Senate confirmation",
            "Cutting the department's budget alone, though the House must approve it later",
            "Vetoing the department's new rules, though Congress may override by two-thirds",
            "Rewriting the department's statute by executive order, though courts may review it",
          ],
          why: [
            "Correct. Cabinet secretaries serve at the president's pleasure, but the president cannot install a permanent successor without the Senate's advice and consent.",
            "Only Congress can appropriate money; the president can propose cuts but cannot make them alone.",
            "The president does not veto agency rules; rules are not bills.",
            "An executive order cannot change a statute Congress passed.",
          ],
          answer: 0 },
        { id: "t214-m08", skill: "u2", type: "mcq", topic: "2.14", difficulty: "moderate",
          question: "Why is congressional oversight often limited in practice?",
          choices: [
            "Members have little time and staff and often rely on agency experts.",
            "The Constitution forbids Congress from questioning executive officials.",
            "Agencies are not required to answer requests from Congress at all.",
            "Only the Senate is allowed to hold hearings on agency performance.",
          ],
          why: [
            "Correct. Oversight competes with lawmaking and campaigning for members' time, and agencies know more about technical programs than most members.",
            "Congress's power to investigate is implied by its lawmaking and funding powers.",
            "Agencies answer to Congress, which funds them and can subpoena information.",
            "Committees in both chambers hold oversight hearings.",
          ],
          answer: 0 },
        { id: "t214-ca1a", skill: "u2", type: "fr", set: "t214-s2", part: "Concept application", sub: "A", topic: "2.14", lead,
          prompt: "Describe one method of congressional oversight shown in the scenario.",
          earns: "Describes an oversight method in the scenario: the committee hearing where the director testifies, or the inspector general report that Congress uses.",
          yes: ["The House Oversight Committee held a hearing and made the director explain the failed grants under questioning.", "An inspector general's audit uncovered the problem and reported it, giving Congress evidence to act on."],
          no: ["\"Oversight.\" Naming it does not describe it.", "\"The president ordered monthly reports.\" That is presidential, not congressional, oversight."],
          example: "The House Oversight Committee held a hearing and called the agency's director to testify. In the hearing, members questioned her about why $40 million in grants went to landlords who never made repairs, holding the agency publicly accountable.",
          notExample: "Congress can oversee agencies because they spend federal money." },
        { id: "t214-ca1b", skill: "u2", type: "fr", set: "t214-s2", part: "Concept application", sub: "B", topic: "2.14", lead,
          prompt: "Explain how the proposed budget cut could hold the agency accountable.",
          earns: "Explains that the power of the purse ties funding to performance, giving the agency a strong reason to adopt inspection rules to keep its money.",
          yes: ["Agencies depend on Congress for money, so threatening a 10 percent cut unless new rules are adopted pushes the agency to fix its process.", "The condition links the agency's budget to a specific reform, using the power of the purse to change its behavior."],
          no: ["\"Congress controls money.\" This does not explain the effect on the agency.", "\"Cutting money punishes the agency.\" Does not explain how it creates accountability."],
          example: "Congress controls the agency's funding through the power of the purse. By making the agency's administrative budget depend on adopting new inspection rules within six months, the chair gives the agency a strong reason to fix the problem the inspector general found or lose money.",
          notExample: "The budget cut holds the agency accountable because the grants were wasteful." },
        { id: "t214-ca1c", skill: "u2", type: "fr", set: "t214-s2", part: "Concept application", sub: "C", topic: "2.14", lead,
          prompt: "Explain how the president could hold the agency accountable in a way that Congress cannot.",
          earns: "Explains a presidential tool Congress lacks: removing or replacing the director, or directing the agency through executive orders or required reports, as the president does here.",
          yes: ["The president can fire the director and appoint a new one, while Congress can remove officials only through impeachment.", "As chief executive, the president can order the agency to report monthly and change its procedures directly, without passing a law."],
          no: ["\"The president can cut the budget.\" Only Congress can appropriate funds.", "\"The president can hold a hearing.\" That is a congressional tool."],
          example: "As head of the executive branch, the president can directly order the agency to change, as he does by requiring monthly reports to the White House. If the agency does not improve, the president can remove the director and appoint a new one, something Congress can do only through impeachment.",
          notExample: "The president can hold the agency accountable because the president is powerful." },
      ] },
  ],
};

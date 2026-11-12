// Topic 1.6 Quiz: Principles of American Government
// Sources: Federalist No. 47 (Avalon Project); dates of congressional approval and ratification of the 16th to 26th
// Amendments (National Archives), drawn as a bar chart; a scenario about a veto override.
import { bars } from "../../plot.js";

// National Archives, "The Constitution: Amendments 11-27": "Passed by Congress" and "Ratified" dates.
// Months = days between the two dates divided by 30.44, rounded to the nearest whole month.
const amend = {
  n: ["16th", "17th", "18th", "19th", "20th", "21st", "22nd", "23rd", "24th", "25th", "26th"],
  passed: ["July 2, 1909", "May 13, 1912", "December 18, 1917", "June 4, 1919", "March 2, 1932", "February 20, 1933", "March 21, 1947", "June 16, 1960", "August 27, 1962", "July 6, 1965", "March 23, 1971"],
  ratified: ["February 3, 1913", "April 8, 1913", "January 16, 1919", "August 18, 1920", "January 23, 1933", "December 5, 1933", "February 27, 1951", "March 29, 1961", "January 23, 1964", "February 10, 1967", "July 1, 1971"],
  months: [43, 11, 13, 14, 11, 9, 47, 9, 17, 19, 3],
};

export const sets = {
  "t16-s1": {
    id: "t16-s1", name: "Federalist No. 47 on the accumulation of power", intro: "Use the passage below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "The accumulation of all powers, legislative, executive, and judiciary, in the same hands, whether of one, a few, or many, and whether hereditary, selfappointed, or elective, may justly be pronounced the very definition of tyranny. Were the federal Constitution, therefore, really chargeable with the accumulation of power, or with a mixture of powers, having a dangerous tendency to such an accumulation, no further arguments would be necessary to inspire a universal reprobation of the system. I persuade myself, however, that it will be made apparent to every one, that the charge cannot be supported, and that the maxim on which it relies has been totally misconceived and misapplied." },
        { cite: "James Madison, Federalist No. 47, February 1, 1788, as published by the Avalon Project, Yale Law School (spelling as printed there). Opponents of the Constitution had charged that it mixed the powers of the three branches. \"Reprobation\" means condemnation.", url: "https://avalon.law.yale.edu/18th_century/fed47.asp", kind: "primary" },
      ] },
    ],
  },
  "t16-s2": {
    id: "t16-s2", name: "How long ratification took, 16th to 26th Amendments", intro: "Use the chart and table below to answer the questions that follow.", label: "Chart",
    sources: [
      { title: "Chart", blocks: [
        { svg: bars({ labels: amend.n, values: amend.months, y: [0, 50], step: 10, yname: "Months", width: 560, height: 300,
          alt: "Bar chart of the months between approval by Congress and ratification for the 16th through 26th Amendments: 16th, 43; 17th, 11; 18th, 13; 19th, 14; 20th, 11; 21st, 9; 22nd, 47; 23rd, 9; 24th, 17; 25th, 19; 26th, 3." }),
          caption: "Months from approval by Congress to ratification, 16th through 26th Amendments (1909 to 1971)." },
        { table: { head: ["Amendment", "Passed by Congress", "Ratified", "Months"], rows: amend.n.map((n, i) => [n, amend.passed[i], amend.ratified[i], String(amend.months[i])]) } },
        { cite: "National Archives, \"The Constitution: Amendments 11-27,\" dates passed by Congress and ratified. Months were computed for this review from those dates and rounded to the nearest month.", url: "https://www.archives.gov/founding-docs/amendments-11-27", kind: "data" },
      ] },
    ],
  },
  "t16-s3": {
    id: "t16-s3", name: "A vetoed farm bill", intro: "Use the scenario below to answer parts A, B, and C.",
    sources: [
      { title: "Scenario", blocks: [
        { p: "Congress passes a bill that would raise payments to farmers hurt by drought. The president vetoes it, saying it costs too much and sends money to large agricultural companies. The House votes on the bill again: 290 members vote to pass it over the veto and 140 vote against. In the Senate, all 100 senators vote: 62 vote to pass it over the veto and 38 vote against. The next day, the chair of the House Agriculture Committee says she will \"find another way to get the money to farmers this year.\"" },
        { cite: "Scenario written for this review.", kind: "scenario" },
      ] },
    ],
  },
};

const S = "u1", T = "1.6";

export default {
  forms: [
    { id: "t16", name: "Topic 1.6 Quiz: Principles of American Government", group: "Unit 1: Foundations of American Democracy",
      items: [
        { id: "t16-m01", skill: S, type: "mcq", set: "t16-s1", topic: T, difficulty: "moderate",
          question: "Which statement best summarizes Madison's argument in the passage?",
          choices: [
            "Joining all three powers in the same hands is tyranny, but the Constitution does not do so",
            "Placing all three kinds of power in Congress is safe, because the people elect its members",
            "Montesquieu's maxim is mistaken, so the branches of government need not be kept apart",
            "Only a hereditary ruler can become a tyrant, so elected officials pose little danger",
          ],
          why: [
            "Correct. Madison accepts that accumulating legislative, executive, and judicial power in the same hands is \"the very definition of tyranny,\" then promises to show that the charge against the Constitution \"cannot be supported.\"",
            "Madison says accumulation is tyranny whether the holders are \"hereditary, selfappointed, or elective,\" so election does not make it safe.",
            "Madison says the maxim has been \"misconceived and misapplied\" by critics, not that the maxim itself is wrong.",
            "The passage names \"one, a few, or many\" and elected rulers as possible tyrants, not only hereditary ones.",
          ],
          answer: 0 },
        { id: "t16-m02", skill: S, type: "mcq", set: "t16-s1", topic: T, difficulty: "difficult",
          question: "Which provision of the Constitution most directly answers the charge that power will accumulate \"in the same hands\"?",
          choices: [
            "Article I, Section 6, which bars members of Congress from holding another federal office while they serve",
            "Article I, Section 3, which makes the vice president, an executive officer, the presiding officer of the Senate",
            "Article I, Section 8, which lets Congress make all laws necessary and proper for carrying out its powers",
            "Article VI, which makes the Constitution and federal laws the supreme law of the land",
          ],
          why: [
            "Correct. The Incompatibility Clause keeps the same person from serving in Congress and in another branch at once, so legislative and executive power cannot pile up in the same hands.",
            "The vice president's role in the Senate blends executive and legislative roles. Critics pointed to such mixing as support for the charge.",
            "The Necessary and Proper Clause enlarges Congress's power. It does not keep the branches apart.",
            "The Supremacy Clause concerns federal and state law, not the division of power among branches.",
          ],
          answer: 0 },
        { id: "t16-m03", skill: S, type: "mcq", set: "t16-s2", topic: T, difficulty: "easy",
          question: "Which amendment shown was ratified in the shortest time after Congress approved it?",
          choices: ["The Twenty-sixth", "The Twenty-first", "The Twenty-third", "The Seventeenth"],
          why: [
            "Correct. The Twenty-sixth Amendment, lowering the voting age to 18, was ratified about 3 months after Congress approved it in March 1971.",
            "The Twenty-first took about 9 months, three times as long as the Twenty-sixth.",
            "The Twenty-third took about 9 months.",
            "The Seventeenth took about 11 months.",
          ],
          answer: 0 },
        { id: "t16-m04", skill: S, type: "mcq", set: "t16-s2", topic: T, difficulty: "moderate",
          question: "Which statement do the data support?",
          choices: [
            "Most of these amendments were ratified within two years of passing Congress",
            "Each amendment took longer to ratify than the amendment before it",
            "None of these amendments took longer than three years to ratify",
            "Ratification grew steadily faster from the 1900s to the 1970s",
          ],
          why: [
            "Correct. Nine of the eleven amendments were ratified in 19 months or less. Only the 16th (43 months) and 22nd (47 months) took longer than two years.",
            "The times rise and fall. For example, the 21st took 9 months and the 22nd took 47.",
            "The 16th took 43 months and the 22nd took 47, both longer than three years.",
            "The 22nd, approved in 1947, took longer than any amendment from the 1910s, so the trend is not steady.",
          ],
          answer: 0 },
        { id: "t16-m05", skill: S, type: "mcq", set: "t16-s2", topic: T, difficulty: "difficult",
          question: "The Twenty-first Amendment, which repealed Prohibition, is the only amendment ratified by state conventions rather than state legislatures. This shows that under Article V,",
          choices: [
            "Congress may choose ratification by state legislatures or by state conventions",
            "an amendment that repeals another must be ratified by state conventions",
            "the president decides which method of ratification the states will use",
            "only two-thirds of the states must approve when conventions are used",
          ],
          why: [
            "Correct. Article V says an amendment is ratified by three-fourths of the state legislatures or by conventions in three-fourths of the states, \"as the one or the other Mode of Ratification may be proposed by the Congress.\"",
            "Article V sets no special rule for repeal amendments. Congress chose conventions for the Twenty-first.",
            "The president has no formal role in the amendment process.",
            "Ratification requires three-fourths of the states by either method.",
          ],
          answer: 0 },
        { id: "t16-m06", skill: S, type: "mcq", topic: T, difficulty: "easy",
          question: "The president's power to veto bills is a check on",
          choices: ["Congress", "the Supreme Court", "the states", "the Cabinet"],
          why: [
            "Correct. Under Article I, Section 7, the president may return a bill passed by Congress with objections, and it becomes law only if two-thirds of each house votes to override.",
            "The veto applies to bills passed by Congress, not to court rulings.",
            "The veto applies to acts of Congress, not to state laws.",
            "The Cabinet does not pass laws. The president directs Cabinet members without a veto.",
          ],
          answer: 0 },
        { id: "t16-m07", skill: S, type: "mcq", topic: T, difficulty: "moderate",
          question: "Congress proposes an amendment, and 36 state legislatures ratify it. What is its status?",
          choices: [
            "It needs ratification by two more states",
            "It is part of the Constitution, since most states approved",
            "It goes to the president, who may sign or veto it",
            "It goes to the Supreme Court for final approval",
          ],
          why: [
            "Correct. Article V requires ratification by three-fourths of the states. With 50 states, that is 38, so two more are needed.",
            "A simple majority of states is not enough. Article V requires three-fourths.",
            "The president has no role in approving amendments.",
            "The Supreme Court does not approve amendments.",
          ],
          answer: 0 },
        { id: "t16-m08", skill: S, type: "mcq", topic: T, difficulty: "difficult",
          question: "Which choice correctly pairs a principle with a provision of the Constitution that reflects it?",
          choices: [
            "Checks and balances: Senate approval of treaties by a two-thirds vote",
            "Federalism: the president's power to veto bills passed by Congress",
            "Popular sovereignty: life terms for judges on federal courts",
            "Separation of powers: the powers reserved to states by the Tenth Amendment",
          ],
          why: [
            "Correct. The president makes treaties only with the advice and consent of two-thirds of the senators present (Article II, Section 2), so the Senate checks the executive.",
            "The veto is a check between branches. Federalism concerns the division of power between national and state governments.",
            "Life tenure insulates judges from the voters. Popular sovereignty is reflected in features such as elections.",
            "The Tenth Amendment reflects federalism, the division of power with the states, not separation among branches.",
          ],
          answer: 0 },
        { id: "t16-ca1a", skill: S, type: "fr", set: "t16-s3", part: "Concept application", sub: "A", topic: T,
          lead: "Use the scenario to answer parts A, B, and C.",
          prompt: "Describe the constitutional process Congress used to try to pass the bill after the veto.",
          earns: "Describes the veto override: under Article I, Section 7, a vetoed bill becomes law if two-thirds of each house votes again to pass it.",
          yes: [
            "A veto override: both the House and the Senate must each vote by two-thirds to pass the bill despite the president's objections.",
            "Article I, Section 7 lets Congress make a vetoed bill law if two-thirds of the members voting in each chamber agree.",
          ],
          no: [
            "\"Override.\" (Named but not described.)",
            "\"A majority of Congress voted to override.\" (Wrong threshold.)",
          ],
          example: "Congress tried to override the veto. Under Article I, Section 7, a bill the president vetoes still becomes law if two-thirds of the House and two-thirds of the Senate vote to pass it again.",
          notExample: "Congress voted on the bill again." },
        { id: "t16-ca1b", skill: S, type: "fr", set: "t16-s3", part: "Concept application", sub: "B", topic: T,
          lead: "Use the scenario to answer parts A, B, and C.",
          prompt: "Explain whether the override succeeded and how the result reflects checks and balances.",
          earns: "States that the override failed because the Senate's 62 votes fell short of two-thirds (67), and explains that the veto let the executive block the legislature unless a supermajority agreed.",
          yes: [
            "It failed: the House reached two-thirds (290 of 430), but the Senate needed 67 and got 62, so the president's veto stood, showing the executive can check Congress.",
            "The Senate fell five votes short, so the veto held; the president checked Congress, and Congress's override power shows the check runs both ways.",
          ],
          no: [
            "\"It passed because most members voted yes.\" (Ignores the two-thirds rule.)",
            "\"It failed.\" (No explanation of why or of checks and balances.)",
          ],
          example: "The override failed. The House passed it with 290 of 430 votes, which is more than two-thirds, but the Senate needed 67 votes and got only 62. The result shows checks and balances: the president used the veto to check Congress, and Congress could have checked the president only with a supermajority in both houses.",
          notExample: "The Senate did not like the bill as much as the House." },
        { id: "t16-ca1c", skill: S, type: "fr", set: "t16-s3", part: "Concept application", sub: "C", topic: T,
          lead: "Use the scenario to answer parts A, B, and C.",
          prompt: "Explain one other way Congress could use its constitutional powers to respond to the veto.",
          earns: "Explains a specific congressional power (the power of the purse, adding the funding to a must-pass appropriations bill, passing a revised bill, or oversight) and how it could get money to farmers or pressure the president.",
          yes: [
            "Congress controls spending, so it could put the drought money into an appropriations bill the president needs to sign to keep the government funded.",
            "Congress could pass a cheaper bill with limits on payments to large companies, answering the president's objections so he signs it.",
          ],
          no: [
            "\"Congress could impeach the president for vetoing.\" (A veto is a lawful power, not grounds for removal.)",
            "\"Congress could ask the Supreme Court to overturn the veto.\" (Courts do not overturn lawful vetoes.)",
          ],
          example: "Congress holds the power of the purse under Article I. The committee chair could add the drought payments to a large spending bill that funds the government, making it costly for the president to veto, or Congress could pass a revised bill that caps payments to large companies to meet the president's objection.",
          notExample: "Congress could keep trying until it works." },
      ] },
  ],
};

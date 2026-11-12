// Topic 1.2 Quiz: Types of Democracy
// Sources: a practice passage stating the pluralist view, and a scenario about a school-funding ballot measure.

export const sets = {
  "t12-s1": {
    id: "t12-s1", name: "How policy gets made: a pluralist view", intro: "Use the passage below to answer the questions that follow.",
    sources: [
      { title: "Passage", blocks: [
        { p: "In the United States, public policy is rarely the work of one ruling group. It comes out of constant bargaining among organized interests. Farmers, labor unions, business associations, environmental groups, veterans, and many others form organizations, hire lobbyists, testify before committees, and file lawsuits. Because power is spread across Congress, the president, the courts, and fifty state governments, a group that loses in one place can try again in another. No single group wins every time. Policy reflects the compromises these groups reach with one another. A citizen who joins a group gains a voice in this process that the same citizen would lack acting alone." },
        { cite: "Practice passage written for this review. It summarizes the pluralist view of American democracy associated with political scientists such as Robert Dahl.", kind: "practice" },
      ] },
    ],
  },
  "t12-s2": {
    id: "t12-s2", name: "A ballot measure on school funding", intro: "Use the scenario below to answer parts A, B, and C.",
    sources: [
      { title: "Scenario", blocks: [
        { p: "A Western state allows citizens to propose laws by petition. After the legislature fails for three years to agree on how to pay for public schools, a coalition gathers enough signatures to place a measure on the November ballot. The measure would raise the tax on incomes above $500,000 and send the money to schools. A statewide teachers' union spends $9 million on ads for the measure, and an association of business owners spends $11 million against it. Some editorial writers complain that a complicated tax question should be settled by legislators who study the budget full time, not by voters reading a short ballot summary." },
        { cite: "Scenario written for this review.", kind: "scenario" },
      ] },
    ],
  },
};

const S = "u1", T = "1.2";

export default {
  forms: [
    { id: "t12", name: "Topic 1.2 Quiz: Types of Democracy", group: "Unit 1: Foundations of American Democracy",
      items: [
        { id: "t12-m01", skill: S, type: "mcq", set: "t12-s1", topic: T, difficulty: "easy",
          question: "The passage describes which model of democracy?",
          choices: ["Pluralist democracy", "Elite democracy", "Participatory democracy", "Direct democracy"],
          why: [
            "Correct. Pluralist democracy holds that policy results from competition and bargaining among many organized groups, none of which dominates.",
            "Elite democracy holds that a small, wealthy, or well-educated group holds most influence. The passage says no single group wins every time.",
            "Participatory democracy stresses broad, direct participation by individual citizens. The passage stresses organized groups.",
            "Direct democracy means citizens vote on laws themselves. The passage describes groups lobbying officials who make the laws.",
          ],
          answer: 0 },
        { id: "t12-m02", skill: S, type: "mcq", set: "t12-s1", topic: T, difficulty: "moderate",
          question: "A supporter of the elite model of democracy would most likely respond to the passage by arguing that",
          choices: [
            "groups backed by wealthy, educated people have more resources, so the contest is unequal",
            "so many groups compete that the government cannot pass any major law, so the system stalls",
            "citizens should vote on laws directly at the ballot box instead of working through organized groups",
            "interest groups are unconstitutional because the Constitution never mentions them by name",
          ],
          why: [
            "Correct. Elite theorists argue that a small, advantaged segment of society dominates policy, because money, education, and connections are not evenly spread among groups.",
            "This is the hyperpluralism criticism, that too many groups produce gridlock. It does not claim a small elite holds power.",
            "This is a participatory democracy argument for more direct citizen control, not an elite argument.",
            "Groups are protected by the First Amendment's rights to assemble and petition. No model of democracy calls them unconstitutional.",
          ],
          answer: 0 },
        { id: "t12-m03", skill: S, type: "mcq", set: "t12-s1", topic: T, difficulty: "moderate",
          question: "Which provision of the Constitution most directly protects the group activities the passage describes?",
          choices: [
            "The First Amendment's rights to assemble and to petition the government",
            "The Tenth Amendment's reservation of powers to the states or the people",
            "Article V's procedure for proposing and ratifying amendments",
            "Article VI's clause making federal law supreme over state law",
          ],
          why: [
            "Correct. The First Amendment protects the right of the people \"peaceably to assemble, and to petition the Government for a redress of grievances,\" which covers forming groups and lobbying.",
            "The Tenth Amendment reserves undelegated powers to the states or the people. It does not protect forming groups or lobbying.",
            "Article V governs changes to the Constitution. Lobbying and testifying are not part of that procedure.",
            "The Supremacy Clause settles conflicts between federal and state law. It does not protect group activity.",
          ],
          answer: 0 },
        { id: "t12-m04", skill: S, type: "mcq", topic: T, difficulty: "easy",
          question: "Voters in a state gather enough signatures to force a special election on whether to remove the governor before her term ends. This recall effort best illustrates",
          choices: ["participatory democracy", "pluralist democracy", "elite democracy", "the separation of powers"],
          why: [
            "Correct. A recall lets ordinary citizens act directly to remove an official, which reflects the participatory model's emphasis on broad citizen involvement.",
            "Pluralist democracy centers on competition among organized groups. A recall is decided by individual voters.",
            "Elite democracy limits decisions to a small, advantaged group. A recall widens participation instead.",
            "Separation of powers divides government among branches. Here voters, not another branch, act on the governor.",
          ],
          answer: 0 },
        { id: "t12-m05", skill: S, type: "mcq", topic: T, difficulty: "moderate",
          question: "In a city where turnout in local elections is low, a few bank presidents, developers, and foundation heads meet privately with the mayor and shape most major decisions. This pattern best fits which model of democracy?",
          choices: ["Elite democracy", "Pluralist democracy", "Participatory democracy", "Republicanism"],
          why: [
            "Correct. Elite democracy describes a small group with wealth and status holding outsized influence while most citizens take little part.",
            "Pluralism would show many competing groups, none dominant. Here a few leaders shape most decisions without real competition.",
            "Participatory democracy stresses broad citizen involvement. Low turnout and private meetings show the opposite.",
            "Republicanism means government by elected representatives. It does not describe who holds informal influence over those representatives.",
          ],
          answer: 0 },
        { id: "t12-m06", skill: S, type: "mcq", topic: T, difficulty: "moderate",
          question: "Anti-Federalists such as the author of Brutus No. 1 worried that representatives in a large national republic would be too few and too far from the people. Which change would they most likely have favored?",
          choices: [
            "A larger House of Representatives with smaller districts",
            "A president chosen by Congress instead of by electors",
            "Senators serving life terms to protect their independence",
            "Fewer elections, so representatives could focus on lawmaking",
          ],
          why: [
            "Correct. Brutus argued that a few distant representatives could not know or reflect the views of the people. More members with smaller districts would bring representatives closer to their voters.",
            "Choosing the president through Congress would move power further from the people, which Anti-Federalists opposed.",
            "Life terms for senators would weaken the people's control, the opposite of what Brutus wanted.",
            "Fewer elections would reduce accountability. Anti-Federalists favored frequent elections and close ties to voters.",
          ],
          answer: 0 },
        { id: "t12-m07", skill: S, type: "mcq", topic: T, difficulty: "difficult",
          question: "Which choice correctly pairs a model of democracy with a criticism often made of it?",
          choices: [
            "Participatory: voters may decide complex measures with too little information",
            "Elite: so many groups compete that government becomes unable to act",
            "Pluralist: ordinary voters hold too much direct power over each law",
            "Participatory: a small, wealthy class ends up controlling most important decisions",
          ],
          why: [
            "Correct. Critics of participatory democracy, including many framers, argue that voters may lack the time or knowledge to judge complicated questions put directly to them.",
            "Gridlock from too many competing groups is the hyperpluralism criticism of pluralist democracy, not a criticism of the elite model.",
            "Pluralism centers on organized groups, not direct votes by individual citizens, so this criticism does not fit it.",
            "Control by a small, wealthy class is what the elite model describes. It is not a criticism of participatory democracy.",
          ],
          answer: 0 },
        { id: "t12-m08", skill: S, type: "mcq", topic: T, difficulty: "moderate",
          question: "The framers created a representative republic rather than a direct democracy mainly because they believed that",
          choices: [
            "representatives would filter public passions and check majority faction",
            "ordinary citizens should vote on every national law in yearly town assemblies",
            "the states would refuse to join any government with elected officials",
            "a king with limited powers would protect liberty better than an assembly",
          ],
          why: [
            "Correct. Madison argued in Federalist No. 10 that representatives would \"refine and enlarge the public views,\" making it harder for a passionate majority to trample the rights of others.",
            "This describes direct democracy, which the framers rejected for a nation of millions spread over a large territory.",
            "The states ratified a Constitution full of elected offices. This was not the reason for choosing representation.",
            "The framers rejected monarchy. They created an elected president with limited, checked powers.",
          ],
          answer: 0 },
        { id: "t12-ca1a", skill: S, type: "fr", set: "t12-s2", part: "Concept application", sub: "A", topic: T,
          lead: "Use the scenario to answer parts A, B, and C.",
          prompt: "Describe the model of democracy shown by the citizens' use of the ballot measure.",
          earns: "Names participatory democracy and describes it as broad, direct participation by citizens in making policy, tied to the petition and statewide vote.",
          yes: [
            "Participatory democracy: citizens, not legislators, wrote the proposal, gathered signatures, and will vote on the law directly.",
            "Participatory democracy, in which ordinary people take a direct part in making policy, as when voters decide a tax law at the ballot box.",
          ],
          no: [
            "\"Participatory democracy.\" (Named but not described.)",
            "\"Pluralist democracy, because people signed the petition.\" (Signing and voting as individuals is participatory, not group bargaining.)",
          ],
          example: "The ballot measure shows participatory democracy, which stresses broad and direct citizen involvement in government. Citizens drafted the proposal, gathered signatures to place it on the ballot, and will decide it themselves by voting, rather than leaving the decision to the legislature.",
          notExample: "It shows democracy because people get to vote." },
        { id: "t12-ca1b", skill: S, type: "fr", set: "t12-s2", part: "Concept application", sub: "B", topic: T,
          lead: "Use the scenario to answer parts A, B, and C.",
          prompt: "Explain how the spending by the teachers' union and the business association reflects pluralist democracy.",
          earns: "Explains that pluralism sees policy shaped by competing organized groups, and connects that to the union and the business association campaigning on opposite sides.",
          yes: [
            "Pluralism holds that organized groups compete to influence policy; here two groups with opposite interests spend millions to sway the outcome.",
            "The union and the business group each represent many members and use their resources to compete, so the result will reflect which group persuades more voters.",
          ],
          no: [
            "\"The groups spent a lot of money.\" (Restates the scenario without explaining pluralism.)",
            "\"This is elite democracy because rich people pay for ads.\" (Does not address pluralism, which the prompt asks about.)",
          ],
          example: "Pluralist democracy holds that policy comes from competition among organized groups. The teachers' union and the business association each speak for many members with opposing interests, and each uses money and advertising to win voters to its side, so the measure's fate depends on group competition rather than on any single ruling class.",
          notExample: "Both groups care about schools and want to help." },
        { id: "t12-ca1c", skill: S, type: "fr", set: "t12-s2", part: "Concept application", sub: "C", topic: T,
          lead: "Use the scenario to answer parts A, B, and C.",
          prompt: "Explain how a supporter of elite democracy could argue that the legislature, not voters, should decide the school-funding question.",
          earns: "Explains the elite view that informed, specialized decision makers should handle complex policy, and applies it to the tax and budget question in the scenario.",
          yes: [
            "Elite democracy holds that a smaller, better-informed group should make complex decisions; legislators who study the budget full time can weigh a tax change better than voters reading a short summary.",
            "An elite theorist could say most voters lack the time and expertise to judge tax policy, so the decision belongs with lawmakers and their staffs.",
          ],
          no: [
            "\"Voters are not smart.\" (No link to the model or to the scenario's budget question.)",
            "\"The legislature should decide because it is in the Constitution.\" (No explanation of the elite model.)",
          ],
          example: "Elite democracy holds that complex decisions are best made by a smaller group with more knowledge. A supporter could argue that school funding affects the whole state budget, and legislators who study revenue and spending full time can weigh the tradeoffs, while many voters will judge the measure from a short summary and a flood of ads.",
          notExample: "The legislature already failed, so it should try again." },
      ] },
  ],
};

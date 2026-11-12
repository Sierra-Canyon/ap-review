// Topic 4.7 Quiz: Ideologies of Political Parties
// Sources: Pew Research Center survey of issue importance among Harris and Trump supporters (2024), and a scenario.
import { bars } from "../../plot.js";

// Pew Research Center, registered voters, August to September 2024: issue is "very important" to their vote
const iss = { labels: ["Economy", "Immigration", "Abortion"], harris: [68, 39, 67], trump: [93, 82, 35] };

export const sets = {
  "t47-s1": {
    id: "t47-s1", name: "What mattered to each candidate's supporters, 2024", intro: "Use the chart and table below to answer the questions that follow.", label: "Chart",
    sources: [
      { title: "Chart", blocks: [
        { svg: bars({ labels: iss.labels, series: [{ name: "Harris supporters", values: iss.harris }, { name: "Trump supporters", values: iss.trump }], y: [0, 100], step: 20, yname: "Percent saying very important", width: 560,
          alt: "Bar chart of registered voters saying each issue is very important to their vote in the 2024 presidential election. Economy: Harris supporters 68 percent, Trump supporters 93 percent. Immigration: Harris supporters 39, Trump supporters 82. Abortion: Harris supporters 67, Trump supporters 35." }),
          caption: "Percent of registered voters supporting Kamala Harris or Donald Trump who said each issue was very important to their vote in the 2024 presidential election" },
        { table: { head: ["Issue", "Harris supporters (%)", "Trump supporters (%)"], rows: iss.labels.map((l, i) => [l, String(iss.harris[i]), String(iss.trump[i])]) } },
        { cite: "Pew Research Center, \"Issues and the 2024 election,\" chapter 2 of \"In Tied Presidential Race, Harris and Trump Have Contrasting Strengths, Weaknesses,\" September 9, 2024 (registered voters on the American Trends Panel).", url: "https://www.pewresearch.org/politics/2024/09/09/issues-and-the-2024-election/", kind: "data" },
      ] },
    ],
  },
  "t47-s2": {
    id: "t47-s2", name: "Writing a state party platform", intro: "Use the scenario below to answer parts A, B, and C.",
    sources: [
      { title: "Scenario", blocks: [
        { p: "Delegates to a state party convention are writing their party's platform before a close race for governor. One group of delegates wants planks calling for higher taxes on large corporations, a state health insurance option, and a higher minimum wage. A second group wants to cut the state income tax, remove rules that limit how new businesses can open, and end state penalties for using marijuana. The party's likely nominee for governor asks the delegates to drop the most sweeping planks, because polls show that most of the state's voters call themselves moderate and many are not loyal to either party." },
        { cite: "Scenario written for this review.", kind: "scenario" },
      ] },
    ],
  },
};

const S = "u4", T = "4.7";

export default {
  forms: [
    { id: "t47", name: "Topic 4.7 Quiz: Ideologies of Political Parties", group: "Unit 4: American Political Ideologies and Beliefs",
      items: [
        { id: "t47-m01", skill: S, type: "mcq", set: "t47-s1", topic: T, difficulty: "easy",
          question: "Which statement is accurate according to the data?",
          choices: [
            "Harris supporters were likelier than Trump supporters to call abortion very important.",
            "Trump supporters were likelier than Harris supporters to call abortion very important.",
            "Harris supporters were likelier than Trump supporters to call immigration very important.",
            "The two groups were equally likely to call the economy very important to their vote.",
          ],
          why: [
            "Correct. Sixty-seven percent of Harris supporters called abortion very important, compared with 35 percent of Trump supporters.",
            "This reverses the abortion figures: 35 percent of Trump supporters and 67 percent of Harris supporters.",
            "This reverses the immigration figures: 82 percent of Trump supporters and 39 percent of Harris supporters.",
            "The economy was very important to 93 percent of Trump supporters and 68 percent of Harris supporters, a 25-point gap.",
          ],
          answer: 0 },
        { id: "t47-m02", skill: S, type: "mcq", set: "t47-s1", topic: T, difficulty: "moderate",
          question: "On which issue did the two groups of supporters differ the most?",
          choices: [
            "Immigration, with a gap of 43 points",
            "Abortion, with a gap of 32 points",
            "The economy, with a gap of 25 points",
            "Abortion, with a gap of 67 points",
          ],
          why: [
            "Correct. On immigration, 82 percent of Trump supporters and 39 percent of Harris supporters said it was very important, a 43-point gap, the largest shown.",
            "The abortion gap is 32 points (67 minus 35), smaller than the immigration gap.",
            "The economy gap is 25 points (93 minus 68), the smallest of the three.",
            "Sixty-seven percent is the share of Harris supporters, not the gap; the abortion gap is 32 points.",
          ],
          answer: 0 },
        { id: "t47-m03", skill: S, type: "mcq", set: "t47-s1", topic: T, difficulty: "difficult",
          question: "A Democratic candidate in a district that Trump won wants to persuade some Trump supporters. Based on the data, which approach makes the most sense?",
          choices: [
            "Stress an economic plan, since nearly all Trump supporters rated the economy very important",
            "Stress abortion rights, since most Trump supporters rated abortion very important",
            "Stress immigration, since Harris supporters gave it more weight than Trump supporters",
            "Stress the economy, since Trump supporters cared less about it than Harris supporters",
          ],
          why: [
            "Correct. Ninety-three percent of Trump supporters rated the economy very important, so an economic message reaches what they care about most among the issues shown.",
            "Only 35 percent of Trump supporters rated abortion very important, and most Trump voters favor more limits on abortion than Democrats do.",
            "Harris supporters gave immigration less weight (39 percent) than Trump supporters (82 percent).",
            "Trump supporters rated the economy higher (93 percent) than Harris supporters (68 percent).",
          ],
          answer: 0 },
        { id: "t47-m04", skill: S, type: "mcq", topic: T, difficulty: "easy",
          question: "Which economic position is most consistent with modern conservative ideology?",
          choices: [
            "Cutting rules on businesses to encourage growth",
            "Raising the federal minimum wage for all workers",
            "Expanding federal health insurance programs",
            "Raising income taxes on the highest earners",
          ],
          why: [
            "Correct. Conservatives generally favor free markets with less government regulation, arguing that fewer rules encourage investment and jobs.",
            "Raising the minimum wage is a liberal position that uses government to set labor standards.",
            "Expanding federal health programs is a liberal position that enlarges government's role.",
            "Higher taxes on top earners are a liberal position; conservatives usually favor lower taxes.",
          ],
          answer: 0 },
        { id: "t47-m05", skill: S, type: "mcq", topic: T, difficulty: "moderate",
          question: "In a closely divided general election, why do candidates of both major parties often move toward the center?",
          choices: [
            "To win moderate voters who do not strongly favor either party",
            "To satisfy the most ideological voters who decide party primaries",
            "Because federal law requires nominees to adopt a moderate platform",
            "Because third-party candidates usually win the most swing states",
          ],
          why: [
            "Correct. Many general election voters are moderates or independents, so candidates soften positions to win them while keeping their base.",
            "Primary voters tend to be more ideological, which pulls candidates away from the center, not toward it.",
            "No federal law sets the content of party platforms.",
            "Third-party candidates rarely win any states in presidential elections.",
          ],
          answer: 0 },
        { id: "t47-m06", skill: S, type: "mcq", topic: T, difficulty: "moderate",
          question: "Which pairing best describes positions found in recent Democratic and Republican Party platforms?",
          choices: [
            "Democrats: expand access to health insurance; Republicans: reduce regulation of business",
            "Democrats: reduce regulation of business; Republicans: expand access to health insurance",
            "Democrats: cut corporate income taxes; Republicans: strengthen labor unions' power",
            "Democrats: limit legal access to abortion; Republicans: expand federal gun regulations",
          ],
          why: [
            "Correct. Democratic platforms call for wider health coverage through programs such as the Affordable Care Act, and Republican platforms call for less federal regulation of business.",
            "This reverses the two parties' positions.",
            "Cutting corporate taxes is a Republican position, and strengthening unions is a Democratic one.",
            "Democrats support legal access to abortion, and Republicans oppose new federal gun regulations.",
          ],
          answer: 0 },
        { id: "t47-m07", skill: S, type: "mcq", topic: T, difficulty: "difficult",
          question: "A third party's platform calls for ending federal drug laws, cutting income taxes, and closing overseas military bases. Which comparison best describes how it fits with the two major parties?",
          choices: [
            "It shares Republican views on taxes and some Democratic views on drug laws.",
            "It shares Democratic views on taxes and Republican views on drug laws.",
            "It matches the Republican platform on all three of the issues listed.",
            "It matches the Democratic platform on all three of the issues listed.",
          ],
          why: [
            "Correct. The platform is libertarian: fiscally conservative like Republicans on taxes, and closer to many Democrats on easing drug laws, while wanting a smaller military role abroad than either major party.",
            "This reverses the two parties: Republicans favor tax cuts, and Democrats are more open to easing drug laws.",
            "Republicans favor tax cuts but have not called for ending federal drug laws or closing overseas bases.",
            "Democrats have not called for cutting income taxes broadly or closing overseas bases.",
          ],
          answer: 0 },
        { id: "t47-m08", skill: S, type: "mcq", topic: T, difficulty: "moderate",
          question: "Since the 1970s, the two major parties have become more ideologically consistent. Which development best reflects this change?",
          choices: [
            "Fewer conservative Democrats and liberal Republicans now serve in Congress.",
            "Party leaders, not voters, now choose each party's presidential nominee.",
            "Third parties now win a larger share of House seats than in the 1970s.",
            "The two parties now agree on more issues than they did in the 1970s.",
          ],
          why: [
            "Correct. As the parties sorted by ideology, conservative Southern Democrats and liberal Northeastern Republicans largely disappeared from Congress.",
            "Primaries, open to voters, have chosen nominees since the 1970s reforms, so this is backward.",
            "Third parties hold few or no House seats.",
            "The parties now agree on fewer issues, which is polarization.",
          ],
          answer: 0 },
        { id: "t47-ca1a", skill: S, type: "fr", set: "t47-s2", part: "Concept application", sub: "A", topic: T,
          lead: "Use the scenario to answer parts A, B, and C.",
          prompt: "Describe the ideology of the first group of delegates.",
          earns: "Identifies the first group as liberal and describes liberal ideology (government action to regulate the economy and provide social programs) tied to its planks.",
          yes: [
            "The first group is liberal. Liberals favor an active government that taxes large corporations, provides health insurance, and raises wages to reduce inequality.",
            "Liberal: it wants government to step into the economy through a state health option and a higher minimum wage, paid for in part by corporate taxes.",
          ],
          no: [
            "\"Liberal.\" (names the ideology without describing it)",
            "\"Conservative, because it wants taxes.\" (wrong ideology)",
          ],
          example: "The first group of delegates is liberal. Liberals believe government should play an active role in the economy to protect workers and reduce inequality, which is why this group wants higher taxes on large corporations, a state health insurance option, and a higher minimum wage.",
          notExample: "The first group has three planks for the platform." },
        { id: "t47-ca1b", skill: S, type: "fr", set: "t47-s2", part: "Concept application", sub: "B", topic: T,
          lead: "Use the scenario to answer parts A, B, and C.",
          prompt: "Explain how the second group's planks differ from both liberal and conservative ideology.",
          earns: "Explains that the second group is libertarian: it shares conservatives' support for lower taxes and fewer business rules but departs from social conservatives (and agrees with many liberals) on marijuana, wanting government out of both economic and personal choices.",
          yes: [
            "The second group wants less government everywhere: like conservatives it cuts taxes and business rules, but unlike social conservatives it would end penalties for marijuana, a libertarian mix.",
            "It is libertarian, so it rejects liberals' active economic government (by cutting taxes and rules) and rejects social conservatives' use of law to enforce morals (by ending marijuana penalties).",
          ],
          no: [
            "\"They are libertarian.\" (names the ideology without explaining how it differs)",
            "\"They want lower taxes like conservatives.\" (explains only one side of the difference)",
          ],
          example: "The second group is libertarian. It agrees with conservatives in wanting lower income taxes and fewer rules on new businesses, which sets it against liberals' more active government. But it breaks with social conservatives by ending penalties for using marijuana, because libertarians want government out of personal choices as well as the economy.",
          notExample: "The second group wants different things from the first group." },
        { id: "t47-ca1c", skill: S, type: "fr", set: "t47-s2", part: "Concept application", sub: "C", topic: T,
          lead: "Use the scenario to answer parts A, B, and C.",
          prompt: "Explain why the nominee wants the delegates to drop the most sweeping planks.",
          earns: "Explains that in a general election the nominee must win moderate and independent voters, so extreme planks could drive them away; moving toward the center improves the chance of winning.",
          yes: [
            "Most voters in the state are moderate and not loyal to a party, so sweeping planks could scare them off. A more centrist platform helps the nominee win the swing voters needed in a close race.",
            "Ideological planks please the party's activists but can be used by the other party to paint the nominee as extreme, costing moderate votes in the general election.",
          ],
          no: [
            "\"The nominee wants to win.\" (no link to moderate voters or the center)",
            "\"The nominee disagrees with the party.\" (does not explain the electoral reason)",
          ],
          example: "In a close general election, the winner usually needs moderate voters who are not loyal to either party, and polls show most of the state's voters are moderate. Sweeping planks would please activists but let opponents paint the nominee as extreme, so the nominee wants a platform closer to the center to win those swing voters.",
          notExample: "Platforms are written at conventions." },
      ] },
  ],
};

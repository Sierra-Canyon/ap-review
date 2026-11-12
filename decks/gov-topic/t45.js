// Topic 4.5 Quiz: Measuring Public Opinion
// Sources: Pew Research Center study of how national pollsters' methods changed (2023), Gallup's open-ended "most important problem" question, and a scenario.
import { bars } from "../../plot.js";

// Gallup, October polls: percent naming an economic problem as the most important problem facing the country
const mip = { labels: ["Oct. 2008", "Oct. 2010", "Oct. 2016", "Oct. 2020", "Oct. 2024", "Oct. 2026"], vals: [69, 69, 31, 14, 43, 38] };

export const sets = {
  "t45-s1": {
    id: "t45-s1", name: "How national pollsters changed their methods", intro: "Use the table below to answer the questions that follow.",
    sources: [
      { title: "Table", blocks: [
        { table: { head: ["Method used by national pollsters", "Earlier count", "Later count"], rows: [
          ["Online opt-in samples (anyone who signs up may take part)", "10 pollsters in 2012", "47 pollsters in 2020"],
          ["Probability-based panels (members recruited at random)", "7 pollsters in 2016", "23 pollsters in 2022"],
          ["Address-based samples (random mailing addresses, one-time surveys)", "1 pollster in 2016", "7 pollsters in 2022"],
          ["Text messaging", "1 pollster in 2020", "9 pollsters in 2022"],
        ] } },
        { p: "In 2022, 10 percent of the national pollsters in the study used live telephone interviews as their only method." },
        { cite: "Pew Research Center, Courtney Kennedy, Dana Popky, and Scott Keeter, \"How Public Polling Has Changed in the 21st Century,\" April 19, 2023 (study of 78 organizations that conducted national public polls, 2000 to 2022).", url: "https://www.pewresearch.org/methods/2023/04/19/how-public-polling-has-changed-in-the-21st-century/", kind: "data" },
      ] },
    ],
  },
  "t45-s2": {
    id: "t45-s2", name: "The most important problem, economic mentions", intro: "Use the chart and table below to answer the questions that follow.", label: "Chart",
    sources: [
      { title: "Chart", blocks: [
        { svg: bars({ labels: mip.labels, values: mip.vals, y: [0, 80], step: 20, yname: "Percent mentioning", width: 560,
          alt: "Bar chart of the percent of U.S. adults naming an economic problem as the most important problem facing the country, Gallup October polls: 2008, 69; 2010, 69; 2016, 31; 2020, 14; 2024, 43; 2026, 38." }),
          caption: "Percent of U.S. adults who named an economic problem when asked, in their own words, \"What do you think is the most important problem facing this country today?\" Gallup October polls, 2008 to 2026" },
        { table: { head: ["Poll", "Mentioned an economic problem (%)"], rows: mip.labels.map((l, i) => [l, String(mip.vals[i])]) } },
        { cite: "Gallup, \"Most Important Problem,\" Gallup Historical Trends, economic problems (net) mentions in the open-ended question, accessed November 2026.", url: "https://news.gallup.com/poll/1675/most-important-problem.aspx", kind: "data" },
      ] },
    ],
  },
  "t45-s3": {
    id: "t45-s3", name: "A first-time candidate's poll", intro: "Use the scenario below to answer parts A, B, and C.",
    sources: [
      { title: "Scenario", blocks: [
        { p: "Teresa Lin, a city council member, is thinking about running for an open seat in the state senate. Before she announces, her advisers hire a polling firm. The firm draws a random sample of 600 registered voters from the district's voter list and reaches them by phone and text. One draft question reads, \"Do you support Teresa Lin's plan to fix our crumbling roads, or do you oppose fixing them?\" The pollster rewrites it to ask whether voters support or oppose spending more state money on road repair. The finished poll shows that few voters know who Lin is, that most rank road repair as a top concern, and that voters over 50 favor her plan more than younger voters do." },
        { cite: "Scenario written for this review.", kind: "scenario" },
      ] },
    ],
  },
};

const S = "u4", T = "4.5";

export default {
  forms: [
    { id: "t45", name: "Topic 4.5 Quiz: Measuring Public Opinion", group: "Unit 4: American Political Ideologies and Beliefs",
      items: [
        { id: "t45-m01", skill: S, type: "mcq", set: "t45-s1", topic: T, difficulty: "moderate",
          question: "Which trend do the data show?",
          choices: [
            "More pollsters adopted online opt-in, random panel, and text messaging methods.",
            "Most national pollsters in 2022 used live phone calls as their only method.",
            "Fewer pollsters used probability-based panels in 2022 than in 2016.",
            "Fewer pollsters used online opt-in samples in 2020 than in 2012.",
          ],
          why: [
            "Correct. Pollsters using online opt-in samples rose from 10 to 47, probability panels from 7 to 23, and text messaging from 1 to 9.",
            "Only 10 percent used live phone calls as their only method in 2022, far from most.",
            "Pollsters using probability panels rose from 7 to 23, so this reverses the data.",
            "Pollsters using online opt-in samples rose from 10 to 47, so this reverses the data.",
          ],
          answer: 0 },
        { id: "t45-m02", skill: S, type: "mcq", set: "t45-s1", topic: T, difficulty: "moderate",
          question: "Why is a probability-based panel more likely than an online opt-in sample to produce a representative sample?",
          choices: [
            "Its members are chosen at random instead of choosing themselves.",
            "Its members are paid, so they always answer questions honestly.",
            "It surveys so many people that its margin of error falls to zero.",
            "It asks only closed-ended questions, which are easy to count.",
          ],
          why: [
            "Correct. In a probability panel, every person has a known chance of being picked, which is the basis of random sampling. Opt-in samples are self-selected, so the people who join may differ from the population.",
            "Payment does not guarantee honest answers and is not what makes a sample representative.",
            "No sample has a margin of error of zero unless it includes the whole population.",
            "Question format affects how answers are counted, not whether the sample represents the population.",
          ],
          answer: 0 },
        { id: "t45-m03", skill: S, type: "mcq", set: "t45-s2", topic: T, difficulty: "easy",
          question: "Gallup lets respondents name the country's most important problem in their own words. What kind of question is this?",
          choices: ["An open-ended question", "A closed-ended question", "A push poll question", "An exit poll question"],
          why: [
            "Correct. An open-ended question gives no list of answers, so respondents answer in their own words.",
            "A closed-ended question gives respondents a fixed list of choices, which this question does not.",
            "A push poll spreads negative claims under the cover of a survey; it is not a question format.",
            "An exit poll surveys voters as they leave polling places; this question is asked of all adults in regular polls.",
          ],
          answer: 0 },
        { id: "t45-m04", skill: S, type: "mcq", set: "t45-s2", topic: T, difficulty: "moderate",
          question: "Which conclusion is best supported by the data?",
          choices: [
            "Economic problems were named far less often in 2016 and 2020 than in 2008 and 2010.",
            "Most adults in October 2024 named an economic problem as the country's top problem.",
            "Mentions of economic problems rose in every October poll shown after the one in 2016.",
            "Mentions of economic problems in 2026 were higher than in any other October shown.",
          ],
          why: [
            "Correct. Economic mentions were 69 percent in both 2008 and 2010 but only 31 percent in 2016 and 14 percent in 2020.",
            "In October 2024, 43 percent named an economic problem, which is less than half.",
            "Mentions fell from 31 percent in 2016 to 14 percent in 2020 before rising again, so they did not rise in every poll.",
            "The 2026 figure, 38 percent, is lower than 2008, 2010, and 2024.",
          ],
          answer: 0 },
        { id: "t45-m05", skill: S, type: "mcq", topic: T, difficulty: "easy",
          question: "Pollsters interview people as they arrive at Iowa caucus sites, before the caucuses begin. What type of poll is this?",
          choices: ["An entrance poll", "An exit poll", "A tracking poll", "A benchmark poll"],
          why: [
            "Correct. An entrance poll questions participants as they arrive, which is the method used at caucuses, where people may change their choice during the meeting.",
            "An exit poll questions voters as they leave after voting.",
            "A tracking poll asks the same question repeatedly over the course of a campaign to follow changes.",
            "A benchmark poll measures a candidate's standing at the start of a campaign.",
          ],
          answer: 0 },
        { id: "t45-m06", skill: S, type: "mcq", topic: T, difficulty: "easy",
          question: "A caller claims to be taking a survey and asks, \"Would you still support Senator Ruiz if you learned she voted to cut benefits for veterans?\" The call is meant to spread doubts about Ruiz, not to measure opinion. What is this call?",
          choices: ["A push poll", "A tracking poll", "A straw poll", "A benchmark poll"],
          why: [
            "Correct. A push poll is a campaign tactic disguised as a survey; its loaded questions are meant to change opinions, not measure them.",
            "A tracking poll follows changes in opinion over a campaign with neutral, repeated questions.",
            "A straw poll is an informal, unscientific vote, such as a show of hands at a party gathering.",
            "A benchmark poll measures where a candidate stands at the start of a campaign.",
          ],
          answer: 0 },
        { id: "t45-m07", skill: S, type: "mcq", topic: T, difficulty: "moderate",
          question: "Suppose a poll of 1,000 randomly selected adults finds that 52 percent support a bill, with a margin of error of plus or minus 3 percentage points. Which conclusion is justified?",
          choices: [
            "Support among all adults is likely between 49 and 55 percent.",
            "Exactly 52 percent of all adults in the country support the bill.",
            "A majority of all adults in the country definitely supports the bill.",
            "The poll is useless because it reached under 1 percent of adults.",
          ],
          why: [
            "Correct. The margin of error gives a range: the true level of support is likely within 3 points of 52 percent, from 49 to 55 percent.",
            "A sample estimate is not exact; the margin of error shows the true value could differ.",
            "The range includes values below 50 percent, so a majority is not certain.",
            "A random sample of 1,000 can represent millions of people; the share of the population surveyed does not decide accuracy.",
          ],
          answer: 0 },
        { id: "t45-m08", skill: S, type: "mcq", topic: T, difficulty: "difficult",
          question: "A news website posts a question asking whether the governor should resign. About 40,000 readers answer, and 71 percent say yes. What is the most serious problem with using this result to describe the opinion of the state's adults?",
          choices: [
            "Readers chose to answer, so the sample is self-selected rather than random.",
            "The question should have been open-ended rather than asking for a yes or no.",
            "A sample of 40,000 people is too large to give a reliable margin of error.",
            "The poll should have been taken on Election Day as part of an exit poll.",
          ],
          why: [
            "Correct. People who visit the site and choose to answer may differ sharply from the state's adults, and a large self-selected sample does not fix that bias.",
            "A yes or no question can be fair if worded neutrally; the main problem is who answered.",
            "A larger sample lowers sampling error; the problem is that the sample was not random, so a margin of error does not apply.",
            "Exit polls measure votes cast in an election, which is not what the question is about.",
          ],
          answer: 0 },
        { id: "t45-ca1a", skill: S, type: "fr", set: "t45-s3", part: "Concept application", sub: "A", topic: T,
          lead: "Use the scenario to answer parts A, B, and C.",
          prompt: "Describe the type of poll Lin's advisers commissioned.",
          earns: "Describes a benchmark poll: a poll taken at the start of a campaign (here before she announces) to measure a candidate's name recognition, standing, and voters' concerns.",
          yes: [
            "It is a benchmark poll, taken before the campaign begins to learn where Lin starts out: how well voters know her and which issues they care about.",
            "A benchmark poll measures a candidate's starting point. This poll found that few voters know Lin and that road repair is a top concern.",
          ],
          no: [
            "\"A tracking poll.\" (a tracking poll repeats questions during the campaign to follow changes)",
            "\"A poll about roads.\" (does not describe the type of poll)",
          ],
          example: "The advisers commissioned a benchmark poll, which is taken at the start of a campaign to measure a candidate's starting position. Before Lin announced, the poll measured how many voters knew her and which issues mattered most to them.",
          notExample: "The poll had 600 people in it." },
        { id: "t45-ca1b", skill: S, type: "fr", set: "t45-s3", part: "Concept application", sub: "B", topic: T,
          lead: "Use the scenario to answer parts A, B, and C.",
          prompt: "Explain why the pollster rewrote the draft question about roads.",
          earns: "Explains that the draft wording was loaded or biased (it attaches Lin's name to a popular goal and frames opposition as opposing road repair) and would push respondents toward support, making results less accurate.",
          yes: [
            "The draft question was biased: it calls the roads crumbling and makes opposing Lin's plan sound like opposing any repair, so more people would say they support it than really do. Neutral wording gives an accurate measure.",
            "Loaded wording pushes respondents toward one answer. The rewritten question asks about spending without praising Lin, so the results reflect voters' real views.",
          ],
          no: [
            "\"The first question was too long.\" (length is not the problem)",
            "\"To make Lin look better.\" (reverses the reason; the draft would already flatter her)",
          ],
          example: "The draft question was loaded. It described the roads as crumbling and made opposing Lin's plan sound the same as opposing road repair, so many respondents would say they support it even if they had doubts. Rewording it neutrally lets the poll measure voters' true views, which the campaign needs to plan accurately.",
          notExample: "Polls have many questions, and some get changed." },
        { id: "t45-ca1c", skill: S, type: "fr", set: "t45-s3", part: "Concept application", sub: "C", topic: T,
          lead: "Use the scenario to answer parts A, B, and C.",
          prompt: "Explain how Lin's campaign could use the poll results to shape its strategy.",
          earns: "Explains a strategy drawn from a specific result (low name recognition, road repair as a top concern, or the age gap) and how it would help her win.",
          yes: [
            "Because few voters know her, the campaign should spend early money on ads and events that introduce Lin, building name recognition before opponents define her.",
            "Since road repair is a top concern, Lin should make her road plan the center of her message, and since younger voters are less supportive, she could tailor outreach to them.",
          ],
          no: [
            "\"She should run a good campaign.\" (no link to a poll result)",
            "\"She should drop out because the poll was bad.\" (does not use the results to shape strategy)",
          ],
          example: "The poll shows that few voters know who Lin is, so her campaign should spend its early money on ads, mailers, and community events that introduce her. Because most voters rank road repair as a top concern, those ads should lead with her road plan, and the campaign could add targeted messages for younger voters, who are less supportive.",
          notExample: "Polls help campaigns." },
      ] },
  ],
};

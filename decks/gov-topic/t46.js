// Topic 4.6 Quiz: Evaluating Public Opinion Data
// Sources: Gallup approval of Congress and of respondents' own House member (1990 to 2026), Gallup's federal power trend (2002 to 2026), and a scenario.
import { bars } from "../../plot.js";

// Gallup polls that asked both questions on the same dates
const cong = {
  labels: ["Oct. 1990", "Oct. 1991", "Oct. 2013", "Sept. 2014", "Sept. 2026"],
  dates: ["Oct. 11 to 14, 1990", "Oct. 10 to 13, 1991", "Oct. 3 to 6, 2013", "Sept. 4 to 7, 2014", "Sept. 1 to 17, 2026"],
  congress: [28, 40, 11, 14, 16], own: [55, 64, 44, 57, 52],
};
// Gallup, September polls: the federal government has too much power
const power = {
  years: ["2002", "2004", "2006", "2008", "2010", "2012", "2014", "2016", "2018", "2022", "2024", "2025", "2026"],
  vals: [39, 42, 52, 52, 59, 51, 59, 59, 53, 54, 51, 62, 63],
};

export const sets = {
  "t46-s1": {
    id: "t46-s1", name: "Congress and one's own representative", intro: "Use the chart and table below to answer the questions that follow.", label: "Chart",
    sources: [
      { title: "Chart", blocks: [
        { svg: bars({ labels: cong.labels, series: [{ name: "Approve of Congress", values: cong.congress }, { name: "Approve of own House member", values: cong.own }], y: [0, 80], step: 20, yname: "Percent approving", width: 600,
          alt: "Bar chart of Gallup approval ratings taken on the same dates. October 1990: Congress 28 percent, own representative 55 percent. October 1991: Congress 40, own representative 64. October 2013: Congress 11, own representative 44. September 2014: Congress 14, own representative 57. September 2026: Congress 16, own representative 52." }),
          caption: "Percent of U.S. adults approving of the way Congress is handling its job and of the way the representative from their own congressional district is handling his or her job, Gallup polls that asked both questions on the same dates" },
        { table: { head: ["Poll dates", "Approve of Congress (%)", "Approve of own representative (%)"], rows: cong.dates.map((d, i) => [d, String(cong.congress[i]), String(cong.own[i])]) } },
        { cite: "Gallup, \"Congress and the Public,\" Gallup Historical Trends, Congress job approval table and approval of own member table, accessed November 2026.", url: "https://news.gallup.com/poll/1600/congress-public.aspx", kind: "data" },
      ] },
    ],
  },
  "t46-s2": {
    id: "t46-s2", name: "Does the federal government have too much power?", intro: "Use the chart and table below to answer the questions that follow.", label: "Chart",
    sources: [
      { title: "Chart", blocks: [
        { svg: bars({ labels: power.years, values: power.vals, y: [0, 80], step: 20, yname: "Percent saying too much power", width: 640,
          alt: "Bar chart of the percent of U.S. adults saying the federal government has too much power, Gallup September polls: 2002, 39; 2004, 42; 2006, 52; 2008, 52; 2010, 59; 2012, 51; 2014, 59; 2016, 59; 2018, 53; 2022, 54; 2024, 51; 2025, 62; 2026, 63." }),
          caption: "Percent of U.S. adults saying the federal government today has too much power, Gallup September polls, 2002 to 2026 (no poll is shown for 2020)" },
        { table: { head: ["Year", "Too much power (%)"], rows: power.years.map((y, i) => [y, String(power.vals[i])]) } },
        { cite: "Gallup, \"Government,\" Gallup Historical Trends, amount of government power table (too much, about the right amount, too little), September polls, accessed November 2026.", url: "https://news.gallup.com/poll/27286/government.aspx", kind: "data" },
      ] },
    ],
  },
  "t46-s3": {
    id: "t46-s3", name: "Two polls on a gas tax", intro: "Use the scenario below to answer parts A, B, and C.",
    sources: [
      { title: "Scenario", blocks: [
        { p: "A state legislature passes a bill raising the gas tax by ten cents a gallon to pay for bridge repairs, and the governor has ten days to sign or veto it. Two polls are released the same week. A popular radio host invites listeners to vote on his website, and most of the thousands who respond oppose \"the governor's gas tax hike.\" A university polling center contacts a random sample of adults across the state and asks whether they support or oppose \"raising the state gas tax by ten cents a gallon to pay for bridge repairs\"; a narrow majority supports the bill. The governor's advisers must decide which poll to rely on." },
        { cite: "Scenario written for this review.", kind: "scenario" },
      ] },
    ],
  },
};

const S = "u4", T = "4.6";

export default {
  forms: [
    { id: "t46", name: "Topic 4.6 Quiz: Evaluating Public Opinion Data", group: "Unit 4: American Political Ideologies and Beliefs",
      items: [
        { id: "t46-m01", skill: S, type: "mcq", set: "t46-s1", topic: T, difficulty: "easy",
          question: "Which statement is accurate according to the data?",
          choices: [
            "In every poll shown, more adults approved of their own member than of Congress.",
            "Approval of Congress was higher in the 2026 poll than in the 1991 poll.",
            "Approval of one's own member fell below 40 percent in the 2013 poll.",
            "The gap between the two ratings was smallest in the 2014 poll.",
          ],
          why: [
            "Correct. Approval of one's own representative was higher in all five polls, from 44 to 64 percent, while approval of Congress ranged from 11 to 40 percent.",
            "Approval of Congress was 16 percent in 2026 and 40 percent in 1991.",
            "Approval of one's own member was 44 percent in 2013, not below 40.",
            "The gap in 2014 was 43 points, the largest; the smallest was 24 points in 1991.",
          ],
          answer: 0 },
        { id: "t46-m02", skill: S, type: "mcq", set: "t46-s1", topic: T, difficulty: "moderate",
          question: "Which implication of the data is most reasonable?",
          choices: [
            "Members can win reelection even when Congress as a whole is unpopular.",
            "Members should ignore polls about Congress because they are unscientific.",
            "Most voters plan to defeat their own representative at the next election.",
            "Approval of Congress depends mainly on which party holds the presidency.",
          ],
          why: [
            "Correct. Voters judge their own member far more kindly than Congress as an institution, which helps explain why most incumbents win even when Congress's approval is very low.",
            "Gallup uses random samples, and nothing in the data suggests the polls are unscientific.",
            "Majorities approved of their own member in four of five polls, which points the other way.",
            "The data say nothing about which party held the presidency.",
          ],
          answer: 0 },
        { id: "t46-m03", skill: S, type: "mcq", set: "t46-s1", topic: T, difficulty: "difficult",
          question: "A student concludes from the chart that Americans trusted Congress less in 2026 than in 1990. What is the strongest objection to this conclusion?",
          choices: [
            "The polls measured approval of Congress's job, not trust in Congress.",
            "Approval of Congress was actually higher in 2026 than it was in 1990.",
            "The polls had different sample sizes, so no comparison is possible.",
            "Approval of one's own member rose between the 1990 and 2026 polls.",
          ],
          why: [
            "Correct. Job approval and trust are different questions. The chart shows lower approval in 2026 (16 percent) than in 1990 (28 percent), but it does not measure trust.",
            "Approval of Congress was lower in 2026 (16 percent) than in 1990 (28 percent).",
            "Polls with different random samples can still be compared within their margins of error; sample size alone does not block a comparison.",
            "Approval of one's own member fell slightly, from 55 to 52 percent, and that rating is not about Congress as a whole anyway.",
          ],
          answer: 0 },
        { id: "t46-m04", skill: S, type: "mcq", set: "t46-s2", topic: T, difficulty: "moderate",
          question: "Which statement is accurate according to the data?",
          choices: [
            "The share saying \"too much power\" was higher in 2026 than in any other year shown.",
            "A majority said the federal government had too much power in every year shown.",
            "The share saying \"too much power\" rose from each year shown to the next one.",
            "The share saying \"too much power\" fell between the 2024 and 2025 polls.",
          ],
          why: [
            "Correct. The 2026 figure, 63 percent, is the highest shown.",
            "In 2002 (39 percent) and 2004 (42 percent), less than half said the government had too much power.",
            "The share fell in several years, such as from 59 to 51 percent between 2010 and 2012.",
            "The share rose from 51 percent in 2024 to 62 percent in 2025.",
          ],
          answer: 0 },
        { id: "t46-m05", skill: S, type: "mcq", set: "t46-s2", topic: T, difficulty: "difficult",
          question: "A researcher suspects that views of federal power depend on which party holds the presidency. Which additional data would best test this idea?",
          choices: [
            "The same question's results broken down by each respondent's party",
            "A larger national sample for the poll that Gallup conducted in 2026",
            "The share of eligible adults who voted in each presidential election",
            "An open-ended version of the same question asked of adults in 2026",
          ],
          why: [
            "Correct. If Republicans say \"too much power\" more under Democratic presidents and Democrats more under Republican ones, results by party would show it.",
            "A larger sample in one year makes that estimate more precise but cannot show a link to the party in power.",
            "Turnout data do not measure views about federal power.",
            "Changing the question format in one year would not show how views shift with the party in power.",
          ],
          answer: 0 },
        { id: "t46-m06", skill: S, type: "mcq", topic: T, difficulty: "easy",
          question: "What does a poll's margin of error measure?",
          choices: [
            "How far results may differ by chance from the whole population's views",
            "How many people contacted by the pollster refused to answer the questions",
            "How much the wording of the questions pushed people toward one answer",
            "How many of the respondents gave false answers to the poll's questions",
          ],
          why: [
            "Correct. The margin of error measures sampling error: how much a result from a random sample may differ by chance from the true value in the population.",
            "Refusals affect response rates and can bias a poll, but the margin of error does not measure them.",
            "Biased wording is a separate source of error that the margin of error does not capture.",
            "False answers are a measurement problem the margin of error does not include.",
          ],
          answer: 0 },
        { id: "t46-m07", skill: S, type: "mcq", topic: T, difficulty: "moderate",
          question: "Surveys usually find that more people say they voted in the last election than actually did. Which problem in polling does this describe?",
          choices: [
            "Respondents give answers they think sound better than the truth.",
            "Questions offer respondents too many answer choices to pick from.",
            "Samples include too many people to analyze each answer carefully.",
            "Pollsters choose respondents at random rather than by their views.",
          ],
          why: [
            "Correct. This is social desirability bias: voting is seen as a civic duty, so some nonvoters say they voted.",
            "The number of answer choices does not explain why people claim to have voted.",
            "Large samples reduce sampling error; they do not cause people to overstate voting.",
            "Random selection is what makes a poll scientific, not a source of this problem.",
          ],
          answer: 0 },
        { id: "t46-m08", skill: S, type: "mcq", topic: T, difficulty: "easy",
          question: "In a state where many people vote by mail, why might an exit poll alone misrepresent the electorate?",
          choices: [
            "It interviews only people who vote in person at polling places.",
            "It asks voters who they plan to support in some future election.",
            "It interviews people before they enter the polling place to vote.",
            "It reports its results without giving any margin of error at all.",
          ],
          why: [
            "Correct. A traditional exit poll questions voters as they leave polling places, so it misses mail voters, who may differ from in-person voters. Pollsters now add separate surveys of early and mail voters.",
            "Exit polls ask how people just voted, not how they plan to vote.",
            "Interviewing people as they arrive describes an entrance poll.",
            "Exit poll results are reported with margins of error, and that is not the problem described.",
          ],
          answer: 0 },
        { id: "t46-ca1a", skill: S, type: "fr", set: "t46-s3", part: "Concept application", sub: "A", topic: T,
          lead: "Use the scenario to answer parts A, B, and C.",
          prompt: "Describe one reason the university poll is more reliable than the radio host's poll.",
          earns: "Describes a feature of scientific polling that the university poll has and the radio poll lacks: a random sample of the state's adults (rather than self-selected listeners), or neutral wording.",
          yes: [
            "The university poll used a random sample of adults across the state, so its respondents represent the state. The radio poll included only listeners who chose to vote, a self-selected group.",
            "The university poll asked a neutral question describing the tax and its purpose, while the radio poll used the loaded phrase \"the governor's gas tax hike.\"",
          ],
          no: [
            "\"The university poll is more scientific.\" (does not describe what makes it so)",
            "\"The radio poll had more people.\" (size does not make a self-selected poll reliable)",
          ],
          example: "The university poll drew a random sample of adults from across the state, so every adult had a chance to be included and the results represent the state. The radio poll counted only listeners who chose to visit the website, a self-selected group that may hold very different views from most residents.",
          notExample: "The university is a good school, so its poll is better." },
        { id: "t46-ca1b", skill: S, type: "fr", set: "t46-s3", part: "Concept application", sub: "B", topic: T,
          lead: "Use the scenario to answer parts A, B, and C.",
          prompt: "Explain how the wording of the radio host's question could have affected its results.",
          earns: "Explains that loaded wording (\"the governor's gas tax hike\") frames the bill negatively or ties it to a politician and omits its purpose, pushing respondents toward opposition.",
          yes: [
            "Calling the bill \"the governor's gas tax hike\" uses a negative word and ties the bill to a politician, while leaving out that the money pays for bridges, so more people would oppose it.",
            "The question names no benefit and uses \"hike,\" a word that suggests a burden, so it pushes respondents to say they oppose the tax.",
          ],
          no: [
            "\"The question was biased.\" (says so without explaining how)",
            "\"The question was too short.\" (length is not the problem)",
          ],
          example: "The radio host's question calls the bill \"the governor's gas tax hike,\" a phrase that sounds negative and links the bill to a politician some listeners may dislike. It leaves out that the money would repair bridges. That loaded wording pushes respondents toward opposing the bill, so the result overstates opposition compared with a neutral question.",
          notExample: "People do not like taxes." },
        { id: "t46-ca1c", skill: S, type: "fr", set: "t46-s3", part: "Concept application", sub: "C", topic: T,
          lead: "Use the scenario to answer parts A, B, and C.",
          prompt: "Explain how the governor could use the university poll in deciding whether to sign the bill.",
          earns: "Explains how the reliable poll's finding (narrow majority support) could inform the decision, such as signing it with evidence of public support or acting as a delegate, or weighing the narrow margin.",
          yes: [
            "Because a reliable poll shows a narrow majority supports the tax for bridge repairs, the governor could sign the bill and cite the poll to show the public backs it.",
            "The poll shows support is narrow, so the governor could sign the bill but launch a campaign explaining how the money will fix bridges, to hold that majority before the next election.",
          ],
          no: [
            "\"The governor should listen to the people.\" (no use of the poll's result)",
            "\"The governor should veto because most radio listeners oppose it.\" (relies on the unreliable poll)",
          ],
          example: "The university poll used a random sample and neutral wording, so it is the better guide to public opinion. Because it shows a narrow majority supporting the tax for bridge repairs, the governor could sign the bill and point to the poll as evidence that most residents back the plan, ignoring the self-selected radio poll.",
          notExample: "Governors can sign or veto bills." },
      ] },
  ],
};

// AP Gov topic quiz 5.5: third parties: public demand versus votes, how winner-take-all rules treat them, and co-optation.
import { bars, lines } from "../../plot.js";

// Gallup, "Americans See Need for Third Party, but Offer Soft Support," Oct. 20, 2025: % saying a third major party is needed.
const third = {
  years: ["2003", "2008", "2013", "2018", "2023", "2025"],
  dates: ["Oct. 2003", "Sept. 2008", "Oct. 2013", "Sept. 2018", "Sept. 2023", "Sept. 2025"],
  all: [40, 47, 60, 57, 63, 62],
  rep: [22, 40, 52, 38, 58, 43],
  ind: [56, 63, 71, 72, 75, 74],
  dem: [38, 38, 49, 54, 46, 58],
};

// The American Presidency Project, election results: third-party and independent candidates' shares of the vote.
const cand = {
  labels: ["La Follette 1924", "Thurmond 1948", "Wallace 1968", "Anderson 1980", "Perot 1992"],
  pop: [16.6, 2.4, 13.5, 6.6, 18.9],
  ev: [13, 39, 46, 0, 0],
  total: [531, 531, 538, 538, 538],
  votes: ["4,827,184", "1,169,114", "9,906,473", "5,720,060", "19,741,657"],
  party: ["Progressive", "States' Rights", "American Independent", "Independent", "Independent"],
};
cand.evpct = cand.ev.map((e, i) => Math.round((1000 * e) / cand.total[i]) / 10);

const M = (n, difficulty, question, choices, why, set) => ({ id: "t55-m0" + n, skill: "u5", type: "mcq", topic: "5.5", ...(set ? { set: "t55-" + set } : {}), difficulty, question, choices, why, answer: 0 });

export const sets = {
  "t55-s1": {
    id: "t55-s1", name: "Is a third major party needed?", intro: "Use the graph, table, and information below to answer the questions that follow.", label: "Chart",
    sources: [{ title: "Chart", blocks: [
      { svg: lines({ labels: third.years, series: [{ name: "Independents", values: third.ind }, { name: "Democrats", values: third.dem, dy: -4 }, { name: "Republicans", values: third.rep, dy: 8 }], y: [0, 100], step: 20, yname: "Percent", width: 560, right: 110,
        alt: "Line graph of the percent of U.S. adults who say a third major party is needed, by party, in six polls. Independents: " + third.ind.join(", ") + ". Democrats: " + third.dem.join(", ") + ". Republicans: " + third.rep.join(", ") + ". Years: " + third.years.join(", ") + "." }),
        caption: "Percent who say the Republican and Democratic parties do such a poor job that a third major party is needed, by party identification, selected Gallup polls, 2003 to 2025 (the years are not evenly spaced)" },
      { table: { head: ["Poll", "All adults", "Republicans", "Independents", "Democrats"], rows: third.dates.map((d, i) => [d, String(third.all[i]), String(third.rep[i]), String(third.ind[i]), String(third.dem[i])]) } },
      { p: "In September 2025, 55 percent of U.S. adults said they were very or somewhat likely to vote for a third-party or independent candidate. Asked what they would do if their preferred third-party candidate seemed to have little chance of winning, 54 percent said they would switch to the Republican or Democratic candidate, and 44 percent said they would still vote for the third-party candidate." },
      { cite: "Gallup, Jeffrey M. Jones, \"Americans See Need for Third Party, but Offer Soft Support,\" October 20, 2025 (telephone poll of 1,000 adults, Sept. 2 to 16, 2025, and Gallup Panel web survey of 2,136 adults, Sept. 2 to 15, 2025).", url: "https://news.gallup.com/poll/696521/americans-need-third-party-offer-soft-support.aspx", kind: "data" },
    ] }],
  },
  "t55-s2": {
    id: "t55-s2", name: "Five third-party candidates: popular and electoral votes", intro: "Use the graph and table below to answer the questions that follow.", label: "Chart",
    sources: [{ title: "Chart", blocks: [
      { svg: bars({ labels: cand.labels, series: [{ name: "Share of popular vote", values: cand.pop }, { name: "Share of electoral votes", values: cand.evpct }], y: [0, 20], step: 5, yname: "Percent", width: 680, fmt: (v) => v.toFixed(1),
        alt: "Grouped bar chart of five third-party or independent presidential candidates' shares of the national popular vote and of all electoral votes: " + cand.labels.map((l, i) => `${l}, ${cand.pop[i].toFixed(1)} and ${cand.evpct[i].toFixed(1)} percent`).join("; ") + "." }),
        caption: "Share of the national popular vote and share of all electoral votes won by five third-party or independent candidates for president. There were 531 electoral votes in 1924 and 1948 and 538 from 1964 on." },
      { table: { head: ["Candidate and year", "Party", "Popular votes", "Share of popular vote (%)", "Electoral votes"], rows: cand.labels.map((l, i) => [l, cand.party[i], cand.votes[i], cand.pop[i].toFixed(1), String(cand.ev[i])]) } },
      { cite: "The American Presidency Project, University of California, Santa Barbara, presidential election results for 1924, 1948, 1968, 1980, and 1992. Shares of electoral votes calculated for this review.", url: "https://www.presidency.ucsb.edu/statistics/elections/1968", kind: "data" },
    ] }],
  },
  "t55-s3": {
    id: "t55-s3", name: "The Progressive Party platform of 1912", intro: "Use the passage below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "In particular, the party declares for direct primaries for the nomination of State and National officers, for nation-wide preferential primaries for candidates for the presidency; for the direct election of United States Senators by the people; and we urge on the States the policy of the short ballot, with responsibility to the people secured by the initiative, referendum and recall. ... The Progressive party, believing that no people can justly claim to be a true democracy which denies political rights on account of sex, pledges itself to the task of securing equal suffrage to men and women alike." },
      { cite: "Progressive Party Platform of 1912, adopted at the party's national convention in Chicago, August 1912. The American Presidency Project.", url: "https://www.presidency.ucsb.edu/documents/progressive-party-platform-1912", kind: "primary" },
    ] }],
  },
  "t55-s4": {
    id: "t55-s4", name: "A new party in a state legislature race", intro: "Use the scenario to answer parts A, B, and C.",
    sources: [{ title: "Scenario", blocks: [
      { p: "The Commonwealth Party, a new party focused on cutting the cost of housing, ran candidates in all 60 districts for the state house of representatives of Lakeland. Each district elects one member, and the candidate with the most votes wins. The party's candidates won 14 percent of the votes cast statewide but no seats. Polls before the election showed that about 25 percent of voters agreed with the party's housing plan, but many said they did not want to waste their vote. After the election, the leaders of the larger of the two major parties announced a housing plan of their own that included two of the Commonwealth Party's main proposals." },
      { cite: "Scenario written for this review.", kind: "scenario" },
    ] }],
  },
};

export default {
  forms: [
    { id: "t55", name: "Topic 5.5 Quiz: Third-Party Politics", group: "Unit 5: Political Participation",
      items: [
        M(1, "moderate", "Which statement is supported by the graph and table?",
          ["Independents were the group most likely to say a third party is needed in every poll.", "Republicans' support for a third party rose in every poll shown after the one before it.", "Democrats were more likely than Republicans to say a third party is needed in every poll.", "A majority of all adults said a third major party is needed in every poll shown."],
          ["Correct. Independents led in every poll, from 56 percent in 2003 to 74 percent in 2025.",
           "Republican support fell from 52 percent in 2013 to 38 percent in 2018 and from 58 in 2023 to 43 in 2025.",
           "Republicans were higher than Democrats in 2008 (40 to 38), 2013 (52 to 49), and 2023 (58 to 46).",
           "Fewer than half said so in 2003 (40 percent) and 2008 (47 percent)."], "s1"),
        M(2, "easy", "According to the information below the table, what would most respondents do if their preferred third-party candidate seemed likely to lose?",
          ["Switch to a major-party candidate", "Still vote for the third-party candidate", "Stay home and not vote at all", "Write in a different candidate"],
          ["Correct. 54 percent said they would switch to the Republican or Democratic candidate.",
           "44 percent said they would stay with the third-party candidate, fewer than the 54 percent who would switch.",
           "The poll offered no such option, and the information reports no share who would stay home.",
           "Write-in votes are not mentioned in the information."], "s1"),
        M(3, "difficult", "In 2025, 62 percent said a third major party is needed, yet most potential third-party voters said they would abandon a candidate who seemed likely to lose. Which feature of U.S. elections best explains this gap?",
          ["Winner-take-all rules lead voters to see a vote for a likely loser as wasted.", "Federal law bars third-party candidates from all presidential debates.", "Third-party candidates may not receive any federal campaign funds.", "Most states require third parties to choose nominees in closed primaries."],
          ["Correct. In single-member districts and in the Electoral College, the plurality winner takes everything, so a third-party vote rarely changes the result. Many voters who like a third party switch to the major-party candidate they prefer.",
           "No federal law bars third parties from debates. The private Commission on Presidential Debates requires 15 percent support in national polls.",
           "A third-party presidential nominee who wins at least 5 percent of the vote may qualify for some public funds after the election, so this is false.",
           "States do not require this. Many third parties choose nominees at conventions."], "s1"),
        M(4, "easy", "Which statement is supported by the graph and table?",
          ["Perot won the largest share of the popular vote but no electoral votes.", "Thurmond won a smaller share of electoral votes than of the popular vote.", "La Follette won more electoral votes than any other candidate shown.", "Anderson won a larger share of the popular vote than Wallace did."],
          ["Correct. Perot won 18.9 percent of the popular vote, the most of the five, and 0 electoral votes.",
           "Thurmond won 2.4 percent of the popular vote and 7.3 percent of electoral votes, a larger share.",
           "La Follette won 13 electoral votes, fewer than Thurmond (39) and Wallace (46).",
           "Anderson won 6.6 percent, less than Wallace's 13.5 percent."], "s2"),
        M(5, "moderate", "Which best explains why Thurmond and Wallace won electoral votes while Anderson and Perot won none?",
          ["Their support was concentrated in a few states, where they won pluralities.", "They ran before most states gave all their electors to the statewide winner.", "They received federal matching funds that Anderson and Perot did not get.", "They were nominated at the national conventions of the two major parties."],
          ["Correct. Because states award electors winner-take-all, a candidate must finish first in a state to win its electors. Thurmond and Wallace carried Deep South states, while Anderson's and Perot's support was spread thinly across the country.",
           "Winner-take-all allocation was the rule in nearly every state long before 1948.",
           "Federal matching funds did not exist in 1948, and funding does not explain winning states.",
           "Both ran as candidates of new parties after breaking with the Democrats."], "s2"),
        M(6, "moderate", "Which later change shows the nation adopting a demand in the passage?",
          ["The Seventeenth Amendment provided for the direct election of senators.", "The Twenty-second Amendment limited presidents to two elected terms.", "The Twenty-fourth Amendment banned poll taxes in federal elections.", "The Twenty-sixth Amendment lowered the voting age to 18 in all elections."],
          ["Correct. The platform calls for \"the direct election of United States Senators by the people,\" which the Seventeenth Amendment provided in 1913. The Nineteenth Amendment (1920) later met its call for equal suffrage.",
           "The two-term limit (1951) is not a demand in the passage.",
           "The passage does not mention poll taxes.",
           "The passage does not mention the voting age."], "s3"),
        M(7, "moderate", "What happened to many of the Progressive Party's proposals best illustrates which pattern?",
          ["Major parties adopt popular third-party ideas, which weakens the third party.", "Third parties usually replace one of the major parties within a decade of forming.", "Third parties succeed mainly by winning seats under proportional representation.", "Third-party ideas rarely become law because voters reject them at the polls."],
          ["Correct. Major parties and state lawmakers adopted primaries, direct election of senators, and women's suffrage. This co-optation helped make the Progressive Party unnecessary, and it faded within a few years.",
           "The Progressive Party faded; the Republicans, whom it split from, survived. No third party has replaced a major party since the Republicans in the 1850s.",
           "The United States elects Congress and the president by winner-take-all, not proportional representation.",
           "Many of the platform's ideas did become law, through the major parties."], "s3"),
        M(8, "easy", "Under proportional representation, a party that wins 12 percent of the national vote for a legislature would most likely",
          ["win about 12 percent of the seats", "win no seats unless it carries a district", "win seats only if it finishes in the top two", "win only the districts where it has a majority"],
          ["Correct. Proportional representation gives parties seats in proportion to their share of the vote, usually above a minimum threshold.",
           "This describes single-member districts with plurality rule, as in U.S. House elections.",
           "A top-two rule is used in some primaries, not in proportional systems.",
           "Winning districts is how single-member systems work. Proportional systems award seats by vote share."]),
        { id: "t55-ca1a", skill: "u5", type: "fr", set: "t55-s4", part: "Concept application", sub: "A", topic: "5.5",
          lead: "Use the scenario to answer parts A, B, and C.",
          prompt: "Describe the electoral rule in the scenario that kept the Commonwealth Party from winning seats.",
          earns: "Describes single-member districts with winner-take-all (plurality) rule: only the top vote-getter in each district wins, so a party with 14 percent spread across districts wins nothing.",
          yes: ["Each district elects one member and the candidate with the most votes wins, so 14 percent statewide earns no seats unless the party finishes first somewhere.", "Winner-take-all, single-member districts give no seats for coming in second or third."],
          no: ["\"The party was too small\" does not earn the point; it describes no rule.", "\"Proportional representation\" does not earn the point; that is not the rule used."],
          example: "Lakeland uses single-member districts with plurality, or winner-take-all, rule. Only the candidate with the most votes in each district wins. Because the Commonwealth Party's 14 percent was spread across all 60 districts, it did not finish first anywhere and won no seats.",
          notExample: "The state is unfair to new parties." },
        { id: "t55-ca1b", skill: "u5", type: "fr", set: "t55-s4", part: "Concept application", sub: "B", topic: "5.5",
          lead: "Use the scenario to answer parts A, B, and C.",
          prompt: "Explain why the party won a smaller share of the vote than the share of voters who agreed with its housing plan.",
          earns: "Explains the wasted-vote reasoning: under winner-take-all rules, voters who agreed with the party chose a major-party candidate who could win rather than a third-party candidate likely to lose.",
          yes: ["About 25 percent agreed with the plan, but many feared wasting their vote on a candidate who could not win a district, so they voted for a major-party candidate instead.", "Under plurality rules a vote for a likely loser has no effect on who wins, so supporters of the plan backed the more viable major-party candidate."],
          no: ["\"The polls were wrong\" does not earn the point.", "Restating that 25 percent agreed and 14 percent voted for the party does not earn the point."],
          example: "Under winner-take-all rules, only the top finisher in a district wins, so a vote for a candidate who cannot finish first does not change who represents the district. Many voters who agreed with the housing plan decided not to waste their vote and chose the major-party candidate they preferred, which cut the party's share from about 25 percent to 14 percent.",
          notExample: "Some people changed their minds." },
        { id: "t55-ca1c", skill: "u5", type: "fr", set: "t55-s4", part: "Concept application", sub: "C", topic: "5.5",
          lead: "Use the scenario to answer parts A, B, and C.",
          prompt: "Explain how the major party's new housing plan could affect the Commonwealth Party in future elections.",
          earns: "Explains co-optation: by adopting the third party's main proposals, the major party draws away its supporters, weakening the third party even as its ideas advance.",
          yes: ["By taking two of the Commonwealth Party's proposals, the major party gives its voters a reason to switch to a party that can win, so the Commonwealth Party will likely lose support.", "This is co-optation: the third party's issue gets adopted, so it loses its reason to exist and shrinks."],
          no: ["\"The Commonwealth Party will be happy\" does not earn the point.", "\"The major party copied them\" without explaining the effect on the third party does not earn the point."],
          example: "The major party is co-opting the Commonwealth Party's issue. Voters who backed the third party because of housing can now get much of the same plan from a party able to win seats, so many will switch. The Commonwealth Party will likely lose votes in future elections even though its ideas are being adopted.",
          notExample: "Housing is an important issue in Lakeland." },
      ] },
  ],
};

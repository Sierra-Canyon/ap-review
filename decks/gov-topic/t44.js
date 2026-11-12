// Topic 4.4 Quiz: Influence of Political Events on Ideology
// Sources: Gallup satisfaction polls before and after four events, Franklin Roosevelt's 1944 State of the Union message, and a scenario.
import { bars } from "../../plot.js";

// Gallup: "satisfied with the way things are going in the United States," the poll before and the poll after each event
const sat = {
  labels: ["9/11 attacks, 2001", "Iraq invasion, 2003", "Financial crisis, 2008", "COVID-19, 2020"],
  before: [43, 36, 21, 45], after: [61, 60, 9, 30],
  bDates: ["Sept. 7 to 10, 2001", "March 3 to 5, 2003", "Sept. 8 to 11, 2008", "Feb. 3 to 16, 2020"],
  aDates: ["Sept. 14 to 15, 2001", "March 22 to 23, 2003", "Oct. 3 to 5, 2008", "April 1 to 14, 2020"],
};

export const sets = {
  "t44-s1": {
    id: "t44-s1", name: "Satisfaction with the country before and after four events", intro: "Use the chart and table below to answer the questions that follow.", label: "Chart",
    sources: [
      { title: "Chart", blocks: [
        { svg: bars({ labels: sat.labels, series: [{ name: "Poll before the event", values: sat.before }, { name: "Poll after the event", values: sat.after }], y: [0, 80], step: 20, yname: "Percent satisfied", width: 620,
          alt: "Bar chart of the percent of U.S. adults satisfied with the way things are going in the United States, in Gallup polls before and after four events. September 11 attacks, 2001: 43 before, 61 after. Iraq invasion, 2003: 36 before, 60 after. Financial crisis, 2008: 21 before, 9 after. COVID-19 pandemic, 2020: 45 before, 30 after." }),
          caption: "Percent of U.S. adults satisfied with the way things are going in the United States, Gallup polls taken before and after four events (dates in the table)" },
        { table: { head: ["Event", "Poll before", "Satisfied (%)", "Poll after", "Satisfied (%)"], rows: sat.labels.map((l, i) => [l, sat.bDates[i], String(sat.before[i]), sat.aDates[i], String(sat.after[i])]) } },
        { cite: "Gallup, \"Satisfaction With the United States,\" Gallup Historical Trends, trend table, accessed November 2026.", url: "https://news.gallup.com/poll/1669/general-mood-country.aspx", kind: "data" },
      ] },
    ],
  },
  "t44-s2": {
    id: "t44-s2", name: "Franklin Roosevelt on a second Bill of Rights, 1944", intro: "Use the passage below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "We have come to a clear realization of the fact that true individual freedom cannot exist without economic security and independence. \"Necessitous men are not free men.\" People who are hungry and out of a job are the stuff of which dictatorships are made." },
        { p: "In our day these economic truths have become accepted as self-evident. We have accepted, so to speak, a second Bill of Rights under which a new basis of security and prosperity can be established for all regardless of station, race, or creed." },
        { p: "Among these are:" },
        { p: "The right to a useful and remunerative job in the industries or shops or farms or mines of the Nation; ..." },
        { p: "The right of every family to a decent home;" },
        { p: "The right to adequate medical care and the opportunity to achieve and enjoy good health;" },
        { cite: "President Franklin D. Roosevelt, State of the Union Message to Congress, January 11, 1944, The American Presidency Project.", url: "https://www.presidency.ucsb.edu/documents/state-the-union-message-congress", kind: "primary" },
      ] },
    ],
  },
  "t44-s3": {
    id: "t44-s3", name: "A hurricane and its aftermath", intro: "Use the scenario below to answer parts A, B, and C.",
    sources: [
      { title: "Scenario", blocks: [
        { p: "A powerful hurricane strikes a coastal state, flooding several cities. Federal aid is slow to arrive, and thousands of residents wait days for food, water, and shelter. Television and social media show images of people stranded on rooftops. In polls taken a month later, far fewer residents of the state say they trust the federal government to do what is right than said so before the storm. Many high school and college students in the state spend their summer cleaning up neighborhoods with volunteer groups. In Congress, members from both parties hold hearings on the response and propose changes to the federal agency in charge of disaster relief." },
        { cite: "Scenario written for this review.", kind: "scenario" },
      ] },
    ],
  },
};

const S = "u4", T = "4.4";

export default {
  forms: [
    { id: "t44", name: "Topic 4.4 Quiz: Influence of Political Events on Ideology", group: "Unit 4: American Political Ideologies and Beliefs",
      items: [
        { id: "t44-m01", skill: S, type: "mcq", set: "t44-s1", topic: T, difficulty: "moderate",
          question: "Which statement accurately describes the data?",
          choices: [
            "Satisfaction rose after the two security events and fell after the two economic ones.",
            "Satisfaction fell after every event shown, since a crisis lowers public confidence.",
            "Satisfaction rose by more after the 2008 crisis than after the 2003 Iraq invasion.",
            "Satisfaction was lower in the poll after the Iraq invasion than in the poll before it.",
          ],
          why: [
            "Correct. Satisfaction rose after the 9/11 attacks (43 to 61) and the Iraq invasion (36 to 60) but fell after the financial crisis (21 to 9) and the start of the pandemic (45 to 30).",
            "Satisfaction rose after two of the four events, so it did not fall after every one.",
            "Satisfaction fell after the 2008 crisis, from 21 to 9 percent; it did not rise.",
            "Satisfaction rose after the Iraq invasion, from 36 to 60 percent.",
          ],
          answer: 0 },
        { id: "t44-m02", skill: S, type: "mcq", set: "t44-s1", topic: T, difficulty: "easy",
          question: "The change in satisfaction after the September 11 attacks best illustrates which concept?",
          choices: ["A rally effect", "A realigning election", "A life-cycle effect", "Divided government"],
          why: [
            "Correct. A rally effect (rally around the flag) is a short-term rise in public support and unity after an attack or the start of a war.",
            "A realigning election is a lasting shift in party coalitions shown by voting, not a change in a satisfaction poll within days.",
            "A life-cycle effect is a change in views tied to a person's stage of life, not a sudden national shift.",
            "Divided government is when different parties control the presidency and Congress, which is not shown here.",
          ],
          answer: 0 },
        { id: "t44-m03", skill: S, type: "mcq", set: "t44-s1", topic: T, difficulty: "difficult",
          question: "A researcher wants to know whether the 2008 crisis changed Americans' ideas about government's proper role in the economy, not just their mood. Which additional data would best test this?",
          choices: [
            "Answers before and after 2008 to a question on whether government should do more",
            "Satisfaction polls taken in every month of 2009 and in every month of 2010",
            "The share of eligible adults who voted in the 2008 presidential election",
            "The unemployment rate in each month of 2008, as reported by the government",
          ],
          why: [
            "Correct. Ideology concerns beliefs about government's role, so the best test compares answers to a question about that role before and after the crisis.",
            "More satisfaction polls would still measure the public's mood, not its beliefs about government's role.",
            "Turnout measures participation, not beliefs about government's role in the economy.",
            "Unemployment measures the economy itself, not what people think government should do about it.",
          ],
          answer: 0 },
        { id: "t44-m04", skill: S, type: "mcq", set: "t44-s2", topic: T, difficulty: "moderate",
          question: "Which event most shaped the view of government that Roosevelt expresses in the passage?",
          choices: [
            "The Great Depression, when millions of Americans lost their jobs and savings",
            "The Civil War, which ended slavery and expanded the national government's power",
            "The Watergate scandal, which led many Americans to distrust their presidents",
            "The September 11 attacks, which led Congress to pass new national security laws",
          ],
          why: [
            "Correct. Roosevelt spoke in 1944, after a decade of depression in which mass unemployment convinced many Americans that freedom requires economic security, the idea behind his \"second Bill of Rights.\"",
            "The Civil War expanded federal power, but Roosevelt's focus on jobs, homes, and medical care reflects the economic crisis of the 1930s.",
            "Watergate happened in the 1970s, three decades after this speech.",
            "The September 11 attacks happened in 2001, long after this speech.",
          ],
          answer: 0 },
        { id: "t44-m05", skill: S, type: "mcq", set: "t44-s2", topic: T, difficulty: "difficult",
          question: "Roosevelt's argument reflects a shift in American ideology most closely tied to which view?",
          choices: [
            "Government should guarantee economic security as well as political rights.",
            "Economic rights should replace the political rights in the original Bill of Rights.",
            "Individual freedom is safest when government stays out of the economy entirely.",
            "The states, not the national government, should define the rights of citizens.",
          ],
          why: [
            "Correct. Roosevelt says freedom \"cannot exist without economic security\" and proposes a second Bill of Rights of jobs, homes, and medical care added to existing political rights. That idea became central to modern liberalism.",
            "This overstates the passage. Roosevelt calls for a second Bill of Rights in addition to the first, not in place of it.",
            "This is a libertarian view, the opposite of Roosevelt's call for economic guarantees.",
            "Roosevelt addresses national rights \"for all,\" not a shift of power to the states.",
          ],
          answer: 0 },
        { id: "t44-m06", skill: S, type: "mcq", topic: T, difficulty: "moderate",
          question: "After a slow federal response to a major flood, which of the following is a change in political attitude rather than a political behavior?",
          choices: [
            "Coming to believe that the federal government cannot be trusted in a disaster",
            "Voting against the president's party in the next election for Congress",
            "Donating money to a private group that helps people who lost their homes",
            "Joining an interest group that lobbies Congress for more disaster relief",
          ],
          why: [
            "Correct. An attitude is a belief or feeling, such as distrust of the federal government. The other choices are actions.",
            "Voting is a political behavior, even if an attitude led to it.",
            "Donating money is an action, so it is a behavior.",
            "Joining an interest group is a form of participation, which is a behavior.",
          ],
          answer: 0 },
        { id: "t44-m07", skill: S, type: "mcq", topic: T, difficulty: "difficult",
          question: "In the weeks after the September 11 attacks, trust in the federal government rose sharply, and in October 2001 Congress passed the USA PATRIOT Act by wide bipartisan margins. Which conclusion is best supported?",
          choices: [
            "A major event can briefly raise trust and make expanded government power easier to pass.",
            "The attacks permanently ended partisan disagreement in Congress over national security.",
            "The rise in trust after the attacks marked a lasting shift of the public toward liberalism.",
            "Congress responded to the attacks by declaring war on Afghanistan under Article I.",
          ],
          why: [
            "Correct. The rally after September 11 raised trust for a time and helped Congress pass a law expanding surveillance powers with large majorities in both parties.",
            "Partisan conflict over security returned within a few years, especially over the Iraq War, so \"permanently\" overstates the effect.",
            "A short-term rise in trust is a rally effect, not a lasting ideological shift, and support for expanded security powers is not a liberal position.",
            "Congress passed an Authorization for Use of Military Force in September 2001; it did not formally declare war.",
          ],
          answer: 0 },
        { id: "t44-m08", skill: S, type: "mcq", topic: T, difficulty: "moderate",
          question: "Which event most directly changed who makes up the electorate, rather than the views of people who could already vote?",
          choices: [
            "Ratification of the Twenty-sixth Amendment in 1971",
            "The financial crisis of 2008 and the recession that followed",
            "The Watergate scandal and President Nixon's resignation",
            "The September 11 attacks and the war in Afghanistan",
          ],
          why: [
            "Correct. The Twenty-sixth Amendment lowered the voting age to 18 in all elections, adding millions of young people to the electorate.",
            "The 2008 crisis changed many voters' views and moods but did not change who was eligible to vote.",
            "Watergate lowered trust in government among existing voters; it did not add new voters.",
            "The attacks and the war shaped attitudes but did not change who could vote.",
          ],
          answer: 0 },
        { id: "t44-ca1a", skill: S, type: "fr", set: "t44-s3", part: "Concept application", sub: "A", topic: T,
          lead: "Use the scenario to answer parts A, B, and C.",
          prompt: "Describe how the hurricane affected the political attitudes of the state's residents.",
          earns: "Describes the change in attitude shown in the scenario: the slow federal response lowered residents' trust in the federal government.",
          yes: [
            "Residents saw the federal government fail to deliver food, water, and shelter quickly, so far fewer of them trusted the federal government to do what is right a month later.",
            "The slow response made residents doubt that the federal government could handle a crisis, lowering their trust in it.",
          ],
          no: [
            "\"The hurricane flooded several cities.\" (describes the event, not an attitude)",
            "\"Students volunteered.\" (a behavior, not a change in attitude)",
          ],
          example: "A major event can change how people view government. After federal aid was slow to reach people stranded by the flooding, far fewer residents said they trusted the federal government to do what is right than before the storm.",
          notExample: "The hurricane was a big event in the state." },
        { id: "t44-ca1b", skill: S, type: "fr", set: "t44-s3", part: "Concept application", sub: "B", topic: T,
          lead: "Use the scenario to answer parts A, B, and C.",
          prompt: "Explain how the hurricane could shape the political views of the students who lived through it for many years afterward.",
          earns: "Explains a lasting (generational) effect: a major event experienced while young can shape a cohort's views for life, with a specific likely effect (lasting distrust of the federal government, or support for stronger disaster programs, or higher civic engagement).",
          yes: [
            "Events experienced in the teens and early twenties often leave a lasting mark on a generation. Students who saw the failed response may keep a lower trust in the federal government as adults.",
            "Students who volunteered in the cleanup may stay more active in civic life and more supportive of well-funded disaster programs, a generational effect of the shared experience.",
          ],
          no: [
            "\"They will remember it.\" (no effect on political views explained)",
            "\"They will change their views when they buy homes.\" (a life-cycle effect, not the hurricane's effect)",
          ],
          example: "People who live through a major event while young often keep the views it gives them, a generational effect. Students who watched people wait days for federal help may carry a lasting distrust of the federal government into adulthood, while those who spent the summer volunteering may remain more active in their communities and more supportive of strong disaster programs.",
          notExample: "The students were busy cleaning up neighborhoods all summer." },
        { id: "t44-ca1c", skill: S, type: "fr", set: "t44-s3", part: "Concept application", sub: "C", topic: T,
          lead: "Use the scenario to answer parts A, B, and C.",
          prompt: "Explain how Congress could use its powers to respond to the change in public attitudes after the hurricane.",
          earns: "Explains a specific congressional power (oversight hearings, legislation, appropriations) and how using it responds to falling trust or demands for a better response.",
          yes: [
            "Congress can use its oversight power to hold hearings that question agency leaders, showing the public that it is holding the agency accountable and finding what went wrong.",
            "Congress can pass a law reorganizing the disaster agency or use its power of the purse to add funding for faster relief, answering residents' demands for a better response.",
          ],
          no: [
            "\"Congress could do something.\" (no power named or explained)",
            "\"Congress could fire the president.\" (inaccurate; Congress removes a president only through impeachment and conviction)",
          ],
          example: "Congress could use its power of the purse to give the disaster relief agency more money and staff, and pass a law requiring it to place supplies near coasts before hurricane season. Combined with oversight hearings that question agency leaders in public, these steps would show distrustful voters that their representatives are fixing the failures they saw.",
          notExample: "Members of Congress care about public opinion." },
      ] },
  ],
};

// Topic 4.3 Quiz: Changes in Ideology
// Sources: Gallup trends on legal marijuana and the death penalty (1995 to 2025), Pew Research Center 2021 climate survey by generation, and a scenario.
import { bars, lines } from "../../plot.js";

// Gallup trend polls (yes, legal; favor the death penalty for a person convicted of murder)
const trend = {
  years: ["1995", "2000", "2005", "2010", "2015", "2020", "2025"],
  dates: ["Aug. 1995 / May 1995", "Aug. to Sept. 2000", "Oct. 2005", "Oct. 2010", "Oct. 2015", "Sept. to Oct. 2020", "Oct. 2025"],
  pot: [25, 31, 36, 46, 58, 68, 64],
  death: [77, 67, 64, 64, 61, 55, 52],
};
// Pew Research Center, April 2021, by generation
const gen = { labels: ["Gen Z", "Millennial", "Gen X", "Boomer and older"], rep: [49, 48, 37, 26], act: [32, 28, 23, 21] };

export const sets = {
  "t43-s1": {
    id: "t43-s1", name: "Two social issues over thirty years", intro: "Use the graph and table below to answer the questions that follow.", label: "Chart",
    sources: [
      { title: "Chart", blocks: [
        { svg: lines({ labels: trend.years, series: [{ name: "Favor death penalty", values: trend.death }, { name: "Legalize marijuana", values: trend.pot }], y: [0, 100], step: 20, yname: "Percent", right: 130,
          alt: "Line graph of Gallup results, 1995 to 2025. Percent saying marijuana use should be made legal: 1995, 25; 2000, 31; 2005, 36; 2010, 46; 2015, 58; 2020, 68; 2025, 64. Percent in favor of the death penalty for a person convicted of murder: 1995, 77; 2000, 67; 2005, 64; 2010, 64; 2015, 61; 2020, 55; 2025, 52." }),
          caption: "Percent of U.S. adults saying marijuana use should be made legal, and percent in favor of the death penalty for a person convicted of murder, Gallup polls, 1995 to 2025" },
        { table: { head: ["Year", "Marijuana should be legal (%)", "Favor the death penalty (%)"], rows: trend.years.map((y, i) => [y, String(trend.pot[i]), String(trend.death[i])]) } },
        { cite: "Gallup, \"Drugs: Recreational and Illegal\" (marijuana legalization trend; polls of Aug. 1995, Aug. to Sept. 2000, and October of 2005 to 2025) and \"Death Penalty\" (polls of May 1995, Aug. to Sept. 2000, and October of 2005 to 2025), Gallup Historical Trends, accessed November 2026.", url: "https://news.gallup.com/poll/1657/illegal-drugs.aspx", kind: "data" },
        { cite: "Death penalty trend used for the second line.", url: "https://news.gallup.com/poll/1606/death-penalty.aspx", kind: "data" },
      ] },
    ],
  },
  "t43-s2": {
    id: "t43-s2", name: "Climate views and action by generation, 2021", intro: "Use the chart and table below to answer the questions that follow.", label: "Chart",
    sources: [
      { title: "Chart", blocks: [
        { svg: bars({ labels: gen.labels, series: [{ name: "Republicans: climate action a priority", values: gen.rep }, { name: "All adults: took a climate action", values: gen.act }], y: [0, 60], step: 10, yname: "Percent", width: 600,
          alt: "Bar chart by generation, April 2021. Republicans and Republican leaners saying action to reduce the effects of climate change needs to be prioritized today: Gen Z 49 percent, Millennial 48, Gen X 37, Boomer and older 26. All adults who took at least one of four actions on climate change in the last year: Gen Z 32 percent, Millennial 28, Gen X 23, Boomer and older 21." }),
          caption: "Republicans and Republican leaners who say action to reduce the effects of climate change should be prioritized today, and all adults who took at least one climate action in the past year, by generation, April 20 to 29, 2021" },
        { table: { head: ["Generation", "Republicans: climate action should be prioritized today, even if fewer resources go to other problems (%)", "All adults: donated, contacted an official, volunteered, or attended a rally on climate in the last year (%)"], rows: gen.labels.map((g, i) => [g, String(gen.rep[i]), String(gen.act[i])]) } },
        { cite: "Pew Research Center, \"Gen Z, Millennials Stand Out for Climate Change Activism, Social Media Engagement With Issue,\" May 26, 2021 (survey of 13,749 U.S. adults, April 20 to 29, 2021).", url: "https://www.pewresearch.org/science/2021/05/26/gen-z-millennials-stand-out-for-climate-change-activism-social-media-engagement-with-issue/", kind: "data" },
      ] },
    ],
  },
  "t43-s3": {
    id: "t43-s3", name: "Following one group of voters for sixteen years", intro: "Use the scenario below to answer parts A, B, and C.",
    sources: [
      { title: "Scenario", blocks: [
        { p: "A university research team surveys the same group of adults every four years. When the team first surveyed them in 2008, most of the people who were then in their early twenties called themselves liberal on social issues and said the federal government should spend more to make college affordable. By 2024, those same people still held liberal views on social issues. But many of them now owned homes and had children, and more of them said that property taxes and income taxes were too high. People in the study who were already over 60 in 2008 changed little on either question over the same years." },
        { cite: "Scenario written for this review.", kind: "scenario" },
      ] },
    ],
  },
};

const S = "u4", T = "4.3";

export default {
  forms: [
    { id: "t43", name: "Topic 4.3 Quiz: Changes in Ideology", group: "Unit 4: American Political Ideologies and Beliefs",
      items: [
        { id: "t43-m01", skill: S, type: "mcq", set: "t43-s1", topic: T, difficulty: "easy",
          question: "Which statement is accurate according to the graph?",
          choices: [
            "Support for legal marijuana more than doubled from 1995 to 2025.",
            "Support for the death penalty rose in every period after 1995.",
            "Support for legal marijuana rose in every period, peaking in 2025.",
            "In 2025, more adults favored the death penalty than legal marijuana.",
          ],
          why: [
            "Correct. Support for legal marijuana rose from 25 percent in 1995 to 64 percent in 2025, more than two and a half times as high.",
            "Support for the death penalty fell from 77 percent to 52 percent, and it never rose between points shown.",
            "Marijuana support peaked at 68 percent in 2020 and fell to 64 percent in 2025, so it did not rise in every period.",
            "In 2025, 52 percent favored the death penalty and 64 percent favored legal marijuana, so this reverses the data.",
          ],
          answer: 0 },
        { id: "t43-m02", skill: S, type: "mcq", set: "t43-s1", topic: T, difficulty: "moderate",
          question: "Which conclusion about changes in public opinion do the data best support?",
          choices: [
            "Views on some social issues can shift a great deal within a few decades.",
            "Americans grew steadily more conservative on criminal justice after 1995.",
            "New state laws allowing marijuana use caused the rise in public support.",
            "Public views on social issues are fixed once a generation becomes adults.",
          ],
          why: [
            "Correct. Support for legal marijuana rose by 39 points and support for the death penalty fell by 25 points over thirty years, large shifts in a short span.",
            "Falling support for the death penalty and rising support for legal marijuana both moved away from the conservative position.",
            "The graph shows opinion over time but nothing about state laws, so it cannot show what caused the change.",
            "The large changes shown contradict the idea that views stay fixed.",
          ],
          answer: 0 },
        { id: "t43-m03", skill: S, type: "mcq", set: "t43-s1", topic: T, difficulty: "difficult",
          question: "A researcher wants to know whether the rise in support for legal marijuana came mostly from younger generations replacing older ones rather than from individuals changing their minds. Which additional data would best answer the question?",
          choices: [
            "The views of each birth cohort tracked across every survey year",
            "The number of states that had legalized marijuana in each year",
            "A larger sample of all adults surveyed in the 2025 poll alone",
            "One survey in 2025 comparing adults under 30 with those over 65",
          ],
          why: [
            "Correct. Following the same birth cohorts over time shows whether each group's views changed (individuals changing their minds) or stayed put while newer, more supportive cohorts entered the adult population (generational replacement).",
            "State laws might relate to opinion, but they cannot separate cohort effects from changes within individuals.",
            "A bigger sample in one year makes that year's estimate more precise but says nothing about change over time.",
            "A single snapshot comparing age groups cannot tell a generational effect from a life-cycle effect.",
          ],
          answer: 0 },
        { id: "t43-m04", skill: S, type: "mcq", set: "t43-s2", topic: T, difficulty: "moderate",
          question: "Which statement is accurate according to the data?",
          choices: [
            "Among Republicans, Gen Z and Millennials were likelier than older groups to prioritize climate action.",
            "A majority of Republicans in every generation said climate action should be prioritized today.",
            "Gen X Republicans were closer to Gen Z Republicans than to older Republicans on climate action.",
            "Adults in older generations were more likely than younger ones to have taken a climate action.",
          ],
          why: [
            "Correct. About half of Gen Z (49 percent) and Millennial (48 percent) Republicans gave climate action priority, compared with 37 percent of Gen X and 26 percent of Boomer and older Republicans.",
            "No generation reached a majority; the highest figure is 49 percent.",
            "Gen X Republicans (37 percent) are 12 points from Gen Z (49) but 11 points from Boomers and older (26), so they are slightly closer to the older group.",
            "Taking action falls with age, from 32 percent of Gen Z to 21 percent of Boomers and older, so this reverses the data.",
          ],
          answer: 0 },
        { id: "t43-m05", skill: S, type: "mcq", set: "t43-s2", topic: T, difficulty: "difficult",
          question: "Which conclusion about generational effects do these data best support?",
          choices: [
            "They suggest a generational gap but cannot show whether it will last as Gen Z ages.",
            "They prove that Gen Z will keep its views on climate change for the rest of their lives.",
            "They prove that people become more conservative on climate as they grow older.",
            "They show that party matters more than age in shaping views on climate change.",
          ],
          why: [
            "Correct. A one-time survey shows age differences, even within one party, but cannot tell whether they reflect a lasting generational effect or a life-cycle effect that will fade as young people age.",
            "Proving a lasting generational effect would require following the same people over many years.",
            "Proving a life-cycle effect would also require tracking people over time; one survey cannot show change within individuals.",
            "The priority question is shown only for Republicans, so the data cannot compare the effect of party with the effect of age.",
          ],
          answer: 0 },
        { id: "t43-m06", skill: S, type: "mcq", topic: T, difficulty: "easy",
          question: "A woman who favored more government spending in college becomes more worried about taxes after she buys a home and starts paying for her children's needs. Her change in views best illustrates which concept?",
          choices: ["A life-cycle effect", "A generational effect", "A realigning election", "Political efficacy"],
          why: [
            "Correct. A life-cycle effect is a change in views tied to a stage of life, such as owning a home and raising children.",
            "A generational effect is a lasting set of views shared by a cohort shaped by the same events, not a change tied to one person's stage of life.",
            "A realigning election is a lasting shift in party coalitions across the electorate, not one person's change of views.",
            "Political efficacy is the belief that one can influence government, which the scenario does not describe.",
          ],
          answer: 0 },
        { id: "t43-m07", skill: S, type: "mcq", topic: T, difficulty: "moderate",
          question: "Which finding would be the strongest evidence of a generational effect?",
          choices: [
            "A cohort that came of age during a war keeps its distinct foreign policy views for decades.",
            "Adults of every age grow more supportive of the president right after a foreign attack.",
            "People become more likely to vote as they grow older, buy homes, and settle in one place.",
            "One poll finds that people under 30 hold different views than people over 65 on taxes.",
          ],
          why: [
            "Correct. A generational effect is a lasting imprint on a cohort shaped by the same events, so the strongest evidence is a cohort that keeps distinct views as it ages.",
            "A short-term rise in support across all ages is a rally effect caused by an event, not a mark on one generation.",
            "Changes tied to aging and settling down are life-cycle effects.",
            "One poll comparing age groups cannot separate a generational effect from a life-cycle effect.",
          ],
          answer: 0 },
        { id: "t43-m08", skill: S, type: "mcq", topic: T, difficulty: "moderate",
          question: "From the 1960s to the 1990s, many white Southern voters shifted their support from the Democratic Party to the Republican Party. Which development contributed most to this change?",
          choices: [
            "Democratic support for federal civil rights laws such as the Civil Rights Act of 1964",
            "Republican support for expanding federal farm aid begun during the New Deal",
            "Democratic calls for lower federal taxes and fewer regulations on business",
            "Republican plans to give the federal government more control over schools",
          ],
          why: [
            "Correct. National Democrats' support for civil rights laws, signed by President Johnson in 1964 and 1965, pushed many white Southern conservatives away from the party and toward Republicans.",
            "Farm aid was not the main dividing issue, and Republicans did not campaign in the South on expanding New Deal programs.",
            "Lower taxes and less regulation became Republican themes, not Democratic ones, during these years.",
            "Republicans generally called for state and local control of schools, not more federal control.",
          ],
          answer: 0 },
        { id: "t43-ca1a", skill: S, type: "fr", set: "t43-s3", part: "Concept application", sub: "A", topic: T,
          lead: "Use the scenario to answer parts A, B, and C.",
          prompt: "Describe a generational effect as shown in the scenario.",
          earns: "Describes a generational effect (a cohort shaped by shared experiences keeps distinct views as it ages) and ties it to the group that stayed liberal on social issues from 2008 to 2024.",
          yes: [
            "A generational effect is a set of views a cohort keeps throughout life. The people in their early twenties in 2008 stayed liberal on social issues sixteen years later.",
            "The young group's social views did not change as they aged, which suggests their generation formed lasting views when they came of age.",
          ],
          no: [
            "\"Young people are liberal.\" (no description of a lasting cohort effect)",
            "\"They worried more about taxes as they got older.\" (that is a life-cycle effect)",
          ],
          example: "A generational effect occurs when people who come of age at the same time share experiences that give them views they keep for life. The people who were in their early twenties in 2008 still held liberal views on social issues in 2024, even after buying homes and starting families, which suggests a lasting imprint on their generation.",
          notExample: "The study surveyed people every four years." },
        { id: "t43-ca1b", skill: S, type: "fr", set: "t43-s3", part: "Concept application", sub: "B", topic: T,
          lead: "Use the scenario to answer parts A, B, and C.",
          prompt: "Explain how a life-cycle effect could account for the change in the younger group's views on taxes.",
          earns: "Explains that views shift with life stage, linking owning a home or raising children (paying property and income taxes, more expenses) to more concern that taxes are too high.",
          yes: [
            "As the group moved from college to owning homes and raising children, they began paying property taxes and larger income taxes, so their own stage of life made taxes a bigger concern.",
            "In their twenties they wanted help paying for college, but as homeowners and parents they had more to lose from high taxes, so their views on taxes changed with their life stage.",
          ],
          no: [
            "\"People become more conservative as they get older.\" (no link to the life stages in the scenario)",
            "\"Their generation was shaped by the 2008 recession.\" (a generational explanation, not a life-cycle one)",
          ],
          example: "A life-cycle effect is a change in views that comes with a stage of life. By 2024, many people in the younger group owned homes and had children, so they paid property taxes and faced higher costs. Taxes now came out of their own household budgets, which explains why more of them said taxes were too high even though their social views stayed liberal.",
          notExample: "Taxes went up between 2008 and 2024." },
        { id: "t43-ca1c", skill: S, type: "fr", set: "t43-s3", part: "Concept application", sub: "C", topic: T,
          lead: "Use the scenario to answer parts A, B, and C.",
          prompt: "Explain why surveying the same people over time gives better evidence about changes in ideology than a single survey that compares age groups.",
          earns: "Explains that a single survey cannot separate generational from life-cycle effects (it shows differences between age groups, not change within people), while repeated surveys of the same people show whether individuals' views change as they age.",
          yes: [
            "A single survey only shows that young and old people differ at one moment; it cannot show whether the young will change as they age. Following the same people shows which views changed (taxes) and which lasted (social issues).",
            "Repeated surveys of the same people separate a life-cycle effect from a generational effect, because they record change within each person instead of comparing different people.",
          ],
          no: [
            "\"It is more accurate.\" (no explanation of why)",
            "\"It has a bigger sample.\" (sample size does not explain the advantage)",
          ],
          example: "A single survey shows that young and older adults differ at one moment, but it cannot tell whether those differences come from age or from the era each group grew up in. By surveying the same people in 2008 and 2024, the team could see that the younger group's views on taxes changed as they reached a new stage of life while their social views lasted. That separates a life-cycle effect from a generational effect, which one snapshot cannot do.",
          notExample: "Surveys are important for learning about public opinion." },
      ] },
  ],
};

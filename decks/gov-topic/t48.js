// Topic 4.8 Quiz: Ideology and Policy Making
// Sources: President Clinton's statement on signing the 1996 welfare law, House roll call votes on four major laws (House Clerk), and a scenario.
import { bars } from "../../plot.js";

// Office of the Clerk, U.S. House of Representatives: final House votes
const votes = {
  labels: ["1996 welfare law", "2010 health care law", "2017 tax law", "2022 climate law"],
  demYes: [98, 219, 0, 220], repYes: [230, 0, 224, 0],
  rows: [
    ["Welfare reform, H.R. 3734 (conference report), July 31, 1996", "98", "98", "230", "2", "328 to 101"],
    ["Patient Protection and Affordable Care Act, H.R. 3590 (concur in Senate amendments), March 21, 2010", "219", "34", "0", "178", "219 to 212"],
    ["Tax Cuts and Jobs Act, H.R. 1 (concur in Senate amendment), December 20, 2017", "0", "189", "224", "12", "224 to 201"],
    ["Inflation Reduction Act, H.R. 5376 (concur in Senate amendment), August 12, 2022", "220", "0", "0", "207", "220 to 207"],
  ],
};

export const sets = {
  "t48-s1": {
    id: "t48-s1", name: "Clinton signs the welfare law, 1996", intro: "Use the passage below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "Today, I have signed into law H.R. 3734, the \"Personal Responsibility and Work Opportunity Reconciliation Act of 1996.\" While far from perfect, this legislation provides an historic opportunity to end welfare as we know it and transform our broken welfare system by promoting the fundamental values of work, responsibility, and family." },
        { p: "This Act honors my basic principles of real welfare reform. It requires work of welfare recipients, limits the time they can stay on welfare, and provides child care and health care to help them make the move from welfare to work." },
        { p: "... This bipartisan legislation is significantly better than the bills that I vetoed. The Congress has removed many of the worst provisions of the vetoed bills and has included many of the improvements that I sought." },
        { cite: "President William J. Clinton, Statement on Signing the Personal Responsibility and Work Opportunity Reconciliation Act of 1996, August 22, 1996, The American Presidency Project.", url: "https://www.presidency.ucsb.edu/documents/statement-signing-the-personal-responsibility-and-work-opportunity-reconciliation-act-1996", kind: "primary" },
      ] },
    ],
  },
  "t48-s2": {
    id: "t48-s2", name: "Party votes on four major laws in the House", intro: "Use the chart and table below to answer the questions that follow.", label: "Chart",
    sources: [
      { title: "Chart", blocks: [
        { svg: bars({ labels: votes.labels, series: [{ name: "Democrats voting yes", values: votes.demYes }, { name: "Republicans voting yes", values: votes.repYes }], y: [0, 250], step: 50, yname: "Yes votes", width: 640,
          alt: "Bar chart of yes votes by party on final House passage of four laws. 1996 welfare law: 98 Democrats, 230 Republicans. 2010 health care law: 219 Democrats, 0 Republicans. 2017 tax law: 0 Democrats, 224 Republicans. 2022 climate, health, and tax law: 220 Democrats, 0 Republicans." }),
          caption: "Number of House Democrats and Republicans voting yes on the final House vote for four major laws, 1996 to 2022" },
        { table: { head: ["Law and House vote", "Democrats yes", "Democrats no", "Republicans yes", "Republicans no", "Total"], rows: votes.rows } },
        { cite: "Office of the Clerk, U.S. House of Representatives, roll call votes 383 (July 31, 1996), 165 (March 21, 2010), 699 (December 20, 2017), and 420 (August 12, 2022). The single independent member voted no in 1996.", url: "https://clerk.house.gov/Votes/1996383", kind: "data" },
        { cite: "Roll call 165, 2010.", url: "https://clerk.house.gov/Votes/2010165", kind: "data" },
        { cite: "Roll call 699, 2017.", url: "https://clerk.house.gov/Votes/2017699", kind: "data" },
        { cite: "Roll call 420, 2022.", url: "https://clerk.house.gov/Votes/2022420", kind: "data" },
      ] },
    ],
  },
  "t48-s3": {
    id: "t48-s3", name: "One party wins full control of a state", intro: "Use the scenario below to answer parts A, B, and C.",
    sources: [
      { title: "Scenario", blocks: [
        { p: "After an election, one party controls the governor's office and both chambers of the legislature in the state of Ridgeland for the first time in twenty years. The party's candidates campaigned on conservative promises. In its first session, the legislature cuts the top state income tax rate, creates a program that gives families state money to pay private school tuition, and repeals a state rule requiring employers to offer paid sick leave. The governor signs all three bills. Members of the other party vote against each bill, and a teachers' union announces that it will file a lawsuit in state court to stop the tuition program." },
        { cite: "Scenario written for this review.", kind: "scenario" },
      ] },
    ],
  },
};

const S = "u4", T = "4.8";

export default {
  forms: [
    { id: "t48", name: "Topic 4.8 Quiz: Ideology and Policy Making", group: "Unit 4: American Political Ideologies and Beliefs",
      items: [
        { id: "t48-m01", skill: S, type: "mcq", set: "t48-s1", topic: T, difficulty: "moderate",
          question: "The passage best illustrates which feature of policymaking?",
          choices: [
            "A president and a Congress led by the other party reaching a compromise",
            "A president vetoing a bill passed by a Congress led by his own party",
            "A law passed with no votes from members of the president's own party",
            "A Supreme Court ruling that ended a federal program for poor families",
          ],
          why: [
            "Correct. In 1996, Republicans controlled both chambers of Congress. Clinton, a Democrat, vetoed earlier versions and then signed this bill after Congress made changes he sought, a compromise between the parties.",
            "Clinton's vetoes were of bills passed by a Republican Congress, not by his own party.",
            "Clinton calls the law bipartisan, and many House Democrats voted for it.",
            "The passage describes a law signed by the president, not a court ruling.",
          ],
          answer: 0 },
        { id: "t48-m02", skill: S, type: "mcq", set: "t48-s1", topic: T, difficulty: "difficult",
          question: "Judging from the passage, which ideological goal did the law most reflect?",
          choices: [
            "The conservative goal of requiring work and limiting time on aid",
            "The liberal goal of a guaranteed income for poor families",
            "The libertarian goal of ending all federal help for child care",
            "The conservative goal of ending federal health care for the poor",
          ],
          why: [
            "Correct. The law \"requires work of welfare recipients\" and \"limits the time they can stay on welfare,\" goals long pushed by conservatives who stressed personal responsibility.",
            "Time limits and work requirements are the opposite of a guaranteed income.",
            "The passage says the law \"provides child care,\" so it did not end federal help for child care.",
            "Clinton's full statement says Congress preserved the guarantee of health care for the poor, and this excerpt says the law provides health care to help people move to work.",
          ],
          answer: 0 },
        { id: "t48-m03", skill: S, type: "mcq", set: "t48-s2", topic: T, difficulty: "easy",
          question: "Which statement is accurate according to the data?",
          choices: [
            "No Republican voted for the 2010 law or the 2022 law.",
            "Every House Democrat voted for the 1996 welfare law.",
            "The 2017 tax law won yes votes from both parties.",
            "More Democrats than Republicans backed the 1996 law.",
          ],
          why: [
            "Correct. Republicans cast 0 yes votes on the 2010 health care law and 0 on the 2022 law.",
            "Democrats split evenly on the 1996 law, 98 yes and 98 no.",
            "No Democrat voted for the 2017 tax law; all 224 yes votes were Republican.",
            "Republicans cast 230 yes votes on the 1996 law and Democrats 98.",
          ],
          answer: 0 },
        { id: "t48-m04", skill: S, type: "mcq", set: "t48-s2", topic: T, difficulty: "moderate",
          question: "Which conclusion is best supported by the data?",
          choices: [
            "The three laws passed after 2000 drew yes votes from only one party each.",
            "Divided government made it possible to pass the 2010, 2017, and 2022 laws.",
            "The 1996 law passed on a party-line vote, just like the three later laws.",
            "Party-line voting shows that Congress stopped passing major laws after 2010.",
          ],
          why: [
            "Correct. The 2010 and 2022 laws won only Democratic votes, and the 2017 law won only Republican votes.",
            "Each of the three later laws passed under unified government, with one party holding the House, the Senate, and the presidency.",
            "The 1996 law won large support from Republicans and half of Democrats, so it was bipartisan.",
            "The table shows major laws passing in 2017 and 2022, after 2010.",
          ],
          answer: 0 },
        { id: "t48-m05", skill: S, type: "mcq", set: "t48-s2", topic: T, difficulty: "difficult",
          question: "Which best explains why the 1996 vote looks so different from the other three votes?",
          choices: [
            "The president's party did not control Congress, so passage required a deal across parties.",
            "The 1996 law was a constitutional amendment, which needed two-thirds of the House to pass.",
            "House members in 1996 were chosen by party leaders, so they could ignore their own voters.",
            "The Supreme Court had ordered Congress to pass any new welfare law with both parties' votes.",
          ],
          why: [
            "Correct. In 1996 a Democratic president faced a Republican Congress, so a law had to satisfy both. The later laws passed under unified party control and could pass with one party's votes.",
            "The 1996 law was an ordinary statute signed by the president, not a constitutional amendment.",
            "House members have been elected by voters since 1789, and primaries chose most nominees by 1996.",
            "The Supreme Court does not order Congress to pass laws or dictate how members vote.",
          ],
          answer: 0 },
        { id: "t48-m06", skill: S, type: "mcq", topic: T, difficulty: "easy",
          question: "Which education proposal best reflects liberal ideology?",
          choices: [
            "Expanding federal money for preschool for low-income families",
            "Replacing federal school aid with block grants to the states",
            "Cutting the top income tax rate to encourage private giving",
            "Closing the Department of Education and ending its programs",
          ],
          why: [
            "Correct. Liberals favor an active federal role in reducing inequality, such as paying for early education for children from low-income families.",
            "Block grants that shift control to states reflect conservative support for devolution.",
            "Cutting top tax rates is a conservative economic position.",
            "Closing a federal department reflects conservative or libertarian views of a smaller federal government.",
          ],
          answer: 0 },
        { id: "t48-m07", skill: S, type: "mcq", topic: T, difficulty: "moderate",
          question: "A conservative president is most likely to nominate federal judges who do which of the following?",
          choices: [
            "Interpret the Constitution according to its original meaning",
            "Read the Constitution broadly to support new social programs",
            "Follow public opinion polls when deciding difficult cases",
            "Strike down state laws whenever federal power is in doubt",
          ],
          why: [
            "Correct. Conservative presidents have favored judges who stress the Constitution's text and original meaning and who practice judicial restraint toward elected branches.",
            "A broad reading that expands government programs is associated with liberal judicial views.",
            "Judges of any ideology are expected to decide cases on law, not polls; federal judges hold office during good behavior so they can ignore opinion.",
            "Conservatives generally favor more room for the states, not striking down state laws in favor of federal power.",
          ],
          answer: 0 },
        { id: "t48-m08", skill: S, type: "mcq", topic: T, difficulty: "moderate",
          question: "When the presidency passes from one party to the other, which change is most likely in the new president's first months?",
          choices: [
            "The new president reverses some of the last president's executive orders.",
            "The Supreme Court overturns laws passed under the previous president.",
            "Congress must vote again to approve every existing federal regulation.",
            "Federal judges named by the previous president must leave the bench.",
          ],
          why: [
            "Correct. Executive orders can be revoked by a later president, so a new president of the other party often reverses some of them quickly to reflect a different ideology.",
            "The Court reviews laws only when cases reach it, not because the presidency changes hands.",
            "Existing regulations stay in force unless changed by agencies, Congress, or courts.",
            "Federal judges serve during good behavior and do not leave when the presidency changes.",
          ],
          answer: 0 },
        { id: "t48-ca1a", skill: S, type: "fr", set: "t48-s3", part: "Concept application", sub: "A", topic: T,
          lead: "Use the scenario to answer parts A, B, and C.",
          prompt: "Describe how conservative ideology is reflected in one of the laws Ridgeland passed.",
          earns: "Describes a link between a law and a conservative principle (lower taxes and limited government, school choice and the free market, fewer rules on business).",
          yes: [
            "Cutting the top income tax rate reflects the conservative belief that lower taxes leave more money with individuals and businesses and encourage growth.",
            "The tuition program reflects the conservative support for school choice, letting families use public money in a competitive education market.",
            "Repealing the paid sick leave rule reflects the conservative view that government should impose fewer requirements on employers.",
          ],
          no: [
            "\"The laws are conservative.\" (no law tied to a principle)",
            "\"The tax cut helps the rich.\" (a criticism, not a description of the conservative principle)",
          ],
          example: "Repealing the paid sick leave requirement reflects the conservative belief in limited government and free markets. Conservatives argue that employers and workers, not the state, should decide what benefits a job includes, and that fewer mandates help businesses grow and hire.",
          notExample: "Ridgeland passed three laws in its first session." },
        { id: "t48-ca1b", skill: S, type: "fr", set: "t48-s3", part: "Concept application", sub: "B", topic: T,
          lead: "Use the scenario to answer parts A, B, and C.",
          prompt: "Explain how one-party control of the governorship and legislature made it easier to pass these laws.",
          earns: "Explains that unified control means the majority does not need votes or a signature from the other party, so bills reflecting one ideology pass without compromise or veto.",
          yes: [
            "With the same party in charge of both chambers and the governor's office, bills passed with only that party's votes, and the governor signed rather than vetoed them, so no compromise was needed.",
            "Under divided government, the other party could have blocked or vetoed these bills; unified control removed those checks.",
          ],
          no: [
            "\"The party had control.\" (no explanation of how control helped)",
            "\"The other party agreed with the laws.\" (contradicts the scenario)",
          ],
          example: "Because one party held both chambers and the governor's office, its members could pass each bill with their own votes even though every member of the other party voted no. The governor shared their ideology and signed the bills instead of vetoing them, so the party did not have to water down its proposals to win support from the other side.",
          notExample: "The election was important for Ridgeland." },
        { id: "t48-ca1c", skill: S, type: "fr", set: "t48-s3", part: "Concept application", sub: "C", topic: T,
          lead: "Use the scenario to answer parts A, B, and C.",
          prompt: "Explain how opponents of the new laws could try to change or stop them.",
          earns: "Explains a specific path for opponents (a lawsuit in state court, campaigning to win seats in the next election, interest group lobbying or a ballot measure) and how it could change or stop a law.",
          yes: [
            "The teachers' union can ask a state court to strike down the tuition program, for example by arguing that it violates the state constitution's rules on funding public schools.",
            "Opponents can campaign to win back seats in the next election so they can repeal the laws, using the votes against each bill to rally their voters.",
          ],
          no: [
            "\"They could protest.\" (no mechanism for changing the law)",
            "\"The governor could veto them now.\" (the governor already signed them and shares the majority's views)",
          ],
          example: "The teachers' union can sue in state court, arguing that the tuition program violates the state constitution, and a ruling in its favor would stop the program. Meanwhile, the minority party can use its votes against each bill to campaign in the next election, and if it wins back the legislature or the governor's office it could repeal or change the laws.",
          notExample: "Not everyone in Ridgeland likes the new laws." },
      ] },
  ],
};

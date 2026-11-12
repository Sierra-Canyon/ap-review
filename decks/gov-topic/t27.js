// Topic 2.7 Quiz: Presidential Communication
import { bars } from "../../plot.js";

// Gallup, presidential job approval: highs and lows for each president.
const ap = {
  names: ["Carter", "Reagan", "G.H.W. Bush", "Clinton", "G.W. Bush", "Obama"],
  full: ["Jimmy Carter", "Ronald Reagan", "George H.W. Bush", "Bill Clinton", "George W. Bush", "Barack Obama"],
  avg: ["45.5", "52.8", "60.9", "55.1", "49.4", "47.9"],
  high: [75, 68, 89, 73, 90, 69], highWhen: ["March 1977", "May 1981, May 1986", "February 1991", "December 1998", "September 2001", "January 2009"],
  low: [28, 35, 29, 37, 25, 38], lowWhen: ["June 1979", "January 1983", "July 1992", "June 1993", "October 2008", "August 2011, October 2011, September 2014"],
};

export const sets = {
  "t27-s1": {
    id: "t27-s1", name: "Kennedy's civil rights address, 1963", intro: "Use the passage below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "Next week I shall ask the Congress of the United States to act, to make a commitment it has not fully made in this century to the proposition that race has no place in American life or law. The Federal judiciary has upheld that proposition in a series of forthright cases. The executive branch has adopted that proposition in the conduct of its affairs, including the employment of Federal personnel, the use of Federal facilities, and the sale of federally financed housing. ..." },
      { p: "... But legislation, I repeat, cannot solve this problem alone. It must be solved in the homes of every American in every community across our country." },
      { cite: "John F. Kennedy, Radio and Television Report to the American People on Civil Rights, June 11, 1963.", url: "https://www.presidency.ucsb.edu/documents/radio-and-television-report-the-american-people-civil-rights", kind: "primary" },
    ] }],
  },
  "t27-s2": {
    id: "t27-s2", name: "Highest and lowest approval for six presidents", intro: "Use the chart and table below to answer the questions that follow.", label: "Chart",
    sources: [{ title: "Chart", blocks: [
      { svg: bars({ labels: ap.names, series: [{ name: "Highest approval", values: ap.high }, { name: "Lowest approval", values: ap.low }], y: [0, 100], step: 20, yname: "Percent approving", width: 600,
        alt: "Grouped bar chart of each president's highest and lowest job approval in Gallup polls. " + ap.full.map((n, i) => `${n}: high ${ap.high[i]}, low ${ap.low[i]}`).join("; ") + "." }),
        caption: "Highest and lowest presidential job approval in Gallup polls, for six presidents, 1977 to 2017" },
      { table: { head: ["President", "Average approval (%)", "Highest (%)", "When", "Lowest (%)", "When"], rows: ap.full.map((n, i) => [n, ap.avg[i], String(ap.high[i]), ap.highWhen[i], String(ap.low[i]), ap.lowWhen[i]]) } },
      { cite: "Gallup, \"Presidential Approval Ratings: Gallup Historical Statistics and Trends,\" summary tables of average, high, and low approval (accessed November 2026).", url: "https://news.gallup.com/poll/116677/presidential-approval-ratings-gallup-historical-statistics-trends.aspx", kind: "data" },
    ] }],
  },
  "t27-s3": {
    id: "t27-s3", name: "A video aimed at two senators", intro: "Use the scenario below to answer parts A, B, and C.",
    sources: [{ title: "Scenario", blocks: [
      { p: "Congress is debating a bill to lower prescription drug prices. The president records a two-minute video and posts it on several social media platforms. In it, she names two undecided senators and asks viewers to call their offices. The video is viewed 20 million times in two days, and the senators' offices receive thousands of calls. One of the senators says the president is \"going over our heads\" and appears on a Sunday news program to explain her concerns about the bill. A national poll shows the president's approval rating at 58 percent." },
      { cite: "Scenario written for this review.", kind: "scenario" },
    ] }],
  },
};

const lead = "Use the scenario to answer parts A, B, and C.";

export default {
  forms: [
    { id: "t27", name: "Topic 2.7 Quiz: Presidential Communication", group: "Unit 2: Interactions Among Branches of Government",
      items: [
        { id: "t27-m01", skill: "u2", type: "mcq", set: "t27-s1", topic: "2.7", difficulty: "easy",
          question: "Kennedy gave this address on national radio and television. What was its main purpose?",
          choices: [
            "To build public support for civil rights laws he would ask Congress to pass",
            "To announce an executive order ending segregation in every state at once",
            "To explain why he disagreed with a recent Supreme Court civil rights ruling",
            "To ask the states to call a convention to amend the Constitution",
          ],
          why: [
            "Correct. Kennedy tells the nation he will \"ask the Congress of the United States to act,\" using the bully pulpit to build pressure for legislation.",
            "Kennedy asks Congress for a law; he does not announce an order that ends segregation everywhere.",
            "Kennedy praises the federal judiciary for upholding equality \"in a series of forthright cases.\"",
            "Kennedy calls for legislation, not a constitutional convention.",
          ],
          answer: 0 },
        { id: "t27-m02", skill: "u2", type: "mcq", set: "t27-s1", topic: "2.7", difficulty: "moderate",
          question: "Why does Kennedy describe what the judiciary and the executive branch have already done?",
          choices: [
            "To show that Congress is the branch that has not yet fully acted",
            "To argue that the courts have refused to protect equal treatment",
            "To claim the executive branch alone can end racial segregation",
            "To suggest that Congress lacks the power to pass civil rights laws",
          ],
          why: [
            "Correct. He says the courts upheld the principle and the executive adopted it, while Congress has made a commitment \"it has not fully made in this century.\"",
            "Kennedy says the judiciary \"has upheld that proposition,\" the opposite of refusing.",
            "Kennedy lists executive steps but asks Congress to act, so he does not claim the executive can do it alone.",
            "Asking Congress to act assumes it has the power to do so.",
          ],
          answer: 0 },
        { id: "t27-m03", skill: "u2", type: "mcq", set: "t27-s1", topic: "2.7", difficulty: "difficult",
          question: "Kennedy's statement that \"legislation, I repeat, cannot solve this problem alone\" best reflects which use of the bully pulpit?",
          choices: [
            "Shaping public attitudes, not only pressing for a bill",
            "Using a formal power that Article II grants the president",
            "Threatening to veto bills that Congress passes too slowly",
            "Reporting to Congress on the state of the Union each year",
          ],
          why: [
            "Correct. By saying the problem \"must be solved in the homes of every American,\" Kennedy uses his platform to change how citizens think, a moral appeal beyond lawmaking.",
            "The bully pulpit is an informal power; the Constitution does not list speeches to the public.",
            "Kennedy makes no veto threat; he asks Congress to pass a law.",
            "This was a special televised address in June, not the State of the Union report to Congress.",
          ],
          answer: 0 },
        { id: "t27-m04", skill: "u2", type: "mcq", set: "t27-s2", topic: "2.7", difficulty: "moderate",
          question: "Which president had the largest gap between his highest and lowest approval?",
          choices: ["George W. Bush", "George H.W. Bush", "Jimmy Carter", "Ronald Reagan"],
          why: [
            "Correct. George W. Bush ranged from 90 percent to 25 percent, a gap of 65 points.",
            "George H.W. Bush ranged from 89 to 29 percent, a gap of 60 points.",
            "Jimmy Carter ranged from 75 to 28 percent, a gap of 47 points.",
            "Ronald Reagan ranged from 68 to 35 percent, a gap of 33 points.",
          ],
          answer: 0 },
        { id: "t27-m05", skill: "u2", type: "mcq", set: "t27-s2", topic: "2.7", difficulty: "moderate",
          question: "George H.W. Bush's highest approval came in February 1991, during the Persian Gulf War, and George W. Bush's came in September 2001, right after the terrorist attacks. These highs illustrate",
          choices: ["the rally-around-the-flag effect", "the honeymoon period early in a term", "the coattail effect on other candidates", "the lame-duck effect late in a term"],
          why: [
            "Correct. In a foreign crisis or attack, the public tends to unite behind the president, briefly raising approval.",
            "The honeymoon is the period of goodwill at the start of a term; both highs came later.",
            "The coattail effect is a popular candidate helping others on the ballot win.",
            "A lame duck is a president near the end of a term with weakened influence.",
          ],
          answer: 0 },
        { id: "t27-m06", skill: "u2", type: "mcq", set: "t27-s2", topic: "2.7", difficulty: "difficult",
          question: "Which conclusion about presidential persuasion is best supported by the table?",
          choices: [
            "Presidents cannot count on high approval lasting long enough to move Congress later.",
            "Presidents who held more press conferences kept their approval higher than others.",
            "Every president shown reached his lowest approval during his final year in office.",
            "A president's approval rises steadily during a term as he uses the bully pulpit.",
          ],
          why: [
            "Correct. Several highs and lows came close together (George H.W. Bush fell from 89 percent in 1991 to 29 percent in 1992), so public support that strengthens persuasion can fade quickly.",
            "The table gives no information about press conferences.",
            "Clinton's low came in June 1993 and Reagan's in January 1983, early in their terms.",
            "Several presidents had their highs early and their lows later, the opposite of a steady rise.",
          ],
          answer: 0 },
        { id: "t27-m07", skill: "u2", type: "mcq", topic: "2.7", difficulty: "easy",
          question: "Which statement describes the modern State of the Union address?",
          choices: [
            "The president uses it to present a legislative agenda to a national audience.",
            "The Constitution requires the president to deliver it in person every January.",
            "The Senate must approve the text before the address can be broadcast.",
            "The Speaker of the House delivers it on behalf of the president each year.",
          ],
          why: [
            "Correct. Presidents use the televised address to Congress to set out priorities and press Congress and the public to support them.",
            "Article II, Section 3 says only that the president shall \"from time to time\" give Congress information on the state of the Union; it sets no date or form.",
            "No approval is needed; the speech is the president's own.",
            "The president delivers it; the Speaker invites the president to address a joint session.",
          ],
          answer: 0 },
        { id: "t27-m08", skill: "u2", type: "mcq", topic: "2.7", difficulty: "moderate",
          question: "How has social media changed the president's ability to communicate with the public?",
          choices: [
            "Presidents can reach millions directly, without reporters filtering their words.",
            "Presidents must now have Congress approve messages before posting them online.",
            "Presidents speak to the public less often because the Hatch Act limits online posts.",
            "Presidents must route their public messages through the Speaker of the House.",
          ],
          why: [
            "Correct. Social media lets presidents bypass news organizations and speak to the public directly and often, strengthening the bully pulpit.",
            "No law requires congressional approval of presidential messages.",
            "The Hatch Act restricts political activity by federal employees; it does not limit the president's messages.",
            "Presidents speak for themselves; the Speaker leads the House.",
          ],
          answer: 0 },
        { id: "t27-ca1a", skill: "u2", type: "fr", set: "t27-s3", part: "Concept application", sub: "A", topic: "2.7", lead,
          prompt: "Describe the informal power the president uses in the scenario.",
          earns: "Describes the bully pulpit (going public): using her platform to speak directly to the public so citizens pressure members of Congress.",
          yes: ["The bully pulpit: she speaks directly to the public through a video and asks viewers to call senators, using public pressure to win votes.", "Going public: she goes around the senators to the voters so that their calls push the senators to support the bill."],
          no: ["\"She used social media.\" This names a tool without describing the power.", "\"Executive order.\" She issued no order."],
          example: "The president uses the bully pulpit. Instead of bargaining privately, she speaks directly to the public in a video and asks people to call two undecided senators, so public pressure pushes them to vote for her bill.",
          notExample: "The president uses her power as head of state to represent the country." },
        { id: "t27-ca1b", skill: "u2", type: "fr", set: "t27-s3", part: "Concept application", sub: "B", topic: "2.7", lead,
          prompt: "Explain how the president's approval rating could affect whether her strategy works.",
          earns: "Explains that high approval (58 percent) makes senators more likely to respond to public pressure, since opposing a popular president is riskier; low approval would weaken it.",
          yes: ["With 58 percent approval, many voters trust her, so senators worry that opposing her will cost them support at home.", "A popular president's appeals produce more calls and more pressure; if her rating were low, senators could ignore the video."],
          no: ["\"Her approval is 58 percent.\" Restating the number does not explain its effect.", "\"Approval ratings measure popularity.\" A definition alone does not earn the point."],
          example: "Her 58 percent approval means most of the public views her favorably, so her request leads many people to call and makes senators fear political costs for opposing her. If her approval were low, fewer people would act on her request, and senators would feel safe resisting.",
          notExample: "Approval ratings go up and down over a president's term." },
        { id: "t27-ca1c", skill: "u2", type: "fr", set: "t27-s3", part: "Concept application", sub: "C", topic: "2.7", lead,
          prompt: "Explain how members of Congress can respond to limit the effect of the president's message.",
          earns: "Explains a real response, such as members using their own media appearances, town halls, or committee hearings to make their case to constituents, or relying on their independent electoral base.",
          yes: ["Like the senator on the Sunday program, members can use their own media to explain their views to constituents and answer the president's case.", "Members can hold hearings that question the bill's effects, giving the public reasons to doubt the president's claims."],
          no: ["\"Congress can ban the video.\" The First Amendment and separation of powers prevent that.", "\"They can ignore it.\" Ignoring is not explained as a response that limits the message."],
          example: "Members of Congress can go public too. The senator who appeared on a Sunday news program explained her concerns to her own voters, who elect her separately from the president. By making their own case, members can reduce the pressure the president's video creates.",
          notExample: "Congress can respond because it is a separate branch from the president." },
      ] },
  ],
};

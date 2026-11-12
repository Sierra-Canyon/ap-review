// AP Gov topic quiz 5.13: changing media: newspaper and online publishing jobs, news influencers, Reno v. ACLU on the internet, and partisan media.
import { lines } from "../../plot.js";

// BLS, The Economics Daily, April 3, 2017: January employment, in thousands.
const jobs = {
  years: ["2001", "2004", "2007", "2010", "2013", "2016"],
  paper: [411.8, 375.3, 354.0, 258.3, 218.1, 182.6],
  web: [null, null, 66.6, 85.8, 133.3, 193.7],
};
const k = (v) => (v === null ? "Not in this series" : v.toFixed(1));

const M = (n, difficulty, question, choices, why, set) => ({ id: "t513-m0" + n, skill: "u5", type: "mcq", topic: "5.13", ...(set ? { set: "t513-" + set } : {}), difficulty, question, choices, why, answer: 0 });

export const sets = {
  "t513-s1": {
    id: "t513-s1", name: "Jobs in newspaper and internet publishing, 2001 to 2016", intro: "Use the graph and table below to answer the questions that follow.", label: "Chart",
    sources: [{ title: "Chart", blocks: [
      { svg: lines({ labels: jobs.years, series: [{ name: "Newspapers", values: jobs.paper, dy: 10 }, { name: "Internet", values: jobs.web, dy: -8 }], y: [0, 450], step: 50, yname: "Thousands of jobs", width: 560, right: 100,
        alt: "Line graph of employment in January of each year shown, in thousands. Newspaper publishers: 2001, 411.8; 2004, 375.3; 2007, 354.0; 2010, 258.3; 2013, 218.1; 2016, 182.6. Internet publishing and web search portals: 2007, 66.6; 2010, 85.8; 2013, 133.3; 2016, 193.7." }),
        caption: "Employment in newspaper publishing and in internet publishing and web search portals, January of selected years, 2001 to 2016, in thousands. The internet series begins in 2007 under this industry definition; 2016 figures are preliminary." },
      { table: { head: ["January", "Newspaper publishers (thousands)", "Internet publishing and web search portals (thousands)"], rows: jobs.years.map((y, i) => [y, k(jobs.paper[i]), k(jobs.web[i])]) } },
      { cite: "U.S. Bureau of Labor Statistics, \"Newspaper publishers lose over half their employment from January 2001 to September 2016,\" The Economics Daily, April 3, 2017 (Current Employment Statistics data).", url: "https://www.bls.gov/opub/ted/2017/newspaper-publishers-lose-over-half-their-employment-from-january-2001-to-september-2016.htm", kind: "data" },
    ] }],
  },
  "t513-s2": {
    id: "t513-s2", name: "Who gets news from news influencers, 2024", intro: "Use the table below to answer the questions that follow.", label: "Table",
    sources: [{ title: "Table", blocks: [
      { table: { head: ["Group of U.S. adults", "Regularly get news from news influencers on social media (%)"], rows: [
        ["All adults", "21"], ["Ages 18 to 29", "37"], ["Ages 65 and older", "7"],
        ["Republicans and Republican leaners", "21"], ["Democrats and Democratic leaners", "22"],
        ["Lower income", "26"], ["Middle income", "21"], ["Higher income", "16"],
      ] } },
      { p: "The survey described news influencers as \"individuals who have a large following on social media and often post about news or political or social issues.\" Among adults who get news from them, 65 percent said news influencers had helped them better understand current events and civic issues." },
      { cite: "Pew Research Center, \"Americans' experiences with social media news influencers,\" November 18, 2024 (survey of more than 10,000 U.S. adults, July and August 2024).", url: "https://www.pewresearch.org/journalism/2024/11/18/americans-experiences-with-social-media-news-influencers/", kind: "data" },
    ] }],
  },
  "t513-s3": {
    id: "t513-s3", name: "Reno v. ACLU on the internet as a medium", intro: "Use the passage below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "Finally, unlike the conditions that prevailed when Congress first authorized regulation of the broadcast spectrum, the Internet can hardly be considered a \"scarce\" expressive commodity. It provides relatively unlimited, low-cost capacity for communication of all kinds. ... This dynamic, multifaceted category of communication includes not only traditional print and news services, but also audio, video, and still images, as well as interactive, real-time dialogue. Through the use of chat rooms, any person with a phone line can become a town crier with a voice that resonates farther than it could from any soapbox. Through the use of Web pages, mail exploders, and newsgroups, the same individual can become a pamphleteer." },
      { cite: "Justice John Paul Stevens, opinion of the Court, Reno v. American Civil Liberties Union, 521 U.S. 844 (1997). The broadcast spectrum is the range of radio frequencies that stations use; a mail exploder is an early email list.", url: "https://supreme.justia.com/cases/federal/us/521/844/", kind: "primary" },
    ] }],
  },
  "t513-s4": {
    id: "t513-s4", name: "A council race without a newspaper ad", intro: "Use the scenario to answer parts A, B, and C.",
    sources: [{ title: "Scenario", blocks: [
      { p: "Devon Price, 27, runs for city council in Harlow. Instead of buying newspaper or radio ads, Price posts short videos on several social media apps and appears on two local podcasts whose hosts openly support Price's party. A survey of Harlow voters finds that residents under 35 learned about the race mostly from social media, while residents over 60 learned about it mostly from local television. Several older residents say they never heard of Price. A story that falsely claims Price's opponent wants to close the city's parks spreads widely online before the local television station reports that it is untrue." },
      { cite: "Scenario written for this review.", kind: "scenario" },
    ] }],
  },
};

export default {
  forms: [
    { id: "t513", name: "Topic 5.13 Quiz: Changing Media", group: "Unit 5: Political Participation",
      items: [
        M(1, "easy", "Which statement is supported by the graph and table?",
          ["Newspaper publishing jobs fell by more than half from 2001 to 2016.", "Internet publishing jobs passed newspaper jobs by January 2013.", "Newspaper publishing jobs rose between January 2007 and 2010.", "Internet publishing jobs fell in the years after January 2010."],
          ["Correct. Newspaper jobs fell from 411.8 thousand in 2001 to 182.6 thousand in 2016, a drop of more than half.",
           "In 2013 there were 133.3 thousand internet jobs and 218.1 thousand newspaper jobs.",
           "Newspaper jobs fell from 354.0 thousand to 258.3 thousand.",
           "Internet jobs rose from 85.8 thousand in 2010 to 193.7 thousand in 2016."], "s1"),
        M(2, "difficult", "A writer uses the chart as proof that news reporting simply moved from print to the internet. Which limit of the data most weakens that claim?",
          ["The internet category counts all web publishing and search jobs, not only news jobs.", "The chart counts newspaper jobs only in the largest cities, not in small towns.", "The data come from a survey of newspaper readers rather than of employers.", "The chart ends before social media sites had begun to carry political news."],
          ["Correct. Internet publishing and web search portals include search engines and many kinds of websites, so the rise in those jobs does not show how many reporters work online.",
           "The BLS data cover newspaper publishers nationwide.",
           "The data come from the BLS survey of employers' payrolls, not from readers.",
           "By 2016, social media sites were already major sources of political news."], "s1"),
        M(3, "easy", "According to the table, which group was most likely to get news regularly from news influencers?",
          ["Adults ages 18 to 29", "Lower-income adults", "Democrats and leaners", "Adults 65 and older"],
          ["Correct. 37 percent of adults ages 18 to 29 regularly got news from news influencers, the highest share shown.",
           "Lower-income adults were at 26 percent, below the youngest adults.",
           "Democrats and leaners were at 22 percent.",
           "Adults 65 and older were the lowest group shown, at 7 percent."], "s2"),
        M(4, "moderate", "Which conclusion is best supported by the table and your knowledge of changing media?",
          ["Many young people get news from individuals outside news outlets.", "News influencers reach far more members of one party than of the other.", "Most American adults now get their news mainly from news influencers.", "Older adults trust news influencers more than younger adults do."],
          ["Correct. More than a third of adults under 30 regularly get news from influencers on social media, which fits the broader shift of younger people away from newspapers and television toward individual creators online.",
           "Republicans (21 percent) and Democrats (22 percent) were nearly the same.",
           "21 percent of all adults regularly got news from influencers, far from most.",
           "The table measures use, not trust, and older adults used influencers far less."], "s2"),
        M(5, "moderate", "Why does it matter that the Court calls the internet not a \"scarce\" medium?",
          ["Limited airwaves were why broadcast content could be regulated more than print.", "Scarcity means the internet must be licensed the way radio and television stations are.", "Scarcity means online speech deserves less protection than newspapers receive.", "Scarcity was the reason only government agencies could publish on the early internet."],
          ["Correct. The government licenses broadcasters and has regulated their content because there are only so many frequencies. Since the internet has no such limit, the Court gave online speech full First Amendment protection, like print.",
           "The Court's point is the opposite: without scarcity, there is no reason to license internet speakers.",
           "The Court held that online speech gets full protection, not less.",
           "Anyone could publish online, as the passage's town crier and pamphleteer show."], "s3"),
        M(6, "moderate", "The Court's description of a \"town crier\" and a \"pamphleteer\" best supports which claim about changing media?",
          ["Individuals can reach large audiences without traditional gatekeepers.", "News organizations now control more of the information that the public receives.", "The internet has reduced the number of voices taking part in political debate.", "Online speakers must have a license before they may reach a wide audience."],
          ["Correct. The Court says any person with a phone line can be heard \"farther than it could from any soapbox,\" so ordinary people can publish without editors or broadcasters deciding what reaches the public.",
           "The passage describes power moving to individuals, not to news organizations.",
           "The passage describes many more voices, not fewer.",
           "The Court stresses low cost and open access. No license is required."], "s3"),
        M(7, "easy", "When people choose news sources that match their own political views, this is called",
          ["selective exposure", "agenda setting", "the fairness doctrine", "investigative reporting"],
          ["Correct. Selective exposure is seeking out information that fits one's existing beliefs, which the many partisan outlets of today make easy.",
           "Agenda setting is the media's influence over which issues the public considers important.",
           "The fairness doctrine was a former FCC rule requiring broadcasters to cover controversial issues with contrasting views.",
           "Investigative reporting is in-depth reporting that uncovers wrongdoing."]),
        M(8, "moderate", "After the Federal Communications Commission stopped enforcing the fairness doctrine in 1987, which change in the media followed?",
          ["Talk radio shows with one-sided political commentary spread rapidly.", "Networks had to give equal airtime to all political parties' views.", "Newspapers became subject to FCC licensing for the first time.", "Cable channels were barred from airing political opinion programs."],
          ["Correct. Without a rule requiring balance, stations could air programs with a single point of view, and nationally syndicated political talk radio grew quickly in the late 1980s and 1990s.",
           "Ending the doctrine removed a balance requirement; it did not add one.",
           "The FCC licenses broadcasters, not newspapers.",
           "No such ban exists. Cable opinion programs grew in the same years."]),
        { id: "t513-ca1a", skill: "u5", type: "fr", set: "t513-s4", part: "Concept application", sub: "A", topic: "5.13",
          lead: "Use the scenario to answer parts A, B, and C.",
          prompt: "Describe one change in the media shown in the scenario.",
          earns: "Describes a change shown: candidates reaching voters through social media and podcasts instead of newspapers, partisan hosts, generational differences in news sources, or the fast spread of false stories online.",
          yes: ["Price campaigns through social media videos and podcasts instead of buying newspaper or radio ads.", "Younger voters get political news mostly from social media, while older voters still rely on local television."],
          no: ["\"Media is different now\" does not earn the point.", "\"Price is young\" does not describe a change in the media."],
          example: "Price reaches voters through short social media videos and local podcasts rather than newspaper or radio ads. Candidates can now speak to voters directly online without paying traditional outlets.",
          notExample: "Price is running for city council." },
        { id: "t513-ca1b", skill: "u5", type: "fr", set: "t513-s4", part: "Concept application", sub: "B", topic: "5.13",
          lead: "Use the scenario to answer parts A, B, and C.",
          prompt: "Explain how the generational difference in news sources could affect the election.",
          earns: "Explains that because younger and older voters use different sources, a candidate who campaigns mainly on social media reaches younger voters but not older voters, who vote at higher rates, which could hurt that candidate.",
          yes: ["Older residents, who vote at higher rates, mostly watch local TV, so Price's social media campaign misses many likely voters and could cost Price the race.", "Each age group hears about different candidates and issues, so voters of different ages may judge the race on different information."],
          no: ["\"Young people like social media\" does not earn the point without an effect on the election.", "\"Older people watch TV\" alone does not earn the point."],
          example: "Younger voters learn about the race on social media, where Price campaigns, while older voters rely on local television, where Price buys no ads. Older citizens vote at much higher rates, so Price's strategy reaches the group least likely to vote and leaves many likely voters, some of whom have never heard of Price, to the opponent.",
          notExample: "Age matters in elections." },
        { id: "t513-ca1c", skill: "u5", type: "fr", set: "t513-s4", part: "Concept application", sub: "C", topic: "5.13",
          lead: "Use the scenario to answer parts A, B, and C.",
          prompt: "Explain one concern raised by the way the false story spread.",
          earns: "Explains that online platforms let false information spread without the checking of traditional gatekeepers, so voters may act on misinformation before it is corrected, especially if they rely on partisan sources.",
          yes: ["The false claim reached many voters online before the TV station corrected it, so some may vote based on misinformation.", "Without editors checking facts before posting, false stories can spread faster than corrections, which reach fewer people."],
          no: ["\"Fake news is bad\" does not earn the point without explaining the effect on voters.", "\"The station should report faster\" does not identify a concern about changing media."],
          example: "Social media lets stories spread without the fact-checking that editors at traditional outlets provide. The false claim about the parks reached many voters before the television station showed it was untrue, and voters who get news from partisan podcasts or social feeds may never see the correction, so they could vote based on misinformation.",
          notExample: "People should read the news." },
      ] },
  ],
};

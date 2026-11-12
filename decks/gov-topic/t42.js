// Topic 4.2 Quiz: Political Socialization
// Sources: Pew Research Center global survey on views of American society and democracy (spring 2021), and a scenario.
import { bars } from "../../plot.js";

// Pew Research Center, spring 2021, medians across 16 publics outside the United States
const demo = { labels: ["Is a good example", "Used to be, but not recently", "Has never been"], vals: [17, 57, 23] };

export const sets = {
  "t42-s1": {
    id: "t42-s1", name: "How other countries see American democracy and culture, 2021", intro: "Use the chart and table below to answer the questions that follow.", label: "Chart",
    sources: [
      { title: "Chart", blocks: [
        { svg: bars({ labels: demo.labels, values: demo.vals, y: [0, 70], step: 10, yname: "Percent (median of 16 publics)", width: 560,
          alt: "Bar chart of views of democracy in the United States, median of 16 publics outside the United States, spring 2021: is a good example for others to follow, 17 percent; used to be a good example but has not been in recent years, 57 percent; has never been a good example, 23 percent." }),
          caption: "Views of democracy in the United States as an example for other countries, median percent across 16 publics in Europe, Asia, and the Pacific, surveyed March 12 to May 26, 2021" },
        { table: { head: ["Survey finding (median of 16 publics)", "Percent"], rows: [
          ["U.S. democracy is a good example for others to follow", "17"],
          ["U.S. democracy used to be a good example but has not been in recent years", "57"],
          ["U.S. democracy has never been a good example", "23"],
          ["Rate U.S. entertainment (movies, music, television) as the best or above average", "71"],
          ["Rate U.S. technological achievements as the best or above average", "72"],
        ] } },
        { cite: "Pew Research Center, \"What People Around the World Like and Dislike About American Society and Politics,\" November 1, 2021 (surveys in 16 publics, March 12 to May 26, 2021).", url: "https://www.pewresearch.org/global/2021/11/01/what-people-around-the-world-like-and-dislike-about-american-society-and-politics/", kind: "data" },
      ] },
    ],
  },
  "t42-s2": {
    id: "t42-s2", name: "A voter's views over time", intro: "Use the scenario below to answer parts A, B, and C.",
    sources: [
      { title: "Scenario", blocks: [
        { p: "Jordan grew up in a small mill town where both of his parents belonged to a labor union and voted for Democratic candidates in every election. At dinner, his family often talked about the union's fights for higher wages. At a state university, Jordan joined a business club and became close friends with classmates who favored lower taxes and fewer rules on business. After college he moved to a large city and opened a small restaurant. Ten years later, he describes himself as an independent who agrees with Democrats on labor rights but with Republicans on taxes and regulation. Candidates in his city now reach him mostly through ads on social media." },
        { cite: "Scenario written for this review.", kind: "scenario" },
      ] },
    ],
  },
};

const S = "u4", T = "4.2";

export default {
  forms: [
    { id: "t42", name: "Topic 4.2 Quiz: Political Socialization", group: "Unit 4: American Political Ideologies and Beliefs",
      items: [
        { id: "t42-m01", skill: S, type: "mcq", set: "t42-s1", topic: T, difficulty: "easy",
          question: "Which statement is supported by the data?",
          choices: [
            "A median of 57 percent said U.S. democracy used to be a good example but has not been recently.",
            "Most people in the 16 publics said U.S. democracy is a good example for other countries today.",
            "Fewer people rated U.S. technology highly than rated U.S. entertainment highly in the 16 publics.",
            "About one in four in the 16 publics said U.S. democracy has always been a good example to follow.",
          ],
          why: [
            "Correct. The middle bar and the second table row show a median of 57 percent choosing \"used to be a good example but has not been in recent years.\"",
            "Only 17 percent said U.S. democracy is a good example now, far from most.",
            "Technology was rated slightly higher (72 percent) than entertainment (71 percent), so this reverses the data.",
            "The 23 percent figure is for \"has never been a good example,\" the opposite of always.",
          ],
          answer: 0 },
        { id: "t42-m02", skill: S, type: "mcq", set: "t42-s1", topic: T, difficulty: "moderate",
          question: "Which conclusion about cultural globalization do the data best support?",
          choices: [
            "American culture and products can stay popular abroad even as views of U.S. democracy fall.",
            "Foreign views of U.S. democracy rise and fall with views of American movies and music.",
            "Few people outside the United States come into contact with American cultural products.",
            "Watching American entertainment has led people abroad to see U.S. democracy as a model.",
          ],
          why: [
            "Correct. About seven in ten rated U.S. entertainment and technology highly, while only 17 percent called U.S. democracy a good example. Cultural influence and political admiration can move apart.",
            "The data show a gap between the two, not views moving together: high ratings for entertainment, low ratings for democracy.",
            "High ratings for American entertainment and technology show wide contact with American culture, not little.",
            "This is a causal claim the survey cannot test, and the low share calling U.S. democracy a good example points the other way.",
          ],
          answer: 0 },
        { id: "t42-m03", skill: S, type: "mcq", set: "t42-s1", topic: T, difficulty: "moderate",
          question: "Which additional information would most help a reader judge whether the results fairly represent opinion in each of the 16 publics?",
          choices: [
            "How each public's sample was chosen and how many people were in it",
            "How many American films were shown in each public in the past year",
            "How many Americans traveled to each of the 16 publics in 2021",
            "Which party controlled the U.S. Congress when the surveys were taken",
          ],
          why: [
            "Correct. Whether a survey represents a population depends on a random, representative sample of adequate size, so the sampling method and sample size are what a reader needs.",
            "Film showings might help explain the results, but they say nothing about whether the samples represent each public.",
            "Travel by Americans is unrelated to whether the people surveyed represent their country's adults.",
            "Party control of Congress might help explain views of U.S. democracy, but it does not tell whether the samples were representative.",
          ],
          answer: 0 },
        { id: "t42-m04", skill: S, type: "mcq", topic: T, difficulty: "easy",
          question: "Maya's parents are both active Republicans who talk about politics at dinner and take her with them to vote. When Maya turns 18, she registers as a Republican. Which agent of political socialization most likely shaped her choice?",
          choices: ["Family", "Peer groups", "Mass media", "Religious institutions"],
          why: [
            "Correct. Family is usually the earliest and strongest agent of socialization, and children often adopt their parents' party identification.",
            "Peers can shape views, especially in the teen years, but the scenario describes her parents' influence.",
            "The scenario says nothing about news or social media shaping Maya's views.",
            "The scenario does not mention a church or other religious group.",
          ],
          answer: 0 },
        { id: "t42-m05", skill: S, type: "mcq", topic: T, difficulty: "easy",
          question: "Which of the following best describes political socialization?",
          choices: [
            "The process through which people form their political beliefs and values",
            "The belief that a person's own actions can influence what government does",
            "The movement of voters from one major party to the other over many years",
            "The spread of goods, ideas, and culture across national borders over time",
          ],
          why: [
            "Correct. Political socialization is the lifelong process by which family, school, peers, media, religion, and experiences shape a person's political beliefs and values.",
            "This defines political efficacy, a sense of being able to influence government.",
            "This describes partisan realignment or dealignment, not socialization.",
            "This defines globalization, which can be one influence on socialization but is not the process itself.",
          ],
          answer: 0 },
        { id: "t42-m06", skill: S, type: "mcq", topic: T, difficulty: "moderate",
          question: "A high school requires every senior to pass a civics test and to attend one meeting of the local school board. Which outcome is the requirement most likely meant to produce?",
          choices: [
            "Students who believe they can take part in government and expect to do so",
            "Students who take on the party affiliation of their civics teachers",
            "Students who rely on social media as their main source of political news",
            "Students who join the political party that controls the school board",
          ],
          why: [
            "Correct. Schools act as agents of socialization by teaching how government works and giving students practice with it, which builds political efficacy and habits of participation.",
            "Civics courses aim to teach the process, not to pass on a teacher's party, and the requirement says nothing about party.",
            "Attending a board meeting and passing a test do not push students toward social media for news.",
            "The requirement is to attend a meeting, not to join a party, and it favors no party.",
          ],
          answer: 0 },
        { id: "t42-m07", skill: S, type: "mcq", topic: T, difficulty: "moderate",
          question: "Which example best shows political ideas flowing from other countries into the United States?",
          choices: [
            "States adopting the secret, government-printed ballot first used in Australia",
            "New nations copying parts of the U.S. Bill of Rights into their constitutions",
            "American movies and music drawing large audiences in Europe and in Asia",
            "U.S. companies opening factories abroad to lower the cost of producing goods",
          ],
          why: [
            "Correct. Beginning in 1888, American cities and states adopted the secret ballot printed by the government, known as the Australian ballot. It shows that influence runs both ways in a globalized world.",
            "This shows U.S. ideals spreading abroad, the opposite direction from the one the question asks about.",
            "This is American culture spreading outward, not foreign ideas coming in.",
            "This is economic globalization moving U.S. business abroad, not political ideas entering the United States.",
          ],
          answer: 0 },
        { id: "t42-m08", skill: S, type: "mcq", topic: T, difficulty: "easy",
          question: "Which statement about political socialization is most accurate?",
          choices: [
            "Views formed in childhood can change as adults have new experiences.",
            "Socialization ends once a person turns 18 and is eligible to vote.",
            "Children usually adopt party views opposite to their parents' views.",
            "Only formal schooling, not family or friends, shapes political views.",
          ],
          why: [
            "Correct. Socialization is lifelong. Jobs, moves, marriage, and major events can change views formed in childhood.",
            "Socialization continues through adulthood, so it does not end at 18.",
            "Children more often share their parents' party identification than reject it.",
            "Family, peers, media, and religion all shape views alongside school.",
          ],
          answer: 0 },
        { id: "t42-ca1a", skill: S, type: "fr", set: "t42-s2", part: "Concept application", sub: "A", topic: T,
          lead: "Use the scenario to answer parts A, B, and C.",
          prompt: "Describe one agent of political socialization that shaped Jordan's views when he was young.",
          earns: "Names an agent of socialization from the scenario (family, or school and peers at the university) and describes how it shaped his views.",
          yes: [
            "Family: Jordan's union parents voted for Democrats and talked about fights for higher wages, which gave him his early support for labor rights.",
            "Peers at college: his friends in the business club favored lower taxes and fewer rules, which pulled his economic views toward Republican positions.",
          ],
          no: [
            "\"Family.\" (names an agent without describing how it shaped his views)",
            "\"Social media ads.\" (these reach him as an adult and the response does not show how they shaped his views)",
          ],
          example: "Jordan's family was an early agent of socialization. His parents were union members who voted for Democrats and talked at dinner about the union's fights for higher wages, so Jordan grew up seeing labor rights as important, a view he still holds.",
          notExample: "Jordan is an independent who owns a restaurant." },
        { id: "t42-ca1b", skill: S, type: "fr", set: "t42-s2", part: "Concept application", sub: "B", topic: T,
          lead: "Use the scenario to answer parts A, B, and C.",
          prompt: "Explain how Jordan's experiences as an adult changed the political views he learned as a child.",
          earns: "Explains that socialization continues in adulthood, linking an adult experience (college friends, opening a business, moving) to a change in his views (support for lower taxes and less regulation, independent identity).",
          yes: [
            "As a restaurant owner, Jordan pays business taxes and deals with regulations himself, so his own interests led him to favor Republican positions on taxes and rules while keeping his family's support for labor.",
            "College friends and a business club exposed him to arguments for lower taxes, and those new peers weakened his attachment to his parents' party, so he became an independent.",
          ],
          no: [
            "\"He changed his mind.\" (no experience linked to the change)",
            "\"He became a Republican.\" (inaccurate; he calls himself an independent)",
          ],
          example: "Political socialization does not stop in childhood. When Jordan opened his own restaurant, he began to pay business taxes and follow city rules himself, so his economic interests shifted his views toward lower taxes and less regulation. He kept his parents' support for labor rights but no longer identified with their party, which is why he now calls himself an independent.",
          notExample: "Adults change because they get older." },
        { id: "t42-ca1c", skill: S, type: "fr", set: "t42-s2", part: "Concept application", sub: "C", topic: T,
          lead: "Use the scenario to answer parts A, B, and C.",
          prompt: "Explain how a political campaign could use what it knows about agents of socialization to win the votes of young adults like Jordan.",
          earns: "Explains a specific campaign strategy tied to an agent of socialization (media, peers, family, school, workplace) and how it would reach or persuade young adults.",
          yes: [
            "Because young adults get much of their political information from social media, a campaign could run targeted ads and use online influencers their age, reaching them through the media agent that shapes their views.",
            "A campaign could recruit young volunteers to contact their own friends, since peers influence young adults and a message from a friend is more persuasive than one from a stranger.",
          ],
          no: [
            "\"The campaign should advertise.\" (no link to an agent of socialization or to young adults)",
            "\"The campaign could ask Jordan's parents to vote.\" (does not explain how this reaches young adults)",
          ],
          example: "Young adults like Jordan now learn about candidates mostly through social media, a powerful agent of socialization for their generation. A campaign could buy targeted ads on the platforms they use and recruit young volunteers to share its message with their own friends, so the message arrives through both the media and the peer groups that shape young adults' views.",
          notExample: "Campaigns want votes from everyone." },
      ] },
  ],
};

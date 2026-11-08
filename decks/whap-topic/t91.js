// Topic 9.1 Quiz: Advances in Technology and Exchange After 1900
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why, difficulty) => ({ id: "t91-m0" + n, skill: "u9", type: "mcq", set, topic: "9.1", reasoning, difficulty, question, choices, why, answer: 0 });
const Q = (sub, prompt, earns, yes, no, example, notExample) => ({ id: "t91-q1" + sub, skill: "u9", type: "fr", set: "t91-s3", part: "SAQ 1", sub, topic: "9.1", lead: SAQ, prompt, earns, yes, no, example, notExample });

export const sets = {
  "t91-s1": {
    id: "t91-s1", name: "Kennedy on the space effort, 1962", intro: ONE,
    sources: [{ title: "Source", blocks: [
      { p: "No man can fully grasp how far and how fast we have come, but condense, if you will, the 50,000 years of man's recorded history in a time span of but a half a century. ... Only five years ago man learned to write and use a cart with wheels. Christianity began less than two years ago. The printing press came this year, and then less than two months ago, during this whole 50-year span of human history, the steam engine provided a new source of power. ..." },
      { p: "Within these last 19 months at least 45 satellites have circled the earth. Some 40 of them were \"made in the United States of America\" and they were far more sophisticated and supplied far more knowledge to the people of the world than those of the Soviet Union. ... TIROS satellites have given us unprecedented warnings of hurricanes and storms, and will do the same for forest fires and icebergs. ..." },
      { p: "We choose to go to the moon. We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one which we intend to win, and the others, too. ..." },
      { p: "... the space effort itself, while still in its infancy, has already created a great number of new companies, and tens of thousands of new jobs. ..." },
      { cite: "John F. Kennedy, Address at Rice University on the Nation's Space Effort, Houston, Texas, September 12, 1962, as published by the John F. Kennedy Presidential Library and Museum. The Soviet Union had launched the first satellite, Sputnik, in 1957 and sent the first person into orbit, Yuri Gagarin, in 1961. American astronauts landed on the moon in July 1969. TIROS was a series of American weather satellites.", url: "https://www.jfklibrary.org/archives/other-resources/john-f-kennedy-speeches/rice-university-19620912", kind: "primary" },
    ] }],
  },
  "t91-s2": {
    id: "t91-s2", name: "The shipping container", intro: "Use the passage below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that a simple steel box did as much to globalize trade as any trade agreement. Before the 1950s, ships were loaded by gangs of dockworkers who carried sacks, barrels, and crates one at a time, and a ship could spend days or weeks in port. In 1956, the American trucking businessman Malcom McLean sent a ship carrying fifty-eight standard metal containers from New Jersey to Texas. Containers could be lifted by crane straight from trucks and trains onto ships and off again. By the 1970s, international standards for container sizes had spread around the world, and the cost of shipping goods across oceans fell sharply. Ports such as Singapore, Hong Kong, and later Shanghai grew into giant container hubs, while older ports and thousands of dockworkers' jobs disappeared. Cheap shipping made it possible for companies to make parts in one country and assemble them in another." },
      PRACTICE,
    ] }],
  },
  "t91-s3": {
    id: "t91-s3", name: "Mobile phones in Africa", intro: SAQ,
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that mobile phones changed daily life in Africa faster than any earlier technology. In 2000, most Africans had never made a telephone call; landlines were few and mostly in cities. Because mobile networks needed towers rather than wires to every home, they spread quickly, and by the late 2010s most adults in many African countries had a mobile phone. Farmers and fishers used phones to check prices in different markets before selling. In Kenya, a service called M-Pesa, launched in 2007, let people send and receive money by text message, and within a decade most Kenyan households used it. At the same time, phones were often used to spread rumors and false information, and many rural areas still lacked reliable electricity to charge them." },
      PRACTICE,
    ] }],
  },
};

export default {
  forms: [
    { id: "t91", name: "Topic 9.1 Quiz: Advances in Technology and Exchange After 1900", group: "Unit 9: Globalization",
      items: [
        // ===== Set 1: Kennedy =====
        M(1, "t91-s1", "Sourcing and situation", "Kennedy's comparison of American and Soviet satellites was most likely intended to",
          ["reassure Americans that the United States had overtaken early Soviet leads", "warn Americans that the Soviet Union still held a wide lead in space technology", "propose that the United States and the Soviet Union share their satellite data", "argue that weather satellites mattered more than sending astronauts to the moon"],
          ["Correct. After Sputnik (1957) and Gagarin (1961), he stresses that most satellites of the last 19 months were American and more sophisticated.",
            "He claims the opposite: that American satellites were more numerous and more sophisticated than Soviet ones.",
            "He describes a race he intends \"to win,\" not a plan to share data with the Soviet Union.",
            "He praises TIROS but declares \"We choose to go to the moon,\" so he does not rank weather satellites above it."],
          "difficult"),
        M(2, "t91-s1", "Contextualization", "The speech is best understood in the context of",
          ["Cold War rivalry, with technology as a measure of strength", "detente, when the superpowers signed arms limits such as SALT I", "decolonization, as new African states joined the United Nations", "the boom in commercial jet travel across the Atlantic after 1958"],
          ["Correct. The space race was part of the rivalry between the United States and the Soviet Union, each claiming its system produced better science.",
            "SALT I was signed in 1972, ten years after the speech, and Kennedy describes a race, not cooperation.",
            "Many African states did become independent around 1960, but the speech is about competition with the Soviet Union, not decolonization.",
            "Jet travel grew in these years, but Kennedy compares American and Soviet satellites, which points to the Cold War."],
          "moderate"),
        M(3, "t91-s1", "Claims and evidence in sources", "Kennedy's comparison of human history to fifty years is meant to show that",
          ["technological change had sped up enormously in recent times", "the steam engine was history's most important invention", "progress had been slow and steady across all of history", "religion had shaped human history more than technology had"],
          ["Correct. In his compressed timeline, most major inventions came in the last few \"months\" and \"weeks.\"",
            "He names the steam engine as one step in a fast-rising series, not as the most important invention.",
            "He argues the opposite: almost all change is crowded into the very end of his timeline.",
            "He mentions Christianity only as a marker of time, and his point is about the speed of technology."],
          "easy"),
        M(4, "t91-s1", "Causation", "Weather and communications satellites like those Kennedy described most directly contributed to which later development?",
          ["Live television and telephone links across oceans", "The spread of the telegraph to every inhabited continent", "The replacement of ocean shipping by air freight in most trade", "The spread of high-yield wheat and rice to South Asia"],
          ["Correct. From the 1960s, communications satellites carried telephone calls and live television around the world.",
            "Undersea telegraph cables reached every inhabited continent in the 1800s, long before satellites.",
            "Most goods still cross oceans by ship; air freight carries only a small share of world trade by weight.",
            "The Green Revolution came from plant breeding, fertilizer, and irrigation, not from satellites."],
          "moderate"),
        // ===== Set 2: Containers =====
        M(5, "t91-s2", "Causation", "According to the passage, containers lowered the cost of shipping mainly because they",
          ["could be moved by crane between trucks, trains, and ships", "let dockworkers carry more sacks and barrels each trip", "were built to an international size standard set in 1956", "let ocean ships sail directly to inland cities by river"],
          ["Correct. Crane loading replaced slow loading by hand, so ships spent far less time in port.",
            "The passage says containers replaced the gangs who carried sacks and barrels by hand.",
            "McLean's first voyage was in 1956; the passage says international size standards spread by the 1970s.",
            "The passage says containers moved from ships onto trucks and trains, not that ships sailed inland."],
          "moderate"),
        M(6, "t91-s2", "Developments and processes", "The passage best illustrates which feature of globalization after 1950?",
          ["Production spread across countries in global supply chains.", "Trade shifted from ocean shipping to air freight.", "Trade agreements replaced technology as the driver of trade.", "Manufacturing gathered in the older ports of Europe and America."],
          ["Correct. The passage says cheap shipping let companies make parts in one country and assemble them in another.",
            "The passage is about cheaper ocean shipping, which stayed central to trade.",
            "The passage argues the reverse: a steel box did as much as any trade agreement.",
            "The passage says older ports declined while Asian ports such as Singapore and Shanghai grew."],
          "moderate"),
        M(7, "t91-s2", "Comparison", "The effect of the shipping container on trade is most similar to the effect of which earlier technology?",
          ["The steamship, which cut the time and cost of ocean freight in the 1800s", "The telegraph, which cut the time needed to send news across oceans in the 1800s", "The printing press, which cut the cost of copying books in the 1400s", "The caravel, which let Portuguese sailors explore Africa's coast in the 1400s"],
          ["Correct. Like the container, the steamship made moving goods across oceans faster and cheaper, which expanded world trade.",
            "The telegraph sped up communication, but the container's effect was on moving goods, not messages.",
            "The printing press lowered the cost of spreading ideas, not of moving goods across oceans.",
            "The caravel opened new routes for exploration; it did not sharply lower the cost of moving cargo."],
          "difficult"),
        M(8, "t91-s2", "Claims and evidence in sources", "Which evidence from the passage best shows that the container created losers as well as winners?",
          ["Older ports and thousands of dockworkers' jobs disappeared.", "Ports such as Singapore and Hong Kong grew into giant hubs.", "Companies made parts in one country and assembled them in another.", "Before the 1950s, ships could spend days or weeks in port."],
          ["Correct. Workers and ports that depended on loading by hand lost out.",
            "This shows winners, not losers.",
            "This shows how companies benefited from cheap shipping.",
            "This describes the old system, not who lost when it changed."],
          "easy"),
        // ===== SAQ: Mobile phones =====
        Q("a", "Identify ONE way mobile phones changed economic life in Africa, as described in the passage.",
          "The response names one change from the passage.",
          ["Farmers and fishers checked prices in different markets before selling.", "M-Pesa let people send and receive money by text message.", "Phones spread quickly because networks needed towers, not wires to every home."],
          ["\"Phones spread rumors.\" This is a social effect, not economic.", "\"Rural areas lacked electricity.\" This is a limit.", "\"Landlines were common in 2000.\" The passage says the opposite."],
          "The passage says farmers and fishers used phones to check prices in different markets before selling their goods.",
          "Phones changed things."),
        Q("b", "Explain ONE reason mobile phones spread faster than landline telephones in many developing countries.",
          "The response explains a specific reason.",
          ["Mobile networks needed only towers, which were cheaper and faster to build than wires to every home.", "Phones and prepaid plans became cheap enough for people with low incomes.", "Governments and private companies competed to build networks once markets were opened."],
          ["\"Phones are popular.\" This explains nothing.", "\"Landlines were banned.\" This is false.", "\"Every home had electricity.\" The passage says many did not."],
          "Building landlines meant running wires to every village and home, which was very expensive in rural areas. Mobile networks needed only towers, so companies could reach many people quickly and cheaply.",
          "Mobile phones were better."),
        Q("c", "Explain ONE way a communication technology developed after 1900 OTHER than the mobile phone changed the world.",
          "The response names a specific technology and explains an effect.",
          ["Radio let governments and movements reach mass audiences, as with leaders' broadcasts in the 1930s and 1940s.", "Television brought distant events, such as the Vietnam War, into homes and shaped public opinion.", "The internet allowed instant communication and trade across the world."],
          ["\"The mobile phone.\" The prompt asks for another technology.", "\"The telegraph.\" It was developed before 1900.", "\"Technology changed things.\" This names no technology."],
          "Television brought images of the Vietnam War into American homes in the 1960s. Scenes of fighting and casualties helped turn many Americans against the war.",
          "Technology changed the world."),
      ] },
  ],
};

// Topic 9.1 Quiz: Advances in Technology and Exchange After 1900
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why) => ({ id: "t91-m0" + n, skill: "u9", type: "mcq", set, topic: "9.1", reasoning, question, choices, why, answer: 0 });
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
          ["reassure Americans that the United States was ahead in the space race despite early Soviet successes", "admit that the Soviet Union led in space", "propose a joint American and Soviet moon landing", "end the American space program"],
          ["Correct. After Sputnik and Gagarin, he stresses that American satellites were more numerous and sophisticated.",
            "He claims American satellites were superior.",
            "He describes a race he intends \"to win.\"",
            "He calls for expanding it."]),
        M(2, "t91-s1", "Contextualization", "The speech is best understood in the context of",
          ["Cold War competition, in which technology became a measure of each system's strength", "the end of the Cold War", "the First World War", "the founding of the United Nations"],
          ["Correct. The space race was part of the rivalry between the superpowers.",
            "That came in 1991.",
            "That ended in 1918.",
            "That came in 1945."]),
        M(3, "t91-s1", "Claims and evidence in sources", "Kennedy's comparison of human history to fifty years is meant to show that",
          ["technological change had sped up enormously in recent times", "technology had changed little since ancient times", "the printing press was the most recent invention", "human history was only fifty years long"],
          ["Correct. In his compressed timeline, most major inventions came in the last few \"months.\"",
            "He argues the opposite.",
            "He lists many later inventions.",
            "He uses the fifty years as a comparison."]),
        M(4, "t91-s1", "Causation", "Weather and communications satellites like those Kennedy described most directly contributed to which later development?",
          ["Faster global communication, such as live television broadcasts and instant telephone links across oceans", "The end of air travel", "The decline of international trade", "The disappearance of radio"],
          ["Correct. Satellites carried telephone calls and live television around the world from the 1960s.",
            "Air travel grew.",
            "Trade grew.",
            "Radio continued."]),
        // ===== Set 2: Containers =====
        M(5, "t91-s2", "Causation", "According to the passage, containers lowered the cost of shipping mainly because they",
          ["could be moved by crane directly between trucks, trains, and ships", "were made of wood", "required more dockworkers", "were used only on rivers"],
          ["Correct. Loading by crane replaced slow loading by hand.",
            "They were steel boxes.",
            "They reduced dockworkers' jobs.",
            "They crossed oceans."]),
        M(6, "t91-s2", "Developments and processes", "The passage best illustrates which feature of globalization after 1950?",
          ["Production spread across countries as companies made parts in one place and assembled them in another", "Countries stopped trading with one another", "All manufacturing moved back to Europe", "Ships became less important to trade"],
          ["Correct. Cheap shipping supported global supply chains.",
            "Trade grew.",
            "Manufacturing spread, especially to Asia.",
            "Container ships became central."]),
        M(7, "t91-s2", "Comparison", "The effect of the shipping container on trade is most similar to the effect of which earlier technology?",
          ["The steamship in the 1800s, which made ocean transport faster and cheaper", "The printing press", "The stirrup", "The telegraph's effect on farming"],
          ["Correct. Both sharply cut the cost and time of moving goods across oceans.",
            "That spread information, not cargo.",
            "That changed warfare on horseback.",
            "The telegraph carried messages."]),
        M(8, "t91-s2", "Claims and evidence in sources", "Which evidence from the passage best shows that the container created losers as well as winners?",
          ["Older ports and thousands of dockworkers' jobs disappeared.", "Singapore grew into a container hub.", "Shipping costs fell sharply.", "McLean shipped fifty-eight containers in 1956."],
          ["Correct. Workers and ports that depended on the old methods lost out.",
            "This shows a winner.",
            "This shows a benefit.",
            "This is an event."]),
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

// Topic 9.6 Quiz: Globalized Culture
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why) => ({ id: "t96-m0" + n, skill: "u9", type: "mcq", set, topic: "9.6", reasoning, question, choices, why, answer: 0 });
const Q = (sub, prompt, earns, yes, no, example, notExample) => ({ id: "t96-q1" + sub, skill: "u9", type: "fr", set: "t96-s3", part: "SAQ 1", sub, topic: "9.6", lead: SAQ, prompt, earns, yes, no, example, notExample });

export const sets = {
  "t96-s1": {
    id: "t96-s1", name: "García Márquez's Nobel lecture, 1982", intro: ONE,
    sources: [{ title: "Source", blocks: [
      { p: "... It is only natural that they insist on measuring us with the yardstick that they use for themselves, forgetting that the ravages of life are not the same for all, and that the quest of our own identity is just as arduous and bloody for us as it was for them. The interpretation of our reality through patterns not our own, serves only to make us ever more unknown, ever less free, ever more solitary. ..." },
      { p: "Latin America neither wants, nor has any reason, to be a pawn without a will of its own; nor is it merely wishful thinking that its quest for independence and originality should become a Western aspiration. However, the navigational advances that have narrowed such distances between our Americas and Europe seem, conversely, to have accentuated our cultural remoteness. Why is the originality so readily granted us in literature so mistrustfully denied us in our difficult attempts at social change? ..." },
      { cite: "Gabriel García Márquez, \"The Solitude of Latin America,\" Nobel Lecture, Stockholm, December 8, 1982, English translation as published by NobelPrize.org. García Márquez, a Colombian writer, was best known for the novel One Hundred Years of Solitude (1967), which sold tens of millions of copies in dozens of languages. In the lecture he spoke to a mainly European audience.", url: "https://www.nobelprize.org/prizes/literature/1982/marquez/lecture/", kind: "primary" },
    ] }],
  },
  "t96-s2": {
    id: "t96-s2", name: "Reggae goes global", intro: "Use the passage below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that reggae shows how music from a small country could reach the world after 1960. Reggae grew in the poor neighborhoods of Kingston, Jamaica, in the late 1960s, blending local styles with American rhythm and blues heard on radio. Many of its songs spoke of poverty, African identity, and the Rastafari faith. Bob Marley and the Wailers signed with a British record company, Island Records, and their albums sold across Europe and North America in the 1970s. Marley performed at Zimbabwe's independence celebration in 1980, and reggae became popular from West Africa to New Zealand, where local musicians wrote songs in their own languages. Cassette tapes, cheap radios, and Jamaican migrants in Britain and the United States helped spread the music." },
      PRACTICE,
    ] }],
  },
  "t96-s3": {
    id: "t96-s3", name: "Bollywood", intro: SAQ,
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that India's Hindi-language film industry, based in Mumbai and nicknamed Bollywood, shows that cultural globalization did not flow only from the West. By the 1970s, India produced more feature films each year than any other country. Bollywood films, known for song-and-dance scenes and family dramas, drew huge audiences not only in India but in the Soviet Union, the Middle East, East Africa, and Southeast Asia. Indian migrants carried the films to Britain, North America, and the Caribbean, and video cassettes and later satellite television spread them further. At the same time, Hollywood films and American television were shown around the world, and some critics in many countries warned that local cultures would be swamped by American entertainment." },
      PRACTICE,
    ] }],
  },
};

export default {
  forms: [
    { id: "t96", name: "Topic 9.6 Quiz: Globalized Culture", group: "Unit 9: Globalization",
      items: [
        // ===== Set 1: García Márquez =====
        M(1, "t96-s1", "Claims and evidence in sources", "García Márquez's main complaint in the lecture is that Europeans",
          ["judge Latin America by their own standards instead of understanding it on its own terms", "ignore Latin American literature", "had stopped trading with Latin America", "were trying to colonize Latin America again"],
          ["Correct. He says interpreting Latin America \"through patterns not our own\" makes it more unknown.",
            "He says Europe readily praises Latin American literature.",
            "Trade is not discussed.",
            "He does not say this."]),
        M(2, "t96-s1", "Claims and evidence in sources", "The question \"Why is the originality so readily granted us in literature so mistrustfully denied us in our difficult attempts at social change?\" suggests that",
          ["Europeans admired Latin American writers but distrusted Latin American political movements", "Latin American literature had no readers in Europe", "Europeans supported all Latin American governments", "Latin American writers rejected social change"],
          ["Correct. He contrasts European praise for the literature with suspicion of its politics.",
            "He says the literature was praised.",
            "He says Europeans distrusted its social changes.",
            "He defends social change."]),
        M(3, "t96-s1", "Developments and processes", "The worldwide success of García Márquez's novels best illustrates which development after 1900?",
          ["Culture from outside Europe and North America reached global audiences", "All literature became written in English", "Books stopped being translated", "Global culture came only from the United States"],
          ["Correct. A Colombian novel sold tens of millions of copies in many languages.",
            "He wrote in Spanish.",
            "His books were widely translated.",
            "His success shows otherwise."]),
        M(4, "t96-s1", "Sourcing and situation", "García Márquez's audience in Stockholm most likely led him to",
          ["address Europeans directly about how they understood Latin America", "speak only about Colombian politics", "praise European colonial rule", "avoid discussing Europe"],
          ["Correct. Speaking to a mainly European audience, he challenges how they see Latin America.",
            "He speaks of all of Latin America.",
            "He criticizes European views.",
            "He discusses Europe throughout."]),
        // ===== Set 2: Reggae =====
        M(5, "t96-s2", "Causation", "According to the passage, which factor helped reggae spread around the world?",
          ["A British record company, cassette tapes, and Jamaican migrants carried the music abroad", "The Jamaican government banned it", "It was sung only in Jamaica", "It was played only in churches"],
          ["Correct. Island Records, cassettes, radios, and migrants spread it.",
            "The passage does not say this.",
            "It spread widely.",
            "It was popular music."]),
        M(6, "t96-s2", "Developments and processes", "Reggae's blend of Jamaican styles with American rhythm and blues best illustrates",
          ["cultural blending, in which new forms grew out of exchange between cultures", "the end of all local music", "the rejection of foreign influences", "music controlled by governments"],
          ["Correct. Reggae mixed local and foreign elements.",
            "Local music thrived.",
            "It used foreign influences.",
            "It grew in poor neighborhoods."]),
        M(7, "t96-s2", "Contextualization", "Marley's performance at Zimbabwe's independence celebration is best understood in the context of",
          ["the link between reggae's themes of African identity and movements for African liberation", "the Cold War arms race", "the end of the Second World War", "the founding of the European Union"],
          ["Correct. Reggae's songs about Africa and freedom resonated with independence movements.",
            "This is unrelated.",
            "That came in 1945.",
            "That came later."]),
        M(8, "t96-s2", "Comparison", "The spread of reggae is most similar to which other cultural development?",
          ["The worldwide spread of hip hop from New York in the 1980s and 1990s", "The building of the Great Wall", "The printing of the Gutenberg Bible", "The founding of the Ottoman Empire"],
          ["Correct. Both arose in poor urban neighborhoods and were adopted by musicians around the world.",
            "This is unrelated.",
            "This was in the 1450s.",
            "This was in the 1300s."]),
        // ===== SAQ: Bollywood =====
        Q("a", "Identify ONE region outside India where Bollywood films were popular, as described in the passage.",
          "The response names one region from the passage.",
          ["The Soviet Union.", "The Middle East or East Africa.", "Southeast Asia, Britain, North America, or the Caribbean."],
          ["\"Mumbai.\" This is in India.", "\"Hollywood.\" This is a rival film industry.", "\"Everywhere equally.\" The passage names specific regions."],
          "The passage says Bollywood films drew huge audiences in the Soviet Union, the Middle East, East Africa, and Southeast Asia.",
          "Bollywood spread."),
        Q("b", "Explain ONE way technology helped spread popular culture across the world after 1950.",
          "The response explains a specific technology and its effect.",
          ["Video cassettes let people watch films at home far from where they were made.", "Satellite television carried programs across borders.", "Cheap radios and cassette tapes spread music to people who could not afford concerts or records."],
          ["\"Technology spread culture.\" This names no technology.", "\"The printing press.\" It was invented in the 1400s.", "\"Television ended all local culture.\" This is false."],
          "In the 1980s, video cassettes let Indian families in Britain and the Gulf watch new Bollywood films at home, so the films reached audiences far from Indian cinemas.",
          "Technology helped."),
        Q("c", "Explain ONE way some people or governments responded to fears that American culture would overwhelm local cultures.",
          "The response explains a specific response.",
          ["France set quotas requiring radio stations to play a share of French-language music.", "Some governments limited the number of foreign films shown in theaters, as South Korea did with screen quotas.", "Local artists blended global styles with their own languages and traditions to create new forms."],
          ["\"People worried.\" This names no response.", "\"Every country banned American films.\" This is false.", "\"Bollywood was banned in India.\" This is false."],
          "France passed a law in the 1990s requiring radio stations to play a large share of French-language songs. The government hoped to protect French music from being crowded out by American and British pop.",
          "People responded."),
      ] },
  ],
};

// Topic 8.4 Quiz: Spread of Communism After 1900
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why) => ({ id: "t84-m0" + n, skill: "u8", type: "mcq", set, topic: "8.4", reasoning, question, choices, why, answer: 0 });
const Q = (sub, prompt, earns, yes, no, example, notExample) => ({ id: "t84-q1" + sub, skill: "u8", type: "fr", set: "t84-s3", part: "SAQ 1", sub, topic: "8.4", lead: SAQ, prompt, earns, yes, no, example, notExample });

export const sets = {
  "t84-s1": {
    id: "t84-s1", name: "Mao on the peasant movement in Hunan, 1927", intro: ONE,
    sources: [{ title: "Source", blocks: [
      { p: "... For the present upsurge of the peasant movement is a colossal event. In a very short time, in China's central, southern and northern provinces, several hundred million peasants will rise like a mighty storm, like a hurricane, a force so swift and violent that no power, however great, will be able to hold it back. They will smash all the trammels that bind them and rush forward along the road to liberation. They will sweep all the imperialists, warlords, corrupt officials, local tyrants and evil gentry into their graves. ..." },
      { p: "... a revolution is not a dinner party, or writing an essay, or painting a picture, or doing embroidery; it cannot be so refined, so leisurely and gentle, so temperate, kind, courteous, restrained and magnanimous. A revolution is an insurrection, an act of violence by which one class overthrows another. A rural revolution is a revolution by which the peasantry overthrows the power of the feudal landlord class. ..." },
      { p: "... Leadership by the poor peasants is absolutely necessary. Without the poor peasants there would be no revolution. ..." },
      { cite: "Mao Zedong, \"Report on an Investigation of the Peasant Movement in Hunan,\" March 1927, as published in the Marxists Internet Archive (from Mao's Selected Works, volume 1). Mao, then a young Communist organizer, wrote after a month touring rural Hunan province. Most Marxists of the time expected factory workers in the cities, not peasants, to lead a revolution.", url: "https://www.marxists.org/reference/archive/mao/selected-works/volume-1/mswv1_2.htm", kind: "primary" },
    ] }],
  },
  "t84-s2": {
    id: "t84-s2", name: "The Great Leap Forward", intro: "Use the passage below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that the Great Leap Forward was one of the worst disasters of the 1900s. In 1958, Mao Zedong set out to make China an industrial power within a few years. Peasants were organized into huge people's communes that shared land, tools, and kitchens. Millions were sent to build dams or to make steel in small backyard furnaces, which produced mostly useless metal, while crops went unharvested. Local officials, afraid to report failure, claimed record harvests, and the state took grain based on these false figures. The famine that followed, from 1959 to 1961, killed tens of millions of people; many scholars estimate about 30 million deaths. Mao retreated from day-to-day economic policy for a time, and other leaders allowed peasants to farm private plots again." },
      PRACTICE,
    ] }],
  },
  "t84-s3": {
    id: "t84-s3", name: "The Cultural Revolution", intro: SAQ,
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that Mao launched the Cultural Revolution in 1966 partly to regain power he had lost after the Great Leap Forward. He called on young people to attack \"bourgeois\" and traditional influences in the Communist Party and society. Students organized as Red Guards, waving copies of Mao's sayings, humiliated and beat teachers, officials, and intellectuals, destroyed temples and historic objects, and fought one another. Schools and universities closed for years. Leaders such as Liu Shaoqi were purged, and Deng Xiaoping was sent to work in a tractor factory. From 1968, millions of urban youth were sent to the countryside to learn from peasants. Estimates of the dead range from hundreds of thousands to more than a million. The movement wound down after Mao's death in 1976." },
      PRACTICE,
    ] }],
  },
};

export default {
  forms: [
    { id: "t84", name: "Topic 8.4 Quiz: Spread of Communism After 1900", group: "Unit 8: Cold War and Decolonization",
      items: [
        // ===== Set 1: Mao on Hunan =====
        M(1, "t84-s1", "Claims and evidence in sources", "Mao's main claim in the report is that",
          ["China's peasants would be the driving force of the revolution", "factory workers in the cities would lead China's revolution", "revolution should be gentle and peaceful", "landlords should lead the peasant movement"],
          ["Correct. He predicts \"several hundred million peasants will rise\" and says there is no revolution without the poor peasants.",
            "He focuses on peasants, not urban workers.",
            "He says a revolution \"is not a dinner party.\"",
            "He calls for overthrowing the landlords."]),
        M(2, "t84-s1", "Comparison", "Mao's view differed from that of most Marxists of the time in that he",
          ["saw peasants rather than urban factory workers as the main revolutionary class", "rejected class struggle", "supported the landlord class", "opposed all revolution"],
          ["Correct. Marx and Lenin expected industrial workers to lead; Mao adapted Marxism to a mostly rural country.",
            "He describes revolution as one class overthrowing another.",
            "He calls for overthrowing landlords.",
            "He calls for revolution."]),
        M(3, "t84-s1", "Contextualization", "Mao's emphasis on peasants is best explained by the fact that",
          ["the great majority of China's people were rural farmers and China had little industry", "China was the most industrialized country in Asia", "China had no landlords", "the Soviet Union ordered it"],
          ["Correct. In a rural country, peasants were the largest possible base of support.",
            "China had little industry in the 1920s.",
            "He attacks landlords.",
            "Soviet advisers at the time stressed urban workers."]),
        M(4, "t84-s1", "Causation", "Mao's strategy described in the report most directly contributed to which later development?",
          ["The Communist victory in China's civil war in 1949, built on support in the countryside", "The founding of the Republic of China in 1912", "The end of communism in China in 1950", "Japan's victory over China in 1945"],
          ["Correct. The Communists built rural bases, promised land reform, and defeated the Nationalists.",
            "That came before the report.",
            "The Communists took power in 1949.",
            "Japan surrendered in 1945."]),
        // ===== Set 2: Great Leap Forward =====
        M(5, "t84-s2", "Causation", "According to the passage, the famine was made worse mainly because",
          ["officials reported false harvests and the state took grain based on those figures", "China was invaded by the Soviet Union", "peasants refused to farm private plots", "China exported all its steel"],
          ["Correct. False reports led to grain seizures that left peasants starving.",
            "No invasion occurred.",
            "Private plots were banned during the Leap.",
            "Backyard steel was mostly useless."]),
        M(6, "t84-s2", "Contextualization", "The Great Leap Forward is best understood in the context of",
          ["Mao's wish to industrialize China rapidly and follow its own path apart from Soviet advice", "China's defeat in the Korean War", "the end of communist rule in China", "the Japanese occupation of Beijing"],
          ["Correct. Mao aimed to overtake industrial powers within years and broke with the slower Soviet model.",
            "The Korean War ended in an armistice in 1953.",
            "Communists remained in power.",
            "The occupation ended in 1945."]),
        M(7, "t84-s2", "Developments and processes", "The backyard furnaces described in the passage best illustrate which problem of state-planned economies?",
          ["Central targets could push people to meet quotas regardless of the real results", "Free markets set prices too low", "Private companies controlled industry", "Planned economies always grew faster"],
          ["Correct. The drive to meet steel quotas produced useless metal and pulled labor from farms.",
            "China had no free market for steel.",
            "The state controlled industry.",
            "The Leap caused economic collapse."]),
        M(8, "t84-s2", "Continuity and change", "The return of private plots after the famine is an early example of which later development?",
          ["Deng Xiaoping's market reforms after 1978", "The Cultural Revolution", "The Long March", "The Korean War"],
          ["Correct. Deng, one of the leaders who allowed private plots, later expanded market reforms.",
            "The Cultural Revolution attacked such policies.",
            "The Long March came in 1934 and 1935.",
            "That was a war, not an economic reform."]),
        // ===== SAQ: Cultural Revolution =====
        Q("a", "Identify ONE group targeted during the Cultural Revolution, as described in the passage.",
          "The response names one targeted group from the passage.",
          ["Teachers.", "Officials or Communist Party leaders such as Liu Shaoqi.", "Intellectuals."],
          ["\"The Red Guards.\" They carried out the attacks.", "\"Mao.\" He launched the movement.", "\"Peasants.\" Youth were sent to learn from them."],
          "The passage says Red Guards humiliated and beat teachers, officials, and intellectuals.",
          "People were targeted."),
        Q("b", "Explain ONE reason Mao launched the Cultural Revolution.",
          "The response explains a specific reason.",
          ["Mao wanted to regain the power he had lost after the failure of the Great Leap Forward.", "Mao feared that the Communist Party was becoming bureaucratic and \"bourgeois,\" like the Soviet Union, and wanted to renew revolutionary spirit.", "Mao wanted to remove rivals such as Liu Shaoqi and Deng Xiaoping, who had favored more moderate economic policies."],
          ["\"Mao wanted culture.\" This explains nothing.", "\"Mao wanted to restore Confucian traditions.\" The movement attacked them.", "\"Mao wanted to end communism.\" This is false."],
          "After the Great Leap Forward failed, more moderate leaders such as Liu Shaoqi and Deng Xiaoping took charge of economic policy. Mao used the Red Guards to attack them as enemies of the revolution, which let him remove his rivals and regain control.",
          "Mao had reasons."),
        Q("c", "Explain ONE way the spread of communism in Asia after 1945 was similar to OR different from the Russian Revolution of 1917.",
          "The response names a specific case and explains a similarity or difference.",
          ["Different: China's Communists won mainly with peasant support in the countryside, while the Bolsheviks seized power in the cities.", "Similar: In both Russia and China, Communists won power after a long war and promised land to peasants.", "Different: In Vietnam, communism was tied to a fight for independence from France, while the Russian Revolution overthrew a native monarchy."],
          ["\"Both were communist.\" This explains nothing.", "\"China's revolution happened before Russia's.\" This is false.", "\"Both revolutions were peaceful.\" This is false."],
          "The Russian Revolution was led by Bolsheviks who seized power in the capital, Petrograd, with support from workers and soldiers. China's Communists, by contrast, built bases in the countryside and won a long civil war with peasant armies, surrounding the cities before taking them in 1949.",
          "They were alike."),
      ] },
  ],
};

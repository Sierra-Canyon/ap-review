// Topic 8.4 Quiz: Spread of Communism After 1900
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why, difficulty) => ({ id: "t84-m0" + n, skill: "u8", type: "mcq", set, topic: "8.4", reasoning, difficulty, question, choices, why, answer: 0 });
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
          ["poor peasants would drive China's revolution", "factory workers in the cities would lead the revolution", "the revolution must win over the landlords peacefully", "the peasants should follow the Nationalist army's lead"],
          ["Correct. He predicts \"several hundred million peasants will rise\" and says there is no revolution without the poor peasants.",
            "He focuses on peasants, not urban workers.",
            "He says a revolution \"is not a dinner party\" and calls for overthrowing the landlord class.",
            "He says the poor peasants must lead, not follow."], "easy"),
        M(2, "t84-s1", "Comparison", "Mao's view differed from that of most Marxists of the time in that he",
          ["looked to peasants, not workers, to lead the revolution", "rejected the idea of revolution as class struggle", "expected the uprising to start in China's coastal cities", "saw landlords and poor peasants as natural allies"],
          ["Correct. Marx and Lenin expected industrial workers to lead; Mao adapted Marxism to a mostly rural country.",
            "He calls revolution \"an act of violence by which one class overthrows another.\"",
            "That was closer to the view of most Marxists; Mao describes a rural uprising.",
            "He calls for the peasants to overthrow the landlord class."], "moderate"),
        M(3, "t84-s1", "Contextualization", "Mao's emphasis on peasants is best explained by the fact that",
          ["most Chinese were farmers and industry was small", "China had more factories than any country in Asia", "Soviet advisers told him to organize the countryside", "land reform had already given most peasants land"],
          ["Correct. In a rural country with few factories, peasants were the largest possible base of support.",
            "China had little modern industry in the 1920s; Japan was Asia's industrial leader.",
            "Soviet advisers at the time stressed the urban workers and the alliance with the Nationalists.",
            "Mao describes peasants rising against landlords who still held the land."], "moderate"),
        M(4, "t84-s1", "Causation", "Mao's strategy described in the report most directly contributed to which later development?",
          ["The Communist victory in the civil war in 1949", "The overthrow of the Qing dynasty in 1911", "The Nationalist victory in the Northern Expedition", "China's first Five-Year Plan for heavy industry"],
          ["Correct. The Communists built rural bases, promised land to peasants, and defeated the Nationalists in 1949.",
            "The Qing fell in 1911 and 1912, before the report.",
            "The Northern Expedition was a Nationalist campaign that ended in 1928, and Chiang turned on the Communists during it.",
            "The first Five-Year Plan (1953 to 1957) built heavy industry on the Soviet model, not on a peasant strategy."], "easy"),
        // ===== Set 2: Great Leap Forward =====
        M(5, "t84-s2", "Causation", "According to the passage, the famine was made worse mainly because",
          ["the state took grain based on inflated harvest reports", "Soviet troops seized grain along the northern border", "peasants left the communes to farm private plots", "Japanese occupation had destroyed the irrigation dams"],
          ["Correct. Officials claimed record harvests, and the state took grain based on those false figures.",
            "The passage mentions no Soviet troops, and none took Chinese grain.",
            "Private plots came back only after the famine.",
            "The occupation ended in 1945, and the passage says millions were sent to build new dams."], "easy"),
        M(6, "t84-s2", "Contextualization", "The Great Leap Forward is best understood in the context of",
          ["Mao's drive to industrialize faster than the Soviet model", "China's need to rebuild after defeat in the Korean War", "Deng Xiaoping's push to open China to foreign investment", "a Soviet plan to make China its main grain supplier"],
          ["Correct. Mao aimed to overtake industrial powers within years, breaking with the slower Soviet model China had followed in the early 1950s.",
            "The Korean War ended in a 1953 armistice, and China was not defeated.",
            "Deng's opening to foreign investment began after 1978.",
            "The Leap aimed at industry, and relations with the Soviets were already souring."], "difficult"),
        M(7, "t84-s2", "Developments and processes", "The backyard furnaces described in the passage best illustrate which problem of state-planned economies?",
          ["Meeting quotas could matter more than real output.", "Free markets could set the price of steel too low.", "Private firms could hoard steel to raise prices.", "Heavy industry was kept in a few large cities."],
          ["Correct. The drive to meet steel targets produced mostly useless metal and pulled labor away from the harvest.",
            "China had no free market for steel; the state set the targets.",
            "The communes and the state, not private firms, ran the furnaces.",
            "The backyard furnaces spread steelmaking into villages across the country."], "moderate"),
        M(8, "t84-s2", "Continuity and change", "The return of private plots after the famine is an early example of which later development?",
          ["Deng Xiaoping's market reforms after 1978", "The Cultural Revolution's attack on capitalists", "The first Five-Year Plan's state-run factories", "The Hundred Flowers campaign of 1956 and 1957"],
          ["Correct. Deng, one of the leaders who allowed private plots in the early 1960s, later let peasants sell surplus crops and opened markets.",
            "The Cultural Revolution attacked such policies as capitalist.",
            "The first Five-Year Plan (1953 to 1957) built state-owned heavy industry.",
            "The Hundred Flowers campaign briefly invited intellectuals to criticize the party; it was not an economic reform, and it came before the Leap."], "difficult"),
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

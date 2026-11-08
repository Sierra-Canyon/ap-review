// Topic 4.8 Quiz: Continuity and Change, c. 1450 to c. 1750
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why) => ({ id: "t48-m0" + n, skill: "u4", type: "mcq", set, topic: "4.8", reasoning, question, choices, why, answer: 0 });
const Q = (sub, prompt, earns, yes, no, example, notExample) => ({ id: "t48-q1" + sub, skill: "u4", type: "fr", set: "t48-s3", part: "SAQ 1", sub, topic: "4.8", lead: SAQ, prompt, earns, yes, no, example, notExample });

export const sets = {
  "t48-s1": {
    id: "t48-s1", name: "Adam Smith on the two greatest events, 1776", intro: ONE,
    sources: [{ title: "Source", blocks: [
      { p: "The discovery of America, and that of a passage to the East Indies by the Cape of Good Hope, are the two greatest and most important events recorded in the history of mankind. Their consequences have already been great; but, in the short period of between two and three centuries which has elapsed since these discoveries were made, it is impossible that the whole extent of their consequences can have been seen. ... By uniting in some measure the most distant parts of the world, by enabling them to relieve one another's wants, to increase one another's enjoyments, and to encourage one another's industry, their general tendency would seem to be beneficial." },
      { p: "To the natives, however, both of the East and West Indies, all the commercial benefits which can have resulted from those events have been sunk and lost in the dreadful misfortunes which they have occasioned. ... At the particular time when these discoveries were made, the superiority of force happened to be so great on the side of the Europeans, that they were enabled to commit with impunity every sort of injustice in those remote countries." },
      { p: "In the mean time, one of the principal effects of those discoveries has been, to raise the mercantile system to a degree of splendour and glory which it could never otherwise have attained to. ... the commercial towns of Europe ... have now become the manufacturers for the numerous and thriving cultivators of America, and the carriers, and in some respects the manufacturers too, for almost all the different nations of Asia, Africa, and America." },
      { cite: "Adam Smith, Scottish philosopher and economist, An Inquiry into the Nature and Causes of the Wealth of Nations (London, 1776), Book IV, chapter VII, part III, as published by Project Gutenberg. \"The mercantile system\" is mercantilism, the policy of using colonies, monopolies, and trade rules to increase a nation's wealth, which Smith criticized.", url: "https://www.gutenberg.org/files/3300/3300-h/3300-h.htm", kind: "primary" },
    ] }],
  },
  "t48-s2": {
    id: "t48-s2", name: "Land empires in 1750", intro: "Use the passage below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that, for all the changes brought by ocean voyages, the world of 1750 was still dominated by large land-based empires in Asia. The Qing Empire, which ruled perhaps 200 million people, had taken Taiwan and Mongolia and by 1760 would double its territory by conquering the lands later called Xinjiang. The Ottoman Empire still held the Balkans, Anatolia, the Arab lands, and Egypt, and Russia had expanded across Siberia to the Pacific. By one well-known estimate, China and India together made more than half of the world's manufactured goods in 1750. In Asia, Europeans still held mostly coastal trading posts, and the Qing and Tokugawa governments set strict terms for trade with them. The great changes of the period came instead in the Americas, where European conquest, disease, and the slave trade remade whole societies, and in the oceans, where new routes tied the world's regions together." },
      PRACTICE,
    ] }],
  },
  "t48-s3": {
    id: "t48-s3", name: "The Indian Ocean in 1750", intro: SAQ,
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that Indian Ocean trade in 1750 showed more continuity than change since 1450. Gujarati, Arab, Armenian, and Chinese merchants still carried much of the trade between East Africa, the Middle East, India, and Southeast Asia, and the monsoon winds still set the rhythm of voyages. Cotton cloth from India remained one of the most traded goods in the world. Yet some things had changed. The Dutch East India Company had seized the spice islands of the Moluccas and the Banda Islands and controlled the trade in cloves and nutmeg. European companies had built forts at ports from the Cape of Good Hope to Indonesia, and American silver, carried by European ships, had become a main way to pay for Asian goods." },
      PRACTICE,
    ] }],
  },
};

export default {
  forms: [
    { id: "t48", name: "Topic 4.8 Quiz: Continuity and Change, c. 1450 to c. 1750", group: "Unit 4: Transoceanic Interconnections",
      items: [
        // ===== Set 1: Adam Smith =====
        M(1, "t48-s1", "Sourcing and situation", "Smith's view of the voyages to the Americas and Asia is best described as",
          ["mixed, praising the linking of distant regions but condemning the injustice done to the peoples of the Americas and Asia", "entirely positive, seeing no harm in European expansion", "entirely negative, wishing the voyages had never happened", "uninterested in their economic effects"],
          ["Correct. Smith calls the general tendency \"beneficial\" but says the natives' benefits \"have been sunk and lost in the dreadful misfortunes.\"",
            "He describes \"dreadful misfortunes\" and \"every sort of injustice.\"",
            "He calls the discoveries the greatest events in history and their tendency beneficial.",
            "He discusses commerce, industry, and the mercantile system at length."]),
        M(2, "t48-s1", "Causation", "According to Smith, Europeans were able to \"commit with impunity every sort of injustice\" because",
          ["they had far greater military force than the peoples they met at the time of the discoveries", "the peoples of the Americas and Asia invited them to rule", "Europe had a larger population than Asia", "the Pope ordered them to do so"],
          ["Correct. He says \"the superiority of force happened to be so great on the side of the Europeans\" at that particular time.",
            "Smith describes injustice, not invitation.",
            "Smith does not mention population, and Asia's population was far larger than Europe's.",
            "Smith does not mention the Pope."]),
        M(3, "t48-s1", "Claims and evidence in sources", "Smith's claim that European towns became \"the manufacturers for the numerous and thriving cultivators of America\" best describes which feature of the Atlantic economy?",
          ["Colonies produced raw materials and crops while European countries sold them manufactured goods", "The Americas became the main source of manufactured goods for Europe", "European towns stopped making goods after 1492", "Colonies were forbidden to grow crops"],
          ["Correct. Under mercantilism, colonies such as the sugar and tobacco colonies shipped crops to Europe and bought European cloth, tools, and other goods.",
            "Smith says the opposite: European towns made goods for the Americas.",
            "He says European towns became manufacturers for a much larger market.",
            "He calls the colonists \"thriving cultivators,\" that is, farmers."]),
        M(4, "t48-s1", "Continuity and change", "Smith's statement that \"the whole extent of their consequences\" could not yet be seen is supported by which later development?",
          ["In the 1800s, industrial Europe used its wealth and power to build much larger empires in Africa and Asia", "European trade with Asia ended in 1800", "The Americas returned to Indigenous rule by 1800", "Spain and Portugal became the world's leading industrial powers"],
          ["Correct. Smith wrote before industrialization. Wealth from the Atlantic economy helped fuel industry in Britain, and industrial power then let Europeans conquer far more of Africa and Asia.",
            "Trade with Asia grew after 1800.",
            "Most of the Americas became independent states ruled by descendants of settlers, not Indigenous rule.",
            "Britain, not Spain or Portugal, led industrialization."]),
        // ===== Set 2: Land empires in 1750 =====
        M(5, "t48-s2", "Claims and evidence in sources", "Which evidence from the passage best supports the claim that Asia's land-based empires were still powerful in 1750?",
          ["China and India together made more than half of the world's manufactured goods.", "European conquest remade societies in the Americas.", "New routes tied the world's regions together.", "Disease and the slave trade changed the Americas."],
          ["Correct. This shows the economic weight of Asian states in 1750.",
            "This is about the Americas, not Asian empires.",
            "This is about ocean trade in general.",
            "This is about the Americas."]),
        M(6, "t48-s2", "Continuity and change", "According to the passage, which region changed MOST between 1450 and 1750?",
          ["The Americas", "China", "The Ottoman Empire", "Japan"],
          ["Correct. The passage says conquest, disease, and the slave trade remade whole societies there.",
            "The passage stresses the Qing's continued strength.",
            "The passage says the Ottomans still held most of their lands.",
            "The passage says the Tokugawa still set the terms of trade."]),
        M(7, "t48-s2", "Developments and processes", "The Qing and Tokugawa policies mentioned in the passage best show that",
          ["strong Asian states could limit European trade and influence", "Europeans controlled all trade in Asia by 1750", "the Qing and Tokugawa had no interest in foreign goods", "Asian states had stopped trading by sea"],
          ["Correct. The Qing confined Western trade to Canton after 1757, and the Tokugawa limited the Dutch to Nagasaki.",
            "The passage says Europeans held mostly coastal trading posts.",
            "Both states traded, but on their own terms.",
            "Asian merchants and states still traded by sea."]),
        M(8, "t48-s2", "Comparison", "Which of the following best describes a difference between Russian and Qing expansion in the period?",
          ["Russia expanded across Siberia toward the Pacific, while the Qing expanded into Mongolia, Xinjiang, and Taiwan", "Russia expanded by sea, while the Qing expanded only by land", "Only the Qing used gunpowder weapons", "Russia lost territory while the Qing gained it"],
          ["Correct. Both grew by land, but in different directions and over different peoples.",
            "Russia's expansion across Siberia was overland.",
            "Both empires used gunpowder weapons.",
            "The passage says Russia had expanded across Siberia."]),
        // ===== SAQ: The Indian Ocean in 1750 =====
        Q("a", "Identify ONE continuity in Indian Ocean trade between 1450 and 1750 described in the passage.",
          "The response names one thing from the passage that stayed the same.",
          ["Gujarati, Arab, Armenian, and Chinese merchants still carried much of the trade.", "The monsoon winds still set the rhythm of voyages.", "Indian cotton cloth remained one of the most traded goods in the world."],
          ["\"The Dutch controlled the spice islands.\" This is a change, not a continuity.", "\"Trade continued.\" This is too general to earn the point.", "\"European ships carried all the trade.\" This is false and contradicts the passage."],
          "The passage says Gujarati, Arab, Armenian, and Chinese merchants still carried much of the trade around the Indian Ocean in 1750, as they had before Europeans arrived.",
          "Some things stayed the same."),
        Q("b", "Explain ONE change in Indian Ocean trade between 1450 and 1750, and explain what caused it.",
          "The response names a specific change and explains its cause.",
          ["The Dutch East India Company took control of the clove and nutmeg trade by seizing the Moluccas and Banda Islands with armed force.", "American silver became a main way to pay for Asian goods because Spanish mines in Potosí and Mexico produced huge amounts and Asian sellers, especially in China, wanted it.", "European companies built fortified ports from the Cape to Indonesia because joint-stock companies and states backed armed trade to compete for Asian goods."],
          ["\"Europeans came.\" This names a change but does not explain its cause.", "\"The monsoon winds changed.\" This is false.", "\"China conquered India.\" This is false."],
          "American silver became a main means of paying for Asian goods. Spanish mines at Potosí and in Mexico produced vast amounts of silver, and Europeans carried it to Asia because Chinese and Indian sellers wanted silver more than European products.",
          "Trade changed a lot."),
        Q("c", "Explain ONE way trade in the Atlantic Ocean in 1750 differed from trade in the Indian Ocean in 1750.",
          "The response makes a specific contrast between Atlantic and Indian Ocean trade and explains it.",
          ["Atlantic trade was a new system created after 1492 and largely run by Europeans, while Indian Ocean trade was an old system in which Asian merchants still played a large role.", "Atlantic trade depended on the forced movement of millions of enslaved Africans to work on plantations, while most Indian Ocean trade was in goods such as cloth and spices carried by merchants.", "In the Atlantic, European states ruled large colonies that produced crops for trade, while in the Indian Ocean, Europeans mostly held ports among powerful Asian states."],
          ["\"The Atlantic is in a different place.\" This is not a meaningful difference in trade.", "\"Both oceans had trade.\" This is a similarity.", "\"There was no slave trade in the Atlantic.\" This is false."],
          "The Atlantic economy was built after 1492 around plantations in the Americas that depended on enslaved Africans, and European states ruled the colonies that grew the crops. In the Indian Ocean, by contrast, an older trade continued in which Asian and Arab merchants carried cloth, spices, and other goods, and Europeans mostly held coastal ports.",
          "The two oceans were different."),
      ] },
  ],
};

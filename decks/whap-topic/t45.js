// Topic 4.5 Quiz: Maritime Empires Maintained and Developed
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why, difficulty) => ({ id: "t45-m0" + n, skill: "u4", type: "mcq", set, topic: "4.5", reasoning, difficulty, question, choices, why, answer: 0 });
const Q = (sub, prompt, earns, yes, no, example, notExample) => ({ id: "t45-q1" + sub, skill: "u4", type: "fr", set: "t45-s3", part: "SAQ 1", sub, topic: "4.5", lead: SAQ, prompt, earns, yes, no, example, notExample });

export const sets = {
  "t45-s1": {
    id: "t45-s1", name: "The English East India Company's first charter, 1600", intro: ONE,
    sources: [{ title: "Source", blocks: [
      { p: "... the Queen ... incorporated the said Earl, and other Persons, by the name of \"The Governor and Company of Merchants of London trading into the East Indies.\" ... The Company, their Sons, (at twenty-one Years of Age), their Apprentices, Servants, and Factors in India, or elsewhere, may, for Fifteen Years from Christmas last, freely and solely Trade ... \"into the Countries and Parts of Asia and Africa, and into and from all the Islands, Ports, Towns, and Places of Asia, Africa, and America, or any of them, beyond the Cape of Bona Esperanza, to the Streights of Magellan ...\"" },
      { p: "... The Company may export, in their first Voyage now preparing, Thirty, thousand Pounds in foreign Coin or Bullion ... The Company may send yearly to the East Indies Six good Ships, and Six Pinnances, with Five hundred Mariners ... None of the Queen's Subjects, but the Company, their Servants, or Assigns, shall resort to India— without being licenced by the Company, upon Pain of forfeiting Ships and Cargoes, with Imprisonment ..." },
      { p: "With Proviso, That in Case this Charter shall hereafter appear not to be profitable to the Crown and Realm, then, upon Two Years Notice to the Company, the Charter shall cease and determine ..." },
      { cite: "\"An Abstract of the First Charter\" granted by Queen Elizabeth I to the East India Company, December 31, 1600, in A Collection of Charters and Statutes relating to the East India Company (London, 1817), pp. i to ii, as transcribed on Wikisource. The abstract summarizes the charter and quotes some of its words. \"Factors\" were company agents; \"Bona Esperanza\" is the Cape of Good Hope; \"bullion\" is gold or silver in bars. The first petitioners were the Earl of Cumberland and 215 others, many of them London merchants.", url: "https://en.wikisource.org/wiki/Page:A_Collection_of_Charters_and_Statutes_relating_to_the_East_India_Company.pdf/9", kind: "primary" },
    ] }],
  },
  "t45-s2": {
    id: "t45-s2", name: "The English at Surat", intro: "Use the passage below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that in the 1600s European companies in India were guests of a far more powerful state. The English East India Company set up a trading post at Surat, the Mughal Empire's chief port, in 1613, after its ships defeated a Portuguese squadron nearby. From 1615 to 1619, the English ambassador Sir Thomas Roe lived at the court of the emperor Jahangir, seeking written permission for English trade, and won only part of what he asked. The Mughal state drew most of its income from taxes on land, not from sea trade, and Indian merchants at Surat were often richer than the English; the Company sometimes borrowed money from them. When the Company tried to use force against the Mughals in the late 1680s, the emperor Aurangzeb's forces seized its posts, and the English had to apologize and pay a fine before they could trade again." },
      PRACTICE,
    ] }],
  },
  "t45-s3": {
    id: "t45-s3", name: "Dahomey and the slave trade", intro: SAQ,
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that African states, not Europeans, controlled how the Atlantic slave trade worked on the coast of West Africa. The kingdom of Dahomey, in the interior of the Bight of Benin, conquered the coastal kingdoms of Allada in 1724 and Whydah in 1727, which gave it direct control of one of the busiest slave-trading ports in Africa. Dahomey's kings sold captives taken in war, set the terms of trade, collected taxes on every sale, and kept European traders inside their forts at Whydah. In return Dahomey received firearms, gunpowder, cloth from India, and cowrie shells from the Indian Ocean, which were used as money. The trade made the kingdom stronger, but it also encouraged more wars to capture people and drew millions of Africans across the Atlantic." },
      PRACTICE,
    ] }],
  },
};

export default {
  forms: [
    { id: "t45", name: "Topic 4.5 Quiz: Maritime Empires Maintained and Developed", group: "Unit 4: Transoceanic Interconnections",
      items: [
        // ===== Set 1: The East India Company charter =====
        M(1, "t45-s1", "Developments and processes", "The charter best illustrates which development in European maritime expansion?",
          ["States granted trade monopolies to joint-stock companies.", "Royal navies were sent out to conquer large parts of Asia.", "Merchants won the right to trade freely in Asia without licenses.", "The crown took direct control of all trade beyond the Cape."],
          ["Correct. The charter made the merchants a company with the sole right to trade beyond the Cape of Good Hope and punished others who tried.",
            "The charter gives trading rights to merchants, not a plan for conquest by the navy.",
            "The charter says no English subject could go to India without the Company's license.",
            "The crown handed the trade to a private company and kept only the right to end the charter if it proved unprofitable."], "easy"),
        M(2, "t45-s1", "Claims and evidence in sources", "Which part of the charter best supports the claim that the Company held a monopoly?",
          ["\"None of the Queen's Subjects, but the Company ... shall resort to India\"", "\"The Company may send yearly to the East Indies Six good Ships, and Six Pinnances\"", "\"The Company may export ... Thirty thousand Pounds in foreign Coin or Bullion\"", "\"in Case this Charter shall hereafter appear not to be profitable to the Crown\""],
          ["Correct. This clause keeps all other English traders out unless the Company licenses them.",
            "This sets how many ships the Company may send but does not keep others out.",
            "This permits exporting silver, not exclusive rights.",
            "This lets the crown end the charter; it does not say who is excluded from the trade."], "moderate"),
        M(3, "t45-s1", "Contextualization", "The permission to export \"Thirty thousand Pounds in foreign Coin or Bullion\" is best understood in the context of which feature of trade with Asia?",
          ["Asian sellers wanted silver more than most European goods.", "Asian rulers paid Europeans in silver for English woolen cloth.", "England had recently opened large silver mines in Cornwall and Wales.", "Silver was worth less in Asia than in Europe, so it bought little there."],
          ["Correct. Much of this silver came from Spanish America, and it flowed to India and China to buy spices and textiles that Europeans could not otherwise pay for.",
            "Silver flowed from Europe to Asia, not the other way, because Asian buyers wanted few European goods.",
            "England had no large silver mines; most of the world's new silver came from the Americas and Japan, and the charter speaks of \"foreign Coin.\"",
            "The reverse was true: silver was worth more in China than in Europe, which is why so much of it flowed east."], "moderate"),
        M(4, "t45-s1", "Comparison", "The English East India Company was most similar to which other organization of the period?",
          ["The Dutch East India Company (VOC), chartered in 1602", "The Ottoman Janissary corps, recruited through the devshirme", "The Society of Jesus, which sent missionaries to Asia", "The Ming tribute system, which managed foreign trade"],
          ["Correct. The VOC was also a chartered company with a trade monopoly, and it gained even wider powers to make war and treaties in Asia.",
            "The Janissaries were the sultan's soldiers, not a trading company.",
            "The Jesuits were a Catholic religious order that sought converts, not profits from trade.",
            "The tribute system was a state system of diplomacy and trade run by the Ming court, not a company of private investors."], "easy"),
        // ===== Set 2: The English at Surat =====
        M(5, "t45-s2", "Claims and evidence in sources", "The passage best supports which claim about the English in Mughal India in the 1600s?",
          ["They traded only on terms the Mughal state allowed.", "They ruled most of the coast of western India by 1650.", "Mughal emperors drew most of their income from English trade.", "Indian merchants at Surat were too poor to compete with them."],
          ["Correct. Roe had to seek permission, and when the Company used force, Aurangzeb seized its posts and made it apologize and pay a fine.",
            "The English held a trading post at Surat, not territory, in this period.",
            "The passage says the Mughals drew most of their income from land taxes.",
            "The passage says Indian merchants were often richer than the English and sometimes lent the Company money."], "easy"),
        M(6, "t45-s2", "Causation", "The Mughal emperors probably allowed European companies to trade at Surat mainly because",
          ["the trade brought revenue and posed little threat on land", "the English navy had captured Surat from the Mughals", "the emperors wanted European help to defeat the Safavids", "Indian merchants had stopped sailing to the Red Sea"],
          ["Correct. Trade added customs revenue and goods, and a few coastal trading posts did not threaten an empire that ruled most of the subcontinent and lived mainly on land taxes.",
            "The passage describes a trading post set up with permission after a sea fight with the Portuguese, not a conquest of the city.",
            "The Mughals did fight the Safavids over Kandahar, but they did not depend on English help, and the passage gives no such reason.",
            "Indian merchants at Surat kept trading and were often richer than the English."], "difficult"),
        M(7, "t45-s2", "Comparison", "The Mughal response to the English described in the passage is most similar to which other state's response to Europeans?",
          ["Tokugawa Japan's limits on Dutch trade", "The Inca Empire's fall to Spanish conquest", "The Kongo kingdom's adoption of Christianity", "The Aztec alliance with Spain against the Tlaxcalans"],
          ["Correct. Like the Mughals, the Tokugawa set the terms on which Europeans could trade, confining the Dutch to Nagasaki after 1641, and punished those who broke them.",
            "The Inca were conquered, while the Mughals kept control.",
            "Kongo's kings did become Christian, but that is a religious response, and the passage is about who set the terms of trade.",
            "The Tlaxcalans, not the Aztecs, allied with Spain, and they did so against the Aztecs."], "moderate"),
        M(8, "t45-s2", "Continuity and change", "Which later development shows the most important change from the situation described in the passage?",
          ["The Company began to rule Bengal after 1757.", "Aurangzeb pushed Mughal rule into southern India.", "Indian merchants kept lending money to European companies.", "The Company kept buying Indian cotton cloth for export to Europe."],
          ["Correct. As Mughal power weakened in the 1700s, the Company turned from trading guest to territorial ruler, starting in Bengal after the battle of Plassey.",
            "This took place in the period described and shows Mughal strength, not a change in the Company's position.",
            "This would be a continuity, not a change.",
            "This would be a continuity: Indian cloth was a main Company export throughout the period."], "moderate"),
        // ===== SAQ: Dahomey and the slave trade =====
        Q("a", "Identify ONE piece of evidence from the passage that supports the claim that African states controlled the slave trade on the coast of West Africa.",
          "The response names something in the passage that shows Dahomey's control of the trade.",
          ["Dahomey's kings set the terms of trade and collected taxes on every sale.", "Dahomey kept European traders inside their forts at Whydah.", "Dahomey conquered Allada and Whydah to take direct control of the coastal trade."],
          ["\"Dahomey received firearms.\" This shows what Dahomey gained, not that it controlled the trade.", "\"Millions of Africans were taken across the Atlantic.\" This shows the trade's scale, not who controlled it.", "\"Europeans conquered Dahomey.\" This is false and contradicts the passage."],
          "The passage says Dahomey's kings set the terms of trade, taxed every sale, and kept European traders inside their forts at Whydah. Europeans could buy captives only on the king's terms.",
          "Africa had kings."),
        Q("b", "Explain ONE effect of the Atlantic slave trade on West African societies in the period 1450 to 1750.",
          "The response names a specific effect on West African societies and explains how the trade caused it.",
          ["States such as Dahomey and Asante grew stronger by selling captives for firearms, which helped them conquer neighbors.", "Warfare and raiding increased as states and slave traders sought captives to sell, making life less secure for many communities.", "The loss of many young men changed some societies, leaving more women to do farm work and increasing polygyny in some regions."],
          ["\"Africans were enslaved.\" This restates the trade and does not explain an effect on African societies.", "\"West Africa became an industrial economy.\" This is false.", "\"The slave trade ended in 1600.\" This is wrong: it grew larger in the 1700s."],
          "Because firearms were among the main goods Europeans paid for captives, states that sold captives, such as Dahomey and Asante, could arm their soldiers and conquer their neighbors. These wars produced more captives, so the trade and the growth of these states fed each other.",
          "The slave trade affected Africa."),
        Q("c", "Explain ONE way the Atlantic slave trade was connected to the growth of European maritime empires in the Americas in the period 1450 to 1750.",
          "The response explains a specific link between the slave trade and the American colonies.",
          ["Enslaved Africans did most of the work on sugar plantations in Brazil and the Caribbean, which made these colonies very profitable.", "As Indigenous populations fell from disease, colonists turned to enslaved Africans as a source of labor for mines and plantations.", "Profits from plantation crops such as sugar and tobacco paid for more ships and more colonies, linking Europe, Africa, and the Americas in the Atlantic system."],
          ["\"Europeans had colonies.\" This gives no connection to the slave trade.", "\"Enslaved Africans worked in China.\" This is false.", "\"The slave trade was a small part of the colonial economy.\" This is false."],
          "In Brazil and the Caribbean, sugar plantations depended on enslaved Africans, who did the dangerous work of cutting cane and boiling sugar. Sugar was one of the most valuable goods in Europe, so the slave trade made these colonies some of the richest parts of the Portuguese, English, and French empires.",
          "The slave trade and empires were connected."),
      ] },
  ],
};

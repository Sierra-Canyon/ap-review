// Topic 4.4 Quiz: Maritime Empires Established
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
import { maps } from "../whap/maps.js";

const MAP = "Map drawn for this review from Natural Earth land outlines (public domain). Places, dates, and routes checked against ";
const map = (id, caption, refs) => [{ svg: maps[id], caption }, { cite: MAP + refs + ".", kind: "map" }];
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why, difficulty) => ({ id: "t44-m0" + n, skill: "u4", type: "mcq", set, topic: "4.4", reasoning, difficulty, question, choices, why, answer: 0 });
const Q = (sub, prompt, earns, yes, no, example, notExample) => ({ id: "t44-q1" + sub, skill: "u4", type: "fr", set: "t44-s3", part: "SAQ 1", sub, topic: "4.4", lead: SAQ, prompt, earns, yes, no, example, notExample });

export const sets = {
  "t44-s1": {
    id: "t44-s1", name: "Albuquerque before the attack on Malacca, 1511", intro: ONE,
    sources: [{ title: "Source", blocks: [
      { p: "\"The first is the great service which we shall perform to Our Lord in casting the Moors out of this country, and quenching the fire of this sect of Muhammad so that it may never burst out again hereafter ... for when we were committing ourselves to the business of cruising in the Straits of the Red Sea, where the King of Portugal had often ordered me to go (for it was there that His Highness considered we could cut down the commerce which the Moors of Cairo, of Mecca, and of Jeddah carry on with these parts), Our Lord for His service thought right to lead us hither; for when Malacca is taken, the places on the Straits must be shut up, and they will never more be able to introduce their spices into those places." },
      { p: "\"And the other reason is the additional service which we shall render to the King Dom Manoel in taking this city, because it is the headquarters of all the spices and drugs which the Moors carry every year hence to the Straits ... and I hold it as very certain that, if we take this trade of Malacca away out of their hands, Cairo and Mecca will be entirely ruined, and to Venice will no spices be conveyed, except what her merchants go and buy in Portugal.\"" },
      { p: "\"... I trust in God's mercy that when Malacca is held in subjection to our dominion by a strong fortress, provided that the Kings of Portugal appoint thereto those who are well experienced as governors and managers of the revenues, the taxes of the land will pay all the expenses which may arise in the administration of the city ...\"" },
      { cite: "Afonso de Albuquerque, Portuguese governor of India, speech to his captains before the second attack on Malacca, 1511, as reported by his son, Brás de Albuquerque, in The Commentaries of the Great Afonso Dalboquerque (first published in Portuguese in 1557), translated by Walter de Gray Birch (London: Hakluyt Society, 1880), vol. 3, as quoted in H. Morse Stephens, Albuquerque (Oxford: Clarendon Press, 1892), as published by Heritage History. Stephens notes that the speech may not be Albuquerque's exact words. \"The Straits\" are the Red Sea route to Egypt; \"Moors\" here means Muslim merchants.", url: "https://heritage-history.com/?author=stephens&book=albuquerque&c=read&story=malacca", kind: "primary" },
    ] }],
  },
  "t44-s2": {
    id: "t44-s2", name: "Spain in the Philippines", intro: "Use the map below to answer the questions that follow.", label: "Map",
    sources: [{ title: "Map", blocks: map("u4f-philippines", "Spanish rule and trade in the Philippines, 1565 to c. 1650 (routes approximate)", "Wikipedia, \"Spanish East Indies,\" \"Sangley Rebellion (1603),\" and \"Haijin,\" and Encyclopaedia Britannica, \"Manila galleon\"") }],
  },
  "t44-s3": {
    id: "t44-s3", name: "European forts on the African coast", intro: SAQ,
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that European power in Africa before 1750 was limited mostly to the coast. In 1482, the Portuguese built the castle of São Jorge da Mina, later called Elmina, on the Gold Coast to buy gold, but they paid rent to the local ruler and depended on African merchants to bring gold from the interior. Malaria and other diseases killed many Europeans who went inland, and strong African states such as the kingdoms of the Gold Coast and Benin controlled who could trade. The main exception was Angola, where the Portuguese founded Luanda in 1576 and fought long wars against the kingdom of Ndongo to capture people for the slave trade. Other Europeans followed the Portuguese model: the Dutch took Elmina in 1637, and English, French, Danish, and Swedish companies built their own forts along the coast." },
      PRACTICE,
    ] }],
  },
};

export default {
  forms: [
    { id: "t44", name: "Topic 4.4 Quiz: Maritime Empires Established", group: "Unit 4: Transoceanic Interconnections",
      items: [
        // ===== Set 1: Albuquerque =====
        M(1, "t44-s1", "Sourcing and situation", "Albuquerque's main purpose in this speech was most likely to",
          ["persuade his captains to take Malacca and fortify it", "ask the sultan of Malacca for permission to trade there", "explain to the king why Portugal should leave Asia", "describe the spices of Southeast Asia to readers in Europe"],
          ["Correct. He gives two reasons to take the city and argues that a strong fortress would pay for itself.",
            "He plans to capture the city, not to ask its ruler for permission.",
            "He argues for expanding Portuguese power, and he is speaking to his captains, not writing to the king.",
            "He speaks to his captains to win their support for an attack; the spices are mentioned only as a reason to attack."], "easy"),
        M(2, "t44-s1", "Claims and evidence in sources", "Which statement from the speech best shows that Albuquerque hoped to control trade rather than simply join it?",
          ["\"to Venice will no spices be conveyed, except what her merchants go and buy in Portugal\"", "\"the headquarters of all the spices and drugs which the Moors carry every year hence to the Straits\"", "\"the King of Portugal had often ordered me to go\"", "\"the taxes of the land will pay all the expenses which may arise in the administration of the city\""],
          ["Correct. He hopes Portugal will become the only route for spices to Europe, forcing Venice to buy through Lisbon.",
            "This describes Malacca's place in the spice trade, not a plan for Portugal to control it.",
            "This describes the king's orders to cruise the Red Sea, not control of trade.",
            "This is about paying for the city's government after the conquest, not about controlling the spice trade."], "moderate"),
        M(3, "t44-s1", "Contextualization", "Albuquerque's plan to cut off trade to \"Cairo, Mecca, and Jeddah\" is best understood in the context of",
          ["Portugal's effort to divert the spice trade away from Muslim merchants", "the Ottoman conquest of Constantinople in 1453", "Spain's search for a western route to the Spice Islands", "the Ming government's ban on private overseas trade"],
          ["Correct. Spices had long traveled from Asia by sea to the Red Sea and then to Cairo and Venice; Portugal wanted them to go around Africa to Lisbon instead.",
            "The fall of Constantinople came decades earlier and is not about the Red Sea spice route Albuquerque names.",
            "Spain did seek a western route, leading to Magellan's voyage in 1519, but Albuquerque is attacking the Muslim route through the Red Sea.",
            "The Ming ban concerned Chinese merchants, and the speech is about Muslim traders carrying spices west."], "moderate"),
        M(4, "t44-s1", "Developments and processes", "The method Albuquerque proposes, a strong fortress at a key port, best illustrates which feature of the Portuguese empire in Asia?",
          ["A trading-post empire of fortified ports and sea power", "A land empire that ruled most of the Indian subcontinent", "A settler colony where Portuguese families farmed the land", "A tributary system in which Asian rulers sent gifts to Lisbon"],
          ["Correct. Portugal held ports such as Goa, Malacca, and Hormuz and tried to tax and control sea trade from them.",
            "The Portuguese held a few coastal ports, such as Goa, not most of India.",
            "Few Portuguese settled in Asia to farm; Brazil, not Asia, drew Portuguese settlers.",
            "The speech plans a fortress paid for by taxes, not tribute from Asian rulers."], "easy"),
        // ===== Set 2: Spain in the Philippines (map) =====
        M(5, "t44-s2", "Claims and evidence in sources", "The map best supports which claim about Spanish rule in the Philippines?",
          ["Spanish towns lay in the north and center, while Muslim states held the south.", "Spain ruled every island from Luzon to the coast of Borneo by 1571.", "Muslim sultanates governed Manila and Cebu under Spanish protection.", "Spanish rule began on Mindanao and spread north to Luzon."],
          ["Correct. The map marks Spanish towns at Manila and Cebu and the seats of the Muslim sultanates of Sulu and Maguindanao in the south, which largely governed themselves.",
            "The map marks Jolo and Cotabato as seats of Muslim sultanates, so Spain did not rule the southern islands.",
            "The map marks Manila and Cebu as Spanish towns; the sultanates were in the far south.",
            "The map marks Cebu, in the central islands, as the first Spanish settlement in 1565, and Manila as the capital from 1571; neither is on Mindanao."], "easy"),
        M(6, "t44-s2", "Contextualization", "The route of Chinese junks to Manila shown on the map is best understood in the context of",
          ["the Ming state's easing of its ban on private overseas trade", "the Qing navy's conquest of Taiwan and the Philippines", "Zheng He's voyages to Southeast Asia and the Indian Ocean", "the opening of Chinese ports to Europeans after the Opium War"],
          ["Correct. In 1567 the Ming let Chinese merchants trade overseas with permits, and merchants from Yuegang in Fujian soon traded heavily with the Spanish at Manila.",
            "The Qing took Taiwan in 1683, but they never conquered the Philippines, which stayed Spanish.",
            "Zheng He's state voyages ended in 1433, long before the Spanish founded Manila.",
            "The Opium War ended in 1842, long after the junk trade to Manila began."], "moderate"),
        M(7, "t44-s2", "Causation", "The two routes that meet at Manila on the map best explain why",
          ["Manila became a place where American silver was traded for Chinese goods", "Manila became the main market for spices from the Moluccas and Banda Islands", "Spain gained a share of the African slave trade through the Pacific", "Chinese merchants carried American silver to Acapulco on their own junks"],
          ["Correct. Galleons brought silver from New Spain, and junks brought Chinese silk and porcelain, so Manila linked the economies of China and the Americas.",
            "The map shows no route to the Moluccas or Banda Islands. Their cloves and nutmeg were controlled first by the Portuguese and then by the Dutch.",
            "The map shows silver, silk, and porcelain, not enslaved people; the Atlantic, not the Pacific, carried the African slave trade.",
            "The map shows Spanish galleons, not Chinese junks, crossing the Pacific to Acapulco, and silver moving west to Manila."], "difficult"),
        M(8, "t44-s2", "Comparison", "The Chinese quarter marked outside Manila's walls is most similar to which other development of the period?",
          ["Gujarati merchant communities settled in East African ports", "Spanish encomiendas granting colonists Indigenous labor in Mexico", "Portuguese forts that taxed shipping at Hormuz and Malacca", "Cossack forts collecting fur tribute from Siberian peoples"],
          ["Correct. Like the Chinese in Manila, diaspora merchants lived in foreign port cities and handled much of their trade, though rulers sometimes distrusted them.",
            "The encomienda was a grant of Indigenous labor, not a community of foreign merchants.",
            "Portuguese forts were outposts of a European state that used force to tax trade, not a merchant community living under another state's rule.",
            "Cossack forts were outposts of the Russian state that took tribute from local peoples, not a community of foreign merchants."], "difficult"),
        // ===== SAQ: European forts on the African coast =====
        Q("a", "Identify ONE reason, given in the passage, that European power in Africa before 1750 was limited mostly to the coast.",
          "The response names one reason from the passage.",
          ["Malaria and other diseases killed many Europeans who went inland.", "Strong African states controlled who could trade.", "Europeans depended on African merchants to bring gold from the interior and paid rent to local rulers."],
          ["\"Europeans built forts.\" This describes what they did, not why they stayed on the coast.", "\"The Dutch took Elmina.\" This is in the passage but is not a reason for the limit.", "\"Africans had no armies.\" This is false and contradicts the passage."],
          "The passage says strong African states such as the kingdoms of the Gold Coast and Benin controlled who could trade, so Europeans had to stay in coastal forts and deal with African rulers and merchants on their terms.",
          "Africa was hard to reach."),
        Q("b", "Explain ONE way Angola, as described in the passage, was different from the Gold Coast in the period 1450 to 1750.",
          "The response explains a specific difference between Portuguese activity in Angola and European activity on the Gold Coast.",
          ["In Angola the Portuguese fought wars inland against Ndongo to capture people, while on the Gold Coast they stayed in forts and traded with African rulers.", "Angola became a Portuguese colony centered on Luanda, while on the Gold Coast Europeans rented land for forts from local rulers.", "In Angola the main goal was enslaved people for the Atlantic slave trade, while Elmina was founded to buy gold."],
          ["\"Angola is in Africa.\" Both places are in Africa, so this is not a difference.", "\"The Portuguese were in both places.\" This is a similarity.", "\"Angola was ruled by the Dutch from 1482.\" This is wrong."],
          "On the Gold Coast, the Portuguese built Elmina to buy gold and paid rent to the local ruler. In Angola, by contrast, they founded Luanda in 1576 and fought long wars against the kingdom of Ndongo to capture people for the slave trade, so their presence there was more like a colony won by conquest.",
          "The two places were different."),
        Q("c", "Explain ONE way European activity in Asia in the period 1450 to 1750 was similar to European activity on the African coast as described in the passage.",
          "The response names a specific European activity in Asia and explains how it resembles the pattern in the passage.",
          ["In both regions, Europeans built fortified trading posts on the coast, such as Portuguese Malacca and Goa, rather than ruling large inland territories.", "In both regions, Europeans depended on local rulers' permission and local merchants, as the English East India Company did at Surat with Mughal approval.", "In both regions, rival European powers copied and fought each other, as when the Dutch took Malacca from the Portuguese in 1641 and Elmina in 1637."],
          ["\"Europeans went to Asia too.\" This states no similarity in how they acted.", "\"Europeans conquered China.\" This is false.", "\"Europeans sold enslaved Africans in China.\" This does not describe a similarity and is not accurate."],
          "As in Africa, Europeans in Asia mostly held fortified ports. The Portuguese ruled Goa, Malacca, and Hormuz but not the large empires around them, and like Elmina, these forts were taken by rivals: the Dutch captured Malacca from Portugal in 1641, four years after taking Elmina.",
          "Europeans were in both places."),
      ] },
  ],
};

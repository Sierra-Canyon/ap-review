// Topic 4.4 Quiz: Maritime Empires Established
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why) => ({ id: "t44-m0" + n, skill: "u4", type: "mcq", set, topic: "4.4", reasoning, question, choices, why, answer: 0 });
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
    id: "t44-s2", name: "Spain in the Philippines", intro: "Use the passage below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that Spain's colony in the Philippines rested on a small number of Spaniards, the Catholic Church, and Chinese merchants. An expedition led by Miguel López de Legazpi arrived in 1565, and in 1571 the Spanish took Manila from its Muslim ruler and made it their capital. Only a few thousand Spaniards ever lived in the islands. Catholic friars traveled through the lowland villages, learned local languages, and converted most of the lowland population, while Muslim sultanates on Mindanao and in the Sulu islands resisted Spanish rule for centuries. Manila's wealth came from trade more than from land. Chinese junks brought silk and porcelain to the city, and thousands of Chinese merchants and craftsmen settled in a district outside its walls, where Spanish officials both depended on them and feared them, and several times attacked them." },
      PRACTICE,
    ] }],
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
          ["persuade his captains to take Malacca and build a fortress there", "ask the sultan of Malacca for permission to trade", "explain why Portugal should give up its bases in Asia", "describe the spices of Southeast Asia to readers in Europe"],
          ["Correct. He gives two reasons to take the city and argues that a strong fortress would pay for itself.",
            "He plans to capture the city, not to ask permission.",
            "He argues for expanding Portuguese power.",
            "He speaks to his captains to win their support for an attack."]),
        M(2, "t44-s1", "Claims and evidence in sources", "Which statement from the speech best shows that Albuquerque hoped to control trade rather than simply join it?",
          ["\"to Venice will no spices be conveyed, except what her merchants go and buy in Portugal\"", "\"Our Lord for His service thought right to lead us hither\"", "\"the King of Portugal had often ordered me to go\"", "\"those who are well experienced as governors and managers of the revenues\""],
          ["Correct. He hopes Portugal will become the only route for spices to Europe, forcing Venice to buy through Lisbon.",
            "This gives a religious explanation for coming to Malacca, not a plan for controlling trade.",
            "This describes the king's orders, not control of trade.",
            "This is about governing the city after the conquest."]),
        M(3, "t44-s1", "Contextualization", "Albuquerque's plan to cut off trade to \"Cairo, Mecca, and Jeddah\" is best understood in the context of",
          ["Portugal's effort to take the spice trade away from Muslim merchants who carried it through the Red Sea to Egypt and Venice", "the Ottoman conquest of Constantinople in 1453", "the Spanish conquest of the Inca Empire", "the Chinese ban on all foreign trade"],
          ["Correct. Spices had long traveled from Asia by sea to the Red Sea and then to Cairo and Venice; Portugal wanted them to go around Africa to Lisbon instead.",
            "This was an earlier event and is not about the spice routes Albuquerque names.",
            "That took place in South America in the 1530s.",
            "The Ming had eased limits on private trade by 1567, and the speech is about Muslim traders in the Indian Ocean."]),
        M(4, "t44-s1", "Developments and processes", "The method Albuquerque proposes, a strong fortress at a key port, best illustrates which feature of the Portuguese empire in Asia?",
          ["A trading-post empire that held fortified ports and used sea power rather than ruling large territories", "A land empire that ruled most of India", "A settler colony in which most Portuguese moved to farm", "An empire based on tribute from Chinese emperors"],
          ["Correct. Portugal held ports such as Goa, Malacca, and Hormuz and tried to tax and control sea trade from them.",
            "The Portuguese held a few ports, not most of India.",
            "Few Portuguese settled in Asia to farm.",
            "The Portuguese empire in Asia rested on ports and sea power, and the speech is about a fortress and taxes, not tribute."]),
        // ===== Set 2: Spain in the Philippines =====
        M(5, "t44-s2", "Claims and evidence in sources", "According to the passage, Spanish rule in the Philippines depended most on",
          ["Catholic missionaries and Chinese merchants, more than on a large Spanish population", "large numbers of Spanish settlers who farmed the land", "an alliance with the Muslim sultanates of the south", "gold mines worked by enslaved Africans"],
          ["Correct. The passage says only a few thousand Spaniards ever lived there, friars converted the lowlands, and Chinese merchants brought the trade.",
            "The passage says only a few thousand Spaniards ever lived in the islands.",
            "The passage says the sultanates resisted Spanish rule.",
            "The passage says Manila's wealth came from trade more than land and does not mention gold mines."]),
        M(6, "t44-s2", "Comparison", "The role of Chinese merchants in Manila is most similar to which other development of the period?",
          ["Merchant communities, such as Armenians in Asia and Gujaratis in East Africa, living in foreign ports and handling much of their trade", "The encomienda system in Mexico", "The Atlantic slave trade", "The Qing government's ban on foreign merchants"],
          ["Correct. Like the Chinese in Manila, diaspora merchants lived in foreign port cities and were essential to trade, though sometimes distrusted.",
            "The encomienda was a grant of Indigenous labor, not a merchant community.",
            "The slave trade forcibly moved people as laborers, not as merchants.",
            "The Qing did limit Western merchants to Canton after 1757, but that is the opposite of merchants settling abroad."]),
        M(7, "t44-s2", "Comparison", "Spanish rule in the Philippines differed from Spanish rule in Mexico mainly because in the Philippines",
          ["few Spaniards settled, and the colony's wealth came mostly from trade", "Spaniards converted no one to Christianity", "the Spanish never founded a capital city", "Indigenous people were all killed by disease"],
          ["Correct. Mexico drew many settlers and produced silver; Manila was a trading city with a small Spanish population.",
            "The passage says friars converted most of the lowland population.",
            "The passage says Manila became the capital in 1571.",
            "The passage describes lowland villages and resisting sultanates, not a whole population dying."]),
        M(8, "t44-s2", "Causation", "The Spanish took and held Manila in large part because",
          ["it gave Spain a port in Asia where American silver could be traded for Chinese goods", "it was the source of the cloves and nutmeg of the Moluccas", "Portugal gave the city to Spain by treaty", "the Ming emperor invited Spain to rule it"],
          ["Correct. Manila became the Asian end of the galleon trade, where silver from Mexico bought silk and porcelain.",
            "Cloves and nutmeg came from the Moluccas and Banda Islands, not from Manila.",
            "The passage says the Spanish took the city from its Muslim ruler.",
            "No Ming emperor invited Spain to rule Manila."]),
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

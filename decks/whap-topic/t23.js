// Topic 2.3 Quiz: Exchange in the Indian Ocean
// Sources: every stimulus this quiz uses, keyed by id.
export const sets = {
  "t23-s1": {
    id: "t23-s1", name: "A Franciscan friar on the Indian Ocean coasts", intro: "Use the source below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "Travelling on for many days, I arrived at Ormus on the main ocean, which is a well fortified city, having great store of merchandize and treasure. ... In this place, their ships or barks are called jase, the planks of which are sewed together with hemp." },
        { p: "... Pepper grows in the kingdom of Minibar (Malabar), where it is more plentiful than in any other part of the world, being found abundantly in that country, in a forest which extends for eighteen days journey in circuit. In the wood, or forest, there are two cities, named Flandrina and Cyncilim. Flandrina is inhabited both by Jews and Christians, ... When these are ripe, they are of a green colour, and, being gathered, are laid in the sun to dry, after which they are put into earthen vessels for sale. ... At one end of this forest the city of Polumbrum is situated, which abounds in all kinds of merchandize." },
        { cite: "Odoric of Pordenone (Oderic of Portenau), an Italian Franciscan friar who sailed from the Persian Gulf to India, Southeast Asia, and China c. 1318 to 1330, account of his travels (dictated 1330), sections 2 and 5, in Robert Kerr, A General History and Collection of Voyages and Travels, vol. I (Edinburgh, dedication dated 1811), chapter XII, in Kerr's English version based on the Latin and old English texts printed by Richard Hakluyt, as transcribed on Frances W. Pritchett's website (Columbia University) from Project Gutenberg eBook 10600. Footnote numbers are left out. Ormus is Hormuz, a port at the mouth of the Persian Gulf. Minibar is the Malabar Coast of southwest India. Flandrina and Cyncilim were towns on that coast, and Polumbrum is usually identified as Quilon (Kollam). \"These\" in the second paragraph are the clusters of pepper.", url: "https://franpritchett.com/00generallinks/kerr/vol01chap12sect01to05.html", kind: "primary" },
      ] },
    ],
  },
  "t23-s2": {
    id: "t23-s2", name: "Winds, ships, and merchant communities", intro: "Use the passage below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "Many historians argue that trade in the Indian Ocean grew between c. 1200 and c. 1450 because merchants learned to work with the region's environment and adopted new tools. The monsoon winds blow from the southwest for part of the year and from the northeast for another part, so sailors who timed their voyages could travel between East Africa, Arabia, India, and Southeast Asia and return within a year or two. Large ships, such as Chinese junks, carried bulky goods, while the magnetic compass and the astrolabe helped pilots find their way. Because voyages depended on the seasons, merchants often waited for months in foreign ports. Many settled there, married local women, and formed diasporic communities, such as Arab and Persian merchants on the Swahili coast and Chinese merchants in Southeast Asia, who spread their religions and customs." },
        { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" },
      ] },
    ],
  },
  "t23-s3": {
    id: "t23-s3", name: "The Ming treasure voyages", intro: "Use the table below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "The Ming Treasure Voyages Led by Zheng He, 1405 to 1433" },
        { table: {
          head: ["Voyage", "Years", "Selected places visited", "Farthest west"],
          rows: [
            ["1", "1405 to 1407", "Champa, Java, Malacca, Ceylon, Calicut", "Calicut (India)"],
            ["2", "1407 to 1409", "Champa, Siam, Java, Malacca, Cochin, Calicut", "Calicut (India)"],
            ["3", "1409 to 1411", "Champa, Java, Malacca, Ceylon, Cochin, Calicut", "Calicut (India)"],
            ["4", "1413 to 1415", "Champa, Java, Malacca, Ceylon, Calicut, Maldive Islands, Hormuz", "Hormuz (Persian Gulf)"],
            ["5", "1417 to 1419", "Malacca, Ceylon, Calicut, Hormuz, Aden, Mogadishu, Malindi", "East African coast"],
            ["6", "1421 to 1422", "Maldive Islands, Hormuz, Dhofar, Aden, Mogadishu, Brava", "East African coast"],
            ["7", "1431 to 1433", "Champa, Java, Malacca, Ceylon, Calicut, Hormuz (the Mingshi adds Bengal, Aden, Mecca, and Mogadishu)", "Hormuz in one Ming record, East Africa and Arabia in the Mingshi"],
          ],
        } },
        { cite: "Table built from the voyage-by-voyage account in the Wikipedia article \"Ming treasure voyages\" (accessed November 1, 2026), which draws on Ming records including the Taizong Shilu (Veritable Records of the Yongle emperor's reign), the Xia Xiyang, and the Mingshi (the official History of the Ming). Years run from the imperial order or departure to the fleet's return. Only selected stops are listed. Champa is in southern Vietnam, Siam is Thailand, Ceylon is Sri Lanka, Calicut and Cochin are on India's southwest coast, Hormuz is at the mouth of the Persian Gulf, Aden and Dhofar are in southern Arabia, and Mogadishu, Brava, and Malindi are on the East African coast.", url: "https://en.wikipedia.org/wiki/Ming_treasure_voyages", kind: "data" },
      ] },
    ],
  },
};

const LEAD = "Answer all parts of the question that follows.";

export default {
  forms: [
    { id: "t23", name: "Topic 2.3 Quiz: Exchange in the Indian Ocean", group: "Unit 2: Networks of Exchange",
      items: [
        { id: "t23-m01", skill: "u2", type: "mcq", set: "t23-s1", topic: "2.3", reasoning: "Claims and evidence in sources",
          question: "The second paragraph of the excerpt best supports which of the following conclusions about Indian Ocean trade in the early fourteenth century?",
          choices: [
            "Southern India grew pepper for distant markets, and the port cities of its coast became busy centers of trade.",
            "Most of the spices traded in the Indian Ocean came from farms in Southwest Asia near ports such as Ormus.",
            "The ports of the Malabar Coast traded mainly in local food crops rather than goods for distant markets.",
            "European merchants controlled the growing and sale of pepper on the Malabar Coast.",
          ],
          why: [
            "Correct. The author says pepper is \"more plentiful than in any other part of the world\" in Malabar, that it is dried and packed \"for sale,\" and that Polumbrum \"abounds in all kinds of merchandize.\"",
            "The excerpt places the pepper forests in Malabar. Ormus is described as a trading city with merchandise and treasure, not a place where spices were grown.",
            "Pepper packed in earthen vessels for sale and a city full of \"all kinds of merchandize\" point to trade with distant markets.",
            "The author describes local people growing and drying the pepper. Europeans did not control the Malabar pepper trade until the sixteenth century, and only in part.",
          ],
          answer: 0 },
        { id: "t23-m02", skill: "u2", type: "mcq", set: "t23-s1", topic: "2.3", reasoning: "Causation",
          question: "The presence of Jews and Christians in Flandrina, described in the second paragraph, is best explained by which of the following?",
          choices: [
            "Merchants and settlers from Southwest Asia came by sea over many centuries and formed communities that kept their own religions.",
            "Crusader armies from Europe conquered parts of southern India and settled there.",
            "Mongol armies conquered southern India and moved Christian and Jewish captives there.",
            "Portuguese missionaries converted many people on the Malabar Coast.",
          ],
          why: [
            "Correct. Jewish and Christian communities on the Malabar Coast grew from contacts with Southwest Asia carried by the sea trade, an example of the diasporic communities that Indian Ocean trade created.",
            "The crusades were fought in Southwest Asia and the Mediterranean, and no crusader army reached India.",
            "The Mongols raided northern India but never conquered the south.",
            "The Portuguese did not reach India until 1498, long after Odoric found these communities.",
          ],
          answer: 0 },
        { id: "t23-m03", skill: "u2", type: "mcq", set: "t23-s1", topic: "2.3", reasoning: "Sourcing and situation",
          question: "Which of the following most likely explains why the author described the ships of Ormus and the growing of pepper in such detail?",
          choices: [
            "As a European friar traveling in the East, he was describing unfamiliar things for European readers, who knew pepper only as a costly import.",
            "As a Muslim merchant from Ormus, he was writing a guide to help other traders buy pepper at good prices.",
            "As a Chinese official, he was reporting to the emperor on states that owed tribute to China.",
            "As a Portuguese captain, he was gathering information to help his king seize the pepper ports.",
          ],
          why: [
            "Correct. Odoric was an Italian Franciscan, and his account was written down in Europe. Sewn ships and pepper forests were strange to his readers, and pepper reached Europe only through long chains of traders.",
            "The author was a Christian friar from Italy, not a merchant from Ormus, and the excerpt gives no prices.",
            "The author was a European friar, and the excerpt says nothing about tribute.",
            "Portuguese captains did not reach India until 1498, more than 150 years after this account.",
          ],
          answer: 0 },
        { id: "t23-m04", skill: "u2", type: "mcq", set: "t23-s2", topic: "2.3", reasoning: "Claims and evidence in sources",
          question: "Which of the following best describes the main argument of the passage?",
          choices: [
            "Indian Ocean trade expanded as merchants combined knowledge of seasonal winds with new maritime technology.",
            "Indian Ocean trade expanded mainly because empires conquered the coasts and forced merchants to trade.",
            "Indian Ocean trade stayed small because merchants could not stay in foreign ports for long.",
            "Indian Ocean trade was limited to light luxury goods because ships were too small to carry bulky cargo.",
          ],
          why: [
            "Correct. The passage credits the growth of trade to sailors who timed the monsoons and to tools such as large junks, the compass, and the astrolabe.",
            "The passage explains growth through environmental knowledge, technology, and merchant communities. It does not mention conquest.",
            "The passage says merchants waited for months in foreign ports and many settled there.",
            "The passage says large ships such as junks carried bulky goods.",
          ],
          answer: 0 },
        { id: "t23-m05", skill: "u2", type: "mcq", set: "t23-s2", topic: "2.3", reasoning: "Claims and evidence in sources",
          question: "Which of the following would best support the passage's claim about diasporic communities?",
          choices: [
            "The growth of Swahili, a Bantu language with many Arabic words, in the trading cities of the East African coast",
            "The building of the stone enclosures at Great Zimbabwe in the interior of southern Africa",
            "The use of camel caravans by merchants who crossed the Sahara to reach Mali",
            "The Ming dynasty's use of civil service examinations to choose officials",
          ],
          why: [
            "Correct. Swahili mixes a Bantu base with Arabic words because Arab and Persian merchants settled and married on the East African coast, as the passage describes.",
            "Great Zimbabwe grew rich from the gold trade with the coast, but it was built by local Shona peoples, not by a community of foreign merchants.",
            "Camel caravans belong to the trans-Saharan network, not to Indian Ocean merchant communities.",
            "The examinations were a policy of the Chinese state, not evidence of merchants settling abroad.",
          ],
          answer: 0 },
        { id: "t23-m06", skill: "u2", type: "mcq", set: "t23-s2", topic: "2.3", reasoning: "Comparison",
          question: "Compared with trade on the Silk Roads in the same period, Indian Ocean trade, as described in the passage, was better able to",
          choices: [
            "carry large quantities of bulky goods, because ships held far more cargo than caravans of pack animals",
            "operate without depending on the natural environment",
            "succeed without merchants settling in foreign lands",
            "rely on the protection of a single empire along the whole route",
          ],
          why: [
            "Correct. A large ship could carry heavy goods such as porcelain, timber, and grain in amounts no camel caravan could match, so the sea routes moved more bulk goods than the Silk Roads.",
            "The passage stresses that Indian Ocean sailors depended on the monsoon winds.",
            "The passage says many merchants settled in foreign ports and formed diasporic communities.",
            "No single empire controlled the Indian Ocean. The Silk Roads came closer to this under the Mongols.",
          ],
          answer: 0 },
        { id: "t23-m07", skill: "u2", type: "mcq", set: "t23-s3", topic: "2.3", reasoning: "Continuity and change",
          question: "Which of the following changes over time is best supported by the table?",
          choices: [
            "Later voyages carried Ming contacts beyond India to the Persian Gulf, Arabia, and East Africa.",
            "Later voyages stopped visiting Southeast Asian ports such as Malacca.",
            "The voyages came more often over time, with shorter gaps between them.",
            "Early voyages went mainly to East Africa, and later voyages went mainly to Southeast Asia.",
          ],
          why: [
            "Correct. The first three voyages went no farther west than Calicut, the fourth reached Hormuz, and the fifth and sixth reached Aden and the East African coast.",
            "Malacca appears on the fifth and seventh voyages as well as the early ones.",
            "The gaps grew longer. The sixth voyage returned in 1422, and the seventh did not begin until 1431.",
            "This reverses the pattern. East African ports appear only from the fifth voyage on.",
          ],
          answer: 0 },
        { id: "t23-m08", skill: "u2", type: "mcq", set: "t23-s3", topic: "2.3", reasoning: "Causation",
          question: "Which of the following best explains why the Ming government sent no more voyages like those in the table after 1433?",
          choices: [
            "Ming rulers turned their resources toward defending the northern frontier, and many court officials opposed the voyages' great cost.",
            "Portuguese warships had taken control of the main sea lanes of the Indian Ocean.",
            "The Black Death had killed most of the sailors who manned the Chinese fleets.",
            "Indian Ocean rulers refused to trade with China after the voyages ended in conflict.",
          ],
          why: [
            "Correct. The Ming faced Mongol threats on the northern frontier, and officials at court argued that the costly fleets brought little return, so the voyages stopped.",
            "The Portuguese did not enter the Indian Ocean until 1498, decades after the last voyage.",
            "The Black Death struck in the mid-fourteenth century, long before the voyages began in 1405.",
            "Indian Ocean ports kept trading with Chinese merchants after 1433. The voyages ended because of decisions at the Ming court.",
          ],
          answer: 0 },
        { id: "t23-q1a", skill: "u2", type: "fr", part: "SAQ 1", sub: "a", topic: "2.3", lead: LEAD,
          prompt: "Identify ONE state that grew wealthy from Indian Ocean trade in the period c. 1200 to c. 1450.",
          earns: "The response names a state in the Indian Ocean region that grew rich from trade in the period.",
          yes: [
            "The Sultanate of Malacca, which controlled the Strait of Malacca between the Indian Ocean and the South China Sea.",
            "Kilwa, or another Swahili city-state such as Mombasa or Mogadishu, on the East African coast.",
            "Calicut or Gujarat in India, or the Majapahit kingdom on Java.",
          ],
          no: [
            "\"Mali.\" Mali grew rich from the trans-Saharan trade, not the Indian Ocean trade.",
            "\"The Inca Empire.\" The Inca were in South America and outside the Indian Ocean network.",
          ],
          example: "The Sultanate of Malacca grew wealthy from Indian Ocean trade.",
          notExample: "The Mongol Empire grew wealthy from the Silk Roads." },
        { id: "t23-q1b", skill: "u2", type: "fr", part: "SAQ 1", sub: "b", topic: "2.3", lead: LEAD,
          prompt: "Describe ONE way the growth of Indian Ocean trade affected the culture of East Africa or Southeast Asia in the period c. 1200 to c. 1450.",
          earns: "The response describes an accurate cultural effect of Indian Ocean trade in East Africa or Southeast Asia, with a specific detail.",
          yes: [
            "Islam spread along the Swahili coast as Arab and Persian merchants settled there, and cities such as Kilwa built stone mosques.",
            "The Swahili language developed as a Bantu language with many Arabic words, used by traders along the East African coast.",
            "Rulers of trading states in Southeast Asia, such as the sultans of Malacca, converted to Islam, which helped Islam spread through the region.",
          ],
          no: [
            "\"Christianity became the main religion of the Swahili coast.\" This is inaccurate.",
            "\"Trade changed their culture.\" This does not describe any specific change.",
          ],
          example: "Indian Ocean trade spread Islam to the Swahili coast of East Africa. Muslim merchants from Arabia and Persia settled in cities such as Kilwa and Mombasa, many local rulers and traders converted, and these cities built mosques of coral stone.",
          notExample: "People in East Africa started trading with other people." },
        { id: "t23-q1c", skill: "u2", type: "fr", part: "SAQ 1", sub: "c", topic: "2.3", lead: LEAD,
          prompt: "Explain ONE way economic developments in China or South Asia contributed to the growth of Indian Ocean trade in the period c. 1200 to c. 1450.",
          earns: "The response names an accurate economic development in China or South Asia and explains how it increased Indian Ocean trade.",
          yes: [
            "Chinese workshops under the Song and Yuan produced porcelain and silk in great quantities, which gave merchants goods that buyers across the Indian Ocean wanted.",
            "Gujarat and other parts of India produced large amounts of cotton cloth, which merchants carried to East Africa and Southeast Asia in exchange for gold, ivory, and spices.",
            "Farmers on India's Malabar Coast grew pepper for export, which drew Arab, Persian, and Chinese merchants to ports such as Calicut.",
          ],
          no: [
            "\"China made porcelain.\" This names a product but does not explain how it increased trade.",
            "\"India's factories made textiles with steam engines.\" This is inaccurate for the period.",
          ],
          example: "In the Song and Yuan periods, Chinese workshops made porcelain and silk on a very large scale. Merchants loaded these goods onto junks and carried them to Southeast Asia, India, and East Africa, where buyers paid for them with spices, cotton, and gold, so Chinese production increased the volume of trade across the ocean.",
          notExample: "China was a big country with many people." },
      ] },
  ],
};

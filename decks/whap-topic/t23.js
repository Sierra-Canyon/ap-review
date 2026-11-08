// Topic 2.3 Quiz: Exchange in the Indian Ocean
// Sources: every stimulus this quiz uses, keyed by id.
import { maps } from "../whap/maps.js";

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
    id: "t23-s2", name: "Ports and goods of the Indian Ocean", intro: "Use the map below to answer the questions that follow.", label: "Map",
    sources: [
      { title: "Map", blocks: [
        { svg: maps["u2-ocean-goods"], caption: "Ports of the Indian Ocean and some goods traded from each, c. 1400 (routes approximate)" },
        { cite: "Map drawn for this review from Natural Earth land outlines (public domain). Places, dates, and routes checked against the Wikipedia articles \"Spice trade\" and \"Kilwa Sultanate,\" Encyclopaedia Britannica, \"Cambay,\" and the travel accounts of Marco Polo and Ibn Battuta.", kind: "map" },
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
        { id: "t23-m01", skill: "u2", type: "mcq", difficulty: "easy", set: "t23-s1", topic: "2.3", reasoning: "Claims and evidence in sources",
          question: "The second paragraph of the excerpt best supports which of the following conclusions about Indian Ocean trade in the early fourteenth century?",
          choices: [
            "Southern India grew pepper for distant markets, and its coastal cities were busy trading centers.",
            "Most spices traded in the Indian Ocean were grown on farms near Ormus and other Persian Gulf ports.",
            "The ports of the Malabar Coast traded mainly in local food crops, not goods for distant markets.",
            "Venetian and Genoese merchants controlled the growing and sale of pepper on the Malabar Coast.",
          ],
          why: [
            "Correct. The author says pepper is \"more plentiful than in any other part of the world\" in Malabar, that it is dried and packed \"for sale,\" and that Polumbrum \"abounds in all kinds of merchandize.\"",
            "The excerpt places the pepper forests in Malabar. Ormus is described as a trading city with merchandise and treasure, not a place where spices were grown.",
            "Pepper packed in earthen vessels for sale and a city full of \"all kinds of merchandize\" point to trade with distant markets.",
            "The author describes local people growing and drying the pepper. Italian merchants bought pepper in Egypt and the Levant, and no Europeans controlled the Malabar pepper trade until the Portuguese took part of it in the sixteenth century.",
          ],
          answer: 0 },
        { id: "t23-m02", skill: "u2", type: "mcq", difficulty: "easy", set: "t23-s1", topic: "2.3", reasoning: "Causation",
          question: "The presence of Jews and Christians in Flandrina, described in the second paragraph, is best explained by which of the following?",
          choices: [
            "Traders from Southwest Asia had settled there over centuries of trade and kept their faiths.",
            "Crusader armies from Europe had conquered parts of southern India and settled there after 1100.",
            "Ilkhanate armies had conquered southern India and moved Christian and Jewish captives there.",
            "Portuguese missionaries had converted many families in the pepper ports of the Malabar Coast.",
          ],
          why: [
            "Correct. Jewish and Christian communities on the Malabar Coast grew from contacts with Southwest Asia carried by the sea trade, an example of the diasporic communities that Indian Ocean trade created.",
            "The crusades were fought in Southwest Asia and the Mediterranean, and no crusader army reached India.",
            "The Mongols raided northern India but never conquered the south, and the Ilkhanate ruled Persia, not India.",
            "The Portuguese did not reach India until 1498, long after Odoric found these communities.",
          ],
          answer: 0 },
        { id: "t23-m03", skill: "u2", type: "mcq", difficulty: "easy", set: "t23-s1", topic: "2.3", reasoning: "Sourcing and situation",
          question: "Which of the following most likely explains why the author described the ships of Ormus and the growing of pepper in such detail?",
          choices: [
            "He was a European friar describing strange things to readers who knew pepper only as an import.",
            "He was a Muslim merchant of Ormus writing a guide to help other traders buy pepper at good prices.",
            "He was a Chinese official reporting to the Yuan emperor on states that owed tribute to China.",
            "He was a Venetian merchant gathering prices and routes to help his city outbid Genoa for pepper.",
          ],
          why: [
            "Correct. Odoric was an Italian Franciscan, and his account was written down in Europe. Sewn ships and pepper forests were strange to his readers, and pepper reached Europe only through long chains of traders.",
            "The author was a Christian friar from Italy, not a merchant from Ormus, and the excerpt gives no prices.",
            "The author was a European friar, and the excerpt says nothing about tribute.",
            "The author was a Franciscan friar, not a merchant, and the excerpt gives no prices.",
          ],
          answer: 0 },
        { id: "t23-m04", skill: "u2", type: "mcq", difficulty: "moderate", set: "t23-s2", topic: "2.3", reasoning: "Claims and evidence in sources",
          question: "Which of the following conclusions about Indian Ocean trade is best supported by the map?",
          choices: [
            "Each region supplied different goods, so sea routes joined ports that traded what others lacked.",
            "Kilwa supplied gold and ivory, while Hormuz supplied most of the spices sold in the ocean.",
            "Indian Ocean trade linked the ports of India with one another but rarely reached beyond them.",
            "The spices traded in the Indian Ocean came mainly from the ports of East Africa and Arabia.",
          ],
          why: [
            "Correct. The map shows gold and ivory from Kilwa, horses from Hormuz, cotton cloth from Cambay, pepper from Calicut, cinnamon from Ceylon, cloves and nutmeg from the islands of Southeast Asia, and silk and porcelain from Quanzhou, each traded along routes that join them all.",
            "Kilwa is marked for gold and ivory, but Hormuz is marked for horses. The spices on the map come from Calicut, Ceylon, Maluku, and Banda.",
            "The routes on the map run from East Africa and Arabia to Southeast Asia and China, far beyond India.",
            "The spices on the map come from Calicut, Ceylon, Maluku, and Banda. Kilwa is marked for gold and ivory and Hormuz for horses.",
          ],
          answer: 0 },
        { id: "t23-m05", skill: "u2", type: "mcq", difficulty: "easy", set: "t23-s2", topic: "2.3", reasoning: "Causation",
          question: "Malacca's location, as shown on the map, best explains which of the following?",
          choices: [
            "Its rise as a port where ships passed between the Indian Ocean and the South China Sea",
            "Its control of the gold and ivory trade that ran down the coast of East Africa to Kilwa",
            "Its role as the main source of the cloves and nutmeg sold in ports across the Indian Ocean",
            "Its position at the eastern end of the caravan routes that crossed Central Asia",
          ],
          why: [
            "Correct. Malacca lies on the strait between Sumatra and the Malay Peninsula, where the routes from Calicut and Ceylon meet the routes from Quanzhou and the Spice Islands. Ships waiting for the monsoon winds to change could trade and take on supplies there.",
            "The map places the gold trade at Kilwa, on the far side of the ocean.",
            "The map marks cloves at Maluku and nutmeg at Banda, islands far to the east of Malacca.",
            "Malacca is a seaport in Southeast Asia, thousands of miles from the overland routes of Central Asia.",
          ],
          answer: 0 },
        { id: "t23-m06", skill: "u2", type: "mcq", difficulty: "moderate", set: "t23-s2", topic: "2.3", reasoning: "Comparison",
          question: "Compared with the goods usually carried on the overland Silk Roads, many of the goods shown on the map were",
          choices: [
            "heavier and bulkier, like horses and porcelain, since ships carried bigger loads than caravans",
            "lighter and more costly per pound, since ships charged more than caravans for each load",
            "sold mainly within the region that produced them, since the monsoon winds made voyages too seasonal",
            "carried by the fleets of a single empire that controlled the whole ocean and its ports",
          ],
          why: [
            "Correct. Caravans favored light goods of high value, such as silk. Ships could carry horses, bales of cloth, and crates of porcelain in quantities no caravan could match, so the sea routes moved bulkier trade.",
            "Ships moved heavy and bulky cargo more cheaply than caravans, which is why horses and porcelain went by sea.",
            "The routes on the map carry each good away from where it was produced, and merchants planned voyages around the monsoons rather than avoiding them.",
            "The map shows many separate ports and no single empire. No state controlled the whole Indian Ocean in this period.",
          ],
          answer: 0 },
        { id: "t23-m07", skill: "u2", type: "mcq", difficulty: "difficult", set: "t23-s3", topic: "2.3", reasoning: "Continuity and change",
          question: "Which of the following changes over time is best supported by the table?",
          choices: [
            "Later voyages went past India to the Persian Gulf, Arabia, and East Africa.",
            "Later voyages stopped calling at Southeast Asian ports such as Malacca, Java, and Champa.",
            "Later voyages went farther west, and the fleets stopped calling at Calicut after 1415.",
            "Early voyages went mainly to East Africa, and later voyages went mainly to Southeast Asia.",
          ],
          why: [
            "Correct. The first three voyages went no farther west than Calicut, the fourth reached Hormuz, and the fifth and sixth reached Aden and the East African coast.",
            "Malacca appears on the fifth and seventh voyages, and Java and Champa on the seventh.",
            "The first half is true, but Calicut appears on the fifth and seventh voyages as well as the early ones.",
            "This reverses the pattern. East African ports appear only from the fifth voyage on.",
          ],
          answer: 0 },
        { id: "t23-m08", skill: "u2", type: "mcq", difficulty: "difficult", set: "t23-s3", topic: "2.3", reasoning: "Causation",
          question: "Which of the following best explains why the Ming government sent no more voyages like those in the table after 1433?",
          choices: [
            "Ming rulers shifted funds to the northern frontier, and court officials opposed the voyages' cost.",
            "Portuguese warships had taken control of the main sea lanes linking India and Southeast Asia.",
            "Plague outbreaks had killed so many sailors that the Ming could no longer man the treasure fleets.",
            "The Yongle Emperor, who had sponsored the voyages, died in 1424 and they ended at once.",
          ],
          why: [
            "Correct. The Ming faced Mongol threats on the northern frontier, and officials at court argued that the costly fleets brought little return, so the voyages stopped.",
            "The Portuguese did not reach India until 1498, decades after the last voyage.",
            "The Black Death struck in the mid-fourteenth century, before the voyages began in 1405, and no plague ended them.",
            "Yongle did die in 1424, but the voyages did not end then: a seventh voyage sailed from 1431 to 1433 under his grandson.",
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

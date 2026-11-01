// AP World History: Modern, Topic 2.7 Quiz: Comparison of Economic Exchange (Unit 2: Networks of Exchange, c. 1200 to c. 1450)
// Sources: every stimulus this quiz uses, keyed by id.
export const sets = {
  "t27-s1": {
    id: "t27-s1", name: "Horses by sea and merchants by land", intro: "Use the two sources below to answer the questions that follow.",
    sources: [
      { title: "Source 1", blocks: [
        { p: "It was a matter of agreement that Maliku-l Islám Jamálu-d dín and the merchants should embark every year from the island of Kais and land at Ma'bar 1,400 horses of his own breed... It was also agreed that he should embark as many as he could procure from all the isles of Persia, such as Katíf, Lahsá, Bahrein, Hurmúz and Kulhátú. The price of each horse was fixed from of old at 220 dínárs of red gold, on this condition, that if any horses should sustain any injury during the voyage, or should happen to die, the value of them should be paid from the royal treasury. It is related by authentic writers, that in the reign of Atábak Abú Bakr, 10,000 horses were annually exported from these places to Ma'bar, Kambáyat, and other ports in their neighbourhood..." },
        { cite: "'Abdu-llah Wassáf, a Persian historian who served the Mongol Ilkhans of Persia, Tazjiyatu-l Amsár wa Tajriyatu-l Ásár (known as the Tarikh-i Wassaf, written in the early fourteenth century), from the extract headed \"Eulogium upon the Countries of Hind,\" in H. M. Elliot and John Dowson, eds., The History of India as Told by Its Own Historians: The Muhammadan Period, vol. III (London: Trübner and Co., 1871), section XI, as transcribed by the Packard Humanities Institute, Persian Literature in Translation. Ma'bar is the Coromandel coast of southeastern India. Kais (Kish) is an island in the Persian Gulf, and the page describes Jamálu-d dín as the ruler of an \"independent principality of Kais.\" Katíf, Lahsá, Bahrein, Hurmúz, and Kulhátú are ports and islands on the Arabian and Persian shores of the Gulf, and Kambáyat is Cambay, a port in Gujarat in western India. Atábak Abú Bakr ruled Fars, in southern Persia, in the mid-thirteenth century. A dínár is a gold coin.", url: "https://persian.packhum.org/text/080201013", kind: "primary" },
      ] },
      { title: "Source 2", blocks: [
        { p: "According to the list taken by the Kathayans, Amir Shadi Khoja, and Gaksheh, had 200 persons in their retinue; Soltan Ahmed and Gayath-addin, 500; Argdak, sixty; Ardvan, fifty; and Taj'oddin, fifty; in all 860 persons; among whom were many merchants, who were passed as belonging to the retinue of the ambassadors, and who were, afterwards under the necessity of performing the services which fell to their lot, according to the register." },
        { p: "... Here [at a fortress on the Chinese frontier] the ambassadors and all the members of their retinues were carefully numbered, and a new list made of all their names. ... Every evening they arrived at a Yam or lodging, and once every week at a city." },
        { cite: "Account of the embassy that Shah Rukh, the Timurid ruler of Persia and Central Asia, sent from Herat to the Ming emperor Yongle (Yong-lo) at Khanbalek (Beijing) in 1419 to 1422, \"Travels of the Ambassadors of Mirza Shah Rokh, King of Persia, from Herat to Khanbalek in Kathay, in 1419,\" section 1, in Robert Kerr, A General History and Collection of Voyages and Travels, vol. I (Edinburgh: William Blackwood, 1824), chapter XVII, in the English version Kerr took from Astley's collection, as transcribed on Frances W. Pritchett's website (Columbia University). Kerr credits the Persian historian Mirkhond (Emir-Khond) with the account; the embassy included the painter Ghiyath al-Din (\"Gayath-addin\"), whose journal of the journey was copied by later Persian historians. The Kathayans are the Chinese. A retinue is the group of people traveling with an important person. A Yam is a post station that gave official travelers lodging, food, and fresh horses.", url: "https://franpritchett.com/00generallinks/kerr/vol01chap17.html", kind: "primary" },
      ] },
    ],
  },
  "t27-s2": {
    id: "t27-s2", name: "States and trade in three networks", intro: "Use the passage below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "Between c. 1200 and c. 1450, the Silk Roads, the trans-Saharan routes, and the Indian Ocean all carried more trade than before, but the role of states differed among them. Overland trade depended heavily on large land empires. Caravans crossing Central Asia were safest when the Mongols ruled the whole route, and gold and salt crossed the Sahara under the protection of West African empires such as Mali, whose rulers taxed the trade. In the Indian Ocean, by contrast, no single empire controlled the sea. Trade there was run mostly by merchants and by port cities, such as Kilwa, Calicut, and Malacca, that grew rich by offering safe harbors and fair markets to ships from many lands. In this view, the sea lanes depended less on the power of empires than the land routes did." },
        { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" },
      ] },
    ],
  },
};

export default {
  forms: [
    { id: "t27", name: "Topic 2.7 Quiz: Comparison of Economic Exchange", group: "Unit 2: Networks of Exchange",
      items: [
        // ---------- Set 1: Wassaf and the Shah Rukh embassy ----------
        { id: "t27-m01", skill: "u2", type: "mcq", set: "t27-s1", topic: "2.7", reasoning: "Comparison",
          question: "Which of the following best describes a similarity between the trade described in Source 1 and the trade described in Source 2?",
          choices: [
            "In both, rulers or their officials took part in or closely watched the trade that merchants carried on.",
            "In both, goods crossed deserts on camel caravans.",
            "In both, the trade consisted mainly of silk and other light luxury goods.",
            "In both, merchants traveled freely without any record kept by a state.",
          ],
          why: [
            "In Source 1, the ruler of Kais and his merchants agreed to deliver horses at a fixed price, and a royal treasury paid for horses lost at sea; in Source 2, Chinese officials counted every traveler and kept a register of the merchants who came with the embassy.",
            "Source 1 describes horses shipped by sea across the Persian Gulf and the Arabian Sea, not a desert caravan.",
            "Source 1 describes the trade of thousands of horses, which were neither light nor silk.",
            "Source 2 says the Chinese took a list of all 860 travelers and made a new list at the frontier.",
          ], answer: 0 },

        { id: "t27-m02", skill: "u2", type: "mcq", set: "t27-s1", topic: "2.7", reasoning: "Comparison",
          question: "Which of the following best describes a difference between the two sources?",
          choices: [
            "Source 1 describes trade arranged through a commercial agreement, while Source 2 describes merchants who traveled as part of a diplomatic mission.",
            "Source 1 describes trade under the control of the Yuan dynasty, while Source 2 describes trade outside any Chinese state.",
            "Source 1 describes trade carried overland by pack animals, while Source 2 describes trade carried by ships.",
            "Source 1 describes trade that ended because of the Black Death, while Source 2 describes trade that was just beginning.",
          ],
          why: [
            "Source 1 sets out the number of horses, the price, and who pays for losses, while the merchants in Source 2 entered China listed as members of the ambassadors' retinue.",
            "Source 1 describes trade between the Persian Gulf and India, which the Yuan did not control, and Source 2 describes Ming officials controlling the travelers.",
            "This reverses the sources: Source 1 describes horses carried by sea, and Source 2 describes an overland journey from Herat to China.",
            "Source 1 says nothing about the plague, and the trade it describes went back to the thirteenth century; the Silk Roads trade in Source 2 was centuries old.",
          ], answer: 0 },

        { id: "t27-m03", skill: "u2", type: "mcq", set: "t27-s1", topic: "2.7", reasoning: "Contextualization",
          question: "The merchants in Source 2 most likely traveled as members of the ambassadors' retinue because",
          choices: [
            "the Ming dynasty allowed foreign trade mainly through official missions that brought tribute to the emperor",
            "the Mongol khans had opened the yam stations to merchants only",
            "Islamic law forbade merchants to travel without a ruler's envoy",
            "the Ming dynasty had destroyed all the caravanserais of Central Asia",
          ],
          why: [
            "Under the tribute system, the Ming let foreign merchants trade in China mostly when they came with official embassies, so many merchants joined missions such as this one.",
            "By 1419 the Ming, not the Mongols, ruled China, and yam stations served official travelers rather than merchants alone.",
            "Muslim merchants traveled on their own across Afro-Eurasia; no such rule existed.",
            "The Ming did not rule Central Asia, and caravanserais there remained in use.",
          ], answer: 0 },

        { id: "t27-m04", skill: "u2", type: "mcq", set: "t27-s1", topic: "2.7", reasoning: "Comparison",
          question: "The horse trade described in Source 1 was most similar to which other exchange in the period c. 1200 to c. 1450?",
          choices: [
            "Chinese states traded tea for horses raised by peoples of Tibet and the northern steppe.",
            "Swahili cities sold gold and ivory to merchants from Arabia and India.",
            "Italian merchants bought silk and spices at Black Sea and eastern Mediterranean ports.",
            "Chinese merchants sold porcelain in the ports of Southeast Asia and East Africa.",
          ],
          why: [
            "In both cases, a state that could not raise enough good warhorses at home paid to bring them from a region that bred them, since horses were hard to raise in the hot, humid lands of southern India, and Song China had lost most of its horse-raising lands to northern rivals.",
            "Gold and ivory were luxury goods taken from Africa, not animals bought by a state for its army.",
            "Silk and spices were luxuries bought for profit by merchants, not warhorses bought for a ruler's army.",
            "Porcelain was a manufactured good sold abroad, the reverse of a state importing horses.",
          ], answer: 0 },

        // ---------- Set 2: practice passage on states and trade ----------
        { id: "t27-m05", skill: "u2", type: "mcq", set: "t27-s2", topic: "2.7", reasoning: "Claims and evidence in sources",
          question: "Which of the following best describes the argument of the passage?",
          choices: [
            "Trade on the land routes relied more on the protection of large empires than trade in the Indian Ocean did.",
            "The Indian Ocean network carried less trade than the Silk Roads in this period.",
            "States in all three networks tried to limit trade in order to protect their own producers.",
            "The Mongol Empire controlled trade in all three networks.",
          ],
          why: [
            "The passage says caravans needed empires such as the Mongols and Mali, while Indian Ocean trade was run mostly by merchants and port cities.",
            "The passage says all three networks grew; it does not say which carried more.",
            "The passage describes states protecting and taxing trade, not limiting it.",
            "The passage names the Mongols only for Central Asia, and Mali for the Sahara, and says no single empire controlled the Indian Ocean.",
          ], answer: 0 },

        { id: "t27-m06", skill: "u2", type: "mcq", set: "t27-s2", topic: "2.7", reasoning: "Claims and evidence in sources",
          question: "Which of the following would best support the passage's claim about trade in the Indian Ocean?",
          choices: [
            "Gujarati, Arab, Persian, and Chinese merchants traded side by side in Indian Ocean ports whose rulers welcomed them in exchange for customs duties.",
            "Mongol fleets attacked Japan in 1274 and 1281 but were driven back by storms and Japanese defenders.",
            "Mansa Musa carried large amounts of gold across Egypt on his pilgrimage to Mecca in 1324.",
            "Caravans of camels carried slabs of salt from the Saharan mines of Taghaza to Timbuktu.",
          ],
          why: [
            "Merchants from many lands trading in ports run by local rulers, with no empire in charge of the sea, matches the passage's picture of Indian Ocean trade.",
            "The attacks on Japan were military campaigns, and they say nothing about who ran Indian Ocean trade.",
            "Mansa Musa's pilgrimage shows the wealth of Mali and the trans-Saharan network, not Indian Ocean trade.",
            "Salt caravans belong to the trans-Saharan network, not the Indian Ocean.",
          ], answer: 0 },

        { id: "t27-m07", skill: "u2", type: "mcq", set: "t27-s2", topic: "2.7", reasoning: "Comparison",
          question: "Which of the following developments would most challenge the passage's contrast between the sea lanes and the land routes?",
          choices: [
            "The Ming dynasty sent large fleets under Zheng He across the Indian Ocean between 1405 and 1433 to display Chinese power and collect tribute.",
            "Swahili city-states such as Kilwa and Mombasa competed with one another for trade.",
            "Monsoon winds set the times of year when ships sailed between India and East Africa.",
            "Muslim merchants helped spread Islam to port cities in Southeast Asia.",
          ],
          why: [
            "Zheng He's voyages show a large land empire using its power at sea, which suggests that empires could shape Indian Ocean trade as they did the land routes.",
            "Competition among small city-states fits the passage's claim that no single empire controlled the sea.",
            "The monsoons are a feature of the environment and say nothing about the power of empires.",
            "The spread of Islam is a cultural effect of trade and does not address the role of states.",
          ], answer: 0 },

        { id: "t27-m08", skill: "u2", type: "mcq", set: "t27-s2", topic: "2.7", reasoning: "Comparison",
          question: "According to the passage, the trans-Saharan routes were most similar to the Silk Roads in that both",
          choices: [
            "depended on land empires that protected caravans and taxed the goods they carried",
            "were run mostly by merchants and port cities rather than by empires",
            "moved mostly bulk goods such as rice and timber",
            "relied on monsoon winds to set the timing of travel",
          ],
          why: [
            "The passage pairs the Mongols on the Silk Roads with Mali in the Sahara as empires whose protection made overland trade possible.",
            "The passage uses this description for the Indian Ocean, in contrast to the land routes.",
            "Bulk goods such as rice and timber traveled mostly by sea in the Indian Ocean, and the passage does not say the land routes carried them.",
            "Monsoon winds shaped sailing in the Indian Ocean, not travel by caravan.",
          ], answer: 0 },

        // ---------- SAQ: no source ----------
        { id: "t27-q1a", skill: "u2", type: "fr", part: "SAQ 1", sub: "a", topic: "2.7",
          lead: "Answer all parts of the question that follows.",
          prompt: "Identify ONE commercial practice or financial tool that made long-distance trade easier in the period c. 1200 to c. 1450.",
          earns: "The response names an accurate practice or tool that merchants or states used in a network of exchange in this period.",
          yes: [
            "Paper money, which the Song and Yuan dynasties issued and merchants used in China.",
            "Bills of exchange, which let Italian and Muslim merchants pay a sum in a distant city without carrying coins there.",
            "Partnerships in which an investor paid for goods and a traveling merchant carried them to market, and the two shared the profit.",
          ],
          no: [
            "\"Money.\" It is too general to identify a practice or tool.",
            "\"Credit cards.\" They are a modern invention.",
          ],
          example: "Merchants in the Islamic world and in Italy used bills of exchange, written orders to pay a sum of money in another city, so they did not have to carry large amounts of gold or silver over dangerous routes.",
          notExample: "Merchants traded things with each other." },

        { id: "t27-q1b", skill: "u2", type: "fr", part: "SAQ 1", sub: "b", topic: "2.7",
          lead: "Answer all parts of the question that follows.",
          prompt: "Describe ONE similarity between the trading cities of the Silk Roads and the trading cities of the Indian Ocean network in the period c. 1200 to c. 1450.",
          earns: "The response describes an accurate feature shared by trading cities in both networks, with specific detail such as a named city or group of merchants.",
          yes: [
            "Both Samarkand on the Silk Roads and Calicut on the Indian Ocean were home to merchants from many regions who traded goods from distant lands.",
            "Cities in both networks, such as Samarkand and Kilwa, grew rich from the trade that passed through them, and their rulers taxed it.",
            "Both Bukhara and Quanzhou had communities of Muslim merchants, so Islam spread along both networks.",
          ],
          no: [
            "\"Both had markets.\" It is too general to describe a similarity.",
            "\"Both were ports on the sea.\" Silk Road cities such as Samarkand and Bukhara were far inland.",
          ],
          example: "Trading cities in both networks held communities of foreign merchants: Muslim merchants from Persia and Arabia lived in Quanzhou on the Indian Ocean routes, just as merchants from India, Persia, and China met in the markets of Samarkand on the Silk Roads.",
          notExample: "Cities were important for trade." },

        { id: "t27-q1c", skill: "u2", type: "fr", part: "SAQ 1", sub: "c", topic: "2.7",
          lead: "Answer all parts of the question that follows.",
          prompt: "Explain ONE reason the goods traded across the Sahara differed from the goods traded in the Indian Ocean network in the period c. 1200 to c. 1450.",
          earns: "The response explains a cause, such as a difference in transport or in the natural resources of the regions involved, for a specific difference in the goods the two networks carried.",
          yes: [
            "Camels could carry only limited loads on the long desert crossing, so trans-Saharan trade focused on goods worth the trip, such as gold and salt, while ships in the Indian Ocean could also carry bulk goods such as cotton cloth, rice, and timber.",
            "West Africa had rich gold fields but little salt, while the Sahara had salt mines such as Taghaza, so desert trade centered on gold and salt; the Indian Ocean linked many regions with different products, such as Indian textiles, Chinese porcelain, and Southeast Asian spices.",
          ],
          no: [
            "\"The Sahara is a desert.\" It does not explain a difference in the goods traded.",
            "\"The Indian Ocean traded only spices.\" Indian Ocean trade also carried textiles, porcelain, timber, rice, and many other goods.",
          ],
          example: "A camel caravan could carry only so much across weeks of desert, so trans-Saharan merchants traded goods of high value or high demand, such as West African gold and Saharan salt; Indian Ocean ships could hold much larger cargoes, so they also carried everyday bulk goods such as Indian cotton cloth, rice, and timber.",
          notExample: "Different places have different things to sell." },
      ] },
  ],
};

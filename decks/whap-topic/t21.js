// Topic 2.1 Quiz: The Silk Roads
// Sources: every stimulus this quiz uses, keyed by id.
export const sets = {
  "t21-s1": {
    id: "t21-s1", name: "William of Rubruck at Karakorum", intro: "Use the source below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "The ordinary money of Kathay is of paper made like pasteboard, the breadth and length of a hand, on which lines are printed, like the seal of Mangu." },
        { p: "... It [Caracarum] contains two principal streets: that of the Saracens in which the fairs are held, and to which many merchants resort, as the court is always near; the other is the street of the Kathayans, which is full of artificers. ... There are twelve idol temples belonging to different nations, two Mahometan mosques, and one Nestorian church at the end of the town. ... On the east side, there is a market for millet and other grain, but which is ill supplied; on the west, sheep and goats are sold; on the north side, oxen and waggons; and on the south side, horses." },
        { cite: "William of Rubruck (Rubruquis), a Franciscan friar from Flanders who carried letters from King Louis IX of France to the Mongol court, account of his journey of 1253 to 1255, section 36, in Robert Kerr, A General History and Collection of Voyages and Travels, vol. I (Edinburgh: William Blackwood, 1824), chapter IX, in Kerr's English version translated from the Latin text printed by Hakluyt, as transcribed on Frances W. Pritchett's website (Columbia University); the publisher and date are from the title page of the Project Gutenberg copy of the same volume (ebook 10600). Rubruck stayed at Caracarum (Karakorum), the Mongol capital, in 1254. Kathay is Cathay (northern China), and Mangu is Mongke, the Great Khan. Saracens and Mahometans are Muslims, artificers are craftsmen, and idol temples are Rubruck's name for Buddhist and other temples that were neither Christian nor Muslim. The Nestorians were Christians of the Church of the East.", url: "https://franpritchett.com/00generallinks/kerr/vol01chap09sect36to39.html", kind: "primary" },
      ] },
    ],
  },
  "t21-s2": {
    id: "t21-s2", name: "Credit, caravans, and the Black Sea", intro: "Use the passage below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "Many historians argue that overland trade across Eurasia grew quickly in the century after c. 1250. Wealthy buyers in Europe and the Muslim world wanted Chinese silk and spices from South and Southeast Asia. Merchants from Venice and Genoa set up trading posts at Black Sea ports such as Caffa and Tana, where caravans from Central Asia arrived. Instead of carrying heavy coins, traders used bills of exchange, written orders that let a merchant pay in one city and collect in another, and banking houses in Italian cities handled these payments. Cities where routes met, such as Tabriz in Persia, grew rich by taxing and serving the caravans. After c. 1350, however, wars among the Mongol khanates and the spread of plague made the overland routes less safe, and more goods moved by sea." },
        { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" },
      ] },
    ],
  },
};

export default {
  forms: [
    { id: "t21", name: "Topic 2.1 Quiz: The Silk Roads", group: "Unit 2: Networks of Exchange",
      items: [
        // ===== Set 1: William of Rubruck at Karakorum, 1254 =====
        { id: "t21-m01", skill: "u2", type: "mcq", difficulty: "easy", set: "t21-s1", topic: "2.1", reasoning: "Contextualization",
          question: "Which of the following best describes the historical context of the excerpt?",
          choices: [
            "Mongol conquests had united much of Eurasia, and the khans drew foreign merchants and artisans to their court.",
            "The Abbasid caliphs controlled Central Asian trade and invited Christian missionaries to settle on the steppe.",
            "The Ming dynasty had driven the Mongols out of China and opened its northern frontier to foreign traders.",
            "The Black Death had emptied Chinese cities, and surviving craftsmen moved north to work for steppe rulers.",
          ],
          why: [
            "Correct. By the 1250s the Mongols ruled from northern China to Persia and Russia, and Karakorum attracted Muslim merchants, Chinese craftsmen, and religious leaders of many faiths.",
            "The Abbasids never controlled Central Asia, and the Mongols destroyed their capital, Baghdad, in 1258.",
            "The Ming dynasty began in 1368, more than a century after Rubruck's visit.",
            "The Black Death spread in the 1340s, long after this account. Many craftsmen at Karakorum had been brought there by Mongol rulers.",
          ],
          answer: 0 },
        { id: "t21-m02", skill: "u2", type: "mcq", difficulty: "easy", set: "t21-s1", topic: "2.1", reasoning: "Continuity and change",
          question: "The paper money described in the first paragraph is best understood as evidence of which of the following?",
          choices: [
            "Mongol rulers kept a currency that Chinese states had issued since the Song dynasty.",
            "Italian merchants had carried European paper currency east along the Silk Roads.",
            "The Mongols had replaced coins with paper money in every land from Persia to China.",
            "The Mongols had learned to print paper money from the Abbasid treasury in Baghdad.",
          ],
          why: [
            "Correct. The Song government printed paper money, and the Mongols kept using it in China, stamping it with the authority of the khan.",
            "Paper money began in China, not Europe. Europeans learned of it from travelers' accounts like this one.",
            "Coins remained in use across much of the Mongol world, including Persia and Central Asia.",
            "Paper money was a Chinese invention. The Abbasids used gold and silver coins, and Baghdad fell to the Mongols only in 1258, after this account.",
          ],
          answer: 0 },
        { id: "t21-m03", skill: "u2", type: "mcq", difficulty: "easy", set: "t21-s1", topic: "2.1", reasoning: "Claims and evidence in sources",
          question: "Rubruck's description of the street \"of the Saracens in which the fairs are held\" best supports which of the following conclusions?",
          choices: [
            "Muslim merchants had a leading role in the trade that reached the Mongol court.",
            "The Great Khan's court had adopted Islam as the official faith of the empire.",
            "Mongol law barred foreign merchants from living near the khan's court.",
            "The fairs at Caracarum traded mainly in grain and livestock raised on the steppe.",
          ],
          why: [
            "Correct. The fairs were held in the Muslim quarter, and many merchants came there because the court was near, which shows the central role of Muslim traders in Silk Roads commerce.",
            "The excerpt shows Muslims trading in the capital, not the rulers' faith. The Great Khans at Karakorum did not become Muslim, and the Mongol rulers of Persia adopted Islam only in 1295.",
            "Rubruck says many merchants came to the Saracens' street because the court is near, the opposite of keeping them away.",
            "Rubruck calls the grain market \"ill supplied\" and describes the livestock markets apart from the fairs, which he places in the Saracens' street.",
          ],
          answer: 0 },
        { id: "t21-m04", skill: "u2", type: "mcq", difficulty: "moderate", set: "t21-s1", topic: "2.1", reasoning: "Sourcing and situation",
          question: "Rubruck's point of view as a Christian friar from western Europe most likely explains why he",
          choices: [
            "counted the temples, mosques, and churches in the town",
            "praised paper money as better than the coins used in Europe",
            "called the Great Khan the rightful protector of all Christians",
            "described the Mongol capital as the largest city in the world",
          ],
          why: [
            "Correct. As a missionary who hoped to spread Christianity, Rubruck paid close attention to which religions were present and how many places of worship each had.",
            "Rubruck describes the paper money but does not judge it against European coins.",
            "Nothing in the excerpt makes this claim, and as a Catholic friar Rubruck would not have accepted it.",
            "Rubruck describes a modest town with a mud wall, and elsewhere he says it is not as fine as the town of St Denis, near Paris.",
          ],
          answer: 0 },

        // ===== Set 2: practice passage, credit, caravans, and the Black Sea =====
        { id: "t21-m05", skill: "u2", type: "mcq", difficulty: "moderate", set: "t21-s2", topic: "2.1", reasoning: "Causation",
          question: "Which of the following, not mentioned in the passage, also helps explain the growth of overland trade after c. 1250?",
          choices: [
            "Mongol rulers kept the roads safe and ran relay stations for official travelers.",
            "Portuguese ships opened a sea route around Africa to the ports of the Indian Ocean.",
            "The Ming dynasty sent large treasure fleets across the Indian Ocean to East Africa.",
            "The Abbasid caliphate extended its control over the oasis cities of Central Asia.",
          ],
          why: [
            "Correct. Mongol rule over most of the routes reduced the number of borders and tolls and made travel safer, and the relay stations of the yam carried officials and messages quickly.",
            "Portuguese ships reached the Indian Ocean in 1498, and the sea route drew trade away from the overland roads rather than helping them grow.",
            "Zheng He's voyages (1405 to 1433) were by sea and came after the period of growth the passage describes.",
            "The Abbasid caliphate in Baghdad fell to the Mongols in 1258 and did not control Central Asia in this period.",
          ],
          answer: 0 },
        { id: "t21-m06", skill: "u2", type: "mcq", difficulty: "moderate", set: "t21-s2", topic: "2.1", reasoning: "Comparison",
          question: "The bills of exchange described in the passage were most similar to which practice used in China?",
          choices: [
            "Flying cash, certificates that let a merchant pay in one city and collect in another",
            "The tribute system, under which foreign rulers sent gifts to the Chinese emperor",
            "Ortogh partnerships, in which Mongol nobles invested in merchants' caravans",
            "Champa rice, a fast-ripening crop that let farmers grow two harvests a year",
          ],
          why: [
            "Correct. Like a bill of exchange, flying cash was a paper credit instrument that saved merchants from carrying heavy coins over long distances.",
            "The tribute system was a form of diplomacy and exchange between rulers, not a way for merchants to move money.",
            "Ortogh partnerships raised money for trade from Mongol nobles, but they did not let a merchant pay in one place and collect in another.",
            "Champa rice increased food production in China but was not a commercial practice.",
          ],
          answer: 0 },
        { id: "t21-m07", skill: "u2", type: "mcq", difficulty: "moderate", set: "t21-s2", topic: "2.1", reasoning: "Continuity and change",
          question: "The change described in the last sentence of the passage was continued most directly by which later development?",
          choices: [
            "Portuguese ships began carrying Asian spices to Europe around Africa after 1498.",
            "Mongol armies conquered Persia and the lands of the Rus in the thirteenth century.",
            "Russia built railroads across Central Asia in the late nineteenth century.",
            "The Ottomans captured Constantinople in 1453 and made it their capital.",
          ],
          why: [
            "Correct. The Portuguese sea route around Africa carried even more Asian goods by water, continuing the shift away from overland caravans.",
            "These conquests came before c. 1350 and helped the overland routes grow, so they do not continue the shift to the sea.",
            "Railroads across Central Asia strengthened overland transport, which reverses the pattern rather than continuing it.",
            "The fall of Constantinople changed who ruled a key city, but it did not itself move trade from land routes to the sea.",
          ],
          answer: 0 },
        { id: "t21-m08", skill: "u2", type: "mcq", difficulty: "difficult", set: "t21-s2", topic: "2.1", reasoning: "Claims and evidence in sources",
          question: "Which of the following, not mentioned in the passage, would best support the argument that Italian merchants took part in overland trade with China?",
          choices: [
            "A Florentine handbook of c. 1340 gave the route and costs from the Black Sea to China.",
            "Venetian ships carried the crusaders of the Fourth Crusade to Constantinople in 1204.",
            "Genoese and Venetian fleets fought wars over trading rights in the eastern Mediterranean.",
            "Venetian merchants bought pepper in Alexandria that had come from India by the Red Sea.",
          ],
          why: [
            "Correct. Francesco Pegolotti's handbook advised Italian merchants on the journey from Tana to China, which shows that such trips were made often enough to need a guide.",
            "This event shows Venetian sea power in the Mediterranean, not trade with China.",
            "Wars between Genoa and Venice over Mediterranean trade do not show any link to China.",
            "This pepper reached Venice from India by sea through Egypt. It shows trade with Asia, but not overland trade with China.",
          ],
          answer: 0 },

        // ===== SAQ: no source, the Silk Roads =====
        { id: "t21-q1a", skill: "u2", type: "fr", part: "SAQ 1", sub: "a", topic: "2.1",
          lead: "Answer all parts of the question that follows.",
          prompt: "Identify ONE commercial practice or institution that made long-distance trade on the Silk Roads easier in the period c. 1200 to c. 1450.",
          earns: "The response names one accurate practice or institution, such as caravanserais, paper money, flying cash, bills of exchange, or banking houses.",
          yes: [
            "Caravanserais, inns along the routes where merchants and their animals could rest and store goods.",
            "Paper money, which Chinese governments issued and the Mongol rulers of China continued to use.",
            "Bills of exchange, which let a merchant pay in one city and collect the money in another.",
          ],
          no: [
            "\"The magnetic compass.\" This helped sea travel, not the overland Silk Roads.",
            "\"Railroads.\" Railroads did not exist until the nineteenth century.",
            "\"Merchants made trade easier.\" This names no practice or institution.",
          ],
          example: "Caravanserais were inns built along the Silk Roads, often about a day's travel apart, where merchants could rest, feed their camels, and store their goods safely.",
          notExample: "People traded silk on the Silk Roads." },
        { id: "t21-q1b", skill: "u2", type: "fr", part: "SAQ 1", sub: "b", topic: "2.1",
          lead: "Answer all parts of the question that follows.",
          prompt: "Describe ONE way growing demand for luxury goods affected producers in Afro-Eurasia in the period c. 1200 to c. 1450.",
          earns: "The response names a specific luxury good and a region that produced it and describes how demand changed its production or trade.",
          yes: [
            "Demand for silk and porcelain led Chinese workshops to produce more of these goods for sale to buyers abroad.",
            "Persian and Indian weavers expanded their production of fine cotton and silk textiles to sell to distant markets.",
            "In the fourteenth century, potters at Jingdezhen in China made blue-and-white porcelain, using cobalt blue from Persia, much of it for buyers in Southwest Asia.",
          ],
          no: [
            "\"People wanted luxury goods.\" This restates the prompt and names no producers or effects.",
            "\"China made silk.\" This names a good but does not describe how demand affected its production.",
            "\"Demand for sugar led to plantations in the Caribbean.\" This happened after 1450 and outside Afro-Eurasia.",
          ],
          example: "Growing demand in Persia, the Mediterranean, and other regions for Chinese silk and porcelain led Chinese workshops to make these goods in larger quantities, and many of them were made especially for sale to foreign buyers.",
          notExample: "Luxury goods were expensive, so only rich people bought them." },
        { id: "t21-q1c", skill: "u2", type: "fr", part: "SAQ 1", sub: "c", topic: "2.1",
          lead: "Answer all parts of the question that follows.",
          prompt: "Explain ONE way the growth of trade on the Silk Roads affected cities along the routes in the period c. 1200 to c. 1450.",
          earns: "The response names a specific city or kind of city on the routes and explains how trade changed it, such as by making it wealthier, larger, or more diverse.",
          yes: [
            "Samarkand grew wealthy as a market where caravans met, and under Timur in the late fourteenth century it became a capital filled with mosques, markets, and craftsmen.",
            "Kashgar, an oasis city where routes around the Taklamakan Desert came together, prospered by supplying and taxing caravans.",
            "Trading cities such as Tabriz became home to merchants of many faiths and peoples, which spread goods, languages, and religions.",
          ],
          no: [
            "\"Cities got bigger.\" This names no city and does not explain how trade caused the change.",
            "\"Samarkand is in Central Asia.\" This identifies a city but explains no effect of trade.",
            "\"Trade made Venice the capital of the Mongol Empire.\" This is false.",
          ],
          example: "Kashgar sat where routes around the Taklamakan Desert met. As more caravans passed through after 1200, the city earned money by selling food, water, and animals to merchants and by taxing their goods, so it grew into a wealthy market town with traders from many lands.",
          notExample: "Cities on the Silk Roads were important." },
      ] },
  ],
};

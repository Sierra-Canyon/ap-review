// Unit 2: Networks of Exchange, c. 1200 to c. 1450
// Sources: every stimulus (multiple-choice sets, SAQs with a source), keyed by id.
export const sets = {
  "u2-s1": {
    id: "u2-s1", name: "Marco Polo on Baghdad", intro: "Use the source below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "Baldach, or Bagdat, is a great city, in which resided the great Khaliff, that is the Pope of all the Saracens; a river runs through it, from whence to the sea is accounted seventeen days' journey. ... In Baldach, or Bagdat, are many manufactures of gold and silk. There are wrought damasks and velvets... all the pearls in Christendom come from thence. In that city is an university, where is studied the law of Mohammed, physic, astronomy, and geomancy." },
        { p: "... Ulan [Hulagu], having a great army of one hundred thousand horse... took him and the city, in which he found infinite store of treasure... He sent for the Khaliff and reproved him, that in that war he had not provided himself with soldiers for defence, and commanded that he should be enclosed in that tower where his treasure was, without other sustenance." },
        { cite: "Marco Polo, The Travels of Marco Polo (dictated c. 1298), Chapter VII, English text from John Pinkerton's edition, reprinted in Voyages and Travels of Marco Polo, introduction by Henry Morley (London: Cassell and Company, 1891). The edition does not name a translator.", url: "https://www.gutenberg.org/cache/epub/79661/pg79661-images.html", kind: "primary" },
      ] },
    ],
  },
  "u2-s2": {
    id: "u2-s2", name: "Boccaccio on the plague in Florence", intro: "Use the source below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "I say, then, that the years of the beatific incarnation of the Son of God had reached the tale of one thousand three hundred and forty-eight when in the illustrious city of Florence... there made its appearance that deadly pestilence, which, whether disseminated by the influence of the celestial bodies, or sent upon us mortals by God in His just wrath... had had its origin some years before in the East, whence, after destroying an innumerable multitude of living beings, it had propagated itself without respite from place to place, and so, calamitously, had spread into the West." },
        { p: "In Florence, despite all that human wisdom and forethought could devise to avert it, as the cleansing of the city from many impurities by officials appointed for the purpose, the refusal of entrance to all sick folk... the doleful effects of the pestilence began to be horribly apparent..." },
        { cite: "Giovanni Boccaccio, The Decameron (written c. 1349 to 1353), First Day, Introduction, translated by J. M. Rigg (London, first printed 1903).", url: "https://www.gutenberg.org/cache/epub/3726/pg3726.html", kind: "primary" },
      ] },
    ],
  },
  "u2-s3": {
    id: "u2-s3", name: "Marco Polo on Tabriz", intro: "Use the source below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "Tauris is a great city in the province of Hircania, and is a most populous place. The inhabitants live by the exercise of arts and merchandise; they make stuffs of gold and silk. Foreign merchants residing there make very great gain, but the inhabitants are generally poor. They are a mixed people, of Nestorians, Armenians, Jacobites, Georgians, Persians, and Mohammedans." },
        { cite: "Marco Polo, The Travels of Marco Polo (dictated c. 1298), Chapter VIII, English text from John Pinkerton's edition, reprinted in Voyages and Travels of Marco Polo, introduction by Henry Morley (London: Cassell and Company, 1891). The edition does not name a translator. Tauris is the city of Tabriz in northwestern Iran.", url: "https://www.gutenberg.org/cache/epub/79661/pg79661-images.html", kind: "primary" },
      ] },
    ],
  },
  "u2-s4": {
    id: "u2-s4", name: "Monsoons and merchant communities", intro: "Use the passage below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "Between c. 1200 and c. 1450, the Indian Ocean linked East Africa, Arabia, India, Southeast Asia, and China in one of the largest trade networks in the world. Its rhythm was set by nature. The monsoon winds blew from the southwest in summer and from the northeast in winter, so sailors timed their voyages to the seasons and often waited months in port for the winds to change. These long waits encouraged merchants to settle abroad. Arab and Persian Muslim traders lived in the port cities of East Africa and India, and Chinese merchants settled in Southeast Asian ports. These diasporic communities married into local families and built mosques and temples. On the East African coast, this mixing helped create Swahili culture, which joined Bantu and Arabic language and customs." },
        { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" },
      ] },
    ],
  },
  "u2-s5": {
    id: "u2-s5", name: "Gold, salt, and Islam in West Africa", intro: "Use the passage below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "Trade across the Sahara grew as merchants traveled in large camel caravans and adopted saddles that let camels carry heavy loads over long distances. Caravans carried salt from desert mines and goods from North Africa south, and they carried gold, ivory, and enslaved people north. The West African states at the southern end of these routes grew rich by taxing this trade. Mali, which rose in the thirteenth century, controlled gold-producing lands and trading cities along the Niger River, such as Timbuktu. Muslim merchants brought Islam and Arabic writing with them. Many rulers, officials, and merchants converted, while much of the rural population kept older beliefs or blended them with Islam. For rulers, Islam offered ties to a wider world of trade, scholarship, and diplomacy." },
        { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" },
      ] },
    ],
  },
  "u2-s6": {
    id: "u2-s6", name: "Pegolotti's route from Tana to Cathay", intro: "Use the table below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "Stages of the overland route from Tana, an Italian trading post on the Sea of Azov, to the capital of Cathay (China), as listed in a merchant's handbook written by Francesco Balducci Pegolotti, an agent of a Florentine banking company." },
        { table: {
          head: ["Stage of the journey", "Days", "How the handbook says to travel"],
          rows: [
            ["Tana to Gintarchan (Astrakhan)", "25 (or 10 to 12 by horse wagon)", "Ox wagon"],
            ["Gintarchan to Sara (Sarai)", "1", "By river"],
            ["Sara to Saracanco (Saraichik)", "8", "By river, or by land"],
            ["Saracanco to Organci (Urgench)", "20", "Camel wagon"],
            ["Organci to Oltrarre (Otrar)", "35 to 40", "Camel wagons"],
            ["Oltrarre to Armalec (Almaliq)", "45", "Pack asses"],
            ["Armalec to Camexu (Ganzhou)", "70", "Asses"],
            ["Camexu to a river", "45", "On horseback"],
            ["Down the river to Cassai (Hangzhou)", "Not stated", "By river"],
            ["Cassai to the capital of Cathay (Khanbaliq, modern Beijing)", "30", "Not stated"],
          ],
        } },
        { cite: "Table built from Francesco Balducci Pegolotti, La pratica della mercatura (merchant's handbook, compiled c. 1340), Chapter I, in the translation by Henry Yule, Cathay and the Way Thither, revised by Henri Cordier, vol. III (London: Hakluyt Society, 1916), pp. 143 to 171, as transcribed by Silk Road Seattle, University of Washington. Place names follow the translation (the spelling Gintarchan is used for both rows); modern names are in parentheses.", url: "https://depts.washington.edu/silkroad/texts/pegol.html", kind: "data" },
      ] },
    ],
  },
  "u2-s7": {
    id: "u2-s7", name: "The Mongols as connectors", intro: "Use the passage below to answer all parts of the question that follows.",
    sources: [
      { title: "Source", blocks: [
        { p: "For a long time the Mongols were remembered mainly as destroyers, and their conquests did kill vast numbers of people and ruin cities such as Baghdad. Many historians now add a second picture. Once the conquests ended, Mongol rulers across Eurasia protected merchants, built relay stations for official messengers, and moved skilled people from one end of their lands to the other. Persian astronomers worked in China, Chinese physicians served at the court of the Mongol rulers of Persia, and officials of many faiths and languages helped run the government. Under this order, goods, ideas, and knowledge of technologies such as gunpowder spread more quickly than before. In this view, the Mongol Empire, for all its violence, was a crucial link that drew the regions of Afro-Eurasia closer together." },
        { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" },
      ] },
    ],
  },
  "u2-s8": {
    id: "u2-s8", name: "The Statute of Laborers, 1351", intro: "Use the source below to answer all parts of the question that follows.",
    sources: [
      { title: "Source", blocks: [
        { p: "Because a great part of the people... has now died in that pestilence, some, seeing the straights of the masters and the scarcity of servants, are not willing to serve unless they receive excessive wages... We, considering the grave inconveniences which might come from the lack especially of ploughmen and such labourers, ... have seen fit to ordain: that every man and woman of our kingdom of England, of whatever condition, whether bond or free, who is able bodied and below the age of sixty years, ... shall be bound to serve him who has seen fit so to seek after him; and he shall take only the wages liveries, meed or salary which... were accustomed to be paid in the twentieth year of our reign of England, or the five or six common years next preceding." },
        { cite: "King Edward III of England, The Statute of Laborers (as titled by the source, 1351), from Statutes of the Realm, vol. 1, p. 307, translated in Ernest F. Henderson, Select Historical Documents of the Middle Ages (London: George Bell and Sons, 1896), as published by the Avalon Project, Yale Law School. This text is the royal ordinance of 1349, which Parliament confirmed and extended as the Statute of Laborers in 1351. The twentieth year of Edward III's reign was 1346 to 1347, just before the plague reached England.", url: "https://avalon.law.yale.edu/medieval/statlab.asp", kind: "primary" },
      ] },
    ],
  },
};

export default [
  // ---------- Set 1: Marco Polo on Baghdad ----------
  { id: "u2-m01", skill: "u2", type: "mcq", set: "u2-s1", topic: "2.2", reasoning: "Causation",
    question: "The events described in the second paragraph of the excerpt were part of which broader development?",
    choices: [
      "The expansion of the Mongol Empire into Southwest Asia, which brought an end to the Abbasid Caliphate",
      "The Crusades, in which Christian armies from western Europe tried to control the eastern Mediterranean coast",
      "The rise of the Ottoman Empire, which captured the Byzantine capital of Constantinople",
      "The growth of the Delhi Sultanate, which spread Muslim rule across northern India",
    ],
    why: [
      "Hulagu, a grandson of Chinggis Khan, led the Mongol army that took Baghdad in 1258 and ended the Abbasid Caliphate as part of the Mongol conquest of Persia and Mesopotamia.",
      "The Crusades were aimed at Jerusalem and the Levant, and no crusading army captured Baghdad.",
      "The Ottomans took Constantinople in 1453 and did not conquer Baghdad until the sixteenth century.",
      "The Delhi Sultanate ruled in South Asia and fought off Mongol attacks; it did not take Baghdad.",
    ], answer: 0 },

  { id: "u2-m02", skill: "u2", type: "mcq", set: "u2-s1", topic: "2.1", reasoning: "Continuity and Change",
    question: "The first paragraph of the excerpt best supports which claim about Baghdad before the Mongol conquest?",
    choices: [
      "It was a center of manufacturing and Islamic learning that was linked by river to sea trade.",
      "It was a nomadic capital whose wealth came mainly from herding and raiding.",
      "It was a market town that grew rich mainly by taxing salt and gold carried across the Sahara.",
      "It was a port city whose wealth came mostly from exporting Chinese porcelain and silk by sea.",
    ],
    why: [
      "The excerpt describes workshops making gold and silk cloth, damasks and velvets, a school for law, medicine, and astronomy, and a river that runs to the sea.",
      "This describes Mongol society on the steppe, not the settled city the excerpt describes.",
      "This describes West African trading cities such as Timbuktu, not Baghdad.",
      "This describes Chinese ports such as Quanzhou; the excerpt says Baghdad made its own cloth and lay seventeen days from the sea.",
    ], answer: 0 },

  { id: "u2-m03", skill: "u2", type: "mcq", set: "u2-s1", topic: "2.2", reasoning: "Causation",
    question: "Marco Polo's account of the capture of Baghdad was most likely based on",
    choices: [
      "stories he heard from others, because the city fell in 1258, when Polo was a small child in Venice",
      "notes he took while traveling with his father and uncle through Baghdad during the siege",
      "court records of the Abbasid caliphs that he translated from Arabic into Italian",
      "letters that the caliph had sent to the pope asking for help against the Mongols",
    ],
    why: [
      "Polo was born c. 1254 and did not set out for Asia until c. 1271, so he could only have learned of the 1258 conquest secondhand, which helps explain legendary details such as the caliph being shut in with his treasure.",
      "Polo was about four years old in 1258 and was not in Baghdad during the siege.",
      "There is no evidence that Polo read Arabic or used Abbasid records; he dictated his book from memory and travel notes.",
      "The excerpt does not draw on any letters, and Polo never claims such a source.",
    ], answer: 0 },

  { id: "u2-m04", skill: "u2", type: "mcq", set: "u2-s1", topic: "2.3", reasoning: "Comparison",
    question: "The excerpt's statements that a river links Baghdad to the sea and that \"all the pearls in Christendom come from thence\" best reflect which pattern of the period?",
    choices: [
      "Cities of Southwest Asia linked Indian Ocean sea trade with markets in the Mediterranean world.",
      "Trans-Saharan caravans carried West African goods to the ports of North Africa.",
      "The Hanseatic League controlled trade among the towns of the Baltic and North Seas.",
      "Barges on the Grand Canal carried rice from southern China to northern China.",
    ],
    why: [
      "Goods such as Persian Gulf pearls moved by river and sea through Baghdad and then on to Christian Europe, joining the Indian Ocean network to Mediterranean trade.",
      "This was a real pattern, but it connected West Africa and North Africa, not Baghdad.",
      "The Hanseatic League traded in northern Europe and had no link to Baghdad's river trade.",
      "The Grand Canal moved goods within China, not between the Indian Ocean and Europe.",
    ], answer: 0 },

  // ---------- Set 2: Boccaccio on the plague ----------
  { id: "u2-m05", skill: "u2", type: "mcq", set: "u2-s2", topic: "2.6", reasoning: "Causation",
    question: "The spread of the pestilence \"from place to place\" described in the first paragraph was most directly caused by",
    choices: [
      "trade and travel along routes that linked Central Asia, the Black Sea, and the Mediterranean",
      "the return of crusading armies to Europe after their final defeat in the Holy Land",
      "the exchange of plants and animals between the Eastern and Western Hemispheres",
      "the movement of Bantu-speaking farmers into central and southern Africa",
    ],
    why: [
      "The plague moved west from Central Asia along caravan routes during the period of Mongol rule and reached Italy in 1347 aboard ships from Black Sea ports.",
      "The last crusader stronghold, Acre, fell in 1291, more than fifty years before the plague reached Europe.",
      "That exchange, the Columbian Exchange, began after 1492.",
      "Bantu migrations took place over many centuries before this period and did not reach Europe.",
    ], answer: 0 },

  { id: "u2-m06", skill: "u2", type: "mcq", set: "u2-s2", topic: "2.6", reasoning: "Causation",
    question: "Boccaccio's explanation of the cause of the pestilence best reflects which of the following?",
    choices: [
      "People in the fourteenth century did not know the biological cause of disease, so they explained epidemics through astrology or divine punishment.",
      "Thinkers of the Scientific Revolution had begun to explain disease through experiments and careful observation.",
      "Confucian scholars taught that natural disasters showed that a ruler had lost the Mandate of Heaven.",
      "Protestant reformers had challenged the authority of the Catholic Church over religious teaching.",
    ],
    why: [
      "Boccaccio offers two causes, \"the influence of the celestial bodies\" or God's \"just wrath,\" because the role of a bacterium carried by fleas was not discovered until the 1890s.",
      "The Scientific Revolution came in the sixteenth and seventeenth centuries, long after Boccaccio wrote.",
      "This idea belongs to Chinese political thought, not to a writer in Florence.",
      "The Protestant Reformation began in 1517, more than 150 years later.",
    ], answer: 0 },

  { id: "u2-m07", skill: "u2", type: "mcq", set: "u2-s2", topic: "2.6", reasoning: "Causation",
    question: "The measures described in the second paragraph of the excerpt provide evidence that",
    choices: [
      "city governments tried to protect public health by cleaning the city and keeping out the sick, but these efforts did not stop the disease",
      "communities in many parts of Europe blamed Jewish residents for the plague and attacked them",
      "Florence escaped the pestilence because its officials closed the city to all trade",
      "the Catholic Church in Florence refused to hold prayers for relief from the epidemic",
    ],
    why: [
      "The excerpt lists the cleaning of the city by officials and the refusal to let the sick enter, yet says the effects of the pestilence still became \"horribly apparent.\"",
      "Attacks on Jewish communities did happen in many European towns, but the excerpt does not mention them.",
      "The excerpt says the pestilence struck Florence despite these measures.",
      "The excerpt does not say the Church refused to hold prayers; in the full text, Boccaccio mentions public processions and prayers to God.",
    ], answer: 0 },

  { id: "u2-m08", skill: "u2", type: "mcq", set: "u2-s2", topic: "2.6", reasoning: "Comparison",
    question: "Which of the following was a consequence of the pestilence in both Europe and Southwest Asia in the fourteenth century?",
    choices: [
      "Sharp population losses that left fewer people to farm and work and disrupted trade",
      "The immediate and permanent end of trade between Europe and Asia",
      "The rapid growth of cities as rural people moved to work in factories",
      "The conversion of the Mongol rulers of Persia to Islam",
    ],
    why: [
      "The plague killed roughly a third or more of the people in Europe and a similar share in Egypt and Syria, causing labor shortages and economic disruption in both regions.",
      "Trade fell for a time but did not end; Venetian and Genoese merchants kept trading with Mamluk Egypt and Syria.",
      "Factory work and the large movement of people into industrial cities came with industrialization after 1750.",
      "The Ilkhan Ghazan converted to Islam in 1295, decades before the plague, so it could not have been a result.",
    ], answer: 0 },

  // ---------- Set 3: Marco Polo on Tabriz ----------
  { id: "u2-m09", skill: "u2", type: "mcq", set: "u2-s3", topic: "2.5", reasoning: "Comparison",
    question: "The excerpt best illustrates which characteristic of major trading cities along the Silk Roads in this period?",
    choices: [
      "They were home to communities of many different religions and origins.",
      "They were ruled directly by European merchant republics such as Venice.",
      "They specialized in a single export crop grown by enslaved workers.",
      "They banned foreign merchants from living within the city.",
    ],
    why: [
      "Polo lists Nestorian Christians, Armenians, Jacobites, Georgians, Persians, and Muslims living in one city, along with foreign merchants who resided there.",
      "Venice held colonies in the Mediterranean, but Tabriz was ruled by the Mongol Ilkhanate.",
      "This describes later plantation economies; the excerpt says the people of Tabriz lived by crafts and trade.",
      "The excerpt says foreign merchants lived in the city and made \"very great gain.\"",
    ], answer: 0 },

  { id: "u2-m10", skill: "u2", type: "mcq", set: "u2-s3", topic: "2.1", reasoning: "Causation",
    question: "The statement that \"Foreign merchants residing there make very great gain, but the inhabitants are generally poor\" best supports which conclusion?",
    choices: [
      "The profits of long-distance trade went mostly to merchants rather than to the general population.",
      "Long-distance trade through the city had stopped because local people could not afford luxury goods.",
      "The city's wealth came mainly from farming rather than from trade.",
      "Foreign merchants were forced to pay all of the city's taxes.",
    ],
    why: [
      "The contrast between rich foreign merchants and poor residents suggests that the gains of the silk and gold trade were not widely shared.",
      "The excerpt describes active trade and great profits, not a halt in trade.",
      "The excerpt says the people live by \"arts and merchandise,\" meaning crafts and trade.",
      "The excerpt says nothing about who paid taxes.",
    ], answer: 0 },

  { id: "u2-m11", skill: "u2", type: "mcq", set: "u2-s3", topic: "2.2", reasoning: "Causation",
    question: "Which of the following best explains why the city described in the excerpt was an important center of trade in the late thirteenth century?",
    choices: [
      "The Mongol Ilkhanate made the city its capital and protected trade routes linking Persia with China and the Mediterranean.",
      "The Safavid Empire made the city its capital and promoted Shia Islam among its subjects.",
      "The Abbasid caliphs ruled from the city and supported scholars in a great house of learning.",
      "The Ottoman Empire controlled the city and taxed trade between Europe and Asia.",
    ],
    why: [
      "After the Mongol conquest of Persia, the Ilkhans made Tabriz their capital, and their rule tied the city to overland routes running east to China and west to the Mediterranean.",
      "The Safavids did make Tabriz their first capital, but only after 1501.",
      "The Abbasids ruled from Baghdad, where their House of Wisdom stood, and their caliphate ended in 1258.",
      "The Ottomans did not hold Tabriz in the thirteenth century; they took it only briefly in the sixteenth century and later.",
    ], answer: 0 },

  // ---------- Set 4: Indian Ocean (practice passage) ----------
  { id: "u2-m12", skill: "u2", type: "mcq", set: "u2-s4", topic: "2.3", reasoning: "Causation",
    question: "The passage best supports which claim about the Indian Ocean trade network?",
    choices: [
      "Seasonal wind patterns shaped the timing of trade and encouraged merchants to settle in foreign ports.",
      "The network depended mainly on camel caravans crossing deserts between ports.",
      "The Mongol Empire controlled the network and protected its merchants.",
      "Most of the trade was carried by European merchants who sailed around Africa.",
    ],
    why: [
      "The passage says the monsoon winds set the timing of voyages and that long waits in port led merchants to settle abroad.",
      "Camel caravans were central to trans-Saharan trade, not to sea trade in the Indian Ocean.",
      "The Mongols protected overland Silk Road routes; no single empire controlled the Indian Ocean.",
      "European ships did not sail around Africa into the Indian Ocean until Vasco da Gama in 1498.",
    ], answer: 0 },

  { id: "u2-m13", skill: "u2", type: "mcq", set: "u2-s4", topic: "2.5", reasoning: "Continuity and Change",
    question: "Which of the following best describes a cultural effect of the diasporic communities described in the passage?",
    choices: [
      "Islam spread to East African coastal cities such as Kilwa, where Muslim rulers built stone mosques.",
      "Buddhism spread from India to China along overland trade routes.",
      "The rulers of Kievan Rus adopted Orthodox Christianity.",
      "Timbuktu became a center of Islamic learning in West Africa.",
    ],
    why: [
      "Muslim merchants who settled on the East African coast helped spread Islam there, and cities such as Kilwa built mosques of coral stone as part of Swahili culture.",
      "This spread happened mainly through the Silk Roads, much earlier than this period.",
      "This conversion happened in the tenth century and came through ties with the Byzantine Empire, not Indian Ocean trade.",
      "Timbuktu's growth came from trans-Saharan trade, not the Indian Ocean communities in the passage.",
    ], answer: 0 },

  { id: "u2-m14", skill: "u2", type: "mcq", set: "u2-s4", topic: "2.3", reasoning: "Causation",
    question: "Which of the following technologies most directly helped sailors take part in the trade described in the passage?",
    choices: [
      "The magnetic compass, the astrolabe, and the lateen sail",
      "The camel saddle",
      "The caravanserai",
      "The relay stations of the Mongol messenger system",
    ],
    why: [
      "The compass and the astrolabe helped sailors find their direction and position at sea, and the triangular lateen sail let ships sail more easily with changing winds.",
      "Camel saddles helped caravans cross the Sahara and other deserts, not the sea.",
      "Caravanserais were roadside inns for overland traders on the Silk Roads.",
      "Mongol relay stations carried official messages across land, not ships across the ocean.",
    ], answer: 0 },

  { id: "u2-m15", skill: "u2", type: "mcq", set: "u2-s4", topic: "2.3", reasoning: "Continuity and Change",
    question: "Which of the following developments in the early fifteenth century most directly expanded the role of a state in the trade network described in the passage?",
    choices: [
      "The Ming emperor sent Zheng He on large naval voyages that displayed Chinese power and collected tribute around the Indian Ocean.",
      "The Portuguese built fortified trading posts along the coasts of India and East Africa.",
      "The Mongol khanates protected caravans traveling between the Black Sea and China.",
      "Mansa Musa made a pilgrimage to Mecca and brought scholars back to Mali.",
    ],
    why: [
      "Between 1405 and 1433, Zheng He's state-sponsored fleets sailed as far as East Africa, showing Ming power and drawing states into the tribute system.",
      "Portuguese forts in the Indian Ocean came after 1498, later than this period.",
      "The Mongols protected overland routes, not sea routes, and this was in the thirteenth and fourteenth centuries.",
      "Mansa Musa's pilgrimage took place in 1324 and was linked to trans-Saharan trade.",
    ], answer: 0 },

  // ---------- Set 5: Trans-Saharan trade (practice passage) ----------
  { id: "u2-m16", skill: "u2", type: "mcq", set: "u2-s5", topic: "2.4", reasoning: "Causation",
    question: "The passage suggests that the power of Mali depended most directly on",
    choices: [
      "its control of gold sources and trading cities and its ability to tax caravan trade",
      "its use of the monsoon winds to send ships to India and China",
      "the protection of the Mongol khanates, which guarded trade routes",
      "its adoption of Champa rice, which greatly increased the food supply",
    ],
    why: [
      "The passage says Mali controlled gold-producing lands and Niger River trading cities and that West African states grew rich by taxing trade.",
      "Monsoon winds drove Indian Ocean shipping, which Mali did not use.",
      "Mongol protection applied to the Silk Roads in Eurasia, not to West Africa.",
      "Champa rice spread from Vietnam to Song China, not to Mali.",
    ], answer: 0 },

  { id: "u2-m17", skill: "u2", type: "mcq", set: "u2-s5", topic: "2.4", reasoning: "Causation",
    question: "Which of the following provides the best evidence for the passage's claim that Islam offered West African rulers \"ties to a wider world\"?",
    choices: [
      "Mansa Musa's pilgrimage to Mecca in 1324, during which he spent so much gold in Cairo that its value fell, and after which he brought scholars and an architect to Mali",
      "Sundiata's defeat of the Sosso kingdom, which led to the founding of the Mali Empire",
      "The use of camel caravans to carry salt south across the desert",
      "The building of Great Zimbabwe, whose rulers traded gold to the Swahili coast",
    ],
    why: [
      "Mansa Musa's pilgrimage connected Mali to Egypt and Arabia and brought Muslim scholars and builders back to West Africa, showing how Islam linked rulers to a wider world.",
      "Sundiata's victory founded Mali, but it is not evidence about Islam's role in building outside ties.",
      "Salt caravans show trade, not the religious and diplomatic ties the claim is about.",
      "Great Zimbabwe was in southern Africa, and its rulers were not Muslim West African rulers.",
    ], answer: 0 },

  { id: "u2-m18", skill: "u2", type: "mcq", set: "u2-s5", topic: "2.5", reasoning: "Comparison",
    question: "The pattern of religious conversion described in the passage is most similar to the spread of Islam in which other region during this period?",
    choices: [
      "Southeast Asian port cities such as Malacca, where rulers and merchants converted through contact with Muslim traders",
      "Spain, where Christian kingdoms took back lands that Muslim states had ruled",
      "Persia, where Mongol rulers converted to the religion of the people they had conquered",
      "Northern India, where Islam arrived with Turkic armies that founded the Delhi Sultanate",
    ],
    why: [
      "In both West Africa and Southeast Asian ports, Islam spread mainly through merchants, and rulers and trading elites converted first.",
      "The Christian reconquest of Spain reduced Muslim rule rather than spreading Islam.",
      "The Ilkhans did convert, but they were conquerors adopting their subjects' faith, not local rulers converting through trade.",
      "In northern India, Islam came first with conquering rulers rather than mainly through merchant contact.",
    ], answer: 0 },

  { id: "u2-m19", skill: "u2", type: "mcq", set: "u2-s5", topic: "2.5", reasoning: "Continuity and Change",
    question: "Which of the following was a cultural effect of the developments described in the passage?",
    choices: [
      "Timbuktu became a center of Islamic scholarship with mosques and collections of manuscripts.",
      "Arabic fully replaced local languages throughout West Africa.",
      "Swahili, a Bantu language with many Arabic words, became the main language of Mali.",
      "Angkor Wat changed from a Hindu temple into a Buddhist center.",
    ],
    why: [
      "Trade and the spread of Islam made Timbuktu a home for Muslim scholars, mosques, and libraries of Arabic manuscripts.",
      "Arabic spread among scholars and officials, but most people kept speaking local languages.",
      "Swahili developed on the East African coast, not in West Africa.",
      "This change took place in Southeast Asia and had no link to trans-Saharan trade.",
    ], answer: 0 },

  // ---------- Set 6: Pegolotti's route (data table) ----------
  { id: "u2-m20", skill: "u2", type: "mcq", set: "u2-s6", topic: "2.1", reasoning: "Continuity and Change",
    question: "The data in the table best support which conclusion about trade along this route?",
    choices: [
      "A merchant traveling the whole route spent most of a year on the road and changed forms of transport several times.",
      "Most of the route could be traveled by sea, which made the journey fast.",
      "Camels were the only animals used on the route from the Black Sea to China.",
      "The longest stage of the journey was the river trip from Gintarchan to Sara.",
    ],
    why: [
      "The stages with stated times add up to roughly 265 to 285 days, plus a river trip of unstated length, and the table lists ox wagons, river boats, camel wagons, asses, and horses.",
      "The route was overland and by river; no stage is by sea.",
      "The table lists oxen, asses, and horses as well as camels.",
      "That stage took one day; the longest was the 70 days from Armalec to Camexu.",
    ], answer: 0 },

  { id: "u2-m21", skill: "u2", type: "mcq", set: "u2-s6", topic: "2.2", reasoning: "Causation",
    question: "Pegolotti also wrote that merchants who had used this road said it was safe by day and by night. Which of the following best explains why the route was safe in the early fourteenth century?",
    choices: [
      "Mongol khanates controlled most of the lands along the route and protected merchants.",
      "The Ming dynasty sent armies to guard caravans on the routes leading west from China.",
      "The Abbasid Caliphate kept order across Central Asia from its capital at Baghdad.",
      "Venice and Genoa sent their own soldiers to guard the road from Tana to China.",
    ],
    why: [
      "In Pegolotti's time the Golden Horde, the Chagatai Khanate, and the Yuan dynasty ruled the lands along this road, and Mongol rulers protected and taxed the merchants who used it.",
      "The Ming dynasty was founded in 1368, after Pegolotti wrote.",
      "The Mongols ended the Abbasid Caliphate in Baghdad in 1258.",
      "Venice and Genoa kept trading posts on the Black Sea, but they did not guard the road across Asia.",
    ], answer: 0 },

  { id: "u2-m22", skill: "u2", type: "mcq", set: "u2-s6", topic: "2.1", reasoning: "Causation",
    question: "The travel times shown in the table help explain why goods carried over this route were mostly",
    choices: [
      "luxury goods, such as silk and precious metals, that were very valuable for their weight",
      "bulk foods, such as grain and rice, that could feed growing cities",
      "timber and stone used for building ships and temples",
      "enslaved workers bound for plantations in the Americas",
    ],
    why: [
      "Months of travel by pack animal made transport costly, so merchants carried light goods that could be sold for high prices.",
      "Heavy, cheap goods like grain were usually moved by water, not across the overland route.",
      "Heavy building materials were too costly to haul hundreds of days by animal.",
      "Plantation slavery in the Americas began after 1492 and was tied to Atlantic trade, not this route.",
    ], answer: 0 },

  { id: "u2-m23", skill: "u2", type: "mcq", set: "u2-s6", topic: "2.7", reasoning: "Comparison",
    question: "Compared with the route shown in the table, Indian Ocean trade in the same period",
    choices: [
      "carried larger and heavier cargoes at lower cost, because ships could hold far more than pack animals",
      "depended more heavily on the protection of the Mongol Empire",
      "moved mostly luxury goods, because ships could carry only small loads",
      "was limited to merchants who belonged to a single religion",
    ],
    why: [
      "A ship carried far more than a caravan of pack animals, and monsoon winds made voyages predictable, so Indian Ocean trade moved bulk goods such as cotton cloth, rice, and timber along with luxuries.",
      "The Mongols controlled overland routes; Indian Ocean trade was largely outside their control.",
      "Ships could carry heavy loads, which is why bulk goods were common in Indian Ocean trade.",
      "Muslim, Hindu, Buddhist, Jewish, and Christian merchants all traded in the Indian Ocean.",
    ], answer: 0 },

  // ---------- SAQ 1: practice passage on the Mongols ----------
  { id: "u2-q1a", skill: "u2", type: "fr", set: "u2-s7", part: "SAQ 1", sub: "a", topic: "2.2",
    lead: "Use the passage below to answer all parts of the question that follows.",
    prompt: "Identify ONE piece of historical evidence that would support the passage's argument that Mongol rule increased exchange across Eurasia.",
    earns: "The response names a specific example, beyond the passage's own examples, of goods, people, or ideas moving more easily across Mongol lands.",
    yes: [
      "Marco Polo, a Venetian, traveled to China and served at the court of Khubilai Khan.",
      "Pegolotti's merchant handbook (c. 1340) described the road from the Black Sea to China as safe for merchants.",
      "Ibn Battuta traveled through the lands of the Golden Horde and the Chagatai Khanate on his way to India.",
    ],
    no: [
      "\"The Mongols helped trade.\" It names no specific evidence.",
      "\"Zheng He sailed across the Indian Ocean.\" His voyages took place under the Ming dynasty, after Mongol rule in China ended in 1368.",
    ],
    example: "Marco Polo, a merchant from Venice, was able to travel across Asia to China in the 1270s and serve at the court of Khubilai Khan, which shows that Mongol rule let people move across all of Eurasia.",
    notExample: "The Mongols were very powerful and conquered a lot of land." },

  { id: "u2-q1b", skill: "u2", type: "fr", set: "u2-s7", part: "SAQ 1", sub: "b", topic: "2.2",
    lead: "Use the passage below to answer all parts of the question that follows.",
    prompt: "Describe ONE way the Mongol conquests disrupted societies or trade in Afro-Eurasia.",
    earns: "The response describes a specific harmful effect of the Mongol conquests on a society, a city, or trade.",
    yes: [
      "The Mongol capture of Baghdad in 1258 killed many of its people and ended the Abbasid Caliphate.",
      "Mongol armies destroyed Central Asian cities such as Merv and Nishapur in the 1220s and damaged the irrigation systems that farms depended on.",
      "After the Ilkhanate broke apart in the 1330s, fighting among rival rulers made overland trade routes less safe.",
    ],
    no: [
      "\"The Mongols were cruel.\" It describes no specific effect.",
      "\"The Mongols built the Great Wall.\" This is inaccurate; Chinese states built walls to keep out northern peoples, and the Ming rebuilt the wall after Mongol rule ended.",
    ],
    example: "When the Mongols took Baghdad in 1258, they killed a large part of its population and ended the Abbasid Caliphate, which badly damaged one of the main centers of Islamic learning and trade.",
    notExample: "The Mongols were good at fighting on horseback." },

  { id: "u2-q1c", skill: "u2", type: "fr", set: "u2-s7", part: "SAQ 1", sub: "c", topic: "2.6",
    lead: "Use the passage below to answer all parts of the question that follows.",
    prompt: "Explain ONE way the connections described in the passage contributed to the spread of disease in the fourteenth century.",
    earns: "The response explains how trade or travel along Mongol-controlled routes helped carry the bubonic plague (the Black Death) from Asia to other regions.",
    yes: [
      "The plague spread west from Central Asia along caravan routes to the Black Sea, where merchant ships carried it to Mediterranean ports in 1347.",
      "Merchants, soldiers, and pack animals moving along Mongol routes carried rats and fleas infected with plague over long distances.",
    ],
    no: [
      "\"Disease spread.\" It does not explain how the connections caused the spread.",
      "\"Smallpox killed many Native Americans.\" That happened after 1492 and was not connected to Mongol routes.",
    ],
    example: "Because Mongol rule made long overland journeys common, caravans carried the bubonic plague from Central Asia to the Black Sea by the 1340s; from there, merchant ships brought it to Italy in 1347, and it spread across Europe as the Black Death.",
    notExample: "People got sick a lot in the Middle Ages." },

  // ---------- SAQ 2: Statute of Laborers ----------
  { id: "u2-q2a", skill: "u2", type: "fr", set: "u2-s8", part: "SAQ 2", sub: "a", topic: "2.6",
    lead: "Use the source below to answer all parts of the question that follows.",
    prompt: "Identify ONE historical development that caused the shortage of workers described in the source.",
    earns: "The response identifies the Black Death (the bubonic plague pandemic of the late 1340s), the \"pestilence\" the source names.",
    yes: [
      "The Black Death, a bubonic plague epidemic that reached England in 1348 and killed a large share of its people.",
      "The plague pandemic that spread from Asia to Europe along trade routes in the 1340s.",
    ],
    no: [
      "\"A war.\" England was fighting the Hundred Years' War, but the source names the pestilence as the cause.",
      "\"Famine.\" The source blames the pestilence, not a shortage of food.",
    ],
    example: "The shortage was caused by the Black Death, the bubonic plague that reached England in 1348 and killed so many people that there were too few workers left.",
    notExample: "People did not want to work anymore." },

  { id: "u2-q2b", skill: "u2", type: "fr", set: "u2-s8", part: "SAQ 2", sub: "b", topic: "2.6",
    lead: "Use the source below to answer all parts of the question that follows.",
    prompt: "Describe ONE way the statute attempted to keep the economic and social order that existed before the plague.",
    earns: "The response describes a specific rule in the source that tied workers to employers or held wages at their earlier level.",
    yes: [
      "It ordered workers to take only the wages that were normal before the plague, in the twentieth year of the king's reign or the years just before.",
      "It required able-bodied men and women under sixty who had no land or trade to work for anyone who asked them.",
      "It aimed to stop people from refusing work in hopes of higher pay, which kept power in the hands of lords and employers.",
    ],
    no: [
      "\"It helped workers get better pay.\" The statute tried to stop wages from rising.",
      "\"It ended serfdom.\" The statute applied to people \"bond or free\" and did not free anyone.",
    ],
    example: "The statute ordered that workers be paid only the wages that had been normal in the years before the plague, which tried to keep employers from having to compete for scarce workers.",
    notExample: "The statute was a law made by the king." },

  { id: "u2-q2c", skill: "u2", type: "fr", set: "u2-s8", part: "SAQ 2", sub: "c", topic: "2.6",
    lead: "Use the source below to answer all parts of the question that follows.",
    prompt: "Explain ONE way the conditions described in the source contributed to changes in European society in the late fourteenth century.",
    earns: "The response explains how the labor shortage after the plague led to a specific change, such as higher wages, the decline of serfdom, or peasant revolts.",
    yes: [
      "Because workers were scarce, many lords had to pay higher wages or offer better terms despite laws like this one, which weakened serfdom in western Europe.",
      "Anger at limits on wages and at new taxes helped cause the English Peasants' Revolt of 1381.",
    ],
    no: [
      "\"Things changed a lot.\" It does not explain any specific change.",
      "\"Europeans began building factories.\" Factories came with industrialization centuries later.",
    ],
    example: "With so many workers dead, surviving peasants could demand higher pay or move to lords who offered better terms, so in the decades after the plague serfdom declined in much of western Europe even though laws like this one tried to stop it.",
    notExample: "The plague was very bad for Europe." },

  // ---------- SAQ 3: no source, comparison of networks ----------
  { id: "u2-q3a", skill: "u2", type: "fr", part: "SAQ 3", sub: "a", topic: "2.7",
    lead: "Answer all parts of the question that follows.",
    prompt: "Identify ONE similarity between the Indian Ocean trade network and the trans-Saharan trade network in the period c. 1200 to c. 1450.",
    earns: "The response identifies an accurate feature shared by both networks.",
    yes: [
      "Muslim merchants in both networks helped spread Islam to new regions, such as the Swahili coast and West Africa.",
      "In both networks, states grew rich by taxing trade, such as Mali in West Africa and Kilwa on the Swahili coast.",
      "Both networks carried gold and enslaved people from Africa to other regions.",
    ],
    no: [
      "\"Both used camels.\" Camels were used in the Sahara, not on Indian Ocean ships.",
      "\"Both were controlled by the Mongols.\" Neither network was under Mongol control.",
    ],
    example: "In both networks, Muslim merchants carried Islam with them, so Islam spread to the rulers of Mali in West Africa and to the Swahili cities of East Africa.",
    notExample: "Both networks were about trade." },

  { id: "u2-q3b", skill: "u2", type: "fr", part: "SAQ 3", sub: "b", topic: "2.7",
    lead: "Answer all parts of the question that follows.",
    prompt: "Describe ONE difference between the technologies used in the Indian Ocean trade network and those used in the trans-Saharan trade network.",
    earns: "The response describes a specific technology of one network and contrasts it with a technology of the other.",
    yes: [
      "Indian Ocean sailors used the compass, the astrolabe, and lateen sails and relied on monsoon winds, while trans-Saharan traders used camel caravans and camel saddles.",
      "Indian Ocean trade used large ships such as Chinese junks and Arab dhows, while trans-Saharan trade moved goods on the backs of camels.",
    ],
    no: [
      "\"One used water and one used land.\" It names no specific technology.",
      "\"The Indian Ocean used steamships.\" Steamships came in the nineteenth century.",
    ],
    example: "Indian Ocean merchants sailed ships with lateen sails and found their way with the compass and astrolabe, while trans-Saharan merchants crossed the desert in camel caravans using saddles that let camels carry heavy loads.",
    notExample: "The two networks were in different places." },

  { id: "u2-q3c", skill: "u2", type: "fr", part: "SAQ 3", sub: "c", topic: "2.4",
    lead: "Answer all parts of the question that follows.",
    prompt: "Explain ONE way a state used its power to benefit from trade in EITHER the Indian Ocean network OR the trans-Saharan network in the period c. 1200 to c. 1450.",
    earns: "The response names a specific state and explains how it used its power to gain wealth or influence from trade.",
    yes: [
      "Mali controlled the gold fields and the trading cities of the Niger River and taxed the gold and salt that passed through, which made its rulers rich.",
      "Malacca used its position on the strait between the Indian Ocean and the South China Sea to make ships stop and pay duties.",
      "The Ming dynasty sent Zheng He's fleets around the Indian Ocean to display Chinese power and bring in tribute.",
    ],
    no: [
      "\"Mali was rich.\" It does not explain how the state used its power.",
      "\"The Mongols protected the Silk Roads.\" The Silk Roads are not one of the two networks named in the prompt.",
    ],
    example: "The rulers of Mali controlled the gold-producing lands and the trading cities along the Niger River, so they could tax the gold and salt that caravans carried, and this wealth paid for their army and court.",
    notExample: "States liked trade because it made money." },

  // ---------- Long essay questions ----------
  { id: "u2-leq1", skill: "u2", type: "essay", kind: "leq", topic: "2.2", reasoning: "Causation",
    prompt: "In the period c. 1200 to c. 1450, the Mongols built the largest land empire the world had yet seen. Develop an argument that evaluates the extent to which the Mongol conquests affected networks of exchange in Afro-Eurasia in this period.",
    rows: [
      { name: "Thesis/Claim", max: 1, levels: [
        "0 points: The response has no claim, only restates the prompt, or makes a claim that does not say how much or in what ways the Mongol conquests affected exchange.",
        "1 point: The response makes a historically defensible claim about the extent of the Mongol effect on exchange, with a line of reasoning, for example that the conquests greatly expanded overland trade and the movement of ideas while doing little to change sea trade in the Indian Ocean.",
      ] },
      { name: "Contextualization", max: 1, levels: [
        "0 points: The response gives no relevant context or only a passing phrase.",
        "1 point: The response describes a broader context relevant to the prompt, for example the long history of Silk Road trade before 1200, the political division of Central Asia and China before Chinggis Khan united the Mongols in 1206, or the pastoral and military way of life of steppe peoples.",
      ] },
      { name: "Evidence", max: 2, levels: [
        "0 points: The response gives no specific examples relevant to Mongol effects on exchange.",
        "1 point: The response gives at least two specific examples relevant to the topic, such as the yam relay system and the sack of Baghdad in 1258.",
        "2 points: The response uses specific and relevant examples, such as Marco Polo's travels, Pegolotti's handbook, the Black Death, or the movement of Persian astronomers to China, to support an argument about the extent of the Mongol effect.",
      ] },
      { name: "Analysis and Reasoning", max: 2, levels: [
        "0 points: The response lists events without using causation, comparison, or continuity and change to frame an argument.",
        "1 point: The response uses causation to explain how Mongol actions such as protecting merchants or moving skilled workers led to changes in exchange.",
        "2 points: The response shows a complex understanding, for example by weighing the gains in exchange against the destruction of cities and the spread of plague, by showing that effects differed across the khanates, or by noting that Indian Ocean trade grew mostly for reasons other than Mongol rule.",
      ] },
    ],
    evidence: [
      "Chinggis Khan united the Mongol tribes in 1206 and began conquests across Central Asia, China, and Persia.",
      "The yam system of relay stations let official messengers and approved travelers cross the empire quickly.",
      "Mongol rulers protected merchants and invested in merchant partnerships called ortogh.",
      "Pegolotti's merchant handbook (c. 1340) described the road from Tana on the Black Sea to China as safe by day and by night.",
      "Marco Polo traveled from Venice to China and served at the court of Khubilai Khan, founder of the Yuan dynasty.",
      "The Yuan dynasty used paper money and kept the Grand Canal and Chinese ports active in trade.",
      "Persian astronomers such as Jamal al-Din worked in Yuan China, and the Ilkhanate court supported Rashid al-Din's histories of the peoples of Eurasia.",
      "Knowledge of gunpowder weapons spread west during the Mongol period.",
      "The Mongols sacked Baghdad in 1258 and ended the Abbasid Caliphate; earlier, they destroyed Central Asian cities such as Merv and Nishapur.",
      "The Black Death spread west along routes through Mongol lands and reached the Mediterranean in 1347.",
      "The Ilkhan Ghazan converted to Islam in 1295, showing how conquerors adopted the culture of the people they ruled.",
      "Mongol attempts to invade Japan (1274 and 1281) and Java (1293) failed, and the Mamluks defeated a Mongol army at Ain Jalut in 1260, which set limits on Mongol reach.",
    ],
    model: "Thesis: The Mongol conquests greatly increased exchange across Eurasia, because once the fighting ended Mongol rulers protected overland trade and moved people and ideas across their lands; however, the conquests also destroyed major centers of trade and helped spread the Black Death, and they had little effect on Indian Ocean trade, which grew mainly through monsoon sailing and merchant communities. Outline: (1) Context: Silk Road trade had existed for centuries, but Central Asia was divided among rival states until Chinggis Khan's conquests after 1206. (2) Body paragraph on increased exchange: the yam system, the protection of merchants, Pegolotti's safe road, Marco Polo at Khubilai Khan's court, and Persian astronomers in China. (3) Body paragraph on destruction and disease: the sack of Baghdad in 1258, the ruin of Merv and Nishapur, and the spread of plague along Mongol routes to Europe and Southwest Asia in the 1340s. (4) Body paragraph on limits: failed invasions of Japan and Java, defeat at Ain Jalut, and Indian Ocean trade that grew largely outside Mongol control. (5) Complexity: the khanates fragmented in the fourteenth century, and the fall of the Ilkhanate in the 1330s and the Yuan in 1368 made overland trade less safe, which shows that the gains depended on a unified Mongol order that did not last.",
  },

  { id: "u2-leq2", skill: "u2", type: "essay", kind: "leq", topic: "2.7", reasoning: "Comparison",
    prompt: "In the period c. 1200 to c. 1450, both the Silk Roads and the Indian Ocean trade network linked distant regions of Afro-Eurasia. Develop an argument that evaluates the extent to which the effects of the Silk Roads on the societies they connected were similar to the effects of the Indian Ocean trade network.",
    rows: [
      { name: "Thesis/Claim", max: 1, levels: [
        "0 points: The response has no claim, only restates the prompt, or describes the networks without making a claim about how similar their effects were.",
        "1 point: The response makes a historically defensible claim about the extent of similarity, with a line of reasoning, for example that both networks spread religions and built trading cities, but the Indian Ocean network moved bulk goods and created larger merchant communities abroad.",
      ] },
      { name: "Contextualization", max: 1, levels: [
        "0 points: The response gives no relevant context or only a passing phrase.",
        "1 point: The response describes a broader context relevant to the prompt, for example the growth of the Song economy and its demand for trade, the spread of Islam after the seventh century, or earlier Silk Road and Indian Ocean trade in the classical period.",
      ] },
      { name: "Evidence", max: 2, levels: [
        "0 points: The response gives no specific examples relevant to either network.",
        "1 point: The response gives at least two specific examples relevant to the topic, such as caravanserais on the Silk Roads and the monsoon winds in the Indian Ocean.",
        "2 points: The response uses specific and relevant examples from both networks, such as the spread of Islam to the Swahili coast and the role of Mongol protection on the Silk Roads, to support an argument about how similar their effects were.",
      ] },
      { name: "Analysis and Reasoning", max: 2, levels: [
        "0 points: The response describes each network separately without comparing them.",
        "1 point: The response uses comparison to explain at least one similarity or one difference between the effects of the two networks.",
        "2 points: The response shows a complex understanding, for example by explaining both similarities and differences, by explaining why the effects differed (land travel versus sea travel, bulk versus luxury goods), or by showing how the two networks were connected through ports and cities such as Baghdad, Hormuz, or Quanzhou.",
      ] },
    ],
    evidence: [
      "Silk Road merchants traded mainly luxury goods such as silk, porcelain, and precious metals, because overland transport by animal was slow and costly.",
      "Caravanserais, camel saddles, and Mongol relay stations supported overland travel.",
      "Song and Yuan China used paper money and \"flying cash\" credit, which made long-distance trade easier.",
      "Mongol rule in the thirteenth and fourteenth centuries made overland routes safer and helped cities such as Samarkand, Kashgar, and Tabriz grow.",
      "Indian Ocean ships used the monsoon winds, the compass, the astrolabe, and the lateen sail, and Chinese junks and Arab dhows carried heavy cargoes.",
      "The Indian Ocean network carried bulk goods such as cotton textiles, rice, timber, and spices along with luxuries.",
      "Arab and Persian Muslim merchants settled on the Swahili coast and in India, and Chinese merchants settled in Southeast Asian ports.",
      "Swahili city-states such as Kilwa and Mombasa grew rich and adopted Islam, and Swahili blended Bantu and Arabic.",
      "Malacca grew into a major port in the fifteenth century by controlling the strait between the Indian Ocean and the South China Sea.",
      "Zheng He's voyages (1405 to 1433) showed Ming power around the Indian Ocean.",
      "The Black Death spread along overland routes and then by ship around the Mediterranean in the 1340s.",
      "Islam spread along both networks, and Buddhism had earlier spread to China along the Silk Roads.",
    ],
    model: "Thesis: The Silk Roads and the Indian Ocean network had similar effects in spreading religions and building rich trading cities, but the Indian Ocean network had deeper effects on the societies it touched, because ships could carry bulk goods cheaply and long waits for the monsoon led merchants to settle abroad and form mixed cultures such as the Swahili. Outline: (1) Context: Song China's growing economy and the earlier spread of Islam created demand for trade and a shared faith among many merchants. (2) Body paragraph on similarities: both networks spread Islam, both made cities such as Samarkand, Kilwa, and Malacca wealthy, and both relied on new technologies and states that protected trade. (3) Body paragraph on differences in goods: the Silk Roads moved mostly luxuries because of slow animal transport, while Indian Ocean ships moved cotton cloth, rice, and timber. (4) Body paragraph on differences in cultural effects: Indian Ocean merchant communities married into local families and helped create Swahili culture, while Silk Road travelers more often passed through caravan cities. (5) Complexity: the two networks were linked at ports such as Hormuz and Quanzhou, and the plague moved along both, so their effects overlapped as well as differed.",
  },
];

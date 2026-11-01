// Topic 2.4 Quiz: Trans-Saharan Trade Routes
// Sources: every stimulus this quiz uses, keyed by id.
export const sets = {
  "t24-s1": {
    id: "t24-s1", name: "Leo Africanus on Timbuktu", intro: "Use the source below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "Here are many shops of artificers, and merchants, and especially of such as weaue linnen and cotton cloth. And hither do the Barbarie merchants bring cloth of Europe. ... Corne, cattle, milke, and butter this region yeeldeth in great abundance: but salt is verie scarce heere; for it is brought hither by land from Tegaza, which is fiue hundred miles distant. When I my selfe was here, I saw one camels loade of salt sold for 80. ducates." },
        { p: "The rich king of Tombuto hath many plates and scepters of gold, some whereof weigh 1300. poundes: ... Here are great store of doctors, iudges, priests, and other learned men, that are bountifully maintained at the kings cost and charges. And hither are brought diuers manuscripts or written bookes out of Barbarie, which are sold for more money than any other merchandize." },
        { cite: "Leo Africanus (al-Hasan ibn Muhammad al-Wazzan, a North African Muslim scholar and diplomat raised in Fez), The History and Description of Africa (completed in Italian in Rome in 1526), Book VII, description of Tombuto, translated by John Pory (1600), edited by Robert Brown, vol. III (London: Hakluyt Society, 1896), pp. 824 to 825, from the scanned text at the Internet Archive. Leo visited Timbuktu c. 1510, when it was ruled by the Songhai Empire. Spelling is Pory's: weaue is weave, fiue is five, and iudges is judges. Tombuto is Timbuktu, Barbarie is North Africa, Tegaza is Taghaza, a salt-mining town in the Sahara, artificers are craftsmen, and ducates are gold coins. Marginal notes and footnote marks are omitted.", url: "https://archive.org/stream/historyanddescr01porygoog/historyanddescr01porygoog_djvu.txt", kind: "primary" },
      ] },
    ],
  },
  "t24-s2": {
    id: "t24-s2", name: "West African gold and the Mediterranean", intro: "Use the passage below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "Historians often describe the trade across the Sahara as the link that tied West Africa to the economies of the Mediterranean world. Gold mined near the upper Niger and Senegal Rivers moved north by camel caravan to markets such as Sijilmasa, Tunis, and Cairo, and much of it was minted into coins used by Muslim and Christian states alike. Control of this trade shifted over time. As the power of Ghana faded, Mali took over the gold fields and the trading towns of the Niger River in the thirteenth century, and the main caravan routes shifted east with it. When Mansa Musa of Mali passed through Cairo on his pilgrimage to Mecca in 1324, the gold he spent showed North Africans and Europeans where much of their gold came from." },
        { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" },
      ] },
    ],
  },
  "t24-s3": {
    id: "t24-s3", name: "Desert peoples and the caravan trade", intro: "Use the passage below to answer all parts of the question that follows.",
    sources: [
      { title: "Source", blocks: [
        { p: "Many historians stress that trade across the Sahara depended on the peoples of the desert as much as on the kings of West Africa. Berber groups such as the Tuareg raised the camels, guided the caravans from one oasis to the next, and knew where to find water on crossings that could take two months. Desert groups also controlled salt mines such as Taghaza, where enslaved workers cut the blocks of salt that caravans carried south. Because desert peoples controlled the routes, they could tax travelers or raid them. In the 1430s, Tuareg forces took Timbuktu from Mali, a sign that the empire had lost its hold on the southern end of the trade. In this view, the trade worked only when rulers and desert peoples found ways to cooperate." },
        { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" },
      ] },
    ],
  },
};

export default {
  forms: [
    { id: "t24", name: "Topic 2.4 Quiz: Trans-Saharan Trade Routes", group: "Unit 2: Networks of Exchange",
      items: [
        // ===== Set 1: Leo Africanus on Timbuktu =====
        { id: "t24-m01", skill: "u2", type: "mcq", set: "t24-s1", topic: "2.4", reasoning: "Causation",
          question: "The scarcity of salt described in the first paragraph most directly helps explain which feature of trans-Saharan trade?",
          choices: [
            "Caravans carried salt south from desert mines and returned north with gold and other West African goods.",
            "Portuguese ships carried salt up the Niger River to Timbuktu from the Atlantic coast.",
            "Egyptian merchants shipped salt up the Nile and across East Africa to the Niger River.",
            "West African rulers banned the sale of salt to North African merchants.",
          ],
          why: [
            "Salt was scarce in the savanna and plentiful in the Sahara, while gold was plentiful in West Africa, so each region wanted what the other had. Leo reports that salt came \"by land from Tegaza\" at a high price.",
            "The excerpt says salt came \"by land\" from the Sahara, and Portuguese traders worked along the coast, not up the Niger to Timbuktu.",
            "The Nile route linked Egypt to Nubia and East Africa, while Leo names a desert source, Tegaza, five hundred miles away.",
            "The excerpt describes North African merchants trading freely in Timbuktu, not a ban on the salt trade.",
          ], answer: 0 },
        { id: "t24-m02", skill: "u2", type: "mcq", set: "t24-s1", topic: "2.4", reasoning: "Claims and evidence in sources",
          question: "Which of the following claims about Timbuktu is best supported by the second paragraph of the excerpt?",
          choices: [
            "Timbuktu was a center of Islamic learning that its ruler supported.",
            "Timbuktu's scholars were mostly Christian missionaries from Europe.",
            "Timbuktu's wealth came mainly from exporting silk to China.",
            "Timbuktu's ruler refused to trade with merchants from North Africa.",
          ],
          why: [
            "Leo describes many \"doctors, iudges, priests, and other learned men\" paid \"at the kings cost\" and says books from North Africa sold for more than any other good.",
            "The learned men of Timbuktu were Muslim scholars and judges, and Christian missionaries did not work in the city in this period.",
            "Timbuktu traded gold, salt, cloth, and books across the Sahara, and silk was a Chinese export, not a West African one.",
            "Leo says that North African merchants brought cloth and books to the city, which shows trade, not a refusal to trade.",
          ], answer: 0 },
        { id: "t24-m03", skill: "u2", type: "mcq", set: "t24-s1", topic: "2.4", reasoning: "Continuity and change",
          question: "Leo Africanus visited Timbuktu c. 1510. The trade he describes most clearly shows continuity with which earlier development?",
          choices: [
            "The rise of Mali in the thirteenth and fourteenth centuries, when its rulers grew rich by controlling the trade in gold and salt",
            "The Bantu migrations, which spread farming and ironworking across central and southern Africa",
            "The Mongol conquest of Persia, which joined Southwest Asia to the Silk Roads",
            "The growth of the Atlantic slave trade, which reached its peak in the eighteenth century",
          ],
          why: [
            "Mali, and the Songhai Empire after it, drew wealth from taxing the caravan trade that met at cities such as Timbuktu, so the gold, salt, and books Leo describes continue a pattern from the Mali era.",
            "The Bantu migrations took place over many centuries before 1200 and spread farming, not the caravan trade in gold and salt.",
            "The Mongol conquest of Persia shaped the Silk Roads, not the trade between West and North Africa.",
            "The peak of the Atlantic slave trade came about two hundred years after Leo's visit, so it cannot be an earlier development.",
          ], answer: 0 },
        { id: "t24-m04", skill: "u2", type: "mcq", set: "t24-s1", topic: "2.4", reasoning: "Sourcing and situation",
          question: "Leo Africanus traveled the trans-Saharan routes as a diplomat for the ruler of Fez and wrote this account in Rome in 1526 for European readers. A historian could best use the excerpt as evidence of",
          choices: [
            "how an educated traveler from North Africa viewed the wealth, trade, and learning of a West African city",
            "the religious beliefs of farmers in the rural villages of the Songhai Empire",
            "the total amount of gold that West Africa sent north each year",
            "how European armies conquered the trading cities of West Africa",
          ],
          why: [
            "Leo was an outsider who saw Timbuktu firsthand, and he recorded what caught the eye of a North African scholar: prices, gold, judges, and books.",
            "The excerpt describes the city's markets and scholars and says nothing about the beliefs of rural farmers.",
            "Leo gives the price of one load of salt and the weight of the king's gold objects, not yearly totals for the gold trade.",
            "No European army conquered Timbuktu in this period, and the excerpt describes trade, not conquest.",
          ], answer: 0 },

        // ===== Set 2: West African gold and the Mediterranean =====
        { id: "t24-m05", skill: "u2", type: "mcq", set: "t24-s2", topic: "2.4", reasoning: "Causation",
          question: "Which of the following most directly made the trade described in the passage possible?",
          choices: [
            "Camels and caravans that could cross long stretches of desert with heavy loads",
            "The magnetic compass, which guided ships across the open Atlantic Ocean",
            "The Grand Canal, which linked northern and southern China",
            "Monsoon winds, which reversed direction with the seasons",
          ],
          why: [
            "Camels can travel for days without water, and with saddles suited to carrying cargo, caravans of hundreds or thousands of camels moved gold and salt across the Sahara.",
            "The compass mattered for sea travel, and ships did not cross the open Atlantic until the late fifteenth century, while this trade crossed a desert.",
            "The Grand Canal carried trade inside China, not between West Africa and the Mediterranean.",
            "Monsoon winds drove trade on the Indian Ocean, not caravans crossing the Sahara.",
          ], answer: 0 },
        { id: "t24-m06", skill: "u2", type: "mcq", set: "t24-s2", topic: "2.4", reasoning: "Claims and evidence in sources",
          question: "The passage's description of Mali best supports which of the following claims?",
          choices: [
            "West African states grew powerful by controlling the sources and routes of valuable trade goods.",
            "West African states grew powerful mainly by conquering cities in North Africa.",
            "Mali declined because Mongol armies cut its caravan routes.",
            "Mali's rulers avoided contact with the wider Islamic world.",
          ],
          why: [
            "The passage says Mali rose by taking over the gold fields and the trading towns of the Niger River, which let its rulers tax the caravan trade.",
            "The passage says Mali took over gold fields and Niger River towns in West Africa, not cities in North Africa.",
            "Mongol armies never reached West Africa, and the passage does not describe Mali's decline.",
            "Mansa Musa's pilgrimage through Cairo to Mecca shows close contact with the Islamic world, not avoidance of it.",
          ], answer: 0 },
        { id: "t24-m07", skill: "u2", type: "mcq", set: "t24-s2", topic: "2.4", reasoning: "Comparison",
          question: "The role of gold in the trade described in the passage was most similar to the role of which good in another network of exchange?",
          choices: [
            "Silk on the Silk Roads in the period c. 1200 to c. 1450, a costly good whose value made long overland journeys worth the risk",
            "Silver from the Americas carried across the Pacific Ocean to China after 1571",
            "Cotton cloth from British factories sold around the world in the nineteenth century",
            "Sugar from Caribbean plantations shipped to Europe in the eighteenth century",
          ],
          why: [
            "Like gold across the Sahara, silk was a high-value good that was light enough to carry and valuable enough to repay the cost of crossing deserts and mountains by caravan.",
            "Silver moved across the Pacific by ship, and this trade began more than a century after the period of the passage.",
            "Factory cotton cloth was a mass-produced good of the industrial era, not a luxury carried by caravan c. 1200 to c. 1450.",
            "Caribbean sugar was a bulk plantation good shipped across the Atlantic centuries later.",
          ], answer: 0 },
        { id: "t24-m08", skill: "u2", type: "mcq", set: "t24-s2", topic: "2.4", reasoning: "Contextualization",
          question: "Mansa Musa's journey described in the passage most directly reflects which broader development in the period c. 1200 to c. 1450?",
          choices: [
            "Many West African rulers adopted Islam, which tied their states to the wider Muslim world through pilgrimage, trade, and scholarship.",
            "Portuguese missionaries converted West African rulers to Christianity.",
            "Cairo lost its place as a center of trade after Mongol armies captured it.",
            "Buddhist pilgrims opened new routes across the Sahara.",
          ],
          why: [
            "Mansa Musa was a Muslim ruler making the pilgrimage to Mecca, and he returned with scholars and an architect, which shows how Islam linked Mali to North Africa and Arabia.",
            "Portuguese ships did not reach West Africa until the 1440s, and Mansa Musa traveled as a Muslim pilgrim.",
            "The Mamluks defeated the Mongols at Ain Jalut in 1260, and Mongol armies never took Cairo, which remained a major market.",
            "Buddhism did not spread to West Africa, and the caravan routes were traveled by Muslim merchants and pilgrims.",
          ], answer: 0 },

        // ===== SAQ: Desert peoples and the caravan trade =====
        { id: "t24-q1a", skill: "u2", type: "fr", set: "t24-s3", part: "SAQ 1", sub: "a", topic: "2.4",
          lead: "Use the passage below to answer all parts of the question that follows.",
          prompt: "Describe the passage's main argument about trans-Saharan trade.",
          earns: "The response describes, in its own words, the claim that trade across the Sahara depended on desert peoples as well as West African rulers, or that it worked only when the two cooperated.",
          yes: [
            "The passage argues that the caravan trade depended on desert peoples such as the Tuareg, who supplied camels, guides, and salt, and not only on the kings of West Africa.",
            "The author claims that the trade succeeded only when West African rulers and the desert peoples who controlled the routes cooperated.",
            "The passage says desert peoples held real power over the trade, because they could guide caravans or tax and raid them.",
          ],
          no: [
            "\"The passage is about the Sahara.\" This names a topic, not an argument.",
            "\"The Tuareg took Timbuktu in the 1430s.\" This repeats one detail and does not describe the argument it supports.",
            "\"The passage argues that Mali controlled all trade in the Sahara.\" This is the opposite of the passage's claim.",
          ],
          example: "The passage argues that trade across the Sahara depended on Berber desert peoples such as the Tuareg as much as on West African kings, because the desert peoples supplied the camels and guides and controlled the salt mines, so the trade worked only when the two sides cooperated.",
          notExample: "The passage talks about camels and salt." },
        { id: "t24-q1b", skill: "u2", type: "fr", set: "t24-s3", part: "SAQ 1", sub: "b", topic: "2.4",
          lead: "Use the passage below to answer all parts of the question that follows.",
          prompt: "Explain ONE piece of historical evidence, not mentioned in the passage, that would support the passage's argument.",
          earns: "The response gives a specific piece of evidence from outside the passage, c. 1200 to c. 1450 or shortly before, and explains how it shows that desert peoples were needed for the trade or held power over it.",
          yes: [
            "Camel saddles developed by desert peoples let camels carry heavy loads, and caravans depended on the herders who bred and handled the camels, which shows the trade relied on their skills.",
            "Travelers such as Ibn Battuta, who crossed the Sahara in 1352, depended on a hired desert guide and on scouts sent ahead to the next town for water, which shows that caravans could not cross without desert peoples' knowledge.",
            "Before this period, the Almoravids, a Berber movement from the western Sahara, gained control of caravan routes and markets in the eleventh century, which shows that desert peoples could dominate the trade.",
          ],
          no: [
            "\"The Tuareg took Timbuktu.\" This evidence comes from the passage itself.",
            "\"Camels were used in the desert.\" This is too general and does not explain how it supports the argument.",
            "\"Mansa Musa spent gold in Cairo.\" This is about a West African ruler's wealth and does not show the role of desert peoples.",
          ],
          example: "When Ibn Battuta crossed the Sahara to Mali in 1352, his caravan hired a guide from a desert Berber group and sent a scout ahead to the town of Walata to bring water out to the travelers. This supports the passage's argument because even large caravans could not survive the crossing without the knowledge and help of desert peoples.",
          notExample: "The Sahara is the largest hot desert in the world." },
        { id: "t24-q1c", skill: "u2", type: "fr", set: "t24-s3", part: "SAQ 1", sub: "c", topic: "2.4",
          lead: "Use the passage below to answer all parts of the question that follows.",
          prompt: "Explain ONE piece of historical evidence that would challenge or modify the passage's argument.",
          earns: "The response gives a specific piece of evidence and explains how it shows that states, West African merchants, or North African merchants did as much or more than desert peoples to make the trade work.",
          yes: [
            "Mali's rulers controlled the gold fields and kept the trade routes safe, and Ibn Battuta reported that travelers in Mali had little to fear from thieves, which suggests the state, not the desert peoples, made the trade secure.",
            "West African merchants such as the Wangara (Dyula) organized trade from the gold fields to the Niger towns, which shows that much of the trade depended on groups other than desert peoples.",
            "In 1468, Sunni Ali of Songhai took Timbuktu back from the Tuareg, which shows that a strong West African state could dominate the southern end of the trade.",
          ],
          no: [
            "\"Some historians might disagree.\" This gives no evidence.",
            "\"Gold was valuable.\" This is true but does not challenge the role of desert peoples.",
            "\"The Portuguese conquered Timbuktu in 1400.\" This is false.",
          ],
          example: "In 1468, Sunni Ali, the ruler of Songhai, captured Timbuktu from the Tuareg and made it part of his empire. This modifies the argument because it shows that a strong West African state could take control of the trade cities by force instead of depending on cooperation with desert peoples.",
          notExample: "Desert peoples were not that important." },
      ] },
  ],
};

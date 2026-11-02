// Topic 1.5 Quiz: State Building in Africa
// Sources: every stimulus (multiple-choice sets and the SAQ passage), keyed by id.
export const sets = {
  "t15-s1": {
    id: "t15-s1", name: "Barbosa on the king of Benamatapa", intro: "Use the source below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "And in the said Benamatapa, which is a very large town, the king is used to make his longest residence; and it is thence that the merchants bring to Sofala the gold which they sell to the Moors without weighing it, for coloured stuffs and beads of Cambay.... this king of Benamatapa, who is a great lord, and holds many other kings as his subjects..." },
        { p: "The said king of Benamatapa sends, each year, many honourable persons throughout his kingdoms to all the towns and lordships.... each one of the envoys comes to a town, and bids the people extinguish all the fires that there are in it; and after they have been put out, all the inhabitants go to this man who has been sent as commissary, to get fresh fire from him in sign of subjection and obedience; and, whoever should not do this is held as a rebel...." },
        { cite: "Duarte Barbosa, A Description of the Coasts of East Africa and Malabar in the Beginning of the Sixteenth Century (finished c. 1516), section \"Zinbaoch,\" translated from an early Spanish manuscript by Henry E. J. Stanley (London: printed for the Hakluyt Society; the translator's preface is dated October 1865), Project Gutenberg eBook 38253. Barbosa was a Portuguese writer who worked for many years at Portugal's trading posts in India. Benamatapa is the Mutapa state, which arose in the fifteenth century in the gold-producing lands north of Great Zimbabwe; the section's title, Zinbaoch, is a form of the Shona word zimbabwe, a ruler's court. Sofala was a port on the coast of present-day Mozambique, held by a Portuguese fort after 1505. Moors here means Muslims (the Swahili merchants of the coast), Cambay is a port in Gujarat, India, and a commissary is an official sent with the king's authority.", url: "https://gutenberg.org/files/38253/38253-h/38253-h.htm", kind: "primary" },
      ] },
    ],
  },
  "t15-s2": {
    id: "t15-s2", name: "Islam and older traditions in West African states", intro: "Use the passage below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "West African rulers in the period c. 1200 to c. 1450 built and kept their states by joining Islam to older sources of authority. After Sundiata founded the Mali Empire in the thirteenth century, its rulers, called mansas, collected tribute from subject kings and taxed the trade in gold and salt. Many mansas became Muslims, built mosques, and welcomed scholars who could read and write Arabic. Yet most farmers kept their older religions, and the mansas still took part in the traditional ceremonies their subjects expected of a king. Farther east, the Hausa city-states, such as Kano and Katsina, built walled towns that served as markets for trade across the Sahara. Their rulers adopted Islam in the fourteenth and fifteenth centuries, but the cities stayed independent and often fought one another rather than uniting under one ruler." },
        { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" },
      ] },
    ],
  },
  "t15-s3": {
    id: "t15-s3", name: "Four African sites, c. 1200 to c. 1450", intro: "Use the table below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { table: {
          head: ["Site (present-day country)", "Dates given by UNESCO", "What UNESCO records about the site"],
          rows: [
            ["Great Zimbabwe (Zimbabwe)", "Built between 1100 and 1450; abandoned about 1450", "Principal city of a major state on gold-rich plateaus; population above 10,000; glass beads and porcelain from China and Persia, and gold and Arab coins from Kilwa, found at the site"],
            ["Kilwa Kisiwani (Tanzania)", "Peak of prosperity in the thirteenth and fourteenth centuries", "Minted its own coins from the eleventh to the fourteenth century; Great Mosque, the oldest standing mosque on the East African coast, enlarged in the thirteenth century; palace of Husuni Kubwa built c. 1310 to 1333; gold and ivory from the interior traded for Chinese porcelain and Persian glazed pottery"],
            ["Lalibela (Ethiopia)", "Twelfth and thirteenth centuries", "Eleven churches carved out of solid rock, attributed to King Lalibela, who set out to build a \"New Jerusalem\"; a center of Christian pilgrimage"],
            ["Timbuktu (Mali)", "Djingareyber Mosque first built under Mansa Musa; Sankore Mosque built in the fourteenth century", "Home of Sankore University and other Islamic schools; an important center for spreading Islamic learning; a market where manuscripts were traded"],
          ],
        } },
        { cite: "Table built from the UNESCO World Heritage Centre's descriptions of four World Heritage sites: Great Zimbabwe National Monument (https://whc.unesco.org/en/list/364/), Ruins of Kilwa Kisiwani and Ruins of Songo Mnara (https://whc.unesco.org/en/list/144), Rock-Hewn Churches, Lalibela (https://whc.unesco.org/en/list/18/), and Timbuktu (https://whc.unesco.org/en/list/119). The Lalibela page dates the churches to both the twelfth and the thirteenth centuries. Mansa Musa, called Kankan Moussa on the Timbuktu page, ruled Mali c. 1312 to 1337.", url: "https://whc.unesco.org/en/list/364/", kind: "data" },
      ] },
    ],
  },
  "t15-s4": {
    id: "t15-s4", name: "Faith and force in Solomonic Ethiopia", intro: "Use the passage below to answer all parts of the question that follows.",
    sources: [
      { title: "Source", blocks: [
        { p: "Many historians argue that Ethiopia's rulers in the period c. 1200 to c. 1450 held power by joining the Christian faith to military strength. In 1270, Yekuno Amlak overthrew the Zagwe dynasty, whose king Lalibela had sponsored churches carved from solid rock. The new rulers claimed descent from King Solomon of Israel and the Queen of Sheba, a story told in the Kebra Nagast, a book written down in the Ge'ez language in the early fourteenth century. Kings gave land to churches and monasteries, and Church leaders in turn taught that the king ruled with God's approval. Kings such as Amda Seyon also led armies against neighboring Muslim states that competed with Ethiopia for control of trade routes to the coast. Instead of ruling from one capital, the king and his court moved from camp to camp across the kingdom." },
        { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" },
      ] },
    ],
  },
};

export default {
  forms: [
    { id: "t15", name: "Topic 1.5 Quiz: State Building in Africa", group: "Unit 1: The Global Tapestry",
      items: [
        // ===== Set 1: Barbosa on the king of Benamatapa =====
        { id: "t15-m01", skill: "u1", type: "mcq", set: "t15-s1", topic: "1.5", reasoning: "Sourcing and situation",
          question: "Barbosa's interest in the topics of the first paragraph was most likely shaped by which of the following?",
          choices: [
            "Portugal's effort to control the gold trade that reached the East African coast at Sofala",
            "Portugal's effort to convert the Mutapa king and his subjects to Christianity before trading with them",
            "The Ottoman Empire's control of the trade routes between Sofala and the Mediterranean",
            "The Mali Empire's control of the gold fields that supplied the ports of the East African coast",
          ],
          why: [
            "Correct. The Portuguese built a fort at Sofala in 1505 to tap the gold trade, so a Portuguese writer would note where the gold came from and what it was traded for.",
            "Portuguese missionaries did later work in the Mutapa state, but the paragraph is about where gold comes from and what it is traded for, which points to commercial interest.",
            "The Ottomans were expanding in the eastern Mediterranean, but they did not control a route from Sofala, and the excerpt is about trade with the interior.",
            "Mali controlled gold fields in West Africa, on the other side of the continent; the gold in the excerpt came from the interior of southeastern Africa.",
          ],
          answer: 0 },
        { id: "t15-m02", skill: "u1", type: "mcq", set: "t15-s1", topic: "1.5", reasoning: "Claims and evidence in sources",
          question: "The practice described in the second paragraph was most likely intended to",
          choices: [
            "make each community show in public that it accepted the king's authority",
            "spread the Islamic faith of the coastal merchants into the interior",
            "choose new local rulers through a vote of the inhabitants of each town",
            "collect a fixed tax in gold from each town to pay Portuguese traders",
          ],
          why: [
            "Correct. The envoys took the fire \"in sign of subjection and obedience,\" and anyone who refused was treated as a rebel, so the ritual made submission to the king visible every year.",
            "The coastal merchants were Muslims, but the ritual comes from the king, who was not a Muslim, and it has no religious teaching tied to Islam.",
            "The inhabitants go to the king's envoy to receive fire from him; nothing in the excerpt describes a vote or a choice of leaders.",
            "The excerpt says the merchants sold gold to the Moors of the coast, not that towns paid gold to the Portuguese, and the ritual involves fire, not payment.",
          ],
          answer: 0 },
        { id: "t15-m03", skill: "u1", type: "mcq", set: "t15-s1", topic: "1.5", reasoning: "Comparison",
          question: "The relationship between the king of Benamatapa and the \"many other kings\" who were \"his subjects\" was most similar to the relationship between",
          choices: [
            "Mexica rulers and the conquered city-states that kept their own rulers but sent tribute to Tenochtitlan",
            "Song emperors and the officials they chose through civil service examinations",
            "the councils of merchants who governed Venice and the citizens of the city",
            "the sultans of Kilwa and the Portuguese captains who took over the town's trade",
          ],
          why: [
            "Correct. Like the king in the excerpt, the Mexica left local rulers in place, demanded tribute and obedience, and used force against towns that rebelled.",
            "Song officials were appointed and paid by the emperor after passing exams; they were not subject kings ruling their own lands.",
            "Venice was a merchant republic governed by councils, not a king ruling over other kings.",
            "The Portuguese did attack Kilwa in 1505, but captains taking over a town by force is conquest by an outside power, not a ruler with subject kings.",
          ],
          answer: 0 },

        // ===== Set 2: Islam and older traditions in West African states =====
        { id: "t15-m04", skill: "u1", type: "mcq", set: "t15-s2", topic: "1.5", reasoning: "Causation",
          question: "Which of the following best explains why many of the rulers described in the passage adopted Islam?",
          choices: [
            "Islam linked them to the Muslim merchants and scholars of the trade routes across the Sahara.",
            "Mongol armies required the peoples they conquered in Africa to accept Islam.",
            "Portuguese traders refused to buy gold from rulers who were not Muslims.",
            "The Ottoman sultans made conversion a condition for protecting West African trading cities.",
          ],
          why: [
            "Correct. Muslim merchants carried Islam south across the Sahara, and rulers who became Muslims gained trading partners, literate advisers, and ties to the wider Muslim world.",
            "The Mongols never conquered any part of West Africa, and some Mongol rulers adopted Islam only after their conquests in Asia.",
            "The Portuguese were Christians, and their ships did not reach the West African coast until the 1440s, long after Mali's rulers had adopted Islam.",
            "The Ottomans did not rule or protect West African cities in this period; their empire was centered in Anatolia and southeastern Europe.",
          ],
          answer: 0 },
        { id: "t15-m05", skill: "u1", type: "mcq", set: "t15-s2", topic: "1.5", reasoning: "Claims and evidence in sources",
          question: "Which of the following, not mentioned in the passage, would best support the argument that West African rulers joined Islam to older sources of authority?",
          choices: [
            "Griots, the court storytellers of Mali, kept reciting oral histories that praised Sundiata's ancestors and special powers.",
            "Scholars in Timbuktu copied and traded Arabic manuscripts on law and religion.",
            "Mansa Musa spent and gave away so much gold in Cairo that its value there fell.",
            "Camel caravans carried slabs of salt from mines in the Sahara to markets in the south.",
          ],
          why: [
            "Correct. The griots' praise of the ruler's family and powers drew on traditions older than Islam, which shows Muslim rulers still relying on older sources of authority.",
            "Arabic scholarship in Timbuktu shows the growth of Islamic learning, but it says nothing about older traditions.",
            "Mansa Musa's spending in Cairo shows Mali's wealth, not how rulers combined Islam with older beliefs.",
            "The salt caravans show the trade that rulers taxed, not the religious basis of their authority.",
          ],
          answer: 0 },
        { id: "t15-m06", skill: "u1", type: "mcq", set: "t15-s2", topic: "1.5", reasoning: "Comparison",
          question: "According to the passage, the Hausa states differed from the Mali Empire in that the Hausa states",
          choices: [
            "remained separate cities rather than uniting under a single ruler",
            "rejected Islam and kept only their older religions",
            "took no part in the trade that crossed the Sahara",
            "were ruled by kings who claimed descent from King Solomon",
          ],
          why: [
            "Correct. The passage says the Hausa cities \"stayed independent and often fought one another,\" while Mali's mansas ruled over many subject kings.",
            "The passage says Hausa rulers adopted Islam in the fourteenth and fifteenth centuries.",
            "The passage says the Hausa towns served as markets for trade across the Sahara.",
            "Claims of descent from Solomon belong to the rulers of Ethiopia, not to the Hausa kings.",
          ],
          answer: 0 },

        // ===== Set 3: Four African sites (data table) =====
        { id: "t15-m07", skill: "u1", type: "mcq", set: "t15-s3", topic: "1.5", reasoning: "Claims and evidence in sources",
          question: "Which of the following conclusions is best supported by the table?",
          choices: [
            "In several regions of Africa, rulers and communities built large royal or religious structures that displayed their wealth and beliefs.",
            "Islam was the main religion of every African state that built large structures in this period.",
            "Long-distance trade reached the cities of the African coast but not the states of the interior.",
            "Most of the structures in the table were built after Portuguese ships reached the coasts of Africa.",
          ],
          why: [
            "Correct. The table lists the capital city of a major state at Great Zimbabwe, a palace and mosque at Kilwa, rock-cut churches at Lalibela, and mosques at Timbuktu, in four different regions.",
            "Lalibela's churches are Christian, and Great Zimbabwe was not a Muslim state, so the table does not support this claim.",
            "Chinese and Persian goods were found at Great Zimbabwe, an inland city, which contradicts this claim.",
            "Portuguese ships reached East Africa in 1498, and every date in the table is earlier than that.",
          ],
          answer: 0 },
        { id: "t15-m08", skill: "u1", type: "mcq", set: "t15-s3", topic: "1.5", reasoning: "Causation",
          question: "Which of the following best explains why porcelain from China was found at both Great Zimbabwe and Kilwa?",
          choices: [
            "Swahili coastal cities traded gold from the interior for goods carried across the Indian Ocean.",
            "Chinese fleets under Zheng He sailed up the rivers of southern Africa to trade at Great Zimbabwe.",
            "Caravans crossing the Sahara carried Chinese goods south from North Africa to East Africa.",
            "Portuguese merchants carried Chinese goods around the Cape of Good Hope to sell in Africa.",
          ],
          why: [
            "Correct. Gold from the plateau passed through coastal towns such as Kilwa, which traded it for porcelain and other goods brought by Indian Ocean merchants, and some of those goods went back inland.",
            "Zheng He's fleets visited East African ports in the early fifteenth century but did not travel inland, and Chinese goods were reaching the region long before his voyages.",
            "Trans-Saharan caravans connected North Africa with West Africa, not with the East African coast or the southern plateau.",
            "The Portuguese did not reach the East African coast until 1498, decades after Great Zimbabwe was abandoned.",
          ],
          answer: 0 },

        // ===== SAQ 1: practice passage, Solomonic Ethiopia =====
        { id: "t15-q1a", skill: "u1", type: "fr", set: "t15-s4", part: "SAQ 1", sub: "a", topic: "1.5",
          lead: "Use the passage below to answer all parts of the question that follows.",
          prompt: "Identify ONE way, according to the passage, that Ethiopia's rulers strengthened their claim to rule.",
          earns: "The response names one specific method from the passage that rulers used to support their right to rule.",
          yes: [
            "The Solomonic kings claimed they were descended from King Solomon and the Queen of Sheba.",
            "Kings gave land to churches and monasteries, and Church leaders taught that the king ruled with God's approval.",
            "The Kebra Nagast told the story of the dynasty's descent from Solomon, which supported the kings' claim.",
          ],
          no: [
            "\"They were Christian.\" This names the religion but not how rulers used it to support their claim.",
            "\"They built the pyramids.\" This is wrong; the pyramids are in Egypt and Nubia and are far older.",
            "\"They made a lot of money from trade.\" The passage does not say that wealth was how rulers claimed the right to rule.",
          ],
          example: "The passage says the new rulers claimed descent from King Solomon of Israel and the Queen of Sheba, so they could present themselves as the rightful heirs of a holy royal family.",
          notExample: "Ethiopia was a country in Africa with a king." },
        { id: "t15-q1b", skill: "u1", type: "fr", set: "t15-s4", part: "SAQ 1", sub: "b", topic: "1.5",
          lead: "Use the passage below to answer all parts of the question that follows.",
          prompt: "Describe ONE piece of historical evidence, not mentioned in the passage, that supports the argument that religion helped Ethiopia's rulers hold power in the period c. 1200 to c. 1450.",
          earns: "The response describes a specific, accurate piece of evidence that the passage does not mention and ties it to religion supporting the rulers' power.",
          yes: [
            "The Kebra Nagast says that Menelik, the son of Solomon and the Queen of Sheba, brought the Ark of the Covenant to Ethiopia, which made the kingdom seem chosen by God.",
            "Monasteries such as Debre Libanos, founded in the thirteenth century, sent monks into newly conquered lands to spread Christianity, which tied those lands to the king.",
            "The head bishop of the Ethiopian Church was sent from the Coptic Church in Egypt, and the Church supported the kings, which linked royal power to the wider Christian world.",
          ],
          no: [
            "\"Kings claimed descent from Solomon.\" This is in the passage, so it is not new evidence.",
            "\"Ethiopia had many churches.\" This is too vague to show how religion helped rulers.",
            "\"Mansa Musa went on pilgrimage to Mecca.\" This is about Mali, not Ethiopia.",
          ],
          example: "In the thirteenth century, the monk Tekle Haymanot founded the monastery of Debre Libanos. Monks from monasteries like it spread Christianity into lands the kings had conquered, so the people there came to accept both the Church and the Christian king it supported.",
          notExample: "Religion was very important in Ethiopia." },
        { id: "t15-q1c", skill: "u1", type: "fr", set: "t15-s4", part: "SAQ 1", sub: "c", topic: "1.5",
          lead: "Use the passage below to answer all parts of the question that follows.",
          prompt: "Explain ONE similarity or ONE difference between how the rulers of Ethiopia and the rulers of another African state used religion to build or keep power in the period c. 1200 to c. 1450.",
          earns: "The response names another specific African state and explains an accurate similarity or difference in how its rulers used religion compared with Ethiopia's rulers.",
          yes: [
            "Similarity: Like Ethiopia's kings, Mali's mansas used a universal religion to build ties and prestige; Mansa Musa's pilgrimage to Mecca and the mosques he built showed him as a Muslim ruler, just as Ethiopian kings presented themselves as Christian rulers chosen by God.",
            "Difference: Ethiopia's kings made Christianity the basis of their claim to rule and spread it into conquered lands, while Mali's rulers adopted Islam but did not force it on the farmers, who mostly kept their older religions.",
            "Difference: Ethiopian kings used Christianity to set themselves apart from neighboring Muslim states they fought, while the rulers of Swahili cities such as Kilwa used Islam to share a faith with the Muslim merchants they traded with.",
          ],
          no: [
            "\"Mali was Muslim and Ethiopia was Christian.\" This states a difference in religion but does not explain how rulers used it to gain or keep power.",
            "\"Both states used religion.\" This is too general to explain a similarity.",
            "\"The Aztecs also used religion.\" The Mexica were in the Americas, so this does not answer the prompt about Africa.",
          ],
          example: "Ethiopia's rulers and Mali's rulers both used religion to strengthen their power, but in different ways. Ethiopian kings claimed descent from Solomon and gave land to the Church, which taught that God approved of their rule. Mali's mansas adopted Islam mainly to build ties with Muslim merchants and scholars, and they still took part in older ceremonies, because most of their subjects did not become Muslims.",
          notExample: "Ethiopia and Mali were both in Africa." },
      ] },
  ],
};

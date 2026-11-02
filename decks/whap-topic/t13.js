// Topic 1.3 Quiz: Developments in South and Southeast Asia from c. 1200 to c. 1450
// Sources: every stimulus this quiz uses, keyed by id.
export const sets = {
  "t13-s1": {
    id: "t13-s1", name: "Firoz Shah Tughluq on his own reign", intro: "Use the source below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "Information was brought to me that some Hindús had erected a new idol-temple in the village of Sálihpúr, and were performing worship to their idol. I sent some persons there to destroy the idol temple ..." },
        { p: "I encouraged my infidel subjects to embrace the religion of the prophet, and I proclaimed that every one who repeated the creed and became a Musulmán should be exempt from the jizya, or poll-tax. ... great numbers of Hindus presented themselves, and were admitted to the honour of Islám. ..." },
        { p: "The greatest and best of honours that I obtained through God's mercy was, that by my obedience and piety, and friendliness and submission to the Khalífa, the representative of the holy Prophet, my authority was confirmed; for it is by his sanction that the power of kings is assured ... A diploma was sent to me fully confirming my authority as deputy of the khiláfat ..." },
        { cite: "Sultan Firoz Shah Tughluq of Delhi (ruled 1351 to 1388), Futuhat-i Firoz Shahi (The Victories of Firoz Shah), his own account of his reign, translated by the editor, John Dowson, in H. M. Elliot and John Dowson, eds., The History of India as Told by Its Own Historians: The Muhammadan Period, vol. III (London: Trübner and Co., 1871), section XVII, beginning p. 374, as transcribed by the Packard Humanities Institute, Persian Literature in Translation. \"Infidel\" is the writer's word for non-Muslims. The jizya was a tax that Islamic law allowed Muslim rulers to collect from non-Muslim subjects in return for their protection. The Khalifa (caliph) was the head of the Sunni Muslim community; after the Mongols took Baghdad in 1258, the Abbasid caliphs lived in Cairo under the protection of the Mamluk sultans. A diploma is an official letter of appointment, and the khilafat is the office of the caliph.", url: "https://persian.packhum.org/text/080201013/4", kind: "primary" },
      ] },
    ],
  },
  "t13-s2": {
    id: "t13-s2", name: "Religion and kingship in Southeast Asia and Sri Lanka", intro: "Use the passage below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "Many historians argue that rulers in Southeast Asia and Sri Lanka did not simply copy Indian religions but used them to build their own authority. In the Khmer Empire, kings linked themselves with the Hindu gods Shiva and Vishnu and paid for temples at Angkor with rice taxes and the labor of their subjects. Around 1200, King Jayavarman VII turned to Mahayana Buddhism and built the Bayon temple. In the thirteenth and fourteenth centuries, Theravada Buddhism, carried by monks trained in Sri Lanka, grew stronger in Burma and spread to the Thai kingdom of Sukhothai and to Cambodia. Kings won the support of these monks by giving land and gifts to monasteries. In Sri Lanka, Sinhala kings presented themselves as protectors of the Buddhist faith and guarded the Tooth Relic of the Buddha as a sign of their right to rule." },
        { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" },
      ] },
    ],
  },
  "t13-s3": {
    id: "t13-s3", name: "Barani on the copper money of Muhammad bin Tughluq", intro: "Use the source below to answer all parts of the question that follows.",
    sources: [
      { title: "Source", blocks: [
        { p: "The third project also did great harm to the country. It increased the daring and arrogance of the disaffected in Hindustán, and augmented the pride and prosperity of all the Hindus. This was the issue of copper money. The Sultán, in his lofty ambition, had conceived it to be his work to subdue the whole habitable world and bring it under his rule. ..." },
        { p: "The Sultán's bounty and munificence had caused a great deficiency in the treasury, so he introduced his copper money, and gave orders that it should be used in buying and selling, and should pass current, just as the gold and silver coins had passed. The promulgation of this edict turned the house of every Hindu into a mint ... The ráís, the village headmen and landowners, grew rich and strong upon these copper coins, but the State was impoverished." },
        { cite: "Ziauddin Barani (Ziau-d din Barni), Tarikh-i Firoz Shahi (History of Firoz Shah), completed c. 1357, from the section on the reign of Sultan Muhammad bin Tughluq of Delhi (ruled 1325 to 1351), translated by the editor, John Dowson, in H. M. Elliot and John Dowson, eds., The History of India as Told by Its Own Historians: The Muhammadan Period, vol. III (London: Trübner and Co., 1871), section XV, beginning p. 93, as transcribed by the Packard Humanities Institute, Persian Literature in Translation. The editor's footnote number is omitted. Barani, a Muslim noble, served at Muhammad bin Tughluq's court for many years and wrote this history under the next sultan, Firoz Shah. Barani's first two \"projects\" of the sultan were heavy new taxes on the land between the Ganges and Yamuna rivers and the move of the capital from Delhi to Daulatabad, in the Deccan. Hindustan here means northern India. Munificence means lavish giving, and to pass current means to be accepted as money. Rais were Hindu chiefs.", url: "https://persian.packhum.org/text/080201013/3", kind: "primary" },
      ] },
    ],
  },
};

export default {
  forms: [
    { id: "t13", name: "Topic 1.3 Quiz: Developments in South and Southeast Asia", group: "Unit 1: The Global Tapestry",
      items: [
        // ===== Set 1: Firoz Shah Tughluq, Futuhat-i Firoz Shahi (1.3) =====
        { id: "t13-m01", skill: "u1", type: "mcq", set: "t13-s1", topic: "1.3", reasoning: "Contextualization",
          question: "Firoz Shah ruled from Delhi in the fourteenth century. Which of the following best describes the broader context of the policies in the excerpt?",
          choices: [
            "A Sunni Muslim ruling class, largely of Turkic origin, governed northern India, where most of the people were Hindu.",
            "The Mughal Empire, founded by Babur, had brought most of South Asia under Muslim rule.",
            "Mongol armies had conquered northern India and made it part of the Ilkhanate.",
            "The Hindu kingdom of Vijayanagara had driven the Muslim rulers out of northern India.",
          ],
          why: [
            "Correct. The Delhi Sultanate, founded in 1206, was ruled by Turkic Muslim dynasties such as the Tughluqs, and most of its subjects were Hindu. That is why the excerpt deals with temples, the jizya, and conversion.",
            "Babur founded the Mughal Empire in 1526, more than a century after Firoz Shah died.",
            "Mongol armies raided northern India many times, but the Delhi sultans drove them back. The Ilkhanate ruled Persia, not India.",
            "Vijayanagara was a Hindu kingdom in southern India. It never ruled Delhi or the north.",
          ],
          answer: 0 },
        { id: "t13-m02", skill: "u1", type: "mcq", set: "t13-s1", topic: "1.3", reasoning: "Sourcing and Situation",
          question: "Firoz Shah's main purpose in writing this account of his own reign was most likely to",
          choices: [
            "present himself as a pious ruler who governed by Islamic law and so deserved to rule",
            "record the exact number of converts so that officials could collect the jizya correctly",
            "persuade the Hindu kings of southern India to accept him as their overlord",
            "argue that sultans should rule without approval from any religious authority",
          ],
          why: [
            "Correct. Each paragraph shows the sultan acting as a model Muslim ruler: stopping worship at a new temple, rewarding converts, and seeking the caliph's approval. A ruler who writes about his own deeds wants readers to see him as a rightful king.",
            "The excerpt gives no numbers, only the phrase \"great numbers,\" and it is written as the ruler's praise of his own deeds, not as a tax record.",
            "The excerpt is about the sultan's own subjects and his ties to the caliph. It says nothing about the kings of the south.",
            "The excerpt argues the opposite. It says the power of kings is assured only by the caliph's sanction.",
          ],
          answer: 0 },
        { id: "t13-m03", skill: "u1", type: "mcq", set: "t13-s1", topic: "1.3", reasoning: "Claims and Evidence",
          question: "The third paragraph of the excerpt best supports which conclusion about the Delhi Sultanate?",
          choices: [
            "Its rulers sought the caliph's recognition to strengthen their claim to power, even though the caliph did not govern India.",
            "Its rulers were appointed by the Ottoman sultans and could be removed by them.",
            "It paid yearly tribute to the Abbasid caliph in Baghdad.",
            "Its rulers followed Shi'a Islam and rejected the Sunni caliph.",
          ],
          why: [
            "Correct. Firoz Shah says a diploma from the caliph \"confirmed\" his authority. By this time the Abbasid caliph lived in Cairo and had religious prestige but no real power, so his approval gave the sultan legitimacy, not orders.",
            "In the fourteenth century the Ottomans were a young state in Anatolia and the Balkans, and they never appointed rulers in Delhi.",
            "Mongol armies destroyed Abbasid Baghdad in 1258, and the excerpt describes the sultan receiving honors from the caliph, not sending him tribute.",
            "The Delhi sultans were Sunni Muslims, and the excerpt praises submission to the caliph, the leader of Sunni Islam.",
          ],
          answer: 0 },
        { id: "t13-m04", skill: "u1", type: "mcq", set: "t13-s1", topic: "1.3", reasoning: "Causation",
          question: "Firoz Shah's claim that many Hindus converted after he freed converts from the jizya best illustrates which cause of the spread of Islam in South Asia?",
          choices: [
            "Some people converted to gain the legal and economic advantages that Muslim rulers offered.",
            "Sufi mystics drew followers through devotional music and poetry.",
            "Muslim merchants settled in port cities along Indian Ocean trade routes.",
            "Mughal emperors forced the whole population to adopt Islam.",
          ],
          why: [
            "Correct. Freedom from the jizya gave non-Muslims a material reason to convert, which is the cause the excerpt describes.",
            "Sufis did win many converts in South Asia, but the excerpt describes a tax policy, not the work of Sufi teachers.",
            "Merchants spread Islam in coastal India and Southeast Asia, but the excerpt is about a ruler's policy toward his own subjects.",
            "The Mughal Empire began in 1526, and its emperors did not force mass conversion. Akbar, for example, ended the jizya.",
          ],
          answer: 0 },

        // ===== Set 2: practice passage, religion and kingship in Southeast Asia and Sri Lanka (1.3) =====
        { id: "t13-m05", skill: "u1", type: "mcq", set: "t13-s2", topic: "1.3", reasoning: "Claims and Evidence",
          question: "Which of the following, not mentioned in the passage, would best support the argument that rulers in Southeast Asia used religions from India to build their own authority?",
          choices: [
            "In Java, kings of Majapahit were honored after death in temples that showed them as Hindu gods.",
            "Arab and Indian merchants settled in the port cities of Sumatra and built mosques.",
            "Tamil poets in southern India wrote devotional hymns to Shiva.",
            "Chinese emperors chose officials through examinations on the Confucian classics.",
          ],
          why: [
            "Correct. Temples that presented dead kings as Hindu gods show Southeast Asian rulers using an Indian religion to give themselves sacred authority, which is the passage's argument.",
            "This shows merchants bringing Islam to Southeast Asia, not rulers using Hindu or Buddhist ideas to support their rule.",
            "These hymns are part of Hindu devotion in India itself, so they say nothing about rulers in Southeast Asia.",
            "The examination system shows how Chinese rulers used Confucian learning, not how Southeast Asian kings used religions from India.",
          ],
          answer: 0 },
        { id: "t13-m06", skill: "u1", type: "mcq", set: "t13-s2", topic: "1.3", reasoning: "Continuity and Change",
          question: "Based on the passage, which of the following best describes a change in mainland Southeast Asia between c. 1200 and c. 1450?",
          choices: [
            "Theravada Buddhism became the leading faith in kingdoms where Hindu and Mahayana Buddhist traditions had been strong.",
            "Islam replaced Buddhism as the main religion of the Thai and Burmese kingdoms.",
            "Christian missionaries from Portugal converted the rulers of Cambodia.",
            "Kings stopped giving land and gifts to religious institutions.",
          ],
          why: [
            "Correct. The passage describes Khmer kings honoring Hindu gods and then Mahayana Buddhism under Jayavarman VII, followed by the spread of Theravada Buddhism to Sukhothai and Cambodia.",
            "Islam spread mainly in the islands and ports of maritime Southeast Asia, such as Sumatra and Malacca. The Thai and Burmese kingdoms remained Buddhist.",
            "The Portuguese did not reach Southeast Asia until 1509, and the kings of Cambodia remained Buddhist.",
            "The passage says the opposite. Kings gave land and gifts to monasteries to win the support of monks.",
          ],
          answer: 0 },
        { id: "t13-m07", skill: "u1", type: "mcq", set: "t13-s2", topic: "1.3", reasoning: "Causation",
          question: "The spread of Theravada Buddhism described in the passage was most directly the result of",
          choices: [
            "contacts between monks trained in Sri Lanka and the rulers of mainland kingdoms, who supported those monks",
            "the conquest of mainland Southeast Asia by Yuan armies, which brought Buddhist teachers from China",
            "the voyages of Zheng He, which carried Buddhist texts from China to the region",
            "the migration of Brahman priests from the Delhi Sultanate",
          ],
          why: [
            "Correct. The passage says monks trained in Sri Lanka carried Theravada teachings to the mainland, where kings gave their monasteries land and gifts.",
            "Yuan armies attacked Burma and Vietnam in the thirteenth century but did not conquer the region, and the passage traces Theravada Buddhism to Sri Lanka, not China.",
            "Zheng He's voyages took place from 1405 to 1433, after Theravada Buddhism had already spread, and they were meant to display Ming power.",
            "Brahmans were Hindu priests, not Buddhist monks, so their migration would not explain the spread of Theravada Buddhism.",
          ],
          answer: 0 },
        { id: "t13-m08", skill: "u1", type: "mcq", set: "t13-s2", topic: "1.3", reasoning: "Comparison",
          question: "Based on the passage, Khmer kings and Sinhala kings were similar in that both",
          choices: [
            "used religious buildings or sacred objects to show that they had the right to rule",
            "adopted Islam to strengthen their ties with Muslim merchants",
            "drew most of their wealth from control of the Strait of Malacca",
            "forced all of their subjects to give up Hinduism",
          ],
          why: [
            "Correct. Khmer kings built temples at Angkor and linked themselves with gods, and Sinhala kings guarded the Tooth Relic, so both used religion to support their power.",
            "The passage describes Hindu and Buddhist rulers. Islam reached some Southeast Asian ports, such as Malacca, in the fifteenth century, but not the Khmer or Sinhala courts.",
            "Control of the Strait of Malacca made Srivijaya rich, but the passage says Khmer kings relied on rice taxes and the labor of their subjects.",
            "The passage describes no forced conversion, and Hindu traditions continued in both regions alongside Buddhism.",
          ],
          answer: 0 },

        // ===== SAQ 1: primary source, Barani on the copper money (1.3) =====
        { id: "t13-q1a", skill: "u1", type: "fr", set: "t13-s3", part: "SAQ 1", sub: "a", topic: "1.3",
          lead: "Use the source below to answer all parts of the question that follows.",
          prompt: "Identify ONE result of Sultan Muhammad bin Tughluq's copper money that the author describes.",
          earns: "The response states one result the source gives: people made their own copper coins at home, Hindu chiefs and landowners grew rich and strong, the state became poorer, or the sultan's opponents grew bolder.",
          yes: [
            "The author says the order turned every Hindu's house into a mint, so people made their own copper coins.",
            "The author says Hindu chiefs, village headmen, and landowners grew rich and strong from the copper coins.",
            "The author says the state was impoverished by the copper money.",
          ],
          no: [
            "\"The copper money made the treasury rich.\" The source says the opposite: the state was impoverished.",
            "\"The sultan wanted to conquer the world.\" The source gives this as a reason for the policy, not a result of it.",
            "\"The sultan issued copper coins.\" This describes the policy itself, not a result.",
          ],
          example: "According to the author, the copper money made the state poorer, because people made copper coins in their own homes and spent them as if they were gold and silver.",
          notExample: "The source is about money in India." },
        { id: "t13-q1b", skill: "u1", type: "fr", set: "t13-s3", part: "SAQ 1", sub: "b", topic: "1.3",
          lead: "Use the source below to answer all parts of the question that follows.",
          prompt: "Describe ONE historical development of the thirteenth or fourteenth century that provides context for Muhammad bin Tughluq's decision to issue copper money.",
          earns: "The response describes a relevant development, such as paper money used by other states of the period or the Delhi Sultanate's costly expansion and wars, and connects it to the copper money.",
          yes: [
            "The Song and Yuan dynasties in China used paper money that had value because the state required people to accept it, which gave rulers an example of money not made of gold or silver.",
            "The Delhi Sultanate had expanded deep into southern India in the early fourteenth century, and holding these lands and paying large armies drained the treasury.",
            "Delhi had to keep large armies to defend northern India against Mongol raids, which made the sultans need large and steady revenues.",
          ],
          no: [
            "\"The Mughals ran out of silver.\" The Mughal Empire began in 1526, long after this policy.",
            "\"The sultan had a deficiency in the treasury.\" This repeats the source without describing a broader development.",
            "\"Gold was discovered in the Americas.\" This happened in the sixteenth century and had nothing to do with Delhi in the 1300s.",
          ],
          example: "In China, the Song and then the Yuan dynasty issued paper money, which people had to accept even though the paper itself was worth little. Muhammad bin Tughluq's copper coins followed the same idea of money whose value came from a ruler's order, at a time when his wars and expansion into southern India had emptied his treasury.",
          notExample: "Money was important in history." },
        { id: "t13-q1c", skill: "u1", type: "fr", set: "t13-s3", part: "SAQ 1", sub: "c", topic: "1.3",
          lead: "Use the source below to answer all parts of the question that follows.",
          prompt: "Explain ONE way the author's situation or point of view may have shaped his description of the copper money.",
          earns: "The response names a specific feature of Barani's situation or point of view and explains how it could have affected what he wrote about the policy or about the Hindus.",
          yes: [
            "Barani was a Muslim noble who distrusted Hindu chiefs, so he stressed that the policy made \"all the Hindus\" proud and prosperous and may have blamed them for the failure more than the evidence allowed.",
            "Barani wrote under Firoz Shah, who reversed many of Muhammad bin Tughluq's policies, so blaming the old sultan's \"lofty ambition\" for the harm could please the new ruler.",
            "Barani had served at Muhammad bin Tughluq's court and saw the policy fail, so he wrote with hindsight and called it a \"project\" that \"did great harm\" rather than explaining what it was meant to do.",
          ],
          no: [
            "\"Barani was biased.\" This names no feature of his situation and explains nothing.",
            "\"Barani was a Hindu who wanted to praise Hindus.\" This is false. Barani was a Muslim noble at the sultan's court.",
            "\"Barani says the state was impoverished.\" This repeats the source without explaining his point of view.",
          ],
          example: "Barani was a Muslim noble who wrote this history for Firoz Shah, the sultan who came after Muhammad bin Tughluq and reversed many of his policies. Because of this, Barani had reason to present the old sultan's copper money as a foolish plan that ruined the state and helped Hindu chiefs, rather than as a reasonable answer to an empty treasury.",
          notExample: "The author wrote a long time ago." },
      ] },
  ],
};

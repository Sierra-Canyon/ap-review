// Topic 1.3 Quiz: Developments in South and Southeast Asia from c. 1200 to c. 1450
import { maps } from "../whap/maps.js";

// A map the site draws (tools/maps/whap-u1.mjs, built by tools/build-maps.mjs), with the references it was checked against.
const MAP = "Map drawn for this review from Natural Earth land outlines (public domain). Places, dates, and routes checked against ";
const map = (id, caption, refs) => [{ svg: maps[id], caption }, { cite: MAP + refs + ".", kind: "map" }];

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
    id: "t13-s2", name: "Muslim, Hindu, and Buddhist rulers in South and Southeast Asia", intro: "Use the map below to answer the questions that follow.", label: "Map",
    sources: [{ title: "Map", blocks: map("u1-islam-indian-ocean", "Muslim, Hindu, and Buddhist rulers in South and Southeast Asia, c. 1200 to c. 1450 (route approximate)", "Encyclopaedia Britannica, \"Indonesia: Islamic influence in Indonesia\" and \"India: The Vijayanagar empire, 1336 to 1646\", and Wikipedia, \"Majapahit\" and \"Alauddin Khalji's conquest of Gujarat\"") }],
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
        { id: "t13-m01", skill: "u1", type: "mcq", set: "t13-s1", topic: "1.3", reasoning: "Contextualization", difficulty: "easy",
          question: "Firoz Shah ruled from Delhi in the fourteenth century. Which of the following best describes the broader context of the policies in the excerpt?",
          choices: [
            "A Turkic Muslim ruling class governed northern India, where most people were Hindu.",
            "The Mughal Empire, founded by Babur, had brought most of South Asia under Muslim rule.",
            "Mongol armies had conquered northern India and made it part of the Ilkhanate of Persia.",
            "The Hindu kingdom of Vijayanagara had driven the Muslim rulers out of northern India.",
          ],
          why: [
            "Correct. The Delhi Sultanate, founded in 1206, was ruled by Turkic Sunni Muslim dynasties such as the Tughluqs, and most of its subjects were Hindu. That is why the excerpt deals with temples, the jizya, and conversion.",
            "Babur founded the Mughal Empire in 1526, more than a century after Firoz Shah died.",
            "Mongol armies raided northern India many times, but the Delhi sultans drove them back. The Ilkhanate ruled Persia, not India.",
            "Vijayanagara was a Hindu kingdom in southern India. It never ruled Delhi or the north.",
          ],
          answer: 0 },
        { id: "t13-m02", skill: "u1", type: "mcq", set: "t13-s1", topic: "1.3", reasoning: "Sourcing and Situation", difficulty: "moderate",
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
        { id: "t13-m03", skill: "u1", type: "mcq", set: "t13-s1", topic: "1.3", reasoning: "Claims and Evidence", difficulty: "moderate",
          question: "The third paragraph of the excerpt best supports which conclusion about the Delhi Sultanate?",
          choices: [
            "Its rulers sought the caliph's approval to strengthen their claim to rule.",
            "Its rulers were appointed by the Ottoman sultans and could be removed by them.",
            "It sent yearly tribute to the Abbasid caliph, who governed India from Baghdad.",
            "Its rulers followed Shi'a Islam and rejected the authority of the Sunni caliph.",
          ],
          why: [
            "Correct. Firoz Shah says a diploma from the caliph \"confirmed\" his authority. By this time the Abbasid caliph lived in Cairo and had religious prestige but no real power, so his approval gave the sultan legitimacy, not orders.",
            "In the fourteenth century the Ottomans were a young state in Anatolia and the Balkans, and they never appointed rulers in Delhi.",
            "Mongol armies destroyed Abbasid Baghdad in 1258, no caliph ever governed India, and the excerpt describes the sultan receiving honors from the caliph, not sending him tribute.",
            "The Delhi sultans were Sunni Muslims, and the excerpt praises submission to the caliph, the leader of Sunni Islam.",
          ],
          answer: 0 },
        { id: "t13-m04", skill: "u1", type: "mcq", set: "t13-s1", topic: "1.3", reasoning: "Causation", difficulty: "difficult",
          question: "Firoz Shah's claim that many Hindus converted after he freed converts from the jizya best illustrates which cause of the spread of Islam in South Asia?",
          choices: [
            "Some people converted to gain the legal and tax advantages Muslims enjoyed.",
            "Sufi mystics drew followers through devotional music, poetry, and shrines.",
            "Muslim merchants settled in port cities along the Indian Ocean trade routes.",
            "Mughal emperors forced Hindus across their empire to adopt Islam.",
          ],
          why: [
            "Correct. Freedom from the jizya gave non-Muslims a material reason to convert, which is the cause the excerpt describes.",
            "Sufis did win many converts in South Asia, but the excerpt describes a tax policy, not the work of Sufi teachers.",
            "Merchants spread Islam in coastal India and Southeast Asia, but the excerpt is about a ruler's policy toward his own subjects.",
            "The Mughal Empire began in 1526, and its emperors did not force mass conversion. Akbar, for example, ended the jizya.",
          ],
          answer: 0 },

        // ===== Set 2: map, Muslim, Hindu, and Buddhist rulers in South and Southeast Asia (1.3) =====
        { id: "t13-m05", skill: "u1", type: "mcq", set: "t13-s2", topic: "1.3", reasoning: "Claims and Evidence", difficulty: "moderate",
          question: "Which of the following claims about the spread of Islam in Southeast Asia is best supported by the map?",
          choices: [
            "Islam first took hold in Southeast Asia in port cities on the sea trade route.",
            "Islam reached Southeast Asia mainly through the conquests of the Delhi Sultanate.",
            "By c. 1450, Islam had replaced Hinduism and Buddhism across Southeast Asia.",
            "Islam reached Southeast Asian ports before it reached the cities of northern India.",
          ],
          why: [
            "Correct. The only places in Southeast Asia with Muslim rulers on the map, Samudera Pasai and Malacca, are ports on the sea route that also links them with Cambay and Calicut in India.",
            "Delhi's rule on the map reaches the coast only at Cambay in India, and no Delhi armies are shown in Southeast Asia.",
            "The map still shows Hindu or Buddhist rulers at Angkor and Majapahit, so Islam had not replaced the older faiths.",
            "The map dates Muslim rule at Delhi to 1206, nearly a century before the Muslim ruler's tomb at Samudera Pasai, dated 1297.",
          ],
          answer: 0 },
        { id: "t13-m06", skill: "u1", type: "mcq", set: "t13-s2", topic: "1.3", reasoning: "Continuity and Change", difficulty: "difficult",
          question: "Which of the following best describes both a change and a continuity shown on the map?",
          choices: [
            "Muslim states arose at Delhi and in Southeast Asian ports, while Hindu and Buddhist kingdoms endured.",
            "Buddhist kings replaced Hindu rulers in southern India, while Delhi kept a Hindu ruler throughout.",
            "Hindu kingdoms spread from Southeast Asia into northern India, while Delhi remained a Buddhist capital.",
            "Muslim states arose at Delhi and on Sumatra, while the sea trade route between India and China came to an end.",
          ],
          why: [
            "Correct. The map shows Muslim rule beginning at Delhi, Cambay, Samudera Pasai, and Malacca, while Vijayanagara, Angkor, and Majapahit kept Hindu or Buddhist rulers.",
            "The map labels Vijayanagara in southern India a Hindu kingdom from 1336 and Delhi a Muslim sultanate from 1206.",
            "The map labels Delhi as a Muslim sultanate from 1206 and shows no Hindu kingdoms moving from Southeast Asia into India.",
            "The first half is right, but the map shows the sea route still running from India past Sumatra and Malacca toward China.",
          ],
          answer: 0 },
        { id: "t13-m07", skill: "u1", type: "mcq", set: "t13-s2", topic: "1.3", reasoning: "Causation", difficulty: "easy",
          question: "Which of the following best explains why the ruler of Malacca, shown on the map, became Muslim soon after the city was founded?",
          choices: [
            "Becoming Muslim helped the ruler draw Muslim merchants to his port on the strait.",
            "The armies of the Delhi Sultanate conquered Malacca and required its ruler to convert.",
            "Portuguese traders brought Islam to Malacca to strengthen their alliance with the city.",
            "The Majapahit kingdom on Java ordered all the rulers it controlled to adopt Islam.",
          ],
          why: [
            "Correct. Malacca sits on the strait where the sea route on the map turns toward Java and China, and its rulers accepted Islam in part to draw Muslim traders from India, Sumatra, and Java to their port.",
            "The map shows Delhi's rule reaching only Cambay, and Delhi's armies never reached Southeast Asia.",
            "The Portuguese were Christians who reached Malacca in 1509 and conquered it in 1511, long after its ruler became Muslim.",
            "The map labels Majapahit a Hindu and Buddhist kingdom, so it did not spread Islam.",
          ],
          answer: 0 },
        { id: "t13-m08", skill: "u1", type: "mcq", set: "t13-s2", topic: "1.3", reasoning: "Comparison", difficulty: "difficult",
          question: "Based on the map, which of the following best compares the way Islam came to Delhi with the way it came to Samudera Pasai?",
          choices: [
            "Islam came to Delhi with Turkic conquerors, but to Samudera Pasai with Muslim merchants.",
            "Islam came to both places with Turkic armies that crossed the mountains from Central Asia.",
            "Islam came to Delhi with Turkic conquerors, and to Samudera Pasai with armies sent from Delhi.",
            "Islam came to both places at the same time, through missionaries sent by the Abbasid caliph.",
          ],
          why: [
            "Correct. The Delhi Sultanate was founded in 1206 by Turkic generals who had invaded from Afghanistan, while Samudera Pasai is a port on the sea route, where a local ruler adopted the faith of the Muslim traders who called there.",
            "Samudera Pasai lies on the sea route far from any land route from Central Asia, and no army reached it from the northwest.",
            "The first half is right, but the map shows Delhi's rule reaching the sea only at Cambay, and Delhi's armies never reached Sumatra.",
            "The map dates Muslim rule at Delhi to 1206 and at Samudera Pasai to 1297, and Islam did not spread there through missionaries sent by a caliph.",
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

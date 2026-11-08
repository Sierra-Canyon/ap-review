// Topic 1.2 Quiz: Developments in Dar al-Islam from c. 1200 to c. 1450
import { maps } from "../whap/maps.js";

// A map the site draws (tools/maps/whap-u1.mjs, built by tools/build-maps.mjs), with the references it was checked against.
const MAP = "Map drawn for this review from Natural Earth land outlines (public domain). Places, dates, and routes checked against ";
const map = (id, caption, refs) => [{ svg: maps[id], caption }, { cite: MAP + refs + ".", kind: "map" }];

// Sources: every stimulus this quiz uses, keyed by id.
export const sets = {
  "t12-s1": {
    id: "t12-s1", name: "Turkic and Mongol rulers in Dar al-Islam", intro: "Use the map below to answer the questions that follow.", label: "Map",
    sources: [{ title: "Map", blocks: map("u1-turkic-states", "Turkic and Mongol rulers in Dar al-Islam, 1206 to 1336", "the Metropolitan Museum of Art's Heilbrunn Timeline of Art History (\"The Art of the Mamluk Period\" and \"The Art of the Ilkhanid Period\"), and Encyclopaedia Britannica, \"India: The early Turkish sultans\"") }],
  },
  "t12-s2": {
    id: "t12-s2", name: "Learning in a divided Dar al-Islam", intro: "Use the passage below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "From c. 1200 to c. 1450, Dar al-Islam was split among many rival rulers, yet it remained one world of learning. Political division and even conquest did not stop the work of scholars. The Mongols destroyed much of Baghdad in 1258, but within a year the Mongol ruler Hulegu ordered an observatory built at Maragha, in northwestern Iran, for the astronomer Nasir al-Din al-Tusi. Scholars there drew on Greek, Persian, and Indian learning and produced new tables of planetary movements. Ideas also moved beyond Dar al-Islam. In Spain and Sicily, translators turned Arabic works into Latin, including the commentaries of Ibn Rushd (1126 to 1198) on the Greek philosopher Aristotle. These texts became part of the teaching of philosophy in the new universities of Europe, where Ibn Rushd was known as Averroes." },
        { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" },
      ] },
    ],
  },
  "t12-s3": {
    id: "t12-s3", name: "Rumi on the true mosque", intro: "Use the source below to answer the questions that follow.",
    sources: [
      { title: "The True Mosque", blocks: [
        { p: "Fools laud and magnify the mosque," },
        { p: "While they strive to oppress holy men of heart." },
        { p: "But the former is mere form, the latter spirit and truth." },
        { p: "The only true mosque is that in the hearts of saints." },
        { p: "The mosque that is built in the hearts of the saints" },
        { p: "Is the place of worship of all, for God dwells there." },
        { p: "So long as the hearts of the saints are not afflicted," },
        { p: "God never destroys the nation." },
      ] },
      { title: "All Religions are One", blocks: [
        { p: "In the adorations and benedictions of righteous men" },
        { p: "The praises of all the prophets are kneaded together." },
        { p: "All their praises are mingled into one stream," },
        { p: "All the vessels are emptied into one ewer." },
        { p: "Because He that is praised is, in fact, only One." },
        { p: "In this respect all religions are only one religion." },
        { p: "Because all praises are directed toward God's Light," },
        { p: "These various forms and figures are borrowed from it." },
        { cite: "Jalal al-Din Rumi (1207 to 1273), the Masnavi (a long Persian poem composed c. 1258 to 1273), two sections titled \"The True Mosque\" and \"All Religions are One,\" from Charles F. Horne, ed., The Sacred Books and Early Literature of the East, vol. VIII, Medieval Persia (New York: Parke, Austin, and Lipscomb, 1917), pp. 111 to 130, as published in the Internet Medieval Sourcebook, Fordham University, which notes that the text was modernized by Jerome S. Arkenberg. The page does not name the translator. Rumi was a Sufi teacher who lived in Konya, in Anatolia, and his followers founded the Mevlevi order of Sufis. Saints here means holy men of deep personal faith, and a ewer is a large pitcher.", url: "https://sourcebooks.web.fordham.edu/source/1250rumi-masnavi.asp", kind: "primary" },
      ] },
    ],
  },
};

export default {
  forms: [
    { id: "t12", name: "Topic 1.2 Quiz: Developments in Dar al-Islam", group: "Unit 1: The Global Tapestry",
      items: [
        // ===== Set 1: map, Turkic and Mongol rulers in Dar al-Islam =====
        { id: "t12-m01", skill: "u1", type: "mcq", set: "t12-s1", topic: "1.2", reasoning: "Developments and Processes",
          question: "The map best shows which development in Dar al-Islam between 1206 and 1336?",
          choices: [
            "Political power was divided among several states, many of them founded by Turkic military rulers rather than by the Abbasid caliphs.",
            "A single caliph in Baghdad governed all Muslim lands from Egypt to India.",
            "Mongol armies conquered Egypt and northern India and ruled them as one khanate.",
            "Arab dynasties from the Arabian Peninsula took control of Anatolia and northern India.",
          ],
          why: [
            "Correct. The map marks separate capitals at Konya, Cairo, Delhi, and Bursa, each the seat of a state founded by Turkic rulers, while the caliphs' city, Baghdad, fell to the Mongols in 1258.",
            "The map shows several capitals with their own rulers, and it marks Baghdad as taken by the Mongols in 1258.",
            "The map shows the Mamluks defeating the Mongols at Ain Jalut in 1260 and marks Cairo and Delhi as capitals of their own sultanates.",
            "The rulers on the map at Konya, Cairo, Delhi, and Bursa were Turks, not Arabs from Arabia.",
          ],
          answer: 0 },
        { id: "t12-m02", skill: "u1", type: "mcq", set: "t12-s1", topic: "1.2", reasoning: "Causation",
          question: "The events at Baghdad in 1258 and Ain Jalut in 1260, shown on the map, best help explain which development?",
          choices: [
            "Cairo replaced Baghdad as the leading political and cultural center of the Arabic-speaking Muslim world.",
            "Turkic slave soldiers founded the Delhi Sultanate in northern India.",
            "The Seljuk sultans made Konya the capital of their state in Anatolia.",
            "The Ottomans captured Bursa and made it their capital.",
          ],
          why: [
            "Correct. After the Mongols took Baghdad, the Mamluks stopped the Mongol advance at Ain Jalut, so Cairo survived as the Mamluk capital, sheltered a line of Abbasid caliphs, and became the center of Arab Muslim learning and trade.",
            "The map dates the Delhi Sultanate to 1206, more than fifty years before these events, so they cannot explain it.",
            "The Seljuks of Rum ruled from Konya long before 1258, and Mongol armies had already defeated them in 1243.",
            "The Ottomans took Bursa from the Byzantine Empire in 1326, far from Egypt and Syria, and the events of 1258 and 1260 did not decide it.",
          ],
          answer: 0 },
        { id: "t12-m03", skill: "u1", type: "mcq", set: "t12-s1", topic: "1.2", reasoning: "Continuity and Change",
          question: "The label at Tabriz on the map best shows which continuity in the history of Dar al-Islam?",
          choices: [
            "Conquerors from the steppes of Central Asia, as the Seljuk Turks had done earlier, adopted Islam and ruled over Muslim societies.",
            "Muslim rulers forced the peoples they conquered to give up Islam and adopt the faith of the Mongols.",
            "The Abbasid caliphs kept ruling Iran from Baghdad after the Mongol conquest.",
            "Mongol rulers refused to govern settled peoples and returned to the steppe after each conquest.",
          ],
          why: [
            "Correct. The map says the Mongol rulers of the Ilkhanate became Muslim in 1295, much as the Seljuk Turks, shown at Konya, had become Muslims before they built states in Southwest Asia and Anatolia.",
            "This reverses the label, which shows the Mongol conquerors adopting Islam, the faith of the people they ruled.",
            "The map marks Baghdad as taken by the Mongols in 1258, and Tabriz, not Baghdad, as the capital of the Ilkhanate in Iran.",
            "The map marks Tabriz as the capital of a Mongol state in Iran, which shows the Mongols stayed to govern settled lands.",
          ],
          answer: 0 },

        // ===== Set 2: practice passage on learning =====
        { id: "t12-m04", skill: "u1", type: "mcq", set: "t12-s2", topic: "1.2", reasoning: "Claims and Evidence",
          question: "Which of the following best states the main claim of the passage?",
          choices: [
            "Intellectual work continued and spread in Dar al-Islam despite political division and conquest.",
            "The Mongol conquest ended scientific learning in the Muslim world.",
            "Muslim scholars refused to study the works of non-Muslim thinkers.",
            "European universities taught Muslim scholars the philosophy of Aristotle.",
          ],
          why: [
            "Correct. The passage opens by saying the region stayed \"one world of learning\" despite rival rulers and supports this with the Maragha observatory and the spread of Ibn Rushd's work.",
            "The passage says the Mongols themselves sponsored the observatory at Maragha within a year of destroying Baghdad.",
            "The passage says scholars drew on Greek, Persian, and Indian learning, and Ibn Rushd wrote commentaries on Aristotle, a Greek thinker.",
            "This reverses the passage, which describes Arabic works on Aristotle being translated into Latin for European scholars.",
          ],
          answer: 0 },
        { id: "t12-m05", skill: "u1", type: "mcq", set: "t12-s2", topic: "1.2", reasoning: "Causation",
          question: "Which of the following best explains why European scholars wanted Latin translations of Arabic works such as those of Ibn Rushd?",
          choices: [
            "Scholars in Dar al-Islam had preserved and commented on Greek philosophy and science, much of which was little known in Latin Europe.",
            "The Mongol rulers of Iran required Europeans to study Arabic before they could trade in their lands.",
            "The printing press had made Arabic books cheap and easy to buy in European cities.",
            "The popes ordered European universities to replace Christian teaching with Islamic law.",
          ],
          why: [
            "Correct. Many works of Aristotle reached western Europe through Arabic versions and commentaries, which European scholars used to study logic, science, and philosophy.",
            "The Mongol rulers of Iran did trade with Europeans, but they did not make the study of Arabic a condition of trade.",
            "The printing press was developed in Europe in the mid-fifteenth century, after these translations had already been made.",
            "European universities were Christian institutions, and the Church did not ask them to teach Islamic law.",
          ],
          answer: 0 },
        { id: "t12-m06", skill: "u1", type: "mcq", set: "t12-s2", topic: "1.2", reasoning: "Comparison",
          question: "Hulegu's support for the observatory at Maragha is most similar to which other development of the thirteenth century?",
          choices: [
            "Khubilai Khan, the Mongol ruler of China, employed Muslim astronomers and other foreign experts at his court.",
            "The Mongol rulers of China kept the civil service examinations exactly as the Song had run them.",
            "The Delhi sultans banned the study of science and closed the schools of northern India.",
            "The Mamluks of Egypt converted to Buddhism under Mongol influence.",
          ],
          why: [
            "Correct. Like Hulegu, his brother Khubilai used scholars and experts from across the Mongol Empire, including Muslim astronomers who helped run an astronomy bureau in China.",
            "The Yuan dynasty actually suspended the examinations for decades and restored them only in 1315, in a limited form.",
            "The Delhi sultans supported Muslim scholars and poets, and their court attracted learned men fleeing the Mongols.",
            "The Mamluks were Sunni Muslims and fought the Mongols, and it was the Mongol Ilkhans of Iran who converted to Islam.",
          ],
          answer: 0 },

        // ===== Set 3: Rumi, the Masnavi =====
        { id: "t12-m07", skill: "u1", type: "mcq", set: "t12-s3", topic: "1.2", reasoning: "Developments and Processes",
          question: "Rumi's statement that \"The only true mosque is that in the hearts of saints\" best reflects which tradition within Islam?",
          choices: [
            "Sufism, which stressed a direct, personal experience of God over outward forms of worship",
            "Shia Islam, which held that leadership of the Muslim community belonged to the descendants of Ali",
            "Islamic law as taught in the madrasas, which stressed the exact performance of required rituals",
            "Islamic philosophy in the style of Ibn Rushd, which used reason and logic to explain the world",
          ],
          why: [
            "Correct. Sufis sought union with God through love and inner devotion, and Rumi contrasts the \"mere form\" of a building with \"spirit and truth\" in the heart.",
            "Shia Islam is defined by its view of rightful leadership, which the poem does not discuss.",
            "Legal scholars stressed correct outward practice, which is close to the opposite of the poem's focus on the heart.",
            "Philosophers like Ibn Rushd stressed reason, while the poem stresses love and inner faith.",
          ],
          answer: 0 },
        { id: "t12-m08", skill: "u1", type: "mcq", set: "t12-s3", topic: "1.2", reasoning: "Contextualization",
          question: "Rumi lived and taught in Konya, in Anatolia, in the middle of the thirteenth century. Which of the following best describes Konya's situation at that time?",
          choices: [
            "Konya was the capital of the Seljuk Sultanate of Rum, a Turkic Muslim state where Persian was a leading language of the court and of literature.",
            "Konya was a Byzantine city where Christian emperors ruled a mostly Greek population.",
            "Konya was a province of the Ottoman Empire, governed from Constantinople.",
            "Konya was ruled by the Mamluk sultans of Egypt, who had conquered all of Anatolia.",
          ],
          why: [
            "Correct. The Seljuks of Rum, a Turkic dynasty, ruled from Konya and supported Persian culture, which is why Rumi wrote the Masnavi in Persian there.",
            "The Byzantines had lost central Anatolia, including Konya, to Turkic rulers by the late eleventh century.",
            "The Ottomans did not take Constantinople until 1453, and in Rumi's lifetime they had not yet formed a state.",
            "The Mamluks ruled Egypt and Syria, not Anatolia, which came under Mongol overlordship after 1243.",
          ],
          answer: 0 },

        // ===== SAQ: no source, the Abbasid decline and the Mongol conquest =====
        { id: "t12-q1a", skill: "u1", type: "fr", part: "SAQ 1", sub: "a", topic: "1.2",
          lead: "Answer all parts of the question that follows.",
          prompt: "Identify ONE cause of the decline in the political power of the Abbasid caliphs before 1258.",
          earns: "The response names one accurate cause of the caliphs' loss of real power before the Mongol conquest of Baghdad.",
          yes: [
            "Turkic military commanders, and later the Seljuk sultans who took Baghdad in 1055, held real power and left the caliph mostly as a religious figure.",
            "Provinces such as Egypt and parts of Iran broke away under local dynasties that kept their own taxes and armies.",
            "Rival caliphs, such as the Fatimids in Egypt, challenged the Abbasid claim to lead all Muslims.",
          ],
          no: [
            "\"The Mongols captured Baghdad.\" This happened in 1258 and ended the Baghdad caliphate, so it is not a cause of the decline before 1258.",
            "\"The caliphs were weak.\" This restates the decline without naming a cause.",
            "\"The Ottomans conquered the Abbasids.\" The Ottomans did not exist as a state until about 1300.",
          ],
          example: "One cause was the rise of Turkic military power. The caliphs relied on Turkic soldiers, and in 1055 the Seljuk Turks took control of Baghdad, so the Seljuk sultan held real political and military power while the caliph kept mainly a religious role.",
          notExample: "The Abbasid caliphate was an Islamic empire based in Baghdad." },
        { id: "t12-q1b", skill: "u1", type: "fr", part: "SAQ 1", sub: "b", topic: "1.2",
          lead: "Answer all parts of the question that follows.",
          prompt: "Describe ONE effect of the Mongol conquest of Baghdad in 1258 on Dar al-Islam.",
          earns: "The response describes a specific, accurate result of the conquest of 1258 for the Muslim world.",
          yes: [
            "The Mongols killed the last Abbasid caliph in Baghdad, ending the caliphate's rule from that city.",
            "The Mamluk sultans of Egypt set up members of the Abbasid family as caliphs in Cairo from 1261, which made Cairo a new center of the Muslim world.",
            "Much of Baghdad was destroyed and many of its people were killed, and the city lost its place as the leading center of Muslim learning and trade.",
          ],
          no: [
            "\"Baghdad was hurt.\" This is too vague to describe an effect.",
            "\"The Mongols converted to Christianity.\" This is not accurate.",
            "\"The House of Wisdom was founded.\" It was founded centuries earlier, so it was not an effect of 1258.",
          ],
          example: "When the Mongols under Hulegu took Baghdad in 1258, they killed the Abbasid caliph and much of the city's population. This ended the line of caliphs who had ruled from Baghdad since the eighth century, and political leadership in the Muslim world shifted to other centers, such as Mamluk Cairo.",
          notExample: "The Mongols were a powerful empire from Central Asia." },
        { id: "t12-q1c", skill: "u1", type: "fr", part: "SAQ 1", sub: "c", topic: "1.2",
          lead: "Answer all parts of the question that follows.",
          prompt: "Explain ONE way Islam or Islamic culture continued to shape Southwest Asia or Central Asia after the Mongol conquests of the thirteenth century.",
          earns: "The response gives a specific example of Islam or Islamic culture lasting in the lands the Mongols conquered and explains how it shows continuity after the conquest.",
          yes: [
            "The Mongol Ilkhan Ghazan converted to Islam in 1295, so the Mongol rulers of Iran became Muslim rulers of a Muslim population.",
            "The Ilkhans employed Muslim officials such as the vizier Rashid al-Din, who kept Persian traditions of government and wrote a great history in Persian.",
            "Khans of the Golden Horde, such as Uzbeg Khan, adopted Islam, and it became the faith of their court.",
          ],
          no: [
            "\"Islam stayed important.\" This names no example and explains nothing.",
            "\"The Mongols forced everyone to give up Islam.\" This is not accurate.",
            "\"The Ottomans took Constantinople in 1453.\" This is a later Turkic conquest, not an example of Islam shaping the lands the Mongols conquered.",
          ],
          example: "Islam continued to shape Iran after the Mongol conquest because the conquerors adopted it. In 1295 the Ilkhan Ghazan converted to Islam, and his government relied on Muslim and Persian officials such as Rashid al-Din, so Islamic law, Persian culture, and Muslim scholarship continued under Mongol rule.",
          notExample: "The Mongols conquered a large part of Asia." },
      ] },
  ],
};

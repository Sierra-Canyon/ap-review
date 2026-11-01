// Topic 2.5 Quiz: Cultural Consequences of Connectivity
// Sources: every stimulus this quiz uses, keyed by id.
export const sets = {
  "t25-s1": {
    id: "t25-s1", name: "The Malay Annals on Islam in Samudra", intro: "Use the source below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "Then the sheref of Mecca sent a vessel properly fitted out, and ordered the mariners to proceed to the land of Matabar, and the name of the Nakhoda was Sheikh Ismail. ..." },
        { p: "Then the fakir brought him over to Islam, and taught him the word of testimony. When Marah Silu went to sleep after this operation, he dreamed, that he was face to face with the holy prophet, who desired him to open his mouth, on which the prophet spat into it, and he immediately awaked, when his body had the odour of Nara-wastu. ... Then Sheikh Ismail landed all the royal accoutrements which he had brought with him, and installed Marah Silu, as raja, under the title of Sultan Malec al Salih. ..." },
        { p: "After this Sheikh Ismail set sail, and returned to Mecca; and the fakir staid in the island of Samadra, for the purpose of establishing the doctrine of Islam..." },
        { cite: "Malay Annals (Sejarah Melayu, a chronicle of the Malay sultans of Melaka, compiled in the fifteenth and sixteenth centuries and revised in 1612), Chapter VII, translated from the Malay by John Leyden, with an introduction by Sir Thomas Stamford Raffles (London: Longman, Hurst, Rees, Orme, and Brown, 1821), from the scanned text at the Internet Archive. One plain scanning error is corrected (\"the'word\" to \"the word\"). The episode tells how Samadra (Samudra, later called Samudra Pasai, a port kingdom in northern Sumatra) became Muslim. Its first Muslim ruler, Sultan Malik al-Salih, died in 1297. The sheref of Mecca is the sharif, the ruler of the city. Matabar is probably Ma'bar, on the southeastern coast of India. The fakir (a wandering Muslim holy man) is a former ruler of Matabar who joined the voyage in a holy man's dress, and Marah Silu was the chief of Samadra. A Nakhoda is a ship's captain, the word of testimony is the Muslim declaration of faith, and Nara-wastu is a sweet-smelling perfume.", url: "https://archive.org/stream/b29336600/b29336600_djvu.txt", kind: "primary" },
      ] },
    ],
  },
  "t25-s2": {
    id: "t25-s2", name: "Techniques and learning on the move", intro: "Use the passage below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "Between c. 1200 and c. 1450, the networks that linked Afro-Eurasia carried ideas and techniques as well as goods. Papermaking began in China, spread through the Islamic world in earlier centuries, and reached Spain and Italy by the thirteenth century, where cheaper paper let records, letters, and books multiply. Gunpowder, another Chinese invention, spread west during the era of the Mongol conquests, and by the middle of the fourteenth century European armies were firing early cannon. Knowledge moved as well. In Toledo, a Spanish city taken from Muslim rulers in 1085, scholars translated Arabic works on mathematics, medicine, and astronomy into Latin, along with Arabic versions of ancient Greek texts. Many historians argue that these borrowings did more than any single invention to prepare the way for later changes in Europe." },
        { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" },
      ] },
    ],
  },
  "t25-s3": {
    id: "t25-s3", name: "Roger Bacon on experimental science", intro: "Use the source below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "Having laid down the main points of the wisdom of the Latins as regards language, mathematics and optics, I wish now to review the principles of wisdom from the point of view of experimental science, because without experiment it is impossible to know anything thoroughly." },
        { p: "... But neither Aristotle or Avicenna have given us knowledge of these things in their books upon Nature, nor Seneca, who wrote a special book concerning them. But experimental science analyzes such things." },
        { p: "... For Ptolemy in the introduction of the Almagest, says that there is another and surer way than the ordinary astronomy; that is, the experimental method which follows after the course of nature, to which many faithful philosophers, such as Aristotle and a vast crowd of the authors of predictions from the stars, are favorable, as he himself says, and we ourselves know through our own experience, which cannot be denied." },
        { cite: "Roger Bacon, an English Franciscan friar and scholar, Opus Majus (written 1267 to 1268 for Pope Clement IV), section on experimental science, from Oliver J. Thatcher, ed., The Library of Original Sources (Milwaukee: University Research Extension Co., 1901), vol. V, pp. 369 to 376, as published in the Internet Medieval Sourcebook, Fordham University, under the title \"Roger Bacon: On Experimental Science, 1268.\" The translator is not named. The Latins are the scholars of western Europe, who wrote in Latin. Aristotle was an ancient Greek philosopher. Avicenna (Ibn Sina, died 1037) was a Persian Muslim philosopher and physician. Ptolemy was a Greek astronomer of Roman Egypt, and the Almagest is his book on astronomy, which was translated from Arabic into Latin at Toledo in 1175. Seneca was a Roman writer. The things in the second paragraph are rainbows and similar effects of light.", url: "https://sourcebooks.web.fordham.edu/source/bacon2.asp", kind: "primary" },
      ] },
    ],
  },
};

export default {
  forms: [
    { id: "t25", name: "Topic 2.5 Quiz: Cultural Consequences of Connectivity", group: "Unit 2: Networks of Exchange",
      items: [
        // ===== Set 1: The Malay Annals on Islam in Samudra =====
        { id: "t25-m01", skill: "u2", type: "mcq", set: "t25-s1", topic: "2.5", reasoning: "Contextualization",
          question: "The conversion described in the excerpt took place in the context of which broader development in the period c. 1200 to c. 1450?",
          choices: [
            "The spread of Islam along Indian Ocean trade routes that linked Arabia and India to Southeast Asia",
            "The conquest of Southeast Asia by the armies of the Abbasid Caliphate",
            "The Ming voyages of Zheng He, which forced Southeast Asian rulers to accept Islam",
            "The Mongol invasion of Java, which brought Muslim governors to Sumatra",
          ],
          why: [
            "The excerpt shows a ship sailing from Mecca by way of India to a port kingdom in Sumatra, which fits the way Muslim merchants and teachers carried Islam across the Indian Ocean.",
            "Abbasid armies never conquered Southeast Asia, and Islam reached the region by sea through trade and teaching, not conquest.",
            "Zheng He's voyages came more than a century after the events in the excerpt, and they were diplomatic and trading missions, not campaigns of forced conversion.",
            "The Yuan expedition to Java in 1293 failed, and it did not spread Islam or install Muslim governors.",
          ], answer: 0 },
        { id: "t25-m02", skill: "u2", type: "mcq", set: "t25-s1", topic: "2.5", reasoning: "Sourcing and situation",
          question: "The Malay Annals were written at the court of Malay sultans. The authors most likely included the dream of the prophet in order to",
          choices: [
            "show that the Muslim rulers of the region received their faith and authority directly from the Prophet and Mecca",
            "persuade the emperors of China to accept the Malay rulers as equals",
            "warn Malay rulers against trading with merchants from Arabia and India",
            "record the exact date on which Islam first reached Sumatra",
          ],
          why: [
            "A court chronicle tells a dynasty's story in the most honorable way, and a dream in which the Prophet himself blesses the first sultan makes that line of Muslim rulers holy and legitimate.",
            "The excerpt is about conversion and Mecca and does not mention China.",
            "The excerpt praises the ship and the holy man from Mecca and India, so it does not warn against foreign merchants.",
            "The excerpt gives no date, and its miracle story is about authority, not exact record keeping.",
          ], answer: 0 },
        { id: "t25-m03", skill: "u2", type: "mcq", set: "t25-s1", topic: "2.5", reasoning: "Comparison",
          question: "The conversion of the ruler of Samadra described in the excerpt is most similar to which development in another region in the period c. 1200 to c. 1450?",
          choices: [
            "The rulers of Mali adopted Islam through contact with Muslim merchants and scholars, and some made the pilgrimage to Mecca.",
            "The Christian kingdoms of Spain spread their faith by conquering Muslim cities in Iberia.",
            "The Mongol rulers of Persia adopted the Islam of the people they had conquered.",
            "Portuguese priests baptized the rulers of Mali in the fourteenth century.",
          ],
          why: [
            "In both Samadra and Mali, rulers of trading states adopted Islam peacefully through ties to Muslim traders and teachers, and they linked their rule to Mecca.",
            "The Christian kingdoms of Spain spread their faith through conquest, while the excerpt describes a peaceful conversion brought by a ship and a holy man.",
            "The Ilkhans converted to the religion of the people they ruled after conquering them, while the ruler of Samadra adopted a faith brought by visitors from overseas.",
            "Portuguese ships did not reach West Africa until the 1440s, and Mali's rulers were Muslims, not Christians.",
          ], answer: 0 },

        // ===== Set 2: Techniques and learning on the move =====
        { id: "t25-m04", skill: "u2", type: "mcq", set: "t25-s2", topic: "2.5", reasoning: "Causation",
          question: "According to the passage, which of the following most directly caused the spread of paper and gunpowder to Europe?",
          choices: [
            "Trade and conquest along networks that connected East Asia, the Islamic world, and Europe",
            "European explorers who sailed around Africa to China and brought the inventions home",
            "Chinese emperors who sent engineers to teach the rulers of Europe",
            "Scholars who fled China during the Black Death and settled in Italy",
          ],
          why: [
            "The passage traces paper through the Islamic world to Spain and Italy and links gunpowder's spread to the Mongol conquests, so both moved along connected networks of trade and war.",
            "Europeans did not sail around Africa to Asia until 1498, long after paper and gunpowder had reached Europe.",
            "The passage describes techniques spreading from people to people across networks, not a Chinese program of sending teachers to Europe.",
            "The passage says nothing about scholars fleeing China, and paper had reached Europe before the Black Death of the late 1340s.",
          ], answer: 0 },
        { id: "t25-m05", skill: "u2", type: "mcq", set: "t25-s2", topic: "2.5", reasoning: "Claims and evidence in sources",
          question: "Which of the following would best support the passage's argument about the movement of knowledge?",
          choices: [
            "In 1202, Leonardo of Pisa (Fibonacci), who had learned Hindu-Arabic numerals in North Africa, published a book teaching them to Europeans.",
            "Chinese officials in the Song dynasty were chosen through exams on the Confucian classics.",
            "The Inca built a road network that linked their empire in the Andes.",
            "Japanese warriors followed a code of loyalty to their lords.",
          ],
          why: [
            "Numerals that began in India, passed to Muslim scholars, and then reached Europe through a merchant's son trained in North Africa show learning moving along the same networks the passage describes.",
            "The civil service exams were a development inside China, not an example of knowledge moving between regions.",
            "The Inca roads were in the Americas, which had no contact with Afro-Eurasian networks in this period.",
            "The warrior code of Japan developed inside Japan and does not show knowledge moving between regions.",
          ], answer: 0 },
        { id: "t25-m06", skill: "u2", type: "mcq", set: "t25-s2", topic: "2.5", reasoning: "Continuity and change",
          question: "The spread of papermaking described in the passage most directly made possible which later development?",
          choices: [
            "The rapid spread of printed books in Europe after Gutenberg built his printing press c. 1450",
            "The end of the use of gunpowder weapons in Europe by 1500",
            "The decline of Arabic as a language of science before 1200",
            "The closing of the Silk Roads by the Yuan dynasty",
          ],
          why: [
            "Printing presses needed large amounts of cheap paper, and the paper mills of Spain and Italy supplied the material that let printed books spread across Europe.",
            "Gunpowder weapons became more important in Europe after 1450, not less.",
            "Arabic remained a major language of science well after 1200, and this decline would not be a result of papermaking.",
            "The Yuan dynasty kept the Silk Roads open and protected trade on them.",
          ], answer: 0 },

        // ===== Set 3: Roger Bacon on experimental science =====
        { id: "t25-m07", skill: "u2", type: "mcq", set: "t25-s3", topic: "2.5", reasoning: "Contextualization",
          question: "Bacon's use of Aristotle, Avicenna, and Ptolemy is best understood in the context of which development?",
          choices: [
            "The translation of Greek and Arabic works on science and philosophy into Latin, especially in Spain",
            "The arrival in Europe of printed Chinese books carried home by Marco Polo",
            "A ban by the Byzantine emperors on the teaching of Greek philosophy",
            "The spread of Neo-Confucian scholarship from Song China to Europe",
          ],
          why: [
            "Works by Greek authors such as Aristotle and Ptolemy and by Muslim scholars such as Avicenna reached Latin readers through translations made in places such as Toledo, so a thirteenth-century English friar could cite all three.",
            "Marco Polo did not bring Chinese books into European use, and Bacon names Greek and Muslim authors, not Chinese ones.",
            "Byzantine scholars kept copying and teaching Greek philosophy, and Bacon's sources reached him through Latin translations, many from Arabic.",
            "Neo-Confucian ideas spread within East Asia, to Korea and Japan, not to Europe in this period.",
          ], answer: 0 },
        { id: "t25-m08", skill: "u2", type: "mcq", set: "t25-s3", topic: "2.5", reasoning: "Claims and evidence in sources",
          question: "Which of the following best describes Bacon's view of the Greek and Muslim authors he names?",
          choices: [
            "He treats them as authorities but argues that experiment can reveal knowledge their books lack.",
            "He rejects their works because their authors were not Christians.",
            "He argues that Latin scholars already knew everything these authors taught.",
            "He claims that Avicenna and Ptolemy were Latin scholars from western Europe.",
          ],
          why: [
            "Bacon calls Aristotle a \"faithful\" philosopher and cites Ptolemy in support of his method, yet he says neither Aristotle nor Avicenna explained the effects of light that \"experimental science analyzes.\"",
            "Bacon cites these authors to support his argument and calls Aristotle a \"faithful\" philosopher, so he does not reject them.",
            "Bacon says that Aristotle and Avicenna did not explain some things, and he presents experiment as a way to learn more, not a claim that Latin scholars knew it all.",
            "Avicenna was a Persian Muslim and Ptolemy a Greek astronomer, and the excerpt does not call either of them Latin.",
          ], answer: 0 },

        // ===== SAQ: no source =====
        { id: "t25-q1a", skill: "u2", type: "fr", part: "SAQ 1", sub: "a", topic: "2.5",
          lead: "Answer all parts of the question that follows.",
          prompt: "Identify ONE religion that spread to a new region through networks of exchange in the period c. 1200 to c. 1450.",
          earns: "The response names a religion and a region it spread to, or grew in, in this period through trade or travel.",
          yes: [
            "Islam spread to West Africa, where the rulers of Mali became Muslims.",
            "Islam spread to port cities of Southeast Asia, such as Melaka, whose ruler adopted Islam in the early fifteenth century.",
            "Theravada Buddhism spread from Sri Lanka to mainland Southeast Asia, where the rulers of Sukhothai in Thailand supported it.",
          ],
          no: [
            "\"Religion spread.\" It names no religion and no region.",
            "\"Christianity spread to the Americas.\" This happened after 1492, outside the period.",
            "\"Islam spread to Arabia.\" Islam began in Arabia in the seventh century, so this is not a new region in this period.",
          ],
          example: "Islam spread along Indian Ocean trade routes to Southeast Asia, where the ruler of the port city of Melaka became a Muslim in the early fifteenth century.",
          notExample: "Many people believed in different religions." },
        { id: "t25-q1b", skill: "u2", type: "fr", part: "SAQ 1", sub: "b", topic: "2.5",
          lead: "Answer all parts of the question that follows.",
          prompt: "Describe ONE way that a traveler spread knowledge or culture between regions in the period c. 1200 to c. 1450.",
          earns: "The response names a specific traveler and describes what knowledge or culture that traveler carried or recorded and where it went.",
          yes: [
            "Ibn Battuta, a Muslim legal scholar from Morocco, served as a judge in Delhi and in the Maldives, where he applied Islamic law, and his account of his travels described much of the Muslim world to its readers.",
            "Marco Polo's account of his years in Yuan China described Chinese cities, paper money, and coal to European readers.",
            "Mansa Musa of Mali returned from his pilgrimage to Mecca in 1324 with Muslim scholars and an architect, who helped build mosques and centers of learning in Mali.",
          ],
          no: [
            "\"Travelers spread ideas.\" It names no traveler and no idea.",
            "\"Marco Polo went to China.\" This identifies a traveler but does not describe what knowledge or culture spread.",
            "\"Christopher Columbus brought Christianity to the Americas in 1400.\" The date is wrong, and his voyages came after this period.",
          ],
          example: "Ibn Battuta, a scholar from Morocco trained in Islamic law, traveled across the Muslim world and served as a judge in Delhi and the Maldives. His account of his travels told readers in North Africa about the customs, rulers, and religious life of regions from West Africa to China.",
          notExample: "People traveled a lot in this time period and learned things." },
        { id: "t25-q1c", skill: "u2", type: "fr", part: "SAQ 1", sub: "c", topic: "2.5",
          lead: "Answer all parts of the question that follows.",
          prompt: "Explain ONE way that religious ideas from South Asia shaped the culture or government of a state in Southeast Asia in the period c. 1200 to c. 1450.",
          earns: "The response names a Southeast Asian state, connects it to Hinduism or Buddhism, and explains how that religion shaped its rulers, buildings, or society.",
          yes: [
            "In the Khmer Empire, Jayavarman VII, who ruled c. 1181 to c. 1218, built Buddhist temples such as the Bayon at Angkor Thom, which presented the king as a ruler blessed by the Buddha and strengthened his authority.",
            "The kings of Majapahit on Java, founded in 1293, followed Hindu and Buddhist traditions and presented themselves as divine rulers, which helped them claim authority over many islands.",
            "The kings of Sukhothai in Thailand supported Theravada Buddhist monks and monasteries, which made Buddhism the faith of the court and much of the population.",
          ],
          no: [
            "\"Hinduism was in Southeast Asia.\" It names no state and explains no effect.",
            "\"Angkor Wat is a big temple.\" This names a building but does not explain how religion shaped the state.",
            "\"Islam spread to Melaka.\" Islam began in Arabia, not South Asia, and the prompt asks about Hindu or Buddhist ideas.",
          ],
          example: "Hindu and Buddhist ideas of divine kingship from South Asia shaped the Khmer Empire. Its king Jayavarman VII built the Bayon temple at Angkor Thom around 1200, with carved faces linked to a Buddhist figure, to tie his rule to the Buddha and to the South Asian idea of a sacred king. These temples made the capital a religious center and strengthened the king's authority over his people.",
          notExample: "Southeast Asia had a lot of temples." },
      ] },
  ],
};

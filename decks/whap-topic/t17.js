// Topic 1.7 Quiz: Comparison, c. 1200 to c. 1450
// Sources: every stimulus this quiz uses, keyed by id.
export const sets = {
  "t17-s1": {
    id: "t17-s1", name: "Edward I summons the Parliament of 1295", intro: "Use the source below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "As a most just law, established by the careful providence of sacred princes, exhorts and decrees that what affects all, by all should be approved, so also, very evidently should common danger be met by means provided in common." },
        { p: "Since we intend to have a consultation and meeting with the earls, barons and other principal men of our kingdom with regard to providing remedies against the dangers which are in these days threatening the same kingdom; ... we strictly require you to cause two knights from the aforesaid county, two citizens from each city in the same county, and two burgesses from each borough, of those who are especially discreet and capable of laboring, to be elected without delay... Moreover, the said knights are to have full and sufficient power for themselves and for the community of the aforesaid county..." },
        { cite: "King Edward I of England, writs summoning the Parliament of 1295: the first paragraph is from the summons to Robert, archbishop of Canterbury, and the second is from the summons to the sheriff of Northamptonshire (dated October 3), translated by E. P. Cheyney in Translations and Reprints from the Original Sources of European History, vol. 1, no. 6 (Philadelphia: University of Pennsylvania Press, 1897), pp. 33 to 35, as published in the Internet Medieval Sourcebook, Fordham University, under the title \"Three Summonses to the Parliament of 1295.\" The king refers to himself in the plural. Burgesses were leading townsmen of a borough, a self-governing town. In 1294 the king of France had seized Gascony, the English king's lands in southwestern France, and the two kingdoms were at war.", url: "https://sourcebooks.web.fordham.edu/source/ed1-summons.asp", kind: "primary" },
      ] },
    ],
  },
  "t17-s2": {
    id: "t17-s2", name: "Rulers and their officials", intro: "Use the passage below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "Many historians compare how rulers in the period c. 1200 to c. 1450 found people to run their states. In Song China, and again under the Ming after 1368, emperors chose many officials through civil service examinations on Confucian texts, so these scholar-officials owed their rank to the throne rather than to their birth. In Egypt and Syria, the Mamluk Sultanate was ruled by soldiers who had been bought as enslaved boys, at first mostly Turkic boys from the steppe north of the Black Sea and later Circassians from the Caucasus, and then trained in Islam and warfare and freed. The Delhi Sultanate in northern India also relied on Turkic military slaves, and several of them became sultans. In each case, rulers hoped that men who depended on the ruler, rather than on a powerful family, would stay loyal." },
        { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" },
      ] },
    ],
  },
  "t17-s3": {
    id: "t17-s3", name: "The size of states, c. 1200 to c. 1450", intro: "Use the table below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "ESTIMATED LARGEST LAND AREA OF SELECTED STATES" },
        { table: {
          head: ["State", "Region", "Largest area (million square kilometers)", "Largest area (million square miles)", "Year of largest area"],
          rows: [
            ["Mongol Empire", "Central and East Asia, spreading across Eurasia", "24.0", "9.27", "1270 or 1309"],
            ["Yuan dynasty", "East Asia", "11.0", "4.25", "1310"],
            ["Ming dynasty", "East Asia", "6.5", "2.51", "1450"],
            ["Delhi Sultanate", "South Asia", "3.2", "1.24", "1312"],
            ["Mamluk Sultanate", "North Africa and Southwest Asia", "2.1", "0.81", "1300 or 1400"],
            ["Inca Empire", "South America", "2.0", "0.77", "1527"],
            ["Mali Empire", "West Africa", "1.1", "0.42", "1380"],
            ["Aztec Empire", "Mesoamerica", "0.22", "0.08", "1520"],
          ],
        } },
        { cite: "Table built from Wikipedia, \"List of largest empires\" (accessed November 1, 2026), which gives the largest dry land area each state controlled and draws on the estimates of the political scientist Rein Taagepera, who published articles on the size of historical empires between 1978 and 1997. Figures are rounded as on the page, and where the page gives two possible years, both are shown. The Inca and Aztec states reached their largest size after 1450, but both began their rapid growth in the fifteenth century. The Yuan dynasty was the Mongol state that ruled China from 1271 to 1368.", url: "https://en.wikipedia.org/wiki/List_of_largest_empires", kind: "data" },
      ] },
    ],
  },
  "t17-s4": {
    id: "t17-s4", name: "Ruling diverse subjects", intro: "Use the passage below to answer all parts of the question that follows.",
    sources: [
      { title: "Source", blocks: [
        { p: "Many historians argue that the large states of the period c. 1200 to c. 1450 had to rule peoples who did not share their rulers' language or faith, and that each chose its own mix of force and accommodation. In the Delhi Sultanate, Turkic Muslim sultans ruled a mostly Hindu population. They usually allowed Hindus to practice their religion in return for a special tax, the jizya, and relied on Hindu landholders to collect revenue in the countryside. In the Andes, the Inca pressed harder for unity. They spread Quechua as a common language, required conquered peoples to honor the sun god Inti, and moved whole communities of loyal settlers into newly conquered areas. Yet both states left many local leaders in power, because no ruler had enough officials to govern every village directly." },
        { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" },
      ] },
    ],
  },
};

export default {
  forms: [
    { id: "t17", name: "Topic 1.7 Quiz: Comparison, c. 1200 to c. 1450", group: "Unit 1: The Global Tapestry",
      items: [
        // ===== Set 1: Edward I's summons to Parliament, 1295 (Europe) =====
        { id: "t17-m01", skill: "u1", type: "mcq", set: "t17-s1", topic: "1.7", reasoning: "Contextualization",
          question: "Which of the following best describes the historical context in which Edward I issued the summonses in the excerpt?",
          choices: [
            "Kings in western Europe needed money and soldiers for their wars, and they had to win the support of nobles, clergy, and towns to raise them.",
            "The Black Death had killed so many workers that the king needed the help of Parliament to control wages.",
            "Mongol armies had invaded western Europe, and the king needed troops to defend England's allies.",
            "The Protestant Reformation had weakened the Catholic Church, so the king turned to Parliament for support instead.",
          ],
          why: [
            "Correct. Edward I was at war with France and called nobles, clergy, knights, and townsmen to Parliament because he needed their consent and their money to fight.",
            "The Black Death reached England in 1348, more than fifty years after these summonses.",
            "Mongol armies reached Poland and Hungary in 1241 but never invaded western Europe. The danger named in the summons came from France.",
            "The Protestant Reformation began in 1517, more than two centuries later.",
          ],
          answer: 0 },
        { id: "t17-m02", skill: "u1", type: "mcq", set: "t17-s1", topic: "1.7", reasoning: "Comparison",
          question: "The method of governing shown in the excerpt differed most from the way the Song and Ming emperors governed China in that the Chinese emperors",
          choices: [
            "relied on officials chosen through civil service examinations rather than on assemblies of nobles and elected townsmen",
            "had to win the approval of hereditary nobles before they could collect any tax",
            "shared power with a pope who claimed authority over all Christian rulers",
            "governed through regional warlords who served them in return for grants of land",
          ],
          why: [
            "Correct. Song and Ming emperors ruled through a bureaucracy of scholar-officials who passed exams on Confucian texts, while Edward I called an assembly of nobles, clergy, and elected representatives to approve his plans.",
            "Chinese emperors did not need the consent of an assembly of nobles to tax. Needing the approval of the governed is closer to the English pattern in the excerpt.",
            "The pope's claims to authority applied to Catholic Europe, not to China.",
            "Rule through warriors rewarded with land describes Japan and western Europe, not the centralized bureaucracy of Song and Ming China.",
          ],
          answer: 0 },
        { id: "t17-m03", skill: "u1", type: "mcq", set: "t17-s1", topic: "1.7", reasoning: "Sourcing and situation",
          question: "Edward I most likely began his summons to the archbishop with the principle that \"what affects all, by all should be approved\" in order to",
          choices: [
            "persuade the clergy to accept a share of the cost of defending the kingdom against France",
            "announce that the Church would no longer pay any taxes to the crown",
            "show that the pope had approved the coming war with France",
            "argue that peasants should vote for the members of Parliament",
          ],
          why: [
            "Correct. The king argued that a danger shared by all should be met by means provided by all, which prepared the clergy to help pay for the war.",
            "The king's purpose was the opposite: he wanted the clergy to contribute, not to stop paying.",
            "The excerpt says nothing about the pope, and the king rests his request on a shared danger, not on Church approval.",
            "The summons calls for knights, citizens, and burgesses to be elected. It does not give peasants a vote.",
          ],
          answer: 0 },

        // ===== Set 2: practice passage, rulers and their officials (China, Mamluks, Delhi) =====
        { id: "t17-m04", skill: "u1", type: "mcq", set: "t17-s2", topic: "1.7", reasoning: "Comparison",
          question: "Which of the following comparisons is best supported by the passage?",
          choices: [
            "Rulers in China and in the Mamluk Sultanate both tried to build loyalty by using officials who owed their rank to the ruler rather than to their families.",
            "Rulers in China and in the Mamluk Sultanate both chose officials mainly through examinations on religious texts.",
            "The Mamluk Sultanate and the Delhi Sultanate were both founded by Mongol conquerors.",
            "Chinese emperors, like Mamluk sultans, relied mainly on enslaved soldiers to run the government.",
          ],
          why: [
            "Correct. The passage says exam-chosen officials in China and freed military slaves in Egypt and Syria both owed their positions to the ruler, which rulers hoped would keep them loyal.",
            "Only China used examinations. Mamluks were trained as soldiers after being bought as boys.",
            "Both sultanates were founded by Turkic soldiers, not Mongols, and the Mamluks were famous for defeating the Mongols at Ain Jalut in 1260.",
            "Chinese emperors relied on scholar-officials chosen by exams, not on enslaved soldiers.",
          ],
          answer: 0 },
        { id: "t17-m05", skill: "u1", type: "mcq", set: "t17-s2", topic: "1.7", reasoning: "Claims and evidence in sources",
          question: "Which of the following pieces of evidence would most directly challenge the passage's claim that these methods helped rulers keep their officials loyal?",
          choices: [
            "Mamluk commanders often plotted against sultans and seized the throne for themselves.",
            "The Ming dynasty restored the civil service examinations after the end of Mongol rule.",
            "Mamluk armies defeated a Mongol army at Ain Jalut in 1260.",
            "Chinese scholar-officials wrote commentaries on the Confucian classics.",
          ],
          why: [
            "Correct. If the soldiers a sultan relied on often overthrew him, then owing their careers to the ruler did not make them reliably loyal.",
            "Restoring the exams shows that Ming rulers valued the system, which supports the passage rather than challenging it.",
            "The victory shows the military strength of the Mamluks, not whether they were loyal to their sultans.",
            "Scholarly writing by officials says nothing about whether they stayed loyal to the emperor.",
          ],
          answer: 0 },
        { id: "t17-m06", skill: "u1", type: "mcq", set: "t17-s2", topic: "1.7", reasoning: "Comparison",
          question: "The methods described in the passage differed most from the way the Mexica (Aztec) ruled their empire in the fifteenth century, because Mexica rulers",
          choices: [
            "usually left conquered city-states under their own local rulers as long as they sent tribute",
            "chose officials through written examinations on sacred texts",
            "bought enslaved boys from distant lands and trained them to lead armies",
            "were a Muslim minority ruling a population that followed other faiths",
          ],
          why: [
            "Correct. Instead of building a corps of officials who depended on the ruler, the Mexica mostly let local rulers keep power and collected tribute from them.",
            "Examinations on sacred texts describe the Chinese system, not the Mexica one.",
            "Training enslaved boys as soldiers describes the Mamluk and Delhi sultanates, not the Mexica.",
            "The Mexica were not Muslim. Islam did not reach the Americas in this period.",
          ],
          answer: 0 },

        // ===== Set 3: data table, the size of states =====
        { id: "t17-m07", skill: "u1", type: "mcq", set: "t17-s3", topic: "1.7", reasoning: "Comparison",
          question: "The difference in size between the Yuan dynasty and the Ming dynasty shown in the table is best explained by which of the following?",
          choices: [
            "The Yuan ruled Mongolia and other lands beyond China as part of the Mongol world, while the Ming, after driving the Mongols out of China in 1368, did not hold the Mongol homeland.",
            "Ming emperors spent their wealth on the voyages of Zheng He and gave up all efforts to defend their borders.",
            "The Jurchen Jin dynasty took most of northern China away from the Ming.",
            "The Black Death killed most of China's people and left the Ming unable to govern the provinces.",
          ],
          why: [
            "Correct. As a Mongol state, the Yuan held the steppe lands of Mongolia as well as China. The Ming ruled China itself and never kept lasting control of Mongolia.",
            "The Ming did pay for Zheng He's voyages (1405 to 1433), but they also kept large armies on the northern frontier and sent campaigns into Mongolia.",
            "The Jin dynasty ended in 1234, more than a century before the Ming began.",
            "Disease and famine hurt China in the fourteenth century, but the Ming governed all of China's provinces.",
          ],
          answer: 0 },
        { id: "t17-m08", skill: "u1", type: "mcq", set: "t17-s3", topic: "1.7", reasoning: "Comparison",
          question: "Based on the table and your knowledge of the period, which of the following best compares the Mali Empire and the Delhi Sultanate?",
          choices: [
            "Both had Muslim rulers who governed many subjects who were not Muslim, though the Delhi Sultanate covered about three times as much land.",
            "Both grew rich mainly by taxing the gold and salt trade across the Sahara.",
            "Both were founded by Mongol conquerors after the breakup of the Mongol Empire.",
            "Both covered more land than the Ming dynasty at its largest.",
          ],
          why: [
            "Correct. Mali's mansas were Muslim while most of their rural subjects kept local religions, and Delhi's sultans ruled a mostly Hindu population. The table shows 3.2 million square kilometers for Delhi and 1.1 for Mali.",
            "Taxing trans-Saharan trade describes Mali, not the Delhi Sultanate, which drew its wealth mainly from land taxes in northern India.",
            "Mali was founded by Sundiata, and the Delhi Sultanate by Turkic commanders, not by Mongols.",
            "The table shows the Ming at 6.5 million square kilometers, far larger than either Mali or Delhi.",
          ],
          answer: 0 },

        // ===== SAQ: practice passage, ruling diverse subjects (Delhi Sultanate and Inca) =====
        { id: "t17-q1a", skill: "u1", type: "fr", set: "t17-s4", part: "SAQ 1", sub: "a", topic: "1.7",
          lead: "Use the passage below to answer all parts of the question that follows.",
          prompt: "Identify ONE similarity between how the Delhi Sultanate and the Inca state ruled their subjects that the passage describes.",
          earns: "The response names one feature the passage says both states shared: ruling peoples of a different language or faith, mixing force with accommodation, or leaving many local leaders in power.",
          yes: [
            "Both states left many local leaders in power because they did not have enough officials to govern every village.",
            "Both states ruled many people who did not share the rulers' language or religion.",
            "Both states used a mix of force and accommodation to keep control of the peoples they conquered.",
          ],
          no: [
            "\"Both spread Quechua as a common language.\" The passage says only the Inca did this.",
            "\"Both were Muslim states.\" Only the Delhi Sultanate had Muslim rulers.",
            "\"Both were big.\" This is too vague and is not a similarity in how they ruled.",
          ],
          example: "Both the Delhi Sultanate and the Inca state left many local leaders in power. The passage explains that neither had enough officials to govern every village directly, so they relied on local leaders to keep order and collect revenue.",
          notExample: "The Delhi Sultanate was in India and the Inca were in South America." },
        { id: "t17-q1b", skill: "u1", type: "fr", set: "t17-s4", part: "SAQ 1", sub: "b", topic: "1.7",
          lead: "Use the passage below to answer all parts of the question that follows.",
          prompt: "Describe ONE piece of historical evidence, not mentioned in the passage, from a state other than the Delhi Sultanate or the Inca state, that supports the argument that rulers in the period c. 1200 to c. 1450 used accommodation to rule diverse subjects.",
          earns: "The response describes a specific state in the period, other than Delhi or the Inca, that tolerated local customs, faiths, or leaders, or used people from different groups in its government.",
          yes: [
            "The Mexica (Aztec) allowed conquered city-states to keep their own rulers and gods as long as they paid tribute.",
            "Mongol rulers of the Yuan dynasty in China employed Muslim and Central Asian officials and allowed Buddhists, Daoists, Muslims, and Christians to practice their faiths.",
            "The rulers of Mali practiced Islam but kept many older royal customs, such as the role of griots at court, which helped them keep the loyalty of subjects who followed local religions.",
          ],
          no: [
            "\"The Delhi sultans let Hindus keep their religion.\" This is already in the passage and comes from a state the prompt excludes.",
            "\"The Spanish forced conversions in the Americas.\" This is after 1450 and shows force, not accommodation.",
            "\"Empires were tolerant.\" This names no state and gives no evidence.",
          ],
          example: "In Yuan China, the Mongol rulers were a small group governing millions of Chinese subjects. Khubilai Khan employed Muslim, Central Asian, and Chinese officials and allowed Buddhists, Daoists, Muslims, and Christians to practice their religions, which supports the argument that rulers accommodated diverse subjects.",
          notExample: "Rulers were nice to the people they conquered so that they would not rebel." },
        { id: "t17-q1c", skill: "u1", type: "fr", set: "t17-s4", part: "SAQ 1", sub: "c", topic: "1.7",
          lead: "Use the passage below to answer all parts of the question that follows.",
          prompt: "Explain ONE way the methods the Inca used to govern their empire differed from the methods the rulers of Song or Ming China used to govern theirs.",
          earns: "The response names a specific method of the Inca and a contrasting method of Song or Ming China and explains how the two differed.",
          yes: [
            "Chinese emperors governed through scholar-officials chosen by exams written in Chinese characters, while the Inca had no writing system and kept records on knotted cords called quipu.",
            "Song and Ming officials were trained in the Confucian classics, which gave them a shared set of ideas about government, while the Inca relied on local leaders called kurakas and the worship of the sun god to bind the empire together.",
            "The Inca drew wealth mainly from the labor of subject communities through the mit'a, while the Ming relied heavily on land taxes, paid mostly in grain, collected by trained officials.",
          ],
          no: [
            "\"The Inca were in the Andes and China was in Asia.\" This is a difference in location, not in methods of government.",
            "\"Both used a road system.\" This is a similarity, not a difference.",
            "\"The Inca used civil service exams.\" This is false. Civil service exams were a Chinese method.",
          ],
          example: "The Song and Ming emperors governed through scholar-officials who passed civil service examinations on Confucian texts written in Chinese characters. The Inca had no writing system, so they could not use written exams. Instead they relied on local leaders called kurakas and kept records of people and goods on knotted cords called quipu.",
          notExample: "The Inca and the Chinese had different governments because they were different." },
      ] },
  ],
};

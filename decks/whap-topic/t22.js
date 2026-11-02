// Topic 2.2 Quiz: The Mongol Empire and the Making of the Modern World
// Sources: every stimulus this quiz uses, keyed by id.
export const sets = {
  "t22-s1": {
    id: "t22-s1", name: "A papal envoy at the Mongol court", intro: "Use the source below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "In the great square was the duke Jeroslav of Susdal in Ruscia, and several princes of the Kitayans and Solanges, also two sons of the King of Georgia, a soldan, the ambassador of the Calif of Baldach, and more than ten other soldans of the Saracens, I believe, and as we were told by the procurators. For there were more than four thousand envoys, as well those bringing tribute as those offering presents, soldans and other chiefs who had come to present themselves in person, those who had been sent by their (rulers), and those who were governors of countries. All these were put together outside the paling, and drink was given to them at the same time; as for ourselves and the duke Jeroslav, whenever we were outside with them they always gave us a higher place." },
        { cite: "John of Plano Carpini (Giovanni da Pian del Carpine), a Franciscan friar sent by Pope Innocent IV as an envoy to the Mongols, account of his journey of 1245 to 1247, translated by William Woodville Rockhill in The Journey of William of Rubruck to the Eastern Parts of the World, 1253-55, with Two Accounts of the Earlier Journey of John of Pian de Carpine (London: Hakluyt Society, 1900), pp. 20 to 21, as transcribed by Silk Road Seattle, University of Washington. The scene is the great assembly of Mongol chiefs held near Karakorum, the Mongol capital, in the summer of 1246. Jeroslav of Susdal in Ruscia is Grand Prince Yaroslav of Vladimir-Suzdal in Russia. The Kitayans are people of northern China, and the Solanges are usually identified as Koreans. The Calif of Baldach is the Abbasid caliph of Baghdad. Soldans are sultans, Saracens are Muslims, and the paling is a fence.", url: "https://depts.washington.edu/silkroad/texts/carpini.html", kind: "primary" },
      ] },
    ],
  },
  "t22-s2": {
    id: "t22-s2", name: "The Mongols and Eurasian exchange", intro: "Use the passage below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "Many historians argue that the Mongol Empire, for all the destruction of its conquests, did much to connect the peoples of Afro-Eurasia. By the 1260s, Mongol rulers controlled lands from China to Persia and Russia. They protected the overland routes, set up relay stations where official messengers changed horses, and issued metal tablets of authority, called paizas, that let approved travelers pass safely. Mongol rulers also moved people. They sent artisans, physicians, astronomers, and scholars from one end of their empire to the other, and they employed officials from many backgrounds, including Persians, Uyghurs, and Chinese. The Mongols themselves adopted the Uyghur script to write their own language. Through these networks, Chinese gunpowder weapons and printing became better known in Southwest Asia, and Persian and Arab astronomy and medicine reached China. The same networks later helped carry the plague across Eurasia in the fourteenth century." },
        { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" },
      ] },
    ],
  },
  "t22-s3": {
    id: "t22-s3", name: "A letter from Austria about the Mongol attack", intro: "Use the source below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "This present summer, that nation which is called Tartars, leaving Hungary, which they had surprised by treason, laid siege, with many thousand soldiers, to the town of Newstadt, in which I then dwelt, in which there were not above fifty men at arms, and twenty cross-bow-men, left in garrison." },
        { p: "... This man [an Englishman taken prisoner from the Tartar army] had been sent twice as a messenger and interpreter from the most tyrannical king of the Tartars to the king of Hungary, menacing and fortelling those mischiefs which afterwards happened, unless he would submit himself and his kingdom to the yoke of the Tartars. ... The Tartars got notice of this man by means of their spies, and drew him by force among them; and, having been admonished by an oracle or vision to extend their dominion over the whole earth, they allured him by many offers of reward, to serve them as an interpreter." },
        { cite: "Yvo (Ivo) of Narbonne, a cleric living in Austria, letter to the archbishop of Bordeaux about the Mongol invasion of central Europe in 1241 and 1242, as recorded by the English chronicler Matthew Paris, in Robert Kerr, A General History and Collection of Voyages and Travels, vol. I (Edinburgh, dedication dated 1811), chapter VI, \"Travels of an Englishman into Tartary, and thence into Poland, Hungary, and Germany, in 1243,\" in Kerr's English version, for which he cites Hakluyt, as transcribed on Frances W. Pritchett's website (Columbia University) from Project Gutenberg eBook 10600. The Tartars are the Mongols. Newstadt is Wiener Neustadt, south of Vienna. Mongol armies led by Batu invaded Poland and Hungary in 1241 and withdrew in 1242.", url: "https://franpritchett.com/00generallinks/kerr/vol01chap06.html", kind: "primary" },
      ] },
    ],
  },
  "t22-s4": {
    id: "t22-s4", name: "The Mongol conquests in Southwest Asia", intro: "Use the passage below to answer all parts of the question that follows.",
    sources: [
      { title: "Source", blocks: [
        { p: "Many historians argue that the Mongol conquests of the thirteenth century did lasting damage to Southwest Asia. Mongol armies destroyed cities that resisted them, killed many of their inhabitants, and carried skilled workers away by force. In Persia and Iraq, the fighting wrecked the canals and underground water channels that farmers depended on, and some farmland turned into desert or into pasture for the herds of nomads. The sack of Baghdad in 1258 ended the Abbasid Caliphate and scattered the scholars and books of one of the great centers of Islamic learning. In this view, the region needed generations to recover, and its losses outweighed the benefits of the trade that Mongol rule later protected." },
        { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" },
      ] },
    ],
  },
};

const LEAD = "Use the passage below to answer all parts of the question that follows.";

export default {
  forms: [
    { id: "t22", name: "Topic 2.2 Quiz: The Mongol Empire", group: "Unit 2: Networks of Exchange",
      items: [
        { id: "t22-m01", skill: "u2", type: "mcq", set: "t22-s1", topic: "2.2", reasoning: "Claims and evidence in sources",
          question: "The excerpt best illustrates which of the following features of the Mongol Empire in the mid-thirteenth century?",
          choices: [
            "Rulers of many conquered or threatened states sent envoys and tribute to the Mongol court to win the Great Khan's favor.",
            "The Great Khan's authority depended on approval from the Abbasid caliph and other Muslim religious leaders.",
            "Mongol rulers required subject peoples to convert to Buddhism before their envoys could appear at court.",
            "The Mongol Empire had already split into separate khanates that no longer recognized a single Great Khan.",
          ],
          why: [
            "Correct. Carpini counts more than four thousand envoys, some \"bringing tribute\" and some \"offering presents,\" from Russia, Georgia, northern China, and Muslim states, all waiting on the new Great Khan.",
            "The caliph's ambassador came to the Mongol assembly as one envoy among thousands. The Mongols chose their own Great Khan in an assembly of their chiefs.",
            "Christian and Muslim envoys attend in the excerpt, and the Mongols were known for allowing many religions. They did not require conversion.",
            "In 1246 the chiefs were gathered to choose one Great Khan. The empire broke into separate khanates after 1260.",
          ],
          answer: 0 },
        { id: "t22-m02", skill: "u2", type: "mcq", set: "t22-s1", topic: "2.2", reasoning: "Contextualization",
          question: "Which of the following best describes the historical context of the assembly described in the excerpt?",
          choices: [
            "After the death of the Great Khan Ögedei, Mongol chiefs gathered to choose a new Great Khan from among the descendants of Chinggis Khan.",
            "After a long civil war, Mongol princes gathered to divide the empire into four independent khanates.",
            "European and Mongol envoys gathered to sign a treaty that ended Mongol attacks on Europe and opened trade.",
            "The Great Khan called the assembly to announce that the Mongols would adopt Christianity as their religion.",
          ],
          why: [
            "Correct. Ögedei died in 1241, and by Mongol custom the chiefs met in a great assembly, the kurultai, to choose his successor. In 1246 they chose his son Güyük, with envoys from across Eurasia looking on.",
            "The empire split into separate khanates only after the disputed succession of 1260. In 1246 the chiefs were choosing one ruler for the whole empire.",
            "No treaty was signed. The envoys came to bring tribute and presents to the new khan, and Güyük's reply to the pope demanded that the pope submit.",
            "The Mongols allowed many religions but did not adopt Christianity. Envoys from Muslim and Christian rulers alike attended the assembly.",
          ],
          answer: 0 },
        { id: "t22-m03", skill: "u2", type: "mcq", set: "t22-s1", topic: "2.2", reasoning: "Comparison",
          question: "The gathering of envoys described in the excerpt is most similar to which of the following practices in the period c. 1200 to c. 1450?",
          choices: [
            "Rulers from Southeast Asia and the Indian Ocean sending tribute missions to the Ming emperor of China",
            "Cardinals of the Catholic Church meeting in Rome to elect a new pope",
            "Merchants of the Hanseatic League meeting to set rules for trade in the Baltic Sea",
            "English nobles meeting in Parliament to approve the king's taxes",
          ],
          why: [
            "Correct. In both cases, rulers of many states sent envoys with tribute and gifts to a powerful emperor to recognize his authority and keep good relations with him.",
            "Cardinals electing a pope are members of one church choosing its leader, not foreign rulers bringing tribute to a stronger power.",
            "Hanseatic meetings brought together merchant towns as partners. No one brought tribute to an overlord.",
            "Parliament was a meeting of a king's own subjects, not of envoys from foreign states.",
          ],
          answer: 0 },
        { id: "t22-m04", skill: "u2", type: "mcq", set: "t22-s2", topic: "2.2", reasoning: "Claims and evidence in sources",
          question: "Which of the following best describes the main argument of the passage?",
          choices: [
            "Mongol rule increased contact and exchange among distant parts of Afro-Eurasia despite the violence of the conquests.",
            "Mongol conquests destroyed so many cities that long-distance trade across Eurasia stopped for a century.",
            "The Mongols governed their empire by replacing all local officials with Mongol warriors.",
            "Mongol rule cut China off from the rest of Eurasia by closing the overland routes.",
          ],
          why: [
            "Correct. The passage grants the destruction of the conquests but argues that Mongol protection of routes, movement of experts, and use of officials from many peoples connected Afro-Eurasia.",
            "The passage mentions destruction, but it argues that the Mongols protected the routes and encouraged exchange, not that trade stopped.",
            "The passage says the Mongols employed Persians, Uyghurs, Chinese, and others, which is the opposite of using only Mongols.",
            "The passage says the Mongols protected the overland routes and that knowledge moved between China and Southwest Asia.",
          ],
          answer: 0 },
        { id: "t22-m05", skill: "u2", type: "mcq", set: "t22-s2", topic: "2.2", reasoning: "Claims and evidence in sources",
          question: "Which of the following pieces of evidence would best support the passage's claim about the movement of knowledge under Mongol rule?",
          choices: [
            "A Persian astronomer brought astronomical instruments and methods to the court of Khubilai Khan in China.",
            "The Song dynasty used civil service examinations based on the Confucian classics to choose officials.",
            "Mansa Musa's pilgrimage to Mecca in 1324 spread news of Mali's wealth in gold.",
            "The Ming dynasty sent Zheng He's fleets into the Indian Ocean after the fall of the Yuan.",
          ],
          why: [
            "Correct. Khubilai Khan's court received Persian astronomers and their instruments, an example of knowledge from Southwest Asia reaching China through Mongol networks.",
            "The Song examination system is a Chinese practice from before Mongol rule. It does not show knowledge moving across the Mongol Empire.",
            "Mansa Musa's journey connected West Africa with Egypt and Arabia through trans-Saharan routes and Islam, not through the Mongol Empire.",
            "Zheng He's voyages came after the Mongols lost China in 1368, so they cannot support a claim about Mongol rule.",
          ],
          answer: 0 },
        { id: "t22-m06", skill: "u2", type: "mcq", set: "t22-s2", topic: "2.2", reasoning: "Comparison",
          question: "Which of the following describes a difference between Mongol rule in China under the Yuan dynasty and the Song dynasty that came before it?",
          choices: [
            "The Yuan rulers were steppe nomads who relied on officials from many conquered peoples, while the Song relied on Chinese scholar-officials chosen through civil service examinations.",
            "The Yuan rulers chose all officials through Confucian examinations, while the Song gave offices only to hereditary nobles.",
            "The Yuan rulers banned foreign merchants from China, while the Song welcomed them.",
            "The Yuan rulers controlled a smaller territory than the Song did at its height.",
          ],
          why: [
            "Correct. The Yuan employed Mongols, Central Asians, Persians, and others in high posts and held no examinations until 1315, while the Song filled its government with scholar-officials who passed the examinations.",
            "This reverses the two dynasties. The Song was known for its examination system, and the Yuan stopped the examinations for decades.",
            "Yuan China welcomed foreign merchants, and travelers from Persia, Arabia, and Europe reached its ports and capital.",
            "The Yuan ruled all of China as well as Mongolia, a far larger area than the Song ever held.",
          ],
          answer: 0 },
        { id: "t22-m07", skill: "u2", type: "mcq", set: "t22-s3", topic: "2.2", reasoning: "Sourcing and situation",
          question: "The author's description of the Mongol ruler as \"most tyrannical\" and of the Mongol capture of Hungary as done \"by treason\" most likely reflects his point of view as",
          choices: [
            "a Christian cleric in central Europe writing soon after an invading army had attacked the town where he lived",
            "a Mongol official explaining to his own people why the campaign against Hungary was justified",
            "a Muslim scholar in Egypt who welcomed the defeat of Christian kingdoms in Europe",
            "a Venetian merchant who hoped that Mongol rule would open new trade routes to China",
          ],
          why: [
            "Correct. The author says the Mongols besieged Newstadt, \"in which I then dwelt,\" and he wrote to a Christian archbishop, so he saw the Mongols as cruel and treacherous enemies.",
            "The author lived in the besieged town and calls the Mongol ruler \"most tyrannical,\" which no Mongol official would write.",
            "The letter was written by a cleric in Austria to an archbishop in France, not by a Muslim scholar.",
            "The author writes about a siege and threats of conquest, not trade, and he lived in Austria, not Venice.",
          ],
          answer: 0 },
        { id: "t22-m08", skill: "u2", type: "mcq", set: "t22-s3", topic: "2.2", reasoning: "Claims and evidence in sources",
          question: "The account of the Englishman in the second paragraph best illustrates which of the following Mongol practices?",
          choices: [
            "Recruiting skilled foreigners, such as interpreters, and using envoys to demand that rulers submit before the Mongols attacked",
            "Refusing all diplomatic contact with Christian rulers in Europe",
            "Requiring the peoples they conquered to give up their own languages and speak only Mongolian",
            "Sending envoys only to rulers who had already converted to the religion of the Mongols",
          ],
          why: [
            "Correct. The Mongols drew the Englishman into their service as an interpreter because he knew many languages, and they sent him to warn the king of Hungary to submit to \"the yoke of the Tartars.\"",
            "The Englishman was sent twice to the Christian king of Hungary, so the Mongols did make diplomatic contact.",
            "The Mongols needed interpreters precisely because they dealt with peoples who kept their own languages. They did not force anyone to speak only Mongolian.",
            "The king of Hungary was a Christian, and the Mongols sent envoys to him anyway.",
          ],
          answer: 0 },
        { id: "t22-q1a", skill: "u2", type: "fr", set: "t22-s4", part: "SAQ 1", sub: "a", topic: "2.2", lead: LEAD,
          prompt: "Identify ONE piece of historical evidence that would support the argument in the passage.",
          earns: "The response names a specific, accurate example of damage the Mongol conquests did in Southwest Asia or Central Asia in the thirteenth century.",
          yes: [
            "Mongol armies destroyed cities of the Khwarazmian Empire, such as Nishapur, Merv, and Urgench, and killed much of their populations around 1220 and 1221.",
            "When Hulagu's army took Baghdad in 1258, it killed the last Abbasid caliph and destroyed libraries, including the House of Wisdom.",
            "Muslim writers of the time, such as the historian Ibn al-Athir, described the Mongol invasion as one of the worst disasters ever to strike Islam.",
          ],
          no: [
            "\"The Mongols protected trade on the Silk Roads.\" This challenges the argument instead of supporting it.",
            "\"The Mongols conquered China.\" This is accurate but does not show damage in Southwest Asia.",
          ],
          example: "The Mongol destruction of Nishapur in Persia in 1221, when the Mongols killed most of the city's people after it resisted, supports the argument.",
          notExample: "The Mongols had a large army." },
        { id: "t22-q1b", skill: "u2", type: "fr", set: "t22-s4", part: "SAQ 1", sub: "b", topic: "2.2", lead: LEAD,
          prompt: "Explain ONE piece of historical evidence that would challenge the argument in the passage.",
          earns: "The response gives an accurate example of a benefit or recovery under Mongol rule in Southwest Asia and explains how it weakens the claim that the losses outweighed the benefits.",
          yes: [
            "The Ilkhanate, the Mongol state in Persia, built an observatory at Maragha where Muslim astronomers worked with scholars from China, which shows that learning continued and even grew under Mongol rule.",
            "Under the Ilkhans, Tabriz became a busy center of trade linking Persia with China and the Mediterranean, which shows that Mongol rule brought economic benefits to the region.",
            "The Ilkhan Ghazan, who converted to Islam in 1295, lowered taxes and encouraged farming, which shows that Mongol rulers worked to rebuild the region within a few decades.",
          ],
          no: [
            "\"The Mongols were not that bad.\" This gives no evidence.",
            "\"The Mongols built the Great Wall.\" This is inaccurate and does not concern Southwest Asia.",
          ],
          example: "The Ilkhanate made Tabriz a major market where merchants from Italy, Persia, and China met. This challenges the passage, because it shows that within a few decades of the conquest Mongol rule had helped make Persia a center of long-distance trade again.",
          notExample: "Some people liked the Mongols." },
        { id: "t22-q1c", skill: "u2", type: "fr", set: "t22-s4", part: "SAQ 1", sub: "c", topic: "2.2", lead: LEAD,
          prompt: "Explain ONE way the Mongol rulers of Persia changed their methods of rule in the period c. 1250 to c. 1350.",
          earns: "The response describes an accurate change in how the Ilkhans ruled and explains why it happened or what it did.",
          yes: [
            "Over time the Ilkhans relied more on Persian officials, such as the minister Rashid al-Din, because those officials knew how to collect taxes and run a settled, farming society.",
            "Ghazan converted to Islam in 1295, and later Ilkhans ruled as Muslims, which helped them win the support of their mostly Muslim subjects.",
            "Ghazan's reforms replaced irregular, heavy demands with more regular taxes, because Mongol rulers saw that ruined farmers could not pay.",
          ],
          no: [
            "\"The Mongols stopped fighting.\" This is vague and does not describe a change in how they ruled.",
            "\"The Ilkhans converted to Christianity.\" This is inaccurate.",
          ],
          example: "The Mongol rulers of Persia began as foreign conquerors, but over time they adopted the religion and methods of the people they ruled. Ghazan converted to Islam in 1295 and relied on Persian ministers such as Rashid al-Din, which helped the Mongols win the loyalty of their Muslim subjects and collect taxes more steadily.",
          notExample: "The Mongols ruled Persia." },
      ] },
  ],
};

// Topic 2.2 Quiz: The Mongol Empire and the Making of the Modern World
// Sources: every stimulus this quiz uses, keyed by id.
import { maps } from "../whap/maps.js";

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
    id: "t22-s2", name: "Mongol conquests and defeats", intro: "Use the map below to answer the questions that follow.", label: "Map",
    sources: [
      { title: "Map", blocks: [
        { svg: maps["u2-mongol-limits"], caption: "Mongol conquests and defeats, 1215 to 1293" },
        { cite: "Map drawn for this review from Natural Earth land outlines (public domain). Places, dates, and routes checked against World History Encyclopedia, \"Mongol Empire,\" and Encyclopaedia Britannica, \"Battle of Ayn Jalut\".", kind: "map" },
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
        { id: "t22-m01", skill: "u2", type: "mcq", difficulty: "easy", set: "t22-s1", topic: "2.2", reasoning: "Claims and evidence in sources",
          question: "The excerpt best illustrates which of the following features of the Mongol Empire in the mid-thirteenth century?",
          choices: [
            "Rulers of conquered or threatened states sent envoys and tribute to win the Great Khan's favor.",
            "The Great Khan's authority rested on approval from the Abbasid caliph and Muslim religious leaders.",
            "Mongol rulers required subject peoples to convert to Buddhism before their envoys could appear.",
            "The empire had already split into separate khanates that no longer recognized one Great Khan.",
          ],
          why: [
            "Correct. Carpini counts more than four thousand envoys, some \"bringing tribute\" and some \"offering presents,\" from Russia, Georgia, northern China, and Muslim states, all waiting on the new Great Khan.",
            "The caliph's ambassador came to the Mongol assembly as one envoy among thousands. The Mongols chose their own Great Khan in an assembly of their chiefs.",
            "Christian and Muslim envoys attend in the excerpt, and the Mongols were known for allowing many religions. They did not require conversion.",
            "In 1246 the chiefs were gathered to choose one Great Khan. The empire broke into separate khanates after 1260.",
          ],
          answer: 0 },
        { id: "t22-m02", skill: "u2", type: "mcq", difficulty: "moderate", set: "t22-s1", topic: "2.2", reasoning: "Contextualization",
          question: "Which of the following best describes the historical context of the assembly described in the excerpt?",
          choices: [
            "After Ögedei's death, Mongol chiefs met to choose a new Great Khan from Chinggis Khan's descendants.",
            "After a long civil war, Mongol princes gathered to divide the empire into four independent khanates.",
            "Envoys from Europe and Asia gathered to sign a treaty ending the Mongol attacks on Christian lands.",
            "The Great Khan called the assembly to announce that the Mongols would adopt Nestorian Christianity.",
          ],
          why: [
            "Correct. Ögedei died in 1241, and by Mongol custom the chiefs met in a great assembly, the kurultai, to choose his successor. In 1246 they chose his son Güyük, with envoys from across Eurasia looking on.",
            "The empire split into separate khanates only after the disputed succession of 1260. In 1246 the chiefs were choosing one ruler for the whole empire.",
            "No treaty was signed. The envoys came to bring tribute and presents to the new khan, and Güyük's reply to the pope demanded that the pope submit.",
            "The Mongols allowed many religions, including Nestorian Christianity, but did not adopt Christianity. Envoys from Muslim and Christian rulers alike attended the assembly.",
          ],
          answer: 0 },
        { id: "t22-m03", skill: "u2", type: "mcq", difficulty: "easy", set: "t22-s1", topic: "2.2", reasoning: "Comparison",
          question: "The gathering of envoys described in the excerpt is most similar to which of the following practices in the period c. 1200 to c. 1450?",
          choices: [
            "Rulers around the Indian Ocean sending tribute missions to the Ming emperor",
            "Cardinals from across Catholic Europe gathering in Rome to elect a new pope",
            "Merchants of the Hanseatic League meeting to set rules for trade in the Baltic Sea",
            "English nobles meeting in Parliament to approve the king's requests for new taxes",
          ],
          why: [
            "Correct. In both cases, rulers of many states sent envoys with tribute and gifts to a powerful emperor to recognize his authority and keep good relations with him.",
            "Cardinals electing a pope are members of one church choosing its leader, not foreign rulers bringing tribute to a stronger power.",
            "Hanseatic meetings brought together merchant towns as partners. No one brought tribute to an overlord.",
            "Parliament was a meeting of a king's own subjects, not of envoys from foreign states.",
          ],
          answer: 0 },
        { id: "t22-m04", skill: "u2", type: "mcq", difficulty: "moderate", set: "t22-s2", topic: "2.2", reasoning: "Claims and evidence in sources",
          question: "Which of the following conclusions about Mongol campaigns is best supported by the map?",
          choices: [
            "Most Mongol defeats on the map came after 1270, in campaigns against Japan and Southeast Asia.",
            "Mongol armies were turned back at the edge of Europe before they could win any battle there.",
            "The Mongols completed their conquest of China before they attacked the cities of Central Asia.",
            "Mongol armies suffered most of their defeats in campaigns against Southwest Asia and Europe.",
          ],
          why: [
            "Correct. Captures and victories stretch from Legnica and Kiev to Baghdad and Hangzhou, while four of the five defeats on the map (Hakata Bay twice, Bach Dang, and Java) came between 1274 and 1293 in East and Southeast Asia.",
            "The map marks Kiev, taken in 1240, and Legnica in Poland, a Mongol victory in 1241.",
            "The map dates Samarkand to 1220 but Hangzhou, the Song capital, to 1276, so the conquest of southern China came more than fifty years after the campaign in Central Asia.",
            "Only one defeat on the map, Ain Jalut in 1260, is in Southwest Asia, and none is in Europe.",
          ],
          answer: 0 },
        { id: "t22-m05", skill: "u2", type: "mcq", difficulty: "moderate", set: "t22-s2", topic: "2.2", reasoning: "Causation",
          question: "Which of the following best explains the Mongol defeats shown on the map at Hakata Bay, Bach Dang, and Java?",
          choices: [
            "Those campaigns crossed the sea or entered hot, wet lands where steppe cavalry lost its edge.",
            "The Black Death had already killed most of the soldiers in the Yuan armies sent overseas.",
            "The armies of Japan, Dai Viet, and Java fought with cannons bought from European merchants.",
            "The Yuan emperors ordered their generals to avoid battle so that sea trade would not be disrupted.",
          ],
          why: [
            "Correct. Each of these campaigns depended on fleets or on fighting in the tropics. A typhoon wrecked the fleet sent against Japan in 1281, Dai Viet's forces trapped a Yuan fleet on the Bach Dang River in 1288, and the 1293 expedition to Java withdrew by sea. Mounted archers from the steppe could not use their speed or graze their horses in these places.",
            "The Black Death spread in the 1340s, half a century after the last defeat on the map.",
            "European cannons did not reach East and Southeast Asia until the 1500s.",
            "The map shows that the Yuan launched invasions of Japan, Dai Viet, and Java, which is the opposite of avoiding battle.",
          ],
          answer: 0 },
        { id: "t22-m06", skill: "u2", type: "mcq", difficulty: "difficult", set: "t22-s2", topic: "2.2", reasoning: "Contextualization",
          question: "Every campaign on the map after 1260 was launched from China against East or Southeast Asia. Which of the following developments best explains this pattern?",
          choices: [
            "The empire split into khanates after 1260, and Khubilai, ruling China, pursued his own conquests.",
            "The Mamluk victory at Ain Jalut in 1260 ended Mongol rule in Persia and the rest of Southwest Asia.",
            "The western khans converted to Islam and gave up foreign wars so that trade could flourish.",
            "The Ming dynasty drove the Mongols out of China, so the Mongols turned to conquests overseas.",
          ],
          why: [
            "Correct. Mongke's death in 1259 set off a war among his brothers, and the empire divided into the Yuan, the Ilkhanate, the Chagatai Khanate, and the Golden Horde. Each khanate pursued its own aims, and the campaigns shown after 1260 were those of Khubilai, who ruled China as the Yuan dynasty.",
            "Ain Jalut stopped the Mongol advance toward Egypt, but the Mongol Ilkhanate went on ruling Persia and Iraq until the 1330s.",
            "The western khans did become Muslim, but only from the 1290s on, and they kept fighting: the Ilkhanate fought the Mamluks and the Golden Horde for decades. Their conversion does not explain why the later campaigns on the map came from China.",
            "The Ming drove the Mongols from China in 1368, long after the campaigns on the map.",
          ],
          answer: 0 },
        { id: "t22-m07", skill: "u2", type: "mcq", difficulty: "easy", set: "t22-s3", topic: "2.2", reasoning: "Sourcing and situation",
          question: "The author's description of the Mongol ruler as \"most tyrannical\" and of the Mongol capture of Hungary as done \"by treason\" most likely reflects his point of view as",
          choices: [
            "a Christian cleric in central Europe writing soon after invaders attacked his town",
            "a Mongol official explaining to his own people why the campaign against Hungary was justified",
            "a Mamluk scholar in Cairo who welcomed news of the Mongol defeat of Christian Hungary",
            "a Venetian merchant who hoped Mongol rule would open safer caravan routes to China",
          ],
          why: [
            "Correct. The author says the Mongols besieged Newstadt, \"in which I then dwelt,\" and he wrote to a Christian archbishop, so he saw the Mongols as cruel and treacherous enemies.",
            "The author lived in the besieged town and calls the Mongol ruler \"most tyrannical,\" which no Mongol official would write.",
            "The letter was written by a cleric in Austria to an archbishop in France, not by a Muslim scholar in Egypt.",
            "The author writes about a siege and threats of conquest, not trade, and he lived in Austria, not Venice.",
          ],
          answer: 0 },
        { id: "t22-m08", skill: "u2", type: "mcq", difficulty: "easy", set: "t22-s3", topic: "2.2", reasoning: "Claims and evidence in sources",
          question: "The account of the Englishman in the second paragraph best illustrates which of the following Mongol practices?",
          choices: [
            "Using foreign interpreters and envoys to demand submission before an attack",
            "Refusing diplomatic contact with Christian kings until their lands had been conquered",
            "Requiring the peoples they conquered to give up their own languages and speak only Mongolian",
            "Sending envoys only to rulers who had already converted to the religion of the Mongols",
          ],
          why: [
            "Correct. The Mongols drew the Englishman into their service as an interpreter because he knew many languages, and they sent him to warn the king of Hungary to submit to \"the yoke of the Tartars.\"",
            "The Englishman was sent twice to the Christian king of Hungary before the attack, so the Mongols did make diplomatic contact.",
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

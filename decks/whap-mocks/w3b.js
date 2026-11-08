// AP World History: Modern, Unit 3 Assessment B (form w3b), Unit 3: Land-Based Empires, c. 1450 to c. 1750, topics 3.1 to 3.4.
// Sources: every stimulus this form uses, keyed by id.
import { maps } from "../whap/maps.js";

const MAP = "Map drawn for this review from Natural Earth land outlines (public domain). Places, dates, and routes checked against ";
const map = (id, caption, refs) => [{ svg: maps[id], caption }, { cite: MAP + refs + ".", kind: "map" }];

export const sets = {
  "w3b-s1": {
    id: "w3b-s1", name: "Rycaut on the Sultan's Pages", intro: "Use the source below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "The Turk is not less careful in the choice of his Officers, and loves to be served by his own, such as to whom he hath given breeding, and education ... such as these he is served by, whom he can raise without envy, and destroy without danger." },
        { p: "The Youths then that are designed for the great Offices of the Empire, called by the Turks Ichoglans, must be such as are of Christian Parents, taken in War, or presented from remote parts; ... the Policy herein is very obvious, because the Sons of Christians will hate their Parents being educated with other Principles and Customs; or coming from distant places have contracted no acquaintance, so that starting from their Schools into Government, they will find no Relations, or Dependencies on their Interests then that of their great Master, to whom they are taught, and necessity compels them to be faithful." },
        { cite: "Paul Rycaut, English diplomat, secretary to the Earl of Winchilsea, English ambassador at Constantinople, The Present State of the Ottoman Empire (London: John Starkey and Henry Brome, 1668), Book I, chapter 5, \"The Education of young men in the Seraglio, out of which those who are to discharge the great Offices of the Empire are elected,\" as given in the EarlyPrint (Text Creation Partnership) text. Ichoglans: pages trained in the sultan's palace (the Seraglio). Then: than.", url: "https://distantreader.org/stacks/earlyprint/txt/A58003.txt", kind: "primary" },
      ] },
    ],
  },
  "w3b-s2": {
    id: "w3b-s2", name: "The Rise and Fall of Songhai", intro: "Use the passage below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "Songhai grew into one of the largest states in West African history in the late fifteenth and sixteenth centuries. Sunni Ali (ruled 1464 to 1492) used cavalry and a fleet of war canoes on the Niger River to seize the trading cities of Timbuktu and Jenne. Askia Muhammad, who took power in 1493, divided the empire into provinces under governors he appointed, kept a standing army, and relied on Muslim scholars from Timbuktu to serve as judges and advisers. Control of the trans-Saharan trade in gold and salt helped pay for this state. Yet most of Songhai's people were farmers and fishers who kept older religious practices, and its rulers did not force Islam on them. In 1591 an army sent by the sultan of Morocco and armed with firearms crossed the Sahara and defeated the Songhai at the Battle of Tondibi, and the empire broke apart." },
        { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" },
      ] },
    ],
  },
  "w3b-s3": {
    id: "w3b-s3", name: "Mughal Conquests in India", intro: "Use the map below to answer the questions that follow.", label: "Map",
    sources: [{ title: "Map", blocks: map("u3-mughal", "Mughal conquests in India, 1568 to 1687, with the year each place was taken", "Encyclopaedia Britannica, \"Mughal dynasty,\" New World Encyclopedia, \"Deccan sultanates,\" and Wikipedia's articles on Akbar, Aurangzeb, and Raigad Fort") }],
  },
  "w3b-s4": {
    id: "w3b-s4", name: "The Sack of Magdeburg, 1631", intro: "Use the source below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "... the imperial troops kept bringing on more and more forces - cavalry, too - to help them, and finally they got the Krockenthor open and let in the whole imperial army and the forces of the Catholic League, - Hungarians, Croats, Poles, Walloons, Italians, Spaniards, French, North and South Germans." },
        { p: "Thus it came about that the city and all its inhabitants fell into the hands of the enemy, whose violence and cruelty were due in part to their common hatred of the adherents of the Augsburg Confession, and in part to their being imbittered by the chain shot which had been fired at them and by the derision and insults that the Magdeburgers had heaped upon them from the ramparts. Then was there naught but beating and burning, plundering, torture, and murder. Most especially was every one of the enemy bent on securing much booty." },
        { cite: "Otto von Guericke, an official of the city of Magdeburg in Germany who survived its capture by imperial and Catholic League troops in May 1631 and later served as its burgomaster (mayor), account of the destruction of the city, translated in James Harvey Robinson, ed., Readings in European History, vol. 2 (Boston: Ginn, 1906), pages 211 to 212. Krockenthor: one of the city gates.", url: "https://history.hanover.edu/texts/magde.html", kind: "primary" },
      ] },
    ],
  },
  "w3b-s5": {
    id: "w3b-s5", name: "Serfdom and the Romanov State", intro: "Use the passage below to answer all parts of the question that follows.",
    sources: [
      { title: "Source", blocks: [
        { p: "After the Time of Troubles ended with the choice of Michael Romanov as tsar in 1613, Russia's rulers rebuilt the state through a bargain with the landholding nobility. The tsar needed nobles to serve as cavalry officers and officials, and the nobles needed peasants to work their estates. Yet peasants who fled to the southern and eastern frontiers left those estates empty. The Law Code of 1649 ended the time limit on recovering runaway peasants and bound peasant families to their lords' land for good. In this view, serfdom was the price the Romanov tsars paid for the loyalty of the nobles. The state gained a class of servants who fought its wars and ran its offices, and the nobles gained control over the people who worked their land. The result was a stronger central state built on the unfree labor of most of its people." },
        { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" },
      ] },
    ],
  },
};

export default {
  forms: [
    { id: "w3b", name: "Unit 3 Assessment B", group: "Unit 3: Land-Based Empires",
      items: [
        // ---------- Set 1: Rycaut on the sultan's pages ----------
        { id: "w3b-m01", skill: "u3", type: "mcq", set: "w3b-s1", topic: "3.2", reasoning: "Claims and evidence in sources", difficulty: "easy",
          question: "According to Rycaut, Ottoman rulers trained youths born to Christian parents for the great offices of the empire mainly because these youths",
          choices: [
            "had no family or local ties, so they depended on the sultan alone",
            "already spoke European languages, which made them useful as diplomats",
            "came from noble families that could bring wealth and soldiers to the sultan",
            "would return home and lead their families to convert to Islam",
          ],
          why: [
            "Rycaut says the youths are cut off from their parents or come from far away, so they \"find no Relations, or Dependencies\" except their \"great Master,\" and \"necessity compels them to be faithful.\"",
            "The passage says nothing about languages or diplomacy; it stresses loyalty, not skills the boys brought with them.",
            "This reverses the passage. The youths were captives or gifts with no family power behind them, which is exactly why the sultan wanted them.",
            "Rycaut says the youths learn to \"hate their Parents,\" not to convert them, and he describes them moving from palace schools into government, not back home.",
          ], answer: 0 },

        { id: "w3b-m02", skill: "u3", type: "mcq", set: "w3b-s1", topic: "3.2", reasoning: "Claims and evidence in sources", difficulty: "easy",
          question: "Rycaut's statement that the sultan is served by men \"whom he can raise without envy, and destroy without danger\" best supports which conclusion about Ottoman government?",
          choices: [
            "Officials owed their rank to the sultan, who could remove them without family opposition.",
            "The sultan shared power with an assembly of hereditary nobles who approved his ministers.",
            "High officials held their offices for life and passed them on to their sons.",
            "Religious scholars of the ulama chose the sultan's ministers in order to limit his power.",
          ],
          why: [
            "Because these officials had no noble kin, raising one did not anger a rival family, and removing or even executing one did not risk a revolt by his relatives. Grand viziers of slave origin could rise to the top and fall just as fast.",
            "The Ottoman sultan did not share power with an assembly of hereditary nobles; the passage describes officials with no family power at all.",
            "The phrase \"destroy without danger\" means the sultan could remove officials at will, the opposite of life tenure passed to sons.",
            "The passage says the sultan himself chooses and educates his officers; religious scholars are not mentioned.",
          ], answer: 0 },

        { id: "w3b-m03", skill: "u3", type: "mcq", set: "w3b-s1", topic: "3.4", reasoning: "Comparison", difficulty: "difficult",
          question: "The method of choosing high officials that Rycaut describes differed most from which of the following?",
          choices: [
            "The Qing practice of appointing scholar-officials who passed exams on the Confucian classics",
            "The Safavid practice of making converted Georgian and Circassian slaves into governors",
            "The rule of the Mamluk sultans of Egypt, who were raised from purchased slave boys",
            "The Ottoman janissary corps, whose soldiers were also raised from boys of Christian families",
          ],
          why: [
            "Qing officials were free subjects, most from gentry families, who won office by passing exams on the Confucian classics and kept their family ties. Rycaut's officials were slaves of the sultan, chosen because they had no families to serve.",
            "Shah Abbas I and later shahs used converted slaves (ghulams) in much the same way, so this is a similarity, not a difference.",
            "The Mamluks were also a slave elite trained to serve the ruler, so their system resembled the one Rycaut describes.",
            "The janissaries came from the same practice of taking Christian boys and training them for the sultan's service, so this is part of the same system, not a contrast.",
          ], answer: 0 },

        { id: "w3b-m04", skill: "u3", type: "mcq", set: "w3b-s1", topic: "3.2", reasoning: "Sourcing and situation", difficulty: "easy",
          question: "Rycaut's comment that \"the Policy herein is very obvious\" best reflects which purpose of his book?",
          choices: [
            "To explain to English readers how the Ottoman state was governed",
            "To persuade the sultan to free the Christian captives held in his palace",
            "To call on Christian rulers to unite in a crusade to retake Constantinople",
            "To describe his own training as a page in the sultan's palace",
          ],
          why: [
            "Rycaut, an English diplomat at Constantinople, wrote for readers at home and explains the reasoning (\"the Policy\") behind Ottoman practices, treating them as lessons in how a state is ruled.",
            "He wrote in English for an English audience, not to the sultan, and he describes the system without asking for any captive to be freed.",
            "The passage analyzes Ottoman methods calmly and even praises their care; it does not call for war.",
            "Rycaut was an English diplomat, not a palace page; he describes the system as an outside observer.",
          ], answer: 0 },

        // ---------- Set 2: The rise and fall of Songhai ----------
        { id: "w3b-m05", skill: "u3", type: "mcq", set: "w3b-s2", topic: "3.1", reasoning: "Contextualization", difficulty: "moderate",
          question: "The Battle of Tondibi described in the passage best illustrates which broader development of the period c. 1450 to c. 1750?",
          choices: [
            "Gunpowder armies gaining an edge over states that relied on cavalry",
            "The spread of Islam into West Africa through military conquest",
            "European colonial conquest of the interior of West Africa",
            "The end of trans-Saharan trade after European ships reached West Africa",
          ],
          why: [
            "The Moroccan force was small, but its firearms broke the Songhai army, much as Ottoman and Mughal guns helped those empires defeat foes who fought mainly with cavalry and bows.",
            "Songhai's rulers and the sultan of Morocco were both Muslim, and Islam had reached West Africa through trade centuries earlier, so the battle was not about spreading Islam.",
            "The invaders came from Morocco, a Muslim state in North Africa; European conquest of the African interior came mainly in the nineteenth century.",
            "Atlantic trade did draw some gold away from the Sahara routes, but caravans kept crossing the desert, and the passage describes a military defeat, not the end of a trade route.",
          ], answer: 0 },

        { id: "w3b-m06", skill: "u3", type: "mcq", set: "w3b-s2", topic: "3.2", reasoning: "Developments and processes", difficulty: "moderate",
          question: "Askia Muhammad's use of appointed governors and Muslim scholars, as described in the passage, was most likely intended to",
          choices: [
            "strengthen central control and win over Muslim townspeople",
            "convert the farming and fishing majority of the empire to Islam",
            "end the empire's dependence on the trans-Saharan gold and salt trade",
            "share power equally with the hereditary rulers of each province",
          ],
          why: [
            "Governors chosen by the ruler answered to him, and Muslim judges and advisers tied the state to the scholars and traders of cities such as Timbuktu, whose trade paid for the government.",
            "The passage says the rulers \"did not force Islam\" on the farmers and fishers, so conversion of the majority was not the aim.",
            "The passage says the gold and salt trade \"helped pay for this state,\" so the ruler had every reason to protect it, not end it.",
            "This reverses the passage. Appointing governors placed provinces under the ruler's own men instead of sharing power with local rulers.",
          ], answer: 0 },

        { id: "w3b-m07", skill: "u3", type: "mcq", set: "w3b-s2", topic: "3.4", reasoning: "Comparison", difficulty: "difficult",
          question: "Which of the following best compares Songhai with the Ottoman Empire in the period c. 1450 to c. 1750?",
          choices: [
            "Songhai relied on cavalry and fell to firearms, while the Ottomans built infantry with guns.",
            "Songhai built infantry with guns, while the Ottomans relied on cavalry and fell to firearms.",
            "Both empires were conquered by armies sent from Morocco in the sixteenth century.",
            "Both empires relied mainly on sea power in the Atlantic Ocean to control their trade.",
          ],
          why: [
            "Songhai's strength lay in horsemen and canoes on the Niger, and Moroccan musketeers defeated it in 1591. The Ottomans, by contrast, armed the Janissaries with firearms, used heavy cannon at Constantinople in 1453, and kept expanding through the sixteenth century.",
            "This swaps the two empires: it was the Ottomans who built a gunpowder infantry, and Songhai that fell to firearms.",
            "Only Songhai fell to Morocco; the Ottomans were at the height of their power in the sixteenth century.",
            "Songhai was an inland empire built on the Niger River and the Saharan caravan routes, and Ottoman naval power was in the Mediterranean and Red Sea, not the Atlantic.",
          ], answer: 0 },

        // ---------- Set 3: Mughal conquests in India (map) ----------
        { id: "w3b-m08", skill: "u3", type: "mcq", set: "w3b-s3", topic: "3.1", reasoning: "Developments and processes", difficulty: "easy",
          question: "The map best supports which conclusion about Mughal expansion between 1568 and 1687?",
          choices: [
            "It spread from northern India into Gujarat and Bengal, then south into the Deccan.",
            "The empire grew mainly by seizing ports along India's western and eastern coasts.",
            "The Mughals conquered southern India first and then moved north toward Delhi.",
            "Mughal expansion ended when Akbar died in 1605, and later rulers only held on.",
          ],
          why: [
            "The early dates (Chittor 1568, Ahmedabad 1573, Rajmahal 1576) are in the north, and the later ones (Ahmadnagar 1636, Bijapur 1686, Golconda 1687) are farther and farther south.",
            "Most of the places taken, such as Chittor, Ahmadnagar, Bijapur, and Golconda, are far inland.",
            "This reverses the map: the northern places were taken first and the southern ones last.",
            "The map shows conquests in 1636, 1686, and 1687, long after Akbar's death.",
          ], answer: 0 },
        { id: "w3b-m09", skill: "u3", type: "mcq", set: "w3b-s3", topic: "3.2", reasoning: "Developments and processes", difficulty: "easy",
          question: "Governing the lands shown on the map, many of them far from the capitals at Agra and Delhi, depended most on which Mughal practice?",
          choices: [
            "Ranking nobles as mansabdars and paying them with revenue from assigned lands",
            "Choosing officials by examinations on the Confucian classics",
            "Requiring regional lords to live every other year at the Mughal capital",
            "Training Christian boys taken through the devshirme as provincial governors",
          ],
          why: [
            "Mansabdars held ranks that set how many soldiers they kept, and they were paid from the revenue of assigned lands, which bound conquered regions to the emperor's service.",
            "Examinations on the Confucian classics were how China chose officials, not the Mughal Empire.",
            "Alternate attendance was a Tokugawa policy in Japan.",
            "The devshirme was an Ottoman practice.",
          ], answer: 0 },
        { id: "w3b-m10", skill: "u3", type: "mcq", set: "w3b-s3", topic: "3.2", reasoning: "Causation", difficulty: "moderate",
          question: "In the 1680s, Aurangzeb moved his court from northern India to Aurangabad, marked on the map. Based on the map, which of the following best explains this move?",
          choices: [
            "It lay close to Bijapur, Golconda, and the Marathas, whom he was fighting.",
            "Safavid armies were threatening Agra and Delhi from Kandahar in the northwest.",
            "Aurangzeb wanted a port where he could trade directly with European companies.",
            "The Rajput fortress of Chittor, near Aurangabad, had rebelled against Mughal rule.",
          ],
          why: [
            "Aurangabad sits in the Deccan, near Ahmadnagar, Bijapur, Golconda, and the Maratha capital at Raigad. Aurangzeb led the campaigns that took Bijapur in 1686 and Golconda in 1687.",
            "The Safavids fought the Mughals over Kandahar, far to the northwest, but never threatened Agra or Delhi. Delhi was sacked by a Persian ruler, Nader Shah, only in 1739, after the Safavids had fallen.",
            "The map shows Aurangabad far inland, not on the coast.",
            "Chittor is far to the north of Aurangabad and was taken by Akbar in 1568.",
          ], answer: 0 },
        { id: "w3b-m11", skill: "u3", type: "mcq", set: "w3b-s3", topic: "3.2", reasoning: "Contextualization", difficulty: "easy",
          question: "The Maratha capital marked on the map is best understood in the context of which challenge to Mughal rule in the late 1600s?",
          choices: [
            "Regional powers such as the Marathas resisted Mughal rule in the Deccan.",
            "Sikh resistance in the Punjab cut the Mughal capitals off from the Deccan.",
            "The British East India Company conquered Bengal and took over its revenue.",
            "Safavid armies invaded the Deccan to support their fellow Shi'a rulers there.",
          ],
          why: [
            "Raigad, where Shivaji was crowned in 1674, lies in the western Deccan beside the lands Aurangzeb was conquering. Maratha hit-and-run warfare made his long Deccan wars costly and weakened the empire.",
            "Sikh resistance grew in the Punjab, far to the north of Raigad, and it did not cut the empire in two.",
            "The East India Company took control of Bengal after the Battle of Plassey in 1757, long after this period.",
            "The Safavids never sent armies into the Deccan.",
          ], answer: 0 },

        // ---------- Set 4: The sack of Magdeburg ----------
        { id: "w3b-m12", skill: "u3", type: "mcq", set: "w3b-s4", topic: "3.3", reasoning: "Developments and processes", difficulty: "moderate",
          question: "The \"adherents of the Augsburg Confession\" that the author mentions were",
          choices: [
            "Lutherans, who followed a statement of faith written in 1530",
            "Catholics who remained loyal to the pope and the Holy Roman emperor",
            "Calvinists, who followed the teachings of the church in Geneva",
            "Anglicans, who accepted the English monarch as head of the church",
          ],
          why: [
            "The Augsburg Confession, presented to Emperor Charles V in 1530, was the Lutheran statement of faith, and Magdeburg was a Lutheran city. The Catholic troops of the emperor and the Catholic League hated its people for their faith.",
            "The Catholic League was among the attackers; the people they hated for their faith were Protestants.",
            "Calvinists were another Protestant group, and the Peace of Augsburg (1555) left them out; the Augsburg Confession was Lutheran.",
            "The Church of England had its own statements of faith, and the Thirty Years' War in Germany did not center on Anglicans.",
          ], answer: 0 },

        { id: "w3b-m13", skill: "u3", type: "mcq", set: "w3b-s4", topic: "3.3", reasoning: "Claims and evidence in sources", difficulty: "moderate",
          question: "The author's list of Hungarians, Croats, Poles, Walloons, Italians, Spaniards, French, and Germans in the attacking army best supports which claim about the Thirty Years' War?",
          choices: [
            "The war drew soldiers from across Europe into the armies of the Catholic side.",
            "The war was fought mainly between the Catholic kingdoms of France and Spain.",
            "Every Catholic state in Europe fought on the same side because of its faith.",
            "The armies were made up mostly of townspeople drafted from the cities they attacked.",
          ],
          why: [
            "The imperial and Catholic League forces included soldiers recruited from many lands, many of them paid soldiers who lived by plunder, which fits the author's description of the hunt for \"booty.\"",
            "France and Spain did fight each other later in the war, but the excerpt describes an imperial army attacking a German city.",
            "This overstates the claim. Catholic France paid the Lutheran king of Sweden to fight the emperor and later went to war against the Habsburgs itself.",
            "The author describes outside troops attacking Magdeburg, not soldiers drafted from the city.",
          ], answer: 0 },

        { id: "w3b-m14", skill: "u3", type: "mcq", set: "w3b-s4", topic: "3.3", reasoning: "Sourcing and situation", difficulty: "easy",
          question: "The author's account of the sack of the city is most likely shaped by his point of view as",
          choices: [
            "a Lutheran official of Magdeburg who survived the attack",
            "an imperial officer who led the assault on the city",
            "a Swedish diplomat seeking allies among the German princes",
            "a Catholic priest who supported the emperor's cause",
          ],
          why: [
            "Guericke lived through the attack on his own Protestant city, so he calls the attackers \"the enemy\" and stresses their \"violence and cruelty\" and their hunt for booty.",
            "An imperial officer would not call the attackers \"the enemy\" or describe their actions as cruel.",
            "The source line identifies the author as an official of Magdeburg, not a Swedish diplomat.",
            "A supporter of the emperor's cause would not blame the attack on Catholic hatred of Lutherans.",
          ], answer: 0 },

        { id: "w3b-m15", skill: "u3", type: "mcq", set: "w3b-s4", topic: "3.3", reasoning: "Causation", difficulty: "difficult",
          question: "The destruction of Magdeburg in 1631 most directly contributed to which development?",
          choices: [
            "Saxony and Brandenburg joining Sweden's Gustavus Adolphus against the emperor",
            "The Edict of Restitution, which ordered Protestants to return former church lands",
            "The Council of Trent's reforms of the training and conduct of the Catholic clergy",
            "The end of the Thirty Years' War in the Peace of Westphalia later that same year",
          ],
          why: [
            "The sack shocked Protestants across Europe and helped push Saxony and Brandenburg into alliance with Sweden; months later, Swedish and Saxon troops defeated the imperial army at Breitenfeld in September 1631.",
            "The emperor issued the Edict of Restitution in 1629, two years before the sack, so it was a cause of Protestant anger, not a result of the sack.",
            "The Council of Trent met from 1545 to 1563, long before 1631.",
            "The Peace of Westphalia ended the war in 1648, seventeen years after the sack.",
          ], answer: 0 },

        // ---------- SAQ 1: practice passage on serfdom and the Romanov state ----------
        { id: "w3b-q1a", skill: "u3", type: "fr", set: "w3b-s5", part: "SAQ 1", sub: "a", topic: "3.2",
          lead: "Use the passage below to answer all parts of the question that follows.",
          prompt: "Identify ONE piece of historical evidence that would support the passage's argument that the Romanov tsars built a stronger state on the service of nobles and the labor of serfs.",
          earns: "The response names a specific development in Russia in the period c. 1613 to c. 1750 that shows nobles serving the state or the state relying on serf labor.",
          yes: [
            "Peter the Great's Table of Ranks (1722) required nobles to serve in the army or the government and promoted them by service, while they kept control of their serfs.",
            "Peter the Great's poll tax, collected on every male peasant from the 1720s, paid for a larger army, and landlords were made responsible for their serfs' payments.",
            "Serfs and other peasants were drafted to build St. Petersburg and to serve as soldiers in the Great Northern War against Sweden.",
          ],
          no: [
            "\"Russia had a lot of serfs.\" It gives no specific evidence that links serfdom to the strength of the state.",
            "\"Catherine the Great freed the serfs.\" This is inaccurate; serfdom in Russia was abolished in 1861.",
          ],
          example: "Peter the Great's Table of Ranks of 1722 made nobles serve the state as officers and officials, while the nobles kept their serfs, which shows the bargain the passage describes.",
          notExample: "Russia was a big country with a lot of farmers." },

        { id: "w3b-q1b", skill: "u3", type: "fr", set: "w3b-s5", part: "SAQ 1", sub: "b", topic: "3.2",
          lead: "Use the passage below to answer all parts of the question that follows.",
          prompt: "Explain how ONE piece of historical evidence could be used to challenge or modify the passage's argument.",
          earns: "The response uses a specific piece of evidence to explain how serfdom or the bargain with the nobles weakened the state, met resistance, or did not work as the passage claims.",
          yes: [
            "Stenka Razin's revolt (1670 to 1671) gathered Cossacks and runaway peasants along the Volga, which shows that serfdom caused uprisings that threatened the state instead of only strengthening it.",
            "Peasants kept fleeing to the frontier and joining the Cossacks after 1649, which shows that the Law Code did not fully bind them to the land.",
            "Peter the Great had to force nobles into lifelong service and punish those who avoided it, which suggests that the nobles' loyalty did not come freely from the bargain.",
          ],
          no: [
            "\"Serfdom was unfair.\" It is a moral judgment, not evidence that challenges the argument.",
            "\"The Russian Revolution of 1917 overthrew the tsar.\" It is far outside the period and does not address the bargain the passage describes.",
          ],
          example: "The passage says serfdom made the state stronger, but Stenka Razin's revolt of 1670 to 1671 drew thousands of runaway peasants and Cossacks into a war against the tsar's officials and landlords, which shows that binding peasants to the land also created dangerous unrest.",
          notExample: "Some people did not like the tsar." },

        { id: "w3b-q1c", skill: "u3", type: "fr", set: "w3b-s5", part: "SAQ 1", sub: "c", topic: "3.4",
          lead: "Use the passage below to answer all parts of the question that follows.",
          prompt: "Explain ONE similarity OR ONE difference between the relationship of the Russian tsars with their landholding nobles and the relationship of the rulers of ANOTHER land-based empire with landholding or regional elites in the period c. 1450 to c. 1750.",
          earns: "The response names another land-based empire and explains a specific similarity or difference in how its rulers dealt with landholding or regional elites.",
          yes: [
            "Similarity: Mughal emperors let zamindars keep their hereditary rights over villages in exchange for collecting land revenue for the state, a bargain like the one between the tsars and the nobles.",
            "Similarity: Louis XIV of France kept nobles at his court at Versailles and let them keep privileges such as freedom from the main land tax, which bought their loyalty to the crown.",
            "Difference: Ottoman sultans filled many top offices with men trained in the palace from boys taken from Christian families, who had no estates or family power, unlike the Russian landholding nobles.",
          ],
          no: [
            "\"Other empires also had nobles.\" It does not explain any similarity or difference in the relationship.",
            "\"The Ottomans had serfs just like Russia.\" This is inaccurate; Ottoman peasants were not bound to lords in the Russian way.",
          ],
          example: "The Ottoman sultans relied less on landholding nobles than the tsars did. Many of their top officials were raised in the palace from boys taken from Christian families, so these officials had no estates or families of their own and depended entirely on the sultan.",
          notExample: "Every empire had rich people." },

        // ---------- SAQ 2: no source, governing land-based empires ----------
        { id: "w3b-q2a", skill: "u3", type: "fr", part: "SAQ 2", sub: "a", topic: "3.2",
          lead: "Answer all parts of the question that follows.",
          prompt: "Identify ONE way the Inca or the Aztec state required its subjects to provide labor or goods before the Spanish conquest.",
          earns: "The response names a specific labor or tribute obligation of the Inca or Aztec state.",
          yes: [
            "The Inca mit'a required communities to send workers in turns to build roads, terraces, and storehouses or to serve in the army.",
            "The Aztecs demanded tribute from conquered city-states in goods such as cotton cloth, cacao, feathers, and warriors' costumes.",
            "Inca subjects farmed lands set aside for the state and for the Sun, and the harvest filled state storehouses.",
          ],
          no: [
            "\"They paid taxes.\" It does not name a specific obligation.",
            "\"The encomienda system.\" This was a Spanish colonial system set up after the conquest.",
          ],
          example: "Under the mit'a, the Inca state required each community to send men in turns to work on roads, bridges, and terraces.",
          notExample: "The Inca had a big empire in the mountains." },

        { id: "w3b-q2b", skill: "u3", type: "fr", part: "SAQ 2", sub: "b", topic: "3.2",
          lead: "Answer all parts of the question that follows.",
          prompt: "Describe ONE way the Qing dynasty kept control over the Han Chinese majority after conquering China in 1644.",
          earns: "The response describes a specific Qing policy or institution used to rule the Han Chinese.",
          yes: [
            "The Qing ordered Han Chinese men to shave the front of the head and wear the queue as a sign of submission to Manchu rule.",
            "The Qing kept the civil service examinations and the Confucian bureaucracy, which won the support of Han scholar-officials.",
            "The Qing placed Manchu banner garrisons in key cities and often paired a Manchu official with a Han Chinese official in high offices.",
          ],
          no: [
            "\"They used their army.\" It is too vague to describe a policy.",
            "\"They built the Great Wall to keep out the Mongols.\" Most of the Great Wall that stands today was built under the Ming, and the Qing were themselves from beyond it.",
          ],
          example: "The Qing kept the Confucian examination system, so Han Chinese scholars could still become officials, which gave educated families a reason to support the new dynasty.",
          notExample: "The Qing were very powerful rulers." },

        { id: "w3b-q2c", skill: "u3", type: "fr", part: "SAQ 2", sub: "c", topic: "3.1",
          lead: "Answer all parts of the question that follows.",
          prompt: "Explain ONE way a conflict over succession to the throne affected a land-based empire in the period c. 1450 to c. 1750.",
          earns: "The response names a specific succession conflict in a land-based empire and explains its effect on that empire.",
          yes: [
            "Shah Jahan's sons fought for the Mughal throne from 1657 to 1659, and Aurangzeb's victory over Dara Shikoh brought a ruler with stricter Sunni policies to power.",
            "After Aurangzeb died in 1707, repeated wars among his heirs weakened the Mughal center, and provincial governors and the Marathas gained power.",
            "Russia's Time of Troubles (1598 to 1613), which began when the old ruling line died out, brought civil war and a Polish occupation of Moscow before the Romanovs took the throne.",
          ],
          no: [
            "\"Kings fought over the throne.\" It names no specific conflict and explains no effect.",
            "\"Napoleon made himself emperor.\" This happened in 1804, outside the period.",
          ],
          example: "When the Mughal emperor Shah Jahan fell ill in 1657, his sons went to war for the throne. Aurangzeb won and executed his brother Dara Shikoh, and his reign brought stricter Sunni policies, such as the return of the jizya in 1679, which increased resistance from Rajputs and Marathas.",
          notExample: "Sometimes a king died and a new king took over." },

        // ---------- Section II: long essay ----------
        { id: "w3b-leq", skill: "u3", type: "essay", kind: "leq", topic: "3.2", reasoning: "Comparison",
          prompt: "In the period c. 1450 to c. 1750, rulers of land-based empires worked to bring powerful nobles and regional elites under their control. Develop an argument that evaluates the extent to which rulers of land-based empires succeeded in centralizing power over these elites.",
          rows: [
            { name: "Thesis/Claim", max: 1, levels: [
              "0 points: The response has no claim, only restates the prompt, or describes rulers and elites without making a claim about how far centralization succeeded.",
              "1 point: The response makes a historically defensible claim about the extent of success, with a line of reasoning, for example that rulers such as Louis XIV and Peter the Great tamed nobles at court and in state service, but only by leaving them privileges and local power, so that elites in empires such as the Mughal and Ottoman regained strength in the eighteenth century.",
            ] },
            { name: "Contextualization", max: 1, levels: [
              "0 points: The response gives no relevant context or only a passing phrase.",
              "1 point: The response describes a broader context relevant to the prompt, for example the rising cost of gunpowder armies, which pushed rulers to raise more revenue, or earlier periods of fragmentation such as the Sengoku wars in Japan, Russia's Time of Troubles, or the French Wars of Religion, which showed rulers the danger of strong nobles.",
            ] },
            { name: "Evidence", max: 2, levels: [
              "0 points: The response gives no specific examples relevant to rulers and elites in this period.",
              "1 point: The response gives at least two specific examples relevant to the topic, such as Versailles and the Table of Ranks.",
              "2 points: The response uses specific and relevant examples, such as Louis XIV's court at Versailles, the Ottoman training of palace officials from boys taken from Christian families, the Mughal mansab and jagir system, or the Tokugawa alternate attendance system, to support an argument about how far rulers succeeded.",
            ] },
            { name: "Analysis and Reasoning", max: 2, levels: [
              "0 points: The response lists examples without using comparison, causation, or continuity and change to frame an argument.",
              "1 point: The response uses comparison, causation, or continuity and change to frame an argument about the extent to which rulers centralized power over elites.",
              "2 points: The response shows a complex understanding, for example by explaining why centralization succeeded more in some empires than in others, by showing that rulers often gained control by making bargains that left elites strong, or by tracing how central control rose and then weakened in the same empire.",
            ] },
          ],
          evidence: [
            "Louis XIV moved his court to Versailles in 1682 and drew great nobles there, where rank and favor depended on the king.",
            "French intendants, royal officials sent to the provinces, supervised taxes and justice, but French nobles kept privileges such as freedom from the taille, the main direct tax.",
            "Peter the Great's Table of Ranks (1722) made nobles serve in the army or government and promoted them by service, and he replaced the patriarch with the Holy Synod in 1721.",
            "The Russian Law Code of 1649 bound peasants to their lords' land, which won the nobles' support but gave them great power over most of the population.",
            "The Ottoman sultans filled the janissary corps and many high offices with men raised from boys taken from Christian families, who had no families of their own and depended on the sultan.",
            "As the Ottoman state relied more on tax farming in the seventeenth and eighteenth centuries, provincial notables (ayan) gained wealth and local power.",
            "Akbar's mansab system gave nobles ranks and paid many of them with jagirs, revenue assignments that were often moved to keep them from building local power; Rajput rulers became mansabdars while keeping their kingdoms.",
            "Mughal zamindars kept hereditary rights over villages, and after Aurangzeb's death in 1707 governors such as the Nizam of Hyderabad (from 1724) ruled almost on their own.",
            "The Tokugawa shoguns made daimyo spend alternate years in Edo and leave their families there when they returned home (formalized in 1635).",
            "The Kangxi Emperor defeated the Revolt of the Three Feudatories (1673 to 1681), ending the power of the Han generals who held large regions in the south.",
            "Shah Abbas I built a slave army of ghulams and musketeers to reduce the power of the Qizilbash tribal chiefs.",
          ],
          model: "Thesis: Between c. 1450 and c. 1750, rulers of land-based empires greatly increased their power over nobles and regional elites by drawing them to court, tying their rank to state service, and creating officials who owed everything to the ruler; however, most of this success depended on bargains that left elites with privileges and local power, so central control often weakened again by the eighteenth century. Outline: (1) Context: gunpowder armies and larger bureaucracies cost more than earlier states had spent, and periods of breakdown such as the Sengoku wars in Japan, the Time of Troubles in Russia, and the French Wars of Religion showed rulers how dangerous strong nobles could be. (2) Body paragraph on success through court and service: Louis XIV's Versailles, Peter the Great's Table of Ranks, and the Tokugawa alternate attendance system tied nobles' status to the ruler and kept them under watch. (3) Body paragraph on success through new elites: the Ottoman sultans raised palace officials and janissaries from boys taken from Christian families, and Shah Abbas I built a ghulam army to break the Qizilbash chiefs. (4) Body paragraph on limits: French nobles kept tax privileges, Russian nobles gained near total control over their serfs after 1649, Mughal zamindars kept hereditary rights, and Ottoman tax farmers and provincial notables grew stronger in the eighteenth century. (5) Complexity: comparing the empires shows that rulers who created elites dependent on themselves gained more control than rulers who bargained with existing landholders, but even systems such as the Mughal mansab ranks broke down after 1707, when Aurangzeb's successors could no longer control the great governors.",
        },
      ] },
  ],
};

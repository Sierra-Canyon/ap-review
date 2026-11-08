// Unit 1 Assessment (mock form w1a): The Global Tapestry, c. 1200 to c. 1450, topics 1.1 to 1.7.
import { maps } from "../whap/maps.js";

// A map the site draws (tools/maps/whap-u1.mjs, built by tools/build-maps.mjs), with the references it was checked against.
const MAP = "Map drawn for this review from Natural Earth land outlines (public domain). Places, dates, and routes checked against ";
const map = (id, caption, refs) => [{ svg: maps[id], caption }, { cite: MAP + refs + ".", kind: "map" }];

// Sources: every stimulus this form uses, keyed by id.
export const sets = {
  "w1a-s1": {
    id: "w1a-s1", name: "China under the Song and the Jin", intro: "Use the map below to answer the questions that follow.", label: "Map",
    sources: [{ title: "Map", blocks: map("u1-song-jin", "China under the Southern Song and the Jin, c. 1160 (canal and border approximate)", "Encyclopaedia Britannica, \"Hangzhou\" and \"Old Bian Canal\", and Wikipedia, \"Treaty of Shaoxing\", \"Lin'an Prefecture\", \"Grand Canal (China)\", and \"Champa rice\"") }],
  },
  "w1a-s2": {
    id: "w1a-s2", name: "Sa'di, a dervish and a king", intro: "Use the source below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "A solitary dervish had taken up his station at the corner of a desert. A king was passing by him. ... the dervish did not raise his head, nor show him the least mark of attention ..." },
        { p: "The vizir stepped up to him, and said: \"O generous man! the sovereign of the universe has passed by you; why did you not do him homage, and discharge the duty of obeisance?\" He answered and said, \"Speak to your sovereign, saying: ... let him moreover know that kings are meant for the protection of the people, and not the people for the subjects of kings.--Though it be for their benefit that his glory is exalted, yet is the king but the shepherd of the poor. The sheep are not intended for the service of the shepherd, but the shepherd is appointed to tend the sheep. ..." },
        { cite: "Sa'di of Shiraz (c. 1210 to c. 1291), Gulistan (The Rose Garden, completed 1258), chapter I, \"Of the Customs of Kings,\" story XXVIII, translated by James Ross, as reprinted in The Persian Literature, vol. 2, revised edition (1900), Project Gutenberg eBook 13060. Sa'di wrote in Persian in Shiraz, a city in southern Iran. A dervish is a Muslim mystic, or Sufi, who has chosen a life of poverty. A vizir is a ruler's chief minister, and obeisance means a bow or other sign of respect.", url: "https://www.gutenberg.org/ebooks/13060.txt.utf-8", kind: "primary" },
      ] },
    ],
  },
  "w1a-s3": {
    id: "w1a-s3", name: "Two songs of Kabir", intro: "Use the sources below to answer the questions that follow.",
    sources: [
      { title: "Song I", blocks: [
        { p: "O servant, where dost thou seek Me?" },
        { p: "Lo! I am beside thee." },
        { p: "I am neither in temple nor in mosque: I am neither in Kaaba nor in Kailash:" },
        { p: "Neither am I in rites and ceremonies, nor in Yoga and renunciation." },
        { p: "If thou art a true seeker, thou shalt at once see Me: thou shalt meet Me in a moment of time." },
        { p: "Kabîr says, \"O Sadhu! God is the breath of all breath.\"" },
        { cite: "Kabir (c. 1440 to 1518), Songs of Kabîr, song I, translated by Rabindranath Tagore, with an introduction by Evelyn Underhill (New York: Macmillan, 1915), Project Gutenberg eBook 6519. Kabir was a poet of the bhakti movement who lived in Benares (Varanasi) in northern India and was raised in a family of Muslim weavers. His songs were composed in a Hindi dialect and passed down by his followers. The Kaaba is the holy shrine at Mecca, Kailash is a mountain sacred to the Hindu god Shiva, and a Sadhu is a Hindu holy man.", url: "https://gutenberg.org/files/6519/old/kabir10.txt", kind: "primary" },
      ] },
      { title: "Song LXIX", blocks: [
        { p: "If God be within the mosque, then to whom does this world belong?" },
        { p: "... Hari is in the East: Allah is in the West. Look within your heart, for there you will find both Karim and Ram;" },
        { p: "... Kabîr is the child of Allah and of Ram: He is my Guru, He is my Pir." },
        { cite: "Kabir, Songs of Kabîr, song LXIX, translated by Rabindranath Tagore (New York: Macmillan, 1915), Project Gutenberg eBook 6519. Hari and Ram are Hindu names for God, and Karim (\"the Generous\") is one of the Muslim names of God. A guru is a Hindu spiritual teacher, and a pir is a Sufi master.", url: "https://gutenberg.org/files/6519/old/kabir10.txt", kind: "primary" },
      ] },
    ],
  },
  "w1a-s4": {
    id: "w1a-s4", name: "Local foundations of states in the Americas and Africa", intro: "Use the passage below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "Many historians argue that states in the Americas and sub-Saharan Africa in the period c. 1200 to c. 1450 were built mainly by local peoples using local resources, even where outside trade and religions reached them. In the Valley of Mexico, the Mexica built Tenochtitlan on an island in Lake Texcoco and fed its people with chinampas, raised fields built in the lake. In the Andes, the Inca built a road network and organized the labor of their subjects. In southern Africa, the rulers of Great Zimbabwe controlled the gold trade and built huge stone enclosures without mortar. On the East African coast, Swahili city-states such as Kilwa grew rich from Indian Ocean trade. Their people spoke Swahili, a Bantu language that absorbed many Arabic words, and their rulers adopted Islam, but the cities were African towns, not foreign colonies." },
        { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" },
      ] },
    ],
  },
  "w1a-s5": {
    id: "w1a-s5", name: "The Golden Bull of 1356", intro: "Use the source below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "Moreover after they, or the majority of them, shall have made their choice in that place, such election shall in future be considered and looked upon as if it had been unanimously carried through by all of them, no one dissenting." },
        { p: "... each and all future prince electors, ecclesiastical and secular, may justly hold and lawfully possess ... all the gold and silver mines and mines of tin, copper, lead, iron and any other kind of metal, and also of salt ..." },
        { p: "... no male or female subjects at all of the Cologne, Mainz and Treves churches ... may or can in future be summoned ... beyond the territory and boundaries and limits of these same churches and their dependencies, to any other tribunal or the court of any other person than the archbishops of Mainz, Treves and Cologne and their judges." },
        { cite: "Emperor Charles IV, the Golden Bull (1356), sections 2, 9, and 11, translated in Ernest F. Henderson, ed., Select Historical Documents of the Middle Ages (London: George Bell and Sons, 1896), as published by the Avalon Project, Lillian Goldman Law Library, Yale Law School, under the title \"The Golden Bull of the Emperor Charles IV 1356 A.D.\" The law speaks in the emperor's voice. \"They\" in the first paragraph are the seven prince electors who chose the king of the Romans, the ruler who then became Holy Roman emperor: the archbishops of Mainz, Cologne, and Treves (Trier), the king of Bohemia, the count palatine of the Rhine, the duke of Saxony, and the margrave of Brandenburg. Ecclesiastical means belonging to the Church, and secular means not belonging to the Church. A tribunal is a court.", url: "https://avalon.law.yale.edu/medieval/golden.asp", kind: "primary" },
      ] },
    ],
  },
  "w1a-s6": {
    id: "w1a-s6", name: "Warrior lords in Japan and Europe", intro: "Use the passage below to answer all parts of the question that follows.",
    sources: [
      { title: "Source", blocks: [
        { p: "In both Japan and western Europe, central governments were weak in the period c. 1200 to c. 1450, and local military lords held much of the real power. In Japan, the emperor in Kyoto kept his title and religious role, but after 1192 a military leader called the shogun governed in his name. Over time, regional lords, later called daimyo, relied on samurai warriors, who owed loyalty and service in return for land or income. In Europe, kings granted land to nobles in return for military service, and knights followed a code of chivalry, much as samurai followed a warrior code later called bushido. Yet the two systems differed. European feudal ties were often seen as a contract with duties on both sides, while Japanese warriors were expected to give more complete personal loyalty to their lord." },
        { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" },
      ] },
    ],
  },
};

export default {
  forms: [
    { id: "w1a", name: "Unit 1 Assessment", group: "Unit 1: The Global Tapestry",
      items: [
        // ===== Set 1: map, China under the Song and the Jin (1.1, 1.7) =====
        { id: "w1a-m01", skill: "u1", type: "mcq", set: "w1a-s1", topic: "1.1", reasoning: "Claims and Evidence", difficulty: "easy",
          question: "Which of the following conclusions is best supported by the map?",
          choices: [
            "After the Jin took the north, the Song survived in the south and ruled from Hangzhou.",
            "The Song conquered the lands of the Jurchen and moved their capital north to Zhongdu.",
            "The Southern Song built the Grand Canal to link Hangzhou with the port of Quanzhou.",
            "The Song kept their capital at Kaifeng for the whole of the dynasty, from 960 to 1279.",
          ],
          why: [
            "Correct. The map marks Kaifeng as the Song capital only until 1127, places it north of the border of 1142 in Jin lands, and marks Hangzhou, south of that border, as the Southern Song capital.",
            "The map labels Zhongdu as the Jin capital from 1153, so the Jurchen ruled the north, not the Song.",
            "The canal on the map runs north from Hangzhou toward Kaifeng, not south to Quanzhou, and it was first built under the Sui dynasty, long before the Song.",
            "The map gives Kaifeng's years as capital as 960 to 1127 and shows a new Southern Song capital at Hangzhou.",
          ],
          answer: 0 },
        { id: "w1a-m02", skill: "u1", type: "mcq", set: "w1a-s1", topic: "1.1", reasoning: "Causation", difficulty: "moderate",
          question: "The rice from Champa labeled on the map contributed most directly to which development in Song China?",
          choices: [
            "Rapid population growth, especially in southern China",
            "The Jurchen conquest of northern China in 1127",
            "The move of the Song capital from Kaifeng to Hangzhou",
            "The spread of maize and sweet potatoes in southern China",
          ],
          why: [
            "Correct. Champa rice ripened quickly and resisted drought, so farmers could harvest two crops a year, and the larger food supply supported a population that grew past 100 million, much of it in the south.",
            "The Jurchen conquest of the north was a military event caused by the Jin's strength and the Song's weak defenses, not by a new crop.",
            "The Song moved their capital south because the Jin took Kaifeng in 1127, not because of a new kind of rice.",
            "Maize and sweet potatoes came from the Americas and reached China only in the sixteenth century, after the Columbian Exchange began.",
          ],
          answer: 0 },
        { id: "w1a-m03", skill: "u1", type: "mcq", set: "w1a-s1", topic: "1.7", reasoning: "Comparison", difficulty: "moderate",
          question: "The route of the Grand Canal shown on the map best supports which comparison with another state of the period c. 1200 to c. 1450?",
          choices: [
            "Like the Inca roads, the canal tied the capital to distant regions so the state could move goods.",
            "Like the trans-Saharan caravan routes, the canal lay outside the control of any state.",
            "Like the stone walls of Great Zimbabwe, the canal was built mainly to defend the capital from invaders.",
            "Like the chinampas of Tenochtitlan, the canal was used mainly as farmland for growing crops.",
          ],
          why: [
            "Correct. The map shows the canal linking Kaifeng with Yangzhou, Suzhou, and the Yangzi delta, where grain was shipped north to the capital, much as Inca roads carried goods, soldiers, and officials to and from Cusco.",
            "The Song state built, repaired, and used the canal to ship tax grain, while the caravan routes crossed the desert through many lands and were run by merchants.",
            "The canal on the map runs south from Kaifeng to the rice lands of the Yangzi, which shows it was built to move goods, not to defend a city.",
            "Chinampas were raised fields built in a lake for farming, while the canal on the map is a waterway linking distant cities.",
          ],
          answer: 0 },

        // ===== Set 2: Sa'di, Gulistan (1.2) =====
        { id: "w1a-m04", skill: "u1", type: "mcq", set: "w1a-s2", topic: "1.2", reasoning: "Contextualization", difficulty: "easy",
          question: "Sa'di finished the Gulistan in 1258, the year Mongol armies captured Baghdad. Which of the following best describes the political situation in Dar al-Islam at that time?",
          choices: [
            "The Abbasid caliphs had little real power, and Muslim lands were divided among many states.",
            "A single caliph in Baghdad still ruled all Muslim lands from Spain to Central Asia.",
            "The Ottoman Empire had taken Constantinople and ruled most of the Arab world.",
            "Hindu kingdoms had driven the Muslim sultans of Delhi out of northern India.",
          ],
          why: [
            "Correct. By the thirteenth century the caliph was mostly a religious figurehead, and real power belonged to Turkic dynasties such as the Seljuks of Anatolia, the Mamluks of Egypt, and the Delhi sultans.",
            "The early Islamic caliphates did rule a vast united empire, but that unity had broken apart centuries before 1258.",
            "The Ottomans took Constantinople in 1453 and most Arab lands in the sixteenth century, long after 1258.",
            "The Delhi Sultanate, founded in 1206, was a powerful Muslim state in northern India in 1258.",
          ],
          answer: 0 },
        { id: "w1a-m05", skill: "u1", type: "mcq", set: "w1a-s2", topic: "1.2", reasoning: "Sourcing", difficulty: "easy",
          question: "Sa'di most likely placed this story in a chapter about the customs of kings in order to",
          choices: [
            "remind rulers that their power exists to serve their subjects",
            "argue that dervishes, rather than kings, should rule Muslim states",
            "justify the Mongol conquest of Iran as a punishment sent by God",
            "persuade subjects that they must obey their king without question",
          ],
          why: [
            "Correct. The dervish says kings are meant to protect the people and compares the king to a shepherd who serves his flock, a lesson aimed at rulers.",
            "The dervish refuses to honor the king, but he never claims that he or other dervishes should take power.",
            "The excerpt does not mention the Mongols or any conquest.",
            "The story praises a man who refuses to bow to the king, which is the opposite of teaching blind obedience.",
          ],
          answer: 0 },
        { id: "w1a-m06", skill: "u1", type: "mcq", set: "w1a-s2", topic: "1.2", reasoning: "Making Connections", difficulty: "moderate",
          question: "The dervish in the story belonged to a group of Muslim mystics who most directly contributed to which development in the period c. 1200 to c. 1450?",
          choices: [
            "The spread of Islam in South Asia and Anatolia through Sufi teachers",
            "The split between Sunni and Shia Muslims over who should lead the community",
            "The founding of the Delhi Sultanate by Turkic military commanders",
            "The Crusaders' capture of Jerusalem from its Muslim rulers in 1099",
          ],
          why: [
            "Correct. Sufis, including wandering dervishes, preached a personal and emotional faith and adapted it to local beliefs, which drew converts in India, Anatolia, and other regions.",
            "The Sunni and Shia split began in the seventh century over the succession to Muhammad, not through Sufi activity.",
            "The Delhi Sultanate was founded in 1206 by Turkic generals through conquest. Sufis later won many converts under its rule, but they did not found the state.",
            "The Crusaders took Jerusalem in 1099 through war, and Sufis played no part in it.",
          ],
          answer: 0 },

        // ===== Set 3: Kabir (1.3) =====
        { id: "w1a-m07", skill: "u1", type: "mcq", set: "w1a-s3", topic: "1.3", reasoning: "Contextualization", difficulty: "easy",
          question: "The references to both the temple and the mosque, and to both Allah and Ram, best reflect which situation in northern India in the fifteenth century, when Kabir lived?",
          choices: [
            "Muslim sultans governed a mostly Hindu population in northern India.",
            "Buddhism had again become the religion of most people in northern India.",
            "European traders had begun to spread Christianity in India's port cities.",
            "The Mughal emperor Akbar had created a new faith that combined Islam and Hinduism.",
          ],
          why: [
            "Correct. From 1206 the Delhi Sultanate brought Muslim rulers, soldiers, and Sufis into northern India, where most people remained Hindu, and poets like Kabir drew on both faiths.",
            "Buddhism had declined in India by this period, and Kabir's songs name Hindu and Muslim ideas, not Buddhist ones.",
            "Europeans did not reach India by sea until Vasco da Gama's voyage of 1498, and they landed on the southwest coast, far from Kabir's Benares.",
            "Akbar did promote a blend of faiths, but he ruled in the late sixteenth century, after Kabir's death.",
          ],
          answer: 0 },
        { id: "w1a-m08", skill: "u1", type: "mcq", set: "w1a-s3", topic: "1.3", reasoning: "Developments and Processes", difficulty: "easy",
          question: "The claim in Song I that God is not found in temples, mosques, or \"rites and ceremonies\" best reflects the ideas of which movement?",
          choices: [
            "The bhakti movement, which stressed personal devotion over ritual and caste",
            "Neo-Confucianism, which stressed filial piety and a clear social order",
            "Theravada Buddhism, which stressed monastic life as the path to enlightenment",
            "Scholasticism, which used reason and logic to explain Christian beliefs",
          ],
          why: [
            "Correct. Bhakti poets taught that anyone could reach God through love and devotion, without temple rituals or Brahmin priests, which matches Kabir's message.",
            "Neo-Confucianism developed in Song China and focused on ethics and family order, not on finding God within the heart.",
            "Theravada Buddhism spread in Sri Lanka and mainland Southeast Asia, and it valued monastic life rather than rejecting it.",
            "Scholasticism was a European Christian movement in universities, not a South Asian devotional movement.",
          ],
          answer: 0 },
        { id: "w1a-m09", skill: "u1", type: "mcq", set: "w1a-s3", topic: "1.3", reasoning: "Sourcing", difficulty: "moderate",
          question: "Kabir's songs were sung and passed down by his followers and were collected in writing over the following centuries. A historian using these songs as evidence of Kabir's own words should be cautious mainly because",
          choices: [
            "the wording may have changed as the songs were passed down and translated",
            "Kabir belonged to the Muslim ruling class and could not have known Hindu ideas",
            "the songs were written in Arabic, which few people in India could read",
            "Tagore was a British official who wanted to weaken the bhakti movement",
          ],
          why: [
            "Correct. Songs passed down by memory and later written down and translated into English may not keep the exact words Kabir used.",
            "Kabir was raised in a family of weavers, not in the ruling class, and his songs show deep knowledge of Hindu ideas.",
            "Kabir composed in a Hindi dialect that ordinary people spoke, which is one reason his songs spread so widely.",
            "Rabindranath Tagore was a Bengali poet who admired Kabir, not a British official.",
          ],
          answer: 0 },

        // ===== Set 4: states in the Americas and Africa (1.4, 1.5, 1.7) =====
        { id: "w1a-m10", skill: "u1", type: "mcq", set: "w1a-s4", topic: "1.4", reasoning: "Developments and Processes", difficulty: "easy",
          question: "The chinampas described in the passage best illustrate which feature of state building in the Americas?",
          choices: [
            "Mesoamerican peoples adapted farming to their environment to feed large cities.",
            "Mesoamerican farmers used iron plows pulled by oxen to farm the lakeshore.",
            "The Mexica grew wheat and other crops that had come from Afro-Eurasia.",
            "The Mexica drew labor from conquered peoples through the mit'a system of rotating labor.",
          ],
          why: [
            "Correct. Raised fields built in Lake Texcoco produced several harvests a year and helped feed Tenochtitlan, one of the largest cities in the world.",
            "The Americas had no oxen or horses before Europeans arrived, and Mesoamerican farmers did not use iron plows.",
            "Wheat came to the Americas only after 1492, through the Columbian Exchange.",
            "The mit'a was an Inca labor system in the Andes. The Mexica collected tribute mainly in goods.",
          ],
          answer: 0 },
        { id: "w1a-m11", skill: "u1", type: "mcq", set: "w1a-s4", topic: "1.5", reasoning: "Claims and Evidence", difficulty: "difficult",
          question: "Which of the following, if true, would best support the passage's claim that the Swahili city-states were \"African towns, not foreign colonies\"?",
          choices: [
            "Archaeologists found that local Bantu speakers built the earliest towns before many Arab traders settled.",
            "Pieces of Chinese porcelain and Persian pottery have been found in the ruins of Kilwa.",
            "Ibn Battuta praised the ruler of Kilwa for his generosity when he visited in the fourteenth century.",
            "Portuguese ships attacked and looted Kilwa in 1505 and built a fort there.",
          ],
          why: [
            "Correct. If local peoples founded the towns before large numbers of foreign merchants arrived, the cities grew from African roots rather than as foreign settlements.",
            "Chinese porcelain and Persian pottery show that Kilwa traded across the Indian Ocean, but they say nothing about who founded or ran the town.",
            "Praise for Kilwa's ruler shows the city's wealth and Muslim faith, but not whether its people were African or foreign.",
            "The Portuguese attack came after the period and shows outside pressure on the coast, not the cities' origins.",
          ],
          answer: 0 },
        { id: "w1a-m12", skill: "u1", type: "mcq", set: "w1a-s4", topic: "1.7", reasoning: "Comparison", difficulty: "difficult",
          question: "Based on the passage, which of the following best describes a difference between the Swahili city-states and the Inca Empire?",
          choices: [
            "The Swahili cities grew through Indian Ocean trade, while the Inca built a land empire.",
            "The Swahili cities were united under one sultan at Kilwa, while the Inca built roads and organized labor.",
            "The Swahili rulers adopted Islam, while the Inca were divided into many independent cities.",
            "The Swahili cities developed in isolation, while the Inca were shaped by contact with Afro-Eurasia.",
          ],
          why: [
            "Correct. The passage links Swahili wealth to Indian Ocean trade and describes the Inca as a land empire with roads and organized labor.",
            "The second half is right, but Swahili towns such as Kilwa were separate city-states, not one state under a single sultan.",
            "The first half is right, but the Inca ruled a single centralized empire, not independent cities.",
            "The Swahili coast was deeply tied to Indian Ocean trade, while the Inca had no contact with Afro-Eurasia before the Spanish arrived.",
          ],
          answer: 0 },

        // ===== Set 5: the Golden Bull of 1356 (1.6) =====
        { id: "w1a-m13", skill: "u1", type: "mcq", set: "w1a-s5", topic: "1.6", reasoning: "Developments and Processes", difficulty: "moderate",
          question: "The excerpt best illustrates which feature of the Holy Roman Empire in the period c. 1200 to c. 1450?",
          choices: [
            "Power was decentralized, since princes chose the emperor and ruled their own lands.",
            "The emperor ruled through salaried officials chosen by written examinations.",
            "Princes ruled their own lands, but the pope chose each emperor and could remove him.",
            "The emperor had become a hereditary monarch who controlled all courts and mines in the empire.",
          ],
          why: [
            "Correct. The electors chose the ruler by majority vote, kept the mines in their lands, and ran their own courts, so the emperor shared power with princes.",
            "Examinations to choose officials were a feature of Chinese government, not of the Holy Roman Empire.",
            "The first half is right, but the excerpt gives the choice of emperor to the electors and does not mention the pope.",
            "The excerpt shows the opposite. The ruler was elected, and the electors kept mines and courts in their own territories.",
          ],
          answer: 0 },
        { id: "w1a-m14", skill: "u1", type: "mcq", set: "w1a-s5", topic: "1.6", reasoning: "Sourcing", difficulty: "moderate",
          question: "Charles IV most likely issued the rules in the first paragraph in order to",
          choices: [
            "prevent disputed elections by making a majority vote final",
            "give ordinary townspeople a vote in choosing the emperor",
            "make the office of emperor hereditary in his own family",
            "place the choice of emperor under the authority of the pope",
          ],
          why: [
            "Correct. Earlier elections had sometimes produced rival kings, and treating a majority vote as if it were unanimous gave a clear rule that every elector had to accept.",
            "Only the seven prince electors voted, and the excerpt gives ordinary subjects no role in the choice.",
            "An elected office cannot pass automatically from father to son, so the rule worked against hereditary succession.",
            "The excerpt leaves the choice to the electors and gives the pope no role.",
          ],
          answer: 0 },
        { id: "w1a-m15", skill: "u1", type: "mcq", set: "w1a-s5", topic: "1.6", reasoning: "Continuity and Change", difficulty: "difficult",
          question: "Which later development most clearly continued the pattern of political power shown in the excerpt?",
          choices: [
            "The Peace of Westphalia (1648) confirmed German princes' rule over their own lands.",
            "Otto von Bismarck united most German states under Prussian leadership in 1871.",
            "Napoleon brought the Holy Roman Empire to an end in 1806 and reorganized its states.",
            "The pope crowned Charlemagne emperor of the Romans in the year 800 in Rome.",
          ],
          why: [
            "Correct. Westphalia left the German princes largely in control of their own lands, continuing the division of power that the Golden Bull had confirmed.",
            "German unification in 1871 created a strong central state, which ended the pattern rather than continuing it.",
            "Napoleon's dissolution of the empire ended the system rather than continuing it.",
            "Charlemagne's coronation came centuries before the Golden Bull, so it cannot be a later development.",
          ],
          answer: 0 },

        // ===== SAQ 1: practice passage, Japan and Europe (1.1, 1.6, 1.7) =====
        { id: "w1a-q1a", skill: "u1", type: "fr", set: "w1a-s6", part: "SAQ 1", sub: "a", topic: "1.7",
          lead: "Use the passage below to answer all parts of the question that follows.",
          prompt: "Identify ONE similarity between the political systems of Japan and western Europe that the passage describes.",
          earns: "The response names one similarity the passage gives: weak central governments, real power held by local military lords, land or income granted in return for military service, or a warrior code.",
          yes: [
            "In both places the central ruler was weak, and local military lords held much of the real power.",
            "In both places warriors received land or income in return for loyalty and military service.",
            "Samurai in Japan and knights in Europe both followed a code of conduct for warriors.",
          ],
          no: [
            "\"Both had emperors.\" The passage does not say this about Europe, and it is not the similarity the passage describes.",
            "\"European ties were contracts, and Japanese loyalty was personal.\" This is a difference, not a similarity.",
            "\"Both were feudal.\" This uses a label without naming any feature the two systems shared.",
          ],
          example: "In both Japan and western Europe, rulers granted land or income to warriors, samurai in Japan and knights in Europe, in return for loyalty and military service.",
          notExample: "Japan and Europe were both far away from each other." },
        { id: "w1a-q1b", skill: "u1", type: "fr", set: "w1a-s6", part: "SAQ 1", sub: "b", topic: "1.6",
          lead: "Use the passage below to answer all parts of the question that follows.",
          prompt: "Describe ONE piece of historical evidence, not mentioned in the passage, that supports the passage's argument that central governments in Japan or western Europe were weak in the period c. 1200 to c. 1450.",
          earns: "The response describes a specific development, not in the passage, that shows rulers in Japan or western Europe sharing power with or being limited by nobles or regional lords.",
          yes: [
            "In the Holy Roman Empire, the emperor was chosen by seven princes called electors, and the Golden Bull of 1356 confirmed their power, so the emperor could not control the many German states.",
            "In 1215 English barons forced King John to accept Magna Carta, which limited the king's right to punish free men and raise certain taxes.",
            "After the Ashikaga family took the title of shogun in 1338, regional military governors in Japan built their own power and often ignored the shogun.",
          ],
          no: [
            "\"The shogun governed in the emperor's name.\" This is already in the passage.",
            "\"Kings in Europe were weak.\" This repeats the claim without any evidence.",
            "\"Louis XIV built Versailles to control his nobles.\" This is from the seventeenth century and shows a strong king, not a weak one.",
          ],
          example: "In the Holy Roman Empire, the emperor was elected by seven powerful princes, and the Golden Bull of 1356 confirmed their rights. Because the princes chose the emperor and ran their own lands, the emperor had little control over the German states, which supports the argument that central government was weak.",
          notExample: "Europe had many kings and they fought a lot." },
        { id: "w1a-q1c", skill: "u1", type: "fr", set: "w1a-s6", part: "SAQ 1", sub: "c", topic: "1.6",
          lead: "Use the passage below to answer all parts of the question that follows.",
          prompt: "Explain ONE way warfare in the period c. 1200 to c. 1450 changed the power of rulers in Japan or western Europe.",
          earns: "The response names a specific war or military threat in Japan or western Europe and explains how it made a ruler or government stronger or weaker.",
          yes: [
            "Japan defeated Mongol invasions in 1274 and 1281, but the Kamakura shogunate had no conquered land to reward its warriors, which weakened their loyalty and helped bring down the shogunate in 1333.",
            "During the Hundred Years' War (1337 to 1453), French kings won the right to collect regular taxes and built a permanent army, which made the monarchy stronger.",
            "English kings needed money for wars against France, so they called Parliament often to approve taxes, which gave Parliament a larger role in government.",
          ],
          no: [
            "\"Wars made kings stronger.\" This names no war and explains no change.",
            "\"The Mongols conquered Japan.\" This is false. Japan turned back both Mongol invasions.",
            "\"The Hundred Years' War was between England and France.\" This identifies a war but does not explain how it changed rulers' power.",
          ],
          example: "The Hundred Years' War strengthened the French monarchy. To pay for the long fight against England, French kings began collecting regular taxes and created a permanent royal army, so by the 1440s they depended less on their nobles' soldiers.",
          notExample: "There were many wars in Europe and Japan in this period." },

        // ===== SAQ 2: no source, Dar al-Islam (1.2) =====
        { id: "w1a-q2a", skill: "u1", type: "fr", part: "SAQ 2", sub: "a", topic: "1.2",
          lead: "Answer all parts of the question that follows.",
          prompt: "Identify ONE intellectual or scientific achievement of scholars in Dar al-Islam in the period c. 1200 to c. 1450.",
          earns: "The response names one accurate achievement by a scholar or institution in the Muslim world during the period.",
          yes: [
            "Nasir al-Din al-Tusi led an observatory at Maragha in Iran and produced new tables of the movements of the planets.",
            "Ibn Khaldun wrote the Muqaddimah (1377), which explained the rise and fall of states through social and economic causes.",
            "The physician Ibn al-Nafis described how blood passes through the lungs.",
          ],
          no: [
            "\"Muslims invented the printing press.\" This is false. Movable metal type was developed in Korea and later by Gutenberg in Europe.",
            "\"Muslim scholars were very smart.\" This names no achievement.",
            "\"The Abbasids built the House of Wisdom.\" The House of Wisdom was founded in Baghdad around the ninth century, long before this period began.",
          ],
          example: "The scholar Nasir al-Din al-Tusi directed a large observatory at Maragha, in Iran, where astronomers made new tables of the movements of the planets.",
          notExample: "Islam is a religion that began in Arabia." },
        { id: "w1a-q2b", skill: "u1", type: "fr", part: "SAQ 2", sub: "b", topic: "1.2",
          lead: "Answer all parts of the question that follows.",
          prompt: "Describe ONE way Islam spread to a new region in the period c. 1200 to c. 1450.",
          earns: "The response names a region where Islam spread during the period and describes how it spread, such as through merchants, Sufi missionaries, or military conquest.",
          yes: [
            "Muslim merchants trading in the Indian Ocean brought Islam to port cities in Southeast Asia, and the rulers of Malacca adopted Islam in the fifteenth century.",
            "Sufi teachers traveled through northern India under the Delhi Sultanate and won converts by stressing a personal, emotional faith.",
            "Turkic warriors such as the early Ottomans conquered land in Anatolia and the Balkans and brought Muslim rule to these regions.",
          ],
          no: [
            "\"Islam spread through trade.\" This names a method but no region and gives no detail.",
            "\"Muhammad spread Islam in Arabia.\" This happened in the seventh century, outside the period.",
            "\"Islam spread to the Americas.\" This did not happen in this period.",
          ],
          example: "Islam spread to Southeast Asia through Muslim merchants who traded in Indian Ocean ports. Local rulers, such as the rulers of Malacca in the fifteenth century, adopted Islam, which helped them build ties with Muslim traders from India and Arabia.",
          notExample: "Islam spread a lot in this period." },
        { id: "w1a-q2c", skill: "u1", type: "fr", part: "SAQ 2", sub: "c", topic: "1.2",
          lead: "Answer all parts of the question that follows.",
          prompt: "Explain ONE reason scholars and ideas were able to move across distant parts of Dar al-Islam in the period c. 1200 to c. 1450.",
          earns: "The response gives a specific reason, such as a shared language of learning, the pilgrimage to Mecca, schools and their funding, trade routes, or rulers' support, and explains how it helped scholars or ideas travel.",
          yes: [
            "Arabic was the shared language of religion and learning, so a scholar from Morocco could study and teach in Cairo or Damascus.",
            "The hajj brought Muslims from across Afro-Eurasia to Mecca, where they met scholars and carried books and ideas home.",
            "Madrasas supported by religious endowments (waqf) in many cities offered places to study and teach, so scholars could find work far from home.",
          ],
          no: [
            "\"There was a lot of trade.\" This does not explain how trade moved scholars or ideas.",
            "\"One caliph ruled all Muslim lands.\" This is false for this period.",
            "\"Scholars used the internet.\" This is not historically accurate.",
          ],
          example: "Scholars could move across Dar al-Islam because Arabic was the common language of religion and scholarship. A teacher trained in Cairo could lecture in Fez or Timbuktu without learning a new language, and books written in one region could be read in all the others.",
          notExample: "Ideas moved because people liked to travel." },

        // ===== LEQ: monarchs in western Europe, continuity and change (1.6) =====
        { id: "w1a-leq", skill: "u1", type: "essay", kind: "leq", topic: "1.6", reasoning: "Continuity and Change",
          prompt: "In the period c. 1200 to c. 1450, political power in western Europe was divided among monarchs, nobles, and the Roman Catholic Church. Develop an argument that evaluates the extent to which the power of monarchs in western Europe changed in this period.",
          rows: [
            { name: "Thesis/Claim", max: 1, levels: [
              "0 points: The response has no claim, only restates the prompt, or describes European kings without a claim about how much their power changed.",
              "1 point: The response makes a historically defensible claim about the extent of change, with a line of reasoning, for example that kings in England and France grew stronger through new taxes, courts, and armies, but nobles and the Church still limited them and the Holy Roman Empire stayed divided.",
            ] },
            { name: "Contextualization", max: 1, levels: [
              "0 points: The response gives no relevant context or only a passing phrase.",
              "1 point: The response describes a broader context relevant to the prompt, for example the breakup of Charlemagne's empire and the rise of feudalism, in which kings granted land to nobles for military service, or the long rivalry between popes and emperors over who held higher authority.",
            ] },
            { name: "Evidence", max: 2, levels: [
              "0 points: The response gives no specific examples relevant to the power of European monarchs.",
              "1 point: The response gives two specific examples relevant to the topic, such as Magna Carta in 1215 and the Hundred Years' War.",
              "2 points: The response uses specific and relevant examples to support an argument about the extent of change, for example using the French king's permanent taxes and standing army in the 1440s to show growing royal power, and the Golden Bull of 1356 to show that the German emperor stayed weak.",
            ] },
            { name: "Analysis and Reasoning", max: 2, levels: [
              "0 points: The response does not use continuity and change to frame the argument.",
              "1 point: The response uses continuity and change to frame the argument, for example explaining what changed in the power of kings and what stayed the same.",
              "2 points: The response shows a complex understanding, for example by explaining both change and continuity, by explaining why kings in England and France gained power while the Holy Roman emperor did not, or by showing how a single event, such as the Black Death, both weakened the old manorial order and strengthened royal government.",
            ] },
          ],
          evidence: [
            "Under feudalism, kings granted land to nobles in return for military service, so nobles with their own castles and soldiers could resist the crown.",
            "King Philip II of France took Normandy from King John of England in 1204, greatly enlarging the lands the French crown ruled directly.",
            "English barons forced King John to accept Magna Carta in 1215, which limited royal power and required the consent of a council for certain taxes.",
            "King Edward I of England called a Parliament in 1295 that included knights and townsmen as well as nobles and clergy, and later kings relied on Parliament to approve taxes.",
            "King Philip IV of France called the Estates General in 1302 and clashed with Pope Boniface VIII, and in 1303 Philip's agents seized the pope at Anagni.",
            "From 1309 to 1377 the popes lived in Avignon, under strong French influence, which weakened the papacy's independence.",
            "The Great Schism (1378 to 1417), when rival popes claimed authority at the same time, weakened the Church's power over kings.",
            "The Black Death (1347 to 1351) killed a third or more of Europe's people, and laws such as the English labor ordinance of 1349 tried to hold down wages.",
            "The English Peasants' Revolt of 1381 challenged royal taxes and the power of lords over peasants.",
            "During the Hundred Years' War (1337 to 1453), French kings gained regular taxes and a permanent army, and Joan of Arc helped revive the monarchy's cause.",
            "The Golden Bull of 1356 gave seven electors the right to choose the Holy Roman emperor, leaving the German states largely independent.",
            "In Iberia, the Christian kingdoms of Castile and Aragon grew as they took land from Muslim states during the Reconquista.",
          ],
          model: "Thesis: Between c. 1200 and c. 1450, the kings of England and France became much stronger by building royal courts, collecting new taxes, and raising their own armies, but this change was uneven, because nobles and the Church continued to limit kings everywhere and the Holy Roman emperor remained weak. Outline: (1) Context: after the breakup of Charlemagne's empire, feudalism left power in the hands of nobles who held land in return for military service, and popes claimed authority over kings. (2) Continuity in limits on kings: Magna Carta in 1215 showed that English barons could force a king to accept limits, and nobles kept their own soldiers and castles. (3) Change in France and England: Philip II took Normandy in 1204, Philip IV stood up to Pope Boniface VIII, and English kings worked through Parliament to raise taxes. (4) Change through crisis: the Avignon papacy and the Great Schism weakened the Church, and the Hundred Years' War gave French kings regular taxes and a standing army. (5) Continuity in central Europe: the Golden Bull of 1356 confirmed that seven electors chose the emperor, so the German states stayed largely independent. (6) Complexity: the same pressures of war and plague that led to revolts, such as the Peasants' Revolt of 1381, also pushed kings to build stronger systems of taxation, so royal power grew out of crisis rather than in a straight line.",
        },
      ] },
  ],
};

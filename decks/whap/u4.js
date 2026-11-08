// Unit 4: Transoceanic Interconnections, c. 1450 to c. 1750
// Sources: every stimulus (multiple-choice sets, SAQs with a source, DBQ documents), keyed by id.
import { maps } from "./maps.js";
const MAP = "Map drawn for this review from Natural Earth land outlines (public domain). Places, dates, and routes checked against ";
const mapSet = (id, name, mapId, caption, refs) => ({ id, name, intro: "Use the map below to answer the questions that follow.", label: "Map",
  sources: [{ title: "Map", blocks: [{ svg: maps[mapId], caption }, { cite: MAP + refs + ".", kind: "map" }] }] });
export const sets = {
  "u4-s1": {
    id: "u4-s1", name: "Portuguese navigation and sea power", intro: "Use the passage below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "Portugal's rise as a sea power in the fifteenth century rested less on new inventions than on the skillful combination of older ones. Portuguese sailors used the magnetic compass, which had reached Europe from China, and the astrolabe, an instrument refined by scholars in the Islamic world, to find their position far from land. The caravel, with its triangular lateen sails, could sail closer to the wind than older European ships, so captains could return north along the African coast against the prevailing winds. Royal sponsorship, beginning with Prince Henry, paid for decades of voyages that built up knowledge of Atlantic wind patterns. When Portuguese ships finally reached the Indian Ocean, their cannons gave them an advantage at sea, but on land they could hold only small fortified trading posts." },
        { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" },
      ] },
    ],
  },
  "u4-s2": {
    id: "u4-s2", name: "The English and the Dutch at Bantam", intro: "Use the source below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "The Hollanders likewise took an English bark going from Bantam ... to Jacatra, slew some of her men, wounded many more, chained the captain and mariners, and carried away the said bark at the stern of one of their ships into Bantam Road, and there anchored close by the admiral of the English in most despiteful and daring manner, making their vaunts that they were the chief people of all Europe; ..." },
        { p: "At Bantam the English and Hollanders had great disputes, insomuch as it was verily thought they would have fought together in the road, for the general of the Hollanders had brought thither fourteen great ships, ready to fight, where the English had nine, which they fitted for defense; but they fought not, for the governor of Bantam forbade them to fight in his road, and threatened them that if they did fight contrary to his command he would cut the throats of all their men that he should find upon the land." },
        { cite: "Anonymous French observer, account of conflicts between English and Dutch traders at Banda and at Bantam, a port on the island of Java, 1617. From James Harvey Robinson, ed., Readings in European History, vol. 2 (Boston: Ginn and Co., 1906), as reproduced in the Internet Indian History Sourcebook (\"England, India, and The East Indies, 1617 CE\").", url: "https://sourcebooks.web.fordham.edu/india/1617englandindies.asp", kind: "primary" },
      ] },
    ],
  },
  "u4-s3": {
    id: "u4-s3", name: "The Columbian Exchange", intro: "Use the passage below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "The voyages of Columbus began a transfer of plants, animals, microbes, and people between the Eastern and Western Hemispheres that historians call the Columbian Exchange. Its most devastating result was the spread of diseases such as smallpox and measles, to which Indigenous Americans had no prior exposure. In many regions, epidemics killed a large share of the population within a century. The exchange also reshaped diets around the globe. American crops such as maize and potatoes, which grow well in poor soils, helped support population growth in parts of Europe, Africa, and China. Meanwhile, horses, cattle, pigs, and sugarcane arrived in the Americas. Horses transformed life on the Great Plains, while sugar plantations created an enormous demand for labor that Europeans filled by importing enslaved Africans." },
        { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" },
      ] },
    ],
  },
  "u4-s4": {
    id: "u4-s4", name: "The Atlantic slave trade by carrier, 1501 to 1750", intro: "Use the table below to answer the questions that follow.",
    sources: [
      { title: "Estimated number of enslaved Africans embarked on ships crossing the Atlantic, by the flag of the ship, 1501 to 1750", blocks: [
        { table: {
          head: ["Period", "Spain", "Portugal (including Brazil)", "Great Britain", "Netherlands", "France", "Other (British North America and United States, Denmark and Baltic states)", "Total"],
          rows: [
            ["1501 to 1550", "31,738", "32,387", "0", "0", "0", "0", "64,125"],
            ["1551 to 1600", "88,223", "121,804", "1,922", "1,365", "66", "0", "213,380"],
            ["1601 to 1650", "127,809", "469,128", "33,695", "33,558", "1,827", "1,877", "667,894"],
            ["1651 to 1700", "18,461", "542,065", "394,567", "186,373", "36,609", "29,665", "1,207,740"],
            ["1701 to 1750", "0", "1,011,143", "964,639", "156,911", "380,034", "47,907", "2,560,634"],
          ],
        } },
        { cite: "Trans-Atlantic Slave Trade Database, SlaveVoyages, \"Estimates\" (captives embarked, by flag of the carrying ship). The database reports figures by 25-year period; the two 25-year figures in each row are added together here.", url: "https://legacy.slavevoyages.org/assessment/estimates", kind: "data" },
      ] },
    ],
  },
  "u4-s5": {
    id: "u4-s5", name: "Metacom's grievances, 1675", intro: "Use the source below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "Thay said thay had bine the first in doing Good to the English, and the English the first in doing Rong; said when the English first came, their King’s Father was as a great Man, and the English as a littell Child; he constrained other Indians from ronging the English, and gave them Corn and shewed them how to plant, and was free to do them ani Good, and had let them have a 100 Times more Land than now the King had for his own Peopell. ..." },
        { p: "Another Grievance, the English Catell and Horses still incresed; that when thay removed 30 Mill from where English had ani thing to do, thay could not kepe ther Corn from being spoyled, thay never being iused to fence, and thoft when the English boft Land of them thay wold have kept their Catell upon ther owne Land." },
        { cite: "John Easton, deputy governor of Rhode Island and a Quaker, A Relacion of the Indyan Warre (written 1675), reporting what Metacom (called King Philip by the English), the Wampanoag leader, and his men told a party of Rhode Island colonists at a meeting about a week before King Philip's War began. The \"King\" is Metacom and \"their King's Father\" is Massasoit. Original spelling. From John Easton, A Narrative of the Causes which led to Philip's Indian War, of 1675 and 1676, ed. Franklin B. Hough (Albany: J. Munsell, 1858).", url: "https://www.gutenberg.org/cache/epub/79766/pg79766-images.html", kind: "primary" },
      ] },
    ],
  },
  "u4-s6": {
    id: "u4-s6", name: "Thomas Mun on foreign trade", intro: "Use the source below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "Although a Kingdom may be enriched by gifts received, or by purchase taken from some other Nations, yet these are things uncertain and of small consideration when they happen. The ordinary means therefore to increase our wealth and treasure is by Forraign Trade, wherein wee must ever observe this rule; to sell more to strangers yearly than wee consume of theirs in value. ..." },
        { p: "Behold then the true form and worth of forraign trade, which is The great Revenue of the King, The honour of the Kingdom, The Noble profession of the Merchant, The School of our Arts, The supply of our wants, The employment of our poor, The improvement of our Lands, The Nurcery of our Mariners, The walls of the Kingdoms, The means of our Treasure, The Sinnews of our wars, The terror of our Enemies." },
        { cite: "Thomas Mun, English merchant and director of the East India Company, England's Treasure by Forraign Trade (written c. 1630, published London, 1664), excerpts from chapter 2 and the conclusion. Text as given in the Internet Modern History Sourcebook, with spelling partly modernized by Jerome S. Arkenberg.", url: "https://sourcebooks.web.fordham.edu/mod/1664mun-engtrade.asp", kind: "primary" },
      ] },
    ],
  },
  "u4-s7": {
    id: "u4-s7", name: "Social hierarchy in Spanish America", intro: "Use the passage below to answer all parts of the question that follows.",
    sources: [
      { title: "Source", blocks: [
        { p: "In Spanish America, conquest produced a new social order in which ancestry and birthplace shaped a person's place in society. At the top were peninsulares, officials and merchants born in Spain, who held most of the highest offices in church and government. Creoles, people of European descent born in the Americas, often owned land and mines but resented being passed over for the top posts. Below them were people of mixed ancestry, such as mestizos and mulattoes, along with Indigenous peoples and enslaved Africans. Colonial officials, priests, and painters described a growing list of these categories, often called castas. Yet the system was never fully fixed. Wealth, marriage, and personal connections allowed some families to claim a higher rank, and in daily life a person's label could change from one record to the next." },
        { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" },
      ] },
    ],
  },
  "u4-s8": {
    id: "u4-s8", name: "The Treaty of Tordesillas", intro: "Use the source below to answer all parts of the question that follows.",
    sources: [
      { title: "Source", blocks: [
        { p: "... covenanted and agreed that a boundary or straight line be determined and drawn north and south, from pole to pole, on the said ocean sea, ... at a distance of three hundred and seventy leagues west of the Cape Verde Islands, ... And all lands, both islands and mainlands, found and discovered already, or to be found and discovered hereafter, by the said King of Portugal and by his vessels on this side of the said line ... toward the east, ... shall belong to, and remain in the possession of, and pertain forever to, the said King of Portugal and his successors." },
        { p: "And all other lands, both islands and mainlands, ... discovered by the said King and Queen of Castile, Aragon, etc., and by their vessels, on the western side of the said bound, ... shall belong to, and remain in the possession of, and pertain forever to, the said King and Queen of Castile, Leon, etc., and to their successors." },
        { cite: "Treaty between Spain and Portugal concluded at Tordesillas, June 7, 1494. English translation from Frances Gardiner Davenport, ed., European Treaties bearing on the History of the United States and its Dependencies to 1648 (Washington, DC: Carnegie Institution of Washington, 1917), as reproduced by the Avalon Project at Yale Law School.", url: "https://avalon.law.yale.edu/15th_century/mod001.asp", kind: "primary" },
      ] },
    ],
  },
  "u4-s9": {
    id: "u4-s9", name: "Ships, maps, and winds", intro: "Use the passage below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "Between 1450 and 1750, European states built ships for different jobs. Portuguese caravels explored the African coast, while larger carracks and, later, Spanish galleons carried cargo, soldiers, and heavy cannons on long ocean routes. In the 1590s Dutch shipbuilders designed the fluyt, a cheap cargo ship that a small crew could sail, which lowered the cost of carrying grain, timber, and other bulk goods. Mapmakers gathered sailors' reports into charts and atlases, and in 1569 Gerardus Mercator published a world map on which a course of constant compass bearing appeared as a straight line. Sailors learned to use the great wind systems of the Atlantic and the seasonal monsoons of the Indian Ocean, often with help from local pilots. Yet Arab and Indian dhows and Chinese junks still carried much of the trade of Asian waters." },
        { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" },
      ] },
    ],
  },
  "u4-s10": {
    id: "u4-s10", name: "Barbot on the Guinea coast", intro: "Use the source below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "Those sold by the Blacks are for the most part prisoners of war, taken either in fight, or pursuit, or in the incursions they make into their enemies territories; others stolen away by their own countrymen; and some there are, who will sell their own children, kindred, or neighbours. ..." },
        { p: "The kings are so absolute, that upon any slight pretense of offences committed by their subjects, they order them to be sold for slaves, without regard to rank, or possession.... Abundance of little Blacks of both sexes are also stolen away by their neighbours, when found abroad on the roads, or in the woods; ..." },
        { cite: "John Barbot (Jean Barbot), French merchant who made slave-trading voyages to the coast of West Africa in 1678 and 1682, A Description of the Coasts of North and South Guinea, written in the 1680s and printed in English in A Collection of Voyages and Travels (London: Churchill, 1732). Text as given on a Vancouver Island University course page, \"Description of the Slave Trade in the late 17th century.\"", url: "https://web.viu.ca/davies/H320/description.slavetrade.1680s.htm", kind: "primary" },
      ] },
    ],
  },
  "u4-s11": mapSet("u4-s11", "Forced labor in the Americas", "u4r-labor-americas",
    "Who did the forced labor: mines, plantations, and a maroon community in the Americas, c. 1570 to c. 1700",
    "the Encyclopedia of Latin American History and Culture (\"Mita\"), Encyclopedia Virginia (\"Indentured Servants in Colonial Virginia\"), and King's College London Archives (\"The introduction of sugar cane\")"),
  "u4-s12": {
    id: "u4-s12", name: "Religious blending in the Atlantic world", intro: "Use the passage below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "Spanish and Portuguese missionaries worked to convert Indigenous and African peoples in the Americas, often by destroying temples and sacred images, yet religious change rarely followed the missionaries' plans. In New Spain, devotion to the Virgin of Guadalupe, who was said to have appeared to an Indigenous man in 1531, spread among Indigenous and mixed-ancestry people. Enslaved Africans in Brazil and the Caribbean linked Catholic saints with West African spirits, practices that later grew into religions such as Candomblé, Santería, and Vodou. Catholic feast days and religious brotherhoods gave colonized and enslaved peoples places to gather and keep older customs. Missionaries in Asia worked under different conditions. In China, Jesuits who served at the Ming and Qing courts let converts keep honoring their ancestors, but they won only small numbers of followers, and the emperor, not the Church, decided whether they could stay." },
        { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" },
      ] },
    ],
  },
  "u4-s13": {
    id: "u4-s13", name: "Rulers, elites, and subjects", intro: "Use the passage below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "Many large states in this period were ruled by groups that differed from most of their subjects. After 1644 the Manchu rulers of the Qing dynasty kept their own banner armies and required Han Chinese men to wear the queue hairstyle as a sign of loyalty, yet they also kept the civil service examinations and appointed both Manchu and Han officials to the highest offices. The Mughal emperors, Muslims governing a mostly Hindu population, gave high military ranks to Hindu Rajput nobles. Ottoman sultans let Christian and Jewish communities keep their own religious leaders and courts in return for a special tax. At the same time, commerce created wealth that did not always match legal rank. In Tokugawa Japan, merchants were officially placed below samurai, peasants, and artisans, yet many merchant families grew rich in cities such as Osaka and Edo." },
        { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" },
      ] },
    ],
  },
  "u4-dbq": {
    id: "u4-dbq", name: "Motives for European maritime expansion", intro: "Use the documents below to answer the document-based question.",
    sources: [
      { title: "Document 1", blocks: [
        { p: "Moreover, as your aforesaid envoys are of opinion, these very peoples living in the said islands and countries believe in one God, the Creator in heaven, and seem sufficiently disposed to embrace the Catholic faith and be trained in good morals. And it is hoped that, were they instructed, the name of the Savior, our Lord Jesus Christ, would easily be introduced into the said countries and islands. ... In the islands and countries already discovered are found gold, spices, and very many other precious things of divers kinds and qualities. Wherefore, as becomes Catholic kings and princes, ... you have purposed with the favor of divine clemency to bring under your sway the said mainlands and islands with their residents and inhabitants and to bring them to the Catholic faith." },
        { cite: "Pope Alexander VI, papal bull Inter caetera, addressed to King Ferdinand and Queen Isabella of Spain, May 4, 1493. English translation from Frances Gardiner Davenport, ed., European Treaties bearing on the History of the United States and its Dependencies to 1648 (Washington, DC: Carnegie Institution of Washington, 1917).", url: "https://www.nativeweb.org/pages/legal/indig-inter-caetera.html", kind: "primary" },
      ] },
      { title: "Document 2", blocks: [
        { p: "Be it knowen that we haue giuen and granted, ... to our welbeloued Iohn Cabot citizen of Venice, to Lewis, Sebastian, and Santius, sonnes of the sayd Iohn, ... full and free authority, leaue, and power to saile to all parts, countreys, and seas of the East, of the West, and of the North, vnder our banners and ensignes, ... vpon their owne proper costs and charges, to seeke out, discouer, and finde whatsoever isles, countreys, regions or prouinces of the heathen and infidels whatsoeuer they be, and in what part of the world soeuer they be, which before this time haue bene vnknowen to all Christians: ..." },
        { p: "... the aforesayd Iohn and his sonnes, or their heires and assignee may subdue, occupy and possesse all such townes, cities, castles and isles of them found, which they can subdue, occupy and possesse, as our vassals, and lieutenants, getting vnto vs the rule, title, and jurisdiction of the same villages, townes, castles, & firme land so found." },
        { cite: "King Henry VII of England, letters patent granted to John Cabot, a Venetian navigator living in England, and his sons, March 5, 1496. English version printed by Richard Hakluyt in The Principall Navigations (1589), original spelling, as given in Francis Newton Thorpe, ed., The Federal and State Constitutions, Colonial Charters, and Other Organic Laws (Washington, DC: Government Printing Office, 1909), and reproduced by the Avalon Project at Yale Law School.", url: "https://avalon.law.yale.edu/15th_century/cabot01.asp", kind: "primary" },
      ] },
      { title: "Document 3", blocks: [
        { p: "... the captain-major sent one of the convicts to Calecut, and those with whom he went took him to two Moors from Tunis, who could speak Castilian and Genoese. The first greeting that he received was in these words: “May the Devil take thee! What brought you hither?” They asked what he sought so far away from home, and he told them that we came in search of Christians and of spices. They said: “Why does not the King of Castile, the King of France, or the Signoria of Venice send hither?” ... he returned to the ships, accompanied by one of the Moors, who was, no sooner on board, than he said these words: “A lucky venture, a lucky venture! Plenty of rubies, plenty of emeralds! You owe great thanks to God, for having brought you to a country holding such riches!”" },
        { cite: "Anonymous member of Vasco da Gama's expedition (often identified as Álvaro Velho), journal entry describing the fleet's arrival at Calicut, India, May 1498. From A Journal of the First Voyage of Vasco da Gama, translated and edited by E. G. Ravenstein (London: Hakluyt Society, 1898).", url: "https://www.gutenberg.org/cache/epub/46440/pg46440.txt", kind: "primary" },
      ] },
      { title: "Document 4", blocks: [
        { p: "Wherefore, as best we can, we ask and require you that you consider what we have said to you, ... and that you acknowledge the Church as the Ruler and Superior of the whole world, and the high priest called Pope, and in his name the King and Queen Doña Juana our lords, in his place, as superiors and lords and kings of these islands and this Tierra-firme by virtue of the said donation, ..." },
        { p: "But, if you do not do this, and maliciously make delay in it, I certify to you that, with the help of God, we shall powerfully enter into your country, and shall make war against you in all ways and manners that we can, and shall subject you to the yoke and obedience of the Church and of their Highnesses; we shall take you and your wives and your children, and shall make slaves of them ..." },
        { cite: "The Requerimiento (Requirement), drafted by the royal lawyer Juan López de Palacios Rubios for the Spanish crown, 1513, to be read aloud by Spanish expeditions to Indigenous peoples in the Americas. English translation from Arthur Helps, The Spanish Conquest in America, vol. 1 (New York: Harper & Brothers, 1856), as reproduced by Encyclopedia Virginia.", url: "https://encyclopediavirginia.org/primary-documents/el-requerimiento-by-juan-lopez-de-palacios-rubios-1513/", kind: "primary" },
      ] },
      { title: "Document 5", blocks: [
        { p: "1. That this westerne discoverie will be greately for the inlargement of the gospell of Christe whereunto the Princes of the refourmed relligion are chefely bounde amongest whome her Majestie is principall." },
        { p: "3. That this westerne voyadge will yelde unto us all the commodities of Europe, Affrica, and Asia, as far as wee were wonte to travell, and supply the wantes of all our decayed trades." },
        { p: "5. That this voyage will be a great bridle to the Indies of the kinge of Spaine and a means that wee may arreste at our pleasure for the space of teime weekes or three monethes every yere, one or twoo hundred saile of his subjectes shippes at the fysshinge in Newfounde Iande." },
        { cite: "Richard Hakluyt, English clergyman and promoter of overseas colonies, titles of chapters 1, 3, and 5 of A Particular Discourse, known as the Discourse of Western Planting, written in 1584 for Queen Elizabeth I. Original spelling.", url: "https://www.let.rug.nl/~usa/documents/before-1600/richard-hakluyt-discourse-of-western-planting-1584.php", kind: "primary" },
      ] },
      { title: "Document 6", blocks: [
        { p: "We, greatly commending, and graciously accepting of, their Desires for the Furtherance of so noble a Work, which may, by the Providence of Almighty God, hereafter tend to the Glory of his Divine Majesty, in propagating of Christian Religion to such People, as yet live in Darkness and miserable Ignorance of the true Knowledge and Worship of God, and may in time bring the Infidels and Savages, living in those parts, to human Civility, and to a settled and quiet Government: ..." },
        { p: "And moreover, we do GRANT and agree, for Us, our Heirs and Successors; ... the said several Councils of and for the said several Colonies, shall and lawfully may, ... give and take Order, to dig, mine, and search for all Manner of Mines of Gold, Silver, and Copper, ... And to HAVE and enjoy the Gold, Silver, and Copper, to be gotten thereof ..." },
        { cite: "King James I of England, The First Charter of Virginia, April 10, 1606, granted to the merchants and gentlemen who formed the Virginia Company, as reproduced by the Avalon Project at Yale Law School.", url: "https://avalon.law.yale.edu/17th_century/va01.asp", kind: "primary" },
      ] },
      { title: "Document 7", blocks: [
        { p: "Would to God that those who can aid these poor souls and contribute something to their salvation could be here, if only for three days. I believe that a longing to help them would seize powerfully upon their souls. But let no one be astonished at these acts of barbarism. Before the faith was received in Germany, Spain, or England, those nations were not more civilized. Mind is not lacking among the Savages of Canada, but education and instruction. They are already tired of their miseries, and stretch out their hands to us for help. It seems to me that the tribes which have stationary homes could be easily converted." },
        { cite: "Paul Le Jeune, French Jesuit missionary and superior of the Jesuit mission in New France, Brief Relation of the Journey to New France, written at Quebec, August 28, 1632, a report printed in Paris for readers in France. English translation from Reuben Gold Thwaites, ed., The Jesuit Relations and Allied Documents, vol. 5 (Cleveland: Burrows Brothers, 1897).", url: "https://gutenberg.org/cache/epub/48562/pg48562.txt", kind: "primary" },
      ] },
    ],
  },
};

export default [
  // ---------- Multiple choice: u4-s1, Portuguese navigation and sea power ----------
  { id: "u4-m01", skill: "u4", type: "mcq", set: "u4-s1", topic: "4.1", reasoning: "Causation", difficulty: "moderate",
    question: "The developments described in the passage most directly reflect which of the following?",
    choices: [
      "European sailors adapting tools that had spread through Afro-Eurasian trade",
      "Portuguese scholars inventing the magnetic compass and the astrolabe at home",
      "Portuguese shipwrights copying the designs of Zheng He's treasure ships",
      "Joint-stock companies replacing kings as the main sponsors of the voyages",
    ],
    why: [
      "Correct. The passage says the compass came from China and the astrolabe was refined in the Islamic world, so Portuguese success built on knowledge carried along older trade networks.",
      "The passage says the compass reached Europe from China and the astrolabe was refined by scholars in the Islamic world; the Portuguese did not invent either.",
      "The passage credits the caravel and its lateen sails, not Chinese ship designs, and the Ming had stopped Zheng He's voyages by the 1430s.",
      "The passage credits royal sponsorship under Prince Henry; joint-stock companies such as the Dutch and English East India Companies came later, around 1600.",
    ], answer: 0 },
  { id: "u4-m02", skill: "u4", type: "mcq", set: "u4-s1", topic: "4.2", reasoning: "Causation", difficulty: "easy",
    question: "Which of the following was a major reason the Portuguese crown sponsored the voyages described in the passage?",
    choices: [
      "To reach gold and spices without Muslim and Venetian middlemen",
      "To find farmland for Portugal's fast-growing peasant population",
      "To settle Portuguese farming families in the interior of India",
      "To answer a Ming request for a new sea route to China",
    ],
    why: [
      "Correct. Portugal wanted direct access to West African gold and Asian spices, which reached Europe through Muslim traders and Italian cities such as Venice.",
      "Portugal was a small kingdom, and land hunger at home was not the main motive; trade, religion, and royal prestige drove the voyages.",
      "The passage notes that the Portuguese held only small fortified posts in the Indian Ocean; they did not settle the Indian interior.",
      "The Ming court had ended its own voyages by the 1430s and did not ask Europeans to open routes to China.",
    ], answer: 0 },
  { id: "u4-m03", skill: "u4", type: "mcq", set: "u4-s1", topic: "4.4", reasoning: "Comparison", difficulty: "difficult",
    question: "The Portuguese presence in the Indian Ocean described at the end of the passage differed from Spanish rule in the Americas in that the Portuguese in the Indian Ocean",
    choices: [
      "held coastal forts and sea lanes rather than large inland territories",
      "used the encomienda to force local farmers onto Portuguese estates",
      "converted most of the region's people to Christianity within a century",
      "dominated Indian Ocean trade as fully as Spain ruled Mexico and Peru",
    ],
    why: [
      "Correct. The Portuguese built a trading post empire based on forts such as Goa and Malacca and on naval power, while Spain conquered and governed large populations on land.",
      "The encomienda was a Spanish system in the Americas, not a Portuguese practice in the Indian Ocean.",
      "Most people around the Indian Ocean remained Muslim, Hindu, or Buddhist; Christian missions won only small numbers of converts.",
      "Portuguese fleets taxed and raided shipping, but Asian merchants kept carrying most Indian Ocean trade; Portugal never ruled it the way Spain ruled its American lands.",
    ], answer: 0 },
  { id: "u4-m04", skill: "u4", type: "mcq", set: "u4-s1", topic: "4.2", reasoning: "Comparison", difficulty: "moderate",
    question: "Portuguese voyages in the fifteenth century differed most from the Ming voyages led by Zheng He in the early fifteenth century in that the Portuguese voyages",
    choices: [
      "led to lasting efforts to build fortified bases and control trade",
      "used ships much larger than any vessel in the Ming treasure fleets",
      "were the first voyages from Eurasia to reach the coast of East Africa",
      "were paid for by merchants without support from a central government",
    ],
    why: [
      "Correct. The Ming voyages displayed imperial power and collected tribute but stopped in the 1430s, while Portugal kept expanding and used force to set up bases and control trade.",
      "Zheng He's treasure ships were far larger than Portuguese caravels.",
      "Zheng He's fleets reached East Africa decades before Vasco da Gama, and Arab and Persian sailors had traded there for centuries.",
      "The Portuguese crown sponsored the voyages, as the passage notes with Prince Henry.",
    ], answer: 0 },

  // ---------- Multiple choice: u4-s2, The English and the Dutch at Bantam ----------
  { id: "u4-m05", skill: "u4", type: "mcq", set: "u4-s2", topic: "4.5", reasoning: "Contextualization", difficulty: "moderate",
    question: "The conflict described in the excerpt is best understood in the context of which of the following?",
    choices: [
      "The Dutch East India Company's armed drive to control the spice trade",
      "The Portuguese seizure of Goa and Malacca in the early 1500s",
      "The Spanish conquest of the Philippines and the Manila galleon trade",
      "The English East India Company's conquest of Bengal after Plassey",
    ],
    why: [
      "Correct. The Dutch East India Company, founded in 1602, used its fleets to drive English and other rivals from the spice islands so it could control the trade in nutmeg, mace, and cloves.",
      "The Portuguese took Goa (1510) and Malacca (1511) about a century earlier, and the excerpt is about the Dutch and English, not the Portuguese.",
      "The Spanish did take the Philippines and begin the galleon trade in the sixteenth century, but that does not explain a fight between Dutch and English traders on Java.",
      "The battle of Plassey came in 1757, long after 1617, and Bengal is in India, not Java.",
    ], answer: 0 },
  { id: "u4-m06", skill: "u4", type: "mcq", set: "u4-s2", topic: "4.4", reasoning: "Claims and evidence in sources", difficulty: "moderate",
    question: "The action of the governor of Bantam in the second paragraph best supports which of the following claims about the period c. 1450 to c. 1750?",
    choices: [
      "Asian rulers often kept authority over their ports and over Europeans there.",
      "European companies had conquered most coastal states of Southeast Asia by 1617.",
      "Asian rulers usually sided with the Dutch against the English and other Europeans.",
      "Asian states kept European ships out of their harbors to protect local merchants.",
    ],
    why: [
      "Correct. The governor stops two armed European fleets from fighting by threatening the men they had on land, which shows that local rulers still set the rules in their own ports.",
      "The governor's ability to forbid the fight shows the opposite; in 1617 European power in Southeast Asia rested on a few forts and ships.",
      "The governor threatens both sides equally and does not take the Dutch side.",
      "Both fleets are anchored in Bantam's harbor, so the governor clearly let European ships in.",
    ], answer: 0 },
  { id: "u4-m07", skill: "u4", type: "mcq", set: "u4-s2", topic: "4.5", reasoning: "Sourcing and situation", difficulty: "difficult",
    question: "The author's description of the Dutch as \"making their vaunts that they were the chief people of all Europe\" most likely reflects his",
    choices: [
      "hostile view, as a French outsider, of Dutch power and conduct in Asia",
      "aim of persuading Asian rulers to grant new trading rights to the Dutch",
      "duty as a Dutch East India Company official reporting to the directors",
      "belief that the Dutch had become the strongest military power in Asia",
    ],
    why: [
      "Correct. The author was French, not Dutch, and calling the Dutch boasters who acted in a \"most despiteful and daring manner\" shows a critic's point of view that may exaggerate Dutch arrogance.",
      "The account criticizes the Dutch and was written for European readers, not to help the Dutch win favor in Asia.",
      "The author was an anonymous Frenchman, not a Dutch company official, and a company official would not describe the Dutch as boastful and cruel.",
      "The author reports the Dutch boast in order to mock it, and in the second paragraph the governor of Bantam, not the Dutch, has the final word.",
    ], answer: 0 },
  { id: "u4-m08", skill: "u4", type: "mcq", set: "u4-s2", topic: "4.8", reasoning: "Continuity and change", difficulty: "difficult",
    question: "Which of the following best describes a change in English trade in Asia in the decades after the conflicts described in the excerpt?",
    choices: [
      "The English company turned to India, trading at ports such as Surat.",
      "The English drove the Dutch from the spice islands and took the nutmeg trade.",
      "The English company left Asia to concentrate on the Atlantic slave trade.",
      "The English conquered Java and made Bantam the capital of their Asian posts.",
    ],
    why: [
      "Correct. Unable to break Dutch control of the spice islands, especially after the Dutch executed English traders at Amboina in 1623, the English company focused on India, where it traded cotton textiles through posts allowed by Mughal authorities.",
      "The Dutch, not the English, won control of the spice islands, and the Dutch kept the nutmeg trade for the rest of the period.",
      "The company kept trading in Asia for more than two centuries; other English companies, such as the Royal African Company, ran the slave trade.",
      "The Dutch, not the English, built their main base on Java, at Batavia in 1619.",
    ], answer: 0 },

  // ---------- Multiple choice: u4-s3, The Columbian Exchange ----------
  { id: "u4-m09", skill: "u4", type: "mcq", set: "u4-s3", topic: "4.3", reasoning: "Causation", difficulty: "easy",
    question: "The population decline among Indigenous Americans described in the passage most directly contributed to which of the following?",
    choices: [
      "Colonizers' growing reliance on enslaved African labor",
      "The end of European efforts to colonize the Caribbean",
      "The rise of new Indigenous empires in the Caribbean",
      "A drop in the value of sugar in the Atlantic economy",
    ],
    why: [
      "Correct. As disease killed many Indigenous workers, European colonizers turned to the Atlantic slave trade to supply labor for plantations and mines.",
      "European colonization of the Caribbean and the rest of the Americas expanded throughout this period.",
      "Caribbean Indigenous peoples such as the Taíno suffered severe losses; no new Indigenous empires arose there.",
      "Sugar became more valuable over time, as the passage's mention of plantations suggests.",
    ], answer: 0 },
  { id: "u4-m10", skill: "u4", type: "mcq", set: "u4-s3", topic: "4.3", reasoning: "Causation", difficulty: "easy",
    question: "The spread of American food crops described in the passage most likely contributed to which of the following in Afro-Eurasia?",
    choices: [
      "Population growth in China, where maize and sweet potatoes grew on hillsides",
      "A decline in the Atlantic slave trade as food supplies in West Africa increased",
      "The end of famine in Europe by 1600 as potatoes replaced wheat everywhere",
      "A fall in Chinese demand for silver as farmers grew new crops for export",
    ],
    why: [
      "Correct. American crops added calories and could be farmed on hillsides and poor soils, which helped support population growth in China and elsewhere.",
      "The Atlantic slave trade grew rapidly during this period despite the spread of new crops in Africa.",
      "Famines continued in Europe after 1600, and wheat and other grains stayed central in much of Europe; potatoes became a staple only in some regions, such as Ireland.",
      "Chinese demand for silver stayed high through the period, and the new crops were grown mainly for food, not export.",
    ], answer: 0 },
  { id: "u4-m11", skill: "u4", type: "mcq", set: "u4-s3", topic: "4.3", reasoning: "Continuity and change", difficulty: "easy",
    question: "The arrival of horses in the Americas, mentioned in the passage, led to which of the following changes?",
    choices: [
      "Some Plains peoples adopted hunting and warfare on horseback.",
      "The Inca rebuilt their road network for horse-drawn carts.",
      "Andean farmers stopped growing potatoes to raise horses.",
      "Horses replaced llamas as pack animals in the Aztec Empire.",
    ],
    why: [
      "Correct. Horses spread north from Spanish colonies, and Plains peoples such as the Comanche and Lakota built new ways of life around mounted bison hunting and warfare.",
      "The Inca road system was built before contact, when the Americas had no horses, and the Inca Empire fell to Spain in the 1530s.",
      "Potatoes remained a staple crop in the Andes.",
      "The Aztec Empire fell in 1521, and llamas were Andean animals, not part of Aztec life.",
    ], answer: 0 },
  { id: "u4-m12", skill: "u4", type: "mcq", set: "u4-s3", topic: "4.3", reasoning: "Comparison", difficulty: "difficult",
    question: "The Columbian Exchange differed from earlier exchanges along the Silk Roads in that the Columbian Exchange",
    choices: [
      "joined two hemispheres whose plants and germs had long been separate",
      "spread epidemic disease, which had never happened along earlier routes",
      "was limited to luxury goods carried by small groups of merchants",
      "moved crops and animals between distant regions for the first time",
    ],
    why: [
      "Correct. Afro-Eurasian societies had long shared crops, animals, and germs, but the Americas had been isolated, so the exchange after 1492 had unusually large effects.",
      "Disease had spread along earlier routes; the Black Death traveled along Afro-Eurasian trade networks in the fourteenth century.",
      "The Columbian Exchange moved staple crops, livestock, and millions of people, not just luxury goods.",
      "Crops had moved along older routes for centuries; sugarcane, cotton, and citrus fruits, for example, spread from South Asia to the Mediterranean before 1450.",
    ], answer: 0 },

  // ---------- Multiple choice: u4-s4, Atlantic slave trade data ----------
  { id: "u4-m13", skill: "u4", type: "mcq", set: "u4-s4", topic: "4.4", reasoning: "Continuity and change", difficulty: "moderate",
    question: "Which of the following conclusions is best supported by the data in the table?",
    choices: [
      "The total grew in each fifty-year period from 1501 to 1750.",
      "Spanish ships carried more captives than Portuguese ships in every period.",
      "British ships carried more captives than Portuguese ships from 1701 to 1750.",
      "Dutch ships carried no captives across the Atlantic before 1700.",
    ],
    why: [
      "Correct. The totals rise in every row, from about 64,000 in the first period to more than 2.5 million in the last.",
      "Portuguese ships carried more than Spanish ships in every period shown, including 1501 to 1550.",
      "From 1701 to 1750, Portuguese ships carried about 1,011,000 people and British ships about 965,000.",
      "Dutch ships carried more than 186,000 people from 1651 to 1700 alone.",
    ], answer: 0 },
  { id: "u4-m14", skill: "u4", type: "mcq", set: "u4-s4", topic: "4.4", reasoning: "Causation", difficulty: "easy",
    question: "The overall trend shown in the table is best explained by which of the following?",
    choices: [
      "The expansion of sugar plantations in Brazil and the Caribbean",
      "The growth of silver mining in Japan and its trade with China",
      "A Spanish ban on forced Indigenous labor in the silver mines",
      "The decline of plantation agriculture in the Americas after 1600",
    ],
    why: [
      "Correct. Sugar plantations demanded huge numbers of workers, and their growth in Brazil and later the Caribbean drove the rise in the slave trade.",
      "Japanese silver flowed mainly to China and had little to do with labor demand in the Atlantic world.",
      "Spain kept forced Indigenous labor in the mines through systems such as the mita.",
      "Plantation agriculture expanded after 1600, which is why the numbers in the table rise.",
    ], answer: 0 },
  { id: "u4-m15", skill: "u4", type: "mcq", set: "u4-s4", topic: "4.5", reasoning: "Causation", difficulty: "difficult",
    question: "The growth in the number of enslaved Africans carried by British and French ships after 1650 most directly reflects which of the following?",
    choices: [
      "The growth of British and French sugar colonies in the Caribbean",
      "Britain's conquest of the Portuguese colonies in Brazil and Angola",
      "Portugal's withdrawal from the slave trade after losing Brazil",
      "The growth of British and French textile mills that used slave-grown cotton",
    ],
    why: [
      "Correct. England took Jamaica in 1655 and France gained Saint-Domingue in 1697, and both became major sugar colonies that relied on enslaved labor.",
      "Britain did not conquer Brazil or Angola, which stayed Portuguese.",
      "Portugal kept Brazil, and the table shows Portuguese ships carrying more captives after 1650 than before.",
      "Textile mills and the boom in slave-grown cotton came with the Industrial Revolution after 1750, and the captives in the table went mainly to sugar colonies.",
    ], answer: 0 },
  { id: "u4-m16", skill: "u4", type: "mcq", set: "u4-s4", topic: "4.5", reasoning: "Causation", difficulty: "difficult",
    question: "Spanish colonies in the Americas used large numbers of enslaved Africans, yet the table shows few or no captives carried on Spanish ships after 1650. Which of the following best explains this pattern?",
    choices: [
      "Spain bought captives from foreign traders through asiento contracts.",
      "Spain abolished slavery in its American colonies in the 1600s.",
      "The Armada's defeat in 1588 ended Spanish voyages across the Atlantic.",
      "Spanish mines and estates used only Indigenous labor drafted by the mita.",
    ],
    why: [
      "Correct. Africa lay on Portugal's side of the line Spain and Portugal had agreed on, so Spain had no slave-trading forts there; it sold the asiento, the right to supply its colonies, to Portuguese, Dutch, French, and later British traders. Britain won it in 1713.",
      "Slavery continued in Spanish America throughout this period and was not abolished there until the nineteenth century.",
      "The Armada was defeated in 1588, but Spanish fleets kept crossing the Atlantic and carried silver home every year after that.",
      "The mita was important in Andean mines, but Spanish colonies also used many enslaved Africans, so Indigenous labor was never the only source.",
    ], answer: 0 },

  // ---------- Multiple choice: u4-s5, Metacom's grievances ----------
  { id: "u4-m17", skill: "u4", type: "mcq", set: "u4-s5", topic: "4.6", reasoning: "Sourcing and situation", difficulty: "moderate",
    question: "Easton's account is most useful to historians as evidence of",
    choices: [
      "Native grievances before the war, as recorded by a sympathetic colonist",
      "the battle plans the Wampanoag and their allies followed during the war",
      "the official view of Plymouth colony's government on the war's causes",
      "the farming and fencing methods English settlers brought from England",
    ],
    why: [
      "Correct. Easton, a Quaker official from Rhode Island, met Metacom's men and wrote down their grievances, so his account preserves Native complaints, though only as an English colonist understood and reported them.",
      "The excerpt records grievances from before the fighting, not plans for how to fight.",
      "Easton was from Rhode Island, not Plymouth, and he reports the Wampanoag view rather than Plymouth's official one.",
      "The excerpt mentions English cattle and fences only as causes of Native complaints; it does not describe English farming methods.",
    ], answer: 0 },
  { id: "u4-m18", skill: "u4", type: "mcq", set: "u4-s5", topic: "4.6", reasoning: "Claims and evidence in sources", difficulty: "easy",
    question: "The first paragraph of the excerpt best supports which of the following claims?",
    choices: [
      "Early cooperation gave way to conflict as colonists acquired more land.",
      "The Wampanoag had fought the English ever since the colonists arrived.",
      "English colonists relied on Native food supplies for the whole century.",
      "Native leaders had refused to sell or share any land with the English.",
    ],
    why: [
      "Correct. Metacom's men say Massasoit protected the English, fed them, and taught them to plant, but that the English now held far more land than his people kept, which led to grievances.",
      "The excerpt says that Massasoit protected and helped the English when they first came.",
      "The excerpt says the Wampanoag gave corn and farming help when the English first came; it does not show that dependence lasted all century.",
      "The excerpt says Massasoit let the English have a great deal of land, and the second paragraph mentions land the English bought.",
    ], answer: 0 },
  { id: "u4-m19", skill: "u4", type: "mcq", set: "u4-s5", topic: "4.3", reasoning: "Causation", difficulty: "difficult",
    question: "The grievance in the second paragraph most directly reflects which of the following broader developments?",
    choices: [
      "The spread of European livestock in the Americas",
      "The arrival of American crops such as maize in Europe",
      "The spread of smallpox among Native peoples of New England",
      "The adoption of horses by Plains peoples for hunting bison",
    ],
    why: [
      "Correct. Cattle, horses, and pigs were brought from Europe, and in New England they roamed into unfenced Native fields and destroyed corn, a common cause of conflict.",
      "Maize did spread to Europe, but the grievance is about animals brought to America, not crops sent from it.",
      "Smallpox was a major part of the Columbian Exchange, but the grievance is about livestock, not disease.",
      "The horse did transform life on the Great Plains, but that is a different region and a different result from the damage to New England cornfields described here.",
    ], answer: 0 },
  { id: "u4-m20", skill: "u4", type: "mcq", set: "u4-s5", topic: "4.6", reasoning: "Comparison", difficulty: "moderate",
    question: "The war that followed the meeting described in the excerpt was most similar to which of the following?",
    choices: [
      "The Pueblo Revolt of 1680 against Spanish rule in New Mexico",
      "The Fronde, a revolt of French nobles against the crown",
      "The founding of Jesuit missions among the Guaraní in Paraguay",
      "The rise of wealthy Creole landowners in New Spain and Peru",
    ],
    why: [
      "Correct. Like Metacom's war against the New England colonies, the Pueblo Revolt was an armed uprising by Indigenous peoples against colonizers who had taken land and pressed them to accept Christianity.",
      "The Fronde was a revolt by nobles inside France, not an Indigenous uprising against colonizers.",
      "Jesuit missions were a European effort to convert Indigenous peoples, not an Indigenous revolt.",
      "Creoles were people of European descent, so their rise was not an Indigenous response to colonization.",
    ], answer: 0 },

  // ---------- Multiple choice: u4-s6, Thomas Mun ----------
  { id: "u4-m21", skill: "u4", type: "mcq", set: "u4-s6", topic: "4.5", reasoning: "Claims and evidence in sources", difficulty: "easy",
    question: "The ideas expressed in the excerpt are most closely associated with which economic theory?",
    choices: [
      "Mercantilism",
      "Laissez-faire capitalism",
      "Socialism",
      "The Chinese tribute system",
    ],
    why: [
      "Correct. Mun's rule that a kingdom must sell more to foreigners than it buys, and so bring in treasure, is the core idea of mercantilism.",
      "Laissez-faire ideas, linked to Adam Smith in 1776, opposed the kind of state-guided trade Mun supports.",
      "Socialism developed in the nineteenth century as a response to industrial capitalism.",
      "The tribute system organized Chinese diplomatic relations and did not focus on a favorable balance of trade for a European kingdom.",
    ], answer: 0 },
  { id: "u4-m22", skill: "u4", type: "mcq", set: "u4-s6", topic: "4.5", reasoning: "Causation", difficulty: "moderate",
    question: "A government that accepted Mun's argument would most likely",
    choices: [
      "acquire colonies to supply raw materials and buy finished goods",
      "remove tariffs on imports to lower prices for its consumers",
      "forbid its merchants to trade overseas to keep silver at home",
      "rely on gifts and tribute from other states as its main income",
    ],
    why: [
      "Correct. Mercantilist states valued colonies because they supplied raw materials and served as markets, which helped the home country sell more than it bought.",
      "Mercantilists favored tariffs on imports to protect the balance of trade, not free trade.",
      "Mun calls foreign trade the main way to increase wealth, so banning it would go against his argument, even though he wants treasure to flow in.",
      "Mun says that gifts are \"uncertain and of small consideration.\"",
    ], answer: 0 },
  { id: "u4-m23", skill: "u4", type: "mcq", set: "u4-s6", topic: "4.5", reasoning: "Making connections", difficulty: "moderate",
    question: "Which of the following best reflects the link between trade and state power that Mun describes?",
    choices: [
      "Joint-stock companies with royal charters to trade and defend posts",
      "Craft guilds that set prices and standards for goods in medieval towns",
      "Zamindars who collected land taxes for the Mughal emperors",
      "Merchant caravans that carried gold and salt across the Sahara",
    ],
    why: [
      "Correct. Chartered companies joined private investment with state support, matching Mun's view of trade as both a source of profit and a tool of national power.",
      "Craft guilds regulated local production and did not tie overseas trade to the power of the state.",
      "Zamindars collected taxes on land in South Asia and were not an example of state-backed overseas trade.",
      "Trans-Saharan caravans were an older trade network and were not chartered by European states.",
    ], answer: 0 },
  { id: "u4-m24", skill: "u4", type: "mcq", set: "u4-s6", topic: "4.5", reasoning: "Making connections", difficulty: "easy",
    question: "Mun's view that a kingdom's wealth should be measured in treasure, meaning gold and silver, helps explain which of the following?",
    choices: [
      "European competition for American silver and African gold",
      "Spain's decision to stop all shipments of American silver to Asia",
      "The Ming and Qing refusal to accept silver in payment for Chinese goods",
      "England's decision to end its trade with India to keep silver at home",
    ],
    why: [
      "Correct. Because mercantilists equated wealth with bullion, European states competed for American silver and African gold.",
      "Spanish silver kept flowing to Asia, much of it through the Manila galleons from the 1570s on.",
      "China demanded silver in payment for its goods, which is why so much American silver flowed there.",
      "England kept trading with India through the East India Company throughout this period.",
    ], answer: 0 },

  // ---------- Multiple choice: u4-s9, Ships, maps, and winds ----------
  { id: "u4-m25", skill: "u4", type: "mcq", set: "u4-s9", topic: "4.1", reasoning: "Causation", difficulty: "easy",
    question: "The Dutch ship design described in the passage most directly contributed to which of the following?",
    choices: [
      "The Dutch Republic's rise as Europe's leading carrier of trade",
      "The start of the Industrial Revolution in the Dutch Republic",
      "The Dutch conquest of the coastal provinces of Ming China",
      "The end of Spanish and Portuguese shipping in the Atlantic",
    ],
    why: [
      "Correct. Cheap cargo ships that needed small crews let Dutch merchants charge less than rivals, and Amsterdam became the center of European shipping and trade in the 1600s.",
      "Industrialization began in Britain in the late eighteenth century, well after this period, and it did not start in the Dutch Republic.",
      "The Dutch held trading posts in Asia but never conquered Chinese provinces; their brief base on Taiwan was taken by Zheng Chenggong in 1662.",
      "Spanish and Portuguese fleets kept sailing the Atlantic throughout the period, carrying silver, sugar, and enslaved Africans.",
    ], answer: 0 },
  { id: "u4-m26", skill: "u4", type: "mcq", set: "u4-s9", topic: "4.1", reasoning: "Continuity and change", difficulty: "difficult",
    question: "The last sentence of the passage best supports which of the following claims about the period c. 1450 to c. 1750?",
    choices: [
      "European ships joined Asian sea trade without replacing Asian ships.",
      "European ships had driven Asian merchants out of long-distance trade by 1600.",
      "The magnetic compass reached Europe from China before this period.",
      "Chinese junks were larger than every European ship of the period.",
    ],
    why: [
      "Correct. Dhows and junks kept carrying much of the trade in Asian waters, so European ships added to an older network rather than ending it.",
      "The sentence says the opposite: Asian ships still carried much of the trade.",
      "The compass did reach Europe from China, but the last sentence says nothing about where the compass came from.",
      "The passage does not compare the size of Asian and European ships, so it gives no support for this claim.",
    ], answer: 0 },
  { id: "u4-m27", skill: "u4", type: "mcq", set: "u4-s9", topic: "4.1", reasoning: "Causation", difficulty: "easy",
    question: "The improved maps and knowledge of wind systems described in the passage most directly made possible which of the following?",
    choices: [
      "Regular round trips between Europe and other continents",
      "Scheduled steamship lines between Europe and Asian ports",
      "The first contact of any kind between Europe and China",
      "The end of monsoon-based trade in the Indian Ocean",
    ],
    why: [
      "Correct. Knowing where the winds blew in each season, and having charts to plot a course, let ships sail out and return again, which allowed lasting transoceanic trade and empire.",
      "Steamships came in the nineteenth century, after this period.",
      "Europe and China were already linked by the Silk Roads and the Indian Ocean trade, and travelers such as Marco Polo had reached China in the thirteenth century.",
      "The passage says sailors learned to use the monsoons, so monsoon trade continued.",
    ], answer: 0 },
  { id: "u4-m28", skill: "u4", type: "mcq", set: "u4-s9", topic: "4.2", reasoning: "Causation", difficulty: "moderate",
    question: "European rulers paid for ships, charts, and voyages like those described in the passage mainly because they",
    choices: [
      "competed with rival states for the wealth of trade and colonies",
      "needed overseas markets for goods made in their factories",
      "wanted to escape the labor shortage left by the Black Death",
      "had been invited by the Ottoman sultans to trade in the Red Sea",
    ],
    why: [
      "Correct. Rulers in Portugal, Spain, and later England, France, and the Netherlands backed voyages to win spices, gold, silver, and land before their rivals did.",
      "Factory production and the search for markets for manufactured goods belong to the Industrial Revolution, after 1750.",
      "The Black Death struck in the fourteenth century, and by the late fifteenth century population was recovering; it was not the motive for these voyages.",
      "The Ottomans fought the Portuguese in the Red Sea and the Indian Ocean rather than inviting them in.",
    ], answer: 0 },

  // ---------- Multiple choice: u4-s10, Barbot on the Guinea coast ----------
  { id: "u4-m29", skill: "u4", type: "mcq", set: "u4-s10", topic: "4.4", reasoning: "Sourcing and situation", difficulty: "moderate",
    question: "Barbot's position as a European merchant in the slave trade most likely affected the excerpt in which of the following ways?",
    choices: [
      "He stressed African sellers, which made the European role seem smaller.",
      "He wrote to persuade the French government to abolish the slave trade.",
      "He wrote for African kings and so praised the justice of their courts.",
      "He based his account on letters he received from the king of Kongo.",
    ],
    why: [
      "Correct. A merchant who bought captives had a reason to describe the trade as an African practice, which could shift attention away from the European demand that drove it.",
      "Barbot took part in the trade; organized campaigns to abolish it began in the late eighteenth century.",
      "The account was printed in Europe for European readers, and calling the kings \"so absolute\" that they sell subjects on \"any slight pretense\" is not praise.",
      "Barbot writes from what he saw and heard on the Guinea coast; the excerpt mentions no Kongolese letters.",
    ], answer: 0 },
  { id: "u4-m30", skill: "u4", type: "mcq", set: "u4-s10", topic: "4.4", reasoning: "Claims and evidence in sources", difficulty: "difficult",
    question: "The second paragraph of the excerpt best supports which of the following claims about some West African states?",
    choices: [
      "Some rulers used the sale of captives as a tool of royal power.",
      "Rulers refused to take any part in the Atlantic trade in captives.",
      "European merchants chose the kings who ruled the coastal states.",
      "Kings sold only foreigners captured in war, never their own subjects.",
    ],
    why: [
      "Correct. Barbot says kings ordered subjects sold for slight offenses, which shows rulers using the trade as a tool of power and a source of wealth.",
      "The excerpt says kings ordered people sold, so they took part.",
      "European traders depended on African rulers for access to captives and did not choose those rulers.",
      "Barbot says most captives were prisoners of war, but the second paragraph says kings also sold their own subjects.",
    ], answer: 0 },
  { id: "u4-m31", skill: "u4", type: "mcq", set: "u4-s10", topic: "4.4", reasoning: "Causation", difficulty: "difficult",
    question: "The trade described in the excerpt contributed most directly to which of the following developments in West Africa in the period c. 1650 to c. 1750?",
    choices: [
      "The growth of states such as Dahomey and Asante",
      "The European conquest of the West African interior",
      "The end of trade in gold and salt across the Sahara",
      "A rapid rise in the share of young men in the population",
    ],
    why: [
      "Correct. Dahomey and Asante grew by warfare that produced captives, sold them to Europeans for guns and other goods, and used those guns to expand further.",
      "Before the nineteenth century, Europeans held only coastal forts in West Africa; conquest of the interior came with the New Imperialism after 1850.",
      "Trans-Saharan trade continued throughout this period, even as more trade shifted to the Atlantic coast.",
      "The Atlantic trade took far more men than women, so it reduced the share of young men in many West African societies.",
    ], answer: 0 },
  { id: "u4-m32", skill: "u4", type: "mcq", set: "u4-s10", topic: "4.5", reasoning: "Sourcing and situation", difficulty: "moderate",
    question: "Which of the following would be most useful to a historian checking whether Barbot's description applied to the Atlantic slave trade as a whole?",
    choices: [
      "Records of voyages from many different African ports",
      "The text of the Treaty of Tordesillas, signed in 1494",
      "Spanish reports on the mita labor draft at Potosí",
      "A list of goods sold in Venice's markets in 1450",
    ],
    why: [
      "Correct. Barbot saw only some parts of the coast, so records of voyages from many ports would show whether his account was typical of the trade as a whole.",
      "The Treaty of Tordesillas divided overseas lands between Spain and Portugal and says nothing about how captives were taken in Africa.",
      "The mita was a labor system for Indigenous Andeans, so reports on it would not test a claim about the African slave trade.",
      "A list of Venetian trade goods from 1450 comes from before the Atlantic slave trade grew and does not describe it.",
    ], answer: 0 },

  // ---------- Multiple choice: u4-s11, Labor systems in the Americas ----------
  { id: "u4-m33", skill: "u4", type: "mcq", set: "u4-s11", topic: "4.4", reasoning: "Continuity and change", difficulty: "moderate",
    question: "The labor system that the map shows at Potosí and Huancavelica is best understood as",
    choices: [
      "a colonial state adapting an older Inca labor duty to its own ends",
      "a system in which workers bargained freely with mine owners for wages",
      "a Spanish copy of the Ottoman devshirme, which drafted Christian boys",
      "a labor system brought to the Andes by enslaved Africans from Angola",
    ],
    why: [
      "Correct. The map shows Indigenous men drafted under the mita at both mines. The Inca had required a rotating labor duty, the mit'a, for the state, and Spanish officials kept the idea but used it to supply colonial silver and mercury mines.",
      "The map says the workers were drafted, so they could not bargain freely.",
      "The devshirme took Christian boys for Ottoman service; it was a real system, but the Andean mita came from Inca practice.",
      "The map marks the mita as forced labor of Indigenous people; enslaved Africans did most of the work at the places it marks in Brazil, Barbados, and Virginia.",
    ], answer: 0 },
  { id: "u4-m34", skill: "u4", type: "mcq", set: "u4-s11", topic: "4.5", reasoning: "Comparison", difficulty: "easy",
    question: "According to the map, the workers at the sugar mills of Pernambuco and Bahia differed from the workers at Potosí in that the workers in Brazil",
    choices: [
      "were mostly enslaved Africans held as property for life",
      "were Indigenous men drafted to work for a set term each year",
      "were free migrants paid wages set by the Portuguese crown",
      "were indentured servants from Portugal serving a set term",
    ],
    why: [
      "Correct. The map marks Brazil's sugar mills as places where enslaved Africans did most of the work. Mita laborers were drafted for a term, but enslaved Africans were property for life, and children born to enslaved mothers were enslaved too.",
      "That describes the mita at Potosí, not the sugar mills of Brazil.",
      "Enslaved Africans received no wages, and the crown did not set pay for them.",
      "The map mentions indentured servants only in Barbados and Virginia, where enslaved Africans replaced them; in Brazil, as the map shows, enslaved Africans did most of the work.",
    ], answer: 0 },
  { id: "u4-m35", skill: "u4", type: "mcq", set: "u4-s11", topic: "4.6", reasoning: "Comparison", difficulty: "difficult",
    question: "Which of the following was most similar to Palmares, shown on the map?",
    choices: [
      "Cossack communities formed by peasants who fled serfdom in Russia",
      "Jesuit missions that gathered the Guaraní into towns in Paraguay",
      "The Fronde revolts of French nobles and judges against the crown",
      "The Manchu banner armies that conquered Ming China after 1644",
    ],
    why: [
      "Correct. The map marks Palmares as a community of people who escaped slavery. Like its founders, many Cossacks had escaped forced labor and built armed, self-governing communities beyond the reach of the state.",
      "Jesuit missions were run by European priests, not founded by people escaping bondage.",
      "The Fronde was a revolt by nobles and judges who held high rank, not a community of escaped laborers.",
      "The banners were the Qing state's own armies, the opposite of a community that escaped state control.",
    ], answer: 0 },

  // ---------- Multiple choice: u4-s12, Religious blending ----------
  { id: "u4-m36", skill: "u4", type: "mcq", set: "u4-s12", topic: "4.5", reasoning: "Claims and evidence in sources", difficulty: "easy",
    question: "The passage best supports which of the following claims about religion in the Americas in the period c. 1450 to c. 1750?",
    choices: [
      "Religious change reflected both European power and the choices of the colonized.",
      "Missionaries completely replaced Indigenous and African beliefs with Catholicism.",
      "Indigenous and African peoples rejected Christianity and kept only older faiths.",
      "Protestant missionaries converted most people in Spanish and Portuguese America.",
    ],
    why: [
      "Correct. Missionaries destroyed temples and pressed conversion, but Indigenous and enslaved peoples blended Catholic saints, feasts, and brotherhoods with older beliefs.",
      "The passage says religious change \"rarely followed the missionaries' plans\" and that older customs survived.",
      "The passage describes devotion to the Virgin of Guadalupe and Catholic saints, so people did not reject Christianity.",
      "Spain and Portugal were Catholic powers, and the passage describes Catholic missionaries.",
    ], answer: 0 },
  { id: "u4-m37", skill: "u4", type: "mcq", set: "u4-s12", topic: "4.5", reasoning: "Comparison", difficulty: "moderate",
    question: "Christian missions in China differed from those in the Americas mainly because in China",
    choices: [
      "an imperial state decided whether missionaries could stay",
      "missionaries forced most of the population to convert within a century",
      "Jesuits banned the honoring of ancestors from the start",
      "European colonists governed several coastal provinces",
    ],
    why: [
      "Correct. In the Americas, missionaries worked under Spanish and Portuguese rule, but in China they stayed only as long as the emperor allowed, and they won few converts.",
      "The passage says the Jesuits won only small numbers of followers in China.",
      "The passage says the Jesuits let converts keep honoring their ancestors.",
      "No European power governed Chinese provinces in this period; Europeans traded at a few ports such as Macao and Guangzhou.",
    ], answer: 0 },
  { id: "u4-m38", skill: "u4", type: "mcq", set: "u4-s12", topic: "4.5", reasoning: "Making connections", difficulty: "difficult",
    question: "Which of the following developments in Afro-Eurasia was most similar to the religious blending in the Americas described in the passage?",
    choices: [
      "Sufis spreading Islam in ways that absorbed local customs in South Asia",
      "The Protestant Reformation splitting Western Christianity into rival churches",
      "The Ottoman devshirme raising Christian boys as Muslims for state service",
      "Safavid rulers making Shia Islam the official religion of Persia",
    ],
    why: [
      "Correct. Sufis often adapted Islam to local practices, such as honoring saints' tombs, much as Indigenous and African peoples joined Catholic and older beliefs.",
      "The Reformation divided one faith into competing churches rather than blending two traditions.",
      "The devshirme was forced conversion and training for state service, not a blending of beliefs chosen by ordinary people.",
      "The Safavids imposed one form of Islam from above, which is closer to forced conversion than to blending.",
    ], answer: 0 },

  // ---------- Multiple choice: u4-s13, Rulers, elites, and subjects ----------
  { id: "u4-m39", skill: "u4", type: "mcq", set: "u4-s13", topic: "4.7", reasoning: "Comparison", difficulty: "moderate",
    question: "The Qing, Mughal, and Ottoman policies described in the passage were similar in that each",
    choices: [
      "kept a ruling group in power while accommodating other elites",
      "forced all subjects to convert to the ruler's own religion",
      "replaced hereditary rulers with elected councils of nobles",
      "removed the old landholding nobility from all positions of power",
    ],
    why: [
      "Correct. The Manchus used Han officials and the exams, the Mughals gave Rajputs high ranks, and the Ottomans let Christians and Jews keep their own leaders, while each dynasty kept final power.",
      "The Mughals and Ottomans tolerated other religions, and the Qing did not force a religion on the Han.",
      "All three were ruled by hereditary dynasties; elected councils are not part of the passage or of these states.",
      "The passage shows rulers working with elites such as Rajput nobles and Han officials rather than removing them.",
    ], answer: 0 },
  { id: "u4-m40", skill: "u4", type: "mcq", set: "u4-s13", topic: "4.7", reasoning: "Causation", difficulty: "moderate",
    question: "Rulers adopted policies like those described in the passage most likely in order to",
    choices: [
      "win the cooperation of local elites in large, diverse empires",
      "prepare their subjects for independence from the empire",
      "reduce the size and cost of their armies in peacetime",
      "attract European settlers and merchants to their lands",
    ],
    why: [
      "Correct. A small ruling group could not govern millions of people by force alone, so it drew local elites into government and let religious communities run their own affairs.",
      "Rulers wanted to hold their empires together, not prepare them for independence.",
      "The Qing kept their banner armies, and the Mughals used Rajput nobles as military commanders, so the policies supported military power.",
      "None of these empires sought European settlers.",
    ], answer: 0 },
  { id: "u4-m41", skill: "u4", type: "mcq", set: "u4-s13", topic: "4.7", reasoning: "Comparison", difficulty: "moderate",
    question: "Which of the following developments in Europe in the same period was most similar to the situation of Japanese merchants described at the end of the passage?",
    choices: [
      "Rich merchants in Amsterdam and London gained influence despite lower rank.",
      "Russian serfs won their freedom and bought land from their former lords.",
      "Factory owners replaced the landed nobility as the ruling class of Britain.",
      "The Catholic clergy lost all of its land in western and central Europe.",
    ],
    why: [
      "Correct. As in Japan, growing trade made some commoners rich and powerful in cities, while law and custom still placed hereditary nobles above them.",
      "Russian serfdom grew stricter in this period, and serfs were not freed until 1861.",
      "Factory owners rose with the Industrial Revolution after 1750, and nobles still dominated British politics well into the nineteenth century.",
      "The Church lost land in Protestant states, but it kept large holdings in Catholic Europe, so \"all\" overstates the change.",
    ], answer: 0 },

  // ---------- SAQ 1: practice passage on social hierarchy ----------
  { id: "u4-q1a", skill: "u4", type: "fr", set: "u4-s7", part: "SAQ 1", sub: "a", topic: "4.7",
    lead: "Use the passage below to answer all parts of the question that follows.",
    prompt: "Identify ONE piece of historical evidence that would support the passage's argument that ancestry and birthplace shaped a person's place in Spanish American society.",
    earns: "Names a specific, accurate piece of evidence from the period c. 1450 to c. 1750 that shows ancestry or birthplace determining status in Spanish America.",
    yes: [
      "Peninsulares born in Spain held most viceroy and high church posts, while Creoles were often passed over.",
      "Casta paintings from eighteenth-century New Spain labeled families by mixed ancestry, such as mestizo and mulatto.",
      "Indigenous people in the Andes owed labor under the mita and paid tribute that Spaniards did not owe.",
    ],
    no: [
      "\"People were treated differently.\" This is too vague to count as evidence.",
      "\"Creoles led independence movements in the nineteenth century.\" This is outside the period and does not show how ancestry shaped status before 1750.",
      "\"Spain conquered the Aztecs.\" This is accurate but does not show ancestry shaping rank.",
    ],
    example: "Viceroys and archbishops in New Spain and Peru were almost always peninsulares sent from Spain, while Creoles, even wealthy ones, rarely received the top offices.",
    notExample: "Society in Spanish America had classes, and some people were richer than others." },
  { id: "u4-q1b", skill: "u4", type: "fr", set: "u4-s7", part: "SAQ 1", sub: "b", topic: "4.7",
    lead: "Use the passage below to answer all parts of the question that follows.",
    prompt: "Explain ONE way the labor needs of the colonial economy contributed to the social hierarchy described in the passage.",
    earns: "Connects a specific labor system or labor demand to the creation or reinforcement of the hierarchy, explaining how one led to the other.",
    yes: [
      "Mines and plantations needed many workers, so the Spanish forced Indigenous people into the encomienda and mita, which placed Indigenous people near the bottom of society.",
      "Population loss from disease led colonists to import enslaved Africans, and laws that treated Africans as property put them at the bottom of the hierarchy.",
      "Landowners and mine owners needed labor and stayed wealthy at the top, while the workers they controlled were kept in lower ranks.",
    ],
    no: [
      "\"There were slaves.\" This identifies a group but does not explain how labor needs shaped the hierarchy.",
      "\"The encomienda was a labor system.\" This describes but does not explain the connection to social rank.",
    ],
    example: "Silver mines such as Potosí needed huge numbers of workers, so Spanish officials used the mita to force Indigenous villages to send laborers. Because Indigenous people were defined as a group that owed this labor, the system kept them in a low legal and social position.",
    notExample: "The economy needed workers, and that is why there were castas." },
  { id: "u4-q1c", skill: "u4", type: "fr", set: "u4-s7", part: "SAQ 1", sub: "c", topic: "4.7",
    lead: "Use the passage below to answer all parts of the question that follows.",
    prompt: "Explain ONE way the social hierarchy in ANOTHER colonial society in the period c. 1450 to c. 1750 was similar to OR different from the hierarchy described in the passage.",
    earns: "Names another colonial society and explains a specific similarity or difference with the Spanish American hierarchy.",
    yes: [
      "Difference: in British North American colonies such as Virginia, laws drew a sharp line between white and Black people and had few in-between categories, unlike the many castas of Spanish America.",
      "Similarity: in Portuguese Brazil, a European elite owned sugar plantations worked by enslaved Africans, and people of mixed ancestry held middle positions, much as in Spanish America.",
      "Similarity: in French Saint-Domingue, wealthy planters from Europe sat at the top, free people of color held a middle rank, and enslaved Africans, the majority, were at the bottom.",
    ],
    no: [
      "\"England had a hierarchy too.\" This names no colonial society and does not explain a similarity or difference.",
      "\"The Mughal Empire had a caste system.\" The Mughal Empire was not a colonial society, and the answer does not compare.",
    ],
    example: "In Virginia, colonial laws in the late seventeenth century made slavery a lifelong, inherited status tied to African ancestry and grouped people mostly as either white or Black. This differed from Spanish America, where officials recognized many mixed categories and some families could move up in rank.",
    notExample: "Other colonies were similar because all colonies had rich and poor people." },

  // ---------- SAQ 2: Treaty of Tordesillas ----------
  { id: "u4-q2a", skill: "u4", type: "fr", set: "u4-s8", part: "SAQ 2", sub: "a", topic: "4.4",
    lead: "Use the source below to answer all parts of the question that follows.",
    prompt: "Identify ONE reason Spain and Portugal agreed to the division of lands described in the treaty.",
    earns: "Gives an accurate reason connected to the situation in 1494, such as rivalry after Columbus's voyage or the wish to avoid war.",
    yes: [
      "Columbus's 1493 return made Portugal fear Spain would claim lands it wanted, so both sides wanted to settle claims without war.",
      "Both kingdoms wanted a clear division of the Atlantic so that each could explore and claim lands without interfering with the other.",
      "Portugal wanted to protect its route around Africa to Asia from Spanish claims.",
    ],
    no: [
      "\"They wanted to share the world with England and France.\" The treaty excluded other states.",
      "\"Because they were exploring.\" This is too general to be a reason for this agreement.",
    ],
    example: "After Columbus returned in 1493 claiming lands in the west for Spain, Portugal worried that Spain would threaten its own claims in the Atlantic and Africa, so the two kingdoms drew a line to avoid war.",
    notExample: "Spain and Portugal liked each other." },
  { id: "u4-q2b", skill: "u4", type: "fr", set: "u4-s8", part: "SAQ 2", sub: "b", topic: "4.4",
    lead: "Use the source below to answer all parts of the question that follows.",
    prompt: "Describe ONE way Portugal expanded its maritime empire in the lands or seas on its side of the line in the period c. 1450 to c. 1750.",
    earns: "Describes a specific Portuguese action in Africa, Asia, or Brazil that fits the division in the treaty.",
    yes: [
      "Portugal claimed Brazil after Cabral landed there in 1500, since its eastern bulge lay east of the line, and later built sugar plantations there.",
      "Portugal built forts and trading posts along the African coast, such as Elmina, and traded for gold and enslaved people.",
      "Portugal seized Goa in 1510 and Malacca in 1511 to control spice trade routes in the Indian Ocean.",
    ],
    no: [
      "\"Portugal conquered Mexico.\" Spain, not Portugal, conquered Mexico, and it lay west of the line.",
      "\"Portugal got land.\" This does not describe a specific development.",
    ],
    example: "Portugal used its side of the line to claim Brazil in 1500. Over the next century it set up sugar plantations there that depended on enslaved Africans brought from its posts in West and West Central Africa.",
    notExample: "Portugal became an empire." },
  { id: "u4-q2c", skill: "u4", type: "fr", set: "u4-s8", part: "SAQ 2", sub: "c", topic: "4.4",
    lead: "Use the source below to answer all parts of the question that follows.",
    prompt: "Explain ONE way the division of lands described in the treaty shaped the economy of Spain's empire in the Americas in the period c. 1450 to c. 1750.",
    earns: "Connects the treaty's division to a specific feature of the Spanish colonial economy and explains how the division led to it.",
    yes: [
      "Spain's side of the line held most of the Americas, including the silver of Potosí and Zacatecas, so the Spanish economy came to rest on mining silver with forced Indigenous labor under the mita and shipping it to Europe and Asia.",
      "Africa lay on Portugal's side of the line, so Spain had no slave-trading posts of its own and bought enslaved Africans for its colonies through asiento contracts with Portuguese, Dutch, and later British traders.",
      "With Brazil and the African route to Asia on Portugal's side, Spain reached Asian markets by crossing the Pacific, and the Manila galleons carried American silver from Acapulco to trade for Chinese silk and porcelain.",
    ],
    no: [
      "\"Spain got the Americas.\" This describes the division but does not explain an effect on the economy.",
      "\"Spain built factories in Mexico.\" This is not accurate for the period and is not tied to the treaty.",
    ],
    example: "Because the treaty placed Africa on Portugal's side of the line, Spain had no forts on the African coast. Spanish colonies that wanted enslaved workers had to buy them through the asiento, a contract Spain sold to foreign traders, so Portuguese, Dutch, and later British merchants profited from supplying Spanish America.",
    notExample: "The treaty made Spain rich." },

  // ---------- SAQ 3: no source ----------
  { id: "u4-q3a", skill: "u4", type: "fr", part: "SAQ 3", sub: "a", topic: "4.6",
    lead: "Answer all parts of the question that follows.",
    prompt: "Identify ONE example of resistance to European colonial rule in the Americas or Africa in the period c. 1450 to c. 1750.",
    earns: "Names a specific, accurate act or movement of resistance to European colonizers in the Americas or Africa within the period.",
    yes: [
      "The Pueblo Revolt of 1680, led by Popé, drove the Spanish from New Mexico.",
      "Queen Nzinga of Ndongo and Matamba fought Portuguese expansion in Angola in the seventeenth century.",
      "Runaway enslaved Africans formed maroon communities such as Palmares in Brazil and the Maroons of Jamaica.",
    ],
    no: [
      "\"The Haitian Revolution.\" This began in 1791, after the period.",
      "\"Native Americans fought back.\" This is too general to identify a specific example.",
    ],
    example: "In 1680 the Pueblo peoples of New Mexico, led by Popé, rose up against Spanish rule and forced the Spanish to leave the region for about twelve years.",
    notExample: "People in Africa did not like the Europeans." },
  { id: "u4-q3b", skill: "u4", type: "fr", part: "SAQ 3", sub: "b", topic: "4.6",
    lead: "Answer all parts of the question that follows.",
    prompt: "Describe ONE internal challenge to the power of a state in Afro-Eurasia in the period c. 1450 to c. 1750.",
    earns: "Describes a specific revolt or movement from inside a state in Europe, Asia, or Africa that challenged the ruler's authority, with at least one accurate detail.",
    yes: [
      "The Fronde (1648 to 1653) was a series of revolts by French nobles and the Paris parlement against the growing power of the crown under the young Louis XIV.",
      "Cossacks and peasants led by Stenka Razin revolted against the Russian tsar in 1670 to 1671 along the Volga River.",
      "The Marathas in western India rebelled against Mughal rule under Shivaji in the late seventeenth century and built their own state.",
    ],
    no: [
      "\"The Pueblo Revolt.\" This took place in the Americas, not Afro-Eurasia, and was against a colonial power.",
      "\"Peasants were unhappy in Russia.\" This describes no specific challenge.",
    ],
    example: "In the Fronde, from 1648 to 1653, French nobles and judges rebelled against royal taxes and the power of the king's ministers. The revolts failed, and Louis XIV later worked to keep the nobility under royal control.",
    notExample: "There were many wars in Europe." },
  { id: "u4-q3c", skill: "u4", type: "fr", part: "SAQ 3", sub: "c", topic: "4.6",
    lead: "Answer all parts of the question that follows.",
    prompt: "Explain ONE reason many challenges to state power in the period c. 1450 to c. 1750 did not succeed in overthrowing the state.",
    earns: "Gives a specific reason, tied to an example, that explains why states were able to defeat or outlast challenges in this period.",
    yes: [
      "States used gunpowder weapons and paid armies, which rebels often could not match; Russian armies with artillery crushed Stenka Razin's revolt.",
      "Rulers used local allies and divided their opponents; the Spanish relied on Indigenous allies and later returned to New Mexico after the Pueblo Revolt.",
      "Rebels often wanted different things; in the Fronde, nobles and judges did not stay united, so the crown regained control.",
    ],
    no: [
      "\"Because the state was stronger.\" This restates the question without explaining why.",
      "\"Because the rebels gave up.\" This gives no historical reason or example.",
    ],
    example: "Many states in this period built large armies equipped with firearms and cannons paid for by new taxes. In Russia, the tsar's forces used these advantages to defeat Stenka Razin's revolt in 1671, and Razin was captured and executed.",
    notExample: "The rebels lost because they were not good enough." },

  // ---------- Long essay questions ----------
  { id: "u4-leq1", skill: "u4", type: "essay", kind: "leq", topic: "4.3", reasoning: "Causation",
    prompt: "In the period c. 1450 to c. 1750, contact between the Eastern and Western Hemispheres led to the transfer of plants, animals, diseases, and people. Develop an argument that evaluates the extent to which the Columbian Exchange transformed societies in the Americas in this period.",
    rows: [
      { name: "Thesis/Claim", max: 1, levels: [
        "0 points: restates the prompt, makes a claim that is not historically defensible, or does not take a position on how much the Columbian Exchange transformed American societies.",
        "1 point: makes a historically defensible claim about the extent of change, such as arguing that disease and new labor systems transformed American societies far more than any other factor, or that changes were deep but some Indigenous ways of life continued.",
      ] },
      { name: "Contextualization", max: 1, levels: [
        "0 points: gives no relevant context, or only a phrase or reference.",
        "1 point: describes a broader context relevant to the prompt, such as the long isolation of the Americas from Afro-Eurasia before 1492, European motives for exploration, or the Spanish and Portuguese conquests that followed Columbus's voyages.",
      ] },
      { name: "Evidence", max: 2, levels: [
        "0 points: gives no specific examples relevant to the prompt.",
        "1 point: gives at least two specific examples relevant to the Columbian Exchange in the Americas, such as smallpox epidemics and the arrival of horses.",
        "2 points: uses specific and relevant examples, such as population collapse in Mexico, sugar plantations in Brazil, and mounted hunting on the Great Plains, to support an argument about the extent of transformation.",
      ] },
      { name: "Analysis and Reasoning", max: 2, levels: [
        "0 points: gives no use of historical reasoning to frame the argument.",
        "1 point: uses causation to frame the argument, explaining how specific transfers in the Columbian Exchange caused changes in American societies.",
        "2 points: shows a complex understanding, for example by weighing which effects mattered most, by explaining both change and continuity (such as the survival of Indigenous languages and farming in the Andes), or by connecting changes in the Americas to effects in Africa and Europe.",
      ] },
    ],
    evidence: [
      "Smallpox reached the Caribbean and Mexico in the early sixteenth century and helped weaken the Aztec capital before Cortés captured Tenochtitlan in 1521.",
      "Epidemics of smallpox, measles, and influenza killed a large share of Indigenous peoples in many regions within a century of contact.",
      "Population collapse led Spanish colonists to rely on forced labor systems such as the encomienda and, in the Andes, the mita at the Potosí silver mines.",
      "Sugarcane, brought by Columbus on his second voyage, became the basis of plantation economies in Brazil and the Caribbean.",
      "Labor demand on plantations drove the Atlantic slave trade, which by 1750 had carried millions of enslaved Africans to the Americas.",
      "Horses, which spread north from Spanish colonies, allowed Plains peoples such as the Comanche and Lakota to build mounted hunting and raiding societies.",
      "Cattle, sheep, and pigs spread across the Americas, changing land use and sometimes destroying Indigenous crops.",
      "Wheat and grapes were planted by Spanish settlers, while Indigenous crops such as maize and potatoes remained staples for most people.",
      "Mixed populations of European, Indigenous, and African ancestry led to the casta system in Spanish America.",
      "Many Indigenous communities kept their languages, such as Quechua and Nahuatl, and blended Catholic practices with older beliefs.",
    ],
    model: "Thesis: The Columbian Exchange transformed societies in the Americas to a very great extent, because disease destroyed much of the Indigenous population and new crops and animals brought plantation economies, African slavery, and new ways of life, although many Indigenous communities kept their languages and older farming practices. Outline: (1) Context: before 1492 the Americas had been separated from Afro-Eurasia for thousands of years, so their people had no immunity to Afro-Eurasian diseases. (2) Disease: smallpox weakened the Aztecs before 1521, and epidemics cut populations across Mexico, the Caribbean, and the Andes, which made conquest easier. (3) Labor and the economy: population loss pushed Spain to use the encomienda and mita, and sugar plantations in Brazil and the Caribbean brought in millions of enslaved Africans, creating new racial hierarchies. (4) Animals: horses changed life on the Great Plains, and cattle and pigs changed land use. (5) Limits: Andean villages kept growing potatoes and speaking Quechua, and many people blended Catholic and Indigenous beliefs, so change was deep but not total.",
  },
  { id: "u4-leq2", skill: "u4", type: "essay", kind: "leq", topic: "4.8", reasoning: "Continuity and change",
    prompt: "In the period c. 1450 to c. 1750, European states and trading companies entered the trade networks of the Indian Ocean. Develop an argument that evaluates the extent to which European involvement changed trade in the Indian Ocean in this period.",
    rows: [
      { name: "Thesis/Claim", max: 1, levels: [
        "0 points: restates the prompt, makes a claim that is not historically defensible, or does not take a position on the extent of change.",
        "1 point: makes a historically defensible claim about the extent of change, such as arguing that Europeans added new competition and some monopolies but that Asian merchants and states continued to dominate most Indian Ocean trade.",
      ] },
      { name: "Contextualization", max: 1, levels: [
        "0 points: gives no relevant context, or only a phrase or reference.",
        "1 point: describes a broader context relevant to the prompt, such as the busy monsoon-based trade among East Africa, Arabia, India, Southeast Asia, and China before 1450, or the European search for direct access to spices.",
      ] },
      { name: "Evidence", max: 2, levels: [
        "0 points: gives no specific examples relevant to the prompt.",
        "1 point: gives at least two specific examples relevant to Indian Ocean trade, such as the Portuguese capture of Goa and the founding of the Dutch East India Company.",
        "2 points: uses specific and relevant examples, such as the Portuguese cartaz system, the Dutch spice monopoly in the Banda Islands, and the continued trade of Gujarati merchants, to support an argument about the extent of change.",
      ] },
      { name: "Analysis and Reasoning", max: 2, levels: [
        "0 points: gives no use of historical reasoning to frame the argument.",
        "1 point: uses continuity and change to frame the argument, explaining what changed in Indian Ocean trade and what stayed the same.",
        "2 points: shows a complex understanding, for example by showing that the extent of change differed by region or product (great for nutmeg and cloves, small for Indian textiles), by comparing Portuguese and Dutch methods, or by connecting the Indian Ocean to the global silver trade.",
      ] },
    ],
    evidence: [
      "Vasco da Gama reached Calicut in 1498 after sailing around Africa.",
      "The Portuguese captured Goa (1510), Malacca (1511), and Hormuz (1515) to control key points on trade routes.",
      "The Portuguese cartaz system required Asian ships to buy passes, but many merchants avoided or ignored it.",
      "The Dutch East India Company (VOC), founded in 1602, set up its base at Batavia in 1619.",
      "The Dutch conquered the Banda Islands in 1621 and controlled the world supply of nutmeg by force.",
      "The English East India Company, founded in 1600, set up trading posts at Surat and Madras with permission from Indian rulers.",
      "Mughal emperors such as Jahangir granted trading rights to Europeans on their own terms.",
      "Omani Arabs drove the Portuguese from Muscat in 1650 and took Mombasa in 1698.",
      "Gujarati, Arab, Chinese, and Swahili merchants kept carrying most Indian Ocean trade throughout the period.",
      "Indian cotton textiles remained in high demand, and Europeans often paid for Asian goods with American silver.",
      "Monsoon wind patterns continued to shape the timing of voyages for both Asian and European ships.",
    ],
    model: "Thesis: From 1450 to 1750, European involvement changed Indian Ocean trade to a limited extent; the Portuguese and Dutch used armed ships to take key ports and seize control of some spices, but Asian merchants and powerful land-based states continued to control most of the trade. Outline: (1) Context: before the Portuguese arrived, monsoon winds carried a large trade linking East Africa, Arabia, India, Southeast Asia, and China. (2) Change: the Portuguese took Goa, Malacca, and Hormuz and used the cartaz system; the Dutch VOC conquered the Banda Islands and controlled nutmeg and cloves. (3) Continuity: Gujarati, Arab, Swahili, and Chinese merchants still carried most goods, Mughal rulers set the terms for English traders, and Omani Arabs pushed the Portuguese out of Muscat and Mombasa. (4) Connection: American silver let Europeans buy Asian textiles and spices, which tied the Indian Ocean more tightly to a global economy, but it did not give Europeans control of Asian production. (5) Conclusion: Europeans became new and sometimes violent participants, but the old network and its Asian merchants remained at the center until the British expansion in India after 1750.",
  },

  // ---------- Document-based question ----------
  { id: "u4-dbq1", skill: "u4", type: "essay", kind: "dbq", set: "u4-dbq", topic: "4.2", reasoning: "Causation",
    prompt: "Evaluate the extent to which religion motivated European maritime expansion in the period c. 1450 to c. 1750.",
    rows: [
      { name: "Thesis/Claim", max: 1, levels: [
        "0 points: restates the prompt, makes a claim that is not historically defensible, or does not take a position on how much religion motivated expansion.",
        "1 point: makes a historically defensible claim that establishes a line of reasoning about the role of religion, such as arguing that religion was an important stated goal but that the search for wealth and rivalry among European states drove expansion more strongly.",
      ] },
      { name: "Contextualization", max: 1, levels: [
        "0 points: gives no relevant context, or only a phrase or reference.",
        "1 point: describes a broader context relevant to the prompt, such as the Reconquista and centuries of Christian and Muslim conflict in Iberia, the Protestant Reformation and the rivalry between Catholic and Protestant states, or the European desire to bypass Muslim and Venetian control of the spice trade.",
      ] },
      { name: "Evidence", max: 3, levels: [
        "0 points: does not accurately describe the content of at least three documents.",
        "1 point: accurately describes the content of at least three documents in a way that addresses the prompt.",
        "2 points: uses the content of at least four documents to support an argument about the extent to which religion motivated expansion.",
        "3 points: uses at least four documents to support an argument and also uses at least one specific piece of evidence not found in the documents, such as the New Laws of 1542, the Jesuit missions in Asia, or the Dutch East India Company's spice monopoly.",
      ] },
      { name: "Analysis and Reasoning", max: 2, levels: [
        "0 points: does not explain the point of view, purpose, historical situation, or audience of any document, and shows no complex understanding.",
        "1 point: for at least two documents, explains how the point of view, purpose, historical situation, or audience is relevant to the argument, for example that Henry VII's grant (Document 2) was a legal document meant to secure the crown's claims to new lands, or that Hakluyt (Document 5) wrote to persuade the queen.",
        "2 points: also shows a complex understanding, for example by explaining that religious and economic goals were often linked rather than separate, by showing how motives differed between Catholic Spain and Portugal and Protestant England, or by showing how religion was used to justify conquest and labor.",
      ] },
    ],
    docs: [
      "Document 1 (Inter caetera, 1493): the pope calls on Spain to bring the new peoples to the Catholic faith and also notes gold and spices; supports religion as a motive and shows the Church giving legitimacy to Spanish rule. Sourcing: the pope's purpose was to support the spread of Catholicism and settle Spanish claims.",
      "Document 2 (Henry VII's letters patent to John Cabot, 1496): authorizes a voyage at the Cabots' own cost to find lands of \"the heathen and infidels\" unknown to Christians and to hold them as the king's vassals; shows a religious framing joined to claims of territory and royal rule by a state outside Iberia. Sourcing: a legal grant written to secure the English crown's claims against Spain and Portugal, so it uses the standard language of Christian rulers claiming non-Christian lands.",
      "Document 3 (da Gama journal, 1498): the Portuguese came \"in search of Christians and of spices\"; shows the pairing of religious and commercial goals, with the excitement about rubies and emeralds showing the pull of wealth. Sourcing: a sailor's private journal is less likely to be written for public display.",
      "Document 4 (Requerimiento, 1513): Indigenous peoples must accept the Church and the Spanish monarchs or face war and slavery; shows religion used to justify conquest and forced labor. Sourcing: a legal document read to people who could not understand Spanish, written to make conquest seem lawful.",
      "Document 5 (Hakluyt, 1584): lists spreading the Protestant gospel first, then trade and weakening Spain; shows religious, economic, and political motives mixed together. Sourcing: written to persuade Queen Elizabeth to fund colonies, so it puts religion first to appeal to a Protestant monarch.",
      "Document 6 (First Charter of Virginia, 1606): praises spreading Christianity to Native peoples but grants the right to mine gold, silver, and copper; shows religious language joined to economic goals. Sourcing: a royal charter states official goals and the rights investors expected.",
      "Document 7 (Le Jeune, 1632): a Jesuit urges readers to support converting Native peoples in New France; strongest evidence of sincere religious motive. Sourcing: written for readers in France to win donations and support for the mission.",
    ],
    evidence: [
      "The Reconquista ended in 1492 with the fall of Granada, which tied Spanish identity to crusading Catholicism.",
      "Prince Henry of Portugal sponsored voyages along the West African coast in search of gold, allies against Muslim states, and converts.",
      "The Treaty of Tordesillas (1494) divided newly found lands between Spain and Portugal with papal support.",
      "Spanish silver mines at Potosí produced enormous wealth using forced Indigenous labor under the mita.",
      "Bartolomé de las Casas criticized Spanish abuses, and the New Laws of 1542 tried to limit the encomienda.",
      "Jesuit missionaries such as Francis Xavier and Matteo Ricci worked in Japan and China.",
      "The Dutch East India Company (1602) focused on profit and seized the Banda Islands in 1621 to control nutmeg.",
      "The Protestant Reformation led England and the Netherlands to challenge Catholic Spain and Portugal overseas.",
      "Sugar plantations in Brazil and the Caribbean drove the Atlantic slave trade.",
      "Pilgrims and Puritans settled in New England in the 1620s and 1630s partly to practice their religion freely.",
    ],
    model: "Thesis: In the period c. 1450 to c. 1750, religion motivated European maritime expansion to a significant but secondary extent; Europeans often claimed to spread Christianity, and missionaries sincerely pursued conversion, but the search for wealth and competition among European states drove most voyages, and religion was often used to justify conquest. Outline: (1) Context: the Reconquista and the Reformation made religion central to Iberian and English identity, while the spice trade through Muslim and Venetian hands gave Europeans a strong economic reason to find new routes. (2) Religion as a sincere motive: Le Jeune (Document 7) and the pope (Document 1) focus on conversion; the Jesuits also worked in Asia, as outside evidence shows. (3) Religion joined to wealth and power: the Cabot patent (Document 2), the da Gama journal (Document 3), and the Virginia Charter (Document 6) pair Christian language with claims to land, spices, and mines; the patent's purpose of securing English claims explains why it speaks of \"heathen and infidels\" while granting rule over whatever lands are found. (4) Religion as justification: the Requerimiento (Document 4) used religion to make war and slavery legal, and the Potosí mita shows that profit shaped how colonists treated Indigenous peoples. (5) Rivalry: Hakluyt (Document 5) puts the Protestant gospel first to persuade a Protestant queen, but his other chapters are about reviving trade and weakening Spain; the profit-focused Dutch East India Company shows that Protestant states also put trade first. (6) Conclusion: religion was a real motive for some actors and an important source of legitimacy, but economic and political goals did more to drive expansion.",
  },
];

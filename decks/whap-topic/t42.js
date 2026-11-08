// Topic 4.2 Quiz: Exploration: Causes and Events
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why) => ({ id: "t42-m0" + n, skill: "u4", type: "mcq", set, topic: "4.2", reasoning, question, choices, why, answer: 0 });
const Q = (sub, prompt, earns, yes, no, example, notExample) => ({ id: "t42-q1" + sub, skill: "u4", type: "fr", set: "t42-s3", part: "SAQ 1", sub, topic: "4.2", lead: SAQ, prompt, earns, yes, no, example, notExample });

export const sets = {
  "t42-s1": {
    id: "t42-s1", name: "Zurara on why Prince Henry sent ships to Guinea", intro: ONE,
    sources: [{ title: "Source", blocks: [
      { p: "... after the taking of Ceuta he always kept ships well armed against the Infidel, both for war, and because he had also a wish to know the land that lay beyond the isles of Canary and that Cape called Bojador ... since it seemed to him that if he or some other lord did not endeavour to gain that knowledge, no mariners or merchants would ever dare to attempt it—(for it is clear that none of them ever trouble themselves to sail to a place where there is not a sure and certain hope of profit) ... And this was the first reason of his action." },
      { p: "The second reason was that if there chanced to be in those lands some population of Christians, or some havens, into which it would be possible to sail without peril, many kinds of merchandise might be brought to this realm, which would find a ready market ... and also the products of this realm might be taken there, which traffic would bring great profit to our countrymen." },
      { p: "The third reason was that, as it was said that the power of the Moors in that land of Africa was very much greater than was commonly supposed ... therefore the said Lord Infant exerted himself to cause this to be fully discovered, and to make it known determinately how far the power of those infidels extended." },
      { p: "The fourth reason was because during the one and thirty years that he had warred against the Moors, he had never found a Christian king, nor a lord outside this land, who for the love of our Lord Jesus Christ would aid him in the said war. Therefore he sought to know if there were in those parts any Christian princes ... that they would aid him against those enemies of the faith." },
      { p: "The fifth reason was his great desire to make increase in the faith of our Lord Jesus Christ and to bring to him all the souls that should be saved ..." },
      { cite: "Gomes Eanes de Zurara (also spelled Azurara), royal chronicler of Portugal, The Chronicle of the Discovery and Conquest of Guinea, chapter VII, written c. 1453 at the order of King Afonso V, translated by Charles Raymond Beazley and Edgar Prestage, vol. 1 (London: Hakluyt Society, 1896), as published by Project Gutenberg. \"The Lord Infant\" is Prince Henry of Portugal (1394 to 1460), later called Henry the Navigator; Portugal captured Ceuta in North Africa in 1415. \"Moors\" means Muslims.", url: "https://www.gutenberg.org/files/35738/35738-h/35738-h.htm", kind: "primary" },
    ] }],
  },
  "t42-s2": {
    id: "t42-s2", name: "The Canary Islands before Columbus", intro: "Use the passage below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that the conquest of the Canary Islands, off the Atlantic coast of Africa, was a rehearsal for the conquest of the Americas. Norman adventurers working for the crown of Castile began the conquest in 1402, and in 1479 Portugal recognized Castile's claim to the islands in return for Castile's recognition of Portuguese rights along the African coast. The Indigenous people of the islands, often called Guanches, fought back with stone and wooden weapons, and the last large island, Tenerife, did not fall until 1496. Many islanders were killed, enslaved, or died of diseases brought by the newcomers. Settlers from Castile and Portugal then planted sugar cane and built mills worked by enslaved Africans and islanders. In 1492, Christopher Columbus stopped at the Canaries to take on water and supplies before sailing west, and the islands' trade winds carried his ships across the Atlantic." },
      PRACTICE,
    ] }],
  },
  "t42-s3": {
    id: "t42-s3", name: "Magellan's voyage", intro: SAQ,
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that Ferdinand Magellan's voyage of 1519 to 1522 was driven above all by the race between Portugal and Spain for the spices of Southeast Asia. Magellan was Portuguese, but the king of Spain paid for his fleet of five ships, hoping to reach the Moluccas, the source of cloves and nutmeg, by sailing west and to show that the islands lay on Spain's side of the line set by the Treaty of Tordesillas. The fleet found a strait at the southern tip of South America in 1520 and crossed the Pacific, a voyage far longer than anyone in Europe expected, in which many sailors died of hunger and scurvy. Magellan was killed in a battle at Mactan in the Philippines in 1521. Only one ship, commanded by Juan Sebastián Elcano, returned to Spain in 1522, with eighteen of the roughly 240 men who had set out, but with a cargo of cloves." },
      PRACTICE,
    ] }],
  },
};

export default {
  forms: [
    { id: "t42", name: "Topic 4.2 Quiz: Exploration: Causes and Events", group: "Unit 4: Transoceanic Interconnections",
      items: [
        // ===== Set 1: Zurara =====
        M(1, "t42-s1", "Sourcing and situation", "Zurara's account of Prince Henry's reasons is most likely shaped by the fact that",
          ["Zurara was a royal chronicler writing at the king's order, so he presented Henry's actions as pious and honorable", "Zurara was a West African merchant who traded with the Portuguese", "Zurara wrote centuries later, after Portugal had lost its empire", "Zurara was a critic of Portuguese expansion"],
          ["Correct. Writing for the Portuguese crown, Zurara stresses service to God and king and lists religious reasons alongside profit.",
            "Zurara was Portuguese, the royal chronicler at Lisbon.",
            "He wrote around 1453, while Henry was still alive and the voyages were going on.",
            "He praises Henry and his voyages."]),
        M(2, "t42-s1", "Claims and evidence in sources", "Which of Henry's reasons in the excerpt most clearly shows an economic motive?",
          ["The second, about bringing merchandise to Portugal and taking Portuguese goods to new markets", "The third, about learning how far the power of the Moors extended", "The fourth, about finding Christian princes as allies", "The fifth, about spreading the Christian faith"],
          ["Correct. The second reason speaks of merchandise, a ready market, and \"great profit to our countrymen.\"",
            "The third reason is military and political: knowing the strength of an enemy.",
            "The fourth reason is about allies in a religious war.",
            "The fifth reason is religious."]),
        M(3, "t42-s1", "Contextualization", "Henry's hope of finding \"Christian princes\" in Africa to aid him against the Moors is best understood in the context of",
          ["Iberian Christian kingdoms' long wars against Muslim states and European tales of a Christian king, Prester John, in Africa or Asia", "the Protestant Reformation in Germany", "Portugal's alliance with the Ottoman Empire", "the spread of Buddhism in West Africa"],
          ["Correct. Portugal had fought Muslims in Iberia and North Africa, and Europeans had heard of Christian Ethiopia, which fed hopes of an ally against Islam.",
            "Zurara wrote around 1453. The Reformation began in 1517.",
            "Portugal and the Ottomans were rivals, and they fought in the Indian Ocean in the 1500s.",
            "Buddhism did not spread in West Africa. Islam was spreading there."]),
        M(4, "t42-s1", "Continuity and change", "The voyages Zurara describes led most directly to which later development?",
          ["Portuguese ships rounding Africa and reaching India, as Vasco da Gama did in 1498", "Portugal's conquest of the Aztec Empire", "The end of European interest in African trade", "China's voyages to East Africa under Zheng He"],
          ["Correct. Step by step, Portuguese ships went farther south along Africa until Dias rounded the Cape of Good Hope in 1488 and da Gama reached Calicut.",
            "Spain, not Portugal, conquered the Mexica (Aztec) Empire, in 1521.",
            "European trade with Africa grew, including the Atlantic slave trade.",
            "Zheng He's voyages took place from 1405 to 1433 and were not caused by Portuguese voyages."]),
        // ===== Set 2: The Canary Islands =====
        M(5, "t42-s2", "Comparison", "The conquest of the Canary Islands described in the passage is most similar to the Spanish conquest of the Caribbean in which way?",
          ["In both, Indigenous people were killed, enslaved, or died of disease, and settlers built plantations with enslaved labor.", "In both, Indigenous people defeated the Europeans and kept their independence.", "In both, the conquest took place after 1600.", "In both, the Portuguese crown led the conquest."],
          ["Correct. The passage describes conquest, enslavement, disease, and sugar plantations, the same pattern Spain followed on Hispaniola and other islands after 1492.",
            "The passage says Tenerife, the last large island, fell in 1496.",
            "The passage dates the conquest from 1402 to 1496.",
            "The passage says Castile, a Spanish kingdom, led the conquest, and Portugal recognized its claim."]),
        M(6, "t42-s2", "Causation", "According to the passage, the Canary Islands helped make Columbus's voyage possible because",
          ["they gave his ships a place to take on supplies and put them in the path of trade winds blowing west", "their people gave Columbus maps of the Americas", "they were the home of the sailors who had already reached America", "Portugal paid for his voyage from there"],
          ["Correct. The passage says he took on water and supplies there and that the islands' trade winds carried his ships across.",
            "Nothing in the passage suggests the islanders knew of the Americas.",
            "The passage does not say anyone had reached America from the Canaries before Columbus.",
            "Columbus sailed for Castile. Portugal had turned him down."]),
        M(7, "t42-s2", "Developments and processes", "The agreement of 1479 described in the passage is most similar to which later agreement?",
          ["The Treaty of Tordesillas of 1494, in which Spain and Portugal divided newly found lands between them", "The Peace of Westphalia of 1648, which ended the Thirty Years' War", "The Treaty of Nerchinsk of 1689 between Russia and Qing China", "The Treaty of Nanjing of 1842, which ended the First Opium War"],
          ["Correct. Like the 1479 agreement, Tordesillas settled Castilian and Portuguese claims to lands overseas by dividing them.",
            "Westphalia ended a European war over religion and power, not overseas claims.",
            "Nerchinsk set a land border between two land-based empires in Asia.",
            "Nanjing came centuries later and forced China to open ports to Britain."]),
        M(8, "t42-s2", "Causation", "The sugar mills described in the passage most directly foreshadowed which later development?",
          ["Plantations in Brazil and the Caribbean that depended on enslaved Africans", "The Industrial Revolution in Britain", "The decline of sugar as a trade good after 1500", "Sugar growing in China for export to Europe"],
          ["Correct. The Atlantic islands, first Madeira and the Canaries, then São Tomé, were testing grounds for the sugar plantation system that spread across the Atlantic.",
            "The Industrial Revolution began in the late 1700s with textiles and steam power.",
            "Sugar became one of the most valuable trade goods of the period.",
            "Europe's sugar came from the Atlantic world, not from China."]),
        // ===== SAQ: Magellan's voyage =====
        Q("a", "Identify ONE piece of evidence from the passage that supports the claim that Magellan's voyage was driven by competition between Portugal and Spain.",
          "The response points to something specific in the passage that shows rivalry between the two kingdoms.",
          ["The king of Spain paid for the voyage of a Portuguese navigator, hoping to reach the Moluccas by sailing west.", "The voyage aimed to show that the Moluccas lay on Spain's side of the line drawn by the Treaty of Tordesillas.", "Spain wanted its own route to the spices that Portugal was already reaching by sailing around Africa."],
          ["\"Magellan was killed at Mactan.\" This is in the passage but does not show rivalry between Portugal and Spain.", "\"They wanted to explore.\" This names no evidence about competition.", "\"Portugal paid for the voyage.\" This is wrong: the passage says the king of Spain paid for it."],
          "The passage says the king of Spain paid for the fleet so it could reach the Moluccas by sailing west and show that the islands were on Spain's side of the Tordesillas line. Spain wanted a share of the spice trade that Portugal was already reaching by sailing east.",
          "Spain and Portugal both liked spices."),
        Q("b", "Explain ONE effect of Magellan's voyage or of later Spanish voyages across the Pacific in the period 1450 to 1750.",
          "The response names a specific effect and explains how the voyages led to it.",
          ["Spain claimed the Philippines and founded Manila in 1571, creating a Spanish colony in Asia.", "The Manila galleons linked the Americas and Asia, carrying American silver to China and silk and porcelain back to Mexico.", "The voyage proved that the world's oceans were connected and that the earth was much larger than Europeans had thought, which changed maps and plans for later voyages."],
          ["\"Magellan sailed around the world.\" This restates the voyage but gives no effect.", "\"Spain became rich.\" This is too general and does not explain how the voyages caused it.", "\"Spain took the Moluccas from Portugal for good.\" This is false: in 1529 Spain gave up its claim to the Moluccas in return for a payment."],
          "Magellan's crossing led Spain to claim the Philippines, and in 1571 the Spanish founded Manila. Manila became the Asian end of the galleon trade, in which American silver bought Chinese silk and porcelain, tying the Americas, Asia, and Europe into one trading system.",
          "The voyage was very important."),
        Q("c", "Explain ONE way European maritime exploration in the period 1450 to 1750 differed from the Ming voyages of Zheng He in the early 1400s.",
          "The response makes a specific contrast between European voyages and Zheng He's voyages and explains it.",
          ["Zheng He's voyages ended in 1433 when Ming rulers stopped paying for them, while European states kept sending voyages for centuries because the trade and conquests paid off.", "Zheng He sought tribute and recognition of Ming power, while Europeans such as Magellan sought a share of the spice trade and land to claim.", "European voyages led to conquest and settler colonies in the Americas, while Zheng He's voyages did not set up lasting Chinese colonies."],
          ["\"Zheng He had bigger ships.\" This is a difference, but the response must explain why it matters.", "\"Both wanted to explore.\" This is a similarity, not a difference.", "\"Zheng He reached the Americas before Columbus.\" This claim has no reliable evidence."],
          "Zheng He's fleets sailed to collect tribute and show Ming power, and the voyages stopped in 1433 when the court turned its attention to its northern border. European voyages such as Magellan's were driven by competition for trade and land, and because they brought profits, European states kept funding them and built colonies.",
          "Zheng He was Chinese and Magellan was Portuguese."),
      ] },
  ],
};

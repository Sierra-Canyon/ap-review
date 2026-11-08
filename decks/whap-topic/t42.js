// Topic 4.2 Quiz: Exploration: Causes and Events
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
import { maps } from "../whap/maps.js";

const MAP = "Map drawn for this review from Natural Earth land outlines (public domain). Places, dates, and routes checked against ";
const map = (id, caption, refs) => [{ svg: maps[id], caption }, { cite: MAP + refs + ".", kind: "map" }];
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
    id: "t42-s2", name: "Three voyages from Portugal and Castile", intro: "Use the map below to answer the questions that follow.", label: "Map",
    sources: [{ title: "Map", blocks: map("u4-iberian-voyages", "Three voyages from Portugal and Castile, 1487 to 1498 (routes approximate)", "Encyclopaedia Britannica (\"Vasco da Gama,\" \"Bartolomeu Dias,\" and \"Christopher Columbus: The first voyage\"), World History Encyclopedia, \"Vasco da Gama,\" and South African History Online, \"Bartolomeu Dias\"") }],
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
        // ===== Set 2: Three voyages (map) =====
        M(5, "t42-s2", "Comparison", "Which difference between the Portuguese and Castilian voyages is shown on the map?",
          ["The Portuguese sailed south around Africa toward India, while Columbus sailed west across the Atlantic.", "Only the Castilian voyage reached a port in Asia.", "The Portuguese ships stayed in sight of the coast the whole way, while Columbus left the coast.", "Columbus sailed first, and the Portuguese then followed his route."],
          ["Correct. The map shows Dias and da Gama going south and around the tip of Africa, with da Gama reaching Calicut in India, while Columbus sailed west from the Canary Islands to the Caribbean.",
            "Columbus reached San Salvador and Hispaniola in the Caribbean, not Asia. Da Gama, sailing for Portugal, reached Calicut.",
            "Da Gama's route swings far out into the open South Atlantic, away from the African coast.",
            "Dias sailed in 1487 to 1488, before Columbus's voyage of 1492, and Columbus sailed west, not around Africa."]),
        M(6, "t42-s2", "Causation", "Da Gama's destination, shown on the map, best reflects which motive for Portuguese voyages?",
          ["Buying pepper and other spices directly in India rather than through Venetian and Muslim middlemen", "Finding land in the Caribbean for sugar plantations", "Spreading Protestant Christianity to the peoples of Asia", "Joining Columbus in the islands he had reached"],
          ["Correct. Calicut, on India's Malabar Coast, was a major market for pepper and other spices. Reaching it by sea let Portugal buy spices at the source and cut out the merchants who had carried them overland and through the Mediterranean.",
            "Da Gama sailed to India. The Caribbean islands on the map were reached by Columbus for Castile.",
            "Portugal was a Catholic kingdom, and the Protestant Reformation began in 1517, after this voyage.",
            "The map shows da Gama sailing to India, away from the islands Columbus reached."]),
        M(7, "t42-s2", "Continuity and change", "Comparing Dias's route with da Gama's route on the map shows which change in Portuguese sailing?",
          ["Da Gama left the African coast and sailed a wide arc through the open South Atlantic, using ocean winds instead of following the shore.", "Da Gama sailed east through the Mediterranean and the Red Sea instead of around Africa.", "Da Gama turned back at the same point where Dias had turned back.", "Da Gama sailed west across the Atlantic, as Columbus had done."],
          ["Correct. Dias's dashed line follows the coast of Africa, while da Gama's solid line curves far out to sea, where his fleet was out of sight of land for about three months. The wide route avoided the currents near the Gulf of Guinea and caught winds that carried ships around the Cape.",
            "Both Portuguese routes on the map go around Africa. Neither passes through the Mediterranean or the Red Sea.",
            "Dias turned back at Kwaaihoek, while da Gama went on up the east coast of Africa to Malindi and across to Calicut.",
            "Da Gama swung southwest into the South Atlantic and then east around Africa. He did not cross to the Americas."]),
        M(8, "t42-s2", "Claims and evidence in sources", "The map's label at Malindi best supports which claim about the Indian Ocean in 1498?",
          ["The Portuguese entered a trade network that already existed and relied on local sailors who knew the route to India.", "Portugal already controlled the ports of East Africa before da Gama arrived.", "East African ports had no trade with India before Europeans came.", "The Portuguese crossed to India without any help from people in the region."],
          ["Correct. At Malindi, a pilot who knew the route joined da Gama's fleet and guided it across the Arabian Sea to Calicut. Swahili, Arab, and Indian merchants had sailed these routes with the monsoons for centuries.",
            "Da Gama was the first Portuguese captain to reach East Africa by sea. Portuguese forts there came later, after 1500.",
            "A pilot at Malindi knew the way to India because East African ports already traded with India.",
            "The map's label says a pilot joined at Malindi, so the fleet had local help."]),
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

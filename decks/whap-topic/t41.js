// Topic 4.1 Quiz: Technological Innovations
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
import { maps } from "../whap/maps.js";

const MAP = "Map drawn for this review from Natural Earth land outlines (public domain). Places, dates, and routes checked against ";
const map = (id, caption, refs) => [{ svg: maps[id], caption }, { cite: MAP + refs + ".", kind: "map" }];
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why) => ({ id: "t41-m0" + n, skill: "u4", type: "mcq", set, topic: "4.1", reasoning, question, choices, why, answer: 0 });
const Q = (sub, prompt, earns, yes, no, example, notExample) => ({ id: "t41-q1" + sub, skill: "u4", type: "fr", set: "t41-s3", part: "SAQ 1", sub, topic: "4.1", lead: SAQ, prompt, earns, yes, no, example, notExample });

export const sets = {
  "t41-s1": {
    id: "t41-s1", name: "Francis Bacon on three inventions", intro: ONE,
    sources: [{ title: "Source", blocks: [
      { p: "Again, let any one but consider the immense difference between men's lives in the most polished countries of Europe, and in any wild and barbarous region of the new Indies, he will think it so great, that man may be said to be a god unto man, not only on account of mutual aid and benefits, but from their comparative states—the result of the arts, and not of the soil or climate." },
      { p: "Again, we should notice the force, effect, and consequences of inventions, which are nowhere more conspicuous than in those three which were unknown to the ancients; namely, printing, gunpowder, and the compass. For these three have changed the appearance and state of the whole world: first in literature, then in warfare, and lastly in navigation; and innumerable changes have been thence derived, so that no empire, sect, or star, appears to have exercised a greater power and influence on human affairs than these mechanical discoveries." },
      { cite: "Francis Bacon, English lawyer, philosopher, and Lord Chancellor of England, Novum Organum (The New Instrument), Book I, aphorism 129, published in Latin in London in 1620, as translated in Novum Organum, edited by Joseph Devey (New York: P. F. Collier, 1902), as published by Project Gutenberg. \"The arts\" means skills and techniques; \"the new Indies\" means the Americas.", url: "https://www.gutenberg.org/files/45988/45988-h/45988-h.htm", kind: "primary" },
    ] }],
  },
  "t41-s2": {
    id: "t41-s2", name: "The Manila galleon routes", intro: "Use the map below to answer the questions that follow.", label: "Map",
    sources: [{ title: "Map", blocks: map("u4-galleons", "The Manila galleon routes across the Pacific, 1565 to 1815 (routes approximate)", "Encyclopaedia Britannica, \"Manila galleon,\" and Guampedia (University of Guam), \"Navigation and Cargo of the Manila Galleons\"") }],
  },
  "t41-s3": {
    id: "t41-s3", name: "Cannon at sea", intro: SAQ,
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that putting heavy cannon on ships changed how sea power worked between 1450 and 1750. Earlier naval battles in the Mediterranean and the Indian Ocean were often won by ramming or boarding. By the early 1500s, Portuguese carracks carried guns that could fire through ports cut in their sides, and Portuguese captains used them to bombard ports and to defeat larger fleets, as at the battle of Diu in 1509. The new ships were expensive, and only states or wealthy companies could build and arm many of them. Yet the advantage did not last everywhere. Ottoman fleets in the Red Sea and Omani fleets in the western Indian Ocean also mounted cannon, and in 1650 Omani forces drove the Portuguese out of Muscat." },
      PRACTICE,
    ] }],
  },
};

export default {
  forms: [
    { id: "t41", name: "Topic 4.1 Quiz: Technological Innovations", group: "Unit 4: Transoceanic Interconnections",
      items: [
        // ===== Set 1: Francis Bacon on three inventions =====
        M(1, "t41-s1", "Contextualization", "Bacon's claim that printing, gunpowder, and the compass \"changed the appearance and state of the whole world\" is best understood in the context of which development?",
          ["Europeans had used these technologies, which first developed in China, to spread printed books, build gunpowder armies, and sail to the Americas and Asia.", "European scholars had recently rejected all knowledge that came from outside Europe.", "The Mongol Empire had just closed the overland trade routes between China and Europe.", "European states had banned the use of gunpowder weapons in war."],
          ["Correct. All three inventions began in China and reached Europe through Eurasian exchange. By 1620, printing presses, cannon, and compass navigation had helped Europeans spread new ideas, fight new kinds of wars, and sail to the Americas and Asia.",
            "Bacon praises inventions \"unknown to the ancients\" and does not reject knowledge from elsewhere. European scholars of his day read Arabic and Greek works.",
            "The Mongol Empire had broken apart by the late 1300s, more than two centuries before Bacon wrote, and the passage is about inventions, not trade routes.",
            "European states were building larger gunpowder armies and navies in this period, not banning them."]),
        M(2, "t41-s1", "Sourcing and situation", "Bacon's comparison of \"the most polished countries of Europe\" with \"the new Indies\" most clearly reflects which point of view?",
          ["A belief that European skills and inventions made Europeans superior to the peoples of the Americas", "A belief that climate and soil explain why some societies are richer than others", "Respect for the technologies of the Mexica and the Inca", "A wish to stop European colonization of the Americas"],
          ["Correct. Bacon says the difference is so great that \"man may be said to be a god unto man\" and credits it to \"the arts.\" Ideas like this were used to justify European conquest.",
            "Bacon says the difference is \"the result of the arts, and not of the soil or climate,\" so he rejects this explanation.",
            "Bacon calls the region \"wild and barbarous\" and does not mention Mexica or Inca achievements such as roads, cities, or farming.",
            "Nothing in the excerpt criticizes colonization. Bacon himself was an investor in the Virginia Company."]),
        M(3, "t41-s1", "Claims and evidence in sources", "Which of the following would best support Bacon's claim that the compass changed navigation?",
          ["Portuguese and Spanish ships used compasses and astrolabes to sail out of sight of land into the open Atlantic.", "The printing press made books much cheaper in Europe.", "Ottoman armies used cannon to capture Constantinople in 1453.", "Chinese officials used examinations to choose officials."],
          ["Correct. With a compass to hold a course and an astrolabe to find latitude, sailors could cross open ocean, as on the Portuguese voyages down Africa and Columbus's crossing in 1492.",
            "This supports Bacon's point about printing, not the compass.",
            "This supports Bacon's point about gunpowder, not the compass.",
            "This is about government in China and has nothing to do with navigation."]),
        M(4, "t41-s1", "Comparison", "Bacon's view that inventions matter more than \"any empire, sect, or star\" is most similar to which later idea?",
          ["Enlightenment thinkers' belief that science and reason could bring progress", "The Neo-Confucian view that following tradition keeps society in order", "The Counter-Reformation's call to return to Church tradition", "Social Darwinism's claim that some races were fit to rule"],
          ["Correct. Bacon urged learning by observation and experiment, and eighteenth-century thinkers built on that idea to argue that knowledge could steadily improve human life.",
            "Neo-Confucianism stressed proper relationships and tradition, while Bacon praises new inventions.",
            "The Counter-Reformation defended Church tradition, while Bacon praises discoveries \"unknown to the ancients.\"",
            "Social Darwinism came in the late 1800s and applied ideas about evolution to race and empire. Bacon's main point is about inventions."]),
        // ===== Set 2: The Manila galleon routes (map) =====
        M(5, "t41-s2", "Causation", "On the map, the galleons' route from Manila to Acapulco runs far to the north of their route from Acapulco to Manila. This difference is best explained by the fact that",
          ["sailing ships followed different wind belts: the trade winds blew west in the south, while the westerlies and the Kuroshio Current carried ships east in the north", "the galleons stopped at Japanese ports to buy silver on the way to New Spain", "Portuguese warships blocked the southern route to ships sailing east", "galleons could sail straight into the wind once they reached the open Pacific"],
          ["Correct. The map labels the trade winds along the westward route and the westerlies and the Kuroshio Current along the eastward route. Ships went where the winds would carry them, so the way out and the way back were different.",
            "The map shows no stop in Japan on the eastward route. The galleons crossed the open Pacific from the Philippines to California.",
            "The Portuguese did not patrol the open Pacific. The map gives a natural reason for the northern route: the winds labeled there blow east.",
            "Sailing ships could not sail straight into the wind. That is why the eastward galleons had to go far north to find winds that blew east."]),
        M(6, "t41-s2", "Claims and evidence in sources", "Which claim about ocean travel in this period is best supported by the map?",
          ["Regular round trips across an ocean depended on knowing which winds and currents moved where, not only on building strong ships.", "Sailing ships of this period could travel between any two ports by the shortest route.", "Crossing the Pacific took less time than crossing the Atlantic.", "Chinese fleets controlled the sea routes between Asia and the Americas."],
          ["Correct. The galleons used two separate routes, each placed in a belt of favorable wind, and the voyage against the trade winds still took about twice as long. Knowledge of the winds made the yearly round trip possible.",
            "The routes on the map curve far from a direct line because ships had to follow the winds.",
            "The map gives Pacific crossing times of about 3 and 6 months, but it gives no Atlantic times to compare.",
            "The map shows Spanish ports at both ends of the route. Chinese merchants traded at Manila, but they did not sail the galleons to New Spain."]),
        M(7, "t41-s2", "Causation", "The cargoes shown in the map's legend most directly reflect which development?",
          ["Chinese demand for silver, which drew American silver across the Pacific to pay for Chinese silk and porcelain", "The spread of smallpox from the Americas to Asia", "The shipment of enslaved Africans to plantations in New Spain", "The sale of cotton cloth from British factories to Asian markets"],
          ["Correct. Silver from Spanish American mines sailed west to Manila, where Chinese merchants exchanged silk and porcelain for it. Ming China's need for silver, which it used to pay taxes, made the trade very profitable.",
            "Smallpox spread from Europe and Africa to the Americas, not from the Americas to Asia, and the legend lists goods, not diseases.",
            "Enslaved Africans crossed the Atlantic. The legend shows silver, silk, and porcelain crossing the Pacific.",
            "British factory cloth belongs to the Industrial Revolution, after 1750. The legend shows silk and porcelain moving from Asia to the Americas."]),
        M(8, "t41-s2", "Comparison", "The galleons' use of winds shown on the map is most similar to which earlier practice?",
          ["Indian Ocean merchants timing their voyages to the seasonal monsoon winds", "Mongol rulers setting up relay stations for messengers", "Camel caravans crossing the Sahara between oases", "The Inca building roads and bridges through the Andes"],
          ["Correct. For centuries before 1450, sailors in the Indian Ocean sailed with the monsoons, which blow one way in summer and the other way in winter. Like the galleon pilots, they planned routes around the winds.",
            "Relay stations carried messages over land. The map shows ships using ocean winds.",
            "Caravans crossed deserts on land, and the map is about sailing with winds and currents.",
            "Roads and bridges moved people on land, not ships at sea."]),
        // ===== SAQ: Cannon at sea =====
        Q("a", "Identify ONE piece of historical evidence, not mentioned in the passage, that supports the passage's claim that ships armed with cannon helped Europeans gain power at sea between 1450 and 1750.",
          "The response names a specific use of armed ships by a European state or company in the period that the passage does not already give.",
          ["Albuquerque's armed fleet captured Goa in 1510 and Malacca in 1511, giving Portugal bases in Asia.", "Dutch East India Company fleets took Malacca from the Portuguese in 1641.", "Portugal's cartaz system made Asian merchant ships buy passes or risk being attacked by Portuguese warships."],
          ["\"The Portuguese won at Diu in 1509.\" The passage already gives this example.", "\"European ships had guns.\" This restates the passage without specific evidence.", "\"The Spanish Armada defeated England in 1588.\" This is wrong: the Armada failed."],
          "The Portuguese governor Afonso de Albuquerque used armed ships to capture Malacca in 1511. Holding this port on the strait between the Indian Ocean and the South China Sea let Portugal tax and control part of the spice trade.",
          "European ships were very powerful."),
        Q("b", "Explain ONE reason, other than military technology, that helped European states or companies expand their trade in Asia in the period 1450 to 1750.",
          "The response gives a specific reason that is not a weapon and explains how it helped Europeans expand trade in Asia.",
          ["American silver gave Europeans something Chinese and Indian merchants wanted, which let them buy silk, porcelain, and textiles.", "Joint-stock companies such as the Dutch East India Company raised large sums from many investors, so they could pay for long and risky voyages.", "Asian rulers such as the Mughal emperors allowed Europeans to trade at ports like Surat because the trade brought them customs revenue."],
          ["\"They had better ships with cannon.\" The prompt asks for a reason other than military technology.", "\"Europeans were rich.\" This gives no specific reason and no explanation.", "\"The Chinese government invited Europeans to trade at every port.\" This is false: the Qing limited Europeans to Canton after 1757 and kept tight control of trade."],
          "Joint-stock companies such as the Dutch East India Company, founded in 1602, sold shares to many investors. Spreading the cost and risk let the company send many ships to Asia and set up trading posts, even though some voyages failed.",
          "Europeans wanted to trade more."),
        Q("c", "Explain ONE way the passage's last two sentences show a limit on European power in the Indian Ocean in the period 1450 to 1750.",
          "The response explains how Asian or Middle Eastern states also used gunpowder at sea or resisted Europeans, limiting European control.",
          ["Ottoman and Omani fleets also mounted cannon, so the Portuguese did not have a lasting advantage and could not control all of the Indian Ocean.", "Oman's capture of Muscat in 1650 shows that a state in the region could adopt the same technology and push the Portuguese out of a key port.", "Because other powers copied the technology, Europeans held only scattered ports, while most Indian Ocean trade stayed in the hands of Asian and Arab merchants."],
          ["\"The Portuguese lost Muscat.\" This restates the passage without explaining what it shows about the limits of European power.", "\"The Ottomans were strong.\" This does not connect to power at sea or to the passage.", "\"Europeans controlled all trade in the Indian Ocean by 1650.\" This is false and contradicts the passage."],
          "The passage says Ottoman and Omani fleets also mounted cannon and that Oman drove the Portuguese out of Muscat in 1650. This shows that gunpowder ships did not give Europeans a lasting monopoly: regional powers adopted the same weapons, so the Portuguese held only scattered ports and could not control the whole ocean.",
          "The Europeans had some problems."),
      ] },
  ],
};

// Topic 6.2 Quiz: State Expansion
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
import { maps } from "../whap/maps.js";
const MAP = "Map drawn for this review from Natural Earth land outlines (public domain). Places and dates checked against ";
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why, difficulty) => ({ id: "t62-m0" + n, skill: "u6", type: "mcq", set, topic: "6.2", reasoning, question, choices, why, difficulty, answer: 0 });
const Q = (sub, prompt, earns, yes, no, example, notExample) => ({ id: "t62-q1" + sub, skill: "u6", type: "fr", set: "t62-s3", part: "SAQ 1", sub, topic: "6.2", lead: SAQ, prompt, earns, yes, no, example, notExample });

export const sets = {
  "t62-s1": {
    id: "t62-s1", name: "The Treaty of Waitangi, 1840", intro: ONE,
    sources: [{ title: "Source", blocks: [
      { p: "Her Majesty Victoria Queen of the United Kingdom of Great Britain and Ireland regarding with Her Royal Favor the Native Chiefs and Tribes of New Zealand and anxious to protect their just Rights and Property and to secure to them the enjoyment of Peace and Good Order has deemed it necessary in consequence of the great number of Her Majesty's Subjects who have already settled in New Zealand and the rapid extension of Emigration both from Europe and Australia which is still in progress to constitute and appoint a functionary properly authorized to treat with the Aborigines of New Zealand for the recognition of Her Majesty's Sovereign authority over the whole or any part of those islands ..." },
      { p: "Article the First. The Chiefs of the Confederation of the United Tribes of New Zealand and the seperate and independent Chiefs who have not become members of the Confederation cede to Her Majesty the Queen of England absolutely and without reservation all the rights and powers of Sovereignty which the said Confederation or Individual Chiefs respectively exercise or possess ..." },
      { p: "Article the Second. Her Majesty the Queen of England confirms and guarantees to the Chiefs and Tribes of New Zealand and to the respective families and individuals thereof the full exclusive and undisturbed possession of their Lands and Estates Forests Fisheries and other properties ... but the Chiefs ... yield to Her Majesty the exclusive right of Preemption over such lands as the proprietors thereof may be disposed to alienate ..." },
      { cite: "Treaty of Waitangi, English text, signed at Waitangi, New Zealand, February 6, 1840, by William Hobson for the British crown and by Māori chiefs, as published on Wikisource (spelling as in the original). Most chiefs signed a Māori-language version, which promised the crown kāwanatanga (governorship) while guaranteeing the chiefs tino rangatiratanga (full chieftainship) over their lands and treasures. \"Preemption\" meant that Māori could sell land only to the crown.", url: "https://en.wikisource.org/wiki/Treaty_of_Waitangi", kind: "primary" },
    ] }],
  },
  "t62-s2": {
    id: "t62-s2", name: "Russia's advance into Central Asia", intro: "Use the map below to answer the questions that follow.", label: "Map",
    sources: [{ title: "Map", blocks: [
      { svg: maps["u6-central-asia"], caption: "Russia's advance into Central Asia, 1853 to 1884: the year Russian forces took or founded each place" },
      { cite: MAP + "Encyclopaedia Britannica (\"Konstantin Petrovich Kaufmann,\" \"Uzbekistan,\" \"Turkmenistan,\" and the entries for each city) and Wikipedia, \"Russian conquest of Central Asia\".", kind: "map" },
    ] }],
  },
  "t62-s3": {
    id: "t62-s3", name: "The United States in the Philippines", intro: SAQ,
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that the war in the Philippines made the United States an imperial power in Asia. In 1898, during a war with Spain over Cuba, the American navy destroyed the Spanish fleet in Manila Bay. Filipino revolutionaries led by Emilio Aguinaldo, who had been fighting Spain since 1896, declared independence. But in the peace treaty, Spain sold the Philippines to the United States for 20 million dollars, and American leaders decided to keep the islands as a base for trade with China. Fighting between American and Filipino forces began in 1899. The war lasted until 1902, and in some regions longer, and cost the lives of more than 4,000 American soldiers and hundreds of thousands of Filipinos, most of them civilians who died of disease and hunger. Critics in the United States formed an Anti-Imperialist League to oppose the war." },
      PRACTICE,
    ] }],
  },
};

export default {
  forms: [
    { id: "t62", name: "Topic 6.2 Quiz: State Expansion", group: "Unit 6: Consequences of Industrialization",
      items: [
        // ===== Set 1: Waitangi =====
        M(1, "t62-s1", "Contextualization", "According to the preamble, the British crown sought the treaty mainly because of",
          ["the settlers already arriving in New Zealand", "a French plan to annex the South Island that year", "Māori raids on British whaling stations in Australia", "the discovery of gold on New Zealand's rivers"],
          ["Correct. It cites \"the great number of Her Majesty's Subjects who have already settled\" and the \"rapid extension of Emigration.\"",
            "French settlers did land at Akaroa in 1840, but the preamble never mentions France.",
            "The preamble mentions no raids; it speaks of protecting the chiefs' \"just Rights and Property.\"",
            "New Zealand's major gold rushes began in the 1860s, two decades after the treaty."],
          "easy"),
        M(2, "t62-s1", "Developments and processes", "The treaty best illustrates which way states expanded in the 1800s?",
          ["Settlement backed by a treaty claiming sovereignty", "A trading-post empire that held only coastal forts", "Conquest of nomads by a land empire's cavalry armies", "Purchase of a colony from another European power"],
          ["Correct. As settlers arrived, Britain claimed sovereignty and control over land sales through a treaty with Indigenous leaders.",
            "The treaty claims sovereignty over \"the whole or any part of those islands,\" not just ports.",
            "No cavalry conquest is described; the treaty is a negotiated cession.",
            "The treaty is made with Māori chiefs, not with another European state."],
          "easy"),
        M(3, "t62-s1", "Sourcing and situation", "A historian comparing the English and Māori versions of the treaty would most likely conclude that",
          ["the two sides may have understood sovereignty differently", "the Māori version gave the crown more power than the English", "the English version guaranteed Māori land more firmly", "the chiefs signed only the English version of the treaty"],
          ["Correct. The English text says chiefs cede \"all the rights and powers of Sovereignty,\" while the Māori text promised them continued full chieftainship.",
            "The Māori version promised the crown only governorship and kept full chieftainship for the chiefs, so it gave the crown less.",
            "Both versions guaranteed Māori possession of land; the difference lay in who held final authority.",
            "The source note says most chiefs signed the Māori-language version."],
          "difficult"),
        M(4, "t62-s1", "Continuity and change", "Which later development most directly followed from disputes over the treaty's land provisions?",
          ["Wars with the British and the loss of much Māori land", "Māori ownership of most New Zealand land by 1900", "A ban on British emigration to New Zealand after 1850", "The handing of New Zealand to French rule in the 1860s"],
          ["Correct. Disputed land sales and confiscations led to the New Zealand Wars of the 1840s and 1860s, and by 1900 Māori held only a small share of the land.",
            "This reverses the outcome; Māori lost most of their land by 1900.",
            "British settlement grew rapidly after 1850.",
            "New Zealand remained British."],
          "moderate"),
        // ===== Set 2: Map of Russia in Central Asia =====
        M(5, "t62-s2", "Developments and processes", "Which of the following best describes the pattern shown on the map?",
          ["Russia moved south over land from the steppe toward Persia over about thirty years.", "Russia moved east by sea, taking ports on the coast of the Indian Ocean over thirty years.", "Russia lost its cities in Central Asia to the Qing Empire in the years after 1865.", "Russia took the whole region in one campaign in the 1850s and then stopped."],
          ["Correct. The years run from Perovsk in 1853, on the steppe, to Tashkent and Samarkand in the 1860s and Merv in 1884, near Persia and Afghanistan.",
            "Every place on the map is inland except Krasnovodsk, a port on the Caspian Sea, which has no outlet to any ocean.",
            "The map shows only Russian gains, and none of the places marked belonged to the Qing.",
            "The years on the map stretch from 1853 to 1884, so the conquest took about thirty years."],
          "easy"),
        M(6, "t62-s2", "Comparison", "The expansion shown on the map was most similar to which other development of the nineteenth century?",
          ["The westward expansion of the United States over land", "Britain's taking of Hong Kong after the First Opium War", "The independence of Spain's colonies in the Americas", "The opening of Japan's ports to Western trade after 1854"],
          ["Correct. Like Russia, the United States was a land-based state that pushed its borders outward into neighboring lands held by Native American nations and Mexico.",
            "Hong Kong was one island port gained by a sea power, not a steady advance over land like the one on the map.",
            "Latin American independence shrank an empire, while the map shows one growing.",
            "Japan's opening was a change in trade policy forced on Japan, not the conquest of territory."],
          "moderate"),
        M(7, "t62-s2", "Contextualization", "The location of Russia's latest gains on the map, such as Merv in 1884, best helps explain which development of the 1880s?",
          ["Rising tension with Britain over Afghanistan", "Britain's occupation of Egypt in 1882", "A Persian conquest of western Afghanistan", "The Qing reconquest of Xinjiang in 1877"],
          ["Correct. By the 1880s Russia's gains reached the edge of Afghanistan, which Britain treated as a buffer protecting India, and the two empires competed there in the rivalry called the Great Game.",
            "Britain did occupy Egypt in 1882, but to guard the sea route to India through the Suez Canal, not because of Russia's advance on the map.",
            "Persia did not conquer Afghanistan; Afghanistan stayed independent as a buffer between the Russian and British empires.",
            "The Qing did retake Xinjiang, but that is east of the map's gains and earlier than Merv, so it does not follow from them."],
          "difficult"),
        M(8, "t62-s2", "Claims and evidence in sources", "Which conclusion about Russian rule in Central Asia is best supported by the map?",
          ["Bukhara and Khiva kept their own rulers as protectorates.", "Russia ruled every state in the region directly from the start.", "Russia's advance began near Persia and moved north to the steppe.", "Russia's conquests in the region were complete before 1861."],
          ["Correct. The map labels Bukhara and Khiva as protectorates, states that kept their own rulers under Russian control, while places such as Tashkent and Kokand were taken outright.",
            "The map marks Bukhara and Khiva as protectorates, not lands under direct rule.",
            "This reverses the map. The earliest year, 1853, is on the steppe in the north, and the latest, 1884, is in the south.",
            "Most of the years on the map, from Tashkent in 1865 to Merv in 1884, come after 1861."],
          "moderate"),
        // ===== SAQ: The Philippines =====
        Q("a", "Identify ONE reason, described in the passage, that the United States kept the Philippines after 1898.",
          "The response names one reason from the passage.",
          ["American leaders wanted the islands as a base for trade with China.", "The United States bought the islands from Spain for 20 million dollars in the peace treaty.", "The American victory in Manila Bay gave the United States control of the area."],
          ["\"Filipinos asked to be ruled by the United States.\" The passage says they declared independence.", "\"The Philippines were rich in oil.\" This is not in the passage.", "\"The United States wanted to help Spain.\" This is not supported."],
          "The passage says American leaders decided to keep the islands as a base for trade with China, whose large market many Americans hoped to enter.",
          "The United States wanted the islands."),
        Q("b", "Explain ONE way the American conquest of the Philippines was similar to European imperial expansion in the period 1750 to 1900.",
          "The response explains a specific similarity.",
          ["Like European powers, the United States fought a long war against people seeking independence, as the French did in Algeria.", "Like Britain or Germany, the United States sought overseas bases and markets, such as coaling stations and access to China's trade.", "Like European empires, the United States justified its rule by claiming to prepare a people for self-government."],
          ["\"Both had wars.\" This is too vague.", "\"The United States freed the Philippines in 1898.\" This is false.", "\"Europe had no colonies in Asia.\" This is false."],
          "Like Britain and France, the United States wanted overseas bases and access to Asian markets, especially China. To keep the Philippines, it fought a long war against Filipino nationalists, much as European powers fought resistance movements in Africa and Asia.",
          "The United States was like Europe."),
        Q("c", "Explain ONE way people within an imperial country opposed imperial expansion in the period 1750 to 1900.",
          "The response names a specific example of opposition within an imperial power and explains it.",
          ["Members of the American Anti-Imperialist League, including Mark Twain, argued that ruling the Philippines without consent violated American principles.", "British critics such as J. A. Hobson argued that empire benefited a small group of investors while costing the nation money and lives.", "In Britain, some Liberals and Irish members of Parliament opposed the Boer War of 1899 to 1902 as an unjust war for gold and land."],
          ["\"Some people did not like empire.\" This names no specific opposition.", "\"The Anti-Imperialist League supported the war.\" This is wrong.", "\"Everyone in Britain supported empire.\" This is false."],
          "In the United States, the Anti-Imperialist League, whose members included Mark Twain, argued that governing Filipinos without their consent betrayed the principle of the Declaration of Independence that governments get their power from the governed.",
          "Some people were against it."),
      ] },
  ],
};

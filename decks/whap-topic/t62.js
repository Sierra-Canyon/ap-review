// Topic 6.2 Quiz: State Expansion
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why) => ({ id: "t62-m0" + n, skill: "u6", type: "mcq", set, topic: "6.2", reasoning, question, choices, why, answer: 0 });
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
    id: "t62-s2", name: "Russia in Central Asia", intro: "Use the passage below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that Russia's conquest of Central Asia in the 1860s and 1870s was as much a part of the new imperialism as Europe's conquests overseas. Russian armies with modern rifles and artillery took the city of Tashkent in 1865 and Samarkand in 1868, made the emirate of Bukhara and the khanate of Khiva protectorates, and annexed the khanate of Kokand in 1876. Officials argued that the steppe frontier had to be secured and that Russia was bringing order to unstable states. Russia also wanted cotton: when the American Civil War cut supplies, Russian mills looked to Central Asia, and the colonial government encouraged farmers to plant cotton for export to Russia. Britain feared Russian armies were moving toward India, and the two empires competed for influence in Afghanistan and Persia in a rivalry the British called the Great Game." },
      PRACTICE,
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
          ["the growing number of British and other settlers arriving in New Zealand", "a request from France", "a war between Māori chiefs and Australia", "the discovery of gold in New Zealand in 1840"],
          ["Correct. It cites \"the great number of Her Majesty's Subjects who have already settled\" and continuing emigration.",
            "France is not mentioned.",
            "No such war is mentioned.",
            "The major gold rushes came in the 1860s."]),
        M(2, "t62-s1", "Developments and processes", "The treaty best illustrates which way states expanded in the 1800s?",
          ["Settler colonization backed by treaties claiming sovereignty over Indigenous lands", "Trading-post empires that held only ports", "Conquest by a land-based empire's cavalry", "Purchase of land from another European power"],
          ["Correct. As settlers arrived, Britain claimed sovereignty and control over land sales through a treaty with Indigenous leaders.",
            "The treaty claims sovereignty over the islands, not just ports.",
            "No conquest by cavalry is described.",
            "The treaty is with Māori chiefs, not a European power."]),
        M(3, "t62-s1", "Sourcing and situation", "A historian comparing the English and Māori versions of the treaty would most likely conclude that",
          ["the two sides may have understood the treaty differently, especially about sovereignty and authority", "the two versions were identical in meaning", "the Māori version gave Britain more power than the English one", "only the English version was signed"],
          ["Correct. The English text says chiefs cede \"all the rights and powers of Sovereignty,\" while the Māori text promised them continued chieftainship.",
            "The source note describes differences in meaning.",
            "The Māori version gave Britain governorship while promising chiefs full chieftainship, so it gave Britain less.",
            "The note says most chiefs signed the Māori version."]),
        M(4, "t62-s1", "Continuity and change", "Which later development most directly followed from disputes over the treaty's land provisions?",
          ["Wars between British forces and Māori in the 1840s and 1860s, and the loss of much Māori land", "Māori control of all land in New Zealand by 1900", "The end of British settlement in New Zealand", "New Zealand's annexation by France"],
          ["Correct. Land sales and confiscations led to the New Zealand Wars, and by 1900 Māori held only a small share of the land.",
            "Māori lost most of their land.",
            "Settlement grew rapidly.",
            "New Zealand remained British."]),
        // ===== Set 2: Russia in Central Asia =====
        M(5, "t62-s2", "Causation", "According to the passage, one economic reason for Russian expansion into Central Asia was",
          ["the desire for cotton for Russian mills", "the search for spices", "the need for slaves for Russian plantations", "the hope of finding a sea route to India"],
          ["Correct. The passage says Russian mills looked to Central Asia for cotton when the American Civil War cut supplies.",
            "Spices are not mentioned.",
            "The passage does not mention slaves.",
            "Central Asia has no sea route to India."]),
        M(6, "t62-s2", "Comparison", "Russia's conquest of Central Asia was most similar to European overseas imperialism in that both",
          ["used industrial weapons to conquer other peoples and turned colonies toward producing raw materials", "were carried out entirely by sea", "ended the conquering states' industrial growth", "were opposed by every European power equally"],
          ["Correct. Modern rifles and artillery gave Russia the advantage, and Central Asia became a source of cotton.",
            "Russia expanded overland.",
            "Russian industry grew.",
            "Britain opposed Russian expansion, but the passage does not say every power did."]),
        M(7, "t62-s2", "Contextualization", "The Great Game described in the passage is best understood in the context of",
          ["rivalry among industrial powers for territory and influence in Asia", "the Mongol conquests", "the Cold War between the United States and the Soviet Union", "the wars of the French Revolution"],
          ["Correct. Britain and Russia competed for influence in Afghanistan and Persia as both empires expanded.",
            "The Mongols lived centuries earlier.",
            "The Cold War came in the 1900s.",
            "Those wars ended in 1815."]),
        M(8, "t62-s2", "Claims and evidence in sources", "Which evidence from the passage best supports the claim that Russia used both conquest and indirect rule?",
          ["Russia annexed Kokand but made Bukhara and Khiva protectorates.", "Russian armies had modern rifles.", "Britain feared Russian armies were moving toward India.", "Officials argued the frontier had to be secured."],
          ["Correct. Annexation is direct rule, while protectorates left local rulers in place under Russian control.",
            "This shows military advantage, not types of rule.",
            "This shows British concern.",
            "This shows a justification."]),
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

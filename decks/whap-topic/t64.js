// Topic 6.4 Quiz: Global Economic Development
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why) => ({ id: "t64-m0" + n, skill: "u6", type: "mcq", set, topic: "6.4", reasoning, question, choices, why, answer: 0 });
const Q = (sub, prompt, earns, yes, no, example, notExample) => ({ id: "t64-q1" + sub, skill: "u6", type: "fr", set: "t64-s3", part: "SAQ 1", sub, topic: "6.4", lead: SAQ, prompt, earns, yes, no, example, notExample });

export const sets = {
  "t64-s1": {
    id: "t64-s1", name: "Robert Fortune brings tea plants from China to India, 1852", intro: ONE,
    sources: [{ title: "Source", blocks: [
      { p: "... Shortly after the publication of that volume I was deputed by the Honourable the Court of Directors of the East India Company to proceed to China for the purpose of obtaining the finest varieties of the Tea-plant, as well as native manufacturers and implements, for the Government Tea plantations in the Himalayas. On the 20th of June, 1848, I left Southampton, with many other passengers, in the Peninsular and Oriental Company's steam-ship 'Ripon' ... and landed in Hong-kong on the 14th of August." },
      { p: "... The important objects of my mission have been brought to a successful termination. Upwards of twenty thousand tea-plants, eight first-rate manufacturers, and a large supply of implements were procured from the finest tea-districts of China, and conveyed in safety to the Himalayas." },
      { p: "... The Chinese manufacturers whom I had brought round from China were located on this farm. They had nice cottages and gardens given them, and everything was done which could add to their comfort in a strange land. On the morning I left Paorie the poor fellows got up early, and were dressed in their holiday clothes to bid me good bye. They brought me a packet of letters addressed to their relations in China, which they begged me to forward ..." },
      { cite: "Robert Fortune, Scottish botanist, A Journey to the Tea Countries of China; including Sung-Lo and the Bohea Hills; with a Short Notice of the East India Company's Tea Plantations in the Himalaya Mountains (London: John Murray, 1852), preface and chapter XXII, as digitized by the Internet Archive. \"Manufacturers\" here means skilled Chinese tea makers. Fortune traveled in parts of China closed to foreigners, often in Chinese dress.", url: "https://archive.org/details/journeytoteacoun00fort", kind: "primary" },
    ] }],
  },
  "t64-s2": {
    id: "t64-s2", name: "Palm oil and cocoa in West Africa", intro: "Use the passage below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that West Africa's place in the world economy changed in the 1800s from supplying enslaved people to supplying raw materials for industry. After Britain abolished its slave trade in 1807, British merchants bought more palm oil from the Niger Delta and other coastal regions, where African traders and rulers controlled its production. Factories in Britain used palm oil to make soap and candles and to grease machinery. Later in the century, cocoa became a major export. Farmers in the British Gold Coast colony began planting cocoa trees in the 1880s, and within about thirty years the colony was the world's largest cocoa producer. Most of the cocoa was grown by African farmers on their own land, and some grew rich, but prices were set in distant markets, and the colony's economy came to depend on one crop." },
      PRACTICE,
    ] }],
  },
  "t64-s3": {
    id: "t64-s3", name: "Diamonds and gold in South Africa", intro: SAQ,
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that the discovery of minerals transformed southern Africa in the late 1800s. Diamonds were found near Kimberley in 1867, and by 1888 Cecil Rhodes's company, De Beers, controlled almost all diamond mining there. In 1886, gold was discovered on the Witwatersrand in the Boer republic of the Transvaal, and the mining town of Johannesburg grew within a few years into the largest city in the region. The deep gold mines required huge investments from European banks and hundreds of thousands of workers. African men came from across southern Africa as migrant laborers on short contracts, lived in closed compounds, and were paid far less than white miners. Rivalry over the wealth of the Transvaal helped lead to war between Britain and the Boer republics in 1899." },
      PRACTICE,
    ] }],
  },
};

export default {
  forms: [
    { id: "t64", name: "Topic 6.4 Quiz: Global Economic Development", group: "Unit 6: Consequences of Industrialization",
      items: [
        // ===== Set 1: Robert Fortune =====
        M(1, "t64-s1", "Sourcing and situation", "The main purpose of Fortune's mission, as he describes it, was to",
          ["obtain tea plants, skilled workers, and tools from China for the East India Company's plantations in India", "open Chinese ports to British trade by treaty", "study Chinese religion", "sell British cloth in China"],
          ["Correct. He says the Company sent him to obtain \"the finest varieties of the Tea-plant, as well as native manufacturers and implements.\"",
            "Treaties are not part of his mission.",
            "His purpose is plants and tea-making.",
            "He does not mention selling cloth."]),
        M(2, "t64-s1", "Causation", "Fortune's mission most directly contributed to which development?",
          ["The growth of tea plantations in British India, which reduced Britain's dependence on Chinese tea", "The end of tea drinking in Britain", "China's conquest of the Himalayas", "The collapse of the East India Company's plantations in 1852"],
          ["Correct. By the late 1800s, India and Ceylon supplied most of the tea drunk in Britain.",
            "Tea drinking grew.",
            "The plantations were in British India.",
            "He reports the mission's success."]),
        M(3, "t64-s1", "Developments and processes", "The source best illustrates which feature of the global economy in the 1800s?",
          ["Imperial powers moved plants and expertise around the world to grow profitable crops in their colonies", "Asian states controlled the trade in all cash crops", "Plantations disappeared after the end of slavery", "Industrial countries stopped importing raw materials"],
          ["Correct. Similar transfers moved rubber from Brazil to Southeast Asia and cinchona, the source of quinine, from South America to India and Java.",
            "Britain sought to grow tea outside China's control.",
            "Plantations spread, using new forms of labor.",
            "Imports of raw materials grew."]),
        M(4, "t64-s1", "Sourcing and situation", "Fortune's description of the Chinese tea makers as \"poor fellows\" who were given \"nice cottages\" most likely reflects",
          ["his sympathy for them, along with his view of the mission as kind and successful", "the tea makers' own account of their lives", "a government report on wages in India", "his criticism of the East India Company"],
          ["Correct. Fortune presents his own role favorably; the tea makers' own views are not recorded here.",
            "The account is Fortune's, not theirs.",
            "This is a travel book, not a wage report.",
            "He praises the plantations."]),
        // ===== Set 2: Palm oil and cocoa =====
        M(5, "t64-s2", "Continuity and change", "According to the passage, the main change in West Africa's role in the world economy in the 1800s was",
          ["a shift from exporting enslaved people to exporting raw materials for industry", "a shift from farming to industrial manufacturing", "the end of all trade with Europe", "a shift from exporting cocoa to exporting palm oil"],
          ["Correct. After 1807, palm oil and later cocoa became major exports.",
            "The passage describes exports of raw materials, not factories.",
            "Trade with Europe grew.",
            "Palm oil came first and cocoa later."]),
        M(6, "t64-s2", "Causation", "British demand for palm oil grew mainly because",
          ["British factories used it for soap, candles, and lubricating machines", "Britain banned the use of palm oil at home", "Africans stopped growing food", "palm oil was used to make cotton cloth"],
          ["Correct. The passage connects demand to industrial uses.",
            "The passage describes rising use in Britain.",
            "This is not in the passage.",
            "The passage names soap, candles, and grease."]),
        M(7, "t64-s2", "Claims and evidence in sources", "Which evidence from the passage best supports the claim that Africans kept some control over their economies?",
          ["Most cocoa was grown by African farmers on their own land.", "The Gold Coast became the world's largest cocoa producer.", "Prices were set in distant markets.", "British factories used palm oil to grease machinery."],
          ["Correct. Unlike plantation colonies, the cocoa economy rested on African-owned farms.",
            "This shows growth, not who controlled it.",
            "This shows a limit on African control.",
            "This shows British demand."]),
        M(8, "t64-s2", "Comparison", "The Gold Coast's dependence on cocoa is most similar to which other development of the period?",
          ["Egypt's dependence on cotton exports", "Britain's industrial economy based on many manufactures", "Japan's industrialization under the Meiji government", "Germany's chemical industry"],
          ["Correct. Both economies came to depend on one export crop whose price was set abroad.",
            "Britain's economy was diversified and industrial.",
            "Japan built industry.",
            "Germany's chemical industry was industrial."]),
        // ===== SAQ: Diamonds and gold =====
        Q("a", "Identify ONE way, described in the passage, that mining changed southern Africa.",
          "The response names one change from the passage.",
          ["Johannesburg grew quickly into the largest city in the region.", "Hundreds of thousands of African men became migrant laborers in the mines.", "De Beers came to control almost all diamond mining."],
          ["\"Diamonds were found.\" This is a discovery, not a change it caused.", "\"Mining ended in 1886.\" This is false.", "\"Africans owned the mines.\" This is not supported."],
          "The passage says African men came from across southern Africa to work in the mines on short contracts, living in closed compounds far from their families.",
          "Mining was important."),
        Q("b", "Explain ONE way the mining economy described in the passage was connected to industrialization elsewhere in the world.",
          "The response explains a specific link between South African mining and industrial economies.",
          ["European banks invested heavily in the deep gold mines, showing how capital from industrial countries flowed into colonial economies.", "Gold from South Africa backed currencies under the gold standard, supporting international trade among industrial nations.", "Mining used industrial technology, such as steam engines, dynamite, and railways, much of it imported from Europe and the United States."],
          ["\"Gold is valuable.\" This does not explain a link.", "\"South Africa industrialized before Britain.\" This is false.", "\"Industrial countries did not need gold.\" This is false."],
          "The deep gold mines needed machinery and huge sums of money that only European banks could provide. Investors in London and Paris bought mining shares, and South African gold flowed back to support the gold standard used by industrial countries.",
          "Mining was connected to industry."),
        Q("c", "Explain ONE way the demand for raw materials in the period 1750 to 1900 led to new labor systems or changes in labor.",
          "The response names a specific labor change and explains its link to demand for raw materials.",
          ["South African mines relied on African migrant laborers on short contracts, housed in closed compounds.", "Plantations in the Caribbean, Fiji, and Malaya used indentured workers from India and China after slavery ended.", "In the Congo Free State, Africans were forced to collect wild rubber under threat of violence to meet European demand."],
          ["\"People had to work.\" This names no specific labor system.", "\"Slavery expanded in Britain.\" This is false.", "\"All workers became factory owners.\" This is false."],
          "As demand for sugar and other plantation crops continued after slavery ended, British colonies recruited indentured workers from India. These workers signed contracts to work for five years on plantations in places such as Trinidad, Mauritius, and Fiji in return for passage and low wages.",
          "Labor changed."),
      ] },
  ],
};

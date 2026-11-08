// Topic 6.4 Quiz: Global Economic Development
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
import { bars } from "../../plot.js";
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why, difficulty) => ({ id: "t64-m0" + n, skill: "u6", type: "mcq", set, topic: "6.4", reasoning, question, choices, why, difficulty, answer: 0 });
const Q = (sub, prompt, earns, yes, no, example, notExample) => ({ id: "t64-q1" + sub, skill: "u6", type: "fr", set: "t64-s3", part: "SAQ 1", sub, topic: "6.4", lead: SAQ, prompt, earns, yes, no, example, notExample });

// Chief exports of the Gold Coast colony in 1911, by value in pounds sterling, from the Statesman's Year-Book 1913 (see the cite below).
const GC = { names: ["Cocoa", "Gold", "Rubber", "Palm kernels", "Lumber", "Palm oil"], pounds: [1613468, 1057692, 219447, 175891, 138821, 128916] };

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
    id: "t64-s2", name: "Gold Coast exports, 1911", intro: "Use the chart and table below to answer the questions that follow.", label: "Chart",
    sources: [{ title: "Chart", blocks: [
      { svg: bars({ labels: GC.names, values: GC.pounds.map((v) => v / 1000), y: [0, 1800], step: 300, yname: "Thousands of pounds", fmt: (v) => Math.round(v).toLocaleString("en-US"), width: 600, height: 300,
        alt: "Bar chart of the value of the Gold Coast colony's chief exports in 1911, in thousands of pounds sterling: " + GC.names.map((n, i) => `${n}, ${Math.round(GC.pounds[i] / 1000).toLocaleString("en-US")}`).join("; ") + ". Cocoa is the largest, gold is second, and palm oil is the smallest." }),
        caption: "Value of the Gold Coast colony's chief exports in 1911, in thousands of pounds sterling" },
      { table: { head: ["Export", "Value in 1911 (pounds)"], rows: GC.names.map((n, i) => [n, GC.pounds[i].toLocaleString("en-US")]) } },
      { cite: "The Statesman's Year-Book 1913 (London: Macmillan, 1913), p. 285, \"Chief exports (1911)\" for the Gold Coast, as transcribed on Wikisource (copy fetched from a Kiwix mirror of Wikisource, 2022). The Gold Coast was a British colony in West Africa, today part of Ghana.", url: "https://kwx.liehendr.com/content/wikisource_en_all_maxi_2022-09/A/Page%3AStatesman's_Year-Book_1913.djvu/357", kind: "data" },
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
          ["bring tea plants, tea makers, and tools to India", "open more Chinese ports to British trade by treaty", "buy Chinese tea for the London market directly", "sell Indian opium to merchants in Hong Kong"],
          ["Correct. He says the Company sent him to obtain \"the finest varieties of the Tea-plant, as well as native manufacturers and implements\" for its plantations in the Himalayas.",
            "The treaty ports had opened in 1842; his mission was to collect plants and workers, not to negotiate.",
            "He was sent to grow tea outside China, not to buy it.",
            "Opium paid for much of Britain's tea, but Fortune does not mention it."],
          "easy"),
        M(2, "t64-s1", "Causation", "Fortune's mission most directly contributed to which development?",
          ["Tea plantations in British India that cut Britain's need for Chinese tea", "A Chinese ban on all tea exports to Britain from the 1850s on", "Tea plantations in the Dutch East Indies worked under the cultivation system", "The decline of tea drinking in Britain in the late 1800s"],
          ["Correct. By the late 1800s, India and Ceylon supplied most of the tea drunk in Britain.",
            "China kept exporting tea; it simply lost its near monopoly.",
            "The Dutch did grow crops in Java under forced cultivation, but Fortune worked for the British East India Company in India.",
            "Tea drinking in Britain grew as Indian tea became cheaper."],
          "moderate"),
        M(3, "t64-s1", "Developments and processes", "The source best illustrates which feature of the global economy in the 1800s?",
          ["Imperial powers moved crops and experts to grow cash crops in colonies.", "Asian states kept control of the trade in the most valuable cash crops.", "Plantation farming disappeared once slavery was abolished in the empire.", "Industrial countries depended less on imported raw materials over time."],
          ["Correct. Similar transfers moved rubber from Brazil to Southeast Asia and cinchona, the source of quinine, from South America to India and Java.",
            "Britain's aim was to grow tea outside China's control.",
            "Plantations spread after abolition, using indentured and wage labor.",
            "Imports of raw materials grew as industry grew."],
          "easy"),
        M(4, "t64-s1", "Sourcing and situation", "Fortune's description of the Chinese tea makers as \"poor fellows\" who were given \"nice cottages\" most likely reflects",
          ["his wish to present his mission as kind and successful", "the tea makers' own account of their lives in India", "a Company report on wages paid on its plantations", "his criticism of how the Company treated its workers"],
          ["Correct. Fortune writes as the mission's leader and presents his own role favorably; the tea makers' own views are not recorded here.",
            "The account is Fortune's; the tea makers' letters were addressed to relatives and are not quoted.",
            "This is a travel book, not a wage report.",
            "He praises the care the workers received."],
          "difficult"),
        // ===== Set 2: Chart of Gold Coast exports =====
        M(5, "t64-s2", "Claims and evidence in sources", "Which conclusion is best supported by the chart and table?",
          ["Cocoa was the colony's most valuable export in 1911.", "Palm oil earned more than cocoa and gold together.", "Gold earned more than all the farm and forest goods.", "Rubber was the colony's second most valuable export."],
          ["Correct. Cocoa earned about 1.6 million pounds, more than any other export.",
            "Palm oil earned the least of the six, about 129,000 pounds.",
            "Gold earned about 1.06 million pounds, while cocoa alone earned more than that.",
            "Gold was second; rubber earned about 219,000 pounds."],
          "easy"),
        M(6, "t64-s2", "Continuity and change", "The small value of palm oil exports in 1911 best reflects which change in West Africa's trade since the mid-1800s?",
          ["Cocoa had overtaken the older palm oil trade.", "Britain had banned palm oil imports after 1900.", "Africans had gone back to exporting enslaved people.", "British soap makers had closed their factories."],
          ["Correct. After 1807, palm oil had been the coast's chief export to British factories, but by 1911 cocoa earned more than ten times as much.",
            "Britain did not ban palm oil; its factories kept using it.",
            "The Atlantic slave trade had ended decades earlier.",
            "British soap making kept growing in this period."],
          "moderate"),
        M(7, "t64-s2", "Causation", "Which development most directly explains the value of the colony's cocoa exports in 1911?",
          ["African farmers planting cocoa on their own land from the 1880s", "European firms starting cocoa estates worked by indentured Indians", "A British forced-cultivation system that made villages grow cocoa", "Steamship lines first reaching the West African coast after 1900"],
          ["Correct. Cocoa in the Gold Coast was grown mostly on small African-owned farms, which spread quickly from the 1880s.",
            "Indentured Indians worked plantations in places such as Natal and Trinidad, not the Gold Coast's cocoa farms.",
            "Forced cultivation describes the Dutch system in Java, not British rule in the Gold Coast.",
            "Steamships had served West Africa since the 1850s."],
          "difficult"),
        M(8, "t64-s2", "Comparison", "The pattern of exports in the chart is most similar to that of which other economy around 1900?",
          ["Egypt, which mainly exported raw cotton", "Britain, which mainly exported textiles and machines", "Germany, which mainly exported steel and chemicals", "Switzerland, which mainly exported watches and cloth"],
          ["Correct. Like the Gold Coast, Egypt depended on exporting one raw material whose price was set in distant markets.",
            "Britain exported manufactured goods, not raw materials.",
            "Germany exported industrial goods.",
            "Switzerland exported manufactured goods such as watches, machines, and textiles."],
          "moderate"),
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

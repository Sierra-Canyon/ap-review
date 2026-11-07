// Maps, a chart, and pictures for Units 4 to 6: stimulus-based multiple choice on a map the site draws (tools/build-maps.mjs, from
// Natural Earth's public-domain outlines), a chart of real, cited data (plot.js), or a public-domain picture. HANDOFF.md, section 2e.
// Modeled on the kinds of map, chart, and picture questions Albert asks in Units 4 to 6, with maps, data, and pictures of the site's
// own; the notes on which stimuli Albert uses, kept so these never repeat them, are private (HANDOFF.md, 2a).
// In a multiple-choice item the right choice is always written first; the site shuffles them.
import { maps } from "./maps.js";
import { bars } from "../../plot.js";

const MAP = "Map drawn for this review from Natural Earth land outlines (public domain). Places, dates, and routes checked against ";
const map = (id, caption, refs) => [{ svg: maps[id], caption }, { cite: MAP + refs + ".", kind: "map" }];
const mcq = (id, set, topic, reasoning, question, choices, why) => ({ id, skill: "u" + topic.split(".")[0], type: "mcq", set, topic, reasoning, question, choices, why, answer: 0 });

// Population of the area of the present Republic of Ireland at each census, from the CSO (see the cite below).
const ireland = { years: ["1841", "1851", "1861", "1871", "1881", "1891", "1901", "1911"], pop: [6.529, 5.112, 4.402, 4.053, 3.87, 3.469, 3.222, 3.14] };

export const sets = {
  "u4-vs1": {
    id: "u4-vs1", name: "European trading posts from Africa to Japan", intro: "Use the map below to answer the questions that follow.", label: "Map",
    sources: [{ title: "Map", blocks: map("trading-posts", "European forts and trading posts from West Africa to Japan, c. 1660", "C. R. Boxer, The Dutch Seaborne Empire and The Portuguese Seaborne Empire, and Encyclopaedia Britannica's entries for each city") }],
  },
  "u5-vs1": {
    id: "u5-vs1", name: "Revolutions in the Atlantic world", intro: "Use the map below to answer the questions that follow.", label: "Map",
    sources: [{ title: "Map", blocks: map("atlantic-revolutions", "Revolutions in the Atlantic world, 1776 to 1822: where each began or was won. Revolutionary France abolished slavery in its colonies in 1794; Napoleon restored it in 1802.", "Lester D. Langley, The Americas in the Age of Revolution, 1750 to 1850, and Encyclopaedia Britannica, \"Haitian Revolution\" and \"Latin American wars of independence\"") }],
  },
  "u6-vs1": {
    id: "u6-vs1", name: "China's treaty ports", intro: "Use the map below to answer the questions that follow.", label: "Map",
    sources: [{ title: "Map", blocks: map("treaty-ports", "Chinese ports opened to foreign trade by the treaties of 1842 and 1858 to 1860", "John K. Fairbank, Trade and Diplomacy on the China Coast, and Encyclopaedia Britannica, \"Opium Wars\" and \"Treaty of Tianjin\"") }],
  },
  "u6-vs2": {
    id: "u6-vs2", name: "Ireland's population, 1841 to 1911", intro: "Use the chart below to answer the questions that follow.", label: "Chart",
    sources: [{ title: "Chart", blocks: [
      { svg: bars({ labels: ireland.years, values: ireland.pop, y: [0, 7], step: 1, yname: "Millions of people", fmt: (v) => v.toFixed(2), width: 560, height: 300,
        alt: "Bar chart of the population, in millions, of the area that is now the Republic of Ireland at each census: " + ireland.years.map((y, i) => `${y}, ${ireland.pop[i].toFixed(2)}`).join("; ") + ". The largest drop is between 1841 and 1851, and the population keeps falling at every census after that." }),
        caption: "Population of the area of the present Republic of Ireland at each census, 1841 to 1911, in millions" },
      { table: { head: ["Year", ...ireland.years], rows: [["Millions", ...ireland.pop.map((v) => v.toFixed(2))]] } },
      { cite: "Central Statistics Office (Ireland), Statistical Yearbook of Ireland 2016, Table 2.1, \"Population of each province, 1841 to 2016\" (totals for the area of the present state; 6,528,799 in 1841 and 3,139,688 in 1911). The Great Famine lasted from 1845 to about 1852.", url: "https://www.cso.ie/en/releasesandpublications/ep/p-syi/psyi2016/people/cen/", kind: "data" },
    ] }],
  },
  "u4-vs2": {
    id: "u4-vs2", name: "A Japanese screen of the Portuguese arrival", intro: "Use the image below to answer the questions that follow.", label: "Image",
    sources: [{ title: "Image", blocks: [
      { img: "images/whap/nanban-screen.jpg", alt: "A wide Japanese folding screen of six panels, painted on paper with gold clouds. Foreign traders in patterned robes, baggy trousers, and tall black hats walk in a group through a Japanese port town, with a boat at the water's edge on the lower left. Japanese townspeople watch from houses and shops. At the upper right, men in long black robes stand on the terrace of a large building.",
        caption: "One of a pair of Japanese folding screens, painted in the first quarter of the 1600s, showing Portuguese traders in a Japanese port town. The men in black robes at the upper right are Jesuit priests. Japanese artists called such screens nanban (\"southern barbarian\") screens, after the name they used for the Portuguese.",
        credit: "The Metropolitan Museum of Art, Mary Griggs Burke Collection, Gift of the Mary and Jackson Burke Foundation, 2015 (2015.300.109.1, .2)", license: "public domain, Met Open Access (CC0)", url: "https://www.metmuseum.org/art/collection/search/65417" },
      { cite: "\"Arrival of the Europeans,\" one of a pair of six-panel folding screens, Japan, Edo period, first quarter of the 17th century. Ink, color, gold, and gold leaf on paper. The Metropolitan Museum of Art.", url: "https://www.metmuseum.org/art/collection/search/65417", kind: "primary" },
    ] }],
  },
  "u6-vs3": {
    id: "u6-vs3", name: "A Yokohama print of an American family, 1861", intro: "Use the image below to answer the questions that follow.", label: "Image",
    sources: [{ title: "Image", blocks: [
      { img: "images/whap/americans-yokohama.jpg", alt: "A Japanese color woodblock print of an American family walking. A man in a green hat carries a cane, a woman in a blue jacket and striped skirt holds a baby, and a girl in a green skirt walks beside them. Japanese writing fills the top of the print, along with the word AMERIKAZIN in Latin letters.",
        caption: "\"Americans on an Outing,\" a woodblock print by Ippōsai Yoshifuji, 1861. Prints like this one, made for Japanese buyers, showed the foreigners who had begun to live and trade in Yokohama, a port opened to them in 1859 under treaties that Japan signed with the United States and European powers in 1858.",
        credit: "The Metropolitan Museum of Art, Bequest of William S. Lieberman, 2005 (2007.49.251)", license: "public domain, Met Open Access (CC0)", url: "https://www.metmuseum.org/art/collection/search/73542" },
      { cite: "Ippōsai Yoshifuji, \"Americans on an Outing\" (Amerikajin yūgyō), Japan, Edo period, 1861. Woodblock print, ink and color on paper. The Metropolitan Museum of Art.", url: "https://www.metmuseum.org/art/collection/search/73542", kind: "primary" },
    ] }],
  },
};

export default [
  // ---------------------------------------------------------------- trading posts map
  mcq("u4-v01", "u4-vs1", "4.4", "Developments and processes", "The map best supports which claim about European empires in Africa and Asia around 1660?",
    ["European power rested mainly on forts and trading posts along coasts and on islands.", "Europeans ruled most of the interior of Africa and Asia.", "Europeans had no presence in Asia before 1700.", "Portugal had lost every one of its posts in Asia."],
    ["Correct. Every post on the map is on a coast or island, while the Mughal, Qing, and Tokugawa states held the interiors.",
      "The labels for the Mughal Empire, Qing China, and Tokugawa Japan show large states that Europeans did not rule.",
      "The map shows posts founded from 1510 to 1656.",
      "Goa and Macau were still Portuguese."]),
  mcq("u4-v02", "u4-vs1", "4.5", "Continuity and change", "Elmina, Malacca, and Colombo on the map best illustrate which change in the 1600s?",
    ["The Dutch took important posts from the Portuguese.", "The Portuguese drove the Dutch out of Asia.", "The Spanish took control of the Indian Ocean.", "African and Asian states expelled all Europeans."],
    ["Correct. The Dutch took Elmina in 1637, Malacca in 1641, and Colombo in 1656, all from Portugal.",
      "The dates show Dutch gains at Portugal's expense.",
      "The only Spanish post on the map is Manila.",
      "Many European posts remained, as the map shows."]),
  mcq("u4-v03", "u4-vs1", "4.5", "Making connections", "Spanish Manila, shown on the map, was most important to world trade because",
    ["American silver was traded there for Chinese silk and porcelain", "it was the main source of nutmeg", "it was the only port open to the Dutch in Japan", "it was the Dutch East India Company's headquarters"],
    ["Correct. Galleons from Acapulco brought silver to Manila, where Chinese merchants traded silk and porcelain for it.",
      "Nutmeg came from the Banda Islands, which the Dutch controlled.",
      "That describes Dejima.",
      "The company's headquarters was Batavia."]),
  mcq("u4-v04", "u4-vs1", "4.5", "Contextualization", "The Dutch post at Dejima in 1641 is best understood in the context of",
    ["Tokugawa policies that limited and controlled contact with Europeans", "Japan's conquest by the Dutch", "a Japanese alliance with Portugal", "the opening of Japan's ports by treaty in the 1850s"],
    ["Correct. After expelling the Portuguese in 1639, the shogunate let only the Dutch trade, and only on a small island in Nagasaki harbor.",
      "The Dutch never conquered Japan.",
      "Japan expelled the Portuguese in 1639.",
      "The treaties came more than two centuries later."]),
  // ---------------------------------------------------------------- Atlantic revolutions map
  mcq("u5-v01", "u5-vs1", "5.2", "Causation", "The dates on the map best support which claim?",
    ["Revolutions in Europe and the Caribbean came before most revolutions in Spanish America.", "Spanish America became independent before the United States.", "Brazil was the first state in the Americas to become independent.", "The French Revolution came after the revolutions in South America."],
    ["Correct. Philadelphia 1776, Paris 1789, and Saint-Domingue 1791 all came before the Spanish American revolts of 1810 and after.",
      "The United States declared independence in 1776, Spanish America after 1810.",
      "Brazil's date is 1822, among the latest.",
      "Paris is 1789, more than twenty years before Buenos Aires and Caracas."]),
  mcq("u5-v02", "u5-vs1", "5.2", "Contextualization", "The cluster of revolts in Spanish America beginning in 1810 is best understood in the context of",
    ["Napoleon's invasion of Spain in 1808, which weakened royal authority in the colonies", "the end of the Haitian Revolution in 1850", "Spain's victory over France in 1789", "the abolition of slavery in Spain in 1776"],
    ["Correct. When Napoleon removed the Spanish king in 1808, creole leaders formed their own governments, and many soon sought independence.",
      "Haiti became independent in 1804.",
      "Spain did not defeat France in 1789.",
      "Spain did not abolish slavery in 1776."]),
  mcq("u5-v03", "u5-vs1", "5.2", "Comparison", "The revolution marked at Saint-Domingue differed from the revolutions marked at Caracas and Buenos Aires in that it",
    ["was led by enslaved and formerly enslaved people and ended slavery", "was led by creole landowners", "kept the colony under European rule", "began after 1820"],
    ["Correct. The 1791 uprising of enslaved people led to Haiti's independence and the end of slavery there, unlike the creole-led revolts.",
      "Creole elites led the revolts in Caracas and Buenos Aires.",
      "Haiti became independent in 1804.",
      "The map dates it to 1791."]),
  // ---------------------------------------------------------------- treaty ports map
  mcq("u6-v01", "u6-vs1", "6.5", "Continuity and change", "The map best shows which change in China between 1842 and 1860?",
    ["Foreign trade spread from the southern coast to northern China and deep inland up the Yangzi.", "China closed all of its ports to foreigners.", "China gained new colonies on the Yangzi.", "Foreign trade moved from Shanghai to Guangzhou."],
    ["Correct. The 1842 ports are on the south and central coast, while the later ports include Tianjin in the north and Hankou far up the Yangzi.",
      "The map shows more ports opened, not closed.",
      "The ports were opened to foreign powers; China gained no colonies.",
      "Both were opened in 1842, and the later ports were mostly farther north and inland."]),
  mcq("u6-v02", "u6-vs1", "6.5", "Causation", "The ports on the map were opened mainly as a result of",
    ["China's defeats in wars with Britain and France", "Chinese merchants' requests for European goods", "a Qing plan to industrialize the interior", "Japanese conquest of China's coast"],
    ["Correct. The Treaty of Nanjing ended the first Opium War in 1842, and the treaties of 1858 to 1860 followed the second.",
      "The Qing government opened the ports only after defeat.",
      "The ports were forced on the Qing by treaty.",
      "Japan's wars with China came later, in 1894 and after."]),
  // ---------------------------------------------------------------- Ireland chart
  mcq("u6-v03", "u6-vs2", "6.6", "Causation", "The sharp drop in population between 1841 and 1851 shown in the chart was caused mainly by",
    ["famine deaths and large-scale emigration", "industrialization drawing people to Irish factories", "a new law limiting the number of children", "a war with France"],
    ["Correct. During the Great Famine of 1845 to about 1852, about a million people died and over a million emigrated.",
      "Factory growth would not reduce a population.",
      "No such law existed.",
      "No war with France took place then."]),
  mcq("u6-v04", "u6-vs2", "6.6", "Continuity and change", "Which of the following best describes the trend in the chart after 1851?",
    ["The population kept falling at every census as emigration continued.", "The population quickly recovered to its 1841 level.", "The population rose sharply after 1881.", "The population stayed the same."],
    ["Correct. The population fell at every census, from 5.11 million in 1851 to 3.14 million in 1911, as many Irish people emigrated, mostly to the United States and Britain.",
      "By 1911 it was less than half the 1841 level.",
      "It fell after 1881.",
      "It fell at every census."]),
  // ---------------------------------------------------------------- Nanban screen
  mcq("u4-v05", "u4-vs2", "4.2", "Sourcing and situation", "The screen is most useful to a historian studying",
    ["how Japanese artists viewed the Portuguese traders and missionaries who arrived in the 1500s", "how the Portuguese crown planned its voyages to Asia", "the daily lives of Portuguese sailors at sea", "how Spanish officials governed Manila"],
    ["Correct. Japanese artists painted the screen for Japanese viewers, so it shows how they saw the new arrivals.",
      "The screen does not show Portuguese royal planning.",
      "It shows traders in a port town, not life at sea.",
      "It shows a Japanese port, not Manila."]),
  mcq("u4-v06", "u4-vs2", "4.4", "Making connections", "The priests in black robes shown on the screen are best understood as evidence of",
    ["Catholic missionary work that came with Portuguese trade in Asia", "the spread of Protestant churches in Japan", "a Japanese ban on Christianity in the 1500s", "the conversion of the Japanese shogun"],
    ["Correct. Jesuits traveled with Portuguese traders and won many converts in Japan before the Tokugawa bans.",
      "The Jesuits and Franciscans were Catholic orders.",
      "The ban came in 1614, and the screen shows missionaries welcomed.",
      "No shogun converted."]),
  // ---------------------------------------------------------------- Yoshifuji print
  mcq("u6-v05", "u6-vs3", "6.5", "Contextualization", "The print is best understood in the context of",
    ["treaties of the 1850s that opened Japanese ports to Western traders and residents", "Japan's policy of total isolation from all foreigners", "the American conquest of Japan", "Japan's colonization of the United States"],
    ["Correct. Yokohama opened in 1859 under the 1858 treaties, and Americans and Europeans began to live there.",
      "The treaties ended the old limits on contact.",
      "The United States did not conquer Japan.",
      "Japan had no colonies in the United States."]),
  mcq("u5-v04", "u6-vs3", "5.6", "Causation", "Contact with Westerners in treaty ports such as Yokohama most directly contributed to which development in Japan after 1868?",
    ["A government program to adopt Western technology and build railways and factories", "Japan's return to complete isolation from foreigners", "The conquest of Japan by the United States", "The end of Japan's emperor as a symbol of the state"],
    ["Correct. After 1868 the Meiji government, determined that Japan not be dominated as China was, built railways, telegraph lines, and model factories on Western lines.",
      "Japan did not return to isolation; it expanded contact.",
      "The United States never conquered Japan in the 1800s.",
      "The Meiji government made the emperor the center of the state."]),
];

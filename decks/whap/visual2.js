// Maps, a chart, and pictures for Units 4 to 6: stimulus-based multiple choice on a map the site draws (tools/build-maps.mjs, from
// Natural Earth's public-domain outlines), a chart of real, cited data (plot.js), or a public-domain picture. HANDOFF.md, section 2e.
// Modeled on the kinds of map, chart, and picture questions Albert asks in Units 4 to 6, with maps, data, and pictures of the site's
// own; the notes on which stimuli Albert uses, kept so these never repeat them, are private (HANDOFF.md, 2a).
// In a multiple-choice item the right choice is always written first; the site shuffles them.
import { maps } from "./maps.js";
import { bars } from "../../plot.js";

const MAP = "Map drawn for this review from Natural Earth land outlines (public domain). Places, dates, and routes checked against ";
const map = (id, caption, refs) => [{ svg: maps[id], caption }, { cite: MAP + refs + ".", kind: "map" }];
const mcq = (id, set, topic, reasoning, question, choices, why, difficulty) => ({ id, skill: "u" + topic.split(".")[0], type: "mcq", set, topic, reasoning, difficulty, question, choices, why, answer: 0 });

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
    ["European power rested mainly on posts along coasts and on islands.", "The Dutch ruled the Indian Ocean, having taken every Portuguese post.", "European trading companies ruled most of the interior of South Asia.", "Europeans had set up no trading posts in Asia before about 1600."],
    ["Correct. Every post on the map is on a coast or island, while the Mughal, Qing, and Tokugawa states held the interiors.",
      "The Dutch took many Portuguese posts, but Goa, Macau, Luanda, and Mozambique Island were still Portuguese, and English and Spanish posts appear too.",
      "The label for the Mughal Empire shows a large state that Europeans did not rule. The European posts in India are all on the coast.",
      "Goa (1510) and Macau (1557) were founded long before 1600."],
    "difficult"),
  mcq("u4-v02", "u4-vs1", "4.5", "Continuity and change", "Elmina, Malacca, and Colombo on the map best illustrate which change in the 1600s?",
    ["The Dutch took key posts from the Portuguese.", "The Portuguese drove the Dutch out of the Indian Ocean.", "The English replaced the Dutch as the leading power in Asia.", "The Spanish took control of Indian Ocean trade from Manila."],
    ["Correct. The Dutch took Elmina in 1637, Malacca in 1641, and Colombo in 1656, all from Portugal.",
      "The dates show Dutch gains at Portugal's expense.",
      "The English held only Surat and Madras on the map. They overtook the Dutch in Asia only in the 1700s.",
      "The only Spanish post on the map is Manila, on the Pacific side, far from the Indian Ocean."],
    "easy"),
  mcq("u4-v03", "u4-vs1", "4.5", "Making connections", "Spanish Manila, shown on the map, was most important to world trade because",
    ["American silver was traded there for Chinese silk and porcelain", "it was the main market for nutmeg and cloves from the Spice Islands", "it was the only port where Japan allowed the Dutch to trade", "it was the Asian headquarters of the Dutch East India Company"],
    ["Correct. Galleons from Acapulco brought silver to Manila, where Chinese merchants traded silk and porcelain for it.",
      "Nutmeg and cloves came from the Banda Islands and the Moluccas, which the Dutch controlled.",
      "That describes Dejima.",
      "The company's headquarters was Batavia."],
    "moderate"),
  mcq("u4-v04", "u4-vs1", "4.5", "Contextualization", "The Dutch post at Dejima in 1641 is best understood in the context of",
    ["Tokugawa policies that limited contact with Europeans", "the spread of Christianity among daimyo, which the shogun welcomed", "a Japanese alliance with Portugal against Spanish Manila", "the opening of Japan's ports by treaty with Western powers"],
    ["Correct. After expelling the Portuguese in 1639, the shogunate let only the Dutch trade, and only on a small island in Nagasaki harbor.",
      "Some daimyo had become Christian, but the shogunate banned Christianity in 1614 and saw it as a threat.",
      "Japan expelled the Portuguese in 1639.",
      "The treaties that opened Japan's ports came in the 1850s, more than two centuries later."],
    "moderate"),
  // ---------------------------------------------------------------- Atlantic revolutions map
  mcq("u5-v01", "u5-vs1", "5.2", "Causation", "The dates on the map best support which claim?",
    ["Revolutions in Europe and the Caribbean came before most in Spanish America.", "Spanish America won its independence before the United States did.", "Brazil was the first state in the Americas to win its independence.", "The French Revolution followed the revolutions in South America."],
    ["Correct. Philadelphia 1776, Paris 1789, and Saint-Domingue 1791 all came before the Spanish American revolts of 1810 and after.",
      "The United States declared independence in 1776, Spanish America after 1810.",
      "Brazil's date is 1822, among the latest.",
      "Paris is 1789, more than twenty years before Buenos Aires and Caracas."],
    "easy"),
  mcq("u5-v02", "u5-vs1", "5.2", "Contextualization", "The cluster of revolts in Spanish America beginning in 1810 is best understood in the context of",
    ["Napoleon's invasion of Spain in 1808, which weakened royal authority", "the Congress of Vienna in 1815, which restored Spain's king to his throne", "Haiti's independence in 1804, which led Spain to free its enslaved people", "the Seven Years' War, in which Spain lost its American colonies to Britain"],
    ["Correct. When Napoleon removed the Spanish king in 1808, creole leaders formed their own governments, and many soon sought independence.",
      "The Congress of Vienna met in 1814 and 1815, after the revolts had begun, so it cannot explain their start.",
      "Haiti's revolution alarmed creole elites, but Spain did not free the enslaved people of its colonies.",
      "Spain lost Florida, not its American colonies, in the Seven Years' War, and got Louisiana from France."],
    "difficult"),
  mcq("u5-v03", "u5-vs1", "5.2", "Comparison", "The revolution marked at Saint-Domingue differed from the revolutions marked at Caracas and Buenos Aires in that it",
    ["was led by enslaved people and ended slavery", "was led by creole landowners who wanted free trade", "drew on Enlightenment ideas, while the others did not", "left the colony under French rule when it ended"],
    ["Correct. The 1791 uprising of enslaved people led to Haiti's independence and the end of slavery there, unlike the creole-led revolts.",
      "Creole elites led the revolts in Caracas and Buenos Aires, not the one in Saint-Domingue.",
      "Leaders in all three drew on ideas of natural rights and popular sovereignty.",
      "Haiti became independent in 1804."],
    "moderate"),
  // ---------------------------------------------------------------- treaty ports map
  mcq("u6-v01", "u6-vs1", "6.5", "Continuity and change", "The map best shows which change in China between 1842 and 1860?",
    ["Foreign trade spread north and up the Yangzi.", "China closed its southern ports to foreigners after 1842.", "China gained new colonies on the Yangzi after 1860.", "Foreign trade moved from Shanghai back south to Guangzhou."],
    ["Correct. The 1842 ports are on the south and central coast, while the later ports include Tianjin in the north and Hankou far up the Yangzi.",
      "The map shows more ports opened, not closed.",
      "The ports were opened to foreign powers; China gained no colonies.",
      "Both were opened in 1842, and the later ports were mostly farther north and inland."],
    "easy"),
  mcq("u6-v02", "u6-vs1", "6.5", "Causation", "The ports on the map were opened mainly as a result of",
    ["China's defeats in wars with Britain and France", "the Self-Strengthening Movement's plan to buy Western arms", "Chinese merchants' petitions to the Qing for European goods", "Japan's victory over China in the war of 1894 and 1895"],
    ["Correct. The Treaty of Nanjing ended the first Opium War in 1842, and the treaties of 1858 to 1860 followed the second.",
      "The Self-Strengthening Movement began in the 1860s, after these ports had been forced open.",
      "The Qing government opened the ports only after defeat.",
      "Japan's war with China came in 1894, decades after these ports were opened."],
    "moderate"),
  // ---------------------------------------------------------------- Ireland chart
  mcq("u6-v03", "u6-vs2", "6.6", "Causation", "The sharp drop in population between 1841 and 1851 shown in the chart was caused mainly by",
    ["deaths and emigration in the Great Famine", "land reforms that broke up the large estates", "a law that limited the number of children", "a war with France that drew men into the army"],
    ["Correct. During the Great Famine of 1845 to about 1852, about a million people died and over a million emigrated.",
      "Land reform laws came later, mostly from the 1870s on.",
      "No such law existed.",
      "Britain fought no war with France in these years."],
    "easy"),
  mcq("u6-v04", "u6-vs2", "6.6", "Continuity and change", "Which of the following best describes the trend in the chart after 1851?",
    ["It fell at every census as emigration went on.", "It recovered to its 1841 level by the end of the century.", "It rose again after 1881 as new industries drew workers.", "It held steady at about five million after the famine."],
    ["Correct. The population fell at every census, from 5.11 million in 1851 to 3.14 million in 1911, as many Irish people emigrated, mostly to the United States and Britain.",
      "By 1911 it was less than half the 1841 level.",
      "It fell after 1881, from 3.87 to 3.47 million by 1891.",
      "It fell at every census, to 3.14 million by 1911."],
    "easy"),
  // ---------------------------------------------------------------- Nanban screen
  mcq("u4-v05", "u4-vs2", "4.2", "Sourcing and situation", "The screen is most useful to a historian studying",
    ["how Japanese artists saw the Portuguese traders and priests", "why the Tokugawa shogunate banned Christianity in the early 1600s", "how the Portuguese crown planned its trading voyages to Asia", "the daily lives of Portuguese sailors on their long voyages"],
    ["Correct. Japanese artists painted the screen for Japanese viewers, so it shows how they saw the new arrivals.",
      "The screen shows priests welcomed in a port town. It says nothing about the shogunate's reasons for the later ban.",
      "The screen does not show Portuguese royal planning.",
      "It shows traders in a port town, not life at sea."],
    "moderate"),
  mcq("u4-v06", "u4-vs2", "4.4", "Making connections", "The priests in black robes shown on the screen are best understood as evidence of",
    ["Catholic missions that came with Portuguese trade", "Protestant churches that Dutch traders founded in Japan", "a Japanese ban on Christianity in force during the 1500s", "the conversion of the Tokugawa shogun to Christianity"],
    ["Correct. Jesuits traveled with Portuguese traders and won many converts in Japan before the Tokugawa bans.",
      "The caption names the priests as Jesuits, a Catholic order, and the Dutch did not reach Japan until 1600.",
      "The ban came in 1614, and the screen shows missionaries welcomed.",
      "No shogun converted."],
    "easy"),
  // ---------------------------------------------------------------- Yoshifuji print
  mcq("u6-v05", "u6-vs3", "6.5", "Contextualization", "The print is best understood in the context of",
    ["treaties that opened Japanese ports to Westerners", "Tokugawa policies that confined all Westerners to Dejima", "the American occupation of Japan after a war in the 1850s", "Japan's colonial expansion into Korea and Taiwan"],
    ["Correct. Yokohama opened in 1859 under the 1858 treaties, and Americans and Europeans began to live there.",
      "The treaties of 1858 ended the old rule that kept the Dutch on Dejima, which is why Americans could live in Yokohama.",
      "The United States fought no war with Japan in the 1850s and did not occupy it.",
      "Japan took Taiwan in 1895 and Korea in 1910, decades after the print."],
    "moderate"),
  mcq("u5-v04", "u6-vs3", "5.6", "Causation", "Contact with Westerners in treaty ports such as Yokohama most directly contributed to which development in Japan after 1868?",
    ["A state program to adopt Western technology", "A return to strict limits on contact with foreigners", "The conquest of Japan by the United States Navy", "The end of the emperor's role as a symbol of the state"],
    ["Correct. After 1868 the Meiji government, determined that Japan not be dominated as China was, built railways, telegraph lines, and model factories on Western lines.",
      "Japan did not return to isolation; it expanded contact.",
      "The United States never conquered Japan in the 1800s.",
      "The Meiji government made the emperor the center of the state."],
    "easy"),
];

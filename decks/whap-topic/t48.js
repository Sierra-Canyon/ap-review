// Topic 4.8 Quiz: Continuity and Change, c. 1450 to c. 1750
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
import { bars } from "../../plot.js";

// Angus Maddison's population estimates (millions), for the chart in set 2
const pop = {
  places: ["India", "China", "Japan", "Indonesia", "Spain", "United Kingdom", "Turkey", "Portugal", "Netherlands"],
  short: ["India", "China", "Japan", "Indonesia", "Spain", "UK", "Turkey", "Portugal", "Netherlands"],
  y1500: [110, 103, 15.4, 10.7, 6.8, 3.9, 6.3, 1.0, 1.0],
  y1600: [135, 160, 18.5, 11.7, 8.2, 6.2, 7.9, 1.1, 1.5],
  y1700: [165, 138, 27, 13.1, 8.8, 8.6, 8.4, 2.0, 1.9],
};
const num = (v) => (v < 100 ? v.toFixed(1) : String(v));
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why, difficulty) => ({ id: "t48-m0" + n, skill: "u4", type: "mcq", set, topic: "4.8", reasoning, difficulty, question, choices, why, answer: 0 });
const Q = (sub, prompt, earns, yes, no, example, notExample) => ({ id: "t48-q1" + sub, skill: "u4", type: "fr", set: "t48-s3", part: "SAQ 1", sub, topic: "4.8", lead: SAQ, prompt, earns, yes, no, example, notExample });

export const sets = {
  "t48-s1": {
    id: "t48-s1", name: "Adam Smith on the two greatest events, 1776", intro: ONE,
    sources: [{ title: "Source", blocks: [
      { p: "The discovery of America, and that of a passage to the East Indies by the Cape of Good Hope, are the two greatest and most important events recorded in the history of mankind. Their consequences have already been great; but, in the short period of between two and three centuries which has elapsed since these discoveries were made, it is impossible that the whole extent of their consequences can have been seen. ... By uniting in some measure the most distant parts of the world, by enabling them to relieve one another's wants, to increase one another's enjoyments, and to encourage one another's industry, their general tendency would seem to be beneficial." },
      { p: "To the natives, however, both of the East and West Indies, all the commercial benefits which can have resulted from those events have been sunk and lost in the dreadful misfortunes which they have occasioned. ... At the particular time when these discoveries were made, the superiority of force happened to be so great on the side of the Europeans, that they were enabled to commit with impunity every sort of injustice in those remote countries." },
      { p: "In the mean time, one of the principal effects of those discoveries has been, to raise the mercantile system to a degree of splendour and glory which it could never otherwise have attained to. ... the commercial towns of Europe ... have now become the manufacturers for the numerous and thriving cultivators of America, and the carriers, and in some respects the manufacturers too, for almost all the different nations of Asia, Africa, and America." },
      { cite: "Adam Smith, Scottish philosopher and economist, An Inquiry into the Nature and Causes of the Wealth of Nations (London, 1776), Book IV, chapter VII, part III, as published by Project Gutenberg. \"The mercantile system\" is mercantilism, the policy of using colonies, monopolies, and trade rules to increase a nation's wealth, which Smith criticized.", url: "https://www.gutenberg.org/files/3300/3300-h/3300-h.htm", kind: "primary" },
    ] }],
  },
  "t48-s2": {
    id: "t48-s2", name: "Populations in Asia and Europe, 1500 to 1700", intro: "Use the chart and table below to answer the questions that follow.", label: "Chart",
    sources: [{ title: "Chart", blocks: [
      { svg: bars({ labels: pop.short, values: pop.y1700, y: [0, 180], step: 30, yname: "Millions of people", fmt: num, width: 700, height: 320,
        alt: "Bar chart of the estimated population in 1700, in millions: " + pop.places.map((p, i) => `${p}, ${num(pop.y1700[i])}`).join("; ") + "." }),
        caption: "Estimated population in 1700, in millions, of some Asian and European countries (areas of present-day countries)" },
      { table: { head: ["Country", "1500", "1600", "1700"], rows: pop.places.map((p, i) => [p, num(pop.y1500[i]), num(pop.y1600[i]), num(pop.y1700[i])]) } },
      { cite: "Angus Maddison, Statistics on World Population, GDP and Per Capita GDP, 1 to 2008 AD (Groningen Growth and Development Centre, 2010), population estimates in millions, as tabulated in Wikipedia, \"Estimates of historical world population,\" country table. Each figure is for the area of the present-day country; Turkey was the core of the Ottoman Empire, and Indonesia was then divided among many states.", url: "https://en.wikipedia.org/wiki/World_population_estimates", kind: "data" },
    ] }],
  },
  "t48-s3": {
    id: "t48-s3", name: "The Indian Ocean in 1750", intro: SAQ,
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that Indian Ocean trade in 1750 showed more continuity than change since 1450. Gujarati, Arab, Armenian, and Chinese merchants still carried much of the trade between East Africa, the Middle East, India, and Southeast Asia, and the monsoon winds still set the rhythm of voyages. Cotton cloth from India remained one of the most traded goods in the world. Yet some things had changed. The Dutch East India Company had seized the spice islands of the Moluccas and the Banda Islands and controlled the trade in cloves and nutmeg. European companies had built forts at ports from the Cape of Good Hope to Indonesia, and American silver, carried by European ships, had become a main way to pay for Asian goods." },
      PRACTICE,
    ] }],
  },
};

export default {
  forms: [
    { id: "t48", name: "Topic 4.8 Quiz: Continuity and Change, c. 1450 to c. 1750", group: "Unit 4: Transoceanic Interconnections",
      items: [
        // ===== Set 1: Adam Smith =====
        M(1, "t48-s1", "Sourcing and situation", "Smith's view of the voyages to the Americas and Asia is best described as",
          ["mixed: they linked distant regions but brought injustice to native peoples", "positive: they linked distant regions and caused no lasting harm to anyone", "negative: they ruined Europe's own trade and should never have happened", "neutral: their effects on trade were still too small to be worth judging"],
          ["Correct. Smith calls the general tendency \"beneficial\" but says the natives' benefits \"have been sunk and lost in the dreadful misfortunes.\"",
            "He describes \"dreadful misfortunes\" and \"every sort of injustice,\" so he does not see the voyages as harmless.",
            "He calls the discoveries the greatest events in history and says they raised Europe's commerce, not ruined it.",
            "He calls their consequences \"already great\" and discusses commerce and the mercantile system at length."], "easy"),
        M(2, "t48-s1", "Causation", "According to Smith, Europeans were able to \"commit with impunity every sort of injustice\" because",
          ["they had far greater force than the peoples they met at that time", "local rulers in the Americas and Asia had invited them to govern", "Europe had a far larger population than Asia in that period", "the Pope had granted them authority over all non-Christian lands"],
          ["Correct. He says \"the superiority of force happened to be so great on the side of the Europeans\" at that particular time.",
            "Smith describes injustice done to the natives, not an invitation to rule.",
            "Smith does not mention population, and Asia's population was far larger than Europe's.",
            "Popes did issue grants to Spain and Portugal, but Smith does not mention them; he gives force as the reason."], "easy"),
        M(3, "t48-s1", "Claims and evidence in sources", "Smith's claim that European towns became \"the manufacturers for the numerous and thriving cultivators of America\" best describes which feature of the Atlantic economy?",
          ["Colonies grew crops and bought manufactured goods from Europe.", "The Americas made most of the manufactured goods Europe bought.", "European towns stopped making goods and lived on colonial trade.", "Colonists were forbidden to farm and had to import their food."],
          ["Correct. Under mercantilism, colonies such as the sugar and tobacco colonies shipped crops to Europe and bought European cloth, tools, and other goods.",
            "Smith says the opposite: European towns made goods for the Americas.",
            "He says European towns became manufacturers for a much larger market.",
            "He calls the colonists \"thriving cultivators,\" that is, farmers."], "easy"),
        M(4, "t48-s1", "Continuity and change", "Smith's statement that \"the whole extent of their consequences\" could not yet be seen is supported by which later development?",
          ["Industrial Europe conquered much of Africa and Asia in the 1800s.", "European trade with Asia shrank sharply in the early 1800s.", "Indigenous peoples regained rule over most of the Americas by 1800.", "Spain and Portugal led the world in industry in the 1800s."],
          ["Correct. Smith wrote before industrialization. Wealth from the Atlantic economy helped fuel industry in Britain, and industrial power then let Europeans conquer far more of Africa and Asia.",
            "Trade with Asia grew after 1800, as British trade with India and China expanded.",
            "Most of the Americas became independent states ruled by descendants of settlers, not by Indigenous peoples.",
            "Britain, not Spain or Portugal, led industrialization."], "moderate"),
        // ===== Set 2: Populations in Asia and Europe (chart) =====
        M(5, "t48-s2", "Claims and evidence in sources", "Which claim is best supported by the chart and the table?",
          ["The largest Asian states had far more people than Europe's sea powers.", "Portugal and the Netherlands each had more people than Japan in 1700.", "China's population grew in every century shown, from 1500 to 1700.", "Every European country shown more than doubled from 1500 to 1700."],
          ["Correct. In 1700, India had about 165 million people and China about 138 million, while Spain, the United Kingdom, Portugal, and the Netherlands each had fewer than 9 million.",
            "The chart shows Japan with 27 million people in 1700, and Portugal and the Netherlands with about 2 million each.",
            "The table shows China rising from 103 to 160 million by 1600 but falling to 138 million by 1700.",
            "Spain grew only from 6.8 to 8.8 million, and Portugal exactly doubled, from 1.0 to 2.0 million."], "difficult"),
        M(6, "t48-s2", "Causation", "The table shows China's population falling between 1600 and 1700. This fall is best explained by",
          ["war, famine, and revolt as the Ming dynasty fell to the Qing", "smallpox epidemics brought to China by Spanish galleons from Manila", "the emigration of most Chinese farmers to Southeast Asia", "a Qing ban on growing American crops such as maize and sweet potatoes"],
          ["Correct. Rebellions, famine, and the Manchu conquest in the middle 1600s killed millions. China's population recovered and grew quickly under the Qing in the 1700s.",
            "Smallpox devastated the Americas, where people had no prior exposure. It had long been present in China, so it did not cause a collapse there.",
            "Chinese merchants and workers did settle in Southeast Asia, as at Manila, but in the thousands, not enough to shrink a population of over 100 million.",
            "The Qing did not ban American crops. Maize and sweet potatoes spread in China in this period and helped its population grow in the 1700s."], "difficult"),
        M(7, "t48-s2", "Developments and processes", "The chart best helps explain why Europeans in Asia before 1750 mostly held coastal trading posts rather than large territories. Which explanation does it support?",
          ["Populous Asian states could field armies Europeans could not defeat on land.", "The European states shown had more people to send abroad than the Asian ones.", "The Treaty of Tordesillas forbade Europeans from conquering land in Asia.", "Disease killed most Europeans who traveled inland from Asian ports."],
          ["Correct. States such as Mughal India and Qing China had populations many times larger than Portugal, the Netherlands, or Britain, and large armies to match, so Europeans traded on their terms from ports.",
            "The chart shows the opposite: each European state had a small fraction of the people of India or China.",
            "The treaty divided the world between Spain and Portugal; it did not forbid conquest, and the chart says nothing about it.",
            "Disease limited Europeans inland in tropical Africa, but the chart is about population, and it was Asian states' strength that kept Europeans on the coast."], "moderate"),
        M(8, "t48-s2", "Causation", "The table shows Japan's population rising by almost half between 1600 and 1700. Which development most directly contributed to this growth?",
          ["The peace that followed the Tokugawa unification of Japan", "The farmland Japan gained by conquering Korea in the 1590s", "The opening of every Japanese port to European merchants' ships", "The building of steam-powered textile mills around Edo and Osaka"],
          ["Correct. After a century of civil war, the Tokugawa shoguns kept Japan at peace from the early 1600s, and farmers cleared and irrigated new land, so population grew from about 18.5 to 27 million.",
            "Japan's invasions of Korea in the 1590s failed, and Japan gained no Korean land.",
            "The shoguns did the reverse: by 1641 only the Dutch could trade, and only at Nagasaki.",
            "Steam-powered mills belong to industrialization, which reached Japan after 1868."], "moderate"),
        // ===== SAQ: The Indian Ocean in 1750 =====
        Q("a", "Identify ONE continuity in Indian Ocean trade between 1450 and 1750 described in the passage.",
          "The response names one thing from the passage that stayed the same.",
          ["Gujarati, Arab, Armenian, and Chinese merchants still carried much of the trade.", "The monsoon winds still set the rhythm of voyages.", "Indian cotton cloth remained one of the most traded goods in the world."],
          ["\"The Dutch controlled the spice islands.\" This is a change, not a continuity.", "\"Trade continued.\" This is too general to earn the point.", "\"European ships carried all the trade.\" This is false and contradicts the passage."],
          "The passage says Gujarati, Arab, Armenian, and Chinese merchants still carried much of the trade around the Indian Ocean in 1750, as they had before Europeans arrived.",
          "Some things stayed the same."),
        Q("b", "Explain ONE change in Indian Ocean trade between 1450 and 1750, and explain what caused it.",
          "The response names a specific change and explains its cause.",
          ["The Dutch East India Company took control of the clove and nutmeg trade by seizing the Moluccas and Banda Islands with armed force.", "American silver became a main way to pay for Asian goods because Spanish mines in Potosí and Mexico produced huge amounts and Asian sellers, especially in China, wanted it.", "European companies built fortified ports from the Cape to Indonesia because joint-stock companies and states backed armed trade to compete for Asian goods."],
          ["\"Europeans came.\" This names a change but does not explain its cause.", "\"The monsoon winds changed.\" This is false.", "\"China conquered India.\" This is false."],
          "American silver became a main means of paying for Asian goods. Spanish mines at Potosí and in Mexico produced vast amounts of silver, and Europeans carried it to Asia because Chinese and Indian sellers wanted silver more than European products.",
          "Trade changed a lot."),
        Q("c", "Explain ONE way trade in the Atlantic Ocean in 1750 differed from trade in the Indian Ocean in 1750.",
          "The response makes a specific contrast between Atlantic and Indian Ocean trade and explains it.",
          ["Atlantic trade was a new system created after 1492 and largely run by Europeans, while Indian Ocean trade was an old system in which Asian merchants still played a large role.", "Atlantic trade depended on the forced movement of millions of enslaved Africans to work on plantations, while most Indian Ocean trade was in goods such as cloth and spices carried by merchants.", "In the Atlantic, European states ruled large colonies that produced crops for trade, while in the Indian Ocean, Europeans mostly held ports among powerful Asian states."],
          ["\"The Atlantic is in a different place.\" This is not a meaningful difference in trade.", "\"Both oceans had trade.\" This is a similarity.", "\"There was no slave trade in the Atlantic.\" This is false."],
          "The Atlantic economy was built after 1492 around plantations in the Americas that depended on enslaved Africans, and European states ruled the colonies that grew the crops. In the Indian Ocean, by contrast, an older trade continued in which Asian and Arab merchants carried cloth, spices, and other goods, and Europeans mostly held coastal ports.",
          "The two oceans were different."),
      ] },
  ],
};

// Topic 5.2 Quiz: Nationalism and Revolutions
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
import { maps } from "../whap/maps.js";
const MAP = "Map drawn for this review from Natural Earth land outlines (public domain). Places, dates, and routes checked against ";
const map = (id, caption, refs) => [{ svg: maps[id], caption }, { cite: MAP + refs + ".", kind: "map" }];
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why, difficulty) => ({ id: "t52-m0" + n, skill: "u5", type: "mcq", set, topic: "5.2", reasoning, question, choices, why, difficulty, answer: 0 });
const Q = (sub, prompt, earns, yes, no, example, notExample) => ({ id: "t52-q1" + sub, skill: "u5", type: "fr", set: "t52-s3", part: "SAQ 1", sub, topic: "5.2", lead: SAQ, prompt, earns, yes, no, example, notExample });

export const sets = {
  "t52-s1": {
    id: "t52-s1", name: "Theodor Herzl, The Jewish State, 1896", intro: ONE,
    sources: [{ title: "Source", blocks: [
      { p: "The Jewish question exists wherever Jews live in perceptible numbers. Where it does not exist, it is carried by Jews in the course of their migrations. We naturally move to those places where we are not persecuted, and there our presence produces persecution. ... I think the Jewish question is no more a social than a religious one, notwithstanding that it sometimes takes these and other forms. It is a national question, which can only be solved by making it a political world-question to be discussed and settled by the civilized nations of the world in council." },
      { p: "We are a people—one people." },
      { p: "We have honestly endeavored everywhere to merge ourselves in the social life of surrounding communities and to preserve the faith of our fathers. We are not permitted to do so. In vain are we loyal patriots ... In countries where we have lived for centuries we are still cried down as strangers ..." },
      { p: "... Let the sovereignty be granted us over a portion of the globe large enough to satisfy the rightful requirements of a nation; the rest we shall manage for ourselves." },
      { cite: "Theodor Herzl, Austro-Hungarian Jewish journalist in Vienna, Der Judenstaat (The Jewish State), first published in German in Vienna in 1896, in the English translation by Sylvie D'Avigdor, as published by Project Gutenberg. Herzl had reported from Paris on the trial of Alfred Dreyfus, a Jewish French army officer falsely convicted of treason in 1894.", url: "https://www.gutenberg.org/cache/epub/25282/pg25282-images.html", kind: "primary" },
    ] }],
  },
  "t52-s2": {
    id: "t52-s2", name: "The Greek war of independence", intro: "Use the map below to answer the questions that follow.", label: "Map",
    sources: [{ title: "Map", blocks: map("u5f-greek-kingdom", "The Greek War of Independence and the Kingdom of Greece, 1821 to 1834, with the year places outside the kingdom later joined Greece", "Wikipedia, \"Greek War of Independence\", and Wikipedia, \"Kingdom of Greece\" and \"Muhammad Ali of Egypt\"") }],
  },
  "t52-s3": {
    id: "t52-s3", name: "The rebellion of Túpac Amaru II", intro: SAQ,
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that the rebellion led by Túpac Amaru II in Peru in 1780 and 1781 was the largest challenge to Spanish rule in the Americas before the wars of independence. José Gabriel Condorcanqui, a wealthy mule trader of Indigenous descent who claimed descent from the last Inca ruler, took the name Túpac Amaru. He protested forced labor in the mines and the reparto, under which Spanish officials forced Indigenous communities to buy goods at high prices, and he had a hated Spanish official executed. The rebellion spread across the southern Andes, and tens of thousands of people died. Spanish forces captured Túpac Amaru and executed him in Cuzco in 1781. Afterward, colonial officials banned Inca dress and symbols, and many creole elites, frightened by the uprising, became more cautious about challenging Spanish rule." },
      PRACTICE,
    ] }],
  },
};

export default {
  forms: [
    { id: "t52", name: "Topic 5.2 Quiz: Nationalism and Revolutions", group: "Unit 5: Revolutions",
      items: [
        // ===== Set 1: Herzl =====
        M(1, "t52-s1", "Claims and evidence in sources", "Herzl's main argument is that the \"Jewish question\" is",
          ["a national question that needs a Jewish state", "a religious question that conversion would solve", "a social question that better schooling would solve", "a problem that blending into society would solve"],
          ["Correct. He calls it \"a national question\" and asks for sovereignty over \"a portion of the globe.\"",
            "He says it is \"no more a social than a religious one.\"",
            "He says it is a national question, not a social one.",
            "He says Jews tried to merge into the life of their communities but \"are not permitted to do so.\""], "easy"),
        M(2, "t52-s1", "Contextualization", "Herzl's argument is best understood in the context of which development in the late 1800s?",
          ["Rising antisemitism, such as the Dreyfus affair in France", "The emancipation of serfs in the Russian Empire in 1861", "The European Scramble for Africa after the Berlin Conference", "The unification of Italy under Piedmont-Sardinia by 1870"],
          ["Correct. The Dreyfus affair, which Herzl reported on, and pogroms in the Russian Empire convinced him that assimilation would not protect Jews.",
            "Emancipation concerned Russian peasants, not the persecution of Jews that Herzl describes.",
            "He writes about persecution in Europe, not colonial conquest.",
            "Italian unification was a separate nationalist movement and does not explain his concern with persecution."], "easy"),
        M(3, "t52-s1", "Comparison", "Herzl's claim that the Jews are \"one people\" is most similar to the arguments of which other group in the 1800s?",
          ["Italian nationalists who wanted one state for one people", "Socialists who said workers of all nations shared one cause", "Liberal economists who called for free trade between nations", "Christian missionaries who sought converts in Africa and Asia"],
          ["Correct. Like Mazzini and other Italian nationalists, Herzl argued that a people with a shared identity deserved its own state.",
            "Socialists stressed class across national lines, while Herzl stressed one nation.",
            "Arguments about tariffs and trade are unrelated to his claim.",
            "Herzl's argument is national and political, not missionary."], "moderate"),
        M(4, "t52-s1", "Continuity and change", "Herzl's ideas most directly contributed to which later development?",
          ["The Zionist movement and the founding of Israel in 1948", "The pogroms against Jews in the Russian Empire in the 1880s", "The unification of Germany under Prussian leadership in 1871", "The Dreyfus affair and the trial of a Jewish officer in 1894"],
          ["Correct. Herzl organized the first Zionist Congress in 1897, and the movement grew until the state of Israel was founded.",
            "The pogroms came before he wrote and helped cause his ideas; they were not a result of them.",
            "German unification came before he wrote.",
            "The Dreyfus trial came before he wrote and helped shape his ideas."], "moderate"),
        // ===== Set 2: Greek independence (map) =====
        M(5, "t52-s2", "Continuity and change", "The places marked outside the Kingdom of Greece in 1832, with the years they joined Greece, best support which conclusion?",
          ["Greece kept adding Ottoman and British-held lands for decades.", "Greece won all of its later lands at the Congress of Vienna.", "The Ottoman Empire took land back from Greece after 1832.", "Greece gave Corfu, Larissa, and Crete to Britain in 1864."],
          ["Correct. The map shows Corfu joining in 1864, Larissa in 1881, Thessaloniki and Chios in 1912, and Crete in 1913.",
            "The Congress of Vienna met in 1814 and 1815, before Greece existed as a state.",
            "The map shows Greece gaining places after 1832, not losing them.",
            "The map shows Corfu leaving British control to join Greece in 1864, not Greece giving land away."], "easy"),
        M(6, "t52-s2", "Causation", "The naval battle marked at Navarino in 1827 mattered to Greek independence mainly because",
          ["European navies destroyed the fleet supplying the sultan's forces", "Greek rebels won it and then seized the Ottoman capital", "Lord Byron's volunteers defeated the Egyptian army there", "the Ottoman victory there led to the fall of Missolonghi"],
          ["Correct. British, French, and Russian ships destroyed the Ottoman and Egyptian fleet, and soon afterward the powers recognized an independent Greece.",
            "The map shows Istanbul outside Greece; the rebels never took the Ottoman capital.",
            "Byron died in 1824, and the battle was fought at sea by the great powers' navies.",
            "The map dates the fall of Missolonghi to 1826, a year before the battle."], "difficult"),
        M(7, "t52-s2", "Comparison", "As a nationalist revolt that broke a territory away from a multiethnic empire, the Greek revolt was most similar to which other movement?",
          ["Serbian risings that won self-rule from the Ottomans", "German unification under Prussian leadership", "The Taiping Rebellion against the Qing dynasty", "The Meiji Restoration of the Japanese emperor"],
          ["Correct. Like the Greeks, Serbs rose against Ottoman rule as a Christian Balkan people, winning self-rule in the 1810s and 1830s.",
            "German nationalists joined many states into one; they did not break away from an empire.",
            "The Taiping fought to replace the Qing dynasty in China, not to create a separate nation.",
            "The Meiji Restoration changed the government of an independent Japan."], "difficult"),
        M(8, "t52-s2", "Causation", "The move of the capital from Nafplio to Athens in 1834 most likely reflected which goal?",
          ["Linking the new state to the glory of ancient Greece", "Placing the capital near British-ruled Corfu for protection", "Building the capital in the empire's largest trading port", "Moving away from the battlefield of Navarino after 1827"],
          ["Correct. Greek nationalists presented the new nation as heir to ancient Greece, and Athens, though small in 1834, was its most famous city.",
            "The map shows Corfu far to the northwest of Athens.",
            "Athens was a small town in 1834, and the largest Ottoman ports, such as Istanbul and Smyrna, stayed outside Greece.",
            "Navarino lies in the southwestern Peloponnese, and the battle ended seven years before the move."], "difficult"),
        // ===== SAQ: Túpac Amaru II =====
        Q("a", "Identify ONE cause of Túpac Amaru's rebellion described in the passage.",
          "The response names one cause from the passage.",
          ["Forced labor in the mines.", "The reparto, which forced Indigenous communities to buy goods at high prices.", "Abuses by Spanish officials, one of whom Túpac Amaru had executed."],
          ["\"He wanted to be famous.\" The passage gives no such cause.", "\"Tens of thousands died.\" This is an effect, not a cause.", "\"The French Revolution inspired him.\" This is wrong: the rebellion began in 1780, before 1789."],
          "The passage says Túpac Amaru protested the reparto, a system that forced Indigenous communities to buy goods from Spanish officials at high prices, along with forced labor in the mines.",
          "People were unhappy."),
        Q("b", "Explain ONE way the response to Túpac Amaru's rebellion affected later movements for independence in Spanish America.",
          "The response explains a specific effect of the rebellion or its suppression on later independence movements.",
          ["Creole elites, frightened by a mass Indigenous uprising, became more cautious and in places like Peru were slow to support independence.", "Later independence movements in Peru were led mostly by creoles from outside, such as San Martín and Bolívar's armies, rather than by local Indigenous leaders.", "The ban on Inca dress and symbols showed Spain's determination to crush Indigenous identity, which some later independence leaders used to criticize Spanish rule."],
          ["\"There were later revolutions.\" This does not explain an effect of the rebellion.", "\"The rebellion won independence for Peru in 1781.\" This is false.", "\"Túpac Amaru led the Mexican Revolution.\" This is false."],
          "The passage says many creole elites were frightened by the uprising. Because they feared another revolt by the Indigenous majority, many Peruvian creoles held back from challenging Spain, and Peru became one of the last parts of Spanish America to win independence, with help from armies led by San Martín and Bolívar.",
          "The rebellion was important later."),
        Q("c", "Explain ONE way Túpac Amaru's rebellion was similar to OR different from the Haitian Revolution.",
          "The response makes a specific comparison and explains it.",
          ["Similar: both were risings by colonized or enslaved majorities against harsh labor systems imposed by European colonial rulers.", "Different: the Haitian Revolution won independence in 1804, while Spain crushed Túpac Amaru's rebellion and executed its leader.", "Different: the Haitian Revolution was led by formerly enslaved Africans and used the language of the rights of man, while Túpac Amaru's rebellion drew on Inca heritage and protested specific colonial abuses."],
          ["\"Both happened in the Americas.\" This is true but too general to be a meaningful comparison.", "\"Both were led by Napoleon.\" This is false.", "\"Haiti lost and Peru won.\" This reverses the outcomes."],
          "The two revolts ended very differently. In Haiti, formerly enslaved people defeated French armies and declared independence in 1804. In Peru, Spanish forces captured Túpac Amaru, executed him in 1781, and kept control of the Andes for another forty years.",
          "They were both rebellions."),
      ] },
  ],
};

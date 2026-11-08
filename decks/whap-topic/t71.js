// Topic 7.1 Quiz: Shifting Power After 1900
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why) => ({ id: "t71-m0" + n, skill: "u7", type: "mcq", set, topic: "7.1", reasoning, question, choices, why, answer: 0 });
const Q = (sub, prompt, earns, yes, no, example, notExample) => ({ id: "t71-q1" + sub, skill: "u7", type: "fr", set: "t71-s3", part: "SAQ 1", sub, topic: "7.1", lead: SAQ, prompt, earns, yes, no, example, notExample });

export const sets = {
  "t71-s1": {
    id: "t71-s1", name: "Lenin's Decree on Land, 1917", intro: ONE,
    sources: [{ title: "Source", blocks: [
      { p: "... The outbreak of the armed uprising, the second, October, Revolution, clearly proves that the land must be turned over to the peasants. The government that has been overthrown and the compromising parties of the Mensheviks and Socialist-Revolutionaries committed a crime when they kept postponing the settlement of the land question on various pretexts and thereby brought the country to economic chaos and a peasant revolt. ..." },
      { p: "Decree on Land. (1) Landed proprietorship is abolished forthwith without any compensation." },
      { p: "(2) The landed estates, as also all crown, monastery, and church lands, with all their livestock, implements, buildings and everything pertaining thereto, shall be placed at the disposal of the volost land committees and the uyezd Soviets of Peasants' Deputies pending the convocation of the Constituent Assembly." },
      { p: "[From the Peasant Mandate included in the decree:] (1) Private ownership of land shall be abolished forever; land shall not be sold, purchased, leased, mortgaged, or otherwise alienated. All land ... shall be confiscated without compensation and become the property of the whole people, and pass into the use of all those who cultivate it." },
      { cite: "V. I. Lenin, report on land and the Decree on Land, adopted by the Second All-Russia Congress of Soviets of Workers' and Soldiers' Deputies, Petrograd, October 26 (November 8), 1917, the day after the Bolsheviks seized power, as published in the Marxists Internet Archive (from Lenin's Collected Works). Volosts and uyezds were rural districts; the bracketed note was added for this review.", url: "https://www.marxists.org/archive/lenin/works/1917/oct/25-26/26d.htm", kind: "primary" },
    ] }],
  },
  "t71-s2": {
    id: "t71-s2", name: "The Young Turk Revolution", intro: "Use the passage below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that the Ottoman Empire's last decade before the First World War showed both the hopes and the dangers of reform in a multiethnic empire. In 1908, army officers and officials of the Committee of Union and Progress, often called the Young Turks, forced Sultan Abdulhamid II to restore the constitution of 1876 and recall parliament. Many Ottoman subjects, Muslim, Christian, and Jewish, celebrated. But the empire kept losing territory: Austria-Hungary annexed Bosnia in 1908, Italy took Libya in 1911 and 1912, and in the Balkan Wars of 1912 and 1913 the empire lost almost all of its remaining land in Europe. After a coup in 1913, a small group of Young Turk leaders ruled the empire, stressed Turkish identity over the older ideal of equal Ottoman citizenship, and in 1914 brought the empire into the First World War on the side of Germany." },
      PRACTICE,
    ] }],
  },
  "t71-s3": {
    id: "t71-s3", name: "Iran's Constitutional Revolution", intro: SAQ,
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that Iran's Constitutional Revolution of 1905 to 1911 was one of several movements in which subjects of old empires demanded constitutions and limits on royal power. Merchants angry at foreign control of trade, Shi'a clerics, and reformers influenced by European ideas joined in protests against the Qajar shah, whose government had sold concessions over customs, banking, and tobacco to foreign companies. In 1906, the shah agreed to an elected assembly, the Majlis, and a constitution. But in 1907 Britain and Russia divided Iran into spheres of influence without consulting it, and in 1911 Russian troops helped close the Majlis. The discovery of oil in southwestern Iran in 1908, developed by a British company, made the country even more important to the great powers." },
      PRACTICE,
    ] }],
  },
};

export default {
  forms: [
    { id: "t71", name: "Topic 7.1 Quiz: Shifting Power After 1900", group: "Unit 7: Global Conflict",
      items: [
        // ===== Set 1: Decree on Land =====
        M(1, "t71-s1", "Sourcing and situation", "Lenin's main purpose in issuing the Decree on Land the day after the Bolsheviks took power was most likely to",
          ["win the support of Russia's peasants, the great majority of the population, for the new government", "restore the property of the nobles", "return land to the Orthodox Church", "invite foreign companies to buy Russian farmland"],
          ["Correct. By giving land to those who farmed it, the Bolsheviks sought peasant support for their seizure of power.",
            "The decree abolishes landed proprietorship without compensation.",
            "It confiscates monastery and church lands.",
            "It forbids the sale of land."]),
        M(2, "t71-s1", "Contextualization", "The decree is best understood in the context of which development?",
          ["War, hunger, and peasant revolts in Russia in 1917, which brought down the tsar and then the Provisional Government", "The emancipation of the serfs in 1861", "The New Economic Policy of the 1920s", "The collectivization of agriculture under Stalin"],
          ["Correct. Lenin blames the overthrown government for postponing land reform while peasants revolted.",
            "That came more than fifty years earlier.",
            "The NEP began in 1921.",
            "Collectivization came after 1928 and took land back from individual peasants."]),
        M(3, "t71-s1", "Continuity and change", "Which later development most directly reversed the promise that land would \"pass into the use of all those who cultivate it\"?",
          ["Stalin's forced collectivization of farms beginning in 1928", "The Bolshevik Decree on Peace of 1917", "The founding of the Soviet Union in 1922", "The Russian Civil War's end in 1921"],
          ["Correct. Collectivization forced peasants into state-controlled collective farms and brought famine.",
            "The Decree on Peace concerned the war.",
            "The founding of the USSR did not take land from peasants.",
            "The war's end led to the NEP, which allowed peasants to sell surplus."]),
        M(4, "t71-s1", "Comparison", "The Decree on Land is most similar to which other development of the early 1900s?",
          ["Article 27 of Mexico's Constitution of 1917, which allowed land to be taken from large estates and given to villages", "The Meiji government's land tax of 1873", "The British enclosure acts of the 1700s", "The Treaty of Versailles"],
          ["Correct. Both revolutions promised land to peasants and limited large landholding.",
            "The Meiji land tax raised revenue and did not redistribute estates.",
            "Enclosure concentrated land in fewer hands.",
            "Versailles was a peace treaty."]),
        // ===== Set 2: The Young Turks =====
        M(5, "t71-s2", "Claims and evidence in sources", "Which evidence from the passage best supports the claim that the Ottoman Empire was losing power before 1914?",
          ["The empire lost almost all of its remaining land in Europe in the Balkan Wars.", "The Young Turks restored the constitution of 1876.", "Many Ottoman subjects celebrated in 1908.", "Young Turk leaders stressed Turkish identity."],
          ["Correct. Territorial losses to Austria-Hungary, Italy, and the Balkan states show its decline.",
            "This shows reform, not loss of power.",
            "This shows popular hopes.",
            "This shows a change in ideology."]),
        M(6, "t71-s2", "Continuity and change", "The shift from equal Ottoman citizenship to Turkish identity best illustrates which development?",
          ["The growth of ethnic nationalism, which strained multiethnic empires", "The spread of Marxism in the Middle East", "The revival of the Mughal Empire", "The end of all reform in the empire"],
          ["Correct. Like the Habsburg and Russian empires, the Ottoman state faced rising nationalisms among its peoples.",
            "The passage does not describe Marxism.",
            "The Mughal Empire ended in 1857.",
            "The passage describes reforms such as restoring the constitution."]),
        M(7, "t71-s2", "Causation", "The Young Turks' decision to enter the First World War with Germany most directly led to",
          ["the collapse of the Ottoman Empire and the division of its Arab lands among Britain and France", "the Ottoman conquest of Russia", "the restoration of Ottoman rule in the Balkans", "Ottoman neutrality in the war"],
          ["Correct. Defeat in 1918 ended the empire, and its Arab provinces became British and French mandates.",
            "The Ottomans did not conquer Russia.",
            "The Balkans were not regained.",
            "The empire entered the war."]),
        M(8, "t71-s2", "Comparison", "The Young Turk Revolution is most similar to which other development of the early 1900s?",
          ["China's revolution of 1911, which ended the Qing dynasty and sought a modern state", "The Meiji Restoration of 1868", "The unification of Italy", "The partition of Africa"],
          ["Correct. Both revolutions were led by modernizing officers and reformers in old empires weakened by foreign pressure.",
            "The Meiji Restoration came forty years earlier.",
            "Italian unification created a new state in the 1860s.",
            "The partition of Africa was imposed by European powers."]),
        // ===== SAQ: Iran =====
        Q("a", "Identify ONE group, described in the passage, that supported the Constitutional Revolution in Iran.",
          "The response names one group from the passage.",
          ["Merchants angry at foreign control of trade.", "Shi'a clerics.", "Reformers influenced by European ideas."],
          ["\"The shah.\" The movement opposed the shah's power.", "\"Russian troops.\" They helped close the Majlis.", "\"British oil companies.\" They are not described as supporters."],
          "The passage says merchants who were angry at foreign control of trade joined the protests against the shah.",
          "Iranians supported it."),
        Q("b", "Explain ONE way foreign powers limited Iran's independence in the period 1900 to 1914.",
          "The response explains a specific way foreign powers limited Iran's independence.",
          ["In 1907 Britain and Russia divided Iran into spheres of influence without consulting it.", "Russian troops helped close the Majlis in 1911, ending the constitutional experiment.", "A British company controlled the oil discovered in 1908, so Iran's main resource was developed for foreign benefit."],
          ["\"Foreign powers were involved.\" This explains nothing specific.", "\"Iran conquered Russia.\" This is false.", "\"The shah sold concessions.\" This is something the shah did; the response must explain how foreign powers limited Iran."],
          "In 1907 Britain and Russia, rivals in Asia, agreed to divide Iran into a Russian sphere in the north and a British sphere in the southeast without asking the Iranian government, showing that Iran's fate was decided by outside powers.",
          "Iran was not free."),
        Q("c", "Explain ONE way Iran's Constitutional Revolution was similar to another revolution or reform movement in the period 1900 to 1914.",
          "The response names another movement and explains a specific similarity.",
          ["Like the Young Turk Revolution of 1908, Iran's revolution forced a ruler to accept a constitution and an elected parliament.", "Like China's revolution of 1911, it was driven partly by anger at foreign concessions and a weak ruling dynasty.", "Like the Russian Revolution of 1905, it forced a monarch to allow an elected assembly that he later tried to restrict."],
          ["\"Other countries had revolutions.\" This names no specific movement.", "\"Iran's revolution was like the French Revolution of 1789.\" This is outside the period and needs explanation.", "\"Iran's revolution created a communist state.\" This is false."],
          "Iran's revolution was similar to the Young Turk Revolution of 1908 in the Ottoman Empire. In both, reformers and other groups forced a ruler to accept a constitution and an elected parliament, hoping that representative government would strengthen their countries against foreign pressure.",
          "Iran was like other places."),
      ] },
  ],
};

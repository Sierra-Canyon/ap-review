// Topic 6.8 Quiz: Causation in the Imperial Age
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why) => ({ id: "t68-m0" + n, skill: "u6", type: "mcq", set, topic: "6.8", reasoning, question, choices, why, answer: 0 });
const Q = (sub, prompt, earns, yes, no, example, notExample) => ({ id: "t68-q1" + sub, skill: "u6", type: "fr", set: "t68-s3", part: "SAQ 1", sub, topic: "6.8", lead: SAQ, prompt, earns, yes, no, example, notExample });

export const sets = {
  "t68-s1": {
    id: "t68-s1", name: "The Treaty of Shimonoseki, 1895", intro: ONE,
    sources: [{ title: "Source", blocks: [
      { p: "ARTICLE I. China recognizes definitively the full and complete independence and autonomy of Corea, and in consequence, the payment of tribute and the performance of ceremonies and formalities by Corea to China in derogation of such independence and autonomy, shall wholly cease for the future." },
      { p: "ARTICLE II. China cedes to Japan in perpetuity and full sovereignty, the following territories together with all fortifications, arsenals and public property thereon: a) The southern portion of the Province of Feng-Tien [the Liaodong Peninsula in southern Manchuria] ... b) The Island of Formosa together with all Islands appertaining or belonging to the said Island of Formosa. c) The Pescadores Group ..." },
      { p: "ARTICLE IV. China agrees to pay to Japan as a war indemnity, the sum of 200,000,000 Kuping Taels. ..." },
      { cite: "Treaty of Peace between the Empire of Japan and the Empire of China (Treaty of Shimonoseki), signed April 17, 1895, by Itō Hirobumi and Mutsu Munemitsu for Japan and Li Hongzhang for China, ending the Sino-Japanese War of 1894 and 1895, English text as published in \"The World and Japan\" Database (National Graduate Institute for Policy Studies and the University of Tokyo); two printing errors in that text corrected, and the bracketed explanation added for this review. Corea is Korea and Formosa is Taiwan. Six days later, Russia, France, and Germany pressed Japan to return the Liaodong Peninsula, which it did in exchange for a larger indemnity.", url: "https://worldjpn.net/documents/texts/pw/18950417.T1E.html", kind: "primary" },
    ] }],
  },
  "t68-s2": {
    id: "t68-s2", name: "Why the new imperialism?", intro: "Use the passage below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "Historians have long debated why industrial powers took so much new territory between about 1870 and 1914. Some stress economics: factories needed raw materials such as rubber, copper, and palm oil, and investors sought profits abroad. Others stress rivalry among states: after Germany and Italy unified, the great powers competed for prestige, naval bases, and coaling stations, and one power's gains spurred others to grab land before it was taken. Still others point to ideas, such as nationalism, Social Darwinism, and the belief in a civilizing mission, which made empire seem natural and good to many Europeans, Americans, and Japanese. Finally, some historians stress what made conquest possible: steamships, railways, the telegraph, quinine, and machine guns lowered the cost of conquering and holding distant lands. Most historians agree that these causes worked together." },
      PRACTICE,
    ] }],
  },
  "t68-s3": {
    id: "t68-s3", name: "Africa in 1900", intro: SAQ,
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that the colonial conquest of Africa between 1880 and 1900 changed the continent more quickly than any earlier event since the Atlantic slave trade. In 1870, Europeans ruled only about a tenth of Africa, mostly along the coasts. By 1900, only Ethiopia and Liberia remained independent. Colonial borders, often drawn in Europe, cut across older states and peoples. Colonial governments taxed Africans in cash, which forced many to grow export crops or work for wages in mines and on plantations. Railways were built from the mines and plantations to the ports, not to link African regions with one another. At the same time, African rulers, merchants, and religious leaders found ways to resist, negotiate, or work within the new order, and mission schools trained a small group of Africans who would later lead movements for independence." },
      PRACTICE,
    ] }],
  },
};

export default {
  forms: [
    { id: "t68", name: "Topic 6.8 Quiz: Causation in the Imperial Age", group: "Unit 6: Consequences of Industrialization",
      items: [
        // ===== Set 1: Shimonoseki =====
        M(1, "t68-s1", "Claims and evidence in sources", "The treaty best supports which claim about East Asia in 1895?",
          ["Japan had become an imperial power able to take territory and indemnities from China", "China had defeated Japan in war", "Korea had become a Chinese province", "Western powers had no interest in East Asia"],
          ["Correct. Japan gained Taiwan, the Pescadores, and Liaodong and a large indemnity.",
            "China ceded territory and paid Japan, which shows it lost.",
            "Article I ends Korea's tributary ties to China.",
            "Russia, France, and Germany intervened soon after."]),
        M(2, "t68-s1", "Causation", "Japan's victory in 1895 is best explained by which development?",
          ["Japan's rapid industrialization and military modernization after the Meiji Restoration", "China's conquest of Korea", "Britain's alliance with China", "Japan's isolation from all foreign technology"],
          ["Correct. Japan built a modern army and navy with Western techniques, while Qing self-strengthening was more limited.",
            "China did not conquer Korea.",
            "Britain did not fight for China.",
            "Japan adopted foreign technology."]),
        M(3, "t68-s1", "Comparison", "Article I, which ended Korea's tribute to China, most directly shows which change in East Asia?",
          ["The end of the old Chinese tributary system as Japan replaced China as the leading power in Korea", "The beginning of the Chinese tributary system", "Korea's annexation by Russia", "China's victory over Western powers"],
          ["Correct. For centuries Korea had sent tribute to China; the treaty broke that tie and opened Korea to Japanese influence.",
            "The tributary system was centuries old.",
            "Russia did not annex Korea.",
            "China lost this war."]),
        M(4, "t68-s1", "Causation", "The intervention of Russia, France, and Germany described in the source note most directly contributed to which later development?",
          ["Russian expansion into Manchuria and the Russo-Japanese War of 1904 and 1905", "Japan's withdrawal from Taiwan", "The end of European interest in China", "An alliance between China and Japan against Europe"],
          ["Correct. Russia soon leased Port Arthur on the same peninsula, angering Japan and leading to war.",
            "Japan kept Taiwan until 1945.",
            "European powers seized spheres of influence in China in 1898.",
            "No such alliance formed."]),
        // ===== Set 2: Why the new imperialism? =====
        M(5, "t68-s2", "Developments and processes", "The passage is organized mainly to",
          ["present several explanations historians give for the same development", "tell the story of one empire in order", "argue that only economics caused imperialism", "describe resistance to imperialism"],
          ["Correct. It groups explanations under economics, rivalry, ideas, and technology.",
            "It discusses many powers.",
            "It says most historians think causes worked together.",
            "Resistance is not its subject."]),
        M(6, "t68-s2", "Claims and evidence in sources", "Which evidence would best support the explanation based on rivalry among states?",
          ["Britain occupied Egypt in 1882 partly to secure the Suez Canal route to India against other powers", "Rubber prices rose in the 1890s", "Missionaries built schools in Africa", "Quinine reduced deaths from malaria"],
          ["Correct. Strategic competition for routes and bases shows rivalry at work.",
            "This supports the economic explanation.",
            "This supports the explanation based on ideas.",
            "This supports the technological explanation."]),
        M(7, "t68-s2", "Causation", "According to the passage, technology contributed to imperialism mainly by",
          ["lowering the cost of conquering and holding distant lands", "creating demand for spices", "ending the slave trade", "making nationalism less popular"],
          ["Correct. The passage lists steamships, railways, the telegraph, quinine, and machine guns.",
            "Spices are not mentioned.",
            "The slave trade is not discussed.",
            "Nationalism is listed as a separate cause."]),
        M(8, "t68-s2", "Comparison", "The new imperialism differed from European expansion between 1450 and 1750 mainly in that it",
          ["used industrial technology to conquer large inland territories in Africa and Asia", "was driven only by the search for spices", "was carried out mainly by Spain and Portugal", "relied on trading posts along coasts"],
          ["Correct. Earlier expansion in Africa and Asia mostly held coastal posts; industrial tools made inland conquest possible.",
            "Spices were central to earlier expansion, not the new imperialism.",
            "Britain, France, Germany, and others led the new imperialism.",
            "That describes the earlier period."]),
        // ===== SAQ: Africa in 1900 =====
        Q("a", "Identify ONE change in Africa between 1870 and 1900 described in the passage.",
          "The response names one change from the passage.",
          ["European rule spread from about a tenth of Africa to almost all of it.", "Colonial borders cut across older states and peoples.", "Cash taxes forced many Africans to grow export crops or work for wages."],
          ["\"Ethiopia stayed independent.\" This is a continuity, not a change.", "\"Africa was colonized in 1450.\" This is wrong.", "\"Things changed.\" This is too general."],
          "The passage says that in 1870 Europeans ruled about a tenth of Africa, but by 1900 only Ethiopia and Liberia were independent.",
          "Africa changed."),
        Q("b", "Explain ONE cause of the rapid colonial conquest of Africa between 1870 and 1900.",
          "The response explains a specific cause.",
          ["Machine guns and breech-loading rifles let small European forces defeat much larger African armies.", "Quinine protected Europeans from malaria, so they could survive in the interior.", "Rivalry among European powers, formalized at the Berlin Conference of 1884 and 1885, led each to claim territory before others did."],
          ["\"Europe wanted Africa.\" This explains nothing specific.", "\"Africans invited Europeans to rule them.\" This is false.", "\"The Atlantic slave trade caused the conquest in 1880.\" This needs explanation and is inaccurate as stated."],
          "Quinine, which prevented and treated malaria, let European soldiers and officials survive in the African interior, where disease had killed many before. Combined with steamships and machine guns, it made inland conquest possible.",
          "Europeans were strong."),
        Q("c", "Explain ONE way colonial rule in Africa by 1900 laid the groundwork for later developments in the 1900s.",
          "The response explains a specific link between colonial rule and a later development.",
          ["Colonial borders became the borders of independent African states, which sometimes led to conflict within them.", "Mission schools trained Africans who became leaders of independence movements, such as Kwame Nkrumah in Ghana.", "Economies built around one export crop or mineral left many independent states dependent on world prices."],
          ["\"Colonialism happened.\" This explains no link.", "\"Africa became independent in 1900.\" This is false.", "\"Colonial rule had no lasting effects.\" This contradicts the passage."],
          "Colonial powers drew borders without regard for African peoples and states. When colonies became independent in the 1950s and 1960s, the new countries kept these borders, which grouped rival peoples together and contributed to civil wars, such as Nigeria's in 1967.",
          "Colonialism mattered later."),
      ] },
  ],
};

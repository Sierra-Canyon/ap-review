// Topic 6.8 Quiz: Causation in the Imperial Age
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
import { bars } from "../../plot.js";
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why, difficulty) => ({ id: "t68-m0" + n, skill: "u6", type: "mcq", set, topic: "6.8", reasoning, question, choices, why, difficulty, answer: 0 });
const Q = (sub, prompt, earns, yes, no, example, notExample) => ({ id: "t68-q1" + sub, skill: "u6", type: "fr", set: "t68-s3", part: "SAQ 1", sub, topic: "6.8", lead: SAQ, prompt, earns, yes, no, example, notExample });

// Percent of each region's land held by European colonial powers and the United States, 1876 and 1900, from Supan via Lenin (see the cite below).
const SUPAN = { regions: ["Africa", "Polynesia", "Asia", "Australia", "Americas"], y1876: [10.8, 56.8, 51.5, 100.0, 27.5], y1900: [90.4, 98.9, 56.6, 100.0, 27.2] };

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
    id: "t68-s2", name: "Colonial rule by region, 1876 and 1900", intro: "Use the charts and table below to answer the questions that follow.", label: "Chart",
    sources: [{ title: "Chart", blocks: [
      { svg: bars({ labels: SUPAN.regions, values: SUPAN.y1876, y: [0, 100], step: 20, yname: "Percent of land", fmt: (v) => v.toFixed(1), width: 560, height: 300,
        alt: "Bar chart of the percent of each region's land held by European colonial powers and the United States in 1876: " + SUPAN.regions.map((r, i) => `${r}, ${SUPAN.y1876[i].toFixed(1)}`).join("; ") + "." }),
        caption: "Percent of each region's land held by European colonial powers and the United States, 1876" },
      { svg: bars({ labels: SUPAN.regions, values: SUPAN.y1900, y: [0, 100], step: 20, yname: "Percent of land", fmt: (v) => v.toFixed(1), width: 560, height: 300,
        alt: "Bar chart of the percent of each region's land held by European colonial powers and the United States in 1900: " + SUPAN.regions.map((r, i) => `${r}, ${SUPAN.y1900[i].toFixed(1)}`).join("; ") + ". Africa rose from about a tenth to about nine tenths, Polynesia to almost all, Asia changed little, and the Americas stayed about the same." }),
        caption: "Percent of each region's land held by European colonial powers and the United States, 1900" },
      { table: { head: ["Region", "1876", "1900", "Change"], rows: SUPAN.regions.map((r, i) => [r, SUPAN.y1876[i].toFixed(1), SUPAN.y1900[i].toFixed(1), (SUPAN.y1900[i] - SUPAN.y1876[i] > 0 ? "+" : "") + (SUPAN.y1900[i] - SUPAN.y1876[i]).toFixed(1)]) } },
      { cite: "Figures of the German geographer Alexander Supan, Die territoriale Entwicklung der europäischen Kolonien (1906), as given in the table \"Percentage of territory belonging to the European colonial powers (including the United States)\" in V. I. Lenin, Imperialism, the Highest Stage of Capitalism (written 1916, published 1917), chapter VI. \"Polynesia\" means the islands of the Pacific.", url: "https://www.marxists.org/archive/lenin/works/1916/imp-hsc/ch06.htm", kind: "data" },
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
          ["Japan could now take land and indemnities from China.", "China had defeated Japan and forced it to pay tribute.", "Korea had become a province ruled directly by China.", "Western powers had lost all interest in East Asia."],
          ["Correct. Japan gained Taiwan, the Pescadores, and the Liaodong Peninsula and an indemnity of 200 million taels.",
            "China ceded territory and paid Japan, which shows that China lost.",
            "Article I ends Korea's tributary ties to China.",
            "The source note says Russia, France, and Germany intervened six days later."],
          "easy"),
        M(2, "t68-s1", "Causation", "Japan's victory in 1895 is best explained by which development?",
          ["Japan's industrial and military reforms after 1868", "China's Self-Strengthening program of the 1860s", "Britain's naval alliance with Japan from 1902", "Japan's closing of its ports under the Tokugawa"],
          ["Correct. The Meiji government built a conscript army, a steam navy, and industries on Western models.",
            "Self-Strengthening was a Qing program; it was more limited than Japan's reforms and did not prevent defeat.",
            "The Anglo-Japanese Alliance came seven years after the war.",
            "Tokugawa seclusion ended in the 1850s; it did not build Japan's modern forces."],
          "moderate"),
        M(3, "t68-s1", "Continuity and change", "Article I, which ended Korea's tribute to China, most directly shows which change in East Asia?",
          ["The end of China's tributary system in Korea", "The start of Korea's tribute missions to China", "Russia's annexation of the Korean peninsula", "Korea's rise as an industrial naval power"],
          ["Correct. For centuries Korea had sent tribute to China; the treaty broke that tie and opened Korea to Japanese influence.",
            "Korea's tribute to China was centuries old; the treaty ended it.",
            "Russia competed for influence in Korea but never annexed it; Japan did in 1910.",
            "Korea was weak and became a Japanese protectorate in 1905."],
          "moderate"),
        M(4, "t68-s1", "Causation", "The intervention of Russia, France, and Germany described in the source note most directly contributed to which later development?",
          ["The Russo-Japanese War of 1904 and 1905", "Japan's return of Taiwan to China in 1898", "The Boxer attacks on foreigners in China", "China's alliance with Japan against Russia"],
          ["Correct. Russia soon leased Port Arthur on the same peninsula Japan had been forced to return, angering Japan and leading to war.",
            "Japan kept Taiwan until 1945.",
            "The Boxer Rising of 1900 grew from anger at foreign influence and missionaries, not from this intervention.",
            "China signed a secret alliance with Russia against Japan in 1896, the reverse of this choice."],
          "difficult"),
        // ===== Set 2: Chart of colonial rule by region =====
        M(5, "t68-s2", "Claims and evidence in sources", "Which conclusion is best supported by the charts and table?",
          ["Most of Africa came under colonial rule in under 25 years.", "Colonial powers held more of Asia than of Africa in 1900.", "Colonial rule in the Americas grew sharply after 1876.", "Polynesia was the region least under colonial rule in 1900."],
          ["Correct. The share of Africa under colonial rule rose from 10.8 percent in 1876 to 90.4 percent in 1900.",
            "In 1900 the share for Asia was 56.6 percent and for Africa 90.4 percent.",
            "The share for the Americas fell slightly, from 27.5 to 27.2 percent.",
            "Polynesia's share was 98.9 percent, one of the highest."],
          "easy"),
        M(6, "t68-s2", "Causation", "Which development most directly made possible the change shown for Africa?",
          ["Quinine, steamships, and machine guns", "The end of the Atlantic slave trade", "The spread of Islam in the savanna", "Liberia's independence from 1847"],
          ["Correct. Quinine cut deaths from malaria, steamships carried troops up rivers, and machine guns let small forces defeat large armies, so conquest of the interior became cheap and fast.",
            "The slave trade's end changed what Africa exported, but it came decades earlier and did not make conquest possible.",
            "Islamic reform movements built strong West African states, which often resisted conquest rather than enabling it.",
            "Liberia stayed independent and was one of the few parts of Africa not colonized."],
          "moderate"),
        M(7, "t68-s2", "Causation", "A historian who stresses rivalry among the powers would most likely point to which evidence to explain the change shown for Africa?",
          ["The Berlin Conference set rules for claiming land.", "Congo rubber was needed for bicycle tires in Europe.", "Missionaries called for an end to the slave trade.", "Quinine cut European deaths from malaria in Africa."],
          ["Correct. The conference of 1884 and 1885 was held to manage the powers' competing claims, and its rules spurred each power to occupy land before others could.",
            "This is true, but it supports an economic explanation, not one based on rivalry.",
            "This is true, but it supports an explanation based on ideas such as the civilizing mission.",
            "This is true, but it supports an explanation based on technology."],
          "difficult"),
        M(8, "t68-s2", "Continuity and change", "The small change shown for the Americas is best explained by which earlier development?",
          ["Most of the Americas had won independence by the 1820s.", "The Berlin Conference had barred colonies in the Americas.", "The Americas held no raw materials that industry needed.", "Spain and Portugal still ruled most of South America."],
          ["Correct. Most of the Americas were already independent states, so the remaining colonial share, mostly Canada and Caribbean islands, changed little.",
            "The Berlin Conference dealt with Africa, not the Americas.",
            "The Americas exported copper, nitrates, rubber, and other raw materials to industry.",
            "Spain and Portugal had lost their mainland American colonies by the 1820s."],
          "moderate"),
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

// Topic 6.5 Quiz: Economic Imperialism
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why) => ({ id: "t65-m0" + n, skill: "u6", type: "mcq", set, topic: "6.5", reasoning, question, choices, why, answer: 0 });
const Q = (sub, prompt, earns, yes, no, example, notExample) => ({ id: "t65-q1" + sub, skill: "u6", type: "fr", set: "t65-s3", part: "SAQ 1", sub, topic: "6.5", lead: SAQ, prompt, earns, yes, no, example, notExample });

export const sets = {
  "t65-s1": {
    id: "t65-s1", name: "The Treaty of Nanjing, 1842", intro: ONE,
    sources: [{ title: "Source", blocks: [
      { p: "Article 2. His Majesty the Emperor of China agrees, that British Subjects, with their families and establishments, shall be allowed to reside, for the purpose of carrying on their mercantile pursuits, without molestation or restraint, at the cities and towns of Canton, Amoy, Foochowfoo, Ningpo, and Shanghai ..." },
      { p: "Article 3. It being obviously necessary and desirable, that British Subjects should have some Port whereat they may careen and refit their Ships, when required, and Keep Stores for that purpose, His Majesty the Emperor of China cedes to Her Majesty the Queen of Great Britain, &c., the Island of Hong-Kong, to be possessed in perpetuity ..." },
      { p: "Article 4. The Emperor of China agrees to pay the sum of Six Millions of Dollars as the value of the opium which was delivered up at Canton in the month of March, 1839 ..." },
      { p: "Article 5. The Government of China, having compelled the British Merchants trading at Canton to deal exclusively with certain Chinese Merchants, called Hong Merchants (or Cohong), who had been licensed by the Chinese Government for that purpose, the Emperor of China agrees to abolish that practice in future at all Ports where British Merchants may reside, and to permit them to carry on their mercantile transactions with whatever persons they please ..." },
      { cite: "Treaty of Nanking (Nanjing) between Great Britain and China, signed aboard the British ship Cornwallis at Nanjing, August 29, 1842, ending the First Opium War, English text as published on Wikisource. Amoy is Xiamen, Foochowfoo is Fuzhou, and Ningpo is Ningbo. In 1839 the Chinese official Lin Zexu had seized and destroyed British merchants' opium at Canton (Guangzhou).", url: "https://en.wikisource.org/wiki/Treaty_of_Nanking", kind: "primary" },
    ] }],
  },
  "t65-s2": {
    id: "t65-s2", name: "The Ottoman Public Debt Administration", intro: "Use the passage below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that European control of Ottoman finances was a form of economic imperialism without conquest. To pay for wars, reforms, and railways, the Ottoman government borrowed heavily from European banks after 1854. In 1875, unable to keep up with payments, it stopped paying its debts. In 1881, the sultan agreed to create the Ottoman Public Debt Administration, run by representatives of British, French, German, and other European bondholders. The Administration took direct control of the revenues from salt, tobacco, silk, alcohol, stamps, and fishing and used them to pay the creditors. It employed thousands of officials across the empire, and by the early 1900s it collected a large share of the state's income. Ottoman reformers resented this \"state within a state,\" which limited their government's ability to spend on its own priorities." },
      PRACTICE,
    ] }],
  },
  "t65-s3": {
    id: "t65-s3", name: "Foreign investment in Porfirian Mexico", intro: SAQ,
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that Mexico under Porfirio Díaz, who ruled from 1876 to 1911, shows how foreign investment could bring growth and dependence at the same time. Díaz's government welcomed American and British capital, and foreign companies built railways, opened mines, and later drilled for oil. Mexico's railways grew from a few hundred miles in the 1870s to more than 12,000 miles by 1910, and they carried silver, copper, and farm goods north to the United States and to the ports. Exports boomed and the government balanced its budget. But foreign companies owned much of the railways, mines, and oil fields, and a few wealthy families and companies acquired vast estates, while many villagers lost their communal lands and worked for low wages. These grievances helped spark the Mexican Revolution in 1910." },
      PRACTICE,
    ] }],
  },
};

export default {
  forms: [
    { id: "t65", name: "Topic 6.5 Quiz: Economic Imperialism", group: "Unit 6: Consequences of Industrialization",
      items: [
        // ===== Set 1: Treaty of Nanjing =====
        M(1, "t65-s1", "Claims and evidence in sources", "Which article of the treaty most clearly ended China's control over how foreigners traded?",
          ["Article 5, which abolished the Cohong system and let British merchants trade with whomever they pleased", "Article 4, which required payment for the destroyed opium", "Article 3, which gave Britain Hong Kong", "Article 2, which named five cities"],
          ["Correct. The Qing had required foreigners to trade only through licensed Hong merchants at Canton; the treaty ended that system.",
            "This is a payment, not a change in how trade worked.",
            "This gave Britain territory.",
            "This opened ports but did not by itself end the Cohong system."]),
        M(2, "t65-s1", "Contextualization", "Article 4's requirement that China pay for the opium destroyed in 1839 is best understood in the context of",
          ["Britain's use of military force to protect an illegal drug trade that balanced its trade with China", "China's request to buy more opium", "a trade agreement negotiated as equals", "Britain's ban on opium at home"],
          ["Correct. British merchants smuggled Indian opium into China to pay for tea; when China destroyed it, Britain went to war.",
            "China had banned the opium trade.",
            "The treaty ended a war China lost.",
            "Opium was legal in Britain at the time."]),
        M(3, "t65-s1", "Developments and processes", "The treaty best illustrates which form of economic imperialism?",
          ["An unequal treaty forced on a defeated state, opening its ports and limiting its control over trade", "Direct colonial rule over all of China", "A joint-stock company's monopoly charter", "A settler colony"],
          ["Correct. China kept its government but lost control of key trade rules and ceded Hong Kong.",
            "Britain took Hong Kong, not all of China.",
            "This is a treaty between states.",
            "No settlement of China is described."]),
        M(4, "t65-s1", "Continuity and change", "Which later development continued the pattern begun by the treaty?",
          ["Further treaties after the Second Opium War and the Sino-Japanese War opened more ports and gave foreigners more privileges", "China's conquest of Britain's colonies", "The return of Hong Kong to China in 1843", "The end of foreign trade in China after 1842"],
          ["Correct. Treaties of 1858, 1860, and 1895 extended foreign rights in China.",
            "China did not conquer British colonies.",
            "Hong Kong returned to China only in 1997.",
            "Foreign trade grew."]),
        // ===== Set 2: Ottoman Public Debt Administration =====
        M(5, "t65-s2", "Causation", "According to the passage, the Ottoman Public Debt Administration was created because",
          ["the Ottoman government could not pay its debts to European lenders", "European powers conquered Istanbul", "the Ottomans wanted to lend money to Europe", "the sultan wanted to abolish taxes"],
          ["Correct. After the government stopped paying in 1875, creditors took control of key revenues.",
            "The passage describes no conquest.",
            "The Ottomans were borrowers.",
            "The Administration collected taxes."]),
        M(6, "t65-s2", "Comparison", "The Ottoman Public Debt Administration is most similar to which other development?",
          ["British and French control of Egypt's finances after Egypt could not repay its debts in 1876", "The Meiji government's control of Japanese tariffs after 1911", "The founding of the Zollverein", "The independence of Latin American states"],
          ["Correct. In both cases, European creditors took over a state's finances to collect debts.",
            "Japan regained control of its own tariffs.",
            "The Zollverein was a German customs union.",
            "Latin American independence was a different process."]),
        M(7, "t65-s2", "Claims and evidence in sources", "Which evidence from the passage best supports the description of the Administration as a \"state within a state\"?",
          ["It employed thousands of officials and collected a large share of the state's income.", "The Ottomans borrowed after 1854.", "The government stopped paying in 1875.", "The sultan agreed to create it."],
          ["Correct. Its size and control of revenue let it act like a separate government.",
            "This explains the debt, not the Administration's power.",
            "This explains why it was created.",
            "This shows how it began."]),
        M(8, "t65-s2", "Developments and processes", "The passage best illustrates which feature of economic imperialism?",
          ["Industrial powers could gain control over a weaker state through loans and debt rather than conquest", "Loans always made borrowing states stronger", "Economic imperialism required settler colonies", "European banks refused to lend to Asian or African states"],
          ["Correct. Debt let European creditors control Ottoman revenues without ruling the empire directly.",
            "The debt limited Ottoman power.",
            "No settlers are involved.",
            "European banks lent heavily."]),
        // ===== SAQ: Porfirian Mexico =====
        Q("a", "Identify ONE effect of foreign investment in Mexico described in the passage.",
          "The response names one effect from the passage.",
          ["Railways grew to more than 12,000 miles by 1910.", "Exports of silver, copper, and farm goods boomed.", "Foreign companies came to own much of the railways, mines, and oil fields."],
          ["\"Díaz ruled Mexico.\" This is not an effect of investment.", "\"Mexico became poorer in every way.\" The passage describes growth too.", "\"Foreign investment ended in 1876.\" This is false."],
          "The passage says Mexico's railways grew from a few hundred miles in the 1870s to more than 12,000 miles by 1910, built largely with American and British capital.",
          "Mexico changed."),
        Q("b", "Explain ONE way the Mexican example shows that foreign investment could create economic dependence.",
          "The response explains a specific way investment made Mexico dependent on foreign interests.",
          ["Railways were built mainly to carry minerals and crops to the United States and the ports, tying Mexico's economy to foreign markets.", "Foreign companies owned the railways, mines, and oil fields, so much of the profit went abroad.", "Mexico's growth depended on exports of raw materials whose prices were set in foreign markets."],
          ["\"Mexico had foreign companies.\" This does not explain dependence.", "\"Mexico became an industrial power that exported machines.\" This is not supported.", "\"Foreign investment made Mexico independent of other countries.\" This contradicts the prompt."],
          "Foreign companies built Mexico's railways to carry silver, copper, and farm goods north to the United States and to the ports. Because foreigners owned the railways and mines and the economy depended on exporting raw materials, much of the profit left Mexico and the country relied on foreign buyers.",
          "Mexico depended on others."),
        Q("c", "Explain ONE way economic imperialism in Latin America in the period 1750 to 1900 was different from colonial rule in Africa in the same period.",
          "The response explains a specific difference.",
          ["Latin American states were politically independent, so foreign powers gained influence through investment and loans rather than by ruling them as colonies, as Europeans did in most of Africa.", "In Latin America, local elites like Díaz invited foreign capital, while in Africa European states imposed their rule by conquest.", "African colonies were governed by European officials, while Latin American governments kept their own presidents and laws even as foreign companies gained power."],
          ["\"Latin America and Africa are on different continents.\" This is not a historical difference.", "\"Europeans conquered all of Latin America in the 1880s.\" This is false.", "\"There was no foreign investment in Latin America.\" This is false."],
          "By the late 1800s, most Latin American countries were independent, so foreign powers did not rule them directly. Instead, British and American companies gained power by investing in railways and mines, often with the support of local leaders like Díaz. In Africa, by contrast, European states conquered most of the continent and ruled it as colonies.",
          "They were different."),
      ] },
  ],
};

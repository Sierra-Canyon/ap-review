// Topic 6.5 Quiz: Economic Imperialism
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why, difficulty) => ({ id: "t65-m0" + n, skill: "u6", type: "mcq", set, topic: "6.5", reasoning, question, choices, why, difficulty, answer: 0 });
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
          ["Article 5, which abolished the Cohong", "Article 4, which paid for the opium", "Article 3, which ceded Hong Kong to Britain", "Article 2, which let British subjects live in five cities"],
          ["Correct. The Qing had required foreigners to trade only through licensed Hong merchants at Canton; Article 5 let British merchants deal \"with whatever persons they please.\"",
            "This is a payment for seized opium, not a change in how trade worked.",
            "This gave Britain territory for repairing ships and storing goods, but it did not change the rules for trading with Chinese merchants.",
            "This opened more ports, but merchants there could still have been required to deal only with licensed Hong merchants; Article 5 ended that."],
          "difficult"),
        M(2, "t65-s1", "Contextualization", "Article 4's requirement that China pay for the opium destroyed in 1839 is best understood in the context of",
          ["Britain's use of force to protect the opium trade", "China's wish to buy more Indian opium legally", "a trade agreement negotiated between equals", "Britain's own ban on opium sales at home"],
          ["Correct. British merchants smuggled Indian opium into China to pay for tea; when Lin Zexu destroyed it, Britain went to war and made China pay.",
            "The Qing had banned the opium trade, which is why Lin seized the opium.",
            "The treaty ended a war China lost, and China gained nothing in return.",
            "Opium was legal and widely sold in Britain at the time."],
          "moderate"),
        M(3, "t65-s1", "Developments and processes", "The treaty best illustrates which form of economic imperialism?",
          ["An unequal treaty forced on a defeated state", "Direct colonial rule over all of China", "A chartered company's monopoly on Asian trade", "A settler colony on land taken from China"],
          ["Correct. China kept its own government but lost control of key trade rules, paid an indemnity, and ceded Hong Kong.",
            "Britain took Hong Kong, not all of China.",
            "The East India Company's monopoly on the China trade had ended in 1833; this is a treaty between states.",
            "Hong Kong became a British colony, but as a port, not a settler colony, and the treaty mostly concerns trade."],
          "easy"),
        M(4, "t65-s1", "Continuity and change", "Which later development continued the pattern begun by the treaty?",
          ["Later treaties that opened still more ports", "The return of Hong Kong to Qing rule in 1843", "A Qing ban on all foreign trade after 1842", "The Qing defeat of Britain in the Second Opium War"],
          ["Correct. Treaties of 1858, 1860, and 1895 opened more ports and gave foreigners more privileges in China.",
            "Hong Kong returned to China only in 1997.",
            "Foreign trade grew after 1842.",
            "Britain and France won the Second Opium War (1856 to 1860)."],
          "easy"),
        // ===== Set 2: Ottoman Public Debt Administration =====
        M(5, "t65-s2", "Causation", "According to the passage, the Ottoman Public Debt Administration was created because",
          ["the government could not pay its debts", "European armies had occupied Istanbul", "the sultan had lent money to European banks", "Ottoman reformers wanted to abolish taxes"],
          ["Correct. After the government stopped paying in 1875, it agreed in 1881 to let its creditors collect key revenues.",
            "The passage describes no conquest; the Administration was set up by the sultan's agreement.",
            "This reverses the passage; the Ottomans borrowed from European banks.",
            "The Administration collected taxes, and reformers resented losing those revenues."],
          "easy"),
        M(6, "t65-s2", "Comparison", "The Ottoman Public Debt Administration is most similar to which other development?",
          ["European control of Egypt's finances after 1876", "Japan's recovery of control over its tariffs in 1911", "Germany's Zollverein customs union of the 1830s", "Britain's purchase of Suez Canal shares in 1875"],
          ["Correct. When Egypt could not repay its loans, British and French officials took control of its finances to pay creditors, as Europeans did in the Ottoman Empire.",
            "Japan regained control of its own tariffs, the reverse of losing control of revenues.",
            "The Zollverein was a customs union among German states, not foreign control of a debtor.",
            "Britain did buy the shares from Egypt's ruler, who needed money, but the purchase was a sale of property, not creditors taking over a state's revenues."],
          "difficult"),
        M(7, "t65-s2", "Claims and evidence in sources", "Which evidence from the passage best supports the description of the Administration as a \"state within a state\"?",
          ["It had thousands of officials and much state income.", "The Ottoman government borrowed heavily after 1854.", "The government stopped paying its debts in 1875.", "The sultan agreed in 1881 to create the Administration."],
          ["Correct. Its thousands of officials and control of revenue let it act like a separate government.",
            "This explains how the debt grew, not the Administration's power.",
            "This explains why the Administration was created.",
            "This shows how it began, not how much power it had."],
          "moderate"),
        M(8, "t65-s2", "Developments and processes", "The passage best illustrates which feature of economic imperialism?",
          ["Creditors could control a state's revenue without conquest.", "The powers divided the empire into spheres of influence.", "Lenders' governments annexed the provinces they taxed.", "Reformers used foreign loans to end European influence."],
          ["Correct. Debt let European bondholders take over key Ottoman revenues while the sultan still ruled the empire.",
            "Spheres of influence were zones claimed by single powers, as in China; the Administration was run jointly by bondholders of several countries and collected taxes across the empire.",
            "The passage describes no annexation; the bondholders collected taxes inside an empire that stayed independent.",
            "Reformers did borrow to pay for reforms, but the passage says the debt ended in more European control, which they resented."],
          "difficult"),
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

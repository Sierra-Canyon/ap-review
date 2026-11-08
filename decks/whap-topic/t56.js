// Topic 5.6 Quiz: Industrialization: Government's Role
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why) => ({ id: "t56-m0" + n, skill: "u5", type: "mcq", set, topic: "5.6", reasoning, question, choices, why, answer: 0 });
const Q = (sub, prompt, earns, yes, no, example, notExample) => ({ id: "t56-q1" + sub, skill: "u5", type: "fr", set: "t56-s3", part: "SAQ 1", sub, topic: "5.6", lead: SAQ, prompt, earns, yes, no, example, notExample });

export const sets = {
  "t56-s1": {
    id: "t56-s1", name: "Friedrich List on kicking away the ladder, 1841", intro: ONE,
    sources: [{ title: "Source", blocks: [
      { p: "These maxims were in former times plainly professed by all English ministers and parliamentary speakers. The ministers of George I. in 1721 openly declared, on the occasion of the prohibition of the importation of the manufactures of India, that it was clear that a nation could only become wealthy and powerful if she imported raw materials and exported manufactured goods. ..." },
      { p: "It is a very common clever device that when anyone has attained the summit of greatness, he kicks away the ladder by which he has climbed up, in order to deprive others of the means of climbing up after him. In this lies the secret of the cosmopolitical doctrine of Adam Smith ..." },
      { p: "Any nation which by means of protective duties and restrictions on navigation has raised her manufacturing power and her navigation to such a degree of development that no other nation can sustain free competition with her, can do nothing wiser than to throw away these ladders of her greatness, to preach to other nations the benefits of free trade, and to declare in penitent tones that she has hitherto wandered in the paths of error, and has now for the first time succeeded in discovering the truth." },
      { cite: "Friedrich List, German economist who had lived in the United States, The National System of Political Economy (first published in German in 1841), Book IV, translated by Sampson S. Lloyd (new edition, London: Longmans, Green, 1904), pp. 295 to 296, as digitized by the Internet Archive. \"The cosmopolitical doctrine of Adam Smith\" means free trade among all nations. List was a leading advocate of the Zollverein, the German customs union.", url: "https://archive.org/details/nationalsystemp01nichgoog", kind: "primary" },
    ] }],
  },
  "t56-s2": {
    id: "t56-s2", name: "Muhammad Ali's Egypt", intro: "Use the passage below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that Muhammad Ali, who ruled Egypt from 1805 to 1848 under the nominal authority of the Ottoman sultan, made one of the first attempts outside Europe at state-led industrialization. His government took control of the sale of cotton, grain, and other crops, buying from peasants at low prices and selling abroad at high ones. With these profits he built textile mills, arms factories, and a naval shipyard at Alexandria, and he hired European experts and sent Egyptian students to France. The main goal was a strong army, which he used to conquer Sudan and, in the 1830s, Syria. Many factories struggled, because Egypt had no coal and few trained mechanics. After his armies threatened the Ottoman sultan, Britain and other powers forced him in 1840 and 1841 to give up Syria, cut his army, and open Egypt to foreign trade, and most of the factories closed." },
      PRACTICE,
    ] }],
  },
  "t56-s3": {
    id: "t56-s3", name: "Free trade and the Ottoman Empire", intro: SAQ,
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that free trade treaties limited the ability of some states to protect their industries in the 1800s. In 1838, the Ottoman Empire signed a commercial treaty with Britain, often called the Treaty of Balta Liman, in return for British support against Muhammad Ali. The treaty ended Ottoman state monopolies on trade and kept import duties low, about five percent, while Ottoman merchants paid higher internal taxes than foreign ones. Cheap British cotton cloth flowed into Ottoman markets, and many Ottoman weavers lost their livelihoods. Other powers signed similar treaties, and the Ottoman government could not raise tariffs without their agreement. Similar unequal treaties limited tariffs in China after 1842 and in Japan after 1858, until Japan won back control of its tariffs in 1911." },
      PRACTICE,
    ] }],
  },
};

export default {
  forms: [
    { id: "t56", name: "Topic 5.6 Quiz: Industrialization: Government's Role", group: "Unit 5: Revolutions",
      items: [
        // ===== Set 1: List =====
        M(1, "t56-s1", "Claims and evidence in sources", "List's main argument is that",
          ["Britain grew strong through protection and then urged free trade on others to keep them from catching up", "Britain grew strong because it always practiced free trade", "Adam Smith's ideas should be adopted by every nation", "nations should not try to build manufacturing"],
          ["Correct. He says Britain rose by \"protective duties and restrictions\" and then kicked away the ladder by preaching free trade.",
            "He says Britain used protective duties and even banned Indian manufactures.",
            "He calls Smith's free-trade doctrine a \"clever device.\"",
            "He wants nations such as Germany to build manufacturing."]),
        M(2, "t56-s1", "Sourcing and situation", "List's point of view is best explained by the fact that he",
          ["was a German economist who wanted the German states to protect their young industries from British competition", "was a British minister defending free trade", "was an Indian weaver protesting British cloth", "was an American cotton planter"],
          ["Correct. List supported the Zollverein and tariffs so that German industry could grow.",
            "He criticized British free-trade arguments.",
            "He was German, though he mentions Indian manufactures.",
            "He had lived in the United States but was not a planter."]),
        M(3, "t56-s1", "Comparison", "List's ideas are most similar to the policies of which other leader or state?",
          ["Alexander Hamilton's call for tariffs to protect American manufacturing", "Britain's repeal of the Corn Laws in 1846", "The Qing government's Canton system", "The French physiocrats' call to free the grain trade"],
          ["Correct. List studied American protectionist ideas, which went back to Hamilton's Report on Manufactures of 1791.",
            "The repeal moved Britain toward free trade, the opposite of List's advice.",
            "The Canton system limited Western trade but was not a plan to build industry.",
            "The physiocrats favored free trade in grain."]),
        M(4, "t56-s1", "Causation", "Ideas like List's most directly supported which development in the later 1800s?",
          ["Germany, the United States, and Russia raised tariffs to protect their growing industries", "Every industrial nation adopted complete free trade", "Britain banned all imports", "The end of the Zollverein"],
          ["Correct. Germany adopted protective tariffs in 1879, and the United States and Russia kept high tariffs as they industrialized.",
            "Many countries raised tariffs.",
            "Britain mostly kept free trade.",
            "The Zollverein led to a unified German economy."]),
        // ===== Set 2: Muhammad Ali's Egypt =====
        M(5, "t56-s2", "Claims and evidence in sources", "According to the passage, Muhammad Ali's main goal in building factories was to",
          ["build a strong army", "raise wages for Egyptian peasants", "export cloth to Britain", "end the cotton trade"],
          ["Correct. The passage says \"the main goal was a strong army.\"",
            "His government bought crops from peasants at low prices.",
            "The passage does not say he aimed to export cloth to Britain.",
            "He profited from selling cotton."]),
        M(6, "t56-s2", "Causation", "Which of the following best explains why most of Muhammad Ali's factories closed?",
          ["European powers forced him to cut his army and open Egypt to foreign trade, and the factories lacked coal and skilled workers", "Egyptian peasants burned them in a revolt", "He decided industry was against Islamic law", "The Ottoman sultan ordered him to build more"],
          ["Correct. The passage names both foreign pressure in 1840 and 1841 and the lack of coal and trained mechanics.",
            "The passage does not mention a revolt.",
            "The passage gives no religious reason.",
            "The passage says he threatened the sultan."]),
        M(7, "t56-s2", "Comparison", "Muhammad Ali's program is most similar to which later program?",
          ["Meiji Japan's government-built factories, arsenals, and shipyards", "Britain's private textile mills of the 1700s", "The Zapatista movement in Mexico", "Laissez-faire policies in the United States"],
          ["Correct. Both governments led industrialization to strengthen the state and the military.",
            "British mills were mostly built by private owners.",
            "The Zapatistas were a 1990s movement.",
            "Laissez-faire means little government direction."]),
        M(8, "t56-s2", "Developments and processes", "The passage best illustrates which challenge faced by states that tried to industrialize in the 1800s?",
          ["Pressure from more powerful industrial states could limit their efforts", "They had too many coal mines", "No foreign experts would work for them", "They had no crops to sell abroad"],
          ["Correct. Britain and other powers forced Egypt to cut its army and open its markets.",
            "Egypt had no coal.",
            "The passage says he hired European experts.",
            "Egypt sold cotton and grain abroad."]),
        // ===== SAQ: Free trade and the Ottoman Empire =====
        Q("a", "Identify ONE term of the treaty of 1838 described in the passage.",
          "The response names one term from the passage.",
          ["It ended Ottoman state monopolies on trade.", "It kept import duties low, about five percent.", "Ottoman merchants paid higher internal taxes than foreign ones."],
          ["\"Cheap British cloth flowed in.\" This is an effect, not a term.", "\"The treaty raised tariffs on British goods.\" This is the opposite of what the passage says.", "\"The treaty was signed.\" This names no term."],
          "The passage says the treaty kept Ottoman import duties low, about five percent, so British goods could enter Ottoman markets cheaply.",
          "The treaty helped Britain."),
        Q("b", "Explain ONE way the treaty described in the passage supports Friedrich List's argument about free trade.",
          "The response connects the Ottoman example to List's claim that powerful industrial nations used free trade to keep others from catching up.",
          ["Britain, already industrialized, pressed the Ottomans to keep tariffs low, so Ottoman producers could not be protected while they built industry, as List warned.", "Cheap British cloth destroyed many Ottoman weavers' livelihoods, showing how free trade benefited the stronger industrial economy.", "The Ottomans could not raise tariffs without foreign agreement, so they lost the very tool List said nations needed to climb the ladder."],
          ["\"The Ottomans traded with Britain.\" This does not connect to List's argument.", "\"List was Ottoman.\" This is false.", "\"Free trade made the Ottomans industrialize faster than Britain.\" This contradicts the passage."],
          "List argued that Britain grew through protection and then preached free trade to keep others behind. The 1838 treaty fits his argument: Britain pressed the Ottomans to keep tariffs low, and cheap British cloth then ruined many Ottoman weavers, so the Ottomans could not protect new industries the way Britain once had.",
          "List was right."),
        Q("c", "Explain ONE way a state in the period 1750 to 1900 used government policy to promote industrialization.",
          "The response names a specific state and explains a specific policy that promoted industry.",
          ["The German states formed the Zollverein in 1834, removing tariffs among themselves and creating a large internal market for German industry.", "The United States used high tariffs in the late 1800s to protect its steel and textile industries from British competition.", "Russia's government financed railways such as the Trans-Siberian and used tariffs and foreign loans to build heavy industry in the 1890s."],
          ["\"Governments helped industry.\" This names no state or policy.", "\"Britain repealed the Corn Laws.\" This was a free-trade policy about grain, and the response must explain how it promoted industry.", "\"The Ottoman treaty of 1838 helped Ottoman industry.\" This contradicts the passage."],
          "The German states created the Zollverein, a customs union, in 1834. By ending tariffs among the member states, it created a large market where goods from German factories could be sold without duties, and it helped prepare the way for German unification and rapid industrial growth.",
          "Some states helped industry."),
      ] },
  ],
};

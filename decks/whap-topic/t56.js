// Topic 5.6 Quiz: Industrialization: Government's Role
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
import { maps } from "../whap/maps.js";
const MAP = "Map drawn for this review from Natural Earth land outlines (public domain). Places, dates, and routes checked against ";
const map = (id, caption, refs) => [{ svg: maps[id], caption }, { cite: MAP + refs + ".", kind: "map" }];
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why, difficulty) => ({ id: "t56-m0" + n, skill: "u5", type: "mcq", set, topic: "5.6", reasoning, question, choices, why, difficulty, answer: 0 });
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
    id: "t56-s2", name: "Muhammad Ali's Egypt", intro: "Use the map below to answer the questions that follow.", label: "Map",
    sources: [{ title: "Map", blocks: map("u5f-egypt-campaigns", "Campaigns of Muhammad Ali's armies and fleet, 1811 to 1839 (routes approximate)", "Wikipedia, \"Muhammad Ali of Egypt\", \"Ottoman-Wahhabi war\", and \"Khartoum\", and Encyclopaedia Britannica, \"Muhammad Ali (pasha and viceroy of Egypt)\"") }],
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
          ["Britain rose through protection, then preached free trade", "Britain grew rich because it had always practiced free trade", "every nation should adopt Adam Smith's doctrine of free trade", "nations without colonies should not try to build manufacturing"],
          ["Correct. He says Britain rose by \"protective duties and restrictions\" and then kicked away the ladder by preaching free trade.",
            "He says Britain's ministers openly favored protection, such as the 1721 ban on Indian manufactures.",
            "He calls Smith's free trade doctrine a device for kicking away the ladder.",
            "He argues that nations should build manufacturing behind protection, and he says nothing about colonies as a requirement."], "easy"),
        M(2, "t56-s1", "Sourcing and situation", "List's point of view is best explained by the fact that he",
          ["was a German economist seeking tariffs for German industry", "was a British minister defending the repeal of the Corn Laws", "was an Indian weaver protesting imports of British cloth", "was an American cotton planter who wanted to export freely"],
          ["Correct. List supported the Zollverein and tariffs so that German industry could grow behind protection.",
            "List was German, and he attacked British free trade arguments rather than defending them.",
            "List was a German economist, though he did mention Britain's ban on Indian manufactures.",
            "List was German, and a planter selling cotton abroad would usually favor free trade, not protection."], "easy"),
        M(3, "t56-s1", "Comparison", "List's ideas are most similar to the policies of which other leader or state?",
          ["Alexander Hamilton's call for tariffs on imported manufactures", "Britain's repeal of the Corn Laws on imported grain in 1846", "The Qing dynasty's Canton system for limiting European trade", "The French physiocrats' call to free the trade in grain"],
          ["Correct. List studied American protectionist ideas, which went back to Hamilton's Report on Manufactures of 1791.",
            "Repealing the Corn Laws moved Britain toward free trade, the policy List attacked.",
            "The Canton system confined foreign merchants to one port; it was not meant to build up Chinese manufacturing.",
            "The physiocrats favored freeing trade, the opposite of List's protection."], "moderate"),
        M(4, "t56-s1", "Causation", "Ideas like List's most directly supported which development in the later 1800s?",
          ["Germany and the United States raised tariffs on imports", "Most industrial nations adopted complete free trade", "Britain banned imports of foreign manufactured goods", "The German states dissolved their Zollverein customs union"],
          ["Correct. Germany adopted protective tariffs in 1879, and the United States kept high tariffs as it industrialized.",
            "Most industrializing nations moved toward protection, not complete free trade.",
            "Britain kept to free trade for the rest of the century.",
            "The Zollverein grew into the economic base of the German Empire in 1871."], "moderate"),
        // ===== Set 2: Muhammad Ali's Egypt (map) =====
        M(5, "t56-s2", "Claims and evidence in sources", "The campaigns on the map best support which claim about Muhammad Ali's state?",
          ["It built a strong army and used it to expand.", "It stayed at peace while it built its factories.", "It gained land mainly by buying it from the sultan.", "It sent its armies chiefly to conquer lands in Europe."],
          ["Correct. The map shows his forces fighting in Arabia, Sudan, Greece, Syria, and Anatolia between 1812 and 1839.",
            "The map shows campaigns in almost every decade from the 1810s to the 1830s.",
            "The map marks battles, sieges, and captures, not purchases.",
            "Only the fleet sent to Greece reached Europe; most campaigns were in Africa and Southwest Asia."], "easy"),
        M(6, "t56-s2", "Causation", "In 1840 and 1841, Britain and other powers forced Muhammad Ali to give up Syria and cut his army. The battles marked at Konya and Nezib help explain this because they",
          ["showed his army could threaten the Ottoman sultan", "showed that Egypt's navy ruled the Mediterranean", "were fought against British and French armies", "gave Egyptian ships control of the Suez route"],
          ["Correct. Victories deep in Anatolia put Istanbul within reach, and the powers wanted to keep the Ottoman Empire intact.",
            "The map shows Egypt's fleet destroyed at Navarino in 1827.",
            "Ibrahim Pasha fought Ottoman armies at Konya and Nezib.",
            "The Suez Canal did not open until 1869, and the battles were far to the north."], "difficult"),
        M(7, "t56-s2", "Comparison", "Muhammad Ali's state-built army and navy, shown on the map, are most similar to which later program?",
          ["Meiji Japan's state arsenals and conscript army", "Britain's private textile mills of the late 1700s", "The laissez-faire policy of the United States", "The Qing court's refusal to build modern arsenals"],
          ["Correct. Both governments led industrial and military modernization to strengthen the state against outside powers.",
            "British mills were built by private owners, not by the state for military power.",
            "Laissez-faire means the government leaves the economy alone, the opposite of his program.",
            "The Qing did build arsenals and shipyards in the Self-Strengthening Movement of the 1860s."], "moderate"),
        M(8, "t56-s2", "Causation", "Muhammad Ali's campaign up the Nile to Khartoum, shown on the map, aimed mainly at",
          ["gaining gold and enslaved recruits for his army", "reaching coal mines to fuel his new factories", "building a railway to carry cotton to Alexandria", "spreading Wahhabi teachings along the upper Nile"],
          ["Correct. He invaded Sudan in 1820 in search of gold and of captives he could force into his army.",
            "Egypt and Sudan had no coal for his factories, which was one reason many of them failed.",
            "Egypt's first railway was not built until the 1850s, after his rule.",
            "His armies fought the Wahhabi state in Arabia, destroying Diriyah in 1818; they did not spread its teachings."], "difficult"),
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

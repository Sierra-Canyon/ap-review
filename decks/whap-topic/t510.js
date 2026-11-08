// Topic 5.10 Quiz: Continuity and Change in the Industrial Age
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why) => ({ id: "t510-m0" + n, skill: "u5", type: "mcq", set, topic: "5.10", reasoning, question, choices, why, answer: 0 });
const Q = (sub, prompt, earns, yes, no, example, notExample) => ({ id: "t510-q1" + sub, skill: "u5", type: "fr", set: "t510-s3", part: "SAQ 1", sub, topic: "5.10", lead: SAQ, prompt, earns, yes, no, example, notExample });

export const sets = {
  "t510-s1": {
    id: "t510-s1", name: "The Charter Oath, 1868", intro: ONE,
    sources: [{ title: "Source", blocks: [
      { p: "1. Deliberative Assemblies shall be widely established and all matters shall be decided by public discussion" },
      { p: "2. All people, high and low, shall unite their minds to conduct the affairs of the state." },
      { p: "3. All people, civil and military classes as well as commoners, shall be encouraged to achieve their respective wishes so as not to keep them frustrated." },
      { p: "4. Old, corrupt customs shall be abolished and everything shall be based on the just way of nature." },
      { p: "5. Knowledge shall be sought throughout the world so as to strengthen the foundations of imperial rule." },
      { p: "In order to implement reforms unprecedented in our country, I, ahead of the people, pray to gods of heaven and earth and decree these national principles in order to establish the way of security for all. ..." },
      { cite: "The Charter Oath (Five Articles Oath), proclaimed in the name of the Emperor Meiji, then fifteen years old, in Kyoto on the fourteenth day of the third month of 1868 (April 6, 1868), translated by Akihiko Tanaka, as published in \"The World and Japan\" Database (National Graduate Institute for Policy Studies and the University of Tokyo). The oath was issued a few months after supporters of the emperor overthrew the Tokugawa shogunate.", url: "https://worldjpn.net/documents/texts/pw/18680314.O1E.html", kind: "primary" },
    ] }],
  },
  "t510-s2": {
    id: "t510-s2", name: "What changed less", intro: "Use the passage below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that, for all its drama, industrialization changed some parts of the world far more than others by 1900. Britain had become the first society in which more people lived in towns than in the countryside, a milestone its census recorded in 1851. Yet across most of the world, farming still employed the majority of people in 1900, including roughly three in four or more people in Russia, China, and India and about two in five in France. Most of Europe and Asia was still ruled by monarchs, and landowning nobles kept great influence in Russia, Prussia, and Austria-Hungary. Religion remained central to daily life almost everywhere. What had changed most was the balance of power: industrial states in Western Europe, the United States, and Japan now made most of the world's manufactured goods and used their wealth and weapons to dominate others." },
      PRACTICE,
    ] }],
  },
  "t510-s3": {
    id: "t510-s3", name: "Population in the industrial age", intro: SAQ,
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that the period from 1750 to 1900 brought the fastest growth in human population up to that time. Estimates suggest the world's population roughly doubled, from about 800 million to about 1.6 billion. Europe's population grew especially fast, from about 140 million to about 400 million, helped by new crops such as the potato, better transport of food, and, later in the century, cleaner water. Population growth also pushed people to move. More than 40 million Europeans emigrated to the Americas and Australia between 1815 and 1914, and millions of Chinese and Indians moved as laborers to Southeast Asia, the Caribbean, and Africa. At the same time, some places suffered terrible losses, as in the Irish famine of the 1840s and the famines that struck India and China in the late 1870s." },
      PRACTICE,
    ] }],
  },
};

export default {
  forms: [
    { id: "t510", name: "Topic 5.10 Quiz: Continuity and Change in the Industrial Age", group: "Unit 5: Revolutions",
      items: [
        // ===== Set 1: The Charter Oath =====
        M(1, "t510-s1", "Claims and evidence in sources", "Which article of the Charter Oath most clearly signals a break with Tokugawa Japan's limits on foreign contact?",
          ["Article 5, \"Knowledge shall be sought throughout the world\"", "Article 2, \"All people, high and low, shall unite their minds\"", "Article 1, \"Deliberative Assemblies shall be widely established\"", "The closing promise to \"establish the way of security for all\""],
          ["Correct. The Tokugawa had restricted foreign contact for two centuries; the new government promised to learn from the world.",
            "This concerns unity at home.",
            "This concerns how decisions would be made at home.",
            "This is a general promise, not a change in foreign contact."]),
        M(2, "t510-s1", "Sourcing and situation", "The purpose of issuing the oath in the emperor's name was most likely to",
          ["give the new government's reforms the authority of the emperor and win support from the domains and samurai", "end the role of the emperor in Japanese government", "restore the Tokugawa shogun", "announce Japan's conquest of Korea"],
          ["Correct. The new leaders, mostly young samurai, used the emperor's authority to justify sweeping change.",
            "The oath strengthens \"the foundations of imperial rule.\"",
            "It was issued after the shogunate was overthrown.",
            "It says nothing about Korea."]),
        M(3, "t510-s1", "Continuity and change", "Which later development most directly carried out the goal in Article 4 that \"old, corrupt customs shall be abolished\"?",
          ["The abolition of the samurai class's special privileges in the 1870s", "The restoration of the shogunate in 1890", "The closing of Japan's ports to foreign trade", "The return of all land to the daimyo"],
          ["Correct. The government ended the domains, created a conscript army, and stripped samurai of their stipends and right to wear swords.",
            "The shogunate was never restored.",
            "Japan expanded foreign trade.",
            "The government abolished the domains in 1871."]),
        M(4, "t510-s1", "Comparison", "The reforms announced in the Charter Oath are most similar to which other effort of the 1800s?",
          ["The Ottoman Tanzimat reforms, which reorganized the state and army along European lines", "The Boxer Rebellion's attacks on foreigners", "The Indian revolt of 1857", "Britain's repeal of the Corn Laws"],
          ["Correct. Both the Meiji leaders and Ottoman reformers adopted Western institutions to strengthen their states against European power.",
            "The Boxers rejected foreign influence.",
            "The revolt of 1857 was an uprising against British rule.",
            "The repeal changed British trade policy."]),
        // ===== Set 2: What changed less =====
        M(5, "t510-s2", "Continuity and change", "Which statement from the passage best describes a continuity from 1750 to 1900?",
          ["Farming still employed the majority of people in most of the world.", "Britain became a mostly urban society.", "Industrial states made most of the world's manufactured goods.", "Japan became an industrial power."],
          ["Correct. In 1900, as in 1750, most people in Russia, China, and India worked on the land.",
            "This is a change.",
            "This is a change.",
            "This is a change."]),
        M(6, "t510-s2", "Claims and evidence in sources", "According to the passage, the most important change of the period was",
          ["a shift in the balance of power toward industrial states", "the end of monarchy in Europe and Asia", "the end of religion as a part of daily life", "the movement of most people in the world to cities"],
          ["Correct. The passage says what changed most was the balance of power.",
            "The passage says most of Europe and Asia was still ruled by monarchs.",
            "It says religion remained central.",
            "It says farming still employed most people."]),
        M(7, "t510-s2", "Comparison", "The passage's figures suggest that France in 1900 differed from Russia mainly in that France",
          ["was more industrialized, with a smaller share of its people in farming", "had more people working in farming than Russia", "had no farmers at all", "was ruled by a tsar"],
          ["Correct. About two in five people farmed in France, compared with three in four or more in Russia.",
            "The figures show the opposite.",
            "About two in five French people still farmed.",
            "France was a republic in 1900; Russia had a tsar."]),
        M(8, "t510-s2", "Causation", "The change in the balance of power described at the end of the passage most directly led to which development?",
          ["The expansion of European, American, and Japanese empires in Africa and Asia in the late 1800s", "The end of all empires by 1900", "The industrialization of most of Africa by 1900", "A decline in world trade"],
          ["Correct. Industrial states used steamships, rifles, and wealth to conquer and control much of Africa and Asia.",
            "Empires grew in this period.",
            "Africa was largely colonized, not industrialized.",
            "World trade grew."]),
        // ===== SAQ: Population =====
        Q("a", "Identify ONE cause of Europe's population growth from 1750 to 1900 described in the passage.",
          "The response names one cause from the passage.",
          ["New crops such as the potato.", "Better transport of food.", "Cleaner water later in the century."],
          ["\"People emigrated.\" This is an effect.", "\"The Irish famine.\" This caused population loss.", "\"More people were born.\" This is too general to count as a cause given in the passage."],
          "The passage says new crops such as the potato helped Europe's population grow, because potatoes produced a great deal of food on small plots of land.",
          "There was more food."),
        Q("b", "Explain ONE way population growth in the period 1750 to 1900 contributed to migration.",
          "The response explains a specific link between population growth and migration.",
          ["As rural populations grew, there was not enough land for everyone, so many young Europeans emigrated to the Americas in search of work and land.", "Growing populations in southern China and India, combined with poverty, led millions to work as indentured or contract laborers on plantations and in mines overseas.", "Crowding in the countryside pushed people into industrial cities, a form of internal migration."],
          ["\"People moved.\" This does not explain the link to population growth.", "\"Population fell, so people moved.\" This contradicts the prompt.", "\"Most migrants went from the Americas to Europe.\" This reverses the main direction."],
          "In many parts of Europe, rural families grew larger than their farms could support. Young people who could not inherit land moved to cities or crossed the Atlantic, and more than 40 million Europeans settled in the Americas and Australia between 1815 and 1914.",
          "There were many people."),
        Q("c", "Explain ONE way the famines mentioned in the passage show a continuity with earlier periods despite industrialization.",
          "The response explains how famines show that older dangers persisted.",
          ["Even in an age of railways and steamships, crop failures still caused mass death, as they had in earlier centuries, when people were poor and governments failed to act.", "In Ireland, dependence on a single crop, the potato, left people as vulnerable to blight as earlier farming societies were to bad harvests.", "In India and China, droughts in the late 1870s killed millions, showing that most people still depended directly on farming and the weather."],
          ["\"There were famines.\" This does not explain a continuity.", "\"Industrialization ended famine everywhere.\" This contradicts the passage.", "\"Famines were caused by railways.\" This is not supported."],
          "The famines of the 1840s and 1870s show that, as in earlier centuries, most people still depended on farming and the weather. When the potato blight struck Ireland and droughts struck India and China, millions died, even though railways and steamships could now move food long distances.",
          "Famine was bad."),
      ] },
  ],
};

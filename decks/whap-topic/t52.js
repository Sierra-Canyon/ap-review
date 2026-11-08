// Topic 5.2 Quiz: Nationalism and Revolutions
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why) => ({ id: "t52-m0" + n, skill: "u5", type: "mcq", set, topic: "5.2", reasoning, question, choices, why, answer: 0 });
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
    id: "t52-s2", name: "The Greek war of independence", intro: "Use the passage below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that Greek independence showed both the power of nationalism and the importance of the great powers. A secret society, the Friendly Society, founded by Greek merchants in the Russian port of Odessa in 1814, prepared a revolt against Ottoman rule, which broke out in 1821. Leaders appealed to Greeks as heirs of ancient Greece and as Orthodox Christians, and the fighting brought massacres on both sides. Educated Europeans who admired ancient Greek culture raised money, and some, like the English poet Lord Byron, went to fight. When an Egyptian army sent to help the sultan seemed close to crushing the revolt, Britain, France, and Russia sent their navies, which destroyed the Ottoman and Egyptian fleet at Navarino in 1827. The powers recognized an independent Greek kingdom in 1830 and chose a Bavarian prince to be its first king." },
      PRACTICE,
    ] }],
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
          ["a national question that requires a state of their own", "a religious question that conversion would solve", "a social question that education would solve", "a question that would disappear through assimilation"],
          ["Correct. He calls it \"a national question\" and asks for sovereignty over a territory.",
            "He says it is \"no more a social than a religious one.\"",
            "He says it is a national question, not a social one.",
            "He says Jews tried to merge into society but \"are not permitted to do so.\""]),
        M(2, "t52-s1", "Contextualization", "Herzl's argument is best understood in the context of which development in the late 1800s?",
          ["Rising antisemitism in Europe, including violence against Jews in Russia and the Dreyfus affair in France", "The emancipation of serfs in Russia", "The Scramble for Africa", "The unification of Italy"],
          ["Correct. Pogroms in the Russian Empire and the Dreyfus affair convinced Herzl that assimilation would not protect Jews.",
            "This concerned peasants in Russia, not Jews.",
            "He refers to persecution in Europe, not colonial conquest.",
            "Italian unification is a separate nationalist movement."]),
        M(3, "t52-s1", "Comparison", "Herzl's claim \"We are a people—one people\" is most similar to the arguments of which other movement of the 1800s?",
          ["Italian and German nationalists who argued that people sharing a culture should have their own state", "Laissez-faire economists who opposed tariffs", "Socialists who argued that workers of all nations shared common interests", "Missionaries who sought to spread Christianity"],
          ["Correct. Like Mazzini or German nationalists, Herzl argued that a people with a shared identity deserved a state.",
            "Economic arguments about tariffs are unrelated to his claim.",
            "Socialists stressed class across nations, not one national people.",
            "Herzl's argument is national, not religious missionary work."]),
        M(4, "t52-s1", "Continuity and change", "Herzl's ideas most directly contributed to which later development?",
          ["The growth of the Zionist movement and Jewish migration to Palestine, leading eventually to the founding of Israel in 1948", "The end of the Ottoman Empire's rule in the Balkans in 1830", "The unification of Germany in 1871", "The Congress of Vienna"],
          ["Correct. Herzl organized the first Zionist Congress in 1897, and the movement grew until the state of Israel was founded.",
            "This took place before Herzl wrote.",
            "This took place before Herzl wrote.",
            "The Congress of Vienna met in 1814 and 1815."]),
        // ===== Set 2: Greek independence =====
        M(5, "t52-s2", "Claims and evidence in sources", "Which evidence from the passage best supports the claim that the great powers were important to Greek independence?",
          ["Britain, France, and Russia destroyed the Ottoman and Egyptian fleet at Navarino in 1827.", "Greek merchants founded the Friendly Society in Odessa in 1814.", "Leaders appealed to Greeks as heirs of ancient Greece.", "The fighting brought massacres on both sides."],
          ["Correct. The passage says the revolt seemed close to being crushed until the powers intervened.",
            "This shows how the revolt was organized, not the role of the powers.",
            "This shows nationalist appeals, not the powers' role.",
            "This shows the violence of the war."]),
        M(6, "t52-s2", "Developments and processes", "The appeal to Greeks \"as heirs of ancient Greece and as Orthodox Christians\" best illustrates which feature of nationalism?",
          ["Nationalists defined a people by shared history, culture, and religion", "Nationalists rejected all religion", "Nationalists wanted to restore the Ottoman Empire", "Nationalists defined a nation only by its economy"],
          ["Correct. Like other nationalists, Greek leaders used a shared past, language, and faith to unite people.",
            "They appealed to Orthodox Christianity.",
            "They fought against Ottoman rule.",
            "The appeals were to history and religion."]),
        M(7, "t52-s2", "Comparison", "The Greek revolt is most similar to which other movement of the period 1750 to 1900?",
          ["Serbian revolts against Ottoman rule that won Serbia self-government", "The Meiji Restoration in Japan", "Britain's repeal of the Corn Laws", "The Taiping Rebellion in China"],
          ["Correct. Like the Greeks, Serbs rose against Ottoman rule in the name of a Christian Balkan nation, winning autonomy in the 1810s and 1830s.",
            "The Meiji Restoration restored the emperor's power in an independent Japan.",
            "This was a change in British trade policy.",
            "The Taiping was a religious rebellion within China, not a national revolt against foreign rule."]),
        M(8, "t52-s2", "Causation", "The great powers' support for Greek independence most likely reflected which concern?",
          ["Their rivalry over the weakening Ottoman Empire and its lands", "A wish to spread democracy to all of Europe", "A plan to abolish monarchy", "Their alliance with the Ottoman sultan"],
          ["Correct. Russia, Britain, and France each wanted influence in the eastern Mediterranean as Ottoman power declined, a problem later called the Eastern Question.",
            "They made Greece a kingdom under a foreign prince.",
            "They chose a king for Greece.",
            "They destroyed the sultan's fleet."]),
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

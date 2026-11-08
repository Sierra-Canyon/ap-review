// Topic 7.5 Quiz: Unresolved Tensions After World War I
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why) => ({ id: "t75-m0" + n, skill: "u7", type: "mcq", set, topic: "7.5", reasoning, question, choices, why, answer: 0 });
const Q = (sub, prompt, earns, yes, no, example, notExample) => ({ id: "t75-q1" + sub, skill: "u7", type: "fr", set: "t75-s3", part: "SAQ 1", sub, topic: "7.5", lead: SAQ, prompt, earns, yes, no, example, notExample });

export const sets = {
  "t75-s1": {
    id: "t75-s1", name: "Keynes on the peace treaty, 1919", intro: ONE,
    sources: [{ title: "Source", blocks: [
      { p: "The Treaty includes no provisions for the economic rehabilitation of Europe,—nothing to make the defeated Central Empires into good neighbors, nothing to stabilize the new States of Europe, nothing to reclaim Russia; ... The Council of Four paid no attention to these issues, being preoccupied with others,—Clemenceau to crush the economic life of his enemy, Lloyd George to do a deal and bring home something which would pass muster for a week, the President to do nothing that was not just and right. ..." },
      { p: "The policy of reducing Germany to servitude for a generation, of degrading the lives of millions of human beings, and of depriving a whole nation of happiness should be abhorrent and detestable. ..." },
      { p: "If we aim deliberately at the impoverishment of Central Europe, vengeance, I dare predict, will not limp. Nothing can then delay for very long that final civil war between the forces of Reaction and the despairing convulsions of Revolution, before which the horrors of the late German war will fade into nothing. ..." },
      { cite: "John Maynard Keynes, The Economic Consequences of the Peace (London, 1919), chapters 5 and 6, as published by Project Gutenberg. Keynes, a British economist, served as the Treasury's representative at the Paris Peace Conference and resigned in protest in June 1919. The Council of Four was the leaders of France (Clemenceau), Britain (Lloyd George), the United States (President Wilson), and Italy (Orlando).", url: "https://www.gutenberg.org/ebooks/15776", kind: "primary" },
    ] }],
  },
  "t75-s2": {
    id: "t75-s2", name: "From Sèvres to Lausanne", intro: "Use the passage below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that the peace imposed on the Ottoman Empire showed how resistance could overturn a treaty written by the victors. The Treaty of Sèvres, signed by the sultan's government in 1920, gave the empire's Arab lands to Britain and France as mandates, placed Izmir and its region under Greek administration, provided for an Armenian state and possible Kurdish self-rule in the east, and put the Straits under international control. Many Turks saw the treaty as a death sentence for their nation. Mustafa Kemal, an Ottoman general, organized a nationalist government in Ankara, defeated Armenian forces in the east, and drove the Greek army out of Anatolia by 1922. In 1923, the Treaty of Lausanne replaced Sèvres, recognized the borders of a new Republic of Turkey, and arranged an exchange of populations in which more than a million Orthodox Christians left Turkey and about 400,000 Muslims left Greece." },
      PRACTICE,
    ] }],
  },
  "t75-s3": {
    id: "t75-s3", name: "Hungary and the Treaty of Trianon", intro: SAQ,
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that the Treaty of Trianon, signed by Hungary in 1920, created grievances that shaped Central Europe for decades. When Austria-Hungary collapsed in 1918, its peoples formed new states or joined neighbors. Under the treaty, Hungary lost about two thirds of its territory to Czechoslovakia, Romania, Yugoslavia, and Austria. About three million ethnic Hungarians now lived outside Hungary's borders. Hungarian leaders of every party demanded that the treaty be revised, and schoolchildren recited a daily prayer for Hungary's restoration. At the same time, the new borders were meant to give self-determination to Slovaks, Romanians, Croats, and Serbs who had lived under Hungarian rule. In the late 1930s, Hungary drew closer to Nazi Germany, which helped it regain some of the lost lands between 1938 and 1941." },
      PRACTICE,
    ] }],
  },
};

export default {
  forms: [
    { id: "t75", name: "Topic 7.5 Quiz: Unresolved Tensions After World War I", group: "Unit 7: Global Conflict",
      items: [
        // ===== Set 1: Keynes =====
        M(1, "t75-s1", "Sourcing and situation", "Keynes's point of view in the source was most likely shaped by",
          ["his work as an economist at the peace conference, which led him to focus on the treaty's economic effects", "his service as a German official", "his support for France's demands", "his role as President Wilson's adviser"],
          ["Correct. As the Treasury's representative, he judged the treaty by its effect on Europe's economy, and he resigned in protest.",
            "Keynes was British.",
            "He criticizes Clemenceau's aim to crush Germany's economy.",
            "He was a British official."]),
        M(2, "t75-s1", "Claims and evidence in sources", "Keynes's main argument is that the treaty",
          ["would impoverish Germany and Central Europe and so lead to new violence", "was too lenient toward Germany", "would restore prosperity to all of Europe", "gave Russia too much territory"],
          ["Correct. He warns that \"vengeance ... will not limp\" if Central Europe is impoverished.",
            "He argues the opposite.",
            "He says it has no provisions for economic recovery.",
            "He says it did nothing for Russia."]),
        M(3, "t75-s1", "Causation", "Which later development would a historian most likely cite as support for Keynes's prediction?",
          ["The rise of extremist parties in Germany during the economic crises of the 1920s and 1930s", "The founding of the League of Nations", "Germany's prosperity in the late 1940s", "The independence of India in 1947"],
          ["Correct. Inflation in 1923 and the Depression helped the Nazis, who promised to overturn the treaty.",
            "The League was founded by the treaty itself.",
            "This came after another war and did not support his prediction.",
            "This was not linked to the treaty with Germany."]),
        M(4, "t75-s1", "Comparison", "A historian who disagreed with Keynes would most likely argue that",
          ["the treaty was less harsh than Keynes claimed, and Germany's own choices did more to cause later crises", "the treaty should have taken more land from Russia", "the United States should have joined the Central Powers", "the treaty ended all conflict in Europe"],
          ["Correct. Some historians argue that reparations were payable and that German politics, not the treaty alone, produced the crises.",
            "This is unrelated to his argument.",
            "This is not a historical argument.",
            "No historian argues this."]),
        // ===== Set 2: Sèvres and Lausanne =====
        M(5, "t75-s2", "Causation", "According to the passage, the Treaty of Sèvres was replaced mainly because",
          ["Turkish nationalists led by Mustafa Kemal defeated the forces trying to carry it out", "Britain and France decided to give up their mandates", "the sultan's government won the war", "Greece asked for a new treaty"],
          ["Correct. Kemal's victories by 1922 forced a new treaty at Lausanne.",
            "The mandates remained.",
            "The nationalists in Ankara, not the sultan, won.",
            "Greece was defeated."]),
        M(6, "t75-s2", "Developments and processes", "The mandates over the Arab lands described in the passage best illustrate which development after the First World War?",
          ["The victorious powers expanded their control in the Middle East under the oversight of the League of Nations", "Arab states gained full independence", "The Ottoman Empire regained its Arab provinces", "Germany took over the Middle East"],
          ["Correct. Britain and France ruled the former Ottoman lands as mandates.",
            "The mandates were ruled by Britain and France.",
            "The Ottoman Empire lost them.",
            "Germany lost its colonies."]),
        M(7, "t75-s2", "Continuity and change", "The population exchange of 1923 best illustrates which development of the early 1900s?",
          ["Nation-states sought populations that matched a single national or religious identity", "Empires welcomed many peoples", "Greece and Turkey merged into one state", "Religion no longer mattered in politics"],
          ["Correct. People were moved by religion to make each state more uniform.",
            "This describes the older imperial model the exchange replaced.",
            "They remained separate.",
            "The exchange was based on religion."]),
        M(8, "t75-s2", "Comparison", "The success of the Turkish nationalists is most different from the experience of Germany after 1919 in that",
          ["Turkey overturned its peace treaty by force within a few years, while Germany was bound by its treaty until the 1930s", "Turkey lost all its territory", "Germany gained new colonies", "Turkey accepted every term of Sèvres"],
          ["Correct. Kemal won a new treaty in 1923; Germany began defying Versailles only under Hitler.",
            "Turkey kept Anatolia.",
            "Germany lost its colonies.",
            "Turkey rejected Sèvres."]),
        // ===== SAQ: Trianon =====
        Q("a", "Identify ONE effect of the Treaty of Trianon on Hungary described in the passage.",
          "The response names one effect from the passage.",
          ["Hungary lost about two thirds of its territory.", "About three million ethnic Hungarians lived outside Hungary's borders.", "Hungarian leaders of every party demanded revision of the treaty."],
          ["\"Hungary won the war.\" This is false.", "\"Slovaks gained self-determination.\" This is an effect on other peoples, not on Hungary.", "\"Hungary was happy with the treaty.\" This contradicts the passage."],
          "The passage says Hungary lost about two thirds of its territory to Czechoslovakia, Romania, Yugoslavia, and Austria.",
          "Hungary changed."),
        Q("b", "Explain ONE way the principle of self-determination created new problems in Central and Eastern Europe after 1919.",
          "The response explains a specific problem.",
          ["Because peoples were mixed together, new borders left large minorities, such as Hungarians in Romania, inside other states.", "Minorities such as the Sudeten Germans in Czechoslovakia gave neighboring states reasons to demand border changes.", "Defeated states such as Hungary resented their losses and sought allies to revise the treaties."],
          ["\"Self-determination was used.\" This explains no problem.", "\"Self-determination gave every people its own state.\" This is false.", "\"Self-determination ended all nationalism.\" This is false."],
          "Peoples in Central Europe were mixed together, so any border left minorities on the wrong side. The new Czechoslovakia included about three million Germans in the Sudetenland, and in 1938 Hitler used their complaints to demand the region.",
          "Self-determination caused problems."),
        Q("c", "Explain ONE way the peace settlements after the First World War contributed to the outbreak of the Second World War.",
          "The response names and explains a specific link.",
          ["Germany's resentment of Versailles, including reparations and the war guilt clause, helped Hitler win support for overturning it.", "States that lost territory, such as Hungary, allied with Germany to regain land.", "Italy and Japan, though on the winning side, felt cheated of gains and turned to expansion in the 1930s."],
          ["\"The treaties were bad.\" This explains no link.", "\"The treaties caused the First World War.\" This mixes up the order.", "\"The treaties made Germany the strongest power in 1919.\" This is false."],
          "Many Germans saw the Treaty of Versailles as a humiliation because it blamed Germany for the war, took its territory, and demanded reparations. Hitler promised to tear up the treaty, and his rearmament and annexations in the 1930s led to war in 1939.",
          "The treaties caused war."),
      ] },
  ],
};

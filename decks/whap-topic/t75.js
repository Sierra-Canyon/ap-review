// Topic 7.5 Quiz: Unresolved Tensions After World War I
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
import { maps } from "../whap/maps.js";
const MAP = "Map drawn for this review from Natural Earth land outlines (public domain). Places, dates, and routes checked against ";
const map = (id, caption, refs) => [{ svg: maps[id], caption }, { cite: MAP + refs + ".", kind: "map" }];
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
    id: "t75-s2", name: "New states after the First World War", intro: "Use the map below to answer the questions that follow.", label: "Map",
    sources: [{ title: "Map", blocks: map("u7-new-states", "New states in Europe and the Middle East after the First World War: each point marks the capital, with the year the state declared independence or was proclaimed. The italic names in the Middle East are lands taken from the Ottoman Empire and ruled as League of Nations mandates from 1920. Lithuania's point is at Kaunas, its capital while Poland held Vilnius.", "Encyclopaedia Britannica, \"Baltic states\" and its entries for each state, and the U.S. Department of State, Office of the Historian, A Guide to the United States' History of Recognition, Diplomatic, and Consular Relations, by Country") }],
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
        // ===== Set 2: map of new states =====
        M(5, "t75-s2", "Causation", "The pattern of new states shown on the map most directly resulted from which of the following?",
          ["The collapse of the Russian, Austro-Hungarian, and Ottoman empires at the end of the First World War", "The spread of communist governments across Eastern Europe", "The movements for German and Italian unification", "The decolonization of Africa and Asia"],
          ["Correct. Every state marked on the map was formed from lands that Russia, Austria-Hungary, or the Ottoman Empire had ruled, with Poland also taking land from Germany. These empires broke apart in 1917 and 1918, and peoples such as the Poles, Czechs, and Finns formed states of their own.",
            "Communist governments came to Eastern Europe after 1945, under Soviet occupation. Most of the states on the map were founded in opposition to Bolshevik Russia.",
            "Germany and Italy were unified by 1871. Unification joined small states into large ones, while the map shows large empires breaking into smaller states.",
            "Most colonies in Africa and Asia won independence after 1945. The states on the map are in Europe and Anatolia, and the Arab lands shown became mandates, not independent states."]),
        M(6, "t75-s2", "Causation", "The four states along the Baltic Sea shown on the map were able to declare independence in 1917 and 1918 mainly because",
          ["revolution in Russia and Russia's exit from the war ended Russian control of its western borderlands", "the Treaty of Versailles created them in 1919", "Germany won the war on the Western Front in 1918", "the League of Nations voted to give them self-rule"],
          ["Correct. Finland declared independence in December 1917, soon after the Bolsheviks took power, and in the Treaty of Brest-Litovsk in March 1918 Russia gave up its claims to the Baltic lands. When Germany lost the war that November, the peoples of the region were left to form their own states.",
            "The years on the map are 1917 and 1918, before the Treaty of Versailles was signed in June 1919. These states declared independence on their own.",
            "Germany lost the war on the Western Front and signed the armistice in November 1918.",
            "The League of Nations began work in 1920, after these states had declared independence."]),
        M(7, "t75-s2", "Comparison", "Which of the following best explains the difference the map shows between former imperial lands in Europe and those in the Middle East?",
          ["The victors applied self-determination to many European peoples but placed the Ottoman Arab lands under British and French rule, claiming they were not ready to govern themselves.", "The Arab provinces remained part of the Republic of Turkey.", "Arab leaders turned down the independence they were offered at the Paris Peace Conference.", "The Soviet Union took control of the former Ottoman lands."],
          ["Correct. Article 22 of the League of Nations Covenant described the peoples of the mandates as not yet able to stand by themselves and gave their \"tutelage\" to \"advanced nations.\" In practice, Britain and France took the lands that their wartime agreements had already divided between them.",
            "The map shows Turkey as a separate state with its capital at Ankara. In the Treaty of Lausanne of 1923, Turkey gave up its claims to the Arab lands.",
            "This reverses what happened. Arab leaders such as Faisal asked for independence at Paris and were refused.",
            "The map labels the Arab lands as British and French mandates. The Soviet Union gained no territory in the Middle East after the war."]),
        M(8, "t75-s2", "Continuity and change", "Which development of 1938 to 1940 most directly reversed the pattern shown on the map?",
          ["Germany annexed Austria and broke up Czechoslovakia, and the Soviet Union annexed Estonia, Latvia, and Lithuania.", "The breakup of the Soviet Union restored the independence of the Baltic states.", "The Treaty of Lausanne recognized the Republic of Turkey.", "Britain and France gave up their mandates in the Middle East."],
          ["Correct. Germany annexed Austria in March 1938, took the Sudetenland after the Munich Agreement that September, and occupied the rest of the Czech lands in March 1939. Germany and the Soviet Union divided Poland in 1939, and the Soviet Union annexed the three Baltic states in 1940, so six of the ten new states on the map lost their independence.",
            "The Soviet Union broke up in 1991, and the Baltic states regained their independence then. That restored the pattern instead of reversing it, and it came about fifty years too late.",
            "The Treaty of Lausanne was signed in 1923, and it confirmed the new Turkish state rather than reversing the pattern.",
            "Britain and France still held their mandates from 1938 to 1940. Syria, Lebanon, and Jordan became independent during or after the Second World War."]),
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

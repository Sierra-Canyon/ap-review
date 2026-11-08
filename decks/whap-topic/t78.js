// Topic 7.8 Quiz: Mass Atrocities After 1900
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why) => ({ id: "t78-m0" + n, skill: "u7", type: "mcq", set, topic: "7.8", reasoning, question, choices, why, answer: 0 });
const Q = (sub, prompt, earns, yes, no, example, notExample) => ({ id: "t78-q1" + sub, skill: "u7", type: "fr", set: "t78-s3", part: "SAQ 1", sub, topic: "7.8", lead: SAQ, prompt, earns, yes, no, example, notExample });

export const sets = {
  "t78-s1": {
    id: "t78-s1", name: "Eisenhower at Ohrdruf, 1945", intro: ONE,
    sources: [{ title: "Source", blocks: [
      { p: "[From a letter to General George C. Marshall, April 15, 1945:] \"The things I saw beggar description. ... I made the visit deliberately in order to be in a position to give firsthand evidence of these things if ever, in the future, there develops a tendency to charge these allegations merely to 'propaganda.'\"" },
      { p: "[From a cable to Marshall, April 19, 1945:] \"Conditions of indescribable horror prevail. ... I have visited one of these myself and I assure you that whatever has been printed on them to date has been an understatement.\"" },
      { p: "[A delegation of members of Congress, invited by Eisenhower to see the camps, reported that the crimes were] \"no less than organized crime against civilization and humanity.\"" },
      { cite: "General Dwight D. Eisenhower, Supreme Commander of the Allied forces in western Europe, letter and cable to Army Chief of Staff George C. Marshall, April 1945, as quoted in \"Eisenhower and the Holocaust,\" National Park Service (Eisenhower National Historic Site). On April 12, 1945, Eisenhower, with Generals Omar Bradley and George Patton, visited Ohrdruf, a subcamp of Buchenwald that U.S. troops had reached on April 4. The bracketed notes were added for this review.", url: "https://www.nps.gov/articles/000/eisenhower-and-the-holocaust.htm", kind: "primary" },
    ] }],
  },
  "t78-s2": {
    id: "t78-s2", name: "The Nanjing Massacre", intro: "Use the passage below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that the Nanjing Massacre showed the brutality of Japan's war in China. In December 1937, Japanese forces captured Nanjing, then China's capital. Over the following weeks, Japanese soldiers killed large numbers of Chinese prisoners of war and civilians and raped tens of thousands of women. Estimates of the dead range widely, and the Tokyo war crimes tribunal after the war put the figure at more than 200,000. A small group of Western residents set up a safety zone in the city and recorded what they saw, and some of their diaries and films reached the outside world. The massacre remains a source of tension between China and Japan, where some politicians and writers have minimized or denied it." },
      PRACTICE,
    ] }],
  },
  "t78-s3": {
    id: "t78-s3", name: "Cambodia under the Khmer Rouge", intro: SAQ,
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that the Khmer Rouge regime in Cambodia carried out one of the deadliest mass atrocities of the late 1900s. After taking power in April 1975, the communist Khmer Rouge, led by Pol Pot, emptied the cities and forced millions of people to work on rural collective farms in an attempt to build a classless farming society. The regime abolished money, markets, schools, and religion. It killed people it saw as enemies, including former officials, teachers, monks, and members of ethnic minorities such as the Vietnamese and the Cham Muslims. About 1.5 to 2 million people, roughly a fifth of the population, died from execution, starvation, overwork, and disease. Vietnam invaded in late 1978 and drove the Khmer Rouge from power in January 1979." },
      PRACTICE,
    ] }],
  },
};

export default {
  forms: [
    { id: "t78", name: "Topic 7.8 Quiz: Mass Atrocities After 1900", group: "Unit 7: Global Conflict",
      items: [
        // ===== Set 1: Eisenhower =====
        M(1, "t78-s1", "Sourcing and situation", "Eisenhower's purpose in visiting the camp, as he explains it, was to",
          ["be able to give firsthand evidence if anyone later claimed the crimes were only propaganda", "plan a new military campaign", "negotiate with German officers", "find evidence that the reports were exaggerated"],
          ["Correct. He says he visited \"in order to be in a position to give firsthand evidence.\"",
            "He does not describe a campaign.",
            "He does not mention negotiation.",
            "He says the reports were an \"understatement.\""]),
        M(2, "t78-s1", "Contextualization", "Eisenhower's concern about charges of \"propaganda\" is best understood in the context of",
          ["the exaggerated atrocity stories of the First World War, which had made many people distrust wartime reports", "the Allied defeat in 1945", "the Soviet denial of the camps' existence", "a German confession published in 1944"],
          ["Correct. Some First World War atrocity stories had proved false, so many people doubted reports of Nazi crimes.",
            "The Allies were winning in 1945.",
            "Soviet forces also liberated camps.",
            "No such confession was published."]),
        M(3, "t78-s1", "Causation", "Evidence gathered by Allied commanders such as Eisenhower contributed most directly to which development?",
          ["The trials of Nazi leaders at Nuremberg for crimes against humanity", "The division of Korea", "The Munich Agreement", "The founding of the League of Nations"],
          ["Correct. Films and testimony from the camps were used at Nuremberg in 1945 and 1946.",
            "That was unrelated.",
            "That came in 1938.",
            "That came in 1920."]),
        M(4, "t78-s1", "Claims and evidence in sources", "Which phrase from the source best supports the claim that the crimes were planned rather than random?",
          ["\"organized crime against civilization and humanity\"", "\"beggar description\"", "\"Conditions of indescribable horror prevail\"", "\"I have visited one of these myself\""],
          ["Correct. \"Organized\" points to a system, not random acts.",
            "This describes the horror but not planning.",
            "This describes conditions.",
            "This describes his visit."]),
        // ===== Set 2: Nanjing =====
        M(5, "t78-s2", "Sourcing and situation", "The diaries of Western residents in Nanjing are especially useful to historians because they",
          ["were written by witnesses at the time who were neither Chinese nor Japanese", "were written by Japanese commanders", "were written decades after the war", "contain official death counts"],
          ["Correct. Contemporary accounts from outsiders are harder to dismiss as national propaganda.",
            "They were written by Western residents.",
            "They were written during the events.",
            "They are personal records."]),
        M(6, "t78-s2", "Contextualization", "The Nanjing Massacre is best understood in the context of",
          ["Japan's full-scale invasion of China, which began in 1937", "the end of the Second World War", "Japan's alliance with China", "the Russo-Japanese War"],
          ["Correct. War between Japan and China expanded in July 1937, and Japanese forces took Shanghai and then Nanjing.",
            "It occurred eight years before the war ended.",
            "The two countries were at war.",
            "That war was fought in 1904 and 1905."]),
        M(7, "t78-s2", "Continuity and change", "The disputes over the massacre in Japan described in the passage best illustrate that",
          ["memory of mass atrocities continues to shape relations between countries long afterward", "the massacre is forgotten in China", "all historians agree on the exact number of victims", "Japan and China fought another war in the 1990s"],
          ["Correct. Denial and remembrance remain sources of tension today.",
            "It is a source of tension in China.",
            "Estimates range widely.",
            "No such war occurred."]),
        M(8, "t78-s2", "Comparison", "The Nanjing Massacre and the Holocaust were similar in that both",
          ["involved the mass killing of civilians by an expansionist state during the Second World War", "were carried out mainly in death camps", "targeted only religious minorities", "were stopped by the League of Nations"],
          ["Correct. Both were mass killings of civilians during wars of conquest.",
            "Nanjing was a massacre in a captured city.",
            "Nanjing's victims were Chinese soldiers and civilians generally.",
            "The League stopped neither."]),
        // ===== SAQ: Cambodia =====
        Q("a", "Identify ONE group targeted by the Khmer Rouge, as described in the passage.",
          "The response names one targeted group from the passage.",
          ["Former officials.", "Teachers or monks.", "Ethnic minorities such as the Vietnamese and the Cham Muslims."],
          ["\"Vietnamese soldiers in 1979.\" They drove out the Khmer Rouge.", "\"Khmer Rouge leaders.\" They carried out the killings.", "\"Everyone equally.\" The passage names specific groups."],
          "The passage says the Khmer Rouge killed people it saw as enemies, including teachers and monks.",
          "The Khmer Rouge targeted people."),
        Q("b", "Explain ONE way the ideology of the Khmer Rouge contributed to mass death in Cambodia.",
          "The response explains a specific link between ideology and the deaths.",
          ["Their goal of a classless farming society led them to empty the cities and force people into farm labor, where many starved.", "They saw educated people and former officials as class enemies and executed them.", "Abolishing money, markets, and religion destroyed the systems people relied on for food and community."],
          ["\"They were communist.\" This names the ideology but explains no link.", "\"Vietnam invaded.\" This ended the regime.", "\"Cambodia had a famine for natural reasons.\" This ignores the regime's policies."],
          "The Khmer Rouge believed that cities and the educated classes were corrupt, so they forced millions into rural labor camps to build a pure farming society. Without enough food, medicine, or experience in farming, huge numbers died of starvation and disease.",
          "Their ideas were dangerous."),
        Q("c", "Explain ONE way the Cambodian atrocities were similar to OR different from another mass atrocity of the 1900s.",
          "The response names another atrocity and explains a specific similarity or difference.",
          ["Similar to the Holocaust: a government used state power to kill groups it defined as enemies.", "Different from the Holocaust: the Khmer Rouge killed mainly members of their own nation for political and class reasons, not mainly a racial or religious minority.", "Similar to the famine in Soviet Ukraine in the early 1930s: forced collectivization of agriculture caused mass starvation."],
          ["\"Other genocides happened.\" This names none.", "\"It was like Nanjing because it happened in 1937.\" This is inaccurate.", "\"The Holocaust happened in Cambodia.\" This is false."],
          "The Cambodian atrocities differed from the Holocaust. The Nazis targeted Jews and other groups mainly on racial grounds, while most of the Khmer Rouge's victims were fellow Khmer, killed or starved because the regime saw them as class enemies or because of its economic policies.",
          "It was like other genocides."),
      ] },
  ],
};

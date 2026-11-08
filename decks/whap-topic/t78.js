// Topic 7.8 Quiz: Mass Atrocities After 1900
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why, difficulty) => ({ id: "t78-m0" + n, skill: "u7", type: "mcq", set, topic: "7.8", reasoning, difficulty, question, choices, why, answer: 0 });
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
          ["be able to testify if the crimes were later called propaganda", "gather evidence for the coming trials of German leaders", "find out whether the reports had been exaggerated", "plan his armies' next advance deeper into Germany"],
          ["Correct. He says he visited \"in order to be in a position to give firsthand evidence\" if the crimes were ever dismissed as propaganda.",
            "Such evidence was later used at trials, but Eisenhower explains his own reason as answering future charges of propaganda.",
            "He went to bear witness, and he reports that the printed accounts were an \"understatement.\"",
            "He describes his visit as gathering evidence, not military planning."], "moderate"),
        M(2, "t78-s1", "Contextualization", "Eisenhower's concern about charges of \"propaganda\" is best understood in the context of",
          ["doubts left by false atrocity stories of 1914 to 1918", "Nazi propaganda broadcasts aimed at Allied troops", "the German surrender of all forces in May 1945", "the Allied debate over bombing German cities"],
          ["Correct. Some First World War atrocity stories, including some about Belgium, had proved false or exaggerated, so many people doubted reports of Nazi crimes.",
            "He worries that Americans and others would doubt the reports, not about enemy broadcasts.",
            "Germany surrendered in May 1945, weeks after this letter of April 15.",
            "The bombing debate is unrelated to his concern that reports of the camps would be dismissed."], "moderate"),
        M(3, "t78-s1", "Causation", "Evidence gathered by Allied commanders such as Eisenhower contributed most directly to which development?",
          ["The Nuremberg trials of the major Nazi leaders", "The division of Germany into four zones", "The founding of the League of Nations", "The Allied decision to bomb Hiroshima"],
          ["Correct. Films and testimony from the camps were used as evidence at Nuremberg in 1945 and 1946.",
            "The Allied leaders agreed on occupation zones in 1944 and 1945, before the camps were reached, and not because of this evidence.",
            "The League was founded in 1920, after the First World War.",
            "The bomb was used against Japan for military and political reasons unrelated to the camps."], "easy"),
        M(4, "t78-s1", "Claims and evidence in sources", "Which phrase from the source best supports the claim that the crimes were planned rather than random?",
          ["\"organized crime against civilization and humanity\"", "\"whatever has been printed on them to date has been an understatement\"", "\"I made the visit deliberately\"", "\"Conditions of indescribable horror prevail\""],
          ["Correct. \"Organized\" points to a system of crimes, not random acts.",
            "This says the crimes were worse than reported, not that they were planned.",
            "\"Deliberately\" describes Eisenhower's own visit, not the crimes.",
            "This describes the conditions, not how they came about."], "difficult"),
        // ===== Set 2: Nanjing =====
        M(5, "t78-s2", "Sourcing and situation", "The diaries of Western residents in Nanjing are especially useful to historians because they",
          ["came from outside witnesses writing at the time", "were written by Japanese officers who took the city", "were written decades later, after the Tokyo trials", "give the official death count of the tribunal"],
          ["Correct. Accounts written during the events by people who were neither Chinese nor Japanese are harder to dismiss as national propaganda.",
            "They were written by Western residents.",
            "They were recorded during the events.",
            "The tribunal's estimate came after the war; the diaries are personal records."], "easy"),
        M(6, "t78-s2", "Contextualization", "The Nanjing Massacre is best understood in the context of",
          ["Japan's full-scale invasion of China in 1937", "Japan's surrender at the end of the war in 1945", "Japan's seizure of Manchuria in 1931 and 1932", "the Russo-Japanese War of 1904 and 1905"],
          ["Correct. War between Japan and China widened in July 1937, and Japanese forces took Shanghai and then Nanjing.",
            "The massacre happened eight years before Japan surrendered.",
            "Japan took Manchuria in 1931 and 1932, but Nanjing fell during the wider invasion that began in 1937.",
            "That war was fought in Manchuria more than thirty years earlier."], "difficult"),
        M(7, "t78-s2", "Continuity and change", "The disputes over the massacre in Japan described in the passage best illustrate that",
          ["atrocities can strain relations for decades", "the massacre is rarely remembered in China today", "historians agree on the exact number of victims", "Japan and China fought a new war in the 1990s"],
          ["Correct. Denial and remembrance of the massacre remain sources of tension between China and Japan.",
            "The passage says the massacre is a source of tension, which shows it is remembered.",
            "The passage says estimates range widely.",
            "No such war occurred."], "easy"),
        M(8, "t78-s2", "Comparison", "The Nanjing Massacre and the Holocaust were similar in that both",
          ["were mass killings of civilians by states at war", "were carried out mainly in killing centers with gas", "targeted people because of their religion alone", "were halted by intervention from the League of Nations"],
          ["Correct. Both were mass killings of civilians by expansionist states during wars of conquest.",
            "Nanjing was a massacre in a captured city, not a system of killing centers.",
            "The Nazis targeted Jews as a race, and Nanjing's victims were Chinese prisoners and civilians generally.",
            "The League stopped neither; Japan and Germany had both left it in 1933."], "moderate"),
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

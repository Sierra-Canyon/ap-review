// Topic 7.3 Quiz: Conducting World War I
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why) => ({ id: "t73-m0" + n, skill: "u7", type: "mcq", set, topic: "7.3", reasoning, question, choices, why, answer: 0 });
const Q = (sub, prompt, earns, yes, no, example, notExample) => ({ id: "t73-q1" + sub, skill: "u7", type: "fr", set: "t73-s3", part: "SAQ 1", sub, topic: "7.3", lead: SAQ, prompt, earns, yes, no, example, notExample });

export const sets = {
  "t73-s1": {
    id: "t73-s1", name: "A British recruiting pamphlet, 1915", intro: ONE,
    sources: [{ title: "Source", blocks: [
      { p: "[Quoting the findings of the government's Committee on Alleged German Outrages:] \"It is proved:— (i) That there were in many parts of Belgium deliberate and systematically organised massacres of the civil population, accompanied by many isolated murders and other outrages. (ii) That in the conduct of the war generally innocent civilians, both men and women, were murdered in large numbers, women violated, and children murdered. (iii) That looting, house burning, and the wanton destruction of property were ordered and countenanced by the officers of the German Army ... being indeed part of a system of general terrorization.\"" },
      { p: "\"... Murder, lust, and pillage prevailed over many parts of Belgium on a scale unparalleled in any war between civilised nations during the last three centuries.\"" },
      { p: "Is YOUR conscience roused? Won't YOU take the most effective way of showing it—if you are a man under 40 and fit? The only way to put a stop to these and other crimes is to crush the German Army." },
      { p: "YOU can help either by joining the Army or by making munitions. Place YOUR services at the disposal of the military authorities." },
      { p: "If YOU are a woman, cannot you help a man to decide?" },
      { cite: "The Truth About German Atrocities: Founded on the Report of the Committee on Alleged German Outrages (London: Parliamentary Recruiting Committee, 1915), pp. 23 to 24, as published by Project Gutenberg. The committee, chaired by Viscount Bryce, based its report largely on statements from Belgian refugees and British soldiers whose names were withheld and who were not cross-examined. German troops did kill several thousand Belgian civilians in 1914, but historians have found that some of the most lurid stories were exaggerated or false. Britain did not introduce conscription until 1916.", url: "https://www.gutenberg.org/cache/epub/50788/pg50788-images.html", kind: "primary" },
    ] }],
  },
  "t73-s2": {
    id: "t73-s2", name: "Soldiers and laborers from the colonies", intro: "Use the passage below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that the First World War was a global war in part because the European empires drew on the people of their colonies. More than a million men from British India served in the war, fighting in France, Mesopotamia, Palestine, and East Africa. France recruited about 200,000 soldiers from West Africa, some by force, and brought workers from Indochina, Algeria, and China to work in its factories. Britain and France together hired about 140,000 Chinese laborers to dig trenches and unload ships behind the Western Front. In East Africa, where British and German forces fought until 1918, both sides forced hundreds of thousands of Africans to carry supplies, and many thousands died of disease and hunger. Many colonial soldiers and workers returned home expecting rewards for their service and were angered when their colonies gained little after the war." },
      PRACTICE,
    ] }],
  },
  "t73-s3": {
    id: "t73-s3", name: "Women on the home front", intro: SAQ,
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that the First World War changed women's work, at least for a time. With millions of men at the front, governments called on women to fill jobs in factories, offices, transport, and farming. In Britain, hundreds of thousands of women worked in munitions factories, where they filled shells with explosives and risked poisoning and explosions. Women also served as nurses near the front and ran charities for soldiers and refugees. After the war, many women lost their jobs to returning soldiers. Yet the war helped the cause of women's suffrage: women won the right to vote in Britain in 1918 (if they were over thirty and met property rules), in Germany in 1918, and in the United States in 1920." },
      PRACTICE,
    ] }],
  },
};

export default {
  forms: [
    { id: "t73", name: "Topic 7.3 Quiz: Conducting World War I", group: "Unit 7: Global Conflict",
      items: [
        // ===== Set 1: The recruiting pamphlet =====
        M(1, "t73-s1", "Sourcing and situation", "The main purpose of the pamphlet was most likely to",
          ["persuade British men to enlist or work in munitions by arousing anger at German conduct", "give a neutral account of the war in Belgium", "persuade Germany to end the war", "encourage women to join the army"],
          ["Correct. Published by the Parliamentary Recruiting Committee, it ends by urging men under 40 to join the army.",
            "It was written to recruit, not to be neutral.",
            "It is addressed to British readers.",
            "It asks women to help men \"decide\" to enlist."]),
        M(2, "t73-s1", "Sourcing and situation", "A historian using this pamphlet as evidence of what happened in Belgium in 1914 should consider that",
          ["it was wartime propaganda based on a report whose witnesses were not cross-examined", "it was written by German officers", "it was published long after the war", "it contains no claims about German actions"],
          ["Correct. The pamphlet served recruitment, and the report it quotes relied on unchecked testimony; some stories were exaggerated.",
            "It was published by a British committee.",
            "It was published in 1915, during the war.",
            "It makes many claims about German actions."]),
        M(3, "t73-s1", "Developments and processes", "The pamphlet best illustrates which feature of total war?",
          ["Governments used propaganda to mobilize civilians and recruits for the war effort", "Armies relied only on professional soldiers", "Governments left war production to private choice", "Civilians had no role in the war"],
          ["Correct. Governments shaped public opinion to recruit soldiers and workers.",
            "Britain needed mass recruitment and later conscription.",
            "The pamphlet asks people to make munitions for the military.",
            "It urges civilians to act."]),
        M(4, "t73-s1", "Contextualization", "The pamphlet's focus on Belgium is best understood in the context of",
          ["Germany's invasion of neutral Belgium in August 1914, which brought Britain into the war", "Belgium's alliance with Germany", "a Belgian invasion of Britain", "the Russian Revolution of 1917"],
          ["Correct. Germany marched through Belgium to attack France, and Britain, which had guaranteed Belgian neutrality, declared war.",
            "Belgium was neutral and was invaded by Germany.",
            "Belgium did not invade Britain.",
            "The pamphlet was published in 1915."]),
        // ===== Set 2: Colonial soldiers and laborers =====
        M(5, "t73-s2", "Claims and evidence in sources", "Which evidence from the passage best supports the claim that the First World War was a global war?",
          ["More than a million men from British India fought in France, Mesopotamia, Palestine, and East Africa.", "Many colonial soldiers returned home angry.", "France recruited soldiers from West Africa.", "Britain hired Chinese laborers."],
          ["Correct. Soldiers from Asia fought on several continents.",
            "This describes an effect after the war.",
            "This supports the claim but less fully than fighting across many regions.",
            "This supports it too, but the Indian example shows fighting on several continents."]),
        M(6, "t73-s2", "Causation", "The anger of returning colonial soldiers and workers most directly contributed to which development after 1918?",
          ["The growth of anticolonial nationalist movements, as in India", "The end of European empires in 1919", "The return of the Ottoman Empire", "The colonies' loyalty to Germany"],
          ["Correct. Service in the war and broken promises fed demands for self-rule.",
            "Most empires lasted until after the Second World War.",
            "The Ottoman Empire ended.",
            "This is not supported."]),
        M(7, "t73-s2", "Comparison", "The use of colonial soldiers in the First World War is most similar to which earlier practice?",
          ["The East India Company's use of Indian sepoys to expand British power in India", "The Mongols' use of Chinese engineers", "Spain's use of Aztec allies in 1521", "The Roman use of mercenaries"],
          ["Correct. Both relied on colonial soldiers to fight for an empire, often far from home; the Company's armies were mostly Indian.",
            "This was a different empire in a different period, and the comparison is weaker.",
            "These were allies, not colonial soldiers.",
            "This is far outside the period."]),
        M(8, "t73-s2", "Developments and processes", "The forced use of African carriers in East Africa best illustrates which feature of the war?",
          ["Colonial populations suffered heavily even outside the main European battlefields", "Africans were exempt from the war", "The war in Africa ended in 1914", "European armies used only machines to transport supplies"],
          ["Correct. Many thousands of carriers died of disease and hunger.",
            "They were forced to serve.",
            "Fighting continued until 1918.",
            "They relied on human carriers."]),
        // ===== SAQ: Women on the home front =====
        Q("a", "Identify ONE way, described in the passage, that women contributed to the war effort.",
          "The response names one contribution from the passage.",
          ["Women worked in munitions factories filling shells.", "Women served as nurses near the front.", "Women filled jobs in offices, transport, and farming."],
          ["\"Women won the vote.\" This is an effect, not a contribution.", "\"Women fought in every army.\" This is not in the passage.", "\"Women stayed home.\" This contradicts the passage."],
          "The passage says hundreds of thousands of British women worked in munitions factories, filling shells with explosives despite the danger.",
          "Women helped."),
        Q("b", "Explain ONE way the war's effects on women were limited or temporary.",
          "The response explains a specific limit.",
          ["Many women lost their jobs when soldiers returned, so their wartime work did not last.", "In Britain, only women over thirty who met property rules won the vote in 1918, while men could vote at twenty-one.", "Women were often paid less than men for the same factory work during the war."],
          ["\"Women worked.\" This does not describe a limit.", "\"All women in the world won the vote in 1918.\" This is false.", "\"Women lost the right to vote after the war.\" This is false."],
          "After the armistice, many women were dismissed from factory jobs so that returning soldiers could have work. Governments and employers expected women to return to the home, so for many the new opportunities of the war years did not last.",
          "Changes were limited."),
        Q("c", "Explain ONE way governments expanded their power over society during the First World War.",
          "The response names and explains a specific way governments expanded their power.",
          ["Governments directed economies, controlling raw materials, factories, and food supplies for the war effort.", "Britain introduced conscription in 1916 and other states drafted millions of men.", "Governments censored the press and used propaganda, such as recruiting pamphlets, to shape public opinion."],
          ["\"Governments fought the war.\" This does not explain an expansion of power.", "\"Governments gave up control of industry.\" This is the opposite.", "\"The United States ended the draft in 1917.\" This is false."],
          "In Britain, the government took control of railways and coal mines, rationed food, and set up a Ministry of Munitions to direct factories. It also introduced conscription in 1916, so the state now decided who would fight.",
          "Governments were powerful."),
      ] },
  ],
};

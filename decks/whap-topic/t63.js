// Topic 6.3 Quiz: Indigenous Responses to State Expansion
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why, difficulty) => ({ id: "t63-m0" + n, skill: "u6", type: "mcq", set, topic: "6.3", reasoning, question, choices, why, difficulty, answer: 0 });
const Q = (sub, prompt, earns, yes, no, example, notExample) => ({ id: "t63-q1" + sub, skill: "u6", type: "fr", set: "t63-s3", part: "SAQ 1", sub, topic: "6.3", lead: SAQ, prompt, earns, yes, no, example, notExample });

export const sets = {
  "t63-s1": {
    id: "t63-s1", name: "Queen Liliuokalani's protest, 1893", intro: ONE,
    sources: [{ title: "Source", blocks: [
      { p: "I, Liliuokalani, by the grace of God and under the constitution of the Hawaiian Kingdom, Queen, do hereby solemnly protest against any and all acts done against myself and the constitutional Government of the Hawaiian Kingdom by certain persons claiming to have established a Provisional Government of and for this Kingdom. That I yield to the superior force of the United States of America, whose minister plenipotentiary, His Excellency John L. Stevens, has caused United States troops to be landed at Honolulu and declared that he would support the said Provisional Government." },
      { p: "Now, to avoid any collision of armed forces, and perhaps the loss of life, I do, under this protest and impelled by said forces, yield my authority until such time as the Government of the United States shall, upon the facts being presented to it, undo the action of its representative and reinstate me in the authority which I claim as the constitutional sovereign of the Hawaiian Islands." },
      { p: "Done at Honolulu, this 17th day of January, A. D. 1893." },
      { cite: "Liliuokalani, Queen of the Hawaiian Kingdom, protest addressed to Sanford B. Dole and the others forming the Provisional Government, Honolulu, January 17, 1893, as printed in the report of James H. Blount, special commissioner of the United States (the Blount Report), and published by the University of Hawaiʻi at Mānoa Library (a question mark the transcriber placed after \"undo\" is omitted). The Provisional Government was formed by a committee of mostly American and European businessmen and sugar planters. The United States annexed Hawaii in 1898.", url: "https://libweb.hawaii.edu/digicoll/annexation/protest/liliu2.php", kind: "primary" },
    ] }],
  },
  "t63-s2": {
    id: "t63-s2", name: "The risings of 1896 in Southern Rhodesia", intro: "Use the passage below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that the risings of the Ndebele and Shona peoples in 1896 showed how deeply colonial rule had disrupted African life within a few years. In the early 1890s, the British South Africa Company, led by Cecil Rhodes, occupied the lands that settlers called Rhodesia, seized land and cattle, and forced Africans to work for settlers and pay taxes. When a cattle disease called rinderpest swept through southern Africa and killed most of the remaining herds, many Africans blamed the newcomers. In 1896, the Ndebele rose first, and the Shona soon followed. Spirit mediums such as Nehanda and Kaguvi helped inspire and coordinate the fighting. Company forces and British troops, armed with machine guns, defeated the risings by 1897, and Nehanda was executed in 1898. Later Zimbabwean nationalists called the risings the First Chimurenga, or first war of liberation." },
      PRACTICE,
    ] }],
  },
  "t63-s3": {
    id: "t63-s3", name: "Samori Touré against the French", intro: SAQ,
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that Samori Touré built one of the strongest African states to resist European conquest. Beginning in the 1860s, Samori, a Muslim leader of the Mande-speaking peoples, built a large state in the region of present-day Guinea, Mali, and Côte d'Ivoire. He organized a professional army, bought repeating rifles from traders in British Sierra Leone, and set up workshops where blacksmiths copied and repaired European guns. When French armies advanced from the west in the 1880s, he fought them for more than a decade, at times negotiating treaties and at times retreating east and moving his whole state, people and all, away from the French. He was finally captured in 1898 and died in exile in 1900." },
      PRACTICE,
    ] }],
  },
};

export default {
  forms: [
    { id: "t63", name: "Topic 6.3 Quiz: Indigenous Responses to State Expansion", group: "Unit 6: Consequences of Industrialization",
      items: [
        // ===== Set 1: Liliuokalani =====
        M(1, "t63-s1", "Sourcing and situation", "Liliuokalani's main purpose in writing this protest was most likely to",
          ["record that she yielded only to force and ask to be restored", "accept the Provisional Government as Hawaii's lawful rulers", "warn that Hawaiians would fight the American troops in Honolulu", "ask Britain and Japan to protect Hawaii's independence"],
          ["Correct. She yields \"under this protest\" and asks the United States to \"undo the action of its representative and reinstate me.\"",
            "She protests \"against any and all acts\" of the Provisional Government.",
            "She yields \"to avoid any collision of armed forces,\" not to threaten war.",
            "Hawaii's kings had sought ties with other powers, but she appeals only to the United States here."],
          "easy"),
        M(2, "t63-s1", "Claims and evidence in sources", "Which phrase from the source best shows that Liliuokalani blamed the United States for her overthrow?",
          ["\"has caused United States troops to be landed\"", "\"certain persons claiming to have established\"", "\"to avoid any collision of armed forces\"", "\"the constitutional sovereign of the Hawaiian Islands\""],
          ["Correct. She says the American minister landed troops and promised to back the new government.",
            "This blames the local men who formed the Provisional Government, not the United States.",
            "This explains why she yielded, not whom she blamed.",
            "This states her claim to rule, not who overthrew her."],
          "moderate"),
        M(3, "t63-s1", "Contextualization", "The overthrow described in the source is best understood in the context of",
          ["the power of American sugar planters in Hawaii", "the Spanish-American War's spread to the Pacific", "the Chinese Exclusion Act's limits on Asian labor", "the Meiji government's plans to annex Hawaii"],
          ["Correct. Planters and businessmen, most of them American, led the Provisional Government and wanted annexation and access to American markets.",
            "That war came in 1898, five years after the overthrow, though it sped annexation.",
            "That law of 1882 limited Chinese entry to the United States, not Hawaii's government.",
            "Japan protested the annexation of Hawaii in 1897 but had no plan to take the islands."],
          "difficult"),
        M(4, "t63-s1", "Comparison", "Liliuokalani's response to foreign pressure is most similar to which other response?",
          ["Moshoeshoe's appeals for British protection", "The Boxers' attacks on foreigners in northern China", "The Ndebele and Shona armed risings of 1896", "Samori Touré's long war against French armies"],
          ["Correct. Both rulers used diplomacy and appeals to a powerful government rather than armed resistance.",
            "The Boxers used violence against foreigners and Chinese Christians.",
            "That was an armed rising against company rule.",
            "Samori fought the French for more than a decade."],
          "moderate"),
        // ===== Set 2: Southern Rhodesia =====
        M(5, "t63-s2", "Causation", "According to the passage, which of the following helped cause the risings of 1896?",
          ["Land and cattle seizures and a deadly cattle disease", "A Boer invasion from the Transvaal across the Limpopo", "The British ban on the Atlantic slave trade in 1807", "A drought and famine that struck the Cape Colony"],
          ["Correct. The passage lists seizures of land and cattle, along with forced labor and taxes and a cattle disease that Africans blamed on the newcomers.",
            "The passage does not mention the Boers.",
            "The passage does not mention the slave trade, which Britain had banned ninety years earlier.",
            "The passage names a cattle disease, not a drought in the Cape."],
          "easy"),
        M(6, "t63-s2", "Developments and processes", "The role of the spirit mediums Nehanda and Kaguvi best illustrates which feature of resistance to colonial rule?",
          ["Religious leaders could unite armed resistance.", "Western-educated lawyers led most resistance before 1900.", "Christian converts led the fight against settler rule.", "Older African religions faded quickly after conquest."],
          ["Correct. Like the Ghost Dance or the Mahdist movement, spiritual leaders gave people hope and helped organize resistance.",
            "Western-educated leaders such as those of the Indian National Congress led other movements, but the passage names spirit mediums.",
            "The mediums drew on Shona religion, not Christianity.",
            "The mediums' role shows that older beliefs kept their power."],
          "moderate"),
        M(7, "t63-s2", "Causation", "According to the passage, the risings were defeated largely because",
          ["colonial forces were armed with machine guns", "the Shona joined only after the Ndebele were beaten", "rinderpest had already killed the fighters' cattle", "Nehanda's execution left the risings without leaders"],
          ["Correct. The passage says Company forces and British troops were \"armed with machine guns.\"",
            "The passage says the Shona \"soon followed\" the Ndebele, so the two risings overlapped.",
            "The passage links rinderpest to the anger behind the risings, not to their defeat.",
            "The passage says the risings were defeated by 1897 and Nehanda was executed in 1898, after the defeat."],
          "moderate"),
        M(8, "t63-s2", "Continuity and change", "The naming of the risings as the \"First Chimurenga\" by later nationalists best shows that",
          ["later nationalists drew on the memory of 1896", "the risings of 1896 ended Company rule in Rhodesia", "the Shona and Ndebele won independence in 1897", "nationalists rejected the spirit mediums' role"],
          ["Correct. Nationalists of the 1960s and 1970s called their own guerrilla war the Second Chimurenga, linking it to 1896.",
            "The passage says the risings were defeated by 1897.",
            "Colonial rule lasted until Zimbabwe's independence in 1980.",
            "Nationalists honored the risings, including leaders such as Nehanda."],
          "moderate"),
        // ===== SAQ: Samori Touré =====
        Q("a", "Identify ONE method, described in the passage, that Samori Touré used to resist French conquest.",
          "The response names one method from the passage.",
          ["He bought repeating rifles from traders in Sierra Leone.", "He set up workshops where blacksmiths copied and repaired European guns.", "He moved his whole state eastward, away from the French."],
          ["\"He was a Muslim leader.\" This describes him, not a method.", "\"He was captured in 1898.\" This is the outcome.", "\"He allied with Germany.\" This is not in the passage."],
          "The passage says Samori set up workshops where blacksmiths copied and repaired European guns, so his army could keep fighting even when it could not buy new weapons.",
          "He fought hard."),
        Q("b", "Explain ONE reason African states like Samori's were eventually defeated by European powers in the period 1750 to 1900.",
          "The response explains a specific reason for European success.",
          ["European armies had machine guns, artillery, and large supplies of ammunition that African states could not match.", "Quinine and steamships let European forces move into the interior and survive diseases that had once kept them out.", "Europeans could exploit divisions among African states and recruit African soldiers to fight for them."],
          ["\"Europeans were stronger.\" This needs a specific explanation.", "\"Africans had no weapons.\" This is false; Samori had rifles.", "\"Africans asked to be colonized.\" This is false."],
          "European armies had machine guns and artillery and could resupply from factories at home. Even though Samori bought and copied rifles, he could not match French firepower or replace losses, so he was slowly pushed back and captured.",
          "Europe won."),
        Q("c", "Explain ONE way a state outside Africa resisted European or American expansion in the period 1750 to 1900.",
          "The response names a specific state or people outside Africa and explains a specific act of resistance.",
          ["In India, the revolt of 1857 spread from the Company's sepoys to many civilians who fought to restore Mughal and princely rule.", "In Hawaii, Queen Liliuokalani protested the overthrow of her government and appealed to the United States to restore her.", "In New Zealand, Māori fought British forces in the 1860s and formed a King movement to stop land sales."],
          ["\"Many states resisted.\" This names no specific state.", "\"Ethiopia defeated Italy at Adwa.\" The prompt asks for a state outside Africa.", "\"China welcomed the opium trade.\" This is not resistance."],
          "In New Zealand, many Māori tribes united behind a Māori king in the King movement of the late 1850s to stop the sale of land to settlers. When the British government sent troops into the Waikato region in 1863, Māori fought back for years before losing much of their land.",
          "Other places resisted."),
      ] },
  ],
};

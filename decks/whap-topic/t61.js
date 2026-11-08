// Topic 6.1 Quiz: Rationales for Imperialism
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why) => ({ id: "t61-m0" + n, skill: "u6", type: "mcq", set, topic: "6.1", reasoning, question, choices, why, answer: 0 });
const Q = (sub, prompt, earns, yes, no, example, notExample) => ({ id: "t61-q1" + sub, skill: "u6", type: "fr", set: "t61-s3", part: "SAQ 1", sub, topic: "6.1", lead: SAQ, prompt, earns, yes, no, example, notExample });

export const sets = {
  "t61-s1": {
    id: "t61-s1", name: "Joseph Chamberlain on the true conception of empire, 1897", intro: ONE,
    sources: [{ title: "Source", blocks: [
      { p: "... As regards the self-governing colonies we no longer talk of them as dependencies. The sense of possession has given place to the sentiment of kinship. We think and speak of them as part of ourselves, as part of the British Empire, united to us ... by ties of kindred, of religion, of history, and of language ..." },
      { p: "But the British Empire is not confined to the self-governing colonies and the United Kingdom. It includes a much greater area, a much more numerous population, in tropical climes, where no considerable European settlement is possible, and where the native population must always vastly outnumber the white inhabitants ... Here also the sense of possession has given place to a different sentiment,—the sense of obligation. We feel now that our rule over these territories can only be justified if we can show that it adds to the happiness and prosperity of the people ... In carrying out this work of civilization we are fulfilling what I believe to be our national mission, and we are finding scope for the exercise of those faculties and qualities which have made of us a great governing race." },
      { p: "... No doubt, in the first instance, when these conquests have been made, there has been bloodshed, there has been loss of life among the native populations, loss of still more precious lives among those who have been sent out to bring these countries into some kind of disciplined order, but it must be remembered that that is the condition of the mission we have to fulfil." },
      { cite: "Joseph Chamberlain, British Secretary of State for the Colonies, \"The True Conception of Empire,\" speech at the annual dinner of the Royal Colonial Institute, London, March 31, 1897, in John Alden, ed., Representative British Orations, vol. 4 (New York: G. P. Putnam's Sons, 1900), as published by Project Gutenberg. \"Self-governing colonies\" were settler colonies such as Canada and Australia.", url: "https://www.gutenberg.org/files/58102/58102-h/58102-h.htm", kind: "primary" },
    ] }],
  },
  "t61-s2": {
    id: "t61-s2", name: "Missionaries and the civilizing mission", intro: "Use the passage below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that Christian missionaries helped make empire seem a moral duty to Europeans and Americans. The Scottish missionary and explorer David Livingstone, who traveled across southern and central Africa in the 1850s and 1860s, called for \"Christianity, commerce, and civilization\" to replace the slave trade that still ran from the East African interior to the coast. His books sold widely, and after his death in 1873 new missions spread across Africa. Missionaries built schools and hospitals, translated the Bible into African and Asian languages, and often opposed the worst abuses of colonial rule. Yet many also described local cultures as backward, urged governments to take control of new territories to protect their work, and taught that converts should give up older customs. Some of the African and Asian students educated in mission schools later became leaders of movements against colonial rule." },
      PRACTICE,
    ] }],
  },
  "t61-s3": {
    id: "t61-s3", name: "Japan joins the race for empire", intro: SAQ,
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that Japan's leaders saw empire as a way to keep from becoming a colony themselves. After the Meiji Restoration of 1868, Japanese leaders watched Western powers force unequal treaties on China and Japan and seize territory across Asia. They concluded that a modern state needed an army, a navy, industry, and colonies. Some Japanese writers argued that Japan should \"leave Asia\" and act like a Western power, while others claimed Japan had a duty to lead other Asian peoples. Japan took Taiwan after defeating China in 1895, won influence in Korea and southern Manchuria after defeating Russia in 1905, and annexed Korea in 1910. In the colonies, Japanese officials built railways and schools while taking land and suppressing resistance, much as European colonial governments did." },
      PRACTICE,
    ] }],
  },
};

export default {
  forms: [
    { id: "t61", name: "Topic 6.1 Quiz: Rationales for Imperialism", group: "Unit 6: Consequences of Industrialization",
      items: [
        // ===== Set 1: Chamberlain =====
        M(1, "t61-s1", "Claims and evidence in sources", "Chamberlain justifies British rule over tropical colonies mainly by claiming that it",
          ["brings security, peace, and prosperity to the people ruled, as part of a national mission", "is needed to settle large numbers of British people there", "will soon end with the colonies' independence", "is the wish of the people in those colonies"],
          ["Correct. He says rule \"can only be justified\" if it adds to the people's happiness and prosperity, and calls it \"this work of civilization.\"",
            "He says \"no considerable European settlement is possible\" there.",
            "He describes a lasting mission, not a plan for independence.",
            "He does not say the people asked for British rule."]),
        M(2, "t61-s1", "Comparison", "Chamberlain describes the settler colonies differently from the tropical colonies in that he sees the settler colonies as",
          ["bound to Britain by kinship, religion, history, and language", "places where Britain must impose order by conquest", "colonies with large native majorities", "territories Britain should give up"],
          ["Correct. He speaks of \"the sentiment of kinship\" with the self-governing colonies but of \"obligation\" toward the tropical ones.",
            "He describes conquest in the tropical colonies.",
            "He says the tropical colonies have native majorities.",
            "He calls them \"part of ourselves.\""]),
        M(3, "t61-s1", "Sourcing and situation", "Chamberlain's phrase \"a great governing race\" best reflects which idea common in the late 1800s?",
          ["The belief that some races were naturally fit to rule others", "The belief that all peoples should govern themselves", "The belief that empires were too costly to keep", "The belief that Britain should withdraw from Africa"],
          ["Correct. Ideas of racial hierarchy, often linked to Social Darwinism, were used to justify imperial rule.",
            "He argues the opposite.",
            "He praises empire.",
            "He defends British rule."]),
        M(4, "t61-s1", "Contextualization", "The speech is best understood in the context of which development?",
          ["The rapid expansion of European empires in Africa and Asia in the late 1800s", "The independence of Spanish America in the 1820s", "The end of the British Empire after the Second World War", "The Atlantic slave trade of the 1700s"],
          ["Correct. In 1897 Britain was expanding in Africa during the Scramble for Africa and competing with France and Germany.",
            "That was seventy years earlier and concerned Spain.",
            "That came half a century later.",
            "Britain had abolished its slave trade in 1807."]),
        // ===== Set 2: Missionaries =====
        M(5, "t61-s2", "Claims and evidence in sources", "The passage best supports which claim about missionaries?",
          ["Their role in empire was mixed: they spread schools and criticized abuses, but often supported colonial rule.", "They always opposed colonial rule.", "They had no effect on African or Asian societies.", "They worked only in Europe."],
          ["Correct. The passage lists schools, hospitals, and opposition to abuses alongside calls for government control and contempt for local cultures.",
            "The passage says many urged governments to take control.",
            "The passage describes schools, translations, and converts.",
            "The passage describes missions in Africa and Asia."]),
        M(6, "t61-s2", "Developments and processes", "Livingstone's call for \"Christianity, commerce, and civilization\" best illustrates which rationale for imperialism?",
          ["A belief that Europeans had a duty to change other societies, combined with economic interest", "A desire to protect African cultures from change", "A plan to keep Africa closed to trade", "The idea that Africa should rule Europe"],
          ["Correct. It joined religious and moral goals with trade, a common justification for expansion.",
            "He sought to change African societies.",
            "He called for more commerce.",
            "This has no basis in the passage."]),
        M(7, "t61-s2", "Causation", "According to the passage, mission schools had which unintended effect?",
          ["Some students educated there became leaders of anticolonial movements", "They ended the use of African languages", "They caused the slave trade to grow", "They prevented anyone from converting"],
          ["Correct. Education gave some Africans and Asians tools to challenge colonial rule.",
            "Missionaries translated the Bible into African languages.",
            "Livingstone sought to end the slave trade.",
            "The passage describes converts."]),
        M(8, "t61-s2", "Comparison", "The role of missionaries described in the passage is most similar to which earlier development?",
          ["Spanish friars converting Indigenous peoples in the Americas while also defending them against some abuses", "Mongol rulers tolerating many religions", "Buddhist monks spreading their faith along the Silk Roads without empires", "The Protestant Reformation in Germany"],
          ["Correct. Like later missionaries, friars such as Las Casas both served colonial expansion and criticized its cruelties.",
            "Mongol rulers were not missionaries.",
            "This spread was not tied to imperial conquest as described.",
            "The Reformation was a split within European Christianity."]),
        // ===== SAQ: Japan =====
        Q("a", "Identify ONE reason, described in the passage, that Japanese leaders sought colonies.",
          "The response names one reason from the passage.",
          ["They feared Japan might be colonized or forced into unequal treaties like China.", "They believed a modern state needed colonies as well as an army, navy, and industry.", "Some claimed Japan had a duty to lead other Asian peoples."],
          ["\"Japan took Taiwan.\" This is an action, not a reason.", "\"Japan wanted to free Korea from all foreign rule.\" Japan annexed Korea.", "\"Japan had too few people.\" The passage does not give this reason."],
          "The passage says Japanese leaders watched Western powers force unequal treaties on China and Japan and concluded that a strong modern state needed colonies so that Japan would not become a colony itself.",
          "Japan wanted power."),
        Q("b", "Explain ONE way Japan's rationale for empire was similar to the rationales of European imperial powers in the period 1750 to 1900.",
          "The response explains a specific similarity.",
          ["Like Britain or France, Japan saw colonies as a sign of being a modern great power and as a source of raw materials and markets.", "Like Europeans who spoke of a civilizing mission, some Japanese claimed a duty to lead and modernize other Asian peoples.", "Like European powers, Japan used its industrial and military strength to justify ruling weaker societies."],
          ["\"Japan and Europe both had empires.\" This states no similarity in rationale.", "\"Japan wanted to spread Christianity.\" This is not accurate.", "\"Europe and Japan both opposed imperialism.\" This is false."],
          "Like Chamberlain, who spoke of Britain's \"national mission,\" some Japanese leaders claimed a duty to lead other Asian peoples. In both cases, the idea of bringing progress to others was used to justify ruling them.",
          "Japan was like Europe."),
        Q("c", "Explain ONE way colonized peoples resisted or responded to Japanese or European rule in the period 1750 to 1900.",
          "The response names a specific response or act of resistance and explains it.",
          ["In Taiwan, local leaders declared a short-lived Republic of Formosa and fought Japanese troops in 1895.", "In India, the revolt of 1857 began among the East India Company's sepoys and spread to many civilians in northern India.", "In Ethiopia, Menelik II bought modern rifles and defeated an Italian army at Adwa in 1896, keeping Ethiopia independent."],
          ["\"People resisted.\" This names no specific response.", "\"Korea welcomed annexation.\" This is not accurate.", "\"Ethiopia became an Italian colony in 1896.\" This is wrong."],
          "In Ethiopia, Emperor Menelik II bought modern rifles and artillery from European suppliers and built a large army. When Italy invaded, his forces defeated the Italians at Adwa in 1896, and Ethiopia remained independent while nearly all of Africa was colonized.",
          "Colonized people fought back."),
      ] },
  ],
};

// Topic 6.1 Quiz: Rationales for Imperialism
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
import { bars } from "../../plot.js";
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why, difficulty) => ({ id: "t61-m0" + n, skill: "u6", type: "mcq", set, topic: "6.1", reasoning, question, choices, why, difficulty, answer: 0 });
const Q = (sub, prompt, earns, yes, no, example, notExample) => ({ id: "t61-q1" + sub, skill: "u6", type: "fr", set: "t61-s3", part: "SAQ 1", sub, topic: "6.1", lead: SAQ, prompt, earns, yes, no, example, notExample });

// Colonial area (million square kilometers) and colonial population (millions) of six powers, 1876 and 1914, from Lenin (see the cite below).
const POWERS = { names: ["Britain", "Russia", "France", "Germany", "United States", "Japan"],
  area1876: [22.5, 17.0, 0.9, 0, 0, 0], pop1876: [251.9, 15.9, 6.0, 0, 0, 0],
  area1914: [33.5, 17.4, 10.6, 2.9, 0.3, 0.3], pop1914: [393.5, 33.2, 55.5, 12.3, 9.7, 19.2] };

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
    id: "t61-s2", name: "Colonial empires of the great powers, 1876 and 1914", intro: "Use the charts and table below to answer the questions that follow.", label: "Chart",
    sources: [{ title: "Chart", blocks: [
      { svg: bars({ labels: POWERS.names, values: POWERS.area1876, y: [0, 35], step: 5, yname: "Million square kilometers", fmt: (v) => (v ? v.toFixed(1) : "none"), width: 600, height: 300,
        alt: "Bar chart of the land area of each great power's colonies in 1876, in millions of square kilometers: " + POWERS.names.map((n, i) => `${n}, ${POWERS.area1876[i] ? POWERS.area1876[i].toFixed(1) : "none"}`).join("; ") + "." }),
        caption: "Land area of each power's colonies in 1876, in millions of square kilometers" },
      { svg: bars({ labels: POWERS.names, values: POWERS.area1914, y: [0, 35], step: 5, yname: "Million square kilometers", fmt: (v) => v.toFixed(1), width: 600, height: 300,
        alt: "Bar chart of the land area of each great power's colonies in 1914, in millions of square kilometers: " + POWERS.names.map((n, i) => `${n}, ${POWERS.area1914[i].toFixed(1)}`).join("; ") + ". Britain's colonies grew, France's grew more than tenfold, and Germany, the United States, and Japan, which had none in 1876, all held colonies by 1914." }),
        caption: "Land area of each power's colonies in 1914, in millions of square kilometers" },
      { table: { head: ["Power", "Colonial area, 1876", "Colonial population, 1876", "Colonial area, 1914", "Colonial population, 1914"],
        rows: POWERS.names.map((n, i) => [n, POWERS.area1876[i] ? POWERS.area1876[i].toFixed(1) : "none", POWERS.pop1876[i] ? POWERS.pop1876[i].toFixed(1) : "none", POWERS.area1914[i].toFixed(1), POWERS.pop1914[i].toFixed(1)]) } },
      { cite: "Areas in millions of square kilometers and populations in millions, from the table \"Colonial possessions of the great powers\" in V. I. Lenin, Imperialism, the Highest Stage of Capitalism (written 1916, published 1917), chapter VI, which took the 1876 figures from the German geographer Alexander Supan and the 1914 figures from Otto Hübner's Geographical and Statistical Tables. \"Colonies\" means lands each power ruled outside its home country.", url: "https://www.marxists.org/archive/lenin/works/1916/imp-hsc/ch06.htm", kind: "data" },
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
          ["adds to the happiness and prosperity of the people ruled", "makes room for large numbers of British families to settle", "prepares each colony to govern itself within a few years", "answers requests for protection from the colonies' rulers"],
          ["Correct. He says rule there \"can only be justified\" if it \"adds to the happiness and prosperity of the people\" and calls it \"this work of civilization.\"",
            "He says \"no considerable European settlement is possible\" in the tropical colonies.",
            "He describes a lasting \"national mission,\" not a plan to hand over power.",
            "He never says local rulers asked for British rule; he speaks of conquest and \"bloodshed.\""],
          "moderate"),
        M(2, "t61-s1", "Comparison", "Chamberlain describes the settler colonies differently from the tropical colonies in that he sees the settler colonies as",
          ["tied to Britain by kinship, religion, history, and language", "held by conquest and kept in order by British troops", "home to native majorities that far outnumber settlers", "too costly to keep and likely to be given up soon"],
          ["Correct. He speaks of \"the sentiment of kinship\" with the self-governing colonies but of \"obligation\" toward the tropical ones.",
            "He links conquest and bloodshed to the tropical colonies, not the settler colonies.",
            "He says this of the tropical colonies.",
            "He calls the settler colonies \"part of ourselves,\" not a burden to drop."],
          "easy"),
        M(3, "t61-s1", "Sourcing and situation", "Chamberlain's phrase \"a great governing race\" best reflects which idea common in the late 1800s?",
          ["Some races were fit by nature to rule others.", "Each nation had a right to govern itself.", "Trade, not conquest, was the source of national wealth.", "Converting others was the first duty of an empire."],
          ["Correct. Ideas of racial hierarchy, often linked to Social Darwinism, were used to justify imperial rule.",
            "He argues that Britain should rule others, the opposite of self-government for all.",
            "This was the free-trade argument of critics of empire; Chamberlain defends rule, not just trade.",
            "Missionaries argued this, but the phrase is about ruling, and the speech never mentions religion as the purpose."],
          "moderate"),
        M(4, "t61-s1", "Contextualization", "The speech is best understood in the context of which development?",
          ["The rapid growth of European empires in Africa and Asia", "The wars for independence in Spanish America in the 1820s", "The loss of Britain's thirteen American colonies in 1783", "Britain's abolition of slavery in its colonies in 1833"],
          ["Correct. In 1897 Britain was expanding in Africa during the Scramble for Africa and competing with France and Germany.",
            "Those wars ended Spain's empire seventy years before the speech.",
            "That loss came more than a century earlier and concerned settler colonies, not tropical ones.",
            "Abolition came sixty years before the speech and is not its subject."],
          "easy"),
        // ===== Set 2: Chart of colonial empires =====
        M(5, "t61-s2", "Claims and evidence in sources", "Which of the following is best supported by the charts and table?",
          ["Germany, the United States, and Japan gained colonies only after 1876.", "Britain held less colonial land in 1914 than it had held in 1876.", "France held more colonial land than Britain did by 1914.", "Russia's colonial land grew more than threefold from 1876 to 1914."],
          ["Correct. The table shows none for these three powers in 1876, and each holds colonies in 1914.",
            "Britain's colonial area grew from 22.5 to 33.5 million square kilometers.",
            "France reached 10.6 million square kilometers, about a third of Britain's 33.5.",
            "Russia's colonial area barely changed, from 17.0 to 17.4 million square kilometers."],
          "easy"),
        M(6, "t61-s2", "Causation", "The new colonies of Germany, Japan, and the United States by 1914 are best explained by which rationale for empire?",
          ["Colonies were a mark of great-power status.", "Colonies were needed to hold surplus convicts.", "Colonies supplied silver to pay for Asian goods.", "Colonies were a reward from the Congress of Vienna."],
          ["Correct. Newly unified Germany and newly industrialized Japan and the United States sought colonies partly to show they ranked with Britain and France.",
            "Britain once shipped convicts to Australia, but this was not why the newcomers wanted colonies.",
            "Silver for the Asian trade drove Spanish expansion in the 1500s and 1600s, not this later expansion.",
            "The Congress of Vienna met in 1814 and 1815 and gave none of these powers overseas colonies."],
          "moderate"),
        M(7, "t61-s2", "Developments and processes", "French leaders most often justified the growth in France's colonies shown in the charts by appealing to",
          ["a mission to spread French civilization", "the need to replace the lands lost in 1763", "a duty to guard Christian holy sites in Jerusalem", "the need for land for millions of French settlers"],
          ["Correct. French leaders spoke of a mission civilisatrice, a duty to bring French language, schools, and law to the peoples they ruled.",
            "France did lose Canada and lands in India in 1763, but leaders of the 1880s and 1890s rarely gave that as their reason.",
            "France claimed to protect Catholics in the Ottoman Empire, but most of its new colonies were in Africa and Southeast Asia.",
            "France sent few emigrants abroad, and most of its new colonies in West Africa and Indochina had very few French settlers."],
          "difficult"),
        M(8, "t61-s2", "Sourcing and situation", "The charts and table are limited as evidence about the rationales for imperialism mainly because they",
          ["show how much land each power took but not why", "leave out the colonies that Britain held in Asia", "end before the Berlin Conference of 1884 and 1885", "count the people of each colony but not its area"],
          ["Correct. Figures on area and population cannot show motives such as profit, prestige, or a civilizing mission; speeches or letters would be needed.",
            "The figures cover all of each power's colonies, including British India.",
            "The table compares 1876 with 1914, so it spans the Berlin Conference.",
            "The table gives both area and population."],
          "moderate"),
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

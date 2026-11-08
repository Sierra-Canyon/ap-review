// Topic 7.2 Quiz: Causes of World War I
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why, difficulty) => ({ id: "t72-m0" + n, skill: "u7", type: "mcq", set, topic: "7.2", reasoning, difficulty, question, choices, why, answer: 0 });
const Q = (sub, prompt, earns, yes, no, example, notExample) => ({ id: "t72-q1" + sub, skill: "u7", type: "fr", set: "t72-s3", part: "SAQ 1", sub, topic: "7.2", lead: SAQ, prompt, earns, yes, no, example, notExample });

export const sets = {
  "t72-s1": {
    id: "t72-s1", name: "Austria-Hungary's ultimatum to Serbia, 1914", intro: ONE,
    sources: [{ title: "Source", blocks: [
      { p: "... Now the history of the past few years, and particularly the painful events of the 28th of June, have proved the existence of a subversive movement in Serbia, whose object it is to separate certain portions of its territory from the Austro-Hungarian Monarchy. ..." },
      { p: "It is clear from the statements and confessions of the criminal authors of the assassination of the twenty-eighth of June, that the murder at Sarajevo was conceived at Belgrade, that the murderers received the weapons and the bombs with which they were equipped from Serbian officers and officials who belonged to the Narodna Odbrana, and, finally, that the dispatch of the criminals and of their weapons to Bosnia was arranged and effected under the conduct of Serbian frontier authorities. ..." },
      { p: "The Royal Serbian Government will furthermore pledge itself: 1. to suppress every publication which shall incite to hatred and contempt of the Monarchy ... 5. to agree to the cooperation in Serbia of the organs of the Imperial and Royal Government in the suppression of the subversive movement directed against the integrity of the Monarchy; 6. to institute a judicial inquiry against every participant in the conspiracy of the twenty-eighth of June who may be found in Serbian territory; the organs of the Imperial and Royal Government delegated for this purpose will take part in the proceedings held for this purpose ..." },
      { p: "The Imperial and Royal Government awaits the reply of the Royal Government by Saturday, the twenty-fifth instant, at 6 p.m., at the latest." },
      { cite: "Austro-Hungarian note to the Serbian government, delivered in Belgrade, July 23, 1914, English translation as published by the World War I Document Archive, Brigham Young University Library. On June 28, 1914, Gavrilo Princip, a Bosnian Serb, assassinated Archduke Franz Ferdinand, heir to the Austro-Hungarian throne, in Sarajevo. The Narodna Odbrana was a Serbian nationalist society.", url: "https://wwi.lib.byu.edu/index.php/The_Austro-Hungarian_Ultimatum_to_Serbia_(English_Translation)", kind: "primary" },
    ] }],
  },
  "t72-s2": {
    id: "t72-s2", name: "The Balkan Wars", intro: "Use the passage below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that the Balkan Wars of 1912 and 1913 set the stage for the First World War. In 1912, Serbia, Bulgaria, Greece, and Montenegro, each claiming lands where their national groups lived, attacked the weakened Ottoman Empire and took almost all of its remaining territory in Europe. In 1913, the victors fought among themselves over the spoils, and Bulgaria lost much of what it had gained. Serbia nearly doubled in size and emerged confident and ambitious, and many Serbian nationalists hoped next to unite the South Slavs of Austria-Hungary, including those in Bosnia, with Serbia. Austria-Hungary's leaders saw a stronger Serbia, backed by Russia, as a threat to the survival of their multiethnic empire, and some concluded that Serbia had to be crushed before it grew stronger still." },
      PRACTICE,
    ] }],
  },
  "t72-s3": {
    id: "t72-s3", name: "The Moroccan crises", intro: SAQ,
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that imperial rivalries outside Europe helped harden the alliances that went to war in 1914. In 1905, Germany's emperor Wilhelm II landed at Tangier and declared his support for Morocco's independence, challenging France's plans to control the country. At an international conference in 1906, Britain backed France, and Germany found itself nearly isolated. In 1911, when French troops entered the Moroccan city of Fez, Germany sent a gunboat to the port of Agadir. Britain again stood behind France, and Germany accepted part of the French Congo in exchange for recognizing French control of Morocco. Each crisis drew Britain and France closer together, deepened German fears of being surrounded, and convinced leaders on both sides that the next crisis might end in war." },
      PRACTICE,
    ] }],
  },
};

export default {
  forms: [
    { id: "t72", name: "Topic 7.2 Quiz: Causes of World War I", group: "Unit 7: Global Conflict",
      items: [
        // ===== Set 1: The ultimatum =====
        M(1, "t72-s1", "Sourcing and situation", "The demands in points 5 and 6 were most likely included because Austria-Hungary's leaders",
          ["expected Serbia to reject limits on its sovereignty", "wanted Russian officials to lead the inquiry in Serbia", "hoped to win Serbia as an ally against the Ottomans", "planned to hand Bosnia over to Serbian control"],
          ["Correct. Points 5 and 6 would let Austro-Hungarian officials act inside Serbia, terms a sovereign state could hardly accept, and Vienna wanted a reason for war.",
            "Russia is not mentioned; points 5 and 6 call for the Monarchy's own officials.",
            "The note accuses Serbia of plotting against the Monarchy; the two were rivals, not allies.",
            "The note accuses Serbia of trying to separate Bosnia and other lands from the Monarchy."], "moderate"),
        M(2, "t72-s1", "Contextualization", "The ultimatum is best understood in the context of",
          ["fear of South Slav nationalism backed by Serbia", "Anglo-German rivalry over the size of their navies", "German anger at France's growing control of Morocco", "Russian demands for control of the Turkish Straits"],
          ["Correct. The note speaks of a movement to \"separate certain portions\" of the Monarchy's territory.",
            "Naval rivalry divided Britain and Germany, but the note concerns Serbia.",
            "The Moroccan crises set Germany against France, but the note concerns Serbia.",
            "Russia wanted the Straits, but the note is about a threat from Serbia."], "easy"),
        M(3, "t72-s1", "Causation", "Serbia's rejection of part of the ultimatum most directly led to which development?",
          ["Austria-Hungary's war on Serbia and Russia's mobilization", "a peace conference that settled the crisis, as in 1913", "Germany's decision to stay neutral in the dispute", "Russia's annexation of Serbia to protect it from attack"],
          ["Correct. Austria-Hungary declared war on July 28; Russia mobilized to support Serbia, and Germany then declared war on Russia and France.",
            "A London conference helped end the Balkan Wars in 1913, but no conference stopped the crisis of 1914.",
            "Germany backed Austria-Hungary and declared war on Russia and France.",
            "Russia mobilized to defend Serbia but never annexed it."], "easy"),
        M(4, "t72-s1", "Claims and evidence in sources", "Which statement from the ultimatum best shows that Austria-Hungary blamed the Serbian state, not only individuals, for the assassination?",
          ["\"arranged and effected under the conduct of Serbian frontier authorities\"", "\"a subversive movement in Serbia, whose object it is to separate certain portions\"", "\"to suppress every publication which shall incite to hatred and contempt of the Monarchy\"", "\"the painful events of the 28th of June\""],
          ["Correct. It says Serbian border officials organized the assassins' crossing into Bosnia, which blames the Serbian state itself.",
            "This describes a movement in Serbia, not acts by the Serbian state.",
            "This is a demand for the future, not an accusation about the assassination.",
            "This names the event but assigns no blame."], "difficult"),
        // ===== Set 2: The Balkan Wars =====
        M(5, "t72-s2", "Causation", "According to the passage, the Balkan Wars contributed to the First World War mainly by",
          ["strengthening Serbia and alarming Austria-Hungary", "ending the rivalry between Austria-Hungary and Serbia", "uniting Bulgaria and Serbia in a lasting alliance", "giving the Ottomans back their lands in the Balkans"],
          ["Correct. Serbia nearly doubled in size, and Austria-Hungary's leaders saw it as a threat to their empire's survival.",
            "The passage says some in Vienna concluded that Serbia had to be crushed, so the rivalry grew sharper.",
            "The victors fought one another in 1913, and Bulgaria lost much of what it had gained.",
            "The Ottomans lost almost all their remaining European land."], "easy"),
        M(6, "t72-s2", "Developments and processes", "The Balkan states' claims to \"lands where their national groups lived\" best illustrate which cause of the First World War?",
          ["Nationalism", "Militarism", "Imperialism", "The alliance system"],
          ["Correct. Claims to land where a nation's people lived are nationalist claims, and they drove the Balkan Wars and Serbian ambitions.",
            "Militarism means glorifying and building up armed forces; the quotation is about national homelands.",
            "The Balkan states claimed nearby lands where their own peoples lived, not overseas colonies.",
            "Alliances turned the Balkan crisis into a general war, but the quotation is about national claims."], "easy"),
        M(7, "t72-s2", "Comparison", "Austria-Hungary's fear that Serbia would pull away its South Slav lands is most similar to which other situation before 1914?",
          ["Ottoman fears of losing Balkan peoples to new states", "Britain's fear of Germany's growing battleship fleet", "France's wish to win back Alsace-Lorraine from Germany", "Germany's fear of encirclement by France and Russia"],
          ["Correct. Both were multiethnic empires that feared losing lands to nation-states claiming their peoples, as the Ottomans did in the Balkan Wars.",
            "Britain feared a rival navy, not the loss of its own peoples to a neighboring nation-state.",
            "France wanted to regain lost land; it did not fear breaking apart.",
            "Germany feared a war on two fronts, not nationalist movements pulling away its lands."], "difficult"),
        M(8, "t72-s2", "Contextualization", "Russia's support for Serbia, mentioned in the passage, is best explained by",
          ["Pan-Slavism and rivalry with Austria-Hungary", "Russia's alliance with Germany against Austria-Hungary", "Russia's wish to restore Ottoman rule in the Balkans", "Serbia's control of the Straits leading to the Black Sea"],
          ["Correct. Russia saw itself as the protector of fellow Slavic and Orthodox peoples and competed with Austria-Hungary for influence in the Balkans.",
            "Russia was allied with France; Germany was Austria-Hungary's ally.",
            "Russia had fought the Ottomans repeatedly and welcomed their retreat from the Balkans.",
            "The Ottomans, not Serbia, controlled the Straits."], "moderate"),
        // ===== SAQ: The Moroccan crises =====
        Q("a", "Identify ONE way, described in the passage, that the Moroccan crises affected relations among the European powers.",
          "The response names one effect from the passage.",
          ["Britain and France drew closer together.", "Germany found itself nearly isolated and feared being surrounded.", "Leaders became convinced that the next crisis might end in war."],
          ["\"Germany landed at Tangier.\" This is an event, not an effect.", "\"Germany gained Morocco.\" This is wrong: France gained control of Morocco.", "\"The crises ended all alliances.\" This contradicts the passage."],
          "The passage says each crisis drew Britain and France closer, since Britain backed France against Germany at the conference of 1906 and again in 1911.",
          "Relations changed."),
        Q("b", "Explain ONE way imperialism contributed to the outbreak of the First World War.",
          "The response explains a specific link between imperial rivalry and the war.",
          ["Competition over colonies such as Morocco created crises that hardened the alliances between Britain and France against Germany.", "Germany's desire for colonies and a large navy to protect them alarmed Britain and led to a naval arms race.", "Rivalry over the lands of the declining Ottoman Empire set Austria-Hungary and Russia against each other in the Balkans."],
          ["\"Countries had empires.\" This does not explain a cause.", "\"Africa started the war.\" This is inaccurate.", "\"Imperialism ended before 1900.\" This is false."],
          "Germany's demand for a larger colonial empire and its challenges to France in Morocco in 1905 and 1911 pushed Britain to support France. These crises turned the Entente between Britain and France into a closer partnership, so when war came in 1914 Britain was more likely to fight alongside France.",
          "Imperialism caused war."),
        Q("c", "Explain ONE factor OTHER than imperialism that contributed to the outbreak of the First World War.",
          "The response names and explains a specific non-imperial cause.",
          ["Alliance commitments meant that a war between Austria-Hungary and Serbia drew in Russia, Germany, France, and Britain.", "Militarism and mobilization plans, such as Germany's plan to attack France through Belgium, pushed leaders to act quickly.", "Nationalism, such as Serbian hopes to unite the South Slavs, led to the assassination at Sarajevo."],
          ["\"Imperial rivalries in Africa.\" The prompt asks for a factor other than imperialism.", "\"Countries were angry.\" This is too vague.", "\"The Great Depression.\" This came after the war."],
          "Germany's war plan called for defeating France quickly by marching through Belgium before Russia could fully mobilize. Once Russia began to mobilize in July 1914, German leaders felt they had to strike at once, which turned a Balkan crisis into a European war.",
          "There were other causes."),
      ] },
  ],
};

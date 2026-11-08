// Topic 9.5 Quiz: Calls for Reform and Responses
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why, difficulty) => ({ id: "t95-m0" + n, skill: "u9", type: "mcq", set, topic: "9.5", reasoning, difficulty, question, choices, why, answer: 0 });
const Q = (sub, prompt, earns, yes, no, example, notExample) => ({ id: "t95-q1" + sub, skill: "u9", type: "fr", set: "t95-s3", part: "SAQ 1", sub, topic: "9.5", lead: SAQ, prompt, earns, yes, no, example, notExample });

export const sets = {
  "t95-s1": {
    id: "t95-s1", name: "The Universal Declaration of Human Rights, 1948", intro: ONE,
    sources: [{ title: "Source", blocks: [
      { p: "Whereas disregard and contempt for human rights have resulted in barbarous acts which have outraged the conscience of mankind, and the advent of a world in which human beings shall enjoy freedom of speech and belief and freedom from fear and want has been proclaimed as the highest aspiration of the common people, ..." },
      { p: "Article 1. All human beings are born free and equal in dignity and rights. They are endowed with reason and conscience and should act towards one another in a spirit of brotherhood." },
      { p: "Article 2. Everyone is entitled to all the rights and freedoms set forth in this Declaration, without distinction of any kind, such as race, colour, sex, language, religion, political or other opinion, national or social origin, property, birth or other status. Furthermore, no distinction shall be made on the basis of the political, jurisdictional or international status of the country or territory to which a person belongs, whether it be independent, trust, non-self-governing or under any other limitation of sovereignty." },
      { p: "Article 21 (3). The will of the people shall be the basis of the authority of government; this will shall be expressed in periodic and genuine elections which shall be by universal and equal suffrage and shall be held by secret vote or by equivalent free voting procedures." },
      { cite: "Universal Declaration of Human Rights, adopted by the United Nations General Assembly, Paris, December 10, 1948, as published by the United Nations. Forty-eight states voted for it; none voted against, and eight abstained, including the Soviet Union and five other communist states, South Africa, and Saudi Arabia. A commission chaired by Eleanor Roosevelt drafted it. The declaration was not a binding treaty.", url: "https://www.un.org/en/about-us/universal-declaration-of-human-rights", kind: "primary" },
    ] }],
  },
  "t95-s2": {
    id: "t95-s2", name: "Ambedkar and the fight against caste", intro: "Use the passage below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that the campaign against caste discrimination in India shows both the power and the limits of legal reform. B. R. Ambedkar, born in 1891 into a caste considered \"untouchable,\" earned doctorates in the United States and Britain and led movements demanding that Dalits, as many now call themselves, be allowed to draw water from public tanks and enter temples. He disagreed with Gandhi, who wanted to reform the caste system from within Hinduism. As chairman of the committee that drafted India's constitution, Ambedkar helped write a ban on untouchability in 1950 and reserved seats in legislatures, government jobs, and universities for Dalits. In 1956, shortly before his death, he and hundreds of thousands of followers converted to Buddhism. Discrimination nonetheless continued in many villages for decades." },
      PRACTICE,
    ] }],
  },
  "t95-s3": {
    id: "t95-s3", name: "Liberation theology", intro: SAQ,
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that liberation theology made parts of the Catholic Church in Latin America a voice for the poor. At a meeting in Medellín, Colombia, in 1968, Latin American bishops described poverty and injustice as \"institutionalized violence\" and called on the church to side with the poor. Priests and lay workers formed small \"base communities\" where poor people read the Bible together and discussed their problems, and some organized for land and better wages. Military governments, and some church leaders, accused the movement of spreading Marxism. Many priests and activists were jailed or killed; Archbishop Óscar Romero of El Salvador, who spoke out against the army's killings, was shot while saying Mass in 1980. In the 1980s, the Vatican under Pope John Paul II criticized the movement's use of Marxist ideas." },
      PRACTICE,
    ] }],
  },
};

export default {
  forms: [
    { id: "t95", name: "Topic 9.5 Quiz: Calls for Reform and Responses", group: "Unit 9: Globalization",
      items: [
        // ===== Set 1: UDHR =====
        M(1, "t95-s1", "Contextualization", "The phrase \"barbarous acts which have outraged the conscience of mankind\" most likely refers to",
          ["the Holocaust and other atrocities of the Second World War", "the Armenian genocide carried out during the First World War", "the Korean War fought between the communist and Western blocs", "the forced labor and killings in Belgium's Congo Free State"],
          ["Correct. The declaration was adopted in 1948, three years after the war, in response to the Nazi genocide and other wartime crimes.",
            "The Armenian genocide was a real atrocity, but in 1948 the most recent and widely known crimes were those of the Second World War.",
            "The Korean War began in 1950, two years after the declaration.",
            "Abuses in the Congo Free State ended by 1908, decades before the declaration; the preamble points to recent events."],
          "moderate"),
        M(2, "t95-s1", "Claims and evidence in sources", "Which part of Article 2 most directly challenged colonial rule?",
          ["Its ban on distinctions by whether a country was independent", "Its ban on distinctions based on a person's language or religion", "Its ban on distinctions based on property or birth", "Its ban on distinctions based on political or other opinion"],
          ["Correct. It says rights do not depend on whether a person's country is independent, a trust territory, or non-self-governing, so people in colonies had the same rights as anyone.",
            "This protects individuals from discrimination but does not address a territory's colonial status.",
            "This protects individuals' rights regardless of wealth or family, not the status of colonies.",
            "This protects freedom of opinion, not the rights of people living under colonial rule."],
          "moderate"),
        M(3, "t95-s1", "Sourcing and situation", "The abstentions of the Soviet bloc and South Africa suggest that",
          ["states without free elections or racial equality were wary of it", "these states voted against the declaration in the General Assembly", "these states had refused to join the United Nations in 1945", "the declaration bound every member to hold free elections at once"],
          ["Correct. Article 21's call for free elections and Article 2's ban on racial distinction clashed with one-party rule and with South Africa's racial laws.",
            "The note says none voted against; they abstained.",
            "The Soviet Union and South Africa were founding members of the United Nations.",
            "The note says the declaration was not a binding treaty."],
          "difficult"),
        M(4, "t95-s1", "Causation", "The declaration most directly contributed to which later development?",
          ["Rights movements and treaties that cited it as a standard", "The founding of the United Nations as a body to keep peace", "The founding of the League of Nations after the First World War", "A world court that punished states for every rights abuse"],
          ["Correct. Activists and later conventions, such as the 1966 covenants, built on its principles even though it was not binding.",
            "The United Nations was founded in 1945, before the declaration, and adopted it.",
            "The League of Nations was founded in 1920, long before the declaration.",
            "No court punished every rights abuse; the declaration itself was not binding."],
          "easy"),
        // ===== Set 2: Ambedkar =====
        M(5, "t95-s2", "Comparison", "Ambedkar's approach differed from Gandhi's mainly in that Ambedkar",
          ["used law, and finally left Hinduism, to fight caste", "wanted to reform caste from within the Hindu tradition", "used fasts and nonviolent marches to win independence", "put ending British rule ahead of ending caste"],
          ["Correct. Ambedkar helped write the constitution's ban on untouchability and later converted to Buddhism, while Gandhi sought reform within Hinduism.",
            "The passage says this was Gandhi's approach, which Ambedkar disagreed with.",
            "These were Gandhi's methods; the passage describes Ambedkar's campaigns for access to water and temples and his legal work.",
            "The passage shows Ambedkar leading movements against caste discrimination, not putting it second."],
          "moderate"),
        M(6, "t95-s2", "Developments and processes", "The reserved seats and jobs for Dalits best illustrate which kind of response to calls for reform?",
          ["Laws that widened opportunity for groups facing bias", "Bans on reform movements that challenged religious tradition", "Reforms carried out by religious leaders without state action", "Laws that divided citizens into legally separate groups"],
          ["Correct. India's constitution reserved seats in legislatures, jobs, and university places for Dalits.",
            "India adopted the reforms Ambedkar's movement demanded rather than banning them.",
            "The reservations were created by the state through the constitution.",
            "The reservations aimed to end discrimination, unlike laws such as apartheid that enforced separation."],
          "easy"),
        M(7, "t95-s2", "Continuity and change", "The final sentence of the passage best supports which claim?",
          ["Legal change did not quickly end social discrimination.", "Conversion to Buddhism ended caste for Ambedkar's followers.", "Reserved seats gave Dalits no place in legislatures.", "Caste discrimination lasted longest in India's large cities."],
          ["Correct. The constitution banned untouchability in 1950, yet discrimination continued for decades.",
            "The last sentence speaks of continued discrimination, not of its end for any group.",
            "The passage says seats in legislatures were reserved for Dalits.",
            "The passage says discrimination continued in many villages."],
          "easy"),
        M(8, "t95-s2", "Comparison", "India's reserved seats and jobs for Dalits are most similar to which policy elsewhere?",
          ["Affirmative action programs in the United States", "Apartheid laws that separated races in South Africa", "Land reforms that broke up large estates in Mexico", "The Chinese Exclusion Act passed in the United States"],
          ["Correct. Both used law to open education and jobs to groups long kept out.",
            "Apartheid enforced discrimination rather than remedying it.",
            "Mexican land reform redistributed land by class, not places in jobs and schools for a group facing discrimination.",
            "That law barred a group from entering the country."],
          "easy"),
        // ===== SAQ: Liberation theology =====
        Q("a", "Identify ONE practice of liberation theology described in the passage.",
          "The response names one practice from the passage.",
          ["Priests and lay workers formed base communities where poor people read the Bible together.", "Church workers helped the poor organize for land and better wages.", "Bishops called on the church to side with the poor."],
          ["\"The Vatican criticized it.\" This was a response.", "\"Romero was shot.\" This was a response.", "\"Military governments ruled.\" This was the context."],
          "The passage says priests formed small base communities where poor people read the Bible together and discussed their problems.",
          "It helped the poor."),
        Q("b", "Explain ONE reason governments or church leaders opposed liberation theology.",
          "The response explains a specific reason.",
          ["Military governments saw organizing the poor as a threat and accused the movement of spreading Marxism.", "During the Cold War, anticommunist governments feared that it would help leftist rebels.", "The Vatican objected to its use of Marxist ideas such as class struggle."],
          ["\"They did not like it.\" This explains nothing.", "\"It supported the military.\" This is false.", "\"It was a Protestant movement.\" It arose within the Catholic Church."],
          "In the Cold War, military governments in Latin America saw any movement organizing peasants and workers as a communist threat. They accused liberation theology of spreading Marxism, which they used to justify jailing and killing priests and activists.",
          "They opposed it."),
        Q("c", "Explain ONE other movement after 1900 that used religion to call for social or political reform.",
          "The response names a specific movement and explains how religion shaped its call for reform.",
          ["The American civil rights movement, led by ministers such as Martin Luther King Jr., used Christian teachings to demand equality.", "Gandhi's movement in India drew on Hindu ideas of nonviolence and truth to resist British rule.", "The Iranian Revolution of 1979 used Shi'a Islam to call for overthrowing the shah."],
          ["\"Liberation theology.\" The prompt asks for another movement.", "\"Religion changed.\" This names no movement.", "\"The Khmer Rouge used Buddhism.\" They abolished religion."],
          "Martin Luther King Jr., a Baptist minister, led the civil rights movement from Black churches. He used Christian ideas of love and justice to call for an end to segregation and to win support from many Americans.",
          "Religion was used."),
      ] },
  ],
};

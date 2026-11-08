// Topic 8.6 Quiz: Newly Independent States
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why) => ({ id: "t86-m0" + n, skill: "u8", type: "mcq", set, topic: "8.6", reasoning, question, choices, why, answer: 0 });
const Q = (sub, prompt, earns, yes, no, example, notExample) => ({ id: "t86-q1" + sub, skill: "u8", type: "fr", set: "t86-s3", part: "SAQ 1", sub, topic: "8.6", lead: SAQ, prompt, earns, yes, no, example, notExample });

export const sets = {
  "t86-s1": {
    id: "t86-s1", name: "The Arusha Declaration, 1967", intro: ONE,
    sources: [{ title: "Source", blocks: [
      { p: "We have been oppressed a great deal, we have been exploited a great deal and we have been disregarded a great deal. It is our weakness that has led to our being oppressed, exploited and disregarded. Now we want a revolution – a revolution which brings an end to our weakness, so that we are never again exploited, oppressed, or humiliated. ..." },
      { p: "It is stupid to rely on money as the major instrument of development when we know only too well that our country is poor. It is equally stupid, indeed it is even more stupid, for us to imagine that we shall rid ourselves of our poverty through foreign financial assistance rather than our own financial resources. ..." },
      { p: "... Independence means self-reliance. Independence cannot be real if a nation depends upon gifts and loans from another for its development. ..." },
      { p: "To build and maintain socialism it is essential that all the major means of production and exchange in the nation are controlled and owned by the peasants through the machinery of their Government and their co-operatives. ..." },
      { cite: "The Arusha Declaration, written by President Julius Nyerere and adopted by the National Executive Committee of the Tanganyika African National Union (TANU), Tanzania's ruling party, at Arusha, February 1967, as published in the Marxists Internet Archive; two capital letters lowered for this review. Tanganyika became independent from Britain in 1961 and joined with Zanzibar in 1964 to form Tanzania. After the declaration, the government nationalized banks and large firms and, in the 1970s, moved millions of rural people into planned ujamaa (\"familyhood\") villages.", url: "https://www.marxists.org/subject/africa/nyerere/1967/arusha-declaration.htm", kind: "primary" },
    ] }],
  },
  "t86-s2": {
    id: "t86-s2", name: "Nigeria's civil war", intro: "Use the passage below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that Nigeria's civil war showed the dangers that colonial borders posed to new states. British rule had joined more than 250 ethnic groups into one colony, with the Hausa and Fulani largely in the north, the Yoruba in the southwest, and the Igbo in the southeast. After independence in 1960, politics divided along these regional lines. Two military coups in 1966 were followed by the killing of thousands of Igbo living in the north, and more than a million fled to the southeast. In 1967, the southeastern region declared itself the independent Republic of Biafra. The Nigerian government, which wanted to keep the region and its oil fields, blockaded Biafra, and as many as a million or more people, many of them children, died, mostly from starvation, before Biafra surrendered in 1970." },
      PRACTICE,
    ] }],
  },
  "t86-s3": {
    id: "t86-s3", name: "From the colonies to Britain", intro: SAQ,
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that decolonization brought many people from former colonies to the countries that had ruled them. In 1948, the ship Empire Windrush brought several hundred migrants from Jamaica and other Caribbean colonies to Britain, which needed workers to rebuild after the war. Over the next two decades, hundreds of thousands of people came from the Caribbean, India, Pakistan, and later East Africa, working in hospitals, factories, and public transport. Many met discrimination in housing and jobs. Britain passed laws in 1962 and later years that restricted immigration from the Commonwealth. France saw similar migration from Algeria and its West African colonies, and the Netherlands from Indonesia and Suriname. These migrants and their children changed the food, music, and politics of European cities." },
      PRACTICE,
    ] }],
  },
};

export default {
  forms: [
    { id: "t86", name: "Topic 8.6 Quiz: Newly Independent States", group: "Unit 8: Cold War and Decolonization",
      items: [
        // ===== Set 1: Arusha =====
        M(1, "t86-s1", "Claims and evidence in sources", "The declaration's main argument about development is that Tanzania should",
          ["rely on its own people and resources rather than on foreign aid and loans", "borrow as much money as possible from wealthy countries", "invite foreign companies to own its main industries", "rejoin the British Empire"],
          ["Correct. It says \"Independence means self-reliance.\"",
            "It calls relying on foreign money \"stupid.\"",
            "It calls for public ownership.",
            "It celebrates independence."]),
        M(2, "t86-s1", "Contextualization", "The declaration's concern that gifts and loans could limit independence is best understood in the context of",
          ["new states' fears that aid from former colonial powers or the superpowers would bring outside control", "Tanzania's wealth from oil in the 1960s", "Tanzania's membership in NATO", "the end of colonialism in Africa before 1900"],
          ["Correct. Many leaders worried that economic dependence would replace colonial rule.",
            "Tanzania was poor.",
            "Tanzania was nonaligned.",
            "Colonial rule in Africa lasted into the 1960s."]),
        M(3, "t86-s1", "Comparison", "Tanzania's path described in the declaration differed from that of many East Asian states, such as South Korea, in that Tanzania",
          ["relied on state ownership and rural socialism rather than export-led industry", "built its economy on exports of manufactured goods", "joined the American alliance", "rejected all government planning"],
          ["Correct. South Korea grew by exporting manufactured goods; Tanzania emphasized self-reliance and village socialism.",
            "That describes South Korea.",
            "Tanzania was nonaligned.",
            "Tanzania relied heavily on planning."]),
        M(4, "t86-s1", "Continuity and change", "The government's nationalization of banks and large firms after 1967 best illustrates which trend among newly independent states?",
          ["Many new states expanded state control of their economies to reduce foreign influence", "Most new states privatized all industries", "New states gave their industries to former colonial powers", "New states abolished their governments"],
          ["Correct. States such as Egypt, India, and Tanzania nationalized key industries.",
            "Privatization came more often in the 1980s and 1990s.",
            "They sought to reduce foreign control.",
            "This is false."]),
        // ===== Set 2: Nigeria =====
        M(5, "t86-s2", "Causation", "According to the passage, a long-term cause of the Nigerian civil war was",
          ["British rule that joined many ethnic groups into one colony", "a war between Nigeria and Britain", "the discovery of gold in the north", "Nigeria's alliance with the Soviet Union"],
          ["Correct. Colonial borders united groups that later divided along regional lines.",
            "No such war occurred.",
            "Gold is not mentioned; oil is.",
            "This is not mentioned."]),
        M(6, "t86-s2", "Developments and processes", "The Nigerian government's determination to keep Biafra was influenced by",
          ["the region's oil fields, an important source of national income", "Biafra's lack of resources", "British demands that Biafra become independent", "a treaty with Biafra signed in 1960"],
          ["Correct. The passage says the government wanted to keep the region and its oil.",
            "The region had oil.",
            "Britain supported Nigeria's unity.",
            "No such treaty existed."]),
        M(7, "t86-s2", "Comparison", "The war in Nigeria is most similar to which other conflict in a new state?",
          ["The violence that followed the partition of British India in 1947", "The Meiji Restoration", "The unification of Germany", "The Berlin airlift"],
          ["Correct. In both, divisions among peoples inside former colonial borders led to mass violence after independence.",
            "That was a reform movement in Japan in 1868.",
            "That created a nation-state in Europe in 1871.",
            "That was a Cold War standoff."]),
        M(8, "t86-s2", "Claims and evidence in sources", "Which evidence from the passage best supports the claim that civilians suffered most in the war?",
          ["As many as a million or more people, many of them children, died mostly from starvation.", "Two military coups took place in 1966.", "Biafra declared independence in 1967.", "Nigeria became independent in 1960."],
          ["Correct. The blockade caused mass starvation among civilians.",
            "This describes politics.",
            "This describes politics.",
            "This describes independence."]),
        // ===== SAQ: Migration =====
        Q("a", "Identify ONE region from which people migrated to Britain after 1948, as described in the passage.",
          "The response names one region from the passage.",
          ["The Caribbean, such as Jamaica.", "South Asia, such as India or Pakistan.", "East Africa."],
          ["\"Algeria.\" Algerians went mainly to France.", "\"Suriname.\" Migrants from Suriname went mainly to the Netherlands.", "\"Europe.\" The passage describes migration from former colonies."],
          "The passage says the Empire Windrush brought migrants from Jamaica and other Caribbean colonies to Britain in 1948.",
          "People came to Britain."),
        Q("b", "Explain ONE reason people migrated from former colonies to Europe after the Second World War.",
          "The response explains a specific reason.",
          ["European countries needed workers to rebuild after the war and recruited them from former colonies.", "Colonial ties, such as a shared language and citizenship rights within the Commonwealth, made migration easier.", "Poverty and limited jobs in many former colonies pushed people to seek work in Europe."],
          ["\"People moved.\" This explains no reason.", "\"Europe banned all immigration.\" This is false.", "\"Migrants were forced to move as slaves.\" This is false for this period."],
          "After the war, Britain faced a labor shortage in hospitals, factories, and transport. The government and employers such as London Transport recruited workers from the Caribbean, who as citizens of the empire could settle in Britain.",
          "They had reasons."),
        Q("c", "Explain ONE way migration from former colonies affected European societies in the period 1945 to 2000.",
          "The response explains a specific effect.",
          ["Migrants changed the food, music, and culture of European cities, such as Caribbean carnival in London.", "Hostility to migrants led to new laws restricting immigration, such as Britain's laws of 1962 and later.", "Discrimination against migrants led to protests and to laws against racial discrimination."],
          ["\"Europe changed.\" This is too vague.", "\"Migrants all returned home by 1960.\" This is false.", "\"Migration had no effect.\" This contradicts the passage."],
          "In response to rising immigration from the Commonwealth and growing hostility from some white Britons, Parliament passed the Commonwealth Immigrants Act of 1962, which required most migrants to have a work voucher. Later laws restricted immigration further.",
          "Migration had effects."),
      ] },
  ],
};

// Topic 8.5 Quiz: Decolonization After 1900
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why) => ({ id: "t85-m0" + n, skill: "u8", type: "mcq", set, topic: "8.5", reasoning, question, choices, why, answer: 0 });
const Q = (sub, prompt, earns, yes, no, example, notExample) => ({ id: "t85-q1" + sub, skill: "u8", type: "fr", set: "t85-s3", part: "SAQ 1", sub, topic: "8.5", lead: SAQ, prompt, earns, yes, no, example, notExample });

export const sets = {
  "t85-s1": {
    id: "t85-s1", name: "Lumumba at the Congo's independence, 1960", intro: ONE,
    sources: [{ title: "Source", blocks: [
      { p: "Although this independence of the Congo is being proclaimed today by agreement with Belgium, an amicable country, with which we are on equal terms, no Congolese will ever forget that independence was won in struggle, a persevering and inspired struggle carried on from day to day, a struggle, in which we were undaunted by privation or suffering and stinted neither strength nor blood. ..." },
      { p: "We have experienced forced labour in exchange for pay that did not allow us to satisfy our hunger, to clothe ourselves, to have decent lodgings or to bring up our children as dearly loved ones. ..." },
      { p: "We have not forgotten that in the cities the mansions were for the whites and the tumbledown huts for the blacks; that a black was not admitted to the cinemas, restaurants and shops set aside for \"Europeans\"; that a black travelled in the holds, under the feet of the whites in their luxury cabins. ..." },
      { p: "We shall see to it that the lands of our native country truly benefit its children. ... I ask you all to sink your tribal quarrels: they weaken us and may cause us to be despised abroad. ... The Congo's independence is a decisive step towards the liberation of the whole African continent." },
      { cite: "Patrice Lumumba, prime minister of the Republic of the Congo, speech at the ceremony proclaiming the Congo's independence from Belgium, Léopoldville (Kinshasa), June 30, 1960, as published in the Marxists Internet Archive from a 1961 English translation. Belgium's King Baudouin had just spoken, praising his great-granduncle King Leopold II as the founder of the colony. Within weeks the army mutinied and the mineral-rich province of Katanga seceded; Lumumba was removed from office and was killed in January 1961.", url: "https://www.marxists.org/subject/africa/lumumba/1960/06/independence.htm", kind: "primary" },
    ] }],
  },
  "t85-s2": {
    id: "t85-s2", name: "Kenya and the Mau Mau war", intro: "Use the passage below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that Kenya's path to independence shows how settler colonies resisted decolonization. In the Kenyan highlands, white settlers held much of the best farmland, while many Kikuyu people were squeezed onto crowded reserves or worked as squatters on settler farms. In the early 1950s, a movement known as Mau Mau took up arms, attacking settlers and Africans who worked with the colonial government. Britain declared a state of emergency in 1952, arrested nationalist leaders including Jomo Kenyatta, and detained tens of thousands of Kikuyu in camps where many were tortured. More than 10,000 rebels were killed, while fewer than 200 European soldiers, police, and settlers died. Although the rebellion was defeated by 1956, Britain concluded that it could not hold Kenya by force, and Kenya became independent in 1963 with Kenyatta as its leader." },
      PRACTICE,
    ] }],
  },
  "t85-s3": {
    id: "t85-s3", name: "Indonesia's war of independence", intro: SAQ,
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that Indonesia won its independence through a combination of armed struggle and international pressure. During the Second World War, Japan occupied the Dutch East Indies and allowed nationalists such as Sukarno to organize. Two days after Japan surrendered in August 1945, Sukarno and Mohammad Hatta declared Indonesia independent. The Netherlands sent troops to restore its rule and launched two large military offensives in 1947 and 1948, while Indonesian forces fought a guerrilla war. The United Nations called for a ceasefire, and in 1949 the United States, which saw Indonesia's nationalists as opponents of communism, threatened to cut off Marshall Plan aid to the Netherlands. In December 1949, the Dutch transferred sovereignty to Indonesia." },
      PRACTICE,
    ] }],
  },
};

export default {
  forms: [
    { id: "t85", name: "Topic 8.5 Quiz: Decolonization After 1900", group: "Unit 8: Cold War and Decolonization",
      items: [
        // ===== Set 1: Lumumba =====
        M(1, "t85-s1", "Sourcing and situation", "Lumumba's description of forced labor and segregation was most likely intended to",
          ["answer the Belgian claim that colonial rule had benefited the Congo by reminding listeners of its injustices", "thank Belgium for its colonial rule", "call for the Congo to remain a Belgian colony", "praise King Leopold II"],
          ["Correct. Speaking after the king praised Leopold II, Lumumba listed the abuses of colonial rule.",
            "He describes colonialism as \"humiliating bondage.\"",
            "He celebrates independence.",
            "He condemns the colonial past."]),
        M(2, "t85-s1", "Claims and evidence in sources", "Which statement from the speech best supports the claim that Lumumba saw Congolese independence as part of a wider movement?",
          ["\"The Congo's independence is a decisive step towards the liberation of the whole African continent.\"", "\"We have experienced forced labour\"", "\"I ask you all to sink your tribal quarrels\"", "\"the lands of our native country truly benefit its children\""],
          ["Correct. He links the Congo to the liberation of all of Africa.",
            "This concerns the Congo's past.",
            "This concerns internal unity.",
            "This concerns the Congo's land."]),
        M(3, "t85-s1", "Causation", "Lumumba's warning about \"tribal quarrels\" proved relevant because",
          ["regional and ethnic divisions, such as the secession of Katanga, quickly threatened the new state", "the Congo was united under one king for decades", "Belgium annexed the Congo again in 1961", "the Congo joined the European Economic Community"],
          ["Correct. Katanga's secession and other divisions began within weeks.",
            "The Congo faced civil conflict.",
            "Belgium did not annex it again.",
            "It did not join."]),
        M(4, "t85-s1", "Contextualization", "The crisis that followed the Congo's independence is best understood in the context of",
          ["the Cold War, in which the superpowers backed rival Congolese leaders", "the First World War", "the Napoleonic Wars", "the end of the Cold War in 1991"],
          ["Correct. Lumumba sought Soviet help, and Western powers backed his opponents.",
            "That ended in 1918.",
            "Those ended in 1815.",
            "That was thirty years later."]),
        // ===== Set 2: Kenya =====
        M(5, "t85-s2", "Causation", "According to the passage, a main cause of the Mau Mau rebellion was",
          ["white settlers' control of the best farmland while many Kikuyu were crowded onto reserves", "Kenyatta's appointment as governor", "Britain's withdrawal from Kenya in 1952", "a war between Kenya and Uganda"],
          ["Correct. Land loss and poverty drove the rebellion.",
            "Kenyatta was arrested.",
            "Britain declared an emergency.",
            "No such war is described."]),
        M(6, "t85-s2", "Comparison", "Decolonization in Kenya was most similar to decolonization in which other colony?",
          ["Algeria, where a large settler population fought to keep French rule", "Ghana, which became independent largely through negotiation", "India, where the main movement was nonviolent", "Jamaica, which became independent peacefully"],
          ["Correct. In both, settlers and armed revolt made decolonization violent.",
            "Ghana's path was mostly peaceful.",
            "India's main movement was nonviolent.",
            "Jamaica's path was peaceful."]),
        M(7, "t85-s2", "Claims and evidence in sources", "Which evidence from the passage best supports the claim that Britain's response was harsh?",
          ["Tens of thousands of Kikuyu were detained in camps where many were tortured.", "Kenya became independent in 1963.", "Mau Mau attacked settlers.", "Kenyatta became Kenya's leader."],
          ["Correct. Mass detention and torture show the harshness of the response.",
            "This was the outcome.",
            "This describes the rebels.",
            "This was the outcome."]),
        M(8, "t85-s2", "Continuity and change", "Kenya's independence in 1963 best illustrates which change in British policy?",
          ["Britain concluded that it could not hold settler colonies by force and chose to negotiate independence", "Britain expanded its empire in Africa after 1960", "Britain defeated all nationalist movements permanently", "Britain gave Kenya to France"],
          ["Correct. Though the rebellion was defeated, Britain chose to leave.",
            "Britain was leaving Africa.",
            "Nationalists won independence.",
            "This is false."]),
        // ===== SAQ: Indonesia =====
        Q("a", "Identify ONE factor described in the passage that helped Indonesia win independence.",
          "The response names one factor from the passage.",
          ["Indonesian forces fought a guerrilla war against the Dutch.", "The United Nations called for a ceasefire.", "The United States threatened to cut off Marshall Plan aid to the Netherlands."],
          ["\"The Dutch launched offensives.\" This opposed independence.", "\"Sukarno was a Dutch official.\" This is false.", "\"Japan won the war.\" Japan surrendered."],
          "The passage says the United States threatened to cut off Marshall Plan aid to the Netherlands, which pressured the Dutch to leave.",
          "Indonesia had help."),
        Q("b", "Explain ONE way the Second World War contributed to Indonesian independence.",
          "The response explains a specific link.",
          ["Japan's occupation ended Dutch rule and showed that European power could be broken.", "Japan allowed nationalists such as Sukarno to organize, so they were ready to declare independence in 1945.", "The war weakened the Netherlands, which had itself been occupied by Germany, making it harder to reconquer Indonesia."],
          ["\"There was a war.\" This explains no link.", "\"The Dutch won the war in Asia.\" This is false.", "\"Indonesia became independent in 1940.\" This is false."],
          "Japan occupied the Dutch East Indies from 1942 to 1945 and allowed nationalists like Sukarno to organize. When Japan surrendered, the nationalists were ready to declare independence before the Dutch could return.",
          "The war helped."),
        Q("c", "Explain ONE way decolonization in Indonesia was similar to OR different from decolonization in another colony in the period 1945 to 1975.",
          "The response names another colony and explains a specific similarity or difference.",
          ["Similar to Vietnam: nationalists declared independence in 1945 and fought a European power that tried to return.", "Different from India: Indonesia won independence through armed struggle, while India's path was largely negotiated.", "Similar to Algeria: a European power fought a long war to keep its colony before giving it up."],
          ["\"Other colonies became independent.\" This names none.", "\"Indonesia was like Ghana because both fought long wars.\" Ghana's path was peaceful.", "\"Indonesia became independent from Britain.\" It was a Dutch colony."],
          "Indonesia was similar to Vietnam. In both, nationalists declared independence right after Japan's surrender in 1945, and a European power (the Netherlands or France) sent troops to restore its rule, leading to years of war.",
          "It was like other places."),
      ] },
  ],
};

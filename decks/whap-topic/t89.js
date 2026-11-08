// Topic 8.9 Quiz: Causation in the Age of the Cold War and Decolonization
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why) => ({ id: "t89-m0" + n, skill: "u8", type: "mcq", set, topic: "8.9", reasoning, question, choices, why, answer: 0 });
const Q = (sub, prompt, earns, yes, no, example, notExample) => ({ id: "t89-q1" + sub, skill: "u8", type: "fr", set: "t89-s3", part: "SAQ 1", sub, topic: "8.9", lead: SAQ, prompt, earns, yes, no, example, notExample });

export const sets = {
  "t89-s1": {
    id: "t89-s1", name: "Nehru's \"tryst with destiny,\" 1947", intro: ONE,
    sources: [{ title: "Source", blocks: [
      { p: "Long years ago we made a tryst with destiny, and now the time comes when we shall redeem our pledge, not wholly or in full measure, but very substantially. At the stroke of the midnight hour, when the world sleeps, India will awake to life and freedom. A moment comes, which comes but rarely in history, when we step out from the old to the new, when an age ends, and when the soul of a nation, long suppressed, finds utterance. ..." },
      { p: "... The service of India means the service of the millions who suffer. It means the ending of poverty and ignorance and disease and inequality of opportunity. The ambition of the greatest man of our generation has been to wipe every tear from every eye. ..." },
      { p: "... Those dreams are for India, but they are also for the world, for all the nations and peoples are too closely knit together today for any one of them to imagine that it can live apart. Peace has been said to be indivisible, so is freedom, so is prosperity now, and so also is disaster in this One World that can no longer be split into isolated fragments." },
      { cite: "Jawaharlal Nehru, speech to the Constituent Assembly of India, New Delhi, on the night of August 14, 1947, as published in the Constituent Assembly Debates by constitutionofindia.net; a stray comma removed for this review. India became independent at midnight. The \"greatest man of our generation\" was Mohandas Gandhi. Pakistan marked its independence on August 14, and violence during the partition killed hundreds of thousands of people.", url: "https://www.constitutionofindia.net/debates/14-aug-1947/", kind: "primary" },
    ] }],
  },
  "t89-s2": {
    id: "t89-s2", name: "Why empires ended after 1945", intro: "Use the passage below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "Historians have offered several explanations for why most European empires ended within about thirty years after 1945. Some stress the strength of nationalist movements, which organized mass parties, strikes, and in some places armed struggle. Others stress the weakness of the colonial powers, which were exhausted by the Second World War and faced the high cost of fighting colonial wars. Still others point to the international setting: the United States and the Soviet Union both opposed old-style empires, and the United Nations gave new states a forum to demand independence for others. Finally, some historians argue that colonial powers chose to leave when they believed they could keep their economic and strategic interests through trade, aid, and alliances. Most historians agree that these causes worked together, in different mixes in different places." },
      PRACTICE,
    ] }],
  },
  "t89-s3": {
    id: "t89-s3", name: "Korea: division and war", intro: SAQ,
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that Korea shows how decolonization and the Cold War became tangled together. Japan had ruled Korea as a colony since 1910. When Japan surrendered in 1945, Soviet troops occupied the north and American troops the south, divided at the 38th parallel. Each power backed a government that claimed to rule all of Korea: a communist state under Kim Il Sung in the north and an anticommunist state under Syngman Rhee in the south. In June 1950, with Soviet approval, North Korea invaded the south. A United Nations force led by the United States pushed the North Koreans back nearly to the Chinese border, and China then sent hundreds of thousands of troops into the war. After about three million deaths, an armistice in 1953 left Korea divided near where it had started." },
      PRACTICE,
    ] }],
  },
};

export default {
  forms: [
    { id: "t89", name: "Topic 8.9 Quiz: Causation in the Age of the Cold War and Decolonization", group: "Unit 8: Cold War and Decolonization",
      items: [
        // ===== Set 1: Nehru =====
        M(1, "t89-s1", "Claims and evidence in sources", "Nehru's statement that India's freedom comes \"not wholly or in full measure, but very substantially\" most likely reflects",
          ["the partition of British India into India and Pakistan, which many nationalists had opposed", "India's continued rule by Britain", "India's alliance with the Soviet Union", "India's defeat in the Second World War"],
          ["Correct. Independence came with partition, so the hope for a united India was not fulfilled.",
            "India became independent.",
            "India was nonaligned.",
            "India was not defeated."]),
        M(2, "t89-s1", "Developments and processes", "Nehru's statement that \"the service of India means the service of the millions who suffer\" best reflects which goal of many new states?",
          ["Ending poverty and disease through national development", "Building overseas empires", "Restoring the old monarchies", "Joining a superpower alliance"],
          ["Correct. New governments promised development and social justice.",
            "New states had just escaped empire.",
            "Nehru led a democratic republic.",
            "India chose non-alignment."]),
        M(3, "t89-s1", "Causation", "Nehru's view that the world could \"no longer be split into isolated fragments\" most directly helps explain India's later policy of",
          ["non-alignment, which sought cooperation with all nations rather than joining a Cold War bloc", "joining NATO", "closing India to all foreign trade forever", "conquering neighboring states"],
          ["Correct. Nehru helped found the Non-Aligned Movement.",
            "India did not join NATO.",
            "India traded and accepted aid.",
            "This is not supported."]),
        M(4, "t89-s1", "Comparison", "India's independence in 1947 differed from Indonesia's in 1949 mainly in that India's",
          ["was won mostly through mass political movements and negotiation rather than a war against the colonial power", "came after a long war against the Netherlands", "was granted by Japan", "came after the Cold War ended"],
          ["Correct. Britain negotiated its exit, though partition brought terrible violence between communities.",
            "That describes Indonesia.",
            "Japan did not grant it.",
            "The Cold War lasted until 1991."]),
        // ===== Set 2: Why empires ended =====
        M(5, "t89-s2", "Claims and evidence in sources", "According to the passage, most historians agree that decolonization",
          ["resulted from several causes working together, in different mixes in different places", "was caused only by the strength of nationalist movements", "was planned by the colonial powers before 1939", "was ordered by the United Nations in 1945"],
          ["Correct. The passage ends by saying the causes worked together.",
            "This is only one of the explanations.",
            "The passage does not say this.",
            "The UN gave new states a forum but did not order decolonization."]),
        M(6, "t89-s2", "Claims and evidence in sources", "Which evidence would best support the explanation based on the international setting?",
          ["The United States pressured the Netherlands to grant Indonesia independence in 1949", "The Mau Mau fought British forces in Kenya", "Britain needed an American loan in 1946", "France kept close economic ties with its former colonies"],
          ["Correct. American pressure shows the role of the superpowers.",
            "This supports the nationalist explanation.",
            "This supports the explanation based on colonial weakness.",
            "This supports the explanation based on economic interests."]),
        M(7, "t89-s2", "Causation", "The explanation that colonial powers left when they could keep their interests in other ways is best supported by",
          ["France's continued military and economic influence in many of its former West African colonies after 1960", "the Haitian Revolution", "the Russian Revolution", "the Meiji Restoration"],
          ["Correct. France kept troops, a shared currency, and trade ties in several former colonies.",
            "That came in the 1790s.",
            "That concerned Russia.",
            "That concerned Japan."]),
        M(8, "t89-s2", "Comparison", "Decolonization after 1945 was most similar to the Latin American independence movements of the early 1800s in that both",
          ["ended European colonial rule over large regions within a few decades", "were led by the Soviet Union", "created communist states everywhere", "were carried out by the United Nations"],
          ["Correct. Both brought rapid independence to many colonies.",
            "The Soviet Union did not exist in the 1800s.",
            "Most new states were not communist.",
            "The UN did not exist in the 1800s."]),
        // ===== SAQ: Korea =====
        Q("a", "Identify ONE way the end of Japanese rule in 1945 led to the division of Korea, as described in the passage.",
          "The response names one link from the passage.",
          ["Soviet troops occupied the north and American troops the south after Japan surrendered.", "The two occupying powers each backed a government claiming all of Korea.", "Korea was divided at the 38th parallel between the Soviet and American zones."],
          ["\"China invaded Korea in 1945.\" China entered the war in 1950.", "\"Japan divided Korea.\" The occupying powers did.", "\"The armistice of 1953.\" This came later."],
          "The passage says that when Japan surrendered, Soviet troops occupied the north and American troops the south, divided at the 38th parallel.",
          "Korea was divided."),
        Q("b", "Explain ONE way the Korean War was shaped by the Cold War.",
          "The response explains a specific link.",
          ["North Korea invaded with Soviet approval, and the United States led a UN force to defend the south as part of containment.", "China entered the war to stop American forces from reaching its border.", "The war ended in a stalemate that left Korea divided between a communist north and an anticommunist south."],
          ["\"There was a war in Korea.\" This explains no link.", "\"The Soviet Union fought for South Korea.\" This is false.", "\"The war ended colonial rule in Korea.\" Japanese rule ended in 1945."],
          "When North Korea invaded in 1950, the United States saw it as communist expansion that had to be contained. It led a United Nations force to defend the south, and China entered when that force neared its border, turning a Korean conflict into a Cold War war.",
          "The Cold War mattered."),
        Q("c", "Explain ONE other example of how the Cold War affected decolonization in the period 1945 to 1991.",
          "The response names a specific case other than Korea and explains the link.",
          ["In Vietnam, the United States backed France and then South Vietnam against communist nationalists.", "In the Congo, the superpowers backed rival leaders after independence in 1960.", "In Angola, the Soviet Union and Cuba backed one independence movement while the United States and South Africa backed its rivals."],
          ["\"Korea was divided.\" The prompt asks for another example.", "\"The Cold War caused India's independence.\" This needs explanation and overstates the link.", "\"Decolonization happened.\" This names no case."],
          "In Vietnam, Ho Chi Minh's communist-led movement fought France for independence. Because Ho was communist, the United States paid much of France's war costs and later backed South Vietnam, turning a war of independence into a Cold War conflict.",
          "Other places were affected."),
      ] },
  ],
};

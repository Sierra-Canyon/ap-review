// Topic 7.9 Quiz: Causation in Global Conflict
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why, difficulty) => ({ id: "t79-m0" + n, skill: "u7", type: "mcq", set, topic: "7.9", reasoning, difficulty, question, choices, why, answer: 0 });
const Q = (sub, prompt, earns, yes, no, example, notExample) => ({ id: "t79-q1" + sub, skill: "u7", type: "fr", set: "t79-s3", part: "SAQ 1", sub, topic: "7.9", lead: SAQ, prompt, earns, yes, no, example, notExample });

export const sets = {
  "t79-s1": {
    id: "t79-s1", name: "Truman announces the atomic bomb, 1945", intro: ONE,
    sources: [{ title: "Source", blocks: [
      { p: "SIXTEEN HOURS AGO an American airplane dropped one bomb on Hiroshima, an important Japanese Army base. That bomb had more power than 20,000 tons of T.N.T. ..." },
      { p: "The Japanese began the war from the air at Pearl Harbor. They have been repaid many fold. And the end is not yet. ..." },
      { p: "It is an atomic bomb. It is a harnessing of the basic power of the universe. ..." },
      { p: "By 1942, however, we knew that the Germans were working feverishly to find a way to add atomic energy to the other engines of war. ..." },
      { p: "We have spent two billion dollars on the greatest scientific gamble in history—and won. ... What has been done is the greatest achievement of organized science in history." },
      { cite: "Statement by President Harry S. Truman announcing the use of the atomic bomb on Hiroshima, August 6, 1945, as published by The American Presidency Project, University of California, Santa Barbara. Hiroshima was a city of about 300,000 people with an army headquarters; the bomb killed about 70,000 to 80,000 people at once and many more by the end of the year. A second bomb destroyed Nagasaki on August 9, and Japan announced its surrender on August 15.", url: "https://www.presidency.ucsb.edu/documents/statement-the-president-announcing-the-use-the-bomb-hiroshima", kind: "primary" },
    ] }],
  },
  "t79-s2": {
    id: "t79-s2", name: "Two roads to war", intro: "Use the passage below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that the Second World War began as two separate wars that merged in 1941. In Asia, Japan's leaders, seeking raw materials and markets after the Depression, seized Manchuria in 1931 and invaded China in 1937. When the United States cut off oil exports to Japan in 1941, Japan's leaders decided to seize the oil of the Dutch East Indies and to strike the U.S. fleet at Pearl Harbor first. In Europe, Hitler's drive to overturn the Treaty of Versailles and conquer living space in the east led to the invasion of Poland in 1939. The two wars joined in December 1941, when Germany declared war on the United States four days after Pearl Harbor. Some historians therefore date the start of the Second World War to 1937 rather than 1939." },
      PRACTICE,
    ] }],
  },
  "t79-s3": {
    id: "t79-s3", name: "Building a new order in 1945", intro: SAQ,
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that the victors of the Second World War tried to avoid the mistakes made after the First. Delegates from fifty nations met in San Francisco in 1945 and created the United Nations. Unlike the League of Nations, the new organization included the United States and the Soviet Union from the start, and its Security Council gave five great powers permanent seats and the power to veto decisions. At Bretton Woods in 1944, Allied nations set up the International Monetary Fund and the World Bank to stabilize currencies and fund rebuilding. Instead of demanding heavy reparations from Germany, the United States later sent aid to rebuild western Europe. Yet the wartime alliance soon broke apart, and the veto often left the Security Council unable to act during the Cold War." },
      PRACTICE,
    ] }],
  },
};

export default {
  forms: [
    { id: "t79", name: "Topic 7.9 Quiz: Causation in Global Conflict", group: "Unit 7: Global Conflict",
      items: [
        // ===== Set 1: Truman =====
        M(1, "t79-s1", "Sourcing and situation", "Truman's description of Hiroshima as \"an important Japanese Army base\" was most likely intended to",
          ["frame the bombing as a strike on a military target", "give an exact count of the people killed in the city", "show that the bomb had failed to destroy the base", "announce that Japan had already surrendered"],
          ["Correct. Hiroshima held an army headquarters, but it was a city of about 300,000 people, most of them civilians.",
            "The statement gives no casualty count.",
            "He describes the bomb's great power.",
            "Japan announced its surrender on August 15, nine days later."], "moderate"),
        M(2, "t79-s1", "Causation", "According to Truman, which earlier development led the United States to build the atomic bomb?",
          ["Fear of a German atomic bomb", "Japan's attack on Pearl Harbor", "The Soviet Union's first atomic test", "The founding of the United Nations"],
          ["Correct. He says that by 1942 \"we knew that the Germans were working feverishly\" on atomic energy.",
            "Truman links Pearl Harbor to the bombing of Hiroshima, but he gives the German program as the reason for the race to build the bomb.",
            "The Soviet test came in 1949.",
            "The United Nations was founded later in 1945."], "difficult"),
        M(3, "t79-s1", "Claims and evidence in sources", "The phrase \"They have been repaid many fold\" best supports the claim that Truman",
          ["presented the bombing as payback for Pearl Harbor", "regretted the suffering the bombing had caused", "believed the war with Japan had already ended", "saw the bomb mainly as a warning to the Soviets"],
          ["Correct. He links the bombing to Japan's attack on Pearl Harbor in 1941.",
            "His tone is triumphant, not regretful.",
            "He says \"the end is not yet,\" so the war goes on.",
            "The phrase points to Japan and Pearl Harbor, not the Soviet Union."], "easy"),
        M(4, "t79-s1", "Continuity and change", "The use of atomic bombs in 1945 most directly contributed to which change in global politics?",
          ["A nuclear arms race between the two superpowers", "An end to all wars between states after 1945", "The decline of the United States as a world power", "A return to trench warfare in later conflicts"],
          ["Correct. The Soviet Union tested its own bomb in 1949, and fear of nuclear war shaped the Cold War.",
            "Many wars followed, in Korea, Vietnam, and elsewhere.",
            "The United States emerged as a superpower.",
            "Later wars did not return to the trench stalemate of 1914 to 1918."], "easy"),
        // ===== Set 2: Two roads to war =====
        M(5, "t79-s2", "Causation", "According to the passage, Japan's leaders decided to attack Pearl Harbor mainly because",
          ["a U.S. oil embargo pushed Japan toward the Indies", "the United States had invaded Japanese Manchuria", "Germany ordered Japan to attack the United States", "Japan wanted to end its war in China quickly"],
          ["Correct. They meant to keep the U.S. fleet from blocking their move to seize oil in the Dutch East Indies.",
            "The United States had not invaded Japanese territory.",
            "The passage says Japan's leaders made the decision; Germany did not order the attack.",
            "The passage links the attack to oil, not to a plan to end the war in China."], "easy"),
        M(6, "t79-s2", "Comparison", "The causes of war in Asia and in Europe described in the passage were similar in that both",
          ["grew from drives to conquer land and resources", "began with a direct attack on the United States", "grew out of the Bolshevik Revolution in Russia", "began with the invasion of Poland in 1939"],
          ["Correct. Japan sought raw materials and markets, and Hitler sought living space in the east.",
            "Only the war in Asia involved an attack on the United States, and only in 1941.",
            "The passage does not mention the Russian Revolution.",
            "The invasion of Poland began the war in Europe; the war in Asia began with Japan's invasions of China."], "moderate"),
        M(7, "t79-s2", "Developments and processes", "The argument that the war began in 1937 rather than 1939 is most likely based on the view that",
          ["the war in China was part of the world war", "Germany invaded Poland in 1937, not in 1939", "the war in Asia was unrelated to the war in Europe", "the Manchurian crisis marked the war's true start"],
          ["Correct. Dating the war from 1937 treats Japan's invasion of China as part of the Second World War rather than as a separate conflict.",
            "Germany invaded Poland in 1939.",
            "The argument links the two wars rather than separating them.",
            "Manchuria was seized in 1931, so this view would date the war to 1931, not 1937."], "difficult"),
        M(8, "t79-s2", "Causation", "Germany's declaration of war on the United States in 1941 most directly led to",
          ["the merging of the Asian and European wars", "the end of the German alliance with Japan", "a separate peace between Germany and Britain", "Japan's immediate attack on the Soviet Union"],
          ["Correct. The passage says the two wars joined in December 1941, when Germany declared war on the United States.",
            "Germany and Japan remained allies until Germany's defeat in 1945.",
            "Germany and Britain remained enemies until 1945.",
            "Japan kept its neutrality pact with the Soviet Union until August 1945."], "easy"),
        // ===== SAQ: A new order =====
        Q("a", "Identify ONE way, described in the passage, that the United Nations differed from the League of Nations.",
          "The response names one difference from the passage.",
          ["The United Nations included the United States and the Soviet Union from the start.", "Its Security Council gave five great powers permanent seats.", "The five permanent members had the power to veto decisions."],
          ["\"The UN was founded in 1919.\" It was founded in 1945.", "\"The UN had no members.\" This is false.", "\"The UN created the World Bank.\" The passage says it was set up at Bretton Woods."],
          "The passage says that, unlike the League, the United Nations included the United States and the Soviet Union from the start.",
          "They were different."),
        Q("b", "Explain ONE way the settlement after the Second World War tried to avoid the mistakes made after the First World War.",
          "The response explains a specific change and the earlier mistake it addressed.",
          ["Instead of heavy reparations, which had caused resentment in Germany, the United States sent aid to rebuild Europe.", "The UN included the great powers, unlike the League, which the United States never joined.", "The IMF and World Bank were meant to prevent the economic collapse and trade wars of the 1930s."],
          ["\"They made peace.\" This explains nothing specific.", "\"They demanded more reparations from Germany.\" This is the opposite.", "\"They kept the League of Nations unchanged.\" The League was replaced."],
          "After the First World War, heavy reparations deepened German resentment and economic crisis. After 1945, the United States instead sent aid to rebuild western Europe, including West Germany, hoping prosperity would prevent extremism.",
          "They learned from the past."),
        Q("c", "Explain ONE way the outcome of the Second World War led to new conflicts after 1945.",
          "The response names and explains a specific link.",
          ["The defeat of Germany and Japan left the United States and Soviet Union as rival superpowers, leading to the Cold War.", "The division of Germany and Korea between Soviet and American zones led to rival states and, in Korea, a war in 1950.", "The war weakened European empires, encouraging independence movements and wars of decolonization."],
          ["\"The war ended.\" This explains no new conflict.", "\"The United Nations caused the Cold War.\" This needs explanation and is inaccurate.", "\"Germany won the war.\" This is false."],
          "At the end of the war, Soviet troops occupied northern Korea and American troops the south. Each side set up a friendly government, and in 1950 North Korea invaded the south, starting the Korean War.",
          "The war led to more wars."),
      ] },
  ],
};

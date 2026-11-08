// Topic 8.1 Quiz: Setting the Stage for the Cold War and Decolonization
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why) => ({ id: "t81-m0" + n, skill: "u8", type: "mcq", set, topic: "8.1", reasoning, question, choices, why, answer: 0 });
const Q = (sub, prompt, earns, yes, no, example, notExample) => ({ id: "t81-q1" + sub, skill: "u8", type: "fr", set: "t81-s3", part: "SAQ 1", sub, topic: "8.1", lead: SAQ, prompt, earns, yes, no, example, notExample });

export const sets = {
  "t81-s1": {
    id: "t81-s1", name: "Churchill's \"iron curtain\" speech, 1946", intro: ONE,
    sources: [{ title: "Source", blocks: [
      { p: "From Stettin in the Baltic to Trieste in the Adriatic, an iron curtain has descended across the Continent. Behind that line lie all the capitals of the ancient states of Central and Eastern Europe. Warsaw, Berlin, Prague, Vienna, Budapest, Belgrade, Bucharest and Sofia, all these famous cities and the populations around them lie in what I must call the Soviet sphere, and all are subject in one form or another, not only to Soviet influence but to a very high and, in many cases, increasing measure of control from Moscow. ..." },
      { p: "I do not believe that Soviet Russia desires war. What they desire is the fruits of war and the indefinite expansion of their power and doctrines. ..." },
      { p: "From what I have seen of our Russian friends and Allies during the war, I am convinced that there is nothing they admire so much as strength, and there is nothing for which they have less respect than for weakness, especially military weakness. ..." },
      { p: "Neither the sure prevention of war, nor the continuous rise of world organization will be gained without what I have called the fraternal association of the English-speaking peoples. This means a special relationship between the British Commonwealth and Empire and the United States. ..." },
      { cite: "Winston Churchill, \"The Sinews of Peace,\" address at Westminster College, Fulton, Missouri, March 5, 1946, as published by America's National Churchill Museum. Churchill had been voted out as Britain's prime minister in July 1945 and spoke as leader of the opposition, with President Harry Truman on the stage beside him.", url: "https://www.nationalchurchillmuseum.org/sinews-of-peace-iron-curtain-speech.html", kind: "primary" },
    ] }],
  },
  "t81-s2": {
    id: "t81-s2", name: "Britain after the war", intro: "Use the passage below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that the Second World War left Britain victorious but exhausted. The country had sold many of its foreign investments and borrowed heavily, especially from the United States, to pay for the war. In 1946 it needed a large American loan to avoid financial crisis, and food rationing lasted until 1954, longer than during the war itself. The new Labour government, elected in 1945, nationalized coal, railways, and the Bank of England and built the National Health Service. Unable to bear the costs of empire, Britain withdrew from India in 1947 and from Palestine in 1948, and in February 1947 it told the United States that it could no longer afford to support the governments of Greece and Turkey. Many historians see these years as the moment when leadership of the Western powers passed from Britain to the United States." },
      PRACTICE,
    ] }],
  },
  "t81-s3": {
    id: "t81-s3", name: "The occupation of Japan", intro: SAQ,
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that the American occupation of Japan from 1945 to 1952 remade the country and tied it to the United States. Under General Douglas MacArthur, occupation officials disbanded Japan's army and navy, purged many wartime leaders, and tried others for war crimes. A new constitution, drafted largely by Americans and in force from 1947, made the emperor a symbol without political power, gave women the vote, and renounced war. Land reform broke up large estates and sold land to the farmers who worked it, and new laws allowed labor unions. After communists won China's civil war in 1949 and war broke out in Korea in 1950, American policy shifted toward rebuilding Japan's economy as an ally. When the occupation ended in 1952, a security treaty allowed American forces to stay in Japan." },
      PRACTICE,
    ] }],
  },
};

export default {
  forms: [
    { id: "t81", name: "Topic 8.1 Quiz: Setting the Stage for the Cold War and Decolonization", group: "Unit 8: Cold War and Decolonization",
      items: [
        // ===== Set 1: Churchill =====
        M(1, "t81-s1", "Sourcing and situation", "Churchill's main purpose in the speech was most likely to",
          ["persuade Americans to stand firmly with Britain against Soviet expansion", "announce a British alliance with the Soviet Union", "call for the end of the United Nations", "praise Soviet policy in eastern Europe"],
          ["Correct. He describes Soviet control behind the \"iron curtain\" and calls for a \"special relationship\" between Britain and the United States.",
            "He warns against Soviet expansion.",
            "He supports a stronger world organization.",
            "He criticizes Soviet control from Moscow."]),
        M(2, "t81-s1", "Contextualization", "The speech is best understood in the context of",
          ["the collapse of the wartime alliance as Soviet-backed governments took power in eastern Europe", "the outbreak of the Korean War", "the fall of the Berlin Wall", "the signing of the Treaty of Versailles"],
          ["Correct. In 1945 and 1946, Soviet forces and local communists were taking control of the states Churchill names.",
            "That came in 1950.",
            "That came in 1989.",
            "That came in 1919."]),
        M(3, "t81-s1", "Claims and evidence in sources", "Which claim from the speech would later shape Western Cold War policy most directly?",
          ["That the Soviets respect strength and have \"less respect than for weakness, especially military weakness\"", "That Stettin is on the Baltic", "That Athens is free to hold elections", "That Soviet Russia does not desire war"],
          ["Correct. The idea that only firmness would deter the Soviets shaped containment and Western military alliances.",
            "This is a geographic detail.",
            "This is a detail about Greece.",
            "He uses this to argue the Soviets want expansion without war, not to shape policy."]),
        M(4, "t81-s1", "Causation", "The \"special relationship\" Churchill called for was most directly realized in which development?",
          ["The North Atlantic Treaty Organization, founded in 1949", "The Warsaw Pact", "The Non-Aligned Movement", "The League of Nations"],
          ["Correct. NATO bound the United States, Britain, and other Western states in a military alliance.",
            "The Warsaw Pact was the Soviet alliance.",
            "The Non-Aligned Movement rejected both blocs.",
            "The League was founded in 1920."]),
        // ===== Set 2: Britain after the war =====
        M(5, "t81-s2", "Causation", "According to the passage, Britain withdrew from India and Palestine mainly because",
          ["the war had left it unable to bear the costs of empire", "the United States conquered them", "the Soviet Union demanded it", "Britain had won new colonies elsewhere"],
          ["Correct. Debt and economic strain made empire too costly.",
            "The United States did not conquer them.",
            "The passage does not say so.",
            "Britain was giving up territory."]),
        M(6, "t81-s2", "Continuity and change", "The passage best supports which claim about the balance of power after 1945?",
          ["Leadership of the Western powers passed from Britain to the United States", "Britain became the world's strongest power", "European empires grew stronger", "The United States withdrew from world affairs"],
          ["Correct. Britain needed American loans and handed over support for Greece and Turkey.",
            "Britain was exhausted.",
            "Britain withdrew from colonies.",
            "The United States took on new commitments."]),
        M(7, "t81-s2", "Causation", "Britain's message that it could no longer support Greece and Turkey most directly led to",
          ["the Truman Doctrine, in which the United States pledged aid to resist communism", "the Berlin Wall", "the Korean War", "the Cuban Revolution"],
          ["Correct. In March 1947 Truman asked Congress for aid to Greece and Turkey.",
            "That came in 1961.",
            "That came in 1950 and was not a response to this message.",
            "That came in 1959."]),
        M(8, "t81-s2", "Developments and processes", "The Labour government's nationalization of coal and railways best illustrates which postwar trend in western Europe?",
          ["The growth of welfare states and government roles in the economy", "The end of all government spending", "The adoption of Soviet-style collective farms", "A return to the laissez-faire policies of the 1800s"],
          ["Correct. Many western European states expanded public ownership and social programs.",
            "Spending grew.",
            "Britain did not collectivize.",
            "The trend moved away from laissez-faire."]),
        // ===== SAQ: Japan =====
        Q("a", "Identify ONE reform made during the occupation of Japan, as described in the passage.",
          "The response names one reform from the passage.",
          ["The new constitution made the emperor a symbol without political power.", "Women gained the vote.", "Land reform broke up large estates and sold land to the farmers who worked it."],
          ["\"The security treaty.\" This came at the end of the occupation and was not a domestic reform.", "\"Japan built a large army.\" The army was disbanded.", "\"China's civil war.\" This happened in China."],
          "The passage says land reform broke up large estates and sold land to the farmers who worked it.",
          "Japan was reformed."),
        Q("b", "Explain ONE reason American policy toward Japan shifted after 1949.",
          "The response explains a specific reason linked to the Cold War.",
          ["The communist victory in China in 1949 made the United States want a strong Japan as an ally in Asia.", "The Korean War, which began in 1950, made Japan a vital base for American forces.", "American leaders feared that poverty in Japan would help communists, so they rebuilt its economy."],
          ["\"Japan was rebuilt.\" This states the change but not the reason.", "\"Japan joined the Soviet bloc.\" This is false.", "\"The war in Europe ended in 1949.\" This is false."],
          "After Mao's communists won China's civil war in 1949, the United States lost its expected ally in Asia. American leaders turned to Japan instead and shifted from punishing it to rebuilding its economy.",
          "Things changed in Asia."),
        Q("c", "Explain ONE way the end of the Second World War set the stage for decolonization.",
          "The response names and explains a specific link.",
          ["The war left European powers such as Britain and France economically exhausted and less able to hold their colonies.", "Japan's wartime conquest of European colonies in Asia showed that European rule could be broken.", "Colonial soldiers who fought for the Allies returned home demanding the freedom they had fought for, as in India and Africa."],
          ["\"The war ended.\" This explains no link.", "\"The United States wanted more colonies.\" This is inaccurate.", "\"Decolonization happened in 1919.\" This is false."],
          "Japan's conquest of British Malaya, Dutch Indonesia, and French Indochina between 1941 and 1942 showed that European rule could be overthrown. When the Europeans returned in 1945, nationalists such as Sukarno in Indonesia refused to accept their return.",
          "The war led to independence."),
      ] },
  ],
};

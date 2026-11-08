// Topic 8.1 Quiz: Setting the Stage for the Cold War and Decolonization
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why, difficulty) => ({ id: "t81-m0" + n, skill: "u8", type: "mcq", set, topic: "8.1", reasoning, difficulty, question, choices, why, answer: 0 });
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
          ["persuade Americans to stand with Britain against Soviet expansion", "warn that a Soviet invasion of western Europe was about to begin", "offer the Soviets aid in exchange for leaving eastern Europe", "argue that Britain could hold back the Soviets without help"],
          ["Correct. He describes growing control \"from Moscow\" and calls for a \"special relationship\" between Britain and the United States.",
            "He says he does not believe \"Soviet Russia desires war\"; his worry is expansion short of war.",
            "He proposes no bargain with the Soviets; he says they respect only strength.",
            "He calls for an association with the United States, not British action alone."], "moderate"),
        M(2, "t81-s1", "Contextualization", "The speech is best understood in the context of",
          ["Soviet-backed regimes forming in eastern Europe", "the outbreak of the Korean War in June 1950", "the building of the Berlin Wall in August 1961", "the communist victory in China's civil war in 1949"],
          ["Correct. In 1945 and 1946, communists backed by Soviet troops were taking control in states Churchill names, such as Poland and Romania.",
            "The Korean War began four years after the speech.",
            "The wall went up fifteen years after the speech.",
            "Mao's victory came three years after the speech."], "easy"),
        M(3, "t81-s1", "Claims and evidence in sources", "Which idea in the speech most directly anticipates the Western policy of deterring the Soviets with armed alliances?",
          ["The Soviets admire strength and scorn military weakness.", "Soviet leaders do not want another war with the West.", "Moscow's control over eastern European capitals is growing.", "World organization can keep the peace without alliances."],
          ["Correct. If the Soviets respect only strength, the West must stay armed and united, the logic behind containment and NATO.",
            "He does say this, but he uses it to argue the Soviets seek expansion short of war; by itself it does not call for deterrence.",
            "This describes the situation in 1946, not a way of meeting it.",
            "He says the opposite: peace needs the \"fraternal association\" of Britain and the United States."], "difficult"),
        M(4, "t81-s1", "Causation", "The \"special relationship\" Churchill called for was most directly realized in which development?",
          ["NATO, founded in 1949", "The Warsaw Pact, founded in 1955", "The Non-Aligned Movement, founded in 1961", "The modern Commonwealth, formed in 1949"],
          ["Correct. NATO bound the United States, Britain, and other Western states in a military alliance.",
            "The Warsaw Pact was the Soviet bloc's alliance.",
            "The Non-Aligned Movement rejected both blocs.",
            "The Commonwealth linked Britain with its former colonies, not with the United States."], "easy"),
        // ===== Set 2: Britain after the war =====
        M(5, "t81-s2", "Causation", "According to the passage, Britain withdrew from India and Palestine mainly because",
          ["the war had left it unable to bear the costs of empire", "the United Nations ordered it to give up both territories", "the United States made its 1946 loan depend on withdrawal", "the Soviet Union threatened war over both territories"],
          ["Correct. The passage says Britain withdrew because it was \"unable to bear the costs of empire.\"",
            "The passage gives cost, not a UN order, as the reason.",
            "The passage mentions the loan but does not tie it to withdrawal.",
            "The passage does not mention any Soviet threat."], "moderate"),
        M(6, "t81-s2", "Continuity and change", "The passage best supports which claim about the balance of power after 1945?",
          ["The United States replaced Britain as the West's leading power.", "Britain kept its lead in the West by shedding costly colonies.", "The Soviet Union replaced Britain as the main power in Greece.", "Britain's new welfare state kept it out of Western alliances."],
          ["Correct. Britain needed American loans and handed its commitments in Greece and Turkey to the United States.",
            "The passage says leadership passed to the United States.",
            "Britain passed support for Greece and Turkey to the United States, not to the Soviets.",
            "The passage does not say this, and Britain helped found NATO in 1949."], "moderate"),
        M(7, "t81-s2", "Causation", "Britain's message that it could no longer support Greece and Turkey most directly led to",
          ["the Truman Doctrine, March 1947", "the Marshall Plan, April 1948", "the Berlin airlift, June 1948", "the founding of NATO, April 1949"],
          ["Correct. In March 1947 Truman asked Congress for aid to Greece and Turkey and pledged to support free peoples resisting communism.",
            "The Marshall Plan aided western Europe's recovery a year later; the request for Greece and Turkey came first, as the Truman Doctrine.",
            "The airlift answered the Soviet blockade of Berlin.",
            "NATO came two years later, and Greece and Turkey did not join it until 1952."], "difficult"),
        M(8, "t81-s2", "Developments and processes", "The Labour government's nationalization of coal and railways best illustrates which postwar trend in western Europe?",
          ["The growth of welfare states and public ownership", "The adoption of Soviet-style collective farming", "A return to the laissez-faire policies of the 1800s", "The spread of corporatist economies like Mussolini's"],
          ["Correct. Many western European states expanded public ownership and social programs after 1945.",
            "Britain nationalized industries but did not collectivize farms.",
            "Nationalization moved away from laissez-faire.",
            "Fascist corporatism ended with the war; Labour was a democratic socialist party."], "easy"),
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

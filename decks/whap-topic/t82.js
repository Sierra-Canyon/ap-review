// Topic 8.2 Quiz: The Cold War
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why) => ({ id: "t82-m0" + n, skill: "u8", type: "mcq", set, topic: "8.2", reasoning, question, choices, why, answer: 0 });
const Q = (sub, prompt, earns, yes, no, example, notExample) => ({ id: "t82-q1" + sub, skill: "u8", type: "fr", set: "t82-s3", part: "SAQ 1", sub, topic: "8.2", lead: SAQ, prompt, earns, yes, no, example, notExample });

export const sets = {
  "t82-s1": {
    id: "t82-s1", name: "Marshall at Harvard, 1947", intro: ONE,
    sources: [{ title: "Source", blocks: [
      { p: "... The truth of the matter is that Europe's requirements for the next three or four years of foreign food and other essential products–principally from America–are so much greater than her present ability to pay that she must have substantial additional help, or face economic, social and political deterioration of a very grave character. ..." },
      { p: "Our policy is directed not against any country or doctrine but against hunger, poverty, desperation and chaos. Its purpose should be the revival of a working economy in the world so as to permit the emergence of political and social conditions in which free institutions can exist. ..." },
      { p: "Any government that is willing to assist in the task of recovery will find full cooperation, I am sure, on the part of the United States Government. Any government which maneuvers to block the recovery of other countries cannot expect help from us. Furthermore, governments, political parties or groups which seek to perpetuate human misery in order to profit therefrom politically or otherwise will encounter the opposition of the United States. ..." },
      { p: "It would be neither fitting nor efficacious for this Government to undertake to draw up unilaterally a program designed to place Europe on its feet economically. This is the business of the Europeans. The initiative, I think, must come from Europe. ..." },
      { cite: "George C. Marshall, U.S. Secretary of State, remarks at Harvard University, June 5, 1947 (State Department handout version), as published by the George C. Marshall Foundation. The European Recovery Program that followed, known as the Marshall Plan, sent about 13 billion dollars to western Europe from 1948 to 1952. The Soviet Union refused to take part and kept the states of eastern Europe out.", url: "https://www.marshallfoundation.org/the-marshall-plan/speech/", kind: "primary" },
    ] }],
  },
  "t82-s2": {
    id: "t82-s2", name: "The Berlin airlift", intro: "Use the passage below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that the Berlin crisis of 1948 and 1949 turned the division of Germany into a lasting feature of the Cold War. After the war, Germany and its capital, Berlin, were divided into American, British, French, and Soviet zones, with Berlin lying deep inside the Soviet zone. In June 1948, when the Western powers introduced a new currency in their zones, the Soviet Union cut off all road, rail, and canal links to West Berlin. Rather than abandon the city or force their way in, the United States and Britain supplied its two million people by air, flying in food and coal for nearly a year. In May 1949 the Soviets lifted the blockade. That same year, the Western zones became the Federal Republic of Germany, the Soviet zone became the German Democratic Republic, and the Western powers founded NATO." },
      PRACTICE,
    ] }],
  },
  "t82-s3": {
    id: "t82-s3", name: "The Cuban Missile Crisis", intro: SAQ,
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that the Cuban Missile Crisis of October 1962 was the closest the Cold War came to nuclear war. After a failed American-backed invasion at the Bay of Pigs in 1961, Fidel Castro's government drew closer to the Soviet Union, and Soviet leader Nikita Khrushchev secretly sent nuclear missiles to Cuba. When American spy planes found the missile sites, President John F. Kennedy ordered a naval \"quarantine\" of Cuba. For thirteen days the two superpowers faced each other. The crisis ended when Khrushchev agreed to remove the missiles in exchange for an American pledge not to invade Cuba and a secret promise to remove American missiles from Turkey. Afterward, the two powers set up a direct telephone \"hotline\" and in 1963 signed a treaty limiting nuclear tests." },
      PRACTICE,
    ] }],
  },
};

export default {
  forms: [
    { id: "t82", name: "Topic 8.2 Quiz: The Cold War", group: "Unit 8: Cold War and Decolonization",
      items: [
        // ===== Set 1: Marshall =====
        M(1, "t82-s1", "Claims and evidence in sources", "Marshall argues that American aid to Europe was necessary mainly because",
          ["economic collapse would lead to social and political deterioration", "Europe had defeated the United States in trade", "Europe wanted to join the Soviet Union", "American farmers needed new land"],
          ["Correct. He warns of \"economic, social and political deterioration of a very grave character.\"",
            "He describes Europe's inability to pay.",
            "He does not say this.",
            "Land is not mentioned."]),
        M(2, "t82-s1", "Sourcing and situation", "Marshall's statement that the policy was directed \"not against any country or doctrine\" was most likely intended to",
          ["present the aid as humanitarian and invite all of Europe to take part, even though it served Cold War goals", "announce that the United States would aid the Soviet Union's army", "declare war on communism", "end American involvement in Europe"],
          ["Correct. The offer was open to all, but it aimed to prevent the hardship that helped communist parties.",
            "Military aid is not mentioned.",
            "He avoids naming an enemy.",
            "He proposes greater involvement."]),
        M(3, "t82-s1", "Causation", "The Soviet response to the plan most directly contributed to",
          ["the deepening division of Europe into Western and Soviet blocs", "the reunification of Germany in 1948", "the Soviet Union's joining of NATO", "the end of the Cold War"],
          ["Correct. The Soviets refused aid and kept eastern Europe out, which hardened the line between the blocs.",
            "Germany was divided in 1949.",
            "The Soviet Union never joined NATO.",
            "The Cold War lasted until 1991."]),
        M(4, "t82-s1", "Comparison", "The Marshall Plan differed from the treatment of Germany after the First World War mainly in that",
          ["the victors sent aid to rebuild Europe, including defeated West Germany, instead of demanding heavy reparations", "it demanded larger reparations from Germany", "it was organized by the League of Nations", "it excluded all of western Europe"],
          ["Correct. After 1919 the victors demanded reparations; after 1947 the United States funded recovery.",
            "It provided aid.",
            "It was an American program.",
            "Western Europe received the aid."]),
        // ===== Set 2: Berlin =====
        M(5, "t82-s2", "Causation", "According to the passage, the Soviet Union blockaded West Berlin after",
          ["the Western powers introduced a new currency in their zones", "the Western powers invaded the Soviet zone", "Germany was reunified", "NATO attacked the Soviet Union"],
          ["Correct. The currency reform in June 1948 prompted the blockade.",
            "No invasion occurred.",
            "Germany was divided.",
            "NATO was founded after the blockade began and did not attack."]),
        M(6, "t82-s2", "Developments and processes", "The Western powers' decision to supply Berlin by air best illustrates which Cold War pattern?",
          ["Confronting the other side without direct military combat between the superpowers", "Using nuclear weapons to settle disputes", "Giving in to every Soviet demand", "Fighting a full-scale war in Europe"],
          ["Correct. The airlift resisted the blockade without firing a shot.",
            "No weapons were used.",
            "They refused to abandon the city.",
            "No war broke out."]),
        M(7, "t82-s2", "Continuity and change", "The division of Germany described in the passage lasted until",
          ["1990, when East and West Germany were reunified after the fall of the Berlin Wall", "1949", "1961", "1945"],
          ["Correct. Germany was reunified in October 1990.",
            "The two states were founded in 1949.",
            "The Berlin Wall was built in 1961.",
            "The division began in 1945."]),
        M(8, "t82-s2", "Comparison", "The Berlin crisis is most similar to which other Cold War event?",
          ["The Cuban Missile Crisis, in which the superpowers faced off without direct war", "The Iranian Revolution", "The independence of Ghana", "The Bandung Conference"],
          ["Correct. Both were tense standoffs that ended without fighting between the superpowers.",
            "That was a revolution within Iran.",
            "That was decolonization.",
            "That was a meeting of nonaligned states."]),
        // ===== SAQ: Cuba =====
        Q("a", "Identify ONE cause of the Cuban Missile Crisis described in the passage.",
          "The response names one cause from the passage.",
          ["The failed Bay of Pigs invasion pushed Castro closer to the Soviet Union.", "Khrushchev secretly sent nuclear missiles to Cuba.", "Cuba's alliance with the Soviet Union brought Soviet weapons close to the United States."],
          ["\"The hotline.\" This was a result.", "\"The Test Ban Treaty.\" This was a result.", "\"The quarantine.\" This was a response, not a cause."],
          "The passage says that after the failed American-backed invasion at the Bay of Pigs, Castro drew closer to the Soviet Union, which then sent missiles to Cuba.",
          "There were tensions."),
        Q("b", "Explain ONE way the crisis changed relations between the United States and the Soviet Union.",
          "The response explains a specific change.",
          ["The two powers set up a direct hotline so leaders could communicate quickly in a crisis.", "They signed the Limited Test Ban Treaty in 1963, a first step toward arms control.", "Both sides became more cautious about direct confrontation and more often competed through proxies instead."],
          ["\"Relations changed.\" This is too vague.", "\"They went to war in 1963.\" This is false.", "\"The Soviet Union joined NATO.\" This is false."],
          "The crisis showed how easily misunderstanding could lead to nuclear war. In 1963 the superpowers set up a direct hotline between Washington and Moscow so their leaders could talk quickly during future crises.",
          "They talked more."),
        Q("c", "Explain ONE way the Cold War affected a country in Latin America OTHER than Cuba in the period 1945 to 1991.",
          "The response names a specific country and explains a Cold War effect.",
          ["In Guatemala in 1954, the CIA backed a coup against an elected government that had taken land from an American company.", "In Chile in 1973, the United States supported opponents of the socialist president Salvador Allende, who was overthrown by the military.", "In Nicaragua in the 1980s, the United States funded the Contras against the Sandinista government."],
          ["\"Latin America was affected.\" This names no country.", "\"Cuba had a revolution.\" The prompt asks for another country.", "\"Brazil joined the Warsaw Pact.\" This is false."],
          "In Nicaragua, the Sandinistas, a leftist movement, took power in 1979. Fearing Soviet and Cuban influence, the United States funded and armed the Contras, rebels who fought the government through the 1980s.",
          "The Cold War affected many places."),
      ] },
  ],
};

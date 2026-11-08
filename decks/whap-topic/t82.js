// Topic 8.2 Quiz: The Cold War
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
import { maps } from "../whap/maps.js";
const MAP = "Map drawn for this review from Natural Earth land outlines (public domain). Places, dates, and routes checked against ";
const map = (id, caption, refs) => [{ svg: maps[id], caption }, { cite: MAP + refs + ".", kind: "map" }];
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
    id: "t82-s2", name: "The Berlin airlift", intro: "Use the map below to answer the questions that follow.", label: "Map",
    sources: [{ title: "Map", blocks: map("u8-berlin-airlift", "The Berlin airlift, June 1948 to September 1949: the three air corridors from the western zones of Germany to Berlin (corridors and zone border approximate)", "Roger G. Miller, To Save a City: The Berlin Airlift, 1948 to 1949 (U.S. Air Force, 2000), the Office of the Historian, U.S. Department of State, and Encyclopaedia Britannica, \"Berlin blockade and airlift\"") }],
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
        // ===== Set 2: Berlin airlift map =====
        M(5, "t82-s2", "Developments and processes", "Based on the map, which of the following best explains why the Soviet Union was able to cut West Berlin off by land in June 1948?",
          ["Berlin lay far inside the Soviet zone, so every road and rail line from the western zones had to cross Soviet-held territory.", "Berlin lay on the border between the Soviet zone and the American zone.", "Berlin was a port on the Baltic Sea that the Soviet navy could close.", "The western zones had no cities large enough to send supplies to Berlin."],
          ["Correct. The map places Berlin well east of the dashed line, so land traffic from the west had to pass through the Soviet zone, as at the Helmstedt crossing the Soviets closed.",
            "The map shows Berlin far from the edge of the Soviet zone, not on a border with the American zone.",
            "The map shows Berlin inland, well south of the Baltic coast, and the blockade closed roads, railways, and canals, not a seaport.",
            "The map shows Hamburg and Frankfurt in the western zones sending supplies along the corridors."]),
        M(6, "t82-s2", "Causation", "The routes on the map were used for the airlift mainly because",
          ["the three air corridors had been agreed to by all four occupying powers, so flying supplies in did not require forcing a way through the Soviet zone on the ground", "Soviet troops had withdrawn from the land between the western zones and Berlin", "aircraft could carry more cargo at lower cost than trains and barges", "the United Nations ordered the Soviet Union to open the corridors"],
          ["Correct. The corridors were agreed in 1945, so the United States and Britain could supply the city without sending armed convoys across the Soviet zone, which might have started a war.",
            "The map labels the land between the western zones and Berlin as the Soviet zone, and Soviet forces stayed there throughout the blockade.",
            "Flying supplies in cost far more than shipping them by land; the airlift was chosen because the land routes were closed.",
            "The corridors came from agreements among the occupying powers, not from a United Nations order."]),
        M(7, "t82-s2", "Contextualization", "The division of Germany into the zones shown on the map was a result of",
          ["agreements among the Allied powers to occupy Germany jointly after its defeat in 1945", "the Treaty of Versailles that ended the First World War in 1919", "the Warsaw Pact, which the Soviet Union formed in 1955", "a vote by the German people to divide their country"],
          ["Correct. The United States, Britain, the Soviet Union, and France each occupied a zone of Germany, and a sector of Berlin, after Germany surrendered in 1945.",
            "The Treaty of Versailles took territory from Germany but did not divide it into occupation zones.",
            "The Warsaw Pact came seven years after the airlift shown on the map.",
            "The occupying powers, not the German people, decided how Germany would be governed after 1945."]),
        M(8, "t82-s2", "Continuity and change", "Which of the following best describes how the dashed line on the map changed in the decades after the airlift?",
          ["It became the border between West Germany and East Germany, founded in 1949, and divided the country until reunification in 1990.", "It disappeared in 1949, when the Soviet Union ended the blockade and withdrew from Germany.", "It became the border between Germany and Poland after the Second World War.", "It was moved east to the Oder River when the Western powers took over the Soviet zone in 1961."],
          ["Correct. The western zones became the Federal Republic of Germany and the Soviet zone the German Democratic Republic in 1949, and the line between them lasted until 1990.",
            "The blockade ended in May 1949, but Soviet forces stayed in East Germany for the rest of the Cold War.",
            "The map shows Poland farther east; the dashed line runs through the middle of Germany.",
            "The Western powers never took over the Soviet zone; in 1961 East Germany built the Berlin Wall, which hardened the division."]),
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

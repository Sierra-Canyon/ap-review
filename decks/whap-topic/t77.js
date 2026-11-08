// Topic 7.7 Quiz: Conducting World War II
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
import { maps } from "../whap/maps.js";
const MAP = "Map drawn for this review from Natural Earth land outlines (public domain). Places, dates, and routes checked against ";
const map = (id, caption, refs) => [{ svg: maps[id], caption }, { cite: MAP + refs + ".", kind: "map" }];
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why) => ({ id: "t77-m0" + n, skill: "u7", type: "mcq", set, topic: "7.7", reasoning, question, choices, why, answer: 0 });
const Q = (sub, prompt, earns, yes, no, example, notExample) => ({ id: "t77-q1" + sub, skill: "u7", type: "fr", set: "t77-s3", part: "SAQ 1", sub, topic: "7.7", lead: SAQ, prompt, earns, yes, no, example, notExample });

export const sets = {
  "t77-s1": {
    id: "t77-s1", name: "Roosevelt's \"arsenal of democracy\" speech, 1940", intro: ONE,
    sources: [{ title: "Source", blocks: [
      { p: "This is not a fireside chat on war. It is a talk on national security. ..." },
      { p: "Never before since Jamestown and Plymouth Rock has our American civilization been in such danger as now. For, on September 27, 1940, this year, by an agreement signed in Berlin, three powerful nations, two in Europe and one in Asia, joined themselves together in the threat that if the United States of America interfered with or blocked the expansion program of these three nations--a program aimed at world control—they would unite in ultimate action against the United States. ..." },
      { p: "We have furnished the British great material support and we will furnish far more in the future. ..." },
      { p: "So, I appeal to the owners of plants—to the managers—to the workers—to our own Government employees—to put every ounce of effort into producing these munitions swiftly and without stint. ..." },
      { p: "We must be the great arsenal of democracy. For us this is an emergency as serious as war itself. ..." },
      { cite: "Franklin D. Roosevelt, fireside chat broadcast by radio, December 29, 1940, as published by The American Presidency Project, University of California, Santa Barbara. The agreement of September 27, 1940, was the Tripartite Pact among Germany, Italy, and Japan. The United States was not yet at war; France had fallen in June 1940, and Britain was being bombed.", url: "https://www.presidency.ucsb.edu/documents/fireside-chat-9", kind: "primary" },
    ] }],
  },
  "t77-s2": {
    id: "t77-s2", name: "The war in Asia and the Pacific", intro: "Use the map below to answer the questions that follow.", label: "Map",
    sources: [{ title: "Map", blocks: map("u7-pacific", "Battles of the war in Asia and the Pacific, 1941 to 1945, with the year of each", "Encyclopaedia Britannica, \"Pacific War\", \"Battle of Midway\", and \"World War II\", and the Royal Australian Navy's Sea Power Centre, \"The Battles of the Coral Sea and Midway\"") }],
  },
  "t77-s3": {
    id: "t77-s3", name: "Japanese American incarceration", intro: SAQ,
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that the incarceration of Japanese Americans showed how wartime fear could override civil rights. After Japan attacked Pearl Harbor in December 1941, President Roosevelt signed Executive Order 9066 in February 1942. Under it, the army removed about 120,000 people of Japanese ancestry, most of them U.S. citizens, from the West Coast and held them in camps in remote areas. No Japanese American was ever convicted of spying for Japan. Many families lost homes, farms, and businesses. At the same time, thousands of young Japanese American men served in the U.S. Army, and the 442nd Regimental Combat Team became one of the most decorated units of the war. Canada removed people of Japanese ancestry from its Pacific coast as well. In 1988, the U.S. government formally apologized and paid compensation to survivors." },
      PRACTICE,
    ] }],
  },
};

export default {
  forms: [
    { id: "t77", name: "Topic 7.7 Quiz: Conducting World War II", group: "Unit 7: Global Conflict",
      items: [
        // ===== Set 1: Arsenal of democracy =====
        M(1, "t77-s1", "Sourcing and situation", "Roosevelt's purpose in the speech was most likely to",
          ["win public support for sending large amounts of war materials to Britain while the United States stayed out of the fighting", "announce a declaration of war on Germany", "call for American neutrality toward all sides", "propose a peace treaty with Japan"],
          ["Correct. He calls the talk one on \"national security\" and urges factories to produce munitions for Britain.",
            "He says this is \"not a fireside chat on war\"; the United States declared war a year later.",
            "He promises \"far more\" support for Britain.",
            "He describes Japan as part of a threat."]),
        M(2, "t77-s1", "Contextualization", "The speech is best understood in the context of",
          ["the fall of France and the German bombing of Britain in 1940", "the Japanese attack on Pearl Harbor", "the Allied landings in Normandy", "the end of the war in Europe"],
          ["Correct. Britain stood nearly alone against Germany at the end of 1940.",
            "That came in December 1941.",
            "That came in 1944.",
            "That came in 1945."]),
        M(3, "t77-s1", "Causation", "The policy Roosevelt described led most directly to which development?",
          ["The Lend-Lease Act of 1941, which supplied weapons to Britain and later the Soviet Union", "The Tripartite Pact", "The Munich Agreement", "The end of American industry"],
          ["Correct. Congress passed Lend-Lease in March 1941.",
            "That is the threat he describes, not a result of his policy.",
            "Munich came in 1938.",
            "American industry expanded."]),
        M(4, "t77-s1", "Developments and processes", "Roosevelt's appeal to owners, managers, and workers best illustrates which feature of the Second World War?",
          ["Governments mobilized entire economies for war production", "Wars were fought only by professional armies", "Industry played little role in the war", "Workers were forbidden to work in factories"],
          ["Correct. Total war required the full industrial output of nations.",
            "Mass armies and civilians took part.",
            "Industrial output was decisive.",
            "Factories employed millions."]),
        // ===== Set 2: map of the war in the Pacific =====
        M(5, "t77-s2", "Continuity and change", "Which of the following best describes the pattern of battles shown on the map?",
          ["Battles of 1941 and 1942 were spread from Hawaii to Southeast Asia and the South Pacific, while those of 1944 and 1945 came closer and closer to Japan.", "The fighting moved steadily away from Japan between 1941 and 1945.", "Most of the battles took place on the Asian mainland.", "The war in the Pacific began with Allied attacks on the Japanese home islands."],
          ["Correct. Japan struck across a huge area in 1941 and 1942. After that, the United States and its allies captured one island group after another on the way to Japan, a strategy often called island hopping, and the battles of 1945 were fought within a few hundred miles of the home islands.",
            "This reverses the pattern. The battles of 1944 and 1945, at Leyte Gulf, Iwo Jima, and Okinawa, are much closer to Japan than those of 1942.",
            "Nearly every battle on the map was fought at sea or on an island. Japan's long war in China is not shown on this map.",
            "The earliest battle on the map is Japan's attack on Pearl Harbor in 1941. Allied forces reached the islands near Japan only in 1945."]),
        M(6, "t77-s2", "Causation", "Japan's attacks on Pearl Harbor and Singapore, shown on the map, are best explained by Japan's aim to",
          ["seize the oil and raw materials of Southeast Asia, such as those of the Dutch East Indies, while keeping the U.S. fleet from stopping it", "free Hawaii and Singapore from Western rule so that they could become independent states", "help Germany defeat the Soviet Union", "strike back for the American bombing of Japanese cities"],
          ["Correct. After the United States cut off oil exports to Japan in 1941, Japan planned to take the oil fields of the Dutch East Indies. The strike on the fleet at Pearl Harbor in December 1941 was meant to keep the United States from interfering, and the capture of Singapore in February 1942 removed Britain's main base in the region.",
            "Japan's propaganda spoke of freeing Asia from the West, but Japan ruled the lands it conquered as part of its own empire. Hawaii was not occupied.",
            "Japan signed a neutrality pact with the Soviet Union in April 1941 and did not fight it until August 1945. Pearl Harbor and Singapore are thousands of miles from the Soviet front.",
            "The large American bombing raids on Japan began in 1944 and 1945, years after the attacks of 1941 and 1942."]),
        M(7, "t77-s2", "Developments and processes", "Based on the map, the battles of the Coral Sea and Midway in 1942 are best described as",
          ["the limits of Japan's advance, after which the fighting moved toward Japan", "Japan's last battles before it surrendered", "battles fought along the coast of China", "the first attacks of the war in the Pacific"],
          ["Correct. At the Coral Sea in May 1942, Allied ships turned back a Japanese force sent to take Port Moresby in New Guinea, and at Midway in June 1942, American carrier planes sank four Japanese aircraft carriers. Japan never again advanced so far, and every later battle on the map is closer to Japan.",
            "The map shows battles in 1944 and 1945 after these two, and Japan surrendered in August 1945.",
            "Both battles were fought far out in the Pacific, Midway northwest of Hawaii and the Coral Sea off northeastern Australia.",
            "The map dates Pearl Harbor to 1941, before either of these battles."]),
        M(8, "t77-s2", "Causation", "The United States fought for Iwo Jima and Okinawa in 1945 mainly in order to",
          ["take islands close enough to Japan to serve as bases for bombing and for a planned invasion of the home islands", "win back the oil fields of the Dutch East Indies", "defend Hawaii from a Japanese invasion", "free Korea and Manchuria from Japanese rule"],
          ["Correct. Iwo Jima lies about halfway between the Mariana Islands, where American bombers were based, and Japan, and its airfields let fighter planes protect the bombers. Okinawa, about 350 miles from Kyushu, was to be the last stepping-stone for an invasion of Japan.",
            "The map places the Dutch East Indies far to the southwest of both islands. The United States bypassed them as it moved toward Japan.",
            "Japan's threat to Hawaii ended with its defeat at Midway in 1942, and both islands are near Japan, thousands of miles from Hawaii.",
            "Korea and Manchuria are on the Asian mainland. Soviet troops invaded Manchuria in August 1945, and American troops did not land there."]),
        // ===== SAQ: Japanese American incarceration =====
        Q("a", "Identify ONE effect of Executive Order 9066 on Japanese Americans described in the passage.",
          "The response names one effect from the passage.",
          ["About 120,000 people of Japanese ancestry were removed from the West Coast and held in camps.", "Many families lost homes, farms, and businesses.", "Most of those held were U.S. citizens who lost their freedom without trial."],
          ["\"Japanese Americans spied for Japan.\" The passage says none was convicted.", "\"The 442nd won medals.\" This is not an effect of the order.", "\"The government apologized in 1942.\" The apology came in 1988."],
          "The passage says the army removed about 120,000 people of Japanese ancestry, most of them citizens, and held them in remote camps.",
          "It hurt them."),
        Q("b", "Explain ONE reason the U.S. government incarcerated Japanese Americans during the Second World War.",
          "The response explains a specific reason.",
          ["After Pearl Harbor, officials feared, without evidence, that Japanese Americans might help a Japanese attack on the West Coast.", "Long-standing racial prejudice against Asians on the West Coast made it easier to treat Japanese Americans as enemies.", "Some farmers and businesses who competed with Japanese Americans pressed for their removal."],
          ["\"They were convicted of spying.\" None was convicted.", "\"The war.\" This is too vague.", "\"They asked to be moved.\" This is false."],
          "The attack on Pearl Harbor caused panic on the West Coast. Military leaders and politicians claimed that Japanese Americans might help an invasion, and decades of anti-Asian prejudice made many people accept the claim even though no evidence supported it.",
          "There was fear."),
        Q("c", "Explain ONE other way governments restricted or controlled civilians during the Second World War.",
          "The response names and explains a specific example from any country.",
          ["Governments rationed food, fuel, and clothing to direct resources to the military.", "Nazi Germany forced millions of people from occupied countries to work in German factories and farms.", "The Soviet Union deported whole peoples, such as the Chechens and Crimean Tatars, whom it accused of disloyalty."],
          ["\"Governments controlled people.\" This names no example.", "\"Executive Order 9066.\" The prompt asks for another way.", "\"Governments ended all rules during the war.\" This is false."],
          "Britain rationed food beginning in 1940, limiting each person's weekly share of bacon, butter, and sugar. Rationing let the government send shipping space and supplies to the war effort and share scarce food fairly.",
          "Governments had rules."),
      ] },
  ],
};

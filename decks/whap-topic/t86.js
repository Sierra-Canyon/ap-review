// Topic 8.6 Quiz: Newly Independent States
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
import { maps } from "../whap/maps.js";
const MAP = "Map drawn for this review from Natural Earth land outlines (public domain). Places, dates, and routes checked against ";
const map = (id, caption, refs) => [{ svg: maps[id], caption }, { cite: MAP + refs + ".", kind: "map" }];
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
    id: "t86-s2", name: "Nigeria's civil war", intro: "Use the map below to answer the questions that follow.", label: "Map",
    sources: [{ title: "Map", blocks: map("u8-biafra", "The Nigerian Civil War, 1967 to 1970: Biafra declared independence on May 30, 1967, and surrendered in January 1970 (relief route approximate)", "Encyclopaedia Britannica, \"Nigerian Civil War\" and \"Biafra,\" and Foreign Relations of the United States, 1969 to 1976, volume E-5, part 1, on the Uli relief flights") }],
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
        // ===== Set 2: Nigerian Civil War map =====
        M(5, "t86-s2", "Developments and processes", "Based on the dates on the map, which of the following best describes how the Nigerian government defeated Biafra?",
          ["It took Biafra's capital and its coastal oil centers first, cutting Biafra off from the sea, and took the last inland towns only in 1970.", "It won the war in a few weeks by capturing every Biafran city in the summer of 1967.", "It attacked from the sea at São Tomé and moved north toward Uli.", "It defended Lagos at Ore but never entered the mostly Igbo southeast."],
          ["Correct. The map shows Enugu taken in October 1967 and Port Harcourt in May 1968, while Owerri, inland, was taken in January 1970, near the end of the war.",
            "The map's dates run from 1967 to 1970, so the fighting lasted more than two years.",
            "São Tomé is an island far out in the Gulf of Guinea; the dashed line from it marks relief flights, not an attack.",
            "Ore is where the Biafran advance was stopped, but the map also shows federal forces taking Enugu, Port Harcourt, and Owerri in the southeast."]),
        M(6, "t86-s2", "Causation", "The places marked on the coast of the southeast help explain why the Nigerian government fought to keep Biafra. Which of the following best states that reason?",
          ["The oil refinery and export terminal at Port Harcourt and Bonny lay in the land Biafra claimed, and oil was a growing source of Nigeria's income.", "Biafra held Lagos, the federal capital, so the government had to retake it to survive.", "The north of Nigeria held the country's oil, and its people needed the southeast's ports to ship it.", "Britain had promised Biafra independence and Nigeria wanted to stop British plans."],
          ["Correct. The map places Nigeria's oil refinery and export terminal inside the region that seceded, so losing Biafra meant losing much of the country's oil wealth.",
            "The map shows Lagos in the southwest, far from Biafra, and it stayed in federal hands.",
            "The map marks oil sites in the southeast, not in the north.",
            "Britain backed Nigeria's unity and sold arms to the federal government."]),
        M(7, "t86-s2", "Causation", "The labels for the three largest ethnic groups on the map best reflect which long-term cause of the war?",
          ["British colonial rule joined regions with different majority peoples into one state, and politics after independence divided along those regional lines.", "The Cold War split Nigeria into a communist north and a capitalist south.", "The partition of British India spread religious violence to West Africa.", "The United Nations drew Nigeria's borders when the country became independent in 1960."],
          ["Correct. The map shows a mostly Hausa and Fulani north, a mostly Yoruba southwest, and a mostly Igbo southeast inside one country; after the killings of Igbo in the north in 1966, the mostly Igbo east declared itself Biafra.",
            "Both the Soviet Union and Britain supplied the federal government, so the war did not follow Cold War lines.",
            "The war grew from divisions inside Nigeria, not from events in South Asia.",
            "Nigeria's borders were drawn by Britain during colonial rule, not by the United Nations."]),
        M(8, "t86-s2", "Developments and processes", "The night relief flights shown on the map are best understood as evidence of which development?",
          ["Humanitarian groups working across borders to bring food to civilians starving under a wartime blockade", "A Soviet airlift of weapons to Biafra to spread communism in West Africa", "A United Nations peacekeeping force sent to separate the two armies", "Biafra's export of oil by air after it lost its seaports"],
          ["Correct. With its seaports lost, Biafra could be reached only by air, and church groups and the Red Cross flew food into Uli at night as starvation killed many civilians.",
            "The Soviet Union armed the federal government, not Biafra.",
            "No United Nations force was sent to Nigeria during the war.",
            "The flights carried food and medicine in, and the map shows the oil centers already in federal hands by 1968."]),
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

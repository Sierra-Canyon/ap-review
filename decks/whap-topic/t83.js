// Topic 8.3 Quiz: Effects of the Cold War
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why) => ({ id: "t83-m0" + n, skill: "u8", type: "mcq", set, topic: "8.3", reasoning, question, choices, why, answer: 0 });
const Q = (sub, prompt, earns, yes, no, example, notExample) => ({ id: "t83-q1" + sub, skill: "u8", type: "fr", set: "t83-s3", part: "SAQ 1", sub, topic: "8.3", lead: SAQ, prompt, earns, yes, no, example, notExample });

export const sets = {
  "t83-s1": {
    id: "t83-s1", name: "Eisenhower's farewell address, 1961", intro: ONE,
    sources: [{ title: "Source", blocks: [
      { p: "We face a hostile ideology--global in scope, atheistic in character, ruthless in purpose, and insidious in method. Unhappily the danger it poses promises to be of indefinite duration. ..." },
      { p: "Until the latest of our world conflicts, the United States had no armaments industry. American makers of plowshares could, with time and as required, make swords as well. But now we can no longer risk emergency improvisation of national defense; we have been compelled to create a permanent armaments industry of vast proportions. Added to this, three and a half million men and women are directly engaged in the defense establishment. We annually spend on military security more than the net income of all United States corporations." },
      { p: "This conjunction of an immense military establishment and a large arms industry is new in the American experience. ... In the councils of government, we must guard against the acquisition of unwarranted influence, whether sought or unsought, by the military-industrial complex. The potential for the disastrous rise of misplaced power exists and will persist. ..." },
      { p: "... Partly because of the huge costs involved, a government contract becomes virtually a substitute for intellectual curiosity. For every old blackboard there are now hundreds of new electronic computers." },
      { cite: "Dwight D. Eisenhower, Farewell Radio and Television Address to the American People, January 17, 1961, three days before he left office, as published by The American Presidency Project, University of California, Santa Barbara. Eisenhower had commanded the Allied armies in western Europe during the Second World War.", url: "https://www.presidency.ucsb.edu/documents/farewell-radio-and-television-address-the-american-people", kind: "primary" },
    ] }],
  },
  "t83-s2": {
    id: "t83-s2", name: "Angola's civil war", intro: "Use the passage below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that Angola shows how the Cold War turned struggles for independence into long proxy wars. Three rival movements fought Portuguese rule in Angola in the 1960s and early 1970s. When Portugal suddenly withdrew in 1975, after a revolution at home, the movements fought one another for control. The MPLA, which called itself Marxist, received Soviet weapons and tens of thousands of Cuban troops. Its rivals, UNITA and the FNLA, received aid from the United States and from apartheid South Africa, whose army invaded Angola several times. The MPLA held the capital, but the war continued for decades. Hundreds of thousands of Angolans died, millions were displaced, and land mines left the country one of the most heavily mined in the world. Fighting did not finally end until 2002." },
      PRACTICE,
    ] }],
  },
  "t83-s3": {
    id: "t83-s3", name: "The Non-Aligned Movement", intro: SAQ,
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that newly independent states tried to avoid being drawn into the Cold War. In 1961, leaders including Josip Broz Tito of Yugoslavia, Gamal Abdel Nasser of Egypt, Jawaharlal Nehru of India, Sukarno of Indonesia, and Kwame Nkrumah of Ghana met in Belgrade and founded the Non-Aligned Movement. Its members declared that they would not join either the American or the Soviet alliance, called for an end to colonialism, and urged the superpowers to disarm. In practice, many members accepted aid from both sides; Egypt, for example, built the Aswan High Dam with Soviet loans after the United States withdrew its offer. Some members later leaned toward one bloc, but the movement grew to include most of the states of Asia, Africa, and Latin America." },
      PRACTICE,
    ] }],
  },
};

export default {
  forms: [
    { id: "t83", name: "Topic 8.3 Quiz: Effects of the Cold War", group: "Unit 8: Cold War and Decolonization",
      items: [
        // ===== Set 1: Eisenhower =====
        M(1, "t83-s1", "Claims and evidence in sources", "Eisenhower's main warning in the speech is that",
          ["a permanent arms industry and military establishment could gain too much influence over government", "the United States should abolish its military", "the Soviet Union was no longer a threat", "computers would replace the army"],
          ["Correct. He warns against \"unwarranted influence\" by the \"military-industrial complex.\"",
            "He calls the arms industry a necessity.",
            "He calls the Soviet ideology a lasting danger.",
            "He mentions computers in research, not the army."]),
        M(2, "t83-s1", "Sourcing and situation", "Eisenhower's warning carries particular weight because",
          ["he was a former general and two-term president who had overseen the military buildup himself", "he was a Soviet official", "he opposed all military spending throughout his career", "he was speaking before he took office"],
          ["Correct. A military leader warning about military influence was hard to dismiss.",
            "He was American.",
            "He presided over large defense budgets.",
            "He spoke as he was leaving office."]),
        M(3, "t83-s1", "Continuity and change", "Eisenhower's statement that the United States \"had no armaments industry\" before the Second World War best shows which change caused by the Cold War?",
          ["The United States kept a large military and arms industry in peacetime for the first time", "The United States disbanded its army after 1945", "Arms production moved entirely to Europe", "Military spending fell sharply in the 1950s"],
          ["Correct. Unlike after earlier wars, the United States did not demobilize its arms industry.",
            "It kept a large military.",
            "Production remained in the United States.",
            "Spending stayed high."]),
        M(4, "t83-s1", "Comparison", "The effects of the Cold War on the United States described in the speech are most similar to its effects on the Soviet Union in that both",
          ["devoted a large share of their economies to the military and arms race", "abolished their armed forces", "ended government funding for science", "avoided all nuclear weapons research"],
          ["Correct. Both superpowers spent heavily on weapons and military research.",
            "Both kept large militaries.",
            "Both funded science heavily.",
            "Both built nuclear arsenals."]),
        // ===== Set 2: Angola =====
        M(5, "t83-s2", "Developments and processes", "The war in Angola best illustrates which effect of the Cold War?",
          ["Proxy wars in which the superpowers and their allies backed rival sides in conflicts in the decolonizing world", "Direct war between American and Soviet armies", "Peaceful transitions to independence everywhere", "The end of foreign involvement in Africa"],
          ["Correct. Soviet and Cuban aid backed the MPLA, while the United States and South Africa backed its rivals.",
            "The superpowers did not fight each other directly.",
            "Angola's independence led to decades of war.",
            "Foreign involvement grew."]),
        M(6, "t83-s2", "Causation", "According to the passage, the civil war began in 1975 mainly because",
          ["Portugal withdrew suddenly and the rival independence movements fought for control", "the United States invaded Angola", "Angola declared war on Portugal in 1975", "South Africa granted Angola independence"],
          ["Correct. Portugal's sudden exit after its own revolution left the movements to fight one another.",
            "The United States sent aid, not an army.",
            "Portugal was leaving.",
            "Angola was a Portuguese colony."]),
        M(7, "t83-s2", "Comparison", "Cuba's role in Angola most clearly shows that",
          ["smaller states could pursue their own aims in the Cold War, not only follow the superpowers", "Cuba was a colony of Angola", "Cuba supported UNITA", "Cuba stayed neutral in the Cold War"],
          ["Correct. Cuba sent tens of thousands of troops, a commitment far beyond what a small state usually made.",
            "This is false.",
            "Cuba supported the MPLA.",
            "Cuba was allied with the Soviet Union."]),
        M(8, "t83-s2", "Continuity and change", "The land mines described in the passage best illustrate which continuity after the Cold War ended?",
          ["The effects of proxy wars continued to harm civilians long after the fighting stopped", "Angola became the wealthiest state in Africa", "All Cold War weapons were removed in 1991", "Proxy wars had no lasting effects"],
          ["Correct. Mines left by the war killed and maimed civilians for years.",
            "The passage does not say this.",
            "The mines remained.",
            "The passage describes lasting harm."]),
        // ===== SAQ: Non-alignment =====
        Q("a", "Identify ONE goal of the Non-Aligned Movement described in the passage.",
          "The response names one goal from the passage.",
          ["Staying out of both the American and Soviet alliances.", "Ending colonialism.", "Urging the superpowers to disarm."],
          ["\"Joining NATO.\" This is the opposite.", "\"Building the Aswan Dam.\" This was an Egyptian project, not a goal of the movement.", "\"Ending all trade with the superpowers.\" Members accepted aid from both."],
          "The passage says members declared they would not join either the American or the Soviet alliance.",
          "They had goals."),
        Q("b", "Explain ONE way newly independent states used the Cold War rivalry to their own advantage.",
          "The response explains a specific example or method.",
          ["Egypt turned to Soviet loans for the Aswan High Dam after the United States withdrew its offer.", "India accepted aid from both the United States and the Soviet Union for its development.", "Leaders played the superpowers against each other to win better aid terms and weapons."],
          ["\"They were neutral.\" This explains no advantage.", "\"They joined the Warsaw Pact to gain colonies.\" This is false.", "\"The superpowers ignored them.\" This is false."],
          "After the United States withdrew its offer to help fund the Aswan High Dam in 1956, Nasser turned to the Soviet Union, which provided loans and engineers. Egypt got its dam by using one superpower's interest against the other's.",
          "They took advantage."),
        Q("c", "Explain ONE limitation of non-alignment as a strategy for newly independent states in the period 1955 to 1991.",
          "The response explains a specific limitation.",
          ["Many members still depended on aid or weapons from one superpower, which limited their independence.", "Some members, such as Cuba, were closely tied to one bloc, which weakened the movement's claim to neutrality.", "Non-aligned states could not prevent superpower interventions or proxy wars on their own territory."],
          ["\"It was not perfect.\" This is too vague.", "\"All members joined NATO.\" This is false.", "\"The movement ended colonialism by itself in 1961.\" This is inaccurate."],
          "Many non-aligned states depended on one superpower for weapons. India, for example, bought much of its military equipment from the Soviet Union and signed a treaty of friendship with it in 1971, which made its neutrality less complete.",
          "It had limits."),
      ] },
  ],
};

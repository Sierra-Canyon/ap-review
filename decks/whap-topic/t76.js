// Topic 7.6 Quiz: Causes of World War II
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why) => ({ id: "t76-m0" + n, skill: "u7", type: "mcq", set, topic: "7.6", reasoning, question, choices, why, answer: 0 });
const Q = (sub, prompt, earns, yes, no, example, notExample) => ({ id: "t76-q1" + sub, skill: "u7", type: "fr", set: "t76-s3", part: "SAQ 1", sub, topic: "7.6", lead: SAQ, prompt, earns, yes, no, example, notExample });

export const sets = {
  "t76-s1": {
    id: "t76-s1", name: "The Munich Agreement, 1938", intro: ONE,
    sources: [{ title: "Source", blocks: [
      { p: "GERMANY, the United Kingdom, France and Italy, taking into consideration the agreement, which has been already reached in principle for the cession to Germany of the Sudeten German territory, have agreed on the following terms and conditions governing the said cession and the measures consequent thereon, and by this agreement they each hold themselves responsible for the steps necessary to secure its fulfilment:" },
      { p: "(1) The evacuation will begin on 1st October." },
      { p: "(2) The United Kingdom, France and Italy agree that the evacuation of the territory shall be completed by the 10th October, without any existing installations having been destroyed, and that the Czechoslovak Government will be held responsible for carrying out the evacuation without damage to the said installations. ..." },
      { p: "(4) The occupation by stages of the predominantly German territory by German troops will begin on 1st October. ..." },
      { p: "(7) There will be a right of option into and out of the transferred territories, the option to be exercised within six months from the date of this agreement. ..." },
      { cite: "Agreement concluded at Munich, September 29, 1938, between Germany, Great Britain, France and Italy, signed by Adolf Hitler, Neville Chamberlain, Edouard Daladier, and Benito Mussolini, as published by the Avalon Project, Yale Law School. Czechoslovakia, which had a defensive alliance with France, was not invited to the conference. The \"right of option\" let residents choose which state to belong to.", url: "https://avalon.law.yale.edu/imt/munich1.asp", kind: "primary" },
    ] }],
  },
  "t76-s2": {
    id: "t76-s2", name: "Italy invades Ethiopia", intro: "Use the passage below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that Italy's invasion of Ethiopia in 1935 exposed the weakness of the League of Nations. Ethiopia, one of only two independent states in Africa and a member of the League, had defeated an Italian army at Adwa in 1896. Mussolini sought revenge and a larger empire. Italian forces invaded in October 1935, using aircraft and poison gas against Ethiopian soldiers and villages. Emperor Haile Selassie appealed to the League, which declared Italy the aggressor and voted economic sanctions. But the sanctions did not include oil, and Britain and France, hoping to keep Italy as a partner against Germany, did not close the Suez Canal to Italian ships. Italy captured Addis Ababa in May 1936. Haile Selassie warned the League that if it failed Ethiopia, other small nations would be next." },
      PRACTICE,
    ] }],
  },
  "t76-s3": {
    id: "t76-s3", name: "The Spanish Civil War", intro: SAQ,
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that the Spanish Civil War of 1936 to 1939 was a rehearsal for the Second World War. In July 1936, army officers led by General Francisco Franco rebelled against Spain's elected Republican government. Germany and Italy sent Franco aircraft, tanks, and tens of thousands of troops; in April 1937, German bombers destroyed the Basque town of Guernica. The Soviet Union sent weapons and advisers to the Republic, and about 35,000 volunteers from many countries joined the International Brigades to fight for it. Britain and France, fearing a wider war, adopted a policy of nonintervention and refused to sell arms to either side. Franco won in 1939 and ruled Spain as a dictator until his death in 1975." },
      PRACTICE,
    ] }],
  },
};

export default {
  forms: [
    { id: "t76", name: "Topic 7.6 Quiz: Causes of World War II", group: "Unit 7: Global Conflict",
      items: [
        // ===== Set 1: Munich =====
        M(1, "t76-s1", "Sourcing and situation", "The list of signers is most significant because it shows that",
          ["the fate of Czechoslovak territory was decided by four great powers without Czechoslovakia's participation", "Czechoslovakia led the negotiations", "the United States and the Soviet Union guaranteed the agreement", "Germany alone wrote the agreement"],
          ["Correct. Germany, Britain, France, and Italy signed; Czechoslovakia was not invited.",
            "Czechoslovakia did not sign.",
            "Neither took part.",
            "Four powers signed."]),
        M(2, "t76-s1", "Developments and processes", "The agreement best illustrates which policy?",
          ["Appeasement, in which Britain and France accepted German demands in hope of avoiding war", "Collective security through the League of Nations", "Containment of communism", "Isolationism by the United States"],
          ["Correct. Chamberlain and Daladier accepted the transfer of the Sudetenland to Germany.",
            "The League played no role.",
            "Containment was a Cold War policy.",
            "The United States was not a party."]),
        M(3, "t76-s1", "Causation", "Which development most directly showed that the agreement had failed to prevent German expansion?",
          ["Germany's occupation of the rest of the Czech lands in March 1939", "The German-Soviet Pact of August 1939", "The remilitarization of the Rhineland in 1936", "The annexation of Austria in March 1938"],
          ["Correct. Hitler broke his promise and seized Prague, showing that his aims went beyond German-speaking lands.",
            "This also came later but did not break the Munich terms directly.",
            "This came before Munich.",
            "This came before Munich."]),
        M(4, "t76-s1", "Contextualization", "Britain and France signed the agreement mainly because their leaders",
          ["feared another war like the First World War and believed their countries were not ready to fight", "wanted Germany to defeat the Soviet Union", "had signed an alliance with Germany", "wished to punish Czechoslovakia"],
          ["Correct. Memories of 1914 to 1918 and slow rearmament led them to seek peace through concessions.",
            "This was not the main reason.",
            "They had no such alliance.",
            "They hoped to avoid war, not punish Czechoslovakia."]),
        // ===== Set 2: Ethiopia =====
        M(5, "t76-s2", "Causation", "According to the passage, the League's sanctions against Italy failed mainly because",
          ["they did not cut off oil, and Britain and France kept the Suez Canal open to Italian ships", "the League refused to name Italy as the aggressor", "Ethiopia was not a League member", "Italy withdrew from Ethiopia"],
          ["Correct. Without oil sanctions or closing the canal, Italy could continue the war.",
            "The League declared Italy the aggressor.",
            "Ethiopia was a member.",
            "Italy captured Addis Ababa."]),
        M(6, "t76-s2", "Comparison", "Italy's invasion of Ethiopia is most similar to which other action of the 1930s?",
          ["Japan's seizure of Manchuria in 1931, which the League condemned without stopping", "The Munich Agreement", "The New Deal", "The founding of the United Nations"],
          ["Correct. In both cases an aggressor ignored the League, which proved unable to stop it.",
            "Munich was a negotiated agreement.",
            "This was an economic program.",
            "This came in 1945."]),
        M(7, "t76-s2", "Continuity and change", "Mussolini's desire to avenge Adwa best shows which continuity from the late 1800s?",
          ["The drive by European states to build colonial empires in Africa", "The decline of nationalism", "The end of European interest in Africa", "Ethiopia's dependence on Italy"],
          ["Correct. Italy pursued the kind of African conquest it had failed to achieve in 1896.",
            "Nationalism was stronger in the 1930s.",
            "Interest continued.",
            "Ethiopia had been independent."]),
        M(8, "t76-s2", "Developments and processes", "The invasion of Ethiopia most directly contributed to the Second World War by",
          ["showing aggressors that the League could not stop them and drawing Italy closer to Germany", "uniting Italy, Britain, and France against Germany", "ending Italian imperial ambitions", "strengthening the League of Nations"],
          ["Correct. Italy left the League and formed the Rome-Berlin Axis in 1936.",
            "Italy moved toward Germany.",
            "Mussolini later invaded Albania.",
            "The League was weakened."]),
        // ===== SAQ: Spain =====
        Q("a", "Identify ONE foreign power, described in the passage, that intervened in the Spanish Civil War.",
          "The response names one intervening power and its side.",
          ["Germany sent aircraft and troops to Franco.", "Italy sent troops and weapons to Franco.", "The Soviet Union sent weapons and advisers to the Republic."],
          ["\"Britain sent troops to Franco.\" Britain followed nonintervention.", "\"France armed the Republic.\" France refused to sell arms.", "\"Spain intervened.\" Spain is not a foreign power."],
          "The passage says Germany sent aircraft, tanks, and troops to support Franco, and German bombers destroyed Guernica in 1937.",
          "Other countries got involved."),
        Q("b", "Explain ONE way the Spanish Civil War was a \"rehearsal\" for the Second World War.",
          "The response explains a specific link between the two wars.",
          ["Germany tested new weapons and tactics, such as bombing cities like Guernica, that it later used in the Second World War.", "The war pitted fascist states (Germany and Italy) against the Soviet Union, foreshadowing the ideological conflict of 1941 to 1945.", "Britain and France's refusal to intervene showed the same caution as appeasement."],
          ["\"It was a war.\" This explains no link.", "\"Spain fought Germany in the Second World War.\" Spain stayed out of the war.", "\"The war was fought with swords.\" This is false."],
          "German pilots of the Condor Legion bombed Guernica in 1937, testing the bombing of civilians from the air. The Luftwaffe used these lessons in its attacks on Warsaw, Rotterdam, and British cities in 1939 and 1940.",
          "It was like the later war."),
        Q("c", "Explain ONE factor OTHER than the Spanish Civil War that contributed to the outbreak of the Second World War in Europe.",
          "The response names and explains a specific cause.",
          ["The policy of appeasement, as at Munich, allowed Hitler to expand without facing war.", "Hitler's goal of conquering living space in eastern Europe led him to invade Poland.", "The German-Soviet Pact of 1939 freed Hitler to attack Poland without fearing a two-front war."],
          ["\"Hitler was bad.\" This is too vague.", "\"The Spanish Civil War.\" The prompt asks for another factor.", "\"The attack on Pearl Harbor.\" This came in 1941, after the war in Europe began."],
          "In August 1939, Germany and the Soviet Union agreed not to attack each other and secretly divided eastern Europe. Freed from the danger of a Soviet response, Hitler invaded Poland on September 1, and Britain and France declared war two days later.",
          "There were many causes."),
      ] },
  ],
};

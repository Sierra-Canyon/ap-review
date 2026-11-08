// Topic 9.2 Quiz: Technological Advances and Limitations: Disease
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why) => ({ id: "t92-m0" + n, skill: "u9", type: "mcq", set, topic: "9.2", reasoning, question, choices, why, answer: 0 });
const Q = (sub, prompt, earns, yes, no, example, notExample) => ({ id: "t92-q1" + sub, skill: "u9", type: "fr", set: "t92-s3", part: "SAQ 1", sub, topic: "9.2", lead: SAQ, prompt, earns, yes, no, example, notExample });

export const sets = {
  "t92-s1": {
    id: "t92-s1", name: "The Declaration of Alma-Ata, 1978", intro: ONE,
    sources: [{ title: "Source", blocks: [
      { p: "I. The Conference strongly reaffirms that health, which is a state of complete physical, mental and social wellbeing, and not merely the absence of disease or infirmity, is a fundamental human right ..." },
      { p: "II. The existing gross inequality in the health status of the people particularly between developed and developing countries as well as within countries is politically, socially and economically unacceptable and is, therefore, of common concern to all countries." },
      { p: "V. ... A main social target of governments, international organizations and the whole world community in the coming decades should be the attainment by all peoples of the world by the year 2000 of a level of health that will permit them to lead a socially and economically productive life. Primary health care is the key to attaining this target ..." },
      { p: "VII. Primary health care ... includes at least: education concerning prevailing health problems and the methods of preventing and controlling them; promotion of food supply and proper nutrition; an adequate supply of safe water and basic sanitation; maternal and child health care, including family planning; immunization against the major infectious diseases; prevention and control of locally endemic diseases; appropriate treatment of common diseases and injuries; and provision of essential drugs ..." },
      { cite: "Declaration of Alma-Ata, International Conference on Primary Health Care, Alma-Ata, Kazakh Soviet Socialist Republic (now Almaty, Kazakhstan), September 12, 1978, as published by Wikisource. The conference was organized by the World Health Organization and UNICEF and attended by delegations from 134 countries; its slogan became \"Health for All by the Year 2000.\"", url: "https://en.wikisource.org/wiki/Declaration_of_Alma-Ata", kind: "primary" },
    ] }],
  },
  "t92-s2": {
    id: "t92-s2", name: "The influenza pandemic of 1918", intro: "Use the passage below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that the influenza pandemic of 1918 and 1919 was the deadliest outbreak of disease in the 1900s. It spread in waves during the last year of the First World War, carried by soldiers in crowded camps and troopships and by railways and steamships to every inhabited continent. Unlike most strains of flu, it killed many healthy young adults. Estimates of the dead range from about 20 million to 50 million or more, far more than died in combat during the war. India alone may have lost more than 10 million people. Doctors had no vaccine and no drugs to treat the virus, which had not yet been identified, and the antibiotics that later treated the pneumonia that often followed did not yet exist. Cities closed schools and theaters, and some required masks, but wartime censorship meant that many newspapers played down the danger." },
      PRACTICE,
    ] }],
  },
  "t92-s3": {
    id: "t92-s3", name: "The campaign against polio", intro: SAQ,
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that the fight against polio shows both the power and the limits of medical technology. In the first half of the 1900s, polio epidemics paralyzed tens of thousands of children a year in Europe and North America. In 1955, Jonas Salk's injected vaccine was declared safe and effective, and in the early 1960s Albert Sabin's oral vaccine, which could be given as drops, made mass vaccination cheaper and easier. Cases fell sharply in wealthy countries. In 1988, the World Health Organization and its partners launched a campaign to eradicate polio worldwide, when the disease still paralyzed about 350,000 children a year. By the 2020s cases had fallen by more than 99 percent, but the virus survived in parts of Pakistan and Afghanistan, where conflict, distrust of vaccinators, and the difficulty of reaching every child slowed the campaign." },
      PRACTICE,
    ] }],
  },
};

export default {
  forms: [
    { id: "t92", name: "Topic 9.2 Quiz: Technological Advances and Limitations: Disease", group: "Unit 9: Globalization",
      items: [
        // ===== Set 1: Alma-Ata =====
        M(1, "t92-s1", "Claims and evidence in sources", "The declaration's main claim about health is that",
          ["health is a human right, and gross inequality in health between and within countries is unacceptable", "health is the responsibility of individuals alone", "only wealthy countries can achieve good health", "hospitals in cities are the key to health for all"],
          ["Correct. Sections I and II call health a fundamental right and the gap in health unacceptable.",
            "It assigns responsibility to governments and the world community.",
            "It sets a goal for \"all peoples of the world.\"",
            "It stresses primary health care close to where people live."]),
        M(2, "t92-s1", "Developments and processes", "The list in Section VII best reflects the view that",
          ["many health problems could be prevented with basic measures such as clean water, nutrition, and vaccination", "advanced surgery was the main need of developing countries", "disease could be ended only by new drugs", "health had nothing to do with food or water"],
          ["Correct. Most items are basic, low-cost public health measures.",
            "Surgery is not listed.",
            "Drugs are only one item among many.",
            "Food and water are listed."]),
        M(3, "t92-s1", "Contextualization", "The declaration is best understood in the context of",
          ["the push by newly independent states for a fairer share of global resources in the 1970s", "the end of the Cold War", "the 1918 influenza pandemic", "the founding of the World Health Organization in 1900"],
          ["Correct. Developing states pressed for development and equality, and the declaration ties health to a new economic order.",
            "That came in 1991.",
            "That came sixty years earlier.",
            "WHO was founded in 1948."]),
        M(4, "t92-s1", "Continuity and change", "Which development after 1978 best shows that the declaration's goal of \"health for all\" by 2000 was not met?",
          ["The spread of HIV/AIDS, which killed millions in sub-Saharan Africa in the 1990s and 2000s", "The eradication of smallpox in 1980", "The rise in life expectancy in East Asia", "The founding of UNICEF"],
          ["Correct. AIDS reversed gains in life expectancy in several African countries.",
            "This was a success.",
            "This was a success.",
            "UNICEF was founded in 1946."]),
        // ===== Set 2: 1918 =====
        M(5, "t92-s2", "Causation", "According to the passage, the pandemic spread so widely mainly because",
          ["soldiers, troopships, railways, and steamships carried it across the world", "doctors spread it deliberately", "it began in many places at once", "people stopped traveling"],
          ["Correct. War and modern transport carried the virus everywhere.",
            "This is false.",
            "It spread from place to place.",
            "Movement continued."]),
        M(6, "t92-s2", "Comparison", "The 1918 pandemic differed from later outbreaks such as polio in that in 1918",
          ["doctors had no vaccine or effective drugs against the disease", "the disease affected only children", "a vaccine was widely available", "the disease was limited to one country"],
          ["Correct. The virus had not been identified, and neither vaccines nor antibiotics existed.",
            "It killed many young adults.",
            "There was no vaccine.",
            "It spread to every inhabited continent."]),
        M(7, "t92-s2", "Contextualization", "Wartime censorship affected the pandemic mainly by",
          ["leading newspapers to play down the danger, which may have slowed public responses", "ending the pandemic quickly", "forcing doctors to share all information", "preventing the disease from crossing borders"],
          ["Correct. Governments at war limited bad news.",
            "It did not end the pandemic.",
            "It limited information.",
            "Censorship could not stop a virus."]),
        M(8, "t92-s2", "Claims and evidence in sources", "Which evidence from the passage best supports the claim that the pandemic was deadlier than the fighting?",
          ["Estimates of the dead range from 20 million to 50 million or more, far more than died in combat.", "Cities closed schools and theaters.", "Some cities required masks.", "It spread in waves."],
          ["Correct. The passage compares the two death tolls directly.",
            "This describes a response.",
            "This describes a response.",
            "This describes its pattern."]),
        // ===== SAQ: Polio =====
        Q("a", "Identify ONE technological advance against polio described in the passage.",
          "The response names one advance from the passage.",
          ["Jonas Salk's injected vaccine of 1955.", "Albert Sabin's oral vaccine, given as drops.", "Mass vaccination made cheaper by the oral vaccine."],
          ["\"Conflict in Pakistan.\" This is a limit.", "\"Polio epidemics.\" These are the problem.", "\"Antibiotics.\" These are not mentioned for polio."],
          "The passage says Albert Sabin's oral vaccine, which could be given as drops, made mass vaccination cheaper and easier.",
          "There were vaccines."),
        Q("b", "Explain ONE reason the campaign to eradicate polio had not succeeded by the 2020s.",
          "The response explains a specific obstacle.",
          ["Conflict in parts of Pakistan and Afghanistan made it dangerous to reach every child.", "Distrust of vaccinators led some families to refuse vaccines.", "Reaching every child in remote areas was difficult and costly."],
          ["\"Polio is hard.\" This explains nothing.", "\"No vaccine existed.\" Vaccines existed from 1955.", "\"Cases increased worldwide.\" Cases fell by more than 99 percent."],
          "In parts of Afghanistan and Pakistan, fighting made it dangerous for vaccination teams to travel, and some local leaders spread distrust of vaccinators. As a result, some children were never vaccinated and the virus survived.",
          "It was difficult."),
        Q("c", "Explain ONE way disease or health outcomes continued to differ between wealthy and poorer parts of the world after 1950.",
          "The response explains a specific difference.",
          ["Diseases of poverty such as malaria and tuberculosis remained common in poorer regions while declining in wealthy ones.", "Polio disappeared from wealthy countries decades before it was nearly eliminated elsewhere.", "In wealthy countries, diseases linked to longer lives, such as heart disease and cancer, became the leading causes of death."],
          ["\"Health was different.\" This is too vague.", "\"Wealthy countries had more malaria.\" This is false.", "\"All regions had the same life expectancy by 1960.\" This is false."],
          "Malaria nearly disappeared from Europe and the United States by the 1950s, but it continued to kill hundreds of thousands of people a year in sub-Saharan Africa, where many people lacked mosquito nets, drugs, and health care.",
          "Rich and poor were different."),
      ] },
  ],
};

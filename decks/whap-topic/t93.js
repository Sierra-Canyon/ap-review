// Topic 9.3 Quiz: Debates About the Environment
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why) => ({ id: "t93-m0" + n, skill: "u9", type: "mcq", set, topic: "9.3", reasoning, question, choices, why, answer: 0 });
const Q = (sub, prompt, earns, yes, no, example, notExample) => ({ id: "t93-q1" + sub, skill: "u9", type: "fr", set: "t93-s3", part: "SAQ 1", sub, topic: "9.3", lead: SAQ, prompt, earns, yes, no, example, notExample });

export const sets = {
  "t93-s1": {
    id: "t93-s1", name: "Wangari Maathai's Nobel lecture, 2004", intro: ONE,
    sources: [{ title: "Source", blocks: [
      { p: "... As I was growing up, I witnessed forests being cleared and replaced by commercial plantations, which destroyed local biodiversity and the capacity of the forests to conserve water." },
      { p: "In 1977, when we started the Green Belt Movement, I was partly responding to needs identified by rural women, namely lack of firewood, clean drinking water, balanced diets, shelter and income. ..." },
      { p: "The women we worked with recounted that unlike in the past, they were unable to meet their basic needs. This was due to the degradation of their immediate environment as well as the introduction of commercial farming, which replaced the growing of household food crops. But international trade controlled the price of the exports from these small-scale farmers and a reasonable and just income could not be guaranteed. ..." },
      { p: "The Norwegian Nobel Committee has challenged the world to broaden the understanding of peace: there can be no peace without equitable development; and there can be no development without sustainable management of the environment in a democratic and peaceful space. ..." },
      { cite: "Wangari Maathai, Nobel Lecture, Oslo, December 10, 2004, as published by NobelPrize.org. Maathai, a Kenyan biologist, was the first African woman to win the Nobel Peace Prize. Under President Daniel arap Moi, she had been jailed and beaten for protesting the sale of public forests and parkland to developers.", url: "https://www.nobelprize.org/prizes/peace/2004/maathai/lecture/", kind: "primary" },
    ] }],
  },
  "t93-s2": {
    id: "t93-s2", name: "The shrinking Aral Sea", intro: "Use the passage below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that the Aral Sea shows how state plans for development could destroy an environment. In 1960, the Aral Sea, on the border of the Soviet republics of Kazakhstan and Uzbekistan, was the fourth-largest lake in the world. To grow cotton in the desert, Soviet planners diverted the two rivers that fed it into vast irrigation canals. Cotton harvests rose, but by the 2000s the sea had shrunk to about a tenth of its former volume and split into separate lakes. The fishing industry collapsed, former ports were left many miles from the water, and winds carried salt and pesticide dust from the dry seabed across the region, contributing to health problems. Since 2005, a dam built with World Bank help has partly restored the northern part of the sea." },
      PRACTICE,
    ] }],
  },
  "t93-s3": {
    id: "t93-s3", name: "Protecting the ozone layer", intro: SAQ,
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that the effort to protect the ozone layer was one of the most successful examples of international environmental cooperation. In 1974, scientists warned that chlorofluorocarbons (CFCs), chemicals used in refrigerators, air conditioners, and spray cans, could destroy the ozone layer that shields the earth from harmful ultraviolet light. In 1985, British scientists reported a large seasonal \"hole\" in the ozone over Antarctica. Two years later, governments signed the Montreal Protocol, which required countries to phase out CFCs, with extra time and a fund to help developing countries switch to substitutes. Every member of the United Nations eventually ratified it. Scientists now expect the ozone layer to recover by the middle of the 2000s. Many later observers contrasted this success with the much slower progress in limiting the greenhouse gases that cause climate change." },
      PRACTICE,
    ] }],
  },
};

export default {
  forms: [
    { id: "t93", name: "Topic 9.3 Quiz: Debates About the Environment", group: "Unit 9: Globalization",
      items: [
        // ===== Set 1: Maathai =====
        M(1, "t93-s1", "Claims and evidence in sources", "Maathai's main argument in the lecture is that",
          ["environmental protection, fair development, and peace are connected", "economic growth should always come before the environment", "commercial plantations improved rural women's lives", "Africa's environmental problems were caused only by its own governments"],
          ["Correct. She says there is no peace without equitable development and no development without sustainable management of the environment.",
            "She criticizes growth that destroyed forests.",
            "She says plantations destroyed biodiversity.",
            "She also blames international trade."]),
        M(2, "t93-s1", "Causation", "According to Maathai, rural women could not meet their basic needs mainly because",
          ["their environment had been degraded and commercial farming had replaced household food crops", "they refused to farm", "the government gave them too much land", "international trade guaranteed them high prices"],
          ["Correct. She names environmental degradation and commercial farming.",
            "She says they tilled the land.",
            "She does not say this.",
            "She says a just income could not be guaranteed."]),
        M(3, "t93-s1", "Sourcing and situation", "Maathai's experience as an activist jailed by her own government most likely shaped her emphasis on",
          ["democratic space as a condition for sustainable development", "the benefits of one-party rule", "the success of commercial plantations", "the need to cut down forests for development"],
          ["Correct. She links environmental management to a \"democratic and peaceful space.\"",
            "She calls for expanding democratic space.",
            "She criticizes the plantations.",
            "She defends forests."]),
        M(4, "t93-s1", "Comparison", "Maathai's view differed from that of supporters of rapid industrial development in the 1950s and 1960s in that she",
          ["treated the environment as a basis of development rather than a resource to be used up", "opposed all development", "ignored the needs of the poor", "supported the clearing of forests"],
          ["Correct. She argues that development depends on sustainable management of the environment.",
            "She calls for equitable development.",
            "She focuses on rural women's needs.",
            "She opposed forest clearing."]),
        // ===== Set 2: Aral Sea =====
        M(5, "t93-s2", "Causation", "According to the passage, the Aral Sea shrank mainly because",
          ["Soviet planners diverted the rivers that fed it to irrigate cotton", "the climate turned colder", "a dam was built in 2005", "fishing removed the water"],
          ["Correct. Irrigation canals took the rivers' water.",
            "The passage does not say this.",
            "The dam partly restored the sea.",
            "Fishing does not remove water."]),
        M(6, "t93-s2", "Developments and processes", "The Aral Sea disaster best illustrates which development after 1900?",
          ["Human efforts to increase production caused large-scale environmental damage", "Environmental damage occurred only in capitalist economies", "Technology always protected the environment", "Lakes grew larger because of irrigation"],
          ["Correct. A plan to grow more cotton destroyed a sea and its economy.",
            "The Soviet Union had a planned economy.",
            "Technology caused the damage here.",
            "The sea shrank."]),
        M(7, "t93-s2", "Claims and evidence in sources", "Which evidence from the passage best shows that environmental damage harmed human health?",
          ["Winds carried salt and pesticide dust from the dry seabed across the region.", "Cotton harvests rose.", "The sea split into separate lakes.", "Former ports were left far from the water."],
          ["Correct. The dust contributed to health problems.",
            "This was a benefit for the plan.",
            "This describes the sea.",
            "This describes the economy."]),
        M(8, "t93-s2", "Comparison", "The Aral Sea disaster is most similar to which other environmental change?",
          ["Deforestation in the Amazon to clear land for cattle ranching and farming", "The founding of national parks in the United States", "The Montreal Protocol", "The restoration of wetlands"],
          ["Correct. Both destroyed ecosystems to expand agriculture.",
            "Parks protected land.",
            "That protected the ozone layer.",
            "That restores ecosystems."]),
        // ===== SAQ: Ozone =====
        Q("a", "Identify ONE feature of the Montreal Protocol described in the passage.",
          "The response names one feature from the passage.",
          ["It required countries to phase out CFCs.", "It gave developing countries extra time and a fund to switch to substitutes.", "Every member of the United Nations eventually ratified it."],
          ["\"It banned greenhouse gases.\" The passage contrasts it with slower climate progress.", "\"It was signed in 1974.\" It was signed in 1987.", "\"It discovered the ozone hole.\" Scientists did."],
          "The passage says the Montreal Protocol required countries to phase out CFCs and gave developing countries extra time and money to switch.",
          "It protected the ozone."),
        Q("b", "Explain ONE reason the Montreal Protocol was more successful than efforts to limit greenhouse gases.",
          "The response explains a specific reason.",
          ["Substitutes for CFCs were available, so phasing them out cost far less than replacing fossil fuels.", "CFCs were used in a few industries, while fossil fuels power almost every economy.", "The fund for developing countries won their support, while debates over who should cut emissions divided rich and poor countries."],
          ["\"It was easier.\" This explains nothing.", "\"Climate change is not real.\" This is false.", "\"CFCs powered most factories.\" This is false."],
          "Chemical companies developed substitutes for CFCs, so countries could phase them out without great harm to their economies. Fossil fuels, by contrast, power transport, industry, and electricity almost everywhere, so cutting greenhouse gases is far more costly.",
          "It was simpler."),
        Q("c", "Explain ONE way debates about the environment after 1970 divided wealthy and developing countries.",
          "The response explains a specific division.",
          ["Developing countries argued that wealthy countries had caused most pollution and should cut first and pay more.", "Developing countries wanted the right to industrialize, while wealthy countries pressed for limits on emissions and deforestation.", "Disputes over whether countries such as China and India should face the same limits as the United States slowed climate agreements."],
          ["\"Countries disagreed.\" This names no division.", "\"Wealthy countries opposed all protection.\" This is too broad and inaccurate.", "\"All countries agreed on climate change by 1990.\" This is false."],
          "At climate talks in the 1990s, countries such as India and China argued that wealthy countries had produced most greenhouse gases while industrializing, so they should cut emissions first. The Kyoto Protocol of 1997 required cuts only from wealthy countries, and the United States refused to ratify it partly for that reason.",
          "They disagreed."),
      ] },
  ],
};

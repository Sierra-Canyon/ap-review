// Topic 9.3 Quiz: Debates About the Environment
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
import { maps } from "../whap/maps.js";
const MAP = "Map drawn for this review from Natural Earth land outlines (public domain). Places and dates checked against ";
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
    id: "t93-s2", name: "Environmental disasters in Europe and Asia", intro: "Use the map below to answer the questions that follow.", label: "Map",
    sources: [{ title: "Map", blocks: [
      { svg: maps["u9-disasters"], caption: "Environmental and industrial disasters in Europe and Asia, 1956 to 2011" },
      { cite: MAP + "Encyclopaedia Britannica, \"Minamata disease,\" \"Bhopal disaster,\" and \"Chernobyl disaster,\" and Wikipedia, \"Aral Sea\" and \"Fukushima nuclear accident.\"", kind: "map" },
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
        // ===== Set 2: Environmental disasters (map) =====
        M(5, "t93-s2", "Developments and processes", "Taken together, the events on the map best illustrate which development after 1900?",
          ["Technologies that raised farm, factory, and energy output also caused severe environmental and health damage.", "Environmental damage was limited to the oldest industrial nations of Western Europe.", "Environmental disasters grew rarer after the 1950s as technology improved.", "Most environmental disasters were caused by natural forces rather than human activity."],
          ["Correct. A chemical factory, irrigation for cotton, a pesticide plant, and two nuclear power plants all caused the harm shown.",
            "None of the events on the map is in Western Europe.",
            "The map's events run from 1956 to 2011.",
            "Each event came from a factory, a farm plan, or a power plant."]),
        M(6, "t93-s2", "Comparison", "The two events in the Soviet Union shown on the map best support which claim?",
          ["Communist planned economies, not only capitalist ones, caused major environmental damage.", "The Soviet Union avoided the environmental costs of industry.", "Environmental damage in the Soviet Union came only from nuclear weapons tests.", "Soviet planners protected rivers and lakes from overuse."],
          ["Correct. The Aral Sea and Chernobyl were both the results of Soviet state projects, while Minamata and Bhopal came from private companies in Japan and India.",
            "The map shows two disasters in the Soviet Union.",
            "The Aral Sea shrank because of irrigation, and Chernobyl was a power plant.",
            "Soviet irrigation drained the rivers that fed the Aral Sea."]),
        M(7, "t93-s2", "Causation", "The two events marked with an X on the map most directly fueled which debate?",
          ["Whether the benefits of nuclear power outweighed its dangers", "Whether chemical pesticides should be used on farms", "Whether rivers should be diverted for irrigation", "Whether factories should be allowed to dump mercury into the sea"],
          ["Correct. After Chernobyl and Fukushima, several countries slowed or ended nuclear power; Germany decided in 2011 to close all its reactors.",
            "That debate fits Bhopal, which is marked with a dot.",
            "That debate fits the Aral Sea, which is marked with a dot.",
            "That debate fits Minamata, which is marked with a dot."]),
        M(8, "t93-s2", "Continuity and change", "The dates on the map, from 1956 to 2011, best support which conclusion?",
          ["The dangers of modern industry and energy continued throughout the period despite growing environmental movements.", "Environmental disasters ended with the end of the Cold War.", "Environmental disasters took place only in poor countries.", "Environmental damage stopped once the United Nations was founded."],
          ["Correct. New disasters kept happening for more than fifty years, even as environmental groups and laws grew.",
            "Fukushima came in 2011, twenty years after the Soviet Union ended.",
            "Japan, a wealthy country, had two of the events on the map.",
            "The UN was founded in 1945, before every event on the map."]),
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

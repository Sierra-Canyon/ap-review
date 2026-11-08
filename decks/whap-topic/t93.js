// Topic 9.3 Quiz: Debates About the Environment
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
import { maps } from "../whap/maps.js";
const MAP = "Map drawn for this review from Natural Earth land outlines (public domain). Places and dates checked against ";
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why, difficulty) => ({ id: "t93-m0" + n, skill: "u9", type: "mcq", set, topic: "9.3", reasoning, difficulty, question, choices, why, answer: 0 });
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
          ["peace, fair development, and care of the environment are linked", "commercial plantations raised rural incomes but harmed forests", "international trade guaranteed fair prices to small farmers", "Africa's environmental damage came mainly from population growth"],
          ["Correct. She says there is no peace without equitable development and no development without sustainable management of the environment.",
            "She says plantations destroyed biodiversity and that a just income could not be guaranteed.",
            "She says international trade controlled export prices, so a reasonable and just income could not be guaranteed.",
            "She blames forest clearing, commercial farming, and international trade, not population growth."],
          "easy"),
        M(2, "t93-s1", "Causation", "According to Maathai, rural women could not meet their basic needs mainly because",
          ["their land was degraded and cash crops replaced food crops", "their husbands had left for factory jobs in the cities", "the government had banned cutting firewood in the forests", "a drought caused by climate change had ruined their harvests"],
          ["Correct. She names the degradation of their environment and commercial farming that replaced household food crops.",
            "She does not mention men leaving for the cities.",
            "She says women lacked firewood because forests were cleared, not because of a ban.",
            "She does not mention drought or climate change."],
          "easy"),
        M(3, "t93-s1", "Sourcing and situation", "Maathai's experience as an activist jailed by her own government most likely shaped her emphasis on",
          ["democratic space as a condition for development", "rural women's need for firewood and clean water", "international trade as the cause of low farm incomes", "commercial plantations as the path to national growth"],
          ["Correct. Having been jailed for protest, she links environmental management to a \"democratic and peaceful space.\"",
            "She does stress these needs, but they come from rural women's experience, not from her own jailing by the state.",
            "She does mention export prices, but that point concerns trade, not her treatment by her own government.",
            "She criticizes the plantations for destroying biodiversity and water."],
          "difficult"),
        M(4, "t93-s1", "Comparison", "Maathai's view differed from that of supporters of rapid industrial development in the 1950s and 1960s in that she",
          ["saw a healthy environment as the basis of development", "rejected economic development as harmful to rural women", "trusted international trade to raise small farmers' incomes", "favored large state projects such as dams to supply water"],
          ["Correct. She argues that development depends on sustainable management of the environment, while many earlier planners treated nature as a resource to use up.",
            "She calls for \"equitable development,\" so she did not reject development itself.",
            "She says international trade kept a just income from being guaranteed.",
            "The Green Belt Movement planted trees through local women's groups; she does not call for large state projects."],
          "difficult"),
        // ===== Set 2: Environmental disasters (map) =====
        M(5, "t93-s2", "Developments and processes", "Taken together, the events on the map best illustrate which development after 1900?",
          ["Technologies that raised output also caused severe harm.", "Environmental damage stayed within Western Europe's old industrial states.", "Environmental disasters grew rarer after the 1950s as technology improved.", "Most disasters came from natural forces rather than human activity."],
          ["Correct. A chemical factory, irrigation for cotton, a pesticide plant, and two nuclear power plants all caused the harm shown.",
            "None of the events on the map is in Western Europe.",
            "The map's events run from 1956 to 2011.",
            "Each event came from a factory, a farm plan, or a power plant."],
          "easy"),
        M(6, "t93-s2", "Comparison", "The two events in the Soviet Union shown on the map best support which claim?",
          ["Planned communist economies also caused major environmental damage.", "The Soviet Union avoided the environmental costs of industry.", "Soviet damage came mainly from nuclear weapons tests.", "Soviet damage began only after foreign companies were let in."],
          ["Correct. The Aral Sea and Chernobyl were both the results of Soviet state projects, while Minamata and Bhopal came from private companies in Japan and India.",
            "The map shows two disasters in the Soviet Union.",
            "The Aral Sea shrank because of irrigation, and Chernobyl was a power plant, not a weapons test.",
            "Both Soviet events came from state projects of a closed, planned economy."],
          "moderate"),
        M(7, "t93-s2", "Causation", "The two events marked with an X on the map most directly fueled which debate?",
          ["Whether nuclear power's benefits outweighed its dangers", "Whether pesticides should be made in poorer countries", "Whether rivers should be diverted to irrigate cotton", "Whether factories could dump mercury into coastal bays"],
          ["Correct. After Chernobyl and Fukushima, several countries slowed or ended nuclear power; Germany decided in 2011 to close all its reactors.",
            "That debate fits Bhopal, which is marked with a dot.",
            "That debate fits the Aral Sea, which is marked with a dot.",
            "That debate fits Minamata, which is marked with a dot."],
          "moderate"),
        M(8, "t93-s2", "Continuity and change", "The dates on the map, from 1956 to 2011, best support which conclusion?",
          ["Industrial dangers persisted even as environmental movements grew.", "Environmental disasters ended with the Cold War in 1991.", "Environmental disasters struck only countries with low incomes.", "Environmental disasters moved from Asia to Europe over time."],
          ["Correct. New disasters kept happening for more than fifty years, even as environmental groups and laws grew.",
            "Fukushima came in 2011, twenty years after the Soviet Union ended.",
            "Japan, a wealthy country, had two of the events on the map.",
            "The latest event on the map, Fukushima in 2011, is in Asia, as is the earliest, Minamata in 1956."],
          "moderate"),
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

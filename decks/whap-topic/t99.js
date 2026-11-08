// Topic 9.9 Quiz: Continuity and Change in a Globalized World
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why) => ({ id: "t99-m0" + n, skill: "u9", type: "mcq", set, topic: "9.9", reasoning, question, choices, why, answer: 0 });
const Q = (sub, prompt, earns, yes, no, example, notExample) => ({ id: "t99-q1" + sub, skill: "u9", type: "fr", set: "t99-s3", part: "SAQ 1", sub, topic: "9.9", lead: SAQ, prompt, earns, yes, no, example, notExample });

export const sets = {
  "t99-s1": {
    id: "t99-s1", name: "Kofi Annan's Nobel lecture, 2001", intro: ONE,
    sources: [{ title: "Source", blocks: [
      { p: "Today, in Afghanistan, a girl will be born. Her mother will hold her and feed her, comfort her and care for her – just as any mother would anywhere in the world. In these most basic acts of human nature, humanity knows no divisions. But to be born a girl in today's Afghanistan is to begin life centuries away from the prosperity that one small part of humanity has achieved. ..." },
      { p: "We have entered the third millennium through a gate of fire. If today, after the horror of 11 September, we see better, and we see further – we will realize that humanity is indivisible. New threats make no distinction between races, nations or regions. ..." },
      { p: "The 20th century was perhaps the deadliest in human history, devastated by innumerable conflicts, untold suffering, and unimaginable crimes. ... In response to these cataclysms, the leaders of the world came together at mid-century to unite the nations as never before." },
      { p: "... The sovereignty of States must no longer be used as a shield for gross violations of human rights. ..." },
      { cite: "Kofi Annan, Secretary-General of the United Nations, Nobel Lecture, Oslo, December 10, 2001, as published by NobelPrize.org. Annan, from Ghana, and the United Nations shared the Nobel Peace Prize that year. He spoke three months after the attacks of September 11, 2001, and two months after American-led forces began a war in Afghanistan.", url: "https://www.nobelprize.org/prizes/peace/2001/annan/lecture/", kind: "primary" },
    ] }],
  },
  "t99-s2": {
    id: "t99-s2", name: "A world of cities", intro: "Use the passage below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that the growth of cities was one of the largest changes of the 1900s. In 1900, about one person in seven lived in a city; by 2007, more than half of the world's people did. In Europe and North America, most of the shift had happened by 1950. After that, the fastest growth came in Asia, Africa, and Latin America, as better health care lowered death rates and millions of rural people moved to cities in search of work. Cities such as Lagos, Mumbai, Mexico City, and Shanghai grew to more than ten million people. Many newcomers lived in informal settlements without clean water or secure housing, and worked in jobs without contracts. Yet cities also offered schools, hospitals, and wages that rural areas could not." },
      PRACTICE,
    ] }],
  },
  "t99-s3": {
    id: "t99-s3", name: "The financial crisis of 2008", intro: SAQ,
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that the financial crisis of 2008 showed how closely the world's economies had become linked. In the United States, banks made large numbers of risky home loans, which were packaged into securities and sold to investors around the world. When house prices fell, these securities lost value, and in September 2008 the investment bank Lehman Brothers collapsed. Credit froze, stock markets crashed, and world trade fell sharply. Governments in the United States, Europe, and China spent heavily to rescue banks and support their economies, and the leaders of the Group of Twenty, which included large developing economies, met to coordinate a response. Unemployment rose in many countries, and some, such as Greece, faced years of debt crisis. Many people lost trust in banks and in the free-market ideas that had dominated since the 1980s." },
      PRACTICE,
    ] }],
  },
};

export default {
  forms: [
    { id: "t99", name: "Topic 9.9 Quiz: Continuity and Change in a Globalized World", group: "Unit 9: Globalization",
      items: [
        // ===== Set 1: Annan =====
        M(1, "t99-s1", "Claims and evidence in sources", "Annan uses the example of a girl born in Afghanistan mainly to show",
          ["the vast gap between the world's rich and poor", "that Afghanistan was the world's wealthiest country", "that mothers in Afghanistan cared less for their children", "that poverty had ended by 2001"],
          ["Correct. He says she begins life \"centuries away from the prosperity\" of a small part of humanity.",
            "He says the opposite.",
            "He says mothers everywhere care for their children the same way.",
            "He describes continuing poverty."]),
        M(2, "t99-s1", "Continuity and change", "Annan's statement that \"the sovereignty of States must no longer be used as a shield for gross violations of human rights\" represents a change from",
          ["the long-standing principle that states could not interfere in one another's internal affairs", "the Universal Declaration of Human Rights", "the founding of the United Nations", "the Nuremberg trials"],
          ["Correct. He argues that human rights can outweigh the traditional protection of sovereignty.",
            "That declaration already supported human rights.",
            "The UN was founded to promote rights and peace.",
            "Those trials punished violations of human rights."]),
        M(3, "t99-s1", "Contextualization", "The lecture is best understood in the context of",
          ["the September 11 attacks and the beginning of the war in Afghanistan", "the end of the Second World War", "the Cuban Missile Crisis", "the founding of OPEC"],
          ["Correct. He refers to \"the horror of 11 September\" and speaks of Afghanistan.",
            "That ended in 1945.",
            "That was in 1962.",
            "That was in 1960."]),
        M(4, "t99-s1", "Claims and evidence in sources", "Annan's description of the 1900s as \"perhaps the deadliest in human history\" is best supported by",
          ["the tens of millions killed in two world wars and in genocides", "the eradication of smallpox", "the growth of world trade", "the rise in life expectancy"],
          ["Correct. The world wars and mass atrocities killed tens of millions.",
            "This saved lives.",
            "This is an economic change.",
            "This shows improvement."]),
        // ===== Set 2: Cities =====
        M(5, "t99-s2", "Continuity and change", "According to the passage, the main change in where people lived after 1950 was that",
          ["the fastest urban growth shifted to Asia, Africa, and Latin America", "most people moved back to the countryside", "cities in Europe grew fastest", "city growth stopped"],
          ["Correct. After 1950, cities grew fastest outside Europe and North America.",
            "More people moved to cities.",
            "Europe's shift was largely complete by 1950.",
            "Growth continued."]),
        M(6, "t99-s2", "Causation", "According to the passage, a cause of rapid urban growth was",
          ["lower death rates and the migration of rural people seeking work", "falling populations", "the closing of factories", "laws forcing people to leave cities"],
          ["Correct. Better health care and migration drove growth.",
            "Populations grew.",
            "People moved for work.",
            "This is not described."]),
        M(7, "t99-s2", "Comparison", "Urban growth in Asia, Africa, and Latin America after 1950 was most similar to urban growth in Britain during the Industrial Revolution in that both",
          ["drew rural migrants to cities where many lived in crowded, poor housing", "happened without any migration", "ended poverty in cities", "occurred only in capital cities"],
          ["Correct. In both, rapid growth outpaced housing and services.",
            "Both depended on migration.",
            "Poverty remained.",
            "Many cities grew."]),
        M(8, "t99-s2", "Claims and evidence in sources", "Which evidence from the passage best shows that cities offered benefits as well as hardships?",
          ["Cities offered schools, hospitals, and wages that rural areas could not.", "Many newcomers lived without clean water.", "Lagos grew to more than ten million people.", "Many worked without contracts."],
          ["Correct. The passage names advantages of city life.",
            "This is a hardship.",
            "This is a fact about size.",
            "This is a hardship."]),
        // ===== SAQ: 2008 =====
        Q("a", "Identify ONE way the financial crisis of 2008 spread beyond the United States, as described in the passage.",
          "The response names one way from the passage.",
          ["Risky home loans were packaged into securities sold to investors around the world.", "Stock markets crashed and world trade fell sharply.", "Unemployment rose in many countries, and some, such as Greece, faced debt crises."],
          ["\"House prices fell in the United States.\" This happened inside the United States.", "\"Lehman Brothers collapsed.\" This was an American event.", "\"The crisis stayed in the United States.\" This contradicts the passage."],
          "The passage says American home loans were packaged into securities and sold to investors around the world, so when they lost value, banks in many countries suffered.",
          "It spread."),
        Q("b", "Explain ONE way the response to the 2008 crisis showed a change in global economic power.",
          "The response explains a specific change.",
          ["The Group of Twenty, which included China, India, and Brazil, replaced the smaller Group of Eight as the main forum for coordinating the response.", "China's large spending to support its economy helped sustain world demand.", "Developing economies such as China and India recovered faster than many wealthy countries."],
          ["\"Countries responded.\" This explains no change.", "\"The Soviet Union rescued the banks.\" It no longer existed.", "\"Only the United States responded.\" Many countries did."],
          "Leaders of the Group of Twenty, including China, India, and Brazil, met in 2008 and 2009 to coordinate a response. This showed that large developing economies now had a central role in managing the world economy alongside the older industrial powers.",
          "Power changed."),
        Q("c", "Explain ONE continuity in the global economy from the period 1900 to 1945 to the period after 1990.",
          "The response explains a specific continuity across both periods.",
          ["Financial crises in one country could still spread worldwide, as in 1929 and 2008.", "Wealth remained very unequal between industrial and poorer regions.", "Debates continued over how much governments should regulate markets."],
          ["\"The economy existed.\" This explains nothing.", "\"There were no crises after 1945.\" This is false.", "\"The gold standard continued after 1990.\" This is false."],
          "In 1929, a stock market crash in the United States spread to Europe and Latin America through loans and trade. In 2008, a collapse in the American housing market spread through global finance in the same way, showing that crises in a major economy still affected the whole world.",
          "Things stayed the same."),
      ] },
  ],
};

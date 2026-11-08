// Topic 9.9 Quiz: Continuity and Change in a Globalized World
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why, difficulty) => ({ id: "t99-m0" + n, skill: "u9", type: "mcq", set, topic: "9.9", reasoning, difficulty, question, choices, why, answer: 0 });
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
          ["the vast gap between the world's rich and poor", "that war in Afghanistan had ended its prosperity", "that mothers' care differs from one culture to another", "that terrorism began in Afghanistan's poorest regions"],
          ["Correct. He says she begins life \"centuries away from the prosperity\" that a small part of humanity has achieved.",
            "He describes a gap of \"centuries,\" not prosperity lost to a recent war.",
            "He says the mother cares for her child \"just as any mother would anywhere in the world.\"",
            "He does not discuss where terrorism began; the girl's example is about inequality."],
          "easy"),
        M(2, "t99-s1", "Continuity and change", "Annan's statement that \"the sovereignty of States must no longer be used as a shield for gross violations of human rights\" represents a change from",
          ["the rule that states stay out of others' internal affairs", "the list of rights in the Universal Declaration of 1948", "the war crimes trials held at Nuremberg after 1945", "the UN Charter's call for respect for human rights everywhere"],
          ["Correct. He argues that protecting people from gross abuses can outweigh the traditional protection of a state's sovereignty.",
            "The declaration already supported human rights, so his statement builds on it rather than departing from it.",
            "The Nuremberg trials already punished leaders for atrocities, so his statement continues that idea.",
            "The Charter already called for respect for human rights; what he challenges is the shield of sovereignty."],
          "difficult"),
        M(3, "t99-s1", "Contextualization", "The lecture is best understood in the context of",
          ["the September 11 attacks and the war in Afghanistan", "the Soviet war in Afghanistan in the 1980s", "the end of the Cold War and the breakup of the Soviet Union", "the Iraq War and the fall of Saddam Hussein"],
          ["Correct. He refers to \"the horror of 11 September,\" and he spoke two months after American-led forces entered Afghanistan.",
            "The Soviet war in Afghanistan ended in 1989, twelve years before the lecture.",
            "The Soviet Union broke up in 1991, ten years earlier, and he names the attacks of September 11 instead.",
            "The Iraq War began in 2003, after the lecture."],
          "moderate"),
        M(4, "t99-s1", "Claims and evidence in sources", "Annan's description of the 1900s as \"perhaps the deadliest in human history\" is best supported by",
          ["the tens of millions killed in world wars and genocides", "the rise in world population from 1.6 to 6 billion", "the eradication of smallpox by a UN campaign", "the fall in world trade after the end of the Cold War"],
          ["Correct. The two world wars and mass atrocities such as the Holocaust killed tens of millions.",
            "Population growth reflects falling death rates, not deadliness.",
            "Smallpox eradication saved millions of lives.",
            "World trade grew after the Cold War, and trade figures say nothing about deaths."],
          "easy"),
        // ===== Set 2: Cities =====
        M(5, "t99-s2", "Continuity and change", "According to the passage, the main change in where people lived after 1950 was that",
          ["city growth was fastest in Asia, Africa, and Latin America", "Europe and North America saw their fastest growth in cities", "large numbers of city dwellers moved back to farms", "most of the world's people came to live in cities by 1960"],
          ["Correct. After 1950, cities grew fastest outside Europe and North America.",
            "The passage says most of Europe and North America's shift had happened by 1950.",
            "The passage describes millions moving from the countryside to cities.",
            "The passage says more than half the world's people lived in cities only by 2007."],
          "moderate"),
        M(6, "t99-s2", "Causation", "According to the passage, a cause of rapid urban growth was",
          ["lower death rates and rural migrants seeking work", "the spread of secure, formal housing in cities", "state plans that moved people to new capitals", "the end of European emigration to the Americas"],
          ["Correct. The passage names better health care, which lowered death rates, and migration from the countryside in search of work.",
            "The passage says many newcomers lacked secure housing.",
            "The passage does not mention government resettlement programs.",
            "The passage does not discuss emigration from Europe."],
          "easy"),
        M(7, "t99-s2", "Comparison", "Urban growth in Asia, Africa, and Latin America after 1950 was most similar to urban growth in Britain during the Industrial Revolution in that both",
          ["drew rural migrants into crowded, poor housing", "were driven mainly by new factory machinery", "came mostly from immigrants crossing oceans", "ended urban poverty within one generation"],
          ["Correct. In both, rural people moved to cities faster than housing and services could be built.",
            "Factories drove British growth, but the passage says many newcomers after 1950 worked in jobs without contracts, not mainly in factories.",
            "The passage says the migrants came from the countryside of their own countries.",
            "The passage describes informal settlements and insecure work, so poverty remained."],
          "difficult"),
        M(8, "t99-s2", "Claims and evidence in sources", "Which evidence from the passage best shows that cities offered benefits as well as hardships?",
          ["Cities had schools, hospitals, and better wages.", "Many newcomers lived in settlements without clean water.", "Lagos and Mumbai grew to more than ten million people.", "Better health care lowered death rates in poorer regions."],
          ["Correct. The passage names advantages of city life alongside its hardships.",
            "This is a hardship.",
            "This describes size, not a benefit.",
            "This explains population growth in general, not a benefit of living in a city."],
          "difficult"),
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

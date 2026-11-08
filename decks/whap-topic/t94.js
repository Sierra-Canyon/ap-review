// Topic 9.4 Quiz: Economics in the Global Age
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why) => ({ id: "t94-m0" + n, skill: "u9", type: "mcq", set, topic: "9.4", reasoning, question, choices, why, answer: 0 });
const Q = (sub, prompt, earns, yes, no, example, notExample) => ({ id: "t94-q1" + sub, skill: "u9", type: "fr", set: "t94-s3", part: "SAQ 1", sub, topic: "9.4", lead: SAQ, prompt, earns, yes, no, example, notExample });

export const sets = {
  "t94-s1": {
    id: "t94-s1", name: "Margaret Thatcher to her party, 1980", intro: ONE,
    sources: [{ title: "Source", blocks: [
      { p: "... Keith Joseph, David Howell, John Nott and Norman Fowler have begun to break down the monopoly powers of nationalisation. Thanks to them British Aerospace will soon be open to private investment. The monopoly of the Post Office and British Telecommunications is being diminished. The barriers to private generation of electricity for sale have been lifted. ..." },
      { p: "... Michael Heseltine has given to millions—yes, millions—of council tenants the right to buy their own homes. ..." },
      { p: "The Left continues to refer with relish to the death of capitalism. Well, if this is the death of capitalism, I must say that it is quite a way to go." },
      { p: "But all this will avail us little unless we achieve our prime economic objective—the defeat of inflation. Inflation destroys nations and societies as surely as invading armies do. Inflation is the parent of unemployment. It is the unseen robber of those who have saved. ..." },
      { cite: "Margaret Thatcher, prime minister of the United Kingdom, speech to the Conservative Party Conference, Brighton, October 10, 1980 (\"the lady's not for turning\"), as published by the Margaret Thatcher Foundation. The ministers named were members of her cabinet. Council tenants rented homes owned by local governments. When she spoke, British unemployment had passed two million and inflation was about 15 percent.", url: "https://www.margaretthatcher.org/document/104431", kind: "primary" },
    ] }],
  },
  "t94-s2": {
    id: "t94-s2", name: "South Korea's export economy", intro: "Use the passage below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that South Korea's rise shows how a state could guide a poor country into the global economy. In 1960, after Japanese colonial rule and the Korean War, South Korea was one of the poorest countries in the world. Under the military ruler Park Chung-hee, who took power in 1961, the government directed cheap credit to large family-owned business groups, the chaebol, such as Samsung and Hyundai, and rewarded them for meeting export targets. South Korea moved from exporting wigs and textiles in the 1960s to steel and ships in the 1970s and cars and electronics in the 1980s. Labor unions were tightly controlled and political opponents were jailed. By the 1990s, South Korea had become a wealthy industrial democracy. Taiwan, Singapore, and Hong Kong followed similar export-led paths." },
      PRACTICE,
    ] }],
  },
  "t94-s3": {
    id: "t94-s3", name: "India opens its economy, 1991", intro: SAQ,
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that 1991 was a turning point for India's economy. Since independence, India's governments had followed a mixed economy with large state-owned industries, high tariffs, and a system of licenses that controlled what private companies could produce. Growth was slow. In 1991, after oil prices rose during the Gulf War and India nearly ran out of foreign currency, the government of P. V. Narasimha Rao and his finance minister, Manmohan Singh, cut tariffs, ended most licensing, welcomed foreign investment, and sold shares in some state companies. India's economy grew much faster in the following decades, and cities such as Bangalore became centers of software and outsourced services. Critics pointed out that many farmers and rural workers gained little, and inequality grew." },
      PRACTICE,
    ] }],
  },
};

export default {
  forms: [
    { id: "t94", name: "Topic 9.4 Quiz: Economics in the Global Age", group: "Unit 9: Globalization",
      items: [
        // ===== Set 1: Thatcher =====
        M(1, "t94-s1", "Claims and evidence in sources", "Thatcher's policies described in the speech best illustrate which economic approach?",
          ["Reducing the state's role in the economy through privatization and competition", "Expanding state ownership of industry", "Central planning of production", "Raising tariffs to protect British industry"],
          ["Correct. She describes opening state monopolies to private investment and selling council homes.",
            "She describes breaking down nationalization.",
            "She favors markets.",
            "She does not mention tariffs."]),
        M(2, "t94-s1", "Contextualization", "Thatcher's focus on defeating inflation is best understood in the context of",
          ["the economic troubles of the 1970s, when oil shocks brought high inflation and slow growth to many industrial countries", "the Great Depression of the 1930s", "the boom of the 1950s", "Britain's entry into the First World War"],
          ["Correct. Stagflation in the 1970s discredited earlier policies.",
            "Prices fell in the Depression.",
            "The 1950s saw growth.",
            "That was in 1914."]),
        M(3, "t94-s1", "Comparison", "Thatcher's policies were most similar to those of which other leader?",
          ["Ronald Reagan in the United States, who cut taxes and regulations in the 1980s", "Julius Nyerere in Tanzania", "Mao Zedong in China", "Clement Attlee in Britain, who nationalized industries after 1945"],
          ["Correct. Both promoted free markets and a smaller state role.",
            "Nyerere nationalized industries.",
            "Mao built a planned economy.",
            "Attlee nationalized the industries Thatcher sold."]),
        M(4, "t94-s1", "Continuity and change", "Thatcher's policies most directly reversed which earlier development in Britain?",
          ["The nationalization of industries and expansion of the state after the Second World War", "The Industrial Revolution", "The abolition of the slave trade", "Britain's entry into the First World War"],
          ["Correct. Labour governments had nationalized coal, railways, and other industries after 1945.",
            "She did not reverse industrialization.",
            "This is unrelated.",
            "This is unrelated."]),
        // ===== Set 2: South Korea =====
        M(5, "t94-s2", "Developments and processes", "South Korea's path described in the passage is best described as",
          ["state-guided, export-led industrialization", "a free market with no government role", "a self-reliant economy closed to trade", "a Soviet-style planned economy"],
          ["Correct. The state directed credit to firms that met export targets.",
            "The government played a large role.",
            "It depended on exports.",
            "Private firms owned industry."]),
        M(6, "t94-s2", "Claims and evidence in sources", "Which evidence from the passage best supports the claim that South Korea's growth came at a political cost?",
          ["Labor unions were tightly controlled and political opponents were jailed.", "South Korea exported wigs in the 1960s.", "Samsung and Hyundai grew.", "Taiwan followed a similar path."],
          ["Correct. Growth under Park came with repression.",
            "This describes exports.",
            "This describes firms.",
            "This describes another country."]),
        M(7, "t94-s2", "Comparison", "South Korea's development differed from Tanzania's under the Arusha Declaration mainly in that South Korea",
          ["sought growth through exports to world markets rather than self-reliance", "relied mainly on village agriculture", "rejected foreign trade", "nationalized all private firms"],
          ["Correct. South Korea tied its growth to exports, while Tanzania stressed self-reliance.",
            "It industrialized.",
            "It depended on trade.",
            "Private chaebol led industry."]),
        M(8, "t94-s2", "Continuity and change", "South Korea's shift from wigs and textiles to cars and electronics best shows",
          ["movement into more advanced and valuable industries over time", "a decline in industry", "a return to farming", "an end to exports"],
          ["Correct. It climbed from simple goods to complex manufacturing.",
            "Industry grew.",
            "It industrialized.",
            "Exports grew."]),
        // ===== SAQ: India =====
        Q("a", "Identify ONE economic reform India adopted in 1991, as described in the passage.",
          "The response names one reform from the passage.",
          ["India cut tariffs.", "India ended most of the license system for private companies.", "India welcomed foreign investment or sold shares in some state companies."],
          ["\"India nationalized industries in 1991.\" It moved the other way.", "\"India ran out of currency.\" This is a cause.", "\"Bangalore became a software center.\" This is an effect."],
          "The passage says India ended most of its licensing system, which had controlled what private companies could produce.",
          "India reformed."),
        Q("b", "Explain ONE cause of India's economic reforms of 1991.",
          "The response explains a specific cause.",
          ["A currency crisis, after oil prices rose during the Gulf War, left India nearly unable to pay for imports.", "Decades of slow growth under licenses and high tariffs convinced leaders the old system had failed.", "The collapse of the Soviet Union, India's major trading partner, and the success of East Asian economies made market reforms more attractive."],
          ["\"India wanted to change.\" This explains nothing.", "\"India joined the Warsaw Pact.\" This is false.", "\"India's economy was growing too fast.\" Growth was slow."],
          "In 1991, rising oil prices during the Gulf War drained India's foreign currency, and the government nearly could not pay for imports. To get emergency loans and restore confidence, it cut tariffs and ended licensing.",
          "There was a crisis."),
        Q("c", "Explain ONE effect of the spread of free-market policies on the world economy in the period 1980 to 2010.",
          "The response explains a specific effect.",
          ["Global trade and investment grew rapidly as countries lowered barriers.", "Inequality grew within many countries as some groups gained much more than others.", "Countries such as China and India grew quickly and lifted millions out of poverty."],
          ["\"Markets changed.\" This is too vague.", "\"Trade declined everywhere.\" This is false.", "\"All countries nationalized industry.\" This is false."],
          "As countries such as China and India opened to foreign investment and trade, their economies grew rapidly. Hundreds of millions of people moved out of extreme poverty, and these countries became major exporters.",
          "There were effects."),
      ] },
  ],
};

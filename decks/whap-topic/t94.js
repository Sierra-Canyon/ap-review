// Topic 9.4 Quiz: Economics in the Global Age
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
import { maps } from "../whap/maps.js";
const MAP = "Map drawn for this review from Natural Earth land outlines (public domain). Places and dates checked against ";
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
    id: "t94-s2", name: "China opens its coast, 1979 to 1988", intro: "Use the map below to answer the questions that follow.", label: "Map",
    sources: [{ title: "Map", blocks: [
      { svg: maps["u9-sez"], caption: "China opens its coast: special economic zones, 1979 to 1988, and the fourteen coastal cities opened in 1984" },
      { cite: MAP + "Encyclopaedia Britannica, \"Shenzhen\"; Wikipedia, \"Special economic zones of China\"; and the Legislative Council of Hong Kong, Research Office, \"Free economic and trade zones in the Mainland\" (2015).", kind: "map" },
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
        // ===== Set 2: China's coastal opening (map) =====
        M(5, "t94-s2", "Developments and processes", "The map best illustrates which economic policy?",
          ["China's opening to foreign investment and trade under Deng Xiaoping, which began in a few coastal zones", "Mao Zedong's Great Leap Forward, which organized peasants into communes to speed up industry", "The Qing dynasty's opening of ports to foreign trade after its defeats in the Opium Wars", "A policy of self-reliance that closed China's ports to foreign companies"],
          ["Correct. After 1978, Deng's government let foreign firms invest in special economic zones, then opened more coastal cities.",
            "The Great Leap Forward (1958 to 1962) was a push for communes and backyard steel, not for foreign investment, and the map's dates are 1979 to 1988.",
            "The treaty ports were forced on the Qing in the 1840s to 1860s; the map shows zones opened in 1979 to 1988.",
            "The map shows ports being opened to foreign business, the opposite of closing them."]),
        M(6, "t94-s2", "Causation", "The location of the first special economic zones shown on the map is best explained by",
          ["their nearness to Hong Kong and Taiwan, sources of capital and trade links with the world economy", "their distance from the sea, which protected them from foreign influence", "their position next to the oil fields of northern China", "their nearness to the capital, which let the government watch them closely"],
          ["Correct. Shenzhen borders Hong Kong and Xiamen faces Taiwan, so investors and goods could move in easily.",
            "All four zones are on the southern coast.",
            "The first zones are in the far south, not the north.",
            "The first zones are on the southern coast, far from Beijing."]),
        M(7, "t94-s2", "Continuity and change", "Which change between 1980 and 1984 is shown on the map?",
          ["Opening to foreign investment spread from a few southern zones to port cities along the whole coast.", "The special economic zones were closed and replaced by state farms.", "Foreign investment moved from the coast to cities in the interior.", "Hong Kong was returned to China and became a special economic zone."],
          ["Correct. The fourteen cities of 1984 run from Dalian and Tianjin in the north to Beihai in the south.",
            "The zones stayed open, and Hainan was added in 1988.",
            "The cities opened in 1984 are all on the coast.",
            "Hong Kong stayed British until 1997, as the map notes."]),
        M(8, "t94-s2", "Comparison", "The ports on the map differed from the treaty ports of the 1800s mainly in that the later ports were",
          ["opened by China's own government on terms it chose", "opened only to trade with the Soviet Union", "governed by foreign powers under extraterritoriality", "closed to all foreign goods"],
          ["Correct. Britain and other powers forced the treaty ports on the Qing, while Deng's government chose which places to open.",
            "The zones sought investment from Hong Kong, Taiwan, Japan, and the West.",
            "This describes the treaty ports, where foreigners lived under their own laws.",
            "The zones were set up to bring in foreign trade and investment."]),
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

// Topic 9.4 Quiz: Economics in the Global Age
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
import { maps } from "../whap/maps.js";
const MAP = "Map drawn for this review from Natural Earth land outlines (public domain). Places and dates checked against ";
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why, difficulty) => ({ id: "t94-m0" + n, skill: "u9", type: "mcq", set, topic: "9.4", reasoning, difficulty, question, choices, why, answer: 0 });
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
          ["Shrinking the state's role through privatization", "Expanding state ownership of key national industries", "Raising tariffs to shield British industry from imports", "Using public spending to create jobs for the unemployed"],
          ["Correct. She describes opening state monopolies to private investment and selling council homes to tenants.",
            "She describes breaking down \"the monopoly powers of nationalisation,\" the opposite.",
            "She does not mention tariffs; her policies favored markets and competition.",
            "She says inflation is \"the parent of unemployment,\" so she puts fighting inflation ahead of spending to create jobs."],
          "easy"),
        M(2, "t94-s1", "Contextualization", "Thatcher's focus on defeating inflation is best understood in the context of",
          ["the oil shocks and stagflation of the 1970s", "the deflation and bank failures of the Great Depression", "the steady growth of the postwar boom in the 1950s", "the debt crisis that struck Latin America after 1982"],
          ["Correct. Oil price shocks in 1973 and 1979 brought high inflation and slow growth to industrial countries, and inflation in Britain was about 15 percent when she spoke.",
            "Prices fell during the Depression, so it did not make inflation the main problem.",
            "The 1950s brought low inflation and growth, not the crisis she describes.",
            "The Latin American debt crisis began in 1982, two years after the speech."],
          "moderate"),
        M(3, "t94-s1", "Comparison", "Thatcher's policies were most similar to those of which other leader?",
          ["Ronald Reagan, who cut taxes and regulation in the 1980s", "Julius Nyerere, who built African socialism in Tanzania", "Clement Attlee, who nationalized coal and railways in Britain", "Franklin Roosevelt, who expanded federal programs in the 1930s"],
          ["Correct. Both promoted free markets and a smaller role for the state.",
            "Nyerere nationalized industries and collectivized villages.",
            "Attlee's Labour government nationalized the kinds of industries Thatcher sold.",
            "Roosevelt's New Deal enlarged the government's role in the economy."],
          "easy"),
        M(4, "t94-s1", "Continuity and change", "Thatcher's policies most directly reversed which earlier development in Britain?",
          ["The postwar nationalization of industry and growth of the state", "The repeal of the Corn Laws and the turn to free trade in the 1840s", "Britain's entry into the European Economic Community in 1973", "The decolonization of most of Britain's African empire"],
          ["Correct. Labour governments after 1945 nationalized coal, railways, and other industries, which Thatcher's governments sold off.",
            "Thatcher favored free markets, so she did not reverse the turn to free trade.",
            "Britain stayed in the European Community throughout her time in office.",
            "Her policies concerned the British economy, not a return to empire."],
          "difficult"),
        // ===== Set 2: China's coastal opening (map) =====
        M(5, "t94-s2", "Developments and processes", "The map best illustrates which economic policy?",
          ["Deng Xiaoping's opening of coastal zones to foreign investment", "Mao Zedong's Great Leap Forward, which formed rural communes", "The Qing opening of treaty ports after the Opium Wars", "A policy of self-reliance that closed China's ports to foreign firms"],
          ["Correct. After 1978, Deng's government let foreign firms invest in special economic zones, then opened more coastal cities.",
            "The Great Leap Forward (1958 to 1962) was a push for communes and backyard steel, not for foreign investment, and the map's dates are 1979 to 1988.",
            "The treaty ports were forced on the Qing in the 1840s to 1860s; the map shows zones opened in 1979 to 1988.",
            "The map shows ports being opened to foreign business, the opposite of closing them."],
          "easy"),
        M(6, "t94-s2", "Causation", "The location of the first special economic zones shown on the map is best explained by",
          ["their nearness to Hong Kong, Macau, and Taiwan", "their history as treaty ports forced open by Britain", "their nearness to Beijing, so leaders could watch them", "their nearness to the oil fields of northern China"],
          ["Correct. Shenzhen borders Hong Kong, Zhuhai borders Macau, and Xiamen faces Taiwan, so investors, money, and goods could move in easily.",
            "Xiamen had been a treaty port, but Shenzhen and Zhuhai were small towns; what all four zones share is nearness to Hong Kong, Macau, or Taiwan.",
            "The first zones are on the far southern coast, far from Beijing.",
            "The first zones are in the far south, not the north."],
          "difficult"),
        M(7, "t94-s2", "Continuity and change", "Which change between 1980 and 1984 is shown on the map?",
          ["Opening spread from a few southern zones along the whole coast.", "The zones were closed and replaced by state-run farms.", "Foreign investment moved from the coast into interior cities.", "Hong Kong returned to China and became a special zone."],
          ["Correct. The fourteen cities of 1984 run from Dalian and Tianjin in the north to Beihai in the south.",
            "The zones stayed open, and Hainan was added in 1988.",
            "The cities opened in 1984 are all on the coast.",
            "Hong Kong stayed British until 1997, as the map notes."],
          "easy"),
        M(8, "t94-s2", "Comparison", "The ports on the map differed from the treaty ports of the 1800s mainly in that the later ports were",
          ["opened by China's government on terms it chose", "open only to trade with the Soviet bloc", "governed by foreign powers under extraterritoriality", "placed on the coast to reach overseas markets"],
          ["Correct. Britain and other powers forced the treaty ports on the Qing, while Deng's government chose which places to open.",
            "The zones sought investment from Hong Kong, Taiwan, Japan, and the West.",
            "This describes the treaty ports, where foreigners lived under their own laws.",
            "The treaty ports were also on the coast for overseas trade, so this is a similarity, not a difference."],
          "difficult"),
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

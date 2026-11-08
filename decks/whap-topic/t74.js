// Topic 7.4 Quiz: Economy in the Interwar Period
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why, difficulty) => ({ id: "t74-m0" + n, skill: "u7", type: "mcq", set, topic: "7.4", reasoning, difficulty, question, choices, why, answer: 0 });
const Q = (sub, prompt, earns, yes, no, example, notExample) => ({ id: "t74-q1" + sub, skill: "u7", type: "fr", set: "t74-s3", part: "SAQ 1", sub, topic: "7.4", lead: SAQ, prompt, earns, yes, no, example, notExample });

export const sets = {
  "t74-s1": {
    id: "t74-s1", name: "Germany asks for relief from reparations, 1931", intro: ONE,
    sources: [{ title: "Source", blocks: [
      { p: "As early as the beginning of June of this year the German Government became convinced that, in spite of the most severe retrenchment in Government expenditure and repeated increases in the burden of taxation, it would be incapable of continuing the payment of the annuities under the New Plan. The economic and financial situation of Germany was at the time already most gravely threatened. ..." },
      { p: "This decision was followed on June 21st by the declaration of the President of the United States of America, proposing the postponement during one year of all payments on intergovernmental debts, reparations and relief debts. The purpose of the far-sighted initiative thus taken was, in the words of the declaration, to assist in the re-establishment of confidence, thus forwarding political peace and economic stability in the world; the debtor countries were to be given time to recover their national prosperity. The hope that this proposal would bring about a decisive turn in the world crisis was not realized. ..." },
      { p: "In the intervening months the economic and financial situation of Germany has become exceedingly critical. ... In other countries also the pressure of the crisis has had a most serious effect. The world has come to realize in an increasing measure, the inter-relationship of the various financial problems. ..." },
      { p: "Since the New Plan was framed, the economic and financial situation in the world, and particularly in Germany, has been fundamentally altered by a crisis without parallel." },
      { cite: "Memorandum of the German government to the Bank for International Settlements, Berlin, November 19, 1931, signed by Finance Minister Hermann Dietrich, as published in Foreign Relations of the United States, 1931, volume I, document 263 (Office of the Historian, U.S. Department of State). The \"New Plan\" was the Young Plan of 1929 and 1930, which set Germany's reparations payments for the First World War. The U.S. president was Herbert Hoover.", url: "https://history.state.gov/historicaldocuments/frus1931v01/d263", kind: "primary" },
    ] }],
  },
  "t74-s2": {
    id: "t74-s2", name: "Fascist Italy's economy", intro: "Use the passage below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that Benito Mussolini's Fascist government in Italy tried to build an economy that was neither liberal capitalism nor socialism. After taking power in 1922, the Fascists banned independent trade unions and strikes. In the late 1920s and 1930s, they organized employers and workers into state-controlled \"corporations\" for each branch of the economy, which were supposed to settle wages and prices in the national interest. When the Depression struck, the government created the Institute for Industrial Reconstruction in 1933, which took over failing banks and large shares of Italy's steel, shipbuilding, and electricity companies. Mussolini also launched campaigns to grow more wheat and to make Italy self-sufficient, especially after the League of Nations placed sanctions on Italy in 1935. In practice, big business kept much of its power, while workers' real wages fell." },
      PRACTICE,
    ] }],
  },
  "t74-s3": {
    id: "t74-s3", name: "The collapse of world trade", intro: SAQ,
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that governments made the Great Depression worse by closing their markets to one another. In 1930, the United States passed the Smoot-Hawley Tariff, which raised duties on thousands of imported goods. Other countries answered with tariffs of their own. In 1932, at a conference in Ottawa, Britain and its dominions agreed to favor trade within the empire through a system of imperial preference. France, Japan, and others built trading blocs around their own colonies and spheres. Between 1929 and 1933, the value of world trade fell by about two thirds. Countries that exported mainly raw materials or food, such as Argentina, Brazil, and the colonies of Africa and Southeast Asia, were hit especially hard as prices for their goods collapsed." },
      PRACTICE,
    ] }],
  },
};

export default {
  forms: [
    { id: "t74", name: "Topic 7.4 Quiz: Economy in the Interwar Period", group: "Unit 7: Global Conflict",
      items: [
        // ===== Set 1: The German memorandum =====
        M(1, "t74-s1", "Sourcing and situation", "The main purpose of the memorandum was most likely to",
          ["argue that the crisis made payments impossible", "announce that Germany would pay its reparations early", "thank Hoover for canceling all reparations for good", "propose a German alliance with Britain against France"],
          ["Correct. It argues that a \"crisis without parallel\" has made the payments under the New Plan impossible.",
            "It says Germany cannot continue the payments at all.",
            "Hoover proposed only a one-year postponement, and the memorandum says it did not end the crisis.",
            "It asks for financial relief, not an alliance."], "moderate"),
        M(2, "t74-s1", "Contextualization", "The memorandum is best understood in the context of",
          ["the Great Depression and bank failures of 1931", "the hyperinflation that struck Germany in 1923", "the boom fueled by American loans in the mid-1920s", "Germany's rearmament after Hitler took power in 1933"],
          ["Correct. American lending to Germany had stopped, and German and Austrian banks collapsed in 1931.",
            "Hyperinflation came in 1923, eight years before this memorandum.",
            "The memorandum describes a crisis, not a boom.",
            "Hitler took power in 1933, after this memorandum."], "easy"),
        M(3, "t74-s1", "Claims and evidence in sources", "Which statement from the memorandum best supports the claim that the Depression was a global crisis?",
          ["\"In other countries also the pressure of the crisis has had a most serious effect.\"", "\"the German Government became convinced that ... it would be incapable of continuing the payment\"", "\"the postponement during one year of all payments on intergovernmental debts\"", "\"the economic and financial situation of Germany has become exceedingly critical\""],
          ["Correct. It says the crisis has struck other countries as well, not only Germany.",
            "This concerns only Germany.",
            "This describes Hoover's proposal to postpone debts, not the spread of the crisis to other countries.",
            "This concerns only Germany."], "difficult"),
        M(4, "t74-s1", "Causation", "The economic crisis described in the memorandum most directly contributed to which development in Germany?",
          ["The Nazis' rise as unemployment soared", "The return of the kaiser to the German throne", "Germany's entry into the League of Nations", "The French occupation of the Ruhr valley"],
          ["Correct. Mass unemployment discredited the Weimar Republic and helped Hitler win votes and take power in 1933.",
            "The monarchy was never restored after 1918.",
            "Germany joined the League in 1926, before the crisis, and Hitler took it out in 1933.",
            "France occupied the Ruhr in 1923 over missed reparations, years before this crisis."], "easy"),
        // ===== Set 2: Fascist Italy =====
        M(5, "t74-s2", "Developments and processes", "The Fascist \"corporations\" described in the passage best illustrate which development of the interwar period?",
          ["Authoritarian states took more control of their economies", "Governments returned to laissez-faire policies", "Trade unions gained power to bargain over wages", "Italy collectivized farms on the Soviet model"],
          ["Correct. The state organized employers and workers into corporations meant to settle wages and prices.",
            "The Italian state intervened more, not less.",
            "The Fascists banned independent unions and strikes.",
            "Italy did not collectivize farms; it organized industries into corporations."], "easy"),
        M(6, "t74-s2", "Comparison", "The Institute for Industrial Reconstruction is most similar to which other response to the Depression?",
          ["Agencies of the New Deal in the United States", "The United States' Smoot-Hawley Tariff of 1930", "Britain's return to the gold standard in 1925", "The Dawes Plan's loans to Germany in 1924"],
          ["Correct. Both expanded the state's role to rescue the economy, though the New Deal worked within a democracy.",
            "A tariff restricts trade but does not take over banks or companies.",
            "This came before the Depression.",
            "The Dawes Plan rescheduled reparations in the 1920s, before the Depression."], "moderate"),
        M(7, "t74-s2", "Claims and evidence in sources", "Which evidence from the passage best supports the claim that Fascist policies favored employers over workers?",
          ["Unions and strikes were banned, and real wages fell.", "The state took over steel and shipbuilding firms.", "Corporations were to set wages in the national interest.", "The League placed sanctions on Italy in 1935."],
          ["Correct. Workers lost their means of bargaining and their real wages fell, while big business kept much of its power.",
            "Taking over failing firms shows state intervention, not that employers were favored.",
            "This states the corporations' official aim, not who actually benefited.",
            "This concerns foreign policy."], "difficult"),
        M(8, "t74-s2", "Causation", "Italy's drive for economic self-sufficiency after 1935 was most directly linked to",
          ["League sanctions after its invasion of Ethiopia", "its Stresa Front partnership with Britain and France", "the U.S. Smoot-Hawley Tariff on European goods", "the end of the Depression in Europe by 1934"],
          ["Correct. The passage says the campaigns grew especially after the League placed sanctions on Italy in 1935 for invading Ethiopia.",
            "The Stresa Front of 1935 was aimed at Germany and collapsed over Ethiopia; it did not cause the drive for self-sufficiency.",
            "The tariff came in 1930; the passage links the drive after 1935 to League sanctions.",
            "The Depression lasted through most of the 1930s."], "moderate"),
        // ===== SAQ: World trade =====
        Q("a", "Identify ONE way, described in the passage, that governments restricted trade during the Great Depression.",
          "The response names one restriction from the passage.",
          ["The United States raised tariffs with the Smoot-Hawley Tariff of 1930.", "Britain and its dominions adopted imperial preference at Ottawa in 1932.", "France and Japan built trading blocs around their colonies and spheres."],
          ["\"World trade fell by two thirds.\" This is an effect, not a policy.", "\"The United States ended all tariffs.\" This is the opposite.", "\"Prices collapsed.\" This is an effect."],
          "The passage says the United States passed the Smoot-Hawley Tariff in 1930, raising duties on thousands of imported goods.",
          "Governments limited trade."),
        Q("b", "Explain ONE reason countries that exported raw materials were hit especially hard by the Depression.",
          "The response explains a specific reason.",
          ["When factories in industrial countries cut production, demand for raw materials such as rubber, coffee, and copper fell and prices collapsed.", "Their economies depended on one or two exports, so falling prices cut their income with no other industries to fall back on.", "Tariffs and trading blocs closed markets to their exports."],
          ["\"They were poor.\" This explains nothing specific.", "\"They had too many factories.\" This contradicts the prompt.", "\"Prices for raw materials rose.\" This is false."],
          "Brazil depended heavily on coffee exports. When demand fell during the Depression, coffee prices collapsed, and the government even burned surplus coffee. With its main source of income cut, Brazil could not pay for imports or its debts.",
          "They were hit hard."),
        Q("c", "Explain ONE political effect of the Great Depression in the period 1929 to 1939.",
          "The response names and explains a specific political effect.",
          ["Mass unemployment helped the Nazis win support and take power in Germany in 1933.", "In Latin America, economic crisis led to military coups and new leaders, such as Getúlio Vargas in Brazil in 1930.", "In Japan, the crisis strengthened militarists who argued that conquest of Manchuria would secure resources and markets."],
          ["\"Politics changed.\" This is too vague.", "\"The Depression ended the First World War.\" This is false.", "\"Every government became a democracy.\" This is false."],
          "In Germany, unemployment reached about six million by 1932. Many voters turned to the Nazis, who promised jobs and national revival, and Hitler became chancellor in 1933 and soon ended democracy.",
          "The Depression affected politics."),
      ] },
  ],
};

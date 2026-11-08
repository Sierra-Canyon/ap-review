// Topic 7.4 Quiz: Economy in the Interwar Period
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why) => ({ id: "t74-m0" + n, skill: "u7", type: "mcq", set, topic: "7.4", reasoning, question, choices, why, answer: 0 });
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
          ["persuade the creditor powers that Germany could no longer pay reparations because of the world crisis", "announce that Germany would pay its reparations early", "ask the United States to join the League of Nations", "propose a new alliance against France"],
          ["Correct. It argues that a \"crisis without parallel\" has made the payments impossible.",
            "It says Germany cannot continue the payments.",
            "The League is not mentioned.",
            "It asks for financial relief, not an alliance."]),
        M(2, "t74-s1", "Contextualization", "The memorandum is best understood in the context of",
          ["the Great Depression, which spread from the United States to Europe as loans were recalled and banks failed", "the boom of the mid-1920s", "the outbreak of the Second World War", "the end of the gold standard in 1870"],
          ["Correct. American lending to Germany had stopped, and German and Austrian banks collapsed in 1931.",
            "The memorandum describes a crisis, not a boom.",
            "That came in 1939.",
            "The gold standard spread after 1870."]),
        M(3, "t74-s1", "Claims and evidence in sources", "Which statement from the memorandum best supports the claim that the Depression was a global crisis?",
          ["\"In other countries also the pressure of the crisis has had a most serious effect.\"", "\"the German Government became convinced that ... it would be incapable of continuing the payment\"", "\"repeated increases in the burden of taxation\"", "\"the economic and financial situation of Germany has become exceedingly critical\""],
          ["Correct. It says the crisis has struck other countries as well.",
            "This concerns only Germany.",
            "This concerns German tax policy.",
            "This concerns only Germany."]),
        M(4, "t74-s1", "Causation", "The economic crisis described in the memorandum most directly contributed to which development in Germany?",
          ["The rise of the Nazi Party, which won votes as unemployment soared and took power in 1933", "The restoration of the German emperor", "Germany's joining of the Allies", "The end of all German industry"],
          ["Correct. Mass unemployment discredited the Weimar Republic and helped Hitler gain power.",
            "The monarchy was not restored.",
            "Germany did not join the Allies.",
            "German industry revived under rearmament."]),
        // ===== Set 2: Fascist Italy =====
        M(5, "t74-s2", "Developments and processes", "The Fascist \"corporations\" described in the passage best illustrate which development of the interwar period?",
          ["Authoritarian governments took greater control over their economies", "Governments withdrew from economic life", "Workers gained the right to strike freely", "Italy adopted Soviet-style collective farms"],
          ["Correct. The state organized employers and workers and set wages and prices.",
            "The Italian state intervened more, not less.",
            "Strikes were banned.",
            "Italy did not collectivize farms."]),
        M(6, "t74-s2", "Comparison", "The Institute for Industrial Reconstruction is most similar to which other response to the Depression?",
          ["The New Deal in the United States, which used government programs and agencies to revive the economy", "The Smoot-Hawley Tariff", "Britain's return to the gold standard in 1925", "The Dawes Plan of 1924"],
          ["Correct. Both expanded the state's role in the economy, though the New Deal worked within a democracy.",
            "A tariff restricts trade but does not take over companies.",
            "That came before the Depression.",
            "The Dawes Plan concerned reparations in the 1920s."]),
        M(7, "t74-s2", "Claims and evidence in sources", "Which evidence from the passage best supports the claim that Fascist policies favored employers over workers?",
          ["Independent trade unions and strikes were banned, and workers' real wages fell.", "The government took over failing banks.", "Mussolini launched a campaign to grow more wheat.", "The League placed sanctions on Italy."],
          ["Correct. Workers lost their means of bargaining while big business kept much of its power.",
            "This shows state intervention, not who benefited.",
            "This concerns self-sufficiency.",
            "This concerns foreign policy."]),
        M(8, "t74-s2", "Causation", "Italy's drive for economic self-sufficiency after 1935 was most directly linked to",
          ["its invasion of Ethiopia and the League of Nations sanctions that followed", "its victory in the First World War", "a British invasion of Italy", "the end of the Depression in 1930"],
          ["Correct. Sanctions after the invasion of Ethiopia pushed Italy to reduce imports.",
            "The war ended in 1918.",
            "Britain did not invade Italy in the 1930s.",
            "The Depression continued through the 1930s."]),
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

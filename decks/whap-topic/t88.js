// Topic 8.8 Quiz: End of the Cold War
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why, difficulty) => ({ id: "t88-m0" + n, skill: "u8", type: "mcq", set, topic: "8.8", reasoning, difficulty, question, choices, why, answer: 0 });
const Q = (sub, prompt, earns, yes, no, example, notExample) => ({ id: "t88-q1" + sub, skill: "u8", type: "fr", set: "t88-s3", part: "SAQ 1", sub, topic: "8.8", lead: SAQ, prompt, earns, yes, no, example, notExample });

export const sets = {
  "t88-s1": {
    id: "t88-s1", name: "The Gdańsk strikers' demands, 1980", intro: ONE,
    sources: [{ title: "Source", blocks: [
      { p: "1. Acceptance of free trade unions independent of the Communist Party and of enterprises, in accordance with convention No. 87 of the International Labour Organization concerning the right to form free trade unions." },
      { p: "2. A guarantee of the right to strike and of the security of strikers." },
      { p: "3. Compliance with the constitutional guarantee of freedom of speech, the press and publication, including freedom for independent publishers, and the availability of the mass media to representatives of all faiths." },
      { p: "... 10. A full supply of food products for the domestic market, with exports limited to surpluses. ..." },
      { p: "13. Selection of management personnel on the basis of qualifications, not party membership, and elimination of privileges for the state police, security service, and party apparatus ..." },
      { cite: "The 21 demands of the Inter-Enterprise Strike Committee, issued August 17, 1980, at the Lenin Shipyard in Gdańsk, Poland, and hung on the shipyard gate on wooden boards, English translation as published by Wikipedia. The original boards are in UNESCO's Memory of the World Register. The strike, led by the electrician Lech Wałęsa, won the Gdańsk Agreement of August 31, 1980, which allowed the founding of the independent trade union Solidarity. The communist government banned Solidarity under martial law in December 1981.", url: "https://en.wikipedia.org/wiki/21_demands_of_the_Inter-Enterprise_Strike_Committee", kind: "primary" },
    ] }],
  },
  "t88-s2": {
    id: "t88-s2", name: "The revolutions of 1989", intro: "Use the passage below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that the communist governments of eastern Europe fell in 1989 because their people saw that the Soviet Union would no longer use force to keep them in power. Mikhail Gorbachev, struggling with a weak Soviet economy and a costly war in Afghanistan, told eastern European leaders that they were on their own. In Poland, round-table talks led to partly free elections in June 1989, which Solidarity won overwhelmingly. Hungary opened its border with Austria, and thousands of East Germans fled west. Mass protests in East German cities followed, and on November 9 the government opened the Berlin Wall. Within weeks, peaceful protests ended communist rule in Czechoslovakia in what was called the Velvet Revolution. Only in Romania did the change turn bloody, when the dictator Nicolae Ceaușescu was overthrown and executed in December." },
      PRACTICE,
    ] }],
  },
  "t88-s3": {
    id: "t88-s3", name: "China's reforms under Deng Xiaoping", intro: SAQ,
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that China's Communist Party survived the end of the Cold War by changing its economy while keeping its political control. After Mao's death, Deng Xiaoping became China's leading figure in 1978. He let peasants farm their own plots and sell surplus crops, opened special economic zones such as Shenzhen to foreign investment, and allowed private businesses to grow. China's economy grew rapidly for decades. But when students and workers gathered in Tiananmen Square in Beijing in the spring of 1989 to demand political freedom and an end to corruption, the government declared martial law and sent the army, which killed hundreds or more on the night of June 3 and 4. Unlike the Soviet Union, China combined market reforms with continued one-party rule." },
      PRACTICE,
    ] }],
  },
};

export default {
  forms: [
    { id: "t88", name: "Topic 8.8 Quiz: End of the Cold War", group: "Unit 8: Cold War and Decolonization",
      items: [
        // ===== Set 1: Gdańsk =====
        M(1, "t88-s1", "Claims and evidence in sources", "Which demand most directly challenged the Communist Party's control of Polish society?",
          ["Free trade unions independent of the Communist Party", "A guarantee of the right to strike and of strikers' safety", "A full supply of food products for the domestic market", "Food exports limited to what the home market can spare"],
          ["Correct. In a communist state the party controlled all unions; independent unions broke that monopoly and gave workers a lasting organization outside the party.",
            "This protects strikers, but a strike is temporary; an independent union would challenge the party's control for good.",
            "This is an economic demand about supply.",
            "This is an economic demand about trade."], "difficult"),
        M(2, "t88-s1", "Sourcing and situation", "The reference to the International Labour Organization convention was most likely included to",
          ["rest the demand on a standard Poland had accepted", "ask the United Nations to send troops to Poland", "show that the strikers rejected Poland's constitution", "call on Western trade unions to join the strike"],
          ["Correct. Poland had ratified the convention, so citing it made the demand harder to dismiss as hostile to the state.",
            "No outside force is requested.",
            "Demand 3 calls for \"compliance with the constitutional guarantee\" of free speech, so the strikers appeal to Polish law.",
            "The demands are addressed to the Polish government, not to foreign unions."], "moderate"),
        M(3, "t88-s1", "Contextualization", "The demand about the food supply is best understood in the context of",
          ["shortages in Soviet-bloc economies by the 1970s", "an economic boom in Poland in the late 1970s", "Poland's entry into the European Union's market", "the famine that followed collective farming in 1932"],
          ["Correct. Debt, price rises, and shortages in the planned economy fueled the strikes of 1980.",
            "Poland's economy was in crisis by 1980, with heavy debts and shortages.",
            "Poland joined the European Union in 2004.",
            "The Soviet famine of 1932 and 1933 came nearly fifty years earlier."], "easy"),
        M(4, "t88-s1", "Causation", "The movement that grew from these demands most directly contributed to which development?",
          ["Partly free elections in 1989, won by Solidarity", "The Soviet invasion of Hungary to end its reforms", "The building of the Berlin Wall around West Berlin", "Poland's founding role in the Warsaw Pact"],
          ["Correct. Solidarity's revival led to round-table talks and the partly free elections of June 1989.",
            "That came in 1956, before Solidarity existed.",
            "That came in 1961.",
            "The Warsaw Pact was founded in 1955."], "easy"),
        // ===== Set 2: 1989 =====
        M(5, "t88-s2", "Causation", "According to the passage, the communist governments of eastern Europe fell mainly because",
          ["Soviet leaders would no longer use force to save them", "NATO forces moved into eastern Europe to back protests", "Gorbachev sent troops to help the reformers win", "economic recovery let people demand more freedom"],
          ["Correct. Gorbachev told eastern European leaders they were on their own, and their people saw it.",
            "The passage describes no NATO forces in eastern Europe.",
            "Gorbachev kept Soviet troops out of the changes.",
            "The passage describes a weak Soviet economy, not a recovery."], "moderate"),
        M(6, "t88-s2", "Continuity and change", "The events of 1989 differed from the Soviet response to the Prague Spring in 1968 in that",
          ["Soviet troops stayed out of the 1989 changes", "Soviet troops invaded Poland to stop Solidarity", "the 1989 changes made the bloc more communist", "Warsaw Pact troops were sent to Berlin in 1989"],
          ["Correct. In 1968 Soviet troops crushed reform; in 1989 they stayed in their bases.",
            "No invasion of Poland occurred; Solidarity won elections.",
            "Communist rule ended across the region.",
            "The East German government opened the wall; no troops were sent."], "easy"),
        M(7, "t88-s2", "Claims and evidence in sources", "Which evidence from the passage best supports the claim that the revolutions were mostly peaceful?",
          ["Peaceful protests ended communist rule in Czechoslovakia.", "Romania's dictator Ceaușescu was overthrown and executed.", "The Soviet Union was fighting a costly war in Afghanistan.", "Thousands of East Germans fled west through Hungary."],
          ["Correct. The Velvet Revolution was a peaceful transfer of power.",
            "This was the bloody exception.",
            "This concerns Soviet policy, not how the revolutions unfolded.",
            "This concerns flight across a border, not how communist rule ended."], "moderate"),
        M(8, "t88-s2", "Causation", "The revolutions of 1989 most directly contributed to which development?",
          ["German reunification and the Soviet breakup", "The Soviet invasion of Afghanistan in 1979", "Gorbachev's reforms of glasnost and perestroika", "China's crackdown on protesters in Tiananmen Square"],
          ["Correct. With eastern Europe free, Germany reunified in 1990, and nationalist movements helped break up the Soviet Union in 1991.",
            "The invasion of Afghanistan came ten years earlier.",
            "Glasnost and perestroika began in 1985 and 1986 and helped cause 1989, not the other way around.",
            "The crackdown in China came in June 1989, before most of the eastern European revolutions, and had its own causes."], "difficult"),
        // ===== SAQ: China =====
        Q("a", "Identify ONE economic reform introduced by Deng Xiaoping, as described in the passage.",
          "The response names one reform from the passage.",
          ["Peasants could farm their own plots and sell surplus crops.", "Special economic zones such as Shenzhen were opened to foreign investment.", "Private businesses were allowed to grow."],
          ["\"Martial law in 1989.\" This was political, not economic.", "\"Collectivization.\" Deng moved away from it.", "\"Free elections.\" Deng did not allow them."],
          "The passage says Deng opened special economic zones such as Shenzhen to foreign investment.",
          "Deng reformed the economy."),
        Q("b", "Explain ONE way China's response to the end of the Cold War differed from the Soviet Union's.",
          "The response explains a specific difference.",
          ["China kept one-party rule while opening its economy, while Gorbachev allowed political openness (glasnost) that weakened Communist control.", "China used the army to crush the Tiananmen protests, while the Soviet Union did not use force to stop the revolutions in eastern Europe.", "China's Communist Party survived, while the Soviet Union broke apart in 1991."],
          ["\"They were different.\" This explains nothing.", "\"China held free elections in 1989.\" This is false.", "\"The Soviet Union crushed Tiananmen.\" This mixes up the countries."],
          "Gorbachev's glasnost let Soviet citizens criticize the government, which helped bring down the Communist Party. Deng, by contrast, opened China's economy but sent the army against the Tiananmen protesters in 1989, keeping the party's control.",
          "China was different."),
        Q("c", "Explain ONE cause of the end of the Cold War OTHER than events in China.",
          "The response names and explains a specific cause.",
          ["The Soviet economy stagnated and could not keep up with the arms race and the costs of empire.", "Gorbachev's reforms, glasnost and perestroika, weakened the Communist Party's control.", "Resistance movements such as Solidarity in Poland challenged communist rule in eastern Europe."],
          ["\"Deng's reforms.\" The prompt asks for a cause other than events in China.", "\"The Cold War got old.\" This is too vague.", "\"The Soviet Union won the arms race.\" This is false."],
          "By the 1980s, the Soviet economy was stagnating, oil prices had fallen, and the war in Afghanistan and the arms race were costly. Gorbachev's attempts to fix these problems with reforms loosened party control, and the Soviet Union broke apart in 1991.",
          "Many things ended the Cold War."),
      ] },
  ],
};

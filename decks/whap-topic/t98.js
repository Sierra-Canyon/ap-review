// Topic 9.8 Quiz: Institutions Developing in a Globalized World
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why, difficulty) => ({ id: "t98-m0" + n, skill: "u9", type: "mcq", set, topic: "9.8", reasoning, difficulty, question, choices, why, answer: 0 });
const Q = (sub, prompt, earns, yes, no, example, notExample) => ({ id: "t98-q1" + sub, skill: "u9", type: "fr", set: "t98-s3", part: "SAQ 1", sub, topic: "9.8", lead: SAQ, prompt, earns, yes, no, example, notExample });

export const sets = {
  "t98-s1": {
    id: "t98-s1", name: "The Schuman Declaration, 1950", intro: ONE,
    sources: [{ title: "Source", blocks: [
      { p: "World peace cannot be safeguarded without the making of creative efforts proportionate to the dangers which threaten it. ..." },
      { p: "Europe will not be made all at once, or according to a single plan. It will be built through concrete achievements which first create a de facto solidarity. The coming together of the nations of Europe requires the elimination of the age-old opposition of France and Germany. ..." },
      { p: "It proposes that Franco-German production of coal and steel as a whole be placed under a common High Authority, within the framework of an organization open to the participation of the other countries of Europe. The pooling of coal and steel production should immediately provide for the setting up of common foundations for economic development as a first step in the federation of Europe, and will change the destinies of those regions which have long been devoted to the manufacture of munitions of war, of which they have been the most constant victims." },
      { p: "The solidarity in production thus established will make it plain that any war between France and Germany becomes not merely unthinkable, but materially impossible. ..." },
      { cite: "Robert Schuman, French foreign minister, declaration of May 9, 1950, as published by the European Union. The plan led to the European Coal and Steel Community (1952) of France, West Germany, Italy, Belgium, the Netherlands, and Luxembourg, then to the European Economic Community (1958) and the European Union (1993). May 9 is now celebrated as Europe Day.", url: "https://european-union.europa.eu/principles-countries-history/history-eu/1945-59/schuman-declaration-may-1950_en", kind: "primary" },
    ] }],
  },
  "t98-s2": {
    id: "t98-s2", name: "OPEC and the oil shock", intro: "Use the passage below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that the Organization of the Petroleum Exporting Countries showed how producers of raw materials could band together to gain power in the world economy. OPEC was founded in Baghdad in 1960 by Iran, Iraq, Kuwait, Saudi Arabia, and Venezuela, whose oil had largely been controlled by Western companies. In October 1973, during a war between Israel and its Arab neighbors, Arab members cut production and stopped oil shipments to the United States and other supporters of Israel. Within months, the price of oil roughly quadrupled. Gas lines formed in the United States, and inflation and recession struck many industrial countries. Oil-producing states gained huge revenues and took control of their oil industries, while poor countries that imported oil fell deeper into debt." },
      PRACTICE,
    ] }],
  },
  "t98-s3": {
    id: "t98-s3", name: "Doctors Without Borders", intro: SAQ,
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that nongovernmental organizations, or NGOs, became important actors in world affairs after 1970. Médecins Sans Frontières (Doctors Without Borders) was founded in France in 1971 by doctors who had worked in the Nigerian civil war and believed that aid workers should speak out about atrocities rather than stay silent. The group sent doctors and nurses to war zones, refugee camps, and epidemics around the world, often without the permission of governments. It relied mainly on private donations so that it would not depend on any state. By the 1990s it worked in dozens of countries, and in 1999 it won the Nobel Peace Prize. Other NGOs, such as Amnesty International (founded 1961) and Greenpeace (1971), worked on human rights and the environment." },
      PRACTICE,
    ] }],
  },
};

export default {
  forms: [
    { id: "t98", name: "Topic 9.8 Quiz: Institutions Developing in a Globalized World", group: "Unit 9: Globalization",
      items: [
        // ===== Set 1: Schuman =====
        M(1, "t98-s1", "Claims and evidence in sources", "Schuman's main purpose in proposing to pool coal and steel was to",
          ["make war between France and Germany impossible", "give France control of German industry as reparations", "build a European army to defend against the Soviet Union", "create a single European currency to replace the franc"],
          ["Correct. He says war would become \"not merely unthinkable, but materially impossible.\"",
            "He proposes a common High Authority open to other countries, not French control.",
            "He proposes pooling coal and steel production, not an army.",
            "He proposes pooling production; a single currency, the euro, came only in 1999."],
          "moderate"),
        M(2, "t98-s1", "Contextualization", "The declaration is best understood in the context of",
          ["three wars between France and Germany since 1870", "the collapse of Europe's colonial empires in Asia", "the fall of the Berlin Wall and German reunification", "the balance of power set by the Congress of Vienna"],
          ["Correct. France and Germany fought in 1870, 1914, and 1939, and Schuman names the \"age-old opposition of France and Germany.\"",
            "Decolonization was under way, but the declaration is about peace between France and Germany.",
            "The Berlin Wall fell in 1989, decades after the declaration.",
            "The Congress of Vienna met in 1815; the declaration responds to the wars of the twentieth century."],
          "easy"),
        M(3, "t98-s1", "Developments and processes", "Schuman's statement that Europe \"will be built through concrete achievements\" best describes which approach?",
          ["Building unity step by step through economic links", "Creating a European government in one treaty", "Uniting Europe through a common military alliance", "Uniting Europe around one language and culture"],
          ["Correct. He proposes starting with one limited, practical step: pooling coal and steel.",
            "He says Europe \"will not be made all at once, or according to a single plan.\"",
            "He proposes economic cooperation, not a military alliance.",
            "He speaks of production and economic development, not language or culture."],
          "easy"),
        M(4, "t98-s1", "Comparison", "The organization that grew from the Schuman plan is most similar to which later institution in another region?",
          ["ASEAN, which built economic ties in Southeast Asia", "The Warsaw Pact, which joined Soviet bloc armies", "The League of Nations, which sought collective security", "OPEC, which coordinated oil prices among exporters"],
          ["Correct. Both were regional organizations of neighboring states that promoted economic cooperation.",
            "The Warsaw Pact was a military alliance, not an economic community.",
            "The League was a worldwide body for peace, not a regional economic community.",
            "OPEC joined oil exporters from several continents to set prices, not neighbors building a common economy."],
          "difficult"),
        // ===== Set 2: OPEC =====
        M(5, "t98-s2", "Causation", "According to the passage, the price of oil quadrupled in 1973 and 1974 mainly because",
          ["Arab members cut output and embargoed Israel's supporters", "Western oil companies raised prices to profit from the war", "OPEC was founded that year to set prices for its members", "demand for oil in the United States suddenly doubled"],
          ["Correct. The passage says Arab members cut production and stopped shipments to the United States and other supporters of Israel.",
            "The passage says producers, not Western companies, cut supply.",
            "OPEC was founded in 1960, thirteen years earlier.",
            "The passage says supply was cut, not that demand doubled."],
          "moderate"),
        M(6, "t98-s2", "Developments and processes", "OPEC best illustrates which development after 1945?",
          ["Developing states joined to control their resources.", "Western companies tightened control of Middle East oil.", "Cold War alliances organized trade in raw materials.", "Industrial economies came to depend less on oil."],
          ["Correct. Producers whose oil had been controlled by Western companies cooperated to set prices and took over their oil industries.",
            "The passage says the companies lost control as states took over their oil industries.",
            "OPEC joined producers on both sides of the Cold War, such as Iran and Iraq; it was not a Cold War alliance.",
            "The gas lines and recessions show how much industrial economies depended on oil."],
          "moderate"),
        M(7, "t98-s2", "Claims and evidence in sources", "Which evidence from the passage shows that the oil shock hurt some developing countries?",
          ["Poor countries that imported oil fell deeper into debt.", "Producing states took over their oil industries.", "Inflation and recession hit many industrial countries.", "Gas lines formed in the United States."],
          ["Correct. Higher prices burdened oil importers in the developing world.",
            "This shows a gain for producing states.",
            "This concerns industrial countries, not developing ones.",
            "This concerns a wealthy country."],
          "easy"),
        M(8, "t98-s2", "Causation", "The oil shock most directly contributed to which development in industrial countries?",
          ["Stagflation that helped free-market policies win support", "The Great Depression and a turn to high protective tariffs", "The postwar boom of rapid and steady economic growth", "New nationalization of energy companies in the 1980s"],
          ["Correct. Inflation with slow growth discredited earlier policies and helped leaders such as Thatcher and Reagan.",
            "The Great Depression came in the 1930s.",
            "The postwar boom came before 1973, and the oil shock helped end it.",
            "The 1980s brought privatization in countries such as Britain, the reverse of nationalization."],
          "moderate"),
        // ===== SAQ: NGOs =====
        Q("a", "Identify ONE feature of Doctors Without Borders described in the passage.",
          "The response names one feature from the passage.",
          ["It sent doctors and nurses to war zones, refugee camps, and epidemics.", "It relied mainly on private donations so it would not depend on any state.", "It believed aid workers should speak out about atrocities."],
          ["\"It was a government agency.\" It was nongovernmental.", "\"It was founded in 1999.\" It won the Nobel Prize in 1999.", "\"It worked only in France.\" It worked worldwide."],
          "The passage says Doctors Without Borders relied mainly on private donations so that it would not depend on any state.",
          "It was an NGO."),
        Q("b", "Explain ONE way nongovernmental organizations differed from international organizations such as the United Nations.",
          "The response explains a specific difference.",
          ["NGOs were made up of private citizens and funded by donations, while the UN was made up of member states.", "NGOs could act without governments' permission, while UN agencies usually needed the consent of states.", "NGOs focused on single issues such as medicine or human rights, while the UN dealt with many issues at once."],
          ["\"They were different.\" This explains nothing.", "\"NGOs were founded by the UN Security Council.\" This is false.", "\"The UN had no members.\" This is false."],
          "The United Nations is made up of member states and usually acts with their consent. Doctors Without Borders, by contrast, was funded by private donors and sometimes entered war zones without government permission.",
          "They were not the same."),
        Q("c", "Explain ONE way international organizations after 1945 helped solve OR failed to solve a global problem.",
          "The response names an organization and explains a specific success or failure.",
          ["The World Health Organization led the campaign that eradicated smallpox by 1980.", "The UN failed to prevent the genocide in Rwanda in 1994, when its peacekeepers were withdrawn.", "The European Union helped make war among its members unthinkable."],
          ["\"Organizations helped.\" This names no organization.", "\"The League of Nations stopped the Second World War.\" This is false.", "\"OPEC eradicated smallpox.\" This is false."],
          "In 1994, the United Nations had peacekeepers in Rwanda, but the Security Council cut their numbers as the genocide began, and about 800,000 people were killed in a hundred days. Many later saw this as a major failure of international institutions.",
          "Organizations had results."),
      ] },
  ],
};

// Topic 9.7 Quiz: Resistance to Globalization
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why, difficulty) => ({ id: "t97-m0" + n, skill: "u9", type: "mcq", set, topic: "9.7", reasoning, difficulty, question, choices, why, answer: 0 });
const Q = (sub, prompt, earns, yes, no, example, notExample) => ({ id: "t97-q1" + sub, skill: "u9", type: "fr", set: "t97-s3", part: "SAQ 1", sub, topic: "9.7", lead: SAQ, prompt, earns, yes, no, example, notExample });

export const sets = {
  "t97-s1": {
    id: "t97-s1", name: "The World Social Forum's Charter of Principles, 2001", intro: ONE,
    sources: [{ title: "Source", blocks: [
      { p: "1. The World Social Forum is an open meeting place for reflective thinking, democratic debate of ideas, formulation of proposals, free exchange of experiences and interlinking for effective action, by groups and movements of civil society that are opposed to neoliberalism and to domination of the world by capital and any form of imperialism, and are committed to building a planetary society directed towards fruitful relationships among Humankind and between it and the Earth." },
      { p: "2. ... From now on, in the certainty proclaimed at Porto Alegre that \"another world is possible\", it becomes a permanent process of seeking and building alternatives, which cannot be reduced to the events supporting it." },
      { p: "4. The alternatives proposed at the World Social Forum stand in opposition to a process of globalization commanded by the large multinational corporations and by the governments and international institutions at the service of those corporations interests, with the complicity of national governments. They are designed to ensure that globalization in solidarity will prevail as a new stage in world history. ..." },
      { cite: "World Social Forum Charter of Principles, drawn up by the Brazilian organizing committee after the first World Social Forum in Porto Alegre, Brazil (January 2001), and approved with changes by the forum's International Council in June 2001, as published by the Asia Pacific Social Forum. The forum was held as an alternative to the World Economic Forum, a yearly meeting of business and political leaders in Davos, Switzerland.", url: "https://www.asia-pacific-social-forum.org/wsf-charter-of-principles/", kind: "primary" },
    ] }],
  },
  "t97-s2": {
    id: "t97-s2", name: "The battle of Seattle, 1999", intro: "Use the passage below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that the protests at the World Trade Organization's meeting in Seattle in 1999 announced a new global movement against the rules of free trade. Tens of thousands of people came: American labor unions worried about jobs moving overseas, environmental groups angry that trade rules could override environmental laws, farmers from many countries, and activists who opposed corporate power. Most protested peacefully, but some smashed shop windows, and police used tear gas and declared a curfew. Inside the meeting, delegates from many developing countries complained that wealthy countries kept subsidies for their own farmers while demanding open markets elsewhere. The talks collapsed without agreement. Later meetings of the WTO, the International Monetary Fund, and the Group of Eight drew similar protests." },
      PRACTICE,
    ] }],
  },
  "t97-s3": {
    id: "t97-s3", name: "The Cochabamba water war", intro: SAQ,
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that a protest in Bolivia in 2000 became a symbol of resistance to privatization. Under pressure from international lenders, Bolivia's government sold the water system of the city of Cochabamba to a consortium led by a foreign company. Water bills soon rose sharply, in some cases taking a large share of poor families' incomes, and the contract appeared to give the company rights even over community wells. Farmers, factory workers, and neighborhood groups organized strikes and blocked roads. After the government declared a state of siege and a teenager was killed by soldiers, the company left and the government cancelled the contract. Several years later, Bolivians elected Evo Morales, a leader of coca growers who opposed free-market policies, as the country's first Indigenous president." },
      PRACTICE,
    ] }],
  },
};

export default {
  forms: [
    { id: "t97", name: "Topic 9.7 Quiz: Resistance to Globalization", group: "Unit 9: Globalization",
      items: [
        // ===== Set 1: World Social Forum =====
        M(1, "t97-s1", "Claims and evidence in sources", "The charter's main objection is to",
          ["globalization directed by multinational corporations", "all economic and cultural contact among the world's peoples", "the spread of democracy to developing countries", "the Soviet model of state-planned economies"],
          ["Correct. It opposes globalization \"commanded by the large multinational corporations\" and the institutions that serve them.",
            "It calls for \"globalization in solidarity\" and a \"planetary society,\" not an end to contact.",
            "It calls itself a place for \"democratic debate\" and does not oppose democracy.",
            "It opposes neoliberalism and the domination of capital; it says nothing in favor of or against Soviet planning."],
          "easy"),
        M(2, "t97-s1", "Developments and processes", "The phrase \"globalization in solidarity\" shows that the forum's members",
          ["wanted a different kind of globalization, not an end to it", "wanted every country to close its borders to trade", "accepted neoliberal policies with some added safeguards", "hoped to restore the communist bloc of the Cold War"],
          ["Correct. They sought an alternative globalization based on justice and cooperation among peoples.",
            "They proposed a \"planetary society,\" not closed borders.",
            "The charter says its members are \"opposed to neoliberalism.\"",
            "The charter speaks of building alternatives, not of restoring Soviet-style communism."],
          "moderate"),
        M(3, "t97-s1", "Contextualization", "The charter is best understood in the context of",
          ["the spread of free-market policies in the 1980s and 1990s", "the high tariffs and trade wars of the Great Depression", "the Bandung Conference of Asian and African states in 1955", "the oil embargo that Arab members of OPEC imposed in 1973"],
          ["Correct. The forum responded to neoliberal globalization: privatization, free trade agreements, and the growth of the WTO.",
            "The Depression's tariffs came in the 1930s, and the charter objects to corporate-led globalization, not to closed markets.",
            "Bandung brought newly independent states together in 1955, decades before the neoliberal globalization the charter opposes.",
            "The 1973 embargo was a move by oil-producing states, not the corporate-led globalization the charter names."],
          "moderate"),
        M(4, "t97-s1", "Sourcing and situation", "The choice to hold the forum in Porto Alegre, Brazil, rather than in a wealthy country most likely reflected",
          ["an aim to give the Global South a voice against Davos", "a plan to meet alongside the World Economic Forum", "Brazil's membership in the Group of Eight", "Brazil's role as the home of the World Trade Organization"],
          ["Correct. It was organized as a counterpart to the Davos meeting, held in the developing world.",
            "Davos is in Switzerland, and the forum was meant as an alternative to it.",
            "The Group of Eight was made up of wealthy industrial states and Russia; Brazil was not a member.",
            "The WTO is based in Geneva, Switzerland."],
          "moderate"),
        // ===== Set 2: Seattle =====
        M(5, "t97-s2", "Claims and evidence in sources", "Which evidence from the passage best shows that the protesters had varied goals?",
          ["Unions, environmentalists, farmers, and activists all came.", "Most protested peacefully, but some smashed shop windows.", "Police used tear gas and declared a curfew in the city.", "Later IMF and Group of Eight meetings drew protests."],
          ["Correct. The passage lists groups with different concerns: jobs, the environment, farming, and corporate power.",
            "This shows different tactics, not different goals.",
            "This describes the police response.",
            "This shows the movement continued, not that its goals varied."],
          "difficult"),
        M(6, "t97-s2", "Causation", "According to the passage, developing countries' delegates complained mainly that",
          ["rich states protected their farmers but wanted open markets", "trade rules could be used to override their environmental laws", "factory jobs were moving from their countries to wealthy ones", "protesters had blocked them from entering the meeting"],
          ["Correct. They objected to unequal rules on agriculture.",
            "The passage gives this as the complaint of environmental groups, not of the delegates.",
            "American unions feared jobs moving overseas, the opposite direction.",
            "The passage does not say this; the delegates' complaint was about trade rules."],
          "difficult"),
        M(7, "t97-s2", "Comparison", "The Seattle protests are most similar to which earlier movement?",
          ["The Luddites' attacks on machines in Britain", "The Chartists' petitions for votes for working men", "The Meiji reformers' adoption of Western industry", "The Marshall Plan's aid to rebuild Western Europe"],
          ["Correct. Both resisted economic changes that threatened workers' livelihoods.",
            "The Chartists sought political rights, the vote, rather than resisting an economic change.",
            "The Meiji reformers embraced new industry and trade rather than resisting it.",
            "The Marshall Plan was American aid, not a protest movement."],
          "moderate"),
        M(8, "t97-s2", "Developments and processes", "The protests best illustrate which feature of resistance to globalization?",
          ["Movements across borders joined against global institutions.", "Resistance came mainly from the governments of poorer states.", "Resistance faded once the Seattle talks had collapsed.", "Protesters shared one goal: saving jobs in the United States."],
          ["Correct. Groups from many countries joined, and later meetings drew similar protests.",
            "Most protesters came from unions and other civil society groups, not governments.",
            "The passage says later WTO, IMF, and Group of Eight meetings drew similar protests.",
            "Unions cared about jobs, but environmental groups, farmers, and activists had other goals."],
          "moderate"),
        // ===== SAQ: Cochabamba =====
        Q("a", "Identify ONE cause of the protests in Cochabamba described in the passage.",
          "The response names one cause from the passage.",
          ["The water system was sold to a consortium led by a foreign company.", "Water bills rose sharply, taking a large share of poor families' incomes.", "The contract appeared to give the company rights over community wells."],
          ["\"The election of Evo Morales.\" This came later.", "\"The company left.\" This was a result.", "\"A teenager was killed.\" This happened during the protests."],
          "The passage says water bills rose sharply after the system was sold to a foreign-led consortium, in some cases taking a large share of poor families' incomes.",
          "People were angry."),
        Q("b", "Explain ONE way the water war reflected wider resistance to globalization in Latin America.",
          "The response explains a specific link.",
          ["It opposed privatization pushed by international lenders, a common grievance in Latin America in the 1990s.", "It helped bring to power leaders such as Evo Morales who rejected free-market policies.", "Like the Zapatista uprising, it combined Indigenous and poor communities against economic policies imposed from outside."],
          ["\"It was a protest.\" This explains no link.", "\"It supported free-market reforms.\" This is the opposite.", "\"It was about the Cold War.\" This is inaccurate."],
          "Many Latin American governments privatized services in the 1990s under pressure from the IMF and World Bank. The water war became a symbol of opposition to these policies and helped elect Evo Morales, who promised to put natural resources under national control.",
          "It was part of a trend."),
        Q("c", "Explain ONE form of resistance to globalization OTHER than economic protest in the period 1990 to the present.",
          "The response names and explains a specific non-economic form of resistance.",
          ["Religious movements rejected Western cultural influence, as with the Taliban's bans on music and television.", "Nationalist parties in Europe opposed immigration and the European Union's powers.", "Some governments protected local cultures with quotas on foreign films or music."],
          ["\"Seattle protests.\" These were economic.", "\"People resisted.\" This names no form.", "\"Everyone welcomed globalization.\" This is false."],
          "In Afghanistan in the late 1990s, the Taliban banned television, most music, and Western dress, rejecting global popular culture in the name of their strict interpretation of Islam.",
          "There was resistance."),
      ] },
  ],
};

// Topic 9.7 Quiz: Resistance to Globalization
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why) => ({ id: "t97-m0" + n, skill: "u9", type: "mcq", set, topic: "9.7", reasoning, question, choices, why, answer: 0 });
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
          ["globalization directed by multinational corporations and the institutions that serve them", "all contact among the world's peoples", "human rights", "democratic debate"],
          ["Correct. It opposes globalization \"commanded by the large multinational corporations.\"",
            "It calls for \"globalization in solidarity.\"",
            "It supports human rights.",
            "It calls itself a place for democratic debate."]),
        M(2, "t97-s1", "Developments and processes", "The phrase \"globalization in solidarity\" shows that the forum's members",
          ["wanted a different kind of global connection, not an end to globalization", "wanted every country to close its borders", "supported neoliberal policies", "opposed international cooperation"],
          ["Correct. They sought an alternative globalization based on justice and rights.",
            "They proposed a \"planetary society.\"",
            "They opposed neoliberalism.",
            "They interlinked movements from all countries."]),
        M(3, "t97-s1", "Contextualization", "The charter is best understood in the context of",
          ["the spread of free-market policies and trade agreements in the 1980s and 1990s", "the Great Depression", "the Cold War arms race of the 1950s", "the decolonization of Africa in the 1960s"],
          ["Correct. The forum responded to neoliberal globalization.",
            "That came in the 1930s.",
            "The Cold War had ended.",
            "That came earlier."]),
        M(4, "t97-s1", "Sourcing and situation", "The choice to hold the forum in Porto Alegre, Brazil, rather than in a wealthy country most likely reflected",
          ["the movement's aim to give voice to the Global South against forums such as Davos", "the wish to meet near the World Economic Forum", "Brazil's membership in the Group of Eight", "the forum's support for multinational corporations"],
          ["Correct. It was organized as a counterpart to Davos from the developing world.",
            "Davos is in Switzerland.",
            "Brazil was not in the Group of Eight.",
            "It opposed corporate power."]),
        // ===== Set 2: Seattle =====
        M(5, "t97-s2", "Claims and evidence in sources", "Which evidence from the passage best shows that the protesters had varied goals?",
          ["Labor unions, environmental groups, farmers, and activists against corporate power all came to Seattle.", "Police used tear gas.", "The talks collapsed.", "Some smashed shop windows."],
          ["Correct. The passage lists groups with different concerns.",
            "This describes the police.",
            "This describes the result.",
            "This describes some protesters' tactics."]),
        M(6, "t97-s2", "Causation", "According to the passage, developing countries' delegates complained mainly that",
          ["wealthy countries subsidized their own farmers while demanding open markets elsewhere", "the WTO banned all trade", "they had no seats at the meeting", "the protesters supported wealthy countries"],
          ["Correct. They objected to unequal rules on agriculture.",
            "The WTO promoted trade.",
            "They were delegates.",
            "This is not supported."]),
        M(7, "t97-s2", "Comparison", "The Seattle protests are most similar to which earlier movement?",
          ["The Luddites' attacks on machines that threatened weavers' jobs in early industrial Britain", "The Meiji Restoration", "The Marshall Plan", "The Berlin airlift"],
          ["Correct. Both resisted economic changes that threatened workers' livelihoods.",
            "That modernized Japan.",
            "That was American aid.",
            "That was a Cold War standoff."]),
        M(8, "t97-s2", "Developments and processes", "The protests best illustrate which feature of resistance to globalization?",
          ["Movements in different countries linked together across borders to oppose global institutions", "Resistance came only from governments", "Opponents of globalization refused to travel", "Resistance ended after 1999"],
          ["Correct. Groups from many countries joined, and later meetings drew similar protests.",
            "Most protesters were from civil society.",
            "They traveled to Seattle.",
            "Later meetings drew protests."]),
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

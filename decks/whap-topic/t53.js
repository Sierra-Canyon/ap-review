// Topic 5.3 Quiz: Industrial Revolution Begins
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why, difficulty) => ({ id: "t53-m0" + n, skill: "u5", type: "mcq", set, topic: "5.3", reasoning, question, choices, why, difficulty, answer: 0 });
const Q = (sub, prompt, earns, yes, no, example, notExample) => ({ id: "t53-q1" + sub, skill: "u5", type: "fr", set: "t53-s3", part: "SAQ 1", sub, topic: "5.3", lead: SAQ, prompt, earns, yes, no, example, notExample });

export const sets = {
  "t53-s1": {
    id: "t53-s1", name: "Edward Baines on England's advantages, 1835", intro: ONE,
    sources: [{ title: "Source", blocks: [
      { p: "Not less important for manufactures than the copious supply of good water, is the great abundance of coal found in the very same district. Beds of this invaluable mineral lie beneath almost the whole surface of Blackburn and Salford hundreds, and run into West Derby to within a few miles of Liverpool; and being near the surface, so as to yield their treasures easily, they are incomparably more fertile sources of wealth than mines of silver and gold. It is superfluous to remark that this mineral fuel animates the thousand arms of the steam-engine ..." },
      { p: "The political and moral advantages of this country, as a seat of manufactures, are not less remarkable than its physical advantages. The arts are the daughters of peace and liberty. In no country have these blessings been enjoyed in so high a degree, or for so long a continuance, as in England. Under the reign of just laws, personal liberty and property have been secure; mercantile enterprise has been allowed to reap its reward; capital has accumulated in safety ..." },
      { p: "England has also gained by the calamities of other countries, and the intolerance of other governments. ... The wars which have at different times desolated the rest of Europe, and especially those which followed the French revolution, (when mechanical invention was producing the most wonderful effects in England,) checked the progress of manufacturing improvement on the continent, and left England for many years without a competitor. At the same time, the English navy held the sovereignty of the ocean ..." },
      { cite: "Edward Baines, Jr., newspaper editor in Leeds, History of the Cotton Manufacture in Great Britain (London: H. Fisher, R. Fisher, and P. Jackson, 1835), chapter VII, pp. 86 to 89, as digitized by the Internet Archive. Blackburn, Salford, and West Derby were districts of Lancashire, the center of the cotton industry. \"The arts\" here means skilled trades and manufacturing.", url: "https://archive.org/details/cottonmanufact00bain", kind: "primary" },
    ] }],
  },
  "t53-s2": {
    id: "t53-s2", name: "Why Britain, and not China?", intro: "Use the passage below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that in 1750 the richest parts of China, such as the Yangzi River delta, were as commercial and productive as the richest parts of Europe, so the question of why industrialization began in Britain needs a careful answer. Some point to geography. Britain's coal lay close to its growing cities and to its rivers and coasts, while China's largest coal fields were in the north and northwest, far from the Yangzi delta. Others point to empire. Britain's colonies and trade gave it cotton, sugar, and timber from abroad and markets for its goods, which eased pressure on its own land. Still others point to prices. Wages in Britain were high and coal was cheap, so British manufacturers had strong reasons to invent machines that replaced workers with coal-powered engines, while in China, where labor was cheaper, such machines would have paid less." },
      PRACTICE,
    ] }],
  },
  "t53-s3": {
    id: "t53-s3", name: "The agricultural revolution in Britain", intro: SAQ,
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that changes in British farming helped prepare the way for industry. In the 1700s, landowners used acts of Parliament to enclose open fields and common lands, combining small strips into larger farms that they rented to tenants. Farmers planted turnips and clover in rotation with grain, which restored the soil and fed more animals through the winter, and breeders such as Robert Bakewell raised larger sheep and cattle. Food production rose, and England's population grew from about six million in 1750 to more than eight million by 1801. At the same time, many cottagers who had grazed animals on the commons lost that right, and some moved to towns in search of work. Farming needed fewer workers per acre, and the people who left the land became a supply of labor for the new mills and mines." },
      PRACTICE,
    ] }],
  },
};

export default {
  forms: [
    { id: "t53", name: "Topic 5.3 Quiz: Industrial Revolution Begins", group: "Unit 5: Revolutions",
      items: [
        // ===== Set 1: Baines =====
        M(1, "t53-s1", "Claims and evidence in sources", "Baines's first paragraph best supports which claim about the Industrial Revolution in Britain?",
          ["Coal close to the cotton districts powered British industry.", "Silver and gold mines paid for Britain's first factories.", "Britain imported most of its coal through Liverpool.", "Steam engines ended the mills' need for a water supply."],
          ["Correct. Baines says coal lay near the surface in the cotton districts and powered \"the thousand arms of the steam-engine.\"",
            "He says coal beds are \"incomparably more fertile sources of wealth than mines of silver and gold.\"",
            "He says the coal lay beneath the same district, running to within a few miles of Liverpool.",
            "He calls the \"copious supply of good water\" as important as coal."], "easy"),
        M(2, "t53-s1", "Sourcing and situation", "Baines's description of England as a land of \"peace and liberty\" is most likely shaped by the fact that he",
          ["was an English editor praising his own country's success", "was a French visitor comparing England with his own country", "was a mill worker describing conditions in Lancashire", "was a historian writing long after the industrial age"],
          ["Correct. Writing in 1835 as a proud Englishman, Baines credits English laws and liberty for industrial success and says little about its costs.",
            "Baines was English and edited a newspaper in Leeds.",
            "He was a newspaper editor, not a factory worker.",
            "He wrote in 1835, while the Industrial Revolution was under way."], "easy"),
        M(3, "t53-s1", "Contextualization", "Baines's claim that wars on the continent \"left England for many years without a competitor\" refers most directly to",
          ["the French Revolutionary and Napoleonic Wars, 1792 to 1815", "the Thirty Years' War in the German states, 1618 to 1648", "the Seven Years' War between Britain and France, 1756 to 1763", "the Crimean War between Russia and its rivals, 1853 to 1856"],
          ["Correct. He names the wars \"which followed the French revolution,\" when much of Europe was fighting while British industry grew.",
            "The Thirty Years' War ended in 1648, long before the mechanical inventions he describes.",
            "The Seven Years' War came before the French Revolution, and Baines names the wars that followed it.",
            "The Crimean War began in 1853, after he wrote."], "moderate"),
        M(4, "t53-s1", "Sourcing and situation", "A historian studying the experiences of cotton mill workers would find this source limited mainly because it",
          ["focuses on gains for the nation, not on workers' lives", "was written by an editor from the industrial north", "describes natural resources such as coal and water", "covers Lancashire rather than all of Britain"],
          ["Correct. The excerpt praises Britain's resources, laws, and markets and says nothing about what workers experienced.",
            "An editor from an industrial region could know mill towns well; his focus, not his home, is the limit.",
            "Coal and water explain where mills were built, but the limit for this purpose is the absence of workers.",
            "Lancashire was the center of cotton manufacturing, so its focus fits a study of cotton workers."], "difficult"),
        // ===== Set 2: Why Britain, and not China? =====
        M(5, "t53-s2", "Claims and evidence in sources", "The passage best supports which claim?",
          ["Historians give several reasons Britain industrialized first.", "China's richest regions were far poorer than Britain in 1750.", "Britain's colonies played no part in its industrial growth.", "China had no coal deposits that could fuel its industry."],
          ["Correct. The passage presents three groups of explanations: geography, empire, and prices.",
            "The passage says China's richest regions were as productive as Europe's richest.",
            "The passage says Britain's colonies supplied cotton, sugar, timber, and markets.",
            "It says China's coal lay far from the Yangzi delta, not that China had none."], "moderate"),
        M(6, "t53-s2", "Causation", "According to the passage, high wages in Britain encouraged industrialization because",
          ["machines saved more money where labor was costly and coal cheap", "workers used their high wages to buy shares in new factories", "high wages made coal too costly to mine in most of Britain", "the government paid manufacturers to replace their workers"],
          ["Correct. Employers had strong reasons to replace costly labor with coal-powered machines.",
            "The passage does not say workers invested in factories.",
            "The passage says coal in Britain was cheap.",
            "The passage does not mention government payments to manufacturers."], "easy"),
        M(7, "t53-s2", "Comparison", "The passage's discussion of Britain and China is an example of which kind of historical reasoning?",
          ["Comparing two societies to explain why a change came to one", "Tracing continuity in a single society over a long period", "Arguing that both societies industrialized at the same pace", "Explaining the causes of a war between Britain and China"],
          ["Correct. It compares Britain and China to explain why industrialization began in Britain.",
            "The passage compares two places rather than following one over time.",
            "The passage asks why only Britain industrialized first.",
            "Britain and China did fight the Opium War (1839 to 1842), but the passage does not discuss it."], "moderate"),
        M(8, "t53-s2", "Developments and processes", "Which evidence would best support the passage's argument about empire?",
          ["Slave-grown American cotton supplied British textile mills.", "Coal lay close to Britain's rivers, coasts, and growing cities.", "Wages in Britain were higher than in the Yangzi River delta.", "China's coal lay far from its richest region, the Yangzi delta."],
          ["Correct. Cotton from the Americas let Britain expand a textile industry it could not have supplied from its own land.",
            "This is accurate, but it supports the geography argument, not the empire argument.",
            "This supports the prices argument, not the empire argument.",
            "This supports the geography argument, not the empire argument."], "difficult"),
        // ===== SAQ: Agricultural revolution =====
        Q("a", "Identify ONE change in British farming in the 1700s described in the passage.",
          "The response names one change in farming from the passage.",
          ["Landowners enclosed open fields and common lands into larger farms.", "Farmers rotated turnips and clover with grain.", "Breeders such as Robert Bakewell raised larger sheep and cattle."],
          ["\"Population grew.\" This is an effect, not a change in farming.", "\"Farmers used tractors.\" This is wrong: tractors came in the 1900s.", "\"Farming changed.\" This is too general."],
          "The passage says landowners used acts of Parliament to enclose open fields and common lands, combining small strips into larger farms.",
          "Farms were different."),
        Q("b", "Explain ONE way the changes in farming described in the passage contributed to the Industrial Revolution.",
          "The response explains a specific link between farming changes and industrialization.",
          ["More food supported a larger population, which provided both workers for factories and buyers for manufactured goods.", "Enclosure pushed some rural people off the land, and they moved to towns where they became workers in mills and mines.", "Because farming needed fewer workers, labor was freed for industry."],
          ["\"Farming got better.\" This does not explain a link to industry.", "\"Farmers built steam engines.\" This is not supported by the passage.", "\"Enclosure ended all farming in Britain.\" This is false."],
          "As enclosure and new methods raised food production, fewer workers were needed on farms, and many cottagers lost their right to use the commons. Many of these people moved to towns, where they became the workers that new textile mills and coal mines needed.",
          "Farming helped industry."),
        Q("c", "Explain ONE factor OTHER than agriculture that helped the Industrial Revolution begin in Britain in the period 1750 to 1900.",
          "The response names and explains a specific factor that is not about farming.",
          ["Large deposits of coal and iron near rivers and ports made it cheap to fuel steam engines and build machines.", "Profits from overseas trade and colonies gave British investors capital to invest in factories.", "Laws that protected property and patents encouraged inventors and investors to take risks."],
          ["\"Britain had farms.\" The prompt asks for a factor other than agriculture.", "\"Britain had a lot of people.\" This needs an explanation of how it helped industry.", "\"Britain was the only country with coal.\" This is false."],
          "Britain had large deposits of coal close to its rivers and ports. Coal fueled steam engines that pumped water from mines and drove machines in mills, and canals and later railways carried it cheaply to factories.",
          "Britain had advantages."),
      ] },
  ],
};

// Topic 5.4 Quiz: Industrialization Spreads
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why) => ({ id: "t54-m0" + n, skill: "u5", type: "mcq", set, topic: "5.4", reasoning, question, choices, why, answer: 0 });
const Q = (sub, prompt, earns, yes, no, example, notExample) => ({ id: "t54-q1" + sub, skill: "u5", type: "fr", set: "t54-s3", part: "SAQ 1", sub, topic: "5.4", lead: SAQ, prompt, earns, yes, no, example, notExample });

export const sets = {
  "t54-s1": {
    id: "t54-s1", name: "Karl Marx on British cottons in India, 1853", intro: ONE,
    sources: [{ title: "Source", blocks: [
      { p: "The hand-loom and the spinning-wheel, producing their regular myriads of spinners and weavers, were the pivots of the structure of that society. From immemorial times, Europe received the admirable textures of Indian labor, sending in return for them her precious metals ..." },
      { p: "It was the British intruder who broke up the Indian hand-loom and destroyed the spinning-wheel. England began with driving the Indian cottons from the European market; it then introduced twist into Hindostan, and in the end inundated the very mother country of cotton with cottons. From 1818 to 1836 the export of twist from Great Britain to India rose in the proportion of 1 to 5,200. In 1824 the export of British muslins to India hardly amounted to 1,000,000 yards, while in 1837 it surpassed 64,000,000 of yards. But at the same time the population of Dacca decreased from 150,000 inhabitants to 20,000. This decline of Indian towns celebrated for their fabrics was by no means the worst consequence. British steam and science uprooted, over the whole surface of Hindostan, the union between agriculture and manufacturing industry." },
      { cite: "Karl Marx, German philosopher living in London, \"The British Rule in India,\" article in the New-York Daily Tribune, June 25, 1853, as published in the Marxists Internet Archive. \"Twist\" is machine-spun cotton yarn; \"muslins\" are fine cotton cloth; Dacca (Dhaka) in Bengal was famous for its muslin.", url: "https://www.marxists.org/archive/marx/works/1853/06/25.htm", kind: "primary" },
    ] }],
  },
  "t54-s2": {
    id: "t54-s2", name: "Belgium, the first industrial nation on the continent", intro: "Use the passage below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that Belgium was the first country on the European continent to industrialize because it combined British methods with its own resources. The region around Liège and Mons had rich deposits of coal and iron and a long tradition of metalworking. In the 1790s, a Belgian entrepreneur smuggled a British spinning machine into the city of Ghent, which became a center of cotton mills. In 1817, the English engineer John Cockerill founded a large ironworks and machine factory at Seraing, near Liège, which built steam engines and later locomotives. After Belgium won independence in 1830, its government planned and paid for a national railway network, and in 1835 it opened one of the first steam railways on the continent, between Brussels and Mechelen. By the middle of the century, Belgium produced more coal and iron for its size than any country except Britain." },
      PRACTICE,
    ] }],
  },
  "t54-s3": {
    id: "t54-s3", name: "The cotton famine and Egypt", intro: SAQ,
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that the American Civil War showed how industrialization tied distant regions together. Before 1861, most of the raw cotton used in Britain's mills came from the slave plantations of the American South. When the Union navy blockaded Southern ports, cotton prices soared and many mills in Lancashire closed, leaving hundreds of thousands of workers without jobs. British merchants turned to other suppliers, especially India and Egypt. In Egypt, the government encouraged farmers to plant cotton, and exports rose several times over during the war. The boom ended when American cotton returned after 1865 and prices fell. Egypt's rulers, who had borrowed heavily from European banks to pay for canals, railways, and palaces, could not repay their debts. In 1876, British and French officials took charge of Egypt's finances, and in 1882 Britain occupied the country." },
      PRACTICE,
    ] }],
  },
};

export default {
  forms: [
    { id: "t54", name: "Topic 5.4 Quiz: Industrialization Spreads", group: "Unit 5: Revolutions",
      items: [
        // ===== Set 1: Marx =====
        M(1, "t54-s1", "Claims and evidence in sources", "Which evidence from the source best supports Marx's claim that British industry damaged Indian manufacturing?",
          ["The population of Dacca, famous for its fabrics, fell from 150,000 to 20,000.", "Europe had long sent precious metals to India.", "British muslin exports to India were under 1,000,000 yards in 1824.", "Indian society was built around the hand-loom and the spinning-wheel."],
          ["Correct. Marx links the collapse of a textile city to the flood of British cotton goods.",
            "This describes the earlier trade, when India sold cloth to Europe.",
            "This number alone shows the starting point, not the damage.",
            "This describes Indian society before the change."]),
        M(2, "t54-s1", "Causation", "According to Marx, Indian textile production declined mainly because",
          ["cheap machine-made British yarn and cloth replaced Indian hand-made goods in Europe and in India itself", "Indian weavers refused to make cloth", "Indian farmers stopped growing cotton", "European demand for cloth disappeared"],
          ["Correct. He says Britain drove Indian cottons from Europe and then \"inundated the very mother country of cotton with cottons.\"",
            "Marx blames British competition, not Indian choices.",
            "India kept growing cotton, much of it exported as raw material.",
            "Europe bought British cloth instead."]),
        M(3, "t54-s1", "Developments and processes", "The source best illustrates which effect of industrialization outside Europe?",
          ["The decline of traditional manufacturing in places such as India, which became exporters of raw materials", "The rapid industrialization of India before 1850", "The end of trade between Britain and India", "The spread of steam power across Indian villages by 1853"],
          ["Correct. As British factories took over cloth-making, India increasingly exported raw cotton and imported finished goods.",
            "The source describes India's manufacturing declining.",
            "Trade grew, with British goods flowing to India.",
            "Marx says British steam uprooted Indian industry; it did not mean Indian villages used steam power."]),
        M(4, "t54-s1", "Sourcing and situation", "Marx's purpose in writing this article for an American newspaper was most likely to",
          ["criticize British rule and show how industrial capitalism transformed societies around the world", "praise the East India Company's government", "encourage Americans to buy Indian cloth", "describe the beauty of Indian jewelry"],
          ["Correct. As a critic of capitalism, Marx used India to show how British industry and rule broke up older economies.",
            "He calls the British an \"intruder.\"",
            "He does not urge any purchases.",
            "Jewelry is mentioned only in passing elsewhere in the article."]),
        // ===== Set 2: Belgium =====
        M(5, "t54-s2", "Causation", "According to the passage, Belgium industrialized early on the continent because it",
          ["had coal, iron, and metalworking skills and adopted British machines and expertise", "had more colonies than Britain", "banned all British technology", "had no railways"],
          ["Correct. The passage stresses resources, a metalworking tradition, a smuggled spinning machine, and an English engineer.",
            "The passage does not mention colonies.",
            "Belgians copied British technology.",
            "Belgium built one of the first railways on the continent."]),
        M(6, "t54-s2", "Developments and processes", "The Belgian government's role in building railways is best described as",
          ["the state planning and paying for transportation to support industry", "laissez-faire, leaving railways entirely to private companies", "banning railways to protect canals", "importing all railways from the United States"],
          ["Correct. The passage says the government planned and paid for a national railway network.",
            "The passage describes active government involvement.",
            "The government built railways.",
            "The passage says Cockerill's works built locomotives in Belgium."]),
        M(7, "t54-s2", "Comparison", "Belgium's path to industry is most similar to which other country's?",
          ["Germany's, where coal regions such as the Ruhr and state-backed railways drove rapid industrial growth", "India's, where hand-loom weaving declined", "Egypt's, where cotton exports grew", "China's, where the Qing government built no factories before 1860"],
          ["Correct. Like Belgium, the German states used coal, iron, British techniques, and railways to industrialize in the 1800s.",
            "India's manufacturing declined rather than industrializing.",
            "Egypt mainly exported raw cotton.",
            "This describes the absence of industrialization."]),
        M(8, "t54-s2", "Developments and processes", "The story of the smuggled spinning machine best illustrates which feature of the spread of industrialization?",
          ["Technology spread from Britain despite British efforts to keep it at home", "Britain freely shared its machines with all countries", "Belgium invented the spinning machine", "Industrial machines spread only through war"],
          ["Correct. Britain banned the export of machines and the emigration of skilled workers until the 1820s and 1840s, but knowledge spread anyway.",
            "The machine had to be smuggled.",
            "The passage calls it a British machine.",
            "It spread by smuggling and by engineers moving abroad."]),
        // ===== SAQ: Cotton famine and Egypt =====
        Q("a", "Identify ONE way, described in the passage, that the American Civil War affected Britain.",
          "The response names one effect on Britain from the passage.",
          ["Cotton prices soared.", "Many mills in Lancashire closed and hundreds of thousands of workers lost their jobs.", "British merchants turned to India and Egypt for cotton."],
          ["\"The South lost the war.\" This is not an effect on Britain.", "\"Britain fought in the Civil War.\" This is false.", "\"Cotton became cheap in Britain.\" This is the opposite of what the passage says."],
          "The passage says that when the Union blockaded Southern ports, many mills in Lancashire closed, leaving hundreds of thousands of British workers without jobs.",
          "Britain was affected."),
        Q("b", "Explain ONE way the experience of Egypt described in the passage shows the risks of an economy based on exporting raw materials.",
          "The response explains how depending on a raw-material export exposed Egypt to harm.",
          ["When American cotton returned and prices fell, Egypt's income dropped, showing how an export economy depended on prices set by distant markets.", "Egypt borrowed against its cotton wealth, and when the boom ended it could not repay, which let European powers take control of its finances.", "Because Egypt specialized in cotton for British mills, its fortunes depended on Britain's needs, which led to British control and occupation in 1882."],
          ["\"Egypt grew cotton.\" This does not explain a risk.", "\"Egypt became an industrial power.\" This is not supported.", "\"Cotton prices never changed.\" This contradicts the passage."],
          "Egypt's boom depended on high cotton prices caused by the war. When American cotton returned after 1865, prices fell and Egypt's income shrank, but its rulers still owed large debts to European banks, which gave Britain and France the chance to take over its finances.",
          "Raw materials were risky."),
        Q("c", "Explain ONE way a state outside Western Europe tried to build its own industry in the period 1750 to 1900.",
          "The response names a specific state and explains a specific effort to industrialize.",
          ["Meiji Japan built government-run factories, railways, and shipyards and sent students abroad to learn Western technology.", "Russia, under finance minister Sergei Witte, used tariffs and foreign loans to build railways like the Trans-Siberian and expand heavy industry in the 1890s.", "Muhammad Ali of Egypt built state-owned textile mills and arms factories in the early 1800s to strengthen his army."],
          ["\"Japan became modern.\" This does not describe a specific effort.", "\"Egypt grew cotton for Britain.\" This is raw-material export, not industrialization.", "\"China built the first steam engine in 1700.\" This is false."],
          "In the decades after 1868, the Meiji government in Japan built model factories, such as the Tomioka silk mill, laid railways, and hired foreign experts. It later sold many of these enterprises to private firms, which grew into large industrial companies.",
          "Other countries also had industry."),
      ] },
  ],
};

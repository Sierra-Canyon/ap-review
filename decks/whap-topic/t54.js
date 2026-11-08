// Topic 5.4 Quiz: Industrialization Spreads
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
import { maps } from "../whap/maps.js";
const MAP = "Map drawn for this review from Natural Earth land outlines (public domain). Places, dates, and routes checked against ";
const map = (id, caption, refs) => [{ svg: maps[id], caption }, { cite: MAP + refs + ".", kind: "map" }];
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why, difficulty) => ({ id: "t54-m0" + n, skill: "u5", type: "mcq", set, topic: "5.4", reasoning, question, choices, why, difficulty, answer: 0 });
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
    id: "t54-s2", name: "Belgium, the first industrial nation on the continent", intro: "Use the map below to answer the questions that follow.", label: "Map",
    sources: [{ title: "Map", blocks: map("u5f-belgium", "Industry and railways in Belgium, 1799 to 1843 (railway routes approximate)", "Wikipedia, \"History of rail transport in Belgium\" and \"Mechelen\", and Wikipedia, \"Sillon industriel\", \"Lieven Bauwens\", and \"John Cockerill (industrialist)\"") }],
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
          ["The population of Dacca fell from 150,000 to 20,000.", "Europe had long paid India for cloth with precious metals.", "British muslin exports to India were under 1,000,000 yards in 1824.", "Indian society was built around the hand-loom and spinning-wheel."],
          ["Correct. Marx links the collapse of a city famous for its fabrics to the flood of British cotton goods.",
            "This describes the earlier trade, when India sold cloth to Europe, not the damage.",
            "This number alone shows the starting point of British exports, not the damage to India.",
            "This describes Indian society before the change, not the damage."], "moderate"),
        M(2, "t54-s1", "Causation", "According to Marx, Indian textile production declined mainly because",
          ["cheap British machine-made yarn and cloth took over its markets", "Indian weavers refused to work for the East India Company", "Indian farmers stopped growing cotton for local spinners", "European buyers lost interest in cotton cloth of any kind"],
          ["Correct. He says Britain drove Indian cottons from Europe and then \"inundated the very mother country of cotton with cottons.\"",
            "Marx blames British competition, not a refusal by Indian weavers.",
            "India kept growing cotton, much of it exported as raw material.",
            "Europe kept buying cotton cloth, but from British mills instead of India."], "easy"),
        M(3, "t54-s1", "Developments and processes", "The source best illustrates which effect of industrialization outside Europe?",
          ["The decline of hand manufacturing in colonies such as India", "The rapid building of steam-powered mills in India before 1850", "The end of trade between Britain and its Indian territories", "The spread of steam engines to farms in Indian villages"],
          ["Correct. As British factories took over cloth-making, India increasingly exported raw cotton and imported finished goods.",
            "The source describes Indian manufacturing declining, not new Indian mills.",
            "Trade grew, with British yarn and cloth flowing into India.",
            "Marx says British steam \"uprooted\" Indian industry; he does not say Indian villages used steam power."], "difficult"),
        M(4, "t54-s1", "Sourcing and situation", "Marx's purpose in writing this article for an American newspaper was most likely to",
          ["criticize how British rule and industry remade Indian society", "praise the East India Company for modernizing India's economy", "urge American merchants to buy more Indian cotton cloth", "defend the right of Indian hand-loom weavers to form unions"],
          ["Correct. As a critic of capitalism, Marx used India to show how British industry and rule broke up older economies.",
            "He calls the British an \"intruder\" who \"broke up\" Indian industry.",
            "He does not urge any purchases.",
            "He describes the destruction of hand-weaving but says nothing about weavers organizing."], "moderate"),
        // ===== Set 2: Belgium (map) =====
        M(5, "t54-s2", "Causation", "Based on the map, the Cockerill works at Seraing were most likely built near Liège because the area had",
          ["coal to fuel ironworks and engines", "Belgium's largest seaport for raw cotton", "the hub where Belgium's railways met", "the first cotton mills in the country"],
          ["Correct. The map places Seraing in the coal belt that runs from Mons through Charleroi and Namur to Liège.",
            "The map marks the seaport at Antwerp, far to the north.",
            "The map marks the railway hub at Mechelen.",
            "The map marks the first cotton mills at Ghent, far from Liège."], "easy"),
        M(6, "t54-s2", "Developments and processes", "The railway lines on the map best illustrate which feature of Belgian industrialization?",
          ["A state network linking ports, coalfields, and cities", "Private lines that each served a single company's factory", "Canals that replaced railways as the way to move coal", "Railways that connected Belgium only with Britain"],
          ["Correct. The legend shows state railways running out from Mechelen to Antwerp, Ostend, Brussels, Liège, and the coalfields.",
            "The legend identifies the lines as state railways that connect many cities.",
            "The map shows railways, not canals, and dates them to the 1830s and 1840s.",
            "The lines run across Belgium and east toward Prussia, not to Britain."], "easy"),
        M(7, "t54-s2", "Comparison", "Belgium's path to industry, shown on the map, is most similar to which other country's in the 1800s?",
          ["Germany's, with Ruhr coal and state-backed railways", "India's, where hand-loom weaving declined under British rule", "Argentina's, where British-built railways carried beef to port", "Brazil's, where coffee exports paid for imported manufactures"],
          ["Correct. Like Belgium, the German states used coal, iron, British techniques, and railways to industrialize in the 1800s.",
            "India's hand manufacturing declined rather than industrializing.",
            "Argentina's railways moved farm exports to the coast; they did not serve a domestic coal and iron industry.",
            "Brazil exported a cash crop and imported factory goods rather than building heavy industry."], "difficult"),
        M(8, "t54-s2", "Developments and processes", "The label at Ghent best illustrates which feature of the spread of industrialization?",
          ["Technology spread from Britain despite its efforts to keep it", "Britain sold its newest machines freely to continental rivals", "Belgian inventors built the first powered spinning machines", "Industrial machines spread mainly through conquest in war"],
          ["Correct. The machine had to be smuggled, because Britain tried to keep its machines and skilled workers at home until the 1820s and 1840s.",
            "A machine that was sold freely would not have needed to be smuggled.",
            "The label says the machine came from Britain.",
            "The label describes smuggling, not conquest."], "moderate"),
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

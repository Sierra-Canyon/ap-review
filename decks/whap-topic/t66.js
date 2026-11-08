// Topic 6.6 Quiz: Causes of Migration in an Interconnected World
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
import { maps } from "../whap/maps.js";
const MAP = "Map drawn for this review from Natural Earth land outlines (public domain). Places and dates checked against ";
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why) => ({ id: "t66-m0" + n, skill: "u6", type: "mcq", set, topic: "6.6", reasoning, question, choices, why, answer: 0 });
const Q = (sub, prompt, earns, yes, no, example, notExample) => ({ id: "t66-q1" + sub, skill: "u6", type: "fr", set: "t66-s3", part: "SAQ 1", sub, topic: "6.6", lead: SAQ, prompt, earns, yes, no, example, notExample });

export const sets = {
  "t66-s1": {
    id: "t66-s1", name: "John Mitchel on the Irish famine", intro: ONE,
    sources: [{ title: "Source", blocks: [
      { p: "Reflect one moment on the established idea of there being a \"surplus population\" in Ireland;—an idea and phrase which were at that time unquestioned and axiomatic in political circles; while, at the same time, there were four millions of improvable waste-lands; and Ireland was still, this very year, exporting food enough to feed eight millions of people in England. Ireland, perhaps, was the only country in the world which had both surplus produce for export and surplus population for export;—too much food for her people, and too many people for her food." },
      { p: "... Further, I have called it an artificial famine: that is to say, it was a famine which desolated a rich and fertile island, that produced every year abundance and superabundance to sustain all her people and many more. The English, indeed, call that famine a \"dispensation of Providence;\" and ascribe it entirely to the blight of the potatoes. But potatoes failed in like manner all over Europe; yet there was no famine save in Ireland. ... The Almighty, indeed, sent the potato blight, but the English created the famine." },
      { p: "And lastly, I have shown, in the course of this narrative, that the depopulation of the country was not only encouraged by artificial means, namely, the Out-door Relief Act, the Labour-Rate Act, and the emigration schemes ..." },
      { cite: "John Mitchel, Irish nationalist journalist who was convicted of treason-felony in 1848, transported to Australia, and escaped to the United States in 1853, The Last Conquest of Ireland (Perhaps) (first published in 1861), pp. 82 and 219, as digitized by the Internet Archive from a later edition. The Great Famine of 1845 to 1852 killed about a million people in Ireland, and more than a million emigrated.", url: "https://archive.org/details/lastconquestofir00mitc", kind: "primary" },
    ] }],
  },
  "t66-s2": {
    id: "t66-s2", name: "Gold rushes, 1848 to 1896", intro: "Use the map below to answer the questions that follow.", label: "Map",
    sources: [{ title: "Map", blocks: [
      { svg: maps["u6-gold-rushes"], caption: "Major gold rushes, 1848 to 1896, with the year each began" },
      { cite: MAP + "Encyclopaedia Britannica (\"Gold rush,\" \"Otago,\" and \"Kalgoorlie-Boulder\") and Wikipedia, \"Gold rush\".", kind: "map" },
    ] }],
  },
  "t66-s3": {
    id: "t66-s3", name: "Japanese emigration to Hawaii and Brazil", intro: SAQ,
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that state policy shaped Japanese emigration as much as poverty did. After 1873, the Meiji government required landowners to pay a fixed land tax in cash, and in the hard times of the 1880s many farm families fell into debt or lost their land. In 1885, the Japanese government signed an agreement with the Kingdom of Hawaii, and tens of thousands of Japanese laborers went to work on Hawaii's sugar plantations under contract. Later, when the United States limited Japanese immigration in an agreement of 1907 and 1908, Japanese emigrants turned to other destinations. In 1908, the ship Kasato Maru carried the first group of Japanese emigrants to Brazil, where coffee planters needed workers after the end of slavery in 1888. Japanese communities in Hawaii and Brazil grew into some of the largest outside Japan." },
      PRACTICE,
    ] }],
  },
};

export default {
  forms: [
    { id: "t66", name: "Topic 6.6 Quiz: Causes of Migration in an Interconnected World", group: "Unit 6: Consequences of Industrialization",
      items: [
        // ===== Set 1: Mitchel =====
        M(1, "t66-s1", "Claims and evidence in sources", "Mitchel's main argument about the Irish famine is that",
          ["British policy, not the potato blight alone, turned crop failure into mass death and emigration", "the famine was a natural disaster that no government could have prevented", "Ireland had too little land to feed its people", "the famine affected all of Europe equally"],
          ["Correct. He calls it \"an artificial famine\" and says \"the English created the famine.\"",
            "He rejects this explanation as \"a fraud.\"",
            "He says Ireland had improvable waste lands and exported food.",
            "He says there was \"no famine save in Ireland.\""]),
        M(2, "t66-s1", "Sourcing and situation", "Mitchel's point of view is best explained by the fact that he",
          ["was an Irish nationalist who had been convicted and exiled by the British government", "was a British official responsible for famine relief", "was an English landlord in Ireland", "was a neutral historian writing a century later"],
          ["Correct. His experience as a nationalist punished by Britain shaped his strong accusation.",
            "He was an opponent of British rule.",
            "He was a critic of landlords.",
            "He wrote in the 1850s and 1860s and was far from neutral."]),
        M(3, "t66-s1", "Claims and evidence in sources", "Which statement from the source best supports Mitchel's claim that food was available during the famine?",
          ["Ireland was \"exporting food enough to feed eight millions of people in England.\"", "\"potatoes failed in like manner all over Europe\"", "\"the Out-door Relief Act, the Labour-Rate Act, and the emigration schemes\"", "\"The Almighty, indeed, sent the potato blight\""],
          ["Correct. He points to food exports during the famine years.",
            "This shows the blight was widespread, not that food was available.",
            "This lists policies, not evidence of food.",
            "This concedes the blight's natural cause."]),
        M(4, "t66-s1", "Causation", "The famine Mitchel describes most directly caused which migration?",
          ["Large-scale Irish emigration to the United States, Britain, Canada, and Australia", "Irish migration to China", "English migration to Ireland to farm", "The return of Irish emigrants from America"],
          ["Correct. More than a million people left Ireland during the famine, and emigration continued for decades.",
            "Irish emigrants went mainly to English-speaking lands.",
            "The passage describes depopulation, not English settlement.",
            "Emigration went the other way."]),
        // ===== Set 2: Map of gold rushes =====
        M(5, "t66-s2", "Developments and processes", "The map best illustrates which development of the period c. 1848 to c. 1900?",
          ["Discoveries of gold drew migrants to settler colonies and former colonies around the Pacific and in southern Africa.", "Gold discoveries drew European migrants mainly to China and India.", "Gold rushes took place mostly in Europe and drew migrants from the Americas.", "Gold rushes ended after the California rush of 1848."],
          ["Correct. Every rush on the map is in western North America, Australia, New Zealand, or South Africa, lands that settlers from Europe had taken or were taking, and each one drew people from far away in search of gold.",
            "The map marks no rushes in China or India. China, in fact, sent many migrants to the gold fields.",
            "This reverses the map. No rush is marked in Europe; Europe was a region that sent gold seekers, not one that received them.",
            "The map shows rushes beginning as late as 1886, 1893, and 1896."]),
        M(6, "t66-s2", "Continuity and change", "Which conclusion is best supported by the years on the map?",
          ["For about fifty years, new rushes kept drawing waves of migrants to one region after another.", "All the rushes began within the same decade.", "The rushes in Australia began before any rush in North America.", "The last rush shown on the map took place in southern Africa."],
          ["Correct. The years run from California in 1848 to the Klondike in 1896, and a new rush began somewhere every few years or decades.",
            "The years on the map range from 1848 to 1896, almost half a century.",
            "The California rush of 1848 came before the first Australian rush, in Victoria in 1851.",
            "The latest year on the map is the Klondike, in northwestern Canada, in 1896. The Witwatersrand rush began in 1886."]),
        M(7, "t66-s2", "Causation", "Which group of migrants was most directly drawn by the rush that the map dates to 1851?",
          ["British, Irish, and Chinese gold seekers who sailed to southeastern Australia", "Chinese gold seekers who sailed to South Africa", "Americans who traveled north to the Yukon in Canada", "Italian farmworkers who sailed to Argentina for the harvest"],
          ["Correct. The map dates the Victoria rush, in southeastern Australia, to 1851. Diggers came from Britain and Ireland, from other parts of Australia, and from southern China; by the end of the 1850s tens of thousands of Chinese miners lived in Victoria.",
            "The map dates the South African rush, on the Witwatersrand, to 1886, not 1851.",
            "The Klondike rush in the Yukon began in 1896, according to the map.",
            "Italian seasonal workers in Argentina harvested wheat, not gold, and the map marks no rush in South America."]),
        M(8, "t66-s2", "Comparison", "The rush that the map dates to 1886 differed from the earlier rushes shown in that",
          ["large companies with heavy machinery soon took over the gold fields, hiring many African migrant workers", "it drew no migrants from outside the region", "most of the miners were independent prospectors who panned for gold in streams", "it took place in a land with no European settlers"],
          ["Correct. The Witwatersrand's gold lay deep underground in low-grade ore, so mining companies backed by European investors soon replaced independent diggers. They hired large numbers of Black African men who migrated from across southern Africa on short labor contracts.",
            "The Witwatersrand drew prospectors and investors from Europe and workers from across southern Africa.",
            "Independent prospectors panning in streams were typical of earlier rushes such as California's. On the Witwatersrand the ore had to be crushed by machines.",
            "The Witwatersrand lay in the Transvaal, a republic founded by Boer settlers of European descent."]),
        // ===== SAQ: Japanese emigration =====
        Q("a", "Identify ONE cause of Japanese emigration described in the passage.",
          "The response names one cause from the passage.",
          ["The land tax in cash pushed many farm families into debt or off their land.", "The Japanese government's 1885 agreement with Hawaii recruited laborers for sugar plantations.", "Brazilian coffee planters needed workers after slavery ended in 1888."],
          ["\"Japanese people moved.\" This is an effect.", "\"The United States encouraged unlimited Japanese immigration.\" The passage says it limited it.", "\"Brazil abolished coffee in 1908.\" This is false."],
          "The passage says the Meiji land tax had to be paid in cash, and in hard times many farm families fell into debt or lost their land, which pushed people to look for work abroad.",
          "People wanted a better life."),
        Q("b", "Explain ONE way the end of slavery in the Americas contributed to new migrations in the period 1750 to 1900.",
          "The response connects the end of slavery to a specific new migration and explains the link.",
          ["After Brazil ended slavery in 1888, coffee planters recruited European and later Japanese immigrants to replace enslaved workers.", "After Britain abolished slavery in 1833, its sugar colonies recruited indentured workers from India.", "As slavery ended in Cuba and Peru, planters turned to Chinese contract laborers."],
          ["\"Slavery ended.\" This does not explain a migration.", "\"Freed people all moved to Europe.\" This is false.", "\"The slave trade grew after 1888.\" This is false."],
          "When Britain abolished slavery in its colonies, sugar planters in places like Trinidad and British Guiana still wanted cheap labor. The British government arranged for indentured workers from India to work on the plantations for several years, and hundreds of thousands made the journey.",
          "The end of slavery changed things."),
        Q("c", "Explain ONE way government policy encouraged or restricted migration in the period 1750 to 1900.",
          "The response names a specific government policy and explains its effect on migration.",
          ["The United States passed the Chinese Exclusion Act in 1882, which barred Chinese laborers from entering the country.", "Argentina's constitution and later laws encouraged European immigration to settle and farm its lands.", "Japan's 1885 agreement with Hawaii organized the migration of laborers to Hawaiian sugar plantations."],
          ["\"Governments controlled borders.\" This names no specific policy.", "\"Britain banned all emigration in 1850.\" This is false.", "\"The Meiji government stopped all emigration.\" This contradicts the passage."],
          "Argentina's leaders believed European settlers would develop the country, and its government encouraged immigration with free or cheap passage and land promises. Millions of Italians and Spaniards arrived in the late 1800s, many to work on farms and in Buenos Aires.",
          "Governments made rules."),
      ] },
  ],
};

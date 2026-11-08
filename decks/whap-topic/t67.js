// Topic 6.7 Quiz: Effects of Migration
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
import { bars } from "../../plot.js";
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why, difficulty) => ({ id: "t67-m0" + n, skill: "u6", type: "mcq", set, topic: "6.7", reasoning, question, choices, why, difficulty, answer: 0 });
const Q = (sub, prompt, earns, yes, no, example, notExample) => ({ id: "t67-q1" + sub, skill: "u6", type: "fr", set: "t67-s3", part: "SAQ 1", sub, topic: "6.7", lead: SAQ, prompt, earns, yes, no, example, notExample });

// Europeans and Indians ("Asiatics" in 1904) in the colony of Natal at the censuses of 1891 and 1904 (see the cites below).
const NATAL = { labels: ["Europeans, 1891", "Indians, 1891", "Europeans, 1904", "Asians, 1904"], values: [46788, 41142, 97109, 100918] };

export const sets = {
  "t67-s1": {
    id: "t67-s1", name: "The Chinese Six Companies to Congress, 1877", intro: ONE,
    sources: [{ title: "Source", blocks: [
      { p: "... Your memorialists most respectfully call your attention to the fact that by the magnanimous action of your Committee, the Chinese residents of this land were accorded a hearing, through their representatives, during the investigation. Therefore they claim the privilege to address to your honorable bodies this memorial, that they may bring to your notice the sworn testimony of prominent citizens ... in reference to \"the extent and effect\" of the immigration and residence of our people in this country." },
      { p: "... We further desire to call your attention to the fact that the \"Chinese side of the question\" was not permitted to be heard, or a representative of our interest allowed us, whereby we were debarred from having a fair hearing in a matter of vital importance to us. Consequently that investigation was one wholly and entirely ex parte." },
      { p: "[Testimony quoted in the memorial:] Q. How much tule land has your company reclaimed? A. ... I suppose we have partially reclaimed 30,000 or 40,000 acres. ... Q. What species of labor have you been employing? A. Generally Chinamen. ... Q. Does this class of labor conflict with white labor? A. I cannot see that it does. We could not do the work at all with white labor in this State at present. Q. These lands have lain vacant for 25 years? A. Yes, sir; they have been of no value at all." },
      { cite: "Memorial of the Six Chinese Companies: An Address to the Senate and House of Representatives of the United States, San Francisco, December 8, 1877, quoting testimony of George D. Roberts, president of the Tide-Land Reclamation Company, before the Joint Special Congressional Committee to Investigate Chinese Immigration (1876), as digitized by the Internet Archive from a 1970 reprint. The Six Companies were the leading associations of Chinese merchants in San Francisco. The \"ex parte\" (one-sided) investigation was by a committee of the California Senate in 1876. Tule lands were marshes in the Sacramento and San Joaquin river delta.", url: "https://archive.org/details/memorialsixchine00chin", kind: "primary" },
    ] }],
  },
  "t67-s2": {
    id: "t67-s2", name: "Europeans and Indians in Natal, 1891 and 1904", intro: "Use the chart and tables below to answer the questions that follow.", label: "Chart",
    sources: [{ title: "Chart", blocks: [
      { svg: bars({ labels: NATAL.labels, values: NATAL.values.map((v) => v / 1000), y: [0, 120], step: 20, yname: "Thousands of people", fmt: (v) => v.toFixed(1), width: 600, height: 300,
        alt: "Bar chart of the number of Europeans and of Indians in the colony of Natal, in thousands: " + NATAL.labels.map((n, i) => `${n}, ${(NATAL.values[i] / 1000).toFixed(1)}`).join("; ") + ". In 1891 Europeans slightly outnumbered Indians; by 1904 both groups had roughly doubled, and Asians slightly outnumbered Europeans." }),
        caption: "Europeans and Indians in the colony of Natal at the censuses of 1891 and 1904, in thousands" },
      { table: { head: ["Census", "Europeans", "Indians or Asians", "Total population"], rows: [["1891", "46,788", "41,142", "543,913"], ["1904", "97,109", "100,918", "1,108,754"]] } },
      { table: { head: ["1904 census, by sex", "Males", "Females"], rows: [["Europeans", "56,758", "40,351"], ["Asians", "63,497", "37,421"]] } },
      { cite: "1891: The Statesman's Year-Book 1899 (American edition), \"Natal,\" p. 548 (the rest of the 1891 total were Africans, listed as 455,983). 1904: Encyclopaedia Britannica, 11th edition (1911), \"Natal,\" vol. 19, which says the Asians were mainly Indian laborers on the sugar and other plantations; the 1904 total includes Zululand, annexed to Natal in 1897, and most of the rest were Africans. Both as transcribed on Wikisource (copies fetched from a Kiwix mirror of Wikisource, 2022).", url: "https://kwx.liehendr.com/content/wikisource_en_all_maxi_2022-09/A/Page%3AEB1911_-_Volume_19.djvu/269", kind: "data" },
    ] }],
  },
  "t67-s3": {
    id: "t67-s3", name: "Migration and mixed cultures", intro: SAQ,
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that the great migrations of the 1800s blended cultures in the places where migrants settled. In Trinidad and British Guiana, Indian indentured workers brought Hindu and Muslim festivals, and Indian foods such as roti became part of Caribbean cooking. In Peru, Chinese contract workers and their descendants opened restaurants whose mix of Chinese and Peruvian cooking became known as chifa. In Buenos Aires, Italian immigrants were so numerous that Italian words entered the local Spanish, and pizza and pasta became part of the city's food. Migrants often lived in their own neighborhoods, kept their languages, and formed associations for mutual help, while their children usually grew up speaking the language of their new home." },
      PRACTICE,
    ] }],
  },
};

export default {
  forms: [
    { id: "t67", name: "Topic 6.7 Quiz: Effects of Migration", group: "Unit 6: Consequences of Industrialization",
      items: [
        // ===== Set 1: The Six Companies =====
        M(1, "t67-s1", "Sourcing and situation", "The main purpose of the memorial was most likely to",
          ["persuade Congress not to restrict Chinese immigration", "ask Congress to end American trade with China", "request money to send Chinese workers home", "endorse the California Senate committee's report"],
          ["Correct. The Six Companies answered a hostile state report with sworn testimony that Chinese labor helped California.",
            "The memorial concerns immigration and residence, not trade.",
            "It defends Chinese residents' right to stay and work.",
            "It calls that committee's investigation \"wholly and entirely ex parte,\" or one-sided."],
          "easy"),
        M(2, "t67-s1", "Claims and evidence in sources", "Roberts's testimony best supports which claim about the effects of Chinese immigration?",
          ["Chinese labor helped turn marshes into farmland.", "Chinese workers pushed white workers out of farm jobs.", "Chinese immigrants bought most of the tule lands.", "Chinese labor kept wages high across California."],
          ["Correct. He says his company reclaimed 30,000 or 40,000 acres of tule land using \"Generally Chinamen.\"",
            "He says he \"cannot see\" that Chinese labor conflicts with white labor.",
            "He describes his own company's land, not Chinese ownership.",
            "He says nothing about wages."],
          "moderate"),
        M(3, "t67-s1", "Contextualization", "The memorial is best understood in the context of which development?",
          ["Rising anti-Chinese movements in the American West", "A Qing government plan to settle Chinese in California", "The end of the transcontinental railroad's construction", "The Burlingame Treaty's ban on Chinese immigration"],
          ["Correct. Workers' groups and politicians blamed Chinese immigrants for low wages, and Congress passed the Chinese Exclusion Act in 1882.",
            "The Qing had no such plan; Chinese migrants left mostly from Guangdong on their own or through brokers.",
            "The railroad, finished in 1869, did leave many Chinese workers seeking jobs, but the memorial answers a political campaign against them.",
            "The Burlingame Treaty of 1868 protected free migration between China and the United States; it did not ban it."],
          "difficult"),
        M(4, "t67-s1", "Sourcing and situation", "A historian should consider which limitation of the memorial as evidence about Chinese immigrants' lives?",
          ["Its testimony was chosen to support its argument.", "It was written by the California Senate committee.", "It was written after the Exclusion Act was repealed.", "It quotes no sworn testimony from any witness."],
          ["Correct. The memorial selects favorable testimony, here from an American employer rather than Chinese workers, to persuade Congress.",
            "It was written by the Six Companies, who criticized that committee.",
            "It was written in 1877; the act was passed in 1882 and repealed in 1943.",
            "It quotes the sworn testimony of George D. Roberts."],
          "moderate"),
        // ===== Set 2: Chart and tables of Natal's population =====
        M(5, "t67-s2", "Claims and evidence in sources", "Which conclusion is best supported by the chart and tables?",
          ["Natal's Indian population more than doubled from 1891 to 1904.", "Indians made up most of Natal's people by the 1904 census.", "Europeans outnumbered Asians in Natal at the 1904 census.", "Women made up most of Natal's Asian population in 1904."],
          ["Correct. It grew from 41,142 to 100,918, about two and a half times as many.",
            "Asians were 100,918 of 1,108,754 people in 1904, under a tenth.",
            "In 1904 Asians, at 100,918, slightly outnumbered Europeans, at 97,109.",
            "Asian men outnumbered Asian women, 63,497 to 37,421."],
          "easy"),
        M(6, "t67-s2", "Causation", "The trend shown in the chart most directly helps explain which development in Natal in the 1890s?",
          ["Settlers' push for laws limiting Indians", "The end of Indian indenture in Natal in 1895", "Mass migration of Natal's Europeans to India", "A ban on Asian landowning across the empire"],
          ["Correct. As the Indian community grew to match the European one, white settlers who feared competition pressed for laws such as Natal's 1895 tax on formerly indentured Indians and limits on their vote.",
            "Natal kept recruiting indentured Indians until 1911.",
            "The chart shows Natal's European population doubling, not leaving.",
            "No empire-wide ban existed; restrictions were made colony by colony."],
          "moderate"),
        M(7, "t67-s2", "Developments and processes", "The numbers of Asian men and women in 1904 best reflect which feature of migration in this period?",
          ["Labor recruiters sought mostly young men.", "Indian law barred women from emigrating.", "Families migrated together in equal numbers.", "Most Indian women in Natal had returned home."],
          ["Correct. Plantation and mine labor recruiters wanted young men, so men far outnumbered women among indentured migrants, even though colonies required some women to be recruited.",
            "Women did emigrate, as the 37,421 Asian women counted in 1904 show.",
            "Equal family migration would produce similar numbers of men and women.",
            "The table cannot show who returned, and many Indian families settled in Natal for good."],
          "moderate"),
        M(8, "t67-s2", "Continuity and change", "The growth of Natal's Indian community most directly contributed to which later development?",
          ["Gandhi's early campaigns of nonviolent resistance", "The founding of the Indian National Congress in 1885", "The end of Indian indenture in the Caribbean in 1860", "The Boer victory in the South African War of 1899"],
          ["Correct. Gandhi helped found the Natal Indian Congress in 1894 to fight anti-Indian laws and developed satyagraha in South Africa before returning to India in 1915.",
            "The Indian National Congress was founded in India in 1885, before Gandhi reached Natal, and was not a product of the Natal community; the Natal Indian Congress came in 1894.",
            "Indian indentured migration to the Caribbean continued until 1917.",
            "Britain defeated the Boer republics in the war of 1899 to 1902."],
          "difficult"),
        // ===== SAQ: Mixed cultures =====
        Q("a", "Identify ONE example from the passage of migrants bringing their culture to a new place.",
          "The response names one example from the passage.",
          ["Indian workers brought Hindu and Muslim festivals and foods like roti to Trinidad and British Guiana.", "Chinese workers in Peru created chifa, a mix of Chinese and Peruvian cooking.", "Italian immigrants brought words, pizza, and pasta to Buenos Aires."],
          ["\"Migrants moved.\" This names no cultural example.", "\"Italians brought chifa to Peru.\" This mixes up the examples.", "\"Migrants gave up their cultures immediately.\" This contradicts the passage."],
          "The passage says Chinese workers in Peru opened restaurants whose mix of Chinese and Peruvian cooking became known as chifa.",
          "Migrants had cultures."),
        Q("b", "Explain ONE way migrants maintained their own identities in their new homes in the period 1750 to 1900.",
          "The response explains a specific way migrants kept their identity.",
          ["Migrants lived in their own neighborhoods, such as Chinatowns, where they spoke their languages and kept their customs.", "Migrants formed mutual-aid associations, like the Six Companies, that helped newcomers and spoke for the community.", "Migrants kept their religious practices, such as Hindu and Muslim festivals among Indians in the Caribbean."],
          ["\"Migrants were different.\" This explains nothing.", "\"Migrants were forbidden from speaking other languages everywhere.\" This is false.", "\"Migrants lost all ties to their homelands.\" This is false."],
          "Chinese migrants in San Francisco formed district associations, which later joined as the Six Companies. These groups helped newcomers find work and housing, settled disputes, and represented the community to the government, which helped Chinese immigrants keep their identity in a hostile country.",
          "Migrants kept their ways."),
        Q("c", "Explain ONE way receiving societies responded with hostility to migrants in the period 1750 to 1900.",
          "The response names a specific hostile response and explains it.",
          ["The United States passed the Chinese Exclusion Act in 1882 to bar Chinese laborers.", "Natal taxed formerly indentured Indians and limited their right to vote and trade.", "Australian colonies passed laws to keep out Asian immigrants, leading to the White Australia policy of 1901."],
          ["\"People did not like migrants.\" This names no specific response.", "\"Brazil banned all European immigrants.\" This is false.", "\"Receiving societies welcomed all migrants equally.\" This contradicts the prompt."],
          "In 1895, Natal imposed a heavy yearly tax on formerly indentured Indians who stayed in the colony. White settlers hoped the tax would force Indians to return to India or sign new contracts, rather than compete as free farmers and traders.",
          "Some places were hostile."),
      ] },
  ],
};

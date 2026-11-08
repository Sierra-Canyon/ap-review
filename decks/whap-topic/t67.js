// Topic 6.7 Quiz: Effects of Migration
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why) => ({ id: "t67-m0" + n, skill: "u6", type: "mcq", set, topic: "6.7", reasoning, question, choices, why, answer: 0 });
const Q = (sub, prompt, earns, yes, no, example, notExample) => ({ id: "t67-q1" + sub, skill: "u6", type: "fr", set: "t67-s3", part: "SAQ 1", sub, topic: "6.7", lead: SAQ, prompt, earns, yes, no, example, notExample });

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
    id: "t67-s2", name: "Indians in Natal", intro: "Use the passage below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that Indian migration to southern Africa created a new community that faced growing discrimination. Beginning in 1860, the British colony of Natal brought indentured workers from India to cut cane on its sugar plantations. After their contracts ended, many stayed as farmers, market gardeners, and traders, and they were joined by Indian merchants who paid their own way. White settlers, worried about competition, pressed for laws against them. In 1895, Natal imposed a heavy yearly tax on formerly indentured Indians who did not return to India, and other laws limited Indians' right to vote and to trade. A young Indian lawyer, Mohandas Gandhi, who arrived in South Africa in 1893, helped found the Natal Indian Congress in 1894 to fight these laws, and he later developed his methods of nonviolent resistance there." },
      PRACTICE,
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
          ["persuade Congress not to restrict Chinese immigration by presenting testimony favorable to Chinese workers", "ask Congress to end all trade with China", "demand that Chinese immigrants be sent home", "support the California Senate committee's report"],
          ["Correct. The Six Companies answered a hostile report with testimony that Chinese labor helped California.",
            "The memorial concerns immigration, not trade.",
            "It defends Chinese residents.",
            "It calls that committee's investigation one-sided."]),
        M(2, "t67-s1", "Claims and evidence in sources", "Roberts's testimony best supports which claim about the effects of Chinese immigration?",
          ["Chinese workers did work, such as reclaiming marshland, that helped develop California's economy", "Chinese workers took all jobs from white workers", "Chinese immigrants refused to work", "Chinese immigrants owned most of California's land"],
          ["Correct. He says his company could not have reclaimed the tule lands without Chinese labor.",
            "He says Chinese labor did not conflict with white labor.",
            "He describes Chinese workers reclaiming land.",
            "He describes his company's land."]),
        M(3, "t67-s1", "Contextualization", "The memorial is best understood in the context of which development?",
          ["Rising anti-Chinese movements in the American West, which led to the Chinese Exclusion Act of 1882", "Chinese government plans to colonize California", "The building of the Panama Canal", "The end of immigration to the United States"],
          ["Correct. Workers' groups and politicians blamed Chinese immigrants for low wages, and Congress later barred Chinese laborers.",
            "No such plans existed.",
            "The canal was built from 1904 to 1914.",
            "Immigration from Europe grew."]),
        M(4, "t67-s1", "Sourcing and situation", "A historian should consider which limitation of the memorial as evidence about Chinese immigrants' lives?",
          ["It presents testimony chosen to support the Six Companies' argument, mostly from employers rather than from Chinese workers themselves", "It was written by the California Senate", "It was written after the Exclusion Act was repealed", "It contains no testimony"],
          ["Correct. The memorial selects favorable testimony, often from American employers, to persuade Congress.",
            "It was written by the Six Companies.",
            "It was written in 1877; the act was repealed in 1943.",
            "It quotes sworn testimony."]),
        // ===== Set 2: Indians in Natal =====
        M(5, "t67-s2", "Causation", "According to the passage, laws against Indians in Natal were passed mainly because",
          ["white settlers feared economic competition from Indian farmers and traders", "Indians refused to work on plantations", "the Indian government demanded them", "Gandhi asked for them"],
          ["Correct. The passage says settlers \"worried about competition\" pressed for the laws.",
            "Indians came to work on plantations.",
            "The colony of Natal passed them.",
            "Gandhi fought them."]),
        M(6, "t67-s2", "Comparison", "The treatment of Indians in Natal is most similar to which other development of the late 1800s?",
          ["Laws in the United States and Australia that restricted Asian immigrants", "The abolition of slavery in Brazil", "The opening of Japan's ports", "The unification of Germany"],
          ["Correct. In all three places, settlers used laws to limit Asian migrants who competed with them.",
            "This was the end of slavery, not discrimination against migrants.",
            "This concerned foreign trade.",
            "This concerned German nationalism."]),
        M(7, "t67-s2", "Continuity and change", "Gandhi's experience in Natal most directly contributed to which later development?",
          ["His use of nonviolent mass resistance in the movement for Indian independence", "The end of indentured labor in the Caribbean in 1860", "The Boer victory in the South African War", "The founding of the Six Companies"],
          ["Correct. Gandhi developed satyagraha in South Africa before returning to India in 1915.",
            "Indentured labor continued long after 1860.",
            "The Boers lost the war of 1899 to 1902.",
            "The Six Companies were in San Francisco."]),
        M(8, "t67-s2", "Developments and processes", "The passage best illustrates which effect of migration?",
          ["Migrants formed new communities and political organizations to defend their rights", "Migrants always returned home quickly", "Migration ended discrimination", "Migrants had no effect on their new societies"],
          ["Correct. Indians in Natal stayed, built livelihoods, and founded the Natal Indian Congress.",
            "Many stayed after their contracts.",
            "Discrimination grew.",
            "They became farmers, traders, and activists."]),
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

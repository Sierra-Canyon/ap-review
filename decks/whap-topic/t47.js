// Topic 4.7 Quiz: Changing Social Hierarchies
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why) => ({ id: "t47-m0" + n, skill: "u4", type: "mcq", set, topic: "4.7", reasoning, question, choices, why, answer: 0 });
const Q = (sub, prompt, earns, yes, no, example, notExample) => ({ id: "t47-q1" + sub, skill: "u4", type: "fr", set: "t47-s3", part: "SAQ 1", sub, topic: "4.7", lead: SAQ, prompt, earns, yes, no, example, notExample });

export const sets = {
  "t47-s1": {
    id: "t47-s1", name: "Two Spanish officers on the castes of Cartagena", intro: ONE,
    sources: [{ title: "Source", blocks: [
      { p: "The inhabitants may be divided into different casts or tribes, who derive their origin from a coalition of Whites, Negroes, and Indians ..." },
      { p: "The Whites may be divided into two classes, the Europeans, and Creoles, or Whites born in the country. The former are commonly called Chapetones, but are not numerous; most of them either return into Spain after acquiring a competent fortune, or remove up into inland provinces in order to increase it. Those who are settled at Carthagena, carry on the whole trade of that place, and live in opulence; whilst the other inhabitants are indigent, and reduced to have recourse to mean and hard labour for subsistence. The families of the White Creoles compose the landed interest; some of them have large estates, and are highly respected ..." },
      { p: "Among the other tribes which are derived from an intermarriage of the Whites with the Negroes, the first are the Mulattos. Next to these the Tercerones, produced from a White and a Mulatto ... After these follow the Quarterones, proceeding from a White and a Terceron. The last are the Quinterones, who owe their origin to a White and Quarteron. This is the last gradation, there being no visible difference between them and the Whites, either in colour or features ... Every person is so jealous of the order of their tribe or cast, that if, through inadvertence, you call them by a degree lower than what they actually are, they are highly offended ..." },
      { p: "These casts, from the Mulattos, all affect the Spanish dress ... These are the mechanics of the city; the Whites, whether Creoles or Chapetones, disdaining such a mean occupation, follow nothing below merchandise." },
      { cite: "Jorge Juan and Antonio de Ulloa, officers of the Spanish navy sent by the king of Spain to South America from 1735 to 1744, A Voyage to South America (first published in Spanish in 1748), Book I, chapter IV, \"Of the Inhabitants of Carthagena,\" translated by John Adams, fourth English edition (London), vol. 1, transcribed for this review from the Internet Archive's scan, with the old long s printed as s. Cartagena, in present-day Colombia, was a major Spanish port and slave market. \"Mechanics\" are craftsmen; \"merchandise\" here means trade.", url: "https://archive.org/details/voyagetosouthame01ullo", kind: "primary" },
    ] }],
  },
  "t47-s2": {
    id: "t47-s2", name: "The signares of Senegal", intro: "Use the passage below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that the Atlantic trade created new social groups in West African port towns. In the French trading posts of Saint-Louis and Gorée, on the coast of Senegal, a group of wealthy women of African and mixed African and European descent, known as signares, rose to prominence in the 1700s. Many signares married European traders and officials in local ceremonies that French law did not recognize, and the marriages usually ended when the men left Africa. Yet the women kept the houses, goods, and connections. Signares owned property, ships, and enslaved people, rented housing to Europeans, and acted as go-betweens with African merchants and rulers along the Senegal River. Their wealth, fine clothing, and households of servants made them some of the most powerful people in the towns, and their children often became merchants and town leaders." },
      PRACTICE,
    ] }],
  },
  "t47-s3": {
    id: "t47-s3", name: "Purity of blood in Spain", intro: SAQ,
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that Spain built a hierarchy based on religious ancestry in the century after 1492. That year, the Catholic monarchs Ferdinand and Isabella completed the conquest of Granada and ordered Spain's Jews to convert or leave. Muslims in Castile were forced to convert in 1502. Many converts and their descendants were suspected of secretly keeping their old faiths, and the Spanish Inquisition, founded in 1478, put many on trial. Cities, religious orders, universities, and military orders adopted \"purity of blood\" rules that barred people with Jewish or Muslim ancestors from office and honors, no matter how long their families had been Christian. Finally, between 1609 and 1614, the crown expelled about 300,000 Moriscos, the descendants of Muslim converts. Similar ideas about descent and \"purity\" shaped the ranking of people in Spain's American colonies." },
      PRACTICE,
    ] }],
  },
};

export default {
  forms: [
    { id: "t47", name: "Topic 4.7 Quiz: Changing Social Hierarchies", group: "Unit 4: Transoceanic Interconnections",
      items: [
        // ===== Set 1: The castes of Cartagena =====
        M(1, "t47-s1", "Claims and evidence in sources", "The source best supports which claim about colonial Cartagena?",
          ["Social rank depended on ancestry and color, with Spaniards born in Europe and Creoles at the top.", "All residents of Cartagena held equal rank.", "People of African descent held the highest offices in the city.", "Spaniards born in Europe owned most of the land around the city."],
          ["Correct. The authors rank \"casts\" by descent and describe Whites as merchants and landowners and others as craftsmen and laborers.",
            "The authors describe many ranked \"casts or tribes.\"",
            "The authors say Whites controlled trade and land.",
            "The authors say the Creole families \"compose the landed interest,\" while the Chapetones carry on the trade."]),
        M(2, "t47-s1", "Sourcing and situation", "A historian using this source should consider that the authors",
          ["were Spanish officers whose view of colonial society reflected the ideas of the Spanish elite", "were enslaved Africans describing their own lives", "had never visited Cartagena", "wrote to oppose the caste system"],
          ["Correct. As royal officers from Spain, Juan and Ulloa described the castes from above and used the elite's own terms.",
            "They were Spanish naval officers.",
            "They traveled in South America from 1735 to 1744.",
            "They describe the castes without arguing against them."]),
        M(3, "t47-s1", "Developments and processes", "The source's description of people being \"highly offended\" if called by a lower caste best shows that",
          ["people in colonial society cared about their rank because it affected their status and chances in life", "the caste system had no effect on daily life", "people wanted to be classified as lower in rank", "the Spanish government had ended all ranks by 1740"],
          ["Correct. Rank shaped which jobs, marriages, and honors people could seek, so being classified correctly mattered.",
            "People's strong reactions show that rank mattered.",
            "The source says the opposite.",
            "The source describes ranks in force at the time."]),
        M(4, "t47-s1", "Comparison", "The ranking of people by ancestry in Spanish America was most similar to which other hierarchy of the period?",
          ["The Qing dynasty's separation of Manchus from Han Chinese, with Manchus holding special privileges", "The equality of all citizens in the Dutch Republic", "The election of officials in Venice", "The ranking of Mughal officials by military rank (mansab)"],
          ["Correct. Both systems tied privilege to ancestry: the Qing kept Manchus in the banners and gave them a share of top posts.",
            "The Dutch Republic had a hierarchy too, but it was based on wealth and office, not ancestry and color.",
            "Venice limited office to noble families, but elections are not a ranking by mixed ancestry.",
            "Mansab ranks were based on service to the emperor, not descent."]),
        // ===== Set 2: The signares of Senegal =====
        M(5, "t47-s2", "Claims and evidence in sources", "The passage best supports which claim about the signares?",
          ["Some women in West African ports gained wealth and power through the Atlantic trade.", "The signares were French women who moved to Senegal.", "The signares opposed all trade with Europeans.", "French law recognized the signares' marriages."],
          ["Correct. The passage says they owned property, ships, and enslaved people and were among the most powerful people in the towns.",
            "The passage says they were women of African and mixed African and European descent.",
            "They acted as go-betweens and profited from the trade.",
            "The passage says French law did not recognize the marriages."]),
        M(6, "t47-s2", "Causation", "The rise of the signares is best explained by which feature of European trading posts in Africa?",
          ["Europeans were few, often stayed briefly, and depended on local partners who knew the language and trade", "European women outnumbered European men in the posts", "French officials gave all trade to African kings", "European trading posts in Africa were large settler colonies"],
          ["Correct. European men relied on local wives and partners for housing, contacts, and trade, which gave those women power.",
            "Very few European women lived in the posts.",
            "The passage describes signares and European traders, not kings, running the trade at the posts.",
            "The posts were small; the passage says the men usually left Africa."]),
        M(7, "t47-s2", "Comparison", "The signares are most similar to which other group in the period 1450 to 1750?",
          ["Mestizos and others of mixed ancestry in Spanish America, who became new social groups in colonial towns", "Samurai in Tokugawa Japan", "Janissaries in the Ottoman Empire", "Boyars in Russia"],
          ["Correct. Both were new groups of mixed ancestry that emerged where Europeans and local peoples met.",
            "Samurai were a hereditary warrior class, not a new group of mixed ancestry.",
            "Janissaries were soldiers recruited through the devshirme.",
            "Boyars were Russia's old landed nobility."]),
        M(8, "t47-s2", "Developments and processes", "The passage most clearly shows that the signares' wealth depended in part on",
          ["the Atlantic slave trade and ownership of enslaved people", "farming cotton with machines", "tribute from the Mughal Empire", "silver mines in Senegal"],
          ["Correct. The passage says signares owned enslaved people and traded in posts tied to the Atlantic trade.",
            "Cotton machines came with the Industrial Revolution, later.",
            "The Mughal Empire was in South Asia.",
            "Senegal had no silver mines; the passage describes trade."]),
        // ===== SAQ: Purity of blood in Spain =====
        Q("a", "Identify ONE way, described in the passage, that Spanish rulers or institutions treated people of Jewish or Muslim ancestry differently after 1492.",
          "The response names one specific policy or practice from the passage.",
          ["Jews were ordered to convert or leave Spain in 1492.", "\"Purity of blood\" rules barred people with Jewish or Muslim ancestors from offices and honors.", "The crown expelled about 300,000 Moriscos between 1609 and 1614."],
          ["\"They were treated badly.\" This names no specific policy.", "\"Spain conquered Granada.\" This is an event, not a policy toward people of Jewish or Muslim ancestry.", "\"Muslims were allowed to keep their faith.\" This is wrong: the passage says Muslims in Castile were forced to convert in 1502."],
          "The passage says cities, religious orders, and universities adopted \"purity of blood\" rules that barred anyone with Jewish or Muslim ancestors from office, even if the family had been Christian for generations.",
          "Spain had rules about religion."),
        Q("b", "Explain ONE way the ideas described in the passage shaped social hierarchy in Spain's American colonies in the period 1450 to 1750.",
          "The response explains how ideas of descent and \"purity\" affected rank in the colonies.",
          ["The casta system ranked people by their mix of Spanish, Indigenous, and African ancestry, giving the highest rank to those seen as of \"pure\" Spanish descent.", "People had to prove \"pure\" Spanish ancestry to hold some offices or enter some schools and religious orders in the colonies.", "Peninsulares and Creoles of Spanish descent held most high offices, while people of African or mixed ancestry were kept from them."],
          ["\"The colonies had a hierarchy.\" This does not connect it to ideas of descent.", "\"Everyone in the colonies was equal.\" This is false.", "\"The colonies expelled all Moriscos.\" This confuses events in Spain with the colonies."],
          "In Spanish America, the idea that ancestry determined worth became the casta system. People of \"pure\" Spanish descent ranked highest, those of mixed Spanish and Indigenous or African ancestry ranked lower, and the rules about purity of blood kept many from holding office or entering the clergy.",
          "Spain brought its ideas to America."),
        Q("c", "Explain ONE way a state outside Spain in the period 1450 to 1750 used religion or ancestry to rank or restrict groups of people.",
          "The response names another state and explains a specific policy that ranked or restricted people by religion or ancestry.",
          ["The Ottoman Empire required non-Muslims to pay the jizya and organized them into religious communities with their own leaders.", "The Qing dynasty kept Manchus in separate banner units with special privileges and required Han Chinese men to wear the Manchu queue.", "Tokugawa Japan banned Christianity in 1614 and later required families to register at Buddhist temples to prove they were not Christians."],
          ["\"Other countries had religions.\" This explains no policy.", "\"The Mughals forced all Hindus to convert under Akbar.\" This is false: Akbar ended the jizya and welcomed Hindu nobles.", "\"Spain expelled the Moriscos.\" The prompt asks about a state outside Spain."],
          "The Qing dynasty ranked people by ancestry. Manchus served in separate banner units with special pay and privileges, and they held a large share of top offices, while Han Chinese men were ordered to shave their foreheads and wear the Manchu queue as a sign of submission.",
          "Other states also had hierarchies."),
      ] },
  ],
};

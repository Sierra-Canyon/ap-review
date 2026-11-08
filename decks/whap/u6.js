// Unit 6: Consequences of Industrialization, c. 1750 to c. 1900
// Sources: every stimulus (multiple-choice sets, SAQs with a source, DBQ documents), keyed by id.
// 11/8: sets u6-s5 and u6-s10, first written as practice passages, became map sets drawn by tools/build-maps.mjs
// (specs in tools/maps/whap-u6r.mjs), and every multiple-choice item has a difficulty label.
import { maps } from "./maps.js";

const MAP = "Map drawn for this review from Natural Earth land outlines (public domain). Places, dates, and routes checked against ";
const map = (id, caption, refs) => [{ svg: maps[id], caption }, { cite: MAP + refs + ".", kind: "map" }];

export const sets = {
  "u6-s1": {
    id: "u6-s1", name: "Pearson, National Life from the Standpoint of Science", intro: "Use the passage below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "History shows me one way, and one way only, in which a high state of civilization has been produced, namely, the struggle of race with race, and the survival of the physically and mentally fitter race. ..." },
        { p: "You will see that my view ... is that of an organized whole, kept up to a high pitch of internal efficiency by insuring that its numbers are substantially recruited from the better stocks, and ... kept up to a high pitch of external efficiency by contest, chiefly by way of war with inferior races, and with equal races by the struggle for trade-routes and for the sources of raw material and of food supply." },
        { cite: "Karl Pearson, British mathematician and professor at University College London, National Life from the Standpoint of Science, a lecture given in 1900; from the 2nd edition (Cambridge: Cambridge University Press, 1919), excerpts from pp. 21 to 64. Text from the Internet Modern History Sourcebook, Fordham University.", url: "https://sourcebooks.web.fordham.edu/mod/1900pearsonl.asp", kind: "primary" },
      ] },
    ],
  },
  "u6-s2": {
    id: "u6-s2", name: "Ukhtomskii on Russia in Asia", intro: "Use the passage below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "The idea of invading a complex foreign life, of using Asia as a tool for the advancement of the selfish interests of modern, so-called civilized, mankind, was repugnant to us. For more than two hundred years we have remained at home; for our natural union with Turkestan and the region of the Amur cannot be regarded as political annexations." },
        { p: "Russia alone does not know what it is annually to send forth to foreign lands thousands of her sons who cannot find food and shelter amid the superfluity of wealth and labor falling to the share of their countrymen. With us there is work for all---work to last for hundreds of years; with us everyone who has hands to work is a welcome guest on our eastern, or, rather, southeastern borders, ..." },
        { cite: "Prince E. Ukhtomskii, Travels in the East of Nicholas II, Emperor of Russia, When Cesarewitch, 1890 to 1891, 2 vols. (London, 1896), vol. II. English translation published in London in 1896; the source page names no translator. Text from the Internet Modern History Sourcebook, Fordham University.", url: "https://sourcebooks.web.fordham.edu/mod/1891ukhtomskii.asp", kind: "primary" },
      ] },
    ],
  },
  "u6-s3": {
    id: "u6-s3", name: "Moshweshewe to Governor Grey", intro: "Use the letter below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "Unfortunately it was not with the English Government that my first intercourse with the whites commenced. People who had come from the Colony first presented themselves to us, they called themselves Boers. I thought all white men were honest. ... I was led to believe they would live with me as my own people lived, that is, looking to me as to a father and a friend." },
        { p: "About sixteen years since, one of the Governors of the Colony, Sir George Napier, marked down my limits on a treaty he made with me. I was to be ruler within those limits. A short time after, another Governor came, it was Sir P. Maitland. The Boers then began to talk of their right to places I had then lent to them." },
        { cite: "Moshweshewe (Moshoeshoe), king of the Basotho, letter to Sir George Grey, governor of the Cape Colony, 1858. English text printed in G. M. Theal, ed., Records of Southeastern Africa (Capetown: Government of Capetown, 1898 to 1903), as cited by the Internet Modern History Sourcebook, Fordham University.", url: "https://sourcebooks.web.fordham.edu/mod/1858basuto.asp", kind: "primary" },
      ] },
    ],
  },
  "u6-s4": {
    id: "u6-s4", name: "Dutt on British policy and Indian manufactures", intro: "Use the source below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "India in the eighteenth century was a great manufacturing as well as a great agricultural country, and the products of the Indian loom supplied the markets of Asia and of Europe. It is, unfortunately, true that the East Indian Company and the British Parliament, following the selfish commercial policy of a hundred years ago, discouraged Indian manufacturers in the early years of British rule in order to encourage the rising manufactures of England. Their fixed policy, pursued during the last decades of the eighteenth century and the first decades of the nineteenth, was to make India subservient to the industries of Great Britain, and to make the Indian people grow raw produce only, in order to supply material for the looms and manufactories of Great Britain." },
        { p: "This policy was pursued with unwavering resolution and with fatal success; ... prohibitive tariffs excluded Indian silk and cotton goods from England; English goods were admitted into India free of duty or on payment of a nominal duty." },
        { cite: "Romesh Chunder Dutt, Indian official in the colonial civil service until 1897 and president of the Indian National Congress in 1899, The Economic History of India under Early British Rule, Preface (dated December 1901), pp. vii to viii; first published 1902. Text from the fourth edition (London: Kegan Paul, Trench, Trübner, n.d.), scanned at the Internet Archive.", url: "https://archive.org/stream/economichistoryo00duttuoft/economichistoryo00duttuoft_djvu.txt", kind: "primary" },
      ] },
    ],
  },
  "u6-s5": {
    id: "u6-s5", name: "Export economies, c. 1900", intro: "Use the map below to answer the questions that follow.", label: "Map",
    sources: [{ title: "Map", blocks: map("u6r-exports", "Export economies, c. 1900: some ports and regions and the main export each sent to industrial countries",
      "Encyclopaedia Britannica's entries for each country and export, and Wikipedia's articles on each export trade (\"Economic history of Argentina,\" \"Coffee production in Brazil,\" \"Cotton in Egypt,\" \"Tea production in Sri Lanka,\" \"Tin mining in Malaysia,\" and others)") }],
  },
  "u6-s6": {
    id: "u6-s6", name: "Immigration to the United States by decade", intro: "Use the table below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "Persons admitted to the United States as permanent residents, by country of origin and decade. No data means the source reports no figure for that decade." },
        { table: {
          head: ["Country of origin", "1850 to 1859", "1860 to 1869", "1870 to 1879", "1880 to 1889", "1890 to 1899", "1900 to 1909"],
          rows: [
            ["Ireland", "1,029,486", "427,419", "422,264", "674,061", "405,710", "344,940"],
            ["Germany", "976,072", "723,734", "751,769", "1,445,181", "579,072", "328,722"],
            ["Italy", "8,643", "9,853", "46,296", "267,660", "603,761", "1,930,475"],
            ["Austria-Hungary", "No data", "3,375", "60,127", "314,787", "534,059", "2,001,376"],
            ["Russia", "423", "1,667", "34,977", "173,081", "413,382", "1,501,301"],
            ["China", "35,933", "54,028", "133,139", "65,797", "15,268", "19,884"],
            ["Japan", "No data", "138", "193", "1,583", "13,998", "139,712"],
            ["All countries", "2,814,554", "2,081,261", "2,742,137", "5,248,568", "3,694,294", "8,202,388"],
          ],
        } },
        { cite: "U.S. Department of Homeland Security, 2019 Yearbook of Immigration Statistics, Table 2: Persons Obtaining Lawful Permanent Resident Status by Region and Selected Country of Last Residence, Fiscal Years 1820 to 2019. Before 1906, the table records country of origin. Fiscal year 1850 covers 15 months. Figures checked against the same table in the 2013 Yearbook.", url: "https://ohss.dhs.gov/sites/default/files/2023-12/yearbook_immigration_statistics_2019_0.pdf", kind: "data" },
      ] },
    ],
  },
  "u6-s7": {
    id: "u6-s7", name: "Indentured labor after abolition", intro: "Use the passage below to answer all parts of the question that follows.",
    sources: [
      { title: "Source", blocks: [
        { p: "After Britain abolished slavery in its empire in the 1830s, sugar planters in the Caribbean, Mauritius, and later Natal and Fiji faced a shortage of workers willing to labor on plantations for low wages. Planters and colonial governments turned to indentured servitude. Recruiters signed up laborers, mostly from British India and southern China, who agreed to work for a fixed term, often five years, in exchange for passage, wages, and sometimes a return ticket. Between the 1830s and the early twentieth century, more than one million Indians left home under such contracts. Many recruits came from regions hit by famine, debt, and the decline of local crafts. Contracts were often poorly explained, and plantation conditions could resemble slavery. Yet many migrants stayed after their terms ended and built lasting Indian and Chinese communities abroad." },
        { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" },
      ] },
    ],
  },
  "u6-s8": {
    id: "u6-s8", name: "Australia's Immigration Restriction Act, 1901", intro: "Use the source below to answer all parts of the question that follows.",
    sources: [
      { title: "Source", blocks: [
        { p: "3. The immigration into the Commonwealth of the persons described in any of the following paragraphs of this section (herein-after called “prohibited immigrants”) is prohibited, namely:—" },
        { p: "(a) Any person who when asked to do so by an officer fails to write out at dictation and sign in the presence of the officer a passage of fifty words in length in an European language directed by the officer;" },
        { p: "..." },
        { p: "(g) any persons under a contract or agreement to perform manual labour within the Commonwealth: Provided that this paragraph shall not apply to workmen exempted by the Minister for special skill required in Australia ..." },
        { cite: "Parliament of the Commonwealth of Australia, Immigration Restriction Act 1901 (No. 17 of 1901), assented to December 23, 1901, section 3, paragraphs (a) and (g). Text from Wikisource.", url: "https://en.wikisource.org/wiki/Immigration_Restriction_Act_1901", kind: "primary" },
      ] },
    ],
  },
  "u6-s9": {
    id: "u6-s9", name: "Greathed on the outbreak at Meerut, 1857", intro: "Use the source below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "Sunday, the 10th of May, dawned in peace and happiness. ... We were on the point of going to the evening service, when the disturbance commenced on the Native Parade ground. Shots and volumes of smoke told of what was going on: our servants begged us not to show ourselves, and urged the necessity of closing our doors, as the mob were approaching." },
        { p: "... After dark, a party of insurgents rushed into the grounds, drove off the guard, and broke into the house, and set it on fire. ... We owed much to the fidelity of our servants: had but one proved treacherous, our lives must have been sacrificed." },
        { p: "... Our faithful servant, Golab Khan, ... boldly went up to them, won their confidence by declaring himself of their faith, and willing to give us up into their hands." },
        { cite: "Elisa Greathed, wife of a British official of the East India Company, account of the outbreak at Meerut on May 10, 1857, in her introduction to H. H. Greathed, Letters Written During the Siege of Delhi, edited by his widow (London: Longman, Brown, Green, Longmans, and Roberts, 1858). Text from the Internet Modern History Sourcebook, Fordham University.", url: "https://sourcebooks.web.fordham.edu/mod/1857Greathed.asp", kind: "primary" },
      ] },
    ],
  },
  "u6-s10": {
    id: "u6-s10", name: "Wild rubber and the move to plantations", intro: "Use the map below to answer the questions that follow.", label: "Map",
    sources: [{ title: "Map", blocks: map("u6r-rubber", "Wild rubber and the move to plantations: where wild rubber was gathered c. 1900, and how rubber seeds were carried from Brazil to Asia, 1876 to 1877 (routes approximate)",
      "Wikipedia, \"Henry Wickham (explorer)\" and \"Congo Free State,\" and \"Henry Wickham\" at British Empire (britishempire.co.uk) with Encyclopaedia Britannica, \"Manaus\"") }],
  },
  "u6-s11": {
    id: "u6-s11", name: "Opium, treaties, and China's trade", intro: "Use the passage below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "In the early nineteenth century, British merchants bought large amounts of Chinese tea but found that Chinese buyers wanted few British goods. To close the gap, they shipped opium grown in British India to China, where the drug was illegal. As addiction spread, silver flowed out of China to pay for it. When the Qing official Lin Zexu seized and destroyed British opium at Canton in 1839, Britain went to war and won. The Treaty of Nanjing (1842) and the treaties that followed opened more ports to foreign trade, fixed China's tariffs at low rates, and gave foreigners extraterritoriality, the right to be tried in their own countries' consular courts rather than Chinese courts. By the late 1890s, foreign powers had marked out spheres of influence. China remained an independent empire, but outsiders controlled much of its trade." },
        { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" },
      ] },
    ],
  },
  "u6-s12": {
    id: "u6-s12", name: "Men abroad, women at home", intro: "Use the passage below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "Most long-distance labor migrants in the late nineteenth century were young men. Italian, Chinese, Indian, and Lebanese men often left wives, parents, and children at home, planning to work abroad for several years and then return. Their absence changed the communities they left. In many southern Italian and Lebanese villages, women took over farm work, managed household money, and dealt with officials and merchants, roles that men had usually filled. Migrants sent money home, and these payments bought land, built new houses, paid for dowries, and covered the passage of relatives who followed them abroad. In receiving societies, the pattern ran the other way: early Chinese communities in places such as California and Malaya had far more men than women. Historians debate how lasting the changes at home were, since many households returned to older patterns when the men came back." },
        { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" },
      ] },
    ],
  },
  "u6-dbq": {
    id: "u6-dbq", name: "DBQ: Motives for imperial expansion", intro: "Use the seven documents below to answer the document-based question.",
    sources: [
      { title: "Document 1", blocks: [
        { p: "The exportation of laborers and capital from old to new countries, from a place where their productive power is less, to a place where it is greater, increases by so much the aggregate produce of the labor and capital of the world. It adds to the joint wealth of the old and the new country, what amounts in a short period to many times the mere cost of effecting the transport. There needs be no hesitation in affirming that Colonization, in the present state of the world, is the best affair of business, in which the capital of an old and wealthy country can engage." },
        { cite: "John Stuart Mill, British economist and philosopher, Principles of Political Economy, first published 1848; from the edition by J. Laurence Laughlin (New York: D. Appleton and Co., 1891), pp. 540 to 560. The Internet Modern History Sourcebook notes that the text was modernized by Jerome S. Arkenberg. Text from the Internet Modern History Sourcebook, Fordham University.", url: "https://sourcebooks.web.fordham.edu/mod/1849jsmill-colonies.asp", kind: "primary" },
      ] },
      { title: "Document 2", blocks: [
        { p: "During the reigns of the emperors Kien-lung and Kia-king these English barbarians humbly besought an entrance and permission to deliver tribute and presents; they afterwards presumptuously asked to have Chu-san; but our sovereigns, clearly perceiving their traitorous designs, gave them a determined refusal. From that time, linking themselves with traitorous Chinese traders, they have carried on a large trade and poisoned our brave people with opium. Verily, the English barbarians murder all of us that they can. They are dogs, whose desires can never be satisfied. Therefore we need not inquire whether the peace they have now made be real or pretended. Let us all rise, arm, unite, and go against them." },
        { cite: "Declaration of a public meeting of the people of Canton (Guangzhou), China, against the English, 1842. English text in Eva March Tappan, ed., China, Japan, and the Islands of the Pacific, vol. I of The World's Story (Boston: Houghton Mifflin, 1914), p. 197. Text from the Internet Modern History Sourcebook, Fordham University.", url: "https://sourcebooks.web.fordham.edu/mod/1842canton.asp", kind: "primary" },
      ] },
      { title: "Document 3", blocks: [
        { p: "For the following reasons we think the British government ought now to take possession of the New Hebrides group of the South Sea islands, ..." },
        { p: "4. All the men and all the money used in civilizing and Christianizing the New Hebrides have been British. ..." },
        { p: "5. Because the New Hebrides are already a British dependency in this sense---all its imports are from Sydney and Melbourne and British colonies, and all its exports are also to British colonies." },
        { p: "7. Because if any other nation takes possession of them, their excellent and spacious harbors, as on Efate, so well-supplied with the best fresh water, and their near-proximity to Great Britain's Australasian colonies, would in time of war make them dangerous to British interests and commerce in the South Seas and her colonies." },
        { cite: "John G. Paton, Presbyterian missionary of the New Hebrides Mission, published letter urging British annexation of the New Hebrides (present-day Vanuatu), in Accounts and Papers 1883 (London: Her Majesty's Stationery Office, 1883), vol. XLVII, pp. 29 to 30. Text from the Internet Modern History Sourcebook, Fordham University.", url: "https://sourcebooks.web.fordham.edu/mod/1883hebrides.asp", kind: "primary" },
      ] },
      { title: "Document 4", blocks: [
        { p: "By far the most important economic factor in Imperialism is the influence relating to investments. The growing cosmopolitanism of capital is the greatest economic change of this generation. Every advanced industrial nation is tending to place a larger share of its capital outside the limits of its own political area, in foreign countries, or in colonies, and to draw a growing income from this source. ..." },
        { p: "It is not too much to say that the modern foreign policy of Great Britain is primarily a struggle for profitable markets of investment. To a larger extent every year Great Britain is becoming a nation living upon tribute from abroad, and the classes who enjoy this tribute have an ever-increasing incentive to employ the public policy, the public purse, and the public force to extend the field of their private investments, and to safeguard and improve their existing investments." },
        { cite: "John A. Hobson, British economist and journalist and a critic of imperialism, Imperialism: A Study (London: James Nisbet, 1902), part I, chapter IV, \"Economic Parasites of Imperialism,\" pp. 56 to 57 and 60. Text from the 1902 edition scanned at the Internet Archive; two scanning errors (\"investmenta,\" \"modem\") are corrected to the printed words.", url: "https://archive.org/stream/imperialismastu00goog/imperialismastu00goog_djvu.txt", kind: "primary" },
      ] },
      { title: "Document 5", blocks: [
        { p: "Policies of the Pan-German League, 1898:" },
        { p: "2. Laying of a cable from Kiachow [China] to Port Arthur [Dairen, in Manchuria], with connection with the Russian-Siberian cable." },
        { p: "3. Strengthening of the German foothold in Kiaochow." },
        { p: "4. German coaling and cable stations in the Red Sea, the West Indies, and near Singapore." },
        { p: "5. Complete possession of Samoa." },
        { p: "6. More subsidized German steamship lines to Kiaochow and Korea. ..." },
        { p: "8. Development of harbor of Swakopmund [in German Southwest Africa] and railroads to Windhoek [the capital of the territory]." },
        { p: "9. Securing of concessions for commerce and industry in Asia Minor. . ." },
        { cite: "Pan-German League, a German nationalist organization, program of 1898, in Mildred S. Wertheimer, The Pan-German League (New York: Columbia University Press, 1923), pp. 31 to 34, 106 to 108. Text from the Internet Modern History Sourcebook, Fordham University.", url: "https://sourcebooks.web.fordham.edu/mod/1890pangerman.asp", kind: "primary" },
      ] },
      { title: "Document 6", blocks: [
        { p: "In spite of the fact that we have no such fleet as we should have, we have conquered for ourselves a place in the sun. It will now be my task to see to it that this place in the sun shall remain our undisputed possession, in order that the sun's rays may fall fruitfully upon our activity and trade in foreign parts, that our industry and agriculture may develop within the state and our sailing sports upon the water, for our future lies upon the water. The more Germans go out upon the waters, whether it be in races or regattas, whether it be in journeys across the ocean, or in the service of the battle flag, so much the better it will be for us." },
        { cite: "Kaiser Wilhelm II, emperor of Germany, speech to the North German Regatta Association, 1901, in C. Gauss, The German Kaiser as Shown in His Public Utterances (New York: Charles Scribner's Sons, 1915), pp. 181 to 183. Text from the Internet Modern History Sourcebook, Fordham University.", url: "https://sourcebooks.web.fordham.edu/mod/1901Kaiser.asp", kind: "primary" },
      ] },
      { title: "Document 7", blocks: [
        { p: "22nd Dec., 1900. The old century is very nearly out, and leaves the world in a pretty pass, and the British Empire is playing the devil in it as never an empire before on so large a scale. We may live to see its fall. ... In South Africa our troops are burning farms under Kitchener's command, and the Queen and the two houses of Parliament, and the bench of bishops thank God publicly and vote money for the work. The Americans are spending fifty millions a year on slaughtering the Filipinos; the King of the Belgians has invested his whole fortune on the Congo, where he is brutalizing the Negroes to fill his pockets. ... The whole white race is reveling openly in violence, as though it had never pretended to be Christian." },
        { cite: "Wilfrid Scawen Blunt, English poet and critic of British imperialism, diary entry of December 22, 1900, in My Diaries: Being a Personal Narrative of Events, 1888 to 1914, 2 vols. (New York: Alfred A. Knopf, 1921), vol. I. The Internet Modern History Sourcebook notes that the text was modernized by Jerome S. Arkenberg. Text from the Internet Modern History Sourcebook, Fordham University.", url: "https://sourcebooks.web.fordham.edu/mod/1899blunt.asp", kind: "primary" },
      ] },
    ],
  },
};

export default [
  // ---------- Set 1: Pearson ----------
  { id: "u6-m01", skill: "u6", type: "mcq", set: "u6-s1", topic: "6.1", reasoning: "Causation", difficulty: "easy",
    question: "Pearson's argument in the excerpt drew most directly on which of the following ideas?",
    choices: [
      "Social Darwinism, which ranked races by fitness",
      "Marxism, which saw history as class struggle",
      "Liberalism, which grounded rule in consent",
      "Mercantilism, which measured wealth in bullion",
    ],
    why: [
      "Correct. Pearson treats history as a \"struggle of race with race\" in which the \"fitter race\" survives, which applies Darwin's idea of natural selection to human races and nations.",
      "Marxism also described history as a struggle, but between classes, and it attacked capitalist societies rather than ranking races.",
      "Liberal ideas of consent argued against ruling peoples without their agreement, the opposite of Pearson's case for war with \"inferior races.\"",
      "Mercantilism was an earlier economic theory about trade and bullion. Pearson's mention of raw materials is part of a racial argument, not a theory of hoarding gold.",
    ], answer: 0 },
  { id: "u6-m02", skill: "u6", type: "mcq", set: "u6-s1", topic: "6.1", reasoning: "Causation", difficulty: "moderate",
    question: "Pearson's reference to \"the struggle for trade-routes and for the sources of raw material and of food supply\" best reflects which motive for imperial expansion in the late nineteenth century?",
    choices: [
      "Rivalry among industrial powers for resources",
      "The search for silver to pay for Chinese silk",
      "Missionaries' wish to spread Christianity abroad",
      "The need for land to resettle British convicts",
    ],
    why: [
      "Correct. Pearson names rivalry with \"equal races\" over trade routes and raw materials, the competition among Britain, Germany, the United States, and others for resources and markets that pushed them to claim colonies.",
      "Europeans did pay for Chinese goods with American silver, but that pattern belongs mainly to the sixteenth to eighteenth centuries, and the excerpt does not mention it.",
      "Missionary work was a real motive for empire, but Pearson says nothing about religion.",
      "Britain did send convicts to Australia from 1788, but the excerpt is about rivalry over trade and raw materials, not prisons.",
    ], answer: 0 },
  { id: "u6-m03", skill: "u6", type: "mcq", set: "u6-s1", topic: "6.1", reasoning: "Comparison", difficulty: "difficult",
    question: "Pearson's argument differs most from the \"civilizing mission\" argument for empire in that Pearson",
    choices: [
      "treats racial war, not uplift, as the path to progress",
      "denies that any race or nation is better than another",
      "urges Britain to give up colonies and trade at home",
      "grounds empire in Christian duty rather than science",
    ],
    why: [
      "Correct. Writers of the civilizing mission claimed that ruling others was a burden carried for the colonized peoples' benefit. Pearson instead praises \"war with inferior races\" as a test that keeps a nation strong and says nothing about helping the colonized.",
      "Both Pearson and the civilizing mission assumed that some peoples were superior, so this is not a difference. Pearson speaks openly of \"better stocks\" and \"inferior races.\"",
      "Pearson wants a nation kept strong by \"contest,\" including the struggle for raw materials, which supports expansion rather than giving up colonies.",
      "This reverses the source. Pearson grounds his argument in what he calls science, while many civilizing-mission writers appealed to Christian duty.",
    ], answer: 0 },
  { id: "u6-m04", skill: "u6", type: "mcq", set: "u6-s1", topic: "6.3", reasoning: "Continuity and change", difficulty: "moderate",
    question: "Which of the following developments most directly challenged Pearson's assumption that European nations would win their \"war with inferior races\"?",
    choices: [
      "Ethiopia defeated an Italian army at Adwa in 1896.",
      "British forces defeated the Mahdists at Omdurman in 1898.",
      "European powers divided Africa at Berlin in 1884 to 1885.",
      "Americans used racial arguments to annex the Philippines.",
    ],
    why: [
      "Correct. Under Menelik II, Ethiopia bought modern weapons and defeated Italy at Adwa, keeping its independence while most of Africa was colonized.",
      "Omdurman is accurate, but a British and Egyptian victory with machine guns seemed to confirm European military power rather than challenge it.",
      "The Berlin Conference set rules for European claims, which fits Pearson's view of rivalry among European powers instead of challenging it.",
      "American annexationists did use such arguments, but that shows Pearson's ideas spreading, not being challenged.",
    ], answer: 0 },

  // ---------- Set 2: Ukhtomskii ----------
  { id: "u6-m05", skill: "u6", type: "mcq", set: "u6-s2", topic: "6.2", reasoning: "Causation", difficulty: "easy",
    question: "The author's reference to \"Turkestan and the region of the Amur\" refers to which nineteenth-century development?",
    choices: [
      "Russia's overland expansion into Central and East Asia",
      "Russia's sale of Alaska to the United States in 1867",
      "Russia's defeat by Britain and France in the Crimean War",
      "Russia's support for Slavic nationalists in the Balkans",
    ],
    why: [
      "Correct. In the mid and late nineteenth century Russia conquered the Central Asian khanates of Turkestan and took the Amur region from Qing China, extending its land empire.",
      "The sale of Alaska shrank Russia's territory, so it does not fit a passage about Russia's \"natural union\" with new lands.",
      "The Crimean War (1853 to 1856) was a Russian defeat near the Black Sea, not an expansion into Central or East Asia.",
      "Russia did back Slavic movements in the Balkans, but the Balkans are in southeastern Europe, not Turkestan or the Amur.",
    ], answer: 0 },
  { id: "u6-m06", skill: "u6", type: "mcq", set: "u6-s2", topic: "6.2", reasoning: "Comparison", difficulty: "moderate",
    question: "Russian expansion as described in the passage was most similar to which of the following?",
    choices: [
      "The westward expansion of the United States",
      "The East India Company's coastal trading posts",
      "Japan's seizure of Taiwan from China in 1895",
      "Leopold II's personal rule over the Congo",
    ],
    why: [
      "Correct. Like Russia, the United States expanded across a continent into lands next to its existing borders and then sent settlers to farm and work there.",
      "The East India Company began as a trading company based in coastal posts, which is unlike Russia's overland annexation and settlement of neighboring lands.",
      "Japan gained Taiwan as an overseas colony through war with China, which differs from the overland expansion the passage describes.",
      "Leopold's Congo was an overseas colony run largely to extract rubber and ivory, the kind of \"selfish\" exploitation the author says Russia rejected.",
    ], answer: 0 },
  { id: "u6-m07", skill: "u6", type: "mcq", set: "u6-s2", topic: "6.2", reasoning: "Comparison", difficulty: "moderate",
    question: "Ukhtomskii traveled with the future Tsar Nicholas II on a tour of Asia in 1890 and 1891. Which of the following best describes the author's purpose in the passage?",
    choices: [
      "To cast Russia's expansion as natural, unlike the West's",
      "To urge Russia to leave Central Asia and build industry",
      "To urge Russian peasants to seek land in the Americas",
      "To propose an alliance with Japan to divide China",
    ],
    why: [
      "Correct. The author contrasts Russia with \"so-called civilized\" Western powers that use Asia for selfish ends and claims Russia's growth is a \"natural union\" rather than conquest.",
      "Russia did push industrial growth in the 1890s, but the passage defends Russia's presence in Asia rather than calling for withdrawal.",
      "The passage claims that Russia, unlike other countries, does not need to send its people abroad, so it does not encourage emigration.",
      "Russia and Japan competed for influence in Manchuria and Korea and went to war in 1904, and the passage does not propose any alliance.",
    ], answer: 0 },
  { id: "u6-m08", skill: "u6", type: "mcq", set: "u6-s2", topic: "6.6", reasoning: "Causation", difficulty: "difficult",
    question: "Which of the following would most directly challenge the author's claim in the second paragraph?",
    choices: [
      "Many Jews left the Russian Empire for the United States.",
      "Millions of Russian peasants settled in Siberia after 1890.",
      "Russia began building the Trans-Siberian Railway in 1891.",
      "Russia freed its serfs in 1861 but left many in debt.",
    ],
    why: [
      "Correct. The author claims Russia does not send its people abroad, but hundreds of thousands left the Russian Empire for the United States in the 1880s and 1890s, many of them Jews pushed out by poverty and by pogroms after 1881.",
      "Peasant settlement in Siberia supports the author's claim that Russia had \"work for all\" on its eastern borders rather than challenging it.",
      "The Trans-Siberian Railway helped Russia settle and control its eastern lands, which fits the author's view instead of contradicting it.",
      "Emancipation and peasant debt are accurate, but this fact alone does not show that Russians were leaving the country.",
    ], answer: 0 },

  // ---------- Set 3: Moshweshewe ----------
  { id: "u6-m09", skill: "u6", type: "mcq", set: "u6-s3", topic: "6.2", reasoning: "Causation", difficulty: "easy",
    question: "The arrival of the \"Boers\" described in the letter was part of which broader development?",
    choices: [
      "The Great Trek of Dutch-speaking settlers from the Cape",
      "The founding of a British penal colony at Sydney in 1788",
      "The wars of the Zulu kingdom under Shaka in the 1820s",
      "The arrival of Indian indentured workers in Natal after 1860",
    ],
    why: [
      "Correct. In the Great Trek, beginning in the 1830s, Boer settlers left the British-ruled Cape and moved into the interior, partly to escape British rule, and claimed land held by African peoples such as the Basotho.",
      "The Sydney penal colony began British settlement in Australia, but it took place on another continent and did not involve the Boers.",
      "Shaka's wars did reshape southern Africa and helped Moshweshewe build his kingdom, but the Zulu were not the settlers \"from the Colony\" in the letter.",
      "Indian laborers did arrive in Natal from 1860, but they came as plantation workers, not as the Boer landholders the letter describes.",
    ], answer: 0 },
  { id: "u6-m10", skill: "u6", type: "mcq", set: "u6-s3", topic: "6.3", reasoning: "Comparison", difficulty: "moderate",
    question: "The letter best illustrates which type of response to state expansion?",
    choices: [
      "Appealing to one imperial power against settlers' claims",
      "Following a prophet who promised the settlers would vanish",
      "Buying modern rifles to defeat a European army in battle",
      "Leading colonial soldiers in revolt against their officers",
    ],
    why: [
      "Correct. Moshweshewe writes to the British governor, recounts treaties and boundaries, and seeks British help against Boer claims, a diplomatic strategy.",
      "Prophetic movements such as the Xhosa cattle killing and the Ghost Dance were real responses to expansion, but the letter relies on treaties and negotiation, not prophecy.",
      "Ethiopia's victory over Italy at Adwa in 1896 fits this description, but the letter describes negotiation, not a military victory.",
      "The Indian Rebellion of 1857 began as a revolt of sepoys in the British army, which is a different kind of resistance than this letter shows.",
    ], answer: 0 },
  { id: "u6-m11", skill: "u6", type: "mcq", set: "u6-s3", topic: "6.2", reasoning: "Comparison", difficulty: "difficult",
    question: "The pattern in the letter, in which settlers claimed land that a local ruler believed he had only lent to them, was most similar to which of the following?",
    choices: [
      "Maori land disputes after the Treaty of Waitangi",
      "The opening of Qing treaty ports to British merchants",
      "The Greek war of independence against the Ottomans",
      "Britain's occupation of Egypt to protect the Suez Canal",
    ],
    why: [
      "Correct. In New Zealand, as in southern Africa, settlers and colonial officials read treaties as giving them land that indigenous leaders believed they had not given up, which led to wars over land.",
      "Treaty ports gave foreign merchants trading rights in China, but they did not bring large numbers of settlers claiming farmland.",
      "Greek independence was a nationalist revolt against an empire, not a dispute between settlers and a local ruler over land.",
      "The occupation of Egypt in 1882 was driven by strategy and debt, and Britain ruled through officials rather than through settlers seizing land.",
    ], answer: 0 },
  { id: "u6-m12", skill: "u6", type: "mcq", set: "u6-s3", topic: "6.3", reasoning: "Continuity and change", difficulty: "difficult",
    question: "Which of the following later developments most directly resulted from the conflict described in the letter?",
    choices: [
      "Britain took Basutoland under its rule in 1868.",
      "Britain conquered the Zulu kingdom after Isandlwana in 1879.",
      "The Witwatersrand gold rush founded Johannesburg in 1886.",
      "The Xhosa killed their cattle hoping the British would leave.",
    ],
    why: [
      "Correct. After more wars with the Orange Free State, Moshweshewe sought British protection, and Basutoland (later the independent country of Lesotho) came under British rule in 1868, keeping it out of Boer control.",
      "The Anglo-Zulu War was a separate conflict between Britain and the Zulu, not a result of the Basotho and Boer land dispute.",
      "The Witwatersrand gold rush transformed South Africa's economy, but it came decades later and had different causes.",
      "The Xhosa cattle killing of 1856 and 1857 was a separate response to British expansion on the eastern Cape frontier, and it came before this letter.",
    ], answer: 0 },

  // ---------- Set 4: Dutt ----------
  { id: "u6-m13", skill: "u6", type: "mcq", set: "u6-s4", topic: "6.5", reasoning: "Causation", difficulty: "difficult",
    question: "Which of the following best explains why British policy, as Dutt describes it, aimed to make Indians \"grow raw produce only\"?",
    choices: [
      "British mills wanted Indian raw cotton and Indian buyers.",
      "The 1857 rebellion made Britain distrust Indian artisans.",
      "Victory at Plassey in 1757 gave the Company control of Bengal.",
      "Ending the slave trade in 1807 cut labor for Caribbean sugar.",
    ],
    why: [
      "Correct. Dutt ties the policy to \"the rising manufactures of England.\" Machine spinning and weaving made Britain want Indian raw cotton for its looms and Indian buyers for its cloth, not Indian cloth competing with it.",
      "The rebellion came in 1857, after the decades Dutt describes, so it cannot explain a policy he dates to the late eighteenth and early nineteenth centuries.",
      "Plassey is accurate and began Company rule in Bengal, but it explains how Britain gained power in India, not why British policy turned against Indian manufactures.",
      "Abolition of the slave trade is accurate, but it shaped labor in the Caribbean, not British trade policy toward Indian cloth.",
    ], answer: 0 },
  { id: "u6-m14", skill: "u6", type: "mcq", set: "u6-s4", topic: "6.4", reasoning: "Continuity and change", difficulty: "easy",
    question: "Dutt's statement that Britain meant \"to make the Indian people grow raw produce only\" most directly reflects which broader pattern of the period c. 1750 to c. 1900?",
    choices: [
      "Colonies were reshaped to export raw materials.",
      "States such as Meiji Japan built heavy industry.",
      "Joint-stock companies funded long trading voyages.",
      "Silver from the Americas paid for Asian goods.",
    ],
    why: [
      "Correct. Under colonial rule, India's economy was pushed toward exporting cash crops and raw materials to Britain while buying British manufactured goods, as were many other colonized regions.",
      "Meiji Japan did industrialize under state direction, but the excerpt describes colonial India producing raw goods, not building heavy industry.",
      "Joint-stock companies such as the British East India Company were founded around 1600, and they do not explain the shift toward raw exports described here.",
      "American silver did fund European trade with Asia, but that pattern belongs mainly to the sixteenth to eighteenth centuries.",
    ], answer: 0 },
  { id: "u6-m15", skill: "u6", type: "mcq", set: "u6-s4", topic: "6.5", reasoning: "Comparison", difficulty: "moderate",
    question: "Dutt's point of view in the excerpt was most likely shaped by which of the following?",
    choices: [
      "His career as an Indian official who became a nationalist",
      "His profits as a British merchant selling English cloth",
      "His support for the rebels who backed the Mughals in 1857",
      "His years as a Christian missionary in rural Bengal",
    ],
    why: [
      "Correct. Dutt served in the Indian Civil Service, retired in 1897, and presided over the Indian National Congress in 1899. He knew the colonial system from inside and wrote to show how British policy had harmed India's economy.",
      "British merchants did profit from that trade, but Dutt was an Indian critic of it, and he calls the policy \"selfish.\"",
      "The rebels of 1857 rejected British rule by force, while Dutt writes a history meant to persuade readers that British economic policy should change.",
      "Christian missionaries were active in India, but Dutt was not one, and his concerns in the excerpt are economic, not religious.",
    ], answer: 0 },
  { id: "u6-m16", skill: "u6", type: "mcq", set: "u6-s4", topic: "6.3", reasoning: "Continuity and change", difficulty: "moderate",
    question: "Which later development most directly built on the argument of the excerpt?",
    choices: [
      "The swadeshi movement's boycott of British goods",
      "The proclamation of Victoria as Empress of India",
      "The opening of the Suez Canal on the route to India",
      "The partition of British India into two states in 1947",
    ],
    why: [
      "Correct. Swadeshi activists, beginning in 1905, built on the idea that British trade policy had destroyed Indian industry by asking Indians to boycott British goods and buy Indian cloth.",
      "Making Victoria empress in 1877 strengthened the symbolism of British rule rather than continuing Dutt's economic critique.",
      "The Suez Canal (1869) tightened economic ties between Britain and India, but it was not a development that built on Dutt's critique.",
      "Partition came at independence and was driven mainly by divisions between Hindus and Muslims, not by Dutt's economic argument.",
    ], answer: 0 },

  // ---------- Set 5: Export economies (map) ----------
  { id: "u6-m17", skill: "u6", type: "mcq", set: "u6-s5", topic: "6.5", reasoning: "Causation", difficulty: "moderate",
    question: "In the regions shown on the map, foreign investment in the late nineteenth century most often paid for",
    choices: [
      "railways and ports that carried exports",
      "factories to turn raw goods into finished ones",
      "schools and universities for local engineers",
      "navies to defend these ports from Europe",
    ],
    why: [
      "Correct. British and other European investors built railways and harbors, such as the British-owned lines that carried Argentine wheat and beef to Buenos Aires, to move raw goods to the coast for export.",
      "Investors put little money into local factories; the raw goods on the map were shipped to factories in places such as London, Hamburg, and New York.",
      "Foreign investors in this period seldom paid for higher education in exporting regions.",
      "The ports on the map traded with Europe, and foreign investors did not fund navies to resist it.",
    ], answer: 0 },
  { id: "u6-m18", skill: "u6", type: "mcq", set: "u6-s5", topic: "6.5", reasoning: "Comparison", difficulty: "moderate",
    question: "Unlike the exports shown for Alexandria, Colombo, and Rangoon, the exports shown for Buenos Aires and Santos came from countries that",
    choices: [
      "were independent states, not colonies",
      "exported manufactured goods to Europe",
      "received no British investment at all",
      "remained colonies of Spain and Portugal",
    ],
    why: [
      "Correct. Argentina and Brazil had been independent since the 1810s and 1820s, while Egypt (Alexandria), Ceylon (Colombo), and Burma (Rangoon) were under British rule. Their dependence on foreign markets and investors without formal rule is called economic imperialism.",
      "The map shows beef, wheat, and coffee, which are raw goods, not manufactures.",
      "British investors put large sums into Argentina and Brazil, especially in railways.",
      "Argentina won independence from Spain and Brazil from Portugal decades before 1900.",
    ], answer: 0 },
  { id: "u6-m19", skill: "u6", type: "mcq", set: "u6-s5", topic: "6.8", reasoning: "Causation", difficulty: "easy",
    question: "Demand for the cotton, jute, and tin shown on the map came mainly from",
    choices: [
      "factories in Europe and the United States",
      "the growing middle class of Qing China",
      "Ottoman workshops making army uniforms",
      "colonial governments for local industry",
    ],
    why: [
      "Correct. Textile mills needed cotton and jute, and industries used tin for cans and metal goods; the industrial ports marked on the map show where much of it went.",
      "China was not the main buyer of these raw materials in this period.",
      "Ottoman workshops were small buyers compared with the factories of Western Europe and the United States.",
      "Colonial governments encouraged raw exports rather than local industry.",
    ], answer: 0 },
  { id: "u6-m20", skill: "u6", type: "mcq", set: "u6-s5", topic: "6.4", reasoning: "Continuity and change", difficulty: "difficult",
    question: "The export economies shown on the map most closely continued which pattern from the period c. 1450 to c. 1750?",
    choices: [
      "Colonial exports of silver and sugar to Europe",
      "The Ming dynasty's limits on private overseas trade",
      "Ottoman control of eastern Mediterranean trade",
      "The spread of American food crops to Afro-Eurasia",
    ],
    why: [
      "Correct. Colonial Latin America and the Caribbean already depended on exporting a few raw goods, especially silver and sugar, to outside markets, a pattern that continued with the beef, coffee, and sugar shown on the map.",
      "Ming trade limits were a policy of a strong state controlling its own trade, not a region depending on exports to outside powers.",
      "Ottoman control of trade routes shows a powerful empire profiting from trade, the opposite of dependence on foreign buyers.",
      "The spread of American food crops was part of the Columbian Exchange, which changed diets and populations but is not an example of export dependence.",
    ], answer: 0 },

  // ---------- Set 6: Immigration data ----------
  { id: "u6-m21", skill: "u6", type: "mcq", set: "u6-s6", topic: "6.6", reasoning: "Causation", difficulty: "easy",
    question: "Which of the following most directly explains the number of migrants from Ireland in the 1850s?",
    choices: [
      "The Great Famine caused by potato blight",
      "The failed revolutions of 1848 in Germany",
      "The completion of the transcontinental railroad",
      "Pogroms against Jews in the Russian Empire",
    ],
    why: [
      "Correct. The famine of the late 1840s and early 1850s, made worse by British policy, killed about a million people, and more than a million emigrated, which explains Ireland's very high numbers in the 1850s.",
      "The failed 1848 revolutions help explain German emigration, not Irish emigration.",
      "The transcontinental railroad was finished in 1869, too late to explain migration in the 1850s.",
      "Pogroms after 1881 pushed Jews out of the Russian Empire, which helps explain the Russia row, not the Ireland row.",
    ], answer: 0 },
  { id: "u6-m22", skill: "u6", type: "mcq", set: "u6-s6", topic: "6.7", reasoning: "Continuity and change", difficulty: "difficult",
    question: "Which of the following best explains the change in migration from China between the 1870s and the 1890s?",
    choices: [
      "A United States law of 1882 barring Chinese laborers",
      "The end of the Taiping Rebellion in southern China in 1864",
      "The growth of Chinese migration to Southeast Asian mines",
      "The Qing program sending students to American schools",
    ],
    why: [
      "Correct. The Chinese Exclusion Act of 1882 suspended the entry of Chinese laborers, and the numbers fell from 133,139 in the 1870s to 15,268 in the 1890s.",
      "The Taiping Rebellion pushed people to leave China in the 1850s and 1860s, but its end does not explain the sharp drop after 1882.",
      "Chinese migration to Southeast Asia was large in this period, but it does not explain the sudden drop in arrivals to the United States after 1882.",
      "The Chinese Educational Mission of the 1870s sent about 120 students, too few to affect the totals in the table.",
    ], answer: 0 },
  { id: "u6-m23", skill: "u6", type: "mcq", set: "u6-s6", topic: "6.8", reasoning: "Causation", difficulty: "moderate",
    question: "The rise in migration from Italy, Austria-Hungary, and Russia between the 1870s and the decade 1900 to 1909 was most likely caused by which of the following?",
    choices: [
      "Rural poverty at home and industrial jobs in America",
      "United States laws that favored southern Europeans",
      "Britain's early start in factory industrialization",
      "The Irish famine pushing millions out of Europe",
    ],
    why: [
      "Correct. Push factors such as land shortage and poverty and pull factors such as factory, mine, and railroad jobs in the United States drove this \"new immigration.\"",
      "No such laws existed. United States quota laws of the 1920s limited southern and eastern Europeans and reduced migration rather than causing it to rise.",
      "Britain did industrialize first, starting in the eighteenth century, but that does not explain why emigration from Italy, Austria-Hungary, and Russia rose after 1870.",
      "The Irish famine explains Irish emigration in the 1840s and 1850s, not later migration from southern and eastern Europe.",
    ], answer: 0 },
  { id: "u6-m24", skill: "u6", type: "mcq", set: "u6-s6", topic: "6.7", reasoning: "Continuity and change", difficulty: "difficult",
    question: "Which later development was most directly a response to the trend shown in the row for Japan?",
    choices: [
      "The Gentlemen's Agreement of 1907 to 1908",
      "The Meiji Restoration that ended shogun rule in 1868",
      "Japan's victory in the Russo-Japanese War of 1905",
      "The Chinese Exclusion Act passed by Congress in 1882",
    ],
    why: [
      "Correct. As Japanese arrivals rose sharply after 1890, anti-Japanese pressure grew on the West Coast, and the two governments agreed that Japan would stop issuing passports to laborers bound for the United States.",
      "The Meiji Restoration came before the rise in Japanese migration, so it could be a cause but not a response.",
      "The Russo-Japanese War showed Japan's growing power, but it was a conflict with Russia, not a response to migration to the United States.",
      "The Chinese Exclusion Act targeted Chinese laborers and came before the rise in Japanese migration, so it cannot be a response to it.",
    ], answer: 0 },

  // ---------- Set 9: Greathed on Meerut, 1857 ----------
  { id: "u6-m25", skill: "u6", type: "mcq", set: "u6-s9", topic: "6.3", reasoning: "Causation", difficulty: "easy",
    question: "Which of the following was a major cause of the uprising that began at Meerut in May 1857?",
    choices: [
      "Rumors of greased cartridges and anger at annexations",
      "Britain's decision to replace Company rule with Crown rule",
      "The Company's victory over the Nawab of Bengal at Plassey",
      "The Indian National Congress's campaign for self-rule",
    ],
    why: [
      "Correct. Hindu and Muslim soldiers feared that biting cartridges rumored to be greased with cow and pig fat would break their religious rules, and recent annexations such as that of Awadh in 1856 had angered princes and landholders. At Meerut, sepoys rose after comrades were jailed for refusing the cartridges.",
      "This reverses cause and effect. The Crown took over from the Company in 1858 because of the uprising.",
      "Plassey (1757) began Company rule in Bengal a century earlier. It is background, not the cause of the 1857 outbreak.",
      "The Indian National Congress was founded in 1885, almost thirty years after the uprising.",
    ], answer: 0 },
  { id: "u6-m26", skill: "u6", type: "mcq", set: "u6-s9", topic: "6.2", reasoning: "Continuity and change", difficulty: "easy",
    question: "Which change in the government of India most directly resulted from the uprising described in the excerpt?",
    choices: [
      "The British Crown took direct rule from the Company in 1858.",
      "India won independence and was divided into two states.",
      "The Mughal emperor regained power under British protection.",
      "Britain shared rule of India with France and Portugal.",
    ],
    why: [
      "Correct. After crushing the rebellion, Parliament passed the Government of India Act of 1858, ending Company rule and placing India under a British viceroy. This was a shift from rule by a trading company to rule by the state.",
      "Independence and partition came in 1947, nearly a century later.",
      "This reverses the outcome. The British exiled the last Mughal emperor to Burma and ended the dynasty.",
      "France and Portugal kept only small coastal posts in India and had no share in governing British India.",
    ], answer: 0 },
  { id: "u6-m27", skill: "u6", type: "mcq", set: "u6-s9", topic: "6.3", reasoning: "Comparison", difficulty: "moderate",
    question: "The actions of Golab Khan and the other servants in the excerpt best support which conclusion about the uprising of 1857?",
    choices: [
      "Indians responded to the uprising in different ways.",
      "All Muslims in northern India joined the rebels.",
      "The uprising involved soldiers but never civilians.",
      "Britain's European rivals organized and paid the rebels.",
    ],
    why: [
      "Correct. Greathed's servants warned her and protected her family, and Golab Khan tricked the rebels. Many Indians, including whole regions and princely states, stayed loyal to the British or stayed out of the fighting.",
      "This overstates the source. Golab Khan says he shares the rebels' faith yet works to save the family, which shows that religion did not decide everyone's side.",
      "The excerpt describes a \"mob\" and \"insurgents\" breaking into the house, and the revolt did spread to civilians across northern India.",
      "There is no evidence in the excerpt or the historical record that other European powers organized the uprising.",
    ], answer: 0 },
  { id: "u6-m28", skill: "u6", type: "mcq", set: "u6-s9", topic: "6.3", reasoning: "Causation", difficulty: "moderate",
    question: "Greathed's account would be most useful to a historian studying which of the following?",
    choices: [
      "How British families experienced and saw the uprising",
      "The reasons the sepoys at Meerut gave for rebelling",
      "How the uprising affected Indian weavers' wages",
      "How the Mughal court in Delhi organized rebel armies",
    ],
    why: [
      "Correct. Greathed was the wife of a British official, and she writes about her own household's danger and escape. Her account shows what British families lived through and how she judged the \"fidelity\" or \"treachery\" of Indians.",
      "Greathed reports what she saw from her house and never records the rebels' own words or grievances, so a historian would need sources written by or about the sepoys.",
      "The excerpt says nothing about wages or textile work.",
      "Greathed was in Meerut, not Delhi, and her account does not describe the Mughal court.",
    ], answer: 0 },

  // ---------- Set 10: Rubber (map) ----------
  { id: "u6-m29", skill: "u6", type: "mcq", set: "u6-s10", topic: "6.4", reasoning: "Causation", difficulty: "moderate",
    question: "The movement of rubber seeds shown on the map was carried out mainly because British officials wanted to",
    choices: [
      "grow rubber in colonies Britain controlled",
      "end forced labor in the Congo Free State",
      "help Brazil start its own rubber plantations",
      "supply rubber for Britain's first railways",
    ],
    why: [
      "Correct. Rubber was a valuable industrial raw material that grew wild mainly in Brazil, so British officials sprouted Brazilian seeds at Kew and sent the seedlings to Ceylon and Malaya to grow it under British control.",
      "The Congo Free State was not founded until 1885, nine years after the seeds were moved.",
      "The seeds were taken out of Brazil to compete with it, not to help it.",
      "Britain's first railways were built in the 1820s and 1830s, decades before 1876, and they did not depend on rubber.",
    ], answer: 0 },
  { id: "u6-m30", skill: "u6", type: "mcq", set: "u6-s10", topic: "6.4", reasoning: "Comparison", difficulty: "difficult",
    question: "Rubber from the Congo source shown on the map differed from later plantation rubber in Malaya in that Congo rubber was",
    choices: [
      "gathered from wild plants under forced quotas",
      "grown from seeds that had passed through Kew",
      "sold mainly to factories within Africa itself",
      "produced by indentured workers from southern India",
    ],
    why: [
      "Correct. In the Congo Free State, Leopold II's agents and concession companies forced villages to collect wild rubber and punished those who fell short with hostage-taking, beatings, and mutilation.",
      "Seeds sprouted at Kew went to Ceylon and Malaya, so this describes Malayan plantation rubber, not Congo rubber.",
      "Congo rubber was shipped to factories in Europe and the United States.",
      "Indentured and contract workers from southern India tapped trees on Malaya's plantations, not in the Congo.",
    ], answer: 0 },
  { id: "u6-m31", skill: "u6", type: "mcq", set: "u6-s10", topic: "6.4", reasoning: "Continuity and change", difficulty: "easy",
    question: "The map best illustrates which pattern of the period c. 1750 to c. 1900?",
    choices: [
      "Empires moved crops to build plantation economies.",
      "Colonies built factories to make finished goods.",
      "Protest ended forced labor across colonial Africa.",
      "Industries replaced rubber with other materials.",
    ],
    why: [
      "Correct. British officials carried Brazilian rubber to Ceylon and Malaya to grow for export, much as other colonies were turned toward tea, sugar, or palm oil for industrial markets.",
      "This reverses the pattern. Ceylon and Malaya exported raw rubber, and the factories that used it were mostly in Europe and the United States.",
      "Protest against the Congo Free State led Belgium to take over the colony in 1908, but forced labor continued in many colonies, and the map does not show it.",
      "Demand for rubber kept rising for bicycle and then automobile tires, which is why plantations were planted.",
    ], answer: 0 },

  // ---------- Set 11: Opium and China (practice passage) ----------
  { id: "u6-m32", skill: "u6", type: "mcq", set: "u6-s11", topic: "6.5", reasoning: "Causation", difficulty: "easy",
    question: "According to the passage, British merchants sold opium in China mainly because",
    choices: [
      "they needed a good to pay for Chinese tea",
      "the Qing invited them to sell opium as medicine",
      "British mills needed raw cotton from China",
      "opium was legal in China and lightly taxed",
    ],
    why: [
      "Correct. The passage says Chinese buyers wanted few British goods, so merchants shipped Indian opium \"to close the gap\" left by their tea purchases.",
      "The passage says the drug was illegal in China, and Qing officials such as Lin Zexu tried to stop the trade.",
      "British mills relied mainly on cotton from the American South, India, and later Egypt, and the passage does not mention Chinese cotton.",
      "This contradicts the passage, which says opium was illegal in China.",
    ], answer: 0 },
  { id: "u6-m33", skill: "u6", type: "mcq", set: "u6-s11", topic: "6.5", reasoning: "Continuity and change", difficulty: "difficult",
    question: "Which later development most directly continued the pattern described in the last two sentences of the passage?",
    choices: [
      "The Boxer Protocol of 1901 and its indemnity",
      "The end of foreign privileges in China in 1949",
      "Japan's revision of its unequal treaties by 1911",
      "A Qing return to trade through Canton alone",
    ],
    why: [
      "Correct. After the Boxer Rebellion, the Boxer Protocol forced China to pay a large indemnity and let foreign powers station troops in Beijing, again imposing terms on a China that stayed formally independent.",
      "The end of foreign privileges after 1949 was a change that ended the pattern, not a continuation of it.",
      "Treaty revision is accurate for Japan, but it describes a different country escaping the pattern, not China continuing it.",
      "This reverses the passage. The treaties ended the Canton system and opened more ports.",
    ], answer: 0 },
  { id: "u6-m34", skill: "u6", type: "mcq", set: "u6-s11", topic: "6.3", reasoning: "Causation", difficulty: "moderate",
    question: "Which of the following was a response within China to the developments described in the passage?",
    choices: [
      "Self-Strengthening arsenals and shipyards",
      "The Meiji Restoration's overthrow of the shogun",
      "The Ming voyages of Zheng He to the Indian Ocean",
      "The founding of the Indian National Congress",
    ],
    why: [
      "Correct. After the Opium Wars and the Taiping Rebellion, officials such as Li Hongzhang built arsenals, shipyards, and other enterprises to strengthen China against foreign powers.",
      "The Meiji Restoration was a response to Western pressure, but it took place in Japan, not China.",
      "Zheng He's voyages took place in the early 1400s, four centuries before the Opium War.",
      "The Indian National Congress was a response to British rule in India, not to foreign pressure on China.",
    ], answer: 0 },

  // ---------- Set 12: Gender and migration (practice passage) ----------
  { id: "u6-m35", skill: "u6", type: "mcq", set: "u6-s12", topic: "6.7", reasoning: "Causation", difficulty: "easy",
    question: "According to the passage, one effect of male labor migration on the communities migrants left was that",
    choices: [
      "women took on roles that men had usually filled",
      "women won full legal equality in Italy and Lebanon",
      "villages stopped getting any money from abroad",
      "most families moved abroad within a few years",
    ],
    why: [
      "Correct. The passage says women in many villages ran farms, managed money, and dealt with officials and merchants while the men were away.",
      "This overstates the passage. Women took on new tasks, but the passage says nothing about legal equality, and historians debate how lasting the changes were.",
      "This reverses the passage, which says migrants sent money home.",
      "The passage says many men planned to return and many did, so permanent family moves were not the main effect described.",
    ], answer: 0 },
  { id: "u6-m36", skill: "u6", type: "mcq", set: "u6-s12", topic: "6.7", reasoning: "Comparison", difficulty: "moderate",
    question: "The passage's statement that money sent home \"covered the passage of relatives who followed them abroad\" best illustrates which pattern?",
    choices: [
      "Chain migration, in which migrants bring relatives",
      "Circular migration, in which migrants go back and forth",
      "Forced migration, in which people move against their will",
      "Internal migration, in which people move within a country",
    ],
    why: [
      "Correct. When migrants pay for relatives' tickets, each wave of migration pulls in the next, which is chain migration.",
      "Circular migration also appears in the passage, since many men planned to return, but this phrase describes relatives following, not migrants going back and forth.",
      "The relatives chose to follow, and the passage describes no force.",
      "The passage describes migration abroad, from Italy, China, India, and Lebanon to other countries, not within one country.",
    ], answer: 0 },
  { id: "u6-m37", skill: "u6", type: "mcq", set: "u6-s12", topic: "6.7", reasoning: "Continuity and change", difficulty: "difficult",
    question: "Which of the following sources would best help a historian test the passage's claim that women in migrants' home villages took over roles men had usually filled?",
    choices: [
      "Village tax and land records, 1880 to 1910, listed by sex",
      "Ship lists of migrants arriving in New York, by age and sex",
      "The text of the United States Chinese Exclusion Act",
      "A government report on factory wages in Naples",
    ],
    why: [
      "Correct. Records of who bought and sold land and dealt with tax officials, over several decades, would show whether women in sending villages did more of this work while men were abroad.",
      "Passenger lists show who left, mostly men, but not what the women who stayed behind did.",
      "The Exclusion Act shows how one receiving society restricted migrants, not how women's roles changed in home villages.",
      "Factory wages in a city say little about the farm and household work of women in rural villages.",
    ], answer: 0 },
  { id: "u6-m38", skill: "u6", type: "mcq", set: "u6-s12", topic: "6.6", reasoning: "Causation", difficulty: "difficult",
    question: "Which of the following most directly explains why so many of the migrants described in the passage were young men who planned to return home?",
    choices: [
      "Employers wanted short-term workers, and families sent men.",
      "Most receiving countries barred all women from entering.",
      "Steamships made ocean travel slower and more costly.",
      "Britain's abolition of slavery created plantation jobs.",
    ],
    why: [
      "Correct. Mines, railroads, plantations, and farms abroad needed large numbers of laborers, often for seasons or a few years, and rural families used one man's wages abroad to pay debts or buy land at home, as the passage's remittances show.",
      "This overstates the case. Some laws, such as American restrictions on Chinese women, made it harder for women to migrate, but no general ban on all women existed.",
      "This reverses the change. Steamships made crossings faster and cheaper, which made return trips easier.",
      "Abolition is accurate and helps explain indentured migration to the Caribbean, but it does not explain the Italian and Lebanese migration in the passage or why men planned to return.",
    ], answer: 0 },
  // ---------- SAQ 1: practice passage on indentured labor ----------
  { id: "u6-q1a", skill: "u6", type: "fr", set: "u6-s7", part: "SAQ 1", sub: "a", topic: "6.6",
    lead: "Use the passage below to answer all parts of the question that follows.",
    prompt: "Identify ONE piece of historical evidence that would support the passage's argument about why indentured migration began.",
    earns: "The response names a specific, accurate piece of evidence connecting the end of slavery or plantation labor demand to the recruitment of indentured workers.",
    yes: [
      "After Britain abolished slavery in the 1830s, planters in Mauritius brought in Indian indentured workers to grow sugar.",
      "Planters in British Guiana and Trinidad recruited workers from India to replace formerly enslaved people who left the sugar estates.",
      "Indentured Indians were brought to Fiji from 1879 to work on sugar plantations.",
    ],
    no: [
      "\"Slavery ended.\" This is too vague and does not connect the end of slavery to indentured recruitment.",
      "\"The Atlantic slave trade brought Africans to the Americas.\" This is accurate but describes forced migration before abolition, not the start of indenture.",
    ],
    example: "After Britain abolished slavery, sugar planters in British Guiana and Trinidad struggled to keep workers on their estates, so they recruited indentured laborers from India, which supports the passage's claim that indenture filled a labor gap left by abolition.",
    notExample: "People moved to new places for many reasons." },
  { id: "u6-q1b", skill: "u6", type: "fr", set: "u6-s7", part: "SAQ 1", sub: "b", topic: "6.6",
    lead: "Use the passage below to answer all parts of the question that follows.",
    prompt: "Explain ONE way that economic developments in the period c. 1750 to c. 1900 pushed people to leave their homes as migrants.",
    earns: "The response explains how a specific economic development created conditions that pushed people to emigrate.",
    yes: [
      "Cheap British factory cloth undercut Indian hand weavers, leaving many artisans without work and willing to sign indenture contracts.",
      "Population growth and small landholdings in southern Italy left many peasants too poor to farm, so millions left for Argentina and the United States.",
      "Famine and crop failure in Ireland in the 1840s pushed more than a million people to emigrate.",
    ],
    no: [
      "\"People wanted more money.\" This does not name a specific development or explain how it pushed migration.",
      "\"The Chinese Exclusion Act stopped migration.\" This describes a restriction on migration, not a cause pushing people to leave.",
    ],
    example: "Machine-made British textiles flooded Indian markets in the nineteenth century and ruined many hand spinners and weavers. Without their old livelihoods, many of these workers and their families were pushed to sign indenture contracts to work abroad.",
    notExample: "Industrialization happened, so people migrated." },
  { id: "u6-q1c", skill: "u6", type: "fr", set: "u6-s7", part: "SAQ 1", sub: "c", topic: "6.7",
    lead: "Use the passage below to answer all parts of the question that follows.",
    prompt: "Explain ONE way the migration described in the passage changed the societies that received migrants in the period c. 1830 to c. 1920.",
    earns: "The response explains a specific, accurate effect of Indian or Chinese labor migration on a receiving society.",
    yes: [
      "Indian migrants who stayed in Trinidad and British Guiana built Hindu temples and Muslim mosques, adding new religions and festivals to Caribbean society.",
      "By the early twentieth century, people of Indian descent made up a large share of Fiji's population, which changed its politics and culture.",
      "In Natal, Indian merchants and laborers formed a large community that faced discrimination, and Mohandas Gandhi organized protests there against unequal laws.",
    ],
    no: [
      "\"The societies changed a lot.\" This does not explain any specific change.",
      "\"Migrants sent money home.\" Remittances affected the sending societies, not the receiving societies the prompt asks about.",
    ],
    example: "Many Indian indentured workers in Trinidad stayed after their contracts ended. They built temples and mosques and celebrated festivals such as Diwali, so Trinidad became a society with large Hindu and Muslim communities alongside its African and European populations.",
    notExample: "The migrants worked on plantations." },

  // ---------- SAQ 2: Australia's Immigration Restriction Act ----------
  { id: "u6-q2a", skill: "u6", type: "fr", set: "u6-s8", part: "SAQ 2", sub: "a", topic: "6.6",
    lead: "Use the source below to answer all parts of the question that follows.",
    prompt: "Describe ONE historical development that brought migrants from Asia or the Pacific Islands to Australia before 1901.",
    earns: "The response accurately describes a specific development that drew or brought Asian or Pacific Island workers to Australia before 1901.",
    yes: [
      "The gold rushes in Victoria and New South Wales that began in 1851 drew tens of thousands of Chinese miners to Australia.",
      "From the 1860s, sugar planters in Queensland recruited, and sometimes kidnapped, tens of thousands of Pacific Islanders to work on their plantations.",
      "Poverty and the violence of the Taiping Rebellion in southern China pushed many men to seek work overseas, including in the Australian goldfields.",
    ],
    no: [
      "\"People wanted to move to Australia.\" This does not describe a specific development.",
      "\"Britain sent convicts to Australia.\" This is accurate, but convicts came from Britain and Ireland, not from Asia or the Pacific Islands.",
    ],
    example: "After gold was found in Victoria in 1851, tens of thousands of Chinese men, many from Guangdong province, sailed to Australia to work in the goldfields.",
    notExample: "Australia was a British colony." },
  { id: "u6-q2b", skill: "u6", type: "fr", set: "u6-s8", part: "SAQ 2", sub: "b", topic: "6.7",
    lead: "Use the source below to answer all parts of the question that follows.",
    prompt: "Explain ONE reason why many white Australians supported the law in the source.",
    earns: "The response explains a specific, accurate reason for support of the law, such as labor competition or racial ideas, and may connect it to the source.",
    yes: [
      "Trade unions and labor politicians feared that Asian and Pacific Island workers would accept lower pay and drive down wages, which is why paragraph (g) bars contract laborers.",
      "Many white Australians believed in a \"White Australia\" in which only people of European descent belonged, so the dictation test in \"an European language\" was designed to keep out Asians.",
      "Racial ideas of the time, including Social Darwinism, taught that mixing races would weaken the nation, and politicians promised to keep Australia white when the colonies united in 1901.",
    ],
    no: [
      "\"Australians did not like immigrants.\" This states an attitude without explaining a reason for it, and Australia welcomed migrants from Britain.",
      "\"The law had a dictation test.\" This restates the source instead of explaining why people supported it.",
    ],
    example: "White workers and their unions feared that Asian laborers, who were often paid less, would take their jobs and push wages down. That is why the act bars people under contract to do manual labor, while it allows exceptions for skilled workers.",
    notExample: "The government wanted to give tests." },
  { id: "u6-q2c", skill: "u6", type: "fr", set: "u6-s8", part: "SAQ 2", sub: "c", topic: "6.7",
    lead: "Use the source below to answer all parts of the question that follows.",
    prompt: "Explain ONE way another receiving society responded to Asian migrants in a way similar to the law in the source in the period c. 1850 to c. 1910.",
    earns: "The response explains a specific policy or action in another receiving society that limited or discriminated against Asian migrants, and connects it to the source.",
    yes: [
      "The United States Chinese Exclusion Act of 1882 suspended the entry of Chinese laborers, which, like the Australian act, aimed to keep out Asian workers.",
      "Canada placed a head tax on Chinese immigrants in 1885 to discourage Chinese laborers from coming, a goal it shared with the Australian law.",
      "The British colony of Natal passed a law in 1897 that used a test in a European language to keep out Indian migrants, the same method as the dictation test in the source.",
    ],
    no: [
      "\"Other countries were racist too.\" This does not name a specific policy or society.",
      "\"Britain abolished slavery.\" This is accurate but is not a response to Asian migrants.",
    ],
    example: "In 1882 the United States passed the Chinese Exclusion Act, which barred Chinese laborers from entering the country. Like the Australian act, it singled out Asian workers and was pushed by white workers who feared competition for jobs.",
    notExample: "Many people did not want immigrants." },

  // ---------- SAQ 3: no source ----------
  { id: "u6-q3a", skill: "u6", type: "fr", part: "SAQ 3", sub: "a", topic: "6.8",
    lead: "Answer (a), (b), and (c).",
    prompt: "Identify ONE technological development that helped European states expand their empires in Africa or Asia in the period c. 1850 to c. 1900.",
    earns: "The response names a specific technology that helped Europeans conquer or control territory in Africa or Asia.",
    yes: [
      "The Maxim gun, an early machine gun, let small European forces defeat much larger African armies.",
      "Quinine, which protected Europeans from malaria, made it possible to send troops and officials into tropical Africa.",
      "Steamships and the telegraph let Europeans move troops up rivers and send orders across long distances.",
    ],
    no: [
      "\"Better weapons.\" This is too vague to identify a specific development.",
      "\"Gunpowder.\" Gunpowder had been in use for centuries and was not a new development of this period.",
    ],
    example: "The Maxim gun allowed small European armies to defeat much larger African forces, as at the Battle of Omdurman in Sudan in 1898.",
    notExample: "Europeans were more advanced." },
  { id: "u6-q3b", skill: "u6", type: "fr", part: "SAQ 3", sub: "b", topic: "6.3",
    lead: "Answer (a), (b), and (c).",
    prompt: "Explain ONE way that a group in Africa or Asia resisted European imperial expansion in the period c. 1850 to c. 1900.",
    earns: "The response explains how a specific group resisted European expansion, using accurate details.",
    yes: [
      "Emperor Menelik II of Ethiopia bought modern rifles and defeated an Italian army at Adwa in 1896, keeping Ethiopia independent.",
      "Samori Touré built an army in West Africa that fought French expansion for years before his capture in 1898.",
      "Sepoys in the British army in India rebelled in 1857, and the revolt spread to civilians who wanted to restore the Mughal emperor.",
    ],
    no: [
      "\"Africans fought back.\" This does not name a group or explain how it resisted.",
      "\"The Boxers.\" A name alone, without explaining what the group did, does not earn the point.",
    ],
    example: "In Ethiopia, Menelik II bought modern rifles and artillery from European suppliers and raised a large army. In 1896 his forces defeated an Italian invasion at the Battle of Adwa, so Ethiopia remained independent while most of Africa was colonized.",
    notExample: "Some people did not like imperialism." },
  { id: "u6-q3c", skill: "u6", type: "fr", part: "SAQ 3", sub: "c", topic: "6.5",
    lead: "Answer (a), (b), and (c).",
    prompt: "Explain ONE way that European imperialism changed the economy of a colonized region in the period c. 1850 to c. 1900.",
    earns: "The response explains a specific economic change in a named colonized region and links it to imperial rule.",
    yes: [
      "In the Congo Free State, King Leopold II's agents forced Africans to collect rubber for export, turning the economy toward a single forced-labor export.",
      "In British India, railroads built under British rule carried raw cotton to ports for export and brought British manufactured goods inland.",
      "In the Dutch East Indies, colonial officials required villagers to grow export crops such as sugar and coffee for the colonial government.",
    ],
    no: [
      "\"Europeans took resources.\" This is too general and does not explain a specific change in a specific region.",
      "\"The Industrial Revolution began in Britain.\" This describes Europe, not a colonized region.",
    ],
    example: "In the Congo Free State, Leopold II's agents forced villagers to gather wild rubber and punished those who failed to meet quotas. The region's economy was turned toward exporting rubber for European factories, while local farming suffered.",
    notExample: "Imperialism changed the economy." },

  // ---------- LEQ 1 ----------
  { id: "u6-leq1", skill: "u6", type: "essay", kind: "leq", topic: "6.6", reasoning: "Causation",
    prompt: "In the period c. 1750 to c. 1900, millions of people migrated within and between regions of the world. Develop an argument that evaluates the extent to which industrialization caused migration in this period.",
    rows: [
      { name: "Thesis/Claim", max: 1, levels: [
        "0 points: The response restates the prompt, makes a claim that is not historically defensible, or makes a claim that does not take a position on how far industrialization caused migration.",
        "1 point: The response makes a historically defensible claim that establishes a line of reasoning about how far industrialization caused migration, for example that industrial demand for labor and new transport technology drove most migration, though famine, persecution, and the end of slavery also played major roles.",
      ] },
      { name: "Contextualization", max: 1, levels: [
        "0 points: The response gives no context, or mentions context only in a phrase.",
        "1 point: The response describes a broader context relevant to the prompt, such as the spread of industrialization from Britain to Western Europe, the United States, and Japan, the growth of world population, or the abolition of slavery and the slave trade in the nineteenth century.",
      ] },
      { name: "Evidence", max: 2, levels: [
        "0 points: The response gives no specific examples relevant to migration in this period.",
        "1 point: The response gives at least two specific examples relevant to the topic, such as the Irish Great Famine and Chinese railroad workers in the United States.",
        "2 points: The response uses specific and relevant examples to support an argument about how far industrialization caused migration, for example explaining how steamships cut the cost of crossing the Atlantic or how factory jobs in the United States drew southern Italian peasants.",
      ] },
      { name: "Analysis and Reasoning", max: 2, levels: [
        "0 points: The response does not use causation to frame its argument.",
        "1 point: The response uses causation to frame the argument, explaining how industrialization led to some kinds of migration.",
        "2 points: The response shows a complex understanding, for example by weighing industrial causes against non-industrial causes such as famine or pogroms, separating push and pull factors, or showing that industrial demand worked together with older forms of coerced labor in the shift from slavery to indenture.",
      ] },
    ],
    evidence: [
      "Rural people moved to industrial cities such as Manchester and Birmingham in Britain in the late eighteenth and nineteenth centuries to work in factories.",
      "Steamships and railroads made long-distance travel cheaper and faster, making mass migration across oceans possible.",
      "The Irish Great Famine (1845 to 1852) killed about a million people and pushed more than a million to emigrate, many to the United States and Britain.",
      "Southern Italians emigrated in large numbers to the United States and Argentina from the 1880s to work in factories, construction, and farming.",
      "Pogroms in the Russian Empire after 1881 pushed many Jews to emigrate to the United States.",
      "After the abolition of slavery in the British Empire in the 1830s, planters recruited indentured laborers from India and China for plantations in the Caribbean, Mauritius, Natal, and Fiji.",
      "Chinese workers came to California for the Gold Rush and helped build the Central Pacific Railroad in the 1860s.",
      "Japanese laborers went to Hawaii to work on sugar plantations from the 1880s.",
      "Britain sent convicts to Australia from 1788 until the 1860s, a form of migration driven by state policy rather than industry.",
      "Receiving states pushed back, as with the Chinese Exclusion Act of 1882 in the United States.",
      "Migrants formed ethnic enclaves such as Chinatowns and Little Italys and sent money home.",
    ],
    model: "Thesis: Industrialization was the main cause of migration in the period c. 1750 to c. 1900 because factory jobs, plantation demand for raw materials, and new transport technology pulled people across regions, but famine, persecution, and the end of slavery also drove migration in ways that industrialization alone does not explain. Outline: (1) Context: industrialization spread from Britain to Western Europe, the United States, and Japan while world population grew. (2) Industrial pull and technology: rural to urban migration in Britain; southern Italians and eastern Europeans drawn to American factories and mines; steamships and railroads cut the cost of travel. (3) Industrial demand for raw materials and coerced labor: indentured Indians and Chinese replaced enslaved workers on sugar plantations, showing that industrial demand worked through older systems of unfree labor. (4) Limits: the Irish Great Famine and Russian pogroms pushed people out for reasons not caused by industry, and Britain's convict transport to Australia was state policy. (5) Complexity: industrialization often turned local crises into long-distance migration by offering destinations, jobs, and cheap passage, so even famine migrants traveled on industrial-era ships to industrial cities.",
  },

  // ---------- LEQ 2 ----------
  { id: "u6-leq2", skill: "u6", type: "essay", kind: "leq", topic: "6.3", reasoning: "Comparison",
    prompt: "In the period c. 1750 to c. 1900, peoples in many regions resisted the expansion of states and empires. Develop an argument that evaluates the extent to which resistance to imperial expansion was similar in two regions in this period.",
    rows: [
      { name: "Thesis/Claim", max: 1, levels: [
        "0 points: The response restates the prompt, names two regions without a claim about similarity, or makes a claim that is not historically defensible.",
        "1 point: The response makes a historically defensible claim that establishes a line of reasoning about how similar resistance was in two regions, for example that resistance in India and southern Africa was similar in its causes but different in its methods.",
      ] },
      { name: "Contextualization", max: 1, levels: [
        "0 points: The response gives no context, or mentions context only in a phrase.",
        "1 point: The response describes a broader context relevant to the prompt, such as industrial states' new military and transport technology, their demand for land and raw materials, or the rapid European partition of Africa after the Berlin Conference of 1884 to 1885.",
      ] },
      { name: "Evidence", max: 2, levels: [
        "0 points: The response gives no specific examples of resistance in this period.",
        "1 point: The response gives at least two specific examples of resistance, such as the Indian Rebellion of 1857 and the Battle of Adwa in 1896.",
        "2 points: The response uses specific and relevant examples from two regions to support an argument about how similar their resistance was.",
      ] },
      { name: "Analysis and Reasoning", max: 2, levels: [
        "0 points: The response does not use comparison to frame its argument.",
        "1 point: The response uses comparison to frame the argument, describing a similarity or difference between resistance in two regions.",
        "2 points: The response shows a complex understanding, for example by explaining both similarities and differences and why they existed, or by showing how resistance in one region combined armed, religious, and diplomatic strategies.",
      ] },
    ],
    evidence: [
      "The Indian Rebellion of 1857 began among sepoys and spread to civilians who rallied around the last Mughal emperor; Britain ended East India Company rule in 1858.",
      "The Xhosa cattle killing of 1856 to 1857 followed a prophecy that the British would be driven out if the Xhosa destroyed their cattle and crops.",
      "The Zulu kingdom defeated a British army at Isandlwana in 1879 before Britain conquered it later that year.",
      "Moshweshewe of the Basotho used diplomacy and appeals to Britain to resist Boer land claims, and Basutoland became a British territory in 1868.",
      "Menelik II of Ethiopia bought modern weapons and defeated Italy at the Battle of Adwa in 1896, preserving Ethiopian independence.",
      "Samori Touré resisted French expansion in West Africa until his capture in 1898.",
      "The Mahdist state in Sudan captured Khartoum in 1885 and held power until British and Egyptian forces won at Omdurman in 1898.",
      "The Ghost Dance spread among Plains peoples in the United States around 1890 and ended in the massacre at Wounded Knee.",
      "The Cherokee used American courts to resist removal, winning Worcester v. Georgia in 1832, but were forced west on the Trail of Tears in 1838.",
      "The Maori fought British settlers and troops in the New Zealand Wars of the 1840s to 1870s over land.",
      "The Boxer Rebellion of 1899 to 1901 in China attacked foreigners and Chinese Christians before an international army crushed it.",
    ],
    model: "Thesis: Resistance to imperial expansion in sub-Saharan Africa and North America was similar in that both drew on religious revival to rally people against settlers and armies, but it differed because some African states, such as Ethiopia, could buy modern weapons and win, while Native American nations faced a settler state that had already surrounded them. Outline: (1) Context: industrial states had new weapons, railroads, and steamships and sought land and raw materials. (2) Similarity in religious resistance: the Xhosa cattle killing and the Ghost Dance both promised that faith would remove the newcomers, and both ended in disaster. (3) Similarity in diplomacy: Moshweshewe appealed to Britain against the Boers, and the Cherokee went to American courts. (4) Difference in military outcomes: Ethiopia's victory at Adwa preserved independence, while American forces crushed Plains resistance at Wounded Knee. (5) Complexity: the differences came from the balance of power and access to weapons and allies, not from different goals, since both sets of peoples sought to keep their land and self-rule.",
  },

  // ---------- DBQ ----------
  { id: "u6-dbq1", skill: "u6", type: "essay", kind: "dbq", set: "u6-dbq", topic: "6.1", reasoning: "Causation",
    prompt: "Evaluate the extent to which economic motives drove imperial expansion in the period c. 1840 to c. 1900.",
    rows: [
      { name: "Thesis/Claim", max: 1, levels: [
        "0 points: The response restates the prompt, lists motives without weighing them, or makes a claim that is not historically defensible.",
        "1 point: The response makes a historically defensible claim that establishes a line of reasoning about how far economic motives drove imperial expansion, for example that the search for markets, raw materials, and investment outlets was the leading motive, but strategic rivalry, national prestige, and religious and civilizing missions shaped where and how empires expanded.",
      ] },
      { name: "Contextualization", max: 1, levels: [
        "0 points: The response gives no context, or mentions context only in a phrase.",
        "1 point: The response describes a broader context relevant to the prompt, such as the spread of industrialization and the competition for raw materials and markets, the unification of Germany and Italy and the rise of new rivals to Britain, or the technologies such as steamships, quinine, and the Maxim gun that made conquest cheaper.",
      ] },
      { name: "Evidence", max: 3, levels: [
        "0 points: The response does not accurately describe the content of at least three documents.",
        "1 point: The response accurately describes the content of at least three documents and addresses the prompt, for example noting that Mill calls colonization the best business for capital, that Hobson says British foreign policy is mainly a struggle for places to invest, and that the Pan-German League wanted coaling stations.",
        "2 points: The response uses at least four documents to support an argument about how far economic motives drove expansion.",
        "3 points: The response uses at least four documents to support the argument and also uses at least one specific piece of evidence not in the documents, such as Britain's purchase of Suez Canal shares in 1875 or Leopold II's rubber profits in the Congo.",
      ] },
      { name: "Analysis and Reasoning", max: 2, levels: [
        "0 points: The response does not explain the point of view, purpose, historical situation, or audience of any document, and does not show complexity.",
        "1 point: For at least two documents, the response explains how the point of view, purpose, historical situation, or audience is relevant to the argument, for example that Hobson in Document 4 wrote as a critic who wanted to expose the investors behind empire, or that Paton in Document 3 appeals to trade and strategy to persuade a government that might not act for religious reasons alone.",
        "2 points: The response earns the sourcing point and shows a complex understanding, for example by showing that economic, strategic, and religious motives reinforced one another, by explaining why motives differed between established and newer imperial powers, or by contrasting how imperial leaders and colonized peoples described the same motives.",
      ] },
    ],
    docs: [
      "Document 1 (Mill, 1848): An economist calls colonization the most profitable use of a wealthy country's capital and labor; supports an economic motive, and its date shows the idea predated the Scramble for Africa. The source page notes the text was modernized.",
      "Document 2 (Canton declaration, 1842): Chinese residents describe the British as greedy traders who forced opium on China; supports an economic motive from the point of view of people facing imperial pressure, and its purpose of rallying armed resistance explains its harsh language.",
      "Document 3 (Paton, 1883): A missionary urges annexation for religious, commercial, and strategic reasons; shows economic motives mixed with religion and rivalry with other powers (France, in practice), and his audience, the British government, explains why he stresses trade and harbors.",
      "Document 4 (Hobson, 1902): A British economist argues that investment abroad is the main economic force behind imperialism and that investors use the state's policy, money, and armed force to protect their profits; strong support for economic motives, and as a critic of empire writing just after the South African War, he had reason to stress hidden financial interests over the idealistic reasons leaders gave.",
      "Document 5 (Pan-German League, 1898): A nationalist group demands cables, coaling stations, steamship lines, and commercial concessions; shows strategic and national goals bound up with commerce, from a pressure group pushing its own government.",
      "Document 6 (Wilhelm II, 1901): The emperor links a German \"place in the sun\" to trade, sea power, and national pride; supports both economic and prestige motives, and his audience of sailors and shipping supporters explains the focus on the sea and the navy.",
      "Document 7 (Blunt, 1900): In a private diary, an English critic of empire condemns British farm burning in South Africa, the American war in the Philippines, and Leopold II's profits in the Congo; supports both an economic reading (a king investing to \"fill his pockets\") and a reading that stresses violence and national rivalry, and because it is a private diary he could write more bluntly than in public.",
    ],
    evidence: [
      "Britain bought a large share of the Suez Canal Company in 1875, and the canal was a key route to India.",
      "Egypt's debts to European bondholders led to Anglo-French financial control before the British occupation of 1882.",
      "The Treaty of Nanjing (1842) ended the First Opium War, gave Hong Kong to Britain, and opened five treaty ports to British trade.",
      "King Leopold II ran the Congo Free State for profit from rubber and ivory, using forced labor.",
      "Cecil Rhodes and the British South Africa Company sought gold and land north of the Limpopo River in the 1890s.",
      "The discovery of diamonds at Kimberley (1867) and gold on the Witwatersrand (1886) drew British investment and power into southern Africa.",
      "The Berlin Conference of 1884 to 1885 set rules for European claims in Africa and declared free trade in the Congo basin.",
      "The Fashoda Incident of 1898 showed Anglo-French strategic rivalry over the Nile.",
      "Social Darwinism and Kipling's \"The White Man's Burden\" (1899) expressed racial and civilizing justifications for empire.",
      "Germany leased Jiaozhou Bay (Kiaochow) from China in 1898 after the killing of two German missionaries.",
      "The United States annexed Hawaii in 1898 after American sugar planters overthrew the Hawaiian queen in 1893.",
    ],
    model: "Thesis: In the period c. 1840 to c. 1900, economic motives such as the search for markets, raw materials, and places to invest capital were the most important driver of imperial expansion, but they worked together with strategic rivalry, national prestige, and religious missions, which often decided where empires expanded and how leaders justified it. Outline: (1) Context: industrialization in Britain and then in Germany, the United States, and others created a need for raw materials and markets, while new technologies made conquest cheaper. (2) Economic motives: Mill (Doc 1) calls colonization the best business for capital; the Canton declaration (Doc 2) shows that the Chinese saw British aims as trade and opium; Hobson (Doc 4) argues that investors steered British policy toward empire; outside evidence such as Leopold II's rubber profits in the Congo. (3) Strategic and national motives: the Pan-German League (Doc 5) wants coaling stations and cables, and Wilhelm II (Doc 6) ties a \"place in the sun\" to German pride; sourcing shows both spoke for a newer power eager to catch up with Britain. (4) Religion, violence, and critics: Blunt (Doc 7) shows that a critic saw greed in the Congo but also a general love of violence and conquest among the powers; Paton (Doc 3) blends missions with trade and harbors, and his audience explains why he lists commercial reasons. (5) Complexity: economic interests rarely acted alone; imperial leaders described their aims in terms of duty and prestige, while colonized peoples such as the Cantonese described the same expansion as greed.",
  },
];

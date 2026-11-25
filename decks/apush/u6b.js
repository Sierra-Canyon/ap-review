// AP U.S. History review, Unit 6 (6.8 to 6.14): immigration and nativism, the middle class, reform, government and the economy, Gilded Age politics, and the period as a whole.
import { bars, lines } from "../../plot.js";
import { maps } from "./maps.js";

const PRACTICE = "Practice passage written for this review, summarizing an interpretation held by many historians.";

export const sets = {
  "a6b-s01": {
    id: "a6b-s01", name: "The Chinese Exclusion Act, 1882", intro: "Use the excerpt below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "Whereas in the opinion of the Government of the United States the coming of Chinese laborers to this country endangers the good order of certain localities within the territory thereof: Therefore, Be it enacted ... That from and after the expiration of ninety days next after the passage of this act, and until the expiration of ten years next after the passage of this act, the coming of Chinese laborers to the United States be, and the same is hereby, suspended ... SEC. 14. That hereafter no State court or court of the United States shall admit Chinese to citizenship; and all laws in conflict with this act are hereby repealed. SEC.15. That the words \"Chinese laborers\", wherever used in this act shall be construed to mean both skilled and unskilled laborers and Chinese employed in mining." },
      { cite: "U.S. Congress, \"An Act to execute certain treaty stipulations relating to Chinese\" (the Chinese Exclusion Act), May 6, 1882. National Archives.", url: "https://www.archives.gov/milestone-documents/chinese-exclusion-act", kind: "primary" },
    ] }],
  },
  "a6b-s02": {
    id: "a6b-s02", name: "A literacy test for immigrants, 1896 and 1897", intro: "Use the two excerpts below to answer the questions that follow.",
    sources: [
      { title: "Source 1", blocks: [
        { p: "For the protection of the equality of our American citizenship and of the wages of our workingmen, against the fatal competition of low priced labor, we demand that the immigration laws be thoroughly enforced, and so extended as to exclude from entrance to the United States those who can neither read nor write." },
        { cite: "Republican Party Platform of 1896, adopted at St. Louis, June 1896. The American Presidency Project.", url: "https://www.presidency.ucsb.edu/documents/republican-party-platform-1896", kind: "primary" },
      ] },
      { title: "Source 2", blocks: [
        { p: "A radical departure from our national policy relating to immigration is here presented. Heretofore we have welcomed all who came to us from other lands except those whose moral or physical condition or history threatened danger to our national welfare and safety. ... A century's stupendous growth, largely due to the assimilation and thrift of millions of sturdy and patriotic adopted citizens, attests the success of this generous and free-handed policy ... It is said, however, that the quality of recent immigration is undesirable. The time is quite within recent memory when the same thing was said of immigrants who, with their descendants, are now numbered among our best citizens." },
        { cite: "Grover Cleveland, Veto Message on the immigration bill (which required immigrants to read and write), March 2, 1897. The American Presidency Project.", url: "https://www.presidency.ucsb.edu/documents/veto-message-31", kind: "primary" },
      ] },
    ],
  },
  "a6b-s03": {
    id: "a6b-s03", name: "United States v. Wong Kim Ark, 1898", intro: "Use the excerpt below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "The evident intention, and the necessary effect, of the submission of this case to the decision of the court upon the facts agreed by the parties, were to present for determination the single question, stated at the beginning of this opinion, namely, whether a child born in the United States, of parents of Chinese descent, who, at the time of his birth, are subjects of the emperor of China, but have a permanent domicile and residence in the United States, and are there carrying on business, and are not employed in any diplomatic or official capacity under the emperor of China, becomes at the time of his birth a citizen of the United States. For the reasons above stated, this court is of opinion that the question must be answered in the affirmative." },
      { cite: "Justice Horace Gray, majority opinion, United States v. Wong Kim Ark, 169 U.S. 649 (1898). Legal Information Institute, Cornell Law School.", url: "https://www.law.cornell.edu/supremecourt/text/169/649", kind: "primary" },
    ] }],
  },
  "a6b-s04": {
    id: "a6b-s04", name: "Veblen on the middle-class household, 1899", intro: "Use the excerpt below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "It is a fact of common observation that in this lower middle class there is no pretence of leisure on the part of the head of the household. Through force of circumstances it has fallen into disuse. But the middle-class wife still carries on the business of vicarious leisure, for the good name of the household and its master. ... The head of the middle-class household has been reduced by economic circumstances to turn his hand to gaining a livelihood by occupations which often partake largely of the character of industry, as in the case of the ordinary business man of to-day. But the derivative fact — the vicarious leisure and consumption rendered by the wife, and the auxiliary vicarious performance of leisure by menials — remains in vogue as a conventionality which the demands of reputability will not suffer to be slighted." },
      { cite: "Thorstein Veblen, The Theory of the Leisure Class: An Economic Study of Institutions (New York: Macmillan, 1899), chapter 4, \"Conspicuous Consumption\" (text from the 1912 Macmillan edition). Internet Archive.", url: "https://archive.org/stream/theoryleisurecl01veblgoog/theoryleisurecl01veblgoog_djvu.txt", kind: "primary" },
    ] }],
  },
  "a6b-s05": {
    id: "a6b-s05", name: "Bellamy's coach, 1888", intro: "Use the excerpt below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "By way of attempting to give the reader some general impression of the way people lived together in those days, and especially of the relations of the rich and poor to one another, perhaps I cannot do better than to compare society as it then was to a prodigious coach which the masses of humanity were harnessed to and dragged toilsomely along a very hilly and sandy road. The driver was hunger, and permitted no lagging, though the pace was necessarily very slow. Despite the difficulty of drawing the coach at all along so hard a road, the top was covered with passengers who never got down, even at the steepest ascents. These seats on top were very breezy and comfortable. ... Naturally such places were in great demand and the competition for them was keen, every one seeking as the first end in life to secure a seat on the coach for himself and to leave it to his child after him." },
      { cite: "Edward Bellamy, Looking Backward (Boston: Ticknor and Company, 1888), chapter 1. The narrator, who has woken in the year 2000, describes the society of 1887. Text from a later Houghton Mifflin printing, Internet Archive.", url: "https://archive.org/stream/lookingbackward00belliala/lookingbackward00belliala_djvu.txt", kind: "primary" },
    ] }],
  },
};

export default [
  // a6b-s01 Chinese Exclusion Act
  { id: "a6b-m001", skill: "u6", type: "mcq", set: "a6b-s01", topic: "6.9", difficulty: "easy", reasoning: "Causation",
    question: "The law in the excerpt was most directly a response to",
    choices: [
      "anti-Chinese agitation by white workers in California",
      "demands by railroad owners for more contract laborers",
      "a trade dispute after China closed its ports to Americans",
      "fears that Chinese voters would support Catholic candidates",
    ],
    why: [
      "Correct. White workers in the West, led in California by Denis Kearney's Workingmen's Party in the late 1870s (\"The Chinese must go\"), blamed Chinese laborers for low wages; Congress answered with the Chinese Exclusion Act of 1882.",
      "Railroad builders such as the Central Pacific had recruited Chinese workers; employers wanted more cheap labor, not a ban on it.",
      "China did not close its ports to Americans; the Burlingame Treaty of 1868 had in fact encouraged migration between the two countries.",
      "Section 14 barred Chinese immigrants from naturalizing, so they could not vote; anti-Catholic nativism was aimed at European immigrants.",
    ],
    answer: 0 },
  { id: "a6b-m002", skill: "u6", type: "mcq", set: "a6b-s01", topic: "6.9", difficulty: "difficult", reasoning: "Continuity and Change",
    question: "Section 14 of the act most directly continued which earlier principle of federal law?",
    choices: [
      "The Naturalization Act of 1790's limit of citizenship to white persons",
      "The Fourteenth Amendment's grant of citizenship to people born here",
      "The Alien and Sedition Acts' longer residence rule for naturalizing",
      "The Fifteenth Amendment's ban on denying the vote because of race",
    ],
    why: [
      "Correct. The Naturalization Act of 1790 let only \"free white\" persons become citizens; an 1870 law added people of African descent, and Section 14 of the 1882 act made clear that Chinese immigrants stayed barred.",
      "The Fourteenth Amendment (1868) made citizens of people born in the United States, a principle the Court later applied to the U.S.-born children of Chinese parents; Section 14 limits naturalization, not birthright citizenship.",
      "The Naturalization Act of 1798 raised the residence requirement to fourteen years for all immigrants; it did not bar any group by race or nationality.",
      "The Fifteenth Amendment (1870) barred racial limits on voting by citizens, the opposite of the racial bar in Section 14.",
    ],
    answer: 0 },
  { id: "a6b-m003", skill: "u6", type: "mcq", set: "a6b-s01", topic: "6.9", difficulty: "moderate", reasoning: "Continuity and Change",
    question: "The act was the first federal law to",
    choices: [
      "bar laborers of one nationality from entering the country",
      "set yearly quotas for each nation based on an old census",
      "require that adult immigrants pass a reading test to enter",
      "open a federal station on Ellis Island to inspect arrivals",
    ],
    why: [
      "Correct. The Chinese Exclusion Act of 1882 was the first federal law to shut out immigrants because of their nationality, suspending the entry of Chinese laborers for ten years.",
      "National quotas came with the Emergency Quota Act of 1921 and the Immigration Act of 1924, decades later.",
      "Congress passed a literacy test only in 1917, over President Wilson's veto.",
      "The Ellis Island station opened in 1892, ten years after this act, to inspect mostly European arrivals.",
    ],
    answer: 0 },
  { id: "a6b-m004", skill: "u6", type: "mcq", set: "a6b-s01", topic: "6.9", difficulty: "difficult", reasoning: "Continuity and Change",
    question: "Which later development most directly extended the policy in the excerpt?",
    choices: [
      "The Geary Act of 1892, which renewed the ban for ten more years",
      "The Gentlemen's Agreement of 1907, which lifted the ban on China",
      "The Magnuson Act of 1943, which made the ban permanent in wartime",
      "The Immigration Act of 1965, which first limited entry from Asia",
    ],
    why: [
      "Correct. When the ten years in Section 1 ran out, the Geary Act of 1892 renewed the ban and required Chinese residents to carry certificates; Congress later made exclusion permanent in 1902.",
      "The Gentlemen's Agreement of 1907 was a deal with Japan to limit Japanese laborers; it did not concern Chinese immigrants.",
      "The Magnuson Act of 1943 repealed Chinese exclusion while China was a U.S. ally in World War II; it ended the policy rather than extending it.",
      "The Immigration Act of 1965 ended national origins quotas and opened the way to more Asian immigration, the reverse of this choice.",
    ],
    answer: 0 },

  // a6b-s02 Republican platform 1896 and Cleveland's veto 1897
  { id: "a6b-m005", skill: "u6", type: "mcq", set: "a6b-s02", topic: "6.9", difficulty: "easy", reasoning: "Causation",
    question: "Source 1 supports a reading test for immigrants mainly in order to",
    choices: [
      "protect the wages of American workers from cheap labor",
      "keep Catholic immigrants out of the public school system",
      "stop the anarchists who were blamed for the Haymarket bomb",
      "save Western farmland for settlers who were born in America",
    ],
    why: [
      "Correct. The 1896 Republican platform asks for the test \"for the protection ... of the wages of our workingmen, against the fatal competition of low priced labor.\"",
      "Anti-Catholic groups such as the American Protective Association attacked parochial schooling, but the platform plank speaks only of wages and citizenship.",
      "Anarchists were blamed for the Haymarket bombing of 1886, but the plank does not mention radicals; Cleveland's veto in Source 2 is the source that discusses agitators.",
      "The plank does not mention land; the Homestead Act was open to immigrants who declared an intent to become citizens.",
    ],
    answer: 0 },
  { id: "a6b-m006", skill: "u6", type: "mcq", set: "a6b-s02", topic: "6.9", difficulty: "moderate", reasoning: "Comparison",
    question: "Unlike the authors of Source 1, Cleveland in Source 2 argues that",
    choices: [
      "groups once called undesirable had become good citizens",
      "new immigrants did not lower wages as much as was claimed",
      "a reading test should be applied only to Asian immigrants",
      "Congress had no power under the Constitution to limit entry",
    ],
    why: [
      "Correct. Cleveland answers the charge that recent immigrants are undesirable by noting that \"the same thing was said of immigrants who, with their descendants, are now numbered among our best citizens.\"",
      "Cleveland does not argue about wages in this excerpt; his case rests on the nation's past welcome and the record of earlier immigrants.",
      "Chinese laborers were already excluded by the 1882 act; neither source proposes a test for Asians alone.",
      "Cleveland grants that immigrants who threatened the nation's welfare had always been kept out; he objects to this test, not to federal power over immigration.",
    ],
    answer: 0 },
  { id: "a6b-m007", skill: "u6", type: "mcq", set: "a6b-s02", topic: "6.9", difficulty: "moderate",
    question: "The \"recent immigration\" that critics called undesirable in Source 2 came mostly from",
    choices: [
      "southern and eastern Europe, such as Italy and Russia",
      "northern and western Europe, such as Germany and Ireland",
      "East Asia, such as China and Japan, across the Pacific",
      "the Americas, such as Mexico and Canada, across land borders",
    ],
    why: [
      "Correct. By the 1890s most new immigrants came from southern and eastern Europe, including Italians, Poles, and Jews from the Russian Empire, and restrictionists aimed the literacy test at them.",
      "Germans and Irish were the large earlier wave of the 1840s and 1850s; by 1897 Cleveland could point to them and their children as citizens.",
      "Chinese laborers had been excluded since 1882, so they were not the recent arrivals the reading test was meant to stop.",
      "Immigration from Mexico grew mainly after 1910, during the Mexican Revolution; Canadians were not the target of this debate.",
    ],
    answer: 0 },
  { id: "a6b-m008", skill: "u6", type: "mcq", set: "a6b-s02", topic: "6.9", difficulty: "difficult", reasoning: "Continuity and Change",
    question: "The debate in the two sources was finally settled when",
    choices: [
      "Congress passed a reading test over Wilson's veto in 1917",
      "McKinley signed a reading test into law soon after 1896",
      "the Supreme Court struck down reading tests in Wong Kim Ark",
      "Congress extended Chinese exclusion to all Europeans in 1902",
    ],
    why: [
      "Correct. Presidents Cleveland, Taft, and Wilson all vetoed literacy test bills; in 1917 Congress overrode Wilson's veto and the test became law.",
      "McKinley won in 1896 on a platform that endorsed the test, but no literacy test became law during his presidency.",
      "United States v. Wong Kim Ark (1898) concerned birthright citizenship, not tests for entry.",
      "In 1902 Congress made Chinese exclusion permanent, but it never applied that ban to Europeans.",
    ],
    answer: 0 },

  // a6b-s03 Wong Kim Ark
  { id: "a6b-m009", skill: "u6", type: "mcq", set: "a6b-s03", topic: "6.9", difficulty: "moderate",
    question: "The Court's answer to the question in the excerpt rested mainly on",
    choices: [
      "the Fourteenth Amendment's citizenship clause",
      "the Fifteenth Amendment's protection of voting",
      "the Burlingame Treaty's promise of free migration",
      "the Chinese Exclusion Act's rules for merchants",
    ],
    why: [
      "Correct. In United States v. Wong Kim Ark (1898) the Court held that the first clause of the Fourteenth Amendment (1868), which makes citizens of all persons born in the United States and subject to its jurisdiction, covered a son of Chinese parents born in San Francisco.",
      "The Fifteenth Amendment (1870) bars racial limits on voting by citizens; it does not say who is a citizen.",
      "The Burlingame Treaty (1868) did encourage migration between China and the United States, but the question was citizenship by birth, which the Court read from the Constitution.",
      "The Exclusion Act let Chinese merchants enter, but the Court said such acts could not control the meaning of the Constitution.",
    ],
    answer: 0 },
  { id: "a6b-m010", skill: "u6", type: "mcq", set: "a6b-s03", topic: "6.9", difficulty: "difficult", reasoning: "Causation",
    question: "As a result of the ruling in the excerpt,",
    choices: [
      "U.S.-born children of Chinese parents were citizens",
      "the ban on Chinese laborers was ruled unconstitutional",
      "Chinese immigrants already here could now naturalize",
      "states gained the power to decide who was a citizen",
    ],
    why: [
      "Correct. The Court held that a child born in the United States to Chinese parents living here was a citizen at birth, even though the parents themselves could not naturalize under the 1882 act.",
      "The Court left exclusion in place; Congress renewed it in 1892 and made it permanent in 1902.",
      "The bar on naturalizing Chinese immigrants stood until the Magnuson Act of 1943.",
      "The ruling read citizenship from the federal Constitution; it gave states no such power.",
    ],
    answer: 0 },
  { id: "a6b-m011", skill: "u6", type: "mcq", set: "a6b-s03", topic: "6.9", difficulty: "difficult", reasoning: "Comparison",
    question: "The ruling in the excerpt differs most sharply from which earlier Supreme Court decision?",
    choices: [
      "Dred Scott v. Sandford (1857), which denied that Black Americans could be citizens",
      "Plessy v. Ferguson (1896), which upheld racial segregation on railroad cars",
      "Munn v. Illinois (1877), which upheld state laws limiting grain storage rates",
      "Worcester v. Georgia (1832), which held that state law did not reach Cherokee land",
    ],
    why: [
      "Correct. Dred Scott (1857) held that people of African descent could not be U.S. citizens; the Fourteenth Amendment overturned that rule, and Wong Kim Ark applied the amendment's birthright citizenship to the children of Chinese immigrants.",
      "Plessy (1896) upheld segregation, a harsh ruling on race, but it did not deny that Black Americans were citizens; it is about equal treatment, not citizenship.",
      "Munn (1877) concerned state regulation of businesses such as grain elevators, not citizenship.",
      "Worcester (1832) concerned state power over the Cherokee Nation, not who was a citizen by birth.",
    ],
    answer: 0 },

  // a6b-s04 Veblen
  { id: "a6b-m012", skill: "u6", type: "mcq", set: "a6b-s04", topic: "6.10", difficulty: "easy",
    question: "Veblen's main point in the excerpt is that middle-class families",
    choices: [
      "showed their status through the wife's leisure",
      "sent wives into paid work to raise their income",
      "lived on inherited wealth instead of working",
      "saved their wages to open businesses of their own",
    ],
    why: [
      "Correct. Veblen says the middle-class husband now works for a living, but \"the middle-class wife still carries on the business of vicarious leisure, for the good name of the household,\" so her visible leisure and spending display the family's standing.",
      "Veblen says the opposite: the wife's role is to show that she does not need to work.",
      "Veblen says the head of the household must turn \"his hand to gaining a livelihood,\" so the family does not live on inherited wealth.",
      "Veblen stresses spending for reputation, not saving to start businesses.",
    ],
    answer: 0 },
  { id: "a6b-m013", skill: "u6", type: "mcq", set: "a6b-s04", topic: "6.10", difficulty: "moderate", reasoning: "Causation",
    question: "The growth of the class Veblen describes resulted most directly from",
    choices: [
      "the rise of managerial and clerical jobs in big corporations",
      "the Homestead Act's grants of free land to Western settlers",
      "a shift from factory work to service work in the cities",
      "the growth of skilled craft unions in the AFL after 1886",
    ],
    why: [
      "Correct. Large corporations and city businesses of the late 1800s needed managers, clerks, accountants, and salespeople, and these white-collar jobs swelled the urban middle class.",
      "The Homestead Act of 1862 built a class of Western farm owners, not the urban business families Veblen describes.",
      "Factory work kept growing in the late 1800s; the shift toward a service economy came after World War II.",
      "The AFL (1886) organized skilled workers to win higher wages, but its members were wage earners, not the business families in the excerpt.",
    ],
    answer: 0 },
  { id: "a6b-m014", skill: "u6", type: "mcq", set: "a6b-s04", topic: "6.10", difficulty: "moderate",
    question: "Which development of the period most directly served the kind of household spending Veblen describes?",
    choices: [
      "Department stores such as Macy's and Wanamaker's",
      "Settlement houses such as Hull House in Chicago",
      "The Grange's cooperative stores for rural members",
      "Company stores run by mine owners in coal towns",
    ],
    why: [
      "Correct. Big-city department stores such as Macy's in New York and Wanamaker's in Philadelphia sold clothing, furniture, and household goods to middle-class shoppers, many of them women.",
      "Settlement houses such as Hull House (1889) served poor immigrant neighborhoods with classes and services, not middle-class consumption.",
      "Grange cooperatives were meant to cut farmers' costs by avoiding middlemen, not to display status.",
      "Company stores sold necessities to miners, often on credit that kept workers in debt.",
    ],
    answer: 0 },
  { id: "a6b-m015", skill: "u6", type: "mcq", set: "a6b-s04", topic: "6.10", difficulty: "moderate", reasoning: "Continuity and Change",
    question: "The role of the middle-class wife in the excerpt most closely continued which earlier ideal?",
    choices: [
      "The cult of domesticity of the early 1800s",
      "The Seneca Falls call for equal rights in 1848",
      "The paid mill work of Lowell women in the 1830s",
      "The camp meetings of the Second Great Awakening",
    ],
    why: [
      "Correct. The cult of domesticity of the early 1800s held that the middle-class woman's place was the home, apart from paid work; Veblen describes a later form of that ideal.",
      "The Declaration of Sentiments at Seneca Falls (1848) demanded equal rights for women, a challenge to the ideal, not a continuation of it.",
      "Lowell's mill women earned wages in factories, the reverse of the wife's leisure in the excerpt.",
      "The Second Great Awakening drew many women into religious reform, but it was a revival movement, not a model of household leisure.",
    ],
    answer: 0 },
  { id: "a6b-m016", skill: "u6", type: "mcq", set: "a6b-s04", topic: "6.10", difficulty: "difficult",
    question: "A historian would most likely use the excerpt to support which claim about the late 1800s?",
    choices: [
      "Rising middle-class incomes fed a new consumer culture.",
      "Most married women in industrial cities worked in factories.",
      "The middle class shrank as wealth gathered at the very top.",
      "Leisure was limited to the very rich until after World War I.",
    ],
    why: [
      "Correct. Veblen, writing in 1899, shows middle-class families spending to display status; historians use his idea of conspicuous consumption as evidence of a growing consumer culture.",
      "Most married women did not work for wages in this period, and the excerpt describes a wife who does not.",
      "Wealth did concentrate at the top, but the middle class grew with white-collar jobs; the excerpt treats it as a large class.",
      "The excerpt describes leisure in middle-class homes, and vacations, sports, and amusement parks spread to many Americans before 1900.",
    ],
    answer: 0 },

  // a6b-s05 Bellamy
  { id: "a6b-m017", skill: "u6", type: "mcq", set: "a6b-s05", topic: "6.11", difficulty: "easy",
    question: "Bellamy uses the image of the coach mainly to criticize",
    choices: [
      "an economy in which the many toiled so the few could ride",
      "a government that taxed the rich to pay for aid to the poor",
      "railroads that charged farmers unfair rates to ship crops",
      "immigrants who took the places of workers born in America",
    ],
    why: [
      "Correct. In Looking Backward (1888) the masses are \"harnessed\" to the coach and driven by hunger, while the passengers on top \"never got down\"; Bellamy is attacking the gap between rich and poor in the competitive economy of the 1880s.",
      "Bellamy wants a more equal society; he does not complain about taxes on the rich, and there was no federal income tax in 1888.",
      "The coach is a figure for society as a whole, not an actual means of transportation.",
      "The passage says nothing about immigrants; the passengers and the pullers are rich and poor.",
    ],
    answer: 0 },
  { id: "a6b-m018", skill: "u6", type: "mcq", set: "a6b-s05", topic: "6.11", difficulty: "moderate", reasoning: "Causation",
    question: "The popularity of the book in the excerpt led most directly to",
    choices: [
      "Nationalist clubs that called for public ownership of industry",
      "the founding of the Knights of Labor as a secret workers' order",
      "the first settlement house, opened by Jane Addams in Chicago",
      "the Pendleton Act, which created a merit-based civil service",
    ],
    why: [
      "Correct. Looking Backward sold hundreds of thousands of copies, and readers formed Nationalist clubs around 1888 to 1891 to promote Bellamy's plan for national ownership of industry; many members later joined the Populists.",
      "The Knights of Labor was founded in 1869, nearly twenty years before the book.",
      "Hull House opened in 1889, but it grew from the settlement movement in London, not from Bellamy's novel.",
      "The Pendleton Act of 1883 came five years before the book and grew out of Garfield's assassination.",
    ],
    answer: 0 },
  { id: "a6b-m019", skill: "u6", type: "mcq", set: "a6b-s05", topic: "6.11", difficulty: "difficult", reasoning: "Comparison",
    question: "Which writer of the period would most likely have agreed with Bellamy's view of society?",
    choices: [
      "Henry George, who blamed poverty on private control of land",
      "William Graham Sumner, who said competition was a law of nature",
      "Horatio Alger, who wrote of poor boys rising by pluck and luck",
      "Russell Conwell, who preached that getting rich was a duty",
    ],
    why: [
      "Correct. Henry George's Progress and Poverty (1879) asked why poverty grew alongside progress and proposed a single tax on land; like Bellamy, he blamed the economic system for the gap between rich and poor.",
      "Sumner, a Social Darwinist, defended competition and opposed efforts to help the poor, so he would reject Bellamy's critique.",
      "Alger's novels told readers that hard work and luck lifted poor boys, so the existing system was fair; Bellamy denies this.",
      "Conwell's lecture \"Acres of Diamonds\" told listeners it was their duty to get rich, a defense of the race for seats that Bellamy mocks.",
    ],
    answer: 0 },
];

// AP U.S. History review, Unit 7 (7.1 to 7.8): empire, Progressives, World War I abroad and at home, and the 1920s.
import { bars, lines } from "../../plot.js";
import { maps } from "./maps.js";

const PRACTICE = "Practice passage written for this review, summarizing an interpretation held by many historians.";
const LOC = "public domain, Library of Congress (no known restrictions on publication)";
const MAP = (refs, states) => ({ cite: "Map drawn for this review from Natural Earth land outlines" + (states ? " and U.S. Census Bureau state boundaries" : "") + " (public domain). Places and dates checked against " + refs + ".", kind: "map" });
const M = (id, set, topic, difficulty, reasoning, question, choices, why) => {
  const o = { id, skill: "u7", type: "mcq", set, topic, difficulty };
  if (reasoning) o.reasoning = reasoning;
  return Object.assign(o, { question, choices, why, answer: 0 });
};

const autoYears = ["1910", "1912", "1914", "1916", "1918", "1920", "1922", "1924", "1926", "1928", "1930"];
const autoTotal = [468500, 944000, 1763018, 3617937, 6160448, 9239161, 12273599, 17612940, 22200150, 24688631, 26749853];
const autoCars = [458377, 901596, 1664003, 3367889, 5554952, 8131522, 10704076, 15436102, 19267967, 21362240, 23034753];
const fmtN = (n) => n.toLocaleString("en-US");
const mil = (n) => Math.round(n / 100000) / 10;

const cities = ["Chicago", "Detroit", "New York", "Cleveland"];
const black1910 = [44103, 5741, 91709, 8448];
const black1920 = [109458, 40838, 152467, 34451];
const black1930 = [233903, 120066, 327706, 71899];
const k = (n) => Math.round(n / 1000);

const quotaNames = ["Germany", "Great Britain and Northern Ireland", "Irish Free State", "Sweden", "Norway", "Poland", "Italy", "Czechoslovakia", "Russia", "Hungary", "Greece"];
const quotaShort = ["Germany", "Britain", "Ireland", "Sweden", "Norway", "Poland", "Italy", "Czech.", "Russia", "Hungary", "Greece"];
const quotas = [51227, 34007, 28567, 9561, 6453, 5982, 3845, 3073, 2248, 473, 100];

export const sets = {
  // ---------- 7.1 Contextualizing the Period ----------
  "a7a-s01": {
    id: "a7a-s01", name: "Two changes, 1890 to 1945", intro: "Use the passage below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "Between 1890 and 1945 the United States changed in two linked ways. At home, reformers, voters, and eventually presidents came to accept that the national government should regulate the economy and protect citizens from the worst effects of industrial capitalism, a shift that began with Progressive laws on railroads, food, and banking and reached its height in the New Deal. Abroad, a nation that had avoided commitments outside the Western Hemisphere acquired colonies, fought in two world wars, and ended the period as the strongest power on earth. Neither change was smooth. Each advance of federal power or foreign involvement provoked a backlash, from the rejection of the League of Nations to the pro-business politics of the 1920s." },
      { cite: PRACTICE, kind: "practice" },
    ] }],
  },
  "a7a-s02": {
    id: "a7a-s02", name: "Turner on the frontier, 1893", intro: "Turner opened his paper by quoting an 1890 Census Bureau bulletin that said the country no longer had a clear frontier line of settlement. Use the excerpt below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "This brief official statement marks the closing of a great historic movement. Up to our own day American history has been in a large degree the history of the colonization of the Great West. The existence of an area of free land, its continuous recession, and the advance of American settlement westward, explain American development. ... And now, four centuries from the discovery of America, at the end of a hundred years of life under the Constitution, the frontier has gone, and with its going has closed the first period of American history." },
      { cite: "Frederick Jackson Turner, \"The Significance of the Frontier in American History,\" paper read to the American Historical Association, Chicago, July 1893; printed in the Association's Annual Report for 1893.", url: "https://archive.org/details/significanceoffr00turnuoft", kind: "primary" },
    ] }],
  },
  "a7a-s03": {
    id: "a7a-s03", name: "Coolidge on business, 1925", intro: "Use the excerpt below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "After all, the chief business of the American people is business. They are profoundly concerned with producing, buying, selling, investing and prospering in the world. I am strongly of opinion that the great majority of people will always find these are moving impulses of our life. ... Of course, the accumulation of wealth can not be justified as the chief end of existence. But we are compelled to recognize it as a means to well nigh every desirable achievement. So long as wealth is made the means and not the end, we need not greatly fear it." },
      { cite: "Calvin Coolidge, Address to the American Society of Newspaper Editors, Washington, D.C., January 17, 1925.", url: "https://www.presidency.ucsb.edu/documents/address-the-american-society-newspaper-editors-washington-dc", kind: "primary" },
    ] }],
  },

  // ---------- 7.2 Imperialism: Debates ----------
  "a7a-s04": {
    id: "a7a-s04", name: "School Begins, Puck, 1899", intro: "Use the image below to answer the questions that follow.", label: "Image",
    sources: [{ title: "Image", blocks: [
      { img: "images/apush/u7-school-begins.jpg", alt: "A color cartoon of a schoolroom. Uncle Sam, as a stern teacher, stands at his desk holding a pointer over a front bench of four unhappy, crudely drawn children of color who stand for the Philippines, Hawaii, Puerto Rico, and Cuba. Behind them, neat white children labeled with Western states such as California and Texas read their books quietly. A Native American boy sits apart by the door holding a book upside down, a Chinese boy waits outside the doorway, and a Black boy washes a window on a ladder. A blackboard text says the consent of the governed is a good theory but that Britain and the United States govern colonies without waiting for consent until the colonies can govern themselves. The caption has Uncle Sam telling the new class it must learn its lessons whether it wants to or not.",
        caption: "\"School Begins,\" a centerfold cartoon by Louis Dalrymple in the humor magazine Puck, January 1899, published while the Senate debated the Treaty of Paris that gave the United States the Philippines, Guam, and Puerto Rico after the Spanish-American War. Its crude, racist drawings of the island peoples reflect the cartoonist's view that they were childlike and unready to govern themselves.",
        credit: "Library of Congress, Prints and Photographs Division, LC-DIG-ppmsca-28668", license: LOC, url: "https://www.loc.gov/item/2012647459/" },
      { cite: "Louis Dalrymple, \"School Begins,\" Puck, vol. 44, no. 1142, January 25, 1899, centerfold. Library of Congress.", url: "https://www.loc.gov/item/2012647459/", kind: "primary" },
    ] }],
  },
  "a7a-s05": {
    id: "a7a-s05", name: "The United States around the Caribbean, 1898 to 1934", intro: "Use the map below to answer the questions that follow.", label: "Map",
    sources: [{ title: "Map", blocks: [
      { svg: maps["u7a-caribbean"], caption: "U.S. territories and military occupations around the Caribbean, 1898 to 1934, with the year each began. U.S. troops stayed in the Dominican Republic until 1924 and in Haiti until 1934." },
      MAP("the Congressional Research Service report Instances of Use of United States Armed Forces Abroad, 1798 to 2023, and the Office of the Historian, U.S. Department of State (its pages on Haiti, the Dominican Republic, and the Panama Canal, and the 1916 Danish West Indies treaty), with the Treaty of Paris of 1898"),
    ] }],
  },
  "a7a-s06": {
    id: "a7a-s06", name: "Bryan against empire, 1900", intro: "Use the excerpt below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "If governments derive their just powers from the consent of the governed, it is impossible to secure title to people, either by force or by purchase. ... A colonial policy means that we shall send to the Philippine Islands a few traders, a few taskmasters and a few office-holders and an army large enough to support the authority of a small fraction of the people while they rule the natives. If we have an imperial policy we must have a great standing army as its natural and necessary complement. The spirit which will justify the forcible annexation of the Philippine Islands will justify the seizure of other islands and the domination of other people, and with wars of conquest we can expect a certain, if not rapid, growth of our military establishment." },
      { cite: "William Jennings Bryan, \"Imperialism,\" speech accepting the Democratic presidential nomination, Indianapolis, August 8, 1900. In Speeches of William Jennings Bryan, vol. 2 (1909).", url: "https://archive.org/details/speechesofwillia02bryauoft", kind: "primary" },
    ] }],
  },
  "a7a-s07": {
    id: "a7a-s07", name: "Taft on diplomacy and trade, 1912", intro: "Use the excerpt below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "The diplomacy of the present administration has sought to respond to modern ideas of commercial intercourse. This policy has been characterized as substituting dollars for bullets. It is one that appeals alike to idealistic humanitarian sentiments, to the dictates of sound policy and strategy, and to legitimate commercial aims. It is an effort frankly directed to the increase of American trade upon the axiomatic principle that the Government of the United States shall extend all proper support to every legitimate and beneficial American enterprise abroad. ... It is therefore essential that the countries within that sphere [the Caribbean] shall be removed from the jeopardy involved by heavy foreign debt and chaotic national finances and from the ever-present danger of international complications due to disorder at home." },
      { cite: "William Howard Taft, Fourth Annual Message to Congress, December 3, 1912. Papers Relating to the Foreign Relations of the United States, 1912.", url: "https://history.state.gov/historicaldocuments/frus1912/message-of-the-president", kind: "primary" },
    ] }],
  },

  // ---------- 7.3 The Spanish-American War ----------
  "a7a-s08": {
    id: "a7a-s08", name: "The Big Type War of the Yellow Kids, 1898", intro: "Use the image below to answer the questions that follow.", label: "Image",
    sources: [{ title: "Image", blocks: [
      { img: "images/apush/u7-big-type-war-yellow-kids.jpg", alt: "A color cartoon. Two men dressed as the Yellow Kid, a popular comic strip character, in long yellow nightshirts, stand barefoot on either side of a stack of giant wooden alphabet blocks that spell WAR, the W and R striped like the American flag. Each man pushes on the stack. The man on the left, labeled Pulitzer, has words on his shirt, in mock immigrant dialect, saying the war is his and cannot be bought. The man on the right, labeled as Hearst, has words on his shirt saying this is his war, that he bought and paid for it, and that he will have anyone who bothers him put off the earth. More oversized letter blocks fill the background.",
        caption: "\"The Big Type War of the Yellow Kids,\" a cartoon by Leon Barritt in the New York humor magazine Vim, June 1898, two months after the United States declared war on Spain. Joseph Pulitzer's New York World and William Randolph Hearst's New York Journal had competed for readers with sensational coverage of Cuba and the sinking of the Maine.",
        credit: "Library of Congress, Prints and Photographs Division, LC-USZC4-3800", license: LOC, url: "https://www.loc.gov/item/95508199/" },
      { cite: "Leon Barritt, \"The Big Type War of the Yellow Kids,\" Vim, vol. 1, no. 2, June 29, 1898. Library of Congress.", url: "https://www.loc.gov/item/95508199/", kind: "primary" },
    ] }],
  },
  "a7a-s09": {
    id: "a7a-s09", name: "McKinley's war message, 1898", intro: "Use the excerpt below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "The grounds for such intervention may be briefly summarized as follows: First. In the cause of humanity and to put an end to the barbarities, bloodshed, starvation, and horrible miseries now existing there, and which the parties to the conflict are either unable or unwilling to stop or mitigate. ... It is specially our duty, for it is right at our door. ... Third. The right to intervene may be justified by the very serious injury to the commerce, trade, and business of our people and by the wanton destruction of property and devastation of the island. Fourth, and which is of the utmost importance. The present condition of affairs in Cuba is a constant menace to our peace and entails upon this Government an enormous expense." },
      { cite: "William McKinley, Message to Congress Requesting a Declaration of War With Spain, April 11, 1898.", url: "https://www.presidency.ucsb.edu/documents/message-congress-requesting-declaration-war-with-spain", kind: "primary" },
    ] }],
  },

  // ---------- 7.4 The Progressives ----------
  "a7a-s10": {
    id: "a7a-s10", name: "The Awakening, Puck, 1915", intro: "Use the image below to answer the questions that follow.", label: "Image",
    sources: [{ title: "Image", blocks: [
      { img: "images/apush/u7-the-awakening.jpg", alt: "A two-page color cartoon titled The Awakening. A tall woman in a flowing golden robe, like a goddess of liberty, strides across the western half of a map of the United States, holding up a flaming torch; her cape reads Votes for Women. The western states she walks over are white and labeled, among them Washington, Oregon, California, Idaho, Wyoming, Utah, Colorado, Arizona, and Kansas, the states where women could already vote. The rest of the country, from the Plains to the Atlantic, is black and crowded with women who stretch their arms toward her and the light.",
        caption: "\"The Awakening,\" by Henry (Hy) Mayer, the centerfold of a special suffrage issue of Puck, February 1915, guest edited by New York suffrage groups while New York prepared to vote on a state woman suffrage referendum.",
        credit: "Library of Congress, Prints and Photographs Division, LC-DIG-ds-12369", license: LOC, url: "https://www.loc.gov/item/98502844/" },
      { cite: "Henry Mayer, \"The Awakening,\" Puck, February 20, 1915, centerfold. Library of Congress.", url: "https://www.loc.gov/item/98502844/", kind: "primary" },
    ] }],
  },
  "a7a-s11": {
    id: "a7a-s11", name: "Theodore Roosevelt on the trusts, 1901", intro: "Use the excerpt below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "There is a widespread conviction in the minds of the American people that the great corporations known as trusts are in certain of their features and tendencies hurtful to the general welfare. ... It is based upon sincere conviction that combination and concentration should be, not prohibited, but supervised and within reasonable limits controlled; and in my judgment this conviction is right. ... The first essential in determining how to deal with the great industrial combinations is knowledge of the facts--publicity. The Government should have the right to inspect and examine the workings of the great corporations engaged in interstate business." },
      { cite: "Theodore Roosevelt, First Annual Message to Congress, December 3, 1901.", url: "https://www.presidency.ucsb.edu/documents/first-annual-message-16", kind: "primary" },
    ] }],
  },
  "a7a-s12": {
    id: "a7a-s12", name: "Muller v. Oregon, 1908", intro: "In 1908 the Supreme Court decided a challenge to an Oregon law that limited women working in factories and laundries to ten hours a day. Use the excerpt below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "That woman's physical structure and the performance of maternal functions place her at a disadvantage in the struggle for subsistence is obvious. This is especially true when the burdens of motherhood are upon her. Even when they are not, by abundant testimony of the medical fraternity, continuance for a long time on her feet at work, repeating this from day to day, tends to injurious effects upon the body, and, as healthy mothers are essential to vigorous offspring, the physical wellbeing of woman becomes an object of public interest and care in order to preserve the strength and vigor of the race. ... Differentiated by these matters from the other sex, she is properly placed in a class by herself, and legislation designed for her protection may be sustained even when like legislation is not necessary for men, and could not be sustained." },
      { cite: "Muller v. Oregon, 208 U.S. 412 (1908), opinion of the Court by Justice David J. Brewer.", url: "https://supreme.justia.com/cases/federal/us/208/412/", kind: "primary" },
    ] }],
  },
  "a7a-s13": {
    id: "a7a-s13", name: "Pinchot on conservation, 1910", intro: "Gifford Pinchot headed the U.S. Forest Service under Theodore Roosevelt. Use the excerpt below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "The first great fact about conservation is that it stands for development. ... Conservation does mean provision for the future, but it means also and first of all the recognition of the right of the present generation to the fullest necessary use of all the resources with which this country is so abundantly blessed. ... The first principle of conservation is development, the use of the natural resources now existing on this continent for the benefit of the people who live here now. ... In the second place conservation stands for the prevention of waste. ... The natural resources must be developed and preserved for the benefit of the many, and not merely for the profit of a few." },
      { cite: "Gifford Pinchot, The Fight for Conservation (New York: Doubleday, Page, 1910).", url: "https://archive.org/details/fightforconserva00pinc", kind: "primary" },
    ] }],
  },
  "a7a-s14": {
    id: "a7a-s14", name: "What the Progressives wanted", intro: "Use the passage below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "The Progressive movement was less a single organization than a broad impulse shared by middle-class Americans who feared that industrial capitalism, corrupt city machines, and crowded cities threatened the nation. Progressives trusted facts and experts. Journalists exposed abuses, social workers gathered data, and reformers then pressed governments at every level to act, from city commissions to state laws on factory safety to federal rules for food and drugs. Yet the movement had clear limits. Many Progressives supported immigration restriction and literacy tests, and most accepted or ignored the segregation laws spreading across the South. Reform, for many of them, meant restoring order as much as expanding democracy." },
      { cite: PRACTICE, kind: "practice" },
    ] }],
  },
};

export default [
];

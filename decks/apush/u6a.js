// AP U.S. History review, Unit 6 (6.1 to 6.7): the West, the New South, technology, industrial capitalism, and labor, 1865 to 1898.
import { maps } from "./maps.js";

const PRACTICE = "Practice passage written for this review, summarizing an interpretation held by many historians.";

export const sets = {
  // ---------- 6.1 Contextualizing the Period ----------
  "a6a-s01": {
    id: "a6a-s01", name: "Cleveland on trusts and classes, 1888", intro: "Use the excerpt below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "We discover that the fortunes realized by our manufacturers are no longer solely the reward of sturdy industry and enlightened foresight, but that they result from the discriminating favor of the Government and are largely built upon undue exactions from the masses of our people. The gulf between employers and the employed is constantly widening, and classes are rapidly forming, one comprising the very rich and powerful, while in another are found the toiling poor. As we view the achievements of aggregated capital, we discover the existence of trusts, combinations, and monopolies, while the citizen is struggling far in the rear or is trampled to death beneath an iron heel. Corporations, which should be the carefully restrained creatures of the law and the servants of the people, are fast becoming the people's masters." },
      { cite: "Grover Cleveland, Fourth Annual Message to Congress, December 3, 1888.", url: "https://www.presidency.ucsb.edu/documents/fourth-annual-message-first-term", kind: "primary" },
    ] }],
  },
  "a6a-s02": {
    id: "a6a-s02", name: "Two views of the period after the Civil War", intro: "Use the two passages below to answer the questions that follow.",
    sources: [
      { title: "Source 1", blocks: [
        { p: "The decades after the Civil War are best understood as the years when a national economy replaced a collection of regional ones. Railroads, many built with federal land grants, tied the farms and ranches of the Great Plains and the mines of the Rocky Mountains to banks and factories in the Northeast. Western wheat and cattle, and Southern cotton, timber, and coal, moved toward the industrial cities, while manufactured goods and credit moved outward. Corporations organized on a national scale, and their leaders increasingly set the terms of economic life. In this view the West and the New South were less separate stories than outlying parts of one industrial system centered in New York, Pittsburgh, and Chicago." },
        { cite: PRACTICE + " Historian A.", kind: "practice" },
      ] },
      { title: "Source 2", blocks: [
        { p: "Focusing on industry can hide the central political question of these years: what the Civil War had settled about citizenship. The war ended slavery, and the Reconstruction amendments promised equal rights, yet by the 1890s Southern states had imposed segregation and stripped most Black men of the vote, while federal courts narrowed the Fourteenth Amendment. In the same decades the army and federal agents confined Western Native nations to reservations and then broke up tribal land. The era's defining story, in this view, is the retreat from the promise of national citizenship and the use of federal power to conquer rather than to protect." },
        { cite: PRACTICE + " Historian B.", kind: "practice" },
      ] },
    ],
  },
  "a6a-s03": {
    id: "a6a-s03", name: "An active government in the Gilded Age", intro: "Use the passage below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "The label \"Gilded Age,\" taken from an 1873 novel by Mark Twain and Charles Dudley Warner, suggests a thin coat of gold over a corrupt core, and older accounts described a passive government that left business alone. Many historians now see a more active state. Congress kept high protective tariffs, gave railroads millions of acres of public land, and offered Western land to settlers. The army fought Native nations on the Plains, and federal courts issued injunctions against striking workers. What government rarely did was regulate business or protect workers and Black citizens. The question, in this view, is not whether government acted but whose interests its actions served." },
      { cite: PRACTICE, kind: "practice" },
    ] }],
  },

  // ---------- 6.2 Westward Expansion: Economic Development ----------
  "a6a-s04": {
    id: "a6a-s04", name: "New Western states, 1864 to 1896", intro: "Use the map below to answer the questions that follow.",
    sources: [{ title: "Map", blocks: [
      { svg: maps["u6a-statehood"], caption: "Western states admitted to the Union, 1864 to 1896, and the territories still waiting in 1896 (present-day state lines shown; Oklahoma was then Oklahoma Territory and Indian Territory, and the Dakotas were one territory until both became states in 1889)" },
      { cite: "Map drawn for this review from Natural Earth land outlines and U.S. Census Bureau state boundaries (public domain). Places and dates checked against REF_A and REF_B.", kind: "map" },
    ] }],
  },
  "a6a-s05": {
    id: "a6a-s05", name: "Powell on farm size in the arid West, 1878", intro: "Use the excerpt below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "The grass is so scanty that the herdsman must have a large area for the support of his stock. In general a quarter section of land alone is of no value to him; the pasturage it affords is entirely inadequate to the wants of a herd that the poorest man needs for his support. Four square miles may be considered as the minimum amount necessary for a pasturage farm, and a still greater amount is necessary for the larger part of the lands; that is, pasturage farms, to be of any practicable value, must be of at least 2,560 acres, and in many districts they must be much larger." },
      { cite: "John Wesley Powell, Report on the Lands of the Arid Region of the United States, a report of the U.S. Geographical and Geological Survey of the Rocky Mountain Region submitted to Congress in 1878, chapter 1, \"Pasturage Lands.\" A quarter section is 160 acres, the size of a homestead claim.", url: "https://archive.org/details/reportonlandsofa00geog", kind: "primary" },
    ] }],
  },
  "a6a-s06": {
    id: "a6a-s06", name: "The West and outside power", intro: "Use the passage below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "For much of the twentieth century, Americans pictured the West as a land of self-reliant pioneers who succeeded on their own. Many historians now stress how much the region depended on outside power. The federal government surveyed the land, granted much of it to railroads, and sent the army to force Native nations onto reservations. Eastern and British investors financed the mines, cattle companies, and rail lines, and the prices of Western wheat, beef, and silver were set in markets far away. Mining towns were often company towns where wage workers, many of them Chinese, Mexican, or European immigrants, dug ore for distant owners. The West, in this view, was less a frontier of independence than a colony of Eastern capital and federal power." },
      { cite: PRACTICE, kind: "practice" },
    ] }],
  },

  // ---------- 6.3 Westward Expansion: Social and Cultural Development ----------
  "a6a-s07": {
    id: "a6a-s07", name: "Wars on the Plains and in the Far West, 1864 to 1890", intro: "Use the map below to answer the questions that follow.",
    sources: [{ title: "Map", blocks: [
      { svg: maps["u6a-plainswars"], caption: "Some battles and surrenders in the wars between the United States and Native nations of the West, 1864 to 1890 (present-day state lines shown for reference)" },
      { cite: "Map drawn for this review from Natural Earth land outlines and U.S. Census Bureau state boundaries (public domain). Places and dates checked against REF_A and REF_B.", kind: "map" },
    ] }],
  },
  "a6a-s08": {
    id: "a6a-s08", name: "Hayes on Indian policy, 1877", intro: "Use the excerpt below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "... the Indians are certainly entitled to our sympathy and to a conscientious respect on our part for their claims upon our sense of justice. They were the aboriginal occupants of the land we now possess. They have been driven from place to place. ... In many instances, when they had settled down upon land assigned to them by compact and begun to support themselves by their own labor, they were rudely jostled off and thrust into the wilderness again. Many, if not most, of our Indian wars have had their origin in broken promises and acts of injustice upon our part, and the advance of the Indians in civilization has been slow because the treatment they received did not permit it to be faster and more general." },
      { cite: "Rutherford B. Hayes, First Annual Message to Congress, December 3, 1877.", url: "https://www.presidency.ucsb.edu/documents/first-annual-message-12", kind: "primary" },
    ] }],
  },
  "a6a-s09": {
    id: "a6a-s09", name: "Arthur on allotment, 1881", intro: "Use the excerpt below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "... The enactment of a general law permitting the allotment in severalty, to such Indians, at least, as desire it, of a reasonable quantity of land secured to them by patent, and for their own protection made inalienable for twenty or twenty-five years, is demanded for their present welfare and their permanent advancement. In return for such considerate action on the part of the Government, there is reason to believe that the Indians in large numbers would be persuaded to sever their tribal relations and to engage at once in agricultural pursuits. Many of them realize the fact that their hunting days are over and that it is now for their best interests to conform their manner of life to the new order of things. By no greater inducement than the assurance of permanent title to the soil can they be led to engage in the occupation of tilling it." },
      { cite: "Chester A. Arthur, First Annual Message to Congress, December 6, 1881. \"In severalty\" means owned by individuals rather than by the tribe; \"inalienable\" means it could not be sold.", url: "https://www.presidency.ucsb.edu/documents/first-annual-message-13", kind: "primary" },
    ] }],
  },

  // ---------- 6.4 The New South ----------
  "a6a-s10": {
    id: "a6a-s10", name: "The Civil Rights Cases, 1883", intro: "Use the excerpt below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "When a man has emerged from slavery, and by the aid of beneficent legislation has shaken off the inseparable concomitants of that state, there must be some stage in the progress of his elevation when he takes the rank of a mere citizen, and ceases to be the special favorite of the laws, and when his rights as a citizen, or a man, are to be protected in the ordinary modes by which other men's rights are protected. ... Mere discriminations on account of race or color were not regarded as badges of slavery." },
      { cite: "Justice Joseph P. Bradley, majority opinion, Civil Rights Cases, 109 U.S. 3 (1883). The Court ruled on suits against inns, theaters, and a railroad that had refused service to Black customers.", url: "https://www.law.cornell.edu/supremecourt/text/109/3", kind: "primary" },
    ] }],
  },
  "a6a-s11": {
    id: "a6a-s11", name: "Williams v. Mississippi, 1898", intro: "Use the excerpt below to answer the questions that follow. Mississippi's constitution of 1890 required voters to pay a poll tax and to read or explain a section of the state constitution.",
    sources: [{ title: "Source", blocks: [
      { p: "... the supreme court of the state said: 'Within the field of permissible action under the limitations imposed by the federal constitution, the convention swept the field of expedients, to obstruct the exercise of suffrage by the negro race.' ... But nothing tangible can be deduced from this. ... the operation of the constitution and laws is not limited by their language or effects to one race. They reach weak and vicious white men as well as weak and vicious black men ... It cannot be said, therefore, that the denial of the equal protection of the laws arises primarily from the constitution and laws of Mississippi; nor is there any sufficient allegation of an evil and discriminating administration of them." },
      { cite: "Justice Joseph McKenna, opinion of the Court, Williams v. Mississippi, 170 U.S. 213 (1898).", url: "https://www.law.cornell.edu/supremecourt/text/170/213", kind: "primary" },
    ] }],
  },

  // ---------- 6.5 Technological Innovation ----------
  "a6a-s12": {
    id: "a6a-s12", name: "\"The modern colossus of (rail) roads,\" 1879", intro: "Use the image below to answer the questions that follow.",
    sources: [{ title: "Image", blocks: [
      { img: "images/apush/u6-modern-colossus-of-railroads.jpg", alt: "A tall color cartoon. A giant William H. Vanderbilt, heavy, white haired, in a black suit, stands with his legs planted far apart over a web of railroad tracks that stretch to the horizon. In each hand he holds reins tied to steam locomotives far below, steering them like horses. Between his legs stand two smaller men, financiers Cyrus Field and Jay Gould, who also pull on lines. Grain elevators and rail yards fill the background. A sign by the tracks at the bottom says all freight in this section must pay toll and tribute. The title is printed at the bottom.", caption: "A cartoon by Joseph Keppler in Puck, December 10, 1879, showing the railroad magnate William H. Vanderbilt, head of the New York Central, as a modern Colossus of Rhodes.", credit: "Library of Congress, Prints and Photographs Division, LC-DIG-ds-05068", license: "public domain, Library of Congress (no known restrictions on publication)", url: "https://www.loc.gov/item/2014645351/" },
      { cite: "Joseph Keppler, \"The modern colossus of (rail) roads,\" Puck, December 10, 1879. Library of Congress.", url: "https://www.loc.gov/item/2014645351/", kind: "primary" },
    ] }],
  },
  "a6a-s13": {
    id: "a6a-s13", name: "Wells on recent economic changes, 1889", intro: "Use the excerpt below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "It would seem, indeed, as if the world ... has been working up on the line of equipment for industrial effort — inventing and perfecting tools and machinery, building workshops and factories, and devising instrumentalities for the easy intercommunication of persons and thoughts, and the cheap exchange of products and services; that this equipment having at last been made ready, the work of using it has, for the first time in our day and generation, fairly begun ... As an immediate consequence the world has never seen anything comparable to the results of the recent system of transportation by land and water ... Concurrently, or as the necessary sequence of these changes, has come a series of wide-spread and complex disturbances; manifesting themselves in great reductions of the cost of production and distribution and a consequent remarkable decline in the prices of nearly all staple commodities, ... in the discontent of labor ..." },
      { cite: "David A. Wells, Recent Economic Changes (New York: D. Appleton and Company, 1889), preface. Wells was an economist who had served as a federal tax official.", url: "https://archive.org/details/recenteconomicch00welluoft", kind: "primary" },
    ] }],
  },

  // ---------- 6.6 The Rise of Industrial Capitalism ----------
  "a6a-s14": {
    id: "a6a-s14", name: "\"The protectors of our industries,\" 1883", intro: "Use the image below to answer the questions that follow.",
    sources: [{ title: "Image", blocks: [
      { img: "images/apush/u6-protectors-of-our-industries.jpg", alt: "A color cartoon. Four rich men in top hats and fine coats (Cyrus Field, Jay Gould, William H. Vanderbilt, and Russell Sage) lounge at the front of a huge raft piled with money bags labeled with their names and \"millions.\" The raft is loaded with goods such as cloth, linens, lumber, machinery, glass, and paper, each tagged with low weekly wages, for example \"Cloth workers average $8 a week\" and \"Linen workers average $11 a week.\" The whole raft rests on the bent backs of a long line of poorly dressed workers, men, women, and children, who stand waist deep in the sea and hold it up. A hammer and a pickaxe lie in the water.", caption: "A cartoon by Bernhard Gillam on the back cover of Puck, a New York humor magazine, February 7, 1883.", credit: "Library of Congress, Prints and Photographs Division, LC-DIG-ds-16881", license: "public domain, Library of Congress (no known restrictions on publication)", url: "https://www.loc.gov/item/94507245/" },
      { cite: "Bernhard Gillam, \"The protectors of our industries,\" Puck, February 7, 1883. Library of Congress.", url: "https://www.loc.gov/item/94507245/", kind: "primary" },
    ] }],
  },
  "a6a-s15": {
    id: "a6a-s15", name: "The Sherman Act and the sugar trust, 1890 and 1895", intro: "Use the two excerpts below to answer the questions that follow.",
    sources: [
      { title: "Source 1", blocks: [
        { p: "Every contract, combination in the form of trust or otherwise, or conspiracy, in restraint of trade or commerce among the several States, or with foreign nations, is hereby declared to be illegal. ... Every person who shall monopolize, or attempt to monopolize, or combine or conspire with any other person or persons, to monopolize any part of the trade or commerce among the several States, or with foreign nations, shall be deemed guilty of a misdemeanor ..." },
        { cite: "Sherman Anti-Trust Act, Sections 1 and 2, approved July 2, 1890. National Archives.", url: "https://www.archives.gov/milestone-documents/sherman-anti-trust-act", kind: "primary" },
      ] },
      { title: "Source 2", blocks: [
        { p: "Doubtless the power to control the manufacture of a given thing involves, in a certain sense, the control of its disposition, but this is a secondary, and not the primary, sense; and, although the exercise of that power may result in bringing the operation of commerce into play, it does not control it, and affects it only incidentally and indirectly. Commerce succeeds to manufacture, and is not a part of it. The power to regulate commerce is the power to prescribe the rule by which commerce shall be governed, and is a power independent of the power to suppress monopoly." },
        { cite: "Chief Justice Melville Fuller, majority opinion, United States v. E. C. Knight Co., 156 U.S. 1 (1895). The federal government had sued the American Sugar Refining Company, which controlled nearly all sugar refining in the country.", url: "https://www.law.cornell.edu/supremecourt/text/156/1", kind: "primary" },
      ] },
    ],
  },
  "a6a-s16": {
    id: "a6a-s16", name: "The Republican platform on protection, 1888", intro: "Use the excerpt below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "We are uncompromisingly in favor of the American system of protection; we protest against its destruction as proposed by the President and his party. They serve the interests of Europe; we will support the interests of America. We accept the issue, and confidently appeal to the people for their judgment. The protective system must be maintained. Its abandonment has always been followed by general disaster to all interests, except those of the usurer and the sheriff. We denounce the Mills bill as destructive to the general business, the labor and the farming interests of the country, and we heartily indorse the consistent and patriotic action of the Republican Representatives in Congress in opposing its passage." },
      { cite: "Republican Party Platform of 1888, adopted at the national convention in Chicago, June 1888.", url: "https://www.presidency.ucsb.edu/documents/republican-party-platform-1888", kind: "primary" },
    ] }],
  },
  "a6a-s17": {
    id: "a6a-s17", name: "Robber barons or industrial statesmen?", intro: "Use the two passages below to answer the questions that follow.",
    sources: [
      { title: "Source 1", blocks: [
        { p: "The great industrialists of the late nineteenth century built their fortunes less by making better products than by crushing rivals and bending the rules. John D. Rockefeller's Standard Oil won secret rebates from railroads that let it undersell competitors until they sold out. Jay Gould manipulated railroad stocks and bribed lawmakers. Andrew Carnegie's managers cut wages and broke the union at Homestead in 1892. These men gained enormous power over prices, wages, and even government, and their wealth rested on the long hours and low pay of the workers beneath them." },
        { cite: PRACTICE + " Historian A.", kind: "practice" },
      ] },
      { title: "Source 2", blocks: [
        { p: "Calling these men robber barons misses what they accomplished. Rockefeller cut waste and drove down the price of kerosene so that ordinary families could light their homes cheaply. Carnegie adopted the newest steelmaking methods and controlled every stage from iron ore to finished rails, which lowered the price of steel and helped build railroads, bridges, and cities. By organizing business on a national scale, these industrial statesmen created a more efficient economy, and much of their wealth later returned to the public through libraries, universities, and foundations." },
        { cite: PRACTICE + " Historian B.", kind: "practice" },
      ] },
    ],
  },

  // ---------- 6.7 Labor in the Gilded Age ----------
  "a6a-s18": {
    id: "a6a-s18", name: "\"King Debs,\" 1894", intro: "Use the image below to answer the questions that follow.",
    sources: [{ title: "Image", blocks: [
      { img: "images/apush/u6-king-debs.jpg", alt: "A Harper's Weekly cover with the masthead at top. In the center, labor leader Eugene V. Debs, wearing a large crown, crouches on top of a railroad bridge with his chin in his hands, glaring down like a gargoyle. Below and behind him spreads a huge city rail yard with long lines of freight cars standing still, train sheds, warehouses, and factory smokestacks. The bridge rests on a stone pier in the water. The words \"King Debs\" are printed at the bottom.", caption: "A cover cartoon by W. A. Rogers in Harper's Weekly, July 14, 1894, during the Pullman strike and the nationwide boycott of Pullman cars led by Debs's American Railway Union.", credit: "Library of Congress, Prints and Photographs Division, LC-USZ62-106100", license: "public domain, Library of Congress (no known restrictions on publication)", url: "https://www.loc.gov/item/92515992/" },
      { cite: "W. A. Rogers, \"King Debs,\" Harper's Weekly, July 14, 1894, cover. Library of Congress.", url: "https://www.loc.gov/item/92515992/", kind: "primary" },
    ] }],
  },
  "a6a-s19": {
    id: "a6a-s19", name: "The Knights of Labor's declaration, 1878", intro: "Use the excerpt below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "I. To bring within the folds of organization, every department of productive industry, making knowledge a stand-point for action, and industrial and moral worth, not wealth, the true standard of individual and national greatness." },
      { p: "II. To secure to the toilers a proper share of the wealth that they create; more of the leisure that rightfully belongs to them ..." },
      { p: "X. The substitution of arbitration for strikes, whenever and wherever employers and employes are willing to meet on equitable grounds. ..." },
      { p: "XIII. To secure for both sexes equal pay for equal work." },
      { p: "XIV The reduction of the hours of labor to eight per day, so that the laborers may have more time for social enjoyment and intellectual improvement, and be enabled to reap the advantages conferred by the labor-saving machinery which their brains have created." },
      { cite: "Knights of Labor, Preamble and Declaration of Principles, adopted at Reading, Pennsylvania, January 1878, as printed in Terence V. Powderly, Thirty Years of Labor, 1859 to 1889 (Columbus, Ohio: Excelsior Publishing House, 1889).", url: "https://archive.org/details/thirtyyearsoflab00powduoft", kind: "primary" },
    ] }],
  },
  "a6a-s20": {
    id: "a6a-s20", name: "Why unions stayed weak", intro: "Use the passage below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "Union membership in the United States stayed small in the late nineteenth century, and historians have offered several reasons. Employers held great power: they hired strikebreakers, blacklisted organizers, and called on Pinkerton guards. Courts issued injunctions against strikes, and governors and presidents sent troops, as in 1877 and 1894. But many historians also stress divisions inside the working class. Skilled craftsmen often saw little in common with unskilled laborers, native-born workers distrusted new immigrants, and many unions shut out Black and Chinese workers. Employers used these divisions, hiring one group to replace another during strikes. In this view, the weakness of labor came as much from its own fractures as from the strength of capital." },
      { cite: PRACTICE, kind: "practice" },
    ] }],
  },
  // FREE-RESPONSE SETS
};

export default [
  // ---------- 6.1 ----------
  { id: "a6a-m001", skill: "u6", type: "mcq", set: "a6a-s01", topic: "6.1", difficulty: "moderate", reasoning: "Causation",
    question: "Cleveland's complaint about \"the discriminating favor of the Government\" toward manufacturers was aimed most directly at which policy?",
    choices: [
      "High protective tariffs on imported goods",
      "Federal land grants to Western railroads",
      "The free coinage of silver at 16 to 1",
      "Court injunctions used to break strikes",
    ],
    why: [
      "Correct. Cleveland's message of December 1888 was a call to lower the protective tariff, which he said let manufacturers raise prices and collect \"undue exactions\" from consumers.",
      "Railroad land grants were a real federal favor, but they went to railroads, not to the manufacturers Cleveland names, and most had been made in the 1860s.",
      "Free silver was a farmers' and Populist demand of the 1890s; Cleveland, a gold standard Democrat, opposed it.",
      "Federal injunctions against strikers came mainly in the 1890s, as in the Pullman strike of 1894, and they favored railroads, not manufacturers through tariffs.",
    ],
    answer: 0 },
  { id: "a6a-m002", skill: "u6", type: "mcq", set: "a6a-s01", topic: "6.1", difficulty: "easy", reasoning: "Continuity and Change",
    question: "The excerpt most directly reflects which development of the late nineteenth century?",
    choices: [
      "The concentration of wealth in large business combinations",
      "The spread of small family farms across the Great Plains",
      "The decline of manufacturing in the Northeast after 1865",
      "The rise of strong federal agencies regulating corporations",
    ],
    why: [
      "Correct. Cleveland describes \"trusts, combinations, and monopolies\" and a widening gulf between \"the very rich and powerful\" and \"the toiling poor,\" the concentration of wealth that marked the Gilded Age.",
      "Homesteaders did settle the Plains, but the excerpt is about manufacturers, trusts, and corporations, not farms.",
      "Northeastern manufacturing grew rapidly after the Civil War; it did not decline.",
      "Cleveland complains that corporations are not being \"carefully restrained\"; strong federal regulation did not yet exist, and the Interstate Commerce Commission of 1887 had little power.",
    ],
    answer: 0 },
  { id: "a6a-m003", skill: "u6", type: "mcq", set: "a6a-s01", topic: "6.1", difficulty: "difficult", reasoning: "Causation",
    question: "Which LATER action of the federal government most directly responded to the concern Cleveland raises about \"trusts, combinations, and monopolies\"?",
    choices: [
      "The Sherman Antitrust Act of 1890",
      "The Interstate Commerce Act of 1887",
      "The McKinley Tariff of 1890",
      "The Pendleton Civil Service Act of 1883",
    ],
    why: [
      "Correct. The Sherman Antitrust Act, passed in July 1890, declared illegal every combination \"in the form of trust or otherwise\" in restraint of interstate trade.",
      "The Interstate Commerce Act regulated railroad rates, and it came in 1887, before this December 1888 message, so it is not a later response.",
      "The McKinley Tariff of 1890 raised tariff rates to new highs, the opposite of what Cleveland wanted, and it did not target trusts.",
      "The Pendleton Act of 1883 created a merit system for some federal jobs; it addressed the spoils system, not monopolies, and it came earlier.",
    ],
    answer: 0 },

  { id: "a6a-m004", skill: "u6", type: "mcq", set: "a6a-s02", topic: "6.1", difficulty: "moderate", reasoning: "Comparison",
    question: "Which of the following best describes a difference between the two historians' interpretations?",
    choices: [
      "Historian A stresses economic integration, while Historian B stresses the narrowing of citizenship and rights.",
      "Historian A stresses the West's independence, while Historian B stresses Northern economic control of the South.",
      "Historian A denies any federal role in the economy, while Historian B praises the federal protection of rights.",
      "Historian A focuses on New South political leaders, while Historian B focuses on Western farmers' protests.",
    ],
    why: [
      "Correct. Historian A describes railroads and corporations tying the West and South to a national industrial system; Historian B argues the defining story was segregation, disfranchisement, and the conquest of Native nations.",
      "Historian A calls the West an \"outlying part\" of one system, the opposite of independence, and Historian B does not discuss Northern economic control.",
      "Historian A says railroads were \"built with federal land grants,\" and Historian B criticizes federal power for conquering \"rather than to protect.\"",
      "Neither historian discusses New South politicians by name or the farmers' protests of the Grange and the Alliances.",
    ],
    answer: 0 },
  { id: "a6a-m005", skill: "u6", type: "mcq", set: "a6a-s02", topic: "6.1", difficulty: "easy",
    question: "Which of the following would best support Historian B's argument?",
    choices: [
      "The Supreme Court's acceptance of segregation laws in 1896",
      "The joining of the first transcontinental railroad in 1869",
      "The growth of Chicago as a center of meatpacking and grain",
      "The adoption of the Bessemer process in Carnegie's mills",
    ],
    why: [
      "Correct. In Plessy v. Ferguson (1896) the Court upheld a Louisiana law segregating railroad cars, a clear example of the retreat from equal citizenship that Historian B describes.",
      "The transcontinental railroad fits Historian A's story of a national economy, not Historian B's argument about citizenship.",
      "Chicago's growth as a rail, grain, and meatpacking hub supports Historian A's picture of a national industrial system.",
      "New steelmaking methods are part of industrial growth, Historian A's subject, and say nothing about rights or citizenship.",
    ],
    answer: 0 },
  { id: "a6a-m006", skill: "u6", type: "mcq", set: "a6a-s02", topic: "6.1", difficulty: "moderate",
    question: "Historian A's argument would be most directly challenged by evidence that",
    choices: [
      "most Western and Southern economies grew mainly through local capital and local markets",
      "Northeastern banks lent heavily to Western railroads, mines, and cattle companies",
      "the federal government granted millions of acres of public land to railroad companies",
      "Southern states had disfranchised most Black voters by the end of the 1890s",
    ],
    why: [
      "Correct. Historian A argues that the West and South became outlying parts of a system run from Northeastern cities; evidence of mainly local capital and markets would undercut that claim.",
      "Eastern lending to Western enterprises supports Historian A's point that credit and control flowed outward from the Northeast.",
      "Railroad land grants support Historian A, who says many lines were \"built with federal land grants\" to tie the regions together.",
      "Disfranchisement is true, but it supports Historian B's argument; it does not show that Historian A's economic claim is wrong.",
    ],
    answer: 0 },

  { id: "a6a-m007", skill: "u6", type: "mcq", set: "a6a-s03", topic: "6.1", difficulty: "easy",
    question: "Which of the following would best support the passage's claim that the federal government was active in the economy?",
    choices: [
      "The Pacific Railway Acts, which gave land and loans to rail companies",
      "The Freedmen's Bureau, which ran schools in the South after 1865",
      "The Federal Reserve Act, which set up a system of central banks",
      "The Social Security Act, which created pensions for older workers",
    ],
    why: [
      "Correct. The Pacific Railway Acts of 1862 and 1864 gave railroad companies land grants and government bonds to build the transcontinental line, a direct federal push for economic growth.",
      "The Freedmen's Bureau was a Reconstruction agency for formerly enslaved people; it was an act of social policy, not support for business.",
      "The Federal Reserve Act was passed in 1913, after this period.",
      "The Social Security Act was passed in 1935 as part of the New Deal, long after the Gilded Age.",
    ],
    answer: 0 },
  { id: "a6a-m008", skill: "u6", type: "mcq", set: "a6a-s03", topic: "6.1", difficulty: "easy",
    question: "Which group in the 1880s and 1890s would most likely have agreed with the passage's point about whose interests government served?",
    choices: [
      "Members of the Knights of Labor and the Farmers' Alliances",
      "Railroad owners such as Leland Stanford and Collis Huntington",
      "Followers of Herbert Spencer's ideas about the survival of the fittest",
      "Republican leaders in Congress who wrote the protective tariffs",
    ],
    why: [
      "Correct. Workers in the Knights of Labor and farmers in the Alliances complained that tariffs, land grants, and injunctions served corporations while government did little for them.",
      "Stanford and Huntington built the Central Pacific with federal aid; they benefited from the policies the passage describes.",
      "Spencer's followers defended the wealthy as the fittest and opposed government help for the poor, so they would not share the complaint.",
      "Republican tariff makers argued that protection helped everyone, including workers; they would reject the passage's criticism.",
    ],
    answer: 0 },
  { id: "a6a-m009", skill: "u6", type: "mcq", set: "a6a-s03", topic: "6.1", difficulty: "moderate", reasoning: "Continuity and Change",
    question: "The government policies described in the passage most closely resemble which earlier program?",
    choices: [
      "Henry Clay's American System of tariffs and internal improvements",
      "Thomas Jefferson's cuts to the federal debt, army, and navy",
      "Andrew Jackson's veto of the Second Bank of the United States",
      "The Articles of Confederation's limits on national taxing power",
    ],
    why: [
      "Correct. Clay's American System, proposed after the War of 1812, joined a protective tariff with federal support for roads and canals, much like Gilded Age tariffs and railroad land grants.",
      "Jefferson shrank the federal government, the opposite of the active economic role the passage describes.",
      "Jackson's 1832 veto pulled the federal government back from banking, again the opposite of active promotion.",
      "The Articles left Congress unable to tax at all, a far weaker government than the one in the passage.",
    ],
    answer: 0 },

  // ---------- 6.2 ----------
  { id: "a6a-m010", skill: "u6", type: "mcq", set: "a6a-s04", topic: "6.2", difficulty: "easy", reasoning: "Causation",
    question: "Which development most directly explains the admission of six states in 1889 and 1890, as shown on the map?",
    choices: [
      "Rapid settlement that followed railroad building on the northern Plains",
      "The gold rush that followed the discovery at Sutter's Mill in California",
      "The Kansas-Nebraska Act's opening of the Plains to popular sovereignty",
      "The end of Reconstruction and the return of Southern votes in Congress",
    ],
    why: [
      "Correct. The Northern Pacific (finished in 1883) and other lines carried farmers, ranchers, and miners into the Dakotas, Montana, Washington, Idaho, and Wyoming, whose populations grew fast enough for statehood in 1889 and 1890.",
      "The California gold rush began in 1848 and led to California's statehood in 1850, decades earlier.",
      "The Kansas-Nebraska Act of 1854 organized Kansas and Nebraska territories; it does not explain admissions in 1889 and 1890.",
      "Reconstruction ended in 1877 and concerned the South, not the admission of Western states.",
    ],
    answer: 0 },
  { id: "a6a-m011", skill: "u6", type: "mcq", set: "a6a-s04", topic: "6.2", difficulty: "moderate", reasoning: "Causation",
    question: "The admission of the states shown with the second shading came at the expense of which group most directly?",
    choices: [
      "The Lakota and other Plains nations, whose reservations were cut down",
      "The Cherokee and Creek, who had been removed from the Southeast",
      "Mexican landowners in California who lost their ranchos in court",
      "The Seminole of Florida, who fought removal in the 1830s and 1840s",
    ],
    why: [
      "Correct. As the northern Plains filled with settlers, Congress broke up the Great Sioux Reservation in 1889, the same year the Dakotas, Montana, and Washington became states.",
      "The Cherokee and Creek were moved to Indian Territory, in present-day Oklahoma, which the map shows as still a territory in 1896.",
      "Californios did lose land after 1848, but California is not one of the states admitted in 1889 and 1890.",
      "The Seminole Wars took place in Florida before the Civil War, far from these states.",
    ],
    answer: 0 },
  { id: "a6a-m012", skill: "u6", type: "mcq", set: "a6a-s04", topic: "6.2", difficulty: "difficult", reasoning: "Causation",
    question: "Which of the following best explains why Utah, settled in the 1840s, did not become a state until 1896?",
    choices: [
      "Congress refused until the Mormon church ended polygamy",
      "Utah had too few residents to qualify until the 1890s",
      "Mining strikes in Utah led Congress to delay admission",
      "Utah's leaders had sided with the Confederacy in 1861",
    ],
    why: [
      "Correct. Congress opposed Mormon plural marriage and the church's political power; after church president Wilford Woodruff's Manifesto of 1890 ended the practice, Utah was admitted on January 4, 1896.",
      "Utah had a large population of Mormon settlers from the 1850s on, more than several territories that became states earlier.",
      "Labor conflict in Western mines was real, but it was not the reason Congress delayed Utah's statehood.",
      "Utah Territory did not join the Confederacy; the conflict over Utah was about the Mormon church, not secession.",
    ],
    answer: 0 },

  { id: "a6a-m013", skill: "u6", type: "mcq", set: "a6a-s05", topic: "6.2", difficulty: "easy",
    question: "Powell's main point in the excerpt is that",
    choices: [
      "a 160-acre claim was far too small for ranching in the arid West",
      "the Plains could support small family farms almost everywhere",
      "railroads should get four square miles of land per mile of track",
      "cattle grazing should be banned on public land in the West",
    ],
    why: [
      "Correct. Powell says a quarter section, the 160 acres of a homestead, \"is of no value\" to a herdsman, and that pasture farms must be at least 2,560 acres.",
      "Powell argues the opposite: the grass is \"so scanty\" that small farms cannot support a family by grazing.",
      "Powell's \"four square miles\" is the smallest workable pasture farm, not a railroad land grant.",
      "Powell plans for grazing farms; he does not call for banning grazing.",
    ],
    answer: 0 },
  { id: "a6a-m014", skill: "u6", type: "mcq", set: "a6a-s05", topic: "6.2", difficulty: "easy", reasoning: "Causation",
    question: "The conditions Powell describes best help explain which development in the West in the 1870s and 1880s?",
    choices: [
      "The rise of large cattle ranches and open-range grazing",
      "The spread of cotton plantations into western Kansas",
      "The growth of sugar plantations on the northern Plains",
      "The decline of mining towns in Colorado and Nevada",
    ],
    why: [
      "Correct. Because dry grassland could feed only a few cattle per acre, ranchers grazed huge herds across open public range, and the cattle kingdom grew in the 1870s and 1880s.",
      "Cotton needs a long, warm, wet season; it did not spread into western Kansas.",
      "Sugar plantations were found in Louisiana and later Hawaii, not on the dry northern Plains.",
      "Powell writes about grazing land, and Colorado's mining towns were booming in these years, not declining.",
    ],
    answer: 0 },
  { id: "a6a-m015", skill: "u6", type: "mcq", set: "a6a-s05", topic: "6.2", difficulty: "difficult", reasoning: "Continuity and Change",
    question: "Which later federal law most directly addressed the problem Powell describes?",
    choices: [
      "The Enlarged Homestead Act of 1909, which doubled claims to 320 acres",
      "The Dawes Act of 1887, which divided reservations into family allotments",
      "The Morrill Act of 1862, which granted land to fund agricultural colleges",
      "The Interstate Commerce Act of 1887, which required fair railroad rates",
    ],
    why: [
      "Correct. Powell argues that 160 acres was too small for dry land; the Enlarged Homestead Act of 1909 answered that problem by allowing larger claims of 320 acres in arid areas.",
      "The Dawes Act also handed out land in family units, but its purpose was to break up tribal landholding, not to fit farm size to dry land.",
      "The Morrill Act came before Powell's report and funded colleges; it did not change the size of homestead claims.",
      "The Interstate Commerce Act regulated railroad rates; it had nothing to do with the size of farms.",
    ],
    answer: 0 },

  { id: "a6a-m016", skill: "u6", type: "mcq", set: "a6a-s06", topic: "6.2", difficulty: "easy", reasoning: "Comparison",
    question: "The passage most directly challenges which earlier interpretation?",
    choices: [
      "Frederick Jackson Turner's view of the frontier as a source of independence",
      "Josiah Strong's warning that cities were the danger spots of American life",
      "Alfred Thayer Mahan's argument that national power rests on a large navy",
      "W. E. B. Du Bois's argument that Black Americans must demand full rights",
    ],
    why: [
      "Correct. Turner's frontier thesis of 1893 described the West as the source of American individualism and democracy; the passage calls the West \"less a frontier of independence than a colony.\"",
      "Strong's book Our Country (1885) concerned cities and immigrants, not the economics of the West.",
      "Mahan's The Influence of Sea Power upon History (1890) dealt with naval strategy and overseas expansion.",
      "Du Bois wrote about civil rights and racial equality, not about the settlement of the West.",
    ],
    answer: 0 },
  { id: "a6a-m017", skill: "u6", type: "mcq", set: "a6a-s06", topic: "6.2", difficulty: "moderate",
    question: "Which of the following would best support the passage's argument?",
    choices: [
      "Eastern and British investors owned many large Western cattle companies.",
      "Many homesteaders built sod houses because the Plains had few trees.",
      "Mormon settlers dug irrigation canals in Utah through their own labor.",
      "Cowboys of many backgrounds drove Texas cattle north to Kansas towns.",
    ],
    why: [
      "Correct. Eastern and British capital poured into ranching in the early 1880s, an example of the outside investment the passage says shaped the West.",
      "Sod houses are a true detail of Plains life, but they show adaptation to the land, not dependence on outside capital or federal power.",
      "Mormon irrigation was a cooperative local effort, which would challenge rather than support the passage.",
      "The cattle drives were real, but on their own they do not show who owned or financed Western enterprise.",
    ],
    answer: 0 },
  { id: "a6a-m018", skill: "u6", type: "mcq", set: "a6a-s06", topic: "6.2", difficulty: "moderate", reasoning: "Causation",
    question: "The conditions the passage describes in Western mining towns contributed most directly to",
    choices: [
      "violent strikes by miners, as at Coeur d'Alene, Idaho, in 1892",
      "a federal minimum wage for miners passed in the 1880s",
      "a steady rise in independent prospectors' share of output",
      "mine owners' support for the Chinese Exclusion Act of 1882",
    ],
    why: [
      "Correct. Wage miners who worked for distant owners organized and struck; at Coeur d'Alene in 1892 a strike against wage cuts turned violent and federal troops were sent in.",
      "There was no federal minimum wage until the Fair Labor Standards Act of 1938.",
      "As mining moved to deep shafts owned by corporations, the share of lone prospectors fell, not rose.",
      "Western workingmen, not mine owners, led the push for Chinese exclusion; owners generally wanted cheap labor.",
    ],
    answer: 0 },

  // ---------- 6.3 ----------
  { id: "a6a-m019", skill: "u6", type: "mcq", set: "a6a-s07", topic: "6.3", difficulty: "easy", reasoning: "Causation",
    question: "The conflicts shown on the map were most directly caused by",
    choices: [
      "settlers, miners, and railroads moving onto Native lands",
      "Mexican efforts to retake land lost in the war of 1846",
      "Confederate raids into the Western territories",
      "British aid to Native nations from bases in Canada",
    ],
    why: [
      "Correct. After the Civil War, miners, ranchers, homesteaders, and railroads pushed onto lands promised to Native nations, and the army fought those who resisted.",
      "Mexico did not try to retake the Southwest after the Treaty of Guadalupe Hidalgo (1848).",
      "Confederate activity in the West ended in 1865; most conflicts on the map came later.",
      "British aid to Native nations was an issue before the War of 1812, not in this period.",
    ],
    answer: 0 },
  { id: "a6a-m020", skill: "u6", type: "mcq", set: "a6a-s07", topic: "6.3", difficulty: "moderate", reasoning: "Causation",
    question: "The battle shown in Montana in 1876 followed most directly from",
    choices: [
      "the gold rush into the Black Hills after 1874",
      "the passage of the Dawes Severalty Act",
      "the completion of the Northern Pacific line",
      "the spread of the Ghost Dance among the Lakota",
    ],
    why: [
      "Correct. After Custer's 1874 expedition reported gold in the Black Hills, which the 1868 treaty had reserved to the Lakota, miners rushed in, the government ordered the Lakota onto agencies, and war followed at the Little Bighorn in June 1876.",
      "The Dawes Act was passed in 1887, eleven years later.",
      "The Northern Pacific was completed in 1883, after the battle.",
      "The Ghost Dance spread in 1889 and 1890 and led to Wounded Knee, not the Little Bighorn.",
    ],
    answer: 0 },
  { id: "a6a-m021", skill: "u6", type: "mcq", set: "a6a-s07", topic: "6.3", difficulty: "moderate",
    question: "The killing of Lakota people at Wounded Knee in 1890 followed federal efforts to suppress",
    choices: [
      "the Ghost Dance, a religious movement that promised renewal",
      "a Lakota alliance with Mexican ranchers along the border",
      "the Nez Perce flight toward Canada led by Chief Joseph",
      "a Lakota campaign to block the Union Pacific Railroad",
    ],
    why: [
      "Correct. The Ghost Dance, begun by the Paiute prophet Wovoka, promised the return of the buffalo and the old ways; alarmed agents called in the army, and soldiers killed some 250 or more Lakota at Wounded Knee in December 1890.",
      "No such alliance existed; the Lakota lived on the northern Plains, far from Mexico.",
      "The Nez Perce flight ended with their surrender at Bear Paw in 1877, thirteen years earlier.",
      "Plains nations fought railroad building in the 1860s; that is not what led to Wounded Knee.",
    ],
    answer: 0 },
  { id: "a6a-m022", skill: "u6", type: "mcq", set: "a6a-s07", topic: "6.3", difficulty: "difficult", reasoning: "Continuity and Change",
    question: "Taken together, the conflicts on the map are best understood as a continuation of which earlier pattern?",
    choices: [
      "Native resistance to U.S. expansion, as in Tecumseh's confederacy",
      "Spanish missions' efforts to convert Native peoples to Catholicism",
      "Federal protection of Native land from settlers under Indian removal",
      "Native alliances with the Union army against the Confederacy",
    ],
    why: [
      "Correct. Like Tecumseh's confederacy before the War of 1812 and the Seminole wars of the 1830s, the Western wars of 1864 to 1890 were Native efforts to hold land against American expansion.",
      "Spanish missions in California and the Southwest were about conversion and labor, not the military conflicts shown here.",
      "The Indian Removal Act of 1830 forced Native nations off their land; it did not protect them from settlers.",
      "Some Native people did serve the Union, but the wars on the map were fought against the U.S. army, not with it.",
    ],
    answer: 0 },

  { id: "a6a-m023", skill: "u6", type: "mcq", set: "a6a-s08", topic: "6.3", difficulty: "easy",
    question: "Hayes's main argument in the excerpt is that",
    choices: [
      "U.S. broken promises caused many wars with Native peoples",
      "Native peoples should be moved east of the Mississippi River",
      "the army should be enlarged to defeat the remaining Plains nations",
      "Native nations should be granted independence from the United States",
    ],
    why: [
      "Correct. Hayes writes that \"many, if not most, of our Indian wars have had their origin in broken promises and acts of injustice upon our part.\"",
      "Federal policy had moved Native peoples west, not east, and Hayes proposes no move.",
      "Hayes speaks of preserving peace \"by a just and humane policy,\" not of a larger army.",
      "Hayes speaks of Native \"advance\" in civilization under U.S. guidance, not independence.",
    ],
    answer: 0 },
  { id: "a6a-m024", skill: "u6", type: "mcq", set: "a6a-s08", topic: "6.3", difficulty: "moderate",
    question: "Which person in the late 1870s and 1880s would most likely have agreed with Hayes's view?",
    choices: [
      "Helen Hunt Jackson, author of A Century of Dishonor",
      "George Armstrong Custer, who led the 1874 Black Hills expedition",
      "John Chivington, who commanded the attack at Sand Creek",
      "Charles Goodnight, who drove cattle onto the southern Plains",
    ],
    why: [
      "Correct. Jackson's A Century of Dishonor (1881) documented broken treaties and federal injustice toward Native nations, the same charge Hayes makes.",
      "Custer's expedition confirmed gold in the Black Hills, which led to the breaking of the 1868 treaty; he died at the Little Bighorn in 1876.",
      "Chivington led the 1864 massacre of Cheyenne and Arapaho people at Sand Creek, the kind of injustice Hayes criticizes.",
      "Goodnight was a Texas cattleman whose ranching expanded onto lands taken from the Comanche and other nations.",
    ],
    answer: 0 },
  { id: "a6a-m025", skill: "u6", type: "mcq", set: "a6a-s08", topic: "6.3", difficulty: "moderate", reasoning: "Causation",
    question: "Reformers who shared Hayes's concern most directly backed which federal policy in the 1880s?",
    choices: [
      "Dividing reservation land into family allotments",
      "Restoring treaty making with Native nations",
      "Moving all Native nations to Indian Territory",
      "Returning the Black Hills to the Lakota",
    ],
    why: [
      "Correct. Reform groups such as the Indian Rights Association argued that private farms and citizenship would protect Native people, and they backed the Dawes Act of 1887.",
      "Congress ended treaty making with Native nations in 1871, and reformers did not campaign to restore it.",
      "Concentrating all nations in Indian Territory had been proposed earlier, but reformers of the 1880s pushed allotment instead.",
      "The Black Hills were not returned; the Supreme Court ruled in 1980 that the Lakota were owed payment for them.",
    ],
    answer: 0 },

  { id: "a6a-m026", skill: "u6", type: "mcq", set: "a6a-s09", topic: "6.3", difficulty: "easy",
    question: "Arthur expected the policy he recommends to lead Native peoples to",
    choices: [
      "give up tribal ties and become individual farmers",
      "return to buffalo hunting on protected lands",
      "move to Eastern cities to work in factories",
      "form a self-governing Native state in the West",
    ],
    why: [
      "Correct. Arthur says that with land of their own, Native people \"would be persuaded to sever their tribal relations and to engage at once in agricultural pursuits.\"",
      "Arthur says their \"hunting days are over.\"",
      "Arthur's plan is about farming the land, not factory work.",
      "Arthur wants individual landowners, not a separate Native government.",
    ],
    answer: 0 },
  { id: "a6a-m027", skill: "u6", type: "mcq", set: "a6a-s09", topic: "6.3", difficulty: "easy",
    question: "Which law put into effect the kind of measure Arthur recommends?",
    choices: [
      "The Dawes Severalty Act of 1887",
      "The Indian Removal Act of 1830",
      "The Indian Reorganization Act of 1934",
      "The Indian Citizenship Act of 1924",
    ],
    why: [
      "Correct. The Dawes Act (1887) divided reservation land into allotments for individual families, held in trust for 25 years, close to what Arthur proposed in 1881.",
      "The Indian Removal Act moved Southeastern nations west; it did not divide land among individuals.",
      "The Indian Reorganization Act ended allotment in 1934; it reversed the policy Arthur recommends.",
      "The Indian Citizenship Act made all Native people born in the United States citizens; it did not allot land.",
    ],
    answer: 0 },
  { id: "a6a-m028", skill: "u6", type: "mcq", set: "a6a-s09", topic: "6.3", difficulty: "difficult", reasoning: "Causation",
    question: "Which of the following was a major effect of the policy Arthur recommends?",
    choices: [
      "Native nations lost about two thirds of their land by 1934.",
      "Most Native families became prosperous commercial farmers.",
      "Tribal governments gained more control over reservation land.",
      "All Native peoples gained full citizenship and voting rights in 1887.",
    ],
    why: [
      "Correct. After the Dawes Act, \"surplus\" land was sold to settlers and many allotments were later lost; Native landholding fell from about 138 million acres in 1887 to about 48 million by 1934.",
      "Many allotments were poor land, families lacked tools and credit, and few became successful commercial farmers.",
      "Allotment was meant to break tribal control of land; tribal governments lost power.",
      "The Dawes Act made citizens only of those who took allotments or left their tribes; citizenship for all came in 1924, and many states still blocked voting.",
    ],
    answer: 0 },

  // ---------- 6.4 ----------
  { id: "a6a-m029", skill: "u6", type: "mcq", set: "a6a-s10", topic: "6.4", difficulty: "easy",
    question: "In the excerpt, the Court argues that",
    choices: [
      "formerly enslaved people no longer needed special protection from federal law",
      "the Thirteenth Amendment banned all racial discrimination in public places",
      "states must provide equal public schools for Black and white children",
      "Congress could punish private businesses that refused service by race",
    ],
    why: [
      "Correct. Bradley writes that a freed person must at some point cease \"to be the special favorite of the laws\" and be protected only by \"the ordinary modes\" used for others.",
      "The Court says the opposite: discrimination in inns and public conveyances was not a \"badge of slavery\" under the Thirteenth Amendment.",
      "The case concerned inns, theaters, and railroads, not schools, and it did not order equal schools.",
      "The Court struck down a law that did punish such businesses, ruling that Congress lacked that power.",
    ],
    answer: 0 },
  { id: "a6a-m030", skill: "u6", type: "mcq", set: "a6a-s10", topic: "6.4", difficulty: "easy",
    question: "The decision from which the excerpt is taken struck down which law?",
    choices: [
      "The Civil Rights Act of 1875",
      "The Civil Rights Act of 1866",
      "The Ku Klux Klan Act of 1871",
      "The Freedmen's Bureau Act of 1865",
    ],
    why: [
      "Correct. The Civil Rights Act of 1875 banned racial discrimination in inns, public conveyances, and theaters; in 1883 the Court ruled that the Fourteenth Amendment reached only state action, not private businesses.",
      "The Civil Rights Act of 1866 defined citizenship and protected contract and property rights; this decision did not strike it down.",
      "The Ku Klux Klan Act targeted violent conspiracies; this decision dealt with public accommodations.",
      "The Freedmen's Bureau Act set up a relief agency; the bureau had largely closed by 1872, and this case did not concern it.",
    ],
    answer: 0 },
  { id: "a6a-m031", skill: "u6", type: "mcq", set: "a6a-s10", topic: "6.4", difficulty: "moderate", reasoning: "Causation",
    question: "The reasoning in the excerpt contributed most directly to",
    choices: [
      "the spread of segregation in Southern railroads, hotels, and theaters",
      "the ratification of the Fourteenth Amendment by Southern states",
      "the end of sharecropping and crop liens in the cotton South",
      "the founding of the Freedmen's Bureau to aid freed people",
    ],
    why: [
      "Correct. By ruling that Congress could not bar private discrimination, the Court left Black Southerners without federal protection, and segregation in public places spread in the 1880s and 1890s.",
      "The Fourteenth Amendment was ratified in 1868, fifteen years before this ruling.",
      "Sharecropping and the crop lien system lasted well into the twentieth century.",
      "The Freedmen's Bureau was founded in 1865, long before this decision.",
    ],
    answer: 0 },
  { id: "a6a-m032", skill: "u6", type: "mcq", set: "a6a-s10", topic: "6.4", difficulty: "difficult", reasoning: "Continuity and Change",
    question: "Which later development most directly reversed the effect of this decision?",
    choices: [
      "The Civil Rights Act of 1964's ban on discrimination in hotels and restaurants",
      "Brown v. Board of Education's ruling against segregated public schools",
      "The Voting Rights Act of 1965's suspension of literacy tests for voters",
      "The Twenty-fourth Amendment's ban on poll taxes in federal elections",
    ],
    why: [
      "Correct. Title II of the Civil Rights Act of 1964 banned discrimination in hotels, restaurants, and theaters, the same private businesses the 1883 decision had placed beyond Congress's reach; Congress based it on its power over interstate commerce.",
      "Brown (1954) overturned Plessy's \"separate but equal\" in public schools, which are run by states, not private businesses.",
      "The Voting Rights Act dealt with voting, not public accommodations.",
      "The Twenty-fourth Amendment (1964) dealt with voting, not service in private businesses.",
    ],
    answer: 0 },

  { id: "a6a-m033", skill: "u6", type: "mcq", set: "a6a-s11", topic: "6.4", difficulty: "easy",
    question: "The Court's ruling in the excerpt allowed Mississippi to keep",
    choices: [
      "poll taxes and literacy tests that kept most Black men from voting",
      "laws that required separate railroad cars for Black passengers",
      "a convict-leasing system that rented prisoners to private firms",
      "laws that barred Black citizens from buying farmland",
    ],
    why: [
      "Correct. The Court upheld Mississippi's 1890 voting rules because they did not name race, even though the state's own court admitted they aimed to obstruct Black suffrage.",
      "Separate car laws were upheld in Plessy v. Ferguson (1896), a Louisiana case.",
      "Convict leasing was a real Southern practice, but it was not the subject of this case.",
      "The case concerned voting and jury service, not land ownership.",
    ],
    answer: 0 },
  { id: "a6a-m034", skill: "u6", type: "mcq", set: "a6a-s11", topic: "6.4", difficulty: "moderate",
    question: "The Court's reasoning in the excerpt rested mainly on the claim that",
    choices: [
      "the laws did not name race, so they did not deny equal protection",
      "the Fifteenth Amendment applied only to federal elections",
      "states could set aside the Fourteenth Amendment in voting matters",
      "federal courts had no power to hear appeals from state courts",
    ],
    why: [
      "Correct. McKenna writes that the laws \"reach weak and vicious white men as well as weak and vicious black men\" and that no discriminating administration was shown, so equal protection was not denied.",
      "The Court did not say this; the Fifteenth Amendment covers all elections.",
      "The Court applied the Fourteenth Amendment; it did not say states could ignore it.",
      "The Supreme Court heard and decided the case, so it plainly claimed that power.",
    ],
    answer: 0 },
  { id: "a6a-m035", skill: "u6", type: "mcq", set: "a6a-s11", topic: "6.4", difficulty: "difficult", reasoning: "Continuity and Change",
    question: "Which development most directly ended the voting rules upheld in the excerpt?",
    choices: [
      "The Voting Rights Act of 1965, which suspended literacy tests",
      "The Civil Rights Act of 1957, which set up a civil rights commission",
      "Brown v. Board of Education, which ended school segregation by law",
      "The Twenty-sixth Amendment, which lowered the voting age to 18",
    ],
    why: [
      "Correct. The Voting Rights Act of 1965 suspended literacy tests in states such as Mississippi and sent federal examiners to register voters; Black registration in Mississippi rose sharply.",
      "The 1957 act created the Civil Rights Commission and a Justice Department division, but it did little to end literacy tests.",
      "Brown (1954) concerned schools, not voting.",
      "The Twenty-sixth Amendment (1971) lowered the voting age; it did not address literacy tests or poll taxes.",
    ],
    answer: 0 },
  // ITEMS
];

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
  // ITEMS
];

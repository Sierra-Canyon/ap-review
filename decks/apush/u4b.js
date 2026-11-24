// AP U.S. History review, Unit 4 (4.8 to 4.14): Jackson and federal power, American culture, the Second Great Awakening, reform, African Americans, and the South, 1800 to 1848.
import { bars, lines } from "../../plot.js";
import { maps } from "./maps.js";

const MAPCITE = "Map drawn for this review from Natural Earth land outlines and U.S. Census Bureau state boundaries (public domain). Places and dates checked against ";

export const sets = {
  "a4b-s01": {
    id: "a4b-s01", name: "The downfall of Mother Bank, 1833", intro: "Use the image below to answer the questions that follow.", label: "Image",
    sources: [{ title: "Image", blocks: [
      { img: "images/apush/u4-downfall-of-mother-bank.jpg", alt: "A lithograph cartoon. At right, President Andrew Jackson, tall and white haired, stands beside a table and holds up a long paper headed \"Order for the removal of the Public Money deposited in the United States Bank.\" Behind him the backwoods character Major Jack Downing waves his hat and cheers. At left the marble columns of the Bank of the United States crack and topple. Men in top hats, among them the bank's backers and newspaper editors, run away or lie sprawled on the floor among loose papers and bank notes. The title is printed along the bottom.", caption: "A pro-Jackson cartoon published in New York in 1833, after Jackson ordered federal deposits taken out of the Second Bank of the United States and placed in state banks.", credit: "Library of Congress, Prints and Photographs Division, LC-DIG-ds-14737", license: "public domain, Library of Congress (no known restrictions on publication)", url: "https://www.loc.gov/item/2008661758/" },
      { cite: "Henry R. Robinson, publisher, \"The downfall of Mother Bank,\" lithograph, New York, 1833. Library of Congress.", url: "https://www.loc.gov/item/2008661758/", kind: "primary" },
    ] }],
  },
  "a4b-s03": {
    id: "a4b-s03", name: "Jackson's proclamation on nullification, 1832", intro: "Use the excerpt below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "I consider, then, the power to annul a law of the United States, assumed by one State, incompatible with the existence of the Union, contradicted expressly by the letter of the Constitution, unauthorized by its spirit, inconsistent with every principle on which It was founded, and destructive of the great object for which it was formed. ... The Constitution of the United States, then, forms a government, not a league, and whether it be formed by compact between the States, or in any other manner, its character is the same. ... disunion, by armed force, is TREASON." },
      { cite: "Andrew Jackson, Proclamation Regarding Nullification, December 10, 1832.", url: "https://avalon.law.yale.edu/19th_century/jack01.asp", kind: "primary" },
    ] }],
  },
  "a4b-s04": {
    id: "a4b-s04", name: "Worcester v. Georgia, 1832", intro: "Use the excerpt below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "The Cherokee nation, then, is a distinct community, occupying its own territory, with boundaries accurately described, in which the laws of Georgia can have no force, and which the citizens of Georgia have no right to enter but with the assent of the Cherokees themselves, or in conformity with treaties and with the acts of Congress. The whole intercourse between the United States and this nation is, by our Constitution and laws, vested in the Government of the United States. The act of the State of Georgia under which the plaintiff in error was prosecuted is consequently void, and the judgment a nullity." },
      { cite: "Chief Justice John Marshall, opinion of the Court, Worcester v. Georgia, 31 U.S. 515 (1832).", url: "https://supreme.justia.com/cases/federal/us/31/515/", kind: "primary" },
    ] }],
  },
  "a4b-s07": {
    id: "a4b-s07", name: "Van Buren on the Panic of 1837", intro: "Use the excerpt below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "The history of trade in the United States for the last three or four years affords the most convincing evidence that our present condition is chiefly to be attributed to overaction in all the departments of business ... stimulated to its destructive consequences by excessive issues of bank paper and by other facilities for the acquisition and enlargement of credit. ... Those who look to the action of this Government for specific aid to the citizen to relieve embarrassments arising from losses by revulsion in commerce and credit lose sight of the ends for which it was created and the powers with which it is clothed. ... All communities are apt to look to government for too much. Even in our own country, where its powers and duties are so strictly limited, we are prone to do so, especially at periods of sudden embarrassment and distress." },
      { cite: "Martin Van Buren, Special Session Message to Congress, September 4, 1837.", url: "https://www.presidency.ucsb.edu/documents/special-session-message-7", kind: "primary" },
    ] }],
  },
  "a4b-s08": {
    id: "a4b-s08", name: "Emerson's \"American Scholar,\" 1837", intro: "Use the excerpt below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "Our day of dependence, our long apprenticeship to the learning of other lands, draws to a close. The millions, that around us are rushing into life, cannot always be fed on the sere remains of foreign harvests. Events, actions arise, that must be sung, that will sing themselves. ... We have listened too long to the courtly muses of Europe. The spirit of the American freeman is already suspected to be timid, imitative, tame. ... We will walk on our own feet; we will work with our own hands; we will speak our own minds." },
      { cite: "Ralph Waldo Emerson, An Oration, Delivered before the Phi Beta Kappa Society, at Cambridge, August 31, 1837 (\"The American Scholar\"), 2nd ed., Boston: James Munroe and Company, 1838. Internet Archive.", url: "https://archive.org/details/orationphibeta00emerrich", kind: "primary" },
    ] }],
  },
  "a4b-s18": {
    id: "a4b-s18", name: "Jackson on abolitionist mailings, 1835", intro: "Use the excerpt below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "In connection with these provisions in relation to the Post-Office Department, I must also invite your attention to the painful excitement produced in the South by attempts to circulate through the mails inflammatory appeals addressed to the passions of the slaves, in prints and in various sorts of publications, calculated to stimulate them to insurrection and to produce all the horrors of a servile war. ... I would therefore call the special attention of Congress to the subject, and respectfully suggest the propriety of passing such a law as will prohibit, under severe penalties, the circulation in the Southern States, through the mail, of incendiary publications intended to instigate the slaves to insurrection." },
      { cite: "Andrew Jackson, Seventh Annual Message to Congress, December 7, 1835.", url: "https://www.presidency.ucsb.edu/documents/seventh-annual-message-2", kind: "primary" },
    ] }],
  },
};

export default [
];

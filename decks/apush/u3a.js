// AP U.S. History review, Unit 3 (3.1 to 3.7): the Seven Years' War, the imperial crisis, the ideas and war of independence, revolutionary ideals, and the Articles.
import { maps } from "./maps.js";

const PRACTICE = "Practice passage written for this review, summarizing an interpretation held by many historians.";
const LOC = "public domain, Library of Congress (no known restrictions on publication)";
const MAPCITE = (refs) => "Map drawn for this review from Natural Earth land outlines and U.S. Census Bureau state boundaries (public domain). Places and dates checked against " + refs + ".";
const q = (id, set, topic, difficulty, reasoning, question, choices, why) => {
  const it = { id, skill: "u3", type: "mcq", set, topic, difficulty };
  if (reasoning) it.reasoning = reasoning;
  return Object.assign(it, { question, choices, why, answer: 0 });
};

export const sets = {
  "a3a-s01": {
    id: "a3a-s01", name: "The Treaty of Paris, 1783", intro: "Use the excerpt below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "Article 1: His Brittanic Majesty acknowledges the said United States, viz., New Hampshire, Massachusetts Bay, Rhode Island and Providence Plantations, Connecticut, New York, New Jersey, Pennsylvania, Maryland, Virginia, North Carolina, South Carolina and Georgia, to be free sovereign and independent states, ... and for himself, his heirs, and successors, relinquishes all claims to the government, propriety, and territorial rights of the same and every part thereof." },
      { p: "Article 5: It is agreed that Congress shall earnestly recommend it to the legislatures of the respective states to provide for the restitution of all estates, rights, and properties, which have been confiscated belonging to real British subjects ..." },
      { p: "Article 8: The navigation of the river Mississippi, from its source to the ocean, shall forever remain free and open to the subjects of Great Britain and the citizens of the United States." },
      { cite: "The Definitive Treaty of Peace between Great Britain and the United States (Treaty of Paris), signed September 3, 1783, Articles 1, 5, and 8, from Hunter Miller, ed., Treaties and Other International Acts of the United States of America, vol. 2 (Government Printing Office, 1931). Avalon Project, Yale Law School.", url: "https://avalon.law.yale.edu/18th_century/paris.asp", kind: "primary" },
    ] }],
  },
  "a3a-s02": {
    id: "a3a-s02", name: "The treaty with the Delaware nation, 1778", intro: "Use the excerpt below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "Whereas the enemies of the United States have endeavored, by every artifice in their power, to possess the Indians in general with an opinion, that it is the design of the States aforesaid, to extirpate the Indians and take possession of their country to obviate such false suggestion, the United States do engage to guarantee to the aforesaid nation of Delawares, and their heirs, all their territorial rights in the fullest and most ample manner, ... as long as they the said Delaware nation shall abide by, and hold fast the chain of friendship now entered into. And it is further agreed ... to invite any other tribes who have been friends to the interest of the United States, to join the present confederation, and to form a state whereof the Delaware nation shall be the head, and have a representation in Congress ..." },
      { cite: "Treaty with the Delawares, signed at Fort Pitt by commissioners of the United States and leaders of the Delaware (Lenape) nation, September 17, 1778, Article VI. Avalon Project, Yale Law School.", url: "https://avalon.law.yale.edu/18th_century/del1778.asp", kind: "primary" },
    ] }],
  },
  "a3a-s03": {
    id: "a3a-s03", name: "A half century of struggle over power, 1754 to 1800", intro: "Use the passage below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "Many historians see the half century after 1754 as a single story about power in North America. The Seven Years' War made Britain the master of eastern North America, but victory brought debt and a vast western territory that London tried to govern more tightly. Colonists who had expected to share in the spoils resented new taxes, troops, and limits on western settlement, and their resistance grew into a war for independence. Independence did not settle the older questions. The new United States inherited the same contest over Native lands west of the Appalachians, the same arguments over taxes and central authority, and the same rivalry with European powers along its borders. In this view, the Revolution changed who governed but not the problems that governing required." },
      { cite: PRACTICE, kind: "practice" },
    ] }],
  },
  "a3a-s04": {
    id: "a3a-s04", name: "Places of colonial protest, 1765 to 1775", intro: "Use the map below to answer the questions that follow.", label: "Map",
    sources: [{ title: "Map", blocks: [
      { svg: maps["u3a-resistance"], caption: "Some places of colonial protest and resistance, 1765 to 1775 (present-day state lines shown for reference)" },
      { cite: MAPCITE("Robert Middlekauff, The Glorious Cause: The American Revolution, 1763 to 1789, and Encyclopaedia Britannica's entries for each event"), kind: "map" },
    ] }],
  },
  "a3a-s05": {
    id: "a3a-s05", name: "A council with Colonel Bouquet, 1764", intro: "Use the image below to answer the questions that follow.", label: "Image",
    sources: [{ title: "Image", blocks: [
      { img: "images/apush/u3-indians-giving-a-talk-to-bouquet.jpg",
        alt: "A hand-colored engraving of a meeting under a bark-roofed shelter at the edge of a forest. On the right, a Native leader with a feathered scalp lock, a red blanket over one shoulder, and a string of wampum in his hand raises his arm as he speaks. Behind him crowd many Native men, and one sits on the ground beside a small fire in the center. On the left, British officers in red and blue coats stand and listen; Colonel Henry Bouquet sits with his hand on his chest, and an officer kneels to write down the speech on paper. Trees and a tent show beyond the shelter.",
        caption: "\"The Indians giving a talk to Colonel Bouquet in a conference at a council fire, near his camp on the banks of Muskingum in North America in Oct. 1764,\" an engraving made for William Smith's 1765 to 1766 account of Colonel Henry Bouquet's expedition into the Ohio Country, where in October 1764 he met Delaware, Shawnee, and Seneca leaders to end their part in Pontiac's War.",
        credit: "Library of Congress, Prints and Photographs Division, LC-DIG-pga-10838", license: LOC, url: "https://www.loc.gov/item/2003688819/" },
      { cite: "Charles Grignion after a drawing by Benjamin West, The Indians giving a talk to Colonel Bouquet in a conference at a council fire, near his camp on the banks of Muskingum in North America in Oct. 1764, hand-colored engraving made as a plate for William Smith's account of Bouquet's 1764 expedition (Philadelphia, 1765; London, 1766). Library of Congress.", url: "https://www.loc.gov/item/2003688819/", kind: "primary" },
    ] }],
  },
  "a3a-s06": {
    id: "a3a-s06", name: "Battles of the French and Indian War, 1754 to 1760", intro: "Use the map below to answer the questions that follow.", label: "Map",
    sources: [{ title: "Map", blocks: [
      { svg: maps["u3a-fiwar"], caption: "Major battles and sieges of the French and Indian War in North America, 1754 to 1760, with the year and the side that won (present-day state lines shown for reference)" },
      { cite: MAPCITE("Fred Anderson, Crucible of War: The Seven Years' War and the Fate of Empire in British North America, 1754 to 1766, and Encyclopaedia Britannica, \"French and Indian War\" and its entries for each battle"), kind: "map" },
    ] }],
  },
  "a3a-s07": {
    id: "a3a-s07", name: "The Albany Plan of Union, 1754", intro: "Use the excerpt below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "It is proposed that humble application be made for an act of Parliament of Great Britain, by virtue of which one general government may be formed in America, including all the said colonies, within and under which government each colony may retain its present constitution, except in the particulars wherein a change may be directed by the said act, as hereafter follows. ..." },
      { p: "That the President-General, with the advice of the Grand Council, hold or direct all Indian treaties, in which the general interest of the Colonies may be concerned; and make peace or declare war with Indian nations. ..." },
      { p: "That they raise and pay soldiers and build forts for the defence of any of the Colonies, and equip vessels of force to guard the coasts and protect the trade on the ocean, lakes, or great rivers; but they shall not impress men in any Colony, without the consent of the Legislature." },
      { cite: "Albany Plan of Union, proposed by the Albany Congress, July 10, 1754. Avalon Project, Yale Law School.", url: "https://avalon.law.yale.edu/18th_century/albany.asp", kind: "primary" },
    ] }],
  },
  "a3a-s08": {
    id: "a3a-s08", name: "The Seven Years' War as a global war", intro: "Use the passage below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "Historians increasingly describe the Seven Years' War as the first truly global war. Fighting that began in 1754 over the forks of the Ohio spread to Europe, the Caribbean, West Africa, and India. Britain's victory came at an enormous price: its national debt nearly doubled, and keeping an army in North America after 1763 added new yearly costs. British leaders concluded that the colonists, the war's chief beneficiaries, should help pay. Colonists, many of whom had served in the war and believed their contributions had been undervalued, drew a different lesson: that they had earned the rights of full partners in the empire. The war that made the British Empire supreme in North America also set its members on a collision course." },
      { cite: PRACTICE, kind: "practice" },
    ] }],
  },
  "a3a-s09": {
    id: "a3a-s09", name: "The Declaratory Act, 1766", intro: "Use the excerpt below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "Whereas several of the houses of representatives in his Majesty's colonies and plantations in America, have of late against law, claimed to themselves, or to the general assemblies of the same, the sole and exclusive right of imposing duties and taxes upon his majesty's subjects in the said colonies and plantations; and have in pursuance of such claim, passed certain votes, resolutions, and orders derogatory to the legislative authority of parliament, ... be it declared ... That the said colonies and plantations in America have been, are, and of right ought to be, subordinate unto, and dependent upon the imperial crown and parliament of Great Britain; and that the King's majesty, ... in parliament assembled, ... of right ought to have, full power and authority to make laws and statutes of sufficient force and validity to bind the colonies and people of America, subjects of the crown of Great Britain, in all cases whatsoever ..." },
      { cite: "Parliament of Great Britain, An Act for the Better Securing the Dependency of His Majesty's Dominions in America upon the Crown and Parliament of Great Britain (the Declaratory Act), March 18, 1766. Avalon Project, Yale Law School.", url: "https://avalon.law.yale.edu/18th_century/declaratory_act_1766.asp", kind: "primary" },
    ] }],
  },
  "a3a-s10": {
    id: "a3a-s10", name: "The Boston Port Act, 1774", intro: "Use the excerpt below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "WHEREAS dangerous commotions and insurrections have been fomented and raised in the town of Boston, in the province of Massachusets Bay, in New England, by divers ill-affected persons, to the subversion of his Majestys government, and to the utter destruction of the publick peace, and good order of the said town; in which commotions and insurrections certain valuable cargoes of teas, being the property of the East India Company, and on board certain vessels lying within the bay or harbour of Boston, were seized and destroyed: And whereas, in the present condition of the said town and harbour, the commerce of his Majestys subjects cannot be safely carried on there, nor the customs payable to his Majesty duly collected; and it is therefore expedient that the officers of his Majestys customs should be forthwith removed from the said town ..." },
      { cite: "Parliament of Great Britain, the Boston Port Act, March 31, 1774, preamble. Avalon Project, Yale Law School.", url: "https://avalon.law.yale.edu/18th_century/boston_port_act.asp", kind: "primary" },
    ] }],
  },
  "a3a-s11": {
    id: "a3a-s11", name: "The Able Doctor, 1774", intro: "Use the image below to answer the questions that follow.", label: "Image",
    sources: [{ title: "Image", blocks: [
      { img: "images/apush/u3-the-able-doctor.jpg",
        alt: "An engraved cartoon. In the center, a half-dressed woman in a feathered Native headdress, standing for America, lies on the ground. A man in a wig (Lord North, the prime minister) forces a teapot spout into her mouth, and she spits the tea back out; a paper sticks out of his pocket. A judge in robes (Lord Mansfield) pins her arms, and a kneeling man (Lord Sandwich) holds her ankles and peeks under her skirt. At right a man in a kilt holds a sword marked for military law. Two men at left in French and Spanish dress watch and point. Behind them a woman with a shield (Britannia) turns away and covers her eyes. Ships and the words \"Boston cannonaded\" fill the background.",
        caption: "\"The able doctor, or, America swallowing the bitter draught,\" a British cartoon published in the London Magazine in May 1774, soon after Parliament passed the Boston Port Act to punish Boston for the Tea Party; Paul Revere copied it for a Boston magazine the next month.",
        credit: "Library of Congress, Prints and Photographs Division, LC-DIG-ppmsca-19467", license: LOC, url: "https://www.loc.gov/item/97514782/" },
      { cite: "Unsigned engraving, The able doctor, or, America swallowing the bitter draught, London Magazine, May 1, 1774. Library of Congress.", url: "https://www.loc.gov/item/97514782/", kind: "primary" },
    ] }],
  },
  "a3a-s12": {
    id: "a3a-s12", name: "The patriotic ladies of Edenton, 1775", intro: "Use the image below to answer the questions that follow.", label: "Image",
    sources: [{ title: "Image", blocks: [
      { img: "images/apush/u3-patriotic-ladies-edenton.jpg",
        alt: "A mezzotint of a crowded room. At a table, a stern, plain woman with a gavel presides while fashionably dressed women with towering hairstyles sign a long written pledge. At left, women empty tea canisters into a man's hat. Behind the table, a man leans in to kiss and flirt with one of the signers, and other men look on. An African woman servant holds an inkstand. Under the table, a neglected small child sits on the floor beside a dog that is urinating on a tea box. A tall window with curtains is in the back.",
        caption: "\"A society of patriotic ladies, at Edenton in North Carolina,\" a British satirical print from March 1775 mocking the October 1774 pledge by fifty-one women in Edenton, North Carolina, to boycott British tea and cloth in support of the colonial nonimportation movement.",
        credit: "Library of Congress, Prints and Photographs Division, LC-DIG-ppmsca-19468", license: LOC, url: "https://www.loc.gov/item/96511606/" },
      { cite: "Mezzotint attributed to Philip Dawe, A society of patriotic ladies, at Edenton in North Carolina, published by Robert Sayer and John Bennett, London, March 25, 1775. Library of Congress.", url: "https://www.loc.gov/item/96511606/", kind: "primary" },
    ] }],
  },
  "a3a-s13": {
    id: "a3a-s13", name: "Paine's Common Sense, 1776", intro: "Use the excerpt below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "As to government matters, it is not in the power of Britain to do this continent justice: The business of it will soon be too weighty, and intricate, to be managed with any tolerable degree of convenience, by a power so distant from us, and so very ignorant of us; ... To be always running three or four thousand miles with a tale or a petition, waiting four or five months for an answer, which when obtained requires five or six more to explain it in, will in a few years be looked upon as folly and childishness ..." },
      { p: "Small islands not capable of protecting themselves, are the proper objects for kingdoms to take under their care; but there is something very absurd, in supposing a continent to be perpetually governed by an island." },
      { cite: "Thomas Paine, Common Sense, \"Thoughts on the Present State of American Affairs,\" Philadelphia, January 1776 (Project Gutenberg edition, via the Internet Archive).", url: "https://archive.org/details/commonsense00147gut", kind: "primary" },
    ] }],
  },
  "a3a-s14": {
    id: "a3a-s14", name: "The Virginia Declaration of Rights, 1776", intro: "Use the excerpt below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "That all men are by nature equally free and independent, and have certain inherent rights, of which, when they enter into a state of society, they cannot, by any compact, deprive or divest their posterity; namely, the enjoyment of life and liberty, with the means of acquiring and possessing property, and pursuing and obtaining happiness and safety." },
      { p: "That all power is vested in, and consequently derived from, the people; that magistrates are their trustees and servants, and at all times amenable to them." },
      { p: "That government is, or ought to be, instituted for the common benefit, protection, and security of the people, nation or community; ... and that, whenever any government shall be found inadequate or contrary to these purposes, a majority of the community hath an indubitable, unalienable, and indefeasible right to reform, alter or abolish it ..." },
      { cite: "Virginia Declaration of Rights, drafted by George Mason and adopted by the Virginia Convention, June 12, 1776, Sections 1 to 3. Avalon Project, Yale Law School.", url: "https://avalon.law.yale.edu/18th_century/virginia.asp", kind: "primary" },
    ] }],
  },
  "a3a-s15": {
    id: "a3a-s15", name: "Two strands of revolutionary thought", intro: "Use the passage below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "Historians once traced the Revolution's ideas mainly to John Locke and his theory of natural rights. Later scholars found a second strand at least as important: a tradition of classical republicanism that reached colonists through English opposition writers of the early 1700s. Republican thought taught that liberty was fragile, that power always tried to expand, and that a free people survived only if citizens put the public good ahead of private gain. Seen through this lens, new taxes, standing armies, and appointed officials looked like steps in a plan to corrupt and enslave the colonies. Most historians now see the two strands, along with Protestant ideas about covenant and conscience, blended together in the pamphlets and sermons of the 1760s and 1770s." },
      { cite: PRACTICE, kind: "practice" },
    ] }],
  },
  "a3a-s16": {
    id: "a3a-s16", name: "The horse America throws his master, 1779", intro: "Use the image below to answer the questions that follow.", label: "Image",
    sources: [{ title: "Image", blocks: [
      { img: "images/apush/u3-horse-america-throwing-his-master.jpg",
        alt: "An etched cartoon. A wild, bucking horse, its reins flying loose, throws its rider headfirst over its neck. The rider, King George III in a military coat, still raises a whip whose lashes end in swords, bayonets, and blades. The horse's saddle blanket is spotted. At right, a slim Frenchman in a cocked hat runs toward the scene carrying a large flag covered with fleurs-de-lis, the symbol of the French king. A bare tree and low shrubs fill the countryside.",
        caption: "\"The horse America, throwing his master,\" a British cartoon published in London in August 1779, the year after France signed a treaty of alliance with the United States during the American Revolution.",
        credit: "Library of Congress, Prints and Photographs Division, LC-DIG-ppmsca-33532", license: LOC, url: "https://www.loc.gov/item/97514739/" },
      { cite: "Unsigned etching, The horse America, throwing his master, published by William White, Westminster (London), August 1, 1779. Library of Congress.", url: "https://www.loc.gov/item/97514739/", kind: "primary" },
    ] }],
  },
  "a3a-s17": {
    id: "a3a-s17", name: "Jefferson on slavery, Notes on the State of Virginia", intro: "Use the excerpt below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "The whole commerce between master and slave is a perpetual exercise of the most boisterous passions, the most unremitting despotism on the one part, and degrading submissions on the other. Our children see this, and learn to imitate it; ... And with what execration should the statesman be loaded, who permitting one half the citizens thus to trample on the rights of the other, transforms those into despots, and these into enemies ... And can the liberties of a nation be thought secure when we have removed their only firm basis, a conviction in the minds of the people that these liberties are of the gift of God? ... Indeed I tremble for my country when I reflect that God is just: that his justice cannot sleep for ever ..." },
      { cite: "Thomas Jefferson, Notes on the State of Virginia, Query XVIII, \"Manners,\" written 1781 to 1782, first published 1785. Avalon Project, Yale Law School.", url: "https://avalon.law.yale.edu/18th_century/jeffvir.asp", kind: "primary" },
    ] }],
  },
  "a3a-s18": {
    id: "a3a-s18", name: "Judith Sargent Murray on women's education, 1790", intro: "Use the excerpt below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "But from that period what partiality! how is the one exalted and the other depressed, by the contrary modes of education which are adopted! the one is taught to aspire, and the other is early confined and limited. As their years increase, the sister must be wholly domesticated, while the brother is led by the hand through all the flowery paths of science. ..." },
      { p: "... is it reasonable, that a candidate for immortality, for the joys of heaven, an intelligent being, who is to spend an eternity in contemplating the works of Deity, should at present be so degraded, as to be allowed no other ideas, than those which are suggested by the mechanism of a pudding, or the sewing the seams of a garment?" },
      { cite: "Judith Sargent Murray, \"On the Equality of the Sexes,\" The Massachusetts Magazine, March and April 1790 (National Humanities Center reprint).", url: "https://nationalhumanitiescenter.org/pds/livingrev/equality/text5/sargent.pdf", kind: "primary" },
    ] }],
  },
  "a3a-s19": {
    id: "a3a-s19", name: "Revolutionary ideals and their limits", intro: "Use the passage below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "The Revolution's ideals reshaped American society, but unevenly. Several new state constitutions lowered property requirements for voting, and several states ended or weakened their official churches, a process that culminated in Virginia's Statute for Religious Freedom in 1786. Northern states began to end slavery, and in the Upper South a wave of private manumissions created the first large free Black communities. Yet the same years revealed sharp limits. Women remained without political rights in nearly every state, slavery expanded in the Deep South, and Native nations gained nothing from a revolution that freed settlers to move onto their lands. In many historians' view, the Revolution announced principles of equality that later generations of excluded Americans would claim for themselves." },
      { cite: PRACTICE, kind: "practice" },
    ] }],
  },
  "a3a-s20": {
    id: "a3a-s20", name: "The Articles of Confederation, Articles VIII and IX", intro: "Use the excerpt below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "Article VIII. All charges of war, and all other expenses that shall be incurred for the common defense or general welfare, and allowed by the United States in Congress assembled, shall be defrayed out of a common treasury, which shall be supplied by the several States in proportion to the value of all land within each State, ... The taxes for paying that proportion shall be laid and levied by the authority and direction of the legislatures of the several States within the time agreed upon by the United States in Congress assembled." },
      { p: "Article IX. ... The United States in Congress assembled shall never engage in a war, ... nor coin money, ... nor borrow money on the credit of the United States, nor appropriate money, ... nor appoint a commander in chief of the army or navy, unless nine States assent to the same ..." },
      { cite: "Articles of Confederation, agreed to by Congress November 15, 1777, ratified March 1, 1781, Articles VIII and IX. Avalon Project, Yale Law School.", url: "https://avalon.law.yale.edu/18th_century/artconf.asp", kind: "primary" },
    ] }],
  },
  "a3a-s21": {
    id: "a3a-s21", name: "Was the 1780s a critical period?", intro: "Use the passage below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "For generations, historians called the 1780s the \"critical period,\" when a feeble Confederation nearly let the new nation collapse until the Constitution rescued it. Other historians have pushed back. They point out that the Confederation Congress won the war, negotiated a favorable peace, and passed land ordinances that set up an orderly way to survey western lands and turn territories into equal states. The economic slump of the mid-1780s, they argue, was already easing by 1787. In this view, the sense of crisis came largely from creditors, merchants, and nationalists who wanted a stronger central government and used events such as Shays' Rebellion to win support for it." },
      { cite: PRACTICE, kind: "practice" },
    ] }],
  },
};

export default [
];

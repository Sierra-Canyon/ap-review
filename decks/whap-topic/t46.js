// Topic 4.6 Quiz: Internal and External Challenges to State Power
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why) => ({ id: "t46-m0" + n, skill: "u4", type: "mcq", set, topic: "4.6", reasoning, question, choices, why, answer: 0 });
const Q = (sub, prompt, earns, yes, no, example, notExample) => ({ id: "t46-q1" + sub, skill: "u4", type: "fr", set: "t46-s3", part: "SAQ 1", sub, topic: "4.6", lead: SAQ, prompt, earns, yes, no, example, notExample });

export const sets = {
  "t46-s1": {
    id: "t46-s1", name: "The treaty with Captain Cudjoe's Maroons, 1739", intro: ONE,
    sources: [{ title: "Source", blocks: [
      { p: "In the name of God, Amen, Whereas Captain Cudjoe, Captain, Acompong, Captain Johnny, Captain Cuffee, Captain Quaco, and several other Negroes, their dependents and adherents, have been in a state of ware and hostility, for several years past, against our sovereign lord the King, and the inhabitants of this island ... they mutually, sincerely, and amicably, have agreed to the following articles:" },
      { p: "First, That all hostilities shall cease on both sides for ever." },
      { p: "Secondly, That the said Captain Cudjoe, the rest of his captains, adherents, and men shall for ever hereafter [be] in a perfect state of freedom and liberty ..." },
      { p: "Thirdly, That they shall enjoy and posses, for themselves and posterity for ever, all the lands situate and lying between Trelawney Town and the Cockpits, to the amount of fifteen hundred acres ..." },
      { p: "Sixthly, That the said Captain Cudjoe, and his successors, do use their best endeavors to take, kill, suppress, or destroy ... all rebels wheresoever they be, throughout this island, unless they submit to the same terms of accommodation granted to Captain Cudjoe ..." },
      { p: "Ninthly, That if any negroes shall hereafter run away from their masters or owners, and shall fall into Captain Cudjoe's hands, they shall immediately be sent back to the chief magistrate of the next parish where they are taken ..." },
      { cite: "Articles of Pacification with the Maroons of Trelawney Town, concluded March 1, 1739 (dated 1738 in the calendar then used in British lands), between Captain Cudjoe and commissioners of the governor of Jamaica, from the copy in the Kress Collection, Baker Library, Harvard Business School, as transcribed by the Berkman Center for Internet and Society, Harvard University. Spelling as in the transcription; the bracketed word was added for this review. Maroons were people who had escaped slavery and formed free communities in Jamaica's mountains, and the treaty ended years of war with British forces. The colony's assembly later paid the Maroons a reward for each runaway they returned.", url: "https://cyber.harvard.edu/eon/marroon/treaty.html", kind: "primary" },
    ] }],
  },
  "t46-s2": {
    id: "t46-s2", name: "The Pueblo Revolt of 1680", intro: "Use the passage below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that the Pueblo Revolt of 1680 was the most successful Indigenous uprising against Spanish rule in North America. In the Spanish colony of New Mexico, the Pueblo peoples owed tribute and labor to Spanish settlers, and Franciscan friars tried to stamp out Pueblo religion, burning sacred objects and punishing ceremonies. Drought, famine, and raids by Apache peoples in the 1670s made life even harder. In 1675, the governor arrested forty-seven Pueblo religious leaders and had several hanged. One of the men he released, Popé, later organized a rising across dozens of towns that spoke different languages, using runners who carried knotted cords to count down the days. In August 1680, the Pueblos killed about four hundred colonists, including twenty-one friars, and drove the survivors south to El Paso. The Spanish did not return until 1692, and when they did, they no longer demanded labor through the encomienda and were less harsh toward Pueblo religion." },
      PRACTICE,
    ] }],
  },
  "t46-s3": {
    id: "t46-s3", name: "Shivaji and the Marathas", intro: SAQ,
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that the Maratha challenge from the Deccan did more than anything else to weaken the Mughal Empire. Shivaji, a Maratha leader from western India, built a state in the 1650s and 1660s by seizing hill forts and raiding Mughal lands with fast-moving cavalry. In 1674, he was crowned as an independent Hindu king. The emperor Aurangzeb, who had reimposed the jizya tax on non-Muslims in 1679, spent the last twenty-five years of his life fighting in the Deccan against the Marathas and other states. The wars drained the treasury, and Mughal nobles who were not paid began to act on their own. After Aurangzeb died in 1707, the Marathas expanded across much of India, and Mughal emperors ruled little more than the area around Delhi." },
      PRACTICE,
    ] }],
  },
};

export default {
  forms: [
    { id: "t46", name: "Topic 4.6 Quiz: Internal and External Challenges to State Power", group: "Unit 4: Transoceanic Interconnections",
      items: [
        // ===== Set 1: The treaty with the Maroons =====
        M(1, "t46-s1", "Claims and evidence in sources", "The treaty best supports which claim about the Maroons of Jamaica?",
          ["Their resistance was strong enough that the British colonial government recognized their freedom and their land.", "They were defeated and returned to slavery.", "They ruled all of Jamaica after the treaty.", "They were Indigenous people who had lived in Jamaica before Columbus."],
          ["Correct. After years of war, the colony promised them \"a perfect state of freedom and liberty\" and fifteen hundred acres.",
            "The treaty grants them freedom.",
            "The treaty limits them to land near Trelawney Town and keeps the colony under the king.",
            "The source note says they were people who had escaped slavery, mostly of African origin."]),
        M(2, "t46-s1", "Sourcing and situation", "The sixth and ninth articles were most likely included because the British colonial government wanted to",
          ["use the Maroons to put down future slave revolts and return runaways, protecting the plantation system", "free all enslaved people in Jamaica", "make the Maroons the rulers of the island's parishes", "end the sugar trade"],
          ["Correct. The colony made peace with the Maroons but turned them into allies against other rebels and runaways.",
            "The treaty keeps slavery in place and requires runaways to be sent back.",
            "The treaty limits the Maroons to their own lands.",
            "Nothing in the treaty concerns ending the sugar trade."]),
        M(3, "t46-s1", "Comparison", "The Maroon communities of Jamaica were most similar to which other community of the period?",
          ["Palmares in Brazil, a large settlement of people who escaped slavery and defended themselves for most of the 1600s", "The Spanish city of Manila", "The Mughal port of Surat", "The Cossack forts built by Russia in Siberia"],
          ["Correct. Like the Jamaican Maroons, Palmares was founded by people who fled plantations and fought colonial armies for decades.",
            "Manila was a Spanish colonial capital.",
            "Surat was a Mughal trading port.",
            "Cossacks served the Russian state as they expanded it, though some had fled serfdom."]),
        M(4, "t46-s1", "Developments and processes", "The treaty best illustrates which challenge to state power in the period 1450 to 1750?",
          ["Resistance by enslaved and formerly enslaved people to colonial rule in the Americas", "Rivalry among European states over trade in Asia", "Peasant revolts against high taxes in Europe", "Religious wars between Catholics and Protestants"],
          ["Correct. Maroon wars, revolts, and running away were ways enslaved Africans challenged colonial states.",
            "The treaty concerns Jamaica, not Asia.",
            "The Maroons were not European peasants.",
            "The treaty has nothing to do with Catholic and Protestant wars."]),
        // ===== Set 2: The Pueblo Revolt =====
        M(5, "t46-s2", "Causation", "According to the passage, which of the following was a cause of the Pueblo Revolt?",
          ["Spanish attacks on Pueblo religion, along with tribute, forced labor, drought, and raids", "A Spanish plan to give all land to the Pueblos", "The arrival of English settlers in New Mexico", "A Pueblo alliance with the Ottoman Empire"],
          ["Correct. The passage lists friars burning sacred objects, the hanging of religious leaders, labor and tribute, drought, famine, and raids.",
            "The passage describes Spanish settlers demanding tribute and labor.",
            "No English settlers are mentioned; New Mexico was a Spanish colony.",
            "The Pueblos had no contact with the Ottoman Empire."]),
        M(6, "t46-s2", "Claims and evidence in sources", "Which evidence from the passage best shows that the revolt was well organized?",
          ["Runners carried knotted cords to count down the days to a rising across dozens of towns with different languages.", "The governor arrested forty-seven religious leaders in 1675.", "The Spanish returned in 1692.", "Apache peoples raided Pueblo towns in the 1670s."],
          ["Correct. Coordinating many towns that spoke different languages took planning, which the knotted cords show.",
            "This was a cause of anger, not evidence of organization.",
            "This describes the reconquest, not the revolt's organization.",
            "This describes hardship before the revolt."]),
        M(7, "t46-s2", "Continuity and change", "The passage best supports which claim about the results of the Pueblo Revolt?",
          ["Although Spain regained New Mexico, it changed its policies and was less harsh toward the Pueblos afterward.", "Spain never returned to New Mexico.", "The revolt led the Pueblos to convert to Christianity right away.", "The revolt ended Spanish rule throughout the Americas."],
          ["Correct. The passage says the Spanish no longer demanded labor through the encomienda and were less harsh toward Pueblo religion after 1692.",
            "The passage says the Spanish returned in 1692.",
            "The revolt was partly a defense of Pueblo religion against the friars.",
            "The revolt affected only New Mexico."]),
        M(8, "t46-s2", "Comparison", "The Pueblo Revolt is most similar to which other challenge to state power in the period 1450 to 1750?",
          ["Metacom's War of 1675 to 1676, in which Native peoples of New England fought English colonists who took their land", "The Fronde, a revolt of French nobles against the king's power", "The Protestant Reformation in Germany", "The Maratha wars against the Mughal Empire"],
          ["Correct. Both were armed uprisings by Indigenous peoples against colonizers who had taken land, labor, or religious freedom.",
            "The Fronde was a revolt by elites within France against their own king, not by colonized peoples.",
            "The Reformation was a religious movement within Europe.",
            "The Marathas rose against a land-based empire in India, not against European colonizers."]),
        // ===== SAQ: Shivaji and the Marathas =====
        Q("a", "Identify ONE method, described in the passage, that Shivaji used to build a Maratha state.",
          "The response names one method from the passage.",
          ["He seized hill forts in western India.", "He raided Mughal lands with fast-moving cavalry.", "He was crowned as an independent Hindu king in 1674, claiming royal authority."],
          ["\"He fought the Mughals.\" This is too general and names no method.", "\"He built a navy and conquered Portugal.\" This is false.", "\"Aurangzeb reimposed the jizya.\" This is something the Mughal emperor did, not a method Shivaji used."],
          "The passage says Shivaji built his state by seizing hill forts in western India and using fast-moving cavalry to raid Mughal lands, which let a smaller force wear down a larger empire.",
          "Shivaji was a good leader."),
        Q("b", "Explain ONE way Aurangzeb's policies, as described in the passage, contributed to the weakening of the Mughal Empire.",
          "The response explains how a specific policy of Aurangzeb weakened the empire.",
          ["Aurangzeb's long wars in the Deccan drained the treasury, so nobles who were not paid began to act on their own.", "By reimposing the jizya on non-Muslims, Aurangzeb angered many Hindu subjects and allies, which made it harder to hold their loyalty.", "Because Aurangzeb spent decades in the south, the empire's center was neglected, and it broke apart soon after his death in 1707."],
          ["\"Aurangzeb was a bad ruler.\" This is a judgment, not an explanation.", "\"Aurangzeb lost to the British in 1707.\" This is false.", "\"The Marathas expanded.\" This describes the result without explaining Aurangzeb's role."],
          "Aurangzeb spent the last twenty-five years of his life fighting the Marathas in the Deccan. These wars emptied the treasury, so many Mughal nobles were not paid and began to rule their lands for themselves, which weakened the emperor's control.",
          "Aurangzeb made mistakes."),
        Q("c", "Explain ONE way another land-based empire in the period 1450 to 1750 faced a challenge to its power similar to the one the Marathas posed to the Mughals.",
          "The response names another land-based empire and explains a specific challenge that resembles the Maratha challenge (an internal revolt or a rival state that drained the empire).",
          ["The Ming dynasty faced peasant rebels led by Li Zicheng, who took Beijing in 1644 and helped bring down the dynasty.", "The Ottoman Empire faced the Celali revolts in Anatolia around 1600, when soldiers and peasants rebelled and weakened the sultan's control.", "Russia faced the revolt of Stenka Razin in 1670 and 1671, when Cossacks and peasants rose against the tsar's officials along the Volga."],
          ["\"The Ottomans also had an empire.\" This states no challenge.", "\"Spain lost its colonies in 1700.\" This is false and does not describe a land-based empire's challenge.", "\"The Mughals fought the Marathas.\" This repeats the passage instead of naming another empire."],
          "The Ming dynasty faced a similar challenge from within. In the 1630s and 1640s, peasant rebels led by Li Zicheng, driven by famine and heavy taxes, raided across northern China and captured Beijing in 1644. Like the Maratha wars, the revolt drained the state and opened the way for a new power, the Manchu Qing, to take over.",
          "Other empires had problems too."),
      ] },
  ],
};

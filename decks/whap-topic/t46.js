// Topic 4.6 Quiz: Internal and External Challenges to State Power
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
import { maps } from "../whap/maps.js";

const MAP = "Map drawn for this review from Natural Earth land outlines (public domain). Places, dates, and routes checked against ";
const map = (id, caption, refs) => [{ svg: maps[id], caption }, { cite: MAP + refs + ".", kind: "map" }];
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why, difficulty) => ({ id: "t46-m0" + n, skill: "u4", type: "mcq", set, topic: "4.6", reasoning, difficulty, question, choices, why, answer: 0 });
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
    id: "t46-s2", name: "The Pueblo Revolt of 1680", intro: "Use the map below to answer the questions that follow.", label: "Map",
    sources: [{ title: "Map", blocks: map("u4f-pueblo", "The Pueblo Revolt in Spanish New Mexico, August 1680 (route approximate)", "Encyclopaedia Britannica, \"Pueblo Rebellion,\" and Wikipedia, \"Pueblo Revolt,\" with Richard Flint and Shirley Cushing Flint's biographical sketch of Antonio de Otermín for the New Mexico Office of the State Historian") }],
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
          ["Their resistance forced the colony to recognize their freedom and land.", "They were defeated in battle and returned to their former owners.", "They won control of the whole island and its sugar plantations.", "They were Taíno people who had lived in Jamaica before Columbus."],
          ["Correct. After years of war, the colony promised them \"a perfect state of freedom and liberty\" and fifteen hundred acres.",
            "The treaty grants them freedom and ends the war on equal terms; it does not return them to slavery.",
            "The treaty limits them to land between Trelawney Town and the Cockpits and keeps the colony under the king.",
            "The source note says they were people who had escaped slavery, mostly of African origin, not the island's Indigenous Taíno."], "easy"),
        M(2, "t46-s1", "Sourcing and situation", "The sixth and ninth articles were most likely included because the British colonial government wanted to",
          ["use the Maroons against future rebels and runaways", "free the enslaved people who had joined the Maroons' camps", "make the Maroon captains the judges of each parish", "move the Maroons off the island to another British colony"],
          ["Correct. The colony made peace with the Maroons but turned them into allies against other rebels and runaways, protecting the plantation system.",
            "Article nine requires runaways to be sent back to their masters, so the treaty keeps slavery in place.",
            "The ninth article sends runaways to \"the chief magistrate,\" a colonial official; the Maroons get no power over the parishes.",
            "Article three gives the Maroons land in Jamaica \"for ever\"; it does not move them. (Britain did deport the Maroons of Trelawney Town after another war in 1795 to 1796, but not under this treaty.)"], "moderate"),
        M(3, "t46-s1", "Comparison", "The Maroon communities of Jamaica were most similar to which other community of the period?",
          ["Palmares, a settlement of escaped slaves in Brazil", "The Cossack forts built for the tsars across Siberia", "The Chinese merchant quarter outside Manila's walls", "The English trading post at the Mughal port of Surat"],
          ["Correct. Like the Jamaican Maroons, Palmares was founded by people who fled plantations, and it fought colonial armies for most of the 1600s.",
            "Some Cossacks had fled serfdom, but their forts in Siberia served the Russian state as it expanded, not a community resisting it.",
            "Manila's Chinese merchants lived under Spanish rule and served the colony's trade; they had not escaped slavery.",
            "Surat was a Mughal port where the English traded with the emperor's permission."], "moderate"),
        M(4, "t46-s1", "Developments and processes", "The treaty best illustrates which challenge to state power in the period 1450 to 1750?",
          ["Resistance by enslaved people to colonial rule in the Americas", "Rivalry among European states over trade in the Caribbean", "Peasant revolts against high taxes in Europe and Russia", "Religious wars between Catholic and Protestant states"],
          ["Correct. Maroon wars, revolts, and running away were ways enslaved Africans challenged colonial states.",
            "European states did fight over the Caribbean, but this treaty settles a war between the colony and people who escaped slavery.",
            "The Maroons were people who escaped slavery in Jamaica, not European or Russian peasants.",
            "The treaty has nothing to do with Catholic and Protestant wars."], "easy"),
        // ===== Set 2: The Pueblo Revolt (map) =====
        M(5, "t46-s2", "Claims and evidence in sources", "The places marked on the map best support which claim about the Pueblo Revolt?",
          ["It was coordinated among towns spread over hundreds of miles.", "It began among Apache peoples south of the Rio Grande towns.", "Every Pueblo town joined it, including those nearest Santa Fe.", "It drove the Spanish north from Santa Fe toward Taos."],
          ["Correct. The map marks events from Taos in the north to the Hopi villages far to the west, all in August 1680. A rising that wide had to be planned, and Popé's runners carried knotted cords to set the day.",
            "The map places the planning at Taos and San Juan, Pueblo towns. Apache peoples lived nearby, but the map does not show the revolt starting with them.",
            "The map marks Isleta as a pueblo that did not join the revolt.",
            "The dashed line shows the Spanish retreating south, toward El Paso del Norte, not north."], "easy"),
        M(6, "t46-s2", "Contextualization", "The burned churches and killed friars marked at the Hopi villages are best understood in the context of",
          ["Franciscan efforts to suppress Pueblo religious practices", "competition between English and Spanish missionaries", "Apache raids that had destroyed the missions before 1680", "Pueblo anger at the Catholic Church's sale of indulgences"],
          ["Correct. Friars in New Mexico burned sacred objects, banned ceremonies, and in 1675 the governor had Pueblo religious leaders arrested and several hanged. Attacks on churches and friars rejected that pressure.",
            "There were no English missionaries in New Mexico. The friars there were Spanish Franciscans.",
            "Apache raids did strike New Mexico in the 1670s, but the map marks the burning as part of the 1680 revolt by the Hopi themselves.",
            "The sale of indulgences angered Protestant reformers in Europe in the early 1500s; it had nothing to do with the Pueblos."], "moderate"),
        M(7, "t46-s2", "Causation", "The route from Santa Fe to El Paso del Norte and on toward Mexico City helps explain why the revolt held New Mexico for twelve years. Which explanation does it support?",
          ["The colony lay far from the centers of Spanish power, so help came slowly.", "The Rio Grande was too wide for Spanish soldiers or their horses to cross.", "Pueblo fleets blocked the coast that the Spanish used to supply the colony.", "English colonists on the Camino Real cut the road between Santa Fe and Mexico City."],
          ["Correct. Santa Fe sat at the far end of a long overland road from Mexico City. The Spanish needed years to gather a force at El Paso strong enough to retake the colony, which they did in 1692.",
            "The map shows the Spanish retreating along the Rio Grande, not stopped by it.",
            "New Mexico is far inland; the map shows no coast near the Pueblo towns.",
            "There were no English colonists near New Mexico; the nearest English colonies were on the Atlantic coast."], "difficult"),
        M(8, "t46-s2", "Continuity and change", "Which of the following best describes Spanish rule in New Mexico after the years shown at El Paso del Norte on the map?",
          ["Spain retook the colony and held it into the 1800s.", "Spain retook the colony and restored encomienda labor in every pueblo.", "France took New Mexico from Spain and joined it to Louisiana.", "Spain kept its capital at El Paso and never returned north."],
          ["Correct. Spanish forces returned in 1692, put down further risings, and ruled New Mexico until Mexico won independence in 1821, though they pressed Pueblo religion less harshly than before.",
            "Spain did retake the colony in 1692, but it did not bring back the old encomienda labor system, and it eased its attacks on Pueblo religion.",
            "France claimed Louisiana, to the east, but never ruled New Mexico.",
            "The map shows El Paso as a base in exile only until 1692, when the Spanish returned to Santa Fe."], "difficult"),
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

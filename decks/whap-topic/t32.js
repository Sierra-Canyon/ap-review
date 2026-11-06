// Topic 3.2 Quiz: Empires: Administration
// Sources: every stimulus this quiz uses, keyed by id.
export const sets = {
  "t32-s1": {
    id: "t32-s1", name: "Jahangir's first orders as emperor", intro: "Use the source below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "After my accession, the first order that I gave was for the fastening up of the Chain of Justice, so that if those engaged in the administration of justice should delay or practise hypocrisy in the matter of those seeking justice, the oppressed might come to this chain and shake it so that its noise might attract attention. ... I also gave twelve orders to be observed as rules of conduct (dasturu-l-`amal) in all my dominions-- (1) Forbidding the levy of cesses under the names of tamgha and mir bahri (river tolls), and other burdens which the jagirdars of every province and district had imposed for their own profit. ..." },
        { p: "(8) I gave an order that the officials of the Crown lands and the jagirdars should not forcibly take the ryots' lands and cultivate them on their own account." },
        { cite: "Jahangir, Mughal emperor of India (ruled 1605 to 1627), Tuzuk-i-Jahangiri (his memoirs), describing the orders he gave on taking the throne in 1605, from The Tuzuk-i-Jahangiri: or, Memoirs of Jahangir, vol. 1, translated by Alexander Rogers, edited by Henry Beveridge (London: Royal Asiatic Society, 1909), Project Gutenberg eBook 53674. Footnote numbers are omitted. Cesses are taxes, and tamgha was a toll on goods. A jagir was the right to collect the land revenue of an assigned area, granted to a Mughal officer in place of a salary, and a jagirdar was the officer who held it. Ryots are peasants.", url: "https://www.gutenberg.org/ebooks/53674.txt.utf-8", kind: "primary" },
      ] },
    ],
  },
  "t32-s2": {
    id: "t32-s2", name: "Peter the Great rebuilds the Russian state", intro: "Use the passage below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "Many historians argue that Peter the Great (ruled 1682 to 1725) rebuilt the Russian state so that it could fight long wars, above all the Great Northern War against Sweden (1700 to 1721). In 1711 he created the Senate to run the government while he was away at war, and from 1718 he replaced the old, overlapping government offices with colleges, boards that each handled one area such as war, foreign affairs, or revenue. His Table of Ranks of 1722 set out fourteen ranks in the army, the navy, and the civil service, and a commoner who rose high enough became a noble. Nobles were expected to serve the state for life. To pay for the army, a poll tax on every male peasant replaced the old tax on households, and landlords were made responsible for collecting it from their serfs." },
        { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" },
      ] },
    ],
  },
  "t32-s3": {
    id: "t32-s3", name: "A Dutch trader on the lords of Japan", intro: "Use the source below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "The Revenues of the commanding Lords ... are very great, and yet they have, by reason of their vast expences, enough to do with their moneys: First, they are obliged, though never so far distant from Court, to reside six moneths every year in the City of Jedo, to wait upon the Emperor. ..." },
        { p: "These ruling Princes have each of them a Chancellor, imposed by the Emperour, presented ordinarily with this following complement: Sir, your Government is great, and your Subjects are many; and therefore I have thought fit, out of the care I have of your good, to appoint you an Assistant, being a person wise and trusty, bred up under my eyes, and in my house; employ therefore his services, and let it not be unacceptable to you that we study your welfare. This person is received with great thanks, ceremony, feasting and presents; and (though an open Spie upon his Master’s actions,) treated with much honour and respect." },
        { cite: "François Caron, head of the Dutch East India Company's trading post in Japan, who lived in Japan from 1619 to 1641, A True Description of the Mighty Kingdoms of Japan and Siam (written c. 1636), chapter \"The quality of his Princes and Lords, and their might,\" translated from the Dutch by Roger Manley (London: Robert Boulter, 1671), from the digital text (credited to Nichibun) published by the Vajirayana Digital Library. The drop capital \"THe\" is printed as \"The\". The Emperor is Caron's name for the Tokugawa shogun, who ruled Japan from Jedo (Edo, modern Tokyo); the shogun at the time was Tokugawa Iemitsu (ruled 1623 to 1651). The commanding Lords are the daimyo, the great lords who governed Japan's domains.", url: "https://vajirayana.org/v2/asia/a-true-description-of-the-mighty-kingdoms-of-japan-and-siam/a-description-of-japan/the-quality-of-his-princes-and-lords-and-their-might", kind: "primary" },
      ] },
    ],
  },
};

export default {
  forms: [
    { id: "t32", name: "Topic 3.2 Quiz: Empires: Administration", group: "Unit 3: Land-Based Empires",
      items: [
        // ===== Set 1: Jahangir's first orders (Mughal Empire) =====
        { id: "t32-m01", skill: "u3", type: "mcq", set: "t32-s1", topic: "3.2", reasoning: "Claims and evidence in sources",
          question: "Jahangir's description of the Chain of Justice in the first paragraph was most likely intended to",
          choices: [
            "present the emperor as a ruler who personally protected ordinary subjects from unjust officials",
            "show that Mughal courts would now judge cases by Hindu law instead of Islamic law",
            "announce that non-Muslim subjects would once again pay the jizya, a tax on non-Muslims",
            "warn European merchants that their disputes would be settled only by the emperor",
          ],
          why: [
            "Correct. The chain let \"the oppressed\" call the emperor's attention directly when officials delayed justice. By describing it as his very first order, Jahangir presents himself as a just ruler who stands above his officials, a common way rulers built their legitimacy.",
            "The excerpt says nothing about which legal tradition the courts followed. It is about officials who \"delay or practise hypocrisy,\" not about changing the law itself.",
            "This is a later policy. Akbar had abolished the jizya, and it was Aurangzeb who brought it back in 1679, more than seventy years after the orders in this excerpt.",
            "Europeans are not mentioned. The chain was open to anyone seeking justice, and its purpose was to check the emperor's own officials.",
          ],
          answer: 0 },
        { id: "t32-m02", skill: "u3", type: "mcq", set: "t32-s1", topic: "3.2", reasoning: "Contextualization",
          question: "Orders (1) and (8) in the excerpt are best understood in the context of which challenge of governing the Mughal Empire?",
          choices: [
            "Officers paid with the right to collect revenue from assigned lands could abuse peasants and traders for their own gain.",
            "Maratha armies had taken control of much of the Deccan and were collecting taxes in the emperor's place.",
            "The British East India Company had taken over the collection of land revenue in Bengal.",
            "Provincial governors had stopped sending any revenue to the capital, which left the empire bankrupt.",
          ],
          why: [
            "Correct. The Mughals paid their officers with jagirs, the right to collect revenue from an assigned area. Orders (1) and (8) forbid jagirdars to add their own taxes and to seize peasants' land, which shows the emperor trying to keep these officers from abusing the system.",
            "This is the wrong period. The Maratha challenge grew in the late seventeenth century under Aurangzeb, long after Jahangir took the throne in 1605.",
            "This is the wrong period. The East India Company gained the right to collect revenue in Bengal in 1765, after the Mughal Empire had declined.",
            "This overstates the problem. The excerpt shows officials taking too much from subjects, not an empire that had lost all of its revenue.",
          ],
          answer: 0 },
        { id: "t32-m03", skill: "u3", type: "mcq", set: "t32-s1", topic: "3.2", reasoning: "Sourcing and situation",
          question: "Which of the following is the most important limitation of the excerpt as evidence of how well Mughal government worked under Jahangir?",
          choices: [
            "It is the emperor's own account of his orders, so it shows how he wanted his rule to be seen but not whether officials obeyed.",
            "It was written by a European visitor who did not understand how the Mughal court worked.",
            "It was written long after Jahangir's death by historians who had never seen his court.",
            "It reflects the views of the jagirdars, who wanted to keep the right to tax peasants as they pleased.",
          ],
          why: [
            "Correct. The excerpt comes from Jahangir's memoirs. A ruler describing his own orders had every reason to present himself as just and in control, and an order to stop an abuse shows only that the emperor wanted it stopped, not that it stopped.",
            "The author is the Mughal emperor himself, not a European visitor.",
            "The memoirs were written by Jahangir during his own reign, not long after it.",
            "The excerpt speaks for the emperor, who is limiting the jagirdars. It does not present their point of view.",
          ],
          answer: 0 },

        // ===== Set 2: Peter the Great's reforms (practice passage) =====
        { id: "t32-m04", skill: "u3", type: "mcq", set: "t32-s2", topic: "3.2", reasoning: "Causation",
          question: "According to the passage, which of the following was the main reason for Peter the Great's changes to the Russian government?",
          choices: [
            "The demands of long wars, which required more money, soldiers, and officials",
            "A revolt of the streltsy, the palace musketeers, that forced Peter to share power with the nobles",
            "Pressure from the head of the Orthodox Church, who wanted the tsar to return church lands",
            "The loss of Siberia, which had cut Russia off from the fur trade",
          ],
          why: [
            "Correct. The passage says Peter rebuilt the state \"so that it could fight long wars,\" created the Senate to govern \"while he was away at war,\" and set the poll tax \"to pay for the army.\"",
            "Peter crushed the streltsy revolt of 1698 and executed many of the rebels. He did not share power because of it, and the passage does not mention it.",
            "The passage does not mention the church. Peter in fact reduced the church's independence by leaving the office of patriarch empty and later placing a council of officials over the church.",
            "Russia did not lose Siberia. It kept expanding across Siberia in this period, and furs from there remained an important source of wealth.",
          ],
          answer: 0 },
        { id: "t32-m05", skill: "u3", type: "mcq", set: "t32-s2", topic: "3.2", reasoning: "Continuity and change",
          question: "Which of the following best describes how the reforms in the passage changed the position of the Russian nobility?",
          choices: [
            "A noble's standing came to depend more on the rank he earned through service to the state.",
            "Nobles gained the right to choose each new tsar through the Senate.",
            "Nobles were freed from any duty to serve in the army or the government.",
            "Nobles lost their serfs, who became peasants owing taxes only to the state.",
          ],
          why: [
            "Correct. The Table of Ranks measured status by rank in the army, the navy, or the civil service, nobles had to serve for life, and commoners who rose high enough became nobles. Rank earned in service to the tsar now mattered more than birth alone.",
            "The Senate carried out the tsar's orders while he was away. It did not choose tsars, and Peter even claimed the right to name his own successor.",
            "This reverses the passage, which says nobles \"were expected to serve the state for life.\" Nobles were freed from required service only in 1762, decades after Peter's death.",
            "The passage says landlords collected the poll tax \"from their serfs,\" so nobles kept their serfs. Serfdom in Russia lasted until 1861.",
          ],
          answer: 0 },
        { id: "t32-m06", skill: "u3", type: "mcq", set: "t32-s2", topic: "3.2", reasoning: "Comparison",
          question: "The Table of Ranks described in the passage was most similar to which of the following practices in another land-based empire?",
          choices: [
            "The Mughal mansab system, which gave nobles numbered ranks that set their pay and the troops they owed the emperor",
            "The Safavid shahs' order that their subjects follow Shi'a Islam",
            "The Inca mit'a, which required communities to send workers in turn to labor for the state",
            "The Ottoman sale of the right to collect taxes to the highest bidder",
          ],
          why: [
            "Correct. Both systems placed nobles and officers in ranks that the ruler granted and could change, so a man's standing depended on serving the ruler. Both helped a ruler bind a powerful elite to the central state.",
            "This was a way to use religion to unify subjects and legitimize the dynasty, not a system of ranks for nobles and officials.",
            "The mit'a was a labor obligation owed by ordinary communities, not a set of ranks for an elite. The Inca Empire also fell to the Spanish in the 1530s, long before Peter's reign.",
            "Tax farming was a way to raise revenue by selling collection rights. It did not set the rank or status of nobles in the ruler's service.",
          ],
          answer: 0 },

        // ===== Set 3: Caron on the lords of Japan (Tokugawa Japan) =====
        { id: "t32-m07", skill: "u3", type: "mcq", set: "t32-s3", topic: "3.2", reasoning: "Causation",
          question: "The practices described in the excerpt most directly helped the Tokugawa shoguns to",
          choices: [
            "reduce the daimyo's ability to challenge the shogun by draining their wealth and keeping watch on them",
            "expand Japan's overseas trade by giving the daimyo control over the Dutch trading post",
            "spread Christianity among the daimyo and their followers",
            "replace the daimyo with officials chosen through examinations on the Confucian classics",
          ],
          why: [
            "Correct. The lords' revenues were great, but spending half of every year at court in Edo cost so much that they had \"enough to do with their moneys,\" and the chancellor sent by the shogun was \"an open Spie\" on each lord. Both practices made it harder for a lord to build the wealth and secrecy needed to rebel.",
            "The excerpt is about controlling the lords, not trade, and the shoguns kept foreign trade under their own control rather than handing it to the daimyo.",
            "The Tokugawa shoguns banned Christianity and persecuted Japanese Christians in this period. Nothing in the excerpt concerns religion.",
            "The lords kept their domains; the excerpt describes ways to watch and weaken them. Examinations for officials were a Chinese practice, not a Tokugawa one.",
          ],
          answer: 0 },
        { id: "t32-m08", skill: "u3", type: "mcq", set: "t32-s3", topic: "3.2", reasoning: "Comparison",
          question: "The Tokugawa methods described in the excerpt were most similar to which of the following?",
          choices: [
            "Louis XIV's practice of drawing the great nobles of France to live at his court at Versailles",
            "The Ottoman devshirme, which took boys from Christian families to train as soldiers and officials",
            "The Mughal emperor Akbar's decision to end the jizya, a tax on non-Muslims",
            "The Mughal practice of paying officers with jagirs, the right to collect revenue from an assigned area",
          ],
          why: [
            "Correct. Like the shoguns, Louis XIV kept powerful nobles near him, where life at court was costly and their actions could be watched. In both cases a ruler weakened a landed nobility that had fought the central government in earlier civil wars.",
            "The devshirme built a new elite that owed everything to the sultan. The Tokugawa methods controlled an existing class of lords rather than replacing it.",
            "Ending the jizya was a way to win the support of Akbar's many non-Muslim subjects. It was a religious policy, not a way to watch and weaken great lords.",
            "Jagirs paid officers by giving them revenue to collect. The Tokugawa methods did the opposite of rewarding the lords: they drained the lords' wealth and kept them under watch.",
          ],
          answer: 0 },

        // ===== SAQ 1: no source =====
        { id: "t32-q1a", skill: "u3", type: "fr", part: "SAQ 1", sub: "a", topic: "3.2",
          lead: "Answer all parts of the question that follows.",
          prompt: "Identify ONE way rulers of a land-based empire in the period c. 1450 to c. 1750 used monumental architecture or the arts to legitimize their rule.",
          earns: "The response names a specific land-based empire or ruler of the period and a building, a city, or a work of art that the ruler used to display power or support his claim to rule.",
          yes: [
            "Suleiman I had the Süleymaniye Mosque built in Istanbul to show the Ottoman sultan as a great Muslim ruler.",
            "Louis XIV built the palace of Versailles, whose size and decoration displayed the glory of the French king.",
            "Shah Abbas I rebuilt Isfahan as the Safavid capital, with a great square, mosques, and a palace that displayed the shah's power and his support for Shi'a Islam.",
          ],
          no: [
            "\"Empires built big buildings.\" This names no empire and no building.",
            "\"The Qing built the Great Wall to show their power.\" Most of the wall that stands today was built by the Ming, and its purpose was defense.",
            "\"The Ottomans used cannon to conquer Constantinople.\" This is military force, not architecture or art.",
          ],
          example: "The Ottoman sultan Suleiman I had the Süleymaniye Mosque built in Istanbul in the 1550s. Its great size and domes showed the sultan as a powerful ruler and a leading supporter of Islam.",
          notExample: "Rulers liked art, so they paid artists." },
        { id: "t32-q1b", skill: "u3", type: "fr", part: "SAQ 1", sub: "b", topic: "3.2",
          lead: "Answer all parts of the question that follows.",
          prompt: "Explain ONE way a ruler of a land-based empire in the period c. 1450 to c. 1750 used bureaucratic elites to consolidate power.",
          earns: "The response names a specific empire or ruler of the period and explains how officials chosen, trained, or ranked by the state helped the ruler strengthen central control.",
          yes: [
            "The Qing emperors kept the civil service examinations, so officials were chosen for their knowledge of the Confucian classics; these scholar-officials owed their posts to the state and helped the Manchu rulers govern China's Han Chinese majority.",
            "Akbar ranked his nobles and officers as mansabdars, each with a numbered rank that set his pay and the troops he had to supply, which tied the nobles' status to service to the emperor.",
            "Peter the Great created the Table of Ranks in 1722, which ranked nobles and officials by their service to the state, so a noble's status depended on serving the tsar.",
            "The Ottoman sultans trained boys taken through the devshirme in the palace to become officials, and because these men had no family power of their own, they were loyal to the sultan.",
          ],
          no: [
            "\"The emperor had many officials who helped him rule.\" This names no empire and explains nothing.",
            "\"The Qing used the examinations to choose Manchu generals.\" The examinations chose civil officials, and the Manchu military was organized in the banners.",
            "\"Louis XIV ruled by divine right.\" This is a claim to legitimacy, not a use of officials.",
          ],
          example: "The Qing emperors kept the Confucian civil service examinations. Men who passed became officials who owed their positions to the state, not to their families, so the Manchu rulers could govern China's large Han Chinese population through educated officials loyal to the throne.",
          notExample: "Bureaucracy means a government with many offices." },
        { id: "t32-q1c", skill: "u3", type: "fr", part: "SAQ 1", sub: "c", topic: "3.2",
          lead: "Answer all parts of the question that follows.",
          prompt: "Explain ONE way the method a land-based empire used to collect taxes or tribute in the period c. 1450 to c. 1750 affected the relationship between the rulers and their subjects or local elites.",
          earns: "The response names a specific method of collecting taxes or tribute in an empire of the period and explains how it strengthened or weakened the rulers' ties to subjects or local elites.",
          yes: [
            "The Ottoman state sold the right to collect taxes to tax farmers, and provincial notables who bought these rights grew wealthy and powerful, which weakened the sultan's control over the provinces.",
            "The Mughals relied on zamindars, local landholders who collected land revenue from peasants and kept a share, so the emperor depended on local elites who gained wealth and power of their own.",
            "The Aztecs demanded heavy tribute from conquered peoples, which made many of them resent Aztec rule; in 1519 the Totonacs of Cempoala, an Aztec tributary, joined Cortés against the Aztecs.",
            "Peter the Great's poll tax, first collected in 1724, was owed for every male peasant and was collected through landlords, which tied serfs even more firmly to the landlords and the land.",
          ],
          no: [
            "\"Empires collected taxes to pay for things.\" This names no empire and no effect on any relationship.",
            "\"The Ottomans collected the jizya from all Muslims.\" The jizya was a tax on non-Muslims.",
            "\"The Mughals collected taxes, and later the British took over India.\" This does not explain how a method of collection affected rulers and subjects.",
          ],
          example: "The Mughal emperors collected much of their land revenue through zamindars, local landholders who gathered taxes from the peasants and kept a share for themselves. Because the state depended on them to collect its revenue, the zamindars kept their own wealth and local power, and in the eighteenth century, as central control weakened, many of them acted more and more on their own.",
          notExample: "Taxes made people angry at the government." },
      ] },
  ],
};

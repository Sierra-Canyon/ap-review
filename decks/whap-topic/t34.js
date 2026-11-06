// Topic 3.4 Quiz: Comparison in Land-Based Empires
// Sources: every stimulus this quiz uses, keyed by id.
export const sets = {
  "t34-s1": {
    id: "t34-s1", name: "Jesuits at the Kangxi Emperor's court", intro: "Use the source below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "THIS nation, naturally proud, looked upon themselves as the most learned in the world ... but they were undeceived by the ingenuity of the missionaries who appeared at court. The proof which they gave of their capacity served greatly to authorize their ministry and to gain esteem for the religion which they preached. The late emperor, Cang hi, whose chief delight was to acquire knowledge, was never weary of seeing or hearing them. On the other hand, the Jesuits, perceiving how necessary the protection of this great prince was to the progress of the Gospel, omitted nothing that might excite his curiosity and satisfy this natural relish for the sciences." },
        { p: "... All these different inventions of human wit, till then unknown to the Chinese, abated something of their natural pride and taught them not to have too contemptible an opinion of foreigners; nay, it so far altered their way of thinking that they began to look upon Europeans as their masters." },
        { cite: "Jean-Baptiste Du Halde, French Jesuit priest, The General History of China (first published in French in 1735 as Description de l'Empire de la Chine, compiled from the reports of Jesuit missionaries in China), describing the Jesuits at the court of the Kangxi Emperor in the late seventeenth century, from the English translation in Eva March Tappan, ed., The World's Story, vol. 1: China, Japan, and the Islands of the Pacific (Boston: Houghton Mifflin, 1914), pp. 155 to 162, as modernized by Jerome S. Arkenberg for the Internet Modern History Sourcebook, Fordham University, under the title \"Père du Halde: Teaching Science to the Manchu Emperor, c. 1680.\" The omitted passage between the two paragraphs describes the optical instruments, clocks, machines, and other devices the missionaries presented to the emperor. Cang hi: the Kangxi Emperor of the Qing dynasty, who ruled from 1661 to 1722.", url: "https://sourcebooks.web.fordham.edu/mod/1680halde1.asp", kind: "primary" },
      ] },
    ],
  },
  "t34-s2": {
    id: "t34-s2", name: "Slave soldiers in the Ottoman and Safavid empires", intro: "Use the two passages below to answer the questions that follow.",
    sources: [
      { title: "Passage 1: The Ottoman Sultans and Their Servants", blocks: [
        { p: "Many historians argue that the Ottoman sultans built a ruling elite that depended on them alone. Through the devshirme, a levy held every few years, officials took boys from Christian families, mostly in the Balkans, converted them to Islam, and trained them for service. The most promising studied in the palace and could rise to become provincial governors or even grand vizier. Most of the others joined the Janissaries, the sultan's infantry, who fought with firearms. As the sultan's kul, a word meaning slaves, these men had no family lands and could not pass their posts to their sons. They gave the sultan a balance against the Turkish cavalrymen in the provinces, who held timars, grants of land revenue, in return for military service." },
        { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" },
      ] },
      { title: "Passage 2: Shah Abbas and the Safavid State", blocks: [
        { p: "Many historians argue that Shah Abbas I (ruled 1588 to 1629) rebuilt Safavid power by reducing his dependence on the Qizilbash, the Turkic tribal warriors who had brought the dynasty to power and who had often fought one another for control of the court. Abbas built new forces of ghulams, slave soldiers drawn mostly from Georgian, Armenian, and Circassian captives from the Caucasus who converted to Islam, along with salaried units of musketeers and artillery. He paid for them by turning provinces held by Qizilbash chiefs into crown lands taxed directly by the shah, and many ghulams became provincial governors. In 1598 Abbas made Isfahan his capital, and he later resettled Armenian merchants in a new suburb, New Julfa, to run the silk trade." },
        { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" },
      ] },
    ],
  },
};

export default {
  forms: [
    { id: "t34", name: "Topic 3.4 Quiz: Comparison in Land-Based Empires", group: "Unit 3: Land-Based Empires",
      items: [
        // ===== Set 1: Du Halde on the Jesuits at the Kangxi Emperor's court (Qing China) =====
        { id: "t34-m01", skill: "u3", type: "mcq", set: "t34-s1", topic: "3.4", reasoning: "Sourcing and situation",
          question: "The author's account of the Jesuits at the Qing court was most likely shaped by his point of view as",
          choices: [
            "a member of the Jesuit order who saw European science as a way to win support for spreading Christianity in China",
            "a Qing official who wanted to show that the emperor kept close control over foreigners at court",
            "a Protestant critic who wanted to expose the methods of Catholic missionaries in Asia",
            "a Dutch merchant who hoped the emperor would grant his company new trading rights",
          ],
          why: [
            "Correct. Du Halde was a French Jesuit, and the excerpt says the Jesuits pleased the emperor because his protection was \"necessary\" to \"the progress of the Gospel.\" His order had a reason to present its work in China as a success.",
            "The author was a French priest, not a Qing official, and the excerpt praises the missionaries rather than the emperor's control over them.",
            "The excerpt admires the Jesuits' skill and success. A Protestant critic would be unlikely to describe Catholic missionaries this way.",
            "The excerpt is about missionaries and religion, not trade, and Du Halde was a priest, not a merchant.",
          ],
          answer: 0 },
        { id: "t34-m02", skill: "u3", type: "mcq", set: "t34-s1", topic: "3.4", reasoning: "Claims and evidence in sources",
          question: "Which of the following pieces of evidence would most directly challenge the claim in the second paragraph that the Chinese \"began to look upon Europeans as their masters\"?",
          choices: [
            "Qing emperors kept Jesuits at court as astronomers and mapmakers, but in the 1720s the Qing state banned Christian missionaries from preaching in the provinces.",
            "The Jesuits presented the emperor with telescopes, clocks, and other European instruments.",
            "The Kangxi Emperor asked Jesuit priests to teach him European mathematics.",
            "European demand for Chinese silk and porcelain grew during the eighteenth century.",
          ],
          why: [
            "Correct. If the Qing used the Jesuits' skills on the court's terms and then restricted their preaching, the emperors were choosing what to take from Europe, not treating Europeans as their masters.",
            "The gifts are the evidence the author gives for his claim, so they support it rather than challenge it.",
            "The emperor's interest in European learning fits the author's claim. It does not show that the Chinese kept their own judgment about Europeans.",
            "This is true, but it shows how Europeans valued Chinese goods. It says nothing about how the Chinese court viewed Europeans.",
          ],
          answer: 0 },
        { id: "t34-m03", skill: "u3", type: "mcq", set: "t34-s1", topic: "3.4", reasoning: "Comparison",
          question: "The Kangxi Emperor's interest in European knowledge, as described in the excerpt, is most similar to which of the following?",
          choices: [
            "Peter the Great's hiring of Western European experts and his travels to study European shipbuilding and technology",
            "The Tokugawa shogunate's expulsion of Catholic missionaries from Japan",
            "Shah Ismail I's decision to make Twelver Shi'ism the official religion of the Safavid state",
            "The Spanish Crown's order that colonists teach Christianity to the Indigenous peoples of the Americas",
          ],
          why: [
            "Correct. Like Kangxi, Peter the Great welcomed European experts and their technical knowledge to strengthen his state, while keeping full power as ruler.",
            "Japan's rulers did the opposite of Kangxi: they drove out the missionaries instead of using their skills at court.",
            "Ismail's policy was about religion and legitimacy, not about learning science or technology from foreigners.",
            "This describes Spain spreading its own religion to people it ruled, not a ruler borrowing knowledge from foreigners.",
          ],
          answer: 0 },
        { id: "t34-m04", skill: "u3", type: "mcq", set: "t34-s1", topic: "3.4", reasoning: "Comparison",
          question: "The Qing court's treatment of the Jesuits described in the excerpt differed most from the policy of the Tokugawa shogunate in Japan in the 1630s, which",
          choices: [
            "banned Christianity, expelled Catholic missionaries, and soon limited European trade to Dutch merchants at Nagasaki",
            "appointed Jesuit priests to direct its official calendar and astronomy bureau",
            "required the daimyo, Japan's regional lords, to convert to Catholicism",
            "allowed Portuguese merchants to trade freely in every Japanese port",
          ],
          why: [
            "Correct. The Tokugawa shoguns saw Christianity as a threat to their control, so they expelled the missionaries and kept only a small, closely watched Dutch trade at Nagasaki. The Qing court kept Jesuits close and used their skills.",
            "This swaps the two states. Jesuits such as Ferdinand Verbiest worked in the Qing astronomy bureau in Beijing, not in Japan.",
            "The shogunate persecuted Christians. It never required its lords to become Catholic.",
            "The Tokugawa shogunate expelled the Portuguese in 1639. It did not open its ports to them.",
          ],
          answer: 0 },

        // ===== Set 2: paired practice passages, slave soldiers (Ottoman and Safavid) =====
        { id: "t34-m05", skill: "u3", type: "mcq", set: "t34-s2", topic: "3.4", reasoning: "Comparison",
          question: "Which of the following comparisons is best supported by the two passages?",
          choices: [
            "Ottoman sultans and Shah Abbas both built forces of converted slave soldiers so that they would depend less on established warrior elites.",
            "Ottoman sultans and Shah Abbas both chose their highest officials through written examinations.",
            "Ottoman sultans and Shah Abbas both recruited their slave soldiers mainly from Turkic tribes in Central Asia.",
            "Ottoman sultans and Shah Abbas both required their slave soldiers to follow Twelver Shi'ism.",
          ],
          why: [
            "Correct. Passage 1 says the devshirme recruits balanced the timar-holding cavalry, and Passage 2 says the ghulams reduced Abbas's dependence on the Qizilbash. In both, converted slaves owed their careers to the ruler.",
            "Neither passage mentions examinations. Choosing officials by examination was the method of Ming and Qing China.",
            "Both passages say the recruits came from Christian peoples, in the Balkans and the Caucasus. The Qizilbash, the Turkic warriors, were the group Abbas wanted to weaken.",
            "The Ottoman sultans were Sunni Muslims and rivals of the Shi'a Safavids. Only the Safavid state promoted Twelver Shi'ism.",
          ],
          answer: 0 },
        { id: "t34-m06", skill: "u3", type: "mcq", set: "t34-s2", topic: "3.4", reasoning: "Comparison",
          question: "Which of the following best explains why the Safavid reforms in Passage 2 resembled the Ottoman system in Passage 1?",
          choices: [
            "Rulers of both empires needed loyal, paid infantry and gunners, which tribal or provincial cavalry did not provide.",
            "The Safavids had conquered Constantinople and adopted the Ottoman government as their own.",
            "The Ottomans and the Safavids belonged to the same branch of Islam and shared their institutions freely.",
            "Both empires had lost wars to Russia under Peter the Great and copied the Russian army.",
          ],
          why: [
            "Correct. Both passages tie the slave soldiers to firearms: the Janissaries fought with guns, and Abbas paired his ghulams with musketeers and artillery. Gunpowder warfare rewarded rulers who could pay and control their own standing troops.",
            "Constantinople was the Ottoman capital from 1453, and the Safavids never took it.",
            "The two empires were rivals divided by religion: the Ottomans were Sunni and the Safavids were Shi'a.",
            "Peter the Great ruled from 1682 to 1725, long after both systems existed, and neither empire copied the Russian army.",
          ],
          answer: 0 },
        { id: "t34-m07", skill: "u3", type: "mcq", set: "t34-s2", topic: "3.4", reasoning: "Comparison",
          question: "The methods described in both passages differed most from the way the Mughal emperor Akbar built his ruling elite, because Akbar",
          choices: [
            "gave high ranks to Hindu Rajput princes, who kept their home kingdoms as long as they served him",
            "took boys from Hindu villages, converted them to Islam, and trained them as palace slaves",
            "chose his officials through civil service examinations on Confucian texts",
            "refused to use gunpowder weapons and relied only on cavalry",
          ],
          why: [
            "Correct. Instead of building an elite of converted slaves cut off from their families, Akbar drew existing Hindu rulers into his service as nobles and let them keep their lands, often sealing the alliance through marriage.",
            "This applies the Ottoman devshirme to India. The Mughals did not recruit their elite this way.",
            "Confucian examinations were used in China, not in Mughal India.",
            "The Mughals used gunpowder weapons from the start: Babur's guns and cannon helped him win at Panipat in 1526.",
          ],
          answer: 0 },
        { id: "t34-m08", skill: "u3", type: "mcq", set: "t34-s2", topic: "3.4", reasoning: "Continuity and change",
          question: "Which of the following describes a change that both the Ottoman and the Safavid states went through by the early eighteenth century?",
          choices: [
            "Their central armies became harder for rulers to control, as Janissary revolts deposed several Ottoman sultans and Afghan invaders took the Safavid capital in 1722.",
            "European powers conquered both empires and divided their lands into colonies.",
            "Both empires abolished their slave-soldier forces and replaced them with elected assemblies.",
            "Both empires reached their largest size because their armies kept winning new territory.",
          ],
          why: [
            "Correct. Over time the Janissaries married, enrolled their sons, and rebelled against sultans, while the weakened Safavid army could not stop the Afghan capture of Isfahan, which ended effective Safavid rule.",
            "European colonial rule over these lands came later. The Habsburgs took Hungary from the Ottomans in 1699, but no European power conquered the Ottoman Empire, and Iran was never made a colony.",
            "Neither empire created elected assemblies in this period. The Ottomans first had a constitution and parliament in 1876.",
            "The Ottoman Empire was largest in the late seventeenth century and lost Hungary after its defeat at Vienna in 1683, and the Safavid state collapsed in 1722.",
          ],
          answer: 0 },

        // ===== SAQ: no source =====
        { id: "t34-q1a", skill: "u3", type: "fr", part: "SAQ 1", sub: "a", topic: "3.4",
          lead: "Answer all parts of the question that follows.",
          prompt: "Identify ONE similarity in the ways rulers of two land-based empires in the period c. 1450 to c. 1750 used religion to legitimize their rule.",
          earns: "The response names two specific land-based empires of the period and one way rulers of both used religion or religious ideas to support their right to rule.",
          yes: [
            "Both the Ottoman sultans and the Safavid shahs presented themselves as defenders of Islam: the Ottomans claimed the title of caliph and protected Mecca and Medina after 1517, and the Safavids made Twelver Shi'ism the religion of the state.",
            "Louis XIV of France claimed to rule by divine right, and the Qing emperors claimed the Mandate of Heaven, so both said their power came from heaven or God.",
            "Both the Mughal emperor Akbar and the Qing emperors sponsored religion at court to win support, Akbar by holding religious debates and the Qing by honoring Confucian rites and Tibetan Buddhist lamas.",
          ],
          no: [
            "\"Both empires had religions.\" This names no empires and no way religion supported a ruler.",
            "\"The Ottomans and the Safavids were both Shi'a.\" This is false: the Ottomans were Sunni.",
            "\"Both the Aztecs and the Abbasids used religion.\" The Abbasid Caliphate ended in 1258, long before this period.",
          ],
          example: "Both the Ottoman and Safavid rulers used Islam to legitimize their rule. After conquering Egypt in 1517, the Ottoman sultans claimed the title of caliph and became protectors of Mecca and Medina, and the Safavid shahs made Twelver Shi'ism the official religion and presented themselves as its defenders.",
          notExample: "Empires used religion because people were religious." },
        { id: "t34-q1b", skill: "u3", type: "fr", part: "SAQ 1", sub: "b", topic: "3.4",
          lead: "Answer all parts of the question that follows.",
          prompt: "Explain ONE difference in the ways two land-based empires in the period c. 1450 to c. 1750 treated subjects who did not share the ruler's religion.",
          earns: "The response describes how one empire treated religious minorities and how a second empire treated them differently, and explains the contrast with specific evidence.",
          yes: [
            "The Ottomans organized Christians and Jews into millets that ran their own religious and legal affairs in return for a special tax, while the Safavids pressed Sunni subjects to convert to Shi'ism.",
            "The Ottoman sultan Bayezid II welcomed Jews who had been expelled from Spain in 1492, while Spain forced Jews and later Muslims to convert or leave.",
            "The Ottomans allowed Christian communities to worship under their own leaders, while Louis XIV of France revoked the Edict of Nantes in 1685 and pressured Protestants to become Catholic.",
          ],
          no: [
            "\"Akbar abolished the jizya and Aurangzeb brought it back.\" This is a change within one empire, the Mughal Empire, not a difference between two empires.",
            "\"Some empires were nice to minorities and others were not.\" This names no empires and gives no evidence.",
            "\"The Safavids allowed Sunni Islam to spread freely.\" This is false: the Safavids promoted Shi'ism and pressed Sunnis to convert.",
          ],
          example: "The Ottoman Empire allowed Christians and Jews to keep their faith and organized them into millets, communities that ran their own religious and legal affairs under their own leaders in return for paying a tax. The Safavid Empire took a harsher approach: after Shah Ismail I made Twelver Shi'ism the state religion, Sunni subjects were pressed to convert. The Ottomans accepted religious difference as long as taxes were paid, while the Safavids tried to make their subjects share the ruler's faith.",
          notExample: "The Ottomans had many religions and Persia was in the Middle East." },
        { id: "t34-q1c", skill: "u3", type: "fr", part: "SAQ 1", sub: "c", topic: "3.4",
          lead: "Answer all parts of the question that follows.",
          prompt: "Explain ONE similarity in the ways rulers of two land-based empires in the period c. 1450 to c. 1750 used gunpowder weapons to expand or defend their territory.",
          earns: "The response names two specific land-based empires and explains, with specific evidence, a way both used gunpowder weapons to gain or hold territory.",
          yes: [
            "Both the Ottomans and the Mughals used cannon to defeat larger or well-defended enemies: Ottoman artillery broke the walls of Constantinople in 1453, and Babur's guns and cannon helped him defeat the Delhi Sultanate at Panipat in 1526.",
            "Both the Ottomans and the Safavids built units of infantry armed with muskets, the Janissaries and Shah Abbas's musketeers, which gave rulers paid soldiers loyal to them.",
            "Both Russia and the Qing used firearms against peoples who fought mainly on horseback: Ivan IV took Kazan in 1552 with artillery, and Qing armies used cannon to conquer the Ming and push into Inner Asia.",
          ],
          no: [
            "\"Both empires had guns.\" This names no empires and does not explain how guns helped them expand or defend territory.",
            "\"The Aztecs and the Inca used gunpowder to build their empires.\" This is false: neither had gunpowder weapons.",
            "\"The Mongols used gunpowder to conquer Eurasia.\" The Mongol conquests were before this period and relied mainly on mounted archers.",
          ],
          example: "Both the Ottoman and Mughal rulers used cannon to win key battles that expanded their empires. In 1453, Mehmed II's huge cannon broke the walls of Constantinople, which became the Ottoman capital. In 1526, Babur used cannon and matchlock guns to defeat the much larger army of the Delhi Sultanate at Panipat, which founded Mughal rule in northern India. In both cases, gunpowder weapons let a ruler defeat enemies that relied on walls or large armies.",
          notExample: "Gunpowder was invented in China and spread to other places." },
      ] },
  ],
};

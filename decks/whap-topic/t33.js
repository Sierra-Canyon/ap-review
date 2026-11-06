// Topic 3.3 Quiz: Empires: Belief Systems
// Sources: every stimulus this quiz uses, keyed by id.
export const sets = {
  "t33-s1": {
    id: "t33-s1", name: "De Thou on the St. Bartholomew's Day Massacre", intro: "Use the source below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "So it was determined to exterminate all the Protestants and the plan was approved by the queen. They discussed for some time whether they should make an exception of the king of Navarre and the prince of Condé. All agreed that the king of Navarre should be spared by reason of the royal dignity and the new alliance. The duke of Guise, who was put in full command of the enterprise, summoned by night several captains of the Catholic Swiss mercenaries from the five little cantons, and some commanders of French companies, and told them that it was the will of the king that, according to God's will, they should take vengeance on the band of rebels while they had the beasts in the toils. Victory was easy and the booty great and to be obtained without danger." },
        { cite: "Jacques-Auguste de Thou, French Catholic statesman and historian (1553 to 1617), who saw the events in Paris as a young man, describing the planning of the St. Bartholomew's Day Massacre of Protestants (Huguenots) in Paris, August 24, 1572, from his History of His Own Time (Histoire des choses arrivées de son temps; French edition Paris, 1659), translated in James Harvey Robinson, ed., Readings in European History, vol. 2 (Boston: Ginn, 1906), pp. 180 to 183, as given in the Internet Modern History Sourcebook, Fordham University. The queen: Catherine de' Medici, mother of King Charles IX of France. The king of Navarre: Henry of Bourbon, a Protestant noble. The new alliance: his marriage to the French king's sister a few days before. The five little cantons: Catholic districts of Switzerland.", url: "https://sourcebooks.web.fordham.edu/mod/1572stbarts.asp", kind: "primary" },
      ] },
    ],
  },
  "t33-s2": {
    id: "t33-s2", name: "Badauni on religion at Akbar's court", intro: "Use the source below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "Soon after there came from Persia Mullá Muḥammad of Yazd, who got the name of Yazídí, and attaching himself to the Emperor commenced openly to revile the Çaḥabah [the Companions of the Prophet Muhammad] ... and tried hard to make him a Shí'ah. But he was soon left behind by Bír Baṛ ... and by Shaikh Abu-l-Fazl, and Ḥakím Abu-l-Fatḥ, who successfully turned the Emperor from the Islám, and led him to reject inspiration, prophetship, the miracles of the prophet ... and even the whole law, so that I could no longer bear their company." },
        { p: "... Soon after, the observance of the five prayers, and the fasts, and the belief in everything connected with the prophet, were put down as vain superstitions, and man's reason was acknowledged as the only basis of religion. Portuguese priests also came frequently; and His Majesty enquired into the articles of their belief, which are based upon reason ..." },
        { cite: "'Abd al-Qadir Badauni (spelled Al-Badáóní in this translation), Sunni Muslim scholar who served at the court of the Mughal emperor Akbar, Muntakhab-ut-Tawárikh (Selections from Histories), vol. 2 (completed c. 1596), describing religious discussions at Akbar's court in the late 1570s, translated by W. H. Lowe, with a preface by E. B. Cowell dated 1889 (Calcutta: Asiatic Society of Bengal, Bibliotheca Indica), pp. 211 to 212, as given by the Persian Literature in Translation project, Packard Humanities Institute. Bír Baṛ: Birbal, a Hindu courtier and close companion of Akbar. Shaikh Abu-l-Fazl: Akbar's adviser and official court historian. Ḥakím Abu-l-Fatḥ: a Persian physician at the court. Shí'ah: a Shi'a Muslim.", url: "https://persian.packhum.org/text/003601022/4", kind: "primary" },
      ] },
    ],
  },
  "t33-s3": {
    id: "t33-s3", name: "Making Safavid Iran Shi'a", intro: "Use the passage below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "Many historians argue that Shi'ism became the faith of most Iranians because the Safavid state worked for two centuries to make it so. When Shah Ismail I declared Twelver Shi'ism the religion of his new state in 1501, most of his subjects were Sunni, and few Shi'a scholars lived in Iran. Ismail and his successors invited Shi'a scholars from Arab lands, especially Jabal Amil in what is now Lebanon, and gave them posts, salaries, and schools. Preachers were ordered to curse the first three caliphs, whom Sunnis honor. Public mourning for Husayn, the grandson of the Prophet killed at Karbala in 680, became a yearly state ritual. Shah Abbas I walked from Isfahan to the shrine of the Imam Reza at Mashhad in 1601 and richly endowed it. By the early eighteenth century most Iranians were Shi'a." },
        { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" },
      ] },
    ],
  },
  "t33-s4": {
    id: "t33-s4", name: "Calvin on predestination", intro: "Use the passage below to answer all parts of the question that follows.",
    sources: [
      { title: "Source", blocks: [
        { p: "THE covenant of life not being equally preached to all, and among those to whom it is preached not always finding the same reception, this diversity discovers the wonderful depth of the Divine judgment. Nor is it to be doubted that this variety also follows, subject to the decision of God's eternal election. ..." },
        { p: "Predestination we call the eternal decree of God, by which He has determined in Himself what would have to become of every individual of mankind. For they are not all created with a similar destiny; but eternal life is fore-ordained for some, and eternal damnation for others. Every man, therefore, being created for one or the other of these ends, we say, he is predestinated either to life or to death." },
        { cite: "John Calvin, French Protestant reformer who led the church in Geneva, Institutes of the Christian Religion (first published in Latin in 1536; final Latin edition 1559), from the chapter on predestination (Book 3, chapter 21), in Oliver J. Thatcher, ed., The Library of Original Sources, vol. 5 (Milwaukee: University Research Extension Co., 1907), pp. 141 to 150, as modernized by Jerome S. Arkenberg for the Internet Modern History Sourcebook, Fordham University. Discovers: reveals. Election: God's choice of those who will be saved.", url: "https://sourcebooks.web.fordham.edu/mod/calvin-predest.asp", kind: "primary" },
      ] },
    ],
  },
};

export default {
  forms: [
    { id: "t33", name: "Topic 3.3 Quiz: Empires: Belief Systems", group: "Unit 3: Land-Based Empires",
      items: [
        // ===== Set 1: De Thou on the St. Bartholomew's Day Massacre (France, 1572) =====
        { id: "t33-m01", skill: "u3", type: "mcq", set: "t33-s1", topic: "3.3", reasoning: "Contextualization",
          question: "The events described in the passage are best understood in the context of which of the following?",
          choices: [
            "Conflict in France between Catholics and Protestants that grew as Calvinist ideas spread among French nobles and townspeople in the sixteenth century",
            "The Thirty Years' War between Catholic and Protestant states in the Holy Roman Empire",
            "The break of the English church from the authority of the pope under Henry VIII",
            "The advance of Ottoman armies into central Europe under Suleiman I",
          ],
          why: [
            "Correct. Calvinism spread widely in France from the 1540s, and French Protestants, called Huguenots, included powerful nobles such as the king of Navarre. The Wars of Religion between Catholics and Huguenots lasted from 1562 to 1598, and the massacre of 1572 was one of their worst events.",
            "The Thirty Years' War was a religious war, but it began in 1618, decades after this massacre, and was fought mainly in the Holy Roman Empire, not in Paris.",
            "Henry VIII's break with Rome (1534) was part of the Reformation, but it happened in England and was not a conflict between French Catholics and Protestants.",
            "Suleiman I's armies did threaten central Europe in this century, but the passage describes Christians killing other Christians over religion, not a war with the Ottomans.",
          ],
          answer: 0 },
        { id: "t33-m02", skill: "u3", type: "mcq", set: "t33-s1", topic: "3.3", reasoning: "Claims and evidence in sources",
          question: "The passage best supports which of the following claims about religious conflict in Europe in the sixteenth century?",
          choices: [
            "Religious and political motives were closely tied, as leaders called on both the king's will and God's will to justify violence against a religious minority.",
            "The violence was carried out mainly by foreign armies that invaded France without the king's approval.",
            "The pope planned the attack and gave orders directly to the Catholic commanders in Paris.",
            "The new royal marriage had settled the disputes between French Catholics and Protestants.",
          ],
          why: [
            "Correct. The duke of Guise told his captains that the killing was \"the will of the king\" and \"according to God's will,\" and the leaders spared the king of Navarre for political reasons, \"the royal dignity and the new alliance.\" Religion and politics worked together.",
            "Swiss mercenaries took part, but the passage says French companies joined them, the queen approved the plan, and the order was presented as the king's will.",
            "The passage names the queen and the duke of Guise as the planners. It says nothing about the pope giving orders.",
            "The passage mentions \"the new alliance,\" but the massacre that followed shows that the marriage did not end the conflict.",
          ],
          answer: 0 },
        { id: "t33-m03", skill: "u3", type: "mcq", set: "t33-s1", topic: "3.3", reasoning: "Continuity and change",
          question: "Which of the following later developments most directly gave legal protection to the religious group targeted in the passage?",
          choices: [
            "The king of Navarre, who became King Henry IV of France, issued the Edict of Nantes in 1598, which allowed Protestants to worship in many places.",
            "The Peace of Augsburg in 1555 let each German prince choose whether his lands would be Lutheran or Catholic.",
            "The Council of Trent, which met from 1545 to 1563, restated Catholic teaching and called for reform of the clergy.",
            "Louis XIV revoked the Edict of Nantes in 1685 and ordered Protestant churches destroyed.",
          ],
          why: [
            "Correct. Henry of Navarre, spared in 1572, became king in 1589 and converted to Catholicism to win Paris. In 1598 his Edict of Nantes gave French Protestants the right to worship in many places and to hold office, which ended the Wars of Religion.",
            "The Peace of Augsburg came before the massacre, applied to the Holy Roman Empire, not France, and recognized only Lutherans, not Calvinists like the Huguenots.",
            "The Council of Trent was the Catholic Church's answer to the Reformation. It defended Catholic doctrine and gave Protestants no legal rights.",
            "This is a later change, but it took protection away from French Protestants rather than granting it.",
          ],
          answer: 0 },

        // ===== Set 2: Badauni on religion at Akbar's court (Mughal India) =====
        { id: "t33-m04", skill: "u3", type: "mcq", set: "t33-s2", topic: "3.3", reasoning: "Sourcing and situation",
          question: "The author's point of view in the passage is best described as that of",
          choices: [
            "a Sunni Muslim scholar at the court who disapproved of the emperor's turn away from Islamic practice",
            "a Shi'a scholar who welcomed the Persian mullah's influence on the emperor",
            "an official court historian writing to praise the emperor's religious policies",
            "a Hindu courtier who supported the emperor's interest in other faiths",
          ],
          why: [
            "Correct. Badauni was an orthodox Sunni scholar. He calls the emperor's advisers people whose company he \"could no longer bear\" and describes the dropping of prayers and fasts as a turn \"from the Islám.\"",
            "Badauni complains that the mullah reviled the Companions of the Prophet, whom Sunnis honor. He does not welcome the effort to make Akbar a Shi'a.",
            "Abu'l-Fazl, whom Badauni names as one of the men leading Akbar away from Islam, was the official court historian who praised Akbar. Badauni writes as a critic, not a supporter.",
            "Badauni was a Muslim, and he criticizes Birbal, the Hindu courtier, as one of the men who turned the emperor away from Islam.",
          ],
          answer: 0 },
        { id: "t33-m05", skill: "u3", type: "mcq", set: "t33-s2", topic: "3.3", reasoning: "Claims and evidence in sources",
          question: "Which of the following pieces of evidence would most directly challenge Badauni's claim that Akbar's advisers \"turned the Emperor from the Islám\"?",
          choices: [
            "Akbar never formally gave up Islam, and the Din-i Ilahi, the circle of devotion he created in the 1580s, had only a small number of members at court.",
            "Akbar ended the jizya tax on non-Muslims in 1564.",
            "Portuguese Jesuit missionaries arrived at Akbar's court in 1580 and debated Muslim scholars there.",
            "Abu'l-Fazl wrote an official history that praised Akbar as a wise and just ruler.",
          ],
          why: [
            "Correct. If Akbar remained a Muslim in name and his new circle of devotion stayed small and was never imposed on his subjects, then he widened his religious interests more than he left Islam, which weakens Badauni's charge.",
            "This is true, but ending a tax that Islamic law placed on non-Muslims fits Badauni's complaint that Akbar set Islamic law aside. It supports the claim rather than challenging it.",
            "This is true, but the Jesuits' visits fit Badauni's report that the emperor studied Christian beliefs. They support the claim.",
            "Praise of Akbar as a ruler says nothing about whether he stayed a Muslim, so it does not test Badauni's claim.",
          ],
          answer: 0 },
        { id: "t33-m06", skill: "u3", type: "mcq", set: "t33-s2", topic: "3.3", reasoning: "Continuity and change",
          question: "Which of the following later Mughal developments most directly reversed the changes at court that the author describes?",
          choices: [
            "Aurangzeb ruled according to Islamic law, ordered a new collection of legal rulings based on it, and brought back the jizya tax on non-Muslims in 1679.",
            "Jahangir allowed English merchants of the East India Company to trade at Surat.",
            "Shah Jahan built the Taj Mahal at Agra as a tomb for his wife.",
            "Jahangir, Akbar's son, kept Hindu Rajput nobles in high ranks in the Mughal army and government.",
          ],
          why: [
            "Correct. Badauni complains that Islamic prayers, fasts, and law were set aside at Akbar's court. Aurangzeb (ruled 1658 to 1707) did the opposite: he ruled as a strict Sunni, sponsored a collection of rulings in Islamic law, restored the jizya, and destroyed some Hindu temples.",
            "This is true, but it was a trade policy. It did not bring back the Islamic practice that Badauni says Akbar abandoned.",
            "This is true, but building a tomb did not change the court's religious policy or restore Islamic law.",
            "Keeping Hindu nobles in high posts continued Akbar's policy of sharing power across religious lines. It did not reverse it.",
          ],
          answer: 0 },

        // ===== Set 3: Making Safavid Iran Shi'a (practice passage) =====
        { id: "t33-m07", skill: "u3", type: "mcq", set: "t33-s3", topic: "3.3", reasoning: "Causation",
          question: "Which of the following best explains why the Safavid shahs worked to spread Shi'ism among their subjects, as described in the passage?",
          choices: [
            "A shared Shi'a faith set Safavid subjects apart from the Sunni Ottoman Empire, the Safavids' main rival, and tied them to the dynasty.",
            "Most Iranians were already Shi'a when Ismail I came to power, so the shahs were following their subjects' wishes.",
            "The Safavids needed Shi'a allies in Europe against the Habsburgs.",
            "The Safavids had gained control of Mecca and Medina and wished to make them Shi'a centers.",
          ],
          why: [
            "Correct. The Sunni Ottomans fought the Safavids for most of the sixteenth century, beginning at Chaldiran in 1514. A state faith that the Ottomans rejected gave Safavid subjects a separate identity and made loyalty to Shi'ism a form of loyalty to the shah.",
            "The passage says most of Ismail's subjects were Sunni in 1501. The shahs had to bring in scholars from outside Iran because Shi'ism was weak there.",
            "There were no Shi'a powers in Europe. The Safavids did contact the Habsburgs as fellow enemies of the Ottomans, but that was a military choice, not a religious one.",
            "The Ottomans, not the Safavids, controlled Mecca and Medina after 1517.",
          ],
          answer: 0 },
        { id: "t33-m08", skill: "u3", type: "mcq", set: "t33-s3", topic: "3.3", reasoning: "Comparison",
          question: "The Safavid policy described in the passage is most similar to which of the following policies in the period c. 1450 to c. 1750?",
          choices: [
            "Ferdinand and Isabella of Spain ordered the Jews of their kingdoms in 1492 to become Christian or leave.",
            "The Ottoman sultans let Christian and Jewish communities, organized as millets, follow their own religious laws.",
            "The Mughal emperor Akbar promoted sulh-i kull, peace among all religions, at his court.",
            "King Henry IV of France granted Protestants the right to worship in the Edict of Nantes.",
          ],
          why: [
            "Correct. Both the Safavid shahs and the Spanish monarchs used the power of the state to make their subjects follow one official faith, Shi'a Islam in Iran and Catholic Christianity in Spain.",
            "The millet system let religious minorities keep their own faiths. The passage describes a state pushing one faith on all its subjects.",
            "Akbar's policy of peace among religions is the opposite of a state requiring one faith.",
            "The Edict of Nantes allowed two faiths to exist side by side in France, while the Safavids worked to make all subjects Shi'a.",
          ],
          answer: 0 },

        // ===== SAQ 1: Calvin on predestination (primary source) =====
        { id: "t33-q1a", skill: "u3", type: "fr", set: "t33-s4", part: "SAQ 1", sub: "a", topic: "3.3",
          lead: "Use the passage below to answer all parts of the question that follows.",
          prompt: "Describe the claim Calvin makes in the passage about how it is decided which people will be saved.",
          earns: "The response describes Calvin's claim that God decided in advance, by an eternal decree, which people would be saved and which would be damned.",
          yes: [
            "Calvin claims that God has already decided, before people are born, who will have eternal life and who will face damnation.",
            "Calvin says salvation is set by God's \"eternal decree,\" so each person is \"predestinated\" to life or death and not everyone is created for the same end.",
            "Calvin argues that the fact that some people accept the Christian message and others reject it shows God's choice, or election, of who is saved.",
          ],
          no: [
            "\"Calvin says people are saved by doing good works.\" This is the opposite of the passage, which says God's decree decides.",
            "\"Calvin talks about God.\" This names the subject but does not describe the claim.",
            "\"Calvin says the pope decides who is saved.\" The passage gives the decision to God alone, and Calvin rejected the pope's authority.",
          ],
          example: "Calvin claims that God decided in advance, through an \"eternal decree,\" what would happen to every person. Some are \"fore-ordained\" to eternal life and others to eternal damnation, so a person's salvation is set by God's choice, not by the person's own actions.",
          notExample: "Calvin was a religious leader who wrote about the Bible." },
        { id: "t33-q1b", skill: "u3", type: "fr", set: "t33-s4", part: "SAQ 1", sub: "b", topic: "3.3",
          lead: "Use the passage below to answer all parts of the question that follows.",
          prompt: "Explain how the ideas of Protestant reformers such as Calvin challenged the authority of the Roman Catholic Church in the sixteenth century.",
          earns: "The response explains a specific way Protestant ideas weakened the Catholic Church's authority, such as by denying that the Church's sacraments, indulgences, priests, or pope controlled salvation.",
          yes: [
            "If God alone decides who is saved, then the Church's sacraments, indulgences, and priests cannot earn anyone salvation, which undercut the main reason people relied on the Church.",
            "Protestant reformers such as Luther and Calvin taught that the Bible, not the pope or Church tradition, was the final authority, so believers and local churches could reject the pope's rulings.",
            "Calvinist churches in Geneva, France, the Netherlands, and Scotland were run by ministers and elders instead of bishops loyal to Rome, which removed whole regions from the pope's control.",
          ],
          no: [
            "\"Calvin disagreed with the Church.\" This does not explain how his ideas challenged its authority.",
            "\"Calvin started the Reformation by posting the 95 Theses.\" This is inaccurate: Luther wrote the 95 Theses in 1517.",
            "\"Protestant ideas led to the Crusades.\" The Crusades took place centuries earlier.",
          ],
          example: "Calvin taught that God's eternal decree alone decides who is saved. If that is true, then the Catholic Church's sacraments, priests, and indulgences cannot change a person's fate, so people had less reason to obey the Church. Calvinists in Geneva and Scotland set up churches led by ministers and elders rather than bishops, which took those areas out from under the pope's authority.",
          notExample: "Calvin lived in the sixteenth century and wrote a book." },
        { id: "t33-q1c", skill: "u3", type: "fr", set: "t33-s4", part: "SAQ 1", sub: "c", topic: "3.3",
          lead: "Use the passage below to answer all parts of the question that follows.",
          prompt: "Explain ONE way the Roman Catholic Church responded to the spread of Protestant ideas, such as those in the passage, in the period c. 1450 to c. 1750.",
          earns: "The response names a specific Catholic response to Protestantism and explains how it was meant to stop the spread of Protestant ideas or strengthen the Catholic Church.",
          yes: [
            "The Council of Trent (1545 to 1563) restated Catholic teaching that both faith and good works matter for salvation and that the seven sacraments are needed, and it ordered reforms such as seminaries to train better priests, so the Church could answer Protestant criticism.",
            "The Jesuits, founded by Ignatius of Loyola and approved by the pope in 1540, opened schools and sent missionaries to win back Protestant regions and spread Catholicism in Asia and the Americas.",
            "The Church created an Index of Prohibited Books and used the Inquisition to keep Protestant writings and teachings from spreading in Catholic lands.",
          ],
          no: [
            "\"The Church became Protestant.\" This is false.",
            "\"The Church responded.\" This does not name or explain a specific response.",
            "\"The Church issued the Edict of Nantes.\" The Edict of Nantes was issued by King Henry IV of France, and it protected Protestants.",
          ],
          example: "The Catholic Church called the Council of Trent, which met from 1545 to 1563. The council rejected Protestant teachings such as salvation by faith alone, and it restated that good works and the sacraments matter for salvation. It also ordered seminaries to train priests, which answered Protestant complaints about poorly educated and corrupt clergy and helped the Church hold on to its followers.",
          notExample: "The Catholic Church was angry at Calvin." },
      ] },
  ],
};

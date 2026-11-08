// Topic 5.1 Quiz: The Enlightenment
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why) => ({ id: "t51-m0" + n, skill: "u5", type: "mcq", set, topic: "5.1", reasoning, question, choices, why, answer: 0 });
const Q = (sub, prompt, earns, yes, no, example, notExample) => ({ id: "t51-q1" + sub, skill: "u5", type: "fr", set: "t51-s3", part: "SAQ 1", sub, topic: "5.1", lead: SAQ, prompt, earns, yes, no, example, notExample });

export const sets = {
  "t51-s1": {
    id: "t51-s1", name: "Mary Wollstonecraft to Talleyrand, 1792", intro: ONE,
    sources: [{ title: "Source", blocks: [
      { p: "Contending for the rights of women, my main argument is built on this simple principle, that if she be not prepared by education to become the companion of man, she will stop the progress of knowledge, for truth must be common to all, or it will be inefficacious with respect to its influence on general practice. ... If children are to be educated to understand the true principle of patriotism, their mother must be a patriot ... but the education and situation of woman, at present, shuts her out from such investigations." },
      { p: "... If the abstract rights of man will bear discussion and explanation, those of woman, by a parity of reasoning, will not shrink from the same test ... Consider, I address you as a legislator, whether, when men contend for their freedom, and to be allowed to judge for themselves, respecting their own happiness, it be not inconsistent and unjust to subjugate women, even though you firmly believe that you are acting in the manner best calculated to promote their happiness? Who made man the exclusive judge, if woman partake with him the gift of reason?" },
      { cite: "Mary Wollstonecraft, English writer, A Vindication of the Rights of Woman (London, 1792), dedication to Charles Maurice de Talleyrand-Périgord, a member of France's revolutionary National Assembly, who in 1791 had presented a plan for national education that gave girls only a limited home education, as published by Project Gutenberg.", url: "https://www.gutenberg.org/cache/epub/3420/pg3420-images.html", kind: "primary" },
    ] }],
  },
  "t51-s2": {
    id: "t51-s2", name: "Enlightened monarchs", intro: "Use the passage below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that some of the most powerful monarchs of the late 1700s used Enlightenment ideas to strengthen their own rule rather than to share it. Frederick II of Prussia, who wrote to and hosted Voltaire, called himself \"the first servant of the state,\" ended torture in most cases, and allowed religious toleration, yet kept the nobility's power over serfs. Catherine II of Russia corresponded with Diderot and drafted instructions for a new law code that borrowed from Montesquieu and Beccaria, but after a great peasant revolt in 1773 and 1774 she gave nobles even more control over their serfs. In the Habsburg lands, Joseph II issued an edict of toleration for Protestants and Jews in 1781 and began abolishing serfdom that year, but many of his reforms were reversed after his death. None of these rulers accepted the idea that the people should choose their government." },
      PRACTICE,
    ] }],
  },
  "t51-s3": {
    id: "t51-s3", name: "The campaign against the slave trade", intro: SAQ,
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that the British campaign against the Atlantic slave trade joined Enlightenment arguments about natural rights with religious conviction. Quakers and evangelical Christians formed the Society for Effecting the Abolition of the Slave Trade in 1787. Its members collected evidence from sailors, printed a diagram of the slave ship Brookes showing people packed below deck, organized a boycott of slave-grown sugar, and sent petitions with hundreds of thousands of signatures to Parliament. Formerly enslaved Africans living in Britain, such as Olaudah Equiano and Ottobah Cugoano, published accounts of their own lives. Parliament abolished the British slave trade in 1807 and slavery itself in most of the British Empire in 1833, though plantation owners received large payments in compensation and the people freed received nothing." },
      PRACTICE,
    ] }],
  },
};

export default {
  forms: [
    { id: "t51", name: "Topic 5.1 Quiz: The Enlightenment", group: "Unit 5: Revolutions",
      items: [
        // ===== Set 1: Wollstonecraft =====
        M(1, "t51-s1", "Sourcing and situation", "Wollstonecraft most likely addressed her book to Talleyrand because he",
          ["was a lawmaker in revolutionary France who had proposed an education plan that did not treat girls equally", "was the king of France", "had written a book defending women's equality", "was the leader of the British Parliament"],
          ["Correct. She addresses him \"as a legislator\" and argues that men who demand freedom cannot justly deny it to women.",
            "France's king was Louis XVI; Talleyrand was a member of the National Assembly.",
            "His education plan limited girls' education, which is why she challenges him.",
            "He was French, not British."]),
        M(2, "t51-s1", "Claims and evidence in sources", "Which statement from the source best shows Wollstonecraft applying Enlightenment reasoning to women?",
          ["\"If the abstract rights of man will bear discussion and explanation, those of woman, by a parity of reasoning, will not shrink from the same test\"", "\"I address you as a legislator\"", "\"their mother must be a patriot\"", "\"truth must be common to all\""],
          ["Correct. She argues that the same logic used for the rights of man must apply equally to women.",
            "This tells whom she is addressing, not her reasoning about rights.",
            "This links women's education to patriotism but does not extend the idea of natural rights.",
            "This supports her point but does not apply the rights of man to women as directly."]),
        M(3, "t51-s1", "Contextualization", "The source is best understood in the context of which development?",
          ["Revolutionary France's Declaration of the Rights of Man and of the Citizen, which proclaimed rights but left women without political rights", "The Congress of Vienna's restoration of monarchy in Europe", "The Industrial Revolution's spread to Germany", "The Meiji Restoration in Japan"],
          ["Correct. She asks why the \"rights of man\" proclaimed in 1789 should not apply to women.",
            "The Congress of Vienna met in 1814 and 1815, after she wrote.",
            "Her argument concerns rights and education, not industry.",
            "The Meiji Restoration came in 1868."]),
        M(4, "t51-s1", "Continuity and change", "Arguments like Wollstonecraft's most directly influenced which later development?",
          ["Women's rights movements of the 1800s, such as the meeting at Seneca Falls in 1848", "The end of the transatlantic slave trade in 1807", "The Napoleonic Code's limits on women's property rights", "The partition of Africa at the Berlin Conference"],
          ["Correct. Later activists built on the claim that women share reason and rights with men.",
            "Abolition of the slave trade grew from a different campaign.",
            "The Napoleonic Code restricted women's rights, the opposite of her argument.",
            "The Berlin Conference concerned colonial claims in Africa."]),
        // ===== Set 2: Enlightened monarchs =====
        M(5, "t51-s2", "Claims and evidence in sources", "The passage best supports which claim about the \"enlightened\" monarchs?",
          ["They adopted some Enlightenment reforms but kept absolute power and much of the old social order.", "They gave their subjects the right to elect the government.", "They rejected Enlightenment thinkers entirely.", "They abolished serfdom permanently in Russia and Prussia."],
          ["Correct. The passage lists reforms such as toleration but says none accepted that the people should choose their government.",
            "The passage says none of them accepted this idea.",
            "The passage says they corresponded with and hosted Enlightenment writers.",
            "Catherine strengthened serfdom, and Frederick kept the nobles' power over serfs."]),
        M(6, "t51-s2", "Causation", "According to the passage, Catherine II gave nobles more power over their serfs mainly because",
          ["a great peasant revolt in 1773 and 1774 made her rely on the nobility to keep order", "Diderot advised her to strengthen serfdom", "the French Revolution had begun", "Montesquieu called for more serfdom"],
          ["Correct. After the revolt, often called Pugachev's Rebellion, she leaned on the nobles to control the countryside.",
            "Diderot was a critic of serfdom.",
            "The French Revolution began in 1789, after these changes.",
            "Montesquieu did not call for serfdom."]),
        M(7, "t51-s2", "Comparison", "The rule of these monarchs differed most from the government created by the American Revolution in that",
          ["the monarchs kept power in their own hands, while the American constitution based authority on elected representatives", "the monarchs ended slavery, while the Americans kept it", "the monarchs had no interest in law codes", "the American government was ruled by a king"],
          ["Correct. The monarchs reformed from above, while the Americans built a republic in which voters chose leaders.",
            "Serfdom, not slavery, is discussed, and it largely survived in Russia and Prussia.",
            "Catherine drafted instructions for a new law code.",
            "The United States became a republic."]),
        M(8, "t51-s2", "Developments and processes", "Joseph II's edict of toleration of 1781 best illustrates which Enlightenment idea?",
          ["Religious freedom and toleration of minority faiths", "The divine right of kings", "Mercantilism", "Social Darwinism"],
          ["Correct. Writers such as Voltaire and Locke argued that the state should tolerate different faiths.",
            "Divine right was an older justification for absolute rule.",
            "Mercantilism is an economic policy.",
            "Social Darwinism came in the late 1800s."]),
        // ===== SAQ: The campaign against the slave trade =====
        Q("a", "Identify ONE method, described in the passage, that British abolitionists used to build support for ending the slave trade.",
          "The response names one method from the passage.",
          ["They printed a diagram of the slave ship Brookes showing people packed below deck.", "They organized a boycott of slave-grown sugar.", "They sent petitions with hundreds of thousands of signatures to Parliament."],
          ["\"They wanted to end slavery.\" This names a goal, not a method.", "\"They fought a war against slave traders.\" The passage describes no war.", "\"Parliament abolished the slave trade in 1807.\" This is the result, not a method."],
          "The passage says abolitionists organized a boycott of sugar grown by enslaved people, so ordinary British families could pressure the trade by changing what they bought.",
          "They worked hard."),
        Q("b", "Explain ONE way Enlightenment ideas contributed to movements to end slavery or the slave trade in the period 1750 to 1900.",
          "The response connects a specific Enlightenment idea to a specific antislavery movement and explains the link.",
          ["The idea that all people have natural rights to liberty made slavery look like a violation of those rights, an argument used by British and American abolitionists.", "Revolutionary declarations of the rights of man led enslaved people in Saint-Domingue to claim liberty, which helped spark the Haitian Revolution.", "Enlightenment confidence in reason led reformers to collect evidence and argue publicly that slavery was cruel and unjust."],
          ["\"Enlightenment thinkers liked freedom.\" This does not connect to a movement against slavery.", "\"All Enlightenment thinkers opposed slavery.\" This is false; some defended it or ignored it.", "\"The slave trade ended in 1650.\" This is wrong."],
          "Enlightenment writers argued that all people are born with natural rights, including liberty. Abolitionists used this idea to argue that enslaving people violated rights that belonged to everyone, and in Saint-Domingue enslaved people used the French Revolution's language of rights to justify their revolt in 1791.",
          "The Enlightenment was about ideas."),
        Q("c", "Explain ONE way the end of slavery in the British Empire did NOT bring full equality to the people freed.",
          "The response explains a specific limit on freedom or equality after emancipation.",
          ["Plantation owners received payments in compensation, while the freed people received nothing, so wealth stayed with the planters.", "Under the \"apprenticeship\" system, people freed in 1834 still had to work for their former owners for several more years.", "Freed people in the Caribbean often had little land and had to work for low wages on plantations, so they remained poor and without political power."],
          ["\"Slavery ended in 1833.\" This restates the passage without explaining a limit.", "\"Freed people received large payments.\" This is wrong: the passage says owners, not the freed people, were paid.", "\"Everyone became equal.\" This contradicts the prompt."],
          "The passage says planters received large payments while the people who had been enslaved received nothing. In the Caribbean, most freed people had no land and had to keep working on the same plantations for low wages, so emancipation ended legal slavery but not their poverty or lack of power.",
          "Freedom was hard."),
      ] },
  ],
};

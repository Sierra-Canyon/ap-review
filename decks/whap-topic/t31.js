// Topic 3.1 Quiz: Empires Expand
// Sources: every stimulus this quiz uses, keyed by id.
export const sets = {
  "t31-s1": {
    id: "t31-s1", name: "Babur at Panipat", intro: "Use the source below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "At this station I directed that, according to the custom of Rūm, the gun-carriages should be connected together with twisted bull-hides as with chains. Between every two gun-carriages were six or seven tūras or breast-works. The matchlockmen stood behind these guns and tūras, and discharged their matchlocks. ..." },
        { p: "The army of the enemy opposed to us was estimated at one hundred thousand men; the elephants of the emperor and his officers were said to amount to nearly a thousand. He possessed the accumulated treasures of his father and grandfather, in current coin, ready for use. ..." },
        { p: "... Mustafa, the cannoneer, on the left of the centre, managed his artillery with great effect. ... By the grace and mercy of Almighty God, this arduous undertaking was rendered easy for me, and this mighty army, in the space of half a day, laid in the dust." },
        { cite: "Babur (Zahir al-Din Muhammad Babur), Central Asian ruler of Kabul and founder of the Mughal dynasty in India, his memoirs (the Baburnama, written in Chaghatai Turkish), from the events of the year 932 AH, describing his camp at Panipat and his battle there with Sultan Ibrahim Lodi of Delhi in April 1526. From Memoirs of Zehīr-ed-Dīn Muhammed Bābur, Emperor of Hindustan, translated by John Leyden and William Erskine (first published 1826), annotated and revised by Sir Lucas King, vol. 2 (London: Humphrey Milford, Oxford University Press, 1921), as transcribed by the Packard Humanities Institute, Persian Literature in Translation. Footnote markers omitted. Rūm: the lands of the Ottoman Empire. Tūras: movable wooden shields. The emperor: Sultan Ibrahim.", url: "https://persian.packhum.org/text/003501052/2", kind: "primary" },
      ] },
    ],
  },
  "t31-s2": {
    id: "t31-s2", name: "The Qing push into Central Asia", intro: "Use the passage below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "Many historians argue that the Qing dynasty, founded by the Manchus, became one of the largest empires of its age because its rulers saw the steppe frontier as the greatest danger to their power. In the 1690s, the Kangxi Emperor led armies in person against Galdan, the leader of the Zunghar Mongols, who was building a rival state in Central Asia. In the 1750s, the Qianlong Emperor's armies destroyed the Zunghar state, and the Qing came to rule Mongolia and the lands later called Xinjiang and to hold Tibet under their protection. The Qing won these wars with cannon and muskets, with Mongol allies who fought in the banner armies, and with grain carried over long supply lines across the deserts. The result was an empire far larger than the Ming state it had replaced." },
        { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" },
      ] },
    ],
  },
  "t31-s3": {
    id: "t31-s3", name: "Why the Ottomans grew", intro: "Use the passage below to answer all parts of the question that follows.",
    sources: [
      { title: "Source", blocks: [
        { p: "Many historians argue that the Ottoman Empire grew so quickly after 1450 because its sultans combined new weapons with flexible ways of ruling conquered peoples. Gunpowder mattered. In 1516 and 1517, Ottoman armies using cannon and Janissary musketeers defeated the Mamluk cavalry and took Syria and Egypt, and in 1526 they crushed the army of Hungary at Mohács. But the sultans also knew how to hold what they took. They often left local leaders and religious communities in place as long as they paid taxes, and they granted the tax income of rural land to cavalrymen who served in their wars. By the 1530s, the Ottomans ruled Egypt, Syria, Iraq, much of southeastern Europe, and the holy cities of Mecca and Medina." },
        { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" },
      ] },
    ],
  },
};

export default {
  forms: [
    { id: "t31", name: "Topic 3.1 Quiz: Empires Expand", group: "Unit 3: Land-Based Empires",
      items: [
        // ===== Set 1: Babur at Panipat (Mughal) =====
        { id: "t31-m01", skill: "u3", type: "mcq", set: "t31-s1", topic: "3.1", reasoning: "Contextualization",
          question: "The military methods Babur describes are best understood in the context of which development?",
          choices: [
            "The spread of gunpowder weapons and Ottoman military techniques among land-based empires in Asia",
            "The Mongol conquests, which relied mainly on mounted archers to defeat settled states",
            "The Portuguese use of armed ships to seize ports and control trade in the Indian Ocean",
            "The decline of the Delhi Sultanate after Timur's army sacked Delhi in 1398",
          ],
          why: [
            "Correct. Babur chained his gun-carriages together \"according to the custom of Rūm,\" that is, the Ottoman way, and placed matchlockmen behind them. In the early sixteenth century, the Ottomans, Safavids, and Mughals all built armies around cannon and handguns.",
            "Babur descended from Genghis Khan and Timur, but the excerpt describes cannon and matchlocks, not the bow-and-cavalry warfare of the thirteenth-century Mongols.",
            "The Portuguese did arrive in the Indian Ocean in this period, but Babur fought a land battle in northern India with methods borrowed from the Ottomans, not from Europeans at sea.",
            "This is true, and it helps explain why the Delhi Sultanate was weak, but it does not explain where Babur's guns, gun-carriages, and matchlockmen came from.",
          ],
          answer: 0 },
        { id: "t31-m02", skill: "u3", type: "mcq", set: "t31-s1", topic: "3.1", reasoning: "Causation",
          question: "The victory Babur describes most directly led to which development?",
          choices: [
            "The founding of the Mughal Empire, which came to rule most of the Indian subcontinent",
            "The founding of the Delhi Sultanate by Turkic Muslim rulers from Central Asia",
            "The rise of the Maratha state, which fought Mughal rule in western India",
            "The Safavid decision to make Shi'a Islam the official religion of Persia",
          ],
          why: [
            "Correct. Babur's victory at Panipat in 1526 ended the Lodi dynasty and gave him Delhi and Agra. His grandson Akbar and later emperors expanded Mughal rule over most of South Asia.",
            "The Delhi Sultanate was founded in the early thirteenth century, about three hundred years before this battle. Babur's victory ended it.",
            "The Marathas rose in the seventeenth century under Shivaji, long after Panipat, and they were a reaction against Mughal rule, not a result of this battle.",
            "Shah Ismail I made Shi'ism the religion of the Safavid state in 1501, before this battle, and it was a development in Persia, not India.",
          ],
          answer: 0 },
        { id: "t31-m03", skill: "u3", type: "mcq", set: "t31-s1", topic: "3.1", reasoning: "Claims and evidence in sources",
          question: "The excerpt best supports which of the following claims about the battle?",
          choices: [
            "Babur's forces used gunpowder weapons arranged in the Ottoman manner against an enemy that relied on a large army and war elephants.",
            "Gunpowder weapons had made bows and cavalry useless in South Asian warfare by the 1520s.",
            "Babur claimed the right to rule India because he was descended from Timur and Genghis Khan.",
            "Sultan Ibrahim lost the battle because he did not have enough money to pay his soldiers.",
          ],
          why: [
            "Correct. Babur describes chained gun-carriages \"according to the custom of Rūm,\" matchlockmen, and a cannoneer who \"managed his artillery with great effect,\" and he says the enemy had about one hundred thousand men and nearly a thousand elephants.",
            "This overstates the excerpt. Babur's guns helped, but the excerpt never says other weapons stopped mattering, and in this same battle his cavalry and archers also attacked the enemy.",
            "Babur did descend from both Timur and Genghis Khan, but the excerpt says nothing about his ancestry or his claim to rule. A true fact is not the same as a claim the source supports.",
            "The excerpt says the opposite: Sultan Ibrahim \"possessed the accumulated treasures of his father and grandfather, in current coin, ready for use.\"",
          ],
          answer: 0 },
        { id: "t31-m04", skill: "u3", type: "mcq", set: "t31-s1", topic: "3.1", reasoning: "Continuity and change",
          question: "Babur's way of fighting, as described in the excerpt, shows a change from the way earlier Central Asian conquerors such as Timur fought, because Babur",
          choices: [
            "placed cannon and matchlock infantry alongside his mounted troops",
            "depended on war elephants captured from the rulers of India",
            "invaded India by sea instead of crossing the mountain passes from Kabul",
            "relied on Hindu Rajput allies to defeat the Muslim rulers of Delhi",
          ],
          why: [
            "Correct. Timur's armies, around 1400, won with mounted archers. Babur, more than a century later, placed cannon and matchlockmen at the front of his army, which shows how gunpowder had changed warfare in the region.",
            "The war elephants in the excerpt belonged to the enemy. Babur's strength in the excerpt was his guns, not elephants.",
            "Babur came overland from Kabul, as earlier invaders had done. Nothing in the excerpt suggests a sea invasion.",
            "Babur fought Sultan Ibrahim with his own army, and in 1527 he fought a Rajput alliance led by Rana Sanga at Khanwa. The excerpt names no Hindu allies.",
          ],
          answer: 0 },

        // ===== Set 2: The Qing push into Central Asia =====
        { id: "t31-m05", skill: "u3", type: "mcq", set: "t31-s2", topic: "3.1", reasoning: "Causation",
          question: "According to the passage, the main reason the Qing expanded into Central Asia was to",
          choices: [
            "defeat a rival steppe power that threatened Qing rule",
            "gain control of New World silver that reached China through Central Asian trade routes",
            "spread Tibetan Buddhism among the Mongol peoples of the steppe",
            "escape pressure from European navies along the coast of China",
          ],
          why: [
            "Correct. The passage says Qing rulers saw \"the steppe frontier as the greatest danger to their power\" and fought the Zunghar Mongols, who were \"building a rival state in Central Asia.\"",
            "New World silver reached China mainly by sea, through Manila and European traders in Chinese ports, and the passage does not mention silver.",
            "Qing emperors did support Tibetan Buddhism to win the loyalty of Mongols and Tibetans, but the passage presents security, not religion, as the reason for expansion.",
            "European naval pressure on China came in the nineteenth century, with the Opium Wars. In the period of this passage, the Qing faced no serious threat from the sea.",
          ],
          answer: 0 },
        { id: "t31-m06", skill: "u3", type: "mcq", set: "t31-s2", topic: "3.1", reasoning: "Comparison",
          question: "The Qing expansion described in the passage is most similar to which other development in the period c. 1450 to c. 1750?",
          choices: [
            "Russia's expansion across Siberia, where the tsars used firearms and forts to bring many peoples under their rule",
            "Portugal's capture of ports such as Goa and Malacca to control trade in the Indian Ocean",
            "The voyages of the Ming admiral Zheng He to ports around the Indian Ocean",
            "The Tokugawa shogunate's policy of limiting contact between Japan and foreigners",
          ],
          why: [
            "Correct. Like the Qing, Russia was a land-based empire that used gunpowder weapons, forts, and long supply lines to take control of huge inland territories. The two empires even met on their frontier and set a border in the Treaty of Nerchinsk in 1689.",
            "Portugal built a maritime trading-post empire of a few fortified ports, not a land empire that ruled vast inland regions.",
            "Zheng He's voyages took place in the early 1400s, before this period, and they were sea voyages to show Ming power, not conquests of land.",
            "The Tokugawa shoguns turned inward and limited foreign contact, the opposite of the expansion described in the passage.",
          ],
          answer: 0 },
        { id: "t31-m07", skill: "u3", type: "mcq", set: "t31-s2", topic: "3.1", reasoning: "Claims and evidence in sources",
          question: "Which of the following pieces of evidence would best support the passage's claim that Qing rulers saw the steppe frontier as the greatest danger to their power?",
          choices: [
            "In 1689, the Qing agreed to a border treaty with Russia, partly to keep Russia from helping the Zunghars.",
            "The Qing kept the civil service examinations to recruit Han Chinese officials.",
            "The Qing used cannon cast with Jesuit help in the wars that completed their conquest of China in the 1670s and 1680s.",
            "After 1757, the Qing allowed European merchants to trade only at the port of Canton.",
          ],
          why: [
            "Correct. The Qing settled their northern border with Russia at Nerchinsk so that Russia would not join with the Zunghars. Making peace with one rival in order to focus on the steppe enemy shows how seriously the Qing took that threat.",
            "This is true, but it shows how the Qing governed China proper, not what they saw as the main danger on their frontiers.",
            "This is true, and it shows the Qing used gunpowder weapons, but these wars were against rebels inside China, not against the steppe frontier the passage describes.",
            "This is true, but it is about controlling trade with Europeans at sea. It says nothing about the steppe frontier.",
          ],
          answer: 0 },
        { id: "t31-m08", skill: "u3", type: "mcq", set: "t31-s2", topic: "3.1", reasoning: "Causation",
          question: "The expansion described in the passage contributed most directly to which effect?",
          choices: [
            "The Qing came to rule a more diverse empire that included Mongols, Tibetans, and Muslim Turkic peoples.",
            "The Qing lost control of China's coast to European trading companies.",
            "The Qing replaced the Confucian system of government with Mongol law.",
            "Russia stopped expanding into Asia for the rest of the period.",
          ],
          why: [
            "Correct. By taking Mongolia and Xinjiang and protecting Tibet, the Qing ruled many peoples with different languages and religions. Qing emperors presented themselves in different ways to each group, as Confucian rulers to the Han Chinese and as patrons of Buddhism to Mongols and Tibetans.",
            "European companies did not take control of China's coast in this period. The Qing set the terms of foreign trade until the Opium Wars of the nineteenth century.",
            "The Qing kept Confucian government and the examination system in China. Taking in Mongol peoples did not replace them.",
            "This is an overstatement. Russia kept expanding in Asia after 1689, east to Kamchatka and later into Alaska and Central Asia.",
          ],
          answer: 0 },

        // ===== SAQ: Why the Ottomans grew =====
        { id: "t31-q1a", skill: "u3", type: "fr", set: "t31-s3", part: "SAQ 1", sub: "a", topic: "3.1",
          lead: "Use the passage below to answer all parts of the question that follows.",
          prompt: "Identify ONE piece of historical evidence, not mentioned in the passage, that would support the passage's claim that gunpowder weapons helped the Ottomans expand.",
          earns: "The response names one specific Ottoman use of gunpowder weapons in a conquest or battle in the period that the passage does not already mention.",
          yes: [
            "In 1453, Mehmed II used huge cannon to break the walls of Constantinople and made it the Ottoman capital.",
            "At the Battle of Chaldiran in 1514, Ottoman artillery and Janissary musketeers defeated the Safavid cavalry of Shah Ismail.",
            "Suleiman's armies used artillery to capture Belgrade in 1521 and the island of Rhodes in 1522.",
          ],
          no: [
            "\"The Ottomans defeated Hungary at Mohács.\" The passage already gives this example.",
            "\"The Ottomans had a strong army.\" This names no specific evidence about gunpowder.",
            "\"The Ottomans captured Baghdad from the Abbasids in 1258.\" This is wrong: the Mongols took Baghdad in 1258, before the Ottoman Empire existed.",
          ],
          example: "In 1453, Sultan Mehmed II used giant cannon to batter down the walls of Constantinople, which had stopped attackers for centuries. Taking the city ended the Byzantine Empire and gave the Ottomans a new capital.",
          notExample: "The Ottomans used weapons to win wars." },
        { id: "t31-q1b", skill: "u3", type: "fr", set: "t31-s3", part: "SAQ 1", sub: "b", topic: "3.1",
          lead: "Use the passage below to answer all parts of the question that follows.",
          prompt: "Explain ONE way, other than military technology, that helped the Ottomans expand or keep control of their territory in the period c. 1450 to c. 1750.",
          earns: "The response gives a specific Ottoman method that was not a weapon and explains how it helped the empire grow or hold its lands.",
          yes: [
            "Through the devshirme, the Ottomans took Christian boys from the Balkans, converted them, and trained them as Janissaries and officials who owed loyalty only to the sultan, which gave the sultan a reliable army and government.",
            "The Ottomans let Christian and Jewish communities keep their own religious leaders and laws in return for paying taxes, so conquered peoples had less reason to rebel.",
            "The Ottomans gave the tax income of land, called a timar, to cavalrymen who served in war, so the sultan could pay a large army without spending cash from the treasury.",
          ],
          no: [
            "\"The Ottomans had Janissaries with muskets.\" This is military technology, which the prompt excludes.",
            "\"The Ottomans were tolerant.\" This names a quality but does not explain how it helped the empire hold territory.",
            "\"The Ottomans forced all conquered Christians to become Muslims.\" This is false; most Christians in Ottoman lands kept their faith.",
          ],
          example: "The Ottomans often let conquered religious communities, such as Orthodox Christians and Jews, run their own religious and legal affairs as long as they paid a special tax. Because people could keep their faith and leaders, many had less reason to rebel, which made it easier for the sultans to hold large and diverse territories.",
          notExample: "The Ottomans were a large empire, so they could control many lands." },
        { id: "t31-q1c", skill: "u3", type: "fr", set: "t31-s3", part: "SAQ 1", sub: "c", topic: "3.1",
          lead: "Use the passage below to answer all parts of the question that follows.",
          prompt: "Explain ONE way the expansion of another land-based empire in the period c. 1450 to c. 1750 was similar to Ottoman expansion as described in the passage.",
          earns: "The response names another land-based empire of the period and explains a specific way its expansion resembled the Ottoman pattern in the passage (gunpowder conquest, or flexible rule over conquered peoples).",
          yes: [
            "Like the Ottomans, the Mughals used gunpowder to expand: Babur defeated the Delhi Sultanate at Panipat in 1526 with cannon and matchlocks.",
            "Like the Ottomans, the Mughal emperor Akbar ruled flexibly, giving Hindu Rajput princes high ranks and ending the jizya tax so they would support his rule.",
            "Like the Ottomans, Russia used gunpowder weapons and forts to conquer new lands, such as Ivan IV's capture of Kazan in 1552 and the later push across Siberia.",
          ],
          no: [
            "\"The Mughals were also an empire.\" This states no way their expansion was similar.",
            "\"The Mongols also conquered many lands with cavalry.\" The Mongol Empire belongs to the period before 1450, and the prompt asks about this period.",
            "\"Spain expanded by building a fleet to cross the Atlantic.\" This is a maritime empire, and the response does not explain a similarity to the passage.",
          ],
          example: "The Mughal Empire expanded in a similar way. Like the Ottomans, it used gunpowder weapons to win key battles: in 1526, Babur used cannon and matchlock guns to defeat the Delhi Sultanate at Panipat. Later, Akbar held his lands by working with local Hindu rulers, much as the Ottomans left local leaders in place.",
          notExample: "Many empires grew bigger in this period." },
      ] },
  ],
};

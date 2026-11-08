// Topic 3.1 Quiz: Empires Expand
// Sources: every stimulus this quiz uses, keyed by id.
import { maps } from "../whap/maps.js";

const MAP = "Map drawn for this review from Natural Earth land outlines (public domain). Places, dates, and routes checked against ";
const map = (id, caption, refs) => [{ svg: maps[id], caption }, { cite: MAP + refs + ".", kind: "map" }];

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
    id: "t31-s2", name: "Qing expansion, 1625 to 1759", intro: "Use the map below to answer the questions that follow.", label: "Map",
    sources: [{ title: "Map", blocks: map("u3-qing", "Qing expansion, 1625 to 1759: the year the Qing took or won control of each place", "Wikipedia's articles on the Qing dynasty in Inner Asia, the Dzungar-Qing Wars, and the Battle of Jao Modo, and John P. McKay and others, Understanding World Societies, 2nd ed., chapter 21, \"Imperial Expansion\"") }],
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

        // ===== Set 2: Qing expansion (map) =====
        { id: "t31-m05", skill: "u3", type: "mcq", set: "t31-s2", topic: "3.1", reasoning: "Developments and processes",
          question: "The map best supports which conclusion about Qing expansion between 1625 and 1759?",
          choices: [
            "After taking Beijing and Taiwan, the Qing spent the next century pushing north and west into Mongolia, Tibet, and Central Asia.",
            "The Qing grew mainly by sea, taking islands and ports across the Pacific Ocean.",
            "The Qing lost control of Mongolia and Tibet in the early 1700s.",
            "Qing expansion ended once the dynasty took Beijing in 1644.",
          ],
          why: [
            "Correct. The years on the map start in the northeast (Shenyang 1625, Beijing 1644), reach Taiwan in 1683, and then move into Mongolia (1691, 1696), Tibet (1720), and Central Asia (1755, 1759).",
            "Taiwan is the only island on the map. Every other place the Qing took is far inland.",
            "The map shows the reverse: the Qing won control in Mongolia in the 1690s and in Tibet in 1720.",
            "Five of the places on the map were taken after 1644, the last of them in 1759.",
          ],
          answer: 0 },
        { id: "t31-m06", skill: "u3", type: "mcq", set: "t31-s2", topic: "3.1", reasoning: "Causation",
          question: "Which of the following best explains why most of the places the Qing took after 1690, as shown on the map, lie in Mongolia, Tibet, and Central Asia?",
          choices: [
            "The Qing fought a long series of wars against the Zunghar Mongols, a rival steppe state whose power reached from Mongolia into Tibet and Central Asia.",
            "The Qing were looking for new sea routes to trade directly with Europe.",
            "Qing emperors wanted to spread Islam among the peoples of Central Asia.",
            "Russian armies drove the Qing out of Manchuria, so the dynasty had to move west.",
          ],
          why: [
            "Correct. Jao Modo (1696), Lhasa (1720), and Ili (1755) were all won from the Zunghars. The Qing followed this steppe enemy deep into Inner Asia until they destroyed its state in the 1750s.",
            "These places are deep inside Asia, far from any sea route, and the Qing were content to trade with Europeans at their own ports.",
            "The Qing emperors were not Muslims. Kashgar's Muslim people came under Qing rule by conquest, not as part of a plan to spread Islam.",
            "The Qing kept Manchuria, their homeland, and the Treaty of Nerchinsk (1689) settled the border with Russia in the Qing's favor.",
          ],
          answer: 0 },
        { id: "t31-m07", skill: "u3", type: "mcq", set: "t31-s2", topic: "3.1", reasoning: "Comparison",
          question: "Which of the following best describes a difference between the Qing expansion shown on the map and Portuguese expansion in the Indian Ocean in the same period?",
          choices: [
            "The Qing conquered and ruled huge inland regions, while Portugal held a small number of fortified ports along the coasts to control trade.",
            "The Qing used gunpowder weapons, while the Portuguese did not.",
            "The Qing took only lands where Chinese was spoken, while Portugal ruled many different peoples.",
            "The Qing expansion took place mostly before 1500, while Portugal's took place after 1500.",
          ],
          why: [
            "Correct. Nearly every place on the map is far from the sea, from Mongolia to Kashgar. Portugal's empire was a chain of trading posts such as Goa and Malacca, with little land around them.",
            "Both used gunpowder. Portuguese ships carried cannon, and Qing armies used cannon and muskets against the Zunghars.",
            "The map shows the Qing taking Mongolia, Tibet, and Central Asia, lands of Mongols, Tibetans, and Turkic Muslims, not Chinese speakers.",
            "Every date on the map falls between 1625 and 1759, after Portugal's empire had already been built.",
          ],
          answer: 0 },
        { id: "t31-m08", skill: "u3", type: "mcq", set: "t31-s2", topic: "3.1", reasoning: "Causation",
          question: "The conquests shown on the map after 1690 contributed most directly to which of the following?",
          choices: [
            "The Qing ruled a more diverse empire of Mongols, Tibetans, and Turkic Muslims, and Qing emperors presented themselves to each group in a different way.",
            "The Qing replaced Confucian government in China with Tibetan Buddhist rule.",
            "China's population fell sharply as Han Chinese farmers left for the steppe.",
            "The Qing ended the civil service examinations to make room for Mongol officials.",
          ],
          why: [
            "Correct. The lands won in Mongolia, Tibet, and Central Asia brought in peoples with their own languages and faiths. Qing emperors acted as Confucian rulers to the Han Chinese and as patrons of Tibetan Buddhism to Mongols and Tibetans.",
            "The Qing supported Tibetan Buddhism, but they kept Confucian government in China.",
            "China's population grew quickly in the eighteenth century; it did not fall.",
            "The Qing kept the examinations throughout this period; they were abolished only in 1905.",
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

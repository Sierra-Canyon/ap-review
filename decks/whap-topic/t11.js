// Topic 1.1 Quiz: Developments in East Asia from c. 1200 to c. 1450
// Sources: every stimulus this quiz uses, keyed by id.
export const sets = {
  "t11-s1": {
    id: "t11-s1", name: "The first Ming emperor announces his reign", intro: "Use the source below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "Since the Sung dynasty had lost the throne and Heaven had cut off their sacrifice, the Yuan [Mongol] dynasty had risen from the desert to enter and rule over Zhongguo [China] for more than a hundred years, when Heaven, wearied of their misgovernment and debauchery, thought also fit to turn their fate to ruin, and the affairs of Zhongguo were in a state of disorder for eighteen years. ..." },
        { p: "... We were selected by Our people to occupy the Imperial throne of Zhongguo under the dynastic title of 'the Great Ming,' ... We have sent officers to all the foreign kingdoms with this Manifesto ..." },
        { p: "... Although We are not equal in wisdom to our ancient rulers whose virtue was recognized all over the universe, We cannot but let the world know Our intention to maintain peace within the four seas." },
        { cite: "Zhu Yuanzhang (the Hongwu emperor, founder of the Ming dynasty), manifesto announcing his accession, sent to the ruler of Fu-lin (the Byzantine Empire) in the fourth year of his reign (c. 1371; the Sourcebook dates it 1372), translated in F. Hirth, China and the Roman Orient: Researches into their Ancient and Mediaeval Relations as Represented in Old Chinese Records (Shanghai and Hong Kong, 1885), pp. 65 to 67, as published in the Internet East Asian History Sourcebook, Fordham University, under the title \"Manifesto of Accession as First Ming Emperor, 1372 C.E. (Sent to Byzantine Emperor).\" The text was scanned and modernized by Jerome S. Arkenberg. Brackets are in the Sourcebook text. The manifesto speaks in the emperor's voice. Zhongguo is the Chinese name for China. Zhu Yuanzhang, born a poor peasant, took the throne in 1368.", url: "https://sourcebooks.web.fordham.edu/eastasia/1372mingmanf.asp", kind: "primary" },
      ] },
    ],
  },
  "t11-s2": {
    id: "t11-s2", name: "China's neighbors: borrowing and independence", intro: "Use the passage below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "Between c. 1200 and c. 1450, Korea, Vietnam, and Japan borrowed heavily from China while keeping their own political traditions. Korean rulers used Chinese characters, Confucian learning, and civil service examinations, and after 1392 the new Joseon dynasty made neo-Confucianism its official philosophy and cut back the wealth of Buddhist monasteries. In Vietnam, the rulers of Dai Viet also chose officials through examinations on the Confucian classics. Yet they fought hard to stay independent of China, turning back Mongol invasions in the thirteenth century and driving out an occupying Ming army in the 1420s. Japan adopted Chinese writing and Buddhism, including Zen, which Japanese monks brought home from Song China. Japan, however, never made examinations the main way to choose officials. Power there rested with the shogun and hereditary warrior families, not with scholar officials." },
        { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" },
      ] },
    ],
  },
  "t11-s3": {
    id: "t11-s3", name: "A story of filial duty", intro: "Use the source below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "In the Sung dynasty lived Chu Shou-ch‘ang, whose mother, Liu, when he was seven years of age, left the family because she was hated by his father’s wife; and mother and son did not see each other for about fifty years. It was during the reign of Shên Tsung that Chu resigned his official station and went into the Ch‘in country, and there made an engagement with his family “that he would not return until he had found his mother.” He then travelled into T‘ung-chou, where he discovered his mother, who at that time was over seventy years of age. ..." },
        { p: "Chu possesses the true heavenly disposition, and honours and riches cannot destroy his affection for his mother." },
        { cite: "\"He resigned Office to seek his Mother,\" No. XXIII of \"The Twenty-four Examples of Filial Duty,\" translated from the Chinese in Ivan Chên, The Book of Filial Duty (London: John Murray, 1908), pp. 58 to 59, Project Gutenberg eBook 75878. The twenty-four stories are usually credited to Guo Jujing, a scholar of the Yuan dynasty (1271 to 1368), and became a common text for teaching children; the translator's introduction says that nothing is known of their authorship. The last sentence of the excerpt is the collection's comment on the story. Chu Shou-ch‘ang (Zhu Shouchang) was a Song official, and Shên Tsung (Shenzong) was the Song emperor who reigned from 1067 to 1085. His father's wife was his father's principal wife; his own mother, Liu, held a lower place in the household.", url: "https://gutenberg.org/cache/epub/75878/pg75878-images.html", kind: "primary" },
      ] },
    ],
  },
  "t11-s4": {
    id: "t11-s4", name: "Buddhism in East Asia", intro: "Use the passage below to answer all parts of the question that follows.",
    sources: [
      { title: "Source", blocks: [
        { p: "Buddhism, which had reached China from India many centuries earlier, remained a powerful force in East Asia from c. 1200 to c. 1450, but it changed as it spread. Chinese schools of Buddhism such as Chan, which stressed meditation, and Pure Land, which taught that calling on the Buddha Amitabha could bring rebirth in a paradise, appealed to many ordinary people who could not study long scriptures. Monks carried these schools to Korea and Japan, where Chan became known as Zen and won strong support among warrior families. At the same time, Song scholars who wanted to revive Confucianism attacked Buddhist monks for abandoning their families. Yet neo-Confucian thinkers such as Zhu Xi borrowed Buddhist ideas about the mind and self-cultivation, even as they rejected the monastic life." },
        { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" },
      ] },
    ],
  },
};

export default {
  forms: [
    { id: "t11", name: "Topic 1.1 Quiz: Developments in East Asia", group: "Unit 1: The Global Tapestry",
      items: [
        // ===== Set 1: the Hongwu emperor's manifesto =====
        { id: "t11-m01", skill: "u1", type: "mcq", set: "t11-s1", topic: "1.1", reasoning: "Contextualization",
          question: "The \"state of disorder for eighteen years\" described in the first paragraph best reflects which development in China in the middle of the fourteenth century?",
          choices: [
            "Famines, floods along the Yellow River, and heavy demands from Yuan officials set off rebellions, such as the Red Turban uprisings, that weakened Mongol rule.",
            "Jurchen armies from the northeast conquered northern China and forced the Song court to flee south.",
            "Japanese armies invaded China after defeating the Mongol fleets sent against Japan.",
            "European merchants seized control of Chinese ports and refused to pay customs duties.",
          ],
          why: [
            "Correct. From the 1340s, natural disasters and Yuan misrule led to widespread revolts, and Zhu Yuanzhang rose to power as a leader of rebel forces before founding the Ming in 1368.",
            "The Jurchen did conquer northern China, but that happened in the 1120s, long before the Yuan dynasty that the manifesto describes.",
            "Japan did defeat Mongol invasions in 1274 and 1281, but it did not invade China in response.",
            "Europeans did not gain a foothold on the Chinese coast until the Portuguese arrived in the sixteenth century.",
          ],
          answer: 0 },
        { id: "t11-m02", skill: "u1", type: "mcq", set: "t11-s1", topic: "1.1", reasoning: "Claims and Evidence",
          question: "The emperor's claim that Heaven, \"wearied of their misgovernment,\" turned the Yuan dynasty's \"fate to ruin\" draws most directly on which idea?",
          choices: [
            "The Mandate of Heaven, which held that Heaven withdraws its support from rulers who govern badly and grants it to a new dynasty",
            "Filial piety, which held that children must obey and honor their parents",
            "The Buddhist belief that each person's deeds shape his or her rebirth",
            "The Mongol belief that the sky god had given the world to the family of Chinggis Khan",
          ],
          why: [
            "Correct. Chinese dynasties since ancient times had explained their rise this way, and Zhu Yuanzhang used the idea to show that the Ming replaced the Yuan by right.",
            "Filial piety was central to Confucian ethics, but it concerns family duty, not why one dynasty falls and another rises.",
            "Rebirth is a Buddhist teaching about individuals, and the manifesto speaks of Heaven judging a whole dynasty.",
            "The Mongols did claim a mandate from the sky god Tengri, but the manifesto uses the Chinese idea to argue against Mongol rule.",
          ],
          answer: 0 },
        { id: "t11-m03", skill: "u1", type: "mcq", set: "t11-s1", topic: "1.1", reasoning: "Continuity and Change",
          question: "Which of the following later Ming policies most clearly continued the aim of the manifesto's final paragraph?",
          choices: [
            "Sending Zheng He's fleets across the Indian Ocean in the early fifteenth century to display Ming power and collect tribute",
            "Rebuilding and extending the Great Wall to keep out steppe peoples from the north",
            "Moving the capital from Nanjing to Beijing in the early fifteenth century",
            "Restoring the civil service examinations to recruit Confucian scholars as officials",
          ],
          why: [
            "Correct. Like the manifesto, the voyages announced the Ming emperor to foreign rulers and invited them to send tribute and recognize his place at the center of the world.",
            "The Ming did strengthen the Great Wall, but that was a defensive policy, not a message to distant kingdoms.",
            "The Yongle emperor did move the capital to Beijing, but this concerned rule inside China, not relations with foreign kingdoms.",
            "The Ming did restore the examinations, but this shaped the government at home rather than its standing abroad.",
          ],
          answer: 0 },

        // ===== Set 2: practice passage on Korea, Vietnam, and Japan =====
        { id: "t11-m04", skill: "u1", type: "mcq", set: "t11-s2", topic: "1.1", reasoning: "Claims and Evidence",
          question: "Which of the following best states the main argument of the passage?",
          choices: [
            "China's neighbors adopted Chinese ideas and institutions selectively, adapting them to their own political traditions.",
            "China ruled Korea, Vietnam, and Japan directly through officials chosen by examination.",
            "Korea, Vietnam, and Japan rejected Chinese culture in order to protect their independence.",
            "Buddhism united Korea, Vietnam, and Japan into a single religious community led from China.",
          ],
          why: [
            "Correct. The passage shows each state borrowing from China, such as writing, examinations, or Buddhism, while keeping its own rulers and system of power.",
            "The passage describes these states as having their own rulers, and Vietnam fought to drive out Chinese armies.",
            "The passage stresses heavy borrowing from China, so it does not argue that these states rejected Chinese culture.",
            "Buddhism spread to all three, but the passage says Joseon Korea cut back the monasteries, and no single Buddhist authority led the region.",
          ],
          answer: 0 },
        { id: "t11-m05", skill: "u1", type: "mcq", set: "t11-s2", topic: "1.1", reasoning: "Causation",
          question: "Which of the following best explains why Japan, unlike Korea and Vietnam, did not rely on examinations to choose officials?",
          choices: [
            "Landholding warrior families who served the shogun held real power, so offices passed through family ties and personal loyalty.",
            "Japan had no contact with China in this period, so it never learned about the examination system.",
            "The Mongols conquered Japan and replaced Chinese practices with steppe customs.",
            "Japanese emperors banned Confucian learning in order to protect Buddhism.",
          ],
          why: [
            "Correct. In Kamakura and Ashikaga Japan, military power and land gave warrior families control of government, leaving little room for officials chosen by tests.",
            "Japan did have contact with China, as the passage notes that Japanese monks brought Zen home from Song China.",
            "The Mongol invasions of Japan in 1274 and 1281 failed, so the Mongols never ruled Japan.",
            "Japanese rulers did not ban Confucian learning, and many Zen monks studied Confucian texts.",
          ],
          answer: 0 },
        { id: "t11-m06", skill: "u1", type: "mcq", set: "t11-s2", topic: "1.1", reasoning: "Comparison",
          question: "Dai Viet in the thirteenth century was most similar to Japan in the same century in which way?",
          choices: [
            "Both turned back invasions launched by the Mongol rulers of China.",
            "Both chose most of their officials through Confucian examinations.",
            "Both were occupied by Ming armies for about twenty years.",
            "Both made neo-Confucianism the official philosophy of the state and closed Buddhist monasteries.",
          ],
          why: [
            "Correct. Dai Viet defeated Mongol attacks in 1258, 1285, and 1288, and Japan defeated the Mongol fleets of 1274 and 1281.",
            "Dai Viet used examinations, but the passage says Japan never made examinations the main way to choose officials.",
            "Only Dai Viet was occupied by the Ming, and that occupation took place in the fifteenth century.",
            "This describes Joseon Korea after 1392, not Dai Viet or Japan in the thirteenth century.",
          ],
          answer: 0 },

        // ===== Set 3: The Twenty-four Examples of Filial Duty =====
        { id: "t11-m07", skill: "u1", type: "mcq", set: "t11-s3", topic: "1.1", reasoning: "Developments and Processes",
          question: "The detail that Chu's mother left the family \"because she was hated by his father’s wife\" best reflects which feature of elite families in Song China?",
          choices: [
            "Wealthy men could take secondary wives, who held a weaker place in the household than the principal wife.",
            "Women from elite families had their feet bound, which limited their ability to travel.",
            "Daughters inherited most of the family's land, which caused conflict among wives.",
            "Mothers held the highest authority in the family and could force their husbands from the home.",
          ],
          why: [
            "Correct. The principal wife outranked a secondary wife, which is why Chu's mother could be pushed out of the household when he was a child.",
            "Foot binding did spread among elite families under the Song, but the excerpt does not mention it, and it does not explain why Chu's mother left.",
            "Song families passed land mainly to sons, and the excerpt says nothing about inheritance.",
            "Song families were patriarchal, with authority held by fathers and husbands, and the excerpt shows a mother who lacked the power to stay.",
          ],
          answer: 0 },
        { id: "t11-m08", skill: "u1", type: "mcq", set: "t11-s3", topic: "1.1", reasoning: "Sourcing and Situation",
          question: "Collections of stories like this one were most likely compiled in order to",
          choices: [
            "teach children and adults that duty to parents should come before wealth and official rank, a central value of neo-Confucianism",
            "encourage young men to leave their families and become Buddhist monks",
            "criticize the Song emperors for forcing officials to work far from home",
            "persuade Mongol rulers to adopt the civil service examination",
          ],
          why: [
            "Correct. The story praises an official who gave up his post to find his mother, and the closing comment says \"honours and riches\" could not weaken his devotion, a lesson in Confucian filial piety.",
            "Buddhist monks left their families, but the story praises a son who returns to his mother, the opposite of monastic life.",
            "The story does not blame the emperor for anything, and Chu resigned his office by his own choice.",
            "The story is about family duty, not about how to choose officials, and it does not address Mongol rulers.",
          ],
          answer: 0 },

        // ===== SAQ: practice passage on Buddhism in East Asia =====
        { id: "t11-q1a", skill: "u1", type: "fr", set: "t11-s4", part: "SAQ 1", sub: "a", topic: "1.1",
          lead: "Use the passage below to answer all parts of the question that follows.",
          prompt: "Identify ONE way the passage shows that Buddhism changed as it spread in East Asia.",
          earns: "The response names one change the passage describes: new schools such as Chan and Pure Land, practices suited to ordinary people, Chan becoming Zen in Japan and gaining warrior support, or Buddhist ideas entering neo-Confucian thought.",
          yes: [
            "In China, new schools of Buddhism such as Chan and Pure Land developed.",
            "Pure Land Buddhism taught that calling on the Buddha Amitabha could bring rebirth in paradise, which ordinary people could do without studying long scriptures.",
            "When Chan reached Japan, it became Zen and won support among warrior families.",
          ],
          no: [
            "\"Buddhism came from India.\" This is in the passage, but it states where Buddhism began, not how it changed.",
            "\"Buddhism became very popular.\" This is too general and names no change.",
            "\"Song scholars wanted to revive Confucianism.\" This describes Confucianism, not a change in Buddhism.",
          ],
          example: "The passage shows that Buddhism changed by describing new Chinese schools such as Pure Land, which taught that simply calling on the Buddha Amitabha could bring rebirth in paradise, so ordinary people who could not study long scriptures could still practice the faith.",
          notExample: "Buddhism is a religion that many people in Asia follow." },
        { id: "t11-q1b", skill: "u1", type: "fr", set: "t11-s4", part: "SAQ 1", sub: "b", topic: "1.1",
          lead: "Use the passage below to answer all parts of the question that follows.",
          prompt: "Describe ONE piece of historical evidence, not mentioned in the passage, that supports the passage's claim that Buddhism remained a powerful force in East Asia from c. 1200 to c. 1450.",
          earns: "The response describes a specific, accurate example from the period that is not in the passage and shows Buddhism's continued strength in some part of East Asia.",
          yes: [
            "During the Mongol invasions, the Goryeo court in Korea had the whole Buddhist canon carved onto more than 80,000 woodblocks, the Tripitaka Koreana, hoping for the Buddha's protection.",
            "In Kamakura Japan, Pure Land teachers such as Honen and Shinran drew large numbers of followers, and their sects grew into some of the largest in the country.",
            "The Yuan emperor Khubilai Khan supported Tibetan Buddhism and made the Tibetan monk Phagpa a leading religious official.",
          ],
          no: [
            "\"Zen spread to Japan.\" This is already in the passage.",
            "\"Many people were Buddhists.\" This gives no specific evidence.",
            "\"Asoka spread Buddhism in India.\" Asoka ruled in the third century BCE, far outside the period and outside East Asia.",
          ],
          example: "When the Mongols invaded Korea in the thirteenth century, the Goryeo court paid to carve the entire Buddhist canon onto more than 80,000 wooden printing blocks, known as the Tripitaka Koreana. A state that spent this much labor on Buddhist scripture during a war shows that Buddhism was still a powerful force.",
          notExample: "Buddhism had temples and monks." },
        { id: "t11-q1c", skill: "u1", type: "fr", set: "t11-s4", part: "SAQ 1", sub: "c", topic: "1.1",
          lead: "Use the passage below to answer all parts of the question that follows.",
          prompt: "Explain ONE reason Buddhism appealed to people in East Asia in the period c. 1200 to c. 1450.",
          earns: "The response gives a specific reason Buddhism attracted followers in the period and explains how that reason drew a particular group or kind of people.",
          yes: [
            "Pure Land Buddhism promised rebirth in paradise to anyone who called on Amitabha with faith, so peasants and others without education could hope for salvation.",
            "Zen stressed self-discipline, meditation, and calm in the face of death, which appealed to samurai whose lives depended on fighting.",
            "In times of war and invasion, such as the Mongol attacks, Buddhist rituals and monasteries offered comfort, protection, and a hope for a better rebirth.",
          ],
          no: [
            "\"Buddhism was a good religion.\" This gives no historical reason.",
            "\"Buddhism appealed to people because the Ming emperor made it the state religion.\" This is not accurate; the Ming state was built on Confucian ideas.",
            "\"Buddhism spread along trade routes.\" This explains how it spread, not why people found it appealing.",
          ],
          example: "Zen Buddhism appealed to samurai in Japan because it stressed strict self-discipline, meditation, and a calm mind. Warriors who faced death in battle valued a practice that trained them to stay focused and unafraid, which is one reason warrior families supported Zen temples.",
          notExample: "People liked Buddhism because it was peaceful." },
      ] },
  ],
};

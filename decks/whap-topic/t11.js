// Topic 1.1 Quiz: Developments in East Asia from c. 1200 to c. 1450
import { maps } from "../whap/maps.js";

// A map the site draws (tools/maps/whap-u1f.mjs, built by tools/build-maps.mjs), with the references it was checked against.
const MAP = "Map drawn for this review from Natural Earth land outlines (public domain). Places, dates, and routes checked against ";
const map = (id, caption, refs) => [{ svg: maps[id], caption }, { cite: MAP + refs + ".", kind: "map" }];

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
    id: "t11-s2", name: "China's neighbors: borrowing and independence", intro: "Use the map below to answer the questions that follow.", label: "Map",
    sources: [{ title: "Map", blocks: map("u1f-east-asia-neighbors", "China's neighbors, c. 1200 to c. 1450: capitals, civil service examinations, and who held power (sea route approximate)", "Columbia University, Asia for Educators, \"1000 to 1450: Intensified Hemispheric Interactions\" (Korea and Japan pages), and Wikipedia, \"Gwageo\", \"Joseon\", \"Ly dynasty\", \"Fourth Era of Northern Domination\", \"Ashikaga shogunate\", \"Eisai\", and \"Tiantong Temple\"") }],
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
        { id: "t11-m01", skill: "u1", type: "mcq", set: "t11-s1", topic: "1.1", reasoning: "Contextualization", difficulty: "moderate",
          question: "The \"state of disorder for eighteen years\" described in the first paragraph best reflects which development in China in the middle of the fourteenth century?",
          choices: [
            "Famine, Yellow River floods, and Yuan misrule set off revolts such as the Red Turban uprisings.",
            "Jurchen armies from the northeast conquered northern China and forced the Song court to flee south.",
            "Japanese armies invaded the Chinese coast in revenge after defeating the Mongol fleets of 1274 and 1281.",
            "Portuguese merchants seized the port of Guangzhou and refused to pay Chinese customs duties.",
          ],
          why: [
            "Correct. From the 1340s, natural disasters and Yuan misrule led to widespread revolts, and Zhu Yuanzhang rose to power as a leader of rebel forces before founding the Ming in 1368.",
            "The Jurchen did conquer northern China, but that happened in the 1120s, long before the Yuan dynasty that the manifesto describes.",
            "Japan did defeat Mongol invasions in 1274 and 1281, but it did not invade China in response.",
            "Europeans did not gain a foothold on the Chinese coast until the Portuguese arrived in the sixteenth century.",
          ],
          answer: 0 },
        { id: "t11-m02", skill: "u1", type: "mcq", set: "t11-s1", topic: "1.1", reasoning: "Claims and Evidence", difficulty: "easy",
          question: "The emperor's claim that Heaven, \"wearied of their misgovernment,\" turned the Yuan dynasty's \"fate to ruin\" draws most directly on which idea?",
          choices: [
            "The Mandate of Heaven, which held that Heaven withdraws its support from unjust rulers",
            "Filial piety, which held that children must obey and honor their parents above all",
            "The Buddhist belief that each person's deeds in this life shape his or her rebirth",
            "The Mongol belief that the sky god Tengri had given the world to Chinggis Khan's family",
          ],
          why: [
            "Correct. Chinese dynasties since ancient times had explained their rise this way: Heaven took its mandate from a dynasty that ruled badly and gave it to a new one. Zhu Yuanzhang used the idea to show that the Ming replaced the Yuan by right.",
            "Filial piety was central to Confucian ethics, but it concerns family duty, not why one dynasty falls and another rises.",
            "Rebirth is a Buddhist teaching about individuals, and the manifesto speaks of Heaven judging a whole dynasty.",
            "The Mongols did claim a mandate from the sky god Tengri, but the manifesto uses the Chinese idea to argue against Mongol rule.",
          ],
          answer: 0 },
        { id: "t11-m03", skill: "u1", type: "mcq", set: "t11-s1", topic: "1.1", reasoning: "Continuity and Change", difficulty: "difficult",
          question: "Which of the following later Ming policies most clearly continued the aim of the manifesto's final paragraph?",
          choices: [
            "Sending Zheng He's fleets to foreign kingdoms to display Ming power and collect tribute",
            "Rebuilding and extending the Great Wall to keep out Mongol and other steppe peoples",
            "Moving the capital from Nanjing to Beijing, closer to the northern frontier, in 1421",
            "Restoring the civil service examinations to recruit Confucian scholars as officials",
          ],
          why: [
            "Correct. Like the manifesto, the voyages announced the Ming emperor to foreign rulers and invited them to send tribute and recognize his place at the center of the world.",
            "The Ming did strengthen the Great Wall, but that was a defensive policy, not a message to distant kingdoms.",
            "The Yongle emperor did move the capital to Beijing, but this concerned rule inside China, not relations with foreign kingdoms.",
            "The Ming did restore the examinations, but this shaped the government at home rather than its standing abroad.",
          ],
          answer: 0 },

        // ===== Set 2: map, China's neighbors =====
        { id: "t11-m04", skill: "u1", type: "mcq", set: "t11-s2", topic: "1.1", reasoning: "Claims and Evidence", difficulty: "easy",
          question: "Which of the following conclusions about China's neighbors is best supported by the map?",
          choices: [
            "They adopted some Chinese institutions, such as examinations, but not all of them.",
            "China ruled Korea, Dai Viet, and Japan directly through officials chosen by examination.",
            "Korea, Dai Viet, and Japan all rejected Chinese learning to protect their independence.",
            "All three states chose their officials through Confucian examinations by the 1300s.",
          ],
          why: [
            "Correct. The map shows Korea and Dai Viet holding examinations like China's, and Japanese monks traveling to study Chan (Zen) in China, while Japan, ruled by shoguns and warrior families, had no examination system.",
            "The map marks each neighbor's own capital and rulers, and it shows Chinese rule only in Dai Viet during the Ming occupation of 1407 to 1427.",
            "The map shows Korea and Dai Viet holding Chinese-style examinations and Japanese monks going to China to study, so these states borrowed Chinese learning.",
            "The map says Japan had no examination system, so this is true of Korea and Dai Viet only.",
          ],
          answer: 0 },
        { id: "t11-m05", skill: "u1", type: "mcq", set: "t11-s2", topic: "1.1", reasoning: "Causation", difficulty: "difficult",
          question: "Which of the following best explains why Japan, unlike Korea and Dai Viet, had no examination system, as the map notes?",
          choices: [
            "Warrior families serving the shogun held power, and offices passed through family and loyalty.",
            "Japan had no contact with China in this period, so it never learned about the examinations.",
            "The Mongols conquered Japan in 1281 and replaced Chinese practices with steppe customs.",
            "Zen monks who came back from China persuaded the court in Kyoto to ban Confucian learning.",
          ],
          why: [
            "Correct. Under the Kamakura and Ashikaga shoguns, military power and land gave warrior families control of government, so offices went to vassals and kin rather than to men who passed tests.",
            "The map shows Japanese monks sailing to Ningbo to study Chan (Zen), so Japan was in contact with China.",
            "The Mongol invasions of Japan in 1274 and 1281 failed, so the Mongols never ruled Japan.",
            "Zen monks did bring Chinese learning home, but they studied Confucian texts as well, and no Japanese ruler banned Confucian learning.",
          ],
          answer: 0 },
        { id: "t11-m06", skill: "u1", type: "mcq", set: "t11-s2", topic: "1.1", reasoning: "Comparison", difficulty: "moderate",
          question: "Based on the map, Dai Viet in the period c. 1200 to c. 1450 was most similar to Korea in which way?",
          choices: [
            "Both held examinations to choose officials, as China did.",
            "Both were ruled by shoguns and warrior families from Kamakura.",
            "Both were occupied by Ming armies for about twenty years.",
            "Both made neo-Confucianism the official state philosophy in 1392.",
          ],
          why: [
            "Correct. The map notes examinations in Korea from 958 and in Dai Viet from 1075, both modeled on China's examinations on the Confucian classics.",
            "The map places the shoguns and warrior families in Japan, not in Dai Viet or Korea.",
            "The map shows a Ming occupation of Dai Viet from 1407 to 1427, but none of Korea.",
            "The map dates the neo-Confucian state of 1392 to Joseon Korea, not to Dai Viet.",
          ],
          answer: 0 },

        // ===== Set 3: The Twenty-four Examples of Filial Duty =====
        { id: "t11-m07", skill: "u1", type: "mcq", set: "t11-s3", topic: "1.1", reasoning: "Developments and Processes", difficulty: "moderate",
          question: "The detail that Chu's mother left the family \"because she was hated by his father’s wife\" best reflects which feature of elite families in Song China?",
          choices: [
            "Wealthy men could take secondary wives, who ranked below the principal wife.",
            "Women from elite families had their feet bound, which limited their ability to travel.",
            "Daughters inherited most of the family's land, which caused conflict among the wives.",
            "Mothers held the highest authority in the family and could force their husbands from the home.",
          ],
          why: [
            "Correct. The principal wife outranked a secondary wife, which is why Chu's mother could be pushed out of the household when he was a child.",
            "Foot binding did spread among elite families under the Song, but the excerpt does not mention it, and it does not explain why Chu's mother left.",
            "Song families passed land mainly to sons, and the excerpt says nothing about inheritance.",
            "Song families were patriarchal, with authority held by fathers and husbands, and the excerpt shows a mother who lacked the power to stay.",
          ],
          answer: 0 },
        { id: "t11-m08", skill: "u1", type: "mcq", set: "t11-s3", topic: "1.1", reasoning: "Sourcing and Situation", difficulty: "easy",
          question: "Collections of stories like this one were most likely compiled in order to",
          choices: [
            "teach that duty to parents should come before wealth and official rank",
            "encourage young men to leave their families and become Buddhist monks",
            "criticize the Song emperors for forcing officials to serve far from home",
            "persuade the Yuan emperors to restore the civil service examinations",
          ],
          why: [
            "Correct. The story praises an official who gave up his post to find his mother, and the closing comment says \"honours and riches\" could not weaken his devotion, a lesson in the Confucian value of filial piety that neo-Confucian teachers stressed.",
            "Buddhist monks left their families, but the story praises a son who returns to his mother, the opposite of monastic life.",
            "The story does not blame the emperor for anything, and Chu resigned his office by his own choice.",
            "The story is about family duty, not about how to choose officials, and it does not address Yuan rulers.",
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

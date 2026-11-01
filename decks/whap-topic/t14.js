// Topic 1.4 Quiz: State Building in the Americas
// Sources: every stimulus this quiz uses, keyed by id. The short-answer question has no source.
export const sets = {
  "t14-s1": {
    id: "t14-s1", name: "Cieza de León on Inca records and storehouses", intro: "Use the source below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "At the beginning of the new year the rulers of each village came to Cuzco, bringing their quipus, which told how many births there had been during the year, and how many deaths. In this way the Inca and the governors knew ... whether they were able to pay their taxes, and how many men they could count on in the event of war ..." },
        { p: "As this kingdom was so vast, in each of the many provinces there were many storehouses filled with supplies and other needful things; thus, in times of war, wherever the armies went they drew upon the contents of these storehouses ... Then the storehouses were filled up once more with the tributes paid the Inca. If there came a lean year, the storehouses were opened and the provinces were lent what they needed in the way of supplies; then, in a year of abundance, they paid back all they had received." },
        { cite: "Pedro de Cieza de León, The Second Part of the Chronicle of Peru (written c. 1550), translated by Clements R. Markham (London: Hakluyt Society, 1883), pp. 36 to 50, passages selected, text modernized by J. S. Arkenberg, as published in the Internet Modern History Sourcebook, Fordham University. Cieza was a Spanish soldier who traveled through the former Inca lands in the 1540s, after the Spanish conquest that began in 1532, and gathered information from Andean people about Inca rule. Cuzco was the Inca capital. Quipus were knotted cords used to keep records.", url: "https://sourcebooks.web.fordham.edu/mod/1540cieza.asp", kind: "primary" },
      ] },
    ],
  },
  "t14-s2": {
    id: "t14-s2", name: "Many kinds of states in the Americas", intro: "Use the passage below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "Many historians stress that states in the Americas between c. 1200 and c. 1450 took very different forms. In the Mississippi River valley, the city of Cahokia was the center of a chiefdom whose leaders organized maize farmers to build huge earthen mounds. Cahokia had declined by about 1350, possibly because of floods, drought, and the overuse of local resources. In the Southwest, the Ancestral Puebloans of Mesa Verde built homes in the cliffs, but a long drought in the late 1200s helped drive them from the region. On the Yucatán Peninsula, Maya city-states such as Mayapan competed with one another, and none built a lasting empire. In contrast, the Mexica of central Mexico joined with two other cities in 1428 to form the Triple Alliance, which conquered a large region and forced its peoples to pay tribute." },
        { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" },
      ] },
    ],
  },
};

export default {
  forms: [
    { id: "t14", name: "Topic 1.4 Quiz: State Building in the Americas", group: "Unit 1: The Global Tapestry",
      items: [
        // ===== Set 1: Cieza de León on the Inca (1.4) =====
        { id: "t14-m01", skill: "u1", type: "mcq", set: "t14-s1", topic: "1.4", reasoning: "Causation",
          question: "The record keeping described in the first paragraph most directly helped the Inca state to",
          choices: [
            "plan how much labor, tribute, and military service to demand from each community",
            "collect taxes in gold and silver coins",
            "spread an alphabet so that its subjects could write to Cuzco",
            "convert its subjects to Christianity",
          ],
          why: [
            "Correct. The quipus told officials who could pay taxes and \"how many men they could count on in the event of war,\" so the state could assign labor duties, called the mit'a, and soldiers to each community.",
            "The Inca did not use coins. Subjects paid the state mainly in labor and in goods such as cloth and food.",
            "The Inca had no alphabet. The quipus in the excerpt were knotted cords, not a written script.",
            "Christianity came to the Andes with the Spanish after 1532, after the Inca system Cieza describes had been built.",
          ],
          answer: 0 },
        { id: "t14-m02", skill: "u1", type: "mcq", set: "t14-s1", topic: "1.4", reasoning: "Contextualization",
          question: "The storehouses described in the second paragraph were especially useful to the Inca because their empire",
          choices: [
            "stretched across the Andes, where harvests varied greatly between mountain valleys, high plateaus, and the coast",
            "was linked by large rivers that carried grain by boat to Cuzco",
            "used horses and wheeled carts to move food between provinces",
            "imported most of its food from Mesoamerica through long-distance trade",
          ],
          why: [
            "Correct. The Inca ruled a long, mountainous land where frost, drought, and altitude could ruin harvests in one zone but not another, so stored food could feed armies and help provinces in a \"lean year.\"",
            "Inca goods moved over roads on the backs of llamas and porters, not by river boats.",
            "There were no horses in the Americas until the Spanish brought them, and the Inca did not use wheeled carts.",
            "The Inca had little contact with Mesoamerica, and the excerpt says the storehouses were filled with tribute from the provinces.",
          ],
          answer: 0 },
        { id: "t14-m03", skill: "u1", type: "mcq", set: "t14-s1", topic: "1.4", reasoning: "Sourcing and Situation",
          question: "Which of the following should a historian consider most carefully when using Cieza's account as evidence of how the Inca governed?",
          choices: [
            "Cieza was a Spanish soldier who wrote after the conquest, so he depended on what Andean people remembered about Inca rule.",
            "Cieza was an Inca noble who wanted to restore his family to power.",
            "Cieza wrote before the Inca Empire had expanded beyond Cuzco.",
            "Cieza could read the quipus himself and copied their figures exactly.",
          ],
          why: [
            "Correct. Cieza traveled in the Andes in the 1540s, after Inca rule had been broken, so his account rests on informants' memories and on his own view as a Spanish outsider.",
            "Cieza was a Spaniard, not a member of the Inca nobility.",
            "Cieza wrote about 1550, long after the Inca had built their empire in the fifteenth century.",
            "Quipus were read by trained Andean record keepers, and nothing in the excerpt suggests Cieza could read them.",
          ],
          answer: 0 },
        { id: "t14-m04", skill: "u1", type: "mcq", set: "t14-s1", topic: "1.4", reasoning: "Claims and Evidence",
          question: "The second paragraph best supports which conclusion about the Inca state?",
          choices: [
            "It gathered tribute in goods and redistributed it to supply armies and to help provinces in hard times.",
            "It depended on merchants who sold food in large city markets.",
            "It allowed each province to keep its whole harvest and pay nothing to the ruler.",
            "It fed its armies mainly by seizing food from the villages its soldiers passed.",
          ],
          why: [
            "Correct. The storehouses were filled \"with the tributes paid the Inca,\" used by armies, and opened to provinces in lean years, so the state collected goods and gave them back out.",
            "Great markets were a feature of Tenochtitlan, the Mexica capital. The excerpt describes state storehouses, not merchants.",
            "The excerpt says the storehouses were filled with tribute, so provinces did pay the ruler.",
            "The excerpt says that in times of war the armies \"drew upon the contents of these storehouses.\"",
          ],
          answer: 0 },

        // ===== Set 2: practice passage, many kinds of states in the Americas (1.4) =====
        { id: "t14-m05", skill: "u1", type: "mcq", set: "t14-s2", topic: "1.4", reasoning: "Causation",
          question: "The declines of Cahokia and Mesa Verde described in the passage best illustrate which broader pattern?",
          choices: [
            "Societies that depended on farming in one region could be weakened by climate change and strain on local resources.",
            "European diseases killed much of the population of North America before 1450.",
            "Mexica armies conquered states far to the north of central Mexico.",
            "Peoples of the Great Plains used horses to defeat farming societies.",
          ],
          why: [
            "Correct. The passage links both declines to drought, floods, or overuse of resources, which shows how farming societies depended on their environment.",
            "European diseases spread in the Americas only after 1492, long after Cahokia and Mesa Verde had declined.",
            "The Mexica built their empire in central and southern Mexico, and their armies never reached the Mississippi valley or the Southwest.",
            "Horses came to the Americas with the Spanish, so they played no role in these declines.",
          ],
          answer: 0 },
        { id: "t14-m06", skill: "u1", type: "mcq", set: "t14-s2", topic: "1.4", reasoning: "Comparison",
          question: "Based on the passage, which of the following best describes a difference between the Maya city-states and the Mexica state?",
          choices: [
            "The Maya city-states stayed politically divided, while the Mexica and their allies built a large empire that collected tribute.",
            "The Maya grew maize, while the Mexica relied on herding llamas.",
            "The Maya built stepped pyramids for their gods, while the Mexica built none.",
            "The Maya were ruled by the Triple Alliance, while the Mexica had no allies.",
          ],
          why: [
            "Correct. The passage says Maya city-states competed and none built a lasting empire, while the Triple Alliance conquered a large region and demanded tribute.",
            "Both peoples grew maize. Llamas were herded in the Andes, not in Mexico.",
            "The Mexica also built great stepped pyramids, such as the Templo Mayor in Tenochtitlan.",
            "This reverses the passage. The Triple Alliance was formed by the Mexica and two other cities of central Mexico.",
          ],
          answer: 0 },
        { id: "t14-m07", skill: "u1", type: "mcq", set: "t14-s2", topic: "1.4", reasoning: "Claims and Evidence",
          question: "Which of the following, not mentioned in the passage, would best support the argument that states in the Americas took very different forms?",
          choices: [
            "The Inca ruled a centralized empire through appointed officials and thousands of miles of roads, while many peoples of North America lived in small, independent villages.",
            "Many societies across the Americas grew maize, beans, and squash.",
            "Both the Maya and the Mexica built temples on top of stepped pyramids.",
            "Spanish ships reached the islands of the Caribbean in 1492.",
          ],
          why: [
            "Correct. The contrast between a huge centralized empire and small independent villages adds a new example of how different American states and societies were.",
            "This shows a similarity in farming across the Americas, so it does not support an argument about differences.",
            "This is another similarity, not a difference in the form of states.",
            "This marks the start of European contact and says nothing about how American states were organized before it.",
          ],
          answer: 0 },
        { id: "t14-m08", skill: "u1", type: "mcq", set: "t14-s2", topic: "1.4", reasoning: "Contextualization",
          question: "The formation of the Triple Alliance in 1428, mentioned in the passage, took place in which context?",
          choices: [
            "Central Mexico was divided among rival city-states, and the Mexica had earlier been subjects of the powerful Tepanec city of Azcapotzalco.",
            "Spanish ships had begun to explore the coasts of the Caribbean.",
            "Maya city-states had united Mesoamerica under the rule of Mayapan.",
            "The Inca Empire had expanded north into Central America.",
          ],
          why: [
            "Correct. The Mexica had arrived in the Valley of Mexico as newcomers and served the Tepanec rulers of Azcapotzalco. In 1428 they joined Texcoco and Tlacopan to defeat Azcapotzalco and then build their own tribute empire.",
            "Spanish voyages to the Caribbean began in 1492, more than sixty years after the Triple Alliance formed.",
            "The passage says Maya city-states competed and none built a lasting empire, and Mayapan never ruled central Mexico.",
            "The Inca Empire stayed in western South America and never reached Central America.",
          ],
          answer: 0 },

        // ===== SAQ 1: no source, state building in the Americas (1.4) =====
        { id: "t14-q1a", skill: "u1", type: "fr", part: "SAQ 1", sub: "a", topic: "1.4",
          lead: "Answer all parts of the question that follows.",
          prompt: "Identify ONE way rulers of the Mexica or the Inca used religion to strengthen their authority.",
          earns: "The response names one accurate way a Mexica or Inca ruler used religious belief, ritual, or buildings to support his power.",
          yes: [
            "Inca rulers claimed to be descended from Inti, the sun god, so opposing the ruler meant opposing a sacred figure.",
            "Mexica rulers led human sacrifices to Huitzilopochtli, the god of the sun and of war, at the Templo Mayor in Tenochtitlan, presenting war and sacrifice as necessary to keep the universe in order.",
            "The Inca built the Coricancha, a great temple of the sun in Cuzco, and brought the sacred objects of conquered peoples to the capital.",
          ],
          no: [
            "\"The Inca used quipus.\" Quipus were a record keeping tool, not a religious practice.",
            "\"The Mexica spread Christianity.\" Christianity reached the Americas only with the Europeans.",
            "\"Rulers were religious.\" This names no ruler and no practice.",
          ],
          example: "Inca rulers claimed to be descendants of Inti, the sun god. Because the ruler was seen as sacred, his commands carried religious as well as political weight.",
          notExample: "The Mexica had many gods." },
        { id: "t14-q1b", skill: "u1", type: "fr", part: "SAQ 1", sub: "b", topic: "1.4",
          lead: "Answer all parts of the question that follows.",
          prompt: "Describe ONE way a society in the Americas changed its environment to grow more food in the period c. 1200 to c. 1450.",
          earns: "The response names a society in the Americas and describes a specific way it reshaped land or water for farming.",
          yes: [
            "The Inca cut terraces into steep Andean hillsides and built stone walls and channels, which created level fields and held soil and water in place.",
            "The Mexica built chinampas, raised fields made of mud and plant matter in the shallow lakes of the Valley of Mexico, which produced several harvests a year.",
            "Ancestral Puebloans in the Southwest built check dams and ditches to catch rainwater and spread it onto their maize fields.",
          ],
          no: [
            "\"The Inca grew potatoes.\" This names a crop but no change to the environment.",
            "\"The Mexica used water from the Nile.\" The Nile is in Africa.",
            "\"People farmed.\" This names no society and no method.",
          ],
          example: "The Inca built terraces on steep mountainsides in the Andes. Workers cut level steps into the slopes, held them up with stone walls, and brought water to them through channels, which turned land too steep to plow into fields for maize and potatoes.",
          notExample: "The Americas had many kinds of land." },
        { id: "t14-q1c", skill: "u1", type: "fr", part: "SAQ 1", sub: "c", topic: "1.4",
          lead: "Answer all parts of the question that follows.",
          prompt: "Explain ONE reason the Mexica or the Inca were able to expand their empires rapidly in the fifteenth century.",
          earns: "The response gives a specific reason for Mexica or Inca expansion and explains how it helped the state conquer or absorb new lands.",
          yes: [
            "The Mexica joined Texcoco and Tlacopan in the Triple Alliance in 1428, and together their armies were strong enough to defeat neighboring city-states and force them to pay tribute.",
            "Inca roads and state storehouses let large armies move quickly through the Andes and find food along the way, so the Inca could fight far from Cuzco.",
            "The Inca often offered gifts and positions to local lords who submitted peacefully, so many regions joined the empire without a long war.",
            "Mexica society gave higher rank to warriors who took captives in battle, which gave young men a strong reason to fight in new campaigns.",
          ],
          no: [
            "\"They had guns and horses.\" Guns and horses arrived in the Americas with the Spanish after 1492.",
            "\"They were strong.\" This restates the prompt and explains nothing.",
            "\"The Inca joined the Triple Alliance.\" The Triple Alliance was formed by the Mexica and their neighbors in central Mexico, not by the Inca.",
          ],
          example: "The Inca expanded quickly because of their roads and storehouses. Roads linked Cuzco to distant provinces, and storehouses along them held food and supplies, so Inca armies could march long distances and stay fed. This let rulers such as Pachacuti and his son Topa Inca conquer lands from present-day Ecuador to Chile within about two generations.",
          notExample: "The Inca had a big empire in South America." },
      ] },
  ],
};

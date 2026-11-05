// AP World History: Modern, Topic 2.6 Quiz: Environmental Consequences of Connectivity (Unit 2: Networks of Exchange, c. 1200 to c. 1450)
// Sources: every stimulus this quiz uses, keyed by id.
export const sets = {
  "t26-s1": {
    id: "t26-s1", name: "A chronicle of Prague on the plague", intro: "Use the source below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "... some students, coming from Bologna into Bohemia, saw that in most of the cities and castles they passed through few remained alive, and in some all were dead. ... Priests, too, ministering the sacraments, and doctors medicines, to the sick were infected by them and died, and so many passed out of this life without confession or the sacraments of the Church, as the priests were dead. ... In many places, too, the air was more infected and more deadly than poisoned food, from the corruption of the corpses, since there was no one left to bury them. Of the foresaid students, moreover, only one returned to Bohemia, and his companions all died on the journey." },
        { cite: "A chronicle of Prague (Chronicon Pragense), on the plague of 1348 and 1349, as translated and quoted in Francis Aidan Gasquet, The Great Pestilence (A.D. 1348-9), Now Commonly Known as the Black Death (London: Simpkin Marshall, Hamilton, Kent & Co., 1893), Project Gutenberg eBook 45815. Gasquet's note cites the edition by Loserth in Fontes rerum Austriacarum, Scriptores, vol. i, p. 395. Bologna, in northern Italy, had one of the oldest universities in Europe, and students came to it from across Latin Christendom. Bohemia is the region around Prague, in the modern Czech Republic.", url: "https://gutenberg.org/cache/epub/45815/pg45815-images.html", kind: "primary" },
      ] },
    ],
  },
  "t26-s2": {
    id: "t26-s2", name: "Crops on the move", intro: "Use the passage below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "Long-distance exchange did more than carry goods to market. It also carried plants into new environments. Over several centuries, Muslim farmers, merchants, and rulers brought crops such as sugarcane, citrus fruits, cotton, and rice west from India and Persia to Egypt, Sicily, and Spain, along with irrigation methods that let these crops grow in dry lands. Across the Indian Ocean, bananas from Southeast Asia became a staple food in parts of East Africa, where they grew well in wet regions. By the period c. 1200 to c. 1450, these crops had changed how land was farmed in much of Afro-Eurasia. In this view, the environmental effects of exchange were as lasting as its commercial effects, because a crop, once planted, kept spreading long after the merchants who carried it had gone." },
        { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" },
      ] },
    ],
  },
  "t26-s3": {
    id: "t26-s3", name: "A Sicilian friar on the plague at Messina", intro: "Use the source below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "A most deadly pestilence ... sprang up over the entire island. It happened that in the month of October, in the year of our Lord, 1347, about the beginning of the month, twelve Genoese ships, flying from the divine vengeance which our Lord for their sins had sent upon them, put into the port of Messina, bringing with them such a sickness clinging to their very bones that, did anyone speak to them, he was directly struck with a mortal sickness from which there was no escape." },
        { p: "Seeing what a calamity of sudden death had come to them by the arrival of the Genoese, the people of Messina drove them in all haste from their city and port. But the sickness remained and a terrible mortality ensued." },
        { cite: "Michael of Piazza (Michael Platiensis), a Franciscan friar in Sicily and a contemporary of the events, chronicle of Sicily, as translated and quoted in Francis Aidan Gasquet, The Great Pestilence (A.D. 1348-9), Now Commonly Known as the Black Death (London: Simpkin Marshall, Hamilton, Kent & Co., 1893), Project Gutenberg eBook 45815. The island is Sicily, and Messina is its chief port facing mainland Italy. Genoa was an Italian city whose merchants traded at Caffa and other Black Sea ports.", url: "https://gutenberg.org/cache/epub/45815/pg45815-images.html", kind: "primary" },
      ] },
    ],
  },
  "t26-s4": {
    id: "t26-s4", name: "Champa rice and Song China", intro: "Use the passage below to answer all parts of the question that follows.",
    sources: [
      { title: "Source", blocks: [
        { p: "Some of the most lasting effects of exchange came from seeds rather than silk. In the early eleventh century, the Song government spread a new kind of rice that had reached China from Champa, a kingdom in what is now southern Vietnam. Champa rice ripened faster and needed less water than older kinds, so farmers in parts of southern China could harvest two crops a year and plant rice on higher, drier land. Over the following centuries, farmers drained marshes and cut terraces into hillsides to grow more rice. The larger food supply helped China's population pass 100 million by c. 1200, and the south became the center of Chinese population and wealth. In this view, a single crop carried from one region to another reshaped both the land and the society of China." },
        { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" },
      ] },
    ],
  },
};

export default {
  forms: [
    { id: "t26", name: "Topic 2.6 Quiz: Environmental Consequences of Connectivity", group: "Unit 2: Networks of Exchange",
      items: [
        // ---------- Set 1: a chronicle of Prague on the plague ----------
        { id: "t26-m01", skill: "u2", type: "mcq", set: "t26-s1", topic: "2.6", reasoning: "Contextualization",
          question: "The deaths the students saw on their journey from Bologna are best understood in the context of which development?",
          choices: [
            "The spread of the plague from Italian ports, which ships from the Black Sea reached in 1347, along the roads that linked Italy with central Europe",
            "The Mongol invasion of central Europe in 1241 and 1242, in which Mongol armies destroyed towns in Poland and Hungary",
            "The Hundred Years' War between England and France, which began in 1337",
            "The Hussite wars in Bohemia, which followed the execution of the reformer Jan Hus in 1415",
          ],
          why: [
            "Merchant ships carried the plague from Black Sea ports to Italy in 1347, and from there it moved north along the roads that students, merchants, and pilgrims traveled, which is why the students met the dead in town after town.",
            "The Mongol invasion of central Europe was real, but it took place about a century earlier, and the excerpt describes sickness, not warfare.",
            "The Hundred Years' War was being fought at this time, but in France, and the excerpt describes people killed by sickness on the road from Italy to Bohemia.",
            "The Hussite wars came in the 1420s and 1430s, long after the events in the excerpt.",
          ], answer: 0 },

        { id: "t26-m02", skill: "u2", type: "mcq", set: "t26-s1", topic: "2.6", reasoning: "Sourcing and situation",
          question: "Which of the following would most limit the excerpt's usefulness as evidence of how many people died in the places the students passed through?",
          choices: [
            "The account rests on what one surviving student reported, and it describes the dead in general terms without counts for any town.",
            "The chronicler blamed the deaths on corrupted air rather than on fleas and rats.",
            "The chronicler was a Mongol official who wanted to hide the losses of the Golden Horde.",
            "The chronicle was written two centuries after the plague.",
          ],
          why: [
            "Only one student came home, so the chronicle depends on one traveler's memory of the places he passed, and phrases such as \"few remained alive\" give no numbers a historian could compare.",
            "The belief in corrupted air does limit what the excerpt can tell a historian about the cause of the disease, but the question asks about the number of deaths.",
            "The chronicle comes from Prague and shows a Christian point of view; it has nothing to do with the Golden Horde.",
            "The chronicle reports the students' journey during the plague itself, and nothing in it suggests that it was written centuries later.",
          ], answer: 0 },

        { id: "t26-m03", skill: "u2", type: "mcq", set: "t26-s1", topic: "2.6", reasoning: "Comparison",
          question: "The spread of disease described in the excerpt is most similar to which later development?",
          choices: [
            "The spread of smallpox among Indigenous peoples of the Americas after Europeans arrived in 1492",
            "The spread of the potato from the Andes to Europe and Asia after 1500",
            "The spread of Buddhism from India to East Asia along the Silk Roads",
            "The spread of printing with movable type across Europe after c. 1450",
          ],
          why: [
            "In both cases, travel along new or growing networks carried a deadly disease into populations with little or no immunity to it, and the disease killed a large share of the people.",
            "The potato was a crop that added to the food supply; it did not kill people the way a disease did.",
            "Buddhism spread along the Silk Roads centuries earlier, and it was a religion, not a disease.",
            "Printing spread a technology and ideas, not a disease.",
          ], answer: 0 },

        // ---------- Set 2: practice passage on crops ----------
        { id: "t26-m04", skill: "u2", type: "mcq", set: "t26-s2", topic: "2.6", reasoning: "Claims and evidence in sources",
          question: "Which of the following best describes the main argument of the passage?",
          choices: [
            "The movement of crops along networks of exchange changed farming and the environment in ways that lasted for centuries.",
            "Trade in crops earned merchants more profit than trade in luxury goods such as silk.",
            "Muslim rulers forced farmers in Sicily and Spain to give up the crops they had grown before.",
            "The spread of crops along trade routes mattered less than the spread of disease along the same routes.",
          ],
          why: [
            "The passage says new crops changed how land was farmed across Afro-Eurasia and that these effects were as lasting as the commercial effects of trade.",
            "The passage does not compare the profits of different goods.",
            "The passage says farmers, merchants, and rulers brought crops west; it says nothing about forcing farmers to give up older crops.",
            "The passage does not discuss disease, so it makes no claim that crops mattered less.",
          ], answer: 0 },

        { id: "t26-m05", skill: "u2", type: "mcq", set: "t26-s2", topic: "2.6", reasoning: "Causation",
          question: "Which of the following most directly made possible the westward spread of crops described in the passage?",
          choices: [
            "The growth of Dar al-Islam, which linked lands from Persia to Spain through a shared religion, language, and trade",
            "The Mongol conquests, which united Persia, Egypt, and Spain under a single empire",
            "The Columbian Exchange, which carried crops between the Eastern and Western Hemispheres",
            "The voyages of Zheng He, which carried Chinese crops to the coasts of Africa",
          ],
          why: [
            "Muslim states and merchants connected India and Persia with Egypt, Sicily, and Spain, so crops and irrigation methods could move west across the Islamic world.",
            "The Mongols never ruled Egypt or Spain; the Mamluks of Egypt defeated them at Ain Jalut in 1260.",
            "The Columbian Exchange began after 1492, and the crops in the passage all came from Afro-Eurasia.",
            "Zheng He sailed from 1405 to 1433, and the passage describes crops moving from India and Persia, not from China.",
          ], answer: 0 },

        { id: "t26-m06", skill: "u2", type: "mcq", set: "t26-s2", topic: "2.6", reasoning: "Comparison",
          question: "The spread of crops described in the passage differed from the spread of the bubonic plague in the fourteenth century in that the crops",
          choices: [
            "were carried on purpose by people who expected to benefit from them",
            "moved only along sea routes, never overland",
            "spread from western Europe toward Asia",
            "caused populations to fall in the regions they reached",
          ],
          why: [
            "Farmers, merchants, and rulers chose to plant new crops because they promised more food or profit, while the plague spread without anyone intending it, through fleas, rats, and sick travelers.",
            "The passage describes crops crossing the lands of the Islamic world as well as the Indian Ocean, and the plague also moved both overland and by sea.",
            "The passage describes crops moving west from India and Persia and from Southeast Asia to Africa, not from Europe to Asia.",
            "New crops added to the food supply; it was the plague that caused populations to fall.",
          ], answer: 0 },

        // ---------- Set 3: Michael of Piazza on Messina ----------
        { id: "t26-m07", skill: "u2", type: "mcq", set: "t26-s3", topic: "2.6", reasoning: "Claims and evidence in sources",
          question: "The excerpt best supports which conclusion about the spread of the plague in 1347?",
          choices: [
            "Merchant ships carried the disease from port to port across the Mediterranean.",
            "The disease began in Sicily and spread east toward Asia.",
            "Driving out the sick sailors kept the disease from taking hold in Messina.",
            "The disease spread mainly through food that the Genoese sold in Messina.",
          ],
          why: [
            "The friar says the sickness arrived with twelve Genoese ships; other ships from the Black Sea carried it to ports such as Genoa, Venice, Marseille, and Alexandria.",
            "The excerpt says the disease came to Sicily from outside, on ships, so it did not begin there.",
            "The excerpt says the sickness remained after the Genoese were driven out and a terrible mortality followed.",
            "The excerpt blames contact with the sailors and says nothing about food.",
          ], answer: 0 },

        { id: "t26-m08", skill: "u2", type: "mcq", set: "t26-s3", topic: "2.6", reasoning: "Sourcing and situation",
          question: "The friar's description of the Genoese as fleeing \"divine vengeance\" for their sins most likely reflects",
          choices: [
            "a common belief of the time that epidemics were a punishment sent by God",
            "the friar's knowledge that fleas carried by rats spread the disease",
            "the friar's wish to increase Sicily's trade with Genoa",
            "the influence of Mongol religious beliefs on the clergy of Sicily",
          ],
          why: [
            "No one in the fourteenth century knew that bacteria cause plague, so many Christian and Muslim writers, especially members of the clergy such as this Franciscan, explained it as God's judgment.",
            "The role of fleas and rats in spreading plague was not discovered until the 1890s.",
            "The friar blames the Genoese for bringing death; he does not praise trade with them.",
            "The friar writes as a Catholic Christian; nothing in the excerpt reflects Mongol beliefs.",
          ], answer: 0 },

        // ---------- SAQ: practice passage on Champa rice ----------
        { id: "t26-q1a", skill: "u2", type: "fr", set: "t26-s4", part: "SAQ 1", sub: "a", topic: "2.6",
          lead: "Use the passage below to answer all parts of the question that follows.",
          prompt: "Identify ONE piece of historical evidence that would support the passage's argument.",
          earns: "The response identifies a specific, accurate development in Song China, beyond the facts given in the passage, that shows a larger food supply changing Chinese society or its economy.",
          yes: [
            "Hangzhou, the Southern Song capital, grew into one of the largest cities in the world in the thirteenth century.",
            "Barges on the Grand Canal carried rice from southern China to feed cities and armies in the north.",
            "Song China had many market towns where farmers sold rice and other crops for cash, which shows a more commercial economy.",
          ],
          no: [
            "\"China had a lot of people.\" This only repeats the passage and names no new evidence.",
            "\"Zheng He sailed to East Africa.\" His voyages came under the Ming in the early fifteenth century and say nothing about the effects of rice farming.",
          ],
          example: "During the Southern Song, the capital Hangzhou grew into one of the largest cities in the world, which was possible only because farmers in the south grew enough rice to feed so many city dwellers.",
          notExample: "Rice is an important food in China." },

        { id: "t26-q1b", skill: "u2", type: "fr", set: "t26-s4", part: "SAQ 1", sub: "b", topic: "2.6",
          lead: "Use the passage below to answer all parts of the question that follows.",
          prompt: "Describe ONE way the spread of disease along networks of exchange in the fourteenth century had effects on population different from those described in the passage.",
          earns: "The response describes how a disease, such as the bubonic plague, spread along trade routes and caused populations to fall, in contrast to the population growth the passage describes.",
          yes: [
            "The Black Death spread from Black Sea ports to the Mediterranean on merchant ships in 1347 and killed roughly a third or more of the people of Europe.",
            "The plague reached Egypt and Syria in 1347 and 1348 along trade routes and killed a large share of the people of Cairo and Damascus.",
          ],
          no: [
            "\"Disease killed people.\" It names no disease or place and does not tie the disease to networks of exchange.",
            "\"Smallpox killed many of the Aztecs.\" That happened after 1519, not in the fourteenth century.",
          ],
          example: "In the 1340s the bubonic plague traveled along caravan routes to the Black Sea and then on merchant ships to Italy and Egypt, killing perhaps a third or more of the people of Europe, so while Champa rice helped China's population grow, the plague made the populations it reached shrink.",
          notExample: "The plague was a very bad disease." },

        { id: "t26-q1c", skill: "u2", type: "fr", set: "t26-s4", part: "SAQ 1", sub: "c", topic: "2.6",
          lead: "Use the passage below to answer all parts of the question that follows.",
          prompt: "Explain ONE way the developments described in the passage contributed to China's role in networks of exchange in the period c. 1200 to c. 1450.",
          earns: "The response explains how the growth of population and wealth in southern China led to more Chinese production for trade or more Chinese demand for foreign goods.",
          yes: [
            "A larger and richer population in southern China produced more silk and porcelain for export and bought more spices and other foreign goods, so southern ports such as Quanzhou and Guangzhou became major centers of Indian Ocean trade.",
            "Because the south became China's richest region, its coastal cities drew Muslim and other foreign merchants, who settled in Quanzhou and traded Chinese goods across the Indian Ocean.",
          ],
          no: [
            "\"China traded a lot.\" It does not explain how the developments in the passage led to trade.",
            "\"China built the Great Wall to stop trade.\" This is inaccurate and unrelated to the passage.",
          ],
          example: "As Champa rice fed a growing population in southern China, more people worked making silk and porcelain for sale, and wealthy buyers wanted spices and other imports, so southern ports such as Quanzhou became some of the busiest in the Indian Ocean network.",
          notExample: "China was a big country with many farmers." },
      ] },
  ],
};

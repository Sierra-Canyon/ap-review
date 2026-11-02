// Topic 1.6 Quiz: Developments in Europe from c. 1200 to c. 1450
// Sources: every stimulus (multiple-choice sets), keyed by id. The SAQ has no source.
export const sets = {
  "t16-s1": {
    id: "t16-s1", name: "A villein's obligations at Alwalton, 1279", intro: "Use the source below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "Hugh Miller holds 1 virgate of land in villenage by paying thence to the said abbot 3s. 1d. Likewise the same Hugh works through the whole year except 1 week at Christmas, 1 week at Easter, and 1 at Whitsuntide, that is in each week 3 days, each with 1 man, and in autumn each day with 2 men, performing the said works at the will of the said abbot as in plowing and other work. Likewise he gives 1 bushel of wheat for benseed and 18 sheaves of oats for foddercorn. Likewise he gives 3 hens and 1 cock yearly and 5 eggs at Easter. Likewise he does carrying to Peterborough and to Jakele and no where else, at the will of the said abbot. He gives also merchet and heriot, and is tallaged at the feast of St. Michael, at the will of the said abbot." },
        { cite: "Hundred Rolls inquiry of 1279, account of the manor of Alwalton in Huntingdonshire, England, held by the abbot of Peterborough, translated in Translations and Reprints from the Original Sources of European History, vol. III, no. 5 (Philadelphia: Department of History of the University of Pennsylvania, 1897), pp. 4 to 8, as published in the Internet Medieval Sourcebook, Fordham University (\"Alwalton Manor, 1279\"), which credits the translation to J. H. Robinson. The Hundred Rolls were surveys of landholding and rights ordered by King Edward I. Where the Sourcebook text prints the letter I for the number one, the digit 1 is used here. A virgate was a holding of farmland, often about 30 acres; villenage means holding land as a villein, or serf. 3s. 1d. is three shillings and one penny, and Whitsuntide is the Christian feast of Pentecost. Benseed and foddercorn were grain owed to the lord for seed and for animal feed. Merchet was a fee paid to the lord when a villein's daughter married, heriot was a payment owed to the lord when a tenant died, and to be tallaged is to be taxed by the lord. The feast of St. Michael falls on September 29.", url: "https://sourcebooks.web.fordham.edu/source/alwalton.asp", kind: "primary" },
      ] },
    ],
  },
  "t16-s2": {
    id: "t16-s2", name: "The Confirmation of the Charters, 1297", intro: "Use the source below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "Moreover we have granted for us and our heirs, as well to archbishops, bishops, abbots, priors, and other folk of holy Church, as also to earls, barons, and to all the community of the land, that for no business from henceforth will we take such manner of aids, mises, nor prises from our realm, but by the common assent of all the realm, and for the common profit thereof, saving the ancient aids and prises due and accustomed." },
        { p: "And for so much as the more part of the community of the realm find themselves sore grieved with the maletote on wools, that is to wit, a toll of forty shillings for every sack of wool, and have made petition to us to release the same; we, at their requests, have fully released it, and have granted that we shall never take this nor any other without their common assent and good-will...." },
        { cite: "Confirmation of the Charters (Confirmatio Cartarum, 1297), issued in the name of King Edward I of England, clauses 6 and 7, English translation as published by the Avalon Project, Lillian Goldman Law Library, Yale Law School. The page does not name the translator. The document speaks in the king's voice and confirmed Magna Carta and the Charter of the Forest. Aids and mises were grants of money to the king, and prises were goods that royal officials seized for the king's use. The maletote (\"evil toll\") was a heavy tax on wool exports that Edward I imposed in 1294 to pay for his wars.", url: "https://avalon.law.yale.edu/medieval/confcha.asp", kind: "primary" },
      ] },
    ],
  },
  "t16-s3": {
    id: "t16-s3", name: "The Church in a divided Europe", intro: "Use the passage below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "In a Europe divided among many kings, nobles, and city governments, the Roman Catholic Church was the one institution that reached almost everyone. Parish priests baptized, married, and buried people in nearly every village, and peasants paid the Church a tithe, one tenth of their harvest. Latin was the shared language of worship, law, and learning, and the new universities trained clergy and royal officials from many kingdoms. The Church also used its power to enforce religious unity. In 1209 the pope launched a crusade against the Cathars of southern France, whom the Church called heretics, and in 1215 a Church council ordered Jews and Muslims in Christian lands to wear clothing that set them apart. In the fourteenth century, however, the popes' move to Avignon and a later split between rival popes weakened the Church's authority." },
        { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" },
      ] },
    ],
  },
};

export default {
  forms: [
    { id: "t16", name: "Topic 1.6 Quiz: Developments in Europe", group: "Unit 1: The Global Tapestry",
      items: [
        // ===== Set 1: A villein's obligations at Alwalton, 1279 =====
        { id: "t16-m01", skill: "u1", type: "mcq", set: "t16-s1", topic: "1.6", reasoning: "Developments and processes",
          question: "Hugh Miller's obligations in the excerpt best illustrate which feature of European society in the period c. 1200 to c. 1450?",
          choices: [
            "Under manorialism, serfs held land from a lord in return for labor, goods, and fees.",
            "Under the guild system, craft workers in towns owed fees and service to their masters.",
            "Under feudalism, knights held land from a lord in return for military service.",
            "Under chattel slavery, enslaved workers could be bought and sold as property.",
          ],
          why: [
            "Correct. Hugh holds land \"in villenage\" and owes the abbot weekly labor, grain, hens, eggs, carrying service, and fees, which is the manorial system of serfdom.",
            "Guilds organized craft workers in towns, but Hugh is a peasant farmer who owes plowing and harvest work to a landlord.",
            "Knights held land in return for military service, but Hugh owes farm labor and payments, not fighting.",
            "Serfs like Hugh were bound to the land and owed services, but they were not owned and sold as property the way enslaved people were.",
          ],
          answer: 0 },
        { id: "t16-m02", skill: "u1", type: "mcq", set: "t16-s1", topic: "1.6", reasoning: "Sourcing and situation",
          question: "The excerpt comes from a survey ordered by the king of England. Which of the following best describes the purpose of recording details like those in the excerpt?",
          choices: [
            "To record who held land and what rents and services were owed, so that rights and income could be known and enforced",
            "To list the villeins who had earned their freedom so that they could move to towns",
            "To set the wages that lords had to pay farm workers after a fall in population",
            "To count the members of each parish so that the pope could collect a new tax",
          ],
          why: [
            "Correct. The entry lists Hugh's land, rent, labor, and fees in detail, which is the information a landholder or the king would need to know and enforce what was owed.",
            "The excerpt describes Hugh's continuing obligations, not his freedom, and says nothing about moving to towns.",
            "Laws setting wages came after the Black Death of 1347 to 1351; this survey was made in 1279 and lists services, not wages.",
            "The survey was ordered by the king, not the pope, and it records one tenant's obligations to his lord rather than a count of people.",
          ],
          answer: 0 },
        { id: "t16-m03", skill: "u1", type: "mcq", set: "t16-s1", topic: "1.6", reasoning: "Claims and evidence in sources",
          question: "The fact that Hugh Miller owes his services to an abbot best supports which of the following conclusions?",
          choices: [
            "The Church was a major landholder that drew wealth from the labor of peasants.",
            "Monasteries had stopped owning land after the Church was reformed.",
            "Abbots were royal officials appointed to collect the king's taxes.",
            "Peasants who worked for the Church were free from the obligations of serfdom.",
          ],
          why: [
            "Correct. The abbot of Peterborough holds the manor and receives Hugh's rent, labor, grain, and fees, which shows the Church as a great lord over serfs.",
            "The excerpt shows a monastery's abbot holding land and collecting services, which contradicts this claim.",
            "An abbot was the head of a monastery, a Church official, not a royal tax collector, and Hugh's payments go to the abbot.",
            "Hugh holds land in villenage and owes heavy services to the abbot, so working for the Church did not free him from serfdom.",
          ],
          answer: 0 },

        // ===== Set 2: The Confirmation of the Charters, 1297 =====
        { id: "t16-m04", skill: "u1", type: "mcq", set: "t16-s2", topic: "1.6", reasoning: "Contextualization",
          question: "Which of the following most directly led to the promises in the excerpt?",
          choices: [
            "Resentment of the heavy taxes the king collected to pay for wars with France and Scotland",
            "The labor shortage caused by the Black Death, which led peasants to demand higher wages",
            "The defeat of English armies by Joan of Arc at the end of the Hundred Years' War",
            "A papal order that freed the clergy of England from all royal authority",
          ],
          why: [
            "Correct. Edward I raised aids, seized goods, and imposed the wool tax to pay for his wars, and in 1297 the clergy, barons, and others forced him to promise to tax only with their consent.",
            "The Black Death came in 1347 to 1351, half a century after this document.",
            "Joan of Arc led French forces in 1429 to 1430, more than a century after this document; the Hundred Years' War began only in 1337.",
            "Pope Boniface VIII did forbid kings to tax the clergy without his consent in 1296, but he never freed the clergy from all royal authority, and the excerpt answers complaints from barons and the whole community, not only the clergy.",
          ],
          answer: 0 },
        { id: "t16-m05", skill: "u1", type: "mcq", set: "t16-s2", topic: "1.6", reasoning: "Claims and evidence in sources",
          question: "In the excerpt, the king promises to",
          choices: [
            "take no new grants of money or goods without the common assent of the realm",
            "give up all customary taxes and aids that earlier kings had collected",
            "let the barons choose the next king of England",
            "end the payments that villeins owed to their lords",
          ],
          why: [
            "Correct. The king promises to take aids, mises, and prises only \"by the common assent of all the realm\" and to take no toll like the maletote without common assent.",
            "The excerpt keeps \"the ancient aids and prises due and accustomed,\" so the king does not give up all customary taxes.",
            "The excerpt concerns taxes and seizures of goods, not the choice of a king.",
            "The excerpt deals with what the king takes from the realm, not with what peasants owe their lords.",
          ],
          answer: 0 },
        { id: "t16-m06", skill: "u1", type: "mcq", set: "t16-s2", topic: "1.6", reasoning: "Continuity and change",
          question: "The excerpt best reflects which of the following developments in western Europe in the period c. 1200 to c. 1450?",
          choices: [
            "Monarchs needed the consent of nobles, clergy, and other groups to raise money, which gave assemblies such as Parliament a growing role.",
            "Monarchs gained absolute power and no longer needed the support of nobles or the Church.",
            "The Church lost its lands and wealth to monarchs who closed the monasteries.",
            "Feudal obligations disappeared as towns and merchants took control of royal governments.",
          ],
          why: [
            "Correct. The king grants the clergy, earls, barons, and \"all the community of the land\" a say over new taxes, part of a long change in which English kings asked Parliament to approve taxes.",
            "The excerpt shows the opposite: the king had to make promises to clergy and nobles in order to keep their support.",
            "The excerpt names archbishops, bishops, abbots, and priors as groups with rights, and the closing of English monasteries came only in the sixteenth century.",
            "Feudal and manorial obligations continued in this period, and the excerpt addresses clergy and barons as well as the wider community.",
          ],
          answer: 0 },

        // ===== Set 3: The Church in a divided Europe =====
        { id: "t16-m07", skill: "u1", type: "mcq", set: "t16-s3", topic: "1.6", reasoning: "Claims and evidence in sources",
          question: "Which of the following, not mentioned in the passage, would best support the argument that the Church helped hold together a politically divided Europe?",
          choices: [
            "Pilgrims from many kingdoms traveled to the same shrines, such as Santiago de Compostela in Spain and Canterbury in England.",
            "The Hanseatic League linked merchant cities around the Baltic and North Seas.",
            "The kings of England and France fought the Hundred Years' War from 1337 to 1453.",
            "The Golden Bull of 1356 gave seven princes the right to choose the Holy Roman emperor.",
          ],
          why: [
            "Correct. Shared shrines drew Christians across political borders, which shows the Church creating ties that kingdoms did not.",
            "The Hanseatic League did link many cities, but through trade, not through the Church.",
            "The Hundred Years' War shows division between kingdoms, which works against the argument.",
            "The Golden Bull concerns the politics of the Holy Roman Empire and confirmed the power of the princes, not the unifying role of the Church.",
          ],
          answer: 0 },
        { id: "t16-m08", skill: "u1", type: "mcq", set: "t16-s3", topic: "1.6", reasoning: "Causation",
          question: "The actions against the Cathars, Jews, and Muslims described in the passage best support which of the following conclusions?",
          choices: [
            "Church leaders used their authority to enforce religious conformity, which led to the persecution of religious minorities.",
            "The Church protected religious minorities as long as they paid a special tax, as Muslim rulers did with Christians and Jews.",
            "Kings used charges of heresy to break the power of the popes over their kingdoms.",
            "Church councils worked to expand trade between Christian and Muslim merchants in the Mediterranean.",
          ],
          why: [
            "Correct. A crusade against people the Church called heretics and rules marking Jews and Muslims as outsiders show the Church using its power to enforce one faith.",
            "Muslim states did let Christians and Jews practice their faiths in return for the jizya tax, but the passage describes the Church acting against minorities, not protecting them.",
            "The passage says the pope launched the crusade against the Cathars; it does not describe kings using heresy charges against popes.",
            "Italian merchants did trade with Muslim ports, but the actions in the passage set religious groups apart rather than expanding trade.",
          ],
          answer: 0 },

        // ===== SAQ 1: no source, monarchs, war, and the Church =====
        { id: "t16-q1a", skill: "u1", type: "fr", part: "SAQ 1", sub: "a", topic: "1.6",
          lead: "Answer all parts of the question that follows.",
          prompt: "Identify ONE way the Hundred Years' War (1337 to 1453) changed the power of the French or English monarchy.",
          earns: "The response names one accurate change in royal power in France or England that came from the Hundred Years' War.",
          yes: [
            "French kings gained the right to collect a regular tax, the taille, without asking an assembly each time.",
            "Charles VII of France created a permanent royal army in the 1440s, so the king depended less on nobles for soldiers.",
            "English kings had to ask Parliament again and again for taxes to pay for the war, which increased Parliament's power.",
          ],
          no: [
            "\"The war made kings stronger.\" This repeats the idea of change without naming how.",
            "\"England conquered all of France.\" By 1453 England had lost almost all its lands in France except Calais.",
            "\"The war ended feudalism.\" This is too broad, and feudal ties lasted after the war.",
          ],
          example: "During the Hundred Years' War, the French king won the right to collect a regular tax and used it to pay a permanent royal army, so he relied less on nobles to fight for him.",
          notExample: "The Hundred Years' War was a long war between England and France." },
        { id: "t16-q1b", skill: "u1", type: "fr", part: "SAQ 1", sub: "b", topic: "1.6",
          lead: "Answer all parts of the question that follows.",
          prompt: "Describe ONE way the Christian kingdoms of the Iberian Peninsula expanded their power in the period c. 1200 to c. 1450.",
          earns: "The response describes a specific, accurate way that Castile, Aragon, or Portugal gained land or power in this period.",
          yes: [
            "During the Reconquista, Castile conquered Muslim cities in southern Spain, taking Córdoba in 1236 and Seville in 1248.",
            "After Christian kingdoms defeated the Almohads at Las Navas de Tolosa in 1212, they advanced south until only Granada remained under Muslim rule.",
            "The Crown of Aragon conquered Majorca and Valencia from Muslim rulers in the 1220s and 1230s and built a trading empire in the Mediterranean.",
          ],
          no: [
            "\"They conquered the Aztecs.\" The Spanish conquest of the Mexica began in 1519, after this period.",
            "\"Ferdinand and Isabella took Granada in 1492.\" This is after c. 1450 and is not in the period the prompt asks about.",
            "\"They fought Muslims.\" This is too vague to describe how they expanded.",
          ],
          example: "During the Reconquista, the kingdom of Castile pushed south against Muslim states and captured major cities such as Córdoba in 1236 and Seville in 1248, so that by the 1260s only Granada was still ruled by Muslims.",
          notExample: "Spain and Portugal became powerful countries." },
        { id: "t16-q1c", skill: "u1", type: "fr", part: "SAQ 1", sub: "c", topic: "1.6",
          lead: "Answer all parts of the question that follows.",
          prompt: "Explain ONE way the Roman Catholic Church limited the power of European monarchs in the period c. 1200 to c. 1450.",
          earns: "The response gives a specific, accurate way the Church limited a ruler's power and explains how it did so.",
          yes: [
            "Popes could excommunicate rulers or close churches in a kingdom; Pope Innocent III placed England under an interdict in 1208 and excommunicated King John, which pressured John to accept the pope's choice of archbishop.",
            "Pope Boniface VIII ordered in 1296 that kings could not tax the clergy without papal consent, which challenged the kings' right to draw on the wealth of the Church.",
            "The Church held large estates and collected tithes, and clergy were tried in Church courts, so a large share of land, wealth, and people lay partly outside the king's control.",
          ],
          no: [
            "\"The Church was powerful.\" This does not explain how it limited monarchs.",
            "\"The pope started the Protestant Reformation.\" The Reformation began in the sixteenth century and was a challenge to the pope, not a papal action.",
            "\"The Church ruled all of Europe.\" This is false; kings and nobles held political power.",
          ],
          example: "The Church limited monarchs because popes could excommunicate them. When King John of England refused to accept the pope's choice for archbishop of Canterbury, Pope Innocent III placed England under an interdict in 1208 and excommunicated John the next year, and in 1213 John gave in and accepted the pope's choice.",
          notExample: "Kings and popes did not get along." },
      ] },
  ],
};

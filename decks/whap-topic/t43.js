// Topic 4.3 Quiz: Columbian Exchange
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why) => ({ id: "t43-m0" + n, skill: "u4", type: "mcq", set, topic: "4.3", reasoning, question, choices, why, answer: 0 });
const Q = (sub, prompt, earns, yes, no, example, notExample) => ({ id: "t43-q1" + sub, skill: "u4", type: "fr", set: "t43-s3", part: "SAQ 1", sub, topic: "4.3", lead: SAQ, prompt, earns, yes, no, example, notExample });

export const sets = {
  "t43-s1": {
    id: "t43-s1", name: "Garcilaso de la Vega on new animals and fruits in Peru", intro: ONE,
    sources: [{ title: "Source", blocks: [
      { p: "Many cows were introduced soon after the conquest, and spread over the whole country. The same must have been the case with pigs and sheep; for I remember having seen them at Cuzco, when I was quite a child. ..." },
      { p: "The first bullocks I saw at the plough were in the valley of Cuzco in the year 1550, one year more or less, and they belonged to a knight named Juan Rodriguez de Villalobos ... A whole army of Indians took me to see them, who came from all parts, astonished at a sight so wonderful and novel for them and for me. They said that the Spaniards were too idle to work, and that they forced those great animals to do their work for them." },
      { p: "... There were neither figs, pomegranates, citrons, oranges, sweet or sour limes, apples, pears, quinces, nectarines, peaches, nor any of the numerous kinds of cherries in Peru. ... But all the above-mentioned fruits, and many others have since been introduced and are now in such abundance, and so much finer than the same fruits of their class that are grown in Spain, that the Spaniards who see them are struck with admiration. ... There were no sugar canes; but at present, owing to the diligence of the Spaniards, and the great fertility of the land, there is such abundance of all these things that, while at first they were valued so highly, they are now despised and held very cheap." },
      { cite: "Garcilaso de la Vega, called \"El Inca,\" Royal Commentaries of the Incas, Part One, Book IX (first published in Spanish in Lisbon in 1609), translated by Clements R. Markham as First Part of the Royal Commentaries of the Yncas, vol. 2 (London: Hakluyt Society, 1871), pp. 470 and 493 to 494, as digitized by the Internet Archive. Garcilaso was born in Cuzco in 1539, the son of a Spanish conquistador and an Inca noblewoman, and moved to Spain in 1560. \"Bullocks\" are oxen, used to pull plows.", url: "https://archive.org/details/firstpartofroyal02vega", kind: "primary" },
    ] }],
  },
  "t43-s2": {
    id: "t43-s2", name: "Horses on the Great Plains", intro: "Use the passage below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that the horse, brought to the Americas by the Spanish, transformed the Great Plains of North America more than any other part of the Columbian Exchange. Spanish law in New Mexico tried to keep horses away from Indigenous people, but some were traded or stolen, and when the Pueblo Revolt of 1680 drove the Spanish out of New Mexico for twelve years, many horses passed to neighboring peoples. Over the next century, horses spread north from people to people. Groups such as the Comanche and the Lakota became mounted hunters who followed the bison herds across the plains, and some peoples who had farmed along rivers gave up farming to hunt. Horses also changed war and trade. By the mid-1700s the Comanche controlled much of the southern plains, raided Spanish settlements, and traded horses, hides, and captives with French and Spanish merchants. At the same time, the bison economy made women's work of preparing hides more important and gave great prestige to men who owned many horses." },
      PRACTICE,
    ] }],
  },
  "t43-s3": {
    id: "t43-s3", name: "Epidemics in New Spain", intro: SAQ,
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that disease, more than warfare, explains the collapse of the Indigenous population of Mexico in the sixteenth century. Smallpox struck Tenochtitlan in 1520, during the Spanish conquest. Later epidemics were even deadlier: outbreaks that people at the time called cocoliztli, in 1545 to 1548 and again in 1576 to 1580, killed a large share of the people who remained. Estimates differ widely, but many scholars think the population of central Mexico fell by about 90 percent between 1519 and 1600. Indigenous people had no immunity to diseases that had circulated in Afro-Eurasia for centuries, and forced labor, hunger, and the crowding of survivors into new towns made the epidemics worse. The loss of workers led Spanish colonists to rely more on enslaved Africans, and Spanish officials moved scattered survivors into planned towns where they could be taxed and taught Christianity more easily." },
      PRACTICE,
    ] }],
  },
};

export default {
  forms: [
    { id: "t43", name: "Topic 4.3 Quiz: Columbian Exchange", group: "Unit 4: Transoceanic Interconnections",
      items: [
        // ===== Set 1: Garcilaso de la Vega =====
        M(1, "t43-s1", "Sourcing and situation", "Garcilaso's background most likely helped him write about the changes in Peru because he",
          ["had grown up in Cuzco as the son of a Spanish father and an Inca mother and saw the changes himself", "had never been to the Americas and relied only on Spanish reports", "was an Inca emperor writing before the Spanish arrived", "was a Spanish official sent to count the animals in Peru"],
          ["Correct. Born in Cuzco in 1539, he remembered seeing the first oxen plow \"when I was quite a child\" and knew both Inca and Spanish worlds.",
            "The source says he grew up in Cuzco and saw these things himself.",
            "He wrote in Spain in the early 1600s, long after the conquest of the 1530s.",
            "He was a writer and historian, not a census official."]),
        M(2, "t43-s1", "Claims and evidence in sources", "The excerpt best supports which claim about the Columbian Exchange?",
          ["Animals and plants from Europe and Asia spread quickly in the Americas and changed farming there.", "The Columbian Exchange moved crops only from the Americas to Europe.", "European animals failed to survive in the Andes.", "The Spanish refused to grow fruit in Peru."],
          ["Correct. Garcilaso says cows, pigs, and sheep \"spread over the whole country,\" oxen pulled plows, and new fruits and sugar cane grew so well they became cheap.",
            "The excerpt describes plants and animals moving from the Old World to the Americas.",
            "He says the animals spread over the whole country.",
            "He says Spaniards introduced many fruits and grew them in abundance."]),
        M(3, "t43-s1", "Sourcing and situation", "The Indigenous people's remark that \"the Spaniards were too idle to work\" most likely shows that",
          ["plowing with animals was new to Andean farmers, who had farmed with human labor and hand tools", "the Inca had used oxen for centuries", "Indigenous people refused to look at the new animals", "the Spanish did all of the farm work in Peru"],
          ["Correct. The Andes had no large draft animals; llamas carried loads but did not pull plows, so farmers worked the land with foot plows and human labor.",
            "The source says the oxen were \"wonderful and novel\" to them.",
            "The source says a whole army of people came to see them.",
            "Indigenous people did most of the farm labor in colonial Peru, often as forced labor."]),
        M(4, "t43-s1", "Causation", "The spread of cattle, sheep, and pigs that Garcilaso describes had which effect in many parts of the Americas?",
          ["Herds grazing on Indigenous farmland damaged crops and changed the landscape", "Llamas and alpacas were introduced to Europe in large numbers", "Indigenous populations grew quickly because of new diseases", "Europeans stopped raising animals at home"],
          ["Correct. In places like central Mexico, Spanish livestock multiplied on land emptied by epidemics, trampled fields, and turned farmland into pasture.",
            "Llamas and alpacas stayed mostly in the Andes.",
            "New diseases caused Indigenous populations to fall sharply.",
            "Livestock raising continued in Europe."]),
        // ===== Set 2: Horses on the Great Plains =====
        M(5, "t43-s2", "Causation", "According to the passage, the Pueblo Revolt of 1680 affected the Great Plains by",
          ["making many Spanish horses available to Indigenous peoples beyond New Mexico", "ending the use of horses in North America", "bringing bison to the plains for the first time", "causing the Comanche to become farmers"],
          ["Correct. With the Spanish driven out for twelve years, many horses passed to neighboring peoples.",
            "The passage describes horses spreading, not disappearing.",
            "Bison were already on the plains; the passage says hunters followed the herds.",
            "The passage says some farming peoples gave up farming to hunt."]),
        M(6, "t43-s2", "Developments and processes", "The passage best illustrates which effect of the Columbian Exchange?",
          ["An animal from the Eastern Hemisphere changed the economies and societies of Indigenous peoples in the Americas.", "American crops increased the population of Europe.", "Diseases from the Americas killed many Europeans.", "Indigenous peoples stopped trading with Europeans."],
          ["Correct. The horse, brought by the Spanish, reshaped hunting, war, trade, and social roles on the plains.",
            "The passage is about horses in North America, not crops in Europe.",
            "The passage does not discuss disease.",
            "The passage says the Comanche traded with French and Spanish merchants."]),
        M(7, "t43-s2", "Comparison", "The rise of the Comanche as mounted raiders and traders is most similar to which earlier development?",
          ["The rise of steppe peoples such as the Mongols, whose skill with horses gave them military power over settled states", "The growth of sugar plantations in Brazil", "The founding of trading posts by the Portuguese in Asia", "The building of the Great Wall by the Ming"],
          ["Correct. Like the Mongols, the Comanche used mounted warfare to raid, demand goods, and dominate a large region.",
            "Plantations relied on enslaved labor to grow sugar, not on mounted warfare.",
            "Trading posts relied on ships and forts, not horses.",
            "The Great Wall was a defense against steppe peoples, not a parallel to the Comanche."]),
        M(8, "t43-s2", "Claims and evidence in sources", "Which evidence from the passage best supports the claim that horses changed social roles on the plains?",
          ["The bison economy made women's hide work more important and gave prestige to men with many horses.", "Spanish law tried to keep horses from Indigenous people.", "The Pueblo Revolt drove the Spanish out for twelve years.", "Horses spread north from people to people."],
          ["Correct. This sentence describes how horses changed the work and status of women and men.",
            "This explains how horses spread, not how they changed social roles.",
            "This is about the Spanish in New Mexico, not social roles on the plains.",
            "This describes the spread of horses, not changes in roles."]),
        // ===== SAQ: Epidemics in New Spain =====
        Q("a", "Identify ONE reason, given in the passage, why epidemics were so deadly for the Indigenous people of Mexico.",
          "The response names one cause from the passage.",
          ["Indigenous people had no immunity to diseases that had circulated in Afro-Eurasia for centuries.", "Forced labor and hunger weakened people and made disease more deadly.", "Survivors were crowded into new towns, where disease spread more easily."],
          ["\"Many people died.\" This describes the result, not a reason.", "\"The Spanish killed them in battle.\" The passage says disease, more than warfare, caused the collapse.", "\"Diseases came from Africa only.\" This misreads the passage, which speaks of diseases from Afro-Eurasia, including Europe."],
          "The passage explains that Indigenous people had no immunity to diseases such as smallpox, which had circulated in Europe, Asia, and Africa for centuries, so the illnesses spread quickly and killed many people.",
          "Disease was bad."),
        Q("b", "Explain ONE way the population losses described in the passage changed labor in the Spanish Americas in the period 1450 to 1750.",
          "The response names a specific change in labor and explains how population loss led to it.",
          ["With fewer Indigenous workers, Spanish colonists bought more enslaved Africans to work on plantations and in mines.", "Spanish officials used the repartimiento and the mita to draft Indigenous men for set periods of work, because fewer workers were available.", "Landowners built haciendas and tied workers to them through debts, since free laborers were scarce."],
          ["\"People had to work harder.\" This is vague and does not explain a change in the labor system.", "\"The Spanish freed all Indigenous workers.\" This is false.", "\"The population fell.\" This restates the passage without explaining a change in labor."],
          "As the Indigenous population fell, colonists in places such as the Caribbean and the coasts of Mexico and Peru bought enslaved Africans to replace the workers who had died. This helped make the Atlantic slave trade a central part of the Spanish colonial economy.",
          "There were not enough people."),
        Q("c", "Explain ONE way the Columbian Exchange affected population in Afro-Eurasia in the period 1450 to 1750.",
          "The response names a specific effect on population in Africa, Asia, or Europe and explains how the exchange caused it.",
          ["American crops such as maize and potatoes gave more food and helped populations grow in China and Europe.", "Cassava and maize from the Americas became staple crops in West and Central Africa and helped feed growing populations.", "The Atlantic slave trade took millions of people from West and Central Africa, which held down population growth in some regions."],
          ["\"Europeans got sick from American diseases.\" There is little evidence of large population losses in Europe from American diseases.", "\"Food changed.\" This is too general and does not explain an effect on population.", "\"Rice from the Americas fed Asia.\" This is wrong: rice was grown in Asia long before the exchange."],
          "Sweet potatoes and maize from the Americas could grow on hillsides and poor soil where rice and wheat did not. Chinese farmers planted them widely in the 1700s, which helped China's population grow to around 300 million by 1800.",
          "Some places got more food."),
      ] },
  ],
};

// Topic 5.9 Quiz: Society and the Industrial Age
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why) => ({ id: "t59-m0" + n, skill: "u5", type: "mcq", set, topic: "5.9", reasoning, question, choices, why, answer: 0 });
const Q = (sub, prompt, earns, yes, no, example, notExample) => ({ id: "t59-q1" + sub, skill: "u5", type: "fr", set: "t59-s3", part: "SAQ 1", sub, topic: "5.9", lead: SAQ, prompt, earns, yes, no, example, notExample });

export const sets = {
  "t59-s1": {
    id: "t59-s1", name: "Friedrich Engels on the layout of Manchester, 1845", intro: ONE,
    sources: [{ title: "Source", blocks: [
      { p: "The town itself is peculiarly built, so that a person may live in it for years, and go in and out daily without coming into contact with a working-people's quarter or even with workers, that is, so long as he confines himself to his business or to pleasure walks. This arises chiefly from the fact, that by unconscious tacit agreement, as well as with outspoken conscious determination, the working-people's quarters are sharply separated from the sections of the city reserved for the middle-class ..." },
      { p: "Manchester contains, at its heart, a rather extended commercial district, perhaps half a mile long and about as broad, and consisting almost wholly of offices and warehouses. ... With the exception of this commercial district, all Manchester proper, all Salford and Hulme ... are all unmixed working-people's quarters, stretching like a girdle, averaging a mile and a half in breadth, around the commercial district. Outside, beyond this girdle, lives the upper and middle bourgeoisie ... the upper bourgeoisie in remoter villas with gardens ... in free, wholesome country air, in fine, comfortable homes, passed once every half or quarter hour by omnibuses going into the city." },
      { cite: "Friedrich Engels, German businessman who managed his family's cotton-thread firm in Manchester, The Condition of the Working-Class in England in 1844 (first published in German in Leipzig in 1845), translated by Florence Kelley Wischnewetzky (1887; London edition, 1892), chapter on \"The Great Towns,\" as published by Project Gutenberg. \"Bourgeoisie\" means the middle class of owners and professionals.", url: "https://www.gutenberg.org/cache/epub/17306/pg17306-images.html", kind: "primary" },
    ] }],
  },
  "t59-s2": {
    id: "t59-s2", name: "Living by the clock", intro: "Use the passage below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that industrialization changed not only where people worked but how they experienced time. On farms and in workshops at home, the pace of work had followed daylight, the seasons, and the tasks at hand, with busy weeks followed by slower ones. Factories, by contrast, ran their machines for set hours, often twelve or more a day, and workers had to arrive and leave by the clock or the factory bell. Employers fined or dismissed workers for lateness and for talking or resting on the job, and some locked the gates at starting time. Railways spread a single standard time across Britain in the 1840s, because trains could not run safely on dozens of local times. Schools and churches taught punctuality as a virtue, and cheap pocket watches and clocks became common in working-class homes later in the century." },
      PRACTICE,
    ] }],
  },
  "t59-s3": {
    id: "t59-s3", name: "Cholera and the sanitary city", intro: SAQ,
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that epidemics forced industrial cities to reform. Cholera, a disease spread through water contaminated with human waste, reached Britain in 1831 and returned several times, killing tens of thousands. In 1854, the London doctor John Snow traced one outbreak in the Soho district to a single public water pump, though many officials still believed disease came from bad air. After the hot summer of 1858, when the smell from the sewage-filled Thames became so bad that Parliament could barely meet, the government paid for a vast system of sewers designed by the engineer Joseph Bazalgette, which carried waste away from the city. Laws such as Britain's Public Health Acts of 1848 and 1875 required towns to provide drainage and clean water, and cities across Europe and the Americas built similar systems, reducing deaths from waterborne disease." },
      PRACTICE,
    ] }],
  },
};

export default {
  forms: [
    { id: "t59", name: "Topic 5.9 Quiz: Society and the Industrial Age", group: "Unit 5: Revolutions",
      items: [
        // ===== Set 1: Engels =====
        M(1, "t59-s1", "Claims and evidence in sources", "Engels's description of Manchester best supports which claim about industrial cities?",
          ["They were divided by class, with workers and the middle class living in separate areas.", "Rich and poor lived side by side on the same streets.", "Most of the middle class lived in the commercial center.", "Industrial cities had no working-class neighborhoods."],
          ["Correct. He says working people's quarters were \"sharply separated\" from middle-class sections.",
            "He describes the opposite.",
            "He says the center was offices and warehouses, deserted at night, and the middle class lived outside.",
            "He says most of the city was \"unmixed working-people's quarters.\""]),
        M(2, "t59-s1", "Sourcing and situation", "Engels's point of view is best explained by the fact that he",
          ["was a critic of capitalism who wanted to expose the conditions of workers, though he managed a factory himself", "was a factory owner defending industrial cities", "was a government official counting houses", "was a worker who never left Manchester"],
          ["Correct. Engels managed his family's firm but became a socialist and later wrote the Communist Manifesto with Marx.",
            "He criticized industrial cities and owners.",
            "He was a private writer, not an official.",
            "He was a German businessman who traveled widely."]),
        M(3, "t59-s1", "Developments and processes", "The omnibuses that carried the upper middle class into the city best illustrate which development?",
          ["New transportation let wealthier people live farther from the industrial center, in suburbs", "Workers commuted from country villas", "The middle class lived above their factories", "Cities banned public transportation"],
          ["Correct. Omnibuses, and later trains and streetcars, helped create suburbs for the middle class.",
            "Engels says the villas belonged to the upper bourgeoisie.",
            "He says they lived outside the working-class belt.",
            "He describes omnibuses running every quarter or half hour."]),
        M(4, "t59-s1", "Comparison", "The rapid growth of Manchester is most similar to which other development of the 1800s?",
          ["The growth of industrial cities such as Pittsburgh, Essen, and Osaka as factories drew workers from the countryside", "The decline of cities after the Black Death", "The building of planned imperial capitals such as Beijing in the 1400s", "The rise of trading cities on the Silk Roads"],
          ["Correct. Industrial cities around the world grew quickly and faced similar problems of crowding and pollution.",
            "That was a period of decline in the 1300s.",
            "That was a capital built by an emperor, not an industrial city.",
            "Silk Road cities grew from trade, not factories."]),
        // ===== Set 2: Living by the clock =====
        M(5, "t59-s2", "Comparison", "According to the passage, work in factories differed from work on farms mainly in that factory work",
          ["followed fixed hours set by the clock and the machines", "followed the seasons and daylight", "had no rules about lateness", "was done mostly at home"],
          ["Correct. The passage says factories ran for set hours and workers had to arrive and leave by the clock or bell.",
            "That describes farm work.",
            "The passage says employers fined or dismissed late workers.",
            "Factory work took place in factories."]),
        M(6, "t59-s2", "Causation", "According to the passage, Britain adopted a single standard time mainly because",
          ["trains could not run safely on many different local times", "factory owners passed a law requiring it", "churches demanded it", "pocket watches were invented"],
          ["Correct. Railways spread standard time in the 1840s for safe, reliable schedules.",
            "The passage credits the railways.",
            "Churches taught punctuality but did not set standard time.",
            "Cheap watches became common later."]),
        M(7, "t59-s2", "Developments and processes", "The passage best illustrates which effect of industrialization on daily life?",
          ["Employers and institutions taught new habits of punctuality and discipline", "Workers gained control over their own working hours", "The working day became shorter than on farms", "People stopped using clocks"],
          ["Correct. Fines, locked gates, schools, and churches all reinforced timekeeping.",
            "Factories set workers' hours.",
            "Factory days were often twelve or more hours.",
            "Clocks became more common."]),
        M(8, "t59-s2", "Continuity and change", "Which later development continued the trend described in the passage?",
          ["Workers' movements for an eight-hour day, which accepted clock time but sought fewer hours", "A return to seasonal farm work for most Europeans by 1900", "The abolition of factory bells by law in 1850", "The end of railway timetables"],
          ["Correct. Labor movements fought over how many hours the clock would rule, as in the eight-hour campaigns of the 1880s.",
            "Most Western Europeans increasingly worked in industry and services.",
            "No such law existed.",
            "Railway timetables expanded."]),
        // ===== SAQ: Cholera and the sanitary city =====
        Q("a", "Identify ONE reform described in the passage that cities made in response to epidemics.",
          "The response names one reform from the passage.",
          ["London built a system of sewers designed by Joseph Bazalgette.", "Britain's Public Health Acts required towns to provide drainage and clean water.", "Cities across Europe and the Americas built water and sewer systems."],
          ["\"John Snow traced cholera to a pump.\" This is a discovery, not a reform.", "\"Parliament could barely meet.\" This is a cause of reform, not a reform.", "\"Cities closed all factories.\" This is not in the passage."],
          "The passage says that after 1858 the government paid for a vast system of sewers designed by Joseph Bazalgette, which carried waste away from London.",
          "Cities changed."),
        Q("b", "Explain ONE way industrialization contributed to the public health problems described in the passage.",
          "The response explains how industrialization made disease or sanitation worse.",
          ["Factories drew huge numbers of workers into cities faster than housing, water, and drains could be built, so waste contaminated water supplies.", "Crowded working-class districts, like those Engels described in Manchester, had shared privies and polluted wells, which let cholera spread.", "Rivers such as the Thames were used both for drinking water and for dumping sewage and industrial waste."],
          ["\"There was disease.\" This does not connect it to industrialization.", "\"Factories made cholera.\" This is inaccurate: cholera is spread through contaminated water.", "\"Cities were clean before 1900.\" This contradicts the passage."],
          "Industrial towns grew so fast that builders crammed workers into cheap housing with few toilets and no proper drains. Human waste seeped into wells and rivers that people used for drinking water, which allowed cholera to spread through crowded working-class districts.",
          "Industry caused problems."),
        Q("c", "Explain ONE OTHER way governments in industrial societies responded to social problems in the period 1750 to 1900.",
          "The response names a specific government response other than sanitation and explains it.",
          ["Britain's Factory Acts limited child labor and the working hours of women and children.", "Germany under Bismarck created health, accident, and old-age insurance for workers in the 1880s.", "Several countries made elementary education free and required, such as Britain's education acts of 1870 and 1880."],
          ["\"Governments built sewers.\" The prompt asks for a response other than sanitation.", "\"Governments helped people.\" This names no specific response.", "\"Governments banned all factories.\" This is false."],
          "In the 1880s, Bismarck's government in Germany created the first national system of health, accident, and old-age insurance for workers. Bismarck hoped these programs would weaken support for socialists by showing that the state could improve workers' lives.",
          "Governments made laws."),
      ] },
  ],
};

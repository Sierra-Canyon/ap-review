// Topic 5.9 Quiz: Society and the Industrial Age
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
import { maps } from "../whap/maps.js";
const MAP = "Map drawn for this review from Natural Earth land outlines (public domain). Places, dates, and routes checked against ";
const map = (id, caption, refs) => [{ svg: maps[id], caption }, { cite: MAP + refs + ".", kind: "map" }];
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why, difficulty) => ({ id: "t59-m0" + n, skill: "u5", type: "mcq", set, topic: "5.9", reasoning, question, choices, why, difficulty, answer: 0 });
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
    id: "t59-s2", name: "The world's largest cities, 1800 and 1900", intro: "Use the map below to answer the questions that follow.", label: "Map",
    sources: [{ title: "Map", blocks: map("u5-largest-cities", "The world's eight largest cities in 1800 and in 1900, by estimated population. The years next to each city show when it was among the eight largest.", "James A. Henretta and others, America's History (Bedford/St. Martin's), and Matt Rosenberg, \"Largest Cities Throughout History\" (ThoughtCo), which follow the estimates of Tertius Chandler, Four Thousand Years of Urban Growth (1987)") }],
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
          ["Cities were divided by class into separate districts.", "Rich and poor families lived side by side on the same streets.", "Most of the middle class lived in the commercial center.", "Industrial cities had few working-class neighborhoods."],
          ["Correct. He says working people's quarters were \"sharply separated\" from middle-class sections.",
            "He says a person could live in the city for years without coming into contact with workers.",
            "He says the center was offices and warehouses, and the middle class lived outside the working-class belt.",
            "He says nearly all of Manchester proper was \"unmixed working-people's quarters.\""], "easy"),
        M(2, "t59-s1", "Sourcing and situation", "Engels's point of view is best explained by the fact that he",
          ["was a factory manager who became a critic of capitalism", "was a factory owner defending the growth of industrial cities", "was a government official counting the city's houses", "was a mill worker who had never left Manchester"],
          ["Correct. Engels managed his family's firm but became a socialist and later wrote the Communist Manifesto with Marx.",
            "He managed a firm, but he criticized industrial cities and their owners rather than defending them.",
            "He was a private writer, not an official.",
            "He was a German businessman who traveled widely."], "difficult"),
        M(3, "t59-s1", "Developments and processes", "The omnibuses that carried the upper middle class into the city best illustrate which development?",
          ["New transport let the wealthy live farther from the center.", "Workers commuted into the city from country villas.", "Middle-class families lived above their own factories.", "Cities banned public transport from the business district."],
          ["Correct. Omnibuses, and later trains and streetcars, helped create suburbs for the middle class.",
            "Engels says the villas belonged to the upper bourgeoisie, not workers.",
            "He says they lived outside the working-class belt, in the country air.",
            "He describes omnibuses running into the city every quarter or half hour."], "easy"),
        M(4, "t59-s1", "Comparison", "The rapid growth of Manchester is most similar to which other development of the 1800s?",
          ["The growth of industrial cities such as Essen and Osaka", "The decline of European cities after the Black Death", "The building of planned imperial capitals such as Beijing", "The rise of trading cities along the Silk Roads"],
          ["Correct. Industrial cities around the world grew quickly as factories drew workers from the countryside, and they faced similar crowding and pollution.",
            "That was a period of decline in the 1300s, not growth in the 1800s.",
            "Beijing was rebuilt as a capital by Ming emperors in the 1400s, not as an industrial city.",
            "Silk Road cities grew from long-distance trade, not factories."], "moderate"),
        // ===== Set 2: The world's largest cities (map) =====
        M(5, "t59-s2", "Continuity and change", "Which of the following changes between 1800 and 1900 does the map show?",
          ["East Asia's share of the largest cities fell sharply.", "Europe's share of the largest cities fell sharply.", "Several of the largest cities rose in the interior of Africa.", "The same eight cities stayed the largest in both years."],
          ["Correct. Four of the eight largest cities in 1800 were in China and Japan, while in 1900 Tokyo was the only one in East Asia.",
            "This reverses the map: European cities made up more of the 1900 list than of the 1800 list.",
            "No city on the map is in Africa.",
            "Only London, Paris, and Edo (Tokyo) appear in both years."], "moderate"),
        M(6, "t59-s2", "Causation", "Which of the following best explains why cities such as Berlin, New York, and Chicago joined the list of the largest cities by 1900?",
          ["Industrial jobs drew migrants from farms and from abroad.", "Governments forced most farmers to move into the cities.", "Cities had become healthier than the countryside by 1850.", "A decline in world trade pushed people to inland capitals."],
          ["Correct. Industrial jobs pulled rural people into cities, and millions of European immigrants settled in New York and Chicago in the late 1800s.",
            "Rural people chose to move for work; no government forced most farmers into cities.",
            "Crowded industrial cities had higher death rates than the countryside for much of the century, as cholera and other diseases spread quickly in them.",
            "World trade grew in the 1800s, and New York, a port, became one of the largest cities in the world."], "difficult"),
        M(7, "t59-s2", "Developments and processes", "Chicago, in the interior of North America, grew from a small town in the 1830s into one of the largest cities in the world by 1900. Its rapid growth is best explained by its role as",
          ["a railway hub linking interior farms with eastern markets", "the capital of the United States after the Civil War", "the main port for immigrants crossing the Pacific from Asia", "a supply center for silver mines in the Rocky Mountains"],
          ["Correct. Railways and the Great Lakes made Chicago the place where grain, livestock, and lumber from the interior were processed and shipped east, which drew huge numbers of workers.",
            "The capital of the United States is Washington, D.C.",
            "Most Asian immigrants arrived on the Pacific coast, at San Francisco, far from Chicago.",
            "Chicago is on the Great Lakes, far from the Rocky Mountains and their mines."], "moderate"),
        M(8, "t59-s2", "Comparison", "Beijing, Guangzhou, and Hangzhou were among the largest cities in 1800 but not in 1900. Which of the following best explains this difference from the European cities on the map?",
          ["China did not industrialize and was torn by rebellion.", "China moved its people to the countryside after the Opium Wars.", "The Chinese cities were destroyed in the First World War.", "Chinese ports stopped trading with the outside world after 1842."],
          ["Correct. Without factories and railways, China's cities did not grow like London or Berlin, and the Taiping Rebellion (1850 to 1864) killed millions and devastated cities such as Hangzhou.",
            "No such movement took place; the Opium Wars opened Chinese ports to foreign trade.",
            "The First World War began in 1914, after 1900, and was not fought in these cities.",
            "After 1842, treaties forced China to open more ports, including Guangzhou, to foreign trade."], "moderate"),
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

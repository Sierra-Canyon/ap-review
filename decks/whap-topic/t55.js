// Topic 5.5 Quiz: Technology of the Industrial Age
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why) => ({ id: "t55-m0" + n, skill: "u5", type: "mcq", set, topic: "5.5", reasoning, question, choices, why, answer: 0 });
const Q = (sub, prompt, earns, yes, no, example, notExample) => ({ id: "t55-q1" + sub, skill: "u5", type: "fr", set: "t55-s3", part: "SAQ 1", sub, topic: "5.5", lead: SAQ, prompt, earns, yes, no, example, notExample });

export const sets = {
  "t55-s1": {
    id: "t55-s1", name: "Fanny Kemble rides with George Stephenson, 1830", intro: ONE,
    sources: [{ title: "Source", blocks: [
      { p: "We were introduced to the little engine which was to drag us along the rails. She (for they make these curious little fire-horses all mares) consisted of a boiler, a stove, a small platform, a bench, and behind the bench a barrel containing enough water to prevent her being thirsty for fifteen miles,—the whole machine not bigger than a common fire-engine. ... The coals, which are its oats, were under the bench ..." },
      { p: "... You can't imagine how strange it seemed to be journeying on thus, without any visible cause of progress other than the magical machine, with its flying white breath and rhythmical, unvarying pace ... and when I reflected that these great masses of stone had been cut asunder to allow our passage thus far below the surface of the earth, I felt as if no fairy tale was ever half so wonderful as what I saw." },
      { p: "... the carriage was placed behind it, for it cannot turn, and was set off at its utmost speed, thirty-five miles an hour, swifter than a bird flies (for they tried the experiment with a snipe). You cannot conceive what that sensation of cutting the air was; the motion is as smooth as possible, too. I could either have read or written ..." },
      { cite: "Frances Anne (Fanny) Kemble, English actress, letter to a friend written in August 1830 after riding on the Liverpool and Manchester Railway with its engineer, George Stephenson, a few weeks before the line opened to the public on September 15, 1830, published in her memoir Record of a Girlhood (London, 1878), as published by Project Gutenberg.", url: "https://www.gutenberg.org/files/16478/16478-h/16478-h.htm", kind: "primary" },
    ] }],
  },
  "t55-s2": {
    id: "t55-s2", name: "Steel, electricity, and chemicals", intro: "Use the passage below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "Many historians describe a second industrial revolution after about 1870, built on steel, electricity, and chemicals rather than on cotton and iron. New methods, first the Bessemer process of 1856 and then the open-hearth furnace, made steel cheap enough to use for rails, ships, bridges, and the frames of tall buildings. Inventors such as Thomas Edison in the United States and engineers at the Siemens company in Germany built generators, light bulbs, and power stations; Edison's first central power station opened in New York in 1882. German companies such as BASF and Bayer, working closely with university chemists, led the world in making synthetic dyes, fertilizers, and medicines. These industries needed large investments and trained scientists, and the United States and Germany, rather than Britain, became their leaders." },
      PRACTICE,
    ] }],
  },
  "t55-s3": {
    id: "t55-s3", name: "Railways in British India", intro: SAQ,
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that railways in British India served the empire first and Indians second. The first passenger train ran from Bombay to Thane in 1853, and by 1900 India had about 25,000 miles of track. British companies built most of the early lines, and the colonial government guaranteed their investors a fixed profit, paid from taxes collected in India. Lines were planned to carry raw cotton, wheat, and other goods to the ports and to move soldiers quickly, especially after the great revolt of 1857. Yet Indians used the railways in huge numbers. Cheap third-class tickets carried pilgrims, migrant workers, and traders, and the railways helped people from distant regions meet. Indian nationalists criticized the guarantees and the drain of profits to Britain, even as they used the trains to organize across the country." },
      PRACTICE,
    ] }],
  },
};

export default {
  forms: [
    { id: "t55", name: "Topic 5.5 Quiz: Technology of the Industrial Age", group: "Unit 5: Revolutions",
      items: [
        // ===== Set 1: Kemble =====
        M(1, "t55-s1", "Sourcing and situation", "Kemble's comparisons of the engine to a horse (\"fire-horses,\" \"coals, which are its oats\") were most likely intended to",
          ["help her reader picture a new machine by comparing it to something familiar", "show that the railway still used horses to pull trains", "criticize the railway as cruel to animals", "explain the engineering of the boiler in technical terms"],
          ["Correct. Railways were so new that she described the locomotive in terms of the horse it was replacing.",
            "She describes a steam engine pulling the carriage.",
            "She praises the ride as more wonderful than a fairy tale.",
            "She uses everyday images, not technical terms."]),
        M(2, "t55-s1", "Claims and evidence in sources", "Which statement from the source best supports the claim that railways changed people's sense of speed and distance?",
          ["\"thirty-five miles an hour, swifter than a bird flies\"", "\"the whole machine not bigger than a common fire-engine\"", "\"for it cannot turn\"", "\"a barrel containing enough water ... for fifteen miles\""],
          ["Correct. Travel faster than a galloping horse was new to almost everyone in 1830.",
            "This describes the engine's size.",
            "This describes a limit of the engine, not its speed.",
            "This describes its water supply."]),
        M(3, "t55-s1", "Causation", "Railways like the one Kemble describes most directly led to which economic effect?",
          ["Lower costs for moving coal, raw materials, and goods, which helped industry grow", "The end of the cotton trade between Liverpool and Manchester", "A decline in the demand for coal", "The replacement of steam power by electricity in the 1830s"],
          ["Correct. The Liverpool and Manchester line linked a port with the cotton mills and cut transport costs.",
            "The line served that trade.",
            "Locomotives burned coal, raising demand.",
            "Electric power came much later."]),
        M(4, "t55-s1", "Sourcing and situation", "A historian should consider which limitation of this source for studying the effects of railways?",
          ["It describes one excited first ride before the line opened and does not show its long-term economic or social effects", "It was written by someone who never saw a railway", "It was written long after railways had disappeared", "It is a government report full of statistics"],
          ["Correct. It shows the wonder of a new technology but not, for example, its effects on workers or trade.",
            "Kemble rode on the railway herself.",
            "She wrote in 1830, as railways began.",
            "It is a personal letter, not a report."]),
        // ===== Set 2: Steel, electricity, and chemicals =====
        M(5, "t55-s2", "Claims and evidence in sources", "The passage best supports which claim about the second industrial revolution?",
          ["It was based on new industries that depended on science and large investment, led by Germany and the United States.", "It was led by Britain's cotton mills.", "It reduced the importance of steel.", "It took place before 1800."],
          ["Correct. The passage names steel, electricity, and chemicals and says Germany and the United States led them.",
            "The passage says it was built on steel, electricity, and chemicals rather than cotton.",
            "It says steel became cheap and widely used.",
            "It says it began after about 1870."]),
        M(6, "t55-s2", "Causation", "Cheap steel made possible by the Bessemer process most directly led to",
          ["more railways, larger ships, and taller buildings", "the end of coal mining", "the invention of the spinning jenny", "a decline in world trade"],
          ["Correct. The passage lists rails, ships, bridges, and building frames.",
            "Steelmaking used large amounts of coal.",
            "The spinning jenny was invented in the 1760s.",
            "Steel ships and rails helped trade grow."]),
        M(7, "t55-s2", "Comparison", "How did the industries in the passage differ from those of the first industrial revolution?",
          ["They relied more on scientific research and trained experts than the early textile and iron industries did", "They used no machines", "They were mostly located in India", "They depended entirely on water power"],
          ["Correct. Chemical and electrical firms worked with university scientists and research laboratories.",
            "They used new machines such as generators.",
            "The passage names Germany and the United States.",
            "They used coal, steam, and electricity."]),
        M(8, "t55-s2", "Continuity and change", "Which development best shows a continuity between the first and second industrial revolutions?",
          ["Both depended on coal as a main source of energy", "Both were led by China", "Both ended the use of steam engines", "Both began before 1750"],
          ["Correct. Coal fueled steam engines in the first and steelmaking and many power stations in the second.",
            "Neither was led by China.",
            "Steam engines remained in wide use, and power stations used steam turbines.",
            "Both began after 1750."]),
        // ===== SAQ: Railways in British India =====
        Q("a", "Identify ONE way, described in the passage, that railways in India served British imperial interests.",
          "The response names one way from the passage.",
          ["They carried raw cotton, wheat, and other goods to the ports for export.", "They moved soldiers quickly, especially after the revolt of 1857.", "British investors received a guaranteed profit paid from Indian taxes."],
          ["\"Indians rode the trains.\" This shows how Indians used them, not imperial interests.", "\"The first train ran in 1853.\" This is a fact from the passage but not an imperial interest.", "\"The railways were built to help Indian factories compete with Britain.\" The passage does not say this."],
          "The passage says lines were planned to carry raw cotton and wheat to the ports, which supplied British mills and markets with raw materials from India.",
          "Railways were useful."),
        Q("b", "Explain ONE way Indians used or responded to the railways in a way the British did not intend.",
          "The response explains a specific use or response by Indians and why it was unintended.",
          ["Indian nationalists traveled by train to meet and organize across regions, which helped build a movement against British rule.", "Cheap third-class tickets let pilgrims and migrant workers travel long distances, mixing people from different regions.", "Nationalists such as Dadabhai Naoroji pointed to the railway guarantees as part of a drain of wealth from India to Britain."],
          ["\"Indians liked the trains.\" This is vague and explains nothing.", "\"Indians built the railways to carry cotton to Britain.\" This repeats the British purpose.", "\"Indians banned the railways.\" This is false."],
          "Indian nationalists used the trains the British had built to carry goods and soldiers. Leaders from different provinces could travel to meetings of the Indian National Congress, founded in 1885, which helped them build a movement that reached across the whole country.",
          "Indians used trains."),
        Q("c", "Explain ONE way a technology of the industrial age, other than the railway, helped European states expand their power in Asia or Africa in the period 1750 to 1900.",
          "The response names a specific technology and explains how it helped European expansion.",
          ["Steamships could travel up rivers and keep schedules regardless of wind, which helped Europeans move troops and goods into the interior of Africa and Asia.", "The telegraph let colonial governments send orders and news quickly between London and India, tightening control over distant colonies.", "Breech-loading rifles and machine guns such as the Maxim gun gave European armies a large advantage in battles against African and Asian forces."],
          ["\"Railways helped Europeans.\" The prompt asks for a technology other than the railway.", "\"Europeans had technology.\" This names no specific technology.", "\"The printing press let Europeans conquer India in 1900.\" This does not explain a link and is inaccurate."],
          "The telegraph allowed messages to travel between Britain and India in hours instead of weeks after cables were laid in the 1860s and 1870s. Officials in London could direct colonial governments and send troops quickly, which made it easier to control a large empire.",
          "Technology helped Europe."),
      ] },
  ],
};

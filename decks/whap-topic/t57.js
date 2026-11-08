// Topic 5.7 Quiz: Economic Developments and Innovations in the Industrial Age
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why, difficulty) => ({ id: "t57-m0" + n, skill: "u5", type: "mcq", set, topic: "5.7", reasoning, question, choices, why, difficulty, answer: 0 });
const Q = (sub, prompt, earns, yes, no, example, notExample) => ({ id: "t57-q1" + sub, skill: "u5", type: "fr", set: "t57-s3", part: "SAQ 1", sub, topic: "5.7", lead: SAQ, prompt, earns, yes, no, example, notExample });

export const sets = {
  "t57-s1": {
    id: "t57-s1", name: "Walter Bagehot on Lombard Street, 1873", intro: ONE,
    sources: [{ title: "Source", blocks: [
      { p: "The briefest and truest way of describing Lombard Street is to say that it is by far the greatest combination of economical power and economical delicacy that the world has even seen. Of the greatness of the power there will be no doubt. Money is economical power. Everyone is aware that England is the greatest moneyed country in the world ... The known deposits—the deposits of banks which publish their accounts—are, in London (31st December, 1872) 120,000,000 L; Paris (27th February, 1873) 13,000,000 L; New York (February, 1873) 40,000,000 L; German Empire (31st January, 1873) 8,000,000 L." },
      { p: "... Thus English capital runs as surely and instantly where it is most wanted, and where there is most to be made of it, as water runs to find its level. This efficient and instantly-ready organisation gives us an enormous advantage in competition with less advanced countries—less advanced, that is, in this particular respect of credit. In a new trade English capital is instantly at the disposal of persons capable of understanding the new opportunities and of making good use of them. In countries where there is little money to lend, and where that little is lent tardily and reluctantly, enterprising traders are long kept back ..." },
      { cite: "Walter Bagehot, editor of The Economist, Lombard Street: A Description of the Money Market (London, 1873), chapters I and II, as published by Project Gutenberg. Lombard Street in the City of London was the center of British banking; \"L\" stands for pounds sterling. Punctuation of the list of deposits adjusted from the printed table.", url: "https://www.gutenberg.org/cache/epub/4359/pg4359-images.html", kind: "primary" },
    ] }],
  },
  "t57-s2": {
    id: "t57-s2", name: "Companies that crossed borders", intro: "Use the passage below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that the late 1800s saw the rise of businesses that operated across many countries at once. The Hongkong and Shanghai Banking Corporation (HSBC) was founded in 1865 by merchants in Hong Kong to finance trade between China, India, Europe, and the Americas, and it soon lent money to the Qing government. In Britain, the Lever brothers began selling Sunlight soap in 1885 and built factories in several countries; to secure the palm oil their soap needed, the company later bought plantations and trading rights in West Africa and the Belgian Congo. In the United States, the United Fruit Company, founded in 1899, owned banana plantations, railways, and ports in Central America and the Caribbean. These companies moved capital, goods, and managers across borders, and their power over land and labor in poorer countries often rivaled that of local governments." },
      PRACTICE,
    ] }],
  },
  "t57-s3": {
    id: "t57-s3", name: "Limited liability and the corporation", intro: SAQ,
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that new laws on business organization were as important to industrial growth as new machines. Before the 1850s, most British investors in a company could lose everything they owned if the company failed, because they were personally responsible for its debts. The Limited Liability Act of 1855 and the Companies Act of 1862 allowed companies to register easily and limited each investor's risk to the amount paid for shares. Other countries passed similar laws. Railways, steelworks, shipping lines, and banks raised huge sums by selling shares to thousands of middle-class investors, and stock exchanges in London, Paris, Berlin, and New York grew rapidly. Critics warned that limited liability encouraged reckless speculation, and financial panics, such as the one that began in 1873, ruined many small investors." },
      PRACTICE,
    ] }],
  },
};

export default {
  forms: [
    { id: "t57", name: "Topic 5.7 Quiz: Economic Developments and Innovations in the Industrial Age", group: "Unit 5: Revolutions",
      items: [
        // ===== Set 1: Bagehot =====
        M(1, "t57-s1", "Claims and evidence in sources", "Which evidence from the source best supports Bagehot's claim that England was \"the greatest moneyed country in the world\"?",
          ["London's bank deposits were far larger than any rival's.", "Lombard Street was the center of British banking.", "English capital runs \"as water runs to find its level.\"", "Some countries lend money \"tardily and reluctantly.\""],
          ["Correct. His figures show 120 million pounds in London against 13 million in Paris, 40 million in New York, and 8 million in Germany.",
            "This tells where British banks were, not how much money they held compared with others.",
            "This describes how quickly capital moves, not how much England had.",
            "This describes other countries' lending habits, not England's wealth."], "moderate"),
        M(2, "t57-s1", "Causation", "According to Bagehot, Britain's banking system gave it an advantage because",
          ["capital could be lent quickly wherever profits were highest", "the government owned and ran all of the country's banks", "British banks lent only to long-established trades", "Britain faced no foreign competitors in world trade"],
          ["Correct. He says English capital is \"instantly at the disposal\" of people who can use new opportunities.",
            "He describes private banks and deposits, not government ownership.",
            "He says that \"in a new trade\" English capital is instantly available.",
            "He speaks of an advantage \"in competition with less advanced countries,\" so Britain had competitors."], "easy"),
        M(3, "t57-s1", "Contextualization", "The source is best understood in the context of which development?",
          ["The growth of credit that financed industry and world trade", "The Columbian Exchange of crops and animals after 1492", "The founding of the Dutch East India Company in 1602", "The worldwide banking collapse of the Great Depression"],
          ["Correct. London became the center of world finance, lending to railways, governments, and businesses around the globe.",
            "The Columbian Exchange began centuries before Bagehot wrote and concerned crops, animals, and diseases.",
            "The Dutch East India Company was founded more than 250 years before he wrote.",
            "The Great Depression began in 1929, long after 1873."], "easy"),
        M(4, "t57-s1", "Sourcing and situation", "Bagehot's point of view in the excerpt is best explained by his position as",
          ["the editor of a London journal on business and finance", "a socialist writer who opposed private lending for profit", "a French banker competing with London for deposits", "an American official defending the banks of New York"],
          ["Correct. As editor of The Economist, Bagehot wrote from inside London's financial world and praised its strengths.",
            "He praises the lending of capital \"where there is most to be made of it,\" not as a critic of profit.",
            "He was English, and he ranks Paris far behind London.",
            "He was English, and he ranks New York's deposits far below London's."], "easy"),
        // ===== Set 2: Companies that crossed borders =====
        M(5, "t57-s2", "Developments and processes", "The companies in the passage best illustrate which development of the late 1800s?",
          ["Businesses that operated in many countries at once", "Governments taking over ownership of foreign industries", "A decline in trade between Europe, Asia, and the Americas", "Merchant guilds that controlled trade in single cities"],
          ["Correct. Each company moved capital, goods, and managers across borders.",
            "The passage describes private companies, not government ownership.",
            "The companies financed and expanded trade among these regions.",
            "The companies worked across many countries, not within one city."], "easy"),
        M(6, "t57-s2", "Causation", "Lever Brothers acquired plantations in Africa mainly to",
          ["secure a steady supply of palm oil for its soap", "grow raw cotton for the mills of Lancashire", "build railways for the Belgian king's Congo colony", "find new buyers in Africa for Sunlight soap"],
          ["Correct. The passage says the company sought \"the palm oil their soap needed.\"",
            "The passage connects the plantations to palm oil, not cotton.",
            "The passage does not say Lever built railways.",
            "The company sold soap in many places, but the passage says it bought plantations to secure palm oil."], "difficult"),
        M(7, "t57-s2", "Comparison", "The United Fruit Company is most similar to which earlier organization?",
          ["The Dutch East India Company, which ruled land and labor abroad", "The Hanseatic League, which linked trading cities of northern Europe", "The Ottoman devshirme, which recruited Christian boys as soldiers", "The Mongol yam, which carried messages across a land empire"],
          ["Correct. Both were companies whose control over land, labor, and transport in other regions rivaled local governments.",
            "The Hanseatic League was an alliance of merchant towns, not a company that owned plantations abroad.",
            "The devshirme was a system of military recruitment, not a business.",
            "The yam was a state relay system for messages, not a business."], "difficult"),
        M(8, "t57-s2", "Continuity and change", "Which later development best shows the continuing importance of the kind of company in the passage?",
          ["Multinational corporations of the later 1900s", "The end of foreign investment after the First World War", "The nationalization of all European banks after 1918", "A return to barter in place of money in world trade"],
          ["Correct. Multinational corporations with factories and suppliers in many countries became central to globalization after 1945.",
            "Foreign investment slowed between the world wars but did not end, and it grew again after 1945.",
            "European banks were not all nationalized after the First World War.",
            "World trade continued to use money and credit."], "moderate"),
        // ===== SAQ: Limited liability =====
        Q("a", "Identify ONE change made by the laws of 1855 and 1862 described in the passage.",
          "The response names one change from the passage.",
          ["They limited each investor's risk to the amount paid for shares.", "They allowed companies to register easily.", "Investors were no longer personally responsible for all of a company's debts."],
          ["\"Stock exchanges grew.\" This is an effect.", "\"They banned companies.\" This is false.", "\"The laws helped business.\" This names no specific change."],
          "The passage says the laws limited each investor's risk to the amount they had paid for their shares, so a failed company could no longer take an investor's house and savings.",
          "The laws were about business."),
        Q("b", "Explain ONE way limited liability helped industrial growth in the period 1750 to 1900.",
          "The response explains how limited liability helped industry grow.",
          ["Because investors risked only what they paid for shares, more middle-class people were willing to invest, so companies could raise the large sums that railways and steelworks needed.", "Easy registration allowed many new companies to form and compete, which spread investment into new industries.", "Selling shares to thousands of investors let companies grow much larger than family firms could."],
          ["\"More people invested.\" This states an effect but does not explain how it helped industry.", "\"Limited liability ended all financial panics.\" The passage says panics continued.", "\"Railways were invented in 1855.\" This is false."],
          "Railways and steelworks needed far more money than any family could provide. Because limited liability meant investors could lose only what they paid for their shares, thousands of middle-class people bought shares, and companies raised the huge sums they needed to build.",
          "Business got bigger."),
        Q("c", "Explain ONE criticism or problem connected to the new forms of business and finance in the period 1750 to 1900.",
          "The response names and explains a specific problem.",
          ["Limited liability could encourage reckless speculation, and panics such as the one beginning in 1873 ruined many small investors.", "Large companies and banks gained great power over workers, prices, and governments, which led to calls to regulate monopolies such as Standard Oil.", "Foreign loans and investment let bankers in Britain and France gain control over the finances of indebted states such as Egypt."],
          ["\"Some people lost money.\" This needs a specific problem and explanation.", "\"Banks were too small.\" This is not supported.", "\"Companies were not allowed to sell shares.\" This contradicts the passage."],
          "The panic that began in 1873 showed the risks of the new system. Many investors had bought shares in railways and banks on borrowed money, and when some failed, prices collapsed and thousands of small investors lost their savings, which led to a long economic slowdown.",
          "Finance had problems."),
      ] },
  ],
};

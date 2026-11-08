// Topic 5.7 Quiz: Economic Developments and Innovations in the Industrial Age
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why) => ({ id: "t57-m0" + n, skill: "u5", type: "mcq", set, topic: "5.7", reasoning, question, choices, why, answer: 0 });
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
          ["Bank deposits in London were far larger than those in Paris, New York, or the German Empire.", "Lombard Street is a street in London.", "English capital runs \"as water runs to find its level.\"", "Some countries lend money \"tardily and reluctantly.\""],
          ["Correct. His figures show 120 million pounds in London against 13 million in Paris, 40 million in New York, and 8 million in Germany.",
            "This is a location, not evidence of size.",
            "This is a comparison about how capital moves, not a measure of its size.",
            "This describes other countries, not England's wealth."]),
        M(2, "t57-s1", "Causation", "According to Bagehot, Britain's banking system gave it an advantage because",
          ["capital could be lent quickly to traders and businesses wherever profits were highest", "the government owned all the banks", "British banks refused to lend to new trades", "Britain had no foreign competitors"],
          ["Correct. He says English capital is \"instantly at the disposal\" of people who can use new opportunities.",
            "He describes private banks, joint-stock banks, and bill brokers, not state ownership.",
            "He says the opposite.",
            "He compares Britain to competitors."]),
        M(3, "t57-s1", "Contextualization", "The source is best understood in the context of which development?",
          ["The growth of banks, stock markets, and credit that financed industrial and global trade in the 1800s", "The Columbian Exchange", "The founding of the Dutch East India Company", "The collapse of the gold standard in the 1930s"],
          ["Correct. London became the center of world finance, lending to railways, governments, and businesses around the globe.",
            "The Columbian Exchange began in the 1490s.",
            "The VOC was founded in 1602.",
            "That came sixty years after Bagehot wrote."]),
        M(4, "t57-s1", "Sourcing and situation", "Bagehot's statement that money \"will not manage itself\" elsewhere in the book suggests that he",
          ["believed the banking system needed careful management to avoid crises", "wanted to abolish banks", "thought banking was simple", "opposed all credit"],
          ["Correct. As editor of The Economist, he argued that the Bank of England must act wisely in panics, as a lender of last resort.",
            "He praises the system's power.",
            "He calls it a system of \"delicacy\" as well as power.",
            "He praises credit for helping enterprising traders."]),
        // ===== Set 2: Companies that crossed borders =====
        M(5, "t57-s2", "Developments and processes", "The companies in the passage best illustrate which development of the late 1800s?",
          ["Transnational businesses that operated in many countries and controlled resources abroad", "The end of international trade", "Government ownership of all industry", "The decline of banking"],
          ["Correct. Each company moved capital, goods, and managers across borders.",
            "The companies expanded trade.",
            "They were private companies.",
            "HSBC is a bank that grew."]),
        M(6, "t57-s2", "Causation", "Lever Brothers acquired plantations in Africa mainly to",
          ["secure a steady supply of palm oil for its soap factories", "grow cotton for British mills", "build railways for the Belgian king", "train African workers as bankers"],
          ["Correct. The passage says the company sought palm oil for its soap.",
            "The passage names palm oil, not cotton.",
            "The passage does not say this.",
            "The passage says nothing about banking."]),
        M(7, "t57-s2", "Comparison", "The United Fruit Company is most similar to which earlier organization?",
          ["The Dutch East India Company, which controlled land and labor abroad to supply goods to distant markets", "The Hanseatic League's guild halls", "The Ottoman devshirme", "The Mongol postal system"],
          ["Correct. Both were companies whose control over land, labor, and transport in other regions rivaled local governments.",
            "The Hanseatic League was a trading network of towns.",
            "The devshirme recruited soldiers and officials.",
            "The postal system carried messages."]),
        M(8, "t57-s2", "Continuity and change", "Which later development best shows the continuing importance of the kind of company in the passage?",
          ["The growth of multinational corporations with factories and suppliers in many countries in the 1900s and 2000s", "The end of all foreign investment after 1900", "The abolition of banks in Europe", "The return to barter trade"],
          ["Correct. Multinational corporations became central to globalization after 1945.",
            "Foreign investment continued to grow.",
            "Banks remained central.",
            "Trade continued to use money and credit."]),
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

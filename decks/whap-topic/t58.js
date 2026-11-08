// Topic 5.8 Quiz: Reactions to the Industrial Economy
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why, difficulty) => ({ id: "t58-m0" + n, skill: "u5", type: "mcq", set, topic: "5.8", reasoning, question, choices, why, difficulty, answer: 0 });
const Q = (sub, prompt, earns, yes, no, example, notExample) => ({ id: "t58-q1" + sub, skill: "u5", type: "fr", set: "t58-s3", part: "SAQ 1", sub, topic: "5.8", lead: SAQ, prompt, earns, yes, no, example, notExample });

export const sets = {
  "t58-s1": {
    id: "t58-s1", name: "Pope Leo XIII, Rerum Novarum, 1891", intro: ONE,
    sources: [{ title: "Source", blocks: [
      { p: "3. ... some opportune remedy must be found quickly for the misery and wretchedness pressing so unjustly on the majority of the working class ... Hence, by degrees it has come to pass that working men have been surrendered, isolated and helpless, to the hardheartedness of employers and the greed of unchecked competition. ... so that a small number of very rich men have been able to lay upon the teeming masses of the laboring poor a yoke little better than that of slavery itself." },
      { p: "4. To remedy these wrongs the socialists, working on the poor man's envy of the rich, are striving to do away with private property, and contend that individual possessions should become the common property of all, to be administered by the State or by municipal bodies. ... They are, moreover, emphatically unjust, for they would rob the lawful possessor, distort the functions of the State, and create utter confusion in the community." },
      { p: "19. The great mistake made in regard to the matter now under consideration is to take up with the notion that class is naturally hostile to class, and that the wealthy and the working men are intended by nature to live in mutual conflict. ... Each needs the other: capital cannot do without labor, nor labor without capital." },
      { p: "45. ... wages ought not to be insufficient to support a frugal and well-behaved wage-earner. If through necessity or fear of a worse evil the workman accept harder conditions because an employer or contractor will afford him no better, he is made the victim of force and injustice." },
      { cite: "Pope Leo XIII, Rerum Novarum (\"Of New Things\"), encyclical letter on the rights and duties of capital and labor, Rome, May 15, 1891, sections 3, 4, 19, and 45, English translation as published by the Holy See.", url: "https://www.vatican.va/content/leo-xiii/en/encyclicals/documents/hf_l-xiii_enc_15051891_rerum-novarum.html", kind: "primary" },
    ] }],
  },
  "t58-s2": {
    id: "t58-s2", name: "The London dock strike of 1889", intro: "Use the passage below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that the London dock strike of 1889 showed that unskilled workers could organize as successfully as skilled craftsmen. Dock workers were hired by the day, or even by the hour, and crowds of men gathered at the gates each morning hoping to be chosen. In August 1889, dockers walked out, demanding a wage of six pence an hour and an end to the shortest hiring periods. Soon tens of thousands of workers along the Thames had joined them, and the port of London came to a standstill. Supporters held marches and raised money, and trade unions in Australia sent about 30,000 pounds to feed the strikers' families. After five weeks, with Cardinal Henry Manning, the Catholic archbishop of Westminster, helping to negotiate, the employers agreed to most of the demands. In the following years, unions of gas workers, dockers, and other unskilled laborers grew rapidly." },
      PRACTICE,
    ] }],
  },
  "t58-s3": {
    id: "t58-s3", name: "The Rochdale Pioneers", intro: SAQ,
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that cooperatives offered workers a way to respond to industrial capitalism without revolution. In 1844, a group of workers in the textile town of Rochdale, England, many of them weavers, pooled their savings to open a small shop. The Rochdale Society of Equitable Pioneers sold pure, unadulterated food at fair prices, gave each member one vote no matter how many shares he or she held, and returned profits to members according to how much they had bought. The idea spread quickly. By the 1860s, hundreds of cooperative stores in Britain had formed a wholesale society to buy goods in bulk and run their own factories, and cooperatives of consumers, farmers, and savers spread across Europe. Some socialists dismissed cooperatives as too small to change society, while their supporters saw them as a way for workers to share in the wealth they produced." },
      PRACTICE,
    ] }],
  },
};

export default {
  forms: [
    { id: "t58", name: "Topic 5.8 Quiz: Reactions to the Industrial Economy", group: "Unit 5: Revolutions",
      items: [
        // ===== Set 1: Rerum Novarum =====
        M(1, "t58-s1", "Claims and evidence in sources", "Leo XIII's view of the condition of industrial workers is best described as",
          ["sympathetic to workers but opposed to socialism", "supportive of the socialist plan for common property", "indifferent to the poverty of the laboring poor", "in favor of letting competition set all wages"],
          ["Correct. He condemns the \"misery and wretchedness\" of workers but calls socialist plans \"emphatically unjust.\"",
            "He says the socialist plan would \"rob the lawful possessor.\"",
            "He calls for a remedy to be \"found quickly\" for workers' misery.",
            "He blames \"the greed of unchecked competition\" and says wages must support a worker."], "moderate"),
        M(2, "t58-s1", "Comparison", "Leo XIII's claim in section 19 differs most from the ideas of Karl Marx in that Leo XIII",
          ["denies that classes are natural enemies", "argues that all history is a history of class struggle", "calls on workers of all countries to unite in revolution", "wants the state to take ownership of all factories"],
          ["Correct. Marx saw class conflict as the driving force of history, while Leo XIII calls that view \"the great mistake.\"",
            "This is Marx's view, which Leo XIII rejects.",
            "This is Marx's call, not Leo XIII's.",
            "Leo XIII defends private property against state ownership."], "moderate"),
        M(3, "t58-s1", "Contextualization", "The encyclical is best understood in the context of which development?",
          ["The growth of socialist parties and unions in Europe", "The Protestant Reformation's challenge to the papacy", "The Scramble for Africa after the Berlin Conference", "The French Revolution's seizure of Church property"],
          ["Correct. The Church responded to workers' movements and the spread of socialism, which was winning followers among Catholic workers.",
            "The Reformation began in the 1500s and concerned religious authority, not industrial labor.",
            "The encyclical is about workers and employers, not colonial conquest.",
            "The French Revolution came a century earlier and did not concern industrial wages."], "easy"),
        M(4, "t58-s1", "Causation", "Section 45's demand that wages be enough to support a worker most directly influenced which later development?",
          ["Catholic parties that backed minimum wages and labor laws", "The end of the Catholic Church's role in European politics", "The spread of laissez-faire opposition to wage laws", "The abolition of private property across Europe"],
          ["Correct. Rerum Novarum inspired Catholic social movements, unions, and parties that backed labor laws and social insurance.",
            "Catholic parties grew more active in politics after 1891.",
            "Laissez-faire opposes government rules on wages, which Leo XIII's demand supports.",
            "Leo XIII defended private property, and Europe did not abolish it."], "difficult"),
        // ===== Set 2: The London dock strike =====
        M(5, "t58-s2", "Causation", "According to the passage, a main grievance of the dock workers was",
          ["being hired by the day or hour with no secure pay", "a law that banned all trade unions in Britain", "the loss of their jobs to new steam cranes", "the government's closing of the port of London"],
          ["Correct. They were hired by the day or even the hour and demanded an end to the shortest hiring periods.",
            "The passage describes unions growing, not a ban on them.",
            "The passage does not mention machines replacing dockers.",
            "The strike itself brought the port to a standstill; the government did not close it."], "easy"),
        M(6, "t58-s2", "Claims and evidence in sources", "Which evidence from the passage best shows that labor movements had become international?",
          ["Australian unions sent money to feed strikers' families.", "Dockers walked out demanding a wage of six pence an hour.", "Crowds of men gathered at the dock gates each morning.", "A Catholic cardinal helped negotiate the settlement."],
          ["Correct. Workers on the other side of the world sent about 30,000 pounds to support the London strikers.",
            "This shows the strikers' demand, not international support.",
            "This shows how dockers were hired, not international support.",
            "Manning was the archbishop of Westminster in London, so his role was local."], "moderate"),
        M(7, "t58-s2", "Developments and processes", "The dock strike best illustrates which response to the industrial economy?",
          ["Workers forming unions and striking for better pay", "Workers smashing machines as the Luddites had done", "Governments taking ownership of docks and shipping", "Employers raising wages freely without any pressure"],
          ["Correct. The strike won most of its demands and led to the growth of unions of unskilled workers.",
            "The dockers walked out and marched; they did not destroy machines.",
            "The passage describes a settlement with private employers, not government ownership.",
            "Employers agreed to the demands only after a five-week strike."], "easy"),
        M(8, "t58-s2", "Comparison", "Cardinal Manning's role in settling the strike is most consistent with which idea of the period?",
          ["Catholic teaching that employers owe workers a fair wage", "Marx's call for workers to overthrow the capitalist class", "Adam Smith's argument that markets should set wages freely", "Social Darwinist claims that the poor were naturally unfit"],
          ["Correct. Manning, a Catholic leader, helped settle the strike on terms favorable to workers, in the spirit Leo XIII set out in Rerum Novarum in 1891.",
            "Manning helped employers and workers reach an agreement, not a revolution.",
            "Manning helped the dockers win a higher wage, not leave wages to the market alone.",
            "Social Darwinists opposed help for the poor, while Manning helped the strikers win their demands."], "moderate"),
        // ===== SAQ: The Rochdale Pioneers =====
        Q("a", "Identify ONE principle of the Rochdale Society described in the passage.",
          "The response names one principle from the passage.",
          ["It sold pure, unadulterated food at fair prices.", "Each member had one vote no matter how many shares he or she held.", "Profits were returned to members according to how much they had bought."],
          ["\"It was in Rochdale.\" This is a place, not a principle.", "\"It wanted to overthrow the government.\" This is not in the passage.", "\"Members with more shares had more votes.\" This is the opposite of the passage."],
          "The passage says each member had one vote no matter how many shares he or she held, so a poor weaver had the same say as a richer member.",
          "It was fair."),
        Q("b", "Explain ONE way the cooperative movement was a response to conditions created by the industrial economy.",
          "The response connects the cooperative to a specific condition of industrial life and explains the response.",
          ["Workers in industrial towns often had to buy adulterated or overpriced food, so the cooperative sold pure food at fair prices.", "Industrial workers earned low wages while owners kept profits, so the cooperative returned profits to its members.", "Workers had little control over the businesses that shaped their lives, so the cooperative gave each member an equal vote."],
          ["\"The cooperative was a store.\" This does not explain a response to industrial conditions.", "\"Cooperatives caused the Industrial Revolution.\" This is false.", "\"Workers were happy with industrial conditions.\" This contradicts the passage."],
          "In industrial towns, shopkeepers often sold workers food mixed with cheaper substances at high prices. The Rochdale Pioneers responded by opening their own shop that sold pure food at fair prices and shared the profits among the workers who bought there.",
          "Workers responded to industry."),
        Q("c", "Explain ONE way a different response to the industrial economy, such as socialism or government reform, differed from the cooperative movement.",
          "The response names another response and explains a specific difference from cooperatives.",
          ["Marxist socialists called for workers to seize political power and abolish private ownership of factories, while cooperatives worked within the existing economy.", "Governments passed factory acts and, in Germany, social insurance laws, which used the power of the state rather than voluntary self-help.", "Labor unions used strikes to force employers to raise wages, while cooperatives avoided conflict by creating their own businesses."],
          ["\"Socialism was different.\" This states no specific difference.", "\"Governments banned cooperatives.\" This is not accurate.", "\"Unions and cooperatives were the same.\" This is not a difference."],
          "Marx and Engels argued that workers should take political power and end private ownership of factories. The Rochdale Pioneers, by contrast, worked within the existing economy, using their own savings to start a business that shared its profits, without trying to overthrow the system.",
          "Other movements were different."),
      ] },
  ],
};

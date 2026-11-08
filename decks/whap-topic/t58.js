// Topic 5.8 Quiz: Reactions to the Industrial Economy
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why) => ({ id: "t58-m0" + n, skill: "u5", type: "mcq", set, topic: "5.8", reasoning, question, choices, why, answer: 0 });
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
          ["sympathetic to workers' suffering but opposed to socialist solutions", "fully supportive of the socialist program", "indifferent to workers' poverty", "in favor of abolishing private property"],
          ["Correct. He condemns the \"misery and wretchedness\" of workers but calls socialist plans \"emphatically unjust.\"",
            "He rejects socialism.",
            "He calls for a remedy \"quickly.\"",
            "He defends private property."]),
        M(2, "t58-s1", "Comparison", "Leo XIII's claim in section 19 differs most from the ideas of Karl Marx in that Leo XIII",
          ["denies that classes are naturally hostile and calls for harmony between capital and labor", "argues that history is a history of class struggle", "calls for workers of all countries to unite in revolution", "wants the state to own all factories"],
          ["Correct. Marx saw class conflict as the driving force of history, while Leo XIII calls that view \"the great mistake.\"",
            "That is Marx's view, which Leo XIII rejects.",
            "That is the call of the Communist Manifesto.",
            "Leo XIII defends private property."]),
        M(3, "t58-s1", "Contextualization", "The encyclical is best understood in the context of which development?",
          ["The growth of socialist parties and labor unions in industrial Europe in the late 1800s", "The Protestant Reformation", "The Scramble for Africa", "The French Revolution of 1789"],
          ["Correct. The Church responded to workers' movements and the spread of socialism, which was winning followers among Catholic workers.",
            "The Reformation was in the 1500s.",
            "The encyclical concerns industrial workers in Europe.",
            "It was written a century later."]),
        M(4, "t58-s1", "Causation", "Section 45's demand that wages be enough to support a worker most directly influenced which later development?",
          ["Catholic labor unions and political parties that supported minimum wages and social insurance", "The end of the Catholic Church's role in politics", "The spread of laissez-faire economics", "The abolition of private property in Europe"],
          ["Correct. Rerum Novarum inspired Catholic social movements, unions, and parties that backed labor laws.",
            "Catholic parties grew in politics.",
            "A required living wage limits pure laissez-faire.",
            "The encyclical defends private property."]),
        // ===== Set 2: The London dock strike =====
        M(5, "t58-s2", "Causation", "According to the passage, a main grievance of the dock workers was",
          ["being hired for very short periods, so their work and pay were never secure", "a ban on all unions in Britain", "the use of steam cranes", "the closing of the port of London by the government"],
          ["Correct. They were hired by the day or even the hour and demanded an end to the shortest hiring periods.",
            "Unions were legal in Britain by 1889.",
            "The passage does not mention cranes.",
            "The strike, not the government, closed the port."]),
        M(6, "t58-s2", "Claims and evidence in sources", "Which evidence from the passage best shows that labor movements had become international?",
          ["Trade unions in Australia sent about 30,000 pounds to the strikers.", "Dockers demanded six pence an hour.", "Crowds gathered at the dock gates each morning.", "Cardinal Manning helped negotiate."],
          ["Correct. Workers on the other side of the world supported the London strikers.",
            "This is the strikers' demand.",
            "This describes hiring practices.",
            "This shows the role of the Church."]),
        M(7, "t58-s2", "Developments and processes", "The dock strike best illustrates which response to the industrial economy?",
          ["Workers organizing unions and strikes to win better wages and conditions", "Workers destroying machines, as the Luddites had", "Governments nationalizing industries", "Employers voluntarily raising wages without pressure"],
          ["Correct. The strike won most of its demands and led to the growth of unions of unskilled workers.",
            "The dockers struck; they did not break machines.",
            "The government did not take over the docks.",
            "Employers agreed only after a five-week strike."]),
        M(8, "t58-s2", "Comparison", "The role of Cardinal Manning in the strike is most consistent with which source in this quiz?",
          ["Rerum Novarum's call for harmony between employers and workers and a fair wage", "The Communist Manifesto's call for revolution", "Adam Smith's argument for free trade", "Friedrich List's call for tariffs"],
          ["Correct. Manning, a Catholic leader, helped settle the strike on terms favorable to workers, in the spirit Leo XIII later described.",
            "Manning helped negotiate a settlement, not a revolution.",
            "Free trade is not at issue in the strike.",
            "Tariffs are not at issue in the strike."]),
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

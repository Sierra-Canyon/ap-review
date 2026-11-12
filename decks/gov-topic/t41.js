// Topic 4.1 Quiz: American Attitudes About Government and Politics
// Sources: Adam Smith, The Wealth of Nations, Book IV, Chapter VIII (consumers, producers, and import restraints), and a scenario.

export const sets = {
  "t41-s1": {
    id: "t41-s1", name: "Adam Smith on consumers and producers", intro: "Use the passage below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "Consumption is the sole end and purpose of all production; and the interest of the producer ought to be attended to, only so far as it may be necessary for promoting that of the consumer." },
        { p: "... But in the mercantile system, the interest of the consumer is almost constantly sacrificed to that of the producer; and it seems to consider production, and not consumption, as the ultimate end and object of all industry and commerce. In the restraints upon the importation of all foreign commodities which can come into competition with those of our own growth or manufacture, the interest of the home consumer is evidently sacrificed to that of the producer. It is altogether for the benefit of the latter, that the former is obliged to pay that enhancement of price which this monopoly almost always occasions." },
        { cite: "Adam Smith, An Inquiry into the Nature and Causes of the Wealth of Nations (1776), Book IV, Chapter VIII, \"Conclusion of the Mercantile System,\" Project Gutenberg edition.", url: "https://www.gutenberg.org/cache/epub/3300/pg3300.txt", kind: "primary" },
      ] },
    ],
  },
  "t41-s2": {
    id: "t41-s2", name: "Food trucks and a permit rule", intro: "Use the scenario below to answer parts A, B, and C.",
    sources: [
      { title: "Scenario", blocks: [
        { p: "In the city of Marlow, a group of restaurant owners asks the city council to require every food truck to buy a $5,000 yearly permit and to park at least 500 feet from any restaurant. Many of the food truck owners are recent immigrants who started their businesses with little money, and they say the rule would drive them out of business. One council member says customers, not the city, should decide where to eat. Another council member says the city should protect restaurants that have paid local property taxes for decades. Both council members say they believe in free markets and in giving every resident a fair chance to succeed." },
        { cite: "Scenario written for this review.", kind: "scenario" },
      ] },
    ],
  },
};

const S = "u4", T = "4.1";

export default {
  forms: [
    { id: "t41", name: "Topic 4.1 Quiz: American Attitudes About Government and Politics", group: "Unit 4: American Political Ideologies and Beliefs",
      items: [
        { id: "t41-m01", skill: S, type: "mcq", set: "t41-s1", topic: T, difficulty: "easy",
          question: "Which core American value does the passage most directly support?",
          choices: ["Free enterprise", "Rule of law", "Equality of opportunity", "Individualism"],
          why: [
            "Correct. Smith argues that markets exist to serve consumers and attacks restraints that protect producers from competition. That is the core of free enterprise, which the CED ties to The Wealth of Nations: self-interest, competition, and limited regulation.",
            "Rule of law means that everyone, including officials, must obey the law. The passage is about markets and trade, not about legal limits on leaders.",
            "Equality of opportunity means everyone has a fair chance to succeed. Smith's point is about consumers and producers in a market, not about equal chances for individuals.",
            "Individualism stresses personal responsibility and self-reliance. The passage is about how trade rules affect buyers and sellers, which is free enterprise.",
          ],
          answer: 0 },
        { id: "t41-m02", skill: S, type: "mcq", set: "t41-s1", topic: T, difficulty: "moderate",
          question: "According to the passage, what is wrong with restraints on imports that compete with goods made at home?",
          choices: [
            "They make home consumers pay higher prices to benefit home producers.",
            "They let foreign producers win control of goods sold in the home market.",
            "They cut the taxes that government collects on goods brought into the country.",
            "They force home producers to lower their prices to match foreign sellers.",
          ],
          why: [
            "Correct. Smith says import restraints sacrifice \"the interest of the home consumer\" to the producer, who gains from the \"enhancement of price\" the monopoly causes.",
            "This reverses Smith's point. The restraints shield home producers from foreign rivals; they do not hand the market to foreign sellers.",
            "The passage says nothing about tax revenue. Smith's complaint is about prices paid by consumers.",
            "This is what free competition would do, not what the restraints do. Smith argues that restraints let home producers keep prices high.",
          ],
          answer: 0 },
        { id: "t41-m03", skill: S, type: "mcq", set: "t41-s1", topic: T, difficulty: "difficult",
          question: "Which present-day policy would Smith's reasoning in the passage most likely oppose?",
          choices: [
            "A tariff on imported steel meant to protect American steel companies",
            "A law letting new firms enter a market long held by a single company",
            "A repeal of quotas that limit how much foreign sugar can be sold here",
            "An end to payments that government gives exporters of farm goods",
          ],
          why: [
            "Correct. A protective tariff is a restraint on imports that compete with home manufactures, so it makes consumers pay higher prices for the benefit of producers, exactly what Smith condemns.",
            "Opening a market to new firms increases competition, which serves consumers. Smith would favor this.",
            "Repealing import quotas removes a restraint on foreign goods, so consumers would pay less. Smith would favor the repeal.",
            "Smith also opposed bounties (payments) to exporters as favors to producers, so he would support ending them, not oppose it.",
          ],
          answer: 0 },
        { id: "t41-m04", skill: S, type: "mcq", topic: T, difficulty: "easy",
          question: "In 1974, President Nixon obeyed a unanimous Supreme Court ruling that ordered him to hand over tape recordings, even though the tapes damaged his case. Which core value does his compliance best show?",
          choices: ["Rule of law", "Free enterprise", "Individualism", "Equality of opportunity"],
          why: [
            "Correct. Rule of law means no one, including the president, is above the law. In United States v. Nixon (1974), the Court ordered the tapes released, and Nixon complied.",
            "Free enterprise is about private businesses competing in markets with limited government control. The scenario involves a court order, not the economy.",
            "Individualism stresses self-reliance and personal responsibility. The scenario is about a leader obeying the courts.",
            "Equality of opportunity means everyone has a fair chance to succeed. Nixon's compliance shows that leaders are bound by law, which is rule of law.",
          ],
          answer: 0 },
        { id: "t41-m05", skill: S, type: "mcq", topic: T, difficulty: "moderate",
          question: "Which policy is most clearly designed to promote equality of opportunity rather than equality of outcome?",
          choices: [
            "Pell Grants that help students from low-income families pay for college",
            "A tax that takes wealth above a set amount and splits it among all adults",
            "A rule giving every worker in a company the same pay whatever the job",
            "A yearly check sent to every household so all have the same income",
          ],
          why: [
            "Correct. Pell Grants help students start on fairer terms, but what each student achieves still depends on effort and choices. That is equality of opportunity.",
            "Dividing wealth so adults end up with similar amounts aims at equal results, which is equality of outcome.",
            "Equal pay regardless of job equalizes results, not chances, so it aims at equality of outcome.",
            "Giving every household the same income guarantees an equal result, which is equality of outcome rather than opportunity.",
          ],
          answer: 0 },
        { id: "t41-m06", skill: S, type: "mcq", topic: T, difficulty: "moderate",
          question: "A county proposes raising property taxes so that every public school receives the same funding per student. One resident supports the plan because every child deserves a fair start. Another opposes it because families should keep what they earn and decide for themselves how to spend it. Which pairing of core values best fits the two residents?",
          choices: [
            "Supporter: equality of opportunity; opponent: individualism",
            "Supporter: individualism; opponent: equality of opportunity",
            "Supporter: rule of law; opponent: free enterprise",
            "Supporter: limited government; opponent: rule of law",
          ],
          why: [
            "Correct. A \"fair start\" for every child is equality of opportunity, and the belief that families should keep and control what they earn reflects individualism and personal responsibility.",
            "This reverses the two residents. The supporter speaks of a fair start, not self-reliance.",
            "Neither resident argues about obeying the law, and the opponent's point is about families' own earnings, not businesses competing in a market.",
            "Limited government fits the opponent better than the supporter, and neither resident raises the rule of law.",
          ],
          answer: 0 },
        { id: "t41-m07", skill: S, type: "mcq", topic: T, difficulty: "moderate",
          question: "A voter wants to repeal the federal minimum wage and also wants to repeal state laws that ban adults from gambling. Which ideology best fits both of these views?",
          choices: ["Libertarian", "Conservative", "Liberal", "Socialist"],
          why: [
            "Correct. Libertarians want little government in both the economy and personal life, so they oppose wage rules and laws against adults' private choices.",
            "Conservatives often oppose minimum wage increases, but many favor laws that uphold traditional morals, such as limits on gambling.",
            "Liberals generally support a minimum wage as a protection for workers, so a liberal would not repeal it.",
            "Socialists favor government control of the economy and would keep or raise wage protections.",
          ],
          answer: 0 },
        { id: "t41-m08", skill: S, type: "mcq", topic: T, difficulty: "difficult",
          question: "Which statement about Adam Smith's The Wealth of Nations (1776) is accurate?",
          choices: [
            "Smith urged limited regulation of markets but still saw roles for government, such as defense and courts.",
            "Smith argued that government should do nothing at all beyond collecting the taxes needed to pay its debts.",
            "Smith argued that monopolies granted by government give buyers the lowest prices over the long run.",
            "Smith argued that markets work only when public spirit replaces self-interest in buyers and sellers.",
          ],
          why: [
            "Correct. Smith favored free competition and limited regulation, but he named duties for the sovereign: defense, a system of justice, and certain public works.",
            "This overstates Smith's view. He named defense, justice, and some public works as proper duties of government.",
            "Smith argued the opposite: a monopoly charges the highest price buyers will pay, while free competition brings the lowest price.",
            "Smith argued that self-interest, channeled by competition, serves society. He did not ask people to give it up.",
          ],
          answer: 0 },
        { id: "t41-ca1a", skill: S, type: "fr", set: "t41-s2", part: "Concept application", sub: "A", topic: T,
          lead: "Use the scenario to answer parts A, B, and C.",
          prompt: "Describe the core value of free enterprise as it applies to the food truck owners' position.",
          earns: "Describes free enterprise (people may start businesses and compete with limited government control) and ties it to the food trucks competing with restaurants.",
          yes: [
            "Free enterprise means private businesses compete in a market with little government control. The food truck owners want to compete for customers without a costly permit and a rule that keeps them away from restaurants.",
            "Under free enterprise, customers choose which businesses succeed. The truck owners argue that customers, not a rule written for restaurants, should decide where people eat.",
          ],
          no: [
            "\"The food trucks show free enterprise.\" (names the value without describing it)",
            "\"Free enterprise means the city protects local businesses.\" (misdefines the value; that is the restaurants' request)",
            "\"The truck owners believe in equality.\" (a different value, not described)",
          ],
          example: "Free enterprise is the belief that people should be free to start businesses and compete in a market with limited government control. The food truck owners want to compete with restaurants for customers on equal terms, and they argue that a $5,000 permit and a 500-foot rule would let the city, rather than customers, decide which businesses survive.",
          notExample: "The food truck owners are upset because the city council might pass a rule they do not like." },
        { id: "t41-ca1b", skill: S, type: "fr", set: "t41-s2", part: "Concept application", sub: "B", topic: T,
          lead: "Use the scenario to answer parts A, B, and C.",
          prompt: "Explain how the core value of equality of opportunity could be used to oppose the permit rule.",
          earns: "Explains that the rule would make it harder for people with little money (such as new immigrants) to start a business and compete, denying them a fair chance to succeed.",
          yes: [
            "Equality of opportunity means everyone should have a fair chance to get ahead. A $5,000 fee falls hardest on owners who started with little money, so the rule would close a path to success that wealthier owners can still afford.",
            "The rule protects owners who are already established and blocks newcomers, so new immigrants would not get the same chance to build a business that earlier restaurant owners had.",
          ],
          no: [
            "\"The rule is unfair.\" (no link to equal chances or how the rule blocks them)",
            "\"Everyone should earn the same amount of money.\" (describes equality of outcome)",
            "\"The rule violates the rule of law.\" (a different value, and the rule would be a lawful act of the council)",
          ],
          example: "Equality of opportunity holds that every person should have a fair chance to succeed through effort. Opponents could argue that a $5,000 yearly permit would keep owners who started with little money, many of them recent immigrants, from competing at all, while established restaurants would face no such barrier. The rule would protect those already on top instead of giving newcomers a fair start.",
          notExample: "The rule would cost $5,000, which is a lot of money." },
        { id: "t41-ca1c", skill: S, type: "fr", set: "t41-s2", part: "Concept application", sub: "C", topic: T,
          lead: "Use the scenario to answer parts A, B, and C.",
          prompt: "Explain why the two council members disagree about the permit rule even though both say they share the same core values.",
          earns: "Explains that people who share core values can weigh or apply them differently (for example, one stresses open competition for newcomers while the other stresses fairness to businesses that have paid taxes), leading to different views of government's role.",
          yes: [
            "Americans widely share values such as free enterprise and equal opportunity, but they rank and apply them differently. The first member applies them to newcomers and customers, while the second applies fairness to restaurants that have paid taxes for years.",
            "Shared values do not settle what government should do. One member thinks free markets mean the city should stay out, while the other thinks the city should step in to keep competition fair for taxpaying businesses.",
          ],
          no: [
            "\"They belong to different parties.\" (the scenario does not say so, and it does not explain how the same values lead to different views)",
            "\"One of them is lying about believing in free markets.\" (does not explain how shared values can be applied differently)",
          ],
          example: "Core values such as free enterprise and equality of opportunity are widely shared, but people weigh and apply them differently when a specific policy is at stake. The first council member applies them to customers and new owners and wants the city to stay out of the market, while the second sees a fair chance as protecting restaurants that have paid property taxes for decades. Their shared values lead to different views about how much government should do.",
          notExample: "The council members disagree because politics is always divided." },
      ] },
  ],
};

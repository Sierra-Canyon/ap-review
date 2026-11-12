// Topic 1.3 Quiz: Government Power and Individual Rights
// Sources: Federalist No. 10 on pure democracy (Avalon Project) and a scenario about a federal data-collection law.

export const sets = {
  "t13-s1": {
    id: "t13-s1", name: "Federalist No. 10 on pure democracy", intro: "Use the passage below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "From this view of the subject it may be concluded that a pure democracy, by which I mean a society consisting of a small number of citizens, who assemble and administer the government in person, can admit of no cure for the mischiefs of faction. A common passion or interest will, in almost every case, be felt by a majority of the whole; ... and there is nothing to check the inducements to sacrifice the weaker party or an obnoxious individual. Hence it is that such democracies have ever been spectacles of turbulence and contention; have ever been found incompatible with personal security or the rights of property ..." },
        { p: "A republic, by which I mean a government in which the scheme of representation takes place, opens a different prospect, and promises the cure for which we are seeking." },
        { cite: "James Madison, Federalist No. 10, November 22, 1787, as published by the Avalon Project, Yale Law School. \"Mischiefs of faction\" means the harms that factions cause.", url: "https://avalon.law.yale.edu/18th_century/fed10.asp", kind: "primary" },
      ] },
    ],
  },
  "t13-s2": {
    id: "t13-s2", name: "A federal law on phone location records", intro: "Use the scenario below to answer parts A, B, and C.",
    sources: [
      { title: "Scenario", blocks: [
        { p: "After a series of attacks on power plants, the president asks Congress for a law that would let a federal agency collect location records from cell phone companies for any person in the country, without a warrant, and keep them for two years. Supporters say the attacks show the need for a strong national government that can act quickly to protect the public. Opponents, including several governors, say the law would give a distant national government too much power over private life and would override the privacy laws their states have passed. A senator from a small state says the bill \"is exactly what the opponents of the Constitution warned about in 1787.\"" },
        { cite: "Scenario written for this review.", kind: "scenario" },
      ] },
    ],
  },
};

const S = "u1", T = "1.3";

export default {
  forms: [
    { id: "t13", name: "Topic 1.3 Quiz: Government Power and Individual Rights", group: "Unit 1: Foundations of American Democracy",
      items: [
        { id: "t13-m01", skill: S, type: "mcq", set: "t13-s1", topic: T, difficulty: "moderate",
          question: "Which claim does Madison make in the passage?",
          choices: [
            "A small direct democracy cannot stop a majority from sacrificing a weaker party",
            "A small direct democracy protects property better than any other form of government",
            "Making citizens equal in political rights will make them alike in their opinions",
            "A republic and a pure democracy are equally exposed to the harms of faction",
          ],
          why: [
            "Correct. Madison says that in a pure democracy a common passion is felt by a majority and \"there is nothing to check the inducements to sacrifice the weaker party or an obnoxious individual.\"",
            "Madison says the opposite: pure democracies have been \"incompatible with personal security or the rights of property.\"",
            "Madison calls this belief an error of \"theoretic politicians\" who supported pure democracy. It is not his own claim.",
            "Madison says a republic \"opens a different prospect\" and promises the cure, so the two forms are not equally exposed.",
          ],
          answer: 0 },
        { id: "t13-m02", skill: S, type: "mcq", set: "t13-s1", topic: T, difficulty: "difficult",
          question: "Which later argument in Federalist No. 10 builds most directly on the reasoning in the passage?",
          choices: [
            "A large republic takes in more interests, so a majority faction is less likely to form",
            "A small republic is safest, because its few representatives can know the views of every voter",
            "Government should remove the causes of faction by giving every citizen the same opinions",
            "An independent federal judiciary is needed to strike down unjust laws passed by a majority",
          ],
          why: [
            "Correct. Having shown that a small democracy cannot check a majority, Madison argues that a large republic includes so many parties and interests that a majority is less likely to share an unjust motive or act on it together.",
            "This is the Anti-Federalist position of Brutus No. 1. Madison argues the opposite: a larger republic controls faction better.",
            "Madison rejects this remedy in Federalist No. 10 as impracticable, since people will always form different opinions.",
            "Hamilton argues for judicial independence in Federalist No. 78. Federalist No. 10 relies on representation and size, not courts.",
          ],
          answer: 0 },
        { id: "t13-m03", skill: S, type: "mcq", set: "t13-s1", topic: T, difficulty: "moderate",
          question: "Which feature of the Constitution most directly reflects the preference Madison states in the passage?",
          choices: [
            "Federal laws are made by elected representatives rather than by citizens meeting in person",
            "A Bill of Rights lists specific protections that the national government must respect",
            "The states keep the powers that the Constitution does not delegate to the national government",
            "Federal courts may strike down laws that conflict with the Constitution",
          ],
          why: [
            "Correct. Madison prefers a republic, \"a government in which the scheme of representation takes place.\" Article I gives lawmaking power to a Congress of elected representatives.",
            "The Bill of Rights protects individuals, but it was added in 1791 and is not the scheme of representation the passage praises.",
            "Reserved powers reflect federalism, not the choice of representation over direct democracy.",
            "Judicial review is a check by courts. The passage praises representation, not judicial power.",
          ],
          answer: 0 },
        { id: "t13-m04", skill: S, type: "mcq", topic: T, difficulty: "easy",
          question: "During the ratification debate, supporters of the Constitution (Federalists) came largely from",
          choices: [
            "merchants and creditors in coastal towns",
            "small farmers in the western backcountry",
            "debtors who wanted states to print paper money",
            "state officials who feared losing their power",
          ],
          why: [
            "Correct. Federalists drew support from merchants, professionals, and creditors in port cities who wanted a national government able to regulate trade, pay debts, and protect property.",
            "Small backcountry farmers were a core base of the Anti-Federalists, who distrusted a distant national government.",
            "Debtors who favored paper money tended to oppose the Constitution, which barred states from issuing paper money.",
            "Many state officeholders, such as Governor George Clinton of New York, opposed the Constitution because it reduced state power.",
          ],
          answer: 0 },
        { id: "t13-m05", skill: S, type: "mcq", topic: T, difficulty: "easy",
          question: "In Federalist No. 10, Madison defines a faction as",
          choices: [
            "citizens united by an interest adverse to the rights of others",
            "a political party that wins control of both houses of Congress in an election",
            "any group of voters who cast ballots for the same candidate in an election",
            "a minority of citizens who disagree with the laws the government has passed",
          ],
          why: [
            "Correct. Madison writes that a faction is a number of citizens, \"whether amounting to a majority or a minority,\" united by a passion or interest adverse to the rights of others or the interests of the community.",
            "Madison wrote before modern parties existed, and his definition turns on hostility to others' rights, not on winning elections.",
            "Voting together is ordinary politics. A faction is defined by an interest adverse to the rights of others.",
            "Madison stresses that a faction can be a majority. Disagreeing with laws does not by itself make a group a faction.",
          ],
          answer: 0 },
        { id: "t13-m06", skill: S, type: "mcq", topic: T, difficulty: "difficult",
          question: "Which view did Federalists and Anti-Federalists both hold?",
          choices: [
            "Concentrated power threatens liberty and must be limited",
            "A bill of rights was needed before the Constitution could be ratified",
            "The national government should collect taxes directly from citizens",
            "A small republic protects the rights of its citizens best",
          ],
          why: [
            "Correct. Both sides feared concentrated power. They disagreed over where the danger lay: Federalists feared majority faction and weak government, and Anti-Federalists feared a distant national government.",
            "This was the Anti-Federalist demand. Many Federalists, such as Hamilton in Federalist No. 84, argued a bill of rights was unnecessary.",
            "Federalists supported a direct national taxing power. Anti-Federalists such as Brutus warned that it would drain the states.",
            "This was the Anti-Federalist view. Madison argued in Federalist No. 10 that a large republic protects rights better.",
          ],
          answer: 0 },
        { id: "t13-m07", skill: S, type: "mcq", topic: T, difficulty: "easy",
          question: "Which provision most directly protects an unpopular speaker from a law passed by a large majority in Congress?",
          choices: [
            "The First Amendment",
            "The Tenth Amendment",
            "The Supremacy Clause",
            "The Elastic Clause",
          ],
          why: [
            "Correct. The First Amendment says \"Congress shall make no law ... abridging the freedom of speech,\" so even a large majority cannot silence a speaker.",
            "The Tenth Amendment reserves powers to the states or the people. It does not protect individual speech.",
            "The Supremacy Clause makes federal law supreme over state law. It would strengthen, not limit, a federal law.",
            "The Necessary and Proper (Elastic) Clause expands what Congress can do. It does not protect individuals from Congress.",
          ],
          answer: 0 },
        { id: "t13-m08", skill: S, type: "mcq", topic: T, difficulty: "moderate",
          question: "Which choice correctly describes each side's position on adding a bill of rights to the Constitution?",
          choices: [
            "Federalists: a list was unnecessary because national powers were limited; Anti-Federalists: a list was needed to restrain a strong national government",
            "Federalists: a list was needed to protect the states; Anti-Federalists: a list was unnecessary because state constitutions already protected rights",
            "Federalists: a list was unnecessary because national powers were limited; Anti-Federalists: a list was unnecessary because the new government would be weak",
            "Federalists: a list was needed before any state could ratify; Anti-Federalists: a list was needed to restrain a strong national government",
          ],
          why: [
            "Correct. Federalists such as Hamilton argued the national government had only the powers listed, so a bill of rights was unneeded. Anti-Federalists such as Brutus argued that broad national powers required written limits.",
            "This reverses the two sides. Anti-Federalists demanded the list, and many Federalists resisted it at first.",
            "The first half is right, but Anti-Federalists thought the new government would be too strong, which is why they wanted a bill of rights.",
            "The second half is right, but Federalists did not demand a bill of rights before ratification; they promised amendments afterward to win votes.",
          ],
          answer: 0 },
        { id: "t13-ca1a", skill: S, type: "fr", set: "t13-s2", part: "Concept application", sub: "A", topic: T,
          lead: "Use the scenario to answer parts A, B, and C.",
          prompt: "Describe the tension between government power and individual rights shown in the scenario.",
          earns: "Describes how the law would expand government power to provide security while reducing individual privacy or liberty, using details from the scenario.",
          yes: [
            "The government wants power to collect location records to protect the public, but that power would reduce each person's privacy from government tracking.",
            "Supporters stress order and safety, which call for strong government; opponents stress personal liberty, which calls for limits on government.",
          ],
          no: [
            "\"Some people like the law and some do not.\" (Describes disagreement, not the tension between power and rights.)",
            "\"The tension is between the House and the Senate.\" (Not the tension shown in the scenario.)",
          ],
          example: "The scenario shows a tension between the government's power to keep order and protect the public and the individual's right to privacy. Collecting every person's location records without a warrant might help stop attacks, but it would let the government track people who have done nothing wrong.",
          notExample: "The law is about cell phones and power plants." },
        { id: "t13-ca1b", skill: S, type: "fr", set: "t13-s2", part: "Concept application", sub: "B", topic: T,
          lead: "Use the scenario to answer parts A, B, and C.",
          prompt: "Explain how opponents of the law could use the arguments of Anti-Federalists such as the author of Brutus No. 1 to support their position.",
          earns: "Identifies an Anti-Federalist argument (a distant national government would grow too powerful, absorb state authority, or threaten liberty) and explains how it supports opposing the law.",
          yes: [
            "Brutus warned that a strong national government would swallow the states and threaten liberty; opponents can say a federal law overriding state privacy laws proves the point.",
            "Anti-Federalists argued liberty is safest in governments close to the people; governors can say their states, not a distant agency, should decide how private data is protected.",
          ],
          no: [
            "\"Anti-Federalists were against the Constitution.\" (True, but not tied to the law.)",
            "\"Brutus No. 1 says phones should be private.\" (Inaccurate; Brutus wrote in 1787 about national power in general.)",
          ],
          example: "In Brutus No. 1, the Anti-Federalist author warned that a powerful national government would gradually absorb the states' authority and endanger the people's liberty. Opponents could argue that this law does exactly that: it lets a distant federal agency track every citizen and overrides privacy protections that state governments, which are closer to the people, chose to adopt.",
          notExample: "Opponents could say the Anti-Federalists would not like this law." },
        { id: "t13-ca1c", skill: S, type: "fr", set: "t13-s2", part: "Concept application", sub: "C", topic: T,
          lead: "Use the scenario to answer parts A, B, and C.",
          prompt: "Explain how a provision of the Bill of Rights could be used to limit the law described in the scenario.",
          earns: "Names a relevant provision (the Fourth Amendment's protection against unreasonable searches and its warrant requirement) and explains how it could limit warrantless collection of location records.",
          yes: [
            "The Fourth Amendment bars unreasonable searches and requires warrants based on probable cause; a court could rule that collecting everyone's location records without a warrant violates it.",
            "Opponents could sue, arguing the Fourth Amendment requires the agency to get a warrant for a specific person instead of collecting data on everyone.",
          ],
          no: [
            "\"The First Amendment protects freedom of speech.\" (Does not explain how it limits collecting location records.)",
            "\"The Bill of Rights protects rights.\" (Too vague.)",
          ],
          example: "The Fourth Amendment protects people against unreasonable searches and seizures and requires warrants based on probable cause. Opponents could challenge the law in court, arguing that gathering every person's location records without a warrant is an unreasonable search, so the agency would have to show probable cause and get a warrant for each person it wants to track.",
          notExample: "Congress could vote no on the law." },
      ] },
  ],
};

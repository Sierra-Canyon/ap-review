// Topic 1.1 Quiz: Ideals of Democracy
// Sources: four grievances from the Declaration of Independence (National Archives transcription) and a scenario.

export const sets = {
  "t11-s1": {
    id: "t11-s1", name: "Four grievances in the Declaration of Independence", intro: "Use the passage below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "He has dissolved Representative Houses repeatedly, for opposing with manly firmness his invasions on the rights of the people." },
        { p: "He has made Judges dependent on his Will alone, for the tenure of their offices, and the amount and payment of their salaries." },
        { p: "He has kept among us, in times of peace, Standing Armies without the Consent of our legislatures." },
        { p: "... For imposing Taxes on us without our Consent:" },
        { cite: "Declaration of Independence, July 4, 1776, National Archives transcription. The four lines come from the list of grievances against King George III; the fourth is one of the acts of \"pretended Legislation\" by Parliament that the Declaration accuses the king of approving.", url: "https://www.archives.gov/founding-docs/declaration-transcript", kind: "primary" },
      ] },
    ],
  },
  "t11-s2": {
    id: "t11-s2", name: "A petition to change how districts are drawn", intro: "Use the scenario below to answer parts A, B, and C.",
    sources: [
      { title: "Scenario", blocks: [
        { p: "In a Midwestern state, the legislature draws the lines for its own districts. A citizens' group argues that legislators have drawn lines that protect themselves from real competition. After the legislature refuses to change the process, the group gathers more than 400,000 signatures to put a proposed amendment to the state constitution on the ballot. The amendment would give the job of drawing districts to a commission of citizens. Leaders of the legislature oppose the measure. They argue that elected lawmakers, who answer to voters at every election, should keep the job, and that a commission no one elects would answer to no one." },
        { cite: "Scenario written for this review.", kind: "scenario" },
      ] },
    ],
  },
};

const S = "u1", T = "1.1";

export default {
  forms: [
    { id: "t11", name: "Topic 1.1 Quiz: Ideals of Democracy", group: "Unit 1: Foundations of American Democracy",
      items: [
        { id: "t11-m01", skill: S, type: "mcq", set: "t11-s1", topic: T, difficulty: "difficult",
          question: "Which provision of the Constitution most directly answers the grievance about judges?",
          choices: [
            "Article III, which lets judges serve during good behavior and bars cuts to their pay",
            "Article II, which lets the president nominate judges with the advice and consent of the Senate",
            "Article III, which gives the Supreme Court original jurisdiction in cases involving states",
            "Article I, which lets Congress create federal courts below the Supreme Court",
          ],
          why: [
            "Correct. The grievance says judges depended on the king for their tenure and salaries. Article III answers both: judges hold office \"during good Behaviour,\" and their pay cannot be reduced while they serve.",
            "Nomination and Senate confirmation govern how judges are chosen. They do not protect a judge from losing office or pay after taking the bench.",
            "Original jurisdiction decides which cases start in the Supreme Court. It says nothing about a judge's tenure or salary.",
            "The power to create lower courts concerns the structure of the courts, not the independence of the judges who sit on them.",
          ],
          answer: 0 },
        { id: "t11-m02", skill: S, type: "mcq", set: "t11-s1", topic: T, difficulty: "moderate",
          question: "The grievance about \"imposing Taxes on us without our Consent\" was answered in the Constitution by",
          choices: [
            "giving the power to tax to Congress, whose members the people or their states choose",
            "letting the president set tax rates each year, subject to review by the Supreme Court",
            "forbidding the national government to collect any tax without approval from every state",
            "requiring that each state legislature approve every federal tax before it took effect",
          ],
          why: [
            "Correct. Article I, Section 8 gives the taxing power to Congress, an elected legislature, and Article I, Section 7 requires revenue bills to start in the House, the chamber the people elect directly. Taxation rests on the consent of representatives.",
            "The president has no power to set taxes; that power belongs to Congress under Article I.",
            "This describes something close to the Articles of Confederation, under which Congress could not tax at all. The Constitution gave Congress a direct taxing power.",
            "State legislatures have no veto over federal taxes. Requiring their approval would have repeated the weakness of the Articles.",
          ],
          answer: 0 },
        { id: "t11-m03", skill: S, type: "mcq", set: "t11-s1", topic: T, difficulty: "easy",
          question: "Taken together, the four grievances accuse the king of violating which ideal?",
          choices: ["Limited government", "Dual federalism", "Judicial review", "Pluralist democracy"],
          why: [
            "Correct. Each grievance describes the king acting beyond proper limits: shutting down elected assemblies, controlling judges, keeping armies without consent, and taxing without consent. Limited government holds that rulers must stay within set bounds.",
            "Dual federalism describes national and state governments working in separate spheres. The grievances concern the king's abuse of power, not the division of power among levels of government.",
            "Judicial review is the power of courts to strike down laws. It was established in Marbury v. Madison (1803), long after 1776.",
            "Pluralist democracy describes competition among many groups for influence. The grievances do not describe group competition.",
          ],
          answer: 0 },
        { id: "t11-m04", skill: S, type: "mcq", topic: T, difficulty: "easy",
          question: "What was the main purpose of the Declaration of Independence (1776)?",
          choices: [
            "To justify the colonies' break from Great Britain",
            "To set up the structure of the first national government",
            "To list the rights later protected in the Bill of Rights",
            "To end the slave trade in the thirteen colonies",
          ],
          why: [
            "Correct. Thomas Jefferson's text states the ideals of natural rights and consent, lists the king's abuses, and declares the colonies free and independent states, explaining the break to the world.",
            "The Articles of Confederation, drafted in 1777 and ratified in 1781, set up the first national government. The Declaration created no institutions.",
            "The Bill of Rights was written by James Madison in 1789 and ratified in 1791. The Declaration names broad rights, not a list of protections.",
            "The Declaration did not end the slave trade. A passage condemning it was removed from Jefferson's draft.",
          ],
          answer: 0 },
        { id: "t11-m05", skill: S, type: "mcq", topic: T, difficulty: "easy",
          question: "Residents of a city elect a nine-member council. The council, not the residents, votes on each new ordinance, and members who displease voters can be replaced at the next election. This arrangement best reflects",
          choices: ["republicanism", "natural rights", "federalism", "the social contract"],
          why: [
            "Correct. Republicanism means that citizens elect representatives who make laws on their behalf and who must answer to voters at regular elections.",
            "Natural rights are rights people hold by nature, such as life and liberty. The scenario describes how laws are made, not which rights people hold.",
            "Federalism divides power between national and state governments. The scenario involves only one city government.",
            "The social contract is the agreement that creates government in exchange for protecting rights. The scenario describes the way an existing government makes laws.",
          ],
          answer: 0 },
        { id: "t11-m06", skill: S, type: "mcq", topic: T, difficulty: "difficult",
          question: "The Declaration states that \"all men are created equal.\" Which provision of the original Constitution of 1787 is most clearly at odds with that ideal?",
          choices: [
            "The clause requiring states to return people who escaped from slavery",
            "The clause requiring that members of the House be chosen by the people",
            "The clause forbidding any religious test for holding federal office",
            "The clause forbidding the United States to grant titles of nobility",
          ],
          why: [
            "Correct. Article IV, Section 2 required that a person \"held to Service or Labour\" who escaped to another state be delivered up to the enslaver. It protected slavery, which denied the equality the Declaration proclaimed.",
            "Election of the House by the people (Article I, Section 2) fits the Declaration's ideal of consent of the governed.",
            "The ban on religious tests (Article VI) treats citizens of every faith alike, which supports equality rather than undercutting it.",
            "The ban on titles of nobility (Article I, Section 9) rejects a hereditary ruling class, which supports equality.",
          ],
          answer: 0 },
        { id: "t11-m07", skill: S, type: "mcq", topic: T, difficulty: "moderate",
          question: "The Declaration claims that when a government fails to protect rights, the people may \"alter\" it. Which part of the Constitution gives this idea a peaceful, legal form?",
          choices: [
            "Article V, which sets out how amendments are proposed and ratified",
            "Article VI, which makes the Constitution the supreme law of the land",
            "Article III, which gives federal courts power over cases under the Constitution",
            "Article I, Section 8, which lets Congress make all necessary and proper laws",
          ],
          why: [
            "Correct. Article V lets the people, through Congress and the states, change the Constitution itself. It turns the right to alter government into a lawful process rather than a revolution.",
            "The Supremacy Clause settles conflicts between federal and state law. It does not provide a way to change the government.",
            "Article III creates the judicial power. Courts apply the Constitution; they do not give the people a way to alter it.",
            "The Necessary and Proper Clause lets Congress carry out its listed powers. It does not let the people change the form of government.",
          ],
          answer: 0 },
        { id: "t11-m08", skill: S, type: "mcq", topic: T, difficulty: "moderate",
          question: "Which statement expresses the idea of the social contract rather than natural rights alone?",
          choices: [
            "People agree to obey a government in return for its protection of their rights",
            "People hold rights to life and liberty by nature, before any government exists",
            "People have rights that no government may take away, whatever the majority wants",
            "People are born equal and have rights that come from their Creator, not from rulers",
          ],
          why: [
            "Correct. The social contract, as John Locke described it, is an agreement: people consent to a government, and it holds power on the condition that it protects their rights.",
            "This states natural rights theory: rights exist before government. It does not describe the agreement that creates government.",
            "This describes unalienable rights and limits on majority rule. It names no bargain between the people and a government.",
            "This restates the Declaration's view of equality and natural rights. It does not describe the people's consent to a government.",
          ],
          answer: 0 },
        { id: "t11-ca1a", skill: S, type: "fr", set: "t11-s2", part: "Concept application", sub: "A", topic: T,
          lead: "Use the scenario to answer parts A, B, and C.",
          prompt: "Describe the democratic ideal reflected in the citizens' effort to place the amendment on the ballot.",
          earns: "Names popular sovereignty (or consent of the governed) and describes it as the idea that government's authority comes from the people, shown by citizens deciding the question themselves.",
          yes: [
            "Popular sovereignty: the people are the source of government's power, so citizens can vote directly on how their state is run.",
            "Consent of the governed: the group asks voters, not lawmakers, to decide how districts are drawn, because government rests on the people's approval.",
          ],
          no: [
            "\"Popular sovereignty.\" (Names the ideal without describing it.)",
            "\"Federalism, because it is a state issue.\" (Federalism divides power between levels of government; it is not the ideal behind citizens voting on the measure.)",
          ],
          example: "The effort reflects popular sovereignty, the idea that the people are the ultimate source of government's authority. By gathering signatures and putting the amendment on the ballot, citizens are deciding for themselves how their government will be organized instead of leaving the choice to officials.",
          notExample: "The citizens are mad at the legislature and want a change." },
        { id: "t11-ca1b", skill: S, type: "fr", set: "t11-s2", part: "Concept application", sub: "B", topic: T,
          lead: "Use the scenario to answer parts A, B, and C.",
          prompt: "Explain how the citizens' group could use the Declaration of Independence to support its effort.",
          earns: "Uses a specific idea from the Declaration (governments derive power from the consent of the governed, or the people may alter a government that fails them) and explains how it supports letting voters change the districting process.",
          yes: [
            "The Declaration says governments get \"their just powers from the consent of the governed,\" so the group can argue that voters, not self-interested lawmakers, should decide how districts are drawn.",
            "The Declaration says the people may \"alter\" a government that fails to serve them; the group can argue that the amendment alters a process that has stopped answering to voters.",
          ],
          no: [
            "\"The Declaration is about freedom.\" (Too vague; no idea from the document is tied to the scenario.)",
            "\"The Declaration created the right to a ballot initiative.\" (Inaccurate; the Declaration created no such process.)",
          ],
          example: "The Declaration states that governments derive \"their just powers from the consent of the governed\" and that the people may alter a government that fails them. The group could argue that when legislators draw lines to protect themselves, elections no longer express real consent, so the people are entitled to change the process through the amendment.",
          notExample: "The group could say the Declaration of Independence is an important document." },
        { id: "t11-ca1c", skill: S, type: "fr", set: "t11-s2", part: "Concept application", sub: "C", topic: T,
          lead: "Use the scenario to answer parts A, B, and C.",
          prompt: "Explain how legislative leaders could use the ideal of republicanism to argue against the amendment.",
          earns: "Defines republicanism as government by elected representatives who answer to voters and explains how that supports keeping districting with elected lawmakers rather than an unelected commission.",
          yes: [
            "In a republic, elected representatives make decisions and face voters; lawmakers can argue a commission no one elects cannot be held accountable at the ballot box.",
            "Republicanism trusts elected officials to weigh competing interests; leaders can say districting should stay with representatives voters can remove.",
          ],
          no: [
            "\"Republicanism means the Republican Party should decide.\" (Confuses the ideal with a political party.)",
            "\"The commission would be unconstitutional.\" (An assertion with no link to republicanism.)",
          ],
          example: "Republicanism means that the people govern through elected representatives who must answer to voters. Legislative leaders could argue that districting should stay with lawmakers because voters can punish them at the next election, while members of an appointed commission never face the voters, so the change would weaken accountability.",
          notExample: "Legislators like their jobs and do not want to lose power." },
      ] },
  ],
};

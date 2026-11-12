// Topic 4.10 Quiz: Ideology and Social Policy
// Sources: a practice passage on school choice, and a scenario.

export const sets = {
  "t410-s1": {
    id: "t410-s1", name: "An argument for school choice", intro: "Use the passage below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "Parents, not officials in a distant capital, know best what their children need. Yet in most of the country, a child's public school is decided by the family's address, and families who cannot afford to move or pay private tuition have no way out of a school that is failing them. Supporters of school choice argue that public money for education should follow the child, through vouchers, education savings accounts, or charter schools. Schools would then have to compete for students, just as businesses compete for customers. Decisions about schools, in this view, belong to families and to state and local communities, and Washington should not tie federal aid to national rules about what or how schools must teach." },
        { cite: "Practice passage written for this review. It summarizes an argument made by many conservative supporters of school choice.", kind: "practice" },
      ] },
    ],
  },
  "t410-s2": {
    id: "t410-s2", name: "A state debates social media rules for minors", intro: "Use the scenario below to answer parts A, B, and C.",
    sources: [
      { title: "Scenario", blocks: [
        { p: "A state legislature is debating a bill that would require social media companies to get a parent's permission before anyone under 16 can open an account, and to verify every user's age. A legislator who supports the bill says that parents need the law's help to protect children from harmful content and from apps designed to keep them scrolling late at night. A second legislator opposes it, saying the bill lets government decide what young people may read and would force every adult to hand over identification to private companies. A neighboring state passed a similar law last year, while a third state has rejected one." },
        { cite: "Scenario written for this review.", kind: "scenario" },
      ] },
    ],
  },
};

const S = "u4", T = "4.10";

export default {
  forms: [
    { id: "t410", name: "Topic 4.10 Quiz: Ideology and Social Policy", group: "Unit 4: American Political Ideologies and Beliefs",
      items: [
        { id: "t410-m01", skill: S, type: "mcq", set: "t410-s1", topic: T, difficulty: "easy",
          question: "Which ideology does the passage most clearly reflect?",
          choices: ["Conservatism", "Liberalism", "Socialism", "Populism"],
          why: [
            "Correct. The passage stresses parental choice, market competition, and state and local control instead of federal rules, all conservative themes in education policy.",
            "Liberals generally favor stronger federal support for public schools and are wary of vouchers that move public money to private schools.",
            "Socialism favors government ownership and control, not competition among schools for students.",
            "Populism appeals to ordinary people against elites, but the passage's argument rests on markets and local control.",
          ],
          answer: 0 },
        { id: "t410-m02", skill: S, type: "mcq", set: "t410-s1", topic: T, difficulty: "moderate",
          question: "Which policy would the author of the passage most likely oppose?",
          choices: [
            "A federal law requiring states to adopt national standards to receive school aid",
            "A state law letting families use public money for private school tuition",
            "A city plan allowing new charter schools to open and compete for students",
            "A state program giving families accounts to spend on approved education costs",
          ],
          why: [
            "Correct. The passage says Washington should not tie federal aid to national rules about what or how schools teach.",
            "Using public money for private tuition is a voucher program, which the passage supports.",
            "The passage names charter schools as a way for funding to follow the child.",
            "Education savings accounts are one of the tools the passage supports.",
          ],
          answer: 0 },
        { id: "t410-m03", skill: S, type: "mcq", set: "t410-s1", topic: T, difficulty: "moderate",
          question: "Which response would a liberal critic of the passage most likely make?",
          choices: [
            "Vouchers could drain money from public schools that most poor children still attend.",
            "Vouchers give the federal government too much control over private religious schools.",
            "Schools should compete for students in a market with no public funding at all.",
            "Decisions about schools belong only to families, so no government should fund them.",
          ],
          why: [
            "Correct. Liberals generally defend public schools as a shared way to give every child equal opportunity, and they argue that moving money to private options weakens the schools left behind.",
            "Concern about government control over private schools is a libertarian or conservative worry, not the typical liberal objection.",
            "Ending public funding altogether is a libertarian position, not a liberal one.",
            "Opposing any public funding of schools is also libertarian; liberals favor public education.",
          ],
          answer: 0 },
        { id: "t410-m04", skill: S, type: "mcq", topic: T, difficulty: "easy",
          question: "What did the Supreme Court decide in Dobbs v. Jackson Women's Health Organization (2022)?",
          choices: [
            "It overruled Roe v. Wade and returned the regulation of abortion to the states.",
            "It held that the Constitution protects a right to abortion in all fifty states.",
            "It struck down every state law that placed limits on access to abortion.",
            "It ruled that only Congress, not the states, may make laws about abortion.",
          ],
          why: [
            "Correct. Dobbs overruled Roe v. Wade (1973) and Planned Parenthood v. Casey (1992), holding that the Constitution does not confer a right to abortion and leaving the issue to elected officials in the states.",
            "This describes Roe v. Wade, which Dobbs overruled.",
            "Dobbs upheld a Mississippi law limiting abortion; it did not strike down state limits.",
            "Dobbs returned the issue to the people and their elected representatives in the states.",
          ],
          answer: 0 },
        { id: "t410-m05", skill: S, type: "mcq", topic: T, difficulty: "moderate",
          question: "Which action is an example of devolution in social policy?",
          choices: [
            "Congress turning a federal welfare program into block grants that states design",
            "Congress setting national rules that every state's welfare program must follow",
            "The Supreme Court striking down a state law limiting welfare for new residents",
            "A president creating a new federal agency to run food aid for poor families",
          ],
          why: [
            "Correct. Devolution shifts power and responsibility from the national government to the states, as when the 1996 welfare law replaced a federal program with block grants that states shape.",
            "National rules for every state move power toward Washington, the opposite of devolution.",
            "A court ruling striking down a state law limits state power rather than handing it more.",
            "A new federal agency expands the national government's role.",
          ],
          answer: 0 },
        { id: "t410-m06", skill: S, type: "mcq", topic: T, difficulty: "easy",
          question: "Which position on marriage law is most consistent with libertarian ideology?",
          choices: [
            "Government should not limit which adults may marry each other.",
            "States should define marriage according to religious tradition.",
            "The federal government should pay for programs promoting marriage.",
            "Each town should decide who may marry by a vote of its residents.",
          ],
          why: [
            "Correct. Libertarians want government out of adults' private choices, so they oppose laws restricting whom consenting adults may marry.",
            "Defining marriage by tradition is a socially conservative position.",
            "Spending federal money to promote marriage enlarges government's role, which libertarians oppose.",
            "Majority votes on private choices let government restrict individual liberty, which libertarians reject.",
          ],
          answer: 0 },
        { id: "t410-m07", skill: S, type: "mcq", topic: T, difficulty: "difficult",
          question: "Which pairing best matches each ideology with its typical view of the federal government's role in civil rights policy?",
          choices: [
            "Liberals: strong federal enforcement against bias; conservatives: race-neutral rules and state discretion",
            "Liberals: race-neutral rules and state discretion; conservatives: strong federal enforcement against bias",
            "Liberals: leave civil rights to private charities; conservatives: federal quotas in hiring for every employer",
            "Liberals: repeal of the Civil Rights Act of 1964; conservatives: federal control of every state's elections",
          ],
          why: [
            "Correct. Liberals favor an active federal role, such as vigorous enforcement of the Civil Rights Act of 1964 and the Voting Rights Act of 1965, while conservatives favor race-neutral rules and more room for states.",
            "This reverses the two ideologies.",
            "Liberals do not leave civil rights to charity, and conservatives oppose hiring quotas.",
            "Liberals support the Civil Rights Act of 1964, and conservatives generally favor state control of election administration.",
          ],
          answer: 0 },
        { id: "t410-m08", skill: S, type: "mcq", topic: T, difficulty: "difficult",
          question: "A city bans residents from keeping handguns in their homes. Which ideology most likely supports such a ban, and which required case limits it?",
          choices: [
            "Liberalism; McDonald v. Chicago (2010) applied the Second Amendment to the states.",
            "Conservatism; McDonald v. Chicago (2010) applied the Second Amendment to the states.",
            "Liberalism; United States v. Lopez (1995) applied the Second Amendment to the states.",
            "Libertarianism; Wisconsin v. Yoder (1972) applied the Second Amendment to the states.",
          ],
          why: [
            "Correct. Liberals generally favor stricter gun laws to promote public safety. In McDonald v. Chicago (2010), the Court incorporated the Second Amendment through the Fourteenth Amendment and struck down Chicago's handgun ban.",
            "Conservatives generally oppose handgun bans as violations of the right to bear arms.",
            "Lopez (1995) struck down a federal school gun-zone law as beyond the Commerce Clause; it did not apply the Second Amendment to states.",
            "Libertarians oppose gun bans, and Yoder (1972) was a free exercise case about Amish schooling.",
          ],
          answer: 0 },
        { id: "t410-ca1a", skill: S, type: "fr", set: "t410-s2", part: "Concept application", sub: "A", topic: T,
          lead: "Use the scenario to answer parts A, B, and C.",
          prompt: "Describe the ideology reflected in the second legislator's position.",
          earns: "Identifies the position as libertarian (or civil-libertarian) and describes it: government should not limit individuals' speech, reading, or privacy, tied to the objections about deciding what young people read and requiring identification.",
          yes: [
            "Libertarian: the legislator wants government out of personal choices, objecting that the bill lets the state decide what young people read and forces adults to give up privacy to verify their age.",
            "The legislator's view reflects libertarian ideology, which puts individual liberty and privacy ahead of government efforts to protect people from themselves.",
          ],
          no: [
            "\"Libertarian.\" (names the ideology without describing it)",
            "\"Conservative, because the legislator wants to protect children.\" (describes the other legislator)",
          ],
          example: "The second legislator's position reflects libertarian ideology, which holds that government should protect individual liberty and stay out of personal choices. The legislator objects that the bill would let government decide what young people may read and would make every adult surrender identification, a loss of privacy.",
          notExample: "The second legislator votes no on the bill." },
        { id: "t410-ca1b", skill: S, type: "fr", set: "t410-s2", part: "Concept application", sub: "B", topic: T,
          lead: "Use the scenario to answer parts A, B, and C.",
          prompt: "Explain why a social conservative might support the bill.",
          earns: "Explains a social conservative principle (protecting children and families, upholding parents' authority, using law to support traditional values or public morals) and how the bill serves it.",
          yes: [
            "Social conservatives stress the family and parents' authority over children; requiring a parent's permission puts parents back in charge of what their children see online.",
            "Social conservatives support laws that protect public morals and children; the bill shields minors from harmful content and addictive apps.",
          ],
          no: [
            "\"Conservatives like rules.\" (no principle explained)",
            "\"Because conservatives want lower taxes.\" (unrelated principle)",
          ],
          example: "Social conservatives believe the family is the foundation of society and that parents, not companies, should guide children's upbringing. A rule requiring a parent's permission before a child under 16 opens an account restores parents' authority and uses law to shield minors from harmful content, so a social conservative could support it even though it adds a government rule.",
          notExample: "The first legislator supports the bill." },
        { id: "t410-ca1c", skill: S, type: "fr", set: "t410-s2", part: "Concept application", sub: "C", topic: T,
          lead: "Use the scenario to answer parts A, B, and C.",
          prompt: "Explain how federalism allows the states in the scenario to adopt different policies on this issue.",
          earns: "Explains that under federalism states hold reserved powers (Tenth Amendment, police powers over health, safety, and welfare), so each state may pass, reject, or design its own law where no federal law controls, reflecting its own voters' ideology.",
          yes: [
            "The Tenth Amendment reserves powers to the states, including police powers over health and safety, so each state can decide whether to regulate children's social media use; one state passed a law and another rejected it.",
            "Federalism divides power, and with no single national rule, each state legislature can act on its own voters' views, which is why neighboring states have different laws.",
          ],
          no: [
            "\"States can make their own laws.\" (no explanation of the constitutional basis or how it produces different policies)",
            "\"Because of the Supremacy Clause.\" (that clause makes federal law supreme; it does not explain state differences)",
          ],
          example: "Federalism divides power between the national government and the states, and the Tenth Amendment reserves to the states powers not given to the national government, including police powers to protect health, safety, and welfare. Without a controlling federal law, each state can decide this issue for itself, so one state passed a similar law while another rejected one, reflecting differences in their voters' ideologies.",
          notExample: "Different states are different." },
      ] },
  ],
};

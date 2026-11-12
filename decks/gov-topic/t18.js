// Topic 1.8 Quiz: Constitutional Interpretations of Federalism
// Sources: McCulloch v. Maryland (1819) on means and ends (Justia), and a scenario about a federal texting-while-driving law.

export const sets = {
  "t18-s1": {
    id: "t18-s1", name: "McCulloch v. Maryland on means and ends", intro: "Use the passage below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "We admit, as all must admit, that the powers of the Government are limited, and that its limits are not to be transcended. But we think the sound construction of the Constitution must allow to the national legislature that discretion with respect to the means by which the powers it confers are to be carried into execution which will enable that body to perform the high duties assigned to it in the manner most beneficial to the people. Let the end be legitimate, let it be within the scope of the Constitution, and all means which are appropriate, which are plainly adapted to that end, which are not prohibited, but consist with the letter and spirit of the Constitution, are Constitutional." },
        { cite: "Chief Justice John Marshall, opinion of the Court, McCulloch v. Maryland, 17 U.S. 316 (1819), as published by Justia. \"The national legislature\" is Congress; \"construction\" means interpretation.", url: "https://supreme.justia.com/cases/federal/us/17/316/", kind: "primary" },
      ] },
    ],
  },
  "t18-s2": {
    id: "t18-s2", name: "A federal ban on texting while driving", intro: "Use the scenario below to answer parts A, B, and C.",
    sources: [
      { title: "Scenario", blocks: [
        { p: "Congress passes the Safe Streets Act, which makes it a federal crime to send or read a text message while driving on any public road in the United States, including small residential streets. Supporters in Congress say distracted driving kills thousands of people a year, raises insurance costs, and slows the shipment of goods. A driver ticketed by a federal officer on a quiet street in her hometown challenges the law in court. Her lawyer argues that the street carries no interstate traffic and that punishing local driving behavior is a job for the states, which all have their own traffic laws." },
        { cite: "Scenario written for this review.", kind: "scenario" },
      ] },
    ],
  },
};

const S = "u1", T = "1.8";

export default {
  forms: [
    { id: "t18", name: "Topic 1.8 Quiz: Constitutional Interpretations of Federalism", group: "Unit 1: Foundations of American Democracy",
      items: [
        { id: "t18-m01", skill: S, type: "mcq", set: "t18-s1", topic: T, difficulty: "moderate",
          question: "Which rule does Marshall state in the passage?",
          choices: [
            "Congress may use any appropriate means, not prohibited, to carry out its listed powers",
            "Congress may pursue any goal it finds beneficial, even one outside its listed powers",
            "Congress may use only those means that are absolutely necessary to carry out its powers",
            "Congress may act on its listed powers only after the states have given their consent",
          ],
          why: [
            "Correct. Marshall says that if the end is \"within the scope of the Constitution,\" all appropriate means that are \"not prohibited\" are constitutional. This is the broad reading of the Necessary and Proper Clause that supports implied powers.",
            "Marshall requires that the end be \"legitimate\" and \"within the scope of the Constitution,\" so Congress may not pursue goals outside its powers.",
            "This was Maryland's narrow reading of \"necessary,\" which Marshall rejected in favor of appropriate, plainly adapted means.",
            "Marshall held that the national government's powers come from the people, not from the consent of the states.",
          ],
          answer: 0 },
        { id: "t18-m02", skill: S, type: "mcq", set: "t18-s1", topic: T, difficulty: "difficult",
          question: "A supporter of strict construction would most likely object that the reasoning in the passage",
          choices: [
            "lets Congress judge which means are appropriate, leaving few firm limits",
            "denies that the powers of the national government are limited in any way",
            "gives the states too much power to tax and control national institutions",
            "ignores the Constitution's text in favor of the views of the state courts",
          ],
          why: [
            "Correct. Strict constructionists, like Jefferson in the bank debate, read the Necessary and Proper Clause narrowly. They objected that giving Congress discretion over \"appropriate\" means lets it expand its own power.",
            "Marshall expressly says \"the powers of the Government are limited,\" so a critic could not fairly say he denied all limits.",
            "McCulloch protected a national institution from state taxation. A critic of broad national power would not say it favored the states.",
            "The opinion does not rely on state courts. It interprets the Necessary and Proper Clause and the Supremacy Clause.",
          ],
          answer: 0 },
        { id: "t18-m03", skill: S, type: "mcq", topic: T, difficulty: "easy",
          question: "The Supremacy Clause, which makes the Constitution and federal laws \"the supreme Law of the Land,\" appears in",
          choices: ["Article VI", "Article I", "Article III", "Article V"],
          why: [
            "Correct. Article VI, Clause 2 makes the Constitution, federal laws made under it, and treaties supreme, binding state judges despite anything in state law.",
            "Article I creates Congress and lists its powers, including the Necessary and Proper Clause.",
            "Article III creates the federal judiciary.",
            "Article V sets out the amendment process.",
          ],
          answer: 0 },
        { id: "t18-m04", skill: S, type: "mcq", topic: T, difficulty: "easy",
          question: "A state passes a law letting employers pay workers less than the federal minimum wage set by Congress under its commerce power. What is the effect of the state law on workers covered by the federal law?",
          choices: [
            "None, because valid federal law prevails over conflicting state law",
            "It controls, because wages are a power reserved to the states",
            "It controls until the Senate votes to reject the state law",
            "None, because states may never pass any law about wages",
          ],
          why: [
            "Correct. Under the Supremacy Clause (Article VI), a valid federal law overrides a conflicting state law, so covered workers must still receive the federal minimum.",
            "The federal minimum wage is a valid exercise of the commerce power, so the Tenth Amendment does not let a state override it.",
            "The Senate has no power to veto state laws. Conflicts are settled by the Supremacy Clause and the courts.",
            "States may set their own minimum wages higher than the federal floor, and many do. They may not go below it for covered workers.",
          ],
          answer: 0 },
        { id: "t18-m05", skill: S, type: "mcq", topic: T, difficulty: "difficult",
          question: "In Gonzales v. Raich (2005), the Court upheld a federal ban on growing marijuana at home for medical use, even though California law allowed it. How did the Court distinguish United States v. Lopez (1995)?",
          choices: [
            "Growing marijuana is economic activity tied to a national market that Congress may regulate",
            "Possessing a gun near a school was economic activity, but growing a plant for oneself was not",
            "The Supremacy Clause lets Congress regulate any activity that a state chooses to legalize",
            "The Tenth Amendment protects state power over schools but not state power over medicine",
          ],
          why: [
            "Correct. The Court said the Controlled Substances Act regulates economic activity, the production and sale of a commodity with a national market, unlike gun possession near a school in Lopez. Homegrown marijuana, taken together, could affect that market.",
            "This reverses Lopez, which held that gun possession near a school was not economic activity.",
            "The Supremacy Clause applies only to valid federal laws. The question in Raich was whether the law was within the commerce power.",
            "The Court did not rest Raich on a distinction between schools and medicine under the Tenth Amendment.",
          ],
          answer: 0 },
        { id: "t18-m06", skill: S, type: "mcq", topic: T, difficulty: "difficult",
          question: "In Murphy v. National Collegiate Athletic Association (2018), the Court struck down a federal law that forbade states to authorize sports betting. The Court reasoned that Congress",
          choices: [
            "cannot order state legislatures to pass or keep particular laws",
            "cannot regulate any kind of gambling under the commerce power",
            "may not pass a law that conflicts with a state constitution",
            "needs the approval of three-fourths of the states to regulate gambling",
          ],
          why: [
            "Correct. The Court applied the anticommandeering rule drawn from the Tenth Amendment: Congress may regulate individuals directly, but it may not dictate what laws state legislatures may or may not pass.",
            "The Court said Congress could regulate sports gambling directly. The problem was commanding state legislatures.",
            "Valid federal law prevails over state constitutions under the Supremacy Clause.",
            "Article V's three-fourths rule applies to amendments, not to ordinary laws.",
          ],
          answer: 0 },
        { id: "t18-m07", skill: S, type: "mcq", topic: T, difficulty: "moderate",
          question: "In National Federation of Independent Business v. Sebelius (2012), the Court limited the power of Congress to attach conditions to grants by ruling that Congress could not",
          choices: [
            "cut off a state's existing Medicaid funds for refusing to expand it",
            "require most individuals to pay a penalty if they lacked health insurance",
            "offer states new federal money to cover more people through Medicaid",
            "set any rules at all for how the states run their Medicaid programs",
          ],
          why: [
            "Correct. The Court held that threatening states with the loss of all existing Medicaid funds was coercive, so the expansion became optional for each state.",
            "The Court upheld the insurance penalty as a valid use of the taxing power.",
            "The Court allowed Congress to offer new money for the expansion. Only the threat to existing funds was struck down.",
            "Congress may attach conditions to Medicaid funds. The ruling limited only coercive conditions.",
          ],
          answer: 0 },
        { id: "t18-m08", skill: S, type: "mcq", topic: T, difficulty: "moderate",
          question: "In Gibbons v. Ogden (1824), the Supreme Court ruled that",
          choices: [
            "a federal license to trade along the coast overrode a state steamboat monopoly",
            "a state could grant a monopoly on interstate waters despite federal law",
            "Congress had no power over ships that carried passengers instead of goods",
            "a state could not tax a bank created by the national government",
          ],
          why: [
            "Correct. Chief Justice Marshall held that commerce includes navigation and that Congress's commerce power, exercised through a federal coasting license, overrode New York's grant of a steamboat monopoly.",
            "The Court held the opposite: the New York monopoly had to yield to federal law on interstate waters.",
            "The Court read commerce broadly to include navigation, including the carrying of passengers.",
            "This was the holding of McCulloch v. Maryland (1819), not Gibbons.",
          ],
          answer: 0 },
        { id: "t18-ca1a", skill: S, type: "fr", set: "t18-s2", part: "Concept application", sub: "A", topic: T,
          lead: "Use the scenario to answer parts A, B, and C.",
          prompt: "Describe the constitutional power Congress would most likely cite to justify the Safe Streets Act.",
          earns: "Names the Commerce Clause (Article I, Section 8) and describes it as the power to regulate commerce among the states, linked to the effects of distracted driving on interstate travel or trade.",
          yes: [
            "The Commerce Clause, which lets Congress regulate commerce among the states; supporters say distracted driving affects the shipment of goods and insurance markets across state lines.",
            "Article I, Section 8's power to regulate interstate commerce, because roads carry trade and travel between states.",
          ],
          no: [
            "\"The Supremacy Clause.\" (It makes valid federal law supreme but is not the source of the power to pass the law.)",
            "\"The commerce power.\" (Named but not described or linked to the scenario.)",
          ],
          example: "Congress would cite the Commerce Clause in Article I, Section 8, which gives it power to regulate commerce among the several states. Supporters would argue that distracted driving slows the shipment of goods and raises insurance costs nationwide, so it substantially affects interstate commerce.",
          notExample: "Congress can pass laws to keep people safe." },
        { id: "t18-ca1b", skill: S, type: "fr", set: "t18-s2", part: "Concept application", sub: "B", topic: T,
          lead: "Use the scenario to answer parts A, B, and C.",
          prompt: "Explain how the driver's lawyer could use United States v. Lopez (1995) to challenge the law.",
          earns: "Explains that Lopez held the commerce power does not reach noneconomic local activity with only an indirect link to commerce, and applies that to texting on a local street, a matter of state police power.",
          yes: [
            "In Lopez, the Court struck down a federal ban on guns near schools because possessing a gun is not economic activity; the lawyer can argue texting on a quiet local street is likewise not commerce and is left to the states.",
            "Lopez refused to let Congress pile inference on inference to link local behavior to commerce; the lawyer can say the safety-to-shipping link is just as indirect.",
          ],
          no: [
            "\"Lopez was about guns, so it does not apply.\" (Does not use the case.)",
            "\"Lopez said Congress cannot pass any criminal law.\" (Inaccurate.)",
          ],
          example: "In Lopez, the Court held that the Gun-Free School Zones Act exceeded the commerce power because carrying a gun near a school is not an economic activity that substantially affects interstate commerce. The lawyer can argue that texting on a quiet residential street is also noneconomic, local behavior, and that punishing it belongs to the states' police power, as their own traffic laws show.",
          notExample: "The lawyer can say the law is unfair to her client." },
        { id: "t18-ca1c", skill: S, type: "fr", set: "t18-s2", part: "Concept application", sub: "C", topic: T,
          lead: "Use the scenario to answer parts A, B, and C.",
          prompt: "Explain one way Congress could respond if the courts struck down the Safe Streets Act.",
          earns: "Explains a specific constitutional response: using the spending power to condition highway grants on state texting bans, rewriting the law to cover only interstate highways or commercial vehicles, or proposing an amendment.",
          yes: [
            "Congress could use its spending power to offer highway money only to states that ban texting while driving, so states pass the laws themselves.",
            "Congress could rewrite the act to apply only to interstate highways or to drivers of commercial trucks, which are clearly part of interstate commerce.",
          ],
          no: [
            "\"Congress could overrule the Court.\" (Congress cannot overrule a constitutional ruling by ordinary law.)",
            "\"Congress could make a new law.\" (Too vague; no mechanism.)",
          ],
          example: "Congress could use its power to tax and spend to attach a condition to federal highway grants, giving full funding only to states that ban texting while driving. Because the states would pass and enforce the bans themselves, the policy would no longer depend on stretching the commerce power to local streets.",
          notExample: "Congress could be upset with the Court." },
      ] },
  ],
};

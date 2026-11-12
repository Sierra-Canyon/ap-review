// Topic 1.9 Quiz: Federalism in Action
// Sources: state compulsory school attendance ages, 2017 (NCES, State Education Reforms, Table 5.1), drawn as a bar
// chart; a scenario about state limits on a chemical in drinking water.
import { bars } from "../../plot.js";

// NCES Table 5.1 (2017), upper age of compulsory attendance, 50 states and the District of Columbia.
const attend = {
  ages: ["16", "17", "18", "19"],
  states: [15, 10, 25, 1],
  names: [
    "Alaska, Arizona, Delaware, Florida, Georgia, Idaho, Iowa, Massachusetts, Montana, New Jersey, New York, North Carolina, North Dakota, Vermont, Wyoming",
    "Alabama, Colorado, Illinois, Maine, Minnesota, Mississippi, Missouri, Pennsylvania, South Carolina, West Virginia",
    "Arkansas, California, Connecticut, District of Columbia, Hawaii, Indiana, Kansas, Kentucky, Louisiana, Maryland, Michigan, Nebraska, Nevada, New Hampshire, New Mexico, Ohio, Oklahoma, Oregon, Rhode Island, South Dakota, Tennessee, Utah, Virginia, Washington, Wisconsin",
    "Texas",
  ],
};

export const sets = {
  "t19-s1": {
    id: "t19-s1", name: "When compulsory school attendance ends, by state, 2017", intro: "Use the chart and table below to answer the questions that follow.", label: "Chart",
    sources: [
      { title: "Chart", blocks: [
        { svg: bars({ labels: attend.ages, values: attend.states, y: [0, 30], step: 5, yname: "Number of states", xname: "Age when required attendance ends", width: 480, height: 300,
          alt: "Bar chart of the number of states, counting the District of Columbia, by the age at which compulsory school attendance ends in 2017: age 16, 15 states; age 17, 10 states; age 18, 25 states; age 19, 1 state." }),
          caption: "Number of states (50 states and the District of Columbia) by the age at which compulsory school attendance ends, 2017." },
        { table: { head: ["Age attendance ends", "Number", "States"], rows: attend.ages.map((a, i) => [a, String(attend.states[i]), attend.names[i]]) } },
        { cite: "National Center for Education Statistics, State Education Reforms, Table 5.1, \"Compulsory school attendance laws, minimum and maximum age limits for required free education, by state: 2017,\" from Education Commission of the States data. Counts were made for this review from the table's compulsory attendance ages; several states allow exceptions described in the table's notes.", url: "https://nces.ed.gov/programs/statereform/tab5_1.asp", kind: "data" },
      ] },
    ],
  },
  "t19-s2": {
    id: "t19-s2", name: "States set limits on a chemical in drinking water", intro: "Use the scenario below to answer parts A, B, and C.",
    sources: [
      { title: "Scenario", blocks: [
        { p: "A federal agency studies an industrial chemical found in drinking water but decides not to set a national limit. Over the next four years, eleven states pass their own limits, and no two are the same. Water utilities and chemical makers say the patchwork is costly. An association of chemical manufacturers asks Congress to pass a single national limit and to forbid states from setting stricter ones. At the same time, an environmental group that failed to win action in Congress is lobbying legislatures in six more states to pass limits of their own." },
        { cite: "Scenario written for this review.", kind: "scenario" },
      ] },
    ],
  },
};

const S = "u1", T = "1.9";

export default {
  forms: [
    { id: "t19", name: "Topic 1.9 Quiz: Federalism in Action", group: "Unit 1: Foundations of American Democracy",
      items: [
        { id: "t19-m01", skill: S, type: "mcq", set: "t19-s1", topic: T, difficulty: "easy",
          question: "In 2017, at what age did compulsory school attendance end in the largest number of states?",
          choices: ["18", "16", "17", "19"],
          why: [
            "Correct. Twenty-five states, counting the District of Columbia, required attendance until age 18, the tallest bar.",
            "Fifteen states ended required attendance at 16, fewer than at 18.",
            "Ten states ended required attendance at 17.",
            "Only one state, Texas, required attendance until 19.",
          ],
          answer: 0 },
        { id: "t19-m02", skill: S, type: "mcq", set: "t19-s1", topic: T, difficulty: "moderate",
          question: "Which constitutional principle best explains why the age at which students may leave school differs from state to state?",
          choices: [
            "The Tenth Amendment reserves education, a power not delegated to Congress, to the states",
            "The Supremacy Clause lets each state's education laws override federal education laws",
            "The Necessary and Proper Clause gives each state power to carry out national school policy",
            "The Full Faith and Credit Clause requires each state to accept other states' school rules",
          ],
          why: [
            "Correct. The Constitution gives Congress no power over schooling, so under the Tenth Amendment each state sets its own education laws, including attendance ages.",
            "The Supremacy Clause makes valid federal law supreme over state law, not the reverse.",
            "The Necessary and Proper Clause expands the powers of Congress. It gives the states nothing.",
            "Full Faith and Credit concerns respect for other states' public acts and court judgments. It does not explain why states set different ages.",
          ],
          answer: 0 },
        { id: "t19-m03", skill: S, type: "mcq", set: "t19-s1", topic: T, difficulty: "difficult",
          question: "Suppose Congress wanted every state to require attendance until age 18. Which approach would be most likely to survive a court challenge?",
          choices: [
            "Offering education grants only to states that raise their attendance age to 18",
            "Passing a law ordering each state legislature to change its attendance law",
            "Declaring under the Supremacy Clause that all lower state attendance ages are void",
            "Having the president issue an executive order directing governors to raise the age",
          ],
          why: [
            "Correct. Congress may attach reasonable conditions to federal grants under its spending power, as in South Dakota v. Dole (1987), so states choosing the money would raise the age themselves.",
            "Ordering state legislatures to pass laws violates the anticommandeering rule the Court applied in New York v. United States (1992) and Murphy v. NCAA (2018).",
            "The Supremacy Clause applies only to federal laws made under a valid power. Congress has no enumerated power over school attendance.",
            "The president has no constitutional power to direct state legislatures or governors to change state law.",
          ],
          answer: 0 },
        { id: "t19-m04", skill: S, type: "mcq", topic: T, difficulty: "moderate",
          question: "A health group fails to persuade Congress to require warning labels on energy drinks. It then lobbies state legislatures and wins labeling laws in eight states. This sequence best illustrates how",
          choices: [
            "federalism gives interest groups more than one point of access to government",
            "the Supremacy Clause lets state laws take the place of federal inaction",
            "judicial review lets interest groups overturn the laws they oppose",
            "separation of powers requires groups to persuade the president first",
          ],
          why: [
            "Correct. Because power is divided between national and state governments, a group that loses at one level can try again at another.",
            "The Supremacy Clause makes federal law supreme when it conflicts with state law. It does not explain why states may act when Congress does not.",
            "The group worked through legislatures, not courts, and it is winning new laws rather than overturning old ones.",
            "Nothing requires groups to lobby the president before Congress or the states.",
          ],
          answer: 0 },
        { id: "t19-m05", skill: S, type: "mcq", topic: T, difficulty: "difficult",
          question: "Which development best marks the shift from dual federalism to cooperative federalism?",
          choices: [
            "New Deal programs in the 1930s that the national and state governments ran together",
            "The ruling in McCulloch v. Maryland (1819) that upheld the national bank",
            "The ruling in United States v. Lopez (1995) that limited the commerce power",
            "The Seventeenth Amendment (1913) providing for direct election of senators",
          ],
          why: [
            "Correct. Under dual federalism, each level kept to its own sphere. New Deal programs such as unemployment insurance and aid to dependent children were funded and run jointly, blending the levels in what is called marble-cake federalism.",
            "McCulloch strengthened national power, but dual federalism, with separate spheres, remained the main pattern for another century.",
            "Lopez came long after cooperative federalism took hold and limited national power rather than creating shared programs.",
            "The Seventeenth Amendment changed how senators are chosen. It did not create joint federal and state programs.",
          ],
          answer: 0 },
        { id: "t19-m06", skill: S, type: "mcq", topic: T, difficulty: "moderate",
          question: "Critics warn that states competing to attract businesses may keep cutting taxes and loosening environmental rules. This criticism of federalism is often called",
          choices: ["a race to the bottom", "a laboratory of democracy", "an unfunded mandate", "a block grant"],
          why: [
            "Correct. A race to the bottom describes states lowering standards to win jobs and investment from one another, leaving all of them with weaker protections.",
            "\"Laboratories of democracy\" is the positive view that states can test new policies. It is not this criticism.",
            "An unfunded mandate is a federal requirement without federal money.",
            "A block grant is federal money for a broad purpose with few conditions.",
          ],
          answer: 0 },
        { id: "t19-m07", skill: S, type: "mcq", topic: T, difficulty: "easy",
          question: "In spring 2020, governors issued very different stay-at-home orders during the COVID-19 pandemic. The governors acted under",
          choices: ["the states' police powers", "Congress's commerce power", "the treaty power", "the war powers"],
          why: [
            "Correct. Protecting public health and safety falls under the police powers reserved to the states, so each governor and legislature set its own rules.",
            "The commerce power belongs to Congress, not to governors.",
            "The treaty power belongs to the president and the Senate.",
            "War powers belong to Congress and the president, and they were not the basis for stay-at-home orders.",
          ],
          answer: 0 },
        { id: "t19-m08", skill: S, type: "mcq", topic: T, difficulty: "moderate",
          question: "The National Voter Registration Act (1993) requires states to offer voter registration when people apply for driver's licenses, while states still run elections and set most voting rules. Congress's authority for the act comes from",
          choices: [
            "the Elections Clause, which lets Congress alter state rules for congressional elections",
            "the Tenth Amendment, which lets Congress direct how states run elections",
            "the Full Faith and Credit Clause, which requires states to share voter lists",
            "the Supremacy Clause, which lets Congress take over all state elections",
          ],
          why: [
            "Correct. Article I, Section 4 lets states set the times, places, and manner of congressional elections but lets Congress \"make or alter such Regulations.\" The Court relied on it in Arizona v. Inter Tribal Council of Arizona (2013).",
            "The Tenth Amendment reserves powers to the states. It gives Congress no power over elections.",
            "Full Faith and Credit concerns public acts and court judgments, not voter registration.",
            "The Supremacy Clause gives no power on its own, and states still run elections under the act.",
          ],
          answer: 0 },
        { id: "t19-ca1a", skill: S, type: "fr", set: "t19-s2", part: "Concept application", sub: "A", topic: T,
          lead: "Use the scenario to answer parts A, B, and C.",
          prompt: "Describe how federalism allowed the eleven states to set their own limits on the chemical.",
          earns: "Describes federalism as the division of power between national and state governments, with states keeping reserved (police) powers over health and safety, so they could act when the national government did not.",
          yes: [
            "Under federalism, states keep reserved police powers over public health, so when the federal agency set no limit, each state could set its own.",
            "Power is divided between the national government and the states, and with no federal rule in place, states were free to act on water safety.",
          ],
          no: [
            "\"Federalism.\" (Named but not described.)",
            "\"The Supremacy Clause let the states act.\" (The Supremacy Clause favors federal law; it does not grant states power.)",
          ],
          example: "Federalism divides power between the national government and the states, and the Tenth Amendment reserves to the states their police powers over public health and safety. Because the federal agency chose not to set a limit, nothing in federal law stood in the way, so each state could set the limit its own lawmakers thought best.",
          notExample: "The states were worried about the chemical." },
        { id: "t19-ca1b", skill: S, type: "fr", set: "t19-s2", part: "Concept application", sub: "B", topic: T,
          lead: "Use the scenario to answer parts A, B, and C.",
          prompt: "Explain how the law the manufacturers want would affect the state limits.",
          earns: "Explains preemption: a valid federal law that sets a national limit and forbids stricter state limits would override the state laws under the Supremacy Clause.",
          yes: [
            "A national law that forbids stricter state limits would preempt the eleven state laws, because under the Supremacy Clause valid federal law overrides conflicting state law.",
            "The federal limit would replace the patchwork; any state limit stricter than the national one would become unenforceable.",
          ],
          no: [
            "\"The states would have to listen.\" (No mechanism.)",
            "\"The law would be unconstitutional because of the Tenth Amendment.\" (Congress can regulate products in interstate commerce and preempt state rules.)",
          ],
          example: "If Congress used its commerce power to set one national limit and expressly barred stricter state rules, the law would preempt the state limits. Under the Supremacy Clause, a valid federal law overrides conflicting state law, so the eleven states' stricter limits could no longer be enforced.",
          notExample: "The manufacturers would be happier." },
        { id: "t19-ca1c", skill: S, type: "fr", set: "t19-s2", part: "Concept application", sub: "C", topic: T,
          lead: "Use the scenario to answer parts A, B, and C.",
          prompt: "Explain how the actions of the two interest groups show that federalism creates multiple access points.",
          earns: "Explains that dividing power between levels of government lets groups choose where to lobby, and applies it: the manufacturers go to Congress for a national rule while the environmental group goes to state legislatures after losing in Congress.",
          yes: [
            "Each group picks the level where it expects to win: the manufacturers want Congress to set one rule, and the environmental group, blocked in Congress, turns to state legislatures.",
            "Federalism gives groups many places to press their case, so losing in Washington does not end a campaign; it moves to the states.",
          ],
          no: [
            "\"Both groups are lobbying.\" (No link to multiple levels of government.)",
            "\"Interest groups have too much power.\" (An opinion, not an explanation of access points.)",
          ],
          example: "Because federalism divides power between the national government and the states, interest groups can lobby at more than one level. The manufacturers seek a uniform rule from Congress, while the environmental group, after failing in Congress, is working through state legislatures, where it has already seen eleven states act.",
          notExample: "The two groups disagree about the chemical." },
      ] },
  ],
};

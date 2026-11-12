// Topic 1.7 Quiz: Relationship Between the States and the Federal Government
// Sources: federal grants to state and local governments, FY1940 to FY2023 (CRS from OMB Historical Table 12.1),
// drawn as a bar chart; a scenario about turning a school-meal grant into a block grant.
import { bars } from "../../plot.js";

// CRS R40638, Table 3, from OMB, Budget FY2025, Historical Table 12.1 (actual years only; estimates left out).
const grants = {
  years: ["1940", "1960", "1980", "2000", "2010", "2020", "2021", "2022", "2023"],
  outlays: [9.2, 7.6, 15.5, 16.0, 17.6, 12.7, 18.3, 19.0, 17.7],
  gdp: [0.9, 1.3, 3.3, 2.8, 4.1, 3.9, 5.4, 4.7, 4.0],
};

export const sets = {
  "t17-s1": {
    id: "t17-s1", name: "Federal grants to state and local governments, 1940 to 2023", intro: "Use the chart and table below to answer the questions that follow.", label: "Chart",
    sources: [
      { title: "Chart", blocks: [
        { svg: bars({ labels: grants.years, series: [{ name: "Percent of total federal outlays", values: grants.outlays }, { name: "Percent of GDP", values: grants.gdp }],
          y: [0, 20], step: 5, yname: "Percent", width: 600, height: 300, fmt: (v) => v.toFixed(1),
          alt: "Grouped bar chart of federal grants to state and local governments by fiscal year, as a percent of total federal outlays and as a percent of GDP: 1940, 9.2 and 0.9; 1960, 7.6 and 1.3; 1980, 15.5 and 3.3; 2000, 16.0 and 2.8; 2010, 17.6 and 4.1; 2020, 12.7 and 3.9; 2021, 18.3 and 5.4; 2022, 19.0 and 4.7; 2023, 17.7 and 4.0." }),
          caption: "Federal grants to state and local governments as a percent of total federal outlays and as a percent of gross domestic product (GDP), selected fiscal years 1940 to 2023." },
        { table: { head: ["Fiscal year", "Percent of total federal outlays", "Percent of GDP"], rows: grants.years.map((y, i) => [y, grants.outlays[i].toFixed(1), grants.gdp[i].toFixed(1)]) } },
        { cite: "Congressional Research Service, Federal Grants to State and Local Governments: Trends and Issues (R40638), updated June 26, 2025, Table 3, \"Selected Metrics for Federal Grants to State and Local Governments, FY1940-FY2029,\" from OMB, Budget FY2025, Historical Table 12.1. Estimates for 2024 and 2029 are left out.", url: "https://www.everycrsreport.com/reports/R40638.html", kind: "data" },
      ] },
    ],
  },
  "t17-s2": {
    id: "t17-s2", name: "Turning a school-meal grant into a block grant", intro: "Use the scenario below to answer parts A, B, and C.",
    sources: [
      { title: "Scenario", blocks: [
        { p: "For decades, the federal government has paid states to serve school breakfasts and lunches. The money comes with detailed rules: schools must meet federal nutrition standards, serve free meals to children below a set income level, and report how many meals they serve. A senator proposes replacing the program with a single yearly payment to each state for \"child nutrition,\" which each state could spend as it sees fit, including on summer meals or food programs outside school. Several governors praise the plan. A group of senators from both parties opposes it, warning that children in some states could end up with less help than children in others." },
        { cite: "Scenario written for this review.", kind: "scenario" },
      ] },
    ],
  },
};

const S = "u1", T = "1.7";

export default {
  forms: [
    { id: "t17", name: "Topic 1.7 Quiz: Relationship Between the States and the Federal Government", group: "Unit 1: Foundations of American Democracy",
      items: [
        { id: "t17-m01", skill: S, type: "mcq", set: "t17-s1", topic: T, difficulty: "easy",
          question: "In which year shown did grants make up the largest share of total federal outlays?",
          choices: ["2022", "2021", "2010", "1980"],
          why: [
            "Correct. In 2022, grants were 19.0 percent of total federal outlays, the highest value in that series.",
            "In 2021, grants were 18.3 percent of outlays. The 5.4 for 2021 is the highest share of GDP, a different series.",
            "In 2010, grants were 17.6 percent of outlays, below 2021 and 2022.",
            "In 1980, grants were 15.5 percent of outlays.",
          ],
          answer: 0 },
        { id: "t17-m02", skill: S, type: "mcq", set: "t17-s1", topic: T, difficulty: "moderate",
          question: "Grants rose from 7.6 percent of federal outlays in 1960 to 15.5 percent in 1980. This change best supports which conclusion?",
          choices: [
            "Grants became a much larger tool of national policy as fiscal federalism grew",
            "States began paying for a larger share of national programs than before",
            "The national government cut its support for state and local governments",
            "Grants grew because the Supreme Court ordered Congress to fund the states",
          ],
          why: [
            "Correct. The share roughly doubled as Congress created many new grant programs in the 1960s and 1970s, such as Medicaid in 1965. Fiscal federalism, using money to shape state and local policy, expanded.",
            "The data measure money flowing from the national government to the states, not state payments to national programs.",
            "The share rose sharply, so national support increased rather than fell.",
            "Grants are created by Congress through its spending power. No Supreme Court ruling ordered this growth.",
          ],
          answer: 0 },
        { id: "t17-m03", skill: S, type: "mcq", set: "t17-s1", topic: T, difficulty: "difficult",
          question: "Which question can the chart and table NOT answer?",
          choices: [
            "Whether the grants came with narrow conditions or broad flexibility",
            "Whether grants grew as a share of the economy from 1960 to 2010",
            "Whether grants' share of federal outlays was higher in 2021 than in 2020",
            "Whether grants were more than 3 percent of GDP in 1980",
          ],
          why: [
            "Correct. The data give only the total size of grants. They do not separate categorical grants with strict rules from block grants with flexibility, so they cannot show how much control came with the money.",
            "The GDP series answers this: 1.3 percent in 1960 and 4.1 percent in 2010.",
            "The outlays series answers this: 12.7 percent in 2020 and 18.3 percent in 2021.",
            "The GDP series answers this: 3.3 percent in 1980.",
          ],
          answer: 0 },
        { id: "t17-m04", skill: S, type: "mcq", topic: T, difficulty: "easy",
          question: "Which is a concurrent power, held by both the national government and the states?",
          choices: ["Establishing courts", "Coining money", "Declaring war", "Creating county governments"],
          why: [
            "Correct. Congress creates federal courts under Article I and Article III, and every state runs its own court system, so both levels set up courts.",
            "Coining money belongs to Congress alone. Article I, Section 10 forbids states to coin money.",
            "Declaring war belongs to Congress alone under Article I, Section 8.",
            "Creating counties and cities is a reserved power of the states. The national government does not create local governments.",
          ],
          answer: 0 },
        { id: "t17-m05", skill: S, type: "mcq", topic: T, difficulty: "easy",
          question: "The power of the states to pass laws protecting public health, safety, and morals is known as",
          choices: ["the police power", "the commerce power", "an implied power", "an enumerated power"],
          why: [
            "Correct. The police power is the broad reserved power of the states, protected by the Tenth Amendment, to regulate for the health, safety, welfare, and morals of their people.",
            "The commerce power belongs to Congress under Article I, Section 8.",
            "Implied powers are powers of Congress drawn from the Necessary and Proper Clause.",
            "Enumerated powers are the powers listed for Congress in the Constitution, mostly in Article I, Section 8.",
          ],
          answer: 0 },
        { id: "t17-m06", skill: S, type: "mcq", topic: T, difficulty: "moderate",
          question: "Congress gives each state money for \"community development,\" and each state may choose whether to spend it on housing, roads, or job training. This funding is",
          choices: ["a block grant", "a categorical grant", "an unfunded mandate", "a project grant"],
          why: [
            "Correct. A block grant gives money for a broad policy area and lets states decide how to spend it within that area, as the federal Community Development Block Grant does.",
            "A categorical grant funds a narrow purpose with detailed rules. Here states choose among several uses.",
            "An unfunded mandate imposes a requirement without money. Here Congress provides money.",
            "A project grant goes to a specific applicant for a specific project after a competition, not to every state for a broad area.",
          ],
          answer: 0 },
        { id: "t17-m07", skill: S, type: "mcq", topic: T, difficulty: "moderate",
          question: "A federal law requires every state to test public drinking water each month for a newly regulated chemical, and states must pay for the testing themselves. The law is an example of",
          choices: ["an unfunded mandate", "a block grant", "a categorical grant", "revenue sharing"],
          why: [
            "Correct. An unfunded mandate is a federal requirement that states must carry out without federal money to cover the cost.",
            "A block grant provides money for a broad purpose. This law provides no money.",
            "A categorical grant provides money for a narrow purpose with conditions. This law provides no money.",
            "Revenue sharing, used from 1972 to 1986, gave states money with few strings. This law gives no money.",
          ],
          answer: 0 },
        { id: "t17-m08", skill: S, type: "mcq", topic: T, difficulty: "difficult",
          question: "Under Article I, Section 10, which action would require the consent of Congress?",
          choices: [
            "Two states signing a compact to divide water from a shared river",
            "A state raising the rate of its own income tax on residents",
            "A state legislature creating a new county out of two old ones",
            "A state legislature ratifying an amendment proposed by Congress",
          ],
          why: [
            "Correct. Article I, Section 10 says no state shall, \"without the Consent of Congress,\" enter into any agreement or compact with another state. Interstate water compacts are approved by Congress.",
            "Taxing residents is a concurrent power that states exercise without asking Congress.",
            "Creating local governments is a reserved power of the states.",
            "Article V gives ratification to the states. Congress has already acted by proposing the amendment and does not consent again.",
          ],
          answer: 0 },
        { id: "t17-ca1a", skill: S, type: "fr", set: "t17-s2", part: "Concept application", sub: "A", topic: T,
          lead: "Use the scenario to answer parts A, B, and C.",
          prompt: "Describe the difference between the current school-meal program and the senator's proposal in terms of the type of federal grant.",
          earns: "Describes the current program as a categorical grant (money for a narrow purpose with detailed conditions) and the proposal as a block grant (money for a broad area that states may spend with flexibility).",
          yes: [
            "The current program is a categorical grant: money for school meals only, with federal rules on nutrition, eligibility, and reporting. The proposal is a block grant: one payment for child nutrition that states can spend as they choose.",
            "Now the money is tied to specific conditions; under the plan states get a lump sum for a broad purpose with far fewer strings.",
          ],
          no: [
            "\"One is a categorical grant and one is a block grant.\" (Names without describing.)",
            "\"The proposal is an unfunded mandate.\" (The proposal gives money, so it is not a mandate.)",
          ],
          example: "The current program is a categorical grant, because the money can be used only for school meals and comes with federal conditions on nutrition, eligibility, and reporting. The senator's plan is a block grant, which gives each state a lump sum for the broad area of child nutrition and lets the state decide how to spend it.",
          notExample: "The senator wants to change how school lunch works." },
        { id: "t17-ca1b", skill: S, type: "fr", set: "t17-s2", part: "Concept application", sub: "B", topic: T,
          lead: "Use the scenario to answer parts A, B, and C.",
          prompt: "Explain why governors would support the senator's proposal.",
          earns: "Explains that a block grant shifts decision-making power to the states, letting governors fit spending to local needs or priorities, and ties this to the federalism balance.",
          yes: [
            "A block grant gives states more control, so governors could spend money on the needs of their own state, such as summer meals, instead of following uniform federal rules.",
            "Governors gain power relative to Washington because fewer conditions come with the money, which fits the idea that states know their own needs best.",
          ],
          no: [
            "\"Governors like money.\" (No link to the type of grant or to state power.)",
            "\"The plan gives governors more money.\" (The scenario does not say the amount rises.)",
          ],
          example: "Governors would support the plan because a block grant shifts power from the national government to the states. Instead of meeting detailed federal rules, each state could decide how to use the money, for example on summer meals where school lunches already reach most children, so state leaders could match spending to their own state's needs.",
          notExample: "Governors agree with the senator." },
        { id: "t17-ca1c", skill: S, type: "fr", set: "t17-s2", part: "Concept application", sub: "C", topic: T,
          lead: "Use the scenario to answer parts A, B, and C.",
          prompt: "Explain why some members of Congress would oppose the proposal.",
          earns: "Explains that categorical grants let Congress ensure national standards and accountability, and that a block grant could lead to unequal services across states or less congressional control over how money is spent.",
          yes: [
            "With a block grant, Congress loses the conditions that guarantee every poor child a free meal, so children in states that spend the money elsewhere could get less help.",
            "Categorical grants let Congress hold states accountable and keep national standards; members who want uniform protection would oppose giving up that control.",
          ],
          no: [
            "\"They are from the other party.\" (The scenario says opponents come from both parties, and no reason tied to the grant is given.)",
            "\"Block grants are unconstitutional.\" (Inaccurate.)",
          ],
          example: "Categorical grants let Congress attach conditions that set a national standard, such as free meals for every child below an income line. Opponents fear that with a block grant some states would move money away from school meals or set lower standards, so a child's help would depend on where the child lives and Congress would lose its power to hold states accountable.",
          notExample: "Some members of Congress do not trust the senator." },
      ] },
  ],
};

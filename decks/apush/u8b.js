// AP U.S. History review, Unit 8 (8.9 to 8.15): the Great Society, civil rights in the 1960s and its expansion, youth culture, the environment and energy, society in transition, and the period as a whole.
import { bars, lines } from "../../plot.js";
import { maps } from "./maps.js";

const PRACTICE = "Practice passage written for this review, summarizing an interpretation held by many historians.";

export const sets = {
  "a8b-s01": {
    id: "a8b-s01", name: "Johnson signs Medicare, 1965", intro: "Use the excerpt below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "There are more than 18 million Americans over the age of 65. Most of them have low incomes. Most of them are threatened by illness and medical expenses that they cannot afford. ... No longer will older Americans be denied the healing miracle of modern medicine. No longer will illness crush and destroy the savings that they have so carefully put away over a lifetime so that they might enjoy dignity in their later years. No longer will young families see their own incomes, and their own hopes, eaten away simply because they are carrying out their deep moral obligations to their parents, and to their uncles, and their aunts." },
      { cite: "Lyndon B. Johnson, Remarks with President Truman at the Signing in Independence of the Medicare Bill, Independence, Missouri, July 30, 1965. The American Presidency Project.", url: "https://www.presidency.ucsb.edu/documents/remarks-with-president-truman-the-signing-independence-the-medicare-bill", kind: "primary" },
    ] }],
  },
  "a8b-s02": {
    id: "a8b-s02", name: "Johnson signs the education bill, 1965", intro: "Use the excerpt below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "By passing this bill, we bridge the gap between helplessness and hope for more than 5 million educationally deprived children. We put into the hands of our youth more than 30 million new books, and into many of our schools their first libraries. We reduce the terrible time lag in bringing new teaching techniques into the Nation's classrooms. We strengthen State and local agencies which bear the burden and the challenge of better education. ... As a son of a tenant farmer, I know that education is the only valid passport from poverty." },
      { cite: "Lyndon B. Johnson, Remarks in Johnson City, Texas, upon Signing the Elementary and Secondary Education Bill, April 11, 1965. The American Presidency Project.", url: "https://www.presidency.ucsb.edu/documents/remarks-johnson-city-tex-upon-signing-the-elementary-and-secondary-education-bill", kind: "primary" },
    ] }],
  },
  "a8b-s03": {
    id: "a8b-s03", name: "Poverty rates, 1959 to 1980", intro: "Use the chart and table below to answer the questions that follow.",
    sources: [{ title: "Chart", blocks: [
      { svg: bars({
          labels: ["1959", "1963", "1966", "1970", "1974", "1977", "1980"],
          series: [
            { name: "All people", values: [22.4, 19.5, 14.7, 12.6, 11.2, 11.6, 13.0] },
            { name: "People 65 and older", values: [35.2, null, 28.5, 24.6, 14.6, 14.1, 15.7] },
          ],
          y: [0, 40], step: 10, yname: "Percent below the poverty line",
          alt: "Grouped bar chart of the percent of Americans below the official poverty line in selected years. All people: 22.4 in 1959, 19.5 in 1963, 14.7 in 1966, 12.6 in 1970, 11.2 in 1974, 11.6 in 1977, 13.0 in 1980. People 65 and older: 35.2 in 1959, no figure for 1963, 28.5 in 1966, 24.6 in 1970, 14.6 in 1974, 14.1 in 1977, 15.7 in 1980.",
        }), caption: "Percent of Americans below the official poverty line, selected years, 1959 to 1980 (the Census Bureau gives no rate for people 65 and older for 1960 to 1965)" },
      { table: { head: ["Year", "All people (%)", "65 and older (%)"], rows: [
        ["1959", "22.4", "35.2"], ["1963", "19.5", "not reported"], ["1966", "14.7", "28.5"], ["1970", "12.6", "24.6"], ["1974", "11.2", "14.6"], ["1977", "11.6", "14.1"], ["1980", "13.0", "15.7"],
      ] } },
      { cite: "U.S. Census Bureau, Poverty in the United States: 2023 (P60-283), Table A-3, \"Poverty Status of People by Age, Race, and Hispanic Origin: 1959 to 2023.\"", url: "https://www2.census.gov/library/publications/2024/demo/p60-283.pdf", kind: "data" },
    ] }],
  },
  "a8b-s04": {
    id: "a8b-s04", name: "Signs at the March on Washington, 1963", intro: "Use the image below to answer the questions that follow.",
    sources: [{ title: "Image", blocks: [
      { img: "images/apush/u8-march-on-washington-signs.jpg",
        alt: "A black and white photograph of African American marchers, many of them well dressed women carrying handbags, walking along a tree-lined avenue. Above them rise printed placards on sticks: We Demand Equal Rights Now!, We March for Integrated Schools Now!, We Demand Decent Housing Now!, and We Demand an End to Bias Now! A partly cut off sign at upper left ends with the words Equals Freedom (a sign about employment). A man at the left edge shades his eyes, and more marchers and signs fill the background.",
        caption: "A photograph by Warren K. Leffler for U.S. News & World Report at the March on Washington for Jobs and Freedom, August 28, 1963, where about 250,000 people gathered.",
        credit: "Library of Congress, Prints and Photographs Division, U.S. News & World Report Magazine Photograph Collection, LC-DIG-ppmsca-03128",
        license: "public domain, Library of Congress (no known restrictions on publication)", url: "https://www.loc.gov/item/2003654393/" },
      { cite: "Warren K. Leffler, \"Civil rights March on Washington, D.C.,\" U.S. News & World Report, August 28, 1963. Library of Congress.", url: "https://www.loc.gov/item/2003654393/", kind: "primary" },
    ] }],
  },
  "a8b-s05": {
    id: "a8b-s05", name: "Kennedy's civil rights address, 1963", intro: "Use the excerpt below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "We are confronted primarily with a moral issue. It is as old as the scriptures and is as clear as the American Constitution. The heart of the question is whether all Americans are to be afforded equal rights and equal opportunities, whether we are going to treat our fellow Americans as we want to be treated. If an American, because his skin is dark, cannot eat lunch in a restaurant open to the public, if he cannot send his children to the best public school available, if he cannot vote for the public officials who represent him, if, in short, he cannot enjoy the full and free life which all of us want, then who among us would be content to have the color of his skin changed and stand in his place? Who among us would then be content with the counsels of patience and delay?" },
      { cite: "John F. Kennedy, Radio and Television Report to the American People on Civil Rights, June 11, 1963. The American Presidency Project.", url: "https://www.presidency.ucsb.edu/documents/radio-and-television-report-the-american-people-civil-rights", kind: "primary" },
    ] }],
  },
  "a8b-s06": {
    id: "a8b-s06", name: "Women's liberation march, 1970", intro: "Use the image below to answer the questions that follow.",
    sources: [{ title: "Image", blocks: [
      { img: "images/apush/u8-womens-liberation-march-1970.jpg",
        alt: "A black and white photograph of a wide downtown street lined with office buildings. Several hundred marchers, almost all young women in summer dresses, skirts, and slacks, walk toward the camera and fill the street. At the front left they carry a long banner reading Women Demand Equality. At the right, a large banner reads GWU Women's Liberation, for George Washington University. Many marchers carry smaller hand-lettered signs. A parked car and a few onlookers on the sidewalk are at the edges.",
        caption: "A photograph by Warren K. Leffler for U.S. News & World Report of a women's liberation march in Washington, D.C., on August 26, 1970, part of the nationwide Women's Strike for Equality held on the fiftieth anniversary of the Nineteenth Amendment.",
        credit: "Library of Congress, Prints and Photographs Division, U.S. News & World Report Magazine Photograph Collection, LC-DIG-ppmsca-03425",
        license: "public domain, Library of Congress (no known restrictions on publication)", url: "https://www.loc.gov/item/2003673992/" },
      { cite: "Warren K. Leffler, \"Women's lib[eration] march from Farrugut Sq[uare] to Layfette [i.e., Lafayette] P[ar]k,\" U.S. News & World Report, August 26, 1970. Library of Congress.", url: "https://www.loc.gov/item/2003673992/", kind: "primary" },
    ] }],
  },
  "a8b-s07": {
    id: "a8b-s07", name: "Nixon on Indian policy, 1970", intro: "Use the excerpt below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "As recently as August of 1953, in House Concurrent Resolution 108, the Congress declared that termination was the long-range goal of its Indian policies. This would mean that Indian tribes would eventually lose any special standing they had under Federal law: the tax exempt status of their lands would be discontinued; Federal responsibility for their economic and social well-being would be repudiated; and the tribes themselves would be effectively dismantled. Tribal property would be divided among individual members who would then be assimilated into the society at large. ... I believe that both of these policy extremes are wrong. Federal termination errs in one direction, Federal paternalism errs in the other. ... Self-determination among the Indian people can and must be encouraged without the threat of eventual termination." },
      { cite: "Richard Nixon, Special Message to the Congress on Indian Affairs, July 8, 1970. The American Presidency Project.", url: "https://www.presidency.ucsb.edu/documents/special-message-the-congress-indian-affairs", kind: "primary" },
    ] }],
  },
  "a8b-s08": {
    id: "a8b-s08", name: "Waiting for gasoline, 1979", intro: "Use the image below to answer the questions that follow.",
    sources: [{ title: "Image", blocks: [
      { img: "images/apush/u8-gasoline-lines-1979.jpg",
        alt: "A black and white photograph of a crowded gas station lot in the Washington, D.C., area. Cars are jammed together in several lines waiting to reach the pumps; a few drivers stand beside their cars. In the center foreground is a large, long American sedan, and at the lower left is the back of a small pickup truck with Datsun, a Japanese brand, in big letters on its tailgate. A sign on a pole at the top reads Finnegan's Car Wash. Gas pumps and an attendant appear in the background under the station canopy.",
        caption: "A photograph by Warren K. Leffler for U.S. News & World Report of drivers waiting in line for gasoline in June 1979, during the second oil shock of the 1970s that followed the Iranian Revolution.",
        credit: "Library of Congress, Prints and Photographs Division, U.S. News & World Report Magazine Photograph Collection, LC-DIG-ppmsca-03433",
        license: "public domain, Library of Congress (no known restrictions on publication)", url: "https://www.loc.gov/item/2003677600/" },
      { cite: "Warren K. Leffler, \"Gasoline lines,\" U.S. News & World Report, June 15, 1979. Library of Congress.", url: "https://www.loc.gov/item/2003677600/", kind: "primary" },
    ] }],
  },
};

export default [
  // ---------- 8.9 Medicare signing ----------
  { id: "a8b-m001", skill: "u8", type: "mcq", set: "a8b-s01", topic: "8.9", difficulty: "easy", reasoning: "Continuity and Change",
    question: "The law Johnson signed in the excerpt most directly expanded which earlier federal program?",
    choices: [
      "The Social Security system created in 1935",
      "The Works Progress Administration of 1935",
      "The GI Bill of Rights passed in 1944",
      "The Federal Housing Administration of 1934",
    ],
    why: [
      "Correct. Medicare (1965) was added to the Social Security Act as health insurance for people 65 and older, building on the old age pensions created under Franklin Roosevelt in 1935.",
      "The WPA hired the unemployed for public works during the Depression and ended in 1943; it had nothing to do with health care for the elderly.",
      "The GI Bill paid for veterans' schooling, home loans, and job help after World War II, not medical care for all older Americans.",
      "The FHA insured home mortgages; Medicare insured hospital and doctor bills for people over 65.",
    ],
    answer: 0 },
  { id: "a8b-m002", skill: "u8", type: "mcq", set: "a8b-s01", topic: "8.9", difficulty: "moderate", reasoning: "Causation",
    question: "Which development most directly made passage of the law in the excerpt possible in 1965?",
    choices: [
      "Johnson's landslide win and large Democratic majorities in 1964",
      "Truman's success in passing national health insurance in 1949",
      "A Supreme Court ruling that required states to fund hospitals",
      "Republican control of Congress after the midterm election of 1962",
    ],
    why: [
      "Correct. Johnson's 1964 landslide over Barry Goldwater brought large Democratic majorities into the 89th Congress, which passed Medicare, Medicaid, federal school aid, and the Voting Rights Act in 1965.",
      "Truman proposed national health insurance, but Congress rejected it; that failure is why Johnson signed the bill in Truman's hometown in his honor.",
      "No Supreme Court ruling required states to fund hospitals; Medicare was created by an act of Congress.",
      "Democrats controlled both houses of Congress after 1962, and Republicans did not win them back until 1980 (Senate) and 1994 (House).",
    ],
    answer: 0 },
  { id: "a8b-m003", skill: "u8", type: "mcq", set: "a8b-s01", topic: "8.9", difficulty: "difficult", reasoning: "Comparison",
    question: "The 1965 health law that included the program in the excerpt also created which program?",
    choices: [
      "Medicaid, which paid for health care for many poor Americans",
      "Head Start, which offered preschool to poor children",
      "Food stamps, which gave poor families help buying groceries",
      "Job Corps, which trained young people for skilled work",
    ],
    why: [
      "Correct. The Social Security Amendments of 1965 created both Medicare, for people 65 and older, and Medicaid, a federal and state program paying for medical care for many low income Americans.",
      "Head Start began in 1965 under the Office of Economic Opportunity, created by the Economic Opportunity Act of 1964, not under the Medicare law.",
      "The Food Stamp Act was passed in 1964 as a separate law, a year before Medicare.",
      "The Job Corps was created by the Economic Opportunity Act of 1964, part of the War on Poverty, not the health law of 1965.",
    ],
    answer: 0 },

  // ---------- 8.9 ESEA signing ----------
  { id: "a8b-m004", skill: "u8", type: "mcq", set: "a8b-s02", topic: "8.9", difficulty: "moderate", reasoning: "Causation",
    question: "The excerpt best reflects which Great Society approach to fighting poverty?",
    choices: [
      "Opening opportunity through schooling instead of giving cash",
      "Guaranteeing every family a minimum income paid by the government",
      "Hiring the jobless directly on large federal public works",
      "Leaving antipoverty programs to churches and private charities",
    ],
    why: [
      "Correct. Johnson calls education \"the only valid passport from poverty.\" The Great Society mostly tried to give poor Americans the skills and services to rise, through programs such as the ESEA (1965), Head Start, and the Job Corps.",
      "A guaranteed income was debated later, in Nixon's Family Assistance Plan (1969), which Congress did not pass; Johnson's bill paid for schools.",
      "Direct federal hiring on public works was the New Deal method of the WPA in the 1930s, not the approach of this bill.",
      "Johnson's bill sends federal money to schools through State and local agencies; it does not hand poverty to private charity.",
    ],
    answer: 0 },
  { id: "a8b-m005", skill: "u8", type: "mcq", set: "a8b-s02", topic: "8.9", difficulty: "difficult", reasoning: "Comparison",
    question: "The federal role in education described in the excerpt is most similar to which earlier federal action?",
    choices: [
      "The Morrill Act's grants of land to fund state colleges in 1862",
      "The Northwest Ordinance's ban on slavery north of the Ohio River",
      "The Freedmen's Bureau's control of Southern courts after 1865",
      "The Dawes Act's division of reservation land among families",
    ],
    why: [
      "Correct. Like the ESEA of 1965, the Morrill Land-Grant Act (1862) used federal resources to pay for education that states ran, here colleges teaching agriculture and engineering.",
      "The Northwest Ordinance (1787) did ban slavery in the Northwest Territory, but that is not federal aid to schools.",
      "The Freedmen's Bureau did found schools for freed people, but it never controlled Southern courts, so the choice describes a power it lacked.",
      "The Dawes Act (1887) broke up reservations to push assimilation; it did not fund schools run by states.",
    ],
    answer: 0 },

  // ---------- 8.9 Poverty chart ----------
  { id: "a8b-m006", skill: "u8", type: "mcq", set: "a8b-s03", topic: "8.9", difficulty: "easy",
    question: "Which statement is best supported by the chart?",
    choices: [
      "The poverty rate for all people fell by about half from 1959 to 1974",
      "The poverty rate for all people rose every year from 1966 to 1980",
      "Older Americans were less likely to be poor than others in 1959",
      "The poverty rate for older Americans was lowest in the year 1966",
    ],
    why: [
      "Correct. The rate for all people fell from 22.4 percent in 1959 to 11.2 percent in 1974, about half.",
      "The rate fell from 14.7 percent in 1966 to 11.2 percent in 1974 before rising again, so it did not rise every year.",
      "In 1959, 35.2 percent of people 65 and older were poor, compared with 22.4 percent of all people, so older Americans were more likely to be poor.",
      "The rate for older Americans was 28.5 percent in 1966, higher than in every later year shown.",
    ],
    answer: 0 },
  { id: "a8b-m007", skill: "u8", type: "mcq", set: "a8b-s03", topic: "8.9", difficulty: "moderate", reasoning: "Causation",
    question: "Which federal policies most directly explain the change in poverty among people 65 and older from 1966 to 1974?",
    choices: [
      "Medicare and larger Social Security benefits",
      "Head Start classes and the Job Corps",
      "Federal aid to public schools under the ESEA",
      "The Immigration and Nationality Act of 1965",
    ],
    why: [
      "Correct. Medicare (1965) paid most hospital bills for people 65 and older, and Congress raised Social Security benefits several times from 1968 to 1972 and tied them to inflation in 1972, so poverty among the elderly fell from 28.5 to 14.6 percent.",
      "Head Start served preschool children and the Job Corps trained young people, so neither reached the elderly.",
      "The ESEA of 1965 sent money to schools with many poor children; it did not raise the incomes of older Americans.",
      "The 1965 immigration law ended national origins quotas; it was not an antipoverty program for the elderly.",
    ],
    answer: 0 },
  { id: "a8b-m008", skill: "u8", type: "mcq", set: "a8b-s03", topic: "8.9", difficulty: "difficult", reasoning: "Causation",
    question: "Which development best explains the rise in the poverty rate for all people from 1977 to 1980?",
    choices: [
      "Inflation and job losses during the energy crisis of the late 1970s",
      "Cuts to Great Society programs made by the Reagan administration",
      "The end of the military draft and the return of soldiers from Vietnam",
      "A sharp fall in immigration after Congress ended the quota system",
    ],
    why: [
      "Correct. The oil shock of 1979 drove prices up quickly while unemployment rose, the stagflation that eroded the incomes of poor families by 1980.",
      "Reagan took office in January 1981, after the years shown, so his budget cuts cannot explain a rise from 1977 to 1980.",
      "The draft ended in 1973 and the last troops left Vietnam that year, well before the rise from 1977 to 1980.",
      "Ending national origins quotas in 1965 led to more immigration from Asia and Latin America, not a sharp fall.",
    ],
    answer: 0 },
  { id: "a8b-m009", skill: "u8", type: "mcq", set: "a8b-s03", topic: "8.9", difficulty: "difficult", reasoning: "Causation",
    question: "A historian arguing that the War on Poverty was not the only cause of falling poverty would most likely point out that the chart shows",
    choices: [
      "a drop from 22.4 to 19.5 percent between 1959 and 1963",
      "older Americans gaining more than other Americans after 1966",
      "poverty rates in 1980 that were lower than those in 1959",
      "a poverty rate that went up again in the years after 1977",
    ],
    why: [
      "Correct. Johnson declared the War on Poverty in 1964, so the drop from 22.4 to 19.5 percent between 1959 and 1963 came before any of its programs, when economic growth was already lowering poverty.",
      "The large gains for older Americans came after Medicare and higher Social Security benefits, so they support, not weaken, the case for federal programs.",
      "A lower rate in 1980 than in 1959 shows that poverty fell overall, but it does not separate the effect of federal programs from other causes.",
      "The rise after 1977 shows the effect of a weak economy late in the period; it says nothing about what caused the earlier fall.",
    ],
    answer: 0 },

  // ---------- 8.10 March on Washington ----------
  { id: "a8b-m010", skill: "u8", type: "mcq", set: "a8b-s04", topic: "8.10", difficulty: "easy", reasoning: "Causation",
    question: "The march shown in the image most directly built support for which law?",
    choices: [
      "The Civil Rights Act of 1964",
      "The Fair Housing Act of 1968",
      "The Civil Rights Act of 1957",
      "The Twenty-sixth Amendment of 1971",
    ],
    why: [
      "Correct. The March on Washington in August 1963 pressed Congress to pass the civil rights bill Kennedy had proposed in June; it became the Civil Rights Act of 1964, which banned segregation in public places and job discrimination.",
      "The Fair Housing Act passed in 1968, days after Martin Luther King Jr. was killed; it was not the bill the 1963 march pressed for.",
      "The Civil Rights Act of 1957 passed six years before this march.",
      "The Twenty-sixth Amendment lowered the voting age to 18 in response to the Vietnam era, not the March on Washington.",
    ],
    answer: 0 },
  { id: "a8b-m011", skill: "u8", type: "mcq", set: "a8b-s04", topic: "8.10", difficulty: "moderate", reasoning: "Continuity and Change",
    question: "The signs about jobs, housing, and schools in the image show most clearly that the march's organizers",
    choices: [
      "joined demands for economic opportunity with demands for civil rights",
      "rejected integration in favor of separate Black communities and schools",
      "focused mainly on ending the war in Vietnam and the military draft",
      "sought only the vote and left economic issues to labor unions",
    ],
    why: [
      "Correct. The event's full name was the March on Washington for Jobs and Freedom; A. Philip Randolph and Bayard Rustin organized it, and signs for decent housing, integrated schools, and jobs joined economic and civil rights goals.",
      "A sign in the image calls for integrated schools; separatism was a goal of the Nation of Islam and later Black Power groups, not of this march.",
      "Large protests against the Vietnam War came after 1965; none of the signs shown mention the war.",
      "The signs demand housing, schools, and jobs, so the march did not limit itself to voting.",
    ],
    answer: 0 },
  { id: "a8b-m012", skill: "u8", type: "mcq", set: "a8b-s04", topic: "8.10", difficulty: "difficult", reasoning: "Comparison",
    question: "The strategy shown in the image differed most from the approach of which later civil rights leaders?",
    choices: [
      "Black Power advocates who stressed racial pride and self-defense",
      "SCLC leaders who organized the Selma to Montgomery march in 1965",
      "NAACP lawyers who brought school cases before the Supreme Court",
      "Organizers of the Poor People's Campaign in Washington in 1968",
    ],
    why: [
      "Correct. After 1966, Stokely Carmichael and other Black Power advocates rejected integration as the main goal and stressed Black pride, community control, and armed self-defense, unlike the orderly, interracial march for integration shown.",
      "The SCLC's Selma march (1965) used the same nonviolent mass protest to win federal action, leading to the Voting Rights Act.",
      "NAACP lawyers, led by Thurgood Marshall, sought integration through the courts, a goal shared by the marchers.",
      "The Poor People's Campaign (1968), planned by King before his death, also brought nonviolent marchers to Washington with economic demands.",
    ],
    answer: 0 },

  // ---------- 8.10 Kennedy address ----------
  { id: "a8b-m013", skill: "u8", type: "mcq", set: "a8b-s05", topic: "8.10", difficulty: "moderate", reasoning: "Causation",
    question: "Which event most directly led Kennedy to give the address in the excerpt?",
    choices: [
      "Governor George Wallace's stand against integrating the University of Alabama",
      "The arrest of Rosa Parks and the start of the Montgomery bus boycott",
      "The murder of three civil rights workers during Freedom Summer in Mississippi",
      "The riot that followed a police traffic stop in the Watts area of Los Angeles",
    ],
    why: [
      "Correct. On June 11, 1963, Wallace stood in a doorway at the University of Alabama to block two Black students; Kennedy federalized the Alabama National Guard, the students enrolled, and he spoke to the nation that night.",
      "Rosa Parks was arrested in December 1955, more than seven years before this address.",
      "James Chaney, Andrew Goodman, and Michael Schwerner were killed in June 1964, a year after this address.",
      "The Watts uprising took place in August 1965, more than two years later.",
    ],
    answer: 0 },
  { id: "a8b-m014", skill: "u8", type: "mcq", set: "a8b-s05", topic: "8.10", difficulty: "easy",
    question: "Kennedy's purpose in the excerpt was most likely to",
    choices: [
      "build public support for federal civil rights legislation",
      "urge Black activists to wait for gradual change in the South",
      "warn Southern governors that he would send troops to every state",
      "defend states' right to decide the rules for their own public schools",
    ],
    why: [
      "Correct. Kennedy calls civil rights \"a moral issue\" and asks who would accept \"the counsels of patience and delay\"; later in the address he asked Congress for the bill that became the Civil Rights Act of 1964.",
      "Kennedy rejects \"patience and delay,\" so he is not urging activists to wait.",
      "Kennedy did use federalized troops at the University of Alabama, but the excerpt makes a moral appeal to the public, not a threat to send troops everywhere.",
      "Kennedy says segregated schools and voting barriers deny Americans equal rights, the opposite of a states' rights defense.",
    ],
    answer: 0 },
  { id: "a8b-m015", skill: "u8", type: "mcq", set: "a8b-s05", topic: "8.10", difficulty: "difficult", reasoning: "Continuity and Change",
    question: "The barrier Kennedy names when he says an American \"cannot vote for the public officials who represent him\" was most directly addressed by",
    choices: [
      "the Voting Rights Act of 1965",
      "the Civil Rights Act of 1964",
      "the Fifteenth Amendment of 1870",
      "the Supreme Court's ruling in Brown",
    ],
    why: [
      "Correct. The Voting Rights Act of 1965 banned literacy tests in states with low Black registration and sent federal examiners to register voters, and Black registration in the Deep South rose sharply.",
      "The Civil Rights Act of 1964 banned segregation in public places and job discrimination; its voting provisions were weak, which is why the Selma campaign of 1965 followed.",
      "The Fifteenth Amendment (1870) already barred denying the vote by race, yet Southern states used literacy tests and violence to keep Black citizens from voting, as Kennedy says in 1963.",
      "Brown v. Board of Education (1954) ended legal segregation in public schools; it did not deal with voting.",
    ],
    answer: 0 },

  // ---------- 8.11 Women's march ----------
  { id: "a8b-m016", skill: "u8", type: "mcq", set: "a8b-s06", topic: "8.11", difficulty: "easy", reasoning: "Causation",
    question: "Which earlier development most directly helped build the movement shown in the image?",
    choices: [
      "The founding of the National Organization for Women in 1966",
      "The ratification of the Nineteenth Amendment in 1920",
      "The Supreme Court's ruling in Roe v. Wade in 1973",
      "The passage of Title IX of the Education Amendments in 1972",
    ],
    why: [
      "Correct. NOW, founded in 1966 by Betty Friedan and others, organized for equal pay, equal job opportunity, and an equal rights amendment, and helped plan the Women's Strike for Equality of August 1970.",
      "The march marked the fiftieth anniversary of the Nineteenth Amendment, but the vote was won by the earlier suffrage movement, not by this one.",
      "Roe v. Wade was decided in 1973, after this 1970 march, so it could not have built the movement.",
      "Title IX passed in 1972, two years after this march; it was a result of the movement's pressure, not a cause.",
    ],
    answer: 0 },
  { id: "a8b-m017", skill: "u8", type: "mcq", set: "a8b-s06", topic: "8.11", difficulty: "moderate", reasoning: "Comparison",
    question: "The marchers' choice of the anniversary of the Nineteenth Amendment for their protest suggests that they",
    choices: [
      "saw their demands as continuing the earlier suffrage campaign",
      "believed the vote alone had won full equality for women",
      "wanted to repeal the amendment and return voting to the states",
      "opposed women's work outside the home and in public life",
    ],
    why: [
      "Correct. By marching on August 26, 1970, fifty years after women won the vote, the marchers linked their demands for equality in jobs, schools, and law to the suffrage movement of Alice Paul and Carrie Chapman Catt.",
      "The banner \"Women Demand Equality\" shows they believed equality was not yet won, even after fifty years of voting.",
      "No women's movement group sought to repeal the Nineteenth Amendment.",
      "The march demanded equal treatment at work and in school, the opposite of opposing women's public roles.",
    ],
    answer: 0 },
  { id: "a8b-m018", skill: "u8", type: "mcq", set: "a8b-s06", topic: "8.11", difficulty: "difficult", reasoning: "Causation",
    question: "Which development in the 1970s best shows the limits of the movement in the image?",
    choices: [
      "The Equal Rights Amendment fell short of ratification by enough states",
      "Congress refused to pass the Equal Rights Amendment and send it on",
      "The Supreme Court struck down Title VII's ban on sex discrimination",
      "Women's share of college and professional school students declined",
    ],
    why: [
      "Correct. Congress passed the ERA in 1972, but a campaign led by Phyllis Schlafly helped stop it three states short of the 38 needed by the 1982 deadline.",
      "Congress did pass the ERA in 1972 by large margins; the defeat came in the state legislatures.",
      "Title VII of the Civil Rights Act of 1964 banned sex discrimination in hiring and was never struck down.",
      "Women's share of college and professional students rose sharply in the 1970s, helped by Title IX (1972).",
    ],
    answer: 0 },

  // ---------- 8.11 Nixon on Indian affairs ----------
  { id: "a8b-m019", skill: "u8", type: "mcq", set: "a8b-s07", topic: "8.11", difficulty: "moderate", reasoning: "Comparison",
    question: "The termination policy Nixon describes is most similar to which earlier federal policy?",
    choices: [
      "The Dawes Act's division of tribal land among individual Indians",
      "The Indian Reorganization Act's support for tribal governments",
      "The treaties that set aside reservations for Plains nations",
      "The Marshall Court's ruling that tribes were dependent nations",
    ],
    why: [
      "Correct. Like termination, the Dawes Act (1887) broke tribal land into individual holdings to assimilate Indians into \"the society at large\" and weaken tribes as communities.",
      "The Indian Reorganization Act (1934) did the opposite: it ended allotment and supported tribal self-government.",
      "Reservation treaties, such as those at Fort Laramie, created the special tribal standing that termination aimed to end.",
      "In Cherokee Nation v. Georgia (1831), John Marshall called tribes domestic dependent nations, the basis of the trust relationship that termination sought to dissolve.",
    ],
    answer: 0 },
  { id: "a8b-m020", skill: "u8", type: "mcq", set: "a8b-s07", topic: "8.11", difficulty: "difficult", reasoning: "Causation",
    question: "Which development most directly shaped the context of Nixon's message?",
    choices: [
      "Indian activists' occupation of Alcatraz Island, begun in 1969",
      "The American Indian Movement's standoff at Wounded Knee in 1973",
      "The relocation of Western tribes to Indian Territory in the 1830s",
      "The Supreme Court's ruling in Worcester v. Georgia in 1832",
    ],
    why: [
      "Correct. Indians of All Tribes occupied Alcatraz in November 1969 and stayed until 1971, drawing national attention to broken treaties and Red Power demands for self-determination as Nixon wrote his July 1970 message.",
      "AIM's armed standoff at Wounded Knee, South Dakota, came in 1973, three years after the message.",
      "Removal of Southeastern nations to Indian Territory in the 1830s is part of the history of injustice, but it is far earlier than the immediate context of a 1970 message.",
      "Worcester v. Georgia (1832) upheld Cherokee sovereignty, but it is 140 years earlier and not the context of this message.",
    ],
    answer: 0 },
  { id: "a8b-m021", skill: "u8", type: "mcq", set: "a8b-s07", topic: "8.11", difficulty: "moderate", reasoning: "Causation",
    question: "Which later federal action most directly carried out the policy Nixon calls for?",
    choices: [
      "The Indian Self-Determination and Education Assistance Act of 1975",
      "House Concurrent Resolution 108, which set termination as a goal",
      "The Indian Citizenship Act, which made all Native Americans citizens",
      "The Indian Relocation program, which moved families to large cities",
    ],
    why: [
      "Correct. The Indian Self-Determination and Education Assistance Act (1975) let tribes contract to run federal programs, such as schools and health services, themselves.",
      "House Concurrent Resolution 108 (1953) is the termination policy Nixon rejects, and it came before his message.",
      "The Indian Citizenship Act (1924) came almost fifty years earlier and did not deal with tribal self-rule.",
      "The relocation program of the 1950s moved Indians off reservations to cities as part of the termination era that Nixon criticizes.",
    ],
    answer: 0 },

  // ---------- 8.13 Gas lines ----------
  { id: "a8b-m022", skill: "u8", type: "mcq", set: "a8b-s08", topic: "8.13", difficulty: "moderate", reasoning: "Causation",
    question: "Which event most directly caused the scene shown in the image?",
    choices: [
      "The revolution in Iran that cut its oil exports in 1979",
      "The Arab oil embargo after the Yom Kippur War of 1973",
      "Iraq's invasion of Kuwait and the Gulf War that followed",
      "The Soviet invasion of Afghanistan in December 1979",
    ],
    why: [
      "Correct. The Iranian Revolution, which drove out the shah in early 1979, cut Iran's oil exports; world prices jumped and gas lines returned in the United States by the spring and summer of 1979.",
      "The OPEC embargo of 1973 and 1974 caused the first round of gas lines, but this photograph was taken in June 1979.",
      "Iraq invaded Kuwait in 1990, eleven years after the photograph.",
      "The Soviet invasion of Afghanistan came in December 1979, six months after the photograph.",
    ],
    answer: 0 },
  { id: "a8b-m023", skill: "u8", type: "mcq", set: "a8b-s08", topic: "8.13", difficulty: "difficult", reasoning: "Causation",
    question: "The small Japanese truck in the image best illustrates which economic trend of the 1970s?",
    choices: [
      "Fuel efficient imports winning sales from Detroit automakers",
      "American automakers' gains in sales across markets in Asia",
      "Federal tariffs that shut Japanese vehicles out of the market",
      "A shift of Japanese car factories from Japan to the Sunbelt",
    ],
    why: [
      "Correct. High gas prices after 1973 and 1979 pushed buyers toward small, fuel efficient Japanese cars and trucks, such as Datsuns and Toyotas, and the Big Three lost sales and jobs in the Rust Belt.",
      "American automakers were losing ground in this period, and the trend shown is imports entering the United States, not American sales in Asia.",
      "Japanese vehicles were sold widely in the 1970s; Japan agreed to voluntary export limits only in 1981.",
      "Japanese companies began building plants in the United States in the 1980s, and the first, Honda's, was in Ohio, not the Sunbelt.",
    ],
    answer: 0 },
  { id: "a8b-m024", skill: "u8", type: "mcq", set: "a8b-s08", topic: "8.13", difficulty: "moderate", reasoning: "Causation",
    question: "Conditions like those in the image most directly hurt which political leader?",
    choices: [
      "Jimmy Carter in his race for reelection in 1980",
      "Richard Nixon in his race for reelection in 1972",
      "Gerald Ford in his race against Carter in 1976",
      "Ronald Reagan in his race for reelection in 1984",
    ],
    why: [
      "Correct. Gas lines, high inflation, and the Iran hostage crisis left Carter with low approval ratings, and Ronald Reagan defeated him in 1980.",
      "Nixon won a landslide in 1972, before the first oil embargo of October 1973.",
      "Ford was hurt in 1976 by his pardon of Nixon and the 1974 to 1975 recession, but this 1979 scene came three years after that race.",
      "By 1984 inflation and oil prices had fallen, and Reagan won reelection in a landslide.",
    ],
    answer: 0 },
];

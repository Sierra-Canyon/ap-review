// Topic 3.6 Quiz: Balancing Individual Freedom with Public Order and Safety
import { lines } from "../../plot.js";

// Gallup, "In general, do you feel that the laws covering the sale of firearms should be made more strict, less strict, or kept as they are now?" selected surveys
const guns = {
  years: ["1990", "1995", "2000", "2005", "2010", "2015", "2020", "2025"],
  dates: ["Sep. 1990", "Apr. 1995", "Apr. 2000", "Oct. 2005", "Oct. 2010", "Oct. 2015", "Sep. to Oct. 2020", "Oct. 2025"],
  more: [78, 62, 61, 57, 44, 55, 57, 60],
  less: [2, 12, 7, 7, 12, 11, 9, 12],
  kept: [17, 24, 30, 35, 42, 33, 34, 27],
};

export const sets = {
  "t36-s1": {
    id: "t36-s1", name: "Public opinion on gun sale laws, 1990 to 2025", intro: "Use the graph below to answer the questions that follow.", label: "Chart",
    sources: [{ title: "Chart", blocks: [
      { svg: lines({ labels: guns.years, series: [{ name: "More strict", values: guns.more }, { name: "Kept as now", values: guns.kept }, { name: "Less strict", values: guns.less }], y: [0, 100], step: 20, yname: "Percent of adults",
        alt: "Line graph of the percent of U.S. adults who say laws covering the sale of firearms should be made more strict, kept as they are now, or made less strict. More strict: " + guns.years.map((y, i) => `${y}, ${guns.more[i]}`).join("; ") + ". Kept as now: " + guns.years.map((y, i) => `${y}, ${guns.kept[i]}`).join("; ") + ". Less strict: " + guns.years.map((y, i) => `${y}, ${guns.less[i]}`).join("; ") + "." }),
        caption: "Percent of U.S. adults who say the laws covering the sale of firearms should be made more strict, kept as they are now, or made less strict, selected Gallup surveys, 1990 to 2025. The rest of each sample had no opinion." },
      { table: { head: ["Survey", "More strict (%)", "Kept as now (%)", "Less strict (%)"], rows: guns.dates.map((d, i) => [d, String(guns.more[i]), String(guns.kept[i]), String(guns.less[i])]) } },
      { cite: "Gallup, \"Guns,\" Gallup Historical Trends, trend for \"In general, do you feel that the laws covering the sale of firearms should be made more strict, less strict, or kept as they are now?\" selected surveys from September 1990 to October 2025.", url: "https://news.gallup.com/poll/1645/guns.aspx", kind: "data" },
    ] }],
  },
  "t36-s2": {
    id: "t36-s2", name: "Face-recognition cameras on city buses", intro: "Use the scenario below to answer parts A, B, and C.",
    sources: [{ title: "Scenario", blocks: [
      { p: "After a rise in thefts and assaults on public buses, the city of Ridgemont installed face-recognition cameras on every bus. The cameras scan each rider's face and compare it to a police list of people with open arrest warrants. When the system finds a match, it sends an alert to nearby officers, and the scans of all riders are stored for one year. Police did not seek a warrant to run the system. A privacy group argued that the program tracks thousands of innocent riders. A city council member who supported the cameras said, \"Riders deserve to feel safe, and people with nothing to hide have nothing to fear.\" The privacy group began collecting signatures and urging council members to vote to end the program." },
      { cite: "Scenario written for this review.", kind: "scenario" },
    ] }],
  },
};

export default {
  forms: [
    { id: "t36", name: "Topic 3.6 Quiz: Balancing Individual Freedom with Public Order and Safety", group: "Unit 3: Civil Liberties and Civil Rights",
      items: [
        { id: "t36-m01", skill: "u3", type: "mcq", set: "t36-s1", topic: "3.6", difficulty: "easy",
          question: "Which statement is supported by the graph?",
          choices: [
            "The share wanting stricter laws was highest in 1990",
            "The share wanting less strict laws rose in every survey shown",
            "In 2025, more adults wanted laws kept as now than made stricter",
            "The share wanting stricter laws was lower in 2025 than in 2010",
          ],
          why: [
            "Correct. In 1990, 78 percent wanted stricter laws on gun sales, more than in any other survey shown.",
            "The less strict share rose and fell, for example from 12 percent in 1995 to 7 percent in 2000.",
            "In 2025, 60 percent wanted stricter laws and 27 percent wanted them kept as now.",
            "The stricter share was 60 percent in 2025 and 44 percent in 2010, so it was higher in 2025.",
          ],
          answer: 0 },
        { id: "t36-m02", skill: "u3", type: "mcq", set: "t36-s1", topic: "3.6", difficulty: "moderate",
          question: "In which year shown were the shares saying \"more strict\" and \"kept as now\" closest to each other?",
          choices: [
            "2010",
            "1990",
            "2005",
            "2025",
          ],
          why: [
            "Correct. In 2010, 44 percent wanted stricter laws and 42 percent wanted them kept as now, a gap of only 2 points.",
            "In 1990, the gap was the widest shown: 78 percent more strict and 17 percent kept as now.",
            "In 2005, the gap was 22 points: 57 percent and 35 percent.",
            "In 2025, the gap was 33 points: 60 percent and 27 percent.",
          ],
          answer: 0 },
        { id: "t36-m03", skill: "u3", type: "mcq", topic: "3.6", difficulty: "easy",
          question: "Which government action most clearly limits an individual liberty in order to protect public safety?",
          choices: [
            "A city curfew that keeps people off the streets during a riot",
            "A state law raising the top income tax rate by two percent",
            "A constitutional amendment setting the voting age at eighteen",
            "A rule requiring members of Congress to report their income",
          ],
          why: [
            "Correct. A curfew restricts people's freedom to move and gather, and the government imposes it to restore order and safety.",
            "A tax change is economic policy, not a limit on a civil liberty for safety.",
            "Setting the voting age expands a right to participate; it does not restrict liberty for safety.",
            "Financial reporting by officials serves government ethics, not public safety.",
          ],
          answer: 0 },
        { id: "t36-m04", skill: "u3", type: "mcq", topic: "3.6", difficulty: "easy",
          question: "During a measles outbreak, a state requires public school students to be vaccinated, with exceptions only for medical reasons. Some parents object on religious grounds. This conflict is best described as which of the following?",
          choices: [
            "Individual liberty versus public health and safety",
            "National power versus the reserved powers of states",
            "Majority rule versus the rights of the accused",
            "Freedom of the press versus national security",
          ],
          why: [
            "Correct. The parents claim religious liberty, while the state acts to protect the health and safety of other students and the public.",
            "The rule is a state law, and no national power is involved.",
            "No one in the scenario is accused of a crime.",
            "The conflict does not involve publishing or national security.",
          ],
          answer: 0 },
        { id: "t36-m05", skill: "u3", type: "mcq", topic: "3.6", difficulty: "moderate",
          question: "In Kennedy v. Louisiana (2008), the Court held that the death penalty for the rape of a child, when the child was not killed, violates the Eighth Amendment. The Court noted that only six states allowed that punishment. Which idea does this reasoning reflect?",
          choices: [
            "Evolving standards of decency",
            "The clear and present danger test",
            "Selective incorporation of rights",
            "Separate but equal",
          ],
          why: [
            "Correct. The Court reads the Cruel and Unusual Punishments Clause by evolving standards of decency, looking at a national consensus such as how many states allow a punishment.",
            "Clear and present danger is the free speech test from Schenck v. United States (1919).",
            "Selective incorporation applied the Eighth Amendment to the states, but it does not explain why a punishment is cruel and unusual.",
            "Separate but equal was the segregation rule of Plessy v. Ferguson (1896).",
          ],
          answer: 0 },
        { id: "t36-m06", skill: "u3", type: "mcq", topic: "3.6", difficulty: "moderate",
          question: "A public school district requires students who play school sports to take random drug tests. Which reason best explains why the Supreme Court has upheld policies like this one?",
          choices: [
            "Students have less privacy at school, and the safety goal outweighs it",
            "The Fourth Amendment does not apply to anyone under eighteen years old",
            "The tests are run by coaches, who are private persons, not government",
            "Drug tests are not searches, so they never need any justification",
          ],
          why: [
            "Correct. In Vernonia School District v. Acton (1995), the Court held that the district's interest in student safety outweighed athletes' reduced expectation of privacy, so the searches were reasonable.",
            "The Fourth Amendment protects minors too; the Court balanced their privacy against the school's needs.",
            "Public school employees act for the government, so the Fourth Amendment applies to them.",
            "The Court treated the tests as searches and upheld them only because they were reasonable.",
          ],
          answer: 0 },
        { id: "t36-m07", skill: "u3", type: "mcq", topic: "3.6", difficulty: "moderate",
          question: "Which restriction on a protest is most likely constitutional?",
          choices: [
            "A limit on loudspeakers near a hospital at night",
            "A ban on any march that criticizes the police",
            "A rule that marchers give their names to the mayor",
            "A ban on signs that support one political party",
          ],
          why: [
            "Correct. A rule on the time, place, and manner of speech is allowed when it is neutral about the message, serves a real interest such as patients' rest, and leaves other ways to speak.",
            "Banning a march because of its message is content discrimination, which the First Amendment forbids.",
            "Forcing marchers to identify themselves to officials would chill speech and assembly without a safety reason.",
            "Singling out one party's signs punishes a viewpoint, which the First Amendment forbids.",
          ],
          answer: 0 },
        { id: "t36-m08", skill: "u3", type: "mcq", topic: "3.6", difficulty: "difficult",
          question: "Which statement best describes how the Supreme Court has treated limits on civil liberties during wars and other national emergencies?",
          choices: [
            "It has often allowed limits during a crisis and later narrowed or rejected them",
            "It has struck down every limit on civil liberties that Congress passed during a war",
            "It has held that the Bill of Rights is suspended whenever Congress declares war",
            "It has refused to hear any case about wartime limits as a political question",
          ],
          why: [
            "Correct. The Court upheld wartime speech convictions in Schenck v. United States (1919) and Japanese American removal in Korematsu v. United States (1944), then later narrowed Schenck in Brandenburg v. Ohio (1969) and called Korematsu \"gravely wrong\" in Trump v. Hawaii (2018).",
            "The Court upheld several wartime limits, including the convictions in Schenck, so it did not strike down every one.",
            "The Bill of Rights stays in force during war; the Court has only weighed safety more heavily in some cases.",
            "The Court has decided many wartime cases, such as Korematsu and the Pentagon Papers case.",
          ],
          answer: 0 },
        { id: "t36-ca1a", skill: "u3", type: "fr", set: "t36-s2", part: "Concept application", sub: "A", topic: "3.6",
          lead: "Use the scenario to answer parts A, B, and C.",
          prompt: "Describe the constitutional protection the privacy group would most likely cite against Ridgemont's program.",
          earns: "The answer names the Fourth Amendment (or a right to privacy based on it) and describes it as protecting against unreasonable searches without a warrant based on probable cause.",
          yes: [
            "The Fourth Amendment, which protects people against unreasonable searches and seizures and generally requires a warrant based on probable cause.",
            "A right to privacy grounded in the Fourth Amendment, which limits the government from searching people who are not suspected of any crime.",
          ],
          no: [
            "\"The First Amendment.\" Riders are not being punished for speech.",
            "\"The right to privacy.\" Naming it without describing what it protects does not earn the point.",
          ],
          example: "The privacy group would cite the Fourth Amendment, which protects people against unreasonable searches and seizures and generally requires police to get a warrant based on probable cause. The city scans every rider's face without a warrant or any suspicion.",
          notExample: "The cameras are unfair to riders." },
        { id: "t36-ca1b", skill: "u3", type: "fr", set: "t36-s2", part: "Concept application", sub: "B", topic: "3.6",
          lead: "Use the scenario to answer parts A, B, and C.",
          prompt: "Explain how the debate over Ridgemont's program reflects the tension between individual liberty and public safety.",
          earns: "The answer identifies the safety goal (catching wanted people, preventing crime on buses) and the liberty cost (privacy of all riders) and explains that gaining one costs some of the other.",
          yes: [
            "The cameras may help police catch people with warrants and make buses safer, but they do so by scanning and storing the faces of thousands of innocent riders, so more safety costs riders their privacy.",
            "The council member values public safety, while the privacy group values freedom from government tracking; any choice the city makes gives up some of one to gain the other.",
          ],
          no: [
            "\"Some people like the cameras and some do not.\" This does not name the values in conflict.",
            "\"Safety is more important than liberty.\" This takes a side without explaining the tension.",
          ],
          example: "Ridgemont is trying to protect public safety by finding wanted people and deterring crime on buses. To do that, it scans and stores the faces of every rider, most of whom have done nothing wrong, which limits their liberty to move around the city without being tracked. The more the city watches, the safer buses may be, but the less privacy riders keep.",
          notExample: "The city wants cameras and the group does not." },
        { id: "t36-ca1c", skill: "u3", type: "fr", set: "t36-s2", part: "Concept application", sub: "C", topic: "3.6",
          lead: "Use the scenario to answer parts A, B, and C.",
          prompt: "Explain how the privacy group could use a method other than a lawsuit to change Ridgemont's policy.",
          earns: "The answer describes a non-court method (petition, lobbying council members, elections, public campaign, ballot initiative) and explains how it could lead the council to change the policy.",
          yes: [
            "The group's petition shows council members how many voters oppose the cameras, and members who want to be reelected may vote to end or limit the program.",
            "The group could lobby council members and testify at hearings to push for a rule that deletes scans of innocent riders right away.",
          ],
          no: [
            "\"They could go to the Supreme Court.\" The prompt asks for a method other than a lawsuit.",
            "\"They could protest.\" This names an action without explaining how it would change the policy.",
          ],
          example: "The privacy group is collecting signatures and lobbying council members. If the petition shows that many voters oppose the program, council members who want to keep their seats have a reason to vote to end the cameras or to require warrants and quick deletion of scans.",
          notExample: "They could tell people about it." },
      ] },
  ],
};

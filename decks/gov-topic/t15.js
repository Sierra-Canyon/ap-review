// Topic 1.5 Quiz: Ratification of the U.S. Constitution
// Sources: Article I, Sections 2 and 9 of the Constitution (National Archives transcription) and a scenario about Senate representation.

export const sets = {
  "t15-s1": {
    id: "t15-s1", name: "Two clauses about slavery in Article I", intro: "Use the passage below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "Article I, Section 2. ... Representatives and direct Taxes shall be apportioned among the several States which may be included within this Union, according to their respective Numbers, which shall be determined by adding to the whole Number of free Persons, including those bound to Service for a Term of Years, and excluding Indians not taxed, three fifths of all other Persons. ..." },
        { p: "Article I, Section 9. The Migration or Importation of such Persons as any of the States now existing shall think proper to admit, shall not be prohibited by the Congress prior to the Year one thousand eight hundred and eight, but a Tax or duty may be imposed on such Importation, not exceeding ten dollars for each Person." },
        { cite: "Constitution of the United States, Article I, Section 2, Clause 3, and Section 9, Clause 1, 1787, National Archives transcription. \"All other Persons\" and \"such Persons\" refer to enslaved people; the Constitution never uses the word slavery until the Thirteenth Amendment.", url: "https://www.archives.gov/founding-docs/constitution-transcript", kind: "primary" },
      ] },
    ],
  },
  "t15-s2": {
    id: "t15-s2", name: "A proposal to give large states more senators", intro: "Use the scenario below to answer parts A, B, and C.",
    sources: [
      { title: "Scenario", blocks: [
        { p: "A member of Congress from one of the most populous states introduces a constitutional amendment. It would give each state one senator for every five million residents, with a minimum of one. She points out that the two senators from a state with fewer than 600,000 people have the same voting power as the two senators from a state with nearly 40 million. Senators from small states quickly announce their opposition. A law professor testifies that the amendment faces an obstacle that most amendments do not, because of a clause at the end of Article V." },
        { cite: "Scenario written for this review.", kind: "scenario" },
      ] },
    ],
  },
};

const S = "u1", T = "1.5";

export default {
  forms: [
    { id: "t15", name: "Topic 1.5 Quiz: Ratification of the U.S. Constitution", group: "Unit 1: Foundations of American Democracy",
      items: [
        { id: "t15-m01", skill: S, type: "mcq", set: "t15-s1", topic: T, difficulty: "moderate",
          question: "Which states gained the most from the rule in the Section 2 clause?",
          choices: [
            "Southern states, which gained House seats by counting people they held in slavery",
            "Northern states, which gained House seats because they had more free residents",
            "Small states, which gained an equal number of seats in the House of Representatives",
            "Western territories, which gained seats in the House before they became states",
          ],
          why: [
            "Correct. Counting three-fifths of enslaved people added to the population of Southern states, giving them more House seats, and later more electoral votes, than their free populations alone would have.",
            "Northern delegates wanted enslaved people left out of the count, which would have helped the North. The compromise gave the South extra seats instead.",
            "The clause apportions seats by population, so small states did not gain equal seats. Equal representation is in the Senate.",
            "The clause applies to \"States which may be included within this Union.\" Territories receive no House seats.",
          ],
          answer: 0 },
        { id: "t15-m02", skill: S, type: "mcq", set: "t15-s1", topic: T, difficulty: "difficult",
          question: "The Section 9 clause is best described as evidence that the Convention",
          choices: [
            "put off, rather than settled, the slave trade question",
            "abolished the slave trade as of the year 1808",
            "left every question about slavery to the national courts",
            "denied Congress any power over imports of any kind",
          ],
          why: [
            "Correct. The clause barred Congress from banning the importation of enslaved people until 1808, putting off the issue for twenty years. Congress then passed a ban that took effect January 1, 1808.",
            "The clause did not abolish anything. It only kept Congress from acting before 1808; a later law of Congress ended the legal trade.",
            "The clause limits Congress, not the courts, and it says nothing about judicial power.",
            "The clause even allows a tax of up to ten dollars on each person imported, and Article I, Section 8 gives Congress power over foreign commerce.",
          ],
          answer: 0 },
        { id: "t15-m03", skill: S, type: "mcq", set: "t15-s1", topic: T, difficulty: "moderate",
          question: "Which amendment replaced the counting rule in the Section 2 clause with a count of \"the whole number of persons in each State\"?",
          choices: ["The Fourteenth Amendment", "The Thirteenth Amendment", "The Fifteenth Amendment", "The Seventeenth Amendment"],
          why: [
            "Correct. Section 2 of the Fourteenth Amendment (1868) apportions representatives by \"counting the whole number of persons in each State, excluding Indians not taxed,\" ending the three-fifths rule.",
            "The Thirteenth Amendment (1865) abolished slavery but did not rewrite the apportionment clause.",
            "The Fifteenth Amendment (1870) barred denying the vote because of race. It did not change how seats are apportioned.",
            "The Seventeenth Amendment (1913) provided for the direct election of senators.",
          ],
          answer: 0 },
        { id: "t15-m04", skill: S, type: "mcq", topic: T, difficulty: "easy",
          question: "The Great Compromise is also called the Connecticut Compromise because",
          choices: [
            "Connecticut delegates Roger Sherman and Oliver Ellsworth proposed it",
            "Connecticut was the first state to ratify the new Constitution",
            "the Constitutional Convention held its meetings in Hartford",
            "Connecticut had the largest population of any state in 1787",
          ],
          why: [
            "Correct. Sherman and Ellsworth proposed a House based on population and a Senate with equal votes for each state, which broke the deadlock between large and small states.",
            "Delaware was the first state to ratify, in December 1787.",
            "The Convention met in Philadelphia, in the Pennsylvania State House.",
            "Virginia had the largest population. Connecticut was a middle-sized state.",
          ],
          answer: 0 },
        { id: "t15-m05", skill: S, type: "mcq", topic: T, difficulty: "moderate",
          question: "Article VII required ratification by special conventions in the states rather than by state legislatures. Supporters of the Constitution preferred conventions mainly because",
          choices: [
            "elected delegates would rest the Constitution on the people and bypass resistant legislatures",
            "state legislatures had no meetings scheduled between 1787 and 1789 and could not have voted in time",
            "the Articles of Confederation required that any new plan of government be approved by conventions",
            "conventions could amend the document before approving it, and legislatures could only accept it whole",
          ],
          why: [
            "Correct. Ratification by conventions chosen by the voters rested the Constitution on popular sovereignty and avoided state legislators who might oppose a plan that reduced their power.",
            "State legislatures met regularly. Timing was not the reason for choosing conventions.",
            "The Articles required amendments to be confirmed by every state legislature. Article VII departed from that rule rather than following it.",
            "Conventions could not amend the text. They voted it up or down, though several recommended amendments.",
          ],
          answer: 0 },
        { id: "t15-m06", skill: S, type: "mcq", topic: T, difficulty: "easy",
          question: "The Philadelphia Convention of 1787 was called for the stated purpose of",
          choices: [
            "revising the Articles of Confederation",
            "writing a declaration of independence",
            "drafting a bill of rights for the states",
            "choosing the first president of the nation",
          ],
          why: [
            "Correct. Congress endorsed the meeting \"for the sole and express purpose of revising the Articles of Confederation.\" The delegates instead wrote a new constitution.",
            "The Declaration of Independence was adopted in 1776, eleven years earlier.",
            "The Bill of Rights was proposed by the First Congress in 1789 and applied to the national government.",
            "George Washington was chosen by presidential electors in 1789, after the Constitution took effect.",
          ],
          answer: 0 },
        { id: "t15-m07", skill: S, type: "mcq", topic: T, difficulty: "difficult",
          question: "In Federalist No. 84, Alexander Hamilton argued against adding a bill of rights to the Constitution. Which argument did he make?",
          choices: [
            "Listing rights might imply powers the government was never given",
            "Rights would be safer if state courts could overturn any national law",
            "The Articles of Confederation already contained a complete bill of rights",
            "Only a second national convention could protect rights after ratification",
          ],
          why: [
            "Correct. Hamilton argued that a bill of rights was unnecessary because the national government had only enumerated powers, and dangerous because declaring that things shall not be done that there is no power to do could be read to imply such a power.",
            "Hamilton defended national supremacy and federal courts. He did not want state courts to overturn national laws.",
            "The Articles of Confederation contained no bill of rights.",
            "Hamilton opposed a second convention. Amendments could be added through Article V.",
          ],
          answer: 0 },
        { id: "t15-m08", skill: S, type: "mcq", topic: T, difficulty: "moderate",
          question: "Which current debate most directly continues the Federalist and Anti-Federalist argument over national power?",
          choices: [
            "Whether states and cities must help federal agents enforce immigration law",
            "Whether the president may veto a bill passed by both houses of Congress",
            "Whether members of the House should be elected every two years",
            "Whether a state may print its own paper money for use as currency",
          ],
          why: [
            "Correct. Disputes over whether state and local officials must assist federal immigration enforcement turn on the balance between national power and state authority, the core question of the ratification debate.",
            "The veto is settled in Article I, Section 7, and it concerns the branches, not the national and state governments.",
            "Two-year House terms are fixed by Article I, Section 2 and are not a federal and state dispute.",
            "Article I, Section 10 forbids states to issue paper money, and this is not an active debate.",
          ],
          answer: 0 },
        { id: "t15-ca1a", skill: S, type: "fr", set: "t15-s2", part: "Concept application", sub: "A", topic: T,
          lead: "Use the scenario to answer parts A, B, and C.",
          prompt: "Describe the compromise at the Constitutional Convention that produced equal representation of the states in the Senate.",
          earns: "Describes the Great (Connecticut) Compromise: a House apportioned by population, favored by large states (the Virginia Plan), and a Senate with two members from each state, favored by small states (the New Jersey Plan).",
          yes: [
            "The Great Compromise blended the Virginia Plan's population-based representation with the New Jersey Plan's equal representation, creating a House by population and a Senate with two senators per state.",
            "Large states wanted seats by population and small states wanted equal votes, so the Connecticut Compromise gave each side one chamber.",
          ],
          no: [
            "\"The Great Compromise.\" (Named but not described.)",
            "\"The Three-Fifths Compromise gave each state two senators.\" (Wrong compromise.)",
          ],
          example: "At the Convention, large states backed the Virginia Plan, which based representation on population, while small states backed the New Jersey Plan, which gave each state an equal vote. The Great Compromise created a two-house Congress: the House is apportioned by population, and the Senate gives every state two senators.",
          notExample: "The framers compromised so everyone would be happy." },
        { id: "t15-ca1b", skill: S, type: "fr", set: "t15-s2", part: "Concept application", sub: "B", topic: T,
          lead: "Use the scenario to answer parts A, B, and C.",
          prompt: "Explain why senators from small states oppose the proposed amendment.",
          earns: "Explains that equal representation gives small states power in the Senate far beyond their share of the population, which the amendment would take away, and links this to the original small-state concern.",
          yes: [
            "Equal representation lets small states block bills, treaties, and nominees in the Senate; with seats by population they would lose that leverage and be outvoted by large states.",
            "Small states agreed to the Constitution only because the Senate protected them from domination by large states, so their senators see the amendment as breaking that bargain.",
          ],
          no: [
            "\"They do not want to lose their jobs.\" (Personal motive, with no link to representation.)",
            "\"Small states have more people.\" (Inaccurate.)",
          ],
          example: "Because every state has two senators, a small state's voters have far more influence in the Senate than their share of the population. Under the amendment, a state with 600,000 people would have one senator while a state with nearly 40 million would have seven, so small states would lose the protection against domination by large states that the Great Compromise gave them.",
          notExample: "Small-state senators disagree with the member of Congress." },
        { id: "t15-ca1c", skill: S, type: "fr", set: "t15-s2", part: "Concept application", sub: "C", topic: T,
          lead: "Use the scenario to answer parts A, B, and C.",
          prompt: "Explain the obstacle in Article V that the law professor describes.",
          earns: "Explains that Article V says no state may be deprived of its equal suffrage in the Senate without its consent, so the amendment would need the consent of each state that would lose equal representation, beyond the usual two-thirds and three-fourths votes.",
          yes: [
            "Article V says no state, \"without its Consent,\" may lose its equal vote in the Senate, so even after ratification by three-fourths of the states, any small state that refused could block the change for itself.",
            "The usual route needs two-thirds of Congress and three-fourths of the states, but the equal suffrage clause adds a requirement that each affected state agree.",
          ],
          no: [
            "\"Amendments are hard to pass.\" (Describes the usual difficulty, not the special obstacle.)",
            "\"The Supreme Court would have to approve it.\" (The Court has no role in approving amendments.)",
          ],
          example: "The last clause of Article V says that \"no State, without its Consent, shall be deprived of its equal Suffrage in the Senate.\" So in addition to the two-thirds vote in Congress and ratification by three-fourths of the states, the amendment would need the consent of each small state that would lose its equal vote, and those states have every reason to refuse.",
          notExample: "The president could veto the amendment." },
      ] },
  ],
};

// Topic 1.4 Quiz: Challenges of the Articles of Confederation
// Sources: Articles V, IX, and XIII of the Articles of Confederation (Avalon Project) and a scenario about a student council charter.

export const sets = {
  "t14-s1": {
    id: "t14-s1", name: "Voting and amendment rules in the Articles of Confederation", intro: "Use the passage below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "Article V. ... In determining questions in the United States in Congress assembled, each State shall have one vote." },
        { p: "Article IX. ... The United States in Congress assembled shall never engage in a war, nor grant letters of marque or reprisal in time of peace, nor enter into any treaties or alliances, nor coin money, nor regulate the value thereof, nor ascertain the sums and expenses necessary for the defense and welfare of the United States, or any of them, nor emit bills, nor borrow money on the credit of the United States, nor appropriate money, ... unless nine States assent to the same ..." },
        { p: "Article XIII. ... nor shall any alteration at any time hereafter be made in any of them; unless such alteration be agreed to in a Congress of the United States, and be afterwards confirmed by the legislatures of every State." },
        { cite: "Articles of Confederation, agreed to by Congress November 15, 1777, ratified March 1, 1781, as published by the Avalon Project, Yale Law School. \"Emit bills\" means issue paper money.", url: "https://avalon.law.yale.edu/18th_century/artconf.asp", kind: "primary" },
      ] },
    ],
  },
  "t14-s2": {
    id: "t14-s2", name: "A student council charter", intro: "Use the scenario below to answer parts A, B, and C.",
    sources: [
      { title: "Scenario", blocks: [
        { p: "Thirteen clubs at a large high school form a student council. Under the council's charter, each club sends delegates but casts one vote, whether it has 12 members or 200. Major decisions, such as spending money, need the votes of nine clubs. The council may ask each club to contribute money for school events, but it has no power to collect dues, and several clubs never pay. There is no council president to carry out decisions. The charter can be changed only if all thirteen clubs agree. When the council tried to add a modest fee for the spring dance, one club voted no, and the change failed." },
        { cite: "Scenario written for this review.", kind: "scenario" },
      ] },
    ],
  },
};

const S = "u1", T = "1.4";

export default {
  forms: [
    { id: "t14", name: "Topic 1.4 Quiz: Challenges of the Articles of Confederation", group: "Unit 1: Foundations of American Democracy",
      items: [
        { id: "t14-m01", skill: S, type: "mcq", set: "t14-s1", topic: T, difficulty: "easy",
          question: "The excerpt from Article XIII shows which weakness of the Articles?",
          choices: [
            "Every state legislature had to approve any change",
            "Congress could not regulate trade between the states",
            "There was no national court to settle disputes between states",
            "Congress had to ask the states for money instead of taxing",
          ],
          why: [
            "Correct. Article XIII allowed no alteration unless it was \"confirmed by the legislatures of every State,\" so a single state could block any reform.",
            "The lack of a commerce power was a real weakness, but the Article XIII excerpt concerns amendments, not trade.",
            "The lack of national courts was a real weakness, but it is not what Article XIII describes.",
            "Dependence on state contributions was a real weakness, but it is described elsewhere in the Articles, not in Article XIII.",
          ],
          answer: 0 },
        { id: "t14-m02", skill: S, type: "mcq", set: "t14-s1", topic: T, difficulty: "moderate",
          question: "How did the Constitution change the rule stated in the excerpt from Article V?",
          choices: [
            "House seats by population; each senator casts an individual vote",
            "Each state kept one vote, but a simple majority could pass any law",
            "States received votes in Congress based on the land each one owned",
            "Each state's governor received one vote on every bill in Congress",
          ],
          why: [
            "Correct. Under the Great Compromise, House seats are apportioned by population (Article I, Section 2), and each state has two senators who \"shall have one Vote\" each (Article I, Section 3), replacing one vote per state.",
            "The Constitution did not keep one vote per state. Members of Congress vote as individuals.",
            "Land was the basis for dividing war expenses under Article VIII of the Articles. Representation under the Constitution is based on population.",
            "Governors have no vote in Congress under either document.",
          ],
          answer: 0 },
        { id: "t14-m03", skill: S, type: "mcq", set: "t14-s1", topic: T, difficulty: "difficult",
          question: "The rule requiring nine states for major decisions and the rule requiring every state for amendments both reflect the framers of the Articles' wish to",
          choices: [
            "protect each state's sovereignty from a central government acting against its will",
            "keep the national executive from using military force without the states' consent",
            "give the most populous states control over taxation and spending decisions",
            "make sure the courts could review every national law before it took effect",
          ],
          why: [
            "Correct. Having just fought a distant, centralized power, the authors of the Articles wanted the states to remain sovereign. Supermajority and unanimity rules let a few states, or even one, stop the national government.",
            "The Articles created no national executive at all, so there was no executive to restrain.",
            "Each state had one vote, so the large states had no special control. Large states objected to this rule.",
            "The Articles created no national court system with power to review laws.",
          ],
          answer: 0 },
        { id: "t14-m04", skill: S, type: "mcq", topic: T, difficulty: "easy",
          question: "Under the Articles of Confederation, most governing power rested with",
          choices: ["the states", "Congress", "a national council", "the courts"],
          why: [
            "Correct. Article II of the Articles let each state keep its \"sovereignty, freedom, and independence\" and every power not expressly delegated to Congress.",
            "Congress was the only national institution, but it had few powers and depended on the states to act.",
            "The Articles created no national executive council. A Committee of the States could act only when Congress was in recess.",
            "The Articles created no national court system.",
          ],
          answer: 0 },
        { id: "t14-m05", skill: S, type: "mcq", topic: T, difficulty: "easy",
          question: "After the 1783 peace treaty with Britain, several states passed laws that kept British creditors from collecting debts the treaty protected. Congress could do little about it because",
          choices: [
            "it had no executive or courts to enforce national commitments",
            "the treaty had never been approved by a vote of Congress",
            "the Articles gave the states sole power over foreign treaties",
            "Britain had agreed that each state could decide which debts to pay",
          ],
          why: [
            "Correct. The Articles gave Congress the treaty power but no executive to enforce treaties and no national courts to overrule state laws, so states could ignore national obligations.",
            "Congress ratified the Treaty of Paris in 1784. The problem was enforcement, not approval.",
            "Article IX gave Congress, not the states, the power to make treaties.",
            "The treaty said creditors should meet no lawful impediment to recovering debts. Britain did not leave the matter to each state.",
          ],
          answer: 0 },
        { id: "t14-m06", skill: S, type: "mcq", topic: T, difficulty: "moderate",
          question: "The Annapolis Convention of 1786 is significant mainly because its delegates",
          choices: [
            "called for a wider meeting in Philadelphia to fix the system",
            "drafted the amendments that later became the Bill of Rights in 1791",
            "voted to give Congress a power to tax imports from abroad",
            "approved the plan of government known as the Virginia Plan",
          ],
          why: [
            "Correct. Only five states sent delegates to Annapolis to discuss trade. Unable to act, they called for a convention in Philadelphia in May 1787 to revise the federal government.",
            "Madison drafted the Bill of Rights in 1789, after the Constitution took effect.",
            "The Annapolis delegates had no power to change the Articles, and an import tax needed every state's approval.",
            "The Virginia Plan was introduced at the Philadelphia Convention in 1787, not at Annapolis.",
          ],
          answer: 0 },
        { id: "t14-m07", skill: S, type: "mcq", topic: T, difficulty: "difficult",
          question: "Which choice correctly pairs a problem under the Articles with the provision of the Constitution that addressed it?",
          choices: [
            "States taxed one another's goods: the Commerce Clause (Article I)",
            "Congress could not tax: the Supremacy Clause in Article VI, Clause 2",
            "No national courts existed: the amendment process in Article V",
            "Amendments needed unanimity: the judicial power in Article III",
          ],
          why: [
            "Correct. Under the Articles, states placed duties on goods from neighboring states. The Commerce Clause gave Congress power to regulate commerce \"among the several States.\"",
            "The problem is real, but the fix was the taxing power in Article I, Section 8. The Supremacy Clause settles conflicts between federal and state law.",
            "The problem is real, but the fix was Article III, which created the Supreme Court and let Congress create lower courts.",
            "The problem is real, but the fix was Article V, which requires three-fourths of the states rather than all of them.",
          ],
          answer: 0 },
        { id: "t14-m08", skill: S, type: "mcq", topic: T, difficulty: "moderate",
          question: "Which was an achievement of Congress under the Articles of Confederation?",
          choices: [
            "The Northwest Ordinance, a plan for admitting new states",
            "A national currency that ended the use of state paper money",
            "A national army that put down Shays' Rebellion in 1787",
            "A tariff on imports that paid off the Revolutionary War debt",
          ],
          why: [
            "Correct. The Northwest Ordinance of 1787 set out how territories north of the Ohio River would be governed and admitted as equal states, and it barred slavery there.",
            "Congress could not stop states from issuing their own paper money. A uniform currency came under the Constitution.",
            "Massachusetts put down Shays' Rebellion with a militia funded largely by private donors, because Congress could not raise an army.",
            "Proposals for a national import tax failed because one state could block them. The war debt went largely unpaid.",
          ],
          answer: 0 },
        { id: "t14-ca1a", skill: S, type: "fr", set: "t14-s2", part: "Concept application", sub: "A", topic: T,
          lead: "Use the scenario to answer parts A, B, and C.",
          prompt: "Describe one weakness of the Articles of Confederation that the student council's charter shares.",
          earns: "Describes a specific weakness of the Articles (no taxing power, one vote per state regardless of size, nine of thirteen for major decisions, unanimity for amendments, or no executive) and links it to the charter.",
          yes: [
            "Like Congress under the Articles, the council cannot collect money and must ask clubs to contribute, and some never pay.",
            "Like the Articles, the charter can be changed only with unanimous consent, so one club blocked the dance fee.",
          ],
          no: [
            "\"The council is weak.\" (No specific weakness of the Articles is described.)",
            "\"The Articles had a president who could veto laws.\" (Inaccurate; the Articles had no executive.)",
          ],
          example: "Like Congress under the Articles of Confederation, the council has no power to tax. Congress could only ask the states for money, and states often failed to pay, just as some clubs never pay what the council requests.",
          notExample: "The council has too many clubs in it." },
        { id: "t14-ca1b", skill: S, type: "fr", set: "t14-s2", part: "Concept application", sub: "B", topic: T,
          lead: "Use the scenario to answer parts A, B, and C.",
          prompt: "Explain how the Constitution addressed the weakness you described in part A.",
          earns: "Explains a specific constitutional fix that matches the weakness (Article I, Section 8 taxing power; Article V three-fourths rule; the Great Compromise; Article II executive) and how it solved the problem.",
          yes: [
            "Article I, Section 8 gives Congress power to lay and collect taxes directly, so the national government no longer depends on the states to pay.",
            "Article V lets amendments take effect when three-fourths of the states ratify, so one state can no longer block a change.",
          ],
          no: [
            "\"The Constitution fixed the problem by being stronger.\" (Names no provision or mechanism.)",
            "\"The Bill of Rights let Congress tax.\" (Inaccurate.)",
          ],
          example: "The Constitution gave Congress the power to \"lay and collect Taxes\" in Article I, Section 8. Because the national government could collect revenue directly from individuals, it no longer had to rely on requests to the states, so it could pay its debts and fund an army.",
          notExample: "The framers wrote a new plan in Philadelphia." },
        { id: "t14-ca1c", skill: S, type: "fr", set: "t14-s2", part: "Concept application", sub: "C", topic: T,
          lead: "Use the scenario to answer parts A, B, and C.",
          prompt: "Explain why the authors of the Articles of Confederation chose to create a weak central government.",
          earns: "Explains that experience with the British king and Parliament led Americans to fear a strong, distant central government and to keep power in the states.",
          yes: [
            "Americans had just rebelled against a king and Parliament that taxed them without consent, so they feared any strong central government and kept power in the states.",
            "States saw themselves as sovereign and wanted to protect liberty by keeping government close to the people, so they gave Congress few powers.",
          ],
          no: [
            "\"They did not know how to write a constitution.\" (Not the reason, and not accurate.)",
            "\"They wanted a weak government.\" (Restates the prompt.)",
          ],
          example: "The authors of the Articles had just fought a war against a distant government that taxed them and stationed troops without their consent. Fearing that a strong central government would become another tyranny, they left sovereignty with the states and gave Congress no power to tax or enforce its decisions.",
          notExample: "They wanted the states to be happy." },
      ] },
  ],
};

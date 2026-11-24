// AP U.S. History review, Unit 5 (5.7 to 5.12): secession, the Civil War, Reconstruction and its end, and the period as a whole.
import { bars, lines } from "../../plot.js";
import { maps } from "./maps.js";

const PRACTICE = "Practice passage written for this review, summarizing an interpretation held by many historians.";

export const sets = {
  "a5b-s01": {
    id: "a5b-s01", name: "Two defenses of secession, 1861", intro: "Use the two excerpts below to answer the questions that follow.",
    sources: [
      { title: "Source 1", blocks: [
        { p: "Our position is thoroughly identified with the institution of slavery-- the greatest material interest of the world. Its labor supplies the product which constitutes by far the largest and most important portions of commerce of the earth. ... These products have become necessities of the world, and a blow at slavery is a blow at commerce and civilization. That blow has been long aimed at the institution, and was at the point of reaching its consummation. There was no choice left us but submission to the mandates of abolition, or a dissolution of the Union, whose principles had been subverted to work out our ruin." },
        { cite: "Mississippi Secession Convention, \"A Declaration of the Immediate Causes which Induce and Justify the Secession of the State of Mississippi from the Federal Union,\" January 1861. A proslavery document.", url: "https://avalon.law.yale.edu/19th_century/csa_missec.asp", kind: "primary" },
      ] },
      { title: "Source 2", blocks: [
        { p: "Our present political position has been achieved in a manner unprecedented in the history of nations. It illustrates the American idea that governments rest on the consent of the governed, and that it is the right of the people to alter or abolish them at will whenever they become destructive of the ends for which they were established. ... and when, in the judgment of the sovereign States composing this Confederacy, it has been perverted from the purposes for which it was ordained, and ceased to answer the ends for which it was established, a peaceful appeal to the ballot box declared that, so far as they are concerned, the Government created by that compact should cease to exist. In this they merely asserted the right which the Declaration of Independence of July 4, 1776, defined to be inalienable." },
        { cite: "Jefferson Davis, Inaugural Address as President of the Provisional Government of the Confederate States of America, Montgomery, Alabama, February 18, 1861.", url: "https://avalon.law.yale.edu/19th_century/csa_csainau.asp", kind: "primary" },
      ] },
    ],
  },
};

export default [
  { id: "a5b-m001", skill: "u5", type: "mcq", set: "a5b-s01", topic: "5.7", difficulty: "easy", reasoning: "Causation",
    question: "According to Source 1, Mississippi left the Union mainly to",
    choices: [
      "protect slavery from a growing threat of abolition",
      "protest high protective tariffs on imported goods",
      "resist the Supreme Court's ruling in Dred Scott",
      "keep Congress from admitting California as a state",
    ],
    why: [
      "Correct. The Mississippi convention's declaration of January 1861 says its position is \"thoroughly identified with the institution of slavery\" and that the only choices left were submitting to abolition or leaving the Union.",
      "Tariffs had caused the Nullification Crisis of 1832 to 1833, but this excerpt never mentions them; it names slavery as the issue.",
      "Dred Scott v. Sandford (1857) ruled that Congress could not ban slavery in the territories, a ruling the slave states welcomed, not resisted.",
      "California entered the Union as a free state under the Compromise of 1850, more than ten years before this declaration.",
    ],
    answer: 0 },
  { id: "a5b-m002", skill: "u5", type: "mcq", set: "a5b-s01", topic: "5.7", difficulty: "moderate", reasoning: "Continuity and Change",
    question: "In Source 2, Davis justifies secession mainly by drawing on which earlier idea?",
    choices: [
      "The Declaration's claim that a people may alter or abolish a government",
      "The Federalist's claim that a large republic best controls factions",
      "Washington's warning in his Farewell Address against sectional parties",
      "The Northwest Ordinance's rule that new states join as equals",
    ],
    why: [
      "Correct. Davis says secession \"merely asserted the right which the Declaration of Independence of July 4, 1776, defined to be inalienable,\" the right of the people to alter or abolish a government that fails its ends.",
      "Madison's Federalist No. 10 (1787) argued for a large union, the opposite of what Davis defends.",
      "Washington's Farewell Address (1796) warned against sectional parties to hold the Union together; Davis is defending its breakup.",
      "The Northwest Ordinance (1787) did promise new states equal footing, but Davis does not mention it; his appeal is to 1776.",
    ],
    answer: 0 },
  { id: "a5b-m003", skill: "u5", type: "mcq", set: "a5b-s01", topic: "5.7", difficulty: "difficult", reasoning: "Comparison",
    question: "Which of the following best describes a difference between the two sources?",
    choices: [
      "Source 1 names slavery as the cause, while Source 2 appeals to consent and state sovereignty.",
      "Source 1 calls for a negotiated return, while Source 2 announces a permanent Confederate break.",
      "Source 1 appeals to the British market, while Source 2 appeals to Northern Democrats for support.",
      "Source 1 rests on the Constitution, while Source 2 rejects the Constitution as a proslavery compact.",
    ],
    why: [
      "Correct. Mississippi's declaration ties secession directly to slavery, while Davis, speaking to a wider audience in February 1861, frames it as the people's right to alter a government, without naming slavery.",
      "Mississippi calls the choice submission or \"dissolution of the Union\" and seeks no return; both sources defend leaving.",
      "Source 1 mentions world commerce but makes no appeal to Britain, and Source 2 makes no appeal to Northern Democrats.",
      "Calling the Constitution a proslavery compact was the view of the abolitionist William Lloyd Garrison; Davis praises the original compact's purposes.",
    ],
    answer: 0 },
  { id: "a5b-m004", skill: "u5", type: "mcq", set: "a5b-s01", topic: "5.7", difficulty: "moderate", reasoning: "Causation",
    question: "Which of the following most directly prompted both sources?",
    choices: [
      "Lincoln's election on a platform opposing slavery's spread",
      "The Confederate firing on Fort Sumter in April 1861",
      "John Brown's raid on the arsenal at Harpers Ferry in 1859",
      "The Senate's rejection of the Crittenden plan in March 1861",
    ],
    why: [
      "Correct. Abraham Lincoln won the presidency in November 1860 on a Republican platform opposing slavery in the territories, and the Deep South states seceded in the weeks after.",
      "Fort Sumter came in April 1861, after both sources; it set off the war and a second wave of secession, not these documents.",
      "John Brown's raid in October 1859 deepened Southern fears, but secession came only after the 1860 election.",
      "The Crittenden plan failed in Congress in early 1861, but Mississippi had already seceded on January 9, 1861.",
    ],
    answer: 0 },
];

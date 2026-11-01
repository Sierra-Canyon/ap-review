// AP CSP · Quiz 3: Lists and Loops · mock quizzes 1 to 3, Part B (written responses)
// Same shape as the wr items in decks/csp-q3.js. Every block of code here is checked on .NET 10 by tools/verify.mjs.
// Mock 1: q3m1-b1 (wr-nolist), q3m1-b2 (wr-logic). Mock 2: q3m2-b1, q3m2-b2. Mock 3: q3m3-b1, q3m3-b2.

const PROMPT_NOLIST = "Consider the list included in part (i) of the List section of your Personalized Project Reference. Explain how the list uses abstraction to manage complexity in your program. Suppose the list was not included in your program. Describe how you would need to adjust the code segment in part (ii) of the List section of your Personalized Project Reference so that it has the same behavior. If it is not possible to have the same behavior without the use of the list, explain why.";
const PROMPT_LOGIC = "Consider the code segment in part (ii) of the List section of your Personalized Project Reference. Suppose another programmer modifies this code segment. Describe a modification the other programmer could make to this code segment that would result in a logic error. Explain why this modification would result in a logic error.";
const NOTE_NOLIST = "The exam gives its one point only when both halves are there.";
const NOTE_LOGIC = "A crash is a logic error if the response explains it. A syntax error is not, and \"the program will not run\" with no explanation earns nothing.";

// ---------------------------------------------------------------- Mock 1: TotalGold
const M1_LIST_I = `List<int> chests = new List<int>();
chests.Add(12);
chests.Add(5);
chests.Add(20);
chests.Add(8);`;
const M1_LIST_II = `int TotalGold(List<int> chests)
{
    int total = 0;
    for (int i = 0; i < chests.Count; i++)
    {
        total = total + chests[i];
    }
    return total;
}`;
const M1_CALL = "Console.WriteLine(TotalGold(chests));";
const M1_HEAD = `List<int> chests = new List<int> { 12, 5, 20, 8 };
Console.WriteLine(TotalGold(chests));`;

// ---------------------------------------------------------------- Mock 2: Strongest
const M2_LIST_I = `List<int> attack = new List<int>();
attack.Add(4);
attack.Add(9);
attack.Add(6);
attack.Add(11);`;
const M2_LIST_II = `int Strongest(List<int> attack)
{
    int best = attack[0];
    for (int i = 1; i < attack.Count; i++)
    {
        if (attack[i] > best)
        {
            best = attack[i];
        }
    }
    return best;
}`;
const M2_CALL = "Console.WriteLine(Strongest(attack));";
const M2_HEAD = `List<int> attack = new List<int> { 4, 9, 6, 11 };
Console.WriteLine(Strongest(attack));`;

// ---------------------------------------------------------------- Mock 3: LootValue
const M3_LIST_I = `List<string> loot = new List<string>();
loot.Add("coin");
loot.Add("gem");
loot.Add("coin");
loot.Add("rope");`;
const M3_LIST_II = `int LootValue(List<string> loot)
{
    int value = 0;
    for (int i = 0; i < loot.Count; i++)
    {
        if (loot[i] == "gem")
        {
            value = value + 10;
        }
        else if (loot[i] == "coin")
        {
            value = value + 1;
        }
    }
    return value;
}`;
const M3_CALL = "Console.WriteLine(LootValue(loot));";
const M3_HEAD = `List<string> loot = new List<string> { "coin", "gem", "coin", "rope" };
Console.WriteLine(LootValue(loot));`;

export default {
  items: [
    // ---------------------------------------------------------------- Mock 1, Part B
    {
      id: "q3m1-b1", skill: "wr-nolist", type: "wr",
      source: "2026 exam, question 2(c)",
      listI: M1_LIST_I,
      listII: M1_LIST_II,
      call: M1_CALL,
      prompt: PROMPT_NOLIST,
      rows: [
        {
          name: "How the list manages complexity",
          levels: [
            "Missing, or about some other program.",
            "Vague: it stores data or keeps things organized, with nothing about chests or TotalGold.",
            "One name, chests, holds the gold from every chest, so TotalGold has one parameter and the same loop adds up any number of chests.",
          ],
        },
        {
          name: "How List (ii) changes without the list",
          levels: [
            "Missing, or only about List (i), not TotalGold.",
            "Says separate variables would be used, but not what happens to TotalGold.",
            "A variable and a parameter for each chest, the loop replaced by one line that adds them (chest1 + chest2 + chest3 + chest4), and a new parameter, term in the sum, and argument for every chest added. Or: chests found while the game runs cannot be added up without the list.",
          ],
        },
      ],
      model: "The list chests holds the gold from every chest under one name. TotalGold takes that one list as its only parameter, and the loop adds chests[i] to total once for each chest, so the same function adds up 4 chests or 40 without changing.\n\nWithout the list, each chest needs its own variable: chest1, chest2, chest3, and chest4. TotalGold would need a parameter for each one, TotalGold(int chest1, int chest2, int chest3, int chest4), and the loop would be replaced by one line, return chest1 + chest2 + chest3 + chest4;. Every new chest means another variable, another parameter, another term in the sum, and a changed call. A chest the hero finds while the game is running would not be added at all until the code is rewritten.",
      note: NOTE_NOLIST,
      facts: "TotalGold(chests) is 45. After chests.Add(30); the same call gives 75, with no change to TotalGold. The four-variable version also gives 45, and still gives 45 after a fifth variable, chest5, is declared.",
      verify: {
        cases: [
          { run: `List<int> chests = new List<int> { 12, 5, 20, 8 };
Console.WriteLine(TotalGold(chests));
chests.Add(30);
Console.WriteLine(TotalGold(chests));
int TotalGold(List<int> chests) { int total = 0; for (int i = 0; i < chests.Count; i++) { total = total + chests[i]; } return total; }`, out: "45\n75" },
          { run: `int chest1 = 12; int chest2 = 5; int chest3 = 20; int chest4 = 8;
Console.WriteLine(TotalGold(chest1, chest2, chest3, chest4));
int chest5 = 30;
Console.WriteLine(TotalGold(chest1, chest2, chest3, chest4));
int TotalGold(int chest1, int chest2, int chest3, int chest4)
{
    return chest1 + chest2 + chest3 + chest4;
}`, out: "45\n45" },
        ],
      },
    },
    {
      id: "q3m1-b2", skill: "wr-logic", type: "wr",
      source: "2025 exam, Set 2, question 2(b)",
      listI: M1_LIST_I,
      listII: M1_LIST_II,
      call: M1_CALL,
      prompt: PROMPT_LOGIC,
      rows: [
        {
          name: "A modification to List (ii) that still runs",
          levels: [
            "None, a change that does not build (a missing semicolon or brace), or a change to the list instead of TotalGold.",
            "A change too vague to try (\"change the adding\").",
            "A specific change to TotalGold that builds and runs.",
          ],
        },
        {
          name: "Why it is a logic error, consistent with the code",
          levels: [
            "Missing, or the result described is not what the changed code does.",
            "Says it would be wrong, without saying what comes out wrong.",
            "Says what comes out wrong and why, with the total it gives for these chests.",
          ],
        },
      ],
      model: "The other programmer could change total = total + chests[i]; to total = chests[i];. It still builds and runs, but each pass replaces total instead of adding to it, so only the last chest is left when the loop ends. TotalGold(chests) gives 8 instead of 45, and the gold in the first three chests is lost with no warning.",
      note: NOTE_LOGIC,
      factsTable: [
        ["total = chests[i];", "8: each pass replaces total, so only the last chest counts"],
        ["int i = 1", "33: the 12 gold at index 0 is skipped"],
        ["total = total + i;", "6: it adds the indexes 0, 1, 2, and 3, not the gold"],
        ["i <= chests.Count", "nothing prints: a crash (ArgumentOutOfRangeException) when i is 4, before the total is returned"],
      ],
      verify: {
        cases: [
          { run: `${M1_HEAD}
int TotalGold(List<int> chests) { int total = 0; for (int i = 0; i < chests.Count; i++) { total = total + chests[i]; } return total; }`, out: "45" },
          { run: `${M1_HEAD}
int TotalGold(List<int> chests) { int total = 0; for (int i = 0; i < chests.Count; i++) { total = chests[i]; } return total; }`, out: "8" },
          { run: `${M1_HEAD}
int TotalGold(List<int> chests) { int total = 0; for (int i = 1; i < chests.Count; i++) { total = total + chests[i]; } return total; }`, out: "33" },
          { run: `${M1_HEAD}
int TotalGold(List<int> chests) { int total = 0; for (int i = 0; i < chests.Count; i++) { total = total + i; } return total; }`, out: "6" },
          { run: `${M1_HEAD}
int TotalGold(List<int> chests) { int total = 0; for (int i = 0; i <= chests.Count; i++) { total = total + chests[i]; } return total; }`, out: "", crash: "ArgumentOutOfRangeException" },
        ],
      },
    },

    // ---------------------------------------------------------------- Mock 2, Part B
    {
      id: "q3m2-b1", skill: "wr-nolist", type: "wr",
      source: "2026 exam, question 2(c)",
      listI: M2_LIST_I,
      listII: M2_LIST_II,
      call: M2_CALL,
      prompt: PROMPT_NOLIST,
      rows: [
        {
          name: "How the list manages complexity",
          levels: [
            "Missing, or about some other program.",
            "Vague: it stores data or keeps things organized, with nothing about attack or Strongest.",
            "One name, attack, holds the attack of every monster, so Strongest has one parameter and the same loop finds the highest attack in a list of any size.",
          ],
        },
        {
          name: "How List (ii) changes without the list",
          levels: [
            "Missing, or only about List (i), not Strongest.",
            "Says separate variables would be used, but not what happens to Strongest.",
            "A variable and a parameter for each monster, the loop replaced by a separate if for each attack after the first (not else if), and a new parameter, if, and argument for every monster added. Or: monsters that appear while the game runs cannot be compared without the list.",
          ],
        },
      ],
      model: "The list attack keeps the attack of every monster under one name. Strongest takes that one list, starts best at attack[0], and the loop compares every other attack with best, so the same function finds the highest attack among 4 monsters or 40.\n\nWithout the list, the attacks would be four variables, attack1 to attack4. Strongest would need a parameter for each one, best would start at attack1, and the loop would become three separate if statements: if attack2 is greater than best, best becomes attack2, then the same test for attack3 and for attack4. They have to be separate ifs, not else if, or the function stops at the first attack that beats best. Every new monster means another variable, another parameter, another if, and a changed call.",
      note: NOTE_NOLIST,
      facts: "Strongest(attack) is 11. After attack.Add(15); the same call gives 15, with no change to Strongest. The four-variable version with separate ifs is also 11. With else if it is 9: 9 beats 4, and the chain stops before 11 is checked.",
      verify: {
        cases: [
          { run: `List<int> attack = new List<int> { 4, 9, 6, 11 };
Console.WriteLine(Strongest(attack));
attack.Add(15);
Console.WriteLine(Strongest(attack));
int Strongest(List<int> attack) { int best = attack[0]; for (int i = 1; i < attack.Count; i++) { if (attack[i] > best) { best = attack[i]; } } return best; }`, out: "11\n15" },
          { run: `Console.WriteLine(Strongest(4, 9, 6, 11));
Console.WriteLine(StrongestElse(4, 9, 6, 11));
int Strongest(int attack1, int attack2, int attack3, int attack4)
{
    int best = attack1;
    if (attack2 > best) { best = attack2; }
    if (attack3 > best) { best = attack3; }
    if (attack4 > best) { best = attack4; }
    return best;
}
int StrongestElse(int attack1, int attack2, int attack3, int attack4)
{
    int best = attack1;
    if (attack2 > best) { best = attack2; }
    else if (attack3 > best) { best = attack3; }
    else if (attack4 > best) { best = attack4; }
    return best;
}`, out: "11\n9" },
        ],
      },
    },
    {
      id: "q3m2-b2", skill: "wr-logic", type: "wr",
      source: "2025 exam, Set 2, question 2(b)",
      listI: M2_LIST_I,
      listII: M2_LIST_II,
      call: M2_CALL,
      prompt: PROMPT_LOGIC,
      rows: [
        {
          name: "A modification to List (ii) that still runs",
          levels: [
            "None, a change that does not build (a missing semicolon or brace), or a change to the list instead of Strongest.",
            "A change too vague to try (\"change the if\").",
            "A specific change to Strongest that builds and runs.",
          ],
        },
        {
          name: "Why it is a logic error, consistent with the code",
          levels: [
            "Missing, or the result described is not what the changed code does (int i = 0 still gives 11).",
            "Says it would be wrong, without saying what comes out wrong.",
            "Says what comes out wrong and why, with the attack it gives for this list.",
          ],
        },
      ],
      model: "The other programmer could change > to < in the if. It still builds and runs, but now best changes only when an attack is smaller, so the function returns the lowest attack instead of the highest. Strongest(attack) gives 4, the weakest monster, instead of 11.",
      note: NOTE_LOGIC,
      factsTable: [
        ["< in place of >", "4: the lowest attack, not the highest"],
        ["i < attack.Count - 1", "9: the 11 at index 3 is never checked"],
        ["best = i; in place of best = attack[i];", "3: from the first change on, best holds an index, not an attack"],
        ["int i = 0", "11, still right: the first pass compares attack[0] with itself and changes nothing, so this is not a logic error"],
      ],
      verify: {
        cases: [
          { run: `${M2_HEAD}
int Strongest(List<int> attack) { int best = attack[0]; for (int i = 1; i < attack.Count; i++) { if (attack[i] > best) { best = attack[i]; } } return best; }`, out: "11" },
          { run: `${M2_HEAD}
Console.WriteLine(Strongest(new List<int> { 9, 4, 11, 6 }));
int Strongest(List<int> attack) { int best = attack[0]; for (int i = 1; i < attack.Count; i++) { if (attack[i] < best) { best = attack[i]; } } return best; }`, out: "4\n4" },
          { run: `${M2_HEAD}
int Strongest(List<int> attack) { int best = attack[0]; for (int i = 1; i < attack.Count - 1; i++) { if (attack[i] > best) { best = attack[i]; } } return best; }`, out: "9" },
          { run: `${M2_HEAD}
int Strongest(List<int> attack) { int best = attack[0]; for (int i = 1; i < attack.Count; i++) { if (attack[i] > best) { best = i; } } return best; }`, out: "3" },
          { run: `${M2_HEAD}
int Strongest(List<int> attack) { int best = attack[0]; for (int i = 0; i < attack.Count; i++) { if (attack[i] > best) { best = attack[i]; } } return best; }`, out: "11" },
        ],
      },
    },

    // ---------------------------------------------------------------- Mock 3, Part B
    {
      id: "q3m3-b1", skill: "wr-nolist", type: "wr",
      source: "2026 exam, question 2(c)",
      listI: M3_LIST_I,
      listII: M3_LIST_II,
      call: M3_CALL,
      prompt: PROMPT_NOLIST,
      rows: [
        {
          name: "How the list manages complexity",
          levels: [
            "Missing, or about some other program.",
            "Vague: it stores data or keeps things organized, with nothing about loot or LootValue.",
            "One name, loot, holds every item the hero picked up, so LootValue has one parameter and the same loop prices a pile of any size.",
          ],
        },
        {
          name: "How List (ii) changes without the list",
          levels: [
            "Missing, or only about List (i), not LootValue.",
            "Says separate variables would be used, but not what happens to LootValue.",
            "A variable and a parameter for each item, the loop replaced by an if and else if for each item, each item starting with a new if (not one long else if chain), and a new parameter, pair of tests, and argument for every item picked up. Or: loot that grows while the game runs cannot be priced without the list.",
          ],
        },
      ],
      model: "The list loot keeps every item the hero picked up under one name. LootValue takes that one list, and the loop runs the same two tests on every item, adding 10 for a gem and 1 for a coin, so the same function prices 4 items or 40.\n\nWithout the list, the items would be four variables, loot1 to loot4. LootValue would need a parameter for each one, and the loop would be replaced by four copies of the tests: if loot1 is gem add 10, else if loot1 is coin add 1, then a new if for loot2, and the same for loot3 and loot4. Each item needs its own if. Chained into one long else if, the function stops adding after the first item that matches. Every item picked up means another variable, another parameter, another pair of tests, and a changed call.",
      note: NOTE_NOLIST,
      facts: "LootValue(loot) is 12. After loot.Add(\"gem\"); the same call gives 22, with no change to LootValue. The four-variable version with a new if for each item is also 12. With one long else if chain it is 1: loot1 is a coin, and the chain stops there.",
      verify: {
        cases: [
          { run: `List<string> loot = new List<string> { "coin", "gem", "coin", "rope" };
Console.WriteLine(LootValue(loot));
loot.Add("gem");
Console.WriteLine(LootValue(loot));
int LootValue(List<string> loot) { int value = 0; for (int i = 0; i < loot.Count; i++) { if (loot[i] == "gem") { value = value + 10; } else if (loot[i] == "coin") { value = value + 1; } } return value; }`, out: "12\n22" },
          { run: `Console.WriteLine(LootValue("coin", "gem", "coin", "rope"));
Console.WriteLine(LootChain("coin", "gem", "coin", "rope"));
int LootValue(string loot1, string loot2, string loot3, string loot4)
{
    int value = 0;
    if (loot1 == "gem") { value = value + 10; }
    else if (loot1 == "coin") { value = value + 1; }
    if (loot2 == "gem") { value = value + 10; }
    else if (loot2 == "coin") { value = value + 1; }
    if (loot3 == "gem") { value = value + 10; }
    else if (loot3 == "coin") { value = value + 1; }
    if (loot4 == "gem") { value = value + 10; }
    else if (loot4 == "coin") { value = value + 1; }
    return value;
}
int LootChain(string loot1, string loot2, string loot3, string loot4)
{
    int value = 0;
    if (loot1 == "gem") { value = value + 10; }
    else if (loot1 == "coin") { value = value + 1; }
    else if (loot2 == "gem") { value = value + 10; }
    else if (loot2 == "coin") { value = value + 1; }
    else if (loot3 == "gem") { value = value + 10; }
    else if (loot3 == "coin") { value = value + 1; }
    else if (loot4 == "gem") { value = value + 10; }
    else if (loot4 == "coin") { value = value + 1; }
    return value;
}`, out: "12\n1" },
        ],
      },
    },
    {
      id: "q3m3-b2", skill: "wr-logic", type: "wr",
      source: "2025 exam, Set 2, question 2(b)",
      listI: M3_LIST_I,
      listII: M3_LIST_II,
      call: M3_CALL,
      prompt: PROMPT_LOGIC,
      rows: [
        {
          name: "A modification to List (ii) that still runs",
          levels: [
            "None, a change that does not build (a missing semicolon or brace), or a change to the list instead of LootValue.",
            "A change too vague to try (\"change the tests\").",
            "A specific change to LootValue that builds and runs.",
          ],
        },
        {
          name: "Why it is a logic error, consistent with the code",
          levels: [
            "Missing, or the result described is not what the changed code does (if in place of else if still gives 12).",
            "Says it would be wrong, without saying what comes out wrong.",
            "Says what comes out wrong and why, with the value it gives for this loot.",
          ],
        },
      ],
      model: "The other programmer could change \"gem\" to \"Gem\" in the first test. It still builds and runs, but == compares capitals too, so the gem in the loot never matches \"Gem\" and adds nothing. LootValue(loot) gives 2 instead of 12: only the two coins are counted.",
      note: NOTE_LOGIC,
      factsTable: [
        ["\"Gem\" in place of \"gem\"", "2: the gem never matches, so only the two coins count"],
        ["int i = 1", "11: the coin at index 0 is skipped"],
        ["i < loot.Count - 1", "12 for this loot, because the rope it skips is worth 0. After loot.Add(\"gem\"); it gives 12 instead of 22, so the error is there even when this list hides it"],
        ["if in place of else if", "12, still right: an item cannot be both a gem and a coin, so this is not a logic error"],
      ],
      verify: {
        cases: [
          { run: `${M3_HEAD}
loot.Add("gem");
Console.WriteLine(LootValue(loot));
int LootValue(List<string> loot) { int value = 0; for (int i = 0; i < loot.Count; i++) { if (loot[i] == "gem") { value = value + 10; } else if (loot[i] == "coin") { value = value + 1; } } return value; }`, out: "12\n22" },
          { run: `${M3_HEAD}
int LootValue(List<string> loot) { int value = 0; for (int i = 0; i < loot.Count; i++) { if (loot[i] == "Gem") { value = value + 10; } else if (loot[i] == "coin") { value = value + 1; } } return value; }`, out: "2" },
          { run: `${M3_HEAD}
int LootValue(List<string> loot) { int value = 0; for (int i = 1; i < loot.Count; i++) { if (loot[i] == "gem") { value = value + 10; } else if (loot[i] == "coin") { value = value + 1; } } return value; }`, out: "11" },
          { run: `${M3_HEAD}
loot.Add("gem");
Console.WriteLine(LootValue(loot));
int LootValue(List<string> loot) { int value = 0; for (int i = 0; i < loot.Count - 1; i++) { if (loot[i] == "gem") { value = value + 10; } else if (loot[i] == "coin") { value = value + 1; } } return value; }`, out: "12\n12" },
          { run: `${M3_HEAD}
int LootValue(List<string> loot) { int value = 0; for (int i = 0; i < loot.Count; i++) { if (loot[i] == "gem") { value = value + 10; } if (loot[i] == "coin") { value = value + 1; } } return value; }`, out: "12" },
        ],
      },
    },
  ],
};

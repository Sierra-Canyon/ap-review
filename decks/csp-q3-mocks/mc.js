// AP CSP · Quiz 3 mock quizzes · Part A multiple-choice items
// Every block of code here is compiled and run on .NET 10 by tools/verify.mjs.
// In a multiple-choice item the right choice is always written first; the site shuffles them.

export default {
  items: [
    // ================================================================ Mock Quiz 1
    {
      id: "q3m1-a1", skill: "index", type: "mcq",
      stem: "Consider the following code segment.",
      code: `List<string> loot = new List<string>();
loot.Add("dagger");
loot.Add("helmet");
loot.Add("ruby");
loot.Add("scroll");
int k = loot.Count - 3;
Console.WriteLine(k + " " + loot[k]);`,
      question: "What is printed?",
      choices: ["1 helmet", "1 dagger", "2 ruby", "3 scroll"],
      why: [
        "loot.Count is 4, so k is 4 - 3, which is 1. Index 1 is the second item: dagger 0, helmet 1, ruby 2, scroll 3.",
        "dagger is at index 0. Indexes start at 0, so loot[1] is the second item, helmet.",
        "k is 4 - 3, which is 1, not 2. ruby is at index 2.",
        "3 is the number subtracted, not the value of k. scroll is at index 3.",
      ],
      answer: 0,
      verify: { out: "1 helmet" },
    },
    {
      id: "q3m1-a2", skill: "parallel", type: "mcq",
      stem: "In this shop, each item's price is meant to be at the same index in prices.",
      code: `List<string> items = new List<string>();
List<int> prices = new List<int>();
items.Add("torch");
prices.Add(3);
items.Add("shield");
prices.Add(12);
items.Add("lockpick");
Console.WriteLine(items[items.Count - 1] + " costs " + prices[items.Count - 1]);`,
      question: "What happens?",
      choices: [
        "It builds, then crashes when it runs (ArgumentOutOfRangeException).",
        "It prints lockpick costs 12.",
        "It prints shield costs 12.",
        "It does not build: items and prices have different Counts.",
      ],
      why: [
        "items.Count is 3, so both halves use index 2. items[2] is lockpick, but prices has only two numbers, at indexes 0 and 1. prices[2] is not there.",
        "12 is prices[1]. The line asks prices for index 2, which was never added.",
        "items[items.Count - 1] is items[2], lockpick. shield is at index 1.",
        "The compiler does not check how long a list is. The Counts are only known when the program runs.",
      ],
      answer: 0,
      verify: { crash: "ArgumentOutOfRangeException" },
    },
    {
      id: "q3m1-a3", skill: "byhand", type: "mcq",
      stem: "PickPotion returns the first potion that heals at least needed.",
      code: `List<string> potions = new List<string>();
List<int> heal = new List<int>();
potions.Add("red");
heal.Add(4);
potions.Add("blue");
heal.Add(6);
potions.Add("gold");
heal.Add(9);
Console.WriteLine(PickPotion(potions, heal, 6));

string PickPotion(List<string> potions, List<int> heal, int needed)
{
    if (heal[0] >= needed)
    {
        return potions[0];
    }
    else if (heal[1] >= needed)
    {
        return potions[1];
    }
    else if (heal[2] >= needed)
    {
        return potions[2];
    }
    return "none";
}`,
      question: "What is printed?",
      choices: ["blue", "gold", "6", "none"],
      why: [
        "4 >= 6 is false. 6 >= 6 is true, so the function returns potions[1], blue, and the test for index 2 is never asked.",
        "gold would be first with > in place of >=. 6 >= 6 is true, so the chain stops at blue.",
        "6 is heal[1]. The function returns from potions, not from heal.",
        "none is returned only when all three tests are false. The test for index 1 is true.",
      ],
      answer: 0,
      verify: { out: "blue" },
    },
    {
      id: "q3m1-a4", skill: "forloop", type: "mcq",
      stem: "Consider the following code segment.",
      code: `int total = 0;
for (int i = 2; i < 5; i++)
{
    total = total + i;
}
Console.WriteLine(total);`,
      question: "What is printed?",
      choices: ["9", "14", "10", "3"],
      why: [
        "i takes 2, 3, and 4. When i is 5, 5 < 5 is false. 2 + 3 + 4 is 9.",
        "14 adds 5 as well. That would need i <= 5.",
        "10 is 0 + 1 + 2 + 3 + 4. This loop starts at 2.",
        "3 is the number of passes. Each pass adds i to total, not 1.",
      ],
      answer: 0,
      verify: { out: "9" },
    },
    {
      id: "q3m1-a5", skill: "listloop", type: "mcq",
      stem: "Consider the following code segment.",
      code: `List<int> gold = new List<int>();
gold.Add(7);
gold.Add(15);
gold.Add(4);
gold.Add(11);
int best = 0;
for (int i = 0; i < gold.Count; i++)
{
    if (gold[i] > best)
    {
        best = gold[i];
    }
}
Console.WriteLine(best);`,
      question: "What is printed?",
      choices: ["15", "11", "7", "37"],
      why: [
        "best changes only when gold[i] is bigger than it. It becomes 7, then 15. 4 > 15 and 11 > 15 are false, so it stays 15.",
        "11 is the last item, but 11 > 15 is false, so best is not changed on the last pass.",
        "7 is only the first value best takes. The loop goes on to index 1, where 15 > 7 is true.",
        "37 is the sum. The line inside the if is best = gold[i], not best = best + gold[i].",
      ],
      answer: 0,
      verify: { out: "15" },
    },
    {
      id: "q3m1-a6", skill: "forloop", type: "mcq",
      stem: "Consider the following code segment.",
      code: `int steps = 0;
for (int i = 0; i < 4; i++)
{
    steps = steps + 1;
}
Console.WriteLine(steps + " " + i);`,
      question: "What happens?",
      choices: [
        "It does not build: The name 'i' does not exist in the current context.",
        "It prints 4 4.",
        "It prints 4 3.",
        "It builds, then crashes when it runs.",
      ],
      why: [
        "i is declared inside the for, so it exists only inside the loop. The last line is outside the loop, and the build stops with CS0103.",
        "When the loop ends, i is gone, so the last line cannot read it.",
        "3 was the last value i had inside the loop. Outside the loop, i does not exist.",
        "The compiler finds this before the program runs.",
      ],
      answer: 0,
      verify: { error: "CS0103" },
    },

    // ================================================================ Mock Quiz 2
    {
      id: "q3m2-a1", skill: "index", type: "mcq",
      stem: "Consider the following code segment.",
      code: `List<int> gold = new List<int>();
gold.Add(4);
gold.Add(9);
string top = gold[1];
Console.WriteLine("Top: " + top);`,
      question: "What happens?",
      choices: [
        "It does not build: Cannot implicitly convert type 'int' to 'string'.",
        "It prints Top: 9.",
        "It prints Top: 4.",
        "It builds, then crashes when it runs (ArgumentOutOfRangeException).",
      ],
      why: [
        "gold is a List<int>, so gold[1] is an int. An int cannot be stored in a string variable, and the build stops with CS0029.",
        "9 is gold[1], but the line that stores it in a string does not build.",
        "4 is gold[0]. Index 1 is the second item.",
        "Index 1 is in range for a list of two. The build error comes first.",
      ],
      answer: 0,
      verify: { error: "CS0029" },
    },
    {
      id: "q3m2-a2", skill: "parallel", type: "mcq",
      stem: "Each monster is meant to drop the gold added right after its name.",
      code: `List<string> names = new List<string>();
List<int> gold = new List<int>();
names.Add("Bat");
gold.Add(2);
names.Add("Wolf");
gold.Add(5);
gold.Add(9);
names.Add("Ogre");
gold.Add(12);
Console.WriteLine(names[2] + " drops " + gold[2]);`,
      question: "What is printed?",
      choices: ["Ogre drops 9", "Ogre drops 12", "Wolf drops 9", "Wolf drops 12"],
      why: [
        "gold got an extra Add, so it holds 2, 5, 9, and 12. names[2] is Ogre and gold[2] is 9. Nothing in C# ties gold[2] to names[2].",
        "12 is gold[3], the fourth number added. The line asks for gold[2].",
        "Wolf is names[1]. The line asks for names[2].",
        "Both halves are off: names[2] is Ogre and gold[2] is 9.",
      ],
      answer: 0,
      verify: { out: "Ogre drops 9" },
    },
    {
      id: "q3m2-a3", skill: "byhand", type: "mcq",
      stem: "PickFighter uses three separate ifs, and none of them returns.",
      code: `List<string> names = new List<string>();
List<int> attack = new List<int>();
names.Add("Goblin");
attack.Add(7);
names.Add("Troll");
attack.Add(9);
names.Add("Imp");
attack.Add(3);
Console.WriteLine(PickFighter(names, attack));

string PickFighter(List<string> names, List<int> attack)
{
    string pick = "none";
    if (attack[0] > 5)
    {
        pick = names[0];
    }
    if (attack[1] > 5)
    {
        pick = names[1];
    }
    if (attack[2] > 5)
    {
        pick = names[2];
    }
    return pick;
}`,
      question: "What is printed?",
      choices: ["Troll", "Goblin", "Imp", "none"],
      why: [
        "All three tests are asked. The first two are true, and the second one stores Troll over Goblin. 3 > 5 is false, so pick stays Troll.",
        "Goblin is stored first, but nothing stops the function there. The next if is true and stores Troll.",
        "Imp has attack 3, and 3 > 5 is false, so it is never stored.",
        "none is replaced as soon as the first test is true.",
      ],
      answer: 0,
      verify: { out: "Troll" },
    },
    {
      id: "q3m2-a4", skill: "forloop", type: "mcq",
      stem: "Consider the following code segment.",
      code: `string code = "";
for (int i = 1; i < 4; i++)
{
    code = code + i;
}
Console.WriteLine(code);`,
      question: "What is printed?",
      choices: ["123", "1234", "0123", "6"],
      why: [
        "i takes 1, 2, and 3. code is a string, so each pass joins the next digit to the end: 1, then 12, then 123.",
        "1234 would need i <= 4. When i is 4, 4 < 4 is false.",
        "The loop starts at 1, so 0 is never joined.",
        "6 is 1 + 2 + 3 as numbers. code is a string, so + joins instead of adding.",
      ],
      answer: 0,
      verify: { out: "123" },
    },
    {
      id: "q3m2-a5", skill: "listloop", type: "mcq",
      stem: "This loop is meant to add up all the gold.",
      code: `List<int> gold = new List<int>();
gold.Add(6);
gold.Add(3);
gold.Add(10);
gold.Add(4);
int total = 0;
for (int i = 0; i < gold.Count; i++)
{
    total = gold[i];
}
Console.WriteLine(total);`,
      question: "What is printed?",
      choices: ["4", "23", "6", "10"],
      why: [
        "total = gold[i] replaces total on every pass. The last pass stores gold[3], 4. Adding up needs total = total + gold[i].",
        "23 is the sum, and this line never adds total to anything.",
        "6 is stored on the first pass, then replaced three times.",
        "10 is the biggest value, but the last pass stores 4 over it.",
      ],
      answer: 0,
      verify: { out: "4" },
    },
    {
      id: "q3m2-a6", skill: "listloop", type: "mcq",
      stem: "Consider the following code segment.",
      code: `List<string> rooms = new List<string>();
rooms.Add("cellar");
rooms.Add("tower");
List<string> loot = new List<string>();
loot.Add("coin");
loot.Add("gem");
loot.Add("key");
for (int i = 0; i < loot.Count; i++)
{
    Console.WriteLine(rooms[i] + ": " + loot[i]);
}`,
      question: "What happens?",
      choices: [
        "It prints two lines, then crashes (ArgumentOutOfRangeException).",
        "It prints three lines, then stops.",
        "It crashes before anything is printed.",
        "It prints two lines, then stops.",
      ],
      why: [
        "The test uses loot.Count, which is 3. Passes 0 and 1 print cellar: coin and tower: gem. On the third pass, rooms[2] is not there.",
        "rooms has only two items, so the third line cannot be built.",
        "Indexes 0 and 1 are in range in both lists, so two lines print first.",
        "The loop stops when i < loot.Count is false, and loot.Count is 3, not 2.",
      ],
      answer: 0,
      verify: { out: "cellar: coin\ntower: gem", crash: "ArgumentOutOfRangeException" },
    },

    // ================================================================ Mock Quiz 3
    {
      id: "q3m3-a1", skill: "index", type: "mcq",
      stem: "Consider the following code segment.",
      code: `List<string> rooms = new List<string>();
rooms.Add("hall");
rooms.Add("vault");
int last = rooms.Count - 1;
rooms.Add("crypt");
Console.WriteLine(rooms[last] + " " + rooms.Count);`,
      question: "What is printed?",
      choices: ["vault 3", "crypt 3", "vault 2", "crypt 2"],
      why: [
        "last is set to 1 while the list has two items. The Add does not change last, so rooms[1] is still vault. rooms.Count is now 3.",
        "crypt is at index 2. last was worked out before crypt was added, so it is still 1.",
        "rooms.Count is read on the last line, after the third Add, so it is 3.",
        "last is 1, not 2, and rooms.Count is 3.",
      ],
      answer: 0,
      verify: { out: "vault 3" },
    },
    {
      id: "q3m3-a2", skill: "parallel", type: "mcq",
      stem: "Consider the following code segment.",
      code: `List<string> names = new List<string>();
List<int> gold = new List<int>();
names.Add("Imp");
gold.Add(2);
names.Add("Troll");
gold.Add(0);
names.Add("Ghoul");
gold.Add(5);
int i = gold[0];
Console.WriteLine(names[i] + " carries " + gold[i]);`,
      question: "What is printed?",
      choices: ["Ghoul carries 5", "Imp carries 2", "Ghoul carries 2", "Troll carries 0"],
      why: [
        "gold[0] is the value 2, so i is 2. names[2] is Ghoul and gold[2] is 5.",
        "Imp is at index 0. i is the value stored at gold[0], which is 2.",
        "2 is i. The line prints gold[i], which is gold[2], 5.",
        "Troll and 0 are at index 1, and i is 2.",
      ],
      answer: 0,
      verify: { out: "Ghoul carries 5" },
    },
    {
      id: "q3m3-a3", skill: "byhand", type: "mcq",
      stem: "SlotOf is meant to return the index of wanted in a list of three keys.",
      code: `List<string> keys = new List<string>();
keys.Add("iron");
keys.Add("bone");
keys.Add("glass");
Console.WriteLine(SlotOf(keys, "bone"));

int SlotOf(List<string> keys, string wanted)
{
    if (keys[0] == wanted)
    {
        return 0;
    }
    else if (keys[1] == wanted)
    {
        return 1;
    }
    else if (keys[2] == wanted)
    {
        return 2;
    }
}`,
      question: "What happens?",
      choices: [
        "It does not build: not all code paths return a value.",
        "It prints 1.",
        "It prints -1.",
        "It builds, then crashes when it runs.",
      ],
      why: [
        "When all three tests are false, the function reaches its closing brace without a return. The compiler checks every path, so the build stops with CS0161. A return -1; at the end fixes it.",
        "bone is at index 1, but the program never runs, because it does not build.",
        "-1 is never written in this function. Nothing returns it.",
        "The compiler finds this before the program runs.",
      ],
      answer: 0,
      verify: { error: "CS0161" },
    },
    {
      id: "q3m3-a4", skill: "forloop", type: "mcq",
      stem: "Consider the following code segment.",
      code: `int torches = 0;
for (int i = 3; i < 8; i++)
{
    torches = torches + 2;
}
Console.WriteLine(torches);`,
      question: "What is printed?",
      choices: ["10", "12", "8", "16"],
      why: [
        "i takes 3, 4, 5, 6, and 7. That is five passes, and each adds 2.",
        "12 is six passes. That would need i <= 8.",
        "8 is four passes. 7 < 8 is true, so i of 7 gets a pass.",
        "16 is eight passes, from 0 to 7. This loop starts at 3.",
      ],
      answer: 0,
      verify: { out: "10" },
    },
    {
      id: "q3m3-a5", skill: "listloop", type: "mcq",
      stem: "Consider the following code segment.",
      code: `List<string> path = new List<string>();
path.Add("gate");
path.Add("bridge");
path.Add("keep");
for (int i = 0; i < path.Count; i++)
{
    Console.WriteLine(path[i] + " to " + path[i + 1]);
}`,
      question: "What happens?",
      choices: [
        "It prints two lines, then crashes (ArgumentOutOfRangeException).",
        "It prints two lines, then stops.",
        "It crashes before anything is printed.",
        "It prints three lines, then stops.",
      ],
      why: [
        "Passes 0 and 1 print gate to bridge and bridge to keep. On the third pass, i is 2, and path[i + 1] is path[3], which is not there.",
        "i < path.Count lets i reach 2, and that pass reads path[3].",
        "Indexes 0, 1, and 2 are all in range, so two lines print first.",
        "The third line needs path[3], and the list has only indexes 0, 1, and 2.",
      ],
      answer: 0,
      verify: { out: "gate to bridge\nbridge to keep", crash: "ArgumentOutOfRangeException" },
    },
    {
      id: "q3m3-a6", skill: "forloop", type: "mcq",
      stem: "Consider the following code segment.",
      code: `Console.WriteLine(Passes(1, 4) + Passes(4, 4));

int Passes(int start, int stop)
{
    int count = 0;
    for (int i = start; i <= stop; i++)
    {
        count = count + 1;
    }
    return count;
}`,
      question: "What is printed?",
      choices: ["5", "4", "3", "41"],
      why: [
        "Passes(1, 4) runs for 1, 2, 3, and 4, which is 4 passes. Passes(4, 4) runs once, because 4 <= 4 is true. 4 + 1 is 5.",
        "4 leaves out Passes(4, 4). When start and stop are equal, 4 <= 4 is true and the loop runs once.",
        "3 is what i < stop would give: 3 + 0. The test is <=.",
        "Both calls return an int, so + adds them. It would join them only if one side were a string.",
      ],
      answer: 0,
      verify: { out: "5" },
    },
  ],
};

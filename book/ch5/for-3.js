export default {
  id: "for-3",
  chapter: 5,
  number: "5.3",
  title: "Totals, counts, and the biggest so far",
  from: "For 3 · Day 13",
  minutes: 30,
  skills: ["listloop", "wr-nolist"],
  goals: [
    "Write a loop with a variable declared before it, changed inside it, and returned after it",
    "Add up a list, and count the items that pass a test",
    "Keep the index of the biggest so far, and say which index wins a tie",
    "Say which answer a yes or no loop can give early, and which has to wait",
  ],
  blocks: [
    {
      type: "text",
      md: "A loop that works out one answer from a list has three parts: a variable declared **before** the loop, changed **inside** it, and returned **after** it. The jobs in this section differ in what that variable starts as, and in whether the loop may stop early.",
    },
    {
      type: "recipe",
      title: "Before the loop",
      template: "{Type} {answer} = {start};",
      parts: [
        { slot: "{Type}", meaning: "`int` for a total, a count, or an index. `bool` for a yes or no" },
        { slot: "{answer}", meaning: "declared outside the loop's braces, so it is still there after the loop" },
        { slot: "{start}", meaning: "the answer before any item is looked at: 0 for a total or a count, index 0 for the best so far" },
      ],
    },
    {
      type: "text",
      md: "## A total\n\nThe HUD's `Total health: 25` comes from a function like this one.",
    },
    {
      type: "code",
      code: `List<int> health = new List<int>();
health.Add(10);
health.Add(7);
health.Add(8);
Console.WriteLine("Total health: " + TotalHealth(health));

int TotalHealth(List<int> health)
{
    int total = 0;
    for (int i = 0; i < health.Count; i++)
    {
        total = total + health[i];
    }
    return total;
}`,
      expect: { out: "Total health: 25" },
    },
    {
      type: "text",
      md: "`int total = 0;` is before the loop, `total = total + health[i];` is inside it, and `return total;` is after it. Move the first of those lines inside the loop's braces and the build stops:",
    },
    {
      type: "code",
      code: `List<int> health = new List<int>();
health.Add(10);
health.Add(7);
health.Add(8);
Console.WriteLine("Total health: " + TotalHealth(health));

int TotalHealth(List<int> health)
{
    for (int i = 0; i < health.Count; i++)
    {
        int total = 0;
        total = total + health[i];
    }
    return total;
}`,
      expect: { error: "CS0103" },
    },
    {
      type: "text",
      md: "The error is `CS0103: The name 'total' does not exist in the current context`, on the `return` line. A variable declared inside the braces exists only inside them, and it is made again, at 0, on every pass.",
    },
    {
      type: "text",
      md: "## A count\n\nA count is a total that adds 1 only when a test is true. `CountHurt` counts the characters below full health.",
    },
    {
      type: "code",
      code: `List<int> health = new List<int>();
health.Add(10);
health.Add(7);
health.Add(8);
Console.WriteLine(CountHurt(health, 10) + " hurt");

int CountHurt(List<int> health, int maxHp)
{
    int count = 0;
    for (int i = 0; i < health.Count; i++)
    {
        if (health[i] < maxHp)
        {
            count = count + 1;
        }
    }
    return count;
}`,
      expect: { out: "2 hurt" },
    },
    {
      type: "text",
      md: "## The biggest so far\n\n`ToughestIndex` keeps the index of the toughest monster seen so far in `best`. `best` starts at 0: before the loop, index 0 is the only monster seen, so it is the toughest so far. The loop starts at 1, because comparing index 0 with itself changes nothing. Step through it and watch `best` change.",
    },
    {
      type: "step",
      code: `List<string> bookNames = new List<string>();
List<int> bookHealth = new List<int>();
bookNames.Add("Grub");
bookHealth.Add(4);
bookNames.Add("Wolf");
bookHealth.Add(6);
bookNames.Add("Bat");
bookHealth.Add(2);
bookNames.Add("Ogre");
bookHealth.Add(9);
int toughest = ToughestIndex(bookHealth);
Console.WriteLine(toughest + " " + bookNames[toughest] + " " + bookHealth[toughest]);

int ToughestIndex(List<int> health)
{
    int best = 0;
    for (int i = 1; i < health.Count; i++)
    {
        if (health[i] > health[best])
        {
            best = i;
        }
    }
    return best;
}`,
      notes: {
        "16": "best holds an index, not a health. Before anything is compared, index 0 is the best so far.",
        "17": "The loop starts at 1, because index 0 is already best.",
        "19": "Compares this monster's health with the health at index best.",
        "21": "A new record. best now holds this index.",
        "12": "The index becomes a name with bookNames[toughest] and a health with bookHealth[toughest].",
      },
      expect: { out: "3 Ogre 9" },
    },
    {
      type: "text",
      md: "## A tie\n\nNow the Wolf and the Ogre both have 9 health. With `>`, a later monster takes the record only if it is strictly tougher, so the first of a tie keeps it.",
    },
    {
      type: "code",
      code: `List<string> bookNames = new List<string>();
List<int> bookHealth = new List<int>();
bookNames.Add("Grub");
bookHealth.Add(4);
bookNames.Add("Wolf");
bookHealth.Add(9);
bookNames.Add("Bat");
bookHealth.Add(2);
bookNames.Add("Ogre");
bookHealth.Add(9);
Console.WriteLine(bookNames[ToughestIndex(bookHealth)]);

int ToughestIndex(List<int> health)
{
    int best = 0;
    for (int i = 1; i < health.Count; i++)
    {
        if (health[i] > health[best])
        {
            best = i;
        }
    }
    return best;
}`,
      expect: { out: "Wolf" },
    },
    {
      type: "text",
      md: "It prints `Wolf`. Change `>` to `>=` and run it again: `Ogre`. With `>=`, a tie hands the record to the later monster, so the last of a tie keeps it.",
    },
    {
      type: "code",
      code: `List<string> bookNames = new List<string>();
List<int> bookHealth = new List<int>();
bookNames.Add("Grub");
bookHealth.Add(4);
bookNames.Add("Wolf");
bookHealth.Add(9);
bookNames.Add("Bat");
bookHealth.Add(2);
bookNames.Add("Ogre");
bookHealth.Add(9);
Console.WriteLine(bookNames[ToughestIndex(bookHealth)]);

int ToughestIndex(List<int> health)
{
    int best = 0;
    for (int i = 1; i < health.Count; i++)
    {
        if (health[i] >= health[best])
        {
            best = i;
        }
    }
    return best;
}`,
      expect: { out: "Ogre" },
    },
    {
      type: "text",
      md: "## Yes or no\n\n`AnyoneHurt` answers one question about the whole party. One hurt character is enough to say yes, so `return true;` is inside the loop. To say no, every character has to be checked, so `return false;` is after it.",
    },
    {
      type: "code",
      code: `List<int> health = new List<int>();
health.Add(10);
health.Add(7);
health.Add(8);
Console.WriteLine(AnyoneHurt(health, 10));

bool AnyoneHurt(List<int> health, int maxHp)
{
    for (int i = 0; i < health.Count; i++)
    {
        if (health[i] < maxHp)
        {
            return true;
        }
    }
    return false;
}`,
      expect: { out: "True" },
    },
    {
      type: "text",
      md: "It prints `True`. Mote is at 7 of 10, so the loop returns at index 1 and never looks at Hero. Here is the same function with an `else` inside the loop:",
    },
    {
      type: "code",
      code: `List<int> health = new List<int>();
health.Add(10);
health.Add(7);
health.Add(8);
Console.WriteLine(AnyoneHurt(health, 10));

bool AnyoneHurt(List<int> health, int maxHp)
{
    for (int i = 0; i < health.Count; i++)
    {
        if (health[i] < maxHp)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    return false;
}`,
      expect: { out: "False", warning: "CS0162" },
    },
    {
      type: "note",
      kind: "trap",
      md: "With the `else`, it prints `False` while Mote is at 7 of 10. Rook is at full health, so the `else` answered for the whole party after one character. The build warns `warning CS0162: Unreachable code detected`, and runs anyway. One answer can be given early. The other is known only after the loop.",
    },
    {
      type: "text",
      md: "## Without the list\n\nHere is `TotalHealth` for a party of three with no list.",
    },
    {
      type: "code",
      code: `int health1 = 10;
int health2 = 7;
int health3 = 8;
Console.WriteLine("Total health: " + TotalHealth(health1, health2, health3));

int TotalHealth(int health1, int health2, int health3)
{
    return health1 + health2 + health3;
}`,
      expect: { out: "Total health: 25" },
    },
    {
      type: "text",
      md: "It prints the same `Total health: 25`. A fourth character costs a variable, a parameter, `+ health4` in the body, and a change to every call. A character who joins while the game runs cannot be added at all. `ToughestIndex` without the list is a nest of `if`s comparing each variable with every other one, and a new monster means rewriting every comparison.",
    },
    {
      type: "ap",
      md: "For the 2026 exam's question 2(c), the code segment in your own program is probably a loop like these. Section 4.3 has the whole question. Without the list, the answer names: one variable per item (`health1`, `health2`, `health3`), one parameter per item on the code segment's first line, what replaces the loop (`health1 + health2 + health3` for a total, one `if` per item for a count), and what each new item costs. For a count, the `if`s have to be separate, not `else if`: an `else if` chain stops at the first match, as Section 4.3's `HowMany` showed.",
    },
    {
      type: "mcq",
      id: "for-3-q1",
      question: "The line inside the loop is `total = health[i];`. What is printed?",
      code: `List<int> health = new List<int>();
health.Add(10);
health.Add(7);
health.Add(8);
Console.WriteLine(TotalHealth(health));

int TotalHealth(List<int> health)
{
    int total = 0;
    for (int i = 0; i < health.Count; i++)
    {
        total = health[i];
    }
    return total;
}`,
      choices: ["8", "25", "10", "0"],
      answer: 0,
      why: [
        "Each pass replaces total with the item, so after the loop total is the last item, 8. A total needs total = total + health[i].",
        "25 needs the old total added in on every pass.",
        "10 is the first item. Every later pass replaces it.",
        "total is replaced on the first pass, so it is not 0 by the end.",
      ],
      verify: { out: "8" },
    },
    {
      type: "mcq",
      id: "for-3-q2",
      question: "`HealthiestIndex` is `ToughestIndex` with a new name. What is printed?",
      code: `List<int> health = new List<int>();
health.Add(10);
health.Add(7);
health.Add(8);
Console.WriteLine(HealthiestIndex(health));

int HealthiestIndex(List<int> health)
{
    int best = 0;
    for (int i = 1; i < health.Count; i++)
    {
        if (health[i] > health[best])
        {
            best = i;
        }
    }
    return best;
}`,
      choices: ["0", "10", "2", "3"],
      answer: 0,
      why: [
        "best is an index. 7 and 8 are both less than 10, so best is never changed and stays at index 0.",
        "10 is the health at index 0. health[HealthiestIndex(health)] would print 10.",
        "Index 2 has 8 health, which is less than 10.",
        "3 is the Count. The last index is 2.",
      ],
      verify: { out: "0" },
    },
    {
      type: "mcq",
      id: "for-3-q3",
      question: "What is printed?",
      code: `List<int> health = new List<int>();
health.Add(10);
health.Add(10);
health.Add(7);
Console.WriteLine(AllFull(health, 10));
Console.WriteLine(AllFull(new List<int>(), 10));

bool AllFull(List<int> health, int maxHp)
{
    for (int i = 0; i < health.Count; i++)
    {
        if (health[i] < maxHp)
        {
            return false;
        }
    }
    return true;
}`,
      choices: ["False, then True", "False, then False", "True, then True", "False, then it crashes"],
      answer: 0,
      why: [
        "The 7 at index 2 returns false. For the empty list the loop runs zero times, nothing returns false, and the line after the loop returns true.",
        "Nothing in the empty list is below 10, so the loop never returns false.",
        "Index 2 is 7, below 10, so the first call returns false there.",
        "The loop runs zero times on an empty list, so health[i] is never read.",
      ],
      verify: { out: "False\nTrue" },
    },
    {
      type: "mcq",
      id: "for-3-q4",
      question: "The loop in `ToughestIndex` is changed to start at `int i = 0`. What changes?",
      choices: [
        "Nothing it returns: the first pass compares index 0 with itself, and > is false.",
        "It returns the last index of every list.",
        "It crashes on the first pass.",
        "It returns -1 for every list.",
      ],
      answer: 0,
      why: [
        "health[0] > health[0] is false, so best stays 0 on that pass. Every later pass is the same as before.",
        "Only >= on a tie moves the record to a later index. Starting at 0 adds one pass that changes nothing.",
        "Index 0 is in every list that is not empty, so reading it is safe.",
        "best starts at 0 and is only ever set to an index, so it is never -1.",
      ],
      verify: {
        run: `List<int> a = new List<int>();
a.Add(10);
a.Add(7);
a.Add(8);
List<int> b = new List<int>();
b.Add(4);
b.Add(9);
b.Add(2);
b.Add(9);
Console.WriteLine(FromOne(a) + " " + FromOne(b));
Console.WriteLine(FromZero(a) + " " + FromZero(b));
int FromOne(List<int> health)
{
    int best = 0;
    for (int i = 1; i < health.Count; i++)
    {
        if (health[i] > health[best])
        {
            best = i;
        }
    }
    return best;
}
int FromZero(List<int> health)
{
    int best = 0;
    for (int i = 0; i < health.Count; i++)
    {
        if (health[i] > health[best])
        {
            best = i;
        }
    }
    return best;
}`,
        out: "0 1\n0 1",
      },
    },
    {
      type: "parsons",
      id: "for-3-p1",
      prompt: "Put the lines in order so the program prints `50`, the gold in three piles added up.",
      lines: [
        `List<int> gold = new List<int>();`,
        `gold.Add(12);`,
        `gold.Add(30);`,
        `gold.Add(8);`,
        `int total = 0;`,
        `for (int i = 0; i < gold.Count; i++)`,
        `{`,
        `    total = total + gold[i];`,
        `}`,
        `Console.WriteLine(total);`,
      ],
      distractors: [`    total = gold[i];`, `    int total = 0;`],
      expect: { out: "50" },
    },
    {
      type: "exercise",
      id: "for-3-e1",
      prompt: "`names` and `gold` are parallel lists: `gold[i]` is how much gold `names[i]` carries. Write `RichestName`. It returns the name of the character with the most gold, the first one on a tie, or `\"nobody\"` when the lists are empty.",
      starter: `string RichestName(List<string> names, List<int> gold)
{
    return "?";
}`,
      solution: `string RichestName(List<string> names, List<int> gold)
{
    if (names.Count == 0)
    {
        return "nobody";
    }
    int best = 0;
    for (int i = 1; i < gold.Count; i++)
    {
        if (gold[i] > gold[best])
        {
            best = i;
        }
    }
    return names[best];
}`,
      given: `List<string> names = new List<string>();
names.Add("Rook");
names.Add("Mote");
names.Add("Hero");
names.Add("Pip");

List<int> Gold(int a, int b, int c, int d)
{
    List<int> gold = new List<int>();
    gold.Add(a);
    gold.Add(b);
    gold.Add(c);
    gold.Add(d);
    return gold;
}`,
      tests: [
        { call: `RichestName(names, Gold(3, 1, 2, 9))`, expect: "Pip" },
        { call: `RichestName(names, Gold(8, 1, 2, 3))`, expect: "Rook" },
        { call: `RichestName(names, Gold(12, 30, 30, 5))`, expect: "Mote" },
        { call: `RichestName(new List<string>(), new List<int>())`, expect: "nobody" },
      ],
      hints: [
        "Keep an index, `int best = 0;`, and compare `gold[i]` with `gold[best]`.",
        "`>` keeps the first of a tie.",
        "Test for the empty list first: `names[best]` on an empty list crashes.",
      ],
    },
    {
      type: "summary",
      items: [
        "One answer from a list: declare it before the loop, change it inside, `return` it after.",
        "A total starts at 0 and adds every item: `total = total + health[i];`. Declared inside the loop, it does not build (`CS0103`).",
        "A count starts at 0 and adds 1 only when a test is true.",
        "The biggest so far keeps an index: `best` starts at 0 and the loop starts at 1. `>` keeps the first of a tie, `>=` the last.",
        "A yes or no loop returns one answer early, inside the loop, and the other after it. An `else` that returns inside the loop decides after one item and warns `CS0162`.",
        "Without the list, a total is one variable and one parameter per item, added by hand: `health1 + health2 + health3`.",
      ],
    },
  ],
};

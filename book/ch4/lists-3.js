export default {
  id: "lists-3",
  chapter: 4,
  number: "4.3",
  title: "Finding something by hand, and -1 for \"not there\"",
  from: "Lists 3 · Day 10",
  minutes: 35,
  skills: ["byhand", "wr-nolist"],
  goals: [
    "Search a list with one `if` per index, and answer from a second list at the same index",
    "Return -1 for \"not there\", and check for -1 before an answer goes in square brackets",
    "Say why `\"bat\"` does not match `\"Bat\"`",
    "Answer the 2026 exam's question 2(c): how a code segment changes without its list",
  ],
  blocks: [
    {
      type: "text",
      md: "The monster book is two parallel lists: `bookNames` and `bookHealth`. To find a monster's health by its name, look for the name in `bookNames`, then read `bookHealth` at the same index. With only `if` and an index, that takes one test for each index.",
    },
    {
      type: "recipe",
      title: "One test per index",
      template: "else if ({list}[{k}] == {wanted})",
      parts: [
        { slot: "{list}", meaning: "the list you search" },
        { slot: "{k}", meaning: "one index, typed by hand. Each test looks at exactly one place in the list" },
        { slot: "{wanted}", meaning: "what you are looking for, usually a parameter" },
        { slot: "else if", meaning: "the first test is a plain `if`. Every test after it is an `else if`, so the chain stops at the first match" },
      ],
    },
    {
      type: "text",
      md: "Step through `HealthOf`. Watch which tests run for `Bat`, and which run for `Ogre`, who is not in the book.",
    },
    {
      type: "step",
      code: `List<string> bookNames = new List<string>();
List<int> bookHealth = new List<int>();
bookNames.Add("Grub");
bookHealth.Add(4);
bookNames.Add("Bat");
bookHealth.Add(2);
bookNames.Add("Wolf");
bookHealth.Add(6);
Console.WriteLine(HealthOf(bookNames, bookHealth, "Bat"));
Console.WriteLine(HealthOf(bookNames, bookHealth, "Ogre"));

int HealthOf(List<string> bookNames, List<int> bookHealth, string wanted)
{
    if (bookNames[0] == wanted)
    {
        return bookHealth[0];
    }
    else if (bookNames[1] == wanted)
    {
        return bookHealth[1];
    }
    else if (bookNames[2] == wanted)
    {
        return bookHealth[2];
    }
    return -1;
}`,
      notes: {
        "9": "Looks for Bat. wanted will be \"Bat\" inside HealthOf.",
        "14": "This test looks at index 0 and nowhere else.",
        "20": "The name matched at index 1, so the answer comes from bookHealth at index 1. return leaves the function, and the test for index 2 never runs.",
        "26": "None of the three tests matched. The function still has to return an int, and -1 means nobody.",
      },
      expect: { out: "2\n-1" },
    },
    {
      type: "text",
      md: "## -1 for not there\n\nWhen no test matches, `HealthOf` still has to return an `int`, and that `int` must not look like a real answer. 0 is a real index, the first page, and a real health, a monster with nothing left. No list has an index -1, and no monster has -1 health.",
    },
    {
      type: "text",
      md: "## Exact matches\n\n`==` on two strings compares every character, capitals included. Run this, then change `\"bat\"` to `\"Bat\"`.",
    },
    {
      type: "code",
      code: `List<string> bookNames = new List<string>();
List<int> bookHealth = new List<int>();
bookNames.Add("Grub");
bookHealth.Add(4);
bookNames.Add("Bat");
bookHealth.Add(2);
bookNames.Add("Wolf");
bookHealth.Add(6);
Console.WriteLine(HealthOf(bookNames, bookHealth, "bat"));

int HealthOf(List<string> bookNames, List<int> bookHealth, string wanted)
{
    if (bookNames[0] == wanted)
    {
        return bookHealth[0];
    }
    else if (bookNames[1] == wanted)
    {
        return bookHealth[1];
    }
    else if (bookNames[2] == wanted)
    {
        return bookHealth[2];
    }
    return -1;
}`,
      expect: { out: "-1" },
    },
    {
      type: "text",
      md: "## An answer that might be -1\n\n`FindPage` returns where the name is, not the health. The caller can then read any list at that index, but only after checking that the answer is not -1.",
    },
    {
      type: "code",
      code: `List<string> bookNames = new List<string>();
List<int> bookHealth = new List<int>();
bookNames.Add("Grub");
bookHealth.Add(4);
bookNames.Add("Bat");
bookHealth.Add(2);
bookNames.Add("Wolf");
bookHealth.Add(6);
int where = FindPage(bookNames, "Wolf");
if (where != -1)
{
    Console.WriteLine(bookNames[where] + " has " + bookHealth[where] + " health.");
}
int missing = FindPage(bookNames, "Ogre");
if (missing != -1)
{
    Console.WriteLine(bookNames[missing] + " has " + bookHealth[missing] + " health.");
}
else
{
    Console.WriteLine("No page for Ogre.");
}

int FindPage(List<string> bookNames, string wanted)
{
    if (bookNames[0] == wanted)
    {
        return 0;
    }
    else if (bookNames[1] == wanted)
    {
        return 1;
    }
    else if (bookNames[2] == wanted)
    {
        return 2;
    }
    return -1;
}`,
      expect: { out: "Wolf has 6 health.\nNo page for Ogre." },
    },
    {
      type: "text",
      md: "Now take the check away. This line uses the answer for Ogre as an index straight away:",
    },
    {
      type: "code",
      code: `List<string> bookNames = new List<string>();
List<int> bookHealth = new List<int>();
bookNames.Add("Grub");
bookHealth.Add(4);
bookNames.Add("Bat");
bookHealth.Add(2);
bookNames.Add("Wolf");
bookHealth.Add(6);
int missing = FindPage(bookNames, "Ogre");
Console.WriteLine(missing);
Console.WriteLine(bookHealth[missing]);

int FindPage(List<string> bookNames, string wanted)
{
    if (bookNames[0] == wanted)
    {
        return 0;
    }
    else if (bookNames[1] == wanted)
    {
        return 1;
    }
    else if (bookNames[2] == wanted)
    {
        return 2;
    }
    return -1;
}`,
      expect: { out: "-1", crash: "ArgumentOutOfRangeException" },
    },
    {
      type: "note",
      kind: "trap",
      md: "-1 is an answer, never an index. `FindPage` correctly said nobody, and the next line put that -1 in square brackets: `ArgumentOutOfRangeException: Index was out of range. Must be non-negative and less than the size of the collection.` Test `where != -1` before `bookHealth[where]`.",
    },
    {
      type: "text",
      md: "## The wall\n\n`HealthOf` has a test for index 0, 1, and 2, and no others. Add a fourth monster and look for it:",
    },
    {
      type: "code",
      code: `List<string> bookNames = new List<string>();
List<int> bookHealth = new List<int>();
bookNames.Add("Grub");
bookHealth.Add(4);
bookNames.Add("Bat");
bookHealth.Add(2);
bookNames.Add("Wolf");
bookHealth.Add(6);
bookNames.Add("Slime");
bookHealth.Add(3);
Console.WriteLine(bookNames.Count);
Console.WriteLine(HealthOf(bookNames, bookHealth, "Slime"));

int HealthOf(List<string> bookNames, List<int> bookHealth, string wanted)
{
    if (bookNames[0] == wanted)
    {
        return bookHealth[0];
    }
    else if (bookNames[1] == wanted)
    {
        return bookHealth[1];
    }
    else if (bookNames[2] == wanted)
    {
        return bookHealth[2];
    }
    return -1;
}`,
      expect: { out: "4\n-1" },
    },
    {
      type: "text",
      md: "The book has 4 pages, and `HealthOf` says -1 for the Slime: no test looks at index 3. A fourth monster needs a fourth `else if`, and forty monsters need forty. A book whose length is known only when the game runs cannot be searched this way at all.",
    },
    {
      type: "mcq",
      id: "lists-3-q1",
      question: "This search keeps its answer in a variable and uses three separate `if`s. What is printed?",
      code: `List<string> pack = new List<string>();
pack.Add("torch");
pack.Add("rope");
pack.Add("torch");
Console.WriteLine(FindInPack(pack, "torch"));

int FindInPack(List<string> pack, string wanted)
{
    int found = -1;
    if (pack[0] == wanted)
    {
        found = 0;
    }
    if (pack[1] == wanted)
    {
        found = 1;
    }
    if (pack[2] == wanted)
    {
        found = 2;
    }
    return found;
}`,
      choices: ["2", "0", "-1", "0, and then 2 on the next line"],
      answer: 0,
      why: [
        "Separate ifs are all asked. found becomes 0 at index 0, and the torch at index 2 overwrites it with 2.",
        "0 is the first torch. With else if in front of the second and third tests, or a return in each branch, the search would stop there.",
        "torch is in the pack, at index 0 and index 2.",
        "The function returns once, and Console.WriteLine is called once.",
      ],
      verify: { out: "2" },
    },
    {
      type: "mcq",
      id: "lists-3-q2",
      question: "`FindPage` returns the index of a name in `bookNames`, or -1. The book is Grub, Bat, and Wolf. Which test goes in place of `???`, so Grub's health prints for Grub and `no page` prints for Ogre?",
      code: `int where = FindPage(bookNames, wanted);
if (???)
{
    Console.WriteLine(bookHealth[where]);
}
else
{
    Console.WriteLine("no page");
}`,
      choices: ["where != -1", "where > 0", "where != 0", "where >= -1"],
      mono: true,
      answer: 0,
      why: [
        "-1 is the one answer that is not an index. Every other answer is safe in the brackets.",
        "Grub is at index 0, and 0 > 0 is false, so Grub prints no page.",
        "It gets both wrong. Grub is at index 0, so Grub prints no page. For Ogre, -1 != 0 is true, and bookHealth[-1] crashes with ArgumentOutOfRangeException.",
        "This is true for every answer, -1 included, so Ogre crashes.",
      ],
      verify: {
        cases: ["where != -1", "where > 0", "where != 0", "where >= -1"].map((t, k) => {
          const run = `List<string> bookNames = new List<string>();
List<int> bookHealth = new List<int>();
bookNames.Add("Grub");
bookHealth.Add(4);
bookNames.Add("Bat");
bookHealth.Add(2);
bookNames.Add("Wolf");
bookHealth.Add(6);
Show("Grub");
Show("Ogre");

void Show(string wanted)
{
    int where = FindPage(bookNames, wanted);
    if (${t})
    {
        Console.WriteLine(bookHealth[where]);
    }
    else
    {
        Console.WriteLine("no page");
    }
}

int FindPage(List<string> bookNames, string wanted)
{
    if (bookNames[0] == wanted)
    {
        return 0;
    }
    else if (bookNames[1] == wanted)
    {
        return 1;
    }
    else if (bookNames[2] == wanted)
    {
        return 2;
    }
    return -1;
}`;
          return [{ run, out: "4\nno page" }, { run, out: "no page\nno page" }, { run, out: "no page", crash: "ArgumentOutOfRangeException" }, { run, out: "4", crash: "ArgumentOutOfRangeException" }][k];
        }),
      },
    },
    {
      type: "mcq",
      id: "lists-3-q3",
      question: "This function counts by hand, with `else if` in front of the second and third tests. What is printed?",
      code: `List<string> quiver = new List<string>();
quiver.Add("arrow");
quiver.Add("arrow");
quiver.Add("rope");
Console.WriteLine(HowMany(quiver, "arrow"));

int HowMany(List<string> items, string wanted)
{
    int count = 0;
    if (items[0] == wanted)
    {
        count = count + 1;
    }
    else if (items[1] == wanted)
    {
        count = count + 1;
    }
    else if (items[2] == wanted)
    {
        count = count + 1;
    }
    return count;
}`,
      choices: ["1", "2", "0", "3"],
      answer: 0,
      why: [
        "The first test is true, so count becomes 1 and the else ifs are skipped. The arrow at index 1 is never counted. A count needs three separate ifs.",
        "2 is the number of arrows. The else if chain stops after the first match.",
        "items[0] is arrow, so the first test adds 1.",
        "items[2] is rope, and the chain never reaches it anyway.",
      ],
      verify: { out: "1" },
    },
    {
      type: "parsons",
      id: "lists-3-p1",
      prompt: "Put the lines in order so the program prints `1`, the index of the Bat, found with one test.",
      lines: [
        `List<string> bookNames = new List<string>();`,
        `bookNames.Add("Grub");`,
        `bookNames.Add("Bat");`,
        `int where = -1;`,
        `if (bookNames[1] == "Bat")`,
        `{`,
        `    where = 1;`,
        `}`,
        `Console.WriteLine(where);`,
      ],
      distractors: [`if (bookNames[1] == "bat")`, `    where = bookNames[1];`],
      expect: { out: "1" },
    },
    {
      type: "text",
      md: "## Practice: 2026 question 2(c), without the list\n\nThe exam asks about a list in your own program, and about the code segment that uses it. Here is a program to practice on. The list is `pack`. The code segment is `SlotOf`, which returns the index of an item in the pack, or -1.",
    },
    {
      type: "code",
      code: `List<string> pack = new List<string>();
pack.Add("rope");
pack.Add("torch");
pack.Add("potion");
Console.WriteLine(SlotOf(pack, "torch"));
Console.WriteLine(SlotOf(pack, "arrow"));

int SlotOf(List<string> pack, string wanted)
{
    if (pack[0] == wanted)
    {
        return 0;
    }
    else if (pack[1] == wanted)
    {
        return 1;
    }
    else if (pack[2] == wanted)
    {
        return 2;
    }
    return -1;
}`,
      expect: { out: "1\n-1" },
    },
    {
      type: "ap",
      md: "The 2026 exam's question 2(c): *Consider the list included in part (i) of the List section of your Personalized Project Reference. Explain how the list uses abstraction to manage complexity in your program. Suppose the list was not included in your program. Describe how you would need to adjust the code segment in part (ii) of the List section of your Personalized Project Reference so that it has the same behavior. If it is not possible to have the same behavior without the use of the list, explain why.*\n\nThe point is given only when both halves are there. The second half is about the code segment, not the list, and it names:\n\n1. the separate variables that take the list's place, by name: `slot0`, `slot1`, `slot2`\n2. what happens to the code segment's first line: one parameter for each variable\n3. what replaces each read of the list: `pack[1]` becomes `slot1`\n4. what one more item costs: a variable, a parameter, a test, and a change to every call\n5. when the same behavior is not possible: a list that grows while the program runs",
    },
    {
      type: "text",
      md: "### The first half: how the list manages complexity\n\n`pack` holds every item the player carries under one name. `SlotOf` takes the whole pack as one parameter, `List<string> pack`, so its first line is the same whatever the pack holds, and `pack.Add` can put a new item in the pack while the game runs.\n\n### The second half: the code segment without the list\n\nWithout the list, the pack is three variables: `slot0`, `slot1`, and `slot2`. `SlotOf` needs a parameter for each one: `SlotOf(string slot0, string slot1, string slot2, string wanted)`. Each test changes from `pack[0] == wanted` to `slot0 == wanted`, and the chain still ends with `return -1;`. Every new item costs another variable, another parameter, another `else if`, and a change to every call of `SlotOf`. An item picked up while the game runs cannot be added at all, because the number of variables is fixed when the program is written.\n\nHere is that version. Run it and compare the output with the list version.",
    },
    {
      type: "code",
      code: `string slot0 = "rope";
string slot1 = "torch";
string slot2 = "potion";
Console.WriteLine(SlotOf(slot0, slot1, slot2, "torch"));
Console.WriteLine(SlotOf(slot0, slot1, slot2, "arrow"));

int SlotOf(string slot0, string slot1, string slot2, string wanted)
{
    if (slot0 == wanted)
    {
        return 0;
    }
    else if (slot1 == wanted)
    {
        return 1;
    }
    else if (slot2 == wanted)
    {
        return 2;
    }
    return -1;
}`,
      expect: { out: "1\n-1" },
    },
    {
      type: "text",
      md: "It prints the same `1` and `-1`. That is what *the same behavior* means: the same calls give the same answers, -1 included.\n\nThese answers to the second half earn nothing:\n\n- *I would use separate variables instead of a list.* It never says what happens to `SlotOf`.\n- *The code would be longer and harder to read.* It names no variable, no parameter, and no test.\n- *It would not be possible.* With no reason, this is a guess. The reason has to be specific: the pack grows while the game runs, and variables cannot.",
    },
    {
      type: "mcq",
      id: "lists-3-q4",
      question: "Which answer to the second half of 2(c) earns the point for `SlotOf`?",
      choices: [
        "The pack would be three variables, slot0, slot1, and slot2. SlotOf would take them as three parameters and test slot0, slot1, and slot2 in turn, returning 0, 1, or 2, and -1 after the chain. Each new item needs another variable, parameter, else if, and a changed call.",
        "I would store the items in separate variables instead of a list.",
        "The list keeps the items organized, so without it the code would be messy and harder to change.",
        "It would not be possible, because SlotOf uses a list.",
      ],
      answer: 0,
      why: [
        "It names the variables, the new parameters, what replaces each pack[k], what is returned when nothing matches, and the cost of one more item.",
        "This is the start of an answer. It says nothing about how SlotOf changes.",
        "This is about the first half, and it is vague there too. It names nothing in SlotOf.",
        "SlotOf can be written without a list, as the version above shows. Not possible needs a reason, such as a pack that grows while the game runs.",
      ],
      verify: null,
    },
    {
      type: "exercise",
      id: "lists-3-e1",
      prompt: "The pack now holds four items, and there is no list. Write `SlotOf` for `slot0` to `slot3`. It returns 0, 1, 2, or 3 for the first slot equal to `wanted`, and -1 when none is. Then count what the fourth item cost, compared with the three-slot version above.",
      starter: `int SlotOf(string slot0, string slot1, string slot2, string slot3, string wanted)
{
    return -99;
}`,
      solution: `int SlotOf(string slot0, string slot1, string slot2, string slot3, string wanted)
{
    if (slot0 == wanted)
    {
        return 0;
    }
    else if (slot1 == wanted)
    {
        return 1;
    }
    else if (slot2 == wanted)
    {
        return 2;
    }
    else if (slot3 == wanted)
    {
        return 3;
    }
    return -1;
}`,
      tests: [
        { call: `SlotOf("rope", "torch", "potion", "arrow", "arrow")`, expect: "3" },
        { call: `SlotOf("rope", "torch", "potion", "arrow", "rope")`, expect: "0" },
        { call: `SlotOf("torch", "rope", "torch", "arrow", "torch")`, expect: "0" },
        { call: `SlotOf("rope", "torch", "potion", "arrow", "Torch")`, expect: "-1" },
        { call: `SlotOf("rope", "torch", "potion", "arrow", "map")`, expect: "-1" },
      ],
      hints: [
        "One `if` and three `else if`s, one test for each slot.",
        "The third test has two torches. The chain has to stop at the first one.",
        "`return -1;` goes after the chain, for when no slot matched.",
      ],
    },
    {
      type: "summary",
      items: [
        "A search by hand has one test per index: `bookNames[0] == wanted`, then `else if` for index 1, and so on.",
        "The name is found in one list and the answer comes from another at the same index: `return bookHealth[1];`.",
        "-1 means not there, because -1 is never an index. Check `where != -1` before `bookHealth[where]`, or it crashes with `ArgumentOutOfRangeException`.",
        "`==` on strings is exact: `\"bat\"` does not match `\"Bat\"`.",
        "A search by hand fits one length. `HealthOf` with three tests returns -1 for a monster at index 3.",
        "Without the list, each item is a variable and a parameter, each `pack[k]` becomes that variable, and every new item costs a variable, a parameter, a test, and a changed call.",
      ],
    },
  ],
};

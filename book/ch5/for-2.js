export default {
  id: "for-2",
  chapter: 5,
  number: "5.2",
  title: "Looping over a list",
  from: "For 2 · Day 12",
  minutes: 25,
  skills: ["listloop"],
  goals: [
    "Visit every index of a list of any length with `i < list.Count`",
    "Read parallel lists with the loop's one `i`",
    "Return from inside a loop when the answer is found, and return -1 after the loop",
    "Say what an `else` that returns does to a search, and what a loop does with an empty list",
  ],
  blocks: [
    {
      type: "text",
      md: "In Section 5.1 the loop ran `n` times, for a number handed to it. A loop over a list asks the list instead: `i < names.Count`. `i` takes every index in turn, from 0 to `Count - 1`, the last index.",
    },
    {
      type: "recipe",
      title: "A loop over a list",
      template: "for (int i = 0; i < {list}.Count; i++)",
      parts: [
        { slot: "{list}", meaning: "the list to visit. Inside the loop, `{list}[i]` is the item for this pass" },
        { slot: "i < {list}.Count", meaning: "true for every index from 0 to `Count - 1`, and false when `i` reaches `Count`" },
      ],
    },
    {
      type: "code",
      code: `List<string> names = new List<string>();
List<int> health = new List<int>();
names.Add("Rook");
health.Add(10);
names.Add("Mote");
health.Add(7);
names.Add("Hero");
health.Add(8);
PrintRoster(names, health);
names.Add("Pip");
health.Add(6);
PrintRoster(names, health);

void PrintRoster(List<string> names, List<int> health)
{
    for (int i = 0; i < names.Count; i++)
    {
        Console.WriteLine(i + ". " + names[i] + " (" + health[i] + ")");
    }
}`,
      expect: { out: "0. Rook (10)\n1. Mote (7)\n2. Hero (8)\n0. Rook (10)\n1. Mote (7)\n2. Hero (8)\n3. Pip (6)" },
    },
    {
      type: "text",
      md: "The second call prints four lines, and `PrintRoster` did not change: the test asked the list how long it was. One `i` reads both lists on every pass, as in Section 4.2.",
    },
    {
      type: "text",
      md: "## One pass too many\n\nThe same off-by-one as Section 5.1, `<=` in place of `<`, does something worse to a list. Run this.",
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
for (int i = 0; i <= bookNames.Count; i++)
{
    Console.WriteLine(bookNames[i] + " " + bookHealth[i]);
}`,
      expect: { out: "Grub 4\nBat 2\nWolf 6", crash: "ArgumentOutOfRangeException" },
    },
    {
      type: "note",
      kind: "trap",
      md: "All three lines print, and then the program stops with `ArgumentOutOfRangeException`. On the extra pass `i` is 3, `3 <= 3` is true, and the book has no index 3. The test for a list is always `i < list.Count`.",
    },
    {
      type: "text",
      md: "## Stop when found\n\n`FindPage` is the search from Section 4.3, with one test inside a loop in place of one test per index. Step through both calls. For `Bat`, count the passes. For `Ogre`, watch where the function ends.",
    },
    {
      type: "step",
      code: `List<string> bookNames = new List<string>();
bookNames.Add("Grub");
bookNames.Add("Bat");
bookNames.Add("Wolf");
Console.WriteLine(FindPage(bookNames, "Bat"));
Console.WriteLine(FindPage(bookNames, "Ogre"));

int FindPage(List<string> bookNames, string wanted)
{
    for (int i = 0; i < bookNames.Count; i++)
    {
        if (bookNames[i] == wanted)
        {
            return i;
        }
    }
    return -1;
}`,
      notes: {
        "10": "bookNames.Count is 3, so i will be 0, 1, and 2, unless a return ends the function first.",
        "12": "One test, asked once per pass, with i in the brackets.",
        "14": "Bat is at index 1. return i leaves the whole function, loop and all. Wolf is never looked at.",
        "17": "Reached only after the loop has tried every index and none matched.",
      },
      expect: { out: "1\n-1" },
    },
    {
      type: "text",
      md: "`return i;` leaves the whole function the moment the name matches, not just that pass. `return -1;` is after the loop, so it runs only once every index has been tried.",
    },
    {
      type: "text",
      md: "## The else that returns -1\n\nThis version adds an `else` inside the loop. Run it.",
    },
    {
      type: "code",
      code: `List<string> bookNames = new List<string>();
bookNames.Add("Grub");
bookNames.Add("Bat");
bookNames.Add("Wolf");
Console.WriteLine(FindPage(bookNames, "Bat"));

int FindPage(List<string> bookNames, string wanted)
{
    for (int i = 0; i < bookNames.Count; i++)
    {
        if (bookNames[i] == wanted)
        {
            return i;
        }
        else
        {
            return -1;
        }
    }
    return -1;
}`,
      expect: { out: "-1", warning: "CS0162" },
    },
    {
      type: "text",
      md: "It prints `-1`, and Bat is at index 1. On the first pass `Grub` is not `Bat`, so the `else` returns -1, and there is never a second pass. The build warns `warning CS0162: Unreachable code detected`, pointing at `i++`: every pass ends in a `return`, so the step can never run.",
    },
    {
      type: "note",
      kind: "trap",
      md: "\"This one does not match\" is not \"not there\". -1 belongs after the loop, where it means every index was tried. In an `else` inside the loop, it means only index 0 was.",
    },
    {
      type: "text",
      md: "## Empty lists\n\nAn empty list needs nothing special in a loop. `Count` is 0, the test `0 < 0` is false before the first pass, and the body never runs.",
    },
    {
      type: "code",
      code: `List<string> emptyBook = new List<string>();
Console.WriteLine(emptyBook.Count);
Console.WriteLine(FindPage(emptyBook, "Grub"));

int FindPage(List<string> bookNames, string wanted)
{
    for (int i = 0; i < bookNames.Count; i++)
    {
        if (bookNames[i] == wanted)
        {
            return i;
        }
    }
    return -1;
}`,
      expect: { out: "0\n-1" },
    },
    {
      type: "text",
      md: "`FindPage` goes straight to `return -1;`. What crashes on an empty list is an index read outside a loop, like `bookNames[0]`.\n\n## Without the list\n\nIn Section 4.3, `HealthOf` needed one test per index and missed the Slime at index 3. With a list and a loop, one test covers every index, and `FindPage` searches a book of 3 pages or 300. Without the list there is no loop to write. `page0`, `page1`, and `page2` are three separate names, and a loop cannot count through names. Each one needs its own test.",
    },
    {
      type: "ap",
      md: "The 2025 exam's Set 2, question 2(b), asked for *a modification the other programmer could make to this code segment that would result in a logic error*, and why. A loop over a list gives you specific changes that build and run and give the wrong answer. An `else { return -1; }` inside `FindPage`'s loop makes `FindPage(bookNames, \"Bat\")` return -1 with Bat at index 1, because only index 0 is ever looked at. A test of `i < names.Count - 1` leaves the last item out. Name the change, then a call and what it gives.",
    },
    {
      type: "mcq",
      id: "for-2-q1",
      question: "The party is Rook, Mote, and Hero. What does `PrintNames(names)` print?",
      code: `void PrintNames(List<string> names)
{
    for (int i = 0; i < names.Count - 1; i++)
    {
        Console.WriteLine(names[i]);
    }
}`,
      choices: ["Rook and Mote", "Rook, Mote, and Hero", "Mote and Hero", "Rook, Mote, and Hero, then it crashes"],
      answer: 0,
      why: [
        "With three names the test works out to i < 2, so i takes only 0 and 1. Hero, at index 2, is left out. It builds and runs: a logic error.",
        "That needs i < names.Count. This test stops one index early.",
        "The start is 0, so Rook prints first.",
        "The loop stops early, not late. No index past the end is read.",
      ],
      verify: {
        run: `List<string> names = new List<string>();
names.Add("Rook");
names.Add("Mote");
names.Add("Hero");
PrintNames(names);
void PrintNames(List<string> names)
{
    for (int i = 0; i < names.Count - 1; i++)
    {
        Console.WriteLine(names[i]);
    }
}`,
        out: "Rook\nMote",
      },
    },
    {
      type: "mcq",
      id: "for-2-q2",
      question: "The book is Grub, Bat, and Wolf. In the call `FindPage(bookNames, \"Bat\")`, how many times is the test `bookNames[i] == wanted` asked?",
      code: `int FindPage(List<string> bookNames, string wanted)
{
    for (int i = 0; i < bookNames.Count; i++)
    {
        if (bookNames[i] == wanted)
        {
            return i;
        }
    }
    return -1;
}`,
      choices: ["2", "3", "1", "4"],
      answer: 0,
      why: [
        "Once for Grub at index 0, and once for Bat at index 1. The second test is true, and return i ends the function.",
        "3 would mean Wolf was tested too. The function returned at index 1.",
        "Grub is tested first, and it is not Bat.",
        "The book has three pages, and the test is never asked for an index that is not there.",
      ],
      verify: {
        run: `int asked = 0;
List<string> bookNames = new List<string>();
bookNames.Add("Grub");
bookNames.Add("Bat");
bookNames.Add("Wolf");
int where = FindPage(bookNames, "Bat");
Console.WriteLine(where + " " + asked);
int FindPage(List<string> bookNames, string wanted)
{
    for (int i = 0; i < bookNames.Count; i++)
    {
        asked = asked + 1;
        if (bookNames[i] == wanted)
        {
            return i;
        }
    }
    return -1;
}`,
        out: "1 2",
      },
    },
    {
      type: "mcq",
      id: "for-2-q3",
      question: "`names` is an empty list. Which line crashes when it runs?",
      choices: [
        "string first = names[0];",
        "int howMany = names.Count;",
        "for (int i = 0; i < names.Count; i++)",
        "string joined = \"\";",
      ],
      mono: true,
      answer: 0,
      why: [
        "An empty list has no index 0. This builds, then crashes with ArgumentOutOfRangeException.",
        "Count of an empty list is 0. Asking for it is always safe.",
        "The test 0 < 0 is false before the first pass, so the body, and any names[i] in it, never runs.",
        "This line does not touch the list.",
      ],
      verify: {
        cases: [
          { run: `List<string> names = new List<string>();\nstring first = names[0];\nConsole.WriteLine(first);`, crash: "ArgumentOutOfRangeException" },
          { run: `List<string> names = new List<string>();\nint howMany = names.Count;\nConsole.WriteLine(howMany);`, out: "0" },
          { run: `List<string> names = new List<string>();\nfor (int i = 0; i < names.Count; i++)\n{\n    Console.WriteLine(names[i]);\n}\nConsole.WriteLine("done");`, out: "done" },
          { run: `List<string> names = new List<string>();\nstring joined = "";\nConsole.WriteLine("[" + joined + "]");`, out: "[]" },
        ],
      },
    },
    {
      type: "parsons",
      id: "for-2-p1",
      prompt: "Put the lines in order so the program prints the pack as a numbered list: `1) rope`, `2) torch`, `3) potion`.",
      lines: [
        `List<string> pack = new List<string>();`,
        `pack.Add("rope");`,
        `pack.Add("torch");`,
        `pack.Add("potion");`,
        `for (int i = 0; i < pack.Count; i++)`,
        `{`,
        `    Console.WriteLine((i + 1) + ") " + pack[i]);`,
        `}`,
      ],
      distractors: [`for (int i = 0; i <= pack.Count; i++)`, `    Console.WriteLine((i + 1) + ") " + pack[i + 1]);`],
      expect: { out: "1) rope\n2) torch\n3) potion" },
    },
    {
      type: "exercise",
      id: "for-2-e1",
      prompt: "`names` and `carrying` are parallel lists: `carrying[i]` is the item that `names[i]` carries. Write `WhoHas`. It returns the name of the first character carrying `wanted`, or `\"nobody\"` when no one is, or when the lists are empty.",
      starter: `string WhoHas(List<string> names, List<string> carrying, string wanted)
{
    return "?";
}`,
      solution: `string WhoHas(List<string> names, List<string> carrying, string wanted)
{
    for (int i = 0; i < carrying.Count; i++)
    {
        if (carrying[i] == wanted)
        {
            return names[i];
        }
    }
    return "nobody";
}`,
      given: `List<string> names = new List<string>();
List<string> carrying = new List<string>();
names.Add("Rook");
carrying.Add("rope");
names.Add("Mote");
carrying.Add("torch");
names.Add("Hero");
carrying.Add("potion");
names.Add("Pip");
carrying.Add("torch");`,
      tests: [
        { call: `WhoHas(names, carrying, "rope")`, expect: "Rook" },
        { call: `WhoHas(names, carrying, "potion")`, expect: "Hero" },
        { call: `WhoHas(names, carrying, "torch")`, expect: "Mote" },
        { call: `WhoHas(names, carrying, "arrow")`, expect: "nobody" },
        { call: `WhoHas(new List<string>(), new List<string>(), "rope")`, expect: "nobody" },
      ],
      hints: [
        "Loop over `carrying` with `i < carrying.Count`, and test `carrying[i] == wanted`.",
        "When it matches, return the name at the same index: `names[i]`.",
        "`return \"nobody\";` goes after the loop, not in an `else`.",
      ],
    },
    {
      type: "summary",
      items: [
        "`for (int i = 0; i < names.Count; i++)` visits every index of a list of any length, from 0 to `Count - 1`.",
        "One `i` reads parallel lists: `names[i]` and `health[i]` are the same character on every pass.",
        "`i <= names.Count` prints every item, then crashes with `ArgumentOutOfRangeException` on the extra pass.",
        "`return` inside a loop leaves the whole function. `FindPage(bookNames, \"Bat\")` tests two pages and returns 1.",
        "-1 for \"not there\" goes after the loop. An `else { return -1; }` inside it looks only at index 0 and warns `CS0162`.",
        "On an empty list the loop runs zero times. An index read like `names[0]` outside a loop is what crashes.",
      ],
    },
  ],
};

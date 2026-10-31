export default {
  id: "lists-1",
  chapter: 4,
  number: "4.1",
  title: "Make a list, add to it, count it",
  from: "Lists 1 · Day 8",
  minutes: 25,
  skills: ["index"],
  goals: [
    "Make a `List<string>` or a `List<int>` and add items to it",
    "Read an item by its index, counting from 0",
    "Find the last item of a list of any length with `Count - 1`",
    "Say what goes wrong when an index is past the end",
  ],
  blocks: [
    {
      type: "text",
      md: "Until now one variable held one value: `maxHp` held one number and `name` held one word. A **list** is one variable that holds many values, in order, with room for more.",
    },
    {
      type: "recipe",
      title: "Making a list",
      template: "List<{Type}> {name} = new List<{Type}>();",
      parts: [
        { slot: "{Type}", meaning: "what every item in the list is: `string`, `int`, `double`, or `bool`" },
        { slot: "{name}", meaning: "the name of the variable that holds the list" },
        { slot: "new List<{Type}>()", meaning: "makes a new list with nothing in it" },
      ],
    },
    {
      type: "text",
      md: "`Add` puts one more item on the end of the list. `Count` is how many items the list has right now.",
    },
    {
      type: "code",
      code: `List<string> camp = new List<string>();
Console.WriteLine(camp.Count);
camp.Add("rope");
camp.Add("torch");
camp.Add("bread");
Console.WriteLine(camp.Count);`,
      expect: { out: "0\n3" },
    },
    {
      type: "text",
      md: "## Counting from 0\n\nEvery item has an **index**: its place in the list. The first item is at index 0, so in a list of three the indexes are 0, 1, and 2. You read an item by putting its index in square brackets.",
    },
    {
      type: "code",
      code: `List<string> camp = new List<string>();
camp.Add("rope");
camp.Add("torch");
camp.Add("bread");
Console.WriteLine(camp[0]);
Console.WriteLine(camp[2]);`,
      expect: { out: "rope\nbread" },
    },
    {
      type: "note",
      kind: "trap",
      md: "`Count` is how many. The last index is one less. In a list of three, `camp.Count` is 3 and the last index is 2. They are never the same number.",
    },
    {
      type: "text",
      md: "## An index past the end\n\nRun this. The compiler checks that an index is an `int`, and 3 is an `int`, so it builds. Whether the list has anything at index 3 is only known when the line runs.",
    },
    {
      type: "code",
      code: `List<string> camp = new List<string>();
camp.Add("rope");
camp.Add("torch");
camp.Add("bread");
Console.WriteLine(camp.Count);
Console.WriteLine(camp[3]);`,
      expect: { out: "3", crash: "ArgumentOutOfRangeException" },
    },
    {
      type: "text",
      md: "The first line prints `3`. Then the program stops with `ArgumentOutOfRangeException: Index was out of range. Must be non-negative and less than the size of the collection.` Change the `3` in the brackets to `2` and run it again.",
    },
    {
      type: "text",
      md: "## The last item, for any length\n\nTo reach the last item without knowing how long the list is, ask the list for its `Count` and take one away. Step through this one line at a time and watch `camp` grow in the Variables pane.",
    },
    {
      type: "step",
      code: `List<string> camp = new List<string>();
camp.Add("rope");
camp.Add("torch");
camp.Add("bread");
Console.WriteLine(LastSupply(camp));
camp.Add("flint");
Console.WriteLine(LastSupply(camp));

string LastSupply(List<string> supplies)
{
    return supplies[supplies.Count - 1];
}`,
      notes: {
        "1": "Makes an empty list of strings called camp. Its Count is 0.",
        "5": "Calls LastSupply with the whole list. Inside, supplies is the same list as camp.",
        "11": "supplies.Count is 3 here, so this reads supplies[2].",
        "6": "Adds a fourth item. Nothing in LastSupply changes.",
      },
      expect: { out: "bread\nflint" },
    },
    {
      type: "text",
      md: "`LastSupply` did not change between the two calls. The list did, and the function asked it again. That is what `Count` gives you: no variable to keep up to date by hand.",
    },
    {
      type: "text",
      md: "## Without the list\n\nHere is the same camp with one variable per item and a count kept by hand.",
    },
    {
      type: "code",
      code: `string supply1 = "rope";
string supply2 = "torch";
string supply3 = "bread";
int supplyCount = 3;
Console.WriteLine(supplyCount + " supplies, the last is " + supply3);`,
      expect: { out: "3 supplies, the last is bread" },
    },
    {
      type: "text",
      md: "Picking up flint now costs a new variable, `supply4`, a line that changes `supplyCount` by hand, and a change to every line that names the last supply. Forget to change `supplyCount` and the count is wrong, with no error to warn you.",
    },
    {
      type: "ap",
      md: "The 2026 exam asked, about a list in your own program: *Suppose the list was not included in your program. Describe how you would need to adjust the code.* The answer names the separate variables, the count kept by hand, and what each new item costs, as above. Section 4.3 practices the whole question.",
    },
    {
      type: "mcq",
      id: "lists-1-q1",
      question: "What is printed?",
      code: `List<int> gold = new List<int>();
gold.Add(15);
gold.Add(40);
gold.Add(5);
gold.Add(22);
Console.WriteLine(gold[1] + gold.Count);`,
      choices: ["44", "19", "404", "26"],
      answer: 0,
      why: [
        "gold[1] is 40, the second item, and gold.Count is 4. Both are ints, so + adds them: 44.",
        "19 is gold[0] plus Count. Indexes start at 0, so gold[1] is the second item.",
        "+ between two ints adds. It joins text only when one side is a string.",
        "22 is the last item, at index 3. The line asks for index 1.",
      ],
      verify: { out: "44" },
    },
    {
      type: "mcq",
      id: "lists-1-q2",
      question: "A list called `pack` has 6 items. Which line prints the last one?",
      choices: ["Console.WriteLine(pack[pack.Count - 1]);", "Console.WriteLine(pack[pack.Count]);", "Console.WriteLine(pack[6]);", "Console.WriteLine(pack.Count - 1);"],
      mono: true,
      answer: 0,
      why: [
        "pack.Count is 6 and the last index is 5, one less.",
        "pack.Count is 6, and there is no index 6. It builds, then crashes with ArgumentOutOfRangeException.",
        "The indexes of a list of 6 are 0 to 5. Index 6 crashes.",
        "This prints the number 5, not the item at index 5.",
      ],
      verify: {
        cases: [
          { run: `List<string> pack = new List<string> { "a", "b", "c", "d", "e", "f" };\nConsole.WriteLine(pack[pack.Count - 1]);`, out: "f" },
          { run: `List<string> pack = new List<string> { "a", "b", "c", "d", "e", "f" };\nConsole.WriteLine(pack[pack.Count]);`, crash: "ArgumentOutOfRangeException" },
          { run: `List<string> pack = new List<string> { "a", "b", "c", "d", "e", "f" };\nConsole.WriteLine(pack[6]);`, crash: "ArgumentOutOfRangeException" },
          { run: `List<string> pack = new List<string> { "a", "b", "c", "d", "e", "f" };\nConsole.WriteLine(pack.Count - 1);`, out: "5" },
        ],
      },
    },
    {
      type: "mcq",
      id: "lists-1-q3",
      question: "What happens?",
      code: `List<string> keys = new List<string>();
keys.Add("bone key");
keys.Add("iron key");
Console.WriteLine(keys.Length);`,
      choices: [
        "It does not build: 'List<string>' does not contain a definition for 'Length'.",
        "It prints 2.",
        "It prints 1.",
        "It builds, then crashes when it runs.",
      ],
      answer: 0,
      why: [
        "A list has Count, not Length. The build stops with CS1061 before anything runs.",
        "keys.Count would print 2. A list has no Length.",
        "1 is the last index. This line does not build.",
        "The compiler catches this before the program runs.",
      ],
      verify: { error: "CS1061" },
    },
    {
      type: "parsons",
      id: "lists-1-p1",
      prompt: "Put the lines in order so the program prints `2` and then `arrow`.",
      lines: [
        `List<string> quiver = new List<string>();`,
        `quiver.Add("bow");`,
        `quiver.Add("arrow");`,
        `Console.WriteLine(quiver.Count);`,
        `Console.WriteLine(quiver[quiver.Count - 1]);`,
      ],
      distractors: [`Console.WriteLine(quiver[quiver.Count]);`],
      expect: { out: "2\narrow" },
    },
    {
      type: "exercise",
      id: "lists-1-e1",
      prompt: "Write `FirstSupply`. It returns the first item of the list, or `\"nothing\"` when the list is empty. Test for the empty list first: `supplies[0]` on an empty list crashes.",
      starter: `string FirstSupply(List<string> supplies)
{
    return "?";
}`,
      solution: `string FirstSupply(List<string> supplies)
{
    if (supplies.Count == 0)
    {
        return "nothing";
    }
    return supplies[0];
}`,
      given: `List<string> Camp(string a, string b, string c)
{
    List<string> list = new List<string>();
    list.Add(a);
    list.Add(b);
    list.Add(c);
    return list;
}`,
      tests: [
        { call: `FirstSupply(Camp("rope", "torch", "bread"))`, expect: "rope" },
        { call: `FirstSupply(Camp("flint", "map", "coin"))`, expect: "flint" },
        { call: `FirstSupply(new List<string>())`, expect: "nothing" },
      ],
      hints: [
        "The first item is at index 0.",
        "`supplies.Count == 0` is true for an empty list. Put that `if` before the line that reads `supplies[0]`.",
      ],
    },
    {
      type: "summary",
      items: [
        "`List<string> camp = new List<string>();` makes an empty list. `camp.Add(x)` puts `x` on the end.",
        "`camp.Count` is how many items there are. A new list has a `Count` of 0.",
        "Indexes start at 0, so the last index is `camp.Count - 1`.",
        "An index past the end builds, then crashes with `ArgumentOutOfRangeException` when the line runs.",
        "A list has `Count`, not `Length`. `camp.Length` does not build (CS1061).",
        "Without a list, every item is its own variable and the count is kept by hand.",
      ],
    },
  ],
};

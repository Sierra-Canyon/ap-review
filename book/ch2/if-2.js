export default {
  id: "if-2",
  chapter: 2,
  number: "2.2",
  title: "else if: the first true test wins",
  from: "Review 2 · Day 0",
  minutes: 25,
  skills: ["wr-logic"],
  goals: [
    "Write an `if` / `else if` / `else` chain",
    "Say which block of a chain runs for a value, and which tests are never asked",
    "Put the tests of a chain in an order that gives every value the right answer",
    "Tell a chain from a row of separate `if`s",
  ],
  blocks: [
    {
      type: "text",
      md: "An `else if` adds another test to an `if`. C# asks the tests from the top and runs the block of the **first** one that is true. Every test below that one is skipped. A last `else` runs only when every test was false.",
    },
    {
      type: "recipe",
      title: "A chain",
      template: "if ({test 1})\n{\n    {runs when test 1 is true}\n}\nelse if ({test 2})\n{\n    {runs when test 1 is false and test 2 is true}\n}\nelse\n{\n    {runs when every test is false}\n}",
      parts: [
        { slot: "{test 1}", meaning: "asked first, every time" },
        { slot: "else if", meaning: "asked only when every test above it was false. A chain can have as many as it needs." },
        { slot: "else", meaning: "optional. Runs when no test was true." },
      ],
    },
    {
      type: "text",
      md: "## The difficulty line\n\nThis chain has no `else`. `difficulty` starts as `\"normal\"`, and the chain may change it.",
    },
    {
      type: "code",
      code: `int maxHp = 10;
string difficulty = "normal";
if (maxHp >= 12)
{
    difficulty = "easy";
}
else if (maxHp <= 6)
{
    difficulty = "hard";
}
Console.WriteLine("Difficulty: " + difficulty);`,
      expect: { out: "Difficulty: normal" },
    },
    {
      type: "text",
      md: "10 is not 12 or more and not 6 or less, so neither block runs and `difficulty` keeps `\"normal\"`. Change line 1 to `int maxHp = 12;` and it prints `Difficulty: easy`. The first test was true, so `maxHp <= 6` was never asked.",
    },
    {
      type: "text",
      md: "## Four answers\n\nA monster's health decides how much of a threat it is: 3 or less is `weak`, 4 to 8 is `fair`, 9 to 15 is `tough`, and more than 15 is `deadly`. Step through it with a monster at 6 health.",
    },
    {
      type: "step",
      code: `int monsterHp = 6;
if (monsterHp <= 3)
{
    Console.WriteLine("weak");
}
else if (monsterHp <= 8)
{
    Console.WriteLine("fair");
}
else if (monsterHp <= 15)
{
    Console.WriteLine("tough");
}
else
{
    Console.WriteLine("deadly");
}`,
      notes: {
        "2": "`6 <= 3` is false. The chain moves to the next test.",
        "6": "`6 <= 8` is true. This is the first true test, so its block runs.",
        "8": "After this block the chain is finished. `monsterHp <= 15` is never asked.",
      },
      expect: { out: "fair" },
    },
    {
      type: "text",
      md: "6 also passes `monsterHp <= 15`. It prints `fair` because `monsterHp <= 8` comes first. When `monsterHp <= 8` is asked, the chain already knows `monsterHp` is more than 3, so the test needs no lower limit.",
    },
    {
      type: "text",
      md: "## Order matters\n\nHere is the same chain with the `tough` test moved to the top.",
    },
    {
      type: "code",
      code: `int monsterHp = 6;
if (monsterHp <= 15)
{
    Console.WriteLine("tough");
}
else if (monsterHp <= 3)
{
    Console.WriteLine("weak");
}
else if (monsterHp <= 8)
{
    Console.WriteLine("fair");
}
else
{
    Console.WriteLine("deadly");
}`,
      expect: { out: "tough" },
    },
    {
      type: "note",
      kind: "trap",
      md: "6 is 15 or less, so the first test is true and the chain prints `tough`. Every monster with 15 health or less is now `tough`, and `weak` and `fair` can never print. It builds and runs with no error or warning. With `<=` tests, ask the smallest number first. With `>=` tests, ask the largest first.",
    },
    {
      type: "text",
      md: "## else if or a second if\n\nAn `if` with no `else` in front of it is a separate question, asked every time. When several are true, all of their blocks run, and each one stores over the one before.",
    },
    {
      type: "code",
      code: `int monsterHp = 2;
string threat = "deadly";
if (monsterHp <= 3)
{
    threat = "weak";
}
if (monsterHp <= 8)
{
    threat = "fair";
}
if (monsterHp <= 15)
{
    threat = "tough";
}
Console.WriteLine(threat);`,
      expect: { out: "tough" },
    },
    {
      type: "text",
      md: "2 passes all three tests, so all three blocks run, and the last one stores `\"tough\"`. Put `else` in front of the second and third `if` and it prints `weak`.",
    },
    {
      type: "note",
      kind: "trap",
      md: "Inside the blocks, change `threat` with no type in front. `string threat = \"weak\";` inside a block asks for a second variable named `threat`, and the build stops:\n\n`CS0136: A local or parameter named 'threat' cannot be declared in this scope because that name is used in an enclosing local scope to define a local or parameter`",
    },
    {
      type: "code",
      code: `int monsterHp = 2;
string threat = "deadly";
if (monsterHp <= 3)
{
    string threat = "weak";
}
Console.WriteLine(threat);`,
      expect: { error: "CS0136" },
    },
    {
      type: "ap",
      md: "A **logic error** builds and runs and gives the wrong answer, with no message. The 2025 exam (Set 2, 2(b)) asked for a change to a code segment in your Personalized Project Reference that would cause a logic error, and why. When the segment has an `if` chain, moving a test is one answer: put `monsterHp <= 15` first, and a monster with 6 health prints `tough`, because the chain stops at the first true test and never asks `monsterHp <= 8`. Name the input and say what comes out wrong.",
    },
    {
      type: "mcq",
      id: "if-2-q1",
      question: "What is printed?",
      code: `int gold = 40;
if (gold >= 50)
{
    Console.WriteLine("rich");
}
else if (gold >= 20)
{
    Console.WriteLine("comfortable");
}
else if (gold >= 10)
{
    Console.WriteLine("scraping by");
}
else
{
    Console.WriteLine("broke");
}`,
      choices: ["comfortable", "comfortable and then scraping by", "rich", "broke"],
      answer: 0,
      why: [
        "40 >= 50 is false. 40 >= 20 is true, so that block runs and the chain is finished.",
        "40 >= 10 is also true, but the chain stopped at the first true test.",
        "rich needs 50 or more.",
        "else runs only when every test is false, and 40 >= 20 is true.",
      ],
      verify: { out: "comfortable" },
    },
    {
      type: "mcq",
      id: "if-2-q2",
      question: "What is printed?",
      code: `int hp = 0;
string mood = "fine";
if (hp <= 0)
{
    mood = "down";
}
if (hp <= 5)
{
    mood = "hurt";
}
Console.WriteLine(mood);`,
      choices: ["hurt", "down", "fine", "downhurt"],
      answer: 0,
      why: [
        "These are two separate ifs. Both are true for 0, so both blocks run, and the second stores \"hurt\" over \"down\".",
        "down would be right with else in front of the second if.",
        "0 <= 0 is true, so mood changes.",
        "Each block stores a whole new value in mood. Nothing joins them.",
      ],
      verify: { out: "hurt" },
    },
    {
      type: "mcq",
      id: "if-2-q3",
      question: "`x` is an `int`. When does this code print `B`?",
      code: `if (x > 10)
{
    Console.WriteLine("A");
}
else if (x > 5)
{
    Console.WriteLine("B");
}`,
      choices: [
        "When x is 6, 7, 8, 9, or 10",
        "When x is more than 5, 11 and up included",
        "When x is more than 10",
        "When x is 5 or less",
      ],
      answer: 0,
      why: [
        "The else if is asked only when x > 10 was false, so x is 10 or less there. x > 5 then leaves 6 to 10.",
        "For 11 and up, x > 10 is true, so the chain prints A and stops.",
        "More than 10 prints A.",
        "For 5 or less, both tests are false and nothing prints.",
      ],
      verify: {
        cases: [
          { run: `int x = 6;\nif (x > 10)\n{\n    Console.WriteLine("A");\n}\nelse if (x > 5)\n{\n    Console.WriteLine("B");\n}\nx = 10;\nif (x > 10)\n{\n    Console.WriteLine("A");\n}\nelse if (x > 5)\n{\n    Console.WriteLine("B");\n}`, out: "B\nB" },
          { run: `int x = 11;\nif (x > 10)\n{\n    Console.WriteLine("A");\n}\nelse if (x > 5)\n{\n    Console.WriteLine("B");\n}`, out: "A" },
          { run: `int x = 5;\nif (x > 10)\n{\n    Console.WriteLine("A");\n}\nelse if (x > 5)\n{\n    Console.WriteLine("B");\n}`, out: "" },
        ],
      },
    },
    {
      type: "mcq",
      id: "if-2-q4",
      question: "The plan: level 6 and up meets an Ogre, levels 3 to 5 meet a Wolf, and below 3 a Grub. What does this print?",
      code: `int level = 9;
if (level >= 3)
{
    Console.WriteLine("Wolf");
}
else if (level >= 6)
{
    Console.WriteLine("Ogre");
}
else
{
    Console.WriteLine("Grub");
}`,
      choices: ["Wolf", "Ogre", "Wolf and then Ogre", "Grub"],
      answer: 0,
      why: [
        "9 >= 3 is true, and it is the first test, so Wolf prints and the chain stops. With >= tests, the largest number has to come first.",
        "Ogre is what the plan wants, but level >= 6 is never asked: level >= 3 was already true.",
        "A chain runs one block at most.",
        "else runs only when every test is false.",
      ],
      verify: { out: "Wolf" },
    },
    {
      type: "parsons",
      id: "if-2-p1",
      prompt: "Put the lines in order so the program prints `The torch flickers.`",
      lines: [
        `int turns = 2;`,
        `if (turns == 0)`,
        `{`,
        `    Console.WriteLine("The torch is out.");`,
        `}`,
        `else if (turns <= 3)`,
        `{`,
        `    Console.WriteLine("The torch flickers.");`,
        `}`,
      ],
      distractors: [`else if (turns = 3)`],
      expect: { out: "The torch flickers." },
    },
    {
      type: "exercise",
      id: "if-2-e1",
      prompt: "Write a chain so `HealthWord` returns `\"down\"` for 0 or less, `\"critical\"` for 1 to 3, `\"wounded\"` for 4 to 7, and `\"fine\"` for 8 or more.",
      starter: `string HealthWord(int hp)
{
    string word = "fine";
    return word;
}`,
      solution: `string HealthWord(int hp)
{
    string word = "fine";
    if (hp <= 0)
    {
        word = "down";
    }
    else if (hp <= 3)
    {
        word = "critical";
    }
    else if (hp <= 7)
    {
        word = "wounded";
    }
    return word;
}`,
      tests: [
        { call: `HealthWord(0)`, expect: "down" },
        { call: `HealthWord(-2)`, expect: "down" },
        { call: `HealthWord(3)`, expect: "critical" },
        { call: `HealthWord(4)`, expect: "wounded" },
        { call: `HealthWord(7)`, expect: "wounded" },
        { call: `HealthWord(8)`, expect: "fine" },
      ],
      hints: [
        "Ask the smallest boundary first: `hp <= 0`, then `hp <= 3`, then `hp <= 7`.",
        "`word` already holds `\"fine\"`, so the chain needs no `else`.",
        "If every number from 1 to 7 gives the same word, a later test is catching it first, or the chain is separate `if`s.",
      ],
    },
    {
      type: "summary",
      items: [
        "A chain asks its tests from the top and runs only the block of the first true one.",
        "Tests below the first true one are never asked. `else` runs only when every test was false.",
        "With `<=` tests, put the smallest number first. A larger one first claims every value below it.",
        "Separate `if`s are each asked every time, and a later block stores over an earlier one.",
        "Inside a block, change a variable with no type in front. `string threat = ...` there does not build (CS0136).",
        "A wrong order builds and runs with no message: a logic error.",
      ],
    },
  ],
};

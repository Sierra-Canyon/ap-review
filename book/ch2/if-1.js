export default {
  id: "if-1",
  chapter: 2,
  number: "2.1",
  title: "if and else, and comparing two values",
  from: "Review 2 · Day 0",
  minutes: 25,
  skills: [],
  goals: [
    "Write an `if` with an `else` and say which block runs",
    "Compare two values with `<`, `<=`, `>`, `>=`, `==`, and `!=`",
    "Tell `=` (store) from `==` (compare)",
    "Test a condition with the number right on its boundary",
  ],
  blocks: [
    {
      type: "text",
      md: "An `if` runs a block of code only when its **condition** is true. The condition goes in parentheses. The block goes in braces, each brace on its own line.",
    },
    {
      type: "code",
      code: `int hp = 3;
if (hp <= 3)
{
    Console.WriteLine("Rook is badly hurt.");
}
Console.WriteLine("The fight goes on.");`,
      expect: { out: "Rook is badly hurt.\nThe fight goes on." },
    },
    {
      type: "text",
      md: "Change the `3` on line 1 to `9` and run it again. The block is skipped, and the last line, outside the braces, runs either way.",
    },
    {
      type: "text",
      md: "## Comparing\n\nA condition compares two values, and the answer is a `bool`: `true` or `false`.\n\n- `<` less than, `<=` less than or equal to\n- `>` greater than, `>=` greater than or equal to\n- `==` equal to, `!=` not equal to",
    },
    {
      type: "code",
      code: `int hp = 8;
Console.WriteLine(hp < 8);
Console.WriteLine(hp <= 8);
Console.WriteLine(hp == 8);
Console.WriteLine(hp != 8);`,
      expect: { out: "False\nTrue\nTrue\nFalse" },
    },
    {
      type: "recipe",
      title: "if and else",
      template: "if ({condition})\n{\n    {runs when the condition is true}\n}\nelse\n{\n    {runs when the condition is false}\n}",
      parts: [
        { slot: "{condition}", meaning: "a comparison, or anything else that is `true` or `false`, always in parentheses" },
        { slot: "if block", meaning: "runs only when the condition is `true`" },
        { slot: "else block", meaning: "runs only when the condition is `false`. It is optional." },
      ],
    },
    {
      type: "text",
      md: "With an `else`, exactly one of the two blocks runs. Step through this one and watch which lines the arrow skips.",
    },
    {
      type: "step",
      code: `int hp = 8;
int damage = 5;
hp = hp - damage;
if (hp <= 0)
{
    Console.WriteLine("Hero falls.");
}
else
{
    Console.WriteLine("Hero has " + hp + " left.");
}
Console.WriteLine("Next turn.");`,
      notes: {
        "3": "An Ogre hits for 5. hp is now 3.",
        "4": "`3 <= 0` is false, so the block under the if is skipped.",
        "10": "The else block runs, because the condition was false.",
        "12": "Outside both blocks. This line runs whichever block ran.",
      },
      expect: { out: "Hero has 3 left.\nNext turn." },
    },
    {
      type: "note",
      kind: "trap",
      md: "One `=` stores. Two, `==`, compare. `if (hp = 0)` tries to store 0 in `hp`, and the build stops:\n\n`CS0029: Cannot implicitly convert type 'int' to 'bool'`\n\nThe condition has to be `true` or `false`, and storing 0 gives the `int` 0.",
    },
    {
      type: "code",
      code: `int hp = 3;
if (hp = 0)
{
    Console.WriteLine("Rook falls.");
}`,
      expect: { error: "CS0029" },
    },
    {
      type: "text",
      md: "## On the boundary\n\n`>` and `>=` give different answers only when the two sides are equal. The door opens for 5 keys or more, and the party has exactly 5:",
    },
    {
      type: "code",
      code: `int keys = 5;
if (keys > 5)
{
    Console.WriteLine("The door opens.");
}
else
{
    Console.WriteLine("The door stays shut.");
}`,
      expect: { out: "The door stays shut." },
    },
    {
      type: "text",
      md: "`5 > 5` is false, so it prints `The door stays shut.` The rule says 5 or more, which is `keys >= 5`. Change the `>` to `>=` and it prints `The door opens.` Test every condition with the number on its boundary and with one on each side of it.",
    },
    {
      type: "text",
      md: "## Comparing strings\n\n`==` works on strings too. It compares every character, and a capital letter is a different character.",
    },
    {
      type: "code",
      code: `string answer = "Open";
if (answer == "open")
{
    Console.WriteLine("The gate swings open.");
}
else
{
    Console.WriteLine("Nothing happens.");
}`,
      expect: { out: "Nothing happens." },
    },
    {
      type: "text",
      md: "`\"Open\"` and `\"open\"` differ in their first character, so `==` is false. `answer.ToLower()` gives back the string in small letters, so `answer.ToLower() == \"open\"` is true for `Open`, `OPEN`, and `open`.",
    },
    {
      type: "code",
      code: `string answer = "OPEN";
Console.WriteLine(answer == "open");
Console.WriteLine(answer.ToLower() == "open");`,
      expect: { out: "False\nTrue" },
    },
    {
      type: "mcq",
      id: "if-1-q1",
      question: "What is printed?",
      code: `int hp = 4;
if (hp > 4)
{
    Console.WriteLine("steady");
}
else
{
    Console.WriteLine("shaky");
}`,
      choices: ["shaky", "steady", "steady and then shaky", "Nothing is printed."],
      answer: 0,
      why: [
        "4 > 4 is false, because 4 is not greater than itself. The else block runs.",
        "steady needs hp > 4 to be true. 4 is on the boundary, and > leaves it out.",
        "With an else, exactly one of the two blocks runs.",
        "When the condition is false, the else block runs.",
      ],
      verify: { out: "shaky" },
    },
    {
      type: "mcq",
      id: "if-1-q2",
      question: "What happens?",
      code: `int hp = 5;
if (hp <= 0);
{
    Console.WriteLine("Rook falls.");
}`,
      choices: [
        "It prints Rook falls., and the build gives warning CS0642: Possible mistaken empty statement.",
        "It prints nothing, because 5 <= 0 is false.",
        "It does not build.",
        "It builds, then crashes when it runs.",
      ],
      answer: 0,
      why: [
        "The ; ends the if with an empty statement. The braces below are a plain block that always runs.",
        "The if controls only the empty statement before its ;. The block after it is not part of the if.",
        "CS0642 is a warning, not an error, so the program builds.",
        "Nothing in it can fail at run time. It prints one line.",
      ],
      verify: { out: "Rook falls.", warning: "CS0642" },
    },
    {
      type: "mcq",
      id: "if-1-q3",
      question: "What is printed?",
      code: `string day = "friday";
if (day == "Friday")
{
    Console.WriteLine("Market day");
}
else
{
    Console.WriteLine("Closed");
}`,
      choices: ["Closed", "Market day", "Market day and then Closed", "Nothing. It does not build."],
      answer: 0,
      why: [
        "\"friday\" and \"Friday\" differ in their first letter, so == is false.",
        "== on strings counts capital letters. The two strings are not equal.",
        "With an else, exactly one of the two blocks runs.",
        "== between two strings builds and gives true or false.",
      ],
      verify: { out: "Closed" },
    },
    {
      type: "mcq",
      id: "if-1-q4",
      question: "`arrows` is an `int`. Which condition is true when `arrows` is 0, and false for every other number?",
      choices: ["arrows == 0", "arrows = 0", "arrows <= 0", "arrows != 0"],
      mono: true,
      answer: 0,
      why: [
        "== compares and gives true only when the two sides are equal.",
        "One = stores 0 in arrows. Inside an if it does not build (CS0029).",
        "This is also true for -1, -2, and every other negative number.",
        "!= means not equal, so it is false at 0 and true everywhere else.",
      ],
      verify: {
        cases: [
          { run: `int arrows = 0;\nConsole.WriteLine(arrows == 0);\narrows = 1;\nConsole.WriteLine(arrows == 0);`, out: "True\nFalse" },
          { run: `int arrows = 0;\nif (arrows = 0)\n{\n    Console.WriteLine("none");\n}`, error: "CS0029" },
          { run: `int arrows = -1;\nConsole.WriteLine(arrows <= 0);`, out: "True" },
          { run: `int arrows = 0;\nConsole.WriteLine(arrows != 0);`, out: "False" },
        ],
      },
    },
    {
      type: "parsons",
      id: "if-1-p1",
      prompt: "Put the lines in order so the program prints `The torch is lit.`",
      lines: [
        `int torches = 2;`,
        `if (torches > 0)`,
        `{`,
        `    Console.WriteLine("The torch is lit.");`,
        `}`,
        `else`,
        `{`,
        `    Console.WriteLine("It is dark.");`,
        `}`,
      ],
      distractors: [`if (torches = 0)`],
      expect: { out: "The torch is lit." },
    },
    {
      type: "exercise",
      id: "if-1-e1",
      prompt: "The vault door opens for 3 keys or more. Write an `if` so that `result` becomes `\"open\"` when `keys` is 3 or more. Otherwise it stays `\"locked\"`.",
      starter: `string Door(int keys)
{
    string result = "locked";
    return result;
}`,
      solution: `string Door(int keys)
{
    string result = "locked";
    if (keys >= 3)
    {
        result = "open";
    }
    return result;
}`,
      tests: [
        { call: `Door(3)`, expect: "open" },
        { call: `Door(2)`, expect: "locked" },
        { call: `Door(10)`, expect: "open" },
        { call: `Door(0)`, expect: "locked" },
      ],
      hints: [
        "Inside the `if`, change `result` with no `string` in front: `result = \"open\";`",
        "3 is on the boundary, and 3 keys opens the door. Which of `>` and `>=` is true for 3?",
      ],
    },
    {
      type: "summary",
      items: [
        "`if (condition)` runs its block only when the condition is `true`. The `else` block runs only when it is `false`.",
        "The comparisons are `<`, `<=`, `>`, `>=`, `==`, and `!=`, and each one gives `true` or `false`.",
        "`=` stores and `==` compares. `if (hp = 0)` does not build (CS0029).",
        "`keys > 5` is false when `keys` is 5. Test a condition with the boundary number.",
        "`==` on strings counts capital letters: `\"Open\" == \"open\"` is false.",
        "A `;` right after `if (...)` ends the `if`, and the block below it always runs (warning CS0642).",
      ],
    },
  ],
};

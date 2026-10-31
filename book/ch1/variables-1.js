export default {
  id: "variables-1",
  chapter: 1,
  number: "1.1",
  title: "Make a variable, change it, read it",
  from: "Review 1 · Day 0",
  minutes: 20,
  skills: [],
  goals: [
    "Make a variable of type `int`, `double`, `string`, or `bool`",
    "Change a variable and say what it holds after each line",
    "Tell a string from a variable's name by its quotation marks",
  ],
  blocks: [
    {
      type: "text",
      md: "A **variable** is a name that holds a value. Line 6 of the game's `Program.cs` makes one:\n\n`int maxHp = 10;`\n\nThe game reads `maxHp` in many places, every health bar under the map among them. Change the 10 on line 6, and every place that reads `maxHp` gets the new number.",
    },
    {
      type: "recipe",
      title: "Making a variable",
      template: "{Type} {name} = {value};",
      parts: [
        { slot: "{Type}", meaning: "the kind of value it holds: `int`, `double`, `string`, or `bool`" },
        { slot: "{name}", meaning: "the name you use to read it or change it later" },
        { slot: "=", meaning: "stores the value on the right in the variable on the left" },
        { slot: "{value}", meaning: "what the variable holds first" },
      ],
    },
    {
      type: "text",
      md: "## Four types\n\n- `int` is a whole number: `10`, `0`, `-3`.\n- `double` is a number with a decimal point: `1.5`, `8.25`.\n- `string` is text in double quotation marks: `\"Rook\"`, `\"torch\"`.\n- `bool` is `true` or `false`.",
    },
    {
      type: "code",
      code: `string name = "Rook";
int hp = 10;
double speed = 1.5;
bool hasTorch = true;
Console.WriteLine(name);
Console.WriteLine(hp);
Console.WriteLine(speed);
Console.WriteLine(hasTorch);`,
      expect: { out: "Rook\n10\n1.5\nTrue" },
    },
    {
      type: "text",
      md: "`Console.WriteLine(hp)` prints the value inside `hp`. A `bool` prints with a capital letter: `True` or `False`.",
    },
    {
      type: "text",
      md: "## Changing a variable\n\nOnce a variable exists, give it a new value with its name, `=`, and the value. No type goes in front. The old value is gone.",
    },
    {
      type: "code",
      code: `int hp = 10;
Console.WriteLine(hp);
hp = 6;
Console.WriteLine(hp);
hp = hp - 2;
Console.WriteLine(hp);`,
      expect: { out: "10\n6\n4" },
    },
    {
      type: "text",
      md: "`hp = hp - 2;` works out the right side first. `hp` is 6, and 6 minus 2 is 4. Then `=` stores 4 in `hp`. In C#, `=` means *store*: put the value on the right into the variable on the left.",
    },
    {
      type: "note",
      kind: "trap",
      md: "Writing the type a second time asks for a second variable with the same name, and the build stops:\n\n`CS0128: A local variable or function named 'hp' is already defined in this scope`\n\nThe type goes on the line that makes the variable, and only there.",
    },
    {
      type: "code",
      code: `int hp = 10;
int hp = 7;
Console.WriteLine(hp);`,
      expect: { error: "CS0128" },
    },
    {
      type: "text",
      md: "Delete the `int` on line 2 and run it again. It prints `7`.",
    },
    {
      type: "code",
      code: `int hp = 10;
hp = 7;
Console.WriteLine(hp);`,
      expect: { out: "7" },
    },
    {
      type: "text",
      md: "## Quotation marks\n\nText in quotation marks is a string. A word with no quotation marks is a name, and C# looks for a variable called that.",
    },
    {
      type: "code",
      code: `string difficulty = "normal";
Console.WriteLine(difficulty);
Console.WriteLine("difficulty");`,
      expect: { out: "normal\ndifficulty" },
    },
    {
      type: "text",
      md: "Line 2 prints what the variable holds. Line 3 prints the word in the quotation marks. Now take the quotation marks off a value:",
    },
    {
      type: "code",
      code: `string difficulty = hard;
Console.WriteLine(difficulty);`,
      expect: { error: "CS0103" },
    },
    {
      type: "text",
      md: "There is no variable named `hard`, so the build stops with `CS0103: The name 'hard' does not exist in the current context`. Put quotation marks around `hard` and it prints `hard`.",
    },
    {
      type: "text",
      md: "## One name, many places\n\nStep through this program one line at a time and watch `hp` and `maxHp` in the Variables pane. `+` between text and a number joins them into one line of text.",
    },
    {
      type: "step",
      code: `int maxHp = 10;
int hp = maxHp;
Console.WriteLine("Rook: " + hp + " of " + maxHp);
hp = hp - 4;
Console.WriteLine("Rook: " + hp + " of " + maxHp);
hp = hp + 3;
Console.WriteLine("Rook: " + hp + " of " + maxHp);`,
      notes: {
        "2": "Copies the value in maxHp, 10, into hp. From here on they are two separate variables.",
        "4": "A Wolf bites for 4. The right side is `10 - 4`, so hp is now 6. maxHp is still 10.",
        "6": "A potion gives back 3. The right side is `6 + 3`, so hp is now 9.",
      },
      expect: { out: "Rook: 10 of 10\nRook: 6 of 10\nRook: 9 of 10" },
    },
    {
      type: "text",
      md: "Line 2 copied the number 10 into `hp`. Lines 4 and 6 changed `hp` and left `maxHp` at 10.",
    },
    {
      type: "mcq",
      id: "variables-1-q1",
      question: "What is printed?",
      code: `int gold = 5;
gold = gold + 10;
gold = 3;
Console.WriteLine(gold);`,
      choices: ["3", "18", "15", "5"],
      answer: 0,
      why: [
        "Each `=` replaces what was there. The last value stored in gold is 3.",
        "18 adds all three numbers. Line 3 stores 3 in place of 15. It adds nothing.",
        "gold is 15 after line 2, then line 3 stores 3 over it.",
        "5 is the first value. Lines 2 and 3 both change it.",
      ],
      verify: { out: "3" },
    },
    {
      type: "mcq",
      id: "variables-1-q2",
      question: "What is printed?",
      code: `int a = 4;
int b = a;
a = 9;
Console.WriteLine(b);`,
      choices: ["4", "9", "13", "a"],
      answer: 0,
      why: [
        "Line 2 copies 4 into b. Line 3 changes a and leaves b alone.",
        "b got a copy of the 4. Changing a afterward does not reach b.",
        "Nothing adds a and b. Each line stores one value.",
        "a has no quotation marks, so it is a name. b holds the number a held on line 2.",
      ],
      verify: { out: "4" },
    },
    {
      type: "mcq",
      id: "variables-1-q3",
      question: "What is printed?",
      code: `string loot = "rope";
Console.WriteLine("loot");`,
      choices: ["loot", "rope", "\"loot\"", "Nothing. It does not build (CS0103)."],
      answer: 0,
      why: [
        "The quotation marks make \"loot\" a string, so it prints those four letters. The variable is never read.",
        "Printing the variable is `Console.WriteLine(loot)`, with no quotation marks.",
        "The quotation marks mark where the string starts and ends. They are not printed.",
        "CS0103 comes from a name with no variable behind it. Here the word is in quotation marks, so it is a string.",
      ],
      verify: { out: "loot" },
    },
    {
      type: "mcq",
      id: "variables-1-q4",
      question: "What happens?",
      code: `int arrows = "12";
Console.WriteLine(arrows);`,
      choices: [
        "It does not build: CS0029, Cannot implicitly convert type 'string' to 'int'.",
        "It prints 12.",
        "It prints \"12\" with the quotation marks.",
        "It builds, then crashes when it runs.",
      ],
      answer: 0,
      why: [
        "\"12\" is a string because of its quotation marks, and an int variable cannot hold a string. The compiler stops it before anything runs.",
        "`int arrows = 12;` with no quotation marks prints 12. This one does not build.",
        "Quotation marks are never printed, and this line does not build.",
        "The compiler checks types before the program runs, so it never gets as far as running.",
      ],
      verify: { error: "CS0029" },
    },
    {
      type: "parsons",
      id: "variables-1-p1",
      prompt: "Put the lines in order so the program prints `Hero 8` and then `Hero 5`.",
      lines: [
        `string name = "Hero";`,
        `int hp = 8;`,
        `Console.WriteLine(name + " " + hp);`,
        `hp = hp - 3;`,
        `Console.WriteLine(name + " " + hp);`,
      ],
      distractors: [`int hp = hp - 3;`],
      expect: { out: "Hero 8\nHero 5" },
    },
    {
      type: "exercise",
      id: "variables-1-e1",
      prompt: "Rook drinks a potion, which gives back 4 health, and then a monster hits him for `damage`. Write two lines that change `hp`, one for the potion and one for the hit, above the `return` line. `hp` and `damage` already hold numbers when your lines run, the way `totalHealth` did in Quest 0.",
      starter: `int AfterFight(int hp, int damage)
{
    return hp;
}`,
      solution: `int AfterFight(int hp, int damage)
{
    hp = hp + 4;
    hp = hp - damage;
    return hp;
}`,
      tests: [
        { call: `AfterFight(10, 3)`, expect: "11" },
        { call: `AfterFight(7, 7)`, expect: "4" },
        { call: `AfterFight(2, 0)`, expect: "6" },
        { call: `AfterFight(8, 12)`, expect: "0" },
      ],
      hints: [
        "Each line has the shape `hp = hp ... ;`, with `hp` on both sides of the `=`.",
        "No `int` in front of `hp`. It already exists, and `int hp = hp + 4;` stops the build with CS0136.",
      ],
    },
    {
      type: "summary",
      items: [
        "`int hp = 10;` makes a variable: a type, a name, `=`, and a first value.",
        "`int` holds whole numbers, `double` numbers with a decimal point, `string` text in quotation marks, and `bool` `true` or `false`.",
        "`hp = hp - 2;` works out the right side with the old `hp`, then stores the answer in `hp`.",
        "The type goes in front of the name once. A second `int hp` does not build (CS0128).",
        "`\"loot\"` is text. `loot` is a name. With no variable by that name, the build stops (CS0103).",
        "`b = a;` copies the value. Changing `a` later leaves `b` as it was.",
      ],
    },
  ],
};

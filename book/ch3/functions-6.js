export default {
  id: "functions-6",
  chapter: 3,
  number: "3.6",
  title: "Read the first line, and what a parameter saves",
  from: "Functions 6 and Review · Days 6 and 7",
  minutes: 35,
  skills: [],
  goals: [
    "Call a function from its first line alone: its name, its parameters in order, and its return type",
    "Turn functions that differ only in their values into one function with parameters",
    "Rewrite a function with parameters as copies with no parameters",
    "Describe what a program would need without a procedure's parameter, the way the AP written response asks",
  ],
  blocks: [
    {
      type: "text",
      md: "The game has 130 functions in 16 files, and its catalog, `dungeon/README.txt`, lists each one as its first line and one sentence. Two of them:\n\n`int Clamp(int value, int low, int high)` Forces value to stay between low and high.\n\n`int Damage(int attackPower, int defense)` attackPower minus defense, but never less than 1. ORDER MATTERS.\n\nThat is enough to call either one. You do not need to read how they work.",
    },
    {
      type: "recipe",
      title: "Reading a function's first line",
      template: "{ReturnType} {Name}({Type} {parameter}, {Type} {parameter})",
      parts: [
        { slot: "{ReturnType}", meaning: "what the call hands back. An `int` call can be kept in an `int` variable or used where an `int` goes. A `void` call stands alone on its line." },
        { slot: "{Name}", meaning: "what you type in the call, letter for letter" },
        { slot: "({Type} {parameter}, ...)", meaning: "how many arguments the call needs, the type of each, and their order. The parameter names tell you what each one means." },
      ],
    },
    {
      type: "code",
      code: `Console.WriteLine(SafeGold(3, -5));
Console.WriteLine(HitPreview(4, 1));
Console.WriteLine(HitPreview(1, 4));

int SafeGold(int gold, int change)
{
    return Clamp(gold + change, 0, 99);
}

string HitPreview(int attackPower, int defense)
{
    return "That would do " + Damage(attackPower, defense) + ".";
}

int Clamp(int value, int low, int high)
{
    if (value < low)
    {
        return low;
    }
    else if (value > high)
    {
        return high;
    }
    return value;
}

int Damage(int attackPower, int defense)
{
    int dealt = attackPower - defense;
    if (dealt < 1)
    {
        dealt = 1;
    }
    return dealt;
}`,
      expect: { out: "0\nThat would do 3.\nThat would do 1." },
    },
    {
      type: "text",
      md: "`Clamp` and `Damage` are at the bottom so the program runs on this page. `SafeGold` and `HitPreview` were written from the two catalog lines alone. Every printed number can be worked out from the catalog before the run: 3 gold and a change of minus 5 would be minus 2, and `Clamp` keeps it at 0. A hit of 1 against 4 would be minus 3, and `Damage` promises never less than 1.\n\nUsing a procedure from what it takes and what it gives back, without looking inside, is what the AP exam calls **procedural abstraction**.",
    },
    {
      type: "note",
      kind: "trap",
      md: "`low` and `high` are both ints, so `Clamp(gold + change, 99, 0)` builds. Then minus 2 is below the new low, 99, and the empty purse comes back full: the first line prints `99`. The compiler checks types, never order. The order is written in the first line. Swap the `0` and `99` in `SafeGold` above and run it.",
    },
    {
      type: "text",
      md: "## Two functions, one difference\n\nThese two functions have no parameters. Find what differs between them.",
    },
    {
      type: "code",
      code: `Console.WriteLine(SmallChestLabel());
Console.WriteLine(LargeChestLabel());

string SmallChestLabel()
{
    return "small chest (2 items)";
}

string LargeChestLabel()
{
    return "large chest (5 items)";
}`,
      expect: { out: "small chest (2 items)\nlarge chest (5 items)" },
    },
    {
      type: "text",
      md: "One word (`small`, `large`) and one number (`2`, `5`). Everything else is the same, letter for letter. Each value that differs becomes a parameter: the word becomes `string size` and the number becomes `int items`. What stayed the same stays in the text.",
    },
    {
      type: "step",
      code: `Console.WriteLine(SmallChestLabel());
Console.WriteLine(ChestLabel("small", 2));
Console.WriteLine(ChestLabel("huge", 9));

string SmallChestLabel()
{
    return "small chest (2 items)";
}

string ChestLabel(string size, int items)
{
    return size + " chest (" + items + " items)";
}`,
      notes: {
        "1": "The old function, with its values written inside.",
        "2": "The new function does the old one's job. \"small\" is copied into size and 2 into items.",
        "12": "The same line of code every call. Only the values in size and items change.",
        "3": "A size nobody wrote a function for. With the parameters, it costs one call.",
      },
      expect: { out: "small chest (2 items)\nsmall chest (2 items)\nhuge chest (9 items)" },
    },
    {
      type: "text",
      md: "The first two lines print the same text from two different functions, so `ChestLabel` can do `SmallChestLabel`'s job. The huge chest needed no new function. Without the parameters it would need `HugeChestLabel()`, and the next size another.",
    },
    {
      type: "text",
      md: "## Taking the parameters out\n\nGoing the other way, every parameter becomes a value written inside the body, and the function is good for those values only. Here is `HitPreview` from above with its parameters taken out.",
    },
    {
      type: "code",
      code: `Console.WriteLine(HitPreview4Against1());
Console.WriteLine(HitPreview5Against1());

string HitPreview4Against1()
{
    return "That would do " + Damage(4, 1) + ".";
}

string HitPreview5Against1()
{
    return "That would do " + Damage(5, 1) + ".";
}

int Damage(int attackPower, int defense)
{
    int dealt = attackPower - defense;
    if (dealt < 1)
    {
        dealt = 1;
    }
    return dealt;
}`,
      expect: { out: "That would do 3.\nThat would do 4." },
    },
    {
      type: "text",
      md: "Both copies work. Each one covers one fight. A hit of 4 against 2 needs a third copy, and every pair of numbers the game uses needs its own. Change the sentence to `That hit does 3.` and the edit goes into every copy. With the parameters there is one function, and the change is one edit.",
    },
    {
      type: "note",
      kind: "trap",
      md: "The version without parameters works: `SmallChestLabel()` prints the same line as `ChestLabel(\"small\", 2)`. What it costs is a copy for every value and an edit in every copy. Taking a parameter out does not delete its value. The value moves from the call into the body: `HitPreview4Against1()` still has the 4 and the 1.",
    },
    {
      type: "text",
      md: "## Saying it in writing\n\nWith the parameter, one procedure handles every value, and a change to the rule is one edit. Without it, you need a copy of the procedure for every value, each with its value written inside, and a change to the rule is an edit in every copy.\n\nHere is that answer for `PrintPotionAdvice(int hp)` from section 3.2:\n\n*Without the parameter `hp`, the program would need a separate procedure for every health value it checks: `PrintPotionAdviceAt0()` through `PrintPotionAdviceAt10()`, eleven copies of the same `if` chain, each with its own number written inside. A twelfth health value would need a twelfth copy. Changing the rule, for example to drink a potion at 2 or less, would mean editing all eleven copies. With `hp`, one procedure covers every value and the rule is changed in one place.*\n\nIt names the parameter, says what the copies are and how many, says where the values go, and says what a change costs.",
    },
    {
      type: "ap",
      md: "The 2024 exam (Set 2, question 2(c)) asks about the parameter of the procedure in your own program and how the program would change without it. Answer the way the model above does: name the parameter, then describe the copies, one procedure per value with the value written inside each, and the edit in every copy when the rule changes. Two answers do not earn the point. Naming only the arguments, such as `\"Rook\"` and `4`, does not name the parameter. Saying the program would not work is false: the copies work. They cost more.",
    },
    {
      type: "mcq",
      id: "functions-6-q1",
      question: "The catalog says `string WinnerName(string a, int aHp, string b, int bHp)`. Which call asks who wins between Rook, with 6 health, and the Wolf, with 3?",
      choices: [`WinnerName("Rook", 6, "Wolf", 3)`, `WinnerName("Rook", "Wolf", 6, 3)`, `WinnerName(6, "Rook", 3, "Wolf")`, `WinnerName("Rook", 6, "Wolf")`],
      mono: true,
      answer: 0,
      why: [
        "A name, its health, a name, its health: the order the first line gives.",
        "The second parameter is an int, and \"Wolf\" is a string. It does not build (CS1503).",
        "Every argument is in the wrong slot for its type. It does not build (CS1503).",
        "WinnerName takes four arguments, and this call gives three. It does not build (CS7036).",
      ],
      verify: {
        cases: [
          { run: `Console.WriteLine(WinnerName("Rook", 6, "Wolf", 3));\nstring WinnerName(string a, int aHp, string b, int bHp)\n{\n    if (aHp > bHp)\n    {\n        return a;\n    }\n    return b;\n}`, out: "Rook" },
          { run: `Console.WriteLine(WinnerName("Rook", "Wolf", 6, 3));\nstring WinnerName(string a, int aHp, string b, int bHp)\n{\n    if (aHp > bHp)\n    {\n        return a;\n    }\n    return b;\n}`, error: "CS1503" },
          { run: `Console.WriteLine(WinnerName(6, "Rook", 3, "Wolf"));\nstring WinnerName(string a, int aHp, string b, int bHp)\n{\n    if (aHp > bHp)\n    {\n        return a;\n    }\n    return b;\n}`, error: "CS1503" },
          { run: `Console.WriteLine(WinnerName("Rook", 6, "Wolf"));\nstring WinnerName(string a, int aHp, string b, int bHp)\n{\n    if (aHp > bHp)\n    {\n        return a;\n    }\n    return b;\n}`, error: "CS7036" },
        ],
      },
    },
    {
      type: "mcq",
      id: "functions-6-q2",
      question: "What do you need to know to call `Clamp`?",
      choices: [
        "Its name, its parameters in order, and what it returns.",
        "How the if and else if inside it work.",
        "Which file it is in, and on which line.",
        "The names of its parameters, so the variables you pass in can have the same names.",
      ],
      answer: 0,
      why: [
        "That is its first line, which the catalog gives you. That much is enough to call it.",
        "The inside is what you do not need. The catalog's sentence says what it does.",
        "A call works from any file. The name is what the call needs.",
        "Arguments are matched by position. The variables you pass in can have any names, or be plain numbers.",
      ],
      verify: null,
    },
    {
      type: "mcq",
      id: "functions-6-q3",
      question: "A program has `void PrintTrapWarning(int damage)`, which prints a warning with the trap's damage in it. The game has traps that do 1, 2, 3, and 5 damage. Which answer describes how the program would need to change without the parameter?",
      choices: [
        "It would need a separate copy of the procedure for each damage amount, four here, each with its number written inside, and a change to the warning would be an edit in every copy.",
        "The program would not work, because the procedure would have no damage to print.",
        "The call PrintTrapWarning(3) would lose its argument, and nothing else would change.",
        "The parameter would be deleted, and every trap would print the same warning.",
      ],
      answer: 0,
      why: [
        "It names the copies, one per value, where each value goes, and what a change costs.",
        "The copies would work. Each one has its number written inside. The question asks what they would cost.",
        "Without the argument, the procedure still needs the 3 from somewhere. It moves into the body, so each amount needs its own procedure.",
        "One copy would print one warning. Keeping a warning for each trap takes one copy per amount.",
      ],
      verify: null,
    },
    {
      type: "mcq",
      id: "functions-6-q4",
      question: "A program has `SmallChestLabel()`, `LargeChestLabel()`, and `HugeChestLabel()`, each with its own text written inside. The label changes from `(2 items)` to `[2 items]`. How many functions need an edit? How many would with `ChestLabel(string size, int items)` instead?",
      choices: [
        "3 without the parameters, 1 with them.",
        "1 without the parameters, 1 with them.",
        "3 without the parameters, 3 with them.",
        "None without the parameters, because each label is already written out.",
      ],
      answer: 0,
      why: [
        "Each copy has its own text, so each needs the edit. ChestLabel has the text in one place.",
        "The three copies do not share any code. Each has the parentheses typed into its own text.",
        "With ChestLabel there is one line that builds the text for every size. One edit changes them all.",
        "Written out is the reason every copy needs the edit: the parentheses are typed into each one.",
      ],
      verify: null,
    },
    {
      type: "parsons",
      id: "functions-6-p1",
      prompt: "Put the lines in order so one function prints both labels: `fire scroll (3 uses)` and then `ice scroll (2 uses)`.",
      lines: [
        `Console.WriteLine(ScrollLabel("fire", 3));`,
        `Console.WriteLine(ScrollLabel("ice", 2));`,
        `string ScrollLabel(string element, int uses)`,
        `{`,
        `    return element + " scroll (" + uses + " uses)";`,
        `}`,
      ],
      distractors: [`string ScrollLabel()`, `    return "fire scroll (3 uses)";`],
      expect: { out: "fire scroll (3 uses)\nice scroll (2 uses)" },
    },
    {
      type: "exercise",
      id: "functions-6-e1",
      prompt: "`SpikeTrapLabel` and `FireTrapLabel` are written out with no parameters. Do three things.\n\n1. Write `TrapLabel(string kind, int damage)`, so `TrapLabel(\"spike\", 3)` returns the same text as `SpikeTrapLabel()`.\n2. Replace the body of `FireTrapLabel` with one call to `TrapLabel`.\n3. Write `IceTrapLabel` the other way: no parameters and no call to `TrapLabel`, with `ice trap: 2 damage` written inside.",
      starter: `string SpikeTrapLabel()
{
    return "spike trap: 3 damage";
}

string FireTrapLabel()
{
    return "fire trap: 5 damage";
}

string TrapLabel(string kind, int damage)
{
    return "?";
}

string IceTrapLabel()
{
    return "?";
}`,
      solution: `string SpikeTrapLabel()
{
    return "spike trap: 3 damage";
}

string FireTrapLabel()
{
    return TrapLabel("fire", 5);
}

string TrapLabel(string kind, int damage)
{
    return kind + " trap: " + damage + " damage";
}

string IceTrapLabel()
{
    return "ice trap: 2 damage";
}`,
      tests: [
        { call: `TrapLabel("spike", 3)`, expect: "spike trap: 3 damage" },
        { call: `TrapLabel("poison", 4)`, expect: "poison trap: 4 damage" },
        { call: `FireTrapLabel()`, expect: "fire trap: 5 damage" },
        { call: `IceTrapLabel()`, expect: "ice trap: 2 damage" },
      ],
      hints: [
        "Put the two written-out labels side by side. The word and the number differ, and those are `kind` and `damage`.",
        "The body of `FireTrapLabel` is one line: `return` and a call to `TrapLabel` with `\"fire\"` and `5`.",
        "`IceTrapLabel` looks like `SpikeTrapLabel`, with its own word and number.",
      ],
    },
    {
      type: "summary",
      items: [
        "A function's first line gives its return type, its name, and its parameters in order. That is enough to call it.",
        "Two arguments of the same type in the wrong order build and give a wrong answer: `Clamp(gold + change, 99, 0)` returns 99.",
        "When functions differ only in their values, each value that differs becomes a parameter of one function.",
        "Taking a parameter out moves its value into the body, so every value needs its own copy of the function.",
        "With the parameter, a rule change is one edit. Without it, the edit goes into every copy.",
        "An answer about a missing parameter names the parameter, the copies, and the edit in every copy.",
      ],
    },
  ],
};

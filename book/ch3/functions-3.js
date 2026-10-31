export default {
  id: "functions-3",
  chapter: 3,
  number: "3.3",
  title: "Several parameters, in order",
  from: "Functions 3 · Day 3",
  minutes: 25,
  skills: [],
  goals: [
    "Define and call a function with several parameters",
    "Match each argument to its parameter by position",
    "Tell the swap the compiler catches (`CS1503`) from the swap it misses",
  ],
  blocks: [
    {
      type: "text",
      md: "A function can take more than one value. Each parameter has its own type and name, and commas separate them.",
    },
    {
      type: "recipe",
      title: "A function with several parameters",
      template: "void {Name}({Type1} {first}, {Type2} {second}, {Type3} {third})",
      parts: [
        { slot: "{Type1} {first}", meaning: "the first parameter. The first argument in every call is copied into it." },
        { slot: "{Type2} {second}", meaning: "the second parameter, which gets the second argument" },
        { slot: "{Type3} {third}", meaning: "the third parameter, which gets the third argument. A function can have as many as it needs." },
      ],
    },
    {
      type: "code",
      code: `PrintHit("Rook", "Grub", 4);

void PrintHit(string attacker, string target, int damage)
{
    Console.WriteLine(attacker + " hits " + target + " for " + damage + ".");
}`,
      expect: { out: "Rook hits Grub for 4." },
    },
    {
      type: "text",
      md: "Three arguments, three parameters. C# matches them **by position**: the first argument goes to the first parameter, the second to the second, the third to the third. The names are never compared. Call the first parameter `banana` and `\"Rook\"` still lands in it.",
    },
    {
      type: "text",
      md: "## The swap the compiler misses\n\nStep through this program. The second call has the two strings the other way around.",
    },
    {
      type: "step",
      code: `PrintHit("Rook", "Grub", 4);
PrintHit("Grub", "Rook", 4);

void PrintHit(string attacker, string target, int damage)
{
    Console.WriteLine(attacker + " hits " + target + " for " + damage + ".");
}`,
      notes: {
        "1": "Three arguments, copied by position: \"Rook\" into attacker, \"Grub\" into target, 4 into damage.",
        "2": "The same two strings, swapped. Both are strings, so each one fits the parameter it lands in: \"Grub\" is now the attacker.",
        "6": "The body does not know which call it came from. It joins whatever attacker, target, and damage hold right now.",
      },
      expect: { out: "Rook hits Grub for 4.\nGrub hits Rook for 4." },
    },
    {
      type: "text",
      md: "It builds, it runs, and it prints `Grub hits Rook for 4.` with no warning. A string went into a string parameter, so the compiler is satisfied. It checks types. It cannot check meaning, because it does not know what an attacker is.",
    },
    {
      type: "text",
      md: "## The swap the compiler catches\n\nNow the number and a string trade places.",
    },
    {
      type: "code",
      code: `PrintHit("Rook", 4, "Grub");

void PrintHit(string attacker, string target, int damage)
{
    Console.WriteLine(attacker + " hits " + target + " for " + damage + ".");
}`,
      expect: { error: "CS1503" },
    },
    {
      type: "text",
      md: "The build stops with two errors, one for each argument that does not fit:\n\n`CS1503: Argument 2: cannot convert from 'int' to 'string'`\n\n`CS1503: Argument 3: cannot convert from 'string' to 'int'`\n\nRead every line of the error, not only the first. Both arguments are in the wrong place.",
    },
    {
      type: "note",
      kind: "trap",
      md: "Two parameters of the same type side by side are the swap with no error. `PrintHealth(string name, int hp, int maxHp)` takes two ints. Called with `10, 7` instead of `7, 10`, it builds and prints `Rook: 10/7`. Only a test that knows the right answer catches it.",
    },
    {
      type: "code",
      code: `PrintHealth("Rook", 7, 10);
PrintHealth("Rook", 10, 7);

void PrintHealth(string name, int hp, int maxHp)
{
    Console.WriteLine(name + ": " + hp + "/" + maxHp);
}`,
      expect: { out: "Rook: 7/10\nRook: 10/7" },
    },
    {
      type: "mcq",
      id: "functions-3-q1",
      question: "What does this print?",
      code: `PrintMove("Mote", 5, 3);

void PrintMove(string name, int fromRoom, int toRoom)
{
    Console.WriteLine(name + " walks from room " + fromRoom + " to room " + toRoom + ".");
}`,
      choices: [
        "Mote walks from room 5 to room 3.",
        "Mote walks from room 3 to room 5.",
        "It does not build: Argument 2: cannot convert from 'int' to 'string' (CS1503).",
        "Mote walks from room fromRoom to room toRoom.",
      ],
      answer: 0,
      why: [
        "5 is the second argument, so it goes to the second parameter, fromRoom. 3 goes to toRoom.",
        "The arguments are matched by position, not by which room is bigger. The second argument, 5, is fromRoom.",
        "The second parameter is an int and the second argument is 5, an int. Every argument fits, so it builds.",
        "fromRoom and toRoom have no quotation marks in the body, so their values are joined in, not their names.",
      ],
      verify: { out: "Mote walks from room 5 to room 3." },
    },
    {
      type: "mcq",
      id: "functions-3-q2",
      question: "The definition is `void PrintBounty(string monster, int gold)`. Which call does **not** build?",
      choices: [`PrintBounty(12, "Wolf");`, `PrintBounty("Wolf", 12);`, `PrintBounty("12", 12);`, `PrintBounty("Slime", 0);`],
      mono: true,
      answer: 0,
      why: [
        "12 is an int in the string slot, and \"Wolf\" is a string in the int slot. The build stops with CS1503 for both arguments.",
        "A string and then an int, the order the definition asks for. It builds.",
        "\"12\" in quotation marks is a string, so it fits the first parameter. It builds and prints 12 as a monster's name.",
        "0 is an int, so it fits gold. It builds.",
      ],
      verify: {
        cases: [
          { run: `PrintBounty(12, "Wolf");\nvoid PrintBounty(string monster, int gold)\n{\n    Console.WriteLine(monster + ": " + gold + " gold");\n}`, error: "CS1503" },
          { run: `PrintBounty("Wolf", 12);\nvoid PrintBounty(string monster, int gold)\n{\n    Console.WriteLine(monster + ": " + gold + " gold");\n}`, out: "Wolf: 12 gold" },
          { run: `PrintBounty("12", 12);\nvoid PrintBounty(string monster, int gold)\n{\n    Console.WriteLine(monster + ": " + gold + " gold");\n}`, out: "12: 12 gold" },
          { run: `PrintBounty("Slime", 0);\nvoid PrintBounty(string monster, int gold)\n{\n    Console.WriteLine(monster + ": " + gold + " gold");\n}`, out: "Slime: 0 gold" },
        ],
      },
    },
    {
      type: "mcq",
      id: "functions-3-q3",
      question: "A call to `PrintHealth(string name, int hp, int maxHp)` has its two ints in the wrong order. When is the mistake found?",
      choices: [
        "Only when someone reads the output and sees it is wrong. It builds and runs.",
        "At build time, with CS1503.",
        "When the line runs, with a crash.",
        "At build time, with a warning that the arguments look swapped.",
      ],
      answer: 0,
      why: [
        "An int went into an int parameter twice, so the compiler has nothing to complain about. Rook: 10/7 is printed as if it were right.",
        "CS1503 is for an argument of the wrong type. Both of these arguments are ints, the type each parameter asks for.",
        "Nothing about the swap makes the program crash. It prints a wrong line.",
        "The compiler never compares an argument with a parameter's name, so it has no idea they look swapped.",
      ],
      verify: { run: `PrintHealth("Rook", 10, 7);\nvoid PrintHealth(string name, int hp, int maxHp)\n{\n    Console.WriteLine(name + ": " + hp + "/" + maxHp);\n}`, out: "Rook: 10/7" },
    },
    {
      type: "parsons",
      id: "functions-3-p1",
      prompt: "Put the lines in order so the program prints `The Wolf drops arrow x 2.` and then `The Slime drops potion x 1.`",
      lines: [
        `PrintLoot("Wolf", "arrow", 2);`,
        `PrintLoot("Slime", "potion", 1);`,
        `void PrintLoot(string monster, string item, int count)`,
        `{`,
        `    Console.WriteLine("The " + monster + " drops " + item + " x " + count + ".");`,
        `}`,
      ],
      distractors: [`PrintLoot("arrow", "Wolf", 2);`, `PrintLoot("Wolf", 2, "arrow");`],
      expect: { out: "The Wolf drops arrow x 2.\nThe Slime drops potion x 1." },
    },
    {
      type: "exercise",
      id: "functions-3-e1",
      prompt: "Write `RestLine`. It returns the name, a colon, and the health as `hp of maxHp`: `RestLine(\"Mote\", 5, 7)` returns `Mote: 5 of 7`. When `hp` equals `maxHp`, add ` (full)` to the end of the same line. Keep `hp` and `maxHp` in the order the first line says.",
      starter: `string RestLine(string name, int hp, int maxHp)
{
    return "?";
}`,
      solution: `string RestLine(string name, int hp, int maxHp)
{
    string line = name + ": " + hp + " of " + maxHp;
    if (hp == maxHp)
    {
        line = line + " (full)";
    }
    return line;
}`,
      tests: [
        { call: `RestLine("Mote", 5, 7)`, expect: "Mote: 5 of 7" },
        { call: `RestLine("Hero", 3, 8)`, expect: "Hero: 3 of 8" },
        { call: `RestLine("Rook", 10, 10)`, expect: "Rook: 10 of 10 (full)" },
      ],
      hints: [
        "Build the line in a variable first, then add to it inside an `if` when the health is full.",
        "The test is `hp == maxHp`. Return the variable after the `if`, so both paths reach the `return`.",
      ],
    },
    {
      type: "summary",
      items: [
        "Parameters are separated by commas, and each has its own type: `(string attacker, string target, int damage)`.",
        "Arguments go to parameters by position. The names are never compared.",
        "An argument of the wrong type does not build: `CS1503`, with one line for each argument that does not fit.",
        "Two arguments of the same type in the wrong order build, run, and print a wrong answer.",
      ],
    },
  ],
};

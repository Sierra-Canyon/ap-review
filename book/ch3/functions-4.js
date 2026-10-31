export default {
  id: "functions-4",
  chapter: 3,
  number: "3.4",
  title: "Return a value",
  from: "Functions 4 · Day 4",
  minutes: 30,
  skills: [],
  goals: [
    "Write a function that returns an `int`, a `bool`, or a `string`",
    "Keep a returned value in a variable, or use the call where a value goes",
    "Say the difference between printing a value and returning it",
    "Fix `CS0161` by giving every path a `return`",
  ],
  blocks: [
    {
      type: "text",
      md: "Every function so far printed something. This one prints nothing. It works out a number and hands it back to the code that called it.",
    },
    {
      type: "recipe",
      title: "A function that returns a value",
      template: "{ReturnType} {Name}({parameters})\n{\n    return {value};\n}",
      parts: [
        { slot: "{ReturnType}", meaning: "the type of the answer, written where `void` used to go: `int`, `bool`, `string`, or `double`. `void` means no answer." },
        { slot: "{parameters}", meaning: "what the function takes in, as before. Empty parentheses if it takes nothing." },
        { slot: "return {value};", meaning: "hands the value back to the call and leaves the function. The value has to be of the return type." },
      ],
    },
    {
      type: "code",
      code: `int heals = PotionPower(2);
Console.WriteLine("A potion heals " + heals + ".");
Console.WriteLine("Two heal " + PotionPower(2) * 2 + ".");
Console.WriteLine(CanAfford(5, 8));

int PotionPower(int levelNumber)
{
    int power = 3 + levelNumber;
    return power;
}

bool CanAfford(int gold, int price)
{
    return gold >= price;
}`,
      expect: { out: "A potion heals 5.\nTwo heal 10.\nFalse" },
    },
    {
      type: "text",
      md: "There are two ways to use an answer. Keep it in a variable, as `int heals = PotionPower(2);` does. Or put the call right where a value goes: `PotionPower(2) * 2` is 5 times 2. A call that returns a value can go anywhere a value of its type can go.\n\n`CanAfford` returns a `bool`. `gold >= price` is already true or false, so the function returns the test itself. Five gold against a price of 8 is `False`.",
    },
    {
      type: "text",
      md: "## An answer nobody keeps\n\nHere the call is alone on its line.",
    },
    {
      type: "code",
      code: `PotionPower(2);
Console.WriteLine("The potion is ready.");

int PotionPower(int levelNumber)
{
    int power = 3 + levelNumber;
    return power;
}`,
      expect: { out: "The potion is ready." },
    },
    {
      type: "text",
      md: "`PotionPower` ran and worked out 5. The 5 went back to the first line, and that line did nothing with it, so it is gone. C# throws an unused answer away without a word. `return` does not print. Only `Console.WriteLine` puts a value on the screen.",
    },
    {
      type: "note",
      kind: "trap",
      md: "Calling a function does not change the variable you pass in. The parameter is a copy. `Heal(hp);` alone leaves `hp` exactly as it was. To change `hp`, keep the answer: `hp = Heal(hp);`. Step through the program below and watch `hp`.",
    },
    {
      type: "step",
      code: `int hp = 4;
Heal(hp);
Console.WriteLine(hp);
hp = Heal(hp);
Console.WriteLine(hp);

int Heal(int hp)
{
    return hp + 3;
}`,
      notes: {
        "2": "Heal is called with 4 and returns 7. Nothing on this line keeps the 7, so hp is still 4.",
        "9": "This hp is the parameter, a copy of the argument. Working out hp + 3 here never touches the hp outside.",
        "3": "Prints 4. The first call changed nothing.",
        "4": "The same call. This time the 7 lands in hp, on the left of the =.",
      },
      expect: { out: "4\n7" },
    },
    {
      type: "text",
      md: "## Print or return\n\nA function that prints puts text on the screen for a person, and the program cannot use it afterward. A function that returns hands a value to the code that called it, which can keep it, add to it, test it, or print it.\n\nA `void` function hands nothing back, so there is nothing to keep. This does not build: `CS0029: Cannot implicitly convert type 'void' to 'int'`.",
    },
    {
      type: "code",
      code: `int total = PrintPower(2);

void PrintPower(int levelNumber)
{
    Console.WriteLine(3 + levelNumber);
}`,
      expect: { error: "CS0029" },
    },
    {
      type: "text",
      md: "## A missing return\n\nA lucky hit depends on a die roll. Here the roll comes in as a parameter, so every call gives the same answer for the same roll: a 6 doubles the attack, a 1 misses, and any other roll does the plain attack. This version forgot the last case.",
    },
    {
      type: "code",
      code: `Console.WriteLine(CritDamage(4, 6));

int CritDamage(int attack, int roll)
{
    if (roll == 6)
    {
        return attack * 2;
    }
    else if (roll == 1)
    {
        return 0;
    }
}`,
      expect: { error: "CS0161" },
    },
    {
      type: "text",
      md: "It does not build: `CS0161: 'CritDamage(int, int)': not all code paths return a value`. The first line promises an `int`, and a roll of 3 gets through the chain without reaching a `return`. An `else` with its own `return` closes the gap.",
    },
    {
      type: "code",
      code: `Console.WriteLine(CritDamage(4, 6));
Console.WriteLine(CritDamage(4, 1));
Console.WriteLine(CritDamage(4, 3));

int CritDamage(int attack, int roll)
{
    if (roll == 6)
    {
        return attack * 2;
    }
    else if (roll == 1)
    {
        return 0;
    }
    else
    {
        return attack;
    }
}`,
      expect: { out: "8\n0\n4" },
    },
    {
      type: "mcq",
      id: "functions-4-q1",
      question: "What is printed?",
      code: `int bonus = Bonus(3);
Console.WriteLine(bonus + Bonus(1));

int Bonus(int level)
{
    return level * 2;
}`,
      choices: ["8", "6", "62", "It does not build: a call cannot go inside a +."],
      answer: 0,
      why: [
        "Bonus(3) returns 6, which is kept in bonus. Bonus(1) returns 2, used right where it is. Two ints, so + adds them: 8.",
        "6 is bonus alone. The second call, Bonus(1), returns 2 and is added to it.",
        "Both sides of + are ints, so + adds. It joins text only when one side is a string.",
        "A call that returns an int can go anywhere an int can go, including inside a +.",
      ],
      verify: { out: "8" },
    },
    {
      type: "mcq",
      id: "functions-4-q2",
      question: "What does this program print?",
      code: `int next = RollAgain(4);
Console.WriteLine(next);

int RollAgain(int roll)
{
    Console.WriteLine("Rolling...");
    return roll + 1;
}`,
      choices: [
        "Rolling... and then 5",
        "5 only",
        "Rolling... only",
        "5 and then Rolling...",
      ],
      answer: 0,
      why: [
        "The first line calls RollAgain, which prints Rolling... and returns 5. Then the second line prints next.",
        "The function also prints, and it prints while the first line runs, before next is printed.",
        "The 5 is kept in next, and the second line prints it.",
        "RollAgain runs during the first line, so its Rolling... comes before the 5.",
      ],
      verify: { out: "Rolling...\n5" },
    },
    {
      type: "mcq",
      id: "functions-4-q3",
      question: "`hp` is 4 and `Heal` returns `hp + 3`. Which line makes `hp` equal 7?",
      choices: [`hp = Heal(hp);`, `Heal(hp);`, `Console.WriteLine(Heal(hp));`, `Heal(hp) = hp;`],
      mono: true,
      answer: 0,
      why: [
        "Heal returns 7, and the = puts it in hp.",
        "Heal returns 7 and nothing keeps it. hp is still 4.",
        "This prints 7, and hp is still 4. Printing an answer does not store it.",
        "The left of = has to be a variable. This does not build (CS0131).",
      ],
      verify: {
        cases: [
          { run: `int hp = 4;\nhp = Heal(hp);\nConsole.WriteLine(hp);\nint Heal(int hp)\n{\n    return hp + 3;\n}`, out: "7" },
          { run: `int hp = 4;\nHeal(hp);\nConsole.WriteLine(hp);\nint Heal(int hp)\n{\n    return hp + 3;\n}`, out: "4" },
          { run: `int hp = 4;\nConsole.WriteLine(Heal(hp));\nConsole.WriteLine(hp);\nint Heal(int hp)\n{\n    return hp + 3;\n}`, out: "7\n4" },
          { run: `int hp = 4;\nHeal(hp) = hp;\nConsole.WriteLine(hp);\nint Heal(int hp)\n{\n    return hp + 3;\n}`, error: "CS0131" },
        ],
      },
    },
    {
      type: "parsons",
      id: "functions-4-p1",
      prompt: "Put the lines in order so the program prints `Mote carries 24 arrows.`",
      lines: [
        `int arrows = ArrowCount(2);`,
        `Console.WriteLine("Mote carries " + arrows + " arrows.");`,
        `int ArrowCount(int quivers)`,
        `{`,
        `    int total = quivers * 12;`,
        `    return total;`,
        `}`,
      ],
      distractors: [`ArrowCount(2);`, `Console.WriteLine("Mote carries " + total + " arrows.");`],
      expect: { out: "Mote carries 24 arrows." },
    },
    {
      type: "exercise",
      id: "functions-4-e1",
      prompt: "Write `GoldAfter`. It returns the gold left after buying something. When `gold` is at least `price`, it returns `gold` minus `price`. When it is not, nothing is bought, and it returns `gold` unchanged. The function prints nothing.",
      starter: `int GoldAfter(int gold, int price)
{
    return -99;
}`,
      solution: `int GoldAfter(int gold, int price)
{
    if (gold >= price)
    {
        return gold - price;
    }
    else
    {
        return gold;
    }
}`,
      tests: [
        { call: `GoldAfter(10, 4)`, expect: "6" },
        { call: `GoldAfter(3, 8)`, expect: "3" },
        { call: `GoldAfter(5, 5)`, expect: "0" },
      ],
      hints: [
        "`-99` is the stub's answer. Every test that still says `-99` has not reached one of your `return` lines.",
        "An `if` with a `return` and an `else` with a `return` covers every case. Without the `else` return, the build stops with `CS0161`.",
      ],
    },
    {
      type: "summary",
      items: [
        "The word in front of the name is the return type. `void` means nothing comes back.",
        "`return` hands a value back to the call. It does not print.",
        "A returned value has to be kept in a variable or used where it is. A call alone on a line throws the answer away.",
        "`Heal(hp);` does not change `hp`. `hp = Heal(hp);` does.",
        "A function that promises a value needs a `return` on every path, or the build stops with `CS0161`.",
      ],
    },
  ],
};

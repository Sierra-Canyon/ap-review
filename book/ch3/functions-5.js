export default {
  id: "functions-5",
  chapter: 3,
  number: "3.5",
  title: "Where a variable lives",
  from: "Functions 5 · Day 5",
  minutes: 30,
  skills: [],
  goals: [
    "Say where a variable starts and stops existing",
    "Fix `CS0103` for a variable used outside its braces",
    "Get a value from one function into another with a parameter and a `return`",
    "Split a long program into functions that each do one job",
  ],
  blocks: [
    {
      type: "text",
      md: "A variable lives from the line that declares it to the closing brace of the block it was declared in. That stretch of code is the variable's **scope**. A function sees its own parameters and the variables declared in its own body, and nothing from any other function.",
    },
    {
      type: "code",
      code: `PrintManaLine(6, 6);
PrintManaLine(0, 6);

void PrintManaLine(int mana, int maxMana)
{
    string line = "Mana " + mana + " of " + maxMana;
    if (mana == 0)
    {
        string warning = " (empty)";
        line = line + warning;
    }
    Console.WriteLine(line);
}`,
      expect: { out: "Mana 6 of 6\nMana 0 of 6 (empty)" },
    },
    {
      type: "text",
      md: "`line` is declared in the body of the function, so it lives until the function's closing brace. `warning` is declared inside the braces of the `if`, so it lives only until the `if`'s closing brace. Step through and watch `warning` appear in the Variables pane and then disappear.",
    },
    {
      type: "step",
      code: `PrintManaLine(6, 6);
PrintManaLine(0, 6);

void PrintManaLine(int mana, int maxMana)
{
    string line = "Mana " + mana + " of " + maxMana;
    if (mana == 0)
    {
        string warning = " (empty)";
        line = line + warning;
    }
    Console.WriteLine(line);
}`,
      notes: {
        "6": "line is declared here. It lives until the closing brace of the function.",
        "9": "warning is declared inside the braces of the if. It lives until the if's closing brace, two lines down.",
        "12": "After the if's closing brace, warning is gone. line is still here, with \" (empty)\" on the end when mana is 0.",
        "2": "A new call. Nothing is left from the first call: this one starts with its two parameters and nothing else.",
      },
      expect: { out: "Mana 6 of 6\nMana 0 of 6 (empty)" },
    },
    {
      type: "text",
      md: "## After the closing brace\n\nHere the line that uses `warning` has moved down one line, below the `if`'s closing brace.",
    },
    {
      type: "code",
      code: `PrintManaLine(0, 6);

void PrintManaLine(int mana, int maxMana)
{
    string line = "Mana " + mana + " of " + maxMana;
    if (mana == 0)
    {
        string warning = " (empty)";
    }
    line = line + warning;
    Console.WriteLine(line);
}`,
      expect: { error: "CS0103" },
    },
    {
      type: "text",
      md: "It does not build: `CS0103: The name 'warning' does not exist in the current context`. After the closing brace there is no variable called `warning` at all. Move the line back inside the braces.",
    },
    {
      type: "note",
      kind: "trap",
      md: "Declaring the variable above the `if` and setting it only inside does not fix it. `string message;` with `message = \"Not enough mana.\";` inside the `if` gives `CS0165: Use of unassigned local variable 'message'`. Now `message` exists after the `if`, but when the test is false it has no value. Give it a value on every path.",
    },
    {
      type: "code",
      code: `Console.WriteLine(ManaWarning(2, 3));

string ManaWarning(int mana, int cost)
{
    string message;
    if (mana < cost)
    {
        message = "Not enough mana.";
    }
    return message;
}`,
      expect: { error: "CS0165" },
    },
    {
      type: "text",
      md: "## Another function's variable\n\n`ShortBy` works out how much mana is missing and keeps it in `missing`. `ShortLine` tries to use that variable.",
    },
    {
      type: "code",
      code: `Console.WriteLine(ShortLine(2, 5));

int ShortBy(int mana, int cost)
{
    int missing = cost - mana;
    return missing;
}

string ShortLine(int mana, int cost)
{
    return "You are short by " + missing + ".";
}`,
      expect: { error: "CS0103" },
    },
    {
      type: "text",
      md: "`CS0103: The name 'missing' does not exist in the current context`. `missing` lives inside `ShortBy`, from its declaration to `ShortBy`'s closing brace. `ShortLine` is a different function and cannot see it. The number gets across with a call: `ShortLine` passes `mana` and `cost` in as arguments, and `ShortBy` returns the answer.",
    },
    {
      type: "code",
      code: `Console.WriteLine(ShortLine(2, 5));

int ShortBy(int mana, int cost)
{
    int missing = cost - mana;
    return missing;
}

string ShortLine(int mana, int cost)
{
    return "You are short by " + ShortBy(mana, cost) + ".";
}`,
      expect: { out: "You are short by 3." },
    },
    {
      type: "text",
      md: "Both functions have parameters called `mana` and `cost`. They are four different variables. Each function has its own two, and changing one never changes another.",
    },
    {
      type: "note",
      kind: "note",
      md: "In a one-file program like the ones on this page, a function can also read a variable declared at the top of the program, outside every function. This builds and prints `Mana 6`. The game's files are split so that this cannot happen: in `dungeon/`, a function that reaches for `mana` from `Program.cs` gets `CS0103: The name 'mana' does not exist in the current context`, and every value has to come in through a parameter.",
    },
    {
      type: "code",
      code: `int mana = 6;
PrintManaLine();

void PrintManaLine()
{
    Console.WriteLine("Mana " + mana);
}`,
      expect: { out: "Mana 6" },
    },
    {
      type: "text",
      md: "## Splitting a long program\n\nThis program has Rook hit two monsters. The rule for damage, the attack minus the defense but never less than 1, is typed out twice.",
    },
    {
      type: "code",
      code: `int rookAttack = 4;
int grubHp = 4;
int grubDefense = 1;
int batHp = 3;
int batDefense = 5;

int dealt = rookAttack - grubDefense;
if (dealt < 1)
{
    dealt = 1;
}
grubHp = grubHp - dealt;
Console.WriteLine("Rook hits the Grub for " + dealt + ". Grub health: " + grubHp);

dealt = rookAttack - batDefense;
if (dealt < 1)
{
    dealt = 1;
}
batHp = batHp - dealt;
Console.WriteLine("Rook hits the Bat for " + dealt + ". Bat health: " + batHp);`,
      expect: { out: "Rook hits the Grub for 3. Grub health: 1\nRook hits the Bat for 1. Bat health: 2" },
    },
    {
      type: "text",
      md: "The two copies differ only in their values: the defense, and the monster's name and health. Each repeated piece becomes a function, and each value that differs becomes a parameter. `Damage` holds the rule once. `HitLine` builds the sentence once.",
    },
    {
      type: "code",
      code: `int rookAttack = 4;
int grubHp = 4;
int batHp = 3;

int dealt = Damage(rookAttack, 1);
grubHp = grubHp - dealt;
Console.WriteLine(HitLine("Grub", dealt, grubHp));

dealt = Damage(rookAttack, 5);
batHp = batHp - dealt;
Console.WriteLine(HitLine("Bat", dealt, batHp));

int Damage(int attackPower, int defense)
{
    int dealt = attackPower - defense;
    if (dealt < 1)
    {
        dealt = 1;
    }
    return dealt;
}

string HitLine(string monster, int dealt, int hpLeft)
{
    return "Rook hits the " + monster + " for " + dealt + ". " + monster + " health: " + hpLeft;
}`,
      expect: { out: "Rook hits the Grub for 3. Grub health: 1\nRook hits the Bat for 1. Bat health: 2" },
    },
    {
      type: "text",
      md: "The output is the same, character for character. A third monster now costs three lines and no new copy of the rule, and a change to the rule is one edit, in `Damage`. There are three variables called `dealt` here: one at the top of the program, one in `Damage`, and the parameter of `HitLine`. Each lives inside its own braces.",
    },
    {
      type: "mcq",
      id: "functions-5-q1",
      question: "`bonus` is declared on line 5. Where does it stop existing?",
      code: `void PrintReward(int gold)
{
    if (gold > 10)
    {
        int bonus = 5;
        Console.WriteLine(gold + bonus);
    }
    Console.WriteLine("Done.");
}`,
      choices: [
        "At the closing brace of the if, line 7.",
        "At the closing brace of the function, line 9.",
        "It never stops existing. The whole program can use it.",
        "Right after line 6, the last line that uses it.",
      ],
      answer: 0,
      why: [
        "bonus is declared inside the braces of the if, so it lives until the if's closing brace. Using it on line 8 gives CS0103.",
        "That is where a variable declared in the body of the function, outside the if, would stop. bonus is declared inside the if.",
        "Variables declared inside a function never reach outside it. This one does not even reach line 8.",
        "A variable lives until the closing brace of its block, whether or not anything uses it after line 6.",
      ],
      verify: {
        cases: [
          { run: `PrintReward(12);\nvoid PrintReward(int gold)\n{\n    if (gold > 10)\n    {\n        int bonus = 5;\n        Console.WriteLine(gold + bonus);\n    }\n    Console.WriteLine("Done.");\n}`, out: "17\nDone." },
          { run: `PrintReward(12);\nvoid PrintReward(int gold)\n{\n    if (gold > 10)\n    {\n        int bonus = 5;\n        Console.WriteLine(gold + bonus);\n    }\n    Console.WriteLine(bonus);\n}`, error: "CS0103" },
        ],
      },
    },
    {
      type: "mcq",
      id: "functions-5-q2",
      question: "What does this program print?",
      code: `int hp = 10;
Rest(hp);
Console.WriteLine(hp);

void Rest(int hp)
{
    hp = hp + 5;
    Console.WriteLine(hp);
}`,
      choices: [
        "15 and then 10",
        "15 and then 15",
        "10 and then 10",
        "It does not build, because hp is declared twice.",
      ],
      answer: 0,
      why: [
        "The parameter hp is a copy of the 10. Rest adds 5 to its own copy and prints 15. The hp at the top is still 10.",
        "Rest changes its parameter, a different variable from the hp at the top. Nothing changes the outside hp.",
        "Rest prints its own hp after adding 5, so the first line is 15.",
        "The parameter and the variable at the top are two variables with the same name. It builds.",
      ],
      verify: { out: "15\n10" },
    },
    {
      type: "mcq",
      id: "functions-5-q3",
      question: "Why does this not build?",
      code: `Console.WriteLine(Loot(3));

int Coins(int chests)
{
    int coins = chests * 5;
    return coins;
}

string Loot(int chests)
{
    return "You find " + coins + " coins.";
}`,
      choices: [
        "coins lives inside Coins. Loot is a different function and cannot see it.",
        "coins is never declared.",
        "Coins is defined above Loot, so Loot cannot call it.",
        "coins is an int, and the line needs a string.",
      ],
      answer: 0,
      why: [
        "The build says CS0103: The name 'coins' does not exist in the current context. Loot needs to call Coins(chests) and use what it returns.",
        "It is declared, inside Coins. A variable declared in one function does not exist in another.",
        "Definition order does not matter. Loot could call Coins. It never does.",
        "An int joined to a string with + is fine. The problem is that coins does not exist in Loot.",
      ],
      verify: { error: "CS0103" },
    },
    {
      type: "parsons",
      id: "functions-5-p1",
      prompt: "Put the lines in order so the program prints `Arrows: 0 (empty)`.",
      lines: [
        `PrintArrows(0);`,
        `void PrintArrows(int arrows)`,
        `{`,
        `    string line = "Arrows: " + arrows;`,
        `    if (arrows == 0)`,
        `    {`,
        `        line = line + " (empty)";`,
        `    }`,
        `    Console.WriteLine(line);`,
        `}`,
      ],
      distractors: [`        string line = line + " (empty)";`],
      expect: { out: "Arrows: 0 (empty)" },
    },
    {
      type: "exercise",
      id: "functions-5-e1",
      prompt: "Write `ShopLine`. When `gold` is at least `price`, it returns `You can buy it.` Otherwise it returns `You need 3 more gold.`, with the real amount in place of 3.\n\nThe amount comes from a finished function that the checker provides: `int ShortBy(int gold, int price)` returns how much gold is missing. Call it. Its variables are out of reach from `ShopLine`.",
      starter: `string ShopLine(int gold, int price)
{
    return "?";
}`,
      solution: `string ShopLine(int gold, int price)
{
    if (gold >= price)
    {
        return "You can buy it.";
    }
    return "You need " + ShortBy(gold, price) + " more gold.";
}`,
      given: `int ShortBy(int gold, int price)
{
    int missing = price - gold;
    return missing;
}`,
      tests: [
        { call: `ShopLine(10, 4)`, expect: "You can buy it." },
        { call: `ShopLine(2, 5)`, expect: "You need 3 more gold." },
        { call: `ShopLine(1, 9)`, expect: "You need 8 more gold." },
        { call: `ShopLine(6, 6)`, expect: "You can buy it." },
      ],
      hints: [
        "`ShortBy(gold, price)` is a value, like a variable. It can go right inside the `+`.",
        "`ShortBy` takes `gold` first and `price` second. Swapped, it gives a negative number.",
      ],
    },
    {
      type: "summary",
      items: [
        "A variable lives from its declaration to the closing brace of the block it was declared in.",
        "A variable declared inside an `if` is gone after the `if`'s closing brace. Using it there gives `CS0103`.",
        "A variable declared but not set on every path gives `CS0165` when it is used.",
        "A function cannot see another function's variables. Values go in as arguments and come out with `return`.",
        "Two variables with the same name in two functions are two different variables.",
        "A piece of code typed out twice becomes one function, with a parameter for each value that differed.",
      ],
    },
  ],
};

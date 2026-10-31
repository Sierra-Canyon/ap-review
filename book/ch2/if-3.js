export default {
  id: "if-3",
  chapter: 2,
  number: "2.3",
  title: "And, or, not, and an if inside an if",
  from: "Review 2 · Day 0",
  minutes: 25,
  skills: [],
  goals: [
    "Join two conditions with `&&` (and) or `||` (or)",
    "Store a condition in a `bool` variable and flip it with `!`",
    "Put an `if` inside another `if` and say when the inner one is asked",
  ],
  blocks: [
    {
      type: "text",
      md: "Three operators combine conditions:\n\n- `&&` (and) is true when both sides are true.\n- `||` (or) is true when at least one side is true.\n- `!` (not) turns `true` into `false` and `false` into `true`.",
    },
    {
      type: "code",
      code: `int hp = 6;
int potions = 0;
Console.WriteLine(hp > 0 && potions > 0);
Console.WriteLine(hp > 0 || potions > 0);
Console.WriteLine(!(hp > 0));`,
      expect: { out: "False\nTrue\nFalse" },
    },
    {
      type: "text",
      md: "## Two rules in one test\n\nThe rope bridge holds a party at level 5 or above at any time. At level 3 or 4 it holds them only by day.",
    },
    {
      type: "code",
      code: `int level = 3;
string time = "day";
if (level >= 5 || (level >= 3 && time == "day"))
{
    Console.WriteLine("The bridge holds.");
}
else
{
    Console.WriteLine("The bridge creaks. Turn back.");
}`,
      expect: { out: "The bridge holds." },
    },
    {
      type: "text",
      md: "`level >= 5` is false, so `||` checks its right side. Inside the parentheses, `level >= 3` and `time == \"day\"` are both true, so the `&&` is true, and the whole test is true. Change `\"day\"` on line 2 to `\"Day\"` and it prints `The bridge creaks. Turn back.`: `==` counts the capital D.",
    },
    {
      type: "note",
      kind: "trap",
      md: "Each side of `&&` and `||` has to be a whole condition. `hp > 0 && < 10` reads like English, and the build stops with `CS1525: Invalid expression term '<'`. Write the name on both sides: `hp > 0 && hp < 10`.\n\nOne `=` on one side stops it too. `hp <= 8 && potions = 0` gives `CS0019: Operator '&&' cannot be applied to operands of type 'bool' and 'int'`. Write `potions == 0`.",
    },
    {
      type: "code",
      code: `int hp = 3;
if (hp > 0 && < 10)
{
    Console.WriteLine("Rook can still fight.");
}`,
      expect: { error: "CS1525" },
    },
    {
      type: "text",
      md: "## bool variables\n\nA condition gives a value, `true` or `false`, and a `bool` variable can hold it. That gives the condition a name. `!` in front of it reads as *not*.",
    },
    {
      type: "recipe",
      title: "Storing a condition",
      template: "bool {name} = {condition};",
      parts: [
        { slot: "{name}", meaning: "a name that reads as a yes or no question, like `hasRope` or `canFight`" },
        { slot: "{condition}", meaning: "a comparison, worked out once, when this line runs" },
      ],
    },
    {
      type: "code",
      code: `string answer = "yes";
bool hasRope = answer == "yes";
Console.WriteLine(hasRope);
if (!hasRope)
{
    Console.WriteLine("The party waits at the cliff.");
}
else
{
    Console.WriteLine("The party climbs down.");
}`,
      expect: { out: "True\nThe party climbs down." },
    },
    {
      type: "text",
      md: "Line 2 works out `answer == \"yes\"` and stores `true`. `!hasRope` is `false`, so the `else` block runs.",
    },
    {
      type: "text",
      md: "## An if inside an if\n\nAn `if` can go inside the block of another `if`. The inner one is asked only when the outer block runs. Step through it: `hasRope` is true, so the outer `else` block runs, and the inner `if` compares `hp`.",
    },
    {
      type: "step",
      code: `bool hasRope = true;
int hp = 4;
if (!hasRope)
{
    Console.WriteLine("The party waits at the cliff.");
}
else
{
    if (hp < 5)
    {
        Console.WriteLine("Mote climbs down with help.");
    }
    else
    {
        Console.WriteLine("Mote climbs down.");
    }
}`,
      notes: {
        "3": "hasRope is true, so `!hasRope` is false. The first block is skipped.",
        "9": "The outer else block runs, so this inner if is asked. `4 < 5` is true.",
        "11": "The inner if block runs. The inner else is skipped.",
      },
      expect: { out: "Mote climbs down with help." },
    },
    {
      type: "text",
      md: "The same choices fit in one chain: `if (!hasRope)`, then `else if (hp < 5)`, then `else`. Either way, when `hasRope` is false the first block runs and `hp` is never compared with anything.",
    },
    {
      type: "mcq",
      id: "if-3-q1",
      question: "What is printed?",
      code: `int hp = 5;
int potions = 2;
if (hp < 3 || potions == 0)
{
    Console.WriteLine("retreat");
}
else
{
    Console.WriteLine("fight on");
}`,
      choices: ["fight on", "retreat", "retreat and then fight on", "Nothing is printed."],
      answer: 0,
      why: [
        "5 < 3 is false and 2 == 0 is false. || needs at least one true side, so the else block runs.",
        "retreat needs hp below 3 or no potions. Neither is the case.",
        "With an else, exactly one of the two blocks runs.",
        "When the condition is false, the else block runs.",
      ],
      verify: { out: "fight on" },
    },
    {
      type: "mcq",
      id: "if-3-q2",
      question: "What is printed?",
      code: `string answer = "Yes";
bool hasKey = answer == "yes";
if (!hasKey)
{
    Console.WriteLine("locked out");
}
else
{
    Console.WriteLine("inside");
}`,
      choices: ["locked out", "inside", "False", "Nothing. It does not build."],
      answer: 0,
      why: [
        "\"Yes\" and \"yes\" differ in the capital Y, so hasKey is false. !hasKey is true, and the first block runs.",
        "inside would print for an answer of yes in small letters.",
        "hasKey is false, but nothing prints hasKey.",
        "A bool can hold the result of ==, and ! works on a bool. It builds.",
      ],
      verify: { out: "locked out" },
    },
    {
      type: "mcq",
      id: "if-3-q3",
      question: "`hp` is an `int`. Which condition is true when `hp` is from 1 to 9, and false for every other number?",
      choices: ["hp > 0 && hp < 10", "hp > 0 || hp < 10", "hp > 0 && < 10", "!(hp > 0) && hp < 10"],
      mono: true,
      answer: 0,
      why: [
        "Both sides have to be true: more than 0 and less than 10 leaves 1 to 9.",
        "Every int is more than 0 or less than 10, so this is always true.",
        "The right side is not a whole condition. The build stops with CS1525.",
        "!(hp > 0) is true for 0 and below, so this is true for 0 and every negative number.",
      ],
      verify: {
        cases: [
          { run: `int hp = 0;\nConsole.WriteLine(hp > 0 && hp < 10);\nhp = 1;\nConsole.WriteLine(hp > 0 && hp < 10);\nhp = 9;\nConsole.WriteLine(hp > 0 && hp < 10);\nhp = 10;\nConsole.WriteLine(hp > 0 && hp < 10);`, out: "False\nTrue\nTrue\nFalse" },
          { run: `int hp = 0;\nConsole.WriteLine(hp > 0 || hp < 10);\nhp = 10;\nConsole.WriteLine(hp > 0 || hp < 10);\nhp = -5;\nConsole.WriteLine(hp > 0 || hp < 10);`, out: "True\nTrue\nTrue" },
          { run: `int hp = 5;\nConsole.WriteLine(hp > 0 && < 10);`, error: "CS1525" },
          { run: `int hp = 0;\nConsole.WriteLine(!(hp > 0) && hp < 10);\nhp = -3;\nConsole.WriteLine(!(hp > 0) && hp < 10);\nhp = 5;\nConsole.WriteLine(!(hp > 0) && hp < 10);`, out: "True\nTrue\nFalse" },
        ],
      },
    },
    {
      type: "mcq",
      id: "if-3-q4",
      question: "What is printed?",
      code: `bool hasTorch = false;
int hp = 9;
if (hasTorch)
{
    if (hp > 5)
    {
        Console.WriteLine("explore");
    }
}
else
{
    Console.WriteLine("wait");
}`,
      choices: ["wait", "explore", "explore and then wait", "Nothing is printed."],
      answer: 0,
      why: [
        "hasTorch is false, so the outer else runs. The inner if is never asked.",
        "explore needs the outer test to be true first. hp > 5 is never checked.",
        "The outer if and else are one choice: one of their two blocks runs.",
        "The outer test is false, and the outer if has an else, which prints wait.",
      ],
      verify: { out: "wait" },
    },
    {
      type: "parsons",
      id: "if-3-p1",
      prompt: "Put the lines in order so the program prints `False` and then `Out of arrows.`",
      lines: [
        `int arrows = 0;`,
        `bool canShoot = arrows > 0;`,
        `Console.WriteLine(canShoot);`,
        `if (!canShoot)`,
        `{`,
        `    Console.WriteLine("Out of arrows.");`,
        `}`,
      ],
      distractors: [`if (canShoot)`],
      expect: { out: "False\nOut of arrows." },
    },
    {
      type: "exercise",
      id: "if-3-e1",
      prompt: "The vault opens for level 5 and up on any night. At level 3 or 4 it opens only when `moon` is `\"full\"`. At level 2 and below it never opens. Write `Vault` so `result` becomes `\"open\"` when the vault opens and stays `\"shut\"` otherwise.",
      starter: `string Vault(int level, string moon)
{
    string result = "shut";
    return result;
}`,
      solution: `string Vault(int level, string moon)
{
    string result = "shut";
    if (level >= 5 || (level >= 3 && moon == "full"))
    {
        result = "open";
    }
    return result;
}`,
      tests: [
        { call: `Vault(5, "new")`, expect: "open" },
        { call: `Vault(9, "full")`, expect: "open" },
        { call: `Vault(3, "full")`, expect: "open" },
        { call: `Vault(4, "new")`, expect: "shut" },
        { call: `Vault(3, "Full")`, expect: "shut" },
        { call: `Vault(2, "full")`, expect: "shut" },
      ],
      hints: [
        "There are two ways in: `level >= 5`, or level 3 or more with a full moon. Join the two ways with `||`.",
        "The second way is two conditions that both have to be true, joined with `&&` and wrapped in parentheses.",
        "`Vault(3, \"Full\")` should be `\"shut\"`: compare `moon` with `==`, which counts the capital F.",
      ],
    },
    {
      type: "summary",
      items: [
        "`a && b` is true only when both are true. `a || b` is true when at least one is.",
        "`!` flips a `bool`: `!(hp > 0)` is true when `hp` is 0 or less.",
        "Each side of `&&` or `||` is a whole condition. `hp > 0 && < 10` does not build (CS1525).",
        "`bool hasRope = answer == \"yes\";` stores the result of the comparison, `true` or `false`.",
        "An `if` inside another `if` is asked only when the outer block runs.",
      ],
    },
  ],
};

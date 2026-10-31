export default {
  id: "variables-2",
  chapter: 1,
  number: "1.2",
  title: "Arithmetic, and dividing whole numbers",
  from: "Review 1 · Day 0",
  minutes: 25,
  skills: [],
  goals: [
    "Work out an expression with `+`, `-`, `*`, `/`, and `%` in the order C# does",
    "Say what `/` gives when both sides are `int`, and when one side is a `double`",
    "Split a total into full groups and a remainder with `/` and `%`",
    "Predict what `+` prints when one side is a string",
  ],
  blocks: [
    {
      type: "text",
      md: "C# does arithmetic with `+`, `-`, `*` (times), and `/` (divided by). `*` and `/` go before `+` and `-`, and anything in parentheses goes first.",
    },
    {
      type: "code",
      code: `int attack = 4;
int rounds = 3;
Console.WriteLine(attack * rounds);
Console.WriteLine(attack + rounds * 2);
Console.WriteLine((attack + rounds) * 2);`,
      expect: { out: "12\n10\n14" },
    },
    {
      type: "text",
      md: "## Dividing two ints\n\nWhen both sides of `/` are `int`, the answer is an `int`. Everything after the decimal point is dropped. Nothing is rounded: `19 / 10` is 1.",
    },
    {
      type: "code",
      code: `Console.WriteLine(7 / 2);
Console.WriteLine(19 / 10);
Console.WriteLine(2 / 3);`,
      expect: { out: "3\n1\n0" },
    },
    {
      type: "text",
      md: "`%` gives the **remainder**: what is left over after the division. 19 divided by 10 is 1 with 9 left over, so `19 % 10` is 9.",
    },
    {
      type: "code",
      code: `Console.WriteLine(7 % 2);
Console.WriteLine(19 % 10);
Console.WriteLine(20 % 10);`,
      expect: { out: "1\n9\n0" },
    },
    {
      type: "recipe",
      title: "Splitting a total into groups",
      template: "int {groups} = {total} / {size};\nint {left} = {total} % {size};",
      parts: [
        { slot: "{total}", meaning: "how many things there are" },
        { slot: "{size}", meaning: "how many things fill one group" },
        { slot: "{groups}", meaning: "how many full groups: `/` with two ints" },
        { slot: "{left}", meaning: "how many are left over, not enough for another group: `%`" },
      ],
    },
    {
      type: "code",
      code: `int arrows = 23;
int perQuiver = 10;
int full = arrows / perQuiver;
int left = arrows % perQuiver;
Console.WriteLine(full + " full quivers");
Console.WriteLine(left + " arrows left over");`,
      expect: { out: "2 full quivers\n3 arrows left over" },
    },
    {
      type: "text",
      md: "## Seconds into hours and minutes\n\nA torch burns for 3725 seconds. Step through and watch `/` and `%` split that into hours, minutes, and seconds.",
    },
    {
      type: "step",
      code: `int seconds = 3725;
int hours = seconds / 3600;
int rest = seconds % 3600;
int minutes = rest / 60;
int secs = rest % 60;
Console.WriteLine(hours + " h " + minutes + " m " + secs + " s");`,
      notes: {
        "2": "An hour is 3600 seconds. `3725 / 3600` is 1, and the rest is dropped.",
        "3": "The seconds the hour did not use: `3725 % 3600` is 125.",
        "4": "A minute is 60 seconds. `125 / 60` is 2.",
        "5": "`125 % 60` is 5, the seconds that do not make a whole minute.",
      },
      expect: { out: "1 h 2 m 5 s" },
    },
    {
      type: "text",
      md: "## 3 or 3.0\n\nThe party's health is Rook's 10, Mote's 7, and Hero's 8, which is 25. Divide by 3 for the average.",
    },
    {
      type: "code",
      code: `int total = 10 + 7 + 8;
Console.WriteLine(total / 3);
Console.WriteLine(total / 3.0);`,
      expect: { out: "8\n8.333333333333334" },
    },
    {
      type: "text",
      md: "`total / 3` is an `int` divided by an `int`, so the answer is the `int` 8. `3.0` is a `double`. When either side of `/` is a `double`, the answer is a `double`: `8.333333333333334`.",
    },
    {
      type: "note",
      kind: "trap",
      md: "Storing the answer in a `double` does not help. `total / 3` is worked out first, as an `int` divided by an `int`, and only then is the 8 stored. The program below prints `8`, with no error and no warning. Change `3` to `3.0` and it prints `8.333333333333334`.",
    },
    {
      type: "code",
      code: `int total = 10 + 7 + 8;
double average = total / 3;
Console.WriteLine(average);`,
      expect: { out: "8" },
    },
    {
      type: "note",
      kind: "note",
      md: "A `double` that holds a whole number prints with no decimal point. `24 / 3.0` is a `double` and prints `8`, the same as the `int` 8.",
    },
    {
      type: "code",
      code: `double even = 24 / 3.0;
double uneven = 25 / 3.0;
Console.WriteLine(even);
Console.WriteLine(uneven);`,
      expect: { out: "8\n8.333333333333334" },
    },
    {
      type: "text",
      md: "## + with text\n\nWhen one side of `+` is a string, `+` joins the two into one string. C# works from left to right, one `+` at a time.",
    },
    {
      type: "code",
      code: `Console.WriteLine("HP: " + 4 + 3);
Console.WriteLine("HP: " + (4 + 3));
Console.WriteLine(4 + 3 + " HP");`,
      expect: { out: "HP: 43\nHP: 7\n7 HP" },
    },
    {
      type: "text",
      md: "Line 1: `\"HP: \" + 4` is the string `\"HP: 4\"`, and that string joined with 3 is `HP: 43`. Line 2 adds inside the parentheses first. Line 3 starts with two numbers, so the first `+` adds them, and the second joins 7 to the text.",
    },
    {
      type: "mcq",
      id: "variables-2-q1",
      question: "What is printed?",
      code: `Console.WriteLine(17 / 5 + 17 % 5);`,
      choices: ["5", "5.4", "3.4", "2"],
      answer: 0,
      why: [
        "17 / 5 is 3, because both are ints. 17 % 5 is 2, the remainder. 3 + 2 is 5.",
        "17 / 5 with two ints is 3, not 3.4. Nothing here is a double.",
        "The decimal part of an int division is dropped, and the line also adds 17 % 5.",
        "2 is only 17 % 5. The line adds 17 / 5 to it.",
      ],
      verify: { out: "5" },
    },
    {
      type: "mcq",
      id: "variables-2-q2",
      question: "What is printed?",
      code: `int gold = 25;
double each = gold / 2;
Console.WriteLine(each);`,
      choices: ["12", "12.5", "13", "12.0"],
      answer: 0,
      why: [
        "gold / 2 is an int divided by an int, so it is 12 before it is stored. A double holding 12 prints 12.",
        "12.5 needs a double in the division, like gold / 2.0. The type of each does not change the division.",
        "An int division drops the decimal part. It never rounds up.",
        "A double that holds a whole number prints with no decimal point.",
      ],
      verify: { out: "12" },
    },
    {
      type: "mcq",
      id: "variables-2-q3",
      question: "What is printed?",
      code: `int rope = 2;
int torches = 6;
Console.WriteLine("Items: " + rope + torches);`,
      choices: ["Items: 26", "Items: 8", "Items: 2 6", "Items: rope torches"],
      answer: 0,
      why: [
        "\"Items: \" + rope is a string, so the next + joins too: \"Items: 2\" then \"Items: 26\".",
        "C# works left to right. The first + makes a string, so 6 is joined, not added. (rope + torches) in parentheses would print 8.",
        "+ adds no spaces. A space appears only where a string has one.",
        "rope and torches have no quotation marks, so they are names, and their values are printed.",
      ],
      verify: { out: "Items: 26" },
    },
    {
      type: "mcq",
      id: "variables-2-q4",
      question: "`total` is an `int` that holds 25. Which line prints `12.5`?",
      choices: ["Console.WriteLine(total / 2.0);", "Console.WriteLine(total / 2);", "Console.WriteLine(total / 2 * 1.0);", "Console.WriteLine(total % 2);"],
      mono: true,
      answer: 0,
      why: [
        "2.0 is a double, so the division is done as a double: 12.5.",
        "Both sides are ints, so this prints 12.",
        "total / 2 is worked out first and gives 12. 12 * 1.0 is a double, but it is 12, and it prints 12.",
        "% is the remainder. 25 % 2 is 1.",
      ],
      verify: {
        cases: [
          { run: `int total = 25;\nConsole.WriteLine(total / 2.0);`, out: "12.5" },
          { run: `int total = 25;\nConsole.WriteLine(total / 2);`, out: "12" },
          { run: `int total = 25;\nConsole.WriteLine(total / 2 * 1.0);`, out: "12" },
          { run: `int total = 25;\nConsole.WriteLine(total % 2);`, out: "1" },
        ],
      },
    },
    {
      type: "parsons",
      id: "variables-2-p1",
      prompt: "Coins go into pouches of 10. Put the lines in order so the program prints `4 pouches` and then `2 coins left`.",
      lines: [
        `int coins = 42;`,
        `int perPouch = 10;`,
        `int pouches = coins / perPouch;`,
        `int left = coins % perPouch;`,
        `Console.WriteLine(pouches + " pouches");`,
        `Console.WriteLine(left + " coins left");`,
      ],
      distractors: [`int pouches = coins % perPouch;`],
      expect: { out: "4 pouches\n2 coins left" },
    },
    {
      type: "exercise",
      id: "variables-2-e1",
      prompt: "The party of three splits `gold` evenly, in whole coins. Write `Split` so it returns how many coins each hero gets and how many are left over, as text like `8 each, 1 left`.",
      starter: `string Split(int gold)
{
    return "?";
}`,
      solution: `string Split(int gold)
{
    int each = gold / 3;
    int left = gold % 3;
    return each + " each, " + left + " left";
}`,
      tests: [
        { call: `Split(25)`, expect: "8 each, 1 left" },
        { call: `Split(30)`, expect: "10 each, 0 left" },
        { call: `Split(14)`, expect: "4 each, 2 left" },
        { call: `Split(2)`, expect: "0 each, 2 left" },
      ],
      hints: [
        "`gold / 3` is what each hero gets. `gold % 3` is what is left.",
        "Join the pieces with `+`: `each + \" each, \" + ...`. Watch the spaces inside the quotation marks.",
      ],
    },
    {
      type: "summary",
      items: [
        "`*` and `/` go before `+` and `-`, and parentheses go first.",
        "An `int` divided by an `int` is an `int`: `7 / 2` is 3. The decimal part is dropped, never rounded.",
        "`%` is the remainder: `19 % 10` is 9.",
        "If either side of `/` is a `double`, the answer is a `double`: `25 / 3.0` is 8.333333333333334.",
        "`double average = total / 3;` still stores 8. The `int` division happens before the value is stored.",
        "With a string on the left, `+` joins: `\"HP: \" + 4 + 3` is `HP: 43`.",
      ],
    },
  ],
};

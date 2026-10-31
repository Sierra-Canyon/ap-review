export default {
  id: "variables-3",
  chapter: 1,
  number: "1.3",
  title: "Read what the player types, print it back",
  from: "Review 1 · Day 0",
  minutes: 25,
  skills: [],
  goals: [
    "Read a line of input with `Console.ReadLine()`",
    "Turn typed digits into a number with `int.Parse` or `double.Parse`",
    "Print values inside text with an interpolated string, `$\"{hp}\"`",
    "Say which input makes `int.Parse` crash, and what the CS8600 and CS8604 warnings mean",
  ],
  blocks: [
    {
      type: "text",
      md: "`Console.ReadLine()` waits for the player to type a line and press Enter, then gives back what they typed as a `string`. This program runs with `Mote` as its input.",
    },
    {
      type: "code",
      code: `Console.WriteLine("Name your hero:");
string name = Console.ReadLine();
Console.WriteLine("Welcome, " + name);`,
      stdin: "Mote\n",
      expect: { out: "Name your hero:\nWelcome, Mote", warning: "CS8600" },
    },
    {
      type: "note",
      kind: "note",
      md: "The build prints a yellow warning for line 2:\n\n`warning CS8600: Converting null literal or possible null value to non-nullable type.`\n\n`int.Parse(Console.ReadLine())`, below, gives a different one:\n\n`warning CS8604: Possible null reference argument for parameter 's' in 'int int.Parse(string s)'.`\n\nA warning is not an error. The program builds and runs, and you can leave both of these alone.",
    },
    {
      type: "text",
      md: "## Typed digits are still text\n\nWhatever the player types comes back as a `string`, digits too. This one runs with `7` as its input.",
    },
    {
      type: "code",
      code: `Console.WriteLine("How many potions?");
string typed = Console.ReadLine();
Console.WriteLine(typed + 1);`,
      stdin: "7\n",
      expect: { out: "How many potions?\n71", warning: "CS8600" },
    },
    {
      type: "text",
      md: "It prints `71`: the string `\"7\"` joined to 1. To do arithmetic with what was typed, turn it into a number first.",
    },
    {
      type: "recipe",
      title: "Reading a whole number",
      template: "int {name} = int.Parse(Console.ReadLine());",
      parts: [
        { slot: "Console.ReadLine()", meaning: "waits for one line of input and gives it back as a `string`" },
        { slot: "int.Parse(...)", meaning: "turns a string of digits, like `\"7\"`, into the `int` 7" },
        { slot: "{name}", meaning: "the `int` variable that holds the number" },
      ],
    },
    {
      type: "code",
      code: `Console.WriteLine("How many potions?");
int potions = int.Parse(Console.ReadLine());
Console.WriteLine(potions + 1);`,
      stdin: "7\n",
      expect: { out: "How many potions?\n8", warning: "CS8604" },
    },
    {
      type: "text",
      md: "For a number with a decimal point, `double.Parse` does the same job. This one runs with `3.5` as its input.",
    },
    {
      type: "code",
      code: `Console.WriteLine("Speed:");
double speed = double.Parse(Console.ReadLine());
Console.WriteLine(speed * 2);`,
      stdin: "3.5\n",
      expect: { out: "Speed:\n7", warning: "CS8604" },
    },
    {
      type: "note",
      kind: "trap",
      md: "`int.Parse` reads whole numbers only. The program below builds, prints its question, and then stops on line 2 with\n\n`FormatException: The input string 'ten' was not in a correct format.`\n\nThe input was `ten`. With `3.5` as the input, it stops the same way, with `'3.5'` in the message. Change the input to `10` and it prints `11`.",
    },
    {
      type: "code",
      code: `Console.WriteLine("How many potions?");
int potions = int.Parse(Console.ReadLine());
Console.WriteLine(potions + 1);`,
      stdin: "ten\n",
      expect: { out: "How many potions?", crash: "FormatException" },
    },
    {
      type: "text",
      md: "## Interpolated strings\n\nA `$` in front of the opening quotation mark lets you write a variable, or any expression, inside braces `{ }` in the text. C# puts the value there.",
    },
    {
      type: "code",
      code: `string name = "Mote";
int hp = 7;
int attack = 3;
Console.WriteLine($"{name} has {hp} health and {attack} attack.");
Console.WriteLine($"After a potion: {hp + 4}");`,
      expect: { out: "Mote has 7 health and 3 attack.\nAfter a potion: 11" },
    },
    {
      type: "text",
      md: "Line 4 with `+` instead is `name + \" has \" + hp + \" health and \" + attack + \" attack.\"`, and it prints the same thing. Without the `$`, the braces are ordinary characters:",
    },
    {
      type: "code",
      code: `string name = "Mote";
int hp = 7;
Console.WriteLine("{name} has {hp} health.");`,
      expect: { out: "{name} has {hp} health." },
    },
    {
      type: "text",
      md: "It prints `{name} has {hp} health.`, with no error and no warning to point at the missing `$`.",
    },
    {
      type: "text",
      md: "## A whole program\n\nThe shop asks for a price, how many to buy, and the gold paid. This run has `15`, `3`, and `50` as its three lines of input. Step through it and watch each `int.Parse` line fill a variable.",
    },
    {
      type: "step",
      code: `Console.WriteLine("Price of one potion:");
int price = int.Parse(Console.ReadLine());
Console.WriteLine("How many?");
int count = int.Parse(Console.ReadLine());
Console.WriteLine("Gold paid:");
int paid = int.Parse(Console.ReadLine());
int total = price * count;
Console.WriteLine($"Total: {total}");
Console.WriteLine($"Change: {paid - total}");`,
      stdin: "15\n3\n50\n",
      notes: {
        "2": "Reads the first line of input, the string \"15\", and stores the int 15 in price.",
        "4": "Each ReadLine reads the next line. count is 3.",
        "7": "`15 * 3` is 45.",
        "9": "The braces can hold arithmetic: `50 - 45` is 5.",
      },
      expect: { out: "Price of one potion:\nHow many?\nGold paid:\nTotal: 45\nChange: 5" },
    },
    {
      type: "text",
      md: "The same program with `15`, `4`, and `50` as the input:",
    },
    {
      type: "code",
      code: `Console.WriteLine("Price of one potion:");
int price = int.Parse(Console.ReadLine());
Console.WriteLine("How many?");
int count = int.Parse(Console.ReadLine());
Console.WriteLine("Gold paid:");
int paid = int.Parse(Console.ReadLine());
int total = price * count;
Console.WriteLine($"Total: {total}");
Console.WriteLine($"Change: {paid - total}");`,
      stdin: "15\n4\n50\n",
      expect: { out: "Price of one potion:\nHow many?\nGold paid:\nTotal: 60\nChange: -10" },
    },
    {
      type: "text",
      md: "It prints `Change: -10` and ends normally. Nothing in the program compares `paid` with `total`, so nothing objects to the shop handing back negative gold.",
    },
    {
      type: "mcq",
      id: "variables-3-q1",
      question: "The player types `12`. What is printed?",
      code: `string a = Console.ReadLine();
Console.WriteLine(a + a);`,
      choices: ["1212", "24", "a + a", "Nothing. It does not build."],
      answer: 0,
      why: [
        "ReadLine gives back the string \"12\", and + on two strings joins them.",
        "24 needs numbers. int.Parse would turn \"12\" into the int 12 first.",
        "a has no quotation marks, so it is a name, and its value is printed.",
        "The line gives warning CS8600, and a warning does not stop the build.",
      ],
      verify: { stdin: "12\n", out: "1212", warning: "CS8600" },
    },
    {
      type: "mcq",
      id: "variables-3-q2",
      question: "What is printed?",
      code: `int hp = 7;
Console.WriteLine("{hp} left");`,
      choices: ["{hp} left", "7 left", "hp left", "Nothing. It does not build."],
      answer: 0,
      why: [
        "There is no $ in front of the string, so the braces and the letters inside them are ordinary text.",
        "That needs $\"{hp} left\", with the $ in front.",
        "The braces are in the string too, and they print along with hp.",
        "A string can hold braces. It builds with no error or warning.",
      ],
      verify: { out: "{hp} left" },
    },
    {
      type: "mcq",
      id: "variables-3-q3",
      question: "The player types `2.5`. What happens?",
      code: `int arrows = int.Parse(Console.ReadLine());
Console.WriteLine(arrows * 2);`,
      choices: [
        "It builds, then crashes on line 1 with FormatException.",
        "It prints 5.",
        "It prints 4.",
        "It does not build.",
      ],
      answer: 0,
      why: [
        "int.Parse reads whole numbers only. \"2.5\" is not one, so the program stops when line 1 runs.",
        "5 would need double.Parse, and a double variable to hold 2.5.",
        "int.Parse does not drop the decimal part the way int division does. It stops the program.",
        "The compiler cannot know what will be typed. It gives warning CS8604 and builds.",
      ],
      verify: { stdin: "2.5\n", crash: "FormatException", warning: "CS8604" },
    },
    {
      type: "mcq",
      id: "variables-3-q4",
      question: "What is printed?",
      code: `int a = 4;
int b = 3;
Console.WriteLine($"{a}{b} and {a + b}");`,
      choices: ["43 and 7", "7 and 7", "43 and 43", "{a}{b} and {a + b}"],
      answer: 0,
      why: [
        "{a}{b} puts 4 and then 3 into the text side by side. {a + b} works out 4 + 3 first, then puts 7 there.",
        "Each pair of braces puts in its own value. {a}{b} is two values next to each other.",
        "Inside one pair of braces, a + b is int arithmetic, so it is 7.",
        "The $ in front makes C# fill in the braces.",
      ],
      verify: { out: "43 and 7" },
    },
    {
      type: "parsons",
      id: "variables-3-p1",
      prompt: "Put the lines in order so the program prints `Rook hits for 4.` and then `The Grub has 2 left.`",
      lines: [
        `string name = "Rook";`,
        `int attack = 4;`,
        `int grubHp = 6;`,
        `Console.WriteLine($"{name} hits for {attack}.");`,
        `grubHp = grubHp - attack;`,
        `Console.WriteLine($"The Grub has {grubHp} left.");`,
      ],
      distractors: [`Console.WriteLine("{name} hits for {attack}.");`],
      expect: { out: "Rook hits for 4.\nThe Grub has 2 left." },
    },
    {
      type: "exercise",
      id: "variables-3-e1",
      prompt: "A potion costs `price` gold, the party buys `count` of them, and pays `paid`. Write `Receipt` so it returns one line like `Total: 45, change: 5`, built with an interpolated string.",
      starter: `string Receipt(int price, int count, int paid)
{
    return "?";
}`,
      solution: `string Receipt(int price, int count, int paid)
{
    int total = price * count;
    return $"Total: {total}, change: {paid - total}";
}`,
      tests: [
        { call: `Receipt(15, 3, 50)`, expect: "Total: 45, change: 5" },
        { call: `Receipt(10, 2, 20)`, expect: "Total: 20, change: 0" },
        { call: `Receipt(7, 4, 30)`, expect: "Total: 28, change: 2" },
      ],
      hints: [
        "Work out the total first: `int total = price * count;`",
        "Braces can hold arithmetic, so the change can go straight into the text as `{paid - total}`.",
      ],
    },
    {
      type: "summary",
      items: [
        "`Console.ReadLine()` gives back what the player typed as a `string`, even when it is digits: `\"7\" + 1` is `71`.",
        "`int.Parse(Console.ReadLine())` reads a whole number, and `double.Parse` reads one with a decimal point.",
        "`int.Parse` on input like `ten` or `3.5` builds, then crashes with `FormatException`.",
        "`warning CS8600` and `warning CS8604` on these lines are warnings. The program builds and runs.",
        "`$\"{name} has {hp} health.\"` puts each value in place of its braces. Without the `$`, the braces print as typed.",
      ],
    },
  ],
};

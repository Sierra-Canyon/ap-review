// AP CSA mock forms, set 1: Quiz 5 Practice A, Quiz 5 Practice B, Unit 2 Test Practice 1.
// Students take these cold. In every mcq the key is written first and answer is 0 (the site shuffles).
// Settings: a bakery, a sports league, a bike shop, a garden, and a train schedule.

const fill = (code, hole, piece) => code.replace(hole, piece);

// ---------- Quiz 5 Practice A ----------

const PA02 = `String times = "0815093011451320";
/* missing loop */`;
const pa02 = (header) => `${header}
{
    System.out.print(times.substring(i, i + 4) + " ");
}`;
const PA02_KEY = pa02("for (int i = 0; i < times.length(); i += 4)");
const PA02_B = pa02("for (int i = 0; i <= times.length(); i += 4)");
const PA02_C = pa02("for (int i = 0; i < times.length() - 4; i += 4)");
const PA02_D = pa02("for (int i = 0; i < times.length() / 4; i++)");

const q5a = [
  { id: "q5pa-01", skill: "string", type: "mcq", topic: "2.10",
    stem: "Consider the following code segment.",
    code: `String word = "scone";
String result = "";
for (int i = word.length() - 1; i > 0; i--)
{
    result += word.substring(i, i + 1);
}
System.out.println(result);`,
    question: "What is printed, and how many times does the body of the loop run?",
    choices: [
      "enoc, and the body runs 4 times",
      "enocs, and the body runs 5 times",
      "Nothing is printed. A StringIndexOutOfBoundsException is thrown.",
      "scon, and the body runs 4 times",
    ],
    why: [
      "i starts at the last index, 4, and counts down, so the letters come out backward. The test is `i > 0`, so the loop stops before index 0 and the s is never added.",
      "This lets i reach 0. `0 > 0` is false, so there is no pass for the first letter.",
      "i starts at `word.length() - 1`, the last index, so `substring(i, i + 1)` stays inside the String. Starting at `word.length()` would run past the end.",
      "Each letter is added at the end of `result`, but i counts down, so the letters are added from the back of the word first.",
    ],
    answer: 0,
    verify: { out: "enoc" } },

  { id: "q5pa-02", skill: "string", type: "mcq", topic: "2.10",
    stem: "A train schedule stores its departure times as one String of four-digit times. The following code segment is intended to print each time, followed by a space. For the String below it should print `0815 0930 1145 1320`.",
    code: PA02,
    question: "Which of the following can replace `/* missing loop */` so that the code segment works as intended?",
    choices: [PA02_KEY, PA02_B, PA02_C, PA02_D], mono: true,
    why: [
      "Each time starts 4 characters after the one before, so i goes up by 4. The last time starts at `times.length() - 4`, and then `i + 4` is exactly `times.length()`, which `substring` allows.",
      "With `<=`, there is a pass with i equal to `times.length()`, and `substring(i, i + 4)` runs past the end. A StringIndexOutOfBoundsException is thrown.",
      "This stops one time early. The last time starts at `times.length() - 4`, and `i < times.length() - 4` is false there.",
      "`times.length() / 4` is the number of times, not an index. With `i++`, each pass starts only 1 character later, so the pieces overlap.",
    ],
    answer: 0,
    verify: { cases: [
      { run: fill(PA02, "/* missing loop */", PA02_KEY), out: "0815 0930 1145 1320 " },
      { run: fill(PA02, "/* missing loop */", PA02_B), throws: "StringIndexOutOfBoundsException" },
      { run: fill(PA02, "/* missing loop */", PA02_C), out: "0815 0930 1145 " },
      { run: fill(PA02, "/* missing loop */", PA02_D), out: "0815 8150 1509 5093 " },
    ] } },

  { id: "q5pa-03", skill: "string", type: "mcq", topic: "2.10",
    stem: "A bike shop labels each part with a code. Consider the following code segment.",
    code: `String code = "T-20407-B";
int n = 0;
for (int i = 0; i < code.length(); i++)
{
    String ch = code.substring(i, i + 1);
    if ("0123456789".indexOf(ch) > 0)
    {
        n++;
    }
}
System.out.println(n);`,
    question: "What is printed?",
    choices: ["3", "5", "4", "9"], mono: true,
    why: [
      "`indexOf` returns the position of `ch` in `\"0123456789\"`, and `\"0\"` is at position 0. The test is `> 0`, so every digit except 0 is counted.",
      "This counts the two 0s as well. `\"0\"` is found at position 0, and `0 > 0` is false. Only `>= 0` would count every digit.",
      "This counts the characters that are not digits. `indexOf` returns -1 for those, and `-1 > 0` is false.",
      "The loop runs once for every character, but n goes up only when the `if` is true.",
    ],
    answer: 0,
    verify: { out: "3" } },

  { id: "q5pa-04", skill: "string", type: "mcq", topic: "2.10",
    stem: "A bakery stores its orders as one String. Consider the following code segment.",
    code: `String orders = "pie,cake,pie";
String first = orders.substring(0, 3);
if (first == "pie")
{
    System.out.println("same object");
}
else if (first.equals("pie"))
{
    System.out.println("same text");
}
else
{
    System.out.println("different");
}`,
    question: "What is printed as a result of executing the code segment?",
    choices: [
      "same text",
      "same object",
      "different",
      "Nothing is printed. The code segment does not compile.",
    ],
    why: [
      "`substring` makes a new String object, so `first == \"pie\"` compares two different references and is false. `equals` compares the characters, and they match.",
      "`==` on two String references asks whether they point to the same object. A String made by `substring` is a different object from the literal `\"pie\"`, even with the same letters in it.",
      "`equals` compares the characters, and `first` holds p, i, and e, so the second test is true.",
      "Comparing two Strings with `==` compiles. It compares references, not letters, which is why it is a trap.",
    ],
    answer: 0,
    verify: { out: "same text" } },

  { id: "q5pa-05", skill: "string", type: "mcq", topic: "2.10",
    stem: "A garden with 3 rows of 5 beds is stored as one String, row after row: `\"cctct\"`, then `\"tctbc\"`, then `\"cbttc\"`. The gardener numbers rows and columns starting at 1. Consider the following code segment.",
    code: `String garden = "cctcttctbccbttc";
int first = -1;
for (int i = 0; i < garden.length(); i++)
{
    if (first == -1 && garden.substring(i, i + 1).equals("b"))
    {
        first = i;
    }
}
System.out.println((first / 5 + 1) + " " + (first % 5 + 1));`,
    question: "What is printed?",
    choices: ["2 4", "4 2", "3 2", "1 3"], mono: true,
    why: [
      "`first == -1` is true only until a b is found, so `first` keeps the index of the FIRST b. `first / 5` is the number of whole rows before it, `first % 5` is how far into its row it is, and the code adds 1 to each.",
      "This swaps the row and the column. The row comes from `first / 5`; `%` gives the column.",
      "This is the LAST b. Once `first` is no longer -1, the test `first == -1` is false, so a later b does not replace it.",
      "These are the row and the column counted from 0, the way String indexes count. The code adds 1 to each.",
    ],
    answer: 0,
    verify: { out: "2 4" } },

  { id: "q5pa-06", skill: "string", type: "mcq", topic: "2.10",
    stem: "Consider the following code segment.",
    code: `String word = "croissant";
String out = "";
for (int i = 0; i < word.length(); i += 3)
{
    out += word.substring(i, i + 1);
}
System.out.println(out);`,
    question: "What is printed, and how many times does the body of the loop run?",
    choices: [
      "cia, and the body runs 3 times",
      "ost, and the body runs 3 times",
      "cst, and the body runs 3 times",
      "cia, and the body runs 4 times",
    ],
    why: [
      "i starts at 0 and goes up by 3, so it visits indexes 0, 3, and 6, the 1st, 4th, and 7th letters. Then i is 9, and `9 < 9` is false.",
      "This starts with the 3rd letter. The loop starts i at 0, the first letter.",
      "This skips three letters each time. `i += 3` moves to the third letter after, so only two letters are skipped.",
      "The check with i equal to 9 is false, and a check that fails is not a pass of the body.",
    ],
    answer: 0,
    verify: { out: "cia" } },
];

// ---------- Quiz 5 Practice B ----------

const PB02 = `String word = "rotor";
boolean same = true;
for (int i = 0; i < word.length() / 2; i++)
{
    String front = word.substring(i, i + 1);
    String back = /* missing code */;
    if (!front.equals(back))
    {
        same = false;
    }
}
System.out.println(same);`;
const PB02_KEY = "word.substring(word.length() - 1 - i, word.length() - i)";
const PB02_B = "word.substring(word.length() - i, word.length() - i + 1)";
const PB02_C = "word.substring(word.length() - 1 - i)";
const PB02_D = "word.substring(i + 1, i + 2)";

const q5b = [
  { id: "q5pb-01", skill: "string", type: "mcq", topic: "2.10",
    stem: "Consider the following code segment.",
    code: `String word = "pedal";
String result = "";
for (int i = 0; i < word.length(); i++)
{
    String ch = word.substring(i, i + 1);
    if (i % 2 == 0)
    {
        result = ch + result;
    }
    else
    {
        result = result + ch;
    }
}
System.out.println(result);`,
    question: "What is printed, and how many times does the body of the loop run?",
    choices: [
      "ldpea, and the body runs 5 times",
      "ladep, and the body runs 5 times",
      "aepdl, and the body runs 5 times",
      "dpea, and the body runs 4 times",
    ],
    why: [
      "A letter at an even index goes in FRONT of what is already there, and a letter at an odd index goes at the end. The loop visits every index from 0 to `word.length() - 1`.",
      "This puts every letter in front, which reverses the word. The letters at odd indexes go at the end: `result + ch`.",
      "This has the two branches the wrong way around. `i % 2 == 0` is true for 0, 2, and 4, and those letters go in front.",
      "This stops one letter early. The last index of a String of length 5 is 4, and `i < word.length()` lets the loop reach it.",
    ],
    answer: 0,
    verify: { out: "ldpea" } },

  { id: "q5pb-02", skill: "string", type: "mcq", topic: "2.10",
    stem: "The following code segment is intended to print `true` when `word` reads the same forward and backward, and `false` otherwise. For `\"rotor\"` it should print `true`.",
    code: PB02,
    question: "Which of the following can replace `/* missing code */` so that the code segment works as intended?",
    choices: [PB02_KEY, PB02_B, PB02_C, PB02_D], mono: true,
    why: [
      "The letter that pairs with index i is i places from the end, at `word.length() - 1 - i`. Ending at `word.length() - i` takes exactly that one letter.",
      "On the first pass this asks for `substring(word.length(), word.length() + 1)`, which is past the end, and a StringIndexOutOfBoundsException is thrown. The last index is `word.length() - 1`.",
      "With one argument, `substring` takes everything from that index to the end. After the first pass `back` has more than one letter, so it never equals `front`.",
      "This compares each letter with the one right after it, not with its partner at the other end of the word.",
    ],
    answer: 0,
    verify: { cases: [
      { run: fill(PB02, "/* missing code */", PB02_KEY), out: "true" },
      { run: fill(PB02, "/* missing code */", PB02_KEY).replace("\"rotor\"", "\"rotors\""), out: "false" },
      { run: fill(PB02, "/* missing code */", PB02_B), throws: "StringIndexOutOfBoundsException" },
      { run: fill(PB02, "/* missing code */", PB02_C), out: "false" },
      { run: fill(PB02, "/* missing code */", PB02_D), out: "false" },
    ] } },

  { id: "q5pb-03", skill: "string", type: "mcq", topic: "2.10",
    stem: "Consider the following code segment.",
    code: `String plant = "red rose";
int n = 0;
for (int i = 0; i < plant.length(); i++)
{
    String ch = plant.substring(i, i + 1);
    if ("aeiou".indexOf(ch) == -1)
    {
        n++;
    }
}
System.out.println(n);`,
    question: "What is printed?",
    choices: ["5", "3", "4", "8"], mono: true,
    why: [
      "`indexOf` returns -1 when `ch` is not in `\"aeiou\"`, so n counts every character that is not a vowel, and the space is one of them.",
      "This counts the vowels. `== -1` is true when `ch` is NOT found.",
      "This leaves out the space. A space is not in `\"aeiou\"`, so `indexOf` returns -1 for it and it is counted.",
      "The loop runs once for every character, but n goes up only when the `if` is true.",
    ],
    answer: 0,
    verify: { out: "5" } },

  { id: "q5pb-04", skill: "string", type: "mcq", topic: "2.10",
    stem: "In a sports league, a season is stored as a String with one letter for each game: W for a win, L for a loss, and T for a tie. Consider the following code segment.",
    code: `String season = "WLWWLT";
int notLost = 0;
for (int i = 0; i < season.length(); i++)
{
    String game = season.substring(i, i + 1);
    if (game != "L")
    {
        notLost++;
    }
}
System.out.println(notLost);`,
    question: "What is printed as a result of executing the code segment?",
    choices: [
      "6",
      "4",
      "0",
      "Nothing is printed. The code segment does not compile.",
    ],
    why: [
      "`substring` makes a new String object each time, and `!=` asks whether two references point to different objects. They always do here, so every game is counted. `!game.equals(\"L\")` would compare the letters.",
      "That is what `!game.equals(\"L\")` would print. `!=` on two Strings compares references, not letters.",
      "`!=` is true when the two references are different, and a new String from `substring` is never the same object as the literal `\"L\"`.",
      "Comparing two Strings with `!=` compiles. It compares references, not letters, which is why it is a trap.",
    ],
    answer: 0,
    verify: { out: "6" } },

  { id: "q5pb-05", skill: "string", type: "mcq", topic: "2.10",
    stem: "A bike rack with 3 rows of 4 slots is stored as one String, row after row: `\"BB.B\"`, then `\".B..\"`, then `\"BBB.\"`. B is a bike and . is an empty slot. Rows and columns are numbered starting at 0. Consider the following code segment.",
    code: `String rack = "BB.B.B..BBB.";
int n = 0;
for (int i = 0; i < rack.length(); i++)
{
    if (i % 4 == 1 && rack.substring(i, i + 1).equals("B"))
    {
        n++;
    }
}
System.out.println(n);`,
    question: "What is printed?",
    choices: ["3", "1", "2", "7"], mono: true,
    why: [
      "`i % 4` is how far into its row index i is, so `i % 4 == 1` picks column 1 of every row. The code counts the bikes in that column.",
      "This counts row 1. The row is `i / 4`; `%` gives the column.",
      "This counts column 0. Columns are numbered from 0, the way String indexes are, so `i % 4 == 1` is the second column.",
      "This counts every bike. `&&` needs both parts to be true, so only the slots in column 1 count.",
    ],
    answer: 0,
    verify: { out: "3" } },

  { id: "q5pb-06", skill: "string", type: "mcq", topic: "2.10",
    stem: "Consider the following code segment.",
    code: `String team = "falcons";
String out = "";
int i = team.length() - 1;
while (i >= 0)
{
    out += team.substring(i, i + 1);
    i -= 2;
}
System.out.println(out);`,
    question: "What is printed, and how many times does the body of the loop run?",
    choices: [
      "solf, and the body runs 4 times",
      "flos, and the body runs 4 times",
      "sol, and the body runs 3 times",
      "Nothing is printed. A StringIndexOutOfBoundsException is thrown.",
    ],
    why: [
      "i starts at the last index, 6, and goes down by 2, so it visits 6, 4, 2, and 0. Each letter is added at the end of `out`, so they come out in that order.",
      "This reads the visited letters from the front. i starts at the end and counts down, so the last letter is added first.",
      "This stops before index 0. The test is `i >= 0`, and `0 >= 0` is true, so the f is added.",
      "i starts at `team.length() - 1`, the last index, and the loop ends as soon as i drops below 0, so `substring(i, i + 1)` never runs past either end.",
    ],
    answer: 0,
    verify: { out: "solf" } },
];

// ---------- Unit 2 Test Practice 1 ----------

const deMorgan04 = (alt) => `int bad = 0;
for (int k = 0; k < 2; k++)
{
    boolean isOpen = k == 1;
    for (int stock = -3; stock <= 3; stock++)
    {
        if (!(isOpen && stock > 0) != (${alt}))
        {
            bad++;
        }
    }
}
System.out.println(bad);`;

const peak06 = (alt) => `int bad = 0;
for (int hour = -2; hour <= 26; hour++)
{
    if (!(hour < 7 || hour > 18) != (${alt}))
    {
        bad++;
    }
}
System.out.println(bad);`;

const U10 = `int warmest = /* missing code */;
for (int day = 1; day <= 4; day++)
{
    int temp = day * 3 - 14;
    if (temp > warmest)
    {
        warmest = temp;
    }
}
System.out.println(warmest);`;

const FRQ = `int points = 0;
int run = 0;
int longest = 0;
int bounces = 0;
for (int i = 0; i < season.length(); i++)
{
    String g = season.substring(i, i + 1);
    if (g.equals("W"))
    {
        points += 3;
    }
    else if (g.equals("T"))
    {
        points++;
    }
    if (g.equals("L"))
    {
        run = 0;
    }
    else
    {
        run++;
        if (run > longest)
        {
            longest = run;
        }
    }
    if (i < season.length() - 1 && season.substring(i, i + 2).equals("LW"))
    {
        bounces++;
    }
}
System.out.println("Points: " + points);
System.out.println("Longest unbeaten run: " + longest);
System.out.println("Bounce backs: " + bounces);`;
const frqCase = (season, out) => ({ run: `String season = "${season}";\n${FRQ}`, out });

const u2p1 = [
  { id: "u2p1-01", skill: "if", type: "mcq", topic: "2.3",
    stem: "A bike shop sets its shipping cost by weight. Consider the following code segment.",
    code: `int weight = 12;
int cost = 5;
if (weight > 20)
{
    cost = 20;
}
if (weight > 10)
{
    cost = 12;
}
if (weight > 5)
{
    cost = 8;
}
System.out.println(cost);`,
    question: "What is printed?",
    choices: ["8", "12", "20", "5"], mono: true,
    why: [
      "These are three separate `if` statements, not an `else if` chain, so every test is checked. `weight > 10` and `weight > 5` are both true, and the last one to run sets `cost` to 8.",
      "That is what an `else if` chain would print. With separate `if` statements, a later true test runs too and replaces the value.",
      "`weight > 20` is false for 12, so that assignment never runs.",
      "`cost` keeps 5 only when every test is false, and two of them are true.",
    ],
    answer: 0,
    verify: { out: "8" } },

  { id: "u2p1-02", skill: "if", type: "mcq", topic: "2.3",
    stem: "In the following code segment, `count` is the number of muffins in a bakery order, an int from 1 to 15.",
    code: `String box;
if (count >= 12)
{
    box = "tray";
}
else if (count % 6 == 0)
{
    box = "half";
}
else if (count > 4)
{
    box = "large";
}
else
{
    box = "small";
}`,
    question: "For which values of `count` is `box` set to `\"large\"`?",
    choices: [
      "5 and 7 to 11",
      "5 to 11",
      "4, 5, and 7 to 11",
      "5, 7 to 11, and 13 to 15",
    ],
    why: [
      "A value reaches the `\"large\"` test only if every test above it was false: less than 12 and not a multiple of 6. Then `count > 4` must be true.",
      "This forgets that 6 is a multiple of 6. The `\"half\"` branch catches it first, and the chain never reaches the `\"large\"` test.",
      "The test is `count > 4`, so 4 is not included. 4 goes to the `else`.",
      "Values of 12 or more are caught by the first test, `count >= 12`, and the rest of the chain is skipped.",
    ],
    answer: 0,
    verify: { cases: [
      { run: `for (int count = 1; count <= 15; count++)
{
    String box;
    if (count >= 12)
    {
        box = "tray";
    }
    else if (count % 6 == 0)
    {
        box = "half";
    }
    else if (count > 4)
    {
        box = "large";
    }
    else
    {
        box = "small";
    }
    if (box.equals("large"))
    {
        System.out.print(count + " ");
    }
}`, out: "5 7 8 9 10 11 " },
    ] } },

  { id: "u2p1-03", skill: "bool", type: "mcq", topic: "2.5",
    stem: "Consider the following code segment.",
    code: `int games = 0;
int goals = 9;
if (games == 0 || goals / games < 2)
{
    System.out.println("rebuilding");
}
else
{
    System.out.println("contender");
}`,
    question: "What is the result of executing the code segment?",
    choices: [
      "rebuilding",
      "Nothing is printed. An ArithmeticException is thrown.",
      "contender",
      "Nothing is printed. The code segment does not compile.",
    ],
    why: [
      "`games == 0` is true, so `||` already knows the whole condition is true and never evaluates the division. The first branch runs.",
      "The division would divide by 0, but `||` stops as soon as its left side is true. The zero check guards the division because it comes first.",
      "When the left side of `||` is true, the whole condition is true, so the `else` does not run.",
      "Both sides of `||` are valid boolean expressions, so the code compiles.",
    ],
    answer: 0,
    verify: { cases: [
      { run: `int games = 0;
int goals = 9;
if (games == 0 || goals / games < 2)
{
    System.out.println("rebuilding");
}
else
{
    System.out.println("contender");
}`, out: "rebuilding" },
      { run: `int games = 0;
int goals = 9;
if (goals / games < 2 || games == 0)
{
    System.out.println("rebuilding");
}`, throws: "ArithmeticException" },
    ] } },

  { id: "u2p1-04", skill: "bool", type: "mcq", topic: "2.6",
    stem: "Consider the following expression, where `isOpen` is a boolean variable and `stock` is an int variable.",
    code: "!(isOpen && stock > 0)",
    question: "Which of the following is equivalent to the expression for all values of `isOpen` and `stock`?",
    choices: [
      "!isOpen || stock <= 0",
      "!isOpen && stock <= 0",
      "!isOpen || stock < 0",
      "isOpen || stock <= 0",
    ], mono: true,
    why: [
      "The opposite of `p && q` is `!p || !q`. The opposite of `isOpen` is `!isOpen`, and the opposite of `>` is `<=`.",
      "The `&&` has to become `||` as well.",
      "The opposite of `>` is `<=`, not `<`. Try `stock` equal to 0.",
      "The `!` reaches both parts: `isOpen` becomes `!isOpen`.",
    ],
    answer: 0,
    verify: { cases: [
      { run: deMorgan04("!isOpen || stock <= 0"), out: "0" },
      { run: deMorgan04("!isOpen && stock <= 0"), out: "7" },
      { run: deMorgan04("!isOpen || stock < 0"), out: "1" },
      { run: deMorgan04("isOpen || stock <= 0"), out: "6" },
    ] } },

  { id: "u2p1-05", skill: "bool", type: "mcq", topic: "2.5",
    stem: "Consider the following code segment.",
    code: `int n = 0;
for (int x = 1; x <= 10; x++)
{
    if (x > 6 || x % 3 == 0 && x < 5)
    {
        n++;
    }
}
System.out.println(n);`,
    question: "What is printed?",
    choices: ["5", "1", "9", "4"], mono: true,
    why: [
      "`&&` is done before `||`: the condition is true for every value above 6, and also for 3, the only multiple of 3 below 5.",
      "This groups the `||` first, which keeps only values below 5. Without parentheses, `&&` binds tighter.",
      "This reads `&&` as `||`. Both `x % 3 == 0` and `x < 5` must be true for the second part.",
      "This counts only the values above 6. 3 makes the `&&` part true, so it counts too.",
    ],
    answer: 0,
    verify: { out: "5" } },

  { id: "u2p1-06", skill: "bool", type: "mcq", topic: "2.6",
    stem: "A train runs on the off-peak schedule when `hour < 7 || hour > 18` is true, where `hour` is an int.",
    question: "Which of the following is true exactly when the train is NOT on the off-peak schedule, for every integer value of `hour`?",
    choices: [
      "hour >= 7 && hour <= 18",
      "hour > 7 && hour < 18",
      "hour >= 7 || hour <= 18",
      "hour < 7 && hour > 18",
    ], mono: true,
    why: [
      "De Morgan turns `||` into `&&` and flips both comparisons: the opposite of `<` is `>=`, and the opposite of `>` is `<=`.",
      "7 and 18 are not off-peak hours. The opposite of `<` is `>=`, not `>`.",
      "Every number is at least 7 or at most 18, so this is always true. The `||` has to become `&&`.",
      "No number is both below 7 and above 18, so this is never true.",
    ],
    answer: 0,
    verify: { cases: [
      { run: peak06("hour >= 7 && hour <= 18"), out: "0" },
      { run: peak06("hour > 7 && hour < 18"), out: "2" },
      { run: peak06("hour >= 7 || hour <= 18"), out: "17" },
      { run: peak06("hour < 7 && hour > 18"), out: "12" },
    ] } },

  { id: "u2p1-07", skill: "for", type: "mcq", topic: "2.8",
    stem: "Consider the following code segment.",
    code: `int sum = 0;
for (int i = 30; i > 0; i -= 4)
{
    if (i % 3 == 0)
    {
        sum += i;
    }
}
System.out.println(sum);`,
    question: "What is printed, and how many times does the body of the loop run?",
    choices: [
      "54, and the body runs 8 times",
      "54, and the body runs 7 times",
      "74, and the body runs 8 times",
      "54, and the body runs 3 times",
    ],
    why: [
      "i starts at 30 and goes down by 4 while it is above 0, and the body runs for every one of those values. Only the multiples of 3 are added.",
      "This stops before i is 2. `2 > 0` is true, so there is a pass with i equal to 2.",
      "This adds the values that are NOT multiples of 3. `i % 3 == 0` is true for the multiples.",
      "The sum is right, but the body runs on every pass, not only when the `if` is true.",
    ],
    answer: 0,
    verify: { cases: [
      { run: `int sum = 0;
int passes = 0;
for (int i = 30; i > 0; i -= 4)
{
    passes++;
    if (i % 3 == 0)
    {
        sum += i;
    }
}
System.out.println(sum + " " + passes);`, out: "54 8" },
    ] } },

  { id: "u2p1-08", skill: "while", type: "mcq", topic: "2.7",
    stem: "A baker doubles a sourdough starter each day while flour runs down. Consider the following code segment.",
    code: `int starter = 1;
int flour = 40;
while (starter * 2 < flour)
{
    starter *= 2;
    flour -= 5;
}
System.out.println(starter + " " + flour);`,
    question: "What is printed, and how many times does the body of the loop run?",
    choices: [
      "16 20, and the body runs 4 times",
      "16 20, and the body runs 5 times",
      "32 15, and the body runs 5 times",
      "32 40, and the body runs 5 times",
    ],
    why: [
      "The test is checked before each pass with the current values. After four passes `starter` is 16 and `flour` is 20, and `32 < 20` is false, so the loop stops.",
      "The output is right. The last check, `32 < 20`, is false, and a check that fails is not a pass of the body.",
      "This tests `starter < flour` instead. The test doubles `starter` first: after 16 20, `16 * 2 < 20` is false.",
      "This forgets that `flour` goes down too. Both change on every pass.",
    ],
    answer: 0,
    verify: { cases: [
      { run: `int starter = 1;
int flour = 40;
int passes = 0;
while (starter * 2 < flour)
{
    starter *= 2;
    flour -= 5;
    passes++;
}
System.out.println(starter + " " + flour + " " + passes);`, out: "16 20 4" },
    ] } },

  { id: "u2p1-09", skill: "algo", type: "mcq", topic: "2.9",
    stem: "A rain barrel waters a garden. Consider the following code segment.",
    code: `int barrel = 7;
int waterings = 0;
for (int day = 1; day <= 8; day++)
{
    if (day % 3 == 0)
    {
        barrel += 4;
    }
    if (barrel >= 3)
    {
        barrel -= 3;
        waterings++;
    }
}
System.out.println(waterings + " " + barrel);`,
    question: "What is printed?",
    choices: ["5 0", "4 3", "6 1", "2 1"], mono: true,
    why: [
      "Trace it day by day: on every multiple of 3, rain adds 4 before the watering is decided, and a watering uses 3 whenever there are at least 3.",
      "This refuses a watering with exactly 3 in the barrel. The test is `>= 3`.",
      "That is the result if rain came on days 1, 4, and 7. `day % 3 == 0` is true on multiples of 3.",
      "This leaves out the rain. On days 3 and 6, the barrel goes up by 4.",
    ],
    answer: 0,
    verify: { out: "5 0" } },

  { id: "u2p1-10", skill: "algo", type: "mcq", topic: "2.9",
    stem: "The following code segment is intended to print the warmest of four daily low temperatures. A temperature can be any int value, including a negative one.",
    code: U10,
    question: "Which of the following can replace `/* missing code */` so that the code segment works as intended?",
    choices: ["Integer.MIN_VALUE", "0", "Integer.MAX_VALUE", "-1"], mono: true,
    why: [
      "`warmest` has to start at or below every possible temperature, so the first one replaces it. No int is less than `Integer.MIN_VALUE`.",
      "Every temperature here is below 0, so none is greater than 0 and `warmest` stays 0. A running maximum cannot start at a guess.",
      "No int is greater than `Integer.MAX_VALUE`, so `warmest` is never replaced. That start works for a running minimum.",
      "-1 is still a guess. Every temperature here is below -1, so `warmest` stays -1.",
    ],
    answer: 0,
    verify: { cases: [
      { run: fill(U10, "/* missing code */", "Integer.MIN_VALUE"), out: "-2" },
      { run: fill(U10, "/* missing code */", "0"), out: "0" },
      { run: fill(U10, "/* missing code */", "Integer.MAX_VALUE"), out: "2147483647" },
      { run: fill(U10, "/* missing code */", "-1"), out: "-1" },
    ] } },

  { id: "u2p1-11", skill: "for", type: "mcq", topic: "2.8",
    stem: "Consider the following code segment.",
    code: `for (int k = 20; k >= 3; k -= 3)
{
    System.out.print("#");
}`,
    question: "How many times is # printed?",
    choices: ["6", "7", "5", "18"], mono: true,
    why: [
      "k starts at 20, goes down by 3, and the last value allowed is 3 or more. Count the values in that list.",
      "This lets k reach 2. `2 >= 3` is false, so the loop stops before it.",
      "This leaves out the first pass. The test is checked with k equal to 20, and it is true.",
      "This counts every value from 3 to 20. k goes down by 3.",
    ],
    answer: 0,
    verify: { out: "######" } },

  { id: "u2p1-12", skill: "string", type: "mcq", topic: "2.10",
    stem: "In a sports league, a season is stored as a String with one letter for each game: W for a win and L for a loss. Consider the following code segment.",
    code: `String s = "WLWLWWLW";
int n = 0;
for (int i = 0; i < s.length() - 2; i++)
{
    if (s.substring(i, i + 3).equals("WLW"))
    {
        n++;
    }
}
System.out.println(n);`,
    question: "What is printed?",
    choices: [
      "3",
      "Nothing is printed. A StringIndexOutOfBoundsException is thrown.",
      "2",
      "5",
    ],
    why: [
      "Each pass looks at the three letters starting at i, and i goes up by 1, so groups that share a letter both count. The loop stops at `s.length() - 3`, the start of the last group of three.",
      "That is what happens with `i < s.length() - 1`: on the last pass `substring(i, i + 3)` runs past the end. This loop stops sooner.",
      "This misses the copy that starts at `s.length() - 3`. `i < s.length() - 2` lets i reach that index.",
      "That is the number of W letters. The `if` counts a group only when its three letters are W, L, and W.",
    ],
    answer: 0,
    verify: { out: "3" } },

  { id: "u2p1-13", skill: "string", type: "mcq", topic: "2.10",
    stem: "Consider the following code segment.",
    code: `String word = "bread";
String t = "";
for (int i = 0; i < word.length(); i++)
{
    t += word.substring(i, i + 1);
    if (i < word.length() - 1)
    {
        t += ".";
    }
}
System.out.println(t);`,
    question: "What is printed?",
    choices: ["b.r.e.a.d", "b.r.e.a.d.", "b.r.e.a.", "bread"], mono: true,
    why: [
      "Each pass adds one letter, then a dot unless i is the last index, `word.length() - 1`. So the dots go only between letters.",
      "This adds a dot after every letter. The `if` skips the dot on the last pass.",
      "The letter is added on every pass, before the test. Only the dot is skipped on the last pass.",
      "The dot is added inside the loop, after every letter except the last.",
    ],
    answer: 0,
    verify: { out: "b.r.e.a.d" } },

  { id: "u2p1-14", skill: "string", type: "mcq", topic: "2.10",
    stem: "A train ticket number is stored as a String. Consider the following code segment.",
    code: `String ticket = "000702";
int n = 0;
while (ticket.length() > 1 && ticket.substring(0, 1).equals("0"))
{
    ticket = ticket.substring(1);
    n++;
}
System.out.println(n + " " + ticket);`,
    question: "What is printed?",
    choices: ["3 702", "4 72", "4 702", "3 000702"], mono: true,
    why: [
      "Each pass cuts off the first character while it is a 0. Once the first character is 7, the test is false and the loop ends.",
      "This removes every 0. The loop ends at the first test that is false, so the 0 after the 7 stays.",
      "n goes up only inside the body, and the check that fails does not run the body.",
      "`ticket` is reassigned on every pass, so the String printed is what is left after the last cut.",
    ],
    answer: 0,
    verify: { out: "3 702" } },

  { id: "u2p1-15", skill: "string", type: "mcq", topic: "2.10",
    stem: "A league stores its three-letter team codes as one String. Consider the following code segment.",
    code: `String codes = "BOSLAXATLCHI";
String best = codes.substring(0, 3);
for (int i = 3; i < codes.length(); i += 3)
{
    String code = codes.substring(i, i + 3);
    if (code.compareTo(best) > 0)
    {
        best = code;
    }
}
System.out.println(best);`,
    question: "What is printed?",
    choices: ["LAX", "ATL", "CHI", "BOS"], mono: true,
    why: [
      "`code.compareTo(best) > 0` means `code` comes after `best` in the alphabet, so `best` ends as the code latest in the alphabet.",
      "This keeps the code earliest in the alphabet. A positive result means `code` comes after `best`.",
      "That is the last code in the String. `best` changes only when a code comes later in the alphabet than `best`.",
      "`best` starts as the first code, but the loop replaces it whenever it finds a code that comes after it.",
    ],
    answer: 0,
    verify: { out: "LAX" } },

  { id: "u2p1-16", skill: "nested", type: "mcq", topic: "2.11",
    stem: "Consider the following code segment.",
    code: `int n = 0;
for (int i = 1; i <= 4; i++)
{
    for (int j = 1; j <= 4; j++)
    {
        if (i < j)
        {
            n++;
        }
    }
}
System.out.println(n);`,
    question: "What is printed?",
    choices: ["6", "16", "10", "4"], mono: true,
    why: [
      "The inner loop runs 4 times for each i, but n goes up only when j is greater than i: 3 times when i is 1, then 2, 1, and 0. Add them up.",
      "That is 4 times 4, every pair. The `if` counts only the pairs where i is less than j.",
      "This also counts the pairs where i equals j. The test is `<`.",
      "The inner loop runs to the end on every pass of the outer loop, so n can go up more than once for each i.",
    ],
    answer: 0,
    verify: { out: "6" } },

  { id: "u2p1-17", skill: "nested", type: "mcq", topic: "2.11",
    stem: "Consider the following code segment.",
    code: `for (int r = 3; r >= 1; r--)
{
    for (int c = 1; c <= 4; c++)
    {
        if (c <= r)
        {
            System.out.print("#");
        }
        else
        {
            System.out.print(".");
        }
    }
    System.out.println();
}`,
    question: "What is printed?",
    choices: [
      "###.\n##..\n#...",
      "#...\n##..\n###.",
      "###\n##\n#",
      "###.##..#...",
    ], mono: true,
    why: [
      "Every line has 4 characters: a # for each column up to r, then a dot. r starts at 3 and counts down, so each line has one # fewer than the line before.",
      "This has r counting up. The outer loop starts r at 3, so the first line has three # characters.",
      "The `else` prints a dot for each column past r, so every line has 4 characters.",
      "This never ends a line. `println()` after the inner loop starts a new line for each row.",
    ],
    answer: 0,
    verify: { out: "###.\n##..\n#..." } },

  { id: "u2p1-18", skill: "nested", type: "mcq", topic: "2.11",
    stem: "A garden bed with 3 rows of 4 plants is stored as one String, row after row: `\"tcbt\"`, then `\"cctb\"`, then `\"btcc\"`. Consider the following code segment.",
    code: `String bed = "tcbtcctbbtcc";
for (int c = 0; c < 4; c++)
{
    String line = "";
    for (int r = 0; r < 3; r++)
    {
        int at = r * 4 + c;
        line += bed.substring(at, at + 1);
    }
    System.out.println(line);
}`,
    question: "What is printed?",
    choices: [
      "tcb\ncct\nbtc\ntbc",
      "tcbt\ncctb\nbtcc",
      "tcb\ncbt\nbtc\ntcc",
      "tcbcctbtctbc",
    ], mono: true,
    why: [
      "`r * 4 + c` is the index of row r, column c. The outer loop picks a column and the inner loop reads down it, one row at a time, so each printed line is one column.",
      "This prints the rows. The outer loop is over the columns, so each line goes down one column.",
      "`r + c` is not the index of a plant. Each row starts 4 characters after the one before: `r * 4 + c`.",
      "This never ends a line. `println` after the inner loop ends each column's line.",
    ],
    answer: 0,
    verify: { out: "tcb\ncct\nbtc\ntbc" } },

  { id: "u2p1-19", skill: "runtime", type: "mcq", topic: "2.12",
    stem: "Consider the following code segment.",
    code: `int ops = 0;
for (int i = 0; i < 10; i += 2)
{
    for (int j = i; j < 10; j++)
    {
        ops++;
    }
}`,
    question: "How many times is the statement `ops++;` executed?",
    choices: ["30", "50", "100", "5"], mono: true,
    why: [
      "i takes the values 0, 2, 4, 6, and 8, and for each one the inner loop runs `10 - i` times, because j starts at i. Add them.",
      "That is 5 times 10. j starts at i, so each inner loop is 2 shorter than the one before.",
      "That is 10 times 10. i goes up by 2, so the outer loop runs 5 times, and j starts at i.",
      "That counts the outer loop only. `ops++;` is inside the inner loop.",
    ],
    answer: 0,
    verify: { cases: [
      { run: `int ops = 0;
for (int i = 0; i < 10; i += 2)
{
    for (int j = i; j < 10; j++)
    {
        ops++;
    }
}
System.out.println(ops);`, out: "30" },
    ] } },

  { id: "u2p1-20", skill: "runtime", type: "mcq", topic: "2.12",
    stem: "Consider the following code segment.",
    code: `int n = 1000;
while (n > 1)
{
    n /= 2;
}`,
    question: "How many times does the body of the loop run?",
    choices: ["9", "10", "500", "999"], mono: true,
    why: [
      "n is cut in half each pass, with integer division: 1000, 500, 250, and so on. Count the passes until n is no longer greater than 1. Halving reaches 1 in very few steps.",
      "This also runs when n equals 1. The test is `n > 1`.",
      "That is the value of n after the first pass, not a count of passes.",
      "That is how many passes subtracting 1 would take. Dividing by 2 gets there much faster.",
    ],
    answer: 0,
    verify: { cases: [
      { run: `int n = 1000;
int passes = 0;
while (n > 1)
{
    n /= 2;
    passes++;
}
System.out.println(passes);`, out: "9" },
    ] } },

  { id: "u2p1-frq", skill: "frq", type: "code", topic: "2.10", title: "Season results",
    prompt: "In a youth soccer league, a season is a `String` with one letter for each game, in order: `\"W\"` is a win, `\"T\"` is a tie, and `\"L\"` is a loss. The variable `season` has already been declared and holds at least one letter.\n\nWrite a code segment that prints three lines:\n\n1. `Points: ` followed by the number of points the team earned: 3 for each win, 1 for each tie, and 0 for each loss\n2. `Longest unbeaten run: ` followed by the length of the longest run of games in a row with no loss (0 if every game is a loss)\n3. `Bounce backs: ` followed by the number of times a loss is followed directly by a win in the next game\n\nWrite the code segment as it would appear inside `main`. Do not write any methods, and do not use arrays. Use only `String` methods from the Java Quick Reference: `length`, `substring`, `indexOf`, `equals`, and `compareTo`.",
    sample: "If `season` is `\"WTLWWTLLWL\"`, the code segment prints\n\nPoints: 14\nLongest unbeaten run: 3\nBounce backs: 2",
    rows: [
      { name: "Traverses the season", earns: "Visits every letter of `season` with a loop, without going past the end (for example `i < season.length()` with `substring(i, i + 1)`)." },
      { name: "Compares Strings correctly", earns: "Compares one-letter Strings with `equals`, never with `==` or `!=`." },
      { name: "Computes the points", earns: "Adds 3 for each `\"W\"` and 1 for each `\"T\"`, and nothing for an `\"L\"`." },
      { name: "Tracks the current unbeaten run", earns: "Adds 1 to a run counter on each `\"W\"` or `\"T\"` and sets it back to 0 on each `\"L\"`." },
      { name: "Keeps the longest unbeaten run", earns: "Keeps the longest run seen, including a run that lasts to the end of the season (updated inside the loop, not only when a loss ends a run)." },
      { name: "Counts the bounce backs", earns: "Counts every place where an `\"L\"` is followed directly by a `\"W\"`, without going past the end of the String (for example `i < season.length() - 1` with `substring(i, i + 2)`, or remembering the previous letter)." },
      { name: "Prints the three results", earns: "Prints the three labeled lines once, after the loop, using the values the code computed." },
    ],
    notes: "One point for each row. Award a row for what the code actually does; ignore small typing slips that do not change the logic. A row is not earned by code that would throw an exception for some season, such as `substring(i, i + 2)` with i at the last index. Separate loops for the three results are fine. Using `charAt` or `char` does not earn the Compares Strings correctly row.",
    solution: FRQ,
    verify: { cases: [
      frqCase("WTLWWTLLWL", "Points: 14\nLongest unbeaten run: 3\nBounce backs: 2"),
      frqCase("LLLL", "Points: 0\nLongest unbeaten run: 0\nBounce backs: 0"),
      frqCase("W", "Points: 3\nLongest unbeaten run: 1\nBounce backs: 0"),
      frqCase("L", "Points: 0\nLongest unbeaten run: 0\nBounce backs: 0"),
      frqCase("LWLWTT", "Points: 8\nLongest unbeaten run: 3\nBounce backs: 2"),
      frqCase("TTWLW", "Points: 8\nLongest unbeaten run: 3\nBounce backs: 1"),
    ] } },
];

export default {
  forms: [
    { id: "q5a", name: "Quiz 5 Practice A", items: q5a },
    { id: "q5b", name: "Quiz 5 Practice B", items: q5b },
    { id: "u2p1", name: "Unit 2 Test Practice 1", items: u2p1 },
  ],
};

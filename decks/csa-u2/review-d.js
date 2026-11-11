// Unit 2 review, part D: harder items for 2.7 to 2.12 (for loops, String algorithms, run-time counting), modeled on
// what Albert makes Difficult there, and two free responses in the AP exam's Question 1 shape (parts a and b, 7 rows).
// In every mcq the key is written first (answer: 0); the site shuffles.

const OUT = "What is printed? Type it exactly, one line per line.";
const QR = "Use only `String` methods from the Java Quick Reference: `length`, `substring`, `indexOf`, `equals`, and `compareTo`.";
const NOTE = "One point for each row. Award a row for what the code actually does; ignore small typing slips that do not change the logic.";
const fill = (code, hole, piece) => code.replace(hole, piece);

// ---------- d-02: the same values from a counter ----------
const D02 = `for (int x = 3; x < 30; x += 4)
{
    System.out.print(x + " ");
}`;
const D02_A = `for (int i = 0; i < 7; i++)
{
    System.out.print(4 * i + 3 + " ");
}`;
const D02_B = `for (int i = 0; i <= 7; i++)
{
    System.out.print(4 * i + 3 + " ");
}`;
const D02_C = `for (int i = 1; i <= 7; i++)
{
    System.out.print(4 * i + 3 + " ");
}`;
const D02_D = `for (int i = 0; i < 7; i++)
{
    System.out.print(4 * (i + 3) + " ");
}`;
const bar = (s) => s + `\nSystem.out.println("|");`;

// ---------- d-03: letters in order ----------
const D03 = (hidden, cond) => `String text = "the wizard nods";
String hidden = "${hidden}";
int pos = 0;
for (int i = 0; ${cond}; i++)
{
    if (text.substring(i, i + 1).equals(hidden.substring(pos, pos + 1)))
    {
        pos++;
    }
}
System.out.println(pos == hidden.length());`;
const D03_A = "i < text.length() && pos < hidden.length()";
const D03_B = "i < text.length() || pos < hidden.length()";
const D03_C = "i < text.length() && pos < text.length()";
const D03_D = "i < text.length() && pos <= hidden.length()";

// ---------- d-04: the first o, found from the back ----------
const D04 = `String s = "goblin horde";
int pos = -1;
for (int i = s.length() - 1; i >= 0; i--)
{
    if (s.substring(i, i + 1).equals("o"))
    {
        /* missing code */
    }
}
System.out.println(pos);`;
const D04_A = "pos = i;";
const D04_B = "if (pos == -1)\n{\n    pos = i;\n}";
const D04_C = "pos = s.length() - 1 - i;";
const D04_D = "pos = i + 1;";
const d04 = (piece) => fill(D04, "/* missing code */", piece.split("\n").join("\n        "));

// ---------- d-06: an early return ----------
const D06 = `public static int firstDouble(String s)
{
    for (int i = 1; i < s.length(); i++)
    {
        if (s.substring(i, i + 1).equals(s.substring(i - 1, i)))
        {
            return i;
        }
    }
    return -1;
}`;
// The same method, counting how many times the if condition is evaluated.
const D06_COUNT = `static int checks = 0;

public static int firstDouble(String s)
{
    for (int i = 1; i < s.length(); i++)
    {
        checks++;
        if (s.substring(i, i + 1).equals(s.substring(i - 1, i)))
        {
            return i;
        }
    }
    return -1;
}`;

// ---------- free response 1: the secret message ----------
const SHIFT = `public static String shiftLetter(String letter, int k)
{
    String abc = "abcdefghijklmnopqrstuvwxyz";
    int p = (abc.indexOf(letter) + k) % 26;
    return abc.substring(p, p + 1);
}`;
const F1 = `public static String encode(String message, int k)
{
    String result = "";
    for (int i = 0; i < message.length(); i++)
    {
        String c = message.substring(i, i + 1);
        if (c.equals(" "))
        {
            result = result + c;
        }
        else
        {
            result = result + shiftLetter(c, k);
        }
    }
    return result;
}

public static int findShift(String plain, String coded)
{
    int found = -1;
    int k = 0;
    while (k <= 25 && found == -1)
    {
        if (encode(plain, k).equals(coded))
        {
            found = k;
        }
        k++;
    }
    return found;
}`;

// ---------- free response 2: the river trip ----------
// levelOn's body is hidden from students. Here it holds the levels from the example and throws for a day with no reading.
const LEVELS = `public static int levelOn(int day)
{
    int[] levels = {120, 135, 130, 150, 150, 145, 170};
    if (day < 0 || day >= levels.length)
    {
        throw new IllegalArgumentException("no reading for day " + day);
    }
    return levels[day];
}`;
const F2 = `public static int totalRise(int first, int last)
{
    int total = 0;
    for (int d = first + 1; d <= last; d++)
    {
        int change = levelOn(d) - levelOn(d - 1);
        if (change > 0)
        {
            total += change;
        }
    }
    return total;
}

public static String stopOn(String route, int day)
{
    String rest = route;
    for (int i = 0; i < day; i++)
    {
        int dash = rest.indexOf("-");
        rest = rest.substring(dash + 1);
    }
    String stop = rest;
    int end = rest.indexOf("-");
    if (end != -1)
    {
        stop = rest.substring(0, end);
    }
    return stop;
}`;
const both = (...ms) => ms.join("\n\n");

export default [
  // ---------- for (2.8) ----------
  { id: "u2r-d-01", skill: "for", type: "mcq", topic: "2.8", difficulty: "difficult",
    stem: "In a coded message, each `#` means that the letter right after it is a decoy. Consider the following code segment.",
    code: `String msg = "mo#nst#er#s";
String out = "";
for (int i = 0; i < msg.length(); i++)
{
    if (msg.substring(i, i + 1).equals("#"))
    {
        i++;
    }
    else
    {
        out += msg.substring(i, i + 1);
    }
}
System.out.println(out);`,
    question: "What is printed?",
    choices: ["mostr", "monsters", "nes", "mot"], mono: true,
    why: [
      "At a `#`, the `i++` in the body moves i to the decoy, and the header's `i++` moves past it, so no decoy is ever added. The kept letters are m, o, s, t, and r. The last `#`, at index 9, sends i to 10 and then 11, so the final s is skipped as a decoy.",
      "This drops only the `#` characters. The `i++` inside the if is an extra step, so the letter after each `#` is skipped too.",
      "These are the decoys, the letters the code skips. The else adds every letter that is not a `#` and is not passed over.",
      "This skips two letters after each `#`. The body's `i++` and the header's `i++` move i 2 places in all: from the `#` to the decoy, then to the letter after it, which is checked.",
    ],
    answer: 0,
    verify: { out: "mostr" } },

  { id: "u2r-d-02", skill: "for", type: "mcq", topic: "2.8", difficulty: "difficult",
    stem: "Consider the following code segment.",
    code: D02,
    question: "Which of the following code segments prints exactly the same output?",
    choices: [D02_A, D02_B, D02_C, D02_D], mono: true,
    why: [
      "x takes 7 values, 3, 7, 11, 15, 19, 23, and 27, each 4 more than the one before. With i from 0 to 6, `4 * i + 3` gives the same 7 values in the same order.",
      "`i <= 7` gives 8 passes. The last one prints 31, and the original loop stops before 31, because 31 is not less than 30.",
      "Starting i at 1 leaves out `4 * 0 + 3`, so this prints 7 up to 31: the 3 is lost and an extra 31 is printed at the end.",
      "The parentheses add 3 before multiplying, so this prints 12, 16, and so on up to 36.",
    ],
    answer: 0,
    verify: { cases: [
      { run: bar(D02), out: "3 7 11 15 19 23 27 |" },
      { run: bar(D02_A), out: "3 7 11 15 19 23 27 |" },
      { run: bar(D02_B), out: "3 7 11 15 19 23 27 31 |" },
      { run: bar(D02_C), out: "7 11 15 19 23 27 31 |" },
      { run: bar(D02_D), out: "12 16 20 24 28 32 36 |" },
    ] } },

  // ---------- string (2.10) ----------
  { id: "u2r-d-03", skill: "string", type: "mcq", topic: "2.10", difficulty: "difficult",
    stem: "The following code segment is intended to print `true` if the letters of hidden appear in text in the same order, though not always next to each other, and `false` otherwise. For the values shown it should print `true`.",
    code: D03("wand", "/* missing condition */"),
    question: "Which of the following can replace `/* missing condition */` so that the code segment works as intended for any text and any hidden of at least one letter?",
    choices: [D03_A, D03_B, D03_C, D03_D], mono: true,
    why: [
      "The loop must stop when text runs out or when every letter of hidden has been found, so it keeps going only while both are true. After the d at index 13, pos is 4, `pos < hidden.length()` is false, and the loop ends before `hidden.substring(4, 5)` is called.",
      "With `||`, the loop keeps going after all four letters are found, because i is still less than 15. On the next pass `hidden.substring(4, 5)` throws a StringIndexOutOfBoundsException.",
      "pos counts letters of hidden, so it has to be checked against `hidden.length()`. When pos is 4 it is still less than 15, and `hidden.substring(4, 5)` throws a StringIndexOutOfBoundsException.",
      "`<=` lets the loop run once more when pos equals 4, the length of hidden, and `hidden.substring(4, 5)` throws a StringIndexOutOfBoundsException.",
    ],
    answer: 0,
    verify: { cases: [
      { run: D03("wand", D03_A), out: "true" },
      { run: D03("draw", D03_A), out: "false" },
      { run: D03("wand", D03_B), throws: "StringIndexOutOfBoundsException" },
      { run: D03("wand", D03_C), throws: "StringIndexOutOfBoundsException" },
      { run: D03("wand", D03_D), throws: "StringIndexOutOfBoundsException" },
    ] } },

  { id: "u2r-d-04", skill: "string", type: "mcq", topic: "2.10", difficulty: "difficult",
    stem: "The following code segment is intended to print the index of the first `o` in s, or -1 if s has no `o`. The loop visits the letters from the last one to the first.",
    code: D04,
    question: "Which of the following can replace `/* missing code */` so that the code segment works as intended for any s?",
    choices: [D04_A, D04_B, D04_C, D04_D], mono: true,
    why: [
      "The loop runs from the end to the front, so the o at index 1 is the last o it reaches. Each o overwrites pos, and the last overwrite is the first o in s. With no o, pos stays -1.",
      "This keeps the first o the loop reaches. The loop starts at the end, so that is the last o in s, at index 8.",
      "This counts from the end of s and prints 10. The index of a letter is i itself, whichever way the loop moves.",
      "Indexes count from 0, so the first o is at index 1, not 2. `i + 1` is its position counting from 1.",
    ],
    answer: 0,
    verify: { cases: [
      { run: d04(D04_A), out: "1" },
      { run: d04(D04_A).replace('"goblin horde"', '"bat"'), out: "-1" },
      { run: d04(D04_B), out: "8" },
      { run: d04(D04_C), out: "10" },
      { run: d04(D04_D), out: "2" },
    ] } },

  // ---------- runtime (2.12) ----------
  { id: "u2r-d-05", skill: "runtime", type: "mcq", topic: "2.12", difficulty: "moderate",
    stem: "Consider the following code segment.",
    code: `String s = "abracadabra";
int count = 0;
for (int i = 0; i < s.length() - 2; i++)
{
    if (s.substring(i, i + 1).equals("a"))
    {
        if (s.substring(i + 2, i + 3).equals("a"))
        {
            count++;
        }
    }
}
System.out.println(count);`,
    question: "How many times is the condition `s.substring(i + 2, i + 3).equals(\"a\")` evaluated, and what is printed?",
    choices: ["4 times, and 2 is printed", "5 times, and 2 is printed", "9 times, and 2 is printed", "4 times, and 4 is printed"], mono: false,
    why: [
      "i goes from 0 to 8. The inner condition is checked only when the letter at i is an a, which happens at indexes 0, 3, 5, and 7. Two places later there is an a only for i equal to 3 and 5.",
      "This also counts the a at index 10. The loop stops when i reaches `s.length() - 2`, which is 9, so index 10 is never checked.",
      "That is how many times the outer condition is checked, once on each pass. The inner one is checked only when the outer one is true.",
      "4 is how many times the inner condition is checked, but it is true only twice: the a at index 0 has an r two places later, and so does the a at index 7.",
    ],
    answer: 0,
    verify: { cases: [
      { run: `String s = "abracadabra";\nint count = 0;\nint checks = 0;\nfor (int i = 0; i < s.length() - 2; i++)\n{\n    if (s.substring(i, i + 1).equals("a"))\n    {\n        checks++;\n        if (s.substring(i + 2, i + 3).equals("a"))\n        {\n            count++;\n        }\n    }\n}\nSystem.out.println(checks + " " + count);`, out: "4 2" },
    ] } },

  { id: "u2r-d-06", skill: "runtime", type: "mcq", topic: "2.12", difficulty: "difficult",
    stem: "Consider the following method.",
    code: D06,
    question: "In one call `firstDouble(s)`, where s has n letters and n is at least 2, what are the fewest and the most times the condition of the `if` statement can be evaluated?",
    choices: ["1 and n - 1", "0 and n - 1", "1 and n", "n - 1 and n - 1"], mono: false,
    why: [
      "The fewest is 1: when the first two letters match, the first check is true and `return i;` ends the method. The most is n - 1: when no two neighbors match, i goes from 1 to n - 1 and every check is false.",
      "n is at least 2, so `1 < s.length()` is true at the start and the condition is checked at least once.",
      "i starts at 1, not 0, so the loop has at most n - 1 passes. Starting at 1 is what keeps `s.substring(i - 1, i)` inside the String.",
      "`return i;` leaves the method at the first match, so a String whose first two letters match is checked only once.",
    ],
    answer: 0,
    verify: { cases: [
      { methods: D06_COUNT, run: `firstDouble("ppqrs");\nSystem.out.print(checks + " ");\nchecks = 0;\nfirstDouble("pqrst");\nSystem.out.println(checks);`, out: "1 4" },
      { methods: D06, run: `System.out.println(firstDouble("ppqrs") + " " + firstDouble("pqrst") + " " + firstDouble("pqrr"));`, out: "1 -1 3" },
    ] } },

  // ---------- while (2.7) ----------
  { id: "u2r-d-07", skill: "while", type: "output", topic: "2.7", difficulty: "difficult",
    stem: "Consider the following code segment.",
    code: `int gold = 50;
int day = 0;
int cost = 7;
while (gold > 0)
{
    day++;
    gold -= cost;
    if (day % 3 == 0)
    {
        cost += 7;
    }
}
System.out.println(day + " " + gold);`,
    question: OUT,
    answer: "6 -13",
    why: "Days 1 to 3 each take 7: gold goes 43, 36, 29, and at the end of day 3 the cost rises to 14. Days 4 to 6 take 14: gold goes 15, 1, and -13. The test is checked only before each pass, so gold can go below 0, and the cost rises to 21 after day 6 without being used.",
    verify: { out: "6 -13" } },

  // ---------- nested (2.11) ----------
  { id: "u2r-d-08", skill: "nested", type: "mcq", topic: "2.11", difficulty: "moderate",
    stem: "Consider the following code segment.",
    code: `String s = "";
for (int i = 1; i < 4; i++)
{
    for (int j = i; j <= 4; j++)
    {
        if ((i + j) % 2 == 0)
        {
            s += j;
        }
    }
    s += "|";
}
System.out.println(s);`,
    question: "What is printed?",
    choices: ["13|24|3|", "13|24|13|", "1|3|2|4|3|", "13|24|3|4|"], mono: true,
    why: [
      "The inner loop starts at j equal to i and adds j when `i + j` is even. Row 1 adds 1 and 3, row 2 adds 2 and 4, and row 3 adds only 3. The bar is added once after each row.",
      "This starts every inner loop at 1. j starts at i, so the third row begins at 3 and 1 is never checked.",
      "This adds a bar after every number. `s += \"|\";` comes after the inner loop, so it runs once for each value of i.",
      "This also runs a row for i equal to 4. The outer test is `i < 4`, so the last row is i equal to 3.",
    ],
    answer: 0,
    verify: { out: "13|24|3|" } },

  // ---------- frq: two parts, the AP exam's Question 1 shape ----------
  { id: "u2r-d-09", skill: "frq", type: "code", topic: "2.10", title: "The secret message",
    prompt: "In the dungeon game, players send each other coded messages. A message is a `String` of lowercase letters and spaces. The static method `shiftLetter`, shown below, is already written; do not write it. It returns the letter that is `k` places after `letter` in the alphabet, starting over at `a` after `z`. For example, `shiftLetter(\"c\", 2)` returns `\"e\"`, `shiftLetter(\"y\", 3)` returns `\"b\"`, and `shiftLetter(\"q\", 0)` returns `\"q\"`.\n\nThis question has two parts. Write both methods.\n\n**(a)** Write the static method `encode`, which returns `message` with each letter replaced by the letter `k` places after it. Spaces are not changed. For example, `encode(\"orc den\", 3)` returns `\"ruf ghq\"`, and `encode(\"zap\", 1)` returns `\"abq\"`. You must call `shiftLetter` appropriately to receive full credit.\n\n**(b)** Write the static method `findShift`, which returns the smallest `k` from 0 to 25 for which `encode(plain, k)` equals `coded`, or -1 if there is none. Stop trying values of `k` as soon as one works. For example, `findShift(\"orc den\", \"ruf ghq\")` returns 3, `findShift(\"bat\", \"bat\")` returns 0, `findShift(\"a\", \"z\")` returns 25, and `findShift(\"bat\", \"cat\")` returns -1, because no single shift turns `b` into `c` and also leaves `a` as `a`. Assume that `encode` works as specified, regardless of what you wrote in part (a). You must call `encode` appropriately to receive full credit.\n\nDo not use arrays. " + QR,
    given: "/** Returns the lowercase letter k places after letter in the alphabet, starting over at \"a\" after \"z\".\n *  Precondition: letter is one lowercase letter; 0 <= k <= 25\n */\npublic static String shiftLetter(String letter, int k)\n{  /* implementation not shown */  }\n\n/** Returns message with each letter replaced by shiftLetter(letter, k); spaces are not changed.\n *  Precondition: message holds lowercase letters and spaces; 0 <= k <= 25\n */\npublic static String encode(String message, int k)\n\n/** Returns the smallest k from 0 to 25 for which encode(plain, k) equals coded, or -1 if there is none.\n *  Precondition: plain and coded hold lowercase letters and spaces.\n */\npublic static int findShift(String plain, String coded)",
    sample: "encode(\"orc den\", 3)            returns \"ruf ghq\"\nencode(\"zap\", 1)                returns \"abq\"\nencode(\"zap\", 0)                returns \"zap\"\nfindShift(\"orc den\", \"ruf ghq\")  returns 3\nfindShift(\"bat\", \"bat\")          returns 0\nfindShift(\"a\", \"z\")              returns 25\nfindShift(\"bat\", \"cat\")          returns -1",
    rows: [
      { name: "(a) Visits every character", earns: "Visits every character of `message`, in order, without going past the end." },
      { name: "(a) Calls shiftLetter", earns: "Calls `shiftLetter` with a one-letter `String` from `message` and `k`, for the letters only, and uses the `String` it returns." },
      { name: "(a) Keeps the spaces", earns: "Recognizes a space with `equals` (or `indexOf`), never with `==`, and keeps it unchanged." },
      { name: "(a) Builds and returns the result (algorithm)", earns: "Builds the new `String` in order, one character for each character of `message`, and returns it without printing it." },
      { name: "(b) Tries the shifts in order", earns: "Uses a loop that tries `k` = 0, 1, ..., 25 in order and stops at the first `k` that works, with a compound loop condition or a `return` inside the loop." },
      { name: "(b) Calls encode and compares", earns: "Calls `encode(plain, k)` inside the loop and compares what it returns with `coded` using `equals`, never `==`." },
      { name: "(b) Returns the shift (algorithm)", earns: "Returns the first `k` that works, and returns -1 only after every `k` from 0 to 25 has failed." },
    ],
    notes: NOTE + " A response that shifts letters itself instead of calling `shiftLetter` does not earn row 2, and one that does not call `encode` in part (b) does not earn row 6. Part (b) is scored on its own, even if part (a) is wrong. Row 5 is not earned when the loop stops at 24 (`k < 25`), so `findShift(\"a\", \"z\")` gives -1, or when it keeps calling `encode` after a match. Row 7 is not earned when -1 is returned inside the loop after the first `k` that fails, or when -1 is returned even though a shift works.",
    solution: F1,
    verify: { cases: [
      { methods: both(SHIFT, F1), run: 'System.out.println(encode("orc den", 3));\nSystem.out.println(encode("zap", 1));\nSystem.out.println(encode("zap", 0));\nSystem.out.println("[" + encode(" a ", 25) + "]");\nSystem.out.println(encode("", 4).length());', out: "ruf ghq\nabq\nzap\n[ z ]\n0" },
      { methods: both(SHIFT, F1), run: 'System.out.println(findShift("orc den", "ruf ghq"));\nSystem.out.println(findShift("bat", "bat"));\nSystem.out.println(findShift("a", "z"));\nSystem.out.println(findShift("bat", "cat"));\nSystem.out.println(findShift("bat", "ba"));\nSystem.out.println(findShift(" ", " "));\nSystem.out.println(findShift("zap", "abq"));', out: "3\n0\n25\n-1\n-1\n0\n1" },
      { methods: both(SHIFT, F1.replace("k <= 25", "k < 25")), run: 'System.out.println(findShift("a", "z"));', out: "-1" },
    ] } },

  { id: "u2r-d-10", skill: "frq", type: "code", topic: "2.9", title: "The river trip",
    prompt: "A rafting company keeps records of its river trips. The days of a trip are numbered from 0. The static method `levelOn`, shown below, is already written; do not write it. It returns the river's water level, in centimeters, measured on day `day`.\n\nThis question has two parts. Write both methods.\n\n**(a)** Write the static method `totalRise`, which returns how much the river rose from day `first` to day `last`. For each day from `first + 1` to `last`, if the level is higher than on the day before, add the difference. A day when the level stays the same or falls adds nothing. For example, suppose the levels on days 0 to 6 are 120, 135, 130, 150, 150, 145, and 170. Then `totalRise(0, 6)` returns 60 (15 + 20 + 25), `totalRise(2, 4)` returns 20, and `totalRise(3, 3)` returns 0. You must call `levelOn` appropriately to receive full credit.\n\n**(b)** A route is a `String` of stop names separated by single dashes, such as `\"Ford-Mill-Bend-Delta\"`, with no dash at the start or the end. The raft is at the first stop on day 0 and reaches the next stop each day. Write the static method `stopOn`, which returns the name of the stop reached on day `day`. For example, for that route, `stopOn(route, 0)` returns `\"Ford\"`, `stopOn(route, 2)` returns `\"Bend\"`, and `stopOn(route, 3)` returns `\"Delta\"`.\n\nDo not use arrays. " + QR,
    given: "/** Returns the water level, in centimeters, on the given day of the trip.\n *  Precondition: there is a reading for day.\n */\npublic static int levelOn(int day)\n{  /* implementation not shown */  }\n\n/** Returns the total of the rises in level from day first to day last.\n *  Precondition: 0 <= first <= last, and there is a reading for every day from first to last.\n */\npublic static int totalRise(int first, int last)\n\n/** Returns the name of the stop reached on the given day.\n *  Precondition: route holds stop names separated by single dashes, with no dash at the start\n *  or the end; 0 <= day, and day is at most the number of dashes in route.\n */\npublic static String stopOn(String route, int day)",
    sample: "With levels 120, 135, 130, 150, 150, 145, 170 on days 0 to 6:\ntotalRise(0, 6)   returns 60\ntotalRise(2, 4)   returns 20\ntotalRise(3, 3)   returns 0\ntotalRise(1, 2)   returns 0\n\nroute = \"Ford-Mill-Bend-Delta\"\nstopOn(route, 0)   returns \"Ford\"\nstopOn(route, 2)   returns \"Bend\"\nstopOn(route, 3)   returns \"Delta\"\nstopOn(\"Delta\", 0) returns \"Delta\"",
    rows: [
      { name: "(a) Calls levelOn", earns: "Calls `levelOn` with day numbers and uses the `int` it returns as the level (not the day number in its place)." },
      { name: "(a) Compares each pair of days", earns: "A loop compares each day from `first + 1` to `last` with the day before it, without calling `levelOn` for a day before `first` or after `last`." },
      { name: "(a) Adds only the rises", earns: "Inside the loop, adds the difference only when the level is higher than on the day before; a fall or no change adds nothing and subtracts nothing." },
      { name: "(a) Returns the total (algorithm)", earns: "Starts the total at 0 and returns the correct total, including 0 when `first` equals `last`, without printing it." },
      { name: "(b) Moves past the right number of dashes", earns: "Uses a loop that moves past exactly `day` dashes, with `indexOf(\"-\")` and `substring` or with a scan of the characters (earned even if the stop it then returns is wrong)." },
      { name: "(b) Finds the end of the name", earns: "Finds where the stop's name ends, at the next dash or at the end of `route` for the last stop, with valid `String` calls (no `substring(0, -1)` when no dash is left)." },
      { name: "(b) Returns the name (algorithm)", earns: "Returns exactly the stop's name, with no dash, for every day from 0 to the last stop." },
    ],
    notes: NOTE + " Row 2 is not earned when the loop compares day `last` with day `last + 1`, or day `first` with day `first - 1`, since there may be no reading for those days. Row 3 is not earned when a fall is subtracted, which gives 50 for `totalRise(0, 6)`. Part (b) is scored on its own. A response that cuts the route into names one at a time and stops at the right name earns rows 5 and 6.",
    solution: F2,
    verify: { cases: [
      { methods: both(LEVELS, F2), run: "System.out.println(totalRise(0, 6));\nSystem.out.println(totalRise(2, 4));\nSystem.out.println(totalRise(3, 3));\nSystem.out.println(totalRise(1, 2));\nSystem.out.println(totalRise(4, 6));\nSystem.out.println(totalRise(0, 0));\nSystem.out.println(totalRise(6, 6));", out: "60\n20\n0\n0\n25\n0\n0" },
      { methods: both(LEVELS, F2), run: 'String route = "Ford-Mill-Bend-Delta";\nSystem.out.println(stopOn(route, 0));\nSystem.out.println(stopOn(route, 1));\nSystem.out.println(stopOn(route, 2));\nSystem.out.println(stopOn(route, 3));\nSystem.out.println(stopOn("Delta", 0));\nSystem.out.println(stopOn("A-Bb", 1) + " " + route);', out: "Ford\nMill\nBend\nDelta\nDelta\nBb Ford-Mill-Bend-Delta" },
      { methods: both(LEVELS, F2.replace("if (change > 0)\n        {\n            total += change;\n        }", "total += change;")), run: "System.out.println(totalRise(0, 6));", out: "50" },
      { methods: both(LEVELS, F2.replace("d <= last;", "d <= last + 1;")), run: "System.out.println(totalRise(0, 6));", throws: "IllegalArgumentException" },
    ] } },
];

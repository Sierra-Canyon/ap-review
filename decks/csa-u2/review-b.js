// Unit 2 review, part B: String algorithms (2.10), loop algorithms (2.9), nested loops (2.11), informal run time (2.12).
// In every mcq the key is written first (answer: 0); the site shuffles.

const OUT = "What is printed? Type it exactly, one line per line.";
const THROWS = "A StringIndexOutOfBoundsException is thrown.";
const NOCOMPILE = "The code segment does not compile.";

export default [
  // ---------- string (2.10) ----------
  { id: "u2r-b-01", skill: "string", type: "mcq", topic: "2.10", difficulty: "easy",
    stem: "Consider the following code segment.",
    code: `String spell = "frost";
int count = 0;
for (int i = 0; i < spell.length(); i++)
{
    if (spell[i].equals("s"))
    {
        count++;
    }
}
System.out.println(count);`,
    question: "What is the result of executing the code segment?",
    choices: [NOCOMPILE, "1 is printed.", "0 is printed.", THROWS], mono: false,
    why: [
      "`spell[i]` uses brackets, and brackets do not index a String in Java. The compiler stops with `array required, but String found`. One character of spell is `spell.substring(i, i + 1)`.",
      "That is what the loop would print with `spell.substring(i, i + 1).equals(\"s\")`. As written, the code never runs.",
      "This treats the brackets as a test that never matches. The code never runs at all, because it does not compile.",
      "The bound `i < spell.length()` is correct, so no index runs past the end. The problem is the brackets, and the compiler catches it before anything runs.",
    ],
    answer: 0,
    verify: { error: "array required, but String found" } },

  { id: "u2r-b-02", skill: "string", type: "output", topic: "2.10", difficulty: "easy",
    stem: "Consider the following code segment.",
    code: `String name = "goblin";
String masked = "";
for (int i = 0; i < name.length(); i++)
{
    String letter = name.substring(i, i + 1);
    if ("aeiou".indexOf(letter) >= 0)
    {
        masked += "*";
    }
    else
    {
        masked += letter;
    }
}
System.out.println(masked);`,
    question: OUT,
    answer: "g*bl*n",
    why: "Each letter of name is checked once, in order. `\"aeiou\".indexOf(letter) >= 0` is true for a vowel, so a vowel adds `*` to masked and any other letter adds itself.",
    verify: { out: "g*bl*n" } },

  { id: "u2r-b-03", skill: "string", type: "mcq", topic: "2.10", difficulty: "moderate",
    stem: "The following code segment is intended to print `true` if word contains the one-letter String target, and `false` otherwise.",
    code: `String word = "ember";
String target = "b";
boolean found = false;
for (int i = 0; i < word.length(); i++)
{
    if (/* missing condition */)
    {
        found = true;
    }
}
System.out.println(found);`,
    question: "Which of the following can replace `/* missing condition */` so that the code segment works as intended?",
    choices: [
      "word.substring(i, i + 1).equals(target)",
      "word.substring(i, i + 1) == target",
      "word.substring(i).equals(target)",
      "word.substring(i, i + 1).compareTo(target) < 0",
    ], mono: true,
    why: [
      "`word.substring(i, i + 1)` is the letter at index i, and `equals` compares its characters with target. The b at index 2 sets found to true.",
      "`==` compares references. Each call to `substring` makes a new String object, so it is never the same object as target, and found stays false.",
      "`word.substring(i)` is everything from index i to the end, not one letter. It equals \"b\" only when b is the last letter of word.",
      "`compareTo` is negative when the letter comes before b in the alphabet. A match gives 0, so this never finds the b.",
    ],
    answer: 0,
    verify: { cases: [
      { run: `String word = "ember";\nString target = "b";\nboolean found = false;\nfor (int i = 0; i < word.length(); i++)\n{\n    if (word.substring(i, i + 1).equals(target))\n    {\n        found = true;\n    }\n}\nSystem.out.println(found);`, out: "true" },
      { run: `String word = "ember";\nString target = "b";\nboolean found = false;\nfor (int i = 0; i < word.length(); i++)\n{\n    if (word.substring(i, i + 1) == target)\n    {\n        found = true;\n    }\n}\nSystem.out.println(found);`, out: "false" },
      { run: `String word = "ember";\nString target = "b";\nboolean found = false;\nfor (int i = 0; i < word.length(); i++)\n{\n    if (word.substring(i).equals(target))\n    {\n        found = true;\n    }\n}\nSystem.out.println(found);`, out: "false" },
      { run: `String word = "ember";\nString target = "b";\nboolean found = false;\nfor (int i = 0; i < word.length(); i++)\n{\n    if (word.substring(i, i + 1).compareTo(target) < 0)\n    {\n        found = true;\n    }\n}\nSystem.out.println(found);`, out: "false" },
    ] } },

  { id: "u2r-b-04", skill: "string", type: "mcq", topic: "2.10", difficulty: "moderate",
    stem: "The following code segment is intended to print the letters of s in reverse order. For \"torch\" it should print hcrot.",
    code: `String s = "torch";
String rev = "";
/* missing loop */
System.out.println(rev);`,
    question: "Which of the following can replace `/* missing loop */` so that the code segment works as intended?",
    choices: [
      "for (int i = s.length() - 1; i >= 0; i--)\n{\n    rev += s.substring(i, i + 1);\n}",
      "for (int i = s.length(); i >= 0; i--)\n{\n    rev += s.substring(i, i + 1);\n}",
      "for (int i = s.length() - 1; i >= 1; i--)\n{\n    rev += s.substring(i, i + 1);\n}",
      "for (int i = 0; i < s.length(); i++)\n{\n    rev += s.substring(i, i + 1);\n}",
    ], mono: true,
    why: [
      "The last index is `s.length() - 1`, so i starts there and counts down through index 0. Each letter is added to the end of rev, last letter first.",
      "On the first pass i is `s.length()`, and `s.substring(5, 6)` asks for a letter past the end. A `StringIndexOutOfBoundsException` is thrown.",
      "`i >= 1` stops before index 0, so the first letter is never added. This prints hcro.",
      "This visits the letters front to back and adds each one to the end, so rev is a copy of s: torch.",
    ],
    answer: 0,
    verify: { cases: [
      { run: `String s = "torch";\nString rev = "";\nfor (int i = s.length() - 1; i >= 0; i--)\n{\n    rev += s.substring(i, i + 1);\n}\nSystem.out.println(rev);`, out: "hcrot" },
      { run: `String s = "torch";\nString rev = "";\nfor (int i = s.length(); i >= 0; i--)\n{\n    rev += s.substring(i, i + 1);\n}\nSystem.out.println(rev);`, throws: "StringIndexOutOfBoundsException" },
      { run: `String s = "torch";\nString rev = "";\nfor (int i = s.length() - 1; i >= 1; i--)\n{\n    rev += s.substring(i, i + 1);\n}\nSystem.out.println(rev);`, out: "hcro" },
      { run: `String s = "torch";\nString rev = "";\nfor (int i = 0; i < s.length(); i++)\n{\n    rev += s.substring(i, i + 1);\n}\nSystem.out.println(rev);`, out: "torch" },
    ] } },

  { id: "u2r-b-05", skill: "string", type: "output", topic: "2.10", difficulty: "easy",
    stem: "Consider the following code segment.",
    code: `String w = "staff";
for (int i = 1; i <= w.length(); i += 2)
{
    System.out.println(w.substring(0, i));
}`,
    question: OUT,
    answer: "s\nsta\nstaff",
    why: "`w.substring(0, i)` is the first i letters of w, and i takes the values 1, 3, and 5. `i <= w.length()` is safe here because the end index of `substring` may equal the length; an end index past the length is what throws.",
    verify: { out: "s\nsta\nstaff" } },

  { id: "u2r-b-06", skill: "string", type: "mcq", topic: "2.10", difficulty: "moderate",
    stem: "Consider the following code segment.",
    code: `String code = "rune42x7";
int i = 0;
boolean found = false;
while (i < code.length() && !found)
{
    if ("0123456789".indexOf(code.substring(i, i + 1)) >= 0)
    {
        found = true;
    }
    else
    {
        i++;
    }
}
System.out.println(i);`,
    question: "What is printed?",
    choices: ["4", "5", "7", "8"], mono: true,
    why: [
      "The loop checks one index at a time until it finds a digit. At index 4 it finds the 4, found becomes true, and i is not increased, so `!found` ends the loop with i at 4.",
      "This adds 1 on the pass that finds the digit. When the digit is found, the else does not run, so i stays at 4.",
      "7 is the index of the last digit. `!found` stops the loop at the first one.",
      "That is `code.length()`, where i would end if the String had no digit at all.",
    ],
    answer: 0,
    verify: { out: "4" } },

  { id: "u2r-b-07", skill: "string", type: "mcq", topic: "2.10", difficulty: "moderate",
    stem: "Consider the following code segment.",
    code: `String word = "monster";
String kept = "";
for (int i = 0; i < word.length(); i++)
{
    String ch = word.substring(i, i + 1);
    if (ch.compareTo("m") > 0)
    {
        kept += ch;
    }
}
System.out.println(kept);`,
    question: "What is printed?",
    choices: ["onstr", "monstr", "me", "ostr"], mono: true,
    why: [
      "`ch.compareTo(\"m\") > 0` is true when ch comes after m in the alphabet. o, n, s, t, and r do; m and e do not.",
      "This keeps the m. A String compared with an equal String gives 0, and `0 > 0` is false.",
      "This keeps the letters that do NOT come after m: m itself and e. A positive result means ch comes after \"m\".",
      "This leaves out the n. n comes right after m, so `\"n\".compareTo(\"m\")` is 1, which is positive.",
    ],
    answer: 0,
    verify: { out: "onstr" } },

  { id: "u2r-b-08", skill: "string", type: "output", topic: "2.10", difficulty: "moderate",
    stem: "Consider the following code segment.",
    code: `String sound = "shhhooot";
String out = sound.substring(0, 1);
for (int i = 1; i < sound.length(); i++)
{
    String cur = sound.substring(i, i + 1);
    if (!cur.equals(sound.substring(i - 1, i)))
    {
        out += cur;
    }
}
System.out.println(out);`,
    question: OUT,
    answer: "shot",
    why: "out starts with the first letter. From index 1 on, a letter is added only when it differs from the letter just before it, `sound.substring(i - 1, i)`, so each run of the same letter is kept once.",
    verify: { out: "shot" } },

  { id: "u2r-b-09", skill: "string", type: "mcq", topic: "2.10", difficulty: "moderate",
    stem: "Consider the following code segment.",
    code: `String s = "deep";
int n = 0;
for (int i = 0; i < s.length(); i++)
{
    if (s.substring(i, i + 1).equals(s.substring(i + 1, i + 2)))
    {
        n++;
    }
}
System.out.println(n);`,
    question: "What is the result of executing the code segment?",
    choices: [THROWS, "1 is printed.", NOCOMPILE, "2 is printed."], mono: false,
    why: [
      "On the last pass i is 3, and `s.substring(4, 5)` asks for the letter after the end of a String of length 4. To compare each letter with the next one, the loop must stop at `i < s.length() - 1`.",
      "The ee pair is counted at i equal to 1, but the loop keeps going, and the last pass reads past the end before println is reached.",
      "Index bounds are checked while the code runs, not when it compiles. Every statement here is valid Java.",
      "ee is one pair of neighbors, and it would be counted once. In any case the loop never reaches the println.",
    ],
    answer: 0,
    verify: { throws: "StringIndexOutOfBoundsException" } },

  { id: "u2r-b-10", skill: "string", type: "mcq", topic: "2.10", difficulty: "moderate",
    stem: "Consider the following code segment.",
    code: `String str = "mississippi";
String result = "";
for (int i = 0; i < str.length(); i++)
{
    String ch = str.substring(i, i + 1);
    if (result.indexOf(ch) == -1)
    {
        result += ch;
    }
}
System.out.println(result);`,
    question: "Which of the following best describes what is printed, for any value of str?",
    choices: [
      "Each different character of str once, in order of first appearance",
      "Only the characters that appear exactly once in str, in their order",
      "Each different character of str once, in order of its last appearance",
      "Only the characters that appear more than once in str, each one once",
    ], mono: false,
    why: [
      "`result.indexOf(ch) == -1` means ch is not in result yet. So each character is added the first time it is seen and skipped after that. For \"mississippi\" it prints misp.",
      "A character that repeats is still added the first time it is seen. Only its later copies are skipped.",
      "The test checks result before ch is added, so the first copy goes in and every later copy is skipped. The order is the order of first appearance.",
      "A character that appears only once is added too, because it is not in result when it is seen.",
    ],
    answer: 0,
    verify: { out: "misp" } },

  { id: "u2r-b-11", skill: "string", type: "output", topic: "2.10", difficulty: "moderate",
    stem: "Consider the following code segment.",
    code: `String a = "fire";
String b = "ICE";
String mix = "";
for (int i = 0; i < a.length(); i++)
{
    mix += a.substring(i, i + 1);
    if (i < b.length())
    {
        mix += b.substring(i, i + 1);
    }
}
System.out.println(mix);`,
    question: OUT,
    answer: "fIiCrEe",
    why: "Each pass adds the letter of a at index i, then the letter of b at index i when b has one. b is shorter, so on the last pass `i < b.length()` is false and only the e is added. The if is what keeps `b.substring(3, 4)` from throwing.",
    verify: { out: "fIiCrEe" } },

  { id: "u2r-b-12", skill: "string", type: "mcq", topic: "2.10", difficulty: "moderate",
    stem: "Consider the following code segment.",
    code: `String loot = "goblins1x23";
int total = 0;
for (int i = 0; i < loot.length(); i++)
{
    int d = "0123456789".indexOf(loot.substring(i, i + 1));
    if (d >= 0)
    {
        total += d;
    }
}
System.out.println(total);`,
    question: "What is printed?",
    choices: ["6", "24", "123", "-2"], mono: true,
    why: [
      "Each digit sits at the index of its own value in \"0123456789\", so indexOf gives the digit's value, and -1 for a letter. The if adds only the digits: 1 + 2 + 3.",
      "This reads 23 as twenty-three. The loop looks at one character at a time, so 2 and 3 are added separately.",
      "total is an int, so `+=` adds the numbers; it does not join them as text.",
      "That would be the result without the if: each of the eight letters would add -1. The test `d >= 0` skips them.",
    ],
    answer: 0,
    verify: { out: "6" } },

  { id: "u2r-b-13", skill: "string", type: "mcq", topic: "2.10", difficulty: "difficult",
    stem: "The following code segment is intended to print `true` if w reads the same forward and backward, and `false` otherwise.",
    code: `String w = "stats";
boolean same = true;
for (int i = 0; i < w.length() / 2; i++)
{
    String front = w.substring(i, i + 1);
    String back = /* missing code */;
    if (!front.equals(back))
    {
        same = false;
    }
}
System.out.println(same);`,
    question: "Which of the following can replace `/* missing code */` so that the code segment works as intended for any w?",
    choices: [
      "w.substring(w.length() - 1 - i, w.length() - i)",
      "w.substring(w.length() - i, w.length() - i + 1)",
      "w.substring(w.length() - 1 - i)",
      "w.substring(w.length() - 1, w.length())",
    ], mono: true,
    why: [
      "Index i from the front pairs with index `w.length() - 1 - i` from the back, and the substring ends one after it. For i equal to 0 this is the last letter.",
      "On the first pass i is 0, so this is `w.substring(5, 6)`, which starts at the length. A `StringIndexOutOfBoundsException` is thrown.",
      "With one argument, substring goes to the end, so after the first pass back is more than one letter. For \"stats\" it compares t with ts and prints false.",
      "This is always the last letter of w, so after the first pass each front letter is compared with the last one. For \"stats\" it compares t with s and prints false.",
    ],
    answer: 0,
    verify: { cases: [
      { run: `String w = "stats";\nboolean same = true;\nfor (int i = 0; i < w.length() / 2; i++)\n{\n    String front = w.substring(i, i + 1);\n    String back = w.substring(w.length() - 1 - i, w.length() - i);\n    if (!front.equals(back))\n    {\n        same = false;\n    }\n}\nSystem.out.println(same);`, out: "true" },
      { run: `String w = "start";\nboolean same = true;\nfor (int i = 0; i < w.length() / 2; i++)\n{\n    String front = w.substring(i, i + 1);\n    String back = w.substring(w.length() - 1 - i, w.length() - i);\n    if (!front.equals(back))\n    {\n        same = false;\n    }\n}\nSystem.out.println(same);`, out: "false" },
      { run: `String w = "stats";\nboolean same = true;\nfor (int i = 0; i < w.length() / 2; i++)\n{\n    String front = w.substring(i, i + 1);\n    String back = w.substring(w.length() - i, w.length() - i + 1);\n    if (!front.equals(back))\n    {\n        same = false;\n    }\n}\nSystem.out.println(same);`, throws: "StringIndexOutOfBoundsException" },
      { run: `String w = "stats";\nboolean same = true;\nfor (int i = 0; i < w.length() / 2; i++)\n{\n    String front = w.substring(i, i + 1);\n    String back = w.substring(w.length() - 1 - i);\n    if (!front.equals(back))\n    {\n        same = false;\n    }\n}\nSystem.out.println(same);`, out: "false" },
      { run: `String w = "stats";\nboolean same = true;\nfor (int i = 0; i < w.length() / 2; i++)\n{\n    String front = w.substring(i, i + 1);\n    String back = w.substring(w.length() - 1, w.length());\n    if (!front.equals(back))\n    {\n        same = false;\n    }\n}\nSystem.out.println(same);`, out: "false" },
    ] } },

  { id: "u2r-b-14", skill: "string", type: "mcq", topic: "2.10", difficulty: "moderate",
    stem: "Consider the following code segment.",
    code: `String s = "aabbbcbb";
int run = 1;
int best = 1;
for (int i = 1; i < s.length(); i++)
{
    if (s.substring(i, i + 1).equals(s.substring(i - 1, i)))
    {
        run++;
    }
    else
    {
        run = 1;
    }
    if (run > best)
    {
        best = run;
    }
}
System.out.println(best);`,
    question: "What is printed?",
    choices: ["3", "5", "2", "4"], mono: true,
    why: [
      "run is the length of the current streak of one letter, and it starts over at 1 when a letter differs from the one before it. best keeps the largest streak seen, which is bbb.",
      "This counts every b. run starts over at 1 at the c, so the two groups of b are not added together.",
      "That is the last streak, bb. best keeps the largest value run ever had, and it is never lowered.",
      "That counts every letter that matches the one before it. run starts over at 1 when a letter differs.",
    ],
    answer: 0,
    verify: { out: "3" } },

  { id: "u2r-b-15", skill: "string", type: "mcq", topic: "2.10", difficulty: "difficult",
    stem: "Consider the following code segment.",
    code: `String list = "orc bat imp ";
String best = "";
while (list.length() > 0)
{
    int sp = list.indexOf(" ");
    String w = list.substring(0, sp);
    if (w.compareTo(best) > 0)
    {
        best = w;
    }
    list = list.substring(sp + 1);
}
System.out.println(best);`,
    question: "What is the result of executing the code segment?",
    choices: ["orc", "bat", "imp", "Nothing is printed, because the loop never ends."], mono: false,
    why: [
      "Each pass takes the word before the first space, then cuts it and the space off. `w.compareTo(best) > 0` is true when w comes later in the alphabet than best, so best ends as the latest word.",
      "bat comes first in the alphabet. The test `> 0` keeps the word that comes later.",
      "imp is the last word in the list, but best changes only when a word comes later in the alphabet than best, and imp comes before orc.",
      "Each pass cuts off one word and its space, so list gets shorter and is \"\" after three passes.",
    ],
    answer: 0,
    verify: { out: "orc" } },

  { id: "u2r-b-16", skill: "string", type: "mcq", topic: "2.10", difficulty: "difficult",
    stem: "Consider the following code segment.",
    code: `String log = "hit miss hit hit";
String rest = log;
int pos = 0;
while (rest.indexOf("hit") >= 0)
{
    int k = rest.indexOf("hit");
    System.out.print(pos + k + " ");
    pos = pos + k + 3;
    rest = rest.substring(k + 3);
}`,
    question: "What is printed?",
    choices: ["0 9 13", "0 6 1", "0 6 7", "1 10 14"], mono: true,
    why: [
      "k is where the next hit starts in rest, and pos is how many characters of log have been cut off, so `pos + k` is that hit's index in log. Each pass cuts off everything up to the end of the hit it found.",
      "These are the positions in rest, the String that is left after each cut. Adding pos turns each one into an index in log.",
      "This forgets that each cut also removes the 3 letters of hit. pos moves past them too: `pos = pos + k + 3`.",
      "Indexes count from 0, so the hit at the very start of log is at index 0.",
    ],
    answer: 0,
    verify: { out: "0 9 13" } },

  // ---------- algo (2.9) ----------
  { id: "u2r-b-17", skill: "algo", type: "mcq", topic: "2.9", difficulty: "moderate",
    stem: "Consider the following code segment.",
    code: `int sum = 0;
int n = 0;
for (int k = 3; k <= 12; k += 3)
{
    sum += k;
    n++;
}
System.out.println((double) (sum / n) + " " + (double) sum / n);`,
    question: "What is printed?",
    choices: ["7.0 7.5", "7.5 7.5", "7.0 7.0", "7 7.5"], mono: true,
    why: [
      "sum is 30 and n is 4. In `(double) (sum / n)` the parentheses make the int division happen first: 30 / 4 is 7, then the cast gives 7.0. In `(double) sum / n` the cast turns sum into 30.0 first, so the division keeps the .5.",
      "In the first expression the cast is applied after `sum / n`, and that int division has already dropped the .5.",
      "In the second expression the cast applies to sum alone, before the division, so the division is done with a double.",
      "A cast to double makes a double, and a double always prints with a decimal point: 7.0.",
    ],
    answer: 0,
    verify: { out: "7.0 7.5" } },

  { id: "u2r-b-18", skill: "algo", type: "mcq", topic: "2.9", difficulty: "moderate",
    stem: "The following code segment is intended to print the largest value that t takes in the loop.",
    code: `int warmest = 0;
for (int t = -9; t <= -1; t += 3)
{
    if (t > warmest)
    {
        warmest = t;
    }
}
System.out.println(warmest);`,
    question: "What is printed?",
    choices: ["0", "-3", "-9", "-1"], mono: true,
    why: [
      "t takes the values -9, -6, and -3, and none of them is greater than the starting value 0, so warmest never changes. The starting guess is larger than every real value.",
      "-3 is the largest value of t, and the code would print it if warmest started at the first value or at `Integer.MIN_VALUE`. Starting at 0, warmest never updates.",
      "-9 is the smallest value, and `t > warmest` looks for larger ones. With warmest at 0, no value of t passes that test.",
      "After -3 comes 0, which fails `t <= -1`. t never equals -1.",
    ],
    answer: 0,
    verify: { out: "0" } },

  { id: "u2r-b-19", skill: "algo", type: "mcq", topic: "2.9", difficulty: "moderate",
    stem: "The following code segment is intended to print the smallest value of hp computed in the loop.",
    code: `/* missing code */
for (int k = 1; k <= 5; k++)
{
    int hp = (k * 7) % 10 + 12;
    if (hp < least)
    {
        least = hp;
    }
}
System.out.println(least);`,
    question: "Which of the following can replace `/* missing code */` so that the code segment works as intended?",
    choices: ["int least = Integer.MAX_VALUE;", "int least = 0;", "int least = Integer.MIN_VALUE;", "int least = 12;"], mono: true,
    why: [
      "No int is greater than `Integer.MAX_VALUE`, so the first hp replaces it, and from then on least holds the smallest value seen. It prints 13.",
      "0 is smaller than every hp, so `hp < least` is never true and 0 is printed. A running minimum that starts at 0 never updates when every value is positive.",
      "No int is less than `Integer.MIN_VALUE`, so least never changes. That starting value suits a running maximum.",
      "12 is smaller than every hp computed here, so least stays 12. A starting guess for a minimum must not be below the real answer.",
    ],
    answer: 0,
    verify: { cases: [
      { run: `int least = Integer.MAX_VALUE;\nfor (int k = 1; k <= 5; k++)\n{\n    int hp = (k * 7) % 10 + 12;\n    if (hp < least)\n    {\n        least = hp;\n    }\n}\nSystem.out.println(least);`, out: "13" },
      { run: `int least = 0;\nfor (int k = 1; k <= 5; k++)\n{\n    int hp = (k * 7) % 10 + 12;\n    if (hp < least)\n    {\n        least = hp;\n    }\n}\nSystem.out.println(least);`, out: "0" },
      { run: `int least = Integer.MIN_VALUE;\nfor (int k = 1; k <= 5; k++)\n{\n    int hp = (k * 7) % 10 + 12;\n    if (hp < least)\n    {\n        least = hp;\n    }\n}\nSystem.out.println(least);`, out: "-2147483648" },
      { run: `int least = 12;\nfor (int k = 1; k <= 5; k++)\n{\n    int hp = (k * 7) % 10 + 12;\n    if (hp < least)\n    {\n        least = hp;\n    }\n}\nSystem.out.println(least);`, out: "12" },
    ] } },

  { id: "u2r-b-20", skill: "algo", type: "output", topic: "2.9", difficulty: "easy",
    stem: "Consider the following code segment.",
    code: `int n = 3070;
int rev = 0;
while (n > 0)
{
    rev = rev * 10 + n % 10;
    n /= 10;
}
System.out.println(rev);`,
    question: OUT,
    answer: "703",
    why: "Each pass takes the last digit with `n % 10`, puts it at the end of rev with `rev * 10 +`, and drops it from n with `n /= 10`. The digits come off as 0, 7, 0, 3. The first one is 0, which leaves rev at 0, so the result is the int 703, not 0703.",
    verify: { out: "703" } },

  { id: "u2r-b-21", skill: "algo", type: "mcq", topic: "2.9", difficulty: "easy",
    stem: "Consider the following code segment.",
    code: `int count = 0;
for (int n = 1; n <= 40; n++)
{
    if (n % 4 == 0 && n % 6 != 0)
    {
        count++;
    }
}
System.out.println(count);`,
    question: "What is printed?",
    choices: ["7", "10", "3", "6"], mono: true,
    why: [
      "There are 10 multiples of 4 from 1 to 40. Three of them, 12, 24, and 36, are also multiples of 6, and `n % 6 != 0` leaves those out.",
      "That counts every multiple of 4. The second test removes the ones that are also multiples of 6.",
      "That counts the numbers that are multiples of both. `!=` keeps the multiples of 4 that are NOT multiples of 6.",
      "This leaves out 40. The test is `n <= 40`, and 40 is a multiple of 4 but not of 6.",
    ],
    answer: 0,
    verify: { out: "7" } },

  { id: "u2r-b-22", skill: "algo", type: "mcq", topic: "2.9", difficulty: "moderate",
    stem: "Consider the following code segment.",
    code: `int sum = 0;
int n = 0;
while (sum <= 50)
{
    n++;
    sum += n;
}
System.out.println(n + " " + sum);`,
    question: "What is printed?",
    choices: ["10 55", "9 45", "11 66", "10 45"], mono: true,
    why: [
      "The test is checked before each pass. After 9 passes sum is 45, which is still at most 50, so a 10th pass adds 10 and sum becomes 55. Then the test is false.",
      "When sum is 45 the test `sum <= 50` is still true, so the loop runs once more.",
      "After the 10th pass sum is 55, the test is false, and there is no 11th pass.",
      "n and sum change in the same pass: n becomes 10, and then 10 is added to sum.",
    ],
    answer: 0,
    verify: { out: "10 55" } },

  { id: "u2r-b-23", skill: "algo", type: "mcq", topic: "2.9", difficulty: "easy",
    stem: "Consider the following code segment.",
    code: `int num = 91;
int d = 2;
while (num % d != 0)
{
    d++;
}
System.out.println(d);`,
    question: "What is printed?",
    choices: ["7", "13", "91", "8"], mono: true,
    why: [
      "d starts at 2 and goes up by 1 until `num % d` is 0. 91 is 7 times 13, so the first d that divides it is 7, and the loop stops there.",
      "13 also divides 91, but the loop counts up from 2 and stops at the first divisor it reaches.",
      "d would reach 91 only if no smaller number divided 91. 7 does.",
      "When d is 7 the test is false, so the body does not run again and d is not increased.",
    ],
    answer: 0,
    verify: { out: "7" } },

  { id: "u2r-b-24", skill: "algo", type: "output", topic: "2.9", difficulty: "easy",
    stem: "Consider the following code segment.",
    code: `int num = 52814;
int evens = 0;
int oddSum = 0;
while (num > 0)
{
    int d = num % 10;
    if (d % 2 == 0)
    {
        evens++;
    }
    else
    {
        oddSum += d;
    }
    num /= 10;
}
System.out.println(evens + " " + oddSum);`,
    question: OUT,
    answer: "3 6",
    why: "The loop takes the digits from the right: 4, 1, 8, 2, 5. The even ones, 4, 8, and 2, are counted, and the odd ones, 1 and 5, are added to oddSum.",
    verify: { out: "3 6" } },

  { id: "u2r-b-25", skill: "algo", type: "mcq", topic: "2.9", difficulty: "easy",
    stem: "Consider the following code segment.",
    code: `int total = 0;
int count = 0;
for (int k = 1; k <= 20; k++)
{
    if (k % 3 == 0)
    {
        total += k;
        count++;
    }
}
double avg = (double) total / count;
System.out.println(avg);`,
    question: "What is printed?",
    choices: ["10.5", "10.0", "3.15", "12.0"], mono: true,
    why: [
      "The multiples of 3 up to 20 are 3, 6, 9, 12, 15, and 18, so total is 63 and count is 6. The cast makes total a double before the division, so 63.0 / 6 is 10.5.",
      "That is int division, 63 / 6. The cast on total happens before the division, so the .5 is kept.",
      "That divides by 20, the number of passes. count goes up only when the if is true.",
      "This also adds 21. The test is `k <= 20`, so 21 is never checked.",
    ],
    answer: 0,
    verify: { out: "10.5" } },

  // ---------- nested (2.11) ----------
  { id: "u2r-b-26", skill: "nested", type: "output", topic: "2.11", difficulty: "easy",
    stem: "Consider the following code segment.",
    code: `for (int r = 4; r >= 1; r--)
{
    for (int c = 1; c <= r; c++)
    {
        System.out.print(c);
    }
    System.out.println();
}`,
    question: OUT,
    answer: "1234\n123\n12\n1",
    why: "r counts down from 4 to 1, and for each r the inner loop prints the numbers from 1 to r on one line. println ends the line after each row, so each row is one shorter than the one above it.",
    verify: { out: "1234\n123\n12\n1" } },

  { id: "u2r-b-27", skill: "nested", type: "mcq", topic: "2.11", difficulty: "easy",
    stem: "Consider the following code segment.",
    code: `int count = 0;
for (int i = 1; i <= 4; i++)
{
    for (int j = 1; j <= 3; j++)
    {
        count += i;
    }
}
System.out.println(count);`,
    question: "What is printed?",
    choices: ["30", "12", "10", "40"], mono: true,
    why: [
      "For each i the inner loop runs 3 times and adds i each time, so it adds 3 times i: 3 + 6 + 9 + 12 is 30.",
      "That is how many times the inner body runs, 4 times 3. Each run adds i, not 1.",
      "That adds each i once. The inner loop adds it 3 times for each value of i.",
      "This runs the inner loop 4 times for each i. j goes from 1 to 3.",
    ],
    answer: 0,
    verify: { out: "30" } },

  { id: "u2r-b-28", skill: "nested", type: "mcq", topic: "2.11", difficulty: "easy",
    stem: "Consider the following code segment.",
    code: `for (int r = 1; r <= 3; r++)
{
    for (int s = 0; s < 3 - r; s++)
    {
        System.out.print(".");
    }
    for (int k = 0; k < r; k++)
    {
        System.out.print("#");
    }
    System.out.println();
}`,
    question: "What is printed?",
    choices: ["..#\n.##\n###", "..##\n.###\n####", "...#\n..##\n.###", "..#\n..##\n..###"], mono: true,
    why: [
      "On row r the first inner loop prints `3 - r` dots and the second prints r # characters: 2, 1, and 0 dots, then 1, 2, and 3 #.",
      "This prints one # too many on each row, as `k <= r` would. `k < r`, starting at 0, runs r times.",
      "`s < 3 - r` runs `3 - r` times, starting at 0: 2 dots on the first row, not 3.",
      "The dot loop's bound is `3 - r`, so each row has one dot fewer than the row before it.",
    ],
    answer: 0,
    verify: { out: "..#\n.##\n###" } },

  { id: "u2r-b-29", skill: "nested", type: "mcq", topic: "2.11", difficulty: "moderate",
    stem: "Consider the following code segment.",
    code: `String s = "cocoon";
int pairs = 0;
for (int i = 0; i < s.length(); i++)
{
    for (int j = i + 1; j < s.length(); j++)
    {
        if (s.substring(i, i + 1).equals(s.substring(j, j + 1)))
        {
            pairs++;
        }
    }
}
System.out.println(pairs);`,
    question: "What is printed?",
    choices: ["4", "8", "10", "14"], mono: true,
    why: [
      "j always starts after i, so each pair of positions is checked once. The c's at indexes 0 and 2 make 1 pair, and the o's at 1, 3, and 4 make 3.",
      "That counts each pair twice, once from each end. j starts at `i + 1`, so a pair is checked only from its first letter.",
      "This also compares each letter with itself, as starting j at i would: 4 pairs plus 6 self-matches. j starts at `i + 1`.",
      "This starts j at 0, so each letter also matches itself and each pair is counted from both ends: 6 + 8. j starts at `i + 1`.",
    ],
    answer: 0,
    verify: { out: "4" } },

  { id: "u2r-b-30", skill: "nested", type: "output", topic: "2.11", difficulty: "moderate",
    stem: "Consider the following code segment.",
    code: `for (int i = 1; i <= 3; i++)
{
    String line = "";
    for (int j = i; j <= 3; j++)
    {
        line += i * j;
    }
    System.out.println(line);
}`,
    question: OUT,
    answer: "123\n46\n9",
    why: "The inner loop starts at j equal to i, so each row is one shorter. Row 1 joins 1, 2, and 3; row 2 joins 4 and 6; row 3 is 9. `line += i * j` multiplies first and then joins the number to the String.",
    verify: { out: "123\n46\n9" } },

  { id: "u2r-b-31", skill: "nested", type: "mcq", topic: "2.11", difficulty: "difficult",
    stem: "Consider the following code segment.",
    code: `int i = 1;
int total = 0;
while (i <= 8)
{
    int j = i;
    while (j > 0)
    {
        total++;
        j -= 2;
    }
    i *= 2;
}
System.out.println(total);`,
    question: "What is printed?",
    choices: ["8", "15", "10", "11"], mono: true,
    why: [
      "i takes the values 1, 2, 4, and 8. Each time, the inner loop counts j down by 2 from i while j is positive, which takes 1, 1, 2, and 4 passes.",
      "That adds i each time. j goes down by 2, so the inner loop runs i / 2 times, rounded up, not i times.",
      "This reads `i *= 2` as `i += 2`, so i would be 1, 3, 5, and 7. `i *= 2` doubles i, so it skips from 2 to 4 to 8.",
      "This also runs when j is 0. The test is `j > 0`.",
    ],
    answer: 0,
    verify: { out: "8" } },

  { id: "u2r-b-32", skill: "nested", type: "mcq", topic: "2.11", difficulty: "easy",
    stem: "The following code segment is intended to print three lines: 1, then 22, then 333.",
    code: `for (int r = 1; r <= 3; r++)
{
    /* missing loop */
    System.out.println();
}`,
    question: "Which of the following can replace `/* missing loop */` so that the code segment works as intended?",
    choices: [
      "for (int c = 1; c <= r; c++)\n{\n    System.out.print(r);\n}",
      "for (int c = 1; c <= r; c++)\n{\n    System.out.print(c);\n}",
      "for (int c = 1; c < r; c++)\n{\n    System.out.print(r);\n}",
      "for (int c = 1; c <= 3; c++)\n{\n    System.out.print(r);\n}",
    ], mono: true,
    why: [
      "On row r the inner loop runs r times and prints r each time: one 1, two 2s, three 3s.",
      "This prints the column number c, so the rows are 1, 12, and 123.",
      "`c < r` runs `r - 1` times, so every row is one short: an empty line, then 2, then 33.",
      "The inner bound must depend on r. With 3, every row is full: 111, 222, 333.",
    ],
    answer: 0,
    verify: { cases: [
      { run: `for (int r = 1; r <= 3; r++)\n{\n    for (int c = 1; c <= r; c++)\n    {\n        System.out.print(r);\n    }\n    System.out.println();\n}`, out: "1\n22\n333" },
      { run: `for (int r = 1; r <= 3; r++)\n{\n    for (int c = 1; c <= r; c++)\n    {\n        System.out.print(c);\n    }\n    System.out.println();\n}`, out: "1\n12\n123" },
      { run: `for (int r = 1; r <= 3; r++)\n{\n    for (int c = 1; c < r; c++)\n    {\n        System.out.print(r);\n    }\n    System.out.println();\n}`, out: "\n2\n33" },
      { run: `for (int r = 1; r <= 3; r++)\n{\n    for (int c = 1; c <= 3; c++)\n    {\n        System.out.print(r);\n    }\n    System.out.println();\n}`, out: "111\n222\n333" },
    ] } },

  // ---------- runtime (2.12) ----------
  { id: "u2r-b-33", skill: "runtime", type: "mcq", topic: "2.12", difficulty: "easy",
    stem: "Consider the following code segment.",
    code: `for (int i = 1; i <= 10; i++)
{
    if (i % 2 == 0)
    {
        for (int j = 0; j < 3; j++)
        {
            System.out.print("x");
        }
    }
}`,
    question: "How many times is the statement `System.out.print(\"x\");` executed?",
    choices: ["15", "30", "5", "20"], mono: true,
    why: [
      "The inner loop runs only for the 5 even values of i, and each time it prints 3 times: 5 times 3.",
      "That counts all 10 values of i. The inner loop runs only when `i % 2 == 0`.",
      "That counts how many times the inner loop starts. Each time, its body runs 3 times.",
      "This runs the inner loop 4 times. `j < 3` allows only 0, 1, and 2.",
    ],
    answer: 0,
    verify: { out: "xxxxxxxxxxxxxxx" } },

  { id: "u2r-b-34", skill: "runtime", type: "mcq", topic: "2.12", difficulty: "moderate",
    stem: "Consider the following two code segments, which both count the divisors of n.",
    code: `int n = 40;

// Segment I
int count1 = 0;
for (int d = 1; d <= n; d++)
{
    if (n % d == 0)
    {
        count1++;
    }
}

// Segment II
int count2 = 1;
for (int d = 1; d <= n / 2; d++)
{
    if (n % d == 0)
    {
        count2++;
    }
}`,
    question: "How many times is the test `n % d == 0` evaluated in Segment I and in Segment II?",
    choices: ["40 and 20", "40 and 21", "8 and 8", "40 and 40"], mono: false,
    why: [
      "Segment I tests every d from 1 to 40. Segment II stops at `n / 2`, which is 20, and starts count2 at 1 for n itself, since no other divisor is greater than half of n. Both find 8 divisors, but Segment II does half the tests.",
      "count2 starting at 1 is not a test. It stands for n itself, which the loop in Segment II never reaches.",
      "40 has 8 divisors, and that is how many times the test is true. The test is evaluated on every pass of the loop.",
      "Segment II stops at `n / 2`, which is 20.",
    ],
    answer: 0,
    verify: { cases: [
      { run: `int n = 40;\nint t1 = 0;\nint t2 = 0;\nint count1 = 0;\nfor (int d = 1; d <= n; d++)\n{\n    t1++;\n    if (n % d == 0)\n    {\n        count1++;\n    }\n}\nint count2 = 1;\nfor (int d = 1; d <= n / 2; d++)\n{\n    t2++;\n    if (n % d == 0)\n    {\n        count2++;\n    }\n}\nSystem.out.println(t1 + " " + t2 + " " + count1 + " " + count2);`, out: "40 20 8 8" },
    ] } },

  { id: "u2r-b-35", skill: "runtime", type: "mcq", topic: "2.12", difficulty: "moderate",
    stem: "Consider the following code segment.",
    code: `int n = 16;
int ops = 0;
for (int i = 1; i <= n; i *= 2)
{
    for (int j = 0; j < n; j++)
    {
        ops++;
    }
}`,
    question: "How many times is the statement `ops++;` executed?",
    choices: ["80", "256", "64", "31"], mono: true,
    why: [
      "i takes the values 1, 2, 4, 8, and 16, so the outer loop runs 5 times, and each time the inner loop runs n, or 16, times: 5 times 16.",
      "That is n times n. The outer loop doubles i, so it runs only 5 times, not 16.",
      "This leaves out i equal to 16. The test is `i <= n`.",
      "That adds up the values of i. The inner loop runs n times, whatever i is.",
    ],
    answer: 0,
    verify: { cases: [
      { run: `int n = 16;\nint ops = 0;\nfor (int i = 1; i <= n; i *= 2)\n{\n    for (int j = 0; j < n; j++)\n    {\n        ops++;\n    }\n}\nSystem.out.println(ops);`, out: "80" },
    ] } },

  { id: "u2r-b-36", skill: "runtime", type: "mcq", topic: "2.12", difficulty: "moderate",
    stem: "Consider the following two code segments, where n is a positive int.",
    code: `// Segment I
int a = 0;
for (int i = 0; i < n; i++)
{
    a++;
}

// Segment II
int b = 0;
for (int i = 0; i < n; i++)
{
    for (int j = 0; j < n; j++)
    {
        b++;
    }
}`,
    question: "When n changes from 50 to 100, how does the number of times `a++;` and `b++;` are executed change?",
    choices: [
      "2 times as many for `a++`, and 4 times as many for `b++`",
      "2 times as many for `a++`, and 2 times as many for `b++`",
      "4 times as many for `a++`, and 4 times as many for `b++`",
      "50 more for `a++`, and 100 more for `b++`",
    ], mono: false,
    why: [
      "`a++` runs n times: 50, then 100. `b++` runs n times n: 2,500, then 10,000. Doubling n doubles a single loop and multiplies a nested pair of loops by four.",
      "`b++` is inside two loops that both run n times. Doubling n doubles each loop, so the total is 2 times 2 as large.",
      "`a++` is in a single loop over n, so its count grows the same way n does.",
      "`a++` does run 50 more times, but `b++` runs n times n, which goes from 2,500 to 10,000.",
    ],
    answer: 0,
    verify: { cases: [
      { run: `int n = 50;\nint a = 0;\nfor (int i = 0; i < n; i++)\n{\n    a++;\n}\nint b = 0;\nfor (int i = 0; i < n; i++)\n{\n    for (int j = 0; j < n; j++)\n    {\n        b++;\n    }\n}\nSystem.out.println(a + " " + b);`, out: "50 2500" },
      { run: `int n = 100;\nint a = 0;\nfor (int i = 0; i < n; i++)\n{\n    a++;\n}\nint b = 0;\nfor (int i = 0; i < n; i++)\n{\n    for (int j = 0; j < n; j++)\n    {\n        b++;\n    }\n}\nSystem.out.println(a + " " + b);`, out: "100 10000" },
    ] } },

  { id: "u2r-b-37", skill: "runtime", type: "output", topic: "2.12", difficulty: "easy",
    stem: "Consider the following code segment.",
    code: `int ops = 0;
for (int i = 0; i < 4; i++)
{
    for (int j = 0; j < 3; j++)
    {
        ops++;
    }
    ops++;
}
System.out.println(ops);`,
    question: OUT,
    answer: "16",
    why: "The inner loop does `ops++` 3 times on each of the 4 outer passes, which is 12. The `ops++` after the inner loop is inside the outer loop only, so it runs once per outer pass, 4 more.",
    verify: { out: "16" } },

  { id: "u2r-b-38", skill: "runtime", type: "mcq", topic: "2.12", difficulty: "easy",
    stem: "Consider the following code segment.",
    code: `String path = "night forest";
int i = 0;
while (i < path.length() && !path.substring(i, i + 1).equals("e"))
{
    i++;
}`,
    question: "How many times is the statement `i++;` executed?",
    choices: ["9", "10", "12", "11"], mono: true,
    why: [
      "The loop moves past the 9 characters before the e at index 9, the space included, and stops when the test is false at the e. Each pass adds 1, so `i++` runs 9 times.",
      "This counts the check at the e. That test is false, so the body does not run for it.",
      "That is the length of path. The loop stops early, at the first e.",
      "That counts every character that is not an e. The loop stops at the first e and never reaches the s and t after it.",
    ],
    answer: 0,
    verify: { cases: [
      { run: `String path = "night forest";\nint i = 0;\nint runs = 0;\nwhile (i < path.length() && !path.substring(i, i + 1).equals("e"))\n{\n    i++;\n    runs++;\n}\nSystem.out.println(runs);`, out: "9" },
    ] } },
];

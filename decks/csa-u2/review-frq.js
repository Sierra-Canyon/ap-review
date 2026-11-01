// Unit 2 review: six free responses (Methods and Control Structures style), 7 rows each, one point per row.
// f1 to f3 are code segments written inside main; f4 to f6 are static methods with a given header.

const QR = "Use only `String` methods from the Java Quick Reference: `length`, `substring`, `indexOf`, `equals`, and `compareTo`.";
const SEG = "Write the code segment as it would appear inside `main`. Do not write any methods, and do not use arrays. " + QR;
const NOTE = "One point for each row. Award a row for what the code actually does; ignore small typing slips that do not change the logic.";

// Each case of a code segment declares the given variable, then runs the sample solution.
const seg = (decl, sol, out) => ({ run: decl + "\n" + sol, out });

// ---------- f1: Packing the runes (2.10, code segment) ----------
const F1 = `String packed = "";
int runs = 0;
int run = 0;
int longest = 0;
String longLetter = "";
for (int i = 0; i < runes.length(); i++)
{
    String r = runes.substring(i, i + 1);
    run++;
    if (i == runes.length() - 1 || !r.equals(runes.substring(i + 1, i + 2)))
    {
        packed = packed + r + run;
        runs++;
        if (run > longest)
        {
            longest = run;
            longLetter = r;
        }
        run = 0;
    }
}
System.out.println("Packed: " + packed);
System.out.println("Runs: " + runs);
System.out.println("Longest: " + longLetter);`;

// ---------- f2: The vault code (2.7, code segment) ----------
const F2 = `int n = code;
int digits = 0;
int smallest = 9;
int right = -1;
boolean descending = true;
while (n > 0)
{
    int d = n % 10;
    digits++;
    if (d < smallest)
    {
        smallest = d;
    }
    if (d <= right)
    {
        descending = false;
    }
    right = d;
    n = n / 10;
}
System.out.println("Digits in " + code + ": " + digits);
System.out.println("Smallest digit: " + smallest);
System.out.println("Descending: " + descending);`;

// ---------- f3: Matching letters (2.11, code segment) ----------
const F3 = `int pairs = 0;
int most = 0;
String mostLetter = "";
for (int i = 0; i < word.length(); i++)
{
    String a = word.substring(i, i + 1);
    int count = 0;
    for (int j = 0; j < word.length(); j++)
    {
        if (a.equals(word.substring(j, j + 1)))
        {
            count++;
            if (j > i)
            {
                pairs++;
            }
        }
    }
    if (count > most)
    {
        most = count;
        mostLetter = a;
    }
}
System.out.println("Pairs: " + pairs);
System.out.println("Most common: " + mostLetter);
System.out.println("All different: " + (pairs == 0));`;

// ---------- f4: The spellbook (2.10, methods, parts a and b) ----------
const F4 = `public static int spellPower(String name)
{
    int power = 0;
    for (int i = 0; i < name.length(); i++)
    {
        String c = name.substring(i, i + 1);
        if ("aeiou".indexOf(c) != -1)
        {
            power += 3;
        }
        else
        {
            power += 1;
        }
    }
    return power;
}

public static String strongestSpell(String spellbook)
{
    String best = "";
    int bestPower = 0;
    String name = "";
    for (int i = 0; i < spellbook.length(); i++)
    {
        String c = spellbook.substring(i, i + 1);
        if (!c.equals(" "))
        {
            name = name + c;
        }
        if (c.equals(" ") || i == spellbook.length() - 1)
        {
            int power = spellPower(name);
            if (power > bestPower)
            {
                bestPower = power;
                best = name;
            }
            name = "";
        }
    }
    return best;
}`;

// ---------- f5: Censoring a message (2.10, method) ----------
const F5 = `public static String censor(String message, String banned)
{
    String result = "";
    String rest = message;
    int pos = rest.indexOf(banned);
    while (pos != -1)
    {
        result = result + rest.substring(0, pos) + "***";
        rest = rest.substring(pos + banned.length());
        pos = rest.indexOf(banned);
    }
    return result + rest;
}`;

// ---------- f6: Breaking the armor (2.11, method) ----------
const F6 = `public static int waysToBreak(int sides, int armor)
{
    int count = 0;
    for (int red = 1; red <= sides; red++)
    {
        for (int blue = 1; blue <= sides; blue++)
        {
            int damage = red + blue;
            if (red == blue)
            {
                damage = damage * 2;
            }
            if (damage >= armor)
            {
                count++;
            }
        }
    }
    return count;
}`;

export default [
  { id: "u2r-f1", skill: "frq", type: "code", topic: "2.10", title: "Packing the runes",
    prompt: "A rune scroll is a `String` of uppercase letters, one letter for each rune. The variable `runes` has already been declared and holds at least one letter. A **run** is a group of the same letter in a row, as long as it can be: `\"KKAAAZZZ\"` has three runs, `KK`, `AAA`, and `ZZZ`. A letter can start a new run later in the scroll: `\"AABA\"` has three runs, `AA`, `B`, and `A`.\n\nWrite a code segment that prints three lines:\n\n- `Packed: ` followed by the scroll in packed form: each run written as its letter followed by its length, in order\n- `Runs: ` followed by the number of runs\n- `Longest: ` followed by the letter of the longest run. If two or more runs tie for the longest, use the one that comes first.\n\nFor example, if `runes` is `\"KKAAAZZZ\"`, the code segment prints `Packed: K2A3Z3`, then `Runs: 3`, then `Longest: A`. If `runes` is `\"AABA\"`, it prints `Packed: A2B1A1`, then `Runs: 3`, then `Longest: A`. If `runes` is `\"Q\"`, it prints `Packed: Q1`, then `Runs: 1`, then `Longest: Q`.\n\n" + SEG,
    sample: "runes = \"KKAAAZZZ\" prints\nPacked: K2A3Z3\nRuns: 3\nLongest: A\n\nrunes = \"AABA\" prints\nPacked: A2B1A1\nRuns: 3\nLongest: A\n\nrunes = \"Q\" prints\nPacked: Q1\nRuns: 1\nLongest: Q",
    rows: [
      { name: "Traverses the runes", earns: "Visits every letter of `runes` with a loop, without going past the end (no `substring(i + 1, i + 2)` when `i` is the last index)." },
      { name: "Compares Strings correctly", earns: "Compares one-letter Strings with `equals`, never with `==`." },
      { name: "Measures each run", earns: "Adds 1 to a run counter for each letter and starts it again for each new run, so a letter that comes back later (as in `\"AABA\"`) starts a new run." },
      { name: "Builds the packed form", earns: "Adds each run to a new `String` as its letter followed by its length, in order (`K2`, not `2K`, and not the letter's total count)." },
      { name: "Includes the last run", earns: "The last run, which ends at the end of `runes` with no different letter after it, is added to the packed form and counted (`\"KKAAAZZZ\"` gives `K2A3Z3` and 3 runs)." },
      { name: "Keeps the longest run's letter", earns: "Keeps the length and the letter of the longest run seen, the last run included, and replaces them only for a strictly longer run (`>`, not `>=`), so a tie keeps the first." },
      { name: "Prints the three results", earns: "Prints the three labeled lines once, after the loop, using the values the code computed." },
    ],
    notes: NOTE + " A response may compare each letter with the one before it instead of the one after it. Then the last run is handled after the loop, and rows 5 and 6 require that step. Keeping the previous letter in a variable is fine. Row 6 is not earned with `>=`, because a tie then keeps the last run (`\"ABCD\"` would give `D`).",
    solution: F1,
    verify: { cases: [
      seg('String runes = "KKAAAZZZ";', F1, "Packed: K2A3Z3\nRuns: 3\nLongest: A"),
      seg('String runes = "AABA";', F1, "Packed: A2B1A1\nRuns: 3\nLongest: A"),
      seg('String runes = "Q";', F1, "Packed: Q1\nRuns: 1\nLongest: Q"),
      seg('String runes = "MMMM";', F1, "Packed: M4\nRuns: 1\nLongest: M"),
      seg('String runes = "ABBB";', F1, "Packed: A1B3\nRuns: 2\nLongest: B"),
      seg('String runes = "ABCD";', F1, "Packed: A1B1C1D1\nRuns: 4\nLongest: A"),
      seg('String runes = "XYYZZZ";', F1, "Packed: X1Y2Z3\nRuns: 3\nLongest: Z"),
      seg('String runes = "ABCD";', F1.replace("run > longest", "run >= longest"), "Packed: A1B1C1D1\nRuns: 4\nLongest: D"),
    ] } },

  { id: "u2r-f2", skill: "frq", type: "code", topic: "2.7", title: "The vault code",
    prompt: "The variable `code` has already been declared and holds a positive `int`, the combination of a vault.\n\nWrite a code segment that prints three lines:\n\n- `Digits in `, the original value of `code`, `: `, and the number of digits in `code`\n- `Smallest digit: ` followed by the smallest digit in `code`\n- `Descending: ` followed by `true` if every digit is smaller than the digit to its left, and `false` otherwise. A one-digit number is descending.\n\nFor example, if `code` is `8531`, the code segment prints `Digits in 8531: 4`, then `Smallest digit: 1`, then `Descending: true`. If `code` is `8551`, it prints `Digits in 8551: 4`, then `Smallest digit: 1`, then `Descending: false`, because the second 5 is not smaller than the 5 to its left.\n\nUse a `while` loop that takes the digits off one at a time with `% 10` and `/ 10`. Do not turn the number into a `String`. Write the code segment as it would appear inside `main`. Do not write any methods, and do not use arrays.",
    sample: "code = 8531 prints\nDigits in 8531: 4\nSmallest digit: 1\nDescending: true\n\ncode = 8551 prints\nDigits in 8551: 4\nSmallest digit: 1\nDescending: false",
    rows: [
      { name: "Keeps the original value", earns: "Prints the original value of `code` on the first line, by working on a copy or saving the value before the loop (a loop that divides `code` itself leaves it at 0)." },
      { name: "Repeats once per digit", earns: "Uses a `while` loop that runs while digits remain (`n > 0`) and stops when none are left, so a one-digit number gets exactly one pass." },
      { name: "Takes the digits off", earns: "Gets the last digit with `% 10` and removes it with `/ 10` (or `/= 10`) on every pass." },
      { name: "Counts the digits", earns: "Counts each pass exactly once." },
      { name: "Keeps the smallest digit", earns: "Starts the smallest at a value no digit is above (9, 10, `Integer.MAX_VALUE`, or the first digit taken), never 0, and replaces it with any smaller digit." },
      { name: "Decides descending", earns: "Gives `false` exactly when some digit is equal to or larger than the digit to its left, gives `true` for one digit, and never sets the result back to `true`. With `% 10` the digits come off from the right, so a new digit fails when it is equal to or smaller than the one taken just before it." },
      { name: "Prints the three results", earns: "Prints the three labeled lines once, after the loop, using the values the code computed." },
    ],
    notes: NOTE + " A response that turns `code` into a `String` earns none of rows 2, 3, and 4. Row 5 is not earned when the smallest starts at 0, because then it prints 0 for `8531`. Row 6 is not earned when the comparison points the wrong way (`8531` giving `false`) or when `<` is used where `<=` is needed (`8551` giving `true`).",
    solution: F2,
    verify: { cases: [
      seg("int code = 8531;", F2, "Digits in 8531: 4\nSmallest digit: 1\nDescending: true"),
      seg("int code = 8551;", F2, "Digits in 8551: 4\nSmallest digit: 1\nDescending: false"),
      seg("int code = 7;", F2, "Digits in 7: 1\nSmallest digit: 7\nDescending: true"),
      seg("int code = 1000;", F2, "Digits in 1000: 4\nSmallest digit: 0\nDescending: false"),
      seg("int code = 90;", F2, "Digits in 90: 2\nSmallest digit: 0\nDescending: true"),
      seg("int code = 99;", F2, "Digits in 99: 2\nSmallest digit: 9\nDescending: false"),
      seg("int code = 1358;", F2, "Digits in 1358: 4\nSmallest digit: 1\nDescending: false"),
      seg("int code = 987654321;", F2, "Digits in 987654321: 9\nSmallest digit: 1\nDescending: true"),
      seg("int code = 9854;", F2, "Digits in 9854: 4\nSmallest digit: 4\nDescending: true"),
      seg("int code = 9784;", F2, "Digits in 9784: 4\nSmallest digit: 4\nDescending: false"),
      seg("int code = 8531;", F2.replace("int smallest = 9;", "int smallest = 0;"), "Digits in 8531: 4\nSmallest digit: 0\nDescending: true"),
      seg("int code = 8531;\nint keep = 0;", F2.replace("int n = code;", "int n = code;\ncode = n;").replace("n > 0", "code > 0").replace("code % 10", "x").replace("int d = n % 10;", "int d = code % 10;").replace("n = n / 10;", "code = code / 10;"), "Digits in 0: 4\nSmallest digit: 1\nDescending: true"),
      seg("int code = 8531;", F2.replace("d <= right", "d >= right"), "Digits in 8531: 4\nSmallest digit: 1\nDescending: false"),
      seg("int code = 8551;", F2.replace("d <= right", "d < right"), "Digits in 8551: 4\nSmallest digit: 1\nDescending: true"),
    ] } },

  { id: "u2r-f3", skill: "frq", type: "code", topic: "2.11", title: "Matching letters",
    prompt: "The variable `word` has already been declared and holds a `String` of one or more lowercase letters. A **matching pair** is two different positions in `word` that hold the same letter. In `\"banana\"`, the three `a`s make 3 matching pairs and the two `n`s make 1, so `\"banana\"` has 4 matching pairs.\n\nWrite a code segment that prints three lines:\n\n- `Pairs: ` followed by the number of matching pairs in `word`\n- `Most common: ` followed by the letter that appears the most times in `word`. If two or more letters tie, use the one that appears first in `word`.\n- `All different: ` followed by `true` if no letter appears more than once, and `false` otherwise\n\nFor example, if `word` is `\"banana\"`, the code segment prints `Pairs: 4`, then `Most common: a`, then `All different: false`. If `word` is `\"mississippi\"`, it prints `Pairs: 13`, then `Most common: i` (`i` and `s` both appear 4 times, and `i` appears first), then `All different: false`. If `word` is `\"rune\"`, it prints `Pairs: 0`, then `Most common: r`, then `All different: true`.\n\nUse nested loops: for each letter of `word`, an inner loop compares it with the letters of `word`. " + SEG,
    sample: "word = \"banana\" prints\nPairs: 4\nMost common: a\nAll different: false\n\nword = \"mississippi\" prints\nPairs: 13\nMost common: i\nAll different: false\n\nword = \"rune\" prints\nPairs: 0\nMost common: r\nAll different: true",
    rows: [
      { name: "Visits every letter", earns: "An outer loop visits every letter of `word` without going past the end." },
      { name: "An inner loop for each letter", earns: "An inner loop, inside the outer one and with its own index variable, compares the outer letter with letters of `word` without going past the end." },
      { name: "Compares Strings correctly", earns: "Compares one-letter Strings with `equals`, never with `==`." },
      { name: "Counts each pair once", earns: "Counts a pair only when the second position comes after the first (`j > i`, or an inner loop that starts at `i + 1`), so a letter is never paired with itself and no pair counts twice (`\"banana\"` gives 4, not 8 or 14)." },
      { name: "Counts each letter's appearances", earns: "Counts how many times the outer letter appears in all of `word`, with the count set back to 0 for each new outer letter." },
      { name: "Keeps the most common letter", earns: "Keeps the largest count seen and its letter, replacing them only for a strictly larger count (`>`, not `>=`), so a tie keeps the letter that appears first." },
      { name: "Prints the three results", earns: "Prints the three labeled lines once, after the loops, with `All different` `true` exactly when there are no matching pairs." },
    ],
    notes: NOTE + " The appearance count and the pair count may come from one inner loop or from two. Row 5 is not earned when the count is declared before the outer loop and never set back to 0, because each letter's count then adds onto the last one (`\"aab\"` gives `b`). With `>=` in row 6, `\"abab\"` gives `b`, which does not earn the row.",
    solution: F3,
    verify: { cases: [
      seg('String word = "banana";', F3, "Pairs: 4\nMost common: a\nAll different: false"),
      seg('String word = "mississippi";', F3, "Pairs: 13\nMost common: i\nAll different: false"),
      seg('String word = "rune";', F3, "Pairs: 0\nMost common: r\nAll different: true"),
      seg('String word = "z";', F3, "Pairs: 0\nMost common: z\nAll different: true"),
      seg('String word = "aaaa";', F3, "Pairs: 6\nMost common: a\nAll different: false"),
      seg('String word = "xyzzy";', F3, "Pairs: 2\nMost common: y\nAll different: false"),
      seg('String word = "abcdd";', F3, "Pairs: 1\nMost common: d\nAll different: false"),
      seg('String word = "abab";', F3, "Pairs: 2\nMost common: a\nAll different: false"),
      seg('String word = "abab";', F3.replace("count > most", "count >= most"), "Pairs: 2\nMost common: b\nAll different: false"),
      seg('String word = "aab";', F3, "Pairs: 1\nMost common: a\nAll different: false"),
      seg('String word = "aab";', F3.replace("int pairs = 0;\nint most = 0;", "int pairs = 0;\nint most = 0;\nint count = 0;").replace("    int count = 0;\n", ""), "Pairs: 1\nMost common: b\nAll different: false"),
    ] } },

  { id: "u2r-f4", skill: "frq", type: "code", topic: "2.10", title: "The spellbook",
    prompt: "In the dungeon game, every spell has a name of lowercase letters, and its **power** comes from its letters: each vowel (`a`, `e`, `i`, `o`, or `u`) is worth 3 points, and every other letter is worth 1 point. A **spellbook** is a `String` of one or more spell names, with exactly one space between names and no space at the start or the end.\n\nThis question has two parts. Write both methods.\n\n**(a)** Write the static method `spellPower`, which returns the power of the spell named `name`. For example, `spellPower(\"frost\")` returns 7, because `f`, `r`, `s`, and `t` are worth 1 point each and `o` is worth 3. `spellPower(\"aura\")` returns 10.\n\n**(b)** Write the static method `strongestSpell`, which returns the name of the spell in `spellbook` with the greatest power. If two or more spells tie for the greatest power, return the one that comes first. For example, `strongestSpell(\"frost blaze aura ice\")` returns `\"aura\"`: the powers are 7, 9, 10, and 7. `strongestSpell(\"frost ice\")` returns `\"frost\"`, because both have power 7 and `frost` comes first.\n\nAssume that `spellPower` works as specified, regardless of what you wrote in part (a). You must call `spellPower` appropriately in part (b) to receive full credit. Do not use arrays. " + QR,
    given: "/** Returns the power of name: 3 points for each vowel and 1 point for each other letter.\n *  Precondition: name has at least one lowercase letter.\n */\npublic static int spellPower(String name)\n\n/** Returns the name in spellbook with the greatest power, the first one on a tie.\n *  Precondition: spellbook holds one or more names of lowercase letters, with exactly\n *  one space between names and no space at the start or the end.\n */\npublic static String strongestSpell(String spellbook)",
    sample: "spellPower(\"frost\")                    returns 7\nspellPower(\"aura\")                     returns 10\nspellPower(\"x\")                        returns 1\nstrongestSpell(\"frost blaze aura ice\")  returns \"aura\"\nstrongestSpell(\"frost ice\")             returns \"frost\"\nstrongestSpell(\"ice fire\")              returns \"fire\"\nstrongestSpell(\"blaze\")                 returns \"blaze\"",
    rows: [
      { name: "(a) Traverses the name", earns: "Visits every letter of `name` without going past the end." },
      { name: "(a) Scores each letter", earns: "Adds 3 for a vowel and 1 for any other letter, recognizing vowels with `equals` or `indexOf`, never with `==`." },
      { name: "(a) Returns the power", earns: "Returns the total as an `int` after the loop finishes (not from inside the loop), without printing it." },
      { name: "(b) Finds each name", earns: "Separates `spellbook` into names at the spaces, with no space inside a name, including the last name, which has no space after it." },
      { name: "(b) Calls spellPower", earns: "Calls `spellPower` on each name and uses the value it returns, instead of scoring letters again in part (b)." },
      { name: "(b) Keeps the strongest", earns: "Keeps the greatest power seen and its name, replacing them only for a strictly greater power (`>`, not `>=`), so a tie keeps the first." },
      { name: "(b) Returns the name", earns: "Returns the strongest name as a `String`, not its power, after every name has been checked, without printing it." },
    ],
    notes: NOTE + " Part (b) is scored on its own: a response earns rows 4 to 7 even if part (a) is wrong, as long as part (b) calls `spellPower`. Finding names with `indexOf(\" \")` and `substring` in a loop is fine. Row 4 is not earned when the last name is never checked, because then `strongestSpell(\"ice fire\")` returns `\"ice\"` and `strongestSpell(\"blaze\")` returns `\"\"`.",
    solution: F4,
    verify: { cases: [
      { methods: F4, run: 'System.out.println(spellPower("frost"));\nSystem.out.println(spellPower("aura"));\nSystem.out.println(spellPower("x"));\nSystem.out.println(spellPower("e"));\nSystem.out.println(spellPower("blaze"));\nSystem.out.println(spellPower("ice"));\nSystem.out.println(spellPower("fire"));', out: "7\n10\n1\n3\n9\n7\n8" },
      { methods: F4, run: 'System.out.println(strongestSpell("frost blaze aura ice"));\nSystem.out.println(strongestSpell("frost ice"));\nSystem.out.println(strongestSpell("ice fire"));\nSystem.out.println(strongestSpell("blaze"));\nSystem.out.println(strongestSpell("x"));\nSystem.out.println(strongestSpell("x y z"));\nSystem.out.println(strongestSpell("ice frost bolt aeiou"));', out: "aura\nfrost\nfire\nblaze\nx\nx\naeiou" },
    ] } },

  { id: "u2r-f5", skill: "frq", type: "code", topic: "2.10", title: "Censoring a message",
    prompt: "In the dungeon game, players send each other messages, and some words are banned. Write the static method `censor`, which returns `message` with each appearance of `banned` replaced by `\"***\"`. Appearances are found from left to right and do not overlap: once part of `message` is replaced, the search starts again after it. `message` itself is not changed.\n\nFor example, `censor(\"the orc saw two orcs\", \"orc\")` returns `\"the *** saw two ***s\"`. `censor(\"aaaaa\", \"aa\")` returns `\"******a\"`: the first `aa` and the next `aa` are replaced, and the last `a` is left. `censor(\"goblin\", \"orc\")` returns `\"goblin\"`.\n\n`indexOf` returns -1 when its argument does not appear. Do not use arrays. " + QR,
    given: "/** Returns message with each appearance of banned, found from left to right\n *  without overlapping, replaced by \"***\".\n *  Precondition: banned has at least one character.\n */\npublic static String censor(String message, String banned)",
    sample: "censor(\"the orc saw two orcs\", \"orc\")  returns \"the *** saw two ***s\"\ncensor(\"aaaaa\", \"aa\")                  returns \"******a\"\ncensor(\"goblin\", \"orc\")                returns \"goblin\"\ncensor(\"orc\", \"orc\")                   returns \"***\"",
    rows: [
      { name: "Finds an appearance", earns: "Finds where `banned` appears with `indexOf(banned)`, or by comparing `substring(i, i + banned.length())` with `banned` using `equals`." },
      { name: "Repeats until none are left", earns: "Uses a loop that stops when `indexOf` returns -1 (or when no piece of full length is left), and that makes no replacement when `banned` does not appear." },
      { name: "Keeps the text before", earns: "Keeps the characters before each appearance, in order." },
      { name: "Replaces each appearance", earns: "Adds `\"***\"` once for each appearance and leaves out the characters of `banned`." },
      { name: "Moves past the whole appearance", earns: "Starts the next search after the end of the appearance (`pos + banned.length()`), so appearances do not overlap and the loop cannot run forever (`censor(\"aaaaa\", \"aa\")` returns `\"******a\"`)." },
      { name: "Keeps the text after the last appearance", earns: "Adds the characters after the last appearance, all of `message` when `banned` does not appear, and nothing extra when `banned` is at the very end (`censor(\"orc\", \"orc\")` returns `\"***\"`)." },
      { name: "Returns the result", earns: "Returns the new `String` without printing it." },
    ],
    notes: NOTE + " A response that calls `replace` or `replaceAll`, which are not on the Java Quick Reference, earns only row 7. Row 5 is not earned when the search starts again only one character later (`censor(\"aaaaa\", \"aa\")` then returns `\"************a\"`) or at the same place (the loop never ends). Changing `message` inside the method is fine, because a `String` passed to a method is not changed for the caller.",
    solution: F5,
    verify: { cases: [
      { methods: F5, run: 'System.out.println(censor("the orc saw two orcs", "orc"));\nSystem.out.println(censor("aaaaa", "aa"));\nSystem.out.println(censor("goblin", "orc"));\nSystem.out.println(censor("orc", "orc"));', out: "the *** saw two ***s\n******a\ngoblin\n***" },
      { methods: F5, run: 'System.out.println(censor("orcs and orc", "orc"));\nSystem.out.println(censor("x", "orc"));\nSystem.out.println(censor("ababab", "b"));\nSystem.out.println("[" + censor("", "orc") + "]");\nString m = "trolls";\nString c = censor(m, "troll");\nSystem.out.println(c + " " + m);', out: "***s and ***\nx\na***a***a***\n[]\n***s trolls" },
      { methods: F5.replace("pos + banned.length()", "pos + 1"), run: 'System.out.println(censor("aaaaa", "aa"));', out: "************a" },
    ] } },

  { id: "u2r-f6", skill: "frq", type: "code", topic: "2.11", title: "Breaking the armor",
    prompt: "In the dungeon game, a hero attacks by rolling two dice, a red one and a blue one. Each die has faces numbered from 1 to `sides`, so there are `sides * sides` possible rolls. A red 2 with a blue 5 and a red 5 with a blue 2 are different rolls. The **damage** of a roll is the sum of the two faces, except that **doubles** (the same number on both dice) do twice that sum.\n\nWrite the static method `waysToBreak`, which returns the number of possible rolls whose damage is at least `armor`.\n\nFor example, `waysToBreak(4, 7)` returns 5. With faces 1 to 4, the rolls that do at least 7 damage are red 3 with blue 4 (7 damage), red 4 with blue 3 (7), and the doubles 2 and 2 (8), 3 and 3 (12), and 4 and 4 (16). `waysToBreak(1, 4)` returns 1: the only roll is 1 and 1, which is doubles and does 4 damage.\n\nUse nested loops. Do not use arrays.",
    given: "/** Returns the number of rolls of a red die and a blue die, each with faces 1 to sides,\n *  whose damage is at least armor. The damage is red + blue, doubled when red equals blue.\n *  Precondition: sides >= 1, armor >= 0\n */\npublic static int waysToBreak(int sides, int armor)",
    sample: "waysToBreak(4, 7)   returns 5\nwaysToBreak(1, 4)   returns 1\nwaysToBreak(1, 5)   returns 0\nwaysToBreak(6, 2)   returns 36\nwaysToBreak(3, 6)   returns 2",
    rows: [
      { name: "Every red face", earns: "An outer loop gives the red die every value from 1 to `sides`, inclusive." },
      { name: "Every blue face, for each red face", earns: "An inner loop, inside the outer one, gives the blue die every value from 1 to `sides`, inclusive, so all `sides * sides` rolls are checked." },
      { name: "The damage of a roll", earns: "Computes the damage of a roll that is not doubles as the sum of the two faces." },
      { name: "Doubles", earns: "Doubles the sum exactly when the two faces are equal (`red == blue`)." },
      { name: "At least armor", earns: "Counts a roll when its damage is greater than or equal to `armor` (`>=`, not `>`)." },
      { name: "Counts across all rolls", earns: "Starts the count at 0 once, before the outer loop, and adds 1 for each roll that breaks the armor, without setting the count back to 0 inside the outer loop." },
      { name: "Returns the count", earns: "Returns the count after both loops finish, without printing it." },
    ],
    notes: NOTE + " Rows 1 and 2 are not earned when a loop starts at 0 or stops before `sides` (`i < sides` with `i` starting at 1). An inner loop that starts at the red face counts a red 3 with a blue 4 but not a red 4 with a blue 3, and does not earn row 2. With `>` in row 5, `waysToBreak(4, 7)` returns 3, which does not earn the row.",
    solution: F6,
    verify: { cases: [
      { methods: F6, run: "System.out.println(waysToBreak(4, 7));\nSystem.out.println(waysToBreak(1, 4));\nSystem.out.println(waysToBreak(1, 5));\nSystem.out.println(waysToBreak(6, 2));\nSystem.out.println(waysToBreak(3, 6));", out: "5\n1\n0\n36\n2" },
      { methods: F6, run: "System.out.println(waysToBreak(6, 13));\nSystem.out.println(waysToBreak(6, 100));\nSystem.out.println(waysToBreak(6, 0));\nSystem.out.println(waysToBreak(2, 6));\nSystem.out.println(waysToBreak(6, 11));", out: "3\n0\n36\n1\n6" },
      { methods: F6.replace("damage >= armor", "damage > armor"), run: "System.out.println(waysToBreak(4, 7));", out: "3" },
      { methods: F6.replace("int blue = 1;", "int blue = red;"), run: "System.out.println(waysToBreak(4, 7));", out: "4" },
    ] } },
];

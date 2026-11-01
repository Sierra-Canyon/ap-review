// AP CSA Unit 2 Test Practice 2 and 3: two mock forms in the shape of U2T.
// Each form: 20 multiple choice (2.3, 2.3, 2.5, 2.6, 2.5, 2.6, 2.8, 2.7, 2.9, 2.9, 2.8, 2.10 x4, 2.11 x3, 2.12 x2), then one 7-row free response.
// Settings: weather readings, a music playlist, a library, a parking garage, a recipe, a video game score table.
// In every mcq the key is written first and answer is 0 (the site shuffles).

const QR = "Use only `String` methods from the Java Quick Reference: `length`, `substring`, `indexOf`, `equals`, and `compareTo`.";
const NOTE = "One point for each row. Award a row for what the code actually does; ignore small typing slips that do not change the logic.";
const ind = (s, n) => s.split("\n").map((l) => " ".repeat(n) + l).join("\n");

// Checks two boolean expressions against each other over a grid of int values and prints "same" or "differs".
const equiv = (a, b, orig, alt, lo, hi) => `boolean same = true;
for (int ${a} = ${lo}; ${a} <= ${hi}; ${a}++)
{
    for (int ${b} = ${lo}; ${b} <= ${hi}; ${b}++)
    {
        if ((${orig}) != (${alt}))
        {
            same = false;
        }
    }
}
System.out.println(same ? "same" : "differs");`;

const equiv1 = (a, orig, alt, lo, hi) => `boolean same = true;
for (int ${a} = ${lo}; ${a} <= ${hi}; ${a}++)
{
    if ((${orig}) != (${alt}))
    {
        same = false;
    }
}
System.out.println(same ? "same" : "differs");`;

const equivHW = (orig, alt) => `boolean same = true;
for (int height = 70; height <= 100; height++)
{
    for (int weight = 5980; weight <= 6020; weight++)
    {
        if ((${orig}) != (${alt}))
        {
            same = false;
        }
    }
}
System.out.println(same ? "same" : "differs");`;

// ---------- Practice 2 code ----------

const P2_02 = `int fee;
if (hours < 2)
{
    fee = 0;
}
else if (hours <= 4)
{
    fee = 6;
}
else if (hours > 9)
{
    fee = 25;
}
else if (hours < 8)
{
    fee = 12;
}
else
{
    fee = 18;
}`;

const P2_19 = `int sum = 0;
for (int i = 0; i < 10; i += 2)
{
    for (int j = i; j < 10; j++)
    {
        sum += j;
    }
}`;

const P2_20 = `int pages = 1000;
int steps = 0;
while (pages > 1)
{
    pages = pages / 2;
    steps++;
}`;

const P2F = `int parked = 0;
int most = 0;
int turnedAway = 0;
for (int i = 0; i < log.length(); i++)
{
    String e = log.substring(i, i + 1);
    if (e.equals("I"))
    {
        if (parked < capacity)
        {
            parked++;
        }
        else
        {
            turnedAway++;
        }
    }
    else if (e.equals("O"))
    {
        parked--;
    }
    if (parked > most)
    {
        most = parked;
    }
}
System.out.println("Parked now: " + parked);
System.out.println("Most at once: " + most);
System.out.println("Turned away: " + turnedAway);`;

const garage = (log, cap, out) => ({ run: `String log = "${log}";\nint capacity = ${cap};\n` + P2F, out });

// ---------- Practice 3 code ----------

const P3_02 = `String notice;
if (days == 0)
{
    notice = "none";
}
else if (days < 4)
{
    notice = "reminder";
}
else if (days % 7 == 0)
{
    notice = "call";
}
else if (days <= 10)
{
    notice = "letter";
}
else
{
    notice = "hold";
}`;

const P3_19 = `int count = 0;
for (int i = 1; i <= 4; i++)
{
    int j = i;
    while (j < 8)
    {
        j += 2;
        count++;
    }
}`;

const P3_20 = `int steps = 0;
for (int i = 1; i <= n; i++)
{
    for (int j = 1; j <= n; j++)
    {
        steps++;
    }
}`;

const P3F = `public static int levelScore(String run)
{
    int score = 0;
    int i = 0;
    boolean quit = false;
    while (i < run.length() && !quit)
    {
        String e = run.substring(i, i + 1);
        if (e.equals("c"))
        {
            score += 1;
        }
        else if (e.equals("g"))
        {
            score += 5;
            if (i > 0 && run.substring(i - 1, i).equals("g"))
            {
                score += 3;
            }
        }
        else if (e.equals("t"))
        {
            score = score / 2;
        }
        else if (e.equals("q"))
        {
            quit = true;
        }
        i++;
    }
    return score;
}`;

const practice2 = [
  { id: "u2p2-01", skill: "if", type: "mcq", topic: "2.3",
    stem: "Consider the following code segment.",
    code: `int temp = 52;
String label = "hot";
if (temp < 85)
{
    label = "warm";
}
if (temp < 65)
{
    label = "mild";
}
if (temp < 45)
{
    label = "cold";
}
System.out.println(label);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["mild", "warm", "cold", "hot"], mono: true,
    why: [
      "These are three separate if statements, not an else if chain, so every test is checked. `temp < 85` and `temp < 65` are both true, and the second assignment replaces the first.",
      "That is the answer for an else if chain, where the first true test wins. Separate if statements are each checked, so a later true test replaces the label.",
      "`52 < 45` is false, so the last assignment never runs.",
      "\"hot\" is only the starting value. `temp < 85` is true, so it is replaced.",
    ],
    answer: 0,
    verify: { out: "mild" } },

  { id: "u2p2-02", skill: "if", type: "mcq", topic: "2.3",
    stem: "In a parking garage, the following code segment sets the fee for a stay of `hours` hours, where `hours` is an `int` from 0 to 12.",
    code: P2_02,
    question: "For which values of `hours` is `fee` set to 12?",
    choices: ["5, 6, and 7", "4, 5, 6, and 7", "5, 6, 7, and 8", "every value from 0 to 7"],
    why: [
      "A value reaches the `hours < 8` test only if every test above it was false: at least 2, more than 4, and not more than 9. Of those, 5, 6, and 7 are less than 8.",
      "4 is caught by `hours <= 4` first, so the chain never reaches the test that sets 12.",
      "This reads `hours < 8` as `hours <= 8`. 8 is not less than 8, so 8 falls through to the else.",
      "`hours < 8` is only reached when the tests above it are false. Smaller values are caught earlier in the chain.",
    ],
    answer: 0,
    verify: { cases: [
      { run: `for (int hours = 0; hours <= 12; hours++)\n{\n${ind(P2_02, 4)}\n    if (fee == 12)\n    {\n        System.out.print(hours + " ");\n    }\n}`, out: "5 6 7" },
    ] } },

  { id: "u2p2-03", skill: "bool", type: "mcq", topic: "2.5",
    stem: "Consider the following code segment from a recipe app.",
    code: `int cups = 6;
int servings = 0;
if (servings == 0 || cups / servings < 2)
{
    System.out.println("scale up");
}
else
{
    System.out.println("enough");
}`,
    question: "What is the result of executing the code segment?",
    choices: ["scale up", "Nothing is printed. An ArithmeticException is thrown.", "enough", "Nothing is printed. The code segment does not compile."],
    why: [
      "`servings == 0` is true, so `||` already knows the whole condition is true and never evaluates `cups / servings`. The if branch runs.",
      "Dividing by 0 would throw it, but `||` stops as soon as its left side is true. The division is never done.",
      "The else runs only when the whole condition is false. With `||`, one true side is enough, and the left side is true.",
      "Both sides are boolean expressions joined by `||`, so the code compiles.",
    ],
    answer: 0,
    verify: { out: "scale up" } },

  { id: "u2p2-04", skill: "bool", type: "mcq", topic: "2.6",
    stem: "Consider the following expression, where `wind` and `rain` are `int` variables.",
    code: `!(wind > 7 && rain <= 2)`,
    question: "Which of the following is equivalent to the expression for all integer values of `wind` and `rain`?",
    choices: ["wind <= 7 || rain > 2", "wind <= 7 && rain > 2", "wind < 7 || rain > 2", "wind <= 7 || rain >= 2"], mono: true,
    why: [
      "The opposite of `p && q` is `!p || !q`. The opposite of `>` is `<=`, and the opposite of `<=` is `>`.",
      "The `&&` has to become `||` as well. Try `wind` equal to 8 and `rain` equal to 5: the original is true, and this is false.",
      "The opposite of `>` is `<=`, not `<`. Try `wind` equal to 7 and `rain` equal to 0: the original is true, and this is false.",
      "The opposite of `<=` is `>`, not `>=`. Try `wind` equal to 8 and `rain` equal to 2: the original is false, and this is true.",
    ],
    answer: 0,
    verify: { cases: [
      { run: equiv("wind", "rain", "!(wind > 7 && rain <= 2)", "wind <= 7 || rain > 2", -5, 15), out: "same" },
      { run: equiv("wind", "rain", "!(wind > 7 && rain <= 2)", "wind <= 7 && rain > 2", -5, 15), out: "differs" },
      { run: equiv("wind", "rain", "!(wind > 7 && rain <= 2)", "wind < 7 || rain > 2", -5, 15), out: "differs" },
      { run: equiv("wind", "rain", "!(wind > 7 && rain <= 2)", "wind <= 7 || rain >= 2", -5, 15), out: "differs" },
    ] } },

  { id: "u2p2-05", skill: "bool", type: "mcq", topic: "2.5",
    stem: "A playlist has 15 tracks. Consider the following code segment.",
    code: `int count = 0;
for (int track = 1; track <= 15; track++)
{
    if (track > 9 || track % 3 == 0 && track < 5)
    {
        count++;
    }
}
System.out.println(count);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["7", "1", "12", "8"], mono: true,
    why: [
      "`&&` is done before `||`: the condition is true for every track above 9, and also for multiples of 3 below 5, which is only 3.",
      "This groups the `||` first, so every track would also have to be below 5. Without parentheses, `&&` binds tighter, so `track > 9` stands on its own.",
      "This reads `&&` as `||`. A multiple of 3 counts only when it is also below 5.",
      "This also counts 9. The test is `track > 9`.",
    ],
    answer: 0,
    verify: { out: "7" } },

  { id: "u2p2-06", skill: "bool", type: "mcq", topic: "2.6",
    stem: "A music app skips a song when `secs < 90 || secs > 300`, where `secs` is the length of the song in seconds.",
    question: "Which of the following is true exactly when the song is NOT skipped, for every integer value of `secs`?",
    choices: ["secs >= 90 && secs <= 300", "secs >= 90 || secs <= 300", "secs > 90 && secs < 300", "secs <= 90 && secs >= 300"], mono: true,
    why: [
      "Not skipped means long enough AND short enough. De Morgan turns `||` into `&&` and flips both comparisons: the opposite of `<` is `>=`, and the opposite of `>` is `<=`.",
      "Every number is at least 90 or at most 300, so this is always true. The `||` has to become `&&`.",
      "A song of exactly 90 or exactly 300 seconds is not skipped. The opposite of `<` is `>=`, not `>`.",
      "No number is both at most 90 and at least 300, so this is never true.",
    ],
    answer: 0,
    verify: { cases: [
      { run: equiv1("secs", "!(secs < 90 || secs > 300)", "secs >= 90 && secs <= 300", 0, 400), out: "same" },
      { run: equiv1("secs", "!(secs < 90 || secs > 300)", "secs >= 90 || secs <= 300", 0, 400), out: "differs" },
      { run: equiv1("secs", "!(secs < 90 || secs > 300)", "secs > 90 && secs < 300", 0, 400), out: "differs" },
      { run: equiv1("secs", "!(secs < 90 || secs > 300)", "secs <= 90 && secs >= 300", 0, 400), out: "differs" },
    ] } },

  { id: "u2p2-07", skill: "for", type: "mcq", topic: "2.8",
    stem: "A weather station adds up the rainfall on certain days. Consider the following code segment.",
    code: `int total = 0;
for (int day = 3; day < 21; day += 3)
{
    if (day % 2 == 1)
    {
        total += day;
    }
}
System.out.println(total);`,
    question: "What is printed, and how many times does the body of the loop run?",
    choices: ["27, and the body runs 6 times", "48, and the body runs 7 times", "36, and the body runs 6 times", "27, and the body runs 3 times"],
    why: [
      "`day` takes the values 3, 6, 9, 12, 15, and 18, so the body runs 6 times. Only the odd ones, 3, 9, and 15, are added.",
      "This also runs with `day` equal to 21. The test is `day < 21`.",
      "This adds the even values. `day % 2 == 1` is true for the odd ones.",
      "The sum is right, but the body runs on every pass, not only when the if is true.",
    ],
    answer: 0,
    verify: { out: "27" } },

  { id: "u2p2-08", skill: "while", type: "mcq", topic: "2.7",
    stem: "The snow on a roof melts during a warm afternoon. Consider the following code segment.",
    code: `int snow = 50;
int hours = 0;
while (snow > 20 && hours < 8)
{
    snow -= 7;
    hours++;
}
System.out.println(hours + " " + snow);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["5 15", "4 22", "8 -6", "6 8"], mono: true,
    why: [
      "The loop keeps going only while both tests are true. After 5 passes `snow` is 15, so `snow > 20` is false and the loop stops.",
      "After 4 passes `snow` is 22, and `22 > 20` is still true, so one more pass runs. The test is checked before each pass, not partway through one.",
      "This keeps going until both tests are false, as if the condition used `||`. With `&&`, the loop stops as soon as either test is false.",
      "This runs one pass too many. The loop stops at the first check where `snow` is not more than 20.",
    ],
    answer: 0,
    verify: { out: "5 15" } },

  { id: "u2p2-09", skill: "algo", type: "mcq", topic: "2.9",
    stem: "In a video game, a player builds a streak, and each scoring round adds the current streak to the score. Consider the following code segment.",
    code: `int score = 0;
int streak = 0;
for (int round = 1; round <= 8; round++)
{
    if (round % 3 != 0)
    {
        streak++;
        score += streak;
    }
    else
    {
        streak = 0;
    }
}
System.out.println(score + " " + streak);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["9 2", "21 6", "6 2", "2 0"], mono: true,
    why: [
      "Trace it round by round: on rounds that are not multiples of 3 the streak grows and its new value is added, and on rounds 3 and 6 the streak goes back to 0.",
      "This never resets the streak. On rounds 3 and 6 the else sets `streak` back to 0.",
      "This adds 1 for each scoring round. The code adds `streak`, which is 1 or 2 here.",
      "This scores on rounds 3 and 6 instead. `round % 3 != 0` is true on every round that is NOT a multiple of 3.",
    ],
    answer: 0,
    verify: { out: "9 2" } },

  { id: "u2p2-10", skill: "algo", type: "mcq", topic: "2.9",
    stem: "A weather station takes five readings on a cold night. Consider the following code segment.",
    code: `int warmest = 0;
for (int hour = 1; hour <= 5; hour++)
{
    int temp = hour * 3 - 20;
    if (temp > warmest)
    {
        warmest = temp;
    }
}
System.out.println(warmest);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["0", "-5", "-17", "-55"], mono: true,
    why: [
      "Every reading is below 0, so `temp > warmest` is never true and `warmest` keeps its starting value. A running maximum should start at the first reading or at `Integer.MIN_VALUE`, not at 0.",
      "-5 is the warmest reading, but it never replaces the starting 0, because no reading is bigger than 0.",
      "-17 is the coldest reading. The test `temp > warmest` keeps a larger value, and no reading is larger than 0.",
      "That is the sum of the readings. The if keeps one value; it does not add them up.",
    ],
    answer: 0,
    verify: { out: "0" } },

  { id: "u2p2-11", skill: "for", type: "mcq", topic: "2.8",
    stem: "Consider the following code segment.",
    code: `for (int k = 20; k > 2; k -= 3)
{
    System.out.print("~");
}`,
    question: "How many times is `~` printed?",
    choices: ["6", "7", "18", "3"], mono: true,
    why: [
      "`k` takes the values 20, 17, 14, 11, 8, and 5. The next value, 2, is not greater than 2, so the loop stops.",
      "This lets `k` reach 2. The test is `k > 2`, and 2 is not greater than 2.",
      "This counts every value from 20 down to 3. `k` goes down by 3 each pass.",
      "That is the step, not a count. Write out the values `k` takes and count them.",
    ],
    answer: 0,
    verify: { out: "~~~~~~" } },

  { id: "u2p2-12", skill: "string", type: "mcq", topic: "2.10",
    stem: "A playlist stores one letter for the genre of each song, in order. Consider the following code segment.",
    code: `String genres = "RRJPPPJR";
int repeats = 0;
for (int i = 1; i < genres.length(); i++)
{
    String now = genres.substring(i, i + 1);
    String before = genres.substring(i - 1, i);
    if (now.equals(before))
    {
        repeats++;
    }
}
System.out.println(repeats);`,
    question: "What is the result of executing the code segment?",
    choices: ["3", "Nothing is printed. A StringIndexOutOfBoundsException is thrown.", "2", "5"],
    why: [
      "Each pass compares the letter at `i` with the letter just before it. RR gives one match, and PPP gives two: the pair at indexes 3 and 4, and the pair at indexes 4 and 5.",
      "That would happen with `i` starting at 0, because `genres.substring(-1, 0)` is out of range. Starting at 1 keeps the index before `i` at 0 or more.",
      "This counts PPP once. The code checks each pair of neighbors, and PPP holds two matching pairs.",
      "This counts the letters that belong to a repeat. The code adds 1 for each pair of neighbors that match, not for each letter.",
    ],
    answer: 0,
    verify: { out: "3" } },

  { id: "u2p2-13", skill: "string", type: "mcq", topic: "2.10",
    stem: "A library call number is stored in `code`. Consider the following code segment.",
    code: `String code = "QA76.73";
String t = "";
for (int i = 0; i < code.length(); i++)
{
    String ch = code.substring(i, i + 1);
    if ("0123456789".indexOf(ch) >= 0)
    {
        t = ch + t;
    }
}
System.out.println(t);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["3767", "7673", ".AQ", "767"], mono: true,
    why: [
      "Only digits pass the test, because `\"0123456789\".indexOf(ch)` is -1 for any other character. `ch + t` puts each digit in front, so the digits come out in reverse order.",
      "This adds each digit to the end. `t = ch + t` puts the new digit in front.",
      "This keeps the characters that are not digits. `indexOf` returns -1 for those, and the test keeps only results of 0 or more.",
      "This stops before the last character. The loop runs while `i < code.length()`, so the last 3 is kept too.",
    ],
    answer: 0,
    verify: { out: "3767" } },

  { id: "u2p2-14", skill: "string", type: "mcq", topic: "2.10",
    stem: "Consider the following code segment, which looks for \"lal\" in a song lyric.",
    code: `String tune = "lalalaland";
int n = 0;
int at = tune.indexOf("lal");
while (at >= 0)
{
    n++;
    tune = tune.substring(at + 1);
    at = tune.indexOf("lal");
}
System.out.println(n + " " + tune);`,
    question: "What is the result of executing the code segment?",
    choices: ["3 aland", "2 and", "3 lalalaland", "Nothing is printed, because the loop never ends."],
    why: [
      "Each pass cuts `tune` just after the start of the match it found, so a match that overlaps the last one is still found. \"lal\" starts at 0, 2, and 4 in the original String, and the third cut leaves \"aland\".",
      "That is what cutting off the whole match each time would give, which skips a match that overlaps it. The code cuts only one character past the start.",
      "`tune` is reassigned on every pass, so the String printed is what is left after the last cut.",
      "Each pass makes `tune` shorter and looks for \"lal\" again, so it runs out of matches and the loop ends.",
    ],
    answer: 0,
    verify: { out: "3 aland" } },

  { id: "u2p2-15", skill: "string", type: "mcq", topic: "2.10",
    stem: "A library shelves its books in alphabetical order by title. Consider the following code segment.",
    code: `String t1 = "Dune";
String t2 = "Dunes";
String t3 = "Dracula";
String last = t1;
if (t2.compareTo(last) > 0)
{
    last = t2;
}
if (t3.compareTo(last) > 0)
{
    last = t3;
}
System.out.println(last);`,
    question: "What is the result of executing the code segment?",
    choices: ["Dunes", "Dune", "Dracula", "Nothing is printed. The code segment does not compile."],
    why: [
      "When one String is the start of the other, the shorter one comes first, so `t2.compareTo(last)` is positive and `last` becomes \"Dunes\". \"Dracula\" comes before \"Dunes\", because r comes before u.",
      "\"Dune\" is the start of \"Dunes\", and the shorter String comes first. A positive result means `t2` comes after `last`, so `last` is replaced.",
      "This keeps the title that comes first. `compareTo` returns a positive number when the String it is called on comes later.",
      "`compareTo` returns an `int`, and comparing an `int` with 0 is a boolean expression, so the code compiles.",
    ],
    answer: 0,
    verify: { out: "Dunes" } },

  { id: "u2p2-16", skill: "nested", type: "mcq", topic: "2.11",
    stem: "A parking garage has 4 levels, and level `level` has `2 * level` spaces. Consider the following code segment.",
    code: `int spaces = 0;
for (int level = 1; level <= 4; level++)
{
    for (int s = 0; s < 2 * level; s++)
    {
        spaces++;
    }
}
System.out.println(spaces);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["20", "32", "24", "8"], mono: true,
    why: [
      "The inner loop runs `2 * level` times: 2, 4, 6, and 8. Add them up.",
      "That is 4 times 8, as if every inner loop ran 8 times. The inner loop is shorter on the lower levels.",
      "This also runs with `s` equal to `2 * level`. The test is `s < 2 * level`.",
      "That is only the last inner loop. The inner loop runs again, from 0, on every pass of the outer loop.",
    ],
    answer: 0,
    verify: { out: "20" } },

  { id: "u2p2-17", skill: "nested", type: "mcq", topic: "2.11",
    stem: "Consider the following code segment.",
    code: `for (int row = 3; row >= 1; row--)
{
    for (int col = 1; col <= 3; col++)
    {
        if (col >= row)
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
    question: "What is printed as a result of executing the code segment?",
    choices: ["..#\n.##\n###", "###\n.##\n..#", "##.\n#..\n...", "..#.#####"], mono: true,
    why: [
      "`row` counts down from 3, and a column gets # when `col >= row`. The first line has one #, and each later line has one more.",
      "This prints the rows in the wrong order. `row` starts at 3, so only column 3 passes `col >= row` on the first line.",
      "This swaps # and the dot. The if prints # when `col >= row` is true.",
      "This never ends a line. `println()` after the inner loop starts a new line for each row.",
    ],
    answer: 0,
    verify: { out: "..#\n.##\n###" } },

  { id: "u2p2-18", skill: "nested", type: "mcq", topic: "2.11",
    stem: "A parking garage map lists its spots level by level, 4 spots per level: \"X\" is a taken spot and \".\" is a free one. Consider the following code segment.",
    code: `String garage = "X..XXXX..X.X";
int width = 4;
for (int level = 0; level < garage.length() / width; level++)
{
    int free = 0;
    for (int s = 0; s < width; s++)
    {
        int at = level * width + s;
        if (garage.substring(at, at + 1).equals("."))
        {
            free++;
        }
    }
    System.out.print(free + " ");
}`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["2 1 2", "2 3 5", "2 2 1", "5"], mono: true,
    why: [
      "`level * width + s` is the index of spot `s` on that level. `free` starts again at 0 for each level, so each number counts the free spots on one level.",
      "This keeps adding from one level to the next. `free` is declared inside the outer loop, so it is set back to 0 for each level.",
      "`level + s` is not the index of a spot. Each level starts `width` characters after the one before, at `level * width`.",
      "That is the total for the whole garage. The print is inside the outer loop, so it prints once per level.",
    ],
    answer: 0,
    verify: { out: "2 1 2" } },

  { id: "u2p2-19", skill: "runtime", type: "mcq", topic: "2.12",
    stem: "Consider the following code segment.",
    code: P2_19,
    question: "How many times is the statement `sum += j;` executed?",
    choices: ["30", "50", "55", "100"], mono: true,
    why: [
      "`i` takes the values 0, 2, 4, 6, and 8, and the inner loop runs from `i` up to 9: 10, 8, 6, 4, and 2 times. Add them.",
      "That is 5 outer passes times 10, as if the inner loop always started at 0. It starts at `i`, so it gets shorter.",
      "This counts `i` going up by 1. With `i += 2`, there are only 5 outer passes.",
      "That is 10 times 10. The outer loop runs only 5 times, and the inner loop gets shorter as `i` grows.",
    ],
    answer: 0,
    verify: { cases: [
      { run: P2_19.replace("sum += j;", "sum += j;\n        runs++;").replace("int sum = 0;", "int sum = 0;\nint runs = 0;") + "\nSystem.out.println(runs);", out: "30" },
    ] } },

  { id: "u2p2-20", skill: "runtime", type: "mcq", topic: "2.12",
    stem: "A search through a 1000-page library book keeps cutting the pages left to check in half. Consider the following code segment.",
    code: P2_20,
    question: "How many times does the body of the loop run?",
    choices: ["9", "10", "500", "999"], mono: true,
    why: [
      "Integer division halves `pages` each pass: 500, 250, 125, 62, 31, 15, 7, 3, 1. That is 9 passes, and then `pages > 1` is false. Halving gets down to 1 in very few steps.",
      "This also runs when `pages` equals 1. The test is `pages > 1`.",
      "That is the value of `pages` after one pass, not a count of passes.",
      "That is how many passes subtracting 1 would take. Halving gets there much faster.",
    ],
    answer: 0,
    verify: { cases: [
      { run: P2_20 + "\nSystem.out.println(steps);", out: "9" },
    ] } },

  { id: "u2p2-frq", skill: "frq", type: "code", topic: "2.10", title: "The parking garage",
    prompt: "A parking garage keeps a log of the day as a `String` with one letter for each event: `\"I\"` is a car that wants to come in, and `\"O\"` is a car that leaves. The garage holds at most `capacity` cars. A car that wants to come in when the garage is full is **turned away** and does not come in. The variables `log` (a `String` of at least one letter, each one `\"I\"` or `\"O\"`) and `capacity` (an `int`, at least 1) have already been declared and given values. The garage is empty at the start of the day, and an `\"O\"` never appears when the garage is empty.\n\nWrite a code segment that prints three lines:\n\n- `Parked now: ` followed by the number of cars in the garage after the last event\n- `Most at once: ` followed by the largest number of cars that were in the garage at the same time\n- `Turned away: ` followed by the number of cars that were turned away\n\nFor example, if `capacity` is 3 and `log` is `\"IIOIIIIOOI\"`, the code segment prints\n\n```\nParked now: 2\nMost at once: 3\nTurned away: 2\n```\n\nWrite the code segment as it would appear inside `main`. Do not write any methods, and do not use arrays. " + QR,
    sample: "capacity = 3, log = \"IIOIIIIOOI\" prints\nParked now: 2\nMost at once: 3\nTurned away: 2\n\ncapacity = 1, log = \"IIIO\" prints\nParked now: 0\nMost at once: 1\nTurned away: 2",
    rows: [
      { name: "Traverses the log", earns: "Visits every letter of `log` with a loop, without going past the end (for example `i < log.length()` with `substring(i, i + 1)`)." },
      { name: "Compares Strings correctly", earns: "Compares one-letter Strings with `equals`, never with `==`." },
      { name: "Lets a car in only when there is room", earns: "On an `\"I\"`, adds 1 to the number of cars parked only when that number is less than `capacity`." },
      { name: "Counts the cars turned away", earns: "On an `\"I\"` when the number parked equals `capacity`, adds 1 to a turned-away count and leaves the number parked unchanged." },
      { name: "Lets a car out", earns: "On an `\"O\"`, subtracts 1 from the number of cars parked." },
      { name: "Keeps the most at once", earns: "Keeps the largest number parked at any point in the day, starting from 0 and updated inside the loop, not only after the last event (`\"IIIOO\"` with `capacity` 5 gives 3)." },
      { name: "Prints the three results", earns: "Prints the three labeled lines once, after the loop, using the values the code computed." },
    ],
    notes: NOTE + " A response that compares the number parked with `capacity` using `<=` lets one car too many in, and does not earn row 3; row 4 is then judged on its own. Row 6 is not earned by printing `capacity` or by counting the `\"I\"` letters.",
    solution: P2F,
    verify: { cases: [
      garage("IIOIIIIOOI", 3, "Parked now: 2\nMost at once: 3\nTurned away: 2"),
      garage("IIIO", 1, "Parked now: 0\nMost at once: 1\nTurned away: 2"),
      garage("IIIOO", 5, "Parked now: 1\nMost at once: 3\nTurned away: 0"),
      garage("IOIOIO", 2, "Parked now: 0\nMost at once: 1\nTurned away: 0"),
      garage("I", 2, "Parked now: 1\nMost at once: 1\nTurned away: 0"),
      garage("IOIII", 4, "Parked now: 3\nMost at once: 3\nTurned away: 0"),
      garage("IIIIOIII", 2, "Parked now: 2\nMost at once: 2\nTurned away: 4"),
    ] } },
];

const practice3 = [
  { id: "u2p3-01", skill: "if", type: "mcq", topic: "2.3",
    stem: "A parking garage sets its fee from the number of minutes a car stays. Consider the following code segment.",
    code: `int minutes = 25;
int fee;
if (minutes <= 240)
{
    fee = 15;
}
else if (minutes <= 120)
{
    fee = 8;
}
else if (minutes <= 30)
{
    fee = 0;
}
else
{
    fee = 25;
}
System.out.println(fee);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["15", "0", "8", "25"], mono: true,
    why: [
      "`25 <= 240` is true, so the first branch runs and the rest of the chain is skipped, even though the later tests are true too. The tests are in the wrong order for a fee table.",
      "0 is meant for a short stay, but an else if is only tested when everything above it was false. The first test is already true.",
      "Once one branch of an if and else if chain runs, the others are skipped.",
      "The else runs only when every test is false, and `minutes <= 240` is true.",
    ],
    answer: 0,
    verify: { out: "15" } },

  { id: "u2p3-02", skill: "if", type: "mcq", topic: "2.3",
    stem: "A library sends a notice for a book that is `days` days late, where `days` is an `int` from 0 to 14. Consider the following code segment.",
    code: P3_02,
    question: "For which values of `days` is `notice` set to \"letter\"?",
    choices: ["4, 5, 6, 8, 9, and 10", "4, 5, 6, 7, 8, 9, and 10", "5, 6, 8, 9, and 10", "every value from 1 to 10 except 7"],
    why: [
      "A value reaches the letter test only if every test above it was false: not 0, at least 4, and not a multiple of 7. Of those, the values up to 10 get a letter.",
      "This forgets that 7 is caught by the call branch first. The chain never reaches the letter test for 7.",
      "This leaves out 4. The test is `days < 4`, so 4 goes on to the next test.",
      "`days <= 10` is only reached when the tests above it are false. The values from 1 to 3 get a reminder.",
    ],
    answer: 0,
    verify: { cases: [
      { run: `for (int days = 0; days <= 14; days++)\n{\n${ind(P3_02, 4)}\n    if (notice.equals("letter"))\n    {\n        System.out.print(days + " ");\n    }\n}`, out: "4 5 6 8 9 10" },
    ] } },

  { id: "u2p3-03", skill: "bool", type: "mcq", topic: "2.5",
    stem: "A recipe app splits eggs between mixing bowls. Consider the following code segment.",
    code: `int eggs = 9;
int bowls = 0;
if (eggs / bowls >= 3 && bowls > 0)
{
    System.out.println("split");
}
else
{
    System.out.println("one bowl");
}`,
    question: "What is the result of executing the code segment?",
    choices: ["Nothing is printed. An ArithmeticException is thrown.", "one bowl", "split", "Nothing is printed. The code segment does not compile."],
    why: [
      "`&&` evaluates its left side first, and here the left side is the division. `eggs / bowls` divides by 0 before `bowls > 0` is ever checked. A guard only protects what comes after it.",
      "Short-circuit evaluation can skip only the right side. The division is on the left, so it runs before the check that would have stopped it.",
      "The condition is never finished: dividing an `int` by 0 throws an exception.",
      "Both sides are boolean expressions joined by `&&`, so the code compiles. The problem happens when it runs.",
    ],
    answer: 0,
    verify: { throws: "ArithmeticException" } },

  { id: "u2p3-04", skill: "bool", type: "mcq", topic: "2.6",
    stem: "Consider the following expression, where `level` and `spot` are `int` variables.",
    code: `!(level != 3 || spot >= 10)`,
    question: "Which of the following is equivalent to the expression for all integer values of `level` and `spot`?",
    choices: ["level == 3 && spot < 10", "level == 3 || spot < 10", "level == 3 && spot <= 10", "level != 3 && spot < 10"], mono: true,
    why: [
      "The opposite of `p || q` is `!p && !q`. The opposite of `!=` is `==`, and the opposite of `>=` is `<`.",
      "The `||` has to become `&&` as well. Try `level` equal to 3 and `spot` equal to 12: the original is false, and this is true.",
      "The opposite of `>=` is `<`, not `<=`. Try `level` equal to 3 and `spot` equal to 10: the original is false, and this is true.",
      "The `!` reaches both parts, so `!=` becomes `==`. Try `level` equal to 5 and `spot` equal to 2: the original is false, and this is true.",
    ],
    answer: 0,
    verify: { cases: [
      { run: equiv("level", "spot", "!(level != 3 || spot >= 10)", "level == 3 && spot < 10", -5, 15), out: "same" },
      { run: equiv("level", "spot", "!(level != 3 || spot >= 10)", "level == 3 || spot < 10", -5, 15), out: "differs" },
      { run: equiv("level", "spot", "!(level != 3 || spot >= 10)", "level == 3 && spot <= 10", -5, 15), out: "differs" },
      { run: equiv("level", "spot", "!(level != 3 || spot >= 10)", "level != 3 && spot < 10", -5, 15), out: "differs" },
    ] } },

  { id: "u2p3-05", skill: "bool", type: "mcq", topic: "2.5",
    stem: "A weather app counts the days of a 15-day forecast that get an alert. Consider the following code segment.",
    code: `int alerts = 0;
for (int day = 1; day <= 15; day++)
{
    if (day < 4 || day > 10 && day % 2 == 1)
    {
        alerts++;
    }
}
System.out.println(alerts);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["6", "5", "11", "7"], mono: true,
    why: [
      "`&&` is done before `||`: the condition is true for every day below 4, and also for the odd days above 10.",
      "This groups the `||` first, so every day would also have to be odd, which leaves out 2. Without parentheses, `&&` binds tighter.",
      "This reads `&&` as `||`. An odd day counts only when it is also above 10.",
      "This also counts 4. The test is `day < 4`.",
    ],
    answer: 0,
    verify: { out: "6" } },

  { id: "u2p3-06", skill: "bool", type: "mcq", topic: "2.6",
    stem: "A car may enter a parking garage when `height <= 84 && weight < 6000`, where `height` is in inches and `weight` is in pounds.",
    question: "Which of the following is true exactly when a car may NOT enter, for all integer values of `height` and `weight`?",
    choices: ["height > 84 || weight >= 6000", "height > 84 && weight >= 6000", "height >= 84 || weight >= 6000", "height > 84 || weight > 6000"], mono: true,
    why: [
      "A car is kept out if it is too tall OR too heavy. De Morgan turns `&&` into `||` and flips both comparisons.",
      "This keeps out only a car that is too tall and too heavy at once. A car that is too tall but light is kept out too.",
      "A car exactly 84 inches tall may enter. The opposite of `<=` is `>`, not `>=`.",
      "A car of exactly 6000 pounds may not enter. The opposite of `<` is `>=`.",
    ],
    answer: 0,
    verify: { cases: [
      { run: equivHW("!(height <= 84 && weight < 6000)", "height > 84 || weight >= 6000"), out: "same" },
      { run: equivHW("!(height <= 84 && weight < 6000)", "height > 84 && weight >= 6000"), out: "differs" },
      { run: equivHW("!(height <= 84 && weight < 6000)", "height >= 84 || weight >= 6000"), out: "differs" },
      { run: equivHW("!(height <= 84 && weight < 6000)", "height > 84 || weight > 6000"), out: "differs" },
    ] } },

  { id: "u2p3-07", skill: "for", type: "mcq", topic: "2.8",
    stem: "A library adds up the fines on some overdue books. Consider the following code segment.",
    code: `int fines = 0;
for (int day = 10; day > 0; day -= 2)
{
    if (day > 5)
    {
        fines += 3;
    }
    else
    {
        fines += 1;
    }
}
System.out.println(fines);`,
    question: "What is printed, and how many times does the body of the loop run?",
    choices: ["11, and the body runs 5 times", "12, and the body runs 6 times", "9, and the body runs 3 times", "15, and the body runs 5 times"],
    why: [
      "`day` takes the values 10, 8, 6, 4, and 2. The first three are more than 5 and add 3 each, and the last two add 1 each.",
      "This also runs with `day` equal to 0. The test is `day > 0`.",
      "This counts only the passes where the if is true. The else is part of the body too, and it adds 1 on the other passes.",
      "This adds 3 on every pass. The else adds only 1 when `day` is 5 or less.",
    ],
    answer: 0,
    verify: { out: "11" } },

  { id: "u2p3-08", skill: "while", type: "mcq", topic: "2.7",
    stem: "Bread dough rises in a warm kitchen. Consider the following code segment.",
    code: `int rise = 3;
int minutes = 0;
while (rise < 16)
{
    if (rise < 10)
    {
        rise += 4;
    }
    else
    {
        rise += 2;
    }
    minutes += 5;
}
System.out.println(minutes + " " + rise);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["25 17", "20 15", "20 19", "30 19"], mono: true,
    why: [
      "While `rise` is below 10 it goes up by 4, and after that by 2: 7, 11, 13, 15, 17. That is 5 passes, and then `rise < 16` is false.",
      "After 4 passes `rise` is 15, and `15 < 16` is still true, so one more pass runs.",
      "This adds 4 on every pass. Once `rise` is 10 or more, the else adds 2.",
      "This runs one pass too many. The test is checked before each pass, and `17 < 16` is false.",
    ],
    answer: 0,
    verify: { out: "25 17" } },

  { id: "u2p3-09", skill: "algo", type: "mcq", topic: "2.9",
    stem: "A small parking garage holds at most 12 cars. Consider the following code segment.",
    code: `int cars = 0;
int full = 0;
for (int hour = 1; hour <= 6; hour++)
{
    cars += 5;
    if (hour % 2 == 0)
    {
        cars -= 3;
    }
    if (cars > 12)
    {
        cars = 12;
        full++;
    }
}
System.out.println(cars + " " + full);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["12 3", "21 3", "12 4", "9 3"], mono: true,
    why: [
      "Trace it hour by hour: 5 cars come in, 3 leave on even hours, and whenever the count goes over 12 it is set back to 12 and `full` goes up. That happens in hours 4, 5, and 6.",
      "This counts the hours that go over 12 but never sets `cars` back to 12. The if does both.",
      "This also counts hour 3, when `cars` is exactly 12. The test is `cars > 12`.",
      "This checks the limit before the 3 cars leave. In the code, the if that subtracts 3 comes first.",
    ],
    answer: 0,
    verify: { out: "12 3" } },

  { id: "u2p3-10", skill: "algo", type: "mcq", topic: "2.9",
    stem: "A video game score table shows the best round of a game. Consider the following code segment.",
    code: `int best = 0;
int bestRound = 0;
for (int round = 1; round <= 7; round++)
{
    int points = (round * round) % 7;
    if (points > best)
    {
        best = points;
        bestRound = round;
    }
}
System.out.println(best + " in round " + bestRound);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["4 in round 2", "4 in round 5", "0 in round 7", "49 in round 7"], mono: true,
    why: [
      "The scores are 1, 4, 2, 2, 4, 1, and 0. `points > best` is false on a tie, so the second 4 does not replace the first.",
      "That is what `>=` would do: replace the best on a tie. With `>`, the first round to reach 4 is kept.",
      "This prints the last round's score. `best` changes only when `points` is bigger than every score before it.",
      "This leaves out `% 7`. Each score is the remainder after dividing `round * round` by 7, so it is never more than 6.",
    ],
    answer: 0,
    verify: { out: "4 in round 2" } },

  { id: "u2p3-11", skill: "for", type: "mcq", topic: "2.8",
    stem: "Consider the following code segment.",
    code: `for (int n = 7; n <= 40; n += 4)
{
    System.out.print("+");
}`,
    question: "How many times is `+` printed?",
    choices: ["9", "8", "10", "34"], mono: true,
    why: [
      "`n` takes the values 7, 11, 15, 19, 23, 27, 31, 35, and 39. The next value, 43, is more than 40.",
      "This counts the steps between the first value and the last, not the values. Write out the values and count them, including 7.",
      "This counts one pass too many. After 39, `n` becomes 43, and `43 <= 40` is false.",
      "This counts every value from 7 to 40. `n` goes up by 4.",
    ],
    answer: 0,
    verify: { out: "+++++++++" } },

  { id: "u2p3-12", skill: "string", type: "mcq", topic: "2.10",
    stem: "A melody is stored as one letter per note. Consider the following code segment, which counts the C major chords spelled out in it.",
    code: `String notes = "GCEGACEG";
int chords = 0;
for (int i = 0; i <= notes.length() - 3; i++)
{
    if (notes.substring(i, i + 3).equals("CEG"))
    {
        chords++;
    }
}
System.out.println(chords);`,
    question: "What is the result of executing the code segment?",
    choices: ["2", "1", "0", "Nothing is printed. A StringIndexOutOfBoundsException is thrown."],
    why: [
      "Each pass looks at the three notes starting at `i`. The last start allowed is the length minus 3, which is 5, and \"CEG\" starts at 1 and at 5.",
      "This misses the \"CEG\" that starts at 5. The test uses `<=`, so the last start, 5, is checked.",
      "With `i += 3`, only the windows starting at 0 and 3 are checked, and neither is \"CEG\". Here `i` goes up by 1.",
      "That is what happens with `i < notes.length()`: `substring(6, 9)` runs past the end. This loop stops at the last start that fits.",
    ],
    answer: 0,
    verify: { out: "2" } },

  { id: "u2p3-13", skill: "string", type: "mcq", topic: "2.10",
    stem: "A library catalog shortens a title to its initials. Consider the following code segment.",
    code: `String title = "war and peace";
String t = title.substring(0, 1);
for (int i = 1; i < title.length(); i++)
{
    if (title.substring(i - 1, i).equals(" "))
    {
        t += title.substring(i, i + 1);
    }
}
System.out.println(t);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["wap", "ap", "wrd", "paw"], mono: true,
    why: [
      "`t` starts as the first letter, and the loop adds each letter that comes right after a space: the first letter of each later word.",
      "This misses the first word. It has no space before it, which is why `t` starts as its first letter.",
      "This adds the letter before each space. The code adds the letter at `i`, just after the space it found.",
      "This puts each letter in front. `t +=` adds to the end.",
    ],
    answer: 0,
    verify: { out: "wap" } },

  { id: "u2p3-14", skill: "string", type: "mcq", topic: "2.10",
    stem: "Consider the following code segment, which finds where \"stir\" appears in a recipe.",
    code: `String steps = "stir, bake, stir, cool, stir";
String rest = steps;
int offset = 0;
String found = "";
while (rest.indexOf("stir") >= 0)
{
    int at = rest.indexOf("stir");
    found += (offset + at) + " ";
    offset = offset + at + 4;
    rest = rest.substring(at + 4);
}
System.out.println(found);`,
    question: "What is the result of executing the code segment?",
    choices: ["0 12 24", "0 8 8", "0 12 16", "Nothing is printed, because the loop never ends."],
    why: [
      "`at` is a position in `rest`, which gets shorter after each cut. `offset` counts the characters cut off so far, so `offset + at` is the position in the whole recipe.",
      "These are positions in the shortened `rest`, not in `steps`. The code adds `offset` to each one.",
      "This moves `offset` by only 4 each pass. It must also move past everything before the match, which is why the code adds `at` too.",
      "Each pass cuts off everything up to the end of the match it found, so `rest` runs out of matches and the loop ends.",
    ],
    answer: 0,
    verify: { out: "0 12 24" } },

  { id: "u2p3-15", skill: "string", type: "mcq", topic: "2.10",
    stem: "Consider the following code segment.",
    code: `String word = "monsoon";
int count = 0;
for (int i = 0; i < word.length(); i++)
{
    if (word.substring(i, i + 1).compareTo("m") > 0)
    {
        count++;
    }
}
System.out.println(count);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["6", "7", "0", "5"], mono: true,
    why: [
      "A positive result means the letter comes after m in the alphabet. o, n, s, o, o, and n all do. The m itself gives 0.",
      "This counts the m too. `compareTo` returns 0 for equal Strings, and `0 > 0` is false.",
      "This counts the letters that come before m. A positive result means the letter comes after \"m\".",
      "This never looks at the last letter. The loop visits every index, up to and including the last one.",
    ],
    answer: 0,
    verify: { out: "6" } },

  { id: "u2p3-16", skill: "nested", type: "mcq", topic: "2.11",
    stem: "Consider the following code segment.",
    code: `int n = 0;
for (int i = 4; i >= 1; i--)
{
    for (int j = i; j <= 6; j++)
    {
        n++;
    }
}
System.out.println(n);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["18", "24", "14", "6"], mono: true,
    why: [
      "`j` runs from `i` to 6, so the inner loop runs 3, 4, 5, and then 6 times as `i` counts down. Add them up.",
      "That is 4 times 6. Here `j` starts at `i`, so the inner loop is shorter when `i` is larger.",
      "This stops `j` before 6. The test is `j <= 6`, so 6 counts too.",
      "That is only the last inner loop. The inner loop runs again on every pass of the outer loop.",
    ],
    answer: 0,
    verify: { out: "18" } },

  { id: "u2p3-17", skill: "nested", type: "mcq", topic: "2.11",
    stem: "Consider the following code segment.",
    code: `for (int r = 1; r <= 3; r++)
{
    for (int c = r; c <= 3; c++)
    {
        System.out.print(r * c + " ");
    }
    System.out.println();
}`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["1 2 3\n4 6\n9", "1 2 3\n2 4 6\n3 6 9", "1\n2 4\n3 6 9", "1 2 3 4 6 9"], mono: true,
    why: [
      "`c` starts at `r`, so each line is one shorter than the one before: row 1 prints 1 2 3, row 2 prints 4 6, and row 3 prints 9.",
      "This starts `c` at 1 on every row. Here `c` starts at `r`.",
      "This stops `c` at `r`. The inner loop runs from `r` up to 3.",
      "This never ends a line. `println()` after the inner loop starts a new line for each row.",
    ],
    answer: 0,
    verify: { out: "1 2 3\n4 6\n9" } },

  { id: "u2p3-18", skill: "nested", type: "mcq", topic: "2.11",
    stem: "A word search game stores its grid of 3 rows and 4 columns row by row in one String. Consider the following code segment.",
    code: `String grid = "ABCDEFGHIJKL";
int rows = 3;
int cols = 4;
for (int c = 0; c < cols; c++)
{
    String line = "";
    for (int r = 0; r < rows; r++)
    {
        int at = r * cols + c;
        line += grid.substring(at, at + 1);
    }
    System.out.print(line + " ");
}`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["AEI BFJ CGK DHL", "ABC DEF GHI JKL", "ADG BEH CFI DGJ", "ABCD EFGH IJKL"], mono: true,
    why: [
      "`r * cols + c` is the index of row `r`, column `c`. The outer loop picks a column, and the inner loop reads it from top to bottom.",
      "This reads the String in order, three letters at a time. Each row starts `cols` characters after the row before, so going down one row adds 4 to the index.",
      "This uses `rows` as the length of a row. Each row has `cols` letters, so the index is `r * cols + c`.",
      "This prints the rows. The outer loop here picks the column, so each group is one column read from top to bottom.",
    ],
    answer: 0,
    verify: { out: "AEI BFJ CGK DHL" } },

  { id: "u2p3-19", skill: "runtime", type: "mcq", topic: "2.12",
    stem: "Consider the following code segment.",
    code: P3_19,
    question: "How many times is the statement `count++;` executed?",
    choices: ["12", "14", "16", "4"], mono: true,
    why: [
      "For each `i`, the inner loop adds 2 to `j` until it reaches 8 or more: 4 passes when `i` is 1, 3 when it is 2, 3 when it is 3, and 2 when it is 4. Add them.",
      "This also runs when `j` equals 8. The test is `j < 8`.",
      "This runs the inner loop 4 times for every `i`. `j` starts at `i`, so a larger `i` reaches 8 sooner.",
      "That counts the outer loop only. `count++;` is inside the inner loop.",
    ],
    answer: 0,
    verify: { cases: [
      { run: P3_19 + "\nSystem.out.println(count);", out: "12" },
    ] } },

  { id: "u2p3-20", skill: "runtime", type: "mcq", topic: "2.12",
    stem: "Consider the following code segment, where `n` is a positive `int`.",
    code: P3_20,
    question: "When `n` is 10, `steps` is 100 after the code segment runs. What is `steps` when `n` is 20?",
    choices: ["400", "200", "8000", "20"], mono: true,
    why: [
      "The inner loop runs `n` times on each of the `n` passes of the outer loop, so `steps` is `n * n`. Doubling `n` makes both loops twice as long, which is 4 times the work.",
      "This only doubles the count. Both loops get twice as long, not just one of them.",
      "That would need a third loop inside the other two, also running `n` times.",
      "That counts the outer loop only. `steps++;` is inside the inner loop.",
    ],
    answer: 0,
    verify: { cases: [
      { run: "int n = 10;\n" + P3_20 + "\nSystem.out.println(steps);", out: "100" },
      { run: "int n = 20;\n" + P3_20 + "\nSystem.out.println(steps);", out: "400" },
    ] } },

  { id: "u2p3-frq", skill: "frq", type: "code", topic: "2.10", title: "The arcade level",
    prompt: "In an arcade game, a player's run through a level is recorded as a `String` of one-letter events:\n\n- `\"c\"` is a coin, worth 1 point\n- `\"g\"` is a gem, worth 5 points. A gem that comes right after another gem earns 3 bonus points as well.\n- `\"t\"` is a trap, which cuts the points the player has so far in half, using `int` division (7 points become 3)\n- `\"q\"` means the player quit. Nothing after the first `\"q\"` counts.\n\nThe player starts with 0 points. Write the static method `levelScore`, which returns the player's points at the end of the run. The method is shown below.\n\nFor example, `levelScore(\"ccggtcgqgg\")` returns 13: the coins and gems give 1, 2, 7, and then 15 (the second gem follows a gem), the trap cuts 15 to 7, the coin and the gem give 8 and 13, and the gems after the `\"q\"` do not count.\n\nDo not use arrays. " + QR,
    given: `/** Returns the points earned in run, as described above.
 *  Precondition: run contains only the letters "c", "g", "t", and "q".
 *                run may be the empty String.
 */
public static int levelScore(String run)`,
    sample: "levelScore(\"ccggtcgqgg\") returns 13\nlevelScore(\"gtg\") returns 7\nlevelScore(\"tggg\") returns 21\nlevelScore(\"\") returns 0",
    rows: [
      { name: "Traverses the run", earns: "Visits the letters of `run` in order with a loop, without going past the end (for example `i < run.length()` with `substring(i, i + 1)`)." },
      { name: "Compares Strings correctly", earns: "Compares one-letter Strings with `equals`, never with `==`." },
      { name: "Scores coins and gems", earns: "Adds 1 for each `\"c\"` and 5 for each `\"g\"`." },
      { name: "Adds the gem bonus", earns: "Adds 3 more for a `\"g\"` whose letter just before it is `\"g\"`, without looking before index 0 (the first letter has nothing before it)." },
      { name: "Halves the points on a trap", earns: "On a `\"t\"`, sets the points to half of the points so far, using `int` division (`score = score / 2`)." },
      { name: "Stops at the first quit", earns: "Nothing at or after the first `\"q\"` changes the points: the loop ends there, or a flag stops the scoring, or only `run.substring(0, run.indexOf(\"q\"))` is scored when there is a `\"q\"`." },
      { name: "Returns the points", earns: "Returns the `int` the method computed, with 0 for an empty `run`. A method that prints the points instead does not earn this row." },
    ],
    notes: NOTE + " A trap that subtracts `score / 2` from the points does not earn row 5, because 7 points then become 4. A response that skips only the `\"q\"` letter and keeps scoring after it does not earn row 6. Using `break` or `return` inside the loop to stop at the `\"q\"` is fine.",
    solution: P3F,
    verify: { cases: [
      { methods: P3F, run: `System.out.println(levelScore("ccggtcgqgg"));
System.out.println(levelScore("gtg"));
System.out.println(levelScore("tggg"));
System.out.println(levelScore(""));
System.out.println(levelScore("qgg"));
System.out.println(levelScore("cccccccq"));
System.out.println(levelScore("gggt"));
System.out.println(levelScore("gcg"));`, out: "13\n7\n21\n0\n0\n7\n10\n11" },
    ] } },
];

export default {
  forms: [
    { id: "u2p2", name: "Unit 2 Test Practice 2", items: practice2 },
    { id: "u2p3", name: "Unit 2 Test Practice 3", items: practice3 },
  ],
};

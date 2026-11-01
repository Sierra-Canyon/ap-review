// AP CSA mock forms: AP Practice Section A and B, in the shape of PS (2026-12-08).
// Each form: 20 multiple choice (1.3, 1.5, 1.6, 1.9, 1.11, 1.13, 1.15, 1.15, 2.3, 2.4, 2.6, 2.5, 2.7, 2.8, 2.9, 2.10, 2.10, 2.11, 2.11, 2.12),
// then one 7-row free response (a code segment in main that calls a given static method).
// Unlike PS, items 4 to 6 cover 1.9 (parameters are copies), 1.11 (Math), and 1.13 (references).
// In every mcq the key is written first and answer is 0 (the site shuffles).
// Settings: a quiver of arrows, a bakery, a lantern, a wallet, a word game, a hiking trail, and plain dungeon variables.

const QR = "Use only `String` methods from the Java Quick Reference: `length`, `substring`, `indexOf`, `equals`, and `compareTo`.";
const NOTE = "One point for each row. Award a row for what the code actually does; ignore small typing slips that do not change the logic.";
const fill = (code, hole, piece) => code.replace(hole, piece);

// ---------- shared classes ----------

const LANTERN = `class Lantern
{
    private int fuel;

    public Lantern(int f)
    {
        fuel = f;
    }

    public void burn(int n)
    {
        fuel -= n;
    }

    public int getFuel()
    {
        return fuel;
    }
}`;

const WALLET = `class Wallet
{
    private int money;

    public Wallet(int m)
    {
        money = m;
    }

    public void spend(int n)
    {
        money -= n;
    }

    public int getMoney()
    {
        return money;
    }
}`;

// ---------- De Morgan checkers ----------

const dmA = (choice) => `boolean same = true;
for (int gold = 8; gold <= 12; gold++)
{
    for (int k = 0; k < 2; k++)
    {
        boolean locked = k == 1;
        if ((!(gold > 10 && !locked)) != (${choice}))
        {
            same = false;
        }
    }
}
System.out.println(same);`;

const dmB = (choice) => `boolean same = true;
for (int lives = 0; lives <= 2; lives++)
{
    for (int time = 58; time <= 62; time++)
    {
        if ((!(lives < 1 || time >= 60)) != (${choice}))
        {
            same = false;
        }
    }
}
System.out.println(same);`;

// ---------- free responses ----------

const LETTER_VALUE = `public static int letterValue(String letter)
{
    if ("aeiou".indexOf(letter) >= 0)
    {
        return 1;
    }
    if ("jkqxz".indexOf(letter) >= 0)
    {
        return 3;
    }
    return 2;
}`;

const FA = `int score = 0;
String best = word.substring(0, 1);
int bestValue = letterValue(best);
int doubles = 0;
for (int i = 0; i < word.length(); i++)
{
    String letter = word.substring(i, i + 1);
    int value = letterValue(letter);
    score += value;
    if (value > bestValue)
    {
        best = letter;
        bestValue = value;
    }
    if (i < word.length() - 1 && letter.equals(word.substring(i + 1, i + 2)))
    {
        doubles++;
    }
}
System.out.println("Score: " + score);
System.out.println("Best: " + best);
System.out.println("Doubles: " + doubles);`;

const wordCase = (w, out) => ({ methods: LETTER_VALUE, run: `String word = "${w}";\n${FA}`, out });

const STEP_TIME = `public static int stepTime(String tile)
{
    if (tile.equals("u"))
    {
        return 4;
    }
    if (tile.equals("d"))
    {
        return 1;
    }
    return 2;
}`;

const FB = `int time = 0;
int slowest = 0;
int most = 0;
int changes = 0;
for (int i = 0; i < trail.length(); i++)
{
    String tile = trail.substring(i, i + 1);
    int minutes = stepTime(tile);
    time += minutes;
    if (minutes > most)
    {
        most = minutes;
        slowest = i;
    }
    if (i < trail.length() - 1 && !tile.equals(trail.substring(i + 1, i + 2)))
    {
        changes++;
    }
}
System.out.println("Time: " + time);
System.out.println("Slowest at: " + slowest);
System.out.println("Changes: " + changes);`;

const trailCase = (t, out) => ({ methods: STEP_TIME, run: `String trail = "${t}";\n${FB}`, out });

// ======================================================================
// Form A
// ======================================================================

const formA = [
  { id: "psa-01", skill: "arith", type: "mcq", topic: "1.3",
    stem: "Consider the following code segment.",
    code: `int arrows = 29;
int quiver = 8;
int full = arrows / quiver;
System.out.println("Full " + full + arrows % quiver + " " + (arrows + 1) / 4.0);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["Full 35 7.5", "Full 8 7.5", "Full 35 7.0", "Full 35 29.25"], mono: true,
    why: [
      "`full` is 3 and `arrows % quiver` is 5. The String `\"Full \"` comes first, so each later `+` joins text and the 3 and 5 are written side by side. `(arrows + 1) / 4.0` divides by a `double`, so 30 / 4.0 keeps its fraction.",
      "This adds 3 and 5. The `+` goes left to right, and once the String `\"Full \"` is on the left, every number is joined on as text.",
      "4.0 is a `double`, so the division is done in `double` and keeps the fraction. Only a division between two `int`s drops it.",
      "The parentheses make `arrows + 1` happen first, so the whole 30 is divided by 4.0.",
    ],
    answer: 0,
    verify: { out: "Full 35 7.5" } },

  { id: "psa-02", skill: "arith", type: "mcq", topic: "1.5",
    stem: "Consider the following code segment.",
    code: `double avg = 7.6;
int a = (int) avg;
int b = (int) (avg + 0.5);
int c = (int) avg + (int) 0.5;
System.out.println(a + " " + b + " " + c);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["7 8 7", "8 8 8", "7 8 8", "7 7 7"], mono: true,
    why: [
      "A cast to `int` drops the decimal part; it does not round. In `b`, the 0.5 is added first, so 8.1 is cast to 8. In `c`, each cast happens on its own before the `+`: 7 plus 0.",
      "Casting to `int` cuts off the decimal part, so `(int) 7.6` is 7, not 8.",
      "`(int) 0.5` is 0. In `c` the casts happen before the `+`, so the 0.5 is gone before anything is added.",
      "The parentheses in `b` make `avg + 0.5` happen before the cast, and 8.1 becomes 8.",
    ],
    answer: 0,
    verify: { out: "7 8 7" } },

  { id: "psa-03", skill: "arith", type: "mcq", topic: "1.6",
    stem: "Consider the following code segment.",
    code: `int mana = 20;
mana -= 4;
mana /= 3;
mana *= mana - 1;
mana %= 7;
System.out.println(mana);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["6", "3", "2", "20"], mono: true,
    why: [
      "Each line uses the current value of `mana`: `20 - 4` is 16, `16 / 3` is 5 with `int` division, `5 * (5 - 1)` is 20, and `20 % 7` is 6.",
      "`mana *= mana - 1` multiplies `mana` by the whole right side, `mana - 1`. It is not `mana * mana - 1`.",
      "`%=` keeps the remainder. This divides 20 by 7 instead.",
      "The last line still runs: `mana %= 7` replaces 20 with the remainder after dividing by 7.",
    ],
    answer: 0,
    verify: { out: "6" } },

  { id: "psa-04", skill: "objects", type: "mcq", topic: "1.9",
    stem: "Consider the following method and code segment, which appear in the same class.",
    methods: `public static int split(int gold, int people)
{
    gold = gold / people;
    System.out.print(gold + " ");
    return gold * people;
}`,
    code: `int gold = 23;
int kept = split(gold, 4);
System.out.println(gold + " " + kept);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["5 23 20", "5 5 20", "23 20", "5 23 23"], mono: true,
    why: [
      "The parameter `gold` gets a copy of 23. Changing the parameter changes only that copy, so the `gold` in the code segment is still 23. The method prints 5, then returns 5 * 4.",
      "Assigning to the parameter inside the method does not change the variable passed in. The argument's value is copied into the parameter, even when the two have the same name.",
      "The `print` inside the method runs when `split` is called, before the `println` in the code segment.",
      "`gold / people` is `int` division, so the remainder is lost: 5 * 4 is 20, not 23.",
    ],
    answer: 0,
    verify: { out: "5 23 20" } },

  { id: "psa-05", skill: "objects", type: "mcq", topic: "1.11",
    stem: "Consider the following code segment.",
    code: `double a = Math.pow(2, 4) - Math.sqrt(49);
int b = (int) Math.sqrt(a) + Math.abs(-3);
System.out.println(a + " " + b);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["9.0 6", "9 6", "9.0 0", "1.0 4"], mono: true,
    why: [
      "`Math.pow(2, 4)` is 16.0 and `Math.sqrt(49)` is 7.0, so `a` is 9.0. Its square root is 3.0, the cast makes it 3, and `Math.abs(-3)` adds 3.",
      "`Math.pow` and `Math.sqrt` both return `double`, so `a` prints with a decimal point.",
      "`Math.abs` returns the distance from 0, which is never negative: `Math.abs(-3)` is 3.",
      "`Math.pow(2, 4)` is 2 to the 4th power, 16, not 2 times 4.",
    ],
    answer: 0,
    verify: { out: "9.0 6" } },

  { id: "psa-06", skill: "objects", type: "mcq", topic: "1.13",
    stem: "A `Lantern` object holds an amount of fuel. `new Lantern(f)` creates a lantern with `f` units of fuel, the method `burn(int n)` lowers its fuel by `n`, and `getFuel()` returns the fuel it has left. Consider the following code segment.",
    classes: LANTERN,
    code: `Lantern a = new Lantern(10);
Lantern b = a;
a.burn(3);
a = new Lantern(6);
b.burn(2);
System.out.println(a.getFuel() + " " + b.getFuel());`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["6 5", "6 8", "4 4", "4 5"], mono: true,
    why: [
      "`b = a` copies the reference, so `a` and `b` name the same lantern, and `a.burn(3)` leaves it at 7. Then `a` is given a new lantern with 6. `b` still refers to the first one, so `b.burn(2)` leaves it at 5.",
      "`b = a` does not create a second lantern. It copies the reference, so `a.burn(3)` changes the lantern that `b` refers to.",
      "Giving `a` a new lantern does not move `b`. `b` still refers to the first lantern, so the 2 is burned there.",
      "`b.burn(2)` changes only the lantern `b` refers to. By then `a` refers to the new lantern, which still holds 6.",
    ],
    answer: 0,
    verify: { out: "6 5" } },

  { id: "psa-07", skill: "objects", type: "mcq", topic: "1.15",
    stem: "Consider the following code segment.",
    code: `String s = "dragonfire";
int p = s.indexOf("on");
String t = s.substring(p) + s.substring(1, p);
System.out.println(t + " " + s.indexOf("x") + " " + t.length());`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["onfirerag -1 9", "onfirerago -1 10", "onfiredrag -1 10", "onfirerag 0 9"], mono: true,
    why: [
      "`indexOf(\"on\")` is 4, the index of the o. `substring(4)` runs from there to the end, and `substring(1, 4)` is the letters at indexes 1, 2, and 3. `indexOf` returns -1 for text that is not in the String.",
      "The second index of `substring` is not included, so `substring(1, 4)` stops just before the o at index 4.",
      "Indexes start at 0, so the d is at index 0 and `substring(1, 4)` starts at the r.",
      "`indexOf` returns -1, not 0, when the text is not found. 0 would mean the text starts at the first letter.",
    ],
    answer: 0,
    verify: { out: "onfirerag -1 9" } },

  { id: "psa-08", skill: "objects", type: "mcq", topic: "1.15",
    stem: "Consider the following code segment.",
    code: `String a = "bat";
String b = "battle";
String c = b.substring(0, 3);
System.out.println(a.equals(c) + " " + (a.compareTo(b) < 0) + " " + (b.compareTo("bass") < 0));`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["true true false", "false true false", "true false false", "true true true"], mono: true,
    why: [
      "`c` holds the same three letters as `a`, and `equals` compares letters. \"bat\" is the start of \"battle\", so it comes first and `a.compareTo(b)` is negative. In \"battle\" and \"bass\", the first difference is t against s, and t comes later, so that result is positive.",
      "`equals` compares the letters, not whether the two are the same object. `c` holds \"bat\", so `a.equals(c)` is true.",
      "A String that is the start of a longer String comes before it, so `a.compareTo(b)` is negative.",
      "Length does not decide the order. Letter by letter, the first difference is t against s, and t comes after s, so `b.compareTo(\"bass\")` is positive.",
    ],
    answer: 0,
    verify: { out: "true true false" } },

  { id: "psa-09", skill: "if", type: "mcq", topic: "2.3",
    stem: "Consider the following code segment.",
    code: `int temp = 72;
String s = "";
if (temp > 60)
{
    s += "warm ";
}
else if (temp > 70)
{
    s += "hot ";
}
if (temp % 2 == 0)
{
    s += "even";
}
else
{
    s += "odd";
}
System.out.println(s);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["warm even", "hot even", "warm hot even", "warm odd"], mono: true,
    why: [
      "In an `if` and `else if` chain, only the first true test runs. `temp > 60` is true, so the `else if` is skipped. The second `if` is a separate statement, and 72 is even.",
      "The chain is tested in order, and the first true test wins, even when a later test is also true.",
      "Once the first test is true, the `else if` is skipped. Only a separate `if` would also run.",
      "`temp % 2` is the remainder after dividing by 2, which is 0 for 72, so the `if` branch runs.",
    ],
    answer: 0,
    verify: { out: "warm even" } },

  { id: "psa-10", skill: "if", type: "mcq", topic: "2.4",
    stem: "Consider the following code segment.",
    code: `int keys = 2;
boolean torch = false;
String msg = "wait";
if (keys > 0)
{
    if (torch)
    {
        msg = "enter";
    }
    else if (keys > 1)
    {
        msg = "light";
    }
}
else
{
    msg = "search";
}
System.out.println(msg);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["light", "enter", "search", "wait"], mono: true,
    why: [
      "Follow the braces: the `else if (keys > 1)` belongs to the inner `if (torch)`, and the last `else` belongs to the outer `if (keys > 0)`. `keys > 0` is true, `torch` is false, and `keys > 1` is true.",
      "`torch` is false, so the branch for `if (torch)` is skipped.",
      "The last `else` belongs to the OUTER `if`. It runs only when `keys > 0` is false, and here it is true.",
      "The inner `else if` is tested when `torch` is false, and `keys > 1` is true with `keys` equal to 2.",
    ],
    answer: 0,
    verify: { out: "light" } },

  { id: "psa-11", skill: "bool", type: "mcq", topic: "2.6",
    stem: "Consider the following Boolean expression, where `gold` is an `int` and `locked` is a `boolean`.",
    code: "!(gold > 10 && !locked)",
    question: "Which of the following expressions is equivalent to the given expression for all values of `gold` and `locked`?",
    choices: ["gold <= 10 || locked", "gold <= 10 && locked", "gold < 10 || locked", "gold <= 10 || !locked"], mono: true,
    why: [
      "De Morgan: `!(p && q)` is `!p || !q`. The opposite of `gold > 10` is `gold <= 10`, and the opposite of `!locked` is `locked`.",
      "When the `!` moves inside the parentheses, the `&&` must become `||`.",
      "The opposite of `>` is `<=`. With `gold` equal to 10 and `locked` false, the given expression is true and this one is false.",
      "Negating `!locked` gives `locked`: the two `!` cancel.",
    ],
    answer: 0,
    verify: { cases: [
      { run: dmA("gold <= 10 || locked"), out: "true" },
      { run: dmA("gold <= 10 && locked"), out: "false" },
      { run: dmA("gold < 10 || locked"), out: "false" },
      { run: dmA("gold <= 10 || !locked"), out: "false" },
    ] } },

  { id: "psa-12", skill: "bool", type: "mcq", topic: "2.5",
    stem: "Consider the following code segment.",
    code: `int total = 12;
int hits = 0;
for (int d = 0; d < 5; d++)
{
    if (d != 0 && total / d > 3 || d == 4)
    {
        hits++;
    }
}
System.out.println(hits);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["4", "3", "5", "Nothing is printed. An ArithmeticException is thrown."],
    why: [
      "`&&` is done before `||`. Passes 1, 2, and 3 hit through `total / d > 3` (12, 6, and 4 are above 3). Pass 4 hits through `d == 4`. On pass 0, `d != 0` is false, so the division is skipped and `d == 4` is false.",
      "With `d` equal to 4, `total / d > 3` is false, since 3 is not above 3, but `d == 4` is true, and `||` needs only one true side.",
      "With `d` equal to 0, both sides are false: the `&&` part stops at `d != 0`, and `d == 4` is false too.",
      "Short-circuit evaluation: when `d != 0` is false, the division after `&&` is never done, so there is no division by zero.",
    ],
    answer: 0,
    verify: { out: "4" } },

  { id: "psa-13", skill: "while", type: "mcq", topic: "2.7",
    stem: "Consider the following code segment.",
    code: `int health = 50;
int turns = 0;
while (health > 10)
{
    health -= health / 3;
    turns++;
}
System.out.println(health + " " + turns);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["8 5", "11 4", "8 6", "Nothing is printed. The loop never ends."],
    why: [
      "Each pass takes away a third of `health`, rounded down with `int` division: 50, 34, 23, 16, 11, then 8. After 5 passes, `health > 10` is false.",
      "11 is still above 10, so the loop runs once more.",
      "The body runs 5 times. The last test, with `health` equal to 8, is false, so it is not a pass.",
      "While `health` is above 10, `health / 3` is at least 3, so `health` goes down on every pass and the loop ends.",
    ],
    answer: 0,
    verify: { out: "8 5" } },

  { id: "psa-14", skill: "for", type: "mcq", topic: "2.8",
    stem: "Consider the following code segment.",
    code: `for (int k = 40; k >= 5; k -= 7)
{
    System.out.println("Step");
}`,
    question: "How many times is `Step` printed?",
    choices: ["6", "5", "7", "36"], mono: true,
    why: [
      "`k` takes the values 40, 33, 26, 19, 12, and 5, one line each. The next value, -2, fails `k >= 5`.",
      "That is `(40 - 5) / 7`, the number of steps between the first and last values. The first value, 40, is a pass as well.",
      "This lets -2 in. The test `k >= 5` is false for -2.",
      "That counts every whole number from 40 down to 5. `k` goes down by 7 each pass.",
    ],
    answer: 0,
    verify: { out: "Step\nStep\nStep\nStep\nStep\nStep" } },

  { id: "psa-15", skill: "algo", type: "mcq", topic: "2.9",
    stem: "The following code segment is intended to print the smallest of five readings.",
    code: `int smallest = 0;
for (int i = 1; i <= 5; i++)
{
    int reading = (i * 7) % 5 + 2;
    if (reading < smallest)
    {
        smallest = reading;
    }
}
System.out.println(smallest);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["0", "2", "4", "6"], mono: true,
    why: [
      "The readings are 4, 6, 3, 5, and 2. `smallest` starts at 0, below every reading, so `reading < smallest` is never true and `smallest` never changes. Starting from the first reading would fix it.",
      "2 is the smallest reading, the value the code segment was meant to print. It never replaces `smallest`, because 2 is not less than 0.",
      "4 is the first reading, but the code never stores it: only a reading below 0 would replace `smallest`.",
      "6 is the largest reading. The test `reading < smallest` looks for smaller values, and none is below 0.",
    ],
    answer: 0,
    verify: { out: "0" } },

  { id: "psa-16", skill: "string", type: "mcq", topic: "2.10",
    stem: "Consider the following code segment.",
    code: `String s = "bananas";
int count = 0;
while (s.indexOf("an") >= 0)
{
    count++;
    s = s.substring(s.indexOf("an") + 1);
}
System.out.println(count + " " + s);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["2 nas", "2 as", "1 nanas", "Nothing is printed. The loop never ends."],
    why: [
      "Each pass counts the first an and keeps the part of `s` that starts just after its a. \"bananas\" becomes \"nanas\", then \"nas\", which has no an, so the loop stops.",
      "This cuts after the whole an. The code adds only 1 to the index of the a, so the part it keeps starts at the n.",
      "The loop keeps going while an is found, and \"nanas\" still has one.",
      "Each pass cuts off the a that was found and everything before it, so `s` gets shorter and the loop ends.",
    ],
    answer: 0,
    verify: { out: "2 nas" } },

  { id: "psa-17", skill: "string", type: "mcq", topic: "2.10",
    stem: "Consider the following code segment.",
    code: `String word = "treasure";
String out = "";
for (int i = 0; i < word.length(); i += 2)
{
    out = word.substring(i, i + 1) + out;
}
System.out.println(out);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["rset", "tesr", "euar", "Nothing is printed. A StringIndexOutOfBoundsException is thrown."],
    why: [
      "`i` takes the values 0, 2, 4, and 6, so the letters are t, e, s, and r. Each one is put in FRONT of `out`, so they come out in reverse order.",
      "`out = ... + out` puts each new letter before the ones already there, so the order is reversed.",
      "`i` starts at 0, so the letters used are the ones at the even indexes, starting with the t.",
      "The largest value of `i` is 6, so `substring(i, i + 1)` never goes past index 7, the last letter.",
    ],
    answer: 0,
    verify: { out: "rset" } },

  { id: "psa-18", skill: "nested", type: "mcq", topic: "2.11",
    stem: "Consider the following code segment.",
    code: `int count = 0;
for (int i = 1; i <= 4; i++)
{
    for (int j = i; j <= 4; j++)
    {
        count++;
    }
}
System.out.println(count);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["10", "16", "4", "6"], mono: true,
    why: [
      "The inner loop starts at `j = i`, so it runs 4 times, then 3, 2, and 1. That adds up to 10.",
      "That runs the inner loop 4 times for every `i`. It starts at `i`, so it gets shorter each time.",
      "That counts the outer loop only. `count++` is inside the inner loop, which runs to the end on every pass of the outer loop.",
      "This leaves out `j` equal to 4. The inner test is `j <= 4`.",
    ],
    answer: 0,
    verify: { out: "10" } },

  { id: "psa-19", skill: "nested", type: "mcq", topic: "2.11",
    stem: "Consider the following code segment.",
    code: `for (int r = 0; r < 3; r++)
{
    for (int c = 0; c < 4; c++)
    {
        if (c == r || c == 3)
        {
            System.out.print("X");
        }
        else
        {
            System.out.print(".");
        }
    }
    System.out.println();
}`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["X..X\n.X.X\n..XX", "X...\n.X..\n..X.", "X..\n.X.\n..X\nXXX", "X..X.X.X..XX"], mono: true,
    why: [
      "The outer loop makes 3 lines, and the inner loop prints 4 characters in each. A character is X when its column equals the row or when it is the last column, 3.",
      "`||` needs only one true side, so the last column, where `c` is 3, is X in every row.",
      "The outer loop counts the rows, so there are 3 lines of 4 characters, not 4 lines of 3.",
      "`System.out.println()` after the inner loop ends each row, so each row is its own line.",
    ],
    answer: 0,
    verify: { out: "X..X\n.X.X\n..XX" } },

  { id: "psa-20", skill: "runtime", type: "mcq", topic: "2.12",
    stem: "Consider the following code segment.",
    code: `int ops = 0;
for (int i = 0; i < 8; i++)
{
    for (int j = 8; j > 0; j /= 2)
    {
        ops++;
    }
}
System.out.println(ops);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["32", "64", "24", "12"], mono: true,
    why: [
      "The inner loop halves `j`: 8, 4, 2, 1, and then 0 fails `j > 0`. That is 4 passes, done once for each of the 8 passes of the outer loop.",
      "The inner loop does not count down by 1. Halving takes `j` from 8 to 0 in only 4 passes.",
      "This stops the inner loop at 1. `1 > 0` is true, so `j` equal to 1 is a pass too.",
      "The inner loop runs to the end on every pass of the outer loop, so the counts multiply; they do not add.",
    ],
    answer: 0,
    verify: { out: "32" } },

  { id: "psa-frq", skill: "frq", type: "code", topic: "2.10", title: "Word score",
    prompt: "In a word game, each letter of a word is worth points. The method `letterValue`, shown below, is already written; do not write it. It takes a one-letter `String` and returns that letter's points: 1 for a vowel (a, e, i, o, or u), 3 for one of j, k, q, x, or z, and 2 for any other letter.\n\nThe variable `word` has already been declared and holds one or more lowercase letters. Write a code segment that prints three lines:\n\n- `Score: ` followed by the total points of all the letters in `word`\n- `Best: ` followed by the letter worth the most points (if several letters tie for the most, the one that comes first in `word`)\n- `Doubles: ` followed by the number of places where a letter is the same as the letter right after it\n\nFor example, if `word` is `\"puzzle\"`, the code segment prints\n\n```\nScore: 12\nBest: z\nDoubles: 1\n```\n\nWrite the code segment as it would appear inside `main`. Call `letterValue` to find each letter's points. Do not write any methods, and do not use arrays. " + QR,
    given: `/** Returns the points for one letter: 1 for a vowel,
 *  3 for j, k, q, x, or z, and 2 for any other letter.
 *  Precondition: letter is one lowercase letter.
 */
public static int letterValue(String letter)`,
    sample: "word = \"puzzle\" prints\nScore: 12\nBest: z\nDoubles: 1\n\nword = \"book\" prints\nScore: 7\nBest: k\nDoubles: 1",
    rows: [
      { name: "Traverses the word", earns: "Visits every letter of `word` with a loop, without going past the end (for example `i < word.length()` with `substring(i, i + 1)`)." },
      { name: "Calls letterValue correctly", earns: "Calls `letterValue` with a one-letter `String` and uses the `int` it returns. Writing the points rule again instead of calling the method does not earn this row." },
      { name: "Totals the score", earns: "Adds each letter's points to a total that starts at 0, once for each letter." },
      { name: "Keeps the highest value", earns: "Keeps the highest point value seen so far, updated inside the loop, starting from the first letter's value or from 0." },
      { name: "Keeps the first best letter", earns: "Keeps the letter that goes with the highest value, replacing it only when a letter is worth strictly more (`>`, not `>=`), so a tie keeps the earlier letter (`\"jazz\"` gives j)." },
      { name: "Counts the doubles", earns: "Compares each letter with the letter right after it using `equals`, never `==`, without going past the end (the last letter has nothing after it), and adds 1 for each match." },
      { name: "Prints the results", earns: "Prints the three labeled lines once, after the loop, using the values the code computed." },
    ],
    notes: NOTE + " Starting the highest value at 0 is fine, since every letter is worth at least 1. A response that replaces the best letter on `>=` gives the last of the tied letters and does not earn row 5. A response that compares `word.substring(i + 1, i + 2)` on the last pass throws a `StringIndexOutOfBoundsException` and does not earn row 6; starting the loop at 1 and comparing with the letter before is fine.",
    solution: FA,
    verify: { cases: [
      wordCase("puzzle", "Score: 12\nBest: z\nDoubles: 1"),
      wordCase("book", "Score: 7\nBest: k\nDoubles: 1"),
      wordCase("jazz", "Score: 10\nBest: j\nDoubles: 1"),
      wordCase("a", "Score: 1\nBest: a\nDoubles: 0"),
      wordCase("aaa", "Score: 3\nBest: a\nDoubles: 2"),
      wordCase("street", "Score: 10\nBest: s\nDoubles: 1"),
      wordCase("quiz", "Score: 8\nBest: q\nDoubles: 0"),
    ] } },
];

// ======================================================================
// Form B
// ======================================================================

const formB = [
  { id: "psb-01", skill: "arith", type: "mcq", topic: "1.3",
    stem: "A bakery packs eggs in boxes of 12. Consider the following code segment.",
    code: `int eggs = 38;
int box = 12;
int boxes = eggs / box;
System.out.println(boxes + eggs % box + " left " + (eggs - box) / 4.0);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["5 left 6.5", "32 left 6.5", "5 left 6.0", "5 left 35.0"], mono: true,
    why: [
      "`boxes` is 3 and `eggs % box` is 2. Both are `int`s and no String has appeared yet, so the first `+` adds them to 5. Then the String joins in. `(eggs - box) / 4.0` is 26 / 4.0, a `double` division that keeps its fraction.",
      "This joins the 3 and the 2 as text. Before any String appears, a `+` between two `int`s adds.",
      "4.0 is a `double`, so the division is done in `double` and keeps the fraction. Only a division between two `int`s drops it.",
      "The parentheses make `eggs - box` happen first, so 26 is divided by 4.0.",
    ],
    answer: 0,
    verify: { out: "5 left 6.5" } },

  { id: "psb-02", skill: "arith", type: "mcq", topic: "1.5",
    stem: "Consider the following code segment.",
    code: `int hits = 7;
int swings = 4;
double r1 = (double) hits / swings;
double r2 = hits / swings * 1.0;
int r3 = (int) (hits * 1.0 / swings + 0.5);
System.out.println(r1 + " " + r2 + " " + r3);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["1.75 1.0 2", "1.75 1.75 2", "1.75 1.0 1", "1.0 1.0 2"], mono: true,
    why: [
      "In `r1` the cast turns `hits` into a `double` before the division. In `r2`, `hits / swings` is `int` division and gives 1 before the `* 1.0`. In `r3`, 0.5 is added before the cast, so 2.25 becomes 2.",
      "`/` and `*` go left to right, so `hits / swings` is done first, between two `int`s, and the fraction is gone before the `* 1.0`.",
      "The 0.5 is added inside the parentheses, before the cast: 1.75 + 0.5 is 2.25, which the cast makes 2.",
      "The cast applies to `hits` alone, before dividing, so `r1` keeps the fraction.",
    ],
    answer: 0,
    verify: { out: "1.75 1.0 2" } },

  { id: "psb-03", skill: "arith", type: "mcq", topic: "1.6",
    stem: "Consider the following code segment.",
    code: `int gold = 9;
gold += 5;
gold %= 4;
gold *= gold + 3;
gold /= 3;
System.out.println(gold);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["3", "2", "6", "10"], mono: true,
    why: [
      "Each line uses the current value of `gold`: 9 + 5 is 14, 14 % 4 is 2, 2 * (2 + 3) is 10, and 10 / 3 is 3 with `int` division.",
      "`gold *= gold + 3` multiplies `gold` by the whole right side, `gold + 3`. It is not `gold * gold + 3`.",
      "`%=` keeps the remainder. This divides 14 by 4 instead.",
      "The last line still runs: `gold /= 3` divides 10 by 3, and `int` division drops the remainder.",
    ],
    answer: 0,
    verify: { out: "3" } },

  { id: "psb-04", skill: "objects", type: "mcq", topic: "1.9",
    stem: "Consider the following method and code segment, which appear in the same class.",
    methods: `public static double boost(int power, int level)
{
    power += level * 2;
    System.out.print(power + " ");
    return power / 3;
}`,
    code: `int power = 10;
double result = boost(power, 3);
System.out.println(power + " " + result);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["16 10 5.0", "16 16 5.0", "10 5.0", "16 10 5.333333333333333"], mono: true,
    why: [
      "The parameter `power` gets a copy of 10, and the method raises the copy to 16 and prints it. The `power` in the code segment is still 10. `power / 3` is `int` division, 5, which becomes 5.0 when it is returned as a `double`.",
      "Changing the parameter inside the method does not change the variable passed in. The argument's value is copied into the parameter, even when the two have the same name.",
      "The `print` inside the method runs when `boost` is called, before the `println` in the code segment.",
      "`power / 3` divides two `int`s, so the fraction is dropped before the value is returned. The `double` return type does not bring it back.",
    ],
    answer: 0,
    verify: { out: "16 10 5.0" } },

  { id: "psb-05", skill: "objects", type: "mcq", topic: "1.11",
    stem: "Consider the following code segment.",
    code: `double r = Math.sqrt(Math.pow(5, 2) - 9);
int k = (int) Math.pow(r, 2) / 3 + Math.abs(2 - 7);
System.out.println(r + " " + k);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["4.0 10", "4 10", "4.0 0", "1.0 5"], mono: true,
    why: [
      "`Math.pow(5, 2)` is 25.0, so `r` is the square root of 16.0, which is 4.0. `Math.pow(r, 2)` is 16.0, the cast makes it 16, 16 / 3 is 5, and `Math.abs(2 - 7)` adds 5.",
      "`Math.sqrt` returns a `double`, so `r` prints with a decimal point.",
      "`Math.abs` returns the distance from 0, which is never negative: `Math.abs(2 - 7)` is 5.",
      "`Math.pow(5, 2)` is 5 to the 2nd power, 25, not 5 times 2.",
    ],
    answer: 0,
    verify: { out: "4.0 10" } },

  { id: "psb-06", skill: "objects", type: "mcq", topic: "1.13",
    stem: "A `Wallet` object holds an amount of money. `new Wallet(m)` creates a wallet holding `m` dollars, the method `spend(int n)` lowers its money by `n`, and `getMoney()` returns the money it holds. Consider the following code segment.",
    classes: WALLET,
    code: `Wallet w1 = new Wallet(20);
Wallet w2 = new Wallet(20);
Wallet w3 = w1;
w3.spend(5);
w1 = w2;
w1.spend(8);
System.out.println(w1.getMoney() + " " + w2.getMoney() + " " + w3.getMoney());`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["12 12 15", "12 20 15", "12 12 12", "7 20 7"], mono: true,
    why: [
      "`w3 = w1` copies a reference, so `w3` names the first wallet, and spending 5 leaves it at 15. `w1 = w2` makes `w1` name the second wallet, so spending 8 through `w1` leaves the second wallet at 12. `w1` and `w2` both name it; `w3` still names the first.",
      "`w1 = w2` does not copy the wallet. It copies the reference, so `w1` and `w2` name the same wallet, and spending through one changes what the other shows.",
      "`w3` refers to the first wallet. Changing what `w1` refers to does not move `w3`.",
      "`w1 = w2` changes which wallet `w1` refers to, so the 8 is spent from the second wallet, not the first.",
    ],
    answer: 0,
    verify: { out: "12 12 15" } },

  { id: "psb-07", skill: "objects", type: "mcq", topic: "1.15",
    stem: "Consider the following code segment.",
    code: `String s = "lighthouse";
int p = s.indexOf("h");
String t = s.substring(p + 1, s.length() - 1) + s.substring(0, 1);
System.out.println(t + " " + s.indexOf("house") + " " + t.length());`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["thousl 5 6", "ousl 5 4", "thousel 5 7", "thousl 6 6"], mono: true,
    why: [
      "`indexOf(\"h\")` finds the first h, at index 3. `substring(4, 9)` is the letters at indexes 4 to 8, and `substring(0, 1)` is the l. \"house\" starts at index 5.",
      "`indexOf` returns the index of the FIRST match. The first h is at index 3, not the h of house.",
      "The second index of `substring` is not included, so `substring(4, s.length() - 1)` stops before the e at the last index.",
      "Indexes start at 0, so the h of house is at index 5, not 6.",
    ],
    answer: 0,
    verify: { out: "thousl 5 6" } },

  { id: "psb-08", skill: "objects", type: "mcq", topic: "1.15",
    stem: "Consider the following code segment.",
    code: `String x = "pear";
String y = "peach";
String z = "pea" + "r";
System.out.println(x.equals(z) + " " + (x.compareTo(y) > 0) + " " + (y.compareTo("pea") > 0));`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["true true true", "false true true", "true false true", "true true false"], mono: true,
    why: [
      "`z` holds the same four letters as `x`, and `equals` compares letters. In \"pear\" and \"peach\", the first difference is r against c, and r comes later, so that result is positive. \"pea\" is the start of \"peach\", so \"peach\" comes after it.",
      "`equals` compares the letters, not how the String was made. `z` holds \"pear\", so `x.equals(z)` is true.",
      "Length does not decide the order. Letter by letter, the first difference is r against c, and r comes after c, so `x.compareTo(y)` is positive.",
      "A String that starts with a shorter String comes after it, so `y.compareTo(\"pea\")` is positive.",
    ],
    answer: 0,
    verify: { out: "true true true" } },

  { id: "psb-09", skill: "if", type: "mcq", topic: "2.3",
    stem: "Consider the following code segment.",
    code: `int score = 85;
String grade = "F";
if (score >= 70)
{
    grade = "C";
}
else if (score >= 80)
{
    grade = "B";
}
if (score >= 90)
{
    grade = "A";
}
else if (score % 5 == 0)
{
    grade += "+";
}
System.out.println(grade);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["C+", "B+", "C", "B"], mono: true,
    why: [
      "In the first chain, `score >= 70` is the first true test, so `grade` becomes \"C\" and the `else if` is skipped. The second chain is a separate statement: `score >= 90` is false, and 85 is a multiple of 5.",
      "The chain is tested in order, and the first true test wins, even when a later test is also true.",
      "The second `if` is a separate statement, tested no matter what happened above, and its `else if` is true for 85.",
      "The first chain stops at `score >= 70`, and the second chain still runs and adds the +.",
    ],
    answer: 0,
    verify: { out: "C+" } },

  { id: "psb-10", skill: "if", type: "mcq", topic: "2.4",
    stem: "Consider the following code segment.",
    code: `int hp = 4;
int potions = 1;
String plan = "explore";
if (hp < 5)
{
    if (potions > 1)
    {
        plan = "drink";
    }
}
else if (potions > 0)
{
    plan = "rest";
}
else
{
    plan = "run";
}
System.out.println(plan);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["explore", "rest", "drink", "run"], mono: true,
    why: [
      "Follow the braces: the `else if` and the `else` belong to the outer `if (hp < 5)`. `hp < 5` is true, so they are skipped, and inside, `potions > 1` is false, so `plan` is never changed.",
      "The `else if` belongs to the OUTER `if`. It is tested only when `hp < 5` is false, and here it is true.",
      "`potions > 1` is false when `potions` is 1.",
      "The last `else` belongs to the outer `if`, and it runs only when `hp < 5` is false.",
    ],
    answer: 0,
    verify: { out: "explore" } },

  { id: "psb-11", skill: "bool", type: "mcq", topic: "2.6",
    stem: "Consider the following Boolean expression, where `lives` and `time` are `int` variables.",
    code: "!(lives < 1 || time >= 60)",
    question: "Which of the following expressions is equivalent to the given expression for all values of `lives` and `time`?",
    choices: ["lives >= 1 && time < 60", "lives >= 1 || time < 60", "lives > 1 && time < 60", "lives >= 1 && time <= 60"], mono: true,
    why: [
      "De Morgan: `!(p || q)` is `!p && !q`. The opposite of `lives < 1` is `lives >= 1`, and the opposite of `time >= 60` is `time < 60`.",
      "When the `!` moves inside the parentheses, the `||` must become `&&`.",
      "The opposite of `<` is `>=`. With `lives` equal to 1 and `time` equal to 30, the given expression is true and this one is false.",
      "The opposite of `>=` is `<`. With `time` equal to 60 and `lives` equal to 2, the given expression is false and this one is true.",
    ],
    answer: 0,
    verify: { cases: [
      { run: dmB("lives >= 1 && time < 60"), out: "true" },
      { run: dmB("lives >= 1 || time < 60"), out: "false" },
      { run: dmB("lives > 1 && time < 60"), out: "false" },
      { run: dmB("lives >= 1 && time <= 60"), out: "false" },
    ] } },

  { id: "psb-12", skill: "bool", type: "mcq", topic: "2.5",
    stem: "Consider the following code segment.",
    code: `int stock = 0;
int sold = 0;
for (int day = 1; day <= 6; day++)
{
    if (stock > 0 && 10 / stock < 3 || day % 3 == 0)
    {
        sold++;
    }
    stock += 2;
}
System.out.println(sold);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["4", "2", "5", "Nothing is printed. An ArithmeticException is thrown."],
    why: [
      "`&&` is done before `||`. `stock` is 0, 2, 4, 6, 8, and 10 on days 1 to 6, so `10 / stock` is 5, 2, 1, 1, and 1 on days 2 to 6, and it is below 3 on days 3 to 6. On day 1, `stock > 0` is false, so the division is skipped, and 1 is not a multiple of 3.",
      "That counts only the days that are multiples of 3. The `&&` part is true on days 4 and 5 as well.",
      "On day 1, both sides are false: the `&&` part stops at `stock > 0`, and `day % 3 == 0` is false too.",
      "Short-circuit evaluation: when `stock > 0` is false, the division after `&&` is never done, so there is no division by zero.",
    ],
    answer: 0,
    verify: { out: "4" } },

  { id: "psb-13", skill: "while", type: "mcq", topic: "2.7",
    stem: "Consider the following code segment.",
    code: `int n = 1;
int count = 0;
while (n < 200)
{
    n = n * 3 + 1;
    count++;
}
System.out.println(n + " " + count);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["364 5", "121 4", "364 6", "Nothing is printed. The loop never ends."],
    why: [
      "`n` goes 1, 4, 13, 40, 121, then 364. After 5 passes, `n < 200` is false.",
      "121 is still below 200, so the loop runs once more.",
      "The body runs 5 times. The last test, with `n` equal to 364, is false, so it is not a pass.",
      "`n * 3 + 1` is larger than `n` on every pass, so `n` passes 200 and the loop ends.",
    ],
    answer: 0,
    verify: { out: "364 5" } },

  { id: "psb-14", skill: "for", type: "mcq", topic: "2.8",
    stem: "Consider the following code segment.",
    code: `for (int t = 1; t <= 30; t += 4)
{
    System.out.println("Tick");
}`,
    question: "How many times is `Tick` printed?",
    choices: ["8", "7", "9", "30"], mono: true,
    why: [
      "`t` takes the values 1, 5, 9, 13, 17, 21, 25, and 29, one line each. The next value, 33, fails `t <= 30`.",
      "That is `(30 - 1) / 4` with the remainder dropped, the number of steps after the first value. The first value, 1, is a pass as well.",
      "This lets 33 in. The test `t <= 30` is false for 33.",
      "That counts every whole number from 1 to 30. `t` goes up by 4 each pass.",
    ],
    answer: 0,
    verify: { out: "Tick\nTick\nTick\nTick\nTick\nTick\nTick\nTick" } },

  { id: "psb-15", skill: "algo", type: "mcq", topic: "2.9",
    stem: "The following code segment is intended to print the highest of five scores.",
    code: `int best = 100;
for (int i = 1; i <= 5; i++)
{
    int score = (i * 13) % 20 + 70;
    if (score > best)
    {
        best = score;
    }
}
System.out.println(best);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["100", "89", "83", "75"], mono: true,
    why: [
      "The scores are 83, 76, 89, 82, and 75. `best` starts at 100, above every score, so `score > best` is never true and `best` never changes. Starting from the first score would fix it.",
      "89 is the highest score, the value the code segment was meant to print. It never replaces `best`, because 89 is not greater than 100.",
      "83 is the first score, but the code never stores it: only a score above 100 would replace `best`.",
      "75 is the lowest score. The test `score > best` looks for larger values, and none is above 100.",
    ],
    answer: 0,
    verify: { out: "100" } },

  { id: "psb-16", skill: "string", type: "mcq", topic: "2.10",
    stem: "Consider the following code segment.",
    code: `String s = "mississippi";
int count = 0;
while (s.indexOf("ss") >= 0)
{
    count++;
    s = s.substring(s.indexOf("ss") + 2);
}
System.out.println(count + " " + s);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["2 ippi", "2 sippi", "1 issippi", "Nothing is printed. The loop never ends."],
    why: [
      "Each pass counts the first ss and keeps the part of `s` after both of its letters. \"mississippi\" becomes \"issippi\", then \"ippi\", which has no ss, so the loop stops.",
      "`+ 2` skips both letters of the ss that was found. Keeping one s would need `+ 1`.",
      "The loop keeps going while ss is found, and \"issippi\" still has one.",
      "Each pass cuts off the ss that was found and everything before it, so `s` gets shorter and the loop ends.",
    ],
    answer: 0,
    verify: { out: "2 ippi" } },

  { id: "psb-17", skill: "string", type: "mcq", topic: "2.10",
    stem: "Consider the following code segment.",
    code: `String code = "lockpick";
String out = "";
for (int i = code.length() - 1; i >= 0; i -= 3)
{
    out += code.substring(i, i + 1);
}
System.out.println(out);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["kpo", "opk", "kpol", "Nothing is printed. A StringIndexOutOfBoundsException is thrown."],
    why: [
      "`i` starts at the last index, 7, and goes down by 3: 7, 4, and 1. The letters k, p, and o are added at the END of `out`, in the order they are found.",
      "`out += ...` puts each new letter after the ones already there, so the first letter found, k, stays first.",
      "After 1, `i -= 3` gives -2, and `i >= 0` is false, so index 0 is never used.",
      "`i` starts at `code.length() - 1`, so `i + 1` is at most `code.length()`, which `substring` allows.",
    ],
    answer: 0,
    verify: { out: "kpo" } },

  { id: "psb-18", skill: "nested", type: "mcq", topic: "2.11",
    stem: "Consider the following code segment.",
    code: `int count = 0;
for (int a = 0; a < 6; a++)
{
    for (int b = 0; b < a; b++)
    {
        count++;
    }
}
System.out.println(count);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["15", "36", "6", "21"], mono: true,
    why: [
      "The inner loop runs `a` times: 0, 1, 2, 3, 4, and then 5. That adds up to 15.",
      "That runs the inner loop 6 times for every `a`. Its test is `b < a`, so it runs `a` times.",
      "That counts the outer loop only. `count++` is inside the inner loop, which runs to the end on every pass of the outer loop.",
      "This lets `b` equal `a`. The inner test is `b < a`.",
    ],
    answer: 0,
    verify: { out: "15" } },

  { id: "psb-19", skill: "nested", type: "mcq", topic: "2.11",
    stem: "Consider the following code segment.",
    code: `for (int r = 1; r <= 3; r++)
{
    for (int c = 1; c <= 3; c++)
    {
        if ((r + c) % 2 == 0)
        {
            System.out.print("#");
        }
        else
        {
            System.out.print(c);
        }
    }
    System.out.println();
}`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["#2#\n1#3\n#2#", "#1#\n2#2\n#3#", "1#3\n#2#\n1#3", "#2#1#3#2#"], mono: true,
    why: [
      "The outer loop makes 3 lines, and the inner loop prints 3 characters in each. When `r + c` is even, a # is printed; otherwise the column number `c` is printed.",
      "This prints the row number. The code prints `c`, the column number.",
      "`(r + c) % 2 == 0` is true when `r + c` is even, and at row 1, column 1, `r + c` is 2, so the line starts with a #.",
      "`System.out.println()` after the inner loop ends each row, so each row is its own line.",
    ],
    answer: 0,
    verify: { out: "#2#\n1#3\n#2#" } },

  { id: "psb-20", skill: "runtime", type: "mcq", topic: "2.12",
    stem: "Consider the following code segment.",
    code: `int ops = 0;
for (int i = 1; i < 30; i *= 3)
{
    for (int j = 0; j < 5; j++)
    {
        ops++;
    }
}
System.out.println(ops);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["20", "150", "25", "9"], mono: true,
    why: [
      "`i` triples: 1, 3, 9, 27, and then 81 fails `i < 30`. That is 4 passes of the outer loop, and the inner loop runs 5 times on each.",
      "The outer loop does not count up by 1. Tripling takes `i` past 30 in only 4 passes.",
      "This lets 81 in. The test `i < 30` is false for 81.",
      "The inner loop runs to the end on every pass of the outer loop, so the counts multiply; they do not add.",
    ],
    answer: 0,
    verify: { out: "20" } },

  { id: "psb-frq", skill: "frq", type: "code", topic: "2.10", title: "Trail time",
    prompt: "A hiking trail is stored as a `String` with one letter for each stretch of the trail: `\"u\"` is uphill, `\"d\"` is downhill, and any other letter is flat ground. The method `stepTime`, shown below, is already written; do not write it. It takes a one-letter `String` and returns the minutes it takes to hike that stretch: 4 for `\"u\"`, 1 for `\"d\"`, and 2 for any other letter.\n\nThe variable `trail` has already been declared and holds one or more letters. Write a code segment that prints three lines:\n\n- `Time: ` followed by the total minutes to hike the whole trail\n- `Slowest at: ` followed by the index of the stretch that takes the most minutes (if several tie for the most, the smallest index)\n- `Changes: ` followed by the number of places where a letter is different from the letter right after it\n\nFor example, if `trail` is `\"ffuudfu\"`, the code segment prints\n\n```\nTime: 19\nSlowest at: 2\nChanges: 4\n```\n\nWrite the code segment as it would appear inside `main`. Call `stepTime` to find each stretch's minutes. Do not write any methods, and do not use arrays. " + QR,
    given: `/** Returns the minutes to hike one stretch: 4 for "u",
 *  1 for "d", and 2 for any other letter.
 *  Precondition: tile is one letter.
 */
public static int stepTime(String tile)`,
    sample: "trail = \"ffuudfu\" prints\nTime: 19\nSlowest at: 2\nChanges: 4\n\ntrail = \"dfdf\" prints\nTime: 6\nSlowest at: 1\nChanges: 3",
    rows: [
      { name: "Traverses the trail", earns: "Visits every letter of `trail` with a loop, without going past the end (for example `i < trail.length()` with `substring(i, i + 1)`)." },
      { name: "Calls stepTime correctly", earns: "Calls `stepTime` with a one-letter `String` and uses the `int` it returns. Writing the minutes rule again instead of calling the method does not earn this row." },
      { name: "Totals the time", earns: "Adds each stretch's minutes to a total that starts at 0, once for each letter." },
      { name: "Keeps the most minutes", earns: "Keeps the most minutes seen so far, updated inside the loop, starting from the first stretch's minutes or from 0." },
      { name: "Keeps the first slowest index", earns: "Keeps the index `i` (not the letter) that goes with the most minutes, replacing it only when a stretch takes strictly more (`>`, not `>=`), so a tie keeps the smaller index (`\"uu\"` gives 0)." },
      { name: "Counts the changes", earns: "Compares each letter with the letter right after it using `equals` (with `!` for different), never `==`, without going past the end (the last letter has nothing after it), and adds 1 for each difference." },
      { name: "Prints the results", earns: "Prints the three labeled lines once, after the loop, using the values the code computed." },
    ],
    notes: NOTE + " Starting the most minutes at 0 is fine, since every stretch takes at least 1 minute. A response that replaces the index on `>=` gives the last of the tied stretches and does not earn row 5. A response that compares `trail.substring(i + 1, i + 2)` on the last pass throws a `StringIndexOutOfBoundsException` and does not earn row 6; starting the loop at 1 and comparing with the letter before is fine.",
    solution: FB,
    verify: { cases: [
      trailCase("ffuudfu", "Time: 19\nSlowest at: 2\nChanges: 4"),
      trailCase("dfdf", "Time: 6\nSlowest at: 1\nChanges: 3"),
      trailCase("uu", "Time: 8\nSlowest at: 0\nChanges: 0"),
      trailCase("d", "Time: 1\nSlowest at: 0\nChanges: 0"),
      trailCase("ddd", "Time: 3\nSlowest at: 0\nChanges: 0"),
      trailCase("fdu", "Time: 7\nSlowest at: 2\nChanges: 2"),
      trailCase("xdddu", "Time: 9\nSlowest at: 4\nChanges: 2"),
    ] } },
];

export default {
  forms: [
    { id: "psa", name: "AP Practice Section A", group: "AP Practice Section", date: "2026-12-08", items: formA },
    { id: "psb", name: "AP Practice Section B", group: "AP Practice Section", date: "2026-12-08", items: formB },
  ],
};

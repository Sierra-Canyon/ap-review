// AP CSA Unit 2 Test Practice 4 and 5: two mock forms in the shape of U2T, added 11/11.
// Each form: 20 multiple choice (2.3, 2.3, 2.5, 2.6, 2.5, 2.6, 2.8, 2.7, 2.9, 2.9, 2.8, 2.10 x4, 2.11 x3, 2.12 x2), then one
// 7-point free response in two parts (methods and control structures). Difficulty modeled on Albert's Unit 2 spread.
// Settings: a hotel, a ski lodge, a water slide, a theater, a vending machine, a word game, a frog in a well, a dive, a lighthouse, a museum.
// In every mcq the key is written first and answer is 0 (the site shuffles).

const QR = "Use only `String` methods from the Java Quick Reference: `length`, `substring`, `indexOf`, `equals`, and `compareTo`.";
const NOTE = "One point for each row. Award a row for what the code actually does; ignore small typing slips that do not change the logic.";
const fill = (code, hole, piece) => code.replace(hole, piece);

// Checks two boolean expressions over a grid of int values (and, with bools, both values of each boolean) and prints "same" or "differs".
const equiv = ({ ints = [], bools = [], orig, alt, lo = -6, hi = 12 }) => {
  let body = `if ((${orig}) != (${alt}))\n{\n    same = false;\n}`;
  const wrap = (inner, head) => `${head}\n{\n${inner.split("\n").map((l) => "    " + l).join("\n")}\n}`;
  for (const v of [...ints].reverse()) body = wrap(body, `for (int ${v} = ${lo}; ${v} <= ${hi}; ${v}++)`);
  for (const b of [...bools].reverse()) body = wrap(`boolean ${b} = k${b} == 1;\n` + body, `for (int k${b} = 0; k${b} < 2; k${b}++)`);
  return `boolean same = true;\n${body}\nSystem.out.println(same ? "same" : "differs");`;
};

// ---------- Practice 4 code ----------

const P4_02 = `String label;
if (name.length() > 6)
{
    label = "long";
}
else if (name.indexOf("a") == 0)
{
    label = "alpine";
}
else if (name.compareTo("m") < 0)
{
    label = "early";
}
else
{
    label = "late";
}`;
const P4_02M = `public static String label(String name)
{
${P4_02.split("\n").map((l) => "    " + l).join("\n")}
    return label;
}`;

// Checks a choice for the slide rule against the rule itself, for every height from 30 to 60 and both values of adult.
const slide = (alt) => `int bad = 0;
for (int k = 0; k < 2; k++)
{
    boolean adult = k == 1;
    for (int height = 30; height <= 60; height++)
    {
        boolean rule = height >= 48 || (height >= 42 && adult);
        if (rule != (${alt}))
        {
            bad++;
        }
    }
}
System.out.println(bad);`;

const P4_06 = `boolean ok = false;
if (age >= 13)
{
    if (age <= 19 || student)
    {
        ok = true;
    }
}`;
// Runs the nested if and a one-line choice for ages 0 to 30 and both values of student, and counts the differences.
const teen = (alt) => `int bad = 0;
for (int k = 0; k < 2; k++)
{
    boolean student = k == 1;
    for (int age = 0; age <= 30; age++)
    {
${P4_06.split("\n").map((l) => "        " + l).join("\n")}
        boolean other;
        ${alt}
        if (ok != other)
        {
            bad++;
        }
    }
}
System.out.println(bad);`;

const P4_07 = `int a = 1;
int b = 1;
for (int k = 3; k <= 7; k++)
{
    int c = a + b;
    a = b;
    b = c;
}
System.out.println(a + " " + b);`;

const P4_09 = `int a = 42;
int b = 18;
int passes = 0;
while (a != b)
{
    if (a > b)
    {
        a -= b;
    }
    else
    {
        b -= a;
    }
    passes++;
}
System.out.println(a + " " + passes);`;

const P4_10 = `int first = 0;
int second = 0;
for (int k = 1; k <= 6; k++)
{
    int v = (k * 5) % 7;
    if (v > first)
    {
        second = first;
        first = v;
    }
    else if (v > second)
    {
        second = v;
    }
}
System.out.println(first + " " + second);`;

const P4_12 = `String w = "planet";
String best = "";
String out = "";
for (int i = 0; i < w.length(); i++)
{
    String ch = w.substring(i, i + 1);
    if (ch.compareTo(best) > 0)
    {
        out += ch;
        best = ch;
    }
}
System.out.println(out);`;

const P4_13 = `String s = "red fox";
String out = "";
String word = "";
for (int i = 0; i < s.length(); i++)
{
    String ch = s.substring(i, i + 1);
    if (ch.equals(" "))
    {
        out += word + " ";
        word = "";
    }
    else
    {
        word = ch + word;
    }
}
out += word;
System.out.println("[" + out + "]");`;

const P4_14 = `String w = "balloon";
String found = "none";
int count = 0;
for (int i = 0; i < w.length(); i++)
{
    String ch = w.substring(i, i + 1);
    if (w.substring(i + 1).indexOf(ch) >= 0)
    {
        found = ch;
        count++;
    }
}
System.out.println(found + " " + count);`;

const P4_15 = `String a = "pear";
String b = "Plum";
String c = "peach";
String t;
if (a.compareTo(b) > 0)
{
    t = a;
    a = b;
    b = t;
}
if (b.compareTo(c) > 0)
{
    t = b;
    b = c;
    c = t;
}
if (a.compareTo(b) > 0)
{
    t = a;
    a = b;
    b = t;
}
System.out.println(a + " " + b + " " + c);`;

const P4_16 = `String code = "a2b0c3";
String out = "";
for (int i = 0; i < code.length(); i++)
{
    String ch = code.substring(i, i + 1);
    int d = "0123456789".indexOf(ch);
    if (d >= 0)
    {
        for (int k = 0; k < d; k++)
        {
            out += "*";
        }
    }
    else
    {
        out += ch;
    }
}
System.out.println(out);`;

const P4_17 = `String s = "ABCD";
for (int r = 0; r < 3; r++)
{
    for (int c = r; c < s.length(); c += 2)
    {
        System.out.print(s.substring(c, c + 1));
    }
    System.out.println();
}`;

const P4_19 = `// Segment I
for (int i = 1; i <= 100; i++)
{
    if (i % 10 == 0)
    {
        System.out.print(i + " ");
    }
}

// Segment II
for (int i = 10; i <= 100; i += 10)
{
    System.out.print(i + " ");
}`;
// Counts how many times a loop condition is checked: the condition is wrapped in a call that counts.
const CHECKS = `static int checks = 0;

public static boolean counted(boolean test)
{
    checks++;
    return test;
}`;

const P4_20 = `int count = 0;
for (int i = 1; i <= 4; i++)
{
    for (int j = 1; j <= i * i; j++)
    {
        count++;
    }
}`;

const P4F_PRICE = `public static int price(String code)
{
    if (code.equals("A1"))
    {
        return 125;
    }
    if (code.equals("B2"))
    {
        return 150;
    }
    if (code.equals("C3"))
    {
        return 200;
    }
    if (code.equals("D5"))
    {
        return 90;
    }
    return -1;
}`;

const P4F_A = `public static int buy(String order, int money)
{
    int left = money;
    int i = 0;
    boolean stopped = false;
    while (i < order.length() && !stopped)
    {
        int cost = price(order.substring(i, i + 2));
        if (cost != -1)
        {
            if (cost <= left)
            {
                left -= cost;
            }
            else
            {
                stopped = true;
            }
        }
        i += 2;
    }
    return left;
}`;

const P4F_B = `public static String removeRow(String order, String row)
{
    String result = "";
    for (int i = 0; i < order.length(); i += 2)
    {
        String code = order.substring(i, i + 2);
        if (!code.substring(0, 1).equals(row))
        {
            result += code;
        }
    }
    return result;
}`;

// ---------- Practice 5 code ----------

const P5_01 = `int depth = 25;
int air = 50;
if (depth > 25)
{
    air -= 20;
}
else if (depth > 10)
{
    air -= 10;
}
else
{
    air -= 5;
}
if (air < 40)
{
    System.out.println("surface " + air);
}
else
{
    System.out.println("dive " + air);
}`;

const P5_07 = `String s = "";
for (int i = 10; i >= 1; i -= 3)
{
    if (i % 2 == 0)
    {
        s = s + i;
    }
    else
    {
        s = i + s;
    }
}
System.out.println(s);`;

const P5_08 = `int height = 0;
int day = 0;
while (height < 20)
{
    day++;
    height += 5;
    if (height < 20)
    {
        height -= 2;
    }
}
System.out.println(day + " " + height);`;

const P5_09 = `int n = 5814;
int sum = 0;
int sign = 1;
while (n > 0)
{
    sum += sign * (n % 10);
    sign = -sign;
    n /= 10;
}
System.out.println(sum);`;

const P5_10 = `int n = 18;
int total = 0;
for (int d = 1; d < n; d++)
{
    if (n % d == 0)
    {
        total += d;
    }
}
System.out.println(total);`;

const P5_12 = `String a = "star";
String b = "start";
int i = 0;
while (i < a.length() && i < b.length()
       && a.substring(i, i + 1).equals(b.substring(i, i + 1)))
{
    i++;
}
System.out.println(i + " letters: " + a.substring(0, i));`;

const P5_13 = `String word = "LIGHT";
String key = "31402";
String out = "";
for (int i = 0; i < key.length(); i++)
{
    int d = "0123456789".indexOf(key.substring(i, i + 1));
    out += word.substring(d, d + 1);
}
System.out.println(out);`;

const P5_14 = `String tiles = "steal";
String word = "tease";
boolean ok = true;
for (int i = 0; i < word.length(); i++)
{
    String ch = word.substring(i, i + 1);
    int p = tiles.indexOf(ch);
    if (p == -1)
    {
        ok = false;
    }
    else
    {
        tiles = tiles.substring(0, p) + tiles.substring(p + 1);
    }
}
System.out.println(ok + " " + tiles);`;

const P5_15 = {
  key: `boolean ok = true;
for (int i = 0; i < pin.length(); i++)
{
    if ("0123456789".indexOf(pin.substring(i, i + 1)) == -1)
    {
        ok = false;
    }
}`,
  any: `boolean ok = false;
for (int i = 0; i < pin.length(); i++)
{
    if ("0123456789".indexOf(pin.substring(i, i + 1)) >= 0)
    {
        ok = true;
    }
}`,
  last: `boolean ok = true;
for (int i = 0; i < pin.length(); i++)
{
    ok = "0123456789".indexOf(pin.substring(i, i + 1)) != -1;
}`,
  skip: `boolean ok = true;
for (int i = 1; i < pin.length(); i++)
{
    if ("0123456789".indexOf(pin.substring(i, i + 1)) == -1)
    {
        ok = false;
    }
}`,
};
const pinCase = (seg, pins, out) => ({ run: pins.map((p) => `{\n    String pin = "${p}";\n${seg.split("\n").map((l) => "    " + l).join("\n")}\n    System.out.print(ok + " ");\n}`).join("\n"), out });
const PINS = ["2580", "4x", "x4", "9", "a"];

const P5_16 = `String w = "bdca";
int n = 0;
for (int i = 0; i < w.length(); i++)
{
    for (int j = i + 1; j < w.length(); j++)
    {
        if (w.substring(i, i + 1).compareTo(w.substring(j, j + 1)) > 0)
        {
            n++;
        }
    }
}
System.out.println(n);`;

const P5_17 = `for (int r = 1; r <= 3; r++)
{
    int sum = 0;
    for (int c = r; c <= 3 * r; c += r)
    {
        sum += c;
    }
    System.out.print(sum + " ");
}`;

const P5_18 = `int count = 0;
for (int i = 0; i < 10; i++)
{
    int j = 0;
    while (j < 3)
    {
        j++;
        i++;
        count++;
    }
}
System.out.println(count);`;

const P5_19 = `int ops = 0;
for (int i = 1; i <= 16; i *= 2)
{
    for (int j = i; j <= 16; j++)
    {
        ops++;
    }
}`;

const P5_20 = `int ops = 0;
for (int i = 0; i < 5; i++)
{
    for (int j = 32; j > i; j /= 2)
    {
        ops++;
    }
}`;

const P5F_VISITORS = `public static int visitors(int day)
{
    int[] v = {0, 4, 9, 2, 8, 7, 1, 9};
    return v[day];
}`;
// The visitors helper above is only for checking; students see its header, not its body.
const P5F_VISITORS_B = `public static int visitors(int day)
{
    int[] v = {0, 5, 5, 5};
    return v[day];
}`;

const P5F_A = `public static int bestStart(int numDays, int k)
{
    int best = -1;
    int bestDay = 1;
    for (int start = 1; start + k - 1 <= numDays; start++)
    {
        int total = 0;
        for (int day = start; day < start + k; day++)
        {
            total += visitors(day);
        }
        if (total > best)
        {
            best = total;
            bestDay = start;
        }
    }
    return bestDay;
}`;

const P5F_B = `public static boolean validLogin(String login)
{
    int at = login.indexOf("@");
    if (at <= 0 || at == login.length() - 1)
    {
        return false;
    }
    return login.substring(at + 1).indexOf("@") == -1;
}`;

const practice4 = [
  { id: "u2p4-01", skill: "if", type: "mcq", topic: "2.3", difficulty: "moderate",
    stem: "A hotel elevator sets its display with the following code segment.",
    code: `int floor = 7;
String sign = "";
if (floor > 5)
{
    sign += "up ";
    floor -= 3;
}
if (floor > 5)
{
    sign += "high";
}
else
{
    sign += "low";
}
System.out.println(sign + " " + floor);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["up low 4", "up high 4", "up high 7", "up low 7"], mono: true,
    why: [
      "The first `if` runs and changes `floor` to 4. The second `if` tests the new value, and `4 > 5` is false, so the `else` adds \"low\".",
      "This tests the second `if` with the old value, 7. By then the first block has already set `floor` to 4.",
      "`floor -= 3` runs inside the first block, so both the second test and the printed value use 4, not 7.",
      "The change to `floor` is kept: `floor -= 3` stores 4 in `floor`, and that is the value printed.",
    ],
    answer: 0,
    verify: { out: "up low 4" } },

  { id: "u2p4-02", skill: "if", type: "mcq", topic: "2.3", difficulty: "easy",
    stem: "A ski lodge labels each trail by its name. In the following code segment, `name` is a `String` of lowercase letters.",
    code: P4_02,
    question: "Which of the following values of `name` sets `label` to `\"early\"`?",
    choices: ["\"dune\"", "\"aspen\"", "\"boulder\"", "\"pines\""], mono: true,
    why: [
      "\"dune\" has 4 letters and does not start with a, so the first two tests are false. It comes before \"m\" in the alphabet, so the third test is true.",
      "\"aspen\" also comes before \"m\", but the chain checks `indexOf(\"a\") == 0` first, and that is true, so the label is \"alpine\".",
      "\"boulder\" comes before \"m\", but it has 7 letters, so the first test, `name.length() > 6`, catches it.",
      "\"pines\" comes after \"m\", so `compareTo(\"m\")` is positive, and the chain goes on to the `else`.",
    ],
    answer: 0,
    verify: { cases: [
      { methods: P4_02M, run: `System.out.println(label("dune") + " " + label("aspen") + " " + label("boulder") + " " + label("pines"));`, out: "early alpine long late" },
    ] } },

  { id: "u2p4-03", skill: "bool", type: "mcq", topic: "2.5", difficulty: "moderate",
    stem: "A water slide lets a rider go when the rider is at least 48 inches tall, or at least 42 inches tall and riding with an adult. The `int` variable `height` and the `boolean` variable `adult` describe one rider.",
    question: "Which of the following expressions is true exactly when the rider may go?",
    choices: ["height >= 48 || height >= 42 && adult", "(height >= 48 || height >= 42) && adult", "height >= 48 || height >= 42 || adult", "height >= 48 && adult || height >= 42"], mono: true,
    why: [
      "`&&` is done before `||`, so this is `height >= 48 || (height >= 42 && adult)`: tall enough alone, or tall enough with an adult.",
      "The parentheses make the `||` happen first, so even a rider 48 inches or taller would need an adult.",
      "This lets any rider with an adult go, even one shorter than 42 inches.",
      "`&&` is done first, so this is `(height >= 48 && adult) || height >= 42`, which lets every rider 42 inches or taller go without an adult.",
    ],
    answer: 0,
    verify: { cases: [
      { run: slide("height >= 48 || height >= 42 && adult"), out: "0" },
      { run: slide("(height >= 48 || height >= 42) && adult"), out: "13" },
      { run: slide("height >= 48 || height >= 42 || adult"), out: "18" },
      { run: slide("height >= 48 && adult || height >= 42"), out: "6" },
    ] } },

  { id: "u2p4-04", skill: "bool", type: "mcq", topic: "2.6", difficulty: "moderate",
    stem: "A library charges a late fee when `!(days < 3 || member)` is true, where `days` is an `int` and `member` is a `boolean`.",
    question: "Which of the following is NOT equivalent to `!(days < 3 || member)` for all values of `days` and `member`?",
    choices: ["!(days < 3) || !member", "days >= 3 && !member", "!member && !(days < 3)", "!(days < 3) && !member"], mono: true,
    why: [
      "This negates each part but keeps `||`. With `days` equal to 5 and `member` true, the original is false, but this is true. De Morgan changes `||` to `&&`.",
      "This is De Morgan's law: `!(p || q)` is `!p && !q`, and the opposite of `<` is `>=`.",
      "This is `!p && !q` with its two parts in the other order, and `&&` gives the same result in either order.",
      "This is `!p && !q`, with `!p` left as `!(days < 3)`, which means the same as `days >= 3`.",
    ],
    answer: 0,
    verify: { cases: [
      { run: equiv({ ints: ["days"], bools: ["member"], orig: "!(days < 3 || member)", alt: "!(days < 3) || !member" }), out: "differs" },
      { run: equiv({ ints: ["days"], bools: ["member"], orig: "!(days < 3 || member)", alt: "days >= 3 && !member" }), out: "same" },
      { run: equiv({ ints: ["days"], bools: ["member"], orig: "!(days < 3 || member)", alt: "!member && !(days < 3)" }), out: "same" },
      { run: equiv({ ints: ["days"], bools: ["member"], orig: "!(days < 3 || member)", alt: "!(days < 3) && !member" }), out: "same" },
    ] } },

  { id: "u2p4-05", skill: "bool", type: "mcq", topic: "2.5", difficulty: "easy",
    stem: "A theater gives a discount when the following expression is true, where `age` is an `int` and `member` is a `boolean`.",
    code: "!member && age >= 18 || age > 65",
    question: "For which of the following values is the expression true?",
    choices: ["`age` is 40 and `member` is false", "`age` is 16 and `member` is false", "`age` is 40 and `member` is true", "`age` is 65 and `member` is true"],
    why: [
      "`&&` is done before `||`. `!member` is true and `40 >= 18` is true, so the `&&` part is true, and so is the whole expression.",
      "16 is not at least 18, so the `&&` part is false, and 16 is not above 65 either.",
      "A member makes `!member` false, so the `&&` part is false, and 40 is not above 65.",
      "The `||` part needs `age > 65`, and 65 is not greater than 65. Being a member also makes the `&&` part false.",
    ],
    answer: 0,
    verify: { cases: [
      { run: `int age = 40;\nboolean member = false;\nSystem.out.print((!member && age >= 18 || age > 65) + " ");
age = 16;\nmember = false;\nSystem.out.print((!member && age >= 18 || age > 65) + " ");
age = 40;\nmember = true;\nSystem.out.print((!member && age >= 18 || age > 65) + " ");
age = 65;\nmember = true;\nSystem.out.print(!member && age >= 18 || age > 65);`, out: "true false false false" },
    ] } },

  { id: "u2p4-06", skill: "bool", type: "mcq", topic: "2.6", difficulty: "moderate",
    stem: "A museum gives a teen discount. In the following code segment, `age` is an `int` and `student` is a `boolean`.",
    code: P4_06,
    question: "Which of the following statements sets `ok` to the same value as the code segment for all values of `age` and `student`?",
    choices: ["ok = age >= 13 && (age <= 19 || student);", "ok = age >= 13 && age <= 19 || student;", "ok = age >= 13 || age <= 19 && student;", "ok = age >= 13 && age <= 19 && student;"], mono: true,
    why: [
      "The inner `if` is reached only when `age >= 13` is true, so both tests must hold: `age >= 13`, and then `age <= 19 || student`. The parentheses keep the `||` inside the `&&`.",
      "Without parentheses `&&` is done first, so a student of any age gets `ok` true, even an 8-year-old, who never reaches the inner `if`.",
      "The outer `if` must be true, not just one of the parts. This is true for every age of 13 or more, students or not, and for students under 13 too.",
      "This needs both inner tests at once. A 25-year-old student passes the inner `if`, because `||` needs only one true side.",
    ],
    answer: 0,
    verify: { cases: [
      { run: teen("other = age >= 13 && (age <= 19 || student);"), out: "0" },
      { run: teen("other = age >= 13 && age <= 19 || student;"), out: "13" },
      { run: teen("other = age >= 13 || age <= 19 && student;"), out: "24" },
      { run: teen("other = age >= 13 && age <= 19 && student;"), out: "18" },
    ] } },

  { id: "u2p4-07", skill: "for", type: "mcq", topic: "2.8", difficulty: "moderate",
    stem: "Consider the following code segment.",
    code: P4_07,
    question: "What is printed as a result of executing the code segment?",
    choices: ["8 13", "5 8", "13 21", "32 32"], mono: true,
    why: [
      "Each pass adds the last two values: `b` takes the new sum and `a` takes the old `b`. k runs from 3 to 7, which is 5 passes, and `b` goes 2, 3, 5, 8, 13.",
      "This stops one pass early. The test is `k <= 7`, so there is a pass with k equal to 7.",
      "This runs 6 passes. k starts at 3, so there are 5 passes.",
      "That is what `b = c;` before `a = b;` would do: `a` would copy the new `b`. Here `a = b;` runs first and saves the old `b`.",
    ],
    answer: 0,
    verify: { cases: [
      { run: P4_07, out: "8 13" },
      { run: P4_07.replace("k <= 7", "k < 7"), out: "5 8" },
      { run: P4_07.replace("k = 3", "k = 2"), out: "13 21" },
      { run: P4_07.replace("    a = b;\n    b = c;", "    b = c;\n    a = b;"), out: "32 32" },
    ] } },

  { id: "u2p4-08", skill: "while", type: "mcq", topic: "2.7", difficulty: "moderate",
    stem: "Consider the following code segment.",
    code: `int n = 6;
int steps = 0;
int top = n;
while (n != 1)
{
    if (n % 2 == 0)
    {
        n = n / 2;
    }
    else
    {
        n = 3 * n + 1;
    }
    steps++;
    if (n > top)
    {
        top = n;
    }
}
System.out.println(steps + " " + top);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["8 16", "9 16", "8 10", "7 16"], mono: true,
    why: [
      "n goes 3, 10, 5, 16, 8, 4, 2, 1, which is 8 passes. The largest value it reaches is 16.",
      "This counts the starting value as a step. `steps` goes up once per pass, and the first pass turns 6 into 3.",
      "10 is the first value above 6, but later 5 becomes 16, which replaces it as `top`.",
      "The pass that turns 2 into 1 counts too. The loop stops only at the check after n has become 1.",
    ],
    answer: 0,
    verify: { out: "8 16" } },

  { id: "u2p4-09", skill: "algo", type: "mcq", topic: "2.9", difficulty: "difficult",
    stem: "Consider the following code segment.",
    code: P4_09,
    question: "What is printed as a result of executing the code segment?",
    choices: ["6 4", "6 5", "6 3", "24 1"], mono: true,
    why: [
      "Each pass takes the smaller value away from the larger: (42, 18), (24, 18), (6, 18), (6, 12), (6, 6). That is 4 passes, and then `a != b` is false.",
      "The last check, with both equal to 6, is false, and a check that fails is not a pass.",
      "That is what two separate `if` statements would do, since both could change a value in one pass. With `else`, each pass changes only one of them.",
      "Those are the values after the first pass. The loop keeps going while `a != b`.",
    ],
    answer: 0,
    verify: { cases: [
      { run: P4_09, out: "6 4" },
      { run: P4_09.replace("    }\n    else\n    {\n        b -= a;", "    }\n    if (b > a)\n    {\n        b -= a;"), out: "6 3" },
    ] } },

  { id: "u2p4-10", skill: "algo", type: "mcq", topic: "2.9", difficulty: "difficult",
    stem: "The following code segment finds the largest and second largest of six values.",
    code: P4_10,
    question: "What is printed as a result of executing the code segment?",
    choices: ["6 5", "6 4", "6 6", "6 2"], mono: true,
    why: [
      "The values are 5, 3, 1, 6, 4, and 2. When 6 arrives, the old largest, 5, moves to `second` before `first` changes, and no later value beats 5.",
      "This leaves out `second = first;`. When a new largest value arrives, the old largest becomes the second largest.",
      "That is what a separate `if` would do: a new largest value would be copied into `second` too. The `else if` runs only when v is not a new largest.",
      "2 is the last value. `second` changes only when a value is larger than it.",
    ],
    answer: 0,
    verify: { cases: [
      { run: P4_10, out: "6 5" },
      { run: P4_10.replace("        second = first;\n", ""), out: "6 4" },
      { run: P4_10.replace("else if (v > second)", "if (v > second)"), out: "6 6" },
    ] } },

  { id: "u2p4-11", skill: "for", type: "mcq", topic: "2.8", difficulty: "easy",
    stem: "Consider the following code segment.",
    code: `for (int i = 1; i <= 3; i++)
{
    System.out.print(i + i + "" + i);
}`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["214263", "111222333", "369", "21 42 63"], mono: true,
    why: [
      "`+` works left to right. `i + i` adds two ints, then `+ \"\"` makes a String, and the last `+ i` joins i as text. That gives 21, then 42, then 63.",
      "The first `+` has an int on each side, so it adds. Joining starts only when `\"\"` is reached.",
      "This adds all three. Once `\"\"` is joined the result is a String, so the last `+ i` joins i as text.",
      "`print` adds nothing between values, and the code prints no spaces.",
    ],
    answer: 0,
    verify: { out: "214263" } },

  { id: "u2p4-12", skill: "string", type: "mcq", topic: "2.10", difficulty: "moderate",
    stem: "Consider the following code segment.",
    code: P4_12,
    question: "What is printed as a result of executing the code segment?",
    choices: ["pt", "pnt", "pla", "planet"], mono: true,
    why: [
      "A letter is kept only when it comes later in the alphabet than every letter kept so far, because `best` holds the latest one. p is kept, l, a, n, and e come before p, and t comes after p.",
      "That compares each letter with the one just before it. The code compares with `best`, the latest letter kept so far.",
      "That keeps the letters that come earlier. `compareTo` returns a positive number when `ch` comes later than `best`.",
      "That is what happens if `best` never changes: every letter comes after the empty String. `best = ch;` raises the bar each time a letter is kept.",
    ],
    answer: 0,
    verify: { cases: [
      { run: P4_12, out: "pt" },
      { run: P4_12.replace("> 0)", "< 0 || best.equals(\"\"))"), out: "pla" },
      { run: P4_12.replace("        best = ch;\n", ""), out: "planet" },
    ] } },

  { id: "u2p4-13", skill: "string", type: "mcq", topic: "2.10", difficulty: "difficult",
    stem: "Consider the following code segment.",
    code: P4_13,
    question: "What is printed as a result of executing the code segment?",
    choices: ["[der xof]", "[xof der]", "[der ]", "[red fox]"], mono: true,
    why: [
      "Each letter goes in front of `word`, so each word is built backward. At the space, the backward word and a space are added to `out`. The last word has no space after it, and the line after the loop adds it.",
      "That reverses the whole String. `word` is emptied at the space, so each word is reversed on its own, and the words stay in order.",
      "The last word never meets a space, so the `if` never adds it, but `out += word;` after the loop does.",
      "`ch + word` puts each new letter in front of the letters already in `word`, which builds the word backward.",
    ],
    answer: 0,
    verify: { cases: [
      { run: P4_13, out: "[der xof]" },
      { run: P4_13.replace("out += word;\n", ""), out: "[der ]" },
    ] } },

  { id: "u2p4-14", skill: "string", type: "mcq", topic: "2.10", difficulty: "moderate",
    stem: "Consider the following code segment.",
    code: P4_14,
    question: "What is printed as a result of executing the code segment?",
    choices: ["o 2", "l 1", "n 7", "o 4"], mono: true,
    why: [
      "`w.substring(i + 1)` is the part after index i, so the test is true when the letter shows up again later. That happens at the first l and the first o. `found` keeps the last one, and `count` is 2.",
      "The loop does not stop at the first letter it finds. It keeps going, and the first o replaces l.",
      "That is what searching all of `w` would give, since every letter is found in `w` itself. The code searches only the part after index i.",
      "The second l and the second o have no copy after them. Only a letter with a copy later in the word counts.",
    ],
    answer: 0,
    verify: { cases: [
      { run: P4_14, out: "o 2" },
      { run: P4_14.replace("w.substring(i + 1).indexOf(ch)", "w.indexOf(ch)"), out: "n 7" },
    ] } },

  { id: "u2p4-15", skill: "string", type: "mcq", topic: "2.10", difficulty: "difficult",
    stem: "When Strings are compared with `compareTo`, every uppercase letter comes before every lowercase letter. Consider the following code segment.",
    code: P4_15,
    question: "What is printed as a result of executing the code segment?",
    choices: ["Plum peach pear", "peach pear Plum", "Plum pear peach", "pear peach Plum"], mono: true,
    why: [
      "\"pear\" comes after \"Plum\", because uppercase P comes first, so the first swap puts \"Plum\" in `a`. \"pear\" comes after \"peach\" (r is after c), so the second swap fixes them. The last test finds \"Plum\" before \"peach\", so nothing changes.",
      "That is the order with the case ignored. Uppercase P comes before every lowercase letter, so \"Plum\" comes first.",
      "This stops after the first swap. \"pear\" and \"peach\" first differ at r and c, and r comes later, so the second `if` swaps them.",
      "That is the order from last to first, as if each `if` swapped when the result was negative. A positive result means the first String comes later, so the swap moves the earlier String forward.",
    ],
    answer: 0,
    verify: { cases: [
      { run: P4_15, out: "Plum peach pear" },
      { run: P4_15.replaceAll("> 0)", "< 0)"), out: "pear peach Plum" },
    ] } },

  { id: "u2p4-16", skill: "nested", type: "mcq", topic: "2.11", difficulty: "moderate",
    stem: "Consider the following code segment.",
    code: P4_16,
    question: "What is printed as a result of executing the code segment?",
    choices: ["a**bc***", "a***b*c****", "a2**b0c3***", "a**b0c***"], mono: true,
    why: [
      "A letter is copied. A digit gives that many stars and is not copied: 2 gives two stars, 0 gives none, and 3 gives three.",
      "This runs the inner loop d + 1 times. With `k < d`, a 2 gives two stars and a 0 gives none.",
      "A digit is not added. The `else` adds a character only when it is not a digit.",
      "0 is a digit too: `indexOf` returns 0 for it, and `0 >= 0` is true. It gives no stars and is not copied.",
    ],
    answer: 0,
    verify: { cases: [
      { run: P4_16, out: "a**bc***" },
      { run: P4_16.replace("k < d", "k <= d"), out: "a***b*c****" },
      { run: P4_16.replace("d >= 0", "d > 0"), out: "a**b0c***" },
    ] } },

  { id: "u2p4-17", skill: "nested", type: "mcq", topic: "2.11", difficulty: "easy",
    stem: "Consider the following code segment.",
    code: P4_17,
    question: "What is printed as a result of executing the code segment?",
    choices: ["AC\nBD\nC", "ABCD\nBCD\nCD", "ACBDC", "AC\nBD"], mono: true,
    why: [
      "c starts at r and goes up by 2, so row 0 prints A and C, row 1 prints B and D, and row 2 prints only C. `println()` ends each row.",
      "This moves c up by 1. With `c += 2`, every other letter is printed.",
      "This never ends a line. `println()` after the inner loop starts a new line for each row.",
      "The outer loop runs for r equal to 0, 1, and 2, so there are three lines. The third starts at index 2.",
    ],
    answer: 0,
    verify: { out: "AC\nBD\nC" } },

  { id: "u2p4-18", skill: "nested", type: "mcq", topic: "2.11", difficulty: "easy",
    stem: "Consider the following code segment.",
    code: `int count = 0;
for (int r = 1; r <= 3; r++)
{
    for (int c = 1; c <= r; c++)
    {
        count++;
    }
    System.out.print(count + " ");
}`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["1 3 6", "1 2 3", "6", "3 3 3"], mono: true,
    why: [
      "`count` is declared before both loops, so it keeps growing. The inner loop adds 1, then 2 more, then 3 more, and the total is printed after each row.",
      "That is how many times the inner loop runs in each row. `count` is never set back to 0, so each print shows the running total.",
      "The print is inside the outer loop, so it runs once for each row, not once at the end.",
      "The inner loop runs r times, so it adds 1, then 2, then 3, not 3 every time.",
    ],
    answer: 0,
    verify: { out: "1 3 6 " } },

  { id: "u2p4-19", skill: "runtime", type: "mcq", topic: "2.12", difficulty: "difficult",
    stem: "Both of the following code segments print the multiples of 10 from 10 to 100.",
    code: P4_19,
    question: "How many times is the loop condition, `i <= 100`, checked in each segment?",
    choices: ["I: 101 times, II: 11 times", "I: 100 times, II: 10 times", "I: 101 times, II: 10 times", "I: 100 times, II: 11 times"],
    why: [
      "A loop condition is checked once before each pass, and once more when it is false and the loop ends. Segment I makes 100 passes and Segment II makes 10, so the checks are 101 and 11.",
      "Those are the numbers of passes. The last check, the one that is false, is a check too.",
      "Segment II also has a last check, with i equal to 110, that ends the loop.",
      "Segment I also has a last check, with i equal to 101, that ends the loop.",
    ],
    answer: 0,
    verify: { cases: [
      { methods: CHECKS, run: `for (int i = 1; counted(i <= 100); i++)
{
}
System.out.print(checks + " ");
checks = 0;
for (int i = 10; counted(i <= 100); i += 10)
{
}
System.out.println(checks);`, out: "101 11" },
      { run: P4_19, out: "10 20 30 40 50 60 70 80 90 100 10 20 30 40 50 60 70 80 90 100" },
    ] } },

  { id: "u2p4-20", skill: "runtime", type: "mcq", topic: "2.12", difficulty: "moderate",
    stem: "Consider the following code segment.",
    code: P4_20,
    question: "How many times is the statement `count++;` executed?",
    choices: ["30", "64", "10", "16"], mono: true,
    why: [
      "For each i, the inner loop runs `i * i` times: 1, 4, 9, and 16. Add them.",
      "That is 4 times 16, as if every inner loop ran 16 times. The inner loop is shorter when i is small.",
      "That runs the inner loop i times. The bound is `i * i`, so it runs 1, 4, 9, and 16 times.",
      "That is only the last inner loop, with i equal to 4. The inner loop runs again, from 1, on every pass of the outer loop.",
    ],
    answer: 0,
    verify: { cases: [
      { run: P4_20 + "\nSystem.out.println(count);", out: "30" },
    ] } },

  { id: "u2p4-frq", skill: "frq", type: "code", topic: "2.9", title: "The snack machine",
    prompt: "A snack machine has slots named by a letter and a digit, such as `\"B2\"`. The method `price`, shown below, is already written; do not write it. It returns the price of the snack in a slot, in cents, or -1 if that slot is empty.\n\nAn **order** is a `String` of slot codes written one after another with nothing between them, so `\"A1C3\"` is the order for slot A1 and then slot C3.\n\n" +
      "**Part (a).** Write the method `buy`. The machine handles the codes of `order` in order, starting with `money` cents. An empty slot is skipped. A snack that costs no more than the money left is bought, and its price is taken from the money left. The machine stops at the first snack that costs more than the money left: nothing in the order after it is bought. The method returns the money left. You must use `price` appropriately to receive full credit.\n\n" +
      "For example, suppose `price` returns 125 for A1, 150 for B2, 200 for C3, 90 for D5, and -1 for every other slot.\n\n" +
      "- `buy(\"A1A4C3D5B2\", 400)` returns 75. A1 leaves 275, A4 is empty, C3 leaves 75, and D5 costs more than 75, so the machine stops before B2.\n" +
      "- `buy(\"D5D5D5\", 200)` returns 20. The third D5 costs more than the 20 left.\n" +
      "- `buy(\"\", 300)` returns 300.\n\n" +
      "**Part (b).** Write the method `removeRow`, which returns `order` with every code whose letter is `row` taken out. The other codes stay in the same order.\n\n" +
      "- `removeRow(\"A1C3A2B2\", \"A\")` returns `\"C3B2\"`.\n" +
      "- `removeRow(\"B2B2\", \"B\")` returns `\"\"`.\n" +
      "- `removeRow(\"C3D5\", \"A\")` returns `\"C3D5\"`.\n\n" +
      "Do not use arrays. " + QR,
    given: `/** Returns the price, in cents, of the snack in slot code,
 *  or -1 if that slot is empty.
 *  Precondition: code is a letter followed by a digit, such as "B2".
 */
public static int price(String code)
{ /* implementation not shown */ }

/** Returns the money left after the machine handles order, as described in part (a).
 *  Precondition: order is made of two-character slot codes; money >= 0
 */
public static int buy(String order, int money)
{ /* to be implemented in part (a) */ }

/** Returns order with every code whose letter is row removed, as described in part (b).
 *  Precondition: order is made of two-character slot codes; row is one capital letter.
 */
public static String removeRow(String order, String row)
{ /* to be implemented in part (b) */ }`,
    sample: "price: A1 is 125, B2 is 150, C3 is 200, D5 is 90, any other slot is -1\nbuy(\"A1A4C3D5B2\", 400) returns 75\nbuy(\"D5D5D5\", 200) returns 20\nbuy(\"\", 300) returns 300\n\nremoveRow(\"A1C3A2B2\", \"A\") returns \"C3B2\"\nremoveRow(\"B2B2\", \"B\") returns \"\"\nremoveRow(\"C3D5\", \"A\") returns \"C3D5\"",
    rows: [
      { name: "(a) Calls price on each code", earns: "Calls `price` with each two-character code of `order` in turn (`order.substring(i, i + 2)` with i going up by 2), never past the end of `order`. Not earned for calling `price` with one character or with the whole order." },
      { name: "(a) Skips an empty slot", earns: "A code whose price is -1 changes nothing, and the machine goes on to the next code. Not earned if -1 is added to the money left or if an empty slot stops the machine." },
      { name: "(a) Buys a snack it can afford", earns: "Inside the loop, takes the price from the money left when the price is at most the money left. A snack that costs exactly the money left is bought." },
      { name: "(a) Stops and returns the money left (algorithm)", earns: "Buys nothing after the first snack that costs more than the money left, and returns the money left in every case, including an empty order. Not earned if the response skips that snack and keeps buying, or prints instead of returning." },
      { name: "(b) Looks at the letter of each code", earns: "Visits the codes two characters at a time and takes the letter of each one (`order.substring(i, i + 1)` with i going up by 2), never past the end of `order`." },
      { name: "(b) Compares the letter with row", earns: "Compares the letter with `row` using `equals` (or `compareTo` with 0), never with `==`." },
      { name: "(b) Builds and returns the result (algorithm)", earns: "Returns a new `String` of the codes whose letter is not `row`, each kept whole and in order, and `\"\"` when every code is removed. Not earned if only the digits or only the letters are kept." },
    ],
    notes: NOTE + " Part (a) may also use `break` or `return` to stop at the first snack that costs too much. A response that checks `cost < left` instead of `cost <= left` does not earn row 3. In part (b), building the result by removing codes from a copy of `order` is fine. Using `charAt` or `char` does not earn row 6.",
    solution: P4F_A + "\n\n" + P4F_B,
    verify: { cases: [
      { methods: P4F_PRICE + "\n\n" + P4F_A, run: `System.out.println(buy("A1A4C3D5B2", 400));
System.out.println(buy("D5D5D5", 200));
System.out.println(buy("", 300));
System.out.println(buy("C3A1", 200));
System.out.println(buy("Z9Z9", 10));
System.out.println(buy("C3A1B2", 150));`, out: "75\n20\n300\n0\n10\n150" },
      { methods: P4F_B, run: `System.out.println("[" + removeRow("A1C3A2B2", "A") + "]");
System.out.println("[" + removeRow("B2B2", "B") + "]");
System.out.println("[" + removeRow("C3D5", "A") + "]");
System.out.println("[" + removeRow("A1", "A") + "]");
System.out.println("[" + removeRow("", "C") + "]");`, out: "[C3B2]\n[]\n[C3D5]\n[]\n[]" },
    ] } },
];

const practice5 = [
  { id: "u2p5-01", skill: "if", type: "mcq", topic: "2.3", difficulty: "easy",
    stem: "A diver's air is tracked with the following code segment.",
    code: P5_01,
    question: "What is printed as a result of executing the code segment?",
    choices: ["dive 40", "surface 30", "dive 45", "surface 35"], mono: true,
    why: [
      "`25 > 25` is false, so the chain goes on, and `25 > 10` is true, which takes 10. 40 is not less than 40, so the `else` prints.",
      "That treats `depth > 25` as true. 25 is not greater than 25, so the first branch does not run.",
      "That sends 25 to the last `else`. The second test, `depth > 10`, is true first.",
      "Only one branch of an `if` and `else if` chain runs, so 10 and 5 are never both taken.",
    ],
    answer: 0,
    verify: { out: "dive 40" } },

  { id: "u2p5-02", skill: "if", type: "mcq", topic: "2.3", difficulty: "moderate",
    stem: "A concert hall picks a section from a seat number. Consider the following code segment.",
    code: `int seat = 9;
String row;
if (seat + 1 % 2 == 0)
{
    row = "pair";
}
else if (seat % 3 == 0)
{
    row = "box";
}
else
{
    row = "floor";
}
System.out.println(row);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["box", "pair", "floor", "pair box"], mono: true,
    why: [
      "`%` is done before `+`, so the first test is `9 + (1 % 2) == 0`, which is `10 == 0`, and that is false. Then `9 % 3 == 0` is true.",
      "That reads the first test as `(seat + 1) % 2 == 0`. Without parentheses, `1 % 2` is worked out before the addition.",
      "The second test is true, since 9 is a multiple of 3, so the `else` does not run.",
      "At most one branch of an `if` and `else if` chain runs, and `row` holds one word.",
    ],
    answer: 0,
    verify: { out: "box" } },

  { id: "u2p5-03", skill: "bool", type: "mcq", topic: "2.5", difficulty: "difficult",
    stem: "Consider the following expression, where `a` and `b` are `int` variables.",
    code: "a > b || a <= b && b > 0",
    question: "Which of the following is equivalent to the expression for all integer values of `a` and `b`?",
    choices: ["a > b || b > 0", "b > 0", "a > b && b > 0", "a <= b || b > 0"], mono: true,
    why: [
      "`&&` is done first. The right side is reached only when `a > b` is false, and then `a <= b` is true, so the right side comes down to `b > 0`.",
      "When a is 5 and b is -1, `a > b` is true, so the expression is true, but `b > 0` is false.",
      "When a is 5 and b is -1, `a > b` makes the expression true by itself, but this is false because `b > 0` is false.",
      "When a is 5 and b is -1, the expression is true, but `a <= b` and `b > 0` are both false.",
    ],
    answer: 0,
    verify: { cases: [
      { run: equiv({ ints: ["a", "b"], orig: "a > b || a <= b && b > 0", alt: "a > b || b > 0" }), out: "same" },
      { run: equiv({ ints: ["a", "b"], orig: "a > b || a <= b && b > 0", alt: "b > 0" }), out: "differs" },
      { run: equiv({ ints: ["a", "b"], orig: "a > b || a <= b && b > 0", alt: "a > b && b > 0" }), out: "differs" },
      { run: equiv({ ints: ["a", "b"], orig: "a > b || a <= b && b > 0", alt: "a <= b || b > 0" }), out: "differs" },
    ] } },

  { id: "u2p5-04", skill: "bool", type: "mcq", topic: "2.6", difficulty: "easy",
    stem: "Consider the following expression, where `done` is a `boolean` and `count` is an `int`.",
    code: "!(!done || count < 3)",
    question: "Which of the following is equivalent to the expression for all values of `done` and `count`?",
    choices: ["done && count >= 3", "!done && count >= 3", "done || count >= 3", "done && count > 3"], mono: true,
    why: [
      "De Morgan turns `!(p || q)` into `!p && !q`. The opposite of `!done` is `done`, and the opposite of `count < 3` is `count >= 3`.",
      "The `!` in front of the parentheses cancels the `!` on `done`: `!(!done)` is `done`.",
      "The `||` has to become `&&` as well.",
      "The opposite of `<` is `>=`, not `>`. Try `count` equal to 3.",
    ],
    answer: 0,
    verify: { cases: [
      { run: equiv({ ints: ["count"], bools: ["done"], orig: "!(!done || count < 3)", alt: "done && count >= 3" }), out: "same" },
      { run: equiv({ ints: ["count"], bools: ["done"], orig: "!(!done || count < 3)", alt: "!done && count >= 3" }), out: "differs" },
      { run: equiv({ ints: ["count"], bools: ["done"], orig: "!(!done || count < 3)", alt: "done || count >= 3" }), out: "differs" },
      { run: equiv({ ints: ["count"], bools: ["done"], orig: "!(!done || count < 3)", alt: "done && count > 3" }), out: "differs" },
    ] } },

  { id: "u2p5-05", skill: "bool", type: "mcq", topic: "2.5", difficulty: "moderate",
    stem: "Consider the following code segment.",
    code: `int hp = 0;
int potions = 3;
boolean a = hp < 1 || potions > 5 && hp > 2;
boolean b = (potions > 0 || hp > 0) && hp > 5;
boolean c = !(hp != 0 && potions > 2);
System.out.println(a + " " + b + " " + c);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["true false true", "false false true", "true true true", "true false false"], mono: true,
    why: [
      "In `a`, `&&` is done first, and `hp < 1` is already true. In `b`, the parentheses come first, and then `&& hp > 5` is false. In `c`, `hp != 0` is false, so the `&&` is false, and the `!` makes it true.",
      "That groups the `||` first in `a`. Without parentheses, `&&` binds tighter, so `a` is `hp < 1 || (potions > 5 && hp > 2)`, which is true.",
      "That ignores the parentheses in `b`. They make the `||` happen first, and then `&& hp > 5`, which is false, makes `b` false.",
      "In `c`, the `!` applies to the whole `&&`, which is false, so `c` is true. Moving the `!` inside would need `&&` to become `||` too.",
    ],
    answer: 0,
    verify: { out: "true false true" } },

  { id: "u2p5-06", skill: "bool", type: "mcq", topic: "2.6", difficulty: "moderate",
    stem: "Consider the following two expressions, where `x` and `y` are `int` variables.",
    code: `// Expression I
x > 0 && y > 0 || x < 0

// Expression II
x > 0 && (y > 0 || x < 0)`,
    question: "For which of the following values do the two expressions have different values?",
    choices: ["`x` is -1 and `y` is 5", "`x` is 12 and `y` is -30", "`x` is 12 and `y` is 30", "`x` is 0 and `y` is 100"],
    why: [
      "With x equal to -1, `x < 0` makes Expression I true, because `&&` is done before `||`. Expression II needs `x > 0` first, so it is false.",
      "Both are false. `y > 0` and `x < 0` are both false, so neither expression can be true.",
      "Both are true. `x > 0` and `y > 0` are both true, which makes each expression true.",
      "Both are false. With x equal to 0, `x > 0` and `x < 0` are both false, whatever y is.",
    ],
    answer: 0,
    verify: { cases: [
      { run: `int[][] v = {{-1, 5}, {12, -30}, {12, 30}, {0, 100}};
for (int k = 0; k < 4; k++)
{
    int x = v[k][0];
    int y = v[k][1];
    boolean one = x > 0 && y > 0 || x < 0;
    boolean two = x > 0 && (y > 0 || x < 0);
    System.out.print((one != two) + " ");
}`, out: "true false false false" },
    ] } },

  { id: "u2p5-07", skill: "for", type: "mcq", topic: "2.8", difficulty: "moderate",
    stem: "Consider the following code segment.",
    code: P5_07,
    question: "What is printed as a result of executing the code segment?",
    choices: ["17104", "10741", "7104", "41071"], mono: true,
    why: [
      "i takes the values 10, 7, 4, and 1. Even values go on the end and odd values go in front: \"10\", \"710\", \"7104\", \"17104\".",
      "That adds every value to the end. The odd values, 7 and 1, are put in front by `s = i + s`.",
      "This stops before 1. The test is `i >= 1`, and 1 meets it.",
      "This swaps the two branches. `i % 2 == 0` is true for the even values, and they go on the end.",
    ],
    answer: 0,
    verify: { cases: [
      { run: P5_07, out: "17104" },
      { run: P5_07.replace("s = i + s;", "s = s + i;"), out: "10741" },
      { run: P5_07.replace("i >= 1", "i > 1"), out: "7104" },
      { run: P5_07.replace("i % 2 == 0", "i % 2 == 1"), out: "41071" },
    ] } },

  { id: "u2p5-08", skill: "while", type: "mcq", topic: "2.7", difficulty: "difficult",
    stem: "A frog climbs out of a well 20 feet deep. It climbs 5 feet each day and slides back 2 feet each night, unless it has reached the top. Consider the following code segment.",
    code: P5_08,
    question: "What is printed as a result of executing the code segment?",
    choices: ["6 20", "7 21", "4 20", "5 15"], mono: true,
    why: [
      "The frog gains 3 feet a day: 3, 6, 9, 12, and 15 after five days. On day 6 it climbs to 20, so the `if` does not slide it back, and `height < 20` is false.",
      "That slides the frog back every night, even after it reaches the top. The `if` skips the slide once `height` is 20.",
      "That leaves out the nightly slide. Each day the frog climbs 5 and then slides back 2 while it is below the top.",
      "That stops one day early. After day 5 `height` is 15, and `15 < 20` is true, so day 6 runs.",
    ],
    answer: 0,
    verify: { cases: [
      { run: P5_08, out: "6 20" },
      { run: P5_08.replace("    if (height < 20)\n    {\n        height -= 2;\n    }", "    height -= 2;"), out: "7 21" },
    ] } },

  { id: "u2p5-09", skill: "algo", type: "mcq", topic: "2.9", difficulty: "moderate",
    stem: "Consider the following code segment.",
    code: P5_09,
    question: "What is printed as a result of executing the code segment?",
    choices: ["6", "-6", "18", "11"], mono: true,
    why: [
      "`n % 10` takes the digits from the right: 4, 1, 8, 5. The sign flips after each one, so the sum is `4 - 1 + 8 - 5`.",
      "That starts from the left digit. `n % 10` is the last digit, so the first digit added is 4.",
      "That adds every digit. `sign` switches between 1 and -1 after each digit, so every other digit is subtracted.",
      "That stops before the last digit, as `n > 9` would. The test is `n > 0`, so the 5 is used too.",
    ],
    answer: 0,
    verify: { cases: [
      { run: P5_09, out: "6" },
      { run: P5_09.replace("n > 0", "n > 9"), out: "11" },
    ] } },

  { id: "u2p5-10", skill: "algo", type: "mcq", topic: "2.9", difficulty: "easy",
    stem: "Consider the following code segment.",
    code: P5_10,
    question: "What is printed as a result of executing the code segment?",
    choices: ["21", "39", "5", "20"], mono: true,
    why: [
      "The values of d that divide 18 with no remainder are 1, 2, 3, 6, and 9, and their sum is 21. The loop stops before 18 itself.",
      "That also adds 18. The test is `d < n`, so d never reaches 18.",
      "That is how many divisors there are. The code adds d, not 1.",
      "That leaves out 1. d starts at 1, and `18 % 1` is 0.",
    ],
    answer: 0,
    verify: { cases: [
      { run: P5_10, out: "21" },
      { run: P5_10.replace("d < n", "d <= n"), out: "39" },
      { run: P5_10.replace("int d = 1", "int d = 2"), out: "20" },
    ] } },

  { id: "u2p5-11", skill: "for", type: "mcq", topic: "2.8", difficulty: "easy",
    stem: "Consider the following code segment.",
    code: `for (int k = 1; k < 20; k = k * 2 + 1)
{
    System.out.print(k + " ");
}`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["1 3 7 15", "1 3 7 15 31", "1 2 4 8 16", "3 7 15"], mono: true,
    why: [
      "k starts at 1, and each update doubles k and adds 1: 3, 7, 15. The next value, 31, fails `k < 20`.",
      "31 is never printed. The test is checked before each pass, and `31 < 20` is false.",
      "That doubles k without adding 1. The update is `k * 2 + 1`.",
      "The first pass uses k equal to 1. The update runs only after each pass.",
    ],
    answer: 0,
    verify: { out: "1 3 7 15 " } },

  { id: "u2p5-12", skill: "string", type: "mcq", topic: "2.10", difficulty: "moderate",
    stem: "A search box finds how many letters two words share at the start. Consider the following code segment.",
    code: P5_12,
    question: "What is the result of executing the code segment?",
    choices: ["4 letters: star", "Nothing is printed. A StringIndexOutOfBoundsException is thrown.", "3 letters: sta", "5 letters: start"], mono: true,
    why: [
      "All 4 letters of \"star\" match. Then i is 4, and `i < a.length()` is false, so `&&` stops before `a.substring(4, 5)` is ever called.",
      "`a.substring(4, 5)` would throw, but it is never called. `&&` checks `i < a.length()` first, finds it false, and skips the rest.",
      "The match at index 3, r and r, counts too. i stops at 4, the first index past the end of \"star\".",
      "i cannot pass the length of the shorter word, 4, because `i < a.length()` is checked before each pass.",
    ],
    answer: 0,
    verify: { cases: [
      { run: P5_12, out: "4 letters: star" },
      { run: P5_12.replace("while (i < a.length() && i < b.length()\n       && a.substring(i, i + 1).equals(b.substring(i, i + 1)))", "while (a.substring(i, i + 1).equals(b.substring(i, i + 1)))"), throws: "StringIndexOutOfBoundsException" },
    ] } },

  { id: "u2p5-13", skill: "string", type: "mcq", topic: "2.10", difficulty: "moderate",
    stem: "A lighthouse keeper writes a word in code: each digit of `key` is the index of a letter of `word`. Consider the following code segment.",
    code: P5_13,
    question: "What is printed as a result of executing the code segment?",
    choices: ["HITLG", "GLTIH", "HITL", "31402"], mono: true,
    why: [
      "`indexOf` turns each digit into the int it stands for, and that int is used as an index into \"LIGHT\": 3 is H, 1 is I, 4 is T, 0 is L, and 2 is G.",
      "That reads `key` from the end. i goes up from 0, so the digits are used in order: 3, 1, 4, 0, 2.",
      "The last digit, 2, is used too. The loop runs while `i < key.length()`, which is 5 passes. Index 4 of \"LIGHT\" is T, the last letter, and it is inside the String.",
      "The digits are not added to `out`. Each one is used as an index, and the letter at that index is added.",
    ],
    answer: 0,
    verify: { out: "HITLG" } },

  { id: "u2p5-14", skill: "string", type: "mcq", topic: "2.10", difficulty: "difficult",
    stem: "A word game checks whether a word can be spelled with a player's letter tiles, using each tile once. Consider the following code segment.",
    code: P5_14,
    question: "What is printed as a result of executing the code segment?",
    choices: ["false l", "true steal", "true l", "false sl"], mono: true,
    why: [
      "Each letter found is cut out of `tiles`: \"seal\", \"sal\", \"sl\", \"l\". The second e is not in \"l\", so `ok` becomes false.",
      "`tiles` is reassigned each time a letter is used, so a used tile cannot be used again. The word has two e's and the tiles have one.",
      "The second e is checked against what is left, \"l\", and `indexOf` returns -1, so `ok` becomes false.",
      "The s is used before the last e is checked, so only l is left.",
    ],
    answer: 0,
    verify: { cases: [
      { run: P5_14, out: "false l" },
      { run: P5_14.replace("tiles = tiles.substring(0, p) + tiles.substring(p + 1);", "tiles = tiles;"), out: "true steal" },
    ] } },

  { id: "u2p5-15", skill: "string", type: "mcq", topic: "2.10", difficulty: "difficult",
    stem: "A PIN is valid only when every character in it is a digit. In each code segment below, `pin` is a `String` with at least one character.",
    question: "Which of the following code segments sets `ok` to `true` exactly when every character of `pin` is a digit?",
    choices: [P5_15.key, P5_15.any, P5_15.last, P5_15.skip], mono: true,
    why: [
      "`ok` starts true and becomes false at any character that is not a digit. Nothing sets it back, so it ends true only when every character is a digit.",
      "This is true when at least one character is a digit. For `\"4x\"` it sets `ok` to true.",
      "`ok` is set again on every pass, so a digit sets it back to true, and only the last character decides. For `\"x4\"` it ends true.",
      "This never checks the first character, because i starts at 1. For `\"x4\"` it ends true.",
    ],
    answer: 0,
    verify: { cases: [
      pinCase(P5_15.key, PINS, "true false false true false"),
      pinCase(P5_15.any, PINS, "true true true true false"),
      pinCase(P5_15.last, PINS, "true false true true false"),
      pinCase(P5_15.skip, PINS, "true false true true true"),
    ] } },

  { id: "u2p5-16", skill: "nested", type: "mcq", topic: "2.11", difficulty: "moderate",
    stem: "Consider the following code segment.",
    code: P5_16,
    question: "What is printed as a result of executing the code segment?",
    choices: ["4", "6", "2", "3"], mono: true,
    why: [
      "Each pair of positions is checked once, the earlier letter against each later one. The pairs out of order are b and a, d and c, d and a, and c and a.",
      "6 is how many pairs the loops check. n goes up only for a pair whose earlier letter comes later in the alphabet.",
      "That checks only letters next to each other. j runs over every later position, not just `i + 1`.",
      "That counts each letter once. d is out of order with both c and a, and each pair counts.",
    ],
    answer: 0,
    verify: { out: "4" } },

  { id: "u2p5-17", skill: "nested", type: "mcq", topic: "2.11", difficulty: "easy",
    stem: "Consider the following code segment.",
    code: P5_17,
    question: "What is printed as a result of executing the code segment?",
    choices: ["6 12 18", "6 18 36", "3 6 9", "6 20 42"], mono: true,
    why: [
      "c starts at r and goes up by r while it is at most `3 * r`: 1 + 2 + 3, then 2 + 4 + 6, then 3 + 6 + 9. `sum` starts at 0 for each row.",
      "That keeps adding from one row to the next. `sum` is declared inside the outer loop, so it starts at 0 again for each row.",
      "That stops before `3 * r`. The test is `c <= 3 * r`, so the last value is added too.",
      "That moves c up by 1. With `c += r`, the second row adds only 2, 4, and 6.",
    ],
    answer: 0,
    verify: { cases: [
      { run: P5_17, out: "6 12 18 " },
      { run: "int sum = 0;\n" + P5_17.replace("    int sum = 0;\n", ""), out: "6 18 36 " },
      { run: P5_17.replace("c <= 3 * r", "c < 3 * r"), out: "3 6 9 " },
      { run: P5_17.replace("c += r", "c++"), out: "6 20 42 " },
    ] } },

  { id: "u2p5-18", skill: "nested", type: "mcq", topic: "2.11", difficulty: "moderate",
    stem: "Consider the following code segment.",
    code: P5_18,
    question: "What is printed as a result of executing the code segment?",
    choices: ["9", "30", "6", "12"], mono: true,
    why: [
      "The inner loop adds 3 to i as well as to `count`. The outer passes start with i equal to 0, 4, and 8. After the third, i is 12, and the outer loop ends.",
      "That is 10 outer passes of 3. The inner loop also changes i, so the outer loop runs only 3 times.",
      "The third outer pass runs too: it starts with i equal to 8, and `8 < 10` is true.",
      "12 is the value of i when the outer loop ends. `count` goes up 3 times in each outer pass.",
    ],
    answer: 0,
    verify: { out: "9" } },

  { id: "u2p5-19", skill: "runtime", type: "mcq", topic: "2.12", difficulty: "moderate",
    stem: "Consider the following code segment.",
    code: P5_19,
    question: "How many times is the statement `ops++;` executed?",
    choices: ["54", "80", "256", "5"], mono: true,
    why: [
      "i takes the values 1, 2, 4, 8, and 16. For each one, j runs from i to 16, which is `17 - i` passes: 16, 15, 13, 9, and 1. Add them.",
      "That is 5 times 16. j starts at i, so every inner loop after the first is shorter than 16.",
      "That is 16 times 16. i doubles, so the outer loop runs only 5 times.",
      "That counts the outer loop only. `ops++;` is inside the inner loop.",
    ],
    answer: 0,
    verify: { cases: [
      { run: P5_19 + "\nSystem.out.println(ops);", out: "54" },
    ] } },

  { id: "u2p5-20", skill: "runtime", type: "mcq", topic: "2.12", difficulty: "difficult",
    stem: "Consider the following code segment.",
    code: P5_20,
    question: "How many times is the statement `ops++;` executed?",
    choices: ["22", "30", "20", "160"], mono: true,
    why: [
      "The inner loop halves j from 32 while j is greater than i: 6 passes when i is 0, then 5, 4, 4, and 3. When i is 3, j equal to 4 still passes, since 4 > 3.",
      "That is 6 passes on every pass of the outer loop. The test `j > i` ends the inner loop sooner as i grows.",
      "That takes one pass fewer each time. When i goes from 2 to 3, the inner loop still runs 4 times, because 4 > 3.",
      "That is 5 times 32, as if j went down by 1. `j /= 2` halves j, so each inner loop is short.",
    ],
    answer: 0,
    verify: { cases: [
      { run: P5_20 + "\nSystem.out.println(ops);", out: "22" },
    ] } },

  { id: "u2p5-frq", skill: "frq", type: "code", topic: "2.11", title: "The museum",
    prompt: "A museum keeps a count of its visitors for each day of an exhibit. The method `visitors`, shown below, is already written; do not write it. It returns the number of visitors on a day, where the days are numbered from 1.\n\n" +
      "**Part (a).** Write the method `bestStart`. The museum wants the stretch of `k` days in a row with the most visitors in all. The method returns the first day of that stretch. Only stretches that fit inside days 1 to `numDays` count. If two stretches tie for the most visitors, return the one that starts earlier. You must use `visitors` appropriately to receive full credit.\n\n" +
      "For example, suppose `numDays` is 7 and `visitors` returns these values.\n\n| day | 1 | 2 | 3 | 4 | 5 | 6 | 7 |\n|---|---|---|---|---|---|---|---|\n| `visitors(day)` | 4 | 9 | 2 | 8 | 7 | 1 | 9 |\n\n" +
      "- `bestStart(7, 2)` returns 4. Days 4 and 5 have 15 visitors, more than any other two days in a row.\n" +
      "- `bestStart(7, 3)` returns 2. Days 2 to 4 have 19 visitors.\n" +
      "- `bestStart(7, 1)` returns 2. Days 2 and 7 tie with 9, and day 2 comes first.\n\n" +
      "**Part (b).** Members sign in to the museum website with a login such as `\"ana@river\"`. Write the method `validLogin`. A login is valid when it holds exactly one `\"@\"`, and the `\"@\"` is neither its first nor its last character. The method returns `true` if `login` is valid and `false` otherwise.\n\n" +
      "- `validLogin(\"ana@river\")` returns `true`.\n" +
      "- `validLogin(\"@river\")` and `validLogin(\"ana@\")` return `false`: the `\"@\"` is at an end.\n" +
      "- `validLogin(\"ana@ri@ver\")` returns `false`: it has two.\n" +
      "- `validLogin(\"anariver\")` returns `false`: it has none.\n\n" +
      "Do not use arrays. " + QR,
    given: `/** Returns the number of visitors on day.
 *  Precondition: 1 <= day <= the number of days in the exhibit
 */
public static int visitors(int day)
{ /* implementation not shown */ }

/** Returns the first day of the k days in a row with the most visitors,
 *  as described in part (a).
 *  Precondition: 1 <= k <= numDays, and visitors works for days 1 to numDays.
 */
public static int bestStart(int numDays, int k)
{ /* to be implemented in part (a) */ }

/** Returns true if login holds exactly one "@" and the "@" is not
 *  its first or last character, as described in part (b).
 *  Precondition: login has at least one character.
 */
public static boolean validLogin(String login)
{ /* to be implemented in part (b) */ }`,
    sample: "Days 1 to 7 have 4, 9, 2, 8, 7, 1, 9 visitors\nbestStart(7, 2) returns 4\nbestStart(7, 3) returns 2\nbestStart(7, 1) returns 2\n\nvalidLogin(\"ana@river\") returns true\nvalidLogin(\"@river\") returns false\nvalidLogin(\"ana@\") returns false\nvalidLogin(\"ana@ri@ver\") returns false\nvalidLogin(\"anariver\") returns false",
    rows: [
      { name: "(a) Tries every stretch that fits", earns: "Considers each starting day from 1 to `numDays - k + 1`, and no stretch that would go past day `numDays` or start at day 0." },
      { name: "(a) Adds the visitors of a stretch", earns: "For each start, adds `visitors(day)` for the k days of that stretch into a total that starts at 0 for each stretch (a nested loop, or a running total that adds the new day and takes away the day that drops out)." },
      { name: "(a) Keeps the best total and its day", earns: "Compares each stretch's total with the best so far and, when it is greater, keeps both the total and its starting day." },
      { name: "(a) Returns the first day of the best stretch (algorithm)", earns: "Returns the right day in every case, including a tie, where the earlier day wins (`>` rather than `>=`), and the case `k == numDays`, which returns 1. Not earned if the response returns the total instead of the day." },
      { name: "(b) Finds the @", earns: "Finds the position of an `\"@\"` in `login` with `indexOf(\"@\")`, or by checking each one-character `substring` with `equals`, with every `String` call valid." },
      { name: "(b) Checks the ends", earns: "Returns `false` when the `\"@\"` is the first character, the last character, or missing (`indexOf` returns -1)." },
      { name: "(b) Checks for a second @ (algorithm)", earns: "Returns `true` only when there is no other `\"@\"` in `login`, for example by searching `login.substring(at + 1)`, or by counting them, and returns the right `boolean` in every case. Not earned if the response prints instead of returning." },
    ],
    notes: NOTE + " In part (a), calling `visitors` more than once for the same day is fine. Starting the best total at 0 is fine, since every stretch has 0 or more visitors; starting the best day at 0 does not earn row 4 unless it is always replaced. In part (b), a loop that counts the `\"@\"` characters and remembers where one is earns rows 5 and 7. Using `charAt` or `char` does not earn row 5.",
    solution: P5F_A + "\n\n" + P5F_B,
    verify: { cases: [
      { methods: P5F_VISITORS + "\n\n" + P5F_A, run: `System.out.println(bestStart(7, 2));
System.out.println(bestStart(7, 3));
System.out.println(bestStart(7, 1));
System.out.println(bestStart(7, 7));
System.out.println(bestStart(7, 6));
System.out.println(bestStart(3, 3));`, out: "4\n2\n2\n1\n2\n1" },
      { methods: P5F_VISITORS_B + "\n\n" + P5F_A, run: `System.out.println(bestStart(3, 1) + " " + bestStart(3, 2));`, out: "1 1" },
      { methods: P5F_B, run: `System.out.println(validLogin("ana@river"));
System.out.println(validLogin("@river"));
System.out.println(validLogin("ana@"));
System.out.println(validLogin("ana@ri@ver"));
System.out.println(validLogin("anariver"));
System.out.println(validLogin("@"));
System.out.println(validLogin("a@b"));
System.out.println(validLogin("a@@b"));`, out: "true\nfalse\nfalse\nfalse\nfalse\nfalse\ntrue\nfalse" },
    ] } },
];

export default {
  forms: [
    { id: "u2p4", name: "Unit 2 Test Practice 4", items: practice4 },
    { id: "u2p5", name: "Unit 2 Test Practice 5", items: practice5 },
  ],
};

// AP CSA review bank, Unit 2, part C: more practice where the site was thinnest against Albert
// (2.1 algorithms in steps, 2.2 Boolean expressions, 2.3 and 2.4 if statements, 2.5 and 2.6 compound and equivalent
// Boolean expressions). In every mcq the key is written first and answer is 0 (the site shuffles).

// 2.1: the odd-sum algorithm with a given stop test in step 2, as a method that reports a loop that never stops.
const oddSumC03 = (cond) => `public static String oddSum(int n)
{
    int k = 1;
    int sum = 0;
    int passes = 0;
    while (true)
    {
        if (${cond})
        {
            break;
        }
        sum += k;
        k += 2;
        passes++;
        if (passes > 1000)
        {
            return "never stops";
        }
    }
    return "" + sum;
}`;
const oddSumRun = `System.out.println(oddSum(7) + " " + oddSum(8) + " " + oddSum(1));`;

// 2.1: the coins algorithm, with the parity rule given as a flag (true: even weeks double, as written).
const coinsC05 = `public static String coins(boolean evenDoubles, boolean extraWeek)
{
    int coins = 10;
    int week = 0;
    boolean done = false;
    while (!done)
    {
        week++;
        if ((week % 2 == 0) == evenDoubles)
        {
            coins *= 2;
        }
        else
        {
            coins -= 4;
        }
        if (coins > 30)
        {
            done = true;
        }
    }
    if (extraWeek)
    {
        week++;
        if ((week % 2 == 0) == evenDoubles)
        {
            coins *= 2;
        }
        else
        {
            coins -= 4;
        }
    }
    return "week " + week + ", coins " + coins;
}`;

// 2.4: the hp and mana segment as a method, run on each pair of a list.
const actC20 = `public static String act(int hp, int mana)
{
    if (hp > 50)
    {
        if (mana >= 20)
        {
            return "attack";
        }
        else
        {
            return "defend";
        }
    }
    else
    {
        if (hp > 20 && mana >= 20)
        {
            return "heal";
        }
        else
        {
            return "flee";
        }
    }
}`;
const pairsC20 = (p) => `System.out.println(${p.map(([h, m]) => `act(${h}, ${m})`).join(` + " " + `)});`;

// 2.4: the loot method, with the inner test given as text.
const lootC21 = (inner, top) => `public static String loot(int roll, boolean boss)
{
    if (roll ${top} 18)
    {
        if (boss)
        {
            return "crown";
        }
        return "ring";
    }
    else if (roll >= 10)
    {
        if (${inner})
        {
            return "gem";
        }
    }
    return "coin";
}`;
const lootRun = `System.out.println(loot(18, false) + " " + loot(12, true) + " " + loot(15, true) + " " + loot(20, true));`;

// 2.5 and 2.6: count the inputs where two boolean expressions disagree.
const tableC26 = (alt) => `int bad = 0;
for (int m = 0; m < 8; m++)
{
    boolean a = m / 4 == 1;
    boolean b = m / 2 % 2 == 1;
    boolean c = m % 2 == 1;
    if (!(a && (b || !c)) != (${alt}))
    {
        bad++;
    }
}
System.out.println(bad);`;

const tableC27 = (alt) => `int bad = 0;
for (int m = 0; m < 4; m++)
{
    boolean a = m / 2 == 1;
    boolean b = m % 2 == 1;
    if ((a && b || a && !b) != (${alt}))
    {
        bad++;
    }
}
System.out.println(bad);`;

export default [
  // ---------- design: 2.1 ----------
  { id: "u2r-c-01", skill: "design", type: "mcq", topic: "2.1", difficulty: "easy",
    stem: "A hero sorts the coins in a pouch with the following algorithm. The pouch holds 6 coins.",
    log: `1. Set total to 0 and count to 0.
2. Take the next coin from the pouch.
3. If the coin is gold, add 10 to total. Otherwise, add 1 to total.
4. Add 1 to count.
5. If count is less than 6, go to step 2.
6. Display total.`,
    question: "Which step makes the algorithm use repetition?",
    choices: [
      "Step 5, because it can send the algorithm back to step 2",
      "Step 3, because it chooses between adding 10 and adding 1",
      "Step 2, because a new coin is taken from the pouch each time",
      "Step 4, because it adds 1 to count every time that it runs",
    ],
    why: [
      "Repetition means a group of steps runs again. Step 5 is the only step that sends the algorithm back to an earlier step, so steps 2 to 5 run once for each coin.",
      "Step 3 is selection: it decides which amount to add. Without step 5, it would run only once.",
      "Step 2 runs six times only because step 5 keeps sending the algorithm back to it. Taking a coin does not make anything repeat.",
      "Step 4 updates the counter that step 5 tests. Without the go to in step 5, step 4 would run once.",
    ],
    answer: 0,
    verify: { cases: [
      { run: `String pouch = "GSSGSG";
int total = 0;
int count = 0;
int step2 = 0;
boolean again = true;
while (again)
{
    String coin = pouch.substring(count, count + 1);
    step2++;
    if (coin.equals("G"))
    {
        total += 10;
    }
    else
    {
        total += 1;
    }
    count++;
    again = count < 6;
}
System.out.println(total + " " + step2);`, out: "33 6" },
    ] } },

  { id: "u2r-c-02", skill: "design", type: "mcq", topic: "2.1", difficulty: "moderate",
    stem: "A shop in a dungeon town tracks its crates with the following algorithm.",
    log: `1. Set crates to 0 and day to 1.
2. Add 5 to crates.
3. If crates is greater than 10, subtract 7 from crates.
4. Add 1 to day.
5. If day is less than or equal to 5, go to step 2.
6. Display crates.`,
    question: "What is displayed as a result of the algorithm?",
    choices: ["4", "6", "9", "11"], mono: true,
    why: [
      "Day by day, crates goes 5, then 10 (10 is not greater than 10), then 15 to 8, 13 to 6, and 11 to 4. After day 5, day becomes 6 and step 5 does not go back.",
      "That is crates after day 4. Step 5 goes back while day is less than or equal to 5, so day 5 runs too.",
      "This runs a sixth day. When day becomes 6, the test in step 5 is false and the algorithm moves on to step 6.",
      "That is crates right after the add on day 5. Step 3 still runs on day 5, and 11 is greater than 10, so 7 is subtracted.",
    ],
    answer: 0,
    verify: { cases: [
      { methods: `public static int crates(int lastDay)
{
    int crates = 0;
    int day = 1;
    while (day <= lastDay)
    {
        crates += 5;
        if (crates > 10)
        {
            crates -= 7;
        }
        day++;
    }
    return crates;
}`, run: `System.out.println(crates(5) + " " + crates(4) + " " + crates(6) + " " + (crates(4) + 5));`, out: "4 6 9 11" },
    ] } },

  { id: "u2r-c-03", skill: "design", type: "mcq", topic: "2.1", difficulty: "difficult",
    stem: "The following algorithm is intended to display the sum of the odd numbers from 1 to `n`, where `n` is a positive integer. When `n` is 7 it should display 16, and when `n` is 8 it should also display 16.",
    log: `1. Set k to 1 and sum to 0.
2. If /* condition */, go to step 6.
3. Add k to sum.
4. Add 2 to k.
5. Go to step 2.
6. Display sum.`,
    question: "Which of the following can replace `/* condition */` so that the algorithm works as intended for every positive `n`?",
    choices: ["k > n", "k >= n", "k <= n", "k == n"], mono: true,
    why: [
      "Step 2 is the stop test, so it must be true once `k` has gone past `n`. When `n` is 7, `k` is 7 at the fourth check and 7 is added. Then `k` is 9, which is greater than 7, and the algorithm stops with 1 + 3 + 5 + 7, which is 16.",
      "This stops as soon as `k` equals `n`, before `k` is added. When `n` is 7, 7 is never added, so it displays 9.",
      "This is the keep-going test, not the stop test. `1 <= n` is true at the first check, so the algorithm jumps to step 6 and displays 0.",
      "`k` is always odd, so when `n` is 8, `k` never equals `n` and the algorithm never stops. When `n` is 7, it stops before adding 7.",
    ],
    answer: 0,
    verify: { cases: [
      { methods: oddSumC03("k > n"), run: oddSumRun, out: "16 16 1" },
      { methods: oddSumC03("k >= n"), run: oddSumRun, out: "9 16 0" },
      { methods: oddSumC03("k <= n"), run: oddSumRun, out: "0 0 0" },
      { methods: oddSumC03("k == n"), run: oddSumRun, out: "9 never stops 0" },
    ] } },

  { id: "u2r-c-04", skill: "design", type: "mcq", topic: "2.1", difficulty: "moderate",
    stem: "The following algorithm is intended to display the largest of three numbers `a`, `b`, and `c`.",
    log: `1. Set big to a.
2. If b > a, set big to b.
3. If c > a, set big to c.
4. Display big.`,
    question: "Which of the following inputs shows that the algorithm does not work as intended?",
    choices: ["a = 1, b = 9, c = 5", "a = 9, b = 5, c = 1", "a = 1, b = 5, c = 9", "a = 5, b = 1, c = 9"], mono: true,
    why: [
      "Step 3 compares `c` with `a` instead of with `big`. Step 2 sets `big` to 9, and then `5 > 1` is true, so step 3 replaces 9 with 5. The algorithm displays 5, not 9.",
      "Both tests are false, so `big` stays 9, which is the largest.",
      "Step 2 sets `big` to 5, and step 3 replaces it with 9, the largest. When `c` is the largest, comparing it with `a` still gives the right answer.",
      "Step 2 is false, and step 3 sets `big` to 9, which is the largest.",
    ],
    answer: 0,
    verify: { cases: [
      { methods: `public static int big3(int a, int b, int c)
{
    int big = a;
    if (b > a)
    {
        big = b;
    }
    if (c > a)
    {
        big = c;
    }
    return big;
}`, run: `System.out.println(big3(1, 9, 5) + " " + big3(9, 5, 1) + " " + big3(1, 5, 9) + " " + big3(5, 1, 9));`, out: "5 9 9 9" },
    ] } },

  { id: "u2r-c-05", skill: "design", type: "mcq", topic: "2.1", difficulty: "difficult",
    stem: "Consider the following algorithm.",
    log: `1. Set coins to 10 and week to 0.
2. Add 1 to week.
3. If week is even, double coins. Otherwise, subtract 4 from coins.
4. If coins is greater than 30, go to step 6.
5. Go to step 2.
6. Display week and coins.`,
    question: "What is displayed as a result of the algorithm?",
    choices: ["week 8, coins 40", "week 3, coins 32", "week 9, coins 36", "week 8, coins 20"], mono: true,
    why: [
      "Week 1 is odd, so coins goes from 10 to 6. Then it goes 12, 8, 16, 12, 24, 20, and in week 8 it doubles to 40. 40 is the first value greater than 30, so step 4 ends the loop there.",
      "This doubles in the odd weeks and subtracts in the even ones: 20, 16, and then 32. Week 1 is odd, so the first change is subtracting 4.",
      "This runs one more week after coins passes 30. Step 4 checks coins right after each change, so week 8 is the last week.",
      "20 is coins at the start of week 8. Step 3 doubles it before step 4 checks, so 40 is displayed.",
    ],
    answer: 0,
    verify: { cases: [
      { methods: coinsC05, run: `System.out.println(coins(true, false));
System.out.println(coins(false, false));
System.out.println(coins(true, true));`, out: "week 8, coins 40\nweek 3, coins 32\nweek 9, coins 36" },
    ] } },

  { id: "u2r-c-06", skill: "design", type: "output", topic: "2.1", difficulty: "moderate",
    stem: "Consider the following algorithm. It displays each value on the same line, separated by spaces.",
    log: `1. Set n to 6.
2. Display n.
3. If n is 1, stop.
4. If n is even, set n to n / 2. Otherwise, set n to 3 * n + 1.
5. Go to step 2.`,
    question: "What is displayed? Type it exactly, one line per line.",
    answer: "6 3 10 5 16 8 4 2 1",
    why: "Each pass displays `n` and then changes it: an even value is halved, and an odd value is tripled and then 1 is added. 6 is even, so 3 comes next; 3 is odd, so 10; then 5, 16, 8, 4, 2, and 1. Step 3 is checked after 1 is displayed, so 1 is the last value shown.",
    verify: { cases: [
      { run: `int n = 6;
boolean done = false;
while (!done)
{
    System.out.print(n + " ");
    if (n == 1)
    {
        done = true;
    }
    else if (n % 2 == 0)
    {
        n = n / 2;
    }
    else
    {
        n = 3 * n + 1;
    }
}
System.out.println();`, out: "6 3 10 5 16 8 4 2 1" },
    ] } },

  // ---------- bool: 2.2 ----------
  { id: "u2r-c-07", skill: "bool", type: "mcq", topic: "2.2", difficulty: "easy",
    stem: "Consider the following code segment.",
    code: `int arrows = 18;
int quiver = 5;
boolean full = arrows / quiver > 3;
boolean spare = arrows % quiver != 0;
System.out.println(full + " " + spare);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["false true", "true true", "false false", "true false"], mono: true,
    why: [
      "`arrows / quiver` is integer division: 18 / 5 is 3, and `3 > 3` is false. `18 % 5` is the remainder, 3, and `3 != 0` is true.",
      "This uses 3.6 for `18 / 5`. Both values are `int`, so the decimal part is dropped and the result is 3.",
      "`spare` compares the remainder with 0. 18 is not a multiple of 5, so the remainder is 3 and `3 != 0` is true.",
      "Both values are reversed. Integer division gives 3, which is not greater than 3, and the remainder 3 is not 0.",
    ],
    answer: 0,
    verify: { out: "false true" } },

  { id: "u2r-c-08", skill: "bool", type: "mcq", topic: "2.2", difficulty: "moderate",
    stem: "Consider the following code segment.",
    code: `String a = "Wand";
String b = "staff";
boolean first = a.compareTo(b) < 0;
boolean longer = b.length() > a.length();
boolean same = a.substring(0, 1).equals("w");
System.out.println(first + " " + longer + " " + same);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["true true false", "false true false", "true true true", "false true true"], mono: true,
    why: [
      "`compareTo` compares character codes, and every uppercase letter comes before every lowercase letter, so `\"Wand\"` comes before `\"staff\"` and the result is negative. 5 is greater than 4. `equals` is case sensitive, so `\"W\"` does not equal `\"w\"`.",
      "This puts w after s, as in the alphabet. `compareTo` uses character codes, and uppercase `W` comes before lowercase `s`.",
      "`equals` does not ignore case. `\"W\"` and `\"w\"` are different Strings.",
      "This makes two mistakes: uppercase `W` comes before lowercase `s`, and `equals` does not ignore case.",
    ],
    answer: 0,
    verify: { out: "true true false" } },

  { id: "u2r-c-09", skill: "bool", type: "mcq", topic: "2.2", difficulty: "moderate",
    stem: "Consider the following code segment.",
    code: `double price = 0.1 * 3;
boolean exact = price == 0.3;
boolean close = Math.abs(price - 0.3) < 0.0001;
System.out.println(exact + " " + close);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["false true", "true true", "true false", "false false"], mono: true,
    why: [
      "0.1 cannot be stored exactly as a `double`, so `0.1 * 3` is a tiny bit more than 0.3 and `==` is false. The difference is far less than 0.0001, so the tolerance test is true.",
      "This treats `double` arithmetic as exact. A round-off error makes `0.1 * 3` slightly different from 0.3, so `==` is false.",
      "Both values are reversed. `==` fails because of round-off, and that is why comparing the difference with a small tolerance works.",
      "The difference between `price` and 0.3 is about 0.00000000000000004, which is less than 0.0001, so `close` is true.",
    ],
    answer: 0,
    verify: { out: "false true" } },

  { id: "u2r-c-10", skill: "bool", type: "mcq", topic: "2.2", difficulty: "difficult",
    stem: "Consider the following code segment.",
    code: `String rune = "obsidian";
int n = 47;
boolean p = rune.indexOf("d") > rune.indexOf("s");
boolean q = rune.substring(2, 4).equals("sid");
boolean r = n / 10 + n % 10 == 11;
boolean s = n / 2 * 2 == n;
boolean t = rune.indexOf("x") + 1 == 0;`,
    question: "After the code segment is executed, which of the variables `p`, `q`, `r`, `s`, and `t` are `true`?",
    choices: ["p, r, and t only", "p, q, r, and t only", "p, r, s, and t only", "r and t only"], mono: true,
    why: [
      "`d` is at index 4 and `s` at index 2, so `p` is true. `substring(2, 4)` is `\"si\"`, so `q` is false. 4 + 7 is 11, so `r` is true. 47 / 2 is 23, and 23 * 2 is 46, so `s` is false. `indexOf(\"x\")` is -1, and -1 + 1 is 0, so `t` is true.",
      "This includes the end index in `substring(2, 4)`. The end index is left out, so the result is `\"si\"`, not `\"sid\"`.",
      "This uses real division for `n / 2`. Integer division drops the .5, so `n / 2 * 2` is 46, not 47.",
      "This compares the letters d and s instead of their positions. `indexOf` returns where each letter is, and `d` comes after `s` in `\"obsidian\"`.",
    ],
    answer: 0,
    verify: { cases: [
      { run: `String rune = "obsidian";
int n = 47;
boolean p = rune.indexOf("d") > rune.indexOf("s");
boolean q = rune.substring(2, 4).equals("sid");
boolean r = n / 10 + n % 10 == 11;
boolean s = n / 2 * 2 == n;
boolean t = rune.indexOf("x") + 1 == 0;
System.out.println(p + " " + q + " " + r + " " + s + " " + t);`, out: "true false true false true" },
    ] } },

  { id: "u2r-c-11", skill: "bool", type: "output", topic: "2.2", difficulty: "moderate",
    stem: "Consider the following code segment.",
    code: `String door = "iron gate";
System.out.println(door.indexOf(" ") == 4);
System.out.println(door.substring(5).length() > 4);
System.out.println(door.compareTo("iron") > 0);`,
    question: "What is printed? Type it exactly, one line per line.",
    answer: "true\nfalse\ntrue",
    why: "`iron` fills indexes 0 to 3, so the space is at index 4. `door.substring(5)` is `gate`, whose length is 4, and `4 > 4` is false. `\"iron gate\"` starts with `\"iron\"` and is longer, so it comes after `\"iron\"` and `compareTo` returns a positive number.",
    verify: { out: "true\nfalse\ntrue" } },

  { id: "u2r-c-12", skill: "bool", type: "output", topic: "2.2", difficulty: "easy",
    stem: "Consider the following code segment.",
    code: `int level = 9;
boolean boss = level % 3 == 0;
boolean high = level > 10;
System.out.println(boss);
System.out.println(high);
System.out.println(boss != high);`,
    question: "What is printed? Type it exactly, one line per line.",
    answer: "true\nfalse\ntrue",
    why: "9 is a multiple of 3, so `boss` is true, and 9 is not greater than 10, so `high` is false. `!=` works on `boolean` values too: `true != false` is true.",
    verify: { out: "true\nfalse\ntrue" } },

  // ---------- if: 2.3 ----------
  { id: "u2r-c-13", skill: "if", type: "mcq", topic: "2.3", difficulty: "moderate",
    stem: "Consider the following code segment.",
    code: `int gold = 14;
if (gold < 10);
{
    gold += 5;
}
System.out.println(gold);`,
    question: "What is the result of executing the code segment?",
    choices: ["19", "14", "5", "Nothing is printed. The code segment does not compile."],
    why: [
      "The semicolon right after `if (gold < 10)` ends the `if` with an empty statement. The block in braces is not part of the `if`, so it always runs: 14 + 5 is 19.",
      "That is what happens without the semicolon: 14 is not less than 10, so the block is skipped. With the semicolon, the block is a separate statement that always runs.",
      "`gold += 5` adds 5 to `gold`. It does not set `gold` to 5.",
      "An `if` followed by a semicolon compiles: the semicolon is an empty statement, and a block in braces can stand on its own. It is a silent bug, not a compile error.",
    ],
    answer: 0,
    verify: { out: "19" } },

  { id: "u2r-c-14", skill: "if", type: "mcq", topic: "2.3", difficulty: "moderate",
    stem: "Consider the following code segment.",
    code: `String log = "";
int hp = 20;
if (hp > 15)
{
    log += "A";
    hp -= 10;
}
else
{
    log += "B";
}
if (hp > 15)
{
    log += "C";
}
else
{
    log += "D";
    hp += 10;
}
if (hp > 15)
{
    log += "E";
}
System.out.println(log + hp);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["ADE20", "ACE10", "AD10", "ABDE20"], mono: true,
    why: [
      "The first `if` adds A and drops `hp` to 10. The second test reads 10, so its `else` adds D and raises `hp` back to 20. The third test reads 20, so E is added.",
      "This tests every condition with the starting value 20. Each `if` reads `hp` as the blocks before it left it.",
      "This leaves out `hp += 10` in the second `else`. It raises `hp` to 20 before the third test.",
      "An `else` runs only when its own `if` is false. The first `if` is true, so B is skipped.",
    ],
    answer: 0,
    verify: { out: "ADE20" } },

  { id: "u2r-c-15", skill: "if", type: "mcq", topic: "2.3", difficulty: "difficult",
    stem: "The following code segment is intended to set `result` to `\"honors\"` when `score` is at least 90, to `\"pass\"` when `score` is from 60 to 89, and to `\"fail\"` when `score` is less than 60. Assume `score` is an `int` that has been properly declared and initialized. When `score` is 75, the code segment prints `fail`.",
    code: `String result = "fail";
if (score >= 60)
{
    result = "pass";
}
if (score >= 90)
{
    result = "honors";
}
else
{
    result = "fail";
}
System.out.println(result);`,
    question: "Which of the following best explains why the code segment prints `fail` when `score` is 75?",
    choices: [
      "The `else` goes with `if (score >= 90)` only, so it replaces `pass` with `fail`.",
      "`score >= 60` is false when `score` is 75, so `result` is never set to `pass`.",
      "`result` starts as `fail`, and an `if` cannot change a value that was set before it.",
      "`score >= 90` can never be true, so the code segment can never print `honors`.",
    ],
    why: [
      "The two `if` statements are separate. For 75 the first one sets `pass`, and then `score >= 90` is false, so its `else` sets `fail`. Making the second test an `else if` fixes it.",
      "75 is at least 60, so the first `if` is true and `result` does become `pass`. It is changed again by the next statement.",
      "An `if` can change any variable. The first `if` does set `result` to `pass`; the `else` changes it back.",
      "For 95, `score >= 90` is true and `honors` is printed. That test is false for 75, which is why the `else` runs.",
    ],
    answer: 0,
    verify: { cases: [
      { methods: `public static String grade(int score)
{
    String result = "fail";
    if (score >= 60)
    {
        result = "pass";
    }
    if (score >= 90)
    {
        result = "honors";
    }
    else
    {
        result = "fail";
    }
    return result;
}`, run: `System.out.println(grade(75) + " " + grade(95) + " " + grade(40));`, out: "fail honors fail" },
    ] } },

  { id: "u2r-c-16", skill: "if", type: "mcq", topic: "2.3", difficulty: "easy",
    stem: "Consider the following code segment.",
    code: `String weapon = "Bow";
int range = 1;
if (weapon.equals("bow"))
{
    range = 8;
}
else
{
    range += 2;
}
range *= 2;
System.out.println(range);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["6", "16", "3", "8"], mono: true,
    why: [
      "`equals` is case sensitive, so `\"Bow\"` does not equal `\"bow\"` and the `else` makes `range` 3. `range *= 2` comes after the whole `if`/`else`, so it runs either way: 3 * 2 is 6.",
      "This treats `\"Bow\"` and `\"bow\"` as equal. `equals` compares every character, uppercase and lowercase included.",
      "This leaves out `range *= 2`. It is after the `if`/`else`, not inside it, so it always runs.",
      "This runs the first branch and leaves out `range *= 2`. The test is false, and the last statement runs either way.",
    ],
    answer: 0,
    verify: { out: "6" } },

  { id: "u2r-c-17", skill: "if", type: "output", topic: "2.3", difficulty: "moderate",
    stem: "Consider the following code segment.",
    code: `int stamina = 7;
if (stamina >= 7)
{
    System.out.print("run ");
    stamina -= 3;
}
if (stamina >= 5)
    System.out.print("jump ");
    stamina -= 4;
System.out.println(stamina);`,
    question: "What is printed? Type it exactly, one line per line.",
    answer: "run 0",
    why: "7 is at least 7, so `run ` is printed and `stamina` drops to 4. The second `if` has no braces, so only the next statement, the `print`, belongs to it, and `4 >= 5` is false. `stamina -= 4` is indented but is not part of the `if`, so it runs anyway and `stamina` becomes 0.",
    verify: { out: "run 0" } },

  // ---------- if: 2.4 ----------
  { id: "u2r-c-18", skill: "if", type: "mcq", topic: "2.4", difficulty: "easy",
    stem: "Consider the following code segment.",
    code: `int perception = 12;
boolean torch = true;
String result;
if (torch)
{
    if (perception >= 15)
    {
        result = "disarm";
    }
    else
    {
        result = "spot";
    }
}
else
{
    if (perception >= 10)
    {
        result = "listen";
    }
    else
    {
        result = "alarm";
    }
}
System.out.println(result);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["spot", "disarm", "listen", "alarm"], mono: true,
    why: [
      "`torch` is true, so only the outer `if` block runs. Inside it, 12 is not at least 15, so the inner `else` sets `result` to `\"spot\"`.",
      "`perception >= 15` is false, because 12 is less than 15.",
      "`12 >= 10` is true, but that test is inside the outer `else`, which runs only when `torch` is false.",
      "That branch needs `torch` to be false and `perception` to be less than 10.",
    ],
    answer: 0,
    verify: { out: "spot" } },

  { id: "u2r-c-19", skill: "if", type: "mcq", topic: "2.4", difficulty: "moderate",
    stem: "Consider the following method.",
    methods: `public static String zone(int x, int y)
{
    if (x > 0)
    {
        if (y > 0)
        {
            return "NE";
        }
        else
        {
            return "SE";
        }
    }
    else if (y > 0)
    {
        return "NW";
    }
    return "SW";
}`,
    code: `System.out.println(zone(3, 0) + " " + zone(0, 4) + " " + zone(-2, -2));`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["SE NW SW", "NE NE SW", "SE SW SW", "NE NW SW"], mono: true,
    why: [
      "For `zone(3, 0)`, 3 > 0 but 0 > 0 is false, so `SE`. For `zone(0, 4)`, 0 > 0 is false, so the `else if` runs and 4 > 0 gives `NW`. For `zone(-2, -2)`, both tests are false, so the method reaches `return \"SW\"`.",
      "This treats 0 as positive. `0 > 0` is false, so 0 counts as not positive for both `x` and `y`.",
      "This pairs the `else if` with the inner `if`. The braces close the outer block first, so the `else if` belongs to `if (x > 0)`.",
      "This treats `y` equal to 0 as positive in the first call. `0 > 0` is false, so the inner `else` returns `SE`.",
    ],
    answer: 0,
    verify: { out: "SE NW SW" } },

  { id: "u2r-c-20", skill: "if", type: "mcq", topic: "2.4", difficulty: "difficult",
    stem: "Consider the following code segment, where `hp` and `mana` are `int` variables that have been properly declared and initialized.",
    code: `if (hp > 50)
{
    if (mana >= 20)
    {
        System.out.println("attack");
    }
    else
    {
        System.out.println("defend");
    }
}
else
{
    if (hp > 20 && mana >= 20)
    {
        System.out.println("heal");
    }
    else
    {
        System.out.println("flee");
    }
}`,
    question: "The code segment is run once for each (`hp`, `mana`) pair in a list. Which of the following lists makes the code segment print all four words?",
    choices: [
      "(51, 20), (80, 19), (21, 20), (20, 40)",
      "(50, 20), (80, 19), (21, 20), (20, 40)",
      "(51, 20), (80, 21), (21, 20), (20, 40)",
      "(51, 20), (80, 19), (20, 20), (21, 19)",
    ], mono: true,
    why: [
      "The pairs print `attack` (51 > 50 and 20 >= 20), `defend` (19 < 20), `heal` (21 is from 21 to 50, and 20 >= 20), and `flee` (20 is not greater than 20).",
      "`50 > 50` is false, so (50, 20) goes to the outer `else` and prints `heal`. No pair prints `attack`.",
      "(80, 21) has enough mana, so it prints `attack` again. No pair prints `defend`.",
      "(20, 20) fails `hp > 20`, and (21, 19) fails `mana >= 20`, so both print `flee`. No pair prints `heal`.",
    ],
    answer: 0,
    verify: { cases: [
      { methods: actC20, run: pairsC20([[51, 20], [80, 19], [21, 20], [20, 40]]), out: "attack defend heal flee" },
      { methods: actC20, run: pairsC20([[50, 20], [80, 19], [21, 20], [20, 40]]), out: "heal defend heal flee" },
      { methods: actC20, run: pairsC20([[51, 20], [80, 21], [21, 20], [20, 40]]), out: "attack attack heal flee" },
      { methods: actC20, run: pairsC20([[51, 20], [80, 19], [20, 20], [21, 19]]), out: "attack defend flee flee" },
    ] } },

  { id: "u2r-c-21", skill: "if", type: "mcq", topic: "2.4", difficulty: "moderate",
    stem: "Consider the following method.",
    methods: lootC21("boss && roll % 2 == 0", ">="),
    code: lootRun,
    question: "What is printed as a result of executing the code segment?",
    choices: ["ring gem coin crown", "ring gem gem crown", "coin gem coin crown", "coin coin coin coin"], mono: true,
    why: [
      "18 is at least 18 and `boss` is false, so `ring`. 12 and 15 both reach the `else if`: 12 is even, so `gem`, but 15 is odd, so the inner `if` is false and the method goes on to `return \"coin\"`. 20 with a boss gives `crown`.",
      "This reads `&&` as `||`. Both parts must be true for `gem`, and 15 is odd.",
      "This treats `roll >= 18` as `roll > 18`. 18 is at least 18, so the first call returns `ring`.",
      "A `return` ends the method right away. `coin` is returned only when no earlier `return` runs.",
    ],
    answer: 0,
    verify: { cases: [
      { methods: lootC21("boss && roll % 2 == 0", ">="), run: lootRun, out: "ring gem coin crown" },
      { methods: lootC21("boss || roll % 2 == 0", ">="), run: lootRun, out: "ring gem gem crown" },
      { methods: lootC21("boss && roll % 2 == 0", ">"), run: lootRun, out: "coin gem coin crown" },
    ] } },

  { id: "u2r-c-22", skill: "if", type: "mcq", topic: "2.4", difficulty: "easy",
    stem: "Consider the following code segment.",
    code: `int xp = 250;
String title;
if (xp < 100)
{
    title = "novice";
}
else if (xp < 250)
{
    title = "squire";
}
else if (xp < 500)
{
    title = "hero";
}
else
{
    title = "legend";
}
System.out.println(title);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["hero", "novice", "squire", "legend"], mono: true,
    why: [
      "`250 < 100` and `250 < 250` are both false, so the chain moves on. `250 < 500` is true, so `title` is `\"hero\"` and the rest of the chain is skipped.",
      "`250 < 100` is false, so the chain moves on to the next test.",
      "250 is not less than 250. They are equal, so that test is false.",
      "The `else` runs only when every test above it is false, and `250 < 500` is true.",
    ],
    answer: 0,
    verify: { out: "hero" } },

  { id: "u2r-c-23", skill: "if", type: "output", topic: "2.4", difficulty: "difficult",
    stem: "Consider the following code segment.",
    code: `int gold = 45;
int keys = 1;
if (gold >= 40)
{
    gold -= 35;
    if (keys > 0 && gold > 10)
    {
        System.out.print("chest ");
        keys--;
    }
    else if (keys > 0)
    {
        System.out.print("door ");
        keys--;
        gold += 20;
    }
    if (gold > 30)
    {
        System.out.println("shop");
    }
}
else if (keys > 0)
{
    System.out.println("door");
}
System.out.println(gold + " " + keys);`,
    question: "What is printed? Type it exactly, one line per line.",
    answer: "door 30 0",
    why: "45 is at least 40, so `gold` drops to 10. `10 > 10` is false, so the inner `else if` runs: it prints `door ` with `print`, uses the key, and raises `gold` to 30. `30 > 30` is false, so `shop` is not printed. The outer `else if` is skipped because the outer `if` was true. The last line prints `30 0` on the same line, because `door ` was printed without a line break.",
    verify: { out: "door 30 0" } },

  // ---------- bool: 2.5 ----------
  { id: "u2r-c-24", skill: "bool", type: "mcq", topic: "2.5", difficulty: "difficult",
    stem: "Consider the following code segment, where `x` is an `int` variable that has been properly declared and initialized.",
    code: `if (x > 5 || x < 10 && x != 7)
{
    System.out.println("in");
}`,
    question: "Which of the following best describes when `in` is printed?",
    choices: [
      "For every value of `x`",
      "For every value of `x` except 7",
      "Only when `x` is from 6 to 9",
      "Only when `x` is greater than 5",
    ],
    why: [
      "`&&` is done before `||`, so the condition is `x > 5 || (x < 10 && x != 7)`. Every `x` above 5 passes the left side. Every `x` of 5 or less is below 10 and is not 7, so it passes the right side.",
      "This groups the `||` first, as `(x > 5 || x < 10) && x != 7`. Without parentheses `&&` comes first, and 7 passes on its own through `x > 5`.",
      "This reads the `||` as `&&`. With `||`, one true side is enough, so 20 passes through `x > 5`.",
      "This leaves out the right side of the `||`. When `x` is 0, `x < 10 && x != 7` is true, so `in` is printed.",
    ],
    answer: 0,
    verify: { cases: [
      { run: `int count = 0;
for (int x = -50; x <= 50; x++)
{
    if (x > 5 || x < 10 && x != 7)
    {
        count++;
    }
}
System.out.println(count);`, out: "101" },
    ] } },

  { id: "u2r-c-25", skill: "bool", type: "output", topic: "2.5", difficulty: "difficult",
    stem: "Consider the following method and code segment.",
    methods: `public static boolean check(String label, boolean value)
{
    System.out.print(label + " ");
    return value;
}`,
    code: `if (check("A", false) && check("B", true) || check("C", true))
{
    System.out.println("yes");
}
else
{
    System.out.println("no");
}`,
    question: "What is printed? Type it exactly, one line per line.",
    answer: "A C yes",
    why: "`&&` is grouped before `||`, so the condition is `(A && B) || C`. `check(\"A\", false)` prints `A` and returns false, so `&&` skips the call for B. The `||` still needs its right side, so `check(\"C\", true)` prints `C` and returns true, and `yes` is printed on the same line.",
    verify: { out: "A C yes" } },

  // ---------- bool: 2.6 ----------
  { id: "u2r-c-26", skill: "bool", type: "mcq", topic: "2.6", difficulty: "moderate",
    stem: "Consider the following expression, where `a`, `b`, and `c` are `boolean` variables.",
    code: `!(a && (b || !c))`,
    question: "Which of the following is equivalent to the expression for all values of `a`, `b`, and `c`?",
    choices: ["!a || !b && c", "!a && !b || c", "!a || !b || c", "!a || b && !c"], mono: true,
    why: [
      "De Morgan's law, twice. The outside gives `!a || !(b || !c)`, and the opposite of `b || !c` is `!b && c`. `&&` is done before `||`, so `!a || !b && c` needs no parentheses.",
      "The outer `&&` has to become `||`. With `a` false, `b` true, and `c` false, the original is true and this is false.",
      "The inner `||` has to become `&&` as well. With `a` true and `b` and `c` false, the original is false and this is true.",
      "This leaves the inner part as it was instead of negating it. With `a` true, `b` false, and `c` true, the original is true and this is false.",
    ],
    answer: 0,
    verify: { cases: [
      { run: tableC26("!a || !b && c"), out: "0" },
      { run: tableC26("!a && !b || c"), out: "2" },
      { run: tableC26("!a || !b || c"), out: "2" },
      { run: tableC26("!a || b && !c"), out: "2" },
    ] } },

  { id: "u2r-c-27", skill: "bool", type: "mcq", topic: "2.6", difficulty: "difficult",
    stem: "Consider the following expression, where `a` and `b` are `boolean` variables.",
    code: `a && b || a && !b`,
    question: "Which of the following best describes when the expression is `true`?",
    choices: [
      "Exactly when `a` is true",
      "Exactly when `a` and `b` are both true",
      "Exactly when `a` or `b` is true",
      "For every value of `a` and `b`",
    ],
    why: [
      "`&&` is done first, so the expression is `(a && b) || (a && !b)`. Both parts need `a`. When `a` is true, one of `b` and `!b` is true, so the expression is true. When `a` is false, both parts are false. The value of `b` never matters.",
      "This keeps only the first part. With `a` true and `b` false, `a && !b` is true, so the expression is true.",
      "With `a` false and `b` true, both parts are false, because both of them need `a`.",
      "One of `b` and `!b` is always true, but both parts also need `a`, so the expression is false whenever `a` is false.",
    ],
    answer: 0,
    verify: { cases: [
      { run: tableC27("a"), out: "0" },
      { run: tableC27("a && b"), out: "1" },
      { run: tableC27("a || b"), out: "1" },
      { run: tableC27("true"), out: "2" },
    ] } },

  { id: "u2r-c-28", skill: "bool", type: "mcq", topic: "2.6", difficulty: "easy",
    stem: "Consider the following code segment.",
    code: `String a = "rune";
String b = a;
String c = new String("rune");
a = a + "s";
System.out.println((a == b) + " " + b.equals(c) + " " + (b == c));`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["false true false", "true true false", "false true true", "false false false"], mono: true,
    why: [
      "`a + \"s\"` builds a new String, and only `a` is changed to refer to it, so `b` still refers to `\"rune\"` and `a == b` is false. `b` and `c` hold the same letters, so `equals` is true, but they are two different objects, so `==` is false.",
      "`b = a` copies the reference at that moment. When `a` is later given a new String, `b` keeps the old one.",
      "`==` on objects checks whether both sides are the same object. `new String` always makes a new object, so `b == c` is false.",
      "`equals` compares the letters, not the objects. `b` and `c` both hold `rune`.",
    ],
    answer: 0,
    verify: { out: "false true false" } },
];

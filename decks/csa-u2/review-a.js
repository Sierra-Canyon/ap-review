// AP CSA review bank, Unit 2, part A: Boolean expressions, if statements, while loops, for loops.
// In every mcq the key is written first and answer is 0 (the site shuffles).

// Wraps a boolean expression in a check over many inputs and prints how many inputs disagree with the original.
const tableB03 = (alt) => `int bad = 0;
for (int t = -3; t <= 8; t++)
{
    for (int k = 0; k < 2; k++)
    {
        boolean locked = k == 1;
        int torches = t;
        if (!(!locked && torches > 2) != (${alt}))
        {
            bad++;
        }
    }
}
System.out.println(bad);`;

const tableB04 = (alt) => `int bad = 0;
for (int x = -5; x <= 15; x++)
{
    if ((x > 3 && x > 7) != (${alt}))
    {
        bad++;
    }
}
System.out.println(bad);`;

const guardB07 = (cond, hits) => `int damage = 30;
int hits = ${hits};
if (${cond})
{
    System.out.println("strong");
}
else
{
    System.out.println("weak");
}`;

const gridI05 = (seg) => `for (int level = 4; level <= 5; level++)
{
    for (int mana = 10; mana <= 11; mana++)
    {
        System.out.print(level + "," + mana + ":");
${seg.split("\n").map((l) => "        " + l).join("\n")}
        System.out.println();
    }
}`;

const rankI08 = (seg) => `public static String rankOf(int points)
{
    String rank;
${seg.split("\n").map((l) => "    " + l).join("\n")}
    return rank;
}`;
const rankRun = `System.out.println(rankOf(600) + " " + rankOf(500) + " " + rankOf(499) + " " + rankOf(200) + " " + rankOf(199));`;

const I05 = [
  `if (level >= 5 && mana > 10)
{
    System.out.println("cast");
}`,
  `if (level >= 5 || mana > 10)
{
    System.out.println("cast");
}`,
  `if (level >= 5)
{
    System.out.println("cast");
}
if (mana > 10)
{
    System.out.println("cast");
}`,
  `if (!(level < 5 || mana > 10))
{
    System.out.println("cast");
}`,
];

const I08 = [
  `if (points >= 500)
{
    rank = "gold";
}
else if (points >= 200)
{
    rank = "silver";
}
else
{
    rank = "bronze";
}`,
  `if (points >= 200)
{
    rank = "silver";
}
else if (points >= 500)
{
    rank = "gold";
}
else
{
    rank = "bronze";
}`,
  `if (points >= 500)
{
    rank = "gold";
}
if (points >= 200)
{
    rank = "silver";
}
else
{
    rank = "bronze";
}`,
  `if (points > 500)
{
    rank = "gold";
}
else if (points > 200)
{
    rank = "silver";
}
else
{
    rank = "bronze";
}`,
];

const W04 = [
  `int k = 10;
while (k != 5)
{
    k -= 2;
}`,
  `int k = 10;
while (k > 5)
{
    k -= 2;
}`,
  `int k = 1;
while (k < 100)
{
    k *= 3;
}`,
  `int k = 0;
while (k < 0)
{
    k--;
}`,
];
// The same loops with a pass counter that gives up after 1000 passes.
const guardW04 = (init, test, step) => `${init}
int passes = 0;
while (${test} && passes < 1000)
{
    ${step}
    passes++;
}
System.out.println(passes);`;

const W05 = (cond) => `int m = 7;
while (${cond})
{
    System.out.print(m + " ");
    m += 7;
}`;

const W08 = (n) => `int n = ${n};
int p = 1;
while (p * 2 <= n)
{
    p *= 2;
}
System.out.println(p);`;

const F03 = [
  `int n = 20;
while (n > 5)
{
    System.out.print(n + " ");
    n -= 5;
}`,
  `int n = 20;
while (n > 5)
{
    n -= 5;
    System.out.print(n + " ");
}`,
  `int n = 20;
while (n >= 5)
{
    System.out.print(n + " ");
    n -= 5;
}`,
  `int n = 20;
while (n < 5)
{
    System.out.print(n + " ");
    n -= 5;
}`,
];

const F04 = (header) => `${header}
{
    System.out.print(i + " ");
}`;

export default [
  // ---------- bool: 2.2, 2.5, 2.6 ----------
  { id: "u2r-a-01", skill: "bool", type: "mcq", topic: "2.2",
    stem: "Consider the following code segment.",
    code: `int gold = 15;
int cost = 12;
boolean canBuy = gold >= cost;
boolean broke = gold - cost < 3;
System.out.println(canBuy + " " + broke);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["true false", "true true", "false true", "1 0"], mono: true,
    why: [
      "`gold >= cost` is `15 >= 12`, which is `true`. The subtraction happens before the comparison, so `gold - cost < 3` is `3 < 3`, which is `false`.",
      "This treats `<` as `<=`. 3 is not less than 3.",
      "Both values are reversed. 15 is at least 12, so `canBuy` is `true`.",
      "Java prints a `boolean` as `true` or `false`, never as 1 or 0.",
    ],
    answer: 0,
    verify: { out: "true false" } },

  { id: "u2r-a-02", skill: "bool", type: "mcq", topic: "2.5",
    stem: "Consider the following code segment.",
    code: `String spell = "";
if (spell.length() == 0 || spell.substring(0, 1).equals("F"))
{
    System.out.println("no spell");
}
else
{
    System.out.println("cast " + spell);
}`,
    question: "What is the result of executing the code segment?",
    choices: [
      "no spell",
      "cast",
      "Nothing is printed. A StringIndexOutOfBoundsException is thrown.",
      "Nothing is printed. The code segment does not compile.",
    ],
    why: [
      "`spell.length() == 0` is true, so `||` already knows the whole condition is true and never evaluates `spell.substring(0, 1)`. The `if` branch runs.",
      "The `else` runs only when the whole condition is false. Its left side, `spell.length() == 0`, is true.",
      "That is what happens with the two sides swapped: `substring(0, 1)` on an empty String throws first. In this order the length check comes first, and `||` stops at the first true side.",
      "Both sides are `boolean` expressions, so the condition compiles. Whether the right side is evaluated is decided while the program runs.",
    ],
    answer: 0,
    verify: { out: "no spell" } },

  { id: "u2r-a-03", skill: "bool", type: "mcq", topic: "2.6",
    stem: "Consider the following expression, where `locked` is a `boolean` and `torches` is an `int`.",
    code: `!(!locked && torches > 2)`,
    question: "Which of the following is equivalent to the expression for all values of `locked` and `torches`?",
    choices: ["locked || torches <= 2", "locked && torches <= 2", "!locked || torches <= 2", "locked || torches < 2"], mono: true,
    why: [
      "De Morgan's law: the opposite of `p && q` is `!p || !q`. The opposite of `!locked` is `locked`, and the opposite of `torches > 2` is `torches <= 2`.",
      "Both parts are negated correctly, but the `&&` has to become `||` as well. Try `locked` true and `torches` equal to 5: the original is true and this is false.",
      "Negating `!locked` removes the `!`: the opposite of not locked is locked. Try `locked` false and `torches` equal to 5: the original is false and this is true.",
      "The opposite of `>` is `<=`, not `<`. With `locked` false and `torches` equal to 2, the original is true and this is not.",
    ],
    answer: 0,
    verify: { cases: [
      { run: tableB03("locked || torches <= 2"), out: "0" },
      { run: tableB03("locked && torches <= 2"), out: "12" },
      { run: tableB03("!locked || torches <= 2"), out: "12" },
      { run: tableB03("locked || torches < 2"), out: "1" },
    ] } },

  { id: "u2r-a-04", skill: "bool", type: "mcq", topic: "2.6",
    stem: "Consider the following expression, where `x` is an `int`.",
    code: `x > 3 && x > 7`,
    question: "Which of the following is equivalent to the expression for all values of `x`?",
    choices: ["x > 7", "x > 3", "x >= 7", "x > 3 || x > 7"], mono: true,
    why: [
      "With `&&`, both parts must be true. Every `x` greater than 7 is also greater than 3, so the `x > 3` part never changes the result.",
      "This is true for 5, but 5 is not greater than 7, so the original is false for 5.",
      "With `x` equal to 7 this is true, but `7 > 7` is false, so the original is false.",
      "This changes `&&` to `||`. It is true for 5, because 5 is greater than 3, and the original is false for 5.",
    ],
    answer: 0,
    verify: { cases: [
      { run: tableB04("x > 7"), out: "0" },
      { run: tableB04("x > 3"), out: "4" },
      { run: tableB04("x >= 7"), out: "1" },
      { run: tableB04("x > 3 || x > 7"), out: "4" },
    ] } },

  { id: "u2r-a-05", skill: "bool", type: "output", topic: "2.5",
    stem: "Consider the following code segment.",
    code: `boolean shield = false;
boolean potion = true;
int hp = 4;
boolean first = !shield && hp < 5 || !potion;
boolean second = !(shield || hp < 5) && potion;
System.out.println(first + " " + second);`,
    question: "What is printed? Type it exactly, one line per line.",
    answer: "true false",
    why: "A `!` applies only to what comes right after it, and `&&` is done before `||`. The first expression is `(true && true) || false`, which is `true`. In the second, the parentheses come first: `shield || hp < 5` is `true`, the `!` makes it `false`, and `false && potion` is `false`.",
    verify: { out: "true false" } },

  { id: "u2r-a-06", skill: "bool", type: "output", topic: "2.6",
    stem: "Consider the following code segment.",
    code: `int a = 5;
int b = 8;
System.out.println(!(a > 4 && b > 9));
System.out.println(a <= 4 && b <= 9);
System.out.println(a <= 4 || b <= 9);`,
    question: "What is printed? Type it exactly, one line per line.",
    answer: "true\nfalse\ntrue",
    why: "`a > 4 && b > 9` is `true && false`, so the first line prints `true`. The second line flips both comparisons but keeps `&&`, which is the usual De Morgan mistake: `a <= 4` is false, so it prints `false`. The third line also changes `&&` to `||`, as De Morgan's law says, and it agrees with the first line.",
    verify: { out: "true\nfalse\ntrue" } },

  { id: "u2r-a-07", skill: "bool", type: "mcq", topic: "2.5",
    stem: "The following code segment is intended to print `strong` when the average damage per hit, `damage / hits`, is greater than 4, and to print `weak` otherwise. When `hits` is 0, it should print `weak` without throwing an exception.",
    code: `int damage = 30;
int hits = 0;
if (/* missing condition */)
{
    System.out.println("strong");
}
else
{
    System.out.println("weak");
}`,
    question: "Which of the following can replace `/* missing condition */` so that the code segment works as intended for every value of `hits` that is 0 or greater?",
    choices: [
      "hits > 0 && damage / hits > 4",
      "damage / hits > 4 && hits > 0",
      "hits > 0 || damage / hits > 4",
      "hits == 0 || damage / hits > 4",
    ], mono: true,
    why: [
      "When `hits` is 0, `hits > 0` is false, so `&&` stops before the division. When `hits` is more than 0, the division is safe and decides the result.",
      "The division comes first, so with `hits` equal to 0 it runs before the check and throws an `ArithmeticException`. The guard must be on the left.",
      "With `||`, a false left side means the right side is evaluated. When `hits` is 0 the left side is false, so the division runs and throws an `ArithmeticException`.",
      "This never divides by 0, but when `hits` is 0 the condition is true, so it prints `strong` instead of `weak`.",
    ],
    answer: 0,
    verify: { cases: [
      { run: guardB07("hits > 0 && damage / hits > 4", 0), out: "weak" },
      { run: guardB07("hits > 0 && damage / hits > 4", 6), out: "strong" },
      { run: guardB07("hits > 0 && damage / hits > 4", 7), out: "weak" },
      { run: guardB07("damage / hits > 4 && hits > 0", 0), throws: "ArithmeticException" },
      { run: guardB07("hits > 0 || damage / hits > 4", 0), throws: "ArithmeticException" },
      { run: guardB07("hits == 0 || damage / hits > 4", 0), out: "strong" },
    ] } },

  { id: "u2r-a-08", skill: "bool", type: "mcq", topic: "2.6",
    stem: "Consider the following code segment, where `x` and `y` are `int` variables that have been properly declared and initialized.",
    code: `boolean result = (x > 0 || y > 0) && !(x > 0 && y > 0);`,
    question: "Which of the following best describes when `result` is `true`?",
    choices: [
      "Exactly one of `x` and `y` is positive.",
      "At least one of `x` and `y` is positive.",
      "Neither `x` nor `y` is positive.",
      "Both `x` and `y` are positive.",
    ],
    why: [
      "The first part needs at least one positive value. The second part, `!(x > 0 && y > 0)`, is false when both are positive. Together they leave exactly one.",
      "This ignores the second part. When both are positive, `!(x > 0 && y > 0)` is false, so `result` is false.",
      "When neither is positive, `x > 0 || y > 0` is false, so `result` is false.",
      "When both are positive, `x > 0 && y > 0` is true, and the `!` makes the second part false.",
    ],
    answer: 0,
    verify: { cases: [
      { run: `int x = 3;
int y = -2;
System.out.print(((x > 0 || y > 0) && !(x > 0 && y > 0)) + " ");
x = -1;
y = 4;
System.out.print(((x > 0 || y > 0) && !(x > 0 && y > 0)) + " ");
x = 3;
y = 4;
System.out.print(((x > 0 || y > 0) && !(x > 0 && y > 0)) + " ");
x = 0;
y = 0;
System.out.println((x > 0 || y > 0) && !(x > 0 && y > 0));`, out: "true true false false" },
    ] } },

  { id: "u2r-a-09", skill: "bool", type: "mcq", topic: "2.5",
    stem: "Consider the following code segment.",
    code: `int floor = 7;
if (1 <= floor <= 10)
{
    System.out.println("in the tower");
}`,
    question: "What is the result of executing the code segment?",
    choices: [
      "Nothing is printed. The code segment does not compile.",
      "in the tower",
      "Nothing is printed, because the condition is false.",
      "Nothing is printed. An exception is thrown when the `if` is reached.",
    ],
    why: [
      "Java evaluates `1 <= floor` first, which gives a `boolean`, and then tries to compare that `boolean` with 10. The compiler reports `bad operand types for binary operator '<='`. The working version is `1 <= floor && floor <= 10`.",
      "That would be the result of `1 <= floor && floor <= 10`. Java does not read a chain of comparisons the way math does.",
      "The condition is never evaluated, true or false: the compiler rejects the code before it runs.",
      "The problem is found by the compiler, not while the program runs, so no exception is involved.",
    ],
    answer: 0,
    verify: { error: "bad operand types for binary operator '<='" } },

  // ---------- if: 2.3, 2.4 ----------
  { id: "u2r-a-10", skill: "if", type: "mcq", topic: "2.3",
    stem: "Consider the following code segment.",
    code: `int damage = 0;
int roll = 18;
if (roll > 15)
{
    damage += 5;
}
if (roll > 10)
{
    damage += 3;
}
if (roll > 5)
{
    damage += 1;
}
System.out.println(damage);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["9", "5", "1", "8"], mono: true,
    why: [
      "Each `if` is its own statement, so all three tests are checked. 18 is greater than 15, 10, and 5, so all three amounts are added.",
      "That is the result of an `else if` chain, which stops at the first true test. These are three separate `if` statements.",
      "This keeps only the last change. `damage += 1` adds 1 to what is already there.",
      "This leaves out the last test. 18 is greater than 5, so 1 more is added.",
    ],
    answer: 0,
    verify: { out: "9" } },

  { id: "u2r-a-11", skill: "if", type: "mcq", topic: "2.3",
    stem: "Consider the following code segment, where `temp` is an `int` variable that has been properly declared and initialized.",
    code: `if (temp > 50)
{
    System.out.println("warm");
}
else if (temp > 80)
{
    System.out.println("hot");
}
else
{
    System.out.println("cold");
}`,
    question: "Which of the following best describes the behavior of the code segment?",
    choices: [
      "`hot` is never printed, for any value of `temp`.",
      "`hot` is printed whenever `temp` is greater than 80.",
      "`cold` is never printed, for any value of `temp`.",
      "`warm` is printed only when `temp` is from 51 to 80.",
    ],
    why: [
      "Every `temp` greater than 80 is also greater than 50, so the first test catches it and the rest of the chain is skipped. The `hot` branch is reached only when `temp > 50` is false, and then `temp > 80` is false too.",
      "The chain stops at the first true test. For 90, `temp > 50` is true first, so `warm` is printed.",
      "`cold` is printed whenever `temp` is 50 or less, because then both tests are false.",
      "The first test has no upper limit. 90 is greater than 50, so `warm` is printed for 90 too.",
    ],
    answer: 0,
    verify: { cases: [
      { run: `for (int temp = 40; temp <= 100; temp += 10)
{
    if (temp > 50)
    {
        System.out.println("warm");
    }
    else if (temp > 80)
    {
        System.out.println("hot");
    }
    else
    {
        System.out.println("cold");
    }
}`, out: "cold\ncold\nwarm\nwarm\nwarm\nwarm\nwarm" },
    ] } },

  { id: "u2r-a-12", skill: "if", type: "mcq", topic: "2.3",
    stem: "Consider the following code segment.",
    code: `String word = "icebolt";
String part = word.substring(0, 3);
if (part == "ice")
{
    System.out.print("A");
}
if (part.equals("ice"))
{
    System.out.print("B");
}
else
{
    System.out.print("C");
}
System.out.println();`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["B", "AB", "C", "Nothing is printed. The code segment does not compile."],
    why: [
      "`substring` builds a new String, so `part` and the literal `\"ice\"` are two different objects. `==` checks whether both sides are the same object, so it is false. `equals` compares the letters, so it is true.",
      "`==` on Strings does not compare the letters. It is true only when both sides refer to the same object, and `part` is a new String made by `substring`.",
      "`equals` compares the characters one by one. `part` holds `ice`, so `part.equals(\"ice\")` is true and B is printed.",
      "`==` compiles with two Strings. It compares references, which is why it is a silent bug rather than a compile error.",
    ],
    answer: 0,
    verify: { out: "B" } },

  { id: "u2r-a-13", skill: "if", type: "mcq", topic: "2.4",
    stem: "Consider the following code segment.",
    code: `int keys = 2;
int gold = 3;
String msg = "wait";
if (keys > 0)
{
    if (gold > 5)
    {
        msg = "buy";
    }
}
else
{
    msg = "search";
}
System.out.println(msg);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["wait", "search", "buy", "Nothing is printed. The code segment does not compile."],
    why: [
      "Follow the braces. The `else` comes after the brace that closes the outer block, so it belongs to `if (keys > 0)`. That test is true, the inner test `gold > 5` is false, and the inner `if` has no `else`, so `msg` keeps its value.",
      "The `else` belongs to the outer `if`, not the inner one. It runs only when `keys > 0` is false, and `keys` is 2.",
      "`gold > 5` is false, because `gold` is 3.",
      "An `if` does not need an `else`. The inner `if` is complete on its own, and the braces show which `if` the `else` belongs to.",
    ],
    answer: 0,
    verify: { out: "wait" } },

  { id: "u2r-a-14", skill: "if", type: "mcq", topic: "2.4",
    stem: "Consider the following code segment, where `level` and `mana` are `int` variables that have been properly declared and initialized.",
    code: `if (level >= 5)
{
    if (mana > 10)
    {
        System.out.println("cast");
    }
}`,
    question: "Which of the following code segments produces the same output as the code segment for all values of `level` and `mana`?",
    choices: I05, mono: true,
    why: [
      "The inner `if` is tested only when the outer one is true, so `cast` is printed only when both tests are true. That is exactly `&&`.",
      "With `||`, one true test is enough. With `level` equal to 1 and `mana` equal to 20, this prints `cast` and the original prints nothing.",
      "These are two separate `if` statements. When both tests are true this prints `cast` twice, and when only one is true it still prints it once.",
      "By De Morgan's law this is `level >= 5 && mana <= 10`. The `!` also flips `mana > 10`, so this casts with too little mana and not with enough.",
    ],
    answer: 0,
    verify: { cases: [
      { run: gridI05(I05[0]), out: "4,10:\n4,11:\n5,10:\n5,11:cast" },
      { run: gridI05(I05[1]), out: "4,10:\n4,11:cast\n\n5,10:cast\n\n5,11:cast" },
      { run: gridI05(I05[2]), out: "4,10:\n4,11:cast\n\n5,10:cast\n\n5,11:cast\ncast" },
      { run: gridI05(I05[3]), out: "4,10:\n4,11:\n5,10:cast\n\n5,11:" },
    ] } },

  { id: "u2r-a-15", skill: "if", type: "output", topic: "2.4",
    stem: "Consider the following code segment.",
    code: `int hp = 12;
int armor = 3;
if (hp > 10)
{
    if (armor > 5)
    {
        System.out.println("tank");
    }
    else
    {
        System.out.println("fighter");
    }
    System.out.println("ready");
}
else if (armor > 2)
{
    System.out.println("guard");
}
System.out.println("done");`,
    question: "What is printed? Type it exactly, one line per line.",
    answer: "fighter\nready\ndone",
    why: "`hp > 10` is true, so the outer block runs. Inside it, `armor > 5` is false, so the inner `else` prints `fighter`, and `ready` comes next because it is inside the outer block too. The `else if` is skipped because the outer `if` was true. `done` is outside every `if`, so it always prints.",
    verify: { out: "fighter\nready\ndone" } },

  { id: "u2r-a-16", skill: "if", type: "output", topic: "2.3",
    stem: "Consider the following code segment.",
    code: `int gold = 40;
if (gold > 30)
{
    gold -= 25;
}
if (gold > 10)
{
    gold -= 10;
}
else
{
    gold += 50;
}
if (gold < 10)
{
    gold *= 2;
}
System.out.println(gold);`,
    question: "What is printed? Type it exactly, one line per line.",
    answer: "10",
    why: "These are three separate `if` statements, and each one tests the value left by the one before it. 40 is more than 30, so `gold` becomes 15. 15 is more than 10, so it becomes 5. 5 is less than 10, so it doubles to 10.",
    verify: { out: "10" } },

  { id: "u2r-a-17", skill: "if", type: "mcq", topic: "2.3",
    stem: "The following code segment is intended to set `rank` to `\"gold\"` when `points` is at least 500, to `\"silver\"` when `points` is at least 200 but less than 500, and to `\"bronze\"` otherwise. Assume `points` is an `int` that has been properly declared and initialized.",
    code: `String rank;
/* missing code */
System.out.println(rank);`,
    question: "Which of the following can replace `/* missing code */` so that the code segment works as intended?",
    choices: I08, mono: true,
    why: [
      "The strictest test comes first, and each `else if` is reached only when every test above it was false. 500 or more is gold, 200 to 499 is silver, and anything less is bronze.",
      "The chain stops at the first true test. Every value of 500 or more is also at least 200, so it is caught by the `silver` test, and `gold` is never set.",
      "The second `if` is a separate statement. For 600, `rank` is set to `\"gold\"` and then replaced by `\"silver\"`, because 600 is also at least 200.",
      "\"At least\" means `>=`. With `points` equal to 500 this sets `\"silver\"`, and with 200 it sets `\"bronze\"`.",
    ],
    answer: 0,
    verify: { cases: [
      { methods: rankI08(I08[0]), run: rankRun, out: "gold gold silver silver bronze" },
      { methods: rankI08(I08[1]), run: rankRun, out: "silver silver silver silver bronze" },
      { methods: rankI08(I08[2]), run: rankRun, out: "silver silver silver silver bronze" },
      { methods: rankI08(I08[3]), run: rankRun, out: "gold silver silver bronze bronze" },
    ] } },

  { id: "u2r-a-18", skill: "if", type: "mcq", topic: "2.3",
    stem: "Consider the following code segment.",
    code: `int lives = 3;
if (lives = 0)
{
    System.out.println("game over");
}
else
{
    System.out.println("keep going");
}`,
    question: "What is the result of executing the code segment?",
    choices: [
      "Nothing is printed. The code segment does not compile.",
      "keep going",
      "game over",
      "Nothing is printed, because the condition sets `lives` to 0.",
    ],
    why: [
      "`lives = 0` is an assignment, not a comparison. Its value is the `int` 0, and a condition must be a `boolean`, so the compiler reports `incompatible types: int cannot be converted to boolean`. The comparison is `lives == 0`.",
      "That would be the result of `lives == 0`. With a single `=`, the code never gets to run.",
      "Java has no rule that treats 0 or any other `int` as true or false. A condition must be a `boolean`.",
      "The program never runs at all, so no variable is set. The compiler rejects the condition because it is an `int`.",
    ],
    answer: 0,
    verify: { error: "incompatible types: int cannot be converted to boolean" } },

  // ---------- while: 2.7 ----------
  { id: "u2r-a-19", skill: "while", type: "output", topic: "2.7",
    stem: "Consider the following code segment.",
    code: `int energy = 50;
int turns = 0;
while (energy > 0)
{
    energy -= 12;
    turns++;
}
System.out.println(energy + " " + turns);`,
    question: "What is printed? Type it exactly, one line per line.",
    answer: "-10 5",
    why: "`energy` goes 50, 38, 26, 14, 2, and then -10. The test is checked before each pass, and 2 is still greater than 0, so a fifth pass runs. Nothing in the loop stops `energy` at 0.",
    verify: { out: "-10 5" } },

  { id: "u2r-a-20", skill: "while", type: "mcq", topic: "2.7",
    stem: "Consider the following code segment.",
    code: `int total = 0;
int value = 3;
while (value != 0)
{
    total += value;
    value = (value + 5) % 9;
}
System.out.println(total);`,
    question: "What is printed, and how many times does the body of the loop run?",
    choices: [
      "15, and the body runs 3 times",
      "15, and the body runs 4 times",
      "12, and the body runs 3 times",
      "Nothing is printed, because the loop never stops.",
    ],
    why: [
      "`value` goes 3, 8, 4, and then `(4 + 5) % 9`, which is 0. The loop stops at the stop value 0, and each value before it is added once, for a total of 15.",
      "The total is right, but the body runs once for each value before 0. The last check, with `value` equal to 0, is false, and a check that fails is not a pass.",
      "This adds each new value instead of the current one. `total += value` comes before `value` changes, so 3 is added and 0 is not.",
      "`(4 + 5) % 9` is 0, so the test `value != 0` is false after the third pass.",
    ],
    answer: 0,
    verify: { cases: [
      { run: `int total = 0;
int value = 3;
int passes = 0;
while (value != 0)
{
    total += value;
    value = (value + 5) % 9;
    passes++;
}
System.out.println(total + " " + passes);`, out: "15 3" },
    ] } },

  { id: "u2r-a-21", skill: "while", type: "mcq", topic: "2.7",
    stem: "Consider the following code segment.",
    code: `int n = 4071;
int rev = 0;
while (n > 0)
{
    rev = rev * 10 + n % 10;
    n /= 10;
}
System.out.println(rev);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["1704", "174", "4071", "12"], mono: true,
    why: [
      "`n % 10` takes the last digit and `n /= 10` removes it. `rev` goes 1, 17, 170, and then 1704: multiplying by 10 makes room for the next digit, even when that digit is 0.",
      "The 0 is not lost. On that pass `rev` goes from 17 to `17 * 10 + 0`, which is 170.",
      "`n % 10` gives the LAST digit first, so the digits come out in reverse order.",
      "That is the sum of the digits. `rev * 10` shifts the digits left before each new one is added.",
    ],
    answer: 0,
    verify: { out: "1704" } },

  { id: "u2r-a-22", skill: "while", type: "mcq", topic: "2.7",
    stem: "Each of the following code segments contains a `while` loop.",
    question: "Which of the following code segments contains a loop that never stops?",
    choices: W04, mono: true,
    why: [
      "`k` goes 10, 8, 6, 4, and keeps going down by 2. It is always even, so it never equals 5, and `k != 5` stays true forever.",
      "`k` goes 10, 8, 6, and then 4, and `4 > 5` is false, so the loop stops after three passes.",
      "`k` grows 1, 3, 9, 27, 81, 243. Once it passes 100 the test is false and the loop stops.",
      "This loop never runs at all: `k < 0` is false at the start. A loop that never starts is not a loop that never stops.",
    ],
    answer: 0,
    verify: { cases: [
      { run: guardW04("int k = 10;", "k != 5", "k -= 2;"), out: "1000" },
      { run: guardW04("int k = 10;", "k > 5", "k -= 2;"), out: "3" },
      { run: guardW04("int k = 1;", "k < 100", "k *= 3;"), out: "5" },
      { run: guardW04("int k = 0;", "k < 0", "k--;"), out: "0" },
    ] } },

  { id: "u2r-a-23", skill: "while", type: "mcq", topic: "2.7",
    stem: "The following code segment is intended to print the multiples of 7 from 7 to 70, inclusive, on one line.",
    code: `int m = 7;
while (/* missing condition */)
{
    System.out.print(m + " ");
    m += 7;
}`,
    question: "Which of the following can replace `/* missing condition */` so that the code segment works as intended?",
    choices: ["m <= 70", "m < 70", "m <= 77", "m * 7 <= 70"], mono: true,
    why: [
      "70 is the last value to print, and `<=` lets the loop run when `m` is exactly 70. The next value, 77, fails the test.",
      "This leaves out 70. When `m` is 70, `m < 70` is false.",
      "This also prints 77, because 77 passes the test.",
      "This tests seven times the value instead of the value. When `m` is 14, `m * 7` is 98, so only 7 is printed.",
    ],
    answer: 0,
    verify: { cases: [
      { run: W05("m <= 70"), out: "7 14 21 28 35 42 49 56 63 70" },
      { run: W05("m < 70"), out: "7 14 21 28 35 42 49 56 63" },
      { run: W05("m <= 77"), out: "7 14 21 28 35 42 49 56 63 70 77" },
      { run: W05("m * 7 <= 70"), out: "7" },
    ] } },

  { id: "u2r-a-24", skill: "while", type: "output", topic: "2.7",
    stem: "Consider the following code segment.",
    code: `int n = 50306;
int zeros = 0;
int digits = 0;
while (n > 0)
{
    if (n % 10 == 0)
    {
        zeros++;
    }
    digits++;
    n /= 10;
}
System.out.println(digits + " " + zeros);`,
    question: "What is printed? Type it exactly, one line per line.",
    answer: "5 2",
    why: "Each pass looks at the last digit with `n % 10` and then removes it with `n /= 10`. From the right, the digits are 6, 0, 3, 0, and 5: five passes, and two of those digits are 0. A 0 digit does not stop the loop. It stops only when `n` itself reaches 0.",
    verify: { out: "5 2" } },

  { id: "u2r-a-25", skill: "while", type: "mcq", topic: "2.7",
    stem: "Consider the following code segment.",
    code: `int a = 12;
int b = 4;
while (a < b)
{
    a -= 2;
}
while (a > b)
{
    a -= 3;
    b++;
}`,
    question: "How many times is the statement `b++;` executed?",
    choices: ["2", "3", "0", "1"], mono: true,
    why: [
      "The first loop never runs, because `12 < 4` is false. In the second loop, `a` and `b` go from 12 and 4 to 9 and 5, and then to 6 and 6. `6 > 6` is false, so the loop stops after two passes.",
      "This runs one more pass after `a` equals `b`. The test is `>`, and 6 is not greater than 6.",
      "The first loop never runs, but the second loop is a separate statement. Its test, `12 > 4`, is true at the start.",
      "After one pass `a` is 9 and `b` is 5, and `9 > 5` is still true, so the body runs again.",
    ],
    answer: 0,
    verify: { cases: [
      { run: `int a = 12;
int b = 4;
int count = 0;
while (a < b)
{
    a -= 2;
}
while (a > b)
{
    a -= 3;
    b++;
    count++;
}
System.out.println(count + " " + a + " " + b);`, out: "2 6 6" },
    ] } },

  { id: "u2r-a-26", skill: "while", type: "mcq", topic: "2.7",
    stem: "Consider the following code segment, where `n` is a positive `int` that has been properly declared and initialized.",
    code: `int p = 1;
while (p * 2 <= n)
{
    p *= 2;
}
System.out.println(p);`,
    question: "Which of the following best describes what is printed?",
    choices: [
      "The largest power of 2 that is at most `n`",
      "The largest power of 2 that is less than `n`",
      "The smallest power of 2 that is greater than `n`",
      "The number of times `n` can be divided by 2",
    ],
    why: [
      "`p` doubles only while the doubled value would not go past `n`. It stops at the last power of 2 that is still at most `n`: 16 when `n` is 20, and also 16 when `n` is 16.",
      "The test is `<=`, so when `n` is itself a power of 2, `p` reaches `n`. When `n` is 16, this prints 16.",
      "The loop stops before `p` goes past `n`. `p * 2 <= n` must be true for `p` to double.",
      "The loop prints `p`, which doubles on each pass, not a count of passes. When `n` is 20, it prints 16.",
    ],
    answer: 0,
    verify: { cases: [
      { run: W08(20), out: "16" },
      { run: W08(16), out: "16" },
      { run: W08(1), out: "1" },
      { run: W08(100), out: "64" },
    ] } },

  // ---------- for: 2.8 ----------
  { id: "u2r-a-27", skill: "for", type: "mcq", topic: "2.8",
    stem: "Consider the following code segment.",
    code: `for (int k = 30; k >= 0; k -= 4)
{
    System.out.print("#");
}`,
    question: "How many times is `#` printed?",
    choices: ["8", "7", "9", "31"], mono: true,
    why: [
      "`k` takes the values 30, 26, 22, 18, 14, 10, 6, and 2. The next value, -2, fails `k >= 0`. That is eight values.",
      "Dividing 30 by 4 and dropping the remainder misses the pass for the starting value. List the values of `k` and count them.",
      "This lets one more value in. After 2 comes -2, and -2 is not at least 0.",
      "That counts every value from 30 down to 0. `k -= 4` moves `k` down by 4 on each pass.",
    ],
    answer: 0,
    verify: { out: "########" } },

  { id: "u2r-a-28", skill: "for", type: "mcq", topic: "2.8",
    stem: "Consider the following code segment.",
    code: `int sum = 0;
for (int p = 1; p < 100; p *= 3)
{
    sum += p;
}
System.out.println(sum);`,
    question: "What is printed, and how many times does the body of the loop run?",
    choices: [
      "121, and the body runs 5 times",
      "40, and the body runs 4 times",
      "364, and the body runs 6 times",
      "121, and the body runs 6 times",
    ],
    why: [
      "`p` takes the values 1, 3, 9, 27, and 81, and each is added once. The next value, 243, is not less than 100.",
      "This stops before 81. 81 is less than 100, so it is added.",
      "This also adds 243. The test is checked before each pass, and 243 fails it.",
      "The sum is right, but the last check, with `p` equal to 243, is false, and a check that fails is not a pass of the body.",
    ],
    answer: 0,
    verify: { cases: [
      { run: `int sum = 0;
int passes = 0;
for (int p = 1; p < 100; p *= 3)
{
    sum += p;
    passes++;
}
System.out.println(sum + " " + passes);`, out: "121 5" },
    ] } },

  { id: "u2r-a-29", skill: "for", type: "mcq", topic: "2.8",
    stem: "Consider the following code segment.",
    code: `for (int n = 20; n > 5; n -= 5)
{
    System.out.print(n + " ");
}`,
    question: "Which of the following code segments produces the same output?",
    choices: F03, mono: true,
    why: [
      "The three parts of the `for` header move to three places: the start goes before the loop, the test goes in the `while`, and the step goes at the end of the body, after the print.",
      "Here the step comes before the print, so the first number printed is 15 and the last is 5. A `for` loop does its step after the body.",
      "With `>=`, the loop also runs when `n` is 5, so 5 is printed too.",
      "The `while` test is the keep-going test, the same as the middle part of the `for` header. `20 < 5` is false, so this prints nothing.",
    ],
    answer: 0,
    verify: { cases: [
      { run: `for (int n = 20; n > 5; n -= 5)
{
    System.out.print(n + " ");
}
System.out.println("|");`, out: "20 15 10 |" },
      { run: F03[0] + `\nSystem.out.println("|");`, out: "20 15 10 |" },
      { run: F03[1] + `\nSystem.out.println("|");`, out: "15 10 5 |" },
      { run: F03[2] + `\nSystem.out.println("|");`, out: "20 15 10 5 |" },
      { run: F03[3] + `\nSystem.out.println("|");`, out: "|" },
    ] } },

  { id: "u2r-a-30", skill: "for", type: "mcq", topic: "2.8",
    stem: "The following code segment is intended to print `10 8 6 4 2` on one line.",
    code: `/* missing loop header */
{
    System.out.print(i + " ");
}`,
    question: "Which of the following can replace `/* missing loop header */` so that the code segment works as intended?",
    choices: [
      "for (int i = 10; i > 0; i -= 2)",
      "for (int i = 10; i >= 0; i -= 2)",
      "for (int i = 10; i > 0; i--)",
      "for (int i = 2; i <= 10; i += 2)",
    ], mono: true,
    why: [
      "`i` starts at 10, goes down by 2, and keeps going while it is above 0. After 2 comes 0, which fails the test.",
      "This also prints 0, because 0 passes `i >= 0`.",
      "`i--` moves down by 1, so this prints every number from 10 down to 1.",
      "These are the right numbers in the wrong order. Counting up prints 2 first.",
    ],
    answer: 0,
    verify: { cases: [
      { run: F04("for (int i = 10; i > 0; i -= 2)"), out: "10 8 6 4 2" },
      { run: F04("for (int i = 10; i >= 0; i -= 2)"), out: "10 8 6 4 2 0" },
      { run: F04("for (int i = 10; i > 0; i--)"), out: "10 9 8 7 6 5 4 3 2 1" },
      { run: F04("for (int i = 2; i <= 10; i += 2)"), out: "2 4 6 8 10" },
    ] } },

  { id: "u2r-a-31", skill: "for", type: "output", topic: "2.8",
    stem: "Consider the following code segment.",
    code: `String s = "";
for (int i = 1; i <= 4; i++)
{
    s = i + s + i;
}
System.out.println(s);`,
    question: "What is printed? Type it exactly, one line per line.",
    answer: "43211234",
    why: "Each pass puts `i` on both ends of `s`. After the first pass `s` is `11`, then `2112`, then `321123`, and then `43211234`. `i + s` joins rather than adds, because `s` is a String, so the numbers are joined as text and never added together.",
    verify: { out: "43211234" } },

  { id: "u2r-a-32", skill: "for", type: "output", topic: "2.8",
    stem: "Consider the following code segment.",
    code: `int i;
int sum = 0;
for (i = 2; i < 15; i += 4)
{
    sum += i;
}
System.out.println(sum + " " + i);`,
    question: "What is printed? Type it exactly, one line per line.",
    answer: "32 18",
    why: "`i` is declared before the loop, so it still exists after the loop ends. It takes the values 2, 6, 10, and 14, which add to 32. Then the step makes `i` equal to 18, the test `18 < 15` is false, and the loop ends with `i` still holding 18.",
    verify: { out: "32 18" } },

  { id: "u2r-a-33", skill: "for", type: "mcq", topic: "2.8",
    stem: "Consider the following code segment.",
    code: `for (int k = 0; k < 10; k++)
{
    System.out.print(k + " ");
    k++;
}`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["0 2 4 6 8", "0 1 2 3 4 5 6 7 8 9", "1 3 5 7 9", "0 2 4 6 8 10"], mono: true,
    why: [
      "`k` goes up twice per pass: once by the `k++` in the body and once by the step in the header. The body prints 0, 2, 4, 6, and 8, and then `k` is 10, which fails `k < 10`.",
      "This ignores the `k++` inside the body. It runs on every pass, along with the step in the header.",
      "The print comes before the `k++` in the body, so the first value printed is 0.",
      "When `k` reaches 10, the test `k < 10` is false, so 10 is not printed.",
    ],
    answer: 0,
    verify: { out: "0 2 4 6 8" } },

  { id: "u2r-a-34", skill: "for", type: "mcq", topic: "2.8",
    stem: "Consider the following code segment.",
    code: `int total = 0;
int n = 8;
for (int j = n; j > n / 2; j--)
{
    total++;
}`,
    question: "How many times is the statement `total++;` executed?",
    choices: ["4", "5", "8", "3"], mono: true,
    why: [
      "`n / 2` is 4, so `j` takes the values 8, 7, 6, and 5. When `j` is 4, `4 > 4` is false.",
      "This also runs when `j` equals 4. The test is `>`, so 4 is left out.",
      "That is the starting value of `j`, not a count. The loop stops when `j` reaches `n / 2`, not 0.",
      "This leaves out the first value. The test is checked before the first pass, and `8 > 4` is true, so 8 counts.",
    ],
    answer: 0,
    verify: { cases: [
      { run: `int total = 0;
int n = 8;
for (int j = n; j > n / 2; j--)
{
    total++;
}
System.out.println(total);`, out: "4" },
    ] } },
];

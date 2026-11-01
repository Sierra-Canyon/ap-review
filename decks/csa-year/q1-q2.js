// AP CSA mock forms: Quiz 1 Practice A and B (types, output, concatenation; W0 to W3),
// Quiz 2 Practice A and B (arithmetic and casting; W4 to W7, as taught by 9/25).
// Each form: six multiple choice in the real Quiz 1 order (1.3, 1.2, 1.3, 1.6, 1.3, 1.1) or the Quiz 2 plan
// (division and modulo, three items combining integer division with a cast, overflow, Math, the random formula).
// Quiz 1 forms use no String methods and no Math class (those are W6 and W9).
// In every mcq the key is written first and answer is 0 (the site shuffles).

const NC = "Nothing is printed, because the code does not compile.";

// ---------- Quiz 1 Practice A ----------

const q1a = [
  { id: "q1a-01", skill: "arith", type: "mcq", topic: "1.3",
    stem: "A hero's health points are spread evenly over a number of turns. Consider the following code segment.",
    code: `int hp = 45;
int turns = 6;
double perTurn = hp / turns;
System.out.println(perTurn);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["7.0", "7.5", "7", "8.0"], mono: true,
    why: [
      "`hp` and `turns` are both `int`, so `hp / turns` is integer division: 45 / 6 is 7, and the remainder is thrown away. Only then is the 7 widened to fit the `double` variable, so it prints as `7.0`.",
      "This is the exact quotient, but the division happens before the assignment, with two `int` operands. The .5 is gone before the value ever reaches `perTurn`. Writing `hp / 6.0` or `(double) hp / turns` would give 7.5.",
      "The arithmetic is right, but the 7 is stored in a `double`, and a `double` always prints with a decimal point.",
      "Integer division does not round. It discards the remainder, so 7.5 becomes 7, not 8.",
    ],
    answer: 0,
    verify: { out: "7.0" } },

  { id: "q1a-02", skill: "types", type: "mcq", topic: "1.2",
    stem: "Each of the following declarations appears by itself in a program.",
    code: `double rate = 6 / 4;
int floors = 6.0 / 2;
String tag = "6" + 2;
int left = 6 % 4;`,
    question: "Which of the following declarations does not compile?",
    choices: ["int floors = 6.0 / 2;", "double rate = 6 / 4;", "String tag = \"6\" + 2;", "int left = 6 % 4;"], mono: true,
    why: [
      "`6.0` is a `double`, so `6.0 / 2` is a `double` (3.0), even though the answer is a whole number. Java does not narrow a `double` into an `int` on its own, so javac reports `error: incompatible types: possible lossy conversion from double to int`.",
      "This compiles. `6 / 4` is integer division and gives the `int` 1, and an `int` always fits in a `double`, so `rate` holds 1.0. The value is surprising, but the code is legal.",
      "This compiles. A String on one side of `+` makes it a join, so the right side is the String `\"62\"`, and the variable is declared `String`.",
      "This compiles. `%` between two `int` values gives an `int`, the remainder 2.",
    ],
    answer: 0,
    verify: { cases: [
      { run: "int floors = 6.0 / 2;", error: "possible lossy conversion from double to int" },
      { run: "double rate = 6 / 4;\nSystem.out.println(rate);", out: "1.0" },
      { run: "String tag = \"6\" + 2;\nSystem.out.println(tag);", out: "62" },
      { run: "int left = 6 % 4;\nSystem.out.println(left);", out: "2" },
    ] } },

  { id: "q1a-03", skill: "types", type: "mcq", topic: "1.3",
    stem: "Consider the following code segment.",
    code: `int a = 3;
int b = 4;
System.out.println(a + b + " = " + a + b);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["7 = 34", "7 = 7", "34 = 34", "34 = 7"], mono: true,
    why: [
      "`+` is evaluated left to right. `a + b` has an `int` on each side, so it adds to 7. Then `7 + \" = \"` has a String on one side, and from there every `+` joins: `\"7 = \"`, then `\"7 = 3\"`, then `\"7 = 34\"`.",
      "The second `a + b` is not added. By the time Java reaches it, the running value is already a String, so `a` and then `b` are joined on one at a time. Parentheses, as in `(a + b)`, would make it add.",
      "The first `+` has an `int` on each side, so it adds. The joining starts only when the String `\" = \"` is reached.",
      "This has both halves backward. The first `a + b` adds because no String has appeared yet; the second joins because one has.",
    ],
    answer: 0,
    verify: { out: "7 = 34" } },

  { id: "q1a-04", skill: "arith", type: "mcq", topic: "1.6",
    stem: "Consider the following code segment.",
    code: `int gems = 50;
gems -= 8;
gems /= 4;
System.out.println(gems);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["10", "10.5", "11", "4"], mono: true,
    why: [
      "`gems -= 8;` makes `gems` 42. `gems /= 4;` is shorthand for `gems = gems / 4;`, and both are `int`, so 42 / 4 is integer division: 10, with the remainder 2 thrown away.",
      "`gems` is an `int`, and 42 / 4 has two `int` operands, so the .5 is discarded. An `int` variable can never hold 10.5.",
      "Integer division does not round. 42 / 4 is 10.5 on paper, and Java keeps only the 10.",
      "The statements run in the order they are written. The subtraction happens first, so the division works on 42, not 50.",
    ],
    answer: 0,
    verify: { out: "10" } },

  { id: "q1a-05", skill: "arith", type: "mcq", topic: "1.3",
    stem: "Consider the following code segment.",
    code: `int n = 3916;
System.out.println(n % 100 / 10);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["1", "6", "9", "3"], mono: true,
    why: [
      "`%` and `/` have the same precedence and run left to right, so this is `(n % 100) / 10`. `3916 % 100` keeps the last two digits, 16. Then `16 / 10` is integer division, which drops the last digit and leaves 1, the tens digit.",
      "6 is the last digit, which is what `n % 10` alone would give. Here the `/ 10` runs after the `% 100` and removes the 6.",
      "9 is the hundreds digit, which `n / 100 % 10` would give. `% 100` keeps only the last two digits, so the 9 is gone before the division.",
      "3 is the leftmost digit. `% 100` keeps digits from the right end of the number, not the left.",
    ],
    answer: 0,
    verify: { out: "1" } },

  { id: "q1a-06", skill: "types", type: "mcq", topic: "1.1",
    stem: "Consider the following code segment.",
    code: `int score = 40;
System.out.println(Score + 2);`,
    question: "What happens when this code segment is compiled and run?",
    choices: ["The code does not compile.", "42 is printed.", "402 is printed.", "Score + 2 is printed."],
    why: [
      "Java names are case sensitive. The variable declared is `score`, and `Score` with a capital S is a different name that was never declared, so javac reports `error: cannot find symbol` with `symbol: variable Score`.",
      "This is what `score + 2` would print. `Score` is not the same name as `score`, so the program does not compile and never runs.",
      "There is no String in `Score + 2`, so even if the name were right, `+` would add, not join. And the name is not right, so nothing runs.",
      "`Score + 2` is not in quotation marks, so Java reads it as an expression, not as text. The name `Score` was never declared, so the code does not compile.",
    ],
    answer: 0,
    verify: { error: "cannot find symbol" } },
];

// ---------- Quiz 1 Practice B ----------

const q1b = [
  { id: "q1b-01", skill: "arith", type: "mcq", topic: "1.3",
    stem: "A quest's length is stored in minutes. Consider the following code segment.",
    code: `int minutes = 50;
double hours = minutes / 60;
System.out.println(hours);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["0.0", "0.8333333333333334", "0", "1.0"], mono: true,
    why: [
      "`minutes` and `60` are both `int`, so `minutes / 60` is integer division. 60 goes into 50 zero times, so the result is 0, and the remainder is thrown away. That 0 is then widened into the `double` variable and prints as `0.0`.",
      "This is the exact quotient, but the division runs before the assignment, with two `int` operands. Declaring `hours` as `double` does not change how the right side is computed. `minutes / 60.0` would give this.",
      "The arithmetic is right, but the 0 is stored in a `double`, and a `double` always prints with a decimal point.",
      "Integer division does not round. 50 / 60 is less than 1, and Java keeps only the whole part, which is 0.",
    ],
    answer: 0,
    verify: { out: "0.0" } },

  { id: "q1b-02", skill: "types", type: "mcq", topic: "1.2",
    stem: "Each of the following declarations appears by itself in a program.",
    code: `double torch = 12;
int rooms = 12 / 5;
String depth = "" + 12;
boolean locked = "false";`,
    question: "Which of the following declarations does not compile?",
    choices: ["boolean locked = \"false\";", "double torch = 12;", "int rooms = 12 / 5;", "String depth = \"\" + 12;"], mono: true,
    why: [
      "The quotation marks make `\"false\"` a String, not the `boolean` value `false`. A String cannot be stored in a `boolean` variable, so javac reports `error: incompatible types: String cannot be converted to boolean`.",
      "This compiles. 12 is an `int`, and an `int` always fits in a `double`, so Java widens it and `torch` holds 12.0.",
      "This compiles. `12 / 5` is integer division between two `int` values, so it gives the `int` 2, and the variable is declared `int`.",
      "This compiles. An empty String joined with 12 gives the String `\"12\"`, and the variable is declared `String`.",
    ],
    answer: 0,
    verify: { cases: [
      { run: "boolean locked = \"false\";", error: "String cannot be converted to boolean" },
      { run: "double torch = 12;\nSystem.out.println(torch);", out: "12.0" },
      { run: "int rooms = 12 / 5;\nSystem.out.println(rooms);", out: "2" },
      { run: "String depth = \"\" + 12;\nSystem.out.println(depth);", out: "12" },
    ] } },

  { id: "q1b-03", skill: "types", type: "mcq", topic: "1.3",
    stem: "Consider the following code segment.",
    code: `int gold = 5;
System.out.println(gold + gold + "g" + gold * 2);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["10g10", "55g10", "10g55", NC], mono: true,
    why: [
      "`*` runs before `+`, so `gold * 2` is 10 before any joining happens. Then the `+` signs go left to right: `gold + gold` adds two `int` values to 10, `10 + \"g\"` joins to `\"10g\"`, and joining the 10 gives `\"10g10\"`.",
      "The first `+` has an `int` on each side, so it adds. Joining starts only when the String `\"g\"` is reached.",
      "`gold * 2` is two `int` values multiplied, which is 10. Multiplication never repeats text in Java, and here it is computed before the String is even involved.",
      "This compiles. `*` is applied to `gold` and 2, both `int`, so nothing multiplies a String. Every `+` has a legal pair of operands.",
    ],
    answer: 0,
    verify: { out: "10g10" } },

  { id: "q1b-04", skill: "arith", type: "mcq", topic: "1.6",
    stem: "Consider the following code segment.",
    code: `int arrows = 31;
arrows /= 4;
arrows *= 4;
System.out.println(arrows);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["28", "31", "7", "31.0"], mono: true,
    why: [
      "`arrows /= 4;` means `arrows = arrows / 4;`, and both are `int`, so 31 / 4 is 7 with the remainder 3 thrown away. `arrows *= 4;` then gives 7 * 4, which is 28. The 3 that was dropped does not come back.",
      "Dividing by 4 and then multiplying by 4 only undoes itself when nothing is lost. Integer division lost the remainder 3, so the result is 28.",
      "7 is the value after the first compound assignment. The second one, `arrows *= 4;`, still runs and multiplies it by 4.",
      "`arrows` is an `int`, so it can never print with a decimal point, and integer division already dropped part of the value.",
    ],
    answer: 0,
    verify: { out: "28" } },

  { id: "q1b-05", skill: "arith", type: "mcq", topic: "1.3",
    stem: "Consider the following code segment.",
    code: `int n = 7254;
System.out.println(n % 1000 / 100);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["2", "5", "7", "4"], mono: true,
    why: [
      "`%` and `/` have the same precedence and run left to right, so this is `(n % 1000) / 100`. `7254 % 1000` keeps the last three digits, 254. Then `254 / 100` is integer division, which leaves 2, the hundreds digit.",
      "5 is the tens digit, which `n % 100 / 10` would give. Dividing 254 by 100 drops two digits, not one.",
      "7 is the leftmost digit, which `n / 1000` would give. `% 1000` removes it before the division runs.",
      "4 is the last digit, which `n % 10` alone would give. Here `/ 100` removes it.",
    ],
    answer: 0,
    verify: { out: "2" } },

  { id: "q1b-06", skill: "types", type: "mcq", topic: "1.1",
    stem: "Consider the following code segment.",
    code: `String hero = Mira;
System.out.println("Hero: " + hero);`,
    question: "What happens when this code segment is compiled and run?",
    choices: ["The code does not compile.", "Hero: Mira is printed.", "Hero: hero is printed.", "Hero: null is printed."],
    why: [
      "Without quotation marks, `Mira` is read as the name of a variable, and no variable called `Mira` was declared. javac reports `error: cannot find symbol` with `symbol: variable Mira`. Writing `\"Mira\"` would fix it.",
      "This is what the code would print if `Mira` were in quotation marks. Without them it is a name, not text, so the program never runs.",
      "`hero` in the second line is outside the quotation marks, so it would be replaced by its value. The first line does not compile, though, so nothing is printed at all.",
      "A missing value is not filled in with `null`. Using a name that was never declared is a compile error, so the program never runs.",
    ],
    answer: 0,
    verify: { error: "cannot find symbol" } },
];

// ---------- Quiz 2 Practice A ----------

const RAND_A = "int roll = (int) (Math.random() * 6) + 2;";
const RAND_B = "int roll = (int) (Math.random() * 4) + 5;";
// Math.random() is replaced by its smallest and largest possible values to prove the range.
const bounds = (mult, add) => `double r = 0.0;
System.out.println((int) (r * ${mult}) + ${add});
r = Math.nextDown(1.0);
System.out.println((int) (r * ${mult}) + ${add});`;

const q2a = [
  { id: "q2a-01", skill: "arith", type: "mcq", topic: "1.3",
    stem: "A cashier gives change in dollar bills and quarters. Consider the following code segment.",
    code: `int cents = 287;
int dollars = cents / 100;
cents %= 100;
int quarters = cents / 25;
cents %= 25;
System.out.println(dollars + " " + quarters + " " + cents);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["2 3 12", "2 11 12", "3 3 12", "2.87 3 12"], mono: true,
    why: [
      "`287 / 100` is integer division, 2. `cents %= 100;` changes `cents` to the remainder, 87. Then `87 / 25` is 3, and `cents %= 25;` leaves 87 % 25, which is 12.",
      "This uses 287 for the quarters, as if `cents %= 100;` left `cents` unchanged. A compound assignment stores its result, so `cents` is 87 by the time the quarters are counted.",
      "Integer division does not round. `287 / 100` keeps only the whole part, 2.",
      "`dollars` is an `int`, and `287 / 100` has two `int` operands, so the result is the whole number 2.",
    ],
    answer: 0,
    verify: { out: "2 3 12" } },

  { id: "q2a-02", skill: "arith", type: "mcq", topic: "1.5",
    stem: "Consider the following code segment.",
    code: `double avg = (int) 9.6 / 2;
System.out.println(avg);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["4.0", "4.8", "4.5", "4"], mono: true,
    why: [
      "A cast applies only to the value right after it, so `(int) 9.6` runs first and truncates to 9. Then `9 / 2` has two `int` operands, so it is integer division, 4. That 4 is widened into the `double` and prints as `4.0`.",
      "This ignores the cast. `(int)` turns 9.6 into 9 before the division, so the result can no longer be 4.8.",
      "This treats the division as `double` division. After the cast both operands are `int`, so the .5 is thrown away.",
      "The value is 4, but it is stored in a `double`, so it prints with a decimal point.",
    ],
    answer: 0,
    verify: { out: "4.0" } },

  { id: "q2a-03", skill: "arith", type: "mcq", topic: "1.5",
    stem: "Consider the following code segment.",
    code: `int total = 7;
int parts = 2;
System.out.println((int) (total / parts + 0.5) + " " + (int) ((double) total / parts + 0.5));`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["3 4", "4 4", "3 3", "3.5 4"], mono: true,
    why: [
      "In the first expression, `total / parts` is integer division, 3, so the value is `(int) 3.5`, which truncates to 3. In the second, `(double) total` makes the division `double` division, 3.5, and `(int) 4.0` is 4.",
      "Adding 0.5 rounds correctly only if the quotient still has its decimal part. In the first expression, integer division has already turned 3.5 into 3.",
      "In the second expression, the cast on `total` happens before the division, so the quotient keeps its .5 and the 0.5 pushes it up to 4.",
      "The outer `(int)` cast in the first expression truncates 3.5 to 3. A value cast to `int` never prints with a decimal point.",
    ],
    answer: 0,
    verify: { out: "3 4" } },

  { id: "q2a-04", skill: "arith", type: "mcq", topic: "1.5",
    stem: "Consider the following code segment.",
    code: `int big = Integer.MAX_VALUE;
int half = big / 2 + 1;
System.out.println(half * 2);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["-2147483648", "2147483648", "2147483647", "An ArithmeticException is thrown."], mono: true,
    why: [
      "`Integer.MAX_VALUE` is 2147483647, so `big / 2` is 1073741823 and `half` is 1073741824. Doubling that gives 2147483648, one more than the largest `int`. The value wraps around to `Integer.MIN_VALUE`, which is -2147483648.",
      "This is the true product, but it does not fit in an `int`. An `int` cannot hold anything above 2147483647, so the result wraps around to the negative end.",
      "An `int` that goes past `Integer.MAX_VALUE` does not stop there. It wraps around to the most negative `int`.",
      "Overflow is not an error in Java. No exception is thrown; the value silently wraps around.",
    ],
    answer: 0,
    verify: { out: "-2147483648" } },

  { id: "q2a-05", skill: "objects", type: "mcq", topic: "1.11",
    stem: "Consider the following code segment.",
    code: `double d = Math.sqrt(50);
int r = (int) d;
System.out.println(r + " " + (int) Math.pow(r, 2) / 3);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["7 16", "7 16.333333333333332", "7 16.0", "8 21"], mono: true,
    why: [
      "`Math.sqrt(50)` is about 7.07, and `(int)` truncates it to 7. `Math.pow(7, 2)` returns the `double` 49.0, and the cast applies to that call, giving the `int` 49. Then `49 / 3` is integer division, 16.",
      "This is `49.0 / 3`, with no cast. The `(int)` turns the result of `Math.pow` into an `int` before the division, so both operands are `int`.",
      "`Math.pow` returns a `double`, but the cast turns it into an `int` first, and `int` divided by `int` is an `int`, which prints with no decimal point.",
      "A cast to `int` truncates; it does not round. 7.07 becomes 7, not 8.",
    ],
    answer: 0,
    verify: { out: "7 16" } },

  { id: "q2a-06", skill: "objects", type: "mcq", topic: "1.11",
    stem: "Consider the following statement, which simulates a roll in a board game.",
    code: RAND_A,
    question: "Which of the following best describes the possible values of `roll`?",
    choices: ["Any integer from 2 to 7, inclusive", "Any integer from 2 to 8, inclusive", "Any integer from 3 to 8, inclusive", "Only the value 2"],
    why: [
      "`Math.random()` returns a `double` from 0.0 up to but not including 1.0. Times 6 gives 0.0 up to but not including 6.0, and `(int)` truncates that to 0 through 5. Adding 2 gives 2 through 7: six values, starting at 2.",
      "`Math.random() * 6` never reaches 6.0, so the cast never produces 6. The largest value of `roll` is 5 + 2, which is 7.",
      "`Math.random()` can return 0.0, so the cast can produce 0, and the smallest value of `roll` is 0 + 2, which is 2.",
      "That would be true of `(int) Math.random() * 6 + 2`, where the cast truncates `Math.random()` to 0 before the multiplication. Here the parentheses make the cast apply to the whole product.",
    ],
    answer: 0,
    verify: { cases: [
      { run: RAND_A + "\nSystem.out.println(roll >= 2 && roll <= 7);", out: "true" },
      { run: bounds(6, 2), out: "2\n7" },
      { run: "double r = Math.nextDown(1.0);\nSystem.out.println((int) r * 6 + 2);", out: "2" },
    ] } },
];

// ---------- Quiz 2 Practice B ----------

const q2b = [
  { id: "q2b-01", skill: "arith", type: "mcq", topic: "1.3",
    stem: "A supply room packs arrows into crates of 50 and quivers of 12. Consider the following code segment.",
    code: `int arrows = 158;
int crates = arrows / 50;
arrows %= 50;
int quivers = arrows / 12;
arrows %= 12;
System.out.println(crates + " " + quivers + " " + arrows);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["3 0 8", "3 13 2", "3 1 8", "3.16 0 8"], mono: true,
    why: [
      "`158 / 50` is integer division, 3. `arrows %= 50;` changes `arrows` to the remainder, 8. Then `8 / 12` is 0, because 12 does not fit into 8 even once, and `arrows %= 12;` leaves 8 % 12, which is 8.",
      "This uses 158 for the quivers, as if `arrows %= 50;` left `arrows` unchanged. A compound assignment stores its result, so `arrows` is 8 by the time the quivers are counted.",
      "Integer division does not round. `8 / 12` is less than 1, and Java keeps only the whole part, 0.",
      "`crates` is an `int`, and `158 / 50` has two `int` operands, so the result is the whole number 3.",
    ],
    answer: 0,
    verify: { out: "3 0 8" } },

  { id: "q2b-02", skill: "arith", type: "mcq", topic: "1.5",
    stem: "Consider the following code segment.",
    code: `double half = (int) 7.8 / 2;
System.out.println(half);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["3.0", "3.9", "3.5", "3"], mono: true,
    why: [
      "A cast applies only to the value right after it, so `(int) 7.8` runs first and truncates to 7. Then `7 / 2` has two `int` operands, so it is integer division, 3. That 3 is widened into the `double` and prints as `3.0`.",
      "This ignores the cast. `(int)` turns 7.8 into 7 before the division, so the result can no longer be 3.9.",
      "This treats the division as `double` division. After the cast both operands are `int`, so the .5 is thrown away.",
      "The value is 3, but it is stored in a `double`, so it prints with a decimal point.",
    ],
    answer: 0,
    verify: { out: "3.0" } },

  { id: "q2b-03", skill: "arith", type: "mcq", topic: "1.5",
    stem: "Consider the following code segment.",
    code: `int total = 11;
int parts = 4;
System.out.println((int) (total / parts + 0.5) + " " + (int) ((double) total / parts + 0.5));`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["2 3", "3 3", "2 2", "2.5 3"], mono: true,
    why: [
      "In the first expression, `total / parts` is integer division, 2, so the value is `(int) 2.5`, which truncates to 2. In the second, `(double) total` makes the division `double` division, 2.75, and `(int) 3.25` is 3.",
      "Adding 0.5 rounds correctly only if the quotient still has its decimal part. In the first expression, integer division has already turned 2.75 into 2.",
      "In the second expression, the cast on `total` happens before the division, so the quotient keeps its .75 and the 0.5 pushes it past 3.",
      "The outer `(int)` cast in the first expression truncates 2.5 to 2. A value cast to `int` never prints with a decimal point.",
    ],
    answer: 0,
    verify: { out: "2 3" } },

  { id: "q2b-04", skill: "arith", type: "mcq", topic: "1.5",
    stem: "Consider the following code segment.",
    code: `int small = Integer.MIN_VALUE;
int half = small / 2 - 1;
System.out.println(half * 2);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["2147483646", "-2147483650", "-2147483648", "An ArithmeticException is thrown."], mono: true,
    why: [
      "`Integer.MIN_VALUE` is -2147483648, so `small / 2` is -1073741824 and `half` is -1073741825. Doubling that gives -2147483650, two below the smallest `int`. The value wraps around to the top of the range and lands on 2147483646.",
      "This is the true product, but it does not fit in an `int`. An `int` cannot hold anything below -2147483648, so the result wraps around to the positive end.",
      "An `int` that goes past `Integer.MIN_VALUE` does not stop there. It wraps around to the large positive values.",
      "Overflow is not an error in Java. No exception is thrown; the value silently wraps around.",
    ],
    answer: 0,
    verify: { out: "2147483646" } },

  { id: "q2b-05", skill: "objects", type: "mcq", topic: "1.11",
    stem: "Consider the following code segment.",
    code: `double d = Math.sqrt(30);
int r = (int) d;
System.out.println(r + " " + (int) Math.pow(r, 3) / 10);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["5 12", "5 12.5", "5 12.0", "6 21"], mono: true,
    why: [
      "`Math.sqrt(30)` is about 5.48, and `(int)` truncates it to 5. `Math.pow(5, 3)` returns the `double` 125.0, and the cast applies to that call, giving the `int` 125. Then `125 / 10` is integer division, 12.",
      "This is `125.0 / 10`, with no cast. The `(int)` turns the result of `Math.pow` into an `int` before the division, so both operands are `int`.",
      "`Math.pow` returns a `double`, but the cast turns it into an `int` first, and `int` divided by `int` is an `int`, which prints with no decimal point.",
      "A cast to `int` truncates; it does not round. 5.48 becomes 5, not 6.",
    ],
    answer: 0,
    verify: { out: "5 12" } },

  { id: "q2b-06", skill: "objects", type: "mcq", topic: "1.11",
    stem: "Consider the following statement, which picks a random amount of gold for a treasure chest.",
    code: RAND_B,
    question: "Which of the following best describes the possible values of `roll`?",
    choices: ["Any integer from 5 to 8, inclusive", "Any integer from 5 to 9, inclusive", "Any integer from 6 to 9, inclusive", "Only the value 5"],
    why: [
      "`Math.random()` returns a `double` from 0.0 up to but not including 1.0. Times 4 gives 0.0 up to but not including 4.0, and `(int)` truncates that to 0 through 3. Adding 5 gives 5 through 8: four values, starting at 5.",
      "`Math.random() * 4` never reaches 4.0, so the cast never produces 4. The largest value of `roll` is 3 + 5, which is 8.",
      "`Math.random()` can return 0.0, so the cast can produce 0, and the smallest value of `roll` is 0 + 5, which is 5.",
      "That would be true of `(int) Math.random() * 4 + 5`, where the cast truncates `Math.random()` to 0 before the multiplication. Here the parentheses make the cast apply to the whole product.",
    ],
    answer: 0,
    verify: { cases: [
      { run: RAND_B + "\nSystem.out.println(roll >= 5 && roll <= 8);", out: "true" },
      { run: bounds(4, 5), out: "5\n8" },
      { run: "double r = Math.nextDown(1.0);\nSystem.out.println((int) r * 4 + 5);", out: "5" },
    ] } },
];

export default {
  forms: [
    { id: "q1a", name: "Quiz 1 Practice A", group: "Quiz 1: Types, Output, Concatenation", date: "2026-09-14", items: q1a },
    { id: "q1b", name: "Quiz 1 Practice B", group: "Quiz 1: Types, Output, Concatenation", date: "2026-09-14", items: q1b },
    { id: "q2a", name: "Quiz 2 Practice A", group: "Quiz 2: Arithmetic and Casting", date: "2026-09-25", items: q2a },
    { id: "q2b", name: "Quiz 2 Practice B", group: "Quiz 2: Arithmetic and Casting", date: "2026-09-25", items: q2b },
  ],
};

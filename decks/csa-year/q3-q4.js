// AP CSA mock forms: Quiz 3 Practice A and B (if and Boolean logic, as taught by 10/16),
// Quiz 4 Practice A and B (loop tracing, as taught by 10/29).
// Quiz 3 order, as in Q3: 2.3 if then a separate if, 2.5 && before ||, 2.6 De Morgan of &&, 2.6 De Morgan of ||,
// 2.5 short-circuit guard, 2.4 nested if at a boundary. No loops (they start 10/26).
// Quiz 4 order, as in Q4: 2.8, 2.7, 2.7, 2.7, 2.9, 2.8. Every item asks for the output and the number of passes.
// Settings: a weather app, a movie theater, a bookstore, an online store, a pool, a party, a library, shipping,
// a thermostat, a phone playlist, a row of seats, savings, a transit card, a rain barrel, a text message.
// In every mcq the key is written first and answer is 0 (the site shuffles).

// Counts the values of an int (lo to hi) and a boolean where orig and alt disagree. 0 means equivalent on the grid.
const grid = (n, lo, hi, b, orig, alt) => `int bad = 0;
for (int k = 0; k < 2; k++)
{
    boolean ${b} = k == 1;
    for (int ${n} = ${lo}; ${n} <= ${hi}; ${n}++)
    {
        if ((${orig}) != (${alt}))
        {
            bad++;
        }
    }
}
System.out.println(bad);`;

// The same check for two int variables.
const grid2 = (a, alo, ahi, b, blo, bhi, orig, alt) => `int bad = 0;
for (int ${a} = ${alo}; ${a} <= ${ahi}; ${a}++)
{
    for (int ${b} = ${blo}; ${b} <= ${bhi}; ${b}++)
    {
        if ((${orig}) != (${alt}))
        {
            bad++;
        }
    }
}
System.out.println(bad);`;

// ---------- Quiz 3 Practice A ----------

const Q3A05 = (cond) => `int guests = 0;
int slices = 16;
if (${cond})
{
    System.out.println("order more");
}
else
{
    System.out.println("enough");
}`;

const q3a = [
  { id: "q3a-01", skill: "if", type: "mcq", topic: "2.3",
    stem: "A weather app picks what to suggest from the temperature. Consider the following code segment.",
    code: `int temp = 78;
String advice = "";
if (temp > 60)
{
    advice += "light ";
}
else if (temp > 75)
{
    advice += "shorts ";
}
if (temp > 70)
{
    advice += "sunscreen";
}
else
{
    advice += "jacket";
}
System.out.println(advice);`,
    question: "What is printed?",
    choices: ["light sunscreen", "shorts sunscreen", "light shorts sunscreen", "light"], mono: true,
    why: [
      "`temp > 60` is true, so `\"light \"` is added and the `else if` is skipped, even though 78 is also more than 75. The second `if` is a new statement, and 78 is more than 70.",
      "This picks the closest match. In an `if`/`else if` chain the first true condition wins, and `temp > 60` comes first.",
      "This treats the `else if` as its own `if`. Once `temp > 60` is true, the rest of that chain is skipped.",
      "The second `if` starts a new statement, so it is tested even though the first chain already ran. 78 is more than 70.",
    ],
    answer: 0,
    verify: { out: "light sunscreen" } },

  { id: "q3a-02", skill: "bool", type: "mcq", topic: "2.5",
    stem: "A movie theater takes money off a ticket. Consider the following code segment.",
    code: `int age = 8;
boolean weekday = false;
int price = 14;
if (age < 12 || age >= 65 && weekday)
{
    price -= 5;
}
if ((age < 12 || age >= 65) && weekday)
{
    price -= 3;
}
System.out.println(price);`,
    question: "What is printed?",
    choices: ["9", "14", "6", "11"], mono: true,
    why: [
      "Java does `&&` before `||`, so the first condition is `age < 12 || (age >= 65 && weekday)`, and `age < 12` alone makes it true. In the second, the parentheses put the `||` first (true), and then `&& weekday` makes it false.",
      "This reads the first condition left to right, as if the `||` came first, and then `&& weekday` makes it false. Java does `&&` before `||`, so `age < 12` alone makes the first condition true.",
      "This takes off both amounts. The parentheses in the second condition make the `||` happen first, and then `&& weekday`, which is false, decides it.",
      "Both results are reversed. Work each condition out with `age` equal to 8 and `weekday` false: `&&` before `||` in the first, the parentheses first in the second.",
    ],
    answer: 0,
    verify: { out: "9" } },

  { id: "q3a-03", skill: "bool", type: "mcq", topic: "2.6",
    stem: "An online store charges a shipping fee when the expression below is true.",
    code: "!(price >= 50 && qty < 4)",
    question: "Which of the following is equivalent to the expression for all integer values of `price` and `qty`?",
    choices: ["price < 50 || qty >= 4", "price < 50 && qty >= 4", "price <= 50 || qty > 4", "price < 50 || qty < 4"], mono: true,
    why: [
      "De Morgan's law: the opposite of `p && q` is `!p || !q`. The opposite of `price >= 50` is `price < 50`, and the opposite of `qty < 4` is `qty >= 4`.",
      "Both comparisons are flipped correctly, but the `&&` has to become `||` as well. Try `price` equal to 10 and `qty` equal to 1: the original is true and this is false.",
      "The opposite of `>=` is `<`, and the opposite of `<` is `>=`. With `price` equal to 50 and `qty` equal to 2, the original is false and this is true.",
      "The `!` reaches both parts, so `qty < 4` has to become `qty >= 4` too. With `price` equal to 60 and `qty` equal to 5, the original is true and this is false.",
    ],
    answer: 0,
    verify: { cases: [
      { run: grid2("price", 40, 60, "qty", 0, 8, "!(price >= 50 && qty < 4)", "price < 50 || qty >= 4"), out: "0" },
      { run: grid2("price", 40, 60, "qty", 0, 8, "!(price >= 50 && qty < 4)", "price < 50 && qty >= 4"), out: "95" },
      { run: grid2("price", 40, 60, "qty", 0, 8, "!(price >= 50 && qty < 4)", "price <= 50 || qty > 4"), out: "14" },
      { run: grid2("price", 40, 60, "qty", 0, 8, "!(price >= 50 && qty < 4)", "price < 50 || qty < 4"), out: "99" },
    ] } },

  { id: "q3a-04", skill: "bool", type: "mcq", topic: "2.6",
    stem: "A pool closes when the expression below is true, where `guards` is an int and `thunder` is a boolean.",
    code: "guards < 2 || thunder",
    question: "Which of the following is true exactly when the pool is open, for all values of `guards` and `thunder`?",
    choices: ["guards >= 2 && !thunder", "guards >= 2 || !thunder", "guards > 2 && !thunder", "guards >= 2 && thunder"], mono: true,
    why: [
      "The pool is open when the expression is false. De Morgan's law: the opposite of `p || q` is `!p && !q`, and the opposite of `guards < 2` is `guards >= 2`.",
      "Each part is flipped correctly, but the `||` has to become `&&`. With 5 guards and thunder, this is true, but the pool is closed.",
      "The opposite of `<` is `>=`. With exactly 2 guards and no thunder the pool is open, and this is false.",
      "The `!` has to reach `thunder` too. This is true only during thunder, which is exactly when the pool is closed.",
    ],
    answer: 0,
    verify: { cases: [
      { run: grid("guards", -2, 6, "thunder", "!(guards < 2 || thunder)", "guards >= 2 && !thunder"), out: "0" },
      { run: grid("guards", -2, 6, "thunder", "!(guards < 2 || thunder)", "guards >= 2 || !thunder"), out: "9" },
      { run: grid("guards", -2, 6, "thunder", "!(guards < 2 || thunder)", "guards > 2 && !thunder"), out: "1" },
      { run: grid("guards", -2, 6, "thunder", "!(guards < 2 || thunder)", "guards >= 2 && thunder"), out: "10" },
    ] } },

  { id: "q3a-05", skill: "bool", type: "mcq", topic: "2.5",
    stem: "A party plans for at least 3 slices of pizza for each guest. Consider the following code segment.",
    code: Q3A05("guests == 0 || slices / guests < 3"),
    question: "What is the result of executing the code segment?",
    choices: [
      "order more",
      "Nothing is printed. An ArithmeticException is thrown.",
      "enough",
      "The code segment does not compile.",
    ],
    why: [
      "`guests == 0` is true, so `||` stops there and never does the division. The condition is true and the first branch runs.",
      "That is what happens if the two tests are swapped: `slices / guests` would divide by 0 first. In this order, a true left side means the right side is never evaluated.",
      "The left side is true, and one true side makes an `||` true, so the `else` does not run.",
      "Dividing by an int variable compiles, even one that holds 0. Dividing by 0 can only fail when the code runs, and short-circuit evaluation keeps the division from running.",
    ],
    answer: 0,
    verify: { cases: [
      { run: Q3A05("guests == 0 || slices / guests < 3"), out: "order more" },
      { run: Q3A05("slices / guests < 3 || guests == 0"), throws: "ArithmeticException" },
    ] } },

  { id: "q3a-06", skill: "if", type: "mcq", topic: "2.4",
    stem: "A library charges a fee for a book that is returned `days` days late. Consider the following code segment.",
    code: `int days = 14;
int fee = 0;
if (days > 7)
{
    if (days > 14)
    {
        fee = 10;
    }
    else
    {
        fee = 5;
    }
    if (days % 7 == 0)
    {
        fee += 1;
    }
}
else
{
    fee = 0;
}
System.out.println(fee);`,
    question: "What is printed?",
    choices: ["6", "11", "5", "0"], mono: true,
    why: [
      "14 is more than 7, so the outer `if` runs. 14 is not more than 14, so the inner `else` sets `fee` to 5. The next `if` is a separate statement in the same block, and 14 is a multiple of 7, so 1 is added.",
      "This treats 14 as more than 14. They are equal, so `days > 14` is false.",
      "The `if (days % 7 == 0)` is not part of the inner `if`/`else`. It is its own statement and is tested after it: `14 % 7` is 0.",
      "The outer `else` runs only when `days` is 7 or less, and 14 is more than 7.",
    ],
    answer: 0,
    verify: { out: "6" } },
];

// ---------- Quiz 3 Practice B ----------

const Q3B05 = (cond) => `String code = "AB";
if (${cond})
{
    System.out.println("express");
}
else
{
    System.out.println("standard");
}`;

const q3b = [
  { id: "q3b-01", skill: "if", type: "mcq", topic: "2.3",
    stem: "A phone shows a message about its battery. Consider the following code segment.",
    code: `int battery = 15;
if (battery < 50)
{
    System.out.print("low ");
}
else if (battery < 20)
{
    System.out.print("very low ");
}
else
{
    System.out.print("fine ");
}
if (battery < 10)
{
    System.out.println("charge now");
}
else
{
    System.out.println("charge soon");
}`,
    question: "What is printed?",
    choices: ["low charge soon", "very low charge soon", "low very low charge soon", "low"], mono: true,
    why: [
      "`battery < 50` is true, so `low ` is printed and the rest of that chain is skipped, even though 15 is also less than 20. The second `if` is a new statement: 15 is not less than 10, so its `else` runs.",
      "This picks the closest match. In an `if`/`else if` chain the first true condition wins, and `battery < 50` comes first.",
      "This treats the `else if` as its own `if`. Once `battery < 50` is true, the rest of that chain is skipped.",
      "The second `if` starts a new statement, so it is tested even though the first chain already printed. One of its two branches always runs.",
    ],
    answer: 0,
    verify: { out: "low charge soon" } },

  { id: "q3b-02", skill: "bool", type: "mcq", topic: "2.5",
    stem: "A bookstore gives reward points for a book. Consider the following code segment.",
    code: `int pages = 420;
boolean autographed = false;
int points = 0;
if (pages > 400 || pages > 100 && autographed)
{
    points += 10;
}
if ((pages > 400 || pages > 100) && autographed)
{
    points += 4;
}
System.out.println(points);`,
    question: "What is printed?",
    choices: ["10", "0", "14", "4"], mono: true,
    why: [
      "Java does `&&` before `||`, so the first condition is `pages > 400 || (pages > 100 && autographed)`, and `pages > 400` alone makes it true. In the second, the parentheses put the `||` first (true), and then `&& autographed` makes it false.",
      "This reads the first condition left to right, as if the `||` came first, and then `&& autographed` makes it false. Java does `&&` before `||`, so `pages > 400` alone makes the first condition true.",
      "This adds both amounts. The parentheses in the second condition make the `||` happen first, and then `&& autographed`, which is false, decides it.",
      "Both results are reversed. Work each condition out with `pages` equal to 420 and `autographed` false: `&&` before `||` in the first, the parentheses first in the second.",
    ],
    answer: 0,
    verify: { out: "10" } },

  { id: "q3b-03", skill: "bool", type: "mcq", topic: "2.6",
    stem: "A summer job site flags an application when the expression below is true.",
    code: "!(age >= 16 && hours < 20)",
    question: "Which of the following is equivalent to the expression for all integer values of `age` and `hours`?",
    choices: ["age < 16 || hours >= 20", "age < 16 && hours >= 20", "age <= 16 || hours > 20", "age >= 16 || hours >= 20"], mono: true,
    why: [
      "De Morgan's law: the opposite of `p && q` is `!p || !q`. The opposite of `age >= 16` is `age < 16`, and the opposite of `hours < 20` is `hours >= 20`.",
      "Both comparisons are flipped correctly, but the `&&` has to become `||` as well. Try `age` equal to 12 and `hours` equal to 5: the original is true and this is false.",
      "The opposite of `>=` is `<`, and the opposite of `<` is `>=`. With `age` equal to 16 and `hours` equal to 10, the original is false and this is true.",
      "The `!` reaches both parts, so `age >= 16` has to become `age < 16` too. With `age` equal to 20 and `hours` equal to 5, the original is false and this is true.",
    ],
    answer: 0,
    verify: { cases: [
      { run: grid2("age", 10, 22, "hours", 10, 30, "!(age >= 16 && hours < 20)", "age < 16 || hours >= 20"), out: "0" },
      { run: grid2("age", 10, 22, "hours", 10, 30, "!(age >= 16 && hours < 20)", "age < 16 && hours >= 20"), out: "137" },
      { run: grid2("age", 10, 22, "hours", 10, 30, "!(age >= 16 && hours < 20)", "age <= 16 || hours > 20"), out: "16" },
      { run: grid2("age", 10, 22, "hours", 10, 30, "!(age >= 16 && hours < 20)", "age >= 16 || hours >= 20"), out: "130" },
    ] } },

  { id: "q3b-04", skill: "bool", type: "mcq", topic: "2.6",
    stem: "A bike rental closes when the expression below is true, where `rain` is a boolean and `bikes` is an int.",
    code: "rain || bikes <= 3",
    question: "Which of the following is true exactly when the rental is open, for all values of `rain` and `bikes`?",
    choices: ["!rain && bikes > 3", "!rain || bikes > 3", "!rain && bikes >= 3", "rain && bikes > 3"], mono: true,
    why: [
      "The rental is open when the expression is false. De Morgan's law: the opposite of `p || q` is `!p && !q`, and the opposite of `bikes <= 3` is `bikes > 3`.",
      "Each part is flipped correctly, but the `||` has to become `&&`. With rain and 10 bikes, this is true, but the rental is closed.",
      "The opposite of `<=` is `>`. With exactly 3 bikes and no rain the rental is closed, and this is true.",
      "The `!` has to reach `rain` too. This is true only when it rains, which is exactly when the rental is closed.",
    ],
    answer: 0,
    verify: { cases: [
      { run: grid("bikes", 0, 8, "rain", "!(rain || bikes <= 3)", "!rain && bikes > 3"), out: "0" },
      { run: grid("bikes", 0, 8, "rain", "!(rain || bikes <= 3)", "!rain || bikes > 3"), out: "9" },
      { run: grid("bikes", 0, 8, "rain", "!(rain || bikes <= 3)", "!rain && bikes >= 3"), out: "1" },
      { run: grid("bikes", 0, 8, "rain", "!(rain || bikes <= 3)", "rain && bikes > 3"), out: "10" },
    ] } },

  { id: "q3b-05", skill: "bool", type: "mcq", topic: "2.5",
    stem: "A shipping label code has `X` as its third letter when the package goes express. Consider the following code segment.",
    code: Q3B05("code.length() >= 3 && code.substring(2, 3).equals(\"X\")"),
    question: "What is the result of executing the code segment?",
    choices: [
      "standard",
      "Nothing is printed. A StringIndexOutOfBoundsException is thrown.",
      "express",
      "The code segment does not compile.",
    ],
    why: [
      "`code.length()` is 2, so `code.length() >= 3` is false. `&&` stops there and never calls `substring`, so the condition is false and the `else` runs.",
      "That is what happens if the two tests are swapped: `code.substring(2, 3)` would ask for index 2 of a 2-letter String first. In this order, the length check guards the call.",
      "The first test is false, and one false side makes an `&&` false, so the first branch cannot run.",
      "Calling `equals` inside a condition compiles, because it returns a boolean. A bad index can only fail when the code runs, and short-circuit evaluation keeps `substring` from running.",
    ],
    answer: 0,
    verify: { cases: [
      { run: Q3B05("code.length() >= 3 && code.substring(2, 3).equals(\"X\")"), out: "standard" },
      { run: Q3B05("code.substring(2, 3).equals(\"X\") && code.length() >= 3"), throws: "StringIndexOutOfBoundsException" },
    ] } },

  { id: "q3b-06", skill: "if", type: "mcq", topic: "2.4",
    stem: "A shipping company sets the cost of a package from its weight in pounds. Consider the following code segment.",
    code: `int weight = 20;
int cost = 0;
if (weight <= 5)
{
    cost = 4;
}
else
{
    if (weight > 10)
    {
        cost = 9;
        if (weight > 20)
        {
            cost = 15;
        }
    }
    else
    {
        cost = 6;
    }
}
System.out.println(cost);`,
    question: "What is printed?",
    choices: ["9", "15", "6", "4"], mono: true,
    why: [
      "20 is more than 5, so the outer `else` runs. 20 is more than 10, so `cost` becomes 9. The innermost `if` asks for more than 20, and 20 is not more than 20.",
      "This treats 20 as more than 20. They are equal, so `weight > 20` is false and `cost` stays 9.",
      "The inner `else` runs only when `weight` is 10 or less, and 20 is more than 10.",
      "That branch runs only when `weight` is 5 or less, and 20 is more than 5.",
    ],
    answer: 0,
    verify: { out: "9" } },
];

// ---------- Quiz 4 Practice A ----------

const q4a = [
  { id: "q4a-01", skill: "for", type: "mcq", topic: "2.8",
    stem: "Consider the following code segment.",
    code: `int saved = 0;
for (int week = 3; week < 15; week += 3)
{
    saved += week;
}
System.out.println(saved);`,
    question: "What is printed, and how many times does the body of the loop run?",
    choices: [
      "30, and the body runs 4 times",
      "45, and the body runs 5 times",
      "102, and the body runs 12 times",
      "30, and the body runs 5 times",
    ],
    why: [
      "`week` takes the values 3, 6, 9, and 12, and each is added once. The next value, 15, fails `week < 15`, so it is never added.",
      "This adds 15 as well. The test is `<`, so the loop stops when `week` reaches 15.",
      "This adds every whole number from 3 to 14. `week += 3` moves `week` up by 3 each pass.",
      "The total is right, but the last check of the condition, with `week` equal to 15, is not a pass of the body. The body runs once for each of 3, 6, 9, and 12.",
    ],
    answer: 0,
    verify: { out: "30" } },

  { id: "q4a-02", skill: "while", type: "mcq", topic: "2.7",
    stem: "Consider the following code segment.",
    code: `int n = 4072;
int digits = 0;
while (n > 0)
{
    n = n / 10;
    digits++;
}
System.out.println(n + " " + digits);`,
    question: "What is printed, and how many times does the body of the loop run?",
    choices: [
      "0 4, and the body runs 4 times",
      "4 3, and the body runs 3 times",
      "Nothing is printed, because the loop never stops.",
      "0 4, and the body runs 5 times",
    ],
    why: [
      "`n` goes 4072, 407, 40, 4, 0. Integer division drops the last digit each pass, and the loop stops as soon as `n` is 0.",
      "This stops one pass early. 4 is more than 0, so the loop divides once more, and `4 / 10` is 0.",
      "With decimals, dividing by 10 would never reach 0, but `n` is an int. `4 / 10` is 0, and then `n > 0` is false.",
      "The output is right. The test is checked one more time than the body runs: the last check, with `n` equal to 0, is false.",
    ],
    answer: 0,
    verify: { out: "0 4" } },

  { id: "q4a-03", skill: "while", type: "mcq", topic: "2.7",
    stem: "A thermostat program is meant to warm a room to `target` degrees. Consider the following code segment.",
    code: `int temp = 68;
int target = 72;
int minutes = 0;
while (temp > target)
{
    temp++;
    minutes += 5;
}
System.out.println(temp + " " + minutes);`,
    question: "What is printed, and how many times does the body of the loop run?",
    choices: [
      "68 0, and the body never runs",
      "72 20, and the body runs 4 times",
      "69 5, and the body runs once",
      "Nothing is printed, because the loop never stops.",
    ],
    why: [
      "`temp > target` is `68 > 72`, which is false before the first pass, so the body never runs and both variables keep their values.",
      "This is what the loop would do with the test `temp < target`. The code tests `temp > target`, which is false at the start.",
      "A while loop tests before every pass, including the first. The test is false at the start, so there is no first pass.",
      "`temp++` moves `temp` away from `target`, so the loop would never stop once it started. It never starts: `temp > target` is false the first time it is tested.",
    ],
    answer: 0,
    verify: { out: "68 0" } },

  { id: "q4a-04", skill: "while", type: "mcq", topic: "2.7",
    stem: "A phone plays songs until its battery runs out or 8 songs have played. Each song uses 3 percent of the battery. Consider the following code segment.",
    code: `int battery = 20;
int songs = 0;
while (battery > 0 && songs < 8)
{
    songs++;
    battery -= 3;
    if (battery < 0)
    {
        battery = 0;
    }
}
System.out.println(battery + " " + songs);`,
    question: "What is printed, and how many times does the body of the loop run?",
    choices: [
      "0 7, and the body runs 7 times",
      "-1 7, and the body runs 7 times",
      "0 8, and the body runs 8 times",
      "0 7, and the body runs 8 times",
    ],
    why: [
      "`battery` goes 17, 14, 11, 8, 5, 2, and then -1, which the `if` changes to 0. `songs` is 7 at that point, and `battery > 0` is false, so the loop ends before an eighth song.",
      "This skips the `if`. After the seventh song `battery` is -1, and the `if` sets it to 0.",
      "This keeps going until both parts are false, which is how `||` works. With `&&`, one false part ends the loop, and `battery > 0` is false once `battery` is 0.",
      "The output is right, but the loop ends as soon as `battery` is 0. The condition is tested once more and is false, and that test is not a pass of the body.",
    ],
    answer: 0,
    verify: { out: "0 7" } },

  { id: "q4a-05", skill: "algo", type: "mcq", topic: "2.9",
    stem: "In a row of seats, `X` is a taken seat and `O` is an open one. Consider the following code segment.",
    code: `String seats = "XXXOXOO";
int i = 0;
boolean found = false;
while (i < seats.length() && !found)
{
    if (seats.substring(i, i + 1).equals("O"))
    {
        found = true;
    }
    else
    {
        i++;
    }
}
System.out.println(found + " " + i);`,
    question: "What is printed, and how many times does the body of the loop run?",
    choices: [
      "true 3, and the body runs 4 times",
      "true 4, and the body runs 4 times",
      "true 6, and the body runs 7 times",
      "true 3, and the body runs 3 times",
    ],
    why: [
      "The seats at indexes 0, 1, and 2 are taken, so the `else` moves `i` along 3 times. On the fourth pass the seat at index 3 is open: `found` becomes true, `i` stays 3, and `!found` ends the loop.",
      "`i++` is in the `else`, so it does not run on the pass that finds the open seat. `i` stays at the index of that seat.",
      "Index 6 is the last open seat. The `!found` in the condition stops the loop at the first one.",
      "`i` is 3, but the body also runs on the pass that finds the open seat: once for each index from 0 to 3.",
    ],
    answer: 0,
    verify: { out: "true 3" } },

  { id: "q4a-06", skill: "for", type: "mcq", topic: "2.8",
    stem: "Consider the following code segment.",
    code: `String label = "";
for (int i = 4; i >= 1; i--)
{
    label = i + label;
}
System.out.println(label);`,
    question: "What is printed, and how many times does the body of the loop run?",
    choices: [
      "1234, and the body runs 4 times",
      "4321, and the body runs 4 times",
      "10, and the body runs 4 times",
      "234, and the body runs 3 times",
    ],
    why: [
      "`i` takes the values 4, 3, 2, and 1, and each one goes in front of `label`. The last one joined, 1, ends up first.",
      "This adds each number to the end. `i + label` puts `i` in front of what is already there.",
      "`label` is a String, so `i + label` joins `i` on as text, even while `label` is empty. The numbers are never added together.",
      "This stops before 1. The test is `>=`, so the loop still runs when `i` is 1.",
    ],
    answer: 0,
    verify: { out: "1234" } },
];

// ---------- Quiz 4 Practice B ----------

const q4b = [
  { id: "q4b-01", skill: "for", type: "mcq", topic: "2.8",
    stem: "Consider the following code segment.",
    code: `int total = 0;
for (int i = 1; i <= 40; i *= 2)
{
    total += i;
}
System.out.println(total);`,
    question: "What is printed, and how many times does the body of the loop run?",
    choices: [
      "63, and the body runs 6 times",
      "127, and the body runs 7 times",
      "820, and the body runs 40 times",
      "63, and the body runs 7 times",
    ],
    why: [
      "`i` takes the values 1, 2, 4, 8, 16, and 32, and each is added once. The next value, 64, fails `i <= 40`.",
      "This also adds 64. 64 is more than 40, so the loop stops before adding it.",
      "This adds every whole number from 1 to 40. `i *= 2` doubles `i` each pass.",
      "The total is right, but the last check of the condition, with `i` equal to 64, is not a pass of the body. The body runs once for each of the six values.",
    ],
    answer: 0,
    verify: { out: "63" } },

  { id: "q4b-02", skill: "while", type: "mcq", topic: "2.7",
    stem: "Consider the following code segment.",
    code: `int n = 50;
int total = 0;
while (n >= 3)
{
    n = n / 3;
    total += n;
}
System.out.println(total);`,
    question: "What is printed, and how many times does the body of the loop run?",
    choices: [
      "22, and the body runs 3 times",
      "22, and the body runs 4 times",
      "21, and the body runs 2 times",
      "71, and the body runs 3 times",
    ],
    why: [
      "`n` goes 50, 16, 5, 1, and each new value is added: 16 + 5 + 1. Integer division throws the remainder away, and the loop stops once `n` is 1, which is less than 3.",
      "The output is right. The test is checked one more time than the body runs: the last check, with `n` equal to 1, is false.",
      "This stops one pass early. 5 is at least 3, so the loop divides once more and adds 1.",
      "This adds `n` before dividing it. The body divides first, so 50 itself is never added.",
    ],
    answer: 0,
    verify: { out: "22" } },

  { id: "q4b-03", skill: "while", type: "mcq", topic: "2.7",
    stem: "A transit card pays for rides while it has enough money left. Consider the following code segment.",
    code: `int balance = 7;
int cost = 9;
int rides = 0;
while (balance >= cost)
{
    balance -= cost;
    rides++;
}
System.out.println(balance + " " + rides);`,
    question: "What is printed, and how many times does the body of the loop run?",
    choices: [
      "7 0, and the body never runs",
      "-2 1, and the body runs once",
      "7 0, and the body runs once",
      "Nothing is printed, because the loop never stops.",
    ],
    why: [
      "`balance >= cost` is `7 >= 9`, which is false before the first pass, so the body never runs and both variables keep their values.",
      "A while loop tests before every pass, including the first. 7 is less than 9, so the test is false at the start.",
      "The output is right, but checking the condition is not a pass of the body. The only check is false, so the body never runs.",
      "The loop never starts: `balance >= cost` is false the first time it is tested.",
    ],
    answer: 0,
    verify: { out: "7 0" } },

  { id: "q4b-04", skill: "while", type: "mcq", topic: "2.7",
    stem: "A rain barrel loses 4 gallons of water a day, and on every third day rain adds 2 gallons back. Consider the following code segment.",
    code: `int water = 25;
int day = 0;
while (water >= 4 && day < 10)
{
    day++;
    water -= 4;
    if (day % 3 == 0)
    {
        water += 2;
    }
}
System.out.println(water + " " + day);`,
    question: "What is printed, and how many times does the body of the loop run?",
    choices: [
      "1 7, and the body runs 7 times",
      "1 6, and the body runs 6 times",
      "-9 10, and the body runs 10 times",
      "1 7, and the body runs 8 times",
    ],
    why: [
      "`water` goes 21, 17, 15, 11, 7, 5, 1, with 2 added back on days 3 and 6. After day 7 `water` is 1, so `water >= 4` is false and the loop ends, even though `day` is still less than 10.",
      "This leaves out the rain. Days 3 and 6 are multiples of 3, so 2 gallons come back on each, and the barrel lasts one more day.",
      "This keeps going until both parts are false, which is how `||` works. With `&&`, the loop ends as soon as `water >= 4` is false.",
      "The output is right, but the condition is tested once more after day 7 and is false. That test is not a pass of the body.",
    ],
    answer: 0,
    verify: { out: "1 7" } },

  { id: "q4b-05", skill: "algo", type: "mcq", topic: "2.9",
    stem: "Consider the following code segment.",
    code: `String msg = "Lunch at noon";
int pos = 0;
boolean found = false;
while (pos < 5 && !found)
{
    if (msg.substring(pos, pos + 1).equals(" "))
    {
        found = true;
    }
    pos++;
}
System.out.println(found + " " + pos);`,
    question: "What is printed, and how many times does the body of the loop run?",
    choices: [
      "false 5, and the body runs 5 times",
      "true 6, and the body runs 6 times",
      "false 4, and the body runs 4 times",
      "false 5, and the body runs 6 times",
    ],
    why: [
      "The first 5 characters are the letters of `\"Lunch\"`, so none of them is a space. After the fifth pass `pos` is 5, and `pos < 5` ends the loop before index 5, where the space is.",
      "The space is at index 5, but the loop looks only at indexes 0 to 4. `pos < 5` is false before index 5 is checked.",
      "This stops one pass early. `pos` starts at 0, so indexes 0, 1, 2, 3, and 4 make 5 passes, and `pos++` runs on each.",
      "The output is right, but the last check of the condition, with `pos` equal to 5, is false. That test is not a pass of the body.",
    ],
    answer: 0,
    verify: { out: "false 5" } },

  { id: "q4b-06", skill: "for", type: "mcq", topic: "2.8",
    stem: "Consider the following code segment.",
    code: `String s = "";
for (int k = 20; k > 2; k = k / 2)
{
    s = s + k;
}
System.out.println(s);`,
    question: "What is printed, and how many times does the body of the loop run?",
    choices: [
      "20105, and the body runs 3 times",
      "201052, and the body runs 4 times",
      "35, and the body runs 3 times",
      "51020, and the body runs 3 times",
    ],
    why: [
      "`k` takes the values 20, 10, and 5. Then `5 / 2` is 2 with integer division, and `2 > 2` is false. Each value is joined onto the end of `s` as text.",
      "This also runs when `k` is 2. The test is `>`, so 2 itself is left out.",
      "`s` is a String, so `s + k` joins the digits of `k` on as text. The numbers are never added together.",
      "This puts each new number in front. `s + k` adds it to the end.",
    ],
    answer: 0,
    verify: { out: "20105" } },
];

export default {
  forms: [
    { id: "q3a", name: "Quiz 3 Practice A", group: "Quiz 3: if and Boolean Logic", date: "2026-10-16", items: q3a },
    { id: "q3b", name: "Quiz 3 Practice B", group: "Quiz 3: if and Boolean Logic", date: "2026-10-16", items: q3b },
    { id: "q4a", name: "Quiz 4 Practice A", group: "Quiz 4: Loops", date: "2026-10-29", items: q4a },
    { id: "q4b", name: "Quiz 4 Practice B", group: "Quiz 4: Loops", date: "2026-10-29", items: q4b },
  ],
};

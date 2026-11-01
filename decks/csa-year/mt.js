// AP CSA mock forms: Midterm Practice A and Midterm Practice B (Midterm, Mon 12/14).
// Shape of the real Midterm: 30 multiple choice in MT.md's topic order (Units 1 and 2), then two 7-row free responses
// (FRQ 1: a while-loop simulation that calls methods on an object; FRQ 2: a String traversal).
// In every mcq the key is written first and answer is 0 (the site shuffles).
// Settings: a bakery, a theater, a farm, a driving school, a garden store, and the dungeon world in plain variables.

const GROUP = "Midterm";
const DATE = "2026-12-14";

// ---------- classes the object items call (plain, not the crawler's) ----------

const LOCKER = `class Locker
{
    private int coins;

    public Locker(int start)
    {
        coins = start;
    }

    public void add(int n)
    {
        coins = coins + n;
    }

    public int getCoins()
    {
        return coins;
    }
}`;

const TURNSTILE = `class Turnstile
{
    private int count;

    public Turnstile()
    {
        count = 0;
    }

    public void click()
    {
        count++;
    }

    public int getCount()
    {
        return count;
    }
}`;

const PRICING = `class Pricing
{
    public static double total(int items, double price)
    {
        return items * price;
    }
}

class Order
{
    private int items;

    public Order(int n)
    {
        items = n;
    }

    public int getItems()
    {
        return items;
    }
}`;

const THERMOSTAT = `class Thermostat
{
    private int temp;

    public Thermostat(int start)
    {
        temp = start;
    }

    public void raise(int degrees)
    {
        temp = temp + degrees;
    }

    public int getTemp()
    {
        return temp;
    }
}`;

const PIGGY = `class PiggyBank
{
    private int amount;

    public PiggyBank(int start)
    {
        amount = start;
    }

    public void save(int n)
    {
        amount = amount + n;
    }

    public int getAmount()
    {
        return amount;
    }
}`;

const TICKET = `class Ticket
{
    private int row;

    public Ticket(int r)
    {
        row = r;
    }

    public int getRow()
    {
        return row;
    }
}`;

const SHIPPING = `class Shipping
{
    public static int cost(double pounds, int zone)
    {
        return (int) (pounds * 4) + zone;
    }
}

class Parcel
{
    private double weight;

    public Parcel(double w)
    {
        weight = w;
    }

    public double getWeight()
    {
        return weight;
    }
}`;

const ROBOT = `class Robot
{
    private int x;
    private String name;

    public Robot(String n)
    {
        name = n;
        x = 0;
    }

    public void move(int steps)
    {
        x = x + steps;
    }

    public int getX()
    {
        return x;
    }

    public String getName()
    {
        return name;
    }
}`;

const DRONE = `class Drone
{
    private int charge;

    public Drone(int startCharge)
    {
        charge = startCharge;
    }

    public int getCharge()
    {
        return charge;
    }

    public boolean canFly()
    {
        return charge > 0;
    }

    public void fly(int minutes)
    {
        charge = charge - minutes;
        if (charge < 0)
        {
            charge = 0;
        }
    }

    public void recharge(int amount)
    {
        charge = charge + amount;
        if (charge > 100)
        {
            charge = 100;
        }
    }
}

class Trip
{
    public static int minutes(int distance, int load)
    {
        return distance * 3 + load * 2;
    }
}`;

const ACCOUNT = `class Account
{
    private int balance;

    public Account(int start)
    {
        balance = start;
    }

    public int getBalance()
    {
        return balance;
    }

    public void deposit(int amount)
    {
        balance = balance + amount;
    }

    public boolean withdraw(int amount)
    {
        if (balance >= amount)
        {
            balance = balance - amount;
            return true;
        }
        return false;
    }
}`;

// ---------- Midterm Practice A ----------

const A28 = (start, test, op) => `int p = ${start};
for (int k = 1; ${test}; k++)
{
    p ${op} k;
}
System.out.print(p);`;

const A29 = (test, printFirst) => printFirst
  ? `int k = 10;
while (${test})
{
    System.out.print(k + " ");
    k -= 3;
}`
  : `int k = 10;
while (${test})
{
    k -= 3;
    System.out.print(k + " ");
}`;

const A30 = (start, test, cmp, digit) => `int code = 2795;
int smallest = ${start};
while (${test})
{
    int d = ${digit};
    if (${cmp})
    {
        smallest = d;
    }
    code /= 10;
}
System.out.println(smallest);`;

const A30_KEY = A30("code % 10", "code > 0", "d < smallest", "code % 10");
const A30_B = A30("code % 10", "code > 0", "d > smallest", "code % 10");
const A30_C = A30("code % 10", "code > 10", "d < smallest", "code % 10");
const A30_D = A30("code % 10", "code > 0", "d < smallest", "code / 10");

const FRQ_A1 = `int delivered = 0;
while (packages > 0 && drone.canFly())
{
    drone.fly(Trip.minutes(4, packages));
    if (drone.canFly())
    {
        packages--;
        delivered++;
        if (drone.getCharge() < 30 && spares > 0)
        {
            drone.recharge(40);
            spares--;
        }
    }
}
System.out.println("Delivered: " + delivered);
if (packages == 0)
{
    System.out.println("Result: all delivered");
}
else
{
    System.out.println("Result: stranded");
}
System.out.println("Charge: " + drone.getCharge());`;
const frqA1 = (charge, packages, spares, out) => ({ run: `Drone drone = new Drone(${charge});\nint packages = ${packages};\nint spares = ${spares};\n${FRQ_A1}`, out });

const FRQ_A2 = `int depth = 0;
int deepest = 0;
int stray = 0;
for (int i = 0; i < expr.length(); i++)
{
    String c = expr.substring(i, i + 1);
    if (c.equals("("))
    {
        depth++;
        if (depth > deepest)
        {
            deepest = depth;
        }
    }
    else if (c.equals(")"))
    {
        if (depth > 0)
        {
            depth--;
        }
        else
        {
            stray++;
        }
    }
}
System.out.println("Deepest: " + deepest);
System.out.println("Stray: " + stray);
System.out.println("Unclosed: " + depth);`;
const frqA2 = (expr, out) => ({ run: `String expr = "${expr}";\n${FRQ_A2}`, out });

const mta = [
  { id: "mta-01", skill: "arith", type: "mcq", topic: "1.3",
    stem: "A bakery packs cookies into boxes of 12. Consider the following code segment.",
    code: `int cookies = 50;
int perBox = 12;
int boxes = cookies / perBox;
int extra = cookies % perBox;
double share = cookies / (double) 8;
System.out.println(boxes + " " + extra + " " + share);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["4 2 6.25", "4 2 6.0", "2 4 6.25", "5 2 6.25"], mono: true,
    why: [
      "`/` between two ints keeps only the whole number of boxes, 4, and `%` gives the 2 cookies left over. `(double) 8` makes the last division a double division, so it keeps the fraction.",
      "The cast turns 8 into 8.0 before dividing, so `cookies / (double) 8` is done in doubles and keeps the .25.",
      "This swaps the two operators. `/` gives the number of whole boxes and `%` gives what is left over.",
      "Integer division drops the fraction; it never rounds up. `50 / 12` is 4.",
    ],
    answer: 0,
    verify: { out: "4 2 6.25" } },

  { id: "mta-02", skill: "arith", type: "mcq", topic: "1.5",
    stem: "A player scored 48 points in 5 games. Consider the following code segment.",
    code: `int points = 48;
int games = 5;
double a = points / games;
double b = (double) points / games;
int c = (int) (b + 0.5);
System.out.println(a + " " + b + " " + c);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["9.0 9.6 10", "9.6 9.6 10", "9.0 9.0 9", "9 9.6 10"], mono: true,
    why: [
      "In `a` the division happens between two ints, so the fraction is gone before the value is stored in the double. In `b` the cast comes first, so the division keeps 9.6. Adding 0.5 and then casting gives 10.",
      "Storing the result in a double does not bring back the fraction. `points / games` has already been done in int.",
      "`(double) points / games` casts `points` first and then divides, so `b` is 9.6, and `(int) (b + 0.5)` is `(int) 10.1`.",
      "`a` is a double, so it prints with a decimal point.",
    ],
    answer: 0,
    verify: { out: "9.0 9.6 10" } },

  { id: "mta-03", skill: "arith", type: "mcq", topic: "1.6",
    stem: "Consider the following code segment.",
    code: `int stock = 20;
stock -= 6;
stock /= 3;
stock++;
stock *= stock - 2;
System.out.println(stock);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["15", "23", "8", "24"], mono: true,
    why: [
      "Each line uses the current value: `20 - 6` is 14, `14 / 3` is 4 in int division, `stock++` makes 5, and `stock *= stock - 2` multiplies 5 by 3.",
      "`stock *= stock - 2` multiplies by the whole right side, `stock - 2`. It is not `stock * stock - 2`.",
      "`stock++;` on a line of its own still adds 1 before the last line runs.",
      "`/=` with two ints drops the fraction. `14 / 3` is 4, not 5; integer division never rounds up.",
    ],
    answer: 0,
    verify: { out: "15" } },

  { id: "mta-04", skill: "types", type: "mcq", topic: "1.3",
    stem: "Consider the following code segment.",
    code: `int x = 3;
int y = 4;
System.out.println("Sum " + x + y + " " + (x + y) + x * y);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["Sum 34 712", "Sum 7 712", "Sum 34 19", "Sum 7 19"], mono: true,
    why: [
      "`+` goes left to right. The line starts with a String, so x and y are each joined on as text. The parentheses make `x + y` add first, and `*` happens before `+`, so 12 is joined on last.",
      "`x + y` comes after the String `\"Sum \"`, so without parentheses each number is joined on one at a time.",
      "Once a String is on the left, `+` joins text. 7 and 12 are joined side by side, not added.",
      "Both parts are joined, not added: x and y come after a String, and so do 7 and 12.",
    ],
    answer: 0,
    verify: { out: "Sum 34 712" } },

  { id: "mta-05", skill: "objects", type: "mcq", topic: "1.11",
    stem: "Consider the following code segment.",
    code: `int a = -7;
double b = Math.abs(a) + Math.sqrt(a + 16);
double c = Math.pow(b, 2) / 4;
System.out.println(b + " " + (int) c);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["10.0 25", "10 25", "10.0 25.0", "-4.0 4"], mono: true,
    why: [
      "`Math.abs(-7)` is 7 and `Math.sqrt(9)` is 3.0, so b is 10.0. `Math.pow(10.0, 2)` is 100.0, and dividing by 4 gives 25.0, which the cast turns into 25.",
      "`Math.sqrt` returns a double, so b is a double and prints with a decimal point.",
      "The cast `(int) c` turns 25.0 into the int 25, which prints without a decimal point.",
      "`Math.abs` returns the distance from 0. `Math.abs(-7)` is 7, not -7.",
    ],
    answer: 0,
    verify: { out: "10.0 25" } },

  { id: "mta-06", skill: "arith", type: "mcq", topic: "1.5",
    stem: "Consider the following code segment.",
    code: `int big = Integer.MAX_VALUE;
int small = Integer.MIN_VALUE;
System.out.println((big + 1 == small) + " " + (small - 1 > 0));`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["true true", "false false", "true false", "Nothing is printed. An ArithmeticException is thrown."], mono: false,
    why: [
      "An int cannot go past `Integer.MAX_VALUE`. Adding 1 wraps around to `Integer.MIN_VALUE`, and subtracting 1 from `Integer.MIN_VALUE` wraps around to `Integer.MAX_VALUE`, which is positive.",
      "int values do not keep growing or shrinking past the limits. They wrap around, with no error.",
      "Wrapping happens at both ends. `small - 1` wraps up to the largest int.",
      "Integer overflow throws no exception in Java. The value wraps around, silently.",
    ],
    answer: 0,
    verify: { out: "true true" } },

  { id: "mta-07", skill: "objects", type: "mcq", topic: "1.15",
    stem: "Consider the following code segment.",
    code: `String file = "trail_map.final.png";
int dot = file.indexOf(".");
String name = file.substring(0, dot);
String rest = file.substring(dot + 1);
System.out.println(name + " " + rest.indexOf(".") + " " + rest.length());`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["trail_map 5 9", "trail_map.final -1 3", "trail_map 0 10", "trail_map. 5 9"], mono: true,
    why: [
      "`indexOf` finds the FIRST dot, at index 9. `substring(0, dot)` stops just before it, and `substring(dot + 1)` is everything after it: `\"final.png\"`, whose dot is at index 5.",
      "`indexOf` returns the index of the first match, not the last.",
      "`substring(dot + 1)` starts just after the dot, so the dot is not part of `rest`.",
      "The second index of `substring` is not included, so `substring(0, dot)` stops just before the dot.",
    ],
    answer: 0,
    verify: { out: "trail_map 5 9" } },

  { id: "mta-08", skill: "objects", type: "mcq", topic: "1.15",
    stem: "Consider the following code segment.",
    code: `String a = "maple";
String b = "map";
String c = "mango";
String first = a;
if (b.compareTo(first) < 0)
{
    first = b;
}
if (c.compareTo(first) < 0)
{
    first = c;
}
System.out.println(first);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["mango", "map", "maple", "Nothing is printed. The code segment does not compile."], mono: false,
    why: [
      "`compareTo` compares letter by letter, and the first difference decides. `\"map\"` comes before `\"maple\"`, and `\"mango\"` and `\"map\"` first differ at n and p, so `\"mango\"` ends up in `first`.",
      "Length does not decide the order. The first letter that differs does, and in `\"mango\"` that letter, n, comes before p.",
      "This keeps the word that comes LAST. `b.compareTo(first) < 0` is true when b comes before `first`.",
      "`compareTo` returns an int, so `b.compareTo(first) < 0` is a boolean and the code compiles.",
    ],
    answer: 0,
    verify: { out: "mango" } },

  { id: "mta-09", skill: "objects", type: "mcq", topic: "1.13",
    stem: "The `Locker` class has a constructor that sets the number of coins inside, the method `void add(int n)`, which adds n coins, and the method `int getCoins()`, which returns the number of coins. Consider the following code segment.",
    classes: LOCKER,
    code: `Locker a = new Locker(5);
Locker b = new Locker(5);
Locker c = a;
c.add(3);
b = c;
b.add(1);
System.out.println(a.getCoins() + " " + b.getCoins() + " " + c.getCoins());`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["9 9 9", "5 9 8", "8 9 8", "8 6 8"], mono: true,
    why: [
      "`c = a` copies the reference, so c and a name the same locker, and `c.add(3)` makes it 8. `b = c` points b at that same locker too, so `b.add(1)` makes it 9, and all three names show it.",
      "That is the result if `c = a` made a copy. Assigning one object variable to another copies the reference, not the object.",
      "`b = c` does not copy the locker. It makes b refer to the same object as c and a.",
      "After `b = c`, b no longer refers to its first locker, so `b.add(1)` changes the shared one.",
    ],
    answer: 0,
    verify: { out: "9 9 9" } },

  { id: "mta-10", skill: "objects", type: "mcq", topic: "1.14",
    stem: "The `Turnstile` class has a constructor that starts its count at 0, the method `void click()`, which adds 1 to the count, and the method `int getCount()`. Consider the following code segment.",
    classes: TURNSTILE,
    code: `Turnstile gate = new Turnstile();
gate.click();
Turnstile other = gate;
gate = null;
other.click();
System.out.println(other.getCount());
System.out.println(gate.getCount());`,
    question: "What is the result of executing the code segment?",
    choices: [
      "2 is printed, and then a NullPointerException is thrown.",
      "2 is printed, and then 0 is printed.",
      "2 is printed, and then 2 is printed.",
      "Nothing is printed. A NullPointerException is thrown.",
    ], mono: false,
    why: [
      "`other = gate` copies the reference, so both names point to the one turnstile, and the two clicks make 2. Setting `gate` to null changes only that variable. Then `gate.getCount()` is a call on null, and it throws.",
      "null is not an empty turnstile. A variable set to null refers to no object at all, so calling a method on it throws a `NullPointerException`.",
      "Setting `gate` to null does not leave the old object behind it. `gate` no longer refers to anything.",
      "`gate = null` changes only `gate`. `other` still refers to the turnstile, so `other.click()` works and the first line prints.",
    ],
    answer: 0,
    verify: { throws: "NullPointerException" } },

  { id: "mta-11", skill: "objects", type: "mcq", topic: "1.9",
    stem: "The `Pricing` class has the method `static double total(int items, double price)`, and `order` is an `Order` object with the method `int getItems()`.",
    classes: PRICING,
    question: "Which of the following statements compiles?",
    choices: [
      "double t = Pricing.total(order.getItems(), 2.5);",
      "double t = Pricing.total(2.5, order.getItems());",
      "int t = Pricing.total(order.getItems(), 2.5);",
      "double t = Pricing.total(order, 2.5);",
    ], mono: true,
    why: [
      "The arguments match the parameters in order: an int, then a double. The method is static, so it is called on the class name, and its double result is stored in a double.",
      "Arguments go in the order of the parameters. The first parameter is an int, and 2.5 cannot be passed to it: `incompatible types: possible lossy conversion from double to int`.",
      "`total` returns a double, and a double cannot be stored in an int without a cast.",
      "The first parameter is an int. `order` is an `Order` object, not a number; call `getItems()` on it.",
    ],
    answer: 0,
    verify: { cases: [
      { run: "Order order = new Order(4);\ndouble t = Pricing.total(order.getItems(), 2.5);\nSystem.out.println(t);", out: "10.0" },
      { run: "Order order = new Order(4);\ndouble t = Pricing.total(2.5, order.getItems());\nSystem.out.println(t);", error: "possible lossy conversion from double to int" },
      { run: "Order order = new Order(4);\nint t = Pricing.total(order.getItems(), 2.5);\nSystem.out.println(t);", error: "possible lossy conversion from double to int" },
      { run: "Order order = new Order(4);\ndouble t = Pricing.total(order, 2.5);\nSystem.out.println(t);", error: "Order cannot be converted to int" },
    ] } },

  { id: "mta-12", skill: "objects", type: "mcq", topic: "1.14",
    stem: "The `Thermostat` class has the methods `void raise(int degrees)`, which raises the temperature, and `int getTemp()`, which returns it. The variable `thermo` refers to a `Thermostat` object.",
    classes: THERMOSTAT,
    question: "Which of the following statements does NOT compile?",
    choices: [
      "System.out.println(thermo.raise(2));",
      "thermo.getTemp();",
      "int t = thermo.getTemp() + 1;",
      "thermo.raise(thermo.getTemp() / 10);",
    ], mono: true,
    why: [
      "`raise` is void: it returns no value, so there is nothing to print. The error is `'void' type not allowed here`.",
      "Calling a method that returns a value and ignoring the value compiles. The value is simply lost.",
      "`getTemp` returns an int, so it can be used in arithmetic.",
      "`thermo.getTemp() / 10` is an int, which matches the int parameter of `raise`, and a void method called as a statement on its own is how it is meant to be used.",
    ],
    answer: 0,
    verify: { cases: [
      { run: "Thermostat thermo = new Thermostat(68);\nSystem.out.println(thermo.raise(2));", error: "'void' type not allowed here" },
      { run: "Thermostat thermo = new Thermostat(68);\nthermo.getTemp();\nSystem.out.println(thermo.getTemp());", out: "68" },
      { run: "Thermostat thermo = new Thermostat(68);\nint t = thermo.getTemp() + 1;\nSystem.out.println(t);", out: "69" },
      { run: "Thermostat thermo = new Thermostat(68);\nthermo.raise(thermo.getTemp() / 10);\nSystem.out.println(thermo.getTemp());", out: "74" },
    ] } },

  { id: "mta-13", skill: "if", type: "mcq", topic: "2.3",
    stem: "A movie theater sets ticket prices by age. Consider the following code segment.",
    code: `int age = 70;
int price = 12;
if (age >= 13)
{
    price = 10;
}
else if (age >= 65)
{
    price = 7;
}
else
{
    price = 8;
}
if (age > 60)
{
    price -= 2;
}
System.out.println(price);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["8", "5", "10", "7"], mono: true,
    why: [
      "The chain stops at the FIRST true test. `age >= 13` is true, so price becomes 10 and the rest of the chain is skipped. The last if is a separate statement, so it is tested too, and it takes off 2.",
      "This picks the `age >= 65` branch. Once `age >= 13` is true, no later branch in the chain is tested.",
      "The last if is not part of the chain. It is tested after the chain, and `age > 60` is true.",
      "Two mistakes: the chain stops at `age >= 13`, and the separate if still runs.",
    ],
    answer: 0,
    verify: { out: "8" } },

  { id: "mta-14", skill: "if", type: "mcq", topic: "2.4",
    stem: "Consider the following code segment.",
    code: `int temp = 58;
boolean raining = false;
String wear = "t-shirt";
if (temp < 65)
{
    if (raining)
    {
        wear = "raincoat";
    }
    else if (temp < 50)
    {
        wear = "coat";
    }
    else
    {
        wear = "sweater";
    }
}
else
{
    if (raining)
    {
        wear = "umbrella";
    }
}
System.out.println(wear);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["sweater", "coat", "t-shirt", "raincoat"], mono: true,
    why: [
      "`temp < 65` is true, so the inner chain runs. `raining` is false and `temp < 50` is false for 58, so the inner else runs.",
      "`temp < 50` is false when temp is 58.",
      "The outer test is true, and the inner chain ends in an else, so one of its branches always changes `wear`.",
      "`raining` is false, so `if (raining)` skips its branch.",
    ],
    answer: 0,
    verify: { out: "sweater" } },

  { id: "mta-15", skill: "bool", type: "mcq", topic: "2.6",
    stem: "A hike goes on as long as `!(miles > 12 || water < 2)` is true, where `miles` and `water` are int variables.",
    question: "Which of the following expressions is equivalent for all values of `miles` and `water`?",
    choices: ["miles <= 12 && water >= 2", "miles <= 12 || water >= 2", "miles < 12 && water > 2", "!(miles > 12) && water < 2"], mono: true,
    why: [
      "De Morgan: `!(p || q)` is `!p && !q`. The opposite of `>` is `<=`, and the opposite of `<` is `>=`.",
      "Each part is negated correctly, but the `||` must become `&&`.",
      "The opposite of `>` is `<=`, not `<`. With miles equal to 12 and water equal to 2, the original is true and this is false.",
      "The `!` has to reach both parts. `water < 2` must become `water >= 2`.",
    ],
    answer: 0,
    verify: { cases: [
      { run: "String s = \"\";\nfor (int miles = 10; miles <= 14; miles++)\n{\n    for (int water = 0; water <= 4; water++)\n    {\n        if ((miles <= 12 && water >= 2) != !(miles > 12 || water < 2))\n        {\n            s += \"x\";\n        }\n    }\n}\nSystem.out.println(\"differences: \" + s.length());", out: "differences: 0" },
      { run: "int miles = 13;\nint water = 3;\nSystem.out.println((miles <= 12 || water >= 2) + \" \" + !(miles > 12 || water < 2));", out: "true false" },
      { run: "int miles = 12;\nint water = 2;\nSystem.out.println((miles < 12 && water > 2) + \" \" + !(miles > 12 || water < 2));", out: "false true" },
      { run: "int miles = 10;\nint water = 3;\nSystem.out.println((!(miles > 12) && water < 2) + \" \" + !(miles > 12 || water < 2));", out: "false true" },
    ] } },

  { id: "mta-16", skill: "bool", type: "mcq", topic: "2.5",
    stem: "A hero splits gold among the monsters in a room. Consider the following code segment.",
    code: `int monsters = 0;
int gold = 17;
boolean a = monsters != 0 && gold / monsters > 3;
boolean b = monsters == 0 || gold / monsters > 3;
boolean c = gold > 10 || gold % 2 == 0 && monsters > 0;
System.out.println(a + " " + b + " " + c);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["false true true", "Nothing is printed. An ArithmeticException is thrown.", "false true false", "false false true"], mono: false,
    why: [
      "In a, `monsters != 0` is false, so `&&` skips the division. In b, `monsters == 0` is true, so `||` skips it. In c, `&&` is done before `||`, so c is `gold > 10 || (gold % 2 == 0 && monsters > 0)`, which is true.",
      "Short-circuit evaluation skips the right side of `&&` once the left side is false, and the right side of `||` once the left side is true. Neither division ever runs.",
      "This groups the `||` first. `&&` is evaluated before `||`, so c is true as soon as `gold > 10` is true.",
      "`||` is true as soon as its left side is true. In b, `monsters == 0` is true.",
    ],
    answer: 0,
    verify: { out: "false true true" } },

  { id: "mta-17", skill: "while", type: "mcq", topic: "2.7",
    stem: "Consider the following code segment.",
    code: `int n = 100;
int steps = 0;
while (n > 10)
{
    n = n / 2 + 1;
    steps++;
}
System.out.println(n + " " + steps);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["8 4", "14 3", "6 4", "8 5"], mono: true,
    why: [
      "n goes 100, 51, 26, 14, 8. The test is checked before each pass, and 8 is not above 10, so the body runs 4 times.",
      "This stops one pass early. 14 is still above 10, so the body runs once more.",
      "Each pass halves n with int division and THEN adds 1. Leaving out the + 1 gives 50, 25, 12, 6.",
      "The last test, with n equal to 8, is not a pass. `steps` counts only the passes that run.",
    ],
    answer: 0,
    verify: { out: "8 4" } },

  { id: "mta-18", skill: "for", type: "mcq", topic: "2.8",
    stem: "Consider the following code segment.",
    code: `for (int k = 40; k > 0; k -= 6)
{
    System.out.println("Tick");
}`,
    question: "How many times is `Tick` printed?",
    choices: ["7", "6", "8", "The loop never ends, because k never equals 0."], mono: false,
    why: [
      "List the values of k: 40, 34, 28, 22, 16, 10, 4. The next value, -2, fails `k > 0`. That is 7 values.",
      "That is `40 / 6` with the remainder dropped. Count the values instead: the first one, 40, counts too.",
      "This lets in one value too many. After 4 comes -2, and `k > 0` is false.",
      "The test is `k > 0`, not `k != 0`. It is false as soon as k drops below 1, even though k skips over 0.",
    ],
    answer: 0,
    verify: { out: "Tick\nTick\nTick\nTick\nTick\nTick\nTick" } },

  { id: "mta-19", skill: "algo", type: "mcq", topic: "2.9",
    stem: "Consider the following code segment.",
    code: `int sum = 0;
int count = 0;
int n = 2;
while (n < 20)
{
    sum += n;
    count++;
    n += 3;
}
double avg1 = sum / count;
double avg2 = (double) sum / count;
System.out.println(avg1 + " " + avg2);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["9.0 9.5", "9.5 9.5", "9.0 9.0", "11.0 11.0"], mono: true,
    why: [
      "The loop adds 2, 5, 8, 11, 14, and 17: a sum of 57 over 6 values. `sum / count` is division between two ints, so `avg1` loses the fraction. The cast in `avg2` comes first, so it keeps it.",
      "Storing the result in a double does not bring back the fraction. `sum / count` has already been done in int.",
      "`(double) sum / count` casts `sum` first and then divides, so the division is done in doubles.",
      "The loop stops when n reaches 20, because the test is `n < 20`. 20 is never added.",
    ],
    answer: 0,
    verify: { out: "9.0 9.5" } },

  { id: "mta-20", skill: "string", type: "mcq", topic: "2.10",
    stem: "Consider the following code segment.",
    code: `String s = "reader";
int lo = 0;
int hi = s.length() - 1;
int checks = 0;
while (lo < hi && s.substring(lo, lo + 1).equals(s.substring(hi, hi + 1)))
{
    lo++;
    hi--;
    checks++;
}
System.out.println(checks + " " + (lo >= hi));`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["2 false", "3 true", "2 true", "Nothing is printed. A StringIndexOutOfBoundsException is thrown."], mono: false,
    why: [
      "The loop compares the letters at lo and hi, moving both inward while they match. The r's match and the e's match, then a and d do not, so the loop stops with lo at 2 and hi at 3.",
      "The loop condition has two parts joined with `&&`. It stops at the first pair that does not match, not only when lo and hi meet.",
      "`lo >= hi` is true only when the two ends meet in the middle. Here the loop stopped early, at a mismatch.",
      "hi starts at `s.length() - 1`, the last index, so `s.substring(hi, hi + 1)` stays inside the String.",
    ],
    answer: 0,
    verify: { out: "2 false" } },

  { id: "mta-21", skill: "string", type: "mcq", topic: "2.10",
    stem: "A dungeon corridor is stored as a String: `#` is a wall and `.` is floor. Consider the following code segment.",
    code: `String path = "..##.###..#";
int edges = 0;
for (int i = 0; i < path.length() - 1; i++)
{
    if (path.substring(i, i + 2).equals("#."))
    {
        edges++;
    }
}
System.out.println(edges);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["2", "3", "6", "Nothing is printed. A StringIndexOutOfBoundsException is thrown."], mono: false,
    why: [
      "`substring(i, i + 2)` is the pair of tiles starting at i. Only two pairs are a wall followed by floor: at indexes 3 and 7.",
      "That is the number of groups of walls. The last wall, at the end of the String, has no floor after it, so it is not counted.",
      "That counts every wall. The code counts only a wall followed directly by floor.",
      "The loop stops at `path.length() - 2`, so `substring(i, i + 2)` never goes past the end.",
    ],
    answer: 0,
    verify: { out: "2" } },

  { id: "mta-22", skill: "nested", type: "mcq", topic: "2.11",
    stem: "Consider the following code segment.",
    code: `int count = 0;
for (int i = 1; i <= 4; i++)
{
    for (int j = i; j < 5; j += i)
    {
        count++;
    }
}
System.out.println(count);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["8", "10", "16", "4"], mono: true,
    why: [
      "For each i, the inner loop starts at i and steps by i while j is below 5: 4 passes for i = 1, then 2, 1, and 1.",
      "That is the count if j went up by 1 each pass. The update is `j += i`, so larger i takes bigger steps.",
      "That counts 4 inner passes for every i. The inner loop starts at i, not at 1, and steps by i.",
      "That counts the outer loop only. `count++` is inside the inner loop.",
    ],
    answer: 0,
    verify: { out: "8" } },

  { id: "mta-23", skill: "nested", type: "mcq", topic: "2.11",
    stem: "Consider the following code segment.",
    code: `for (int r = 1; r <= 3; r++)
{
    for (int c = r; c >= 1; c--)
    {
        System.out.print(c);
    }
    System.out.print(" ");
}`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["1 21 321", "1 12 123", "1 22 333", "321 321 321"], mono: true,
    why: [
      "For each r, the inner loop starts at r and counts down to 1, so row r prints r, then `r - 1`, and so on down to 1. The space comes after each row.",
      "The inner loop counts DOWN: c starts at r and `c--` takes 1 away each pass.",
      "The code prints c, not r. c changes on every pass of the inner loop.",
      "The inner loop starts at r, not at 3, so the first group has only one number.",
    ],
    answer: 0,
    verify: { out: "1 21 321 " } },

  { id: "mta-24", skill: "runtime", type: "mcq", topic: "2.12",
    stem: "Consider the following code segment.",
    code: `int n = 10;
int a = 0;
int b = 0;
for (int i = 0; i < n; i++)
{
    for (int j = 0; j < n; j++)
    {
        a++;
    }
}
for (int i = n; i > 0; i /= 2)
{
    b++;
}
System.out.println(a + " " + b);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["100 4", "100 5", "20 4", "100 10"], mono: true,
    why: [
      "The inner loop runs all 10 of its passes for each of the 10 outer passes: 100 in all. The second loop halves i each pass (10, 5, 2, 1), so it needs only 4 passes.",
      "After 1 comes 0 (`1 / 2` in int division), and `0 > 0` is false. There is no pass for 0.",
      "Nested loops multiply: the inner loop runs completely for every pass of the outer loop.",
      "`i /= 2` halves i each pass; it does not count down by 1.",
    ],
    answer: 0,
    verify: { out: "100 4" } },

  { id: "mta-25", skill: "while", type: "mcq", topic: "2.7",
    stem: "A hero walks through a dungeon, one room at a time. Consider the following code segment.",
    code: `int health = 17;
int torches = 2;
int room = 0;
while (health > 0 && room < 10)
{
    room++;
    if (room % 3 == 0)
    {
        health -= 7;
    }
    else
    {
        health -= 2;
    }
    if (health < 8 && torches > 0)
    {
        health += 4;
        torches--;
    }
}
System.out.println(room + " " + health + " " + torches);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["8 -1 0", "8 0 0", "10 -10 0", "7 -4 0"], mono: true,
    why: [
      "Trace it room by room: 2 damage, or 7 in every third room, then a torch if health is below 8 and one is left. The torches are used in rooms 3 and 5. In room 8, health drops to -1 and the loop stops.",
      "health is a plain int. Nothing keeps it at 0 or above, so it can go negative.",
      "The loop also stops when health is no longer above 0: `health > 0` is part of the condition.",
      "`room++` comes first, so the first room is room 1 and the 7 damage lands in rooms 3, 6, and 9.",
    ],
    answer: 0,
    verify: { out: "8 -1 0" } },

  { id: "mta-26", skill: "arith", type: "mcq", topic: "1.3",
    stem: "A dungeon run lasted 4000 seconds. Consider the following code segment.",
    code: `int seconds = 4000;
int h = seconds / 3600;
int m = seconds % 3600 / 60;
int s = seconds % 60;
System.out.println(h + ":" + m + ":" + s);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["1:6:40", "1:66:40", "1:40:40", "1:6:400"], mono: true,
    why: [
      "`seconds / 3600` is the whole hours. `seconds % 3600` is the 400 seconds left after them, and `/ 60` turns those into 6 whole minutes. `seconds % 60` is the 40 seconds left over.",
      "That is `seconds / 60`, the minutes in the whole run. The `% 3600` first removes the full hour.",
      "`%` and `/` have the same precedence and go left to right, so `seconds % 3600 / 60` is `(seconds % 3600) / 60`.",
      "`seconds % 60` is the remainder after whole minutes, which is always less than 60.",
    ],
    answer: 0,
    verify: { out: "1:6:40" } },

  { id: "mta-27", skill: "string", type: "mcq", topic: "2.10",
    stem: "Consider the following code segment.",
    code: `String s = "lantern";
String r = "";
for (int i = 1; i < s.length(); i += 2)
{
    r = s.substring(i, i + 1) + r;
}
System.out.println(r);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["rta", "atr", "nenl", "Nothing is printed. A StringIndexOutOfBoundsException is thrown."], mono: false,
    why: [
      "i takes the odd indexes 1, 3, and 5, so the letters a, t, and r are picked. Each one is added to the FRONT of r, so they come out in reverse order.",
      "`r = s.substring(i, i + 1) + r` puts the new letter before what r already holds.",
      "i starts at 1, so the letters at the even indexes are skipped.",
      "The largest i that passes the test is 5, and `substring(5, 6)` is inside the String. When i becomes 7, `i < s.length()` is false.",
    ],
    answer: 0,
    verify: { out: "rta" } },

  { id: "mta-28", skill: "algo", type: "mcq", topic: "2.9",
    stem: "The product of the whole numbers from 1 to 5, inclusive, is 120.",
    question: "Which of the following code segments prints that product?",
    choices: [
      A28("1", "k <= 5", "*="),
      A28("0", "k <= 5", "*="),
      A28("1", "k < 5", "*="),
      A28("1", "k <= 5", "+="),
    ], mono: true,
    why: [
      "p starts at 1, and each value of k from 1 to 5 is multiplied in once.",
      "A product that starts at 0 stays 0. Multiplying needs a starting value of 1.",
      "`k < 5` leaves out 5. The test must be `k <= 5`.",
      "`p += k` adds the numbers instead of multiplying them.",
    ],
    answer: 0,
    verify: { cases: [
      { run: A28("1", "k <= 5", "*="), out: "120" },
      { run: A28("0", "k <= 5", "*="), out: "0" },
      { run: A28("1", "k < 5", "*="), out: "24" },
      { run: A28("1", "k <= 5", "+="), out: "16" },
    ] } },

  { id: "mta-29", skill: "for", type: "mcq", topic: "2.8",
    stem: "Consider the following code segment.",
    code: `for (int k = 10; k > 1; k -= 3)
{
    System.out.print(k + " ");
}`,
    question: "Which of the following code segments prints exactly the same output?",
    choices: [A29("k > 1", true), A29("k > 1", false), A29("k >= 1", true), A29("k < 1", true)], mono: true,
    why: [
      "The start goes before the loop, the test goes in the while, and the update goes at the END of the body, after the print. It prints 10 7 4.",
      "The update runs before the print, so the first value printed is 7, not 10.",
      "`k >= 1` lets 1 in, which the for loop's test `k > 1` keeps out.",
      "The while test is the condition to keep going. `k < 1` is false at the start, so nothing is printed.",
    ],
    answer: 0,
    verify: { cases: [
      { run: "for (int k = 10; k > 1; k -= 3)\n{\n    System.out.print(k + \" \");\n}", out: "10 7 4 " },
      { run: A29("k > 1", true), out: "10 7 4 " },
      { run: A29("k > 1", false), out: "7 4 1 " },
      { run: A29("k >= 1", true), out: "10 7 4 1 " },
      { run: A29("k < 1", true), out: "" },
    ] } },

  { id: "mta-30", skill: "algo", type: "mcq", topic: "2.9",
    stem: "A vault in the dungeon has a four-digit code. The following code segment is intended to print the smallest digit of `code`, but it does not work as intended.",
    code: A30("0", "code > 0", "d < smallest", "code % 10"),
    question: "Which of the following versions works as intended?",
    choices: [A30_KEY, A30_B, A30_C, A30_D], mono: true,
    why: [
      "The original starts `smallest` at 0, and no digit is less than 0, so it always prints 0. Starting with one of the digits, the last one, fixes that.",
      "`d > smallest` keeps the LARGEST digit.",
      "`code > 10` stops the loop before the leftmost digit, 2, is checked.",
      "`code / 10` drops the last digit; it is `code % 10` that gives it.",
    ],
    answer: 0,
    verify: { cases: [
      { run: A30("0", "code > 0", "d < smallest", "code % 10"), out: "0" },
      { run: A30_KEY, out: "2" },
      { run: A30_B, out: "9" },
      { run: A30_C, out: "5" },
      { run: A30_D, out: "0" },
    ] } },

  { id: "mta-frq1", skill: "frq", type: "code", topic: "2.7", title: "The delivery drone",
    prompt: "A delivery drone carries packages to stops along a route. The following methods are available. For a `Drone` object: `int getCharge()`, `boolean canFly()` (true while the charge is above 0), `void fly(int minutes)` (lowers the charge by `minutes`, never below 0), and `void recharge(int amount)` (raises the charge, never above 100). `Trip.minutes(int distance, int load)` returns how many minutes a flight takes.\n\nThe variables `drone` (a `Drone`), `packages` (an `int`, the number of packages on board, at least 1), and `spares` (an `int`, the number of spare batteries) have already been declared and given values. Write a code segment that delivers the packages, one stop at a time, while packages are left and the drone can fly. For each stop:\n\n- The drone flies to the stop for `Trip.minutes(4, packages)` minutes, using the number of packages on board before this delivery.\n- If the drone can still fly after that flight, the package is delivered: one fewer package is on board.\n- Then, if the drone can still fly, its charge is below 30, and `spares` is more than 0, the drone recharges 40 and one spare is used.\n\nAfter the deliveries, print three lines: `Delivered: ` and the number of packages delivered, `Result: ` followed by `all delivered` if no packages are left and `stranded` otherwise, and `Charge: ` and the drone's charge.\n\nWrite the code segment as it would appear inside `main`. Do not write any methods, and do not use arrays. Use only the methods shown in the question.",
    sample: "With a drone whose charge is 60, `packages` equal to 4, and `spares` equal to 1, the code segment prints\n\nDelivered: 4\nResult: all delivered\nCharge: 32",
    classes: DRONE,
    rows: [
      { name: "Repeats while packages are left and the drone can fly", earns: "Uses a loop whose condition requires both `packages > 0` and `drone.canFly()`, joined with `&&` (or an equivalent, such as `drone.getCharge() > 0`)." },
      { name: "The flight", earns: "Calls `drone.fly` once per stop with `Trip.minutes(4, packages)`, arguments in that order, using the number of packages on board before the delivery." },
      { name: "Delivers only if the drone can still fly", earns: "After the flight, checks that the drone can still fly before the package counts as delivered." },
      { name: "Updates the counts", earns: "On each delivery, takes one from `packages` and adds one to the count of packages delivered, each exactly once." },
      { name: "The spare rule", earns: "Recharges 40 and uses one spare only when the drone can fly, its charge is below 30, and `spares` is more than 0. All three conditions, joined with `&&` or by nesting." },
      { name: "The result", earns: "Prints `all delivered` when no packages are left and `stranded` otherwise." },
      { name: "Prints the results", earns: "Prints the three labeled lines once, after the loop, with the charge from `getCharge()`." },
    ],
    notes: "One point for each row. Award a row for what the code actually does; ignore small typing slips that do not change the logic. Calling `fly` with the arguments of `Trip.minutes` in the wrong order, or with the number of packages after the delivery, does not earn The flight row. A charge test of `<= 30` does not earn The spare rule row. Changing the drone's charge any way other than `fly` and `recharge` earns neither row that uses them.",
    solution: FRQ_A1,
    verify: { cases: [
      frqA1(60, 4, 1, "Delivered: 4\nResult: all delivered\nCharge: 32"),
      frqA1(30, 3, 0, "Delivered: 1\nResult: stranded\nCharge: 0"),
      frqA1(50, 2, 1, "Delivered: 2\nResult: all delivered\nCharge: 60"),
      frqA1(20, 1, 2, "Delivered: 1\nResult: all delivered\nCharge: 46"),
      frqA1(44, 5, 3, "Delivered: 5\nResult: all delivered\nCharge: 34"),
      frqA1(10, 2, 3, "Delivered: 0\nResult: stranded\nCharge: 0"),
    ] } },

  { id: "mta-frq2", skill: "frq", type: "code", topic: "2.10", title: "Checking the parentheses",
    prompt: "A calculator checks the parentheses in an expression before it works anything out. The variable `expr` has already been declared and holds a `String` of one or more characters: letters, digits, operators, and the parentheses `(` and `)`.\n\nReading from left to right, each `(` opens a new level, and each `)` closes the most recent level that is still open. The **depth** at any point is the number of levels open. A `)` that comes when no level is open is a **stray**: it closes nothing, and the depth stays at 0.\n\nWrite a code segment that prints three lines:\n\n1. `Deepest: ` followed by the largest depth reached (0 if there is no `(`)\n2. `Stray: ` followed by the number of stray `)` characters\n3. `Unclosed: ` followed by the number of levels still open at the end\n\nWrite the code segment as it would appear inside `main`. Do not write any methods, and do not use arrays. Use only `String` methods from the Java Quick Reference: `length`, `substring`, `indexOf`, `equals`, and `compareTo`.",
    sample: "If `expr` is `\"(a(b))c)((d)\"`, the code segment prints\n\nDeepest: 2\nStray: 1\nUnclosed: 1",
    rows: [
      { name: "Traverses the expression", earns: "Visits every character of `expr` with a loop, without going past the end." },
      { name: "Compares Strings correctly", earns: "Recognizes `(` and `)` with `equals` on one-character Strings (or `indexOf`), never with `==` or `!=`." },
      { name: "Opens a level", earns: "Adds 1 to the depth for each `(`." },
      { name: "Closes a level", earns: "Takes 1 away from the depth for each `)` that comes while a level is open, and never lets the depth go below 0." },
      { name: "Counts the strays", earns: "Counts each `)` that comes when the depth is 0, and does not change the depth for it." },
      { name: "Keeps the deepest level", earns: "Keeps the largest depth reached at any point, not only the depth at the end." },
      { name: "Prints the results", earns: "Prints the three labeled lines once, after the loop, with the depth left at the end as the unclosed count." },
    ],
    notes: "One point for each row. Award a row for what the code actually does; ignore small typing slips that do not change the logic. Characters other than `(` and `)` must not change any count. Counting all the `(` and all the `)` and subtracting does not earn the Closes a level or Counts the strays rows, because it gets `\")(\"` wrong. Using `charAt` or `char` does not earn the Compares Strings correctly row.",
    solution: FRQ_A2,
    verify: { cases: [
      frqA2("(a(b))c)((d)", "Deepest: 2\nStray: 1\nUnclosed: 1"),
      frqA2("7+4", "Deepest: 0\nStray: 0\nUnclosed: 0"),
      frqA2(")(", "Deepest: 1\nStray: 1\nUnclosed: 1"),
      frqA2("((x)*(y+(z)))", "Deepest: 3\nStray: 0\nUnclosed: 0"),
      frqA2("))((((", "Deepest: 4\nStray: 2\nUnclosed: 4"),
      frqA2("(1)(2)(3)", "Deepest: 1\nStray: 0\nUnclosed: 0"),
      frqA2("((a)))b)", "Deepest: 2\nStray: 2\nUnclosed: 0"),
    ] } },
];

// ---------- Midterm Practice B ----------

const B28 = (start, test) => `int count = ${start};
while (${test})
{
    n /= 10;
    count++;
}
System.out.print(count);`;

const B29 = (start, update, body2) => `int total = 0;
for (int k = ${start}; k < 30; ${update})
{
    total += k;${body2 ? "\n    k *= 2;" : ""}
}
System.out.print(total);`;

const B30 = (test, piece) => `String log = "hmhhmhm";
int n = 0;
for (int i = 0; ${test}; i++)
{
    if (log.substring(i, ${piece}).equals("hm"))
    {
        n++;
    }
}
System.out.println(n);`;

const FRQ_B1 = `int weeks = 0;
int missed = 0;
while (acct.getBalance() < goal && weeks < 52)
{
    weeks++;
    acct.deposit(pay);
    if (weeks % 4 == 0)
    {
        boolean paid = acct.withdraw(15);
        if (!paid)
        {
            missed++;
        }
    }
}
System.out.println("Weeks: " + weeks);
System.out.println("Balance: " + acct.getBalance());
System.out.println("Missed bills: " + missed);`;
const frqB1 = (start, pay, goal, out) => ({ run: `Account acct = new Account(${start});\nint pay = ${pay};\nint goal = ${goal};\n${FRQ_B1}`, out });

const FRQ_B2 = `int score = 0;
int blank = 0;
int firstMiss = 0;
for (int i = 0; i < key.length(); i++)
{
    String k = key.substring(i, i + 1);
    String a = answers.substring(i, i + 1);
    if (a.equals(k))
    {
        score += 4;
    }
    else
    {
        if (a.equals("-"))
        {
            blank++;
        }
        else
        {
            score -= 1;
        }
        if (firstMiss == 0)
        {
            firstMiss = i + 1;
        }
    }
}
System.out.println("Score: " + score);
System.out.println("Blank: " + blank);
System.out.println("First miss: " + firstMiss);`;
const frqB2 = (key, answers, out) => ({ run: `String key = "${key}";\nString answers = "${answers}";\n${FRQ_B2}`, out });

const mtb = [
  { id: "mtb-01", skill: "arith", type: "mcq", topic: "1.3",
    stem: "A farm packs eggs into cartons of 12. Consider the following code segment.",
    code: `int eggs = 75;
int carton = 12;
System.out.println(eggs / carton + " " + eggs % carton + " " + eggs / carton * 1.0);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["6 3 6.0", "6 3 6.25", "6.25 3 6.25", "6 0.25 6.0"], mono: true,
    why: [
      "`/` between two ints keeps 6 whole cartons, and `%` gives the 3 eggs left over. In the last part, `/` and `*` go left to right, so the int division happens first and the fraction is gone before `* 1.0`.",
      "Multiplying by 1.0 AFTER the division is too late. `eggs / carton` is done first, in int.",
      "`eggs / carton` divides two ints, so it gives a whole number.",
      "`%` gives the remainder, a whole number of eggs, not the fraction of a carton.",
    ],
    answer: 0,
    verify: { out: "6 3 6.0" } },

  { id: "mtb-02", skill: "arith", type: "mcq", topic: "1.5",
    stem: "A snack costs 7.8 dollars. Consider the following code segment.",
    code: `double price = 7.8;
int qty = 3;
int a = (int) price * qty;
int b = (int) (price * qty);
System.out.println(a + " " + b);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["21 23", "23 23", "24 23", "21 23.4"], mono: true,
    why: [
      "A cast applies only to the value right after it. In a, `(int) price` is 7, and 7 times 3 is 21. In b, the parentheses make the product 23.4 first, and the cast drops the fraction.",
      "Without parentheses, `(int)` applies to `price` alone, before the multiplication.",
      "Casting to int drops the fraction; it does not round. `(int) 7.8` is 7.",
      "b is an int, and the cast to int drops the .4.",
    ],
    answer: 0,
    verify: { out: "21 23" } },

  { id: "mtb-03", skill: "arith", type: "mcq", topic: "1.6",
    stem: "Consider the following code segment.",
    code: `int score = 7;
score *= 3;
score -= score % 4;
score /= 2 + 3;
score += 1;
System.out.println(score);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["5", "14", "4", "20"], mono: true,
    why: [
      "Each line uses the current value: 7 times 3 is 21, `21 % 4` is 1 so score becomes 20, `score /= 2 + 3` divides by 5, and adding 1 gives 5.",
      "`score /= 2 + 3` divides by the whole right side, 5. It is not `score / 2 + 3`.",
      "`score % 4` is the remainder, 1. The line takes away the remainder, not the quotient.",
      "The last two lines still run: score is divided by 5 and then 1 is added.",
    ],
    answer: 0,
    verify: { out: "5" } },

  { id: "mtb-04", skill: "types", type: "mcq", topic: "1.3",
    stem: "Consider the following code segment.",
    code: `int a = 2;
int b = 8;
String s = a + b + "" + a * b + (a + b) + b / a;
System.out.println(s);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["1016104", "2816104", "1030", "10 16 10 4"], mono: true,
    why: [
      "`+` goes left to right. `a + b` are two ints, so they add to 10. Adding `\"\"` makes a String, so every later `+` joins text: 16, then 10 (the parentheses add first), then 4 (`/` happens before `+`).",
      "The first `+` has an int on each side, so it adds. Joining text starts only once the String appears.",
      "Once the String `\"\"` is reached, every later `+` joins text instead of adding.",
      "The empty String `\"\"` has no characters, so no spaces appear between the numbers.",
    ],
    answer: 0,
    verify: { out: "1016104" } },

  { id: "mtb-05", skill: "objects", type: "mcq", topic: "1.11",
    stem: "Consider the following code segment.",
    code: `double x = Math.pow(10, 2) / Math.sqrt(16);
int y = (int) Math.pow(2, 4) % 5;
System.out.println(x + " " + y + " " + Math.abs(y - x));`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["25.0 1 24.0", "25 1 24", "25.0 1 -24.0", "25.0 3 22.0"], mono: true,
    why: [
      "`Math.pow(10, 2)` is 100.0 and `Math.sqrt(16)` is 4.0, so x is 25.0. `(int) Math.pow(2, 4)` is 16, and `16 % 5` is 1. `Math.abs(1 - 25.0)` is 24.0.",
      "`Math.pow` and `Math.sqrt` return doubles, and `y - x` is a double, so x and the last value print with .0.",
      "`Math.abs` returns the distance from 0, which is never negative.",
      "`Math.pow(2, 4)` is 2 to the 4th power, 16, not 2 times 4.",
    ],
    answer: 0,
    verify: { out: "25.0 1 24.0" } },

  { id: "mtb-06", skill: "arith", type: "mcq", topic: "1.5",
    stem: "Consider the following code segment.",
    code: `int a = 1000000;
int b = a * 3000;
double c = (double) a * 3000;
System.out.println((b == c) + " " + (b < 0));`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["false true", "true false", "false false", "Nothing is printed. An ArithmeticException is thrown."], mono: false,
    why: [
      "3,000,000,000 is more than `Integer.MAX_VALUE`, so `a * 3000` done in int wraps around to a negative number, with no error. c is done in double, which holds the real product, so the two are not equal.",
      "An int cannot hold a value above `Integer.MAX_VALUE`, about 2.1 billion. The product wraps around instead.",
      "When an int goes past `Integer.MAX_VALUE`, it wraps around to the negative end.",
      "Integer overflow throws no exception in Java. The value wraps around, silently.",
    ],
    answer: 0,
    verify: { out: "false true" } },

  { id: "mtb-07", skill: "objects", type: "mcq", topic: "1.15",
    stem: "Consider the following code segment.",
    code: `String date = "2026-12-14";
int first = date.indexOf("-");
String month = date.substring(first + 1, first + 3);
String rest = date.substring(first + 1);
System.out.println(month + " " + rest.indexOf("-") + " " + date.indexOf("x"));`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["12 2 -1", "12 7 -1", "12- 2 -1", "Nothing is printed. A StringIndexOutOfBoundsException is thrown."], mono: false,
    why: [
      "The first `-` is at index 4, so `substring(5, 7)` is `\"12\"`. `rest` is `\"12-14\"`, where the `-` is at index 2. `indexOf` returns -1 when the text is not found.",
      "`rest.indexOf(\"-\")` counts from the start of `rest`, not from the start of `date`.",
      "The second index of `substring` is not included, so `substring(5, 7)` is two characters.",
      "`indexOf` returns -1 when the text is not found; it does not throw an exception.",
    ],
    answer: 0,
    verify: { out: "12 2 -1" } },

  { id: "mtb-08", skill: "objects", type: "mcq", topic: "1.15",
    stem: "Consider the following code segment.",
    code: `String a = "bolt";
String b = "bold";
String c = "bolts";
int x = a.compareTo(b);
int y = a.compareTo(c);
System.out.println((x > 0) + " " + (y > 0) + " " + c.compareTo("bolts"));`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["true false 0", "false true 0", "true true 0", "true false 1"], mono: true,
    why: [
      "`\"bolt\"` and `\"bold\"` first differ at t and d, and t comes after d, so x is positive. `\"bolt\"` is the start of `\"bolts\"`, and a shorter String that starts a longer one comes first, so y is negative. Equal Strings give 0.",
      "This reads the sign backward. `a.compareTo(b)` is positive when a comes AFTER b.",
      "A String that is the start of a longer one comes first, so `a.compareTo(c)` is negative.",
      "`compareTo` returns 0 when the two Strings are equal.",
    ],
    answer: 0,
    verify: { out: "true false 0" } },

  { id: "mtb-09", skill: "objects", type: "mcq", topic: "1.13",
    stem: "The `PiggyBank` class has a constructor that sets the amount inside, the method `void save(int n)`, which adds n, and the method `int getAmount()`. Consider the following code segment.",
    classes: PIGGY,
    code: `PiggyBank a = new PiggyBank(8);
PiggyBank b = new PiggyBank(8);
PiggyBank c = b;
c.save(2);
System.out.println((a == b) + " " + (b == c) + " " + b.getAmount());`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["false true 10", "true true 10", "false true 8", "false false 10"], mono: true,
    why: [
      "a and b are two separate objects made by two calls to `new`, so `a == b` is false even though they start with the same amount. `c = b` copies the reference, so b and c are one object, and `c.save(2)` changes it.",
      "`==` on object variables compares references: whether they point to the same object. Two objects made with `new` are never `==`, even with equal contents.",
      "`c = b` does not copy the piggy bank. c and b name the same object, so saving through c changes what b shows.",
      "After `c = b`, the two variables hold the same reference, so `b == c` is true.",
    ],
    answer: 0,
    verify: { out: "false true 10" } },

  { id: "mtb-10", skill: "objects", type: "mcq", topic: "1.14",
    stem: "The `Ticket` class has a constructor that sets the row, and the method `int getRow()`. Consider the following code segment.",
    classes: TICKET,
    code: `Ticket t = null;
Ticket u = new Ticket(3);
System.out.println(u.getRow());
t = u;
u = new Ticket(9);
System.out.println(t.getRow() + " " + u.getRow());
t = null;
System.out.println(t.getRow());`,
    question: "What is the result of executing the code segment?",
    choices: [
      "3 and then 3 9 are printed, and then a NullPointerException is thrown.",
      "3 and then 9 9 are printed, and then a NullPointerException is thrown.",
      "3 and then 3 9 are printed, and then 0 is printed.",
      "Nothing is printed. A NullPointerException is thrown.",
    ], mono: false,
    why: [
      "`t = u` copies the reference, so t refers to the row 3 ticket. Pointing u at a new ticket does not move t. At the end t is null, and calling `getRow()` on null throws.",
      "`u = new Ticket(9)` changes only u. t still refers to the first ticket.",
      "null is not a ticket with row 0. A variable set to null refers to no object, so calling a method on it throws a `NullPointerException`.",
      "`Ticket t = null;` compiles and runs. The exception comes only when a method is called on null, on the last line.",
    ],
    answer: 0,
    verify: { throws: "NullPointerException" } },

  { id: "mtb-11", skill: "objects", type: "mcq", topic: "1.9",
    stem: "The `Shipping` class has the method `static int cost(double pounds, int zone)`, and `box` is a `Parcel` object with the method `double getWeight()`.",
    classes: SHIPPING,
    question: "Which of the following statements compiles?",
    choices: [
      "int c = Shipping.cost(box.getWeight(), 3);",
      "int c = Shipping.cost(3, box.getWeight());",
      "int c = Shipping.cost(box.getWeight());",
      "int c = box.cost(box.getWeight(), 3);",
    ], mono: true,
    why: [
      "The arguments match the parameters in order, a double and then an int, and the static method is called on its class name. Its int result is stored in an int.",
      "The int 3 can be passed to the double parameter, but the double from `getWeight()` cannot be passed to the int parameter: `incompatible types: possible lossy conversion from double to int`.",
      "`cost` needs two arguments. Leaving one out does not match the signature.",
      "`cost` belongs to the `Shipping` class, not to `Parcel`, so `box.cost` gives `cannot find symbol`.",
    ],
    answer: 0,
    verify: { cases: [
      { run: "Parcel box = new Parcel(2.5);\nint c = Shipping.cost(box.getWeight(), 3);\nSystem.out.println(c);", out: "13" },
      { run: "Parcel box = new Parcel(2.5);\nint c = Shipping.cost(3, box.getWeight());\nSystem.out.println(c);", error: "possible lossy conversion from double to int" },
      { run: "Parcel box = new Parcel(2.5);\nint c = Shipping.cost(box.getWeight());\nSystem.out.println(c);", error: "cannot be applied to given types" },
      { run: "Parcel box = new Parcel(2.5);\nint c = box.cost(box.getWeight(), 3);\nSystem.out.println(c);", error: "cannot find symbol" },
    ] } },

  { id: "mtb-12", skill: "objects", type: "mcq", topic: "1.14",
    stem: "The `Robot` class has the methods `void move(int steps)`, which moves the robot, `int getX()`, which returns its position, and `String getName()`. The variable `robot` refers to a `Robot` object.",
    classes: ROBOT,
    question: "Which of the following statements does NOT compile?",
    choices: [
      "int x = robot.move(2) + 1;",
      "robot.move(robot.getX());",
      "robot.getName();",
      "String s = robot.getName() + robot.getX();",
    ], mono: true,
    why: [
      "`move` is void: it returns no value, so there is nothing to add 1 to. The error is `'void' type not allowed here`.",
      "`getX()` returns an int, which matches the int parameter of `move`.",
      "Calling a method that returns a value and ignoring the value compiles. The value is simply lost.",
      "`getName()` returns a String, and joining an int onto a String gives a String.",
    ],
    answer: 0,
    verify: { cases: [
      { run: "Robot robot = new Robot(\"Pip\");\nint x = robot.move(2) + 1;\nSystem.out.println(x);", error: "'void' type not allowed here" },
      { run: "Robot robot = new Robot(\"Pip\");\nrobot.move(3);\nrobot.move(robot.getX());\nSystem.out.println(robot.getX());", out: "6" },
      { run: "Robot robot = new Robot(\"Pip\");\nrobot.getName();\nSystem.out.println(robot.getX());", out: "0" },
      { run: "Robot robot = new Robot(\"Pip\");\nString s = robot.getName() + robot.getX();\nSystem.out.println(s);", out: "Pip0" },
    ] } },

  { id: "mtb-13", skill: "if", type: "mcq", topic: "2.3",
    stem: "Consider the following code segment.",
    code: `int score = 85;
String grade = "";
if (score >= 70)
{
    grade = "C";
}
else if (score >= 80)
{
    grade = "B";
}
else if (score >= 90)
{
    grade = "A";
}
if (score % 10 >= 5)
{
    grade = grade + "+";
}
System.out.println(grade);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["C+", "B+", "C", "B"], mono: true,
    why: [
      "The chain stops at the FIRST true test. `score >= 70` is true for 85, so grade is `\"C\"` and the rest of the chain is skipped. The last if is separate, and `85 % 10` is 5, so a + is added.",
      "Once `score >= 70` is true, no later test in the chain is checked, so the `score >= 80` branch never runs.",
      "The last if is not part of the chain. It is tested after the chain, and `85 % 10 >= 5` is true.",
      "Two mistakes: the chain stops at `score >= 70`, and the separate if still runs.",
    ],
    answer: 0,
    verify: { out: "C+" } },

  { id: "mtb-14", skill: "if", type: "mcq", topic: "2.4",
    stem: "A town sets speeding fines. Consider the following code segment.",
    code: `int speed = 72;
boolean school = true;
int fine = 0;
if (speed > 65)
{
    if (speed > 80)
    {
        fine = 200;
    }
    else
    {
        fine = 100;
    }
    if (school)
    {
        fine *= 2;
    }
}
else if (school && speed > 25)
{
    fine = 150;
}
System.out.println(fine);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["200", "100", "150", "400"], mono: true,
    why: [
      "`speed > 65` is true, so the outer block runs. `speed > 80` is false, so the inner else sets fine to 100. The `if (school)` is inside the same block, so it doubles the fine.",
      "`if (school)` is inside the outer block, after the inner if and else, so it runs whenever `speed > 65` is true.",
      "The `else if` belongs to the OUTER if. It is tested only when `speed > 65` is false.",
      "`speed > 80` is false for 72, so the fine starts at 100, not 200.",
    ],
    answer: 0,
    verify: { out: "200" } },

  { id: "mtb-15", skill: "bool", type: "mcq", topic: "2.6",
    stem: "A driving school uses the condition `!(age < 16 && !hasPermit)`, where `age` is an int and `hasPermit` is a boolean.",
    question: "Which of the following expressions is equivalent for all values of `age` and `hasPermit`?",
    choices: ["age >= 16 || hasPermit", "age >= 16 && hasPermit", "age > 16 || hasPermit", "age >= 16 || !hasPermit"], mono: true,
    why: [
      "De Morgan: `!(p && q)` is `!p || !q`. The opposite of `age < 16` is `age >= 16`, and the opposite of `!hasPermit` is `hasPermit`.",
      "Each part is negated correctly, but the `&&` must become `||`.",
      "The opposite of `<` is `>=`. With age equal to 16 and hasPermit false, the original is true and this is false.",
      "Negating `!hasPermit` gives `hasPermit`. The two `!` cancel.",
    ],
    answer: 0,
    verify: { cases: [
      { run: "int diffs = 0;\nfor (int age = 14; age <= 18; age++)\n{\n    for (int p = 0; p < 2; p++)\n    {\n        boolean hasPermit = p == 1;\n        if ((age >= 16 || hasPermit) != !(age < 16 && !hasPermit))\n        {\n            diffs++;\n        }\n    }\n}\nSystem.out.println(\"differences: \" + diffs);", out: "differences: 0" },
      { run: "int age = 17;\nboolean hasPermit = false;\nSystem.out.println((age >= 16 && hasPermit) + \" \" + !(age < 16 && !hasPermit));", out: "false true" },
      { run: "int age = 16;\nboolean hasPermit = false;\nSystem.out.println((age > 16 || hasPermit) + \" \" + !(age < 16 && !hasPermit));", out: "false true" },
      { run: "int age = 15;\nboolean hasPermit = false;\nSystem.out.println((age >= 16 || !hasPermit) + \" \" + !(age < 16 && !hasPermit));", out: "true false" },
    ] } },

  { id: "mtb-16", skill: "bool", type: "mcq", topic: "2.5",
    stem: "A hero pays a toll of 2 gold on some turns. Consider the following code segment.",
    code: `int gold = 10;
int hits = 0;
for (int turn = 1; turn <= 6; turn++)
{
    if (turn % 2 == 0 || gold > 6 && turn != 4)
    {
        gold -= 2;
        hits++;
    }
}
System.out.println(gold + " " + hits);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["2 4", "4 3", "0 5", "-2 6"], mono: true,
    why: [
      "`&&` is evaluated before `||`, so the test is true on every even turn, and on an odd turn only while gold is above 6 (and the turn is not 4). That gives tolls on turns 1, 2, 4, and 6.",
      "This groups the `||` first, which blocks turn 4. `&&` is evaluated before `||`, so `turn != 4` goes only with `gold > 6`.",
      "`gold > 6` is false when gold is exactly 6, so turn 3 has no toll.",
      "The test is not true on every turn. On odd turns it needs `gold > 6`.",
    ],
    answer: 0,
    verify: { out: "2 4" } },

  { id: "mtb-17", skill: "while", type: "mcq", topic: "2.7",
    stem: "Consider the following code segment.",
    code: `int n = 1;
int count = 0;
while (n < 50)
{
    n = n * 3 - 1;
    count++;
}
System.out.println(n + " " + count);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["122 5", "41 4", "122 6", "64 6"], mono: true,
    why: [
      "n goes 1, 2, 5, 14, 41, 122. The test is checked before each pass, and the loop stops once n is 50 or more, after 5 passes.",
      "41 is still below 50, so the body runs once more and n jumps past 50.",
      "The last test, with n equal to 122, is not a pass. `count` counts only the passes that run.",
      "`*` happens before `-`, so each pass computes `n * 3` and then subtracts 1. This multiplies by `3 - 1` instead.",
    ],
    answer: 0,
    verify: { out: "122 5" } },

  { id: "mtb-18", skill: "for", type: "mcq", topic: "2.8",
    stem: "Consider the following code segment.",
    code: `for (int i = -6; i <= 15; i += 3)
{
    System.out.println("Go");
}`,
    question: "How many times is `Go` printed?",
    choices: ["8", "7", "9", "22"], mono: true,
    why: [
      "List the values of i: -6, -3, 0, 3, 6, 9, 12, 15. That is 8 values, one line each.",
      "That is `(15 - (-6)) / 3`. Count the values instead: the first one, -6, counts too.",
      "This lets in 18. The test is `i <= 15`.",
      "That counts every whole number from -6 to 15. i goes up by 3.",
    ],
    answer: 0,
    verify: { out: "Go\nGo\nGo\nGo\nGo\nGo\nGo\nGo" } },

  { id: "mtb-19", skill: "algo", type: "mcq", topic: "2.9",
    stem: "Consider the following code segment.",
    code: `int total = 0;
int count = 0;
for (int n = 1; n <= 20; n++)
{
    if (n % 7 == 0)
    {
        total += n;
        count++;
    }
}
double avg = (double) (total / count);
System.out.println(total + " " + count + " " + avg);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["21 2 10.0", "21 2 10.5", "21 2 10", "21 20 1.0"], mono: true,
    why: [
      "Only 7 and 14 pass the test, so total is 21 and count is 2. The parentheses make `total / count` happen first, in int, so 10 is cast to 10.0.",
      "The cast is outside the parentheses. The division happens first, between two ints, and the fraction is gone before the cast.",
      "avg is a double, so it prints with a decimal point.",
      "`count++` is inside the if, so it counts only the multiples of 7.",
    ],
    answer: 0,
    verify: { out: "21 2 10.0" } },

  { id: "mtb-20", skill: "string", type: "mcq", topic: "2.10",
    stem: "Consider the following code segment.",
    code: `String w = "refer";
String rev = "";
for (int i = w.length() - 1; i >= 0; i--)
{
    rev += w.substring(i, i + 1);
}
System.out.println(rev.equals(w) + " " + (rev == w));`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["true false", "true true", "false false", "Nothing is printed. A StringIndexOutOfBoundsException is thrown."], mono: false,
    why: [
      "The loop adds the letters from last to first, so rev holds the word backward, `\"refer\"`, the same letters as w. `equals` compares the letters. `==` compares references, and rev is a new String object, not the literal.",
      "`==` compares references, not letters. rev was built by the loop, so it is a different object from w.",
      "`\"refer\"` reads the same in both directions, so `rev.equals(w)` is true.",
      "i starts at `w.length() - 1`, the last index, and stops at 0, so every `substring(i, i + 1)` is inside the String.",
    ],
    answer: 0,
    verify: { out: "true false" } },

  { id: "mtb-21", skill: "string", type: "mcq", topic: "2.10",
    stem: "A traffic light log stores one letter per minute: `R`, `G`, or `Y`. Consider the following code segment.",
    code: `String lights = "RRGGGYRRR";
int changes = 0;
String prev = lights.substring(0, 1);
for (int i = 1; i < lights.length(); i++)
{
    String cur = lights.substring(i, i + 1);
    if (!cur.equals(prev))
    {
        changes++;
    }
    prev = cur;
}
System.out.println(changes);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["3", "4", "5", "Nothing is printed. A StringIndexOutOfBoundsException is thrown."], mono: false,
    why: [
      "Each pass compares a light with the one before it and counts a change of color. The color changes three times: R to G, G to Y, and Y to R.",
      "That is the number of groups of one color. The code counts the places where the color changes, which is one fewer.",
      "That counts the neighbors that MATCH. The test uses `!`, so it counts the ones that differ.",
      "i stops at `lights.length() - 1`, the last index, so `substring(i, i + 1)` stays inside the String.",
    ],
    answer: 0,
    verify: { out: "3" } },

  { id: "mtb-22", skill: "nested", type: "mcq", topic: "2.11",
    stem: "Consider the following code segment.",
    code: `int count = 0;
for (int i = 0; i < 5; i++)
{
    for (int j = 0; j < 5; j++)
    {
        if (j > i)
        {
            count++;
        }
    }
}
System.out.println(count);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["10", "25", "15", "5"], mono: true,
    why: [
      "The inner loop runs 5 times for each i, but count goes up only when j is greater than i: 4 times for i = 0, then 3, 2, 1, and 0.",
      "That is the number of inner passes. count goes up only when `j > i` is true.",
      "That counts `j >= i`. When j equals i, `j > i` is false.",
      "That counts the outer loop only. The if is inside the inner loop.",
    ],
    answer: 0,
    verify: { out: "10" } },

  { id: "mtb-23", skill: "nested", type: "mcq", topic: "2.11",
    stem: "Consider the following code segment.",
    code: `for (int r = 0; r < 3; r++)
{
    for (int c = 0; c < 3; c++)
    {
        if (r == c)
        {
            System.out.print("X");
        }
        else
        {
            System.out.print(".");
        }
    }
    System.out.print("|");
}`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["X..|.X.|..X|", "X..|X..|X..|", "X|.X|..X|", "XXX|...|...|"], mono: true,
    why: [
      "The outer loop makes one group per row, each ended by |. In each group the inner loop prints 3 symbols, with an X where the column equals the row.",
      "r changes from one group to the next, so the X moves one column to the right each time.",
      "The inner loop runs 3 times for every row, not r + 1 times.",
      "The test is `r == c`, which is true exactly once in each row.",
    ],
    answer: 0,
    verify: { out: "X..|.X.|..X|" } },

  { id: "mtb-24", skill: "runtime", type: "mcq", topic: "2.12",
    stem: "Consider the following code segment.",
    code: `int n = 16;
int a = 0;
int b = 0;
for (int i = 1; i < n; i *= 2)
{
    for (int j = 0; j < n; j++)
    {
        a++;
    }
}
for (int i = 0; i < n; i++)
{
    b++;
}
System.out.println(a + " " + b);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["64 16", "256 16", "20 16", "80 16"], mono: true,
    why: [
      "The outer loop doubles i: 1, 2, 4, 8, so it runs 4 times, and the inner loop runs 16 times for each: 64. The second loop runs once for each i from 0 to 15.",
      "The outer loop doubles i, so it needs only 4 passes to reach 16, not 16 passes.",
      "Nested loops multiply: the inner loop runs completely for every pass of the outer loop.",
      "16 is not less than 16, so the outer loop stops after i is 8.",
    ],
    answer: 0,
    verify: { out: "64 16" } },

  { id: "mtb-25", skill: "while", type: "mcq", topic: "2.7",
    stem: "A hero climbs a tower, one floor at a time. Consider the following code segment.",
    code: `int stamina = 12;
int floor = 0;
int rests = 0;
while (floor < 10 && stamina > 0)
{
    floor++;
    stamina -= 3;
    if (stamina <= 3 && rests < 2)
    {
        stamina += 5;
        rests++;
    }
}
System.out.println(floor + " " + stamina + " " + rests);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["8 -2 2", "8 0 2", "10 -8 2", "9 0 3"], mono: true,
    why: [
      "Each floor costs 3 stamina, and a rest adds 5 when stamina is 3 or less and fewer than 2 rests have been taken. The rests come on floors 3 and 5. On floor 8, stamina drops to -2 and the loop stops.",
      "stamina is a plain int. Nothing keeps it at 0 or above, so it can go negative.",
      "The loop also stops when stamina is no longer above 0: `stamina > 0` is part of the condition.",
      "`rests < 2` allows only two rests. A third rest would need `rests <= 2`.",
    ],
    answer: 0,
    verify: { out: "8 -2 2" } },

  { id: "mtb-26", skill: "arith", type: "mcq", topic: "1.3",
    stem: "A theater numbers its seats 0, 1, 2, and so on, row by row, with 12 seats in each row. The seat with number k is in row `k / 12` and column `k % 12`, counting from 0. Consider the following code segment.",
    code: `int seat = 53;
int row = seat / 12;
int col = seat % 12;
int across = row * 12 + (11 - col);
System.out.println(row + " " + col + " " + across);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["4 5 54", "5 4 67", "4 5 6", "4 5 55"], mono: true,
    why: [
      "`53 / 12` is 4 whole rows and `53 % 12` is the 5 seats left over. The seat across the row is in the same row at column `11 - 5`, which is 6, and its number is `4 * 12 + 6`.",
      "This swaps row and column. `/` counts whole rows; `%` is the place within the row.",
      "A seat's number counts all the seats in the rows before it: `row * 12` must be added.",
      "Columns count from 0, so the last column is 11, and the seat across from column 5 is column 6.",
    ],
    answer: 0,
    verify: { out: "4 5 54" } },

  { id: "mtb-27", skill: "string", type: "mcq", topic: "2.10",
    stem: "Consider the following code segment.",
    code: `String s = "watermelon";
String r = "";
for (int i = 0; i < s.length() - 1; i += 3)
{
    r += s.substring(i, i + 2);
}
System.out.println(r);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["waerel", "Nothing is printed. A StringIndexOutOfBoundsException is thrown.", "waereln", "wee"], mono: false,
    why: [
      "i takes the values 0, 3, and 6, and each pass adds the two letters starting at i. When i becomes 9, the test `9 < 9` is false, so the loop stops.",
      "The test is `i < s.length() - 1`, so i never reaches 9, where `substring(9, 11)` would go past the end.",
      "The loop stops before i reaches 9, so the n at the end is never added.",
      "`substring(i, i + 2)` takes two letters each pass, not one.",
    ],
    answer: 0,
    verify: { out: "waerel" } },

  { id: "mtb-28", skill: "algo", type: "mcq", topic: "2.9",
    stem: "In each code segment below, `n` is an int variable that holds 40500, a number with 5 digits.",
    question: "Which of the following code segments prints the number of digits in n?",
    choices: [B28("0", "n > 0"), B28("0", "n > 10"), B28("0", "n % 10 != 0"), B28("1", "n > 0")], mono: true,
    why: [
      "Each pass drops the last digit with `n /= 10` and counts it. After 5 passes n is 0 and the loop stops.",
      "`n > 10` stops the loop when one digit is left, so the leftmost digit is not counted.",
      "40500 ends in 0, so `n % 10 != 0` is false at the start and the loop never runs.",
      "count starts at 1, so the total is one more than the number of passes.",
    ],
    answer: 0,
    verify: { cases: [
      { run: "int n = 40500;\n" + B28("0", "n > 0"), out: "5" },
      { run: "int n = 40500;\n" + B28("0", "n > 10"), out: "4" },
      { run: "int n = 40500;\n" + B28("0", "n % 10 != 0"), out: "0" },
      { run: "int n = 40500;\n" + B28("1", "n > 0"), out: "6" },
    ] } },

  { id: "mtb-29", skill: "for", type: "mcq", topic: "2.8",
    stem: "Consider the following code segment.",
    code: `int total = 0;
int k = 1;
while (k < 30)
{
    total += k;
    k *= 2;
}
System.out.print(total);`,
    question: "Which of the following code segments prints exactly the same output?",
    choices: [B29("1", "k *= 2", false), B29("1", "k++", true), B29("2", "k *= 2", false), B29("1", "k += 2", false)], mono: true,
    why: [
      "The three parts of the for header are the start, the test, and the update of the while loop. Both add 1, 2, 4, 8, and 16.",
      "This changes k twice per pass: `k *= 2` in the body and `k++` in the header.",
      "The while loop starts k at 1, so 1 is added too.",
      "`k += 2` adds 2 each pass. The while loop doubles k.",
    ],
    answer: 0,
    verify: { cases: [
      { run: "int total = 0;\nint k = 1;\nwhile (k < 30)\n{\n    total += k;\n    k *= 2;\n}\nSystem.out.print(total);", out: "31" },
      { run: B29("1", "k *= 2", false), out: "31" },
      { run: B29("1", "k++", true), out: "26" },
      { run: B29("2", "k *= 2", false), out: "30" },
      { run: B29("1", "k += 2", false), out: "225" },
    ] } },

  { id: "mtb-30", skill: "algo", type: "mcq", topic: "2.9",
    stem: "A battle log has one letter per swing: `h` for a hit and `m` for a miss. The following code segment is intended to count how many times a hit is followed directly by a miss, but it does not work as intended.",
    code: B30("i <= log.length() - 1", "i + 2"),
    question: "Which of the following versions works as intended?",
    choices: [B30("i < log.length() - 1", "i + 2"), B30("i < log.length()", "i + 2"), B30("i < log.length() - 2", "i + 2"), B30("i <= log.length() - 1", "i + 1")], mono: true,
    why: [
      "`substring(i, i + 2)` needs i + 2 to be at most `length()`, so the last start is `length() - 2`. `i < log.length() - 1` stops there, and every pair is checked.",
      "`i < log.length()` still lets i reach the last index, where `substring(i, i + 2)` goes past the end and throws a `StringIndexOutOfBoundsException`.",
      "This stops one pair early, so the pair at the end is never checked, and here it is `\"hm\"`.",
      "`substring(i, i + 1)` is one letter, which never equals the two letters `\"hm\"`.",
    ],
    answer: 0,
    verify: { cases: [
      { run: B30("i <= log.length() - 1", "i + 2"), throws: "StringIndexOutOfBoundsException" },
      { run: B30("i < log.length() - 1", "i + 2"), out: "3" },
      { run: B30("i < log.length()", "i + 2"), throws: "StringIndexOutOfBoundsException" },
      { run: B30("i < log.length() - 2", "i + 2"), out: "2" },
      { run: B30("i <= log.length() - 1", "i + 1"), out: "0" },
    ] } },

  { id: "mtb-frq1", skill: "frq", type: "code", topic: "2.7", title: "Saving for a bike",
    prompt: "A student saves money each week for a new bike. The following methods are available for an `Account` object: `int getBalance()`, `void deposit(int amount)`, which adds `amount` to the balance, and `boolean withdraw(int amount)`, which takes `amount` out and returns `true` if the balance is at least `amount`, and otherwise changes nothing and returns `false`.\n\nThe variables `acct` (an `Account`), `pay` (an `int`, the amount earned each week), and `goal` (an `int`, the price of the bike) have already been declared and given values. Write a code segment that runs one week at a time, until the balance reaches `goal` or 52 weeks have passed, whichever comes first. In each week:\n\n- The week's pay is deposited.\n- Every fourth week (the 4th, 8th, 12th, and so on), after the pay is deposited, a phone bill of 15 is paid with `withdraw`. If the withdrawal does not go through, the bill is missed.\n\nAfter the last week, print three lines: `Weeks: ` and the number of weeks, `Balance: ` and the balance, and `Missed bills: ` and the number of missed bills.\n\nWrite the code segment as it would appear inside `main`. Do not write any methods, and do not use arrays. Use only the methods shown in the question.",
    sample: "With an account that starts at 2, `pay` equal to 3, and `goal` equal to 20, the code segment prints\n\nWeeks: 6\nBalance: 20\nMissed bills: 1",
    classes: ACCOUNT,
    rows: [
      { name: "Stops for either reason", earns: "Uses a loop that stops when the balance reaches `goal` or when 52 weeks have passed (a two-part condition joined with `&&`, such as `acct.getBalance() < goal && weeks < 52`, or an equivalent)." },
      { name: "Counts the weeks", earns: "Counts each week exactly once." },
      { name: "Deposits the pay", earns: "Calls `acct.deposit(pay)` once in every week." },
      { name: "Finds every fourth week", earns: "Identifies the 4th, 8th, 12th weeks, for example with `weeks % 4 == 0` after counting the week." },
      { name: "Pays the bill", earns: "Calls `acct.withdraw(15)` exactly once in each of those weeks, after the deposit, and in no other week." },
      { name: "Counts a missed bill", earns: "Uses the value that `withdraw` returns to count a missed bill, without calling `withdraw` a second time to check." },
      { name: "Prints the results", earns: "Prints the three labeled lines once, after the loop, with the balance from `getBalance()`." },
    ],
    notes: "One point for each row. Award a row for what the code actually does; ignore small typing slips that do not change the logic. Checking `acct.getBalance() >= 15` before calling `withdraw` earns the Counts a missed bill row only if the code still calls `withdraw` once and counts a miss exactly when the bill is not paid. Calling `withdraw` once to test it and again to pay does not earn the Pays the bill row. Changing the balance any way other than `deposit` and `withdraw` earns neither row that uses them.",
    solution: FRQ_B1,
    verify: { cases: [
      frqB1(2, 3, 20, "Weeks: 6\nBalance: 20\nMissed bills: 1"),
      frqB1(50, 5, 40, "Weeks: 0\nBalance: 50\nMissed bills: 0"),
      frqB1(0, 5, 40, "Weeks: 23\nBalance: 40\nMissed bills: 0"),
      frqB1(0, 2, 1000, "Weeks: 52\nBalance: 14\nMissed bills: 7"),
      frqB1(0, 10, 31, "Weeks: 5\nBalance: 35\nMissed bills: 0"),
      frqB1(14, 0, 100, "Weeks: 52\nBalance: 14\nMissed bills: 13"),
    ] } },

  { id: "mtb-frq2", skill: "frq", type: "code", topic: "2.10", title: "Scoring a quiz",
    prompt: "A quiz has one letter for each question. The variable `key` holds the correct answers, each one of `A`, `B`, `C`, or `D`. The variable `answers` holds one student's answers, with `-` for a question left blank. Both have already been declared, and they have the same length, at least 1.\n\nWrite a code segment that prints three lines:\n\n1. `Score: ` followed by the score: 4 points for each correct answer, -1 for each wrong answer, and 0 for each blank\n2. `Blank: ` followed by the number of blanks\n3. `First miss: ` followed by the number of the first question that is not answered correctly (wrong or blank), counting the first question as 1, or 0 if every answer is correct\n\nWrite the code segment as it would appear inside `main`. Do not write any methods, and do not use arrays. Use only `String` methods from the Java Quick Reference: `length`, `substring`, `indexOf`, `equals`, and `compareTo`.",
    sample: "If `key` is `\"DACBBA\"` and `answers` is `\"DABB-A\"`, the code segment prints\n\nScore: 15\nBlank: 1\nFirst miss: 3",
    rows: [
      { name: "Traverses both Strings", earns: "Visits every position of `key` and `answers` together with a loop, without going past the end." },
      { name: "Compares Strings correctly", earns: "Compares one-letter Strings with `equals`, never with `==` or `!=`." },
      { name: "Scores the answers", earns: "Adds 4 for each correct answer and takes 1 away for each wrong answer that is not a blank." },
      { name: "Counts the blanks", earns: "Counts every `-` exactly once, and does not score a blank as wrong." },
      { name: "Finds the first miss", earns: "Records the position of the first question that is wrong or blank, and does not change it for later misses." },
      { name: "Numbers the questions from 1", earns: "Reports the question number (the index plus 1), and 0 when every answer is correct." },
      { name: "Prints the results", earns: "Prints the three labeled lines once, after the loop, using the values the code computed." },
    ],
    notes: "One point for each row. Award a row for what the code actually does; ignore small typing slips that do not change the logic. A response that stops the loop at the first miss earns the Finds the first miss row only if the score and the blanks still cover every question. Using `indexOf` to find the first miss does not work here, because the miss depends on both Strings. Using `charAt` or `char` does not earn the Compares Strings correctly row.",
    solution: FRQ_B2,
    verify: { cases: [
      frqB2("DACBBA", "DABB-A", "Score: 15\nBlank: 1\nFirst miss: 3"),
      frqB2("ABCD", "ABCD", "Score: 16\nBlank: 0\nFirst miss: 0"),
      frqB2("A", "-", "Score: 0\nBlank: 1\nFirst miss: 1"),
      frqB2("CCCC", "DDDD", "Score: -4\nBlank: 0\nFirst miss: 1"),
      frqB2("ABCDA", "ABC-B", "Score: 11\nBlank: 1\nFirst miss: 4"),
      frqB2("BADCAB", "BAD--C", "Score: 11\nBlank: 2\nFirst miss: 4"),
    ] } },
];

export default {
  forms: [
    { id: "mta", name: "Midterm Practice A", group: GROUP, date: DATE, items: mta },
    { id: "mtb", name: "Midterm Practice B", group: GROUP, date: DATE, items: mtb },
  ],
};

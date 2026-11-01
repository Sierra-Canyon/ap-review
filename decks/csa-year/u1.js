// AP CSA mock forms: Unit 1 Test Practice A and Unit 1 Test Practice B.
// Same shape as the real Unit 1 Test (10/6): 20 MCQ in its topic order, then one 7-row free response
// (a code segment in main that uses a supplied class). New code throughout; no real item is reused.
// In every mcq the key is written first and answer is 0 (the site shuffles).

const fill = (code, hole, piece) => code.replace(hole, piece);
const asTop = (cls) => cls.replace(/^public class/, "class");
const sampler = (expr) => `int lo = 1000;
int hi = -1000;
for (int k = 0; k < 300000; k++)
{
    int v = ${expr};
    if (v < lo) lo = v;
    if (v > hi) hi = v;
}
System.out.println(lo + " " + hi);`;

// ---------- classes used by the forms ----------

const LANTERN = `public class Lantern
{
    private int oil;

    public Lantern(int startOil)
    {
        oil = startOil;
    }

    public void burn(int amount)
    {
        oil -= amount;
    }

    public int getOil()
    {
        return oil;
    }
}`;

const BUCKET = `public class Bucket
{
    private int liters;

    public Bucket(int startLiters)
    {
        liters = startLiters;
    }

    public void fill(int amount)
    {
        liters += amount;
    }

    public int getLiters()
    {
        return liters;
    }
}`;

const TORCH = `class Torch
{
    private String color;
    private int hours;
    private double weight;

    public Torch(String color, int hours, double weight)
    {
        this.color = color;
        this.hours = hours;
        this.weight = weight;
    }
}`;

const RECIPE = `class Recipe
{
    private String title;
    private int servings;
    private boolean vegan;

    public Recipe(String title, int servings, boolean vegan)
    {
        this.title = title;
        this.servings = servings;
        this.vegan = vegan;
    }
}`;

const AVERAGE = `public static double average(int a, int b, int c)
{
    return (a + b + c) / 3.0;
}`;

const COST = `public static int cost(int count, double price)
{
    return (int) (count * price);
}`;

const PARCEL = `public class Parcel
{
    private String code;
    private String receiver;
    private int ounces;

    /** Creates a parcel. code is a city code, a dash, and a number, such as "LAX-0732".
     *  ounces is the weight of the parcel in ounces. */
    public Parcel(String code, String receiver, int ounces)
    {
        this.code = code;
        this.receiver = receiver;
        this.ounces = ounces;
    }

    /** Returns the code, such as "LAX-0732". */
    public String getCode()
    {
        return code;
    }

    /** Returns the name of the person the parcel is for. */
    public String getReceiver()
    {
        return receiver;
    }

    /** Returns the current weight in ounces. */
    public int getOunces()
    {
        return ounces;
    }

    /** Adds an item that weighs extra ounces to the parcel.
     *  Precondition: extra > 0 */
    public void addItem(int extra)
    {
        ounces += extra;
    }
}`;

const PLAYER = `public class Player
{
    private String name;
    private int points;
    private int games;

    /** Creates a player. name is the last name, a comma, a space, and the first name,
     *  such as "Lopez, Maria". */
    public Player(String name, int points, int games)
    {
        this.name = name;
        this.points = points;
        this.games = games;
    }

    /** Returns the name, such as "Lopez, Maria". */
    public String getName()
    {
        return name;
    }

    /** Returns the total points the player has scored. */
    public int getPoints()
    {
        return points;
    }

    /** Returns the number of games the player has played. */
    public int getGames()
    {
        return games;
    }

    /** Records one more game, in which the player scored scored points.
     *  Precondition: scored >= 0 */
    public void playGame(int scored)
    {
        points += scored;
        games++;
    }
}`;

// ---------- Unit 1 Test Practice A ----------

const A14 = (s) => `${s}\nSystem.out.println("created");`;
const A16 = (s) => `Lantern lamp = new Lantern(12);\n${s}`;

const FRQ_A = (code, who, oz) => `Parcel p = new Parcel("${code}", "${who}", ${oz});
int before = p.getOunces();
p.addItem(17);
String code = p.getCode();
int dash = code.indexOf("-");
String city = code.substring(0, dash);
String number = code.substring(dash + 1);
int pounds = p.getOunces() / 16;
int left = p.getOunces() % 16;
System.out.println("Parcel " + number + " for " + p.getReceiver() + " to " + city + ": " + pounds + " lb " + left + " oz");
System.out.println("Added: " + (p.getOunces() - before) + " oz");`;

const u1a = [
  { id: "u1a-01", skill: "arith", type: "mcq", topic: "1.3",
    stem: "A shop packs potions into bags that each hold the same number. Consider the following code segment.",
    code: `int potions = 38;
int perBag = 6;
int bags = potions / perBag;
int left = potions % perBag;
System.out.println(bags + " bags, " + left + " left");`,
    question: "What is printed?",
    choices: ["6 bags, 2 left", "6.33 bags, 2 left", "7 bags, 2 left", "6 bags, 4 left"], mono: true,
    why: [
      "`potions / perBag` is integer division: 38 / 6 is 6, with the remainder thrown away. `potions % perBag` is that remainder. Six bags hold 36 potions, so 2 are left.",
      "Both operands are `int`, so the division gives an `int`. The decimal part is gone; it is not printed.",
      "Integer division does not round up. 38 / 6 is 6, even though a seventh bag would be needed for the last 2 potions.",
      "4 is how many more potions would fill a seventh bag. `%` gives what is left over after the full bags, which is 2.",
    ],
    answer: 0,
    verify: { out: "6 bags, 2 left" } },

  { id: "u1a-02", skill: "arith", type: "mcq", topic: "1.3",
    stem: "Consider the following code segment.",
    code: `int hits = 7;
int tries = 2;
double rate = hits / tries;
System.out.println(rate * 2);`,
    question: "What is printed?",
    choices: ["6.0", "7.0", "6", "7"], mono: true,
    why: [
      "`hits / tries` is 7 / 2 with two `int` values, so it is 3 before anything is stored. Storing 3 in a `double` makes it 3.0, and 3.0 * 2 is 6.0.",
      "This would be right if `rate` held 3.5. The .5 was lost in the integer division, before the assignment.",
      "`rate` is a `double`, so `rate * 2` is a `double` and prints with a decimal point: 6.0.",
      "Two traps at once: the .5 is lost in the integer division, and a `double` always prints with a decimal point.",
    ],
    answer: 0,
    verify: { out: "6.0" } },

  { id: "u1a-03", skill: "arith", type: "mcq", topic: "1.3",
    stem: "Consider the following code segment.",
    code: `int code = 3946;
int a = code % 100;
int b = code / 100;
System.out.println(a + b);`,
    question: "What is printed?",
    choices: ["85", "4639", "85.46", "22"], mono: true,
    why: [
      "`code % 100` is the last two digits, 46. `code / 100` drops the last two digits, leaving 39. Both are `int`, so `a + b` adds them: 85.",
      "`a + b` adds two `int` values. `+` joins text only when one side is a String.",
      "3946 / 100 is integer division, so `b` is 39, not 39.46.",
      "22 is the sum of the four digits. `% 100` and `/ 100` work on two digits at a time.",
    ],
    answer: 0,
    verify: { out: "85" } },

  { id: "u1a-04", skill: "arith", type: "mcq", topic: "1.3",
    stem: "A vending machine gives change in quarters, dimes, and pennies. Consider the following code segment.",
    code: `int cents = 97;
int quarters = cents / 25;
cents = cents % 25;
int dimes = cents / 10;
System.out.println(quarters + " " + dimes + " " + cents % 10);`,
    question: "What is printed?",
    choices: ["3 2 2", "3 9 7", "3 2 7", "3.88 2.2 2"], mono: true,
    why: [
      "97 / 25 is 3 quarters. The next line changes `cents` to the remainder, 97 % 25, which is 22. Then 22 / 10 is 2 dimes, and 22 % 10 is 2 pennies.",
      "This uses 97 for the dimes and the pennies. The assignment `cents = cents % 25;` changed `cents` to 22 before those lines ran.",
      "The pennies come from `cents % 10` after `cents` became 22, so it is 22 % 10, which is 2.",
      "Every operand is an `int`, so every division is integer division. No decimal parts are printed.",
    ],
    answer: 0,
    verify: { out: "3 2 2" } },

  { id: "u1a-05", skill: "arith", type: "mcq", topic: "1.5",
    stem: "Consider the following code segment.",
    code: `double a = 7.5;
double b = -7.5;
System.out.println((int) a + " " + (int) b);`,
    question: "What is printed?",
    choices: ["7 -7", "8 -8", "7 -8", "7.5 -7.5"], mono: true,
    why: [
      "Casting a `double` to `int` truncates: it drops the decimal part. That moves toward 0 for both signs, so 7.5 becomes 7 and -7.5 becomes -7.",
      "A cast does not round. It only drops the decimal part. Adding 0.5 before the cast is how a positive value is rounded.",
      "Truncation drops the decimal part, so -7.5 becomes -7. It does not go down to the next lower integer.",
      "Each cast happens before its value is joined into the String, so each value prints as an `int`.",
    ],
    answer: 0,
    verify: { out: "7 -7" } },

  { id: "u1a-06", skill: "arith", type: "mcq", topic: "1.5",
    stem: "Consider the following code segment.",
    code: `double d = 2.6;
int a = (int) d * 3;
int b = (int) (d * 3);
System.out.println(a + " " + b);`,
    question: "What is printed?",
    choices: ["6 7", "7 7", "6 6", "7 8"], mono: true,
    why: [
      "A cast applies to the value right after it. In `a`, only `d` is cast, so it is 2 * 3, which is 6. In `b`, the parentheses make `d * 3` happen first, giving 7.8, and then the cast truncates it to 7.",
      "This treats both lines as casting `d * 3`. Without parentheses, `(int)` applies to `d` alone, so `a` is 2 * 3.",
      "In `b` the multiplication comes first, giving 7.8, and truncating 7.8 gives 7, not 6.",
      "A cast never rounds. `(int) d` is 2, so `a` is 6, and 7.8 truncates to 7.",
    ],
    answer: 0,
    verify: { out: "6 7" } },

  { id: "u1a-07", skill: "arith", type: "mcq", topic: "1.5",
    stem: "Consider the following code segment.",
    code: `int i = Integer.MAX_VALUE;
double d = Integer.MAX_VALUE;
i = i + 1;
d = d + 1;
System.out.println((i > 0) + " " + (d > 0));`,
    question: "What is the result of executing the code segment?",
    choices: ["false true is printed.", "true true is printed.", "false false is printed.", "An ArithmeticException is thrown."],
    why: [
      "An `int` has a fixed range. Adding 1 to `Integer.MAX_VALUE` overflows and wraps around to `Integer.MIN_VALUE`, which is negative. A `double` has a much larger range, so `d` simply becomes 2147483648.0, which is positive.",
      "`i` cannot hold a value above `Integer.MAX_VALUE`. Adding 1 wraps it around to the most negative `int`, so `i > 0` is false.",
      "Only the `int` overflows. A `double` can hold 2147483648.0 with no trouble, so `d > 0` is true.",
      "Java does not stop an `int` that overflows. The value wraps around with no error and no exception.",
    ],
    answer: 0,
    verify: { out: "false true" } },

  { id: "u1a-08", skill: "objects", type: "mcq", topic: "1.15",
    stem: "Consider the following code segment.",
    code: `String s = "skeleton";
int n = s.length();
System.out.println(s.substring(n - 3, n));`,
    question: "What is the result of executing the code segment?",
    choices: ["ton is printed.", "eton is printed.", "to is printed.", "A StringIndexOutOfBoundsException is thrown."],
    why: [
      "`n` is 8, so the call is `s.substring(5, 8)`. Index 5 is t, and the substring stops before index 8, so it holds t, o, n: the last three letters.",
      "`substring(5, 8)` starts at index 5. Indexes start at 0, so index 5 is t, not e.",
      "The end index is not included, but it is 8, one past the last index, so the n at index 7 is included.",
      "The end index of `substring` may equal `s.length()`. Only an end index above the length, or a start index after the end index, throws a `StringIndexOutOfBoundsException`.",
    ],
    answer: 0,
    verify: { out: "ton" } },

  { id: "u1a-09", skill: "objects", type: "mcq", topic: "1.15",
    stem: "Consider the following code segment.",
    code: `String route = "hall,crypt,tower";
String rest = route.substring(route.indexOf(",") + 1);
System.out.println(rest.substring(0, rest.indexOf(",")));`,
    question: "What is printed?",
    choices: ["crypt", "crypt,", "crypt,towe", "crypt,tower"], mono: true,
    why: [
      "The first comma in `route` is at index 4, so `rest` is `\"crypt,tower\"`. Positions inside `rest` start again at 0, so its comma is at index 5, and `rest.substring(0, 5)` is crypt.",
      "The end index is not included. `substring(0, 5)` stops before the comma at index 5.",
      "10 is where the second comma sits in `route`. Inside `rest` that comma is at index 5.",
      "`rest.indexOf(\",\")` finds the comma inside `rest`, so the substring stops there instead of running to the end.",
    ],
    answer: 0,
    verify: { out: "crypt" } },

  { id: "u1a-10", skill: "objects", type: "mcq", topic: "1.15",
    question: "Which of the following expressions evaluates to `false`?",
    choices: ['"Torch".equals("torch")', '"Torch".compareTo("torch") < 0', '"ax".compareTo("axe") < 0', '"torch".length() == 5'], mono: true,
    why: [
      "`equals` is case-sensitive. An uppercase T and a lowercase t are different characters, so the two Strings are not equal.",
      "Every uppercase letter comes before every lowercase letter, so `\"Torch\"` comes first and `compareTo` is negative. This one is true.",
      "ax matches axe letter for letter until ax runs out, so the shorter String comes first and `compareTo` is negative. This one is true.",
      "torch has 5 characters, so this one is true.",
    ],
    answer: 0,
    verify: { cases: [
      { run: 'System.out.println("Torch".equals("torch"));', out: "false" },
      { run: 'System.out.println("Torch".compareTo("torch") < 0);', out: "true" },
      { run: 'System.out.println("ax".compareTo("axe") < 0);', out: "true" },
      { run: 'System.out.println("torch".length() == 5);', out: "true" },
    ] } },

  { id: "u1a-11", skill: "objects", type: "mcq", topic: "1.15",
    stem: "Consider the following code segment.",
    code: `String name = "goblin";
name.substring(0, 3);
String tag = name.substring(3);
System.out.println(name + " " + tag);`,
    question: "What is printed?",
    choices: ["goblin lin", "gob lin", "gob ", "goblin blin"], mono: true,
    why: [
      "Strings are immutable. `name.substring(0, 3)` returns a new String, and this code throws it away, so `name` is still goblin. `name.substring(3)` starts at index 3, so `tag` is lin.",
      "Calling `substring` does not change `name`. Only an assignment such as `name = name.substring(0, 3);` would.",
      "If `name` had become gob, `tag` would be the empty String, since `substring(3)` on a 3-letter String has nothing left. But `name` never changed.",
      "`substring(3)` starts at index 3, and indexes start at 0, so index 3 is l, not b.",
    ],
    answer: 0,
    verify: { out: "goblin lin" } },

  { id: "u1a-12", skill: "objects", type: "mcq", topic: "1.13",
    stem: "Consider the following class. The code segment after it appears in another class.",
    classes: asTop(LANTERN),
    code: `Lantern x = new Lantern(10);
Lantern y = new Lantern(10);
Lantern z = y;
z.burn(3);
y.burn(2);
System.out.println(x.getOil() + " " + y.getOil() + " " + z.getOil());`,
    question: "What is printed?",
    choices: ["10 5 5", "10 8 7", "5 5 5", "10 7 7"], mono: true,
    why: [
      "`z = y` copies the reference, so `y` and `z` name the same object. That object loses 3 and then 2, ending at 5. `x` was made with its own `new`, so it is a separate object that still holds 10.",
      "This treats `z = y` as making a copy. No new object is created; `z` refers to the same object as `y`.",
      "`x` was created with its own `new`, so it is a different object. Calls through `y` and `z` never touch it.",
      "`y.burn(2)` changes the same object that `z` refers to, so both calls count: 10 minus 3 minus 2 is 5.",
    ],
    answer: 0,
    verify: { out: "10 5 5" } },

  { id: "u1a-13", skill: "objects", type: "mcq", topic: "1.13",
    stem: "Consider the `Lantern` class. The code segment after it appears in another class.",
    classes: asTop(LANTERN),
    code: `Lantern a = new Lantern(8);
Lantern b = a;
a = null;
b.burn(3);
System.out.println(b.getOil());`,
    question: "What is the result of executing the code segment?",
    choices: ["5 is printed.", "A NullPointerException is thrown.", "8 is printed.", "The code segment does not compile."],
    why: [
      "`b = a` makes `b` refer to the same object as `a`. Setting `a` to `null` changes only the variable `a`; the object still exists, and `b` still refers to it. Burning 3 leaves 5.",
      "Only `a` is `null`. The code calls methods through `b`, which still refers to the object, so no `NullPointerException` is thrown.",
      "`b.burn(3)` runs on the object, which `b` still refers to, so its oil drops from 8 to 5.",
      "Assigning `null` to a reference variable such as `a` is legal, and `burn` and `getOil` are called with the right arguments.",
    ],
    answer: 0,
    verify: { out: "5" } },

  { id: "u1a-14", skill: "objects", type: "mcq", topic: "1.13",
    stem: "A class `Torch` has the following constructor.",
    code: "public Torch(String color, int hours, double weight)",
    question: "Which of the following statements correctly creates a `Torch` object?",
    choices: ['Torch t = new Torch("red", 6, 2);', 'Torch t = new Torch("red", 6.0, 2.5);', 'Torch t = new Torch(red, 6, 2.5);', 'Torch t = new Torch("red", 6);'], mono: true,
    why: [
      "The arguments match the parameters in order: a String, an `int`, then a `double`. The `int` 2 can be passed to the `double` parameter `weight`, because an `int` widens to a `double` with no loss.",
      "6.0 is a `double`, and a `double` cannot be passed to the `int` parameter `hours`. The compiler reports `possible lossy conversion from double to int`.",
      "Without quotation marks, `red` is the name of a variable, and no such variable exists. The compiler reports `cannot find symbol`.",
      "The constructor has three parameters, so the call must pass three arguments. The compiler reports `constructor Torch in class Torch cannot be applied to given types`.",
    ],
    answer: 0,
    verify: { classes: TORCH, cases: [
      { run: A14('Torch t = new Torch("red", 6, 2);'), out: "created" },
      { run: A14('Torch t = new Torch("red", 6.0, 2.5);'), error: "possible lossy conversion from double to int" },
      { run: A14('Torch t = new Torch(red, 6, 2.5);'), error: "cannot find symbol" },
      { run: A14('Torch t = new Torch("red", 6);'), error: "constructor Torch in class Torch cannot be applied to given types" },
    ] } },

  { id: "u1a-15", skill: "objects", type: "mcq", topic: "1.11",
    question: "Which of the following statements does **not** compile?",
    choices: ["int r = Math.abs(-2.5);", "double r = Math.abs(-3);", "double r = Math.pow(2, 0.5);", "int r = (int) Math.sqrt(10);"], mono: true,
    why: [
      "-2.5 is a `double`, so `Math.abs(-2.5)` calls the version of `abs` that returns a `double`. A `double` cannot be stored in an `int` without a cast: `incompatible types: possible lossy conversion from double to int`.",
      "`Math.abs(-3)` returns the `int` 3, and an `int` can be stored in a `double` variable. It compiles.",
      "`Math.pow` takes two `double` values and returns a `double`, so storing the result in a `double` compiles.",
      "`Math.sqrt` returns a `double`, and the cast turns it into an `int` before it is stored. It compiles.",
    ],
    answer: 0,
    verify: { cases: [
      { run: "int r = Math.abs(-2.5);", error: "incompatible types: possible lossy conversion from double to int" },
      { run: "double r = Math.abs(-3);\nSystem.out.println(r);", out: "3.0" },
      { run: "double r = Math.pow(2, 0.5);\nSystem.out.println(r > 1.41);", out: "true" },
      { run: "int r = (int) Math.sqrt(10);\nSystem.out.println(r);", out: "3" },
    ] } },

  { id: "u1a-16", skill: "objects", type: "mcq", topic: "1.14",
    stem: "Consider the `Lantern` class. Assume `Lantern lamp = new Lantern(12);` has been executed.",
    classes: asTop(LANTERN),
    question: "Which of the following statements compiles?",
    choices: ["System.out.println(lamp.getOil() - 1);", "int left = lamp.burn(4);", "lamp.getOil(4);", "Lantern.burn(4);"], mono: true,
    why: [
      "`getOil` takes no arguments and returns an `int`, so `lamp.getOil() - 1` is an `int` expression that can be printed.",
      "`burn` is `void`, so it returns nothing to store: `incompatible types: void cannot be converted to int`.",
      "`getOil` has no parameters, so it cannot be called with an argument.",
      "`burn` is an instance method, so it must be called on an object such as `lamp`, not on the class: `non-static method burn(int) cannot be referenced from a static context`.",
    ],
    answer: 0,
    verify: { cases: [
      { run: A16("System.out.println(lamp.getOil() - 1);"), out: "11" },
      { run: A16("int left = lamp.burn(4);"), error: "incompatible types: void cannot be converted to int" },
      { run: A16("lamp.getOil(4);"), error: "method getOil in class Lantern cannot be applied to given types" },
      { run: A16("Lantern.burn(4);"), error: "non-static method burn(int) cannot be referenced from a static context" },
    ] } },

  { id: "u1a-17", skill: "objects", type: "mcq", topic: "1.9",
    stem: "A class contains the following method.",
    methods: AVERAGE,
    question: "Which of the following statements, appearing in the same class, compiles?",
    choices: ["double avg = average(3, 4, 5);", "int avg = average(3, 4, 5);", "double avg = average(3, 4);", "double avg = average(3, 4, 5.0);"], mono: true,
    why: [
      "The call passes three `int` values, matching the three `int` parameters in order, and the `double` result is stored in a `double`.",
      "`average` returns a `double`, which cannot be stored in an `int` without a cast: `incompatible types: possible lossy conversion from double to int`.",
      "The method has three parameters, so every call must pass three arguments.",
      "5.0 is a `double`, and the parameter `c` is an `int`. A `double` cannot be passed where an `int` is expected: `possible lossy conversion from double to int`.",
    ],
    answer: 0,
    verify: { cases: [
      { methods: AVERAGE, run: "double avg = average(3, 4, 5);\nSystem.out.println(avg);", out: "4.0" },
      { methods: AVERAGE, run: "int avg = average(3, 4, 5);", error: "incompatible types: possible lossy conversion from double to int" },
      { methods: AVERAGE, run: "double avg = average(3, 4);", error: "cannot be applied to given types" },
      { methods: AVERAGE, run: "double avg = average(3, 4, 5.0);", error: "possible lossy conversion from double to int" },
    ] } },

  { id: "u1a-18", skill: "objects", type: "mcq", topic: "1.11",
    stem: "A game rolls a value with the following statement.",
    code: "int roll = (int) (Math.random() * 6) + 2;",
    question: "Which of the following best describes the possible values of `roll`?",
    choices: ["Every integer from 2 to 7, inclusive", "Every integer from 2 to 8, inclusive", "Every integer from 3 to 8, inclusive", "Every number from 2.0 up to but not including 8.0"],
    why: [
      "`Math.random()` is at least 0.0 and less than 1.0, so `Math.random() * 6` is at least 0.0 and less than 6.0. The cast truncates that to an integer from 0 to 5, and adding 2 gives 2 to 7.",
      "`Math.random()` is always less than 1.0, so `Math.random() * 6` never reaches 6.0, and the cast never gives 6. The largest value is 5 + 2.",
      "`Math.random()` can be 0.0, so the cast can give 0, and the smallest value is 0 + 2.",
      "The cast to `int` truncates, and `roll` is an `int`, so only whole numbers are possible.",
    ],
    answer: 0,
    verify: { cases: [
      { run: sampler("(int) (Math.random() * 6) + 2"), out: "2 7" },
    ] } },

  { id: "u1a-19", skill: "objects", type: "mcq", topic: "1.11",
    stem: "Consider the following code segment.",
    code: `double d = Math.sqrt(Math.pow(3, 2) + Math.pow(4, 2));
System.out.println(d + Math.abs(-1));`,
    question: "What is printed?",
    choices: ["6.0", "6", "8.0", "26.0"], mono: true,
    why: [
      "`Math.pow(3, 2)` is 9.0 and `Math.pow(4, 2)` is 16.0, so `Math.sqrt` gets 25.0 and returns 5.0. `Math.abs(-1)` is 1, and a `double` plus an `int` is a `double`: 6.0.",
      "`d` is a `double`, so `d + Math.abs(-1)` is a `double` and prints with a decimal point.",
      "The square root is taken of the sum, 25.0, not of each part. The square root of 9.0 plus the square root of 16.0 would be 7.0, and 8.0 with the 1.",
      "26.0 leaves out `Math.sqrt`. It applies to 9.0 + 16.0, giving 5.0.",
    ],
    answer: 0,
    verify: { out: "6.0" } },

  { id: "u1a-20", skill: "types", type: "mcq", topic: "1.3",
    stem: "Consider the following code segment.",
    code: `int gold = 3;
int gems = 4;
System.out.println(gold + gems + " loot, " + gold * gems + gold + gems);`,
    question: "What is printed?",
    choices: ["7 loot, 1234", "7 loot, 19", "34 loot, 1234", "34 loot, 19"], mono: true,
    why: [
      "`+` runs left to right. `gold + gems` comes first, while both sides are `int`, so it is 7. After `\" loot, \"` the left side is a String, so each `+` joins. `*` runs before `+`, so 12 is joined, then 3, then 4.",
      "Once the left side is a String, `+` joins text instead of adding, so 12, 3, and 4 are joined: 1234.",
      "The first `+` has an `int` on each side, so it adds: 3 + 4 is 7. Joining starts only when a String appears.",
      "Both halves are reversed: the first `+` adds two `int` values, and each `+` after the String joins.",
    ],
    answer: 0,
    verify: { out: "7 loot, 1234" } },

  { id: "u1a-frq", skill: "frq", type: "code", topic: "1.14", title: "Parcel",
    prompt: "The `Parcel` class below represents a parcel at a shipping office. You will use it; you do not write any of it. A parcel's code is a city code, a dash, and a number, such as `\"LAX-0732\"`. There are 16 ounces in a pound.\n\nWrite a code segment, to appear in a `main` method in another class, that does the following.\n\n1. Creates a `Parcel` with the code `\"LAX-0732\"`, for `\"Kim\"`, weighing `50` ounces.\n2. Remembers the parcel's weight before anything is added.\n3. Adds an item that weighs `17` ounces to the parcel.\n4. Uses `String` methods on the parcel's code to get the city code (everything before the dash) and the number (everything after the dash). Your code must work for any code in this form, such as `\"SF-12\"`.\n5. Uses `/` and `%` on the new weight to find the whole pounds and the ounces left over.\n6. Prints exactly the two lines shown in the example, using the `Parcel` methods for the receiver and the weight.\n\nDo not write any methods. Use only `String` methods from the Java Quick Reference.",
    given: PARCEL,
    classes: asTop(PARCEL),
    sample: "The code segment prints\n\nParcel 0732 for Kim to LAX: 4 lb 3 oz\nAdded: 17 oz",
    rows: [
      { name: "Creates the parcel", earns: "Creates a `Parcel` with `new` and the three arguments in order (String, String, `int`), stored in a `Parcel` variable." },
      { name: "Saves the starting weight", earns: "Stores the value of `getOunces()` in a variable **before** calling `addItem`." },
      { name: "Adds the item", earns: "Calls `addItem(17)` on the parcel object (not on the class, and not assigned to a variable)." },
      { name: "Finds the dash", earns: "Gets the code with `getCode()` and finds the dash with `indexOf(\"-\")`, not a typed-in position such as 3." },
      { name: "Splits the code", earns: "Gets the city code with `substring(0, dash)` and the number with `substring(dash + 1)`, or equivalent code that works for any code in this form." },
      { name: "Converts the weight", earns: "Computes the pounds as the new weight `/ 16` and the leftover ounces as the new weight `% 16`, using `getOunces()` after the item was added." },
      { name: "Prints the two lines", earns: "Prints both lines in the exact format, with `getReceiver()` rather than a typed-in name, and the added weight computed as the current `getOunces()` minus the stored starting weight." },
    ],
    notes: "One point for each row. Award a row for what the code actually does; ignore small typing slips such as a missing semicolon. Typed-in results such as `\"LAX\"`, `\"0732\"`, `4`, or `3` do not earn rows 4 through 7. Reading the weight after `addItem` for the starting weight prints `Added: 0 oz` and does not earn the Saves the starting weight row. `int w = p.addItem(17);` does not compile, because `addItem` is `void`, and does not earn the Adds the item row. `substring(4)` or `substring(0, 3)` works for `\"LAX-0732\"` only and does not earn the Splits the code row. Using `charAt` or `split` does not earn the Splits the code row.",
    solution: FRQ_A("LAX-0732", "Kim", 50),
    verify: { cases: [
      { run: FRQ_A("LAX-0732", "Kim", 50), out: "Parcel 0732 for Kim to LAX: 4 lb 3 oz\nAdded: 17 oz" },
      { run: FRQ_A("SF-12", "Ruiz", 30), out: "Parcel 12 for Ruiz to SF: 2 lb 15 oz\nAdded: 17 oz" },
      { run: FRQ_A("NYC-5", "Ito", 15), out: "Parcel 5 for Ito to NYC: 2 lb 0 oz\nAdded: 17 oz" },
    ] } },
];

// ---------- Unit 1 Test Practice B ----------

const B14 = (s) => `${s}\nSystem.out.println("created");`;
const B16 = (s) => `Bucket b = new Bucket(5);\n${s}`;
const B18 = `int low = 4;
int high = 9;
int damage = /* expression */;`;
const B18_KEY = "(int) (Math.random() * (high - low + 1)) + low";
const B18_B = "(int) (Math.random() * (high - low)) + low";
const B18_C = "(int) (Math.random() * high) + low";
const B18_D = "(int) Math.random() * (high - low + 1) + low";
const b18 = (expr) => `int low = 4;\nint high = 9;\n${sampler(expr)}`;

const FRQ_B = (name, pts, games) => `Player p = new Player("${name}", ${pts}, ${games});
int before = p.getPoints();
p.playGame(19);
String name = p.getName();
int comma = name.indexOf(",");
String last = name.substring(0, comma);
String initial = name.substring(comma + 2, comma + 3);
double perGame = (double) p.getPoints() / p.getGames();
System.out.println(initial + ". " + last + ": " + perGame + " points per game");
System.out.println("Gained: " + (p.getPoints() - before));`;

const u1b = [
  { id: "u1b-01", skill: "arith", type: "mcq", topic: "1.3",
    stem: "A coach splits students into teams of the same size. Consider the following code segment.",
    code: `int students = 29;
int perTeam = 4;
System.out.println("Teams: " + students / perTeam + ", extra: " + students % perTeam);`,
    question: "What is printed?",
    choices: ["Teams: 7, extra: 1", "Teams: 7.25, extra: 1", "Teams: 8, extra: 1", "Teams: 7, extra: 3"], mono: true,
    why: [
      "`/` and `%` run before `+`, so the numbers are computed before they are joined. 29 / 4 is integer division, 7, and 29 % 4 is the remainder, 1.",
      "Both operands are `int`, so the division gives an `int`. The .25 is gone; it is not printed.",
      "Integer division does not round up. 29 / 4 is 7, even though an eighth team would be needed for the extra student.",
      "3 is how many more students would fill an eighth team. `%` gives what is left over after the full teams, which is 1.",
    ],
    answer: 0,
    verify: { out: "Teams: 7, extra: 1" } },

  { id: "u1b-02", skill: "arith", type: "mcq", topic: "1.3",
    stem: "Consider the following code segment.",
    code: `int coins = 11;
double half = coins / 2;
System.out.println(half + 0.5);`,
    question: "What is printed?",
    choices: ["5.5", "6.0", "5", "6"], mono: true,
    why: [
      "`coins / 2` is 11 / 2 with two `int` values, so it is 5 before anything is stored. Storing 5 in a `double` makes it 5.0, and 5.0 + 0.5 is 5.5.",
      "This would be right if `half` held 5.5. The .5 was lost in the integer division, before the assignment.",
      "`half + 0.5` is a `double`, so it keeps its decimal part and prints 5.5.",
      "A `double` always prints with a decimal point, and the .5 from 11 / 2 was already lost in the integer division.",
    ],
    answer: 0,
    verify: { out: "5.5" } },

  { id: "u1b-03", skill: "arith", type: "mcq", topic: "1.3",
    stem: "Consider the following code segment.",
    code: `int n = 5172;
int last = n % 10;
int first = n / 1000;
System.out.println(last * 10 + first);`,
    question: "What is printed?",
    choices: ["25", "52", "7", "25.172"], mono: true,
    why: [
      "`n % 10` is the last digit, 2. `n / 1000` drops the last three digits, leaving 5. Then 2 * 10 + 5 is 25.",
      "52 puts the first digit in the tens place. The code multiplies `last`, the 2, by 10.",
      "7 is 2 + 5. The `* 10` moves the 2 into the tens place first.",
      "5172 / 1000 is integer division, so `first` is 5, not 5.172.",
    ],
    answer: 0,
    verify: { out: "25" } },

  { id: "u1b-04", skill: "arith", type: "mcq", topic: "1.3",
    stem: "A race timer turns a number of seconds into hours, minutes, and seconds. Consider the following code segment.",
    code: `int seconds = 4000;
int hours = seconds / 3600;
seconds %= 3600;
int minutes = seconds / 60;
System.out.println(hours + " " + minutes + " " + seconds % 60);`,
    question: "What is printed?",
    choices: ["1 6 40", "1 66 40", "1 6 400", "1.11 6.67 40"], mono: true,
    why: [
      "4000 / 3600 is 1. `seconds %= 3600` changes `seconds` to the remainder, 400. Then 400 / 60 is 6, and 400 % 60 is 40.",
      "This uses 4000 for the minutes. `seconds %= 3600` changed `seconds` to 400 before that line ran, so the minutes are 400 / 60.",
      "The last value printed is `seconds % 60`, not `seconds`, so it is the 40 seconds left after the 6 full minutes.",
      "Every operand is an `int`, so every division is integer division. No decimal parts are printed.",
    ],
    answer: 0,
    verify: { out: "1 6 40" } },

  { id: "u1b-05", skill: "arith", type: "mcq", topic: "1.5",
    stem: "Consider the following code segment.",
    code: `double h = 9.6;
double k = -2.3;
System.out.println((int) h + (int) k);`,
    question: "What is printed?",
    choices: ["7", "8", "6", "7.3"], mono: true,
    why: [
      "Each cast truncates. `(int) h` is 9, and `(int) k` is -2, since truncation moves toward 0. Both are `int`, so the sum is the `int` 7.",
      "A cast does not round. 9.6 truncates to 9, not 10.",
      "Truncation drops the decimal part, so -2.3 becomes -2. It does not go down to -3.",
      "Each value is cast before the addition, so two `int` values are added and the result is an `int`.",
    ],
    answer: 0,
    verify: { out: "7" } },

  { id: "u1b-06", skill: "arith", type: "mcq", topic: "1.5",
    stem: "Consider the following code segment.",
    code: `double total = 19.0;
int people = 4;
int each = (int) total / people;
double exact = total / people;
System.out.println(each + " " + exact);`,
    question: "What is printed?",
    choices: ["4 4.75", "4.75 4.75", "4 4.0", "5 4.75"], mono: true,
    why: [
      "The cast applies to `total` alone, so `each` is 19 / 4 with two `int` values: 4. In `exact`, `total` is a `double`, so the division keeps its decimal part: 4.75.",
      "`each` is an `int`, so it cannot hold 4.75. After the cast, the division is between two `int` values.",
      "`total` is a `double` in the second division, so `total / people` is not integer division.",
      "Integer division drops the decimal part. It does not round 4.75 up to 5.",
    ],
    answer: 0,
    verify: { out: "4 4.75" } },

  { id: "u1b-07", skill: "arith", type: "mcq", topic: "1.5",
    stem: "Consider the following code segment.",
    code: `int side = 50000;
int area = side * side;
double bigArea = (double) side * side;
System.out.println((area < 0) + " " + (bigArea < 0));`,
    question: "What is the result of executing the code segment?",
    choices: ["true false is printed.", "false false is printed.", "true true is printed.", "An ArithmeticException is thrown."],
    why: [
      "50000 * 50000 is 2,500,000,000, which is more than `Integer.MAX_VALUE`. The `int` product overflows and wraps around to a negative number. With the cast, the multiplication is done with a `double`, which can hold 2,500,000,000.",
      "An `int` cannot hold 2,500,000,000. The product overflows and wraps around to a negative number, so `area < 0` is true.",
      "The cast makes `side` a `double` before the multiplication, so `bigArea` is 2,500,000,000.0, which is positive.",
      "Java does not stop an `int` that overflows. The value wraps around with no error and no exception.",
    ],
    answer: 0,
    verify: { out: "true false" } },

  { id: "u1b-08", skill: "objects", type: "mcq", topic: "1.15",
    stem: "Consider the following code segment.",
    code: `String s = "wizard";
System.out.println(s.substring(2) + s.substring(0, 1));`,
    question: "What is printed?",
    choices: ["zardw", "izardw", "zardwi", "wzard"], mono: true,
    why: [
      "`s.substring(2)` starts at index 2, the z, and runs to the end: zard. `s.substring(0, 1)` is the single letter at index 0, w. Joined, they make zardw.",
      "Indexes start at 0, so index 2 is z. Starting at the i would be `substring(1)`.",
      "`substring(0, 1)` stops before index 1, so it holds only the w.",
      "The pieces are joined in the order they are written: `s.substring(2)` first, then `s.substring(0, 1)`.",
    ],
    answer: 0,
    verify: { out: "zardw" } },

  { id: "u1b-09", skill: "objects", type: "mcq", topic: "1.15",
    stem: "Consider the following code segment.",
    code: `String msg = "go left then up";
String tail = msg.substring(msg.indexOf(" ") + 1);
System.out.println(tail.indexOf("then") + " " + tail.indexOf("go"));`,
    question: "What is printed?",
    choices: ["5 -1", "8 -1", "5 0", "8 0"], mono: true,
    why: [
      "The first space in `msg` is at index 2, so `tail` is `\"left then up\"`. Positions inside `tail` start again at 0, so then begins at index 5. go is not in `tail`, so `indexOf` returns -1.",
      "8 is where then begins in `msg`. Inside `tail` it begins at index 5.",
      "go was at index 0 of `msg`, but `tail` starts after the first space, so go is not in it. `indexOf` returns -1 when the String is not found.",
      "Both numbers are positions in `msg`. The code calls `indexOf` on `tail`, where then begins at index 5 and go does not appear.",
    ],
    answer: 0,
    verify: { out: "5 -1" } },

  { id: "u1b-10", skill: "objects", type: "mcq", topic: "1.15",
    question: "Which of the following expressions evaluates to `true`?",
    choices: ['"10".compareTo("9") < 0', '"dragon".compareTo("Dragon") < 0', '"ab".compareTo("abc") > 0', '"orc".equals("Orc")'], mono: true,
    why: [
      "`compareTo` compares Strings character by character, not as numbers. The first characters are 1 and 9, and 1 comes before 9, so `\"10\"` comes first and the result is negative.",
      "Every uppercase letter comes before every lowercase letter, so `\"Dragon\"` comes first, and `\"dragon\".compareTo(\"Dragon\")` is positive.",
      "ab matches abc letter for letter until ab runs out, so the shorter String comes first and `compareTo` is negative, not positive.",
      "`equals` is case-sensitive, so orc and Orc are not equal.",
    ],
    answer: 0,
    verify: { cases: [
      { run: 'System.out.println("10".compareTo("9") < 0);', out: "true" },
      { run: 'System.out.println("dragon".compareTo("Dragon") < 0);', out: "false" },
      { run: 'System.out.println("ab".compareTo("abc") > 0);', out: "false" },
      { run: 'System.out.println("orc".equals("Orc"));', out: "false" },
    ] } },

  { id: "u1b-11", skill: "objects", type: "mcq", topic: "1.15",
    stem: "Consider the following code segment.",
    code: `String s = "potion";
String t = s;
s = s.substring(3);
System.out.println(s + " " + t);`,
    question: "What is printed?",
    choices: ["ion potion", "ion ion", "potion potion", "tion potion"], mono: true,
    why: [
      "`t = s` makes `t` refer to the String potion. Strings are immutable, so `s.substring(3)` builds a new String, ion, and the assignment points `s` at it. `t` still refers to potion.",
      "The assignment changes only the variable `s`. `t` keeps referring to the original String, which cannot be changed.",
      "This time the new String is assigned back to `s`, so `s` changes to ion.",
      "`substring(3)` starts at index 3, and indexes start at 0, so index 3 is i, not t.",
    ],
    answer: 0,
    verify: { out: "ion potion" } },

  { id: "u1b-12", skill: "objects", type: "mcq", topic: "1.13",
    stem: "Consider the following class. The code segment after it appears in another class.",
    classes: asTop(BUCKET),
    code: `Bucket a = new Bucket(2);
Bucket b = a;
a = new Bucket(6);
b.fill(3);
System.out.println(a.getLiters() + " " + b.getLiters());`,
    question: "What is printed?",
    choices: ["6 5", "9 9", "5 5", "6 2"], mono: true,
    why: [
      "`b = a` makes `b` refer to the bucket that holds 2. Then `a = new Bucket(6)` points `a` at a new object, while `b` still refers to the first one. `b.fill(3)` changes the first bucket to 5.",
      "`b` does not follow `a` to the new object. Assigning to `a` changes only the variable `a`, so `b` still refers to the bucket that started at 2.",
      "After `a = new Bucket(6)`, `a` refers to a different object, one that holds 6. `a` and `b` no longer name the same bucket.",
      "`b.fill(3)` changes the object that `b` refers to, so that bucket goes from 2 to 5.",
    ],
    answer: 0,
    verify: { out: "6 5" } },

  { id: "u1b-13", skill: "objects", type: "mcq", topic: "1.13",
    stem: "Consider the `Bucket` class. The code segment after it appears in another class.",
    classes: asTop(BUCKET),
    code: `Bucket b = new Bucket(4);
Bucket c = null;
b.fill(1);
c = b;
b = null;
System.out.println(c.getLiters() + " " + b.getLiters());`,
    question: "What is the result of executing the code segment?",
    choices: ["Nothing is printed. A NullPointerException is thrown.", "5 0 is printed.", "5 is printed, and then a NullPointerException is thrown.", "The code segment does not compile."],
    why: [
      "`c = b` makes `c` refer to the bucket, and then `b` is set to `null`. Before `println` runs, its whole argument is computed, and `b.getLiters()` calls a method on `null`. A `NullPointerException` is thrown, so nothing is printed.",
      "A `null` reference does not act like an object that holds 0. Calling `getLiters` on `b`, which is `null`, throws a `NullPointerException`.",
      "`println` prints only after its whole argument has been computed. The exception happens while computing it, so the 5 is never printed.",
      "The code compiles: `b` and `c` have type `Bucket`, so the calls are legal. The problem shows up only when the code runs.",
    ],
    answer: 0,
    verify: { throws: "NullPointerException" } },

  { id: "u1b-14", skill: "objects", type: "mcq", topic: "1.13",
    stem: "A class `Recipe` has the following constructor.",
    code: "public Recipe(String title, int servings, boolean vegan)",
    question: "Which of the following statements correctly creates a `Recipe` object?",
    choices: ['Recipe r = new Recipe("Chili", 4, false);', 'Recipe r = new Recipe("Chili", 4.0, false);', 'Recipe r = new Recipe("Chili", 4, "false");', 'Recipe r = Recipe("Chili", 4, false);'], mono: true,
    why: [
      "The constructor is called with `new`, and the arguments match the parameters in order and type: a String, an `int`, then a `boolean`.",
      "4.0 is a `double`, and a `double` cannot be passed to the `int` parameter `servings`. The compiler reports `possible lossy conversion from double to int`.",
      "`\"false\"` in quotation marks is a String, not a `boolean`, so it does not fit the `boolean` parameter `vegan`: `String cannot be converted to boolean`.",
      "A constructor is called with `new`. Without it, the compiler looks for a method named `Recipe` and reports `cannot find symbol`.",
    ],
    answer: 0,
    verify: { classes: RECIPE, cases: [
      { run: B14('Recipe r = new Recipe("Chili", 4, false);'), out: "created" },
      { run: B14('Recipe r = new Recipe("Chili", 4.0, false);'), error: "possible lossy conversion from double to int" },
      { run: B14('Recipe r = new Recipe("Chili", 4, "false");'), error: "String cannot be converted to boolean" },
      { run: B14('Recipe r = Recipe("Chili", 4, false);'), error: "cannot find symbol" },
    ] } },

  { id: "u1b-15", skill: "objects", type: "mcq", topic: "1.11",
    question: "Which of the following statements does **not** compile?",
    choices: ["int r = Math.random() * 10;", "int r = (int) Math.pow(3, 2);", "double r = Math.abs(-7);", "double r = Math.sqrt(2) * 2;"], mono: true,
    why: [
      "`Math.random()` returns a `double`, and a `double` times an `int` is still a `double`. A `double` cannot be stored in an `int` without a cast: `incompatible types: possible lossy conversion from double to int`.",
      "`Math.pow` returns a `double`, and the cast turns it into an `int` before it is stored. It compiles.",
      "`Math.abs(-7)` returns the `int` 7, and an `int` can be stored in a `double` variable. It compiles.",
      "`Math.sqrt` returns a `double`, and a `double` times an `int` is a `double`, so storing it in a `double` compiles.",
    ],
    answer: 0,
    verify: { cases: [
      { run: "int r = Math.random() * 10;", error: "incompatible types: possible lossy conversion from double to int" },
      { run: "int r = (int) Math.pow(3, 2);\nSystem.out.println(r);", out: "9" },
      { run: "double r = Math.abs(-7);\nSystem.out.println(r);", out: "7.0" },
      { run: "double r = Math.sqrt(2) * 2;\nSystem.out.println(r > 2.8);", out: "true" },
    ] } },

  { id: "u1b-16", skill: "objects", type: "mcq", topic: "1.14",
    stem: "Consider the `Bucket` class. Assume `Bucket b = new Bucket(5);` has been executed.",
    classes: asTop(BUCKET),
    question: "Which of the following statements does **not** compile?",
    choices: ["boolean full = b.fill(10);", "b.fill(b.getLiters());", "double d = b.getLiters();", "System.out.println(b.getLiters() + 1);"], mono: true,
    why: [
      "`fill` is `void`, so it returns nothing to store: `incompatible types: void cannot be converted to boolean`.",
      "`b.getLiters()` returns an `int`, which is the right type for the argument to `fill`. It compiles.",
      "`getLiters` returns an `int`, and an `int` can be stored in a `double` variable. It compiles.",
      "`b.getLiters() + 1` is an `int` expression, and it can be printed. It compiles.",
    ],
    answer: 0,
    verify: { cases: [
      { run: B16("boolean full = b.fill(10);"), error: "incompatible types: void cannot be converted to boolean" },
      { run: B16("b.fill(b.getLiters());\nSystem.out.println(b.getLiters());"), out: "10" },
      { run: B16("double d = b.getLiters();\nSystem.out.println(d);"), out: "5.0" },
      { run: B16("System.out.println(b.getLiters() + 1);"), out: "6" },
    ] } },

  { id: "u1b-17", skill: "objects", type: "mcq", topic: "1.9",
    stem: "A class contains the following method.",
    methods: COST,
    question: "Which of the following statements, appearing in the same class, compiles?",
    choices: ["double c = cost(3, 2.5);", "int c = cost(2.5, 3);", "int c = cost(3);", "String c = cost(3, 2.5);"], mono: true,
    why: [
      "The arguments match the parameters in order: the `int` 3, then the `double` 2.5. The method returns an `int`, and an `int` can be stored in a `double` variable.",
      "The arguments are in the wrong order. 2.5 is a `double`, and it cannot be passed to the `int` parameter `count`: `possible lossy conversion from double to int`.",
      "The method has two parameters, so every call must pass two arguments.",
      "The method returns an `int`, and an `int` cannot be stored in a `String` variable: `incompatible types: int cannot be converted to String`.",
    ],
    answer: 0,
    verify: { cases: [
      { methods: COST, run: "double c = cost(3, 2.5);\nSystem.out.println(c);", out: "7.0" },
      { methods: COST, run: "int c = cost(2.5, 3);", error: "possible lossy conversion from double to int" },
      { methods: COST, run: "int c = cost(3);", error: "cannot be applied to given types" },
      { methods: COST, run: "String c = cost(3, 2.5);", error: "incompatible types: int cannot be converted to String" },
    ] } },

  { id: "u1b-18", skill: "objects", type: "mcq", topic: "1.11",
    stem: "A trap does a random amount of damage from `low` to `high`, inclusive. Consider the following code segment.",
    code: B18,
    question: "Which of the following can replace `/* expression */` so that `damage` is a random integer from `low` to `high`, inclusive, with every value possible?",
    choices: [B18_KEY, B18_B, B18_C, B18_D], mono: true,
    why: [
      "From 4 to 9 inclusive there are `high - low + 1` values, which is 6. `(int) (Math.random() * 6)` is 0 through 5, and adding `low` gives 4 through 9.",
      "`high - low` is 5, so the cast gives 0 through 4, and the largest value is 8. The `+ 1` is needed to include `high`.",
      "`(int) (Math.random() * high)` is 0 through 8, so adding `low` gives values up to 12, past `high`.",
      "The cast applies to `Math.random()` alone, which is always less than 1.0, so the cast always gives 0, and `damage` is always 4.",
    ],
    answer: 0,
    verify: { cases: [
      { run: b18(B18_KEY), out: "4 9" },
      { run: b18(B18_B), out: "4 8" },
      { run: b18(B18_C), out: "4 12" },
      { run: b18(B18_D), out: "4 4" },
      { run: fill(B18, "/* expression */", B18_KEY), out: "" },
    ] } },

  { id: "u1b-19", skill: "objects", type: "mcq", topic: "1.11",
    stem: "Consider the following code segment.",
    code: `int a = 7;
int b = 10;
System.out.println(Math.abs(a - b) + Math.pow(2, 3));`,
    question: "What is printed?",
    choices: ["11.0", "11", "5.0", "9.0"], mono: true,
    why: [
      "`Math.abs(a - b)` is the absolute value of -3, which is the `int` 3. `Math.pow(2, 3)` is 2 to the third power, the `double` 8.0. An `int` plus a `double` is a `double`: 11.0.",
      "`Math.pow` always returns a `double`, so the sum is a `double` and prints with a decimal point.",
      "`Math.abs` turns -3 into 3. 5.0 is -3 + 8.0, as if `Math.abs` were not there.",
      "`Math.pow(2, 3)` is 2 * 2 * 2, which is 8.0, not 2 * 3.",
    ],
    answer: 0,
    verify: { out: "11.0" } },

  { id: "u1b-20", skill: "types", type: "mcq", topic: "1.3",
    stem: "Consider the following code segment.",
    code: `int a = 6;
int b = 2;
System.out.println(a / b + " " + a + b + (a - b));`,
    question: "What is printed?",
    choices: ["3 624", "3 84", "3 12", "3.0 624"], mono: true,
    why: [
      "`a / b` runs first, while both sides are `int`: 3. After `\" \"` the left side is a String, so each `+` joins: 6, then 2, then the value in the parentheses, 4.",
      "Once the left side is a String, `+` joins instead of adding, so `a` and then `b` give 62, not 8.",
      "Only the parentheses force arithmetic after the String. `a` and `b` are joined one at a time.",
      "`a / b` divides two `int` values, so it is the `int` 3, which prints with no decimal point.",
    ],
    answer: 0,
    verify: { out: "3 624" } },

  { id: "u1b-frq", skill: "frq", type: "code", topic: "1.14", title: "Player",
    prompt: "The `Player` class below represents a player on a basketball team. You will use it; you do not write any of it. A player's name is the last name, a comma, a space, and the first name, such as `\"Lopez, Maria\"`.\n\nWrite a code segment, to appear in a `main` method in another class, that does the following.\n\n1. Creates a `Player` named `\"Lopez, Maria\"` who has scored `52` points in `4` games.\n2. Remembers the player's points before the next game.\n3. Records a game in which the player scored `19` points.\n4. Uses `String` methods on the player's name to get the last name (everything before the comma) and the first initial (the first letter after the comma and the space). Your code must work for any name in this form, such as `\"Chen, Li\"`.\n5. Computes the points per game as a `double`, using the player's points and games after the new game, without losing the decimal part.\n6. Prints exactly the two lines shown in the example, using the `Player` methods for the name and the points.\n\nDo not write any methods. Use only `String` methods from the Java Quick Reference.",
    given: PLAYER,
    classes: asTop(PLAYER),
    sample: "The code segment prints\n\nM. Lopez: 14.2 points per game\nGained: 19",
    rows: [
      { name: "Creates the player", earns: "Creates a `Player` with `new` and the three arguments in order (String, `int`, `int`), stored in a `Player` variable." },
      { name: "Saves the starting points", earns: "Stores the value of `getPoints()` in a variable **before** calling `playGame`." },
      { name: "Records the game", earns: "Calls `playGame(19)` on the player object (not on the class, and not assigned to a variable)." },
      { name: "Finds the comma", earns: "Gets the name with `getName()` and finds the comma with `indexOf(\",\")`, not a typed-in position such as 5." },
      { name: "Splits the name", earns: "Gets the last name with `substring(0, comma)` and the first initial with `substring(comma + 2, comma + 3)`, or equivalent code that works for any name in this form." },
      { name: "Computes points per game", earns: "Divides `getPoints()` by `getGames()`, both read after the new game, as a `double`, for example `(double) p.getPoints() / p.getGames()`, so the result is 14.2 and not 14.0." },
      { name: "Prints the two lines", earns: "Prints both lines in the exact format, using the computed name parts and points per game, and the points gained computed as the current `getPoints()` minus the stored starting points." },
    ],
    notes: "One point for each row. Award a row for what the code actually does; ignore small typing slips such as a missing semicolon. Typed-in results such as `\"Lopez\"`, `\"M\"`, or `14.2` do not earn rows 4 through 7. Reading the points after `playGame` for the starting points prints `Gained: 0` and does not earn the Saves the starting points row. `int s = p.playGame(19);` does not compile, because `playGame` is `void`, and does not earn the Records the game row. `substring(0, 5)` or `substring(7, 8)` works for `\"Lopez, Maria\"` only and does not earn the Splits the name row. `(double) (p.getPoints() / p.getGames())` divides two `int` values first and gives 14.0, so it does not earn the Computes points per game row. Using `charAt` or `split` does not earn the Splits the name row.",
    solution: FRQ_B("Lopez, Maria", 52, 4),
    verify: { cases: [
      { run: FRQ_B("Lopez, Maria", 52, 4), out: "M. Lopez: 14.2 points per game\nGained: 19" },
      { run: FRQ_B("Chen, Li", 30, 3), out: "L. Chen: 12.25 points per game\nGained: 19" },
      { run: FRQ_B("Ng, Bo", 0, 0), out: "B. Ng: 19.0 points per game\nGained: 19" },
    ] } },
];

export default {
  forms: [
    { id: "u1a", name: "Unit 1 Test Practice A", group: "Unit 1 Test", date: "2026-10-06", items: u1a },
    { id: "u1b", name: "Unit 1 Test Practice B", group: "Unit 1 Test", date: "2026-10-06", items: u1b },
  ],
};

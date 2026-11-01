// AP CSA mock forms, Unit 3 (Class Creation): Quiz 6, Quiz 7, and the Unit 3 Test, Forms A and B.
// Students take these cold. In every mcq the key is written first and answer is 0 (the site shuffles).
// Classes an item needs are in its `classes` field (top-level, without "public"). When the blank in an
// item is inside a class, the class with its blank is shown in `code`, and each verify case carries the
// completed class in its own `classes`.

const ind = (s, n) => s.split("\n").map((l) => (l ? " ".repeat(n) + l : l)).join("\n");
const fill = (code, hole, piece, n) => code.replace(hole, ind(piece, n).replace(/^ +/, ""));
const get = (type, name, field) => `    public ${type} ${name}()
    {
        return ${field};
    }`;
const unpub = (s) => s.replace(/^public class/m, "class");
const NOTE = "One point for each row. Award a row for what the code actually does; ignore small typing slips that do not change the logic.";

// =====================================================================
// Quiz 6 Practice A
// =====================================================================

const THERMOSTAT = `class Thermostat
{
    private int setting;
    private String room;

    public Thermostat(String r, int s)
    {
        room = r;
        setting = s;
    }

${get("int", "getSetting", "setting")}

    public void raise(int degrees)
    {
        setting += degrees;
    }
}`;

const BUSPASS = `class BusPass
{
    private String owner;
    private int rides;

    public BusPass(String name)
    {
        owner = name;
        rides = 10;
    }

    public BusPass(String name, int count)
    {
        owner = name;
        rides = count;
    }

    public BusPass(int count)
    {
        owner = "guest";
        rides = count * 2;
    }

${get("String", "getOwner", "owner")}

${get("int", "getRides", "rides")}
}`;

const LANTERN = `class Lantern
{
    private int fuel;
    private int brightness;

    public Lantern(int f, int b)
    {
        fuel = f;
        brightness = b;
    }

    public Lantern(int f)
    {
        this(f, f / 4);
        fuel = fuel + 2;
    }

${get("int", "getFuel", "fuel")}

${get("int", "getBrightness", "brightness")}
}`;

const BOTTLE = `class WaterBottle
{
    private int capacity;
    private int amount;

    public WaterBottle(int cap)
    {
        capacity = cap;
        amount = 0;
    }

    public void fill(int ml)
    {
        amount += ml;
        if (amount > capacity)
        {
            amount = capacity;
        }
    }

    public int drink(int ml)
    {
        if (ml > amount)
        {
            ml = amount;
        }
        amount -= ml;
        return ml;
    }

${get("int", "getAmount", "amount")}
}`;

const KAYAK = `class Kayak
{
    private String color;
    private int seats;

    public Kayak(String c)
    {
        color = c;
        seats = 1;
    }

    public Kayak(String model)
    {
        color = "red";
        seats = 2;
    }

    public Kayak(int s, String c)
    {
        color = c;
        seats = s;
    }

${get("int", "getSeats", "seats")}
}`;

const ROADTRIP = `class RoadTrip
{
    private int miles;
    private int hours;
    private double speed;

    public RoadTrip(int m, int h)
    {
        miles = m;
        hours = h;
        speed = (double) miles / hours;
    }

    public void addLeg(int m, int h)
    {
        miles += m;
        hours += h;
    }

${get("int", "getMiles", "miles")}

${get("double", "getSpeed", "speed")}
}`;

const T6A = `Thermostat t = new Thermostat("den", 68);`;

const q6a = [
  { id: "q6a-01", skill: "classes", type: "mcq", topic: "3.3",
    stem: "Consider the following class definition and statement. The statement appears in a class other than `Thermostat`.",
    classes: THERMOSTAT,
    code: T6A,
    question: "Which of the following statements, placed after the statement above, will compile without error?\n\nI. `t.raise(2);`\nII. `t.setting = 72;`\nIII. `int now = t.getSetting();`",
    choices: ["I and III only", "I only", "II and III only", "I, II, and III"],
    why: [
      "`raise` and `getSetting` are public, so code outside the class can call them. `setting` is private, so only code inside `Thermostat` can use it.",
      "III also compiles. `getSetting` is public and returns an `int`, and storing it in an `int` is fine.",
      "II assigns to a private instance variable from outside the class: `setting has private access in Thermostat`. I calls a public `void` method as a statement, which compiles.",
      "II does not compile. `private` limits `setting` to code inside `Thermostat`, so javac reports `setting has private access in Thermostat`.",
    ],
    answer: 0,
    verify: { cases: [
      { run: T6A + "\nt.raise(2);\nSystem.out.println(t.getSetting());", out: "70" },
      { run: T6A + "\nt.setting = 72;", error: "setting has private access in Thermostat" },
      { run: T6A + "\nint now = t.getSetting();\nSystem.out.println(now);", out: "68" },
    ] } },

  { id: "q6a-02", skill: "classes", type: "mcq", topic: "3.4",
    stem: "Consider the following class definition and code segment. The code segment appears in a class other than `BusPass`.",
    classes: BUSPASS,
    code: `BusPass p1 = new BusPass("Lena");
BusPass p2 = new BusPass(5);
BusPass p3 = new BusPass("Omar", 5);
System.out.println(p1.getRides() + " " + p2.getOwner() + " " + p2.getRides() + " " + p3.getRides());`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["10 guest 10 5", "10 guest 5 5", "0 guest 10 5", "Nothing is printed. The class does not compile, because a class can have only one constructor."], mono: true,
    why: [
      "`new BusPass(\"Lena\")` matches the constructor with one `String`, which sets 10 rides. `new BusPass(5)` matches the one with one `int`, which sets the owner to `\"guest\"` and stores `5 * 2`. `new BusPass(\"Omar\", 5)` matches the `String, int` constructor, which stores 5.",
      "The one-`int` constructor stores `count * 2`, so `p2` has 10 rides, not 5.",
      "The one-`String` constructor sets `rides` to 10. Java runs the constructor whose parameter list matches the arguments, and that constructor gives every instance variable a value.",
      "A class can have several constructors as long as their parameter lists differ. Java picks one by the number, types, and order of the arguments.",
    ],
    answer: 0,
    verify: { out: "10 guest 10 5" } },

  { id: "q6a-03", skill: "classes", type: "mcq", topic: "3.4",
    stem: "Consider the following class definition and code segment. The code segment appears in a class other than `Lantern`.",
    classes: LANTERN,
    code: `Lantern lamp = new Lantern(10);
System.out.println(lamp.getFuel() + " " + lamp.getBrightness());`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["12 2", "10 2", "12 3", "10 2.5"], mono: true,
    why: [
      "`new Lantern(10)` runs the one-parameter constructor. `this(f, f / 4)` runs the two-parameter constructor first, which sets `fuel` to 10 and `brightness` to `10 / 4`, which is 2. Then the next line adds 2 to `fuel`.",
      "After `this(f, f / 4)` finishes, the rest of the one-parameter constructor still runs, so `fuel` goes up by 2.",
      "`brightness` is set inside the call `this(f, f / 4)`, using the parameter `f`, which is 10. Adding 2 to `fuel` afterward does not change `brightness`.",
      "`f / 4` is `int` division, so `10 / 4` is 2. Also, `fuel = fuel + 2` runs after the call to `this`, so `fuel` ends at 12.",
    ],
    answer: 0,
    verify: { out: "12 2" } },

  { id: "q6a-04", skill: "classes", type: "mcq", topic: "3.5",
    stem: "Consider the following class definition and code segment. The code segment appears in a class other than `WaterBottle`.",
    classes: BOTTLE,
    code: `WaterBottle b = new WaterBottle(500);
b.fill(300);
int first = b.drink(100);
b.fill(400);
int second = b.drink(600);
System.out.println(first + " " + second + " " + b.getAmount());`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["100 500 0", "100 600 0", "100 600 -100", "100 500 500"], mono: true,
    why: [
      "After `fill(300)` and `drink(100)`, the bottle holds 200. `fill(400)` brings it to 600, and the `if` in `fill` cuts it back to the capacity, 500. `drink(600)` asks for more than is there, so `ml` becomes 500, all of it is drunk, and 500 is returned.",
      "This skips the check in `fill`. Once `amount` passes `capacity`, `fill` sets it back to 500, so only 500 can be drunk.",
      "This skips both checks. `fill` stops at the capacity, and `drink` never takes more than `amount`.",
      "`drink` changes `amount` as well as returning a value: `amount -= ml` runs before the `return`. A method can do both.",
    ],
    answer: 0,
    verify: { out: "100 500 0" } },

  { id: "q6a-05", skill: "classes", type: "mcq", topic: "3.4",
    stem: "Consider the following class definition and code segment. The code segment appears in a class other than `Kayak`.",
    classes: KAYAK,
    code: `Kayak k = new Kayak("blue");
System.out.println(k.getSeats());`,
    question: "Which of the following best describes the result of compiling and running the code segment?",
    choices: [
      "The class does not compile, because two constructors have the same parameter types.",
      "1 is printed, because Java runs the first constructor that matches.",
      "2 is printed, because the later constructor replaces the earlier one.",
      "The class compiles, but the code segment does not compile, because Java cannot tell which constructor `new Kayak(\"blue\")` means.",
    ],
    why: [
      "Both of the first two constructors take one `String`. Parameter names are not part of the signature, so the two are the same, and javac reports `constructor Kayak(String) is already defined in class Kayak`.",
      "Java never gets to choose. Two constructors with the same parameter types cannot both be declared, so the class itself does not compile.",
      "A later constructor does not replace an earlier one. Declaring both is a compile error in the class.",
      "The error is in the class, not in the call. Even with no call at all, the class does not compile with two constructors that each take one `String`.",
    ],
    answer: 0,
    verify: { error: "is already defined" } },

  { id: "q6a-06", skill: "classes", type: "mcq", topic: "3.5",
    stem: "Consider the following class definition and code segment. The code segment appears in a class other than `RoadTrip`.",
    classes: ROADTRIP,
    code: `RoadTrip trip = new RoadTrip(120, 2);
trip.addLeg(180, 4);
System.out.println(trip.getMiles() + " " + trip.getSpeed());`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["300 60.0", "300 50.0", "120 60.0", "300 50"], mono: true,
    why: [
      "The constructor computes `speed` once, from 120 miles and 2 hours. `addLeg` changes `miles` and `hours`, but nothing changes `speed` afterward, so `getSpeed` still returns 60.0.",
      "That is the speed for the whole trip, 300 miles over 6 hours, and what `getSpeed` would return if it computed `(double) miles / hours` each time it is called. It returns the value stored by the constructor instead.",
      "`addLeg` adds to `miles`, so `getMiles` returns 300.",
      "`speed` is a `double`, so it prints with a decimal point. Also, `getSpeed` returns the value stored by the constructor, not one that counts the second leg.",
    ],
    answer: 0,
    verify: { out: "300 60.0" } },
];

// =====================================================================
// Quiz 6 Practice B
// =====================================================================

const TIPJAR = `class TipJar
{
    private double total;
    private String owner;

    public TipJar(String name)
    {
        owner = name;
        total = 0.0;
    }

    public void addTip(double amount)
    {
        total += amount;
    }

${get("double", "getTotal", "total")}
}`;

const ORDER = `class Order
{
    private String item;
    private int quantity;

    public Order(String what)
    {
        item = what;
        quantity = 1;
    }

    public Order(int n)
    {
        item = "water";
        quantity = n;
    }

    public Order(int n, String what)
    {
        item = what;
        quantity = n + 1;
    }

${get("String", "getItem", "item")}

${get("int", "getQuantity", "quantity")}
}`;

const QUIVER = `class Quiver
{
    private int arrows;
    private int maxArrows;

    public Quiver(int max, int start)
    {
        maxArrows = max;
        arrows = start;
    }

    public Quiver(int max)
    {
        this(max, max / 4);
        arrows = arrows * 2;
    }

${get("int", "getArrows", "arrows")}

${get("int", "getMax", "maxArrows")}
}`;

const GIFTCARD = `class GiftCard
{
    private int balance;
    private int uses;

    public GiftCard(int start)
    {
        balance = start;
        uses = 0;
    }

    public int spend(int cost)
    {
        if (cost > balance)
        {
            return 0;
        }
        balance -= cost;
        uses++;
        return cost;
    }

    public void reload(int amount)
    {
        balance += amount;
    }

${get("int", "getBalance", "balance")}

${get("int", "getUses", "uses")}
}`;

const TENT = `class Tent
{
    private int people;
    private String brand;

    public Tent(int p, String b)
    {
        people = p;
        brand = b;
    }

    public Tent(String b, int p)
    {
        people = p + 1;
        brand = b;
    }

${get("int", "getPeople", "people")}
}`;

const GARDENBED = `class GardenBed
{
    private int length;
    private int width;
    private int area;

    public GardenBed(int len, int wid)
    {
        length = len;
        width = wid;
        area = length * width;
    }

    public void widen(int extra)
    {
        width += extra;
    }

${get("int", "getWidth", "width")}

${get("int", "getArea", "area")}
}`;

const T6B = `TipJar jar = new TipJar("Mia");`;

const q6b = [
  { id: "q6b-01", skill: "classes", type: "mcq", topic: "3.3",
    stem: "Consider the following class definition and statement. The statement appears in a class other than `TipJar`.",
    classes: TIPJAR,
    code: T6B,
    question: "Which of the following statements, placed after the statement above, will compile without error?\n\nI. `jar.addTip(2.5);`\nII. `jar.owner = \"Leo\";`\nIII. `jar.tipCount = 3;`",
    choices: ["I only", "I and II only", "I and III only", "I, II, and III"],
    why: [
      "`addTip` is public, so code outside the class can call it. `owner` is private, so only code inside `TipJar` can use it, and `TipJar` has no variable named `tipCount` at all.",
      "II assigns to a private instance variable from outside the class: `owner has private access in TipJar`.",
      "A Java object has exactly the variables its class declares, and nothing can add one later. `TipJar` declares no `tipCount`, so III gives `cannot find symbol`.",
      "Only I compiles. II uses a private variable from outside the class, and III names a variable the class does not have.",
    ],
    answer: 0,
    verify: { cases: [
      { run: T6B + "\njar.addTip(2.5);\nSystem.out.println(jar.getTotal());", out: "2.5" },
      { run: T6B + "\njar.owner = \"Leo\";", error: "owner has private access in TipJar" },
      { run: T6B + "\njar.tipCount = 3;", error: "cannot find symbol" },
    ] } },

  { id: "q6b-02", skill: "classes", type: "mcq", topic: "3.4",
    stem: "Consider the following class definition and code segment. The code segment appears in a class other than `Order`.",
    classes: ORDER,
    code: `Order a = new Order(3);
Order b = new Order(2, "taco");
Order c = new Order("soup");
System.out.println(a.getItem() + " " + a.getQuantity() + " " + b.getQuantity() + " " + c.getQuantity());`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["water 3 3 1", "water 3 2 1", "null 3 3 1", "Nothing is printed. The class does not compile, because two of the constructors take an `int` first."], mono: true,
    why: [
      "`new Order(3)` matches the one-`int` constructor: the item is `\"water\"` and the quantity is 3. `new Order(2, \"taco\")` matches `int, String`, which stores `n + 1`, so 3. `new Order(\"soup\")` matches the one-`String` constructor, which sets the quantity to 1.",
      "The `int, String` constructor stores `n + 1`, not `n`, so `b` has a quantity of 3.",
      "The one-`int` constructor sets `item` to `\"water\"`. Every constructor in this class gives both instance variables a value.",
      "Constructors only need different parameter lists. `(int)` and `(int, String)` have different numbers of parameters, so both can be declared.",
    ],
    answer: 0,
    verify: { out: "water 3 3 1" } },

  { id: "q6b-03", skill: "classes", type: "mcq", topic: "3.4",
    stem: "Consider the following class definition and code segment. The code segment appears in a class other than `Quiver`.",
    classes: QUIVER,
    code: `Quiver q = new Quiver(18);
System.out.println(q.getArrows() + " " + q.getMax());`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["8 18", "4 18", "9 18", "Nothing is printed. A constructor cannot call another constructor of its class."], mono: true,
    why: [
      "`this(max, max / 4)` runs the two-parameter constructor first: `maxArrows` is 18 and `arrows` is `18 / 4`, which is 4. Then the next line doubles `arrows` to 8.",
      "After `this(max, max / 4)` finishes, the rest of the constructor still runs, and `arrows = arrows * 2` doubles it.",
      "`max / 4` is `int` division, so `18 / 4` is 4, not 4.5. Doubling 4 gives 8.",
      "`this(...)` as the first statement of a constructor calls another constructor of the same class. It compiles, and it keeps the setup code in one place.",
    ],
    answer: 0,
    verify: { out: "8 18" } },

  { id: "q6b-04", skill: "classes", type: "mcq", topic: "3.5",
    stem: "Consider the following class definition and code segment. The code segment appears in a class other than `GiftCard`.",
    classes: GIFTCARD,
    code: `GiftCard card = new GiftCard(25);
int paid = card.spend(10);
paid += card.spend(20);
card.reload(5);
paid += card.spend(20);
System.out.println(paid + " " + card.getBalance() + " " + card.getUses());`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["30 0 2", "50 -20 3", "10 20 1", "30 0 3"], mono: true,
    why: [
      "`spend(10)` works: the balance is 15 and `uses` is 1. `spend(20)` costs more than 15, so it returns 0 and changes nothing. After `reload(5)` the balance is 20, and `spend(20)` works because 20 is not more than 20. The total paid is 10 + 0 + 20.",
      "This ignores the `if`. When the cost is more than the balance, `spend` returns 0 before it changes anything.",
      "This treats a cost equal to the balance as too much. The test is `cost > balance`, and 20 is not more than 20, so the last call works.",
      "When `spend` returns 0, the method ends right there, so `uses++` never runs for that call.",
    ],
    answer: 0,
    verify: { out: "30 0 2" } },

  { id: "q6b-05", skill: "classes", type: "mcq", topic: "3.4",
    stem: "Consider the following class definition and code segment. The code segment appears in a class other than `Tent`.",
    classes: TENT,
    code: `Tent t1 = new Tent(2, "Ridge");
Tent t2 = new Tent("Ridge", 2);
System.out.println(t1.getPeople() + t2.getPeople());`,
    question: "What is the result of compiling and running the code segment?",
    choices: ["5", "23", "4", "Nothing is printed. The class does not compile, because the two constructors have the same parameter types."], mono: true,
    why: [
      "`new Tent(2, \"Ridge\")` matches `(int, String)` and stores 2. `new Tent(\"Ridge\", 2)` matches `(String, int)` and stores `2 + 1`. Both `getPeople` calls return an `int`, so `+` adds them.",
      "Both values are `int`s and there is no String before them, so `+` adds. It does not join digits.",
      "The second call matches the `(String, int)` constructor, which adds 1. Java chooses by the order of the argument types, so the two calls run different constructors.",
      "The two lists have the same types in a different order, so they are different signatures. `(int, String)` and `(String, int)` can both be declared.",
    ],
    answer: 0,
    verify: { out: "5" } },

  { id: "q6b-06", skill: "classes", type: "mcq", topic: "3.5",
    stem: "Consider the following class definition and code segment. The code segment appears in a class other than `GardenBed`.",
    classes: GARDENBED,
    code: `GardenBed bed = new GardenBed(6, 3);
bed.widen(2);
System.out.println(bed.getWidth() + " " + bed.getArea());`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["5 18", "5 30", "3 18", "5 20"], mono: true,
    why: [
      "The constructor stores `area` once, as 6 times 3. `widen(2)` changes `width` to 5, but nothing updates `area`, so `getArea` still returns 18.",
      "That is the area of the bed after it is widened, and what `getArea` would return if it computed `length * width` each time it is called. It returns the stored value instead.",
      "`widen` adds to `width`, so `getWidth` returns 5.",
      "`widen` adds the extra to `width`, not to `area`. Nothing changes `area` after the constructor.",
    ],
    answer: 0,
    verify: { out: "5 18" } },
];

// =====================================================================
// Quiz 7 Practice A
// =====================================================================

const BADGE = `class Badge
{
    private static int issued = 0;
    private int number;

    public Badge()
    {
        issued++;
        number = issued;
    }

${get("int", "getNumber", "number")}

    public static int getIssued()
    {
        return issued;
    }
}`;

const SCALE = `class Scale
{
    private double weight;
    private static int readings = 0;

    public Scale(double w)
    {
        weight = w;
        readings++;
    }

    public static double inGrams()
    {
        return weight * 1000;
    }

    public static int getReadings()
    {
        return readings;
    }
}`;

const TEAM = `class Team
{
    private static int totalPoints = 0;
    private int points;

    public Team()
    {
        points = 0;
    }

    public void score(int p)
    {
        points += p;
        totalPoints += p;
    }

${get("int", "getPoints", "points")}

    public static int getTotal()
    {
        return totalPoints;
    }
}`;

const MARBLES = `class MarbleJar
{
    private int count;

    public MarbleJar(int c)
    {
        count = c;
    }

    public void add(int n)
    {
        count += n;
    }

${get("int", "getCount", "count")}
}`;

const FILLUP = `public static void fillUp(MarbleJar jar, int n)
{
    jar.add(n);
    n = 0;
}`;

const TURNSTILE = `class Turnstile
{
    private int count;

    public Turnstile()
    {
        count = 0;
    }

    public void pass(int people)
    {
        int count = 0;
        count += people;
    }

    public void passOne()
    {
        count++;
    }

${get("int", "getCount", "count")}
}`;

const LAMP = `class Lamp
{
    private int watts;

    public Lamp(int w)
    {
        watts = w;
    }

    public void setWatts(int watts)
    {
        watts = watts;
    }

${get("int", "getWatts", "watts")}
}`;

const q7a = [
  { id: "q7a-01", skill: "classes", type: "mcq", topic: "3.7",
    stem: "Consider the following class definition and code segment. The code segment appears in a class other than `Badge`.",
    classes: BADGE,
    code: `Badge a = new Badge();
Badge b = new Badge();
Badge c = new Badge();
System.out.println(a.getNumber() + " " + c.getNumber() + " " + Badge.getIssued());`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["1 3 3", "3 3 3", "1 1 1", "1 3 1"], mono: true,
    why: [
      "`issued` is static, so all three badges share one copy. Each constructor adds 1 to it and copies the new value into that badge's own `number`. After three badges, `issued` is 3, `a` kept 1, and `c` got 3.",
      "`number` is an instance variable, so each badge has its own. Changing `issued` later does not change the value `a` already copied.",
      "This gives each badge its own `issued`. A static variable has one copy, owned by the class, so it keeps counting up.",
      "`Badge.getIssued()` returns the one shared count, which is 3 after the third badge.",
    ],
    answer: 0,
    verify: { out: "1 3 3" } },

  { id: "q7a-02", skill: "classes", type: "mcq", topic: "3.7",
    stem: "Consider the following class definition and code segment. The code segment appears in a class other than `Scale`.",
    classes: SCALE,
    code: `Scale s = new Scale(2.5);
System.out.println(s.inGrams());`,
    question: "Which of the following best describes the result of compiling and running the code segment?",
    choices: [
      "The class does not compile, because the static method `inGrams` uses the instance variable `weight`.",
      "2500.0 is printed.",
      "0.0 is printed, because a static method sees the default value of `weight`.",
      "The class compiles, but the code segment does not compile, because a static method must be called on the class name.",
    ],
    why: [
      "A static method belongs to the class, so there is no object whose `weight` it could read. javac reports `non-static variable weight cannot be referenced from a static context`.",
      "The arithmetic would give 2500.0, but the class never compiles. A static method cannot read an instance variable.",
      "A static method cannot read an instance variable at all, default or not. This is a compile error.",
      "Calling a static method through an object reference compiles, though the class name is the usual way. The error is inside the class.",
    ],
    answer: 0,
    verify: { error: "non-static variable weight cannot be referenced from a static context" } },

  { id: "q7a-03", skill: "classes", type: "mcq", topic: "3.7",
    stem: "Consider the following class definition and code segment. The code segment appears in a class other than `Team`.",
    classes: TEAM,
    code: `Team red = new Team();
Team blue = new Team();
red.score(3);
blue.score(2);
red.score(1);
System.out.println(red.getPoints() + " " + blue.getPoints() + " " + Team.getTotal());`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["4 2 6", "4 2 4", "6 6 6", "Nothing is printed. The class does not compile, because an instance method cannot change a static variable."], mono: true,
    why: [
      "Each team has its own `points`: red scored 3 and 1, blue scored 2. `totalPoints` is static, so every call to `score` adds to the same shared total: 3 + 2 + 1.",
      "This keeps a separate total for red. There is one `totalPoints` for the whole class, and blue's 2 points went into it too.",
      "`points` is an instance variable, so red and blue each have their own. Only `totalPoints` is shared.",
      "An instance method can read and change a static variable. The reverse is the problem: a static method cannot use an instance variable.",
    ],
    answer: 0,
    verify: { out: "4 2 6" } },

  { id: "q7a-04", skill: "classes", type: "mcq", topic: "3.6",
    stem: "Consider the following class definition and static method. The code segment below appears in the same class as `fillUp`.",
    classes: MARBLES,
    methods: FILLUP,
    code: `MarbleJar mine = new MarbleJar(50);
int extra = 20;
fillUp(mine, extra);
System.out.println(mine.getCount() + " " + extra);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["70 20", "50 20", "70 0", "50 0"], mono: true,
    why: [
      "`jar` gets a copy of the reference in `mine`, so both refer to the same `MarbleJar`, and `jar.add(n)` changes that jar. `n` gets a copy of the value 20, so setting `n` to 0 does not change `extra`.",
      "Passing an object copies the reference, not the object. `jar` and `mine` refer to the same jar, so the 20 marbles are added to it.",
      "`n` is a copy of the `int` value in `extra`. Changing the parameter has no effect on the argument.",
      "This has both backward. The method can change the object `mine` refers to, and it cannot change the `int` variable `extra`.",
    ],
    answer: 0,
    verify: { out: "70 20" } },

  { id: "q7a-05", skill: "classes", type: "mcq", topic: "3.8",
    stem: "Consider the following class definition and code segment. The code segment appears in a class other than `Turnstile`.",
    classes: TURNSTILE,
    code: `Turnstile gate = new Turnstile();
gate.pass(5);
gate.passOne();
gate.pass(2);
System.out.println(gate.getCount());`,
    question: "What is the result of compiling and running the code segment?",
    choices: ["1", "8", "0", "Nothing is printed. The class does not compile, because `count` is declared twice."], mono: true,
    why: [
      "Inside `pass`, `int count = 0;` declares a local variable with the same name as the instance variable, and from then on `count` means the local. The local is gone when `pass` ends. Only `passOne` changes the instance variable.",
      "This adds the 5 and the 2 to the instance variable. `pass` adds them to its own local `count`, which disappears when the method ends.",
      "`passOne` has no local `count`, so `count++` there changes the instance variable.",
      "A local variable may have the same name as an instance variable. Inside the method, the name means the local.",
    ],
    answer: 0,
    verify: { out: "1" } },

  { id: "q7a-06", skill: "classes", type: "mcq", topic: "3.9",
    stem: "Consider the following class definition and code segment. The code segment appears in a class other than `Lamp`.",
    classes: LAMP,
    code: `Lamp desk = new Lamp(40);
desk.setWatts(60);
System.out.println(desk.getWatts());`,
    question: "What is the result of compiling and running the code segment?",
    choices: ["40", "60", "0", "Nothing is printed. The class does not compile, because a parameter cannot have the same name as an instance variable."], mono: true,
    why: [
      "Inside `setWatts`, the parameter `watts` hides the instance variable with the same name. `watts = watts;` sets the parameter to itself, and the instance variable keeps the 40 from the constructor. `this.watts = watts;` would set it.",
      "That is what `this.watts = watts;` would do. Without `this`, both sides of the assignment mean the parameter.",
      "The constructor set the instance variable to 40, and nothing changes it after that.",
      "A parameter may have the same name as an instance variable. It compiles with no warning, which is why the mistake is easy to miss.",
    ],
    answer: 0,
    verify: { out: "40" } },
];

// =====================================================================
// Quiz 7 Practice B
// =====================================================================

const VISITOR = `class Visitor
{
    private static int count = 0;
    private int place;
    private String name;

    public Visitor(String n)
    {
        name = n;
        count++;
        place = count;
    }

${get("int", "getPlace", "place")}

    public static int getCount()
    {
        return count;
    }
}`;

const ELEVATOR = `class Elevator
{
    private int floor;
    private static int trips = 0;

    public Elevator()
    {
        floor = 1;
    }

    public void goTo(int f)
    {
        floor = f;
        trips++;
    }

${get("int", "getFloor", "floor")}

    public static String report()
    {
        return trips + " trips, now on floor " + getFloor();
    }
}`;

const RUNNER = `class Runner
{
    private static int teamMiles = 0;
    private int miles;

    public Runner(int start)
    {
        miles = start;
        teamMiles += start;
    }

    public void run(int m)
    {
        miles += m;
        teamMiles += m;
    }

${get("int", "getMiles", "miles")}

    public static int getTeamMiles()
    {
        return teamMiles;
    }
}`;

const PRINTER = `class Printer
{
    private int paper;

    public Printer(int p)
    {
        paper = p;
    }

    public void load(int sheets)
    {
        paper += sheets;
    }

${get("int", "getPaper", "paper")}
}`;

const TOPUP = `public static int topUp(Printer p, int target)
{
    int added = target - p.getPaper();
    p.load(added);
    target = 0;
    return added;
}`;

const REGISTER = `class Register
{
    private double total;

    public Register()
    {
        total = 0.0;
    }

    public void ring(double price, int qty)
    {
        double total = price * qty;
        total = total + 1.0;
    }

    public void ringOne(double price)
    {
        total += price;
    }

${get("double", "getTotal", "total")}
}`;

const AQUARIUM = `class Aquarium
{
    private int gallons;
    private int fish;

    public Aquarium(int g)
    {
        gallons = g;
        fish = 0;
    }

    public void addFish(int fish)
    {
        fish += fish;
    }

${get("int", "getFish", "fish")}
}`;

const q7b = [
  { id: "q7b-01", skill: "classes", type: "mcq", topic: "3.7",
    stem: "Consider the following class definition and code segment. The code segment appears in a class other than `Visitor`.",
    classes: VISITOR,
    code: `Visitor v1 = new Visitor("Ana");
Visitor v2 = new Visitor("Ben");
System.out.print(Visitor.getCount() + " ");
Visitor v3 = new Visitor("Cy");
System.out.println(v2.getPlace() + " " + Visitor.getCount());`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["2 2 3", "2 3 3", "1 1 1", "2 2 2"], mono: true,
    why: [
      "`count` is static, so all the visitors share it. After two visitors it is 2, and `v2` copied 2 into its own `place`. The third visitor raises `count` to 3, but `v2`'s `place` stays 2.",
      "`place` is an instance variable. `v2` copied the count when it was made, and later visitors do not change it.",
      "This gives each visitor its own `count`. A static variable has one copy for the whole class.",
      "Making `v3` runs the constructor again, which adds 1 to the shared `count`.",
    ],
    answer: 0,
    verify: { out: "2 2 3" } },

  { id: "q7b-02", skill: "classes", type: "mcq", topic: "3.7",
    stem: "Consider the following class definition and code segment. The code segment appears in a class other than `Elevator`.",
    classes: ELEVATOR,
    code: `Elevator e = new Elevator();
e.goTo(4);
System.out.println(Elevator.report());`,
    question: "Which of the following best describes the result of compiling and running the code segment?",
    choices: [
      "The class does not compile, because the static method `report` calls the instance method `getFloor`.",
      "`1 trips, now on floor 4` is printed.",
      "`1 trips, now on floor 1` is printed.",
      "The class compiles, but the code segment does not compile, because `report` must be called on an object, as `e.report()`.",
    ],
    why: [
      "`getFloor` needs an object, and a static method has none: there is no `this` inside it. javac reports `non-static method getFloor() cannot be referenced from a static context`.",
      "The values would be right if it ran, but a static method cannot call an instance method without an object, so the class does not compile.",
      "The class never compiles, so nothing runs. A static method cannot call `getFloor` with no object to call it on.",
      "A static method is called on the class name, as `Elevator.report()` is. The error is inside `report`.",
    ],
    answer: 0,
    verify: { error: "non-static method getFloor() cannot be referenced from a static context" } },

  { id: "q7b-03", skill: "classes", type: "mcq", topic: "3.7",
    stem: "Consider the following class definition and code segment. The code segment appears in a class other than `Runner`.",
    classes: RUNNER,
    code: `Runner x = new Runner(2);
Runner y = new Runner(0);
x.run(3);
y.run(4);
System.out.println(x.getMiles() + " " + y.getMiles() + " " + Runner.getTeamMiles());`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["5 4 9", "5 4 7", "9 9 9", "Nothing is printed. The class does not compile, because a constructor cannot change a static variable."], mono: true,
    why: [
      "Each runner has its own `miles`: `x` has 2 + 3 and `y` has 0 + 4. `teamMiles` is shared, and both the constructor and `run` add to it: 2 + 0 + 3 + 4.",
      "This leaves out the starting miles. The constructor adds `start` to `teamMiles` too.",
      "`miles` is an instance variable, so each runner keeps its own. Only `teamMiles` is shared.",
      "A constructor, like an instance method, can change a static variable.",
    ],
    answer: 0,
    verify: { out: "5 4 9" } },

  { id: "q7b-04", skill: "classes", type: "mcq", topic: "3.6",
    stem: "Consider the following class definition and static method. The code segment below appears in the same class as `topUp`.",
    classes: PRINTER,
    methods: TOPUP,
    code: `Printer office = new Printer(120);
Printer copy = office;
int goal = 500;
int added = topUp(copy, goal);
System.out.println(office.getPaper() + " " + added + " " + goal);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["500 380 500", "120 380 500", "500 380 0", "120 380 0"], mono: true,
    why: [
      "`copy = office` copies the reference, so both names refer to one printer. `p` in `topUp` gets another copy of that reference, so `p.load(380)` adds paper to that printer. `target` is a copy of the value in `goal`, so setting it to 0 does not change `goal`.",
      "`copy` is not a second printer. `Printer copy = office;` copies the reference, so loading paper through `copy` or `p` changes the printer `office` refers to.",
      "`target` holds a copy of the value 500. Setting the parameter to 0 does not change `goal`.",
      "This has both backward. The method changes the printer, and it cannot change the `int` variable `goal`.",
    ],
    answer: 0,
    verify: { out: "500 380 500" } },

  { id: "q7b-05", skill: "classes", type: "mcq", topic: "3.8",
    stem: "Consider the following class definition and code segment. The code segment appears in a class other than `Register`.",
    classes: REGISTER,
    code: `Register r = new Register();
r.ring(2.5, 4);
r.ringOne(3.0);
System.out.println(r.getTotal());`,
    question: "What is the result of compiling and running the code segment?",
    choices: ["3.0", "14.0", "13.0", "Nothing is printed. The class does not compile, because `total` is declared twice."], mono: true,
    why: [
      "Inside `ring`, `double total = price * qty;` declares a local variable that hides the instance variable. Both lines in `ring` change the local, which is gone when the method ends. Only `ringOne` adds to the instance variable.",
      "This adds `ring`'s 10.0 and 1.0 to the instance variable. Both changes went to the local `total`.",
      "`ring` never changes the instance variable at all. Its `total` is a new local variable.",
      "A local variable may have the same name as an instance variable. Inside the method, the name means the local.",
    ],
    answer: 0,
    verify: { out: "3.0" } },

  { id: "q7b-06", skill: "classes", type: "mcq", topic: "3.9",
    stem: "Consider the following class definition and code segment. The code segment appears in a class other than `Aquarium`.",
    classes: AQUARIUM,
    code: `Aquarium tank = new Aquarium(20);
tank.addFish(3);
tank.addFish(2);
System.out.println(tank.getFish());`,
    question: "What is the result of compiling and running the code segment?",
    choices: ["0", "5", "10", "Nothing is printed. The class does not compile, because a parameter cannot have the same name as an instance variable."], mono: true,
    why: [
      "Inside `addFish`, the parameter `fish` hides the instance variable. `fish += fish;` doubles the parameter, and the instance variable keeps the 0 the constructor gave it. `this.fish += fish;` would add to it.",
      "That is what `this.fish += fish;` would do. Without `this`, every `fish` in the method means the parameter.",
      "This reads one `fish` as the instance variable and the other as the parameter. Both mean the parameter.",
      "A parameter may have the same name as an instance variable. It compiles, and the parameter wins inside the method.",
    ],
    answer: 0,
    verify: { out: "0" } },
];

// =====================================================================
// Unit 3 Test Practice A
// =====================================================================

const TIMER = `class Timer
{
    private int minutes;
    private int seconds;

    public Timer(int totalSeconds)
    {
        /* missing code */
    }

${get("int", "getMinutes", "minutes")}

${get("int", "getSeconds", "seconds")}
}`;
const TIMER_RUN = `Timer t = new Timer(135);
System.out.println(t.getMinutes() + ":" + t.getSeconds());`;
const TIMER_K = "minutes = totalSeconds / 60;\nseconds = totalSeconds % 60;";
const TIMER_B = "minutes = totalSeconds % 60;\nseconds = totalSeconds / 60;";
const TIMER_C = "int minutes = totalSeconds / 60;\nint seconds = totalSeconds % 60;";
const TIMER_D = "minutes = totalSeconds / 60;\nseconds = totalSeconds - minutes;";
const timer = (p) => fill(TIMER, "/* missing code */", p, 8);

const SANDWICH = `class Sandwich
{
    private String bread;
    private int toppings;
    private double price;

    public Sandwich(String b, int t)
    {
        bread = b;
        toppings = t;
        price = 4.0 + 0.5 * t;
    }

    public Sandwich(String b)
    {
        this(b, 2);
    }

    public Sandwich()
    {
        this("wheat");
        toppings++;
    }

${get("String", "getBread", "bread")}

${get("int", "getToppings", "toppings")}

${get("double", "getPrice", "price")}
}`;

const SCOREBOARD = `class Scoreboard
{
    private int home;
    private int away;
    private boolean finished;

    public void homeScores(int pts)
    {
        home += pts;
    }

${get("int", "getHome", "home")}

${get("int", "getAway", "away")}

${get("boolean", "isFinished", "finished")}
}`;

const FLIGHT = `class Flight
{
    private String code;
    private int seats;
    private boolean international;

    public Flight(String c, int s)
    {
        code = c;
        seats = s;
        international = false;
    }

    public Flight(String c, int s, boolean intl)
    {
        code = c;
        seats = s;
        international = intl;
    }

${get("int", "getSeats", "seats")}
}`;

const BOWLER = `class Bowler
{
    private static int highGame = 0;
    private int best;

    public Bowler()
    {
        best = 0;
    }

    public void bowl(int score)
    {
        if (score > best)
        {
            best = score;
        }
        if (score > highGame)
        {
            highGame = score;
        }
    }

${get("int", "getBest", "best")}

    public static int getHighGame()
    {
        return highGame;
    }
}`;

const THERMO = `class Thermometer
{
    private double celsius;
    private static int readings = 0;

    public Thermometer(double c)
    {
        celsius = c;
        readings++;
    }

${get("double", "getCelsius", "celsius")}
    /* added method */
}`;
const thermo = (m) => fill(THERMO, "/* added method */", "\n" + m, 4);
const TH_I = "public static int getReadings()\n{\n    return readings;\n}";
const TH_II = "public static double toFahrenheit(double c)\n{\n    return c * 9 / 5 + 32;\n}";
const TH_III = "public static double getFahrenheit()\n{\n    return celsius * 9 / 5 + 32;\n}";

const CRATE = `class Crate
{
    private int weight;
    private static int heaviest = 0;

    public Crate(int w)
    {
        weight = w;
        if (w > heaviest)
        {
            heaviest = w;
        }
    }

${get("int", "getWeight", "weight")}

    public static int combined(Crate a, Crate b)
    {
        return a.weight + b.weight;
    }

    public static int getHeaviest()
    {
        return heaviest;
    }
}`;

const CARD = `class LibraryCard
{
    private String owner;
    /* missing declaration */

    public LibraryCard(String name)
    {
        owner = name;
    }

    public void checkOut()
    {
        totalCheckouts++;
    }

${get("int", "getTotal", "totalCheckouts")}
}`;
const card = (p) => fill(CARD, "/* missing declaration */", p, 4);
const CARD_RUN = `LibraryCard a = new LibraryCard("Ines");
LibraryCard b = new LibraryCard("Theo");
a.checkOut();
b.checkOut();
b.checkOut();
System.out.println(a.getTotal() + " " + b.getTotal());`;
const CARD_K = "private static int totalCheckouts = 0;";
const CARD_B = "private int totalCheckouts = 0;";
const CARD_C = "public int totalCheckouts = 0;";
const CARD_D = "private static final int totalCheckouts = 0;";

const SURVEY = `class Survey
{
    private int yes;
    private int total;

    public void record(boolean answer)
    {
        int change;
        if (answer)
        {
            change = 1;
        }
        yes += change;
        total++;
    }

${get("int", "getYes", "yes")}

${get("int", "getTotal", "total")}
}`;

const KITE = `class Kite
{
    private String color;
    private int length;

    public Kite(String color, int length)
    {
        /* missing code */
    }

${get("String", "getColor", "color")}

${get("int", "getLength", "length")}
}`;
const kite = (p) => fill(KITE, "/* missing code */", p, 8);
const KITE_RUN = `Kite k = new Kite("red", 120);
System.out.println(k.getColor() + " " + k.getLength());`;
const KITE_K = "this.color = color;\nthis.length = length;";
const KITE_B = "color = color;\nlength = length;";
const KITE_C = "color = this.color;\nlength = this.length;";
const KITE_D = "this.color = color;\nlength = length;";

const PUMPKIN = `class Pumpkin
{
    private String grower;
    private int pounds;

    public Pumpkin(String g, int p)
    {
        grower = g;
        pounds = p;
    }

    public Pumpkin heavier(Pumpkin other)
    {
        if (other.pounds > this.pounds)
        {
            return other;
        }
        return this;
    }

${get("String", "getGrower", "grower")}
}`;

const METER = `class ParkingMeter
{
    private int minutes;
    private int maxMinutes;

    public ParkingMeter(int max)
    {
        maxMinutes = max;
        minutes = 0;
    }

    public int insert(int quarters)
    {
        minutes += quarters * 15;
        if (minutes > maxMinutes)
        {
            int extra = minutes - maxMinutes;
            minutes = maxMinutes;
            return extra;
        }
        return 0;
    }

${get("int", "getMinutes", "minutes")}
}`;

const ITEM = `class Item
{
    private double price;

    public Item(double p)
    {
        price = p;
    }

${get("double", "getPrice", "price")}

    /* missing method */
}`;
const item = (m) => fill(ITEM, "/* missing method */", m, 4);
const ITEM_RUN = `Item i = new Item(50.0);
System.out.println(i.getSalePrice(20));
System.out.println(i.getSalePrice(20));
System.out.println(i.getPrice());`;
const ITEM_K = "public double getSalePrice(int percent)\n{\n    return price * (100 - percent) / 100.0;\n}";
const ITEM_B = "public void getSalePrice(int percent)\n{\n    price = price * (100 - percent) / 100.0;\n}";
const ITEM_C = "public double getSalePrice(int percent)\n{\n    price = price * (100 - percent) / 100.0;\n    return price;\n}";
const ITEM_D = "public double getSalePrice(int percent)\n{\n    double sale = price * (100 - percent) / 100.0;\n}";

const OVEN = `class Oven
{
    private int temp;

    public Oven(int t)
    {
        temp = t;
    }

    public int preheat(int target)
    {
        int steps = 0;
        while (temp < target)
        {
            temp += 25;
            steps++;
        }
        target = temp;
        return steps;
    }

${get("int", "getTemp", "temp")}
}`;

const BACKPACK = `class Backpack
{
    private int books;

    public Backpack(int b)
    {
        books = b;
    }

    public void add(int n)
    {
        books += n;
    }

${get("int", "getBooks", "books")}
}`;

const FUELTANK = `class FuelTank
{
    private int liters;

    public FuelTank(int l)
    {
        liters = l;
    }

    public void pourInto(FuelTank other, int amount)
    {
        if (amount > liters)
        {
            amount = liters;
        }
        liters -= amount;
        other.liters += amount;
    }

${get("int", "getLiters", "liters")}
}`;

const FRIDGE_F = `class Fridge
{
    private double degreesF;

    public Fridge(double f)
    {
        degreesF = f;
    }

    public void setFahrenheit(double f)
    {
        degreesF = f;
    }

    public double getFahrenheit()
    {
        return degreesF;
    }
}`;
const FRIDGE_C = `class Fridge
{
    private double degreesC;

    public Fridge(double f)
    {
        degreesC = (f - 32) * 5 / 9;
    }

    public void setFahrenheit(double f)
    {
        degreesC = (f - 32) * 5 / 9;
    }

    public double getFahrenheit()
    {
        return degreesC * 9 / 5 + 32;
    }
}`;
const FRIDGE_RUN = `Fridge f = new Fridge(38.0);
f.setFahrenheit(41.0);
System.out.println(f.getFahrenheit());`;

const SPEAKER = `class Speaker
{
    public int volume;

    public Speaker()
    {
        volume = 5;
    }

    public void setVolume(int v)
    {
        volume = v;
    }

    public void louder()
    {
        volume++;
    }

${get("int", "getVolume", "volume")}
}`;
const GUARD_SET = `    public void setVolume(int v)
    {
        if (v < 0)
        {
            volume = 0;
        }
        else
        {
            volume = v;
        }
    }`;
const PLAIN_SET = `    public void setVolume(int v)
    {
        volume = v;
    }`;
const SPK_K = SPEAKER.replace("public int volume;", "private int volume;").replace(PLAIN_SET, GUARD_SET);
const SPK_B = SPEAKER.replace(PLAIN_SET, GUARD_SET);
const SPK_C = SPEAKER.replace("public int volume;", "private int volume;").replace(get("int", "getVolume", "volume"), `    public int getVolume()
    {
        if (volume < 0)
        {
            return 0;
        }
        return volume;
    }`);
const SPK_D = SPEAKER.replace("public void setVolume", "private void setVolume");
const SPK_USE = `Speaker s = new Speaker();
s.setVolume(-4);
s.louder();
System.out.println(s.getVolume());`;
const SPK_POKE = `Speaker s = new Speaker();
s.volume = -3;
System.out.println(s.getVolume());`;

const u3a = [
  { id: "u3a-01", skill: "classes", type: "mcq", topic: "3.4",
    stem: "The `Timer` class stores a length of time as minutes and seconds. The constructor is intended to set both instance variables from a total number of seconds, so that `new Timer(135)` stores 2 minutes and 15 seconds. Consider the following incomplete class definition.",
    code: TIMER,
    question: "Which of the following can replace `/* missing code */` so that the constructor works as intended?",
    choices: [TIMER_K, TIMER_B, TIMER_C, TIMER_D], mono: true,
    why: [
      "`/ 60` gives the whole minutes and `% 60` gives the seconds left over, and each value is stored in its instance variable.",
      "This swaps the two. `totalSeconds % 60` is the seconds left over, not the minutes, so 135 becomes 15 minutes and 2 seconds.",
      "`int minutes` declares new local variables inside the constructor, which hide the instance variables. The locals are gone when the constructor ends, and the instance variables keep their default 0.",
      "`minutes` is a number of minutes, so subtracting it from a number of seconds is wrong: 135 minus 2 is 133. The seconds left over are `totalSeconds % 60`.",
    ],
    answer: 0,
    verify: { cases: [
      { classes: timer(TIMER_K), run: TIMER_RUN, out: "2:15" },
      { classes: timer(TIMER_B), run: TIMER_RUN, out: "15:2" },
      { classes: timer(TIMER_C), run: TIMER_RUN, out: "0:0" },
      { classes: timer(TIMER_D), run: TIMER_RUN, out: "2:133" },
    ] } },

  { id: "u3a-02", skill: "classes", type: "mcq", topic: "3.4",
    stem: "Consider the following class definition and code segment. The code segment appears in a class other than `Sandwich`.",
    classes: SANDWICH,
    code: `Sandwich s = new Sandwich();
System.out.println(s.getBread() + " " + s.getToppings() + " " + s.getPrice());`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["wheat 3 5.0", "wheat 3 5.5", "wheat 2 5.0", "null 1 0.0"], mono: true,
    why: [
      "`new Sandwich()` calls `this(\"wheat\")`, which calls `this(\"wheat\", 2)`. That constructor sets the bread, 2 toppings, and a price of 4.0 + 0.5 * 2. Back in the no-parameter constructor, `toppings++` makes 3, but nothing computes the price again.",
      "The price was computed once, when `toppings` was 2. Adding a topping afterward does not change the stored price.",
      "After the chained constructors finish, the rest of the no-parameter constructor runs, so `toppings++` makes 3.",
      "`this(\"wheat\")` runs first and leads to the constructor that sets every instance variable. Only then does `toppings++` run.",
    ],
    answer: 0,
    verify: { out: "wheat 3 5.0" } },

  { id: "u3a-03", skill: "classes", type: "mcq", topic: "3.4",
    stem: "Consider the following class definition and code segment. The code segment appears in a class other than `Scoreboard`.",
    classes: SCOREBOARD,
    code: `Scoreboard game = new Scoreboard();
game.homeScores(3);
System.out.println(game.getHome() + " " + game.getAway() + " " + game.isFinished());`,
    question: "What is the result of compiling and running the code segment?",
    choices: [
      "3 0 false",
      "Nothing is printed. The code segment does not compile, because `Scoreboard` has no constructor.",
      "Nothing is printed. The class does not compile, because `away` and `finished` are never given values.",
      "3 null null",
    ], mono: true,
    why: [
      "A class with no constructor gets a default constructor with no parameters, and its instance variables start at their default values: 0 for an `int` and `false` for a `boolean`. `homeScores(3)` then adds 3 to `home`.",
      "When a class declares no constructor, Java supplies one with no parameters, so `new Scoreboard()` compiles.",
      "Instance variables get default values when the object is made, so using them without assigning them compiles. Only local variables must be given a value before they are used.",
      "`null` is the default for a reference, such as a `String`. The default for an `int` is 0, and for a `boolean` it is `false`.",
    ],
    answer: 0,
    verify: { out: "3 0 false" } },

  { id: "u3a-04", skill: "classes", type: "mcq", topic: "3.4",
    stem: "Consider the following class definition.",
    classes: FLIGHT,
    question: "Which of the following statements, appearing in a class other than `Flight`, will compile without error?\n\nI. `Flight f = new Flight(\"SC12\", 180);`\nII. `Flight f = new Flight(180, \"SC12\");`\nIII. `Flight f = new Flight(\"SC40\", 220, true);`",
    choices: ["I and III only", "I only", "III only", "I, II, and III"],
    why: [
      "I matches `Flight(String, int)` and III matches `Flight(String, int, boolean)`. II lists an `int` and then a `String`, and no constructor takes them in that order.",
      "III has three arguments of types `String`, `int`, and `boolean`, which match the second constructor exactly.",
      "I matches the two-parameter constructor. A class may have several constructors, and a call may use any one of them.",
      "Argument order matters. No constructor takes an `int` first, so II gives `no suitable constructor found for Flight(int,String)`.",
    ],
    answer: 0,
    verify: { cases: [
      { run: "Flight f = new Flight(\"SC12\", 180);\nSystem.out.println(f.getSeats());", out: "180" },
      { run: "Flight f = new Flight(180, \"SC12\");", error: "no suitable constructor found for Flight(int,String)" },
      { run: "Flight f = new Flight(\"SC40\", 220, true);\nSystem.out.println(f.getSeats());", out: "220" },
    ] } },

  { id: "u3a-05", skill: "classes", type: "mcq", topic: "3.7",
    stem: "Consider the following class definition and code segment. The code segment appears in a class other than `Bowler`.",
    classes: BOWLER,
    code: `Bowler a = new Bowler();
Bowler b = new Bowler();
a.bowl(150);
b.bowl(180);
a.bowl(170);
b.bowl(120);
System.out.println(a.getBest() + " " + b.getBest() + " " + Bowler.getHighGame());`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["170 180 180", "170 180 170", "180 180 180", "170 120 180"], mono: true,
    why: [
      "Each bowler keeps its own `best`: `a` bowled 150 and 170, and `b` bowled 180 and 120. `highGame` is static, so both bowlers check and update the same variable, and it ends at 180.",
      "This gives `a` its own high game. There is one `highGame` for the class, and `b`'s 180 went into it.",
      "`best` is an instance variable, so `a` and `b` each have their own. Only `highGame` is shared.",
      "`best` changes only when a score is higher, so `b`'s 120 does not replace its 180.",
    ],
    answer: 0,
    verify: { out: "170 180 180" } },

  { id: "u3a-06", skill: "classes", type: "mcq", topic: "3.7",
    stem: "Consider the following class definition.",
    code: THERMO.replace("\n    /* added method */", ""),
    question: "Which of the following methods can be added to `Thermometer` without causing a compile error?\n\nI. `public static int getReadings() { return readings; }`\nII. `public static double toFahrenheit(double c) { return c * 9 / 5 + 32; }`\nIII. `public static double getFahrenheit() { return celsius * 9 / 5 + 32; }`",
    choices: ["I and II only", "I only", "II and III only", "I, II, and III"],
    why: [
      "A static method can use static variables and its own parameters. I reads the static `readings`, and II uses only its parameter `c`. III reads `celsius`, an instance variable, and a static method has no object to read it from.",
      "II uses only its parameter, so it needs no object. A static method can do any work that uses only its parameters and static variables.",
      "III uses the instance variable `celsius`, and javac reports `non-static variable celsius cannot be referenced from a static context`.",
      "III does not compile. A static method has no `this`, so it cannot read `celsius`.",
    ],
    answer: 0,
    verify: { cases: [
      { classes: thermo(TH_I), run: "Thermometer t1 = new Thermometer(20.0);\nThermometer t2 = new Thermometer(30.0);\nSystem.out.println(Thermometer.getReadings());", out: "2" },
      { classes: thermo(TH_II), run: "System.out.println(Thermometer.toFahrenheit(100.0));", out: "212.0" },
      { classes: thermo(TH_III), run: "Thermometer t1 = new Thermometer(20.0);", error: "non-static variable celsius cannot be referenced from a static context" },
    ] } },

  { id: "u3a-07", skill: "classes", type: "mcq", topic: "3.7",
    stem: "Consider the following class definition and code segment. The code segment appears in a class other than `Crate`.",
    classes: CRATE,
    code: `Crate c1 = new Crate(30);
Crate c2 = new Crate(45);
Crate c3 = new Crate(20);
System.out.println(Crate.combined(c1, c3) + " " + Crate.getHeaviest());`,
    question: "What is the result of compiling and running the code segment?",
    choices: ["50 45", "50 20", "75 45", "Nothing is printed. The class does not compile, because the static method `combined` uses the instance variable `weight`."], mono: true,
    why: [
      "`combined` is static, but it is given two `Crate` objects, so it can read their `weight` through the parameters. Because the code is inside `Crate`, it may use their private variables. `c1` and `c3` weigh 30 and 20. Each constructor updates the shared `heaviest`, which ends at 45.",
      "`heaviest` changes only when a new crate is heavier, so the 20-pound crate does not replace 45.",
      "The call passes `c1` and `c3`, not `c1` and `c2`.",
      "A static method cannot use an instance variable on its own, but it can through an object it is given. `a.weight` names the object to read from.",
    ],
    answer: 0,
    verify: { out: "50 45" } },

  { id: "u3a-08", skill: "classes", type: "mcq", topic: "3.7",
    stem: "The `LibraryCard` class is intended to keep one count of the books checked out on all cards together. For example, if one card checks out 1 book and another card checks out 2, `getTotal` returns 3 when it is called on either card. Consider the following incomplete class definition.",
    code: CARD,
    question: "Which of the following can replace `/* missing declaration */` so that the class works as intended?",
    choices: [CARD_K, CARD_B, CARD_C, CARD_D], mono: true,
    why: [
      "`static` gives the class one copy of `totalCheckouts`, shared by every card, so every `checkOut` adds to the same count.",
      "Without `static`, each card has its own count, so one card reports 1 and the other reports 2.",
      "Making the variable `public` does not share it. Each card still has its own copy, and the instance variable is no longer encapsulated.",
      "`final` means the value cannot change, so `totalCheckouts++` does not compile: `cannot assign a value to static final variable totalCheckouts`.",
    ],
    answer: 0,
    verify: { cases: [
      { classes: card(CARD_K), run: CARD_RUN, out: "3 3" },
      { classes: card(CARD_B), run: CARD_RUN, out: "1 2" },
      { classes: card(CARD_C), run: CARD_RUN, out: "1 2" },
      { classes: card(CARD_D), run: CARD_RUN, error: "cannot assign a value to static final variable totalCheckouts" },
    ] } },

  { id: "u3a-09", skill: "classes", type: "mcq", topic: "3.8",
    stem: "Consider the following class definition and code segment. The code segment appears in a class other than `Survey`.",
    classes: SURVEY,
    code: `Survey s = new Survey();
s.record(true);
s.record(false);
System.out.println(s.getYes() + " " + s.getTotal());`,
    question: "Which of the following best describes the result of compiling and running the code segment?",
    choices: [
      "The class does not compile, because the local variable `change` might not have a value when it is used.",
      "`1 2` is printed, because `change` starts at 0 when `answer` is `false`.",
      "The class does not compile, because `yes` and `total` are never given values.",
      "The class compiles, but an exception is thrown when `record(false)` runs.",
    ],
    why: [
      "A local variable gets no default value. When `answer` is `false`, nothing assigns `change` before `yes += change` uses it, so javac reports `variable change might not have been initialized`.",
      "Instance variables start at 0, but local variables do not start at any value. Java rejects the code before it can run.",
      "`yes` and `total` are instance variables, so they start at 0 with no assignment. The problem is the local variable `change`.",
      "This is caught by the compiler, not at run time. Java checks that every local variable is assigned before it is used.",
    ],
    answer: 0,
    verify: { error: "variable change might not have been initialized" } },

  { id: "u3a-10", skill: "classes", type: "mcq", topic: "3.9",
    stem: "The constructor of the `Kite` class is intended to store its parameters in the instance variables, so that `new Kite(\"red\", 120)` makes a red kite 120 centimeters long. Consider the following incomplete class definition.",
    code: KITE,
    question: "Which of the following can replace `/* missing code */` so that the constructor works as intended?",
    choices: [KITE_K, KITE_B, KITE_C, KITE_D], mono: true,
    why: [
      "The parameters have the same names as the instance variables, so inside the constructor `color` and `length` mean the parameters. `this.color` names the instance variable of the object being built.",
      "Both sides of `color = color;` mean the parameter, so each line sets a parameter to itself. The instance variables keep their defaults, `null` and 0.",
      "This copies the instance variables into the parameters, the wrong direction. The instance variables keep `null` and 0.",
      "The first line is right, but `length = length;` sets the parameter to itself, so the instance variable `length` stays 0.",
    ],
    answer: 0,
    verify: { cases: [
      { classes: kite(KITE_K), run: KITE_RUN, out: "red 120" },
      { classes: kite(KITE_B), run: KITE_RUN, out: "null 0" },
      { classes: kite(KITE_C), run: KITE_RUN, out: "null 0" },
      { classes: kite(KITE_D), run: KITE_RUN, out: "red 0" },
    ] } },

  { id: "u3a-11", skill: "classes", type: "mcq", topic: "3.9",
    stem: "Consider the following class definition and code segment. The code segment appears in a class other than `Pumpkin`.",
    classes: PUMPKIN,
    code: `Pumpkin a = new Pumpkin("Ivy", 210);
Pumpkin b = new Pumpkin("Max", 260);
Pumpkin c = new Pumpkin("Rae", 240);
Pumpkin winner = a.heavier(b).heavier(c);
System.out.println(winner.getGrower());`,
    question: "What is the result of compiling and running the code segment?",
    choices: ["Max", "Rae", "Ivy", "Nothing is printed. The class does not compile, because `heavier` uses the private variable `pounds` of another `Pumpkin`."], mono: true,
    why: [
      "`a.heavier(b)` returns `b`, because 260 is more than 210. That call returns a reference to `b`, so the next call is `b.heavier(c)`, and inside it `this` is `b`. 240 is not more than 260, so it returns `this`, which is `b`.",
      "The second call compares `c` with `b`, the pumpkin the first call returned, and `c` is lighter.",
      "`this` is the object a method is called on. In the second call, that object is `b`, not `a`.",
      "Code inside the `Pumpkin` class can use the private variables of any `Pumpkin` object, including one passed as a parameter.",
    ],
    answer: 0,
    verify: { out: "Max" } },

  { id: "u3a-12", skill: "classes", type: "mcq", topic: "3.5",
    stem: "Consider the following class definition and code segment. The code segment appears in a class other than `ParkingMeter`.",
    classes: METER,
    code: `ParkingMeter m = new ParkingMeter(120);
int a = m.insert(4);
int b = m.insert(5);
System.out.println(a + " " + b + " " + m.getMinutes());`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["0 15 120", "0 15 135", "0 0 135", "60 135 120"], mono: true,
    why: [
      "4 quarters give 60 minutes, which fits, so the first call skips the `if` and returns 0. 5 more quarters would make 135, so the `if` stores the 15 extra minutes in `extra`, sets the minutes to the maximum, and returns 15.",
      "Inside the `if`, `minutes = maxMinutes` runs before the `return`, so the meter holds 120.",
      "The second call goes into the `if`, and `return extra;` ends the method there. The `return 0;` at the bottom never runs on that call.",
      "`insert` returns the extra minutes, not the minutes on the meter. The first call has no extra minutes.",
    ],
    answer: 0,
    verify: { out: "0 15 120" } },

  { id: "u3a-13", skill: "classes", type: "mcq", topic: "3.5",
    stem: "The `Item` class stores a price. The method `getSalePrice` is intended to return the price after a discount of `percent` percent, without changing the price stored in the object. For example, for an `Item` with a price of 50.0, `getSalePrice(20)` returns 40.0. Consider the following incomplete class definition.",
    code: ITEM,
    question: "Which of the following can replace `/* missing method */` so that `getSalePrice` works as intended?",
    choices: [ITEM_K, ITEM_B, ITEM_C, ITEM_D], mono: true,
    why: [
      "It computes the sale price from `price` and returns it as a `double`, and it never assigns to `price`, so the object is unchanged.",
      "A `void` method returns nothing, so the sale price never reaches the caller, and this version changes `price` as well.",
      "It returns 40.0 the first time, but it changes `price` too, so a second call returns 32.0 and the item's price is now 32.0.",
      "The value is computed but never returned. A method with a `double` return type must return one: `missing return statement`.",
    ],
    answer: 0,
    verify: { cases: [
      { classes: item(ITEM_K), run: ITEM_RUN, out: "40.0\n40.0\n50.0" },
      { classes: item(ITEM_B), run: ITEM_RUN, error: "'void' type not allowed here" },
      { classes: item(ITEM_C), run: ITEM_RUN, out: "40.0\n32.0\n32.0" },
      { classes: item(ITEM_D), run: ITEM_RUN, error: "missing return statement" },
    ] } },

  { id: "u3a-14", skill: "classes", type: "mcq", topic: "3.5",
    stem: "Consider the following class definition and code segment. The code segment appears in a class other than `Oven`.",
    classes: OVEN,
    code: `Oven o = new Oven(300);
int goal = 360;
int n = o.preheat(goal);
System.out.println(n + " " + o.getTemp() + " " + goal);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["3 375 360", "3 375 375", "2 350 360", "3 300 360"], mono: true,
    why: [
      "The loop adds 25 while the temperature is below 360: 325, 350, 375, so it runs 3 times. `target = temp;` changes only the parameter, a copy of `goal`, so `goal` is still 360.",
      "`target` is a copy of the value in `goal`. Assigning to the parameter does not change the variable passed in.",
      "350 is still less than 360, so the loop runs a third time and reaches 375.",
      "`temp` is the oven's instance variable, and the loop changes it. The change stays after the method returns.",
    ],
    answer: 0,
    verify: { out: "3 375 360" } },

  { id: "u3a-15", skill: "classes", type: "mcq", topic: "3.6",
    stem: "Consider the following class definition and code segment. The code segment appears in a class other than `Backpack`.",
    classes: BACKPACK,
    code: `Backpack mine = new Backpack(3);
Backpack yours = new Backpack(3);
Backpack theirs = mine;
theirs.add(2);
yours.add(2);
System.out.println(mine.getBooks() + " " + yours.getBooks() + " " + (mine == yours) + " " + (mine == theirs));`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["5 5 false true", "3 5 false false", "5 5 true true", "5 5 false false"], mono: true,
    why: [
      "`theirs = mine` copies the reference, so `theirs` and `mine` name one backpack, and adding through `theirs` changes it. `yours` is a separate backpack that also has 5 books. `==` on objects asks whether two references refer to the same object: `mine` and `yours` do not, and `mine` and `theirs` do.",
      "`Backpack theirs = mine;` does not make a new backpack. Both names refer to the same object, so it has 5 books, and `mine == theirs` is `true`.",
      "`==` compares references, not the values inside. `mine` and `yours` hold the same number of books but are two different objects.",
      "`mine` and `theirs` hold the same reference, so `mine == theirs` is `true`.",
    ],
    answer: 0,
    verify: { out: "5 5 false true" } },

  { id: "u3a-16", skill: "classes", type: "mcq", topic: "3.6",
    stem: "Consider the following class definition and code segment. The code segment appears in a class other than `FuelTank`.",
    classes: FUELTANK,
    code: `FuelTank a = new FuelTank(10);
FuelTank b = new FuelTank(4);
a.pourInto(b, 6);
b.pourInto(a, 12);
System.out.println(a.getLiters() + " " + b.getLiters());`,
    question: "What is the result of compiling and running the code segment?",
    choices: ["14 0", "16 -2", "4 0", "Nothing is printed. The class does not compile, because `pourInto` uses the private variable `liters` of `other`."], mono: true,
    why: [
      "The first call moves 6 liters from `a` to `b`, leaving 4 and 10. The second asks `b` to pour 12, but `b` has only 10, so `amount` becomes 10, and `a` ends with 14.",
      "This skips the `if`. `pourInto` never pours more than the tank holds, so `b` stops at 0.",
      "`other` holds a copy of the reference, not a copy of the tank, so `other.liters += amount` changes the real tank that was passed in.",
      "Code inside `FuelTank` can use the private variables of any `FuelTank` object, so `other.liters` compiles.",
    ],
    answer: 0,
    verify: { out: "14 0" } },

  { id: "u3a-17", skill: "classes", type: "mcq", topic: "3.3",
    stem: "The `Fridge` class below stores its temperature in Fahrenheit in the private instance variable `degreesF`. A programmer rewrites the class to store the temperature in Celsius in a private instance variable `degreesC` instead. The headers of the constructor and both methods stay the same, and `getFahrenheit` returns the same values as before.",
    code: FRIDGE_F,
    question: "Which of the following is true about other classes that use `Fridge`?",
    choices: [
      "Code that uses only the constructor and public methods keeps working with no change.",
      "Every class that makes a `Fridge` must be changed to use `degreesC`.",
      "Code that read `degreesF` directly must be changed to read `degreesC`.",
      "The class must keep a variable named `degreesF`, or other classes will not compile.",
    ],
    why: [
      "`degreesF` is private, so no other class could ever use it. Other classes depend only on the public headers, and those did not change, so they compile and get the same values.",
      "Other classes never saw `degreesF`, so they have nothing to change. They call the same constructor and methods as before.",
      "No code outside `Fridge` could read `degreesF`. It is private, so such code would never have compiled.",
      "Private variables are hidden from other classes, so their names can change freely. Only public names must stay the same.",
    ],
    answer: 0,
    verify: { cases: [
      { classes: FRIDGE_F, run: FRIDGE_RUN, out: "41.0" },
      { classes: FRIDGE_C, run: FRIDGE_RUN, out: "41.0" },
      { classes: FRIDGE_F, run: "Fridge f = new Fridge(38.0);\nSystem.out.println(f.degreesF);", error: "degreesF has private access in Fridge" },
    ] } },

  { id: "u3a-18", skill: "classes", type: "mcq", topic: "3.3",
    stem: "The `Speaker` class below is intended so that the volume is never negative. Code in other classes sometimes calls `setVolume` with a negative number, and sometimes sets `volume` directly.",
    code: SPEAKER,
    question: "Which of the following changes guarantees that no code outside `Speaker` can make the volume negative?",
    choices: [
      "Make `volume` private, and change `setVolume` so that it sets `volume` to 0 when `v` is negative.",
      "Keep `volume` public, and change `setVolume` so that it sets `volume` to 0 when `v` is negative.",
      "Make `volume` private, and change `getVolume` so that it returns 0 when `volume` is negative.",
      "Make `setVolume` private, and keep `volume` public.",
    ],
    why: [
      "With `volume` private, other classes can change it only through the methods. `setVolume` now refuses negative values and `louder` only adds 1, so nothing outside the class can store a negative volume.",
      "Other code can still skip `setVolume` and write `s.volume = -3;` directly. The check works only when the variable is private.",
      "The object still stores the negative number and only hides it when asked. After `setVolume(-4)` and then `louder()`, the speaker holds -3, and `getVolume` returns 0 instead of 1.",
      "With `volume` public, other code can still set it to any number directly.",
    ],
    answer: 0,
    verify: { cases: [
      { classes: SPK_K, run: SPK_USE, out: "1" },
      { classes: SPK_K, run: SPK_POKE, error: "volume has private access in Speaker" },
      { classes: SPK_B, run: SPK_POKE, out: "-3" },
      { classes: SPK_C, run: SPK_USE, out: "0" },
      { classes: SPK_D, run: SPK_POKE, out: "-3" },
    ] } },
];

// ---------- Unit 3 Test Practice A: free response ----------

const PLAYLIST = `public class Playlist
{
    private int maxSongs;
    private int songCount;
    private int totalSeconds;

    public Playlist()
    {
        maxSongs = 20;
        songCount = 0;
        totalSeconds = 0;
    }

    public Playlist(int max)
    {
        maxSongs = max;
        songCount = 0;
        totalSeconds = 0;
    }

    public boolean addSong(int seconds)
    {
        if (songCount < maxSongs)
        {
            songCount++;
            totalSeconds += seconds;
            return true;
        }
        return false;
    }

    public double averageLength()
    {
        if (songCount == 0)
        {
            return 0.0;
        }
        return (double) totalSeconds / songCount;
    }

    public String totalTime()
    {
        int minutes = totalSeconds / 60;
        int seconds = totalSeconds % 60;
        if (seconds < 10)
        {
            return minutes + ":0" + seconds;
        }
        return minutes + ":" + seconds;
    }
}`;

u3a.push({ id: "u3a-frq", skill: "frq", type: "code", topic: "3.4", title: "The playlist",
  prompt: "The `Playlist` class, which you will write, keeps track of the songs added to a playlist by their lengths in seconds. A playlist holds a limited number of songs.\n\n`Playlist` objects are created by calls to either of two constructors.\n\n- `Playlist()` makes an empty playlist that holds at most 20 songs.\n- `Playlist(int maxSongs)` makes an empty playlist that holds at most `maxSongs` songs. Assume `maxSongs` is at least 1.\n\nThe class has three methods.\n\n- `addSong(int seconds)` returns a `boolean`. If the playlist has fewer songs than its maximum, the song is added and the method returns `true`. Otherwise the playlist is unchanged and the method returns `false`. Assume `seconds` is positive.\n- `averageLength()` returns a `double`: the average length, in seconds, of the songs added so far, or 0.0 if no songs have been added.\n- `totalTime()` returns a `String`: the total length of the songs added so far, written as the minutes, a colon, and two digits of seconds. For example, 427 seconds is `\"7:07\"` and 627 seconds is `\"10:27\"`. A playlist with no songs returns `\"0:00\"`.\n\nThe table shows a sequence of statements and their results. The statements appear in a class other than `Playlist`.\n\nWrite the complete `Playlist` class. Your implementation must meet all specifications and conform to the examples in the table. Do not use arrays.",
  sample: `Statement                         Returns   Explanation
Playlist road = new Playlist(3);            road holds at most 3 songs.
road.averageLength()              0.0       No songs have been added.
road.totalTime()                  "0:00"
road.addSong(185)                 true      1 song, 185 seconds in all
road.addSong(242)                 true      2 songs, 427 seconds in all
road.averageLength()              213.5     427 seconds over 2 songs
road.totalTime()                  "7:07"
road.addSong(200)                 true      3 songs, 627 seconds in all
road.addSong(150)                 false     road is full and does not change.
road.totalTime()                  "10:27"
Playlist mix = new Playlist();              mix holds at most 20 songs.
mix.addSong(61)                   true
mix.totalTime()                   "1:01"
mix.averageLength()               61.0`,
  rows: [
    { name: "Declares the class and its variables", earns: "Declares `public class Playlist` with private instance variables of suitable types for the maximum number of songs, the number of songs added, and the total seconds (or an equivalent set). No instance variable is static, and none is declared inside a method." },
    { name: "Declares both constructors", earns: "Declares the public constructors `Playlist()` and `Playlist(int ___)`, with no return type." },
    { name: "Constructors set every variable", earns: "Each constructor gives every instance variable its starting value: the maximum is 20 or the parameter, and the number of songs and the total start at 0. Calling `this(20)` from the no-parameter constructor is fine." },
    { name: "Adds a song only when there is room", earns: "Declares `public boolean addSong(int ___)`, and only when the number of songs is less than the maximum, adds 1 to the number of songs and the length to the total." },
    { name: "Returns the result of the add", earns: "`addSong` returns `true` when the song is added and `false` when the playlist is full, on every path." },
    { name: "Computes the average safely", earns: "Declares `public double averageLength()`, which returns 0.0 when no songs have been added and otherwise returns the total divided by the number of songs with `double` division (`(double) total / count`), computed from the instance variables." },
    { name: "Builds the total time", earns: "Declares `public String totalTime()`, which returns the minutes (`total / 60`), a colon, and the seconds left over (`total % 60`), with a 0 in front of the seconds when they are less than 10. A method that prints instead of returning does not earn this row." },
  ],
  notes: NOTE + " A response that adds to the count and the total before checking for room, or that changes them when the playlist is full, does not earn row 4. Integer division in `averageLength` (213 instead of 213.5) does not earn row 6, and neither does an average stored in an instance variable that is not updated on every add. `\"7:7\"` for 427 seconds does not earn row 7. `toString` is not required and earns nothing.",
  solution: PLAYLIST,
  verify: { cases: [
    { classes: unpub(PLAYLIST), run: `Playlist road = new Playlist(3);
System.out.println(road.averageLength());
System.out.println(road.totalTime());
System.out.println(road.addSong(185));
System.out.println(road.addSong(242));
System.out.println(road.averageLength());
System.out.println(road.totalTime());
System.out.println(road.addSong(200));
System.out.println(road.addSong(150));
System.out.println(road.totalTime());
System.out.println(road.averageLength());
Playlist mix = new Playlist();
System.out.println(mix.addSong(61));
System.out.println(mix.totalTime());
System.out.println(mix.averageLength());`, out: "0.0\n0:00\ntrue\ntrue\n213.5\n7:07\ntrue\nfalse\n10:27\n209.0\ntrue\n1:01\n61.0" },
    { classes: unpub(PLAYLIST), run: `Playlist big = new Playlist();
int added = 0;
for (int i = 0; i < 25; i++)
{
    if (big.addSong(60))
    {
        added++;
    }
}
System.out.println(added + " " + big.totalTime() + " " + big.averageLength());`, out: "20 20:00 60.0" },
    { classes: unpub(PLAYLIST), run: `Playlist one = new Playlist(1);
System.out.println(one.addSong(9) + " " + one.totalTime());
System.out.println(one.addSong(5) + " " + one.totalTime() + " " + one.averageLength());`, out: "true 0:09\nfalse 0:09 9.0" },
  ] } });

// =====================================================================
// Unit 3 Test Practice B
// =====================================================================

const HEIGHT = `class Height
{
    private int feet;
    private int inches;

    public Height(int totalInches)
    {
        /* missing code */
    }

${get("int", "getFeet", "feet")}

${get("int", "getInches", "inches")}
}`;
const height = (p) => fill(HEIGHT, "/* missing code */", p, 8);
const HEIGHT_RUN = `Height h = new Height(70);
System.out.println(h.getFeet() + " " + h.getInches());`;
const HEIGHT_K = "feet = totalInches / 12;\ninches = totalInches % 12;";
const HEIGHT_B = "int feet = totalInches / 12;\ninches = totalInches % 12;";
const HEIGHT_C = "feet = totalInches / 12;\ninches = totalInches - 12;";
const HEIGHT_D = "feet = (double) totalInches / 12;\ninches = totalInches % 12;";

const COFFEE = `class Coffee
{
    private String size;
    private int shots;
    private double price;

    public Coffee(String s, int n)
    {
        size = s;
        shots = n;
        price = 2.5 + 0.75 * n;
    }

    public Coffee(int n)
    {
        this("small", n);
        price += 1.0;
    }

    public Coffee()
    {
        this(1);
        size = "medium";
    }

${get("String", "getSize", "size")}

${get("int", "getShots", "shots")}

${get("double", "getPrice", "price")}
}`;

const ODOMETER = `class Odometer
{
    private String owner;
    private int miles;
    private double gallons;

    public void drive(int m)
    {
        miles += m;
    }

${get("String", "getOwner", "owner")}

${get("int", "getMiles", "miles")}

${get("double", "getGallons", "gallons")}
}`;

const CONCERT = `class Concert
{
    private String band;
    private int capacity;
    private double price;

    public Concert(String b, double p)
    {
        band = b;
        capacity = 500;
        price = p;
    }

    public Concert(String b, int c, double p)
    {
        band = b;
        capacity = c;
        price = p;
    }

${get("double", "getPrice", "price")}
}`;

const RACER = `class Racer
{
    private static int fastest = 999;
    private int bestTime;

    public Racer()
    {
        bestTime = 999;
    }

    public void race(int seconds)
    {
        if (seconds < bestTime)
        {
            bestTime = seconds;
        }
        if (seconds < fastest)
        {
            fastest = seconds;
        }
    }

${get("int", "getBestTime", "bestTime")}

    public static int getFastest()
    {
        return fastest;
    }
}`;

const GARAGE = `class Garage
{
    private int cars;
    private static double rate = 2.5;

    public Garage()
    {
        cars = 0;
    }

    public void park()
    {
        cars++;
    }
    /* added method */
}`;
const garage = (m) => fill(GARAGE, "/* added method */", "\n" + m, 4);
const GA_I = "public static double cost(int hours)\n{\n    return rate * hours;\n}";
const GA_II = "public static boolean isFull()\n{\n    return cars >= 50;\n}";
const GA_III = "public static void setRate(double r)\n{\n    rate = r;\n}";

const ROPE = `class Rope
{
    private int length;
    private static int longest = 0;

    public Rope(int len)
    {
        length = len;
        if (len > longest)
        {
            longest = len;
        }
    }

${get("int", "getLength", "length")}

    public static Rope tie(Rope a, Rope b)
    {
        return new Rope(a.length + b.length - 1);
    }

    public static int getLongest()
    {
        return longest;
    }
}`;

const SELLER = `class Seller
{
    private static int sold = 0;
    private int mine;

    public Seller()
    {
        mine = 0;
    }

    public void sell(int n)
    {
        /* missing code */
    }

${get("int", "getMine", "mine")}

    public static int getSold()
    {
        return sold;
    }
}`;
const seller = (p) => fill(SELLER, "/* missing code */", p, 8);
const SELLER_RUN = `Seller s1 = new Seller();
Seller s2 = new Seller();
s1.sell(3);
s2.sell(4);
s1.sell(2);
System.out.println(s1.getMine() + " " + Seller.getSold());`;
const SELLER_K = "mine += n;\nsold += n;";
const SELLER_B = "mine += n;";
const SELLER_C = "int sold = 0;\nmine += n;\nsold += n;";
const SELLER_D = "sold = mine + n;\nmine += n;";

const PEDOMETER = `class Pedometer
{
    private int steps;
    private int days;

    public void logDay(int s)
    {
        steps += s;
        days++;
    }

    public double average()
    {
        double avg;
        if (days > 0)
        {
            avg = (double) steps / days;
        }
        return avg;
    }
}`;

const BIKE = `class Bike
{
    private String brand;
    private int gears;

    public Bike(String brand, int gears)
    {
        this.brand = brand;
        gears = gears;
    }

${get("String", "getBrand", "brand")}

${get("int", "getGears", "gears")}
}`;

const SUNFLOWER = `class Sunflower
{
    private String name;
    private int height;

    public Sunflower(String n, int h)
    {
        name = n;
        height = h;
    }

    public Sunflower taller(Sunflower other)
    {
        if (other.height >= this.height)
        {
            return other;
        }
        return this;
    }

${get("String", "getName", "name")}
}`;

const COATCHECK = `class CoatCheck
{
    private int coats;
    private int hooks;

    public CoatCheck(int h)
    {
        hooks = h;
        coats = 0;
    }

    public int checkIn(int n)
    {
        if (coats + n > hooks)
        {
            int turnedAway = coats + n - hooks;
            coats = hooks;
            return turnedAway;
        }
        coats += n;
        return 0;
    }

${get("int", "getCoats", "coats")}
}`;

const BOOK = `class Book
{
    private int pages;
    private int pagesRead;

    public Book(int p)
    {
        pages = p;
        pagesRead = 0;
    }

    public void read(int n)
    {
        pagesRead += n;
    }

${get("int", "getPages", "pages")}

    /* missing method */
}`;
const book = (m) => fill(BOOK, "/* missing method */", m, 4);
const BOOK_RUN = `Book b = new Book(300);
b.read(120);
int left = b.getRemaining();
System.out.println(left + " " + b.getRemaining() + " " + b.getPages());`;
const BOOK_K = "public int getRemaining()\n{\n    return pages - pagesRead;\n}";
const BOOK_B = "public void getRemaining()\n{\n    System.out.println(pages - pagesRead);\n}";
const BOOK_C = "public int getRemaining()\n{\n    pages = pages - pagesRead;\n    return pages;\n}";
const BOOK_D = "public int getRemaining()\n{\n    int left = pages - pagesRead;\n}";

const BATTERY = `class Battery
{
    private int charge;

    public Battery(int c)
    {
        charge = c;
    }

    public int useFor(int minutes)
    {
        int used = 0;
        while (minutes > 0 && charge > 0)
        {
            charge -= 2;
            minutes--;
            used++;
        }
        return used;
    }

${get("int", "getCharge", "charge")}
}`;

const NOTEBOOK = `class Notebook
{
    private int pages;

    public Notebook(int p)
    {
        pages = p;
    }

    public void usePages(int n)
    {
        pages -= n;
    }

${get("int", "getPages", "pages")}
}`;

const PIGGY = `class PiggyBank
{
    private int coins;

    public PiggyBank(int c)
    {
        coins = c;
    }

    public int takeAll(PiggyBank other)
    {
        coins += other.coins;
        other.coins = 0;
        return coins;
    }

${get("int", "getCoins", "coins")}
}`;

const KEEPER = `class ScoreKeeper
{
    private int sum;

    public ScoreKeeper()
    {
        sum = 0;
    }

    public void addScore(int s)
    {
        sum += s;
    }

${get("int", "getTotal", "sum")}
}`;
const KEEPER_RUN = `ScoreKeeper k = new ScoreKeeper();
k.addScore(9);
k.addScore(8);
System.out.println(k.getTotal());`;
const KEEPER_RENAME_METHOD = KEEPER.replace("getTotal", "total");
const KEEPER_RENAME_FIELD = KEEPER.replace(/\bsum\b/g, "runningSum");
const KEEPER_COUNT = KEEPER.replace("    private int sum;", "    private int sum;\n    private int count;").replace("        sum += s;", "        sum += s;\n        count++;");
const KEEPER_HELPER = KEEPER.replace("        sum += s;", "        sum += checked(s);").replace(/\n}$/, `

    private int checked(int s)
    {
        if (s < 0)
        {
            return 0;
        }
        return s;
    }
}`);

const SEATMAP = `class SeatMap
{
    private int capacity;
    public int taken;

    public SeatMap(int cap)
    {
        capacity = cap;
        taken = 0;
    }

    public void book(int n)
    {
        taken += n;
    }

${get("int", "getTaken", "taken")}
}`;
const PLAIN_BOOK = `    public void book(int n)
    {
        taken += n;
    }`;
const GUARD_BOOK = `    public void book(int n)
    {
        if (taken + n <= capacity)
        {
            taken += n;
        }
    }`;
const SEAT_K = SEATMAP.replace("public int taken;", "private int taken;").replace(PLAIN_BOOK, GUARD_BOOK);
const SEAT_B = SEATMAP.replace(PLAIN_BOOK, GUARD_BOOK);
const SEAT_C = SEATMAP.replace("public int taken;", "private int taken;").replace(/\n}$/, `

    public boolean isOverbooked()
    {
        return taken > capacity;
    }
}`);
const SEAT_D = SEATMAP.replace("public void book", "private void book");
const SEAT_USE = `SeatMap m = new SeatMap(10);
m.book(6);
m.book(6);
System.out.println(m.getTaken());`;
const SEAT_POKE = `SeatMap m = new SeatMap(10);
m.taken = 500;
System.out.println(m.getTaken());`;

const u3b = [
  { id: "u3b-01", skill: "classes", type: "mcq", topic: "3.4",
    stem: "The `Height` class stores a height as feet and inches. The constructor is intended to set both instance variables from a total number of inches, so that `new Height(70)` stores 5 feet and 10 inches. Consider the following incomplete class definition.",
    code: HEIGHT,
    question: "Which of the following can replace `/* missing code */` so that the constructor works as intended?",
    choices: [HEIGHT_K, HEIGHT_B, HEIGHT_C, HEIGHT_D], mono: true,
    why: [
      "`totalInches / 12` is `int` division, so it gives the whole feet, 5, and `% 12` gives the 10 inches left over. Both values go into the instance variables.",
      "`int feet` declares a new local variable that hides the instance variable. The local is gone when the constructor ends, so the instance variable `feet` keeps its default 0.",
      "Subtracting 12 takes away only one foot, leaving 58. The inches left over are `totalInches % 12`.",
      "`(double) totalInches / 12` is a `double`, and storing it in the `int` variable `feet` does not compile: `incompatible types: possible lossy conversion from double to int`.",
    ],
    answer: 0,
    verify: { cases: [
      { classes: height(HEIGHT_K), run: HEIGHT_RUN, out: "5 10" },
      { classes: height(HEIGHT_B), run: HEIGHT_RUN, out: "0 10" },
      { classes: height(HEIGHT_C), run: HEIGHT_RUN, out: "5 58" },
      { classes: height(HEIGHT_D), run: HEIGHT_RUN, error: "possible lossy conversion from double to int" },
    ] } },

  { id: "u3b-02", skill: "classes", type: "mcq", topic: "3.4",
    stem: "Consider the following class definition and code segment. The code segment appears in a class other than `Coffee`.",
    classes: COFFEE,
    code: `Coffee c = new Coffee();
System.out.println(c.getSize() + " " + c.getShots() + " " + c.getPrice());`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["medium 1 4.25", "small 1 4.25", "medium 1 3.25", "medium 0 0.0"], mono: true,
    why: [
      "`new Coffee()` calls `this(1)`, which calls `this(\"small\", 1)`: size small, 1 shot, and a price of 2.5 + 0.75. Back in the one-parameter constructor, the price goes up by 1.0 to 4.25. Back in the no-parameter constructor, the size becomes `\"medium\"`.",
      "After `this(1)` returns, the rest of the no-parameter constructor runs, and it sets the size to `\"medium\"`.",
      "The one-parameter constructor finishes its own body after `this(\"small\", n)` returns, so `price += 1.0` runs.",
      "`this(1)` passes 1 along to the constructor that sets every instance variable. The no-parameter constructor's own body runs only after that.",
    ],
    answer: 0,
    verify: { out: "medium 1 4.25" } },

  { id: "u3b-03", skill: "classes", type: "mcq", topic: "3.4",
    stem: "Consider the following class definition and code segment. The code segment appears in a class other than `Odometer`.",
    classes: ODOMETER,
    code: `Odometer o = new Odometer();
o.drive(12);
System.out.println(o.getOwner() + " " + o.getMiles() + " " + o.getGallons());`,
    question: "What is the result of compiling and running the code segment?",
    choices: [
      "null 12 0.0",
      "Nothing is printed. The code segment does not compile, because `Odometer` has no constructor.",
      "Nothing is printed. A `NullPointerException` is thrown, because `owner` was never given a value.",
      "null 12 0",
    ], mono: true,
    why: [
      "With no constructor written, Java supplies one with no parameters, and the instance variables start at their defaults: `null` for the `String`, 0 for the `int`, and 0.0 for the `double`. `drive(12)` adds 12 to `miles`, and joining `null` to a String gives the text `null`.",
      "When a class declares no constructor, Java provides a default constructor with no parameters, so `new Odometer()` compiles.",
      "A `NullPointerException` comes from calling a method on `null`. `getOwner()` is called on `o`, which refers to a real object, and it returns `null`, which `+` joins as the text `null`.",
      "`gallons` is a `double`, so its default value prints as 0.0.",
    ],
    answer: 0,
    verify: { out: "null 12 0.0" } },

  { id: "u3b-04", skill: "classes", type: "mcq", topic: "3.4",
    stem: "Consider the following class definition.",
    classes: CONCERT,
    question: "Which of the following statements, appearing in a class other than `Concert`, will compile without error?\n\nI. `Concert c = new Concert(\"Lumen\", 25);`\nII. `Concert c = new Concert(\"Lumen\", 25.0, 300);`\nIII. `Concert c = new Concert(\"Lumen\", 300, 40.0);`",
    choices: ["I and III only", "III only", "I only", "I, II, and III"],
    why: [
      "I matches `Concert(String, double)`: an `int` argument can be passed to a `double` parameter, and 25 becomes 25.0. III matches `Concert(String, int, double)`. II has a `double` second and an `int` third, which matches neither constructor.",
      "An `int` value can be passed where a `double` is expected, so I uses the two-parameter constructor.",
      "III matches the three-parameter constructor exactly: a `String`, an `int`, and a `double`, in that order.",
      "II puts the `double` before the `int`. A `double` cannot be passed to an `int` parameter, so javac reports `no suitable constructor found for Concert(String,double,int)`.",
    ],
    answer: 0,
    verify: { cases: [
      { run: "Concert c = new Concert(\"Lumen\", 25);\nSystem.out.println(c.getPrice());", out: "25.0" },
      { run: "Concert c = new Concert(\"Lumen\", 25.0, 300);", error: "no suitable constructor found for Concert(String,double,int)" },
      { run: "Concert c = new Concert(\"Lumen\", 300, 40.0);\nSystem.out.println(c.getPrice());", out: "40.0" },
    ] } },

  { id: "u3b-05", skill: "classes", type: "mcq", topic: "3.7",
    stem: "Consider the following class definition and code segment. The code segment appears in a class other than `Racer`.",
    classes: RACER,
    code: `Racer a = new Racer();
Racer b = new Racer();
a.race(62);
b.race(58);
a.race(60);
b.race(65);
System.out.println(a.getBestTime() + " " + b.getBestTime() + " " + Racer.getFastest());`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["60 58 58", "60 58 60", "58 58 58", "60 65 58"], mono: true,
    why: [
      "Each racer keeps its own `bestTime`: `a` ran 62 and 60, and `b` ran 58 and 65. `fastest` is static, so every race checks the same variable, and it ends at 58.",
      "This gives `a` its own fastest time. There is one `fastest` for the whole class, and `b`'s 58 went into it.",
      "`bestTime` is an instance variable, so each racer keeps its own. Only `fastest` is shared.",
      "`bestTime` changes only when a time is lower, so `b`'s 65 does not replace its 58.",
    ],
    answer: 0,
    verify: { out: "60 58 58" } },

  { id: "u3b-06", skill: "classes", type: "mcq", topic: "3.7",
    stem: "Consider the following class definition.",
    code: GARAGE.replace("\n    /* added method */", ""),
    question: "Which of the following methods can be added to `Garage` without causing a compile error?\n\nI. `public static double cost(int hours) { return rate * hours; }`\nII. `public static boolean isFull() { return cars >= 50; }`\nIII. `public static void setRate(double r) { rate = r; }`",
    choices: ["I and III only", "I only", "I, II, and III", "II and III only"],
    why: [
      "A static method may use static variables and its own parameters. I reads the static `rate` and the parameter `hours`, and III changes the static `rate`. II reads `cars`, an instance variable, and a static method has no object to read it from.",
      "III changes a static variable, which a static method is allowed to do.",
      "II does not compile: `non-static variable cars cannot be referenced from a static context`.",
      "I uses only a static variable and a parameter, so it needs no object. II is the one that fails.",
    ],
    answer: 0,
    verify: { cases: [
      { classes: garage(GA_I), run: "System.out.println(Garage.cost(4));", out: "10.0" },
      { classes: garage(GA_II), run: "Garage g = new Garage();", error: "non-static variable cars cannot be referenced from a static context" },
      { classes: garage(GA_III + "\n\n" + GA_I), run: "Garage.setRate(3.0);\nSystem.out.println(Garage.cost(2));", out: "6.0" },
    ] } },

  { id: "u3b-07", skill: "classes", type: "mcq", topic: "3.7",
    stem: "Consider the following class definition and code segment. The code segment appears in a class other than `Rope`.",
    classes: ROPE,
    code: `Rope r1 = new Rope(12);
Rope r2 = new Rope(8);
Rope r3 = Rope.tie(r1, r2);
System.out.println(r3.getLength() + " " + Rope.getLongest());`,
    question: "What is the result of compiling and running the code segment?",
    choices: ["19 19", "19 12", "20 20", "Nothing is printed. The class does not compile, because the static method `tie` uses the instance variable `length`."], mono: true,
    why: [
      "`tie` is static, but it is given two `Rope` objects, so it can read their `length` through the parameters, and because the code is inside `Rope`, private variables are allowed. It returns a new rope of 12 plus 8, less 1. Making that rope runs the constructor, so `longest` becomes 19.",
      "`tie` makes its rope with `new Rope(...)`, which runs the constructor, and the constructor updates `longest`.",
      "`tie` takes 1 away for the knot, so the new rope is 19, not 20.",
      "A static method can use an instance variable through an object it is given. `a.length` names the object to read from.",
    ],
    answer: 0,
    verify: { out: "19 19" } },

  { id: "u3b-08", skill: "classes", type: "mcq", topic: "3.7",
    stem: "Each `Seller` sells raffle tickets. The method `sell` is intended to add `n` both to the tickets this seller has sold and to the total sold by all sellers together. Consider the following incomplete class definition.",
    code: SELLER,
    question: "Which of the following can replace `/* missing code */` so that `sell` works as intended?",
    choices: [SELLER_K, SELLER_B, SELLER_C, SELLER_D], mono: true,
    why: [
      "`mine` is this seller's own count and `sold` is the one count shared by every seller, so each sale adds to both.",
      "This never changes `sold`, so the total stays 0.",
      "`int sold = 0;` declares a local variable that hides the static one. The sale is added to the local, which is gone when the method ends.",
      "This sets the shared total from one seller's own count, so it loses the other sellers' sales. After the last sale it is 3 + 2, not 9.",
    ],
    answer: 0,
    verify: { cases: [
      { classes: seller(SELLER_K), run: SELLER_RUN, out: "5 9" },
      { classes: seller(SELLER_B), run: SELLER_RUN, out: "5 0" },
      { classes: seller(SELLER_C), run: SELLER_RUN, out: "5 0" },
      { classes: seller(SELLER_D), run: SELLER_RUN, out: "5 5" },
    ] } },

  { id: "u3b-09", skill: "classes", type: "mcq", topic: "3.8",
    stem: "Consider the following class definition and code segment. The code segment appears in a class other than `Pedometer`.",
    classes: PEDOMETER,
    code: `Pedometer p = new Pedometer();
p.logDay(8000);
System.out.println(p.average());`,
    question: "Which of the following best describes the result of compiling and running the code segment?",
    choices: [
      "The class does not compile, because `avg` might not have a value when it is returned.",
      "`8000.0` is printed. If `days` were 0, `average` would return 0.0, because `avg` starts at 0.0.",
      "The class does not compile, because `steps` and `days` are never given values.",
      "`8000.0` is printed. The class compiles, because `avg` is given a value inside the `if`.",
    ],
    why: [
      "A local variable gets no default value. When `days` is 0, the `if` is skipped and nothing assigns `avg` before `return avg;`, so javac reports `variable avg might not have been initialized`.",
      "Only instance variables start at default values. A local variable such as `avg` has no value until the code assigns one, and Java rejects the code before it can run.",
      "`steps` and `days` are instance variables, which start at 0. The problem is the local variable `avg`.",
      "Java checks every path through the method. On the path where the `if` is false, `avg` has no value, so the class does not compile, whatever the call.",
    ],
    answer: 0,
    verify: { error: "variable avg might not have been initialized" } },

  { id: "u3b-10", skill: "classes", type: "mcq", topic: "3.9",
    stem: "Consider the following class definition and code segment. The code segment appears in a class other than `Bike`.",
    classes: BIKE,
    code: `Bike b = new Bike("Trek", 21);
System.out.println(b.getBrand() + " " + b.getGears());`,
    question: "What is the result of compiling and running the code segment?",
    choices: ["Trek 0", "Trek 21", "null 0", "Nothing is printed. The class does not compile, because `gears = gears;` assigns a variable to itself."], mono: true,
    why: [
      "`this.brand = brand;` stores the parameter in the instance variable. In `gears = gears;` both names mean the parameter, so the instance variable `gears` keeps its default 0.",
      "That is what `this.gears = gears;` would do. Without `this`, the parameter hides the instance variable.",
      "The first line uses `this`, so the instance variable `brand` does get `\"Trek\"`.",
      "Assigning a variable to itself compiles with no error, which is why the mistake is easy to miss.",
    ],
    answer: 0,
    verify: { out: "Trek 0" } },

  { id: "u3b-11", skill: "classes", type: "mcq", topic: "3.9",
    stem: "Consider the following class definition and code segment. The code segment appears in a class other than `Sunflower`.",
    classes: SUNFLOWER,
    code: `Sunflower a = new Sunflower("Sol", 150);
Sunflower b = new Sunflower("Dot", 170);
Sunflower c = new Sunflower("Kit", 170);
Sunflower winner = a.taller(b).taller(c);
System.out.println(winner.getName());`,
    question: "What is the result of compiling and running the code segment?",
    choices: ["Kit", "Dot", "Sol", "Nothing is printed. The class does not compile, because `taller` uses the private variable `height` of another `Sunflower`."], mono: true,
    why: [
      "`a.taller(b)` returns `b`, because 170 is at least 150. The next call is `b.taller(c)`, where `this` is `b`. `c` is also 170, and the test is `>=`, so the tie goes to `other`, and the method returns `c`.",
      "With `>=`, a tie returns `other`. `c` is as tall as `b`, so `c` is returned.",
      "The first call returns `b`, so the second call is made on `b`, not `a`.",
      "Code inside `Sunflower` can use the private variables of any `Sunflower` object, including `other`.",
    ],
    answer: 0,
    verify: { out: "Kit" } },

  { id: "u3b-12", skill: "classes", type: "mcq", topic: "3.5",
    stem: "Consider the following class definition and code segment. The code segment appears in a class other than `CoatCheck`.",
    classes: COATCHECK,
    code: `CoatCheck c = new CoatCheck(40);
int a = c.checkIn(25);
int b = c.checkIn(20);
System.out.println(a + " " + b + " " + c.getCoats());`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["0 5 40", "0 5 45", "0 0 45", "25 45 40"], mono: true,
    why: [
      "25 coats fit, so the first call skips the `if`, adds them, and returns 0. 20 more would make 45, so the `if` stores the 5 that do not fit, fills the hooks to 40, and returns 5.",
      "Inside the `if`, `coats = hooks;` runs before the `return`, so the count is 40.",
      "The second call goes into the `if`, and `return turnedAway;` ends the method there, so `coats += n;` and `return 0;` never run on that call.",
      "`checkIn` returns the number of coats turned away, not the number on the hooks.",
    ],
    answer: 0,
    verify: { out: "0 5 40" } },

  { id: "u3b-13", skill: "classes", type: "mcq", topic: "3.5",
    stem: "The `Book` class keeps track of how many pages of a book have been read. The method `getRemaining` is intended to return the number of pages not yet read, without changing the object. For example, for a 300-page book with 120 pages read, `getRemaining()` returns 180. Consider the following incomplete class definition.",
    code: BOOK,
    question: "Which of the following can replace `/* missing method */` so that `getRemaining` works as intended?",
    choices: [BOOK_K, BOOK_B, BOOK_C, BOOK_D], mono: true,
    why: [
      "It returns the pages left as an `int` and assigns nothing, so the book is unchanged and the method gives the same answer every time.",
      "Printing is not returning. A `void` method gives the caller no value, so `int left = b.getRemaining();` does not compile: `incompatible types: void cannot be converted to int`.",
      "It returns 180 the first time, but it also changes `pages`, so the second call returns 60 and the book now reports 60 pages.",
      "The value is computed but never returned: `missing return statement`.",
    ],
    answer: 0,
    verify: { cases: [
      { classes: book(BOOK_K), run: BOOK_RUN, out: "180 180 300" },
      { classes: book(BOOK_B), run: BOOK_RUN, error: "incompatible types: void cannot be converted to int" },
      { classes: book(BOOK_C), run: BOOK_RUN, out: "180 60 60" },
      { classes: book(BOOK_D), run: BOOK_RUN, error: "missing return statement" },
    ] } },

  { id: "u3b-14", skill: "classes", type: "mcq", topic: "3.5",
    stem: "Consider the following class definition and code segment. The code segment appears in a class other than `Battery`.",
    classes: BATTERY,
    code: `Battery b = new Battery(7);
int m = 5;
int used = b.useFor(m);
System.out.println(used + " " + b.getCharge() + " " + m);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["4 -1 5", "4 -1 1", "3 1 5", "5 -3 5"], mono: true,
    why: [
      "Each pass uses 2 charge and 1 minute. After 4 passes the charge is -1, so `charge > 0` is false and the loop stops with 1 minute unused. `minutes` is a copy of `m`, so counting it down does not change `m`.",
      "`minutes` holds a copy of the value in `m`. Changing the parameter inside the method does not change `m`.",
      "With 1 charge left, `charge > 0` is still true, so the loop runs a fourth time and the charge drops to -1.",
      "The loop also stops when the charge is no longer positive. After the fourth pass it is -1, so the fifth pass never runs.",
    ],
    answer: 0,
    verify: { out: "4 -1 5" } },

  { id: "u3b-15", skill: "classes", type: "mcq", topic: "3.6",
    stem: "Consider the following class definition and code segment. The code segment appears in a class other than `Notebook`.",
    classes: NOTEBOOK,
    code: `Notebook a = new Notebook(40);
Notebook b = a;
b.usePages(5);
b = new Notebook(40);
b.usePages(10);
System.out.println(a.getPages() + " " + b.getPages() + " " + (a == b));`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["35 30 false", "25 25 true", "40 30 false", "25 30 false"], mono: true,
    why: [
      "`b = a` makes both names refer to one notebook, so `b.usePages(5)` leaves it with 35. Then `b = new Notebook(40)` points `b` at a different notebook, and `a` still refers to the first one. `b` uses 10 of its own 40, and `a == b` is `false` because they now refer to different objects.",
      "Assigning a new object to `b` changes only `b`. `a` still refers to the first notebook, so the two are no longer the same object.",
      "`Notebook b = a;` copies the reference, not the notebook, so the first 5 pages come out of the notebook `a` refers to.",
      "The 10 pages come out of the new notebook, which `b` refers to by then. That call does not change `a`.",
    ],
    answer: 0,
    verify: { out: "35 30 false" } },

  { id: "u3b-16", skill: "classes", type: "mcq", topic: "3.6",
    stem: "Consider the following class definition and code segment. The code segment appears in a class other than `PiggyBank`.",
    classes: PIGGY,
    code: `PiggyBank p = new PiggyBank(12);
PiggyBank q = new PiggyBank(30);
int x = q.takeAll(p);
int y = p.takeAll(q);
System.out.println(x + " " + y + " " + p.getCoins() + " " + q.getCoins());`,
    question: "What is the result of compiling and running the code segment?",
    choices: ["42 42 42 0", "42 54 54 42", "42 42 0 42", "Nothing is printed. The class does not compile, because `takeAll` uses the private variable `coins` of `other`."], mono: true,
    why: [
      "`q.takeAll(p)` adds `p`'s 12 coins to `q`'s 30 and empties `p`, returning 42. Then `p.takeAll(q)` moves all 42 back into `p` and empties `q`. In each call, `this` is the bank before the dot and `other` is the one passed in.",
      "`other` holds a copy of the reference, so `other.coins = 0` empties the real bank that was passed in. No separate copy of the bank is made.",
      "In `p.takeAll(q)`, the coins move into `p`, the object the method was called on, and `q` is emptied.",
      "Code inside `PiggyBank` can use the private variables of any `PiggyBank` object, so `other.coins` compiles.",
    ],
    answer: 0,
    verify: { out: "42 42 42 0" } },

  { id: "u3b-17", skill: "classes", type: "mcq", topic: "3.3",
    stem: "Consider the following class definition. Several other classes make `ScoreKeeper` objects and call their methods.",
    code: KEEPER,
    question: "Which of the following changes to `ScoreKeeper` could require changes to the other classes that use it?",
    choices: [
      "Renaming the public method `getTotal` to `total`",
      "Renaming the private instance variable `sum` to `runningSum`, and changing the class's own methods to match",
      "Changing the body of `addScore` so that it also counts how many scores were added",
      "Adding a private method that `addScore` calls",
    ],
    why: [
      "Other classes call `getTotal` by name. Once it is renamed, those calls give `cannot find symbol`, so every class that uses it must change.",
      "`sum` is private, so no other class mentions it. Renaming it, along with the code inside the class that uses it, changes nothing outside.",
      "The header of `addScore` stays the same, so calls from other classes still match it.",
      "A private method can be called only from inside the class, so other classes never see it.",
    ],
    answer: 0,
    verify: { cases: [
      { classes: KEEPER, run: KEEPER_RUN, out: "17" },
      { classes: KEEPER_RENAME_METHOD, run: KEEPER_RUN, error: "cannot find symbol" },
      { classes: KEEPER_RENAME_FIELD, run: KEEPER_RUN, out: "17" },
      { classes: KEEPER_COUNT, run: KEEPER_RUN, out: "17" },
      { classes: KEEPER_HELPER, run: KEEPER_RUN, out: "17" },
    ] } },

  { id: "u3b-18", skill: "classes", type: "mcq", topic: "3.3",
    stem: "The `SeatMap` class below is intended so that the number of seats taken is never more than the capacity. Code in other classes sometimes calls `book` with too many seats, and sometimes sets `taken` directly. Assume `book` is always called with a positive number.",
    code: SEATMAP,
    question: "Which of the following changes guarantees that no code outside `SeatMap` can make the number of seats taken more than the capacity?",
    choices: [
      "Make `taken` private, and change `book` so that it adds `n` only when `taken + n` is at most `capacity`.",
      "Keep `taken` public, and change `book` so that it adds `n` only when `taken + n` is at most `capacity`.",
      "Make `taken` private, and add a public method `isOverbooked` that returns whether `taken` is more than `capacity`.",
      "Make `book` private, and keep `taken` public.",
    ],
    why: [
      "With `taken` private, other classes can change it only through `book`, and `book` now refuses a booking that would pass the capacity.",
      "Other code can still skip `book` and write `m.taken = 500;` directly. The check works only when the variable is private.",
      "Reporting the problem does not prevent it. `book` still adds any number of seats, so after `book(6)` twice on a 10-seat map, 12 seats are taken.",
      "With `taken` public, other classes can still set it to any number.",
    ],
    answer: 0,
    verify: { cases: [
      { classes: SEAT_K, run: SEAT_USE, out: "6" },
      { classes: SEAT_K, run: SEAT_POKE, error: "taken has private access in SeatMap" },
      { classes: SEAT_B, run: SEAT_POKE, out: "500" },
      { classes: SEAT_C, run: SEAT_USE, out: "12" },
      { classes: SEAT_D, run: SEAT_POKE, out: "500" },
    ] } },
];

// ---------- Unit 3 Test Practice B: free response ----------

const LOCKER = `public class Locker
{
    private int combination;
    private int maxWrong;
    private int wrongInARow;
    private int guesses;
    private int opens;

    public Locker(int combo)
    {
        combination = combo;
        maxWrong = 3;
        wrongInARow = 0;
        guesses = 0;
        opens = 0;
    }

    public Locker(int combo, int max)
    {
        combination = combo;
        maxWrong = max;
        wrongInARow = 0;
        guesses = 0;
        opens = 0;
    }

    public boolean tryOpen(int guess)
    {
        if (wrongInARow >= maxWrong)
        {
            return false;
        }
        guesses++;
        if (guess == combination)
        {
            opens++;
            wrongInARow = 0;
            return true;
        }
        wrongInARow++;
        return false;
    }

    public double openRate()
    {
        if (guesses == 0)
        {
            return 0.0;
        }
        return (double) opens / guesses;
    }

    public String status()
    {
        if (wrongInARow >= maxWrong)
        {
            return "jammed";
        }
        return (maxWrong - wrongInARow) + " left";
    }
}`;

u3b.push({ id: "u3b-frq", skill: "frq", type: "code", topic: "3.4", title: "The locker",
  prompt: "The `Locker` class, which you will write, represents a gym locker with a number combination. A person opens the locker by guessing the combination. After too many wrong guesses in a row, the locker jams, and a jammed locker stays jammed.\n\n`Locker` objects are created by calls to either of two constructors.\n\n- `Locker(int combination)` makes a locker with that combination that jams after 3 wrong guesses in a row.\n- `Locker(int combination, int maxWrong)` makes a locker with that combination that jams after `maxWrong` wrong guesses in a row. Assume `maxWrong` is at least 1.\n\nThe class has three methods.\n\n- `tryOpen(int guess)` returns a `boolean`. If the locker is jammed, the method returns `false`, the guess is not counted, and nothing changes. Otherwise the guess is counted. A guess equal to the combination opens the locker: the number of wrong guesses in a row goes back to 0, and the method returns `true`. Any other guess adds 1 to the number of wrong guesses in a row, and the method returns `false`.\n- `openRate()` returns a `double`: the number of counted guesses that opened the locker divided by the number of counted guesses, or 0.0 if no guesses have been counted.\n- `status()` returns a `String`: `\"jammed\"` if the locker is jammed, and otherwise the number of wrong guesses still allowed before it jams, followed by `\" left\"`, such as `\"2 left\"`.\n\nThe table shows a sequence of statements and their results. The statements appear in a class other than `Locker`.\n\nWrite the complete `Locker` class. Your implementation must meet all specifications and conform to the examples in the table. Do not use arrays.",
  sample: `Statement                         Returns    Explanation
Locker gym = new Locker(4172, 2);            gym jams after 2 wrong guesses in a row.
gym.status()                      "2 left"
gym.openRate()                    0.0        No guesses have been counted.
gym.tryOpen(1111)                 false      1 wrong guess in a row
gym.status()                      "1 left"
gym.tryOpen(4172)                 true       Opens. Wrong guesses in a row go back to 0.
gym.status()                      "2 left"
gym.tryOpen(4000)                 false      1 wrong guess in a row
gym.tryOpen(4100)                 false      2 wrong guesses in a row, so gym jams.
gym.status()                      "jammed"
gym.tryOpen(4172)                 false      gym is jammed. The guess is not counted.
gym.openRate()                    0.25       1 of the 4 counted guesses opened it.
Locker pool = new Locker(905);               pool jams after 3 wrong guesses in a row.
pool.status()                     "3 left"
pool.tryOpen(905)                 true
pool.openRate()                   1.0`,
  rows: [
    { name: "Declares the class and its variables", earns: "Declares `public class Locker` with private instance variables of suitable types for the combination, the number of wrong guesses allowed, the wrong guesses in a row, the counted guesses, and the guesses that opened the locker (or an equivalent set). No instance variable is static, and none is declared inside a method." },
    { name: "Declares both constructors", earns: "Declares the public constructors `Locker(int ___)` and `Locker(int ___, int ___)`, with no return type." },
    { name: "Constructors set every variable", earns: "Each constructor gives every instance variable its starting value: the combination from the parameter, the wrong guesses allowed as 3 or the parameter, and every count at 0. Calling `this(combo, 3)` from the one-parameter constructor is fine." },
    { name: "Ignores guesses when jammed", earns: "Declares `public boolean tryOpen(int ___)`, which checks whether the wrong guesses in a row have reached the limit before changing anything, and in that case returns `false` without counting the guess." },
    { name: "Handles a counted guess", earns: "When the locker is not jammed, `tryOpen` counts the guess. On a match (compared with `==`), it counts an opening, sets the wrong guesses in a row to 0, and returns `true`. Otherwise it adds 1 to the wrong guesses in a row and returns `false`." },
    { name: "Computes the rate safely", earns: "Declares `public double openRate()`, which returns 0.0 when no guesses have been counted and otherwise returns the openings divided by the counted guesses with `double` division, computed from the instance variables." },
    { name: "Builds the status", earns: "Declares `public String status()`, which returns `\"jammed\"` when the limit has been reached and otherwise returns the wrong guesses allowed minus the wrong guesses in a row, followed by `\" left\"`. A method that prints instead of returning does not earn this row." },
  ],
  notes: NOTE + " A response that counts the guess before checking for a jam does not earn row 4. A response that never sets the wrong guesses in a row back to 0 after a correct guess does not earn row 5. Integer division in `openRate` (0.0 instead of 0.25) does not earn row 6, and neither does a rate stored in an instance variable that is not updated on every counted guess. `toString` is not required and earns nothing.",
  solution: LOCKER,
  verify: { cases: [
    { classes: unpub(LOCKER), run: `Locker gym = new Locker(4172, 2);
System.out.println(gym.status());
System.out.println(gym.openRate());
System.out.println(gym.tryOpen(1111));
System.out.println(gym.status());
System.out.println(gym.tryOpen(4172));
System.out.println(gym.status());
System.out.println(gym.tryOpen(4000));
System.out.println(gym.tryOpen(4100));
System.out.println(gym.status());
System.out.println(gym.tryOpen(4172));
System.out.println(gym.openRate());
Locker pool = new Locker(905);
System.out.println(pool.status());
System.out.println(pool.tryOpen(905));
System.out.println(pool.openRate());`, out: "2 left\n0.0\nfalse\n1 left\ntrue\n2 left\nfalse\nfalse\njammed\nfalse\n0.25\n3 left\ntrue\n1.0" },
    { classes: unpub(LOCKER), run: `Locker one = new Locker(7, 1);
System.out.println(one.tryOpen(8) + " " + one.status());
System.out.println(one.tryOpen(7) + " " + one.openRate());`, out: "false jammed\nfalse 0.0" },
    { classes: unpub(LOCKER), run: `Locker a = new Locker(12);
a.tryOpen(1);
a.tryOpen(2);
System.out.println(a.status());
System.out.println(a.tryOpen(12) + " " + a.status());
a.tryOpen(3);
a.tryOpen(4);
a.tryOpen(5);
System.out.println(a.status() + " " + a.tryOpen(12) + " " + a.openRate());`, out: "1 left\ntrue 3 left\njammed false 0.16666666666666666" },
  ] } });

export default {
  forms: [
    { id: "q6a", name: "Quiz 6 Practice A", group: "Quiz 6: Writing Classes", date: "2027-01-12", items: q6a },
    { id: "q6b", name: "Quiz 6 Practice B", group: "Quiz 6: Writing Classes", date: "2027-01-12", items: q6b },
    { id: "q7a", name: "Quiz 7 Practice A", group: "Quiz 7: Static and Scope", date: "2027-01-19", items: q7a },
    { id: "q7b", name: "Quiz 7 Practice B", group: "Quiz 7: Static and Scope", date: "2027-01-19", items: q7b },
    { id: "u3a", name: "Unit 3 Test Practice A", group: "Unit 3 Test", date: "2027-01-28", items: u3a },
    { id: "u3b", name: "Unit 3 Test Practice B", group: "Unit 3 Test", date: "2027-01-28", items: u3b },
  ],
};

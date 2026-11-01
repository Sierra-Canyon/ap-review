// AP CSA AP Practice Exam B: one full mock AP exam in the shape the CED describes.
// Section I: 42 multiple choice, weighted by unit as the CED's exam weightings say:
//   Unit 1: 8 (19%) · Unit 2: 12 (29%) · Unit 3: 6 (14%) · Unit 4: 16 (38%).
// Section II: four free responses with the CED's point values, one rubric row per point:
//   FRQ 1 Methods and Control Structures 7 (part (a) 4, part (b) 3) · FRQ 2 Class Design 7 ·
//   FRQ 3 Data Analysis with ArrayList 5 · FRQ 4 2D Array 6.
// Settings: the dungeon crawler world in plain variables and small classes of its own, shops, travel, and games.
// In every mcq the key is written first and answer is 0 (the site shuffles).

const fill = (s, hole, text) => s.split(hole).join(text);
const ind = (s, n) => s.split("\n").map((l) => (l ? " ".repeat(n) + l : l)).join("\n");
const NOTE = "One point for each row. Award a row for what the code actually does. As on the AP exam, ignore small slips that do not change the logic: a missing semicolon or brace where the indentation makes the intent clear, `=` for `==`, `length` and `size` mixed up, and a spelling slip in a name when the intended name is clear. A row marked (algorithm) is not earned when a required step is missing, when the steps are in the wrong order, or when extra code makes the result wrong.";

// ---------- Section I code ----------

const C06 = `public static int fare(int stops)
{
    return 2 * stops + 1;
}

public static double fare(int stops, double rate)
{
    return stops * rate;
}`;

const C08 = `/**
 * Returns the number of coins each player gets when total
 * coins are shared equally among players.
 * Precondition: total >= 0, players > 0
 */
public static int share(int total, int players)
{
    return total / players;
}`;

const W5 = `class Wallet
{
    private int coins;

    public Wallet(int c)
    {
        coins = c;
    }

    public void spend(int n)
    {
        coins -= n;
    }

    public int getCoins()
    {
        return coins;
    }
}`;

const equiv = (orig, alt) => `boolean same = true;
for (int potions = -3; potions <= 3; potions++)
{
    for (int health = 15; health <= 25; health++)
    {
        if ((${orig}) != (${alt}))
        {
            same = false;
        }
    }
}
System.out.println(same ? "same" : "differs");`;

const C14 = `int count = 0;
for (int k = 1; k <= n; k++)
{
    if (n % k == 0)
    {
        count++;
    }
}
System.out.println(count == 2);`;

const C16 = `String wall = "##.###.#";
int pairs = 0;
for (/* missing code */)
{
    if (wall.substring(i, i + 2).equals("##"))
    {
        pairs++;
    }
}
System.out.println(pairs);`;
const K16 = "int i = 0; i < wall.length() - 1; i++";
const B16 = "int i = 0; i < wall.length(); i++";
const D16a = "int i = 1; i < wall.length() - 1; i++";
const D16b = "int i = 0; i < wall.length() - 1; i += 2";

const C18 = `int count = 0;
for (int a = 0; a < 5; a++)
{
    for (int b = a; b < 5; b += 2)
    {
        count++;
    }
}`;

const C19 = `int steps = 0;
for (int i = 0; i < n; i++)
{
    for (int j = 0; j < i; j++)
    {
        steps++;
    }
}`;
const formula19 = (f) => `boolean all = true;
for (int n = 1; n <= 10; n++)
{
${ind(C19, 4)}
    if (steps != ${f})
    {
        all = false;
    }
}
System.out.println(all);`;

const CART = `class Cart
{
    private int items;
    private double total;

    public Cart()
    {
        items = 0;
    }

    public Cart(int n, double price)
    {
        items = n;
        total = n * price;
    }

    public void add(double price)
    {
        items++;
        total += price;
    }

    public String toLabel()
    {
        return items + " for $" + total;
    }
}`;

const REGISTER = `class Register
{
    private int cash;
    private int sales;

    public Register(int start)
    {
        cash = start;
        sales = 0;
    }

    public void sell(int price)
    {
        if (price > 0)
        {
            cash += price;
            sales++;
        }
    }

    public int refund(int amount)
    {
        if (amount <= cash)
        {
            cash -= amount;
            return amount;
        }
        return 0;
    }

    public String report()
    {
        return sales + " sales, $" + cash;
    }
}`;

const BAG = `class Bag
{
    private int gems;

    public Bag(int g)
    {
        gems = g;
    }

    public void add(int n)
    {
        gems += n;
    }

    public int getGems()
    {
        return gems;
    }
}`;

const FILL23 = `public static void fill(Bag b)
{
    b.add(5);
    b = new Bag(100);
    b.add(1);
}`;

const TRIP = `class Trip
{
    private static int totalMiles = 0;
    private static int count = 0;
    private String city;
    private int miles;

    public Trip(String c, int m)
    {
        city = c;
        miles = m;
        totalMiles += m;
        count++;
    }

    public int getMiles()
    {
        return miles;
    }

    public static int getTotalMiles()
    {
        return totalMiles;
    }

    public static int getCount()
    {
        return count;
    }
}`;
const C24 = `Trip a = new Trip("Reno", 520);
Trip b = new Trip("Boise", 301);
System.out.println(/* missing code */);`;

const SCOREBOARD = `class Scoreboard
{
    private int high;

    public Scoreboard()
    {
        high = 0;
    }

    public void record(int score)
    {
        if (score > high)
        {
            int high = score;
        }
    }

    public int getHigh()
    {
        return high;
    }
}`;

const ROOM = `class Room
{
    private String name;
    private Room exit;

    public Room(String n)
    {
        name = n;
        exit = null;
    }

    public void linkTo(Room other)
    {
        exit = other;
        other.exit = this;
    }

    public String exitName()
    {
        if (exit == null)
        {
            return "none";
        }
        return exit.name;
    }
}`;

const C27 = `int[] sales = {40, -1, 25, 0, -1, 31};
int sum = 0;
int days = 0;
for (int s : sales)
{
    /* missing code */
}
System.out.println((double) sum / days);`;
const K27 = "if (s >= 0) { sum += s; days++; }";
const B27 = "sum += s; days++;";
const C27c = "if (s >= 0) { sum += s; } days++;";
const D27 = "if (s > 0) { sum += s; days++; }";

const C30 = `public static boolean allAffordable(int[] prices, int budget)
{
    for (int p : prices)
    {
        /* missing code */
    }
    return true;
}`;
const K30 = "if (p > budget) { return false; }";
const B30 = "if (p <= budget) { return true; }";
const C30c = "if (p > budget) { return false; } else { return true; }";
const D30 = "if (p > budget) { budget = p; }";
const run30 = (m, arr, budget, out) => ({ methods: fill(C30, "/* missing code */", m), run: `int[] prices = {${arr}};\nSystem.out.println(allAffordable(prices, ${budget}));`, out });

const C31 = `Scanner in = new Scanner(new File("loot.txt"));
int gold = 0;
int other = 0;
while (in.hasNext())
{
    String kind = in.next();
    int amount = in.nextInt();
    if (kind.equals("gold"))
    {
        gold += amount;
    }
    else
    {
        other++;
    }
}
in.close();
System.out.println(gold + " " + other);`;

const WRAP_A = "ArrayList<Double> costs = new ArrayList<Double>();\ncosts.add(4.5);";
const WRAP_B = "ArrayList<double> costs = new ArrayList<double>();\ncosts.add(4.5);";
const WRAP_C = "ArrayList<Double> costs = new ArrayList<Double>();\ncosts.add(4);";
const WRAP_D = "ArrayList<Double> costs = new ArrayList<Double>();\ncosts[0] = 4.5;";

const C33 = `ArrayList<String> bag = new ArrayList<String>();
bag.add("rope");
bag.add("torch");
bag.add(0, "map");
String old = bag.set(2, "lamp");
String gone = bag.remove(0);
bag.add(1, gone);
System.out.println(bag + " " + old);`;

const C34 = `public static String pick(ArrayList<String> names)
{
    String result = names.get(0);
    for (String n : names)
    {
        if (n.length() > result.length())
        {
            result = n;
        }
    }
    return result;
}`;
const list = (name, type, vals) => `ArrayList<${type}> ${name} = new ArrayList<${type}>();\n` + vals.map((v) => `${name}.add(${v});`).join("\n");

const C35 = `for (int i = 0; i < scores.size(); i++)
{
    if (scores.get(i) >= 9)
    {
        scores.remove(i);
    }
}
System.out.println(scores);`;

const C36 = `public static void insertStop(ArrayList<String> trip, String city, String after)
{
    for (int i = 0; i < trip.size(); i++)
    {
        if (trip.get(i).equals(after))
        {
            /* missing code */
            return;
        }
    }
}`;
const run36 = (m, out) => ({ methods: fill(C36, "/* missing code */", m), run: list("trip", "String", ['"Austin"', '"Denver"', '"Boise"']) + `\ninsertStop(trip, "Moab", "Denver");\nSystem.out.println(trip);`, out });

const C37 = `int[][] map = {{1, 0, 2, 0},
               {0, 3, 0, 4},
               {5, 0, 6, 0}};
for (int c = 0; c < map[0].length; c += 2)
{
    for (int r = map.length - 1; r >= 0; r--)
    {
        if (map[r][c] != 0)
        {
            System.out.print(map[r][c] + " ");
        }
    }
}`;

const C38 = `int[][] stock = {{2, 0, 5},
                 {1, 4, 0}};
for (int[] row : stock)
{
    for (int k = 0; k < row.length; k++)
    {
        if (row[k] == 0)
        {
            row[k] = 10;
        }
    }
}
System.out.println(stock[0][1] + stock[1][2]);`;

const C39 = `public static int columnTotal(int[][] shelves, int col)
{
    int total = 0;
    for (/* missing code */)
    {
        total += shelves[r][col];
    }
    return total;
}`;
const run39 = (h, r) => ({ methods: fill(C39, "/* missing code */", h), run: "int[][] shelves = {{2, 5, 1, 0},\n                   {4, 0, 3, 6},\n                   {1, 7, 2, 2}};\nSystem.out.println(columnTotal(shelves, 1));", ...r });

const C40 = `public static void sort(int[] arr)
{
    for (int j = 1; j < arr.length; j++)
    {
        int temp = arr[j];
        int k = j;
        while (k > 0 && arr[k - 1] > temp)
        {
            arr[k] = arr[k - 1];
            k--;
        }
        arr[k] = temp;
        /* end of outer loop */
    }
}`;
const C40v = C40.replace("/* end of outer loop */", `if (j == 3)
        {
            for (int v : arr)
            {
                System.out.print(v + " ");
            }
        }`);

const C41 = `public static void echo(int n)
{
    if (n > 0)
    {
        System.out.print(n + " ");
        echo(n - 2);
        System.out.print(n + " ");
    }
}`;

const C42 = `public static int find(int[] arr, int target)
{
    int lo = 0;
    int hi = arr.length - 1;
    while (lo <= hi)
    {
        int mid = (lo + hi) / 2;
        System.out.print(arr[mid] + " ");
        if (arr[mid] == target)
        {
            return mid;
        }
        else if (arr[mid] < target)
        {
            lo = mid + 1;
        }
        else
        {
            hi = mid - 1;
        }
    }
    return -1;
}`;

// ---------- Section II code ----------

const F1_GIVEN = `public class DungeonRun
{
    /** The number of rooms in the dungeon, numbered 1 to numRooms */
    private int numRooms;

    /**
     * Returns the number of coins in room n, or -1 if room n holds a trap
     * Precondition: 1 <= n <= numRooms
     */
    public int roomValue(int n)
    { /* implementation not shown */ }

    /**
     * Returns the total number of coins collected on a run that
     * ends after maxTraps traps, as described in part (a)
     * Precondition: maxTraps >= 1
     */
    public int collect(int maxTraps)
    { /* to be implemented in part (a) */ }

    /**
     * Returns the number of times word appears in scroll, with no
     * two counted appearances sharing a letter, as described in part (b)
     * Precondition: word has at least one letter.
     * Postcondition: scroll is unchanged.
     */
    public int countWord(String scroll, String word)
    { /* to be implemented in part (b) */ }

    /* There may be instance variables, constructors, and methods
       that are not shown. */
}`;

const F1A = `public int collect(int maxTraps)
{
    int total = 0;
    int traps = 0;
    int room = 1;
    while (room <= numRooms && traps < maxTraps)
    {
        int value = roomValue(room);
        if (value == -1)
        {
            traps++;
        }
        else
        {
            total += value;
        }
        room++;
    }
    return total;
}`;

const F1B = `public int countWord(String scroll, String word)
{
    int count = 0;
    String rest = scroll;
    int spot = rest.indexOf(word);
    while (spot >= 0)
    {
        count++;
        rest = rest.substring(spot + word.length());
        spot = rest.indexOf(word);
    }
    return count;
}`;

const F1_CLASS = `class DungeonRun
{
    private int numRooms;
    private int[] values;

    public DungeonRun(int[] v)
    {
        values = v;
        numRooms = v.length;
    }

    public int roomValue(int n)
    {
        if (n < 1 || n > numRooms)
        {
            throw new IllegalArgumentException("no room " + n);
        }
        return values[n - 1];
    }

${ind(F1A, 4)}

${ind(F1B, 4)}
}`;

const F2_SOL = `public class PunchCard
{
    private int goal;
    private int punches;
    private double saved;

    public PunchCard(int g)
    {
        goal = g;
        punches = 0;
        saved = 0.0;
    }

    public double buy(double price)
    {
        if (punches == goal)
        {
            punches = 0;
            saved += price;
            return 0.0;
        }
        punches++;
        return price;
    }

    public double getSaved()
    {
        return saved;
    }
}`;

const F2_TABLE = `Statement                              Returns    Explanation
PunchCard card = new PunchCard(3);                A free game comes after 3 paid games.
card.buy(4.5)                          4.5        A paid game. The card has 1 punch.
card.buy(2.0)                          2.0        A paid game. The card has 2 punches.
card.buy(6.0)                          6.0        A paid game. The card has 3 punches and is full.
card.getSaved()                        0.0        No free games yet.
card.buy(5.25)                         0.0        The card was full, so this game is free.
                                                  The card is back to 0 punches.
card.buy(1.5)                          1.5        A paid game. The card has 1 punch.
card.getSaved()                        5.25       The free game would have cost 5.25.
PunchCard mini = new PunchCard(1);                A free game comes after every paid game.
mini.buy(3.0)                          3.0        A paid game. The card is full.
mini.buy(8.0)                          0.0        Free.
mini.buy(2.5)                          2.5        A paid game. The card is full.
mini.buy(4.0)                          0.0        Free.
mini.getSaved()                        12.0       8.0 + 4.0`;

const F3_GIVEN = `public class Flight
{
    /** Returns the city this flight goes to */
    public String getDestination()
    { /* implementation not shown */ }

    /** Returns the number of seats left on this flight, at least 0 */
    public int getSeatsLeft()
    { /* implementation not shown */ }

    /* There may be instance variables, constructors, and methods
       that are not shown. */
}

public class DepartureBoard
{
    /** The flights on the board; no element is null */
    private ArrayList<Flight> flights;

    /**
     * Removes from flights every flight to city that has no seats left,
     * and returns the number of flights removed. The flights that remain
     * stay in their original order.
     */
    public int removeSoldOut(String city)
    { /* to be implemented */ }

    /* There may be instance variables, constructors, and methods
       that are not shown. */
}`;

const F3_SOL = `public int removeSoldOut(String city)
{
    int removed = 0;
    for (int i = flights.size() - 1; i >= 0; i--)
    {
        Flight f = flights.get(i);
        if (f.getDestination().equals(city) && f.getSeatsLeft() == 0)
        {
            flights.remove(i);
            removed++;
        }
    }
    return removed;
}`;

const F3_CLASSES = `class Flight
{
    private String destination;
    private int seats;

    public Flight(String d, int s)
    {
        destination = d;
        seats = s;
    }

    public String getDestination()
    {
        return destination;
    }

    public int getSeatsLeft()
    {
        return seats;
    }
}

class DepartureBoard
{
    private ArrayList<Flight> flights;

    public DepartureBoard(ArrayList<Flight> f)
    {
        flights = f;
    }

    public String show()
    {
        String s = "";
        for (Flight f : flights)
        {
            s += f.getDestination() + " " + f.getSeatsLeft() + "; ";
        }
        return s;
    }

${ind(F3_SOL, 4)}
}`;

const board = (fl, city, out) => ({
  run: `ArrayList<Flight> list = new ArrayList<Flight>();\n` + fl.map(([d, s]) => `list.add(new Flight("${d}", ${s}));`).join("\n") +
    `\nDepartureBoard b = new DepartureBoard(list);\nint n = b.removeSoldOut("${city}");\nSystem.out.println(n + " | " + b.show());`,
  out,
});

const F4_GIVEN = `public class Tile
{
    /** Returns the kind of tile: "wall", "floor", "chest", or "guard" */
    public String getKind()
    { /* implementation not shown */ }

    /* There may be instance variables, constructors, and methods
       that are not shown. */
}

public class DungeonMap
{
    /** The tiles of the map; tiles is rectangular, with at least one row
        and at least one column, and no element is null */
    private Tile[][] tiles;

    /**
     * Returns the number of chest tiles that have a guard tile directly
     * above them or directly below them in the same column
     */
    public int guardedChests()
    { /* to be implemented */ }

    /* There may be instance variables, constructors, and methods
       that are not shown. */
}`;

const F4_SOL = `public int guardedChests()
{
    int count = 0;
    for (int r = 0; r < tiles.length; r++)
    {
        for (int c = 0; c < tiles[0].length; c++)
        {
            if (tiles[r][c].getKind().equals("chest"))
            {
                boolean above = r > 0 && tiles[r - 1][c].getKind().equals("guard");
                boolean below = r < tiles.length - 1 && tiles[r + 1][c].getKind().equals("guard");
                if (above || below)
                {
                    count++;
                }
            }
        }
    }
    return count;
}`;

const F4_CLASSES = `class Tile
{
    private String kind;

    public Tile(String k)
    {
        kind = k;
    }

    public String getKind()
    {
        return kind;
    }
}

class DungeonMap
{
    private Tile[][] tiles;

    public DungeonMap(String[] rows)
    {
        tiles = new Tile[rows.length][rows[0].length()];
        for (int r = 0; r < rows.length; r++)
        {
            for (int c = 0; c < rows[0].length(); c++)
            {
                String letter = rows[r].substring(c, c + 1);
                String k = "floor";
                if (letter.equals("W")) { k = "wall"; }
                if (letter.equals("C")) { k = "chest"; }
                if (letter.equals("G")) { k = "guard"; }
                tiles[r][c] = new Tile(new String(k));
            }
        }
    }

${ind(F4_SOL, 4)}
}`;

const dmap = (rows, out) => ({ run: `String[] rows = {${rows.map((r) => `"${r}"`).join(", ")}};\nSystem.out.println(new DungeonMap(rows).guardedChests());`, out });

// ---------- the form ----------

const items = [
  // ===== Unit 1: Using Objects and Methods (8) =====
  { id: "apb-01", skill: "types", type: "mcq", topic: "1.3",
    stem: "A game shop sells potions. Consider the following code segment.",
    code: `int price = 3;
int qty = 4;
System.out.println(price + qty + " items: " + price * qty + qty);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["7 items: 124", "34 items: 124", "7 items: 16", "The code segment does not compile."], mono: true,
    why: [
      "`+` works left to right. `price + qty` are two ints, so they add to 7. After the String, each `+` joins text, but `price * qty` is worked out first, so 12 is joined, then 4.",
      "The first `+` has an int on each side, so it adds. Joining starts only once the String is reached.",
      "This adds 12 and 4. Once the expression is a String, `+` joins, so the 4 is joined after the 12.",
      "Joining an int onto a String compiles; Java turns the number into text.",
    ],
    answer: 0,
    verify: { out: "7 items: 124" } },

  { id: "apb-02", skill: "arith", type: "mcq", topic: "1.5",
    stem: "A party of 4 adventurers splits 47 gold coins. Consider the following code segment.",
    code: `int gold = 47;
int party = 4;
System.out.println(gold / party + " each, " + gold % party + " left, " + (double) gold / party);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["11 each, 3 left, 11.75", "11.75 each, 3 left, 11.75", "11 each, 3 left, 11.0", "11 each, 0.75 left, 11.75"], mono: true,
    why: [
      "`gold / party` divides two ints, so the fraction is dropped. `%` gives the remainder, 3. The cast turns `gold` into a double before the division, so the last value keeps its fraction.",
      "`gold / party` divides two ints. Integer division drops the fraction, so it gives 11.",
      "The cast applies to `gold` alone, before the division, so the division is done in doubles and keeps the .75.",
      "`%` gives the whole number left over after dividing, not the fraction. 4 goes into 47 eleven times with 3 left.",
    ],
    answer: 0,
    verify: { out: "11 each, 3 left, 11.75" } },

  { id: "apb-03", skill: "objects", type: "mcq", topic: "1.8",
    stem: "Consider the following method.",
    methods: C08,
    question: "Which of the following best explains why the precondition `players > 0` is included?",
    choices: [
      "If `players` is 0, the call throws an ArithmeticException, so a caller must not pass 0.",
      "If `players` is 0, the method returns 0, which is not a useful number of coins.",
      "If `players` is 0, the code that calls the method does not compile.",
      "If `players` is 0, the method checks for it and returns -1 to signal an error.",
    ],
    why: [
      "`total / players` divides two ints, and int division by 0 throws an ArithmeticException. The method does not check for it, so the precondition tells the caller not to pass 0.",
      "Int division by 0 does not give 0. It throws an ArithmeticException while the program runs.",
      "The compiler does not check the values passed to a method. `share(10, 0)` compiles and fails only when it runs.",
      "The method has no `if` statement. A precondition is a promise the caller makes; the method does not test it.",
    ],
    answer: 0,
    verify: { cases: [
      { methods: C08, run: "System.out.println(share(10, 0));", throws: "ArithmeticException" },
      { methods: C08, run: "System.out.println(share(17, 4));", out: "4" },
    ] } },

  { id: "apb-04", skill: "objects", type: "mcq", topic: "1.9",
    stem: "A bus app has the following two methods.",
    methods: C06,
    question: "Which of the following statements, appearing in the same class, compiles without error?",
    choices: ["double cost = fare(4);", "int cost = fare(4, 1.5);", "double cost = fare(2.5);", "double cost = fare(3, 1.5, 2);"], mono: true,
    why: [
      "`fare(4)` matches the version with one `int` parameter. It returns an int, and an int can be stored in a double variable without a cast.",
      "This calls the version that returns a double. A double cannot be stored in an int variable without a cast: `incompatible types: possible lossy conversion from double to int`.",
      "No version of `fare` takes one double. Java does not turn 2.5 into an int on its own, so no method matches.",
      "No version of `fare` has three parameters. A call must match a method's signature in number and type of arguments.",
    ],
    answer: 0,
    verify: { cases: [
      { methods: C06, run: "double cost = fare(4);\nSystem.out.println(cost);", out: "9.0" },
      { methods: C06, run: "int cost = fare(4, 1.5);", error: "possible lossy conversion from double to int" },
      { methods: C06, run: "double cost = fare(2.5);", error: "no suitable method found for fare(double)" },
      { methods: C06, run: "double cost = fare(3, 1.5, 2);", error: "no suitable method found for fare(int,double,int)" },
    ] } },

  { id: "apb-05", skill: "objects", type: "mcq", topic: "1.11",
    stem: "A trap in a dungeon game does a random amount of damage. Consider the following statement.",
    code: "int damage = (int) (Math.random() * 5) * 2 + 4;",
    question: "Which of the following best describes the possible values of `damage`?",
    choices: [
      "The even integers from 4 to 12, inclusive",
      "The even integers from 4 to 14, inclusive",
      "Every integer from 4 to 12, inclusive",
      "The even integers from 0 to 8, inclusive",
    ],
    why: [
      "`(int) (Math.random() * 5)` is 0, 1, 2, 3, or 4. Doubling gives 0, 2, 4, 6, or 8, and adding 4 gives 4, 6, 8, 10, or 12.",
      "`Math.random()` is less than 1.0, so `(int) (Math.random() * 5)` is at most 4, never 5. The largest value is 4 * 2 + 4.",
      "The cast happens before the `* 2`, so the value being doubled is a whole number. Every result is even.",
      "This leaves out the `+ 4`, which shifts every value up by 4.",
    ],
    answer: 0,
    verify: { cases: [
      { run: "TreeSet<Integer> seen = new TreeSet<Integer>();\nfor (int t = 0; t < 200000; t++)\n{\n    int damage = (int) (Math.random() * 5) * 2 + 4;\n    seen.add(damage);\n}\nSystem.out.println(seen);", out: "[4, 6, 8, 10, 12]" },
    ] } },

  { id: "apb-06", skill: "objects", type: "mcq", topic: "1.13",
    stem: "Consider the following class and code segment.",
    classes: W5,
    code: `Wallet a = new Wallet(20);
Wallet b = a;
b.spend(5);
a = new Wallet(8);
a.spend(2);
System.out.println(a.getCoins() + " " + b.getCoins());`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["6 15", "6 20", "6 6", "13 13"], mono: true,
    why: [
      "`b = a` copies the reference, so both names refer to the same wallet, and `b.spend(5)` leaves it with 15. Then `a` is given a new wallet of 8. `b` still refers to the first one.",
      "`Wallet b = a;` does not make a second wallet. It makes `b` refer to the same object, so spending through `b` changes that object.",
      "Giving `a` a new object does not change `b`. `b` still refers to the wallet it was given, which holds 15.",
      "`a = new Wallet(8)` makes `a` refer to a different object. The wallet of 15 is changed only through `b` after that.",
    ],
    answer: 0,
    verify: { out: "6 15" } },

  { id: "apb-07", skill: "objects", type: "mcq", topic: "1.15",
    stem: "A travel app stores a route as airport codes separated by `>`. Consider the following code segment.",
    code: `String route = "LAX>DEN>BOS";
int p = route.indexOf(">");
String rest = route.substring(p + 1);
String mid = rest.substring(0, rest.indexOf(">"));
System.out.println(mid + rest.length());`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["DEN7", "DEN>7", "DEN11", "BOS7"], mono: true,
    why: [
      "`p` is 3, so `rest` is everything after the first `>`: \"DEN>BOS\", 7 characters. In `rest`, the `>` is at index 3, and `substring(0, 3)` stops just before it.",
      "The second index of `substring` is not included, so `rest.substring(0, rest.indexOf(\">\"))` stops before the `>`.",
      "This uses the length of `route`. The code prints `rest.length()`, and `rest` is shorter.",
      "`indexOf` returns the first place the text appears. In `rest`, that is the `>` after DEN.",
    ],
    answer: 0,
    verify: { out: "DEN7" } },

  { id: "apb-08", skill: "objects", type: "mcq", topic: "1.15",
    stem: "A game sorts character classes by name. Consider the following code segment.",
    code: `String p = "ranger";
String q = "range";
String r = "rogue";
System.out.println((p.compareTo(q) > 0) + " " + (q.compareTo(r) > 0) + " " + p.equals(q + "r"));`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["true false true", "false false true", "true true true", "true false false"], mono: true,
    why: [
      "\"range\" is the start of \"ranger\", and the shorter String comes first, so `p.compareTo(q)` is positive. \"range\" comes before \"rogue\" (a before o), so `q.compareTo(r)` is negative. `q + \"r\"` builds \"ranger\", and `equals` compares the letters.",
      "When one String is the start of the other, the shorter one comes first, so \"ranger\" is greater than \"range\".",
      "`q.compareTo(r)` is negative when `q` comes first, and \"range\" comes before \"rogue\". The test is `> 0`, so it is false.",
      "`equals` compares the letters, not where the Strings are stored. `q + \"r\"` has the same letters as `p`.",
    ],
    answer: 0,
    verify: { out: "true false true" } },

  // ===== Unit 2: Selection and Iteration (12) =====
  { id: "apb-09", skill: "if", type: "mcq", topic: "2.4",
    stem: "A shopkeeper in a dungeon town decides what to say to a visitor. Consider the following code segment.",
    code: `int gold = 40;
boolean hasKey = false;
String msg = "wait";
if (gold >= 30)
{
    if (hasKey)
    {
        msg = "open";
    }
    else if (gold >= 50)
    {
        msg = "buy";
    }
}
else
{
    msg = "leave";
}
System.out.println(msg);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["wait", "leave", "buy", "open"], mono: true,
    why: [
      "`gold >= 30` is true, so the inner statement runs. `hasKey` is false and `40 >= 50` is false, so neither inner branch runs, and `msg` keeps its first value.",
      "The `else` belongs to the outer `if (gold >= 30)`, which is true. The braces show which `if` it goes with.",
      "`gold` is 40, so `gold >= 50` is false.",
      "`hasKey` is false, so that branch does not run.",
    ],
    answer: 0,
    verify: { out: "wait" } },

  { id: "apb-10", skill: "bool", type: "mcq", topic: "2.6",
    stem: "Assume that `potions` and `health` are `int` variables that have been properly declared and initialized.",
    question: "Which of the following expressions is equivalent to `!(potions > 0 && health < 20)`?",
    choices: ["potions <= 0 || health >= 20", "potions <= 0 && health >= 20", "potions < 0 || health > 20", "!(potions > 0) || health < 20"], mono: true,
    why: [
      "By De Morgan's law, `!(a && b)` is `!a || !b`. The opposite of `potions > 0` is `potions <= 0`, and the opposite of `health < 20` is `health >= 20`.",
      "De Morgan's law changes `&&` to `||` when the `!` is moved inside. Keeping `&&` gives a different expression.",
      "The opposite of `potions > 0` is `potions <= 0`, which includes 0. This leaves out the values where `potions` is 0 or `health` is 20.",
      "The `!` has to apply to both parts. Here it is moved onto only the first one.",
    ],
    answer: 0,
    verify: { cases: [
      { run: equiv("!(potions > 0 && health < 20)", "potions <= 0 || health >= 20"), out: "same" },
      { run: equiv("!(potions > 0 && health < 20)", "potions <= 0 && health >= 20"), out: "differs" },
      { run: equiv("!(potions > 0 && health < 20)", "potions < 0 || health > 20"), out: "differs" },
      { run: equiv("!(potions > 0 && health < 20)", "!(potions > 0) || health < 20"), out: "differs" },
    ] } },

  { id: "apb-11", skill: "bool", type: "mcq", topic: "2.6",
    stem: "A ride at an amusement park checks how full each car will be. Consider the following code segment.",
    code: `int seats = 0;
int riders = 7;
String result = "board";
if (seats == 0 || riders / seats > 2)
{
    result = "wait";
}
System.out.println(result);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["wait", "board", "Nothing is printed. An ArithmeticException is thrown.", "Nothing is printed. The code segment does not compile."],
    why: [
      "`seats == 0` is true, and with `||` one true part is enough, so Java does not evaluate `riders / seats`. This is short-circuit evaluation, and it keeps the division by 0 from running.",
      "The condition is true, because its first part is true, so `result` is changed.",
      "`riders / seats` would throw an ArithmeticException, but it is never evaluated. `||` stops as soon as the left side is true.",
      "Dividing by a variable that holds 0 compiles. Any problem would come only when the code runs.",
    ],
    answer: 0,
    verify: { out: "wait" } },

  { id: "apb-12", skill: "while", type: "mcq", topic: "2.7",
    stem: "In a game, a magic coin purse triples its coins each day. Consider the following code segment.",
    code: `int coins = 1;
int days = 0;
while (coins < 100)
{
    coins = coins * 3;
    days++;
}
System.out.println(days + " " + coins);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["5 243", "4 81", "5 81", "6 729"], mono: true,
    why: [
      "`coins` goes 3, 9, 27, 81, 243, one value per pass. After the fifth pass `coins` is 243, `coins < 100` is false, and the loop stops.",
      "After four passes `coins` is 81, which is still less than 100, so the loop runs again.",
      "`days` and `coins` change in the same pass. When `days` is 5, `coins` has been tripled five times.",
      "The test is checked before each pass. Once `coins` is 243 the loop stops, so there is no sixth pass.",
    ],
    answer: 0,
    verify: { out: "5 243" } },

  { id: "apb-13", skill: "while", type: "mcq", topic: "2.7",
    stem: "A player in a number game has at most 5 tries to reach the target. Consider the following code segment.",
    code: `int tries = 0;
int target = 17;
int guess = 1;
while (guess != target && tries < 5)
{
    guess = guess + 4;
    tries++;
}
System.out.println(tries + " " + guess);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["4 17", "5 21", "4 13", "5 17"], mono: true,
    why: [
      "`guess` goes 5, 9, 13, 17. After the fourth pass `guess != target` is false, and with `&&` one false part ends the loop.",
      "This keeps going until `tries` reaches 5. With `&&`, the loop stops as soon as either test is false, and `guess` reaches 17 first.",
      "This stops one pass early. When `guess` is 13 it is still not the target, so the loop runs once more.",
      "This counts a pass for the final test that ends the loop. `tries` goes up only when the body runs, four times.",
    ],
    answer: 0,
    verify: { out: "4 17" } },

  { id: "apb-14", skill: "for", type: "mcq", topic: "2.8",
    stem: "A travel game gives a bonus on some days of a trip. Consider the following code segment.",
    code: `int total = 0;
for (int day = 1; day <= 10; day += 3)
{
    if (day % 2 == 0)
    {
        total += day;
    }
    else
    {
        total -= 1;
    }
}
System.out.println(total);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["12", "2", "14", "22"], mono: true,
    why: [
      "`day` takes the values 1, 4, 7, and 10. The even days add themselves and the odd days take away 1: `-1 + 4 - 1 + 10`.",
      "This stops before 10. The test is `day <= 10`, so 10 is included.",
      "This skips the `else`. On the odd days, 1 is taken away.",
      "This adds every day. Only the even days are added; the odd days take away 1.",
    ],
    answer: 0,
    verify: { out: "12" } },

  { id: "apb-15", skill: "algo", type: "mcq", topic: "2.9",
    stem: "A dungeon game hides a gem on some levels. The variable `n` is a positive `int` that holds the level number. Consider the following code segment.",
    code: C14,
    question: "Which of the following best describes what the code segment prints?",
    choices: [
      "`true` if `n` is a prime number, and `false` otherwise",
      "`true` if `n` is an even number, and `false` otherwise",
      "The number of whole numbers that divide `n` evenly",
      "`true` if `n` has exactly two divisors other than 1 and `n`",
    ],
    why: [
      "The loop counts every `k` from 1 to `n` that divides `n` with no remainder. A prime has exactly two divisors, 1 and itself, so `count == 2` is true only for a prime. For 1, the count is 1.",
      "For 2 the code prints true, but for 4 it prints false, because 4 has three divisors: 1, 2, and 4.",
      "The loop does count the divisors, but the print statement prints `count == 2`, a boolean.",
      "The loop starts at 1 and runs up to `n` itself, so both 1 and `n` are counted.",
    ],
    answer: 0,
    verify: { cases: [
      { run: "for (int n = 1; n <= 12; n++)\n{\n" + ind(C14, 4).replace("System.out.println(count == 2);", "System.out.print((count == 2) + \" \");") + "\n}", out: "false true true false true false true false false false true false" },
    ] } },

  { id: "apb-16", skill: "string", type: "mcq", topic: "2.10",
    stem: "A wizard reads a spell's name in a coded way. Consider the following code segment.",
    code: `String spell = "fireball";
String out = "";
for (int i = 0; i < spell.length(); i += 2)
{
    out = spell.substring(i, i + 1) + out;
}
System.out.println(out);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["lbrf", "frbl", "laei", "Nothing is printed. A StringIndexOutOfBoundsException is thrown."], mono: true,
    why: [
      "`i` takes the values 0, 2, 4, and 6, so the letters f, r, b, and l are used. Each one is put in front of `out`, so they come out in reverse order.",
      "This adds each letter to the end. The code puts the new letter first: `spell.substring(i, i + 1) + out`.",
      "Those are the letters at the odd indexes. `i` starts at 0.",
      "The last pass uses `i` = 6, and `substring(6, 7)` is the letter l. The loop stops before `i` reaches 8.",
    ],
    answer: 0,
    verify: { out: "lbrf" } },

  { id: "apb-17", skill: "string", type: "mcq", topic: "2.10",
    stem: "A dungeon wall is drawn as a String of `#` and `.` characters. The following code segment is intended to count the places where two `#` characters are next to each other. For `\"##.###.#\"` it should print 3.",
    code: C16,
    question: "Which of the following can replace `/* missing code */` so that the code segment works as intended?",
    choices: [K16, B16, D16a, D16b], mono: true,
    why: [
      "Each pass looks at the two characters starting at `i`, so the last start is the next to last index, `wall.length() - 2`. The test `i < wall.length() - 1` stops there.",
      "On the last pass `i` is the last index, and `substring(i, i + 2)` goes past the end. A StringIndexOutOfBoundsException is thrown.",
      "Starting at 1 skips the pair at the very start of the wall, so this prints 2.",
      "Moving `i` by 2 skips every other starting place, so the pair that starts at index 3 is never checked. This prints 2.",
    ],
    answer: 0,
    verify: { cases: [
      { run: fill(C16, "/* missing code */", K16), out: "3" },
      { run: fill(C16, "/* missing code */", K16).replace('"##.###.#"', '"#.##"'), out: "1" },
      { run: fill(C16, "/* missing code */", B16), throws: "StringIndexOutOfBoundsException" },
      { run: fill(C16, "/* missing code */", D16a), out: "2" },
      { run: fill(C16, "/* missing code */", D16b), out: "2" },
    ] } },

  { id: "apb-18", skill: "nested", type: "mcq", topic: "2.11",
    stem: "A game draws a staircase of numbers. Consider the following code segment.",
    code: `for (int row = 1; row <= 3; row++)
{
    for (int col = row; col <= 4; col++)
    {
        System.out.print(col);
    }
    System.out.println();
}`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["1234\n234\n34", "1234\n123\n12", "123\n23\n3", "1\n12\n123"], mono: true,
    why: [
      "The inner loop starts at `row` and always ends at 4. Each new row starts one number higher, so each line loses its first number.",
      "This keeps the start at 1 and moves the end down. The inner loop starts at `row` and its end stays at 4.",
      "The inner test is `col <= 4`, so 4 is printed on every line.",
      "This grows each line. The lines get shorter, because the starting value goes up while the end stays at 4.",
    ],
    answer: 0,
    verify: { out: "1234\n234\n34" } },

  { id: "apb-19", skill: "runtime", type: "mcq", topic: "2.12",
    stem: "Consider the following code segment.",
    code: C18,
    question: "How many times is the statement `count++;` executed?",
    choices: ["9", "15", "25", "5"], mono: true,
    why: [
      "The inner loop starts at `a` and goes up by 2 while below 5: 3 times when `a` is 0, then 2, 2, 1, and 1.",
      "This moves `b` by 1. With `b += 2`, each inner loop runs about half as many times.",
      "That is 5 times 5. The inner loop starts at `a`, not 0, and goes up by 2.",
      "That counts only the outer loop. The inner loop runs completely on each outer pass.",
    ],
    answer: 0,
    verify: { cases: [
      { run: C18 + "\nSystem.out.println(count);", out: "9" },
    ] } },

  { id: "apb-20", skill: "runtime", type: "mcq", topic: "2.12",
    stem: "Consider the following code segment, where `n` is a positive `int`.",
    code: C19,
    question: "Which of the following expressions gives the number of times `steps++;` is executed?",
    choices: ["n * (n - 1) / 2", "n * n", "n * (n + 1) / 2", "n - 1"], mono: true,
    why: [
      "The inner loop runs `i` times, and `i` goes from 0 to `n - 1`. The total is `0 + 1 + 2 + ... + (n - 1)`, which is `n * (n - 1) / 2`.",
      "That is the count when the inner loop runs `n` times on every pass. Here it runs `i` times, and `i` starts at 0.",
      "That is 1 + 2 + ... + n. The inner test is `j < i`, so when `i` is 0 the inner loop does not run at all.",
      "That counts how many outer passes run the inner loop at least once, not how many times `steps++;` runs.",
    ],
    answer: 0,
    verify: { cases: [
      { run: formula19("n * (n - 1) / 2"), out: "true" },
      { run: formula19("n * n"), out: "false" },
      { run: formula19("n * (n + 1) / 2"), out: "false" },
      { run: formula19("n - 1"), out: "false" },
    ] } },

  // ===== Unit 3: Class Creation (6) =====
  { id: "apb-21", skill: "classes", type: "mcq", topic: "3.4",
    stem: "Consider the following class and code segment.",
    classes: CART,
    code: `Cart a = new Cart();
a.add(2.5);
Cart b = new Cart(3, 1.5);
b.add(4.0);
System.out.println(a.toLabel() + "; " + b.toLabel());`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["1 for $2.5; 4 for $8.5", "1 for $2.50; 4 for $8.50", "1 for $2.5; 4 for $5.5", "Nothing is printed. The code does not compile, because `total` is never given a value in the first constructor."],
    why: [
      "An instance variable that a constructor does not set starts at its default, so `total` in `a` starts at 0.0. `b` starts with 3 items and a total of 4.5, and `add` brings it to 4 items and 8.5.",
      "A double prints as Java writes it, with no fixed number of decimal places: 2.5, not 2.50.",
      "The second constructor sets `total` to `n * price`, which is 4.5, not 1.5.",
      "Instance variables get default values: 0 for an int, 0.0 for a double. Only local variables must be given a value before they are used.",
    ],
    answer: 0,
    verify: { out: "1 for $2.5; 4 for $8.5" } },

  { id: "apb-22", skill: "classes", type: "mcq", topic: "3.5",
    stem: "A shop uses the following class for its cash register. Consider the class and the code segment that follows it.",
    classes: REGISTER,
    code: `Register r = new Register(20);
r.sell(15);
r.sell(-4);
int back = r.refund(50);
back += r.refund(10);
r.sell(6);
System.out.println(r.report() + ", " + back);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["2 sales, $31, 10", "3 sales, $27, 10", "2 sales, $-19, 60", "2 sales, $31, 60"], mono: true,
    why: [
      "The register starts with 20 and the sale of 15 brings it to 35. The sale of -4 is skipped. The refund of 50 is more than the cash, so it returns 0 and changes nothing. The refund of 10 brings the cash to 25, and the sale of 6 brings it to 31.",
      "`sell` changes the register only when `price > 0`, so the sale of -4 is skipped.",
      "`refund` takes money out only when `amount <= cash`. A refund of 50 from 35 does nothing.",
      "A refund that fails returns 0, not the amount asked for, so `back` is 0 + 10.",
    ],
    answer: 0,
    verify: { out: "2 sales, $31, 10" } },

  { id: "apb-23", skill: "classes", type: "mcq", topic: "3.6",
    stem: "Consider the following class and static method. The method appears in the class that runs the code segment.",
    classes: BAG,
    methods: FILL23,
    code: `Bag mine = new Bag(2);
fill(mine);
System.out.println(mine.getGems());`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["7", "2", "101", "8"], mono: true,
    why: [
      "The parameter `b` gets a copy of the reference, so `b.add(5)` changes the same bag that `mine` refers to. `b = new Bag(100)` points `b` at a different bag, and `mine` is not affected by what happens to that one.",
      "Passing an object passes its reference, not a copy of the object. The method can change the caller's object through it.",
      "Giving the parameter a new object does not change the caller's variable. `mine` still refers to the first bag.",
      "After `b = new Bag(100)`, `b.add(1)` adds to the new bag, not to the one `mine` refers to.",
    ],
    answer: 0,
    verify: { out: "7" } },

  { id: "apb-24", skill: "classes", type: "mcq", topic: "3.7",
    stem: "A travel app uses the following class. Consider the class and the code segment that follows it, which appears in a class other than `Trip`.",
    classes: TRIP,
    code: C24,
    question: "Which of the following can replace `/* missing code */` so that the code segment compiles and prints the average number of miles per trip for all the `Trip` objects created?",
    choices: [
      "(double) Trip.getTotalMiles() / Trip.getCount()",
      "Trip.getTotalMiles() / Trip.getCount()",
      "(double) Trip.getMiles() / Trip.getCount()",
      "(double) Trip.totalMiles / Trip.count",
    ], mono: true,
    why: [
      "`getTotalMiles` and `getCount` are static, so they are called on the class name. The cast makes the division a double division, so it prints 410.5.",
      "Both methods return ints, so this is int division and prints 410. The fraction is lost.",
      "`getMiles` is an instance method. It belongs to one trip, so it cannot be called on the class name: `non-static method getMiles() cannot be referenced from a static context`.",
      "`totalMiles` and `count` are private, so code outside `Trip` cannot use them: `totalMiles has private access in Trip`.",
    ],
    answer: 0,
    verify: { cases: [
      { run: fill(C24, "/* missing code */", "(double) Trip.getTotalMiles() / Trip.getCount()"), out: "410.5" },
      { run: fill(C24, "/* missing code */", "Trip.getTotalMiles() / Trip.getCount()"), out: "410" },
      { run: fill(C24, "/* missing code */", "(double) Trip.getMiles() / Trip.getCount()"), error: "non-static method getMiles() cannot be referenced from a static context" },
      { run: fill(C24, "/* missing code */", "(double) Trip.totalMiles / Trip.count"), error: "totalMiles has private access in Trip" },
    ] } },

  { id: "apb-25", skill: "classes", type: "mcq", topic: "3.8",
    stem: "An arcade game keeps a high score. Consider the following class and code segment.",
    classes: SCOREBOARD,
    code: `Scoreboard s = new Scoreboard();
s.record(30);
s.record(12);
s.record(45);
System.out.println(s.getHigh());`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["0", "45", "30", "Nothing is printed. The code does not compile, because `high` is declared twice."], mono: true,
    why: [
      "`int high = score;` declares a new local variable inside the `if` block. It hides the instance variable and is gone when the block ends, so the instance variable `high` is never changed.",
      "That is the value the method was meant to keep. The assignment goes to a local variable, not to the instance variable.",
      "No call changes the instance variable, not even the first one.",
      "A local variable may have the same name as an instance variable. It compiles, and inside its block the name means the local variable.",
    ],
    answer: 0,
    verify: { out: "0" } },

  { id: "apb-26", skill: "classes", type: "mcq", topic: "3.9",
    stem: "Rooms in a dungeon are linked by doors. Consider the following class and code segment.",
    classes: ROOM,
    code: `Room hall = new Room("hall");
Room vault = new Room("vault");
Room cave = new Room("cave");
hall.linkTo(vault);
cave.linkTo(hall);
System.out.println(hall.exitName() + " " + vault.exitName() + " " + cave.exitName());`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["cave hall hall", "vault hall hall", "vault none hall", "Nothing is printed. The code does not compile, because `other.exit` is private."], mono: true,
    why: [
      "`hall.linkTo(vault)` sets the hall's exit to the vault and, through `this`, the vault's exit to the hall. Then `cave.linkTo(hall)` sets the cave's exit to the hall and replaces the hall's exit with the cave.",
      "The second call, `cave.linkTo(hall)`, runs `other.exit = this` with `other` as the hall, so the hall's exit changes to the cave.",
      "`other.exit = this` changes the room passed in as well as the room the method is called on, so the vault gets an exit too.",
      "Code inside `Room` may use the private variables of any `Room` object, not only its own.",
    ],
    answer: 0,
    verify: { out: "cave hall hall" } },

  // ===== Unit 4: Data Collections (16) =====
  { id: "apb-27", skill: "files", type: "mcq", topic: "4.2",
    stem: "A shop's sales data set has one entry per day. The register records -1 for a day it was offline, and 0 for a day it was working but nothing sold. The following code segment is intended to print the average sales for the days the register was working.",
    code: C27,
    question: "Which of the following can replace `/* missing code */` so that the code segment works as intended?",
    choices: [K27, B27, C27c, D27], mono: true,
    why: [
      "Only entries of 0 or more are real days, so both the sum and the count of days include only those. This prints 24.0.",
      "This counts the -1 entries as real days with sales of -1, which pulls the average down. The data set marks them as missing, so they must be left out.",
      "This leaves the -1 entries out of the sum but still counts them as days, so the average is too low.",
      "A day with 0 sales is a real day. Leaving it out makes the average too high: this prints 32.0.",
    ],
    answer: 0,
    verify: { cases: [
      { run: fill(C27, "/* missing code */", K27), out: "24.0" },
      { run: fill(C27, "/* missing code */", B27), out: "15.666666666666666" },
      { run: fill(C27, "/* missing code */", C27c), out: "16.0" },
      { run: fill(C27, "/* missing code */", D27), out: "32.0" },
    ] } },

  { id: "apb-28", skill: "arrays", type: "mcq", topic: "4.4",
    stem: "A dungeon game stores the health of four monsters. Consider the following code segment.",
    code: `int[] hp = {12, 0, 7, 3};
for (int h : hp)
{
    h += 5;
}
for (int i = 1; i < hp.length; i++)
{
    hp[i] += hp[i - 1];
}
System.out.println(hp[3]);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["22", "42", "10", "Nothing is printed. An ArrayIndexOutOfBoundsException is thrown."], mono: true,
    why: [
      "The enhanced `for` gives `h` a copy of each value, so the array does not change. The second loop adds each element to the one before it, so the array becomes 12, 12, 19, 22.",
      "That is the result if the first loop added 5 to each element. `h` is a copy, so changing it does not change the array.",
      "This adds the original values of the last two elements. Each element adds the new value of the one before it, which already holds a running total.",
      "`i` starts at 1, so `i - 1` is never less than 0, and `i < hp.length` keeps `i` at 3 or less.",
    ],
    answer: 0,
    verify: { out: "22" } },

  { id: "apb-29", skill: "arrays", type: "mcq", topic: "4.5",
    stem: "The following code segment is intended to reverse the order of the people in a line at a ticket counter.",
    code: `int[] line = {3, 6, 2, 7};
for (int i = 0; i < line.length / 2; i++)
{
    line[i] = line[line.length - 1 - i];
    line[line.length - 1 - i] = line[i];
}
for (int v : line)
{
    System.out.print(v + " ");
}`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["7 2 2 7", "7 2 6 3", "3 6 6 3", "3 6 2 7"], mono: true,
    why: [
      "The first line in the loop copies the value from the far end over `line[i]`, and that value is lost. The second line then copies the same value back, so both ends hold it. A swap needs a temporary variable.",
      "That is a correct reverse. It needs a temporary variable to keep `line[i]` before it is replaced.",
      "This copies from the front to the back first. The code copies from the back to the front first, so the back values are the ones kept.",
      "The loop does change the array. Each pass writes to two elements.",
    ],
    answer: 0,
    verify: { out: "7 2 2 7" } },

  { id: "apb-30", skill: "arrays", type: "mcq", topic: "4.5",
    stem: "The following method is intended to return `true` if every price in `prices` is at most `budget`, and `false` otherwise.",
    methods: C30,
    question: "Which of the following can replace `/* missing code */` so that the method works as intended?",
    choices: [K30, B30, C30c, D30], mono: true,
    why: [
      "One price over the budget is enough to answer `false`, so the method can return right away. Only after every price has been checked does it reach `return true;`.",
      "This returns `true` as soon as the first price is affordable, without checking the rest. For {3, 12} and a budget of 10 it returns `true`.",
      "Either branch returns on the first pass, so only the first price is ever checked.",
      "This never returns `false`. Raising `budget` makes each later price look affordable, and the method always reaches `return true;`.",
    ],
    answer: 0,
    verify: { cases: [
      run30(K30, "3, 5, 9", 10, "true"),
      run30(K30, "3, 12, 5", 10, "false"),
      run30(B30, "3, 12", 10, "true"),
      run30(C30c, "3, 12", 10, "true"),
      run30(D30, "3, 12", 10, "true"),
    ] } },

  { id: "apb-31", skill: "files", type: "mcq", topic: "4.6",
    stem: "A text file named `loot.txt` lists what a hero found in a dungeon, as pairs of a kind and an amount. Its contents are\n\n`gold 12 gem 3 gold 5 key 1`\n\nConsider the following code segment.",
    code: C31,
    question: "What is printed as a result of executing the code segment?",
    choices: ["17 2", "17 4", "12 2", "Nothing is printed. An InputMismatchException is thrown."], mono: true,
    why: [
      "Each pass reads a word with `next` and then a number with `nextInt`. The gold amounts add up to 17, and the other two kinds are each counted once.",
      "This adds the other amounts, 3 and 1. For those kinds the code adds 1 to `other`, not the amount.",
      "This stops after the first gold. The loop keeps reading while `in.hasNext()` is true, so it reads every pair.",
      "The tokens come in the order word, number, so `next` always reads a word and `nextInt` always reads a number.",
    ],
    answer: 0,
    verify: { out: "17 2", files: { "loot.txt": "gold 12 gem 3 gold 5 key 1\n" } } },

  { id: "apb-32", skill: "arraylist", type: "mcq", topic: "4.7",
    stem: "A shop's app keeps a list of item costs.",
    question: "Which of the following code segments compiles without error?",
    choices: [WRAP_A, WRAP_B, WRAP_C, WRAP_D], mono: true,
    why: [
      "An `ArrayList` holds objects, so a list of doubles is declared with the wrapper class `Double`. `costs.add(4.5)` autoboxes the double into a `Double`.",
      "An `ArrayList` cannot hold a primitive type such as `double`: `unexpected type`. Use the wrapper class `Double`.",
      "4 is an int, and Java does not box an int into a `Double`, so no `add` method matches: `no suitable method found for add(int)`. Writing 4.0 would work.",
      "`[]` is for arrays. An `ArrayList` uses `add`, `get`, and `set`.",
    ],
    answer: 0,
    verify: { cases: [
      { run: WRAP_A + "\nSystem.out.println(costs);", out: "[4.5]" },
      { run: WRAP_B, error: "unexpected type" },
      { run: WRAP_C, error: "no suitable method found for add(int)" },
      { run: WRAP_D, error: "array required, but ArrayList<Double> found" },
    ] } },

  { id: "apb-33", skill: "arraylist", type: "mcq", topic: "4.8",
    stem: "A hero packs a bag for a trip into the dungeon. Consider the following code segment.",
    code: C33,
    question: "What is printed as a result of executing the code segment?",
    choices: ["[rope, map, lamp] torch", "[rope, map, lamp] lamp", "[torch, rope, lamp] map", "[rope, map] torch"], mono: true,
    why: [
      "`add(0, \"map\")` puts map in front: [map, rope, torch]. `set(2, \"lamp\")` replaces torch and returns the old value, torch. `remove(0)` takes out map and returns it, and `add(1, gone)` puts it back at index 1.",
      "`set` returns the element that was there before, not the new one.",
      "`add(0, \"map\")` inserts at index 0 and moves the others to the right. It does not add to the end.",
      "`add(1, gone)` inserts and moves the rest to the right. It does not replace the element at index 1.",
    ],
    answer: 0,
    verify: { out: "[rope, map, lamp] torch" } },

  { id: "apb-34", skill: "arraylist", type: "mcq", topic: "4.9",
    stem: "A game picks a name from the party list. Consider the following method. Assume `names` has at least one element.",
    methods: C34,
    question: "Which of the following best describes the value returned by `pick`?",
    choices: [
      "The longest String in `names`; if there is a tie, the one that appears first",
      "The longest String in `names`; if there is a tie, the one that appears last",
      "The String in `names` that comes first in alphabetical order",
      "The number of letters in the longest String in `names`",
    ],
    why: [
      "`result` changes only when a name is strictly longer, using `>`. A later name of the same length does not replace it, so the first of the longest names is kept.",
      "To keep the last one, the test would need `>=`. With `>`, a name of the same length does not replace `result`.",
      "The method compares lengths with `length()`, not alphabetical order, which would need `compareTo`.",
      "The method returns `result`, a String, not its length.",
    ],
    answer: 0,
    verify: { cases: [
      { methods: C34, run: list("names", "String", ['"elf"', '"troll"', '"giant"', '"imp"']) + "\nSystem.out.println(pick(names));", out: "troll" },
      { methods: C34, run: list("names", "String", ['"ogre"', '"dwarf"', '"pixie"', '"orc"']) + "\nSystem.out.println(pick(names));", out: "dwarf" },
      { methods: C34, run: list("names", "String", ['"rogue"', '"bard"']) + "\nSystem.out.println(pick(names));", out: "rogue" },
    ] } },

  { id: "apb-35", skill: "arraylist", type: "mcq", topic: "4.10",
    stem: "A game removes every score of 9 or more from a list. Assume that `scores` is an `ArrayList<Integer>` that contains `[4, 9, 10, 2, 11, 5]`. Consider the following code segment.",
    code: C35,
    question: "What is printed as a result of executing the code segment?",
    choices: ["[4, 10, 2, 5]", "[4, 2, 5]", "[4, 10, 2, 11, 5]", "Nothing is printed. An IndexOutOfBoundsException is thrown."], mono: true,
    why: [
      "Removing the 9 at index 1 moves 10 into index 1, and then `i++` moves past it, so 10 is never checked. The 11 at index 3 is checked and removed.",
      "That is the intended result. Removing while going forward skips the element that moves into the gap. Going backward, from the end to index 0, fixes it.",
      "The 11 is checked and removed. Only the element right after each removal is skipped.",
      "The test `i < scores.size()` is checked again on each pass, using the current size, so `i` never goes past the end.",
    ],
    answer: 0,
    verify: { cases: [
      { run: list("scores", "Integer", [4, 9, 10, 2, 11, 5]) + "\n" + C35, out: "[4, 10, 2, 5]" },
    ] } },

  { id: "apb-36", skill: "arraylist", type: "mcq", topic: "4.10",
    stem: "A trip planner adds a stop to a route. The following method is intended to insert `city` into `trip` right after the first element equal to `after`, keeping every other stop. For example, if `trip` is `[Austin, Denver, Boise]`, the call `insertStop(trip, \"Moab\", \"Denver\")` should change `trip` to `[Austin, Denver, Moab, Boise]`.",
    methods: C36,
    question: "Which of the following can replace `/* missing code */` so that the method works as intended?",
    choices: ["trip.add(i + 1, city);", "trip.add(i, city);", "trip.set(i + 1, city);", "trip.add(city);"], mono: true,
    why: [
      "`add(index, obj)` inserts at that index and moves the later elements to the right, so inserting at `i + 1` puts the city right after `after`.",
      "Inserting at `i` puts the city in front of `after`: [Austin, Moab, Denver, Boise].",
      "`set` replaces the element at that index, so Boise is lost: [Austin, Denver, Moab].",
      "`add(obj)` always appends to the end: [Austin, Denver, Boise, Moab].",
    ],
    answer: 0,
    verify: { cases: [
      run36("trip.add(i + 1, city);", "[Austin, Denver, Moab, Boise]"),
      run36("trip.add(i, city);", "[Austin, Moab, Denver, Boise]"),
      run36("trip.set(i + 1, city);", "[Austin, Denver, Moab]"),
      run36("trip.add(city);", "[Austin, Denver, Boise, Moab]"),
    ] } },

  { id: "apb-37", skill: "twod", type: "mcq", topic: "4.12",
    stem: "A dungeon map stores the treasure in each square. Consider the following code segment.",
    code: C37,
    question: "What is printed as a result of executing the code segment?",
    choices: ["5 1 6 2", "1 5 2 6", "5 6 1 2", "Nothing is printed. An ArrayIndexOutOfBoundsException is thrown, because `map[0].length` is the number of rows."], mono: true,
    why: [
      "The outer loop goes across the columns 0 and 2, and for each column the inner loop goes up from the bottom row. Column 0 gives 5 then 1, and column 2 gives 6 then 2.",
      "This reads each column from the top. The inner loop starts at `map.length - 1`, the bottom row, and counts down.",
      "This reads row by row. The outer loop is over columns, so a whole column is printed before the next one starts.",
      "`map.length` is the number of rows, 3, and `map[0].length` is the number of columns, 4. `c` takes the values 0 and 2, both valid.",
    ],
    answer: 0,
    verify: { out: "5 1 6 2" } },

  { id: "apb-38", skill: "twod", type: "mcq", topic: "4.12",
    stem: "A shop restocks every empty bin with 10 items. Consider the following code segment.",
    code: C38,
    question: "What is printed as a result of executing the code segment?",
    choices: ["20", "0", "1010", "10"], mono: true,
    why: [
      "The outer enhanced `for` gives `row` a reference to each row array, not a copy of it, and the inner loop changes elements through `row[k]`. Both empty bins become 10, and two ints add.",
      "The variable `row` is a copy of the reference, so it refers to the same row array that `stock` holds. Changes made through `row[k]` change `stock`.",
      "`stock[0][1] + stock[1][2]` adds two ints. There is no String in the expression, so nothing is joined.",
      "Both empty bins are filled, `stock[0][1]` and `stock[1][2]`, so each is 10.",
    ],
    answer: 0,
    verify: { out: "20" } },

  { id: "apb-39", skill: "twod", type: "mcq", topic: "4.13",
    stem: "In a shop, `shelves[r][c]` holds the number of items in bin `c` of shelf `r`. The array is rectangular. The following method is intended to return the total number of items in column `col`.",
    methods: C39,
    question: "Which of the following can replace `/* missing code */` so that the method works as intended?",
    choices: ["int r = 0; r < shelves.length; r++", "int r = 0; r < shelves[0].length; r++", "int r = 0; r < shelves.length - 1; r++", "int r = col; r < shelves.length; r++"], mono: true,
    why: [
      "A column has one element in each row, and `shelves.length` is the number of rows. So `r` goes from 0 to the last row.",
      "`shelves[0].length` is the number of columns. When there are more columns than rows, `r` goes past the last row and an ArrayIndexOutOfBoundsException is thrown.",
      "This stops before the last row, so its item is not added.",
      "The row index has nothing to do with the column number. Starting at `col` skips the first rows.",
    ],
    answer: 0,
    verify: { cases: [
      run39("int r = 0; r < shelves.length; r++", { out: "12" }),
      run39("int r = 0; r < shelves[0].length; r++", { throws: "ArrayIndexOutOfBoundsException" }),
      run39("int r = 0; r < shelves.length - 1; r++", { out: "5" }),
      run39("int r = col; r < shelves.length; r++", { out: "7" }),
    ] } },

  { id: "apb-40", skill: "search", type: "mcq", topic: "4.15",
    stem: "A game sorts its high scores with the following method, a correct insertion sort from least to greatest.",
    methods: C40,
    code: `int[] scores = {30, 10, 50, 20, 40, 5};
sort(scores);`,
    question: "What are the contents of `scores` after the outer loop has run three times, that is, when `j` is 3 at the point marked `/* end of outer loop */`?",
    choices: ["10 20 30 50 40 5", "5 10 20 50 40 30", "10 30 50 20 40 5", "10 20 30 40 50 5"], mono: true,
    why: [
      "Insertion sort keeps the front of the array sorted and slides each new value into place. After `j` is 1, 10 is in front of 30. 50 stays put. Then 20 slides in between 10 and 30.",
      "That is selection sort after three passes, which moves the smallest value to the front first. Insertion sort works only on the values up to index `j`.",
      "That is the array after two passes. The pass when `j` is 3 moves 20 into place.",
      "That is the array after four passes. When `j` is 3, the value at index 4 has not been looked at yet.",
    ],
    answer: 0,
    verify: { cases: [
      { methods: C40v, run: "int[] scores = {30, 10, 50, 20, 40, 5};\nsort(scores);", out: "10 20 30 50 40 5" },
    ] } },

  { id: "apb-41", skill: "recursion", type: "mcq", topic: "4.16",
    stem: "A spell's echo bounces back through the dungeon. Consider the following method.",
    methods: C41,
    question: "What is printed as a result of the call `echo(5)`?",
    choices: ["5 3 1 1 3 5", "5 3 1", "1 3 5 5 3 1", "5 3 1 -1 -1 1 3 5"], mono: true,
    why: [
      "Each call prints `n`, makes the recursive call, and prints `n` again after that call returns. The calls go 5, 3, 1, then -1, which prints nothing. The second prints come out as the calls return, in reverse order.",
      "This leaves out the second print. After each recursive call returns, the method prints `n` again.",
      "The first print happens before the recursive call, so the calls print 5, 3, 1 on the way down.",
      "`echo(-1)` prints nothing, because `-1 > 0` is false.",
    ],
    answer: 0,
    verify: { cases: [
      { methods: C41, run: "echo(5);", out: "5 3 1 1 3 5" },
    ] } },

  { id: "apb-42", skill: "search", type: "mcq", topic: "4.17",
    stem: "A shop keeps its item codes in a sorted array and looks them up with the following method, a binary search that prints each value it examines.",
    methods: C42,
    code: `int[] codes = {3, 8, 11, 15, 20, 24, 31, 37, 42};
int spot = find(codes, 12);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["20 8 11 15", "20 11 15", "3 8 11 15", "20 8 11"], mono: true,
    why: [
      "`mid` is 4 (20), so `hi` becomes 3. Then `mid` is (0 + 3) / 2, which is 1 (8), so `lo` becomes 2. Then 11 at index 2 and 15 at index 3. Now `lo` is 3 and `hi` is 2, so the loop ends and the method returns -1.",
      "`(0 + 3) / 2` is int division, which gives 1, not 2. The second value examined is 8.",
      "That is a linear search from the front. A binary search starts in the middle and halves the range each time.",
      "After 11, `lo` and `hi` are both 3, so `lo <= hi` is still true and 15 is examined.",
    ],
    answer: 0,
    verify: { out: "20 8 11 15" } },

  // ===== Section II: free response =====
  { id: "apb-frq1", skill: "frq", type: "code", topic: "2.7", title: "Free Response 1: The dungeon run",
    prompt: "This question involves the `DungeonRun` class, which describes a dungeon whose rooms are numbered from 1 to `numRooms`. A helper method, `roomValue`, returns the number of coins in a room, or -1 if the room holds a trap. You will write two methods of the `DungeonRun` class.\n\n" +
      "**Part (a).** Write the method `collect`. A hero enters rooms 1, 2, 3, and so on, in order. In a room with coins, the hero adds the coins to the total; a room can hold 0 coins. A trap room adds nothing, but it counts as a trap. The run ends as soon as the hero has entered `maxTraps` trap rooms, or after room `numRooms`, whichever comes first. The method returns the total number of coins collected. You must use `roomValue` appropriately to receive full credit.\n\n" +
      "For example, suppose `numRooms` is 8 and `roomValue` returns these values for rooms 1 to 8: 5, -1, 12, 0, -1, 30, -1, 8.\n\n" +
      "- `collect(2)` returns 17. The second trap is room 5, so the hero collects from rooms 1, 3, and 4.\n" +
      "- `collect(3)` returns 47. The third trap is room 7.\n" +
      "- `collect(5)` returns 55. The hero never meets 5 traps and collects from every room.\n\n" +
      "**Part (b).** Write the method `countWord`. Scrolls found in the dungeon hold spells, and a spell's power is the number of times a word appears in its scroll. The method returns the number of times `word` appears in `scroll`, where no two counted appearances share a letter: after an appearance is counted, the search goes on from the letter right after it.\n\n" +
      "- `countWord(\"firefly fires\", \"fire\")` returns 2.\n" +
      "- `countWord(\"aaaaa\", \"aa\")` returns 2.\n" +
      "- `countWord(\"ice wall\", \"fire\")` returns 0.\n\n" +
      "Use only `String` methods from the Java Quick Reference. Write both methods as they would appear inside the `DungeonRun` class.",
    given: F1_GIVEN,
    sample: "Rooms 1 to 8 hold: 5, -1, 12, 0, -1, 30, -1, 8\ncollect(2) returns 17\ncollect(3) returns 47\ncollect(5) returns 55\n\ncountWord(\"firefly fires\", \"fire\") returns 2\ncountWord(\"aaaaa\", \"aa\") returns 2\ncountWord(\"ice wall\", \"fire\") returns 0",
    rows: [
      { name: "(a) Calls roomValue for the rooms in order", earns: "Calls `roomValue` in a loop with room numbers starting at 1 and going up by 1, and never with a number above `numRooms` (no bounds errors). Not earned for a call on another object or with the wrong number of arguments." },
      { name: "(a) Adds the coins of a room that is not a trap", earns: "Tells a trap (`-1`) from a room with coins, and adds `roomValue`'s result to a total only for a room that is not a trap. Calling `roomValue` more than once for the same room is fine." },
      { name: "(a) Counts traps and stops", earns: "Counts the trap rooms entered, and enters no more rooms once that count reaches `maxTraps` (in the loop condition, or by ending the loop or returning)." },
      { name: "(a) Returns the correct total (algorithm)", earns: "Returns the correct total in every case: a run that ends on its last trap, and a run that goes through room `numRooms` with fewer than `maxTraps` traps. Not earned if the total or the trap count is never initialized, or if a trap's -1 is added to the total." },
      { name: "(b) Finds word in scroll", earns: "Uses `indexOf` or `substring` to find `word` in `scroll` (or in what is left of it), with every `String` call valid: no index past the end of the String." },
      { name: "(b) Goes on past each appearance", earns: "After counting an appearance, goes on searching from the letter right after it (for example `substring(spot + word.length())`), so the loop ends and no letter is part of two counted appearances. `\"aaaaa\"` with `\"aa\"` gives 2, not 4." },
      { name: "(b) Returns the count (algorithm)", earns: "Returns the number of appearances, including 0 when `word` never appears. Not earned if the response changes the instance variables, or prints instead of returning." },
    ],
    notes: NOTE + " Part (b) may also be written as a loop over every index of `scroll` that compares `scroll.substring(i, i + word.length())` with `word` using `equals`, as long as the loop stops at `scroll.length() - word.length()` and jumps past each match; row 5 is earned for a valid comparison and row 6 for the jump. Assigning a new value to the parameter `scroll` is allowed, because it changes only the method's local copy of the reference. Comparing Strings with `==` does not earn row 5.",
    solution: F1A + "\n\n" + F1B,
    verify: { cases: [
      { classes: F1_CLASS, run: "DungeonRun d = new DungeonRun(new int[] {5, -1, 12, 0, -1, 30, -1, 8});\nSystem.out.println(d.collect(2) + \" \" + d.collect(3) + \" \" + d.collect(5) + \" \" + d.collect(1));", out: "17 47 55 5" },
      { classes: F1_CLASS, run: "DungeonRun d = new DungeonRun(new int[] {-1, 9, -1});\nSystem.out.println(d.collect(1) + \" \" + d.collect(2) + \" \" + d.collect(3));", out: "0 9 9" },
      { classes: F1_CLASS, run: "DungeonRun d = new DungeonRun(new int[] {4});\nSystem.out.println(d.collect(1));", out: "4" },
      { classes: F1_CLASS, run: "DungeonRun d = new DungeonRun(new int[] {1});\nSystem.out.println(d.countWord(\"firefly fires\", \"fire\") + \" \" + d.countWord(\"aaaaa\", \"aa\") + \" \" + d.countWord(\"ice wall\", \"fire\"));", out: "2 2 0" },
      { classes: F1_CLASS, run: "DungeonRun d = new DungeonRun(new int[] {1});\nSystem.out.println(d.countWord(\"fire\", \"fire\") + \" \" + d.countWord(\"firfire\", \"fire\") + \" \" + d.countWord(\"ab\", \"abc\") + \" \" + d.countWord(\"xoxox\", \"x\"));", out: "1 1 0 3" },
    ] } },

  { id: "apb-frq2", skill: "frq", type: "code", topic: "3.4", title: "Free Response 2: The punch card",
    prompt: "A game shop gives each customer a punch card. The `PunchCard` class, which you will write, represents one card. Each paid game adds a punch to the card. When the card holds a given number of punches, the card is full, and the next game is free; the free game takes the card back to 0 punches.\n\n" +
      "`PunchCard` objects are created by calls to a constructor with one `int` parameter: the number of punches that makes the card full. Assume that this value is at least 1. A new card has 0 punches.\n\n" +
      "The `PunchCard` class contains these two methods.\n\n" +
      "- `buy`, which has one `double` parameter, the price of a game (greater than 0.0). If the card is full, the game is free: `buy` returns 0.0, the price counts toward the amount saved, and the card goes back to 0 punches. Otherwise, `buy` adds a punch to the card and returns the price.\n" +
      "- `getSaved`, which has no parameters and returns the total of the prices of all the free games on this card, as a `double`.\n\n" +
      "The table below shows a sample code execution sequence and its results. The statements appear in a class other than `PunchCard`.\n\n" +
      "Write the complete `PunchCard` class. Your implementation must meet all specifications and conform to the examples shown in the table.",
    sample: F2_TABLE,
    rows: [
      { name: "Class header", earns: "Declares the class header `class PunchCard` or `public class PunchCard`. Not earned if the class is declared `private` or there is extra code outside the class." },
      { name: "Instance variables", earns: "Declares `private` instance variables of suitable types for the number of punches that makes the card full, the current number of punches, and the amount saved. Not earned if any of them is `static`." },
      { name: "Constructor header", earns: "Declares the constructor header `PunchCard(int ___)`, `public` or with no access modifier. Not earned if it is `private` or has a return type." },
      { name: "Constructor sets the starting values", earns: "The constructor stores its parameter as the number of punches that makes the card full, and starts the punches and the amount saved at 0 (set in the constructor or by default)." },
      { name: "Method headers", earns: "Declares both method headers, `public double buy(double ___)` and `public double getSaved()`. Not earned with a wrong name, a wrong parameter type, or a modifier other than `public`." },
      { name: "The free game (algorithm)", earns: "In `buy`: when the punches equal the number that makes the card full, the game is free, the price is added to the amount saved, and the punches go back to 0; otherwise one punch is added. The test must come before the punch is added, so a card made with 3 gives three paid games and then a free one." },
      { name: "Returns the right values", earns: "`buy` returns 0.0 for a free game and the price for a paid one, with a `double` returned in every case; `getSaved` returns the amount saved. Not earned if a method prints instead of returning." },
    ],
    notes: NOTE + " Row 6 is judged on its own even when the response stores the values under other names. A response that adds the punch first and then tests `punches > goal` can still earn row 6, as long as the free game happens on the fourth call for a card made with 3 and the punches restart correctly. A `static` counter shared by every card does not earn row 2, and it also fails row 6 for the second card in the table.",
    solution: F2_SOL,
    verify: { cases: [
      { classes: F2_SOL.replace("public class PunchCard", "class PunchCard"), run: "PunchCard card = new PunchCard(3);\nSystem.out.println(card.buy(4.5));\nSystem.out.println(card.buy(2.0));\nSystem.out.println(card.buy(6.0));\nSystem.out.println(card.getSaved());\nSystem.out.println(card.buy(5.25));\nSystem.out.println(card.buy(1.5));\nSystem.out.println(card.getSaved());", out: "4.5\n2.0\n6.0\n0.0\n0.0\n1.5\n5.25" },
      { classes: F2_SOL.replace("public class PunchCard", "class PunchCard"), run: "PunchCard card = new PunchCard(3);\nPunchCard mini = new PunchCard(1);\ncard.buy(1.0);\nSystem.out.println(mini.buy(3.0));\nSystem.out.println(mini.buy(8.0));\nSystem.out.println(mini.buy(2.5));\nSystem.out.println(mini.buy(4.0));\nSystem.out.println(mini.getSaved());\nSystem.out.println(card.getSaved());", out: "3.0\n0.0\n2.5\n0.0\n12.0\n0.0" },
    ] } },

  { id: "apb-frq3", skill: "frq", type: "code", topic: "4.10", title: "Free Response 3: The departure board",
    prompt: "An airport's departure board lists flights. The `Flight` class stores information about one flight, and the `DepartureBoard` class keeps an `ArrayList` of the flights on the board. Partial declarations of both classes are shown.\n\n" +
      "Write the `DepartureBoard` method `removeSoldOut`. The method removes from `flights` every flight whose destination is `city` and that has no seats left, and returns the number of flights removed. The other flights stay in `flights`, in their original order.\n\n" +
      "For example, suppose `flights` holds these six flights, shown as destination and seats left:\n\n" +
      "`Denver 0`, `Denver 0`, `Austin 12`, `Denver 4`, `Boise 0`, `Denver 0`\n\n" +
      "The call `removeSoldOut(\"Denver\")` returns 3, and `flights` then holds `Austin 12`, `Denver 4`, `Boise 0`. The flight to Boise has no seats left, but it is not a flight to Denver, so it stays.\n\n" +
      "Complete the method `removeSoldOut`. Use only `ArrayList` and `String` methods from the Java Quick Reference and the methods shown.",
    given: F3_GIVEN,
    sample: "flights: Denver 0, Denver 0, Austin 12, Denver 4, Boise 0, Denver 0\nremoveSoldOut(\"Denver\") returns 3\nflights is then: Austin 12, Denver 4, Boise 0",
    rows: [
      { name: "Accesses every flight", earns: "Accesses every element of `flights` with no bounds errors, and none is skipped after a removal (for example, a loop that goes from the last index down to 0, or one that moves `i` forward only when nothing was removed). Not earned with array syntax (`flights[i]`) or an enhanced `for` loop that removes elements." },
      { name: "Calls the Flight methods", earns: "Calls `getDestination` and `getSeatsLeft` on a `Flight` from the list. Can be earned even with array syntax for the access." },
      { name: "Identifies a sold-out flight to city", earns: "Checks both that the destination equals `city`, compared with `equals`, and that the seats left are 0, joined with `&&`. Not earned with `==` for the Strings." },
      { name: "Removes the flight", earns: "Removes each identified flight from `flights` with `remove`, in the context of the loop." },
      { name: "Returns the count, list correct (algorithm)", earns: "Returns the number of flights removed, and `flights` keeps every other flight in its original order. Not earned if the count is never initialized, if two sold-out flights in a row leave one behind, or if a new list is returned in place of the count." },
    ],
    notes: NOTE + " A response that builds a new list of the flights to keep and assigns it to `flights` can earn every row, with row 4 earned by leaving the identified flights out of the new list. Row 1 is not earned by a forward loop that always runs `i++`, because `Denver 0, Denver 0` loses only the first flight.",
    solution: F3_SOL,
    verify: { cases: [
      { classes: F3_CLASSES, ...board([["Denver", 0], ["Denver", 0], ["Austin", 12], ["Denver", 4], ["Boise", 0], ["Denver", 0]], "Denver", "3 | Austin 12; Denver 4; Boise 0;") },
      { classes: F3_CLASSES, ...board([["Austin", 3], ["Boise", 1]], "Austin", "0 | Austin 3; Boise 1;") },
      { classes: F3_CLASSES, ...board([["Reno", 0], ["Reno", 0], ["Reno", 0]], "Reno", "3 |") },
      { classes: F3_CLASSES, ...board([["Boise", 0], ["Reno", 0]], "Austin", "0 | Boise 0; Reno 0;") },
    ] } },

  { id: "apb-frq4", skill: "frq", type: "code", topic: "4.13", title: "Free Response 4: Guarded chests",
    prompt: "A dungeon map is a grid of tiles. The `Tile` class represents one tile, and the `DungeonMap` class keeps a two-dimensional array of tiles. Partial declarations of both classes are shown. When an element of `tiles` is accessed, the first index is the row and the second index is the column.\n\n" +
      "Write the `DungeonMap` method `guardedChests`. The method returns the number of chest tiles that have a guard tile directly above them or directly below them, in the same column. A guard to the left or right of a chest does not count, and a chest with a guard both above and below it is counted once.\n\n" +
      "For example, suppose `tiles` has 4 rows and 5 columns, shown below with the first letter of each tile's kind (W wall, F floor, C chest, G guard). The call `guardedChests()` returns 5. Of the seven chests, the chest in row 2, column 4 has floor above it and a wall below it, and the chest in row 3, column 3 has only a guard to its left.\n\n" +
      "Complete the method `guardedChests`. Use only the methods shown and `String` methods from the Java Quick Reference.",
    given: F4_GIVEN,
    sample: "        col 0  1  2  3  4\nrow 0       F  G  F  C  W\nrow 1       C  C  F  G  F\nrow 2       G  G  W  C  C\nrow 3       F  C  G  C  W\n\nguardedChests() returns 5\nCounted: (0, 3), (1, 0), (1, 1), (2, 3), (3, 1)\nNot counted: (2, 4), (3, 3)",
    rows: [
      { name: "Accesses all tiles", earns: "Accesses every element of `tiles` with no bounds errors, using `tiles.length` for the rows and `tiles[0].length` (or `tiles[r].length`) for the columns." },
      { name: "Calls getKind", earns: "Calls `getKind` on a `Tile` from `tiles`. Can be earned even when some tiles are accessed out of bounds." },
      { name: "Compares kinds with equals", earns: "Compares a kind with `\"chest\"` or `\"guard\"` using `equals`, never `==`." },
      { name: "Checks above and below only when they exist", earns: "Looks at the tile in row `r - 1` only when `r > 0`, and at the tile in row `r + 1` only when `r < tiles.length - 1`, so a chest in the top or bottom row causes no ArrayIndexOutOfBoundsException." },
      { name: "Identifies a guarded chest (algorithm)", earns: "Identifies each chest that has a guard directly above or directly below it in the same column, and no other tile. A guard to the side does not make a chest guarded." },
      { name: "Counts each guarded chest once and returns the count (algorithm)", earns: "Starts a count at 0 before the loops, adds 1 for each guarded chest exactly once (a chest guarded from both sides still adds 1), and returns the count after the loops. Not earned if the count is returned inside the loops." },
    ],
    notes: NOTE + " Rows and columns may be swapped in a response's variable names as long as the indexes are used correctly. Row 4 is not earned by a check of `r - 1 >= 0` written after the access it is meant to guard, unless short-circuit evaluation (`&&`) keeps the access from running.",
    solution: F4_SOL,
    verify: { cases: [
      { classes: F4_CLASSES, ...dmap(["FGFCW", "CCFGF", "GGWCC", "FCGCW"], "5") },
      { classes: F4_CLASSES, ...dmap(["CGC"], "0") },
      { classes: F4_CLASSES, ...dmap(["G", "C", "G"], "1") },
      { classes: F4_CLASSES, ...dmap(["CG", "GC"], "2") },
      { classes: F4_CLASSES, ...dmap(["FF", "FF"], "0") },
    ] } },
];

export default {
  forms: [
    { id: "apb", name: "AP Practice Exam B", group: "AP Practice Exam", date: "2027-04-05", items },
  ],
};

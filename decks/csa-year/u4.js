// AP CSA mock forms: Unit 4 Test Practice A and B (the Unit 4 Test of 3/18).
// Each form: 22 multiple choice, weighted as the Unit 4 build's MCQ table weights them, then two free responses.
//   01-05 arrays (4.3 defaults, 4.4 enhanced for, 4.4 bounds, 4.5 extreme value, 4.5 swap or shift)
//   06-10 ArrayList (4.8 methods and their return values, 4.7 wrapper types, 4.9 the removal trap,
//         4.10 an ArrayList algorithm, 4.6 a text file read into an ArrayList; the build's table has no
//         separate row for files, so the file item sits in the ArrayList group, where 4.6 is taught)
//   11-15 2D arrays (4.11 dimensions, 4.12 traversal order, 4.12 enhanced for over rows, 4.13 missing code, 4.13 search)
//   16-18 searching (4.14 linear search, 4.17 binary search trace, 4.17 binary search needs sorted data)
//   19-20 sorting (4.15 selection sort after k passes, 4.15 insertion sort after k passes)
//   21-22 recursion (4.16 a recursive method traced, 4.17 a merge sort trace)
//   frq1: Data Analysis with ArrayList (AP Free Response Question 3 style, 5 rows, as in the CED)
//   frq2: 2D Array (AP Free Response Question 4 style, 6 rows, as in the CED)
// 22 + 5 + 6 = 33 points.
// Settings: the crawler world in plain variables (hit points, rooms, spells, loot, tiles, gold, gear),
// and everyday ones (prices, temperatures, rainfall, a greenhouse, a farm, a theater, a hotel, laps, scores).
// Only Quick Reference library methods appear in what students read. Scanner uses hasNext, next, nextInt.
// In every mcq the key is written first and answer is 0 (the site shuffles).

const NOTE = "One point for each row. Award a row for what the code actually does; ignore small typing slips that do not change the logic.";
const QR_AL = "Use only the methods shown and the `ArrayList` methods from the Java Quick Reference: `size`, `add`, `get`, `set`, and `remove`.";

// Prints an int array as space-separated values (verify only).
const PRINT_ARR = `for (int v : arr)
            {
                System.out.print(v + " ");
            }`;

// ---------- shared methods ----------

const SEL = `public static void selectionSort(int[] arr)
{
    for (int j = 0; j < arr.length - 1; j++)
    {
        int minIndex = j;
        for (int k = j + 1; k < arr.length; k++)
        {
            if (arr[k] < arr[minIndex])
            {
                minIndex = k;
            }
        }
        int temp = arr[j];
        arr[j] = arr[minIndex];
        arr[minIndex] = temp;
        // end of pass
    }
}`;

const INS = `public static void insertionSort(int[] arr)
{
    for (int i = 1; i < arr.length; i++)
    {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key)
        {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
        // end of pass
    }
}`;

// The same sorts, printing the array at the end of pass p (verify only).
const selAt = (p) => SEL.replace("// end of pass", `if (j == ${p - 1})\n        {\n            ${PRINT_ARR}\n        }`);
const insAt = (p) => INS.replace("// end of pass", `if (i == ${p})\n        {\n            ${PRINT_ARR}\n        }`);

const BIN = `public static int binarySearch(int[] arr, int target)
{
    int lo = 0;
    int hi = arr.length - 1;
    while (lo <= hi)
    {
        int mid = (lo + hi) / 2;
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

const BIN_PRINT = BIN.replace("int mid = (lo + hi) / 2;", "int mid = (lo + hi) / 2;\n        System.out.print(arr[mid] + \" \");");

// Merge sort that prints the two sorted parts of every merge, in the order the merges happen (verify only).
const MERGE = `public static int[] mergeSort(int[] a)
{
    if (a.length <= 1)
    {
        return a;
    }
    int mid = a.length / 2;
    int[] left = mergeSort(Arrays.copyOfRange(a, 0, mid));
    int[] right = mergeSort(Arrays.copyOfRange(a, mid, a.length));
    int[] out = new int[a.length];
    int i = 0;
    int j = 0;
    for (int k = 0; k < out.length; k++)
    {
        if (j >= right.length || (i < left.length && left[i] <= right[j]))
        {
            out[k] = left[i];
            i++;
        }
        else
        {
            out[k] = right[j];
            j++;
        }
    }
    System.out.println(Arrays.toString(left) + " " + Arrays.toString(right));
    return out;
}`;

const MERGE_STEM = "The merge sort used splits an array into a left part, which holds the first `length / 2` elements, and a right part, which holds the rest. It sorts the left part, then sorts the right part, and then merges the two sorted parts into one sorted array. An array of one element is already sorted.";

// ---------- Practice A code ----------

const A14 = (missing) => `int[][] scores = {
    {7, 2, 9},
    {4, 8, 1},
    {6, 5, 3},
    {2, 2, 2}
};
for (int c = 0; c < scores[0].length; c++)
{
    int sum = 0;
    ${missing}
    System.out.print(sum + " ");
}`;

const A16 = `public static int find(int[] arr, int target)
{
    for (int i = 0; i < arr.length; i++)
    {
        if (arr[i] == target)
        {
            return i;
        }
        else
        {
            return -1;
        }
    }
    return -1;
}`;

const A21 = `public static int mystery(int n)
{
    if (n < 10)
    {
        return n;
    }
    return mystery(n / 10) * 2 + n % 10;
}`;

// ---------- Practice B code ----------

const B04 = `int big = 0;
for (int v : vals)
{
    if (v > big)
    {
        big = v;
    }
}
System.out.println(big);`;

const B08 = (header, body) => `${header}
{
    if (names.get(i).length() < 4)
    {
        ${body}
    }
}`;
const B08_FILL = `ArrayList<String> names = new ArrayList<String>();
names.add("Bo");
names.add("Al");
names.add("Kim");
names.add("Rosa");
names.add("Tess");
names.add("Li");
`;

const B14 = (missing) => `int[][] t = {
    {12, 30, 18},
    {25, 9, 14},
    {7, 22, 31},
    {16, 16, 5}
};
for (int r = 0; r < t.length; r++)
{
    ${missing}
    System.out.print(most + " ");
}`;

const B16 = `public static int find(String[] list, String target)
{
    int index = -1;
    for (int i = 0; i < list.length; i++)
    {
        if (list[i].equals(target))
        {
            index = i;
        }
    }
    return index;
}`;

const B21 = `public static String echo(String s)
{
    if (s.length() == 0)
    {
        return "";
    }
    String first = s.substring(0, 1);
    if (first.equals("a"))
    {
        return echo(s.substring(1)) + first;
    }
    return first + echo(s.substring(1));
}`;

// ---------- Free response: Practice A ----------

const PLANT = `class Plant
{
    private String name;
    private int height;
    private boolean flowering;

    public Plant(String n, int h, boolean f)
    {
        name = n;
        height = h;
        flowering = f;
    }

    public String getName()
    {
        return name;
    }

    public int getHeight()
    {
        return height;
    }

    public boolean isFlowering()
    {
        return flowering;
    }
}`;

const AF1 = `public ArrayList<String> removeReady(int minHeight)
{
    ArrayList<String> ready = new ArrayList<String>();
    for (int i = plants.size() - 1; i >= 0; i--)
    {
        Plant p = plants.get(i);
        if (p.isFlowering() && p.getHeight() >= minHeight)
        {
            ready.add(0, p.getName());
            plants.remove(i);
        }
    }
    return ready;
}`;

// A second full-credit solution: forward, with i moved back after a removal.
const AF1_FWD = `public ArrayList<String> removeReady(int minHeight)
{
    ArrayList<String> ready = new ArrayList<String>();
    for (int i = 0; i < plants.size(); i++)
    {
        if (plants.get(i).isFlowering() && plants.get(i).getHeight() >= minHeight)
        {
            ready.add(plants.get(i).getName());
            plants.remove(i);
            i--;
        }
    }
    return ready;
}`;

// Forward with no adjustment: skips the plant after each removal (does not earn row 4).
const AF1_SKIP = AF1_FWD.replace("\n            i--;", "");

const greenhouse = (sol) => `class Greenhouse
{
    private ArrayList<Plant> plants;

    public Greenhouse(ArrayList<Plant> p)
    {
        plants = p;
    }

    public String names()
    {
        String s = "";
        for (Plant p : plants)
        {
            s += p.getName() + " ";
        }
        return s;
    }

${sol.split("\n").map((l) => "    " + l).join("\n")}
}`;

const PLANTS_EX = [["fern", 40, false], ["rose", 55, true], ["tulip", 30, true], ["lily", 62, true], ["iris", 48, true], ["moss", 5, false]];

const gh = (list, min, out, sol = AF1) => ({
  classes: greenhouse(sol),
  run: `ArrayList<Plant> list = new ArrayList<Plant>();\n${list.map(([n, h, f]) => `list.add(new Plant("${n}", ${h}, ${f}));`).join("\n")}\nGreenhouse g = new Greenhouse(list);\nSystem.out.println(g.removeReady(${min}));\nSystem.out.println(g.names());`,
  out,
});

const PLOT = `class Plot
{
    private String crop;
    private int yield;

    public Plot(String c, int y)
    {
        crop = c;
        yield = y;
    }

    public String getCrop()
    {
        return crop;
    }

    public int getYield()
    {
        return yield;
    }
}`;

const AF2 = `public int bestRow(String crop)
{
    int bestIndex = 0;
    int bestTotal = -1;
    for (int r = 0; r < field.length; r++)
    {
        int total = 0;
        for (int c = 0; c < field[r].length; c++)
        {
            if (field[r][c].getCrop().equals(crop))
            {
                total += field[r][c].getYield();
            }
        }
        if (total > bestTotal)
        {
            bestTotal = total;
            bestIndex = r;
        }
    }
    return bestIndex;
}`;

const farm = (sol) => `class Farm
{
    private Plot[][] field;

    public Farm(Plot[][] f)
    {
        field = f;
    }

${sol.split("\n").map((l) => "    " + l).join("\n")}
}`;

const FIELD_EX = [
  ["corn 5", "beans 3", "corn 2", "wheat 9"],
  ["beans 4", "corn 6", "wheat 12", "beans 2"],
  ["corn 3", "corn 4", "beans 8", "wheat 7"],
];

const grid2D = (cls, rows) => `${cls}[][] grid = {\n${rows.map((r) => "    {" + r.map((x) => { const [a, b] = x.split(" "); return cls === "Plot" ? `new Plot("${a}", ${b})` : `new Room(${a === "B"}, ${b})`; }).join(", ") + "}").join(",\n")}\n};`;

const fm = (rows, crops, out, sol = AF2) => ({
  classes: farm(sol),
  run: `${grid2D("Plot", rows)}\nFarm f = new Farm(grid);\n${crops.map((c) => `System.out.println(f.bestRow("${c}"));`).join("\n")}`,
  out,
});

// ---------- Free response: Practice B ----------

const TICKET = `class Ticket
{
    private String seat;
    private double price;
    private boolean sold;

    public Ticket(String s, double p, boolean d)
    {
        seat = s;
        price = p;
        sold = d;
    }

    public String getSeat()
    {
        return seat;
    }

    public double getPrice()
    {
        return price;
    }

    public boolean isSold()
    {
        return sold;
    }
}`;

const BF1 = `public ArrayList<String> pullUnsold(double maxPrice)
{
    ArrayList<String> pulled = new ArrayList<String>();
    for (int i = tickets.size() - 1; i >= 0; i--)
    {
        Ticket t = tickets.get(i);
        if (!t.isSold() && t.getPrice() > maxPrice)
        {
            pulled.add(0, t.getSeat());
            tickets.remove(i);
        }
    }
    return pulled;
}`;

const BF1_FWD = `public ArrayList<String> pullUnsold(double maxPrice)
{
    ArrayList<String> pulled = new ArrayList<String>();
    int i = 0;
    while (i < tickets.size())
    {
        Ticket t = tickets.get(i);
        if (!t.isSold() && t.getPrice() > maxPrice)
        {
            pulled.add(t.getSeat());
            tickets.remove(i);
        }
        else
        {
            i++;
        }
    }
    return pulled;
}`;

const BF1_SKIP = `public ArrayList<String> pullUnsold(double maxPrice)
{
    ArrayList<String> pulled = new ArrayList<String>();
    for (int i = 0; i < tickets.size(); i++)
    {
        Ticket t = tickets.get(i);
        if (!t.isSold() && t.getPrice() > maxPrice)
        {
            pulled.add(t.getSeat());
            tickets.remove(i);
        }
    }
    return pulled;
}`;

const show = (sol) => `class Show
{
    private ArrayList<Ticket> tickets;

    public Show(ArrayList<Ticket> t)
    {
        tickets = t;
    }

    public String seats()
    {
        String s = "";
        for (Ticket t : tickets)
        {
            s += t.getSeat() + " ";
        }
        return s;
    }

${sol.split("\n").map((l) => "    " + l).join("\n")}
}`;

const TICKETS_EX = [["A1", "45.0", true], ["A2", "60.0", false], ["A3", "60.0", false], ["B1", "30.0", false], ["B2", "75.5", true], ["B3", "52.0", false], ["C1", "50.0", false]];

const sh = (list, max, out, sol = BF1) => ({
  classes: show(sol),
  run: `ArrayList<Ticket> list = new ArrayList<Ticket>();\n${list.map(([s, p, d]) => `list.add(new Ticket("${s}", ${p}, ${d}));`).join("\n")}\nShow s = new Show(list);\nSystem.out.println(s.pullUnsold(${max}));\nSystem.out.println(s.seats());`,
  out,
});

const ROOM = `class Room
{
    private boolean booked;
    private int rate;

    public Room(boolean b, int r)
    {
        booked = b;
        rate = r;
    }

    public boolean isBooked()
    {
        return booked;
    }

    public int getRate()
    {
        return rate;
    }
}`;

const BF2 = `public int bestFloor(int maxRate)
{
    int bestIndex = 0;
    int bestCount = -1;
    for (int f = 0; f < rooms.length; f++)
    {
        int count = 0;
        for (int n = 0; n < rooms[f].length; n++)
        {
            if (!rooms[f][n].isBooked() && rooms[f][n].getRate() <= maxRate)
            {
                count++;
            }
        }
        if (count > bestCount)
        {
            bestCount = count;
            bestIndex = f;
        }
    }
    return bestIndex;
}`;

const hotel = (sol) => `class Hotel
{
    private Room[][] rooms;

    public Hotel(Room[][] r)
    {
        rooms = r;
    }

${sol.split("\n").map((l) => "    " + l).join("\n")}
}`;

const ROOMS_EX = [
  ["B 120", "O 95", "O 150", "B 90"],
  ["O 80", "O 100", "B 85", "O 140"],
  ["O 99", "B 70", "O 60", "O 100"],
];

const ht = (rows, rates, out, sol = BF2) => ({
  classes: hotel(sol),
  run: `${grid2D("Room", rows)}\nHotel h = new Hotel(grid);\n${rates.map((r) => `System.out.println(h.bestFloor(${r}));`).join("\n")}`,
  out,
});

// =====================================================================
// Practice A
// =====================================================================

const u4a = [
  { id: "u4a-01", skill: "arrays", type: "mcq", topic: "4.3",
    stem: "Consider the following code segment.",
    code: `double[] prices = new double[4];
boolean[] sold = new boolean[4];
prices[1] = 2.5;
sold[prices.length - 1] = true;
System.out.println(prices[0] + " " + prices[1] + " " + sold[0] + " " + sold[3]);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["0.0 2.5 false true", "0 2.5 false true", "null 2.5 null true", "Nothing is printed. An ArrayIndexOutOfBoundsException is thrown."],
    why: [
      "A new `double` array starts with every element 0.0, and a new `boolean` array with every element `false`. `prices.length - 1` is 3, the last index, so `sold[3]` becomes `true`.",
      "The elements of a `double` array are doubles, so the 0 a new array holds prints as 0.0.",
      "Only an array of objects starts with `null` in it. Arrays of `double` and `boolean` start with 0.0 and `false`.",
      "`prices.length` is 4, so `prices.length - 1` is 3, which is a valid index in an array of length 4.",
    ],
    answer: 0,
    verify: { out: "0.0 2.5 false true" } },

  { id: "u4a-02", skill: "arrays", type: "mcq", topic: "4.4",
    stem: "Consider the following code segment, which works with the hit points of four monsters.",
    code: `int[] hp = {12, 0, 7, 3};
for (int h : hp)
{
    h = h + 5;
}
for (int i = 0; i < hp.length; i += 2)
{
    hp[i] = hp[i] * 2;
}
for (int h : hp)
{
    System.out.print(h + " ");
}`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["24 0 14 3", "34 5 24 8", "24 0 14 6", "12 0 7 3"], mono: true,
    why: [
      "In the first loop, `h` is a copy of each element, so adding 5 to it leaves `hp` unchanged. The indexed loop assigns to `hp[i]` itself, at indexes 0 and 2 only, so 12 and 7 are doubled.",
      "This assumes the enhanced `for` added 5 to each element. `h` is a copy, so changing it never changes the array.",
      "`i += 2` visits indexes 0 and 2 only. This doubles every element.",
      "The indexed loop does change the array, because it assigns to `hp[i]`. Only the enhanced `for` works on copies.",
    ],
    answer: 0,
    verify: { out: "24 0 14 3" } },

  { id: "u4a-03", skill: "arrays", type: "mcq", topic: "4.4",
    stem: "Consider the following code segment.",
    code: `String[] rooms = {"hall", "vault", "crypt"};
int count = 0;
for (int i = 1; i <= rooms.length; i++)
{
    if (rooms[i].length() > 4)
    {
        count++;
    }
}
System.out.println(count);`,
    question: "What is the result of executing the code segment?",
    choices: ["Nothing is printed. An ArrayIndexOutOfBoundsException is thrown.", "2", "Nothing is printed. A StringIndexOutOfBoundsException is thrown.", "Nothing is printed. The code segment does not compile."],
    why: [
      "`i <= rooms.length` lets `i` reach 3, but the last index of a 3-element array is 2. `rooms[3]` throws an `ArrayIndexOutOfBoundsException` before `count` is printed.",
      "2 would be printed if the loop stopped at index 2. With `<=`, it goes on to index 3 and crashes first.",
      "The bad index is used on the array, `rooms[3]`, not inside a String, so the exception is an `ArrayIndexOutOfBoundsException`.",
      "Java does not check array indexes when it compiles. The code compiles, and the bad index fails only when the code runs.",
    ],
    answer: 0,
    verify: { throws: "ArrayIndexOutOfBoundsException" } },

  { id: "u4a-04", skill: "arrays", type: "mcq", topic: "4.5",
    stem: "The following code segment is intended to print the warmest temperature in `temps` and its index.",
    code: `int[] temps = {-8, -3, -11, -3, -5};
int warmest = 0;
int at = -1;
for (int i = 0; i < temps.length; i++)
{
    if (temps[i] > warmest)
    {
        warmest = temps[i];
        at = i;
    }
}
System.out.println(warmest + " " + at);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["0 -1", "-3 1", "-3 3", "-11 2"], mono: true,
    why: [
      "`warmest` starts at 0, and every temperature is below 0, so `temps[i] > warmest` is never true. Neither variable changes. Starting from `temps[0]` would fix it.",
      "That is the intended result, which needs `warmest` to start at `temps[0]`. Starting at 0, no negative value is ever larger.",
      "That would be the last of the two -3 values, and only with `>=` and a correct starting value. Here no value is larger than 0.",
      "-11 is the coldest value, not the warmest, and the code never changes `warmest` at all.",
    ],
    answer: 0,
    verify: { out: "0 -1" } },

  { id: "u4a-05", skill: "arrays", type: "mcq", topic: "4.5",
    stem: "The following code segment is intended to reverse the order of the elements in `a`.",
    code: `int[] a = {4, 7, 1, 9, 6};
for (int i = 0; i < a.length / 2; i++)
{
    a[i] = a[a.length - 1 - i];
    a[a.length - 1 - i] = a[i];
}
for (int v : a)
{
    System.out.print(v + " ");
}`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["6 9 1 9 6", "6 9 1 7 4", "4 7 1 9 6", "4 7 1 7 4"], mono: true,
    why: [
      "There is no temporary variable. The first line copies the right value over the left one, so the left value is lost, and the second line copies that same value back. Both ends end up holding the right value.",
      "That is a correct reverse, which needs a temporary variable to keep `a[i]` before it is overwritten.",
      "The loop does change the array: each pass assigns to two elements of `a`.",
      "That is the result if the second line ran first. The first line runs first, so the right value is copied to the left.",
    ],
    answer: 0,
    verify: { out: "6 9 1 9 6" } },

  { id: "u4a-06", skill: "arraylist", type: "mcq", topic: "4.8",
    stem: "Consider the following code segment.",
    code: `ArrayList<String> party = new ArrayList<String>();
party.add("Kai");
party.add("Mo");
party.add(0, "Ren");
String out = party.set(1, "Ivy");
out += party.remove(2);
party.add("Zed");
System.out.println(out + " " + party);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["KaiMo [Ren, Ivy, Zed]", "IvyMo [Ren, Ivy, Zed]", "MoRen [Kai, Ivy, Zed]", "Nothing is printed. An IndexOutOfBoundsException is thrown."],
    why: [
      "`add(0, \"Ren\")` inserts at the front: `[Ren, Kai, Mo]`. `set` returns the element it replaces, `Kai`, and `remove` returns the element it removes, `Mo`. Then `Zed` is added at the end.",
      "`set` returns the OLD element at that index, `Kai`, not the new one.",
      "`add(0, \"Ren\")` inserts at index 0 and shifts the others right. It does not add at the end.",
      "`add(0, ...)` inserts and does not replace. The list has three elements when `remove(2)` runs, so index 2 exists.",
    ],
    answer: 0,
    verify: { out: "KaiMo [Ren, Ivy, Zed]" } },

  { id: "u4a-07", skill: "arraylist", type: "mcq", topic: "4.7",
    stem: "A program needs a list that can grow as quiz scores such as 88, 92, and 75 are added to it.",
    question: "Which of the following statements compiles and creates such a list?",
    choices: ["ArrayList<Integer> scores = new ArrayList<Integer>();", "ArrayList<int> scores = new ArrayList<int>();", "int[] scores = new ArrayList<Integer>();", "int[] scores = new int[];"], mono: true,
    why: [
      "An `ArrayList` holds objects, so the type in the angle brackets is the wrapper class `Integer`. The `int` scores are boxed into `Integer` objects when they are added.",
      "The type in the angle brackets must be a class. `int` is a primitive type, so this fails with `unexpected type`.",
      "An `ArrayList<Integer>` is not an `int[]`, so this fails with `incompatible types`. An array also cannot grow.",
      "A new array needs its length, so this fails with `array dimension missing`. Even with a length, an array cannot grow.",
    ],
    answer: 0,
    verify: { cases: [
      { run: "ArrayList<Integer> scores = new ArrayList<Integer>();\nscores.add(88);\nscores.add(92);\nscores.add(75);\nSystem.out.println(scores + \" \" + scores.size());", out: "[88, 92, 75] 3" },
      { run: "ArrayList<int> scores = new ArrayList<int>();", error: "unexpected type" },
      { run: "int[] scores = new ArrayList<Integer>();", error: "incompatible types" },
      { run: "int[] scores = new int[];", error: "array dimension missing" },
    ] } },

  { id: "u4a-08", skill: "arraylist", type: "mcq", topic: "4.9",
    stem: "The following code segment is intended to remove every 0 from `loot`.",
    code: `int[] found = {5, 0, 0, 8, 0, 3};
ArrayList<Integer> loot = new ArrayList<Integer>();
for (int g : found)
{
    loot.add(g);
}
for (int i = 0; i < loot.size(); i++)
{
    if (loot.get(i) == 0)
    {
        loot.remove(i);
    }
}
System.out.println(loot);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["[5, 0, 8, 3]", "[5, 8, 3]", "[5, 8, 0, 3]", "Nothing is printed. An IndexOutOfBoundsException is thrown."],
    why: [
      "Removing at index 1 shifts the second 0 into index 1, and then `i++` moves past it to index 2. That 0 is never checked. The third 0 is removed normally.",
      "That is the intended result. Removing while going forward skips the element that slides into the gap, so one of the two 0s in a row survives.",
      "The 0 that survives is the one right after the first removed 0, at index 1, before the 8.",
      "The condition `i < loot.size()` is checked with the current size on every pass, so `get(i)` never goes past the end.",
    ],
    answer: 0,
    verify: { out: "[5, 0, 8, 3]" } },

  { id: "u4a-09", skill: "arraylist", type: "mcq", topic: "4.10",
    stem: "Consider the following code segment.",
    code: `ArrayList<String> spells = new ArrayList<String>();
spells.add("fire");
spells.add("ice");
spells.add("storm");
spells.add("mend");
ArrayList<String> result = new ArrayList<String>();
for (String s : spells)
{
    if (s.length() == 4)
    {
        result.add(0, s);
    }
    else
    {
        result.add(s.substring(0, 1));
    }
}
System.out.println(result);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["[mend, fire, i, s]", "[fire, i, s, mend]", "[mend, i, s]", "[fire, mend, i, s]"], mono: true,
    why: [
      "`\"fire\"` and `\"mend\"` have 4 letters, so each is inserted at index 0, in front of everything already in `result`. The other two add their first letter at the end.",
      "`add(0, s)` inserts at the front, not at the end.",
      "`add(0, s)` inserts and shifts the others right. It does not replace `\"fire\"`.",
      "Index 0 is the front of the list, so `\"mend\"` goes in front of `\"fire\"` too.",
    ],
    answer: 0,
    verify: { out: "[mend, fire, i, s]" } },

  { id: "u4a-10", skill: "files", type: "mcq", topic: "4.6",
    stem: "A rain sensor saved one reading per day, in millimeters, to the text file `rain.txt`, which contains the single line `4 0 9 0 6 2`. Consider the following code segment, which appears in a `main` method declared with `throws FileNotFoundException`.",
    code: `Scanner in = new Scanner(new File("rain.txt"));
ArrayList<Integer> days = new ArrayList<Integer>();
while (in.hasNext())
{
    days.add(in.nextInt());
}
in.close();
int dry = 0;
int total = 0;
for (int d : days)
{
    total += d;
    if (d == 0)
    {
        dry++;
    }
}
System.out.println(days.size() + " " + dry + " " + total / days.size());`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["6 2 3", "6 2 3.5", "4 2 5", "Nothing is printed. A NoSuchElementException is thrown."],
    why: [
      "All six numbers are read, the 0s included, so the size is 6 and two days are dry. `total` is 21, and `21 / 6` is `int` division, which gives 3.",
      "`total` and `days.size()` are both `int`, so the division drops the fraction.",
      "A 0 in the file is read and added like any other number. Nothing in the code skips it.",
      "`hasNext()` checks that another value is left before `nextInt()` reads it, so the loop stops at the end of the file.",
    ],
    answer: 0,
    verify: { files: { "rain.txt": "4 0 9 0 6 2\n" }, out: "6 2 3" } },

  { id: "u4a-11", skill: "twod", type: "mcq", topic: "4.11",
    stem: "Consider the following code segment.",
    code: `int[][] map = new int[3][5];
map[2][4] = 7;
int k = map[0].length - map.length;
System.out.println(k + " " + map[1][3] + " " + map[2][k + 2]);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["2 0 7", "-2 0 0", "2 null 7", "Nothing is printed. An ArrayIndexOutOfBoundsException is thrown."],
    why: [
      "`new int[3][5]` has 3 rows and 5 columns. `map.length` is the number of rows, 3, and `map[0].length` is the number of columns, 5. `map[2][k + 2]` is `map[2][4]`, which holds 7.",
      "This swaps rows and columns. `map.length` counts the rows, 3, and `map[0].length` counts the columns in row 0, 5.",
      "A new `int` array holds 0 in every element. Only arrays of objects start with `null`.",
      "Row indexes go from 0 to 2 and column indexes from 0 to 4, so `map[2][4]` is the last element, not past the end.",
    ],
    answer: 0,
    verify: { out: "2 0 7" } },

  { id: "u4a-12", skill: "twod", type: "mcq", topic: "4.12",
    stem: "Consider the following code segment.",
    code: `int[][] g = {
    {1, 2, 3},
    {4, 5, 6}
};
for (int c = 0; c < g[0].length; c++)
{
    for (int r = g.length - 1; r >= 0; r--)
    {
        System.out.print(g[r][c] + " ");
    }
}`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["4 1 5 2 6 3", "1 4 2 5 3 6", "4 5 6 1 2 3", "1 2 3 4 5 6"], mono: true,
    why: [
      "The outer loop is over columns, so this is column-major order: each column is finished before the next starts. Within a column, `r` counts down, so the bottom row comes first.",
      "This is column-major order with the rows going down. Here `r` starts at `g.length - 1` and counts down, so row 1 comes first.",
      "This is row-major order. The outer loop is over `c`, the columns, so a whole column prints before the next one.",
      "This is plain row-major order. The outer loop is over columns, and the rows go from the bottom up.",
    ],
    answer: 0,
    verify: { out: "4 1 5 2 6 3" } },

  { id: "u4a-13", skill: "twod", type: "mcq", topic: "4.12",
    stem: "The 2D array `gold` holds the gold in each room of a dungeon. Consider the following code segment.",
    code: `int[][] gold = {
    {3, 0, 8, 2},
    {5, 1, 0, 6},
    {0, 4, 7, 9}
};
int total = 0;
int empty = 0;
for (int[] row : gold)
{
    for (int v : row)
    {
        if (v == 0)
        {
            empty++;
        }
        else if (v > row[0])
        {
            total += v;
        }
    }
}
System.out.println(total + " " + empty);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["34 3", "39 3", "45 3", "Nothing is printed. The code segment does not compile."],
    why: [
      "`row` is each row in turn, so `row[0]` is the first value of the current row: 3, then 5, then 0. The values above it add 8, then 6, then 4 + 7 + 9, which is 34. Three values are 0.",
      "This compares every value with 3, the first value of the first row. `row[0]` changes with each row.",
      "This adds every value that is not 0. The `else if` adds only values larger than the first value in their row.",
      "In `for (int[] row : gold)`, each `row` is an `int[]`, so `row[0]` and `for (int v : row)` both compile.",
    ],
    answer: 0,
    verify: { out: "34 3" } },

  { id: "u4a-14", skill: "twod", type: "mcq", topic: "4.13",
    stem: "The following code segment is intended to print the sum of each column of `scores`, one column at a time.",
    code: A14("/* missing code */"),
    question: "Which of the following can replace `/* missing code */` so that the code segment works as intended?",
    choices: [
      "for (int r = 0; r < scores.length; r++) { sum += scores[r][c]; }",
      "for (int r = 0; r < scores[0].length; r++) { sum += scores[r][c]; }",
      "for (int r = 0; r < scores.length; r++) { sum += scores[c][r]; }",
      "for (int v : scores[c]) { sum += v; }",
    ], mono: true,
    why: [
      "A column sum keeps `c` fixed and moves `r` through every row. `scores.length` is the number of rows, 4.",
      "`scores[0].length` is the number of columns, 3, so the last row is never added. On a rectangle that is not square, this mistake shows.",
      "`scores[c][r]` swaps the indexes. With `r` going up to 3, `scores[0][3]` is past the end of a row and throws an `ArrayIndexOutOfBoundsException`.",
      "`scores[c]` is row `c`, so this adds up rows 0, 1, and 2, not columns.",
    ],
    answer: 0,
    verify: { cases: [
      { run: A14("for (int r = 0; r < scores.length; r++) { sum += scores[r][c]; }"), out: "19 17 15" },
      { run: A14("for (int r = 0; r < scores[0].length; r++) { sum += scores[r][c]; }"), out: "17 15 13" },
      { run: A14("for (int r = 0; r < scores.length; r++) { sum += scores[c][r]; }"), throws: "ArrayIndexOutOfBoundsException" },
      { run: A14("for (int v : scores[c]) { sum += v; }"), out: "18 13 14" },
    ] } },

  { id: "u4a-15", skill: "twod", type: "mcq", topic: "4.13",
    stem: "Consider the following code segment, which searches a map of dungeon tiles.",
    code: `String[][] tiles = {
    {"wall", "floor", "trap", "floor"},
    {"trap", "door", "floor", "trap"},
    {"floor", "trap", "wall", "door"}
};
int foundR = -1;
int foundC = -1;
for (int r = 0; r < tiles.length; r++)
{
    for (int c = 0; c < tiles[r].length; c++)
    {
        if (tiles[r][c].equals("trap"))
        {
            foundR = r;
            foundC = c;
        }
    }
}
System.out.println(foundR + " " + foundC);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["2 1", "0 2", "1 3", "-1 -1"], mono: true,
    why: [
      "Nothing stops the loops, so every trap replaces the one before. In row-major order the last trap visited is in row 2, column 1.",
      "That is the first trap found. The loops keep going, and each later trap replaces it.",
      "That is the last trap in column-major order. Here the outer loop is over rows, so row 2 is visited last.",
      "`equals` compares the letters of the Strings, so the test is true at every `\"trap\"`.",
    ],
    answer: 0,
    verify: { out: "2 1" } },

  { id: "u4a-16", skill: "search", type: "mcq", topic: "4.14",
    stem: "The following method is intended to return the index of the first element of `arr` equal to `target`, or -1 if there is none.",
    methods: A16,
    code: `int[] keys = {14, 3, 9, 3, 21};
System.out.println(find(keys, 14) + " " + find(keys, 3) + " " + find(keys, 8));`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["0 -1 -1", "0 1 -1", "0 3 -1", "-1 -1 -1"], mono: true,
    why: [
      "Both branches return, so the method only ever looks at `arr[0]`. It returns 0 for 14 and -1 for anything else. The `return -1` belongs after the loop, once every element has been checked.",
      "That is the intended result. The `else` returns -1 as soon as the first element does not match, so 3 is never reached.",
      "A search that returns as soon as it matches would give the first 3, not the last. Here it never gets past index 0.",
      "`arr[0]` is 14, so `find(keys, 14)` returns 0 on the first comparison.",
    ],
    answer: 0,
    verify: { out: "0 -1 -1" } },

  { id: "u4a-17", skill: "search", type: "mcq", topic: "4.17",
    stem: "The following method is a binary search, with a print statement added to show each element it examines.",
    methods: BIN_PRINT,
    code: `int[] ids = {4, 11, 15, 22, 30, 37, 41, 48, 53, 60, 66};
System.out.println(binarySearch(ids, 50));`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["37 53 41 48 -1", "37 53 48 -1", "37 41 48 53 -1", "37 53 41 48 7"], mono: true,
    why: [
      "`mid` is 5, then 8, then `(6 + 7) / 2`, which is 6 in `int` division, then 7. After 48, `lo` becomes 8 and `hi` is 7, so the loop ends and the method returns -1.",
      "This rounds `(6 + 7) / 2` up to 7. `int` division drops the fraction, so `mid` is 6 and 41 is examined first.",
      "Binary search does not step through the elements one at a time. After 37, it jumps to the middle of the right half, 53.",
      "50 is not in the array, so the method returns -1, not the index where the search stopped.",
    ],
    answer: 0,
    verify: { out: "37 53 41 48 -1" } },

  { id: "u4a-18", skill: "search", type: "mcq", topic: "4.17",
    stem: "Consider the following binary search method.",
    methods: BIN,
    code: `int[] tags = {8, 3, 12, 5, 20, 17, 1};
System.out.println(binarySearch(tags, 3) + " " + binarySearch(tags, 1) + " " + binarySearch(tags, 20));`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["1 -1 -1", "1 6 4", "-1 -1 -1", "1 -1 4"], mono: true,
    why: [
      "`tags` is not sorted, so the halves the search throws away can hold the target. For 3 it happens to find it. For 1 it goes left from 5 and for 20 it goes right from 5, and both miss.",
      "These are the real indexes, but binary search finds them only when the array is sorted. This array is not.",
      "The first search does find 3: 5 is larger, so it goes left, and the middle of the left part is index 1, which holds 3.",
      "20 is larger than 5, so the search goes right, to 17 and then 1. It never looks at index 4.",
    ],
    answer: 0,
    verify: { out: "1 -1 -1" } },

  { id: "u4a-19", skill: "search", type: "mcq", topic: "4.15",
    stem: "Consider the following selection sort method, which sorts `arr` from least to greatest.",
    methods: SEL,
    code: `int[] arr = {29, 14, 37, 8, 21, 11};
selectionSort(arr);`,
    question: "Which of the following shows the contents of `arr` at `// end of pass` the third time it is reached?",
    choices: ["{8, 11, 14, 29, 21, 37}", "{8, 14, 29, 37, 21, 11}", "{8, 11, 37, 29, 21, 14}", "{8, 11, 14, 21, 29, 37}"], mono: true,
    why: [
      "Each pass finds the smallest value left and swaps it into place: 8 swaps with 29, then 11 with 14, then 14 with 37. The first three elements are now the three smallest.",
      "That is insertion sort after three passes, which keeps the first elements in order without finding the smallest values.",
      "That is the array after two passes. The third pass swaps 14 into index 2.",
      "That is the fully sorted array, which takes five passes.",
    ],
    answer: 0,
    verify: { cases: [
      { methods: selAt(3), run: "int[] arr = {29, 14, 37, 8, 21, 11};\nselectionSort(arr);", out: "8 11 14 29 21 37" },
      { methods: selAt(2), run: "int[] arr = {29, 14, 37, 8, 21, 11};\nselectionSort(arr);", out: "8 11 37 29 21 14" },
      { methods: insAt(3), run: "int[] arr = {29, 14, 37, 8, 21, 11};\ninsertionSort(arr);", out: "8 14 29 37 21 11" },
    ] } },

  { id: "u4a-20", skill: "search", type: "mcq", topic: "4.15",
    stem: "Consider the following insertion sort method, which sorts `arr` from least to greatest.",
    methods: INS,
    code: `int[] arr = {52, 17, 40, 33, 9, 25};
insertionSort(arr);`,
    question: "Which of the following shows the contents of `arr` at `// end of pass` the third time it is reached?",
    choices: ["{17, 33, 40, 52, 9, 25}", "{9, 17, 25, 33, 52, 40}", "{17, 40, 52, 33, 9, 25}", "{9, 17, 33, 40, 52, 25}"], mono: true,
    why: [
      "Each pass takes the next element and slides it left into the sorted part: 17, then 40, then 33. After three passes the first four elements are in order, and 9 and 25 have not moved yet.",
      "That is selection sort after three passes, which swaps the smallest values to the front.",
      "That is the array after two passes. The third pass slides 33 in between 17 and 40.",
      "That is the array after four passes, once 9 has slid to the front.",
    ],
    answer: 0,
    verify: { cases: [
      { methods: insAt(3), run: "int[] arr = {52, 17, 40, 33, 9, 25};\ninsertionSort(arr);", out: "17 33 40 52 9 25" },
      { methods: insAt(2), run: "int[] arr = {52, 17, 40, 33, 9, 25};\ninsertionSort(arr);", out: "17 40 52 33 9 25" },
      { methods: insAt(4), run: "int[] arr = {52, 17, 40, 33, 9, 25};\ninsertionSort(arr);", out: "9 17 33 40 52 25" },
      { methods: selAt(3), run: "int[] arr = {52, 17, 40, 33, 9, 25};\nselectionSort(arr);", out: "9 17 25 33 52 40" },
    ] } },

  { id: "u4a-21", skill: "recursion", type: "mcq", topic: "4.16",
    stem: "Consider the following method.",
    methods: A21,
    code: `System.out.println(mystery(374));`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["30", "14", "33", "Nothing is printed. The method keeps calling itself until a StackOverflowError is thrown."],
    why: [
      "`mystery(3)` is the base case and returns 3. Then `mystery(37)` is `3 * 2 + 7`, which is 13, and `mystery(374)` is `13 * 2 + 4`, which is 30.",
      "That is the sum of the digits. Each call doubles the value returned by the call below it before adding its digit.",
      "This doubles the rightmost digit the most. The deepest call returns the leftmost digit, 3, and each call above it doubles what it gets back, so 3 is the digit doubled twice.",
      "`n / 10` makes `n` smaller on every call, so `n < 10` is reached after two calls.",
    ],
    answer: 0,
    verify: { out: "30" } },

  { id: "u4a-22", skill: "recursion", type: "mcq", topic: "4.17",
    stem: "Merge sort is used to sort the array `{41, 12, 66, 7, 30, 18, 52}` from least to greatest. " + MERGE_STEM,
    question: "Which of the following shows the two arrays merged in the last step?",
    choices: ["[12, 41, 66] and [7, 18, 30, 52]", "[7, 12, 41, 66] and [18, 30, 52]", "[41, 12, 66] and [7, 30, 18, 52]", "[7, 12, 18, 30] and [41, 52, 66]"], mono: true,
    why: [
      "`7 / 2` is 3, so the left part is the first three elements, 41, 12, and 66, and the right part is the other four. Each part is sorted before the last merge.",
      "This puts four elements on the left. `length / 2` uses `int` division, so the left part gets 3 of the 7.",
      "These are the two parts before they are sorted. Merge sort sorts each part before it merges them.",
      "The parts are split by position, not by value. The last merge joins the sorted first three and the sorted last four.",
    ],
    answer: 0,
    verify: { cases: [
      { methods: MERGE, run: "int[] data = {41, 12, 66, 7, 30, 18, 52};\nSystem.out.println(Arrays.toString(mergeSort(data)));", out: "[12] [66]\n[41] [12, 66]\n[7] [30]\n[18] [52]\n[7, 30] [18, 52]\n[12, 41, 66] [7, 18, 30, 52]\n[7, 12, 18, 30, 41, 52, 66]" },
    ] } },

  { id: "u4a-frq1", skill: "frq", type: "code", topic: "4.10", title: "The greenhouse",
    prompt: "This question involves the `Plant` and `Greenhouse` classes, shown below. A `Plant` object stores a plant's name, its height in centimeters, and whether it is flowering. A `Greenhouse` object keeps its plants in the `ArrayList<Plant>` named `plants`.\n\nA plant is **ready to sell** when it is flowering and its height is at least `minHeight`. Write the `Greenhouse` method `removeReady`. It removes every plant that is ready to sell from `plants` and returns an `ArrayList<String>` holding the names of the removed plants, in the order those plants appeared in `plants`. The plants that are not ready stay in `plants`, in their original order. If no plant is ready, the method returns an empty list and `plants` does not change.\n\nFor example, suppose `plants` holds these six plants, in this order:\n\n- `\"fern\"`, 40 cm, not flowering\n- `\"rose\"`, 55 cm, flowering\n- `\"tulip\"`, 30 cm, flowering\n- `\"lily\"`, 62 cm, flowering\n- `\"iris\"`, 48 cm, flowering\n- `\"moss\"`, 5 cm, not flowering\n\nThe call `removeReady(45)` returns `[rose, lily, iris]`, and afterward `plants` holds the fern, the tulip, and the moss, in that order. The tulip is flowering but is only 30 cm tall, so it is not ready. With the same six plants, `removeReady(55)` returns `[rose, lily]`, because the rose is exactly 55 cm tall.\n\nComplete the method `removeReady`. " + QR_AL,
    given: `public class Plant
{
    /** Returns the name of the plant */
    public String getName()
    { /* implementation not shown */ }

    /** Returns the height of the plant, in centimeters */
    public int getHeight()
    { /* implementation not shown */ }

    /** Returns true if the plant is flowering, and false otherwise */
    public boolean isFlowering()
    { /* implementation not shown */ }

    /* There may be instance variables, constructors, and methods that are not shown. */
}

public class Greenhouse
{
    /** The plants in the greenhouse. No element of plants is null. */
    private ArrayList<Plant> plants;

    /** Removes from plants every plant that is flowering and at least
     *  minHeight centimeters tall, and returns the names of the removed
     *  plants, in the order the plants appeared in plants.
     *  Postcondition: plants holds the plants not removed, in their original order.
     */
    public ArrayList<String> removeReady(int minHeight)
    { /* to be implemented */ }

    /* There may be instance variables, constructors, and methods that are not shown. */
}`,
    sample: "plants: fern 40 no, rose 55 yes, tulip 30 yes, lily 62 yes, iris 48 yes, moss 5 no\n\nremoveReady(45) returns [rose, lily, iris]\nplants then holds fern, tulip, moss\n\nremoveReady(55) returns [rose, lily]\nplants then holds fern, tulip, iris, moss\n\nremoveReady(100) returns []\nplants does not change",
    rows: [
      { name: "Accesses every plant", earns: "Accesses every element of `plants` with `get`, with no bounds errors (no `[ ]` on the list, and no index equal to `plants.size()`)." },
      { name: "Calls the Plant methods", earns: "Calls `isFlowering` and `getHeight` on an element of `plants`." },
      { name: "Checks both conditions", earns: "Decides a plant is ready exactly when it is flowering and its height is at least `minHeight`: `&&`, and `>=`, not `>`." },
      { name: "Removes the ready plants (algorithm)", earns: "Removes every ready plant from `plants` and no other plant, without skipping the element that moves into a removed plant's place: traverses backward, or does not move `i` forward after a removal (two ready plants in a row, such as the lily and the iris, are both removed)." },
      { name: "Returns the names in order (algorithm)", earns: "Creates a new `ArrayList<String>`, adds `getName()` of each removed plant so the names end up in the order the plants appeared (`add(0, ...)` when traversing backward), and returns that list, which is empty when no plant is ready." },
    ],
    notes: NOTE + " Row 1 is earned by a correct loop over the list even if the rest of the method is wrong. A forward loop with `i++` after every pass and no other change skips the plant after each removal (`removeReady(45)` returns `[rose, lily]` and leaves the iris), so it does not earn row 4. A backward loop that adds names with `add(name)` returns them in reverse order and does not earn row 5. An enhanced `for` that removes from `plants` can throw a `ConcurrentModificationException`, so it does not earn row 4.",
    solution: AF1,
    verify: { classes: PLANT, cases: [
      gh(PLANTS_EX, 45, "[rose, lily, iris]\nfern tulip moss"),
      gh(PLANTS_EX, 55, "[rose, lily]\nfern tulip iris moss"),
      gh(PLANTS_EX, 100, "[]\nfern rose tulip lily iris moss"),
      gh(PLANTS_EX, 0, "[rose, tulip, lily, iris]\nfern moss"),
      gh([["sage", 20, true], ["mint", 25, true], ["basil", 30, true]], 10, "[sage, mint, basil]"),
      gh([["aloe", 12, false]], 1, "[]\naloe"),
      gh(PLANTS_EX, 45, "[rose, lily, iris]\nfern tulip moss", AF1_FWD),
      gh(PLANTS_EX, 0, "[rose, tulip, lily, iris]\nfern moss", AF1_FWD),
      gh(PLANTS_EX, 45, "[rose, lily]\nfern tulip iris moss", AF1_SKIP),
    ] } },

  { id: "u4a-frq2", skill: "frq", type: "code", topic: "4.13", title: "The farm",
    prompt: "This question involves the `Plot` and `Farm` classes, shown below. A `Plot` object stores the crop growing in one plot of land and the plot's yield, in bushels. A `Farm` object keeps its field as the 2D array `field` of `Plot` objects. When an element of `field` is accessed, the first index is the row and the second index is the column.\n\nWrite the `Farm` method `bestRow`. It returns the index of the row of `field` whose plots growing `crop` have the greatest total yield. Only the plots growing `crop` count toward a row's total. If two or more rows tie for the greatest total, the method returns the smallest of their indexes.\n\nFor example, suppose `field` holds the following plots. Each element shows the plot's crop and its yield.\n\n```\n         column 0   column 1   column 2   column 3\nrow 0    corn 5     beans 3    corn 2     wheat 9\nrow 1    beans 4    corn 6     wheat 12   beans 2\nrow 2    corn 3     corn 4     beans 8    wheat 7\n```\n\n- `bestRow(\"beans\")` returns 2. The bean totals of the rows are 3, 6, and 8.\n- `bestRow(\"wheat\")` returns 1. The wheat totals are 9, 12, and 7.\n- `bestRow(\"corn\")` returns 0. The corn totals are 7, 6, and 7. Rows 0 and 2 tie, and 0 is the smaller index.\n\nComplete the method `bestRow`. Use only the methods shown and `String` methods from the Java Quick Reference.",
    given: `public class Plot
{
    /** Returns the crop growing in the plot, such as "corn" */
    public String getCrop()
    { /* implementation not shown */ }

    /** Returns the yield of the plot, in bushels; the yield is at least 0 */
    public int getYield()
    { /* implementation not shown */ }

    /* There may be instance variables, constructors, and methods that are not shown. */
}

public class Farm
{
    /** The plots of the field. field has at least one row and at least
     *  one column, and no element of field is null.
     */
    private Plot[][] field;

    /** Returns the index of the row of field with the greatest total yield
     *  from plots growing crop. If two or more rows tie, returns the
     *  smallest of their indexes.
     */
    public int bestRow(String crop)
    { /* to be implemented */ }

    /* There may be instance variables, constructors, and methods that are not shown. */
}`,
    sample: "For the field shown:\nbestRow(\"beans\") returns 2\nbestRow(\"wheat\") returns 1\nbestRow(\"corn\") returns 0",
    rows: [
      { name: "Accesses every plot", earns: "Accesses every element of `field` with nested loops and no bounds errors: rows up to `field.length`, columns up to `field[r].length` or `field[0].length`." },
      { name: "Calls the Plot methods", earns: "Calls `getCrop` and `getYield` on an element of `field`." },
      { name: "Compares the crop", earns: "Compares a plot's crop with `crop` using `equals`, not `==`." },
      { name: "Totals each row (algorithm)", earns: "Adds up the yields of only the plots growing `crop` in a row, with the total starting at 0 again for each row." },
      { name: "Compares row totals", earns: "Compares a row's total with the greatest total from earlier rows, kept in a variable, and replaces it only when the new total is strictly greater (`>`, not `>=`)." },
      { name: "Returns the best row (algorithm)", earns: "Returns the index of the row with the greatest total, not the total itself, with the best index and best total given starting values before the loop (row 0's total, or a total below 0)." },
    ],
    notes: NOTE + " Row 4 is not earned when the total is declared before the outer loop and never set back to 0, because each row's total then adds onto the last one (`bestRow(\"corn\")` returns 2). Row 5 is not earned with `>=`, because a tie then keeps the later row (`bestRow(\"corn\")` returns 2). Row 6 is not earned when the method returns the total, or when the loops total the columns instead of the rows. A response that swaps `field.length` and `field[0].length` does not earn row 1.",
    solution: AF2,
    verify: { classes: PLOT, cases: [
      fm(FIELD_EX, ["beans", "wheat", "corn", "rice"], "2\n1\n0\n0"),
      fm([["corn 4"]], ["corn", "beans"], "0\n0"),
      fm([["beans 1", "beans 1", "beans 1", "beans 1", "beans 1"], ["beans 2", "corn 9", "beans 2", "beans 0", "corn 1"]], ["beans", "corn"], "0\n1"),
      fm([["corn 0", "corn 0"], ["corn 0", "corn 1"], ["corn 1", "beans 5"]], ["corn", "beans"], "1\n2"),
      fm(FIELD_EX, ["corn"], "2", AF2.replace("total > bestTotal", "total >= bestTotal")),
      fm(FIELD_EX, ["corn"], "2", AF2.replace("    int bestTotal = -1;", "    int bestTotal = -1;\n    int total = 0;").replace("        int total = 0;\n", "")),
    ] } },
];

// =====================================================================
// Practice B
// =====================================================================

const u4b = [
  { id: "u4b-01", skill: "arrays", type: "mcq", topic: "4.3",
    stem: "Consider the following code segment.",
    code: `String[] names = new String[3];
int[] levels = new int[names.length + 1];
levels[2] = 6;
names[0] = "Ash";
System.out.println(names[0] + " " + names[1] + " " + levels[1] + " " + levels.length);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["Ash null 0 4", "Ash null 0 3", "Ash null 6 4", "Nothing is printed. A NullPointerException is thrown."],
    why: [
      "A new array of `String` objects holds `null` in every element, and a new `int` array holds 0. `levels` has length `3 + 1`, which is 4. `levels[2]` is the third element, so `levels[1]` is still 0.",
      "`levels` is created with length `names.length + 1`, which is 4.",
      "`levels[2] = 6` sets the third element. `levels[1]` is the second element, which is still 0.",
      "Joining `null` onto a String prints `null`. Only calling a method on `null` throws a `NullPointerException`.",
    ],
    answer: 0,
    verify: { out: "Ash null 0 4" } },

  { id: "u4b-02", skill: "arrays", type: "mcq", topic: "4.4",
    stem: "Consider the following code segment.",
    code: `double[] costs = {2.0, 4.5, 1.5, 3.0};
for (double c : costs)
{
    c = c * 2;
}
for (int i = 1; i < costs.length; i++)
{
    costs[i] = costs[i] + costs[i - 1];
}
System.out.println(costs[3]);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["11.0", "22.0", "11", "4.5"], mono: true,
    why: [
      "In the enhanced `for`, `c` is a copy, so doubling it leaves `costs` unchanged. The indexed loop adds each element to the new value just before it, a running total: 6.5, then 8.0, then 11.0.",
      "This assumes the enhanced `for` doubled every element. `c` is a copy, so the array does not change.",
      "`costs` is a `double` array, so its elements print with a decimal point.",
      "This adds the original 1.5 and 3.0. By the time `i` is 3, `costs[2]` has already been changed to 8.0.",
    ],
    answer: 0,
    verify: { out: "11.0" } },

  { id: "u4b-03", skill: "arrays", type: "mcq", topic: "4.4",
    stem: "Consider the following code segment, which counts the steps where a value goes up.",
    code: `int[] steps = {3, 8, 8, 2, 9};
int rises = 0;
for (int i = 0; i < steps.length; i++)
{
    if (steps[i] < steps[i + 1])
    {
        rises++;
    }
}
System.out.println(rises);`,
    question: "What is the result of executing the code segment?",
    choices: ["Nothing is printed. An ArrayIndexOutOfBoundsException is thrown.", "2", "3", "Nothing is printed. The code segment does not compile."],
    why: [
      "When `i` is 4, the last index, `steps[i + 1]` is `steps[5]`, past the end of the array. The exception is thrown before `rises` is printed. The loop needs `i < steps.length - 1`.",
      "2 would be printed if the loop stopped at `i < steps.length - 1`. When `i` is 4, `steps[i + 1]` is past the end.",
      "8 is not less than 8, so that step is not a rise. And the loop crashes before anything is printed.",
      "Java does not check array indexes when it compiles. The code compiles, and the bad index fails only when the code runs.",
    ],
    answer: 0,
    verify: { throws: "ArrayIndexOutOfBoundsException" } },

  { id: "u4b-04", skill: "arrays", type: "mcq", topic: "4.5",
    stem: "The following code segment is intended to print the largest value in `vals`, an `int` array with at least one element.",
    code: B04,
    question: "For which of the following arrays does the code segment NOT print the largest value in `vals`?",
    choices: ["{-6, -2, -9}", "{0, -3, -8}", "{5, -1, 7}", "{-4, 3, -2}"], mono: true,
    why: [
      "`big` starts at 0, and every value is below 0, so `v > big` is never true and 0 is printed. The largest value is -2. Starting `big` at `vals[0]` would fix it.",
      "The largest value is 0, and the code prints 0, so it works here, even though it never changes `big`.",
      "At least one value is above 0, so `big` is replaced, and 7 is printed.",
      "3 is above 0, so `big` becomes 3, which is the largest value. Negative values do no harm when a positive value is present.",
    ],
    answer: 0,
    verify: { cases: [
      { run: "int[] vals = {-6, -2, -9};\n" + B04, out: "0" },
      { run: "int[] vals = {0, -3, -8};\n" + B04, out: "0" },
      { run: "int[] vals = {5, -1, 7};\n" + B04, out: "7" },
      { run: "int[] vals = {-4, 3, -2};\n" + B04, out: "3" },
    ] } },

  { id: "u4b-05", skill: "arrays", type: "mcq", topic: "4.5",
    stem: "The following code segment is intended to shift every element of `q` one place to the left and move the first element to the end.",
    code: `int[] q = {3, 6, 9, 12, 15};
int first = q[0];
for (int i = q.length - 1; i > 0; i--)
{
    q[i - 1] = q[i];
}
q[q.length - 1] = first;
for (int v : q)
{
    System.out.print(v + " ");
}`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["15 15 15 15 3", "6 9 12 15 3", "15 3 6 9 12", "15 15 15 15 15"], mono: true,
    why: [
      "The loop starts at the right end, so 15 is copied into index 3, then that 15 into index 2, and so on down to index 0. Then the saved 3 goes at the end. A left shift must go from left to right.",
      "That is the intended result, which needs the loop to go from left to right. Going from the right copies 15 over every value before it is moved.",
      "That is a shift to the right. Each line copies `q[i]` into the place to its left.",
      "The last assignment runs after the loop and puts `first`, which was saved as 3, at the end.",
    ],
    answer: 0,
    verify: { out: "15 15 15 15 3" } },

  { id: "u4b-06", skill: "arraylist", type: "mcq", topic: "4.8",
    stem: "Consider the following code segment.",
    code: `ArrayList<Integer> nums = new ArrayList<Integer>();
nums.add(30);
nums.add(10);
nums.add(1, 20);
nums.add(0, 5);
int a = nums.remove(1);
int b = nums.set(2, a + 1);
System.out.println(a + " " + b + " " + nums);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["30 10 [5, 20, 31]", "30 31 [5, 20, 31]", "30 20 [5, 10, 31]", "5 10 [30, 20, 6]"],
    why: [
      "The inserts give `[5, 30, 20, 10]`. `remove(1)` removes and returns the element at index 1, 30. `set(2, 31)` returns the element it replaces, 10.",
      "`set` returns the OLD element at that index, 10, not the new value.",
      "`add(1, 20)` inserts at index 1, between 30 and 10. It does not add at the end.",
      "Indexes start at 0, so index 1 is the second element, 30. `remove(1)` with an `int` removes by index.",
    ],
    answer: 0,
    verify: { out: "30 10 [5, 20, 31]" } },

  { id: "u4b-07", skill: "arraylist", type: "mcq", topic: "4.7",
    stem: "Consider the following statement. `ArrayList<Double> temps = new ArrayList<Double>();`",
    question: "Which of the following statements, placed after it, does NOT compile?",
    choices: ["ArrayList<double> copy = temps;", "temps.add(71.5);", "temps.add(0, 68.0);", "double first = temps.get(0);"], mono: true,
    why: [
      "The type in the angle brackets must be a class, such as `Double`. `double` is a primitive type, so this fails with `unexpected type`.",
      "71.5 is a `double`, and Java boxes it into a `Double` object when it is added. This compiles.",
      "This inserts a `double` at index 0, boxed into a `Double`. This compiles.",
      "`get` returns a `Double`, and Java unboxes it into a `double`. This compiles.",
    ],
    answer: 0,
    verify: { cases: [
      { run: "ArrayList<Double> temps = new ArrayList<Double>();\nArrayList<double> copy = temps;", error: "unexpected type" },
      { run: "ArrayList<Double> temps = new ArrayList<Double>();\ntemps.add(71.5);\nSystem.out.println(temps);", out: "[71.5]" },
      { run: "ArrayList<Double> temps = new ArrayList<Double>();\ntemps.add(0, 68.0);\nSystem.out.println(temps);", out: "[68.0]" },
      { run: "ArrayList<Double> temps = new ArrayList<Double>();\ntemps.add(71.5);\ndouble first = temps.get(0);\nSystem.out.println(first);", out: "71.5" },
    ] } },

  { id: "u4b-08", skill: "arraylist", type: "mcq", topic: "4.9",
    stem: "The following code segment is intended to remove every String with fewer than 4 letters from `names`, an `ArrayList<String>`. It does not always work as intended.",
    code: B08("for (int i = 0; i < names.size(); i++)", "names.remove(i);"),
    question: "Which of the following changes makes the code segment work as intended for every list?",
    choices: [
      "Changing the loop header to `for (int i = names.size() - 1; i >= 0; i--)`",
      "Changing `names.remove(i);` to `names.remove(i + 1);`",
      "Changing the loop condition to `i <= names.size()`",
      "Changing `names.remove(i);` to `names.set(i, \"\");`",
    ],
    why: [
      "Going backward, a removal shifts only elements that were already checked, so no element is skipped. With `[Bo, Al, Kim, Rosa, Tess, Li]` it leaves `[Rosa, Tess]`.",
      "This removes the element after the short one, which may be a long name, and when `i` is the last index it throws an `IndexOutOfBoundsException`.",
      "The last index is `names.size() - 1`, so a list whose last name is not removed reaches `get(names.size())` and throws an `IndexOutOfBoundsException`. It also still skips the element after each removal, so `Al` survives.",
      "`set` replaces the name with an empty String. It does not remove anything, so the list keeps its size.",
    ],
    answer: 0,
    verify: { cases: [
      { run: B08_FILL + B08("for (int i = names.size() - 1; i >= 0; i--)", "names.remove(i);") + "\nSystem.out.println(names);", out: "[Rosa, Tess]" },
      { run: B08_FILL + B08("for (int i = 0; i < names.size(); i++)", "names.remove(i);") + "\nSystem.out.println(names);", out: "[Al, Rosa, Tess]" },
      { run: B08_FILL + B08("for (int i = 0; i < names.size(); i++)", "names.remove(i + 1);") + "\nSystem.out.println(names);", throws: "IndexOutOfBoundsException" },
      { run: B08_FILL + B08("for (int i = 0; i <= names.size(); i++)", "names.remove(i);") + "\nSystem.out.println(names);", out: "[Al, Rosa, Tess]" },
      { run: "ArrayList<String> names = new ArrayList<String>();\nnames.add(\"Rosa\");\n" + B08("for (int i = 0; i <= names.size(); i++)", "names.remove(i);") + "\nSystem.out.println(names);", throws: "IndexOutOfBoundsException" },
      { run: B08_FILL + B08("for (int i = 0; i < names.size(); i++)", "names.set(i, \"\");") + "\nSystem.out.println(names.size());", out: "6" },
    ] } },

  { id: "u4b-09", skill: "arraylist", type: "mcq", topic: "4.10",
    stem: "The list `laps` holds a runner's lap times, in seconds. Consider the following code segment.",
    code: `ArrayList<Integer> laps = new ArrayList<Integer>();
laps.add(62);
laps.add(58);
laps.add(65);
laps.add(55);
laps.add(60);
int best = 0;
for (int i = 1; i < laps.size(); i++)
{
    if (laps.get(i) < laps.get(best))
    {
        best = i;
    }
}
laps.add(0, laps.remove(best));
System.out.println(best + " " + laps);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["3 [55, 62, 58, 65, 60]", "55 [55, 62, 58, 65, 60]", "3 [55, 62, 58, 55, 65, 60]", "3 [62, 58, 65, 60, 55]"], mono: true,
    why: [
      "`best` holds the index of the smallest time, 3. `remove(3)` takes 55 out of the list and returns it, and `add(0, ...)` puts it at the front.",
      "`best` is an index, compared through `laps.get(best)`. It holds 3, the index of 55, not the time itself.",
      "`remove` takes the element out of the list, so 55 is moved, not copied.",
      "`add(0, ...)` inserts at the front, not at the end.",
    ],
    answer: 0,
    verify: { out: "3 [55, 62, 58, 65, 60]" } },

  { id: "u4b-10", skill: "files", type: "mcq", topic: "4.6",
    stem: "The text file `scores.txt` holds a name and a score on each line. Its four lines are `Ana 7`, `Ben 12`, `Cy 9`, and `Dee 12`. Consider the following code segment, which appears in a `main` method declared with `throws FileNotFoundException`.",
    code: `Scanner in = new Scanner(new File("scores.txt"));
ArrayList<String> top = new ArrayList<String>();
int best = 0;
while (in.hasNext())
{
    String name = in.next();
    int pts = in.nextInt();
    if (pts > best)
    {
        best = pts;
        top = new ArrayList<String>();
        top.add(name);
    }
    else if (pts == best)
    {
        top.add(name);
    }
}
in.close();
System.out.println(best + " " + top);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["12 [Ben, Dee]", "12 [Dee]", "12 [Ana, Ben, Dee]", "Nothing is printed. An InputMismatchException is thrown."],
    why: [
      "Each pass reads a name with `next()` and then its score with `nextInt()`. A new best score starts a new list with that name, and a tie adds the name to the list. Ben sets 12, and Dee ties it.",
      "A tie goes to the `else if`, which adds Dee to the list that already holds Ben.",
      "When Ben's 12 beats Ana's 7, `top` is set to a new, empty list, so Ana is no longer in it.",
      "`next()` reads the name and `nextInt()` reads the number after it, in the order they appear in the file, so `nextInt()` always reads a number.",
    ],
    answer: 0,
    verify: { files: { "scores.txt": "Ana 7\nBen 12\nCy 9\nDee 12\n" }, out: "12 [Ben, Dee]" } },

  { id: "u4b-11", skill: "twod", type: "mcq", topic: "4.11",
    stem: "Consider the following code segment, which records the seats in a small theater.",
    code: `String[][] seats = new String[4][2];
seats[3][1] = "Lu";
seats[0][0] = "Max";
System.out.println(seats.length + " " + seats[0].length + " " + seats[3][1] + " " + seats[1][1]);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["4 2 Lu null", "2 4 Lu null", "Nothing is printed. An ArrayIndexOutOfBoundsException is thrown.", "Nothing is printed. A NullPointerException is thrown."],
    why: [
      "`new String[4][2]` has 4 rows and 2 columns. `seats.length` is the number of rows and `seats[0].length` the number of columns. `seats[1][1]` was never set, so it holds `null`.",
      "This swaps rows and columns. The first size in `new String[4][2]` is the number of rows, and `seats.length` counts rows.",
      "With 4 rows and 2 columns, the row indexes are 0 to 3 and the column indexes 0 and 1, so `seats[3][1]` exists.",
      "Joining `null` onto a String prints `null`. Only calling a method on `null` throws a `NullPointerException`.",
    ],
    answer: 0,
    verify: { out: "4 2 Lu null" } },

  { id: "u4b-12", skill: "twod", type: "mcq", topic: "4.12",
    stem: "Consider the following code segment.",
    code: `int[][] g = {
    {1, 2, 3, 4},
    {5, 6, 7, 8},
    {9, 10, 11, 12}
};
for (int c = 0; c < g[0].length; c += 2)
{
    for (int r = 0; r < g.length; r++)
    {
        System.out.print(g[r][c] + " ");
    }
}`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["1 5 9 3 7 11", "1 3 5 7 9 11", "2 6 10 4 8 12", "1 2 3 4 9 10 11 12"], mono: true,
    why: [
      "The outer loop is over columns, so each column prints top to bottom before the next. `c += 2` visits columns 0 and 2 only.",
      "This reads the array row by row. The outer loop is over `c`, so a whole column prints first.",
      "`c` starts at 0, so the columns visited are 0 and 2, not 1 and 3.",
      "This skips every other row. The `+= 2` is on `c`, the column index, and every row is visited.",
    ],
    answer: 0,
    verify: { out: "1 5 9 3 7 11" } },

  { id: "u4b-13", skill: "twod", type: "mcq", topic: "4.12",
    stem: "Consider the following code segment.",
    code: `int[][] marks = {
    {4, 9, 2},
    {7, 7, 8},
    {1, 3, 6},
    {9, 0, 5},
    {2, 5, 9}
};
int count = 0;
int sum = 0;
for (int[] row : marks)
{
    boolean rising = true;
    for (int i = 1; i < row.length; i++)
    {
        if (row[i] <= row[i - 1])
        {
            rising = false;
        }
    }
    if (rising)
    {
        count++;
        sum += row[row.length - 1];
    }
}
System.out.println(count + " " + sum);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["2 15", "3 23", "0 0", "Nothing is printed. The code segment does not compile."],
    why: [
      "A row counts only when each value is larger than the one before it. `{1, 3, 6}` and `{2, 5, 9}` are the only such rows, and their last values add to 15.",
      "This counts `{7, 7, 8}`. The test is `<=`, so two equal values in a row make `rising` false.",
      "`rising` is declared inside the outer loop, so it starts at `true` again for every row.",
      "Each `row` is an `int[]`, so `row.length` and `row[i]` both compile.",
    ],
    answer: 0,
    verify: { out: "2 15" } },

  { id: "u4b-14", skill: "twod", type: "mcq", topic: "4.13",
    stem: "The following code segment is intended to print the largest value in each row of `t`, one row at a time.",
    code: B14("/* missing code */"),
    question: "Which of the following can replace `/* missing code */` so that the code segment works as intended?",
    choices: [
      "int most = t[r][0]; for (int c = 1; c < t[r].length; c++) { if (t[r][c] > most) { most = t[r][c]; } }",
      "int most = 0; for (int c = 1; c < t[r].length; c++) { if (t[r][c] > most) { most = t[r][c]; } }",
      "int most = t[r][0]; for (int c = 1; c < t.length; c++) { if (t[r][c] > most) { most = t[r][c]; } }",
      "int most = t[r][0]; for (int c = 1; c < t[r].length; c++) { if (t[r][c] > t[r][c - 1]) { most = t[r][c]; } }",
    ], mono: true,
    why: [
      "`most` starts at the first value of row `r`, and the loop moves `c` across the rest of that row, keeping any larger value. It prints 30 25 31 16.",
      "Starting at 0 and skipping index 0 loses the first value of a row. In row 1, 25 is never looked at, and 14 is printed.",
      "`t.length` is the number of rows, 4, but each row has 3 columns. `t[0][3]` throws an `ArrayIndexOutOfBoundsException`.",
      "This compares each value with its neighbor, not with the largest so far. In row 1, 14 is larger than 9, so 14 replaces 25.",
    ],
    answer: 0,
    verify: { cases: [
      { run: B14("int most = t[r][0]; for (int c = 1; c < t[r].length; c++) { if (t[r][c] > most) { most = t[r][c]; } }"), out: "30 25 31 16" },
      { run: B14("int most = 0; for (int c = 1; c < t[r].length; c++) { if (t[r][c] > most) { most = t[r][c]; } }"), out: "30 14 31 16" },
      { run: B14("int most = t[r][0]; for (int c = 1; c < t.length; c++) { if (t[r][c] > most) { most = t[r][c]; } }"), throws: "ArrayIndexOutOfBoundsException" },
      { run: B14("int most = t[r][0]; for (int c = 1; c < t[r].length; c++) { if (t[r][c] > t[r][c - 1]) { most = t[r][c]; } }"), out: "30 14 31 16" },
    ] } },

  { id: "u4b-15", skill: "twod", type: "mcq", topic: "4.13",
    stem: "The 2D array `depth` holds the water depth, in feet, at points in a lake. Consider the following code segment.",
    code: `int[][] depth = {
    {3, 5, 2, 8},
    {6, 1, 9, 4},
    {7, 9, 0, 2}
};
int row = -1;
int col = -1;
for (int c = 0; c < depth[0].length && row == -1; c++)
{
    for (int r = 0; r < depth.length && row == -1; r++)
    {
        if (depth[r][c] > 6)
        {
            row = r;
            col = c;
        }
    }
}
System.out.println(row + " " + col);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["2 0", "0 3", "1 0", "-1 -1"], mono: true,
    why: [
      "The outer loop is over columns, so column 0 is checked top to bottom first: 3, 6, then 7. 7 is more than 6, and `row == -1` is now false, so both loops stop.",
      "That is the first match in row-major order. Here the outer loop is over columns, so column 0 is checked first.",
      "6 is not more than 6, so the search goes on to the 7 below it.",
      "`row == -1` stops the loops only after a match sets `row`. Before that, the search goes on, and 7 is found.",
    ],
    answer: 0,
    verify: { out: "2 0" } },

  { id: "u4b-16", skill: "search", type: "mcq", topic: "4.14",
    stem: "Consider the following method.",
    methods: B16,
    question: "Which of the following best describes the value returned by `find`?",
    choices: [
      "The index of the last element equal to `target`, or -1 if no element is equal to `target`",
      "The index of the first element equal to `target`, or -1 if no element is equal to `target`",
      "The number of elements in `list` that are equal to `target`",
      "Always -1, because `index` is set to -1 before the loop and never returned from inside it",
    ],
    why: [
      "The loop never stops early, so each match replaces `index`, and the last match is what is left. With no match, `index` keeps its starting value, -1.",
      "Returning the first match needs the loop to stop, for example `return i;` inside the `if`. Here later matches overwrite it.",
      "`index = i` stores a position, not a count. A count would add 1 for each match.",
      "`index` is changed inside the loop, and the method returns its value after the loop, so a match is returned.",
    ],
    answer: 0,
    verify: { cases: [
      { run: "String[] gear = {\"axe\", \"bow\", \"mace\", \"bow\"};\nSystem.out.println(find(gear, \"bow\") + \" \" + find(gear, \"rope\") + \" \" + find(gear, \"axe\"));", methods: B16, out: "3 -1 0" },
    ] } },

  { id: "u4b-17", skill: "search", type: "mcq", topic: "4.17",
    stem: "Consider the following binary search method.",
    methods: BIN,
    code: `int[] arr = {3, 9, 14, 20, 26, 31, 39, 45, 52, 58};
int result = binarySearch(arr, 47);`,
    question: "Which of the following lists the elements of `arr` compared with `target`, in order, when the code segment runs?",
    choices: ["26, 45, 52", "31, 52, 45", "26, 31, 39, 45, 52", "26, 45"], mono: true,
    why: [
      "`mid` is `(0 + 9) / 2`, which is 4 in `int` division, then 7, then 8. After 52, `hi` becomes 7 and `lo` is 8, so the loop ends and the method returns -1.",
      "This rounds `(0 + 9) / 2` up to 5. `int` division drops the fraction, so the first `mid` is 4, which holds 26.",
      "Binary search does not step through the elements one at a time. Each step jumps to the middle of what is left.",
      "After 45, `lo` is 8 and `hi` is 9, so `lo <= hi` is still true, and 52 is compared too.",
    ],
    answer: 0,
    verify: { cases: [
      { methods: BIN_PRINT, run: "int[] arr = {3, 9, 14, 20, 26, 31, 39, 45, 52, 58};\nint result = binarySearch(arr, 47);\nSystem.out.println(result);", out: "26 45 52 -1" },
    ] } },

  { id: "u4b-18", skill: "search", type: "mcq", topic: "4.17",
    stem: "Consider the following binary search method.",
    methods: BIN,
    question: "For which of the following arrays does `binarySearch(arr, 12)` return -1?",
    choices: ["{15, 12, 3, 8, 20}", "{3, 8, 12, 15, 20}", "{20, 15, 12, 8, 3}", "{3, 12, 20, 15, 8}"], mono: true,
    why: [
      "The middle value is 3, which is less than 12, so the search keeps only the right part, 8 and 20. The 12 at index 1 is in the part it threw away. Binary search needs a sorted array.",
      "This array is sorted, and its middle value is 12, so the first comparison finds it.",
      "This array is not in increasing order, but its middle value is 12, so the first comparison finds it.",
      "This array is not sorted, but the search goes left from 20 and reaches the 12 at index 1. An unsorted array can still give the right answer by luck.",
    ],
    answer: 0,
    verify: { cases: [
      { methods: BIN, run: "int[] arr = {15, 12, 3, 8, 20};\nSystem.out.println(binarySearch(arr, 12));", out: "-1" },
      { methods: BIN, run: "int[] arr = {3, 8, 12, 15, 20};\nSystem.out.println(binarySearch(arr, 12));", out: "2" },
      { methods: BIN, run: "int[] arr = {20, 15, 12, 8, 3};\nSystem.out.println(binarySearch(arr, 12));", out: "2" },
      { methods: BIN, run: "int[] arr = {3, 12, 20, 15, 8};\nSystem.out.println(binarySearch(arr, 12));", out: "1" },
    ] } },

  { id: "u4b-19", skill: "search", type: "mcq", topic: "4.15",
    stem: "Consider the following selection sort method, which sorts `arr` from least to greatest.",
    methods: SEL,
    code: `int[] arr = {33, 50, 12, 47, 5, 28};
selectionSort(arr);`,
    question: "Which of the following shows the contents of `arr` at `// end of pass` the third time it is reached?",
    choices: ["{5, 12, 28, 47, 33, 50}", "{12, 33, 47, 50, 5, 28}", "{5, 12, 50, 47, 33, 28}", "{5, 12, 28, 33, 47, 50}"], mono: true,
    why: [
      "Each pass swaps the smallest value left into place: 5 swaps with 33, then 12 with 50, then 28 with 50. The first three elements are now the three smallest.",
      "That is insertion sort after three passes, which keeps the first elements in order without finding the smallest values.",
      "That is the array after two passes. The third pass swaps 28 into index 2.",
      "That is the fully sorted array, which takes more passes.",
    ],
    answer: 0,
    verify: { cases: [
      { methods: selAt(3), run: "int[] arr = {33, 50, 12, 47, 5, 28};\nselectionSort(arr);", out: "5 12 28 47 33 50" },
      { methods: selAt(2), run: "int[] arr = {33, 50, 12, 47, 5, 28};\nselectionSort(arr);", out: "5 12 50 47 33 28" },
      { methods: insAt(3), run: "int[] arr = {33, 50, 12, 47, 5, 28};\ninsertionSort(arr);", out: "12 33 47 50 5 28" },
    ] } },

  { id: "u4b-20", skill: "search", type: "mcq", topic: "4.15",
    stem: "Consider the following insertion sort method, which sorts `arr` from least to greatest.",
    methods: INS,
    code: `int[] arr = {44, 18, 60, 25, 31, 9};
insertionSort(arr);`,
    question: "Which of the following shows the contents of `arr` at `// end of pass` the fourth time it is reached?",
    choices: ["{18, 25, 31, 44, 60, 9}", "{9, 18, 25, 31, 60, 44}", "{18, 25, 44, 60, 31, 9}", "{9, 18, 25, 31, 44, 60}"], mono: true,
    why: [
      "Each pass slides the next element left into the sorted part: 18, then 60 (which stays), then 25, then 31. After four passes the first five elements are in order, and 9 has not moved yet.",
      "That is selection sort after four passes, which swaps the smallest values to the front.",
      "That is the array after three passes. The fourth pass slides 31 in between 25 and 44.",
      "That is the fully sorted array, which takes a fifth pass to slide 9 to the front.",
    ],
    answer: 0,
    verify: { cases: [
      { methods: insAt(4), run: "int[] arr = {44, 18, 60, 25, 31, 9};\ninsertionSort(arr);", out: "18 25 31 44 60 9" },
      { methods: insAt(3), run: "int[] arr = {44, 18, 60, 25, 31, 9};\ninsertionSort(arr);", out: "18 25 44 60 31 9" },
      { methods: selAt(4), run: "int[] arr = {44, 18, 60, 25, 31, 9};\nselectionSort(arr);", out: "9 18 25 31 60 44" },
    ] } },

  { id: "u4b-21", skill: "recursion", type: "mcq", topic: "4.16",
    stem: "Consider the following method.",
    methods: B21,
    code: `System.out.println(echo("banana"));`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["bnnaaa", "aaabnn", "bnanaa", "banana"], mono: true,
    why: [
      "A letter that is not `\"a\"` goes in front of the result of the call on the rest. An `\"a\"` goes after it. Every `\"a\"` ends up after all the letters that follow it, so the three a's collect at the end.",
      "An `\"a\"` is joined after the result of the recursive call, so it moves toward the end, not the front.",
      "Only the first `\"a\"` is moved here. Each call checks the first letter of what is left, so every `\"a\"` is moved in turn.",
      "The method does change the String: each `\"a\"` is placed after the rest instead of before it.",
    ],
    answer: 0,
    verify: { out: "bnnaaa" } },

  { id: "u4b-22", skill: "recursion", type: "mcq", topic: "4.17",
    stem: "Merge sort is used to sort the array `{25, 8, 61, 14, 3, 47}` from least to greatest. " + MERGE_STEM,
    question: "Which of the following shows the two arrays merged first?",
    choices: ["[8] and [61]", "[25] and [8]", "[25] and [8, 61]", "[3] and [47]"], mono: true,
    why: [
      "The left part is `{25, 8, 61}`, and `3 / 2` is 1, so it splits into `{25}` and `{8, 61}`. `{8, 61}` must be sorted before it can be merged with `{25}`, so `[8]` and `[61]` are merged first.",
      "This splits `{25, 8, 61}` with the larger part on the left. `3 / 2` is 1, so the left part is only `{25}`.",
      "This merge does happen, but only after `{8, 61}` has been sorted by merging `[8]` and `[61]`.",
      "The right part is sorted only after the left part is finished, so its merges come later.",
    ],
    answer: 0,
    verify: { cases: [
      { methods: MERGE, run: "int[] data = {25, 8, 61, 14, 3, 47};\nSystem.out.println(Arrays.toString(mergeSort(data)));", out: "[8] [61]\n[25] [8, 61]\n[3] [47]\n[14] [3, 47]\n[8, 25, 61] [3, 14, 47]\n[3, 8, 14, 25, 47, 61]" },
    ] } },

  { id: "u4b-frq1", skill: "frq", type: "code", topic: "4.10", title: "The theater tickets",
    prompt: "This question involves the `Ticket` and `Show` classes, shown below. A `Ticket` object stores a seat, the ticket's price in dollars, and whether the ticket has been sold. A `Show` object keeps its tickets in the `ArrayList<Ticket>` named `tickets`.\n\nBefore a show, the theater takes back every ticket that has not been sold and costs more than `maxPrice`. Write the `Show` method `pullUnsold`. It removes every such ticket from `tickets` and returns an `ArrayList<String>` holding the seats of the removed tickets, in the order those tickets appeared in `tickets`. The other tickets stay in `tickets`, in their original order. If no ticket is removed, the method returns an empty list and `tickets` does not change.\n\nFor example, suppose `tickets` holds these seven tickets, in this order:\n\n- `\"A1\"`, $45.00, sold\n- `\"A2\"`, $60.00, not sold\n- `\"A3\"`, $60.00, not sold\n- `\"B1\"`, $30.00, not sold\n- `\"B2\"`, $75.50, sold\n- `\"B3\"`, $52.00, not sold\n- `\"C1\"`, $50.00, not sold\n\nThe call `pullUnsold(50.0)` returns `[A2, A3, B3]`, and afterward `tickets` holds A1, B1, B2, and C1, in that order. C1 is not sold, but it costs exactly $50.00, which is not more than `maxPrice`, so it stays. B2 costs more, but it has been sold, so it stays.\n\nComplete the method `pullUnsold`. " + QR_AL,
    given: `public class Ticket
{
    /** Returns the seat, such as "A2" */
    public String getSeat()
    { /* implementation not shown */ }

    /** Returns the price of the ticket, in dollars */
    public double getPrice()
    { /* implementation not shown */ }

    /** Returns true if the ticket has been sold, and false otherwise */
    public boolean isSold()
    { /* implementation not shown */ }

    /* There may be instance variables, constructors, and methods that are not shown. */
}

public class Show
{
    /** The tickets for the show. No element of tickets is null. */
    private ArrayList<Ticket> tickets;

    /** Removes from tickets every ticket that has not been sold and costs
     *  more than maxPrice, and returns the seats of the removed tickets,
     *  in the order the tickets appeared in tickets.
     *  Postcondition: tickets holds the tickets not removed, in their original order.
     */
    public ArrayList<String> pullUnsold(double maxPrice)
    { /* to be implemented */ }

    /* There may be instance variables, constructors, and methods that are not shown. */
}`,
    sample: "tickets: A1 45.00 sold, A2 60.00 not sold, A3 60.00 not sold, B1 30.00 not sold, B2 75.50 sold, B3 52.00 not sold, C1 50.00 not sold\n\npullUnsold(50.0) returns [A2, A3, B3]\ntickets then holds A1, B1, B2, C1\n\npullUnsold(40.0) returns [A2, A3, B3, C1]\ntickets then holds A1, B1, B2\n\npullUnsold(80.0) returns []\ntickets does not change",
    rows: [
      { name: "Accesses every ticket", earns: "Accesses every element of `tickets` with `get`, with no bounds errors (no `[ ]` on the list, and no index equal to `tickets.size()`)." },
      { name: "Calls the Ticket methods", earns: "Calls `isSold` and `getPrice` on an element of `tickets`." },
      { name: "Checks both conditions", earns: "Decides a ticket is pulled exactly when it has not been sold and its price is more than `maxPrice`: `!` on `isSold()`, `&&`, and `>`, not `>=`." },
      { name: "Removes the right tickets (algorithm)", earns: "Removes every ticket that meets both conditions from `tickets` and no other ticket, without skipping the element that moves into a removed ticket's place: traverses backward, or does not move `i` forward after a removal (A2 and A3, side by side, are both removed)." },
      { name: "Returns the seats in order (algorithm)", earns: "Creates a new `ArrayList<String>`, adds `getSeat()` of each removed ticket so the seats end up in the order the tickets appeared (`add(0, ...)` when traversing backward), and returns that list, which is empty when nothing is removed." },
    ],
    notes: NOTE + " Row 1 is earned by a correct loop over the list even if the rest of the method is wrong. A forward loop with `i++` after every pass and no other change skips the ticket after each removal (`pullUnsold(50.0)` returns `[A2, B3]` and leaves A3), so it does not earn row 4. A backward loop that adds seats with `add(seat)` returns them in reverse order and does not earn row 5. An enhanced `for` that removes from `tickets` can throw a `ConcurrentModificationException`, so it does not earn row 4.",
    solution: BF1,
    verify: { classes: TICKET, cases: [
      sh(TICKETS_EX, "50.0", "[A2, A3, B3]\nA1 B1 B2 C1"),
      sh(TICKETS_EX, "40.0", "[A2, A3, B3, C1]\nA1 B1 B2"),
      sh(TICKETS_EX, "80.0", "[]\nA1 A2 A3 B1 B2 B3 C1"),
      sh([["D1", "20.0", false], ["D2", "25.0", false], ["D3", "30.0", false]], "10.0", "[D1, D2, D3]"),
      sh([["E1", "99.0", true]], "1.0", "[]\nE1"),
      sh(TICKETS_EX, "50.0", "[A2, A3, B3]\nA1 B1 B2 C1", BF1_FWD),
      sh(TICKETS_EX, "40.0", "[A2, A3, B3, C1]\nA1 B1 B2", BF1_FWD),
      sh(TICKETS_EX, "50.0", "[A2, B3]\nA1 A3 B1 B2 C1", BF1_SKIP),
    ] } },

  { id: "u4b-frq2", skill: "frq", type: "code", topic: "4.13", title: "The hotel",
    prompt: "This question involves the `Room` and `Hotel` classes, shown below. A `Room` object stores whether a hotel room is booked and its nightly rate, in dollars. A `Hotel` object keeps its rooms in the 2D array `rooms`: each row is one floor, so `rooms[f][n]` is room `n` on floor `f`.\n\nA room is a **match** when it is not booked and its rate is at most `maxRate`. Write the `Hotel` method `bestFloor`. It returns the index of the floor (row) of `rooms` with the most matching rooms. If two or more floors tie for the most, the method returns the smallest of their indexes.\n\nFor example, suppose `rooms` holds the following rooms. Each element shows whether the room is booked or open, and its rate.\n\n```\n          room 0       room 1       room 2       room 3\nfloor 0   booked 120   open 95      open 150     booked 90\nfloor 1   open 80      open 100     booked 85    open 140\nfloor 2   open 99      booked 70    open 60      open 100\n```\n\n- `bestFloor(100)` returns 2. Floor 0 has 1 match, floor 1 has 2, and floor 2 has 3.\n- `bestFloor(90)` returns 1. Floor 0 has no matches, and floors 1 and 2 have 1 each. They tie, and 1 is the smaller index.\n- `bestFloor(50)` returns 0. No floor has a match, so all three tie at 0.\n\nComplete the method `bestFloor`. Use only the methods shown.",
    given: `public class Room
{
    /** Returns true if the room is booked, and false otherwise */
    public boolean isBooked()
    { /* implementation not shown */ }

    /** Returns the nightly rate of the room, in dollars */
    public int getRate()
    { /* implementation not shown */ }

    /* There may be instance variables, constructors, and methods that are not shown. */
}

public class Hotel
{
    /** rooms[f][n] is room n on floor f. rooms has at least one row and
     *  at least one column, and no element of rooms is null.
     */
    private Room[][] rooms;

    /** Returns the index of the floor of rooms with the most rooms that
     *  are not booked and have a rate of at most maxRate. If two or more
     *  floors tie, returns the smallest of their indexes.
     */
    public int bestFloor(int maxRate)
    { /* to be implemented */ }

    /* There may be instance variables, constructors, and methods that are not shown. */
}`,
    sample: "For the rooms shown:\nbestFloor(100) returns 2\nbestFloor(90) returns 1\nbestFloor(50) returns 0",
    rows: [
      { name: "Accesses every room", earns: "Accesses every element of `rooms` with nested loops and no bounds errors: rows up to `rooms.length`, columns up to `rooms[f].length` or `rooms[0].length`." },
      { name: "Calls the Room methods", earns: "Calls `isBooked` and `getRate` on an element of `rooms`." },
      { name: "Checks both conditions", earns: "Decides a room matches exactly when it is not booked and its rate is at most `maxRate`: `!` on `isBooked()`, `&&`, and `<=`, not `<`." },
      { name: "Counts each floor (algorithm)", earns: "Counts the matching rooms on a floor, with the count starting at 0 again for each floor." },
      { name: "Compares floor counts", earns: "Compares a floor's count with the largest count from earlier floors, kept in a variable, and replaces it only when the new count is strictly greater (`>`, not `>=`)." },
      { name: "Returns the best floor (algorithm)", earns: "Returns the index of the floor with the most matches, not the count itself, with the best index and best count given starting values before the loop (floor 0's count, or a count below 0)." },
    ],
    notes: NOTE + " Row 4 is not earned when the count is declared before the outer loop and never set back to 0, because each floor's count then adds onto the last one (`bestFloor(90)` returns 2). Row 5 is not earned with `>=`, because a tie then keeps the later floor (`bestFloor(90)` returns 2). Row 6 is not earned when the method returns the count, or when the loops count the columns instead of the floors. A response that swaps `rooms.length` and `rooms[0].length` does not earn row 1.",
    solution: BF2,
    verify: { classes: ROOM, cases: [
      ht(ROOMS_EX, [100, 90, 50, 150], "2\n1\n0\n1"),
      ht([["O 10"]], [10, 9], "0\n0"),
      ht([["B 50", "B 50", "O 60", "O 70", "O 80"], ["O 50", "O 50", "O 50", "B 10", "O 90"]], [55, 75, 85], "1\n1\n0"),
      ht([["B 40", "B 40"], ["O 40", "B 40"], ["O 40", "O 40"]], [40, 39], "2\n0"),
      ht(ROOMS_EX, [90], "2", BF2.replace("count > bestCount", "count >= bestCount")),
      ht(ROOMS_EX, [90], "2", BF2.replace("    int bestCount = -1;", "    int bestCount = -1;\n    int count = 0;").replace("        int count = 0;\n", "")),
    ] } },
];

export default {
  forms: [
    { id: "u4a", name: "Unit 4 Test Practice A", group: "Unit 4 Test", date: "2027-03-18", items: u4a },
    { id: "u4b", name: "Unit 4 Test Practice B", group: "Unit 4 Test", date: "2027-03-18", items: u4b },
  ],
};

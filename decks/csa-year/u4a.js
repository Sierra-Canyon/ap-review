// AP CSA mock forms for Unit 4A: Quiz 8 Practice A and B (6 MCQ each, 2027-02-04),
// Unit 4A Checkpoint Practice A and B (15 MCQ and one 5-row free response each, 2027-02-23).
// Quiz 8 covers what is taught by 2/3: array creation and access (4.3), traversal (4.4), and the standard
// algorithms from A3 (4.5: sum, extreme, find an index, any). Shift, reverse, and swap come on 2/8, after the quiz.
// Quiz 8 order, both forms: 4.3 defaults and length, 4.3 indexing, 4.4 off-by-one, 4.4 enhanced for modification,
// 4.5 running extreme, 4.5 missing code in a search method.
// Checkpoint order, both forms: 4.3, 4.4, 4.5 swap or reverse, 4.5 shift, 4.5 pair algorithm (missing code),
// 4.7 wrappers, 4.8 set and remove, 4.8 add at an index, 4.9 traversal, 4.9 removing while traversing,
// 4.10 algorithm over a list of objects, 4.14 linear search, 4.17 binary search trace, 4.15 selection sort passes,
// 4.15 insertion sort passes, then the free response (ArrayList data analysis, FRQ 3 style, 5 rows).
// In every mcq the key is written first and answer is 0 (the site shuffles).

const fill = (code, hole, piece) => code.replace(hole, piece);
const NOTE = "One point for each row. Award a row for what the code actually does; ignore small typing slips that do not change the logic.";
const QR = "Use only the `ArrayList` methods from the Java Quick Reference: `size`, `add`, `get`, `set`, and `remove`.";
const tryRun = (code, ex) => `try
{
${code.split("\n").map((l) => "    " + l).join("\n")}
}
catch (${ex} e)
{
    System.out.println("|thrown");
}`;

// ---------- Quiz 8 Practice A ----------

const A06_M = `public static int findFirst(int[] arr, int target)
{
    for (int i = 0; i < arr.length; i++)
    {
        /* missing code */
    }
    return -1;
}`;
const A06_RUN = `int[] ids = {12, 40, 7, 40};
System.out.println(findFirst(ids, 40) + " " + findFirst(ids, 9));`;
const A06 = [
  "if (arr[i] == target) { return i; }",
  "if (arr[i] == target) { return i; } else { return -1; }",
  "if (arr[i] == target) { return arr[i]; }",
  "if (arr[i] == target) { return i + 1; }",
];

const q8a = [
  { id: "q8a-01", skill: "arrays", type: "mcq", topic: "4.3",
    stem: "A snack stand stores the price of each item in an array. Consider the following code segment.",
    code: `double[] prices = new double[3];
prices[1] = 2.5;
System.out.println(prices[0] + " " + prices[1] + " " + prices.length);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["0.0 2.5 3", "null 2.5 3", "0 2.5 3", "0.0 2.5 2"], mono: true,
    why: [
      "`new double[3]` makes three `double` elements, and each one starts at 0.0. Only index 1 is given a new value. `prices.length` is the number of elements, 3.",
      "Only an array of objects starts out holding `null`. A new array of `double` holds 0.0 in every element.",
      "The elements are `double` values, so the default prints as 0.0, not 0.",
      "`length` counts the elements, and there are 3. The last index is 2, one less than the length.",
    ],
    answer: 0,
    verify: { out: "0.0 2.5 3" } },

  { id: "q8a-02", skill: "arrays", type: "mcq", topic: "4.3",
    stem: "In a dungeon room, the gold in each chest is stored in an array. Consider the following code segment.",
    code: `int[] gold = {4, 9, 1, 7, 5};
int k = gold[2];
System.out.println(gold[k] + gold[gold.length - 1]);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["14", "6", "16", "Nothing is printed. An ArrayIndexOutOfBoundsException is thrown."],
    why: [
      "`k` is `gold[2]`, the element at index 2, which is 1. So `gold[k]` is `gold[1]`, which is 9. The last index is `gold.length - 1`, which is 4, and `gold[4]` is 5. 9 + 5 is 14.",
      "This adds `k` itself, 1, instead of `gold[k]`. `gold[k]` uses 1 as an index and gets the element stored there, 9.",
      "This takes 7 as the last element. `gold.length` is 5, so `gold.length - 1` is 4, and `gold[4]` is 5.",
      "This counts positions from 1, so it reads `gold[2]` as 9 and then looks for index 9. Indexes start at 0: `gold[2]` is the third element, 1, and every index used is in range.",
    ],
    answer: 0,
    verify: { out: "14" } },

  { id: "q8a-03", skill: "arrays", type: "mcq", topic: "4.4",
    stem: "A runner's lap times, in seconds, are stored in an array. Consider the following code segment.",
    code: `int[] laps = {62, 58, 60, 65};
int total = 0;
for (int i = 1; i <= laps.length; i++)
{
    total += laps[i];
}
System.out.println(total);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["Nothing is printed. An ArrayIndexOutOfBoundsException is thrown.", "245", "183", "180"],
    why: [
      "With `<=`, the last pass has `i` equal to `laps.length`, which is 4. The last index of a length-4 array is 3, so `laps[4]` throws an `ArrayIndexOutOfBoundsException`, and the `println` after the loop never runs.",
      "That is the sum of every element, which needs `i` to go from 0 to `laps.length - 1`. This loop starts at 1 and goes one index past the end.",
      "This skips index 0, as the loop does, and stops at index 3. With `<=`, the loop also tries index 4, which does not exist.",
      "This treats the indexes as 1 through 4 and leaves out 65. Indexes start at 0, and index 4 is past the end of the array.",
    ],
    answer: 0,
    verify: { throws: "ArrayIndexOutOfBoundsException" } },

  { id: "q8a-04", skill: "arrays", type: "mcq", topic: "4.4",
    stem: "The health points of three heroes are stored in an array. Consider the following code segment.",
    code: `int[] hp = {10, 4, 7};
for (int h : hp)
{
    h = h * 2;
}
hp[1] = hp[1] + 1;
for (int h : hp)
{
    System.out.print(h + " ");
}`,
    question: "What is printed as a result of executing the code segment?",
    choices: [
      "10 5 7",
      "20 9 14",
      "10 4 7",
      "Nothing is printed. The code segment does not compile, because h cannot be given a new value inside an enhanced for loop.",
    ],
    why: [
      "In an enhanced `for` loop, `h` holds a copy of each element. Doubling `h` changes the copy, not the array. Only `hp[1] = hp[1] + 1` uses an index, so only the 4 changes, to 5.",
      "This treats `h` as the element itself. Assigning to the enhanced `for` variable never changes the array; an indexed loop with `hp[i] = hp[i] * 2` would.",
      "The first loop changes nothing, but `hp[1] = hp[1] + 1` uses an index, so it does change the element at index 1.",
      "Assigning to the enhanced `for` variable compiles. It has no effect on the array, which is what makes it a trap.",
    ],
    answer: 0,
    verify: { out: "10 5 7" } },

  { id: "q8a-05", skill: "arrays", type: "mcq", topic: "4.5",
    stem: "An array holds the low temperatures, in degrees Celsius, for four winter nights. The following code segment is intended to print the highest temperature and its index.",
    code: `int[] temps = {-6, -2, -9, -4};
int high = 0;
int where = -1;
for (int i = 0; i < temps.length; i++)
{
    if (temps[i] > high)
    {
        high = temps[i];
        where = i;
    }
}
System.out.println(high + " " + where);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["0 -1", "-2 1", "-9 2", "-2 -1"], mono: true,
    why: [
      "`high` starts at 0, and every temperature is below 0, so `temps[i] > high` is never true and neither variable changes. Starting `high` at `temps[0]` would find -2 at index 1.",
      "That is the true highest temperature and its index, which the code would find if `high` started at `temps[0]`. Starting at 0, no element is ever greater.",
      "-9 is the lowest temperature. The test `temps[i] > high` looks for a greater value, and -9 is the smallest number in the array.",
      "`high` and `where` change together inside the same `if`. The `if` is never true here, so neither one changes.",
    ],
    answer: 0,
    verify: { out: "0 -1" } },

  { id: "q8a-06", skill: "arrays", type: "mcq", topic: "4.5",
    stem: "The method `findFirst` is intended to return the index of the first element of `arr` that is equal to `target`, or -1 if no element is equal to `target`. For the array below, the code segment should print `1 -1`.",
    methods: A06_M,
    code: A06_RUN,
    question: "Which of the following can replace `/* missing code */` so that `findFirst` works as intended?",
    choices: A06, mono: true,
    why: [
      "The method returns the first index where `arr[i]` equals `target`. When no element matches, the loop finishes and the `return -1` after it runs. `findFirst(ids, 40)` returns 1.",
      "The `else` returns -1 as soon as one element does not match, so only index 0 is ever checked. `findFirst(ids, 40)` returns -1 even though 40 is in the array.",
      "This returns the element, which is always equal to `target`, instead of its index. `findFirst(ids, 40)` returns 40.",
      "This counts positions from 1. Array indexes start at 0, so the first 40 is at index 1, and this returns 2.",
    ],
    answer: 0,
    verify: { cases: [
      { methods: fill(A06_M, "/* missing code */", A06[0]), run: A06_RUN, out: "1 -1" },
      { methods: fill(A06_M, "/* missing code */", A06[1]), run: A06_RUN, out: "-1 -1" },
      { methods: fill(A06_M, "/* missing code */", A06[2]), run: A06_RUN, out: "40 -1" },
      { methods: fill(A06_M, "/* missing code */", A06[3]), run: A06_RUN, out: "2 -1" },
    ] } },
];

// ---------- Quiz 8 Practice B ----------

const B03 = `int[] miles = {3, 7, 12, 20};
for (int i = 0; i < miles.length; i++)
{
    System.out.print(miles[i + 1] - miles[i] + " ");
}`;

const B06_M = `public static boolean anyOver(int[] arr, int limit)
{
    for (int v : arr)
    {
        /* missing code */
    }
    return false;
}`;
const B06_RUN = `int[] waits = {5, 12, 30, 8};
System.out.println(anyOver(waits, 20) + " " + anyOver(waits, 40));`;
const B06 = [
  "if (v > limit) { return true; }",
  "if (v > limit) { return true; } else { return false; }",
  "if (arr[v] > limit) { return true; }",
  "if (v > limit) { return v; }",
];

const q8b = [
  { id: "q8b-01", skill: "arrays", type: "mcq", topic: "4.3",
    stem: "A corridor has five torches, and an array records which ones are lit. Consider the following code segment.",
    code: `boolean[] lit = new boolean[5];
lit[2] = true;
lit[lit.length - 1] = lit[2];
System.out.println(lit[1] + " " + lit[4] + " " + lit.length);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["false true 5", "null true 5", "false true 4", "false false 5"], mono: true,
    why: [
      "`new boolean[5]` makes five elements that all start as `false`. `lit.length - 1` is 4, the last index, so `lit[4]` gets the value of `lit[2]`, which is `true`. `lit[1]` was never changed.",
      "Only an array of objects starts out holding `null`. A new array of `boolean` holds `false` in every element.",
      "`length` counts the elements, and there are 5. The last index is 4, one less than the length.",
      "This misses the third line. `lit[lit.length - 1]` is `lit[4]`, and it is set to the value in `lit[2]`, which is `true`.",
    ],
    answer: 0,
    verify: { out: "false true 5" } },

  { id: "q8b-02", skill: "arrays", type: "mcq", topic: "4.3",
    stem: "Consider the following code segment.",
    code: `int[] keys = {3, 0, 4, 2, 5, 1};
int j = keys[keys.length - 3];
System.out.println(keys[j] + keys[5]);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["5", "3", "7", "Nothing is printed. An ArrayIndexOutOfBoundsException is thrown."],
    why: [
      "`keys.length - 3` is 3, and `keys[3]` is 2, so `j` is 2. `keys[2]` is 4 and `keys[5]`, the last element, is 1. 4 + 1 is 5.",
      "This adds `j` itself, 2, instead of `keys[j]`. `keys[j]` uses 2 as an index and gets the element stored there, 4.",
      "This counts positions from 1, reading `keys[3]` as the third element and `keys[5]` as the fifth. Indexes start at 0: `keys[3]` is the fourth element, 2.",
      "The array has 6 elements, so its indexes run from 0 to 5. `keys[5]` is the last element, not past the end.",
    ],
    answer: 0,
    verify: { out: "5" } },

  { id: "q8b-03", skill: "arrays", type: "mcq", topic: "4.4",
    stem: "An array holds the mile markers a hiker passes, in order. The following code segment is intended to print the distance between each pair of neighboring markers.",
    code: B03,
    question: "What is the result of executing the code segment?",
    choices: [
      "4 5 8 is printed, and then an ArrayIndexOutOfBoundsException is thrown.",
      "4 5 8 is printed, and the code segment ends normally.",
      "Nothing is printed. An ArrayIndexOutOfBoundsException is thrown first.",
      "3 4 5 8 is printed, and the code segment ends normally.",
    ],
    why: [
      "The first three passes print 4, 5, and 8. On the last pass `i` is 3, so `miles[i + 1]` is `miles[4]`, one past the last index, and an `ArrayIndexOutOfBoundsException` is thrown. Reading `i + 1` means the loop must stop at `i < miles.length - 1`.",
      "The loop runs while `i < miles.length`, so there is a pass with `i` equal to 3, the last index, and that pass reads `miles[4]`.",
      "The error happens on the last pass, not the first. Each earlier pass prints its distance before the loop reaches index 3.",
      "No pass subtracts from 0. The first pass prints `miles[1] - miles[0]`, which is 4, and the last pass crashes instead of ending normally.",
    ],
    answer: 0,
    verify: { cases: [
      { run: B03, throws: "ArrayIndexOutOfBoundsException" },
      { run: tryRun(B03, "ArrayIndexOutOfBoundsException"), out: "4 5 8 |thrown" },
    ] } },

  { id: "q8b-04", skill: "arrays", type: "mcq", topic: "4.4",
    stem: "A wizard's spell names are stored in an array. Consider the following code segment.",
    code: `String[] spells = {"fire", "ice", "wind"};
for (String s : spells)
{
    s = s + "!";
}
spells[2] = spells[0] + spells[1];
for (String s : spells)
{
    System.out.print(s + " ");
}`,
    question: "What is printed as a result of executing the code segment?",
    choices: [
      "fire ice fireice",
      "fire! ice! fire!ice!",
      "fire ice wind",
      "Nothing is printed. The code segment does not compile, because s cannot be given a new value inside an enhanced for loop.",
    ],
    why: [
      "In an enhanced `for` loop, `s` holds a copy of each element. `s = s + \"!\"` changes the copy, not the array. Only `spells[2] = spells[0] + spells[1]` uses an index, so only `\"wind\"` is replaced, by `\"fireice\"`.",
      "This treats `s` as the element itself. Assigning to the enhanced `for` variable never changes the array; an indexed loop with `spells[i] = spells[i] + \"!\"` would.",
      "The first loop changes nothing, but the next line uses an index, so `spells[2]` does change.",
      "Assigning to the enhanced `for` variable compiles. It has no effect on the array, which is what makes it a trap.",
    ],
    answer: 0,
    verify: { out: "fire ice fireice" } },

  { id: "q8b-05", skill: "arrays", type: "mcq", topic: "4.5",
    stem: "A store records what four shoppers spent, in dollars. The following code segment is intended to print the smallest amount and its index.",
    code: `int[] costs = {14, 9, 22, 11};
int low = 0;
int spot = -1;
for (int i = 0; i < costs.length; i++)
{
    if (costs[i] < low)
    {
        low = costs[i];
        spot = i;
    }
}
System.out.println(low + " " + spot);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["0 -1", "9 1", "22 2", "9 -1"], mono: true,
    why: [
      "`low` starts at 0, and every amount is above 0, so `costs[i] < low` is never true and neither variable changes. Starting `low` at `costs[0]` would find 9 at index 1.",
      "That is the true smallest amount and its index, which the code would find if `low` started at `costs[0]`. Starting at 0, no element is ever smaller.",
      "22 is the largest amount. The test `costs[i] < low` looks for a smaller value, and 22 is the biggest number in the array.",
      "`low` and `spot` change together inside the same `if`. The `if` is never true here, so neither one changes.",
    ],
    answer: 0,
    verify: { out: "0 -1" } },

  { id: "q8b-06", skill: "arrays", type: "mcq", topic: "4.5",
    stem: "The method `anyOver` is intended to return `true` if at least one element of `arr` is greater than `limit`, and `false` otherwise. For the array below, the code segment should print `true false`.",
    methods: B06_M,
    code: B06_RUN,
    question: "Which of the following can replace `/* missing code */` so that `anyOver` works as intended?",
    choices: B06, mono: true,
    why: [
      "The method returns `true` at the first element greater than `limit`. Only when the loop finishes without finding one does the `return false` after it run. 30 is greater than 20, and nothing is greater than 40.",
      "The `else` returns `false` as soon as one element is not over the limit, so only the first element is ever checked. `anyOver(waits, 20)` returns `false` because 5 is not over 20.",
      "In an enhanced `for` loop, `v` is an element, not an index. `arr[v]` uses 5 as an index into a length-4 array and throws an `ArrayIndexOutOfBoundsException`.",
      "The method's return type is `boolean`, so it cannot return the `int` `v`. This does not compile: `incompatible types: int cannot be converted to boolean`.",
    ],
    answer: 0,
    verify: { cases: [
      { methods: fill(B06_M, "/* missing code */", B06[0]), run: B06_RUN, out: "true false" },
      { methods: fill(B06_M, "/* missing code */", B06[1]), run: B06_RUN, out: "false false" },
      { methods: fill(B06_M, "/* missing code */", B06[2]), run: B06_RUN, throws: "ArrayIndexOutOfBoundsException" },
      { methods: fill(B06_M, "/* missing code */", B06[3]), run: B06_RUN, error: "int cannot be converted to boolean" },
    ] } },
];

// ---------- shared code for the checkpoint ----------

const SEL = (outer) => `public static void selectionSort(int[] arr)
{
    for (int i = 0; ${outer}; i++)
    {
        int minIndex = i;
        for (int j = i + 1; j < arr.length; j++)
        {
            if (arr[j] < arr[minIndex])
            {
                minIndex = j;
            }
        }
        int temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
}`;
const INS = (outer) => `public static void insertionSort(int[] arr)
{
    for (int i = 1; ${outer}; i++)
    {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key)
        {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}`;
const BIN = `public static int binarySearch(int[] arr, int target)
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
const printArr = (name) => `\nfor (int v : ${name})\n{\n    System.out.print(v + " ");\n}`;

// ---------- Unit 4A Checkpoint Practice A ----------

const CA05_M = `public static boolean hasDuplicate(int[] arr)
{
    for (int i = 0; i < arr.length; i++)
    {
        for (/* missing code */)
        {
            if (arr[i] == arr[j])
            {
                return true;
            }
        }
    }
    return false;
}`;
const CA05_RUN = `int[] tags = {41, 17, 23, 8};
int[] more = {5, 9, 2, 9};
System.out.println(hasDuplicate(tags) + " " + hasDuplicate(more));`;
const CA05 = [
  "int j = i + 1; j < arr.length; j++",
  "int j = 0; j < arr.length; j++",
  "int j = i; j < arr.length; j++",
  "int j = i + 1; j < arr.length - 1; j++",
];

const CA09 = `ArrayList<String> log = new ArrayList<String>();
log.add("hit");
log.add("miss");
log.add("crit");
for (int i = 0; i <= log.size(); i++)
{
    System.out.print(log.get(i).length() + " ");
}`;

const PACK = `class Pack
{
    private String owner;
    private int weight;

    public Pack(String owner, int weight)
    {
        this.owner = owner;
        this.weight = weight;
    }

    public String getOwner()
    {
        return owner;
    }

    public int getWeight()
    {
        return weight;
    }
}`;

const CA12_M = `public static int search(ArrayList<String> list, String target)
{
    int spot = -1;
    for (int i = 0; i < list.size(); i++)
    {
        if (list.get(i).equals(target))
        {
            spot = i;
        }
    }
    return spot;
}`;

const RENTAL = `class Rental
{
    private String bikeId;
    private int minutes;

    public Rental(String bikeId, int minutes)
    {
        this.bikeId = bikeId;
        this.minutes = minutes;
    }

    public String getBikeId()
    {
        return bikeId;
    }

    public int getMinutes()
    {
        return minutes;
    }
}`;
const CA_FRQ_SOL = `public int removeShort(int limit)
{
    int total = 0;
    for (int i = rentals.size() - 1; i >= 0; i--)
    {
        if (rentals.get(i).getMinutes() < limit)
        {
            total += rentals.get(i).getMinutes();
            rentals.remove(i);
        }
    }
    return total;
}`;
const RENTAL_LOG = `class RentalLog
{
    private ArrayList<Rental> rentals;

    public RentalLog()
    {
        rentals = new ArrayList<Rental>();
    }

    public void addRental(Rental r)
    {
        rentals.add(r);
    }

    public String ids()
    {
        String s = "";
        for (Rental r : rentals)
        {
            s += r.getBikeId() + ":" + r.getMinutes() + " ";
        }
        return s;
    }

${CA_FRQ_SOL.split("\n").map((l) => "    " + l).join("\n")}
}`;
const rentalCase = (list, limit, out) => ({
  classes: RENTAL_LOG,
  run: `RentalLog log = new RentalLog();\n${list.map(([id, m]) => `log.addRental(new Rental("${id}", ${m}));`).join("\n")}\nSystem.out.println(log.removeShort(${limit}));\nSystem.out.println("[" + log.ids().trim() + "]");`,
  out,
});

const c4a = [
  { id: "c4a-01", skill: "arrays", type: "mcq", topic: "4.3",
    stem: "A hero's backpack has three item slots, stored in an array. Consider the following code segment.",
    code: `String[] slots = new String[3];
slots[0] = "key";
System.out.println(slots[1] + slots[0] + slots.length);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["nullkey3", "key3", "nullkey2", "Nothing is printed. A NullPointerException is thrown."],
    why: [
      "A new array of `String` holds `null` in every element. Joining `null` onto a String prints the word null, so the line is null, then key, then the length, 3.",
      "A new `String` array does not start with empty Strings. Each element is `null`, and concatenation prints it as null.",
      "`slots.length` is the number of elements, 3. The last index is 2, one less than the length.",
      "Concatenating a `null` element does not throw. A `NullPointerException` comes from calling a method on `null`, such as `slots[1].length()`.",
    ],
    answer: 0,
    verify: { out: "nullkey3" } },

  { id: "c4a-02", skill: "arrays", type: "mcq", topic: "4.4",
    stem: "A dungeon game stores six damage rolls in an array. Consider the following code segment.",
    code: `int[] vals = {3, 8, 2, 6, 5, 1};
for (int i = vals.length - 1; i >= 0; i -= 2)
{
    System.out.print(vals[i] + " ");
}`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["1 6 8", "1 6 8 3", "8 6 1", "Nothing is printed. An ArrayIndexOutOfBoundsException is thrown."], mono: false,
    why: [
      "`i` starts at the last index, 5, and goes down by 2: 5, 3, 1. The next value, -1, fails `i >= 0`. `vals[5]`, `vals[3]`, and `vals[1]` are 1, 6, and 8.",
      "This also prints `vals[0]`. `i` goes 5, 3, 1, and then -1, so index 0 is never reached.",
      "These are the right elements in the wrong order. `i` counts down from the last index, so the element at index 5 is printed first.",
      "`i` starts at `vals.length - 1`, the last index, not at `vals.length`, so every index used is in range.",
    ],
    answer: 0,
    verify: { out: "1 6 8" } },

  { id: "c4a-03", skill: "arrays", type: "mcq", topic: "4.5",
    stem: "The following code segment is intended to swap each pair of neighboring elements: the elements at indexes 0 and 1, then 2 and 3, and so on.",
    code: `int[] a = {4, 7, 1, 9, 2};
for (int i = 0; i < a.length - 1; i += 2)
{
    a[i] = a[i + 1];
    a[i + 1] = a[i];
}
for (int v : a)
{
    System.out.print(v + " ");
}`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["7 7 9 9 2", "7 4 9 1 2", "4 4 1 1 2", "Nothing is printed. An ArrayIndexOutOfBoundsException is thrown."],
    why: [
      "A swap needs a temporary variable. `a[i] = a[i + 1]` destroys the old `a[i]` before it is saved, so `a[i + 1] = a[i]` copies the same value back. Each pair ends up holding two copies of its second element, and the 2 has no partner.",
      "That is what a working swap prints. Without a temporary variable, the 4 and the 1 are overwritten before they can be moved.",
      "The first line copies `a[i + 1]` into `a[i]`, so the second element of each pair is the one that survives, not the first.",
      "`i` takes 0 and 2. When `i` is 4, `i < a.length - 1` is false, so `a[i + 1]` never reads past index 4.",
    ],
    answer: 0,
    verify: { out: "7 7 9 9 2" } },

  { id: "c4a-04", skill: "arrays", type: "mcq", topic: "4.5",
    stem: "The following code segment is intended to shift every element one place to the right, moving the last element to the front. For the array below, it should print `8 6 1 4`.",
    code: `int[] r = {6, 1, 4, 8};
int last = r[r.length - 1];
for (int i = 1; i < r.length; i++)
{
    r[i] = r[i - 1];
}
r[0] = last;
for (int v : r)
{
    System.out.print(v + " ");
}`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["8 6 6 6", "8 6 1 4", "1 4 8 6", "6 6 6 6"], mono: true,
    why: [
      "Moving forward, each pass copies the value that was just copied: `r[1]` becomes 6, then `r[2]` gets that 6, then `r[3]` does too. A shift to the right has to start at the end, with `i` counting down. Then `r[0]` gets the saved 8.",
      "That is the intended result. It needs the loop to run from the last index down to 1, so each element is copied before it is overwritten.",
      "That is a shift to the left. This loop copies `r[i - 1]` into `r[i]`, which moves values to the right.",
      "This leaves out the last line. `last` saved the 8 before the loop, and `r[0] = last` puts it at the front.",
    ],
    answer: 0,
    verify: { out: "8 6 6 6" } },

  { id: "c4a-05", skill: "arrays", type: "mcq", topic: "4.5",
    stem: "The method `hasDuplicate` is intended to return `true` if any value appears more than once in `arr`, and `false` otherwise. For the arrays below, the code segment should print `false true`.",
    methods: CA05_M,
    code: CA05_RUN,
    question: "Which of the following can replace `/* missing code */` so that `hasDuplicate` works as intended?",
    choices: CA05, mono: true,
    why: [
      "Starting `j` at `i + 1` compares each element with every element after it, and never with itself. In `more`, the 9 at index 1 matches the 9 at index 3.",
      "When `j` equals `i`, `arr[i] == arr[j]` compares an element with itself, which is always true. The method returns `true` for `tags`, which has no repeated value.",
      "The first pass of the inner loop has `j` equal to `i`, so every element is compared with itself and the method returns `true` for `tags`.",
      "This stops one element early and never compares anything with the last element. In `more`, the second 9 is the last element, so the method returns `false`.",
    ],
    answer: 0,
    verify: { cases: [
      { methods: fill(CA05_M, "/* missing code */", CA05[0]), run: CA05_RUN, out: "false true" },
      { methods: fill(CA05_M, "/* missing code */", CA05[1]), run: CA05_RUN, out: "true true" },
      { methods: fill(CA05_M, "/* missing code */", CA05[2]), run: CA05_RUN, out: "true true" },
      { methods: fill(CA05_M, "/* missing code */", CA05[3]), run: CA05_RUN, out: "false false" },
    ] } },

  { id: "c4a-06", skill: "arraylist", type: "mcq", topic: "4.7",
    stem: "Consider the following code segment.",
    code: `ArrayList<int> keys = new ArrayList<int>();
keys.add(3);
keys.add(8);
System.out.println(keys.size());`,
    question: "Which of the following best describes the result of executing the code segment?",
    choices: [
      "The code segment does not compile, because int is a primitive type.",
      "2 is printed, because two values were added to keys.",
      "[3, 8] is printed, because println shows every element.",
      "It compiles, but an exception is thrown when 3 is added.",
    ],
    why: [
      "The type inside the angle brackets must be a class. `int` is primitive, so the declaration fails with `unexpected type`. `ArrayList<Integer>` works, and autoboxing turns each `int` into an `Integer` when it is added.",
      "With `ArrayList<Integer>`, this would print 2. `ArrayList<int>` never compiles, so nothing runs.",
      "The code prints `keys.size()`, not `keys`, and in any case it never compiles, because `int` is not a class.",
      "The problem is found by the compiler, not when the code runs. A list type must name a class such as `Integer`.",
    ],
    answer: 0,
    verify: { error: "unexpected type" } },

  { id: "c4a-07", skill: "arraylist", type: "mcq", topic: "4.8",
    stem: "Consider the following code segment.",
    code: `ArrayList<String> bag = new ArrayList<String>();
bag.add("rope");
bag.add("torch");
bag.add("map");
String a = bag.set(1, "lamp");
String b = bag.remove(0);
System.out.println(a + " " + b + " " + bag);`,
    question: "What is printed as a result of executing the code segment?",
    choices: [
      "torch rope [lamp, map]",
      "lamp rope [lamp, map]",
      "torch rope [lamp, torch, map]",
      "Nothing is printed. The code segment does not compile, because set does not return a value.",
    ],
    why: [
      "`set` replaces the element at index 1 and returns the old one, `\"torch\"`. `remove(0)` takes out `\"rope\"` and returns it. What is left is lamp and map.",
      "`set` returns the element it replaced, not the new one. `a` is `\"torch\"`.",
      "`set` replaces an element; it does not insert one. `add(1, \"lamp\")` would shift `\"torch\"` to the right, but `set(1, \"lamp\")` removes it from the list.",
      "`set` returns the element that was at the index before, so assigning its result to a `String` compiles.",
    ],
    answer: 0,
    verify: { out: "torch rope [lamp, map]" } },

  { id: "c4a-08", skill: "arraylist", type: "mcq", topic: "4.8",
    stem: "A list holds the names of people waiting in line. Consider the following code segment.",
    code: `ArrayList<String> line = new ArrayList<String>();
line.add("Ana");
line.add("Ben");
line.add(0, "Cy");
line.add(2, "Dee");
line.add(line.size(), "Eli");
System.out.println(line);`,
    question: "What is printed as a result of executing the code segment?",
    choices: [
      "[Cy, Ana, Dee, Ben, Eli]",
      "[Cy, Ana, Ben, Dee, Eli]",
      "[Cy, Dee, Ana, Ben, Eli]",
      "Nothing is printed. An IndexOutOfBoundsException is thrown.",
    ],
    why: [
      "`add(0, \"Cy\")` puts Cy in front: Cy, Ana, Ben. `add(2, \"Dee\")` inserts at index 2 of that list, between Ana and Ben, and Ben shifts right. `add(line.size(), \"Eli\")` adds at the end.",
      "This puts Dee at index 2 of the list from before Cy was added. Each `add` changes the list, and after Cy goes in front, index 2 is between Ana and Ben.",
      "This counts positions from 1 and puts Dee second. Index 2 is the third position.",
      "`add` with an index allows any index from 0 through `size()`. Adding at index `size()` puts the element at the end.",
    ],
    answer: 0,
    verify: { out: "[Cy, Ana, Dee, Ben, Eli]" } },

  { id: "c4a-09", skill: "arraylist", type: "mcq", topic: "4.9",
    stem: "A list holds a hero's battle log, one word for each swing. Consider the following code segment.",
    code: CA09,
    question: "What is the result of executing the code segment?",
    choices: [
      "3 4 4 is printed, and then an IndexOutOfBoundsException is thrown.",
      "3 4 4 is printed, and the code segment ends normally.",
      "Nothing is printed. The code segment does not compile, because a list uses size(), not length().",
      "Nothing is printed. An IndexOutOfBoundsException is thrown first.",
    ],
    why: [
      "The first three passes print the length of each word. With `<=`, there is a pass with `i` equal to `log.size()`, which is 3, and `log.get(3)` throws an `IndexOutOfBoundsException`.",
      "The test `i <= log.size()` allows one pass too many. The last index of a list of size 3 is 2.",
      "`length()` is called on `log.get(i)`, which is a `String`, so it compiles. The list itself uses `size()`, and it does.",
      "The error happens on the last pass, not the first. Each earlier pass prints its word's length before `i` reaches 3.",
    ],
    answer: 0,
    verify: { cases: [
      { run: CA09, throws: "IndexOutOfBoundsException" },
      { run: tryRun(CA09, "IndexOutOfBoundsException"), out: "3 4 4 |thrown" },
    ] } },

  { id: "c4a-10", skill: "arraylist", type: "mcq", topic: "4.9",
    stem: "The following code segment is intended to remove every animal name shorter than 4 letters from `herd`.",
    code: `ArrayList<String> herd = new ArrayList<String>();
herd.add("ox");
herd.add("elk");
herd.add("deer");
herd.add("yak");
herd.add("bison");
for (int i = 0; i < herd.size(); i++)
{
    if (herd.get(i).length() < 4)
    {
        herd.remove(i);
    }
}
System.out.println(herd);`,
    question: "What is printed as a result of executing the code segment?",
    choices: [
      "[elk, deer, bison]",
      "[deer, bison]",
      "[elk, deer, yak, bison]",
      "Nothing is printed. An IndexOutOfBoundsException is thrown.",
    ],
    why: [
      "Removing `\"ox\"` at index 0 slides `\"elk\"` into index 0, and then `i++` moves on to index 1, so `\"elk\"` is never checked. `\"yak\"` is checked and removed. Traversing backward, from `herd.size() - 1` down to 0, would remove every short name.",
      "That is the intended result. Removing while traversing forward skips the element that slides into the gap, so `\"elk\"` survives.",
      "The loop keeps going after the first removal. `\"yak\"` is at index 2 when `i` is 2, so it is removed.",
      "The test `i < herd.size()` is checked again before every pass, using the list's current size, so `get(i)` never goes past the end.",
    ],
    answer: 0,
    verify: { out: "[elk, deer, bison]" } },

  { id: "c4a-11", skill: "arraylist", type: "mcq", topic: "4.10",
    stem: "The `Pack` class is shown below. Consider the following code segment, which uses a list of `Pack` objects.",
    classes: PACK,
    code: `ArrayList<Pack> packs = new ArrayList<Pack>();
packs.add(new Pack("Rook", 5));
packs.add(new Pack("Wren", 8));
packs.add(new Pack("Ivo", 6));
packs.add(new Pack("Sela", 7));
int total = 0;
for (Pack p : packs)
{
    total += p.getWeight();
}
double avg = total / packs.size();
int heavy = 0;
for (Pack p : packs)
{
    if (p.getWeight() >= avg)
    {
        heavy++;
    }
}
System.out.println(avg + " " + heavy);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["6.0 3", "6.5 2", "6.5 3", "6 3"], mono: true,
    why: [
      "`total` is 26, and `total / packs.size()` divides two `int` values, so the result is 6 before it is stored in the `double` `avg` as 6.0. The weights 8, 6, and 7 are at least 6.0.",
      "This is the true average. Both `total` and `packs.size()` are `int`, so the division drops the .5 before the value reaches `avg`.",
      "The average is not 6.5, because `int` division gives 6. With 6.5, only 8 and 7 would count.",
      "`avg` is a `double`, so it prints with a decimal point: 6.0.",
    ],
    answer: 0,
    verify: { out: "6.0 3" } },

  { id: "c4a-12", skill: "search", type: "mcq", topic: "4.14",
    stem: "Consider the following method.",
    methods: CA12_M,
    code: `ArrayList<String> trees = new ArrayList<String>();
trees.add("ash");
trees.add("oak");
trees.add("elm");
trees.add("ash");
System.out.println(search(trees, "ash") + " " + search(trees, "fir"));`,
    question: "Which of the following best describes the value returned by `search(list, target)`?",
    choices: [
      "The index of the last element equal to target, or -1 if there is none",
      "The index of the first element equal to target, or -1 if there is none",
      "The number of elements in list that are equal to target",
      "The index of the last element equal to target, or list.size() if there is none",
    ],
    why: [
      "The loop never stops early, so every match replaces `spot`, and the last match is the one returned. With no match, `spot` keeps its starting value, -1. For the list shown, `search(trees, \"ash\")` returns 3.",
      "There is no `return` inside the loop, so a later match overwrites an earlier one. Returning `i` at the first match would give the first index.",
      "`spot = i` stores an index, not a count. A count would need `spot++`.",
      "`spot` starts at -1, and nothing changes it unless a match is found, so -1 is returned when there is none.",
    ],
    answer: 0,
    verify: { out: "3 -1" } },

  { id: "c4a-13", skill: "search", type: "mcq", topic: "4.17",
    stem: "The following method performs a binary search on a sorted array and prints each element it examines.",
    methods: BIN,
    code: `int[] levels = {3, 7, 11, 15, 19, 24, 30, 36, 41, 50};
System.out.println(binarySearch(levels, 41));`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["19 36 41 8", "24 41 8", "19 36 41 9", "3 7 11 15 19 24 30 36 41 8"], mono: true,
    why: [
      "`mid` is (0 + 9) / 2, which is 4, and 19 is less than 41, so `lo` becomes 5. Then `mid` is 7, and 36 is less than 41, so `lo` becomes 8. Then `mid` is (8 + 9) / 2, which is 8, and 41 is found at index 8.",
      "This rounds `mid` up. `(lo + hi) / 2` uses `int` division, so (0 + 9) / 2 is 4, not 5.",
      "The examined values are right, but indexes start at 0. 41 is at index 8.",
      "That is a linear search. Binary search starts in the middle and throws away half of what is left after each comparison.",
    ],
    answer: 0,
    verify: { out: "19 36 41 8" } },

  { id: "c4a-14", skill: "search", type: "mcq", topic: "4.15",
    stem: "The following method is a correct implementation of selection sort. The method is called with the array `{6, 9, 3, 8, 1, 5}`.",
    methods: SEL("i < arr.length - 1"),
    code: `int[] nums = {6, 9, 3, 8, 1, 5};
selectionSort(nums);`,
    question: "What are the contents of the array after the outer loop has run three times, when `i` has been 0, 1, and 2?",
    choices: ["1 3 5 8 6 9", "3 6 8 9 1 5", "1 3 5 6 8 9", "1 3 5 6 9 8"], mono: true,
    why: [
      "Each pass finds the smallest value in the unsorted part and swaps it into place. Pass 1 swaps 1 with 6, pass 2 swaps 3 with 9, and pass 3 swaps 5 with 9. The 8, 6, and 9 after that are not sorted yet.",
      "That is insertion sort after three passes. Selection sort puts the smallest values at the front first, so 1 is at index 0 after the first pass.",
      "That is the fully sorted array. After three passes, only the first three positions are final.",
      "This shifts the other elements over to make room for each smallest value. Selection sort swaps: the 9 at index 2 trades places with the 5, and the 6 and 8 stay where they were.",
    ],
    answer: 0,
    verify: { cases: [
      { methods: SEL("i < 3"), run: `int[] nums = {6, 9, 3, 8, 1, 5};\nselectionSort(nums);${printArr("nums")}`, out: "1 3 5 8 6 9" },
      { methods: SEL("i < arr.length - 1"), run: `int[] nums = {6, 9, 3, 8, 1, 5};\nselectionSort(nums);${printArr("nums")}`, out: "1 3 5 6 8 9" },
    ] } },

  { id: "c4a-15", skill: "search", type: "mcq", topic: "4.15",
    stem: "The following method is a correct implementation of insertion sort. The method is called with the array `{7, 3, 5, 9, 2, 4}`.",
    methods: INS("i < arr.length"),
    code: `int[] nums = {7, 3, 5, 9, 2, 4};
insertionSort(nums);`,
    question: "What are the contents of the array after the outer loop has run four times, when `i` has been 1, 2, 3, and 4?",
    choices: ["2 3 5 7 9 4", "3 5 7 9 2 4", "2 3 4 5 7 9", "3 5 7 2 9 4"], mono: true,
    why: [
      "Each pass takes the element at index `i` and slides it left into the sorted part. After four passes the first five elements, 2, 3, 5, 7, and 9, are in order, and the 4 has not been reached yet.",
      "That is the array after three passes. The fourth pass, with `i` equal to 4, moves the 2 all the way to the front.",
      "That is the fully sorted array. Insertion sort has not looked at the 4 at index 5 yet.",
      "This moves the 2 only one place. The `while` loop keeps shifting elements right as long as the element to the left is larger, so the 2 slides past 9, 7, 5, and 3.",
    ],
    answer: 0,
    verify: { cases: [
      { methods: INS("i < 5"), run: `int[] nums = {7, 3, 5, 9, 2, 4};\ninsertionSort(nums);${printArr("nums")}`, out: "2 3 5 7 9 4" },
      { methods: INS("i < 4"), run: `int[] nums = {7, 3, 5, 9, 2, 4};\ninsertionSort(nums);${printArr("nums")}`, out: "3 5 7 9 2 4" },
    ] } },

  { id: "c4a-frq", skill: "frq", type: "code", topic: "4.10", title: "The bike rental log",
    prompt: "A bike shop keeps a log of rentals. Each rental is a `Rental` object, shown below, with the bike's ID and the number of minutes the bike was out. The `RentalLog` class keeps the rentals in an `ArrayList`, in the order they were made.\n\nThe shop does not charge for very short rentals and wants them out of the log. Write the `RentalLog` method `removeShort`. It removes every rental that lasted fewer than `limit` minutes and returns the total number of minutes in the rentals it removed. The rentals that are not removed stay in the log, in their original order. If no rental is removed, the method returns 0.\n\nFor example, suppose the log holds these rentals, in order:\n\n```\n(\"B12\", 45)  (\"B07\", 8)  (\"B03\", 5)  (\"B12\", 30)  (\"B09\", 14)\n```\n\nThe call `removeShort(15)` returns 27 (8 + 5 + 14), and the log then holds `(\"B12\", 45)  (\"B12\", 30)`.\n\nWrite the complete method. " + QR,
    classes: RENTAL,
    given: `public class RentalLog
{
    /** The rentals in the log, in the order they were made */
    private ArrayList<Rental> rentals;

    /** Removes every rental that lasted fewer than limit minutes and
     *  returns the total number of minutes in the removed rentals.
     *  The other rentals stay in the log, in their original order.
     *  Precondition: limit > 0
     */
    public int removeShort(int limit)
    { /* to be implemented */ }

    // There may be instance variables, constructors, and methods that are not shown.
}`,
    sample: "Log (\"B12\", 45) (\"B07\", 8) (\"B03\", 5) (\"B12\", 30) (\"B09\", 14)\nremoveShort(15) returns 27, and the log becomes (\"B12\", 45) (\"B12\", 30)\n\nLog (\"B01\", 20) (\"B02\", 15)\nremoveShort(15) returns 0, and the log is unchanged",
    rows: [
      { name: "Accesses every rental", earns: "Visits every element of `rentals` with a loop, using `size()` and `get`, without going past the end (indexes 0 through `rentals.size() - 1`)." },
      { name: "Finds the short rentals", earns: "Calls `getMinutes()` on a `Rental` from the list and compares the result with `limit` using `<` (a rental of exactly `limit` minutes stays)." },
      { name: "Removes without skipping", earns: "Removes every short rental with `remove`, and no rental is skipped after a removal: the loop runs backward, or it does not move to the next index after removing." },
      { name: "Totals the removed minutes", earns: "Adds the minutes of each removed rental, and only those, to a total that starts at 0." },
      { name: "Returns the total", earns: "Returns the total the method computed, after the loop. A method that prints the total instead does not earn this row." },
    ],
    notes: NOTE + " A forward loop that calls `remove(i)` and then moves on with `i++` skips the rental after each removal (in the example, `(\"B03\", 5)` survives) and does not earn row 3; rows 1, 2, 4, and 5 are judged on their own. Removing inside an enhanced `for` loop over `rentals` does not earn row 3, because changing the size of a list during an enhanced `for` loop can throw a `ConcurrentModificationException`. Building a new list of the rentals to keep and assigning it to `rentals` earns row 3. Comparing with `<=` does not earn row 2. Using `total += rentals.remove(i).getMinutes();` is fine for rows 3 and 4.",
    solution: CA_FRQ_SOL,
    verify: { cases: [
      rentalCase([["B12", 45], ["B07", 8], ["B03", 5], ["B12", 30], ["B09", 14]], 15, "27\n[B12:45 B12:30]"),
      rentalCase([["B01", 20], ["B02", 15]], 15, "0\n[B01:20 B02:15]"),
      rentalCase([["B04", 3], ["B05", 2], ["B06", 9]], 10, "14\n[]"),
      rentalCase([["B08", 1], ["B08", 2], ["B02", 40], ["B03", 4]], 5, "7\n[B02:40]"),
      rentalCase([], 10, "0\n[]"),
      rentalCase([["B10", 60], ["B11", 6], ["B12", 61]], 7, "6\n[B10:60 B12:61]"),
    ] } },
];

// ---------- Unit 4A Checkpoint Practice B ----------

const CB05_M = `public static boolean isIncreasing(int[] arr)
{
    /* missing code */
    {
        if (arr[i] >= arr[i + 1])
        {
            return false;
        }
    }
    return true;
}`;
const CB05_RUN = `int[] ranks = {2, 5, 9, 14};
int[] dips = {8, 3, 6, 7};
int[] ends = {1, 4, 6, 5};
System.out.println(isIncreasing(ranks) + " " + isIncreasing(dips) + " " + isIncreasing(ends));`;
const CB05 = [
  "for (int i = 0; i < arr.length - 1; i++)",
  "for (int i = 0; i < arr.length; i++)",
  "for (int i = 1; i < arr.length - 1; i++)",
  "for (int i = 0; i < arr.length - 2; i++)",
];

const CB09 = `ArrayList<String> names = new ArrayList<String>();
names.add("Ada");
names.add("Bo");
names.add("Cy");
/* missing code */
{
    System.out.print(names.get(i) + " ");
}`;
const CB09_C = [
  "for (int i = names.size() - 1; i >= 0; i--)",
  "for (int i = names.size(); i >= 0; i--)",
  "for (int i = names.length - 1; i >= 0; i--)",
  "for (int i = names.size() - 1; i > 0; i--)",
];

const CB10 = `ArrayList<Integer> changes = new ArrayList<Integer>();
changes.add(-1);
changes.add(-4);
changes.add(6);
changes.add(-2);
changes.add(-3);
changes.add(8);
/* missing code */
{
    if (changes.get(i) < 0)
    {
        changes.remove(i);
    }
}
System.out.println(changes);`;
const CB10_C = [
  "for (int i = changes.size() - 1; i >= 0; i--)",
  "for (int i = 0; i < changes.size(); i++)",
  "for (int i = 0; i <= changes.size(); i++)",
  "for (int i = changes.size() - 1; i > 0; i--)",
];

const SHIFT = `class Shift
{
    private String worker;
    private int hours;

    public Shift(String worker, int hours)
    {
        this.worker = worker;
        this.hours = hours;
    }

    public String getWorker()
    {
        return worker;
    }

    public int getHours()
    {
        return hours;
    }
}`;

const CB12_M = `public static int find(int[] arr, int target)
{
    int i = 0;
    while (i < arr.length && arr[i] != target)
    {
        i++;
    }
    return i;
}`;

const ORDER = `class Order
{
    private String item;
    private int quantity;

    public Order(String item, int quantity)
    {
        this.item = item;
        this.quantity = quantity;
    }

    public String getItem()
    {
        return item;
    }

    public int getQuantity()
    {
        return quantity;
    }
}`;
const CB_FRQ_SOL = `public int cancelItem(String name)
{
    int total = 0;
    for (int i = orders.size() - 1; i >= 0; i--)
    {
        if (orders.get(i).getItem().equals(name))
        {
            total += orders.get(i).getQuantity();
            orders.remove(i);
        }
    }
    return total;
}`;
const ORDER_LIST = `class OrderList
{
    private ArrayList<Order> orders;

    public OrderList()
    {
        orders = new ArrayList<Order>();
    }

    public void addOrder(Order o)
    {
        orders.add(o);
    }

    public String items()
    {
        String s = "";
        for (Order o : orders)
        {
            s += o.getItem() + ":" + o.getQuantity() + " ";
        }
        return s;
    }

${CB_FRQ_SOL.split("\n").map((l) => "    " + l).join("\n")}
}`;
const orderCase = (list, name, out) => ({
  classes: ORDER_LIST,
  run: `OrderList list = new OrderList();\n${list.map(([it, q]) => `list.addOrder(new Order(${it === null ? "new String(\"tea\")" : `"${it}"`}, ${q}));`).join("\n")}\nSystem.out.println(list.cancelItem(new String("${name}")));\nSystem.out.println("[" + list.items().trim() + "]");`,
  out,
});

const c4b = [
  { id: "c4b-01", skill: "arrays", type: "mcq", topic: "4.3",
    stem: "A table has four seats, and an array holds the name of the person in each seat. Consider the following code segment.",
    code: `String[] names = new String[4];
names[3] = "Ivy";
names[1] = names[3];
System.out.println(names[0] + names[1] + names.length);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["nullIvy4", "Ivy4", "nullIvy3", "Nothing is printed. A NullPointerException is thrown."],
    why: [
      "A new array of `String` holds `null` in every element. `names[0]` was never set, so it prints as null. `names[1]` was given the value of `names[3]`, `\"Ivy\"`, and the length is 4.",
      "A new `String` array does not start with empty Strings. Each element is `null`, and concatenation prints it as null.",
      "`names.length` is the number of elements, 4. The last index is 3, one less than the length.",
      "Concatenating a `null` element does not throw. A `NullPointerException` comes from calling a method on `null`, such as `names[0].length()`.",
    ],
    answer: 0,
    verify: { out: "nullIvy4" } },

  { id: "c4b-02", skill: "arrays", type: "mcq", topic: "4.4",
    stem: "A board game stores seven dice rolls in an array. Consider the following code segment.",
    code: `int[] rolls = {4, 1, 6, 3, 2, 5, 7};
int total = 0;
for (int i = 1; i < rolls.length; i += 2)
{
    total += rolls[i];
}
System.out.println(total);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["9", "19", "28", "Nothing is printed. An ArrayIndexOutOfBoundsException is thrown."],
    why: [
      "`i` starts at 1 and goes up by 2: 1, 3, 5. The next value, 7, fails `i < rolls.length`. `rolls[1]`, `rolls[3]`, and `rolls[5]` are 1, 3, and 5.",
      "That is the sum of the elements at indexes 0, 2, 4, and 6. `i` starts at 1, so it visits the odd indexes.",
      "That is the sum of every element. `i += 2` skips every other index.",
      "When `i` becomes 7, `i < rolls.length` is false, so the loop stops before `rolls[7]` is read.",
    ],
    answer: 0,
    verify: { out: "9" } },

  { id: "c4b-03", skill: "arrays", type: "mcq", topic: "4.5",
    stem: "The following code segment is intended to reverse the order of the elements in `b`.",
    code: `int[] b = {2, 5, 8, 3};
for (int i = 0; i < b.length; i++)
{
    int temp = b[i];
    b[i] = b[b.length - 1 - i];
    b[b.length - 1 - i] = temp;
}
for (int v : b)
{
    System.out.print(v + " ");
}`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["2 5 8 3", "3 8 5 2", "3 5 8 2", "Nothing is printed. An ArrayIndexOutOfBoundsException is thrown."],
    why: [
      "The loop runs over the whole array, so every pair is swapped twice. The first two passes reverse the array, and the last two passes swap the same pairs back. Stopping at `i < b.length / 2` would reverse it once.",
      "That is the array after the first two passes. The loop keeps going for two more passes and undoes both swaps.",
      "This swaps only the two ends. The loop swaps the middle pair as well, and then swaps both pairs back.",
      "`b.length - 1 - i` runs from 3 down to 0 as `i` goes from 0 to 3, so every index used is in range.",
    ],
    answer: 0,
    verify: { out: "2 5 8 3" } },

  { id: "c4b-04", skill: "arrays", type: "mcq", topic: "4.5",
    stem: "The following code segment is intended to shift every element one place to the left, moving the first element to the end. For the array below, it should print `3 9 2 7 5`.",
    code: `int[] q = {5, 3, 9, 2, 7};
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
    choices: ["7 7 7 7 5", "3 9 2 7 5", "7 5 3 9 2", "7 7 7 7 7"], mono: true,
    why: [
      "Moving backward, each pass copies the value that was just copied: `q[3]` becomes 7, then `q[2]` gets that 7, and so on to `q[0]`. A shift to the left has to start at the front, with `i` counting up. Then the last element gets the saved 5.",
      "That is the intended result. It needs the loop to run from index 0 up, so each element is copied before it is overwritten.",
      "That is a shift to the right. This loop copies `q[i]` into `q[i - 1]`, which moves values to the left.",
      "This leaves out the line after the loop. `first` saved the 5 before the loop, and `q[q.length - 1] = first` puts it at the end.",
    ],
    answer: 0,
    verify: { out: "7 7 7 7 5" } },

  { id: "c4b-05", skill: "arrays", type: "mcq", topic: "4.5",
    stem: "The method `isIncreasing` is intended to return `true` if every element of `arr` is greater than the element before it, and `false` otherwise. Assume `arr` has at least two elements. For the arrays below, the code segment should print `true false false`.",
    methods: CB05_M,
    code: CB05_RUN,
    question: "Which of the following can replace `/* missing code */` so that `isIncreasing` works as intended?",
    choices: CB05, mono: true,
    why: [
      "Each pass compares `arr[i]` with `arr[i + 1]`, so the last pass must have `i` equal to `arr.length - 2`. Starting at 0 checks every neighboring pair, including the first and the last.",
      "When `i` reaches the last index, `arr[i + 1]` is past the end. For `ranks`, every pair is in order, so the loop reaches that pass and throws an `ArrayIndexOutOfBoundsException`.",
      "Starting at 1 never compares `arr[0]` with `arr[1]`. In `dips`, that first pair, 8 and 3, is the only one out of order, so the method returns `true`.",
      "This stops one pair early and never compares the last two elements. In `ends`, 6 and 5 are out of order, so the method returns `true`.",
    ],
    answer: 0,
    verify: { cases: [
      { methods: fill(CB05_M, "/* missing code */", CB05[0]), run: CB05_RUN, out: "true false false" },
      { methods: fill(CB05_M, "/* missing code */", CB05[1]), run: CB05_RUN, throws: "ArrayIndexOutOfBoundsException" },
      { methods: fill(CB05_M, "/* missing code */", CB05[2]), run: CB05_RUN, out: "true true false" },
      { methods: fill(CB05_M, "/* missing code */", CB05[3]), run: CB05_RUN, out: "true false true" },
    ] } },

  { id: "c4b-06", skill: "arraylist", type: "mcq", topic: "4.7",
    stem: "Consider the following code segment.",
    code: `ArrayList<Integer> tally = new ArrayList<Integer>();
tally.add(4);
tally.add(9);
int first = tally.get(0);
System.out.println(first + tally.get(1) + " " + tally.size());`,
    question: "Which of the following best describes the result of executing the code segment?",
    choices: [
      "13 2 is printed.",
      "49 2 is printed.",
      "The code segment does not compile, because tally.get(0) is an Integer, not an int.",
      "The code segment does not compile, because 4 is an int, not an Integer.",
    ],
    why: [
      "Autoboxing turns 4 and 9 into `Integer` objects when they are added, and unboxing turns them back into `int` values when they are used as numbers. `first + tally.get(1)` is 4 + 9, which is 13, before the `\" \"` is joined on.",
      "`first` is an `int`, and `tally.get(1)` is unboxed to an `int`, so `+` adds them. Text joining starts only when the `\" \"` is reached.",
      "Unboxing converts the `Integer` returned by `get` into an `int` automatically, so `int first = tally.get(0);` compiles.",
      "Autoboxing converts the `int` 4 into an `Integer` automatically when it is added to the list.",
    ],
    answer: 0,
    verify: { out: "13 2" } },

  { id: "c4b-07", skill: "arraylist", type: "mcq", topic: "4.8",
    stem: "Consider the following code segment.",
    code: `ArrayList<Integer> stack = new ArrayList<Integer>();
stack.add(5);
stack.add(8);
stack.add(3);
int r = stack.remove(1);
int s = stack.set(1, r * 2);
System.out.println(r + " " + s + " " + stack);`,
    question: "What is printed as a result of executing the code segment?",
    choices: [
      "8 3 [5, 16]",
      "8 16 [5, 16]",
      "8 3 [5, 16, 3]",
      "Nothing is printed. The code segment does not compile, because set does not return a value.",
    ],
    why: [
      "`remove(1)` takes out the element at index 1, 8, and returns it, leaving 5 and 3. `set(1, 16)` replaces the 3 and returns the old value, 3.",
      "`set` returns the element it replaced, not the new one. `s` is 3.",
      "`set` replaces an element; it does not insert one. After `set(1, 16)`, the 3 is gone.",
      "`set` returns the element that was at the index before, so assigning its result to an `int` compiles.",
    ],
    answer: 0,
    verify: { out: "8 3 [5, 16]" } },

  { id: "c4b-08", skill: "arraylist", type: "mcq", topic: "4.8",
    stem: "Consider the following code segment.",
    code: `ArrayList<Integer> nums = new ArrayList<Integer>();
for (int k = 1; k <= 3; k++)
{
    nums.add(0, k * 10);
}
nums.add(1, 5);
System.out.println(nums + " " + nums.size());`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["[30, 5, 20, 10] 4", "[10, 5, 20, 30] 4", "[30, 5, 10] 3", "[5, 30, 20, 10] 4"], mono: true,
    why: [
      "`add(0, ...)` puts each new value at the front, so the list goes 10, then 20 10, then 30 20 10. `add(1, 5)` inserts 5 at index 1, and the rest shift right.",
      "This adds each value at the end. `add(0, ...)` inserts at index 0, in front of everything already there.",
      "This treats `add(1, 5)` as a replacement. `add` with an index inserts and makes the list longer; `set` is the method that replaces.",
      "This counts positions from 1 and puts 5 first. Index 1 is the second position.",
    ],
    answer: 0,
    verify: { out: "[30, 5, 20, 10] 4" } },

  { id: "c4b-09", skill: "arraylist", type: "mcq", topic: "4.9",
    stem: "The following code segment is intended to print the names in `names` in reverse order. For the list below, it should print `Cy Bo Ada`.",
    code: CB09,
    question: "Which of the following can replace `/* missing code */` so that the code segment works as intended?",
    choices: CB09_C, mono: true,
    why: [
      "The last index of a list is `names.size() - 1`. Counting down to 0, with `i >= 0`, visits every element from the back.",
      "`names.size()` is 3, and the last index is 2, so `names.get(3)` throws an `IndexOutOfBoundsException` on the first pass.",
      "An `ArrayList` has no `length` field; its size comes from `size()`. This does not compile: `cannot find symbol`.",
      "With `i > 0`, the loop stops before index 0, so Ada is never printed.",
    ],
    answer: 0,
    verify: { cases: [
      { run: fill(CB09, "/* missing code */", CB09_C[0]), out: "Cy Bo Ada" },
      { run: fill(CB09, "/* missing code */", CB09_C[1]), throws: "IndexOutOfBoundsException" },
      { run: fill(CB09, "/* missing code */", CB09_C[2]), error: "cannot find symbol" },
      { run: fill(CB09, "/* missing code */", CB09_C[3]), out: "Cy Bo" },
    ] } },

  { id: "c4b-10", skill: "arraylist", type: "mcq", topic: "4.9",
    stem: "A list holds the daily changes in a stock's price. The following code segment is intended to remove every negative value from `changes`. For the list below, it should print `[6, 8]`.",
    code: CB10,
    question: "Which of the following can replace `/* missing code */` so that the code segment works as intended?",
    choices: CB10_C, mono: true,
    why: [
      "Going backward, a removal shifts only the elements that have already been checked, so nothing is skipped and every negative value is removed.",
      "Removing at index `i` slides the next element into index `i`, and `i++` moves past it. The -4 after the -1 and the -3 after the -2 survive: `[-4, 6, -3, 8]`.",
      "This skips elements for the same reason as a plain forward loop, and with `<=`, the last pass calls `get` with an index equal to the size, which throws an `IndexOutOfBoundsException`.",
      "With `i > 0`, the loop never checks index 0, so the -1 at the front stays: `[-1, 6, 8]`.",
    ],
    answer: 0,
    verify: { cases: [
      { run: fill(CB10, "/* missing code */", CB10_C[0]), out: "[6, 8]" },
      { run: fill(CB10, "/* missing code */", CB10_C[1]), out: "[-4, 6, -3, 8]" },
      { run: fill(CB10, "/* missing code */", CB10_C[2]), throws: "IndexOutOfBoundsException" },
      { run: fill(CB10, "/* missing code */", CB10_C[3]), out: "[-1, 6, 8]" },
    ] } },

  { id: "c4b-11", skill: "arraylist", type: "mcq", topic: "4.10",
    stem: "The `Shift` class is shown below. Consider the following code segment, which uses a list of `Shift` objects.",
    classes: SHIFT,
    code: `ArrayList<Shift> week = new ArrayList<Shift>();
week.add(new Shift("Lee", 6));
week.add(new Shift("Max", 3));
week.add(new Shift("Pia", 8));
week.add(new Shift("Rae", 3));
week.add(new Shift("Sam", 5));
int low = 0;
for (int i = 1; i < week.size(); i++)
{
    if (week.get(i).getHours() <= week.get(low).getHours())
    {
        low = i;
    }
}
System.out.println(week.get(low).getWorker() + " " + low);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["Rae 3", "Max 1", "Pia 2", "Lee 0"], mono: true,
    why: [
      "`low` holds the index of the fewest hours so far. Max's 3 hours at index 1 replace Lee's 6. Rae also has 3, and `3 <= 3` is true, so `low` moves to 3. Sam's 5 is not fewer.",
      "That is what `<` would find, because a tie would not replace the earlier index. With `<=`, the later 3 replaces the earlier one.",
      "Pia has the most hours. The test `<=` moves `low` only to a shift with no more hours than the current lowest.",
      "`low` starts at 0, but Max's 3 hours are fewer than Lee's 6, so `low` changes when `i` is 1.",
    ],
    answer: 0,
    verify: { out: "Rae 3" } },

  { id: "c4b-12", skill: "search", type: "mcq", topic: "4.14",
    stem: "Consider the following method.",
    methods: CB12_M,
    code: `int[] bins = {9, 4, 6, 1, 6};
System.out.println(find(bins, 6) + " " + find(bins, 7));`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["2 5", "4 5", "2 -1", "Nothing is printed. An ArrayIndexOutOfBoundsException is thrown."],
    why: [
      "The loop stops at the first 6, at index 2. For 7, `i` goes all the way to 5, where `i < arr.length` is false, and the method returns 5, the length of the array.",
      "The loop stops as soon as `arr[i] != target` is false, at the first 6, not the last one.",
      "The method returns `i`, not -1. When the target is missing, `i` ends at `arr.length`, which is 5.",
      "When `i` is 5, `i < arr.length` is false, and `&&` short-circuits, so `arr[5]` is never read.",
    ],
    answer: 0,
    verify: { out: "2 5" } },

  { id: "c4b-13", skill: "search", type: "mcq", topic: "4.17",
    stem: "The following method performs a binary search on a sorted array and prints each element it examines.",
    methods: BIN,
    code: `int[] depths = {4, 9, 13, 18, 22, 27, 35, 40, 46};
System.out.println(binarySearch(depths, 20));`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["22 9 13 18 -1", "22 13 18 -1", "22 9 13 18 4", "4 9 13 18 22 -1"], mono: true,
    why: [
      "`mid` is (0 + 8) / 2, which is 4, and 22 is more than 20, so `hi` becomes 3. Then `mid` is 1 (9), so `lo` becomes 2; `mid` is 2 (13), so `lo` becomes 3; `mid` is 3 (18), so `lo` becomes 4. Now `lo > hi`, the loop ends, and the method returns -1.",
      "This rounds `mid` up. `(lo + hi) / 2` uses `int` division, so (0 + 3) / 2 is 1, and 9 is examined next.",
      "The method returns -1 when the loop ends without a match. `lo` is 4 at that point, but `lo` is never returned.",
      "That is a linear search from index 0. Binary search starts in the middle and throws away half of what is left after each comparison.",
    ],
    answer: 0,
    verify: { out: "22 9 13 18 -1" } },

  { id: "c4b-14", skill: "search", type: "mcq", topic: "4.15",
    stem: "The following method is a correct implementation of selection sort. The method is called with the array `{4, 8, 2, 7, 1, 3}`.",
    methods: SEL("i < arr.length - 1"),
    code: `int[] nums = {4, 8, 2, 7, 1, 3};
selectionSort(nums);`,
    question: "What are the contents of the array after the outer loop has run three times, when `i` has been 0, 1, and 2?",
    choices: ["1 2 3 7 4 8", "2 4 7 8 1 3", "1 2 3 4 7 8", "1 2 3 4 8 7"], mono: true,
    why: [
      "Each pass finds the smallest value in the unsorted part and swaps it into place. Pass 1 swaps 1 with 4, pass 2 swaps 2 with 8, and pass 3 swaps 3 with 8. The 7, 4, and 8 after that are not sorted yet.",
      "That is insertion sort after three passes. Selection sort puts the smallest values at the front first, so 1 is at index 0 after the first pass.",
      "That is the fully sorted array. After three passes, only the first three positions are final.",
      "This shifts the other elements over to make room for each smallest value. Selection sort swaps: the 8 at index 2 trades places with the 3, and the 7 and 4 stay where they were.",
    ],
    answer: 0,
    verify: { cases: [
      { methods: SEL("i < 3"), run: `int[] nums = {4, 8, 2, 7, 1, 3};\nselectionSort(nums);${printArr("nums")}`, out: "1 2 3 7 4 8" },
      { methods: SEL("i < arr.length - 1"), run: `int[] nums = {4, 8, 2, 7, 1, 3};\nselectionSort(nums);${printArr("nums")}`, out: "1 2 3 4 7 8" },
    ] } },

  { id: "c4b-15", skill: "search", type: "mcq", topic: "4.15",
    stem: "The following method is a correct implementation of insertion sort. The method is called with the array `{8, 5, 6, 1, 9, 3}`.",
    methods: INS("i < arr.length"),
    code: `int[] nums = {8, 5, 6, 1, 9, 3};
insertionSort(nums);`,
    question: "What are the contents of the array after the outer loop has run three times, when `i` has been 1, 2, and 3?",
    choices: ["1 5 6 8 9 3", "5 6 8 1 9 3", "1 3 5 8 9 6", "5 6 1 8 9 3"], mono: true,
    why: [
      "Each pass takes the element at index `i` and slides it left into the sorted part. After three passes the first four elements, 1, 5, 6, and 8, are in order, and the 9 and 3 have not been reached yet.",
      "That is the array after two passes. The third pass, with `i` equal to 3, moves the 1 all the way to the front.",
      "That is selection sort after three passes. Insertion sort does not look past index `i`, so the 3 at the end has not moved.",
      "This moves the 1 only one place. The `while` loop keeps shifting elements right as long as the element to the left is larger, so the 1 slides past 8, 6, and 5.",
    ],
    answer: 0,
    verify: { cases: [
      { methods: INS("i < 4"), run: `int[] nums = {8, 5, 6, 1, 9, 3};\ninsertionSort(nums);${printArr("nums")}`, out: "1 5 6 8 9 3" },
      { methods: INS("i < 3"), run: `int[] nums = {8, 5, 6, 1, 9, 3};\ninsertionSort(nums);${printArr("nums")}`, out: "5 6 8 1 9 3" },
      { methods: SEL("i < 3"), run: `int[] nums = {8, 5, 6, 1, 9, 3};\nselectionSort(nums);${printArr("nums")}`, out: "1 3 5 8 9 6" },
    ] } },

  { id: "c4b-frq", skill: "frq", type: "code", topic: "4.10", title: "The canceled item",
    prompt: "A food truck keeps its open orders in a list. Each order is an `Order` object, shown below, with the name of the menu item and the quantity ordered. The `OrderList` class keeps the orders in an `ArrayList`, in the order they were placed.\n\nWhen the truck runs out of a menu item, every open order for that item is canceled. Write the `OrderList` method `cancelItem`. It removes every order whose item is equal to `name` and returns the total quantity in the orders it removed. The orders that are not removed stay in the list, in their original order. If no order is removed, the method returns 0.\n\nFor example, suppose the list holds these orders, in order:\n\n```\n(\"taco\", 2)  (\"soup\", 1)  (\"soup\", 3)  (\"tea\", 2)  (\"soup\", 2)\n```\n\nThe call `cancelItem(\"soup\")` returns 6 (1 + 3 + 2), and the list then holds `(\"taco\", 2)  (\"tea\", 2)`.\n\nWrite the complete method. " + QR,
    classes: ORDER,
    given: `public class OrderList
{
    /** The open orders, in the order they were placed */
    private ArrayList<Order> orders;

    /** Removes every order whose item is equal to name and returns
     *  the total quantity in the removed orders.
     *  The other orders stay in the list, in their original order.
     */
    public int cancelItem(String name)
    { /* to be implemented */ }

    // There may be instance variables, constructors, and methods that are not shown.
}`,
    sample: "List (\"taco\", 2) (\"soup\", 1) (\"soup\", 3) (\"tea\", 2) (\"soup\", 2)\ncancelItem(\"soup\") returns 6, and the list becomes (\"taco\", 2) (\"tea\", 2)\n\nList (\"taco\", 4) (\"tea\", 1)\ncancelItem(\"soup\") returns 0, and the list is unchanged",
    rows: [
      { name: "Accesses every order", earns: "Visits every element of `orders` with a loop, using `size()` and `get`, without going past the end (indexes 0 through `orders.size() - 1`)." },
      { name: "Finds the orders for the item", earns: "Calls `getItem()` on an `Order` from the list and compares the result with `name` using `equals`, never `==`." },
      { name: "Removes without skipping", earns: "Removes every matching order with `remove`, and no order is skipped after a removal: the loop runs backward, or it does not move to the next index after removing." },
      { name: "Totals the removed quantities", earns: "Adds the quantity of each removed order, and only those, to a total that starts at 0." },
      { name: "Returns the total", earns: "Returns the total the method computed, after the loop. A method that prints the total instead does not earn this row." },
    ],
    notes: NOTE + " A forward loop that calls `remove(i)` and then moves on with `i++` skips the order after each removal (in the example, `(\"soup\", 3)` survives) and does not earn row 3; rows 1, 2, 4, and 5 are judged on their own. Removing inside an enhanced `for` loop over `orders` does not earn row 3, because changing the size of a list during an enhanced `for` loop can throw a `ConcurrentModificationException`. Building a new list of the orders to keep and assigning it to `orders` earns row 3. Comparing with `==` does not earn row 2. Using `total += orders.remove(i).getQuantity();` is fine for rows 3 and 4.",
    solution: CB_FRQ_SOL,
    verify: { cases: [
      orderCase([["taco", 2], ["soup", 1], ["soup", 3], ["tea", 2], ["soup", 2]], "soup", "6\n[taco:2 tea:2]"),
      orderCase([["taco", 4], ["tea", 1]], "soup", "0\n[taco:4 tea:1]"),
      orderCase([["soup", 2], ["soup", 5]], "soup", "7\n[]"),
      orderCase([[null, 3], ["taco", 1], [null, 2]], "tea", "5\n[taco:1]"),
      orderCase([], "taco", "0\n[]"),
      orderCase([["taco", 1], ["tacos", 9], ["taco", 2]], "taco", "3\n[tacos:9]"),
    ] } },
];

export default {
  forms: [
    { id: "q8a", name: "Quiz 8 Practice A", group: "Quiz 8: Arrays", date: "2027-02-04", items: q8a },
    { id: "q8b", name: "Quiz 8 Practice B", group: "Quiz 8: Arrays", date: "2027-02-04", items: q8b },
    { id: "c4a", name: "Unit 4A Checkpoint Practice A", group: "Unit 4A Checkpoint", date: "2027-02-23", items: c4a },
    { id: "c4b", name: "Unit 4A Checkpoint Practice B", group: "Unit 4A Checkpoint", date: "2027-02-23", items: c4b },
  ],
};

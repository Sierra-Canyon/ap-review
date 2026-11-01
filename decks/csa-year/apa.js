// AP Practice Exam A: one mock of the full AP Computer Science A Exam (2025 CED), for 2027-04-05.
// Section I: 42 multiple choice, in unit order, weighted by the CED's multiple-choice exam weighting:
//   Unit 1: 9 (21%) · Unit 2: 11 (26%) · Unit 3: 6 (14%) · Unit 4: 16 (38%).
// Section II: the CED's four free responses with the CED's point totals, one rubric row per point:
//   FRQ 1 Methods and Control Structures, 7 (part (a) 4, part (b) 3) · FRQ 2 Class Design, 7 ·
//   FRQ 3 Data Analysis with ArrayList, 5 · FRQ 4 2D Array, 6.
// Settings: school, sports, music, and weather. In every mcq the key is written first and answer is 0 (the site shuffles).

const NOTE = "One point for each row. Award a row for what the code actually does. Ignore the slips the AP scoring guidelines ignore when the meaning is clear: a missing semicolon or brace, `=` for `==`, `length` and `size` confusion, `[]` and `()` confusion, and a misspelled name that can only mean one variable.";
const QR = "Use only methods shown in the question and methods from the Java Quick Reference.";
const top = (s) => s.replace(/public class /g, "class ");

// Checks two boolean expressions against each other over a grid of int values and prints "same" or "differs".
const equiv = (a, b, orig, alt, lo, hi) => `boolean same = true;
for (int ${a} = ${lo}; ${a} <= ${hi}; ${a}++)
{
    for (int ${b} = ${lo}; ${b} <= ${hi}; ${b}++)
    {
        if ((${orig}) != (${alt}))
        {
            same = false;
        }
    }
}
System.out.println(same ? "same" : "differs");`;

// ---------- Section I code ----------

const AVG = `public static double average(int total, int count)
{
    return (double) total / count;
}`;

const INIT = `/** Returns the first letter of first followed by the first letter of last.
 */
public static String initials(String first, String last)
{
    return first.substring(0, 1) + last.substring(0, 1);
}`;
const INIT_RUN = `public static String initials(String first, String last)
{
    return first.substring(0, 1) + last.substring(0, 1);
}`;

const SCOREBOARD = `class Scoreboard
{
    private int points;

    public Scoreboard(int start)
    {
        points = start;
    }

    public void addPoints(int n)
    {
        points += n;
    }

    public int getPoints()
    {
        return points;
    }
}`;

const ALERT = `String alert = "none";
if (temp > 90)
{
    alert = "heat";
}
else if (temp > 100)
{
    alert = "extreme";
}
else if (temp < 32 && wind > 20)
{
    alert = "windchill";
}
else if (temp < 32)
{
    alert = "freeze";
}`;

const RAFFLE = (cond) => `int count = 0;
for (int n = 1; n <= 100; n++)
{
    if (${cond})
    {
        count++;
    }
}
System.out.println(count);`;

const LYRIC = (header) => `String lyric = "na na nah na";
String target = "na";
int count = 0;
for (${header})
{
    if (lyric.substring(i, i + target.length()).equals(target))
    {
        count++;
    }
}
System.out.println(count);`;

const RUNTIME = `int count = 0;
for (int i = 0; i < n; i++)
{
    for (int j = i; j < n; j++)
    {
        count++;
    }
}`;

const SONG = (fields, mods) => `class Song
{
${fields}

    public Song(String t, String a, int s)
    {
        title = t;
        artist = a;
        seconds = s;
    }

    public String getTitle()
    {
        return title;
    }

    public int getSeconds()
    {
        return seconds;
    }
}`;
const SONG_KEY = "private String title;\nprivate String artist;\nprivate int seconds;";
const SONG_PUB = "public String title;\npublic String artist;\npublic int seconds;";
const SONG_STR = "private String title;\nprivate String artist;\nprivate String seconds;";
const SONG_STATIC = "private static String title;\nprivate static String artist;\nprivate static int seconds;";
const ind = (s, n) => s.split("\n").map((l) => " ".repeat(n) + l).join("\n");
const SONG_RUN = `Song a = new Song("Morning Light", "The Tides", 125);
Song b = new Song("Blue Hour", "June Park", 183);
System.out.println(a.getTitle() + " " + (a.getSeconds() + b.getSeconds()));`;

const PLAYER = `class Player
{
    private String name;
    private int jersey;

    public Player(String name, int number)
    {
        name = name;
        jersey = number;
    }

    public String getName()
    {
        return name;
    }

    public int getJersey()
    {
        return jersey;
    }
}`;

const THERMO = (body) => `class Thermostat
{
    private int setting;
    private int max;

    public Thermostat(int start, int highest)
    {
        setting = start;
        max = highest;
    }

    /** Raises the setting by amount, but never above max.
     *  Precondition: amount > 0
     */
    public void raise(int amount)
    {
${ind(body, 8)}
    }

    public int getSetting()
    {
        return setting;
    }
}`;
const THERMO_RUN = `Thermostat t = new Thermostat(68, 72);
t.raise(3);
System.out.println(t.getSetting());
t.raise(3);
System.out.println(t.getSetting());
Thermostat u = new Thermostat(60, 70);
u.raise(10);
System.out.println(u.getSetting());`;
const TH_KEY = "setting += amount;\nif (setting > max)\n{\n    setting = max;\n}";
const TH_D1 = "if (setting + amount < max)\n{\n    setting += amount;\n}";
const TH_D2 = "if (setting > max)\n{\n    setting = max;\n}\nsetting += amount;";
const TH_D3 = "int setting = setting + amount;\nif (setting > max)\n{\n    setting = max;\n}";

const RAFFLE_CLASS = `class RaffleEntry
{
    private static int sold = 0;
    private int number;

    public RaffleEntry()
    {
        sold++;
        number = sold;
    }

    public int getNumber()
    {
        return number;
    }

    public static int getSold()
    {
        return sold;
    }
}`;

const LOCKER = `class Locker
{
    private int combo;

    public Locker(int c)
    {
        combo = c;
    }

    public void setCombo(int c)
    {
        combo = c;
    }

    public int getCombo()
    {
        return combo;
    }
}`;

const RESET = `public static void reset(Locker k)
{
    k.setCombo(0);
    k = new Locker(99);
    k.setCombo(5);
}`;

const CLASSROOM = `class Classroom
{
    private int seats;

    public Classroom(int seats)
    {
        this.seats = seats;
    }

    public Classroom bigger(Classroom other)
    {
        if (other.seats > seats)
        {
            return other;
        }
        return this;
    }

    public int getSeats()
    {
        return seats;
    }
}`;

const RISES = (loop) => `int[] highs = {70, 72, 72, 68, 75, 80};
int rises = 0;
${loop}
System.out.println(rises);`;
const R_KEY = "for (int i = 1; i < highs.length; i++)\n{\n    if (highs[i] > highs[i - 1])\n    {\n        rises++;\n    }\n}";
const R_D1 = "for (int i = 0; i < highs.length; i++)\n{\n    if (highs[i + 1] > highs[i])\n    {\n        rises++;\n    }\n}";
const R_D2 = "for (int i = 1; i < highs.length - 1; i++)\n{\n    if (highs[i] > highs[i - 1])\n    {\n        rises++;\n    }\n}";
const R_D3 = "for (int h : highs)\n{\n    if (h > h - 1)\n    {\n        rises++;\n    }\n}";

const SETLIST = `Scanner sc = new Scanner(new File("set.txt"));
int total = 0;
int most = 0;
String longest = "";
while (sc.hasNext())
{
    String title = sc.next();
    int min = sc.nextInt();
    total += min;
    if (min > most)
    {
        most = min;
        longest = title;
    }
}
sc.close();
System.out.println(longest + " " + total);`;
const SET_TXT = "Overture 6\nWaltz 4\nFinale 6\nMarch 3\n";

const INSERT = (cond) => `/** Inserts value into list so that list stays in order from least to greatest.
 *  Precondition: list is in order from least to greatest.
 */
public static void insertInOrder(ArrayList<Integer> list, int value)
{
    int i = 0;
    while (${cond})
    {
        i++;
    }
    list.add(i, value);
}`;
const INSERT_RUN = `ArrayList<Integer> times = new ArrayList<Integer>();
times.add(3);
times.add(8);
times.add(12);
insertInOrder(times, 10);
insertInOrder(times, 15);
insertInOrder(times, 1);
System.out.println(times);`;
const IN_KEY = "i < list.size() && list.get(i) < value";
const IN_D1 = "list.get(i) < value && i < list.size()";
const IN_D2 = "i < list.size() || list.get(i) < value";
const IN_D3 = "i < list.size() && list.get(i) > value";

const RAIN2D = `int[][] rain = { {2, 0, 5, 1},
                 {4, 3, 1, 6},
                 {1, 7, 2, 0} };
for (int c = 0; c < rain[0].length; c += 2)
{
    int total = 0;
    for (int r = 0; r < rain.length; r++)
    {
        total += rain[r][c];
    }
    System.out.print(total + " ");
}`;

const MYSTERY = `public static int mystery(int[][] scores)
{
    int result = 0;
    for (int r = 0; r < scores.length; r++)
    {
        boolean ok = true;
        for (int c = 1; c < scores[r].length; c++)
        {
            if (scores[r][c] < scores[r][c - 1])
            {
                ok = false;
            }
        }
        if (ok)
        {
            result++;
        }
    }
    return result;
}`;
// The three wrong descriptions, written as methods, to show each gives a different value for the same grid.
const MYSTERY_ALT = `public static int strictRows(int[][] s)
{
    int result = 0;
    for (int r = 0; r < s.length; r++)
    {
        boolean ok = true;
        for (int c = 1; c < s[r].length; c++)
        {
            if (s[r][c] <= s[r][c - 1])
            {
                ok = false;
            }
        }
        if (ok)
        {
            result++;
        }
    }
    return result;
}

public static int columns(int[][] s)
{
    int result = 0;
    for (int c = 0; c < s[0].length; c++)
    {
        boolean ok = true;
        for (int r = 1; r < s.length; r++)
        {
            if (s[r][c] < s[r - 1][c])
            {
                ok = false;
            }
        }
        if (ok)
        {
            result++;
        }
    }
    return result;
}

public static int values(int[][] s)
{
    int result = 0;
    for (int r = 0; r < s.length; r++)
    {
        for (int c = 1; c < s[r].length; c++)
        {
            if (s[r][c] >= s[r][c - 1])
            {
                result++;
            }
        }
    }
    return result;
}`;
const GRID = "int[][] scores = { {70, 80, 80}, {90, 85, 95}, {60, 75, 88} };";

const FIND = `public static int findName(String[] names, String target)
{
    for (int i = 0; i < names.length; i++)
    {
        if (names[i].equals(target))
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

const ISORT = (marker) => `public static void insertionSort(int[] arr)
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
${ind(marker, 8)}
    }
}`;
const ISORT_PRINT = `if (j == 2)
{
    String s = "{";
    for (int i = 0; i < arr.length; i++)
    {
        s += arr[i];
        if (i < arr.length - 1)
        {
            s += ", ";
        }
    }
    System.out.println(s + "}");
}`;

const BEAT = `public static void beat(int n)
{
    if (n > 0)
    {
        System.out.print(n + " ");
        beat(n - 2);
        System.out.print(n + " ");
    }
}`;

const BSEARCH = `public static int binarySearch(int[] arr, int target)
{
    int low = 0;
    int high = arr.length - 1;
    while (low <= high)
    {
        int mid = (low + high) / 2;
        System.out.print(arr[mid] + " ");
        if (arr[mid] == target)
        {
            return mid;
        }
        else if (arr[mid] < target)
        {
            low = mid + 1;
        }
        else
        {
            high = mid - 1;
        }
    }
    return -1;
}`;

// ---------- Section II code ----------

const F1_GIVEN = `public class ReadingLog
{
    /** The number of days in the log, at least 1 */
    private int numDays;

    /** The titles of the books read, separated by ";" with no spaces
     *  around each ";", such as "Holes;The Giver;Wonder".
     *  Holds at least one title, and no title is empty.
     */
    private String books;

    /** Returns the number of pages read on the given day
     *  Precondition: 1 <= day <= numDays
     */
    public int getPages(int day)
    { /* implementation not shown */ }

    /** Returns the greatest number of days in a row on which
     *  at least goal pages were read, as described in part (a)
     *  Precondition: goal > 0
     */
    public int longestStreak(int goal)
    { /* to be implemented in part (a) */ }

    /** Returns the longest title in books, as described in part (b)
     *  Postcondition: books is unchanged.
     */
    public String longestTitle()
    { /* to be implemented in part (b) */ }

    /* There may be instance variables, constructors, and methods
       that are not shown. */
}`;

const F1_SOL = `public int longestStreak(int goal)
{
    int best = 0;
    int streak = 0;
    for (int day = 1; day <= numDays; day++)
    {
        if (getPages(day) >= goal)
        {
            streak++;
            if (streak > best)
            {
                best = streak;
            }
        }
        else
        {
            streak = 0;
        }
    }
    return best;
}

public String longestTitle()
{
    String rest = books;
    String best = "";
    while (rest.length() > 0)
    {
        int semi = rest.indexOf(";");
        String title;
        if (semi == -1)
        {
            title = rest;
            rest = "";
        }
        else
        {
            title = rest.substring(0, semi);
            rest = rest.substring(semi + 1);
        }
        if (title.length() > best.length())
        {
            best = title;
        }
    }
    return best;
}`;

const F1_CLASS = `class ReadingLog
{
    private int numDays;
    private String books;
    private int[] pages;

    public ReadingLog(int[] p, String b)
    {
        pages = p;
        numDays = p.length;
        books = b;
    }

    public int getPages(int day)
    {
        return pages[day - 1];
    }

    public String getBooks()
    {
        return books;
    }

${ind(F1_SOL, 4)}
}`;

const F2_SOL = `public class ShootingDrill
{
    private int target;
    private int made;
    private int attempts;

    public ShootingDrill(int goal)
    {
        target = goal;
        made = 0;
        attempts = 0;
    }

    public String recordShot(boolean isMade)
    {
        if (made >= target)
        {
            return "Drill complete";
        }
        attempts++;
        if (isMade)
        {
            made++;
        }
        if (made == target)
        {
            return "Finished in " + attempts + " shots";
        }
        return made + " of " + attempts;
    }
}`;

const F3_GIVEN = `public class Song
{
    /** Returns the title of the song */
    public String getTitle()
    { /* implementation not shown */ }

    /** Returns the genre of the song, such as "jazz" or "pop" */
    public String getGenre()
    { /* implementation not shown */ }

    /** Returns the length of the song, in seconds */
    public int getSeconds()
    { /* implementation not shown */ }

    /* There may be instance variables, constructors, and methods
       that are not shown. */
}

public class Playlist
{
    /** The songs in the playlist, in play order. No element is null. */
    private ArrayList<Song> songs;

    /** Removes from songs every song whose genre is equal to genre
     *  and whose length is greater than limit seconds, and returns
     *  the total length, in seconds, of the songs removed.
     *  The songs that remain stay in their original order.
     *  Precondition: limit > 0
     */
    public int removeLong(String genre, int limit)
    { /* to be implemented */ }

    /* There may be instance variables, constructors, and methods
       that are not shown. */
}`;

const F3_SOL = `public int removeLong(String genre, int limit)
{
    int total = 0;
    for (int i = songs.size() - 1; i >= 0; i--)
    {
        Song s = songs.get(i);
        if (s.getGenre().equals(genre) && s.getSeconds() > limit)
        {
            total += s.getSeconds();
            songs.remove(i);
        }
    }
    return total;
}`;

const F3_CLASSES = `class Song
{
    private String title;
    private String genre;
    private int seconds;

    public Song(String t, String g, int s)
    {
        title = t;
        genre = g;
        seconds = s;
    }

    public String getTitle()
    {
        return title;
    }

    public String getGenre()
    {
        return genre;
    }

    public int getSeconds()
    {
        return seconds;
    }
}

class Playlist
{
    private ArrayList<Song> songs;

    public Playlist(ArrayList<Song> list)
    {
        songs = list;
    }

    public String titles()
    {
        String s = "[";
        for (int i = 0; i < songs.size(); i++)
        {
            if (i > 0)
            {
                s += ", ";
            }
            s += songs.get(i).getTitle();
        }
        return s + "]";
    }

${ind(F3_SOL, 4)}
}`;

const F3_LIST = `ArrayList<Song> list = new ArrayList<Song>();
list.add(new Song("Blue Corner", "jazz", 404));
list.add(new Song("Sunrise Drive", "pop", 198));
list.add(new Song("Late Set", "jazz", 324));
list.add(new Song("Low Tide", "jazz", 562));
list.add(new Song("Night Bus", "jazz", 210));
list.add(new Song("Paper Kites", "pop", 245));
Playlist p = new Playlist(list);`;

const F4_GIVEN = `public class Reading
{
    /** Returns the temperature, in degrees Fahrenheit */
    public int getTemp()
    { /* implementation not shown */ }

    /** Returns the wind speed, in miles per hour */
    public int getWind()
    { /* implementation not shown */ }

    /* There may be instance variables, constructors, and methods
       that are not shown. */
}

public class WeatherMap
{
    /** The readings from a rectangular grid of weather stations */
    private Reading[][] grid;

    /** Returns the number of cold spots in grid, as described below
     *  Preconditions: grid has at least two rows and at least
     *                 two columns. No element of grid is null.
     */
    public int countColdSpots()
    { /* to be implemented */ }

    /* There may be instance variables, constructors, and methods
       that are not shown. */
}`;

const F4_SOL = `public int countColdSpots()
{
    int count = 0;
    for (int r = 0; r < grid.length; r++)
    {
        for (int c = 0; c < grid[0].length; c++)
        {
            int t = grid[r][c].getTemp();
            boolean cold = true;
            if (r > 0 && grid[r - 1][c].getTemp() <= t)
            {
                cold = false;
            }
            if (r < grid.length - 1 && grid[r + 1][c].getTemp() <= t)
            {
                cold = false;
            }
            if (c > 0 && grid[r][c - 1].getTemp() <= t)
            {
                cold = false;
            }
            if (c < grid[0].length - 1 && grid[r][c + 1].getTemp() <= t)
            {
                cold = false;
            }
            if (cold)
            {
                count++;
            }
        }
    }
    return count;
}`;

const F4_CLASSES = `class Reading
{
    private int temp;
    private int wind;

    public Reading(int t, int w)
    {
        temp = t;
        wind = w;
    }

    public int getTemp()
    {
        return temp;
    }

    public int getWind()
    {
        return wind;
    }
}

class WeatherMap
{
    private Reading[][] grid;

    public WeatherMap(int[][] temps)
    {
        grid = new Reading[temps.length][temps[0].length];
        for (int r = 0; r < temps.length; r++)
        {
            for (int c = 0; c < temps[0].length; c++)
            {
                grid[r][c] = new Reading(temps[r][c], 5);
            }
        }
    }

${ind(F4_SOL, 4)}
}`;

const map = (rows) => `System.out.println(new WeatherMap(new int[][] ${rows}).countColdSpots());`;

const items = [
  // ================= Unit 1 =================
  { id: "apa-01", skill: "types", type: "mcq", topic: "1.3",
    stem: "Consider the following code segment, which reports the goals in a soccer game.",
    code: `int home = 3;
int away = 2;
System.out.println(home + away + " goals, " + home * away + home);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["5 goals, 63", "32 goals, 63", "5 goals, 9", "The code segment does not compile."], mono: true,
    why: [
      "`+` works left to right. `home + away` are two ints, so they add to 5. After the String `\" goals, \"`, each `+` joins text. `home * away` is done first because `*` comes before `+`, so 6 is joined, then 3.",
      "The first `+` has an int on each side, so it adds. Joining starts only once a String is reached.",
      "This adds `6 + 3` as numbers. They come after a String, so they are joined as text: `6` then `3`.",
      "`*` is done before `+`, so `home * away` is an int product joined onto the String. That compiles.",
    ],
    answer: 0,
    verify: { out: "5 goals, 63" } },

  { id: "apa-02", skill: "arith", type: "mcq", topic: "1.5",
    stem: "Consider the following code segment, which works with a week of rainfall totals.",
    code: `int total = 47;
int days = 6;
double a = total / days;
double b = (double) total / days;
System.out.println(a + " " + (int) (b + 0.5) + " " + total % days);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["7.0 8 5", "7.833333333333333 8 5", "7.0 7 5", "7 8 5"], mono: true,
    why: [
      "`total / days` divides two ints, so it is 7 before it is stored as 7.0. `b` keeps the fraction, 7.833..., and adding 0.5 before the cast rounds it to 8. `47 % 6` is 5.",
      "`total / days` is int division, so the fraction is gone before the value reaches `a`.",
      "The cast applies to `b + 0.5`, which is 8.333..., not to `b` alone.",
      "`a` is a `double`, so it prints with a decimal point: 7.0.",
    ],
    answer: 0,
    verify: { out: "7.0 8 5" } },

  { id: "apa-03", skill: "objects", type: "mcq", topic: "1.11",
    stem: "A weather simulation picks a random wind speed with the following statement.",
    code: `int wind = (int) (Math.random() * 6) + 10;`,
    question: "Which of the following describes all the possible values of `wind`?",
    choices: ["Every integer from 10 to 15, inclusive", "Every integer from 10 to 16, inclusive", "Every integer from 0 to 15, inclusive", "Every integer from 11 to 16, inclusive"],
    why: [
      "`Math.random() * 6` is at least 0.0 and less than 6.0. The cast drops the fraction, giving 0 to 5, and adding 10 gives 10 to 15.",
      "`Math.random()` is always less than 1.0, so `Math.random() * 6` never reaches 6.",
      "The 10 is added to every value, so the smallest value is 10, not 0.",
      "The cast can give 0, so the smallest value is 0 + 10, which is 10.",
    ],
    answer: 0,
    verify: { cases: [
      { run: `int lo = 100;
int hi = -1;
for (int i = 0; i < 200000; i++)
{
    int wind = (int) (Math.random() * 6) + 10;
    if (wind < lo)
    {
        lo = wind;
    }
    if (wind > hi)
    {
        hi = wind;
    }
}
System.out.println(lo + " " + hi);`, out: "10 15" },
    ] } },

  { id: "apa-04", skill: "objects", type: "mcq", topic: "1.9",
    stem: "Consider the following method, which finds a student's average score.",
    methods: AVG,
    question: "Which of the following statements, appearing in `main` in the same class, compiles without error?",
    choices: ["double avg = average(85, 4);", "int avg = average(85, 4);", "double avg = average(85.5, 4);", "double avg = average(85);"], mono: true,
    why: [
      "Both arguments are ints, matching the two `int` parameters, and the `double` it returns is stored in a `double`.",
      "The method returns a `double`, and a `double` cannot be stored in an `int` without a cast: `incompatible types: possible lossy conversion from double to int`.",
      "The first parameter is an `int`, and a `double` argument such as 85.5 is not converted to an `int`: `method average in class Main cannot be applied to given types`.",
      "The method has two parameters, so a call must pass two arguments: `method average in class Main cannot be applied to given types`.",
    ],
    answer: 0,
    verify: { cases: [
      { methods: AVG, run: "double avg = average(85, 4);\nSystem.out.println(avg);", out: "21.25" },
      { methods: AVG, run: "int avg = average(85, 4);", error: "incompatible types: possible lossy conversion from double to int" },
      { methods: AVG, run: "double avg = average(85.5, 4);", error: "cannot be applied to given types" },
      { methods: AVG, run: "double avg = average(85);", error: "cannot be applied to given types" },
    ] } },

  { id: "apa-05", skill: "objects", type: "mcq", topic: "1.8",
    stem: "The following method builds a student's initials for a class roster.",
    methods: INIT,
    question: "Which of the following is the most appropriate precondition for `initials`, so that every call that meets it runs without error?",
    choices: [
      "`first` and `last` each have at least one character.",
      "`first` and `last` are not equal to each other.",
      "`first` has at least one character.",
      "`first.length()` is greater than `last.length()`.",
    ],
    why: [
      "`substring(0, 1)` needs at least one character. Both Strings are cut this way, so both must have one.",
      "`initials(\"\", \"Diaz\")` meets this condition and throws a `StringIndexOutOfBoundsException`.",
      "`last` is also cut with `substring(0, 1)`. `initials(\"Ana\", \"\")` meets this condition and throws a `StringIndexOutOfBoundsException`.",
      "`initials(\"Ann\", \"\")` meets this condition and throws a `StringIndexOutOfBoundsException`, and it rules out names that work, such as `initials(\"Al\", \"Diaz\")`.",
    ],
    answer: 0,
    verify: { cases: [
      { methods: INIT_RUN, run: 'System.out.println(initials("J", "D"));\nSystem.out.println(initials("Maya", "Lin"));\nSystem.out.println(initials("Al", "Diaz"));', out: "JD\nML\nAD" },
      { methods: INIT_RUN, run: 'System.out.println(initials("", "Diaz"));', throws: "StringIndexOutOfBoundsException" },
      { methods: INIT_RUN, run: 'System.out.println(initials("Ana", ""));', throws: "StringIndexOutOfBoundsException" },
      { methods: INIT_RUN, run: 'System.out.println(initials("Ann", ""));', throws: "StringIndexOutOfBoundsException" },
    ] } },

  { id: "apa-06", skill: "objects", type: "mcq", topic: "1.13",
    stem: "Consider the following class, which keeps the points on a scoreboard, and the code segment that uses it.",
    classes: SCOREBOARD,
    code: `Scoreboard a = new Scoreboard(5);
Scoreboard b = a;
b.addPoints(3);
a = new Scoreboard(2);
a.addPoints(1);
System.out.println(a.getPoints() + " " + b.getPoints());`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["3 8", "3 5", "3 3", "The code segment does not compile."], mono: true,
    why: [
      "`b = a` copies the reference, so `b.addPoints(3)` changes the one object to 8. Then `a` is given a new object, which ends at 3. `b` still refers to the first object.",
      "`b = a` does not copy the object. Both variables refer to the same `Scoreboard`, so adding through `b` changes it.",
      "Giving `a` a new object does not move `b`. `b` still refers to the first `Scoreboard`.",
      "A variable can be given a new object after it is declared, so `a = new Scoreboard(2);` compiles.",
    ],
    answer: 0,
    verify: { out: "3 8" } },

  { id: "apa-07", skill: "arith", type: "mcq", topic: "1.6",
    stem: "Consider the following code segment, which converts a runner's race time from seconds to hours, minutes, and seconds.",
    code: `int secs = 4000;
int h = secs / 3600;
secs %= 3600;
int m = secs / 60;
secs %= 60;
System.out.println(h + ":" + m + ":" + secs);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["1:6:40", "1:66:40", "1:6:400", "1:6:6"], mono: true,
    why: [
      "4000 / 3600 is 1. `secs %= 3600` leaves 400. 400 / 60 is 6, and `secs %= 60` leaves 40.",
      "This skips `secs %= 3600`. The remainder 400 is stored in `secs` before the minutes are found, so `m` is 400 / 60.",
      "This skips the last line. `secs %= 60` changes `secs` from 400 to 40.",
      "`%=` stores the remainder, not the quotient. 400 % 60 is 40.",
    ],
    answer: 0,
    verify: { out: "1:6:40" } },

  { id: "apa-08", skill: "objects", type: "mcq", topic: "1.15",
    stem: "Consider the following code segment.",
    code: `String course = "Algebra II Honors";
int sp = course.indexOf(" ");
String a = course.substring(0, sp);
String b = course.substring(sp + 1, sp + 3);
System.out.println(b + a.substring(4));`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["IIbra", "II bra", "IIebra", " Ibra"], mono: true,
    why: [
      "The first space is at index 7, so `a` is `\"Algebra\"` and `b` is `course.substring(8, 10)`, which is `\"II\"`. `a.substring(4)` starts at index 4: `\"bra\"`.",
      "The end index of `substring` is not included. `substring(8, 10)` is the characters at 8 and 9 only.",
      "Indexes start at 0. Index 4 of `\"Algebra\"` is `b`, not `e`.",
      "This starts `b` at the space. The code starts at `sp + 1`, one past the space.",
    ],
    answer: 0,
    verify: { out: "IIbra" } },

  { id: "apa-09", skill: "objects", type: "mcq", topic: "1.15",
    stem: "Consider the following code segment, which works with a tempo marking from a piece of music.",
    code: `String tempo = "allegro";
int k = tempo.indexOf("e");
String part = tempo.substring(k + 1);
System.out.println(part + tempo.substring(k + 2, k + 5));`,
    question: "What is the result of executing the code segment?",
    choices: ["A `StringIndexOutOfBoundsException` is thrown.", "`groro` is printed.", "`gro` is printed.", "`grogro` is printed."],
    why: [
      "`k` is 3, so `part` is `\"gro\"`. The second call is `substring(5, 8)`, and `\"allegro\"` has length 7. An end index greater than the length throws.",
      "`substring` does not stop early at the end of the String. An end index past `length()` throws a `StringIndexOutOfBoundsException`.",
      "The second `substring` call is evaluated before anything prints, and it throws.",
      "`k + 2` is 5, which is the `r`, not the `g`, and the call throws before anything prints.",
    ],
    answer: 0,
    verify: { throws: "StringIndexOutOfBoundsException" } },

  // ================= Unit 2 =================
  { id: "apa-10", skill: "if", type: "mcq", topic: "2.4",
    stem: "The following code segment sets a weather alert. The variables `temp` and `wind` are `int` variables that have been properly declared and initialized.",
    code: ALERT,
    question: "Which of the following statements about the code segment is true?",
    choices: [
      "`alert` is never set to `\"extreme\"`, for any values of `temp` and `wind`.",
      "`alert` is set to `\"heat\"` only when `temp` is from 91 to 100.",
      "`alert` is set to `\"freeze\"` whenever `temp` is less than 32.",
      "`alert` is never set to `\"windchill\"`, for any values of `temp` and `wind`.",
    ],
    why: [
      "Any `temp` greater than 100 is also greater than 90, so the first test catches it, and an else if chain stops at the first true test.",
      "`temp > 90` is true for 105 too, and the first true test wins, so 105 gives `\"heat\"`.",
      "When `temp < 32` and `wind > 20`, the windchill test comes first and is true, so `\"freeze\"` is never reached.",
      "The windchill test is reached whenever `temp` is 90 or less, and `temp` of 20 with `wind` of 30 makes it true.",
    ],
    answer: 0,
    verify: { cases: [
      { run: `boolean extreme = false;
boolean heatAbove100 = false;
boolean coldNoFreeze = false;
boolean windchill = false;
for (int temp = -40; temp <= 130; temp++)
{
    for (int wind = 0; wind <= 60; wind++)
    {
${ind(ALERT, 8)}
        if (alert.equals("extreme"))
        {
            extreme = true;
        }
        if (alert.equals("heat") && temp > 100)
        {
            heatAbove100 = true;
        }
        if (temp < 32 && !alert.equals("freeze"))
        {
            coldNoFreeze = true;
        }
        if (alert.equals("windchill"))
        {
            windchill = true;
        }
    }
}
System.out.println(extreme + " " + heatAbove100 + " " + coldNoFreeze + " " + windchill);`, out: "false true true true" },
    ] } },

  { id: "apa-11", skill: "bool", type: "mcq", topic: "2.6",
    stem: "Assume that `laps` and `lane` are `int` variables that have been properly declared and initialized.",
    question: "Which of the following expressions is equivalent to `!(laps < 10 || lane != 5)` ?",
    choices: ["laps >= 10 && lane == 5", "laps >= 10 || lane == 5", "laps > 10 && lane == 5", "laps >= 10 && lane != 5"], mono: true,
    why: [
      "De Morgan's law: `!(a || b)` is `!a && !b`. The opposite of `laps < 10` is `laps >= 10`, and the opposite of `lane != 5` is `lane == 5`.",
      "Negating an `||` turns it into `&&`. Keeping `||` is true for `laps` of 3 and `lane` of 5, where the original is false.",
      "The opposite of `<` is `>=`, not `>`. When `laps` is 10 and `lane` is 5, the original is true and this is false.",
      "Both parts must be negated. The opposite of `lane != 5` is `lane == 5`.",
    ],
    answer: 0,
    verify: { cases: [
      { run: equiv("laps", "lane", "!(laps < 10 || lane != 5)", "laps >= 10 && lane == 5", 0, 20), out: "same" },
      { run: equiv("laps", "lane", "!(laps < 10 || lane != 5)", "laps >= 10 || lane == 5", 0, 20), out: "differs" },
      { run: equiv("laps", "lane", "!(laps < 10 || lane != 5)", "laps > 10 && lane == 5", 0, 20), out: "differs" },
      { run: equiv("laps", "lane", "!(laps < 10 || lane != 5)", "laps >= 10 && lane != 5", 0, 20), out: "differs" },
    ] } },

  { id: "apa-12", skill: "bool", type: "mcq", topic: "2.5",
    stem: "Consider the following code segment, which labels a player who has not played a game yet.",
    code: `int games = 0;
int goals = 12;
String label;
if (games > 0 && goals / games >= 2)
{
    label = "star";
}
else if (goals / 4 > 2 || goals / games > 1)
{
    label = "solid";
}
else
{
    label = "rookie";
}
System.out.println(label);`,
    question: "What is the result of executing the code segment?",
    choices: ["`solid` is printed.", "`star` is printed.", "`rookie` is printed.", "An `ArithmeticException` is thrown."],
    why: [
      "`games > 0` is false, so `&&` skips `goals / games`. In the second test, `goals / 4 > 2` is true, so `||` skips `goals / games`. Neither division by 0 runs.",
      "`games > 0` is false, so the first test is false without checking the rest.",
      "`goals / 4` is 3, and 3 > 2 is true, so the second test is true.",
      "Short-circuit evaluation skips both `goals / games` expressions: `&&` stops at a false left side, and `||` stops at a true left side.",
    ],
    answer: 0,
    verify: { out: "solid" } },

  { id: "apa-13", skill: "while", type: "mcq", topic: "2.7",
    stem: "Consider the following code segment, which models water draining from a rain barrel each day.",
    code: `int water = 50;
int days = 0;
while (water > 4)
{
    water = water - water / 3;
    days++;
}
System.out.println(days + " " + water);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["7 4", "6 6", "8 3", "Nothing is printed, because the loop never ends."], mono: true,
    why: [
      "`water` goes 50, 34, 23, 16, 11, 8, 6, 4, one day each. At 4, `water > 4` is false and the loop stops after 7 days.",
      "This stops one pass early. 6 is still greater than 4, so the loop runs once more.",
      "This runs while `water >= 4`. When `water` is 4, `water > 4` is false.",
      "`water / 3` is at least 1 while `water` is 3 or more, so `water` keeps going down until the condition is false.",
    ],
    answer: 0,
    verify: { out: "7 4" } },

  { id: "apa-14", skill: "for", type: "mcq", topic: "2.8",
    stem: "Consider the following code segment, which marks the claps in a rhythm exercise.",
    code: `for (int beat = 3; beat <= 30; beat += 4)
{
    System.out.println("clap " + beat);   // line 3
}`,
    question: "How many times is the statement in line 3 executed?",
    choices: ["7", "8", "6", "28"],
    why: [
      "`beat` takes the values 3, 7, 11, 15, 19, 23, and 27. The next value, 31, is greater than 30.",
      "This counts 31. The loop stops when `beat` is 31, before the body runs.",
      "This leaves out the first value. The body runs with `beat` equal to 3 before the first update.",
      "This counts every integer from 3 to 30. `beat += 4` skips three values each time.",
    ],
    answer: 0,
    verify: { out: "clap 3\nclap 7\nclap 11\nclap 15\nclap 19\nclap 23\nclap 27" } },

  { id: "apa-15", skill: "algo", type: "mcq", topic: "2.9",
    stem: "A school raffle gives a prize to every ticket number from 1 to 100 that is divisible by 3 or by 5, but not by both. The following code segment is intended to print the number of prize tickets.",
    code: RAFFLE("/* missing condition */"),
    question: "Which of the following can replace `/* missing condition */` so that the code segment works as intended?",
    choices: [
      "(n % 3 == 0 || n % 5 == 0) && n % 15 != 0",
      "n % 3 == 0 || n % 5 == 0",
      "(n % 3 == 0 || n % 5 == 0) && n % 15 == 0",
      "n % 3 == 0 || n % 5 == 0 && n % 15 != 0",
    ], mono: true,
    why: [
      "A number divisible by both 3 and 5 is divisible by 15. This keeps numbers divisible by 3 or 5 and removes the multiples of 15, printing 41.",
      "This also counts the six numbers divisible by both, such as 15 and 30, printing 47.",
      "This counts only the numbers divisible by both, printing 6.",
      "`&&` is done before `||`, so `n % 15 != 0` applies only to the 5 test. Multiples of 15 are still counted by `n % 3 == 0`, printing 47.",
    ],
    answer: 0,
    verify: { cases: [
      { run: RAFFLE("(n % 3 == 0 || n % 5 == 0) && n % 15 != 0"), out: "41" },
      { run: RAFFLE("n % 3 == 0 || n % 5 == 0"), out: "47" },
      { run: RAFFLE("(n % 3 == 0 || n % 5 == 0) && n % 15 == 0"), out: "6" },
      { run: RAFFLE("n % 3 == 0 || n % 5 == 0 && n % 15 != 0"), out: "47" },
    ] } },

  { id: "apa-16", skill: "string", type: "mcq", topic: "2.10",
    stem: "Consider the following code segment.",
    code: `String word = "fortissimo";
String result = "";
for (int i = word.length() - 1; i >= 0; i -= 3)
{
    result += word.substring(i, i + 1);
}
System.out.println(result);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["ostf", "ftso", "ost", "A `StringIndexOutOfBoundsException` is thrown."], mono: true,
    why: [
      "`\"fortissimo\"` has length 10, so `i` takes the values 9, 6, 3, and 0: `o`, `s`, `t`, and `f`.",
      "These are the same letters in the wrong order. The loop starts at the last index and counts down.",
      "The condition is `i >= 0`, so the loop also runs when `i` is 0 and adds `f`.",
      "When `i` is 9, `substring(9, 10)` is legal: the end index may equal the length.",
    ],
    answer: 0,
    verify: { out: "ostf" } },

  { id: "apa-17", skill: "string", type: "mcq", topic: "2.10",
    stem: "The following code segment is intended to count the number of times `target` appears in `lyric`.",
    code: LYRIC("/* missing code */"),
    question: "Which of the following can replace `/* missing code */` so that the code segment works as intended?",
    choices: [
      "int i = 0; i <= lyric.length() - target.length(); i++",
      "int i = 0; i < lyric.length() - target.length(); i++",
      "int i = 0; i < lyric.length(); i++",
      "int i = 1; i <= lyric.length() - target.length(); i++",
    ], mono: true,
    why: [
      "The last place a two-letter `target` can start is index 10 in a String of length 12. This loop checks every start from 0 to 10 and prints 4.",
      "This stops at 9, so the `\"na\"` that starts at index 10 is missed and 3 is printed.",
      "When `i` is 11, `substring(11, 13)` goes past the end and throws a `StringIndexOutOfBoundsException`.",
      "This starts at index 1, so the `\"na\"` at index 0 is missed and 3 is printed.",
    ],
    answer: 0,
    verify: { cases: [
      { run: LYRIC("int i = 0; i <= lyric.length() - target.length(); i++"), out: "4" },
      { run: LYRIC("int i = 0; i < lyric.length() - target.length(); i++"), out: "3" },
      { run: LYRIC("int i = 0; i < lyric.length(); i++"), throws: "StringIndexOutOfBoundsException" },
      { run: LYRIC("int i = 1; i <= lyric.length() - target.length(); i++"), out: "3" },
    ] } },

  { id: "apa-18", skill: "nested", type: "mcq", topic: "2.11",
    stem: "Consider the following code segment.",
    code: `int count = 0;
for (int r = 1; r <= 5; r++)
{
    for (int c = 1; c * r <= 6; c++)
    {
        count++;
    }
}
System.out.println(count);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["13", "10", "30", "6"], mono: true,
    why: [
      "The inner loop runs while `c * r <= 6`: 6 times when `r` is 1, then 3, 2, 1, and 1. The total is 13.",
      "This uses `c * r < 6`. With `<=`, products equal to 6, such as 2 times 3, are also counted.",
      "The inner loop does not always run 6 times. Its condition depends on `r`.",
      "This counts only the passes when `r` is 1. The outer loop runs 5 times.",
    ],
    answer: 0,
    verify: { out: "13" } },

  { id: "apa-19", skill: "nested", type: "mcq", topic: "2.11",
    stem: "Consider the following code segment, which prints seat labels for the rows of a small auditorium.",
    code: `String rows = "ABC";
for (int r = 0; r < rows.length(); r++)
{
    for (int seat = 1; seat <= r + 1; seat++)
    {
        System.out.print(rows.substring(r, r + 1) + seat + " ");
    }
    System.out.println();
}`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["A1\nB1 B2\nC1 C2 C3", "A1\nB2 B2\nC3 C3 C3", "A1 B1 C1\nB2 C2\nC3", "A0\nB0 B1\nC0 C1 C2"], mono: true,
    why: [
      "Row `r` gets `r + 1` seats, numbered from 1. The `println` after the inner loop ends each row.",
      "This prints the number of seats in the row on every label. The code prints `seat`, which counts up from 1.",
      "Each line comes from one pass of the outer loop, so every label on a line has the same letter.",
      "`seat` starts at 1, not 0.",
    ],
    answer: 0,
    verify: { out: "A1\nB1 B2\nC1 C2 C3" } },

  { id: "apa-20", skill: "runtime", type: "mcq", topic: "2.12",
    stem: "Consider the following code segment. Assume that `n` is a positive `int` that has been properly declared and initialized.",
    code: RUNTIME,
    question: "Which of the following expressions is equal to the value of `count` after the code segment runs?",
    choices: ["n * (n + 1) / 2", "n * n", "n * (n - 1) / 2", "2 * n"], mono: true,
    why: [
      "The inner loop runs `n` times when `i` is 0, then `n - 1` times, down to 1 time. The sum 1 + 2 + ... + n is `n * (n + 1) / 2`. For `n` of 6, that is 21.",
      "The inner loop starts at `j = i`, so it runs fewer times on each pass. For `n` of 6, `count` is 21, not 36.",
      "This leaves out the last pass of each inner loop. `j` starts at `i`, so the inner loop runs at least once. For `n` of 6, this is 15.",
      "The inner loop runs more than twice on most passes. For `n` of 6, this is 12.",
    ],
    answer: 0,
    verify: { cases: [
      { run: `int n = 6;\n${RUNTIME}\nSystem.out.println(count + " " + n * (n + 1) / 2);`, out: "21 21" },
      { run: `int n = 6;\n${RUNTIME}\nSystem.out.println(count + " " + n * n);`, out: "21 36" },
      { run: `int n = 6;\n${RUNTIME}\nSystem.out.println(count + " " + n * (n - 1) / 2);`, out: "21 15" },
      { run: `int n = 6;\n${RUNTIME}\nSystem.out.println(count + " " + 2 * n);`, out: "21 12" },
    ] } },

  // ================= Unit 3 =================
  { id: "apa-21", skill: "classes", type: "mcq", topic: "3.3",
    stem: "A programmer is writing a `Song` class for a music app. Each `Song` object stores its own title, its artist, and its length in whole seconds. Code in other classes must not be able to change these values directly.",
    question: "Which of the following is the most appropriate set of instance variable declarations for the `Song` class?",
    choices: [SONG_KEY, SONG_PUB, SONG_STR, SONG_STATIC], mono: true,
    why: [
      "`private` keeps other classes from changing the values directly, and a length in whole seconds is an `int`.",
      "`public` instance variables can be changed from any class, for example `a.title = \"Oops\";`.",
      "A length in seconds is a number. Stored as a `String`, it cannot be added or compared as a number.",
      "`static` gives one copy shared by every `Song`, so each new `Song` replaces the values of all the others.",
    ],
    answer: 0,
    verify: { cases: [
      { classes: SONG(ind(SONG_KEY, 4)), run: SONG_RUN, out: "Morning Light 308" },
      { classes: SONG(ind(SONG_KEY, 4)), run: SONG_RUN + '\na.title = "Oops";', error: "has private access in Song" },
      { classes: SONG(ind(SONG_PUB, 4)), run: SONG_RUN + '\na.title = "Oops";\nSystem.out.println(a.getTitle());', out: "Morning Light 308\nOops" },
      { classes: SONG(ind(SONG_STATIC, 4)), run: SONG_RUN, out: "Blue Hour 366" },
    ] } },

  { id: "apa-22", skill: "classes", type: "mcq", topic: "3.4",
    stem: "Consider the following class, which represents a player on a team roster, and the code segment that uses it.",
    classes: PLAYER,
    code: `Player p = new Player("Ana", 7);
System.out.println(p.getName() + " " + p.getJersey());`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["null 7", "Ana 7", " 7", "The code segment does not compile."], mono: true,
    why: [
      "Inside the constructor, `name` means the parameter, so `name = name;` sets the parameter to itself. The instance variable keeps its default value, `null`.",
      "The parameter has the same name as the instance variable and hides it. Setting the instance variable takes `this.name = name;`.",
      "The default value of a `String` instance variable is `null`, not the empty String.",
      "`name = name;` compiles. It assigns the parameter to itself, which changes nothing.",
    ],
    answer: 0,
    verify: { out: "null 7" } },

  { id: "apa-23", skill: "classes", type: "mcq", topic: "3.5",
    stem: "Consider the following class, which represents a classroom thermostat.",
    code: THERMO("/* missing code */"),
    question: "Which of the following can replace `/* missing code */` so that `raise` works as intended?",
    choices: [TH_KEY, TH_D1, TH_D2, TH_D3], mono: true,
    why: [
      "It adds `amount`, then brings the setting back down to `max` if it went over.",
      "When the new setting would be exactly `max`, or past it, this changes nothing. A thermostat at 71 with a `max` of 72 stays at 71 after `raise(3)`, instead of going to 72.",
      "This checks before adding, so the addition can go past `max`. A thermostat at 68 with a `max` of 72 goes to 74 after two calls to `raise(3)`.",
      "This declares a local variable named `setting` that hides the instance variable, and uses it in its own declaration: `variable setting might not have been initialized`.",
    ],
    answer: 0,
    verify: { cases: [
      { classes: THERMO(TH_KEY), run: THERMO_RUN, out: "71\n72\n70" },
      { classes: THERMO(TH_D1), run: THERMO_RUN, out: "71\n71\n60" },
      { classes: THERMO(TH_D2), run: THERMO_RUN, out: "71\n74\n70" },
      { classes: THERMO(TH_D3), run: THERMO_RUN, error: "might not have been initialized" },
    ] } },

  { id: "apa-24", skill: "classes", type: "mcq", topic: "3.7",
    stem: "Consider the following class, which numbers the entries in a school raffle, and the code segment that uses it.",
    classes: RAFFLE_CLASS,
    code: `RaffleEntry a = new RaffleEntry();
RaffleEntry b = new RaffleEntry();
RaffleEntry c = new RaffleEntry();
System.out.println(a.getNumber() + " " + c.getNumber() + " " + RaffleEntry.getSold());`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["1 3 3", "1 1 1", "3 3 3", "0 2 3"], mono: true,
    why: [
      "`sold` is `static`, so there is one copy for the whole class. Each constructor call adds 1 to it and copies the new value into that object's own `number`.",
      "This treats `sold` as an instance variable. A `static` variable is shared, so it counts every entry made.",
      "`number = sold;` copies the value at that moment. Later changes to `sold` do not change `number`.",
      "`sold++` runs before `number = sold;`, so the first entry gets 1.",
    ],
    answer: 0,
    verify: { out: "1 3 3" } },

  { id: "apa-25", skill: "classes", type: "mcq", topic: "3.6",
    stem: "Consider the following `Locker` class and the static method `reset`, which appears in another class.",
    classes: LOCKER,
    methods: RESET,
    code: `Locker mine = new Locker(1234);
reset(mine);
System.out.println(mine.getCombo());`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["0", "1234", "5", "99"], mono: true,
    why: [
      "`k` starts as a copy of the reference in `mine`, so `k.setCombo(0)` changes the same `Locker`. Then `k` is given a new object, and the later calls change only that new object.",
      "Passing an object copies the reference, not the object. `k.setCombo(0)` changes the `Locker` that `mine` refers to.",
      "After `k = new Locker(99);`, `k` refers to a different object. `mine` is not changed by assigning to `k`.",
      "The new `Locker(99)` is a separate object, and `mine` never refers to it.",
    ],
    answer: 0,
    verify: { out: "0" } },

  { id: "apa-26", skill: "classes", type: "mcq", topic: "3.9",
    stem: "Consider the following class, which represents a classroom, and the code segment that uses it.",
    classes: CLASSROOM,
    code: `Classroom a = new Classroom(30);
Classroom b = new Classroom(24);
Classroom c = new Classroom(30);
Classroom x = b.bigger(a);
Classroom y = a.bigger(c);
System.out.println((x == a) + " " + (y == c) + " " + y.getSeats());`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["true false 30", "true true 30", "false false 30", "The code segment does not compile."], mono: true,
    why: [
      "`b.bigger(a)` returns `a`, since 30 > 24. In `a.bigger(c)`, 30 > 30 is false, so it returns `this`, which is `a`. `y` and `c` are different objects with the same seats.",
      "`==` on objects compares references, not seats. `y` refers to `a`, and `c` is a different object.",
      "`bigger` returns an existing object, `other` or `this`. It does not make a copy, so `x == a` is true.",
      "Code inside `Classroom` may use the `private` variables of any `Classroom` object, so `other.seats` compiles.",
    ],
    answer: 0,
    verify: { out: "true false 30" } },

  // ================= Unit 4 =================
  { id: "apa-27", skill: "files", type: "mcq", topic: "4.1",
    stem: "A school app stores each student's record as one `String`: the student ID, the grade level, and the home ZIP code, separated by commas. Before the records are shared with a research group, the following code segment removes the ID.",
    code: `String record = "40917,11,91311";
String shared = record.substring(record.indexOf(",") + 1);
System.out.println(shared);
System.out.println(record);`,
    question: "Which of the following best describes a concern that remains when the shared records are sent?",
    choices: [
      "A student could still be identified by combining the grade level and ZIP code with other information.",
      "`shared` still holds the ID, because `substring` does not remove any characters from a String.",
      "The original data is lost, because the call to `substring` changes the contents of `record`.",
      "No concern remains, because a record without a name or an ID cannot be connected to a person.",
    ],
    why: [
      "In a small grade at one school, a grade level and a ZIP code together can point to one student, even with the ID removed.",
      "`shared` is a new String that starts after the first comma: `\"11,91311\"`. The ID is not in it.",
      "Strings cannot be changed. `substring` returns a new String, and `record` still prints in full.",
      "Data with no name can still identify a person when a few details, such as a grade level and a ZIP code, are combined.",
    ],
    answer: 0,
    verify: { out: "11,91311\n40917,11,91311" } },

  { id: "apa-28", skill: "arrays", type: "mcq", topic: "4.3",
    stem: "Consider the following code segment.",
    code: `String[] seats = new String[3];
seats[0] = "Kim";
int[] scores = new int[3];
scores[2] = seats[0].length();
System.out.println(seats[1] + " " + scores[0] + scores[2]);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["null 03", " 03", "null 3", "A `NullPointerException` is thrown."], mono: true,
    why: [
      "A new `String` array holds `null` in every element and a new `int` array holds 0. After the String `\" \"`, `0` and `3` are joined as text.",
      "The default value of a `String` element is `null`, not the empty String, and `null` prints as `null`.",
      "`scores[0] + scores[2]` comes after a String, so the two values are joined, not added.",
      "Joining `null` onto a String prints `null`. Only calling a method on `seats[1]` would throw.",
    ],
    answer: 0,
    verify: { out: "null 03" } },

  { id: "apa-29", skill: "arrays", type: "mcq", topic: "4.4",
    stem: "Consider the following code segment, which works with four days of high temperatures.",
    code: `int[] temps = {61, 58, 70, 64};
for (int t : temps)
{
    t = t + 5;
}
int sum = 0;
for (int i = 0; i < temps.length; i += 2)
{
    sum += temps[i];
}
System.out.println(sum);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["131", "141", "122", "253"], mono: true,
    why: [
      "In an enhanced `for` loop, `t` is a copy of each element, so the array is not changed. The second loop adds indexes 0 and 2: 61 + 70.",
      "Changing `t` does not change the array. Each `t` is a copy.",
      "The second loop starts at index 0, not index 1, so it adds 61 and 70.",
      "`i += 2` skips every other element, so only two values are added.",
    ],
    answer: 0,
    verify: { out: "131" } },

  { id: "apa-30", skill: "arrays", type: "mcq", topic: "4.5",
    stem: "The following code segment is intended to print the number of days on which the high temperature was greater than the high on the day before.",
    code: RISES("/* missing code */"),
    question: "Which of the following can replace `/* missing code */` so that the code segment works as intended?",
    choices: [R_KEY, R_D1, R_D2, R_D3], mono: true,
    why: [
      "Starting at index 1 gives every day a day before it. The rises are 70 to 72, 68 to 75, and 75 to 80, so 3 is printed.",
      "When `i` is the last index, `highs[i + 1]` is past the end and throws an `ArrayIndexOutOfBoundsException`.",
      "This stops before the last index, so the rise from 75 to 80 is missed and 2 is printed.",
      "An enhanced `for` loop gives no index, so `h - 1` is one less than the same temperature, not the day before. Every day counts and 6 is printed.",
    ],
    answer: 0,
    verify: { cases: [
      { run: RISES(R_KEY), out: "3" },
      { run: RISES(R_D1), throws: "ArrayIndexOutOfBoundsException" },
      { run: RISES(R_D2), out: "2" },
      { run: RISES(R_D3), out: "6" },
    ] } },

  { id: "apa-31", skill: "files", type: "mcq", topic: "4.6",
    stem: "A text file named `set.txt` lists the pieces in a band concert, one per line: a one-word title, then its length in minutes. Its contents are shown after the code segment.",
    code: SETLIST,
    log: SET_TXT.trim(),
    question: "What is printed as a result of executing the code segment?",
    choices: ["Overture 19", "Finale 19", "March 19", "An `InputMismatchException` is thrown."], mono: true,
    why: [
      "Each pass reads one title with `next` and one length with `nextInt`. The total is 19. `min > most` is true for Overture's 6 but false for Finale's 6, so Overture is kept.",
      "A tie does not replace the longest piece, because `>` is false when the lengths are equal.",
      "`longest` changes only when a new longest length is found. March, at 3 minutes, is not one.",
      "`next` reads one token, the title, and `nextInt` reads the number after it, so each call gets the type it expects.",
    ],
    answer: 0,
    verify: { out: "Overture 19", files: { "set.txt": SET_TXT } } },

  { id: "apa-32", skill: "arraylist", type: "mcq", topic: "4.7",
    stem: "Consider the following code segment, which works with a list of jersey numbers.",
    code: `ArrayList<Integer> nums = new ArrayList<Integer>();
nums.add(10);
nums.add(2);
nums.add(7);
nums.add(1);
nums.remove(1);
int total = 0;
for (int n : nums)
{
    total += n;
}
System.out.println(nums + " " + total);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["[10, 7, 1] 18", "[10, 2, 7] 19", "[2, 7, 1] 10", "The code segment does not compile."], mono: true,
    why: [
      "`remove(1)` with an `int` argument removes the element at index 1, which is 2. The rest add to 18.",
      "`remove(1)` removes by index, not by value, so the 1 at the end stays.",
      "Indexes start at 0, so index 1 is the second element, 2.",
      "Each `int` is autoboxed to an `Integer` when it is added, and unboxed back to an `int` in the loop.",
    ],
    answer: 0,
    verify: { out: "[10, 7, 1] 18" } },

  { id: "apa-33", skill: "arraylist", type: "mcq", topic: "4.8",
    stem: "Consider the following code segment, which builds a batting lineup.",
    code: `ArrayList<String> lineup = new ArrayList<String>();
lineup.add("Rae");
lineup.add("Kai");
lineup.add(0, "Lu");
lineup.add(2, "Mo");
String old = lineup.set(1, "Zed");
lineup.remove(2);
System.out.println(old + " " + lineup);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["Rae [Lu, Zed, Kai]", "Zed [Lu, Zed, Kai]", "Rae [Lu, Zed, Mo]", "Rae [Lu, Zed, Mo, Kai]"], mono: true,
    why: [
      "The list becomes `[Lu, Rae, Kai]`, then `[Lu, Rae, Mo, Kai]`. `set(1, \"Zed\")` returns the element it replaces, `\"Rae\"`. `remove(2)` then removes `\"Mo\"`.",
      "`set` returns the element that was there before, not the new one.",
      "`add(2, \"Mo\")` puts `\"Mo\"` at index 2 and moves `\"Kai\"` to index 3. It does not add at the end.",
      "`remove(2)` takes out the element at index 2, `\"Mo\"`, and the list shrinks to three.",
    ],
    answer: 0,
    verify: { out: "Rae [Lu, Zed, Kai]" } },

  { id: "apa-34", skill: "arraylist", type: "mcq", topic: "4.9",
    stem: "The following code segment is intended to remove every temperature below 70 from `temps`.",
    code: `ArrayList<Integer> temps = new ArrayList<Integer>();
temps.add(72);
temps.add(65);
temps.add(64);
temps.add(80);
temps.add(61);
temps.add(59);
for (int i = 0; i < temps.size(); i++)
{
    if (temps.get(i) < 70)
    {
        temps.remove(i);
    }
}
System.out.println(temps);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["[72, 64, 80, 59]", "[72, 80]", "[72, 64, 80, 61, 59]", "An `IndexOutOfBoundsException` is thrown."], mono: true,
    why: [
      "Removing 65 moves 64 into index 1, and then `i` moves on to index 2, so 64 is never checked. The same happens to 59 after 61 is removed.",
      "That is the intended result. Removing while moving forward skips the element after each removal.",
      "The loop keeps going after the first removal and removes 61 as well.",
      "The condition checks `temps.size()` on every pass, so `i` never reaches an index that is past the end.",
    ],
    answer: 0,
    verify: { out: "[72, 64, 80, 59]" } },

  { id: "apa-35", skill: "arraylist", type: "mcq", topic: "4.10",
    stem: "The following method is intended to insert `value` into a list of race times that is in order from least to greatest, keeping the list in order.",
    methods: INSERT("/* missing condition */"),
    question: "Which of the following can replace `/* missing condition */` so that the method works as intended?",
    choices: [IN_KEY, IN_D1, IN_D2, IN_D3], mono: true,
    why: [
      "The loop moves past every element less than `value` and stops at the end of the list. Because `i < list.size()` is checked first, `&&` never calls `get` with an index past the end.",
      "When `value` is greater than every element, `i` reaches `list.size()` and `list.get(i)` runs before the size is checked, throwing an `IndexOutOfBoundsException`.",
      "With `||`, a true `i < list.size()` keeps the loop going no matter the value. When `i` reaches the size, `list.get(i)` runs and throws an `IndexOutOfBoundsException`.",
      "This moves past elements greater than `value`, so it stops at the first element that is smaller. Inserting 10 into `[3, 8, 12]` puts 10 at index 0.",
    ],
    answer: 0,
    verify: { cases: [
      { methods: INSERT(IN_KEY), run: INSERT_RUN, out: "[1, 3, 8, 10, 12, 15]" },
      { methods: INSERT(IN_D1), run: INSERT_RUN, throws: "IndexOutOfBoundsException" },
      { methods: INSERT(IN_D2), run: INSERT_RUN, throws: "IndexOutOfBoundsException" },
      { methods: INSERT(IN_D3), run: INSERT_RUN, out: "[15, 10, 3, 8, 12, 1]" },
    ] } },

  { id: "apa-36", skill: "twod", type: "mcq", topic: "4.11",
    stem: "Consider the following code segment, which works with a seating chart.",
    code: `int[][] chart = new int[3][4];
chart[2][1] = 5;
chart[1][3] = chart[2][1] * 2;
System.out.println(chart.length + " " + chart[0].length + " " + chart[1][3] + chart[1][2]);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["3 4 100", "4 3 100", "3 4 10", "An `ArrayIndexOutOfBoundsException` is thrown."], mono: true,
    why: [
      "`chart.length` is the number of rows, 3, and `chart[0].length` is the number of columns, 4. `chart[1][3]` is 10 and `chart[1][2]` is still 0, and both are joined as text.",
      "The first size in `new int[3][4]` is the rows. `chart.length` is 3.",
      "The two values come after a String, so they are joined, `10` then `0`, not added.",
      "Column indexes go from 0 to 3, so `chart[1][3]` is the last column of row 1.",
    ],
    answer: 0,
    verify: { out: "3 4 100" } },

  { id: "apa-37", skill: "twod", type: "mcq", topic: "4.12",
    stem: "In the following code segment, `rain[r][c]` is the rainfall, in millimeters, at weather station `c` on day `r`.",
    code: RAIN2D,
    question: "What is printed as a result of executing the code segment?",
    choices: ["7 8", "8 10", "7 10 8 7", "7 15"], mono: true,
    why: [
      "The outer loop visits columns 0 and 2. Column 0 adds to 2 + 4 + 1 = 7 and column 2 adds to 5 + 1 + 2 = 8.",
      "These are the sums of rows 0 and 2. The outer loop goes through columns, and the inner loop adds down a column.",
      "`c += 2` skips columns 1 and 3.",
      "`total` is set back to 0 at the start of each pass of the outer loop, so column 2's total does not include column 0's.",
    ],
    answer: 0,
    verify: { out: "7 8" } },

  { id: "apa-38", skill: "twod", type: "mcq", topic: "4.13",
    stem: "Consider the following method. Each row of `scores` holds one student's quiz scores, in the order the quizzes were given.",
    methods: MYSTERY,
    question: "Which of the following best describes the value returned by `mystery`?",
    choices: [
      "The number of rows in which no score is less than the score to its left",
      "The number of rows in which every score is greater than the score to its left",
      "The number of columns in which no score is less than the score above it",
      "The number of scores that are greater than or equal to the score to their left",
    ],
    why: [
      "`ok` starts true for each row and becomes false only when a score is less than the one before it. Rows with equal scores side by side still count.",
      "An equal score does not set `ok` to false, because the test is `<`. For `{70, 80, 80}`, `mystery` counts the row.",
      "The outer loop goes through rows, and the inner loop compares each score with the one to its left in the same row.",
      "`result` goes up once per row, after the whole row is checked, not once for each score.",
    ],
    answer: 0,
    verify: { cases: [
      { methods: MYSTERY + "\n\n" + MYSTERY_ALT, run: GRID + "\nSystem.out.println(mystery(scores) + \" \" + strictRows(scores) + \" \" + columns(scores) + \" \" + values(scores));", out: "2 1 0 5" },
    ] } },

  { id: "apa-39", skill: "search", type: "mcq", topic: "4.14",
    stem: "The following method is intended to return the index of the first element of `names` that is equal to `target`, or -1 if there is none.",
    methods: FIND,
    question: "Which of the following best describes the behavior of the method?",
    choices: [
      "It returns 0 when `names[0]` is equal to `target` and returns -1 in every other case.",
      "It works as intended for every array `names` and every String `target`.",
      "It returns the index of the last element of `names` that is equal to `target`.",
      "It does not compile, because every path through the loop body returns a value.",
    ],
    why: [
      "The loop body returns on its first pass either way, so only `names[0]` is ever checked. `findName(roster, \"Ben\")` returns -1 even when `\"Ben\"` is at index 1.",
      "Returning -1 belongs after the loop, once every element has been checked. Here it happens after checking only one.",
      "The method never gets past index 0.",
      "The method compiles. The `return -1;` after the loop is reached when `names` has no elements.",
    ],
    answer: 0,
    verify: { cases: [
      { methods: FIND, run: 'String[] roster = {"Ava", "Ben", "Cy"};\nSystem.out.println(findName(roster, "Ava"));\nSystem.out.println(findName(roster, "Ben"));\nSystem.out.println(findName(roster, "Cy"));\nSystem.out.println(findName(roster, "Zed"));\nSystem.out.println(findName(new String[0], "Ava"));', out: "0\n-1\n-1\n-1\n-1" },
    ] } },

  { id: "apa-40", skill: "search", type: "mcq", topic: "4.15",
    stem: "The following method is a correct implementation of insertion sort, which sorts `arr` from least to greatest. Assume that `insertionSort` is called with an `int[]` that holds `{50, 20, 40, 10, 30}`.",
    methods: ISORT("/* end of outer loop */"),
    question: "What are the contents of `arr` after two iterations of the outer loop, that is, when `j` is 2 at the point marked `/* end of outer loop */` ?",
    choices: ["{20, 40, 50, 10, 30}", "{20, 50, 40, 10, 30}", "{10, 20, 40, 50, 30}", "{20, 40, 10, 30, 50}"], mono: true,
    why: [
      "Insertion sort places one more element into the sorted part at the front each pass. Pass 1 puts 20 before 50. Pass 2 puts 40 between 20 and 50.",
      "This is the array after one iteration, when `j` is 1.",
      "This is the array after three iterations, when 10 has also been moved to the front.",
      "This moves the largest value to the end, which insertion sort does not do. It inserts `arr[j]` into the part before it.",
    ],
    answer: 0,
    verify: { cases: [
      { methods: ISORT(ISORT_PRINT), run: "int[] arr = {50, 20, 40, 10, 30};\ninsertionSort(arr);", out: "{20, 40, 50, 10, 30}" },
    ] } },

  { id: "apa-41", skill: "recursion", type: "mcq", topic: "4.16",
    stem: "Consider the following method, which prints a drum pattern.",
    methods: BEAT,
    question: "What is printed as a result of the call `beat(5)` ?",
    choices: ["5 3 1 1 3 5", "5 3 1", "1 3 5 5 3 1", "5 3 1 3 5"], mono: true,
    why: [
      "Each call prints `n`, makes the call for `n - 2`, then prints `n` again once that call finishes. `beat(-1)` prints nothing, so 1 is printed twice in a row.",
      "The second print in each call runs after the recursive call returns, so every number is printed a second time.",
      "The first print comes before the recursive call, so 5 is printed first.",
      "The call `beat(1)` prints 1 before and after its own call to `beat(-1)`, so 1 appears twice.",
    ],
    answer: 0,
    code: "beat(5);",
    verify: { out: "5 3 1 1 3 5" } },

  { id: "apa-42", skill: "search", type: "mcq", topic: "4.17",
    stem: "Consider the following method, which prints each middle value it checks.",
    methods: BSEARCH,
    code: `int[] times = {12, 15, 19, 22, 27, 31, 36, 40, 44};
System.out.println(binarySearch(times, 37));`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["27 36 40 -1", "27 36 -1", "27 40 36 -1", "12 15 19 22 27 31 36 40 44 -1"], mono: true,
    why: [
      "`mid` is 4 (27), then 6 (36), then 7 (40). After 40, `high` becomes 6, which is less than `low`, 7, so the loop ends and -1 is returned.",
      "After 36, `low` is 7 and `high` is 8, so `low <= high` is still true and one more value is checked.",
      "Int division rounds down. With `low` 5 and `high` 8, `mid` is 6, not 7.",
      "Binary search checks the middle and throws away half each time. It does not check every element.",
    ],
    answer: 0,
    verify: { out: "27 36 40 -1" } },

  // ================= Section II =================
  { id: "apa-frq1", skill: "frq", type: "code", topic: "2.10", title: "Question 1: Methods and Control Structures · The reading log",
    prompt: "This question involves the `ReadingLog` class, which keeps a student's reading record for a class. The class has a helper method, `getPages`, which returns the number of pages read on a day. You will write two methods of the `ReadingLog` class.\n\n**(a)** Write the method `longestStreak`. A **streak** is a run of days in a row on which at least `goal` pages were read each day. The method returns the number of days in the longest streak, or 0 if no day reaches `goal`.\n\nFor example, suppose `numDays` is 8 and `getPages` returns these values.\n\n| day | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |\n|---|---|---|---|---|---|---|---|---|\n| `getPages(day)` | 20 | 35 | 30 | 10 | 40 | 25 | 30 | 25 |\n\n`longestStreak(25)` returns 4, for days 5 to 8. `longestStreak(30)` returns 2, for days 2 and 3. `longestStreak(50)` returns 0.\n\nYou must use `getPages` appropriately to receive full credit.\n\n**(b)** Write the method `longestTitle`, which returns the longest title in the instance variable `books`. The titles in `books` are separated by `\";\"`, with no `\";\"` before the first title or after the last. If two or more titles tie for the longest, return the one that comes first. `books` must not be changed.\n\nFor example, if `books` is `\"Holes;The Giver;Wonder\"`, `longestTitle()` returns `\"The Giver\"`. If `books` is `\"Dune;Emma;Ivy\"`, it returns `\"Dune\"`. If `books` is `\"Hatchet\"`, it returns `\"Hatchet\"`.\n\n" + QR,
    given: F1_GIVEN,
    sample: "Pages for days 1 to 8: 20 35 30 10 40 25 30 25\nlongestStreak(25)   returns 4\nlongestStreak(30)   returns 2\nlongestStreak(50)   returns 0\n\nbooks = \"Holes;The Giver;Wonder\"           longestTitle() returns \"The Giver\"\nbooks = \"Dune;Emma;Ivy\"                    longestTitle() returns \"Dune\"\nbooks = \"Holes;Wonder;Number the Stars\"    longestTitle() returns \"Number the Stars\"\nbooks = \"Hatchet\"                          longestTitle() returns \"Hatchet\"",
    rows: [
      { name: "(a) Calls getPages for each day", earns: "Calls `getPages` with every day from 1 to `numDays`, and with no other value (not 0, not `numDays + 1`)." },
      { name: "(a) Compares pages with goal", earns: "Compares the value returned by `getPages` with `goal` using `>=`, inside a loop." },
      { name: "(a) Counts and resets the streak", earns: "Adds 1 to a streak count on each day that reaches `goal` and sets it back to 0 on a day that does not." },
      { name: "(a) Returns the longest streak (algorithm)", earns: "Keeps the greatest streak seen and returns it, counting a streak that ends on the last day, and returns 0 when no day reaches `goal`." },
      { name: "(b) Accesses every title", earns: "Visits every title in `books`, including the last one, which has no `\";\"` after it, with no bounds errors." },
      { name: "(b) Separates a title", earns: "Gets one title out of `books` with `indexOf` and `substring`, or with `split`, and every `String` method call is valid." },
      { name: "(b) Returns the longest title (algorithm)", earns: "Compares title lengths with `length()`, keeps the longest, the first one on a tie (`>`, not `>=`), and returns it without changing `books`." },
    ],
    notes: NOTE + " Part (b) is scored on its own. Row 4 is not earned when the streak is checked only on a day that misses `goal`, because then a streak that ends on day `numDays` is never counted (`longestStreak(25)` returns 1 instead of 4). Row 7 is not earned when `books` is changed, for example by `books = books.substring(semi + 1);`. Using `String[] titles = books.split(\";\");` and a loop over `titles` is valid.",
    solution: F1_SOL,
    verify: { cases: [
      { classes: F1_CLASS, run: `ReadingLog log = new ReadingLog(new int[] {20, 35, 30, 10, 40, 25, 30, 25}, "Holes;The Giver;Wonder");
System.out.println(log.longestStreak(25));
System.out.println(log.longestStreak(30));
System.out.println(log.longestStreak(50));
System.out.println(log.longestStreak(10));
System.out.println(new ReadingLog(new int[] {5}, "Hatchet").longestStreak(5));
System.out.println(new ReadingLog(new int[] {5}, "Hatchet").longestStreak(6));`, out: "4\n2\n0\n8\n1\n0" },
      { classes: F1_CLASS, run: `ReadingLog a = new ReadingLog(new int[] {1}, "Holes;The Giver;Wonder");
System.out.println(a.longestTitle());
System.out.println(a.getBooks());
System.out.println(new ReadingLog(new int[] {1}, "Dune;Emma;Ivy").longestTitle());
System.out.println(new ReadingLog(new int[] {1}, "Holes;Wonder;Number the Stars").longestTitle());
System.out.println(new ReadingLog(new int[] {1}, "Hatchet").longestTitle());`, out: "The Giver\nHoles;The Giver;Wonder\nDune\nNumber the Stars\nHatchet" },
    ] } },

  { id: "apa-frq2", skill: "frq", type: "code", topic: "3.3", title: "Question 2: Class Design · The shooting drill",
    prompt: "The `ShootingDrill` class, which you will write, keeps track of a basketball shooting drill. A player keeps shooting until they have made a target number of shots. `ShootingDrill` objects are created by calls to a constructor with one `int` parameter, the number of made shots needed to finish the drill. Assume that this value is at least 2.\n\nThe class has a `recordShot` method with one `boolean` parameter, which is `true` when the shot was made and `false` when it was missed. Each call records one shot and returns a `String`:\n\n- If the drill is not finished, the shot counts as one attempt, and as one made shot when the parameter is `true`. If this shot brings the made shots up to the target, the method returns `\"Finished in \"`, then the number of attempts, then `\" shots\"`. Otherwise it returns the number of made shots, then `\" of \"`, then the number of attempts.\n- If the drill was already finished before the call, the method returns `\"Drill complete\"`, and nothing is counted.\n\nThe following table shows a sample code execution sequence and its results. The code appears in a class other than `ShootingDrill`.\n\n| Statement | Value returned | Explanation |\n|---|---|---|\n| `ShootingDrill d = new ShootingDrill(3);` | | A drill that ends after 3 made shots |\n| `d.recordShot(true)` | `\"1 of 1\"` | 1 made shot in 1 attempt |\n| `d.recordShot(false)` | `\"1 of 2\"` | A miss is still an attempt. |\n| `d.recordShot(true)` | `\"2 of 3\"` | |\n| `d.recordShot(true)` | `\"Finished in 4 shots\"` | The third made shot finishes the drill. |\n| `d.recordShot(false)` | `\"Drill complete\"` | Nothing is counted. |\n| `ShootingDrill e = new ShootingDrill(2);` | | A second, separate drill |\n| `e.recordShot(false)` | `\"0 of 1\"` | |\n| `e.recordShot(true)` | `\"1 of 2\"` | |\n| `e.recordShot(true)` | `\"Finished in 3 shots\"` | |\n| `e.recordShot(true)` | `\"Drill complete\"` | |\n\nWrite the complete `ShootingDrill` class. Your implementation must meet all specifications and match the examples in the table.",
    sample: "ShootingDrill d = new ShootingDrill(3);\nd.recordShot(true)    returns \"1 of 1\"\nd.recordShot(false)   returns \"1 of 2\"\nd.recordShot(true)    returns \"2 of 3\"\nd.recordShot(true)    returns \"Finished in 4 shots\"\nd.recordShot(false)   returns \"Drill complete\"\n\nShootingDrill e = new ShootingDrill(2);\ne.recordShot(false)   returns \"0 of 1\"\ne.recordShot(true)    returns \"1 of 2\"\ne.recordShot(true)    returns \"Finished in 3 shots\"\ne.recordShot(true)    returns \"Drill complete\"",
    rows: [
      { name: "Class header", earns: "Declares `class ShootingDrill`, with `public` or with no access word, not `private`, and no code outside the class." },
      { name: "Instance variables", earns: "Declares `private` instance variables, none of them `static`, for the target, the number of made shots, and the number of attempts." },
      { name: "Constructor header", earns: "Declares the constructor `ShootingDrill(int ___)`, not `private`." },
      { name: "Constructor body", earns: "Sets the target from the parameter and starts the made shots and the attempts at 0." },
      { name: "Method header", earns: "Declares `public String recordShot(boolean ___)`." },
      { name: "Records the shot and builds the message (algorithm)", earns: "When the drill is already finished, counts nothing and builds `\"Drill complete\"`. Otherwise adds 1 to the attempts, adds 1 to the made shots only when the parameter is `true`, and builds `\"Finished in \"` + attempts + `\" shots\"` when the made shots reach the target, or made + `\" of \"` + attempts when they do not." },
      { name: "Returns the message", earns: "Returns a `String` built by the method in every case, not a single literal with no computation and not a printed value." },
    ],
    notes: NOTE + " Row 6 can still be earned if a message has a small spelling slip, as long as every literal part is there. Row 6 is not earned when the finished case is missing, so that a call after the drill ends still counts an attempt, or when the made shots go up on a miss. Row 7 can be earned even if the message is wrong, as long as a computed `String` is returned in every case.",
    solution: F2_SOL,
    verify: { cases: [
      { classes: top(F2_SOL), run: `ShootingDrill d = new ShootingDrill(3);
System.out.println(d.recordShot(true));
System.out.println(d.recordShot(false));
System.out.println(d.recordShot(true));
System.out.println(d.recordShot(true));
System.out.println(d.recordShot(false));
ShootingDrill e = new ShootingDrill(2);
System.out.println(e.recordShot(false));
System.out.println(e.recordShot(true));
System.out.println(e.recordShot(true));
System.out.println(e.recordShot(true));
System.out.println(d.recordShot(true));`, out: "1 of 1\n1 of 2\n2 of 3\nFinished in 4 shots\nDrill complete\n0 of 1\n1 of 2\nFinished in 3 shots\nDrill complete\nDrill complete" },
    ] } },

  { id: "apa-frq3", skill: "frq", type: "code", topic: "4.10", title: "Question 3: Data Analysis with ArrayList · Trimming the playlist",
    prompt: "The `Song` class stores information about a song in a music app. The `Playlist` class keeps an `ArrayList` named `songs` that holds the songs in a playlist, in play order. Partial declarations of both classes are shown.\n\nWrite the `Playlist` method `removeLong`. The method removes from `songs` every song whose genre is equal to the parameter `genre` and whose length is greater than `limit` seconds. It returns the total length, in seconds, of the songs it removed, or 0 if it removed none. The songs that remain stay in their original order.\n\nSuppose `songs` holds the following six `Song` objects.\n\n| index | title | genre | seconds |\n|---|---|---|---|\n| 0 | \"Blue Corner\" | \"jazz\" | 404 |\n| 1 | \"Sunrise Drive\" | \"pop\" | 198 |\n| 2 | \"Late Set\" | \"jazz\" | 324 |\n| 3 | \"Low Tide\" | \"jazz\" | 562 |\n| 4 | \"Night Bus\" | \"jazz\" | 210 |\n| 5 | \"Paper Kites\" | \"pop\" | 245 |\n\nThe call `removeLong(\"jazz\", 300)` removes Blue Corner, Late Set, and Low Tide and returns 1290, which is 404 + 324 + 562. Night Bus is jazz but is not longer than 300 seconds, so it stays. After the call, `songs` holds Sunrise Drive, Night Bus, and Paper Kites, in that order. A call of `removeLong(\"pop\", 300)` on the original list removes nothing and returns 0.\n\n" + QR,
    given: F3_GIVEN,
    sample: "songs (title, genre, seconds):\n  Blue Corner jazz 404 · Sunrise Drive pop 198 · Late Set jazz 324\n  Low Tide jazz 562 · Night Bus jazz 210 · Paper Kites pop 245\n\nremoveLong(\"jazz\", 300)   returns 1290\n  songs is now: Sunrise Drive, Night Bus, Paper Kites\n\nremoveLong(\"pop\", 300) on the original list   returns 0\n  songs is unchanged",
    rows: [
      { name: "Accesses every song", earns: "Visits every element of `songs` with `get` and correct bounds, with no bounds errors." },
      { name: "Calls the Song methods", earns: "Calls `getGenre` and `getSeconds` on a `Song` taken from the list." },
      { name: "Checks both conditions", earns: "Checks that the genre is equal to `genre` with `equals` (not `==`) and that the length is greater than `limit` (`>`, not `>=`), joined with `&&`." },
      { name: "Removes every match", earns: "Removes each matching song with `remove`, without skipping the song after a removed one, by looping from the end or by not moving forward after a removal." },
      { name: "Returns the total (algorithm)", earns: "Adds the length of each removed song to a total that starts at 0 and returns the total after the loop, with the remaining songs in their original order." },
    ],
    notes: NOTE + " Row 1 is not earned when the loop uses array syntax (`songs[i]`) or an enhanced `for` loop that removes elements, which can throw a `ConcurrentModificationException`. Row 4 is not earned when an element is skipped after a removal: with a forward loop that always moves to the next index, Low Tide is never checked, because it moves into index 1 after Blue Corner is removed and the loop goes on to index 2. Building a new list of the songs to keep and assigning it to `songs` is valid.",
    solution: F3_SOL,
    verify: { cases: [
      { classes: F3_CLASSES, run: F3_LIST + "\nSystem.out.println(p.removeLong(\"jazz\", 300));\nSystem.out.println(p.titles());", out: "1290\n[Sunrise Drive, Night Bus, Paper Kites]" },
      { classes: F3_CLASSES, run: F3_LIST + "\nSystem.out.println(p.removeLong(\"pop\", 300));\nSystem.out.println(p.titles());", out: "0\n[Blue Corner, Sunrise Drive, Late Set, Low Tide, Night Bus, Paper Kites]" },
      { classes: F3_CLASSES, run: F3_LIST + "\nSystem.out.println(p.removeLong(\"jazz\", 210));\nSystem.out.println(p.titles());\nSystem.out.println(p.removeLong(\"pop\", 100));\nSystem.out.println(p.titles());", out: "1290\n[Sunrise Drive, Night Bus, Paper Kites]\n443\n[Night Bus]" },
    ] } },

  { id: "apa-frq4", skill: "frq", type: "code", topic: "4.13", title: "Question 4: 2D Array · Cold spots",
    prompt: "The `Reading` class stores the latest reading from a weather station. The `WeatherMap` class keeps a two-dimensional array of readings from a rectangular grid of stations. Partial declarations of both classes are shown. When an element of `grid` is accessed, the first index is the row and the second index is the column.\n\nA station is a **cold spot** when its temperature is less than the temperature at every station directly above it, below it, to its left, and to its right, counting only the stations that exist. A station on an edge or in a corner has fewer neighbors and is compared only with those. A neighbor with the same temperature keeps a station from being a cold spot.\n\nWrite the `WeatherMap` method `countColdSpots`, which returns the number of cold spots in `grid`.\n\nSuppose the readings in `grid` have the following temperatures.\n\n|  | col 0 | col 1 | col 2 | col 3 |\n|---|---|---|---|---|\n| row 0 | 50 | 48 | 52 | 47 |\n| row 1 | 49 | 44 | 46 | 51 |\n| row 2 | 53 | 45 | 50 | 55 |\n\n`countColdSpots()` returns 2. The 44 in row 1, column 1 is less than its four neighbors, 48, 45, 49, and 46. The 47 in row 0, column 3 is in a corner and is less than its two neighbors, 52 and 51. The 45 in row 2, column 1 is not a cold spot, because the 44 above it is lower.\n\nFor a grid with the temperatures `{ {40, 40}, {45, 50} }`, `countColdSpots()` returns 0: each 40 has a neighbor with the same temperature.\n\n" + QR,
    given: F4_GIVEN,
    sample: "Temperatures in grid:\n  50 48 52 47\n  49 44 46 51\n  53 45 50 55\ncountColdSpots() returns 2\n\nTemperatures in grid:\n  40 40\n  45 50\ncountColdSpots() returns 0\n\nTemperatures in grid:\n  30 35\n  36 31\ncountColdSpots() returns 2",
    rows: [
      { name: "Accesses every station", earns: "Visits every element of `grid` with nested loops, with no bounds errors." },
      { name: "Calls getTemp", earns: "Calls `getTemp` on a `Reading` from `grid`, not on `grid` or on a row." },
      { name: "Checks only neighbors that exist", earns: "Looks at the station above, below, left, and right, and guards each one so that no index goes outside `grid` at an edge or in a corner." },
      { name: "Compares temperatures", earns: "Compares the station's temperature with a neighbor's so that the station counts as colder only when it is strictly less. An equal neighbor rules it out." },
      { name: "Requires every neighbor (algorithm)", earns: "Decides that a station is a cold spot only when it is colder than every neighbor that exists, not just one of them, and does not rule out an edge or corner station because of a neighbor it does not have." },
      { name: "Counts and returns (algorithm)", earns: "Starts a count at 0, adds 1 for each cold spot, and returns the count after every station has been checked." },
    ],
    notes: NOTE + " Row 3 is not earned when a station on an edge is skipped entirely (for example, loops from 1 to `grid.length - 2`), because the corner 47 in the example is a cold spot. Row 5 is not earned when a station counts as soon as one neighbor is warmer. Ruling a station out when a neighbor's temperature is `<=` its own is the same test and earns row 4.",
    solution: F4_SOL,
    verify: { cases: [
      { classes: F4_CLASSES, run: [
          map("{ {50, 48, 52, 47}, {49, 44, 46, 51}, {53, 45, 50, 55} }"),
          map("{ {40, 40}, {45, 50} }"),
          map("{ {30, 35}, {36, 31} }"),
          map("{ {10, 20, 10}, {20, 30, 20}, {10, 20, 10} }"),
          map("{ {5, 5, 5}, {5, 5, 5} }"),
        ].join("\n"), out: "2\n0\n2\n4\n0" },
    ] } },
];

export default {
  forms: [
    { id: "apa", name: "AP Practice Exam A", group: "AP Practice Exam", date: "2027-04-05", items },
  ],
};

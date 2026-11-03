// AP CSP · Quiz 4: Functions and Loops · Part A review items
// Every block of code here is compiled and run on .NET 10 by tools/verify.mjs.
// In a multiple-choice item the right choice is always written first; the site shuffles them.

// Game functions, copied from the game (GAME.md), added to a run when an item calls them.
const G = {
  IsAlive: `bool IsAlive(int hp)
{
    return hp > 0;
}`,
  Heal: `int Heal(int hp)
{
    return hp + 3;
}`,
  TileAt: `char TileAt(List<string> level, int x, int y)
{
    if (y < 0 || y >= level.Count) return '#';
    if (x < 0 || x >= level[y].Length) return '#';
    return level[y][x];
}`,
  IsWall: `bool IsWall(List<string> level, int x, int y)
{
    return TileAt(level, x, y) == '#';
}`,
  CountTiles: `int CountTiles(List<string> level, char tile)
{
    int count = 0;
    for (int y = 0; y < level.Count; y++)
    {
        for (int x = 0; x < level[y].Length; x++)
        {
            if (TileAt(level, x, y) == tile) count = count + 1;
        }
    }
    return count;
}`,
  FindTileX: `int FindTileX(List<string> level, char tile)
{
    for (int y = 0; y < level.Count; y++)
    {
        for (int x = 0; x < level[y].Length; x++)
        {
            if (TileAt(level, x, y) == tile) return x;
        }
    }
    return -1;
}`,
  FindTileY: `int FindTileY(List<string> level, char tile)
{
    for (int y = 0; y < level.Count; y++)
    {
        for (int x = 0; x < level[y].Length; x++)
        {
            if (TileAt(level, x, y) == tile) return y;
        }
    }
    return -1;
}`,
  FindCharacter: `int FindCharacter(List<string> names, string name)
{
    for (int i = 0; i < names.Count; i++)
    {
        if (names[i] == name) return i;
    }
    return -1;
}`,
  NextAliveIndex: `int NextAliveIndex(List<int> health)
{
    for (int i = 0; i < health.Count; i++)
    {
        if (IsAlive(health[i])) return i;
    }
    return -1;
}`,
  Clamp: `int Clamp(int value, int low, int high)
{
    if (value < low) return low;
    else if (value > high) return high;
    else return value;
}`,
  WinnerName: `string WinnerName(string a, int aHp, string b, int bHp)
{
    if (aHp > bHp) return a;
    else if (bHp > aHp) return b;
    else return "nobody";
}`,
  StepX: `int StepX(string command)
{
    if (command == "a") return -1;
    else if (command == "d") return 1;
    else return 0;
}`,
  StepY: `int StepY(string command)
{
    if (command == "w") return -1;
    else if (command == "s") return 1;
    else return 0;
}`,
  WalkX: `int WalkX(List<string> commands, int startX)
{
    int x = startX;
    for (int i = 0; i < commands.Count; i++)
    {
        x = x + StepX(commands[i]);
    }
    return x;
}`,
  WalkY: `int WalkY(List<string> commands, int startY)
{
    int y = startY;
    for (int i = 0; i < commands.Count; i++)
    {
        y = y + StepY(commands[i]);
    }
    return y;
}`,
  KeepPlaying: `bool KeepPlaying(string command, bool anyAlive, bool escaped)
{
    if (command == "quit" || anyAlive == false || escaped)
    {
        return false;
    }
    return true;
}`,
};
const withGame = (code, ...names) => code + "\n\n" + names.map((n) => G[n]).join("\n\n");

// ---------------------------------------------------------------- shared code
const allAtLeast = `bool AllAtLeast(List<int> attack, int min)
{
    for (int i = 0; i < attack.Count; i++)
    {
        if (attack[i] < min)
        {
            return false;
        }
    }
    return true;
}`;

const mostGold = `int MostGoldIndex(List<int> gold)
{
    int best = 0;
    for (int i = 1; i < gold.Count; i++)
    {
        if (gold[i] > gold[best])
        {
            best = i;
        }
    }
    return best;
}`;

const countInColumn = `int CountInColumn(List<string> level, int x, char tile)
{
    int count = 0;
    for (int y = 0; y < level.Count; y++)
    {
        if (level[y][x] == tile)
        {
            count = count + 1;
        }
    }
    return count;
}`;

const countEither = `int CountEither(List<string> level, char a, char b)
{
    int count = 0;
    for (int y = 0; y < level.Count; y++)
    {
        for (int x = 0; x < level[y].Length; x++)
        {
            if (level[y][x] == a || level[y][x] == b)
            {
                count = count + 1;
            }
        }
    }
    return count;
}`;

const drawWith = (test) => `void Draw(List<string> level, int playerX, int playerY)
{
    for (int y = 0; y < level.Count; y++)
    {
        string row = "";
        for (int x = 0; x < level[y].Length; x++)
        {
            if (${test})
            {
                row = row + "@";
            }
            else if (level[y][x] == '@')
            {
                row = row + ".";
            }
            else
            {
                row = row + level[y][x];
            }
        }
        Console.WriteLine(row);
    }
}`;

const drawWide = `void DrawWide(List<string> level, int playerX, int playerY)
{
    for (int y = 0; y < level.Count; y++)
    {
        string row = "";
        for (int x = 0; x < level[y].Length; x++)
        {
            if (x == playerX && y == playerY)
            {
                row = row + "@@";
            }
            else if (level[y][x] == '@')
            {
                row = row + "..";
            }
            else
            {
                row = row + level[y][x] + level[y][x];
            }
        }
        Console.WriteLine(row);
    }
}`;

const keepPlaying = G.KeepPlaying;

const monsterAt = `int MonsterAt(List<int> mX, List<int> mY, int x, int y)
{
    for (int i = 0; i < mX.Count; i++)
    {
        if (mX[i] == x && mY[i] == y) return i;
    }
    return -1;
}`;

const d03Level = `List<string> level = new List<string> { "#####", "#@..#", "#..$#", "#####" };
Draw(level, 3, 2);`;

export default {
  items: [
    // ---------------------------------------------------------------- Totals and records (Quest 13)
    {
      id: "q4-t01", skill: "totals", type: "mcq",
      stem: "TotalBelow adds up the health of every character below the limit.",
      code: `List<int> health = new List<int>();
health.Add(6);
health.Add(2);
health.Add(9);
health.Add(4);
health.Add(5);
Console.WriteLine(TotalBelow(health, 5));

int TotalBelow(List<int> health, int limit)
{
    int total = 0;
    for (int i = 0; i < health.Count; i++)
    {
        if (health[i] < limit)
        {
            total = total + health[i];
        }
    }
    return total;
}`,
      question: "What is printed?",
      choices: ["6", "11", "2", "26"],
      why: [
        "Only 2 and 4 are less than 5. 5 < 5 is false, so the last 5 is left out. 2 + 4 is 6.",
        "11 adds the 5 as well. That would need health[i] <= limit.",
        "2 is how many values are below 5. The function adds health[i], not 1.",
        "26 is the total of the whole list. The if keeps out every value that is not below 5.",
      ],
      answer: 0,
      verify: { out: "6" },
    },
    {
      id: "q4-t02", skill: "totals", type: "mcq",
      stem: "A student rewrites WeakestIndex from Quest 13. The party is Rook, Mote, Hero, and Pip.",
      code: `List<string> names = new List<string>();
List<int> health = new List<int>();
names.Add("Rook");
health.Add(7);
names.Add("Mote");
health.Add(3);
names.Add("Hero");
health.Add(8);
names.Add("Pip");
health.Add(5);
Console.WriteLine(names[WeakestIndex(health)]);

int WeakestIndex(List<int> health)
{
    int weakest = health[0];
    for (int i = 1; i < health.Count; i++)
    {
        if (health[i] < weakest)
        {
            weakest = health[i];
        }
    }
    return weakest;
}`,
      question: "What is printed?",
      choices: ["Pip", "Mote", "3", "It builds, then crashes when it runs (ArgumentOutOfRangeException)."],
      why: [
        "weakest holds a health, not an index. The smallest health is 3, so the function returns 3, and names[3] is Pip. The 3 belongs to Mote, at index 1.",
        "Mote is the weakest, at index 1. To return 1, the record has to be an index: weakest = i, compared with health[weakest].",
        "3 is what WeakestIndex returns, but the line prints names at that index.",
        "The list has four names, so index 3 is in range. The answer is wrong with no crash to warn anyone.",
      ],
      answer: 0,
      verify: { out: "Pip" },
    },
    {
      id: "q4-t03", skill: "totals", type: "mcq",
      stem: "The list attack holds 4, 3, and 5.",
      code: allAtLeast,
      question: "Which call returns true?",
      choices: ["AllAtLeast(attack, 3)", "AllAtLeast(attack, 4)", "AllAtLeast(attack, 5)", "AllAtLeast(attack, 12)"],
      mono: true,
      why: [
        "No value is less than 3, so the test is never true. The loop finishes, and return true runs after it.",
        "attack[0] is 4 and passes, but attack[1] is 3, and 3 < 4 returns false. One value below the line is enough.",
        "attack[0] is 4, and 4 < 5 returns false on the first pass.",
        "12 is the total attack. AllAtLeast checks each value on its own, and 4 < 12 returns false at once.",
      ],
      answer: 0,
      verify: {
        run: `List<int> attack = new List<int>();
attack.Add(4);
attack.Add(3);
attack.Add(5);
Console.WriteLine(AllAtLeast(attack, 3) + " " + AllAtLeast(attack, 4) + " " + AllAtLeast(attack, 5) + " " + AllAtLeast(attack, 12));

${allAtLeast}`,
        out: "True False False False",
      },
    },
    {
      id: "q4-t04", skill: "totals", type: "mcq",
      stem: "WeakestIndex is the Quest 13 function. It is called once on an empty list and once after two values are added.",
      code: `List<int> health = new List<int>();
int before = WeakestIndex(health);
health.Add(9);
health.Add(4);
Console.WriteLine(before + " " + WeakestIndex(health));

int WeakestIndex(List<int> health)
{
    if (health.Count == 0)
    {
        return -1;
    }
    int weakest = 0;
    for (int i = 1; i < health.Count; i++)
    {
        if (health[i] < health[weakest])
        {
            weakest = i;
        }
    }
    return weakest;
}`,
      question: "What is printed?",
      choices: ["-1 1", "0 1", "-1 4", "It builds, then crashes when it runs (ArgumentOutOfRangeException)."],
      why: [
        "On the empty list, health.Count == 0 is true, so the function returns -1 before the loop. With 9 and 4, 4 < 9 moves the record to index 1.",
        "0 is a real index. An empty list has no index 0, so the function returns -1 to mean nobody.",
        "4 is the smallest health. The function returns where it is, index 1.",
        "The if returns -1 first, so nothing is ever read from the empty list.",
      ],
      answer: 0,
      verify: { out: "-1 1" },
    },
    {
      id: "q4-t05", skill: "totals", type: "output",
      stem: "WeakestAliveIndex is Challenge 13. It skips anyone with 0 health or less.",
      code: `List<int> health = new List<int>();
health.Add(0);
health.Add(5);
health.Add(-2);
health.Add(3);
health.Add(4);
Console.WriteLine(WeakestAliveIndex(health));
List<int> fallen = new List<int>();
fallen.Add(0);
fallen.Add(-1);
Console.WriteLine(WeakestAliveIndex(fallen));

int WeakestAliveIndex(List<int> health)
{
    int weakest = -1;
    for (int i = 0; i < health.Count; i++)
    {
        if (health[i] > 0)
        {
            if (weakest == -1 || health[i] < health[weakest])
            {
                weakest = i;
            }
        }
    }
    return weakest;
}`,
      question: "Type exactly what is printed, one line per line.",
      answer: "3\n-1",
      why: "Indexes 0 and 2 are skipped, because 0 > 0 and -2 > 0 are false. Among 5, 3, and 4, the smallest is 3, at index 3. In fallen nobody is alive, so weakest keeps its starting value, -1.",
      verify: { out: "3\n-1" },
    },
    {
      id: "q4-t06", skill: "totals", type: "output",
      stem: "AnyDown says whether anyone in the party is down. It prints a line each time it checks someone.",
      code: `List<string> names = new List<string>();
List<int> health = new List<int>();
names.Add("Rook");
health.Add(4);
names.Add("Mote");
health.Add(0);
names.Add("Hero");
health.Add(-1);
Console.WriteLine(AnyDown(names, health));

bool AnyDown(List<string> names, List<int> health)
{
    for (int i = 0; i < health.Count; i++)
    {
        Console.WriteLine("checking " + names[i]);
        if (health[i] <= 0)
        {
            return true;
        }
    }
    return false;
}`,
      question: "Type exactly what is printed, one line per line.",
      answer: "checking Rook\nchecking Mote\nTrue",
      why: "Mote has 0, and 0 <= 0 is true, so the function returns true on the second pass. Hero is never checked: one is enough to answer \"any\". C# prints a bool as True or False, with a capital letter.",
      verify: { out: "checking Rook\nchecking Mote\nTrue" },
    },
    {
      id: "q4-t07", skill: "totals", type: "trace",
      stem: "Trace MostGoldIndex(gold) for gold 5, 8, 3, 11, 6, one row per pass.",
      code: mostGold,
      question: "Fill in gold[i], the test, and best after each pass, then what the function returns.",
      columns: ["i", "gold[i]", "gold[i] > gold[best]", "best after the pass"],
      rows: [
        ["1", "8", "true", "1"],
        ["2", "3", "false", "1"],
        ["3", "11", "true", "3"],
        ["4", "6", "false", "3"],
        ["returns", "", "", "3"],
      ],
      given: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0]],
      why: "best starts at 0, so the loop starts at 1. best holds an index, and the test compares the values gold[i] and gold[best]. The function returns 3, the index of 11, not 11 itself.",
      verify: {
        run: `List<int> gold = new List<int> { 5, 8, 3, 11, 6 };
int best = 0;
for (int i = 1; i < gold.Count; i++)
{
    bool t = gold[i] > gold[best];
    if (t) { best = i; }
    Console.WriteLine(i + "," + gold[i] + "," + (t ? "true" : "false") + "," + best);
}
Console.WriteLine("returns,,," + best);
if (MostGoldIndex(gold) != best) Console.WriteLine("MISMATCH");

${mostGold}`,
        out: "1,8,true,1\n2,3,false,1\n3,11,true,3\n4,6,false,3\nreturns,,,3",
      },
    },

    // ---------------------------------------------------------------- Rows and columns (Quest 14, Levels.cs)
    {
      id: "q4-g01", skill: "grid", type: "mcq",
      stem: "TileAt is the Levels.cs function. On the map it returns level[y][x]; off the map it returns #.",
      code: `List<string> level = new List<string>();
level.Add("######");
level.Add("#.M..#");
level.Add("#$.+@#");
level.Add("######");
Console.WriteLine(TileAt(level, 2, 1));`,
      question: "What is printed?",
      choices: ["M", "$", ".", "#"],
      why: [
        "TileAt(level, 2, 1) reads level[1][2]: row 1 is #.M..#, and index 2 in it is M.",
        "$ is level[2][1], with the row and the column swapped. A level is read row first: level[y][x].",
        "Counting from 1, the second tile of row 1 is ., at index 1. Indexes start at 0, so x 2 is the third tile.",
        "TileAt returns # by itself only off the map. x 2 and y 1 are inside it.",
      ],
      answer: 0,
      verify: { run: withGame(`List<string> level = new List<string>();
level.Add("######");
level.Add("#.M..#");
level.Add("#$.+@#");
level.Add("######");
Console.WriteLine(TileAt(level, 2, 1));`, "TileAt"), out: "M" },
    },
    {
      id: "q4-g02", skill: "grid", type: "mcq",
      stem: "CountInColumn is the Quest 14 function. The level is below.",
      code: `List<string> level = new List<string>();
level.Add("#####");
level.Add("#M$$#");
level.Add("#.M.#");
level.Add("#M..#");
level.Add("#####");

${countInColumn}`,
      question: "Which call returns 2?",
      choices: ["CountInColumn(level, 1, 'M')", "CountInColumn(level, 1, '$')", "CountInColumn(level, 2, 'M')", "CountInColumn(level, 3, '$')"],
      mono: true,
      why: [
        "x stays 1 while y goes down the level. Column 1 reads #, M, ., M, #: two M.",
        "Row 1 has two $, but this function walks down column 1, which has none. It returns 0.",
        "Column 2 reads #, $, M, ., #. It has one M, in row 2.",
        "Column 3 reads #, $, ., ., #. It has one $.",
      ],
      answer: 0,
      verify: {
        run: `List<string> level = new List<string>();
level.Add("#####");
level.Add("#M$$#");
level.Add("#.M.#");
level.Add("#M..#");
level.Add("#####");
Console.WriteLine(CountInColumn(level, 1, 'M') + " " + CountInColumn(level, 1, '$') + " " + CountInColumn(level, 2, 'M') + " " + CountInColumn(level, 3, '$'));

${countInColumn}`,
        out: "2 0 1 1",
      },
    },
    {
      id: "q4-g03", skill: "grid", type: "mcq",
      stem: "A student rewrites CountEither from Quest 14 to count the monsters and the boss together.",
      code: `List<string> level = new List<string>();
level.Add("#M..#");
level.Add("#.B.#");
level.Add("#M.M#");
Console.WriteLine(CountEither(level, 'M', 'B'));

int CountEither(List<string> level, char a, char b)
{
    int count = 0;
    for (int y = 0; y < level.Count; y++)
    {
        for (int x = 0; x < level[y].Length; x++)
        {
            if (level[y][x] == a && level[y][x] == b)
            {
                count = count + 1;
            }
        }
    }
    return count;
}`,
      question: "What is printed?",
      choices: ["0", "4", "3", "1"],
      why: [
        "A tile is one character. It cannot be M and B at the same time, so && is false for every tile and count stays 0. || means either one.",
        "4 is the right count: three M and one B. It needs || in the test.",
        "3 counts the M tiles only. With &&, not even those pass.",
        "1 counts the B only. With &&, the B fails too, because B is not also M.",
      ],
      answer: 0,
      verify: {
        cases: [
          { run: `List<string> level = new List<string>();
level.Add("#M..#");
level.Add("#.B.#");
level.Add("#M.M#");
Console.WriteLine(CountEither(level, 'M', 'B'));

int CountEither(List<string> level, char a, char b)
{
    int count = 0;
    for (int y = 0; y < level.Count; y++)
    {
        for (int x = 0; x < level[y].Length; x++)
        {
            if (level[y][x] == a && level[y][x] == b)
            {
                count = count + 1;
            }
        }
    }
    return count;
}`, out: "0" },
          { run: `List<string> level = new List<string> { "#M..#", "#.B.#", "#M.M#" };
Console.WriteLine(CountEither(level, 'M', 'B') + " " + CountEither(level, 'M', 'M') + " " + CountEither(level, 'B', 'B'));

${countEither}`, out: "4 3 1" },
        ],
      },
    },
    {
      id: "q4-g04", skill: "grid", type: "mcq",
      stem: "A student rewrites CountTiles for Levels.cs. Look closely at the inner loop.",
      code: `List<string> level = new List<string>();
level.Add("#$#..$");
level.Add("#.$..#");
level.Add("$...$#");
Console.WriteLine(CountTiles(level, '$'));

int CountTiles(List<string> level, char tile)
{
    int count = 0;
    for (int y = 0; y < level.Count; y++)
    {
        for (int x = 0; x < level.Count; x++)
        {
            if (level[y][x] == tile)
            {
                count = count + 1;
            }
        }
    }
    return count;
}`,
      question: "What is printed?",
      choices: ["3", "5", "2", "It builds, then crashes when it runs (IndexOutOfRangeException)."],
      why: [
        "level.Count is the number of rows, 3. So x only reaches 0, 1, and 2 in each row, and only the first three columns are checked: one $ in each row. The inner loop needs level[y].Length, which is 6.",
        "5 is every $ on the map. That needs x < level[y].Length.",
        "2 is the number of $ in row 0. count is not reset, and it adds up across all three rows.",
        "A row is a string, and reading past its end does crash with IndexOutOfRangeException. That happens when a level has more rows than columns. Here each row is 6 long and x stops at 2.",
      ],
      answer: 0,
      verify: {
        cases: [
          { run: `List<string> level = new List<string>();
level.Add("#$#..$");
level.Add("#.$..#");
level.Add("$...$#");
Console.WriteLine(CountTiles(level, '$'));
Console.WriteLine(Full(level, '$'));

int CountTiles(List<string> level, char tile)
{
    int count = 0;
    for (int y = 0; y < level.Count; y++)
    {
        for (int x = 0; x < level.Count; x++)
        {
            if (level[y][x] == tile)
            {
                count = count + 1;
            }
        }
    }
    return count;
}
int Full(List<string> level, char tile)
{
    int count = 0;
    for (int y = 0; y < level.Count; y++) { for (int x = 0; x < level[y].Length; x++) { if (level[y][x] == tile) count = count + 1; } }
    return count;
}`, out: "3\n5" },
          { run: `List<string> level = new List<string> { "#$", "$#", "#$" };
Console.WriteLine(CountTiles(level, '$'));
int CountTiles(List<string> level, char tile)
{
    int count = 0;
    for (int y = 0; y < level.Count; y++) { for (int x = 0; x < level.Count; x++) { if (level[y][x] == tile) { count = count + 1; } } }
    return count;
}`, crash: "IndexOutOfRangeException" },
        ],
      },
    },
    {
      id: "q4-g05", skill: "grid", type: "output",
      stem: "TileAt and IsWall are the Levels.cs functions. This level has no walls in its data.",
      code: `List<string> level = new List<string>();
level.Add(".$..");
level.Add("M..+");
Console.WriteLine(TileAt(level, 3, 1));
Console.WriteLine(TileAt(level, 4, 1));
Console.WriteLine(TileAt(level, 1, -1));
Console.WriteLine(IsWall(level, 0, 0));

char TileAt(List<string> level, int x, int y)
{
    if (y < 0 || y >= level.Count) return '#';
    if (x < 0 || x >= level[y].Length) return '#';
    return level[y][x];
}

bool IsWall(List<string> level, int x, int y)
{
    return TileAt(level, x, y) == '#';
}`,
      question: "Type exactly what is printed, one line per line.",
      answer: "+\n#\n#\nFalse",
      why: "level[1][3] is +. x 4 equals level[1].Length, one past the last index, so the second test returns #. y -1 is above the map, so the first test returns #. Neither # is in the data: off the map counts as wall, so a caller never crashes. level[0][0] is ., so IsWall is False.",
      verify: { out: "+\n#\n#\nFalse" },
    },
    {
      id: "q4-g06", skill: "grid", type: "output",
      stem: "FindTileX and FindTileY are the Levels.cs functions. Both have y in the outer loop and x in the inner loop, and both return at the first match, or -1.",
      code: `List<string> level = new List<string>();
level.Add("#####");
level.Add("#..M#");
level.Add("#M..#");
level.Add("#####");
Console.WriteLine(FindTileX(level, 'M') + "," + FindTileY(level, 'M'));
Console.WriteLine(FindTileX(level, 'B'));`,
      question: "Type exactly what is printed, one line per line.",
      answer: "3,1\n-1",
      why: "The level is read in reading order: all of row 1 before any of row 2. The M at x 3 in row 1 is found first, even though the M in row 2 is farther left. There is no B, so both loops finish and -1 is returned.",
      verify: {
        run: withGame(`List<string> level = new List<string>();
level.Add("#####");
level.Add("#..M#");
level.Add("#M..#");
level.Add("#####");
Console.WriteLine(FindTileX(level, 'M') + "," + FindTileY(level, 'M'));
Console.WriteLine(FindTileX(level, 'B'));`, "TileAt", "FindTileX", "FindTileY"),
        out: "3,1\n-1",
      },
    },
    {
      id: "q4-g07", skill: "grid", type: "trace",
      stem: "Trace CountEither(level, '$', '*') for the level #$*#, #..$, $**$, one row of the table per row of the level.",
      code: countEither,
      question: "Fill in how many tiles in each row match, and count after that row, then what the function returns.",
      columns: ["y", "level[y]", "matches in the row", "count after the row"],
      rows: [
        ["0", "#$*#", "2", "2"],
        ["1", "#..$", "1", "3"],
        ["2", "$**$", "4", "7"],
        ["returns", "", "", "7"],
      ],
      given: [[0, 0], [0, 1], [1, 0], [1, 1], [2, 0], [2, 1], [3, 0]],
      why: "The inner loop checks every tile in a row before y moves on. A tile counts when it is $ or when it is *. count is set to 0 once, before both loops, so it keeps adding across rows.",
      verify: {
        run: `List<string> level = new List<string> { "#$*#", "#..$", "$**$" };
int count = 0;
for (int y = 0; y < level.Count; y++)
{
    int before = count;
    for (int x = 0; x < level[y].Length; x++)
    {
        if (level[y][x] == '$' || level[y][x] == '*') { count = count + 1; }
    }
    Console.WriteLine(y + "," + level[y] + "," + (count - before) + "," + count);
}
Console.WriteLine("returns,,," + CountEither(level, '$', '*'));

${countEither}`,
        out: "0,#$*#,2,2\n1,#..$,1,3\n2,$**$,4,7\nreturns,,,7",
      },
    },

    // ---------------------------------------------------------------- Drawing a level (Quest 15)
    {
      id: "q4-d01", skill: "draw", type: "output",
      stem: "Draw is Quest 15's DrawWide with one character per tile.",
      code: `List<string> level = new List<string>();
level.Add("#####");
level.Add("#@.M#");
level.Add("#..$#");
level.Add("#####");
Draw(level, 3, 2);

${drawWith("x == playerX && y == playerY")}`,
      question: "Type exactly what is printed, one line per line.",
      answer: "#####\n#..M#\n#..@#\n#####",
      why: "Each row is built one tile at a time and printed once. The @ in the data at x 1 of row 1 is only where the player started, so it is drawn as floor. The player is at x 3 of row 2 and is tested first, so the @ covers the $.",
      verify: { out: "#####\n#..M#\n#..@#\n#####" },
    },
    {
      id: "q4-d02", skill: "draw", type: "mcq",
      stem: "In this rewrite of Draw, string row = \"\"; was moved above the outer loop.",
      code: `List<string> level = new List<string>();
level.Add("#+#");
level.Add("#.#");
level.Add("###");
Draw(level, 1, 1);

void Draw(List<string> level, int playerX, int playerY)
{
    string row = "";
    for (int y = 0; y < level.Count; y++)
    {
        for (int x = 0; x < level[y].Length; x++)
        {
            if (x == playerX && y == playerY)
            {
                row = row + "@";
            }
            else if (level[y][x] == '@')
            {
                row = row + ".";
            }
            else
            {
                row = row + level[y][x];
            }
        }
        Console.WriteLine(row);
    }
}`,
      question: "What is the second line printed?",
      choices: ["#+##@#", "#@#", "#+##.#", "#+#"],
      mono: true,
      why: [
        "row is never emptied, so row 1 is added on the end of row 0. The second line is #+# followed by #@#, with the player at x 1 of row 1.",
        "#@# is what the second line would be with string row = \"\"; inside the outer loop, where it starts empty for each row.",
        "The player is at x 1, y 1, and the player test comes first, so that tile is drawn as @.",
        "#+# is the first line. The second WriteLine prints row after three more tiles were added.",
      ],
      answer: 0,
      verify: {
        cases: [
          { run: `List<string> level = new List<string>();
level.Add("#+#");
level.Add("#.#");
level.Add("###");
Draw(level, 1, 1);

void Draw(List<string> level, int playerX, int playerY)
{
    string row = "";
    for (int y = 0; y < level.Count; y++)
    {
        for (int x = 0; x < level[y].Length; x++)
        {
            if (x == playerX && y == playerY)
            {
                row = row + "@";
            }
            else if (level[y][x] == '@')
            {
                row = row + ".";
            }
            else
            {
                row = row + level[y][x];
            }
        }
        Console.WriteLine(row);
    }
}`, out: "#+#\n#+##@#\n#+##@####" },
          { run: `List<string> level = new List<string> { "#+#", "#.#", "###" };
Draw(level, 1, 1);

${drawWith("x == playerX && y == playerY")}`, out: "#+#\n#@#\n###" },
        ],
      },
    },
    {
      id: "q4-d03", skill: "draw", type: "mcq",
      stem: "This Draw is missing its first test. The level is #####, #@..#, #..$#, #####, and the call is Draw(level, 3, 2).",
      code: drawWith("________"),
      question: "What goes in the blank so the player is drawn where the player is?",
      choices: ["x == playerX && y == playerY", "x == playerX || y == playerY", "level[y][x] == '@'", "y == playerX && x == playerY"],
      mono: true,
      why: [
        "Both have to match: the column is playerX and the row is playerY. Only one tile passes, and it prints #..@# for row 2.",
        "|| is true for every tile in column 3 and every tile in row 2. Row 2 prints as @@@@@, and every other row gets an @ in column 3.",
        "That tests the data, not the player. It always draws @ at the start tile, x 1 of row 1, wherever the player is. Row 2 keeps its $.",
        "x and y are swapped. The test becomes y == 3 and x == 2, so the @ lands in row 3 on a wall and prints ##@##.",
      ],
      answer: 0,
      verify: {
        cases: [
          { run: `${d03Level}\n\n${drawWith("x == playerX && y == playerY")}`, out: "#####\n#...#\n#..@#\n#####" },
          { run: `${d03Level}\n\n${drawWith("x == playerX || y == playerY")}`, out: "###@#\n#..@#\n@@@@@\n###@#" },
          { run: `${d03Level}\n\n${drawWith("level[y][x] == '@'")}`, out: "#####\n#@..#\n#..$#\n#####" },
          { run: `${d03Level}\n\n${drawWith("y == playerX && x == playerY")}`, out: "#####\n#...#\n#..$#\n##@##" },
        ],
      },
    },
    {
      id: "q4-d04", skill: "draw", type: "mcq",
      stem: "ColumnOf is meant to return the tiles of one column, top to bottom, as a string.",
      code: `List<string> level = new List<string>();
level.Add("#$.#");
level.Add("#M.#");
Console.WriteLine(ColumnOf(level, 1));

string ColumnOf(List<string> level, int x)
{
    string column = "";
    for (int y = 0; y < level.Count; y++)
    {
        column = level[y][x];
    }
    return column;
}`,
      question: "What happens?",
      choices: [
        "It does not build: Cannot implicitly convert type 'char' to 'string'.",
        "It prints $M.",
        "It prints M.",
        "It builds, then crashes when it runs (IndexOutOfRangeException).",
      ],
      why: [
        "level[y][x] is a char, one tile, and column is a string. = cannot put a char into a string (CS0029). column = column + level[y][x]; builds, because a string plus a char is a string.",
        "$M is what column = column + level[y][x]; prints. This line has no column + in it, and it does not build.",
        "If it built, = would keep only the last tile, M. It does not build.",
        "The compiler finds this before the program runs. x 1 is in range in both rows.",
      ],
      answer: 0,
      verify: {
        cases: [
          { error: "CS0029", run: `List<string> level = new List<string>();
level.Add("#$.#");
level.Add("#M.#");
Console.WriteLine(ColumnOf(level, 1));

string ColumnOf(List<string> level, int x)
{
    string column = "";
    for (int y = 0; y < level.Count; y++)
    {
        column = level[y][x];
    }
    return column;
}` },
          { run: `List<string> level = new List<string> { "#$.#", "#M.#" };
Console.WriteLine(ColumnOf(level, 1));
string ColumnOf(List<string> level, int x)
{
    string column = "";
    for (int y = 0; y < level.Count; y++) { column = column + level[y][x]; }
    return column;
}`, out: "$M" },
        ],
      },
    },
    {
      id: "q4-d05", skill: "draw", type: "mcq",
      stem: "DrawWide is the Quest 15 function. This level is one row.",
      code: `List<string> level = new List<string>();
level.Add("#@$.#");
DrawWide(level, 3, 0);

${drawWide}`,
      question: "What is printed?",
      choices: ["##..$$@@##", "##@@$$@@##", "##..$$..##", "#.$@#"],
      mono: true,
      why: [
        "Every tile is printed twice. The @ in the data at x 1 is only the start, so it prints as two floor tiles. The player is at x 3 and is tested first, so that tile prints @@.",
        "The start tile in the data is drawn as two floor tiles. Only the player's spot prints @@.",
        "x 3 is the player's spot, and the player test comes first, so it prints @@, not two floor tiles.",
        "That is the one character drawing. DrawWide adds two characters for every tile.",
      ],
      answer: 0,
      verify: { out: "##..$$@@##" },
    },
    {
      id: "q4-d06", skill: "draw", type: "output",
      stem: "In this rewrite of Draw, Console.WriteLine(row); was moved up, inside the inner loop.",
      code: `List<string> level = new List<string>();
level.Add("#$");
level.Add(".M");
Draw(level, 0, 1);

void Draw(List<string> level, int playerX, int playerY)
{
    for (int y = 0; y < level.Count; y++)
    {
        string row = "";
        for (int x = 0; x < level[y].Length; x++)
        {
            if (x == playerX && y == playerY)
            {
                row = row + "@";
            }
            else if (level[y][x] == '@')
            {
                row = row + ".";
            }
            else
            {
                row = row + level[y][x];
            }
            Console.WriteLine(row);
        }
    }
}`,
      question: "Type exactly what is printed, one line per line.",
      answer: "#\n#$\n@\n@M",
      why: "Now row is printed after every tile, not once per row, so each half built row shows up. row still starts empty for each y. The player is at x 0 of row 1, so row 1 starts with @.",
      verify: { out: "#\n#$\n@\n@M" },
    },
    {
      id: "q4-d07", skill: "draw", type: "trace",
      stem: "Trace DrawWide(level, 3, 1) for the level #####, #@.$#, #####. Follow only row 1, one row of the table per pass of the inner loop.",
      code: drawWide,
      question: "Fill in what each pass adds to row and row after the pass.",
      columns: ["x", "level[1][x]", "added", "row after the pass"],
      rows: [
        ["0", "#", "##", "##"],
        ["1", "@", "..", "##.."],
        ["2", ".", "..", "##...."],
        ["3", "$", "@@", "##....@@"],
        ["4", "#", "##", "##....@@##"],
      ],
      given: [[0, 0], [0, 1], [1, 0], [1, 1], [2, 0], [2, 1], [3, 0], [3, 1], [4, 0], [4, 1]],
      why: "row starts empty for y 1. The start tile @ adds two floor tiles. At x 3 the player test comes first, so the $ under the player is not drawn. The finished row is printed once, after x reaches 5.",
      verify: {
        run: `List<string> level = new List<string> { "#####", "#@.$#", "#####" };
int playerX = 3;
int playerY = 1;
int y = 1;
string row = "";
for (int x = 0; x < level[y].Length; x++)
{
    string added;
    if (x == playerX && y == playerY) { added = "@@"; }
    else if (level[y][x] == '@') { added = ".."; }
    else { added = "" + level[y][x] + level[y][x]; }
    row = row + added;
    Console.WriteLine(x + "," + level[y][x] + "," + added + "," + row);
}
var sw = new StringWriter();
var old = Console.Out;
Console.SetOut(sw);
DrawWide(level, 3, 1);
Console.SetOut(old);
if (sw.ToString().Split('\\n')[1].TrimEnd() != row) Console.WriteLine("MISMATCH");

${drawWide}`,
        out: "0,#,##,##\n1,@,..,##..\n2,.,..,##....\n3,$,@@,##....@@\n4,#,##,##....@@##",
      },
    },

    // ---------------------------------------------------------------- The walk (Quest 16)
    {
      id: "q4-k01", skill: "walk", type: "mcq",
      stem: "WalkX is the Quest 16 function. StepX returns -1 for a, 1 for d, and 0 for anything else.",
      code: `List<string> commands = new List<string>();
commands.Add("d");
commands.Add("d");
commands.Add("w");
commands.Add("a");
commands.Add("d");
commands.Add("s");
Console.WriteLine(WalkX(commands, 2));

int WalkX(List<string> commands, int startX)
{
    int x = startX;
    for (int i = 0; i < commands.Count; i++)
    {
        x = x + StepX(commands[i]);
    }
    return x;
}`,
      question: "What is printed?",
      choices: ["4", "2", "6", "3"],
      why: [
        "x starts at 2. The steps are +1, +1, 0, -1, +1, 0, so x ends at 4. w and s move up and down, not across.",
        "2 is how far the walk moves, without the start. x begins at startX, which is 2.",
        "6 treats a as a step right. a is -1, a step left.",
        "3 skips the first d, as a loop starting at i = 1 would. This loop starts at 0.",
      ],
      answer: 0,
      verify: { run: withGame(`List<string> commands = new List<string>();
commands.Add("d");
commands.Add("d");
commands.Add("w");
commands.Add("a");
commands.Add("d");
commands.Add("s");
Console.WriteLine(WalkX(commands, 2));

int WalkX(List<string> commands, int startX)
{
    int x = startX;
    for (int i = 0; i < commands.Count; i++)
    {
        x = x + StepX(commands[i]);
    }
    return x;
}`, "StepX"), out: "4" },
    },
    {
      id: "q4-k02", skill: "walk", type: "mcq",
      stem: "KeepPlaying is the Quest 16 function. The game loop keeps going while it returns true.",
      code: keepPlaying,
      question: "Which call returns true?",
      choices: [
        "KeepPlaying(\"w\", true, false)",
        "KeepPlaying(\"quit\", true, false)",
        "KeepPlaying(\"d\", false, false)",
        "KeepPlaying(\"s\", true, true)",
      ],
      mono: true,
      why: [
        "The command is not quit, someone is alive, and the party has not escaped. All three parts of the || test are false, so it returns true.",
        "command == \"quit\" is true. With ||, one true part is enough to return false.",
        "anyAlive == false is true: the whole party is down, so the game stops.",
        "escaped is true. The party got out, so the game stops.",
      ],
      answer: 0,
      verify: {
        run: `Console.WriteLine(KeepPlaying("w", true, false) + " " + KeepPlaying("quit", true, false) + " " + KeepPlaying("d", false, false) + " " + KeepPlaying("s", true, true));

${keepPlaying}`,
        out: "True False False False",
      },
    },
    {
      id: "q4-k03", skill: "walk", type: "mcq",
      stem: "A student rewrites KeepPlaying with && in place of ||. TurnsUntilStop counts the commands before the game would stop.",
      code: `List<string> commands = new List<string>();
commands.Add("w");
commands.Add("d");
commands.Add("quit");
commands.Add("s");
Console.WriteLine(TurnsUntilStop(commands));

int TurnsUntilStop(List<string> commands)
{
    int turns = 0;
    for (int i = 0; i < commands.Count; i++)
    {
        if (KeepPlaying(commands[i], true, false) == false)
        {
            return turns;
        }
        turns = turns + 1;
    }
    return turns;
}

bool KeepPlaying(string command, bool anyAlive, bool escaped)
{
    if (command == "quit" && anyAlive == false && escaped)
    {
        return false;
    }
    return true;
}`,
      question: "What is printed?",
      choices: ["4", "2", "3", "0"],
      why: [
        "With &&, KeepPlaying returns false only when all three are true at once. anyAlive is true here, so it always returns true. quit is ignored and all 4 commands count.",
        "2 is what the Quest 16 KeepPlaying gives: it stops at quit, after w and d.",
        "3 counts the quit as a turn. Even with ||, the function returns before turns goes up for quit.",
        "0 would need the first call to return false. With && and anyAlive true, no call does.",
      ],
      answer: 0,
      verify: {
        cases: [
          { run: `List<string> commands = new List<string>();
commands.Add("w");
commands.Add("d");
commands.Add("quit");
commands.Add("s");
Console.WriteLine(TurnsUntilStop(commands));

int TurnsUntilStop(List<string> commands)
{
    int turns = 0;
    for (int i = 0; i < commands.Count; i++)
    {
        if (KeepPlaying(commands[i], true, false) == false)
        {
            return turns;
        }
        turns = turns + 1;
    }
    return turns;
}

bool KeepPlaying(string command, bool anyAlive, bool escaped)
{
    if (command == "quit" && anyAlive == false && escaped)
    {
        return false;
    }
    return true;
}`, out: "4" },
          { run: `List<string> commands = new List<string> { "w", "d", "quit", "s" };
Console.WriteLine(TurnsUntilStop(commands));
int TurnsUntilStop(List<string> commands)
{
    int turns = 0;
    for (int i = 0; i < commands.Count; i++) { if (KeepPlaying(commands[i], true, false) == false) { return turns; } turns = turns + 1; }
    return turns;
}

${keepPlaying}`, out: "2" },
        ],
      },
    },
    {
      id: "q4-k04", skill: "walk", type: "mcq",
      stem: "TileAt is the Levels.cs function. StepsToWall uses a while loop, because the number of steps is not known before the loop starts.",
      code: `List<string> level = new List<string>();
level.Add("#######");
level.Add("#@..$.#");
level.Add("#######");
Console.WriteLine(StepsToWall(level, 1, 1));

int StepsToWall(List<string> level, int x, int y)
{
    int steps = 0;
    while (TileAt(level, x + 1, y) != '#')
    {
        x = x + 1;
        steps = steps + 1;
    }
    return steps;
}`,
      question: "What is printed?",
      choices: ["4", "5", "6", "2"],
      why: [
        "The test looks one tile ahead. x moves to 2, 3, 4, and 5. At x 5 the tile ahead is #, so the loop stops after 4 steps.",
        "The wall is never stepped onto. The test is asked before each step and is false when the next tile is #.",
        "6 is the x of the wall. The function returns steps, which counts moves from x 1.",
        "$ is not #, so the loop walks right over the loot.",
      ],
      answer: 0,
      verify: { run: withGame(`List<string> level = new List<string>();
level.Add("#######");
level.Add("#@..$.#");
level.Add("#######");
Console.WriteLine(StepsToWall(level, 1, 1));

int StepsToWall(List<string> level, int x, int y)
{
    int steps = 0;
    while (TileAt(level, x + 1, y) != '#')
    {
        x = x + 1;
        steps = steps + 1;
    }
    return steps;
}`, "TileAt"), out: "4" },
    },
    {
      id: "q4-k05", skill: "walk", type: "output",
      stem: "WalkX and WalkY are the Quest 16 functions, and TileAt is from Levels.cs. WalkX only uses a and d. WalkY only uses w and s.",
      code: `List<string> level = new List<string>();
level.Add("#####");
level.Add("#@..#");
level.Add("#.M.#");
level.Add("#.$.#");
level.Add("#####");
List<string> commands = new List<string>();
commands.Add("d");
commands.Add("d");
commands.Add("s");
commands.Add("a");
commands.Add("s");
commands.Add("w");
commands.Add("s");
int x = WalkX(commands, 1);
int y = WalkY(commands, 1);
Console.WriteLine(x + "," + y);
Console.WriteLine(TileAt(level, x, y));`,
      question: "Type exactly what is printed, one line per line.",
      answer: "2,3\n$",
      why: "WalkX adds +1, +1, -1 for d, d, a, so x goes from 1 to 2. WalkY adds +1, +1, -1, +1 for s, s, w, s, so y goes from 1 to 3. level[3][2] is $.",
      verify: {
        run: withGame(`List<string> level = new List<string>();
level.Add("#####");
level.Add("#@..#");
level.Add("#.M.#");
level.Add("#.$.#");
level.Add("#####");
List<string> commands = new List<string>();
commands.Add("d");
commands.Add("d");
commands.Add("s");
commands.Add("a");
commands.Add("s");
commands.Add("w");
commands.Add("s");
int x = WalkX(commands, 1);
int y = WalkY(commands, 1);
Console.WriteLine(x + "," + y);
Console.WriteLine(TileAt(level, x, y));`, "TileAt", "StepX", "StepY", "WalkX", "WalkY"),
        out: "2,3\n$",
      },
    },
    {
      id: "q4-k06", skill: "walk", type: "output",
      stem: "StepX and StepY are the Screens.cs functions: a is -1 and d is 1 across, w is -1 and s is 1 down, and any other command is 0.",
      code: `List<string> commands = new List<string>();
commands.Add("w");
commands.Add("a");
commands.Add("e");
commands.Add("a");
Replay(commands, 4, 2);

void Replay(List<string> commands, int x, int y)
{
    for (int i = 0; i < commands.Count; i++)
    {
        x = x + StepX(commands[i]);
        y = y + StepY(commands[i]);
        Console.WriteLine(commands[i] + " " + x + "," + y);
    }
}`,
      question: "Type exactly what is printed, one line per line.",
      answer: "w 4,1\na 3,1\ne 3,1\na 2,1",
      why: "The for loop knows its count: one pass per command, 4 in all. w moves up, so y goes to 1. Each a moves x left by 1. e is not a move, so both steps are 0 and the position stays 3,1.",
      verify: {
        run: withGame(`List<string> commands = new List<string>();
commands.Add("w");
commands.Add("a");
commands.Add("e");
commands.Add("a");
Replay(commands, 4, 2);

void Replay(List<string> commands, int x, int y)
{
    for (int i = 0; i < commands.Count; i++)
    {
        x = x + StepX(commands[i]);
        y = y + StepY(commands[i]);
        Console.WriteLine(commands[i] + " " + x + "," + y);
    }
}`, "StepX", "StepY"),
        out: "w 4,1\na 3,1\ne 3,1\na 2,1",
      },
    },
    {
      id: "q4-k07", skill: "walk", type: "trace",
      stem: "Trace WalkY(commands, 2) for the commands s, d, s, w, s, one row per pass.",
      code: G.WalkY,
      question: "Fill in what StepY returns and y after each pass, then what the function returns.",
      columns: ["i", "commands[i]", "StepY(commands[i])", "y after the pass"],
      rows: [
        ["0", "s", "1", "3"],
        ["1", "d", "0", "3"],
        ["2", "s", "1", "4"],
        ["3", "w", "-1", "3"],
        ["4", "s", "1", "4"],
        ["returns", "", "", "4"],
      ],
      given: [[0, 0], [0, 1], [1, 0], [1, 1], [2, 0], [2, 1], [3, 0], [3, 1], [4, 0], [4, 1], [5, 0]],
      why: "y starts at startY, 2. s is 1 down and w is 1 up. d moves across, so StepY gives 0 and y does not change. Each step is added to y, so y keeps a running total of the moves.",
      verify: {
        run: withGame(`List<string> commands = new List<string> { "s", "d", "s", "w", "s" };
int y = 2;
for (int i = 0; i < commands.Count; i++)
{
    y = y + StepY(commands[i]);
    Console.WriteLine(i + "," + commands[i] + "," + StepY(commands[i]) + "," + y);
}
Console.WriteLine("returns,,," + WalkY(commands, 2));`, "StepY", "WalkY"),
        out: "0,s,1,3\n1,d,0,3\n2,s,1,4\n3,w,-1,3\n4,s,1,4\nreturns,,,4",
      },
    },

    // ---------------------------------------------------------------- Milestone 2 rewrites
    {
      id: "q4-r01", skill: "rewrite", type: "mcq",
      stem: "NextAliveIndex returns the first index with health above 0, or -1. WinnerName returns the name with more health, or nobody on a tie.",
      code: `List<string> names = new List<string>();
List<int> health = new List<int>();
names.Add("Rook");
health.Add(0);
names.Add("Mote");
health.Add(6);
names.Add("Hero");
health.Add(9);
List<string> mNames = new List<string>();
List<int> mHealth = new List<int>();
mNames.Add("Grub");
mHealth.Add(0);
mNames.Add("Bat");
mHealth.Add(-2);
mNames.Add("Ogre");
mHealth.Add(6);
Console.WriteLine(Duel(names, health, mNames, mHealth));

string Duel(List<string> names, List<int> health, List<string> mNames, List<int> mHealth)
{
    int h = NextAliveIndex(health);
    int m = NextAliveIndex(mHealth);
    return WinnerName(names[h], health[h], mNames[m], mHealth[m]);
}`,
      question: "What is printed?",
      choices: ["nobody", "Hero", "It builds, then crashes when it runs (ArgumentOutOfRangeException).", "Ogre"],
      why: [
        "Rook has 0, so h is 1: Mote, with 6. Grub has 0 and Bat has -2, so m is 2: Ogre, with 6. 6 against 6 is a tie.",
        "Hero has the most health, but NextAliveIndex returns the first index that is alive, not the strongest.",
        "Rook and Grub have 0 and are skipped, but Mote and Ogre are alive. Neither h nor m is -1, so every index is in range.",
        "WinnerName returns b only when bHp > aHp. 6 > 6 is false.",
      ],
      answer: 0,
      verify: {
        run: withGame(`List<string> names = new List<string>();
List<int> health = new List<int>();
names.Add("Rook");
health.Add(0);
names.Add("Mote");
health.Add(6);
names.Add("Hero");
health.Add(9);
List<string> mNames = new List<string>();
List<int> mHealth = new List<int>();
mNames.Add("Grub");
mHealth.Add(0);
mNames.Add("Bat");
mHealth.Add(-2);
mNames.Add("Ogre");
mHealth.Add(6);
Console.WriteLine(Duel(names, health, mNames, mHealth));

string Duel(List<string> names, List<int> health, List<string> mNames, List<int> mHealth)
{
    int h = NextAliveIndex(health);
    int m = NextAliveIndex(mHealth);
    return WinnerName(names[h], health[h], mNames[m], mHealth[m]);
}`, "IsAlive", "NextAliveIndex", "WinnerName"),
        out: "nobody",
      },
    },
    {
      id: "q4-r02", skill: "rewrite", type: "mcq",
      stem: "A student rewrites Damage for Milestone 2 and moves the line that keeps damage at 1 or more. TotalDamage adds up one hit on each monster.",
      code: `List<int> defense = new List<int>();
defense.Add(1);
defense.Add(5);
defense.Add(2);
Console.WriteLine(TotalDamage(4, defense));

int TotalDamage(int attackPower, List<int> defense)
{
    int total = 0;
    for (int i = 0; i < defense.Count; i++)
    {
        total = total + Damage(attackPower, defense[i]);
    }
    return total;
}

int Damage(int attackPower, int defense)
{
    int dealt = attackPower;
    if (dealt < 1) dealt = 1;
    dealt = dealt - defense;
    return dealt;
}`,
      question: "What is printed?",
      choices: ["4", "6", "-1", "12"],
      why: [
        "The check for less than 1 now runs before the defense is taken off, when dealt is still 4. The hits are 3, -1, and 2, and the -1 is never raised to 1. 3, -1, and 2 add up to 4.",
        "6 is what the Milestone 2 Damage gives: 3, 1, and 2. There the check comes after the subtraction. Order matters.",
        "-1 is only the second hit. TotalDamage adds all three.",
        "12 is 4 attack three times with no defense taken off.",
      ],
      answer: 0,
      verify: {
        cases: [
          { run: `List<int> defense = new List<int>();
defense.Add(1);
defense.Add(5);
defense.Add(2);
Console.WriteLine(TotalDamage(4, defense));

int TotalDamage(int attackPower, List<int> defense)
{
    int total = 0;
    for (int i = 0; i < defense.Count; i++)
    {
        total = total + Damage(attackPower, defense[i]);
    }
    return total;
}

int Damage(int attackPower, int defense)
{
    int dealt = attackPower;
    if (dealt < 1) dealt = 1;
    dealt = dealt - defense;
    return dealt;
}`, out: "4" },
          { run: `List<int> defense = new List<int> { 1, 5, 2 };
Console.WriteLine(TotalDamage(4, defense));
int TotalDamage(int attackPower, List<int> defense)
{
    int total = 0;
    for (int i = 0; i < defense.Count; i++) { total = total + Damage(attackPower, defense[i]); }
    return total;
}
int Damage(int attackPower, int defense)
{
    int dealt = attackPower - defense;
    if (dealt < 1) dealt = 1;
    return dealt;
}`, out: "6" },
        ],
      },
    },
    {
      id: "q4-r03", skill: "rewrite", type: "mcq",
      stem: "MonsterAt is the Combat.cs function. Three monsters stand at (2, 3), (5, 1), and (2, 4).",
      code: `List<int> mX = new List<int>();
List<int> mY = new List<int>();
mX.Add(2);
mY.Add(3);
mX.Add(5);
mY.Add(1);
mX.Add(2);
mY.Add(4);

${monsterAt}`,
      question: "Which call returns 2?",
      choices: ["MonsterAt(mX, mY, 2, 4)", "MonsterAt(mX, mY, 4, 2)", "MonsterAt(mX, mY, 2, 3)", "MonsterAt(mX, mY, 5, 1)"],
      mono: true,
      why: [
        "Monster 2 stands at x 2, y 4. Index 0 also has x 2, but its y is 3, so && is false there and the loop goes on.",
        "x and y are swapped. No monster stands at x 4, so it returns -1.",
        "Two monsters have x 2. The one at y 3 is index 0, and the function returns at the first match on both x and y.",
        "That is monster 1. MonsterAt returns an index, and the 2 asked for is an index, not an x.",
      ],
      answer: 0,
      verify: {
        run: `List<int> mX = new List<int>();
List<int> mY = new List<int>();
mX.Add(2);
mY.Add(3);
mX.Add(5);
mY.Add(1);
mX.Add(2);
mY.Add(4);
Console.WriteLine(MonsterAt(mX, mY, 2, 4) + " " + MonsterAt(mX, mY, 4, 2) + " " + MonsterAt(mX, mY, 2, 3) + " " + MonsterAt(mX, mY, 5, 1));

${monsterAt}`,
        out: "2 -1 0 1",
      },
    },
    {
      id: "q4-r04", skill: "rewrite", type: "mcq",
      stem: "FindCharacter returns the index of a name, or -1. Heal returns hp + 3. A student writes HealByName.",
      code: `List<string> names = new List<string>();
List<int> health = new List<int>();
names.Add("Rook");
health.Add(5);
names.Add("Mote");
health.Add(2);
names.Add("Hero");
health.Add(8);
HealByName(names, health, "Mote");

void HealByName(List<string> names, List<int> health, string name)
{
    int i = FindCharacter(names, name);
    Heal(health[i]);
    Console.WriteLine(names[i] + " " + health[i]);
}`,
      question: "What is printed?",
      choices: ["Mote 2", "Mote 5", "Rook 8", "It does not build: the value that Heal returns is not used."],
      why: [
        "Heal returns 5, but nothing stores it, so health[1] is still 2. The fix is health[i] = Heal(health[i]);.",
        "5 is what Heal returns. A returned value is lost unless it is stored or used.",
        "Rook is index 0. FindCharacter returns 1, the index of Mote.",
        "C# lets a call's returned value be thrown away. It builds, and the bug only shows when it runs.",
      ],
      answer: 0,
      verify: {
        run: withGame(`List<string> names = new List<string>();
List<int> health = new List<int>();
names.Add("Rook");
health.Add(5);
names.Add("Mote");
health.Add(2);
names.Add("Hero");
health.Add(8);
HealByName(names, health, "Mote");

void HealByName(List<string> names, List<int> health, string name)
{
    int i = FindCharacter(names, name);
    Heal(health[i]);
    Console.WriteLine(names[i] + " " + health[i]);
}`, "FindCharacter", "Heal"),
        out: "Mote 2",
      },
    },
    {
      id: "q4-r05", skill: "rewrite", type: "output",
      stem: "HealthBar is the Milestone 2 function. {name,-8} pads the name with spaces on the right to 8 characters.",
      code: `List<string> names = new List<string>();
List<int> health = new List<int>();
names.Add("Rook");
health.Add(3);
names.Add("Mote");
health.Add(7);
names.Add("Grub");
health.Add(0);
for (int i = 0; i < names.Count; i++)
{
    Console.WriteLine(HealthBar(names[i], health[i], 5));
}

string HealthBar(string name, int hp, int maxHp)
{
    string bar = "";
    for (int i = 0; i < maxHp; i++)
    {
        if (i < hp) bar = bar + "#";
        else bar = bar + "-";
    }
    return $"{name,-8} [{bar}] {hp}/{maxHp}";
}`,
      question: "Type exactly what is printed, one line per line.",
      answer: "Rook     [###--] 3/5\nMote     [#####] 7/5\nGrub     [-----] 0/5",
      why: "The bar's loop runs maxHp times, so every bar is 5 characters. Mote has 7, more than 5, so i < hp is true on every pass and the bar is full, but the number still says 7/5. Each 4 letter name gets 4 spaces of padding, then the space before the bracket.",
      verify: { out: "Rook     [###--] 3/5\nMote     [#####] 7/5\nGrub     [-----] 0/5" },
    },
    {
      id: "q4-r06", skill: "rewrite", type: "output",
      stem: "CountTiles, IsWall, and TileAt are the Levels.cs functions. OpenSides counts the sides of a tile that are not walls.",
      code: `List<string> level = new List<string>();
level.Add("#.##");
level.Add("..M#");
level.Add("#.#.");
Console.WriteLine(CountTiles(level, '#'));
Console.WriteLine(OpenSides(level, 1, 1));
Console.WriteLine(OpenSides(level, 0, 1));

int OpenSides(List<string> level, int x, int y)
{
    int open = 0;
    if (IsWall(level, x, y - 1) == false) open = open + 1;
    if (IsWall(level, x, y + 1) == false) open = open + 1;
    if (IsWall(level, x - 1, y) == false) open = open + 1;
    if (IsWall(level, x + 1, y) == false) open = open + 1;
    return open;
}`,
      question: "Type exactly what is printed, one line per line.",
      answer: "6\n4\n1",
      why: "The rows have 3, 1, and 2 walls. Around (1, 1) the tiles are ., ., ., and M, and IsWall is only true for #, so all 4 are open. For (0, 1), above and below are #, and the left side is off the map, where TileAt gives #. Only the right side is open.",
      verify: {
        run: withGame(`List<string> level = new List<string>();
level.Add("#.##");
level.Add("..M#");
level.Add("#.#.");
Console.WriteLine(CountTiles(level, '#'));
Console.WriteLine(OpenSides(level, 1, 1));
Console.WriteLine(OpenSides(level, 0, 1));

int OpenSides(List<string> level, int x, int y)
{
    int open = 0;
    if (IsWall(level, x, y - 1) == false) open = open + 1;
    if (IsWall(level, x, y + 1) == false) open = open + 1;
    if (IsWall(level, x - 1, y) == false) open = open + 1;
    if (IsWall(level, x + 1, y) == false) open = open + 1;
    return open;
}`, "TileAt", "IsWall", "CountTiles"),
        out: "6\n4\n1",
      },
    },
    {
      id: "q4-r07", skill: "rewrite", type: "trace",
      stem: "Trace HealParty(health, 10) for health 9, 1, 6. Heal returns hp + 3. Clamp(value, low, high) gives low if value is below low, high if it is above high, and value otherwise.",
      code: `void HealParty(List<int> health, int maxHp)
{
    for (int i = 0; i < health.Count; i++)
    {
        health[i] = Clamp(Heal(health[i]), 0, maxHp);
    }
}`,
      question: "Fill in what Heal returns and health[i] after each pass.",
      columns: ["i", "health[i] before", "Heal(health[i])", "health[i] after"],
      rows: [
        ["0", "9", "12", "10"],
        ["1", "1", "4", "4"],
        ["2", "6", "9", "9"],
      ],
      given: [[0, 0], [0, 1], [1, 0], [1, 1], [2, 0], [2, 1]],
      why: "Heal's answer is passed straight into Clamp, and Clamp's answer is stored back in health[i]. Only 12 is above maxHp, so it becomes 10. The others are between 0 and 10 and stay as they are.",
      verify: {
        run: withGame(`List<int> health = new List<int> { 9, 1, 6 };
List<int> before = new List<int>(health);
HealParty(health, 10);
for (int i = 0; i < health.Count; i++)
{
    Console.WriteLine(i + "," + before[i] + "," + Heal(before[i]) + "," + health[i]);
}

void HealParty(List<int> health, int maxHp)
{
    for (int i = 0; i < health.Count; i++)
    {
        health[i] = Clamp(Heal(health[i]), 0, maxHp);
    }
}`, "Heal", "Clamp"),
        out: "0,9,12,10\n1,1,4,4\n2,6,9,9",
      },
    },
  ],
};

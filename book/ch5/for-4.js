// Level 1 from Levels.cs, as a local function each example can call.
const LEVEL1 = `List<string> MakeLevel1()
{
    List<string> level = new List<string>();
    level.Add("##########");
    level.Add("#@...#..+#");
    level.Add("#.##.#.#.#");
    level.Add("#.#..M.#.#");
    level.Add("#.#.##.#.#");
    level.Add("#...#..$.#");
    level.Add("##########");
    return level;
}`;

const COUNT_IN_ROW = `int CountInRow(List<string> level, int y, char tile)
{
    int count = 0;
    for (int x = 0; x < level[y].Length; x++)
    {
        if (level[y][x] == tile)
        {
            count = count + 1;
        }
    }
    return count;
}`;

export default {
  id: "for-4",
  chapter: 5,
  number: "5.4",
  title: "Rows and columns: a loop inside a loop",
  from: "For 4 · Day 14",
  minutes: 30,
  skills: ["listloop"],
  goals: [
    "Read one tile of a level with `level[y][x]`, row first",
    "Compare a tile with a `char` in single quotes, like `'M'`",
    "Visit every tile of a level with a loop inside a loop",
    "Work out how many times the body of the inner loop runs",
  ],
  blocks: [
    {
      type: "text",
      md: "A level in the game is a `List<string>`: one string per row, every row the same length, one character per tile. `level[1]` is a whole row, a string. `level[1][3]` is one character of that row. The first index picks the row and the second picks the tile inside it: row first.",
    },
    {
      type: "code",
      code: `List<string> level = MakeLevel1();
Console.WriteLine(level[1]);
Console.WriteLine(level[1][1]);
Console.WriteLine(level[5][7]);

${LEVEL1}`,
      expect: { out: "#@...#..+#\n@\n$" },
    },
    {
      type: "text",
      md: "Find the `$` in `MakeLevel1`: count down the `Add` lines to row 5, calling the first one row 0, then count across that string to column 7, calling the first character column 0.",
    },
    {
      type: "recipe",
      title: "Reading one tile",
      template: "{level}[{y}][{x}]",
      parts: [
        { slot: "{level}", meaning: "the list of rows" },
        { slot: "[{y}]", meaning: "picks one row, a `string`. `y` counts down from 0 at the top." },
        { slot: "[{x}]", meaning: "picks one character of that row, a `char`. `x` counts across from 0 at the left." },
      ],
    },
    {
      type: "text",
      md: "## One character is a char\n\nOne character has its own type, `char`, written in single quotes: `'M'`. Double quotes make a string, so `\"M\"` is a string with one letter in it. A row is a string, so its width is `level[y].Length`. The level is a list, so its height is `level.Count`.\n\nOne loop walks across one row: `y` stays where it is, and `x` runs from 0 to the end of the row.",
    },
    {
      type: "code",
      code: `List<string> level = MakeLevel1();
Console.WriteLine(CountInRow(level, 1, '.'));
Console.WriteLine(CountInRow(level, 0, '#'));

${COUNT_IN_ROW}

${LEVEL1}`,
      expect: { out: "5\n10" },
    },
    {
      type: "text",
      md: "Row 1 is `#@...#..+#`, which has five dots. Row 0 is all wall: ten `#`.",
    },
    {
      type: "note",
      kind: "trap",
      md: "A tile is a `char`, and `==` will not compare a `char` with a string. `level[3][5] == \"M\"` stops the build with `CS0019: Operator '==' cannot be applied to operands of type 'char' and 'string'`. Run the line below, then change `\"M\"` to `'M'` and run it again.",
    },
    {
      type: "code",
      code: `List<string> level = MakeLevel1();
Console.WriteLine(level[3][5] == "M");

${LEVEL1}`,
      expect: { error: "CS0019" },
    },
    {
      type: "text",
      md: "## A loop inside a loop\n\nTo visit every tile, put the loop across a row inside a loop down the rows. The outer loop picks a row with `y`. For each `y`, the inner loop runs `x` all the way across that row.",
    },
    {
      type: "code",
      code: `List<string> level = MakeLevel1();
Console.WriteLine(CountOnLevel(level, 'M'));
Console.WriteLine(CountOnLevel(level, '.'));

int CountOnLevel(List<string> level, char tile)
{
    int count = 0;
    for (int y = 0; y < level.Count; y++)
    {
        for (int x = 0; x < level[y].Length; x++)
        {
            if (level[y][x] == tile)
            {
                count = count + 1;
            }
        }
    }
    return count;
}

${LEVEL1}`,
      expect: { out: "1\n24" },
    },
    {
      type: "text",
      md: "Level 1 has one `M` and 24 dots. The game has this function too: `CountTiles` in `Levels.cs` is the same two loops, and `CheckLevel` uses `CountTiles(level, '+') < 1` to refuse a level with no door.\n\nWhich of `y` and `x` moves first? Step through this room of two rows and three columns, and watch both in the Variables pane.",
    },
    {
      type: "step",
      code: `List<string> room = new List<string>();
room.Add("#M.");
room.Add("$.#");
for (int y = 0; y < room.Count; y++)
{
    for (int x = 0; x < room[y].Length; x++)
    {
        Console.WriteLine($"y {y}, x {x}: {room[y][x]}");
    }
}`,
      notes: {
        "4": "The outer loop. y picks the row, and it changes only after the inner loop has finished.",
        "6": "The inner loop. x runs across the row y is on, starting from 0 each time the outer loop comes round.",
        "8": "Prints the tile at row y, column x.",
      },
      expect: { out: "y 0, x 0: #\ny 0, x 1: M\ny 0, x 2: .\ny 1, x 0: $\ny 1, x 1: .\ny 1, x 2: #" },
    },
    {
      type: "text",
      md: "`x` runs 0, 1, 2 while `y` stays 0. When row 0 is finished, `y` moves to 1 and `x` starts again at 0. The inner loop finishes a whole row on every pass of the outer loop, so the body runs once per tile: 2 rows of 3 tiles is 6 lines.",
    },
    {
      type: "text",
      md: "## Backwards: level[x][y]\n\nOn a graph, across comes first. Here is `CountOnLevel` with the two indexes swapped, run on level 1.",
    },
    {
      type: "code",
      code: `List<string> level = MakeLevel1();
Console.WriteLine(CountOnLevel(level, 'M'));

int CountOnLevel(List<string> level, char tile)
{
    int count = 0;
    for (int y = 0; y < level.Count; y++)
    {
        for (int x = 0; x < level[y].Length; x++)
        {
            if (level[x][y] == tile)
            {
                count = count + 1;
            }
        }
    }
    return count;
}

${LEVEL1}`,
      expect: { out: "", crash: "ArgumentOutOfRangeException" },
    },
    {
      type: "text",
      md: "It builds, then stops with `ArgumentOutOfRangeException: Index was out of range. Must be non-negative and less than the size of the collection.` `level[x]` asks the list for a row. Level 1 has rows 0 to 6, and on row 0 `x` runs to 9, so when `x` reaches 7 there is no row 7. Put the indexes back to `level[y][x]` and run it again.",
    },
    {
      type: "note",
      kind: "trap",
      md: "On a level as tall as it is wide, `level[x][y]` does not crash. It reads the tile at the wrong place, and nothing warns you. On level 1, which is wider than it is tall, it crashes. Write `level[y][x]`: the row first.",
    },
    {
      type: "ap",
      md: "Question 2(b) on the 2026 exam asks for a call to your own procedure that is accepted but makes the procedure behave incorrectly. `CountInRow(level, 7, '.')` builds, because 7 is an `int`. When it runs, `level[y]` asks level 1 for row 7, and the program stops with `ArgumentOutOfRangeException`. A strong answer gives the call with its numbers, the line that fails, and why: level 1 has rows 0 to 6.",
    },
    {
      type: "mcq",
      id: "for-4-q1",
      question: "A level has 11 rows of 20 tiles. `CountOnLevel` is called once on it. How many times does the `if` inside the two loops run?",
      choices: ["220", "31", "20", "11"],
      answer: 0,
      why: [
        "The inner loop runs 20 times for each of the 11 rows: 11 times 20 is 220, once per tile.",
        "31 adds the two loops. The inner loop is inside the outer one, so it runs all 20 passes again for every row.",
        "20 is one row. The outer loop runs the inner loop once for each of the 11 rows.",
        "11 is how many times the outer loop runs. Each of those passes runs the inner loop 20 times.",
      ],
      verify: {
        run: `List<string> level = new List<string>();
for (int i = 0; i < 11; i++)
{
    level.Add("####################");
}
int checks = 0;
for (int y = 0; y < level.Count; y++)
{
    for (int x = 0; x < level[y].Length; x++)
    {
        if (level[y][x] == 'M')
        {
            Console.WriteLine("monster");
        }
        checks = checks + 1;
    }
}
Console.WriteLine(checks);`,
        out: "220",
      },
    },
    {
      type: "mcq",
      id: "for-4-q2",
      question: "What is printed?",
      code: `List<string> room = new List<string>();
room.Add("#M#");
room.Add("...");
room.Add("#$#");
int x = 1;
int y = 2;
Console.WriteLine(room[x][y]);`,
      choices: [".", "$", "M", "It crashes with ArgumentOutOfRangeException."],
      answer: 0,
      why: [
        "room[x][y] is room[1][2]: row 1, column 2, a floor tile. The room is square, so the swapped indexes do not crash.",
        "The $ is at column 1 of row 2, which is room[y][x], room[2][1]. The first index picks the row.",
        "The M is room[0][1], row 0. Neither index here is 0.",
        "The room has rows 0 to 2 and each row has columns 0 to 2. room[1][2] is inside both.",
      ],
      verify: { out: "." },
    },
    {
      type: "mcq",
      id: "for-4-q3",
      question: "The inner loop tests `x < hall.Count`. What is printed?",
      code: `List<string> hall = new List<string>();
hall.Add("##$$#");
hall.Add("#$..$");
hall.Add("#####");
int loot = 0;
for (int y = 0; y < hall.Count; y++)
{
    for (int x = 0; x < hall.Count; x++)
    {
        if (hall[y][x] == '$')
        {
            loot = loot + 1;
        }
    }
}
Console.WriteLine(loot);`,
      choices: ["2", "4", "3", "It crashes with IndexOutOfRangeException."],
      answer: 0,
      why: [
        "hall.Count is 3, the number of rows, so x only reaches columns 0, 1, and 2. Those hold one $ in row 0 and one in row 1. Columns 3 and 4 are never looked at.",
        "4 is every $ in the hall. The inner loop stops at hall.Count, 3, and two of the $ are in columns 3 and 4.",
        "Count the $ in columns 0 to 2 only: row 0 has one, at column 2, and row 1 has one, at column 1.",
        "Every row is 5 wide, so columns 0 to 2 are all there. Stopping early does not crash; it skips tiles. The width of a row is hall[y].Length.",
      ],
      verify: { out: "2" },
    },
    {
      type: "mcq",
      id: "for-4-q4",
      question: "`level` is level 1, seven rows of ten. Which call to `CountInRow` builds, then crashes when it runs?",
      choices: ["CountInRow(level, 7, '.')", "CountInRow(level, 6, '.')", "CountInRow(level, 0, 'M')", "CountInRow(level, 1, \"M\")"],
      mono: true,
      answer: 0,
      why: [
        "7 is an int, so it builds. Level 1 has rows 0 to 6, and level[7] stops the program with ArgumentOutOfRangeException.",
        "Row 6 is the bottom wall, the last row. It runs and returns 0.",
        "Row 0 is all wall, so it returns 0. Finding nothing is not a crash.",
        "\"M\" is a string and the parameter is a char. This one does not build: CS1503.",
      ],
      verify: {
        cases: [
          { run: `List<string> level = MakeLevel1();\nConsole.WriteLine(CountInRow(level, 7, '.'));\n\n${COUNT_IN_ROW}\n\n${LEVEL1}`, out: "", crash: "ArgumentOutOfRangeException" },
          { run: `List<string> level = MakeLevel1();\nConsole.WriteLine(CountInRow(level, 6, '.'));\n\n${COUNT_IN_ROW}\n\n${LEVEL1}`, out: "0" },
          { run: `List<string> level = MakeLevel1();\nConsole.WriteLine(CountInRow(level, 0, 'M'));\n\n${COUNT_IN_ROW}\n\n${LEVEL1}`, out: "0" },
          { run: `List<string> level = MakeLevel1();\nConsole.WriteLine(CountInRow(level, 1, "M"));\n\n${COUNT_IN_ROW}\n\n${LEVEL1}`, error: "CS1503" },
        ],
      },
    },
    {
      type: "parsons",
      id: "for-4-p1",
      prompt: "Put the lines in order so the program prints every tile of `room`, one per line, row 0 first: `#`, `M`, `#`, then `#`, `.`, `#`.",
      lines: [
        `List<string> room = new List<string> { "#M#", "#.#" };`,
        `for (int y = 0; y < room.Count; y++)`,
        `{`,
        `    for (int x = 0; x < room[y].Length; x++)`,
        `    {`,
        `        Console.WriteLine(room[y][x]);`,
        `    }`,
        `}`,
      ],
      distractors: [`        Console.WriteLine(room[x][y]);`],
      expect: { out: "#\nM\n#\n#\n.\n#" },
    },
    {
      type: "exercise",
      id: "for-4-e1",
      prompt: "Write `RowOf`. It returns the number of the first row, from the top, that has `tile` in it, or `-1` when no row has it. Level 1 has its `M` in row 3, so `RowOf(MakeLevel1(), 'M')` is `3`.",
      starter: `int RowOf(List<string> level, char tile)
{
    return 0;
}`,
      solution: `int RowOf(List<string> level, char tile)
{
    for (int y = 0; y < level.Count; y++)
    {
        for (int x = 0; x < level[y].Length; x++)
        {
            if (level[y][x] == tile)
            {
                return y;
            }
        }
    }
    return -1;
}`,
      given: `${LEVEL1}

List<string> Cave()
{
    List<string> level = new List<string>();
    level.Add("#####");
    level.Add("#@.$#");
    level.Add("#####");
    return level;
}`,
      tests: [
        { call: `RowOf(MakeLevel1(), 'M')`, expect: "3" },
        { call: `RowOf(MakeLevel1(), '+')`, expect: "1" },
        { call: `RowOf(MakeLevel1(), '$')`, expect: "5" },
        { call: `RowOf(Cave(), '$')`, expect: "1" },
        { call: `RowOf(Cave(), 'M')`, expect: "-1" },
      ],
      hints: [
        "Use the two loops from `CountOnLevel`. When `level[y][x] == tile`, the answer is the row, so return `y`.",
        "`return -1;` goes after both loops have finished, once every tile has been checked.",
      ],
    },
    {
      type: "summary",
      items: [
        "A level is a `List<string>`, one string per row. `level[y][x]` is one tile: the row first, then the column.",
        "A tile is a `char`, written in single quotes: `'M'`. Comparing a tile with `\"M\"` does not build (CS0019).",
        "A row's width is `level[y].Length`. The level's height is `level.Count`.",
        "In a loop inside a loop, `x` runs all the way across a row before `y` moves once. The body runs once per tile: rows times columns.",
        "`level[x][y]` builds. On level 1 it crashes with `ArgumentOutOfRangeException`; on a square room it reads the wrong tile.",
      ],
    },
  ],
};

// Level 1 from Levels.cs, and a small room, as local functions each example can call.
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

const ROOM = `List<string> MakeRoom()
{
    List<string> room = new List<string>();
    room.Add("######");
    room.Add("#@.M.#");
    room.Add("#..$+#");
    room.Add("######");
    return room;
}`;

export default {
  id: "for-5",
  chapter: 5,
  number: "5.5",
  title: "Draw a level: build a row, then print it",
  from: "For 5 · Day 15",
  minutes: 30,
  skills: ["listloop"],
  goals: [
    "Draw a level by building each row as a string and printing it once",
    "Say why `string row = \"\";` goes inside the outer loop",
    "Add two characters to a string without getting a number",
    "Draw the player from `playerX` and `playerY`, not from the `@` in the data",
  ],
  blocks: [
    {
      type: "text",
      md: "The two loops that count tiles can also draw them. The outer loop starts an empty string for each row. The inner loop adds one character to it for each tile. When the inner loop is over, the row is full, and one `Console.WriteLine` prints it.",
    },
    {
      type: "code",
      code: `List<string> level = MakeLevel1();
DrawPlain(level);

void DrawPlain(List<string> level)
{
    for (int y = 0; y < level.Count; y++)
    {
        string row = "";
        for (int x = 0; x < level[y].Length; x++)
        {
            if (level[y][x] == '#')
            {
                row = row + "#";
            }
            else
            {
                row = row + " ";
            }
        }
        Console.WriteLine(row);
    }
}

${LEVEL1}`,
      expect: { out: "##########\n#    #   #\n# ## # # #\n# #    # #\n# # ## # #\n#   #    #\n##########" },
    },
    {
      type: "text",
      md: "Walls are drawn as `#` and every other tile as a space, so only the shape of level 1 shows. The level has seven rows, and the screen shows seven lines.",
    },
    {
      type: "recipe",
      title: "Drawing a grid",
      template: `for (int y = 0; y < {level}.Count; y++)
{
    string row = "";
    for (int x = 0; x < {level}[y].Length; x++)
    {
        row = row + {tile};
    }
    Console.WriteLine(row);
}`,
      parts: [
        { slot: "{level}", meaning: "the list of rows to draw" },
        { slot: "string row = \"\";", meaning: "inside the outer loop and above the inner one: a new, empty row for every `y`" },
        { slot: "row = row + {tile};", meaning: "inside the inner loop: one more character on the end of the row for every `x`. `{tile}` is what to draw for `level[y][x]`." },
        { slot: "Console.WriteLine(row);", meaning: "after the inner loop's closing brace and inside the outer loop: prints the row once, when it is full" },
      ],
    },
    {
      type: "text",
      md: "Step through this room of two rows and watch `row` in the Variables pane. It grows one character at a time, and it goes back to `\"\"` when `y` moves.",
    },
    {
      type: "step",
      code: `List<string> room = new List<string>();
room.Add("#@.#");
room.Add("#$M#");
for (int y = 0; y < room.Count; y++)
{
    string row = "";
    for (int x = 0; x < room[y].Length; x++)
    {
        row = row + room[y][x];
    }
    Console.WriteLine(row);
}`,
      notes: {
        "6": "A new, empty row. This line runs once for each y, so row starts again at \"\" on every row.",
        "9": "Adds the tile at row y, column x to the end of row. Nothing is printed yet.",
        "11": "The inner loop has finished, so row holds the whole line. It is printed once.",
      },
      expect: { out: "#@.#\n#$M#" },
    },
    {
      type: "text",
      md: "## A char plus a char\n\n`row + room[y][x]` is a string plus a `char`, and that is a string one character longer. A `char` plus a `char` is different: C# adds the two characters' codes as numbers. Drawing every tile twice, for a wider map, shows the difference.",
    },
    {
      type: "code",
      code: `string hall = "#@.$#";
string wrong = "";
string wide = "";
for (int x = 0; x < hall.Length; x++)
{
    wrong = wrong + (hall[x] + hall[x]);
    wide = wide + hall[x] + hall[x];
}
Console.WriteLine(wrong);
Console.WriteLine(wide);`,
      expect: { out: "70128927270\n##@@..$$##" },
    },
    {
      type: "note",
      kind: "trap",
      md: "`(hall[x] + hall[x])` adds two `char`s first, because of the brackets, and gives a number: `#` is 35, so two of them are 70. The first line prints `70128927270`. Without the brackets, `wide + hall[x]` is a string, and adding the second `hall[x]` to that string gives `##@@..$$##`. Add the characters to the string one at a time.",
    },
    {
      type: "text",
      md: "## Where the row is declared\n\nHere is the same drawing with `string row = \"\";` moved above both loops.",
    },
    {
      type: "code",
      code: `List<string> room = MakeRoom();
string row = "";
for (int y = 0; y < room.Count; y++)
{
    for (int x = 0; x < room[y].Length; x++)
    {
        row = row + room[y][x];
    }
    Console.WriteLine(row);
}

${ROOM}`,
      expect: { out: "######\n#######@.M.#\n#######@.M.##..$+#\n#######@.M.##..$+#######" },
    },
    {
      type: "text",
      md: "The first line is `######`, the top wall. The second is `#######@.M.#`: row 0 and row 1 together, because nothing emptied `row` when `y` moved. Every line holds every row so far. A count lasts for the whole level, so it is declared above both loops. A row lasts for one `y`, so it is declared inside the outer loop.",
    },
    {
      type: "text",
      md: "## The player\n\nThe game's `DrawLevel` in `Levels.cs` has the same shape, with `playerX` and `playerY` as parameters and three rules for each tile, tested in this order:\n\n1. The square at `playerX`, `playerY` is drawn as `@`.\n2. The `@` in the data, where the player started, is drawn as `.`.\n3. Every other tile is drawn as it is.",
    },
    {
      type: "code",
      code: `List<string> room = MakeRoom();
DrawLevel(room, 1, 1);
Console.WriteLine();
DrawLevel(room, 2, 1);

void DrawLevel(List<string> level, int playerX, int playerY)
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
        }
        Console.WriteLine(row);
    }
}

${ROOM}`,
      expect: { out: "######\n#@.M.#\n#..$+#\n######\n\n######\n#.@M.#\n#..$+#\n######" },
    },
    {
      type: "note",
      kind: "trap",
      md: "The `@` in the data is where the player started, and it never moves. Where the player is now comes from `playerX` and `playerY`. After one step to the right, row 1 is `#.@M.#`: the start square is floor. Test the player's square first. With the `@` test first, a player standing on the start square is drawn as `.`.",
    },
    {
      type: "ap",
      md: "Question 2(b) on the 2025 exam (Set 2) asks for a modification to your code that would result in a logic error, and why. Moving `string row = \"\";` above both loops is one: the program still builds and runs, but nothing empties `row` when `y` moves, so each printed line holds every row so far. On the room above, the second line is `#######@.M.#` where it should be `#@.M.#`. A strong answer names the line that moved, what prints, and why.",
    },
    {
      type: "mcq",
      id: "for-5-q1",
      question: "A level has 11 rows of 20 tiles. It is drawn with the recipe above. How many times does `Console.WriteLine(row);` run?",
      choices: ["11", "220", "20", "31"],
      answer: 0,
      why: [
        "The line is after the inner loop and inside the outer one, so it runs once per row. The 20 decides how long each line is.",
        "220 is how many times the inner loop's body runs, once per tile. The WriteLine is outside the inner loop.",
        "20 is the width of a row: the length of each printed line, not the number of lines.",
        "31 adds rows and columns. The WriteLine runs once for each pass of the outer loop.",
      ],
      verify: {
        run: `List<string> level = new List<string>();
for (int i = 0; i < 11; i++)
{
    level.Add("....................");
}
int lines = 0;
for (int y = 0; y < level.Count; y++)
{
    string row = "";
    for (int x = 0; x < level[y].Length; x++)
    {
        row = row + level[y][x];
    }
    lines = lines + 1;
}
Console.WriteLine(lines);`,
        out: "11",
      },
    },
    {
      type: "mcq",
      id: "for-5-q2",
      question: "What is printed?",
      code: `string row = "#";
row = row + ('$' + '$');
row = row + "#";
Console.WriteLine(row);`,
      choices: ["#72#", "#$$#", "#$#", "It does not build."],
      answer: 0,
      why: [
        "The brackets add the two chars first. '$' is 36, so the sum is the number 72, and \"#\" + 72 + \"#\" is #72#.",
        "That needs the chars added to the string one at a time: row + '$' + '$'.",
        "Two chars are added, and the brackets make them a number before they reach the string.",
        "A string plus a number builds. The number is turned into its digits.",
      ],
      verify: { out: "#72#" },
    },
    {
      type: "mcq",
      id: "for-5-q3",
      question: "What is the second line printed?",
      code: `List<string> room = new List<string>();
room.Add("#M#");
room.Add("#$#");
string row = "";
for (int y = 0; y < room.Count; y++)
{
    for (int x = 0; x < room[y].Length; x++)
    {
        row = row + room[y][x];
    }
    Console.WriteLine(row);
}`,
      choices: ["#M##$#", "#$#", "#M#", "#$##M#"],
      answer: 0,
      why: [
        "row is declared above both loops, so it still holds #M# when y moves to 1, and row 1 is added to the end of it.",
        "#$# is row 1 by itself. That needs string row = \"\"; inside the outer loop.",
        "#M# is the first line. The second pass adds row 1 to it.",
        "Row 0 is added first, so it comes first in the string.",
      ],
      verify: { out: "#M#\n#M##$#" },
    },
    {
      type: "mcq",
      id: "for-5-q4",
      question: "The `@` test comes before the player test. The player is standing on the start square, at x 1 and y 1. What is the second line printed?",
      code: `List<string> room = new List<string>();
room.Add("#####");
room.Add("#@.$#");
room.Add("#####");
int playerX = 1;
int playerY = 1;
for (int y = 0; y < room.Count; y++)
{
    string row = "";
    for (int x = 0; x < room[y].Length; x++)
    {
        if (room[y][x] == '@')
        {
            row = row + ".";
        }
        else if (x == playerX && y == playerY)
        {
            row = row + "@";
        }
        else
        {
            row = row + room[y][x];
        }
    }
    Console.WriteLine(row);
}`,
      choices: ["#..$#", "#@.$#", "#.@$#", "#@@$#"],
      answer: 0,
      why: [
        "At x 1 the first test, room[y][x] == '@', is true, so a . is added and the else if is never asked. The player disappears.",
        "That needs the player test first. Here the @ test wins, because it comes first in the chain.",
        "The player is at x 1, not x 2. Nothing in this code moves anything.",
        "One tile adds one character: only one branch of an if chain runs.",
      ],
      verify: { out: "#####\n#..$#\n#####" },
    },
    {
      type: "parsons",
      id: "for-5-p1",
      prompt: "Put the lines in order so the program draws `room` with every tile twice: `##MM##`, then `##$$##`.",
      lines: [
        `List<string> room = new List<string> { "#M#", "#$#" };`,
        `for (int y = 0; y < room.Count; y++)`,
        `{`,
        `    string row = "";`,
        `    for (int x = 0; x < room[y].Length; x++)`,
        `    {`,
        `        row = row + room[y][x] + room[y][x];`,
        `    }`,
        `    Console.WriteLine(row);`,
        `}`,
      ],
      distractors: [`        row = row + (room[y][x] + room[y][x]);`],
      expect: { out: "##MM##\n##$$##" },
    },
    {
      type: "exercise",
      id: "for-5-e1",
      prompt: "Write `DrawRow`. It returns row `y` of the level as the game draws it, by the three rules: `@` at `playerX`, `playerY`; `.` where the data has `@`; every other tile as it is. In `MakeRoom()`, row 1 is `#@.M.#`, so `DrawRow(MakeRoom(), 1, 2, 1)` is `#.@M.#`.",
      starter: `string DrawRow(List<string> level, int y, int playerX, int playerY)
{
    return "?";
}`,
      solution: `string DrawRow(List<string> level, int y, int playerX, int playerY)
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
    }
    return row;
}`,
      given: ROOM,
      tests: [
        { call: `DrawRow(MakeRoom(), 1, 1, 1)`, expect: "#@.M.#" },
        { call: `DrawRow(MakeRoom(), 1, 2, 1)`, expect: "#.@M.#" },
        { call: `DrawRow(MakeRoom(), 2, 2, 1)`, expect: "#..$+#" },
        { call: `DrawRow(MakeRoom(), 2, 3, 2)`, expect: "#..@+#" },
        { call: `DrawRow(MakeRoom(), 1, 3, 2)`, expect: "#..M.#" },
      ],
      hints: [
        "This is the inner loop of `DrawLevel`, with `y` handed in. Build `row` and return it instead of printing it.",
        "The player is at this square when `x == playerX && y == playerY`. Test that before the test for `'@'`.",
      ],
    },
    {
      type: "summary",
      items: [
        "To draw a level, build each row as a string in the inner loop and print it once, after the inner loop, inside the outer one.",
        "`string row = \"\";` goes inside the outer loop, so every `y` starts with an empty row. Above both loops, each line holds every row so far.",
        "A string plus a `char` is a string. A `char` plus a `char` is a number: `'#' + '#'` is 70.",
        "`Console.WriteLine(row);` runs once per row. The width of the level decides how long each line is.",
        "The `@` in the data is the start. The player is drawn from `playerX` and `playerY`, tested first.",
      ],
    },
  ],
};

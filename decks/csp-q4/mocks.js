// AP CSP · Quiz 4: Functions and Loops · mock quizzes 1 to 3
// Part A: six multiple choice (totals, grid, draw, walk, rewrite, rewrite). Part B: two written responses
// (wr-params, 2024 Set 2 2(c); wr-logic, 2025 Set 2 2(b)).
// Every block of code here is compiled and run on .NET 10 by tools/verify.mjs.
// In a multiple-choice item the right choice is always written first; the site shuffles them.

// Game functions, copied from GAME.md, for runs that call them without showing them.
const STEP_X = `int StepX(string command)
{
    if (command == "a") return -1;
    else if (command == "d") return 1;
    else return 0;
}`;
const STEP_Y = `int StepY(string command)
{
    if (command == "w") return -1;
    else if (command == "s") return 1;
    else return 0;
}`;
const IS_ALIVE = `bool IsAlive(int hp)
{
    return hp > 0;
}`;
const TILE_AT = `char TileAt(List<string> level, int x, int y)
{
    if (y < 0 || y >= level.Count) return '#';
    if (x < 0 || x >= level[y].Length) return '#';
    return level[y][x];
}`;

const PROMPT_PARAMS = "Consider the procedure identified in part (i) of the Procedure section of your Personalized Project Reference. Identify the parameter(s) used in this procedure. Explain how your identified parameter(s) use abstraction to manage complexity in your program.";
const PROMPT_LOGIC = "Consider the code segment in part (ii) of the List section of your Personalized Project Reference. Suppose another programmer modifies this code segment. Describe a modification the other programmer could make to this code segment that would result in a logic error. Explain why this modification would result in a logic error.";
const NOTE_PARAMS = "The exam gives its one point only when the parameters are named and the explanation is about them. Naming an argument from the call instead of a parameter earns nothing, and so does a parameter that does not change the result.";
const NOTE_LOGIC = "A crash is a logic error if the response explains it. A syntax error is not, and \"the program will not run\" with no explanation earns nothing.";
const PROC_LABELS = ["Procedure (i)", "Procedure (ii)"];

// ---------------------------------------------------------------- Part B, Mock 1, b1: CountInColumn
const M1B1_PROC = `int CountInColumn(List<string> level, int x, char tile)
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
const M1B1_CALL = `List<string> level = new List<string>();
level.Add("#####");
level.Add("#M.$#");
level.Add("#.$M#");
level.Add("#$.M#");
level.Add("#####");
int monsters = CountInColumn(level, 3, 'M');
int loot = CountInColumn(level, 3, '$');
Console.WriteLine(monsters + " monsters and " + loot + " loot in column 3");`;

// ---------------------------------------------------------------- Part B, Mock 2, b1: TileAt
const M2B1_PROC = TILE_AT;
const M2B1_CALL = `List<string> level = new List<string>();
level.Add("#####");
level.Add("#@.$#");
level.Add("#.M+#");
level.Add("#####");
Console.WriteLine(TileAt(level, 3, 1));
Console.WriteLine(TileAt(level, 2, 2));
Console.WriteLine(TileAt(level, 7, 1));`;

// ---------------------------------------------------------------- Part B, Mock 3, b1: KeepPlaying
const M3B1_PROC = `bool KeepPlaying(string command, bool anyAlive, bool escaped)
{
    if (command == "quit" || anyAlive == false || escaped)
    {
        return false;
    }
    return true;
}`;
const M3B1_CALL = `string typed = "s";
bool partyUp = true;
bool outside = false;
Console.WriteLine(KeepPlaying(typed, partyUp, outside));
outside = true;
Console.WriteLine(KeepPlaying(typed, partyUp, outside));`;

// ---------------------------------------------------------------- Part B, Mock 1, b2: NextAliveIndex
const M1B2_LIST_I = `List<int> health = new List<int>();
health.Add(0);
health.Add(-2);
health.Add(6);
health.Add(3);`;
const M1B2_LIST_II = `${IS_ALIVE}

int NextAliveIndex(List<int> health)
{
    for (int i = 0; i < health.Count; i++)
    {
        if (IsAlive(health[i])) return i;
    }
    return -1;
}`;
const M1B2_CALL = "Console.WriteLine(NextAliveIndex(health));";
const M1B2_HEAD = `List<int> health = new List<int> { 0, -2, 6, 3 };
Console.WriteLine(NextAliveIndex(health));
${IS_ALIVE}`;
const nextAlive = (test, ret, start = "0") => `int NextAliveIndex(List<int> health)
{
    for (int i = ${start}; i < health.Count; i++)
    {
        if (${test}) return ${ret};
    }
    return -1;
}`;

// ---------------------------------------------------------------- Part B, Mock 2, b2: CountTiles
const M2B2_LIST_I = `List<string> level = new List<string>();
level.Add("######");
level.Add("#$.M.#");
level.Add("#.$$+#");
level.Add("#M..$#");
level.Add("######");`;
const M2B2_LIST_II = `${TILE_AT}

int CountTiles(List<string> level, char tile)
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
}`;
const M2B2_CALL = "Console.WriteLine(CountTiles(level, '$'));";
const M2B2_HEAD = `List<string> level = new List<string> { "######", "#$.M.#", "#.$$+#", "#M..$#", "######" };
Console.WriteLine(CountTiles(level, '$'));
${TILE_AT}`;

// ---------------------------------------------------------------- Part B, Mock 3, b2: WalkY
const M3B2_LIST_I = `List<string> commands = new List<string>();
commands.Add("w");
commands.Add("w");
commands.Add("d");
commands.Add("s");
commands.Add("w");`;
const M3B2_LIST_II = `${STEP_Y}

int WalkY(List<string> commands, int startY)
{
    int y = startY;
    for (int i = 0; i < commands.Count; i++)
    {
        y = y + StepY(commands[i]);
    }
    return y;
}`;
const M3B2_CALL = "Console.WriteLine(WalkY(commands, 6));";
const M3B2_HEAD = `List<string> commands = new List<string> { "w", "w", "d", "s", "w" };
Console.WriteLine(WalkY(commands, 6));
${STEP_X}
${STEP_Y}`;
const walkY = (first, start, line) => `int WalkY(List<string> commands, int startY)
{
    int y = ${first};
    for (int i = ${start}; i < commands.Count; i++)
    {
        ${line}
    }
    return y;
}`;

export default {
  items: [
    // ================================================================ Mock Quiz 1, Part A
    {
      id: "q4m1-a1", skill: "totals", type: "mcq",
      stem: "Consider the following code segment.",
      code: `List<int> health = new List<int>();
health.Add(8);
health.Add(5);
health.Add(9);
health.Add(2);
health.Add(6);
Console.WriteLine(WeakestIndex(health));

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
      choices: ["3", "2", "1", "4"],
      why: [
        "weakest starts at 0, where the health is 8. 5 < 8 makes it 1, 9 < 5 is false, 2 < 5 makes it 3, and 6 < 2 is false. The function returns the index, 3.",
        "2 is the lowest health, health[3]. The function returns weakest, which is an index, not a health.",
        "1 is where weakest is after the first change. Nothing returns there. The loop goes on and finds 2 at index 3.",
        "4 is the last index the loop reaches. weakest changes only when the test is true, and 6 < 2 is false.",
      ],
      answer: 0,
      verify: { out: "3" },
    },
    {
      id: "q4m1-a2", skill: "grid", type: "mcq",
      stem: "Consider the following code segment.",
      code: `List<string> level = new List<string>();
level.Add("######");
level.Add("#M..$#");
level.Add("#.B.M#");
level.Add("#M$..#");
level.Add("######");
Console.WriteLine(CountEither(level, 'M', 'B'));

int CountEither(List<string> level, char a, char b)
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
}`,
      question: "What is printed?",
      choices: ["4", "3", "1", "0"],
      why: [
        "The loops visit every tile. There are three M tiles and one B, and || counts a tile that matches either one.",
        "3 counts only the M tiles. The test is true for b as well, and b is 'B'.",
        "1 counts only the B. The test is true for a as well, and a is 'M'.",
        "0 is what && would give: no tile is both M and B. The test uses ||.",
      ],
      answer: 0,
      verify: { out: "4" },
    },
    {
      id: "q4m1-a3", skill: "draw", type: "mcq",
      stem: "Snapshot draws the whole level on one line, with a / after each row.",
      code: `List<string> level = new List<string>();
level.Add("#@.M");
level.Add("#.$#");
Console.WriteLine(Snapshot(level, 2, 1));

string Snapshot(List<string> level, int playerX, int playerY)
{
    string map = "";
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
        map = map + row + "/";
    }
    return map;
}`,
      question: "What is printed?",
      choices: ["#..M/#.@#/", "#@.M/#.@#/", "#..M/#.$#/", "#..M/#@$#/"],
      mono: true,
      why: [
        "playerX is 2 and playerY is 1, so the player is drawn in row 1 at x 2, over the $. The start tile in row 0 is drawn as floor.",
        "The else if turns the start tile into a floor tile, because the player is not standing there.",
        "That is what happens with x and y swapped: there is no row 2, so the player is never drawn. The test is x == playerX && y == playerY.",
        "x counts from 0, so x 2 is the third tile in the row, not the second.",
      ],
      answer: 0,
      verify: { out: "#..M/#.@#/" },
    },
    {
      id: "q4m1-a4", skill: "walk", type: "mcq",
      stem: "StepX is the game's: \"a\" gives -1, \"d\" gives 1, and anything else gives 0.",
      code: `List<string> commands = new List<string>();
commands.Add("d");
commands.Add("w");
commands.Add("d");
commands.Add("a");
commands.Add("s");
commands.Add("d");
Console.WriteLine(WalkX(commands, 3));

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
      choices: ["5", "2", "6", "7"],
      why: [
        "x starts at 3. The three d commands add 1 each, the a takes 1 away, and w and s add 0. 3 + 1 + 0 + 1 - 1 + 0 + 1 is 5.",
        "2 is how far the walk moves. x starts at startX, which is 3, not at 0.",
        "6 is the number of commands. w and s give a StepX of 0, so they do not change x.",
        "7 counts the a as a step right. StepX(\"a\") is -1.",
      ],
      answer: 0,
      verify: {
        run: `List<string> commands = new List<string> { "d", "w", "d", "a", "s", "d" };
Console.WriteLine(WalkX(commands, 3));
int WalkX(List<string> commands, int startX)
{
    int x = startX;
    for (int i = 0; i < commands.Count; i++)
    {
        x = x + StepX(commands[i]);
    }
    return x;
}
${STEP_X}`,
        out: "5",
      },
    },
    {
      id: "q4m1-a5", skill: "rewrite", type: "mcq",
      stem: "A student rewrote FindCharacter with a variable, found, in place of a return inside the loop.",
      code: `List<string> names = new List<string>();
List<int> attack = new List<int>();
names.Add("Hero");
attack.Add(6);
names.Add("Rook");
attack.Add(2);
names.Add("Mote");
attack.Add(9);
Console.WriteLine(attack[FindCharacter(names, "Mote")]);

int FindCharacter(List<string> names, string name)
{
    int found = -1;
    for (int i = 0; i < names.Count; i++)
    {
        if (names[i] == name)
        {
            found = i;
        }
    }
    return found;
}`,
      question: "What is printed?",
      choices: [
        "9",
        "2",
        "-1",
        "It builds, then crashes when it runs (ArgumentOutOfRangeException).",
      ],
      why: [
        "Mote is at index 2, so found becomes 2 and the function returns 2. The line prints attack[2], which is 9.",
        "2 is the index FindCharacter returns. The line uses it in attack[ ], so it prints the attack at that index.",
        "found starts at -1, but it is replaced when names[2] is Mote. And the line prints from attack, not the index.",
        "found stays -1 only when the name is missing. Mote is in the list, so attack[2] is in range.",
      ],
      answer: 0,
      verify: { out: "9" },
    },
    {
      id: "q4m1-a6", skill: "rewrite", type: "mcq",
      stem: "A student rewrote TotalHealth to count the characters starting from 1.",
      code: `List<int> health = new List<int>();
health.Add(5);
health.Add(8);
health.Add(0);
health.Add(6);
Console.WriteLine(TotalHealth(health));

int TotalHealth(List<int> health)
{
    int total = 0;
    for (int i = 1; i <= health.Count; i++)
    {
        total = total + health[i];
    }
    return total;
}`,
      question: "What happens?",
      choices: [
        "It builds, then crashes when it runs (ArgumentOutOfRangeException).",
        "It prints 19.",
        "It prints 14.",
        "It does not build: a loop over a list has to start at 0.",
      ],
      why: [
        "i takes 1, 2, 3, and then 4, because 4 <= 4 is true. health[4] is not there, so the crash comes before the return, and nothing prints.",
        "19 is the right total. That needs i from 0 with i < health.Count, or health[i - 1] in this loop.",
        "14 skips the 5 at index 0, which is what i < health.Count would give. With <= the loop also reaches i of 4.",
        "A loop can start at any int. The compiler does not check indexes.",
      ],
      answer: 0,
      verify: { crash: "ArgumentOutOfRangeException" },
    },

    // ================================================================ Mock Quiz 1, Part B
    {
      id: "q4m1-b1", skill: "wr-params", type: "wr",
      source: "2024 exam, Set 2, question 2(c)",
      labels: PROC_LABELS,
      listI: M1B1_PROC,
      listII: M1B1_CALL,
      prompt: PROMPT_PARAMS,
      rows: [
        {
          name: "Names the parameters",
          levels: [
            "Missing, or names arguments from the call (3, 'M', '$') or a variable inside the procedure (count, y).",
            "Names one or two of them, or mixes a parameter with an argument.",
            "level, x, and tile, the three parameters of CountInColumn.",
          ],
        },
        {
          name: "Explains the abstraction",
          levels: [
            "Missing, or about a parameter that does not change the result.",
            "Vague: parameters make the code reusable, with nothing about columns or tiles.",
            "x and tile let one loop count any tile in any column of any level, so the program needs one procedure, not a copy for each column and each tile.",
          ],
        },
      ],
      model: "The parameters are level, x, and tile.\n\nx picks which column to look down, and tile picks what to count. Because of them, the same loop answers every question about a column. The call CountInColumn(level, 3, 'M') counts the monsters in column 3, and CountInColumn(level, 3, '$') counts the loot in the same column without any new code. Without x and tile, I would need a separate procedure, each with its own loop, for every column and every tile, like CountMonstersInColumn3 and CountLootInColumn3. level lets the same procedure work on any room, not just this one.",
      note: NOTE_PARAMS,
      facts: "The call prints 2 monsters and 1 loot in column 3. CountInColumn(level, 1, 'M') gives 1 and CountInColumn(level, 2, '$') gives 1, with no change to the procedure. A version with no parameters, written for column 3 and M only, gives 2 and has to be copied to count anything else.",
      verify: {
        cases: [
          { run: `${M1B1_CALL}
Console.WriteLine(CountInColumn(level, 1, 'M'));
Console.WriteLine(CountInColumn(level, 2, '$'));
${M1B1_PROC}`, out: "2 monsters and 1 loot in column 3\n1\n1" },
          { run: `List<string> level = new List<string> { "#####", "#M.$#", "#.$M#", "#$.M#", "#####" };
Console.WriteLine(CountMonstersInColumn3());
int CountMonstersInColumn3()
{
    int count = 0;
    for (int y = 0; y < level.Count; y++)
    {
        if (level[y][3] == 'M')
        {
            count = count + 1;
        }
    }
    return count;
}`, out: "2" },
        ],
      },
    },
    {
      id: "q4m1-b2", skill: "wr-logic", type: "wr",
      source: "2025 exam, Set 2, question 2(b)",
      listI: M1B2_LIST_I,
      listII: M1B2_LIST_II,
      call: M1B2_CALL,
      prompt: PROMPT_LOGIC,
      rows: [
        {
          name: "A modification to List (ii) that still runs",
          levels: [
            "None, a change that does not build (a missing semicolon or brace), or a change to the list instead of NextAliveIndex.",
            "A change too vague to try (\"change the return\").",
            "A specific change to NextAliveIndex that builds and runs.",
          ],
        },
        {
          name: "Why it is a logic error, consistent with the code",
          levels: [
            "Missing, or the result described is not what the changed code does (health[i] > 0 in place of IsAlive(health[i]) still gives 2).",
            "Says it would be wrong, without saying what comes out wrong.",
            "Says what comes out wrong and why, with the value it gives for this list.",
          ],
        },
      ],
      model: "The other programmer could change return i; to return health[i];. It still builds and runs, because health[i] is an int too. But now the function returns the health of the first living character instead of where that character is. NextAliveIndex(health) gives 6 instead of 2, and the party has only four characters, so 6 is not even an index. Any code that uses the answer to pick the next character to act picks the wrong one or crashes.",
      note: NOTE_LOGIC,
      factsTable: [
        ["return health[i]; in place of return i;", "6: the health of the first living character, not its index"],
        ["IsAlive(health[i]) == false", "0: the index of the first character who is down"],
        ["int i = 1", "2 for this list, because index 0 is down anyway. With health[0] set to 5 it gives 2 instead of 0, so the error is there even when this list hides it"],
        ["health[i] > 0 in place of IsAlive(health[i])", "2, still right: it is the same test IsAlive makes, so this is not a logic error"],
      ],
      verify: {
        cases: [
          { run: `${M1B2_HEAD}
${nextAlive("IsAlive(health[i])", "i")}`, out: "2" },
          { run: `${M1B2_HEAD}
${nextAlive("IsAlive(health[i])", "health[i]")}`, out: "6" },
          { run: `${M1B2_HEAD}
${nextAlive("IsAlive(health[i]) == false", "i")}`, out: "0" },
          { run: `${M1B2_HEAD}
health[0] = 5;
Console.WriteLine(NextAliveIndex(health));
${nextAlive("IsAlive(health[i])", "i", "1")}`, out: "2\n2" },
          { run: `${M1B2_HEAD}
health[0] = 5;
Console.WriteLine(NextAliveIndex(health));
${nextAlive("IsAlive(health[i])", "i")}`, out: "2\n0" },
          { run: `${M1B2_HEAD}
${nextAlive("health[i] > 0", "i")}`, out: "2" },
        ],
      },
    },

    // ================================================================ Mock Quiz 2, Part A
    {
      id: "q4m2-a1", skill: "totals", type: "mcq",
      stem: "Consider the following code segment.",
      code: `List<int> health = new List<int>();
health.Add(4);
health.Add(1);
health.Add(0);
health.Add(6);
Console.WriteLine(AllAlive(health));

bool AllAlive(List<int> health)
{
    for (int i = 0; i < health.Count; i++)
    {
        if (health[i] <= 0)
        {
            return false;
        }
    }
    return true;
}`,
      question: "What is printed?",
      choices: ["False", "True", "2", "0"],
      why: [
        "4 and 1 are above 0. At index 2 the health is 0, and 0 <= 0 is true, so the function returns false right there. Console.WriteLine shows a bool as False.",
        "True needs every health above 0. The test is <= 0, so a health of exactly 0 counts as down.",
        "2 is the index where the loop stops. The function returns a bool, not an index.",
        "0 is the health at index 2. The function returns a bool, not a health.",
      ],
      answer: 0,
      verify: { out: "False" },
    },
    {
      id: "q4m2-a2", skill: "grid", type: "mcq",
      stem: "CountInRow counts one tile across one row of a level.",
      code: `List<string> level = new List<string>();
level.Add("#######");
level.Add("#$..$.#");
level.Add("#$$.$.#");
level.Add("#.....#");
level.Add("#######");
Console.WriteLine(CountInRow(level, 2, '$'));

int CountInRow(List<string> level, int y, char tile)
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
}`,
      question: "What is printed?",
      choices: ["3", "2", "1", "5"],
      why: [
        "y is 2, so the loop reads level[2], the third row, #$$.$.#. It has three $ tiles.",
        "2 is the count for level[1], the second row. Rows count from 0, so y of 2 is the third row.",
        "1 is the count down column 2. The loop moves x across row y, so it reads one row, not one column.",
        "5 is every $ in the level. The loop reads only row y.",
      ],
      answer: 0,
      verify: { out: "3" },
    },
    {
      id: "q4m2-a3", skill: "draw", type: "mcq",
      stem: "In this draw function, row is made before the outer loop, and Console.WriteLine comes after both loops.",
      code: `List<string> level = new List<string>();
level.Add("#M.");
level.Add("$+#");
Draw(level);

void Draw(List<string> level)
{
    string row = "";
    for (int y = 0; y < level.Count; y++)
    {
        for (int x = 0; x < level[y].Length; x++)
        {
            row = row + level[y][x];
        }
    }
    Console.WriteLine(row);
}`,
      question: "What is printed?",
      choices: ["#M.$+#", "$+#", "#M.", "#$M+.#"],
      mono: true,
      why: [
        "row is never set back to \"\", so the second row is joined to the end of the first. The one Console.WriteLine runs after both loops and prints all six tiles on one line.",
        "Only the last row would print if row were made inside the outer loop. Here it is made once, before the loop.",
        "The outer loop does not stop after row 0. It runs for y of 0 and 1 before anything prints.",
        "That reads down each column first. The outer loop is over y, so a whole row is added before the next row starts.",
      ],
      answer: 0,
      verify: { out: "#M.$+#" },
    },
    {
      id: "q4m2-a4", skill: "walk", type: "mcq",
      stem: "StepX and StepY are the game's: \"a\" and \"d\" give an x step of -1 and 1, \"w\" and \"s\" give a y step of -1 and 1, and anything else gives 0.",
      code: `List<string> commands = new List<string>();
commands.Add("s");
commands.Add("s");
commands.Add("d");
commands.Add("w");
commands.Add("s");
commands.Add("a");
commands.Add("a");
Console.WriteLine(EndsAt(commands, 4, 2));

string EndsAt(List<string> commands, int startX, int startY)
{
    int x = startX;
    int y = startY;
    for (int i = 0; i < commands.Count; i++)
    {
        x = x + StepX(commands[i]);
        y = y + StepY(commands[i]);
    }
    return x + "," + y;
}`,
      question: "What is printed?",
      choices: ["3,4", "4,3", "3,6", "-1,2"],
      why: [
        "x starts at 4: one d and two a give 4 + 1 - 1 - 1, which is 3. y starts at 2: three s and one w give 2 + 1 + 1 - 1 + 1, which is 4.",
        "That swaps the two numbers. The function returns x first, then y.",
        "6 counts the w as a step down. StepY(\"w\") is -1: up the screen is a smaller y.",
        "-1,2 is only the moves. x and y start at startX and startY, 4 and 2.",
      ],
      answer: 0,
      verify: {
        run: `List<string> commands = new List<string> { "s", "s", "d", "w", "s", "a", "a" };
Console.WriteLine(EndsAt(commands, 4, 2));
string EndsAt(List<string> commands, int startX, int startY)
{
    int x = startX;
    int y = startY;
    for (int i = 0; i < commands.Count; i++)
    {
        x = x + StepX(commands[i]);
        y = y + StepY(commands[i]);
    }
    return x + "," + y;
}
${STEP_X}
${STEP_Y}`,
        out: "3,4",
      },
    },
    {
      id: "q4m2-a5", skill: "rewrite", type: "mcq",
      stem: "A student rewrote MonsterAt with one if inside another in place of &&. Monster i stands at (mX[i], mY[i]).",
      code: `List<int> mX = new List<int>();
List<int> mY = new List<int>();
mX.Add(1);
mY.Add(3);
mX.Add(3);
mY.Add(4);
mX.Add(3);
mY.Add(1);
mX.Add(2);
mY.Add(1);
Console.WriteLine(MonsterAt(mX, mY, 3, 1));

int MonsterAt(List<int> mX, List<int> mY, int x, int y)
{
    for (int i = 0; i < mX.Count; i++)
    {
        if (mX[i] == x)
        {
            if (mY[i] == y)
            {
                return i;
            }
        }
    }
    return -1;
}`,
      question: "What is printed?",
      choices: ["2", "1", "0", "-1"],
      why: [
        "Monster 1 is at (3, 4): its x matches, but the inner if is false, so the loop goes on. Monster 2 is at (3, 1), and both ifs are true. The inner if does the same job as &&.",
        "1 is what || would give: monster 1 has x of 3, and || is true when either one matches. Here both have to match.",
        "0 is the monster at (1, 3). That is x and y swapped. The call asks for x 3 and y 1.",
        "-1 is returned only when no monster matches both. Monster 2 does.",
      ],
      answer: 0,
      verify: { out: "2" },
    },
    {
      id: "q4m2-a6", skill: "rewrite", type: "mcq",
      stem: "A student rewrote StrongestIndex. It is meant to return the index of the highest attack.",
      code: `List<int> attack = new List<int>();
attack.Add(2);
attack.Add(5);
attack.Add(3);
attack.Add(1);
Console.WriteLine(StrongestIndex(attack));

int StrongestIndex(List<int> attack)
{
    int best = 0;
    for (int i = 1; i < attack.Count; i++)
    {
        if (attack[i] > best)
        {
            best = i;
        }
    }
    return best;
}`,
      question: "What is printed?",
      choices: ["2", "1", "5", "3"],
      why: [
        "The test compares attack[i] with best, which is an index, not with attack[best]. 5 > 0 makes best 1, 3 > 1 makes it 2, and 1 > 2 is false.",
        "1 is the right answer, the index of 5. It is what attack[i] > attack[best] would give.",
        "5 is the highest attack. The function stores i, an index.",
        "3 is the last index. best changes only when the test is true, and 1 > 2 is false.",
      ],
      answer: 0,
      verify: { out: "2" },
    },

    // ================================================================ Mock Quiz 2, Part B
    {
      id: "q4m2-b1", skill: "wr-params", type: "wr",
      source: "2024 exam, Set 2, question 2(c)",
      labels: PROC_LABELS,
      listI: M2B1_PROC,
      listII: M2B1_CALL,
      prompt: PROMPT_PARAMS,
      rows: [
        {
          name: "Names the parameters",
          levels: [
            "Missing, or names arguments from a call (3, 1, 7) or the tiles it returns.",
            "Names one or two of them, or mixes a parameter with an argument.",
            "level, x, and y, the three parameters of TileAt.",
          ],
        },
        {
          name: "Explains the abstraction",
          levels: [
            "Missing, or about a parameter that does not change the result.",
            "Vague: parameters make the code reusable, with nothing about squares or the edge of the level.",
            "x and y let one procedure read any square of any level, with the edge checks written once, so code that looks at the map makes one call and never has to check the edges itself.",
          ],
        },
      ],
      model: "The parameters are level, x, and y.\n\nx and y say which square to look at, and level says which map. The edge checks are written once, inside TileAt, and they work for every square because they use x and y. Code that needs a tile just calls TileAt(level, 3, 1) or TileAt(level, 2, 2) and gets the tile back. Off the map, TileAt(level, 7, 1) gives a wall instead of crashing. Without the parameters, every place in the program that reads a tile would need its own copy of the two edge checks, and one missing check would crash the game.",
      note: NOTE_PARAMS,
      facts: "The call prints $, then M, then #. TileAt(level, 1, 1) gives @ and TileAt(level, 2, -1) gives #, with no change to the procedure. Reading level[1][7] directly, with no edge checks, crashes (IndexOutOfRangeException).",
      verify: {
        cases: [
          { run: `${M2B1_CALL}
Console.WriteLine(TileAt(level, 1, 1));
Console.WriteLine(TileAt(level, 2, -1));
${M2B1_PROC}`, out: "$\nM\n#\n@\n#" },
          { run: `List<string> level = new List<string> { "#####", "#@.$#", "#.M+#", "#####" };
Console.WriteLine(level[1][7]);`, out: "", crash: "IndexOutOfRangeException" },
        ],
      },
    },
    {
      id: "q4m2-b2", skill: "wr-logic", type: "wr",
      source: "2025 exam, Set 2, question 2(b)",
      listI: M2B2_LIST_I,
      listII: M2B2_LIST_II,
      call: M2B2_CALL,
      prompt: PROMPT_LOGIC,
      rows: [
        {
          name: "A modification to List (ii) that still runs",
          levels: [
            "None, a change that does not build (a missing semicolon or brace), or a change to the level instead of CountTiles.",
            "A change too vague to try (\"change the loops\").",
            "A specific change to CountTiles that builds and runs.",
          ],
        },
        {
          name: "Why it is a logic error, consistent with the code",
          levels: [
            "Missing, or the result described is not what the changed code does (level[y][x] in place of TileAt(level, x, y) still gives 4).",
            "Says it would be wrong, without saying what comes out wrong.",
            "Says what comes out wrong and why, with the count it gives for this level.",
          ],
        },
      ],
      model: "The other programmer could move return count; up one line, so it sits inside the outer loop, right after the inner loop. It still builds and runs, but now the function returns as soon as row 0 is done. Row 0 is all wall, so CountTiles(level, '$') gives 0 instead of 4, and the loot in rows 1 to 3 is never counted.",
      note: NOTE_LOGIC,
      factsTable: [
        ["return count; inside the outer loop", "0: it returns after row 0, which is all wall"],
        ["count = 1; in place of count = count + 1;", "1: each match sets count to 1 instead of adding 1"],
        ["int y = 1", "4 for '$', because row 0 has no loot. CountTiles(level, '#') gives 12 instead of 18, so the error is there even when this call hides it"],
        ["level[y][x] in place of TileAt(level, x, y)", "4, still right: inside the loops x and y are always on the map, so this is not a logic error"],
      ],
      verify: {
        cases: [
          { run: `${M2B2_HEAD}
Console.WriteLine(CountTiles(level, '#'));
int CountTiles(List<string> level, char tile)
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
}`, out: "4\n18" },
          { run: `${M2B2_HEAD}
int CountTiles(List<string> level, char tile)
{
    int count = 0;
    for (int y = 0; y < level.Count; y++)
    {
        for (int x = 0; x < level[y].Length; x++)
        {
            if (TileAt(level, x, y) == tile) count = count + 1;
        }
        return count;
    }
    return count;
}`, out: "0" },
          { run: `${M2B2_HEAD}
int CountTiles(List<string> level, char tile)
{
    int count = 0;
    for (int y = 0; y < level.Count; y++)
    {
        for (int x = 0; x < level[y].Length; x++)
        {
            if (TileAt(level, x, y) == tile) count = 1;
        }
    }
    return count;
}`, out: "1" },
          { run: `${M2B2_HEAD}
Console.WriteLine(CountTiles(level, '#'));
int CountTiles(List<string> level, char tile)
{
    int count = 0;
    for (int y = 1; y < level.Count; y++)
    {
        for (int x = 0; x < level[y].Length; x++)
        {
            if (TileAt(level, x, y) == tile) count = count + 1;
        }
    }
    return count;
}`, out: "4\n12" },
          { run: `${M2B2_HEAD}
int CountTiles(List<string> level, char tile)
{
    int count = 0;
    for (int y = 0; y < level.Count; y++)
    {
        for (int x = 0; x < level[y].Length; x++)
        {
            if (level[y][x] == tile) count = count + 1;
        }
    }
    return count;
}`, out: "4" },
        ],
      },
    },

    // ================================================================ Mock Quiz 3, Part A
    {
      id: "q4m3-a1", skill: "totals", type: "mcq",
      stem: "Consider the following code segment.",
      code: `List<int> attack = new List<int>();
attack.Add(4);
attack.Add(3);
attack.Add(6);
int total = 2;
TotalAttack(attack);
Console.WriteLine(total);

int TotalAttack(List<int> attack)
{
    int total = 0;
    for (int i = 0; i < attack.Count; i++)
    {
        total = total + attack[i];
    }
    return total;
}`,
      question: "What is printed?",
      choices: ["2", "13", "15", "0"],
      why: [
        "TotalAttack returns 13, but the call does not store it anywhere, so the 13 is lost. The total inside the function is its own variable. The total outside is still 2.",
        "13 is what TotalAttack returns. To print it, the call has to be stored: total = TotalAttack(attack);",
        "15 adds the attacks to the outside total. The function has its own total, which starts at 0 and is gone when it returns.",
        "int total = 0; inside the function makes a new variable. It does not change the total outside.",
      ],
      answer: 0,
      verify: { out: "2" },
    },
    {
      id: "q4m3-a2", skill: "grid", type: "mcq",
      stem: "Consider the following code segment.",
      code: `List<string> level = new List<string>();
level.Add("#####");
level.Add("#$.$#");
level.Add("#$$$#");
level.Add("#.M.#");
level.Add("#$..#");
level.Add("#####");
Console.WriteLine(RichestRow(level));

int RichestRow(List<string> level)
{
    int richest = -1;
    int most = 0;
    for (int y = 0; y < level.Count; y++)
    {
        int count = 0;
        for (int x = 0; x < level[y].Length; x++)
        {
            if (level[y][x] == '$')
            {
                count = count + 1;
            }
        }
        if (count > most)
        {
            most = count;
            richest = y;
        }
    }
    return richest;
}`,
      question: "What is printed?",
      choices: ["2", "3", "4", "1"],
      why: [
        "The rows have 0, 2, 3, 0, 1, and 0 loot. Row 1 sets most to 2, row 2 beats it with 3, and no later row has more than 3. The function returns the row, y, which is 2.",
        "3 is most, the loot in the richest row. The function returns richest, which is a y.",
        "4 is the last row with any loot. richest changes only when count > most, and 1 > 3 is false.",
        "1 is the first row with loot. Nothing returns there, and row 2 has more.",
      ],
      answer: 0,
      verify: { out: "2" },
    },
    {
      id: "q4m3-a3", skill: "draw", type: "mcq",
      stem: "Inside is meant to draw only the tiles inside the outer wall, with a / after each row.",
      code: `List<string> level = new List<string>();
level.Add("#####");
level.Add("#M.$#");
level.Add("#.B.#");
level.Add("#####");
Console.WriteLine(Inside(level));

string Inside(List<string> level)
{
    string inner = "";
    for (int y = 1; y < level.Count - 1; y++)
    {
        for (int x = 1; x < level[y].Length - 1; x++)
        {
            inner = inner + level[y][x];
        }
        inner = inner + "/";
    }
    return inner;
}`,
      question: "What is printed?",
      choices: ["M.$/.B./", "#M.$#/#.B.#/", "M.$/.B./###/", "M./.B/"],
      mono: true,
      why: [
        "y takes 1 and 2, the rows between the top and bottom walls. x takes 1, 2, and 3: 4 < 5 - 1 is false, so x of 4, the wall on the right, is skipped.",
        "Each row starts at x of 1 and stops before level[y].Length - 1, so the walls on the left and right are never added.",
        "That adds the bottom wall too, which would need y < level.Count. The outer loop stops at y < 3.",
        "x of 3 still gets a pass, because 3 < 4 is true. Only x of 4 is skipped.",
      ],
      answer: 0,
      verify: { out: "M.$/.B./" },
    },
    {
      id: "q4m3-a4", skill: "walk", type: "mcq",
      stem: "StepX is the game's: \"a\" gives -1, \"d\" gives 1, and anything else gives 0.",
      code: `List<string> commands = new List<string>();
commands.Add("d");
commands.Add("d");
commands.Add("a");
commands.Add("s");
commands.Add("d");
commands.Add("d");
commands.Add("a");
commands.Add("a");
Console.WriteLine(FarthestRight(commands, 1));

int FarthestRight(List<string> commands, int startX)
{
    int x = startX;
    int most = startX;
    for (int i = 0; i < commands.Count; i++)
    {
        x = x + StepX(commands[i]);
        if (x > most)
        {
            most = x;
        }
    }
    return most;
}`,
      question: "What is printed?",
      choices: ["4", "2", "5", "1"],
      why: [
        "x goes 2, 3, 2, 2, 3, 4, 3, 2. The largest x along the way is 4, after the sixth command, and most keeps it when x goes back down.",
        "2 is where the walk ends. The function returns most, not x.",
        "5 is startX plus every d. The a commands move x back, so the d after them only gets x back to where it was.",
        "1 is startX. most changes as soon as x is bigger, on the first command.",
      ],
      answer: 0,
      verify: {
        run: `List<string> commands = new List<string> { "d", "d", "a", "s", "d", "d", "a", "a" };
Console.WriteLine(FarthestRight(commands, 1));
int FarthestRight(List<string> commands, int startX)
{
    int x = startX;
    int most = startX;
    for (int i = 0; i < commands.Count; i++)
    {
        x = x + StepX(commands[i]);
        if (x > most)
        {
            most = x;
        }
    }
    return most;
}
${STEP_X}`,
        out: "4",
      },
    },
    {
      id: "q4m3-a5", skill: "rewrite", type: "mcq",
      stem: "A student's rewrite of FindTileX reads the level directly with level[y][x].",
      code: `List<string> level = new List<string>();
level.Add("######");
level.Add("#.+..#");
level.Add("#...$#");
level.Add("#$...#");
level.Add("######");
Console.WriteLine(FindTileX(level, '$'));

int FindTileX(List<string> level, char tile)
{
    for (int y = 0; y < level.Count; y++)
    {
        for (int x = 0; x < level[y].Length; x++)
        {
            if (level[y][x] == tile)
            {
                return x;
            }
        }
    }
    return -1;
}`,
      question: "What is printed?",
      choices: ["4", "1", "2", "-1"],
      why: [
        "The outer loop goes row by row. The first $ it meets is in row 2 at x 4, and return x ends the function there, before row 3 is read.",
        "1 is the x of the $ in row 3. The search finishes row 2 before it starts row 3, and it returns at the first $.",
        "2 is the y of the first $. The function returns x.",
        "-1 is returned only when there is no $ at all.",
      ],
      answer: 0,
      verify: { out: "4" },
    },
    {
      id: "q4m3-a6", skill: "rewrite", type: "mcq",
      stem: "A student rewrote AnyAlive without IsAlive. The game counts a character as alive only when its health is above 0.",
      code: `List<int> health = new List<int>();
health.Add(0);
health.Add(-3);
health.Add(0);
Console.WriteLine(AnyAlive(health));

bool AnyAlive(List<int> health)
{
    for (int i = 0; i < health.Count; i++)
    {
        if (health[i] >= 0)
        {
            return true;
        }
    }
    return false;
}`,
      question: "What is printed?",
      choices: [
        "True",
        "False",
        "0",
        "It builds, then crashes when it runs (ArgumentOutOfRangeException).",
      ],
      why: [
        "health[0] is 0, and 0 >= 0 is true, so the function returns true on the first pass. IsAlive uses hp > 0, so the game's AnyAlive gives False for this party.",
        "False is the right answer for a party where nobody is above 0, and it is what hp > 0 gives. The rewrite uses >=.",
        "0 is the index where the function returns. It returns a bool, True or False.",
        "The loop stops at i < health.Count, and the function returns on the first pass anyway.",
      ],
      answer: 0,
      verify: { out: "True" },
    },

    // ================================================================ Mock Quiz 3, Part B
    {
      id: "q4m3-b1", skill: "wr-params", type: "wr",
      source: "2024 exam, Set 2, question 2(c)",
      labels: PROC_LABELS,
      listI: M3B1_PROC,
      listII: M3B1_CALL,
      prompt: PROMPT_PARAMS,
      rows: [
        {
          name: "Names the parameters",
          levels: [
            "Missing, or names the arguments from the call (typed, partyUp, outside) instead of the parameters.",
            "Names one or two of them, or mixes a parameter with an argument.",
            "command, anyAlive, and escaped, the three parameters of KeepPlaying.",
          ],
        },
        {
          name: "Explains the abstraction",
          levels: [
            "Missing, or about a parameter that does not change the result.",
            "Vague: parameters make the code reusable, with nothing about how the game ends.",
            "The three parameters bring every way the game can end into one procedure, so the game loop makes one call each turn, and a new way to end changes only KeepPlaying.",
          ],
        },
      ],
      model: "The parameters are command, anyAlive, and escaped.\n\nEach one is a different way the game can end: the player types quit, the whole party is down, or the party gets out. Every one of them changes the answer. KeepPlaying(\"s\", true, false) is true, but making anyAlive false or escaped true makes it false. Because the three facts come in as parameters, the rest of the game does not have to know the rules for ending. Each turn it makes one call, KeepPlaying(typed, partyUp, outside), and gets back true or false. Without the parameters, the same three tests would have to be written out wherever the game checks whether to go on, and adding a fourth way to end would mean finding and changing every copy.",
      note: NOTE_PARAMS,
      facts: "The call prints True, then False. KeepPlaying(\"s\", true, false) is True, and changing any one argument makes it False: KeepPlaying(\"quit\", true, false), KeepPlaying(\"s\", false, false), and KeepPlaying(\"s\", true, true) are all False. So all three parameters change the result.",
      verify: {
        cases: [
          { run: `${M3B1_CALL}
${M3B1_PROC}`, out: "True\nFalse" },
          { run: `Console.WriteLine(KeepPlaying("s", true, false));
Console.WriteLine(KeepPlaying("quit", true, false));
Console.WriteLine(KeepPlaying("s", false, false));
Console.WriteLine(KeepPlaying("s", true, true));
${M3B1_PROC}`, out: "True\nFalse\nFalse\nFalse" },
        ],
      },
    },
    {
      id: "q4m3-b2", skill: "wr-logic", type: "wr",
      source: "2025 exam, Set 2, question 2(b)",
      listI: M3B2_LIST_I,
      listII: M3B2_LIST_II,
      call: M3B2_CALL,
      prompt: PROMPT_LOGIC,
      rows: [
        {
          name: "A modification to List (ii) that still runs",
          levels: [
            "None, a change that does not build (a missing semicolon or brace), or a change to the list instead of WalkY.",
            "A change too vague to try (\"change the step\").",
            "A specific change to WalkY that builds and runs.",
          ],
        },
        {
          name: "Why it is a logic error, consistent with the code",
          levels: [
            "Missing, or the result described is not what the changed code does (StepY(commands[i]) + y still gives 4).",
            "Says it would be wrong, without saying what comes out wrong.",
            "Says what comes out wrong and why, with the y it gives for these commands.",
          ],
        },
      ],
      model: "The other programmer could change StepY(commands[i]) to StepX(commands[i]). StepX is a real function that takes a string and returns an int, so it still builds and runs. But now y moves with a and d instead of w and s. The three w and the one s add nothing, and the d adds 1, so WalkY(commands, 6) gives 7 instead of 4. The player is drawn one row below where they started instead of two rows above it.",
      note: NOTE_LOGIC,
      factsTable: [
        ["StepX in place of StepY", "7: only the d moves y, and the w and s commands count as 0"],
        ["int y = 0; in place of int y = startY;", "-2: the moves are added to 0, so the start row is lost"],
        ["int i = 1", "5: the first w is skipped"],
        ["y = StepY(commands[i]) + y;", "4, still right: adding in the other order gives the same sum, so this is not a logic error"],
      ],
      verify: {
        cases: [
          { run: `${M3B2_HEAD}
${walkY("startY", "0", "y = y + StepY(commands[i]);")}`, out: "4" },
          { run: `${M3B2_HEAD}
${walkY("startY", "0", "y = y + StepX(commands[i]);")}`, out: "7" },
          { run: `${M3B2_HEAD}
${walkY("0", "0", "y = y + StepY(commands[i]);")}`, out: "-2" },
          { run: `${M3B2_HEAD}
${walkY("startY", "1", "y = y + StepY(commands[i]);")}`, out: "5" },
          { run: `${M3B2_HEAD}
${walkY("startY", "0", "y = StepY(commands[i]) + y;")}`, out: "4" },
        ],
      },
    },
  ],
};

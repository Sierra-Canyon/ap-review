// StepX and StepY from Screens.cs, as local functions each example can call.
const STEP_X = `int StepX(string command)
{
    if (command == "a")
    {
        return -1;
    }
    else if (command == "d")
    {
        return 1;
    }
    else
    {
        return 0;
    }
}`;

const STEP_Y = `int StepY(string command)
{
    if (command == "w")
    {
        return -1;
    }
    else if (command == "s")
    {
        return 1;
    }
    else
    {
        return 0;
    }
}`;

const DRAW_HALL = `void DrawHall(string hall, int playerX)
{
    string row = "";
    for (int x = 0; x < hall.Length; x++)
    {
        if (x == playerX)
        {
            row = row + "@";
        }
        else
        {
            row = row + hall[x];
        }
    }
    Console.WriteLine(row);
}`;

const GAME = `string hall = "#....+#";
int playerX = 1;
int turns = 0;
bool playing = true;
while (playing)
{
    DrawHall(hall, playerX);
    string command = Console.ReadLine();
    turns = turns + 1;
    if (command == "quit")
    {
        playing = false;
    }
    else
    {
        playerX = playerX + StepX(command);
        if (hall[playerX] == '+')
        {
            Console.WriteLine("Through the door.");
            playing = false;
        }
    }
}
Console.WriteLine("Turns: " + turns);

${DRAW_HALL}

${STEP_X}`;

const COUNT_MOVES = (op) => `int CountMoves(List<string> commands)
{
    int moves = 0;
    for (int i = 0; i < commands.Count; i++)
    {
        if (StepX(commands[i]) != 0 ${op} StepY(commands[i]) != 0)
        {
            moves = moves + 1;
        }
    }
    return moves;
}`;

export default {
  id: "for-6",
  chapter: 5,
  number: "5.6",
  title: "The game loop, and a walk replayed with for",
  from: "For 6 · Day 16",
  minutes: 30,
  skills: ["listloop"],
  goals: [
    "Say why the game loop is a `while` and every other loop is a `for`",
    "Name what makes `playing` false and ends the game",
    "Turn a command into a step with `StepX` and `StepY`",
    "Replay a list of commands with a `for` loop, starting from where the player started",
  ],
  blocks: [
    {
      type: "text",
      md: "A `for` loop knows before its first pass how many passes it will make: `i < commands.Count`. The game cannot know how many commands the player will type. It runs until the player quits, wins, or loses, so `Program.cs` has one loop that is not a `for`:\n\n- `bool playing = true;`\n- `while (playing)`\n\nAs long as `playing` is true, the braces run again. A line inside them sets `playing` to false: when the player types `quit`, goes through the last door, or when nobody in the party is alive.",
    },
    {
      type: "recipe",
      title: "A while loop",
      template: `while ({condition})
{
    {body}
}`,
      parts: [
        { slot: "{condition}", meaning: "a `bool`, asked before every pass. When it is false, the loop stops and the line after the closing brace runs." },
        { slot: "{body}", meaning: "one pass. In the game, one pass is one turn." },
      ],
    },
    {
      type: "text",
      md: "## One pass, one turn\n\nThis is a game loop on a hall one row tall. Each pass draws the hall, reads one command, and decides what it does. The program reads its commands from the input, one per line: `d`, `help`, `d`, `d`, `d`.",
    },
    {
      type: "code",
      code: GAME,
      stdin: "d\nhelp\nd\nd\nd\n",
      expect: { out: "#@...+#\n#.@..+#\n#.@..+#\n#..@.+#\n#...@+#\nThrough the door.\nTurns: 5" },
    },
    {
      type: "text",
      md: "The loop made five passes, one per command, and drew the hall on each. `help` is not a move, so the third drawing is the same as the second. The fifth `d` puts the player on the `+`, the line inside sets `playing` to false, and the loop stops. Two lines in this loop set `playing` to false, and nothing before the loop starts says which one will run, or when.",
    },
    {
      type: "note",
      kind: "trap",
      md: "Something inside a `while` loop has to make the condition false. If no line ever sets `playing` to false, the loop never stops, and the program runs until it is stopped by hand.",
    },
    {
      type: "text",
      md: "## StepX and StepY\n\n`StepX` and `StepY` in `Screens.cs` turn a command into a step. `StepX` gives `-1` for `a`, `1` for `d`, and `0` for anything else. `StepY` gives `-1` for `w` and `1` for `s`. `Program.cs` uses them as `int newX = playerX + StepX(command);`.",
    },
    {
      type: "code",
      code: `Console.WriteLine(StepX("a"));
Console.WriteLine(StepX("d"));
Console.WriteLine(StepX("help"));
Console.WriteLine(StepY("w"));
Console.WriteLine(StepY("d"));

${STEP_X}

${STEP_Y}`,
      expect: { out: "-1\n1\n0\n-1\n0" },
    },
    {
      type: "text",
      md: "## Replaying a recording\n\nA recording of a game is a list of commands. A list knows how long it is, so a `for` loop can replay it. `CountMoves` counts the commands that move the player at all, across or down.",
    },
    {
      type: "code",
      code: `List<string> typed = new List<string>();
typed.Add("d");
typed.Add("help");
typed.Add("s");
Console.WriteLine(CountMoves(typed));

${COUNT_MOVES("||")}

${STEP_X}

${STEP_Y}`,
      expect: { out: "2" },
    },
    {
      type: "text",
      md: "`d` moves across and `s` moves down. `help` is 0 and 0, so the `if` is false for it.\n\nTo find where a walk ends, start where the player started and add each step to it. Step through `WalkX` and watch `x` in the Variables pane.",
    },
    {
      type: "step",
      code: `List<string> commands = new List<string>();
commands.Add("d");
commands.Add("d");
commands.Add("s");
commands.Add("a");
Console.WriteLine(WalkX(commands, 1));

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
      notes: {
        "6": "Calls WalkX with the list and a start of 1.",
        "10": "The walk starts where it is told: x is startX, 1.",
        "11": "commands.Count is 4, so the loop knows before it starts that it makes 4 passes.",
        "13": "StepX turns the command into -1, 0, or 1, and that is added to where x already is.",
      },
      expect: { out: "2" },
    },
    {
      type: "text",
      md: "`x` goes 1, 2, 3, 3, 2. The `s` changes nothing across, and the `a` takes one away.",
    },
    {
      type: "note",
      kind: "trap",
      md: "Two ways to get the walk wrong, both of which build. `x = StepX(commands[i]);`, with no `x +`, replaces `x` on every pass, so only the last command counts: the walk above gives `-1`. `int x = 0;` in place of `int x = startX;` starts the walk at the left wall: it gives `1`.",
    },
    {
      type: "code",
      code: `List<string> commands = new List<string> { "d", "d", "s", "a" };
Console.WriteLine(WalkReplace(commands, 1));
Console.WriteLine(WalkFromZero(commands, 1));

int WalkReplace(List<string> commands, int startX)
{
    int x = startX;
    for (int i = 0; i < commands.Count; i++)
    {
        x = StepX(commands[i]);
    }
    return x;
}

int WalkFromZero(List<string> commands, int startX)
{
    int x = 0;
    for (int i = 0; i < commands.Count; i++)
    {
        x = x + StepX(commands[i]);
    }
    return x;
}

${STEP_X}`,
      expect: { out: "-1\n1" },
    },
    {
      type: "ap",
      md: "Question 2(a) on the 2025 exam asks about a Boolean expression in your own code: what it is, and which values make it true and which make it false. In `CountMoves` the expression is `StepX(commands[i]) != 0 || StepY(commands[i]) != 0`. It is true when `commands[i]` is `\"d\"`, because `StepX(\"d\")` is 1, and false when it is `\"help\"`, because both steps are 0. A strong answer copies the expression from the code and gives a specific value on each side.",
    },
    {
      type: "mcq",
      id: "for-6-q1",
      question: "Why is the game loop a `while` and not a `for`?",
      choices: [
        "A for loop knows how many passes it will make before it starts, and the game cannot know how many commands the player will type.",
        "A while loop runs faster than a for loop.",
        "Only a while loop can call Console.ReadLine inside it.",
        "A for loop cannot have an if inside it.",
      ],
      answer: 0,
      why: [
        "The game runs until the player quits, wins, or loses. Nothing before the first turn says when that will be.",
        "Speed is not the reason. A loop is a while when the number of passes is not known before it starts.",
        "Any loop can read input. The game reads one command per pass because it does not know how many passes there will be.",
        "CountMoves has an if inside its for loop. The difference is whether the number of passes is known.",
      ],
      verify: null,
    },
    {
      type: "mcq",
      id: "for-6-q2",
      question: "`CountMoves` is written with `&&` in place of `||`. What is printed?",
      code: `List<string> typed = new List<string>();
typed.Add("d");
typed.Add("help");
typed.Add("s");
Console.WriteLine(CountMoves(typed));

${COUNT_MOVES("&&")}`,
      choices: ["0", "2", "1", "3"],
      answer: 0,
      why: [
        "&& needs both steps to be nonzero. No command moves across and down at once, so the if is never true.",
        "2 is what || gives: any move at all. && asks for a move across and a move down in one command.",
        "d moves across but not down, and s moves down but not across. Neither passes &&.",
        "3 counts every command. help is 0 and 0, and it fails both versions of the test.",
      ],
      verify: { run: `List<string> typed = new List<string>();\ntyped.Add("d");\ntyped.Add("help");\ntyped.Add("s");\nConsole.WriteLine(CountMoves(typed));\n\n${COUNT_MOVES("&&")}\n\n${STEP_X}\n\n${STEP_Y}`, out: "0" },
    },
    {
      type: "mcq",
      id: "for-6-q3",
      question: "The game loop from the top of this section is run with this input, one command per line: `a`, `quit`, `d`, `d`. What is the last line printed?",
      choices: ["Turns: 2", "Turns: 4", "Through the door.", "Turns: 1"],
      answer: 0,
      why: [
        "The first pass reads a and moves the player to x 0. The second reads quit and sets playing to false, so the loop stops. The two d commands are never read.",
        "The loop stops at quit. Nothing after it is read.",
        "The player never reaches the +. The a moves away from it, and the loop ends at quit.",
        "turns goes up on every pass, the quit pass too.",
      ],
      verify: { run: GAME, stdin: "a\nquit\nd\nd\n", out: "#@...+#\n@....+#\nTurns: 2" },
    },
    {
      type: "mcq",
      id: "for-6-q4",
      question: "What is printed?",
      code: `List<string> commands = new List<string> { "s", "s", "w" };
Console.WriteLine(WalkY(commands, 3));

int WalkY(List<string> commands, int startY)
{
    int y = 0;
    for (int i = 0; i < commands.Count; i++)
    {
        y = y + StepY(commands[i]);
    }
    return y;
}`,
      choices: ["1", "4", "-1", "3"],
      answer: 0,
      why: [
        "y starts at 0, not at startY. Down, down, and up from 0 ends at 1.",
        "4 is the right walk: down, down, and up from 3. That needs y to start at startY.",
        "-1 is the last command alone. This loop adds each step to y.",
        "3 is where the walk starts, startY. The loop never uses startY.",
      ],
      verify: { run: `List<string> commands = new List<string> { "s", "s", "w" };\nConsole.WriteLine(WalkY(commands, 3));\n\nint WalkY(List<string> commands, int startY)\n{\n    int y = 0;\n    for (int i = 0; i < commands.Count; i++)\n    {\n        y = y + StepY(commands[i]);\n    }\n    return y;\n}\n\n${STEP_Y}`, out: "1" },
    },
    {
      type: "parsons",
      id: "for-6-p1",
      prompt: "Put the lines in order so the program counts the commands that move across, `a` or `d`, and prints `2`.",
      lines: [
        `List<string> typed = new List<string> { "d", "help", "a", "s" };`,
        `int across = 0;`,
        `for (int i = 0; i < typed.Count; i++)`,
        `{`,
        `    if (typed[i] == "a" || typed[i] == "d")`,
        `    {`,
        `        across = across + 1;`,
        `    }`,
        `}`,
        `Console.WriteLine(across);`,
      ],
      distractors: [`    if (typed[i] == "a" && typed[i] == "d")`],
      expect: { out: "2" },
    },
    {
      type: "exercise",
      id: "for-6-e1",
      prompt: "A recording is a list of commands, one per turn. Write `TurnsPlayed`. It returns how many turns the game lasted: the commands up to and including the first `quit`, or all of them when there is no `quit`. For `d`, `help`, `quit`, `s` it is `3`.",
      starter: `int TurnsPlayed(List<string> commands)
{
    return 0;
}`,
      solution: `int TurnsPlayed(List<string> commands)
{
    for (int i = 0; i < commands.Count; i++)
    {
        if (commands[i] == "quit")
        {
            return i + 1;
        }
    }
    return commands.Count;
}`,
      tests: [
        { call: `TurnsPlayed(new List<string> { "d", "help", "quit", "s" })`, expect: "3" },
        { call: `TurnsPlayed(new List<string> { "quit", "d" })`, expect: "1" },
        { call: `TurnsPlayed(new List<string> { "d", "d", "s" })`, expect: "3" },
        { call: `TurnsPlayed(new List<string> { "a", "quit", "w", "quit" })`, expect: "2" },
        { call: `TurnsPlayed(new List<string>())`, expect: "0" },
      ],
      hints: [
        "When `commands[i]` is `\"quit\"`, the turns so far are `i + 1`, because `i` counts from 0. Return that.",
        "If the loop finishes without finding a `quit`, every command was a turn: return `commands.Count` after the loop.",
      ],
    },
    {
      type: "summary",
      items: [
        "A `for` loop knows how many passes it will make before it starts. The game loop cannot, so it is the one `while` in the game: `while (playing)`.",
        "A `while` loop runs until its condition is false. In the game, `playing` is set to false by `quit`, the last door, or a party with nobody alive.",
        "One pass of the game loop is one turn: draw, read a command, decide.",
        "`StepX` gives -1 for `a`, 1 for `d`, and 0 for anything else. `StepY` does the same for `w` and `s`.",
        "To replay a walk, start at `startX` and add each step: `x = x + StepX(commands[i]);`.",
      ],
    },
  ],
};

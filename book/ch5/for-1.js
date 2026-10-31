export default {
  id: "for-1",
  chapter: 5,
  number: "5.1",
  title: "The three parts of a for loop",
  from: "For 1 · Day 11",
  minutes: 25,
  skills: ["forloop"],
  goals: [
    "Name the start, the test, and the step of a `for` loop",
    "Say how many times `i < n` runs the body, and what `i` is when the loop stops",
    "Build a string one piece per pass and return it after the loop",
    "Spot the `<=` off-by-one from its output",
  ],
  blocks: [
    {
      type: "text",
      md: "A `for` loop runs the lines in its braces again and again, and keeps count with a variable, usually called `i`. Run this.",
    },
    {
      type: "code",
      code: `for (int i = 0; i < 3; i++)
{
    Console.WriteLine("Step " + i);
}`,
      expect: { out: "Step 0\nStep 1\nStep 2" },
    },
    {
      type: "recipe",
      title: "The for loop",
      template: "for ({start}; {test}; {step})",
      parts: [
        { slot: "{start}", meaning: "`int i = 0` makes the counter. It runs once, before anything else" },
        { slot: "{test}", meaning: "`i < 3` is asked before every pass, the first one included. When it is false, the loop is over" },
        { slot: "{step}", meaning: "`i++` adds one to `i` after each pass" },
      ],
    },
    {
      type: "text",
      md: "Here is the loop above, one line for each time the test is asked:\n\n- `i` is 0. `0 < 3` is true. It prints `Step 0`.\n- `i` is 1. `1 < 3` is true. It prints `Step 1`.\n- `i` is 2. `2 < 3` is true. It prints `Step 2`.\n- `i` is 3. `3 < 3` is false. The loop is over.\n\nThe test is asked four times and is true three times. `i` stops at 3, the first value that fails the test, and 3 is never printed. A loop that starts at 0 and tests `i < n` runs its body exactly `n` times.",
    },
    {
      type: "text",
      md: "## Building a string\n\n`Coins` does not print inside its loop. Each pass adds one `$` to `line`, and after the loop the function returns the whole string. Step through it and watch `line` grow in the Variables pane.",
    },
    {
      type: "step",
      code: `Console.WriteLine(Coins(3));
Console.WriteLine("[" + Coins(0) + "]");

string Coins(int n)
{
    string line = "";
    for (int i = 0; i < n; i++)
    {
        line = line + "$";
    }
    return line;
}`,
      notes: {
        "1": "Calls Coins with n = 3, so the test will be i < 3.",
        "6": "line starts empty. It is declared before the loop, so it is still there after the loop.",
        "7": "The test is asked here before every pass. When it is false, the next line to run is return line.",
        "9": "One pass: one more $ on the end of line.",
        "11": "After the loop, the whole string goes back to the caller.",
        "2": "Coins(0): the test 0 < 0 is false before the first pass.",
      },
      expect: { out: "$$$\n[]" },
    },
    {
      type: "text",
      md: "## Zero passes\n\nThe brackets in the second call show an empty string. For `Coins(0)`, the test `0 < 0` is false before the first pass, so the body never runs and `line` is still `\"\"`. A loop can run zero times.",
    },
    {
      type: "text",
      md: "## Using i inside the loop\n\n`i` is an `int` like any other, and the body can test it. This loop draws one row of a level, six tiles wide, with a monster at column 2.",
    },
    {
      type: "code",
      code: `string row = "";
for (int i = 0; i < 6; i++)
{
    if (i == 2)
    {
        row = row + "M";
    }
    else
    {
        row = row + ".";
    }
}
Console.WriteLine("#" + row + "#");`,
      expect: { out: "#..M...#" },
    },
    {
      type: "text",
      md: "The `M` is the third tile, because the columns count from 0, like list indexes. Change `i == 2` to `i == 0` and run it again.",
    },
    {
      type: "text",
      md: "## The off-by-one: <=\n\nHere is `Coins` with one character changed: `i <= n` in place of `i < n`.",
    },
    {
      type: "code",
      code: `Console.WriteLine(Coins(3));
Console.WriteLine("[" + Coins(0) + "]");

string Coins(int n)
{
    string line = "";
    for (int i = 0; i <= n; i++)
    {
        line = line + "$";
    }
    return line;
}`,
      expect: { out: "$$$$\n[$]" },
    },
    {
      type: "text",
      md: "`Coins(3)` gives `$$$$`, four coins, and `Coins(0)` gives `[$]`. With `<=`, `i` took the values 0, 1, 2, and 3: four values. It builds and runs with no warning.",
    },
    {
      type: "note",
      kind: "trap",
      md: "`i <= n` with a start of 0 runs the body `n + 1` times. The zero call shows it fastest: `[$]` where `[]` belongs. To run `n` times, start at 0 and test `i < n`.",
    },
    {
      type: "mcq",
      id: "for-1-q1",
      question: "What is printed?",
      code: `for (int i = 2; i < 5; i++)
{
    Console.WriteLine(i);
}`,
      choices: ["2, 3, and 4, one per line", "0, 1, 2, 3, and 4, one per line", "2, 3, 4, and 5, one per line", "3 and 4, one per line"],
      answer: 0,
      why: [
        "The start is 2, so the first pass prints 2. When i is 5, 5 < 5 is false and the loop stops. That is three passes.",
        "The start is int i = 2, not 0.",
        "5 fails the test, so it is never printed.",
        "The step runs after each pass, so the first pass uses the start value, 2.",
      ],
      verify: { out: "2\n3\n4" },
    },
    {
      type: "mcq",
      id: "for-1-q2",
      question: "When this loop stops, what is `i`?",
      code: `for (int i = 0; i < 4; i++)
{
    Console.WriteLine("torch " + i);
}`,
      choices: ["4", "3", "5", "0"],
      answer: 0,
      why: [
        "After the pass that prints torch 3, the step makes i 4, and 4 < 4 is false. The loop stops at the first value that fails the test.",
        "3 is the last value printed. The step runs once more after that pass.",
        "The loop stops as soon as the test is false, at 4.",
        "0 is the start. The step adds one after every pass.",
      ],
      verify: {
        run: `int i;
for (i = 0; i < 4; i++)
{
    Console.WriteLine("torch " + i);
}
Console.WriteLine(i);`,
        out: "torch 0\ntorch 1\ntorch 2\ntorch 3\n4",
      },
    },
    {
      type: "mcq",
      id: "for-1-q3",
      question: "What is printed?",
      code: `string tally = "";
for (int i = 0; i < 4; i++)
{
    tally = tally + i;
}
Console.WriteLine(tally);`,
      choices: ["0123", "1234", "6", "01234"],
      answer: 0,
      why: [
        "tally is a string, so + joins: the digits 0, 1, 2, and 3 are added one per pass.",
        "i starts at 0, so the first digit is 0.",
        "6 is 0 + 1 + 2 + 3 as numbers. tally is a string, so + joins instead of adding.",
        "When i is 4, the test is false, so 4 is never added.",
      ],
      verify: { out: "0123" },
    },
    {
      type: "mcq",
      id: "for-1-q4",
      question: "`return line;` has moved inside the loop. What happens?",
      code: `string Coins(int n)
{
    string line = "";
    for (int i = 0; i < n; i++)
    {
        line = line + "$";
        return line;
    }
}`,
      choices: [
        "It does not build: 'Coins(int)': not all code paths return a value.",
        "Coins(3) returns $.",
        "Coins(3) returns $$$.",
        "It builds, and Coins(0) crashes when it runs.",
      ],
      answer: 0,
      why: [
        "When n is 0 the loop never runs, and the function reaches its last brace with nothing returned. The compiler sees that path and stops the build with CS0161.",
        "It would return after one pass, but the build stops first.",
        "A return inside the loop leaves after the first pass. Here the build stops before anything runs.",
        "The compiler finds the missing return before the program runs.",
      ],
      verify: {
        run: `Console.WriteLine(Coins(3));
string Coins(int n)
{
    string line = "";
    for (int i = 0; i < n; i++)
    {
        line = line + "$";
        return line;
    }
}`,
        error: "CS0161",
      },
    },
    {
      type: "parsons",
      id: "for-1-p1",
      prompt: "Put the lines in order so the program prints `@....+`: the player, four floor tiles, and the door.",
      lines: [
        `string trail = "";`,
        `for (int i = 0; i < 4; i++)`,
        `{`,
        `    trail = trail + ".";`,
        `}`,
        `Console.WriteLine("@" + trail + "+");`,
      ],
      distractors: [`for (int i = 0; i <= 4; i++)`],
      expect: { out: "@....+" },
    },
    {
      type: "exercise",
      id: "for-1-e1",
      prompt: "Write `Row`. It returns a row of `width` tiles, with `M` at column `monsterAt` and `.` everywhere else. `Row(5, 2)` is `..M..`. When `monsterAt` is not a column of the row, the row is all floor.",
      starter: `string Row(int width, int monsterAt)
{
    return "";
}`,
      solution: `string Row(int width, int monsterAt)
{
    string row = "";
    for (int i = 0; i < width; i++)
    {
        if (i == monsterAt)
        {
            row = row + "M";
        }
        else
        {
            row = row + ".";
        }
    }
    return row;
}`,
      tests: [
        { call: `Row(5, 2)`, expect: "..M.." },
        { call: `Row(4, 0)`, expect: "M..." },
        { call: `Row(1, 0)`, expect: "M" },
        { call: `Row(3, 7)`, expect: "..." },
        { call: `"[" + Row(0, 0) + "]"`, expect: "[]" },
      ],
      hints: [
        "`string row = \"\";` before the loop, and `return row;` after it.",
        "The loop runs `width` times: `i < width`.",
        "Inside the loop, `i == monsterAt` decides between `M` and `.`.",
      ],
    },
    {
      type: "summary",
      items: [
        "A `for` loop has a start (`int i = 0`), a test (`i < n`), and a step (`i++`).",
        "The test is asked before every pass, the first included. When it is false the loop stops.",
        "Starting at 0 with `i < n` runs the body `n` times. When the loop stops, `i` is `n`.",
        "When `n` is 0 the body runs zero times: `Coins(0)` returns `\"\"`.",
        "`i <= n` runs one pass too many: `Coins(3)` gives `$$$$` and `Coins(0)` gives `$`.",
        "Build the string before the loop, add to it inside, and `return` it after the closing brace.",
      ],
    },
  ],
};

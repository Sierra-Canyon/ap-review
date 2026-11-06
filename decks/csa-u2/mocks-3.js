// AP CSA mock forms, set 3: Quiz 5 Practice C, in the dungeon crawler world (Quests 15 and 16: a level as one String).
// Students take these cold. In every mcq the key is written first and answer is 0 (the site shuffles).
// Plain Strings and ints only; no crawler classes.

const fill = (code, hole, piece) => code.replace(hole, piece);

const PC02 = `String row = "#.M.$";
/* missing loop */`;
const pc02 = (header) => `${header}
{
    System.out.print(row.substring(i, i + 3) + " ");
}`;
const PC02_KEY = pc02("for (int i = 0; i < row.length() - 2; i++)");
const PC02_B = pc02("for (int i = 0; i < row.length(); i++)");
const PC02_C = pc02("for (int i = 0; i <= row.length() - 2; i++)");
const PC02_D = pc02("for (int i = 0; i < row.length() - 3; i++)");

const PC07 = `String row = "M.M..@";
int hero = row.indexOf("@");
int seen = -1;
int i = hero - 1;
while (i >= 0 && seen == -1)
{
    if (row.substring(i, i + 1).equals("M"))
    {
        seen = i;
    }
    i--;
}
System.out.println((hero - seen) + " " + i);`;

const PC10 = `String row = "MM.MMM";
int pairs = 0;
for (int i = 0; i < row.length() - 1; i++)
{
    if (/* missing condition */)
    {
        pairs++;
    }
}
System.out.println(pairs);`;
const PC10_KEY = "row.substring(i, i + 2).equals(\"MM\")";
const PC10_B = "row.substring(i, i + 2) == \"MM\"";
const PC10_C = "row.substring(i, i + 1).equals(\"M\")";
const PC10_D = "row.indexOf(\"MM\") >= 0";

const PC11 = `String row = "#..$#.M..#.";
int run = 0;
int best = 0;
for (int i = 0; i < row.length(); i++)
{
    if (!row.substring(i, i + 1).equals("#"))
    {
        run++;
        if (run > best)
        {
            best = run;
        }
    }
    else
    {
        run = 0;
    }
}
System.out.println(best);`;

const q5c = [
  { id: "q5pc-01", skill: "string", type: "mcq", topic: "2.10",
    stem: "A hero's moves are stored as one String of compass letters. Consider the following code segment.",
    code: `String moves = "NEESWN";
String back = "";
for (int i = 0; i < moves.length(); i += 2)
{
    back = moves.substring(i, i + 1) + back;
}
System.out.println(back);`,
    question: "What is printed, and how many times does the body of the loop run?",
    choices: [
      "WEN, and the body runs 3 times",
      "NEW, and the body runs 3 times",
      "NSE, and the body runs 3 times",
      "WEN, and the body runs 6 times",
    ],
    why: [
      "i takes the values 0, 2, and 4, so the letters N, E, and W are taken, and each one goes in FRONT of what `back` already holds.",
      "This adds each letter at the end. The code puts the new letter first: `moves.substring(i, i + 1) + back`.",
      "This takes the odd indexes, 1, 3, and 5. The loop starts i at 0.",
      "The String has 6 letters, but `i += 2` skips one each time, so the body runs once for 0, 2, and 4.",
    ],
    answer: 0,
    verify: { out: "WEN" } },

  { id: "q5pc-02", skill: "string", type: "mcq", topic: "2.10",
    stem: "The following code segment is intended to print every group of three neighboring tiles in `row`, each followed by a space. For `\"#.M.$\"` it should print `#.M .M. M.$`.",
    code: PC02,
    question: "Which of the following can replace `/* missing loop */` so that the code segment works as intended?",
    choices: [PC02_KEY, PC02_B, PC02_C, PC02_D], mono: true,
    why: [
      "The last group starts at index `length() - 3`, so i must stay below `length() - 2`. Then `i + 3` is never more than `length()`.",
      "On the pass with i equal to `length() - 2`, `i + 3` is `length() + 1`, past the end, and a StringIndexOutOfBoundsException is thrown.",
      "`<= length() - 2` lets i reach `length() - 2`, one start too far. `i + 3` runs past the end and a StringIndexOutOfBoundsException is thrown.",
      "This stops one group early and never prints the last three tiles, `M.$`.",
    ],
    answer: 0,
    verify: { cases: [
      { run: fill(PC02, "/* missing loop */", PC02_KEY), out: "#.M .M. M.$ " },
      { run: fill(PC02, "/* missing loop */", PC02_B), throws: "StringIndexOutOfBoundsException" },
      { run: fill(PC02, "/* missing loop */", PC02_C), throws: "StringIndexOutOfBoundsException" },
      { run: fill(PC02, "/* missing loop */", PC02_D), out: "#.M .M. " },
    ] } },

  { id: "q5pc-03", skill: "string", type: "mcq", topic: "2.10",
    stem: "An arrow cannot pass a wall `#`, a door `N`, a crate `+`, or a monster `M`. Consider the following code segment.",
    code: `String row = "#..N..M.#";
int open = 0;
for (int i = 0; i < row.length(); i++)
{
    String tile = row.substring(i, i + 1);
    if ("#N+M".indexOf(tile) == -1)
    {
        open++;
    }
}
System.out.println(open);`,
    question: "What is printed?",
    choices: ["5", "4", "7", "9"], mono: true,
    why: [
      "`indexOf` returns -1 only when `tile` is not one of the four blocking tiles, so `open` counts the five `.` tiles.",
      "This counts the tiles that ARE in `\"#N+M\"`. `== -1` means not found.",
      "This treats the two `#` tiles as not found. `#` is at position 0 of `\"#N+M\"`, and 0 is a real position; only -1 means not found.",
      "The loop runs once for every tile, but `open` goes up only when the `if` is true.",
    ],
    answer: 0,
    verify: { out: "5" } },

  { id: "q5pc-04", skill: "string", type: "mcq", topic: "2.10",
    stem: "The following code segment counts the empty tiles to the left of the hero.",
    code: `String row = ".....@";
int heroCol = row.indexOf("@");
int i = heroCol - 1;
while (i >= 0 && row.substring(i, i + 1).equals("."))
{
    i--;
}
System.out.println((heroCol - 1 - i) + " " + i);`,
    question: "What is the result of executing the code segment?",
    choices: [
      "5 -1",
      "Nothing is printed. A StringIndexOutOfBoundsException is thrown.",
      "4 0",
      "5 0",
    ],
    why: [
      "Every tile left of the hero is empty, so i goes down from 4 to -1. Then `i >= 0` is false, and `&&` stops before `substring` is called. 5 tiles were empty.",
      "`substring(-1, 0)` would throw, but `&&` never evaluates it: `i >= 0` is checked first and is false. With the two tests in the other order, the exception would be thrown.",
      "This stops before index 0. The test is `i >= 0`, so index 0 is checked, and it is empty.",
      "After index 0 is checked and found empty, `i--` still runs, so i ends at -1.",
    ],
    answer: 0,
    verify: { out: "5 -1" } },

  { id: "q5pc-05", skill: "string", type: "mcq", topic: "2.10",
    stem: "A level with 4 rows of 4 tiles is stored as one String, row after row:\n`#..#`\n`#M.#`\n`#@$#`\n`####`\n\nConsider the following code segment.",
    code: `String map = "#..##M.##@$#####";
int width = 4;
int heroAt = map.indexOf("@");
String up = map.substring(heroAt - width, heroAt - width + 1);
String down = map.substring(heroAt + width, heroAt + width + 1);
System.out.println(up + down);`,
    question: "What is printed?",
    choices: [
      "M#",
      "#M",
      "#$",
      "Nothing is printed. A StringIndexOutOfBoundsException is thrown.",
    ], mono: true,
    why: [
      "The @ is at index 9. The tile above it is one whole row, `width` characters, earlier, at index 5, an M. The tile below is `width` characters later, at index 13, a wall.",
      "This swaps the two. `heroAt - width` is the row above; `heroAt + width` is the row below.",
      "These are the tiles to the left and right, at `heroAt - 1` and `heroAt + 1`. Moving one row up or down moves `width` characters.",
      "The hero is in row 2 of 4, so both index 5 and index 13 are inside the 16 tiles.",
    ],
    answer: 0,
    verify: { out: "M#" } },

  { id: "q5pc-06", skill: "string", type: "mcq", topic: "2.10",
    stem: "A level with 3 rows of 5 tiles is stored as one String, row after row. Consider the following code segment.",
    code: `String map = "#.M.##.$.##.@.#";
int width = 5;
String column = "";
for (int i = 2; i < map.length(); i += width)
{
    column += map.substring(i, i + 1);
}
System.out.println(column);`,
    question: "What is printed, and how many times does the body of the loop run?",
    choices: [
      "M$@, and the body runs 3 times",
      "M$, and the body runs 2 times",
      "M$@, and the body runs 5 times",
      "Nothing is printed. A StringIndexOutOfBoundsException is thrown.",
    ],
    why: [
      "Adding `width` moves one row down in the same column, so i is 2, 7, and 12: column 2 of each row. The next value, 17, fails the test.",
      "This stops before the last row. 12 is less than 15, so the body runs for index 12 too.",
      "`width` is how far i moves each pass, not how many passes there are. The String has 3 rows, so the body runs 3 times.",
      "The test is checked before each pass, so i equal to 17 never reaches `substring`.",
    ],
    answer: 0,
    verify: { out: "M$@" } },

  { id: "q5pc-07", skill: "string", type: "mcq", topic: "2.10",
    stem: "The hero looks left along one row for the nearest monster. Consider the following code segment.",
    code: PC07,
    question: "What is printed?",
    choices: ["3 1", "5 -1", "3 2", "2 1"], mono: true,
    why: [
      "i starts just left of the hero, at 4, and goes down. The first M it meets is at index 2, 3 tiles away. `i--` still runs in that pass, so i is 1, and then `seen == -1` is false.",
      "This keeps looking to the end of the row, so the far M at index 0 replaces the near one. `seen == -1` in the condition stops the loop at the first M found.",
      "`i--` comes after the `if` in the same pass, so i goes down once more after the M is found.",
      "This counts the empty tiles between the hero and the M. `hero - seen` is the number of steps, and the step onto the M counts.",
    ],
    answer: 0,
    verify: { cases: [
      { run: PC07, out: "3 1" },
      { run: PC07.replace(" && seen == -1", ""), out: "5 -1" },
    ] } },

  { id: "q5pc-08", skill: "string", type: "mcq", topic: "2.10",
    stem: "A spell name is checked for doubled letters. Consider the following code segment.",
    code: `String spell = "frostbitten";
int pairs = 0;
boolean twin = false;
for (int i = 1; i < spell.length(); i++)
{
    if (spell.substring(i - 1, i).equals(spell.substring(i, i + 1)))
    {
        twin = true;
        pairs++;
    }
    else
    {
        twin = false;
    }
}
System.out.println(pairs + " " + twin);`,
    question: "What is printed?",
    choices: [
      "1 false",
      "1 true",
      "2 false",
      "Nothing is printed. A StringIndexOutOfBoundsException is thrown.",
    ], mono: true,
    why: [
      "Only the tt in `bitten` is a doubled pair, so `pairs` is 1. `twin` is set again on every pass, and the last pass compares e with n, so it ends `false`.",
      "`twin` does not stay true. The `else` sets it back to `false` on every pass that finds no pair, the last pass included.",
      "This counts both letters of the pair. `pairs` goes up once for each place where a letter equals the one before it.",
      "i starts at 1, so `i - 1` is never negative, and on the last pass `i + 1` is exactly `spell.length()`, which `substring` allows.",
    ],
    answer: 0,
    verify: { out: "1 false" } },

  { id: "q5pc-09", skill: "string", type: "mcq", topic: "2.10",
    stem: "A fireball turns every monster `M` in a row into floor `.`. Consider the following code segment.",
    code: `String row = "#M.MM$";
int kills = 0;
for (int i = 0; i < row.length(); i++)
{
    if (row.substring(i, i + 1).equals("M"))
    {
        row = row.substring(0, i) + "." + row.substring(i + 1);
        kills++;
    }
}
System.out.println(row + " " + kills);`,
    question: "What is printed?",
    choices: ["#....$ 3", "#M.MM$ 3", "#.$ 3", "#...M$ 2"], mono: true,
    why: [
      "Each M is found and `row` is set to a new String with `.` in its place. The new String has the same length, so the loop goes on to the next index as before. Three M tiles become floor.",
      "Strings cannot be changed, but `row = ...` makes `row` refer to the new String, so each change is kept.",
      "This drops the M tiles. `substring(0, i) + \".\" + substring(i + 1)` puts a `.` in place of each one, so `row` keeps its length.",
      "This skips the M right after one that was replaced. Nothing is removed, so every tile stays at the same index, and the M at index 4 is checked.",
    ],
    answer: 0,
    verify: { out: "#....$ 3" } },

  { id: "q5pc-10", skill: "string", type: "mcq", topic: "2.10",
    stem: "The following code segment is intended to count the places where two monsters stand side by side. For `\"MM.MMM\"` it should print `3`.",
    code: PC10,
    question: "Which of the following can replace `/* missing condition */` so that the code segment works as intended?",
    choices: [PC10_KEY, PC10_B, PC10_C, PC10_D], mono: true,
    why: [
      "`row.substring(i, i + 2)` is the two tiles starting at i, and `equals` compares them with `\"MM\"`. The three M tiles at the end make two overlapping pairs.",
      "`==` compares references. A new String from `substring` is never the same object as the literal `\"MM\"`, so nothing is counted and 0 is printed.",
      "This counts single M tiles, not pairs. It prints 4: the M at index 5 is never checked, because i stops at `row.length() - 2`.",
      "`row.indexOf(\"MM\")` searches the whole row and does not depend on i, so it is true on every pass and 5 is printed.",
    ],
    answer: 0,
    verify: { cases: [
      { run: fill(PC10, "/* missing condition */", PC10_KEY), out: "3" },
      { run: fill(PC10, "/* missing condition */", PC10_KEY).replace("\"MM.MMM\"", "\"M.M\""), out: "0" },
      { run: fill(PC10, "/* missing condition */", PC10_B), out: "0" },
      { run: fill(PC10, "/* missing condition */", PC10_C), out: "4" },
      { run: fill(PC10, "/* missing condition */", PC10_D), out: "5" },
    ] } },

  { id: "q5pc-11", skill: "string", type: "mcq", topic: "2.10",
    stem: "Walls `#` split a row into stretches. Consider the following code segment, which finds the longest stretch the hero can walk without meeting a wall.",
    code: PC11,
    question: "What is printed?",
    choices: ["4", "2", "8", "1"], mono: true,
    why: [
      "Every tile that is not `#` adds 1 to run, so gold and monsters count as well as floor. A wall sets run back to 0. The stretch `.M..` is the longest, 4 tiles.",
      "This counts only the `.` tiles. The test is true for every tile that is not `#`, so `$` and `M` count too.",
      "Without setting run back to 0, it counts every tile that is not a wall. The `else` starts a new stretch at each `#`.",
      "That is only the last stretch. best keeps the longest stretch seen so far, and a wall does not set it back.",
    ],
    answer: 0,
    verify: { cases: [
      { run: PC11, out: "4" },
      { run: PC11.replace("!row.substring(i, i + 1).equals(\"#\")", "row.substring(i, i + 1).equals(\".\")"), out: "2" },
      { run: PC11.replace("    else\n    {\n        run = 0;\n    }\n", ""), out: "8" },
    ] } },

  { id: "q5pc-12", skill: "string", type: "mcq", topic: "2.10",
    stem: "A spell's echo repeats every letter. Consider the following code segment.",
    code: `String spell = "zap";
String echo = "";
while (spell.length() > 0)
{
    String ch = spell.substring(0, 1);
    echo = echo + ch + ch;
    spell = spell.substring(1);
}
System.out.println(echo + " " + spell.length());`,
    question: "What is printed?",
    choices: [
      "zzaapp 0",
      "zzaapp 3",
      "zapzap 0",
      "Nothing is printed. A StringIndexOutOfBoundsException is thrown.",
    ], mono: true,
    why: [
      "Each pass takes the first letter, adds it twice, and then cuts it off with `substring(1)`. After 3 passes `spell` is the empty String, its length is 0, and the loop stops.",
      "`spell = spell.substring(1)` makes `spell` one letter shorter each pass, so it does not keep its 3 letters.",
      "That is the whole word added twice. Each pass adds only `ch`, one letter, twice.",
      "`substring(1)` on a 1-letter String is the empty String `\"\"`, not an error, and the test `spell.length() > 0` stops the loop before `substring(0, 1)` is called on it.",
    ],
    answer: 0,
    verify: { out: "zzaapp 0" } },
];

export default {
  forms: [
    { id: "q5c", name: "Quiz 5 Practice C", items: q5c },
  ],
};

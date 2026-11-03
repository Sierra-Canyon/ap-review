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
];

export default {
  forms: [
    { id: "q5c", name: "Quiz 5 Practice C", items: q5c },
  ],
};

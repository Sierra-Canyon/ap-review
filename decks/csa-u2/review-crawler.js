// AP CSA review bank, Unit 2, the crawler set: items built on Quests 13 to 17 of the Java dungeon crawler.
// a: Quest 13 Battle Report (2.9). w: Quest 14 Mana and Turns (2.7). s: Quests 15 and 16, Read the Map and Line of Fire (2.10).
// n: Quest 17 Draw the Map (2.11). f1, f2: free responses. Scanner input is replaced by variables; no crawler classes.
// In every mcq the key is written first and answer is 0 (the site shuffles).

const fill = (code, hole, piece) => code.replace(hole, piece);

// Takes the next command off the front of input. Every command in input is followed by one space.
const NEXT = `space = input.indexOf(" ");
command = input.substring(0, space);
input = input.substring(space + 1);`;
const FIRST = `int space = input.indexOf(" ");
String command = input.substring(0, space);
input = input.substring(space + 1);`;
const ind = (s) => s.split("\n").map((l) => "    " + l).join("\n");

// ---------- w04: the mana cap ----------
const W04 = `int mana = 3;
String input = "focus focus quit ";
${FIRST}
while (!command.equals("quit"))
{
    if (command.equals("focus"))
    {
        /* missing code */
    }
${ind(NEXT)}
}
System.out.println(mana);`;
const W04_KEY = `mana = mana + 2;
if (mana > 6)
{
    mana = 6;
}`;
const W04_B = `if (mana < 6)
{
    mana = mana + 2;
}`;
const W04_C = `if (mana + 2 < 6)
{
    mana = mana + 2;
}`;
const W04_D = `mana = mana + 2;
if (mana > 6)
{
    mana = mana - 2;
}`;
const w04 = (piece) => fill(W04, "/* missing code */", piece.split("\n").join("\n        "));

// ---------- a04: where the smallest starts ----------
const A04 = `/* missing code */
for (int swing = 1; swing <= 6; swing++)
{
    int damage = (swing * 9) % 15;
    if (damage > 0 && damage < smallest)
    {
        smallest = damage;
    }
}
System.out.println(smallest);`;
const a04 = (piece) => fill(A04, "/* missing code */", piece);

// ---------- s04 and s06: the arrow's loop condition ----------
const ARROW = (row, heroCol, reach) => `String row = "${row}";
int heroCol = ${heroCol};
int reach = ${reach};
String shot = "falls short";
int stoppedAt = -1;
int step = 1;
while (/* missing condition */)
{
    int col = heroCol + step;
    String tile = row.substring(col, col + 1);
    if (tile.equals("#"))
    {
        shot = "blocked";
        stoppedAt = col;
    }
    else if (tile.equals("M"))
    {
        shot = "hits";
        stoppedAt = col;
    }
    step++;
}
System.out.println(shot + " " + stoppedAt);`;
const S04 = ARROW(".@.M.#", 1, 4);
const S04_KEY = "step <= reach && stoppedAt == -1";
const S04_B = "step <= reach || stoppedAt == -1";
const S04_C = "step <= reach && stoppedAt != -1";
const S04_D = "step <= reach";
const S06 = ARROW("..@..", 2, 4);
const S06_KEY = "step <= reach && heroCol + step < row.length() && stoppedAt == -1";
const S06_B = "step <= reach && heroCol + step <= row.length() && stoppedAt == -1";
const S06_C = "step <= reach && step < row.length() && stoppedAt == -1";
const S06_D = "step < reach && stoppedAt == -1";

// ---------- n02: the index of a tile ----------
const N02 = `String map = "#M.$.@.#";
int width = 4;
for (int row = 0; row < map.length() / width; row++)
{
    String line = "";
    for (int col = 0; col < width; col++)
    {
        int index = /* missing expression */;
        line = line + map.substring(index, index + 1);
    }
    System.out.println(line);
}`;
const n02 = (piece) => fill(N02, "/* missing expression */", piece);

// ---------- free responses ----------
const QR = "Use only `String` methods from the Java Quick Reference: `length`, `substring`, `indexOf`, `equals`, and `compareTo`.";
const SEG = "Write the code segment as it would appear inside `main`. Do not write any methods, and do not use arrays. " + QR;
const NOTE = "One point for each row. Award a row for what the code actually does; ignore small typing slips that do not change the logic.";
const seg = (decl, sol, out) => ({ run: decl + "\n" + sol, out });

// f1: Scouting the level (Quests 15 to 17)
const F1 = `int rows = map.length() / width;
int most = -1;
int richest = 0;
String hero = "none";
for (int row = 0; row < rows; row++)
{
    int gold = 0;
    for (int col = 0; col < width; col++)
    {
        int index = row * width + col;
        String tile = map.substring(index, index + 1);
        if (tile.equals("$"))
        {
            gold++;
        }
        else if (tile.equals("@"))
        {
            hero = "row " + row + ", column " + col;
        }
    }
    System.out.println("Row " + row + ": " + gold);
    if (gold > most)
    {
        most = gold;
        richest = row;
    }
}
System.out.println("Richest row: " + richest);
System.out.println("Hero: " + hero);`;

// f2: The battle log (Quests 13 and 14)
const F2 = `int swings = 0;
int total = 0;
int streak = 0;
int longest = 0;
String rest = log + " ";
int space = rest.indexOf(" ");
String word = rest.substring(0, space);
rest = rest.substring(space + 1);
while (!word.equals("end"))
{
    swings++;
    if (word.equals("hit"))
    {
        total = total + 2;
        streak++;
    }
    else if (word.equals("crit"))
    {
        total = total + 5;
        streak++;
    }
    else
    {
        streak = 0;
    }
    if (streak > longest)
    {
        longest = streak;
    }
    space = rest.indexOf(" ");
    word = rest.substring(0, space);
    rest = rest.substring(space + 1);
}
double average = 0.0;
if (swings > 0)
{
    average = (double) total / swings;
}
System.out.println("Swings: " + swings);
System.out.println("Damage: " + total);
System.out.println("Average: " + average);
System.out.println("Longest streak: " + longest);`;

export default [
  // ===================== algo (2.9): Quest 13 Battle Report =====================
  { id: "u2c-a01", skill: "algo", type: "mcq", topic: "2.9",
    stem: "A battle log holds the damage of each swing as one digit. Consider the following code segment.",
    code: `String log = "4093005";
int hits = 0;
int total = 0;
int biggest = 0;
for (int i = 0; i < log.length(); i++)
{
    int damage = "0123456789".indexOf(log.substring(i, i + 1));
    if (damage > 0)
    {
        hits++;
    }
    total = total + damage;
    if (damage > biggest)
    {
        biggest = damage;
    }
}
System.out.println(hits + " " + total + " " + biggest);`,
    question: "What is printed?",
    choices: ["4 21 9", "7 21 9", "4 21 5", "4 21 4"], mono: true,
    why: [
      "The damages are 4, 0, 9, 3, 0, 0, and 5. `hits` counts only the swings above 0, `total` adds every swing, and `biggest` is replaced only by a larger damage, so it ends at 9.",
      "This counts every swing as a hit. `hits++` is inside `if (damage > 0)`, so the three swings of 0 are not counted.",
      "5 is the last damage, not the biggest. `biggest` changes only when `damage > biggest`, and 5 is not more than 9.",
      "4 is the first damage. The loop keeps going, and 9 is larger, so `biggest` is replaced.",
    ],
    answer: 0,
    verify: { out: "4 21 9" } },

  { id: "u2c-a02", skill: "algo", type: "mcq", topic: "2.9",
    stem: "Consider the following code segment.",
    code: `String log = "7260";
int total = 0;
for (int i = 0; i < log.length(); i++)
{
    total = total + "0123456789".indexOf(log.substring(i, i + 1));
}
int swings = log.length();
double a = (double) (total / swings);
double b = (double) total / swings;
System.out.println(a + " " + b);`,
    question: "What is printed?",
    choices: ["3.0 3.75", "3.75 3.75", "3 3.75", "3.0 3.0"], mono: true,
    why: [
      "`total` is 15 and `swings` is 4. In `a`, the parentheses come first: `15 / 4` is integer division, 3, and the cast turns 3 into `3.0`. In `b`, the cast comes first, so `15.0 / 4` is `3.75`.",
      "The cast in `a` is applied after `total / swings` is done, and that division is between two `int` values, so the .75 is already gone.",
      "`a` is a `double`, so it prints with a decimal point: `3.0`, not `3`.",
      "In `b` the cast applies to `total` alone, before the division, so the division is done with a `double` and keeps the .75.",
    ],
    answer: 0,
    verify: { out: "3.0 3.75" } },

  { id: "u2c-a03", skill: "algo", type: "mcq", topic: "2.9",
    stem: "The following code segment is intended to print the smallest damage in the log that is not 0.",
    code: `String log = "6038072";
int smallest = 0;
for (int i = 0; i < log.length(); i++)
{
    int damage = "0123456789".indexOf(log.substring(i, i + 1));
    if (damage > 0 && damage < smallest)
    {
        smallest = damage;
    }
}
System.out.println(smallest);`,
    question: "What is printed as a result of executing the code segment?",
    choices: ["0", "2", "6", "8"], mono: true,
    why: [
      "`smallest` starts at 0, and a damage has to be above 0 AND below `smallest` to replace it. No number is both, so `smallest` is never replaced. Starting at 0 only works for a biggest.",
      "2 is the intended answer, but the code never gets there: no damage above 0 is less than 0, the starting value.",
      "6 is the first damage that is not 0. It is never stored, because `6 < 0` is false.",
      "8 is the biggest damage. The test is `damage < smallest`, and it is never true here.",
    ],
    answer: 0,
    verify: { out: "0" } },

  { id: "u2c-a04", skill: "algo", type: "mcq", topic: "2.9",
    stem: "The following code segment is intended to print the smallest damage that is not 0. The damages are 9, 3, 12, 6, 0, and 9, so it should print 3.",
    code: A04,
    question: "Which of the following can replace `/* missing code */` so that the code segment works as intended?",
    choices: ["int smallest = Integer.MAX_VALUE;", "int smallest = 0;", "int smallest = Integer.MIN_VALUE;", "int smallest = 1;"], mono: true,
    why: [
      "Every damage is less than `Integer.MAX_VALUE`, so the first damage above 0 replaces it, and after that only a smaller one does.",
      "No damage is both above 0 and below 0, so 0 is never replaced and 0 is printed.",
      "Nothing is less than `Integer.MIN_VALUE`, so it is never replaced and -2147483648 is printed. That start works for a biggest, not a smallest.",
      "Every damage above 0 is at least 1, so none is less than 1, and 1 is printed.",
    ],
    answer: 0,
    verify: { cases: [
      { run: a04("int smallest = Integer.MAX_VALUE;"), out: "3" },
      { run: a04("int smallest = 0;"), out: "0" },
      { run: a04("int smallest = Integer.MIN_VALUE;"), out: "-2147483648" },
      { run: a04("int smallest = 1;"), out: "1" },
    ] } },

  { id: "u2c-a05", skill: "algo", type: "mcq", topic: "2.9",
    stem: "Consider the following code segment.",
    code: `String log = "3707205";
int biggest = 0;
int bestSwing = 0;
for (int i = 0; i < log.length(); i++)
{
    int damage = "0123456789".indexOf(log.substring(i, i + 1));
    if (damage > biggest)
    {
        biggest = damage;
        bestSwing = i + 1;
    }
}
System.out.println("Swing " + bestSwing + ": " + biggest);`,
    question: "What is printed?",
    choices: ["Swing 2: 7", "Swing 4: 7", "Swing 1: 7", "Swing 7: 5"], mono: true,
    why: [
      "The first 7 is at index 1, which is swing 2. The second 7 is not greater than `biggest`, so `>` keeps the first one.",
      "This is the second 7. It would replace the first only with `>=`. With `>`, a tie does not change `bestSwing`.",
      "This uses the index, 1, as the swing number. The code stores `i + 1`, so swings count from 1.",
      "5 is the last damage. `biggest` and `bestSwing` change only when a damage is larger than the biggest so far.",
    ],
    answer: 0,
    verify: { out: "Swing 2: 7" } },

  { id: "u2c-a06", skill: "algo", type: "output", topic: "2.9",
    stem: "Consider the following code segment.",
    code: `String log = "6047";
int hits = 0;
int total = 0;
for (int i = 0; i < log.length(); i++)
{
    int damage = "0123456789".indexOf(log.substring(i, i + 1));
    if (damage > 0)
    {
        hits++;
    }
    total = total + damage;
}
double average = (double) total / log.length();
System.out.println("Hits: " + hits);
System.out.println("Average: " + average);
if (average >= 6)
{
    System.out.println("Verdict: " + hits + " hits. A legend is born.");
}
else if (average >= 3)
{
    System.out.println("Verdict: " + hits + " hits. A brawl, not a battle.");
}
else
{
    System.out.println("Verdict: " + hits + " hits. Practice more.");
}`,
    question: "What is printed? Type it exactly, one line per line.",
    answer: "Hits: 3\nAverage: 4.25\nVerdict: 3 hits. A brawl, not a battle.",
    why: "The damages are 6, 0, 4, and 7. Three of them are above 0, and the total is 17. The cast comes before the division, so the average is `17.0 / 4`, which is `4.25`. That is not at least 6, but it is at least 3, so the middle branch prints.",
    verify: { out: "Hits: 3\nAverage: 4.25\nVerdict: 3 hits. A brawl, not a battle." } },

  { id: "u2c-a07", skill: "algo", type: "output", topic: "2.9",
    stem: "Consider the following code segment.",
    code: `String log = "508030";
int misses = 0;
int smallest = 10;
for (int i = 0; i < log.length(); i++)
{
    int damage = "0123456789".indexOf(log.substring(i, i + 1));
    if (damage == 0)
    {
        misses++;
    }
    else if (damage < smallest)
    {
        smallest = damage;
    }
}
System.out.println("Misses: " + misses);
System.out.println("Smallest hit: " + smallest);`,
    question: "What is printed? Type it exactly, one line per line.",
    answer: "Misses: 3\nSmallest hit: 3",
    why: "The damages are 5, 0, 8, 0, 3, and 0. Each 0 is counted as a miss and skips the `else if`, so a miss can never become the smallest. `smallest` starts at 10, above any digit, so the first hit, 5, replaces it, and then 3 does.",
    verify: { out: "Misses: 3\nSmallest hit: 3" } },

  // ===================== while (2.7): Quest 14 Mana and Turns =====================
  { id: "u2c-w01", skill: "while", type: "mcq", topic: "2.7",
    stem: "The commands are stored in one String, each followed by a space, and taken off the front one at a time. Consider the following code segment.",
    code: `int mana = 3;
int turns = 0;
int casts = 0;
int refused = 0;
String input = "spark spark spark wait focus spark quit ";
${FIRST}
while (!command.equals("quit"))
{
    boolean usedTurn = false;
    if (command.equals("wait"))
    {
        usedTurn = true;
    }
    else if (command.equals("focus"))
    {
        mana = mana + 2;
        usedTurn = true;
    }
    else if (command.equals("spark"))
    {
        if (mana >= 2)
        {
            mana = mana - 2;
            casts++;
            usedTurn = true;
        }
        else
        {
            refused++;
        }
    }
    if (usedTurn)
    {
        turns++;
        if (turns % 4 == 0)
        {
            mana++;
        }
    }
${ind(NEXT)}
}
System.out.println(turns + " " + casts + " " + refused + " " + mana);`,
    question: "What is printed?",
    choices: ["4 2 2 2", "6 2 2 2", "4 2 2 1", "7 2 2 2"], mono: true,
    why: [
      "The first spark costs 2 and leaves 1 mana, so the next two sparks are refused and are not turns. Then wait, focus (up to 3), and spark (down to 1) are turns 2, 3, and 4, and turn 4 gives 1 mana back.",
      "This counts the two refused sparks as turns. `turns++` runs only when `usedTurn` is true, and a refused spark leaves it false.",
      "This leaves out the mana that comes back. The fourth turn is the last spark, and `4 % 4 == 0` adds 1 after the cast.",
      "This counts every command, `quit` included. `quit` ends the loop before its body runs, and refused sparks are not turns.",
    ],
    answer: 0,
    verify: { out: "4 2 2 2" } },

  { id: "u2c-w02", skill: "while", type: "mcq", topic: "2.7",
    stem: "Consider the following code segment.",
    code: `int turns = 0;
String input = "wait spark quit ";
${FIRST}
while (command != "quit")
{
    turns++;
${ind(NEXT)}
}
System.out.println(turns);`,
    question: "What is the result of executing the code segment?",
    choices: [
      "Nothing is printed. A StringIndexOutOfBoundsException is thrown.",
      "2",
      "3",
      "Nothing is printed, because the loop never ends.",
    ],
    why: [
      "`substring` makes a new String object, and `!=` compares references, so `command != \"quit\"` is true even when `command` holds `quit`. The loop keeps going, `input` is empty, `indexOf(\" \")` returns -1, and `substring(0, -1)` throws.",
      "That is what `!command.equals(\"quit\")` would print. `!=` does not compare the characters.",
      "The loop does count a third pass for `quit`, but then it tries to take another command from an empty String, and the exception stops the program before the `println`.",
      "The loop does not run forever: once `input` is empty, `substring(0, -1)` throws a StringIndexOutOfBoundsException.",
    ],
    answer: 0,
    verify: { throws: "StringIndexOutOfBoundsException" } },

  { id: "u2c-w03", skill: "while", type: "mcq", topic: "2.7",
    stem: "In this version, a refused spark is not a turn, but the check for mana coming back was moved outside the `if` statements. Consider the following code segment.",
    code: `int mana = 2;
int turns = 0;
String input = "spark spark wait spark wait wait spark quit ";
${FIRST}
while (!command.equals("quit"))
{
    if (command.equals("spark"))
    {
        if (mana >= 2)
        {
            mana = mana - 2;
            turns++;
        }
    }
    else
    {
        turns++;
    }
    if (turns % 4 == 0)
    {
        mana++;
    }
${ind(NEXT)}
}
System.out.println(turns + " " + mana);`,
    question: "What is printed?",
    choices: ["4 2", "4 1", "7 1", "4 0"], mono: true,
    why: [
      "Only the first spark is cast; the other three are refused. The fourth turn is the third wait, and mana goes to 1. Then the last spark is refused, `turns` is still 4, and the check `turns % 4 == 0` runs again and adds another 1.",
      "That would be right if mana came back only on a command that used a turn. Here the check runs after every command, so the refused spark that follows turn 4 adds 1 again.",
      "This counts every command as a turn. A refused spark does not run `turns++`.",
      "This leaves out the mana that comes back. When `turns` is 4, `turns % 4 == 0` is true.",
    ],
    answer: 0,
    verify: { out: "4 2" } },

  { id: "u2c-w04", skill: "while", type: "mcq", topic: "2.7",
    stem: "`focus` adds 2 mana, but mana can never go above 6. The following code segment is intended to print 6.",
    code: W04,
    question: "Which of the following can replace `/* missing code */` so that the code segment works as intended?",
    choices: [W04_KEY, W04_B, W04_C, W04_D], mono: true,
    why: [
      "Adding 2 takes mana from 3 to 5, then to 7, and the `if` brings 7 back down to the cap, 6.",
      "With 5 mana, `5 < 6` is true, so 2 more are added and mana ends at 7, over the cap.",
      "With 5 mana, `5 + 2 < 6` is false, so nothing is added and mana stays at 5. The last 1 point that fits is lost.",
      "This undoes the whole gain when it goes over, so 7 goes back to 5 instead of down to 6.",
    ],
    answer: 0,
    verify: { cases: [
      { run: w04(W04_KEY), out: "6" },
      { run: w04(W04_B), out: "7" },
      { run: w04(W04_C), out: "5" },
      { run: w04(W04_D), out: "5" },
    ] } },

  { id: "u2c-w05", skill: "while", type: "mcq", topic: "2.7",
    stem: "This loop stops at `quit` or after 3 turns, whichever comes first. Consider the following code segment.",
    code: `int turns = 0;
String last = "";
String input = "wait spark wait spark wait quit ";
${FIRST}
while (!command.equals("quit") && turns < 3)
{
    turns++;
    last = command;
${ind(NEXT)}
}
System.out.println(turns + " " + last + " " + command);`,
    question: "What is printed?",
    choices: ["3 wait spark", "5 wait quit", "3 wait wait", "4 spark wait"], mono: true,
    why: [
      "After three passes `turns` is 3, so `turns < 3` is false and the loop stops. `last` holds the third command, `wait`, and `command` already holds the next one taken at the end of that pass, `spark`.",
      "This ignores the cap. With `&&`, the loop stops as soon as either part is false.",
      "`command` is not the same as `last`: the last lines of each pass take the next command, so `command` is one ahead.",
      "The test is checked before each pass, and `turns < 3` is false once `turns` is 3, so there is no fourth pass.",
    ],
    answer: 0,
    verify: { out: "3 wait spark" } },

  { id: "u2c-w06", skill: "while", type: "output", topic: "2.7",
    stem: "Consider the following code segment.",
    code: `int mana = 3;
int turns = 0;
String input = "spark wait spark spark quit ";
${FIRST}
while (!command.equals("quit"))
{
    if (command.equals("spark") && mana < 2)
    {
        System.out.println("refused");
    }
    else
    {
        turns++;
        if (command.equals("spark"))
        {
            mana = mana - 2;
        }
        System.out.println("Turn " + turns + ": " + command + " " + mana);
    }
${ind(NEXT)}
}`,
    question: "What is printed? Type it exactly, one line per line.",
    answer: "Turn 1: spark 1\nTurn 2: wait 1\nrefused\nrefused",
    why: "The first spark has 3 mana, so it is cast and leaves 1. `wait` is turn 2 and changes nothing. Both later sparks find only 1 mana, so they print `refused` and `turns` does not go up. `quit` ends the loop without printing.",
    verify: { out: "Turn 1: spark 1\nTurn 2: wait 1\nrefused\nrefused" } },

  { id: "u2c-w07", skill: "while", type: "output", topic: "2.7",
    stem: "Consider the following code segment.",
    code: `int count = 0;
String input = "wait focus quit spark wait ";
${FIRST}
while (!command.equals("quit"))
{
    count++;
${ind(NEXT)}
}
System.out.println(count);
System.out.println("[" + input + "]");`,
    question: "What is printed? Type it exactly, one line per line.",
    answer: "2\n[spark wait ]",
    why: "`wait` and `focus` are counted. Taking `quit` off the front leaves `\"spark wait \"` in `input`, and the loop ends before its body runs again, so the commands after `quit` are never read. The brackets show the space at the end.",
    verify: { out: "2\n[spark wait ]" } },

  // ===================== string (2.10): Quests 15 and 16 =====================
  { id: "u2c-s01", skill: "string", type: "mcq", topic: "2.10",
    stem: "A level with 4 rows of 6 tiles is stored as one String, row after row:\n`######`\n`#..$.#`\n`#.M@.#`\n`######`\n\nConsider the following code segment.",
    code: `String map = "#######..$.##.M@.#######";
int width = 6;
int heroAt = -1;
for (int i = 0; i < map.length(); i++)
{
    if (map.substring(i, i + 1).equals("@"))
    {
        heroAt = i;
    }
}
System.out.println(heroAt / width + " " + heroAt % width);`,
    question: "What is printed?",
    choices: ["2 3", "3 2", "3 4", "0 -1"], mono: true,
    why: [
      "The @ is at index 15. `15 / 6` is 2, the number of whole rows before it, and `15 % 6` is 3, how far into its row it is.",
      "This swaps the row and the column. `/` gives the row and `%` gives the column.",
      "This counts rows and columns from 1. Like String indexes, they count from 0.",
      "That is what `heroAt` equal to -1 prints. The loop finds the @, so `heroAt` is 15.",
    ],
    answer: 0,
    verify: { out: "2 3" } },

  { id: "u2c-s02", skill: "string", type: "mcq", topic: "2.10",
    stem: "Consider the following code segment.",
    code: `String map = "$#M.$";
int gold = 0;
for (int i = 0; i < map.length(); i++)
{
    String tile = map.substring(i);
    if (tile.equals("$"))
    {
        gold++;
    }
}
System.out.println(gold);`,
    question: "What is printed?",
    choices: ["1", "2", "0", "Nothing is printed. A StringIndexOutOfBoundsException is thrown."],
    why: [
      "`substring(i)` with one argument is everything from index i to the end, not one tile. Only the last piece, `\"$\"`, equals `\"$\"`, so `gold` is 1. One tile is `substring(i, i + 1)`.",
      "There are two $ tiles, but the code does not look at one tile at a time. At index 0 the piece is `\"$#M.$\"`, which is not equal to `\"$\"`.",
      "At index 4 the piece is everything from index 4 to the end, which is exactly `\"$\"`.",
      "`substring(i)` is allowed for every index up to `length()`, so nothing runs past the end.",
    ],
    answer: 0,
    verify: { out: "1" } },

  { id: "u2c-s03", skill: "string", type: "mcq", topic: "2.10",
    stem: "An arrow flies right from the hero along one row of the level. Consider the following code segment.",
    code: `String row = "@..M.#..";
int heroCol = 0;
int reach = 6;
String shot = "falls short";
int stoppedAt = -1;
int step = 1;
while (step <= reach && stoppedAt == -1)
{
    int col = heroCol + step;
    String tile = row.substring(col, col + 1);
    if (tile.equals("#"))
    {
        shot = "blocked";
        stoppedAt = col;
    }
    else if (tile.equals("M"))
    {
        shot = "hits";
        stoppedAt = col;
    }
    step++;
}
System.out.println(shot + " " + stoppedAt + " " + step);`,
    question: "What is printed?",
    choices: ["hits 3 4", "blocked 5 6", "hits 3 3", "falls short -1 7"], mono: true,
    why: [
      "Columns 1 and 2 are empty, and column 3 is an M, so `stoppedAt` becomes 3. `step++` still runs at the end of that pass, so `step` is 4. Then `stoppedAt == -1` is false and the loop stops.",
      "This keeps flying after the M. Once `stoppedAt` is set, `stoppedAt == -1` is false and the loop ends.",
      "`step++` is the last statement of the body, so it runs on the pass that hits the M too.",
      "The arrow meets the M before it runs out of reach. `stoppedAt` changes from -1 on that pass.",
    ],
    answer: 0,
    verify: { out: "hits 3 4" } },

  { id: "u2c-s04", skill: "string", type: "mcq", topic: "2.10",
    stem: "The arrow should stop at the first `#` or `M` it meets, or after `reach` steps, whichever comes first. For the row below the code segment should print `hits 3`.",
    code: S04,
    question: "Which of the following can replace `/* missing condition */` so that the code segment works as intended?",
    choices: [S04_KEY, S04_B, S04_C, S04_D], mono: true,
    why: [
      "The loop needs both reasons to keep going: steps are left AND nothing has been met. At the M in column 3, `stoppedAt == -1` becomes false and the loop ends.",
      "With `||`, one reason to keep going is enough, so the arrow flies past the M while steps are left and stops at the `#` in column 5. It prints `blocked 5`.",
      "`stoppedAt != -1` is false at the start, so the body never runs and it prints `falls short -1`.",
      "With no check on `stoppedAt`, the arrow does not stop at the M and goes on to the `#` in column 5. It prints `blocked 5`.",
    ],
    answer: 0,
    verify: { cases: [
      { run: fill(S04, "/* missing condition */", S04_KEY), out: "hits 3" },
      { run: fill(S04, "/* missing condition */", S04_B), out: "blocked 5" },
      { run: fill(S04, "/* missing condition */", S04_C), out: "falls short -1" },
      { run: fill(S04, "/* missing condition */", S04_D), out: "blocked 5" },
    ] } },

  { id: "u2c-s05", skill: "string", type: "mcq", topic: "2.10",
    stem: "Consider the following code segment.",
    code: fill(ARROW("..@..", 2, 4), "/* missing condition */", "step <= reach && stoppedAt == -1"),
    question: "What is the result of executing the code segment?",
    choices: [
      "Nothing is printed. A StringIndexOutOfBoundsException is thrown.",
      "falls short -1",
      "blocked 5",
      "Nothing is printed, because the loop never ends.",
    ],
    why: [
      "The row has 5 tiles, columns 0 to 4. Columns 3 and 4 are empty, so the loop goes on to step 3, column 5, and `row.substring(5, 6)` runs past the end.",
      "That is the intended result, but nothing in the condition checks the end of the row. The reach, 4, is longer than the 2 tiles to the right of the hero.",
      "Running off the end of the row is not a wall. `substring` throws before any `if` is tested.",
      "`step` goes up on every pass, so `step <= reach` would end the loop; the exception ends it first.",
    ],
    answer: 0,
    verify: { throws: "StringIndexOutOfBoundsException" } },

  { id: "u2c-s06", skill: "string", type: "mcq", topic: "2.10",
    stem: "The arrow should also stop at the end of the row. For the row below the code segment should print `falls short -1`.",
    code: S06,
    question: "Which of the following can replace `/* missing condition */` so that the code segment works as intended?",
    choices: [S06_KEY, S06_B, S06_C, S06_D], mono: true,
    why: [
      "The arrow is at column `heroCol + step`, and the last column is `row.length() - 1`, so `heroCol + step < row.length()` keeps every `substring(col, col + 1)` inside the row.",
      "With `<=`, column 5 is allowed in a row of length 5, and `substring(5, 6)` throws a StringIndexOutOfBoundsException.",
      "`step` is how far the arrow has gone, not its column. The hero starts at column 2, so step 3 is column 5, past the end, and a StringIndexOutOfBoundsException is thrown.",
      "This only shortens the reach to 3 steps, and step 3 is column 5, past the end. A StringIndexOutOfBoundsException is thrown.",
    ],
    answer: 0,
    verify: { cases: [
      { run: fill(S06, "/* missing condition */", S06_KEY), out: "falls short -1" },
      { run: fill(S06, "/* missing condition */", S06_B), throws: "StringIndexOutOfBoundsException" },
      { run: fill(S06, "/* missing condition */", S06_C), throws: "StringIndexOutOfBoundsException" },
      { run: fill(S06, "/* missing condition */", S06_D), throws: "StringIndexOutOfBoundsException" },
    ] } },

  { id: "u2c-s07", skill: "string", type: "output", topic: "2.10",
    stem: "Consider the following code segment.",
    code: `String map = "#$.M.$#.";
int width = 4;
int gold = 0;
int heroAt = -1;
for (int i = 0; i < map.length(); i++)
{
    String tile = map.substring(i, i + 1);
    if (tile.equals("$"))
    {
        gold++;
    }
    else if (tile.equals("@"))
    {
        heroAt = i;
    }
}
System.out.println("Gold: " + gold);
System.out.println("Hero row: " + heroAt / width);
System.out.println("Hero col: " + heroAt % width);`,
    question: "What is printed? Type it exactly, one line per line.",
    answer: "Gold: 2\nHero row: 0\nHero col: -1",
    why: "There are two $ tiles and no @, so `heroAt` stays -1. Integer division drops the fraction toward 0, so `-1 / 4` is 0, and `-1 % 4` is -1. A level with no hero still prints a row and a column, which is why -1 needs its own check.",
    verify: { out: "Gold: 2\nHero row: 0\nHero col: -1" } },

  { id: "u2c-s08", skill: "string", type: "output", topic: "2.10",
    stem: "Consider the following code segment.",
    code: `String map = "#.$@M.$M.$##";
int width = 4;
int gold = 0;
int monsters = 0;
int heroAt = -1;
for (int i = 0; i < map.length(); i++)
{
    String tile = map.substring(i, i + 1);
    if (tile.equals("$"))
    {
        gold++;
    }
    else if (tile.equals("M"))
    {
        monsters++;
    }
    else if (tile.equals("@"))
    {
        heroAt = i;
    }
}
System.out.println("Gold: " + gold);
System.out.println("Monsters: " + monsters);
System.out.println("Hero row: " + heroAt / width);
System.out.println("Hero col: " + heroAt % width);`,
    question: "What is printed? Type it exactly, one line per line.",
    answer: "Gold: 3\nMonsters: 2\nHero row: 0\nHero col: 3",
    why: "The $ tiles are at indexes 2, 6, and 9, and the M tiles at 4 and 7. The @ is at index 3: `3 / 4` is 0 and `3 % 4` is 3, so the hero is in the first row, at the last column.",
    verify: { out: "Gold: 3\nMonsters: 2\nHero row: 0\nHero col: 3" } },

  // ===================== nested (2.11): Quest 17 Draw the Map =====================
  { id: "u2c-n01", skill: "nested", type: "mcq", topic: "2.11",
    stem: "Consider the following code segment.",
    code: `String map = "#$..@MM.#";
int width = 3;
int rows = map.length() / width;
for (int row = 0; row < rows; row++)
{
    System.out.print("Drawn:");
    for (int col = 0; col < width; col++)
    {
        int index = row * width + col;
        System.out.print(" " + map.substring(index, index + 1));
    }
    System.out.println();
}`,
    question: "What is printed?",
    choices: [
      "Drawn: # $ .\nDrawn: . @ M\nDrawn: M . #",
      "Drawn: # . M\nDrawn: $ @ .\nDrawn: . M #",
      "Drawn: # $ .\nDrawn: $ . .\nDrawn: . . @",
      "Drawn: # $ .Drawn: . @ MDrawn: M . #",
    ], mono: true,
    why: [
      "Row `row` starts at index `row * width`, so the rows start at 0, 3, and 6. The inner loop prints the 3 tiles of one row, and `println()` ends the line after each row.",
      "This prints the columns as lines. That is what swapping the two loops would do; here the outer loop goes through the rows.",
      "This uses `row + col` as the index. Each row starts `width` characters after the one before, so the index is `row * width + col`.",
      "`System.out.println()` runs after the inner loop on every pass of the outer loop, so each row is on its own line.",
    ],
    answer: 0,
    verify: { out: "Drawn: # $ .\nDrawn: . @ M\nDrawn: M . #" } },

  { id: "u2c-n02", skill: "nested", type: "mcq", topic: "2.11",
    stem: "A level with 2 rows of 4 tiles is stored as one String. The following code segment is intended to print it row by row:\n`#M.$`\n`.@.#`",
    code: N02,
    question: "Which of the following can replace `/* missing expression */` so that the code segment works as intended?",
    choices: ["row * width + col", "col * width + row", "row + col", "row * (width - 1) + col"], mono: true,
    why: [
      "Each row starts `width` characters after the one before, so row `row` starts at `row * width`, and `col` counts into that row.",
      "This multiplies the wrong one. For row 0, column 2 it gives index 8, past the end of the 8 tiles, and a StringIndexOutOfBoundsException is thrown.",
      "This starts row 1 at index 1, only one character after row 0, so the second line prints `M.$.`.",
      "This starts row 1 at index 3, so the rows overlap and the second line prints `$.@.`.",
    ],
    answer: 0,
    verify: { cases: [
      { run: n02("row * width + col"), out: "#M.$\n.@.#" },
      { run: n02("col * width + row"), throws: "StringIndexOutOfBoundsException" },
      { run: n02("row + col"), out: "#M.$\nM.$." },
      { run: n02("row * (width - 1) + col"), out: "#M.$\n$.@." },
    ] } },

  { id: "u2c-n03", skill: "nested", type: "mcq", topic: "2.11",
    stem: "The level below has 22 tiles, which is not a whole number of rows of 5. Consider the following code segment.",
    code: `String map = "#...##.M.##$@.######..";
int width = 5;
int drawn = 0;
for (int row = 0; row < map.length() / width; row++)
{
    for (int col = 0; col < width; col++)
    {
        drawn++;
    }
}
System.out.println(drawn);`,
    question: "What is printed?",
    choices: ["20", "22", "25", "9"], mono: true,
    why: [
      "`22 / 5` is integer division, 4, so the outer loop runs 4 times and the inner loop runs 5 times on each pass. The last 2 tiles are never reached.",
      "That is every tile. The number of rows is `22 / 5`, which drops the fraction, so the 2 extra tiles are left out.",
      "This rounds the rows up to 5. Integer division drops the fraction.",
      "This adds the passes of the two loops. The inner loop runs all 5 times on each of the 4 outer passes, so multiply.",
    ],
    answer: 0,
    verify: { out: "20" } },

  { id: "u2c-n04", skill: "nested", type: "mcq", topic: "2.11",
    stem: "In this version the two loops are swapped: columns outside, rows inside. Consider the following code segment.",
    code: `String map = "#M$.@.";
int width = 3;
int rows = map.length() / width;
for (int col = 0; col < width; col++)
{
    String line = "";
    for (int row = 0; row < rows; row++)
    {
        int index = row * width + col;
        line = line + map.substring(index, index + 1);
    }
    System.out.println(line);
}`,
    question: "What is printed?",
    choices: [
      "#.\nM@\n$.",
      "#M$\n.@.",
      "#M\n$.\n@.",
      "Nothing is printed. A StringIndexOutOfBoundsException is thrown.",
    ], mono: true,
    why: [
      "The map is the 2 rows `#M$` and `.@.`. Each line now holds one column, read from the top row down, so the map comes out turned on its side.",
      "That is the map drawn row by row. With the column loop outside, each `println` ends a column, not a row.",
      "This cuts the String into pieces of 2 in order. The index `row * width + col` still finds the tile at that row and column.",
      "`row * width + col` is at most `1 * 3 + 2`, which is 5, the last index, so nothing runs past the end.",
    ],
    answer: 0,
    verify: { out: "#.\nM@\n$." } },

  { id: "u2c-n05", skill: "nested", type: "mcq", topic: "2.11",
    stem: "Consider the following code segment.",
    code: `String map = "M..M..M.MM.M....";
int width = 4;
int bestRow = -1;
int most = 0;
for (int row = 0; row < map.length() / width; row++)
{
    int count = 0;
    for (int col = 0; col < width; col++)
    {
        int index = row * width + col;
        if (map.substring(index, index + 1).equals("M"))
        {
            count++;
        }
    }
    if (count > most)
    {
        most = count;
        bestRow = row;
    }
}
System.out.println(bestRow + " " + most);`,
    question: "What is printed?",
    choices: ["2 3", "2 6", "3 3", "0 2"], mono: true,
    why: [
      "The rows are `M..M`, `..M.`, `MM.M`, and `....`, with 2, 1, 3, and 0 monsters. `count` starts at 0 for each row, and row 2 has the most.",
      "This keeps adding to one count across the rows. `int count = 0;` is inside the outer loop, so each row starts over.",
      "This counts rows from 1. `row` starts at 0.",
      "Row 0 has 2 monsters, but row 2 has 3, and `count > most` replaces the best when a later row has more.",
    ],
    answer: 0,
    verify: { out: "2 3" } },

  { id: "u2c-n06", skill: "nested", type: "output", topic: "2.11",
    stem: "Consider the following code segment.",
    code: `String map = "#.M.$@";
int width = 3;
for (int row = 0; row < map.length() / width; row++)
{
    String art = "";
    for (int col = 0; col < width; col++)
    {
        String tile = map.substring(row * width + col, row * width + col + 1);
        if (tile.equals("#"))
        {
            art = art + "%";
        }
        else if (tile.equals("."))
        {
            art = art + ",";
        }
        else if (tile.equals("M"))
        {
            art = art + "&";
        }
        else if (tile.equals("$"))
        {
            art = art + "o";
        }
        else
        {
            art = art + tile;
        }
    }
    System.out.println("Art: " + art);
}`,
    question: "What is printed? Type it exactly, one line per line.",
    answer: "Art: %,&\nArt: ,o@",
    why: "The rows are `#.M` and `.$@`. Each tile is swapped for its drawing character, and the @ matches none of the tests, so the `else` keeps it. `art` starts empty for each row, and each row is printed after its inner loop.",
    verify: { out: "Art: %,&\nArt: ,o@" } },

  { id: "u2c-n07", skill: "nested", type: "output", topic: "2.11",
    stem: "Consider the following code segment.",
    code: `String map = "#..##M.#M..M";
int width = 4;
int rows = map.length() / width;
System.out.println("Size: " + rows + " by " + width);
for (int row = 0; row < rows; row++)
{
    for (int col = 0; col < width; col++)
    {
        int index = row * width + col;
        if (map.substring(index, index + 1).equals("M"))
        {
            System.out.println("M at " + row + "," + col);
        }
    }
}`,
    question: "What is printed? Type it exactly, one line per line.",
    answer: "Size: 3 by 4\nM at 1,1\nM at 2,0\nM at 2,3",
    why: "12 tiles in rows of 4 make 3 rows: `#..#`, `#M.#`, and `M..M`. The loops visit the tiles row by row, left to right, and print the row and column of each M in that order.",
    verify: { out: "Size: 3 by 4\nM at 1,1\nM at 2,0\nM at 2,3" } },

  // ===================== frq =====================
  { id: "u2c-f1", skill: "frq", type: "code", topic: "2.11", title: "Scouting the level",
    prompt: "A level is stored as one `String`, row after row, one character for each tile: `#` is a wall, `.` is floor, `$` is gold, `M` is a monster, and `@` is the hero. The variables `map` and `width` have already been declared. `width` is a positive `int`, and `map.length()` is a multiple of `width`, so every row is complete. `map` holds at most one `@`.\n\nWrite a code segment that prints:\n\n- for each row, in order, `Row `, the row number, `: `, and the number of `$` tiles in that row. Rows are numbered from 0.\n- `Richest row: ` followed by the number of the row with the most gold. If two or more rows tie, use the one that comes first.\n- `Hero: row ` followed by the hero's row, `, column `, and the hero's column, also numbered from 0. If there is no `@`, print `Hero: none`.\n\nFor example, if `width` is 4 and `map` is `\"#$.#$@$#.$..\"`, the level is\n`#$.#`\n`$@$#`\n`.$..`\nand the code segment prints `Row 0: 1`, `Row 1: 2`, `Row 2: 1`, `Richest row: 1`, then `Hero: row 1, column 1`.\n\n" + SEG,
    sample: "width = 4, map = \"#$.#$@$#.$..\" prints\nRow 0: 1\nRow 1: 2\nRow 2: 1\nRichest row: 1\nHero: row 1, column 1\n\nwidth = 3, map = \"#.#.M.\" prints\nRow 0: 0\nRow 1: 0\nRichest row: 0\nHero: none",
    rows: [
      { name: "Finds the number of rows", earns: "Computes the number of rows as `map.length() / width` (or stops a row loop at the end of `map`), so every row is visited once." },
      { name: "Visits every tile, row by row", earns: "Uses a loop over the rows with a loop over the columns inside it (or one loop over every index), visiting every tile once without going past the end of `map`." },
      { name: "Gets one tile at a row and column", earns: "Gets one tile with `substring(index, index + 1)` at the index `row * width + col` (or, in one loop, finds the row with `index / width` and the column with `index % width`), and compares it with `equals`, never `==`." },
      { name: "Counts the gold in each row", earns: "Starts a count at 0 for each row and adds 1 for each `$` in that row only." },
      { name: "Prints a line for each row", earns: "Prints `Row r: n` once for each row, in order, after that row's tiles are counted." },
      { name: "Keeps the richest row", earns: "Keeps the most gold seen and its row number, replaces them only for a strictly larger count (`>`, not `>=`), so a tie keeps the first row, and gives row 0 when no row has gold." },
      { name: "Reports the hero", earns: "Prints the hero's row and column, both from 0, in the given format, or `Hero: none` when `map` has no `@`, once, after the loops." },
    ],
    notes: NOTE + " Row 6 is not earned with `>=`, because a tie then keeps the last row. Row 6 is also not earned when the best starts in a way that leaves no row chosen for a level with no gold. Row 7 is not earned when a missing `@` prints a row and column such as `0` and `-1`. A response that prints the row lines inside the inner loop does not earn row 5.",
    solution: F1,
    verify: { cases: [
      seg('String map = "#$.#$@$#.$..";\nint width = 4;', F1, "Row 0: 1\nRow 1: 2\nRow 2: 1\nRichest row: 1\nHero: row 1, column 1"),
      seg('String map = "#.#.M.";\nint width = 3;', F1, "Row 0: 0\nRow 1: 0\nRichest row: 0\nHero: none"),
      seg('String map = "$$.@$$";\nint width = 2;', F1, "Row 0: 2\nRow 1: 0\nRow 2: 2\nRichest row: 0\nHero: row 1, column 1"),
      seg('String map = "..@$$";\nint width = 5;', F1, "Row 0: 2\nRichest row: 0\nHero: row 0, column 2"),
      seg('String map = "M.$$$.@";\nint width = 1;', F1, "Row 0: 0\nRow 1: 0\nRow 2: 1\nRow 3: 1\nRow 4: 1\nRow 5: 0\nRow 6: 0\nRichest row: 2\nHero: row 6, column 0"),
      seg('String map = "$$.@$$";\nint width = 2;', F1.replace("gold > most", "gold >= most"), "Row 0: 2\nRow 1: 0\nRow 2: 2\nRichest row: 2\nHero: row 1, column 1"),
    ] } },

  { id: "u2c-f2", skill: "frq", type: "code", topic: "2.7", title: "The battle log",
    prompt: "The variable `log` has already been declared. It holds the results of a hero's swings as words separated by single spaces, and it always contains the word `end`. Each word before `end` is `hit` (2 damage), `crit` (5 damage), or `miss` (0 damage). Any words after `end` are ignored. There is no space at the start or the end of `log`.\n\nWrite a code segment that takes the words one at a time until it reaches `end` and then prints four lines:\n\n- `Swings: ` followed by the number of words before `end`\n- `Damage: ` followed by the total damage\n- `Average: ` followed by the average damage per swing as a `double`, with its fraction kept. If there are no swings, print `Average: 0.0`.\n- `Longest streak: ` followed by the most swings in a row that were not misses\n\nFor example, if `log` is `\"hit crit miss hit hit end\"`, the code segment prints `Swings: 5`, `Damage: 11`, `Average: 2.2`, then `Longest streak: 2`. If `log` is `\"crit miss end hit\"`, it prints `Swings: 2`, `Damage: 5`, `Average: 2.5`, then `Longest streak: 1`.\n\nUse a `while` loop that stops at `end`. " + SEG,
    sample: "log = \"hit crit miss hit hit end\" prints\nSwings: 5\nDamage: 11\nAverage: 2.2\nLongest streak: 2\n\nlog = \"crit miss end hit\" prints\nSwings: 2\nDamage: 5\nAverage: 2.5\nLongest streak: 1\n\nlog = \"end\" prints\nSwings: 0\nDamage: 0\nAverage: 0.0\nLongest streak: 0",
    rows: [
      { name: "Takes the words one at a time", earns: "Takes each word off `log` in order with `indexOf(\" \")` and `substring`, including a last word with no space after it, without a `StringIndexOutOfBoundsException`." },
      { name: "Stops at end", earns: "Uses a `while` loop that stops when the word is `end`, compared with `equals` (`!word.equals(\"end\")`), never `!=`, and does not count or score `end` or anything after it." },
      { name: "Counts the swings", earns: "Adds 1 for each word before `end`, misses included." },
      { name: "Totals the damage", earns: "Adds 2 for each `hit`, 5 for each `crit`, and nothing for a `miss`." },
      { name: "Computes the average", earns: "Divides as a `double` with the cast before the division (`(double) total / swings`, not `(double) (total / swings)`), and prints `0.0` without dividing when there are no swings." },
      { name: "Finds the longest streak", earns: "Adds 1 to a streak for each hit or crit, starts it at 0 again on a miss, and keeps the largest streak seen, the last one included." },
      { name: "Prints the four results", earns: "Prints the four labeled lines once, after the loop, using the values the code computed." },
    ],
    notes: NOTE + " A response may add a space to the end of a copy of `log`, or handle the last word when `indexOf(\" \")` returns -1; either earns row 1. A response that uses `!=` to test for `end` does not earn row 2. Row 5 is not earned with `(double) (total / swings)`, which prints `2.0` for the first example, or when `\"end\"` causes an `ArithmeticException` or prints `NaN`. Row 6 is not earned when the largest is checked only on a miss, so a streak at the end of the log is lost.",
    solution: F2,
    verify: { cases: [
      seg('String log = "hit crit miss hit hit end";', F2, "Swings: 5\nDamage: 11\nAverage: 2.2\nLongest streak: 2"),
      seg('String log = "crit miss end hit";', F2, "Swings: 2\nDamage: 5\nAverage: 2.5\nLongest streak: 1"),
      seg('String log = "end";', F2, "Swings: 0\nDamage: 0\nAverage: 0.0\nLongest streak: 0"),
      seg('String log = "miss miss end crit crit";', F2, "Swings: 2\nDamage: 0\nAverage: 0.0\nLongest streak: 0"),
      seg('String log = "hit hit hit miss crit end";', F2, "Swings: 5\nDamage: 11\nAverage: 2.2\nLongest streak: 3"),
      seg('String log = "crit hit end";', F2, "Swings: 2\nDamage: 7\nAverage: 3.5\nLongest streak: 2"),
      seg('String log = "hit crit miss hit hit end";', F2.replace("(double) total / swings", "(double) (total / swings)"), "Swings: 5\nDamage: 11\nAverage: 2.0\nLongest streak: 2"),
    ] } },
];

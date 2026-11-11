// AP CSP · spring review · Big Idea 3: Algorithms and Programming (AP pseudocode, exam reference sheet notation).
// Every code segment was run by an AP pseudocode interpreter (indexes from 1, an index out of range ends the program).
// In a multiple-choice item the right choice is always written first; the site shuffles them.

const ROBOT = "In the grid, . is an open square, # is a blocked square, and G is the goal square. The robot is drawn as ^, >, v, or <, pointing the way it faces. Rows are numbered from the top and columns from the left. If the robot is told to move onto a blocked square or off the grid, it stays where it is and the program ends.";

export default {
  items: [
    // ================================================================ pc-vars
    {
      id: "bi3-01", skill: "pc-vars", type: "mcq", difficulty: "easy", opens: "2027-04-05",
      stem: "Consider the following code segment.",
      code: `a ← 4
b ← a + 3
a ← b * 2
b ← a - b
DISPLAY(a)
DISPLAY(b)`,
      question: "What is displayed?",
      choices: ["14 7", "8 1", "4 7", "14 21"],
      why: [
        "b becomes 7, then a becomes 7 * 2, which is 14. Then b becomes 14 minus 7, which is 7.",
        "This doubles the old a (4 * 2 is 8). The third line multiplies b, which is 7, so a becomes 14.",
        "The third line changes a. After a ← b * 2, a holds 14, not its first value of 4.",
        "21 is 14 plus 7. The last assignment subtracts: b becomes a minus b, which is 14 minus 7.",
      ],
      answer: 0,
    },
    {
      id: "bi3-02", skill: "pc-vars", type: "mcq", difficulty: "easy", opens: "2027-04-05",
      stem: "In the dungeon crawler, every 6 coins buy one potion, and the coins left over stay in the player's purse. A player has 47 coins.",
      code: `coins ← 47
left ← coins MOD 6`,
      question: "What value does left hold?",
      choices: ["5", "7", "42", "7.8"],
      why: [
        "47 divided by 6 is 7 with a remainder of 5, and MOD gives the remainder.",
        "7 is the number of potions, the whole-number quotient. MOD gives the remainder, 5.",
        "42 is the 7 times 6 coins spent on potions. MOD gives what is left after them, 5.",
        "7.8 is about 47 / 6, a division. MOD gives the whole-number remainder, 5.",
      ],
      answer: 0,
    },
    {
      id: "bi3-03", skill: "pc-vars", type: "mcq", difficulty: "moderate", opens: "2027-04-05",
      stem: "A programmer tries to swap the values of two variables.",
      code: `first ← "ruby"
second ← "dagger"
first ← second
second ← first
DISPLAY(first)
DISPLAY(second)`,
      question: "What is displayed?",
      choices: ["dagger dagger", "dagger ruby", "ruby ruby", "ruby dagger"],
      why: [
        "first ← second copies \"dagger\" into first, so \"ruby\" is gone. Then second ← first copies \"dagger\" back into second.",
        "This is the swap the programmer wanted. Once first gets \"dagger\", no variable holds \"ruby\" anymore.",
        "The third line runs first, so first becomes \"dagger\" before anything is copied into second.",
        "These are the starting values. The third and fourth lines both change a variable.",
      ],
      answer: 0,
    },
    {
      id: "bi3-04", skill: "pc-vars", type: "mcq", difficulty: "difficult", opens: "2027-04-05",
      stem: "x and y hold numbers. Each segment below is meant to swap the values of x and y.",
      code: `Segment I
temp ← x
x ← y
y ← temp

Segment II
x ← y
y ← x

Segment III
x ← x + y
y ← x - y
x ← x - y`,
      question: "Which segments swap x and y for all numbers?",
      choices: ["I and III only", "I only", "I and II only", "I, II, and III"],
      why: [
        "I saves x in temp before it is lost. III works too: with x = 2 and y = 5, x becomes 7, y becomes 7 minus 5 = 2, and x becomes 7 minus 2 = 5.",
        "III also swaps. It stores the sum in x, and each subtraction then recovers one of the old values.",
        "II loses the old x on its first line, so both variables end up with the old y.",
        "II fails: after x ← y, both variables hold the old y, and y ← x copies that same value.",
      ],
      answer: 0,
    },
    {
      id: "bi3-05", skill: "pc-vars", type: "mcq", difficulty: "moderate", opens: "2027-04-05",
      stem: "Consider the following code segment.",
      code: `n ← 2753
ones ← n MOD 10
n ← (n - ones) / 10
tens ← n MOD 10
DISPLAY(tens + ones)`,
      question: "What is displayed?",
      choices: ["8", "53", "10", "5"],
      why: [
        "ones is 3. n becomes (2753 minus 3) / 10, which is 275, so tens is 5. The sum 5 + 3 is 8.",
        "tens and ones are numbers, so + adds them. It does not join the digits 5 and 3.",
        "10 is 7 + 3. After the division n is 275, and 275 MOD 10 is 5, not 7.",
        "5 is tens alone. The DISPLAY adds ones, which is 3.",
      ],
      answer: 0,
    },
    {
      id: "bi3-06", skill: "pc-vars", type: "mcq", difficulty: "difficult", opens: "2027-04-05",
      stem: "In AP pseudocode, MOD has the same precedence as * and /, and these are evaluated before + and from left to right.",
      code: `result ← 17 + 9 MOD 3 * 4
DISPLAY(result)`,
      question: "What is displayed?",
      choices: ["17", "26", "8", "29"],
      why: [
        "9 MOD 3 is 0 and 0 * 4 is 0, so result is 17 + 0, which is 17.",
        "26 is 17 + 9, from doing 3 * 4 first. MOD and * go left to right, so 9 MOD 3 is done first.",
        "8 comes from doing 17 + 9 first. Addition comes after MOD and *.",
        "29 treats MOD as division: 9 / 3 * 4 is 12. MOD gives the remainder, which is 0.",
      ],
      answer: 0,
    },
    {
      id: "bi3-07", skill: "pc-vars", type: "mcq", difficulty: "moderate", opens: "2027-04-05",
      stem: "In the dungeon crawler, a hero takes damage and then gains armor bonus health.",
      code: `health ← 30
health ← health - 12
armor ← health MOD 4
health ← health + armor * 2
DISPLAY(health)`,
      question: "What is displayed?",
      choices: ["22", "40", "18", "20"],
      why: [
        "health is 18, and 18 MOD 4 is 2. Then health is 18 + 2 * 2, which is 22.",
        "40 adds before multiplying. * comes first, so 18 + 4 is 22.",
        "18 is health before the last line, which adds armor * 2 to it.",
        "20 adds armor once. The last line adds armor * 2, which is 4.",
      ],
      answer: 0,
    },
    {
      id: "bi3-08", skill: "pc-vars", type: "mcq", difficulty: "easy", opens: "2027-04-05",
      stem: "Consider the following code segment.",
      code: `x ← 5
y ← x
x ← x + 1`,
      question: "Which is true after the code runs?",
      choices: ["x is 6 and y is 5", "x is 6 and y is 6", "x is 5 and y is 5", "x is 5 and y is 6"],
      why: [
        "y ← x copies the value 5 into y. Changing x later does not change y.",
        "y got a copy of 5. It is not linked to x, so it stays 5 when x changes.",
        "The third line adds 1 to x, so x is 6.",
        "Only x is changed by the third line. y keeps the 5 it was given.",
      ],
      answer: 0,
    },
    // ================================================================ pc-cond
    {
      id: "bi3-09", skill: "pc-cond", type: "mcq", difficulty: "easy", opens: "2027-04-06",
      stem: "The variable a holds 7 and the variable b holds 12.",
      question: "Which expression evaluates to true?",
      choices: ["(a < b) AND (b MOD 2 = 0)", "(a > b) OR (a = 12)", "NOT (a < b) OR (b = 7)", "(a + b > 20) AND (b < 15)"],
      why: [
        "7 < 12 is true and 12 MOD 2 is 0, so both sides are true and AND gives true.",
        "7 > 12 is false and 7 = 12 is false. OR needs at least one true side.",
        "a < b is true, so NOT makes it false, and b = 7 is false. Both sides are false.",
        "a + b is 19, which is not greater than 20. AND needs both sides true.",
      ],
      answer: 0,
    },
    {
      id: "bi3-10", skill: "pc-cond", type: "mcq", difficulty: "moderate", opens: "2027-04-06",
      stem: "Consider the following code segment.",
      code: `x ← 14
IF (x > 10)
{
  x ← x - 10
}
IF (x < 10)
{
  x ← x * 3
}
DISPLAY(x)`,
      question: "What is displayed?",
      choices: ["12", "4", "42", "14"],
      why: [
        "14 > 10, so x becomes 4. The second IF is separate, and 4 < 10, so x becomes 12.",
        "The second IF is not an ELSE. It still runs its test, and 4 < 10 is true.",
        "The second test uses the new x, 4. It does not go back to 14.",
        "14 > 10 is true, so the first IF changes x to 4.",
      ],
      answer: 0,
    },
    {
      id: "bi3-11", skill: "pc-cond", type: "mcq", difficulty: "moderate", opens: "2027-04-06",
      stem: "a and b hold numbers.",
      code: `NOT (a > 5 AND b < 3)`,
      question: "Which expression always has the same value as the one shown?",
      choices: ["a ≤ 5 OR b ≥ 3", "a ≤ 5 AND b ≥ 3", "a < 5 OR b > 3", "a > 5 OR b < 3"],
      why: [
        "NOT flips each comparison and changes AND to OR. The original is true unless both a > 5 and b < 3.",
        "AND is wrong here. With a = 2 and b = 1, the original is true but this is false.",
        "The opposite of a > 5 is a ≤ 5. With a = 5 and b = 1, the original is true but this is false.",
        "This keeps both comparisons the same. With a = 9 and b = 1, the original is false but this is true.",
      ],
      answer: 0,
    },
    {
      id: "bi3-12", skill: "pc-cond", type: "mcq", difficulty: "moderate", opens: "2027-04-06",
      stem: "In the dungeon crawler, the boss door opens when the player has the key or at least 50 coins, but never when the player's health is 0. The variable hasKey holds true or false.",
      question: "Which expression is true exactly when the door opens?",
      choices: ["(hasKey OR coins ≥ 50) AND health > 0", "hasKey OR (coins ≥ 50 AND health > 0)", "(hasKey AND coins ≥ 50) AND health > 0", "(hasKey OR coins ≥ 50) OR health > 0"],
      why: [
        "The parentheses make either way in count, and AND health > 0 then blocks the door at 0 health.",
        "A player with the key and 0 health makes this true, since the health test is only joined to coins.",
        "This needs both the key and 50 coins. Either one is enough.",
        "With OR at the end, any player with health above 0 opens the door, key or not.",
      ],
      answer: 0,
    },
    {
      id: "bi3-13", skill: "pc-cond", type: "mcq", difficulty: "difficult", opens: "2027-04-06",
      stem: "This code is meant to display the largest of the three numbers a, b, and c.",
      code: `max ← a
IF (b > a)
{
  max ← b
}
IF (c > a)
{
  max ← c
}
DISPLAY(max)`,
      question: "For which values does the code NOT display the largest number?",
      choices: ["a = 2, b = 9, c = 6", "a = 2, b = 6, c = 9", "a = 9, b = 2, c = 6", "a = 6, b = 2, c = 9"],
      why: [
        "max becomes 9, but the second test compares c to a, not to max. 6 > 2, so max becomes 6.",
        "c is the largest, and c > a makes max 9, which is right.",
        "Neither test is true, so max stays 9, which is the largest.",
        "Only c > a is true, so max becomes 9, which is the largest.",
      ],
      answer: 0,
    },
    {
      id: "bi3-14", skill: "pc-cond", type: "mcq", difficulty: "moderate", opens: "2027-04-06",
      stem: "A shop in the dungeon crawler picks a sword for the player.",
      code: `IF (gold > 100)
{
  IF (level ≥ 5)
  {
    DISPLAY("Epic sword")
  }
  ELSE
  {
    DISPLAY("Iron sword")
  }
}
ELSE
{
  DISPLAY("Wooden sword")
}`,
      question: "Which values display Iron sword?",
      choices: ["gold = 150, level = 3", "gold = 100, level = 3", "gold = 150, level = 5", "gold = 80, level = 7"],
      why: [
        "150 > 100 enters the outer IF, and 3 ≥ 5 is false, so the inner ELSE displays Iron sword.",
        "100 > 100 is false, so the outer ELSE runs and displays Wooden sword.",
        "5 ≥ 5 is true, so this displays Epic sword.",
        "80 > 100 is false, so level is never checked and Wooden sword is displayed.",
      ],
      answer: 0,
    },
    {
      id: "bi3-15", skill: "pc-cond", type: "mcq", difficulty: "easy", opens: "2027-04-06",
      stem: "Consider the following code segment.",
      code: `x ← 8
DISPLAY(x MOD 2 = 0)`,
      question: "What is displayed?",
      choices: ["true", "false", "0", "4"],
      why: [
        "8 MOD 2 is 0, so the comparison 0 = 0 is true, and a comparison evaluates to true or false.",
        "8 MOD 2 is 0, and 0 = 0 is true.",
        "0 is the value of 8 MOD 2. The = then compares it to 0, which gives a Boolean.",
        "4 is 8 / 2. MOD gives a remainder, and the = turns the result into true or false.",
      ],
      answer: 0,
    },
    {
      id: "bi3-16", skill: "pc-cond", type: "mcq", difficulty: "difficult", opens: "2027-04-06",
      stem: "Consider the original code and three other segments.",
      code: `Original
IF (temp > 80) { DISPLAY("hot") }
ELSE
{
  IF (temp > 60) { DISPLAY("mild") }
  ELSE { DISPLAY("cold") }
}

Segment I
IF (temp > 80) { DISPLAY("hot") }
IF (temp > 60) { DISPLAY("mild") }
IF (temp ≤ 60) { DISPLAY("cold") }

Segment II
IF (temp > 60) { DISPLAY("mild") }
ELSE { DISPLAY("cold") }

Segment III
IF (temp ≤ 60) { DISPLAY("cold") }
ELSE
{
  IF (temp ≤ 80) { DISPLAY("mild") }
  ELSE { DISPLAY("hot") }
}`,
      question: "Which segments display the same thing as the original for every number temp?",
      choices: ["III only", "I only", "I and III only", "I, II, and III"],
      why: [
        "III tests from the bottom up and sends 60 or less to cold, 61 to 80 to mild, and above 80 to hot, as the original does.",
        "For temp = 90, I displays both hot and mild, because its IFs are separate and both tests are true.",
        "I displays two words for temp = 90, since 90 > 80 and 90 > 60 are both tested.",
        "II never displays hot. For temp = 90 it displays mild.",
      ],
      answer: 0,
    },
    // ================================================================ pc-proc
    {
      id: "bi3-17", skill: "pc-proc", type: "mcq", difficulty: "easy", opens: "2027-04-08",
      stem: "Consider the following code segment.",
      code: `PROCEDURE triple(n)
{
  RETURN(n * 3)
}
a ← triple(4)
b ← triple(a - 2)
DISPLAY(b)`,
      question: "What is displayed?",
      choices: ["30", "10", "36", "12"],
      why: [
        "a is triple(4), which is 12. Then b is triple(10), which is 30.",
        "10 is the argument a minus 2. The procedure returns three times it.",
        "36 is triple(12). The second call passes a minus 2, which is 10.",
        "12 is a. b is the result of the second call.",
      ],
      answer: 0,
    },
    {
      id: "bi3-18", skill: "pc-proc", type: "mcq", difficulty: "moderate", opens: "2027-04-08",
      stem: "Consider the following code segment.",
      code: `PROCEDURE bonus(x)
{
  DISPLAY(x)
  RETURN(x + 5)
}
y ← bonus(2)
DISPLAY(bonus(y))`,
      question: "What is displayed?",
      choices: ["2 7 12", "7 12", "2 12", "12"],
      why: [
        "The first call displays 2 and returns 7. The second call displays 7 and returns 12, which the last line displays.",
        "The first call also displays its x, 2, even though its result is only stored in y.",
        "bonus(y) displays its own x, 7, before it returns 12.",
        "Each call runs DISPLAY(x) inside the procedure, so 2 and 7 come out first.",
      ],
      answer: 0,
    },
    {
      id: "bi3-19", skill: "pc-proc", type: "mcq", difficulty: "moderate", opens: "2027-04-08",
      stem: "The dungeon crawler calls a procedure attack(hero, monster) in twelve places. The team rewrites the body of attack to use a new damage formula. Its name, parameters, and the kind of value it returns stay the same.",
      question: "Which is true?",
      choices: ["None of the twelve calls has to change.", "Each of the twelve calls must be rewritten.", "The procedure now needs a new name.", "Each call must now pass in the formula."],
      why: [
        "This is procedural abstraction: the calls depend only on the name, parameters, and result, and those did not change.",
        "A call only uses the procedure's name and parameters, which stayed the same.",
        "Changing a procedure's body does not require a new name.",
        "The formula lives inside the procedure, and the parameters are still hero and monster.",
      ],
      answer: 0,
    },
    {
      id: "bi3-20", skill: "pc-proc", type: "mcq", difficulty: "easy", opens: "2027-04-08",
      stem: "The procedure larger is meant to return the larger of its two numbers.",
      code: `PROCEDURE larger(a, b)
{
  IF (<MISSING CONDITION>)
  {
    RETURN(a)
  }
  RETURN(b)
}`,
      question: "What can replace <MISSING CONDITION>?",
      choices: ["a > b", "a < b", "b > a", "a = b"],
      why: [
        "When a is larger, RETURN(a) runs. Otherwise the procedure skips to RETURN(b).",
        "This returns a when a is smaller, which gives the smaller number.",
        "b > a is the same as a < b, so it returns the smaller number.",
        "When the numbers differ, this skips to RETURN(b) even if a is larger.",
      ],
      answer: 0,
    },
    {
      id: "bi3-21", skill: "pc-proc", type: "mcq", difficulty: "difficult", opens: "2027-04-08",
      stem: "Consider the following code segment.",
      code: `PROCEDURE countAbove(nums, limit)
{
  count ← 0
  FOR EACH n IN nums
  {
    IF (n > limit)
    {
      count ← count + 1
    }
  }
  RETURN(count)
}
DISPLAY(countAbove([4, 9, 2, 9, 3], countAbove([1, 8, 6], 2)))`,
      question: "What is displayed?",
      choices: ["4", "2", "5", "3"],
      why: [
        "The inner call counts 8 and 6, so it returns 2. The outer call counts 4, 9, 9, and 3, which are above 2.",
        "2 is the inner call's result. It becomes the limit for the outer call, which is what gets displayed.",
        "The 2 in the outer list is not above the limit of 2, because > does not include equal values.",
        "3 would be the limit if the inner call returned the length of [1, 8, 6]. It returns 2, so 3 is counted too.",
      ],
      answer: 0,
    },
    {
      id: "bi3-22", skill: "pc-proc", type: "mcq", difficulty: "moderate", opens: "2027-04-08",
      stem: "Consider the following code segment.",
      code: `PROCEDURE square(x)
{
  RETURN(x * x)
}
PROCEDURE sumSquares(a, b)
{
  RETURN(square(a) + square(b))
}
DISPLAY(sumSquares(2, 3) - square(2))`,
      question: "What is displayed?",
      choices: ["9", "13", "21", "17"],
      why: [
        "sumSquares(2, 3) is 4 + 9, which is 13. Subtracting square(2), which is 4, leaves 9.",
        "13 is sumSquares(2, 3) alone. The line also subtracts square(2).",
        "21 is 25 minus 4. sumSquares squares each number and then adds, so it returns 13, not 25.",
        "17 is 13 plus 4. The line subtracts square(2), so the result is 13 minus 4.",
      ],
      answer: 0,
    },
    {
      id: "bi3-23", skill: "pc-proc", type: "mcq", difficulty: "moderate", opens: "2027-04-08",
      stem: "Consider the following procedure.",
      code: `PROCEDURE lastMinusFirst(aList)
{
  RETURN(aList[LENGTH(aList)] - aList[1])
}`,
      question: "Which call makes the program end with an error?",
      choices: ["lastMinusFirst([])", "lastMinusFirst([5])", "lastMinusFirst([3, 3])", "lastMinusFirst([9, 1, 4])"],
      why: [
        "An empty list has length 0, and there is no index 0 or 1, so the index is out of range.",
        "For one item, LENGTH is 1, so both indexes are 1 and the result is 0.",
        "Indexes 2 and 1 both exist, so the result is 3 minus 3, which is 0.",
        "Indexes 3 and 1 exist, so the result is 4 minus 9, which is negative 5.",
      ],
      answer: 0,
    },
    {
      id: "bi3-24", skill: "pc-proc", type: "mcq", difficulty: "difficult", opens: "2027-04-08",
      stem: "Consider the following code segment.",
      code: `PROCEDURE firstOver(nums, target)
{
  FOR EACH n IN nums
  {
    IF (n > target)
    {
      RETURN(n)
    }
  }
  RETURN(-1)
}
DISPLAY(firstOver([3, 8, 5, 12], 4))
DISPLAY(firstOver([3, 8, 5, 12], 12))`,
      question: "What is displayed?",
      choices: ["8 -1", "12 -1", "8 12", "8 5 12 -1"],
      why: [
        "RETURN ends the procedure at once, so the first call returns 8. No item is greater than 12, so the second returns -1.",
        "The loop does not keep going after RETURN. The first value above 4 is 8.",
        "12 is not greater than 12, so the second call reaches RETURN(-1).",
        "RETURN stops the procedure, so the first call gives back only 8 and displays nothing itself.",
      ],
      answer: 0,
    },
    // ================================================================ pc-loops
    {
      id: "bi3-25", skill: "pc-loops", type: "mcq", difficulty: "easy", opens: "2027-04-09",
      stem: "Consider the following code segment.",
      code: `x ← 1
REPEAT 4 TIMES
{
  x ← x * 2
}
DISPLAY(x)`,
      question: "What is displayed?",
      choices: ["16", "8", "32", "9"],
      why: [
        "x doubles four times: 2, 4, 8, 16.",
        "8 is three doublings. The loop runs 4 times.",
        "32 is five doublings. The loop runs 4 times.",
        "9 adds 2 four times. The loop multiplies by 2 each time.",
      ],
      answer: 0,
    },
    {
      id: "bi3-26", skill: "pc-loops", type: "mcq", difficulty: "moderate", opens: "2027-04-09",
      stem: "Consider the following code segment.",
      code: `n ← 80
steps ← 0
REPEAT UNTIL (n < 10)
{
  n ← n / 2
  steps ← steps + 1
}
DISPLAY(steps)
DISPLAY(n)`,
      question: "What is displayed?",
      choices: ["4 5", "3 10", "5 2.5", "4 10"],
      why: [
        "n goes 40, 20, 10, 5. The test 10 < 10 is false, so the loop runs a fourth time, and then 5 < 10 stops it.",
        "The loop does not stop at 10, because 10 < 10 is false.",
        "The test is checked before each pass. Once n is 5, the loop stops, so it never reaches 2.5.",
        "n is displayed after the fourth halving, so it is 5, not 10.",
      ],
      answer: 0,
    },
    {
      id: "bi3-27", skill: "pc-loops", type: "mcq", difficulty: "moderate", opens: "2027-04-09",
      stem: "Consider the following code segment, where start is set before the loop.",
      code: `k ← start
REPEAT UNTIL (k = 10)
{
  k ← k + 2
}`,
      question: "Which value of start makes the loop run forever?",
      choices: ["1", "0", "4", "10"],
      why: [
        "From 1, k is always odd: 3, 5, 7, 9, 11, and so on. It skips 10, so the test is never true.",
        "From 0, k goes 2, 4, 6, 8, 10, and the loop stops.",
        "From 4, k goes 6, 8, 10, and the loop stops.",
        "k = 10 is already true, so the loop body never runs.",
      ],
      answer: 0,
    },
    {
      id: "bi3-28", skill: "pc-loops", type: "mcq", difficulty: "moderate", opens: "2027-04-09",
      stem: "Consider the following code segment.",
      code: `count ← 0
n ← 1
REPEAT 10 TIMES
{
  IF (n MOD 3 = 0)
  {
    count ← count + n
  }
  n ← n + 1
}
DISPLAY(count)`,
      question: "What is displayed?",
      choices: ["18", "3", "30", "55"],
      why: [
        "n runs from 1 to 10, and the multiples of 3 are 3, 6, and 9. The loop adds n, so count is 18.",
        "3 is how many multiples there are. The loop adds n itself, not 1.",
        "30 includes 12, but n only reaches 10 in ten passes.",
        "55 is the sum of 1 to 10. The IF adds only multiples of 3.",
      ],
      answer: 0,
    },
    {
      id: "bi3-29", skill: "pc-loops", type: "mcq", difficulty: "moderate", opens: "2027-04-09",
      stem: "The code should display 1 2 3 4 5.",
      code: `i ← 0
REPEAT UNTIL (<MISSING CONDITION>)
{
  i ← i + 1
  DISPLAY(i)
}`,
      question: "What can replace <MISSING CONDITION>?",
      choices: ["i = 5", "i > 5", "i = 4", "i < 5"],
      why: [
        "The loop displays 1 through 5. After 5 is displayed, i = 5 is true and the loop stops.",
        "i > 5 is false when i is 5, so the loop runs again and displays 6.",
        "This stops after 4 is displayed, so 5 never appears.",
        "0 < 5 is true before the first pass, so nothing is displayed.",
      ],
      answer: 0,
    },
    {
      id: "bi3-30", skill: "pc-loops", type: "mcq", difficulty: "difficult", opens: "2027-04-09",
      stem: "Consider the following code segment.",
      code: `count ← 0
REPEAT 3 TIMES
{
  REPEAT 4 TIMES
  {
    count ← count + 1
  }
  count ← count * 2
}
DISPLAY(count)`,
      question: "What is displayed?",
      choices: ["56", "24", "12", "96"],
      why: [
        "Each outer pass adds 4 and then doubles: 0 to 8, 8 to 24, 24 to 56.",
        "24 doubles only once, at the end. The doubling is inside the outer loop, so it runs three times.",
        "12 counts the inner passes only. Each outer pass also doubles count.",
        "96 is 12 times 8. The additions and doublings take turns, so the order matters.",
      ],
      answer: 0,
    },
    {
      id: "bi3-31", skill: "pc-loops", type: "mcq", difficulty: "difficult", opens: "2027-04-09",
      stem: "Consider the following code segment.",
      code: `n ← 4096
digits ← 0
REPEAT UNTIL (n < 1)
{
  n ← (n - n MOD 10) / 10
  digits ← digits + 1
}
DISPLAY(digits)`,
      question: "What is displayed?",
      choices: ["4", "3", "5", "19"],
      why: [
        "Each pass drops the last digit: 409, 40, 4, 0. After four passes n < 1 is true.",
        "After three passes n is 4, which is not less than 1, so one more pass runs.",
        "Once n is 0 the loop stops, so there is no fifth pass.",
        "19 is the sum of the digits. The loop adds 1 per digit, so it counts them.",
      ],
      answer: 0,
    },
    {
      id: "bi3-32", skill: "pc-loops", type: "mcq", difficulty: "easy", opens: "2027-04-09",
      stem: "Consider the following code segment.",
      code: `x ← 10
REPEAT UNTIL (x ≤ 0)
{
  DISPLAY(x)
  x ← x - 3
}`,
      question: "What is displayed?",
      choices: ["10 7 4 1", "10 7 4 1 -2", "7 4 1 -2", "10 7 4"],
      why: [
        "x is displayed before each subtraction. After 1 is displayed, x is negative 2, and the loop stops.",
        "When x is negative 2, the test x ≤ 0 is true, so the loop stops before it is displayed.",
        "DISPLAY comes before the subtraction, so 10 is shown first.",
        "1 > 0, so the loop runs once more and displays 1.",
      ],
      answer: 0,
    },
    // ================================================================ pc-lists
    {
      id: "bi3-33", skill: "pc-lists", type: "mcq", difficulty: "easy", opens: "2027-04-12",
      stem: "Consider the following code segment.",
      code: `items ← ["torch", "rope", "map", "key"]
DISPLAY(items[2])
DISPLAY(LENGTH(items))`,
      question: "What is displayed?",
      choices: ["rope 4", "map 4", "rope 3", "torch 4"],
      why: [
        "Indexes start at 1, so items[2] is rope. The list has 4 items.",
        "map is at index 3. AP lists start at index 1, not 0.",
        "LENGTH counts the items, and there are 4.",
        "torch is at index 1.",
      ],
      answer: 0,
    },
    {
      id: "bi3-34", skill: "pc-lists", type: "mcq", difficulty: "moderate", opens: "2027-04-12",
      stem: "Consider the following code segment.",
      code: `nums ← [5, 8, 2]
APPEND(nums, 7)
INSERT(nums, 2, 4)
REMOVE(nums, 4)`,
      question: "What does nums contain after the code runs?",
      choices: ["[5, 4, 8, 7]", "[5, 8, 4, 7]", "[5, 8, 2, 7]", "[5, 8, 4, 2]"],
      why: [
        "APPEND gives [5, 8, 2, 7]. INSERT puts 4 at index 2: [5, 4, 8, 2, 7]. REMOVE takes out index 4, which is 2.",
        "INSERT places 4 at index 2, so it goes before 8, not after it.",
        "REMOVE(nums, 4) removes the item at index 4. It does not look for the value 4.",
        "This counts indexes from 0. AP lists start at index 1.",
      ],
      answer: 0,
    },
    {
      id: "bi3-35", skill: "pc-lists", type: "mcq", difficulty: "moderate", opens: "2027-04-12",
      stem: "Consider the following code segment.",
      code: `scores ← [12, 7, 19, 4, 19]
best ← scores[1]
where ← 1
i ← 1
FOR EACH s IN scores
{
  IF (s > best)
  {
    best ← s
    where ← i
  }
  i ← i + 1
}
DISPLAY(where)`,
      question: "What is displayed?",
      choices: ["3", "5", "19", "2"],
      why: [
        "The first 19 is at index 3. The second 19 is not greater than best, so where stays 3.",
        "The test is s > best, so a tie does not replace the first 19.",
        "19 is the value in best. The code displays where, the index.",
        "This counts from 0. The first 19 is the third item, index 3.",
      ],
      answer: 0,
    },
    {
      id: "bi3-36", skill: "pc-lists", type: "mcq", difficulty: "difficult", opens: "2027-04-12",
      stem: "Consider the following code segment.",
      code: `vals ← [3, 6, 9, 12]
i ← LENGTH(vals)
REPEAT 4 TIMES
{
  DISPLAY(vals[i])
  i ← i - 2
}`,
      question: "What happens when the code runs?",
      choices: ["It displays 12 6, then an error ends it.", "It displays 12 6 12 6 and then ends.", "It displays 12 9 6 3 and then ends.", "An error ends it before anything is displayed."],
      why: [
        "i is 4, then 2, then 0. vals[0] is out of range, so the program ends after 12 and 6.",
        "Indexes do not wrap around. Index 0 does not exist, so the program ends.",
        "i goes down by 2 each pass, so index 3 and index 1 are skipped.",
        "LENGTH(vals) is 4, and index 4 exists because indexes run from 1 to 4.",
      ],
      answer: 0,
    },
    {
      id: "bi3-37", skill: "pc-lists", type: "mcq", difficulty: "easy", opens: "2027-04-12",
      stem: "The code should add up only the even numbers in the list nums.",
      code: `total ← 0
FOR EACH n IN nums
{
  IF (<MISSING CONDITION>)
  {
    total ← total + n
  }
}`,
      question: "What can replace <MISSING CONDITION>?",
      choices: ["n MOD 2 = 0", "nums MOD 2 = 0", "n / 2 = 0", "n MOD 2 = 1"],
      why: [
        "An even number has a remainder of 0 when divided by 2, and n is the current item.",
        "nums is the whole list. The test must use n, the item the loop is on.",
        "n / 2 is 0 only when n is 0, so this misses every other even number.",
        "A remainder of 1 means n is odd, so this adds the odd numbers.",
      ],
      answer: 0,
    },
    {
      id: "bi3-38", skill: "pc-lists", type: "mcq", difficulty: "difficult", opens: "2027-04-12",
      stem: "The code is meant to remove every 4 from the list.",
      code: `nums ← [4, 4, 7, 4, 9]
i ← 1
REPEAT UNTIL (i > LENGTH(nums))
{
  IF (nums[i] = 4)
  {
    REMOVE(nums, i)
  }
  i ← i + 1
}
DISPLAY(nums)`,
      question: "What is displayed?",
      choices: ["[4, 7, 9]", "[7, 9]", "[4, 7, 4, 9]", "[7, 4, 9]"],
      why: [
        "Removing index 1 slides the second 4 into index 1, but i moves on to 2 and skips it. The third 4 is removed.",
        "This is the goal, but after each REMOVE the next item slides back and i still goes up by 1.",
        "The loop keeps going after the first removal, and the 4 at the old index 4 is removed.",
        "The first 4 is removed and the third 4 is removed. The second 4 is the one that is skipped.",
      ],
      answer: 0,
    },
    {
      id: "bi3-39", skill: "pc-lists", type: "mcq", difficulty: "easy", opens: "2027-04-12",
      stem: "A game stores the names of its 30 monsters in one list, monsters, instead of in 30 separate variables.",
      question: "Which is a benefit of using the list?",
      choices: ["One loop can process all the monsters, however many there are.", "The names no longer take up any memory on the computer.", "Each monster's name can be changed only once.", "The program no longer needs any variables at all."],
      why: [
        "A list is a data abstraction: the code works with one name, and a loop handles any number of items.",
        "The names still use memory. The list only groups them under one name.",
        "Items in a list can be changed as often as needed.",
        "monsters is itself a variable, and loops still use variables.",
      ],
      answer: 0,
    },
    {
      id: "bi3-40", skill: "pc-lists", type: "mcq", difficulty: "moderate", opens: "2027-04-12",
      stem: "Consider the following code segment.",
      code: `temps ← [72, 65, 80, 91, 68]
hot ← []
FOR EACH t IN temps
{
  IF (t ≥ 80)
  {
    APPEND(hot, t)
  }
}
DISPLAY(LENGTH(hot))
DISPLAY(hot[1])`,
      question: "What is displayed?",
      choices: ["2 80", "1 91", "2 91", "2 72"],
      why: [
        "80 and 91 pass the test, so hot is [80, 91]. Its length is 2 and its first item is 80.",
        "≥ includes 80, so two temperatures are added.",
        "APPEND adds to the end, so 80 goes in first and stays at index 1.",
        "hot[1] is the first item of hot, not of temps.",
      ],
      answer: 0,
    },
    // ================================================================ robot
    {
      id: "bi3-41", skill: "robot", type: "mcq", difficulty: "easy", opens: "2027-04-14",
      stem: ROBOT,
      code: `. . . G
. # . .
> . . .

MOVE_FORWARD()
MOVE_FORWARD()
ROTATE_LEFT()
MOVE_FORWARD()
MOVE_FORWARD()`,
      question: "Where does the robot end?",
      choices: ["Row 1, column 3, facing up", "Row 1, column 4, facing up", "Row 1, column 3, facing right", "Row 1, column 2, facing up"],
      why: [
        "Two moves take the robot to row 3, column 3. ROTATE_LEFT turns it from right to up, and two moves reach row 1.",
        "That is G. The robot moves right only twice, so it is in column 3.",
        "ROTATE_LEFT turned the robot to face up, and nothing turns it back.",
        "The starting square is column 1, and each MOVE_FORWARD adds one, so two moves reach column 3.",
      ],
      answer: 0,
    },
    {
      id: "bi3-42", skill: "robot", type: "mcq", difficulty: "moderate", opens: "2027-04-14",
      stem: ROBOT + " The grid is shown first, then three code segments.",
      code: `G . . . .
# # # # .
> . . . .

Segment I
REPEAT 4 TIMES { MOVE_FORWARD() }
ROTATE_LEFT()
REPEAT 2 TIMES { MOVE_FORWARD() }
ROTATE_LEFT()
REPEAT 4 TIMES { MOVE_FORWARD() }

Segment II
REPEAT 2 TIMES
{
  REPEAT UNTIL (NOT CAN_MOVE(forward)) { MOVE_FORWARD() }
  ROTATE_LEFT()
}
REPEAT 4 TIMES { MOVE_FORWARD() }

Segment III
REPEAT 4 TIMES { MOVE_FORWARD() }
ROTATE_RIGHT()
REPEAT 2 TIMES { MOVE_FORWARD() }
ROTATE_RIGHT()
REPEAT 4 TIMES { MOVE_FORWARD() }`,
      question: "Which segments move the robot to G?",
      choices: ["I and II only", "I only", "II and III only", "I, II, and III"],
      why: [
        "I counts the moves along the bottom, up the right side, and across the top. II moves until blocked twice, which reaches the same corner, then moves 4 left.",
        "II also works: the first inner loop stops at the right edge, and the second stops at the top edge.",
        "III turns right at the corner, which faces down, so its next move goes off the grid.",
        "III fails. After turning right at row 3, column 5, the robot faces off the bottom edge.",
      ],
      answer: 0,
    },
    {
      id: "bi3-43", skill: "robot", type: "mcq", difficulty: "moderate", opens: "2027-04-14",
      stem: ROBOT,
      code: `. . . # G
. # . . .
^ . . # .

REPEAT UNTIL (NOT CAN_MOVE(forward))
{
  MOVE_FORWARD()
}
ROTATE_RIGHT()
REPEAT UNTIL (NOT CAN_MOVE(forward))
{
  MOVE_FORWARD()
}`,
      question: "Where does the robot end?",
      choices: ["Row 1, column 3, facing right", "Row 1, column 5, facing right", "Row 1, column 1, facing right", "Row 1, column 4, facing right"],
      why: [
        "The robot goes up to row 1, turns right, and moves until the blocked square in column 4 is ahead of it.",
        "The blocked square in column 4 stops the second loop, so the robot never reaches G.",
        "The second loop runs because the square to the right of row 1, column 1 is open.",
        "Column 4 is blocked. CAN_MOVE(forward) is false there, so the robot stops before it.",
      ],
      answer: 0,
    },
    {
      id: "bi3-44", skill: "robot", type: "mcq", difficulty: "difficult", opens: "2027-04-14",
      stem: ROBOT,
      code: `# # # . G
# # . . #
# . . # #
> . # # #

REPEAT 3 TIMES
{
  MOVE_FORWARD()
  ROTATE_LEFT()
  MOVE_FORWARD()
  ROTATE_RIGHT()
}`,
      question: "The robot ends at row 1, column 4. Which change makes it end on G?",
      choices: ["Add MOVE_FORWARD() after the loop.", "Add MOVE_FORWARD() before the loop.", "Swap ROTATE_LEFT() and ROTATE_RIGHT().", "Remove ROTATE_RIGHT() from the loop."],
      why: [
        "The loop leaves the robot one square left of G, facing right, so one more move lands on G.",
        "The extra move puts the robot in column 2, so the loop's first move hits the blocked square in row 4, column 3, and the program ends.",
        "The robot would turn right from facing right, which faces down, and the next move goes off the grid.",
        "Without the right turn, the robot keeps facing up after the first pass and moves into a blocked square.",
      ],
      answer: 0,
    },
    {
      id: "bi3-45", skill: "robot", type: "mcq", difficulty: "easy", opens: "2027-04-14",
      stem: ROBOT,
      code: `. G .
. > .
. . .

REPEAT 3 TIMES
{
  ROTATE_LEFT()
}
MOVE_FORWARD()`,
      question: "Where does the robot end?",
      choices: ["Below its start", "On the square marked G", "Left of its start", "Right of its start"],
      why: [
        "Three left turns from facing right go up, left, then down, so the move goes down one square.",
        "One left turn would face up toward G. Three left turns face down.",
        "Two left turns would face left. The third turn faces down.",
        "Four left turns would bring the robot back to facing right.",
      ],
      answer: 0,
    },
    {
      id: "bi3-46", skill: "robot", type: "mcq", difficulty: "moderate", opens: "2027-04-14",
      stem: ROBOT,
      code: `. # .
. ^ #
. . .`,
      question: "Which expression is true?",
      choices: ["CAN_MOVE(left) AND CAN_MOVE(backward)", "CAN_MOVE(forward) OR CAN_MOVE(right)", "NOT CAN_MOVE(backward)", "CAN_MOVE(left) AND CAN_MOVE(right)"],
      why: [
        "The robot faces up. Its left is row 2, column 1 and its back is row 3, column 2, and both are open.",
        "Ahead (row 1, column 2) and to the right (row 2, column 3) are both blocked.",
        "The square behind the robot is open, so CAN_MOVE(backward) is true and NOT makes it false.",
        "The square to the robot's right is blocked, so the AND is false.",
      ],
      answer: 0,
    },
    {
      id: "bi3-47", skill: "robot", type: "mcq", difficulty: "moderate", opens: "2027-04-14",
      stem: ROBOT,
      code: `. . . . .
. # # # .
> . . . G

REPEAT UNTIL (<MISSING CONDITION>)
{
  MOVE_FORWARD()
}`,
      question: "What can replace <MISSING CONDITION> so that the robot stops on G?",
      choices: ["NOT CAN_MOVE(forward)", "CAN_MOVE(left)", "NOT CAN_MOVE(left)", "CAN_MOVE(forward)"],
      why: [
        "The robot moves right until the edge of the grid is ahead, and that happens on G.",
        "The square to the robot's left (above it) is open at the start, so the loop never runs.",
        "After one move, the square above the robot is blocked, so it stops in column 2.",
        "The robot can move forward at the start, so the loop stops before any move.",
      ],
      answer: 0,
    },
    {
      id: "bi3-48", skill: "robot", type: "mcq", difficulty: "difficult", opens: "2027-04-14",
      stem: ROBOT,
      code: `. . # . .
. # . . .
> . . # .

steps ← 0
REPEAT UNTIL (NOT CAN_MOVE(forward))
{
  MOVE_FORWARD()
  steps ← steps + 1
  IF (CAN_MOVE(left))
  {
    ROTATE_LEFT()
  }
}
DISPLAY(steps)`,
      question: "What is displayed?",
      choices: ["3", "2", "4", "5"],
      why: [
        "The robot moves to column 2, then column 3, where it turns up. It moves to row 2, column 3, and the blocked square above stops the loop.",
        "At row 3, column 3 the robot turns up and can still move, so the loop runs a third time.",
        "After the third move the square ahead, row 1, column 3, is blocked, so the loop ends.",
        "The robot turns up at column 3 and never reaches the right side of the grid.",
      ],
      answer: 0,
    },
    // ================================================================ algo-build
    {
      id: "bi3-49", skill: "algo-build", type: "mcq", difficulty: "easy", opens: "2027-04-14",
      stem: "A recipe app lists steps for a cook to follow.",
      question: "Which step is an example of selection?",
      choices: ["If it sticks, add flour.", "Knead the dough, then let it rest.", "Stir until no lumps are left.", "Set the oven timer to 25 minutes."],
      why: [
        "Selection chooses whether to do a step based on a condition, here whether the dough sticks.",
        "This is sequencing: two steps done in order.",
        "This is iteration: stirring repeats until a condition is met.",
        "This is a single step with no condition, part of sequencing.",
      ],
      answer: 0,
    },
    {
      id: "bi3-50", skill: "algo-build", type: "mcq", difficulty: "difficult", opens: "2027-04-14",
      stem: "n is a positive whole number. Consider the original code and three other segments.",
      code: `Original
total ← 0
i ← 1
REPEAT n TIMES
{
  total ← total + i
  i ← i + 1
}
DISPLAY(total)

Segment I
DISPLAY(n * (n + 1) / 2)

Segment II
total ← 0
i ← n
REPEAT UNTIL (i = 0)
{
  total ← total + i
  i ← i - 1
}
DISPLAY(total)

Segment III
total ← 0
i ← 0
REPEAT n TIMES
{
  total ← total + i
  i ← i + 1
}
DISPLAY(total)`,
      question: "Which segments display the same value as the original for every positive n?",
      choices: ["I and II only", "I only", "II and III only", "I, II, and III"],
      why: [
        "The original adds 1 through n. I uses the formula for that sum, and II adds the same numbers from n down to 1.",
        "II adds n, n minus 1, and so on down to 1, which is the same sum in the other order.",
        "III starts i at 0, so it adds 0 through n minus 1 and leaves out n.",
        "III is not equivalent. For n = 3 it displays 3, while the original displays 6.",
      ],
      answer: 0,
    },
    {
      id: "bi3-51", skill: "algo-build", type: "mcq", difficulty: "moderate", opens: "2027-04-14",
      stem: "The procedure inRange should return true when n is from 10 to 20, including both 10 and 20.",
      code: `PROCEDURE inRange(n)
{
  RETURN(n > 10 AND n ≤ 20)
}`,
      question: "Which test shows that the procedure is wrong?",
      choices: ["inRange(10)", "inRange(20)", "inRange(15)", "inRange(21)"],
      why: [
        "10 should give true, but 10 > 10 is false, so the procedure returns false.",
        "20 > 10 and 20 ≤ 20 are both true, so it correctly returns true.",
        "15 is inside the range, and the procedure correctly returns true.",
        "21 ≤ 20 is false, so it correctly returns false.",
      ],
      answer: 0,
    },
    {
      id: "bi3-52", skill: "algo-build", type: "mcq", difficulty: "moderate", opens: "2027-04-14",
      stem: "A procedure sortUp(aList) returns a copy of aList in increasing order. A programmer combines it with indexing to find the second largest number in a list of different numbers.",
      code: `sorted ← sortUp(nums)
DISPLAY(sorted[<MISSING INDEX>])`,
      question: "What can replace <MISSING INDEX>?",
      choices: ["LENGTH(sorted) - 1", "2", "LENGTH(sorted)", "LENGTH(sorted) - 2"],
      why: [
        "In increasing order, the largest is last, at index LENGTH(sorted), so the second largest is one before it.",
        "Index 2 holds the second smallest in an increasing list.",
        "The last index holds the largest number, not the second largest.",
        "This is two places before the end, the third largest.",
      ],
      answer: 0,
    },
    {
      id: "bi3-53", skill: "algo-build", type: "mcq", difficulty: "moderate", opens: "2027-04-14",
      stem: "The code is meant to display the largest number in the list nums.",
      code: `result ← 0
FOR EACH n IN nums
{
  IF (n > result)
  {
    result ← n
  }
}
DISPLAY(result)`,
      question: "For which list does the code NOT display the largest number?",
      choices: ["[-4, -9, -2]", "[0, 3, 1]", "[5, 5, 5]", "[2, 9, 7]"],
      why: [
        "No item is greater than 0, so result stays 0, which is not in the list. The largest is negative 2.",
        "3 > 0, so result becomes 3, which is correct.",
        "5 > 0, so result becomes 5. The later 5s are not greater, and 5 is correct.",
        "result becomes 2, then 9, and 7 does not replace it. 9 is correct.",
      ],
      answer: 0,
    },
    {
      id: "bi3-54", skill: "algo-build", type: "mcq", difficulty: "easy", opens: "2027-04-14",
      stem: "Consider the following code segment.",
      code: `x ← 3
x ← x * 4
x ← x + 2`,
      question: "If the second and third lines trade places, what value does x end with?",
      choices: ["20", "14", "5", "12"],
      why: [
        "In the new order, x becomes 3 + 2, which is 5, and then 5 * 4, which is 20.",
        "14 is the result of the original order. Changing the order of steps can change the result.",
        "5 is x after the first new step, but x is then multiplied by 4.",
        "12 is x after the original second line. In the new order, adding comes first.",
      ],
      answer: 0,
    },
    {
      id: "bi3-55", skill: "algo-build", type: "mcq", difficulty: "difficult", opens: "2027-04-14",
      stem: "The code is meant to display the index of the first negative number in nums.",
      code: `i ← 1
REPEAT UNTIL (nums[i] < 0)
{
  i ← i + 1
}
DISPLAY(i)`,
      question: "For which list does the program end with an error?",
      choices: ["[3, 0, 8]", "[-1, 2, 3]", "[4, 5, -6]", "[0, -2, -3]"],
      why: [
        "No item is negative, so i reaches 4, and nums[4] is out of range.",
        "nums[1] is negative, so the loop never runs and 1 is displayed.",
        "The loop stops at index 3, so 3 is displayed.",
        "The loop stops at index 2, the first negative, so 2 is displayed.",
      ],
      answer: 0,
    },
    {
      id: "bi3-56", skill: "algo-build", type: "mcq", difficulty: "moderate", opens: "2027-04-14",
      stem: "nums is a list of positive whole numbers.",
      code: `count ← 0
FOR EACH n IN nums
{
  IF (n MOD 2 = 1)
  {
    count ← count + 1
  }
}
DISPLAY(LENGTH(nums) - count)`,
      question: "What does the code display?",
      choices: ["How many even numbers are in nums", "How many odd numbers are in nums", "The sum of the even numbers in nums", "How many numbers are in nums"],
      why: [
        "count is the number of odd items, and subtracting it from the length leaves the number of even items.",
        "count holds the odd count, but the code displays the length minus count.",
        "The loop adds 1 for each match, not the number itself, so nothing is summed.",
        "The length is reduced by count before it is displayed.",
      ],
      answer: 0,
    },
    // ================================================================ algo-search
    {
      id: "bi3-57", skill: "algo-search", type: "mcq", difficulty: "easy", opens: "2027-04-15",
      question: "Binary search can be used on which list?",
      choices: ["[3, 8, 11, 15, 22]", "[3, 11, 8, 15, 22]", "[22, 3, 15, 8, 11]", "[8, 3, 11, 22, 15]"],
      why: [
        "Binary search needs a sorted list, and this is the only one in order.",
        "8 comes after 11, so the list is not sorted.",
        "These numbers are in no order, so binary search could rule out the wrong half.",
        "3 comes after 8, so the list is not sorted.",
      ],
      answer: 0,
    },
    {
      id: "bi3-58", skill: "algo-search", type: "mcq", difficulty: "moderate", opens: "2027-04-15",
      stem: "A sorted list holds 1,000 player names.",
      question: "At most how many names does a binary search look at to find a name or decide it is missing?",
      choices: ["10", "500", "1,000", "100"],
      why: [
        "Each look cuts the remaining names about in half. Ten halvings take 1,000 down to 1.",
        "500 is one halving. Binary search keeps halving after the first look.",
        "1,000 is the worst case for a linear search, which checks every name.",
        "100 is a tenth of the list. Halving shrinks the list much faster than that.",
      ],
      answer: 0,
    },
    {
      id: "bi3-59", skill: "algo-search", type: "mcq", difficulty: "moderate", opens: "2027-04-15",
      stem: "The procedure below does a linear search.",
      code: `PROCEDURE find(aList, target)
{
  i ← 1
  REPEAT UNTIL (i > LENGTH(aList))
  {
    IF (aList[i] = target)
    {
      RETURN(i)
    }
    i ← i + 1
  }
  RETURN(-1)
}
L ← [7, 3, 9, 3, 5]
a ← find(L, 9)
b ← find(L, 6)`,
      question: "In all, how many times is aList[i] = target tested during the two calls?",
      choices: ["8", "3", "10", "5"],
      why: [
        "find(L, 9) tests 7, 3, and 9 and returns. find(L, 6) tests all 5 items and returns -1. 3 + 5 is 8.",
        "3 counts only the first call. The second call also runs.",
        "The first call stops at 9, the third item, so it does not test all 5.",
        "5 counts only the second call, which finds nothing.",
      ],
      answer: 0,
    },
    {
      id: "bi3-60", skill: "algo-search", type: "mcq", difficulty: "moderate", opens: "2027-04-15",
      stem: "A binary search looks for 24 in the list below. Each step looks at the middle item of the part still being searched, using index (low + high) / 2 rounded down.",
      code: `[3, 6, 9, 12, 15, 18, 21, 24, 27]`,
      question: "Which items does it look at, in order?",
      choices: ["15, 21, 24", "15, 24", "15, 18, 21, 24", "12, 21, 24"],
      why: [
        "Index 5 holds 15. Then the upper half, indexes 6 to 9, has middle index 7, which is 21. Then index 8 holds 24.",
        "After 15, the middle of indexes 6 to 9 is index 7, which is 21, not 24.",
        "Binary search jumps to middles. It does not step through 18.",
        "The middle of nine items is the fifth, 15, not 12.",
      ],
      answer: 0,
    },
    {
      id: "bi3-61", skill: "algo-search", type: "mcq", difficulty: "easy", opens: "2027-04-15",
      stem: "Four algorithms each take the number of steps shown for an input of size n.",
      question: "Which one runs in unreasonable time?",
      choices: ["2ⁿ steps", "n² steps", "n³ steps", "100n steps"],
      why: [
        "2ⁿ is exponential. Each added item doubles the steps, which is unreasonable time.",
        "n² is a polynomial, which counts as reasonable time.",
        "n³ is a polynomial, which counts as reasonable time, even though it grows fast.",
        "100n grows in a straight line, which is reasonable time.",
      ],
      answer: 0,
    },
    {
      id: "bi3-62", skill: "algo-search", type: "mcq", difficulty: "difficult", opens: "2027-04-15",
      stem: "A binary search on a sorted list of 4,000 names looks at no more than 12 names.",
      question: "If the list grows to 8,000 names, at most how many does it look at?",
      choices: ["13", "24", "12", "16"],
      why: [
        "Doubling the list adds one halving step, so the most is 13.",
        "24 doubles the steps. Binary search adds one step when the list doubles.",
        "8,000 is more than 2¹² minus 1, which is 4,095, so 12 looks are not always enough.",
        "16 adds four steps. One extra halving covers twice as many names.",
      ],
      answer: 0,
    },
    {
      id: "bi3-63", skill: "algo-search", type: "mcq", difficulty: "moderate", opens: "2027-04-15",
      question: "Which statement about searching is NOT true?",
      choices: ["Binary search always checks fewer items.", "Linear search works on a list that is not sorted.", "Binary search only works on a sorted list.", "Doubling a sorted list adds about one binary search step."],
      why: [
        "This is false. If the target is first in the list, linear search finds it in one look, while binary search starts in the middle.",
        "This is true. Linear search checks items one at a time, so order does not matter.",
        "This is true. Binary search throws away half the list based on order.",
        "This is true. One extra halving handles twice as many items.",
      ],
      answer: 0,
    },
    {
      id: "bi3-64", skill: "algo-search", type: "mcq", difficulty: "difficult", opens: "2027-04-15",
      stem: "Consider the following code segment, where n is a positive whole number.",
      code: `count ← 0
REPEAT n TIMES
{
  REPEAT n TIMES
  {
    count ← count + 1
  }
}`,
      question: "When n is 20, what is count, and how does the run time grow?",
      choices: ["400, which is reasonable time", "400, which is unreasonable time", "40, which is reasonable time", "1,048,576, which is unreasonable"],
      why: [
        "The inner loop runs 20 times for each of 20 outer passes, which is 400. n² steps is a polynomial, so it is reasonable.",
        "400 is right, but n² is a polynomial. Only growth like 2ⁿ or n! is unreasonable.",
        "40 adds the loops. A loop inside a loop multiplies them.",
        "1,048,576 is 2²⁰. These loops run n times n, not 2ⁿ times.",
      ],
      answer: 0,
    },
    // ================================================================ algo-hard
    {
      id: "bi3-65", skill: "algo-hard", type: "mcq", difficulty: "easy", opens: "2027-04-16",
      stem: "A delivery app picks the nearest stop it has not visited yet, again and again, instead of comparing every possible route.",
      question: "This approach is an example of",
      choices: ["a heuristic", "an undecidable problem", "a binary search", "a decision problem"],
      why: [
        "A heuristic is a shortcut that finds a good answer fast, though not always the best one.",
        "The route problem can be solved by checking every route. It is slow, not undecidable.",
        "Binary search finds a value in a sorted list. It does not plan routes.",
        "The app finds a route. A decision problem asks for a yes or no answer.",
      ],
      answer: 0,
    },
    {
      id: "bi3-66", skill: "algo-hard", type: "mcq", difficulty: "moderate", opens: "2027-04-16",
      question: "Which of the following is a decision problem?",
      choices: ["Can all 8 towns be toured in under 300 miles?", "What is the shortest route through all 8 towns?", "Which 3 items give the most value under 10 pounds?", "What is the fewest number of coins that makes 87 cents?"],
      why: [
        "A decision problem has a yes or no answer, and this question does.",
        "This asks for the best route, so it is an optimization problem.",
        "This asks for the best choice of items, so it is an optimization problem.",
        "This asks for the smallest count, so it is an optimization problem.",
      ],
      answer: 0,
    },
    {
      id: "bi3-67", skill: "algo-hard", type: "mcq", difficulty: "moderate", opens: "2027-04-16",
      question: "Which is true of an undecidable problem?",
      choices: ["No algorithm is correct on every input.", "It takes a computer more than a year to solve.", "It can be solved only by using a heuristic.", "No input of the problem can ever be answered."],
      why: [
        "Undecidable means no algorithm can always give a correct yes or no answer. Some inputs may still be answered.",
        "Slow problems are a separate idea. Undecidable problems cannot be solved for all inputs at any speed.",
        "A heuristic gives a good guess. It does not make an undecidable problem solvable.",
        "Some inputs of an undecidable problem can be answered. The trouble is that no algorithm works for all of them.",
      ],
      answer: 0,
    },
    {
      id: "bi3-68", skill: "algo-hard", type: "mcq", difficulty: "moderate", opens: "2027-04-16",
      stem: "A brute-force algorithm finds the best route by checking every order in which a van can visit 10 shops after leaving the warehouse.",
      question: "How many orders does it check?",
      choices: ["3,628,800", "100", "1,024", "55"],
      why: [
        "There are 10 choices for the first shop, 9 for the next, and so on: 10! is 3,628,800.",
        "100 is 10 times 10. Each later shop has one fewer choice, and the choices multiply.",
        "1,024 is 2¹⁰, which counts yes or no choices, not orders.",
        "55 is 1 + 2 + ... + 10. The choices multiply, they do not add.",
      ],
      answer: 0,
    },
    {
      id: "bi3-69", skill: "algo-hard", type: "mcq", difficulty: "easy", opens: "2027-04-16",
      question: "In which situation is a heuristic the best choice?",
      choices: ["Finding the best schedule exactly would take years, and one is needed by morning.", "A list of 20 names must be searched once for one name.", "A program must add up 500 test scores exactly.", "A sorted list of prices must be checked for one price."],
      why: [
        "A heuristic trades the guaranteed best answer for a good answer in reasonable time.",
        "A linear search of 20 names is fast and exact, so no shortcut is needed.",
        "Adding 500 numbers is fast, and the exact total is required.",
        "Binary search on a sorted list is already fast and exact.",
      ],
      answer: 0,
    },
    {
      id: "bi3-70", skill: "algo-hard", type: "mcq", difficulty: "difficult", opens: "2027-04-16",
      stem: "A student plans a program that reads any program and its input and reports whether that program will eventually stop.",
      question: "Which is true?",
      choices: ["No program can do this correctly for every program and input.", "It can be written, but it needs a very fast computer.", "It works for every program as long as the input is small.", "A heuristic version would be correct for every program."],
      why: [
        "This is the halting problem, which is undecidable: no algorithm answers it correctly in every case.",
        "Speed is not the issue. It has been proved that no algorithm can answer it in every case.",
        "Small inputs do not help. A program can run forever even on a tiny input.",
        "A heuristic may guess well, but it cannot be right in every case.",
      ],
      answer: 0,
    },
    {
      id: "bi3-71", skill: "algo-hard", type: "mcq", difficulty: "difficult", opens: "2027-04-16",
      stem: "The dungeon shop gives change in coins worth 1, 3, and 4 gold. Its algorithm always takes the largest coin that still fits.",
      question: "For 6 gold, how many coins does it give, and what is the fewest possible?",
      choices: ["3 coins, and the fewest is 2", "2 coins, and the fewest is 2", "3 coins, and the fewest is 3", "4 coins, and the fewest is 2"],
      why: [
        "The shop takes 4, then 1, then 1, which is 3 coins. Two 3s also make 6, so taking the largest coin first is not always best.",
        "Taking the largest coin first gives 4 + 1 + 1. The 2-coin answer, 3 + 3, starts with a smaller coin.",
        "3 + 3 makes 6 with 2 coins, so 3 is not the fewest.",
        "After the 4, only 2 gold is left, and two 1s finish it, so 3 coins are used.",
      ],
      answer: 0,
    },
    {
      id: "bi3-72", skill: "algo-hard", type: "mcq", difficulty: "moderate", opens: "2027-04-16",
      stem: "A school is making a seating chart. Problem A asks: can all 30 students be seated so that no two friends sit together? Problem B asks: which seating chart puts the fewest pairs of friends together?",
      question: "Which is true?",
      choices: ["A is a decision problem and B is an optimization problem.", "A is an optimization problem and B is a decision problem.", "A and B are both decision problems.", "A and B are both optimization problems."],
      why: [
        "A has a yes or no answer. B asks for the best chart by some measure.",
        "These are reversed. A yes or no question is a decision problem.",
        "B asks for the best chart, not for yes or no.",
        "A asks for yes or no, not for the best chart.",
      ],
      answer: 0,
    },
    // ================================================================ sim
    {
      id: "bi3-73", skill: "sim", type: "mcq", difficulty: "easy", opens: "2027-04-20",
      code: `x ← RANDOM(3, 8)`,
      question: "Which values can x hold?",
      choices: ["3, 4, 5, 6, 7, or 8", "4, 5, 6, or 7", "3, 4, 5, 6, or 7", "Any number from 3 to 8, decimals too"],
      why: [
        "RANDOM(a, b) gives a whole number from a to b, and both ends are included.",
        "Both ends are included, so 3 and 8 are possible too.",
        "The upper end is included, so 8 is possible.",
        "RANDOM gives only whole numbers.",
      ],
      answer: 0,
    },
    {
      id: "bi3-74", skill: "sim", type: "mcq", difficulty: "difficult", opens: "2027-04-20",
      stem: "A board game rolls two six-sided dice and adds them.",
      question: "Which expression simulates the total?",
      choices: ["RANDOM(1, 6) + RANDOM(1, 6)", "RANDOM(2, 12)", "2 * RANDOM(1, 6)", "RANDOM(1, 12)"],
      why: [
        "Each RANDOM(1, 6) is one die, so 7 comes up most often, as with real dice.",
        "This makes every total from 2 to 12 equally likely, but with real dice 7 is six times as likely as 2.",
        "This doubles one die, so only even totals appear.",
        "Two dice can never total 1, and this makes all totals equally likely.",
      ],
      answer: 0,
    },
    {
      id: "bi3-75", skill: "sim", type: "mcq", difficulty: "easy", opens: "2027-04-20",
      stem: "In the dungeon crawler, a defeated monster drops a gem when the code below displays true.",
      code: `DISPLAY(RANDOM(1, 10) ≤ 3)`,
      question: "What is the chance that a monster drops a gem?",
      choices: ["30%", "20%", "33%", "3%"],
      why: [
        "3 of the 10 equally likely values (1, 2, and 3) make the test true, which is 30%.",
        "≤ includes 3, so three values count, not two.",
        "There are 10 values, not 9. 3 out of 10 is 30%.",
        "3 is the number of winning values. Out of 10, that is 30%.",
      ],
      answer: 0,
    },
    {
      id: "bi3-76", skill: "sim", type: "mcq", difficulty: "moderate", opens: "2027-04-20",
      stem: "A city simulates traffic at one intersection. The model uses the average number of cars that arrive each minute and the timing of the light.",
      question: "Which is a reason the results might differ from real life?",
      choices: ["The model leaves out events like crashes and road work.", "A simulation can be run as many times as needed.", "The model can change the light timing for free.", "Computers can run the model faster than real time."],
      why: [
        "A model simplifies the world, and what it leaves out can make its results differ from what really happens.",
        "Running many times is a benefit of simulation. It does not explain a difference from real life.",
        "Testing changes cheaply is a benefit. It does not make results less accurate.",
        "Speed is a benefit. It does not change how well the model matches reality.",
      ],
      answer: 0,
    },
    {
      id: "bi3-77", skill: "sim", type: "mcq", difficulty: "difficult", opens: "2027-04-20",
      stem: "Consider the following code segment.",
      code: `a ← RANDOM(1, 3)
b ← RANDOM(1, 3)
IF (a = b)
{
  DISPLAY(a * 10)
}
ELSE
{
  DISPLAY(a + b)
}`,
      question: "Which value can NOT be displayed?",
      choices: ["2", "10", "20", "30"],
      why: [
        "A sum of 2 needs a and b both to be 1, but equal values take the IF branch and display 10.",
        "a = 1 and b = 1 are equal, so the IF displays 1 * 10, which is 10.",
        "a = 2 and b = 2 are equal, so the IF displays 20.",
        "a = 3 and b = 3 are equal, so the IF displays 30.",
      ],
      answer: 0,
    },
    {
      id: "bi3-78", skill: "sim", type: "mcq", difficulty: "easy", opens: "2027-04-20",
      stem: "Engineers want to know how a new bridge design holds up in a strong earthquake.",
      question: "Why would they use a computer simulation first?",
      choices: ["It tests dangerous events safely.", "It always gives the exact real-world result.", "It removes the need for any real data.", "It shows every detail of the real bridge."],
      why: [
        "A simulation lets people study events that would be unsafe, slow, or expensive to create for real.",
        "A simulation is a simplified model, so its results can differ from reality.",
        "A good simulation is built and checked with real data.",
        "A model leaves out details to stay simple, which is part of why it can be wrong.",
      ],
      answer: 0,
    },
    {
      id: "bi3-79", skill: "sim", type: "mcq", difficulty: "moderate", opens: "2027-04-20",
      stem: "A programmer finds a library procedure shuffle(aList). Its documentation says it returns a new list with the same items in a random order.",
      question: "Which is true?",
      choices: ["The programmer can use it from the documentation alone.", "The programmer must read its code before calling it.", "The programmer must rewrite it to use it.", "The library can only be used for simulations."],
      why: [
        "A library is procedural abstraction: the documentation says what the procedure does, and that is enough to use it.",
        "Documentation exists so that users do not need to read the code.",
        "A library procedure is called as it is, without being rewritten.",
        "Libraries hold procedures for many purposes, not only simulations.",
      ],
      answer: 0,
    },
    {
      id: "bi3-80", skill: "sim", type: "mcq", difficulty: "moderate", opens: "2027-04-20",
      stem: "The code simulates 100 coin flips.",
      code: `heads ← 0
REPEAT 100 TIMES
{
  IF (RANDOM(1, 2) = 1)
  {
    heads ← heads + 1
  }
}
DISPLAY(heads)`,
      question: "Which is true about what is displayed?",
      choices: ["It varies from run to run, and values near 50 are most common.", "It is always 50, because heads and tails are equally likely.", "It is always 0 or 100, because RANDOM is called once.", "It is always 1 or 2, because RANDOM returns 1 or 2."],
      why: [
        "RANDOM is called on each of the 100 passes, so the count changes between runs and clusters around 50.",
        "Equal chances make 50 the most likely count, but each run is random, so other counts happen.",
        "RANDOM is inside the loop, so it is called 100 times.",
        "The code displays heads, a count of passes, not one RANDOM result.",
      ],
      answer: 0,
    },
  ],
};

// AP CSP · spring mock quiz · Big Idea 3: Algorithms and Programming (AP pseudocode, exam reference sheet notation).
// None of these items, code segments, setups, or numbers is in the review deck csp-spring/bi3.js.
// Every code segment was run by an AP pseudocode interpreter (indexes from 1, an index out of range ends the program).
// In a multiple-choice item the right choice is always written first; the quiz spreads keys across A to D.

const ROBOT = "In the grid, . is an open square, # is a blocked square, and G is the goal square. The robot is drawn as ^, >, v, or <, pointing the way it faces. Rows are numbered from the top and columns from the left. If the robot is told to move onto a blocked square or off the grid, it stays where it is and the program ends.";

export default {
  form: true,
  items: [
    {
      id: "bi3m-01", skill: "pc-vars", type: "mcq", difficulty: "easy",
      stem: "Consider the following code segment.",
      code: `p ← 9
q ← p MOD 5
p ← p + q
q ← p * q
DISPLAY(q)`,
      question: "What is displayed?",
      choices: ["52", "36", "4", "13"],
      why: [
        "q is 9 MOD 5, which is 4. p becomes 13, and q becomes 13 * 4, which is 52.",
        "36 uses the old p, 9. The third line already changed p to 13.",
        "4 is q before the last line, which multiplies p by q.",
        "13 is the new p. The code displays q, which is p * q.",
      ],
      answer: 0,
    },
    {
      id: "bi3m-02", skill: "pc-vars", type: "mcq", difficulty: "easy",
      stem: "Consider the following code segment.",
      code: `m ← 6
n ← m
m ← m + n
n ← m - 1
m ← n * 2`,
      question: "What are the values of m and n after the code runs?",
      choices: ["m is 22 and n is 11", "m is 12 and n is 11", "m is 22 and n is 6", "m is 12 and n is 6"],
      why: [
        "n is 6 and m becomes 12. Then n is 12 minus 1, which is 11, and m is 11 * 2, which is 22.",
        "The last line changes m again, to n * 2, which is 22.",
        "n ← m - 1 changes n to 11. n is not tied to its first value.",
        "These are the values after the third line. Two more lines run after it.",
      ],
      answer: 0,
    },
    {
      id: "bi3m-03", skill: "pc-cond", type: "mcq", difficulty: "easy",
      stem: "The variable a holds 4, b holds 9, and c holds 4.",
      question: "Which expression evaluates to false?",
      choices: ["(a = c) AND (b < a)", "(a = c) OR (b < a)", "NOT (b < c)", "(a + c > b) OR (b MOD 3 = 0)"],
      why: [
        "a = c is true, but 9 < 4 is false, and AND needs both sides true.",
        "a = c is true, and OR needs only one true side.",
        "9 < 4 is false, and NOT makes it true.",
        "8 > 9 is false, but 9 MOD 3 is 0, so the OR is true.",
      ],
      answer: 0,
    },
    {
      id: "bi3m-04", skill: "pc-cond", type: "mcq", difficulty: "moderate",
      stem: "A theater charges 5 dollars for children under 12, 6 dollars for seniors age 65 and over, and 10 dollars for everyone else.",
      code: `IF (age < 12)
{
  price ← 5
}
ELSE
{
  IF (age > 65)
  {
    price ← 6
  }
  ELSE
  {
    price ← 10
  }
}`,
      question: "Which age shows that the code is wrong?",
      choices: ["65", "12", "11", "66"],
      why: [
        "A 65-year-old should pay 6, but 65 > 65 is false, so the code sets price to 10.",
        "12 is not under 12 and not over 65, so the price is 10, which is correct.",
        "11 < 12, so the price is 5, which is correct.",
        "66 > 65, so the price is 6, which is correct.",
      ],
      answer: 0,
    },
    {
      id: "bi3m-05", skill: "pc-proc", type: "mcq", difficulty: "difficult",
      stem: "Consider the following code segment.",
      code: `PROCEDURE adjust(x, y)
{
  IF (x > y)
  {
    RETURN(x - y)
  }
  RETURN(y - x + 1)
}
DISPLAY(adjust(adjust(2, 7), 5))`,
      question: "What is displayed?",
      choices: ["1", "6", "2", "-1"],
      why: [
        "The inner call returns 7 minus 2 plus 1, which is 6. Then adjust(6, 5) has 6 > 5, so it returns 1.",
        "6 is the inner call's result. It becomes x for the outer call.",
        "2 comes from swapping the arguments to adjust(5, 6). The inner result is the first argument, x.",
        "-1 is 5 minus 6. Since x is 6 and y is 5, the procedure returns x minus y.",
      ],
      answer: 0,
    },
    {
      id: "bi3m-06", skill: "pc-loops", type: "mcq", difficulty: "moderate",
      stem: "Consider the following code segment.",
      code: `a ← 1
b ← 1
REPEAT 5 TIMES
{
  c ← a + b
  a ← b
  b ← c
}
DISPLAY(b)`,
      question: "What is displayed?",
      choices: ["13", "8", "21", "6"],
      why: [
        "b takes the values 2, 3, 5, 8, and 13 over the five passes.",
        "8 is b after four passes. The loop runs five times.",
        "21 is b after six passes. The loop runs five times.",
        "6 adds 1 per pass. Each pass adds the two previous values, so b grows faster.",
      ],
      answer: 0,
    },
    {
      id: "bi3m-07", skill: "pc-loops", type: "mcq", difficulty: "difficult",
      stem: "Consider the following code segment.",
      code: `x ← 1
y ← 40
REPEAT UNTIL (x ≥ y)
{
  x ← x * 3
  y ← y - 5
}
DISPLAY(x)
DISPLAY(y)`,
      question: "What is displayed?",
      choices: ["27 25", "9 30", "81 20", "27 20"],
      why: [
        "After each pass (x, y) is (3, 35), (9, 30), and (27, 25). Then 27 ≥ 25 is true and the loop stops.",
        "9 ≥ 30 is false, so the loop runs another pass.",
        "The loop stops as soon as x ≥ y is true, at 27 and 25, before a fourth pass.",
        "x and y change in the same pass, so y is 25 when the loop stops.",
      ],
      answer: 0,
    },
    {
      id: "bi3m-08", skill: "pc-lists", type: "mcq", difficulty: "moderate",
      stem: "Consider the following code segment.",
      code: `bag ← ["gem", "coin", "bone"]
INSERT(bag, 1, "map")
APPEND(bag, "gem")
REMOVE(bag, 3)
DISPLAY(bag[3])
DISPLAY(LENGTH(bag))`,
      question: "What is displayed?",
      choices: ["bone 4", "coin 4", "gem 4", "bone 5"],
      why: [
        "bag becomes [map, gem, coin, bone], then [map, gem, coin, bone, gem]. REMOVE takes out coin, so bag[3] is bone and there are 4 items.",
        "coin was at index 3 when REMOVE ran, so it is gone.",
        "gem is at indexes 2 and 4. Index 3 holds bone.",
        "REMOVE takes one item out of five, which leaves 4.",
      ],
      answer: 0,
    },
    {
      id: "bi3m-09", skill: "pc-lists", type: "mcq", difficulty: "moderate",
      stem: "Consider the following code segment.",
      code: `vals ← [2, 5, 1, 4]
out ← []
sum ← 0
FOR EACH v IN vals
{
  sum ← sum + v
  APPEND(out, sum)
}
DISPLAY(out[LENGTH(out) - 1])`,
      question: "What is displayed?",
      choices: ["8", "12", "7", "1"],
      why: [
        "out holds running totals, [2, 7, 8, 12]. LENGTH(out) minus 1 is 3, and out[3] is 8.",
        "12 is the last item, at index 4. The code asks for index 3.",
        "7 is at index 2. The index used is 4 minus 1, which is 3.",
        "1 is vals[3]. The code reads from out, which holds running totals.",
      ],
      answer: 0,
    },
    {
      id: "bi3m-10", skill: "robot", type: "mcq", difficulty: "moderate",
      stem: ROBOT,
      code: `. # . .
. . . #
. # . G
^ . . .

MOVE_FORWARD()
MOVE_FORWARD()
ROTATE_RIGHT()
REPEAT UNTIL (NOT CAN_MOVE(forward))
{
  MOVE_FORWARD()
}
ROTATE_RIGHT()
MOVE_FORWARD()`,
      question: "Where does the robot end?",
      choices: ["Row 3, column 3, facing down", "Row 3, column 4, facing right", "Row 2, column 3, facing right", "Row 2, column 4, facing right"],
      why: [
        "The robot moves up to row 2, turns right, and stops at column 3 because column 4 is blocked. It turns to face down and moves one square.",
        "That is G. The loop stops in column 3, and the second ROTATE_RIGHT turns the robot to face down.",
        "This is where the loop stops. Then the robot turns to face down and moves to row 3.",
        "Row 2, column 4 is blocked, so the loop stops before it.",
      ],
      answer: 0,
    },
    {
      id: "bi3m-11", skill: "algo-build", type: "mcq", difficulty: "difficult",
      stem: "a and b hold numbers. Consider the original code and three other segments.",
      code: `Original
IF (a > b) { DISPLAY(a - b) }
ELSE { DISPLAY(b - a) }

Segment I
d ← a - b
IF (d < 0) { d ← 0 - d }
DISPLAY(d)

Segment II
IF (a < b) { DISPLAY(b - a) }
ELSE { DISPLAY(a - b) }

Segment III
IF (a > b) { DISPLAY(a - b) }
IF (b > a) { DISPLAY(b - a) }`,
      question: "Which segments display the same thing as the original for all values of a and b?",
      choices: ["I and II only", "II only", "II and III only", "I, II, and III"],
      why: [
        "Each displays how far apart a and b are. When they are equal, I and II display 0, just as the original does.",
        "I also works: d starts as a minus b, and when that is negative, 0 minus d makes it positive.",
        "When a = b, III displays nothing, while the original displays 0.",
        "III fails when a and b are equal, because neither test is true.",
      ],
      answer: 0,
    },
    {
      id: "bi3m-12", skill: "algo-search", type: "mcq", difficulty: "moderate",
      stem: "A binary search looks for 5 in the sorted list below. Each step looks at the middle item of the part still being searched, using index (low + high) / 2 rounded down.",
      code: `[4, 10, 15, 23, 31, 38, 42]`,
      question: "Which items does it look at before it reports that 5 is not in the list?",
      choices: ["23, 10, 4", "23, 4", "4, 10", "23, 15, 10, 4"],
      why: [
        "The middle of 7 items is 23. 5 is smaller, so the middle of indexes 1 to 3 is 10, then index 1 holds 4. Nothing is left after that.",
        "After 23, the middle of indexes 1 to 3 is index 2, which holds 10.",
        "Binary search starts in the middle, not at the front.",
        "Binary search jumps to the middle of what is left. It does not step through 15.",
      ],
      answer: 0,
    },
    {
      id: "bi3m-13", skill: "algo-search", type: "mcq", difficulty: "easy",
      stem: "A class has n students.",
      question: "Which task takes unreasonable time as n grows?",
      choices: ["Trying every group of students", "Comparing every pair of students", "Reading each student's name once", "Finding one name in a sorted roster"],
      why: [
        "There are 2ⁿ possible groups, so each added student doubles the work. That is exponential.",
        "The number of pairs grows like n², a polynomial, which is reasonable.",
        "This takes n steps, which is reasonable.",
        "Binary search takes about log n steps, which is reasonable.",
      ],
      answer: 0,
    },
    {
      id: "bi3m-14", skill: "algo-hard", type: "mcq", difficulty: "difficult",
      stem: "A robot starts at position 0 on a straight track and must visit stops at positions 3, 6, and -4. It always drives to the nearest stop it has not visited yet.",
      question: "How far does it drive, and is that the shortest possible total?",
      choices: ["16, and 14 is possible", "14, which is the shortest", "16, which is the shortest", "13, and a 10 route exists"],
      why: [
        "It drives 3 to stop 3, 3 more to stop 6, then 10 to stop -4, for 16. Going to -4 first gives 4 + 7 + 3, which is 14.",
        "14 is the best route, but the nearest stop first is 3, not -4, so the heuristic drives 16.",
        "Visiting -4 first, then 3, then 6 totals 14, which is shorter than 16.",
        "Any route covers the 10 from -4 to 6, plus at least 4 to reach one end first, so no route is shorter than 14.",
      ],
      answer: 0,
    },
    {
      id: "bi3m-15", skill: "sim", type: "mcq", difficulty: "moderate",
      stem: "A bus stop simulation adds a rider each minute when RANDOM(1, 4) = 1 is true.",
      question: "Which test makes riders arrive about twice as often?",
      choices: ["RANDOM(1, 4) ≤ 2", "RANDOM(1, 8) = 1", "RANDOM(2, 4) = 1", "RANDOM(1, 4) = 2"],
      why: [
        "2 of the 4 values pass, a 1 in 2 chance, which is twice the 1 in 4 chance.",
        "This is a 1 in 8 chance, half as often.",
        "RANDOM(2, 4) never gives 1, so no riders arrive.",
        "This is still 1 value out of 4, the same rate.",
      ],
      answer: 0,
    },
  ],
};

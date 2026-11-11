// AP CSP · Practice Exam 3, Part A (Mon 5/10) · 25 questions, 50 minutes
// Every pseudocode and computed key was traced in Python before it was written here.
// The right choice is always written first; the site spreads keys across A to D.

export default {
  form: true,
  items: [
    {
      id: "pe3a-01", skill: "bits", type: "mcq", difficulty: "easy",
      stem: "A seed library gives each of its 1,500 seed varieties its own binary code. Every code uses the same number of bits.",
      question: "What is the fewest bits each code can use?",
      choices: ["11", "10", "12", "750"],
      why: [
        "10 bits give 2^10 = 1,024 codes, which is too few. 11 bits give 2,048, which covers 1,500.",
        "10 bits give only 1,024 different codes, so 476 varieties would have no code.",
        "12 bits work, but 11 bits already give 2,048 codes, so 12 is not the fewest.",
        "Each added bit doubles the number of codes. 750 is half of 1,500, which mixes up bits with values.",
      ],
      answer: 0,
    },
    {
      id: "pe3a-02", skill: "pc-vars", type: "mcq", difficulty: "moderate",
      stem: "Consider the following code segment.",
      code: `a ← 17
b ← a MOD 5
a ← a - b * 3
b ← b + a MOD 4
DISPLAY(a)
DISPLAY(b)`,
      question: "What is displayed?",
      choices: ["11 5", "11 2", "45 3", "11 1"],
      why: [
        "17 MOD 5 is 2. Then a is 17 minus 6, which is 11. 11 MOD 4 is 3, so b becomes 2 plus 3, which is 5.",
        "b is assigned again on line 4, so it does not stay 2. It becomes 2 plus (11 MOD 4), which is 5.",
        "45 comes from (17 minus 2) times 3. Multiplication happens before subtraction, so a is 17 minus 6.",
        "1 comes from (2 plus 11) MOD 4. MOD happens before addition, so b is 2 plus 3.",
      ],
      answer: 0,
    },
    {
      id: "pe3a-03", skill: "crd-collab", type: "mcq", difficulty: "easy",
      stem: "Before writing any code, a student team building a bike-share app for its town talks with commuters, tourists, and parents who ride with small children about what they need.",
      question: "What is the main benefit of talking with these groups?",
      choices: [
        "The team learns needs it might miss",
        "The app will run faster on older phones",
        "The team will not need to test the app later",
        "The code will be free of syntax errors",
      ],
      why: [
        "People who use the app in different ways bring perspectives the team lacks, so their needs shape the design from the start.",
        "Talking with riders shapes what the app does. It does not change how fast the code runs.",
        "Early input does not replace testing. The finished app still has to be tested with users.",
        "Syntax errors come from breaking the language's rules. Talking with riders cannot prevent them.",
      ],
      answer: 0,
    },
    {
      id: "pe3a-04", skill: "internet", type: "mcq", difficulty: "moderate",
      stem: "A farm drone uploads 900 megabytes (MB) of field photos over a connection with a bandwidth of 60 megabits per second. One byte is 8 bits.",
      question: "About how long does the upload take, ignoring latency?",
      choices: ["120 seconds", "15 seconds", "1.9 seconds", "7,200 seconds"],
      why: [
        "900 megabytes is 900 times 8, which is 7,200 megabits. 7,200 divided by 60 megabits per second is 120 seconds.",
        "15 is 900 divided by 60. Bandwidth is in megabits, so the file's megabytes must be turned into megabits first.",
        "1.9 comes from dividing by 8 instead of multiplying by 8. A byte holds 8 bits, so there are more megabits than megabytes.",
        "7,200 is the file's size in megabits, not a time. It still has to be divided by 60 megabits per second.",
      ],
      answer: 0,
    },
    {
      id: "pe3a-05", skill: "robot", type: "mcq", difficulty: "easy",
      stem: "The robot (▶) starts in row 5, column 1, facing right. Each . is an open square, and every square is open.",
      code: `    1 2 3 4 5
1   . . . . .
2   . . . . .
3   . . . . .
4   . . . . .
5   ▶ . . . .

REPEAT 2 TIMES
{
  MOVE_FORWARD()
  MOVE_FORWARD()
  ROTATE_LEFT()
  MOVE_FORWARD()
}`,
      question: "Where does the robot end, and which way does it face?",
      choices: [
        "Row 2, column 2, facing left",
        "Row 2, column 3, facing left",
        "Row 4, column 3, facing up",
        "Row 2, column 2, facing up",
      ],
      why: [
        "Pass 1 moves right to column 3, turns to face up, and moves to row 4. Pass 2 moves up to row 2, turns to face left, and moves to column 2.",
        "The last command in each pass is a move, so after turning left in row 2 the robot moves on to column 2.",
        "Row 4, column 3 is where the robot is after one pass. The loop runs twice.",
        "The second ROTATE_LEFT turns the robot from facing up to facing left before its last move.",
      ],
      answer: 0,
    },
    {
      id: "pe3a-06", skill: "copyright", type: "mcq", difficulty: "moderate",
      stem: "A student remixes a drawing licensed CC BY-SA (Creative Commons Attribution, ShareAlike) into a new poster and wants to post the poster online.",
      question: "What does the license require?",
      choices: [
        "Credit the artist and share the poster under CC BY-SA",
        "Credit the artist, and any license may be used",
        "Nothing, since remixing makes the poster a new work",
        "Pay the artist before the poster can be posted",
      ],
      why: [
        "BY requires credit to the creator, and SA (ShareAlike) requires the new work to carry the same license.",
        "BY is met by the credit, but SA limits the poster to the same CC BY-SA license.",
        "A remix is built on the drawing, so the drawing's license terms still apply to it.",
        "Creative Commons licenses grant use for free as long as the terms are followed.",
      ],
      answer: 0,
    },
    {
      id: "pe3a-07", skill: "pc-cond", type: "mcq", difficulty: "difficult",
      stem: "A harbor app sets safe with the following statement.",
      code: `safe ← NOT (wind > 40 OR waves ≥ 3)`,
      question: "Which statement always gives safe the same value?",
      choices: [
        "safe ← (wind ≤ 40) AND (waves < 3)",
        "safe ← (wind ≤ 40) OR (waves < 3)",
        "safe ← (wind < 40) AND (waves ≤ 3)",
        "safe ← (wind ≤ 40) AND (waves ≤ 3)",
      ],
      why: [
        "NOT (A OR B) is the same as (NOT A) AND (NOT B). The opposite of wind > 40 is wind ≤ 40, and the opposite of waves ≥ 3 is waves < 3.",
        "With OR, wind 50 and waves 1 gives true, but the original gives false because the wind is over 40. NOT turns the OR into AND.",
        "wind 30 and waves 3 gives true here, but the original gives false because waves ≥ 3. The opposite of > is ≤, and the opposite of ≥ is <.",
        "waves 3 gives true here, but in the original waves ≥ 3 makes safe false. The opposite of waves ≥ 3 is waves < 3.",
      ],
      answer: 0,
    },
    {
      id: "pe3a-08", skill: "compression", type: "mcq", difficulty: "moderate",
      stem: "A sprite editor stores each row of pixels with run-length encoding: each run of one color becomes its length and then its letter. For example, GGGRR becomes 3G2R.",
      question: "For which row is the encoded version LONGER than the row itself?",
      choices: ["GBGBGRRG", "GGGBBBRRR", "GGGGGGGGBB", "RRGGGGBBBB"],
      why: [
        "The row has 7 runs, most of length 1, so it encodes as 1G1B1G1B1G2R1G. That is 14 characters for an 8 pixel row.",
        "Three runs of 3 encode as 3G3B3R, which is 6 characters for 9 pixels.",
        "Two long runs encode as 8G2B, which is 4 characters for 10 pixels.",
        "Three runs encode as 2R4G4B, which is 6 characters for 10 pixels.",
      ],
      answer: 0,
    },
    {
      id: "pe3a-09", skill: "crd-errors", type: "mcq", difficulty: "moderate",
      stem: "skipFirst is meant to return the sum of every value in nums except the first one. nums always has at least two values.",
      code: `PROCEDURE skipFirst(nums)
{
  sum ← 0
  i ← 2
  REPEAT LENGTH(nums) - 2 TIMES
  {
    sum ← sum + nums[i]
    i ← i + 1
  }
  RETURN(sum)
}`,
      question: "Which call shows that the procedure has an error?",
      choices: [
        "skipFirst([2, 4, 6])",
        "skipFirst([4, 6, 0])",
        "skipFirst([7, 0])",
        "skipFirst([3, 5, 2, 0])",
      ],
      why: [
        "The loop runs one time too few, so it never adds the last value. The call should return 10 but returns 4.",
        "The skipped last value is 0, so the call still returns the right sum, 6.",
        "The loop runs 0 times and returns 0, which is right because the only value after the first is 0.",
        "The loop adds 5 and 2 and skips the last value, 0, so it returns 7, which is right.",
      ],
      answer: 0,
    },
    {
      id: "pe3a-10", skill: "attacks", type: "mcq", difficulty: "moderate",
      stem: "A student installs a free flashlight app. It works as a flashlight, but it also quietly sends the phone's contact list to an unknown server. It does not copy itself into other apps or files.",
      question: "Which best describes the flashlight app?",
      choices: [
        "Malware hidden inside a useful app",
        "A virus that spreads to other files",
        "A phishing email asking for data",
        "A rogue Wi-Fi access point",
      ],
      why: [
        "Malware is software meant to harm a device or its user. This app hides a harmful action behind a useful feature.",
        "A virus copies itself into other programs or files, and this app does not.",
        "Phishing tricks a person into giving up information, often by email. This app takes the data without asking.",
        "A rogue access point is a fake wireless network. The flashlight app is a program on the phone.",
      ],
      answer: 0,
    },
    {
      id: "pe3a-11", skill: "pc-loops", type: "mcq", difficulty: "moderate",
      stem: "Consider the following code segment.",
      code: `n ← 1
count ← 0
REPEAT UNTIL (n > 50)
{
  n ← n * 3 - 1
  count ← count + 1
}
DISPLAY(count)
DISPLAY(n)`,
      question: "What is displayed?",
      choices: ["5 122", "4 41", "5 41", "6 365"],
      why: [
        "n goes 1, 2, 5, 14, 41, 122. The loop stops once n is 122, after 5 passes.",
        "After 4 passes n is 41, but 41 > 50 is false, so the loop runs once more.",
        "count is 5, but n is updated on the fifth pass too, from 41 to 122.",
        "The condition is checked before each pass. Once n is 122 the loop stops, so 365 is never reached.",
      ],
      answer: 0,
    },
    {
      id: "pe3a-12", skill: "limits", type: "mcq", difficulty: "moderate",
      stem: "A scoreboard stores each team's score as a 6-bit unsigned whole number. A team has 58 points and scores 9 more.",
      question: "Which best describes what happens?",
      choices: [
        "An overflow error, since 6 bits hold at most 63",
        "A roundoff error, since 67 is not exact in binary",
        "No error, since 6 bits hold values up to 64",
        "No error, since 67 is less than 2 to the 7th power",
      ],
      why: [
        "6 bits give 2^6 = 64 values, 0 to 63. A sum of 67 needs 7 bits, which causes an overflow error.",
        "Whole numbers are stored exactly in binary. Roundoff errors happen with real numbers such as 0.1.",
        "6 bits give 64 different values, but they start at 0, so the largest is 63.",
        "2^7 would matter for 7 bits. This scoreboard uses 6 bits, so the limit is 63.",
      ],
      answer: 0,
    },
    {
      id: "pe3a-13", skill: "ip-routing", type: "mcq", difficulty: "difficult",
      stem: "In a small network, each line below is a direct connection between two devices.",
      code: `A ↔ B     A ↔ C
B ↔ D     C ↔ D
C ↔ E     D ↔ F
E ↔ F`,
      question: "Which pair of failed connections would leave A with no path to F?",
      choices: [
        "C to E and D to F",
        "A to B and C to D",
        "B to D and C to E",
        "C to D and E to F",
      ],
      why: [
        "Every path into F uses D to F or E to F. With D to F gone, F is reached only through E, and E connects only to C and F, so losing C to E cuts F off.",
        "A still reaches F along A, C, E, F.",
        "A still reaches F along A, C, D, F.",
        "A still reaches F along A, B, D, F.",
      ],
      answer: 0,
    },
    {
      id: "pe3a-14", skill: "pc-proc", type: "mcq", difficulty: "moderate",
      stem: "Consider the following code segment.",
      code: `PROCEDURE shift(code, k)
{
  RETURN((code + k) MOD 26)
}

x ← shift(23, 5)
y ← shift(x, shift(4, 24))
DISPLAY(y)`,
      question: "What is displayed?",
      choices: ["4", "2", "56", "0"],
      why: [
        "shift(23, 5) is 28 MOD 26, which is 2. shift(4, 24) is also 2. Then shift(2, 2) is 4.",
        "2 is the value of x, and also of shift(4, 24). y is shift(2, 2), which is 4.",
        "56 is 23 plus 5 plus 4 plus 24 with no MOD. Each call applies MOD 26 to its sum.",
        "0 is shift(2, 24), which uses 24 as k. The second argument is the result of shift(4, 24), which is 2.",
      ],
      answer: 0,
    },
    {
      id: "pe3a-15", skill: "innovations", type: "mcq", difficulty: "easy",
      stem: "Read the passage. A ferry line launched TideTap, a phone app that replaces paper tickets. Riders show a QR code on their phone at the dock. The app stores each rider's name, payment card, and every trip, and it uses the phone's GPS during crossings to show arrival times. The ferry line will stop selling paper tickets next year.",
      question: "Which is a harmful effect of TideTap that its designers most likely did not intend?",
      choices: [
        "A rider whose phone dies at the dock cannot board",
        "Riders see arrival times while they cross",
        "The ferry line prints far fewer paper tickets",
        "The ferry line learns which crossings are busiest",
      ],
      why: [
        "The ticket lives only on the phone, so a dead battery means no ticket. The designers built the app to help riders, so this harm is unintended.",
        "Showing arrival times is a benefit the app was built to give.",
        "Printing fewer tickets is a benefit and a planned result of replacing them.",
        "Trip records were meant to give the ferry line this information. It is an intended effect.",
      ],
      answer: 0,
    },
    {
      id: "pe3a-16", skill: "privacy", type: "mcq", difficulty: "moderate",
      stem: "TideTap is a ferry ticket app that stores each rider's name, payment card, every trip, and GPS location during crossings. The ferry line sells trip records with names and card numbers removed.",
      question: "Why could a buyer still identify some riders?",
      choices: [
        "Trip times and docks can be matched with other data sets",
        "Removing names also removes any data about trips",
        "QR codes contain each rider's home address",
        "GPS works only when a rider's name is attached",
      ],
      why: [
        "A rider who leaves the same dock at 7:10 every weekday leaves a pattern. Combining that pattern with other data, such as photos or posts, can point to one person.",
        "The trips are what the buyer pays for. Removing names leaves the trip data in place.",
        "The passage does not say the QR code holds an address. It is a ticket shown at the dock.",
        "GPS records location whether or not a name is attached to the data.",
      ],
      answer: 0,
    },
    {
      id: "pe3a-17", skill: "divide", type: "mcq", difficulty: "moderate",
      stem: "TideTap is a ferry ticket app that replaces paper tickets. Next year the ferry line will stop selling paper tickets.",
      question: "How could ending paper tickets widen the digital divide?",
      choices: [
        "Riders without a smartphone lose an easy way to ride",
        "Riders with new phones get faster GPS readings",
        "The app's servers need more electricity",
        "Paper tickets cost the ferry line more to print",
      ],
      why: [
        "The digital divide is the gap between people who have access to computing devices and the Internet and people who do not. Requiring a smartphone shuts out riders on the wrong side of that gap.",
        "A small speed difference between phones does not keep anyone from using the service.",
        "Electricity use is an environmental effect, not a gap in who can get access to technology.",
        "Printing costs affect the ferry line's budget, not riders' access to technology.",
      ],
      answer: 0,
    },
    {
      id: "pe3a-18", skill: "data-use", type: "mcq", difficulty: "moderate",
      stem: "A birding club's data set has 2,000 rows. Each row is one sighting, with these columns: date, species, county, count of birds, and observer ID.",
      question: "Which question can NOT be answered using only this data set?",
      choices: [
        "Why did heron sightings drop in one county?",
        "Which county reported the most herons in May?",
        "How many observers reported at least one heron?",
        "On which date was the largest single count logged?",
      ],
      why: [
        "The data shows that sightings dropped, but nothing in the columns records a cause, such as weather or new buildings.",
        "Filter to herons in May, then total the count column for each county.",
        "Filter to herons, then count the different observer IDs.",
        "Find the largest value in the count column and read its date.",
      ],
      answer: 0,
    },
    {
      id: "pe3a-19", skill: "algo-search", type: "mcq", difficulty: "difficult",
      stem: "A sorted list of ferry ticket numbers grows from 600 numbers to 1,200 numbers.",
      question: "In the worst case, how does the number of items examined change for each search method?",
      choices: [
        "Binary search: 1 more. Linear search: 600 more.",
        "Binary search: 600 more. Linear search: 1 more.",
        "Binary search: 2 times as many. Linear search: 1 more.",
        "Both methods examine exactly twice as many.",
      ],
      why: [
        "Binary search halves the list each step, so doubling the list adds one step (10 to 11). Linear search may check every item, so it goes from 600 to 1,200.",
        "This switches the two methods. Linear search grows with the list's length, and binary search grows very slowly.",
        "Binary search does not double when the list doubles. One extra halving step handles twice as many items.",
        "Only linear search doubles. Binary search goes from 10 items examined to 11.",
      ],
      answer: 0,
    },
    {
      id: "pe3a-20", skill: "crypto", type: "mcq", difficulty: "moderate",
      stem: "A clinic sends lab results to a patient's phone app using public key encryption. The app made a key pair and gave the clinic its public key.",
      question: "Which key should the clinic use to encrypt the results so that only the app can read them?",
      choices: [
        "The app's public key",
        "The app's private key",
        "The clinic's private key",
        "The clinic's public key",
      ],
      why: [
        "A message encrypted with the app's public key can be decrypted only with the app's private key, which never leaves the app.",
        "The private key stays secret on the app. The clinic never has it, so it cannot use it.",
        "Anyone with the clinic's public key could decrypt this, so the results would not be private.",
        "Only the clinic's private key could decrypt this, so the app could not read the results.",
      ],
      answer: 0,
    },
    {
      id: "pe3a-21", skill: "pc-lists", type: "mcq", difficulty: "difficult",
      stem: "Consider the following code segment.",
      code: `vals ← [10, 20, 30, 40, 50]
j ← 2
REPEAT 2 TIMES
{
  REMOVE(vals, j)
  APPEND(vals, vals[j])
  j ← j + 1
}
DISPLAY(vals)`,
      question: "What is displayed?",
      choices: ["[10, 30, 50, 30, 50]", "[10, 30, 40, 50, 30]", "[10, 30, 50, 20, 40]", "[10, 40, 50, 30, 40]"],
      why: [
        "Pass 1 removes 20, so 30 slides to index 2 and is appended: [10, 30, 40, 50, 30]. Pass 2 removes 40 at index 3, so 50 slides there and is appended.",
        "This is the list after one pass. The loop runs twice, so j becomes 3 and a second item is removed and copied.",
        "This appends the removed values, 20 and 40. APPEND runs after REMOVE, so it copies the item that slid into index j.",
        "This removes at index 2 both times. j goes up by 1 after the first pass, so the second REMOVE uses index 3.",
      ],
      answer: 0,
    },
    {
      id: "pe3a-22", skill: "bigdata", type: "mcq", difficulty: "moderate",
      stem: "A music service picks which new songs to promote to all of its listeners using data on what its users stream. Most of its users are 15 to 25 years old.",
      question: "Which is the most likely problem with this approach?",
      choices: [
        "Songs older listeners like may be overlooked",
        "Too many streams will overflow its storage",
        "Song choices cannot be stored as digital data",
        "Streaming data is always less accurate than surveys",
      ],
      why: [
        "The data reflects who uses the service, not all listeners. Older listeners stream little on it, so their tastes barely show up in the data.",
        "Stream records are small, and the service's storage can easily hold them. The problem is who is missing from the data.",
        "Each stream is recorded as data, such as the song, the user, and the time.",
        "Nothing suggests surveys are more accurate. The issue is which listeners are underrepresented.",
      ],
      answer: 0,
    },
    {
      id: "pe3a-23", skill: "parallel", type: "mcq", difficulty: "difficult",
      stem: "Five independent tasks take 48, 36, 30, 22, and 14 seconds. They run in parallel on two processors. Each task runs on one processor from start to finish, and a processor runs one task at a time.",
      question: "What is the least total time needed to finish all five tasks?",
      choices: ["78 seconds", "75 seconds", "48 seconds", "150 seconds"],
      why: [
        "The best split is 48 and 30 on one processor (78 seconds) and 36, 22, and 14 on the other (72 seconds). The run ends when the slower processor finishes.",
        "75 is half of 150, but no group of these tasks adds to exactly 75. The closest split leaves one processor at 78.",
        "48 seconds would need the other four tasks, 102 seconds of work, to finish in 48 seconds on one processor.",
        "150 seconds is the time on one processor. Two processors share the work.",
      ],
      answer: 0,
    },
    {
      id: "pe3a-24", skill: "algo-hard", type: "mcq", difficulty: "moderate",
      stem: "A coach splits 40 players into two teams whose total skill ratings should be as close as possible. Checking every possible split would take far too long, so a program gives each player, strongest first, to the team with the lower total so far.",
      question: "Which statement about the program's approach is true?",
      choices: [
        "It is a heuristic that may not find the closest split",
        "It always finds the closest split, one player at a time",
        "It is needed because the problem is undecidable",
        "Checking every split of 40 players is reasonable time",
      ],
      why: [
        "This shortcut is a heuristic: it finds a good split quickly, but an early choice can leave a gap that later players cannot close.",
        "Making the best choice for each player does not guarantee the best overall split.",
        "An algorithm can find the closest split by checking every split. The problem is decidable but takes unreasonable time.",
        "The number of possible splits grows exponentially with the number of players, so 40 players give far more splits than any computer can check.",
      ],
      answer: 0,
    },
    {
      id: "pe3a-25", skill: "sim", type: "mcq", difficulty: "difficult",
      stem: "A weather simulation should make each day rainy 15% of the time.",
      question: "Which statement sets rain to true with a probability of exactly 15%?",
      choices: [
        "rain ← RANDOM(1, 20) ≤ 3",
        "rain ← RANDOM(1, 20) < 3",
        "rain ← RANDOM(1, 100) < 15",
        "rain ← RANDOM(0, 20) ≤ 3",
      ],
      why: [
        "RANDOM(1, 20) gives 20 equally likely values. 1, 2, and 3 are 3 of them, and 3 out of 20 is 15%.",
        "< 3 allows only 1 and 2, which is 2 out of 20, or 10%.",
        "< 15 allows 1 to 14, which is 14 out of 100, or 14%.",
        "RANDOM(0, 20) gives 21 values. 0 to 3 are 4 of them, and 4 out of 21 is about 19%.",
      ],
      answer: 0,
    },
  ],
};

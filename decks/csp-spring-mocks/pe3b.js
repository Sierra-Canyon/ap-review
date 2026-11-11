// AP CSP · Practice Exam 3, Part B (Wed 5/12) · 25 questions, 50 minutes
// Every pseudocode and computed key was traced in Python before it was written here.
// The right choice is always written first; the site spreads keys across A to D.

export default {
  form: true,
  items: [
    {
      id: "pe3b-01", skill: "crd-purpose", type: "mcq", difficulty: "easy",
      stem: "A museum kiosk draws a floor map on its screen. When a visitor taps a room on the map, the kiosk looks up that room's exhibits and lists them below the map.",
      question: "Which of these is an event?",
      choices: [
        "A visitor tapping a room on the map",
        "The exhibit list shown below the map",
        "Looking up the room's exhibits",
        "Drawing the map on the screen",
      ],
      why: [
        "An event is an action that starts part of a program running. The tap triggers the lookup.",
        "The list on screen is an output, which the program produces.",
        "The lookup is code that runs in response to the tap, not the event itself.",
        "Drawing the map is output the program produces before any tap.",
      ],
      answer: 0,
    },
    {
      id: "pe3b-02", skill: "pc-cond", type: "mcq", difficulty: "difficult",
      stem: "A science museum computes ticket prices with this procedure.",
      code: `PROCEDURE price(age, isMember)
{
  IF (age < 12)
  {
    cost ← 2
  }
  ELSE
  {
    IF (isMember AND age ≥ 65)
    {
      cost ← 3
    }
    ELSE
    {
      IF (isMember)
      {
        cost ← 5
      }
      ELSE
      {
        cost ← 8
      }
    }
  }
  RETURN(cost)
}

DISPLAY(price(70, false) + price(11, true) + price(40, true))`,
      question: "What is displayed?",
      choices: ["15", "10", "18", "8"],
      why: [
        "price(70, false) is 8 because a visitor who is not a member pays full price at any age. price(11, true) is 2, and price(40, true) is 5. 8 plus 2 plus 5 is 15.",
        "10 gives the 70 year old the 3 dollar price, but that needs isMember to be true as well.",
        "18 gives the 11 year old the member price of 5. The age < 12 test comes first, so the cost is 2.",
        "8 treats AND as OR, which gives both the 70 year old and the 40 year old member the 3 dollar price.",
      ],
      answer: 0,
    },
    {
      id: "pe3b-03", skill: "bits", type: "mcq", difficulty: "difficult",
      stem: "Three values are written in different number bases: binary 10011100, decimal 150, and binary 10010111.",
      question: "Which list puts them in order from least to greatest?",
      choices: [
        "decimal 150, binary 10010111, binary 10011100",
        "binary 10010111, decimal 150, binary 10011100",
        "binary 10010111, binary 10011100, decimal 150",
        "decimal 150, binary 10011100, binary 10010111",
      ],
      why: [
        "10010111 is 128 plus 16 plus 4 plus 2 plus 1, which is 151. 10011100 is 128 plus 16 plus 8 plus 4, which is 156. So 150, then 151, then 156.",
        "10010111 is 151, which is greater than 150.",
        "Both binary values are over 150: they are 151 and 156.",
        "10011100 is 156 and 10010111 is 151, so this list has the binary values in the wrong order.",
      ],
      answer: 0,
    },
    {
      id: "pe3b-04", skill: "pc-loops", type: "mcq", difficulty: "moderate",
      stem: "Consider the following code segment.",
      code: `x ← 0
y ← 0
REPEAT UNTIL (x > 12)
{
  y ← y + 1
  x ← x + y
}
DISPLAY(y)
DISPLAY(x)`,
      question: "What is displayed?",
      choices: ["5 15", "4 10", "15 5", "6 21"],
      why: [
        "y counts 1, 2, 3, 4, 5, and x adds each one: 1, 3, 6, 10, 15. Then 15 > 12 is true and the loop stops.",
        "After four passes x is 10, and 10 > 12 is false, so the loop runs a fifth time.",
        "These are the right values in the wrong order. The code displays y first, then x.",
        "The test is checked before each pass. Once x is 15, the loop stops before a sixth pass.",
      ],
      answer: 0,
    },
    {
      id: "pe3b-05", skill: "packets-web", type: "mcq", difficulty: "moderate",
      stem: "A video call app sends its audio and video using UDP instead of TCP.",
      question: "Which is the most likely reason?",
      choices: [
        "Resent packets would come too late",
        "UDP checks that every packet arrives in order",
        "TCP cannot send audio or video data",
        "UDP packets do not need IP addresses",
      ],
      why: [
        "TCP resends lost packets and puts them in order, which adds delay. In a live call, a missing slice of sound is better than a late one, so UDP's speed is worth an occasional loss.",
        "Checking order and delivery is what TCP does. UDP sends packets without those checks.",
        "TCP can carry any kind of data, including audio and video files.",
        "UDP packets still use IP addresses to be routed to the right device.",
      ],
      answer: 0,
    },
    {
      id: "pe3b-06", skill: "pc-lists", type: "mcq", difficulty: "difficult",
      stem: "Consider the following code segment.",
      code: `src ← [3, 8, 5, 10, 6]
out ← []
FOR EACH n IN src
{
  IF (n MOD 2 = 0)
  {
    INSERT(out, 1, n)
  }
  ELSE
  {
    APPEND(out, n)
  }
}
DISPLAY(out)`,
      question: "What is displayed?",
      choices: [
        "[6, 10, 8, 3, 5]",
        "[8, 10, 6, 3, 5]",
        "[3, 5, 6, 10, 8]",
        "[6, 10, 8, 5, 3]",
      ],
      why: [
        "Even values go to the front and odd values go to the end. out becomes [3], [8, 3], [8, 3, 5], [10, 8, 3, 5], then [6, 10, 8, 3, 5].",
        "Each even value is inserted at index 1, ahead of the even values already there, so the evens end up in reverse order.",
        "APPEND puts the odd values at the end, and INSERT at index 1 puts the even values at the front.",
        "The odd values are appended, so they keep their order: 3, then 5.",
      ],
      answer: 0,
    },
    {
      id: "pe3b-07", skill: "text-analog", type: "mcq", difficulty: "moderate",
      stem: "A wearable heart monitor records sound by taking 4,000 samples per second. Each sample is stored with 12 bits. One byte is 8 bits.",
      question: "How many bytes does one minute of recording take?",
      choices: ["360,000", "2,880,000", "6,000", "48,000"],
      why: [
        "4,000 samples times 12 bits is 48,000 bits per second. Times 60 seconds is 2,880,000 bits, and divided by 8 that is 360,000 bytes.",
        "2,880,000 is the number of bits in a minute. It still has to be divided by 8 to get bytes.",
        "6,000 is the number of bytes in one second. A minute has 60 seconds.",
        "48,000 is the number of bits in one second, not the bytes in a minute.",
      ],
      answer: 0,
    },
    {
      id: "pe3b-08", skill: "pc-proc", type: "mcq", difficulty: "difficult",
      stem: "Consider the following code segment from a dungeon crawler.",
      code: `PROCEDURE boost(hp, potions)
{
  REPEAT potions TIMES
  {
    hp ← hp + hp MOD 7
  }
  RETURN(hp)
}

hp ← 10
result ← boost(hp, 3)
DISPLAY(hp)
DISPLAY(result)`,
      question: "What is displayed?",
      choices: ["10 24", "24 24", "10 19", "10 13"],
      why: [
        "Inside boost, hp goes 10, 13, 19, 24. The parameter hp is separate from the hp outside, so the outside hp stays 10.",
        "Changing the parameter inside the procedure does not change the variable passed in. Only result gets 24.",
        "19 is the value after two passes. REPEAT potions TIMES runs 3 times.",
        "13 is the value after one pass. REPEAT potions TIMES runs 3 times.",
      ],
      answer: 0,
    },
    {
      id: "pe3b-09", skill: "robot", type: "mcq", difficulty: "difficult",
      stem: "The robot (▲) starts in row 5, column 1, facing up. Each . is an open square and # is a blocked square. The robot cannot move into a blocked square or off the grid.",
      code: `    1 2 3 4 5
1   . . # . .
2   . . . . .
3   # . # . .
4   . . . # .
5   ▲ # . . .

REPEAT 6 TIMES
{
  IF (CAN_MOVE(forward))
  {
    MOVE_FORWARD()
  }
  ELSE
  {
    ROTATE_RIGHT()
  }
}`,
      question: "Where does the robot end, and which way does it face?",
      choices: [
        "Row 5, column 3, facing down",
        "Row 4, column 3, facing down",
        "Row 4, column 5, facing right",
        "Row 4, column 1, facing up",
      ],
      why: [
        "Pass 1 moves up to row 4. Pass 2 is blocked and turns right. Passes 3 and 4 move to column 3. Pass 5 is blocked and turns down, and pass 6 moves to row 5, column 3.",
        "This is where the robot is after five passes. The sixth pass finds the square below open and moves into it.",
        "Row 4, column 4 is blocked, so the robot can never reach column 5 along row 4.",
        "This is after the first pass only. The square above is blocked, so the next pass turns the robot right.",
      ],
      answer: 0,
    },
    {
      id: "pe3b-10", skill: "limits", type: "mcq", difficulty: "moderate",
      stem: "A game stores a player's position as a real number. Starting from 0, it adds 0.1 to the position ten times. A check of whether the position equals 1.0 then gives false.",
      question: "Which best explains this?",
      choices: [
        "Each 0.1 is stored inexactly in binary",
        "The position overflowed after the ten additions",
        "Real numbers are always rounded to whole numbers",
        "The = operator does not work on real numbers",
      ],
      why: [
        "0.1 has no exact binary form, so each addition carries a tiny roundoff error. The errors add up, and after ten additions the sum is just under 1.0.",
        "Overflow happens when a value is too large for its bits. 1.0 is a small number.",
        "If the position were rounded to a whole number, 0.1 would become 0 and the position would stay 0.",
        "= compares real numbers. It gives false because the stored sum is not exactly 1.0.",
      ],
      answer: 0,
    },
    {
      id: "pe3b-11", skill: "algo-build", type: "mcq", difficulty: "difficult",
      stem: "minIndex is meant to return the index of the smallest value in vals, which always has at least one value.",
      code: `PROCEDURE minIndex(vals)
{
  best ← 1
  i ← 2
  REPEAT UNTIL (i > LENGTH(vals))
  {
    IF (<MISSING CONDITION>)
    {
      best ← i
    }
    i ← i + 1
  }
  RETURN(best)
}`,
      question: "Which replacement for <MISSING CONDITION> makes the procedure work as intended?",
      choices: [
        "vals[i] < vals[best]",
        "vals[i] < best",
        "i < vals[best]",
        "vals[i] > vals[best]",
      ],
      why: [
        "best holds the index of the smallest value so far. When the value at i is less than the value at best, i becomes the new best.",
        "best is an index, not a value. For [9, 7], 7 < 1 is false, so it returns 1, the index of 9.",
        "i is an index, not a value. For [1, 5, 0], 2 < 1 and 3 < 1 are both false, so it returns 1 instead of 3.",
        "This keeps the index of the largest value, not the smallest.",
      ],
      answer: 0,
    },
    {
      id: "pe3b-12", skill: "compression", type: "mcq", difficulty: "easy",
      stem: "A music app offers two ways to download an album: Lossless, which uses lossless compression (40 MB), and Standard, which uses lossy compression (8 MB).",
      question: "Which statement is true?",
      choices: [
        "The Standard file cannot be restored exactly",
        "The Lossless file can be shrunk to 8 MB with no loss",
        "Lossy compression always makes a song sound worse",
        "Both files can be restored to the exact same sound",
      ],
      why: [
        "Lossy compression throws away some data for good, so the exact original sound cannot be rebuilt.",
        "Lossless compression can shrink a file only so far. Reaching 8 MB here took discarding data.",
        "Lossy compression often removes sounds the ear barely notices, so the song can sound about the same.",
        "Only the lossless file can be restored exactly. The lossy file has lost data.",
      ],
      answer: 0,
    },
    {
      id: "pe3b-13", skill: "crowd", type: "mcq", difficulty: "easy",
      stem: "Read the passage. A wildlife group runs PawPrint. It has 300 trail cameras in a national forest that upload photos to a website. Online volunteers label each photo with the animal it shows. The labeled photos trained a machine learning model, which now labels new photos on its own. Most cameras are near hiking trails, because those spots are easiest to reach.",
      question: "Volunteers labeling photos online is an example of which practice?",
      choices: [
        "Citizen science",
        "Crowdfunding",
        "Open source software",
        "Data encryption",
      ],
      why: [
        "In citizen science, members of the public help with scientific research, often by collecting or labeling data.",
        "Crowdfunding raises money from many people. The volunteers give time, not money.",
        "Open source software is code that anyone may view and change. Labeling photos is not writing code.",
        "Encryption hides data from people who lack a key. Labeling adds information to the photos.",
      ],
      answer: 0,
    },
    {
      id: "pe3b-14", skill: "mlbias", type: "mcq", difficulty: "difficult",
      stem: "PawPrint trains a machine learning model on volunteer-labeled photos from trail cameras, most of which are near hiking trails. The model often mislabels animals that avoid trails and come out mostly at night.",
      question: "Which best explains the mislabeling?",
      choices: [
        "Few training photos show those animals",
        "The volunteers labeled far too many photos",
        "Machine learning cannot handle dark images",
        "The model was written with a syntax error",
      ],
      why: [
        "A model learns from its training data. Cameras near trails captured few animals that avoid trails, so the model had few examples of them.",
        "More labeled photos usually help a model. The problem is which animals the photos show.",
        "Models can learn from dark images when they are trained on enough of them.",
        "A syntax error stops a program from running. This model runs but gives biased results.",
      ],
      answer: 0,
    },
    {
      id: "pe3b-15", skill: "bigdata", type: "mcq", difficulty: "moderate",
      stem: "PawPrint's 300 trail cameras upload photos that volunteers once labeled by hand. Uploads grew to 2 million photos a year, and PawPrint switched to a machine learning model to label them.",
      question: "Which is the most likely reason for the switch?",
      choices: [
        "Photos arrived faster than people could label them",
        "A model labels animals with no training data",
        "Volunteers cannot tell animals apart in photos",
        "Small data sets cannot be stored on computers",
      ],
      why: [
        "At 2 million photos a year, the data grew past what people could process. A model can label photos much faster than people.",
        "The model learned from photos that volunteers had already labeled. It needed training data.",
        "The volunteers' labels were good enough to train the model, so they could tell animals apart.",
        "Small data sets are easy to store. The problem was the large and growing amount of data.",
      ],
      answer: 0,
    },
    {
      id: "pe3b-16", skill: "protocols", type: "mcq", difficulty: "easy",
      stem: "A student builds a backyard weather station that posts its readings as a web page. It uses the Internet's open protocols, such as IP, TCP, and HTTP, instead of a protocol the student invented.",
      question: "Which is a benefit of this choice?",
      choices: [
        "Any web browser can show the readings",
        "The station can never be hacked",
        "The station needs no IP address",
        "The student owns the protocols it uses",
      ],
      why: [
        "Open protocols are published for anyone to use, so any browser that follows HTTP can request and show the station's page.",
        "Following open protocols does not make a device secure. Security depends on how the device is built and used.",
        "A device that uses IP needs an IP address to send and receive data.",
        "Open protocols are not owned by one person or company. Anyone may use them.",
      ],
      answer: 0,
    },
    {
      id: "pe3b-17", skill: "algo-build", type: "mcq", difficulty: "moderate",
      stem: "An algorithm is meant to report whether a list has any repeated value. It compares each value with the value right after it and reports \"repeat\" if any pair is equal.",
      question: "For which list does the algorithm give the wrong answer?",
      choices: [
        "[4, 9, 4, 2]",
        "[4, 4, 9, 2]",
        "[2, 4, 9, 7]",
        "[9, 2, 7, 7]",
      ],
      why: [
        "The two 4s are not next to each other, so no pair of neighbors is equal. The algorithm reports no repeat, but 4 appears twice.",
        "The two 4s are neighbors, so the algorithm finds them and reports a repeat, which is correct.",
        "No value repeats, and the algorithm finds no equal neighbors, which is correct.",
        "The two 7s are neighbors, so the algorithm reports a repeat, which is correct.",
      ],
      answer: 0,
    },
    {
      id: "pe3b-18", skill: "privacy", type: "mcq", difficulty: "moderate",
      stem: "A recipe site and a hiking gear site both load ads from the same ad company. The ad company places a third-party cookie in the browser when either site is visited.",
      question: "What can the ad company do with this cookie?",
      choices: [
        "Tell that one browser visited both",
        "Read every file saved on the computer",
        "Learn the user's password for each site",
        "Turn on the computer's camera remotely",
      ],
      why: [
        "The same cookie is sent back from both sites, so the ad company knows one browser visited both. Over many sites, this builds a profile of the person's interests.",
        "A cookie is a small piece of data the browser stores. It does not let a site read other files.",
        "Cookies hold data the site chose to store, not passwords typed on other sites.",
        "A cookie is data, not a program, so it cannot control hardware.",
      ],
      answer: 0,
    },
    {
      id: "pe3b-19", skill: "crd-design", type: "mcq", difficulty: "moderate",
      stem: "A student builds a budget app in small parts. The student writes the code to record an expense and tests it, then writes the code to total each week and tests it, and only then writes the code to draw a spending chart.",
      question: "Which development process does this describe?",
      choices: [
        "Incremental development",
        "Iterative development",
        "Crowdsourcing",
        "Pair programming",
      ],
      why: [
        "Incremental development breaks a program into small pieces and makes sure each one works before adding the next.",
        "Iterative development means revising a program through repeated cycles of testing and feedback. Here the student adds new pieces one at a time.",
        "Crowdsourcing gets help from many people online. One student is doing the work.",
        "Pair programming has two people at one computer. The student works alone.",
      ],
      answer: 0,
    },
    {
      id: "pe3b-20", skill: "parallel", type: "mcq", difficulty: "difficult",
      stem: "A program first runs a 30 second setup step that must finish before anything else. Then it runs 8 independent tasks of 25 seconds each. On one processor everything takes 230 seconds. With 3 processors, each task runs on one processor from start to finish.",
      question: "What is the speedup with 3 processors?",
      choices: ["About 2.2", "About 2.4", "About 3.0", "About 7.7"],
      why: [
        "The setup takes 30 seconds. The 8 tasks need 3 rounds on 3 processors (3, 3, then 2), or 75 seconds. 230 divided by 105 is about 2.2.",
        "2.4 assumes the 200 seconds of tasks split into exactly equal thirds. Whole tasks cannot be split, so one processor must run 3 of them.",
        "3 processors cannot give a speedup of 3, because the setup step runs on only one processor.",
        "7.7 is 230 divided by 30, which counts only the setup step.",
      ],
      answer: 0,
    },
    {
      id: "pe3b-21", skill: "crypto", type: "mcq", difficulty: "moderate",
      stem: "Multifactor authentication requires at least two different kinds of evidence: something the user knows, something the user has, and something the user is.",
      question: "Which login is NOT an example of multifactor authentication?",
      choices: [
        "A PIN and the answer to a security question",
        "A fingerprint scan and a PIN",
        "A password and a code from a key fob",
        "A face scan and a badge tapped on a reader",
      ],
      why: [
        "A PIN and a security answer are both something the user knows. Two of the same kind count as one factor.",
        "A fingerprint is something the user is, and a PIN is something the user knows.",
        "A password is something the user knows, and a key fob is something the user has.",
        "A face is something the user is, and a badge is something the user has.",
      ],
      answer: 0,
    },
    {
      id: "pe3b-22", skill: "algo-hard", type: "mcq", difficulty: "moderate",
      stem: "A computer science teacher wants an autograder that can check any student program on any test input and flag any program that would get stuck in a loop and never finish.",
      question: "Which statement about this autograder is true?",
      choices: [
        "No algorithm can do this correctly for every program",
        "It works if it runs each program for one hour first",
        "It works for every program on a fast enough computer",
        "It is an optimization problem with no best answer",
      ],
      why: [
        "This is the halting problem, which is undecidable: no algorithm gives a correct yes or no for every program and input.",
        "A program that has not stopped after an hour might stop after two hours, so the autograder could still be wrong.",
        "Undecidable problems cannot be solved by any algorithm, no matter how fast the computer runs.",
        "The autograder answers yes or no, so it is a decision problem, not an optimization problem.",
      ],
      answer: 0,
    },
    {
      id: "pe3b-23", skill: "crd-errors", type: "mcq", difficulty: "easy",
      stem: "A procedure divides the sum of a list by LENGTH(list) to find the average. When it is called with an empty list, the program stops while running.",
      question: "What kind of error is this?",
      choices: [
        "A run-time error",
        "A syntax error",
        "An overflow error",
        "A logic error",
      ],
      why: [
        "The code runs until it divides by 0, which stops the program. An error that happens during execution is a run-time error.",
        "A syntax error breaks the language's rules and keeps the program from running at all. This program starts and runs.",
        "Overflow happens when a value is too large for its bits. Dividing by 0 is a different problem.",
        "A logic error gives a wrong result while the program keeps running. This program stops.",
      ],
      answer: 0,
    },
    {
      id: "pe3b-24", skill: "attacks", type: "mcq", difficulty: "easy",
      stem: "An email reads: \"Your library card expires today. Confirm your card number and birth date at libary-renewal.net to keep borrowing.\"",
      question: "Which detail is the strongest sign that this email is phishing?",
      choices: [
        "The link is a misspelled address",
        "The email mentions a library card",
        "The email is written in English",
        "The message has two sentences",
      ],
      why: [
        "\"libary\" is a lookalike of \"library,\" a common trick to send readers to a fake site that collects personal data.",
        "Real libraries send emails about cards too. The topic alone is not a warning sign.",
        "The language of an email says nothing about whether it is a scam.",
        "A short message is not a sign of phishing. The fake link and the request for personal data are.",
      ],
      answer: 0,
    },
    {
      id: "pe3b-25", skill: "copyright", type: "mcq", difficulty: "moderate",
      stem: "A student finds a dice-rolling library released under the MIT open source license. The license allows anyone to use, change, and share the code as long as the license notice is kept.",
      question: "What may the student do?",
      choices: [
        "Change it for a project and keep the license notice",
        "Use it only if none of the code is changed",
        "Remove the notice, since open source has no copyright",
        "Use it only in projects that are never sold",
      ],
      why: [
        "The license allows changes and sharing, as long as the notice stays. Crediting the source in comments is also good practice.",
        "The license allows changes, so the student does not have to use the code exactly as written.",
        "Open source code is still under copyright. The license grants permissions only if its terms, such as keeping the notice, are met.",
        "This license does not forbid selling. Limits on commercial use come from other licenses, such as CC NonCommercial.",
      ],
      answer: 0,
    },
  ],
};

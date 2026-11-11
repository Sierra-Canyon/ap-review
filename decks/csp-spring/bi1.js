// AP CSP · spring review · Big Idea 1: Creative Development
// Every pseudocode key was translated to Python and run before it was written here.
// In a multiple-choice item the right choice is always written first; the site shuffles them.

export default {
  items: [
    // ---------------------------------------------------------------- crd-collab
    {
      id: "bi1-01", skill: "crd-collab", type: "mcq", difficulty: "easy", opens: "2027-01-26",
      stem: "Two students use pair programming to write the combat code for their dungeon crawler.",
      question: "What is the navigator's job while the driver types?",
      choices: [
        "Review each line and plan the next steps",
        "Write a separate procedure on a second computer",
        "Test the finished program after the driver is done",
        "Type the code whenever the driver gets stuck",
      ],
      why: [
        "The navigator watches the code as it is written, catches mistakes, and thinks ahead about what comes next.",
        "Pair programming means two people on one piece of code. Working on separate code is dividing the work, not pairing.",
        "The navigator works during the coding, not after it. Catching errors as they are typed is the point of the role.",
        "The roles switch on a plan, not only when someone is stuck. While one is driving, the other reviews and plans.",
      ],
      answer: 0,
    },
    {
      id: "bi1-02", skill: "crd-collab", type: "mcq", difficulty: "moderate", opens: "2027-01-26",
      stem: "A team is building a bus schedule app for a city where many riders are over 70.",
      question: "Which action best brings in a perspective the team is missing?",
      choices: [
        "Have older riders try a draft and give feedback",
        "Add a second programmer who is the same age as the team",
        "Read online reviews of popular apps for young adults",
        "Ask each team member to rate the design from 1 to 10",
      ],
      why: [
        "Older riders are the users the team knows least about. Their feedback shows problems the team would not think of, such as small text.",
        "Someone like the current team adds hands, not a new point of view on what older riders need.",
        "Reviews from a different group of users say little about what riders over 70 need from this app.",
        "Ratings from the team repeat the team's own views. A missing perspective has to come from outside the team.",
      ],
      answer: 0,
    },
    {
      id: "bi1-03", skill: "crd-collab", type: "mcq", difficulty: "moderate", opens: "2027-01-26",
      question: "Which of the following is NOT a benefit of developing a program in a team?",
      choices: [
        "The program is sure to be free of errors",
        "Members catch mistakes in each other's code",
        "The program can reflect a wider range of ideas",
        "Large tasks can be divided among the members",
      ],
      why: [
        "No team can promise an error free program. Collaboration lowers the number of errors but does not remove them all.",
        "This is a benefit. A second reader often spots a bug the author missed.",
        "This is a benefit. People with different backgrounds suggest features and fixes one person would not.",
        "This is a benefit. Splitting the work lets the team finish more in the same time.",
      ],
      answer: 0,
    },
    {
      id: "bi1-04", skill: "crd-collab", type: "mcq", difficulty: "moderate", opens: "2027-01-26",
      stem: "Three students split their dungeon crawler: one writes the map, one writes the monsters, and one writes the inventory. Before anyone codes, they agree on each procedure's name, its parameters, and what it returns.",
      question: "What is the main reason for agreeing on these first?",
      choices: [
        "The separate parts will fit together when combined",
        "Each student can skip testing their own procedures",
        "The finished game will run faster on every computer",
        "No student will need to read another student's code",
      ],
      why: [
        "When everyone knows how each procedure is called and what it returns, code written apart can call each other's procedures without changes.",
        "Each part still needs testing. An agreement about names and parameters does not show the code inside is correct.",
        "Agreeing on names and parameters is about how the parts connect. It does not change how fast the game runs.",
        "Teammates still read each other's code to review it. The agreement makes combining easier, not reading unnecessary.",
      ],
      answer: 0,
    },
    {
      id: "bi1-05", skill: "crd-collab", type: "mcq", difficulty: "difficult", opens: "2027-01-26",
      stem: "A developer builds a recipe app and tests it only with five close friends who all cook the same kinds of food and use the same type of phone.",
      question: "What is the most likely problem with this testing plan?",
      choices: [
        "The app may not work well for people unlike the testers",
        "Five testers are too many for a small app to handle",
        "Friends cannot find errors because they know the developer",
        "The friends will make the app store reject the program",
      ],
      why: [
        "A narrow group of testers shares the same habits and devices, so problems that other users would hit stay hidden.",
        "Five testers is a small number. The trouble is that they are all alike, not that there are too many.",
        "Knowing the developer does not stop someone from finding errors. The issue is how similar the testers are.",
        "Who tests an app has nothing to do with whether a store accepts it. The risk is a design that fits only a few users.",
      ],
      answer: 0,
    },
    {
      id: "bi1-06", skill: "crd-collab", type: "mcq", difficulty: "easy", opens: "2027-01-26",
      question: "Which skill is most needed when two team members disagree about how a feature should work?",
      choices: [
        "Negotiating a solution",
        "Typing code more quickly",
        "Memorizing the program's procedures",
        "Choosing a faster programming language",
      ],
      why: [
        "Disagreements are settled by talking them through and reaching a choice both can accept. Collaboration depends on that kind of skill.",
        "Typing speed does not settle a disagreement about what a feature should do.",
        "Knowing the procedures by heart does not help two people agree on a design.",
        "The language a team uses does not resolve a difference of opinion about how a feature behaves.",
      ],
      answer: 0,
    },
    // ---------------------------------------------------------------- crd-purpose
    {
      id: "bi1-07", skill: "crd-purpose", type: "mcq", difficulty: "easy", opens: "2027-01-26",
      stem: "A student writes a program that reminds people when their library books are due.",
      question: "Which statement describes the program's purpose?",
      choices: [
        "To help people return their books on time",
        "To store each due date as a string in a list",
        "To display a message box when a date is reached",
        "To read the due dates from a file at startup",
      ],
      why: [
        "A program's purpose is the problem it solves or the reason it exists. This program exists to stop late returns.",
        "Storing dates in a list is how the program works inside, not why it exists.",
        "Showing a message box is part of what the program does when it runs, its function, not its purpose.",
        "Reading a file at startup is a step the program takes, not the problem it solves.",
      ],
      answer: 0,
    },
    {
      id: "bi1-08", skill: "crd-purpose", type: "mcq", difficulty: "moderate", opens: "2027-01-26",
      stem: "In a dungeon crawler, nothing happens until the player presses a key. Pressing an arrow key moves the hero, and pressing the space bar swings the sword.",
      question: "Which statement best describes how this program runs?",
      choices: [
        "Key presses are events that trigger specific code",
        "The program runs every line in order and then stops",
        "The program runs the same steps no matter which key is pressed",
        "The key presses are outputs that the program sends to the player",
      ],
      why: [
        "This is event driven programming: each key press is an event, and the code for that event runs when it happens.",
        "A program that runs top to bottom and stops would not wait for the player. This one responds to each key as it is pressed.",
        "Different keys run different code here. An arrow moves the hero and the space bar swings the sword.",
        "A key press comes from the player into the program, so it is an input, not an output.",
      ],
      answer: 0,
    },
    {
      id: "bi1-09", skill: "crd-purpose", type: "mcq", difficulty: "easy", opens: "2027-01-26",
      question: "A smart watch program tracks a runner's workouts. Which of the following is an input to the program?",
      choices: [
        "The heart rate read by a sensor",
        "A buzz on the wrist at each mile",
        "A chart of the week's distances",
        "A spoken message saying the pace",
      ],
      why: [
        "Data that comes into a program is input. A sensor reading of the heart rate is data the program receives.",
        "A buzz is something the program produces for the runner to feel, so it is a tactile output.",
        "A chart on the screen is something the program produces, a visual output.",
        "A spoken message is produced by the program, an audio output.",
      ],
      answer: 0,
    },
    {
      id: "bi1-10", skill: "crd-purpose", type: "mcq", difficulty: "moderate", opens: "2027-01-26",
      stem: "A weather app shows the current temperature. It gets that number by asking a weather service's program over the Internet.",
      question: "Which of the following is true about the temperature the app receives?",
      choices: [
        "It is an input, even though no person typed it",
        "It is an output, because it arrives over the Internet",
        "It is not an input, because inputs only come from users",
        "It is neither an input nor an output of the app",
      ],
      why: [
        "Input is any data sent to a program. It can come from a user, a sensor, a file, or another program, like this weather service.",
        "The temperature comes into the app, so it is input. It becomes output only when the app displays it.",
        "Inputs can come from other programs and devices, not only from people.",
        "The temperature is data sent to the app, which makes it an input.",
      ],
      answer: 0,
    },
    {
      id: "bi1-11", skill: "crd-purpose", type: "mcq", difficulty: "moderate", opens: "2027-01-26",
      question: "Which of the following is NOT an output of a program?",
      choices: [
        "A user tapping a button on the screen",
        "A phone vibrating when a timer ends",
        "A sound playing when a level is cleared",
        "A score shown on the screen after a game",
      ],
      why: [
        "A tap is something the user gives the program. That makes it an input, not an output.",
        "A vibration is produced by the program for the user to feel, so it is a tactile output.",
        "A sound produced by the program is an audio output.",
        "Text or numbers shown on a screen are visual output.",
      ],
      answer: 0,
    },
    {
      id: "bi1-12", skill: "crd-purpose", type: "mcq", difficulty: "difficult", opens: "2027-01-26",
      stem: "A parking app is described in four ways.",
      question: "Which description is about the program's behavior while it runs rather than its purpose?",
      choices: [
        "When a driver enters a zone number, it shows the open spots",
        "It helps drivers spend less time looking for parking",
        "It was made to lower traffic near a crowded stadium",
        "It aims to cut how far drivers travel to park",
      ],
      why: [
        "Behavior is what the program does during execution, often told as how it responds to a user. This describes an input and the output it produces.",
        "Saving drivers time is the reason the app exists, its purpose.",
        "Lowering traffic is the problem the app was made to solve, which is purpose.",
        "Cutting travel distance is a goal of the app, so it describes purpose, not how the program runs.",
      ],
      answer: 0,
    },
    // ---------------------------------------------------------------- crd-design
    {
      id: "bi1-13", skill: "crd-design", type: "mcq", difficulty: "easy", opens: "2027-01-26",
      stem: "A student first writes and tests the code that moves the hero. Once it works, the student adds and tests the code for picking up items, and after that the code for combat.",
      question: "Which development process is this?",
      choices: [
        "Incremental development",
        "Writing all the code at once",
        "Testing only the finished program",
        "Collecting user feedback before coding",
      ],
      why: [
        "Incremental development builds a program in small pieces, testing each one and adding it to a working whole.",
        "The student builds one part at a time, not the whole program in one pass.",
        "Each piece is tested as it is added, not only at the end.",
        "No feedback from users is described. The student is adding and testing one feature at a time.",
      ],
      answer: 0,
    },
    {
      id: "bi1-14", skill: "crd-design", type: "mcq", difficulty: "moderate", opens: "2027-01-26",
      stem: "A team releases a first version of a study app. Users say the flash cards are hard to read, so the team changes the layout, tests again with users, and makes more changes from the new feedback.",
      question: "Which statement best describes this process?",
      choices: [
        "It is iterative: the team repeats cycles of testing and refining",
        "It is incremental: the team adds one new feature at a time",
        "It is sequential: the team finishes each step exactly once",
        "It is complete: the program needs no further changes",
      ],
      why: [
        "Iterative development goes back through design, testing, and revision again and again, using feedback each time.",
        "The team is revising an existing feature based on feedback, not adding new features one at a time.",
        "The team goes back to earlier steps more than once, so it does not do each step only once.",
        "The team keeps changing the app after each round of feedback, so the work is not finished.",
      ],
      answer: 0,
    },
    {
      id: "bi1-15", skill: "crd-design", type: "mcq", difficulty: "easy", opens: "2027-01-26",
      question: "Which of the following is true about comments in a program?",
      choices: [
        "They explain the code but do not change how it runs",
        "They make the program run faster on most computers",
        "They are checked by the computer for logic errors",
        "They are shown to the user as output while it runs",
      ],
      why: [
        "Comments are notes for people who read the code. The computer skips them when the program runs.",
        "The computer ignores comments, so they have no effect on speed.",
        "The computer does not read comments at all, so it cannot check them for errors.",
        "Comments stay in the source code. The user never sees them while the program runs.",
      ],
      answer: 0,
    },
    {
      id: "bi1-16", skill: "crd-design", type: "mcq", difficulty: "moderate", opens: "2027-01-26",
      stem: "For a class project, a student uses a sorting procedure written by a classmate and a sound effect from a free website.",
      question: "What should the student do?",
      choices: [
        "Credit the classmate and the website in the program's documentation",
        "Rename the procedure and the sound so they look like new work",
        "Credit only the classmate, since the website made the sound free",
        "Credit no one, since both pieces are a small part of the program",
      ],
      why: [
        "Code and media made by someone else are acknowledged with their source, even when they are free to use.",
        "Renaming someone else's work to make it look original is plagiarism.",
        "Free to use is not the same as free of credit. The website's sound needs an acknowledgment too.",
        "Size does not matter. Any code or media from another source is acknowledged.",
      ],
      answer: 0,
    },
    {
      id: "bi1-17", skill: "crd-design", type: "mcq", difficulty: "difficult", opens: "2027-01-26",
      stem: "A team is about to design an app that lets students sign up for tutoring.",
      question: "Which of the following is NOT a way to investigate the program's requirements?",
      choices: [
        "Choosing the colors of the final buttons",
        "Surveying students about when they need help",
        "Watching how tutors now keep their schedules",
        "Interviewing teachers about which subjects fill up",
      ],
      why: [
        "Button colors are a design detail decided later. They do not tell the team what the program has to do.",
        "A survey of the people who will use the app tells the team what it needs. That is investigation.",
        "Observing how the work is done now shows what the program must support, which is investigation.",
        "Interviews with people affected by the program reveal its requirements.",
      ],
      answer: 0,
    },
    {
      id: "bi1-18", skill: "crd-design", type: "mcq", difficulty: "moderate", opens: "2027-01-26",
      question: "When is program documentation most useful to write?",
      choices: [
        "Throughout development, as the code is written",
        "Only after the program is complete and released",
        "Only if someone else will change the program later",
        "Only before any code has been written at all",
      ],
      why: [
        "Writing documentation as the program grows keeps it accurate and helps the programmer and teammates while they work.",
        "Waiting until the end means details are forgotten, and the documentation does not help during development.",
        "Documentation also helps the original programmer, who may forget how the code works.",
        "Plans change as code is written, so documentation written only at the start goes out of date.",
      ],
      answer: 0,
    },
    // ---------------------------------------------------------------- crd-errors
    {
      id: "bi1-19", skill: "crd-errors", type: "mcq", difficulty: "easy", opens: "2027-01-26",
      stem: "A program that should find the average of five quiz scores runs without stopping, but it divides the total by 4 instead of 5.",
      question: "What kind of error is this?",
      choices: [
        "A logic error",
        "A syntax error",
        "A run-time error",
        "An overflow error",
      ],
      why: [
        "A logic error makes the program run but behave in a way that was not intended, such as giving a wrong average.",
        "A syntax error breaks the rules of the language, so the program would not run at all.",
        "A run-time error stops the program while it runs. This program finishes, just with a wrong answer.",
        "Overflow happens when a number is too large for the space set aside for it. Dividing by the wrong number is not that.",
      ],
      answer: 0,
    },
    {
      id: "bi1-20", skill: "crd-errors", type: "mcq", difficulty: "moderate", opens: "2027-01-26",
      stem: "Consider the following code segment.",
      code: `scores ← [8, 6, 9, 7]
i ← 1
REPEAT LENGTH(scores) TIMES
{
  i ← i + 1
  DISPLAY(scores[i])
}`,
      question: "What happens when the code segment runs?",
      choices: [
        "It displays 6 9 7 and then stops with a run-time error",
        "It displays 8 6 9 7 and then ends with no error",
        "It displays 6 9 7 and then ends with no error",
        "It does not run because it has a syntax error",
      ],
      why: [
        "i is raised before each display, so it shows indexes 2, 3, and 4. On the fourth pass i is 5, past the end of the list, which stops the program.",
        "Index 1 is never displayed, because i becomes 2 before the first DISPLAY.",
        "The loop runs four times, not three. The fourth pass asks for scores[5], which does not exist.",
        "Every statement follows the pseudocode rules. The problem shows up only while the code runs.",
      ],
      answer: 0,
    },
    {
      id: "bi1-21", skill: "crd-errors", type: "mcq", difficulty: "difficult", opens: "2027-01-26",
      stem: "The procedure countInRange is meant to return how many values in nums are from low to high, including low and high themselves.",
      code: `PROCEDURE countInRange(nums, low, high)
{
  count ← 0
  FOR EACH n IN nums
  {
    IF (n > low AND n < high)
    {
      count ← count + 1
    }
  }
  RETURN(count)
}`,
      question: "Which test would reveal the error in the procedure?",
      choices: [
        "countInRange([4, 10, 7], 4, 9)",
        "countInRange([5, 6, 12], 4, 9)",
        "countInRange([1, 2, 3], 4, 9)",
        "countInRange([8, 15, 6], 4, 9)",
      ],
      why: [
        "The 4 equals low, so it should count. The procedure returns 1 instead of the expected 2, which shows the error.",
        "No value equals 4 or 9, so the procedure returns the expected 2 and the error stays hidden.",
        "No value is in the range or on its edges, so the procedure returns the expected 0.",
        "8 and 6 are inside the range and no value sits on an edge, so the result, 2, is correct.",
      ],
      answer: 0,
    },
    {
      id: "bi1-22", skill: "crd-errors", type: "mcq", difficulty: "difficult", opens: "2027-01-26",
      stem: "The procedure totalGold is meant to return the sum of the gold in every chest. The call totalGold([5, 12, 3]) returns 3 instead of 20.",
      code: `PROCEDURE totalGold(chests)
{
  FOR EACH c IN chests
  {
    total ← 0
    total ← total + c
  }
  RETURN(total)
}`,
      question: "Which change fixes the procedure?",
      choices: [
        "Move total ← 0 above the loop",
        "Change total + c to total + 1",
        "Move RETURN(total) inside the loop",
        "Change total ← 0 to total ← c",
      ],
      why: [
        "Setting total to 0 inside the loop erases the running sum on every pass. Set once before the loop, it adds 5, 12, and 3 to reach 20.",
        "Adding 1 counts the chests instead of adding their gold, and total still resets each pass.",
        "Returning inside the loop ends the procedure after the first chest, giving 5.",
        "total still resets on every pass, now to c, and then c is added. The call would return 6.",
      ],
      answer: 0,
    },
    {
      id: "bi1-23", skill: "crd-errors", type: "mcq", difficulty: "moderate", opens: "2027-01-26",
      stem: "A loop that should add up prices gives the wrong total, and the programmer cannot tell which pass goes wrong.",
      question: "Which debugging step shows the value of the total after each pass?",
      choices: [
        "Add a DISPLAY(total) statement inside the loop",
        "Add a comment that explains what the loop should do",
        "Run the program again with the same prices",
        "Rename total to a clearer variable name",
      ],
      why: [
        "Extra output statements show intermediate values, so the programmer can see the first pass where the total goes wrong.",
        "A comment helps a reader but is skipped when the program runs, so it shows no values.",
        "Running the same test again gives the same wrong total without showing where it goes wrong.",
        "A new name can make code clearer but does not show any values while it runs.",
      ],
      answer: 0,
    },
    {
      id: "bi1-24", skill: "crd-errors", type: "mcq", difficulty: "moderate", opens: "2027-01-26",
      stem: "A procedure is meant to return \"pass\" for any score of 60 or more and \"fail\" otherwise.",
      question: "Which set of test scores best checks the procedure?",
      choices: [
        "59, 60, and 95",
        "70, 80, and 90",
        "10, 20, and 30",
        "61, 75, and 100",
      ],
      why: [
        "Testing just below, exactly at, and well above 60 checks both results and the boundary, where errors such as > instead of ≥ show up.",
        "Every score is a pass, so the test never checks that a fail is returned or that 60 itself passes.",
        "Every score is a fail, so the test never checks that a pass is returned.",
        "None of these scores is 60 or 59, so an error at the boundary would go unnoticed.",
      ],
      answer: 0,
    },
  ],
};

// AP CSP · spring mock quiz · Big Idea 1: Creative Development
// Written only for the mock: no item, setup, or number here is in review. Every pseudocode key was run in Python.
// In a multiple-choice item the right choice is always written first; the site arranges the keys.

export default {
  form: true,
  items: [
    {
      id: "bi1m-01", skill: "crd-collab", type: "mcq", difficulty: "moderate",
      stem: "A team is building an app that helps new students learn Spanish. A student who grew up speaking Spanish at home joins the team.",
      question: "What is the most likely benefit of adding this student?",
      choices: [
        "The student can point out needs the others would miss",
        "The app will need fewer tests before it is released",
        "The other members no longer have to share their ideas",
        "The app will work on more kinds of phones and tablets",
      ],
      why: [
        "A different background brings knowledge the team lacks, such as phrases learners mix up, which leads to a better app.",
        "A new perspective improves the design, but the app still needs the same testing.",
        "Collaboration depends on every member sharing ideas, not on one person replacing the others.",
        "Knowing a language does not change which devices the app runs on.",
      ],
      answer: 0,
    },
    {
      id: "bi1m-02", skill: "crd-collab", type: "mcq", difficulty: "easy",
      stem: "Four students in different homes are writing one program together.",
      question: "Which tool best lets them all edit the same code and see each other's changes?",
      choices: [
        "A shared online code repository",
        "A printed copy of the code for each student",
        "Separate copies saved on each student's laptop",
        "A weekly email with a summary of the program",
      ],
      why: [
        "An online repository keeps one copy of the code that everyone can change, with a record of who changed what.",
        "Printed copies cannot be edited together and go out of date after the first change.",
        "Separate copies drift apart, and nobody sees the others' changes until they are combined by hand.",
        "A summary describes the code but does not let anyone edit it or see each change.",
      ],
      answer: 0,
    },
    {
      id: "bi1m-03", skill: "crd-purpose", type: "mcq", difficulty: "moderate",
      stem: "A kitchen timer app lets the user set a number of minutes and press Start. When the countdown reaches zero, an alarm plays.",
      question: "Which of the following is true?",
      choices: [
        "The countdown reaching zero is an event that runs the alarm code",
        "Only the user's button press counts as an event in this program",
        "The alarm is an input because it happens at the end of the timer",
        "The number of minutes is an output because the user can see it",
      ],
      why: [
        "An event is any defined action that changes what the program does next. Reaching zero is one, and it starts the alarm.",
        "Events are not only user actions. A timer finishing is also an event the program responds to.",
        "The alarm is produced by the program for the user to hear, so it is an output.",
        "The minutes are typed in by the user, so they are an input to the program.",
      ],
      answer: 0,
    },
    {
      id: "bi1m-04", skill: "crd-purpose", type: "mcq", difficulty: "easy",
      question: "Which question best helps a programmer understand a program's purpose?",
      choices: [
        "What problem does it solve?",
        "Which language is it written in?",
        "How many lines of code does it have?",
        "How many variables does it use?",
      ],
      why: [
        "A program's purpose is the problem it solves or the reason it was made.",
        "The language is a detail of how it was built, not why it exists.",
        "The length of the code says nothing about the problem the program addresses.",
        "The number of variables describes how the code is written, not what it is for.",
      ],
      answer: 0,
    },
    {
      id: "bi1m-05", skill: "crd-design", type: "mcq", difficulty: "moderate",
      stem: "A store's checkout program has this line.",
      code: `total ← total + (price * 1.08)`,
      question: "Which comment would be most useful above this line?",
      choices: [
        "Add the price plus 8% sales tax to the total",
        "Set total to total plus price times 1.08",
        "This line changes the value of total",
        "Important line, do not delete this one",
      ],
      why: [
        "A good comment explains why the code does what it does. This one tells the reader that 1.08 adds the 8% tax.",
        "This repeats the code in words and does not say what 1.08 means.",
        "Any assignment changes a variable. The comment gives the reader no new information.",
        "The comment gives no reason the line matters or what it does.",
      ],
      answer: 0,
    },
    {
      id: "bi1m-06", skill: "crd-design", type: "mcq", difficulty: "difficult",
      stem: "A student wrote a whole quiz app, with scoring, a timer, and a high score list, before running it for the first time. It now has many bugs, and the student cannot tell which part causes each one.",
      question: "Which approach would have prevented this problem best?",
      choices: [
        "Write and test one feature before starting the next",
        "Write more of the code before running the program",
        "Add the high score list first, since users want it",
        "Test the app only on the day it is turned in",
      ],
      why: [
        "Incremental development adds one tested piece at a time, so a new bug almost always comes from the piece just added.",
        "Writing even more code before running it makes bugs harder to trace, not easier.",
        "The order of features is not the issue. Testing all of them together at the end is.",
        "Testing once at the end is what caused the trouble. Bugs pile up and hide each other.",
      ],
      answer: 0,
    },
    {
      id: "bi1m-07", skill: "crd-design", type: "mcq", difficulty: "easy",
      stem: "A team has surveyed users and listed what a club sign-up app must do.",
      question: "Which step is part of designing the program next?",
      choices: [
        "Sketching the screens and planning the procedures",
        "Releasing the app to every student at the school",
        "Deleting the survey results to protect privacy",
        "Writing the final user manual for the app",
      ],
      why: [
        "Design turns the requirements into a plan, such as screen layouts and a list of the procedures the program needs.",
        "Releasing comes after the program is designed, built, and tested.",
        "The survey results guide the design. Throwing them away is not a design step.",
        "A final manual describes a finished program, which does not exist yet.",
      ],
      answer: 0,
    },
    {
      id: "bi1m-08", skill: "crd-errors", type: "mcq", difficulty: "difficult",
      stem: "The procedure allPositive is meant to return true only if every number in nums is greater than 0.",
      code: `PROCEDURE allPositive(nums)
{
  FOR EACH n IN nums
  {
    IF (n > 0)
    {
      RETURN(true)
    }
    ELSE
    {
      RETURN(false)
    }
  }
}`,
      question: "Which call would reveal the error in the procedure?",
      choices: [
        "allPositive([3, -1, 2])",
        "allPositive([-3, 1, 2])",
        "allPositive([4, 5, 6])",
        "allPositive([-2, -5, -1])",
      ],
      why: [
        "The procedure returns after checking only the first number. 3 is positive, so it returns true, but the expected result is false because of the -1.",
        "The first number is negative, so the procedure returns false, which is the expected result.",
        "Every number is positive, so returning true after the first one happens to be correct.",
        "The first number is negative, so it returns false, which is correct for this list.",
      ],
      answer: 0,
    },
    {
      id: "bi1m-09", skill: "crd-errors", type: "mcq", difficulty: "difficult",
      stem: "The procedure maxOf is meant to return the largest value in any nonempty list of numbers.",
      code: `PROCEDURE maxOf(nums)
{
  biggest ← 0
  FOR EACH n IN nums
  {
    IF (n > biggest)
    {
      biggest ← n
    }
  }
  RETURN(biggest)
}`,
      question: "Which call returns the correct result even though the procedure has an error?",
      choices: [
        "maxOf([3, 8, 5])",
        "maxOf([-4, -1, -6])",
        "maxOf([-7])",
        "maxOf([-10, -3, -5])",
      ],
      why: [
        "biggest starts at 0, which is wrong only when every value is below 0. Here 8 replaces the 0, so the call returns the true largest value, 8.",
        "No value is greater than 0, so biggest stays 0. The largest value is really -1.",
        "-7 is not greater than 0, so the procedure returns 0 instead of -7.",
        "No value beats the starting 0, so the procedure returns 0. The largest value is really -3.",
      ],
      answer: 0,
    },
    {
      id: "bi1m-10", skill: "crd-errors", type: "mcq", difficulty: "moderate",
      stem: "A game stores each player's coins in a fixed number of bits. After a player collects a very large number of coins, the count suddenly shows a negative number.",
      question: "What kind of error is this?",
      choices: [
        "An overflow error",
        "A syntax error",
        "A logic error in the display",
        "A run-time error from a bad index",
      ],
      why: [
        "Overflow happens when a value is too large for the bits set aside for it, and the stored number wraps around to a wrong value.",
        "A syntax error would keep the program from running at all. This game runs until the count gets too large.",
        "The display shows the stored value correctly. The stored value itself is wrong because it no longer fits.",
        "No list is being indexed here, and the program keeps running instead of stopping.",
      ],
      answer: 0,
    },
  ],
};

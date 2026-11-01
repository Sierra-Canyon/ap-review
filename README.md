# AP Review

Sierra Canyon · J.D. DeVaughn-Brown · built 10/31 to 11/1/2026

A review site for AP courses. Students sign in with GitHub and see the courses on their roster entry; a menu at the top switches courses. It runs on GitHub Pages, with Firebase for sign-in and saved progress. `SETUP.md` is the setup, step by step.

| Course | Period | Test | Review items | Mocks |
|---|---|---|---:|---|
| AP Computer Science Principles | D | Quiz 3: Lists and Loops, Tue 11/3 | 52 | 3 mock quizzes |
| AP Computer Science A | B | Unit 2 now; the countdown follows every assessment to the AP exam | 78 | 33 forms: practice for all 15 assessments of the year |
| AP Cybersecurity | F | Unit 2 Test: Securing Spaces, Mon 11/2 | 215 | 3 mock tests |

The mocks are written only for the mocks: none of their items appear in review, so a mock score shows what a student does on questions they have not practiced.

## My misses (every course)

The **My misses** tab lists every question a student answered wrong the last time they saw it, in review and on mocks, grouped by skill, with the skills ranked weakest first (share right, and how many of the skill's questions are missed now). **Practice my misses** makes a set of exactly those questions; a skill's **Practice** button starts with that skill's misses, then its least solid review items. A question leaves the list once it is answered right. After a mock, the score page shows **where you lost points** by skill, with a button that makes a set of the questions missed on that mock. The home page shows the count and the most-missed skills, and the Class tab has a **To redo** column per student.

## AP Computer Science A: Unit 2, Selection and Iteration

- Modeled on the class's own AP Classroom quizzes and tests (Q3 to Q5, U2T and its forms, the free-response rubrics) and on the AP exam's format, which Albert's AP CSA bank also follows. None of their items is reused: Q5B, Q5C, U2TB, and U2TC are live retake and makeup forms.
- **Review** (78): code reading (4 choices) and type-the-output items for 2.2 to 2.12, with String algorithms (2.10) the largest set for Quiz 5, plus six free responses in the Methods and Control Structures style. A free response is written in a code box, then scored one rubric row at a time (one point a row, as in AP Classroom); the full-credit solution shows after. The home page can limit a set to Quiz 5 Strings, code reading, or free response.
- **Mocks for the whole year** (`decks/csa-year/`, plus the Quiz 5 and Unit 2 Test forms in `decks/csa-u2/`), each in the exact shape of its real assessment, grouped on the page by assessment, next ones first:

  | Assessment | Date | Forms | Shape |
  |---|---|---|---|
  | Quiz 1, Quiz 2 | 9/14, 9/25 | A, B | 6 MCQ |
  | Unit 1 Test | 10/6 | A, B | 20 MCQ + 7-row FRQ |
  | Quiz 3, Quiz 4 | 10/16, 10/29 | A, B | 6 MCQ |
  | Quiz 5 | 11/6 | A, B | 6 MCQ (2.10) |
  | Unit 2 Test | 11/17 | 1, 2, 3 | 20 MCQ + 7-row FRQ |
  | AP Practice Section | 12/8 | A, B | 20 MCQ + 7-row FRQ (covers 1.9 to 1.14, which PS left out) |
  | Midterm | 12/14 | A, B | 30 MCQ + two 7-row FRQs |
  | Quiz 6, Quiz 7 | 1/12, 1/19 | A, B | 6 MCQ |
  | Unit 3 Test | 1/28 | A, B | 18 MCQ + class-design FRQ (7 rows) |
  | Quiz 8 | 2/4 | A, B | 6 MCQ |
  | Unit 4A Checkpoint | 2/23 | A, B | 15 MCQ + 5-row FRQ |
  | Unit 4 Test | 3/18 | A, B | 22 MCQ + ArrayList FRQ (5 rows) + 2D array FRQ (6 rows) |
  | AP Practice Exam | 4/5 | A, B | 42 MCQ + the four exam FRQs (7, 7, 5, 6 points, from the CED) |

  No IDE and no compiler, as on the real assessments. None of their items is in review or copied from AP Classroom.
- Every key, distractor claim, output, exception, and free-response solution was compiled and run with Java 21 (`tools/verify-java.mjs`; reports next to each file in `decks/csa-u2/`). Java code is highlighted, and prose uses backticks for code.

## AP Cybersecurity: Unit 2 Test

- **Review** mixes three kinds of item, and the home page can limit a set to one kind:
  - **Vocabulary** (95): every Unit 2 term in the course Anki deck, plus the Unit 1 social engineering terms the test uses. The definition is the deck's, word for word (`tools/build-cyber-vocab.mjs` builds them from the deck export); a wrong pick shows that term's own definition.
  - **Scenarios** (90): multiple choice in the test's style, about two thirds at Riverside, consistent with the Unit 2 spec's canon, with several evidence items that read a log. Every answer and distractor is a deck term.
  - **Free response** (30 subparts): three AP-format free responses at buildings students have not seen (Cedar Hollow Public Library, Marlow Self Storage, Alder Creek Community Theater), each with four sources and ten one-point subparts. The student writes, then scores the answer against the guidelines (what earns the point, what does not), then sees an answer that earns it and one that does not.
- **Mock test**: three forms in the test's exact shape: 25 multiple choice in the test's order (2 points each) and one ten-part free response (raw × 2.5), 75 points, at Greenfield Family Dental, Brightwater Aquatic Center, and Harbor Street Print and Ship. No clock: student sheets in this course carry no timings.
- None of it copies the real test, Northgate, or another form. Each set was written, then checked by a second reader against the spec, the key, the guided notes, and the deck.
- **Class tab**: the same as AP CSP, with a column per mock test and a free-response column for each part.

## AP Computer Science Principles: Quiz 3

Two parts, one sign-in:

- **Learn**: a book of the fall's five topics in 21 sections, modeled on CSAwesome and Captain Coder: runnable C#, a step-through debugger, Check Your Understanding, mixed-up code, and coding exercises checked like the quests.
- **Review** and **Mock quiz**: spaced review and mock quizzes for **Quiz 3: Lists and Loops**.

## Learn

| Chapter | Sections | From |
|---|---|---|
| 1 Variables | 1.1 to 1.3 | Review 1 |
| 2 If statements | 2.1 to 2.3 | Review 2 |
| 3 Functions | 3.1 to 3.6 | Functions 1 to 6 and the review day |
| 4 Lists | 4.1 to 4.3 | Lists 1 to 3 |
| 5 For loops | 5.1 to 5.6 | For 1 to 6 |

Every section opens with what the student can do after it, then mixes these:

- **Runnable code.** An editable example with **Run**, **Step through**, and **Reset**, plus an input box where the program reads `Console.ReadLine()`. Errors and warnings show in the same form as `dotnet build` (`Program.cs(4,24): error CS1061: ...`), and crashes as `Unhandled exception. System.ArgumentOutOfRangeException: ...` with the line.
- **Step through.** Captain Coder's Back and Next, with a Variables pane like VS Code's: each function's variables, and every list item by index.
- **Activities.** Check Your Understanding (a wrong pick explains itself and the student tries again), mixed-up code (any order that prints the right thing passes), and coding exercises whose checker prints `PASS` or `should be X (yours gives Y)`, with hints and, after two checks, a solution.
- **Callouts.** A recipe for each new piece of syntax, trap notes with the exact error text, and an "On the AP exam" box where the section ties to a written response.

A section is done when every activity in it is done. The Class tab shows, for each section, who opened it, who finished it, and who has not. After a missed review item, the review links to the book section for that skill.

**The C# runner** (`runner/`) is a C# interpreter written in JavaScript, because the real compiler needs packages from NuGet, which this workspace cannot reach. It covers the course's C#: variables, if, functions, `List<T>`, for, foreach, while, `Console`, `int.Parse`, `Math`, and string methods, with .NET's arithmetic, number formatting, compiler messages, and exceptions. Classes, arrays, `switch`, and LINQ (except `Count()`, `Sum()`, `Max()`, `Min()`, `Average()`) get a message to use VS Code. Differences from .NET found in testing: infinity prints as `∞`, as it does on a Mac (the Linux test machine prints `Infinity`), and a `for` header written with commas instead of semicolons reports its error a few columns later than `dotnet build` does.

## What students get

- **Review**: sets of ten. A missed item comes back three items later in the same set, then in 5 minutes. Right answers come back after 1, 2, 4, 8, and 16 days. At most two written responses per set.
- **Mock quiz**: three fixed mock quizzes (Mock Quiz 1, 2, 3, in `decks/csp-q3-mocks/`), each in the shape of Quiz 3, all new code, verified on .NET 10. Part A, six multiple-choice items at 2 points (one each from Lists 1, Lists 2, Lists 3, For 1, For 2, and one more from For 1 or For 2). Part B, two written responses at 4 points: one 2026 2(c) (without the list) and one 2025 Set 2 2(b) (logic error). 20 points, with a clock against 25:00. Feedback only at the end.
- **Skills**: a meter for each of the seven skills. Full means every item in the skill was answered right three times, spaced over days.
- **Written responses** are self-scored on the same two rubric rows, 0 to 2 points each, as Q3.07 and Q3.08 in AP Classroom. The model answer and the facts from a run appear after the student scores. The page says whether the exam would have given its one point (both rows at 2).

## What the teacher gets (the Class tab, @jd12 only)

- Every student on the roster: last active, answers, percent right, best and last mock score, mastery for each skill.
- Every item, hardest first: percent right, how many missed it the last time, the wrong answer picked most, and every student's latest written response with their self-score.
- Accounts waiting to be added, and the roster itself. **Download CSV** saves the student table.

## The items

52 items in `decks/csp-q3.js`, none of them a copy of Q3 or Q3B:

| Skill | From | Code reading | Type the output | Trace table | Written response |
|---|---|---:|---:|---:|---:|
| Index and Count | Lists 1 | 6 | 2 | | |
| Parallel lists | Lists 2 | 6 | 1 | | |
| Finding with if | Lists 3 | 7 | 1 | | |
| The parts of a for loop | For 1 | 4 | 4 | 2 | |
| A loop over a list | For 2 | 6 | 6 | 1 | |
| Without the list | 2026 2(c) | | | | 3 |
| A logic error | 2025 Set 2 2(b) | | | | 3 |

Every block of code was compiled and run on .NET 10 (`tools/verify.mjs`, 70 checks): every key, every output, every crash (`ArgumentOutOfRangeException`), every build error (`CS1061`, `CS0103`, `CS1503`, `CS0029`), every `CS0162` warning, and every row of the facts tables in the written responses. The report is `tools/verify_report.txt`.

The written-response prompts use the wording in `09 AP Classroom/fall_quizzes/KEYS and marking.md`, and the rubric levels follow `apc_rubrics.json` for Q3.07 and Q3.08.

## Files

| Path | What it is |
|---|---|
| `index.html`, `styles.css`, `app.js` | The site. |
| `courses.js` | The courses, their periods, and their decks. |
| `srs.js` | Spaced review, sessions, and mock-quiz assembly. |
| `backend.js` | Firebase, and the demo backend (browser storage). |
| `firebase-config.js` | The Firebase config (null until Setup step 7), the teacher's GitHub number. |
| `firestore.rules` | Who can read and write what. Pasted into the Firebase console. |
| `decks/csp-q3.js`, `decks/csp-q3-mocks/` | AP CSP: the review items and the three mock quizzes. |
| `decks/cyber-u2.js`, `decks/cyber-u2/`, `decks/cyber-u2-mocks/` | AP Cybersecurity: the deck, its review items (vocabulary, scenarios, free responses), and the three mock tests. |
| `tools/build-cyber-vocab.mjs` | Builds the Cyber vocabulary items from the Anki deck export. |
| `decks/csa-u2.js`, `decks/csa-u2/` | AP CSA: the deck, its review items, and the five mocks. |
| `tools/verify-java.mjs` | Compiles and runs every Java item with Java 21. |
| `tools/e2e-csa.mjs` | Runs the AP CSA course in Chromium: a review set, a Quiz 5 set, a free response, both mock shapes, phone width, the Class tab. |
| `tools/e2e-cyber.mjs` | Runs the AP Cyber course in Chromium: a review set, a free-response set, a mock test, phone width, the Class tab, a two-course roster entry. |
| `vendor/firebase.js` | The Firebase SDK, bundled (`tools/build-firebase.mjs`), so the site needs no CDN. |
| `tools/verify.mjs` | Compiles and runs every item's code. |
| `tools/e2e.mjs` | Runs the demo site in Chromium: a review set, a mock quiz, the not-on-the-list screen, the Class tab, phone width. |
| `tools/build-preview.mjs` | Builds `preview.html`, the demo as one file. |
| `book/` | The book: `index.js` (the order), `FORMAT.md` (how a section file is written), one file per section in `ch1` to `ch5`. |
| `book-ui.js`, `editor.js` | The Learn tab and its code editor. |
| `runner/` | The C# runner: lexer, parser, checker (types and compiler errors), and exec (running and stepping). |
| `tools/verify-book.mjs`, `tools/runner-diff.mjs`, `tools/runner-vs-dotnet.mjs`, `tools/e2e-book.mjs` | The checks listed in `SETUP.md`. |

## Adding the next quiz or test

Write a new deck file with its own `id` and item ids, import it in `courses.js`, and put it first in its course's `decks`. Progress is stored per deck, so earlier progress stays.

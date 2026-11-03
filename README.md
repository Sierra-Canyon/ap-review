# AP Review

Sierra Canyon · J.D. DeVaughn-Brown · built 10/31 to 11/1/2026

A review site for AP courses. Students sign in with GitHub and see the courses on their roster entry; a menu at the top switches courses. It runs on GitHub Pages, with Firebase for sign-in and saved progress. `SETUP.md` is the setup, step by step.

| Course | Period | Test | Review items | Mocks |
|---|---|---|---:|---|
| AP Computer Science Principles | D | Quiz 3 (11/3), WR4 to WR6 (11/4 to 11/10), Quiz 4: Functions and Loops (11/20) | 107 | 6 mock quizzes |
| AP Computer Science A | B | Unit 2 now; the countdown follows every assessment to the AP exam | 78 | 33 forms: practice for all 15 assessments of the year |
| AP Cybersecurity | F | Unit 2 Test: Securing Spaces, Mon 11/2 | 215 | 3 mock tests |
| AP World History: Modern | B, C, D (Ms. Dias) | all nine units | 317 | 14 topic quizzes (1.1 to 1.7, 2.1 to 2.7) and 10 unit assessments (2 for the Unit 2 Test, 11/4) |
| AP Calculus AB | (another teacher) | all eight AB units | 344 | 81 topic quizzes and 8 unit tests |

The mocks are written only for the mocks: none of their items appear in review, so a mock score shows what a student does on questions they have not practiced.

## Accounts

One record per student (`students/` in Firestore), keyed by the school email, however the student signs in: **GitHub** (the computer science courses) or **school email and password** (courses marked `passwords: true` in `courses.js`, such as AP World History). A record holds the name the student goes by in class (the only name the site shows), the school email, the GitHub account if any, and the courses. Progress is one document per student (`progress/`).

- Teachers make students' email sign-ins from the Class tab with a first password (printable cards); the student chooses their own at first sign-in, can change it on the account page, and resets it by email (**Forgot password?**, or the teacher's **Send reset link**). Teachers never see a chosen password.
- Teachers other than @jd12 are listed in `teachers/` (added from the Class tab) and see only their courses. `firestore.rules` enforces all of it: a teacher can add or remove only their own courses on a record and read progress only for their students.
- Before 11/1 the roster was keyed by GitHub number; @jd12's first visit to the Class tab moves it over, and each student's progress comes along on their first sign-in.

## AP Calculus AB

All eight AB units (CED topics only; nothing from BC), in `decks/calc/` (review), `decks/calc-topic/` (a quiz per topic) and `decks/calc-tests/` (a test per unit). Built like AP World: review that brings back misses, then **Quizzes and tests**.

- **Review** (344): multiple choice and free response for every topic. A free-response question is split into its parts (a), (b), (c); each part lists its points the way the AP scoring guidelines do, the student scores their own work one point at a time, and the full-credit solution follows.
- **Topic quizzes** (81): 6 multiple choice and one free-response question of 3 or 4 points for each topic, 1.1 to 8.12.
- **Unit tests** (8): the AP exam in miniature, 33 points: Section I, 10 multiple choice without a calculator then 5 with; Section II, two 9-point free-response questions, the calculator one first. Results show the score by section.
- Every question says **Calculator** or **No calculator**. Math is LaTeX in the deck files (`$...$`), drawn by the browser as MathML (`vendor/katex.js`, built by `tools/build-katex.mjs`). Graphs, including slope fields, are drawn from a description by `plot.js`; tables are source tables.
- **Accuracy:** each writer checked every key, distractor and scoring number by computation (sympy), and a second reader solved every item again independently, unit by unit, and fixed what was wrong. `tools/check-calc.mjs` checks shapes, point totals, topics, that every formula renders, and the writing rules: `node tools/check-calc.mjs review decks/calc/u*.js`, `test decks/calc-tests/*.js`, `quiz decks/calc-topic/*.js`. `tools/e2e-calc.mjs` runs a review set, a quiz and a unit test in Chromium.

## AP World History: Modern

The bank in `decks/whap/` (one file per unit), modeled on the AP exam's format, which Albert's bank follows: 211 stimulus-based multiple-choice questions on 79 sources, 27 short-answer questions (81 parts, each scored 0 or 1 against what earns the point), 18 long essay questions and 7 DBQs scored row by row on the AP rubrics, with a strong response, what each document offers, and evidence to use. Primary sources are public-domain texts quoted verbatim with a citation and a link; passages summarizing historians' views were written for the bank and say so. The quotes were copied in short pieces from their pages: spot-check them against the links.

**Unit assessments** (`decks/whap-mocks/`), separate from the practice questions the way Albert's are: one per unit and two for Unit 2 (the Unit 2 Test on 11/4, listed first), each the AP exam in miniature, 27 points: Section I, Part A is 15 source-based multiple choice on five or six sources; Section I, Part B is two short-answer questions (one with a source, one without, 6 parts); Section II is one long essay question on the 6-point rubric. Every source and question is new, used nowhere in review. Students score their short answers and essay with the guidelines and rubric, then see the model essay and the evidence; the score shows by section. The home page can also limit review to Unit 2.

**Topic quizzes** (`decks/whap-topic/`), one for each CED topic in Units 1 and 2 (1.1 to 1.7, 2.1 to 2.7), like Albert's practice by topic: 8 source-based multiple choice on two to four sources and one short-answer question (3 parts), 11 points. Like the assessments, every source and question is new and used nowhere else on the site. Each unit lists its topic quizzes, then its assessments; the Class tab has a quiz column and a test column for each unit.

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

## AP Computer Science Principles: Quiz 3, the WR drills, and Quiz 4

Two parts, one sign-in:

- **Learn**: a book of the fall's five topics in 21 sections, modeled on CSAwesome and Captain Coder: runnable C#, a step-through debugger, Check Your Understanding, mixed-up code, and coding exercises checked like the quests.
- **Review** and **Mock quiz**: spaced review and mock quizzes for **Quiz 3: Lists and Loops** (11/3), the written-response drills **WR4, WR5, WR6** (11/4, 11/9, 11/10), and **Quiz 4: Functions and Loops** (11/20). The countdown on Home shows the next of Quiz 3, WR4 to WR8, and Quiz 4. Home has an "Only:" button for each drill and for Quiz 4.

### What was added for WR4 to WR6 and Quiz 4 (11/3)

- `decks/csp-q4/review-a.js`: 35 Part A review items, 7 for each of Quests 13 to 16 (totals and records, rows and columns, drawing a level, the walk) and the Milestone 2 functions.
- `decks/csp-q4/review-wr.js`: 20 written responses on the released prompts the drills and Quiz 4 use: 2024 Set 2 2(b) (WR4), 2025 Set 1 2(c) and 2024 Set 1 2(c) checkValidity (WR5), 2026 2(a) and 2025 Set 1 2(b) (WR6), 2024 Set 2 2(c) parameters and 2025 Set 2 2(b) (Quiz 4). Prompts about the Procedure section show Procedure (i) and (ii).
- `decks/csp-q4/mocks.js`: Quiz 4 Mock 1, 2, 3, in the quiz's shape (six multiple choice from Quests 13 to 16 and the rewrites, then the parameters question and the logic-error question).
- None of it copies Q4, WR4, WR5, or WR6 in AP Classroom: no item uses a real quiz item's function with its twist and inputs, and the written responses avoid MyRallyCry, RemoveItem, AddMany, TotalHealth, CountItem, and the level-drawing loop the real drills use.
- The deck keeps the id `csp-q3`, so progress and the Firestore rules carry over. Every block of code was compiled and run on .NET 10 (`node tools/verify.mjs` on each file).

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

## A student's page (teachers)

On the Class tab, students are listed by last name. Click a name for that student's page: every quiz and test they took, newest first, with the score (open one to see each question and the answer they picked or their self-score), and their review by skill (open a skill for each question, the answer they last gave, and how often they have seen it). Attempts from 11/2 on keep their own answers; earlier ones show the answer kept from the student's latest try. In the roster table, typing a GitHub username in a student's GitHub cell and pressing Enter makes that student a GitHub student, for students in an email course who are not in a computer science course. `tools/e2e-student.mjs` runs it in Chromium.

## Assessments (teachers)

On the Class tab, **Assessments > Add an assessment**: a name, a date, the sections it is for, and what it covers (check a whole unit, or open a unit and check its topics). It is saved in Firestore (`assessments/`). Students in those sections see it in the countdown and on their home page with **Review for it**, a review set made of exactly those units' or topics' questions, plus a button for each topic quiz it covers. **Edit** and **Delete** change it for everyone at once. `tools/e2e-assess.mjs` runs it in Chromium.

## Questions (teachers)

The **Questions** tab, for any teacher of the course, lists every question: each quiz and test by assessment, then review by skill. A question opens with its sources, its right answer marked, and the explanations. **Edit** changes its wording, the right answer of a multiple-choice question, or hides it. The change is saved in Firestore (`edits/`, only the fields that differ from the deck file), shows for every student in every section that uses the deck from their next visit, and is labeled with who made it and when. A hidden question leaves review and its quiz or test, whose total drops by its points. **Restore original** deletes the edit. The deck files never change, so an edit worth keeping for next year belongs in the file. Code questions were checked by running them; an edited one is not rechecked.

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
| `plot.js` | Graphs for math questions (curves, pieces, open and closed dots, asymptotes, slope fields), as SVG. |
| `decks/calc.js`, `decks/calc/`, `decks/calc-topic/`, `decks/calc-tests/` | AP Calculus AB: review, topic quizzes, unit tests. |
| `edits.js` | Teachers' edits to questions, laid over the decks after sign-in. |
| `backend.js` | Firebase (GitHub and email sign-in, the student records), and the demo backend (browser storage). |
| `firebase-config.js` | The Firebase config (null until Setup step 7), the teacher's GitHub number. |
| `firestore.rules` | Who can read and write what. Pasted into the Firebase console. |
| `decks/csp-q3.js`, `decks/csp-q3-mocks/`, `decks/csp-q4/` | AP CSP: the deck, Quiz 3's review and mocks, and the WR4 to WR6 and Quiz 4 review and mocks. |
| `decks/cyber-u2.js`, `decks/cyber-u2/`, `decks/cyber-u2-mocks/` | AP Cybersecurity: the deck, its review items (vocabulary, scenarios, free responses), and the three mock tests. |
| `tools/build-cyber-vocab.mjs` | Builds the Cyber vocabulary items from the Anki deck export. |
| `decks/csa-u2.js`, `decks/csa-u2/` | AP CSA: the deck, its review items, and the five mocks. |
| `tools/verify-java.mjs` | Compiles and runs every Java item with Java 21. |
| `tools/e2e-accounts.mjs` | Accounts in Chromium: email sign-in, first and changed passwords, reset links, a teacher with one course, cards, a GitHub record gaining a school email, the Teachers panel. |
| `decks/whap.js`, `decks/whap/`, `decks/whap-mocks/`, `decks/whap-topic/` | AP World History: the bank, one file per unit, the unit assessments, and the topic quizzes. |
| `tools/e2e-student.mjs` | Runs a student's page in Chromium: last-name order, a quiz attempt with each answer, review answers, adding a GitHub username. |
| `tools/e2e-assess.mjs` | Runs teacher-made assessments in Chromium: add one for two sections and two topics, the countdown, the review set, a matching quiz, edit, delete. |
| `tools/e2e-questions.mjs` | Runs the Questions tab in Chromium: read, edit, change the right answer, hide, restore, and the edits reaching a test. |
| `tools/e2e-whap.mjs` | Runs an AP World unit assessment in Chromium: section labels, scoring short answers and the essay, the score by section, Unit 2 review, phone width. |
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

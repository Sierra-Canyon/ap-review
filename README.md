# CSP Review

AP Computer Science Principles · Period D · J.D. DeVaughn-Brown · built Sat 10/31/2026

A review site for AP CSP. Students sign in with GitHub. It runs on GitHub Pages, with Firebase for sign-in and saved progress. `SETUP.md` is the setup, step by step.

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
- **Mock quiz**: the shape of Quiz 3. Part A, six multiple-choice items at 2 points (one each from Lists 1, Lists 2, Lists 3, For 1, For 2, and one more from For 1 or For 2). Part B, two written responses at 4 points: one 2026 2(c) (without the list) and one 2025 Set 2 2(b) (logic error). 20 points, with a clock against 25:00. Feedback only at the end.
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
| `srs.js` | Spaced review, sessions, and mock-quiz assembly. |
| `backend.js` | Firebase, and the demo backend (browser storage). |
| `firebase-config.js` | The Firebase config (null until Setup step 7), the teacher's GitHub number. |
| `firestore.rules` | Who can read and write what. Pasted into the Firebase console. |
| `decks/csp-q3.js` | The items. |
| `vendor/firebase.js` | The Firebase SDK, bundled (`tools/build-firebase.mjs`), so the site needs no CDN. |
| `tools/verify.mjs` | Compiles and runs every item's code. |
| `tools/e2e.mjs` | Runs the demo site in Chromium: a review set, a mock quiz, the not-on-the-list screen, the Class tab, phone width. |
| `tools/build-preview.mjs` | Builds `preview.html`, the demo as one file. |
| `book/` | The book: `index.js` (the order), `FORMAT.md` (how a section file is written), one file per section in `ch1` to `ch5`. |
| `book-ui.js`, `editor.js` | The Learn tab and its code editor. |
| `runner/` | The C# runner: lexer, parser, checker (types and compiler errors), and exec (running and stepping). |
| `tools/verify-book.mjs`, `tools/runner-diff.mjs`, `tools/runner-vs-dotnet.mjs`, `tools/e2e-book.mjs` | The checks listed in `SETUP.md`. |

## Adding the next quiz

Copy `decks/csp-q3.js` to a new file with its own `id` and item ids, and change the `import deck` line in `app.js`. Progress is stored per deck, so Quiz 3 progress stays.

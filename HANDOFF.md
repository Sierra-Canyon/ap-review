# Handoff: adding a course to AP Review

For whoever adds the next course to sierra-canyon.github.io/ap-review, a person or an agent. Read `README.md` (what the site does) and `SETUP.md` (Firebase, sign-in, rosters) first. This file is the method: how a course goes from "build it like Albert" to questions students can trust.

## Where things live

| What | Where |
|---|---|
| The site (this repo, **public**) | `Sierra-Canyon/ap-review`, served by GitHub Pages. JD pushes. |
| Private files | `../private/` next to this repo: rosters, the Firebase admin key, and `briefs/`, the writer briefs used to build every course so far. Never commit any of it. |
| Firebase | project `ap-review-3eb90`: sign-in, the Firestore database, and its rules. Rules are published by hand from `firestore.rules`. |
| Each course's own materials | the teacher's course folder in Google Drive (unit plans, keys, AP Classroom items, Blackbaud imports, calendars). |

**The repo is public.** Anything in it can be read by students. It holds review questions only: never real quiz or test items, their keys, or a description of what a real assessment asks ("the quiz uses a tie in StrongestIndex"). Those details go in the private briefs.

## The rules every question follows

1. **Write every question new.** Never copy or reword a question, stimulus, choice, or explanation from Albert, the College Board (released exams, AP Classroom, the CED's sample questions), a textbook, or the teacher's own quizzes and tests. Model the format and style only (see 2a for how Albert is read). Released free-response *prompts* may be quoted word for word when the item names its source ("2024 exam, Set 2, question 2(c)"); AP CSP does this because students answer those exact prompts on the exam.
2. **Live assessments are off limits, retake and makeup forms included.** Read them so nothing on the site tests the same code, setup, numbers, or source. Same idea, different material, is what review is for.
3. **Nothing on the site repeats itself across modes.** Mock tests and topic quizzes use questions that are not in review, so a mock shows how a student does cold.
4. **Every key is proved, not believed.** Code is compiled and run. Math is recomputed. History sources are fetched and matched word for word. A second reader checks what a first writer wrote. See *Checking* below.
5. **JD's writing rules** (the `my-writing-style` skill): no dashes as punctuation, never "we," "us," "our," or "your teacher," American spelling, plain words, explanations that state the reason and stop.

## Step 1. Settle the course with JD

Ask, in one round (AskUserQuestion), only what the files cannot answer:

- The teacher, their school email, and the sections (periods). Each section is its own course entry on one shared deck.
- Sign-in: GitHub (JD's CS students, and anyone with a GitHub name on file) or school email with the shared first password (`SETUP.md`, steps 10 and 15).
- What to build: a review bank, topic quizzes, unit tests or mocks, and for which units first. Albert's own sections are the menu: Practice (by topic), Free Response, Assessments (unit tests).
- The next assessment dates, if the teacher has them. Without dates there is no countdown, and that is fine.

## Step 2. Map the course

### 2a. Albert: read every question, then write your own

JD's request: before writing anything, the agent reads **every question Albert has for the subject**, topic by topic, and writes up what it learned so the site's questions are modeled on Albert's: the same kinds of question, the same spread of difficulty, the same traps, explanations of the same depth. The reading is for modeling. Albert's text never reaches the site, the briefs, or the writers.

**Setup**

1. **Use Chrome, signed in as JD.** WebFetch cannot read albert.io (its robots file blocks it). The Claude in Chrome tools in JD's browser can, and JD's Albert teacher account is signed in there. Work in one tab of your own and close it when done.
2. **Open the course page,** `https://www.albert.io/<course-slug>`, for example `https://www.albert.io/ap-calculus-ab-bc` or `https://www.albert.io/ap-world-history`. Its tabs are Practice, Free Response, and Assessments.
3. **Get the unit and topic list from the Practice page with one script.** Topic links follow `/learn/<course-slug>/<unit><topic>-<topic-name>` (for 1.3, `/learn/ap-calculus-ab-bc/13-estimating-limit-values-from-graphs`); unit links follow `/learn/<course-slug>/unit-<n>-<name>`:

   ```js
   [...document.querySelectorAll('a[href*="/learn/"]')].map((a) => a.getAttribute("href") + " | " + a.textContent.trim().slice(0, 80))
   ```

**Reading a topic**

4. **Open the topic link.** It lands on the topic's first question. The left column lists every question in the topic with its title and difficulty (Easy, Moderate, Difficult), and the header gives the count ("10 questions"). Get every question's link with:

   ```js
   [...document.querySelectorAll('a[href*="/learn/<course-slug>/<topic-slug>/"]')].map((a) => a.getAttribute("href"))
   ```

5. **Read each question in order:** `get_page_text` for the stem and choices, then **Show solution** for the explanation. When the question has a graph, table, or image, take a screenshot as well, since the page text leaves it out.
6. **Never press Submit Answer** or choose an answer. Answering is recorded in JD's account (the page's *My usage*). Read only.
7. **Do the same on the Free Response and Assessments tabs:** every free-response question with its scoring, and every unit assessment's length, sections, and mix.
8. **Read at a person's pace,** one page at a time in the browser. No scripts that pull Albert's data in bulk, no saved copies of its pages.

**The write-up**

9. **Write `../private/albert-notes/<course>.md`, in your own words.** Per topic:
   - the count by difficulty, and the calculator split where the course has one;
   - the kinds of question asked (what the student must do, what the stimulus is: a graph, a table, a code segment, a primary source, a scenario);
   - the traps the wrong choices are built on (the misconceptions), named in general terms;
   - how the explanations are written (one line or worked, what they name);
   - one line per question saying **what it uses** (the function, the numbers, the source, the scenario), so writers never land on the same material.

   No sentence, choice, explanation, function, data set, or source passage from Albert goes in the notes: describe, do not quote. The notes stay in `../private/`, never in this public repo.
10. **Give the writers the notes, not Albert.** A writer who reads Albert's questions drifts toward them. Writers model the patterns the notes describe with new material.
11. **The second reader checks each new question against the notes' "what it uses" lines.** A match in material (the same function and numbers, the same source excerpt, the same scenario) is rewritten, even when the wording differs.
12. **When the teacher sends Albert links for specific topics** (as for AP World 1.1 to 2.7), read those topics first and cover exactly those.

### 2b. The College Board: the CED and the exam

- The course's **Course and Exam Description (CED)**, from its AP Central page: units, topics, learning objectives, skills, and the exam's sections, timing, and question types. Topic numbers on the site match the CED (`topic: "2.10"`).
- **Released free-response questions and scoring guidelines** from AP Central: the model for free-response shape and for rubric rows (one point a row, what earns it, what does not). Quote a prompt only as rule 1 allows.
- **Practice exams** in AP Classroom (teacher access): the model for evidence items and difficulty. AP Cybersecurity's Unit 3 follows Practice Exam 1's evidence style this way. Never copy its items.

### 2c. The teacher's own materials

From the course folder, read: the unit plan (what was taught each day and its misconceptions, which become the distractors), the guided notes keys (ideas exactly as taught), the vocabulary deck (some courses limit answers to deck terms), the calendar or Blackbaud import (dates), and every real quiz and test with its key (to avoid). Extract PDFs to text (`pdftotext -layout`) for the writers.

### 2d. Other sources

- **History:** public-domain primary sources, fetched and quoted verbatim, each with a `cite` block and URL. WebFetch quotes about 125 characters at a time, so rebuild an excerpt from consecutive pieces and confirm the whole matches. `sourcebooks.web.fordham.edu` works; `sourcesbooks.fordham.edu` does not. Project Gutenberg and the Internet Archive cut off after about 100,000 characters. Secondary interpretations are written as labeled practice passages, never presented as a real historian's words.
- **Data tables:** real, cited data only.
- **Code courses:** the class's own walkthrough programs and project (the dungeon crawler) set the style and the settings students recognize.

### 2e. Maps, images, and charts

Albert uses many map and image questions (in AP World Unit 1 alone, 25 questions have an image or map as their only stimulus, and the notes in `../private/albert-notes/` list them topic by topic). The site can carry the same kinds, in three ways. The AP World briefs written so far say "no images"; a brief for this work replaces that rule with the steps below.

**What the site can show today and what still has to be built**

| Block in a source | Status |
|---|---|
| `{ svg, caption }`, drawn graphics | Works now. Calc's graphs come from `plot.js` this way, with alt text required. |
| `{ table }`, data tables | Works now. |
| `{ img, alt, caption, credit, license, url }`, a picture file | Works now (11/6). `sourcesHTML` shows the picture lazily with its caption, credit, and license, at most 70% of the screen tall. Files live in `images/<course>/`; `tools/fetch-images.mjs` downloads and resizes them, and `check-whap.mjs` fails if one is missing or over 400 KB. |
| A map builder | Works now (11/6). `tools/build-maps.mjs` draws each spec in `tools/maps/<course>.mjs` and any `tools/maps/<course>-*.mjs` (one file per writer, so parallel writers never edit one file) as SVG from Natural Earth's 1:50m land (the `world-atlas` package), simplified on screen to about 10 to 30 KB a map, with places, routes, battles, region names, and a legend, styled for light and dark mode. It draws no borders. |
| `bars()` in `plot.js`, a chart | Works now (11/6). A bar chart of cited data; put the numbers in a `table` block too. |

**1. Maps the site draws itself (start here)**

- Draw each map from Natural Earth (public domain), with only what the question needs: the empires, routes, or regions, labeled in plain words. Examples: the Silk Roads and Indian Ocean routes, the Mongol khanates, the gunpowder empires, the Columbian Exchange, the 1914 alliances, decolonization by decade.
- The site owns these: no copyright question, sharp at any size, readable in light and dark mode.
- Every map has `alt` text that says what it shows in a sentence, the way `plot.js` requires, and a `caption` naming the map ("The Mongol khanates, c. 1300").
- Check every border, route, and date against two reliable references before writing questions on it. A map the site draws is a claim the site makes.
- Questions to write: what development the map shows, what explains the pattern, what changed between two maps, which region or route a source describes.

**2. Historical maps and art as primary sources**

- Only public-domain or openly licensed pictures: Wikimedia Commons (check each file's license line, not the page's general one), the Library of Congress, the Metropolitan Museum's Open Access, the Smithsonian's open collection. Works published before 1930 are public domain in the United States, but a modern photograph of a building or object can carry its own license.
- Examples: the Catalan Atlas (1375), Mughal miniatures, Edo woodblock prints, World War I posters, political cartoons published before 1930.
- Download each file into the session, look at it with the Read tool before writing anything about it, resize it (about 1200 pixels wide, under 300 KB), and save it in `images/<course>/` with a plain name.
- Record for each picture: the title, the maker, the date, the source URL, the license, and the credit line to show. A picture whose license cannot be confirmed is not used.
- Questions to write: point of view, purpose, audience, and context of the image, as the AP exam asks them.

**3. Charts**

- Data already in a table can also be drawn as a line or bar chart (SVG, the same way as `plot.js`), the way the AP exam shows population or trade figures. Real, cited data only, with the table kept in `alt` or below the chart so screen readers get the numbers.

**Never**

- Albert's images or maps, textbook maps, or any picture whose license is unknown.
- A map or picture that is the same one Albert uses for the same idea. The notes' "what each question uses" lines name Albert's images; check them as for text sources.
- An image question that can be answered without looking at the image, unless the AP exam would ask it that way (a context question about a famous source).

**Checks to add with the build**

- Every `img` block: the file exists in `images/`, and `alt`, `credit`, and `license` are filled in.
- Every drawn map: `alt` text, and a note in the writer's report naming the two references its borders and routes were checked against.
- The writer's report lists every picture with its license and URL, and says the writer looked at it.

The same approach works for other courses: Calc already draws its graphs, and AP Cybersecurity could use drawn network diagrams.

## Step 3. Write the briefs

A brief is the writer's only context. Start from the closest one in `../private/briefs/`:

| Course kind | Start from |
|---|---|
| History with sources (stimulus sets, SAQ, DBQ, LEQ) | `whap-unit.md`, then `whap-topic-quiz.md`, `whap-unit-assessment.md` |
| Math with graphs and free response | `calc-unit.md`, and `calc-second-reader.md` for the check |
| Code (Java) | `csa-unit.md`, `csa-year-mocks.md`, `csa-crawler.md` |
| Code (C#) with AP written response | `csp-quiz.md` |
| Vocabulary and scenario courses with a running case | `cyber-unit.md`, `cyber-free-response.md`, `cyber-mock.md`, `cyber-unit3.md` |
| A pass over live questions | `clarity-correctness-pass.md` |

Every brief says: what to read first (with paths, including `../private/albert-notes/<course>.md` for the course's patterns), the units and topics, the item shapes (copy them from an existing deck file), the source and vocabulary rules, the list of live assessment setups not to reuse, the writing rules, the file to write and its id prefix, the exact check command, and a report format ("the file path, counts by skill, the last line of the check, anything not settled; nothing else").

The briefs refer to paths in the Claude session (`/home/claude/...`, `/mnt/user-data/uploads/...`). Stage the course files into the session, then fix the paths at the top of the copy you use.

## Step 4. Write the questions

- **One writer per file, in parallel,** each with its own id prefix, file, and scratch folder (`VERIFY_DIR=/tmp/verify-<name>` for the code checkers), so writers never collide. Give each writer the other writers' subjects to avoid.
- **Then a second reader** who solves every item from the stem alone before reading the key (`calc-second-reader.md`), and **a clarity pass** (`clarity-correctness-pass.md`) before students see it.
- **Never change an item's `id`** after it is live: progress, teacher edits, and the Class tab are keyed to it.

## Step 5. Wire the course in

1. **The deck,** `decks/<deck>.js`, importing the writers' files. Its fields:

   | Field | What it is |
   |---|---|
   | `id` | permanent. Progress is stored per deck id, so a new unit usually extends the deck and keeps the id (AP CSP's deck is still `csp-q3`). |
   | `course`, `title`, `blurb` | what Home shows. |
   | `lang` | `"java"`, `"csharp"`, `"math"` (KaTeX), or `"none"`. |
   | `skills` | `{ id, name, from, short }`, one meter each on Home. |
   | `items` | the review bank. |
   | `forms` | fixed mocks: `{ id, name, group, date, items }`, grouped on the Mock page by `group`. |
   | `mock` | the mock's shape: `name`, `total`, `clock`, `intro`, `partA`, `partB` (`kind` is `"wr"`, `"fr"`, or `"rubric"`), and `sections` for exam section labels. |
   | `sets` | shared stimuli (sources, graphs from `plot.js`, tables). |
   | `dates` | `{ name, date }` for the countdown, next first. |
   | `focus` | Home's "Only:" buttons: `skills`, `types`, or a `filter`. A `name` may be a getter that changes with the date (AP Cyber's "Quiz 24 words"). |

   Item types in use: `mcq` (key first, `answer: 0`, the site shuffles), `output`, `trace`, `code`, `wr`, `fr`, `frq`, `essay`, `vocab`. Copy the shape from a deck that uses it. An item with `opens: "YYYY-MM-DD"` stays out of review until that day (AP Cyber opens each word on its meeting's schedule).

2. **`courses.js`:** one entry per section, `{ id, name, short, period, book, passwords, decks }`. Sections of one course share one deck.
3. **`firestore.rules`:** add the deck id and its sections to `deckCourses`, so the course's teacher may edit its questions. JD republishes the rules.
4. **`README.md` and `SETUP.md`:** a section for the course (what is on it, where its files are) and a setup step for its teacher and roster.

## Step 6. Check everything

| Course kind | Command |
|---|---|
| C# | `node tools/verify.mjs <file>` (compiles and runs every block on .NET 10) |
| Java | `node tools/verify-java.mjs <file>` (Java 21) |
| Math | `node tools/check-calc.mjs review\|test\|quiz <files>` (shapes, LaTeX, point totals, writing rules), plus sympy for the math |
| Anything | a node script that loads the file and checks four choices, four explanations, `answer: 0`, every `set` exists, no duplicate ids; and `grep -nP '[\x{2013}\x{2014}]\| - \|\bwe\b\|\bour\b\|\bus\b\|your teacher'` on the prose |

Then serve the site (`python3 -m http.server 8765`) and run **every** end-to-end test, not only the new course's: `tools/e2e*.mjs`. Write one for the new course by copying the closest (`e2e-whap.mjs`, `e2e-calc.mjs`, `e2e-csa.mjs`, `e2e-cyber.mjs`): a review set, a mock, the Class tab, phone width. Open the course in the demo (`index.html?demo`) and look at a few items in a screenshot.

## Step 7. Ship it

1. `node tools/build-preview.mjs` rebuilds `preview.html` (not committed).
2. Copy the changed files into JD's repo on his computer, never overwriting his `firebase-config.js`, and commit as JD. JD pushes.
3. JD's steps, listed in the reply and in `SETUP.md`: publish the rules, add the teacher (Class tab, **Teachers > Add a teacher**, with their sections checked), paste each section's roster on the Class tab, and run any one-time script.

## Keeping a course current

When JD says "look at the upcoming quizzes for <course> and update the site," the routine is:

1. Find what is next in the course folder: the release or quiz schedule, the Blackbaud import (titles, due dates, descriptions), the daily run sheets, and the unit plan.
2. Read the real upcoming quizzes and tests, to know their topics and shape and to avoid them.
3. Add the dates to `dates`, a focus button for each upcoming assessment, review items for what is new since the last build, and mocks in the real assessment's shape.
4. Check, test, and ship as above.

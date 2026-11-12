# Setup: GitHub Pages + Firebase

About 20 minutes, all in the browser. Nothing here costs money: the Firebase free plan (Spark) allows 50,000 reads and 20,000 writes a day, and one class uses a few hundred.

Until Step 7 is done the site runs in **demo mode**: a pretend sign-in, progress kept in the browser. Add `?demo` to the address at any time to see demo mode again.

## 1. The repo and the Pages site

The repo belongs to the **Sierra-Canyon** organization, so the site's address is `https://sierra-canyon.github.io/ap-review/`. GitHub writes the organization's name in lowercase there.

1. Move the repo. In `jd12/ap-review`: **Settings > General**, at the bottom **Transfer ownership**. New owner `Sierra-Canyon`, then type `jd12/ap-review` to confirm. You need permission to create repositories in the organization. If the transfer is refused, an organization owner gives you that permission, or does the transfer.
2. Point your copy at the new address. In this folder:

   ```
   git remote set-url origin https://github.com/Sierra-Canyon/ap-review.git
   git remote -v
   ```

   *You should see* `https://github.com/Sierra-Canyon/ap-review.git` on both lines. (GitHub forwards the old address for a while, but do not count on it.)
3. Keep the repo **public**. Pages on a private repo needs a paid organization plan.
4. Push this folder. The roster file in `../private/` is not part of the repo; `.gitignore` keeps it out.
5. Repo **Settings > Pages**: Source **Deploy from a branch**, branch `main`, folder `/ (root)`. Save.
   *If it broke:* if Pages is missing or will not save, the organization does not let members publish sites. An organization owner turns it on in the organization's **Settings > Member privileges > Pages creation**, with **Public** checked.
6. *You should see* the site at `https://sierra-canyon.github.io/ap-review/` within a minute or two, with the yellow demo-mode band.

## 2. The Firebase project

1. Go to `console.firebase.google.com` and **Create a project**. Name it `ap-review`. Turn Google Analytics off.
2. **Build > Authentication > Get started > Sign-in method > GitHub**. Turn it on. Leave this tab open: it shows a **callback URL** like `https://ap-review.firebaseapp.com/__/auth/handler` (the project name in it may differ). Copy it.

## 3. The GitHub OAuth app

Register it under the organization too, so the authorization screen students see says it is from Sierra Canyon, and the app stays with the school's site.

1. Go to `https://github.com/organizations/Sierra-Canyon/settings/applications`, then **New OAuth App**. (This needs an organization owner. If you are not one, register it under your own account at **Settings > Developer settings > OAuth Apps**, and an owner can move it later from the app's page with **Transfer ownership**.)
2. Application name `AP Review`. Homepage URL `https://sierra-canyon.github.io/ap-review/`.
3. Under **Redirect URIs**, paste the callback URL from Firebase into the **Redirect URI** box. Leave **Allow wildcard matching** and **Enable Device Flow** unchecked. Uncheck **Expire user access tokens**: Firebase uses the token once, at sign-in, and never refreshes it.
4. **Register application**, then **Generate a new client secret**.
5. Back in the Firebase tab, paste the **Client ID** and **Client secret** into the GitHub provider and **Save**.

If you already registered the app under @jd12: change its Homepage URL to the address above, and either keep it there or transfer it. The Client ID and secret stay the same after a transfer, so Firebase needs no change.

## 4. Allow the Pages domain

**Authentication > Settings > Authorized domains > Add domain**: `sierra-canyon.github.io`. If `jd12.github.io` is in the list from earlier, delete it.

## 5. The database and its rules

1. **Build > Firestore Database > Create database**. Production mode. Location `us-west2 (Los Angeles)`.
2. **Rules** tab: replace everything with the contents of `firestore.rules`, then **Publish**.

The rules give the teacher role to GitHub account number `5401810` (@jd12). That is your personal account, and moving the repo does not change it. If you sign in with a different account, change that number in `firestore.rules` and in `firebase-config.js`. Any account's number is at `https://api.github.com/users/<login>`, in the `id` field.

## 6. The web app config

1. The gear icon > **Project settings > General > Your apps**, the `</>` (Web) button. Nickname `AP Review`. Do not set up Firebase Hosting.
2. Copy the `firebaseConfig = { ... }` object it shows.

## 7. Paste it in and push

In `firebase-config.js`, replace `export const firebaseConfig = null;` with the object, keeping `export const` in front. Commit and push. When Pages rebuilds, the demo band is gone and the button says **Sign in with GitHub**.

## 8. The roster

1. Sign in on the site as @jd12. The **Class** tab appears.
2. Open `../private/roster_import.txt`, copy every line, paste it into **Roster > Students to add**, and press **Add to roster**. The lines already carry each account's GitHub number, so nothing is looked up.
3. Harrison Suh is in the file under `hjsuhmail-png`, the account he uses on Classroom 50.

Anyone not on the roster who signs in shows under **Waiting to be added** and can save nothing until you press **Add**. **Dismiss** clears the request.

### The AP Cybersecurity and AP CSA rosters

The site has three courses. Each roster entry lists the courses a student is in, and a student sees only those courses. The course menu at the top of the page switches courses; the Class tab, its roster box, and **Add** all work on the course that is showing.

1. Switch the course menu to **AP Cyber**, then open the **Class** tab.
2. Open `../private/roster_import_cyber.txt`, copy all six lines, paste them into **Roster > Students to add**, and press **Add to roster**.
3. Switch the menu to **AP CSA** and do the same with `../private/roster_import_csa.txt` (eleven lines). Jimmy Lin and Ashley Gao dropped and are not in it.

A student already on another course's roster is added to this one too; **Remove** takes a student off only the course that is showing. Entries added before 11/1 have no course list and count as AP CSP, so the 14 CSP students need nothing. Julius Chappell filled in the GitHub form (`JuliusChappell`) but is not one of the six, so he is not in the file.

## 10. School email sign-in (the 11/1 update)

The site now keeps **one record per student**, keyed by their school email (`first.last@scsstudent.org`), and lets a student in by either way: GitHub (your courses) or that email and a password (courses like AP World History, where the teacher makes the accounts). Both open the same record, so a student in your class and in World History sees both courses after either sign-in. The site shows only the **name the student goes by in class**; the email is the sign-in and nothing else.

Do these in order, right after you push this update (about 10 minutes):

1. **Turn on email sign-in.** Firebase console, **Authentication > Sign-in method > Add new provider > Email/Password**. Turn on the first switch (Email/Password), leave Email link off, **Save**. Leave **Authentication > Settings > User actions > Enable create (sign-up)** on: the Class tab uses it to make students' sign-ins.
2. **Publish the new rules.** **Firestore Database > Rules**, replace everything with the contents of `firestore.rules`, **Publish**. Until you do, the site cannot read the new records.
3. **Move your roster.** Sign in as @jd12 and open the **Class** tab. The first time, the old roster (keyed by GitHub number) becomes student records with their progress; a message says how many moved. Students' own progress also comes along the first time each one signs in.
4. **Add school emails to AP CSP.** With the course menu on **AP CSP**, paste `../private/roster_csp_emails.txt` (14 lines: name, school email, GitHub username, GitHub number) into **Roster > Students to add** and press **Add to roster**. Each record moves to the school email and keeps its progress and its GitHub sign-in. Then switch the menu to **AP CSA** and paste `../private/roster_csa_emails.txt` (11 lines) the same way. Then **AP Cyber** with `../private/roster_cyber_emails.txt` (6 lines). Later additions use the same form: `Name, school email, @github, number`.
5. **Add the World History teacher.** Still on the Class tab, at the bottom: **Teachers > Add a teacher**: name **Ana Dias**, email **adias@sierracanyonschool.org**, check **AP World (B)**, **AP World (C)**, and **AP World (D)**. Her sign-in is made and she is emailed a link to choose a password. She sees only the courses checked for her.
6. **Add the World History rosters.** Switch the course menu to **AP World (B)**, paste `../private/roster_whap_b_emails.txt` (21 lines: name, school email) into **Roster > Students to add**, and press **Add to roster**. Each student gets a sign-in with a first password; **Print sign-in cards** prints them. Then **AP World (C)** with `../private/roster_whap_c_emails.txt` (18 lines) and **AP World (D)** with `../private/roster_whap_d_emails.txt` (19 lines). Six World History students are also in your courses (same school email): they keep those courses and get AP World too, and can sign in by GitHub or by email.
7. **Check that reset emails arrive.** Firebase sends them from `noreply@ap-review-3eb90.firebaseapp.com`. Ask one student to use **Forgot password?** on the sign-in page. If nothing arrives (check spam), ask IT to allow that sender for `@scsstudent.org`. **Authentication > Templates > Password reset** sets the sender name and subject.

### How the World History teacher runs a class

- **Class** tab, **Roster**: paste one student per line, `Name in class, school email` (for example `Brooklyn Chen, Sicheng.Chen@scsstudent.org`). A name left off is made from the email and can be changed in the table (type, then Enter).
- Each new email gets a sign-in with the first password **goblazers** (the same for everyone; the Password column says `first: goblazers` until the student chooses their own). **Print sign-in cards** prints one card per student who has not chosen their own yet.
- On first sign-in a student must choose their own password. After that the teacher no longer sees it ("chosen").
- A student who forgets: **Forgot password?** on the sign-in page, or the teacher's **Send reset link**. Either emails a link to the school address. Teachers cannot see or type a student's password.
- A student already on another course (yours) keeps it and gets World History too; they can sign in either way.
- **Questions** tab: every question on the site for World History, by quiz or test, with its answer. **Edit** fixes wording or the right answer, or hides a question, for all three sections at once; **Restore original** undoes it.

## 15. One first password: goblazers (the 11/2 update)

Every student sign-in made from a roster now starts with **goblazers**. The site no longer saves a first password per student in the `cards` collection (teachers can still read and write it), and at first sign-in the student must choose their own password (the site will not take goblazers). Do this once after pushing:

1. **Publish the rules again** (Firestore Database > Rules, replace with `firestore.rules`, Publish).
2. **Move the sign-ins already made onto goblazers.** The sign-ins made before this update still have their old random passwords, and a web page cannot change another person's password, so this runs once on your computer with a Firebase key. (The Authentication page cannot tell you who has signed in: making a sign-in counts as a sign-in there.)
   1. Firebase console > **Project settings** (gear) > **Service accounts** > **Generate new private key**. Save the file in `../private/` as `firebase-admin-key.json` (never in this repo: anyone with it controls the project).
   2. In Terminal, in this repo: `npm install`, then `node tools/set-first-passwords.mjs ../private/firebase-admin-key.json`. It lists what it would do and changes nothing.
   3. Then `node tools/set-first-passwords.mjs ../private/firebase-admin-key.json --go`. Every student on an AP World or AP Calc roster who has not chosen their own password now has goblazers. It skips students who chose their own, students with GitHub on file, and teachers.
   4. Delete the key file, or keep it only in `private/`.

Until a student signs in and chooses their own password, anyone who knows their school email and goblazers can sign in as them, so have students do their first sign-in soon.

## 14. Assessments on the calendar

Teachers add their quizzes and tests on the Class tab (**Assessments**), and students get a countdown and a review set for each. The site keeps them in a new `assessments/` collection: **publish `firestore.rules` again** (Firestore Database > Rules, replace, Publish). Until then, adding one fails with *permission denied*.

## 13. GitHub first for students in two kinds of course

A student in one of your courses (GitHub) who is also in AP World or AP Calc (email and password) signs in with **GitHub**. The site no longer makes a password login for a student whose record has a GitHub account, and the roster's Password column says "GitHub" for them.

Students added before this change may already have a password login for their school email, and Firebase then refuses their GitHub sign-in ("account exists with different credential"). Turn this off once: **Firebase console > Authentication > Settings > User account linking**, choose **Create multiple accounts for each identity provider**, **Save**. After that, GitHub and email sign-ins are separate Firebase accounts that both open the same student record (the site matches the GitHub number and the school email), so GitHub works and the password still works too.

## 16. AP U.S. Government and Politics (11/11)

The course is on the site for Ms. Salter's Periods B and H, with email and password sign-in like AP World and AP Calc. Publish the rules again first (`firestore.rules` now lists `gov-b` and `gov-h` under `'gov'` in `deckCourses`). Then, on the Class tab, **Teachers > Add a teacher**: name **Melanie Salter**, email **msalter@sierracanyonschool.org**, check **AP Gov (B)** and **AP Gov (H)**. Switch the course menu to **AP Gov (B)** and paste Period B's roster (`Name, school email` per line), then **AP Gov (H)** with Period H's. A student who already has a GitHub account on file (from one of your courses) keeps signing in with GitHub; to switch anyone else to GitHub, type their GitHub username in the roster's GitHub column and press Enter. Print each section's sign-in cards from **Print sign-in cards**. New sign-ins get the first password **goblazers** when they are made; for students added before a password existed, run `node tools/set-first-passwords.mjs ../private/firebase-admin-key.json --go` (step 15).

## 12. AP Calculus AB

The course is on the site, with email and password sign-in like AP World. The teacher is Veronica Bryan: on the Class tab, **Teachers > Add a teacher**, name **Veronica Bryan**, email **rbryan@sierracanyonschool.org**, check **AP Calc AB (A)**, **AP Calc AB (B)**, and **AP Calc AB (D)**. Then switch the course menu to **AP Calc AB (A)** and paste `../private/roster_calc_a_emails.txt` (17 lines), **AP Calc AB (B)** with `../private/roster_calc_b_emails.txt` (15 lines), and **AP Calc AB (D)** with `../private/roster_calc_d_emails.txt` (15 lines). Twelve Calculus students are also in AP World or one of your courses (same school email); they keep those courses and get Calculus on the same sign-in, and the ones with GitHub keep signing in with GitHub (Queenie Liu in AP CSP, Ayan Rajkondawar and Matti Miller in AP CSA, Jonah Plishner in AP Cyber). For more than one section, add a course line per section in `courses.js` (as for AP World) and add its id to `'calc'` in `deckCourses` in `firestore.rules`. Publish the rules again after this update.

## 11. Question edits (the 11/1 evening update)

The **Questions** tab saves teachers' edits in a new `edits/` collection. **Publish the rules again** (**Firestore Database > Rules**, replace everything with `firestore.rules`, **Publish**); until then an edit fails with *permission denied*. A new section of a course must also be added to the deck's list in `deckCourses` in `firestore.rules`, so its teacher may edit.

## 9. Try it as a student

Sign in from a private window with a student account you have, or ask one student to try it first. The first sign-in opens a GitHub pop-up asking to authorize **AP Review**: it reads the public profile only.

## If something breaks

| What you see | Cause |
|---|---|
| `auth/unauthorized-domain` | Step 4: `sierra-canyon.github.io` is not in Authorized domains. |
| GitHub says the redirect URI is not associated | Step 3: the Redirect URI in the OAuth app is not the callback URL Firebase shows. |
| `auth/popup-blocked` | The browser blocked the pop-up. Allow pop-ups for `sierra-canyon.github.io`. |
| Signed in, but nothing saves | Step 5: the rules were not published, or the student is not on the roster. |
| **Could not load the class** on the Class tab | Step 10.2: the new rules are not published, or your GitHub number is not `5401810` in `firestore.rules`. |
| "That email and password do not match" for every student | Step 10.1: the Email/Password provider is off. |
| A student signs in and sees "not on a class list" | Their school email (or GitHub number) is on no roster. Add the line on the Class tab. |
| Reset emails never arrive | Step 10.6: school email is filtering the sender. |

## Checking the site after a change

| Command | What it checks |
|---|---|
| `node tools/verify.mjs decks/csp-q3.js` | every review item on real .NET 10 (70 checks) |
| `node tools/verify.mjs decks/csp-q3-mocks/mc.js` and `.../wr.js` | the three Quiz 3 mock quizzes on real .NET 10 (18 and 21 checks) |
| `node tools/verify.mjs decks/csp-q4/review-a.js`, `review-wr.js`, `mocks.js` | the WR4 to WR6 and Quiz 4 review items and mocks (44, 56, and 40 checks) |
| `node tools/verify-book.mjs` | every book block on real .NET 10, and the writing rules (318 checks) |
| `node tools/runner-diff.mjs` | the page's C# runner against those same .NET results (388 programs) |
| `node tools/runner-vs-dotnet.mjs` | the runner against .NET on 162 extra programs, mostly student mistakes |
| `node tools/verify-java.mjs decks/csa-u2/<file>.js` (and `decks/csa-year/<file>.js`) | every AP CSA item and free-response solution with Java 21, one file at a time (about 1,000 checks in all) |
| `node tools/e2e.mjs`, `e2e-book.mjs`, `e2e-csa.mjs`, `e2e-cyber.mjs`, `e2e-accounts.mjs` | the whole site in Chromium: AP CSP, the book, AP CSA, and AP Cybersecurity (serve the folder on port 8765 first) |

The first two and the fourth need the .NET 10 SDK. All of them need Node.

## Updating the items

The items are in `decks/csp-q3.js`. After any edit, run the checker (needs the .NET 10 SDK and Node):

```
node tools/verify.mjs decks/csp-q3.js
```

*You should see* `70 of 70 checks pass`, and the details in `tools/verify_report.txt`. Then commit and push. Students keep their progress on items whose `id` did not change.

The AP Cybersecurity items are in `decks/cyber-u2/` (review) and `decks/cyber-u2-mocks/` (the three mock tests). The vocabulary items are built from the course Anki deck; after a change to the deck, export it as text and rebuild them:

```
node tools/build-cyber-vocab.mjs <path to AP_Cybersecurity_Anki_Deck.txt>
```

## Adding a course or a test

The courses are listed in `courses.js`: a name, a period, whether it has the Learn book, and its decks. A new test is a new deck file in `decks/` (its own `id`, skills, `mock` shape, and items), imported in `courses.js` and put first in its course's `decks`. Progress is stored per deck, so earlier tests keep their progress.

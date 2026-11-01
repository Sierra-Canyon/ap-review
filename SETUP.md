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

## 9. Try it as a student

Sign in from a private window with a student account you have, or ask one student to try it first. The first sign-in opens a GitHub pop-up asking to authorize **AP Review**: it reads the public profile only.

## If something breaks

| What you see | Cause |
|---|---|
| `auth/unauthorized-domain` | Step 4: `sierra-canyon.github.io` is not in Authorized domains. |
| GitHub says the redirect URI is not associated | Step 3: the Redirect URI in the OAuth app is not the callback URL Firebase shows. |
| `auth/popup-blocked` | The browser blocked the pop-up. Allow pop-ups for `sierra-canyon.github.io`. |
| Signed in, but nothing saves | Step 5: the rules were not published, or the student is not on the roster. |
| **Could not load the class** on the Class tab | Your GitHub number is not `5401810` in `firestore.rules`. |

## Checking the site after a change

| Command | What it checks |
|---|---|
| `node tools/verify.mjs decks/csp-q3.js` | every review item on real .NET 10 (70 checks) |
| `node tools/verify.mjs decks/csp-q3-mocks/mc.js` and `.../wr.js` | the three mock quizzes on real .NET 10 (18 and 21 checks) |
| `node tools/verify-book.mjs` | every book block on real .NET 10, and the writing rules (318 checks) |
| `node tools/runner-diff.mjs` | the page's C# runner against those same .NET results (388 programs) |
| `node tools/runner-vs-dotnet.mjs` | the runner against .NET on 162 extra programs, mostly student mistakes |
| `node tools/verify-java.mjs decks/csa-u2/<file>.js` (and `decks/csa-year/<file>.js`) | every AP CSA item and free-response solution with Java 21, one file at a time (about 1,000 checks in all) |
| `node tools/e2e.mjs`, `e2e-book.mjs`, `e2e-csa.mjs`, `e2e-cyber.mjs` | the whole site in Chromium: AP CSP, the book, AP CSA, and AP Cybersecurity (serve the folder on port 8765 first) |

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

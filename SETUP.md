# Setup: GitHub Pages + Firebase

About 20 minutes, all in the browser. Nothing here costs money: the Firebase free plan (Spark) allows 50,000 reads and 20,000 writes a day, and one class uses a few hundred.

Until Step 7 is done the site runs in **demo mode**: a pretend sign-in, progress kept in the browser. Add `?demo` to the address at any time to see demo mode again.

## 1. The repo and the Pages site

1. On GitHub, as @jd12, create a **public** repo named `csp-review`. (Pages on a private repo needs a paid plan.)
2. Push this folder to it. The roster file in `../private/` is not part of the repo; `.gitignore` keeps it out.
3. Repo **Settings > Pages**: Source **Deploy from a branch**, branch `main`, folder `/ (root)`. Save.
4. *You should see* the site at `https://jd12.github.io/csp-review/` within a minute or two, with the yellow demo-mode band.

## 2. The Firebase project

1. Go to `console.firebase.google.com` and **Create a project**. Name it `csp-review`. Turn Google Analytics off.
2. **Build > Authentication > Get started > Sign-in method > GitHub**. Turn it on. Leave this tab open: it shows a **callback URL** like `https://csp-review.firebaseapp.com/__/auth/handler`. Copy it.

## 3. The GitHub OAuth app

1. GitHub **Settings > Developer settings > OAuth Apps > New OAuth App**.
2. Application name `CSP Review`. Homepage URL `https://jd12.github.io/csp-review/`. Authorization callback URL: the one from Firebase.
3. **Register application**, then **Generate a new client secret**.
4. Back in the Firebase tab, paste the **Client ID** and **Client secret** into the GitHub provider and **Save**.

## 4. Allow the Pages domain

**Authentication > Settings > Authorized domains > Add domain**: `jd12.github.io`.

## 5. The database and its rules

1. **Build > Firestore Database > Create database**. Production mode. Location `us-west2 (Los Angeles)`.
2. **Rules** tab: replace everything with the contents of `firestore.rules`, then **Publish**.

The rules give the teacher role to GitHub account number `5401810` (@jd12). If you sign in with a different account, change that number in `firestore.rules` and in `firebase-config.js`. Any account's number is at `https://api.github.com/users/<login>`, in the `id` field.

## 6. The web app config

1. The gear icon > **Project settings > General > Your apps**, the `</>` (Web) button. Nickname `CSP Review`. Do not set up Firebase Hosting.
2. Copy the `firebaseConfig = { ... }` object it shows.

## 7. Paste it in and push

In `firebase-config.js`, replace `export const firebaseConfig = null;` with the object, keeping `export const` in front. Commit and push. When Pages rebuilds, the demo band is gone and the button says **Sign in with GitHub**.

## 8. The roster

1. Sign in on the site as @jd12. The **Class** tab appears.
2. Open `../private/roster_import.txt`, copy every line, paste it into **Roster > Students to add**, and press **Add to roster**. The lines already carry each account's GitHub number, so nothing is looked up.
3. Two students are not in that file:
   - **Harrison Suh**: `harrisonsuh2030` from the form no longer exists on GitHub (404 on 10/31). Probably renamed.
   - **Audrey Yang**: no GitHub username on record.
   When either signs in, the account shows under **Waiting to be added**. Type the name and press **Add**.

Anyone else who signs in lands in the same list and can save nothing until you add them.

## 9. Try it as a student

Sign in from a private window with a student account you have, or ask one student to try it first. The first sign-in opens a GitHub pop-up asking to authorize **CSP Review**: it reads the public profile only.

## If something breaks

| What you see | Cause |
|---|---|
| `auth/unauthorized-domain` | Step 4: `jd12.github.io` is not in Authorized domains. |
| GitHub says the redirect URI is not associated | Step 3: the callback URL in the OAuth app is not the one Firebase shows. |
| `auth/popup-blocked` | The browser blocked the pop-up. Allow pop-ups for `jd12.github.io`. |
| Signed in, but nothing saves | Step 5: the rules were not published, or the student is not on the roster. |
| **Could not load the class** on the Class tab | Your GitHub number is not `5401810` in `firestore.rules`. |

## Updating the items

The items are in `decks/csp-q3.js`. After any edit, run the checker (needs the .NET 10 SDK and Node):

```
node tools/verify.mjs decks/csp-q3.js
```

*You should see* `70 of 70 checks pass`, and the details in `tools/verify_report.txt`. Then commit and push. Students keep their progress on items whose `id` did not change.

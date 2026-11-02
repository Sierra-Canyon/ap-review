// Sets the first password (goblazers) on every student email sign-in whose student has not chosen their own password yet.
// A web page cannot change another person's password, so this runs on your computer with a Firebase service-account key.
//
// 1. Firebase console > Project settings (gear) > Service accounts > Generate new private key. Save the JSON file in
//    ../private/ (never in this repo), for example ../private/firebase-admin-key.json.
// 2. In Terminal, in this repo:  npm install firebase-admin   (once)
// 3. See what it would do:       node tools/set-first-passwords.mjs ../private/firebase-admin-key.json
//    Then do it:                 node tools/set-first-passwords.mjs ../private/firebase-admin-key.json --go
// 4. Delete the key file when you are done (or keep it in private/; anyone with it controls the project).
//
// Skipped: students who signed in and chose their own password, students with GitHub on file (they use GitHub),
// teachers, and anyone not on a password course's roster.
import { readFileSync } from "node:fs";
import { initializeApp, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

const FIRST_PASSWORD = "goblazers";
const [keyPath] = process.argv.slice(2).filter((a) => !a.startsWith("--"));
const go = process.argv.includes("--go");
if (!keyPath) { console.log("usage: node tools/set-first-passwords.mjs <service-account-key.json> [--go]"); process.exit(2); }

initializeApp({ credential: cert(JSON.parse(readFileSync(keyPath, "utf8"))) });
const auth = getAuth(), db = getFirestore();
// The courses whose students sign in with email and password (passwords: true in courses.js).
const { courses } = await import("../courses.js");
const pwCourses = new Set(courses.filter((c) => c.passwords).map((c) => c.id));

const students = (await db.collection("students").get()).docs.map((d) => ({ id: d.id, ...d.data() }))
  .filter((s) => s.email && (s.courses || []).some((c) => pwCourses.has(c)));
const tally = { set: [], chose: [], github: [], noLogin: [] };
for (const s of students.sort((a, b) => a.email.localeCompare(b.email))) {
  if (s.ghId) { tally.github.push(s.email); continue; }
  const p = await db.collection("progress").doc(s.id).get();
  if (p.exists && p.data().pwSet) { tally.chose.push(s.email); continue; }
  let user;
  try { user = await auth.getUserByEmail(s.email); } catch (e) { tally.noLogin.push(s.email); continue; }
  if (!user.providerData.some((x) => x.providerId === "password")) { tally.noLogin.push(s.email); continue; }
  if (go) await auth.updateUser(user.uid, { password: FIRST_PASSWORD });
  tally.set.push(s.email);
}
console.log(`${go ? "Set" : "Would set"} the first password to ${FIRST_PASSWORD} for ${tally.set.length} students.`);
console.log(`Skipped ${tally.chose.length} who chose their own, ${tally.github.length} with GitHub, ${tally.noLogin.length} with no email sign-in yet.`);
if (tally.noLogin.length) console.log("No email sign-in yet (paste them on the Class tab to make one):\n  " + tally.noLogin.join("\n  "));
if (!go) console.log("\nNothing was changed. Run again with --go to set them.");
process.exit(0);

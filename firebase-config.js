// Paste the config object from Firebase console > Project settings > Your apps > Web app.
// While this is null the site runs in demo mode (no real sign-in, progress kept in the browser).
// These values are not secrets: every Firebase web app ships them to the browser. firestore.rules is what protects the data.
export const firebaseConfig = null;
/* Example of what it looks like once filled in:
export const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "csp-review.firebaseapp.com",
  projectId: "csp-review",
  storageBucket: "csp-review.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abc123",
};
*/

// GitHub account numbers (not usernames) that see the Class view. 5401810 is @jd12.
// The same number is in firestore.rules, which is what actually grants teacher access.
export const teacherGithubIds = ["5401810"];
export const teacherName = "Mr. DeVaughn-Brown";

// The Firebase SDK, bundled into this repo by tools/build-firebase.mjs so the site does not depend on a CDN.
export const firebaseSdk = "./vendor/firebase.js";

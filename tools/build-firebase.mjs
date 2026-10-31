// Bundles the parts of the Firebase SDK the site uses into vendor/firebase.js (one ES module, no CDN).
// Run from the repo root after `npm install`: node tools/build-firebase.mjs
import { build } from "esbuild";
import { writeFileSync, mkdirSync } from "node:fs";

mkdirSync("tools/.tmp", { recursive: true });
writeFileSync("tools/.tmp/firebase-entry.js", `
export { initializeApp } from "firebase/app";
export { getAuth, GithubAuthProvider, signInWithPopup, signOut, onAuthStateChanged, getAdditionalUserInfo } from "firebase/auth";
export { getFirestore, doc, getDoc, setDoc, deleteDoc, collection, getDocs } from "firebase/firestore";
`);
await build({
  entryPoints: ["tools/.tmp/firebase-entry.js"],
  bundle: true, format: "esm", minify: true, target: "es2020",
  outfile: "vendor/firebase.js",
  legalComments: "eof",
});
console.log("wrote vendor/firebase.js");

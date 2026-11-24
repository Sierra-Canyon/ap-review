// Downloads the pictures the history questions use into images/<course>/, about 1200 pixels on the long side and under 300 KB.
// Every picture here is public domain: The Met's Open Access images (CC0), and Library of Congress prints and photographs
// the Library marks "No known restrictions on publication" (AP U.S. History; the list is in tools/images/apush.mjs).
// HANDOFF.md, section 2e.
// Usage: node tools/fetch-images.mjs        (skips files already there; add --force to fetch again)
// Resizing uses macOS's built-in sips. Elsewhere it uses sharp if installed (npm i -D sharp), or saves the file as is and says so.
import { existsSync, writeFileSync, statSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";
import { execFileSync } from "node:child_process";
import { pictures as apush } from "./images/apush.mjs";

export const pictures = [
  { file: "images/whap/paiza.jpg", met: 39624, title: "Safe Conduct Pass (Paiza) with Inscription in Phakpa Script, Yuan dynasty, late 13th century" },
  { file: "images/whap/elephant-clock.jpg", met: 451402, title: "\"The Elephant Clock\", folio from a Book of the Knowledge of Ingenious Mechanical Devices by al-Jazari, 1315" },
  { file: "images/whap/shah-jahan.jpg", met: 451270, title: "Chitarman, \"Shah Jahan on a Terrace, Holding a Pendant Set With His Portrait\", 1627 to 1628" },
  { file: "images/whap/nanban-screen.jpg", met: 65417, title: "\"Arrival of the Europeans\", pair of six-panel folding screens, Japan, first quarter of the 17th century" },
  { file: "images/whap/americans-yokohama.jpg", met: 73542, title: "Ippōsai Yoshifuji, \"Americans on an Outing\", 1861" },
  { file: "images/whap/takanawa-railway.jpg", met: 73551, title: "Tsukioka Yoshitoshi, \"Illustration of Steam Locomotive Tracks at Takanawa\", 1872" },
  { file: "images/whap/progress-of-the-century.jpg", met: 659890, title: "Currier & Ives, \"The Progress of the Century\", 1876" },
  // Added 11/8 for the quizzes and tests (decks/whap-mocks/w2b.js, w3a.js, w6a.js).
  { file: "images/whap/phoenix-silk.jpg", met: 39729, title: "Textile with Phoenix, Winged Animal and Flowers, Central Asia, 13th to early 14th century" },
  { file: "images/whap/suleiman-tughra.jpg", met: 449533, title: "Tughra (Insignia) of Sultan Süleiman the Magnificent (r. 1520 to 1566), ca. 1555 to 1560" },
  { file: "images/whap/peace-talks-1895.jpg", met: 55546, title: "Fuenken Tsuneshige, \"Negotiations after the Sino-Japanese War\", March 1895" },
];

// The Library of Congress's JSON view of an item (https://www.loc.gov/item/<id>/?fo=json): checks the rights advisory and
// returns the largest image URL no wider than 2000 pixels.
async function locImage(p) {
  const res = await fetch(`https://www.loc.gov/item/${p.loc}/?fo=json`, { headers: { "User-Agent": "ap-review image fetch (school review site)" } });
  if (!res.ok) throw new Error(`${p.file}: ${res.status} from loc.gov item ${p.loc}`);
  const j = await res.json();
  const rights = [].concat(j.item?.rights_advisory || j.item?.rights || []).join(" ");
  // pre1930: a map or print published before 1930 whose page gives no rights advisory (Geography and Map Division items)
  if (!p.pre1930 && !/no known restrictions/i.test(rights)) throw new Error(`${p.file}: loc.gov item ${p.loc} is not marked "No known restrictions" (${rights.slice(0, 120) || "no rights statement"}); do not use it`);
  if (p.src) return p.src; // the image file URL the picture's scout opened and looked at
  const urls = [].concat(j.item?.image_url || j.image_url || []).filter((u) => /\.(jpg|jpeg|png|gif)/i.test(u));
  const width = (u) => +(u.match(/[#&?]w=(\d+)/)?.[1] || 0);
  const pick = urls.filter((u) => width(u) && width(u) <= 2000).sort((a, b) => width(b) - width(a))[0] || urls[urls.length - 1];
  if (!pick) throw new Error(`${p.file}: loc.gov item ${p.loc} lists no image`);
  return pick.startsWith("//") ? "https:" + pick : pick;
}
async function metImage(p) {
  const obj = await (await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${p.met}`)).json();
  if (!obj.isPublicDomain) throw new Error(`${p.file}: The Met no longer lists object ${p.met} as public domain; do not use it`);
  return obj.primaryImage;
}

const force = process.argv.includes("--force");
for (const p of [...pictures, ...apush]) {
  if (existsSync(p.file) && !force) { console.log(`${p.file}: already there`); continue; }
  mkdirSync(dirname(p.file), { recursive: true });
  const url = p.loc ? await locImage(p) : await metImage(p);
  const obj = { primaryImage: url };
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${p.file}: ${res.status} from ${url}`);
  const tmp = p.file + ".orig";
  writeFileSync(tmp, Buffer.from(await res.arrayBuffer()));
  let how = "saved as is";
  try {
    execFileSync("sips", ["-Z", "1200", "-s", "format", "jpeg", "-s", "formatOptions", "72", tmp, "--out", p.file], { stdio: "ignore" });
    how = "resized with sips";
  } catch {
    try {
      const sharp = (await import("sharp")).default;
      await sharp(tmp).resize(1200, 1200, { fit: "inside" }).jpeg({ quality: 72 }).toFile(p.file);
      how = "resized with sharp";
    } catch { writeFileSync(p.file, Buffer.from(await (await fetch(obj.primaryImage)).arrayBuffer())); }
  }
  execFileSync("rm", ["-f", tmp]);
  const kb = Math.round(statSync(p.file).size / 1024);
  console.log(`${p.file}: ${how}, ${kb} KB${kb > 300 ? "  (over 300 KB: resize it before committing)" : ""}`);
}

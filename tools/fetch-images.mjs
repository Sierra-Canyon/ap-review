// Downloads the pictures the AP World questions use into images/whap/, about 1200 pixels on the long side and under 300 KB.
// Every picture here is public domain (The Met's Open Access images are released under CC0). HANDOFF.md, section 2e.
// Usage: node tools/fetch-images.mjs        (skips files already there; add --force to fetch again)
// Resizing uses macOS's built-in sips. Elsewhere it uses sharp if installed (npm i -D sharp), or saves the file as is and says so.
import { existsSync, writeFileSync, statSync, mkdirSync } from "node:fs";
import { execFileSync } from "node:child_process";

export const pictures = [
  { file: "images/whap/paiza.jpg", met: 39624, title: "Safe Conduct Pass (Paiza) with Inscription in Phakpa Script, Yuan dynasty, late 13th century" },
  { file: "images/whap/elephant-clock.jpg", met: 451402, title: "\"The Elephant Clock\", folio from a Book of the Knowledge of Ingenious Mechanical Devices by al-Jazari, 1315" },
  { file: "images/whap/shah-jahan.jpg", met: 451270, title: "Chitarman, \"Shah Jahan on a Terrace, Holding a Pendant Set With His Portrait\", 1627 to 1628" },
  { file: "images/whap/nanban-screen.jpg", met: 65417, title: "\"Arrival of the Europeans\", pair of six-panel folding screens, Japan, first quarter of the 17th century" },
  { file: "images/whap/americans-yokohama.jpg", met: 73542, title: "Ippōsai Yoshifuji, \"Americans on an Outing\", 1861" },
  { file: "images/whap/takanawa-railway.jpg", met: 73551, title: "Tsukioka Yoshitoshi, \"Illustration of Steam Locomotive Tracks at Takanawa\", 1872" },
  { file: "images/whap/progress-of-the-century.jpg", met: 659890, title: "Currier & Ives, \"The Progress of the Century\", 1876" },
];

const force = process.argv.includes("--force");
mkdirSync("images/whap", { recursive: true });
for (const p of pictures) {
  if (existsSync(p.file) && !force) { console.log(`${p.file}: already there`); continue; }
  const obj = await (await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${p.met}`)).json();
  if (!obj.isPublicDomain) throw new Error(`${p.file}: The Met no longer lists object ${p.met} as public domain; do not use it`);
  const res = await fetch(obj.primaryImage);
  if (!res.ok) throw new Error(`${p.file}: ${res.status} from ${obj.primaryImage}`);
  const tmp = p.file + ".orig.jpg";
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

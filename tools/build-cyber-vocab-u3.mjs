// Builds decks/cyber-u2/vocab-u3.js from the course's Anki deck export: the 88 Unit 3 terms.
// Usage: node tools/build-cyber-vocab-u3.mjs <path to AP_Cybersecurity_Anki_Deck.txt>
// One item per term: the deck's definition, and four terms to choose from. Distractors are only Unit 3 terms
// released at or before the term's own meeting, so no item shows a word before it is taught.
// Each item opens the day before its meeting (students have the cards in Anki by then; the quiz is that morning).
import { readFileSync, writeFileSync } from "node:fs";
import { MEETINGS } from "../decks/cyber-u2/meetings.js";

const src = process.argv[2];
if (!src) { console.error("Give the path to the Anki deck export."); process.exit(1); }
const strip = (s) => s.replace(/<br\s*\/?>/g, "\n").replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").trim();
const skillOf = (m) => m <= 30 ? "net-basics" : m <= 35 ? "net-attacks" : m <= 37 ? "wireless" : m === 38 ? "segmentation" : m <= 41 ? "firewalls" : m <= 44 ? "net-logs" : "detection";
const dayBefore = (iso) => { const [y, mo, d] = iso.split("-").map(Number); const t = new Date(y, mo - 1, d - 1); return `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, "0")}-${String(t.getDate()).padStart(2, "0")}`; };

const terms = [];
for (const line of readFileSync(src, "utf8").split("\n")) {
  if (!line || line.startsWith("#")) continue;
  const [term, back, tags = ""] = line.split("\t");
  const unit = /unit::(\d)/.exec(tags)?.[1];
  if (unit !== "1" && unit !== "2" && unit !== "3") continue;
  // Unit 1 and 2 terms are already learned: m 0, used only as distractors when Unit 3 has too few.
  const m = unit === "3" ? Number(/release::m(\d+)/.exec(tags)[1]) : 0;
  const [def, ...rest] = strip(back).split("\n").map((x) => x.trim()).filter(Boolean);
  terms.push({ term, def, example: rest.join(" ").replace(/^Example:\s*/, ""), m, skill: skillOf(m) });
}
let seed = 20261103; const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
const slug = (t) => t.toLowerCase().replace(/\(.*?\)/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const core = (t) => t.replace(/\s*\(.*?\)/g, "").toLowerCase();
const items = [], problems = [];
for (const t of terms.filter((x) => x.m > 0)) {
  const ok = (o) => o.term !== t.term && o.m <= t.m && !t.def.toLowerCase().includes(core(o.term)) && !o.def.toLowerCase().includes(core(t.term));
  const same = terms.filter((o) => o.skill === t.skill && ok(o)).sort(() => rnd() - 0.5);
  const near = terms.filter((o) => o.m > 0 && o.skill !== t.skill && ok(o)).sort((a, b) => (b.m - a.m) || (rnd() - 0.5));
  const old = terms.filter((o) => o.m === 0 && ok(o)).sort(() => rnd() - 0.5);
  const pick = [...same, ...near, ...old].slice(0, 3);
  if (pick.length < 3) problems.push(`${t.term}: only ${pick.length} distractors`);
  if (t.def.toLowerCase().includes(core(t.term))) problems.push(`${t.term}: the definition names the term`);
  const choices = [t, ...pick];
  const meeting = "M" + t.m;
  if (!MEETINGS[meeting]) problems.push(`${t.term}: no date for ${meeting}`);
  items.push({
    id: "u3-v-" + slug(t.term), skill: t.skill, type: "vocab", meeting, opens: dayBefore(MEETINGS[meeting]),
    stem: t.def, question: "Which term is this?",
    choices: choices.map((c) => c.term),
    why: choices.map((c, k) => (k === 0 ? `${c.def}${c.example ? ` Example: ${c.example}` : ""}` : `${c.term}: ${c.def}`)),
    answer: 0,
  });
}
writeFileSync(new URL("../decks/cyber-u2/vocab-u3.js", import.meta.url),
  `// Built by tools/build-cyber-vocab-u3.mjs from the course Anki deck. Do not edit by hand: change the deck and rebuild.\n// The definitions are the deck's, word for word.\nexport default ${JSON.stringify(items, null, 1)};\n`);
const by = {}; for (const i of items) by[i.skill] = (by[i.skill] || 0) + 1;
console.log(items.length, "vocabulary items", by);
if (problems.length) console.log(problems.join("\n"));

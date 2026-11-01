// Builds decks/cyber-u2/vocab.js from the course's Anki deck export (tab-separated: term, definition, tags, deck).
// Usage: node tools/build-cyber-vocab.mjs <path to AP_Cybersecurity_Anki_Deck.txt>
// One item per term: the deck's definition, and four terms to choose from (three from the same skill).
import { readFileSync, writeFileSync } from "node:fs";

const src = process.argv[2];
if (!src) { console.error("Give the path to the Anki deck export."); process.exit(1); }
const strip = (s) => s.replace(/<br\s*\/?>/g, "\n").replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").trim();

const topicSkill = {
  CIA_Triad: "cia", Access_Control: "cia", Control_Types: "controls", Governance: "governance",
  Physical_Security: "physical", Environmental_Controls: "environment", Resilience: "environment",
  Risk_Management: "risk", Adversaries: "adversaries", Attack_Phases: "killchain", Recon_Techniques: "killchain",
};
const layers = new Set(["Defense in Depth", "Layered Security"]);
const unit1Social = new Set(["Social Engineering", "Phishing", "Spear Phishing", "Whaling", "Vishing", "Smishing", "Pretexting", "Baiting", "Quid Pro Quo Attack", "Tailgating", "Shoulder Surfing", "Dumpster Diving"]);
// Pairs that must never sit in the same item: one is another name for the other.
const never = [["Defense in Depth", "Layered Security"]];

const terms = [];
for (const line of readFileSync(src, "utf8").split("\n")) {
  if (!line || line.startsWith("#")) continue;
  const [term, back, tags = ""] = line.split("\t");
  const unit = /unit::(\d)/.exec(tags)?.[1], topic = /topic::(\w+)/.exec(tags)?.[1], release = /release::(m\d+)/.exec(tags)?.[1];
  const [def, ...rest] = strip(back).split("\n").map((x) => x.trim()).filter(Boolean);
  const example = rest.join(" ").replace(/^Example:\s*/, "");
  let skill = null;
  if (unit === "2") skill = layers.has(term) ? "layers" : topic === "Security_Principles" ? "governance" : topicSkill[topic];
  if (unit === "1" && unit1Social.has(term)) skill = "social";
  if (!skill) continue;
  terms.push({ term, def, example, skill, meeting: release ? "M" + Number(release.slice(1)) : "" });
}

let seed = 20261102; const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
const slug = (t) => t.toLowerCase().replace(/\(.*?\)/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const core = (t) => t.replace(/\s*\(.*?\)/g, "").toLowerCase();
const items = [], problems = [];
for (const t of terms) {
  const banned = new Set(never.filter((p) => p.includes(t.term)).flat());
  const ok = (o) => o.term !== t.term && !banned.has(o.term) && !t.def.toLowerCase().includes(core(o.term)) && !o.def.toLowerCase().includes(core(t.term));
  const same = terms.filter((o) => o.skill === t.skill && ok(o)).sort(() => rnd() - 0.5);
  const near = terms.filter((o) => o.skill !== t.skill && ok(o)).sort(() => rnd() - 0.5);
  const pick = [...same, ...near].slice(0, 3);
  if (t.def.toLowerCase().includes(core(t.term))) problems.push(`${t.term}: the definition names the term`);
  const choices = [t, ...pick];
  items.push({
    id: "u2-v-" + slug(t.term), skill: t.skill, type: "vocab", meeting: t.meeting,
    stem: t.def, question: "Which term is this?",
    choices: choices.map((c) => c.term),
    why: choices.map((c, k) => (k === 0 ? `${c.def}${c.example ? ` Example: ${c.example}` : ""}` : `${c.term}: ${c.def}`)),
    answer: 0,
  });
}
writeFileSync(new URL("../decks/cyber-u2/vocab.js", import.meta.url),
  `// Built by tools/build-cyber-vocab.mjs from the course Anki deck. Do not edit by hand: change the deck and rebuild.\n// The definitions are the deck's, word for word.\nexport default ${JSON.stringify(items, null, 1)};\n`);
const by = {}; for (const i of items) by[i.skill] = (by[i.skill] || 0) + 1;
console.log(items.length, "vocabulary items", by);
if (problems.length) console.log(problems.join("\n"));

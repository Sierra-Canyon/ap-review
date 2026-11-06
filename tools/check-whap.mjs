// Structural checks for AP World History files (review bank, topic quizzes, unit assessments).
// Usage: node tools/check-whap.mjs decks/whap/u3.js [more files]
import { readFileSync, existsSync, statSync } from "node:fs";
import { resolve } from "node:path";

const files = process.argv.slice(2);
const problems = [];
const bad = (w, m) => problems.push(`${w}: ${m}`);
const PRACTICE = "Practice passage written for this review, summarizing an interpretation held by many historians.";

function prose(where, s) {
  if (typeof s !== "string") return;
  if (/[–—]| - | -- /.test(s)) bad(where, `dash as punctuation: ${s.slice(0, 90)}`);
  if (/\b(we|We|our|Our|us)\b/.test(s.replace(/"[^"]*"/g, ""))) bad(where, `"we/our/us": ${s.slice(0, 90)}`);
}

function checkSets(sets, isMock) {
  for (const [id, s] of Object.entries(sets)) {
    if (!s.name || !s.intro || !Array.isArray(s.sources)) bad(id, "set needs name, intro, sources");
    prose(id + " intro", s.intro);
    prose(id + " name", s.name);
    for (const src of s.sources) {
      const cite = (src.blocks || []).find((b) => b.cite);
      if (!cite) { if (!s.sources.some((x) => (x.blocks || []).some((b) => b.cite))) bad(id, "set has no cite block"); }
      else {
        if (cite.kind === "practice" && cite.cite !== PRACTICE) bad(id, "practice passage must carry the exact practice label");
        if (!["practice", "map"].includes(cite.kind) && !cite.url) bad(id, `${cite.kind || "source"} has no url`);
        if (!["primary", "practice", "data", "map"].includes(cite.kind)) bad(id, "cite kind must be primary, practice, data, or map");
        // A map the site draws names the references its places, dates, and routes were checked against (HANDOFF.md, 2e).
        if (cite.kind === "map" && !/checked against .+ and .+/.test(cite.cite)) bad(id, "a drawn map's cite must name the two references it was checked against");
        if (cite.kind === "map") prose(id + " map cite", cite.cite);
        if (cite.kind === "practice") for (const b of src.blocks) if (b.p) prose(id + " practice passage", b.p);
      }
      if (!(src.blocks || []).some((b) => b.p || b.table || "svg" in b || b.img)) bad(id, "source has no text, table, graphic, or picture");
      for (const b of src.blocks || []) {
        // drawn maps and charts: real markup with alt text and a caption
        if ("svg" in b) {
          if (typeof b.svg !== "string" || !b.svg.startsWith("<svg")) bad(id, "svg block is empty (is the map in decks/whap/maps.js? run node tools/build-maps.mjs)");
          else if (!/aria-label="[^"]{20,}"/.test(b.svg)) bad(id, "svg needs alt text (aria-label)");
          if (!b.caption) bad(id, "svg block needs a caption");
          prose(id + " caption", b.caption);
        }
        // pictures: a file in images/, with alt, caption, credit, license, and source url
        if (b.img) {
          const f = resolve(b.img);
          if (!/^images\/[a-z0-9-]+\/[a-z0-9-]+\.(jpg|png|webp)$/.test(b.img)) bad(id, "img path should be images/<course>/<plain-name>.jpg");
          else if (!existsSync(f)) bad(id, "img file is missing: " + b.img + " (run node tools/fetch-images.mjs)");
          else if (statSync(f).size > 400 * 1024) bad(id, `img file is over 400 KB: ${b.img}`);
          for (const k of ["alt", "caption", "credit", "license", "url"]) if (!b[k]) bad(id, `img block needs ${k}`);
          prose(id + " caption", b.caption);
        }
      }
    }
  }
}

function checkItems(items, sets, where) {
  const ids = new Set();
  for (const it of items) {
    const w = it.id || "(no id)";
    if (ids.has(w)) bad(w, "duplicate id");
    ids.add(w);
    if (it.set && !sets[it.set]) bad(w, "set not found: " + it.set);
    if (!it.topic) bad(w, "no topic");
    // the Class tab and the teacher's "whole unit" assessments group topics by unit, so a topic stays in its item's unit
    else if (/^u\d$/.test(it.skill || "") && it.topic.split(".")[0] !== it.skill.slice(1)) bad(w, `topic ${it.topic} is not in unit ${it.skill}`);
    if (it.type === "mcq") {
      if (!it.set) bad(w, "mcq without a set (every AP World MC is stimulus based)");
      if (it.choices?.length !== 4 || it.why?.length !== 4 || it.answer !== 0) bad(w, "mcq needs 4 choices, 4 explanations, answer: 0");
      if (new Set(it.choices || []).size !== (it.choices || []).length) bad(w, "two choices are the same");
      if (!it.question) bad(w, "no question");
      [it.question, ...(it.choices || []), ...(it.why || [])].forEach((s, i) => prose(`${w} text ${i}`, s));
    } else if (it.type === "fr") {
      if (!it.part || !it.sub || !it.prompt || !it.earns || !it.example || !it.notExample) bad(w, "SAQ part needs part, sub, prompt, earns, example, notExample");
      if (!Array.isArray(it.yes) || it.yes.length < 2 || !Array.isArray(it.no) || it.no.length < 2) bad(w, "SAQ part needs 2 or more yes and no examples");
      if (!/^(Identify|Describe|Explain)\b/.test(it.prompt || "")) bad(w, "SAQ prompt should start with Identify, Describe, or Explain");
      [it.lead, it.prompt, it.earns, ...(it.yes || []), ...(it.no || []), it.example, it.notExample].forEach((s, i) => prose(`${w} text ${i}`, s));
    } else if (it.type === "essay") {
      if (!["leq", "dbq"].includes(it.kind)) bad(w, "essay kind must be leq or dbq");
      if (!it.prompt || !Array.isArray(it.rows) || !it.rows.length) bad(w, "essay needs prompt and rows");
      const total = (it.rows || []).reduce((t, r) => t + r.max, 0);
      if (it.kind === "leq" && total !== 6) bad(w, `LEQ rubric should total 6 points (got ${total})`);
      if (it.kind === "dbq" && total !== 7) bad(w, `DBQ rubric should total 7 points (got ${total})`);
      for (const r of it.rows || []) if (!Array.isArray(r.levels) || r.levels.length !== r.max + 1) bad(w, `row ${r.name}: levels must have max + 1 entries`);
      if (it.kind === "dbq") {
        if (!it.set || !sets[it.set]) bad(w, "DBQ needs its document set");
        else if (sets[it.set].sources.length !== (it.docs || []).length) bad(w, `docs notes (${(it.docs || []).length}) do not match documents (${sets[it.set].sources.length})`);
      }
      [it.prompt, it.model, ...(it.evidence || []), ...(it.docs || []), ...(it.rows || []).flatMap((r) => r.levels)].forEach((s, i) => prose(`${w} text ${i}`, s));
    } else bad(w, "type must be mcq, fr, or essay");
  }
  for (const id of Object.keys(sets)) if (!items.some((x) => x.set === id)) bad(id, "set is never used");
}

for (const f of files) {
  const m = await import(resolve(f));
  const sets = m.sets || {};
  const d = m.default;
  const items = Array.isArray(d) ? d : d.forms.flatMap((x) => x.items);
  checkSets(sets);
  checkItems(items, sets, f);
  const mcq = items.filter((x) => x.type === "mcq").length, fr = items.filter((x) => x.type === "fr").length, es = items.filter((x) => x.type === "essay").length;
  console.log(`${f}: ${Object.keys(sets).length} sets, ${mcq} multiple choice, ${fr} SAQ parts, ${es} essays`);
}
console.log(problems.length ? `\n${problems.length} problems:\n` + problems.join("\n") : "\nall checks pass");
process.exit(problems.length ? 1 : 0);

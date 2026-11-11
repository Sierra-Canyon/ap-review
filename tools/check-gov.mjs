// Structural checks for AP U.S. Government and Politics files (review bank, topic quizzes, unit tests).
// Usage: node tools/check-gov.mjs decks/gov/u3.js [more files]
// Like check-whap.mjs, with Gov's question types: multiple choice may stand alone (concept and scenario items), free
// response is concept application or quantitative analysis (one point a part), and essays are SCOTUS comparison (4 points:
// A 1, B 2, C 1) or argument essay (6 points: claim 1, evidence 3, reasoning 1, alternative perspective 1).
import { readFileSync, existsSync, statSync } from "node:fs";
import { resolve } from "node:path";

const files = process.argv.slice(2);
const problems = [];
const bad = (w, m) => problems.push(`${w}: ${m}`);
const PRACTICE = "Practice passage written for this review.";

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
        if (cite.kind === "practice" && !cite.cite.startsWith(PRACTICE)) bad(id, "practice passage must start with the exact practice label");
        if (!["practice", "map", "scenario"].includes(cite.kind) && !cite.url) bad(id, `${cite.kind || "source"} has no url`);
        if (!["primary", "practice", "data", "map", "scenario"].includes(cite.kind)) bad(id, "cite kind must be primary, practice, data, map, or scenario");
        if (cite.kind === "scenario") for (const b of src.blocks) if (b.p) prose(id + " scenario", b.p);
        // A map the site draws names the references its places, dates, and routes were checked against (HANDOFF.md, 2e).
        if (cite.kind === "map" && !/checked against .+ and .+/.test(cite.cite)) bad(id, "a drawn map's cite must name the two references it was checked against");
        if (cite.kind === "map") prose(id + " map cite", cite.cite);
        if (cite.kind === "practice") for (const b of src.blocks) if (b.p) prose(id + " practice passage", b.p);
      }
      if (!(src.blocks || []).some((b) => b.p || b.table || "svg" in b || b.img)) bad(id, "source has no text, table, graphic, or picture");
      for (const b of src.blocks || []) {
        // drawn maps and charts: real markup with alt text and a caption
        if ("svg" in b) {
          if (typeof b.svg !== "string" || !b.svg.startsWith("<svg")) bad(id, "svg block is empty (build it with bars() or lines() from plot.js)");
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
      if (!["easy", "moderate", "difficult"].includes(it.difficulty)) bad(w, "mcq needs difficulty: easy, moderate, or difficult");
      if (it.choices?.length !== 4 || it.why?.length !== 4 || it.answer !== 0) bad(w, "mcq needs 4 choices, 4 explanations, answer: 0");
      if (new Set(it.choices || []).size !== (it.choices || []).length) bad(w, "two choices are the same");
      if (!it.question) bad(w, "no question");
      [it.question, ...(it.choices || []), ...(it.why || [])].forEach((s, i) => prose(`${w} text ${i}`, s));
    } else if (it.type === "fr") {
      if (!it.part || !it.sub || !it.prompt || !it.earns || !it.example || !it.notExample) bad(w, "SAQ part needs part, sub, prompt, earns, example, notExample");
      if (!Array.isArray(it.yes) || it.yes.length < 2 || !Array.isArray(it.no) || it.no.length < 2) bad(w, "SAQ part needs 2 or more yes and no examples");
      if (!["Concept application", "Quantitative analysis"].includes(it.part)) bad(w, 'fr part must be "Concept application" or "Quantitative analysis"');
      if (!/^(Identify|Describe|Explain|Draw a conclusion)\b/.test(it.prompt || "")) bad(w, "free-response prompt should start with Identify, Describe, Explain, or Draw a conclusion");
      [it.lead, it.prompt, it.earns, ...(it.yes || []), ...(it.no || []), it.example, it.notExample].forEach((s, i) => prose(`${w} text ${i}`, s));
    } else if (it.type === "essay") {
      if (!["scotus", "argument"].includes(it.kind)) bad(w, "essay kind must be scotus or argument");
      if (!it.prompt || !Array.isArray(it.rows) || !it.rows.length) bad(w, "essay needs prompt and rows");
      const maxes = (it.rows || []).map((r) => r.max).join(",");
      if (it.kind === "scotus" && maxes !== "1,2,1") bad(w, `SCOTUS comparison rows should be A 1, B 2, C 1 (got ${maxes})`);
      if (it.kind === "scotus" && (!it.set || !sets[it.set])) bad(w, "SCOTUS comparison needs its case set");
      if (it.kind === "argument" && maxes !== "1,3,1,1") bad(w, `argument essay rows should be 1, 3, 1, 1 (got ${maxes})`);
      for (const r of it.rows || []) if (!Array.isArray(r.levels) || r.levels.length !== r.max + 1) bad(w, `row ${r.name}: levels must have max + 1 entries`);
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
  console.log(`${f}: ${Object.keys(sets).length} sets, ${mcq} multiple choice, ${fr} free-response parts, ${es} essays`);
}
console.log(problems.length ? `\n${problems.length} problems:\n` + problems.join("\n") : "\nall checks pass");
process.exit(problems.length ? 1 : 0);

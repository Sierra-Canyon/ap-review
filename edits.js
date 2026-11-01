// Teachers' edits to questions, kept in Firestore (edits/{deckId}:{itemId}) and laid over the decks when the site loads.
// An edit holds only what changed from the deck file: text fields, the right answer of a multiple-choice question, and
// whether the question is hidden. Restoring the original deletes the edit. Hidden questions leave review, the mocks, and
// the class view, and the form's point total drops by their points.
import { rowsMax } from "./srs.js";

// The text a teacher may change, in the order the editor shows it. A field is offered only when the item has it.
export const EDITABLE = [
  ["title", "Title"], ["source", "Source line"], ["lead", "Lead-in"], ["stem", "Stem"], ["classes", "Classes (code)"], ["methods", "Methods (code)"],
  ["code", "Code"], ["log", "Log"], ["given", "Given code"], ["sample", "Sample output"], ["listII", "List (ii)"], ["question", "Question"],
  ["prompt", "Prompt"], ["choices", "Choices"], ["answer", "Answer"], ["why", "Explanation"], ["earns", "Earns the point"], ["yes", "Answers that earn the point"],
  ["no", "Answers that do not"], ["example", "An answer that earns the point"], ["notExample", "An answer that does not"], ["solution", "Solution"],
  ["model", "Model answer"], ["evidence", "Evidence a strong essay could use"], ["docs", "What each document offers"], ["notes", "Notes"], ["note", "Note"],
];
const isText = (v) => typeof v === "string" || (Array.isArray(v) && v.every((x) => typeof x === "string"));
// The fields of one item that the editor offers. A number answer (the right choice) is picked with the choices instead.
export const editableFields = (it) => EDITABLE.filter(([k]) => k in it && isText(it[k]) && !(k === "answer" && typeof it[k] !== "string"));

export const editId = (deck, it) => `${deck.id}:${it.id}`;
const clone = (x) => JSON.parse(JSON.stringify(x));
const state = new WeakMap(); // deck -> { items, forms: [{ form, items, total }], original: Map(id -> item copy) }

// Remember every deck as its file wrote it, once, before any edit touches it.
export function snapshot(decks) {
  for (const d of decks) {
    if (state.has(d)) continue;
    const original = new Map();
    for (const it of [...d.items, ...(d.forms || []).flatMap((f) => f.items)]) original.set(it.id, clone(it));
    state.set(d, { items: [...d.items], forms: (d.forms || []).map((f) => ({ form: f, items: [...f.items], total: f.total })), original });
  }
}
// Every item of a deck, hidden ones included, with the form it sits on (null for review).
export function everyItem(d) {
  const s = state.get(d);
  return [...s.items.map((it) => ({ it, form: null })), ...s.forms.flatMap((x) => x.items.map((it) => ({ it, form: x.form })))];
}
export const originalOf = (d, it) => state.get(d)?.original.get(it.id);

// Points an item is worth on its form.
export function pointsOf(d, it) {
  if (it.type === "fr") return d.mock?.partB?.kind === "fr" ? d.mock.partB.scale : 1;
  if (it.rows && it.type !== "trace") return rowsMax(it);
  return d.mock?.partA?.points ?? 1;
}

// Lay the edits over the decks: restore each item to its file version, apply its edit, then drop hidden items.
export function applyEdits(decks, edits) {
  const by = new Map(edits.map((e) => [e.id, e]));
  for (const d of decks) {
    const s = state.get(d);
    for (const { it } of everyItem(d)) {
      const orig = s.original.get(it.id), e = by.get(editId(d, it));
      for (const [k] of EDITABLE) if (k in orig) it[k] = clone(orig[k]);
      if ("answer" in orig) it.answer = clone(orig.answer);
      delete it.edited; delete it.hidden;
      if (!e) continue;
      for (const [k, v] of Object.entries(e.fields || {})) if (k in orig && isText(v)) it[k] = clone(v);
      if (typeof orig.answer === "number" && Number.isInteger(e.answer) && e.answer >= 0 && e.answer < (it.choices || []).length) it.answer = e.answer;
      it.edited = { by: e.by || "", ts: e.ts || 0 };
      if (e.hidden) it.hidden = true;
    }
    d.items = s.items.filter((it) => !it.hidden);
    for (const x of s.forms) {
      x.form.items = x.items.filter((it) => !it.hidden);
      const lost = x.items.filter((it) => it.hidden).reduce((t, it) => t + pointsOf(d, it), 0);
      const base = x.total ?? d.mock?.total;
      if (x.total !== undefined || lost) x.form.total = base - lost;
    }
  }
}

// What a teacher's changes to one item amount to, compared with the file: null when nothing differs.
export function diffOf(d, it, values, answer, hidden) {
  const orig = originalOf(d, it), fields = {};
  for (const [k, v] of Object.entries(values)) if (JSON.stringify(v) !== JSON.stringify(orig[k])) fields[k] = v;
  const out = { fields };
  if (typeof orig.answer === "number" && answer !== orig.answer) out.answer = answer;
  if (hidden) out.hidden = true;
  return Object.keys(fields).length || "answer" in out || hidden ? out : null;
}

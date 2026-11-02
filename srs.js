// Spaced review. Each item has a card: a box from 0 to 5 and a due time.
// Right: the card moves up a box and comes back later (1, 2, 4, 8, 16 days for boxes 1 to 5).
// Wrong: back to box 0, due again in 5 minutes, and it comes back later in the same session.
// A written response scored 4 of 4 counts as right, 2 or 3 keeps its box and comes back tomorrow, 0 or 1 counts as wrong.
// A free-response subpart (1 point) counts as right when it earns the point.

export const DAY = 24 * 60 * 60 * 1000;
export const MIN = 60 * 1000;
const WAIT = [5 * MIN, 1 * DAY, 2 * DAY, 4 * DAY, 8 * DAY, 16 * DAY];

export function blankCard() { return { b: 0, due: 0, n: 0, c: 0, last: null, wrong: {}, ts: 0 }; }

// result: 1 right, 0.5 partly right, 0 wrong
export function grade(card, result, now = Date.now(), extra = {}) {
  const c = { ...blankCard(), ...card, wrong: { ...(card?.wrong || {}) } };
  c.n += 1;
  c.ts = now;
  if (result === 1) { c.c += 1; c.b = Math.min(5, c.b + 1); c.due = now + WAIT[c.b]; c.last = 1; }
  else if (result === 0.5) { c.c += 0.5; c.due = now + WAIT[Math.max(1, Math.min(c.b, 1))]; c.last = 0.5; }
  else { c.b = 0; c.due = now + WAIT[0]; c.last = 0; }
  if (extra.choice !== undefined && result !== 1) c.wrong[extra.choice] = (c.wrong[extra.choice] || 0) + 1;
  if (extra.wr) c.wr = extra.wr;
  return c;
}

export function mastery(card) {
  if (!card || !card.n) return 0;
  return Math.min(card.b, 3) / 3;
}

export function skillMastery(deck, cards) {
  const out = {};
  for (const s of deck.skills) {
    const items = deck.items.filter((it) => it.skill === s.id);
    const seen = items.filter((it) => cards[it.id]?.n);
    out[s.id] = {
      value: items.length ? items.reduce((t, it) => t + mastery(cards[it.id]), 0) / items.length : 0,
      seen: seen.length,
      total: items.length,
    };
  }
  return out;
}

// Mixes skills so two items of the same skill do not sit next to each other when that can be helped.
function interleave(items, rand) {
  const bySkill = {};
  for (const it of items) (bySkill[it.skill] ||= []).push(it);
  for (const k in bySkill) bySkill[k].sort(() => rand() - 0.5);
  const keys = Object.keys(bySkill).sort(() => rand() - 0.5);
  const out = [];
  while (keys.some((k) => bySkill[k].length)) for (const k of keys) if (bySkill[k].length) out.push(bySkill[k].shift());
  return out;
}

// The next session: what is due first (most overdue, lowest box), then new items, up to size.
// When nothing is due and nothing is new, it takes the cards that are least solid, so "keep going" always works.
// types limits the session to some item types (the "only vocabulary" buttons); long items (written and free responses) are capped at two.
const LONG = new Set(["wr", "fr", "code", "essay", "frq"]);
export function buildSession(deck, cards, { size = 10, now = Date.now(), rand = Math.random, types = null, skills = null, filter = null, longCap = 2 } = {}) {
  const pool = deck.items.filter((it) => (!types || types.includes(it.type)) && (!skills || skills.includes(it.skill)) && (!filter || filter(it)));
  const due = pool.filter((it) => cards[it.id]?.n && cards[it.id].due <= now)
    .sort((a, b) => (cards[a.id].b - cards[b.id].b) || (cards[a.id].due - cards[b.id].due));
  const fresh = interleave(pool.filter((it) => !cards[it.id]?.n), rand);
  const pick = [];
  let long = 0;
  for (const it of [...due, ...fresh]) {
    if (pick.length >= size) break;
    if (LONG.has(it.type)) { if (long >= longCap) continue; long++; }
    pick.push(it);
  }
  let extra = false;
  if (!pick.length) {
    extra = true;
    const onlyLong = pool.every((it) => LONG.has(it.type));
    const rest = pool.filter((it) => onlyLong || !LONG.has(it.type))
      .sort((a, b) => ((cards[a.id]?.b ?? 0) - (cards[b.id]?.b ?? 0)) || ((cards[a.id]?.due ?? 0) - (cards[b.id]?.due ?? 0)));
    pick.push(...rest.slice(0, size));
  }
  return { items: pick, extra, due: due.length, fresh: fresh.length };
}

export function counts(deck, cards, now = Date.now()) {
  let due = 0, fresh = 0, next = Infinity;
  for (const it of deck.items) {
    const c = cards[it.id];
    if (!c?.n) fresh++;
    else if (c.due <= now) due++;
    else next = Math.min(next, c.due);
  }
  return { due, fresh, next };
}

// A mock in the shape of the real quiz or test, from the deck's mock config.
// Part A: one multiple-choice item per slot (a slot lists the skills it may come from), least recently seen first.
// Part B: written responses, one per slot (kind "wr"), or every subpart of one free response (kind "fr").
export function buildMock(deck, cards, rand = Math.random, formId = null) {
  const cfg = deck.mock;
  // A fixed form: its own items, in its own order.
  const form = deck.forms?.find((f) => f.id === formId);
  if (form) return { partA: form.items.filter((x) => x.type === "mcq"), partB: form.items.filter((x) => x.type !== "mcq") };
  const seen = (it) => cards[it.id]?.ts || 0;
  const pickOne = (list, taken) => {
    const pool = list.filter((it) => !taken.has(it.id)).sort((a, b) => (seen(a) - seen(b)) || (rand() - 0.5));
    // least recently seen, with a little shuffle among the oldest three
    return pool.slice(0, 3).sort(() => rand() - 0.5)[0];
  };
  const taken = new Set();
  const partA = [];
  for (const slot of cfg.partA.slots) {
    const it = pickOne(deck.items.filter((x) => x.type === "mcq" && slot.includes(x.skill)), taken);
    if (it) { taken.add(it.id); partA.push(it); }
  }
  let partB = [];
  if (cfg.partB.kind === "wr") {
    for (const slot of cfg.partB.slots) {
      const it = pickOne(deck.items.filter((x) => slot.includes(x.skill)), taken);
      if (it) { taken.add(it.id); partB.push(it); }
    }
  } else {
    // the free response whose subparts were seen least recently
    const sets = Object.keys(deck.sets).map((id) => ({ id, items: deck.items.filter((x) => x.type === "fr" && x.set === id) }))
      .map((s) => ({ ...s, last: Math.max(0, ...s.items.map(seen)) + rand() }))
      .sort((a, b) => a.last - b.last);
    partB = sets[0]?.items || [];
  }
  return { partA, partB };
}

// Points for Part B: the rubric total for written responses; for a free response, subparts earned times the scale.
// "rubric": each free response is scored row by row, one point a row (or a row's max), and the rows add up.
export function partBPoints(deck, scores) {
  const raw = scores.reduce((t, x) => t + (x || 0), 0);
  return deck.mock.partB.kind === "fr" ? raw * deck.mock.partB.scale : raw;
}
export const rowsMax = (it) => it.type === "fr" ? 1 : (it.rows || []).reduce((t, r) => t + (r.max ?? (r.levels ? r.levels.length - 1 : 1)), 0);
export function partBMax(deck, items) {
  const k = deck.mock.partB.kind;
  return k === "fr" ? items.length * deck.mock.partB.scale : k === "rubric" ? items.reduce((t, it) => t + rowsMax(it), 0) : items.length * deck.mock.partB.points;
}

export function normOut(s) {
  return String(s ?? "").replace(/\r\n/g, "\n").split("\n").map((l) => l.replace(/\s+$/, "")).join("\n").replace(/^\n+|\n+$/g, "");
}
export function normCell(s) {
  return String(s ?? "").trim().toLowerCase().replace(/^["']|["']$/g, "").replace(/\s+/g, " ");
}

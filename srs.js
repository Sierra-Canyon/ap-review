// Spaced review. Each item has a card: a box from 0 to 5 and a due time.
// Right: the card moves up a box and comes back later (1, 2, 4, 8, 16 days for boxes 1 to 5).
// Wrong: back to box 0, due again in 5 minutes, and it comes back later in the same session.
// A written response scored 4 of 4 counts as right, 2 or 3 keeps its box and comes back tomorrow, 0 or 1 counts as wrong.

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
export function buildSession(deck, cards, { size = 10, now = Date.now(), rand = Math.random } = {}) {
  const due = deck.items.filter((it) => cards[it.id]?.n && cards[it.id].due <= now)
    .sort((a, b) => (cards[a.id].b - cards[b.id].b) || (cards[a.id].due - cards[b.id].due));
  const fresh = interleave(deck.items.filter((it) => !cards[it.id]?.n), rand);
  // Written responses take longer: at most two in a session.
  const pick = [];
  let wr = 0;
  for (const it of [...due, ...fresh]) {
    if (pick.length >= size) break;
    if (it.type === "wr") { if (wr >= 2) continue; wr++; }
    pick.push(it);
  }
  let extra = false;
  if (!pick.length) {
    extra = true;
    const rest = deck.items.filter((it) => it.type !== "wr")
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

// A mock quiz in the shape of the real one: Part A, six multiple-choice items at 2 points;
// Part B, two written responses at 4 points (one without the list, one logic error). 20 points.
export function buildMock(deck, cards, rand = Math.random) {
  const mcq = (skill) => deck.items.filter((it) => it.type === "mcq" && it.skill === skill);
  const pickOne = (list, taken) => {
    const pool = list.filter((it) => !taken.has(it.id)).sort((a, b) => ((cards[a.id]?.ts || 0) - (cards[b.id]?.ts || 0)) || (rand() - 0.5));
    // least recently seen, with a little shuffle among the oldest three
    const top = pool.slice(0, 3).sort(() => rand() - 0.5);
    return top[0];
  };
  const taken = new Set();
  const partA = [];
  for (const s of ["index", "parallel", "byhand", "forloop", "listloop", rand() < 0.5 ? "forloop" : "listloop"]) {
    const it = pickOne(mcq(s), taken);
    if (it) { taken.add(it.id); partA.push(it); }
  }
  const partB = [];
  for (const s of ["wr-nolist", "wr-logic"]) {
    const it = pickOne(deck.items.filter((x) => x.skill === s), taken);
    if (it) { taken.add(it.id); partB.push(it); }
  }
  return { partA, partB };
}

export function normOut(s) {
  return String(s ?? "").replace(/\r\n/g, "\n").split("\n").map((l) => l.replace(/\s+$/, "")).join("\n").replace(/^\n+|\n+$/g, "");
}
export function normCell(s) {
  return String(s ?? "").trim().toLowerCase().replace(/^["']|["']$/g, "").replace(/\s+/g, " ");
}

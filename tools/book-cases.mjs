// Turns book sections into checkable programs. Shared by verify-book.mjs (real .NET) and the runner's tests.

// Exercise programs: the student's functions, the hidden helpers, then one Console.WriteLine per test.
export function exerciseProgram(ex, code) {
  return [code, ex.given || "", ...ex.tests.map((t) => `Console.WriteLine(${t.call});`)].join("\n");
}

export function sectionCases(sec) {
  const cases = [];
  const add = (where, source, want, extra = {}) => cases.push({ where: `${sec.id} ${where}`, source, want, ...extra });
  sec.blocks.forEach((b, k) => {
    const at = `#${k + 1} ${b.type}${b.id ? " " + b.id : ""}`;
    if (b.type === "code" || b.type === "step") {
      if (!b.expect) add(at, b.code, null, { stdin: b.stdin, missing: "no expect" });
      else add(at, b.code, b.expect, { stdin: b.stdin });
    } else if (b.type === "mcq") {
      if (b.verify === undefined) add(at, "", null, { missing: "no verify (use verify: null for a conceptual item)" });
      else if (b.verify) {
        const list = b.verify.cases || [b.verify];
        list.forEach((v, j) => add(at + (list.length > 1 ? `.${j + 1}` : ""), v.run ?? b.code, v, { stdin: v.stdin }));
      }
    } else if (b.type === "parsons") {
      add(at, b.lines.join("\n"), b.expect || null, { missing: b.expect ? null : "no expect" });
    } else if (b.type === "exercise") {
      add(at + " solution", exerciseProgram(b, b.solution), { out: b.tests.map((t) => t.expect).join("\n") });
      add(at + " starter builds", [b.starter, b.given || ""].join("\n"), { out: undefined, builds: true });
      add(at + " starter fails a test", exerciseProgram(b, b.starter), { notOut: b.tests.map((t) => t.expect).join("\n") });
    }
  });
  return cases;
}

// Student-facing text that breaks JD's rules. Returns a list of { where, text }.
export function lintSection(sec) {
  const out = [];
  const check = (where, s) => {
    if (typeof s !== "string") return;
    const prose = s.replace(/`[^`]*`/g, "");
    if (/[—–]/.test(prose)) out.push({ where, text: "dash (— or –): " + s.slice(0, 80) });
    if (/\w \- \w/.test(prose)) out.push({ where, text: "spaced hyphen used as a dash: " + s.slice(0, 80) });
    if (/\b(we|our|let's|students)\b/i.test(prose)) out.push({ where, text: "we/our/let's/students: " + s.slice(0, 80) });
    if (/\byour teacher\b/i.test(prose)) out.push({ where, text: "your teacher: " + s.slice(0, 80) });
    if (/\b(colour|behaviour|organis|summaris|practis(e|ing)|favour|centre)\w*/i.test(prose)) out.push({ where, text: "British spelling: " + s.slice(0, 80) });
    if (/\b(don't worry|worth it|the hard part|you will never|for the rest of the year|genuinely|honestly|straightforward|crucial|delve)\b/i.test(prose)) out.push({ where, text: "commentary or AI tell: " + s.slice(0, 80) });
  };
  check("title", sec.title);
  (sec.goals || []).forEach((g, i) => check(`goal ${i + 1}`, g));
  sec.blocks.forEach((b, k) => {
    const at = `#${k + 1} ${b.type}`;
    for (const f of ["md", "question", "prompt", "title"]) check(at + " " + f, b[f]);
    if (!b.mono) (b.choices || []).forEach((c, i) => check(`${at} choice ${i}`, c));
    (b.why || []).forEach((c, i) => check(`${at} why ${i}`, c));
    (b.hints || []).forEach((c, i) => check(`${at} hint ${i}`, c));
    (b.items || []).forEach((c, i) => check(`${at} item ${i}`, c));
    (b.parts || []).forEach((c, i) => check(`${at} part ${i}`, c.meaning));
    Object.values(b.notes || {}).forEach((c) => check(`${at} note`, c));
    if (b.type === "mcq" && b.answer !== 0) out.push({ where: at, text: "answer must be 0 (the right choice written first)" });
    if (b.type === "mcq" && b.why && b.choices && b.why.length !== b.choices.length) out.push({ where: at, text: "why needs one entry per choice" });
  });
  return out;
}

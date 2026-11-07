"""Shared pieces for the AP Calculus review generators (tools/gen-calc/).

Each generator module builds multiple-choice items from templates. A template picks numbers, computes the key
with sympy, builds three wrong choices from named mistakes (each computed, never typed), and writes an explanation
for every choice. The driver keeps an item only when its four choices are distinct, then writes a deck file in the
shape of decks/calc/u1.js: export const sets, export default [items]. Run: python3 tools/gen-calc/build.py
"""
import json, random, re
from sympy import (Symbol, symbols, latex, Rational, sympify, simplify, nsimplify, oo, zoo, nan, limit, diff, integrate,
                   sqrt, sin, cos, tan, sec, csc, cot, exp, log, Abs, pi, E, factor, expand, cancel, Poly, solve, S)

x, t, h = symbols("x t h", real=True)

def L(e):
    """LaTeX for a sympy value or expression, with display fractions in running text."""
    if isinstance(e, str):
        return e
    s = latex(e)
    s = s.replace(r"\log", r"\ln")
    # \sin{\left(x \right)} to \sin x, and \ln{\left(2 \right)} to \ln 2
    s = re.sub(r"\\(sin|cos|tan|sec|csc|cot|ln)\{\\left\((x|\d+) \\right\)\}", r"\\\1 \2", s)
    s = re.sub(r"\\(sin|cos|tan|sec|csc|cot|ln)\{\\left\((.+?) \\right\)\}", r"\\\1\\left(\2\\right)", s)
    return s

def num(v, dp=None):
    """A choice for a number: exact LaTeX, or a decimal to dp places."""
    if dp is not None:
        return f"{float(v):.{dp}f}"
    if v in (oo, -oo):
        return r"\infty" if v == oo else r"-\infty"
    return L(nsimplify(v))

def m(s):
    """Wrap LaTeX in $...$."""
    return f"${s}$"

def D(s):
    """Use \\dfrac in running text so fractions are full size."""
    return s.replace(r"\frac", r"\dfrac")

def pm(n):
    """' + 3', ' - 3', or '' for a constant term after something else."""
    n = sympify(n)
    if n == 0:
        return ""
    return f"+ {L(n)}" if n > 0 else f"- {L(-n)}"

class Skip(Exception):
    pass

def tidy(s):
    """x - (-3) to x + 3, x - (2) to x - 2, and + -1 to - 1, in generated text."""
    s = re.sub(r"([a-z]) - \((\d+)\)", r"\1 - \2", s)
    s = re.sub(r"([a-z]) - \(-(\d+)\)", r"\1 + \2", s)
    s = re.sub(r"\+ -(\d)", r"- \1", s)
    # a number in parentheses after + or -: 4 - (1) to 4 - 1, 4 - (-3) to 4 + 3, x^{2} + (2)x to x^{2} + 2x
    for _ in range(2):
        s = re.sub(r"(?<=[\w})]) - \(-(\d+)\)", r" + \1", s)
        s = re.sub(r"(?<=[\w})]) \+ \(-(\d+)\)", r" - \1", s)
        s = re.sub(r"(?<=[\w})]) ([+-]) \((\d+)\)", r" \1 \2", s)
    s = re.sub(r"(?<=[a-zA-Z])\(x - 0\)", " x", s)
    s = s.replace("(x - 0)", "x")
    return s

def item(topic, question, right, wrongs, calc=False, set_id=None):
    """right: (choice LaTeX, why). wrongs: list of (choice LaTeX, why). Choices are compared after stripping spaces."""
    choices = [right[0]] + [w[0] for w in wrongs]
    keys = [re.sub(r"\s+", "", c) for c in choices]
    if len(set(keys)) != len(keys) or len(choices) != 4:
        raise Skip("choices collide")
    it = {"type": "mcq", "topic": topic, "calc": calc, "question": question,
          "choices": [m(c) if not c.startswith("$") and not c.startswith("TEXT:") else c.replace("TEXT:", "") for c in choices],
          "why": [right[1]] + [w[1] for w in wrongs], "answer": 0}
    it["question"] = tidy(it["question"]); it["choices"] = [tidy(c) for c in it["choices"]]; it["why"] = [tidy(w) for w in it["why"]]
    if set_id:
        it["set"] = set_id
    return it

def text_choice(s):
    """A choice that is a sentence, not a single formula."""
    return "TEXT:" + s

def js_string(s):
    if "`" in s or "${" in s:
        raise ValueError("backtick or ${ in text: " + s[:60])
    return "String.raw`" + s + "`"

def write_deck(path, header, sets_js, items, unit, prefix):
    lines = [header, 'import { graph } from "../../plot.js";', "", "export const sets = {"]
    for sid, code in sets_js.items():
        lines.append(f"  {json.dumps(sid)}: {code},")
    lines.append("};")
    lines.append("")
    lines.append("export default [")
    for n, it in enumerate(items, 1):
        it_id = f"{prefix}-{n:03d}"
        parts = [f'id: "{it_id}"', 'type: "mcq"', f'skill: "u{unit}"', f'topic: "{it["topic"]}"', f'calc: {"true" if it["calc"] else "false"}']
        if it.get("set"):
            parts.append(f'set: "{it["set"]}"')
        lines.append("  { " + ", ".join(parts) + ",")
        lines.append("    question: " + js_string(it["question"]) + ",")
        lines.append("    choices: [" + ", ".join(js_string(c) for c in it["choices"]) + "],")
        lines.append("    why: [")
        for w in it["why"]:
            lines.append("      " + js_string(w) + ",")
        lines.append("    ], answer: 0 },")
    lines.append("];")
    lines.append("")
    open(path, "w").write("\n".join(lines))

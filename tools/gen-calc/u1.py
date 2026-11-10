"""Unit 1, Limits and Continuity: templates for review multiple choice. Every key and wrong choice is computed.

Each template sets a difficulty (easy, moderate, difficult) judged the way Albert labels its own Unit 1 items, and the
keys of the limit templates are rechecked with sympy's limit() (chk) as the file is built. Topics in GRAPH_TEMPLATES
build their items around a graph or a table (a set); each call returns one set and its items, and the calls for a
topic add up to exactly the topic's count in need.json, so the ids keep their topics.
"""
from core import *
from sympy import Piecewise, Integer
import core, json

# core.write_deck writes the fields it knows; this version also writes an item's difficulty. It runs with core's globals.
def _write_deck(path, header, sets_js, items, unit, prefix):
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
        if it.get("difficulty"):
            parts.append(f'difficulty: "{it["difficulty"]}"')
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
core.write_deck.__code__ = _write_deck.__code__

R = Rational

def dz(it, d):
    """Set the difficulty; fractions in the question and explanations are display size (choices stay compact)."""
    it["difficulty"] = d
    it["question"] = D(it["question"]); it["why"] = [D(w) for w in it["why"]]
    return it

_s = Symbol("s", positive=True)
def _side(expr, pt, d):
    # x = pt - s or pt + s with s > 0, so a Piecewise condition or an absolute value settles before the limit is taken
    return limit(expr.subs(x, pt - _s if d == "-" else pt + _s), _s, 0, "+")

def chk(expr, pt, expected, d="+-"):
    """Recompute a key with sympy. d is '+-' (two-sided), '+' or '-'."""
    if pt in (oo, -oo):
        got = limit(expr, x, pt)
    elif d == "+-":
        lo, hi = _side(expr, pt, "-"), _side(expr, pt, "+")
        got = lo if lo == hi else nan
    else:
        got = _side(expr, pt, d)
    if not (got == expected or (got not in (oo, -oo, zoo, nan) and expected not in (oo, -oo) and simplify(got - expected) == 0)):
        raise AssertionError(f"key check failed: limit of {expr} at {pt} ({d}) is {got}, key says {expected}")

def f2(v):
    return f"{float(v):.2f}"

def dec(v):
    """A table entry: up to four decimals, no trailing zeros."""
    s = f"{float(v):.4f}".rstrip("0").rstrip(".")
    return "0" if s == "-0" else s

class Raw:
    def __init__(self, s): self.s = s

def js(v):
    if isinstance(v, Raw): return v.s
    if isinstance(v, dict): return "{ " + ", ".join(f"{k}: {js(w)}" for k, w in v.items()) + " }"
    if isinstance(v, (list, tuple)): return "[" + ", ".join(js(w) for w in v) + "]"
    if isinstance(v, bool): return "true" if v else "false"
    if isinstance(v, int): return str(v)
    if isinstance(v, str): return json.dumps(v)
    return dec(v)

def set_code(name, label, intro, sources):
    """sources: list of (title, blocks); a block is {"svg": graph options} or {"table": (head, rows)} or {"p": text}."""
    out = []
    for title, blocks in sources:
        bs = []
        for b in blocks:
            if "svg" in b: bs.append("{ svg: graph(" + js(b["svg"]) + ") }")
            elif "table" in b: bs.append("{ table: { head: " + json.dumps(b["table"][0]) + ", rows: " + json.dumps(b["table"][1]) + " } }")
            else: bs.append("{ p: " + js_string(b["p"]) + " }")
        out.append("{ title: " + json.dumps(title) + ", blocks: [" + ", ".join(bs) + "] }")
    return "{ name: " + json.dumps(name) + ", label: " + json.dumps(label) + ", intro: " + js_string(intro) + ",\n    sources: [" + ",\n      ".join(out) + "] }"

def make_text(r, specs):
    """specs: [(template, count)] -> that many distinct items from each template."""
    out = []
    for fn, n in specs:
        got, seen, tries = 0, set(), 0
        while got < n:
            tries += 1
            if tries > 400: raise RuntimeError(f"{fn.__name__}: could not make {n} items")
            try:
                it = fn(r)
            except Skip:
                continue
            key = it["choices"][0] + it["question"][:80]
            if key in seen: continue
            seen.add(key); out.append(it); got += 1
    return out

ROMAN = ["I", "II", "III"]
COMBOS = {"I only": {0}, "II only": {1}, "III only": {2}, "I and II only": {0, 1}, "I and III only": {0, 2},
          "II and III only": {1, 2}, "I, II, and III": {0, 1, 2}}

def roman(topic, lead, stmts, r, set_id=None):
    """stmts: three (statement, true?, reason). The choices are combinations of I, II, III."""
    truth = {i for i, s in enumerate(stmts) if s[1]}
    if not truth: raise Skip("no true statement")
    key = next(n for n, c in COMBOS.items() if c == truth)
    others = [n for n in COMBOS if n != key]
    near = [n for n in others if len(COMBOS[n] ^ truth) == 1]; far = [n for n in others if len(COMBOS[n] ^ truth) > 1]
    r.shuffle(near); r.shuffle(far)
    if len(truth) == 1:      # the two pairs that add one statement, and all three
        near = [n for n in near if len(COMBOS[n]) == 2]; far = ["I, II, and III"]
    pick = (near + far)[:3]
    def why(n):
        parts = []
        for i in sorted(COMBOS[n] ^ truth):
            parts.append(f"{ROMAN[i]} is {'false' if i in COMBOS[n] else 'also true'}: {stmts[i][2]}")
        return " ".join(parts)
    kw = " ".join(f"{ROMAN[i]} is {'true' if s[1] else 'false'}: {s[2]}" for i, s in enumerate(stmts))
    q = lead + "\n\n" + "\n".join(f"{ROMAN[i]}. {s[0]}" for i, s in enumerate(stmts))
    return item(topic, q, (text_choice(key), kw), [(text_choice(n), why(n)) for n in pick], set_id=set_id)

class Chunks:
    """A GRAPH_TEMPLATES entry built from a list of chunk functions, one set per call, in order."""
    def __init__(self, *fns): self.fns, self.i = list(fns), 0
    def __call__(self, r):
        fn = self.fns[self.i % len(self.fns)]
        out = fn(r)          # may raise Skip; the index moves on only after a success
        self.i += 1
        return out

# ---------------------------------------------------------------- 1.1
def t11_avg(r):
    a = r.randint(-2, 1); b = a + r.randint(2, 4); c = r.choice([-4, -3, 2, 5]); k = r.choice([1, 2])
    f = k * x**3 + c * x
    fa, fb = f.subs(x, a), f.subs(x, b)
    if fa == fb: raise Skip("flat")
    avg = (fb - fa) / (b - a)
    fp = diff(f, x); ends = (fp.subs(x, a) + fp.subs(x, b)) / 2
    q = rf"Let $f(x) = {L(f)}$. What is the average rate of change of $f$ over the interval $[{a}, {b}]$?"
    return dz(item("1.1", q, (num(avg), rf"$\dfrac{{f({b}) - f({a})}}{{{b} - ({a})}} = \dfrac{{{L(fb)} - ({L(fa)})}}{{{b - a}}} = {L(avg)}$."),
        [(num(fb - fa), rf"${L(fb - fa)}$ is $f({b}) - f({a})$, the change in $f$, not divided by the length of the interval, ${b - a}$."),
         (num(ends), rf"${L(ends)}$ averages the slopes $f'({a})$ and $f'({b})$. The average rate of change uses values of $f$ at the endpoints, not slopes."),
         (num(Rational(b - a) / (fb - fa)), rf"This is $\dfrac{{{b} - ({a})}}{{f({b}) - f({a})}}$, the change in $x$ over the change in $f$, which is upside down.")]), "easy")

def t11_def(r):
    fs = [(x**3, "x^{3}"), (x**2 + 3 * x, "x^{2} + 3x"), (5 * x - x**2, "5x - x^{2}")]
    f, ftex = r.choice(fs); a = r.choice([1, 2, 3])
    fa = f.subs(x, a)
    fah = {x**3: rf"({a} + h)^{{3}}", x**2 + 3 * x: rf"({a} + h)^{{2}} + 3({a} + h)", 5 * x - x**2: rf"5({a} + h) - ({a} + h)^{{2}}"}[f]
    right = rf"\lim_{{h \to 0}} \frac{{{fah} - {L(fa)}}}{{h}}"
    q = rf"Let $f(x) = {ftex}$. Which of the following expressions gives the instantaneous rate of change of $f$ at $x = {a}$?"
    return dz(item("1.1", q, (right, rf"The instantaneous rate of change is the limit, as $h \to 0$, of the average rate of change $\dfrac{{f({a} + h) - f({a})}}{{h}}$ over $[{a}, {a} + h]$, and $f({a}) = {L(fa)}$."),
        [(rf"\frac{{{fah} - {L(fa)}}}{{h}}", r"Without the limit, this is the average rate of change over an interval of length $h$, not the rate at an instant."),
         (rf"\lim_{{h \to 0}} \left({fah} - {L(fa)}\right)", r"This limit is the change in $f$ as the interval shrinks, which is $0$. It is missing the division by $h$."),
         (rf"\lim_{{h \to 0}} \frac{{{fah}}}{{h}}", rf"This divides $f({a} + h)$ by $h$ without subtracting $f({a}) = {L(fa)}$, so it is not a rate of change.")]), "moderate")

def t11_dq(r):
    p = r.choice([2, 3, 4]); q0 = r.choice([-5, -3, 1, 6]); a = r.choice([1, 2, 3])
    f = p * x**2 + q0 * x; key = 2 * p * a + q0
    chk((f.subs(x, a + x) - f.subs(x, a)) / x, 0, key)
    fa = f.subs(x, a)
    q = rf"Let $f(x) = {L(f)}$. What is $\displaystyle \lim_{{h \to 0}} \dfrac{{f({a} + h) - f({a})}}{{h}}$?"
    return dz(item("1.1", q, (num(key), rf"$f({a} + h) - f({a}) = {L(expand(f.subs(x, a + h) - fa))}$. Dividing by $h$ gives ${L(expand((f.subs(x, a + h) - fa) / h))}$ for $h \ne 0$, which approaches ${key}$ as $h \to 0$."),
        [(num(fa), rf"${L(fa)}$ is $f({a})$, the value of $f$, not the limit of the difference quotient."),
         ("0", r"Substituting $h = 0$ gives $\dfrac{0}{0}$, which is indeterminate, not $0$. Expand and divide by $h$ first."),
         (num(key + p), rf"This evaluates the simplified quotient ${L(expand((f.subs(x, a + h) - fa) / h))}$ at $h = 1$ instead of letting $h$ approach $0$.")]), "moderate")

def t11_recip(r):
    k = r.choice([3, 5, 6]); a = r.choice([2, 3, 4])
    key = R(-k, a**2)
    chk((k / (a + x) - R(k, a)) / x, 0, key)
    q = rf"Let $f(x) = \dfrac{{{k}}}{{x}}$. What is $\displaystyle \lim_{{h \to 0}} \dfrac{{f({a} + h) - f({a})}}{{h}}$?"
    return dz(item("1.1", q, (num(key), rf"$\dfrac{{{k}}}{{{a} + h}} - \dfrac{{{k}}}{{{a}}} = \dfrac{{{k * a} - {k}({a} + h)}}{{{a}({a} + h)}} = \dfrac{{-{k}h}}{{{a}({a} + h)}}$. Dividing by $h$ gives $\dfrac{{-{k}}}{{{a}({a} + h)}}$, which approaches ${L(key)}$."),
        [(num(-key), rf"The sign is lost in the numerator: ${k * a} - {k}({a} + h) = -{k}h$, not ${k}h$."),
         (num(R(-k, a)), rf"After dividing by $h$, the denominator is ${a}({a} + h)$, which approaches ${a**2}$, not ${a}$."),
         ("0", r"Substituting $h = 0$ gives $\dfrac{0}{0}$, which is indeterminate, not $0$. Combine the fractions first.")]), "difficult")

def c11(r):
    a = r.choice([1, 2, 3]); k = r.choice([2, 3]); m0 = r.choice([-1, 1, 2])
    f = k * x**2 + m0 * x
    pts = [a - R(1, 10), a - R(1, 100), a, a + R(1, 100), a + R(1, 10)]
    v = [f.subs(x, p) for p in pts]
    sid = "c1x-t11"
    code = set_code("Values of f near " + str(a), "Table", r"The function $f$ is defined for all real numbers. The table gives selected values of $f$.",
                    [("", [{"table": (["$x$"] + [f"${dec(p)}$" for p in pts], [["$f(x)$"] + [f"${dec(w)}$" for w in v]])}])])
    key = (v[3] - v[1]) / R(2, 100)
    assert key == diff(f, x).subs(x, a)
    right = (v[4] - v[2]) / R(1, 10)
    q1 = rf"Based on the table, which of the following is the best estimate of the instantaneous rate of change of $f$ at $x = {a}$?"
    i1 = dz(item("1.1", q1, (f2(key), rf"The closest inputs on each side of ${a}$ are ${dec(pts[1])}$ and ${dec(pts[3])}$: $\dfrac{{f({dec(pts[3])}) - f({dec(pts[1])})}}{{0.02}} = \dfrac{{{dec(v[3])} - {dec(v[1])}}}{{0.02}} = {f2(key)}$."),
        [(f2(right), rf"This is the average rate of change over $[{a}, {dec(pts[4])}]$. That interval lies on one side of ${a}$ and is the widest in the table, so it is a weaker estimate than the one from ${dec(pts[1])}$ and ${dec(pts[3])}$."),
         (f2(v[3] - v[1]), rf"This is the change $f({dec(pts[3])}) - f({dec(pts[1])})$, not divided by the change in $x$, $0.02$."),
         (f2(v[2]), rf"This is $f({a})$, the value of the function, not its rate of change.")], set_id=sid), "moderate")
    key2 = (v[2] - v[0]) / R(1, 10)
    q2 = rf"Based on the table, what is the average rate of change of $f$ over the interval $[{dec(pts[0])}, {a}]$?"
    i2 = dz(item("1.1", q2, (f2(key2), rf"$\dfrac{{f({a}) - f({dec(pts[0])})}}{{{a} - {dec(pts[0])}}} = \dfrac{{{dec(v[2])} - {dec(v[0])}}}{{0.1}} = {f2(key2)}$."),
        [(f2(right), rf"This is the average rate of change over $[{a}, {dec(pts[4])}]$, the interval on the other side of ${a}$."),
         (f2(v[2] - v[0]), rf"This is the change in $f$, ${dec(v[2])} - {dec(v[0])}$, not divided by the change in $x$, $0.1$."),
         (f2(-key2), r"This subtracts the values in one order and the inputs in the other, which flips the sign.")], set_id=sid), "easy")
    rest = make_text(r, [(t11_avg, 2), (t11_def, 1), (t11_dq, 1), (t11_recip, 1)])
    return [i1, i2] + rest, sid, code

# ---------------------------------------------------------------- 1.2
def t12_onesided(r):
    a = r.choice([-1, 1, 2, 3]); p = r.choice([1, 2, 3]); q0 = r.choice([-3, -1, 4]); m0 = r.choice([2, -2, 3]); n0 = r.choice([1, 5, -4])
    e1 = p * x**2 + q0; e2 = m0 * x + n0
    L1, L2 = e1.subs(x, a), e2.subs(x, a)
    if L1 == L2: raise Skip("equal")
    side = r.choice(["-", "+"])
    want, other = (L1, L2) if side == "-" else (L2, L1)
    fexpr = Piecewise((e1, x < a), (e2, True))
    chk(fexpr, a, want, side)
    fdef = rf"f(x) = \begin{{cases}} {L(e1)}, & x < {a} \\ {L(e2)}, & x \ge {a} \end{{cases}}"
    q = rf"Let ${fdef}$. What is $\displaystyle \lim_{{x \to {a}^{side}}} f(x)$?"
    piece = L(e1) if side == "-" else L(e2)
    return dz(item("1.2", q, (num(want), rf"For $x$ {'less' if side == '-' else 'greater'} than ${a}$, $f(x) = {piece}$, which approaches ${L(want)}$ as $x \to {a}^{side}$."),
        [(num(other), rf"${L(other)}$ is the limit from the {'right' if side == '-' else 'left'}, which uses the other piece of $f$."),
         (text_choice("The limit does not exist."), rf"A one-sided limit can exist even when the two-sided limit does not. Here the values approach ${L(want)}$ from the {'left' if side == '-' else 'right'}."),
         (num((L1 + L2) / 2), r"This averages the two one-sided limits. A one-sided limit uses only the piece of $f$ on that side.")]), "easy")

def t12_param(r):
    a = r.choice([1, 2, 3]); c = r.choice([-2, 1, 3, 6]); b1 = r.choice([-1, 2, 5])
    k = Rational(a**2 + c - b1, a)
    fdef = rf"f(x) = \begin{{cases}} kx {pm(b1)}, & x < {a} \\ x^{{2}} {pm(c)}, & x > {a} \end{{cases}}"
    q = rf"Let ${fdef}$, where $k$ is a constant. For what value of $k$ does $\displaystyle \lim_{{x \to {a}}} f(x)$ exist?"
    assert k * a + b1 == a**2 + c
    return dz(item("1.2", q, (num(k), rf"The limit exists when the one-sided limits agree: ${a}k {pm(b1)} = {a**2 + c}$, so $k = {L(k)}$."),
        [(num(a**2 + c - b1), rf"${a**2 + c - b1}$ is ${a}k$, not $k$. Divide by ${a}$."),
         (num(Rational(a**2 + c + b1, a)), rf"This moves ${b1}$ to the other side of ${a}k {pm(b1)} = {a**2 + c}$ without changing its sign."),
         (text_choice("No value of $k$ makes the limit exist."), rf"Choosing $k$ so the left-hand limit ${a}k {pm(b1)}$ equals the right-hand limit ${a**2 + c}$ makes the limit exist, even though $f({a})$ is undefined.")]), "moderate")

def t12_trig(r):
    c = r.choice([2, 3, 5]); k = r.choice([1, 2])
    expr = (c + k * cos(x)) / (1 + sin(x)); key = c - k
    chk(expr, pi, key)
    kc = "" if k == 1 else str(k)
    q = rf"What is $\displaystyle \lim_{{x \to \pi}} \dfrac{{{c} + {kc}\cos x}}{{1 + \sin x}}$?"
    return dz(item("1.2", q, (num(key), rf"The expression is continuous at $x = \pi$ because the denominator is $1 + \sin \pi = 1 \ne 0$. Substituting gives $\dfrac{{{c} + {kc}(-1)}}{{1 + 0}} = {key}$."),
        [(num(c + k), r"This uses $\cos \pi = 1$. On the unit circle, $\cos \pi = -1$."),
         (num(c), r"This uses $\cos \pi = 0$. On the unit circle, $\cos \pi = -1$ and $\sin \pi = 0$."),
         (num(R(c - k, 2)), r"This uses $\sin \pi = 1$, making the denominator $2$. In fact $\sin \pi = 0$.")]), "easy")

# ---------------------------------------------------------------- 1.3 graphs
GRAPH_N = [0]
def graph_set(r, y1=None, y2=None):
    """A piecewise linear graph with a jump at a = 1 and a removable point at c."""
    a = 1; c = r.choice([-2, -1]); x0, x1 = -3, 4
    y0 = r.choice([0, 1]); y1 = y1 if y1 is not None else r.choice([3, 4])
    sl = Rational(y1 - y0, a - x0); vc = y0 + sl * (c - x0)
    if not vc.is_integer: raise Skip("fractional hole")
    y2 = y2 if y2 is not None else r.choice([-1, 0]); y3 = r.choice([2, 1])
    fc = -2 if vc != -2 else 4
    GRAPH_N[0] += 1
    sid = f"c1x-g{GRAPH_N[0]}"
    g = {"x": [x0, x1], "y": [-3, 5], "xname": "x", "yname": "y",
         "segments": [[x0, y0, a, y1], [a, y2, x1, y3]],
         "dots": [[x0, y0, "closed"], [c, int(vc), "open"], [c, fc, "closed"], [a, y1, "open"], [a, y2, "closed"], [x1, y3, "closed"]],
         "alt": f"Graph of f on [{x0}, {x1}]. A line rises from the filled point ({x0}, {y0}) to an open circle at ({a}, {y1}), with an open circle on it at ({c}, {int(vc)}) and a separate filled point at ({c}, {fc}). A second line starts at the filled point ({a}, {y2}) and goes to the filled point ({x1}, {y3})."}
    code = set_code("The graph of f", "Graph", rf"The graph of the function $f$ on the interval $[{x0}, {x1}]$ is shown below. It consists of two line segments and one isolated point.", [("", [{"svg": g}])])
    return sid, code, dict(a=a, c=c, vc=int(vc), fc=fc, y1=y1, y2=y2)

def c13_one(r):
    sid, code, g = graph_set(r, y1=4, y2=-1)
    a, c, vc, fc, y1, y2 = g["a"], g["c"], g["vc"], g["fc"], g["y1"], g["y2"]
    wrong3 = (num(c), rf"${c}$ is the $x$-value being approached. The limit is the height the graph approaches.") if c not in (vc, fc) else (num(vc + 1), r"This misreads the height of the open circle by one grid unit.")
    i1 = dz(item("1.3", rf"What is $\displaystyle \lim_{{x \to {c}}} f(x)$?",
        (num(vc), rf"As $x$ approaches ${c}$ from either side, the points on the line approach the open circle at $({c}, {vc})$, so the limit is ${vc}$."),
        [(num(fc), rf"${fc}$ is $f({c})$, the value at the isolated point. The limit depends on values near $x = {c}$, not at it."),
         (text_choice("The limit does not exist."), rf"The graph approaches the same height, ${vc}$, from both sides of $x = {c}$, so the limit exists even though there is a hole."),
         wrong3], set_id=sid), "easy")
    side = "-"
    want, other = (y1, y2) if side == "-" else (y2, y1)
    i2 = dz(item("1.3", rf"What is $\displaystyle \lim_{{x \to {a}^{side}}} f(x)$?",
        (num(want), rf"From the {'left' if side == '-' else 'right'}, the graph approaches the point at height ${want}$ as $x \to {a}^{side}$."),
        [(num(other), rf"${other}$ is the limit from the {'right' if side == '-' else 'left'}."),
         (text_choice("The limit does not exist."), r"The two-sided limit does not exist because the one-sided limits differ, but each one-sided limit exists."),
         (num(Rational(y1 + y2, 2)), r"This averages the two one-sided limits. A one-sided limit follows only the graph on that side.")], set_id=sid), "moderate")
    return [i1, i2], sid, code

def c13_two(r):
    sid, code, g = graph_set(r)
    a, c, vc, fc, y1, y2 = g["a"], g["c"], g["vc"], g["fc"], g["y1"], g["y2"]
    i1 = dz(item("1.3", rf"What is $\displaystyle \lim_{{x \to {a}}} f(x)$?",
        (text_choice("The limit does not exist."), rf"From the left the graph approaches ${y1}$, and from the right it approaches ${y2}$. The one-sided limits differ, so the two-sided limit does not exist."),
        [(num(y2), rf"${y2}$ is $f({a})$, the filled point, and also the right-hand limit. From the left the graph approaches ${y1}$."),
         (num(y1), rf"${y1}$ is only the left-hand limit. From the right the graph approaches ${y2}$."),
         (num(Rational(y1 + y2, 2)), r"This averages the one-sided limits. When they differ, the limit does not exist.")], set_id=sid), "moderate")
    pool_true = [(rf"$\displaystyle \lim_{{x \to {c}}} f(x) = {vc}$", rf"the line approaches the open circle at height ${vc}$ from both sides."),
                 (rf"$\displaystyle \lim_{{x \to {a}^-}} f(x) = {y1}$", rf"from the left the line approaches the open circle at height ${y1}$."),
                 (rf"$\displaystyle \lim_{{x \to {a}^+}} f(x) = f({a})$", rf"from the right the graph approaches ${y2}$, and $f({a}) = {y2}$.")]
    pool_false = [(rf"$\displaystyle \lim_{{x \to {c}}} f(x) = f({c})$", rf"the limit is ${vc}$, but $f({c}) = {fc}$."),
                  (rf"$\displaystyle \lim_{{x \to {a}}} f(x) = {y2}$", rf"the one-sided limits at ${a}$ are ${y1}$ and ${y2}$, so the limit does not exist, even though $f({a}) = {y2}$."),
                  (rf"$\displaystyle \lim_{{x \to {a}^+}} f(x) = {y1}$", rf"${y1}$ is the left-hand limit. From the right the graph approaches ${y2}$.")]
    pattern = r.choice([[1, 0, 0], [0, 1, 0], [0, 0, 1]])
    st = []
    for i, tv in enumerate(pattern):
        s, why = (pool_true if tv else pool_false)[i]
        st.append((s, bool(tv), why))
    i2 = dz(roman("1.3", "Based on the graph, which of the following statements are true?", st, r, set_id=sid), "difficult")
    return [i1, i2], sid, code

# ---------------------------------------------------------------- 1.4 tables
def c14_sin(r):
    import math
    k = r.choice([2, 3, 5]); n = r.choice([1, 2])
    if k == n: raise Skip("same")
    xs = [-0.1, -0.01, -0.001, 0.001, 0.01, 0.1]
    vals = [math.sin(k * v) / (n * v) for v in xs]
    lim = Rational(k, n)
    chk(sin(k * x) / (n * x), 0, lim)
    sid = "c1x-t14a"
    code = set_code("Values of f near 0", "Table", r"The function $f$ is defined for $x \ne 0$. The table gives values of $f$, rounded to six decimal places.",
                    [("", [{"table": (["$x$"] + [f"${v:g}$" for v in xs], [["$f(x)$"] + [f"${w:.6f}$" for w in vals]])}])])
    q = r"Based on the table, which of the following is the best estimate of $\displaystyle \lim_{x \to 0} f(x)$?"
    return [dz(item("1.4", q, (f"{float(lim):g}", rf"From both sides the values close in on ${float(lim):g}$ as $x$ gets close to $0$: ${vals[2]:.6f}$ and ${vals[3]:.6f}$ at $x = \mp 0.001$."),
        [(f"{vals[-1]:.2f}", rf"${vals[-1]:.2f}$ is about $f(0.1)$, the value farthest from $0$ in the table. The values for $x$ closer to $0$ approach ${float(lim):g}$."),
         ("0", r"$0$ is the input $x$ approaches, not the value the outputs approach."),
         (text_choice("The limit does not exist, because $f(0)$ is undefined."), r"A limit can exist where the function is undefined. The table shows the outputs approaching one number from both sides.")], set_id=sid), "easy")], sid, code

def c14_jump(r):
    a = r.choice([1, 2, 4]); A = r.choice([3, 5, -2]); B = r.choice([1, -1, 6]); C = r.choice([-3, -5, 10])
    if len({A, B, C}) < 3: raise Skip("same")
    d = [R(1, 10), R(1, 100), R(1, 1000)]
    xs = [a - e for e in d] + [a] + [a + e for e in reversed(d)]
    ys = [A - 2 * e for e in d] + [C] + [B + 3 * e for e in reversed(d)]
    side = r.choice(["+", "-"])
    want, other = (B, A) if side == "+" else (A, B)
    sid = "c1x-t14b"
    code = set_code(f"Values of h near {a}", "Table", rf"The table gives selected values of the function $h$, including its value at $x = {a}$.",
                    [("", [{"table": (["$x$"] + [f"${dec(v)}$" for v in xs], [["$h(x)$"] + [f"${dec(w)}$" for w in ys]])}])])
    q = rf"Based on the table, which of the following is the best estimate of $\displaystyle \lim_{{x \to {a}^{side}}} h(x)$?"
    return [dz(item("1.4", q, (num(want), rf"As $x$ approaches ${a}$ from the {'right' if side == '+' else 'left'}, the values of $h$ close in on ${want}$."),
        [(num(other), rf"${other}$ is what the values approach from the {'left' if side == '+' else 'right'}."),
         (num(C), rf"${C}$ is $h({a})$. A limit depends on the values of $h$ near ${a}$, not the value at ${a}$."),
         (text_choice("The limit does not exist."), r"The two-sided limit does not exist, but each one-sided limit does.")], set_id=sid), "moderate")], sid, code

def c14_inf(r):
    a = r.choice([2, 3, 5]); c = r.choice([1, 2, 4]); s = r.choice([1, -1]); side = r.choice(["-", "+"])
    d = [R(1, 10), R(1, 100), R(1, 1000)]
    xs = [a - e for e in d] + [a + e for e in reversed(d)]
    f = c + s / (x - a)
    ys = [f.subs(x, v) for v in xs]
    key = oo if (s > 0) == (side == "+") else -oo
    chk(f, a, key, side)
    near = ys[2] if side == "-" else ys[3]
    sid = "c1x-t14c"
    code = set_code(f"Values of g near {a}", "Table", rf"The function $g$ is not defined at $x = {a}$. The table gives selected values of $g$.",
                    [("", [{"table": (["$x$"] + [f"${dec(v)}$" for v in xs], [["$g(x)$"] + [f"${dec(w)}$" for w in ys]])}])])
    q = rf"Which of the following best describes $\displaystyle \lim_{{x \to {a}^{side}}} g(x)$, based on the table?"
    kt = r"\infty" if key == oo else r"-\infty"
    return [dz(item("1.4", q, (kt, rf"As $x \to {a}^{side}$, the values {', '.join('$' + dec(w) + '$' for w in (ys[:3] if side == '-' else ys[3:][::-1]))} {'grow' if key == oo else 'decrease'} without bound: each time $x$ moves $10$ times closer to ${a}$, the distance from ${c}$ grows about $10$ times."),
        [(dec(near), rf"${dec(near)}$ is the table entry closest to $x = {a}$. The pattern shows the values do not level off, so no table entry is the limit."),
         (r"-\infty" if key == oo else r"\infty", rf"That is the behavior from the {'right' if side == '-' else 'left'} of ${a}$. From the {'left' if side == '-' else 'right'} the values are {'positive' if key == oo else 'negative'}."),
         (num(a), rf"${a}$ is the input $x$ approaches, not a value of $g$.")], set_id=sid), "difficult")], sid, code

# ---------------------------------------------------------------- 1.5
def t15_props(r):
    c = r.choice([2, 3, -1, 5]); A = r.choice([4, -2, 6, 8, -3]); B = r.choice([3, -5, 1, 2]); k = r.choice([2, 3, 5, -4])
    if A == B or A + B == 0: raise Skip("same")
    val = Rational(A * B + k, A - B)
    q = rf"If $\displaystyle \lim_{{x \to {c}}} f(x) = {A}$ and $\displaystyle \lim_{{x \to {c}}} g(x) = {B}$, what is $\displaystyle \lim_{{x \to {c}}} \dfrac{{f(x)\,g(x) + {k}}}{{f(x) - g(x)}}$?"
    return dz(item("1.5", q, (num(val), rf"By the limit laws, the limit is $\dfrac{{({A})({B}) + {k}}}{{{A} - ({B})}} = \dfrac{{{A * B + k}}}{{{A - B}}}" + ("" if val == R(A * B + k, A - B) and val.q == A - B and val.p == A * B + k else rf" = {L(val)}") + r"$, since the limit of the denominator is not $0$."),
        [(num(Rational(A * B + k, A + B)), rf"This uses ${A} + ({B})$ in the denominator instead of ${A} - ({B})$."),
         (num(A * B + k), r"This is only the limit of the numerator. The denominator's limit must be divided into it."),
         (num(Rational(A + B + k, A - B)), rf"This adds the limits in the numerator, ${A} + ({B})$, where the expression multiplies them.")]), "moderate")

def t15_xsq(r):
    c = r.choice([2, 3, -2, 4]); A = r.choice([5, -1, 3, 2]); B = r.choice([4, 7, -3, 6])
    val = c**2 * A - B
    q = rf"Given that $\displaystyle \lim_{{x \to {c}}} f(x) = {A}$ and $\displaystyle \lim_{{x \to {c}}} g(x) = {B}$, what is $\displaystyle \lim_{{x \to {c}}} \left[x^{{2}} f(x) - g(x)\right]$?"
    return dz(item("1.5", q, (num(val), rf"The limit of $x^{{2}}$ is ${c**2}$, so the limit is ${c**2}({A}) - ({B}) = {val}$."),
        [(num(A - B), r"This leaves out the factor $x^{2}$, whose limit is not $1$."),
         (num(c * A - B), rf"This uses ${c}$ for the limit of $x^{{2}}$ instead of ${c**2}$."),
         (num(c**2 * A + B), rf"This adds ${B}$ instead of subtracting it.")]), "easy")

def c15(r):
    # f: line from (-3, -3) to an open circle at (2, 2); open circle at (2, -2) starts a line to (4, 0); f(2) = 0.
    # g: line from (-3, 3) to (1, -1) with a hole at (-1, 1) and g(-1) = -2; line from (1, -1) to (3, 3); flat to (4, 3).
    F = Piecewise((x, x < 2), (x - 4, x > 2), (0, True))
    G = Piecewise((-x, x <= 1), (2 * x - 3, x <= 3), (3, True))
    fm1, gm1 = -1, 1       # limits at -1 (f is continuous there; g has a hole at height 1)
    chk(F, -1, fm1); chk(G, -1, gm1)
    sid = "c1x-g15"
    gf = {"x": [-3, 4], "y": [-4, 4], "xname": "x", "yname": "y", "segments": [[-3, -3, 2, 2], [2, -2, 4, 0]],
          "dots": [[-3, -3, "closed"], [2, 2, "open"], [2, -2, "open"], [2, 0, "closed"], [4, 0, "closed"]],
          "alt": "Graph of f on [-3, 4]. A line rises from the filled point (-3, -3) through (-1, -1) to an open circle at (2, 2). A separate filled point is at (2, 0). An open circle at (2, -2) starts a line that rises to the filled point (4, 0)."}
    gg = {"x": [-3, 4], "y": [-4, 4], "xname": "x", "yname": "y", "segments": [[-3, 3, 1, -1], [1, -1, 3, 3], [3, 3, 4, 3]],
          "dots": [[-3, 3, "closed"], [-1, 1, "open"], [-1, -2, "closed"], [4, 3, "closed"]],
          "alt": "Graph of g on [-3, 4]. A line falls from the filled point (-3, 3) to (1, -1), with an open circle on it at (-1, 1) and a separate filled point at (-1, -2). From (1, -1) a line rises through (2, 1) to (3, 3), and a horizontal segment runs from (3, 3) to the filled point (4, 3)."}
    code = set_code("The graphs of f and g", "Graph", r"The graphs of the functions $f$ and $g$ are shown below.", [("Graph of f", [{"svg": gf}]), ("Graph of g", [{"svg": gg}])])
    key1 = 2 * fm1 - gm1
    chk(2 * F - G, -1, key1)
    i1 = dz(item("1.5", r"What is $\displaystyle \lim_{x \to -1} \left[2f(x) - g(x)\right]$?",
        (num(key1), rf"$\displaystyle \lim_{{x \to -1}} f(x) = -1$, and the graph of $g$ approaches the open circle at $(-1, 1)$, so $\displaystyle \lim_{{x \to -1}} g(x) = 1$. The limit is $2(-1) - 1 = {key1}$."),
        [(num(2 * fm1 - (-2)), r"This uses $g(-1) = -2$, the filled point, in place of $\displaystyle \lim_{x \to -1} g(x) = 1$."),
         (num(2 * (fm1 - gm1)), r"This applies the factor $2$ to both terms: $2(-1 - 1)$. Only $f(x)$ is multiplied by $2$."),
         (num(2 * fm1 + gm1), r"This adds the limit of $g$ instead of subtracting it.")], set_id=sid), "easy")
    key2 = 4 - 1
    chk(F**2 - G, 2, key2)
    i2 = dz(item("1.5", r"What is $\displaystyle \lim_{x \to 2} \left[\left(f(x)\right)^{2} - g(x)\right]$?",
        (num(key2), r"From the left $f(x) \to 2$ and from the right $f(x) \to -2$, so $\left(f(x)\right)^{2} \to 4$ from both sides. $g$ is continuous at $2$ with $g(2) = 1$. The limit is $4 - 1 = 3$."),
        [(text_choice("The limit does not exist."), r"$\displaystyle \lim_{x \to 2} f(x)$ does not exist, but squaring makes both one-sided limits of $\left(f(x)\right)^{2}$ equal to $4$, so this limit exists."),
         ("-1", r"This uses the values $f(2) = 0$ and $g(2) = 1$: $0^{2} - 1 = -1$. The limit depends on values of $f$ near $x = 2$, not at $x = 2$."),
         ("-5", r"This squares $-2$ as $-4$ for the right-hand limit, giving $-4 - 1$. In fact $(-2)^{2} = 4$.")], set_id=sid), "difficult")
    rest = make_text(r, [(t15_props, 1), (t15_xsq, 1)])
    return [i1, i2] + rest, sid, code

# ---------------------------------------------------------------- 1.6
def t16_factor(r):
    a = r.choice([-3, -2, 2, 3, 4]); b = r.choice([-5, -1, 1, 5]); c = r.choice([-4, 6, 1])
    if len({a, b, c}) < 3 or (a, b, c) == (4, -1, -4): raise Skip("dup")
    num_ = expand((x - a) * (x - b)); den = expand((x - a) * (x - c))
    val = Rational(a - b, a - c)
    chk(num_ / den, a, val)
    q = rf"What is $\displaystyle \lim_{{x \to {a}}} \frac{{{L(num_)}}}{{{L(den)}}}$?"
    return dz(item("1.6", q, (num(val), rf"Both factor with $x - ({a})$: $\dfrac{{(x - ({a}))(x - ({b}))}}{{(x - ({a}))(x - ({c}))}}$. Canceling and substituting $x = {a}$ gives $\dfrac{{{a} - ({b})}}{{{a} - ({c})}} = {L(val)}$."),
        [(text_choice("The limit does not exist."), rf"Substituting gives $\dfrac{{0}}{{0}}$, which is indeterminate, not a sign that the limit fails to exist. Factoring removes the common factor."),
         ("0", r"$\dfrac{0}{0}$ is not $0$. It means more work is needed."),
         (num(Rational(b, c)), rf"This is the ratio of the constant terms, ${L(a * b)}$ over ${L(a * c)}$, as if the other terms canceled. Only common factors cancel.")]), "easy")

def t16_root(r):
    qv = r.choice([2, 3, 4]); p = r.choice([1, 3, 5, 7]); a0 = qv**2 - p
    val = Rational(1, 2 * qv)
    chk((sqrt(x + p) - qv) / (x - a0), a0, val)
    q = rf"What is $\displaystyle \lim_{{x \to {a0}}} \frac{{\sqrt{{x + {p}}} - {qv}}}{{x - {L(a0)}}}$?" if a0 >= 0 else rf"What is $\displaystyle \lim_{{x \to {a0}}} \frac{{\sqrt{{x + {p}}} - {qv}}}{{x + {-a0}}}$?"
    return dz(item("1.6", q, (num(val), rf"Multiply by the conjugate $\sqrt{{x + {p}}} + {qv}$: the numerator becomes $x + {p} - {qv**2} = x - ({a0})$, which cancels, leaving $\dfrac{{1}}{{\sqrt{{x + {p}}} + {qv}}} \to \dfrac{{1}}{{{2 * qv}}}$."),
        [("0", r"Substitution gives $\dfrac{0}{0}$, which is indeterminate, not $0$."),
         (num(Rational(1, qv)), rf"This leaves out the second term of the conjugate: $\sqrt{{x + {p}}} + {qv}$ approaches ${2 * qv}$, not ${qv}$."),
         (num(2 * qv), r"This is the reciprocal of the limit. The conjugate ends up in the denominator.")]), "moderate")

def t16_complex(r):
    a = r.choice([3, 4, 5, 6])
    val = Rational(-1, a**2)
    chk((1 / x - R(1, a)) / (x - a), a, val)
    q = rf"What is $\displaystyle \lim_{{x \to {a}}} \frac{{\frac{{1}}{{x}} - \frac{{1}}{{{a}}}}}{{x - {a}}}$?"
    return dz(item("1.6", q, (num(val), rf"$\dfrac{{1}}{{x}} - \dfrac{{1}}{{{a}}} = \dfrac{{{a} - x}}{{{a}x}} = -\dfrac{{x - {a}}}{{{a}x}}$. Dividing by $x - {a}$ leaves $-\dfrac{{1}}{{{a}x}} \to -\dfrac{{1}}{{{a**2}}}$."),
        [(num(Rational(1, a**2)), rf"The sign is lost: ${a} - x = -(x - {a})$."),
         ("0", r"$\dfrac{0}{0}$ is indeterminate. Combine the fractions first."),
         (num(Rational(-1, a)), rf"After canceling, the expression is $-\dfrac{{1}}{{{a}x}}$, which approaches $-\dfrac{{1}}{{{a**2}}}$, not $-\dfrac{{1}}{{{a}}}$.")]), "moderate")

def t16_trig(r):
    k = r.choice([2, 3, 5]); mm = r.choice([4, 7, 3])
    if k == mm: raise Skip("same")
    val = Rational(k, mm)
    chk(sin(k * x) / (mm * x), 0, val)
    q = rf"What is $\displaystyle \lim_{{x \to 0}} \frac{{\sin({k}x)}}{{{mm}x}}$?"
    return dz(item("1.6", q, (num(val), rf"$\dfrac{{\sin({k}x)}}{{{mm}x}} = \dfrac{{{k}}}{{{mm}}} \cdot \dfrac{{\sin({k}x)}}{{{k}x}}$, and $\dfrac{{\sin({k}x)}}{{{k}x}} \to 1$, so the limit is ${L(val)}$."),
        [(num(Rational(mm, k)), r"This is the reciprocal. The factor multiplying the sine's argument goes in the numerator."),
         ("1", rf"$\dfrac{{\sin u}}{{u}} \to 1$ only when the denominator matches the argument. Here the argument is ${k}x$ and the denominator is ${mm}x$."),
         ("0", r"$\dfrac{0}{0}$ is indeterminate, not $0$.")]), "easy")

def t16_trig2(r):
    k = r.choice([2, 3, 4])
    chk(sin(k * x)**2 / x**2, 0, k**2)
    q = rf"What is $\displaystyle \lim_{{x \to 0}} \frac{{\sin^{{2}}({k}x)}}{{x^{{2}}}}$?"
    return dz(item("1.6", q, (num(k**2), rf"$\dfrac{{\sin^{{2}}({k}x)}}{{x^{{2}}}} = {k**2}\left(\dfrac{{\sin({k}x)}}{{{k}x}}\right)^{{2}} \to {k**2}(1)^{{2}} = {k**2}$."),
        [(num(k), rf"This handles one factor of $\dfrac{{\sin({k}x)}}{{x}}$ but not the square."),
         (num(2 * k), r"Squaring does not double. Each factor contributes the constant once."),
         ("1", rf"$\dfrac{{\sin u}}{{u}} \to 1$ needs $u = {k}x$ in the denominator, so constants of ${k}$ appear.")]), "moderate")

def t16_abs(r):
    a = r.choice([2, 3, 5])
    side = r.choice(["-", "+"])
    val = -2 * a if side == "-" else 2 * a
    chk((x**2 - a**2) / Abs(x - a), a, val, side)
    q = rf"What is $\displaystyle \lim_{{x \to {a}^{side}}} \frac{{x^{{2}} - {a**2}}}{{\left|x - {a}\right|}}$?"
    return dz(item("1.6", q, (num(val), rf"For $x {'<' if side == '-' else '>'} {a}$, $|x - {a}| = {'-(x - ' + str(a) + ')' if side == '-' else 'x - ' + str(a)}$, so the expression is ${'-(x + ' + str(a) + ')' if side == '-' else 'x + ' + str(a)}$, which approaches ${val}$."),
        [(num(-val), rf"This treats $|x - {a}|$ as {'$x - ' + str(a) + '$' if side == '-' else '$-(x - ' + str(a) + ')$'}, which is the formula for the other side of ${a}$."),
         (text_choice("The limit does not exist."), r"The two-sided limit does not exist, but this one-sided limit does."),
         ("0", r"Substitution gives $\dfrac{0}{0}$, which is indeterminate, not $0$.")]), "moderate")

def t16_cube(r):
    a = r.choice([2, 4, -1, -3])
    val = 3 * a**2
    chk((x**3 - a**3) / (x - a), a, val)
    if a > 0:
        q = rf"What is $\displaystyle \lim_{{x \to {a}}} \frac{{x^{{3}} - {a**3}}}{{x - {a}}}$?"
        fac = rf"x^{{3}} - {a**3} = (x - {a})(x^{{2}} + {a}x + {a**2})"
    else:
        q = rf"What is $\displaystyle \lim_{{x \to {a}}} \frac{{x^{{3}} + {-a**3}}}{{x + {-a}}}$?"
        fac = rf"x^{{3}} + {-a**3} = (x + {-a})(x^{{2}} - {-a}x + {a**2})" if a != -1 else r"x^{3} + 1 = (x + 1)(x^{2} - x + 1)"
    return dz(item("1.6", q, (num(val), rf"${fac}$. After canceling, substituting $x = {a}$ gives ${a**2} + {a**2} + {a**2} = {val}$."),
        [(num(a**2), rf"${a**2}$ is only one of the three terms of the quadratic factor at $x = {a}$."),
         (num(3 * a), rf"This is $3({a})$. The quadratic factor at $x = {a}$ is $3({a})^{{2}} = {val}$."),
         (text_choice("The limit does not exist."), r"$\dfrac{0}{0}$ is indeterminate. Factoring the sum or difference of cubes removes the zero factor.")]), "moderate")

def t16_hidden(r):
    a = r.choice([2, 4, 6]); h0 = a // 2; side = r.choice(["-", "+"])
    expr = (4 * x**2 - a**2) / sqrt(4 * x**2 - 4 * a * x + a**2)
    val = -2 * a if side == "-" else 2 * a
    chk(expr, h0, val, side)
    q = rf"What is $\displaystyle \lim_{{x \to {h0}^{side}}} \frac{{4x^{{2}} - {a**2}}}{{\sqrt{{4x^{{2}} - {4 * a}x + {a**2}}}}}$?"
    sgn = "negative" if side == "-" else "positive"
    return dz(item("1.6", q, (num(val), rf"$\sqrt{{4x^{{2}} - {4 * a}x + {a**2}}} = \sqrt{{(2x - {a})^{{2}}}} = |2x - {a}|$. For $x {'<' if side == '-' else '>'} {h0}$, $2x - {a}$ is {sgn}, so the expression is ${'-(2x + ' + str(a) + ')' if side == '-' else '2x + ' + str(a)}$, which approaches ${val}$."),
        [(num(-val), rf"This simplifies $\sqrt{{(2x - {a})^{{2}}}}$ to $2x - {a}$. The square root of a square is an absolute value, and $2x - {a}$ is {sgn} here."),
         (text_choice("The limit does not exist."), r"The two-sided limit does not exist, but this one-sided limit does: on one side of the point the absolute value has a single formula."),
         ("0", r"Substitution gives $\dfrac{0}{0}$, which is indeterminate, not $0$.")]), "difficult")

def t16_group(r):
    a = r.choice([2, 3, -2]); b = r.choice([1, 3, 5])
    num_ = expand((x - a) * (x**2 + b)); val = a**2 + b
    chk(num_ / (x - a), a, val)
    q = rf"What is $\displaystyle \lim_{{x \to {a}}} \frac{{{L(num_)}}}{{{L(x - a)}}}$?"
    return dz(item("1.6", q, (num(val), rf"Group the terms: ${L(num_)} = x^{{2}}(x - ({a})) + {b}(x - ({a})) = (x - ({a}))(x^{{2}} + {b})$. After canceling, the limit is ${a**2} + {b} = {val}$."),
        [(num(a**2 - b), rf"This factors the numerator as $(x - ({a}))(x^{{2}} - {b})$, a sign error in the second group."),
         (num(a**2), rf"This drops the ${b}$ from the factor $x^{{2}} + {b}$ after grouping."),
         (text_choice("The limit does not exist."), r"$\dfrac{0}{0}$ is indeterminate. Factoring by grouping removes the zero factor.")]), "difficult")

t16_factor.max = 2; t16_trig.max = 1; t16_root.max = 2; t16_complex.max = 1; t16_trig2.max = 1; t16_abs.max = 2; t16_cube.max = 1; t16_hidden.max = 2; t16_group.max = 1

# ---------------------------------------------------------------- 1.7
def t17_direct(r):
    a = r.choice([3, 5, 6])
    good = rf"\displaystyle \lim_{{x \to {a}}} \frac{{x^{{2}} - {a**2}}}{{x + {a}}}"
    bads = [rf"\displaystyle \lim_{{x \to {a}}} \frac{{x^{{2}} - {a**2}}}{{x - {a}}}", rf"\displaystyle \lim_{{x \to {a**2}}} \frac{{\sqrt{{x}} - {a}}}{{x - {a**2}}}", rf"\displaystyle \lim_{{x \to 0}} \frac{{\sin x}}{{x}}"]
    q = r"Which limit can be found by substituting the value of $x$ directly into the expression?"
    return dz(item("1.7", q, (good, rf"At $x = {a}$ the denominator is ${2 * a}$, not $0$, and the function is continuous there, so substituting gives $\dfrac{{0}}{{{2 * a}}} = 0$, the limit."),
        [(bads[0], r"Substituting gives $\dfrac{0}{0}$, an indeterminate form, so the expression must be factored first."),
         (bads[1], rf"Substituting gives $\dfrac{{0}}{{0}}$; multiplying by the conjugate, or factoring $x - {a**2}$ as $(\sqrt{{x}} - {a})(\sqrt{{x}} + {a})$, is needed first."),
         (bads[2], r"Substituting gives $\dfrac{0}{0}$; this limit, $1$, comes from the squeeze theorem, not from substitution.")]), "easy")

def t17_pick(r):
    a = r.choice([1, 2, 3]); b = r.choice([4, 5, 6])
    num_ = expand((x - a) * (x + b)); val = a + b
    chk(num_ / (x - a), a, val)
    q = rf"What is $\displaystyle \lim_{{x \to {a}}} \frac{{{L(num_)}}}{{x - {a}}}$, and which procedure finds it?"
    return dz(item("1.7", q, (text_choice(rf"${val}$, by factoring and canceling $x - {a}$"), rf"Substitution gives $\dfrac{{0}}{{0}}$. Factoring the numerator as $(x - {a})(x + {b})$ and canceling leaves $x + {b} \to {val}$."),
        [(text_choice(r"$0$, by direct substitution"), r"Direct substitution gives $\dfrac{0}{0}$, which is indeterminate, not $0$."),
         (text_choice(rf"${val}$, by direct substitution"), r"The value is right, but direct substitution gives $\dfrac{0}{0}$. Factoring is the step that finds it."),
         (text_choice(r"No limit, since the denominator goes to $0$"), r"A denominator approaching $0$ does not settle the question when the numerator also approaches $0$.")]), "easy")

def t17_assigned(r):
    a = r.choice([3, 5, -2]); v = r.choice([0, 1, 8]); m0 = r.choice([1, 3])
    n0 = 2 * a - m0 * a
    if v == 2 * a: raise Skip("same")
    F = Piecewise(((x**2 - a**2) / (x - a), x < a), (m0 * x + n0, x > a), (v, True))
    chk(F, a, 2 * a)
    right = L(m0 * x + n0)
    fdef = rf"f(x) = \begin{{cases}} \dfrac{{x^{{2}} - {a**2}}}{{x - ({a})}}, & x < {a} \\ {v}, & x = {a} \\ {right}, & x > {a} \end{{cases}}"
    q = rf"Let ${fdef}$. What is $\displaystyle \lim_{{x \to {a}}} f(x)$?"
    return dz(item("1.7", q, (num(2 * a), rf"From the left, $\dfrac{{x^{{2}} - {a**2}}}{{x - ({a})}} = x + ({a})$ for $x \ne {a}$, which approaches ${2 * a}$. From the right, ${right}$ approaches ${L(m0 * a + n0)}$. The one-sided limits agree, so the limit is ${2 * a}$. The value $f({a}) = {v}$ does not affect it."),
        [(num(v), rf"${v}$ is $f({a})$, the assigned value. The limit depends on values of $f$ near ${a}$."),
         (text_choice("The limit does not exist."), rf"Different formulas on each side do not prevent a limit. After canceling, both one-sided limits are ${2 * a}$."),
         (num(a), rf"This substitutes ${a}$ into only the factor $x$ after canceling, leaving out the ${a}$ in $x + ({a})$.")]), "difficult")

t17_direct.max = 1; t17_pick.max = 1; t17_assigned.max = 1

# ---------------------------------------------------------------- 1.8
def t18_bounds(r):
    a = r.choice([1, 2, 3]); c = r.choice([0, 1, 4])
    g = 2 * a * x - a**2 + c; hh = x**2 + c
    val = a**2 + c
    assert simplify(hh - g - (x - a)**2) == 0
    q = rf"The function $f$ satisfies ${L(g)} \le f(x) \le {L(hh)}$ for all $x$. What is $\displaystyle \lim_{{x \to {a}}} f(x)$?"
    return dz(item("1.8", q, (num(val), rf"At $x = {a}$ both bounds equal ${val}$: ${L(g.subs(x, a))} = {L(hh.subs(x, a))}$. By the squeeze theorem, $\displaystyle \lim_{{x \to {a}}} f(x) = {val}$."),
        [(text_choice("It cannot be determined."), rf"The squeeze theorem applies: both bounding functions approach ${val}$ as $x \to {a}$, so $f$ must too."),
         (num(2 * a), rf"${2 * a}$ is the slope of the lower bound. The limit is a value that $f(x)$ approaches, not a slope."),
         (num(c), rf"${c}$ is the value of the upper bound at $x = 0$, not at $x = {a}$.")]), "easy")

def t18_osc(r):
    k = r.choice([10, 12, 15]); a = r.choice([0, 1, -2])
    expr = (x - a) * sin(k / (x - a))
    chk(expr, a, 0)
    xa = "x" if a == 0 else L(x - a)
    q = rf"What is $\displaystyle \lim_{{x \to {a}}} ({xa}) \sin\left(\frac{{{k}}}{{{xa}}}\right)$?" if a else rf"What is $\displaystyle \lim_{{x \to 0}} x \sin\left(\frac{{{k}}}{{x}}\right)$?"
    return dz(item("1.8", q, ("0", rf"Since $-1 \le \sin\left(\dfrac{{{k}}}{{{xa}}}\right) \le 1$, the product is between $-|{xa}|$ and $|{xa}|$, and both approach $0$. By the squeeze theorem the limit is $0$."),
        [(num(k), rf"${k}$ comes from treating $\sin\left(\dfrac{{{k}}}{{{xa}}}\right)$ as if it equaled $\dfrac{{{k}}}{{{xa}}}$. That holds approximately only for a small angle, and here the angle grows without bound."),
         (text_choice("The limit does not exist."), rf"$\sin\left(\dfrac{{{k}}}{{{xa}}}\right)$ alone has no limit at ${a}$, but multiplying by ${xa}$, which approaches $0$, squeezes the product to $0$."),
         (r"\infty", rf"The angle $\dfrac{{{k}}}{{{xa}}}$ grows without bound, but the sine of any angle stays between $-1$ and $1$, so the product is bounded by $|{xa}|$.")]), "moderate")

def t18_pairs(r):
    pairs = [
        (r"$1 - x^{2} \le f(x) \le \cos x$", True, r"both bounds approach $1$ as $x \to 0$, and $1 - x^{2} \le \cos x$ near $0$."),
        (r"$x - 1 \le f(x) \le e^{x} - 2$", True, r"both bounds approach $-1$ as $x \to 0$."),
        (r"$-x^{2} \le f(x) \le 1 + x^{2}$", False, r"the bounds approach $0$ and $1$, which differ, so $f$ is not forced to a single value."),
        (r"$\sin x \le f(x) \le 2 + x$", False, r"the bounds approach $0$ and $2$, which differ."),
        (r"$-|x| \le f(x) \le x^{2} + |x|$", True, r"both bounds approach $0$ as $x \to 0$."),
        (r"$e^{x} \le f(x) \le e^{x} + 1$", False, r"the bounds approach $1$ and $2$, which differ."),
    ]
    tr = [p for p in pairs if p[1]]; fa = [p for p in pairs if not p[1]]
    pattern = r.choice([[0, 1, 0], [0, 0, 1], [1, 0, 0]])
    r.shuffle(tr); r.shuffle(fa)
    st = [(tr.pop() if p else fa.pop()) for p in pattern]
    lead = r"For each inequality below, suppose a function $f$ satisfies it for all $x$ near $0$. For which of the inequalities does the squeeze theorem determine $\displaystyle \lim_{x \to 0} f(x)$?"
    return dz(roman("1.8", lead, st, r), "difficult")

t18_bounds.max = 2; t18_osc.max = 1; t18_pairs.max = 1

# ---------------------------------------------------------------- 1.9
def c19_cont(r):
    a = r.choice([1, 2, 3]); p = r.choice([1, 3, -2]); q0 = r.choice([2, 4, 5]); r0 = a**2 + p - q0 * a
    G = r.choice([3, -2, 5, 4]); ga = G + r.choice([1, 2, -3])
    Fv = a**2 + p
    if Fv == 0 or G == 0: raise Skip("zero")
    F = Piecewise((x**2 + p, x < a), (q0 * x + r0, True))
    chk(F, a, Fv)
    d = [R(1, 10), R(1, 100)]
    xs = [a - e for e in d] + [a] + [a + e for e in reversed(d)]
    ys = [G - e for e in d] + [ga] + [G + e for e in reversed(d)]
    sid = "c1x-t19a"
    fdef = rf"f(x) = \begin{{cases}} {L(x**2 + p)}, & x < {a} \\ {L(q0 * x + r0)}, & x \ge {a} \end{{cases}}"
    code = set_code("A formula and a table", "Table", rf"The function $f$ is defined by ${fdef}$. The table gives selected values of the function $g$, and the values of $g$ near $x = {a}$ follow the pattern shown.",
                    [("", [{"table": (["$x$"] + [f"${dec(v)}$" for v in xs], [["$g(x)$"] + [f"${dec(w)}$" for w in ys]])}])])
    rtex = pm(r0)
    i1 = dz(item("1.9", rf"What is $\displaystyle \lim_{{x \to {a}}} f(x)\,g(x)$?",
        (num(Fv * G), rf"From both sides $f(x) \to {Fv}$, since ${a**2} {pm(p)} = {q0}({a}) {rtex}$, and the table shows $g(x) \to {G}$. The limit of the product is $({Fv})({G}) = {Fv * G}$."),
        [(num(Fv * ga), rf"This uses $g({a}) = {ga}$ in place of the limit of $g$, which is ${G}$. A limit depends on values near ${a}$, not at it."),
         (num(Fv + G), r"This adds the limits. The expression is a product."),
         (text_choice("The limit does not exist."), rf"Both formulas for $f$ give ${Fv}$ at $x = {a}$, so $\displaystyle \lim_{{x \to {a}}} f(x)$ exists, and so does the limit of $g$.")], set_id=sid), "moderate")
    i2 = dz(item("1.9", rf"What is $\displaystyle \lim_{{x \to {a}^-}} \left[f(x) - g(x)\right]$?",
        (num(Fv - G), rf"From the left, $f(x) = {L(x**2 + p)} \to {Fv}$ and the table shows $g(x) \to {G}$, so the limit is ${Fv} - ({G}) = {Fv - G}$."),
        [(num(Fv - ga), rf"This uses $g({a}) = {ga}$ in place of the left-hand limit of $g$, which is ${G}$."),
         (num(G - Fv), r"This subtracts in the wrong order."),
         (num(Fv + G), r"This adds the limits. The expression is a difference.")], set_id=sid), "easy")
    return [i1, i2], sid, code

def c19_jump(r):
    a = r.choice([-1, 2, 4]); L1 = r.choice([3, -2, 5]); L2 = r.choice([1, -4, 6]); k = r.choice([2, 3, -2]); ga = r.choice([1, 2, -3])
    if L1 == L2 or len({L1 * ga, L2 * ga, L1, L2}) < 4 or 0 <= L1 * ga <= 9 or 0 <= L2 * ga <= 9: raise Skip("same")
    e1 = x + (L1 - a); e2 = 2 * x + (L2 - 2 * a)
    F = Piecewise((e1, x < a), (e2, True))
    chk(F, a, L1, "-"); chk(F, a, L2, "+")
    Gx = k * (x - a)
    chk(F * Gx, a, 0)
    d = [R(1, 10), R(1, 100)]
    xs = [a - e for e in d] + [a] + [a + e for e in reversed(d)]
    ys = [Gx.subs(x, v) for v in xs[:2]] + [ga] + [Gx.subs(x, v) for v in xs[3:]]
    sid = "c1x-t19b"
    fdef = rf"f(x) = \begin{{cases}} {L(e1)}, & x < {a} \\ {L(e2)}, & x \ge {a} \end{{cases}}"
    code = set_code("A formula and a table", "Table", rf"The function $f$ is defined by ${fdef}$. The table gives selected values of the function $g$, and the values of $g$ near $x = {a}$ follow the pattern shown.",
                    [("", [{"table": (["$x$"] + [f"${dec(v)}$" for v in xs], [["$g(x)$"] + [f"${dec(w)}$" for w in ys]])}])])
    i1 = dz(item("1.9", rf"What is $\displaystyle \lim_{{x \to {a}}} f(x)\,g(x)$?",
        ("0", rf"From the left $f(x) \to {L1}$ and from the right $f(x) \to {L2}$, while the table shows $g(x) \to 0$ from both sides. So $f(x)g(x) \to ({L1})(0) = 0$ from the left and $({L2})(0) = 0$ from the right, and the limit is $0$."),
        [(text_choice("The limit does not exist."), rf"$\displaystyle \lim_{{x \to {a}}} f(x)$ does not exist, but the product's one-sided limits are both $0$ because $g(x) \to 0$, so the product's limit exists."),
         (num(L2 * ga), rf"This uses the values $f({a}) = {L2}$ and $g({a}) = {ga}$. The limit depends on values near ${a}$."),
         (num(L1 * ga), rf"This multiplies the left-hand limit of $f$ by $g({a}) = {ga}$ instead of by the limit of $g$, which is $0$.")], set_id=sid), "difficult")
    i2 = dz(item("1.9", rf"What is $\displaystyle \lim_{{x \to {a}^-}} \left[f(x) + g(x)\right]$?",
        (num(L1), rf"From the left, $f(x) = {L(e1)} \to {L1}$ and the table shows $g(x) \to 0$, so the limit is ${L1} + 0 = {L1}$."),
        [(num(L2), rf"${L2}$ uses the formula for $x \ge {a}$, which gives the right-hand limit."),
         (num(L1 + ga), rf"This adds $g({a}) = {ga}$ in place of the limit of $g$, which is $0$."),
         (text_choice("The limit does not exist."), r"The two-sided limit of $f$ does not exist, but this left-hand limit does.")], set_id=sid), "easy")
    return [i1, i2], sid, code

# ---------------------------------------------------------------- 1.10
def t110_types(r):
    a = r.choice([1, 2, 3]); b = r.choice([-4, -1, 5])
    if a == b or a == -b: raise Skip("dup")
    num_ = expand((x - a) * (x + a)); den = expand((x - a) * (x - b))
    lv = Rational(2 * a, a - b)
    chk(num_ / den, a, lv)
    q = rf"Let $f(x) = \dfrac{{{L(num_)}}}{{{L(den)}}}$. Which of the following describes the discontinuities of $f$?"
    return dz(item("1.10", q, (text_choice(rf"A removable discontinuity at $x = {a}$ and a vertical asymptote at $x = {b}$"), rf"$f(x) = \dfrac{{(x - {a})(x + {a})}}{{(x - {a})(x - ({b}))}}$. The factor $x - {a}$ cancels, so the limit at ${a}$ exists (a hole). At $x = {b}$ only the denominator is $0$, so $f$ grows without bound."),
        [(text_choice(rf"Vertical asymptotes at $x = {a}$ and at $x = {b}$, with no removable discontinuity"), rf"At $x = {a}$ the numerator is also $0$; after canceling, the limit exists, so it is a hole, not an asymptote."),
         (text_choice(rf"A removable discontinuity at $x = {b}$ and a vertical asymptote at $x = {a}$"), r"The removable one is where the common factor cancels."),
         (text_choice(rf"A jump discontinuity at $x = {a}$ and a vertical asymptote at $x = {b}$"), rf"A jump needs different one-sided limits. At $x = {a}$ both one-sided limits equal ${L(lv)}$.")]), "moderate")

def c110(r):
    # f(x) = -1/(x + 2) on [-4, -2); f(x) = x on (-2, 3) except f(1) = -1; f(x) = x - 4 on [3, 5].
    sid = "c1x-g110"
    g = {"x": [-4, 5], "y": [-3, 4], "xname": "x", "yname": "y",
         "fns": [{"f": Raw("(x) => -1 / (x + 2)"), "from": -4, "to": -2.04}],
         "segments": [[-2, -2, 3, 3], [3, -1, 5, 1]], "vlines": [{"x": -2}],
         "dots": [[-4, 0.5, "closed"], [-2, -2, "open"], [1, 1, "open"], [1, -1, "closed"], [3, 3, "open"], [3, -1, "closed"], [5, 1, "closed"]],
         "alt": "Graph of f on [-4, 5]. A dashed vertical line is at x = -2. To its left, a curve starts at the filled point (-4, 0.5), passes through (-3, 1), and rises without bound as x approaches -2 from the left. To the right of x = -2, a line starts at an open circle at (-2, -2) and rises through (0, 0) to an open circle at (3, 3); it has an open circle at (1, 1), and a separate filled point is at (1, -1). A filled point at (3, -1) starts a line that rises to the filled point (5, 1)."}
    code = set_code("The graph of f", "Graph", r"The graph of the function $f$ on the interval $[-4, 5]$ is shown below. The dashed line $x = -2$ is a vertical asymptote.", [("", [{"svg": g}])])
    i1 = dz(item("1.10", r"At which value or values of $x$ does $f$ have a removable discontinuity?",
        (text_choice("$x = 1$ only"), r"At $x = 1$ both one-sided limits are $1$, but $f(1) = -1$. The limit exists and differs from the value, so the discontinuity is removable. At $x = -2$ the left side is unbounded, and at $x = 3$ the one-sided limits $3$ and $-1$ differ."),
        [(text_choice("$x = -2$ only"), r"At $x = -2$ the right-hand limit is $-2$, but from the left the graph rises without bound. An infinite discontinuity cannot be removed by assigning one value."),
         (text_choice("$x = -2$ and $x = 1$"), r"At $x = -2$ the graph rises without bound from the left, an infinite discontinuity, even though the right-hand limit is finite."),
         (text_choice("$x = 1$ and $x = 3$"), r"At $x = 3$ the one-sided limits differ, which is a jump, not a removable discontinuity.")], set_id=sid), "easy")
    i2 = dz(item("1.10", r"Which of the following lists the types of discontinuity of $f$ at $x = -2$, $x = 1$, and $x = 3$, in that order?",
        (text_choice("infinite, removable, jump"), r"At $x = -2$, $\displaystyle \lim_{x \to -2^-} f(x) = \infty$: infinite. At $x = 1$ the limit is $1$ but $f(1) = -1$: removable. At $x = 3$ the one-sided limits are $3$ and $-1$: jump."),
        [(text_choice("jump, removable, jump"), r"At $x = -2$ one side is unbounded. A jump needs both one-sided limits to be finite."),
         (text_choice("infinite, jump, removable"), r"The types at $x = 1$ and $x = 3$ are switched. At $x = 1$ the limit exists, and at $x = 3$ the one-sided limits differ."),
         (text_choice("removable, removable, jump"), r"At $x = -2$ the graph rises without bound from the left, so no value of $f(-2)$ can make $f$ continuous there.")], set_id=sid), "moderate")
    rest = make_text(r, [(t110_types, 1)])
    return [i1, i2] + rest, sid, code

# ---------------------------------------------------------------- 1.11
def t111_point(r):
    a = r.choice([1, 2, 3, -1]); k = r.choice([2, 3, -2]); b0 = r.choice([1, -3, 4]); val = r.choice([0, 1, 7, -5])
    e = k * x + b0
    lv = e.subs(x, a)
    if lv == val: raise Skip("cont")
    fdef = rf"f(x) = \begin{{cases}} {L(e)}, & x \ne {a} \\ {val}, & x = {a} \end{{cases}}"
    q = rf"Let ${fdef}$. Which of the following is true about $f$ at $x = {a}$?"
    return dz(item("1.11", q, (text_choice(rf"$\displaystyle \lim_{{x \to {a}}} f(x) = {lv}$, so $f$ is not continuous at $x = {a}$."), rf"Near $x = {a}$, $f(x) = {L(e)}$, which approaches ${lv}$. Since $f({a}) = {val} \ne {lv}$, the third condition of continuity fails."),
        [(text_choice(rf"$f$ is continuous at $x = {a}$ because $f({a})$ is defined."), r"Being defined is only one of the three conditions; the limit must also equal the value."),
         (text_choice(rf"$\displaystyle \lim_{{x \to {a}}} f(x) = {val}$, so $f$ is continuous at $x = {a}$."), rf"${val}$ is $f({a})$. The limit comes from the values near ${a}$, which approach ${lv}$."),
         (text_choice(rf"$\displaystyle \lim_{{x \to {a}}} f(x)$ does not exist, so $f$ is not continuous."), rf"Near $x = {a}$, $f(x) = {L(e)}$ from both sides, so the limit exists and equals ${lv}$.")]), "easy")

def t111_two(r):
    p, q1 = r.choice([(-1, 2), (0, 3), (1, 4)])
    b0 = r.choice([1, 2, -1]); m0 = r.choice([1, 2, 3])
    e1 = x**2 + b0
    n0 = e1.subs(x, p) - m0 * p                       # middle line meets the parabola at p
    e2 = m0 * x + n0
    contp = r.choice([True, False]); contq = r.choice([True, False])
    if not contp:
        n0 += r.choice([1, 2])
    e2 = m0 * x + n0
    e3 = Integer(e2.subs(x, q1) + (0 if contq else r.choice([1, -2, 3])))
    F = Piecewise((e1, x < p), (e2, x < q1), (e3, True))
    cp = _side(F, p, "-") == _side(F, p, "+") == F.subs(x, p)
    cq = _side(F, q1, "-") == _side(F, q1, "+") == F.subs(x, q1)
    if not (cp == contp and cq == contq): raise AssertionError("t111_two continuity check")
    fdef = rf"f(x) = \begin{{cases}} {L(e1)}, & x < {p} \\ {L(e2)}, & {p} \le x < {q1} \\ {L(e3)}, & x \ge {q1} \end{{cases}}"
    names = {(True, True): f"At both $x = {p}$ and $x = {q1}$", (True, False): f"At $x = {p}$ only", (False, True): f"At $x = {q1}$ only", (False, False): "At neither value"}
    lp, rp = e1.subs(x, p), e2.subs(x, p); lq, rq = e2.subs(x, q1), e3
    reason = rf"At $x = {p}$ the left-hand limit is ${lp}$ and $f({p}) = {rp}$, which is also the right-hand limit. At $x = {q1}$ the left-hand limit is ${lq}$ and $f({q1}) = {rq}$, which is also the right-hand limit. $f$ is continuous where these agree."
    key = names[(contp, contq)]
    wrongs = []
    for k2, n in names.items():
        if k2 == (contp, contq): continue
        bad = []
        if k2[0] != contp: bad.append(rf"at $x = {p}$ the left-hand limit and $f({p})$ are ${lp} {'=' if contp else r'\ne'} {rp}$")
        if k2[1] != contq: bad.append(rf"at $x = {q1}$ the left-hand limit and $f({q1})$ are ${lq} {'=' if contq else r'\ne'} {rq}$")
        wrongs.append((text_choice(n), "Check each joint: " + " and ".join(bad) + "."))
    q = rf"Let ${fdef}$. At which of the values $x = {p}$ and $x = {q1}$ is $f$ continuous?"
    return dz(item("1.11", q, (text_choice(key), reason), wrongs), "moderate")

def t111_abs(r):
    a = r.choice([2, 3, 4]); side = r.choice(["+", "-"])
    v = 2 * a if side == "+" else -2 * a
    expr = (x**2 - a**2) / Abs(x - a)
    chk(expr, a, 2 * a, "+"); chk(expr, a, -2 * a, "-")
    fdef = rf"f(x) = \begin{{cases}} \dfrac{{x^{{2}} - {a**2}}}{{|x - {a}|}}, & x \ne {a} \\ {v}, & x = {a} \end{{cases}}"
    sname = "right" if side == "+" else "left"
    q = rf"Let ${fdef}$. Which of the following is true?"
    return dz(item("1.11", q, (text_choice(rf"$f$ is not continuous at $x = {a}$, because $\displaystyle \lim_{{x \to {a}}} f(x)$ does not exist."), rf"For $x > {a}$, $f(x) = x + {a} \to {2 * a}$. For $x < {a}$, $f(x) = -(x + {a}) \to {-2 * a}$. The one-sided limits differ, so the limit does not exist and $f$ is not continuous at ${a}$."),
        [(text_choice(rf"$f$ is continuous at $x = {a}$, because $f({a})$ equals $\displaystyle \lim_{{x \to {a}^{side}}} f(x)$."), rf"$f({a}) = {v}$ matches only the {sname}-hand limit. Continuity needs the two-sided limit to exist and equal $f({a})$."),
         (text_choice(rf"$f$ is not continuous at $x = {a}$, because the formula is undefined there."), rf"$f({a}) = {v}$ is defined by the second line, so the first condition holds. The failure is that the limit does not exist."),
         (text_choice(rf"$f$ is continuous at $x = {a}$, because both one-sided limits at ${a}$ exist."), rf"Both one-sided limits exist, but they are ${2 * a}$ and ${-2 * a}$. They must be equal to each other and to $f({a})$.")]), "difficult")

t111_point.max = 1; t111_two.max = 1; t111_abs.max = 1

# ---------------------------------------------------------------- 1.12
def t112_domain(r):
    a = r.choice([0, 1, 2]); b = a + r.choice([2, 3])
    q = rf"On which of the following is the function $f(x) = \dfrac{{\ln(x - {a})}}{{x - {b}}}$ continuous?" if a else rf"On which of the following is the function $f(x) = \dfrac{{\ln x}}{{x - {b}}}$ continuous?"
    return dz(item("1.12", q, (text_choice(rf"$({a}, {b}) \cup ({b}, \infty)$"), rf"$\ln(x - {a})$ needs $x > {a}$, and the denominator is $0$ at $x = {b}$. On the rest of the domain, quotients of continuous functions are continuous."),
        [(text_choice(rf"$({a}, \infty)$"), rf"This includes $x = {b}$, where the denominator is $0$."),
         (text_choice(rf"$(-\infty, {b}) \cup ({b}, \infty)$"), rf"This ignores the logarithm, which is defined only for $x > {a}$."),
         (text_choice(rf"$[{a}, {b}) \cup ({b}, \infty)$"), rf"$\ln 0$ is undefined, so $x = {a}$ is not in the domain.")]), "moderate")

def t112_which(r):
    p = r.choice([1, 4, 9]); q2 = r.choice([2, 3])
    good = rf"\frac{{x}}{{x^{{2}} + {p}}}"
    q = r"Which function is continuous at every real number?"
    return dz(item("1.12", q, (good, rf"The denominator $x^{{2}} + {p}$ is never $0$, so this quotient of polynomials is continuous everywhere."),
        [(rf"\frac{{x}}{{x^{{2}} - {q2**2}}}", rf"The denominator is $0$ at $x = \pm {q2}$."),
         (rf"\sqrt{{x^{{2}} - {p}}}", rf"The square root is undefined where $x^{{2}} < {p}$."),
         (rf"\ln\left(x^{{2}}\right)", r"$\ln\left(x^{2}\right)$ is undefined at $x = 0$.")]), "easy")

def t112_k(r):
    a = r.choice([1, 2]); m0 = r.choice([3, 4, 5])
    k = Rational(m0 * a - 1, a**2 + 1)
    assert k * a**2 + 1 == m0 * a - k
    fdef = rf"f(x) = \begin{{cases}} kx^{{2}} + 1, & x \le {a} \\ {m0}x - k, & x > {a} \end{{cases}}"
    q = rf"Let ${fdef}$, where $k$ is a constant. For what value of $k$ is $f$ continuous for all real numbers?"
    w1 = (num(Rational(m0 * a - 1, a**2 - 1)), rf"This subtracts $k$ instead of adding it when collecting the $k$ terms: ${a**2}k - k = {m0 * a - 1}$.") if a != 1 else (num(Rational(m0 * a + 1, a**2 + 1)), r"This adds $1$ instead of subtracting it when moving the constant: $2k = " + str(m0 * a + 1) + "$.")
    return dz(item("1.12", q, (num(k), rf"Each piece is continuous, so only $x = {a}$ matters. Setting ${a**2}k + 1 = {m0 * a} - k$ gives ${a**2 + 1}k = {m0 * a - 1}$, so $k = {L(k)}$."),
        [w1,
         (num(Rational(m0 * a - 1, a**2)), r"This forgets the $k$ in the right-hand piece when solving."),
         (num(m0 * a - 1), rf"This is ${a**2 + 1}k$, not $k$.")]), "easy")

def t112_sqrt(r):
    c = r.choice([4, 5, 9]); d = r.choice([1, 2])
    q = rf"On which of the following intervals is $f(x) = \dfrac{{\sqrt{{{c} - x}}}}{{x + {d}}}$ continuous?"
    return dz(item("1.12", q, (text_choice(rf"$(-\infty, -{d}) \cup (-{d}, {c}]$"), rf"The square root needs $x \le {c}$, and the denominator is $0$ at $x = -{d}$. At $x = {c}$, $f$ is continuous from the left."),
        [(text_choice(rf"$(-\infty, {c}]$"), rf"This includes $x = -{d}$, where the denominator is $0$."),
         (text_choice(rf"$(-{d}, {c})$"), rf"$f$ is also defined and continuous for $x < -{d}$, and at $x = {c}$ from the left."),
         (text_choice(rf"$[{c}, \infty)$"), rf"The square root of ${c} - x$ is undefined for $x > {c}$.")]), "moderate")

def t112_ab(r):
    p, q1 = 1, r.choice([2, 3]); m0 = r.choice([0, 1, -1])
    A, B = symbols("A B")
    sol = solve([A * p + B - (p**2 + m0), B * q1 + A - (q1**2 + m0)], [A, B])
    a_, b_ = sol[A], sol[B]
    if not (a_.is_integer and b_.is_integer): raise Skip("frac")
    mid = L(x**2 + m0)
    F = Piecewise((a_ * x + b_, x < p), (x**2 + m0, x <= q1), (b_ * x + a_, True))
    for pt in (p, q1):
        assert _side(F, pt, "-") == _side(F, pt, "+") == F.subs(x, pt)
    fdef = rf"f(x) = \begin{{cases}} ax + b, & x < {p} \\ {mid}, & {p} \le x \le {q1} \\ bx + a, & x > {q1} \end{{cases}}"
    q = rf"Let ${fdef}$, where $a$ and $b$ are constants. For what values of $a$ and $b$ is $f$ continuous for all real numbers?"
    P, Q = p**2 + m0, q1**2 + m0
    # wrong: the middle piece's value at x = 1 used at both joints
    a2, b2 = P, 0
    # wrong: sign error solving for b in the first equation
    b3 = -(P - a_ * p) if (P - a_ * p) != 0 else P + 1
    ch = lambda u, w: text_choice(rf"$a = {L(u)}$ and $b = {L(w)}$")
    return dz(item("1.12", q, (ch(a_, b_), rf"At $x = {p}$: $a + b = {P}$. At $x = {q1}$: ${q1}b + a = {Q}$. Subtracting gives ${'' if q1 == 2 else q1 - 1}b = {Q - P}$, so $b = {L(b_)}$ and $a = {L(a_)}$."),
        [(ch(b_, a_), r"The values are switched. Check $x = 1$: the left piece gives $a + b$, and the joint at the right uses $bx + a$."),
         (ch(a2, b2), rf"This uses ${P}$, the middle piece at $x = {p}$, at both joints. At $x = {q1}$ the middle piece is ${Q}$, so the second equation is ${q1}b + a = {Q}$."),
         (ch(a_, b3), rf"This keeps $a = {L(a_)}$ but makes a sign error solving $a + b = {P}$ for $b$.")]), "difficult")

def c112(r):
    # f(x) = x + 2 on [-3, 1); f(x) = x - 2 on [1, 5] except x = 3, where f is undefined.
    sid = "c1x-g112"
    g = {"x": [-3, 5], "y": [-2, 4], "xname": "x", "yname": "y", "segments": [[-3, -1, 1, 3], [1, -1, 5, 3]],
         "dots": [[-3, -1, "closed"], [1, 3, "open"], [1, -1, "closed"], [3, 1, "open"], [5, 3, "closed"]],
         "alt": "Graph of f on [-3, 5]. A line rises from the filled point (-3, -1) to an open circle at (1, 3). A filled point at (1, -1) starts a line that rises to the filled point (5, 3). This line has an open circle at (3, 1), and there is no point of the graph above or below it, so f(3) is undefined."}
    code = set_code("The graph of f", "Graph", r"The graph of the function $f$ on the interval $[-3, 5]$ is shown below. The function is not defined at $x = 3$.", [("", [{"svg": g}])])
    i1 = dz(item("1.12", r"On which of the following intervals is $f$ continuous?",
        (text_choice("$[1, 3)$"), r"On $(1, 3)$ the graph is one unbroken line. At the left endpoint $1$, continuity on the interval needs only $\displaystyle \lim_{x \to 1^+} f(x) = f(1)$, and both equal $-1$."),
        [(text_choice("$[-3, 1]$"), r"At the right endpoint $1$, continuity on $[-3, 1]$ needs $\displaystyle \lim_{x \to 1^-} f(x) = f(1)$, but the left-hand limit is $3$ and $f(1) = -1$."),
         (text_choice("$[1, 3]$"), r"$f(3)$ is undefined, so $f$ is not continuous at $x = 3$."),
         (text_choice("$[0, 2]$"), r"This interval contains $x = 1$, where the one-sided limits are $3$ and $-1$, so $f$ is not continuous there.")], set_id=sid), "difficult")
    i2 = dz(item("1.12", r"Which of the following statements about $f$ is true?",
        (text_choice(r"$\displaystyle \lim_{x \to 3} f(x)$ exists, but $f$ is not continuous at $x = 3$."), r"Both sides of the line approach the open circle at $(3, 1)$, so the limit is $1$. Since $f(3)$ is undefined, $f$ is not continuous there."),
         [(text_choice(r"$\displaystyle \lim_{x \to 1} f(x)$ exists, but $f$ is not continuous at $x = 1$."), r"At $x = 1$ the one-sided limits are $3$ and $-1$, so the limit does not exist."),
          (text_choice(r"$f$ is continuous at $x = 1$, because $f(1)$ is defined."), r"$f(1) = -1$ is defined, but the left-hand limit at $1$ is $3$, so the limit does not exist."),
          (text_choice(r"$f$ is continuous on $[3, 5]$, because the graph there is a line."), r"$f(3)$ is undefined, so $f$ is not continuous at the endpoint $3$, and not on $[3, 5]$.")], set_id=sid), "moderate")
    rest = make_text(r, [(t112_domain, 2), (t112_which, 2), (t112_k, 2), (t112_sqrt, 2), (t112_ab, 2)])
    return [i1, i2] + rest, sid, code

# ---------------------------------------------------------------- 1.13
def t113_fill(r):
    a = r.choice([1, 2, 3, -1]); b = r.choice([-3, 2, 5])
    if a == b: raise Skip("dup")
    num_ = expand((x - a) * (x - b)); val = a - b
    chk(num_ / (x - a), a, val)
    q = rf"Let $f(x) = \dfrac{{{L(num_)}}}{{{L(x - a)}}}$ for $x \ne {a}$. What value should $f({a})$ be given so that $f$ is continuous at $x = {a}$?"
    return dz(item("1.13", q, (num(val), rf"For $x \ne {a}$, $f(x) = x - ({b})$, so $\displaystyle \lim_{{x \to {a}}} f(x) = {val}$. Defining $f({a}) = {val}$ removes the discontinuity."),
        [(num(b - a), rf"This cancels the factor $x - ({b})$ instead of $x - ({a})$, or subtracts in the wrong order: the remaining factor $x - ({b})$ at $x = {a}$ is ${val}$."),
         (num(-b), rf"This divides the constant terms, ${L(a * b)}$ over ${L(-a)}$, as if the other terms canceled. Only the common factor $x - ({a})$ cancels."),
         (num(b), rf"${b}$ is the other zero of the numerator, the $x$-value where $f(x) = 0$, not the limit at ${a}$.")]), "easy")

def t113_sin(r):
    k = r.choice([3, 4, 6])
    chk(sin(k * x) / x, 0, k)
    q = rf"Let $g(x) = \dfrac{{\sin({k}x)}}{{x}}$ for $x \ne 0$. What value of $g(0)$ makes $g$ continuous at $x = 0$?"
    return dz(item("1.13", q, (num(k), rf"$\dfrac{{\sin({k}x)}}{{x}} = {k} \cdot \dfrac{{\sin({k}x)}}{{{k}x}} \to {k}$, so $g(0) = {k}$ makes $g$ continuous."),
        [("1", rf"$\dfrac{{\sin u}}{{u}} \to 1$ needs $u = {k}x$ in the denominator, which brings a factor of ${k}$."),
         ("0", r"$\sin 0 = 0$, but the denominator also approaches $0$, so the limit is not $0$."),
         (num(Rational(1, k)), r"This is the reciprocal of the limit.")]), "moderate")

def t113_conj(r):
    s = r.choice([2, 3, 4]); c = r.choice([1, 5, -3]); a = s**2 - c
    expr = (x - a) / (sqrt(x + c) - s); val = 2 * s
    chk(expr, a, val)
    ctex = f"x + {c}" if c > 0 else f"x - {-c}"
    atex = f"x - {a}" if a > 0 else f"x + {-a}"
    q = rf"Let $f(x) = \dfrac{{{atex}}}{{\sqrt{{{ctex}}} - {s}}}$ for $x \ne {a}$. What value should $f({a})$ be given so that $f$ is continuous at $x = {a}$?"
    return dz(item("1.13", q, (num(val), rf"Multiply by $\dfrac{{\sqrt{{{ctex}}} + {s}}}{{\sqrt{{{ctex}}} + {s}}}$: the denominator becomes $({ctex}) - {s**2} = {atex}$, which cancels, leaving $\sqrt{{{ctex}}} + {s} \to {s} + {s} = {val}$."),
        [(num(R(1, 2 * s)), r"This is the reciprocal of the limit. After rationalizing, the conjugate is in the numerator."),
         (num(s), rf"This keeps only $\sqrt{{{ctex}}}$ from the conjugate $\sqrt{{{ctex}}} + {s}$, which approaches ${val}$."),
         ("0", r"Substitution gives $\dfrac{0}{0}$, which is not $0$. The value must match the limit.")]), "moderate")

def t113_rep(r):
    a = r.choice([1, 2, -1]); b = r.choice([3, 4]); c = r.choice([-3, 5])
    if len({a, -b, c}) < 3: raise Skip("dup")
    num_ = expand((x - a)**2 * (x + b)); den = expand((x - a) * (x - c))
    chk(num_ / den, a, 0)
    v2 = R(a + b, a - c)
    q = rf"Let $f(x) = \dfrac{{{L(factor(num_))}}}{{{L(factor(den))}}}$. At which value of $x$ does $f$ have a removable discontinuity, and what value of $f$ there would make $f$ continuous?"
    ch = lambda xv, fv: text_choice(rf"At $x = {xv}$, with value ${L(fv)}$")
    return dz(item("1.13", q, (ch(a, 0), rf"One factor of $x - ({a})$ cancels, leaving $\dfrac{{(x - ({a}))(x + {b})}}{{x - ({c})}}$ for $x \ne {a}$, which approaches $\dfrac{{0 \cdot {a + b}}}{{{a - c}}} = 0$ at $x = {a}$. At $x = {c}$ the denominator alone is $0$, a vertical asymptote."),
        [(ch(a, v2), rf"This cancels both factors of $x - ({a})$ from the numerator, but the denominator has only one, so one factor $x - ({a})$ remains and the limit is $0$."),
         (ch(c, R((c - a) * (c + b), 1)), rf"At $x = {c}$ only the denominator is $0$, so $f$ is unbounded there. No value removes that discontinuity."),
         (ch(-b, 0), rf"At $x = {-b}$ the numerator is $0$ and the denominator is not, so $f({-b}) = 0$ and $f$ is already continuous there.")]), "difficult")

def t113_piece(r):
    a = r.choice([1, 2, 3]); b = r.choice([1, 4, -2])
    num_ = expand((x - a) * (x + a + b)); lv = 2 * a + b
    if lv == 0: raise Skip("zero")
    k = R(lv, a**2)
    F = Piecewise((num_ / (x - a), x < a), (k * x**2, True))
    chk(F, a, lv)
    fdef = rf"f(x) = \begin{{cases}} \dfrac{{{L(num_)}}}{{{L(x - a)}}}, & x < {a} \\ kx^{{2}}, & x \ge {a} \end{{cases}}"
    q = rf"Let ${fdef}$, where $k$ is a constant. For what value of $k$ is $f$ continuous at $x = {a}$?"
    return dz(item("1.13", q, (num(k), rf"For $x < {a}$, $f(x) = x + {a + b}$ after canceling, so the left-hand limit is ${lv}$. Continuity needs $k({a})^{{2}} = {lv}$, so $k = {L(k)}$."),
        [(num(R(lv, a)) if a != 1 else num(lv + 1), (rf"This uses $k({a})$ instead of $k({a})^{{2}}$." if a != 1 else rf"This adds $1$ to the left-hand limit, using $x + {a + b + 1}$ after canceling.")),
         ("0", r"This treats the $\dfrac{0}{0}$ form of the left piece as $0$."),
         (num(R(a + b, a**2)), rf"This substitutes $x = {a}$ into $x + {b}$ only, leaving out one ${a}$ of the factor $x + {a + b}$.")]), "moderate")

t113_fill.max = 2; t113_sin.max = 1; t113_conj.max = 1; t113_rep.max = 1; t113_piece.max = 1

# ---------------------------------------------------------------- 1.14
def t114_side(r):
    a = r.choice([1, 2, 3]); p = r.choice([1, 2, 4])
    side = r.choice(["-", "+"])
    key = oo if side == "+" else -oo
    chk((x + p) / (x - a), a, key, side)
    ans = r"\infty" if side == "+" else r"-\infty"
    q = rf"What is $\displaystyle \lim_{{x \to {a}^{side}}} \frac{{x + {p}}}{{x - {a}}}$?"
    return dz(item("1.14", q, (ans, rf"The numerator approaches ${a + p} > 0$, and the denominator approaches $0$ through {'positive' if side == '+' else 'negative'} values, so the quotient {'grows' if side == '+' else 'decreases'} without bound."),
        [(r"-\infty" if side == "+" else r"\infty", rf"Check the sign of $x - {a}$ on this side: it is {'positive' if side == '+' else 'negative'}."),
         (num(a + p), rf"${a + p}$ is the limit of the numerator only."),
         ("1", r"$1$ is the ratio of the leading coefficients, the limit as $x \to \pm\infty$, not near the zero of the denominator.")]), "easy")

def t114_va(r):
    a = r.choice([1, 2, 3]); b = r.choice([-2, 4, 5])
    if a == b or -a == b or -2 * a == b: raise Skip("dup")
    num_ = expand((x - a) * (x + 2 * a)); den = expand((x - a) * (x - b))
    chk(num_ / den, a, R(3 * a, a - b))
    q = rf"What are all vertical asymptotes of the graph of $y = \dfrac{{{L(num_)}}}{{{L(den)}}}$?"
    return dz(item("1.14", q, (text_choice(rf"$x = {b}$ only"), rf"The factor $x - {a}$ cancels, leaving $\dfrac{{x + {2 * a}}}{{x - ({b})}}$, which grows without bound only as $x \to {b}$."),
        [(text_choice(rf"$x = {a}$ and $x = {b}$"), rf"At $x = {a}$ the common factor cancels, so the graph has a hole there, not an asymptote."),
         (text_choice(rf"$x = {a}$ only"), rf"$x = {a}$ is the hole. The asymptote is where only the denominator is $0$."),
         (text_choice(rf"$x = -{2 * a}$ only"), rf"$x = -{2 * a}$ makes the numerator $0$, which gives an $x$-intercept, not an asymptote.")]), "moderate")

def t114_fact(r):
    a = r.choice([2, 3, -2]); b = r.choice([1, 4, -1]); side = r.choice(["-", "+"])
    if b == a: raise Skip("dup")
    num_ = expand(x * (x - b)); den = expand((x - b) * (x - a))
    expr = num_ / den           # = x / (x - a) after canceling x - b
    key = oo if (a > 0) == (side == "+") else -oo
    chk(expr, a, key, side)
    ans = r"\infty" if key == oo else r"-\infty"
    q = rf"What is $\displaystyle \lim_{{x \to {a}^{side}}} \frac{{{L(num_)}}}{{{L(den)}}}$?"
    sd = "positive" if side == "+" else "negative"
    return dz(item("1.14", q, (ans, rf"The expression equals $\dfrac{{x}}{{x - ({a})}}$ for $x \ne {b}$. As $x \to {a}^{side}$, the numerator approaches ${a}$ and $x - ({a})$ is {sd} and approaches $0$, so the quotient {'grows' if key == oo else 'decreases'} without bound."),
        [(r"-\infty" if key == oo else r"\infty", rf"The sign is reversed. The numerator approaches ${a}$, and $x - ({a})$ is {sd} for $x$ {'greater' if side == '+' else 'less'} than ${a}$."),
         ("1", r"$1$ is the ratio of the leading coefficients, which gives the limit as $x \to \pm\infty$, not near $x = " + str(a) + "$."),
         (num(R(b, b - a)), rf"This is the limit at $x = {b}$, where the common factor cancels. At $x = {a}$ the denominator approaches $0$ and the numerator does not.")]), "difficult")

t114_side.max = 2; t114_va.max = 1; t114_fact.max = 1

# ---------------------------------------------------------------- 1.15
def t115_same(r):
    p = r.choice([2, 3, -4, 6]); s = r.choice([5, 2, 3]); q0 = r.choice([1, -7]); rr = r.choice([4, 9]); u = r.choice([1, -2])
    if p == s or Rational(rr, u) == Rational(p, s): raise Skip("same")
    side = r.choice([r"\infty", r"-\infty"])
    e = (p * x**2 + q0 * x + rr) / (s * x**2 + u)
    chk(e, oo if side == r"\infty" else -oo, R(p, s))
    q = rf"What is $\displaystyle \lim_{{x \to {side}}} \frac{{{L(p * x**2 + q0 * x + rr)}}}{{{L(s * x**2 + u)}}}$?"
    return dz(item("1.15", q, (num(Rational(p, s)), rf"Divide numerator and denominator by $x^{{2}}$: the other terms approach $0$, leaving $\dfrac{{{p}}}{{{s}}}$."),
        [(num(Rational(rr, u)), r"This is the ratio of the constant terms, the value at $x = 0$, not the limit at infinity."),
         ("0", r"The degrees are equal, so the limit is the ratio of the leading coefficients, not $0$."),
         (num(Rational(s, p)), r"This inverts the ratio of the leading coefficients. The numerator's coefficient goes on top.")]), "easy")

def t115_lower(r):
    p = r.choice([3, 5, -2]); s = r.choice([2, 4]); q0 = r.choice([1, 6])
    chk((p * x**2 + q0) / (s * x**3 - x), oo, 0)
    q = rf"What is $\displaystyle \lim_{{x \to \infty}} \frac{{{L(p * x**2 + q0)}}}{{{L(s * x**3 - x)}}}$?"
    return dz(item("1.15", q, ("0", r"The degree of the denominator is greater, so dividing by $x^{3}$ sends every numerator term to $0$ while the denominator approaches a nonzero constant."),
        [(num(Rational(p, s)), r"The ratio of leading coefficients is the limit only when the degrees are equal."),
         (r"\infty", r"The denominator grows faster than the numerator, so the quotient shrinks toward $0$."),
         (text_choice("The limit does not exist."), r"Both the numerator and the denominator grow without bound, but the quotient still has a limit: the higher power in the denominator sends it to $0$.")]), "easy")

def t115_higher(r):
    p = r.choice([2, -3]); s = r.choice([1, 5])
    side = r.choice([r"\infty", r"-\infty"])
    sign = (1 if p * s > 0 else -1) * (1 if side == r"\infty" else -1)
    ans = r"\infty" if sign > 0 else r"-\infty"
    chk((p * x**3 + 1) / (s * x**2 + 4), oo if side == r"\infty" else -oo, oo if sign > 0 else -oo)
    q = rf"What is $\displaystyle \lim_{{x \to {side}}} \frac{{{L(p * x**3 + 1)}}}{{{L(s * x**2 + 4)}}}$?"
    return dz(item("1.15", q, (ans, rf"For large $|x|$ the quotient behaves like $\dfrac{{{p}x^{{3}}}}{{{'' if s == 1 else s}x^{{2}}}} = {L(Rational(p, s))}x$, which goes to ${ans}$ as $x \to {side}$."),
        [(r"-\infty" if ans == r"\infty" else r"\infty", rf"Check the sign of ${L(Rational(p, s))}x$ as $x \to {side}$."),
         (num(Rational(p, s)), r"The ratio of leading coefficients is the limit only when the degrees are equal."),
         ("0", r"The numerator has the higher degree, so the quotient grows without bound.")]), "moderate")

def t115_root(r):
    p = r.choice([2, 3, 5]); s = r.choice([1, 2, 3]); q0 = r.choice([1, 7]); u = r.choice([3, -1])
    side = r.choice([r"\infty", r"-\infty"])
    val = Rational(p, s) if side == r"\infty" else Rational(-p, s)
    chk(sqrt(p**2 * x**2 + q0) / (s * x + u), oo if side == r"\infty" else -oo, val)
    q = rf"What is $\displaystyle \lim_{{x \to {side}}} \frac{{\sqrt{{{p**2}x^{{2}} + {q0}}}}}{{{L(s * x + u)}}}$?"
    return dz(item("1.15", q, (num(val), rf"For large $|x|$, $\sqrt{{{p**2}x^{{2}} + {q0}}} \approx {p}|x|$, and {'$|x| = x$ for $x > 0$' if side == r'\infty' else '$|x| = -x$ for $x < 0$'}, so the quotient approaches ${L(val)}$."),
        [(num(-val), r"This uses the wrong sign for $|x|$: $\sqrt{x^{2}} = |x|$, which is $x$ for positive $x$ and $-x$ for negative $x$."),
         (num(Rational(p**2, s) if side == r"\infty" else Rational(-p**2, s)), rf"The square root of ${p**2}x^{{2}}$ is ${p}|x|$, not ${p**2}|x|$."),
         ("0", r"The numerator and denominator both grow like a multiple of $|x|$, so the limit is not $0$.")]), "moderate" if side == r"\infty" else "difficult")

def t115_exp(r):
    a = r.choice([2, 3, 6]); b = r.choice([5, -1, 4]); c = r.choice([1, 4]); d = r.choice([2, 7])
    if Rational(a, c) == Rational(b, d): raise Skip("same")
    side = r.choice([r"\infty", r"-\infty"])
    val = Rational(a, c) if side == r"\infty" else Rational(b, d)
    other = Rational(b, d) if side == r"\infty" else Rational(a, c)
    chk((a * exp(x) + b) / (c * exp(x) + d), oo if side == r"\infty" else -oo, val)
    q = rf"What is $\displaystyle \lim_{{x \to {side}}} \frac{{{L(a * exp(x) + b)}}}{{{L(c * exp(x) + d)}}}$?"
    return dz(item("1.15", q, (num(val), (rf"As $x \to \infty$, $e^{{x}}$ dominates; dividing by $e^{{x}}$ leaves $\dfrac{{{a}}}{{{c}}}$." if side == r"\infty" else rf"As $x \to -\infty$, $e^{{x}} \to 0$, leaving $\dfrac{{{b}}}{{{d}}}$.")),
        [(num(other), rf"${L(other)}$ is the limit in the other direction."),
         (num(1 / val), r"This inverts the ratio. The numerator's coefficient goes on top."),
         ("0", r"Neither the numerator nor the denominator dominates the other, so the limit is not $0$.")]), "moderate")

def t115_ha(r):
    p = r.choice([2, 3]); s = r.choice([1, 2]); u = r.choice([1, 4])
    v = Rational(p, s)
    chk(sqrt(p**2 * x**2 + 1) / (s * x + u), oo, v); chk(sqrt(p**2 * x**2 + 1) / (s * x + u), -oo, -v)
    q = rf"What are all horizontal asymptotes of the graph of $y = \dfrac{{\sqrt{{{p**2}x^{{2}} + 1}}}}{{{L(s * x + u)}}}$?"
    return dz(item("1.15", q, (text_choice(rf"$y = {L(v)}$ and $y = -{L(v)}$"), rf"As $x \to \infty$ the quotient approaches ${L(v)}$, and as $x \to -\infty$ it approaches $-{L(v)}$, because $\sqrt{{x^{{2}}}} = |x|$."),
        [(text_choice(rf"$y = {L(v)}$ only"), rf"This is only the limit as $x \to \infty$. As $x \to -\infty$, $\sqrt{{{p**2}x^{{2}}}} = -{p}x$ gives the opposite sign."),
         (text_choice(rf"$y = {L(Rational(p**2, s))}$ only"), rf"The root of ${p**2}x^{{2}}$ is ${p}|x|$, not ${p**2}x$."),
         (text_choice("There are none."), r"The numerator and denominator both grow like $|x|$, so the quotient approaches finite values.")]), "difficult")

def t115_diff(r):
    k = r.choice([4, 8, 12, 20])
    val = Rational(k, 4)
    chk(sqrt(4 * x**2 + k * x) - 2 * x, oo, val)
    q = rf"What is $\displaystyle \lim_{{x \to \infty}} \left(\sqrt{{4x^{{2}} + {k}x}} - 2x\right)$?"
    return dz(item("1.15", q, (num(val), rf"Multiply by $\dfrac{{\sqrt{{4x^{{2}} + {k}x}} + 2x}}{{\sqrt{{4x^{{2}} + {k}x}} + 2x}}$: the expression becomes $\dfrac{{{k}x}}{{\sqrt{{4x^{{2}} + {k}x}} + 2x}}$. Dividing by $x$ gives $\dfrac{{{k}}}{{\sqrt{{4 + {k}/x}} + 2}} \to \dfrac{{{k}}}{{4}} = {L(val)}$."),
        [("0", r"$\infty - \infty$ is indeterminate, not $0$."),
         (num(Rational(k, 2)), rf"This uses $2x$ for the denominator after the conjugate. It is about $2x + 2x = 4x$."),
         (r"\infty", r"The two terms grow at the same rate, and their difference approaches a finite number.")]), "difficult")

def t115_trig(r):
    n = r.choice([1, 2]); fn = r.choice(["sin", "cos"]); k = r.choice([2, 3])
    chk((sin(k * x) if fn == "sin" else cos(k * x)) / x**n, oo, 0)
    q = rf"What is $\displaystyle \lim_{{x \to \infty}} \frac{{\{fn}({k}x)}}{{x^{{{n}}}}}$?" if n > 1 else rf"What is $\displaystyle \lim_{{x \to \infty}} \frac{{\{fn}({k}x)}}{{x}}$?"
    xn = "x" if n == 1 else "x^{" + str(n) + "}"
    return dz(item("1.15", q, ("0", rf"The numerator stays between $-1$ and $1$ while the denominator grows without bound, so $-\dfrac{{1}}{{{xn}}} \le \dfrac{{\{fn}({k}x)}}{{{xn}}} \le \dfrac{{1}}{{{xn}}}$ for $x > 0$, and by the squeeze theorem the quotient approaches $0$."),
        [("1", r"$\dfrac{\sin u}{u} \to 1$ applies as $u \to 0$, not as $x \to \infty$."),
         (text_choice("The limit does not exist."), rf"The numerator oscillates, but it is bounded, and dividing by ${xn}$ squeezes the quotient to $0$."),
         (num(k), rf"${k}$ comes from treating the expression like $\dfrac{{\sin({k}x)}}{{x}}$ near $0$, which does not apply at infinity.")]), "moderate")

def t115_growth(r):
    n = r.choice([5, 10, 20]); b = r.choice([2, 3])
    expr = x**n / b**x
    chk(expr, oo, 0)
    q = rf"What is $\displaystyle \lim_{{x \to \infty}} \frac{{x^{{{n}}}}}{{{b}^{{x}}}}$?"
    return dz(item("1.15", q, ("0", rf"An exponential function with base greater than $1$ eventually grows faster than any power of $x$, so ${b}^{{x}}$ outgrows $x^{{{n}}}$ and the quotient approaches $0$."),
        [(r"\infty", rf"For moderate $x$ the power is larger, but for large enough $x$ the exponential ${b}^{{x}}$ is far larger than $x^{{{n}}}$."),
         ("1", r"Both grow without bound, but $\dfrac{\infty}{\infty}$ is indeterminate, not $1$."),
         (num(R(1, b)), rf"This treats the quotient like a ratio of leading coefficients. Growth rates decide this limit, and ${b}^{{x}}$ dominates.")]), "moderate")

t115_same.max = 4; t115_lower.max = 1; t115_higher.max = 2; t115_root.max = 4; t115_exp.max = 4; t115_ha.max = 2; t115_diff.max = 2; t115_trig.max = 1; t115_growth.max = 1

# ---------------------------------------------------------------- 1.16
def t116_value(r):
    a, b = r.choice([(2, 6), (-1, 3), (0, 5)]); fa = r.choice([-1, 3]); fb = r.choice([8, 10])
    good = r.choice([fa + 2, fb - 1])
    q = rf"The function $g$ is continuous on $[{a}, {b}]$ with $g({a}) = {fa}$ and $g({b}) = {fb}$. Which of the following must be true?"
    return dz(item("1.16", q, (text_choice(rf"$g(c) = {good}$ for at least one $c$ in $({a}, {b})$."), rf"${good}$ is between ${fa}$ and ${fb}$, and $g$ is continuous on $[{a}, {b}]$, so the Intermediate Value Theorem guarantees it."),
        [(text_choice(rf"$g(c) = {fb + 2}$ for at least one $c$ in $({a}, {b})$."), rf"${fb + 2}$ is not between ${fa}$ and ${fb}$, so the theorem says nothing about it."),
         (text_choice(rf"$g$ is increasing on all of $[{a}, {b}]$."), r"Continuity with $g(b) > g(a)$ does not mean $g$ increases everywhere. It may rise and fall."),
         (text_choice(rf"$g(c) = {fa - 2}$ for at least one $c$ in $({a}, {b})$."), rf"${fa - 2}$ is less than both ${fa}$ and ${fb}$, so the theorem does not guarantee it.")]), "easy")

def t116_open(r):
    a, b = r.choice([(0, 3), (1, 4), (-2, 2)]); p = r.choice([-4, -1, 2]); q0 = p + r.choice([5, 7])
    mid = p + 2
    q = rf"The function $h$ is continuous on $[{a}, {b}]$ with $h({a}) = {p}$ and $h({b}) = {q0}$. Which of the following values must $h(c)$ equal for at least one $c$ in the open interval $({a}, {b})$?"
    return dz(item("1.16", q, (num(mid), rf"${mid}$ is strictly between ${p}$ and ${q0}$, so by the Intermediate Value Theorem $h(c) = {mid}$ for some $c$ in $({a}, {b})$."),
        [(num(q0), rf"$h$ takes the value ${q0}$ at $x = {b}$, which is not in the open interval. The theorem guarantees only values strictly between ${p}$ and ${q0}$ inside it."),
         (num(p - 1), rf"${p - 1}$ is less than both endpoint values, so the theorem does not guarantee it."),
         (num(q0 + 1), rf"${q0 + 1}$ is greater than both endpoint values, so the theorem does not guarantee it.")]), "difficult")

def t116_which(r):
    c = r.choice([2, 3])
    q = r"For which of the following functions does the Intermediate Value Theorem guarantee a solution of $f(x) = 0$ on the interval $[0, 2]$?"
    return dz(item("1.16", q, (rf"f(x) = x^{{2}} - {c}", rf"$f$ is a polynomial, so it is continuous on $[0, 2]$, and $f(0) = -{c} < 0 < {4 - c} = f(2)$. The theorem guarantees a zero in $(0, 2)$."),
        [(r"f(x) = \frac{1}{x - 1}", r"$f(0) = -1$ and $f(2) = 1$ have opposite signs, but $f$ is not continuous at $x = 1$, so the theorem does not apply. In fact $\dfrac{1}{x - 1}$ is never $0$."),
         (rf"f(x) = x^{{2}} + {c - 1}", rf"$f$ is continuous, but $f(0) = {c - 1}$ and $f(2) = {3 + c}$ are both positive, so $0$ is not between them."),
         (r"f(x) = \frac{x - 1}{|x - 1|}", r"$f(0) = -1$ and $f(2) = 1$, but $f$ is undefined at $x = 1$ and jumps from $-1$ to $1$ there, so the theorem does not apply.")]), "difficult")

def c116(r):
    xs = [0, 1, 3, 4, 6]
    for _ in range(200):
        ys = [r.choice([-3, -2, -1, 2, 4, 5]) for _ in xs]
        ch = sum(1 for i in range(4) if ys[i] * ys[i + 1] < 0)
        N = r.choice([1, 3])
        cn = sum(1 for i in range(4) if (ys[i] - N) * (ys[i + 1] - N) < 0)
        if 2 <= ch <= 3 and 1 <= cn <= 3 and cn != ch: break
    else:
        raise Skip("table")
    sid = "c1x-t116"
    code = set_code("Values of a continuous function", "Table", r"The function $f$ is continuous on the closed interval $[0, 6]$. The table gives selected values of $f$.",
                    [("", [{"table": (["$x$"] + [f"${v}$" for v in xs], [["$f(x)$"] + [f"${w}$" for w in ys]])}])])
    sc = [f"$[{xs[i]}, {xs[i + 1]}]$" for i in range(4) if ys[i] * ys[i + 1] < 0]
    i1 = dz(item("1.16", r"What is the least number of zeros that $f$ must have on the interval $[0, 6]$?",
        (num(ch), rf"$f$ is continuous, and its values change sign on {', '.join(sc)}. By the Intermediate Value Theorem there is a zero in each of these intervals, so at least ${ch}$."),
        [(num(ch - 1), r"This misses an interval where consecutive values have opposite signs. Count sign changes in both directions."),
         (num(ch + 1), r"An interval where both values have the same sign does not guarantee a zero."),
         ("0", r"No table value is $0$, but $f$ is continuous, so each change in sign guarantees a zero between the inputs.")], set_id=sid), "moderate")
    scn = [f"$[{xs[i]}, {xs[i + 1]}]$" for i in range(4) if (ys[i] - N) * (ys[i + 1] - N) < 0]
    i2 = dz(item("1.16", rf"What is the least number of solutions that the equation $f(x) = {N}$ must have on the interval $[0, 6]$?",
        (num(cn), rf"Compare each value with ${N}$. The value ${N}$ is strictly between consecutive values of $f$ on {', '.join(scn)}, so by the Intermediate Value Theorem there is a solution in each, at least ${cn}$."),
        [(num(ch), rf"${ch}$ counts the sign changes of $f$, which locate solutions of $f(x) = 0$. The equation is $f(x) = {N}$, so compare the values with ${N}$."),
         (num(cn + 1) if cn + 1 != ch else num(cn + 2), r"This counts an interval where both values are on the same side of the target, which does not guarantee a solution."),
         (num(cn - 1) if cn - 1 not in (ch,) and cn > 0 else num(cn + 3), r"This misses an interval where the values cross the target, either rising or falling.")], set_id=sid), "moderate")
    rest = make_text(r, [(t116_value, 2), (t116_open, 1), (t116_which, 1)])
    return [i1, i2] + rest, sid, code

# ---------------------------------------------------------------- registry
TEMPLATES = {
    "1.2": [t12_onesided, t12_param, t12_trig],
    "1.6": [t16_factor, t16_root, t16_complex, t16_trig, t16_trig2, t16_abs, t16_cube, t16_hidden, t16_group],
    "1.7": [t17_direct, t17_pick, t17_assigned], "1.8": [t18_bounds, t18_osc, t18_pairs],
    "1.11": [t111_point, t111_two, t111_abs], "1.13": [t113_fill, t113_sin, t113_conj, t113_rep, t113_piece],
    "1.14": [t114_side, t114_va, t114_fact],
    "1.15": [t115_same, t115_lower, t115_higher, t115_root, t115_exp, t115_ha, t115_diff, t115_trig, t115_growth],
}
t12_onesided.max = 2; t12_param.max = 2; t12_trig.max = 1
GRAPH_TEMPLATES = {"1.1": Chunks(c11), "1.3": Chunks(c13_one, c13_two), "1.4": Chunks(c14_sin, c14_jump, c14_inf), "1.5": Chunks(c15),
                   "1.9": Chunks(c19_cont, c19_jump), "1.10": Chunks(c110), "1.12": Chunks(c112), "1.16": Chunks(c116)}

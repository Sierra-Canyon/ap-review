"""Unit 6, Integration and Accumulation of Change. Every key and wrong choice is computed.

Each template sets the item's difficulty the way Albert labels its own (one rule and one step is easy; two properties or
a table or graph that must be read first is moderate; stacked properties, an endpoint comparison, a graph of f' asked
about f, or a back-substitution is difficult). Graph and table items carry their own set (a graph() call or a table
block); those sets are kept in EXTRA_SETS and written with the deck.

core.write_deck does not write `difficulty` or sets made by ordinary templates, and core.py is shared by every unit, so
this module wraps build.py's write_deck for Unit 6 only: it adds EXTRA_SETS that the items use, then puts each item's
difficulty after its id.
"""
from core import *
import core
from sympy import atan, asin, Integral, div
import __main__

# ---------------------------------------------------------------- writing difficulty and extra sets (Unit 6 only)
EXTRA_SETS = {}
_orig_write = core.write_deck

def _write(path, header, sets, items, unit, prefix):
    if unit != 6:
        return _orig_write(path, header, sets, items, unit, prefix)
    used = {it.get("set") for it in items}
    allsets = dict(sets)
    for sid, code in EXTRA_SETS.items():
        if sid in used:
            allsets[sid] = code
    _orig_write(path, header, allsets, items, unit, prefix)
    src = open(path).read()
    for n, it in enumerate(items, 1):
        head = f'{{ id: "{prefix}-{n:03d}", type: "mcq",'
        if it.get("difficulty") and head in src:
            line_end = src.index("\n", src.index(head))
            if "difficulty:" not in src[src.index(head):line_end]:
                src = src.replace(head, head + f' difficulty: "{it["difficulty"]}",', 1)
    open(path, "w").write(src)

if hasattr(__main__, "write_deck"):
    __main__.write_deck = _write

_CYCLE = {}
def cyc(name, options, r):
    """Take the options in a shuffled cycle, so a template's items differ from each other."""
    lst = _CYCLE.setdefault(name, [])
    if not lst:
        lst.extend(options); r.shuffle(lst)
    return lst.pop()

def co(c, tail):
    """A coefficient in front of an expression: 1 is left out."""
    c = Rational(c)
    return tail if c == 1 else L(c) + tail

def mk(topic, diff, q, right, wrongs, calc=False, set_id=None):
    it = item(topic, q, right, wrongs, calc=calc, set_id=set_id)
    it["difficulty"] = diff
    return it

def distinct(*v):
    """Raise Skip unless all values differ. Strings (LaTeX already formatted) are compared as num() of the others."""
    key = lambda a: a.replace(" ", "") if isinstance(a, str) else num(simplify(sympify(a))).replace(" ", "")
    if len(set(key(a) for a in v)) < len(v):
        raise Skip("same")

def par(tex):
    return rf"\left({tex}\right)" if (" + " in tex or " - " in tex) and not tex.startswith((r"\sqrt", r"\frac")) else tex

def I(f, a, b):
    return integrate(f, (x, a, b))

# ---------------------------------------------------------------- number formats
def frac(q):
    q = Rational(q)
    return str(q.p) if q.q == 1 else rf"\frac{{{q.p}}}{{{q.q}}}"

def pi_term(b):
    b = Rational(b)
    if b == 1: return r"\pi"
    if b.q == 1: return rf"{b.p}\pi"
    return rf"\frac{{{'' if b.p == 1 else b.p}\pi}}{{{b.q}}}"

def F(v):
    """a + b*pi with rational a, b, constant first: 2 - \\pi, \\frac{9}{2} + 3\\pi, -\\pi."""
    v = sympify(v)
    a = Rational(v.subs(pi, 0)); b = Rational(simplify((v - a) / pi))
    if b == 0: return ("-" if a < 0 else "") + frac(abs(a))
    if a == 0: return ("-" if b < 0 else "") + pi_term(abs(b))
    if a < 0 < b: return pi_term(b) + " - " + frac(-a)
    return ("-" if a < 0 else "") + frac(abs(a)) + (" + " if b > 0 else " - ") + pi_term(abs(b))

def dec(v):
    """A table sum: an integer, or a decimal such as 70.5."""
    v = Rational(v)
    if v.q == 1: return str(v.p)
    s = f"{float(v):.4f}".rstrip("0")
    return s

def paren(v):
    """A value used inside a sum or product: 3, or (-2), or (pi - 4)."""
    t_ = F(v)
    return t_ if (" " not in t_ and not t_.startswith("-")) else rf"\left({t_}\right)"

def pt(a, b):
    return f"({frac(a) if a >= 0 else '-' + frac(-a)}, {frac(b) if b >= 0 else '-' + frac(-b)})"

def ivs(lst, var="x"):
    """Intervals as text: $1 < x < 4$ and $5 < x < 6$."""
    def n(v): return F(v)
    return " and ".join(rf"${n(a)} < {var} < {n(b)}$" for a, b in lst)

def xs_text(lst):
    if len(lst) == 1: return f"$x = {F(lst[0])}$ only"
    if len(lst) == 2: return f"$x = {F(lst[0])}$ and $x = {F(lst[1])}$"
    return ", ".join(f"$x = {F(v)}$" for v in lst[:-1]) + f", and $x = {F(lst[-1])}$"

# ---------------------------------------------------------------- piecewise graphs made of segments and circle arcs
class Shape:
    """pieces: ("seg", x0, y0, x1, y1) or ("arc", c, r, sgn, x0, x1), the arc being y = sgn*sqrt(r^2 - (x - c)^2)
    with its center on the x-axis. Arcs run over a quarter or half circle, so every area is exact geometry."""
    def __init__(self, key, pieces, win, step=1, note=""):
        self.key, self.pieces, self.win, self.step, self.note = key, pieces, win, step, note
        self.a = min(self.span(p)[0] for p in pieces); self.b = max(self.span(p)[1] for p in pieces)

    @staticmethod
    def span(p):
        return (p[1], p[3]) if p[0] == "seg" else (p[4], p[5])

    @staticmethod
    def expr(p):
        if p[0] == "seg":
            _, x0, y0, x1, y1 = p
            return Rational(y0) + Rational(y1 - y0, x1 - x0) * (x - x0)
        _, c, r, s, x0, x1 = p
        return s * sqrt(r**2 - (x - c)**2)

    def piece_at(self, v, side=0):
        for p in self.pieces:
            lo, hi = self.span(p)
            if (lo < v < hi) or (side >= 0 and v == lo) or (side <= 0 and v == hi):
                return p
        raise ValueError(v)

    def val(self, v):
        return simplify(self.expr(self.piece_at(v)).subs(x, v))

    def slope(self, v):
        p = self.piece_at(v)
        assert p[0] == "seg"
        return Rational(p[4] - p[2], p[3] - p[1])

    def area(self, p, lo, hi):
        if p[0] == "seg":
            return integrate(self.expr(p), (x, lo, hi))
        _, c, r, s, x0, x1 = p
        assert all(v in (c - r, c, c + r) for v in (lo, hi)), "arc cut off a quarter"
        return s * pi * r**2 / 4 * Rational(hi - lo, r)

    def I(self, a, b):
        if a > b: return -self.I(b, a)
        tot = S(0)
        for p in self.pieces:
            lo, hi = self.span(p); l, h = max(lo, a), min(hi, b)
            if l < h: tot += self.area(p, l, h)
        return nsimplify(simplify(tot), [pi])

    def absI(self, a, b):
        """Total area, every region counted positive."""
        a, b = min(a, b), max(a, b)
        pts = sorted(set([a, b] + [z for z in self.zeros() if a < z < b] + [v for p in self.pieces for v in self.span(p) if a < v < b]))
        return nsimplify(sum(abs(self.I(pts[i], pts[i + 1])) for i in range(len(pts) - 1)), [pi])

    def zeros(self):
        z = set()
        for p in self.pieces:
            if p[0] == "seg":
                _, x0, y0, x1, y1 = p
                if y0 == 0: z.add(Rational(x0))
                if y1 == 0: z.add(Rational(x1))
                if y0 * y1 < 0: z.add(Rational(x0) - Rational(y0) * Rational(x1 - x0, y1 - y0))
            else:
                _, c, r, s, x0, x1 = p
                for v in (c - r, c + r):
                    if x0 <= v <= x1: z.add(Rational(v))
        return sorted(z)

    def breaks(self):
        b = set()
        for p in self.pieces:
            b.update(Rational(v) for v in self.span(p))
            if p[0] == "arc" and p[4] < p[1] < p[5]: b.add(Rational(p[1]))
        return sorted(b | set(self.zeros()))

    def sign_ivs(self, want):
        """Maximal open intervals where f > 0 (want=1) or f < 0 (want=-1)."""
        pts = self.breaks(); out = []
        for i in range(len(pts) - 1):
            m = (pts[i] + pts[i + 1]) / 2; s = 1 if self.val(m) > 0 else -1 if self.val(m) < 0 else 0
            if s == want:
                if out and out[-1][1] == pts[i]: out[-1] = (out[-1][0], pts[i + 1])
                else: out.append((pts[i], pts[i + 1]))
        return out

    def dsign(self, m):
        p = self.piece_at(m)
        if p[0] == "seg":
            d = p[4] - p[2]; return 1 if d > 0 else -1 if d < 0 else 0
        _, c, r, s, x0, x1 = p
        return s if m < c else -s

    def mono_ivs(self, want):
        """Maximal open intervals where f is increasing (want=1) or decreasing (want=-1)."""
        pts = self.breaks(); out = []
        for i in range(len(pts) - 1):
            m = (pts[i] + pts[i + 1]) / 2
            if self.dsign(m) == want:
                if out and out[-1][1] == pts[i]: out[-1] = (out[-1][0], pts[i + 1])
                else: out.append((pts[i], pts[i + 1]))
        return out

    def changes(self, f):
        """Interior points where the sign given by f(midpoint) changes: (point, before, after)."""
        pts = self.breaks(); out = []
        mids = [(pts[i] + pts[i + 1]) / 2 for i in range(len(pts) - 1)]
        for i in range(1, len(pts) - 1):
            s0, s1 = f(mids[i - 1]), f(mids[i])
            if s0 and s1 and s0 != s1: out.append((pts[i], s0, s1))
        return out

    def g_rel(self):
        sg = lambda m: 1 if self.val(m) > 0 else -1 if self.val(m) < 0 else 0
        ch = self.changes(sg)
        return [p for p, s0, s1 in ch if s0 > 0], [p for p, s0, s1 in ch if s0 < 0]  # rel max, rel min of g

    def g_infl(self):
        return [p for p, s0, s1 in self.changes(self.dsign)]

    def f_extreme_x(self, want):
        """x where f itself has a relative max (want=1) or min (want=-1): f' changes sign."""
        return [p for p, s0, s1 in self.changes(self.dsign) if (s0 > 0) == (want > 0)]

    def describe(self, fname="f"):
        parts = []
        for p in self.pieces:
            if p[0] == "seg":
                _, x0, y0, x1, y1 = p
                parts.append(f"a line segment from ({x0}, {y0}) to ({x1}, {y1})")
            else:
                _, c, r, s, x0, x1 = p
                ya, yb = self.val(x0), self.val(x1)
                kind = "half" if x1 - x0 == 2 * r else "quarter"
                parts.append(f"the {'upper' if s > 0 else 'lower'} {kind} of the circle of radius {r} centered at ({c}, 0), from ({x0}, {ya}) to ({x1}, {yb})")
        return f"Graph of {fname} for x from {self.a} to {self.b}, made of " + "; then ".join(parts) + "."

    def js(self, fname="f", xname="x", yname="y"):
        segs = [[p[1], p[2], p[3], p[4]] for p in self.pieces if p[0] == "seg"]
        fns = [f"{{ f: (x) => {p[3]} * Math.sqrt(Math.max(0, {p[2] ** 2} - (x - ({p[1]})) ** 2)), from: {p[4]}, to: {p[5]} }}" for p in self.pieces if p[0] == "arc"]
        a, b = self.a, self.b
        dots = [[a, self.val(a)], [b, self.val(b)]]
        st = self.step if isinstance(self.step, int) else f"{{ x: {self.step[0]}, y: {self.step[1]} }}"
        alt = self.describe(fname)
        return (f"graph({{ x: [{self.win[0]}, {self.win[1]}], y: [{self.win[2]}, {self.win[3]}], step: {st}, xname: {json.dumps(xname)}, yname: {json.dumps(yname)}, "
                + (f"fns: [{', '.join(fns)}], " if fns else "")
                + f"segments: {json.dumps(segs)}, dots: [{', '.join(f'[{u}, {float(v):g}, {chr(34)}closed{chr(34)}]' for u, v in dots)}], alt: {json.dumps(alt)} }})")

    def kinds(self):
        k = {"seg": 0, "arc": 0}
        for p in self.pieces: k[p[0]] += 1
        segs = "line segments" if k["seg"] > 1 else "a line segment"
        if not k["arc"]: return f"It consists of {k['seg']} line segments." if k["seg"] > 1 else "It is a line segment."
        arc = [p for p in self.pieces if p[0] == "arc"][0]
        kind = "half" if arc[5] - arc[4] == 2 * arc[2] else "quarter"
        return f"It consists of {segs} and a {'semicircle' if kind == 'half' else 'quarter circle'}."

def graph_set(sid, sh, intro, fname="f", xname="x", yname="y", name=None):
    code = (f"{{ name: {json.dumps(name or 'The graph of ' + fname)}, label: \"Graph\", intro: {js_string(intro)}, "
            f"sources: [{{ title: \"\", blocks: [{{ svg: {sh.js(fname, xname, yname)} }}] }}] }}")
    EXTRA_SETS[sid] = code
    return sid

def table_set(sid, name, intro, head, rows):
    h = ", ".join(js_string(c) for c in head)
    r = ", ".join("[" + ", ".join(js_string(c) for c in row) + "]" for row in rows)
    EXTRA_SETS[sid] = (f"{{ name: {json.dumps(name)}, label: \"Table\", intro: {js_string(intro)}, "
                       f"sources: [{{ title: \"\", blocks: [{{ table: {{ head: [{h}], rows: [{r}] }} }}] }}] }}")
    return sid

# The graphs of f used by 6.4, 6.5 and 6.6. None is one of the graphs the Albert notes list, the quiz and test graphs,
# or the graphs in decks/calc/u6.js.
GS = {
    # down through the axis to a corner at (3, -4), then up with a bend at (5, 0)
    "v": Shape("v", [("seg", 0, 2, 3, -4), ("seg", 3, -4, 5, 0), ("seg", 5, 0, 8, 3)], (0, 8, -5, 4)),
    # a rising segment, a quarter circle coming down to the axis, then a V below the axis
    "arc": Shape("arc", [("seg", 0, -2, 2, 2), ("arc", 2, 2, 1, 2, 4), ("seg", 4, 0, 6, -2), ("seg", 6, -2, 8, 0)], (0, 9, -3, 3)),
    # a shallow V whose vertex is just below the axis, then a peak that falls back to the axis
    "w": Shape("w", [("seg", 0, 2, 3, -1), ("seg", 3, -1, 6, 2), ("seg", 6, 2, 8, 0)], (0, 9, -2, 3)),
    # an odd function: up through the axis, a long fall through the origin, then up again
    "n": Shape("n", [("seg", -4, -2, -2, 2), ("seg", -2, 2, 2, -2), ("seg", 2, -2, 4, 2)], (-4, 4, -3, 3)),
}
LOWER = {"v": [0, 1, 3], "arc": [0, 2, 4], "w": [0, 2, 4], "n": [-4, 0, 2]}

def gs_pick(r, keys=None, name=None):
    """A shape for a graph item. With a name, shapes come in a shuffled cycle so items in a topic use different graphs."""
    k = cyc(name + "".join(keys or []), keys or list(GS), r) if name else r.choice(keys or list(GS))
    return k, GS[k]

def g_intro(sh, c):
    return (rf"The graph of the continuous function $f$ on the interval ${sh.a} \le x \le {sh.b}$ is shown below. {sh.kinds()} "
            rf"Let $g$ be the function defined by $g(x) = \displaystyle\int_{{{c}}}^{{x}} f(t)\,dt$.")

def g_set(sh, c):
    return graph_set(f"c6x-g-{sh.key}-{'m' + str(-c) if c < 0 else c}", sh, g_intro(sh, c))

def f_intro(sh):
    return rf"The graph of the continuous function $f$ on the interval ${sh.a} \le x \le {sh.b}$ is shown below. {sh.kinds()}"

def f_set(sh):
    return graph_set(f"c6x-f-{sh.key}", sh, f_intro(sh))

# ---------------------------------------------------------------- 6.1 accumulation
UNITS = [("Snow falls on a field at a rate of $s(t)$ centimeters per hour, where $t$ is measured in hours.", "s", 8, "centimeters", "centimeters per hour", "hours"),
         ("A bakery sells bread at a rate of $B(t)$ loaves per day, where $t$ is measured in days.", "B", 7, "loaves", "loaves per day", "days"),
         ("Air is pumped into a balloon at a rate of $V(t)$ cubic centimeters per second, where $t$ is measured in seconds.", "V", 10, "cubic centimeters", "cubic centimeters per second", "seconds")]

def t61_units(r):
    ctx, fn, b, amt, rate, tu = r.choice(UNITS)
    q = ctx + rf" What are the units of $\displaystyle\int_{{0}}^{{{b}}} {fn}(t)\,dt$?"
    per = rate.replace(" per ", " per ") + " per " + tu[:-1]
    return mk("6.1", "easy", q, (text_choice(amt.capitalize()), rf"The integral adds up (rate)(time): ({rate})({tu}) gives {amt}, the amount that accumulates."),
        [(text_choice(rate.capitalize()), rf"Those are the units of ${fn}(t)$ itself. Integrating multiplies by the units of $t$."),
         (text_choice(per.capitalize()), r"That divides by time again, the units of a derivative of the rate. Integrating multiplies by time."),
         (text_choice(f"{tu.capitalize()} per {amt[:-1] if amt.endswith('s') else amt}"), rf"This turns the rate's units upside down. The integral multiplies {rate} by {tu}, which gives {amt}.")])
t61_units.max = 1

def t61_rate_graph(r):
    sh = Shape("rg", [("seg", 0, 1, 2, 5), ("seg", 2, 5, 4, 5), ("seg", 4, 5, 8, 1)], (0, 8, 0, 6))
    sid = graph_set("c6x-rate", sh, r"Concrete is poured into a form at a rate of $c(t)$ cubic meters per hour, where $t$ is measured in hours. The graph of $c$ for $0 \le t \le 8$ is shown below. It consists of three line segments.",
                    fname="c", xname="t", yname="c(t)", name="Rate of pouring concrete")
    tot = sh.I(0, 8)
    q = r"How many cubic meters of concrete are poured into the form from $t = 0$ to $t = 8$ hours?"
    wr = [(num(5 * 8), r"This multiplies the greatest rate, $5$, by $8$ hours. The rate is less than $5$ for most of the time."),
          (num(sh.I(0, 4) + 5 * 4), r"This treats the region from $t = 4$ to $t = 8$ as a rectangle of height $5$. The rate falls to $1$, so that region is a trapezoid with area $\dfrac{(5 + 1)(4)}{2} = 12$."),
          (num(sh.I(0, 4)), r"This stops at $t = 4$ and leaves out the concrete poured from $t = 4$ to $t = 8$.")]
    distinct(tot, *[w[0] for w in wr])
    return mk("6.1", "moderate", q, (num(tot), rf"The amount is the area under the rate graph: a trapezoid $\dfrac{{(1 + 5)(2)}}{{2}} = 6$, a rectangle $5(2) = 10$, and a trapezoid $\dfrac{{(5 + 1)(4)}}{{2}} = 12$, for $6 + 10 + 12 = {tot}$ cubic meters."), wr, set_id=sid)
t61_rate_graph.max = 1

def t61_dist_graph(r):
    sh = Shape("vg", [("seg", 0, 0, 1, 4), ("seg", 1, 4, 3, -4), ("seg", 3, -4, 6, 2)], (0, 6, -5, 5))
    sid = graph_set("c6x-velocity", sh, r"A particle moves along a line. Its velocity $v(t)$, in feet per second, for $0 \le t \le 6$ seconds is shown in the graph below. The graph consists of three line segments.",
                    fname="v", xname="t", yname="v(t)", name="A velocity graph")
    up = sh.I(0, 2); dn = -sh.I(2, 5); last = sh.I(5, 6)
    dist = sh.absI(0, 6); disp = sh.I(0, 6)
    q = r"What is the total distance, in feet, that the particle travels from $t = 0$ to $t = 6$ seconds?"
    wr = [(num(disp), rf"This is the displacement, the signed area: ${up} - {dn} + {last} = {disp}$. Distance counts the motion to the left as well."),
          (num(up + last), r"This counts only the area above the $t$-axis and leaves out the time the particle moves to the left."),
          (num(4 * 6), r"This multiplies the greatest speed, $4$ feet per second, by $6$ seconds. The speed changes, so the distance is the area between the graph and the axis.")]
    distinct(dist, *[w[0] for w in wr])
    return mk("6.1", "moderate", q, (num(dist), rf"Total distance is the area between the graph and the $t$-axis, all counted as positive: ${up}$ above the axis on $[0, 2]$, ${dn}$ below it on $[2, 5]$, and ${last}$ above it on $[5, 6]$, for ${dist}$ feet."), wr, set_id=sid)
t61_dist_graph.max = 1

# ---------------------------------------------------------------- 6.2 Riemann sums
CTX62 = [("Oil is pumped into a tanker at a rate of $P(t)$ barrels per hour, where $P$ is continuous and $t$ is measured in hours. Selected values of $P(t)$ are shown in the table below.", "P", "t", "hours", "barrels per hour"),
         ("A building uses electricity at a rate of $E(t)$ kilowatts, where $E$ is continuous and $t$ is measured in hours. Selected values of $E(t)$ are shown in the table below.", "E", "t", "hours", "kilowatts"),
         ("Sand is delivered to a construction site at a rate of $S(t)$ tons per hour, where $S$ is continuous and $t$ is measured in hours. Selected values of $S(t)$ are shown in the table below.", "S", "t", "hours", "tons per hour"),
         ("The function $f$ is continuous. Selected values of $f(x)$ are shown in the table below.", "f", "x", "", "")]

def tab62(r, xs, ys, tag):
    ctx, fn, var, xu, yu = r.choice(CTX62)
    head = [f"${var}$" + (f" ({xu})" if xu else "")] + [f"${v}$" for v in xs]
    row = [f"${fn}({var})$" + (f" ({yu})" if yu else "")] + [f"${v}$" for v in ys]
    sid = table_set(f"c6x-t{tag}-{fn}-{'-'.join(map(str, ys))}", "Table of values", ctx, head, [row])
    return sid, fn, var

def t62_tab_sum(r):
    while True:
        xs = [0] + sorted(r.sample(range(1, 12), 3)) + [12]
        ws = [xs[i + 1] - xs[i] for i in range(4)]
        if len(set(ws)) >= 3: break
    ys = [r.choice(range(2, 30)) for _ in xs]
    kind = r.choice(["left", "right"])
    sid, fn, var = tab62(r, xs, ys, "s")
    hs = ys[:4] if kind == "left" else ys[1:]
    val = sum(w * h for w, h in zip(ws, hs))
    oth = sum(w * h for w, h in zip(ws, ys[1:] if kind == "left" else ys[:4]))
    eqw = 3 * sum(hs)
    q = rf"Using a {kind} Riemann sum with the four subintervals indicated by the table, what is the approximation of $\displaystyle\int_{{0}}^{{12}} {fn}({var})\,d{var}$?"
    wr = [(num(oth), f"This is the {'right' if kind == 'left' else 'left'} Riemann sum, which uses the {'right' if kind == 'left' else 'left'} endpoint of each subinterval."),
          (num(eqw), r"This treats the four subintervals as if each had width $3$. The table values are not equally spaced, so each height is multiplied by its own width."),
          (num(sum(hs)), r"This adds the heights without multiplying each by the width of its subinterval.")]
    distinct(val, *[w[0] for w in wr])
    return mk("6.2", "moderate", q, (num(val), rf"The widths are ${', '.join(map(str, ws))}$. The {kind} sum is $" + " + ".join(f"{w}({h})" for w, h in zip(ws, hs)) + f" = {val}$."), wr, set_id=sid)
t62_tab_sum.max = 3

def t62_tab_trap(r):
    while True:
        xs = [0] + sorted(r.sample(range(1, 10), 3)) + [10]
        ws = [xs[i + 1] - xs[i] for i in range(4)]
        if len(set(ws)) >= 3: break
    ys = [r.choice(range(1, 20)) for _ in xs]
    sid, fn, var = tab62(r, xs, ys, "t")
    T_ = sum(Rational(ws[i] * (ys[i] + ys[i + 1]), 2) for i in range(4))
    L_ = sum(ws[i] * ys[i] for i in range(4)); R_ = sum(ws[i] * ys[i + 1] for i in range(4))
    eq = Rational(10, 8) * (ys[0] + 2 * sum(ys[1:4]) + ys[4])
    q = rf"Using a trapezoidal sum with the four subintervals indicated by the table, what is the approximation of $\displaystyle\int_{{0}}^{{10}} {fn}({var})\,d{var}$?"
    wr = [(dec(L_), r"This is the left Riemann sum. A trapezoidal sum averages the two endpoint values on each subinterval."),
          (dec(R_), r"This is the right Riemann sum. A trapezoidal sum averages the two endpoint values on each subinterval."),
          (dec(eq), r"This uses the equal-width trapezoidal rule with width $2.5$. The subintervals in the table have different widths.")]
    distinct(T_, L_, R_, eq)
    return mk("6.2", "moderate", q, (dec(T_), r"Each trapezoid has area $\dfrac{\text{width}}{2}(\text{left value} + \text{right value})$: $" + " + ".join(rf"\dfrac{{{ws[i]}({ys[i]} + {ys[i + 1]})}}{{2}}" for i in range(4)) + f" = {dec(T_)}$."), wr, set_id=sid)
t62_tab_trap.max = 2

def t62_tab_equal(r):
    xs = [0, 2, 4, 6, 8]; ys = [r.choice(range(1, 15)) for _ in xs]
    kind = r.choice(["left", "right"])
    sid, fn, var = tab62(r, xs, ys, "e")
    hs = ys[:4] if kind == "left" else ys[1:]
    val = 2 * sum(hs); oth = 2 * sum(ys[1:] if kind == "left" else ys[:4])
    q = rf"Using a {kind} Riemann sum with the four subintervals of equal length indicated by the table, what is the approximation of $\displaystyle\int_{{0}}^{{8}} {fn}({var})\,d{var}$?"
    wr = [(num(oth), f"This is the {'right' if kind == 'left' else 'left'} Riemann sum."),
          (num(sum(hs)), r"This adds the four heights but leaves out the width $2$ of each subinterval."),
          (num(2 * sum(ys)), r"This uses all five table values. Four subintervals use only four heights.")]
    distinct(val, *[w[0] for w in wr])
    return mk("6.2", "easy", q, (num(val), rf"Each subinterval has width $2$, so the {kind} sum is $2({' + '.join(map(str, hs))}) = {val}$."), wr, set_id=sid)
t62_tab_equal.max = 1

def t62_tab_mid(r):
    xs = [0, 1, 2, 3, 4, 5, 6, 7, 8]; ys = [r.choice(range(1, 12)) for _ in xs]
    ctx = "The function $h$ is continuous. Selected values of $h(x)$ are shown in the table below."
    sid = table_set(f"c6x-tm-{'-'.join(map(str, ys))}", "Values of h", ctx, ["$x$"] + [f"${v}$" for v in xs], [["$h(x)$"] + [f"${v}$" for v in ys]])
    M = 2 * (ys[1] + ys[3] + ys[5] + ys[7]); L_ = 2 * (ys[0] + ys[2] + ys[4] + ys[6]); L8 = sum(ys[:8])
    q = r"Using a midpoint Riemann sum with four subintervals of equal length, what is the approximation of $\displaystyle\int_{0}^{8} h(x)\,dx$?"
    wr = [(num(L_), r"This uses the left endpoints $0$, $2$, $4$, and $6$ of the four subintervals instead of their midpoints."),
          (num(L8), r"This is a left Riemann sum with eight subintervals of width $1$, which uses every table value but the last. The question asks for four subintervals and their midpoints."),
          (num(M // 2), r"This adds $h(1) + h(3) + h(5) + h(7)$ without multiplying by the width $2$.")]
    distinct(M, *[w[0] for w in wr])
    return mk("6.2", "difficult", q, (num(M), rf"The subintervals are $[0, 2]$, $[2, 4]$, $[4, 6]$, and $[6, 8]$, with midpoints $1$, $3$, $5$, and $7$. The sum is $2\left(h(1) + h(3) + h(5) + h(7)\right) = 2({ys[1]} + {ys[3]} + {ys[5]} + {ys[7]}) = {M}$."), wr, set_id=sid)
t62_tab_mid.max = 1

def t62_graph_sum(r):
    sh = None
    sid = "c6x-sqrt"
    EXTRA_SETS[sid] = ("{ name: \"The graph of f\", label: \"Graph\", intro: " + js_string(r"The graph of $f(x) = 2\sqrt{x}$ for $0 \le x \le 9$ is shown below. The points on the graph at $x = 1$, $x = 4$, and $x = 9$ are marked.")
                       + ", sources: [{ title: \"\", blocks: [{ svg: graph({ x: [0, 9], y: [0, 7], xname: \"x\", yname: \"y\", fns: [{ f: (x) => 2 * Math.sqrt(x), from: 0, to: 9 }], "
                       + "dots: [[0, 0, \"closed\"], [1, 2, \"closed\"], [4, 4, \"closed\"], [9, 6, \"closed\"]], alt: \"Graph of f(x) = 2 times the square root of x for 0 to 9, rising and concave down, through the marked points (0, 0), (1, 2), (4, 4), and (9, 6).\" }) }] }] }")
    kind = r.choice(["right", "left"])
    xs, ys = [0, 1, 4, 9], [0, 2, 4, 6]; ws = [1, 3, 5]
    R_ = sum(w * h for w, h in zip(ws, ys[1:])); L_ = sum(w * h for w, h in zip(ws, ys[:3]))
    val, oth = (R_, L_) if kind == "right" else (L_, R_)
    hs = ys[1:] if kind == "right" else ys[:3]
    q = rf"Using a {kind} Riemann sum with the three subintervals $[0, 1]$, $[1, 4]$, and $[4, 9]$, what is the approximation of $\displaystyle\int_{{0}}^{{9}} f(x)\,dx$?"
    wr = [(num(oth), f"This is the {'left' if kind == 'right' else 'right'} Riemann sum."),
          (num(3 * sum(hs)), r"This gives each subinterval width $3$. The widths are $1$, $3$, and $5$."),
          (num(I(2 * sqrt(x), 0, 9)), r"This is the exact value of the integral, $\dfrac{4}{3}x^{3/2}$ evaluated from $0$ to $9$, not the Riemann sum.")]
    distinct(val, *[w[0] for w in wr])
    return mk("6.2", "easy", q, (num(val), rf"The widths are $1$, $3$, and $5$, and the {kind} endpoints give heights " + ", ".join(f"${h}$" for h in hs) + ". The sum is $" + " + ".join(f"{w}({h})" for w, h in zip(ws, hs)) + f" = {val}$."), wr, set_id=sid)
t62_graph_sum.max = 1

ORDERS = [("decreasing", "concave up", "R < I < T < L"), ("increasing", "concave up", "L < I < T < R"), ("decreasing", "concave down", "R < T < I < L")]

def t62_order(r):
    mono, conc, right = r.choice(ORDERS)
    q = (rf"The function $f$ is {mono} and its graph is {conc} on $[a, b]$. Let $I = \displaystyle\int_{{a}}^{{b}} f(x)\,dx$, and let $L$, $R$, and $T$ be the left Riemann sum, "
         r"the right Riemann sum, and the trapezoidal sum with the same subintervals. Which of the following is true?")
    swap_lr = right.replace("L", "#").replace("R", "L").replace("#", "R")
    t_other = right.replace("I < T", "T < I") if "I < T" in right else right.replace("T < I", "I < T")
    both = swap_lr.replace("I < T", "T < I") if "I < T" in swap_lr else swap_lr.replace("T < I", "I < T")
    m = lambda s: "$" + s + "$"
    over = "over" if conc == "concave up" else "under"
    return mk("6.2", "difficult", q, (m(right), rf"Since $f$ is {mono}, the {'left' if mono == 'decreasing' else 'right'} sum is an overestimate and the other is an underestimate. Since the graph is {conc}, each trapezoid's top lies {'above' if conc == 'concave up' else 'below'} the curve, so $T$ is an {over}estimate. Together: ${right}$."),
        [(m(swap_lr), rf"This swaps $L$ and $R$, as if $f$ were {'increasing' if mono == 'decreasing' else 'decreasing'}. For a {mono} function the {'left' if mono == 'decreasing' else 'right'} endpoint gives the greatest height on each subinterval."),
         (m(t_other), rf"The order of $L$ and $R$ is right, but it puts $T$ on the wrong side of $I$. On a graph that is {conc}, the trapezoids' tops lie {'above' if conc == 'concave up' else 'below'} the curve."),
         (m(both), r"This has both comparisons backward: the order of the endpoint sums and the side of $I$ on which $T$ lies.")])
t62_order.max = 1

# ---------------------------------------------------------------- 6.3 summation notation
def t63_limit(r):
    a = r.choice([0, 1, 3]); w = r.choice([2, 3, 5]); p = r.choice([4, 5])
    if a and w <= a: raise Skip("order")
    inp = rf"\frac{{{w}k}}{{n}}" if a == 0 else rf"{a} + \frac{{{w}k}}{{n}}"
    q = rf"Which of the following is equal to $\displaystyle\lim_{{n \to \infty}} \sum_{{k=1}}^{{n}} \frac{{{w}}}{{n}}\left({inp}\right)^{{{p}}}$?"
    I_ = lambda lo, hi, c="": rf"$\displaystyle\int_{{{lo}}}^{{{hi}}} {c}x^{{{p}}}\,dx$"
    if a == 0:
        wr = [(text_choice(I_(0, 1)), rf"This takes the interval from the $\dfrac{{1}}{{n}}$ alone. The width of each subinterval is $\dfrac{{{w}}}{{n}}$, so the interval has length ${w}$."),
              (text_choice(I_(0, w, w)), rf"The factor $\dfrac{{{w}}}{{n}}$ is $\Delta x$, which becomes $dx$. It is not also a coefficient of the integrand."),
              (text_choice(I_(w, 2 * w)), rf"The sample points $\dfrac{{{w}k}}{{n}}$ run from near $0$ to ${w}$, so the interval is $[0, {w}]$.")]
        return mk("6.3", "easy", q, (text_choice(I_(0, w)), rf"Here $\Delta x = \dfrac{{{w}}}{{n}}$ and $x_k = \dfrac{{{w}k}}{{n}}$, which runs from $0$ to ${w}$, so the limit is the integral of $x^{{{p}}}$ on $[0, {w}]$."), wr)
    wr = [(text_choice(I_(0, w)), rf"This drops the starting value ${a}$. The sample points $x_k = {a} + \dfrac{{{w}k}}{{n}}$ run from ${a}$ to ${a + w}$."),
          (text_choice(I_(a, w)), rf"The upper limit is the left end plus the length: ${a} + {w} = {a + w}$."),
          (text_choice(I_(a, a + w, w)), rf"The factor $\dfrac{{{w}}}{{n}}$ is $\Delta x$, which becomes $dx$. It is not also a coefficient of the integrand.")]
    if a == w: raise Skip("same")
    return mk("6.3", "moderate", q, (text_choice(I_(a, a + w)), rf"Here $\Delta x = \dfrac{{{w}}}{{n}}$ and $x_k = {a} + \dfrac{{{w}k}}{{n}}$, which runs from ${a}$ to ${a + w}$, so the limit is the integral of $x^{{{p}}}$ on $[{a}, {a + w}]$."), wr)
t63_limit.max = 2

def t63_func(r):
    fn, tex = r.choice([(sqrt(x), r"\sqrt{x}"), (sin(x), r"\sin x"), (exp(x), "e^{x}")])
    a, b = r.choice([(1, 4), (1, 3), (2, 7)])
    if tex == "e^{x}" and (a, b) == (1, 3): raise Skip("test item")
    w = b - a
    term = lambda inp: (tex.replace("x", inp) if tex != "e^{x}" else "e^{" + inp + "}") if "sqrt" not in tex else rf"\sqrt{{{inp}}}"
    q = rf"Which of the following limits is equal to $\displaystyle\int_{{{a}}}^{{{b}}} {tex}\,dx$?"
    lim = r"\displaystyle\lim_{n \to \infty} \sum_{k=1}^{n} "
    pr = lambda s: s if "sqrt" in tex or "e^" in tex else rf"\left({s}\right)"
    return mk("6.3", "moderate", q, (text_choice(f"${lim}\\frac{{{w}}}{{n}}{term(pr(rf'{a} + \frac{{{w}k}}{{n}}'))}$"), rf"Here $\Delta x = \dfrac{{{b} - {a}}}{{n}} = \dfrac{{{w}}}{{n}}$ and the right endpoints are $x_k = {a} + \dfrac{{{w}k}}{{n}}$. The integral is the limit of $\sum f(x_k)\,\Delta x$."),
        [(text_choice(f"${lim}\\frac{{1}}{{n}}{term(pr(rf'{a} + \frac{{k}}{{n}}'))}$"), rf"This uses $\Delta x = \dfrac{{1}}{{n}}$, which fits an interval of length $1$. The interval $[{a}, {b}]$ has length ${w}$."),
         (text_choice(f"${lim}\\frac{{{w}}}{{n}}{term(pr(rf'\frac{{{w}k}}{{n}}'))}$"), rf"These sample points start at $0$, not ${a}$, so this is the integral on $[0, {w}]$."),
         (text_choice(f"${lim}\\frac{{{b}}}{{n}}{term(pr(rf'{a} + \frac{{{b}k}}{{n}}'))}$"), rf"This uses the upper limit ${b}$ as the length of the interval. The length is ${b} - {a} = {w}$.")])
t63_func.max = 1

def t63_table_sum(r):
    xs = [1, 3, 5, 7, 9]; ys = [r.choice(range(-3, 10)) for _ in xs]
    sid = table_set(f"c6x-sum-{'-'.join(map(str, ys))}".replace("--", "-m"), "Values of f", "The function $f$ is continuous. Selected values of $f(x)$ are shown in the table below.",
                    ["$x$"] + [f"${v}$" for v in xs], [["$f(x)$"] + [f"${v}$" for v in ys]])
    val = 2 * sum(ys[1:]); left = 2 * sum(ys[:4]); nowidth = sum(ys[1:]); allf = 2 * sum(ys)
    q = r"What is the value of $\displaystyle\sum_{k=1}^{4} f(1 + 2k) \cdot 2$, and which integral does it approximate?"
    I19 = r"$\displaystyle\int_{1}^{9} f(x)\,dx$"
    wr = [(text_choice(f"${left}$, a left sum for {I19}"), r"This uses $k = 0$ to $3$, the points $1$, $3$, $5$, $7$. With $k = 1$ to $4$, the inputs $1 + 2k$ are $3$, $5$, $7$, $9$, the right endpoints."),
          (text_choice(f"${nowidth}$, a right sum for {I19}"), r"This adds $f(3) + f(5) + f(7) + f(9)$ and leaves out the factor $2$, the width of each subinterval."),
          (text_choice(f"${val}$, a right sum for " + r"$\displaystyle\int_{3}^{9} f(x)\,dx$"), r"The value is right, but four subintervals of width $2$ ending at $9$ start at $1$, not $3$.")]
    distinct(val, left, nowidth)
    return mk("6.3", "moderate", q, (text_choice(f"${val}$, a right sum for {I19}"), rf"For $k = 1$ to $4$ the inputs are $3$, $5$, $7$, $9$, the right endpoints of $[1, 3]$, $[3, 5]$, $[5, 7]$, $[7, 9]$, each of width $2$. The sum is $2({ys[1]} + {ys[2]} + {ys[3]} + {ys[4]}) = {val}$."), wr, set_id=sid)
t63_table_sum.max = 1

def t63_value(r):
    a, w, p = cyc("value63", [(1, 3, 2), (1, 2, 4), (3, 3, 2), (2, 2, 4)], r)
    val = I(x**p, a, a + w)
    w1 = I(x**p, 0, w); w2 = I((a + x)**p, a, a + w); w3 = w * val
    distinct(val, w1, w2, w3)
    q = rf"What is the value of $\displaystyle\lim_{{n \to \infty}} \sum_{{k=1}}^{{n}} \frac{{{w}}}{{n}}\left({a} + \frac{{{w}k}}{{n}}\right)^{{{p}}}$?"
    return mk("6.3", "difficult", q, (num(val), rf"With $\Delta x = \dfrac{{{w}}}{{n}}$ and $x_k = {a} + \dfrac{{{w}k}}{{n}}$, the limit is $\displaystyle\int_{{{a}}}^{{{a + w}}} x^{{{p}}}\,dx = \left[\dfrac{{x^{{{p + 1}}}}}{{{p + 1}}}\right]_{{{a}}}^{{{a + w}}} = {L(val)}$."),
        [(num(w1), rf"This is $\displaystyle\int_{{0}}^{{{w}}} x^{{{p}}}\,dx$. It drops the starting value ${a}$ from the sample points."),
         (num(w2), rf"This is $\displaystyle\int_{{{a}}}^{{{a + w}}} ({a} + x)^{{{p}}}\,dx$. It uses the starting value ${a}$ twice, once in the limits and again in the integrand."),
         (num(w3), rf"This keeps the ${w}$ from $\dfrac{{{w}}}{{n}}$ as an extra factor. All of $\dfrac{{{w}}}{{n}}$ is $\Delta x$, which becomes $dx$.")])
t63_value.max = 2

# ---------------------------------------------------------------- 6.4 FTC, accumulation functions
INTEG = [(sqrt(1 + t**3), r"\sqrt{1 + t^{3}}"), (cos(t**2), r"\cos\left(t^{2}\right)"), (exp(-t**2), r"e^{-t^{2}}"), (1 / (1 + t**4), r"\frac{1}{1 + t^{4}}")]

def t64_deriv_x(r):
    fn, tex, a, Ft = r.choice([(sqrt(t), r"\sqrt{t}", 4, Rational(2, 3) * t**Rational(3, 2)), (exp(2 * t), "e^{2t}", 0, exp(2 * t) / 2), (cos(3 * t), r"\cos(3t)", 0, sin(3 * t) / 3)])
    q = rf"If $F(x) = \displaystyle\int_{{{a}}}^{{x}} {tex}\,dt$, then $F'(x) =$"
    fx = fn.subs(t, x)
    Fx = L(Ft.subs(t, x)) + (" - " + L(Ft.subs(t, a)) if Ft.subs(t, a) != 0 else "")
    Fx = Fx.replace("- - ", "+ ").replace(r"- \frac{1}{2}", r"- \frac{1}{2}")
    return mk("6.4", "easy", q, (L(fx).replace(r"\cos{\left(3 x \right)}", r"\cos(3x)"), r"By the Fundamental Theorem of Calculus, the derivative of $\displaystyle\int_{a}^{x} f(t)\,dt$ is the integrand evaluated at $x$."),
        [(L(fx) + " - " + par(L(fn.subs(t, a))), rf"This subtracts the integrand's value at the lower limit ${a}$, as if the integrand were an antiderivative. The constant lower limit adds nothing to $F'(x)$."),
         (L(diff(fn, t).subs(t, x)), r"This differentiates the integrand. $F'(x)$ is the integrand itself, evaluated at $x$."),
         (Fx, r"This is $F(x)$ itself: it finds an antiderivative and evaluates it from " + f"${a}$" + r" to $x$, but does not then take the derivative.")])
t64_deriv_x.max = 1

def t64_deriv_chain(r):
    fn, tex = r.choice(INTEG); a = r.choice([0, 1])
    inner = r.choice([x**2, x**3, 2 * x])
    d = diff(inner, x); fu = fn.subs(t, inner)
    q = rf"If $F(x) = \displaystyle\int_{{{a}}}^{{{L(inner)}}} {tex}\,dt$, then $F'(x) =$"
    w3 = (L(d * fu) + " - " + par(L(fn.subs(t, a))), rf"This also subtracts the integrand's value at the lower limit, $f({a}) = {L(fn.subs(t, a))}$. The constant lower limit contributes nothing to $F'(x)$.") if fn.subs(t, a) != 0 else (L(d * fn.subs(t, x)), r"The chain factor is right, but the integrand must be evaluated at the upper limit, not at $x$.")
    return mk("6.4", "moderate", q, (L(d * fu), rf"By the Fundamental Theorem of Calculus and the chain rule, $F'(x) = f\left({L(inner)}\right) \cdot \dfrac{{d}}{{dx}}\left({L(inner)}\right)$ with $f(t) = {tex}$."),
        [(L(fu), rf"This evaluates the integrand at ${L(inner)}$ but leaves out the chain rule factor ${L(d)}$."),
         (L(simplify(diff(fn, t).subs(t, inner) * d)), r"This differentiates the integrand. By the Fundamental Theorem, the integrand is evaluated at the upper limit, not differentiated."),
         w3])
t64_deriv_chain.max = 1

def t64_lower(r):
    fn, tex = r.choice(INTEG[:3]); b = r.choice([3, 5])
    q = rf"If $H(x) = \displaystyle\int_{{x^{{2}}}}^{{{b}}} {tex}\,dt$, then $H'(x) =$"
    fu = fn.subs(t, x**2)
    return mk("6.4", "moderate", q, (L(-2 * x * fu), r"Reversing the limits, $H(x) = -\displaystyle\int_{" + str(b) + r"}^{x^{2}} f(t)\,dt$, so by the Fundamental Theorem and the chain rule $H'(x) = -f\left(x^{2}\right) \cdot 2x$."),
        [(L(2 * x * fu), r"The variable is the lower limit, so reversing the limits to put $x^{2}$ on top brings in a negative sign."),
         (L(-fu), r"The sign is right, but the chain rule factor $2x$ from the limit $x^{2}$ is missing."),
         (L(fn.subs(t, b)) + " - " + par(L(fu)), rf"This evaluates the integrand at the two limits and subtracts, as if it were an antiderivative.")])
t64_lower.max = 1

def t64_both(r):
    fn, tex = r.choice(INTEG)
    q = rf"If $G(x) = \displaystyle\int_{{x}}^{{x^{{2}}}} {tex}\,dt$, then $G'(x) =$"
    f2, f1 = fn.subs(t, x**2), fn.subs(t, x)
    key = L(2 * x * f2) + " - " + par(L(f1))
    return mk("6.4", "difficult", q, (key, rf"Split at a constant: $G(x) = \displaystyle\int_{{0}}^{{x^{{2}}}} f(t)\,dt - \displaystyle\int_{{0}}^{{x}} f(t)\,dt$ with $f(t) = {tex}$. The first part has derivative $2x f\left(x^{{2}}\right)$ and the second has derivative $f(x)$."),
        [(L(f2) + " - " + par(L(f1)), r"This leaves out the chain rule factor $2x$ from the upper limit $x^{2}$."),
         (L(2 * x * f2) + " + " + par(L(f1)), r"The lower limit is subtracted. Its term enters with a negative sign, $-f(x)$."),
         (L(2 * x * f2), r"This drops the variable lower limit. Since the lower limit is $x$, not a constant, it adds the term $-f(x)$.")])
t64_both.max = 1

def t64_value(r):
    c3, c1, c0 = r.choice([(1, -2, 4), (2, 3, -1), (1, 4, 2)]); a = r.choice([0, 1]); b = r.choice([2, 3])
    p = c3 * x**3 + c1 * x + c0
    q = rf"Let $G(x) = \displaystyle\int_{{{a}}}^{{x}} \left({L(p.subs(x, t))}\right)dt$. What is the value of $G'({b})$?"
    key = p.subs(x, b)
    wr = [(num(I(p, a, b)), rf"This is $G({b})$, the value of the integral. $G'({b})$ is the integrand at ${b}$."),
          (num(diff(p, x).subs(x, b)), r"This differentiates the integrand. By the Fundamental Theorem, $G'(x)$ is the integrand itself."),
          (num(key - p.subs(x, a)), rf"This subtracts the integrand's value at ${a}$. The constant lower limit adds nothing to $G'(x)$.")]
    distinct(key, *[w[0] for w in wr])
    return mk("6.4", "easy", q, (num(key), rf"By the Fundamental Theorem of Calculus, $G'(x) = {L(p)}$, so $G'({b}) = {key}$."), wr)
t64_value.max = 1

def t64_graph_g2(r):
    k, sh = gs_pick(r, ["v", "w", "n"]); c = r.choice(LOWER[k])
    segs = [p for p in sh.pieces if p[0] == "seg" and p[3] - p[1] >= 2]
    p = r.choice(segs); v = p[1] + 1
    if v == c: raise Skip("same")
    sid = g_set(sh, c)
    sl = sh.slope(v); fv = sh.val(v); gv = sh.I(c, v)
    q = rf"What is the value of $g''({v})$?"
    wr = [(F(fv), rf"This is $f({v}) = g'({v})$, the first derivative of $g$."),
          (F(gv), rf"This is $g({v})$, the signed area from ${c}$ to ${v}$."),
          (F(1 / sl) if sl not in (1, -1) else F(-sl), r"This divides the run by the rise. The slope of a segment is the rise over the run." if sl not in (1, -1) else r"The sign is wrong: the slope of the segment through this point has the opposite sign.")]
    distinct(sl, fv, gv, wr[2][0] if False else (1 / sl if sl not in (1, -1) else -sl))
    return mk("6.4", "moderate", q, (F(sl), rf"$g'(x) = f(x)$, so $g''(x) = f'(x)$. At $x = {v}$ the graph of $f$ is the segment from ${pt(p[1], p[2])}$ to ${pt(p[3], p[4])}$, with slope $\dfrac{{{p[4]} - ({p[2]})}}{{{p[3]} - ({p[1]})}} = {F(sl)}$."), wr, set_id=sid)
t64_graph_g2.max = 1

def tanline(y0, m, v):
    m = nsimplify(m, [pi]); xv = "x" if v == 0 else f"(x - {v})" if v > 0 else f"(x + {-v})"
    neg = float(m) < 0; am = -m if neg else m
    mt = "" if am == 1 else frac(am) if am.is_Rational else (F(am) if am.has(pi) and am.subs(pi, 0) == 0 else r"\left(" + F(am) + r"\right)")
    if m == 0: return f"y = {F(y0)}"
    if y0 == 0: return f"y = {'-' if neg else ''}{mt}{xv}"
    return f"y = {F(y0)} {'-' if neg else '+'} {mt}{xv}"

def t64_graph_tan(r):
    k, sh = gs_pick(r, ["v", "arc", "n"]); c = r.choice(LOWER[k])
    vs = [v for v in range(sh.a + 1, sh.b) if v != c and sh.val(v) != 0 and sh.piece_at(v)[0] == "seg" and sh.piece_at(v)[1] < v < sh.piece_at(v)[3]]
    v = r.choice(vs)
    sid = g_set(sh, c)
    gv = sh.I(c, v); fv = sh.val(v); sl = sh.slope(v)
    line = lambda y0, m: tanline(y0, m, v)
    alt = sh.absI(c, v) * (1 if v > c else -1)
    if alt == gv: alt = -gv
    wr = [(line(gv, sl), rf"This uses $f'({v}) = {F(sl)}$ as the slope. The slope of the tangent line to $g$ is $g'({v}) = f({v})$."),
          (line(fv, gv), rf"This swaps the two values: the point on the graph of $g$ is $\left({v}, g({v})\right)$ and the slope is $f({v})$."),
          (line(alt, fv), r"The slope is right, but the value of $g$ counts every region as positive area. Regions below the axis count as negative" + (", and so does an integral whose upper limit is less than its lower limit." if v < c else "."))]
    distinct(gv, alt) if True else None
    keys = [line(gv, fv)] + [w[0] for w in wr]
    if len(set(keys)) < 4: raise Skip("same")
    return mk("6.4", "difficult", rf"Which of the following is an equation of the line tangent to the graph of $g$ at $x = {v}$?", (line(gv, fv), rf"$g({v}) = \displaystyle\int_{{{c}}}^{{{v}}} f(t)\,dt = {F(gv)}$ from the signed areas, and $g'({v}) = f({v}) = {F(fv)}$. The tangent line is $y = g({v}) + g'({v})(x - {v})$."), wr, set_id=sid)
t64_graph_tan.max = 1

# ---------------------------------------------------------------- 6.5 behavior of accumulation functions (graphs)
def t65_incr(r):
    k, sh = gs_pick(r, name="g65"); c = r.choice(LOWER[k]); sid = g_set(sh, c)
    key = sh.sign_ivs(1); wrong_inc = sh.mono_ivs(1); neg = sh.sign_ivs(-1)
    third = key[:1] if len(key) > 1 else [iv for iv in sh.mono_ivs(1) if iv not in wrong_inc][:1] or [(sh.a, key[0][1])]
    extra = [iv for iv in wrong_inc if iv[0] >= key[-1][1] or iv[1] <= key[0][0]] if len(key) == 1 else []
    if extra:
        third = sorted(key + extra[:1])
        why3 = r"This adds an interval where $f$ is increasing but negative. $g$ increases only where $f(x) > 0$."
    elif len(key) == 1:
        third = [(key[0][0], key[0][1] + 1)] if key[0][1] < sh.b else [(key[0][0] - 1, key[0][1])]
        why3 = r"This interval runs past a point where $f$ crosses the axis, so it includes values where $f(x) < 0$ and $g$ decreases."
    else:
        why3 = r"This is only one of the intervals where $f(x) > 0$. The graph of $f$ is above the axis on another interval as well."
    ch = [ivs(key), ivs(wrong_inc), ivs(neg), ivs(third)]
    if len(set(ch)) < 4: raise Skip("same")
    return mk("6.5", "moderate", r"On which of the following intervals is $g$ increasing?", (text_choice(ch[0]), r"$g'(x) = f(x)$, so $g$ is increasing where the graph of $f$ is above the $x$-axis."),
        [(text_choice(ch[1]), r"This is where $f$ is increasing, which is where the graph of $g$ is concave up. $g$ increases where $f$ is positive."),
         (text_choice(ch[2]), r"This is where $f(x) < 0$, so $g' < 0$ and $g$ is decreasing there."),
         (text_choice(ch[3]), why3)], set_id=sid)
t65_incr.max = 1

def t65_rel(r):
    k, sh = gs_pick(r, name="g65"); c = r.choice(LOWER[k]); sid = g_set(sh, c)
    mx, mn = sh.g_rel(); want = r.choice(["maximum", "minimum"])
    key = mx if want == "maximum" else mn; other = mn if want == "maximum" else mx
    fx = sh.f_extreme_x(1 if want == "maximum" else -1)
    if len(key) != 1 or not other: raise Skip("one")
    cands = [(other[0], rf"At $x = {F(other[0])}$, $g' = f$ changes from {'negative to positive' if want == 'maximum' else 'positive to negative'}, so $g$ has a relative {'minimum' if want == 'maximum' else 'maximum'} there.")]
    for v in fx:
        if v not in key + other: cands.append((v, rf"$x = {F(v)}$ is where $f$ itself has a relative {want}. $g' = f$ does not change sign there."))
    for v in sh.zeros():
        if v not in key + other and sh.a < v < sh.b: cands.append((v, rf"$f({F(v)}) = 0$, but $f$ does not change sign there, so $g$ has no extremum."))
    cands.append((c, rf"$g({c}) = 0$ because the integral starts at $x = {c}$, but that does not make it an extremum of $g$."))
    seen, wr = {key[0]}, []
    for v, w in cands:
        if v not in seen and len(wr) < 3: seen.add(v); wr.append((F(v), w))
    if len(wr) < 3: raise Skip("few")
    return mk("6.5", "moderate", rf"At what value of $x$ does $g$ have a relative {want}?", (F(key[0]), rf"$g'(x) = f(x)$ changes from {'positive to negative' if want == 'maximum' else 'negative to positive'} at $x = {F(key[0])}$, so $g$ has a relative {want} there."), wr, set_id=sid)
t65_rel.max = 1

def t65_infl(r):
    k, sh = gs_pick(r, name="g65"); c = r.choice(LOWER[k]); sid = g_set(sh, c)
    key = sh.g_infl(); mx, mn = sh.g_rel(); crit = sorted(mx + mn)
    bends = sorted(set(v for p in sh.pieces for v in Shape.span(p) if sh.a < v < sh.b and v not in key))
    w1 = crit
    w2 = key[:1] if len(key) > 1 else sorted(set(key + bends[:1]))
    w3 = sorted(set(key + crit))
    ch = [xs_text(key), xs_text(w1), xs_text(w2), xs_text(w3)]
    if len(set(ch)) < 4: raise Skip("same")
    return mk("6.5", "difficult", r"At which values of $x$ does the graph of $g$ have a point of inflection?", (text_choice(ch[0]), r"$g''(x) = f'(x)$, so the graph of $g$ has a point of inflection where $f$ changes from increasing to decreasing or from decreasing to increasing, including at a corner of the graph of $f$."),
        [(text_choice(ch[1]), r"These are where $f$ changes sign, which are the relative extrema of $g$, not its points of inflection."),
         (text_choice(ch[2]), r"This misses a point where $f$ changes direction." if len(key) > 1 else r"At a bend where $f$ keeps increasing or keeps decreasing, $f'$ does not change sign, so the concavity of $g$ does not change there."),
         (text_choice(ch[3]), r"This adds the relative extrema of $g$, where $f$ changes sign. Concavity changes only where $f$ changes direction.")], set_id=sid)
t65_infl.max = 1

def t65_abs(r):
    k, sh = gs_pick(r, name="g65"); c = r.choice(LOWER[k]); sid = g_set(sh, c)
    want = r.choice(["maximum", "minimum"])
    mx, mn = sh.g_rel(); crit = mx if want == "maximum" else mn
    cands = [sh.a, sh.b] + crit
    vals = {v: sh.I(c, v) for v in cands}
    best = (max if want == "maximum" else min)(vals.values())
    interior = [vals[v] for v in crit]
    others = sorted([vv for vv in vals.values() if vv != best], key=lambda vv: abs(float(vv - best)))
    w1 = interior[0] if interior and interior[0] != best else others[0]
    bestx = [v for v in cands if vals[v] == best][0]
    allpos = sh.absI(c, bestx) * (1 if bestx >= c else -1)
    fext = (max if want == "maximum" else min)(sh.val(v) for v in sh.breaks())
    wr = [(F(w1), r"This is the value of $g$ at a relative " + want + r", but the candidates test also checks the endpoints, and an endpoint gives a " + ("greater" if want == "maximum" else "lesser") + " value." if w1 in interior else rf"This is a value of $g$ at another candidate, not the {'greatest' if want == 'maximum' else 'least'} one."),
          (F(fext), rf"This is the {want} value of $f$ read from the graph. The question asks about $g$, whose values are signed areas."),
          (F(allpos), rf"This treats every region between $x = {F(min(c, bestx))}$ and $x = {F(max(c, bestx))}$ as area above the axis. Regions below the $x$-axis count as negative in $g$.")]
    keys = [F(best)] + [w[0] for w in wr]
    if len(set(keys)) < 4: raise Skip("same")
    lst = ", ".join(rf"$g({F(v)}) = {F(vals[v])}$" for v in sorted(vals))
    return mk("6.5", "difficult", rf"What is the absolute {want} value of $g$ on the interval ${sh.a} \le x \le {sh.b}$?", (F(best), rf"The candidates are the endpoints and the critical points where $f$ changes sign: {lst}. The {'greatest' if want == 'maximum' else 'least'} is ${F(best)}$."), wr, set_id=sid)
t65_abs.max = 1

def t65_conc(r):
    k, sh = gs_pick(r, name="g65"); c = r.choice(LOWER[k]); sid = g_set(sh, c)
    want = r.choice(["up", "down"])
    key = sh.mono_ivs(1 if want == "up" else -1); opp = sh.mono_ivs(-1 if want == "up" else 1)
    w2 = sh.sign_ivs(1 if want == "up" else -1)
    w3 = key[:1] if len(key) > 1 else sh.sign_ivs(-1 if want == "up" else 1)
    ch = [ivs(key), ivs(opp), ivs(w2), ivs(w3)]
    if len(set(ch)) < 4: raise Skip("same")
    return mk("6.5", "moderate", rf"On which of the following intervals is the graph of $g$ concave {want}?", (text_choice(ch[0]), rf"The graph of $g$ is concave {want} where $g' = f$ is {'increasing' if want == 'up' else 'decreasing'}."),
        [(text_choice(ch[1]), rf"Here $f$ is {'decreasing' if want == 'up' else 'increasing'}, so the graph of $g$ is concave {'down' if want == 'up' else 'up'}."),
         (text_choice(ch[2]), rf"This is where $f$ is {'positive' if want == 'up' else 'negative'}, which tells where $g$ is {'increasing' if want == 'up' else 'decreasing'}, not its concavity."),
         (text_choice(ch[3]), r"This leaves out an interval where $f$ is " + ("increasing." if want == "up" else "decreasing.") if len(key) > 1 else rf"This is where $f$ is {'negative' if want == 'up' else 'positive'}, which tells whether $g$ increases or decreases, not its concavity.")], set_id=sid)
t65_conc.max = 1

def t65_max(r):
    a, b = sorted(r.sample([-3, -1, 2, 4, 5], 2))
    want = r.choice(["maximum", "minimum"])
    c = r.choice([v for v in [0, 1] if v not in (a, b)])
    q = rf"Let $g(x) = \displaystyle\int_{{{c}}}^{{x}} (t {pm(-a)})(t {pm(-b)})\,dt$. At what value of $x$ does $g$ have a relative {want}?"
    key, oth = (a, b) if want == "maximum" else (b, a)
    distinct(key, oth, Rational(a + b, 2), c)
    return mk("6.5", "moderate", q, (num(key), rf"$g'(x) = (x {pm(-a)})(x {pm(-b)})$, which is positive for $x < {a}$, negative for ${a} < x < {b}$, and positive for $x > {b}$. It changes from {'positive to negative' if want == 'maximum' else 'negative to positive'} at $x = {key}$."),
        [(num(oth), rf"At $x = {oth}$, $g'$ changes from {'negative to positive' if want == 'maximum' else 'positive to negative'}, so $g$ has a relative {'minimum' if want == 'maximum' else 'maximum'} there."),
         (num(Rational(a + b, 2)), rf"This is where $g''(x) = 2x {pm(-(a + b))}$ is $0$, a point of inflection of $g$, not an extremum."),
         (num(c), rf"$g({c}) = 0$ because the integral starts at ${c}$, but $g'({c}) \ne 0$, so $g$ has no extremum there.")])
t65_max.max = 1

def t65_dec_cu(r):
    a, b = sorted(r.sample([-4, -2, 0, 2, 6], 2))
    fac = lambda v, var: var if v == 0 else f"({var} {pm(-v)})"
    q = rf"Let $g(x) = \displaystyle\int_{{1}}^{{x}} {fac(a, 't')}{fac(b, 't')}\,dt$. On which interval is $g$ decreasing and its graph concave down?"
    m_ = Rational(a + b, 2)
    I_ = lambda lo, hi: rf"${F(lo) if lo != -oo else r'-\infty'} < x < {F(hi) if hi != oo else r'\infty'}$"
    return mk("6.5", "moderate", q, (text_choice(I_(a, m_)), rf"$g'(x) = {fac(a, 'x')}{fac(b, 'x')} < 0$ for ${a} < x < {b}$, so $g$ decreases there. $g''(x) = 2x {pm(-(a + b))} < 0$ for $x < {F(m_)}$. Both hold for ${a} < x < {F(m_)}$."),
        [(text_choice(I_(m_, b)), r"Here $g$ is decreasing, but $g'' > 0$, so the graph is concave up."),
         (text_choice(I_(a, b)), r"This is the whole interval where $g$ decreases. The graph is concave down on only part of it."),
         (text_choice(I_(-oo, a)), r"Here the graph is concave down, but $g' > 0$, so $g$ is increasing.")])
t65_dec_cu.max = 1

# ---------------------------------------------------------------- 6.6 properties of definite integrals
def t66_lin(r):
    a, b, c = r.choice([-2, 3, 5, 7]), r.choice([4, -1, 6]), r.choice([2, 3])
    k = r.choice([2, 4, -1])
    val = k * a + c * b
    kt = "-" if k == -1 else str(k)
    q = rf"If $\displaystyle\int_{{1}}^{{5}} f(x)\,dx = {a}$ and $\displaystyle\int_{{1}}^{{5}} g(x)\,dx = {b}$, what is $\displaystyle\int_{{1}}^{{5}} \left({kt}f(x) + {c}g(x)\right)dx$?"
    distinct(val, a + b, k * a + b, k * c * a * b)
    return mk("6.6", "easy", q, (num(val), rf"The integral of a sum is the sum of the integrals, and constant factors come out: ${k}({a}) + {c}({b}) = {val}$."),
        [(num(a + b), r"This leaves out both constant factors. Each integral is multiplied by its coefficient."),
         (num(k * a + b), rf"This leaves out the factor ${c}$ in front of $g$."),
         (num(k * c * a * b), r"This multiplies the pieces. The integral of a sum is a sum of integrals, not a product.")])
t66_lin.max = 1

def t66_split(r):
    a, b = r.choice([3, 5, -2, 8]), r.choice([4, -3, 6, 2])
    lo, mid, hi = r.choice([(0, 3, 7), (-2, 1, 6), (1, 4, 9)])
    val = b - a
    q = rf"If $\displaystyle\int_{{{lo}}}^{{{hi}}} f(x)\,dx = {b}$ and $\displaystyle\int_{{{lo}}}^{{{mid}}} f(x)\,dx = {a}$, what is $\displaystyle\int_{{{mid}}}^{{{hi}}} f(x)\,dx$?"
    prop = Rational(b * (hi - mid), hi - lo)
    distinct(val, a + b, a - b, prop)
    return mk("6.6", "easy", q, (num(val), rf"$\displaystyle\int_{{{lo}}}^{{{mid}}} f + \displaystyle\int_{{{mid}}}^{{{hi}}} f = \displaystyle\int_{{{lo}}}^{{{hi}}} f$, so $\displaystyle\int_{{{mid}}}^{{{hi}}} f(x)\,dx = {b} - ({a}) = {val}$."),
        [(num(a + b), r"This adds the two given integrals. The two pieces add up to the whole, so subtract to find the missing piece."),
         (num(a - b), r"This subtracts in the wrong order: the whole minus the known piece gives the missing piece."),
         (num(prop), rf"This splits ${b}$ in proportion to the lengths of the intervals, as if $f$ were constant.")])
t66_split.max = 2

def t66_rev(r):
    a = r.choice([3, -4, 6, 10]); k = r.choice([2, 3, 5])
    val = -k * a
    q = rf"If $\displaystyle\int_{{2}}^{{6}} f(x)\,dx = {a}$, what is $\displaystyle\int_{{6}}^{{2}} {k}f(x)\,dx$?"
    distinct(val, k * a, -a, Rational(-a, k))
    return mk("6.6", "easy", q, (num(val), rf"Switching the limits changes the sign, and the constant factor comes out: $-{k}({a}) = {val}$."),
        [(num(k * a), r"Reversing the limits of integration changes the sign."),
         (num(-a), rf"The sign change is right, but the constant factor ${k}$ is left out."),
         (num(Rational(-a, k)), rf"This divides by ${k}$. A constant factor in the integrand multiplies the integral.")])
t66_rev.max = 1

def t66_const(r):
    A = r.choice([4, 6, -3, 7]); lo, hi = r.choice([(1, 4), (2, 7), (0, 5)]); k = r.choice([2, 3]); c = r.choice([1, -2, 4])
    w = hi - lo; val = -(k * A + c * w)
    q = rf"If $\displaystyle\int_{{{lo}}}^{{{hi}}} f(x)\,dx = {A}$, what is the value of $\displaystyle\int_{{{hi}}}^{{{lo}}} \left({k}f(x) {pm(c)}\right)dx$?"
    wr = [(num(k * A + c * w), r"This is the integral from the lower number to the higher one. Reversing the limits changes the sign."),
          (num(-(k * A + c)), rf"This integrates the constant ${c}$ as ${c}$. Over an interval of length ${w}$ it contributes ${c}({w}) = {c * w}$."),
          (num(-(A + c * w)), rf"This leaves out the factor ${k}$ in front of $f$.")]
    distinct(val, *[w_[0] for w_ in wr])
    return mk("6.6", "difficult", q, (num(val), rf"$\displaystyle\int_{{{lo}}}^{{{hi}}} \left({k}f(x) {pm(c)}\right)dx = {k}({A}) {pm(c)}({w}) = {k * A + c * w}$. Reversing the limits changes the sign: ${val}$."), wr)
t66_const.max = 2

def t66_shift(r):
    A = r.choice([5, 8, -6]); lo, hi = r.choice([(1, 4), (0, 3), (2, 6)]); h = r.choice([2, 3]); k = r.choice([2, 3])
    q = rf"If $\displaystyle\int_{{{lo}}}^{{{hi}}} f(x)\,dx = {A}$, what is the value of $\displaystyle\int_{{{lo + h}}}^{{{hi + h}}} {k}f(x - {h})\,dx$?"
    val = k * A
    wr = [(num(k * A - k * h * (hi - lo)), rf"This treats $f(x - {h})$ as $f(x) - {h}$. Replacing $x$ with $x - {h}$ shifts the graph right; it does not lower it."),
          (num(A), rf"The shift is handled correctly, but the factor ${k}$ is left out."),
          (num(-k * A), r"The limits are not reversed here, so there is no sign change.")]
    distinct(val, *[w[0] for w in wr])
    return mk("6.6", "moderate", q, (num(val), rf"The graph of $f(x - {h})$ is the graph of $f$ shifted ${h}$ units right, so its integral from ${lo + h}$ to ${hi + h}$ equals $\displaystyle\int_{{{lo}}}^{{{hi}}} f(x)\,dx = {A}$. With the factor ${k}$, the value is ${val}$."), wr)
t66_shift.max = 1

def t66_odd(r):
    a = r.choice([1, 2, 3]); fn, tex = r.choice([(x**3 - 4 * x, "x^{3} - 4x"), (x**5, "x^{5}"), (x**3 + 2 * x, "x^{3} + 2x"), (x**5 - x**3, "x^{5} - x^{3}")])
    q = rf"What is the value of $\displaystyle\int_{{-{a}}}^{{{a}}} {par(tex)}\,dx$?"
    if True:
        half = I(fn, 0, a)
        wr = [(num(2 * half) if half != 0 else "1", r"For an odd function the two halves cancel; they do not double."),
              (num(half), rf"This is only the integral from $0$ to ${a}$."),
              (num(fn.subs(x, a) - fn.subs(x, -a)), r"This evaluates the integrand at the limits and subtracts, as if it were an antiderivative.")]
    keys = ["0"] + [w[0] for w in wr]
    if len(set(keys)) < 4: raise Skip("same")
    return mk("6.6", "easy", q, ("0", rf"The integrand is odd: replacing $x$ with $-x$ changes its sign. So the signed area on $[-{a}, 0]$ cancels the signed area on $[0, {a}]$."), wr)
t66_odd.max = 1
def t66_odd_b(r): return t66_odd(r)
t66_odd_b.max = 1

def t66_even_c(r):
    A = r.choice([5, 7, 3]); a = r.choice([2, 3, 4]); c = r.choice([-2, 1, 3])
    val = 2 * A + c * 2 * a
    q = rf"The function $f$ is even, and $\displaystyle\int_{{0}}^{{{a}}} f(x)\,dx = {A}$. What is the value of $\displaystyle\int_{{-{a}}}^{{{a}}} \left(f(x) {pm(c)}\right)dx$?"
    wr = [(num(A + c * 2 * a), rf"This counts only the right half of $f$. For an even function, $\displaystyle\int_{{-{a}}}^{{0}} f(x)\,dx$ also equals ${A}$."),
          (num(2 * A + c), rf"This integrates the constant ${c}$ as ${c}$. Over an interval of length ${2 * a}$ it contributes ${c * 2 * a}$."),
          (num(c * 2 * a), r"This treats $f$ as odd, so that its two halves cancel. For an even function the two halves are equal.")]
    distinct(val, *[w[0] for w in wr])
    return mk("6.6", "difficult", q, (num(val), rf"Since $f$ is even, $\displaystyle\int_{{-{a}}}^{{{a}}} f(x)\,dx = 2({A}) = {2 * A}$. The constant adds ${c}({2 * a}) = {c * 2 * a}$, for a total of ${val}$."), wr)
t66_even_c.max = 1

def t66_sym(r):
    a = r.choice([3, 4, 5]); m = r.choice([1, 2]); W = r.choice([10, 14, 18]); B = r.choice([2, 3])
    val = Rational(W, 2) - B
    q = rf"The function $f$ is even, $\displaystyle\int_{{-{a}}}^{{{a}}} f(x)\,dx = {W}$, and $\displaystyle\int_{{0}}^{{{m}}} f(x)\,dx = {B}$. What is the value of $\displaystyle\int_{{{m}}}^{{{a}}} f(x)\,dx$?"
    wr = [(num(W - B), rf"This subtracts from the integral over the whole interval $[-{a}, {a}]$. Only half of it, ${W // 2}$, lies on $[0, {a}]$."),
          (num(Rational(W - B, 2)), r"This halves after subtracting. Halve the whole first to get the integral on the right half, then subtract."),
          (num(Rational(W, 2) + B), rf"This adds the given piece. The interval $[0, {a}]$ is made of $[0, {m}]$ and $[{m}, {a}]$, so the piece is subtracted.")]
    distinct(val, *[w[0] for w in wr])
    return mk("6.6", "moderate", q, (num(val), rf"Since $f$ is even, $\displaystyle\int_{{0}}^{{{a}}} f(x)\,dx = \dfrac{{{W}}}{{2}} = {W // 2}$. Then $\displaystyle\int_{{{m}}}^{{{a}}} f(x)\,dx = {W // 2} - {B} = {val}$."), wr)
t66_sym.max = 1

def t66_geom(r):
    R = r.choice([2, 3, 4]); c = r.choice([1, 2, -1]); k = r.choice([1, 2])
    q = rf"What is the value of $\displaystyle\int_{{{c - R}}}^{{{c + R}}} \left({k} + \sqrt{{{R**2} - (x {pm(-c)})^{{2}}}}\right)dx$?" if k else ""
    half = pi * R**2 / 2; val = k * 2 * R + half
    wr = [(F(k * 2 * R + pi * R**2), r"This uses the area of the whole circle. The graph of the square root is only the upper half of the circle."),
          (F(k + half), rf"This integrates the constant ${k}$ as ${k}$. Over an interval of length ${2 * R}$ it contributes ${2 * k * R}$."),
          (F(k * 2 * R + pi * R**2 / 4), r"This uses a quarter of the circle. The interval covers the full width of the circle, so the graph is a half circle.")]
    distinct(val, *[sympify(0) + i for i in range(3)]) if False else None
    if len(set([F(val)] + [w[0] for w in wr])) < 4: raise Skip("same")
    return mk("6.6", "moderate", q, (F(val), rf"The graph of $y = \sqrt{{{R**2} - (x {pm(-c)})^{{2}}}}$ is the upper half of the circle of radius ${R}$ centered at $({c}, 0)$, with area $\dfrac{{1}}{{2}}\pi({R})^{{2}} = {F(half)}$. The constant ${k}$ adds ${k}({2 * R}) = {2 * k * R}$."), wr)
t66_geom.max = 1

def t66_abs(r):
    k, sh = gs_pick(r, ["v", "w", "n"], name="abs66"); sid = f_set(sh)
    zs = sorted(set([sh.a, sh.b] + [z for z in sh.zeros() if z.q == 1]))
    a_, b_ = sorted(r.sample(zs, 2))
    val = sh.absI(a_, b_); net = sh.I(a_, b_)
    above = sum(sh.I(lo, hi) for lo, hi in sh.sign_ivs(1) if lo >= a_ and hi <= b_)
    if val == abs(net) or above in (val, net, abs(net)): raise Skip("one sign")
    q = rf"What is the value of $\displaystyle\int_{{{a_}}}^{{{b_}}} |f(x)|\,dx$?"
    wr = [(F(net), r"This is $\displaystyle\int f(x)\,dx$, where regions below the axis count as negative. The absolute value makes every region count as positive."),
          (F(abs(net)), r"This takes the absolute value of the integral, $\left|\displaystyle\int f(x)\,dx\right|$, after the regions have canceled. The absolute value belongs on $f(x)$, so each region counts as positive before adding."),
          (F(above), r"This adds only the regions above the axis. The graph of $|f|$ reflects the regions below the axis upward, so they count too.")]
    return mk("6.6", "moderate", q, (F(val), rf"The graph of $|f|$ reflects the parts of the graph of $f$ below the axis upward, so the integral is the total area of the regions between the graph of $f$ and the $x$-axis from ${a_}$ to ${b_}$: ${F(val)}$."), wr, set_id=sid)
t66_abs.max = 2

def t66_bound(r):
    lo, hi = r.choice([(1, 4), (2, 5), (-1, 3)]); a, b = r.choice([(1, 4), (2, 7), (0, 5)])
    if a == 0: raise Skip  # multiplying by the upper limit would then give the key
    w = b - a
    # Several intervals are guaranteed (any wider one is too), so the question asks for the narrowest guaranteed one.
    q = (rf"For all $x$ in $[{a}, {b}]$, ${lo} \le f(x) \le {hi}$. Of the following, which is the narrowest interval that "
         rf"must contain $\displaystyle\int_{{{a}}}^{{{b}}} f(x)\,dx$?")
    return mk("6.6", "easy", q, (text_choice(rf"It is between ${lo * w}$ and ${hi * w}$."), rf"The interval has length ${w}$, so the integral is between ${lo}({w}) = {lo * w}$ and ${hi}({w}) = {hi * w}$. The constant functions $f(x) = {lo}$ and $f(x) = {hi}$ reach these values, so no narrower interval is guaranteed."),
        [(text_choice(rf"It is between ${lo}$ and ${hi}$."), rf"Those bounds are for $f(x)$. Multiply them by the length of the interval, ${w}$."),
         (text_choice(rf"It is equal to ${frac(Rational((lo + hi) * w, 2))}$."), r"The bounds give only a range. An exact value would need more about $f$."),
         (text_choice(rf"It is between ${lo * b}$ and ${hi * b}$."), rf"This multiplies by ${b}$, the upper limit, and gives a wider interval than the information guarantees. The length of the interval is ${b} - {a} = {w}$.")])
t66_bound.max = 1

def t66_k(r):
    a, m = r.choice([(1, 4), (1, 6), (2, 6), (1, 8)])
    # integral from a to k of (2x - m) = k^2 - m k - (a^2 - m a) = 0, root other than a
    sol = [s for s in solve(x**2 - m * x - (a**2 - m * a), x) if s != a]
    k = sol[0]
    if k <= a: raise Skip("k")
    q = rf"For what value of $k$, with $k > {a}$, is $\displaystyle\int_{{{a}}}^{{k}} (2x - {m})\,dx = 0$?"
    wr = [(num(Rational(m, 2)), rf"This is where the integrand $2x - {m}$ is $0$. The integral is $0$ when the area above the axis equals the area below it."),
          (num(m), rf"This solves $k^{{2}} - {m}k = 0$, leaving out the antiderivative's value at the lower limit ${a}$."),
          (num(a), rf"$k = {a}$ also makes the integral $0$, but it is not greater than ${a}$; an integral from ${a}$ to ${a}$ is $0$ for any integrand.")]
    distinct(k, *[w[0] for w in wr])
    return mk("6.6", "moderate", q, (num(k), rf"$\displaystyle\int_{{{a}}}^{{k}} (2x - {m})\,dx = \left(k^{{2}} - {m}k\right) - \left({a**2} - {m * a}\right)$. Setting this equal to $0$ gives $k = {a}$ or $k = {k}$, and $k > {a}$, so $k = {k}$."), wr)
t66_k.max = 1

def t66_graph(r, kind):
    k, sh = gs_pick(r, name="g66"); sid = f_set(sh)
    zs = [z for z in sh.zeros() if z.q == 1]
    if kind == "easy":
        # one region
        regs = [(a_, b_) for a_, b_ in sh.sign_ivs(1) + sh.sign_ivs(-1) if a_.q == 1 and b_.q == 1]
        a_, b_ = r.choice(regs); val = sh.I(a_, b_)
        q = rf"What is the value of $\displaystyle\int_{{{a_}}}^{{{b_}}} f(x)\,dx$?"
        wr = [(F(-val), r"The region is " + ("above" if val > 0 else "below") + r" the $x$-axis, so the integral is " + ("positive." if val > 0 else "negative.")),
              (F(2 * val), r"This leaves out the $\dfrac{1}{2}$ in the area of a triangle." if all(p[0] == "seg" for p in sh.pieces) else r"This doubles the area of the region."),
              (F(sh.val(b_) - sh.val(a_)) if sh.val(b_) != sh.val(a_) else F(b_ - a_), r"This subtracts values of $f$ at the limits, as if $f$ were its own antiderivative." if sh.val(b_) != sh.val(a_) else r"This is the length of the interval, not the area of the region.")]
        if len(set([F(val)] + [w[0] for w in wr])) < 4: raise Skip("same")
        return mk("6.6", "easy", q, (F(val), rf"The region between the graph and the $x$-axis from ${a_}$ to ${b_}$ lies {'above' if val > 0 else 'below'} the axis, so the integral is {'its area' if val > 0 else 'the negative of its area'}: ${F(val)}$."), wr, set_id=sid)
    a_, b_ = sorted(r.sample(sorted(set([sh.a, sh.b] + zs)), 2))
    if len(sh.sign_ivs(1)) + len(sh.sign_ivs(-1)) < 2: raise Skip("one")
    val = sh.I(a_, b_); ab = sh.absI(a_, b_)
    if val == ab or val == -ab: raise Skip("one sign")
    if kind == "net":
        q = rf"What is the value of $\displaystyle\int_{{{a_}}}^{{{b_}}} f(x)\,dx$?"
        wr = [(F(ab), r"This adds the areas of all the regions. Regions below the $x$-axis count as negative."),
              (F(-val), r"This gives the regions the wrong signs: area above the axis is positive and area below is negative."),
              (F(-ab), r"This counts every region as negative.")]
        if len(set([F(val)] + [w[0] for w in wr])) < 4: raise Skip("same")
        return mk("6.6", "moderate", q, (F(val), rf"Add the signed areas of the regions from ${a_}$ to ${b_}$, positive above the axis and negative below: ${F(val)}$."), wr, set_id=sid)
    if kind == "rev":
        q = rf"What is the value of $\displaystyle\int_{{{b_}}}^{{{a_}}} f(x)\,dx$?"
        wr = [(F(val), r"This is the integral with the limits in increasing order. Reversing the limits changes the sign."),
              (F(-ab), r"The sign change is right, but this adds the areas of all the regions; regions below the axis count as negative before the sign change."),
              (F(ab), r"This adds the areas of all the regions and does not change the sign for the reversed limits.")]
        if len(set([F(-val)] + [w[0] for w in wr])) < 4: raise Skip("same")
        return mk("6.6", "moderate", q, (F(-val), rf"$\displaystyle\int_{{{a_}}}^{{{b_}}} f(x)\,dx = {F(val)}$ from the signed areas. Reversing the limits changes the sign: ${F(-val)}$."), wr, set_id=sid)
    kk = r.choice([2, 3]); c = r.choice([1, -1, 2]); w = b_ - a_
    tot = kk * val + c * w
    q = rf"What is the value of $\displaystyle\int_{{{a_}}}^{{{b_}}} \left({kk}f(x) {pm(c)}\right)dx$?"
    wr = [(F(kk * val + c), rf"This integrates the constant ${c}$ as ${c}$ instead of ${c}$ times the length of the interval, ${w}$."),
          (F(kk * ab + c * w), r"This adds the areas of all the regions. Regions below the $x$-axis count as negative."),
          (F(val + c * w), rf"This leaves out the factor ${kk}$ in front of $f$.")]
    if len(set([F(tot)] + [w_[0] for w_ in wr])) < 4: raise Skip("same")
    return mk("6.6", "difficult", q, (F(tot), rf"$\displaystyle\int_{{{a_}}}^{{{b_}}} f(x)\,dx = {F(val)}$ from the signed areas, so the value is ${kk}{'(' + F(val) + ')' if paren(val) == F(val) else paren(val)} {pm(c)}({w}) = {F(tot)}$."), wr, set_id=sid)
def t66_graph_easy(r): return t66_graph(r, "easy")
t66_graph_easy.max = 2
def t66_graph_mid(r): return t66_graph(r, r.choice(["net", "rev"]))
t66_graph_mid.max = 3
def t66_graph_hard(r): return t66_graph(r, "lin")
t66_graph_hard.max = 2

# ---------------------------------------------------------------- 6.7 FTC evaluation
def t67_poly(r):
    a = r.choice([0, 1, -1]); b = r.choice([2, 3]); c2, c1 = r.choice([3, 6, 1]), r.choice([-2, 4, 0])
    fn = c2 * x**2 + c1 * x + 1
    val = I(fn, a, b); Fx = integrate(fn, x)
    w1 = fn.subs(x, b) - fn.subs(x, a); w3 = diff(fn, x).subs(x, b) - diff(fn, x).subs(x, a)
    if a == 0:
        G = c2 * x**3 + c1 * x**2 + x; w2 = G.subs(x, b); why2 = r"This raises each power by one but does not divide by the new power."
    else:
        w2 = Fx.subs(x, b); why2 = rf"This is $F({b})$ alone. The value $F({a})$ must be subtracted."
    distinct(val, w1, w2, w3)
    q = rf"What is the value of $\displaystyle\int_{{{a}}}^{{{b}}} \left({L(fn)}\right)dx$?"
    return mk("6.7", "easy", q, (num(val), rf"An antiderivative is $F(x) = {L(Fx)}$, and $F({b}) - F({a}) = {L(val)}$."),
        [(num(w1), r"This subtracts values of the integrand, not of an antiderivative."),
         (num(w2), why2),
         (num(w3), r"This differentiates the integrand and evaluates the derivative at the limits, instead of using an antiderivative.")])
t67_poly.max = 2

def t67_trig(r):
    fn, Fn, tex, b = r.choice([(cos(x), sin(x), r"\cos x", pi / 3), (sec(x)**2, tan(x), r"\sec^{2}x", pi / 3), (sin(x), -cos(x), r"\sin x", 2 * pi / 3)])
    val = simplify(Fn.subs(x, b) - Fn.subs(x, 0)); neg = simplify(-val)
    w2 = simplify(fn.subs(x, b) - fn.subs(x, 0)); w3 = simplify(Fn.subs(x, b))
    wr = []
    signwhy = {r"\sin x": r"This uses $\cos x$ as the antiderivative. The derivative of $\cos x$ is $-\sin x$, so the antiderivative of $\sin x$ is $-\cos x$.",
               r"\cos x": r"This uses $-\sin x$ as the antiderivative. The derivative of $\sin x$ is $\cos x$, with no negative sign.",
               r"\sec^{2}x": r"This uses $-\tan x$ as the antiderivative. The derivative of $\tan x$ is $\sec^{2}x$, with no negative sign."}[tex]
    for v, why in [(neg, signwhy),
                   (w2, r"This subtracts values of the integrand at the limits, not values of an antiderivative."),
                   (w3, r"This evaluates the antiderivative at the upper limit only. Its value at $0$ must be subtracted."),
                   (simplify(diff(fn, x).subs(x, b) - diff(fn, x).subs(x, 0)), r"This differentiates the integrand instead of finding an antiderivative.")]:
        if v != val and all(simplify(v - w[0]) != 0 for w in wr) and len(wr) < 3: wr.append((v, why))
    if len(wr) < 3: raise Skip("few")
    q = rf"What is the value of $\displaystyle\int_{{0}}^{{{L(b)}}} {tex}\,dx$?"
    return mk("6.7", "easy", q, (L(val), rf"An antiderivative is ${L(Fn)}$, so the value is ${L(Fn)}\Big|_{{0}}^{{{L(b)}}} = {L(val)}$."), [(L(v), w) for v, w in wr])
t67_trig.max = 1

def t67_exp(r):
    k = r.choice([2, 3]); b = r.choice([1, 2])
    q = rf"What is the value of $\displaystyle\int_{{0}}^{{{b}}} e^{{{k}x}}\,dx$?"
    E_ = f"e^{{{k * b}}}"
    return mk("6.7", "easy", q, (rf"\frac{{{E_} - 1}}{{{k}}}", rf"An antiderivative is $\dfrac{{1}}{{{k}}}e^{{{k}x}}$, so the value is $\dfrac{{1}}{{{k}}}\left(e^{{{k * b}}} - e^{{0}}\right) = \dfrac{{{E_} - 1}}{{{k}}}$."),
        [(rf"{E_} - 1", rf"This uses $e^{{{k}x}}$ as the antiderivative. By the chain rule its derivative is ${k}e^{{{k}x}}$, so the factor $\dfrac{{1}}{{{k}}}$ is needed."),
         (rf"{k}\left({E_} - 1\right)", rf"This multiplies by ${k}$, as when differentiating. Antidifferentiating divides by ${k}$."),
         (rf"\frac{{{E_}}}{{{k}}}", r"This leaves out the value at the lower limit, $\dfrac{1}{" + str(k) + r"}e^{0} = \dfrac{1}{" + str(k) + "}$.")])
t67_exp.max = 1

def t67_net(r):
    v0 = r.choice([2, 4, 6]); x0 = r.choice([1, 3, -2]); T = r.choice([2, 3])
    v = 3 * t**2 - v0
    disp = I(v.subs(t, x), 0, T); pos = x0 + disp
    distinct(pos, disp, v.subs(t, T), x0 + v.subs(t, T))
    q = rf"A particle moves along a line with velocity $v(t) = {L(v)}$. At time $t = 0$ its position is ${x0}$. What is its position at time $t = {T}$?"
    return mk("6.7", "moderate", q, (num(pos), rf"Position at $t = {T}$ is ${x0} + \displaystyle\int_{{0}}^{{{T}}} \left({L(v)}\right)dt = {x0} + ({L(disp)}) = {L(pos)}$."),
        [(num(disp), rf"This is the displacement, $\displaystyle\int_{{0}}^{{{T}}} v(t)\,dt$. The starting position ${x0}$ must be added."),
         (num(v.subs(t, T)), rf"This is the velocity at $t = {T}$, not the position."),
         (num(x0 + v.subs(t, T)), r"This adds the velocity at the end to the starting position. The change in position is the integral of the velocity.")])
t67_net.max = 1

FP = {
    "z": Shape("z", [("seg", 0, 4, 2, 0), ("seg", 2, 0, 4, -2), ("seg", 4, -2, 6, 2)], (0, 6, -3, 5)),
    "q": Shape("q", [("arc", 0, 2, 1, 0, 2), ("seg", 2, 0, 5, -3), ("seg", 5, -3, 7, 3)], (0, 7, -4, 4)),
}

def fp_set(sh):
    return graph_set(f"c6x-fp-{sh.key}", sh, rf"The graph of $f'$, the derivative of a differentiable function $f$, on the interval ${sh.a} \le x \le {sh.b}$ is shown below. {sh.kinds()}", fname="f'", yname="y", name="The graph of f'")

def t67_fp(r):
    key_ = cyc("fp67", list(FP), r); sh = FP[key_]; sid = fp_set(sh)
    f0 = r.choice([2, 3, -1]); b = r.choice([v for v in sh.zeros() if v > 0 and v.q == 1] + [sh.b])
    val = f0 + sh.I(0, b)
    q = rf"If $f(0) = {f0}$, what is the value of $f({b})$?"
    wr = [(F(sh.I(0, b)), rf"This is $\displaystyle\int_{{0}}^{{{b}}} f'(x)\,dx = f({b}) - f(0)$, the change in $f$. The starting value $f(0) = {f0}$ must be added."),
          (F(f0 + sh.absI(0, b)), r"This adds the areas of all the regions. Where the graph of $f'$ is below the axis, $f$ decreases, so those areas are subtracted."),
          (F(f0 + sh.val(b)), rf"This adds $f'({b})$, a single value read from the graph, instead of the area under the graph of $f'$.")]
    if len(set([F(val)] + [w[0] for w in wr])) < 4: raise Skip("same")
    return mk("6.7", "moderate", q, (F(val), rf"By the Fundamental Theorem, $f({b}) = f(0) + \displaystyle\int_{{0}}^{{{b}}} f'(x)\,dx = {f0} + {paren(sh.I(0, b))} = {F(val)}$, using signed areas under the graph of $f'$."), wr, set_id=sid)
t67_fp.max = 2

def t67_fp_back(r):
    sh = FP["z"] if r.random() < 0.5 else FP["q"]; sid = fp_set(sh)
    inside = lambda v: any(p[0] == "arc" and p[4] < v < p[5] for p in sh.pieces)
    fb = r.choice([1, 4, -2]); a = r.choice([v for v in range(sh.a, sh.b) if v != 0 and not inside(v)])
    val = fb - sh.I(a, sh.b)
    q = rf"If $f({sh.b}) = {fb}$, what is the value of $f({a})$?"
    wr = [(F(fb + sh.I(a, sh.b)), rf"This adds the integral. Moving left from $x = {sh.b}$ to $x = {a}$ undoes the change, so $f({a}) = f({sh.b}) - \displaystyle\int_{{{a}}}^{{{sh.b}}} f'(x)\,dx$."),
          (F(fb - sh.absI(a, sh.b)), r"This subtracts the areas of all the regions as if they were positive. Area below the axis is a negative change in $f$."),
          (F(-sh.I(a, sh.b)), rf"This leaves out the known value $f({sh.b}) = {fb}$.")]
    if len(set([F(val)] + [w[0] for w in wr])) < 4: raise Skip("same")
    return mk("6.7", "difficult", q, (F(val), rf"$f({sh.b}) - f({a}) = \displaystyle\int_{{{a}}}^{{{sh.b}}} f'(x)\,dx = {F(sh.I(a, sh.b))}$ from the signed areas, so $f({a}) = {fb} - {paren(sh.I(a, sh.b))} = {F(val)}$."), wr, set_id=sid)
t67_fp_back.max = 1

def t67_table(r):
    xs = [1, 2, 4, 5]; fs = [r.choice(range(-3, 9)) for _ in xs]; dfs = [r.choice(range(-4, 6)) for _ in xs]
    k = r.choice([2, 3]); c = r.choice([1, 4]); i, j = r.choice([(0, 2), (1, 3), (0, 3)])
    a, b = xs[i], xs[j]
    sid = table_set(f"c6x-tf-{'-'.join(map(str, fs + dfs))}".replace("--", "-m"), "Values of f and f'", r"The function $f$ is differentiable, and $f'$ is continuous. Selected values of $f$ and $f'$ are shown in the table below.",
                    ["$x$"] + [f"${v}$" for v in xs], [["$f(x)$"] + [f"${v}$" for v in fs], ["$f'(x)$"] + [f"${v}$" for v in dfs]])
    val = k * (fs[j] - fs[i]) + c * (b - a)
    q = rf"What is the value of $\displaystyle\int_{{{a}}}^{{{b}}} \left({k}f'(x) + {c}\right)dx$?"
    wr = [(num(k * (dfs[j] - dfs[i]) + c * (b - a)), r"This uses values of $f'$ from the table. Since $f$ is an antiderivative of $f'$, the integral of $f'$ uses values of $f$."),
          (num(k * (fs[j] - fs[i]) + c), rf"This integrates the constant ${c}$ as ${c}$ instead of ${c}({b - a})$."),
          (num(fs[j] - fs[i] + c * (b - a)), rf"This leaves out the factor ${k}$ in front of $f'(x)$.")]
    distinct(val, *[w[0] for w in wr])
    return mk("6.7", "moderate", q, (num(val), rf"$\displaystyle\int_{{{a}}}^{{{b}}} f'(x)\,dx = f({b}) - f({a}) = {fs[j]} - ({fs[i]}) = {fs[j] - fs[i]}$, so the value is ${k}({fs[j] - fs[i]}) + {c}({b - a}) = {val}$."), wr, set_id=sid)
t67_table.max = 1

def t67_quot(r):
    a = r.choice([2, 3, 6]); lo, hi = r.choice([(1, 3), (1, 4), (2, 4)])
    fn = (x**2 - a) / x**2
    val = I(1 - a / x**2, lo, hi)
    sgn = I(1 + a / x**2, lo, hi)
    sep = I(x**2 - a, lo, hi) / I(x**2, lo, hi)
    avg = val / (hi - lo)
    distinct(val, sgn, sep, avg)
    q = rf"What is the value of $\displaystyle\int_{{{lo}}}^{{{hi}}} \frac{{x^{{2}} - {a}}}{{x^{{2}}}}\,dx$?"
    return mk("6.7", "moderate", q, (num(val), rf"Divide first: $\dfrac{{x^{{2}} - {a}}}{{x^{{2}}}} = 1 - {a}x^{{-2}}$, with antiderivative $x + \dfrac{{{a}}}{{x}}$. The value is $\left({hi} + {D(L(Rational(a, hi)))}\right) - \left({lo} + {D(L(Rational(a, lo)))}\right) = {L(val)}$."),
        [(num(sgn), rf"This uses $x - \dfrac{{{a}}}{{x}}$ as the antiderivative. The antiderivative of $-{a}x^{{-2}}$ is $+{a}x^{{-1}}$, since the new exponent $-1$ brings a negative sign."),
         (num(sep), r"This integrates the numerator and the denominator separately and divides. The integral of a quotient is not the quotient of the integrals."),
         (num(avg), rf"This divides by the length of the interval, ${hi - lo}$, which gives the average value of the integrand instead of the integral.")])
t67_quot.max = 1

def t67_k(r):
    a, b = r.choice([(1, 3), (1, 4), (2, 5)]); m = r.choice([2, 4]); k = r.choice([1, 3, -2])
    val = I(m * x + k, a, b)
    q = rf"If $\displaystyle\int_{{{a}}}^{{{b}}} ({m}x + k)\,dx = {val}$, what is the value of $k$?"
    base = I(m * x, a, b)
    wr = [(num(val - base), rf"This sets $\displaystyle\int_{{{a}}}^{{{b}}} k\,dx$ equal to $k$. Over an interval of length ${b - a}$, the constant contributes ${b - a}k$."),
          (num((val - I(m * x, 0, b)) / b), rf"This evaluates the antiderivative ${m // 2}x^{{2}} + kx$ at the upper limit ${b}$ only and leaves out its value at ${a}$."),
          (num((val + base) / (b - a)), r"This adds the $x$-term's integral to the given value instead of subtracting it.")]
    distinct(k, *[w[0] for w in wr])
    return mk("6.7", "moderate", q, (num(k), rf"$\displaystyle\int_{{{a}}}^{{{b}}} ({m}x + k)\,dx = \left[{m // 2}x^{{2}} + kx\right]_{{{a}}}^{{{b}}} = {base} + {b - a}k$. Setting ${base} + {b - a}k = {val}$ gives $k = {k}$."), wr)
t67_k.max = 1

# ---------------------------------------------------------------- 6.8 antiderivatives
def t68_power(r):
    n, c, kind = cyc("power", [(2, 3, "mult"), (4, 5, "mult"), (-3, 4, "deriv")], r)
    fn = c * x**n; Fx = integrate(fn, x)
    w1 = c * x**(n + 1); w2 = diff(fn, x); w3 = c * x**(n + 1) / n; w4 = c * (n + 1) * x**(n + 1)
    distinct(Fx, w1, w2, w3, w4)
    q = rf"$\displaystyle\int {L(fn)}\,dx =$"
    second = (L(w2) + " + C", r"This is the derivative, not an antiderivative.") if kind == "deriv" else (L(w4) + " + C", rf"This multiplies by the new exponent, ${n + 1}$, instead of dividing by it.")
    return mk("6.8", "easy", q, (L(Fx) + " + C", rf"Raise the exponent by one and divide by the new exponent: ${L(Fx)} + C$. Differentiating gives back ${L(fn)}$."),
        [(L(w1) + " + C", r"This raises the exponent but does not divide by the new exponent."),
         second,
         (L(w3) + " + C", rf"This divides by the old exponent, ${n}$, instead of the new one, ${n + 1}$.")])
t68_power.max = 3

def t68_trig(r):
    k = r.choice([2, 3, 4, 5]); fn = r.choice(["sin", "cos"])
    kx = f"{k}x"
    if cyc("trig68", ["plain", "exact"], r) == "exact":
        q = rf"$\displaystyle\int {k}\cos({kx})\,dx =$"
        return mk("6.8", "easy", q, (rf"\sin({kx}) + C", rf"The derivative of $\sin({kx})$ is ${k}\cos({kx})$, so $\sin({kx}) + C$ is the antiderivative. The factor ${k}$ is exactly the chain rule factor."),
            [(rf"{k}\sin({kx}) + C", rf"This keeps the factor ${k}$ and does not divide by ${k}$ for the inside function. The derivative of ${k}\sin({kx})$ is ${k * k}\cos({kx})$."),
             (rf"\frac{{1}}{{{k}}}\sin({kx}) + C", rf"This divides by ${k}$ but drops the factor ${k}$ in front of the cosine. The two cancel, leaving $\sin({kx})$."),
             (rf"-\sin({kx}) + C", r"The antiderivative of $\cos u$ is $\sin u$, with no negative sign.")])
    if fn == "sin":
        right = rf"-\frac{{1}}{{{k}}}\cos({kx}) + C"
        wr = [(rf"\frac{{1}}{{{k}}}\cos({kx}) + C", r"The antiderivative of $\sin u$ is $-\cos u$; the negative sign is missing."),
              (rf"-{k}\cos({kx}) + C", rf"This multiplies by ${k}$, as when differentiating. Antidifferentiating divides by ${k}$."),
              (rf"-\cos({kx}) + C", rf"This leaves out the factor $\dfrac{{1}}{{{k}}}$. The derivative of $-\cos({kx})$ is ${k}\sin({kx})$.")]
    else:
        right = rf"\frac{{1}}{{{k}}}\sin({kx}) + C"
        wr = [(rf"-\frac{{1}}{{{k}}}\sin({kx}) + C", r"The antiderivative of $\cos u$ is $\sin u$, with no negative sign."),
              (rf"{k}\sin({kx}) + C", rf"This multiplies by ${k}$, as when differentiating. Antidifferentiating divides by ${k}$."),
              (rf"\sin({kx}) + C", rf"This leaves out the factor $\dfrac{{1}}{{{k}}}$. The derivative of $\sin({kx})$ is ${k}\cos({kx})$.")]
    q = rf"$\displaystyle\int \{fn}({kx})\,dx =$"
    d = rf"$-\cos({kx})$ is ${k}\sin({kx})$" if fn == "sin" else rf"$\sin({kx})$ is ${k}\cos({kx})$"
    return mk("6.8", "easy", q, (right, rf"The derivative of {d}, so divide by ${k}$."), wr)
t68_trig.max = 2

def t68_recip(r):
    k = r.choice([2, 3, 5, 7])
    q = rf"$\displaystyle\int \frac{{{k}}}{{x}}\,dx =$"
    return mk("6.8", "easy", q, (rf"{k}\ln|x| + C", rf"The antiderivative of $\dfrac{{1}}{{x}}$ is $\ln|x|$, and the constant ${k}$ stays as a factor."),
        [(rf"-\frac{{{k}}}{{x^{{2}}}} + C", rf"This is the derivative of $\dfrac{{{k}}}{{x}}$, not an antiderivative."),
         (rf"\frac{{1}}{{{k}}}\ln|x| + C", rf"This divides by ${k}$. A constant factor stays as a multiplier."),
         (rf"\frac{{{k}x^{{2}}}}{{2}} + C", rf"This integrates $\dfrac{{{k}}}{{x}}$ as if it were ${k}x$. The antiderivative of $\dfrac{{1}}{{x}}$ is $\ln|x|$.")])
t68_recip.max = 1

def t68_exp(r):
    k = r.choice([2, 3, 4, 5])
    ek = f"e^{{{k}x}}"
    if cyc("exp68", ["plain", "exact"], r) == "exact":
        return mk("6.8", "easy", rf"$\displaystyle\int {k}{ek}\,dx =$", (rf"{ek} + C", rf"The derivative of ${ek}$ is ${k}{ek}$, which is the integrand."),
            [(rf"{k}{ek} + C", rf"This keeps the factor ${k}$. The derivative of ${k}{ek}$ is ${k * k}{ek}$."),
             (rf"\frac{{1}}{{{k}}}{ek} + C", rf"This divides by ${k}$ but drops the factor ${k}$ in front. The two cancel."),
             (rf"{k * k}{ek} + C", rf"This multiplies by ${k}$ again, as when differentiating.")])
    return mk("6.8", "easy", rf"$\displaystyle\int {ek}\,dx =$", (rf"\frac{{1}}{{{k}}}{ek} + C", rf"The derivative of ${ek}$ is ${k}{ek}$, so divide by ${k}$."),
        [(rf"{ek} + C", rf"The factor $\dfrac{{1}}{{{k}}}$ is missing. The derivative of ${ek}$ is ${k}{ek}$."),
         (rf"{k}{ek} + C", rf"This multiplies by ${k}$, as when differentiating. Antidifferentiating divides by ${k}$."),
         (rf"\frac{{e^{{{k}x + 1}}}}{{{k}x + 1}} + C", r"This applies the power rule to an exponential. The power rule is for a variable base, not a variable exponent.")])
t68_exp.max = 2

def t68_sum(r):
    a = r.choice([2, 4, 6, 8]); b = r.choice([3, 5]); c = r.choice([1, 7, 2])
    fn = a * x**3 - b * cos(x) + c
    Fx = integrate(fn, x)
    w1 = Rational(a, 4) * x**4 + b * sin(x) + c * x; w2 = Rational(a, 4) * x**4 - b * sin(x); w3 = 3 * a * x**2 + b * sin(x)
    q = rf"$\displaystyle\int \left({a}x^{{3}} - {b}\cos x + {c}\right)dx =$"
    return mk("6.8", "easy", q, (L(Fx) + " + C", r"Integrate term by term: $x^{3}$ becomes $\dfrac{x^{4}}{4}$, $\cos x$ becomes $\sin x$, and a constant $c$ becomes $cx$."),
        [(L(w1) + " + C", r"The antiderivative of $-\cos x$ is $-\sin x$; this has the wrong sign."),
         (L(w2) + " + C", rf"The constant ${c}$ integrates to ${c}x$, not $0$." if c != 1 else r"The constant $1$ integrates to $x$, not $0$."),
         (L(w3) + " + C", r"This differentiates the polynomial term and only antidifferentiates the cosine term.")])
t68_sum.max = 2

def t68_rewrite(r):
    a, n, b = cyc("rewrite", [(6, 4, 2), (10, 6, 1), (8, 5, 1)], r)
    root = r"\sqrt[3]{x}" if b == 1 else r"\sqrt{x}"
    p = Rational(1, 3) if b == 1 else Rational(1, 2)
    fn = a * x**(-n) + x**p
    Fx = integrate(fn, x)
    w1 = a * x**(-n + 1) / (n - 1) + x**(p + 1) / (p + 1)   # sign error on negative power
    w2 = a * x**(-n - 1) / (-n - 1) + x**(p - 1) / (p - 1)  # exponent lowered
    w3 = a * x**(-n + 1) / (-n + 1) + x**(p + 1) * (p + 1)  # multiplied by new exponent on the root term
    distinct(Fx, w1, w2, w3)
    q = rf"$\displaystyle\int \left(\frac{{{a}}}{{x^{{{n}}}}} + {root}\right)dx =$"
    return mk("6.8", "moderate", q, (L(Fx) + " + C", rf"Rewrite as ${a}x^{{{-n}}} + x^{{{L(p)}}}$, then raise each exponent by one and divide by the new exponent: ${L(Fx)} + C$."),
        [(L(w1) + " + C", rf"This divides by ${n - 1}$ instead of $-{n - 1}$. The new exponent of ${a}x^{{{-n}}}$ is ${-n + 1}$, which is negative."),
         (L(w2) + " + C", r"This lowers each exponent by one, as when differentiating. Antidifferentiating raises it by one."),
         (L(w3) + " + C", rf"This multiplies the root term by its new exponent $\dfrac{{{(p + 1).p}}}{{{(p + 1).q}}}$ instead of dividing by it.")])
t68_rewrite.max = 2

def t68_ivp(r):
    c2, c1 = r.choice([6, 12]), r.choice([1, -4, 5]); x0 = r.choice([1, 2]); y0 = r.choice([5, -1, 2]); X = r.choice([0, 3])
    fp = c2 * x**2 + c1
    Fx = integrate(fp, x); C = y0 - Fx.subs(x, x0); val = Fx.subs(x, X) + C
    distinct(val, Fx.subs(x, X), Fx.subs(x, X) + y0, fp.subs(x, X))
    q = rf"If $f'(x) = {L(fp)}$ and $f({x0}) = {y0}$, what is the value of $f({X})$?"
    return mk("6.8", "moderate", q, (num(val), rf"$f(x) = {L(Fx)} + C$, and $f({x0}) = {y0}$ gives $C = {L(C)}$. Then $f({X}) = {L(val)}$."),
        [(num(Fx.subs(x, X)), r"This leaves out the constant $C$ from the antiderivative."),
         (num(Fx.subs(x, X) + y0), rf"This uses $C = {y0}$. The constant comes from solving $f({x0}) = {y0}$, so $C = {L(C)}$."),
         (num(fp.subs(x, X)), rf"This is $f'({X})$, not $f({X})$.")])
t68_ivp.max = 2

def t68_ivp2(r):
    a, b = r.choice([(6, -2), (12, 6), (6, 4)]); s1 = r.choice([1, 3, -2]); s0 = r.choice([2, -1, 5]); X = 2
    fpp = a * x + b
    fp_ = integrate(fpp, x); C1 = s1 - fp_.subs(x, 0)
    fx_ = integrate(fp_ + C1, x); C2 = s0 - fx_.subs(x, 1)
    val = fx_.subs(x, X) + C2
    noC1 = integrate(fp_, x); w1 = noC1.subs(x, X) + (s0 - noC1.subs(x, 1))
    w2 = fx_.subs(x, X)
    w3 = fp_.subs(x, X) + C1
    distinct(val, w1, w2, w3)
    q = rf"The function $f$ satisfies $f''(x) = {L(fpp)}$, $f'(0) = {s1}$, and $f(1) = {s0}$. What is the value of $f({X})$?"
    return mk("6.8", "difficult", q, (num(val), rf"$f'(x) = {L(fp_)} + C_1$ and $f'(0) = {s1}$ give $f'(x) = {L(fp_ + C1)}$. Then $f(x) = {L(fx_)} + C_2$, and $f(1) = {s0}$ gives $C_2 = {L(C2)}$. So $f({X}) = {L(val)}$."),
        [(num(w1), rf"This leaves out the constant $C_1$ from $f'(0) = {s1}$."),
         (num(w2), rf"This leaves out the constant $C_2$ from $f(1) = {s0}$."),
         (num(w3), rf"This is $f'({X})$. A second antiderivative is needed to get $f$.")])
t68_ivp2.max = 1

def t68_back(r):
    g, tex, dg = r.choice([(x**2 * sin(x), r"x^{2}\sin x", None), (exp(x**2), r"e^{x^{2}}", None), (x * log(x), r"x\ln x", None)])
    d = diff(g, x)
    q = rf"If $\displaystyle\int f(x)\,dx = {tex} + C$, then $f(x) =$"
    if g == x**2 * sin(x):
        wr = [(r"2x\cos x", r"This multiplies the derivatives of the two factors. The product rule gives $2x\sin x + x^{2}\cos x$."),
              (r"x^{2}\cos x", r"This differentiates only the factor $\sin x$. The product rule also has the term $2x\sin x$."),
              (r"\frac{x^{3}}{3}\left(-\cos x\right)", r"This antidifferentiates the given function. $f$ is its derivative, since the integral of $f$ is the given function.")]
        key = r"2x\sin x + x^{2}\cos x"
    elif g == exp(x**2):
        wr = [(r"e^{x^{2}}", r"This leaves out the chain rule factor $2x$."),
              (r"x^{2}e^{x^{2} - 1}", r"This uses the power rule on an exponential function."),
              (r"\frac{e^{x^{2}}}{2x}", r"This divides by $2x$ as if antidifferentiating. $f$ is the derivative of the given function.")]
        key = r"2xe^{x^{2}}"
    else:
        wr = [(r"\frac{1}{x}", r"This multiplies the derivatives of the two factors. The product rule gives $\ln x + x \cdot \dfrac{1}{x}$."),
              (r"\ln x", r"This differentiates only the factor $x$. The product rule also has the term $x \cdot \dfrac{1}{x} = 1$."),
              (r"\frac{x^{2}}{2}\ln x", r"This antidifferentiates the factor $x$ instead of differentiating the given function.")]
        key = r"\ln x + 1"
    assert simplify(sympify(d) - sympify({r"2x\sin x + x^{2}\cos x": 2 * x * sin(x) + x**2 * cos(x), r"2xe^{x^{2}}": 2 * x * exp(x**2), r"\ln x + 1": log(x) + 1}[key])) == 0
    return mk("6.8", "moderate", q, (key, rf"If $\displaystyle\int f(x)\,dx = {tex} + C$, then $f$ is the derivative of ${tex}$: $f(x) = {key}$."), wr)
t68_back.max = 1

def t68_sectan(r):
    a, b = r.choice([(2, 3), (3, 2), (4, 5)])
    q = rf"$\displaystyle\int \left({a}\sec x\tan x + {b}\csc^{{2}}x\right)dx =$"
    return mk("6.8", "easy", q, (rf"{a}\sec x - {b}\cot x + C", rf"$\dfrac{{d}}{{dx}}\sec x = \sec x\tan x$ and $\dfrac{{d}}{{dx}}\cot x = -\csc^{{2}}x$, so the antiderivative is ${a}\sec x - {b}\cot x + C$."),
        [(rf"{a}\sec x + {b}\cot x + C", r"The derivative of $\cot x$ is $-\csc^{2}x$, so an antiderivative of $\csc^{2}x$ is $-\cot x$."),
         (rf"{a}\tan x - {b}\cot x + C", r"The derivative of $\tan x$ is $\sec^{2}x$, not $\sec x\tan x$."),
         (rf"-{a}\sec x - {b}\cot x + C", r"The derivative of $\sec x$ is $+\sec x\tan x$, so no negative sign belongs on $\sec x$.")])
t68_sectan.max = 1

def t68_twoF(r):
    a, b = r.choice([(3, -1), (5, 2), (-2, 4)]); X = r.choice([4, 7])
    q = rf"The functions $F$ and $G$ are both antiderivatives of the same continuous function $f$, with $F(0) = {a}$ and $G(0) = {b}$. What is the value of $F({X}) - G({X})$?"
    distinct(a - b, 0, a + b, b - a)
    return mk("6.8", "moderate", q, (num(a - b), rf"Two antiderivatives of the same function differ by a constant, so $F(x) - G(x)$ is the same for every $x$: $F({X}) - G({X}) = F(0) - G(0) = {a - b}$."),
        [("0", r"Antiderivatives of the same function need not be equal; they can differ by a constant."),
         (num(a + b), r"This adds the two values. The difference $F - G$ is constant, so subtract."),
         (num(b - a), r"This subtracts in the wrong order: $F(0) - G(0)$, not $G(0) - F(0)$.")])
t68_twoF.max = 1

# ---------------------------------------------------------------- 6.9 substitution
def t69_poly(r):
    n = r.choice([3, 4, 5]); c = r.choice([1, 4, -3]); a = 1 if cyc("poly69", ["one", "exact"], r) == "one" else 2 * (n + 1)
    inner = x**2 + c
    if a == 1:
        q = rf"$\displaystyle\int 2x\left({L(inner)}\right)^{{{n}}}\,dx =$"
        key = rf"\frac{{1}}{{{n + 1}}}\left({L(inner)}\right)^{{{n + 1}}} + C"
        wr = [(rf"\frac{{1}}{{{2 * (n + 1)}}}\left({L(inner)}\right)^{{{n + 1}}} + C", r"This divides by $2$ as if $du = x\,dx$. Here $du = 2x\,dx$ exactly, so no constant adjustment is needed."),
              (rf"\frac{{x^{{2}}}}{{{n + 1}}}\left({L(inner)}\right)^{{{n + 1}}} + C", r"This antidifferentiates the factor $2x$ and the power separately and multiplies the results."),
              (rf"{2 * n}x\left({L(inner)}\right)^{{{n - 1}}} + C", r"This lowers the exponent, as when differentiating. Antidifferentiating raises it.")]
        return mk("6.9", "easy", q, (key, rf"Let $u = {L(inner)}$, so $du = 2x\,dx$. Then $\displaystyle\int u^{{{n}}}\,du = \dfrac{{u^{{{n + 1}}}}}{{{n + 1}}} + C$."), wr)
    q = rf"$\displaystyle\int {a}x\left({L(inner)}\right)^{{{n}}}\,dx =$"
    cf = Rational(a, 2 * (n + 1))
    P = rf"\left({L(inner)}\right)^{{{n + 1}}}"
    key = co(cf, P) + " + C"
    wr = [(co(Rational(2 * a, n + 1), P) + " + C", rf"This multiplies by $2$ instead of dividing. Since $du = 2x\,dx$, $x\,dx = \dfrac{{1}}{{2}}du$."),
          (co(Rational(a, n + 1), P) + " + C", r"This leaves out the factor $\dfrac{1}{2}$ from $x\,dx = \dfrac{1}{2}du$."),
          (co(cf, "x^{2}" + P) + " + C", r"After the substitution no $x$ remains; the factor $x$ is part of $du$.")]
    distinct(cf, Rational(2 * a, n + 1), Rational(a, n + 1))
    return mk("6.9", "easy", q, (key, rf"Let $u = {L(inner)}$, so $x\,dx = \dfrac{{1}}{{2}}du$. Then ${L(Rational(a, 2))}\displaystyle\int u^{{{n}}}\,du = " + co(cf, f"u^{{{n + 1}}}") + " + C$."), wr)
t69_poly.max = 2

def t69_trig(r):
    k = r.choice([2, 3])
    if k == 2:
        q = r"$\displaystyle\int x\cos\left(x^{2}\right)dx =$"
        return mk("6.9", "easy", q, (r"\frac{1}{2}\sin\left(x^{2}\right) + C", r"Let $u = x^{2}$, so $x\,dx = \dfrac{1}{2}du$ and the integral is $\dfrac{1}{2}\displaystyle\int \cos u\,du = \dfrac{1}{2}\sin u + C$."),
            [(r"-\frac{1}{2}\sin\left(x^{2}\right) + C", r"The antiderivative of $\cos u$ is $\sin u$, with no negative sign."),
             (r"\frac{1}{2x}\sin\left(x^{2}\right) + C", r"This divides by $2x$, the derivative of the inside, as if it were a constant. The $x$ in the integrand is part of $du$, so only $\dfrac{1}{2}$ is left."),
             (r"\frac{x^{2}}{2}\sin\left(x^{2}\right) + C", r"This antidifferentiates the factor $x$ and the cosine separately and multiplies the results.")])
    q = r"$\displaystyle\int x^{2}\sin\left(x^{3}\right)dx =$"
    return mk("6.9", "easy", q, (r"-\frac{1}{3}\cos\left(x^{3}\right) + C", r"Let $u = x^{3}$, so $x^{2}\,dx = \dfrac{1}{3}du$ and the integral is $\dfrac{1}{3}\displaystyle\int \sin u\,du = -\dfrac{1}{3}\cos u + C$."),
        [(r"\frac{1}{3}\cos\left(x^{3}\right) + C", r"The antiderivative of $\sin u$ is $-\cos u$; the negative sign is missing."),
         (r"-3\cos\left(x^{3}\right) + C", r"This multiplies by $3$. Since $du = 3x^{2}\,dx$, $x^{2}\,dx = \dfrac{1}{3}du$."),
         (r"-\cos\left(x^{3}\right) + C", r"This leaves out the factor $\dfrac{1}{3}$.")])
t69_trig.max = 2

def t69_ln(r):
    kind = cyc("ln69", ["x", "exact"], r)
    if kind == "x":
        a, b = r.choice([(1, 9), (2, 5), (3, 2)])
        inner = a * x**2 + b; k = 2 * a
        q = rf"$\displaystyle\int \frac{{x}}{{{L(inner)}}}\,dx =$"
        return mk("6.9", "easy", q, (rf"\frac{{1}}{{{k}}}\ln\left({L(inner)}\right) + C", rf"Let $u = {L(inner)}$, so $x\,dx = \dfrac{{1}}{{{k}}}du$ and the integral is $\dfrac{{1}}{{{k}}}\displaystyle\int \dfrac{{du}}{{u}}$. Since ${L(inner)} > 0$, no absolute value is needed."),
            [(rf"\ln\left({L(inner)}\right) + C", rf"The factor $\dfrac{{1}}{{{k}}}$ from $du = {k}x\,dx$ is missing."),
             (rf"{k}\ln\left({L(inner)}\right) + C", rf"This multiplies by ${k}$ instead of dividing."),
             (rf"\frac{{x^{{2}}}}{{2}}\ln\left({L(inner)}\right) + C", r"This antidifferentiates the numerator and the denominator separately and multiplies the results.")])
    c = r.choice([1, 4, 7])
    q = rf"$\displaystyle\int \frac{{2x + 1}}{{x^{{2}} + x + {c}}}\,dx =$"
    return mk("6.9", "easy", q, (rf"\ln\left(x^{{2}} + x + {c}\right) + C", rf"The numerator is the derivative of the denominator. With $u = x^{{2}} + x + {c}$, the integral is $\displaystyle\int \dfrac{{du}}{{u}} = \ln|u| + C$, and $u > 0$ for every $x$."),
        [(rf"\frac{{1}}{{2}}\ln\left(x^{{2}} + x + {c}\right) + C", r"This divides by $2$ as if $du = 2x\,dx$. Here $du = (2x + 1)\,dx$, which is the whole numerator."),
         (rf"-\frac{{1}}{{\left(x^{{2}} + x + {c}\right)^{{2}}}} + C", r"This differentiates $u^{-1}$ instead of antidifferentiating it. The antiderivative of $u^{-1}$ is $\ln|u|$."),
         (rf"\left(x^{{2}} + x\right)\ln\left(x^{{2}} + x + {c}\right) + C", r"This antidifferentiates the numerator and multiplies by a logarithm. The numerator is $du$, so it disappears into the substitution.")])
t69_ln.max = 2

def t69_def(r):
    n = r.choice([3, 4]); b = r.choice([1, 2])
    fn = 2 * x * (x**2 + 1)**n
    val = I(fn, 0, b); ub = b**2 + 1
    wrong_lim = integrate(t**n, (t, 0, b)); upper_only = Rational(ub**(n + 1), n + 1); half = val / 2
    distinct(val, wrong_lim, upper_only, half)
    q = rf"What is the value of $\displaystyle\int_{{0}}^{{{b}}} 2x\left(x^{{2}} + 1\right)^{{{n}}}dx$?"
    return mk("6.9", "moderate", q, (num(val), rf"Let $u = x^{{2}} + 1$, so $du = 2x\,dx$. When $x = 0$, $u = 1$; when $x = {b}$, $u = {ub}$. The value is $\displaystyle\int_{{1}}^{{{ub}}} u^{{{n}}}\,du = \dfrac{{{ub}^{{{n + 1}}} - 1}}{{{n + 1}}} = {L(val)}$."),
        [(num(wrong_lim), rf"This keeps the $x$-limits $0$ and ${b}$ after changing to $u$. The limits must be changed to $u = 1$ and $u = {ub}$."),
         (num(upper_only), r"This leaves out the value at the lower limit. When $x = 0$, $u = 1$, not $0$, so $\dfrac{1}{" + str(n + 1) + r"}(1)^{" + str(n + 1) + "}$ must be subtracted."),
         (num(half), r"This divides by $2$, as if $du$ were $x\,dx$. Here $du = 2x\,dx$ is already in the integrand.")])
t69_def.max = 2

def t69_exp(r):
    k = r.choice([2, 3])
    q = r"$\displaystyle\int xe^{x^{2}}\,dx =$" if k == 2 else r"$\displaystyle\int x^{2}e^{x^{3}}\,dx =$"
    xk = f"x^{{{k}}}"
    return mk("6.9", "easy", q, (rf"\frac{{1}}{{{k}}}e^{{{xk}}} + C", rf"Let $u = {xk}$, so $du = {k}x^{{{k - 1}}}\,dx$ and the integral is $\dfrac{{1}}{{{k}}}\displaystyle\int e^{{u}}\,du = \dfrac{{1}}{{{k}}}e^{{u}} + C$.".replace("x^{1}", "x")),
        [(rf"\frac{{1}}{{{k}x^{{{k - 1}}}}}e^{{{xk}}} + C".replace("x^{1}", "x"), rf"This divides by ${k}x^{{{k - 1}}}$, the derivative of the inside, as if it were a constant. The power of $x$ in the integrand is part of $du$.".replace("x^{1}", "x")),
         (rf"\frac{{e^{{{xk} + 1}}}}{{{xk} + 1}} + C", r"This applies the power rule to an exponential. The variable is in the exponent, so the power rule does not apply."),
         (rf"\frac{{x^{{{k}}}}}{{{k}}}e^{{{xk}}} + C", r"This antidifferentiates the power of $x$ and the exponential separately and multiplies the results.")])
t69_exp.max = 1

def t69_lnx(r):
    n = r.choice([2, 3]); top = r.choice([1, 2])
    E_ = "e" if top == 1 else "e^{2}"
    val = Rational(top**(n + 1), n + 1)
    q = rf"What is the value of $\displaystyle\int_{{1}}^{{{E_}}} \frac{{(\ln x)^{{{n}}}}}{{x}}\,dx$?"
    wr = [(num(Rational(top**n, n)) if n > 1 else "1", rf"This uses $\dfrac{{u^{{{n}}}}}{{{n}}}$ as the antiderivative of $u^{{{n}}}$. The exponent goes up to ${n + 1}$, and the division is by ${n + 1}$."),
          (num(n * top**(n - 1)), rf"This differentiates $u^{{{n}}}$ instead of antidifferentiating it."),
          (rf"\frac{{e^{{{top * (n + 1)}}} - 1}}{{{n + 1}}}", r"This keeps the $x$-limits $1$ and $" + E_ + r"$ in place of the $u$-limits $\ln 1 = 0$ and $\ln " + E_ + " = " + str(top) + "$.")]
    distinct(val, Rational(top**n, n), n * top**(n - 1), (exp(top) ** (n + 1) - 1) / (n + 1))
    return mk("6.9", "moderate", q, (num(val), rf"Let $u = \ln x$, so $du = \dfrac{{dx}}{{x}}$. When $x = 1$, $u = 0$; when $x = {E_}$, $u = {top}$. The value is $\displaystyle\int_{{0}}^{{{top}}} u^{{{n}}}\,du = {L(val)}$."), wr)
t69_lnx.max = 1

def t69_back(r):
    c = r.choice([1, 2, 3]); n = r.choice([4, 5])
    u = x - c
    cc = Rational(c, n + 1)
    second = rf"\frac{{(x - {c})^{{{n + 1}}}}}{{{cc.q}}}" if cc.p == 1 else rf"\frac{{{cc.p}(x - {c})^{{{n + 1}}}}}{{{cc.q}}}" if cc.q != 1 else rf"{cc.p}(x - {c})^{{{n + 1}}}"
    key = rf"\frac{{(x - {c})^{{{n + 2}}}}}{{{n + 2}}} + {second} + C"
    Fk = (x - c)**(n + 2) / (n + 2) + c * (x - c)**(n + 1) / (n + 1)
    assert simplify(diff(Fk, x) - x * (x - c)**n) == 0
    q = rf"$\displaystyle\int x(x - {c})^{{{n}}}\,dx =$"
    return mk("6.9", "difficult", q, (key, rf"Let $u = x - {c}$, so $x = u + {c}$ and $du = dx$. Then $\displaystyle\int (u + {c})u^{{{n}}}\,du = \displaystyle\int \left(u^{{{n + 1}}} + {'' if c == 1 else c}u^{{{n}}}\right)du = \dfrac{{u^{{{n + 2}}}}}{{{n + 2}}} + \dfrac{{{'' if c == 1 else c}u^{{{n + 1}}}}}{{{n + 1}}} + C$."),
        [(rf"\frac{{x(x - {c})^{{{n + 1}}}}}{{{n + 1}}} + C", r"This treats the factor $x$ as a constant. It is not constant, so it must be written in terms of $u$ before integrating."),
         (rf"\frac{{(x - {c})^{{{n + 2}}}}}{{{n + 2}}} + C", rf"This writes $x$ as $u$ instead of $u + {c}$, leaving out the second term."),
         (rf"\frac{{x^{{2}}(x - {c})^{{{n + 1}}}}}{{{2 * (n + 1)}}} + C", r"This antidifferentiates the two factors separately and multiplies. The antiderivative of a product is not the product of antiderivatives.")])
t69_back.max = 1

def t69_rewrite(r):
    kind = cyc("rewrite69", ["root", "cos"], r)
    I_ = lambda c, lo, hi, f: rf"${c}\displaystyle\int_{{{lo}}}^{{{hi}}} {f}\,du$"
    if kind == "root":
        b = r.choice([4, 9]); sb = int(sqrt(b))
        q = rf"Using the substitution $u = 1 + \sqrt{{x}}$, the integral $\displaystyle\int_{{1}}^{{{b}}} \frac{{\left(1 + \sqrt{{x}}\right)^{{2}}}}{{\sqrt{{x}}}}\,dx$ is equal to which of the following?"
        return mk("6.9", "difficult", q, (text_choice(I_("2", 2, 1 + sb, "u^{2}")), rf"$du = \dfrac{{1}}{{2\sqrt{{x}}}}\,dx$, so $\dfrac{{dx}}{{\sqrt{{x}}}} = 2\,du$. The limits change: $x = 1$ gives $u = 2$ and $x = {b}$ gives $u = {1 + sb}$."),
            [(text_choice(I_("2", 1, b, "u^{2}")), rf"This keeps the $x$-limits. In terms of $u$, the limits are $u = 1 + \sqrt{{1}} = 2$ and $u = 1 + \sqrt{{{b}}} = {1 + sb}$."),
             (text_choice(I_(r"\frac{1}{2}", 2, 1 + sb, "u^{2}")), r"This uses $\dfrac{1}{2}$ instead of $2$. Since $du = \dfrac{dx}{2\sqrt{x}}$, the factor $\dfrac{dx}{\sqrt{x}}$ equals $2\,du$."),
             (text_choice(I_("2", 1, sb, "u^{2}")), rf"This uses $u = \sqrt{{x}}$ for the limits and forgets the $1$: at $x = 1$, $u = 2$, and at $x = {b}$, $u = {1 + sb}$.")])
    a = r.choice([("\\pi/3", "\\frac{1}{2}", "\\dfrac{\\pi}{3}"), ("\\pi/2", "0", "\\dfrac{\\pi}{2}")])
    q = rf"Using the substitution $u = \cos x$, the integral $\displaystyle\int_{{0}}^{{{a[0]}}} \sin x\sqrt{{\cos x}}\,dx$ is equal to which of the following?"
    return mk("6.9", "difficult", q, (text_choice(I_("", a[1], 1, r"\sqrt{u}")), rf"$du = -\sin x\,dx$, so the integral is $-\displaystyle\int_{{1}}^{{{a[1]}}} \sqrt{{u}}\,du$, since $\cos 0 = 1$ and $\cos {a[2]} = {a[1]}$. Reversing the limits removes the negative sign: $\displaystyle\int_{{{a[1]}}}^{{1}} \sqrt{{u}}\,du$."),
        [(text_choice(I_("", 1, a[1], r"\sqrt{u}")), r"This changes the limits but drops the negative sign from $du = -\sin x\,dx$."),
         (text_choice(I_("-", a[1], 1, r"\sqrt{u}")), r"This uses the negative sign and also reverses the limits. Either one alone accounts for the sign; using both changes the sign twice."),
         (text_choice(I_("-", 0, a[0], r"\sqrt{u}")), r"This keeps the $x$-limits. In terms of $u$, the limits are $\cos 0 = 1$ and $\cos$ of the upper limit.")])
t69_rewrite.max = 2

def t69_generic(r):
    k, sh = r.choice([(3, 1), (2, 1), (2, 3)]); top = r.choice([1, 2])
    lo, hi = sh, k * top + sh
    A = r.choice([9, 12, 6]); B = r.choice([2, 4])  # integral from lo to hi is A; integral from 0 to lo is B
    q = rf"The function $f$ is continuous, $\displaystyle\int_{{0}}^{{{lo}}} f(x)\,dx = {B}$, and $\displaystyle\int_{{0}}^{{{hi}}} f(x)\,dx = {A + B}$. What is the value of $\displaystyle\int_{{0}}^{{{top}}} f({k}x + {sh})\,dx$?"
    val = Rational(A, k)
    wr = [(num(k * A), rf"This multiplies by ${k}$. With $u = {k}x + {sh}$, $du = {k}\,dx$, so $dx = \dfrac{{1}}{{{k}}}du$."),
          (num(A), rf"This leaves out the factor $\dfrac{{1}}{{{k}}}$ from $dx = \dfrac{{1}}{{{k}}}du$."),
          (num(Rational(A + B, k)), rf"This changes only the upper limit. At $x = 0$, $u = {sh}$, so the integral runs from $u = {sh}$, not $u = 0$.")]
    distinct(val, *[w[0] for w in wr])
    return mk("6.9", "difficult", q, (num(val), rf"Let $u = {k}x + {sh}$, so $dx = \dfrac{{1}}{{{k}}}du$, and $u$ runs from ${lo}$ to ${hi}$. The value is $\dfrac{{1}}{{{k}}}\displaystyle\int_{{{lo}}}^{{{hi}}} f(u)\,du = \dfrac{{1}}{{{k}}}\left({A + B} - {B}\right) = {L(val)}$."), wr)
t69_generic.max = 1

def t69_ivp(r):
    c = r.choice([1, 3, 8]); f0 = r.choice([2, -1, 4])
    # f'(x) = 3x^2 sqrt(x^3 + 1), f(0) = f0, find f(2): (2/3)((9)^{3/2} - 1) = 52/3
    X = 2; up = X**3 + 1
    ch = I(3 * x**2 * sqrt(x**3 + 1), 0, X)
    val = f0 + ch
    wr = [(num(ch), r"This is the change in $f$ from $x = 0$ to $x = 2$. The starting value $f(0)$ must be added."),
          (num(f0 + Rational(2, 3) * up**Rational(3, 2)), r"This leaves out the value at the lower limit. When $x = 0$, $u = 1$, so $\dfrac{2}{3}(1)^{3/2}$ must be subtracted."),
          (num(f0 + Rational(3, 2) * (up**Rational(3, 2) - 1)), r"This multiplies by $\dfrac{3}{2}$ instead of dividing by it. The antiderivative of $u^{1/2}$ is $\dfrac{2}{3}u^{3/2}$.")]
    distinct(val, *[w[0] for w in wr])
    q = rf"The function $f$ satisfies $f'(x) = 3x^{{2}}\sqrt{{x^{{3}} + 1}}$ and $f(0) = {f0}$. What is the value of $f(2)$?"
    return mk("6.9", "difficult", q, (num(val), rf"$f(2) = f(0) + \displaystyle\int_{{0}}^{{2}} 3x^{{2}}\sqrt{{x^{{3}} + 1}}\,dx$. With $u = x^{{3}} + 1$, $du = 3x^{{2}}\,dx$ and $u$ runs from $1$ to $9$: $\displaystyle\int_{{1}}^{{9}} u^{{1/2}}\,du = \dfrac{{2}}{{3}}(27 - 1) = \dfrac{{52}}{{3}}$. So $f(2) = {f0} + \dfrac{{52}}{{3}} = {L(val)}$."), wr)
t69_ivp.max = 1

# ---------------------------------------------------------------- 6.10 long division and completing the square
def t610_div(r):
    kind = cyc("div610", ["one", "two"], r)
    if kind == "one":
        a = r.choice([1, 3, 5]); b = r.choice([2, 4, 6])
        q = rf"$\displaystyle\int \frac{{x + {a + b}}}{{x + {b}}}\,dx =$"
        aa = "" if a == 1 else str(a)
        return mk("6.10", "easy", q, (rf"x + {aa}\ln|x + {b}| + C", rf"Divide first: $\dfrac{{x + {a + b}}}{{x + {b}}} = 1 + \dfrac{{{a}}}{{x + {b}}}$."),
            [(rf"{aa}\ln|x + {b}| + C", r"This leaves out the quotient $1$ from the division."),
             (rf"(x + {a + b})\ln|x + {b}| + C", r"This treats the numerator as a constant. It depends on $x$, so divide first."),
             (rf"x + {aa}\ln|x| + C", rf"The logarithm keeps the inside $x + {b}$.")])
    m, b, rem = r.choice([(2, 1, 3), (3, 2, -1), (2, 3, 1)])
    top = m * x + m * b + rem
    q = rf"$\displaystyle\int \frac{{{L(top)}}}{{x + {b}}}\,dx =$"
    rt = (str(rem) if rem > 0 else "-" + str(-rem)) if abs(rem) != 1 else ("" if rem > 0 else "-")
    key = rf"{m}x {'+' if rem > 0 else '-'} {abs(rem) if abs(rem) != 1 else ''}\ln|x + {b}| + C"
    fr = rf"{'+' if rem > 0 else '-'} \dfrac{{{abs(rem)}}}{{x + {b}}}"
    return mk("6.10", "moderate", q, (key, rf"Long division gives $\dfrac{{{L(top)}}}{{x + {b}}} = {m} {fr}$, since ${m}(x + {b}) = {L(m * x + m * b)}$ and the remainder is ${rem}$."),
        [(rf"{m}x {'-' if rem > 0 else '+'} {abs(rem) if abs(rem) != 1 else ''}\ln|x + {b}| + C", rf"The remainder is ${rem}$, since ${L(top)} - {m}(x + {b}) = {rem}$. This uses the opposite sign."),
         (rf"x^{{2}} + {m * b + rem}x + C" if m == 2 else rf"\frac{{{m}}}{{2}}x^{{2}} + {m * b + rem}x + C", r"This antidifferentiates the numerator and drops the denominator. The integrand must be divided out first."),
         (rf"{m}x + C", r"This leaves out the remainder term.")])
t610_div.max = 2

def t610_sq(r):
    kind = cyc("sq610", ["a1", "a2"], r)
    if kind == "a1":
        h = r.choice([2, 4, -3]); k = r.choice([2, 3])
        c = h**2 + 1
        q = rf"$\displaystyle\int \frac{{{k}}}{{x^{{2}} {pm(-2 * h)}x + {c}}}\,dx =$"
        xh = f"x {pm(-h)}"
        return mk("6.10", "easy", q, (rf"{k}\arctan\left({xh}\right) + C", rf"Complete the square: $x^{{2}} {pm(-2 * h)}x + {c} = ({xh})^{{2}} + 1$, and $\displaystyle\int \dfrac{{du}}{{u^{{2}} + 1}} = \arctan u + C$, times ${k}$."),
            [(rf"{k}\ln\left(x^{{2}} {pm(-2 * h)}x + {c}\right) + C", rf"This uses the log rule, but the numerator ${k}$ is not a multiple of the derivative $2x {pm(-2 * h)}$ of the denominator."),
             (rf"{k}\arctan\left(({xh})^{{2}}\right) + C", r"This puts the square inside the arctangent. With $u = " + xh + r"$, the form is $\displaystyle\int \dfrac{du}{u^{2} + 1} = \arctan u + C$."),
             (rf"\frac{{{k}}}{{\sqrt{{{c}}}}}\arctan\left(\frac{{x}}{{\sqrt{{{c}}}}}\right) + C", rf"This uses the constant ${c}$ as $a^{{2}}$ without completing the square. After completing the square the constant is $1$ and the inside is ${xh}$.")])
    h, a = r.choice([(1, 3), (-1, 5), (2, 3)])
    c = h**2 + a**2
    # 4x^2 + 8hx + (4h^2 + a^2) = (2x + 2h)^2 + a^2
    q = rf"$\displaystyle\int \frac{{1}}{{4x^{{2}} {pm(8 * h)}x + {4 * h * h + a * a}}}\,dx =$"
    uu = f"2x {pm(2 * h)}"
    cf = Rational(1, 2 * a)
    return mk("6.10", "difficult", q, (rf"{L(cf)}\arctan\left(\frac{{{uu}}}{{{a}}}\right) + C", rf"Complete the square: $4x^{{2}} {pm(8 * h)}x + {4 * h * h + a * a} = ({uu})^{{2}} + {a}^{{2}}$. With $u = {uu}$, $du = 2\,dx$, so the integral is $\dfrac{{1}}{{2}}\displaystyle\int \dfrac{{du}}{{u^{{2}} + {a * a}}} = \dfrac{{1}}{{2}} \cdot \dfrac{{1}}{{{a}}}\arctan\dfrac{{u}}{{{a}}} + C$."),
        [(rf"{L(Rational(1, a))}\arctan\left(\frac{{{uu}}}{{{a}}}\right) + C", rf"This leaves out the factor $\dfrac{{1}}{{2}}$ from $du = 2\,dx$."),
         (rf"{L(Rational(1, 2 * a * a))}\arctan\left(\frac{{{uu}}}{{{a}}}\right) + C", rf"This divides by $a^{{2}} = {a * a}$ instead of $a = {a}$."),
         (rf"{L(cf)}\arctan\left({uu}\right) + C", rf"This leaves the argument as ${uu}$. With $a = {a}$, the argument is $\dfrac{{{uu}}}{{{a}}}$.")])
t610_sq.max = 2

def t610_poly(r):
    a = r.choice([2, 3, 5]); n = r.choice([2, 3])
    q = rf"$\displaystyle\int \frac{{x^{{{n}}} + {a}}}{{x}}\,dx =$"
    Fp = rf"\frac{{x^{{{n}}}}}{{{n}}}"
    xn1 = "x" if n == 2 else f"x^{{{n - 1}}}"
    return mk("6.10", "easy", q, (rf"{Fp} + {a}\ln|x| + C", rf"Divide each term by $x$: ${xn1} + \dfrac{{{a}}}{{x}}$. Then integrate term by term."),
        [(rf"\left(\frac{{x^{{{n + 1}}}}}{{{n + 1}}} + {a}x\right)\ln|x| + C", r"This antidifferentiates the numerator and multiplies by $\ln|x|$. The integral of a quotient is not found that way."),
         (rf"{Fp} - \frac{{{a}}}{{x^{{2}}}} + C", r"The antiderivative of $\dfrac{1}{x}$ is $\ln|x|$; this differentiates it instead."),
         (rf"x^{{{n}}} + {a}\ln|x| + C", rf"The antiderivative of ${xn1}$ is $\dfrac{{x^{{{n}}}}}{{{n}}}$; the division by ${n}$ is missing.")])
t610_poly.max = 1

# ---------------------------------------------------------------- 6.14 selecting techniques
def t614_expand(r):
    q = r"$\displaystyle\int \left(x + \frac{1}{x}\right)^{2}dx =$"
    return mk("6.14", "easy", q, (r"\frac{x^{3}}{3} + 2x - \frac{1}{x} + C", r"Expand first: $\left(x + \dfrac{1}{x}\right)^{2} = x^{2} + 2 + x^{-2}$. Then integrate term by term: $\dfrac{x^{3}}{3} + 2x - x^{-1} + C$."),
        [(r"\frac{1}{3}\left(x + \frac{1}{x}\right)^{3} + C", r"This uses the power rule on the whole binomial without the chain factor. Its derivative is $\left(x + \dfrac{1}{x}\right)^{2}\left(1 - \dfrac{1}{x^{2}}\right)$."),
         (r"\frac{x^{3}}{3} - \frac{1}{x} + C", r"This squares each term and leaves out the middle term $2\left(x\right)\left(\dfrac{1}{x}\right) = 2$."),
         (r"\frac{x^{3}}{3} + 2x + \frac{1}{x} + C", r"This integrates $x^{-2}$ as $x^{-1}$. The new exponent is $-1$, so the antiderivative is $\dfrac{x^{-1}}{-1} = -\dfrac{1}{x}$.")])
t614_expand.max = 1

def t614_dist(r):
    a = r.choice([1, 2, 3])
    aa = "" if a == 1 else str(a)
    q = rf"$\displaystyle\int e^{{x}}\left({aa}e^{{-x}} + 1\right)dx =$"
    return mk("6.14", "easy", q, (rf"{aa}x + e^{{x}} + C", rf"Distribute first: $e^{{x}}\left({aa}e^{{-x}} + 1\right) = {a} + e^{{x}}$, since $e^{{x}}e^{{-x}} = 1$."),
        [(r"\frac{x^{2}}{2} + e^{x} + C" if a == 1 else L(Rational(a, 2) * x**2) + r" + e^{x} + C", rf"This integrates the constant ${a}$ as if it were ${aa}x$. The antiderivative of a constant $c$ is $cx$."),
         (rf"-{aa}x + e^{{x}} + C", r"This treats $e^{x}e^{-x}$ as $-1$. The exponents add to $0$, and $e^{0} = 1$."),
         (rf"e^{{x}}\left(x - {aa}e^{{-x}}\right) + C", r"This multiplies $e^{x}$ by an antiderivative of the other factor. Distribute first; the antiderivative of a product is not found that way.")])
t614_dist.max = 1

def t614_root(r):
    a = r.choice([2, 3, 4])
    q = rf"$\displaystyle\int \sqrt{{x}}\,(x - {a})\,dx =$"
    Fx = Rational(2, 5) * x**Rational(5, 2) - Rational(2 * a, 3) * x**Rational(3, 2)
    assert simplify(diff(Fx, x) - sqrt(x) * (x - a)) == 0
    return mk("6.14", "easy", q, (L(Fx) + " + C", rf"Distribute and rewrite: $x^{{3/2}} - {a}x^{{1/2}}$. Then $\dfrac{{2}}{{5}}x^{{5/2}} - " + co(Rational(2 * a, 3), "x^{3/2}") + " + C$."),
        [(L(Rational(2, 3) * x**Rational(3, 2)) + rf"\left(\frac{{x^{{2}}}}{{2}} - {a}x\right) + C", r"This multiplies the antiderivatives of the two factors. Distribute first."),
         (L(Rational(5, 2) * x**Rational(5, 2) - Rational(3 * a, 2) * x**Rational(3, 2)) + " + C", r"This multiplies by the new exponents instead of dividing by them."),
         (L(Rational(3, 2) * sqrt(x) - Rational(a, 2) / sqrt(x)) + " + C", r"This differentiates $x^{3/2} - " + str(a) + r"x^{1/2}$ instead of antidifferentiating it.")])
t614_root.max = 1

def t614_sub(r):
    k = r.choice([2, 3])
    q = rf"What is the value of $\displaystyle\int_{{0}}^{{1}} (x + 1)\left(x^{{2}} + 2x\right)^{{{k}}}dx$?"
    val = I((x + 1) * (x**2 + 2 * x)**k, 0, 1)
    assert val == Rational(3**(k + 1), 2 * (k + 1))
    return mk("6.14", "moderate", q, (num(val), rf"With $u = x^{{2}} + 2x$, $du = (2x + 2)\,dx$, so $(x + 1)\,dx = \dfrac{{1}}{{2}}du$, and $u$ runs from $0$ to $3$: $\dfrac{{1}}{{2}}\displaystyle\int_{{0}}^{{3}} u^{{{k}}}\,du = \dfrac{{3^{{{k + 1}}}}}{{{2 * (k + 1)}}} = {L(val)}$."),
        [(num(Rational(1, 2 * (k + 1))), rf"This keeps the $x$-limits $0$ and $1$ for $u$. In terms of $u$, they are $0$ and $1^{{2}} + 2(1) = 3$."),
         (num(2 * val), r"This leaves out the factor $\dfrac{1}{2}$: $du = (2x + 2)\,dx$ is twice $(x + 1)\,dx$."),
         (num(4 * val), r"This multiplies by $2$ instead of dividing by $2$ when it replaces $(x + 1)\,dx$.")])
t614_sub.max = 1

def t614_div(r):
    b = r.choice([1, 2])
    q = rf"What is the value of $\displaystyle\int_{{0}}^{{{b}}} \frac{{x^{{2}}}}{{x + 1}}\,dx$?"
    val = I(x**2 / (x + 1), 0, b)
    fmt = lambda v: L(nsimplify(v)).replace(r"- \frac{1}{2} + \ln{\left(2 \right)}", r"\ln 2 - \frac{1}{2}")
    key = r"\ln 2 - \frac{1}{2}" if b == 1 else r"\ln 3"
    assert simplify(val - (log(2) - Rational(1, 2) if b == 1 else log(3))) == 0
    return mk("6.14", "difficult", q, (key, rf"Divide: $\dfrac{{x^{{2}}}}{{x + 1}} = x - 1 + \dfrac{{1}}{{x + 1}}$. The antiderivative is $\dfrac{{x^{{2}}}}{{2}} - x + \ln|x + 1|$, which gives {'$\\dfrac{1}{2} - 1 + \\ln 2$' if b == 1 else '$2 - 2 + \\ln 3$'} at ${b}$ and $0$ at $0$."),
        [((r"-\frac{1}{2}" if b == 1 else "0"), r"This drops the remainder term $\dfrac{1}{x + 1}$."),
         ((r"\ln 2" if b == 1 else r"\ln 3 + 4"), r"This drops the polynomial part $x - 1$ of the quotient." if b == 1 else r"This uses $x + 1$ instead of $x - 1$ as the polynomial part of the quotient."),
         ((r"\frac{1}{3}\ln 2" if b == 1 else r"\frac{8}{3}\ln 3"), r"This multiplies an antiderivative of the numerator by an antiderivative of $\dfrac{1}{x + 1}$. The integral of a quotient is not found that way.")])
t614_div.max = 1

def t614_trig(r):
    k = r.choice([2, 3])
    q = rf"What is the value of $\displaystyle\int_{{0}}^{{\pi/2}} \sin^{{{k}}}x\cos x\,dx$?"
    val = Rational(1, k + 1)
    return mk("6.14", "moderate", q, (num(val), rf"With $u = \sin x$, $du = \cos x\,dx$ and $u$ runs from $0$ to $1$: $\displaystyle\int_{{0}}^{{1}} u^{{{k}}}\,du = {L(val)}$."),
        [(num(Rational(1, k)), rf"This divides by the old exponent ${k}$. The antiderivative of $u^{{{k}}}$ is $\dfrac{{u^{{{k + 1}}}}}{{{k + 1}}}$."),
         (rf"\frac{{\pi^{{{k + 1}}}}}{{{(k + 1) * 2**(k + 1)}}}", rf"This keeps the $x$-limits $0$ and $\dfrac{{\pi}}{{2}}$ after changing to $u$. With $u = \sin x$, the limits are $\sin 0 = 0$ and $\sin\dfrac{{\pi}}{{2}} = 1$."),
         (num(-val), r"This uses $du = -\cos x\,dx$. The derivative of $\sin x$ is $+\cos x$.")])
t614_trig.max = 1

def t614_tan2(r):
    q = r"$\displaystyle\int \tan^{2}x\,dx =$"
    return mk("6.14", "difficult", q, (r"\tan x - x + C", r"Use the identity $\tan^{2}x = \sec^{2}x - 1$. Then $\displaystyle\int \left(\sec^{2}x - 1\right)dx = \tan x - x + C$."),
        [(r"\frac{\tan^{3}x}{3} + C", r"This uses the power rule on $\tan x$. Its derivative is $\tan^{2}x\sec^{2}x$, not $\tan^{2}x$."),
         (r"\frac{\sec^{3}x}{3} - x + C", r"The identity is right, but this uses the power rule on $\sec^{2}x$. The antiderivative of $\sec^{2}x$ is $\tan x$."),
         (r"\sec^{2}x - x + C", r"This rewrites the integrand but does not antidifferentiate $\sec^{2}x$. Its antiderivative is $\tan x$.")])
t614_tan2.max = 1

def t614_arctan(r):
    num_, a = r.choice([(4, 3), (6, 5), (2, 4)])
    q = rf"$\displaystyle\int \frac{{{num_}}}{{{a * a} + x^{{2}}}}\,dx =$"
    return mk("6.14", "easy", q, (rf"{L(Rational(num_, a))}\arctan\left(\frac{{x}}{{{a}}}\right) + C", rf"$\displaystyle\int \dfrac{{dx}}{{a^{{2}} + x^{{2}}}} = \dfrac{{1}}{{a}}\arctan\dfrac{{x}}{{a}} + C$ with $a = {a}$, times ${num_}$."),
        [(rf"{num_}\arctan\left(\frac{{x}}{{{a}}}\right) + C", rf"This leaves out the factor $\dfrac{{1}}{{a}} = \dfrac{{1}}{{{a}}}$."),
         (rf"{L(Rational(num_, a * a))}\arctan\left(\frac{{x}}{{{a}}}\right) + C", rf"This divides by $a^{{2}} = {a * a}$ instead of $a = {a}$."),
         (rf"{num_}\ln\left({a * a} + x^{{2}}\right) + C", r"This uses the log rule, but the numerator is not the derivative $2x$ of the denominator.")])
t614_arctan.max = 1

def t614_lnsub(r):
    c = r.choice([2, 3, 5])
    q = rf"$\displaystyle\int \frac{{\cos x}}{{{c} + \sin x}}\,dx =$"
    return mk("6.14", "moderate", q, (rf"\ln\left({c} + \sin x\right) + C", rf"Let $u = {c} + \sin x$, so $du = \cos x\,dx$ and the integral is $\displaystyle\int \dfrac{{du}}{{u}} = \ln|u| + C$. Since ${c} + \sin x > 0$, no absolute value is needed."),
        [(rf"-\ln\left({c} + \sin x\right) + C", r"The derivative of $\sin x$ is $+\cos x$, so there is no negative sign."),
         (rf"\sin x\ln\left({c} + \sin x\right) + C", r"This antidifferentiates the numerator and multiplies by a logarithm. The numerator is $du$, so it disappears into the substitution."),
         (rf"\cos x\ln\left({c} + \sin x\right) + C", r"This keeps the numerator as a factor in front of the logarithm. The numerator is $du$, so it disappears into the substitution.")])
t614_lnsub.max = 1

def t614_longdiv(r):
    b, c = r.choice([(1, 2), (2, 3), (3, 4)])
    # (x^2 + c x)/(x + b) = x + (c - b) - (c - b) b/(x + b)
    top = x**2 + c * x; qq, rr = div(Poly(top, x), Poly(x + b, x))
    quo = qq.as_expr(); rem = rr.as_expr()
    q = rf"$\displaystyle\int \frac{{{L(top)}}}{{x + {b}}}\,dx =$"
    Fq = integrate(quo, x)
    key = L(Fq) + (rf" - {L(-rem)}\ln|x + {b}|" if rem < 0 else rf" + {L(rem)}\ln|x + {b}|") + " + C"
    key = key.replace(r" 1\ln", r" \ln")
    flip = L(Fq) + (rf" + {L(-rem)}\ln|x + {b}|" if rem < 0 else rf" - {L(rem)}\ln|x + {b}|") + " + C"
    flip = flip.replace(r" 1\ln", r" \ln")
    return mk("6.14", "difficult", q, (key, rf"Long division gives $\dfrac{{{L(top)}}}{{x + {b}}} = {L(quo)} - \dfrac{{{L(-rem)}}}{{x + {b}}}$. Integrate each term."),
        [(flip, rf"The remainder is ${L(rem)}$: $({L(quo)})(x + {b}) = {L(expand(quo * (x + b)))}$, which is ${L(-rem)}$ more than the numerator. This uses the opposite sign."),
         (L(Fq) + " + C", r"This leaves out the remainder term."),
         (rf"\left(\frac{{x^{{3}}}}{{3}} + {L(Rational(c, 2) * x**2)}\right)\ln|x + {b}| + C", r"This antidifferentiates the numerator and multiplies by $\ln|x + " + str(b) + r"|$. Divide first.")])
t614_longdiv.max = 1

def t614_split(r):
    q = r"$\displaystyle\int \frac{1 + \cos x}{\sin^{2}x}\,dx =$"
    return mk("6.14", "difficult", q, (r"-\cot x - \csc x + C", r"Split the fraction: $\dfrac{1}{\sin^{2}x} + \dfrac{\cos x}{\sin^{2}x} = \csc^{2}x + \csc x\cot x$. The antiderivatives are $-\cot x$ and $-\csc x$."),
        [(r"\cot x + \csc x + C", r"The derivatives of $\cot x$ and $\csc x$ are $-\csc^{2}x$ and $-\csc x\cot x$, so both antiderivatives need a negative sign."),
         (r"-\cot x + \csc x + C", r"The derivative of $\csc x$ is $-\csc x\cot x$, so an antiderivative of $\csc x\cot x$ is $-\csc x$."),
         (r"-\cot x + \ln\left|\sin x\right| + C", r"This treats $\dfrac{\cos x}{\sin^{2}x}$ as $\dfrac{\cos x}{\sin x}$. With $u = \sin x$ it is $u^{-2}\,du$, whose antiderivative is $-u^{-1} = -\csc x$.")])
t614_split.max = 1

TEMPLATES = {"6.1": [t61_units, t61_rate_graph, t61_dist_graph],
             "6.2": [t62_tab_sum, t62_tab_trap, t62_tab_equal, t62_tab_mid, t62_graph_sum, t62_order],
             "6.3": [t63_limit, t63_func, t63_table_sum, t63_value],
             "6.4": [t64_deriv_x, t64_deriv_chain, t64_lower, t64_both, t64_value, t64_graph_g2, t64_graph_tan],
             "6.5": [t65_incr, t65_rel, t65_infl, t65_abs, t65_conc, t65_max, t65_dec_cu],
             "6.6": [t66_graph_easy, t66_graph_mid, t66_graph_hard, t66_lin, t66_split, t66_rev, t66_const, t66_shift, t66_odd, t66_odd_b, t66_even_c, t66_sym, t66_geom, t66_abs, t66_bound, t66_k],
             "6.7": [t67_poly, t67_trig, t67_exp, t67_net, t67_fp, t67_fp_back, t67_table, t67_quot, t67_k],
             "6.8": [t68_power, t68_trig, t68_recip, t68_exp, t68_sum, t68_rewrite, t68_ivp, t68_ivp2, t68_back, t68_sectan, t68_twoF],
             "6.9": [t69_poly, t69_trig, t69_ln, t69_def, t69_exp, t69_lnx, t69_back, t69_rewrite, t69_generic, t69_ivp],
             "6.10": [t610_div, t610_sq, t610_poly],
             "6.14": [t614_expand, t614_dist, t614_root, t614_sub, t614_div, t614_trig, t614_tan2, t614_arctan, t614_lnsub, t614_longdiv, t614_split]}

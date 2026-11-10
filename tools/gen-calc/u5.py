"""Unit 5, Analytical Applications of Differentiation. Every key and wrong choice is computed.

Many templates draw a stimulus: a graph of f', f'', a velocity, or f (plot.js graph()), a table, or a diagram. A template
that draws one registers the set's code with stim(); the deck writer below gives each used set an id (c5x-s1, ...) and
writes it with the items. Every item carries a difficulty ("easy", "moderate", "difficult"), judged the way Albert labels
its own Unit 5 questions; the writer below adds it to each item line (core.write_deck has no difficulty field yet).
"""
import json, re
import core as _core
from core import *

STIM = {}           # temporary key -> JS code of the set

def stim(code):
    k = f"@@{len(STIM) + 1}"
    STIM[k] = code
    return k

import random as _random
_bias = _random.Random(55)

def mk(diff, topic, q, right, wrongs, set_code=None, calc=False, bias=True):
    it = item(topic, q, right, wrongs, calc=calc)
    # Answer-length balance (HANDOFF rule 6): for templates that can draw again, redraw some of the cases where the key
    # is the longest choice, and some where it is neither shortest nor longest, so the key is not the safe guess.
    if set_code is not None and bias:
        ln = [len(c) for c in it["choices"]]
        if ln[0] > max(ln[1:]) and _bias.random() < 0.6:
            raise Skip("key longest")
        if min(ln[1:]) <= ln[0] <= max(ln[1:]) and _bias.random() < 0.8:
            raise Skip("key middle")
    it["difficulty"] = diff
    if set_code is not None:
        it["set"] = stim(set_code)
    return it

def distinct(*v):
    if len(set(simplify(sympify(a)) for a in v)) < len(v):
        raise Skip("same")

def uniq(*v):
    if len(set(v)) < len(v):
        raise Skip("same")

def fac(p):
    return "x" if p == 0 else f"(x {pm(-p)})"

def ivl(a, b):
    return rf"\left[{a}, {b}\right]"

def jstr(s):
    return "String.raw`" + s + "`"

def table_set(name, intro, head, rows, extra=None):
    blocks = ["{ table: { head: [" + ", ".join(jstr(h) for h in head) + "], rows: [" +
              ", ".join("[" + ", ".join(jstr(c) for c in row) + "]" for row in rows) + "] } }"]
    if extra:
        blocks.append("{ p: " + jstr(extra) + " }")
    return ("{ name: " + json.dumps(name) + ", label: \"Table\", intro: " + jstr(intro) +
            ", sources: [{ title: \"\", blocks: [" + ", ".join(blocks) + "] }] }")

def graph_set(name, intro, gopts, label="Graph"):
    return ("{ name: " + json.dumps(name) + ", label: " + json.dumps(label) + ", intro: " + jstr(intro) +
            ", sources: [{ title: \"\", blocks: [{ svg: graph({ " + gopts + " }) }] }] }")

def xs_list(v):
    """x = 1, or x = 1 and x = 3, or x = 1, x = 3, and x = 5."""
    v = [f"$x = {a}$" for a in v]
    if len(v) == 1:
        return v[0] + " only"
    if len(v) == 2:
        return v[0] + " and " + v[1]
    return ", ".join(v[:-1]) + ", and " + v[-1]

def iv_list(v):
    v = [f"$({a}, {b})$" for a, b in v]
    if len(v) == 1:
        return v[0]
    if len(v) == 2:
        return v[0] + " and " + v[1]
    return ", ".join(v[:-1]) + ", and " + v[-1]

def intersect(A, B):
    out = []
    for a, b in A:
        for c, d in B:
            lo, hi = max(a, c), min(b, d)
            if lo < hi:
                out.append((lo, hi))
    return sorted(out)

def line_eq(k, m_, c):
    """y = k + m(x - c), written plainly."""
    xc = "x" if c == 0 else (f"(x - {c})" if c > 0 else f"(x + {-c})")
    if m_ == 1:
        mt = xc if c == 0 else xc
    elif m_ == -1:
        mt = "-" + xc
    else:
        mt = f"{m_}{xc}"
    if k == 0:
        return f"y = {mt}"
    if mt.startswith("-"):
        return f"y = {k} - {mt[1:]}"
    return f"y = {k} + {mt}"

# ---------------------------------------------------------------- piecewise-linear graphs (of f', f'', or v)
class Poly:
    """Values v at the integers x0..x1, joined by segments. Zeros fall only on integers."""
    def __init__(s, x0, v):
        s.x0, s.v = x0, v
        n = len(v) - 1
        s.x1 = x0 + n
        s.X = list(range(x0, x0 + n + 1))
        st = [v[i + 1] - v[i] for i in range(n)]
        s.st = st
        s.verts = [0] + [i for i in range(1, n) if st[i - 1] != st[i]] + [n]
        s.cross = [s.X[i] for i in range(1, n) if v[i] == 0 and v[i - 1] * v[i + 1] < 0]
        s.touch = [s.X[i] for i in range(1, n) if v[i] == 0 and v[i - 1] * v[i + 1] > 0]
        s.maxes = [s.X[i] for i in range(1, n) if v[i] == 0 and v[i - 1] > 0 > v[i + 1]]
        s.mins = [s.X[i] for i in range(1, n) if v[i] == 0 and v[i - 1] < 0 < v[i + 1]]
        cuts = [s.x0] + s.cross + [s.x1]
        s.pos, s.neg = [], []
        for a, b in zip(cuts, cuts[1:]):
            sg = next(v[i] for i in range(n + 1) if a < s.X[i] < b and v[i] != 0) if any(a < s.X[i] < b and v[i] != 0 for i in range(n + 1)) else None
            if sg is None:
                sg = v[s.X.index(a)] if v[s.X.index(a)] != 0 else v[s.X.index(b)]
            (s.pos if sg > 0 else s.neg).append((a, b))
        s.rise, s.fall = [], []
        i = 0
        while i < n:
            j = i
            while j + 1 < n and (st[j + 1] > 0) == (st[i] > 0):
                j += 1
            (s.rise if st[i] > 0 else s.fall).append((s.X[i], s.X[j + 1]))
            i = j + 1
        s.infl = [s.X[i] for i in range(1, n) if st[i - 1] * st[i] < 0]
        s.corners = [s.X[i] for i in s.verts[1:-1]]
        s.peaks = [s.X[i] for i in range(1, n) if st[i - 1] > 0 > st[i]]
        s.valleys = [s.X[i] for i in range(1, n) if st[i - 1] < 0 < st[i]]
        s.zeros = sorted(s.cross + s.touch)
        s.vmax = max(abs(a) for a in v)

    def at(s, x):
        return s.v[s.X.index(x)]

    def slope_at(s, x):
        """Slope of the segment through the integer x, when x is not a corner."""
        i = s.X.index(x)
        return s.st[i] if i < len(s.st) else s.st[-1]

    def pts(s):
        return [(s.X[i], s.v[i]) for i in s.verts]

    def gopts(s, alt, xname="x"):
        P = s.pts()
        segs = ", ".join(f"[{a}, {b}, {c}, {d}]" for (a, b), (c, d) in zip(P, P[1:]))
        ym = max(3, s.vmax) + 1
        return (f"x: [{s.x0}, {s.x1}], y: [{-ym}, {ym}], xname: {json.dumps(xname)}, yname: \"y\", "
                f"segments: [{segs}], dots: [[{s.x0}, {s.v[0]}, \"closed\"], [{s.x1}, {s.v[-1]}, \"closed\"]], alt: {json.dumps(alt)}")

    def alt_text(s, who, var="x"):
        P = s.pts()
        t = f"Graph of {who} for {var} from {s.x0} to {s.x1}, made of line segments joining the points " + ", ".join(f"({a}, {b})" for a, b in P) + "."
        if s.cross:
            t += f" It crosses the {var}-axis at " + " and ".join(f"{var} = {a}" for a in s.cross) + "."
        if s.touch:
            t += f" It touches the {var}-axis without crossing at " + " and ".join(f"{var} = {a}" for a in s.touch) + "."
        return t

def gen_poly(r, cond, x0s=(-4, -3, -2, -1), lens=(6, 7, 8), tries=600):
    for _ in range(tries):
        x0 = r.choice(x0s); n = r.choice(lens)
        if not (x0 <= 0 < x0 + n):
            continue
        v = [r.choice([-3, -2, -1, 1, 2, 3])]; d = None
        for i in range(n):
            dd = d if (d is not None and r.random() < 0.5) else r.choice([-2, -1, 1, 2])
            w = v[-1] + dd
            if abs(w) > 3:
                dd = -dd; w = v[-1] + dd
            if v[-1] * w < 0:
                dd = -v[-1]; w = 0
            v.append(w); d = dd
        if v[-1] == 0 or v[0] == 0:
            continue
        P = Poly(x0, v)
        if not (3 <= len(P.verts) <= 7) or not P.zeros:
            continue
        if cond(P):
            return P
    raise Skip("no graph")

def gen_poly0(r, cond, lens=(6, 7, 8)):
    """A velocity graph that starts at t = 0."""
    return gen_poly(r, cond, x0s=(0,), lens=lens)

FP_INTRO = r"The function $f$ is differentiable on the closed interval $[{a}, {b}]$. The graph of its derivative $f'$, which consists of line segments, is shown below."
FPP_INTRO = r"The function $f$ is twice differentiable on the closed interval $[{a}, {b}]$. The graph of its second derivative $f''$, which consists of line segments, is shown below."
V_INTRO = r"A particle moves along the $x$-axis. The graph of its velocity $v(t)$, for $0 \le t \le {b}$, consists of line segments and is shown below."

def fp_set(P):
    return graph_set("The graph of f'", FP_INTRO.format(a=P.x0, b=P.x1), P.gopts(P.alt_text("the derivative f prime")))

def fpp_set(P):
    return graph_set("The graph of f''", FPP_INTRO.format(a=P.x0, b=P.x1), P.gopts(P.alt_text("the second derivative f double prime")))

def v_set(P):
    return graph_set("A velocity graph", V_INTRO.format(b=P.x1), P.gopts(P.alt_text("the velocity v", "t"), "t"))

def touch_note(P):
    return (" The graph touches the axis at " + " and ".join(f"$x = {a}$" for a in P.touch) + " without crossing, so $f'$ does not change sign there.") if P.touch else ""

# 5.3: increasing or decreasing from the graph of f'
def g53_incr(r):
    want = r.choice(["increasing", "decreasing"])
    P = gen_poly(r, lambda P: P.pos and P.neg and P.rise and P.fall and len({str(P.pos), str(P.neg), str(P.rise), str(P.fall)}) == 4)
    key, wrong = (P.pos, P.neg) if want == "increasing" else (P.neg, P.pos)
    sign = "f'(x) > 0" if want == "increasing" else "f'(x) < 0"
    where = "above" if want == "increasing" else "below"
    q = rf"On which of the following open intervals is $f$ {want}?"
    return mk("easy", "5.3", q, (text_choice(iv_list(key)), rf"$f$ is {want} where ${sign}$, where the graph of $f'$ is {where} the $x$-axis: on " + iv_list(key) + "." + touch_note(P)),
        [(text_choice(iv_list(wrong)), rf"These are where the graph of $f'$ is {'below' if where == 'above' else 'above'} the $x$-axis, where $f$ is {'decreasing' if want == 'increasing' else 'increasing'}."),
         (text_choice(iv_list(P.rise)), r"These are where the graph of $f'$ is rising, where $f''(x) > 0$ and $f$ is concave up. Whether $f$ increases depends on the sign of $f'$, not on whether $f'$ is rising."),
         (text_choice(iv_list(P.fall)), r"These are where the graph of $f'$ is falling, where $f$ is concave down. Whether $f$ increases depends on the sign of $f'$.")], fp_set(P))
g53_incr.max = 3

def g53_left(r):
    P = gen_poly0(r, lambda P: P.pos and P.neg and P.rise and P.fall and len({str(P.pos), str(P.neg), str(P.rise), str(P.fall)}) == 4)
    q = r"During which time intervals is the particle moving to the left?"
    return mk("easy", "5.3", q, (text_choice(iv_list(P.neg)), r"The particle moves to the left when $v(t) < 0$, where the graph is below the $t$-axis: on " + iv_list(P.neg) + "."),
        [(text_choice(iv_list(P.pos)), r"On these intervals $v(t) > 0$, so the particle moves to the right."),
         (text_choice(iv_list(P.fall)), r"On these intervals the velocity is decreasing, so the acceleration is negative. The direction of motion is the sign of $v$, not of $a$."),
         (text_choice(iv_list(P.rise)), r"On these intervals the velocity is increasing, so the acceleration is positive. That does not say which way the particle moves.")], v_set(P))
g53_left.max = 1

# 5.4: relative extrema from the graph of f'
def g54_ext(r):
    kind = r.choice(["minimum", "maximum"])
    def ok(P):
        a, b = (P.mins, P.maxes) if kind == "minimum" else (P.maxes, P.mins)
        loc = P.valleys if kind == "minimum" else P.peaks
        return a and b and P.touch and loc and len({str(a), str(b), str(sorted(a + P.touch)), str(loc)}) == 4
    P = gen_poly(r, ok)
    key, other = (P.mins, P.maxes) if kind == "minimum" else (P.maxes, P.mins)
    loc = P.valleys if kind == "minimum" else P.peaks
    ch = "negative to positive" if kind == "minimum" else "positive to negative"
    q = rf"At which values of $x$ in the open interval $({P.x0}, {P.x1})$ does $f$ have a relative {kind}?"
    return mk("moderate", "5.4", q, (text_choice(xs_list(key)), rf"By the First Derivative Test, $f$ has a relative {kind} where $f'$ changes from {ch}: at " + xs_list(key).replace(" only", "") + "." + touch_note(P)),
        [(text_choice(xs_list(other)), rf"There $f'$ changes from {'positive to negative' if kind == 'minimum' else 'negative to positive'}, so $f$ has a relative {'maximum' if kind == 'minimum' else 'minimum'} there."),
         (text_choice(xs_list(sorted(key + P.touch))), rf"At $x = {P.touch[0]}$ the graph of $f'$ touches the axis, so $f'({P.touch[0]}) = 0$, but $f'$ does not change sign. $f$ has no extremum there."),
         (text_choice(xs_list(loc)), rf"This is where $f'$ itself has a relative {kind}, where the graph of $f'$ turns: a point of inflection of $f$, not an extremum.")], fp_set(P))
g54_ext.max = 1

def g54_count(r):
    def ok(P):
        n = len(P.cross)
        return P.touch and P.corners and len({n, len(P.zeros), len(P.corners), len(P.maxes)}) == 4
    P = gen_poly(r, ok)
    n = len(P.cross)
    q = rf"How many relative extrema does $f$ have on the open interval $({P.x0}, {P.x1})$?"
    return mk("difficult", "5.4", q, (num(n), rf"$f$ has a relative extremum where $f'$ changes sign. The graph of $f'$ crosses the $x$-axis at " + xs_list(P.cross).replace(" only", "") + rf", so $f$ has ${n}$ relative extrema." + touch_note(P)),
        [(num(len(P.zeros)), r"This counts every zero of $f'$, including where the graph only touches the axis. $f'$ must change sign for an extremum."),
         (num(len(P.corners)), r"This counts the corners of the graph of $f'$, where $f'$ turns. Those are about the concavity of $f$, not its extrema."),
         (num(len(P.maxes)), r"This counts only the relative maxima, where $f'$ changes from positive to negative. The relative minima count too.")], fp_set(P))
g54_count.max = 2

# 5.5: absolute extremum from the graph of f' with one sign change
def g55_abs(r):
    kind = r.choice(["maximum", "minimum"])
    def ok(P):
        if len(P.cross) != 1 or not P.touch:
            return False
        good = (P.maxes if kind == "maximum" else P.mins)
        loc = P.peaks if kind == "maximum" else P.valleys
        loc = [p for p in loc if (P.at(p) > 0 if kind == "maximum" else P.at(p) < 0)]
        return good and loc
    P = gen_poly(r, ok)
    c = P.cross[0]; t0 = P.touch[0]
    loc = [p for p in (P.peaks if kind == "maximum" else P.valleys) if (P.at(p) > 0 if kind == "maximum" else P.at(p) < 0)][0]
    lure = P.x1
    uniq(c, t0, loc, lure)
    ch = "positive to negative" if kind == "maximum" else "negative to positive"
    q = rf"At what value of $x$ does $f$ attain its absolute {kind} on the closed interval $[{P.x0}, {P.x1}]$?"
    return mk("moderate", "5.5", q, (f"$x = {c}$", rf"$f'$ changes sign only once, from {ch} at $x = {c}$, so $f$ {'increases up to' if kind == 'maximum' else 'decreases down to'} $x = {c}$ and then {'decreases' if kind == 'maximum' else 'increases'} to the end of the interval. Touching the axis at $x = {t0}$ does not change the direction of $f$. So $f({c})$ is the absolute {kind}."),
        [(f"$x = {t0}$", rf"$f'({t0}) = 0$, but $f'$ does not change sign there, so $f$ keeps {'increasing' if (P.at(t0 - 1) > 0) else 'decreasing'} through $x = {t0}$."),
         (f"$x = {loc}$", rf"At $x = {loc}$ the graph of $f'$ has a {'peak' if kind == 'maximum' else 'low point'}, so $f$ is {'rising' if kind == 'maximum' else 'falling'} most steeply nearby. The absolute {kind} of $f$ is where $f'$ changes sign."),
         (f"$x = {lure}$", rf"The endpoint $x = {P.x1}$ is a candidate, but $f$ is {'decreasing' if kind == 'maximum' else 'increasing'} from $x = {c}$ to $x = {P.x1}$, so $f({P.x1})$ is {'less' if kind == 'maximum' else 'greater'} than $f({c})$.")], fp_set(P))
g55_abs.max = 1

# 5.6: concavity and inflection from the graph of f'
def g56_conc(r):
    want = r.choice(["concave down", "concave up"])
    P = gen_poly(r, lambda P: P.pos and P.neg and P.rise and P.fall and len({str(P.pos), str(P.neg), str(P.rise), str(P.fall)}) == 4)
    key, opp = (P.fall, P.rise) if want == "concave down" else (P.rise, P.fall)
    sgn, wrong_sign = (P.neg, P.pos) if want == "concave down" else (P.pos, P.neg)
    q = rf"On which of the following open intervals is the graph of $f$ {want}?"
    return mk("moderate", "5.6", q, (text_choice(iv_list(key)), rf"The graph of $f$ is {want} where $f'$ is {'decreasing' if want == 'concave down' else 'increasing'}, where the graph of $f'$ {'falls' if want == 'concave down' else 'rises'}: on " + iv_list(key) + "."),
        [(text_choice(iv_list(sgn)), rf"These are where $f'(x) {'< 0' if want == 'concave down' else '> 0'}$, where $f$ is {'decreasing' if want == 'concave down' else 'increasing'}. Concavity depends on whether $f'$ is rising or falling, not on its sign."),
         (text_choice(iv_list(opp)), rf"These are where the graph of $f'$ {'rises' if want == 'concave down' else 'falls'}, where $f$ is {'concave up' if want == 'concave down' else 'concave down'}."),
         (text_choice(iv_list(wrong_sign)), rf"These are where $f'(x) {'> 0' if want == 'concave down' else '< 0'}$, where $f$ is {'increasing' if want == 'concave down' else 'decreasing'}. That is the direction of $f$, not its concavity.")], fp_set(P))
g56_conc.max = 1

def g56_infl(r):
    def ok(P):
        nonsc = [c for c in P.corners if c not in P.infl]
        return P.infl and nonsc and P.cross and len({str(P.infl), str(P.cross), str(P.corners), str(P.zeros)}) == 4
    P = gen_poly(r, ok)
    nonsc = [c for c in P.corners if c not in P.infl]
    q = rf"At which values of $x$ in the open interval $({P.x0}, {P.x1})$ does the graph of $f$ have a point of inflection?"
    return mk("difficult", "5.6", q, (text_choice(xs_list(P.infl)), r"A point of inflection is where $f''$ changes sign, so where $f'$ changes between increasing and decreasing: at " + xs_list(P.infl).replace(" only", "") + "."),
        [(text_choice(xs_list(P.cross)), r"These are where $f'$ changes sign, the relative extrema of $f$. Inflection comes from a turn in the graph of $f'$, not a zero of $f'$."),
         (text_choice(xs_list(P.corners)), rf"This counts every corner of the graph of $f'$. At $x = {nonsc[0]}$ the slope of $f'$ changes but keeps the same sign, so the concavity of $f$ does not change there."),
         (text_choice(xs_list(P.zeros)), r"These are the zeros of $f'$, where $f$ has horizontal tangents. A point of inflection needs a sign change in $f''$, the slope of the graph of $f'$.")], fp_set(P))
g56_infl.max = 2

# 5.6 / 5.9: concavity from the graph of f''
def g_fpp_conc(topic):
    def g(r):
        want = r.choice(["concave up", "concave down"])
        P = gen_poly(r, lambda P: P.pos and P.neg and P.rise and P.fall and len({str(P.pos), str(P.neg), str(P.rise), str(P.fall)}) == 4)
        key, opp = (P.pos, P.neg) if want == "concave up" else (P.neg, P.pos)
        same, other = (P.rise, P.fall) if want == "concave up" else (P.fall, P.rise)
        q = rf"On which of the following open intervals is the graph of $f$ {want}?"
        return mk("moderate", topic, q, (text_choice(iv_list(key)), rf"The graph of $f$ is {want} where $f''(x) {'> 0' if want == 'concave up' else '< 0'}$, where the graph of $f''$ is {'above' if want == 'concave up' else 'below'} the $x$-axis: on " + iv_list(key) + "."),
            [(text_choice(iv_list(opp)), rf"On these intervals $f''(x) {'< 0' if want == 'concave up' else '> 0'}$, so the graph of $f$ is {'concave down' if want == 'concave up' else 'concave up'}."),
             (text_choice(iv_list(same)), rf"These are where the graph of $f''$ is {'rising' if want == 'concave up' else 'falling'}. This reads the graph of $f''$ as if it were the graph of $f'$, one derivative too many."),
             (text_choice(iv_list(other)), rf"These are where the graph of $f''$ is {'falling' if want == 'concave up' else 'rising'}. The concavity of $f$ is the sign of $f''$, not its direction.")], fpp_set(P))
    g.__name__ = "g_fpp_conc_" + topic.replace(".", "")
    g.max = 1
    return g

# 5.8: two conditions at once, inflection count, extrema of f' from f'', I/II/III
COMBOS = [("increasing", "concave up"), ("increasing", "concave down"), ("decreasing", "concave up"), ("decreasing", "concave down")]

def combo_ivs(P, d, c):
    return intersect(P.pos if d == "increasing" else P.neg, P.rise if c == "concave up" else P.fall)

def g_combo(topic, diff):
    def g(r):
        P = gen_poly(r, lambda P: all(combo_ivs(P, d, c) for d, c in COMBOS) and len({str(combo_ivs(P, d, c)) for d, c in COMBOS}) == 4)
        k = r.randrange(4); d, c = COMBOS[k]
        why = {}
        for dd, cc in COMBOS:
            why[(dd, cc)] = (rf"On these intervals $f'(x) {'> 0' if dd == 'increasing' else '< 0'}$ and $f'$ is {'increasing' if cc == 'concave up' else 'decreasing'}, so $f$ is {dd} and {cc}.")
        q = rf"On which of the following open intervals is $f$ {d} and the graph of $f$ {c}?"
        wrongs = [(text_choice(iv_list(combo_ivs(P, dd, cc))), why[(dd, cc)]) for dd, cc in COMBOS if (dd, cc) != (d, c)]
        return mk(diff, topic, q, (text_choice(iv_list(combo_ivs(P, d, c))), rf"$f$ is {d} where $f'(x) {'> 0' if d == 'increasing' else '< 0'}$, on " + iv_list(P.pos if d == "increasing" else P.neg) + rf". The graph of $f$ is {c} where $f'$ is {'increasing' if c == 'concave up' else 'decreasing'}, on " + iv_list(P.rise if c == "concave up" else P.fall) + ". Both hold on " + iv_list(combo_ivs(P, d, c)) + "."),
            wrongs, fp_set(P))
    g.__name__ = "g_combo_" + topic.replace(".", "")
    g.max = 2
    return g

def g58_inflcount(r):
    def ok(P):
        n = len(P.infl)
        nonsc = [c for c in P.corners if c not in P.infl]
        return n and nonsc and len({n, len(P.zeros), len(P.corners), len(P.cross)}) == 4
    P = gen_poly(r, ok)
    n = len(P.infl); nonsc = [c for c in P.corners if c not in P.infl]
    q = rf"How many points of inflection does the graph of $f$ have on the open interval $({P.x0}, {P.x1})$?"
    return mk("difficult", "5.8", q, (num(n), r"The graph of $f$ has a point of inflection where $f'$ changes from increasing to decreasing or from decreasing to increasing. The graph of $f'$ changes direction at " + xs_list(P.infl).replace(" only", "") + rf", so there are ${n}$."),
        [(num(len(P.zeros)), r"This counts the zeros of $f'$, where $f$ has horizontal tangent lines. Those are not points of inflection."),
         (num(len(P.corners)), rf"This counts every corner of the graph of $f'$. At $x = {nonsc[0]}$ the graph of $f'$ bends but keeps {'rising' if P.slope_at(nonsc[0]) > 0 else 'falling'}, so $f$ does not change concavity there."),
         (num(len(P.cross)), r"This counts where $f'$ changes sign, the relative extrema of $f$, not the points of inflection.")], fp_set(P))
g58_inflcount.max = 1

def g58_fpext(r):
    kind = r.choice(["maximum", "minimum"])
    def ok(P):
        a, b = (P.maxes, P.mins) if kind == "maximum" else (P.mins, P.maxes)
        loc = P.peaks if kind == "maximum" else P.valleys
        return a and b and loc and len({str(a), str(b), str(loc), str(P.zeros)}) == 4
    P = gen_poly(r, ok)
    a, b = (P.maxes, P.mins) if kind == "maximum" else (P.mins, P.maxes)
    loc = P.peaks if kind == "maximum" else P.valleys
    q = rf"At which values of $x$ in the open interval $({P.x0}, {P.x1})$ does $f'$ have a relative {kind}?"
    ch = "positive to negative" if kind == "maximum" else "negative to positive"
    return mk("difficult", "5.8", q, (text_choice(xs_list(a)), rf"$f''$ is the derivative of $f'$. So $f'$ has a relative {kind} where $f''$ changes from {ch}: at " + xs_list(a).replace(" only", "") + "."),
        [(text_choice(xs_list(b)), rf"Here $f''$ changes from {'negative to positive' if kind == 'maximum' else 'positive to negative'}, so $f'$ has a relative {'minimum' if kind == 'maximum' else 'maximum'}."),
         (text_choice(xs_list(loc)), rf"These are where $f''$ itself has a relative {kind}. This reads the graph of $f''$ as if it were the graph of $f'$."),
         (text_choice(xs_list(P.zeros)), r"These are all the zeros of $f''$. An extremum of $f'$ needs $f''$ to change sign, and the type depends on the direction of the change.")], fpp_set(P))
g58_fpext.max = 1

ROMAN = ["I only", "II only", "III only", "I and II only", "I and III only", "II and III only", "I, II, and III"]

def roman(t):
    """I only, I and III only, I, II, and III, ... for a tuple of three truths."""
    s = [n for n, b in zip(["I", "II", "III"], t) if b]
    if len(s) == 1: return s[0] + " only"
    if len(s) == 2: return s[0] + " and " + s[1] + " only"
    return "I, II, and III"

import itertools
ROMAN_T = {}

def g_stmt(topic):
    if not ROMAN_T:
        for t in itertools.product([False, True], repeat=3):
            if any(t): ROMAN_T[roman(t)] = t
    def g(r):
        P = gen_poly(r, lambda P: (P.maxes or P.touch) and P.rise and P.fall and any(b - a >= 2 for a, b in P.pos) and any(b - a >= 2 for a, b in P.neg))
        # I: relative maximum at a point
        cands = [(m, True) for m in P.maxes] + [(t, False) for t in P.touch] + [(m, False) for m in P.mins]
        p1, t1 = r.choice(cands)
        whyI = (rf"I is true: $f'$ changes from positive to negative at $x = {p1}$." if t1 else
                (rf"I is false: $f'({p1}) = 0$, but $f'$ does not change sign there, so there is no extremum." if p1 in P.touch else
                 rf"I is false: $f'$ changes from negative to positive at $x = {p1}$, so that is a relative minimum."))
        # II: concave up on an interval
        t2 = r.random() < 0.5
        a2, b2 = r.choice(P.rise if t2 else P.fall)
        whyII = (rf"II is true: the graph of $f'$ rises on $({a2}, {b2})$, so $f''> 0$ there." if t2 else
                 rf"II is false: the graph of $f'$ falls on $({a2}, {b2})$, so $f$ is concave down there.")
        # III: compare two values of f inside one piece where f' keeps one sign
        t3 = r.random() < 0.5
        pa, pb = r.choice([iv for iv in (P.pos if t3 else P.neg) if iv[1] - iv[0] >= 2])
        u, w = pa, pb
        whyIII = (rf"III is true: $f' > 0$ on $({pa}, {pb})$, so $f$ is increasing there and $f({w}) > f({u})$." if t3 else
                  rf"III is false: $f' < 0$ on $({pa}, {pb})$, so $f$ is decreasing there and $f({w}) < f({u})$.")
        truth = (t1, t2, t3)
        if not any(truth):
            raise Skip("none")
        key = roman(truth)
        flips = [roman(tuple(not b if i == j else b for j, b in enumerate(truth))) for i in range(3)]
        flips = [f for f in flips if f != key and f in ROMAN]
        if len(flips) < 3:
            extra = [x for x in ROMAN if x != key and x not in flips]
            flips += r.sample(extra, 3 - len(flips))
        exp = whyI + " " + whyII + " " + whyIII
        stem = rf"Which of the following statements must be true? I. $f$ has a relative maximum at $x = {p1}$. II. The graph of $f$ is concave up on $({a2}, {b2})$. III. $f({w}) > f({u})$."
        def wy(c):
            ct = ROMAN_T[c]
            bad = [n for n, b, cb in zip(["I", "II", "III"], truth, ct) if b != cb]
            return "This judges statement " + " and statement ".join(bad) + " wrongly. " + exp
        return mk("difficult", topic, stem, (text_choice(key), exp), [(text_choice(c), wy(c)) for c in flips[:3]], fp_set(P))
    g.__name__ = "g_stmt_" + topic.replace(".", "")
    g.max = 2 if topic == "5.9" else 1
    return g

# 5.9: tangent line, behavior at a point, speed, labeled points on a graph of f
def g59_tangent(r):
    def ok(P):
        return any(x not in P.corners and P.at(x) != 0 and P.slope_at(x) not in (0, P.at(x)) for x in P.X[1:-1])
    P = gen_poly(r, ok)
    c = r.choice([x for x in P.X[1:-1] if x not in P.corners and P.at(x) != 0 and P.slope_at(x) not in (0, P.at(x))])
    m_ = P.at(c); s_ = P.slope_at(c); k = r.choice([k for k in [-4, -3, -2, 2, 3, 4, 5] if k not in (m_, c)])
    key = line_eq(k, m_, c)
    w1 = line_eq(k, s_, c); w2 = line_eq(m_, k, c); w3 = line_eq(c, m_, k)
    uniq(key, w1, w2, w3)
    q = rf"It is known that $f({c}) = {k}$. Which of the following is an equation of the line tangent to the graph of $f$ at $x = {c}$?"
    return mk("moderate", "5.9", q, (f"${key}$", rf"The slope of the tangent line is $f'({c})$, read from the graph of $f'$: $f'({c}) = {m_}$. The line passes through $({c}, {k})$, so it is ${key}$."),
        [(f"${w1}$", rf"This uses ${s_}$, the slope of the graph of $f'$ at $x = {c}$. That is $f''({c})$. The tangent line's slope is $f'({c})$, the height of the graph."),
         (f"${w2}$", rf"This swaps the slope and the point: it uses $f({c}) = {k}$ as the slope and $f'({c}) = {m_}$ as the $y$-value."),
         (f"${w3}$", rf"This swaps the coordinates of the point. The tangent line passes through $({c}, {k})$, not $({k}, {c})$.")], fp_set(P))
g59_tangent.max = 1

def g59_point(r):
    def good(P):
        return [x for x in P.X[1:-1] if x not in P.corners and P.at(x) != 0]
    P = gen_poly(r, good)
    c = r.choice(good(P))
    d = "increasing" if P.at(c) > 0 else "decreasing"; cc = "concave up" if P.slope_at(c) > 0 else "concave down"
    od = "decreasing" if d == "increasing" else "increasing"; oc = "concave down" if cc == "concave up" else "concave up"
    q = rf"Which of the following describes $f$ at $x = {c}$?"
    T = lambda a, b: text_choice(f"$f$ is {a}, and its graph is {b}.")
    return mk("moderate", "5.9", q, (T(d, cc), rf"$f'({c}) = {P.at(c)}$ is {'positive' if P.at(c) > 0 else 'negative'}, so $f$ is {d}. The graph of $f'$ is {'rising' if cc == 'concave up' else 'falling'} at $x = {c}$, so $f''({c}) {'> 0' if cc == 'concave up' else '< 0'}$ and the graph of $f$ is {cc}."),
        [(T(od, cc), rf"The direction comes from the sign of $f'({c}) = {P.at(c)}$, so $f$ is {d}."),
         (T(d, oc), rf"The concavity comes from whether $f'$ is rising or falling at $x = {c}$, not from the sign of $f'$. Here $f'$ is {'rising' if cc == 'concave up' else 'falling'}."),
         (T(od, oc), r"Both are reversed. This reads the graph of $f'$ as if it were the graph of $f$.")], fp_set(P))
g59_point.max = 2

def g59_speed(r):
    def ok(P):
        up = sorted(intersect(P.pos, P.rise) + intersect(P.neg, P.fall))
        dn = sorted(intersect(P.pos, P.fall) + intersect(P.neg, P.rise))
        return up and dn and len({str(up), str(dn), str(P.rise), str(P.pos)}) == 4
    P = gen_poly0(r, ok)
    up = sorted(intersect(P.pos, P.rise) + intersect(P.neg, P.fall)); dn = sorted(intersect(P.pos, P.fall) + intersect(P.neg, P.rise))
    T = lambda v: text_choice(iv_list(v))
    q = r"During which time intervals is the speed of the particle increasing?"
    return mk("difficult", "5.9", q, (T(up), r"Speed increases when the velocity and the acceleration have the same sign: $v > 0$ with $v$ rising, or $v < 0$ with $v$ falling. That happens on " + iv_list(up) + "."),
        [(T(dn), r"On these intervals $v$ and $a$ have opposite signs, so the speed is decreasing."),
         (T(P.rise), r"These are where $v$ is increasing, so $a(t) > 0$. When $v < 0$ and $v$ is rising, the particle is slowing down."),
         (T(P.pos), r"These are where $v(t) > 0$, where the particle moves to the right. Speed depends on both $v$ and $a$.")], v_set(P))
g59_speed.max = 2

def g59_label(r):
    m0 = 0; s = r.choice([1, -1]); C = r.choice([0, 1, -1])
    f = lambda xx: s * ((xx - m0)**3 - 12 * (xx - m0)) / 4 + C
    xsP = [m0 - 3, m0 - 1, m0 + 1, m0 + 3]
    ys = [Rational(s * ((a - m0)**3 - 12 * (a - m0)), 4) + C for a in xsP]
    names = ["A", "B", "C", "D"]
    fp_ = lambda a: s * (3 * (a - m0)**2 - 12); fpp_ = lambda a: s * 6 * (a - m0)
    props = [(fp_(a) > 0, fpp_(a) > 0) for a in xsP]
    k = r.randrange(4); want = props[k]
    desc = lambda pr: rf"$f'(x) {'> 0' if pr[0] else '< 0'}$ and $f''(x) {'> 0' if pr[1] else '< 0'}$"
    def lpos(a, y):
        up = fpp_(a) < 0                      # concave down: the label goes above the point, else below
        left = (fp_(a) > 0) == up             # and to the side away from the curve
        return (a - 0.5 if left else a + 0.2, float(y) + (0.45 if up else -0.95))
    lab = ", ".join(f"[{lpos(a, y)[0]}, {lpos(a, y)[1]}, \"{n}\"]" for a, y, n in zip(xsP, ys, names))
    dots = ", ".join(f"[{a}, {float(y)}, \"closed\"]" for a, y in zip(xsP, ys))
    lo, hi = m0 - 4, m0 + 4
    ylo, yhi = -5 + C, 5 + C
    alt = (f"Graph of a smooth function f for x from {lo} to {hi}. " +
           f"It has a {'peak' if s > 0 else 'low point'} at x = {m0 - 2} and a {'low point' if s > 0 else 'peak'} at x = {m0 + 2}, and it changes concavity at x = {m0}. " +
           "Labeled points: " + ", ".join(f"{n} at x = {a}" for n, a in zip(names, xsP)) + ".")
    code = graph_set("The graph of f", r"The graph of a twice-differentiable function $f$ is shown below, with four labeled points.",
                     f"x: [{min(lo, -1)}, {max(hi, 1)}], y: [{ylo}, {yhi}], xname: \"x\", yname: \"y\", fns: [{{ f: (x) => {s} * ((x - ({m0})) ** 3 - 12 * (x - ({m0}))) / 4 + {C}, from: {lo}, to: {hi} }}], dots: [{dots}], labels: [{lab}], alt: {json.dumps(alt)}")
    q = rf"At which labeled point is {desc(want)}?"
    def why_for(i):
        pr = props[i]
        return rf"At ${names[i]}$ the graph is {'rising' if pr[0] else 'falling'}, so $f' {'> 0' if pr[0] else '< 0'}$, and it is {'concave up' if pr[1] else 'concave down'}, so $f'' {'> 0' if pr[1] else '< 0'}$."
    return mk("moderate", "5.9", q, (f"${names[k]}$", why_for(k) + " This matches both conditions."),
        [(f"${names[i]}$", why_for(i) + (" The sign of $f'$ is wrong." if props[i][0] != want[0] and props[i][1] == want[1] else " The sign of $f''$ is wrong." if props[i][0] == want[0] else " Both signs are wrong.")) for i in range(4) if i != k], code)
g59_label.max = 1

# ---------------------------------------------------------------- 5.1 Mean Value Theorem
def t51_c_quad(r):
    p = r.choice([1, 2, 3, -1, -2]); q0 = r.choice([-4, 1, 3, 0, 5]); a = r.choice([0, 1, -1, 2]); b = a + r.choice([2, 4, 6])
    f = p * x**2 + q0 * x + 1
    c = Rational(a + b, 2); avg = (f.subs(x, b) - f.subs(x, a)) / (b - a)
    w3 = (avg - q0) / p          # solves 2pc + q0 = avg as pc + q0 = avg: derivative of x^2 taken as x
    w3 = (avg - q0) / p
    distinct(c, avg, b, w3)
    qq = rf"Let $f(x) = {L(f)}$. What value of $c$ satisfies the conclusion of the Mean Value Theorem for $f$ on ${ivl(a, b)}$?"
    return mk("easy", "5.1", qq, (num(c), rf"The average rate of change is $\dfrac{{f({b}) - f({a})}}{{{b} - ({a})}} = {L(avg)}$. Since $f'(x) = {L(diff(f, x))}$, solving $f'(c) = {L(avg)}$ gives $c = {L(c)}$, which is in $({a}, {b})$."),
        [(num(avg), r"This is the average rate of change, the slope that $f'(c)$ must equal, not the value of $c$."),
         (num(b), rf"${b}$ is the right endpoint. The value of $c$ must be strictly between ${a}$ and ${b}$, and here $f'({b}) \ne {L(avg)}$."),
         (num(w3), rf"This uses ${L(p * x + q0)}$ as $f'(x)$, differentiating ${L(p * x**2)}$ as ${L(p * x)}$ instead of ${L(2 * p * x)}$.")])
t51_c_quad.max = 3

def t51_c_cubic(r):
    b = r.choice([2, 3, 6])
    avg = Rational(b**3, b); c = sqrt(avg / 3)
    qq = rf"Let $f(x) = x^{{3}}$. What value of $c$ satisfies the conclusion of the Mean Value Theorem for $f$ on ${ivl(0, b)}$?"
    return mk("moderate", "5.1", qq, (L(c), rf"The average rate of change is $\dfrac{{{b**3} - 0}}{{{b}}} = {avg}$. Then $3c^{{2}} = {avg}$, so $c = {L(c)}$, the root inside $(0, {b})$."),
        [(L(sqrt(avg)), rf"This solves $c^{{2}} = {avg}$, forgetting the factor $3$ in $f'(c) = 3c^{{2}}$."),
         (num(Rational(b, 2)), r"The midpoint works for a quadratic, not for a cubic. Solve $f'(c)$ equal to the average rate of change."),
         (L(-c), rf"This root solves $3c^{{2}} = {avg}$ but is not in the open interval $(0, {b})$.")])
t51_c_cubic.max = 1

def t51_avg(r):
    k = r.choice([2, 3, 4]); a, b = r.choice([(0, 2), (1, 4), (1, 3), (0, 3), (2, 4)])
    f = x**k
    avg = Rational(b**k - a**k, b - a)
    w2 = b**k - a**k; w1 = Rational(b - a, b**k - a**k); w3 = Rational(b**k + a**k, b - a)
    distinct(avg, w1, w2, w3)
    qq = rf"A differentiable function satisfies $f({a}) = {a**k}$ and $f({b}) = {b**k}$. By the Mean Value Theorem, $f'(c)$ must equal what value for some $c$ in $\left({a}, {b}\right)$?"
    return mk("easy", "5.1", qq, (num(avg), rf"$f'(c) = \dfrac{{f({b}) - f({a})}}{{{b} - {a}}} = \dfrac{{{b**k - a**k}}}{{{b - a}}} = {L(avg)}$."),
        [(num(w2), r"This is the change in $f$ without dividing by the length of the interval."),
         (num(w1), r"The ratio is upside down: the change in $x$ is divided by the change in $f$."),
         (num(w3), r"This adds the two values of $f$. The change in $f$ is a difference.")])
t51_avg.max = 3

def t51_rolle(r):
    a, b = r.choice([(0, 4), (1, 5), (-1, 3), (0, 6), (-2, 4)])
    f = (x - a) * (x - b)
    c = Rational(a + b, 2)
    qq = rf"Let $f(x) = {L(expand(f))}$. Since $f({a}) = f({b})$, Rolle's Theorem guarantees a $c$ in $\left({a}, {b}\right)$ with $f'(c) = 0$. What is $c$?"
    return mk("easy", "5.1", qq, (num(c), rf"$f'(x) = {L(diff(expand(f), x))}$, which is $0$ at $x = {L(c)}$."),
        [(num(a), rf"${a}$ is an endpoint, where $f = 0$. Rolle's Theorem locates where $f' = 0$, strictly inside the interval."),
         (num(f.subs(x, c)), rf"This is $f({L(c)})$, the value of $f$ at $c$, not $c$."),
         (num(a + b), rf"$f'(c) = 2c - ({a + b}) = 0$ gives $2c = {a + b}$; this forgets to divide by $2$.")])
t51_rolle.max = 2

def t51_velocity(r):
    T = r.choice([4, 5, 8]); d = r.choice([100, 120, 200, 240])
    avg = Rational(d, T)
    qq = rf"A car travels ${d}$ miles in ${T}$ hours, and its position is a differentiable function of time. Which statement must be true?"
    return mk("easy", "5.1", qq, (text_choice(f"At some moment the car's speed is exactly ${L(avg)}$ miles per hour."), rf"The average velocity is $\dfrac{{{d}}}{{{T}}} = {L(avg)}$ miles per hour, and the Mean Value Theorem says the instantaneous velocity equals it at some time."),
        [(text_choice(f"The car's speed is ${L(avg)}$ miles per hour at every moment."), r"The theorem guarantees one moment, not a constant speed."),
         (text_choice(f"At some moment the car's speed is exactly ${2 * avg}$ miles per hour."), r"Nothing forces the speed to reach twice the average."),
         (text_choice(f"The car's speed is never above ${L(avg)}$ miles per hour."), r"The car may go faster than the average at some times and slower at others.")])
t51_velocity.max = 1

def t51_hyp(r):
    a, b = r.choice([(-1, 1), (-2, 2), (-3, 1)])
    qq = rf"For which function are the hypotheses of the Mean Value Theorem satisfied on ${ivl(a, b)}$?"
    opts = [(text_choice(r"$f(x) = x^{3} - 2x$"), r"A polynomial is continuous and differentiable everywhere, so the hypotheses hold."),
            (text_choice(r"$f(x) = |x|$"), r"$|x|$ is continuous, but it has a corner at $x = 0$, so it is not differentiable there."),
            (text_choice(r"$f(x) = \dfrac{1}{x}$"), r"$\dfrac{1}{x}$ is not defined at $x = 0$, which is in the interval, so it is not continuous there."),
            (text_choice(r"$f(x) = x^{2/3}$"), r"$x^{2/3}$ is continuous, but it has a cusp at $x = 0$, where $f'(x) = \dfrac{2}{3x^{1/3}}$ does not exist.")]
    return mk("moderate", "5.1", qq, opts[0], opts[1:])
t51_hyp.max = 1

def t51_count(r):
    qq = r"The function $f$ is continuous on $[1, 5]$ and differentiable on $(1, 5)$, with $f(1) = 3$ and $f(5) = 11$. Which must be true?"
    return mk("easy", "5.1", qq, (text_choice(r"$f'(c) = 2$ for some $c$ in $(1, 5)$."), r"The average rate of change is $\dfrac{11 - 3}{5 - 1} = 2$, so the Mean Value Theorem gives $f'(c) = 2$."),
        [(text_choice(r"$f(c) = 2$ for some $c$ in $(1, 5)$."), r"The theorem is about $f'$, not $f$, and $2$ is not between $3$ and $11$."),
         (text_choice(r"$f'(c) = 8$ for some $c$ in $(1, 5)$."), r"$8$ is the change in $f$; it must be divided by the change in $x$, $4$."),
         (text_choice(r"$f'(c) = 0$ for some $c$ in $(1, 5)$."), r"That is Rolle's Theorem, which needs $f(1) = f(5)$.")])
t51_count.max = 1

def t51_bound(r):
    a = r.choice([0, 1, 2]); L_ = r.choice([3, 4, 5]); b = a + L_
    lo_, hi_ = r.choice([(1, 4), (2, 5), (-1, 3), (-2, 1)])
    fa = r.choice([-3, 2, 5, 6])
    kind = r.choice(["fb_max", "fa_min"])
    if kind == "fb_max":
        key = fa + hi_ * L_
        qq = rf"The function $f$ is differentiable for all $x$, with $f({a}) = {fa}$ and ${lo_} \le f'(x) \le {hi_}$ for all $x$. What is the greatest possible value of $f({b})$?"
        w = [(num(fa + lo_ * L_), rf"This uses the lower bound ${lo_}$. The greatest value of $f({b})$ comes from the greatest slope, ${hi_}$."),
             (num(hi_ * L_), rf"${hi_} \cdot {L_} = {hi_ * L_}$ is the greatest possible change in $f$. It must be added to $f({a}) = {fa}$."),
             (num(fa + hi_ * b), rf"This multiplies by ${b}$ instead of the length of the interval, ${b} - {a} = {L_}$.")]
        why = rf"By the Mean Value Theorem, $\dfrac{{f({b}) - f({a})}}{{{L_}}} = f'(c) \le {hi_}$ for some $c$, so $f({b}) \le {fa} + {hi_}({L_}) = {key}$. The function $f(x) = {fa} + {hi_}(x - {a})$ reaches it."
    else:
        fb = hi_ * L_ + r.choice([1, 2, 3, 4, 6, 7])
        key = fb - hi_ * L_
        qq = rf"The function $f$ is differentiable for all $x$, with $f({b}) = {fb}$ and ${lo_} \le f'(x) \le {hi_}$ for all $x$. What is the least possible value of $f({a})$?"
        w = [(num(fb - lo_ * L_), rf"This uses the lower bound ${lo_}$. $f({a}) = f({b}) - f'(c)({L_})$ is least when $f'(c)$ is greatest, ${hi_}$."),
             (num(fb + hi_ * L_), rf"This adds the change. Going back from $x = {b}$ to $x = {a}$, the change is subtracted."),
             (num(fb + lo_ * L_), rf"This adds the change and uses the lower bound. $f({a}) = f({b}) - f'(c)({L_})$, and the least value uses $f'(c) = {hi_}$.")]
        why = rf"By the Mean Value Theorem, $f({b}) - f({a}) = f'(c)({L_})$ for some $c$, so $f({a}) = {fb} - {L_}f'(c) \ge {fb} - {L_}({hi_}) = {key}$. The function $f(x) = {fb} + {hi_}(x - {b})$ reaches it."
    distinct(key, *[s for s, _ in w])
    return mk("difficult", "5.1", qq, (num(key), why), w)
t51_bound.max = 3

XS51 = [[0, 2, 5, 7], [1, 3, 4, 8], [-2, 0, 3, 5]]
def tab51_value(r):
    xs = r.choice(XS51)
    for _ in range(80):
        f = [r.choice(range(-4, 12)) for _ in xs]
        i, j = sorted(r.sample(range(4), 2))
        s = Rational(f[j] - f[i], xs[j] - xs[i])
        if s.q == 1 and s != 0 and xs[j] - xs[i] > 1 and f[j] - f[i] != -s and Rational(f[j] + f[i], 2) not in (s, -s, f[j] - f[i]):
            break
    else:
        raise Skip("no")
    code = table_set("Values of f", r"The function $f$ is differentiable for all real numbers. Selected values of $f$ are given in the table below.",
                     ["$x$"] + [f"${a}$" for a in xs], [["$f(x)$"] + [f"${b}$" for b in f]])
    qq = rf"By the Mean Value Theorem, $f'(c)$ must equal which value for some $c$ in the interval $\left({xs[i]}, {xs[j]}\right)$?"
    distinct(s, f[j] - f[i], -s, Rational(f[j] + f[i], 2))
    return mk("easy", "5.1", qq, (num(s), rf"$f$ is differentiable, so it is continuous on $[{xs[i]}, {xs[j]}]$ and differentiable on $({xs[i]}, {xs[j]})$. By the Mean Value Theorem, $f'(c) = \dfrac{{f({xs[j]}) - f({xs[i]})}}{{{xs[j]} - ({xs[i]})}} = \dfrac{{{f[j] - f[i]}}}{{{xs[j] - xs[i]}}} = {L(s)}$."),
        [(num(f[j] - f[i]), rf"This is the change in $f$, ${f[j]} - ({f[i]})$, without dividing by the change in $x$."),
         (num(-s), r"The order of subtraction is mixed: one difference runs left to right and the other right to left, which flips the sign."),
         (num(Rational(f[j] + f[i], 2)), r"This is the average of the two values of $f$, not the average rate of change.")], code)
tab51_value.max = 2

CTX51 = [("A balloon's height", "A hot-air balloon rises and falls during a flight. Its height above the ground, $h(t)$ meters, is a differentiable function of time $t$ minutes. Selected values are given in the table below.", "t", "h", "minutes", "meters per minute", [0, 2, 5, 9, 12]),
         ("Fuel in a tank", "The amount of fuel in a generator's tank, $F(t)$ liters, is a differentiable function of time $t$ hours. Selected values are given in the table below.", "t", "F", "hours", "liters per hour", [0, 3, 4, 8, 10])]
def tab51_interval(r):
    name, intro, tv, fv, tu, ru, ts = r.choice(CTX51)
    dt = [ts[i + 1] - ts[i] for i in range(4)]
    for _ in range(300):
        i0 = r.randrange(4); k = r.choice([-3, -2, 2, 3, 4, -4])
        vals = [r.choice(range(10, 40))]
        trap = r.choice([j for j in range(4) if j != i0 and dt[j] != 1])
        for j in range(4):
            if j == i0: ch = k * dt[j]
            elif j == trap: ch = k
            else: ch = r.choice([c for c in range(-12, 13) if c != 0])
            vals.append(vals[-1] + ch)
        sl = [Rational(vals[j + 1] - vals[j], dt[j]) for j in range(4)]
        if sum(1 for s in sl if s == k) == 1 and min(vals) >= 0:
            break
    else:
        raise Skip("no")
    code = table_set(name, intro, [f"${tv}$ ({tu})"] + [f"${a}$" for a in ts], [[f"${fv}({tv})$"] + [f"${b}$" for b in vals]])
    qq = rf"For which interval does the Mean Value Theorem guarantee a time ${tv}$ at which ${fv}'({tv}) = {k}$ {ru}?"
    def why(j):
        return rf"On $({ts[j]}, {ts[j + 1]})$ the average rate of change is $\dfrac{{{vals[j + 1]} - {vals[j]}}}{{{ts[j + 1]} - {ts[j]}}} = {L(sl[j])}$"
    wr = []
    for j in range(4):
        if j == i0: continue
        extra = rf", not ${k}$. ${fv}$ changes by ${k}$ there, but over ${dt[j]}$ {tu}." if j == trap else rf", not ${k}$, so the theorem guarantees ${fv}'({tv}) = {L(sl[j])}$ there instead."
        wr.append((text_choice(f"$({ts[j]}, {ts[j + 1]})$"), why(j) + extra))
    return mk("moderate", "5.1", qq, (text_choice(f"$({ts[i0]}, {ts[i0 + 1]})$"), rf"${fv}$ is differentiable, so it is continuous on each closed interval. " + why(i0) + rf", so by the Mean Value Theorem ${fv}'({tv}) = {k}$ for some ${tv}$ in $({ts[i0]}, {ts[i0 + 1]})$."), wr, code)
tab51_interval.max = 2

def tab51_three(r):
    xs = [1, 3, 4, 6, 9]
    for _ in range(300):
        f = [r.choice(range(-3, 9)) for _ in xs]
        # I: MVT slope on a pair with an integer slope
        pairs = [(i, j) for i in range(5) for j in range(i + 1, 5) if (f[j] - f[i]) % (xs[j] - xs[i]) == 0 and f[j] != f[i]]
        if not pairs: continue
        i1, j1 = r.choice(pairs); s1 = (f[j1] - f[i1]) // (xs[j1] - xs[i1])
        t2 = r.random() < 0.5; t3 = r.random() < 0.5
        # II: a value between f at two consecutive points (true) or outside (false)
        cons = [i for i in range(4) if abs(f[i + 1] - f[i]) >= 2]
        if not cons: continue
        i2 = r.choice(cons); lo, hi = sorted([f[i2], f[i2 + 1]])
        w2 = r.choice(range(lo + 1, hi)) if t2 else r.choice([hi + 1, hi + 2, lo - 1])
        # III: f' = 0 on an interval with equal end values (true) or on two consecutive points with different values (false)
        if t3:
            eq = [(i, j) for i in range(5) for j in range(i + 1, 5) if f[i] == f[j]]
            if not eq: continue
            i3, j3 = r.choice(eq)
        else:
            ne = [i for i in range(4) if f[i] != f[i + 1]]
            if not ne: continue
            i3 = r.choice(ne); j3 = i3 + 1
        break
    else:
        raise Skip("no")
    code = table_set("Values of f", r"The function $f$ is differentiable for all real numbers. Selected values of $f$ are given in the table below.",
                     ["$x$"] + [f"${a}$" for a in xs], [["$f(x)$"] + [f"${b}$" for b in f]])
    a1, b1, a2, b2, a3, b3 = xs[i1], xs[j1], xs[i2], xs[i2 + 1], xs[i3], xs[j3]
    stem = rf"Which of the following must be true? I. $f'(c) = {s1}$ for some $c$ in $({a1}, {b1})$. II. $f(c) = {w2}$ for some $c$ in $({a2}, {b2})$. III. $f'(c) = 0$ for some $c$ in $({a3}, {b3})$."
    e1 = rf"I is true by the Mean Value Theorem: $\dfrac{{f({b1}) - f({a1})}}{{{b1} - {a1}}} = {s1}$."
    e2 = (rf"II is true by the Intermediate Value Theorem: $f$ is continuous and ${w2}$ is between $f({a2}) = {f[i2]}$ and $f({b2}) = {f[i2 + 1]}$." if t2 else
          rf"II need not be true: ${w2}$ is not between $f({a2}) = {f[i2]}$ and $f({b2}) = {f[i2 + 1]}$, so the Intermediate Value Theorem does not apply.")
    e3 = (rf"III is true by Rolle's Theorem (the Mean Value Theorem with equal end values): $f({a3}) = f({b3}) = {f[i3]}$." if t3 else
          rf"III need not be true: $f({a3}) = {f[i3]}$ and $f({b3}) = {f[j3]}$ differ, so the Mean Value Theorem gives $f'(c) = {L(Rational(f[j3] - f[i3], b3 - a3))}$ there, not $0$.")
    exp = e1 + " " + e2 + " " + e3
    opts = ["I only", "I and II only", "I and III only", "I, II, and III"]
    key = {(False, False): "I only", (True, False): "I and II only", (False, True): "I and III only", (True, True): "I, II, and III"}[(t2, t3)]
    def wy(c):
        has2, has3 = "II" in c.replace("III", ""), "III" in c
        bad = []
        if has2 != t2: bad.append("II")
        if has3 != t3: bad.append("III")
        return "Statement " + " and statement ".join(bad) + (" is" if len(bad) == 1 else " are") + " judged wrongly. " + exp
    return mk("difficult", "5.1", stem, (text_choice(key), exp), [(text_choice(c), wy(c)) for c in opts if c != key], code)
tab51_three.max = 2

# ---------------------------------------------------------------- 5.2 Extreme Value Theorem, critical points
def t52_evt(r):
    qq = r"On which interval is $f(x) = \dfrac{1}{x - 2}$ guaranteed to have both an absolute maximum and an absolute minimum?"
    return mk("easy", "5.2", qq, (text_choice(r"$[3, 5]$"), r"$f$ is continuous on the closed interval $[3, 5]$, so the Extreme Value Theorem applies."),
        [(text_choice(r"$(3, 5)$"), r"The interval is open. On $(3, 5)$, $f$ gets close to $1$ and $\dfrac{1}{3}$ but never reaches them."),
         (text_choice(r"$[0, 4]$"), r"$f$ is not continuous at $x = 2$, which is in this interval."),
         (text_choice(r"$[2, 5]$"), r"$f$ is not defined at $x = 2$, the left endpoint, so it is not continuous on $[2, 5]$.")])
t52_evt.max = 1

def t52_cand(r):
    a = r.choice([1, 2]); lo, hi = r.choice([(-1, 3), (-1, 4), (0, 4)])
    if a >= hi: raise Skip("x")
    f = x**3 - 3 * a**2 * x
    cands = sorted(set([lo, hi] + [p for p in (a, -a) if lo < p < hi]))
    vals = {p: f.subs(x, p) for p in cands}
    mn = min(vals.values()); at = [p for p in cands if vals[p] == mn][0]
    wl = vals[lo]; mx = max(vals.values())
    distinct(mn, at, wl, mx)
    qq = rf"What is the absolute minimum value of $f(x) = {L(f)}$ on ${ivl(lo, hi)}$?"
    return mk("moderate", "5.2", qq, (num(mn), rf"$f'(x) = 3x^{{2}} - {3 * a**2}$ is $0$ at $x = \pm {a}$. The candidates in the interval are " + ", ".join(rf"$f({p}) = {v}$" for p, v in sorted(vals.items())) + rf". The smallest is ${mn}$."),
        [(num(at), rf"${at}$ is the $x$-value where the minimum occurs, not the minimum value."),
         (num(wl), rf"${wl}$ is $f({lo})$, the value at the left endpoint. The value at the critical point $x = {at}$ is smaller."),
         (num(mx), rf"${mx}$ is the absolute maximum value, the largest of the candidates.")])
t52_cand.max = 1

def t52_max(r):
    b = r.choice([2, 4, 6]); f = -x**2 + b * x + 1; hi = r.choice([b // 2 + 1, b])
    vals = {0: f.subs(x, 0), Rational(b, 2): f.subs(x, Rational(b, 2)), hi: f.subs(x, hi)}
    mx = max(vals.values())
    distinct(mx, Rational(b, 2), f.subs(x, hi), f.subs(x, 0))
    qq = rf"What is the absolute maximum value of $f(x) = {L(f)}$ on ${ivl(0, hi)}$?"
    return mk("easy", "5.2", qq, (num(mx), rf"$f'(x) = -2x + {b} = 0$ at $x = {L(Rational(b, 2))}$. Compare: " + ", ".join(rf"$f({L(p)}) = {v}$" for p, v in vals.items()) + "."),
        [(num(Rational(b, 2)), r"This is where the maximum occurs, not the maximum value."),
         (num(f.subs(x, hi)), r"This is the value at the right endpoint, which is smaller than the value at the critical point."),
         (num(f.subs(x, 0)), r"This is the value at the left endpoint $x = 0$, which is the absolute minimum.")])
t52_max.max = 1

def gen_fpoly(r, cond):
    """A continuous piecewise-linear f on [x0, x1] (the graph of f itself)."""
    return gen_poly(r, cond, x0s=(-3, -2), lens=(6, 7))

def f_set(P):
    alt = P.alt_text("the continuous function f")
    return graph_set("The graph of f", rf"The graph of the continuous function $f$ on the closed interval $[{P.x0}, {P.x1}]$ consists of line segments and is shown below.", P.gopts(alt))

def g52_crit(r):
    def ok(P):
        ext = [c for c in P.corners if c in P.infl]
        return len({len(P.corners), len(ext), len(P.zeros), len(P.corners) + 2}) == 4 and len(ext) < len(P.corners)
    P = gen_fpoly(r, ok)
    ext = [c for c in P.corners if c in P.infl]; bend = [c for c in P.corners if c not in P.infl]
    qq = rf"How many critical points does $f$ have in the open interval $({P.x0}, {P.x1})$?"
    return mk("moderate", "5.2", qq, (num(len(P.corners)), r"Each piece is a line, so $f'$ is never $0$ on a piece. At every corner the slopes from the left and right differ, so $f'$ does not exist there, and $f$ is defined there. The corners are at " + ", ".join(f"$x = {c}$" for c in P.corners) + rf", so $f$ has ${len(P.corners)}$ critical points."),
        [(num(len(ext)), rf"This counts only the corners where $f$ changes direction, the relative extrema. At $x = {bend[0]}$ the graph keeps going the same way, but $f'({bend[0]})$ still does not exist, so it is a critical point."),
         (num(len(P.zeros)), r"This counts the zeros of $f$, where the graph meets the $x$-axis. Critical points come from $f'$."),
         (num(len(P.corners) + 2), r"This also counts the two endpoints. They are candidates for absolute extrema on the closed interval, but they are not in the open interval.")], f_set(P))
g52_crit.max = 1

def g52_absloc(r):
    kind = r.choice(["maximum", "minimum"])
    def ok(P):
        vals = P.v
        best = max(vals) if kind == "maximum" else min(vals)
        locs = [P.X[i] for i, vv in enumerate(vals) if vv == best]
        endpoint_best = locs in ([P.x0], [P.x1])
        interior = [P.X[i] for i in range(1, len(vals) - 1) if (P.st[i - 1] > 0 > P.st[i] if kind == "maximum" else P.st[i - 1] < 0 < P.st[i])]
        return endpoint_best and len(interior) == 1
    P = gen_fpoly(r, ok)
    best = max(P.v) if kind == "maximum" else min(P.v)
    at = P.X[P.v.index(best)]
    inner = [P.X[i] for i in range(1, len(P.v) - 1) if (P.st[i - 1] > 0 > P.st[i] if kind == "maximum" else P.st[i - 1] < 0 < P.st[i])][0]
    other_end = P.x0 if at == P.x1 else P.x1
    uniq(at, inner, best, other_end)
    qq = rf"At what value of $x$ does $f$ attain its absolute {kind} on $[{P.x0}, {P.x1}]$?"
    return mk("moderate", "5.2", qq, (f"$x = {at}$", rf"On a closed interval the absolute {kind} is at a critical point or an endpoint. The {'highest' if kind == 'maximum' else 'lowest'} point of the graph is the endpoint $({at}, {best})$."),
        [(f"$x = {inner}$", rf"$f$ has a relative {kind} at $x = {inner}$, with $f({inner}) = {P.at(inner)}$, but the endpoint value $f({at}) = {best}$ is {'larger' if kind == 'maximum' else 'smaller'}."),
         (f"$x = {best}$", rf"${best}$ is the absolute {kind} value, $f({at})$, not the $x$-value where it occurs."),
         (f"$x = {other_end}$", rf"$f({other_end}) = {P.at(other_end)}$, which is not the {'largest' if kind == 'maximum' else 'smallest'} value on the interval.")], f_set(P))
g52_absloc.max = 1

# ---------------------------------------------------------------- 5.3 increasing and decreasing (expressions)
def t53_cubic(r):
    p, q0 = sorted(r.sample([-3, -2, -1, 1, 2, 4, 5], 2))
    fp = 3 * (x - p) * (x - q0); f = expand(integrate(fp, x))
    mid = L(Rational(p + q0, 2))
    qq = rf"On what interval is $f(x) = {L(f)}$ decreasing?"
    return mk("easy", "5.3", qq, (text_choice(rf"$\left({p}, {q0}\right)$"), rf"$f'(x) = {L(expand(fp))} = 3{fac(p)}{fac(q0)}$, which is negative between its zeros, on $({p}, {q0})$."),
        [(text_choice(rf"$\left(-\infty, {p}\right) \cup \left({q0}, \infty\right)$"), r"Those are the intervals where $f' > 0$, where $f$ is increasing."),
         (text_choice(rf"$\left({mid}, \infty\right)$"), rf"This is where $f''(x) = 6x {pm(-3 * (p + q0))} > 0$, where the graph is concave up. Direction comes from the sign of $f'$."),
         (text_choice(rf"$\left(-\infty, {mid}\right)$"), rf"This is where $f''(x) < 0$, where the graph is concave down, not where $f$ decreases.")])
t53_cubic.max = 1

def t53_factored(r):
    p, q0, s = sorted(r.sample([-3, -2, -1, 0, 1, 3, 4, 5], 3))
    sq = r.choice([0, 1])  # which zero is squared: the middle (0) or the right one (1)
    if sq == 0:
        fp_s = rf"{fac(p)}{fac(q0)}^{{2}}{fac(s)}"; key = [(r"-\infty", p), (s, r"\infty")]; nsq = (p, s); sqz = q0
        trap = [(r"-\infty", p), (q0, s)]; miss = rf"$(-\infty, {p})$"
    else:
        fp_s = rf"{fac(p)}{fac(q0)}{fac(s)}^{{2}}"; nsq = (p, q0); sqz = s
        key = [(r"-\infty", p), (q0, r"\infty")]
        trap = [(r"-\infty", p), (q0, s)]; miss = rf"$(-\infty, {p})$ and $({q0}, {s})$"
    fp_s = fp_s.replace("(x - 0)", "x")
    T = lambda v: text_choice(" and ".join(f"$({a}, {b})$" for a, b in v))
    qq = rf"The derivative of $f$ is $f'(x) = {fp_s}$. On which intervals is $f$ increasing?"
    allz = sorted([p, q0, s])
    return mk("moderate", "5.3", qq, (T(key), rf"The squared factor is never negative, so the sign of $f'$ is the sign of ${fac(nsq[0])}{fac(nsq[1])}$, which is positive when $x < {nsq[0]}$ or $x > {nsq[1]}$. At $x = {sqz}$, $f'$ is $0$ but does not change sign."),
        [(T([(nsq[0], nsq[1])]), rf"On $({nsq[0]}, {nsq[1]})$, $f' \le 0$, so $f$ is decreasing there."),
         (T(trap), rf"This treats $x = {sqz}$ as a sign change. The factor at $x = {sqz}$ is squared, so $f'$ has the same sign on both sides."),
         (T([(allz[2], r"\infty")]), r"This keeps only the interval to the right of every zero. $f'$ is also positive on " + miss + ".")])
t53_factored.max = 1

def t53_exp(r):
    k = r.choice([2, 3, 4])
    c = Rational(1, k)
    qq = rf"On what interval is $f(x) = x e^{{-{k}x}}$ increasing?"
    return mk("moderate", "5.3", qq, (text_choice(rf"$\left(-\infty, {L(c)}\right)$"), rf"By the product rule, $f'(x) = e^{{-{k}x}} - {k}xe^{{-{k}x}} = e^{{-{k}x}}(1 - {k}x)$. Since $e^{{-{k}x}} > 0$, $f' > 0$ when $x < {L(c)}$."),
        [(text_choice(rf"$\left({L(c)}, \infty\right)$"), rf"There $1 - {k}x < 0$, so $f' < 0$ and $f$ is decreasing."),
         (text_choice(rf"$\left(-\infty, {k}\right)$"), rf"This solves $1 - \dfrac{{x}}{{{k}}} > 0$, dividing by ${k}$ instead of multiplying: the chain rule gives $-{k}e^{{-{k}x}}$."),
         (text_choice(rf"$\left(-\infty, 1\right)$"), rf"This uses $f'(x) = e^{{-{k}x}}(1 - x)$, leaving out the factor ${k}$ from the chain rule.")])
t53_exp.max = 1

def t53_ln(r):
    k = r.choice([2, 8, 18, 32])   # f = x^2 - k ln x, f' = (2x^2 - k)/x, zero at sqrt(k/2)
    z = sqrt(Rational(k, 2))
    qq = rf"On what interval is $f(x) = x^{{2}} - {k}\ln x$ increasing?"
    return mk("moderate", "5.3", qq, (text_choice(rf"$\left({L(z)}, \infty\right)$"), rf"The domain is $x > 0$. $f'(x) = 2x - \dfrac{{{k}}}{{x}} = \dfrac{{2x^{{2}} - {k}}}{{x}}$, which is positive when $x^{{2}} > {k // 2}$, so for $x > {L(z)}$."),
        [(text_choice(rf"$\left(-\infty, -{L(z)}\right) \cup \left({L(z)}, \infty\right)$"), r"This ignores the domain. $\ln x$ is defined only for $x > 0$."),
         (text_choice(rf"$\left(0, {L(z)}\right)$"), r"On this interval $f' < 0$, so $f$ is decreasing."),
         (text_choice(rf"$\left({L(sqrt(k))}, \infty\right)$"), rf"This solves $x^{{2}} = {k}$, dropping the factor $2$ in $2x^{{2}} - {k} = 0$.")])
t53_ln.max = 1

# ---------------------------------------------------------------- 5.4 first derivative test (expressions and a sign table)
def t54_relmax(r):
    p, q0 = sorted(r.sample([-3, -2, -1, 0, 1, 2, 4], 2))
    fp = (x - p) * (x - q0); f = expand(integrate(3 * fp, x))
    distinct(p, q0, Rational(p + q0, 2), f.subs(x, p))
    qq = rf"At what value of $x$ does $f(x) = {L(f)}$ have a relative maximum?"
    return mk("easy", "5.4", qq, (num(p), rf"$f'(x) = 3{fac(p)}{fac(q0)}$ changes from positive to negative at $x = {p}$."),
        [(num(q0), rf"At $x = {q0}$, $f'$ changes from negative to positive, a relative minimum."),
         (num(Rational(p + q0, 2)), r"This is where $f'' = 0$, the point of inflection between the two extrema."),
         (num(f.subs(x, p)), rf"This is the relative maximum value $f({p})$, not where it occurs.")])
t54_relmax.max = 1

def t54_sign(r):
    a, b, c = sorted(r.sample([-4, -2, -1, 1, 3, 5], 3))
    sq = r.choice([a, b, c])
    others = [z for z in (a, b, c) if z != sq]
    # f' = (x - sq)^2 (x - o1)(x - o2): positive outside o1..o2, negative between
    lo, hi = others
    uniq(lo, hi, sq, -hi)
    fp_s = "".join(fac(z) + ("^{2}" if z == sq else "") for z in (a, b, c))
    qq = rf"The derivative of $f$ is $f'(x) = {fp_s}$. At which value of $x$ does $f$ have a relative minimum?"
    return mk("moderate", "5.4", qq, (f"$x = {hi}$", rf"The squared factor does not change sign, so $f'$ has the sign of ${fac(lo)}{fac(hi)}$: negative between ${lo}$ and ${hi}$ and positive outside. $f'$ changes from negative to positive only at $x = {hi}$."),
        [(f"$x = {lo}$", rf"At $x = {lo}$, $f'$ changes from positive to negative, a relative maximum."),
         (f"$x = {sq}$", rf"$f'({sq}) = 0$, but the squared factor does not change sign, so $f'$ has the same sign on both sides of $x = {sq}$."),
         (f"$x = {-hi}$", rf"This is a sign error: the zero of ${fac(hi)[1:-1]}$ is $x = {hi}$, not $x = {-hi}$.")])
t54_sign.max = 1

def tab54_count(r):
    for _ in range(100):
        pts = sorted(r.sample([-3, -2, -1, 0, 1, 2, 3, 4], 3))
        kinds = [r.choice(["0", "undefined"]) for _ in pts]
        signs = [r.choice(["+", "-"]) for _ in range(4)]
        changes = sum(1 for i in range(3) if signs[i] != signs[i + 1])
        mx = sum(1 for i in range(3) if signs[i] == "+" and signs[i + 1] == "-")
        zero_ch = sum(1 for i in range(3) if signs[i] != signs[i + 1] and kinds[i] == "0")
        if "undefined" in kinds and len({changes, 3, zero_ch, mx}) == 4 and changes > 0:
            break
    else:
        raise Skip("no")
    head = ["$x$", f"$x < {pts[0]}$", f"$x = {pts[0]}$", f"${pts[0]} < x < {pts[1]}$", f"$x = {pts[1]}$", f"${pts[1]} < x < {pts[2]}$", f"$x = {pts[2]}$", f"$x > {pts[2]}$"]
    word = {"+": "positive", "-": "negative"}
    row = ["$f'(x)$", word[signs[0]], "$0$" if kinds[0] == "0" else "undefined", word[signs[1]], "$0$" if kinds[1] == "0" else "undefined", word[signs[2]], "$0$" if kinds[2] == "0" else "undefined", word[signs[3]]]
    code = table_set("A sign chart for f'", r"The function $f$ is continuous for all real numbers. The table shows the sign of $f'(x)$, where it exists.", head, [row])
    qq = r"How many relative extrema does $f$ have?"
    where = [pts[i] for i in range(3) if signs[i] != signs[i + 1]]
    return mk("moderate", "5.4", qq, (num(changes), r"$f$ is continuous, so it has a relative extremum at each critical point where $f'$ changes sign, whether $f'$ is $0$ or undefined there. The sign changes at " + xs_list(where).replace(" only", "") + "."),
        [(num(3), r"This counts every critical point. A critical point where $f'$ keeps the same sign on both sides is not an extremum."),
         (num(zero_ch), r"This counts only sign changes where $f'(x) = 0$. A continuous function also has an extremum where $f'$ is undefined and changes sign."),
         (num(mx), r"This counts only the relative maxima, where $f'$ changes from positive to negative.")], code)
tab54_count.max = 1

# ---------------------------------------------------------------- 5.5 candidates test
def t55_abs(r):
    a, hi = r.choice([(1, 3), (2, 3), (1, 2), (2, 4)]); lo = r.choice([-2, -1, 0])
    f = x**3 - 3 * a**2 * x
    cands = sorted(set([lo, hi] + [p for p in (a, -a) if lo < p < hi]))
    vals = {p: f.subs(x, p) for p in cands}
    mx = max(vals.values()); where = [p for p in cands if vals[p] == mx]
    if len(where) > 1: raise Skip("tie")
    w = where[0]
    if len(cands) < 3: raise Skip("few")
    others = [p for p in cands if p != w]
    extra = [z for z in [a, -a, 0, hi + 1] if z not in cands and z != w]
    wr = (others + extra)[:3]
    def why(p):
        if p in cands:
            return rf"$f({p}) = {vals[p]}$ is smaller than $f({w}) = {mx}$." + (r" A relative maximum is not always the absolute maximum on a closed interval." if p in (a, -a) and p != w else "")
        return rf"$x = {p}$ is not a candidate: it is not a critical point in the interval or an endpoint."
    diff = "moderate" if w in (lo, hi) else "easy"
    qq = rf"At what value of $x$ does $f(x) = {L(f)}$ attain its absolute maximum on ${ivl(lo, hi)}$?"
    return mk(diff, "5.5", qq, (num(w), rf"$f'(x) = 3x^{{2}} - {3 * a * a} = 0$ at $x = \pm {a}$. Candidates: " + ", ".join(rf"$f({p}) = {v}$" for p, v in vals.items()) + rf". The largest value is at $x = {w}$."),
        [(num(p), why(p)) for p in wr])
t55_abs.max = 2

def t55_trig(r):
    qq = r"What is the absolute minimum value of $f(x) = x - 2\sin x$ on $[0, \pi]$?"
    return mk("moderate", "5.5", qq, (r"\frac{\pi}{3} - \sqrt{3}", r"$f'(x) = 1 - 2\cos x = 0$ at $x = \dfrac{\pi}{3}$, the only solution in $[0, \pi]$. Candidates: $f(0) = 0$, $f\left(\dfrac{\pi}{3}\right) = \dfrac{\pi}{3} - \sqrt{3} \approx -0.685$, $f(\pi) = \pi$. The smallest is $\dfrac{\pi}{3} - \sqrt{3}$."),
        [(r"\frac{5\pi}{3} + \sqrt{3}", r"This uses $x = \dfrac{5\pi}{3}$, the other solution of $\cos x = \dfrac{1}{2}$, which is outside $[0, \pi]$. It also gives a larger value, not a smaller one."),
         (r"\frac{\pi}{3} - 1", r"This uses $\sin\left(\dfrac{\pi}{3}\right) = \dfrac{1}{2}$, the cosine value. $2\sin\left(\dfrac{\pi}{3}\right) = \sqrt{3}$."),
         (L(pi / 3), r"$\dfrac{\pi}{3}$ is where the minimum occurs, not the minimum value.")])
t55_trig.max = 1

def t55_point(r):
    for _ in range(50):
        p, q0 = sorted(r.sample([-2, -1, 1, 2, 3], 2))
        k = r.choice([0, 2, 5, -3])
        f = expand(x**3 - Rational(3, 2) * (p + q0) * x**2 + 3 * p * q0 * x) + k
        lo, hi = p - 1, q0 + 1
        vals = {z: f.subs(x, z) for z in [lo, p, q0, hi]}
        mn = min(vals.values()); at = [z for z in vals if vals[z] == mn]
        if len(at) == 1 and at[0] == q0 and all(v.is_integer for v in vals.values()):
            break
    else:
        raise Skip("no")
    yq = vals[q0]
    distinct(yq, vals[lo], vals[p])
    T = lambda a, b: f"$({a}, {b})$"
    uniq(T(q0, yq), T(lo, vals[lo]), T(q0, 0), T(p, vals[p]))
    qq = rf"At what point does $f(x) = {L(f)}$ attain its absolute minimum on ${ivl(lo, hi)}$?"
    return mk("difficult", "5.5", qq, (T(q0, yq), rf"$f'(x) = 3{fac(p)}{fac(q0)} = 0$ at $x = {p}$ and $x = {q0}$. Candidates: " + ", ".join(rf"$f({z}) = {v}$" for z, v in vals.items()) + rf". The least value is ${yq}$, at $x = {q0}$."),
        [(T(lo, vals[lo]), rf"The left endpoint gives $f({lo}) = {vals[lo]}$, which is larger than $f({q0}) = {yq}$."),
         (T(q0, 0), rf"This uses $f'({q0}) = 0$ as the $y$-coordinate. The point is $({q0}, f({q0}))$."),
         (T(p, vals[p]), rf"$x = {p}$ is a relative maximum, where $f'$ changes from positive to negative.")])
t55_point.max = 1

# ---------------------------------------------------------------- 5.6 concavity (expressions)
def t56_poly(r):
    a = r.choice([-2, -1, 1, 2, 3])
    f = x**3 - 3 * a * x**2 + 5
    qq = rf"On what interval is the graph of $f(x) = {L(f)}$ concave up?"
    return mk("easy", "5.6", qq, (text_choice(rf"$\left({a}, \infty\right)$"), rf"$f''(x) = 6x {pm(-6 * a)}$, which is positive when $x > {a}$."),
        [(text_choice(rf"$\left(-\infty, {a}\right)$"), r"There $f'' < 0$, so the graph is concave down."),
         (text_choice(rf"$\left(0, {2 * a}\right)$" if a > 0 else rf"$\left({2 * a}, 0\right)$"), rf"That is where $f'(x) = 3x(x {pm(-2 * a)}) < 0$, where $f$ is decreasing. Concavity comes from $f''$."),
         (text_choice(rf"$\left({2 * a}, \infty\right)$" if a > 0 else r"$\left(0, \infty\right)$"), r"That is part of where $f' > 0$, where $f$ is increasing. Concavity comes from $f''$.")])
t56_poly.max = 1

def t56_infl(r):
    a = r.choice([1, 2, -1]); b = r.choice([2, 3, 4])
    if a == b: raise Skip("x")
    f = x**4 - 2 * (a + b) * x**3 + 6 * a * b * x**2
    lo, hi = sorted([a, b])
    qq = rf"For $f(x) = {L(f)}$, at which $x$-values does the graph have points of inflection?"
    return mk("easy", "5.6", qq, (text_choice(rf"$x = {lo}$ and $x = {hi}$"), rf"$f''(x) = 12x^{{2}} {pm(-12 * (a + b))}x {pm(12 * a * b)} = 12{fac(a)}{fac(b)}$, which changes sign at both zeros."),
        [(text_choice(rf"$x = {L(Rational(a + b, 2))}$ only"), r"This is where $f'''(x) = 0$, where $f''$ is smallest, not where $f''$ changes sign."),
         (text_choice(rf"$x = 0$ only"), r"$x = 0$ is a zero of $f'$, a horizontal tangent, not a zero of $f''$."),
         (text_choice(rf"$x = 0$, $x = {lo}$, and $x = {hi}$"), r"$f''(0) \ne 0$, so $x = 0$ is not a point of inflection.")])
t56_infl.max = 1

def t56_fpp(r):
    a, b = sorted(r.sample([-3, -1, 2, 4], 2))
    if r.random() < 0.5: a, b = b, a
    uniq(a, b, -b)
    qq = rf"The second derivative of $f$ is $f''(x) = {fac(a)}^{{2}}{fac(b)}$. At which $x$-value does the graph of $f$ have a point of inflection?"
    return mk("moderate", "5.6", qq, (text_choice(rf"$x = {b}$ only"), rf"$f''$ changes sign only at $x = {b}$. The factor ${fac(a)}^{{2}}$ is never negative, so it does not change the sign of $f''$."),
        [(text_choice(rf"$x = {a}$ only"), rf"$f''({a}) = 0$, but $f''$ has the same sign on both sides of $x = {a}$."),
         (text_choice(rf"$x = {min(a, b)}$ and $x = {max(a, b)}$"), rf"$f''(x) = 0$ at $x = {a}$ is not enough; the sign of $f''$ must change."),
         (text_choice(rf"$x = {-b}$ only"), rf"This is a sign error: the zero of ${fac(b)[1:-1]}$ is $x = {b}$.")])
t56_fpp.max = 1

def t56_fprime(r):
    a = r.choice([2, 3, -2, -1])
    qq = rf"The derivative of $f$ is $f'(x) = x^{{3}} {pm(-3 * a)}x^{{2}}$. On which interval is the graph of $f$ concave down?"
    lo, hi = sorted([0, 2 * a])
    up = rf"$(-\infty, {lo})$ and $({hi}, \infty)$"
    neg = rf"$(-\infty, 0)$ and $(0, {3 * a})$" if a > 0 else rf"$(-\infty, {3 * a})$"
    return mk("moderate", "5.6", qq, (text_choice(rf"$({lo}, {hi})$"), rf"$f''(x) = 3x^{{2}} {pm(-6 * a)}x = 3x(x {pm(-2 * a)})$, which is negative between its zeros, on $({lo}, {hi})$."),
        [(text_choice(up), r"On these intervals $f''(x) > 0$, so the graph of $f$ is concave up."),
         (text_choice(neg), rf"This is where $f'(x) = x^{{2}}(x {pm(-3 * a)}) < 0$, where $f$ is decreasing. Concavity comes from $f''$."),
         (text_choice(rf"$(-\infty, {a})$"), rf"This is where $f'''(x) = 6x {pm(-6 * a)} < 0$, where $f''$ is decreasing. Concavity depends on the sign of $f''$.")])
t56_fprime.max = 1

# ---------------------------------------------------------------- 5.7 second derivative test
def t57(r):
    p, q0 = sorted(r.sample([-2, -1, 1, 2, 3], 2))
    f = expand(integrate(3 * (x - p) * (x - q0), x))
    c = r.choice([p, q0])
    fpp = diff(f, x, 2).subs(x, c)
    kind = "relative maximum" if fpp < 0 else "relative minimum"
    qq = rf"For $f(x) = {L(f)}$, $f'({c}) = 0$. What does the Second Derivative Test say about $f$ at $x = {c}$?"
    return mk("easy", "5.7", qq, (text_choice(f"$f$ has a {kind} there, because $f''({c}) = {fpp}$."), rf"$f''(x) = {L(diff(f, x, 2))}$, so $f''({c}) = {fpp}$. A {'negative' if fpp < 0 else 'positive'} second derivative at a critical point gives a {kind}."),
        [(text_choice(f"$f$ has a {'relative minimum' if fpp < 0 else 'relative maximum'} there, because $f''({c}) = {fpp}$."), r"The test is reversed. A negative second derivative means concave down, a maximum; a positive one means a minimum."),
         (text_choice(f"$f$ has a point of inflection there, because $f'({c}) = 0$."), r"A point of inflection needs $f''$ to change sign. $f'(c) = 0$ marks a horizontal tangent."),
         (text_choice(f"The test gives no conclusion, because $f'({c}) = 0$."), r"The test needs $f'(c) = 0$ and fails only when $f''(c) = 0$.")])
t57.max = 1

def t57_zero(r):
    n = r.choice([4, 6]); s = r.choice(["", "-"])
    qq = rf"For $f(x) = {s}x^{{{n}}}$, $f'(0) = 0$ and $f''(0) = 0$. Which statement is true?"
    kind = "minimum" if s == "" else "maximum"
    return mk("difficult", "5.7", qq, (text_choice(f"The Second Derivative Test gives no conclusion, but $f$ has a relative {kind} at $x = 0$."), rf"When $f''(c) = 0$ the test fails. The First Derivative Test shows $f'$ changes from {'negative to positive' if kind == 'minimum' else 'positive to negative'} at $0$, so it is a relative {kind}."),
        [(text_choice(r"The Second Derivative Test gives no conclusion, and $f$ has a point of inflection at $x = 0$."), rf"$f''(x) = {'' if s == '' else '-'}{n * (n - 1)}x^{{{n - 2}}}$ does not change sign at $0$, so there is no point of inflection."),
         (text_choice(r"$f$ has no relative extremum at $x = 0$, because the Second Derivative Test gives $f''(0) = 0$."), r"$f''(0) = 0$ only means the test gives no conclusion. The First Derivative Test still applies."),
         (text_choice(f"The Second Derivative Test gives no conclusion, but $f$ has a relative {'maximum' if kind == 'minimum' else 'minimum'} at $x = 0$."), rf"$f'$ changes from {'negative to positive' if kind == 'minimum' else 'positive to negative'} at $0$, which is a relative {kind}.")])
t57_zero.max = 1

def tab57(r):
    want = r.choice(["maximum", "minimum"])
    xs = sorted(r.sample([-3, -2, -1, 0, 1, 2, 3, 4], 5))
    roles = r.sample(["max", "min", "flat", "infl", "other"], 5)
    fp_, fpp_ = {}, {}
    for xx, ro in zip(xs, roles):
        if ro == "max": fp_[xx], fpp_[xx] = 0, r.choice([-5, -3, -2])
        elif ro == "min": fp_[xx], fpp_[xx] = 0, r.choice([2, 4, 7])
        elif ro == "flat": fp_[xx], fpp_[xx] = 0, 0
        elif ro == "infl": fp_[xx], fpp_[xx] = r.choice([-3, 2, 5]), 0
        else: fp_[xx], fpp_[xx] = r.choice([-4, 1, 6]), r.choice([-1, 3])
    at = {ro: xx for xx, ro in zip(xs, roles)}
    code = table_set("Values of f' and f''", r"The function $f$ has a continuous second derivative. Selected values of $f'$ and $f''$ are given in the table below.",
                     ["$x$"] + [f"${a}$" for a in xs], [["$f'(x)$"] + [f"${fp_[a]}$" for a in xs], ["$f''(x)$"] + [f"${fpp_[a]}$" for a in xs]])
    k, o = ("max", "min") if want == "maximum" else ("min", "max")
    qq = rf"At which value of $x$ in the table must $f$ have a relative {want}?"
    return mk("moderate", "5.7", qq, (f"$x = {at[k]}$", rf"At $x = {at[k]}$, $f'({at[k]}) = 0$ and $f''({at[k]}) = {fpp_[at[k]]}$ is {'negative' if k == 'max' else 'positive'}. By the Second Derivative Test, $f$ has a relative {want} there."),
        [(f"$x = {at[o]}$", rf"$f'({at[o]}) = 0$ and $f''({at[o]}) > 0$, so the graph is concave up there: a relative {'minimum' if want == 'maximum' else 'maximum'}."),
         (f"$x = {at['flat']}$", rf"$f'({at['flat']}) = 0$ and $f''({at['flat']}) = 0$. The Second Derivative Test gives no conclusion, so an extremum there is not guaranteed."),
         (f"$x = {at['infl']}$", rf"$f''({at['infl']}) = 0$, but $f'({at['infl']}) = {fp_[at['infl']]} \ne 0$, so $x = {at['infl']}$ is not a critical point.")], code)
tab57.max = 2

# ---------------------------------------------------------------- 5.8 and 5.9 connecting f, f', f'' (text)
def t58_fp_graph(r):
    stmt = r.choice([
        ("The graph of $f'$ is above the $x$-axis and falling on $(a, b)$.", ("$f$ is increasing and concave down on $(a, b)$.", r"$f' > 0$, so $f$ increases; $f'$ is falling, so $f'' < 0$ and $f$ is concave down."),
         [("$f$ is decreasing and concave down on $(a, b)$.", r"$f' > 0$, so $f$ is increasing."), ("$f$ is increasing and concave up on $(a, b)$.", r"$f'$ is falling, so $f'' < 0$: concave down."), ("$f$ is decreasing and concave up on $(a, b)$.", r"Both are reversed: $f' > 0$ and $f'$ is falling.")]),
        ("The graph of $f'$ is below the $x$-axis and rising on $(a, b)$.", ("$f$ is decreasing and concave up on $(a, b)$.", r"$f' < 0$, so $f$ decreases; $f'$ is rising, so $f'' > 0$ and $f$ is concave up."),
         [("$f$ is increasing and concave up on $(a, b)$.", r"$f' < 0$, so $f$ is decreasing."), ("$f$ is decreasing and concave down on $(a, b)$.", r"$f'$ is rising, so $f'' > 0$: concave up."), ("$f$ is increasing and concave down on $(a, b)$.", r"Both are reversed: $f' < 0$ and $f'$ is rising.")]),
        ("The graph of $f'$ crosses the $x$-axis from above to below at $x = a$.", ("$f$ has a relative maximum at $x = a$.", r"$f'$ changes from positive to negative, so $f$ goes from increasing to decreasing."),
         [("$f$ has a relative minimum at $x = a$.", r"A minimum needs $f'$ to change from negative to positive."), ("$f$ has a point of inflection at $x = a$.", r"Inflection comes from a turning point of $f'$, not a zero of $f'$."), ("$f$ has a zero at $x = a$.", r"A zero of $f'$ says nothing about where $f$ itself is $0$.")]),
        ("The graph of $f'$ has a relative minimum at $x = a$.", ("The graph of $f$ has a point of inflection at $x = a$.", r"$f'$ changes from falling to rising, so $f''$ changes sign and the concavity of $f$ changes."),
         [("The function $f$ has a relative minimum at $x = a$.", r"An extremum of $f$ needs $f'$ to change sign, not to turn around."), ("The function $f$ has a relative maximum at $x = a$.", r"An extremum of $f$ needs $f'$ to change sign, not to turn around."), ("The value of the derivative is $f'(a) = 0$.", r"At a relative minimum of $f'$ it is $f''$ that is $0$; $f'$ itself can have any value.")]),
    ])
    qq = rf"{stmt[0]} Which statement about $f$ must be true?"
    return mk("easy", "5.9", qq, (text_choice(stmt[1][0]), stmt[1][1]), [(text_choice(w), y) for w, y in stmt[2]])
t58_fp_graph.max = 3

def tab59(r):
    xs = [-2, -1, 0, 1, 2, 3]
    for _ in range(100):
        fp = [r.choice([-3, -1, 2, 4]) for _ in xs]
        sc = [i for i in range(len(xs) - 1) if fp[i] * fp[i + 1] < 0]
        if len(sc) >= 2: break
    else:
        raise Skip("no")
    i = r.choice(sc)
    kind = "relative maximum" if fp[i] > 0 else "relative minimum"
    other = "relative minimum" if kind == "relative maximum" else "relative maximum"
    code = table_set("Values of f'", r"The function $f$ has a continuous derivative. Selected values of $f'$ are given in the table below.",
                     ["$x$"] + [f"${a}$" for a in xs], [["$f'(x)$"] + [f"${b}$" for b in fp]])
    qq = rf"Which conclusion is supported on the interval $({xs[i]}, {xs[i + 1]})$?"
    return mk("moderate", "5.9", qq, (text_choice(f"$f$ has a {kind} in the interval."), rf"$f'$ is continuous and goes from ${fp[i]}$ to ${fp[i + 1]}$, so by the Intermediate Value Theorem $f'$ is $0$ somewhere in the interval. If $f'$ changes sign only once there, $f$ changes from {'increasing to decreasing' if fp[i] > 0 else 'decreasing to increasing'}, a {kind}."),
        [(text_choice(f"$f$ has a {other} in the interval."), rf"$f'$ goes from {'positive to negative' if fp[i] > 0 else 'negative to positive'}, which is a {kind}, not a {other}."),
         (text_choice(r"$f$ has a point of inflection in the interval."), r"A sign change of $f'$ points to an extremum of $f$. Inflection needs a sign change of $f''$."),
         (text_choice(f"$f$ has a zero in the interval."), r"The table gives values of $f'$, not of $f$, so it says nothing about where $f = 0$.")], code)
tab59.max = 1

def t59_fpp_from_fp(r):
    a = r.choice([1, 2, 3]); b = r.choice([1, 2])
    fp = x**2 - 2 * a * x + b
    c = r.choice([0, a + 1, a - 1, 2 * a])
    fpp = diff(fp, x).subs(x, c); fpv = fp.subs(x, c)
    if fpp == 0 or fpv == 0: raise Skip("zero")
    d1 = "increasing" if fpv > 0 else "decreasing"; d2 = "concave up" if fpp > 0 else "concave down"
    o1 = "decreasing" if d1 == "increasing" else "increasing"; o2 = "concave down" if d2 == "concave up" else "concave up"
    qq = rf"The derivative of $f$ is $f'(x) = {L(fp)}$. At $x = {c}$, which is true about the graph of $f$?"
    return mk("moderate", "5.9", qq, (text_choice(f"It is {d1} and {d2}."), rf"$f'({c}) = {fpv}$, so $f$ is {d1}. $f''(x) = {L(diff(fp, x))}$ gives $f''({c}) = {fpp}$, so the graph is {d2}."),
        [(text_choice(f"It is {o1} and {d2}."), rf"The direction comes from the sign of $f'({c}) = {fpv}$."),
         (text_choice(f"It is {d1} and {o2}."), rf"The concavity comes from $f''({c}) = {fpp}$, the derivative of the given $f'$, not from $f'$ itself."),
         (text_choice(f"It is {o1} and {o2}."), r"Both signs are read backward.")])
t59_fpp_from_fp.max = 1

def t59_value(r):
    a = r.choice([1, 2, 3]); fa = r.choice([2, -3, 5]); fppa = r.choice([-4, 6, 3, -2])
    kind = "relative maximum" if fppa < 0 else "relative minimum"
    qq = rf"For a twice-differentiable function $f$, $f({a}) = {fa}$, $f'({a}) = 0$, and $f''({a}) = {fppa}$. Which statement is true?"
    return mk("easy", "5.9", qq, (text_choice(f"$f$ has a {kind} at $x = {a}$."), rf"$f'({a}) = 0$ and $f''({a}) {'< 0' if fppa < 0 else '> 0'}$ give a {kind} by the Second Derivative Test."),
        [(text_choice(f"$f$ has a {'relative minimum' if kind == 'relative maximum' else 'relative maximum'} at $x = {a}$."), r"The test is reversed: a negative second derivative gives a maximum."),
         (text_choice(f"$f$ has a point of inflection at $x = {a}$."), r"A point of inflection needs $f''$ to change sign, and here $f''({a}) \ne 0$.".replace("({a})", f"({a})")),
         (text_choice(f"$f$ is {'concave up' if fppa < 0 else 'concave down'} at $x = {a}$."), r"The sign of $f''$ gives the concavity directly, and it is the other way.")])
t59_value.max = 2

def t59_g_of_f(r):
    a = r.choice([1, 2, 4]); fpa = r.choice([3, -2, 5]); fppa = r.choice([-1, 4, 2])
    k = r.choice([2, 3])
    gpp = k * fppa
    distinct(gpp + 2, gpp, k * fpa + 2 * a, fppa + 2)
    qq = rf"Let $g(x) = {k}f(x) + x^{{2}}$. If $f'({a}) = {fpa}$ and $f''({a}) = {fppa}$, what is $g''({a})$?"
    return mk("easy", "5.9", qq, (num(gpp + 2), rf"$g''(x) = {k}f''(x) + 2$, so $g''({a}) = {k}({fppa}) + 2 = {gpp + 2}$."),
        [(num(gpp), r"The second derivative of $x^{2}$ is $2$, not $0$."),
         (num(k * fpa + 2 * a), rf"This is $g'({a}) = {k}f'({a}) + 2({a})$, the first derivative, not $g''({a})$."),
         (num(fppa + 2), rf"The constant factor ${k}$ stays in front of $f''$.")])
t59_g_of_f.max = 2

def t59_infl_count(r):
    a, b, c = sorted(r.sample([-3, -2, -1, 1, 2, 3, 4], 3))
    qq = rf"The derivative of $f$ is $f'(x) = {fac(a)}{fac(b)}{fac(c)}$. How many points of inflection does the graph of $f$ have?"
    return mk("difficult", "5.9", qq, ("2", r"$f'$ is a cubic with three different real zeros, so it has a relative maximum and a relative minimum. $f''$ changes sign at each, which gives two points of inflection."),
        [("3", r"The three zeros of $f'$ are relative extrema of $f$, not points of inflection."),
         ("1", r"$f''$ is a quadratic. Its two zeros lie between the zeros of $f'$, and $f''$ changes sign at both."),
         ("0", r"$f''$ is a quadratic with two real zeros, so it changes sign twice.")])
t59_infl_count.max = 1

# ---------------------------------------------------------------- 5.10 and 5.11 optimization
def t510_diff(r):
    d = r.choice([8, 10, 12, 14, 16, 20])
    qq = rf"Two numbers differ by ${d}$. What is the least possible value of their product?"
    return mk("easy", "5.10", qq, (num(-Rational(d * d, 4)), rf"With numbers $x$ and $x + {d}$, $P(x) = x^{{2}} + {d}x$ and $P'(x) = 2x + {d} = 0$ at $x = {-d // 2}$. $P'' = 2 > 0$, so the least product is $({-d // 2})({d // 2}) = {-d * d // 4}$."),
        [(num(Rational(d * d, 4)), rf"The sign is dropped. The numbers ${-d // 2}$ and ${d // 2}$ have a negative product."),
         (num(-Rational(d, 2)), rf"${-d // 2}$ is the smaller number, not the product."),
         (num(0), rf"$0$ is the product when one number is $0$. A negative product, such as $({-d // 2})({d // 2})$, is smaller.")])
t510_diff.max = 2


CTX510 = [("Revenue and price", r"A store's weekly revenue $R(p)$, in dollars, depends on the price $p$, in dollars, it charges for a product. $R$ is twice differentiable and $R''(p) < 0$ for all $p$. Selected values of $R'(p)$ are given in the table below.", "p", "R", [4, 6, 8, 10, 12], "price", "revenue"),
          ("Profit and staff", r"A shop's daily profit $P(n)$, in dollars, depends on the number $n$ of workers on a shift, treated as a continuous variable. $P$ is twice differentiable and $P''(n) < 0$ for all $n$. Selected values of $P'(n)$ are given in the table below.", "n", "P", [2, 4, 6, 8, 10], "number of workers", "profit")]
def tab510(r):
    name, intro, v, F, xs, what, obj = r.choice(CTX510)
    i0 = r.randrange(4)
    vals = [0] * 5
    vals[i0] = r.choice(range(1, 7)); vals[i0 + 1] = -r.choice(range(1, 7))
    for j in range(i0 - 1, -1, -1): vals[j] = vals[j + 1] + r.choice(range(2, 9))
    for j in range(i0 + 2, 5): vals[j] = vals[j - 1] - r.choice(range(2, 9))
    code = table_set(name, intro, [f"${v}$"] + [f"${a}$" for a in xs], [[f"${F}'({v})$"] + [f"${b}$" for b in vals]])
    qq = rf"Based on the table, the {what} that maximizes the {obj} is in which interval?"
    def why(j):
        a, b = vals[j], vals[j + 1]
        if a > 0 and b > 0: return rf"${F}'$ is positive at both ends of $({xs[j]}, {xs[j + 1]})$ and ${F}'$ is decreasing, so ${F}' > 0$ there and ${F}$ is still increasing."
        if a < 0 and b < 0: return rf"${F}'$ is negative at both ends of $({xs[j]}, {xs[j + 1]})$, so ${F}$ is already decreasing there."
    return mk("moderate", "5.10", qq, (text_choice(f"$({xs[i0]}, {xs[i0 + 1]})$"), rf"${F}'$ is continuous and decreasing, and it changes from ${vals[i0]}$ to ${vals[i0 + 1]}$ on $({xs[i0]}, {xs[i0 + 1]})$. So ${F}'$ is $0$ once in that interval, where ${F}$ changes from increasing to decreasing: the maximum."),
        [(text_choice(f"$({xs[j]}, {xs[j + 1]})$"), why(j)) for j in range(4) if j != i0], code)
tab510.max = 2

def g510_tri(r):
    a, hh = r.choice([(3, 4), (4, 6), (2, 6), (3, 6), (4, 4)])
    key = Rational(a * hh, 2); xs_ = Rational(a, 2)
    sq = (2 * Rational(a * hh, 2 * a + hh))**2
    distinct(key, a * hh, xs_, sq)
    x0 = Rational(a, 3); y0 = hh - Rational(hh, a) * x0
    alt = (f"An isosceles triangle with base from (-{a}, 0) to ({a}, 0) on the x-axis and top vertex at (0, {hh}). A rectangle stands on the base, "
           f"centered on the y-axis, with its two upper corners on the slanted sides; the upper right corner is labeled (x, y).")
    code = graph_set("A rectangle in a triangle", rf"A rectangle has its base on the $x$-axis and its two upper corners on the sides of the triangle with vertices $(-{a}, 0)$, $({a}, 0)$, and $(0, {hh})$, as shown below. The upper right corner is $(x, y)$.",
                     f"x: [{-a - 1}, {a + 1}], y: [0, {hh + 1}], xname: \"x\", yname: \"y\", segments: [[{-a}, 0, 0, {hh}], [0, {hh}, {a}, 0], [{-float(x0)}, 0, {-float(x0)}, {float(y0)}], [{-float(x0)}, {float(y0)}, {float(x0)}, {float(y0)}], [{float(x0)}, {float(y0)}, {float(x0)}, 0]], dots: [[{float(x0)}, {float(y0)}, \"closed\"]], labels: [[{float(x0) + 0.2}, {float(y0) + 0.3}, \"(x, y)\"]], alt: {json.dumps(alt)}", label="Diagram")
    qq = r"What is the greatest possible area of the rectangle?"
    m_ = Rational(hh, a)
    return mk("moderate", "5.10", qq, (num(key), rf"The right side of the triangle is $y = {hh} - {L(m_)}x$, and the rectangle is $2x$ wide, so $A(x) = 2x\left({hh} - {L(m_)}x\right)$ for $0 < x < {a}$. $A'(x) = {2 * hh} - {L(4 * m_)}x = 0$ at $x = {L(xs_)}$, where $A'$ changes from positive to negative. Then $y = {L(Rational(hh, 2))}$ and the area is $2\left({L(xs_)}\right)\left({L(Rational(hh, 2))}\right) = {L(key)}$."),
        [(num(a * hh), rf"${a * hh}$ is the area of the whole triangle. The rectangle cannot fill it; at best it fills half."),
         (num(xs_), rf"${L(xs_)}$ is the value of $x$ that gives the greatest area, not the area."),
         (num(sq), rf"This assumes the best rectangle is a square, $2x = y$. That square fits, but its area, ${L(sq)}$, is smaller.")], code)
g510_tri.max = 1

def g510_height(r):
    combos = []
    for a in range(3, 7):
        for M in [6, 8, 9, 10, 12]:
            for k in [Rational(1, 2), 1, Rational(1, 4)]:
                P = lambda v: M - k * (v - a) ** 2
                z = [v for v in range(1, a) if P(v) == 0]
                if z and -9 <= P(0) < 0 and min(P(8), P(0)) >= -9 and all(Rational(P(v)).q in (1, 2) for v in range(9)) and len({a, M, z[0], 0}) == 4:
                    combos.append((a, M, k, z[0]))
    a, M, k, b0 = r.choice(combos)
    lo, hi = 0, 8
    P = lambda v: M - k * (v - a) ** 2
    alt = (f"Graph of the height h, in meters above the edge of a cliff, against time t in seconds, for t from {lo} to {hi}. "
           f"The graph is a downward-opening parabola that starts at ({lo}, {float(P(lo)):g}), crosses the t-axis at t = {b0}, reaches its highest point at ({a}, {M}), and then falls to ({hi}, {float(P(hi)):g}).")
    ylo = int(min(P(lo), P(hi))) - 2
    ylo -= ylo % 2
    code = graph_set("A drone's height", r"A drone takes off from a ledge below the edge of a cliff. Its height $h(t)$, in meters above the edge of the cliff, $t$ seconds after takeoff is shown below for $0 \le t \le 8$. $h$ is differentiable.",
                     f"x: [{lo}, {hi}], y: [{ylo}, {M + 2}], step: {{ x: 1, y: 2 }}, xname: \"t\", yname: \"h\", fns: [{{ f: (x) => {M} - {float(k)} * (x - {a}) ** 2, from: {lo}, to: {hi} }}], dots: [[{a}, {M}, \"closed\"]], alt: {json.dumps(alt)}")
    qq = r"At what time $t$, in seconds, is the drone highest?"
    return mk("easy", "5.10", qq, (num(a), rf"The highest point of the graph is $({a}, {M})$. There $h'(t) = 0$, and $h'$ changes from positive to negative, so the drone is highest at $t = {a}$."),
        [(num(M), rf"${M}$ meters is the greatest height, not the time it occurs."),
         (num(b0), rf"At $t = {b0}$ the height is $0$: the drone passes the edge of the cliff. It keeps rising after that."),
         (num(0), r"At $t = 0$ the graph is steepest, so $h'$ is greatest there, but the drone is below the edge. The greatest height is where $h'$ changes from positive to negative.")], code, bias=False)
g510_height.max = 2

def t511_box(r):
    A = r.choice([48, 108, 192, 300])
    xb = sqrt(Rational(A, 3)); hb = xb / 2; V = xb**2 * hb
    distinct(V, xb**3, A * xb / 4, xb)
    qq = rf"An open-top box with a square base is made from ${A}$ square inches of material, which covers the base and the four sides. What is the greatest possible volume of the box, in cubic inches?"
    return mk("moderate", "5.11", qq, (num(V), rf"With base side $x$ and height $h$, $x^{{2}} + 4xh = {A}$, so $h = \dfrac{{{A} - x^{{2}}}}{{4x}}$ and $V(x) = x^{{2}}h = \dfrac{{{A}x - x^{{3}}}}{{4}}$. $V'(x) = \dfrac{{{A} - 3x^{{2}}}}{{4}} = 0$ at $x = {L(xb)}$, where $V'$ changes from positive to negative. Then $h = {L(hb)}$ and $V = {L(V)}$."),
        [(num(xb**3), rf"This is a cube with side ${L(xb)}$. The best open box has height $h = {L(hb)}$, half the base side, and a cube of side ${L(xb)}$ would need more than ${A}$ square inches."),
         (num(A * xb / 4), rf"This uses $V(x) = \dfrac{{{A}x}}{{4}}$ at $x = {L(xb)}$, leaving out the $-\dfrac{{x^{{3}}}}{{4}}$ term."),
         (num(xb), rf"${L(xb)}$ inches is the base side of the best box, not its volume.")])
t511_box.max = 2

def t511_ellipse(r):
    a, b = r.choice([(3, 2), (4, 3), (5, 2), (6, 4), (5, 3)])
    qq = rf"A rectangle with sides parallel to the axes is inscribed in the ellipse $\dfrac{{x^{{2}}}}{{{a * a}}} + \dfrac{{y^{{2}}}}{{{b * b}}} = 1$. What is the greatest possible area of the rectangle?"
    key = 2 * a * b
    return mk("difficult", "5.11", qq, (num(key), rf"With corner $(x, y)$ in the first quadrant, $A = 4xy$ and $y = {L(Rational(b, a))}\sqrt{{{a * a} - x^{{2}}}}$. Maximize $A^{{2}} = {L(Rational(16 * b * b, a * a))}x^{{2}}\left({a * a} - x^{{2}}\right)$: its derivative is $0$ when $x^{{2}} = {L(Rational(a * a, 2))}$. Then $y^{{2}} = {L(Rational(b * b, 2))}$ and $A = 4xy = 4\sqrt{{{L(Rational(a * a * b * b, 4))}}} = {key}$."),
        [(num(a * b), rf"${a * b} = xy$ at the best corner is the area of the quarter of the rectangle in the first quadrant. The full rectangle is $4xy$."),
         (num(4 * a * b), rf"This puts the corner at $({a}, {b})$, which is not on the ellipse."),
         (L(a * b * pi), rf"${a * b}\pi$ is the area of the whole ellipse, not of the rectangle.")])
t511_ellipse.max = 2

def t511_line(r):
    for _ in range(200):
        m_ = r.choice([2, 3, -2, -3]); bb = r.choice([-1, 1, 2, 3]); p = r.choice(range(-4, 9)); q = r.choice(range(-4, 9))
        num_ = p + m_ * (q - bb); den = 1 + m_ * m_
        if num_ % den == 0 and q != m_ * p + bb:
            xk = num_ // den
            w3 = Rational(p - m_ * (q - bb), den); w2 = Rational(q - bb, m_)
            if len({xk, p, w2, w3}) == 4: break
    else:
        raise Skip("no")
    qq = rf"What is the $x$-coordinate of the point on the line $y = {m_}x {pm(bb)}$ that is closest to the point $({p}, {q})$?"
    return mk("moderate", "5.11", qq, (num(xk), rf"Minimize the square of the distance, $S(x) = (x - ({p}))^{{2}} + ({m_}x {pm(bb)} - ({q}))^{{2}}$. $S'(x) = 2(x - ({p})) + {2 * m_}({m_}x {pm(bb - q)}) = {2 * den}x {pm(2 * m_ * (bb - q) - 2 * p)} = 0$ at $x = {xk}$, and $S'' > 0$."),
        [(num(p), rf"This takes the point of the line directly above or below $({p}, {q})$. The shortest segment to a line is perpendicular to it, not vertical."),
         (num(w2), rf"This takes the point of the line at the same height, where ${m_}x {pm(bb)} = {q}$. The shortest segment is perpendicular to the line, not horizontal."),
         (num(w3), r"A sign error in the chain rule: the derivative of $(mx + b - q)^{2}$ is $2m(mx + b - q)$, and the factor $m$ keeps its sign.")])
t511_line.max = 1

def t511_interpret(r):
    qq = r"A function is continuous on a closed interval, and its only critical point in the interval is a relative minimum. Where must its absolute maximum on the interval occur?"
    return mk("easy", "5.11", qq, (text_choice("At an endpoint."), r"On a closed interval the absolute maximum is at a critical point or an endpoint, and the only critical point is a minimum."),
        [(text_choice("At the critical point."), r"The critical point is a relative minimum, so values near it are larger."),
         (text_choice("At no point of the interval."), r"The Extreme Value Theorem guarantees an absolute maximum for a continuous function on a closed interval."),
         (text_choice("Where $f''(x) = 0$."), r"$f''(x) = 0$ locates possible points of inflection, not extrema.")])
t511_interpret.max = 1

# ---------------------------------------------------------------- 5.12 implicit curve behavior
def t512_horiz(r):
    k = r.choice([1, 2, 3])
    c = 6 * k * k
    qq = rf"For the curve $3x^{{2}} + 2xy + y^{{2}} = {c}$, $\dfrac{{dy}}{{dx}} = -\dfrac{{3x + y}}{{x + y}}$. At which points is the tangent line horizontal?"
    T = lambda a, b, cc, d: rf"$({a}, {b})$ and $({cc}, {d})$"
    v = L(k * sqrt(3))
    return mk("moderate", "5.12", qq, (text_choice(T(k, -3 * k, -k, 3 * k)), rf"Horizontal means $3x + y = 0$ with $x + y \ne 0$, so $y = -3x$. Then $3x^{{2}} - 6x^{{2}} + 9x^{{2}} = 6x^{{2}} = {c}$, so $x = \pm {k}$, and $x + y = -2x \ne 0$ there."),
        [(text_choice(T(k, 3 * k, -k, -3 * k)), rf"This uses $y = 3x$, a sign error. These points are not on the curve: $3({k})^{{2}} + 2({k})({3 * k}) + ({3 * k})^{{2}} = {30 * k * k}$."),
         (text_choice(T(-3 * k, k, 3 * k, -k)), r"The coordinates are swapped. On these points $3x + y \ne 0$."),
         (text_choice(rf"$({v}, -{v})$ and $(-{v}, {v})$"), r"These make the denominator $x + y$ equal to $0$, where the tangent line is vertical.")])
t512_horiz.max = 1

def t512_vert(r):
    k = r.choice([1, 2, 3])
    c = 2 * k * k
    qq = rf"For the curve $3x^{{2}} + 2xy + y^{{2}} = {c}$, $\dfrac{{dy}}{{dx}} = -\dfrac{{3x + y}}{{x + y}}$. At which points is the tangent line vertical?"
    T = lambda a, b, cc, d: rf"$({a}, {b})$ and $({cc}, {d})$"
    v = L(k * sqrt(2))
    return mk("moderate", "5.12", qq, (text_choice(T(k, -k, -k, k)), rf"Vertical means $x + y = 0$ with $3x + y \ne 0$, so $y = -x$. Then $3x^{{2}} - 2x^{{2}} + x^{{2}} = 2x^{{2}} = {c}$, so $x = \pm {k}$, and $3x + y = 2x \ne 0$ there."),
        [(text_choice(T(k, k, -k, -k)), rf"This uses $y = x$, a sign error. These points are not on the curve: there $3x^{{2}} + 2xy + y^{{2}} = 6x^{{2}} = {6 * k * k}$, not ${c}$."),
         (text_choice(T(k, -3 * k, -k, 3 * k)), r"These make the numerator $3x + y$ equal to $0$, which is where a tangent line is horizontal, and they are not on this curve."),
         (text_choice(rf"$(0, {v})$ and $(0, -{v})$"), r"These are where the curve crosses the $y$-axis. There $\dfrac{dy}{dx} = -\dfrac{y}{y} = -1$.")])
t512_vert.max = 1

def t512_second(r):
    a, b, rr = r.choice([(3, 4, 5), (4, 3, 5), (6, 8, 10), (5, 12, 13), (8, 6, 10)])
    key = -Rational(rr * rr, b**3)
    distinct(key, -Rational(a, b), -key, -Rational(1, b))
    qq = rf"For the circle $x^{{2}} + y^{{2}} = {rr * rr}$, what is the value of $\dfrac{{d^{{2}}y}}{{dx^{{2}}}}$ at the point $({a}, {b})$?"
    return mk("difficult", "5.12", qq, (num(key), rf"$\dfrac{{dy}}{{dx}} = -\dfrac{{x}}{{y}}$. By the quotient rule, $\dfrac{{d^{{2}}y}}{{dx^{{2}}}} = -\dfrac{{y - x\frac{{dy}}{{dx}}}}{{y^{{2}}}} = -\dfrac{{y + \frac{{x^{{2}}}}{{y}}}}{{y^{{2}}}} = -\dfrac{{x^{{2}} + y^{{2}}}}{{y^{{3}}}} = -\dfrac{{{rr * rr}}}{{{b**3}}}$."),
        [(num(-Rational(a, b)), rf"${L(-Rational(a, b))}$ is $\dfrac{{dy}}{{dx}}$ at $({a}, {b})$, the first derivative."),
         (num(-key), r"The sign is dropped. The point is on the upper half of the circle, which is concave down."),
         (num(-Rational(1, b)), r"This treats $y$ as a constant, differentiating $-\dfrac{x}{y}$ as $-\dfrac{1}{y}$. Since $y$ depends on $x$, the quotient rule brings in $\dfrac{dy}{dx}$.")])
t512_second.max = 1

TEMPLATES = {
    "5.1": [t51_c_quad, t51_avg, tab51_value, tab51_interval, t51_bound, t51_rolle, tab51_three, t51_c_cubic, t51_velocity, t51_hyp, t51_count],
    "5.2": [t52_cand, g52_crit, t52_max, g52_absloc, t52_evt],
    "5.3": [g53_incr, t53_cubic, g53_left, t53_factored, t53_exp, t53_ln],
    "5.4": [g54_ext, tab54_count, t54_relmax, g54_count, t54_sign],
    "5.5": [t55_abs, g55_abs, t55_trig, t55_point],
    "5.6": [g56_conc, t56_poly, g56_infl, g_fpp_conc("5.6"), t56_infl, t56_fpp, t56_fprime],
    "5.7": [t57, tab57, t57_zero],
    "5.8": [g_combo("5.8", "moderate"), g58_inflcount, g58_fpext, g_stmt("5.8")],
    "5.9": [g59_tangent, t58_fp_graph, g59_point, tab59, g59_label, t59_fpp_from_fp, g59_speed, t59_g_of_f, g_fpp_conc("5.9"), t59_value, g_combo("5.9", "moderate"), t59_infl_count, g_stmt("5.9")],
    "5.10": [t510_diff, g510_height, tab510, g510_tri],
    "5.11": [t511_box, t511_ellipse, t511_line, t511_interpret],
    "5.12": [t512_horiz, t512_vert, t512_second],
}
for _tp, _fns in TEMPLATES.items():
    for _fn in _fns:
        _fn.topic = _tp

# ---------------------------------------------------------------- deck writer: sets drawn by templates, and difficulty
_core_write = _core.write_deck

def write_deck(path, header, sets_js, items, unit, prefix):
    ren, allsets, n = {}, dict(sets_js), 0
    for it in items:
        k = it.get("set")
        if k and k.startswith("@@"):
            if k not in ren:
                n += 1; ren[k] = f"{prefix}-s{n}"
                allsets[ren[k]] = STIM[k]
            it["set"] = ren[k]
    _core_write(path, header, allsets, items, unit, prefix)
    text = open(path).read().split("\n")
    by = {f"{prefix}-{i:03d}": it.get("difficulty") for i, it in enumerate(items, 1)}
    out = []
    for line in text:
        m_ = re.match(r'  \{ id: "([^"]+)", type: "mcq", .*?calc: (true|false)', line)
        if m_ and by.get(m_.group(1)) and "difficulty:" not in line:
            line = line.replace(f"calc: {m_.group(2)}", f'calc: {m_.group(2)}, difficulty: "{by[m_.group(1)]}"', 1)
        out.append(line)
    open(path, "w").write("\n".join(out))

_core.write_deck = write_deck
import __main__ as _m
if getattr(_m, "write_deck", None) is _core_write:
    _m.write_deck = write_deck

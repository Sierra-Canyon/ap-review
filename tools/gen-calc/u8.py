"""Unit 8, Applications of Integration. Every key and wrong choice is computed from a named mistake.

Each template sets a difficulty the way Albert labels its own Unit 8 items (one formula: easy; a second step, a
calculator integral, or a shifted radius: moderate; two stages, a split region, a vertical axis, or rewriting in y:
difficult). Calculator templates give choices to three decimal places and set calc: true. The setups avoid the ones
listed in the Albert notes and the ones used in the Unit 8 topic quizzes and unit test.
"""
import inspect, itertools
import core
from core import *
from mpmath import mp, quad, findroot, mpf
import mpmath

mp.dps = 30
y = Symbol("y", real=True)


# core.write_deck does not write a difficulty field yet. This copy writes it when an item has one and is otherwise the
# same, so building other units in the same run is unaffected. It is applied only if core does not already do it.
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
        if it.get("difficulty"):
            parts.append(f'difficulty: "{it["difficulty"]}"')
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

if "difficulty" not in inspect.getsource(core.write_deck):
    core.write_deck.__code__ = _write_deck.__code__


def distinct(*v):
    if len(set(simplify(sympify(a)) for a in v)) < len(v):
        raise Skip("same")

def I(f, a, b, v=x):
    return integrate(f, (v, a, b))

# Answer patterns (HANDOFF rule 6): the key should be the shortest choice in roughly a fifth of the items and the
# longest in few. STATS counts the items handed to the build so far; rank() orders the three shapes by what is wanted now.
STATS = {"n": 0, "S": 0}
def _lens_shape(choices):
    l = [len(c) for c in choices]
    return 0 if l[0] < min(l[1:]) else 2 if l[0] > max(l[1:]) else 1
def rank(shape):
    want_short = STATS["S"] < 0.22 * (STATS["n"] + 1)
    return {0: 0 if want_short else 1, 1: 1 if want_short else 0, 2: 2}[shape]

def mk(topic, q, right, wrongs, diff, calc=False):
    """wrongs may list more than three named mistakes; three are shown, chosen for the answer-pattern targets."""
    if len(wrongs) > 3:
        best = None
        for combo in itertools.combinations(range(len(wrongs)), 3):
            ch = [right[0]] + [wrongs[i][0] for i in combo]
            if len(set(re.sub(r"\s+", "", c) for c in ch)) < 4:
                continue
            sc = rank(_lens_shape(ch))
            if best is None or sc < best[0]:
                best = (sc, combo)
        if best is None:
            raise Skip("choices collide")
        wrongs = [wrongs[i] for i in best[1]]
    it = item(topic, q, right, wrongs, calc=calc)
    it["difficulty"] = diff
    return it

def d3(v):
    """A calculator answer to three decimal places."""
    return f"{float(v):.3f}"

def dd(*v):
    """Calculator choices must differ after rounding."""
    s = [d3(a) for a in v]
    if len(set(s)) < len(s):
        raise Skip("same after rounding")
    return s

def nint(f, a, b, var=x):
    g = lambdify(var, f, "mpmath")
    return quad(g, [mpf(float(a)), mpf(float(b))])

def crossings(f, a, b, var=x, n=2000):
    g = lambdify(var, f, "mpmath")
    xs = [mpf(a) + (mpf(b) - mpf(a)) * i / n for i in range(n + 1)]
    out = []
    for i in range(n):
        u, w = g(xs[i]), g(xs[i + 1])
        if u == 0:
            out.append(xs[i])
        elif u * w < 0:
            out.append(findroot(g, (xs[i], xs[i + 1]), solver="bisect"))
    return out

from sympy import lambdify

def pie(V):
    """pi times a polynomial in e, written the same way for every choice: \\dfrac{\\pi}{2}\\left(...\\right)."""
    q = expand(V / pi)
    P = Poly(q.subs(E, Symbol("EE")), Symbol("EE"))
    den = 1
    for c_ in P.coeffs():
        den = max(den, Rational(c_).q)
    terms = []
    for (k,), c_ in sorted(P.terms(), key=lambda u: -u[0][0]):
        c_ = c_ * den
        base = {0: "", 1: "e"}.get(k, f"e^{{{k}}}")
        mag = abs(c_)
        body = (str(mag) if (mag != 1 or k == 0) else "") + base
        terms.append(("-" if c_ < 0 else "+", body))
    sgn, first = terms[0]
    out = ("-" if sgn == "-" else "") + first + "".join(f" {g} {b}" for g, b in terms[1:])
    if den == 1:
        return rf"\pi\left({out}\right)"
    return rf"\dfrac{{\pi}}{{{den}}}\left({out}\right)"

def poly_t(e):
    """LaTeX of a polynomial in t, written in descending powers."""
    return L(Poly(e, t).as_expr())


# ---------------------------------------------------------------- 8.1 average value
def t81_poly(r):
    a = r.choice([3, 9]); b = r.choice([-2, 2, 4]); c = r.choice([1, 5]); p, q = r.choice([(0, 2), (1, 3), (-1, 2), (0, 3)])
    f = a * x**2 + b * x + c
    tot = I(f, p, q); avg = tot / (q - p)
    ends = (f.subs(x, p) + f.subs(x, q)) / 2; aroc = (f.subs(x, q) - f.subs(x, p)) / (q - p)
    distinct(avg, tot, ends, aroc)
    F = integrate(f, x)
    qs = rf"What is the average value of $f(x) = {L(f)}$ on the interval ${p} \le x \le {q}$?"
    return mk("8.1", qs, (num(avg), rf"The average value is $\dfrac{{1}}{{{q - p}}}\displaystyle\int_{{{p}}}^{{{q}}} \left({L(f)}\right)dx = \dfrac{{1}}{{{q - p}}}\Big[{L(F)}\Big]_{{{p}}}^{{{q}}} = \dfrac{{{L(tot)}}}{{{q - p}}} = {L(avg)}$."),
        [(num(tot), rf"This is the value of the integral, ${L(tot)}$, without dividing by the length of the interval, ${q - p}$."),
         (num(ends), rf"This is the average of the endpoint values, $\dfrac{{f({p}) + f({q})}}{{2}}$. The average value of a function comes from its integral, not from two of its values."),
         (num(aroc), rf"This is the average rate of change, $\dfrac{{f({q}) - f({p})}}{{{q} - ({p})}}$, the slope of a secant line, not the average value of $f$."),
         (num(f.subs(x, q)), rf"This is $f({q})$, the value of $f$ at the right endpoint, not its average value over the interval."),
         (num(F.subs(x, q) / (q - p)), rf"This evaluates the antiderivative at the upper limit only, $\dfrac{{1}}{{{q - p}}}\left({L(F)}\right)$ at $x = {q}$, and leaves out the value at the lower limit $x = {p}$.")], "easy")
t81_poly.max = 1

def t81_recip(r):
    k = r.choice([4, 6, 8]); n = r.choice([2, 3, 4])
    f = k / x**2
    tot = I(f, 1, n); avg = tot / (n - 1)
    ends = (f.subs(x, 1) + f.subs(x, n)) / 2; aroc = (f.subs(x, n) - f.subs(x, 1)) / (n - 1)
    distinct(avg, tot, ends, aroc)
    qs = rf"What is the average value of $f(x) = \dfrac{{{k}}}{{x^2}}$ on the interval $1 \le x \le {n}$?"
    return mk("8.1", qs, (num(avg), rf"The average value is $\dfrac{{1}}{{{n} - 1}}\displaystyle\int_1^{{{n}}} \dfrac{{{k}}}{{x^2}}\,dx = \dfrac{{1}}{{{n - 1}}}\Big[-\dfrac{{{k}}}{{x}}\Big]_1^{{{n}}} = \dfrac{{1}}{{{n - 1}}}\left({L(tot)}\right) = {L(avg)}$."),
        [(num(tot), rf"This is the value of the integral, ${L(tot)}$, without dividing by the length of the interval, ${n - 1}$."),
         (num(ends), rf"This is the average of the endpoint values, $\dfrac{{f(1) + f({n})}}{{2}}$. The average value of a function comes from its integral, not from two of its values."),
         (num(aroc), rf"This is the average rate of change, $\dfrac{{f({n}) - f(1)}}{{{n} - 1}}$, the slope of a secant line, not the average value of $f$.")], "easy")
t81_recip.max = 1

def t81_abs(r):
    m_ = r.choice([2, 3]); c = r.choice([1, 2]); b = r.choice([4, 5])
    f = m_ * Abs(x - c)
    tot = Rational(m_ * c**2, 2) + Rational(m_ * (b - c)**2, 2); avg = tot / b
    noabs = I(m_ * (x - c), 0, b) / b; ends = (m_ * c + m_ * (b - c)) / Rational(2)
    distinct(avg, tot, noabs, ends)
    qs = rf"What is the average value of $f(x) = {m_}\left|x - {c}\right|$ on the interval $0 \le x \le {b}$?"
    return mk("8.1", qs, (num(avg), rf"The graph of $f$ is two triangles above the $x$-axis that meet at $x = {c}$. Their areas are $\dfrac{{1}}{{2}}({c})({m_ * c}) = {L(Rational(m_ * c**2, 2))}$ and $\dfrac{{1}}{{2}}({b - c})({m_ * (b - c)}) = {L(Rational(m_ * (b - c)**2, 2))}$, so $\displaystyle\int_0^{{{b}}} f(x)\,dx = {L(tot)}$ and the average value is $\dfrac{{{L(tot)}}}{{{b}}} = {L(avg)}$."),
        [(num(noabs), rf"This integrates ${m_}(x - {c})$ without the absolute value. Its part on $0 < x < {c}$ is negative and cancels some of the area, but $f(x) \ge 0$ everywhere."),
         (num(tot), rf"This is $\displaystyle\int_0^{{{b}}} f(x)\,dx = {L(tot)}$ without dividing by the length of the interval, ${b}$."),
         (num(ends), rf"This is the average of the endpoint values, $\dfrac{{f(0) + f({b})}}{{2}} = \dfrac{{{m_ * c} + {m_ * (b - c)}}}{{2}}$. The average value comes from the integral.")], "moderate")
t81_abs.max = 1

def t81_trig(r):
    a = r.choice([3, 4, 6])
    avg = 2 * a / pi
    qs = rf"What is the average value of $f(x) = {a}\sin\left(\dfrac{{x}}{{2}}\right)$ on the interval $0 \le x \le \pi$?"
    return mk("8.1", qs, (num(avg), rf"An antiderivative of ${a}\sin\left(\dfrac{{x}}{{2}}\right)$ is $-{2 * a}\cos\left(\dfrac{{x}}{{2}}\right)$, so $\displaystyle\int_0^{{\pi}} f(x)\,dx = -{2 * a}\cos\dfrac{{\pi}}{{2}} + {2 * a}\cos 0 = {2 * a}$. The average value is $\dfrac{{{2 * a}}}{{\pi}}$."),
        [(num(a / pi), rf"This uses $-{a}\cos\left(\dfrac{{x}}{{2}}\right)$ as the antiderivative. The chain rule gives a factor of $2$, since the derivative of $\cos\left(\dfrac{{x}}{{2}}\right)$ is $-\dfrac{{1}}{{2}}\sin\left(\dfrac{{x}}{{2}}\right)$."),
         (num(a / (2 * pi)), rf"This multiplies by $\dfrac{{1}}{{2}}$ instead of dividing by it, using $-\dfrac{{{a}}}{{2}}\cos\left(\dfrac{{x}}{{2}}\right)$ as the antiderivative."),
         (num(-avg), rf"This uses ${2 * a}\cos\left(\dfrac{{x}}{{2}}\right)$ as the antiderivative. The antiderivative of $\sin$ is $-\cos$, so the sign is wrong.")], "moderate")
t81_trig.max = 1

CALC81 = [(log(1 + x**2), 0, 3, r"\ln\left(1 + x^2\right)"), (sqrt(x) * exp(-x / 3), 0, 4, r"\sqrt{x}\,e^{-x/3}"), (4 / (2 + sin(x)), 0, 5, r"\dfrac{4}{2 + \sin x}")]
def t81_calc(r):
    f, a, b, tex = r.choice(CALC81)
    tot = nint(f, a, b); avg = tot / (b - a)
    fa, fb = f.subs(x, a), f.subs(x, b)
    ends = (fa + fb) / 2; aroc = (fb - fa) / (b - a)
    mid = f.subs(x, Rational(a + b, 2))
    ch = dd(avg, tot, ends, aroc, mid)
    qs = rf"What is the average value of $f(x) = {tex}$ on the interval ${a} \le x \le {b}$?"
    return mk("8.1", qs, (ch[0], rf"With a calculator, $\displaystyle\int_{{{a}}}^{{{b}}} f(x)\,dx = {d3(tot)}$, so the average value is $\dfrac{{{d3(tot)}}}{{{b - a}}} = {ch[0]}$."),
        [(ch[1], rf"This is $\displaystyle\int_{{{a}}}^{{{b}}} f(x)\,dx$ without dividing by the length of the interval, ${b - a}$."),
         (ch[2], rf"This is the average of the endpoint values, $\dfrac{{f({a}) + f({b})}}{{2}}$. The average value of a function comes from its integral."),
         (ch[3], rf"This is the average rate of change of $f$, $\dfrac{{f({b}) - f({a})}}{{{b - a}}}$, not the average value of $f$."),
         (ch[4], rf"This is $f\left({L(Rational(a + b, 2))}\right)$, the value of $f$ at the midpoint of the interval. A curve's average value is not its value at the middle.")], "moderate", calc=True)
t81_calc.max = 2


# ---------------------------------------------------------------- 8.2 motion
def t82_pos(r):
    a = r.choice([3, 6]); b = r.choice([-4, 2]); c = r.choice([1, -5]); x0 = r.choice([-4, 7]); T = r.choice([2, 3])
    v = a * t**2 + b * t + c
    disp = I(v, 0, T, t); pos = x0 + disp; vT = v.subs(t, T)
    distinct(pos, disp, disp - x0, x0 + vT)
    qs = rf"A particle moves along the $x$-axis with velocity $v(t) = {poly_t(v)}$. At time $t = 0$, the particle is at $x = {x0}$. What is the position of the particle at time $t = {T}$?"
    return mk("8.2", qs, (num(pos), rf"$x({T}) = x(0) + \displaystyle\int_0^{{{T}}} v(t)\,dt = {x0} + \Big[{poly_t(integrate(v, t))}\Big]_0^{{{T}}} = {x0} + {L(disp)} = {L(pos)}$."),
        [(num(disp), rf"This is the displacement, $\displaystyle\int_0^{{{T}}} v(t)\,dt = {L(disp)}$. The starting position $x(0) = {x0}$ must be added."),
         (num(disp - x0), rf"This subtracts the starting position. The position is $x(0) + \displaystyle\int_0^{{{T}}} v(t)\,dt$."),
         (num(x0 + vT), rf"This adds the velocity at $t = {T}$, $v({T}) = {L(vT)}$, to the starting position instead of adding the integral of the velocity.")], "easy")
t82_pos.max = 2

def t82_posmid(r):
    a = r.choice([3, 6]); c = r.choice([-2, -8]); p = r.choice([5, -1]); T = r.choice([3, 4])
    v = a * t**2 + c
    piece = I(v, 1, T, t); pos = p + piece; from0 = p + I(v, 0, T, t)
    distinct(pos, from0, piece, p - piece)
    qs = rf"A particle moves along the $x$-axis with velocity $v(t) = {poly_t(v)}$. At time $t = 1$, the particle is at $x = {p}$. What is the position of the particle at time $t = {T}$?"
    return mk("8.2", qs, (num(pos), rf"The known position is at $t = 1$, so $x({T}) = x(1) + \displaystyle\int_1^{{{T}}} v(t)\,dt = {p} + \Big[{poly_t(integrate(v, t))}\Big]_1^{{{T}}} = {p} + {L(piece)} = {L(pos)}$."),
        [(num(from0), rf"This integrates from $t = 0$, as if the particle were at $x = {p}$ at $t = 0$. The given position is at $t = 1$, so the integral starts at $t = 1$."),
         (num(piece), rf"This is the displacement from $t = 1$ to $t = {T}$, without adding the position $x(1) = {p}$."),
         (num(p - piece), rf"This subtracts the displacement from $x(1)$. The position is $x(1)$ plus the integral of the velocity.")], "moderate")
t82_posmid.max = 1

def t82_disp(r):
    b = r.choice([3, 5]); T = r.choice([b + 1, b + 2])
    v = 2 * t - 2 * b
    disp = I(v, 0, T, t); dist = I(Abs(v), 0, T, t); vT = v.subs(t, T)
    distinct(disp, dist, vT * T, disp / T)
    qs = rf"A particle moves along a line with velocity $v(t) = {poly_t(v)}$ meters per second. What is the displacement of the particle, in meters, from $t = 0$ to $t = {T}$?"
    return mk("8.2", qs, (num(disp), rf"Displacement is $\displaystyle\int_0^{{{T}}} v(t)\,dt = \Big[t^{{2}} - {2 * b}t\Big]_0^{{{T}}} = {T * T} - {2 * b * T} = {L(disp)}$ meters."),
        [(num(dist), rf"This is the total distance, $\displaystyle\int_0^{{{T}}} \left|v(t)\right|dt$. The particle moves left until $t = {b}$, and displacement counts that motion as negative."),
         (num(vT * T), rf"This is $v({T}) \cdot {T}$, which treats the velocity as constant at its final value."),
         (num(disp / T), rf"This is the average velocity, the displacement divided by the length of the time interval.")], "easy")
t82_disp.max = 1

def t82_dist(r):
    p, q, T, s = r.choice([(1, 4, 3, 3), (1, 5, 3, 1), (1, 6, 4, 1)])
    v = s * (t - p) * (t - q)
    A = I(v, 0, p, t); B = I(v, p, T, t)
    dist = abs(A) + abs(B); disp = A + B
    distinct(dist, disp, abs(A), abs(B))
    qs = rf"A particle moves along a line with velocity $v(t) = {poly_t(expand(v))}$. What is the total distance the particle travels from $t = 0$ to $t = {T}$?"
    return mk("8.2", qs, (num(dist), rf"$v(t) = {s if s > 1 else ''}(t - {p})(t - {q})$ is positive on $0 < t < {p}$ and negative on ${p} < t < {T}$. $\displaystyle\int_0^{{{p}}} v(t)\,dt = {L(A)}$ and $\displaystyle\int_{{{p}}}^{{{T}}} v(t)\,dt = {L(B)}$, so the total distance is ${L(abs(A))} + {L(abs(B))} = {L(dist)}$."),
        [(num(disp), rf"This is the displacement, $\displaystyle\int_0^{{{T}}} v(t)\,dt$. The particle turns around at $t = {p}$, so the motion to the left must be added as a positive distance."),
         (num(abs(A)), rf"This is the distance traveled before the particle turns around at $t = {p}$. It leaves out the motion on ${p} < t < {T}$."),
         (num(abs(B)), rf"This is the distance traveled after the particle turns around at $t = {p}$ only. It leaves out the motion on $0 < t < {p}$."),
         (num(abs(A) + abs(I(v, p, q, t))), rf"This finds the distance up to $t = {q}$, the second zero of $v$, instead of stopping at $t = {T}$.")], "difficult")
t82_dist.max = 2

def t82_acc(r):
    k = r.choice([6, 12]); c = r.choice([-2, 4]); v0 = r.choice([3, -5]); x0 = r.choice([2, -1]); T = r.choice([2, 3])
    a = k * t + c
    v = v0 + integrate(a, t); xT = x0 + I(v, 0, T, t)
    noV0 = x0 + I(integrate(a, t), 0, T, t); noX0 = xT - x0; vT = v.subs(t, T)
    distinct(xT, noV0, noX0, vT)
    qs = rf"A particle moves along the $x$-axis with acceleration $a(t) = {poly_t(a)}$. At time $t = 0$, its velocity is ${v0}$ and its position is $x = {x0}$. What is the position of the particle at time $t = {T}$?"
    return mk("8.2", qs, (num(xT), rf"$v(t) = {v0} + \displaystyle\int_0^t a(s)\,ds = {poly_t(v)}$. Then $x({T}) = {x0} + \displaystyle\int_0^{{{T}}} \left({poly_t(v)}\right)dt = {x0} + {L(I(v, 0, T, t))} = {L(xT)}$."),
        [(num(noV0), rf"This leaves out the initial velocity ${v0}$ when finding $v(t)$, so the term ${v0}t$ is missing from the position."),
         (num(noX0), rf"This is the displacement from $t = 0$ to $t = {T}$. It leaves out the starting position $x(0) = {x0}$."),
         (num(vT), rf"This is the velocity at $t = {T}$, $v({T})$. The acceleration must be integrated twice to reach position.")], "difficult")
t82_acc.max = 1

def t82_stop(r):
    c, k = r.choice([(12, 3), (8, 2), (16, 4)])
    ts = Rational(c, k)**2; tw = Rational(c, k)
    v = c - k * sqrt(t)
    dist = I(v, 0, ts, t); wrong_t = I(v, 0, tw, t); lin = c * ts / 2
    distinct(dist, wrong_t, c * ts, lin)
    qs = rf"A cart moves along a straight track with velocity $v(t) = {c} - {k}\sqrt{{t}}$ meters per second, starting at $t = 0$. How many meters does the cart travel before it first comes to a stop?"
    return mk("8.2", qs, (num(dist), rf"The cart stops when ${c} - {k}\sqrt{{t}} = 0$, so $\sqrt{{t}} = {L(tw)}$ and $t = {L(ts)}$. The velocity is positive before then, so the distance is $\displaystyle\int_0^{{{L(ts)}}} \left({c} - {k}\sqrt{{t}}\right)dt = \Big[{c}t - {L(Rational(2 * k, 3))}t^{{3/2}}\Big]_0^{{{L(ts)}}} = {L(dist)}$."),
        [(num(wrong_t), rf"This stops the integral at $t = {L(tw)}$, the value of $\sqrt{{t}}$, not of $t$. The cart stops at $t = {L(ts)}$."),
         (num(c * ts), rf"This is ${c} \cdot {L(ts)}$, which treats the velocity as constant at its starting value of ${c}$."),
         (num(lin), rf"This is the average of the starting and final velocities times the time, $\dfrac{{{c} + 0}}{{2}} \cdot {L(ts)}$. That works only when the velocity decreases linearly, and $\sqrt{{t}}$ is not linear.")], "difficult")
t82_stop.max = 1

def t82_meaning(r):
    T = r.choice([4, 6, 10])
    opts = [(rf"\displaystyle\int_0^{{{T}}} \left|v(t)\right|dt", f"The total distance the particle travels from $t = 0$ to $t = {T}$"),
            (rf"\displaystyle\int_0^{{{T}}} v(t)\,dt", f"The change in the particle's position from $t = 0$ to $t = {T}$"),
            (rf"\displaystyle\int_0^{{{T}}} a(t)\,dt", f"The change in the particle's velocity from $t = 0$ to $t = {T}$"),
            (rf"\dfrac{{1}}{{{T}}}\displaystyle\int_0^{{{T}}} v(t)\,dt", f"The particle's average velocity from $t = 0$ to $t = {T}$")]
    k = r.choice(range(4))
    expr, key = opts[k]
    why_wrong = {0: r"This is $\displaystyle\int \left|v(t)\right|dt$, which counts motion in both directions as positive.",
                 1: r"This is $\displaystyle\int v(t)\,dt$, the net change in position, where motion to the left counts as negative.",
                 2: r"This is $\displaystyle\int a(t)\,dt$. Acceleration is the rate of change of velocity, so its integral is a change in velocity.",
                 3: r"This is the integral of $v$ divided by the length of the interval."}
    why_key = {0: r"Speed $\left|v(t)\right|$ is the rate at which distance is covered, so its integral is the total distance.",
               1: r"Velocity is the rate of change of position, so its integral over an interval is the change in position.",
               2: r"Acceleration is the rate of change of velocity, so its integral over an interval is the change in velocity.",
               3: r"Dividing the displacement $\displaystyle\int v(t)\,dt$ by the length of the time interval gives the average velocity."}
    qs = rf"A particle moves along a line with velocity $v(t)$ and acceleration $a(t)$ at time $t$ seconds. Which of the following is the meaning of ${expr}$?"
    return mk("8.2", qs, (text_choice(key + "."), why_key[k]),
        [(text_choice(opts[j][1] + "."), why_wrong[j]) for j in range(4) if j != k], "easy")
t82_meaning.max = 1

CALCV = [(exp(t / 3) * cos(t), 0, 3, r"e^{t/3}\cos t"), (log(t + 1) - 1, 0, 4, r"\ln(t + 1) - 1"), (t * cos(t / 2), 0, 5, r"t\cos\left(\dfrac{t}{2}\right)")]
def t82_calcdist(r):
    v, a, b, tex = r.choice(CALCV)
    z = crossings(v, a + mpf("1e-9"), b, var=t)
    if len(z) != 1: raise Skip("one turn")
    z = z[0]
    A = nint(v, a, z, t); B = nint(v, z, b, t)
    ch = dd(abs(A) + abs(B), A + B, abs(A), abs(B), abs(v.subs(t, b)) * (b - a))
    qs = rf"A particle moves along a line with velocity $v(t) = {tex}$ for ${a} \le t \le {b}$. What is the total distance the particle travels from $t = {a}$ to $t = {b}$?"
    return mk("8.2", qs, (ch[0], rf"The total distance is $\displaystyle\int_{{{a}}}^{{{b}}} \left|v(t)\right|dt = {ch[0]}$. The velocity changes sign at $t = {d3(z)}$, so the particle moves ${d3(abs(A))}$ units one way and then ${d3(abs(B))}$ units back."),
        [(ch[1], rf"This is the displacement, $\displaystyle\int_{{{a}}}^{{{b}}} v(t)\,dt$. The particle turns around at $t = {d3(z)}$, so part of the motion is subtracted."),
         (ch[2], rf"This is the distance traveled before the particle turns around at $t = {d3(z)}$ only."),
         (ch[3], rf"This is the distance traveled after the particle turns around at $t = {d3(z)}$ only."),
         (ch[4], rf"This is $\left|v({b})\right| \cdot {b - a}$, which treats the speed as constant at its value at $t = {b}$.")], "moderate", calc=True)
t82_calcdist.max = 2

CALCP = [(2 * log(t**2 + 1), 3, r"2\ln\left(t^2 + 1\right)"), (3 + t * sin(t), 4, r"3 + t\sin t"), (5 * exp(-t / 2) * sqrt(t), 4, r"5\sqrt{t}\,e^{-t/2}")]
def t82_calcpos(r):
    v, T, tex = r.choice(CALCP); x0 = r.choice([-6, 2, 5])
    D_ = nint(v, 0, T, t); pos = x0 + D_
    ch = dd(pos, D_, x0 - D_, x0 + v.subs(t, T), x0 + v.subs(t, T) * T)
    qs = rf"A particle moves along the $x$-axis with velocity $v(t) = {tex}$. At time $t = 0$, the particle is at $x = {x0}$. What is the position of the particle at time $t = {T}$?"
    return mk("8.2", qs, (ch[0], rf"$x({T}) = x(0) + \displaystyle\int_0^{{{T}}} v(t)\,dt = {x0} + {d3(D_)} = {ch[0]}$."),
        [(ch[1], rf"This is the displacement, $\displaystyle\int_0^{{{T}}} v(t)\,dt$, without adding the starting position $x(0) = {x0}$."),
         (ch[2], rf"This subtracts the displacement from the starting position. The position is $x(0) + \displaystyle\int_0^{{{T}}} v(t)\,dt$."),
         (ch[3], rf"This adds the velocity at $t = {T}$ to the starting position instead of the integral of the velocity."),
         (ch[4], rf"This adds $v({T}) \cdot {T}$, which treats the velocity as constant at its value at $t = {T}$.")], "moderate", calc=True)
t82_calcpos.max = 2

def t82_avgvel(r):
    v = 5 * cos(t / 2) * exp(-t / 5); T = r.choice([6, 8])
    z = crossings(v, 0, T, var=t)
    disp = nint(v, 0, T, t); dist = sum(abs(nint(v, a, b, t)) for a, b in zip([0] + z, z + [T]))
    ch = dd(disp / T, (v.subs(t, 0) + v.subs(t, T)) / 2, dist / T, disp)
    qs = rf"A particle moves along a line with velocity $v(t) = 5\cos\left(\dfrac{{t}}{{2}}\right)e^{{-t/5}}$. What is the average velocity of the particle over the interval $0 \le t \le {T}$?"
    return mk("8.2", qs, (ch[0], rf"Average velocity is $\dfrac{{1}}{{{T}}}\displaystyle\int_0^{{{T}}} v(t)\,dt = \dfrac{{{d3(disp)}}}{{{T}}} = {ch[0]}$."),
        [(ch[1], rf"This is the average of the velocities at the endpoints, $\dfrac{{v(0) + v({T})}}{{2}}$. The average value of $v$ comes from its integral."),
         (ch[2], rf"This is $\dfrac{{1}}{{{T}}}\displaystyle\int_0^{{{T}}} \left|v(t)\right|dt$, the average speed. The velocity changes sign at $t = \pi$, and average velocity keeps the sign."),
         (ch[3], rf"This is the displacement, $\displaystyle\int_0^{{{T}}} v(t)\,dt$, without dividing by the length of the interval, ${T}$.")], "moderate", calc=True)
t82_avgvel.max = 1


# ---------------------------------------------------------------- 8.3 applied accumulation
def t83_exact(r):
    a = r.choice([8, 15]); b = r.choice([3, 4]); A0 = r.choice([25, 120]); T = r.choice([4, 5])
    R = a + b * t
    gain = I(R, 0, T, t); amt = A0 + gain; RT = R.subs(t, T)
    distinct(amt, gain, A0 + RT, A0 + RT * T)
    qs = rf"A bin holds ${A0}$ kilograms of grain at time $t = 0$. Grain is added to the bin at a rate of $r(t) = {a} + {b}t$ kilograms per hour, and none is removed. How many kilograms of grain are in the bin at $t = {T}$ hours?"
    return mk("8.3", qs, (num(amt), rf"${A0} + \displaystyle\int_0^{{{T}}} \left({a} + {b}t\right)dt = {A0} + \Big[{a}t + {L(Rational(b, 2))}t^{{2}}\Big]_0^{{{T}}} = {A0} + {L(gain)} = {L(amt)}$."),
        [(num(gain), rf"This is the grain added from $t = 0$ to $t = {T}$, ${L(gain)}$, without the ${A0}$ kilograms already in the bin."),
         (num(A0 + RT), rf"This adds the rate at $t = {T}$, $r({T}) = {L(RT)}$ kilograms per hour, instead of the amount added."),
         (num(A0 + RT * T), rf"This uses $r({T}) \cdot {T}$ for the amount added, as if grain were added at the constant rate $r({T})$ the whole time.")], "easy")
t83_exact.max = 1

def t83_units(r):
    qs = r"Snow falls on a field at a rate of $S(t)$ centimeters per hour, where $t$ is measured in hours. What are the units of $\displaystyle\int_1^6 S(t)\,dt$?"
    return mk("8.3", qs, (text_choice("centimeters"), r"The integral of a rate over a time interval is an amount: centimeters per hour times hours gives centimeters."),
        [(text_choice("centimeters per hour"), r"Those are the units of $S(t)$, the rate. Integrating with respect to $t$ multiplies by hours."),
         (text_choice("centimeters per hour per hour"), r"Those are the units of $S'(t)$, the rate at which the snowfall rate changes."),
         (text_choice("hours"), r"Hours are the units of $t$. The integral multiplies the rate, in centimeters per hour, by hours.")], "easy")
t83_units.max = 1

AMT = [("An oven is turned on at time $t = 0$, when its temperature is $70$ degrees Fahrenheit. Its temperature rises at a rate of $H(t) = 40e^{-0.3t}$ degrees Fahrenheit per minute.",
        70, 40 * exp(-0.3 * t), 5, "What is the temperature of the oven at $t = 5$ minutes?", "degrees", "H"),
       ("A new app has $1000$ downloads at time $t = 0$. For $t > 0$, it is downloaded at a rate of $D(t) = 200\\ln(t + 2)$ downloads per day.",
        1000, 200 * log(t + 2), 7, "How many total downloads does the app have at $t = 7$ days?", "downloads", "D"),
       ("A pond holds $350$ cubic meters of water at time $t = 0$. Water flows in from a stream at a rate of $W(t) = 12 + 6\\sin\\left(\\dfrac{t^2}{5}\\right)$ cubic meters per hour, and no water leaves.",
        350, 12 + 6 * sin(t**2 / 5), 6, "How many cubic meters of water are in the pond at $t = 6$ hours?", "cubic meters", "W")]
def t83_calcamount(r):
    stem, A0, R, T, q, unit, nm = r.choice(AMT)
    gain = nint(R, 0, T, t)
    ch = dd(A0 + gain, gain, A0 + R.subs(t, T), A0 + R.subs(t, T) * T, A0 + R.subs(t, T) - R.subs(t, 0))
    return mk("8.3", stem + " " + q, (ch[0], rf"The amount at $t = {T}$ is ${A0} + \displaystyle\int_0^{{{T}}} {nm}(t)\,dt = {A0} + {d3(gain)} = {ch[0]}$ {unit}."),
        [(ch[1], rf"This is $\displaystyle\int_0^{{{T}}} {nm}(t)\,dt$, the change from $t = 0$ to $t = {T}$, without the starting value ${A0}$."),
         (ch[2], rf"This adds the rate at $t = {T}$, ${nm}({T})$, to the starting value instead of the integral of the rate."),
         (ch[3], rf"This uses ${nm}({T}) \cdot {T}$ for the change, as if the rate stayed at its value at $t = {T}$ the whole time."),
         (ch[4], rf"This uses ${nm}({T}) - {nm}(0)$, the change in the rate, for the change in the amount. The change in the amount is the integral of the rate.")], "moderate", calc=True)
t83_calcamount.max = 2

INOUT = [("A reservoir holds $800$ million gallons of water at time $t = 0$. For $0 \\le t \\le 12$ months, water flows in at a rate of $F(t) = 50 + 20\\cos\\left(\\dfrac{t}{4}\\right)$ million gallons per month and is released at a rate of $G(t) = 3t + 40$ million gallons per month.",
          800, 50 + 20 * cos(t / 4), 3 * t + 40, 9, "How many million gallons of water are in the reservoir at $t = 9$ months?", "F", "G"),
         ("At time $t = 0$, $40$ passengers are waiting on a train platform. For $0 \\le t \\le 3$ hours, passengers arrive at a rate of $A(t) = 90\\sqrt{t + 1}$ passengers per hour and board trains at a rate of $B(t) = 80 + 25t^2$ passengers per hour.",
          40, 90 * sqrt(t + 1), 80 + 25 * t**2, 2, "To the nearest whole number, how many passengers are waiting at $t = 2$ hours?", "A", "B")]
def t83_calcinout(r):
    stem, A0, Fin, Fout, T, q, fi, fo = r.choice(INOUT)
    net = nint(Fin - Fout, 0, T, t)
    vals = [A0 + net, A0 + nint(Fin + Fout, 0, T, t), A0 - net, A0 + (Fin - Fout).subs(t, T), A0 + nint(Fin, 0, T, t)]
    if "nearest whole" in q:
        ch = [str(round(float(v))) for v in vals]
        if len(set(ch)) < 5: raise Skip("same")
        if any(float(v) < 0 for v in vals): raise Skip("negative people")
        key_note = rf"${A0} + \displaystyle\int_0^{{{T}}} \left({fi}(t) - {fo}(t)\right)dt = {A0} + ({d3(net)}) = {d3(vals[0])}$, or about ${ch[0]}$ passengers."
    else:
        ch = dd(*vals)
        key_note = rf"${A0} + \displaystyle\int_0^{{{T}}} \left({fi}(t) - {fo}(t)\right)dt = {A0} + {d3(net)} = {ch[0]}$."
    return mk("8.3", stem + " " + q, (ch[0], key_note),
        [(ch[1], rf"This adds both rates, $\displaystyle\int_0^{{{T}}} \left({fi}(t) + {fo}(t)\right)dt$. The rate ${fo}(t)$ removes from the amount, so it is subtracted."),
         (ch[2], rf"This uses ${fo}(t) - {fi}(t)$, which reverses the sign of the net change."),
         (ch[3], rf"This adds the net rate at one instant, ${fi}({T}) - {fo}({T})$, to the starting amount instead of integrating the net rate."),
         (ch[4], rf"This adds the inflow, $\displaystyle\int_0^{{{T}}} {fi}(t)\,dt$, but leaves out the outflow ${fo}(t)$.")], "moderate", calc=True)
t83_calcinout.max = 2

def t83_calcmax(r):
    Fin = 30 + 15 * sin(t / 2); Fout = 6 * t + 5
    z = crossings(Fin - Fout, 0, 10, var=t)
    if len(z) != 1: raise Skip("one")
    z = z[0]
    zin = mp.pi  # inflow largest where t/2 = pi/2
    znet = findroot(lambdify(t, diff(Fin - Fout, t), "mpmath"), 2)
    stem = r"Boxes arrive at a warehouse at a rate of $P(t) = 30 + 15\sin\left(\dfrac{t}{2}\right)$ boxes per hour and are shipped out at a rate of $Q(t) = 6t + 5$ boxes per hour, for $0 \le t \le 10$ hours. At time $t = 0$, the warehouse holds $200$ boxes."
    q = r"At what time $t$ is the number of boxes in the warehouse greatest?"
    ch = dd(z, zin, znet, 10)
    A = lambda s: 200 + nint(Fin - Fout, 0, s, t)
    return mk("8.3", stem + " " + q, (ch[0], rf"The number of boxes $N(t) = 200 + \displaystyle\int_0^t \left(P(s) - Q(s)\right)ds$ has $N'(t) = P(t) - Q(t)$, which is $0$ only at $t = {ch[0]}$ and changes from positive to negative there. Comparing $N(0) = 200$, $N({ch[0]}) = {d3(A(z))}$, and $N(10) = {d3(A(10))}$, the greatest number is at $t = {ch[0]}$."),
        [(ch[1], rf"This is when the arrival rate $P(t)$ is greatest, $t = \pi$. The number of boxes keeps increasing as long as $P(t) > Q(t)$."),
         (ch[2], rf"This is when the net rate $P(t) - Q(t)$ is greatest. The number of boxes is greatest when the net rate changes from positive to negative, not when it peaks."),
         (ch[3], rf"At $t = 10$ the warehouse holds ${d3(A(10))}$ boxes, fewer than at $t = {ch[0]}$, because boxes leave faster than they arrive after $t = {ch[0]}$.")], "difficult", calc=True)
t83_calcmax.max = 1

def t83_backward(r):
    Fout = 4 + 2 * log(t + 1); T = 8; AT = 150
    out = nint(Fout, 0, T, t)
    ch = dd(AT + out, AT - out, out, AT + Fout.subs(t, T) * T)
    stem = r"Water drains from a tank at a rate of $R(t) = 4 + 2\ln(t + 1)$ liters per minute, and no water enters the tank. At time $t = 8$ minutes, the tank holds $150$ liters."
    q = r"How many liters of water were in the tank at time $t = 0$?"
    return mk("8.3", stem + " " + q, (ch[0], rf"The amount at $t = 8$ is $A(0) - \displaystyle\int_0^8 R(t)\,dt$, so $A(0) = 150 + \displaystyle\int_0^8 R(t)\,dt = 150 + {d3(out)} = {ch[0]}$ liters."),
        [(ch[1], rf"This subtracts the water that drained out. Since water left the tank, there was more water at $t = 0$ than at $t = 8$."),
         (ch[2], rf"This is $\displaystyle\int_0^8 R(t)\,dt$, the amount that drained out, not the amount at $t = 0$."),
         (ch[3], rf"This uses $R(8) \cdot 8$ for the water drained, as if the rate stayed at its value at $t = 8$ the whole time.")], "difficult", calc=True)
t83_backward.max = 1


# ---------------------------------------------------------------- 8.4 area between curves (x)
LENS = [(-2, 2, -2), (-1, 2, -3), (-2, 3, 1), (0, 3, 2), (-1, 3, 1), (-3, 2, -1)]
LENS_SETUP = [(-3, 1, 2), (-1, 4, -2), (-4, 1, -1), (-2, 4, 3)]
def _lens(r, pool=LENS):
    r1, r2, c = r.choice(pool)
    par = x**2 + c; line = (r1 + r2) * x + c - r1 * r2
    return r1, r2, c, par, line

def t84_lens(r):
    r1, r2, c, par, line = _lens(r)
    area = I(line - par, r1, r2)
    paren = I(line - x**2 + c, r1, r2); under = I(line, r1, r2)
    distinct(area, -area, paren, under)
    qs = rf"What is the area of the region enclosed by the graphs of $y = {L(par)}$ and $y = {L(line)}$?"
    return mk("8.4", qs, (num(area), rf"The graphs meet where ${L(par)} = {L(line)}$, so $\left({L(x - r1)}\right)\left({L(x - r2)}\right) = 0$ and $x = {r1}$ or $x = {r2}$. The line is above the parabola between them, so the area is $\displaystyle\int_{{{r1}}}^{{{r2}}} \left({L(expand(line - par))}\right)dx = {L(area)}$."),
        [(num(-area), r"This subtracts in the wrong order, the parabola minus the line, so the value is negative."),
         (num(paren), rf"This drops the parentheses when subtracting: $\left({L(line)}\right) - \left({L(par)}\right)$ subtracts the whole quadratic, so the constant ${L(c)}$ changes sign."),
         (num(under), rf"This is $\displaystyle\int_{{{r1}}}^{{{r2}}} \left({L(line)}\right)dx$, the integral of the line alone. The parabola must be subtracted."),
         (num(I(par, r1, r2)), rf"This is $\displaystyle\int_{{{r1}}}^{{{r2}}} \left({L(par)}\right)dx$, the integral of the parabola alone. The region lies between the two graphs, so the line's integral minus the parabola's is needed.")], "easy")
t84_lens.max = 3

def t84_setup(r):
    r1, r2, c, par, line = _lens(r, LENS_SETUP)
    top = expand(line - par)
    roots = [s for s in solve(par, x) if s.is_real]
    if len(roots) == 2 and all(s.is_integer for s in roots):
        lo, hi = sorted(roots); lim_why = rf"The limits ${L(lo)}$ and ${L(hi)}$ are the $x$-intercepts of the parabola, not the points where the two graphs meet."
    else:
        lo, hi = 0, r2; lim_why = rf"The region starts at $x = {r1}$, where the graphs meet, not at $x = 0$."
    if (lo, hi) == (r1, r2): raise Skip("same limits")
    I_ = lambda a, b, e: rf"\displaystyle\int_{{{L(a)}}}^{{{L(b)}}} \left({L(e)}\right)dx"
    qs = rf"Which of the following gives the area of the region enclosed by the graphs of $y = {L(par)}$ and $y = {L(line)}$?"
    return mk("8.4", qs, (I_(r1, r2, top), rf"The graphs meet where ${L(expand((x - r1) * (x - r2)))} = 0$, so $x = {r1}$ and $x = {r2}$. Between them the line is on top, so the integrand is $\left({L(line)}\right) - \left({L(par)}\right) = {L(top)}$."),
        [(I_(r1, r2, -top), r"This is the parabola minus the line, so its value is negative."),
         (I_(lo, hi, top), lim_why),
         (I_(r1, r2, expand(line - x**2 + c)), rf"This drops the parentheses when subtracting the parabola, so the constant ${L(c)}$ has the wrong sign.")], "easy")
t84_setup.max = 2

def t84_exp(r):
    k = r.choice([2, 3, 4])
    area = k + Rational(1, k) - 2
    qs = rf"What is the area of the region bounded by the graphs of $y = e^{{x}}$ and $y = e^{{-x}}$ and the vertical line $x = \ln {k}$?"
    return mk("8.4", qs, (num(area), rf"The graphs meet at $x = 0$, and $e^{{x}} > e^{{-x}}$ for $x > 0$. The area is $\displaystyle\int_0^{{\ln {k}}} \left(e^{{x}} - e^{{-x}}\right)dx = \Big[e^{{x}} + e^{{-x}}\Big]_0^{{\ln {k}}} = \left({k} + \dfrac{{1}}{{{k}}}\right) - 2 = {L(area)}$."),
        [(num(k - Rational(1, k)), rf"This uses $e^{{x}} - e^{{-x}}$ as the antiderivative. The antiderivative of $e^{{-x}}$ is $-e^{{-x}}$, so subtracting it gives $+e^{{-x}}$."),
         (num(-area), r"This integrates $e^{-x} - e^{x}$, the lower curve minus the upper one, so the value is negative."),
         (num(k - 1), rf"This is $\displaystyle\int_0^{{\ln {k}}} e^{{x}}\,dx$, the area under $y = e^{{x}}$ alone. The area under $y = e^{{-x}}$ must be subtracted."),
         (num(k + Rational(1, k)), r"This evaluates $e^{0} + e^{-0}$ as $0$ at the lower limit. Since $e^{0} = 1$, the lower limit contributes $2$.")], "moderate")
t84_exp.max = 2

PAIRS84 = [(3 * sin(x), x**2 / 2, r"y = 3\sin x", r"y = \dfrac{x^2}{2}"), (4 * x / (x**2 + 1), x**2, r"y = \dfrac{4x}{x^2 + 1}", r"y = x^2"), (2 * sqrt(x), x**3 / 4, r"y = 2\sqrt{x}", r"y = \dfrac{x^3}{4}")]
def t84_calc(r):
    f, g, tf, tg = r.choice(PAIRS84)
    z = crossings(f - g, 0.01, 4)
    if len(z) != 1: raise Skip("one")
    a, b = 0, z[0]
    area = nint(f - g, a, b); top = nint(f, a, b)
    ch = dd(area, top, b, -area, nint(g, a, b))
    qs = rf"What is the area of the region in the first quadrant enclosed by the graphs of ${tf}$ and ${tg}$?"
    return mk("8.4", qs, (ch[0], rf"The graphs meet at $x = 0$ and at $x = {d3(b)}$, and ${tf[4:]}$ is on top between them. The area is $\displaystyle\int_0^{{{d3(b)}}} \left({L(f)} - {L(g)}\right)dx = {ch[0]}$."),
        [(ch[1], rf"This is the area under ${tf}$ alone. The area under ${tg}$ must be subtracted."),
         (ch[2], rf"This is the $x$-coordinate of the second intersection point, which is a limit of integration, not the area."),
         (ch[3], r"This subtracts the upper curve from the lower one, so the value is negative."),
         (ch[4], rf"This is the area under the lower curve, ${tg}$, alone. The region lies above that curve, so its area is subtracted from the area under ${tf}$.")], "moderate", calc=True)
t84_calc.max = 2

def t84_split(r):
    qs = r"What is the area of the region bounded by the graph of $y = 3\sqrt{x}$, the line $y = x - 4$, and the $x$-axis?"
    key = I(3 * sqrt(x), 0, 16) - I(x - 4, 4, 16)
    right = I(3 * sqrt(x) - (x - 4), 4, 16); noaxis = I(3 * sqrt(x) - (x - 4), 0, 16); top = I(3 * sqrt(x), 0, 16)
    distinct(key, right, noaxis, top)
    return mk("8.4", qs, (num(key), rf"The curve and the line meet where $3\sqrt{{x}} = x - 4$; with $u = \sqrt{{x}}$, $u^{{2}} - 3u - 4 = 0$, so $u = 4$ and $x = 16$. The line meets the $x$-axis at $x = 4$. The region is under the curve from $x = 0$ to $x = 16$, minus the triangle under the line from $x = 4$ to $x = 16$: $\displaystyle\int_0^{{16}} 3\sqrt{{x}}\,dx - \int_4^{{16}} (x - 4)\,dx = 128 - 72 = {L(key)}$."),
        [(num(right), r"This is $\displaystyle\int_4^{16} \left(3\sqrt{x} - (x - 4)\right)dx$, which leaves out the part of the region on $0 \le x \le 4$, where the lower boundary is the $x$-axis."),
         (num(noaxis), r"This is $\displaystyle\int_0^{16} \left(3\sqrt{x} - (x - 4)\right)dx$. On $0 \le x \le 4$ the line is below the $x$-axis, so this adds a triangle that is not in the region."),
         (num(top), r"This is $\displaystyle\int_0^{16} 3\sqrt{x}\,dx$, the area under the curve, without removing the part under the line.")], "difficult")
t84_split.max = 1


# ---------------------------------------------------------------- 8.5 area (y)
def t85_ln(r):
    k = r.choice([2, 3])
    c = exp(k)
    qs = rf"Let $R$ be the region bounded by the graph of $y = \ln x$, the $x$-axis, and the vertical line $x = e^{{{k}}}$. Which of the following gives the area of $R$?"
    I_ = lambda a, b, e: rf"\displaystyle\int_{{{a}}}^{{{b}}} \left({e}\right)dy"
    return mk("8.5", qs, (I_(0, k, rf"e^{{{k}}} - e^{{y}}"), rf"In terms of $y$, the curve is $x = e^{{y}}$. For each $y$ from $0$ to ${k}$, a horizontal strip runs from the curve, $x = e^{{y}}$, on the left to the line $x = e^{{{k}}}$ on the right, so the integrand is right minus left, $e^{{{k}}} - e^{{y}}$."),
        [(I_(0, k, rf"e^{{y}} - e^{{{k}}}"), r"This is left minus right, so its value is negative."),
         (I_(1, rf"e^{{{k}}}", rf"e^{{{k}}} - e^{{y}}"), rf"These limits are $x$-values. In an integral with respect to $y$, the limits are the $y$-values $0$ and ${k}$."),
         (I_(0, k, rf"e^{{y}} - 0"), rf"This is the region between the $y$-axis and the curve, to the left of $x = e^{{y}}$, not the region between the curve and the line $x = e^{{{k}}}$.")], "moderate")
t85_ln.max = 1

def t85_root(r):
    k = r.choice([2, 6])
    key = I(y**2 / 4, 0, k, y); under = I(2 * sqrt(x), 0, Rational(k**2, 4)); half = I(y / 2, 0, k, y); xlim = I(y**2 / 4, 0, Rational(k**2, 4), y)
    distinct(key, under, half, xlim)
    qs = rf"What is the area of the region in the first quadrant bounded by the graph of $y = 2\sqrt{{x}}$, the $y$-axis, and the line $y = {k}$?"
    return mk("8.5", qs, (num(key), rf"Solving $y = 2\sqrt{{x}}$ for $x$ gives $x = \dfrac{{y^{{2}}}}{{4}}$. Strips run from the $y$-axis to the curve for $0 \le y \le {k}$, so the area is $\displaystyle\int_0^{{{k}}} \dfrac{{y^{{2}}}}{{4}}\,dy = \dfrac{{{k}^{{3}}}}{{12}} = {L(key)}$."),
        [(num(under), rf"This is $\displaystyle\int_0^{{{L(Rational(k**2, 4))}}} 2\sqrt{{x}}\,dx$, the area below the curve and above the $x$-axis. The region is between the curve and the $y$-axis."),
         (num(half), rf"This solves $y = 2\sqrt{{x}}$ as $x = \dfrac{{y}}{{2}}$, dividing by $2$ without squaring. Squaring both sides gives $y^{{2}} = 4x$, so $x = \dfrac{{y^{{2}}}}{{4}}$."),
         (num(xlim), rf"This uses the $x$-value of the corner, ${L(Rational(k**2, 4))}$, as the upper limit of an integral in $y$. The $y$-limits are $0$ and ${k}$.")], "easy")
t85_root.max = 1

def t85_two(r):
    c, Y = r.choice([(6, 2), (12, 3)])
    X = Y**2
    key = I(c - y - y**2, 0, Y, y); under = I(sqrt(x), 0, X); between = I(c - x - sqrt(x), 0, X); xlim = I(c - y - y**2, 0, X, y)
    distinct(key, under, between, xlim)
    qs = rf"What is the area of the region bounded by the graph of $y = \sqrt{{x}}$, the line $y = {c} - x$, and the $x$-axis?"
    return mk("8.5", qs, (num(key), rf"In terms of $y$, the curve is $x = y^{{2}}$ and the line is $x = {c} - y$. They meet where $y^{{2}} = {c} - y$, at $y = {Y}$ (the point $({X}, {Y})$). Each horizontal strip runs from $x = y^{{2}}$ to $x = {c} - y$, so the area is $\displaystyle\int_0^{{{Y}}} \left({c} - y - y^{{2}}\right)dy = {L(key)}$."),
        [(num(under), rf"This is $\displaystyle\int_0^{{{X}}} \sqrt{{x}}\,dx$, the part of the region for $0 \le x \le {X}$ only. It leaves out the triangle under the line for ${X} \le x \le {c}$."),
         (num(between), rf"This is $\displaystyle\int_0^{{{X}}} \left({c} - x - \sqrt{{x}}\right)dx$, the region between the curve and the line above the curve, which is not the region bounded by the $x$-axis."),
         (num(xlim), rf"This integrates $\left({c} - y - y^{{2}}\right)dy$ from $0$ to ${X}$, the $x$-coordinate of the intersection point. The limits in $y$ are $0$ and ${Y}$.")], "difficult")
t85_two.max = 1

def t85_cube(r):
    key = I(2 - y - y**Rational(1, 3), 0, 1, y); under = I(x**3, 0, 1); between = I(2 - x - x**3, 0, 1); added = I(2 - y + y**Rational(1, 3), 0, 1, y)
    distinct(key, under, between, added)
    qs = r"What is the area of the region bounded by the graph of $y = x^3$, the line $y = 2 - x$, and the $x$-axis?"
    return mk("8.5", qs, (num(key), rf"In terms of $y$, the curve is $x = y^{{1/3}}$ and the line is $x = 2 - y$. They meet where $x^{{3}} = 2 - x$, at $(1, 1)$. Each horizontal strip for $0 \le y \le 1$ runs from $x = y^{{1/3}}$ to $x = 2 - y$, so the area is $\displaystyle\int_0^1 \left(2 - y - y^{{1/3}}\right)dy = 2 - \dfrac{{1}}{{2}} - \dfrac{{3}}{{4}} = {L(key)}$."),
        [(num(under), r"This is $\displaystyle\int_0^1 x^{3}\,dx$, the part of the region for $0 \le x \le 1$ only. It leaves out the triangle under the line for $1 \le x \le 2$."),
         (num(between), r"This is $\displaystyle\int_0^1 \left(2 - x - x^{3}\right)dx$, the region between the line and the curve above the curve, which is not bounded by the $x$-axis."),
         (num(added), r"This is $\displaystyle\int_0^1 \left(2 - y + y^{1/3}\right)dy$, which adds the left boundary instead of subtracting it. Strip length is right minus left.")], "difficult")
t85_cube.max = 1


# ---------------------------------------------------------------- 8.6 more than two intersections
CUBIC86 = [(2, 1), (2, 3)]
def t86_cubic(r):
    p, q = r.choice(CUBIC86)
    s, tt = q - p, p * q
    f = x**3 + s * x**2; g = tt * x
    A = I(f - g, -q, 0); B = I(g - f, 0, p)
    total = A + B; net = abs(I(f - g, -q, p))
    distinct(total, net, A, B)
    qs = rf"What is the total area of the regions enclosed by the graphs of $y = {L(f)}$ and $y = {L(g)}$?"
    return mk("8.6", qs, (num(total), rf"The graphs meet where ${L(f - g)} = x(x + {q})(x - {p}) = 0$, at $x = -{q}$, $0$, and ${p}$. On $-{q} < x < 0$ the cubic is on top, and on $0 < x < {p}$ the line is on top. The area is $\displaystyle\int_{{-{q}}}^{{0}} \left({L(f - g)}\right)dx + \int_0^{{{p}}} \left({L(g - f)}\right)dx = {L(A)} + {L(B)} = {L(total)}$."),
        [(num(net), rf"This is $\left|\displaystyle\int_{{-{q}}}^{{{p}}} \left({L(f - g)}\right)dx\right|$. The upper curve switches at $x = 0$, so the two regions partly cancel in one integral."),
         (num(A), rf"This is the area of the region on $-{q} \le x \le 0$ only."),
         (num(B), rf"This is the area of the region on $0 \le x \le {p}$ only.")], "difficult")
t86_cubic.max = 2

PAIRS86 = [(x**3 - 2 * x, cos(x), r"y = x^3 - 2x", r"y = \cos x"), (x**4 - 3 * x**2, x - 1, r"y = x^4 - 3x^2", r"y = x - 1")]
def t86_calc(r):
    f, g, tf, tg = r.choice(PAIRS86)
    z = crossings(f - g, -3, 3)
    pieces = [nint(f - g, a, b) for a, b in zip(z, z[1:])]
    total = sum(abs(p) for p in pieces); net = abs(sum(pieces)); big = max(abs(p) for p in pieces)
    ch = dd(total, net, big, z[-1], z[0])
    zs = ", ".join(f"$x = {d3(c)}$" for c in z)
    qs = rf"What is the total area of the regions enclosed by the graphs of ${tf}$ and ${tg}$?"
    return mk("8.6", qs, (ch[0], rf"With a calculator, the graphs meet at {zs}, which bound {['', 'one', 'two', 'three', 'four'][len(pieces)]} regions. The total area is $\displaystyle\int_{{{d3(z[0])}}}^{{{d3(z[-1])}}} \left|f(x) - g(x)\right|dx = {ch[0]}$, where $f$ and $g$ are the two functions."),
        [(ch[1], rf"This is $\left|\displaystyle\int_{{{d3(z[0])}}}^{{{d3(z[-1])}}} \left(f(x) - g(x)\right)dx\right|$ without the absolute value inside the integral, so regions where the other graph is on top cancel."),
         (ch[2], r"This is the area of the largest region only. The question asks for all the regions together."),
         (ch[3], r"This is the $x$-coordinate of the last intersection point, a limit of integration, not an area."),
         (ch[4], r"This is the $x$-coordinate of the first intersection point, a limit of integration, not an area.")], "easy", calc=True)
t86_calc.max = 2


# ---------------------------------------------------------------- 8.7 and 8.8 cross sections
def t87_sq(r):
    k = r.choice([2, 3]); n = r.choice([2, 3, 4])
    V = I(k**2 / x**2, 1, n)
    distinct(V, V / 2, I(k / x**2, 1, n), -V)
    qs = rf"The base of a solid is the region bounded by the graph of $y = \dfrac{{{k}}}{{x}}$, the $x$-axis, and the lines $x = 1$ and $x = {n}$. Cross sections of the solid perpendicular to the $x$-axis are squares. What is the volume of the solid?"
    return mk("8.7", qs, (num(V), rf"A cross section at $x$ is a square with side $\dfrac{{{k}}}{{x}}$ and area $\dfrac{{{k * k}}}{{x^{{2}}}}$. The volume is $\displaystyle\int_1^{{{n}}} \dfrac{{{k * k}}}{{x^{{2}}}}\,dx = \Big[-\dfrac{{{k * k}}}{{x}}\Big]_1^{{{n}}} = {L(V)}$."),
        [(num(V / 2), r"This uses $\dfrac{1}{2}s^{2}$, the area of an isosceles right triangle with a leg in the base, instead of the area of a square, $s^{2}$."),
         (num(I(k / x**2, 1, n)), rf"This squares only the denominator, using $\dfrac{{{k}}}{{x^{{2}}}}$. The side $\dfrac{{{k}}}{{x}}$ squared is $\dfrac{{{k * k}}}{{x^{{2}}}}$."),
         (num(-V), rf"This uses $\dfrac{{{k * k}}}{{x}}$ as the antiderivative of $\dfrac{{{k * k}}}{{x^{{2}}}}$. The antiderivative of $x^{{-2}}$ is $-x^{{-1}}$, so the sign is wrong.")], "easy")
t87_sq.max = 1

def t87_rect(r):
    V = I(2 * (x - x**3)**2, 0, 1)
    qs = r"The base of a solid is the region in the first quadrant enclosed by the graphs of $y = x$ and $y = x^3$. Cross sections of the solid perpendicular to the $x$-axis are rectangles whose height is twice the length of the base of the rectangle in the region. What is the volume of the solid?"
    w1 = I((x - x**3)**2, 0, 1); w2 = I(2 * (x**2 - x**6), 0, 1); w3 = I(2 * (x - x**3), 0, 1)
    distinct(V, w1, w2, w3)
    return mk("8.7", qs, (num(V), rf"The base at $x$ is $x - x^{{3}}$ and the height is $2\left(x - x^{{3}}\right)$, so the area is $2\left(x - x^{{3}}\right)^{{2}} = 2\left(x^{{2}} - 2x^{{4}} + x^{{6}}\right)$. The volume is $2\left(\dfrac{{1}}{{3}} - \dfrac{{2}}{{5}} + \dfrac{{1}}{{7}}\right) = {L(V)}$."),
        [(num(w1), r"This is $\displaystyle\int_0^1 \left(x - x^{3}\right)^{2} dx$, the volume for square cross sections. The height is twice the base, so the area has a factor of $2$."),
         (num(w2), r"This is $2\displaystyle\int_0^1 \left(x^{2} - x^{6}\right)dx$, which squares each term separately. The base $x - x^{3}$ must be squared as a whole."),
         (num(w3), r"This is $2\displaystyle\int_0^1 \left(x - x^{3}\right)dx$, twice the area of the base. The base was not multiplied by the height.")], "difficult")
t87_rect.max = 1

def t87_y(r):
    V = I(y**Rational(2, 3), 0, 8, y)
    w1 = I(y**Rational(1, 3), 0, 8, y); w2 = I((2 - y**Rational(1, 3))**2, 0, 8, y); w3 = I((8 - x**3)**2, 0, 2)
    distinct(V, w1, w2, w3)
    qs = r"The base of a solid is the region bounded by the graph of $y = x^3$, the line $y = 8$, and the $y$-axis. Cross sections of the solid perpendicular to the $y$-axis are squares. What is the volume of the solid?"
    return mk("8.7", qs, (num(V), rf"For $0 \le y \le 8$, a horizontal segment of the base runs from the $y$-axis to $x = y^{{1/3}}$, so the square has area $y^{{2/3}}$. The volume is $\displaystyle\int_0^8 y^{{2/3}}\,dy = \dfrac{{3}}{{5}}\left(8^{{5/3}}\right) = {L(V)}$."),
        [(num(w1), r"This is $\displaystyle\int_0^8 y^{1/3}\,dy$, the area of the base. The side length must be squared."),
         (num(w2), r"This uses side $2 - y^{1/3}$, the segment from the curve to $x = 2$. That is the region below the curve, not the region between the curve and the $y$-axis."),
         (num(w3), r"This is $\displaystyle\int_0^2 \left(8 - x^{3}\right)^{2} dx$, which uses cross sections perpendicular to the $x$-axis.")], "difficult")
t87_y.max = 1

def t88_semi(r):
    k = r.choice([2, 4])
    V = I(pi / 8 * 4 * x, 0, k)
    distinct(V, 2 * V, 4 * V, 8 * V)
    qs = rf"The base of a solid is the region bounded by the graph of $y = 2\sqrt{{x}}$, the $x$-axis, and the line $x = {k}$. Cross sections of the solid perpendicular to the $x$-axis are semicircles with diameters in the base. What is the volume of the solid?"
    return mk("8.8", qs, (num(V), rf"A semicircle with diameter $s = 2\sqrt{{x}}$ has radius $\sqrt{{x}}$ and area $\dfrac{{1}}{{2}}\pi\left(\sqrt{{x}}\right)^{{2}} = \dfrac{{\pi x}}{{2}}$. The volume is $\displaystyle\int_0^{{{k}}} \dfrac{{\pi x}}{{2}}\,dx = {L(V)}$."),
        [(num(2 * V), r"This uses $\dfrac{\pi}{4}s^{2}$, the area of a whole circle with diameter $s$, instead of half of it."),
         (num(4 * V), r"This uses $\dfrac{\pi}{2}s^{2}$, which treats $s = 2\sqrt{x}$ as the radius of the semicircle instead of its diameter."),
         (num(8 * V), r"This uses $\pi s^{2}$, the disc method for revolving the base about the $x$-axis.")], "moderate")
t88_semi.max = 1

SHAPES = [("equilateral triangles", sqrt(3) / 4, r"\dfrac{\sqrt{3}}{4}s^{2}", r"An equilateral triangle with side $s$ has area $\dfrac{\sqrt{3}}{4}s^{2}$."),
          ("isosceles right triangles with one leg in the base", Rational(1, 2), r"\dfrac{1}{2}s^{2}", r"An isosceles right triangle with leg $s$ has area $\dfrac{1}{2}s^{2}$."),
          ("isosceles right triangles with the hypotenuse in the base", Rational(1, 4), r"\dfrac{1}{4}s^{2}", r"An isosceles right triangle with hypotenuse $s$ has legs $\dfrac{s}{\sqrt{2}}$ and area $\dfrac{1}{4}s^{2}$."),
          ("squares", 1, r"s^{2}", r"A square with side $s$ has area $s^{2}$.")]
SHAPE_WHY = {0: r"This uses $\dfrac{\sqrt{3}}{4}s^{2}$, the area of an equilateral triangle.", 1: r"This uses $\dfrac{1}{2}s^{2}$, the area of an isosceles right triangle with a leg, not the hypotenuse, in the base.",
             2: r"This uses $\dfrac{1}{4}s^{2}$, the area of an isosceles right triangle with the hypotenuse in the base.", 3: r"This uses $s^{2}$, the area of a square cross section."}
def t88_tri(r):
    k = r.choice([0, 1, 2])
    base = I((sqrt(x) - x)**2, 0, 1)
    nm, cst, ftex, fwhy = SHAPES[k]
    qs = rf"The base of a solid is the region enclosed by the graphs of $y = \sqrt{{x}}$ and $y = x$. Cross sections of the solid perpendicular to the $x$-axis are {nm}. What is the volume of the solid?"
    return mk("8.8", qs, (num(cst * base), fwhy + rf" Here $s = \sqrt{{x}} - x$ and $\displaystyle\int_0^1 \left(\sqrt{{x}} - x\right)^{{2}} dx = \int_0^1 \left(x - 2x^{{3/2}} + x^{{2}}\right)dx = \dfrac{{1}}{{2}} - \dfrac{{4}}{{5}} + \dfrac{{1}}{{3}} = \dfrac{{1}}{{30}}$, so the volume is ${L(cst * base)}$."),
        [(num(SHAPES[j][1] * base), SHAPE_WHY[j]) for j in range(4) if j != k], "moderate")
t88_tri.max = 1

def t88_calc(r):
    f = x * exp(-x / 2)
    base = nint(f**2, 0, 4)
    ch = dd(sqrt(3) / 4 * base, base / 2, base / 4, base, sqrt(3) / 2 * base)
    qs = r"The base of a solid is the region bounded by the graph of $y = xe^{-x/2}$, the $x$-axis, and the line $x = 4$. Cross sections of the solid perpendicular to the $x$-axis are equilateral triangles. What is the volume of the solid?"
    return mk("8.8", qs, (ch[0], rf"An equilateral triangle with side $s = xe^{{-x/2}}$ has area $\dfrac{{\sqrt{{3}}}}{{4}}s^{{2}}$. The volume is $\dfrac{{\sqrt{{3}}}}{{4}}\displaystyle\int_0^4 x^{{2}}e^{{-x}}\,dx = {ch[0]}$."),
        [(ch[1], SHAPE_WHY[1]), (ch[2], SHAPE_WHY[2]), (ch[3], SHAPE_WHY[3]),
         (ch[4], r"This uses $\dfrac{\sqrt{3}}{2}s^{2}$, base times height without the factor $\dfrac{1}{2}$. The height of an equilateral triangle is $\dfrac{\sqrt{3}}{2}s$ and its area is half of base times height.")], "moderate", calc=True)
t88_calc.max = 1


# ---------------------------------------------------------------- 8.9 to 8.12 revolution
def t89_line(r):
    m_ = r.choice([1, 2]); b = r.choice([1, 3]); n = r.choice([2, 3])
    f = m_ * x + b
    V = pi * I(f**2, 0, n)
    distinct(V, pi * I(f, 0, n), pi * I(m_**2 * x**2 + b**2, 0, n), V / pi)
    qs = rf"The region bounded by the graph of $y = {L(f)}$, the $x$-axis, the $y$-axis, and the line $x = {n}$ is revolved about the $x$-axis. What is the volume of the solid generated?"
    return mk("8.9", qs, (num(V), rf"Each disc at $x$ has radius ${L(f)}$. The volume is $\pi\displaystyle\int_0^{{{n}}} \left({L(f)}\right)^{{2}} dx = \pi\Big[\dfrac{{\left({L(f)}\right)^{{3}}}}{{{3 * m_}}}\Big]_0^{{{n}}} = {L(V)}$."),
        [(num(pi * I(f, 0, n)), r"This is $\pi\displaystyle\int r\,dx$. The radius of each disc must be squared."),
         (num(pi * I(m_**2 * x**2 + b**2, 0, n)), rf"This squares each term of the radius separately, using ${L(m_**2 * x**2 + b**2)}$. The square of ${L(f)}$ also has the middle term ${L(2 * m_ * b * x)}$."),
         (num(V / pi), r"This leaves out the factor $\pi$ in the area of a disc, $\pi r^{2}$.")], "easy")
t89_line.max = 1

def t89_y(r):
    k = r.choice([1, 2])
    V = pi * (exp(2 * k) - 1) / 2
    w1 = pi * (exp(k) - 1); w2 = pi * (exp(2 * k) - 1); w3 = pi * I(log(x)**2, 1, exp(k))
    distinct(V, w1, w2, w3)
    qs = rf"The region bounded by the graph of $y = \ln x$, the $y$-axis, the $x$-axis, and the line $y = {k}$ is revolved about the $y$-axis. What is the volume of the solid generated?"
    return mk("8.9", qs, (pie(V), rf"In terms of $y$, the curve is $x = e^{{y}}$, so each disc at height $y$ has radius $e^{{y}}$. The volume is $\pi\displaystyle\int_0^{{{k}}} e^{{2y}}\,dy = \dfrac{{\pi}}{{2}}\left(e^{{{2 * k}}} - 1\right)$."),
        [(pie(w1), r"This is $\pi\displaystyle\int e^{y}\,dy$. The radius $e^{y}$ was not squared."),
         (pie(w2), r"This uses $e^{2y}$ as the antiderivative of $e^{2y}$. The chain rule gives a factor of $\dfrac{1}{2}$."),
         (pie(w3), rf"This is $\pi\displaystyle\int_1^{{{L(exp(k))}}} (\ln x)^{{2}} dx$, discs about the $x$-axis for the region under the curve. The region is revolved about the $y$-axis.")], "moderate")
t89_y.max = 1

CALC89 = [(sqrt(x) * exp(-x / 4), 0, 6, r"y = \sqrt{x}\,e^{-x/4}"), (2 + cos(x**2 / 3), 0, 3, r"y = 2 + \cos\left(\dfrac{x^2}{3}\right)")]
def t89_calc(r):
    f, a, b, tex = r.choice(CALC89)
    base = nint(f**2, a, b)
    ch = dd(mp.pi * base, mp.pi * nint(f, a, b), base, 2 * mp.pi * base, 4 * mp.pi * base)
    qs = rf"The region bounded by the graph of ${tex}$, the $x$-axis, the $y$-axis, and the line $x = {b}$ is revolved about the $x$-axis. What is the volume of the solid generated?"
    return mk("8.9", qs, (ch[0], rf"Each disc at $x$ has radius ${tex[4:]}$. The volume is $\pi\displaystyle\int_0^{{{b}}} \left({tex[4:]}\right)^{{2}} dx = {ch[0]}$."),
        [(ch[1], r"This is $\pi\displaystyle\int r\,dx$. The radius of each disc must be squared."),
         (ch[2], r"This leaves out the factor $\pi$ in the area of a disc, $\pi r^{2}$."),
         (ch[3], r"This uses $2\pi r^{2}$ for the area of a disc instead of $\pi r^{2}$."),
         (ch[4], r"This uses $2r$, the diameter of the disc, as its radius, so every disc area is $4$ times too large.")], "easy", calc=True)
t89_calc.max = 1

def t810_h(r):
    c = r.choice([1, 2])
    f = 2 * c * x - x**2; top = c**2
    V = pi * I((top - f)**2, 0, c)
    w1 = pi * I(top - f, 0, c); w2 = pi * I(top**2 - f**2, 0, c); w3 = V / pi
    distinct(V, w1, w2, w3)
    qs = rf"The region bounded by the graph of $y = {L(f)}$, the line $y = {top}$, and the $y$-axis is revolved about the line $y = {top}$. What is the volume of the solid generated?"
    return mk("8.10", qs, (num(V), rf"The curve reaches $y = {top}$ at $x = {c}$. Each disc at $x$ has radius ${top} - \left({L(f)}\right) = (x - {c})^{{2}}$, so the volume is $\pi\displaystyle\int_0^{{{c}}} (x - {c})^{{4}}\,dx = {L(V)}$."),
        [(num(w1), r"This is $\pi\displaystyle\int r\,dx$. The radius of each disc must be squared."),
         (num(w2), rf"This is $\pi\displaystyle\int_0^{{{c}}} \left({top}^{{2}} - \left({L(f)}\right)^{{2}}\right)dx$, washers about the $x$-axis. The axis is the line $y = {top}$."),
         (num(w3), r"This leaves out the factor $\pi$ in the area of a disc.")], "moderate")
t810_h.max = 1

def t810_v(r):
    k = r.choice([1, 2])
    ek = "e" if k == 1 else f"e^{{{k}}}"
    V = pi * I((exp(k) - exp(y))**2, 0, k, y)
    w1 = pi * I(exp(2 * y), 0, k, y); w2 = pi * I(exp(2 * k) - exp(2 * y), 0, k, y); w3 = pi * I(exp(k) - exp(y), 0, k, y)
    distinct(V, w1, w2, w3)
    w3 = pi * (exp(2 * k) * k - 2 * exp(k) * (exp(k) - 1) + (exp(2 * k) - 1))
    distinct(V, w1, w2, w3)
    qs = rf"The region bounded by the graph of $y = \ln x$, the $x$-axis, and the line $x = {ek}$ is revolved about the line $x = {ek}$. What is the volume of the solid generated?"
    return mk("8.10", qs, (pie(V), rf"In terms of $y$, the curve is $x = e^{{y}}$, and the region runs from $y = 0$ to $y = {k}$. Each disc at height $y$ has radius ${ek} - e^{{y}}$, so the volume is $\pi\displaystyle\int_0^{{{k}}} \left(e^{{{2 * k}}} - 2{ek}e^{{y}} + e^{{2y}}\right)dy = {pie(V)}$."),
        [(pie(w1), r"This uses radius $e^{y}$, the distance from the curve to the $y$-axis. That region is the one to the left of the curve, revolved about the $y$-axis."),
         (pie(w2), rf"This is $\pi\displaystyle\int \left(\left({ek}\right)^{{2}} - \left(e^{{y}}\right)^{{2}}\right)dy$, washers about the $y$-axis. The axis is the line $x = {ek}$, so the radius is ${ek} - e^{{y}}$."),
         (pie(w3), r"This uses $e^{2y}$ as the antiderivative of $e^{2y}$. The chain rule gives a factor of $\dfrac{1}{2}$, so the antiderivative is $\dfrac{1}{2}e^{2y}$.")], "difficult")
t810_v.max = 1

def t810_calc(r):
    kind = r.choice(["ln", "exp"])
    if kind == "ln":
        f = log(x + 1); c = 2; b = exp(2) - 1
        qs = r"The region bounded by the graph of $y = \ln(x + 1)$, the line $y = 2$, and the $y$-axis is revolved about the line $y = 2$. What is the volume of the solid generated?"
        rad = r"2 - \ln(x + 1)"; lim = "e^{2} - 1"
        V = mp.pi * nint((c - f)**2, 0, b); w1 = mp.pi * nint((c + f)**2, 0, b); w2 = mp.pi * nint(c - f, 0, b); w3 = mp.pi * nint(c**2 - f**2, 0, b)
        w1why = r"This uses radius $2 + \ln(x + 1)$. The distance from the curve up to the line $y = 2$ is $2 - \ln(x + 1)$."
    else:
        f = 3 * exp(-x); c = 1; b = log(3)
        qs = r"The region bounded by the graph of $y = 3e^{-x}$, the line $y = 1$, and the $y$-axis is revolved about the line $y = 1$. What is the volume of the solid generated?"
        rad = r"3e^{-x} - 1"; lim = r"\ln 3"
        V = mp.pi * nint((f - c)**2, 0, b); w1 = mp.pi * nint((f + c)**2, 0, b); w2 = mp.pi * nint(f - c, 0, b); w3 = mp.pi * nint(f**2 - c**2, 0, b)
        w1why = r"This uses radius $3e^{-x} + 1$, the distance to the line $y = -1$. The distance from the curve down to $y = 1$ is $3e^{-x} - 1$."
    ch = dd(V, w1, w2, w3, 4 * V)
    return mk("8.10", qs, (ch[0], rf"The curve meets the line at $x = {lim}$. Each disc at $x$ has radius ${rad}$, so the volume is $\pi\displaystyle\int_0^{{{lim}}} \left({rad}\right)^{{2}} dx = {ch[0]}$."),
        [(ch[1], w1why),
         (ch[2], r"This is $\pi\displaystyle\int r\,dx$. The radius of each disc must be squared."),
         (ch[3], r"This uses washers about the $x$-axis, with the curve and the horizontal line as the two radii. The axis of revolution is the horizontal line itself, so each cross section is a disc."),
         (ch[4], r"This uses the full vertical distance twice, as a diameter, for the radius, so every disc area is $4$ times too large.")], "moderate", calc=True)
t810_calc.max = 2

def t811_x(r):
    c, d, a, b = r.choice([(3, 2, 1, 2), (5, 4, 1, 4)])
    V = pi * I((c - x)**2 - d**2 / x**2, a, b)
    w1 = -V; w2 = V / pi; w3 = pi * I((c - x)**2, a, b)
    distinct(V, w1, w2, w3)
    qs = rf"The region enclosed by the graphs of $y = {c} - x$ and $y = \dfrac{{{d}}}{{x}}$ is revolved about the $x$-axis. What is the volume of the solid generated?"
    return mk("8.11", qs, (num(V), rf"The graphs meet where ${c} - x = \dfrac{{{d}}}{{x}}$, at $x = {a}$ and $x = {b}$, and the line is above the curve between them. The outer radius is ${c} - x$ and the inner radius is $\dfrac{{{d}}}{{x}}$, so the volume is $\pi\displaystyle\int_{{{a}}}^{{{b}}} \left(({c} - x)^{{2}} - \dfrac{{{d * d}}}{{x^{{2}}}}\right)dx = {L(V)}$."),
        [(num(w1), r"This subtracts the outer radius squared from the inner radius squared, so the value is negative. The line is farther from the $x$-axis, so it gives the outer radius."),
         (num(w2), r"This leaves out the factor $\pi$ in the area of a washer."),
         (num(w3), rf"This is $\pi\displaystyle\int_{{{a}}}^{{{b}}} ({c} - x)^{{2}} dx$, which leaves out the hole made by the curve $y = \dfrac{{{d}}}{{x}}$.")], "easy")
t811_x.max = 1

def t811_y(r):
    V = pi * I(y**Rational(2, 3) - y**4, 0, 1, y)
    w1 = pi * I(x - x**6, 0, 1); w2 = pi * I(y**4 - y**Rational(2, 3), 0, 1, y); w3 = pi * I((y**Rational(1, 3) - y**2)**2, 0, 1, y)
    distinct(V, w1, w2, w3)
    qs = r"The region in the first quadrant enclosed by the graphs of $y = \sqrt{x}$ and $y = x^3$ is revolved about the $y$-axis. What is the volume of the solid generated?"
    return mk("8.11", qs, (num(V), rf"In terms of $y$, the curves are $x = y^{{2}}$ and $x = y^{{1/3}}$, which meet at $y = 0$ and $y = 1$. For $0 < y < 1$, $y^{{1/3}} > y^{{2}}$, so the outer radius is $y^{{1/3}}$ and the inner radius is $y^{{2}}$. The volume is $\pi\displaystyle\int_0^1 \left(y^{{2/3}} - y^{{4}}\right)dy = \pi\left(\dfrac{{3}}{{5}} - \dfrac{{1}}{{5}}\right) = {L(V)}$."),
        [(num(w1), r"This is $\pi\displaystyle\int_0^1 \left(x - x^{6}\right)dx$, the washer method about the $x$-axis."),
         (num(w2), r"This uses $y^{2}$ as the outer radius. For $0 < y < 1$, $y^{1/3}$ is farther from the $y$-axis, so the value comes out negative."),
         (num(w3), r"This squares the difference of the radii, $(R - r)^{2}$, instead of subtracting their squares.")], "difficult")
t811_y.max = 1

def t811_calc(r):
    f = 3 * exp(-x**2); b = sqrt(log(3))
    V = mp.pi * nint(f**2 - 1, -b, b); w1 = mp.pi * nint((f - 1)**2, -b, b); w2 = nint(f**2 - 1, -b, b); w3 = mp.pi * nint(f**2 - 1, 0, b)
    ch = dd(V, w1, w2, w3, mp.pi * nint(f**2, -b, b))
    qs = r"The region enclosed by the graph of $y = 3e^{-x^2}$ and the line $y = 1$ is revolved about the $x$-axis. What is the volume of the solid generated?"
    return mk("8.11", qs, (ch[0], rf"The graphs meet where $e^{{-x^{{2}}}} = \dfrac{{1}}{{3}}$, at $x = \pm\sqrt{{\ln 3}} = \pm {d3(b)}$. The outer radius is $3e^{{-x^{{2}}}}$ and the inner radius is $1$, so the volume is $\pi\displaystyle\int_{{-{d3(b)}}}^{{{d3(b)}}} \left(9e^{{-2x^{{2}}}} - 1\right)dx = {ch[0]}$."),
        [(ch[1], r"This squares the difference of the radii, $(R - r)^{2}$, instead of subtracting their squares. That revolves the region about the line $y = 1$."),
         (ch[2], r"This leaves out the factor $\pi$ in the area of a washer."),
         (ch[3], rf"This integrates from $0$ to ${d3(b)}$ only, which is half of the region."),
         (ch[4], r"This is $\pi\displaystyle\int \left(3e^{-x^{2}}\right)^{2} dx$, which leaves out the hole of radius $1$.")], "moderate", calc=True)
t811_calc.max = 1

def t812_above(r):
    k = r.choice([4, 5, 6])
    V = pi * I((k - x)**2 - (k - 2 * sqrt(x))**2, 0, 4)
    w1 = pi * I((k + 2 * sqrt(x))**2 - (k + x)**2, 0, 4); w2 = pi * I(4 * x - x**2, 0, 4); w3 = pi * I((2 * sqrt(x) - x)**2, 0, 4)
    distinct(V, w1, w2, w3)
    qs = rf"The region enclosed by the graphs of $y = 2\sqrt{{x}}$ and $y = x$ is revolved about the line $y = {k}$. What is the volume of the solid generated?"
    return mk("8.12", qs, (num(V), rf"The graphs meet at $x = 0$ and $x = 4$, with $2\sqrt{{x}}$ on top. The line $y = {k}$ is above the region, so the lower curve $y = x$ is farther from it. The outer radius is ${k} - x$ and the inner radius is ${k} - 2\sqrt{{x}}$, and the volume is $\pi\displaystyle\int_0^4 \left(({k} - x)^{{2}} - \left({k} - 2\sqrt{{x}}\right)^{{2}}\right)dx = {L(V)}$."),
        [(num(w1), rf"This uses radii ${k} + 2\sqrt{{x}}$ and ${k} + x$, the distances to the line $y = -{k}$. The line $y = {k}$ is above the region, so each radius is ${k}$ minus the curve."),
         (num(w2), r"This is the volume for revolving the region about the $x$-axis, with radii $2\sqrt{x}$ and $x$."),
         (num(w3), r"This squares the difference of the radii, $(R - r)^{2}$, instead of subtracting their squares.")], "moderate")
t812_above.max = 1

def t812_vert(r):
    h = r.choice([1, 2, 3])
    V = pi * I((4 + h)**2 - (y**2 + h)**2, 0, 2, y)
    w1 = pi * I((4 - h)**2 - (y**2 - h)**2, 0, 2, y); w2 = pi * I((4 - y**2)**2, 0, 2, y); w3 = pi * I(16 - y**4, 0, 2, y)
    distinct(V, w1, w2, w3)
    qs = rf"The region bounded by the graph of $y = \sqrt{{x}}$, the $x$-axis, and the line $x = 4$ is revolved about the line $x = -{h}$. What is the volume of the solid generated?"
    return mk("8.12", qs, (num(V), rf"Use horizontal washers. In terms of $y$, the curve is $x = y^{{2}}$, and for $0 \le y \le 2$ the region runs from $x = y^{{2}}$ to $x = 4$. Measured from $x = -{h}$, the outer radius is $4 + {h} = {4 + h}$ and the inner radius is $y^{{2}} + {h}$. The volume is $\pi\displaystyle\int_0^2 \left({(4 + h)**2} - \left(y^{{2}} + {h}\right)^{{2}}\right)dy = {L(V)}$."),
        [(num(w1), rf"This uses radii $4 - {h}$ and $y^{{2}} - {h}$, the distances to the line $x = {h}$. The axis $x = -{h}$ is to the left of the region, so ${h}$ is added to each $x$-value."),
         (num(w2), r"This squares the difference of the radii, $(R - r)^{2} = \left(4 - y^{2}\right)^{2}$, instead of subtracting their squares."),
         (num(w3), r"This is the volume for revolving the region about the $y$-axis, with radii $4$ and $y^{2}$.")], "difficult")
t812_vert.max = 1

def t812_calc(r):
    z = crossings(log(x) - (x - 1) / 2, 0.5, 6)
    a, b = z[0], z[-1]
    V = mp.pi * nint((log(x) + 1)**2 - ((x - 1) / 2 + 1)**2, a, b)
    w1 = mp.pi * nint(log(x)**2 - ((x - 1) / 2)**2, a, b); w2 = mp.pi * nint((log(x) - (x - 1) / 2)**2, a, b); w3 = mp.pi * nint((log(x) - 1)**2 - ((x - 1) / 2 - 1)**2, a, b)
    w4 = mp.pi * nint((log(x) + 1)**2 + ((x - 1) / 2 + 1)**2, a, b)
    ch = dd(V, w1, w2, w3, w4)
    qs = r"The region enclosed by the graphs of $y = \ln x$ and $y = \dfrac{x - 1}{2}$ is revolved about the line $y = -1$. What is the volume of the solid generated?"
    return mk("8.12", qs, (ch[0], rf"The graphs meet at $x = 1$ and $x = {d3(b)}$, with $\ln x$ on top. Measured from $y = -1$, the outer radius is $\ln x + 1$ and the inner radius is $\dfrac{{x - 1}}{{2}} + 1$. The volume is $\pi\displaystyle\int_1^{{{d3(b)}}} \left((\ln x + 1)^{{2}} - \left(\dfrac{{x - 1}}{{2}} + 1\right)^{{2}}\right)dx = {ch[0]}$."),
        [(ch[1], r"This is the volume for revolving the region about the $x$-axis, with radii $\ln x$ and $\dfrac{x - 1}{2}$."),
         (ch[2], r"This squares the difference of the radii, $(R - r)^{2}$, instead of subtracting their squares."),
         (ch[3], r"This uses radii $\ln x - 1$ and $\dfrac{x - 1}{2} - 1$, subtracting $1$ instead of adding it. The distance from a height $y$ to the line $y = -1$ is $y + 1$."),
         (ch[4], r"This adds the squares of the radii, $R^{2} + r^{2}$. A washer's area is $\pi\left(R^{2} - r^{2}\right)$, the outer disc minus the hole.")], "easy", calc=True)
t812_calc.max = 1


def _shape(it):
    return rank(_lens_shape(it["choices"]))

def steer(fn, tries=20):
    """Answer patterns (HANDOFF rule 6): among a template's variants, prefer the shape rank() asks for, never one whose
    key is the longest choice when another variant avoids it, and never repeat a key this template already gave."""
    given = set()
    def g(r):
        best = None
        for _ in range(tries):
            try:
                it = fn(r)
            except Skip:
                continue
            if it["choices"][0] in given:
                continue
            if best is None or _shape(it) < _shape(best):
                best = it
            if _shape(best) == 0:
                break
        if best is None:
            raise Skip("no new variant")
        given.add(best["choices"][0])
        STATS["n"] += 1
        STATS["S"] += _lens_shape(best["choices"]) == 0
        return best
    g.__name__ = fn.__name__
    g.max = getattr(fn, "max", 99)
    return g

TEMPLATES = {"8.1": [t81_poly, t81_recip, t81_abs, t81_trig, t81_calc],
             "8.2": [t82_pos, t82_posmid, t82_disp, t82_dist, t82_acc, t82_stop, t82_meaning, t82_calcdist, t82_calcpos, t82_avgvel],
             "8.3": [t83_exact, t83_units, t83_calcamount, t83_calcinout, t83_calcmax, t83_backward],
             "8.4": [t84_lens, t84_setup, t84_exp, t84_calc, t84_split],
             "8.5": [t85_ln, t85_root, t85_two, t85_cube],
             "8.6": [t86_cubic, t86_calc],
             "8.7": [t87_sq, t87_rect, t87_y], "8.8": [t88_semi, t88_tri, t88_calc], "8.9": [t89_line, t89_y, t89_calc],
             "8.10": [t810_h, t810_v, t810_calc], "8.11": [t811_x, t811_y, t811_calc], "8.12": [t812_above, t812_vert, t812_calc]}
TEMPLATES = {tp: [steer(fn) for fn in fns] for tp, fns in TEMPLATES.items()}

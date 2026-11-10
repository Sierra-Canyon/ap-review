"""Unit 2, Differentiation: Definition and Fundamental Properties. Every key and wrong choice is computed.

Each template sets a difficulty the way Albert labels its own Unit 2 items (easy: one rule on one function; moderate:
one twist such as a rewrite, a special angle, or a one-sided check; difficult: two or three twists stacked, such as a
point hidden in a limit, a reverse task, an I/II/III list, or a table that needs an estimate first). Topic 2.3 is built
from tables (GRAPH_TEMPLATES), so those items read their data from a table block.
"""
import json as _json
import sys as _sys
import core as _core
from core import *


def I(diff, *a, **k):
    """item() plus a difficulty."""
    it = item(*a, **k)
    it["difficulty"] = diff
    return it


def prefer_short(r, it, p=0.97):
    """Answer-pattern balance (HANDOFF rule 6): with probability p, reject a set of numbers whose key is not the
    shortest choice, so that across the file the key is the shortest choice often enough. The math is unchanged."""
    lens = [len(c) for c in it["choices"]]
    if not lens[0] < min(lens[1:]) and r.random() < p:
        raise Skip("key not shortest")
    return it


def piece(e1, e2, a, op1="<", op2=r"\ge"):
    return rf"\begin{{cases}} {L(e1)}, & x {op1} {a} \\ {L(e2)}, & x {op2} {a} \end{{cases}}"


def frac_exp(q):
    """An exponent written as p/q inside x^{...}."""
    q = Rational(q)
    return str(q.p) if q.q == 1 else f"{q.p}/{q.q}"


def coef_x(c, e):
    """c x^{e} with c exact and the exponent as p/q."""
    c = Rational(c)
    if c == 1:
        cs = ""
    elif c == -1:
        cs = "-"
    else:
        cs = L(c).replace(" ", "")
    return f"{cs}x^{{{frac_exp(e)}}}"


def dec(v):
    """A terminating decimal for a rational value, or Skip."""
    v = Rational(v)
    q = v.q
    while q % 2 == 0:
        q //= 2
    while q % 5 == 0:
        q //= 5
    if q != 1:
        raise Skip("not terminating")
    if v.q == 1:
        return str(v.p)
    s = f"{float(v):.4f}".rstrip("0")
    return s


def line_ps(y0, slope, a):
    """y - y0 = slope(x - a), point-slope form."""
    lhs = L(Symbol("y") - y0)
    return rf"{lhs} = {L(slope)}\left({L(x - a)}\right)"


def si(m0, b):
    """y = mx + b in slope-intercept order."""
    return f"y = {L(m0 * x)} {pm(b)}".rstrip() if m0 != 0 else f"y = {L(b)}"


def table_set(name, intro, head, rows):
    head_js = "[" + ", ".join(js_string(h) for h in head) + "]"
    rows_js = "[" + ", ".join("[" + ", ".join(js_string(c) for c in row) + "]" for row in rows) + "]"
    return ("{ name: " + _json.dumps(name) + ', label: "Table", intro: ' + js_string(intro) +
            ', sources: [{ title: "", blocks: [{ table: { head: ' + head_js + ", rows: " + rows_js + " } }] }] }")


# ---------------------------------------------------------------- 2.1
def t21_context(r):
    a = r.choice([0, 1, 2]); b = a + r.choice([2, 3, 4]); k = r.choice([3, 4, 5]); c = r.choice([10, 20, 50])
    T = c + k * t**2 - t**3 / 3 if r.random() < 0.5 else c + k * t**2
    Ta, Tb = T.subs(t, a), T.subs(t, b); avg = (Tb - Ta) / (b - a)
    q = rf"The temperature of a liquid, in degrees Celsius, is $T(t) = {L(T)}$, where $t$ is measured in minutes. What is the average rate of change of $T$ over the interval ${a} \le t \le {b}$, in degrees Celsius per minute?"
    dT = diff(T, t)
    return prefer_short(r, I("easy", "2.1", q, (num(avg), rf"$\dfrac{{T({b}) - T({a})}}{{{b} - {a}}} = \dfrac{{{L(Tb)} - {L(Ta)}}}{{{b - a}}} = {L(avg)}$ degrees per minute."),
        [(num(Tb - Ta), rf"${L(Tb - Ta)}$ is $T({b}) - T({a})$, the change in temperature, not divided by the ${b - a}$ minutes."),
         (num(dT.subs(t, b)), rf"${L(dT.subs(t, b))}$ is $T'({b})$, the instantaneous rate at $t = {b}$, not the average rate over the interval."),
         (num((Ta + Tb) / 2), rf"${L((Ta + Tb) / 2)}$ averages the two temperatures $T({a})$ and $T({b})$. A rate of change divides a change in $T$ by a change in $t$.")]))

def t21_secant(r):
    a = r.choice([1, 2]); b = a + r.choice([1, 2, 3]); p = r.choice([1, 2])
    f = p * x**2 - 3 * x
    s = (f.subs(x, b) - f.subs(x, a)) / (b - a)
    q = rf"Let $f(x) = {L(f)}$. Which of the following is the slope of the secant line to the graph of $f$ through the points where $x = {a}$ and $x = {b}$?"
    fp = diff(f, x)
    return prefer_short(r, I("easy", "2.1", q, (num(s), rf"The secant slope is the average rate of change: $\dfrac{{f({b}) - f({a})}}{{{b} - {a}}} = \dfrac{{{L(f.subs(x, b))} - ({L(f.subs(x, a))})}}{{{b - a}}} = {L(s)}$."),
        [(num(fp.subs(x, a)), rf"${L(fp.subs(x, a))}$ is $f'({a})$, the slope of the tangent line at $x = {a}$, not the secant line."),
         (num(fp.subs(x, b)), rf"${L(fp.subs(x, b))}$ is $f'({b})$, the slope of the tangent line at $x = {b}$, not the secant line."),
         (num(f.subs(x, b) - f.subs(x, a)), rf"${L(f.subs(x, b) - f.subs(x, a))}$ is $f({b}) - f({a})$, the rise only, not divided by the run ${b - a}$.")]))

def t21_expr(r):
    c = r.choice([1, 2, 5]); b = r.choice([2, 3, 4])
    a = Symbol("a")
    q = rf"Let $f(x) = x^{{2}} + {c}$. For $a \ne {b}$, which of the following expressions gives the average rate of change of $f$ over the interval between $x = a$ and $x = {b}$?"
    key = rf"\frac{{a^{{2}} - {b * b}}}{{a - {b}}}"
    return I("moderate", "2.1", q, (key, rf"The average rate of change is $\dfrac{{f(a) - f({b})}}{{a - {b}}} = \dfrac{{(a^{{2}} + {c}) - ({b * b} + {c})}}{{a - {b}}} = \dfrac{{a^{{2}} - {b * b}}}{{a - {b}}}$. The constant ${c}$ cancels."),
        [(rf"\frac{{a^{{2}} - {b * b}}}{{{b} - a}}", rf"This reverses the order of subtraction in the denominator only. The numerator and denominator must both be (value at $a$) minus (value at ${b}$), or both the reverse."),
         (rf"\frac{{a^{{2}} - {b * b - c}}}{{a - {b}}}", rf"This subtracts ${b}^{{2}} = {b * b}$ in place of $f({b}) = {b * b + c}$, so the constant ${c}$ does not cancel."),
         (rf"\frac{{2a - {2 * b}}}{{a - {b}}}", rf"This uses the derivative values $f'(a) = 2a$ and $f'({b}) = {2 * b}$ in place of the function values $f(a)$ and $f({b})$.")])


def t21_inverse(r):
    A = r.choice([16, 19, 22])
    k = A - 13
    q = rf"Let $f(x) = x^{{3}} + kx$, where $k$ is a constant. The average rate of change of $f$ over the interval $[1, 3]$ is ${A}$. What is the value of $k$?"
    return I("difficult", "2.1", q, (num(k), rf"$f(3) = 27 + 3k$ and $f(1) = 1 + k$, so $\dfrac{{f(3) - f(1)}}{{3 - 1}} = \dfrac{{26 + 2k}}{{2}} = 13 + k$. Setting $13 + k = {A}$ gives $k = {k}$."),
        [(num(Rational(A - 26, 2)), rf"This solves $26 + 2k = {A}$, which sets the change $f(3) - f(1)$ equal to ${A}$ without dividing by $3 - 1 = 2$."),
         (num(A - 27), rf"This solves $f'(3) = 27 + k = {A}$, the instantaneous rate at $x = 3$, not the average rate over $[1, 3]$."),
         (num(A - 15), rf"This averages the rates at the endpoints: $\dfrac{{f'(1) + f'(3)}}{{2}} = \dfrac{{(3 + k) + (27 + k)}}{{2}} = 15 + k$. The average rate of change uses values of $f$, not of $f'$.")])


# ---------------------------------------------------------------- 2.2
def t22_value(r):
    a = r.choice([1, 2, 3, -1]); p = r.choice([2, 3]); c = r.choice([1, -4, 5])
    f = p * x**2 + c * x
    val = diff(f, x).subs(x, a)
    q = rf"For $f(x) = {L(f)}$, what is $\displaystyle \lim_{{h \to 0}} \frac{{f({a} + h) - f({a})}}{{h}}$?"
    return prefer_short(r, I("easy", "2.2", q, (num(val), rf"The limit is the definition of $f'({a})$. Since $f'(x) = {L(diff(f, x))}$, $f'({a}) = {L(val)}$."),
        [(num(f.subs(x, a)), rf"${L(f.subs(x, a))}$ is $f({a})$, the value of the function, not the limit of the difference quotient."),
         (num(2 * p * a), rf"${2 * p * a}$ is $2({p})({a})$, the derivative of ${p}x^{{2}}$ alone. The derivative of the term ${L(c * x)}$ is ${c}$, and it was left out."),
         (text_choice("The limit does not exist."), r"Substituting $h = 0$ gives $\dfrac{0}{0}$, which is indeterminate, not a sign that the limit fails to exist. The limit is the derivative $f'(" + str(a) + r")$.")]))

def t22_basic(r):
    kind = r.choice(["pow", "ln", "root"])
    if kind == "pow":
        n = r.choice([3, 4]); a = r.choice([2, 3]) if n == 3 else 2
        expr = rf"\frac{{({a} + h)^{{{n}}} - {a**n}}}{{h}}"; val = n * a**(n - 1); f = f"x^{{{n}}}"
        wr = [(num(a**n), rf"${a**n}$ is $f({a}) = {a}^{{{n}}}$, a value of the function, not its derivative."),
              (num(n * a**n), rf"${n * a**n}$ is ${n} \cdot {a}^{{{n}}}$: the exponent was brought down but not lowered by $1$."),
              ("0", r"The numerator and the denominator both approach $0$, so the quotient approaches the derivative, not $0$.")]
    elif kind == "ln":
        a = r.choice([3, 4]); expr = rf"\frac{{\ln({a} + h) - \ln {a}}}{{h}}"; val = Rational(1, a); f = r"\ln x"
        wr = [(L(log(a)), rf"$\ln {a}$ is $f({a})$, a value of the function, not $f'({a})$."),
              (num(a), r"The derivative of $\ln x$ is $\dfrac{1}{x}$, not $x$."),
              ("0", r"The numerator and the denominator both approach $0$, so the quotient approaches the derivative, not $0$.")]
    else:
        a = r.choice([16, 25]); ra = int(a**0.5); expr = rf"\frac{{\sqrt{{{a} + h}} - {ra}}}{{h}}"; val = Rational(1, 2 * ra); f = r"\sqrt{x}"
        wr = [(num(ra), rf"${ra}$ is $\sqrt{{{a}}}$, a value of the function, not its derivative."),
              (num(Rational(1, ra)), rf"This uses $\dfrac{{1}}{{\sqrt{{x}}}}$ as the derivative of $\sqrt{{x}}$. The derivative is $\dfrac{{1}}{{2\sqrt{{x}}}}$, which is $\dfrac{{1}}{{{2 * ra}}}$ at $x = {a}$."),
              ("0", r"The numerator and the denominator both approach $0$, so the quotient approaches the derivative, not $0$.")]
    q = rf"What is $\displaystyle \lim_{{h \to 0}} {expr}$?"
    return I("easy", "2.2", q, (num(val), rf"This is the definition of the derivative of $f(x) = {f}$ at $x = {a}$, so the limit equals $f'({a}) = {L(val)}$."), wr)


def t22_hidden(r):
    kind = r.choice(["cos", "pow", "recip", "root"])
    dne = text_choice("The limit does not exist.")
    if kind == "cos":
        expr = r"\frac{\cos x}{x - \frac{\pi}{2}}"; lim = r"x \to \frac{\pi}{2}"
        key = ("-1", r"Since $\cos\dfrac{\pi}{2} = 0$, this is $\displaystyle \lim_{x \to \frac{\pi}{2}} \frac{\cos x - \cos\frac{\pi}{2}}{x - \frac{\pi}{2}}$, the derivative of $\cos x$ at $x = \dfrac{\pi}{2}$. That is $-\sin\dfrac{\pi}{2} = -1$.")
        wr = [("1", r"This uses $\sin x$ as the derivative of $\cos x$. The derivative of $\cos x$ is $-\sin x$."),
              ("0", r"$0$ is $\cos\dfrac{\pi}{2}$, the value of the function, not its derivative."),
              (dne, r"Substituting gives $\dfrac{0}{0}$, which is indeterminate, not a sign that the limit fails to exist. The limit is the derivative of $\cos x$ at $x = \dfrac{\pi}{2}$.")]
    elif kind == "pow":
        expr = r"\frac{x^{3/2} - 8}{x - 4}"; lim = r"x \to 4"
        key = ("3", r"Since $4^{3/2} = 8$, this is the derivative of $f(x) = x^{3/2}$ at $x = 4$. $f'(x) = \dfrac{3}{2}x^{1/2}$, so $f'(4) = \dfrac{3}{2}(2) = 3$.")
        wr = [("8", r"$8$ is $f(4) = 4^{3/2}$, the value of the function, not its derivative."),
              ("12", r"$12$ is $\dfrac{3}{2}(4)^{3/2}$: the exponent was brought down but not lowered by $1$."),
              (dne, r"Substituting gives $\dfrac{0}{0}$, which is indeterminate, not a sign that the limit fails to exist. The limit is the derivative of $x^{3/2}$ at $x = 4$.")]
    elif kind == "recip":
        expr = r"\frac{\frac{1}{x} - 2}{x - \frac{1}{2}}"; lim = r"x \to \frac{1}{2}"
        key = ("-4", r"Since $\dfrac{1}{1/2} = 2$, this is the derivative of $f(x) = \dfrac{1}{x}$ at $x = \dfrac{1}{2}$. $f'(x) = -\dfrac{1}{x^{2}}$, so $f'\left(\dfrac{1}{2}\right) = -4$.")
        wr = [("4", r"This drops the negative sign: the derivative of $x^{-1}$ is $-x^{-2}$."),
              ("2", r"$2$ is $f\left(\dfrac{1}{2}\right)$, the value of the function, not its derivative."),
              (dne, r"Substituting gives $\dfrac{0}{0}$, which is indeterminate, not a sign that the limit fails to exist. The limit is the derivative of $\dfrac{1}{x}$ at $x = \dfrac{1}{2}$.")]
    else:
        expr = r"\frac{\sqrt{x} - 3}{x - 9}"; lim = r"x \to 9"
        key = (r"\frac{1}{6}", r"Since $\sqrt{9} = 3$, this is the derivative of $f(x) = \sqrt{x}$ at $x = 9$. $f'(x) = \dfrac{1}{2\sqrt{x}}$, so $f'(9) = \dfrac{1}{6}$.")
        wr = [("3", r"$3$ is $f(9) = \sqrt{9}$, the value of the function, not its derivative."),
              (r"\frac{1}{3}", r"This uses $\dfrac{1}{\sqrt{x}}$ as the derivative of $\sqrt{x}$, leaving out the factor $\dfrac{1}{2}$."),
              (dne, r"Substituting gives $\dfrac{0}{0}$, which is indeterminate, not a sign that the limit fails to exist. The limit is the derivative of $\sqrt{x}$ at $x = 9$.")]
    q = rf"What is $\displaystyle \lim_{{{lim}}} {expr}$?"
    return I("difficult", "2.2", q, key, wr)


def t22_roman(r):
    a = r.choice([3, -2, 5])
    q = (rf"The function $f$ is differentiable at $x = {a}$. Which of the following limits are equal to $f'({a})$?" + "\n\n" +
         rf"I. $\displaystyle \lim_{{h \to 0}} \frac{{f({a}) - f({a} - h)}}{{h}}$" + "\n" +
         rf"II. $\displaystyle \lim_{{x \to {a}}} \frac{{f(x) - f({a})}}{{{a} - x}}$" + "\n" +
         rf"III. $\displaystyle \lim_{{h \to 0}} \frac{{f({a} + 2h) - f({a})}}{{2h}}$")
    return I("difficult", "2.2", q, (text_choice("I and III only"), rf"I: with $k = -h$, it becomes $\displaystyle \lim_{{k \to 0}} \frac{{f({a} + k) - f({a})}}{{k}} = f'({a})$. III: with $k = 2h$, it is the same definition. II reverses the denominator but not the numerator, so it equals $-f'({a})$."),
        [(text_choice("I only"), rf"III is also equal to $f'({a})$. As $h \to 0$, $2h \to 0$, and the numerator and denominator use the same step $2h$."),
         (text_choice("I, II, and III"), rf"II is not equal to $f'({a})$. Its numerator is $f(x) - f({a})$ but its denominator is ${a} - x$, so it equals $-f'({a})$."),
         (text_choice("III only"), rf"I is also equal to $f'({a})$. Both its numerator and denominator measure the change from $x = {a} - h$ to $x = {a}$.")])


def t22_normal(r):
    a = r.choice([1, -2, 3]); c = r.choice([4, -1, 6]); m0 = r.choice([2, 3, -4, 5])
    q = rf"The function $f$ satisfies $f({a}) = {c}$ and $\displaystyle \lim_{{h \to 0}} \frac{{f({a} + h) - ({c})}}{{h}} = {m0}$. Which of the following is an equation of the line perpendicular to the graph of $f$ at $x = {a}$ (the normal line)?"
    nm = Rational(-1, m0)
    return I("moderate", "2.2", q, (line_ps(c, nm, a), rf"The limit is $f'({a}) = {m0}$, the slope of the tangent line. The perpendicular line has the negative reciprocal slope, ${L(nm)}$, and passes through $({a}, {c})$."),
        [(line_ps(c, m0, a), rf"This is the tangent line, with slope $f'({a}) = {m0}$. The perpendicular line has the negative reciprocal slope."),
         (line_ps(c, -nm, a), rf"This uses the reciprocal of ${m0}$ without changing its sign. Perpendicular slopes have a product of $-1$."),
         (line_ps(c, -m0, a), rf"This changes the sign of ${m0}$ but does not take the reciprocal. Perpendicular slopes have a product of $-1$.")])


# ---------------------------------------------------------------- 2.3 (tables)
_t23_count = [0]


def g23(r):
    """Three designs, one per call: a context table (easy), comparing estimates (moderate), a table with the product
    rule (difficult)."""
    k = _t23_count[0] % 3
    sid = f"c2x-s{_t23_count[0] + 1}"
    if k == 0:
        ts = [0, 2, 5, 7, 10]
        d0 = r.choice([2, 3]); d1 = r.choice([4, 5, 6]); d2 = r.choice([4, 5, 8]); d3 = r.choice([3, 4, 6])
        D = [0, d0, d0 + d1, d0 + d1 + d2, d0 + d1 + d2 + d3]
        est = Rational(D[3] - D[2], 2)
        intro = r"Snow falls on a flat roof during a storm. The depth of the snow on the roof, in inches, is given by a differentiable function $D$ of time $t$, in hours. Selected values of $D(t)$ are given in the table below."
        code = table_set("Snow on a roof", intro, [r"$t$ (hours)"] + [f"${v}$" for v in ts], [[r"$D(t)$ (inches)"] + [f"${v}$" for v in D]])
        q = r"Based on the data in the table, which of the following is the best estimate of $D'(6)$, in inches per hour?"
        it = I("easy", "2.3", q, (dec(est), rf"$t = 6$ lies between the data points $t = 5$ and $t = 7$, so $D'(6) \approx \dfrac{{D(7) - D(5)}}{{7 - 5}} = \dfrac{{{D[3]} - {D[2]}}}{{2}} = {dec(est)}$ inches per hour."),
               [(dec(D[3] - D[2]), rf"${D[3] - D[2]}$ is $D(7) - D(5)$, the change in depth, without dividing by the $2$ hours."),
                (dec(Rational(2, D[3] - D[2])), rf"This is $\dfrac{{7 - 5}}{{D(7) - D(5)}}$, the change in time over the change in depth, which is the reciprocal of the rate."),
                (dec(Rational(D[4] - D[0], 10)), rf"This is $\dfrac{{D(10) - D(0)}}{{10}}$, the average rate over the whole storm, which is a poor estimate at one time.")], set_id=sid)
    elif k == 1:
        xs = [0, 1, 3, 4, 7]
        for _ in range(500):
            f = [r.randint(-6, 12) for _ in xs]
            d = [f[1] - f[0], f[2] - f[1], f[3] - f[2], f[4] - f[3]]
            s = [Rational(d[0], 1), Rational(d[1], 2), Rational(d[2], 1), Rational(d[3], 3)]
            if len(set(s)) < 4 or len(set(f)) < 5:
                continue
            best = max(range(4), key=lambda i: s[i])
            bigd = max(range(4), key=lambda i: d[i])
            if sorted(s)[-1] - sorted(s)[-2] < Rational(1, 2):
                continue
            if bigd == best or d[bigd] <= d[best]:
                continue
            if any(v != int(v) for v in s):
                continue
            break
        else:
            raise Skip("no table")
        pts = [r"f'(0.5)", r"f'(2)", r"f'(3.5)", r"f'(5.5)"]
        pairs = [(0, 1), (1, 3), (3, 4), (4, 7)]
        idx = {0: 0, 1: 1, 3: 2, 4: 3, 7: 4}
        intro = r"The function $f$ is differentiable for all real numbers. Selected values of $f$ are given in the table below."
        code = table_set("Values of f", intro, ["$x$"] + [f"${v}$" for v in xs], [["$f(x)$"] + [f"${v}$" for v in f]])
        q = r"Each derivative below is estimated by the difference quotient of the two table values on either side of it. Which estimate is the greatest?"

        def show(i):
            lo, hi = pairs[i]
            return rf"$\dfrac{{f({hi}) - f({lo})}}{{{hi} - {lo}}} = \dfrac{{{f[idx[hi]]} - ({f[idx[lo]]})}}{{{hi - lo}}} = {L(s[i])}$"
        whys = {}
        for i in range(4):
            if i == best:
                whys[i] = rf"The estimates are " + ", ".join(rf"${pts[j]} \approx {L(s[j])}$" for j in range(4)) + rf". The greatest is ${pts[i]}$: {show(i)}."
            elif i == bigd:
                whys[i] = rf"$f$ changes the most, by ${d[i]}$, over $[{pairs[i][0]}, {pairs[i][1]}]$, but that change is spread over ${pairs[i][1] - pairs[i][0]}$ units: {show(i)}. The estimate divides by the change in $x$."
            else:
                whys[i] = rf"{show(i)}, which is less than ${pts[best]} \approx {L(s[best])}$."
        order = [best] + [i for i in range(4) if i != best]
        it = I("moderate", "2.3", q, (text_choice(f"${pts[best]}$"), whys[best]), [(text_choice(f"${pts[i]}$"), whys[i]) for i in order[1:]], set_id=sid)
    else:
        xs = [0, 2, 4, 6, 8]
        for _ in range(500):
            f = [r.randint(-5, 9) for _ in xs]
            if (f[3] - f[1]) % 4 or f[3] == f[1] or f[2] == 0:
                continue
            est = Rational(f[3] - f[1], 4)
            key = f[2] + 4 * est
            w = [4 * est, f[2] + est, est]
            if len({key, *w}) == 4 and len(set(f)) == 5:
                break
        else:
            raise Skip("no table")
        intro = r"The function $f$ is differentiable for all real numbers. Selected values of $f$ are given in the table below. Let $h(x) = x f(x)$."
        code = table_set("Values of f for a product", intro, ["$x$"] + [f"${v}$" for v in xs], [["$f(x)$"] + [f"${v}$" for v in f]])
        q = r"Using the values of $f$ at $x = 2$ and $x = 6$ to estimate $f'(4)$, what is the estimate of $h'(4)$?"
        it = I("difficult", "2.3", q, (num(key), rf"$f'(4) \approx \dfrac{{f(6) - f(2)}}{{6 - 2}} = \dfrac{{{f[3]} - ({f[1]})}}{{4}} = {L(est)}$. By the product rule, $h'(4) = f(4) + 4f'(4) \approx {f[2]} + 4\left({L(est)}\right) = {L(key)}$."),
               [(num(4 * est), rf"This is $4f'(4)$ alone. The product rule also gives the term $(1) \cdot f(4) = {f[2]}$."),
                (num(f[2] + est), rf"This is $f(4) + f'(4)$, which leaves the factor $x = 4$ off the second term of the product rule."),
                (num(est), rf"${L(est)}$ is the estimate of $f'(4)$, not of $h'(4)$.")], set_id=sid)
    _t23_count[0] += 1
    return [it], sid, code


# ---------------------------------------------------------------- 2.4
FOUR = [r"$f$ is continuous and differentiable at $x = {a}$.", r"$f$ is continuous but not differentiable at $x = {a}$.",
        r"$f$ is differentiable but not continuous at $x = {a}$.", r"$f$ is neither continuous nor differentiable at $x = {a}$."]


def t24_abs(r):
    a = r.choice([1, 3, -2]); b = r.choice([4, -1])
    q = rf"Let $f(x) = |{L(x - a)}| {pm(b)}$. Which of the following is true?"
    c = [text_choice(s.replace("{a}", str(a))) for s in FOUR]
    return I("easy", "2.4", q, (c[1], rf"The graph has a corner at $x = {a}$: the slope is $-1$ from the left and $1$ from the right, so $f'({a})$ does not exist. The graph has no break, so $f$ is continuous."),
        [(c[2], r"A function that is differentiable at a point must be continuous there, so this cannot happen."),
         (c[0], rf"The one-sided slopes $-1$ and $1$ differ, so $f'({a})$ does not exist."),
         (c[3], rf"$\displaystyle \lim_{{x \to {a}}} f(x) = {b} = f({a})$, so $f$ is continuous at $x = {a}$.")])


def t24_jump(r):
    kind = r.choice(["jump", "smooth"])
    c = [text_choice(s_) for s_ in FOUR]
    if kind == "smooth":
        a = r.choice([1, 2, -1]); k = r.choice([3, 5])
        e1 = k - x**2; e2 = k + a * a - 2 * a * x
        q = rf"Let $f(x) = {piece(e1, e2, a, op1=chr(92) + 'le', op2='>')}$. Which of the following is true?"
        c = [cc.replace("{a}", str(a)) for cc in c]
        v = e1.subs(x, a); sl = -2 * a
        return I("moderate", "2.4", q, (c[0], rf"Both pieces equal ${v}$ at $x = {a}$, so $f$ is continuous. The slope of ${L(e1)}$ is $-2x = {sl}$ at $x = {a}$, and the slope of ${L(e2)}$ is ${sl}$. The one-sided slopes match, so $f'({a}) = {sl}$."),
            [(c[1], rf"A corner needs different one-sided slopes. Here both are ${sl}$ at $x = {a}$."),
             (c[2], r"A function that is differentiable at a point must be continuous there, so this cannot happen."),
             (c[3], rf"Both pieces equal ${v}$ at $x = {a}$, which is $f({a})$, so $f$ is continuous there.")])
    a = r.choice([1, 2, -1]); p = r.choice([2, 3]); s0 = r.choice([1, -2]); gap = r.choice([2, 3, -3])
    e1 = p * x + s0; e2 = -x + (p * a + s0 + a + gap)
    q = rf"Let $f(x) = {piece(e1, e2, a)}$. Which of the following is true?"
    c = [cc.replace("{a}", str(a)) for cc in c]
    lv, rv = e1.subs(x, a), e2.subs(x, a)
    return I("easy", "2.4", q, (c[3], rf"$\displaystyle \lim_{{x \to {a}^-}} f(x) = {lv}$ and $\displaystyle \lim_{{x \to {a}^+}} f(x) = {rv}$, so the limit does not exist and $f$ is not continuous at $x = {a}$. A function that is not continuous at a point is not differentiable there."),
        [(c[1], rf"The one-sided limits ${lv}$ and ${rv}$ differ, so $f$ has a jump and is not continuous at $x = {a}$."),
         (c[0], rf"The graph jumps from ${lv}$ to ${rv}$ at $x = {a}$, so $f$ is neither continuous nor differentiable there."),
         (c[2], r"A function that is differentiable at a point must be continuous there, so this cannot happen.")])


def t24_corner(r):
    a = r.choice([1, 2, -1]); p = r.choice([1, 3]); rr = r.choice([-2, 4, 5])
    if p == rr: raise Skip("same")
    q0 = r.choice([2, -1]); s0 = p * a + q0 - rr * a
    e1, e2 = p * x + q0, rr * x + s0
    side = r.choice(["left", "right"])
    want = p if side == "left" else rr
    q = rf"Let $f(x) = {piece(e1, e2, a)}$. The function $f$ is continuous at $x = {a}$. What is $\displaystyle \lim_{{h \to 0^{{{'-' if side == 'left' else '+'}}}}} \frac{{f({a} + h) - f({a})}}{{h}}$?"
    return prefer_short(r, I("moderate", "2.4", q, (num(want), rf"For $h {'< 0' if side == 'left' else '> 0'}$, $f({a} + h)$ uses the piece ${L(e1 if side == 'left' else e2)}$, whose slope is ${want}$."),
        [(num(rr if side == "left" else p), rf"This is the slope of the piece on the other side of $x = {a}$. For $h {'< 0' if side == 'left' else '> 0'}$, the point ${a} + h$ is to the {side} of ${a}$."),
         (text_choice("The limit does not exist."), rf"The two-sided limit, $f'({a})$, does not exist because the slopes differ, but each one-sided limit exists."),
         (num(Rational(p + rr, 2)), r"This averages the two slopes. A one-sided limit uses only the piece on one side.")]))

def t24_must(r):
    a = r.choice([2, 3, 5])
    q = rf"If $f$ is differentiable at $x = {a}$, which of the following must be true?"
    return I("easy", "2.4", q, (text_choice(rf"$\displaystyle \lim_{{x \to {a}}} f(x) = f({a})$"), rf"A function that is differentiable at a point is continuous there, so the limit of $f$ at $x = {a}$ equals $f({a})$."),
        [(text_choice(rf"$\displaystyle \lim_{{x \to {a}}} f(x) = f'({a})$"), rf"The limit of $f$ equals the value $f({a})$, not the slope $f'({a})$. For $f(x) = x^{{2}} + 1$, the limit at ${a}$ is ${a * a + 1}$ but $f'({a}) = {2 * a}$."),
         (text_choice(rf"$\displaystyle \lim_{{x \to {a}}} f(x) = 0$"), rf"Nothing forces $f({a}) = 0$. For $f(x) = x^{{2}} + 1$, the limit at ${a}$ is ${a * a + 1}$."),
         (text_choice(rf"$\displaystyle \lim_{{x \to {a}}} f'(x) = 0$"), rf"A differentiable function need not have a horizontal tangent at $x = {a}$. For $f(x) = x^{{2}} + 1$, $f'(x) \to {2 * a}$.")])


def t24_converse(r):
    a = r.choice([1, 4])
    q = rf"The function $f$ is continuous at $x = {a}$. Which of the following must be true?"
    return I("easy", "2.4", q, (text_choice(rf"$f({a})$ equals $\displaystyle \lim_{{x \to {a}}} f(x)$."), r"This is the definition of continuity at a point."),
        [(text_choice(rf"$f'({a})$ exists and is finite."), rf"Continuity does not imply differentiability. $f(x) = |x - {a}|$ is continuous at $x = {a}$ but has a corner there."),
         (text_choice(rf"$f'({a})$ is equal to $0$."), rf"Continuity says nothing about the slope. $f(x) = 2x$ is continuous at $x = {a}$ with slope $2$."),
         (text_choice(rf"$f({a})$ is not equal to $0$."), rf"A continuous function can have the value $0$. $f(x) = x - {a}$ is continuous at $x = {a}$ and $f({a}) = 0$.")])


def t24_shape(r):
    kind = r.choice(["cube", "twothirds", "fourthirds"])
    a = r.choice([1, -1, 3])
    labels = [text_choice("The graph has a vertical tangent line."), text_choice("The graph has a cusp."),
              text_choice("The graph has a corner."), text_choice("The graph has a horizontal tangent line.")]
    if kind == "cube":
        q = rf"Let $f(x) = \sqrt[3]{{{L(x - a)}}}$. Which of the following describes the graph of $f$ at $x = {a}$?"
        key, rest = labels[0], [labels[1], labels[2], labels[3]]
        kw = rf"$f'(x) = \dfrac{{1}}{{3\sqrt[3]{{({L(x - a)})^{{2}}}}}}$, which is positive on both sides and grows without bound as $x \to {a}$. The graph is continuous and its tangent line becomes vertical, so $f'({a})$ does not exist."
        ws = [r"A cusp has slopes of opposite signs on the two sides. Here $f'(x) > 0$ on both sides of the point.",
              r"A corner has two different finite one-sided slopes. Here the slope grows without bound.",
              r"The slope near the point grows without bound. It does not approach $0$."]
        diff_ = "moderate"
    elif kind == "twothirds":
        q = rf"Let $f(x) = \sqrt[3]{{({L(x - a)})^{{2}}}}$. Which of the following describes the graph of $f$ at $x = {a}$?"
        key, rest = labels[1], [labels[0], labels[2], labels[3]]
        kw = rf"$f'(x) = \dfrac{{2}}{{3\sqrt[3]{{{L(x - a)}}}}}$, which approaches $-\infty$ from the left and $\infty$ from the right. The slopes have opposite signs and grow without bound, so the graph has a cusp."
        ws = [r"A vertical tangent line needs the slope to grow without bound with the same sign on both sides. Here it is negative on the left and positive on the right.",
              r"A corner has two different finite one-sided slopes. Here the slopes grow without bound.",
              rf"$f'({a})$ does not exist. The slopes near the point grow without bound instead of approaching $0$."]
        diff_ = "moderate"
    else:
        q = rf"Let $f(x) = \sqrt[3]{{({L(x - a)})^{{4}}}}$. Which of the following is true?"
        c4 = [text_choice(s_.replace("{a}", str(a))) for s_ in FOUR]
        key, rest = c4[0], [c4[1], c4[2], c4[3]]
        kw = rf"$f(x) = ({L(x - a)})^{{4/3}}$, so $f'(x) = \dfrac{{4}}{{3}}({L(x - a)})^{{1/3}}$, which is $0$ at $x = {a}$. $f$ is differentiable there, so it is also continuous."
        ws = [rf"The radical suggests a cusp, but the exponent $\dfrac{{4}}{{3}}$ is greater than $1$. $f'(x) = \dfrac{{4}}{{3}}({L(x - a)})^{{1/3}}$ approaches $0$ from both sides, so $f'({a}) = 0$ exists.",
              r"A function that is differentiable at a point must be continuous there, so this cannot happen.",
              rf"$f({a}) = 0$ and $f(x) \to 0$ as $x \to {a}$, so $f$ is continuous, and $f'({a}) = 0$."]
        diff_ = "difficult"
    return I(diff_, "2.4", q, (key, kw), list(zip(rest, ws)))


def t24_match(r):
    a = r.choice([1, 2, -1]); c = r.choice([0, 1, 3])
    m0 = 2 * a; fa = a**2 + c; n = fa - m0 * a
    fdef = rf"f(x) = \begin{{cases}} {L(x**2 + c)}, & x \le {a} \\ mx + n, & x > {a} \end{{cases}}"
    q = rf"Let ${fdef}$. For which values of the constants $m$ and $n$ is $f$ differentiable at $x = {a}$?"
    return I("moderate", "2.4", q, (text_choice(rf"$m = {m0}$ and $n = {L(n)}$"), rf"The slopes must match: the derivative of ${L(x**2 + c)}$ is $2x$, which is ${m0}$ at $x = {a}$, so $m = {m0}$. The pieces must meet: ${fa} = {m0}({a}) + n$, so $n = {L(n)}$."),
        [(text_choice(rf"$m = {m0}$ and $n = {L(fa)}$"), rf"This sets $n = f({a}) = {fa}$, leaving out the term $m({a})$. Continuity needs $m({a}) + n = {fa}$."),
         (text_choice(rf"$m = {m0}$ and $n = {L(fa + m0 * a)}$"), rf"This solves ${fa} = {m0}({a}) + n$ with a sign error, adding ${L(m0 * a)}$ instead of subtracting it."),
         (text_choice(rf"$m = {a}$ and $n = {L(fa - a * a)}$"), rf"The slope of ${L(x**2 + c)}$ at $x = {a}$ is $2({a}) = {m0}$, not ${a}$.")])


def t24_param2(r):
    k = r.choice([2, 4, 6])
    av = Rational(-k, 2); bv = k - av
    fdef = rf"f(x) = \begin{{cases}} ax^{{2}} + b, & x \le 1 \\ \dfrac{{{k}}}{{x}}, & x > 1 \end{{cases}}"
    q = rf"Let ${fdef}$. For which values of the constants $a$ and $b$ is $f$ differentiable at $x = 1$?"
    return I("difficult", "2.4", q, (text_choice(rf"$a = {L(av)}$ and $b = {L(bv)}$"), rf"Slopes: the derivative of $\dfrac{{{k}}}{{x}}$ is $-\dfrac{{{k}}}{{x^{{2}}}}$, which is $-{k}$ at $x = 1$, so $2a = -{k}$ and $a = {L(av)}$. Values: $a + b = {k}$, so $b = {L(bv)}$."),
        [(text_choice(rf"$a = {L(-av)}$ and $b = {L(k + av)}$"), rf"This uses $\dfrac{{{k}}}{{x^{{2}}}}$ as the derivative of $\dfrac{{{k}}}{{x}}$. The derivative of ${k}x^{{-1}}$ is $-{k}x^{{-2}}$, which is negative."),
         (text_choice(rf"$a = -{k}$ and $b = {2 * k}$"), r"This sets $a = -" + str(k) + r"$. The derivative of $ax^{2}$ is $2ax$, which is $2a$ at $x = 1$, not $a$."),
         (text_choice(rf"$a = {k}$ and $b = 0$"), rf"These values make the pieces meet ($a + b = {k}$), but the slopes are $2a = {2 * k}$ and $-{k}$, which differ.")])


def t24_roman(r):
    fam = r.choice(["exp_shift", "exp_bend", "ln_smooth", "sin_shift", "cos_bend", "sinpi_smooth"])
    A = {"exp_shift": (exp(x), x + 2, 0, r"e^{x}"), "exp_bend": (exp(x), 1 + 2 * x, 0, r"e^{x}"),
         "ln_smooth": (log(x), x - 1, 1, r"\ln x"), "sin_shift": (sin(x), x + 1, 0, r"\sin x"),
         "cos_bend": (cos(x), 1 - x, 0, r"\cos x"), "sinpi_smooth": (sin(x), pi - x, pi, r"\sin x")}[fam]
    e1, e2, c, e1tex = A
    ctex = L(c)
    lv, rv = simplify(e1.subs(x, c)), simplify(e2.subs(x, c))
    ls, rs = simplify(diff(e1, x).subs(x, c)), simplify(diff(e2, x).subs(x, c))
    I_ = ls == rs; II_ = lv == rv; III_ = I_ and II_
    dom = r" for $x > 0$" if fam == "ln_smooth" else ""
    q = (rf"Let $f(x) = \begin{{cases}} {e1tex}, & x \le {ctex} \\ {L(e2)}, & x > {ctex} \end{{cases}}${dom}. Which of the following statements are true?" + "\n\n" +
         rf"I. $\displaystyle \lim_{{x \to {ctex}^-}} f'(x) = \lim_{{x \to {ctex}^+}} f'(x)$" + "\n" +
         rf"II. $f$ is continuous at $x = {ctex}$." + "\n" +
         rf"III. $f$ is differentiable at $x = {ctex}$.")
    facts = rf"The left piece has value ${L(lv)}$ and slope ${L(ls)}$ at $x = {ctex}$, and the right piece has value ${L(rv)}$ and slope ${L(rs)}$."
    keytxt = {(True, False): "I only", (False, True): "II only", (True, True): "I, II, and III"}[(I_, II_)]
    if (I_, II_) == (True, False):
        kw = facts + rf" So I is true, II is false because the pieces do not meet, and III is false because a function that is not continuous is not differentiable, even though the slopes match."
    elif (I_, II_) == (False, True):
        kw = facts + rf" So II is true, and I and III are false: the slopes differ, so the graph has a corner."
    else:
        kw = facts + r" The values match and the slopes match, so all three statements are true."
    allc = {"I only": ["I only", "II only", "I and II only", "I, II, and III"],
            "II only": ["II only", "I and II only", "II and III only", "I, II, and III"],
            "I, II, and III": ["I, II, and III", "I only", "II only", "I and II only"]}[keytxt]
    vals = rf"the values ${L(lv)}$ and ${L(rv)}$"
    slps = rf"the slopes ${L(ls)}$ and ${L(rs)}$"
    if keytxt == "I only":
        wh = {"II only": rf"II is false: {vals} differ, so the graph jumps. I is true: the slopes match.",
              "I and II only": rf"II is false: {vals} differ, so $f$ is not continuous at $x = {ctex}$.",
              "I, II, and III": rf"II and III are false: {vals} differ, so $f$ jumps and is not differentiable, even though the slopes match."}
    elif keytxt == "II only":
        wh = {"II and III only": rf"III is false: {slps} differ, so the graph has a corner and $f'({ctex})$ does not exist.",
              "I and II only": rf"I is false: {slps} differ, so the graph has a corner.",
              "I, II, and III": rf"I and III are false: {slps} differ, so the graph has a corner. Continuity does not imply differentiability."}
    else:
        wh = {"I only": rf"II and III are also true: the pieces meet, and with matching slopes $f$ is differentiable.",
              "II only": rf"I and III are also true: the slopes match, and with matching values $f$ is differentiable.",
              "I and II only": r"III is also true: when the values match and the slopes match, $f$ is differentiable."}
    wrongs = [(text_choice(cc), wh[cc]) for cc in allc if cc != keytxt]
    return I("difficult", "2.4", q, (text_choice(keytxt), kw), wrongs)


# ---------------------------------------------------------------- 2.5
def t25_power(r):
    p = r.choice([2, 3, 6]); q0 = r.choice([4, 6, 8]); a = r.choice([1, 4]); n = 2 if a == 4 else r.choice([2, 3])
    f = p / x**n + q0 * sqrt(x)
    val = diff(f, x).subs(x, a)
    wrong1 = (n * p * x**(n - 1) + q0 / (2 * sqrt(x))).subs(x, a)
    wrong2 = (-n * p / x**(n + 1) + q0 * sqrt(x) / 2).subs(x, a)
    wrong3 = (-n * p / x**(n - 1) + q0 / (2 * sqrt(x))).subs(x, a)
    q = rf"If $f(x) = \dfrac{{{p}}}{{x^{{{n}}}}} + {q0}\sqrt{{x}}$, what is $f'({a})$?"
    return I("moderate", "2.5", q, (num(val), rf"Write $f(x) = {p}x^{{-{n}}} + {q0}x^{{1/2}}$. Then $f'(x) = -{n * p}x^{{-{n + 1}}} + {L(Rational(q0, 2))}x^{{-1/2}}$, and $f'({a}) = {L(val)}$."),
        [(num(wrong1), rf"This differentiates $\dfrac{{{p}}}{{x^{{{n}}}}}$ as if it were ${p}x^{{{n}}}$. Rewrite it as ${p}x^{{-{n}}}$ first."),
         (num(wrong2), rf"This brings down the $\dfrac{{1}}{{2}}$ but leaves the exponent of $x^{{1/2}}$ at $\dfrac{{1}}{{2}}$. The derivative of $x^{{1/2}}$ is $\dfrac{{1}}{{2}}x^{{-1/2}}$."),
         (num(wrong3), rf"This lowers the exponent $-{n}$ to $-{n - 1}$, toward $0$. The power rule subtracts $1$: $-{n} - 1 = -{n + 1}$.")])


def t25_tangent(r):
    n = r.choice([3, 4]); a = r.choice([2, -1]); c = r.choice([1, 2])
    f = c * x**n; slope = n * c * a**(n - 1); y0 = c * a**n
    line = slope * (x - a) + y0
    q = rf"What is an equation of the line tangent to the graph of $y = {L(f)}$ at $x = {a}$?"
    key = si(slope, y0 - slope * a)
    return I("easy", "2.5", q, (key, rf"$y' = {L(diff(f, x))}$, so the slope at $x = {a}$ is ${slope}$, and the point is $({a}, {y0})$. Then ${L(Symbol("y") - y0)} = {slope}\left({L(x - a)}\right)$, so ${key}$."),
        [(si(slope, 0), r"This line has the right slope but passes through the origin. The tangent line must pass through the point of tangency."),
         (si(y0, slope - y0 * a), r"This swaps the slope and the $y$-coordinate of the point."),
         (si(slope, slope * a + y0), rf"This uses $x + {L(a) if a > 0 else '(' + L(a) + ')'}$ in place of $x - {L(a) if a > 0 else '(' + L(a) + ')'}$ in point-slope form, a sign error on the $x$-coordinate.")])


def t25_simple(r):
    kind = r.choice(["neg", "root"])
    if kind == "neg":
        c = r.choice([2, 4, 6]); n = r.choice([2, 3])
        q = rf"If $y = \dfrac{{{c}}}{{x^{{{n}}}}}$, then $\dfrac{{dy}}{{dx}} =$"
        key = coef_x(-c * n, -n - 1)
        return I("easy", "2.5", q, (key, rf"Write $y = {c}x^{{-{n}}}$. By the power rule, $\dfrac{{dy}}{{dx}} = {c}(-{n})x^{{-{n} - 1}} = {key}$."),
            [(coef_x(-c * n, -n + 1), rf"This lowers the exponent $-{n}$ to $-{n - 1}$, toward $0$. Subtracting $1$ gives $-{n + 1}$."),
             (coef_x(Rational(-c, n), -n - 1), rf"This divides the coefficient ${c}$ by the exponent instead of multiplying by it."),
             (coef_x(Rational(c, 1 - n), 1 - n), r"This is an antiderivative: it raises the exponent by $1$ and divides by the new exponent.")])
    c = r.choice([4, 6, 8]); e = r.choice([Rational(3, 2), Rational(2, 3), Rational(1, 4)])
    rad = {Rational(3, 2): r"\sqrt{x^{3}}", Rational(2, 3): r"\sqrt[3]{x^{2}}", Rational(1, 4): r"\sqrt[4]{x}"}[e]
    q = rf"If $y = {c}{rad}$, then $\dfrac{{dy}}{{dx}} =$"
    key = coef_x(c * e, e - 1)
    return I("easy", "2.5", q, (key, rf"Write $y = {c}x^{{{frac_exp(e)}}}$. By the power rule, $\dfrac{{dy}}{{dx}} = {c} \cdot {L(e)}x^{{{frac_exp(e)} - 1}} = {key}$."),
        [(coef_x(c, e - 1), rf"This lowers the exponent but does not multiply by the exponent ${L(e)}$."),
         (coef_x(c / e, e - 1), rf"This divides the coefficient ${c}$ by the exponent ${L(e)}$ instead of multiplying."),
         (coef_x(c / (e + 1), e + 1), r"This is an antiderivative: it raises the exponent by $1$ and divides by the new exponent.")])


# ---------------------------------------------------------------- 2.6
def t26_poly(r):
    a = r.choice([-1, 1, 2]); c3 = r.choice([1, 2]); c2 = r.choice([-3, 4]); c1 = r.choice([5, -2]); c0 = r.choice([7, -1])
    f = c3 * x**3 + c2 * x**2 + c1 * x + c0
    val = diff(f, x).subs(x, a)
    q = rf"If $f(x) = {L(f)}$, what is $f'({a})$?"
    return prefer_short(r, I("easy", "2.6", q, (num(val), rf"$f'(x) = {L(diff(f, x))}$, so $f'({a}) = {L(val)}$."),
        [(num(f.subs(x, a)), rf"${L(f.subs(x, a))}$ is $f({a})$, the value of the function, not its derivative."),
         (num((diff(f, x) + c0).subs(x, a)), rf"This keeps the constant term ${c0}$. The derivative of a constant is $0$."),
         (num((3 * c3 * x**2 + c2 * x + c1).subs(x, a)), rf"This differentiates ${L(c2 * x**2)}$ as ${L(c2 * x)}$, leaving out the factor $2$ from the power rule.")]))

def t26_slope(r):
    c = r.choice([2, 3]); b = r.choice([-4, 1, 5]); m0 = r.choice([7, 11, -3])
    xs = Rational(m0 - b, 2 * c)
    f = c * x**2 + b * x
    q = rf"At what value of $x$ does the line tangent to the graph of $y = {L(f)}$ have slope ${m0}$?"
    return prefer_short(r, I("easy", "2.6", q, (num(xs), rf"$y' = {L(diff(f, x))}$. Setting ${L(diff(f, x))} = {m0}$ gives $x = {L(xs)}$."),
        [(num(Rational(m0 - b, c)), rf"This uses ${c}x {pm(b)}$ as the derivative. The derivative of ${c}x^{{2}}$ is ${2 * c}x$, not ${c}x$."),
         (num(Rational(m0, 2 * c)), rf"This solves ${2 * c}x = {m0}$, leaving out the term ${b}$ of $y'$."),
         (num(Rational(m0 + b, 2 * c)), rf"This adds ${b}$ to both sides instead of subtracting it when solving ${L(diff(f, x))} = {m0}$." if b > 0 else rf"This subtracts ${-b}$ from both sides instead of adding it when solving ${L(diff(f, x))} = {m0}$.")]))

def t26_combo(r):
    k = r.choice([2, 3, -4]); a = r.choice([1, 2])
    fa, ga, fpa, gpa = r.choice([3, -1]), r.choice([5, 2]), r.choice([4, -2]), r.choice([1, 6])
    val = k * fpa - gpa + 2 * a
    q = rf"The differentiable functions $f$ and $g$ satisfy $f({a}) = {fa}$, $g({a}) = {ga}$, $f'({a}) = {fpa}$, and $g'({a}) = {gpa}$. If $h(x) = {k}f(x) - g(x) + x^{{2}}$, what is $h'({a})$?"
    return prefer_short(r, I("easy", "2.6", q, (num(val), rf"$h'(x) = {k}f'(x) - g'(x) + 2x$, so $h'({a}) = {k}({fpa}) - {gpa} + {2 * a} = {val}$."),
        [(num(k * fa - ga + a**2), rf"This is $h({a})$: it uses the values of $f$, $g$, and $x^{{2}}$ instead of their derivatives."),
         (num(k * fpa - gpa + a**2), rf"This uses $x^{{2}} = {a * a}$ for the last term. The derivative of $x^{{2}}$ is $2x$, which is ${2 * a}$."),
         (num(fpa - gpa + 2 * a), rf"This drops the constant multiple ${k}$. The derivative of ${k}f(x)$ is ${k}f'(x)$.")]))

def t26_horizontal(r):
    p, q0 = r.choice([(1, 2), (-1, 3), (2, 4), (-2, 1)])
    f = x**3 - Rational(3 * (p + q0), 2) * x**2 + 3 * p * q0 * x
    q = rf"At which values of $x$ does the graph of $f(x) = {L(f)}$ have a horizontal tangent line?"
    lo, hi = min(p, q0), max(p, q0)
    return I("moderate", "2.6", q, (text_choice(rf"$x = {lo}$ and $x = {hi}$"), rf"$f'(x) = {L(expand(diff(f, x)))} = {L(factor(diff(f, x)))}$, which is $0$ at $x = {lo}$ and $x = {hi}$."),
        [(text_choice(rf"$x = 0$ only"), rf"$f(0) = 0$, so the graph passes through the origin, but $f'(0) = {3 * p * q0} \ne 0$. A horizontal tangent needs $f'(x) = 0$."),
         (text_choice(rf"$x = {-hi}$ and $x = {-lo}$"), r"These are the opposites of the zeros of $f'$. A factor $x - c$ is $0$ at $x = c$, not at $x = -c$."),
         (text_choice(rf"$x = {L(Rational(p + q0, 2))}$ only"), rf"This solves ${L(6 * x - 3 * (p + q0))} = 0$, which differentiates $f'$ again instead of setting $f'(x) = 0$.")])


_t26_i = [0]


def t26_rewrite(r):
    _t26_i[0] += 1
    k, a = [(6, 2), (-8, 1), (4, 1), (6, 1)][_t26_i[0] % 4]
    f = (x**3 + k) / x**2
    val = simplify(diff(f, x).subs(x, a))
    w1 = Rational(3 * a, 2)
    w2 = 1 + Rational(2 * k, a**3)
    w3 = f.subs(x, a)
    if len({val, w1, w2, w3}) < 4: raise Skip("same")
    q = rf"If $f(x) = \dfrac{{{L(x**3 + k)}}}{{x^{{2}}}}$, what is $f'({a})$?"
    return I("difficult", "2.6", q, (num(val), rf"Divide first: $f(x) = x {pm(k)}x^{{-2}}$. Then $f'(x) = 1 {pm(-2 * k)}x^{{-3}}$, so $f'({a}) = 1 {pm(-2 * k)}\left(\dfrac{{1}}{{{a**3}}}\right) = {L(val)}$." if a != 1 else rf"Divide first: $f(x) = x {pm(k)}x^{{-2}}$. Then $f'(x) = 1 {pm(-2 * k)}x^{{-3}}$, so $f'(1) = 1 {pm(-2 * k)} = {L(val)}$."),
        [(num(w1), rf"This divides the derivative of the numerator, $3x^{{2}}$, by the derivative of the denominator, $2x$. Divide the terms by $x^{{2}}$ first, then differentiate."),
         (num(w2), rf"This drops the negative sign from the power rule: the derivative of ${k}x^{{-2}}$ is ${-2 * k}x^{{-3}}$."),
         (num(w3), rf"${L(w3)}$ is $f({a})$, the value of the function, not its derivative.")])


def t26_ratio(r):
    b, rr = r.choice([(4, 2), (9, 2), (4, 3), (1, 2)])
    key = rr * rr * b
    w = [rr * b, Rational(b, rr * rr), rr * int(b**0.5)]
    if len({key, *w}) < 4: raise Skip("same")
    word = {2: "one half", 3: "one third"}[rr]
    q = rf"Let $f(x) = \sqrt{{x}}$. For what value of $c$ is the instantaneous rate of change of $f$ at $x = c$ equal to {word} of the instantaneous rate of change of $f$ at $x = {b}$?"
    return I("difficult", "2.6", q, (num(key), rf"$f'(x) = \dfrac{{1}}{{2\sqrt{{x}}}}$, so $f'({b}) = \dfrac{{1}}{{{2 * int(b**0.5)}}}$. Setting $\dfrac{{1}}{{2\sqrt{{c}}}} = \dfrac{{1}}{{{rr}}} \cdot \dfrac{{1}}{{{2 * int(b**0.5)}}}$ gives $\sqrt{{c}} = {rr * int(b**0.5)}$, so $c = {key}$."),
        [(num(w[0]), rf"This takes $c = {rr} \cdot {b}$, as if the rate were proportional to $\dfrac{{1}}{{x}}$. The rate is proportional to $\dfrac{{1}}{{\sqrt{{x}}}}$, so $c$ must be ${rr}^{{2}} \cdot {b}$."),
         (num(w[1]), rf"This solves $f'(c) = {rr}f'({b})$, making the rate at $c$ ${rr}$ times as large instead of {word} as large."),
         (num(w[2]), rf"${rr * int(b**0.5)}$ is $\sqrt{{c}}$. Square it to find $c$.")])


# ---------------------------------------------------------------- 2.7
def t27_trig(r):
    a = r.choice([(r"\frac{\pi}{3}", pi / 3), (r"\frac{\pi}{6}", pi / 6), (r"\frac{\pi}{4}", pi / 4)])
    p, q0 = r.choice([(2, 3), (4, -1), (-3, 2)])
    f = p * sin(x) + q0 * cos(x)
    val = simplify(diff(f, x).subs(x, a[1]))
    w1 = simplify((p * cos(x) + q0 * sin(x)).subs(x, a[1]))
    w2 = simplify((-p * cos(x) - q0 * sin(x)).subs(x, a[1]))
    w3 = simplify(f.subs(x, a[1]))
    if len({val, w1, w2, w3}) < 4: raise Skip("same")
    q = rf"If $f(x) = {L(f)}$, what is $f'\left({a[0]}\right)$?"
    return I("moderate", "2.7", q, (L(val), rf"$f'(x) = {L(diff(f, x))}$. At $x = {D(a[0])}$ this is ${L(val)}$."),
        [(L(w1), r"This uses $\sin x$ as the derivative of $\cos x$. The derivative of $\cos x$ is $-\sin x$."),
         (L(w2), r"This uses $-\cos x$ as the derivative of $\sin x$. The derivative of $\sin x$ is $\cos x$."),
         (L(w3), rf"This is $f\left({D(a[0])}\right)$, the value of the function, not its derivative.")])


def t27_exp_ln(r):
    a = r.choice([1, 2]); p = r.choice([2, 3]); q0 = r.choice([4, 5])
    f = p * exp(x) + q0 * log(x)
    val = diff(f, x).subs(x, a)
    q = rf"If $f(x) = {p}e^{{x}} + {q0}\ln x$, what is $f'({a})$?"
    return I("easy", "2.7", q, (L(val), rf"$f'(x) = {p}e^{{x}} + \dfrac{{{q0}}}{{x}}$, so $f'({a}) = {L(val)}$."),
        [(L(p * a * exp(a - 1) + Rational(q0, a)), r"This applies the power rule to $e^{x}$, giving $xe^{x - 1}$. The derivative of $e^{x}$ is $e^{x}$."),
         (L(p * exp(a) + q0 * log(a)), rf"This is $f({a})$, the value of the function, not its derivative."),
         (L(p * exp(a) + q0 * a), r"This uses $x$ as the derivative of $\ln x$. The derivative of $\ln x$ is $\dfrac{1}{x}$.")])


def t27_tan_ln(r):
    a = r.choice([2, 3])
    q = rf"What is the slope of the line tangent to the graph of $y = \ln x$ at the point $({a}, \ln {a})$?"
    return I("easy", "2.7", q, (num(Rational(1, a)), rf"$y' = \dfrac{{1}}{{x}}$, which is $\dfrac{{1}}{{{a}}}$ at $x = {a}$."),
        [(num(a), r"This uses $x$ as the derivative of $\ln x$. The derivative is $\dfrac{1}{x}$."),
         (L(log(a)), rf"$\ln {a}$ is the $y$-coordinate of the point, not the slope."),
         ("0", r"The slope of $\ln x$ is $\dfrac{1}{x}$, which is never $0$.")])


def t27_limit(r):
    kind = r.choice(["sin", "cos"])
    if kind == "sin":
        expr = r"\frac{\sin(\pi + h)}{h}"
        key = ("-1", r"Since $\sin\pi = 0$, this is $\displaystyle \lim_{h \to 0} \frac{\sin(\pi + h) - \sin\pi}{h}$, the derivative of $\sin x$ at $x = \pi$, which is $\cos\pi = -1$.")
        wr = [("1", r"This uses $-\cos x$ as the derivative of $\sin x$, or $\cos\pi = 1$. The value is $\cos\pi = -1$."),
              ("0", r"$0$ is $\sin\pi$, the value of the function, not its derivative."),
              (text_choice("The limit does not exist."), r"Substituting gives $\dfrac{0}{0}$, which is indeterminate. The limit is the derivative of $\sin x$ at $x = \pi$.")]
    else:
        expr = r"\frac{\cos\left(\frac{3\pi}{2} + h\right)}{h}"
        key = ("1", r"Since $\cos\dfrac{3\pi}{2} = 0$, this is the derivative of $\cos x$ at $x = \dfrac{3\pi}{2}$, which is $-\sin\dfrac{3\pi}{2} = -(-1) = 1$.")
        wr = [("-1", r"This uses $\sin x$ as the derivative of $\cos x$. The derivative is $-\sin x$, and $-\sin\dfrac{3\pi}{2} = 1$."),
              ("0", r"$0$ is $\cos\dfrac{3\pi}{2}$, the value of the function, not its derivative."),
              (text_choice("The limit does not exist."), r"Substituting gives $\dfrac{0}{0}$, which is indeterminate. The limit is the derivative of $\cos x$ at $x = \dfrac{3\pi}{2}$.")]
    q = rf"What is $\displaystyle \lim_{{h \to 0}} {expr}$?"
    return I("moderate", "2.7", q, key, wr)


# ---------------------------------------------------------------- 2.8 / 2.9
def fg_table(r):
    a = r.choice([1, 2, 3])
    v = dict(f=r.choice([2, 3, -1, 4]), g=r.choice([5, -2, 1, 3]), fp=r.choice([4, -3, 2, 6]), gp=r.choice([-1, 2, 7, 3]))
    return a, v, rf"$f({a}) = {v['f']}$, $f'({a}) = {v['fp']}$, $g({a}) = {v['g']}$, and $g'({a}) = {v['gp']}$"


def t28_table(r):
    a, v, txt = fg_table(r)
    val = v["fp"] * v["g"] + v["f"] * v["gp"]
    q = rf"The differentiable functions $f$ and $g$ satisfy {txt}. If $h(x) = f(x)g(x)$, what is $h'({a})$?"
    return prefer_short(r, I("easy", "2.8", q, (num(val), rf"By the product rule, $h'({a}) = f'({a})g({a}) + f({a})g'({a}) = ({v['fp']})({v['g']}) + ({v['f']})({v['gp']}) = {val}$."),
        [(num(v["fp"] * v["gp"]), rf"This is $f'({a})g'({a})$, the product of the derivatives. The product rule is $f'g + fg'$."),
         (num(v["fp"] * v["g"] - v["f"] * v["gp"]), r"This subtracts the two terms, as in the numerator of the quotient rule. The product rule adds them."),
         (num(v["f"] * v["g"]), rf"This is $h({a}) = f({a})g({a})$, the value of $h$, not $h'$.")]))

def t28_formula(r):
    p = r.choice([2, 3]); a = r.choice([1, -1])
    f = x**p * exp(x)
    val = simplify(diff(f, x).subs(x, a))
    first = 'x' if p == 2 else 'x^{' + str(p - 1) + '}'
    q = rf"If $f(x) = x^{{{p}}}e^{{x}}$, what is $f'({a})$?"
    ws = [simplify((p * x**(p - 1) * exp(x)).subs(x, a)), simplify(f.subs(x, a)), simplify((x**p * exp(x) - p * x**(p - 1) * exp(x)).subs(x, a))]
    if len({val, *ws}) < 4: raise Skip("same")
    return I("moderate", "2.8", q, (L(val), rf"$f'(x) = {p}{first}e^{{x}} + x^{{{p}}}e^{{x}}$, so $f'({a}) = {L(val)}$."),
        [(L(ws[0]), rf"This is ${p}{first}e^{{x}}$, the product of the derivatives of $x^{{{p}}}$ and $e^{{x}}$. The product rule also has the term $x^{{{p}}}e^{{x}}$."),
         (L(ws[1]), rf"This is $f({a})$, the value of the function, not its derivative."),
         (L(ws[2]), r"This subtracts the two terms. The product rule adds them.")])


def t28_tanline(r):
    a = r.choice([1, 2, 3]); m0 = r.choice([2, 4, -3]); b = r.choice([-5, 1, 3])
    fa = m0 * a + b
    key = 2 * a * fa + a * a * m0
    w = [2 * a * m0, a * a * m0 + 2 * a * b, 2 * a * m0 + a * a * fa]
    if len({key, *w}) < 4: raise Skip("same")
    q = rf"The line $y = {L(m0 * x + b)}$ is tangent to the graph of the differentiable function $f$ at $x = {a}$. If $h(x) = x^{{2}}f(x)$, what is $h'({a})$?"
    return I("difficult", "2.8", q, (num(key), rf"The tangent line gives $f({a}) = {m0}({a}) {pm(b)} = {fa}$ and $f'({a}) = {m0}$. By the product rule, $h'({a}) = 2({a})f({a}) + ({a})^{{2}}f'({a}) = {2 * a * fa} {pm(a * a * m0)} = {key}$."),
        [(num(w[0]), rf"This is $2x \cdot f'(x)$ at $x = {a}$, the product of the derivatives."),
         (num(w[1]), rf"This uses the $y$-intercept ${b}$ of the tangent line in place of $f({a}) = {fa}$."),
         (num(w[2]), rf"This swaps the value and the slope, using $f({a}) = {m0}$ and $f'({a}) = {fa}$. The slope of the tangent line is $f'({a})$.")])


def t28_horizontal(r):
    r1, r2, poly = r.choice([(-4, 0, x**2 + 2 * x - 2), (-2, 2, x**2 - 2 * x - 2), (-4, 2, x**2 - 8)])
    f = poly * exp(x)
    fp = expand(simplify(diff(f, x) / exp(x)))
    pd = diff(poly, x)
    z = solve(pd, x)[0]
    zf = sorted(solve(poly, x), key=lambda s: float(s))
    zs = sorted(solve(pd - poly, x), key=lambda s: float(s))
    q = rf"At which values of $x$ does the graph of $f(x) = ({L(poly)})e^{{x}}$ have a horizontal tangent line?"
    return I("difficult", "2.8", q, (text_choice(rf"$x = {r1}$ and $x = {r2}$"), rf"By the product rule, $f'(x) = ({L(pd)})e^{{x}} + ({L(poly)})e^{{x}} = e^{{x}}({L(fp)})$. Since $e^{{x}} > 0$, $f'(x) = 0$ when ${L(fp)} = 0$, at $x = {r1}$ and $x = {r2}$."),
        [(text_choice(rf"$x = {L(z)}$ only"), rf"This sets $({L(pd)})e^{{x}} = 0$, the product of the derivatives. The product rule adds the term $({L(poly)})e^{{x}}$."),
         (text_choice(rf"$x = {L(zf[0])}$ and $x = {L(zf[1])}$"), r"These are the zeros of $f$, where the graph crosses the $x$-axis, not where its slope is $0$."),
         (text_choice(rf"$x = {L(zs[0])}$ and $x = {L(zs[1])}$"), rf"These solve $({L(pd)})e^{{x}} - ({L(poly)})e^{{x}} = 0$, which subtracts the two terms. The product rule adds them.")])


def t29_table(r):
    a, v, txt = fg_table(r)
    if v["g"] == 0 or v["gp"] == 0: raise Skip("zero")
    val = Rational(v["fp"] * v["g"] - v["f"] * v["gp"], v["g"]**2)
    q = rf"The differentiable functions $f$ and $g$ satisfy {txt}. If $h(x) = \dfrac{{f(x)}}{{g(x)}}$, what is $h'({a})$?"
    return prefer_short(r, I("moderate", "2.9", q, (num(val), rf"$h'({a}) = \dfrac{{f'({a})g({a}) - f({a})g'({a})}}{{(g({a}))^{{2}}}} = \dfrac{{({v['fp']})({v['g']}) - ({v['f']})({v['gp']})}}{{{v['g']**2}}} = {L(val)}$."),
        [(num(Rational(v["f"] * v["gp"] - v["fp"] * v["g"], v["g"]**2)), r"This reverses the numerator: it uses $fg' - f'g$ instead of $f'g - fg'$."),
         (num(Rational(v["fp"], v["gp"])), rf"This is $\dfrac{{f'({a})}}{{g'({a})}}$, the quotient of the derivatives."),
         (num(Rational(v["fp"] * v["g"] - v["f"] * v["gp"], v["g"])), rf"This divides by $g({a})$ instead of $(g({a}))^{{2}}$.")]))

def t29_formula(r):
    p = r.choice([1, 2, 3]); q0 = r.choice([1, 4]); a = r.choice([1, 2])
    f = (x + p) / (x**2 + q0)
    val = diff(f, x).subs(x, a)
    q = rf"If $f(x) = \dfrac{{{L(x + p)}}}{{{L(x**2 + q0)}}}$, what is $f'({a})$?"
    w1 = (((2 * x) * (x + p) - (x**2 + q0)) / (x**2 + q0)**2).subs(x, a)
    w2 = (1 / (2 * x)).subs(x, a)
    w3 = (((x**2 + q0) - (x + p) * 2 * x) / (x**2 + q0)).subs(x, a)
    if len({val, w1, w2, w3}) < 4: raise Skip("same")
    return I("moderate", "2.9", q, (num(val), rf"$f'(x) = \dfrac{{(1)({L(x**2 + q0)}) - ({L(x + p)})(2x)}}{{({L(x**2 + q0)})^{{2}}}}$. At $x = {a}$ this is ${L(val)}$."),
        [(num(w1), r"This reverses the numerator of the quotient rule, which negates the answer."),
         (num(w2), r"This divides the derivative of the numerator, $1$, by the derivative of the denominator, $2x$. That is not the quotient rule."),
         (num(w3), rf"This divides by ${L(x**2 + q0)}$ instead of its square.")])


def t29_limit(r):
    a, c = r.choice([(2, 1), (1, 3), (3, 1)])
    f = x / (x**2 + c)
    fa = f.subs(x, a)
    val = diff(f, x).subs(x, a)
    num_ = (c - a * a)
    q = rf"What is $\displaystyle \lim_{{h \to 0}} \frac{{\dfrac{{{a} + h}}{{({a} + h)^{{2}} + {c}}} - {L(fa)}}}{{h}}$?"
    return I("difficult", "2.9", q, (num(val), rf"Since $f({a}) = {L(fa)}$ for $f(x) = \dfrac{{x}}{{x^{{2}} + {c}}}$, the limit is $f'({a})$. By the quotient rule, $f'(x) = \dfrac{{(x^{{2}} + {c}) - x(2x)}}{{(x^{{2}} + {c})^{{2}}}} = \dfrac{{{c} - x^{{2}}}}{{(x^{{2}} + {c})^{{2}}}}$, so $f'({a}) = {L(val)}$."),
        [(num(-val), r"This reverses the numerator of the quotient rule, which negates the answer."),
         (num(Rational(num_, a * a + c)), rf"This divides by $x^{{2}} + {c}$ instead of its square."),
         (text_choice("The limit does not exist."), r"Substituting $h = 0$ gives $\dfrac{0}{0}$, which is indeterminate. The limit is a derivative.")])


def t29_normal(r):
    k, a = r.choice([(1, 1), (2, 0), (3, 1), (1, 2)])
    fp = Rational(k, (a + k)**2)
    q = rf"What is the slope of the line perpendicular to the graph of $y = \dfrac{{x}}{{x + {k}}}$ at $x = {a}$ (the normal line)?"
    return I("difficult", "2.9", q, (num(-1 / fp), rf"$\dfrac{{dy}}{{dx}} = \dfrac{{(x + {k}) - x}}{{(x + {k})^{{2}}}} = \dfrac{{{k}}}{{(x + {k})^{{2}}}}$, which is ${L(fp)}$ at $x = {a}$. The normal slope is the negative reciprocal, ${L(-1 / fp)}$."),
        [(num(fp), rf"${L(fp)}$ is the slope of the tangent line, not the normal line."),
         (num(1 / fp), r"This takes the reciprocal of the tangent slope but not its negative."),
         (num(-fp), r"This takes the negative of the tangent slope but not its reciprocal.")])


# ---------------------------------------------------------------- 2.10
_t210_i = [0]


def t210(r):
    _t210_i[0] += 1
    choice = [("tan", sec(x)**2, r"\sec^{2} x", -sec(x)**2), ("sec", sec(x) * tan(x), r"\sec x \tan x", -sec(x) * tan(x)),
                       ("csc", -csc(x) * cot(x), r"-\csc x \cot x", csc(x) * cot(x)), ("cot", -csc(x)**2, r"-\csc^{2} x", csc(x)**2)][_t210_i[0] % 4]
    nm, d, dtex, wrongsign = choice
    a = r.choice([(r"\frac{\pi}{4}", pi / 4), (r"\frac{\pi}{3}", pi / 3), (r"\frac{\pi}{6}", pi / 6)])
    k = r.choice([2, 3])
    val = simplify(k * d.subs(x, a[1]))
    w1 = simplify(k * wrongsign.subs(x, a[1]))
    f = {"tan": tan, "sec": sec, "csc": csc, "cot": cot}[nm]
    w2 = simplify(k * f(x).subs(x, a[1]))
    w3 = simplify(d.subs(x, a[1]))
    if len({val, w1, w2, w3}) < 4: raise Skip("same")
    q = rf"If $f(x) = {k}\{nm} x$, what is $f'\left({a[0]}\right)$?"
    return I("easy", "2.10", q, (L(val), rf"The derivative of $\{nm} x$ is ${dtex}$, so $f'(x) = {k}\left({dtex}\right)$. At $x = {D(a[0])}$ this is ${L(val)}$."),
        [(L(w1), rf"This has the wrong sign. The derivative of $\{nm} x$ is ${dtex}$."),
         (L(w2), rf"This is $f\left({D(a[0])}\right)$, the value of the function, not its derivative."),
         (L(w3), rf"This leaves out the constant multiple ${k}$.")])


def t210_product(r):
    a = r.choice([(r"\frac{\pi}{4}", pi / 4), (r"\frac{\pi}{3}", pi / 3)])
    f = x * tan(x)
    val = simplify(diff(f, x).subs(x, a[1]))
    w1 = simplify((sec(x)**2).subs(x, a[1]))
    w2 = simplify((tan(x) + x * sec(x) * tan(x)).subs(x, a[1]))
    w3 = simplify(f.subs(x, a[1]))
    if len({val, w1, w2, w3}) < 4: raise Skip("same")
    q = rf"If $f(x) = x\tan x$, what is $f'\left({a[0]}\right)$?"
    return I("moderate", "2.10", q, (L(val), rf"By the product rule, $f'(x) = \tan x + x\sec^{{2}} x$. At $x = {D(a[0])}$ this is ${L(val)}$."),
        [(L(w1), r"This is $(1)(\sec^{2} x)$, the product of the derivatives of $x$ and $\tan x$."),
         (L(w2), r"This uses $\sec x\tan x$ as the derivative of $\tan x$. That is the derivative of $\sec x$. The derivative of $\tan x$ is $\sec^{2} x$."),
         (L(w3), rf"This is $f\left({D(a[0])}\right)$, the value of the function, not its derivative.")])


def t210_quot(r):
    a = r.choice([(r"\frac{\pi}{6}", pi / 6), (r"\frac{\pi}{4}", pi / 4)])
    val = simplify((-csc(x) * cot(x)).subs(x, a[1]))
    w = [simplify(-val), simplify(csc(x).subs(x, a[1])), simplify(sin(x).subs(x, a[1]))]
    if len({val, *w}) < 4: raise Skip("same")
    q = rf"If $f(x) = \dfrac{{\sec x}}{{\tan x}}$, what is $f'\left({a[0]}\right)$?"
    return I("difficult", "2.10", q, (L(val), rf"$\dfrac{{\sec x}}{{\tan x}} = \dfrac{{1}}{{\cos x}} \cdot \dfrac{{\cos x}}{{\sin x}} = \csc x$, so $f'(x) = -\csc x\cot x$. At $x = {D(a[0])}$ this is ${L(val)}$."),
        [(L(w[0]), r"This drops the negative sign: the derivative of $\csc x$ is $-\csc x\cot x$."),
         (L(w[1]), rf"This is $f\left({D(a[0])}\right) = \csc{D(a[0])}$, the value of the function, not its derivative."),
         (L(w[2]), r"This divides the derivatives: $\dfrac{\sec x\tan x}{\sec^{2} x} = \sin x$. The quotient rule is not the quotient of the derivatives.")])


TEMPLATES = {"2.1": [t21_context, t21_secant, t21_expr, t21_inverse],
             "2.2": [t22_value, t22_basic, t22_hidden, t22_roman, t22_normal],
             "2.4": [t24_abs, t24_must, t24_converse, t24_jump, t24_corner, t24_shape, t24_match, t24_param2, t24_roman],
             "2.5": [t25_tangent, t25_simple, t25_power],
             "2.6": [t26_poly, t26_slope, t26_combo, t26_horizontal, t26_rewrite, t26_ratio],
             "2.7": [t27_trig, t27_exp_ln, t27_tan_ln, t27_limit],
             "2.8": [t28_table, t28_formula, t28_tanline, t28_horizontal],
             "2.9": [t29_table, t29_formula, t29_limit, t29_normal],
             "2.10": [t210, t210_product, t210_quot]}
GRAPH_TEMPLATES = {"2.3": g23}

_MAX = {t21_context: 1, t21_secant: 1, t21_expr: 1, t21_inverse: 1,
        t22_value: 2, t22_basic: 2, t22_hidden: 2, t22_roman: 1, t22_normal: 2,
        t24_abs: 1, t24_must: 1, t24_converse: 1, t24_jump: 2, t24_corner: 2, t24_shape: 3, t24_match: 3, t24_param2: 2, t24_roman: 3,
        t25_tangent: 1, t25_simple: 2, t25_power: 2,
        t26_poly: 2, t26_slope: 2, t26_combo: 1, t26_horizontal: 2, t26_rewrite: 2, t26_ratio: 2,
        t27_trig: 2, t27_exp_ln: 1, t27_tan_ln: 1, t27_limit: 1,
        t28_table: 1, t28_formula: 1, t28_tanline: 1, t28_horizontal: 1,
        t29_table: 2, t29_formula: 2, t29_limit: 1, t29_normal: 1,
        t210: 3, t210_product: 1, t210_quot: 1}
for _fn, _n in _MAX.items():
    _fn.max = _n


# core.write_deck does not write a difficulty, and core.py is shared by every unit, so the Unit 2 build adds it here:
# after the deck is written, each item's first line gets difficulty: "...". It does nothing if a line already has one.
def _write_with_difficulty(path, header, sets_js, items, unit, prefix):
    _core.write_deck(path, header, sets_js, items, unit, prefix)
    if unit != 2:
        return
    lines = open(path).read().split("\n")
    n = 0
    for i, ln in enumerate(lines):
        if ln.startswith('  { id: "' + prefix + "-"):
            d = items[n].get("difficulty")
            n += 1
            if d and "difficulty:" not in ln:
                lines[i] = ln + f' difficulty: "{d}",'
    open(path, "w").write("\n".join(lines))


_main = _sys.modules.get("__main__")
if _main is not None and getattr(_main, "write_deck", None) is _core.write_deck:
    _main.write_deck = _write_with_difficulty

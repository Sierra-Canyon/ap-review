"""Unit 3, Differentiation: Composite, Implicit, and Inverse Functions. Every key and wrong choice is computed.

Each template sets a difficulty the way Albert labels its own Unit 3 items (easy: one rule, one layer; moderate: a
second rule, a table, a disguised form; difficult: three layers, abstract functions, a normal line, I/II/III). The
`max` on each template fixes how many items it gives, so the spread per topic stays put when the seed changes.
Two 3.1 items use a table of values as their stimulus; this module writes those sets itself (see write_deck below).
"""
import sys
import core
from core import *
from sympy import asin, atan, acos, Function

def distinct(*v):
    if len(set(simplify(a) for a in v)) < len(v):
        raise Skip("same")

def lv(it, d):
    it["difficulty"] = d
    return it

def short_key(it):
    """Keep only draws whose key is the shortest choice. Used by a few numeric templates so that, across the file, the
    complete-looking choice is not always the right one (HANDOFF rule 6). The item itself is unchanged in kind."""
    n = [len(c) for c in it["choices"]]
    if not n[0] < min(n[1:]):
        raise Skip("key not shortest")
    return it

def frac(n, d=1):
    """A signed fraction or integer as LaTeX: -\\frac{3}{4}, \\frac{1}{2}, 5."""
    v = Rational(n, d)
    if v.q == 1:
        return str(v.p)
    s = "-" if v < 0 else ""
    return rf"{s}\frac{{{abs(v.p)}}}{{{v.q}}}"

def line(y0, m, x0):
    """y - y0 = m(x - x0), with the signs tidied."""
    ys = f"y - {y0}" if y0 > 0 else (f"y + {-y0}" if y0 < 0 else "y")
    xs = f"x - {x0}" if x0 > 0 else (f"x + {-x0}" if x0 < 0 else "x")
    ms = frac(m) if not isinstance(m, str) else m
    if ms in ("1", "-1"):
        sign = "" if ms == "1" else "-"
        return f"{ys} = {sign}x" if xs == "x" else (f"{ys} = {xs}" if sign == "" else f"{ys} = -({xs})")
    return f"{ys} = {ms}({xs})" if xs != "x" else f"{ys} = {ms}x"

# ---------------------------------------------------------------- 3.1 chain rule
def t31_power(r):
    a = r.choice([1, 2, 3]); b = r.choice([-1, 1, 3, 4]); n = r.choice([3, 4, 5]); c = r.choice([1, -1, 2])
    inner = a * x**2 + b; f = inner**n
    val = diff(f, x).subs(x, c)
    if abs(val) > 3000: raise Skip("too big")
    w1 = (n * inner**(n - 1)).subs(x, c)
    w2 = (n * inner**(n - 1) * a * x).subs(x, c)
    w3 = (n * (2 * a * x)**(n - 1)).subs(x, c)
    distinct(val, w1, w2, w3)
    q = rf"If $f(x) = \left({L(inner)}\right)^{{{n}}}$, what is $f'({c})$?"
    return lv(item("3.1", q, (num(val), rf"$f'(x) = {n}\left({L(inner)}\right)^{{{n - 1}}} \cdot {2 * a}x$; at $x = {c}$ this is ${L(val)}$."),
        [(num(w1), r"This leaves out the derivative of the inside function."),
         (num(w2), rf"The derivative of ${L(a * x**2)}$ is ${L(2 * a * x)}$, not ${L(a * x)}$."),
         (num(w3), r"This applies the power to the derivative of the inside instead of to the inside function itself.")]), "easy")
t31_power.max = 2

def t31_trig_expr(r):
    k = r.choice([2, 3]); fn = r.choice(["sin", "cos"]); dk = "2x" if k == 2 else f"{k}x^{{{k - 1}}}"
    if fn == "sin":
        right = rf"{dk}\cos\left(x^{{{k}}}\right)"
        wr = [(rf"\cos\left(x^{{{k}}}\right)", rf"This leaves out the derivative of the inside, $x^{{{k}}}$."),
              (rf"{dk}\cos\left({dk}\right)", rf"This evaluates the outer derivative at the inside's derivative, ${dk}$. The outer derivative is evaluated at the inside itself, $x^{{{k}}}$."),
              (rf"-{dk}\cos\left(x^{{{k}}}\right)", r"The derivative of $\sin u$ is $\cos u$, with no negative sign.")]
    else:
        right = rf"-{dk}\sin\left(x^{{{k}}}\right)"
        wr = [(rf"-\sin\left(x^{{{k}}}\right)", rf"This leaves out the derivative of the inside, $x^{{{k}}}$."),
              (rf"{dk}\sin\left(x^{{{k}}}\right)", r"The derivative of $\cos u$ is $-\sin u$; the sign is lost."),
              (rf"-{dk}\sin\left({dk}\right)", rf"This evaluates the outer derivative at the inside's derivative, ${dk}$. The outer derivative is evaluated at the inside itself, $x^{{{k}}}$.")]
    q = rf"What is $\dfrac{{d}}{{dx}}\left[\{fn}\left(x^{{{k}}}\right)\right]$?"
    return lv(item("3.1", q, (right, rf"By the chain rule, the derivative is the outer derivative at $x^{{{k}}}$ times the derivative of $x^{{{k}}}$, which is ${L(k * x**(k - 1))}$."), wr), "easy")
t31_trig_expr.max = 2

def t31_exp(r):
    # e to a cubic (Albert's items use e to a quadratic)
    a = r.choice([1, 2]); b = r.choice([-1, 1, 2]); c = r.choice([0, 1])
    inner = a * x**3 + b * x
    f = exp(inner); val = diff(f, x).subs(x, c)
    w1 = f.subs(x, c); w2 = (inner * exp(inner - 1)).subs(x, c); w3 = (exp(diff(inner, x))).subs(x, c)
    distinct(val, w1, w2, w3)
    q = rf"If $f(x) = e^{{{L(inner)}}}$, what is $f'({c})$?"
    return lv(item("3.1", q, (L(val), rf"$f'(x) = e^{{{L(inner)}}} \cdot \left({L(diff(inner, x))}\right)$; at $x = {c}$ this is ${L(val)}$."),
        [(L(w1), rf"This is $f({c})$: it leaves out the derivative of the exponent."),
         (L(w2), r"This treats $e^{u}$ like a power and writes $ue^{u - 1}$. The derivative of $e^{u}$ is $e^{u}u'$."),
         (L(w3), r"This puts the derivative of the exponent in the exponent instead of multiplying by it.")]), "easy")
t31_exp.max = 2

def t31_ln(r):
    # ln of a cubic, at a point (Albert's items use ln of a quadratic, in general form)
    k = r.choice([1, 3, 7]); c = r.choice([1, 2])
    f = log(x**3 + k); val = diff(f, x).subs(x, c)
    u = c**3 + k; up = 3 * c**2
    w1 = Rational(1, u); w2 = Rational(1, up); w3 = up * log(u)
    distinct(val, w1, w2, w3)
    shown = rf"\dfrac{{{up}}}{{{u}}}" + ("" if Rational(up, u).q == u else rf" = {L(val)}")
    q = rf"If $f(x) = \ln\left(x^{{3}} + {k}\right)$, what is $f'({c})$?"
    return lv(item("3.1", q, (num(val), rf"$f'(x) = \dfrac{{3x^{{2}}}}{{x^{{3}} + {k}}}$; at $x = {c}$ this is ${shown}$."),
        [(num(w1), r"This is $\dfrac{1}{u}$ without the factor $u' = 3x^{2}$."),
         (num(w2), r"This divides by the derivative of the inside instead of by the inside."),
         (L(w3), r"The derivative of $\ln u$ is $\dfrac{u'}{u}$, not $u'\ln u$.")]), "easy")
t31_ln.max = 1

def t31_sqrt(r):
    a = r.choice([2, 3, 4]); b = r.choice([1, 4, 9]); c = r.choice([0, 1, 2])
    inner = a * x + b
    if not sqrt(inner.subs(x, c)).is_rational: raise Skip("irrational")
    f = sqrt(inner); val = diff(f, x).subs(x, c)
    w1 = 1 / (2 * sqrt(inner.subs(x, c))); w2 = a * sqrt(inner.subs(x, c)) / 2; w3 = Rational(a, 1) / sqrt(inner.subs(x, c))
    distinct(val, w1, w2, w3)
    q = rf"If $f(x) = \sqrt{{{L(inner)}}}$, what is $f'({c})$?"
    return lv(item("3.1", q, (num(val), rf"$f'(x) = \dfrac{{{a}}}{{2\sqrt{{{L(inner)}}}}}$; at $x = {c}$ this is ${L(val)}$."),
        [(num(w1), rf"This leaves out the derivative of the inside, ${a}$."),
         (num(w2), r"This keeps the square root in the numerator, as $\dfrac{u'\sqrt{u}}{2}$. The power rule lowers the exponent $\dfrac{1}{2}$ to $-\dfrac{1}{2}$, so the square root moves to the denominator."),
         (num(w3), r"The derivative of $\sqrt{u}$ has a $2$ in the denominator: it is $\dfrac{u'}{2\sqrt{u}}$.")]), "easy")
t31_sqrt.max = 2

def t31_cube_table(r):
    a = r.choice([1, 2, 3, 4]); fa = r.choice([2, -1, 3]); fpa = r.choice([4, -2, 5]); n = r.choice([2, 3])
    val = n * fa**(n - 1) * fpa
    w1 = n * fpa**(n - 1); w2 = n * fa**(n - 1); w3 = fa**n * fpa
    distinct(val, w1, w2, w3)
    q = rf"For a differentiable function $f$, $f({a}) = {fa}$ and $f'({a}) = {fpa}$. If $h(x) = \left(f(x)\right)^{{{n}}}$, what is $h'({a})$?"
    return lv(item("3.1", q, (num(val), rf"$h'(x) = {n}\left(f(x)\right)^{{{n - 1}}} f'(x)$, so $h'({a}) = {n}({fa})^{{{n - 1}}}({fpa}) = {val}$."),
        [(num(w1), r"This raises the derivative to a power instead of the function."),
         (num(w2), rf"This leaves out the factor $f'({a}) = {fpa}$."),
         (num(w3), rf"The power should drop by one, to ${n - 1}$.")]), "easy")
t31_cube_table.max = 1

def t31_tan(r):
    k = r.choice([2, 3, 4])
    q = rf"What is $\dfrac{{d}}{{dx}}\left[\tan({k}x)\right]$?"
    return lv(item("3.1", q, (rf"{k}\sec^{{2}}({k}x)", rf"The derivative of $\tan u$ is $\sec^{{2}}u \cdot u'$, and $u' = {k}$."),
        [(rf"\sec^{{2}}({k}x)", rf"This leaves out the derivative of the inside, ${k}$."),
         (rf"{k}\sec({k}x)\tan({k}x)", r"That is the derivative of $\sec u$, not $\tan u$."),
         (rf"\sec^{{2}}({k})", rf"This replaces the inside, ${k}x$, with its derivative, ${k}$.")]), "easy")
t31_tan.max = 1

def t31_trigsq(r):
    # the cube of a trig function of a linear term (two chain layers inside the power)
    k = r.choice([2, 3, 4]); fn = r.choice(["sin", "cos"])
    s_, c_ = rf"\sin({k}x)", rf"\cos({k}x)"
    F = sin(k * x)**3 if fn == "sin" else cos(k * x)**3
    if fn == "sin":
        right = rf"{3 * k}\sin^{{2}}({k}x)\cos({k}x)"
        assert simplify(diff(F, x) - 3 * k * sin(k * x)**2 * cos(k * x)) == 0
        wr = [(rf"3\sin^{{2}}({k}x)\cos({k}x)", rf"This leaves out the factor ${k}$, the derivative of the innermost function ${k}x$."),
              (rf"{3 * k}\sin^{{2}}({k}x)", rf"This differentiates the cube and multiplies by ${k}$, but leaves out the derivative of the sine, $\cos({k}x)$."),
              (rf"{3 * k}\cos^{{2}}({k}x)", rf"This differentiates the sine and keeps the power: $\cos^{{2}}({k}x)$ is not the derivative of $\sin^{{3}}({k}x)$. The power rule gives $3\sin^{{2}}({k}x)$, which is then multiplied by $\cos({k}x)$ and ${k}$.")]
    else:
        right = rf"-{3 * k}\cos^{{2}}({k}x)\sin({k}x)"
        assert simplify(diff(F, x) + 3 * k * cos(k * x)**2 * sin(k * x)) == 0
        wr = [(rf"-3\cos^{{2}}({k}x)\sin({k}x)", rf"This leaves out the factor ${k}$, the derivative of the innermost function ${k}x$."),
              (rf"{3 * k}\cos^{{2}}({k}x)\sin({k}x)", r"The derivative of $\cos u$ is $-\sin u$; the sign is lost."),
              (rf"-{3 * k}\sin^{{2}}({k}x)", rf"This differentiates the cosine and keeps the power: $\sin^{{2}}({k}x)$ is not the derivative of $\cos^{{3}}({k}x)$. The power rule gives $3\cos^{{2}}({k}x)$, which is then multiplied by $-\sin({k}x)$ and ${k}$.")]
    q = rf"What is $\dfrac{{d}}{{dx}}\left[\{fn}^{{3}}({k}x)\right]$?"
    return lv(item("3.1", q, (right, rf"Write $\{fn}^{{3}}({k}x) = \left(\{fn}({k}x)\right)^{{3}}$. The chain rule is used twice: $3\{fn}^{{2}}({k}x)$, times the derivative of $\{fn}({k}x)$, times ${k}$, the derivative of ${k}x$."), wr), "moderate")
t31_trigsq.max = 2

def t31_table(r):
    """A table of f, f', g, g' at x = 1 to 4; the inside value lands on a different column from the x asked about."""
    xs = [1, 2, 3, 4]
    form = ["fg", "fsq"][getattr(t31_table, "n", 0) % 2]
    for _ in range(200):
        f = {v: r.choice([1, 2, 3, 4, -2, 5]) for v in xs}; fp = {v: r.choice([-3, -1, 2, 4, 5, 6]) for v in xs}
        g = {v: r.choice(xs) for v in xs}; gp = {v: r.choice([-2, 1, 3, 7]) for v in xs}
        a = r.choice([1, 2]) if form == "fsq" else r.choice(xs)
        if form == "fg" and g[a] != a and gp[a] != 1 and g[a] != gp[a] and gp[a] in xs + [-2, 7]:
            break
        if form == "fsq" and a**2 in xs and a != a**2:
            break
    else:
        raise Skip("no table")
    if form == "fg":
        ga = g[a]; val = fp[ga] * gp[a]
        w1 = fp[a] * gp[a]; w2 = fp[ga]; w3 = f[ga] * gp[a]
        q = rf"Let $h(x) = f(g(x))$. What is $h'({a})$?"
        key_why = rf"$h'({a}) = f'(g({a}))\,g'({a}) = f'({ga})\,({gp[a]}) = ({fp[ga]})({gp[a]}) = {val}$."
        whys = [rf"This uses $f'({a})$; the outer derivative is evaluated at $g({a}) = {ga}$.",
                rf"This is $f'(g({a}))$ without the factor $g'({a}) = {gp[a]}$.",
                rf"This uses $f(g({a}))$ instead of $f'(g({a}))$."]
    else:
        u = a**2; val = fp[u] * 2 * a
        w1 = fp[a] * 2 * a; w2 = fp[u]; w3 = fp[u] * a
        q = rf"Let $h(x) = f\left(x^{{2}}\right)$. What is $h'({a})$?"
        key_why = rf"$h'(x) = f'\left(x^{{2}}\right) \cdot 2x$, so $h'({a}) = f'({u}) \cdot {2 * a} = ({fp[u]})({2 * a}) = {val}$."
        whys = [rf"This uses $f'({a})$; the derivative of $f$ is evaluated at $x^{{2}} = {u}$.",
                rf"This is $f'({u})$ without the factor $2x = {2 * a}$ from the inside.",
                rf"This multiplies by $x = {a}$; the derivative of $x^{{2}}$ is $2x = {2 * a}$."]
    distinct(val, w1, w2, w3)
    it = item("3.1", q, (num(val), key_why), [(num(w1), whys[0]), (num(w2), whys[1]), (num(w3), whys[2])])
    rows = [["$f(x)$"] + [f"${f[v]}$" for v in xs], ["$f'(x)$"] + [f"${fp[v]}$" for v in xs]]
    if form == "fg":
        rows += [["$g(x)$"] + [f"${g[v]}$" for v in xs], ["$g'(x)$"] + [f"${gp[v]}$" for v in xs]]
        intro = r"The functions $f$ and $g$ are differentiable for all real numbers. The table gives selected values of $f$, $f'$, $g$, and $g'$."
    else:
        intro = r"The function $f$ is differentiable for all real numbers. The table gives selected values of $f$ and $f'$."
    it["_table"] = (intro, ["$x$"] + [f"${v}$" for v in xs], rows)
    if form == "fg":
        short_key(it)
    t31_table.n = getattr(t31_table, "n", 0) + 1
    return lv(it, "moderate")
t31_table.max = 2

def t31_base(r):
    b = r.choice([2, 3, 5]); x0 = r.choice([1, 4, 9])
    s = int(sqrt(x0)); bs = b**s
    # f(x) = b^(sqrt x); f'(x) = b^(sqrt x) ln b / (2 sqrt x)
    val = bs * log(b) / (2 * s)
    w1 = Rational(bs, 2 * s)                     # ln b dropped
    w2 = bs * log(b)                             # inside derivative dropped
    w3 = Rational(b**(s - 1), 2) if s > 1 else Rational(1, 2)  # power rule on b^u: sqrt(x) b^(sqrt x - 1) / (2 sqrt x)
    assert simplify(diff(b**sqrt(x), x).subs(x, x0) - val) == 0
    distinct(val, w1, w2, w3)
    def show(v):
        c = nsimplify(v / log(b)) if v.has(log(b)) else None
        if c is None:
            return frac(v.p, v.q)
        c = Rational(c)
        return (rf"\frac{{{c.p}\ln {b}}}{{{c.q}}}" if c.q != 1 else rf"{c.p}\ln {b}")
    q = rf"If $f(x) = {b}^{{\sqrt{{x}}}}$, what is $f'({x0})$?"
    return lv(item("3.1", q, (show(val), rf"$f'(x) = {b}^{{\sqrt{{x}}}}\ln {b} \cdot \dfrac{{1}}{{2\sqrt{{x}}}}$. At $x = {x0}$: ${bs}\ln {b} \cdot \dfrac{{1}}{{{2 * s}}} = {show(val)}$."),
        [(show(w1), rf"This leaves out the factor $\ln {b}$; only $e^{{u}}$ is its own derivative."),
         (show(w2), r"This leaves out the derivative of the exponent, $\dfrac{1}{2\sqrt{x}}$."),
         (show(w3), r"This uses the power rule on $b^{u}$, lowering the exponent by $1$. The power rule needs a variable base and a constant exponent.")]), "moderate")
t31_base.max = 2

def t31_tangent(r):
    a = r.choice([2, 3, 5]); s = r.choice([2, 3]); x0 = r.choice([0, 1, 2, 3])
    b = s**2 - a * x0
    if b == 0: raise Skip("zero")
    inner = a * x + b
    m = Rational(a, 2 * s)
    assert diff(sqrt(inner), x).subs(x, x0) == m
    k = line(s, m, x0)
    w = [(line(s, Rational(1, 2 * s), x0), rf"The slope $\dfrac{{1}}{{{2 * s}}}$ leaves out the derivative of the inside, ${a}$."),
         (line(s, Rational(a, s), x0), rf"The slope $\dfrac{{{a}}}{{{s}}}$ leaves out the $2$ in $\dfrac{{u'}}{{2\sqrt{{u}}}}$."),
         (line(x0, m, s), "The slope is right, but the coordinates of the point are switched.")]
    if len({k} | {c for c, _ in w}) < 4: raise Skip("same")
    q = rf"Which of the following is an equation of the line tangent to the graph of $y = \sqrt{{{L(inner)}}}$ at $x = {x0}$?"
    return lv(item("3.1", q, (k, rf"At $x = {x0}$, $y = \sqrt{{{s**2}}} = {s}$. The slope is $\dfrac{{{a}}}{{2\sqrt{{{L(inner)}}}}} = \dfrac{{{a}}}{{{2 * s}}}$ there, so the line is ${k}$."), w), "moderate")
t31_tangent.max = 1

def t31_chainprod(r):
    k, x0 = r.choice([(1, 1), (2, 1), (1, 2)])
    f = x * exp(-k * x**2)
    val = diff(f, x).subs(x, x0)
    e0 = exp(-k * x0**2)
    w1 = e0                                    # only the first term of the product rule
    w2 = -2 * k * x0**2 * e0                   # only the second term
    w3 = (1 + 2 * k * x0**2) * e0              # sign of the inside derivative lost
    distinct(val, w1, w2, w3)
    n = k * x0**2
    def show(v):
        c = simplify(v / e0)
        return (rf"\frac{{{c}}}{{e^{{{n}}}}}" if n != 1 else rf"\frac{{{c}}}{{e}}").replace(r"\frac{-", r"-\frac{")
    q = rf"If $f(x) = xe^{{-{k if k != 1 else ''}x^{{2}}}}$, what is $f'({x0})$?"
    return lv(item("3.1", q, (show(val), rf"By the product and chain rules, $f'(x) = e^{{-{k if k != 1 else ''}x^{{2}}}} + x \cdot e^{{-{k if k != 1 else ''}x^{{2}}}}\left({-2 * k}x\right) = e^{{-{k if k != 1 else ''}x^{{2}}}}\left(1 - {2 * k}x^{{2}}\right)$. At $x = {x0}$ this is ${show(val)}$.".replace(r"\left(1 - 2x^{2}\right)", r"\left(1 - 2x^{2}\right)")),
        [(show(w1), rf"This is only the first term of the product rule, $1 \cdot e^{{-{k if k != 1 else ''}x^{{2}}}}$."),
         (show(w2), r"This is only the second term of the product rule, $x$ times the derivative of the exponential."),
         (show(w3), rf"The derivative of the exponent $-{k if k != 1 else ''}x^{{2}}$ is $-{2 * k}x$; the negative sign is lost.")]), "moderate")
t31_chainprod.max = 1

def _lnpow_tex(n, base, coef):
    """coef * n * (ln base)^(n-1), written as LaTeX; coef is a Rational."""
    lnp = rf"\ln {base}" if n == 2 else rf"\left(\ln {base}\right)^{{{n - 1}}}"
    c = Rational(coef) * n
    cp = "" if c.p == 1 else str(c.p)
    if c.q == 1:
        return rf"{cp}{lnp}"
    return rf"\frac{{{cp}{lnp}}}{{{c.q}}}"

def t31_lnpow(r):
    n = r.choice([2, 3]); c, k = r.choice([(2, 1), (1, 2), (2, 5), (3, 1)])
    u = c**2 + k
    if 2 * c == u: raise Skip("factor 1")
    f = log(x**2 + k)**n
    val = diff(f, x).subs(x, c)
    assert simplify(val - n * log(u)**(n - 1) * Rational(2 * c, u)) == 0
    key = _lnpow_tex(n, u, Rational(2 * c, u))
    w1 = _lnpow_tex(n, u, 1)                      # inside of ln not differentiated
    w2 = _lnpow_tex(n, u, Rational(1, u))         # 1/u without u'
    w3 = frac(n * 2 * c, u)                       # treats (ln u)^n as ln(u^n)
    if len({key, w1, w2, w3}) < 4: raise Skip("same")
    q = rf"If $f(x) = \left(\ln\left(x^{{2}} + {k}\right)\right)^{{{n}}}$, what is $f'({c})$?"
    e1 = "" if n == 2 else f"^{{{n - 1}}}"
    return lv(item("3.1", q, (key, rf"Three layers: a power, a natural log, and $x^{{2}} + {k}$. $f'(x) = {n}\left(\ln\left(x^{{2}} + {k}\right)\right){e1} \cdot \dfrac{{1}}{{x^{{2}} + {k}}} \cdot 2x$. At $x = {c}$: ${n}\left(\ln {u}\right){e1} \cdot \dfrac{{{2 * c}}}{{{u}}} = {key}$."),
        [(w1, r"This differentiates only the outer power and stops; the derivative of the logarithm and of $x^{2}$ are both missing."),
         (w2, rf"This uses $\dfrac{{1}}{{x^{{2}} + {k}}}$ for the derivative of the logarithm but leaves out the factor $2x$ from the innermost layer."),
         (w3, rf"This treats $\left(\ln u\right)^{{{n}}}$ as $\ln\left(u^{{{n}}}\right) = {n}\ln u$. The power is outside the logarithm, so it cannot be brought down as a coefficient.")]), "difficult")
t31_lnpow.max = 3

ABSTRACT = [
    # (f'(x) given, inner g, key, no inner, f' at x times g', f' at g' times g')
    (r"\sqrt{1 + x^{3}}", r"x^{2}", r"2x\sqrt{1 + x^{6}}", r"\sqrt{1 + x^{6}}", r"2x\sqrt{1 + x^{3}}", r"2x\sqrt{1 + 8x^{3}}",
     sqrt(1 + x**3), x**2),
    (r"\dfrac{1}{1 + x^{2}}", r"\sin x", r"\frac{\cos x}{1 + \sin^{2} x}", r"\frac{1}{1 + \sin^{2} x}", r"\frac{\cos x}{1 + x^{2}}", r"\frac{\cos x}{1 + \cos^{2} x}",
     1 / (1 + x**2), sin(x)),
    (r"\ln x", r"x^{3}", r"9x^{2}\ln x", r"\ln\left(x^{3}\right)", r"3x^{2}\ln x", r"3x^{2}\ln\left(3x^{2}\right)",
     log(x), x**3),
]
def t31_abstract(r):
    fp_tex, g_tex, key, w1, w2, w3, fp, g = ABSTRACT[r.randrange(len(ABSTRACT))]
    xp = Symbol("x", positive=True)
    gp = diff(g, x)
    chk = lambda tex_val, e: simplify((e).subs(x, xp) - tex_val.subs(x, xp)) == 0
    right = fp.subs(x, g) * gp
    # the key is the chain rule; each distractor is its named mistake and differs from the key
    assert chk(right, fp.subs(x, g) * gp)
    for wrong in (fp.subs(x, g), fp * gp, fp.subs(x, gp) * gp):
        if simplify((wrong - right).subs(x, xp)) == 0: raise Skip("equal")
    if g_tex == r"x^{3}":
        assert simplify((right - 9 * x**2 * log(x)).subs(x, xp)) == 0
    dom = r" for $x > 0$" if fp_tex == r"\ln x" else ""
    q = rf"The function $f$ is differentiable, and $f'(x) = {fp_tex}${dom}. If $h(x) = f\left({g_tex}\right)$, then $h'(x) =$"
    gp_tex = L(gp)
    extra = rf" $= 3x^{{2}} \cdot 3\ln x$" if g_tex == r"x^{3}" else ""
    return lv(item("3.1", q, (key, rf"By the chain rule, $h'(x) = f'\left({g_tex}\right) \cdot {gp_tex}$: replace $x$ with ${g_tex}$ in the formula for $f'$, then multiply by the derivative of ${g_tex}$, which is ${gp_tex}$." + (rf" Here $f'\left(x^{{3}}\right) = \ln\left(x^{{3}}\right) = 3\ln x$, so $h'(x) = 3x^{{2}} \cdot 3\ln x = 9x^{{2}}\ln x$." if g_tex == r"x^{3}" else "")),
        [(w1, rf"This is $f'\left({g_tex}\right)$ without the factor ${gp_tex}$, the derivative of the inside."),
         (w2, rf"This is $f'(x) \cdot {gp_tex}$. The derivative of $f$ must be evaluated at ${g_tex}$, not at $x$."),
         (w3, rf"This evaluates $f'$ at ${gp_tex}$, the derivative of the inside. It must be evaluated at the inside itself, ${g_tex}$.")]), "difficult")
t31_abstract.max = 3

def t31_ff(r):
    # every (m, p, f(b)) whose key p*m is written shorter than the three named mistakes
    combos = [(m, p, fb) for m in [2, 3, -2, -3, 4, -4] for p in [4, 5, -1, -4, -2, 1, -3] for fb in [0, 6, -5, -3, 3]
              if abs(p) != abs(m) and len({p * m, m * m, p, fb * m}) == 4
              and len(str(p * m)) < min(len(str(m * m)), len(str(p)), len(str(fb * m)))]
    m, p, fb = r.choice(combos)
    a = r.choice([1, 2, 3, -1]); b = r.choice([v for v in [2, 4, 5, -2] if v != a])
    val = p * m
    w1 = m * m; w2 = p; w3 = fb * m
    distinct(val, w1, w2, w3)
    q = rf"The function $f$ is differentiable, with $f({a}) = {b}$, $f'({a}) = {m}$, $f({b}) = {fb}$, and $f'({b}) = {p}$. If $h(x) = f(f(x))$, what is $h'({a})$?"
    return lv(item("3.1", q, (num(val), rf"$h'(x) = f'(f(x)) \cdot f'(x)$, so $h'({a}) = f'(f({a})) \cdot f'({a}) = f'({b}) \cdot ({m}) = ({p})({m}) = {val}$."),
        [(num(w1), rf"This is $f'({a}) \cdot f'({a})$. The outer derivative is evaluated at $f({a}) = {b}$, not at ${a}$."),
         (num(w2), rf"This is $f'(f({a})) = f'({b})$ without the inner factor $f'({a}) = {m}$."),
         (num(w3), rf"This uses $f(f({a})) = f({b}) = {fb}$, a value of $f$, where the chain rule needs the derivative $f'({b})$.")]), "difficult")
t31_ff.max = 2

III = [
    dict(q=r"Which of the following functions have derivative $2xe^{x^{2}}$?",
         rom=[r"$y = e^{x^{2}} + 4$", r"$y = e^{x^{2} + 4}$", r"$y = \left(e^{x}\right)^{2x}$"],
         fns=[exp(x**2) + 4, exp(x**2 + 4), exp(x)**(2 * x)],
         target=2 * x * exp(x**2),
         key="I only", wrong=["I and II only", "I and III only", "I, II, and III"],
         why=[r"I: the constant $4$ has derivative $0$, so the derivative is $e^{x^{2}} \cdot 2x$. II: $e^{x^{2} + 4} = e^{4}e^{x^{2}}$, whose derivative is $2xe^{x^{2} + 4}$, which is $e^{4}$ times too large. III: $\left(e^{x}\right)^{2x} = e^{2x^{2}}$, whose derivative is $4xe^{2x^{2}}$. Only I works.",
              r"II is not a match: the $4$ in the exponent multiplies the function by $e^{4}$, so its derivative is $2xe^{x^{2} + 4}$. A constant inside the exponent is not a constant added to the function.",
              r"III is not a match: $\left(e^{x}\right)^{2x} = e^{x \cdot 2x} = e^{2x^{2}}$, and its derivative is $4xe^{2x^{2}}$.",
              r"Only I has this derivative. II has derivative $2xe^{x^{2} + 4}$, and III equals $e^{2x^{2}}$, with derivative $4xe^{2x^{2}}$."]),
    dict(q=r"Which of the following functions have derivative $\sin(2x)$?",
         rom=[r"$y = \sin^{2} x$", r"$y = \cos^{2} x$", r"$y = -\dfrac{1}{2}\cos(2x)$"],
         fns=[sin(x)**2, cos(x)**2, -cos(2 * x) / 2],
         target=sin(2 * x),
         key="I and III only", wrong=["I only", "I, II, and III", "III only"],
         why=[r"I: $2\sin x\cos x = \sin(2x)$ by the double-angle identity. II: $2\cos x \cdot (-\sin x) = -\sin(2x)$, the opposite sign. III: $-\dfrac{1}{2} \cdot \left(-\sin(2x)\right) \cdot 2 = \sin(2x)$. I and III work.",
              r"III also works. The chain rule on $\cos(2x)$ brings a factor of $2$ that cancels the $\dfrac{1}{2}$: $-\dfrac{1}{2} \cdot \left(-\sin(2x)\right) \cdot 2 = \sin(2x)$.",
              r"II does not work. The derivative of $\cos x$ is $-\sin x$, so the derivative of $\cos^{2} x$ is $-2\sin x\cos x = -\sin(2x)$.",
              r"I also works. The derivative of $\sin^{2} x$ is $2\sin x\cos x$, which is $\sin(2x)$ by the double-angle identity."]),
]
def t31_iii(r):
    d = III[r.randrange(len(III))]
    xp = Symbol("x", positive=True)
    ok = [simplify((diff(f, x) - d["target"]).subs(x, xp)) == 0 for f in d["fns"]]
    names = ["I", "II", "III"]
    have = [names[i] for i in range(3) if ok[i]]
    want = {"I only": ["I"], "I and III only": ["I", "III"]}[d["key"]]
    assert have == want, (have, want)
    q = d["q"] + "\n\n" + "\n".join(f"{n}. {s}" for n, s in zip(names, d["rom"]))
    it = item("3.1", q, (f"TEXT:{d['key']}", d["why"][0]), [(f"TEXT:{w}", y) for w, y in zip(d["wrong"], d["why"][1:])])
    it["_roman"] = d["rom"]
    return lv(it, "difficult")
t31_iii.max = 2

def t31_tanline(r):
    """The tangent line to y = f(g(x)) when only values of f and f' are given."""
    t31_tanline.n = getattr(t31_tanline, "n", 0) + 1
    a, k = [(1, 1), (2, -1), (-1, 2)][t31_tanline.n % 3]; p = a**2 + k
    if p == a: raise Skip("same point")
    q0 = r.choice([3, -2, 5]); m = r.choice([2, -3, 4])
    slope = m * 2 * a
    assert diff(x**2 + k, x).subs(x, a) == 2 * a
    key = line(q0, slope, a)
    w = [(line(q0, m, a), rf"The slope $f'({p}) = {m}$ leaves out the derivative of the inside, $2x = {2 * a}$ at $x = {a}$."),
         (line(q0, m * 2 * p, a), rf"The slope multiplies by $2x$ evaluated at $x = {p}$. The inside derivative is evaluated at $x = {a}$, giving ${2 * a}$."),
         (line(q0, slope, p), rf"The slope is right, but the line must pass through $x = {a}$, where the tangent is drawn, not through $x = {p}$.")]
    if len({key} | {c for c, _ in w}) < 4: raise Skip("same")
    kk = f"+ {k}" if k > 0 else f"- {-k}"
    q = rf"The function $f$ is differentiable, with $f({p}) = {q0}$ and $f'({p}) = {m}$. Which of the following is an equation of the line tangent to the graph of $y = f\left(x^{{2}} {kk}\right)$ at $x = {a}$?"
    return lv(item("3.1", q, (key, rf"At $x = {a}$, $x^{{2}} {kk} = {p}$, so $y = f({p}) = {q0}$. The slope is $f'\left(x^{{2}} {kk}\right) \cdot 2x = f'({p}) \cdot {2 * a if a > 0 else f"({2 * a})"} = {slope}$. The line is ${key}$."), w), "difficult")
t31_tanline.max = 3

# ---------------------------------------------------------------- 3.2 implicit
def t32_point(r):
    for _ in range(50):
        x0, y0 = r.choice([1, 2, -1]), r.choice([1, 2, 3, -2])
        c = x0**2 + x0 * y0 + y0**2
        if x0 + 2 * y0 != 0: break
    val = Rational(-(2 * x0 + y0), x0 + 2 * y0)
    w1 = Rational(-2 * x0, 2 * y0); w2 = Rational(2 * x0 + y0, x0 + 2 * y0); w3 = Rational(-(2 * x0 + y0), 2 * y0)
    distinct(val, w1, w2, w3)
    q = rf"The point $({x0}, {y0})$ lies on the curve $x^{{2}} + xy + y^{{2}} = {c}$. What is $\dfrac{{dy}}{{dx}}$ at this point?"
    return lv(item("3.2", q, (num(val), rf"Differentiating: $2x + \left(y + x\dfrac{{dy}}{{dx}}\right) + 2y\dfrac{{dy}}{{dx}} = 0$, so $\dfrac{{dy}}{{dx}} = -\dfrac{{2x + y}}{{x + 2y}}$. At $({x0}, {y0})$ this is ${L(val)}$."),
        [(num(w1), r"This drops the $xy$ term, which needs the product rule."),
         (num(w2), r"The sign is lost when solving for $\dfrac{dy}{dx}$."),
         (num(w3), r"This differentiates $xy$ as $y$ only. The product rule also gives $x\dfrac{dy}{dx}$, which belongs with the other $\dfrac{dy}{dx}$ term.")]), "moderate")
t32_point.max = 1

def t32_circle(r):
    """x^2 + xy = c: one product term, slope at a point."""
    x0, y0 = r.choice([(1, 2), (2, 1), (2, -1), (1, -4)])
    c = x0**2 + x0 * y0
    val = Rational(-(2 * x0 + y0), x0)
    X, Y = symbols("X Y"); F = X**2 + X * Y - c
    assert (-diff(F, X) / diff(F, Y)).subs({X: x0, Y: y0}) == val
    w1 = Rational(-2 * x0, x0)            # xy differentiated as x y'
    w2 = -val                             # sign lost
    w3 = 1 / val if val != 0 else 99      # reciprocal
    distinct(val, w1, w2, w3)
    q = rf"The point $({x0}, {y0})$ lies on the curve $x^{{2}} + xy = {c}$. What is the slope of the line tangent to the curve at this point?"
    return lv(item("3.2", q, (num(val), rf"$2x + y + x\dfrac{{dy}}{{dx}} = 0$, so $\dfrac{{dy}}{{dx}} = -\dfrac{{2x + y}}{{x}}$. At $({x0}, {y0})$ this is ${L(val)}$."),
        [(num(w1), r"This differentiates $xy$ as $x\dfrac{dy}{dx}$ and leaves out the $y$ term of the product rule."),
         (num(w2), r"The sign is lost when $2x + y$ is moved to the other side."),
         (num(w3), r"This is the reciprocal, $-\dfrac{x}{2x + y}$; the $\dfrac{dy}{dx}$ term has coefficient $x$, so $x$ goes in the denominator.")]), "easy")
t32_circle.max = 1

def t32_exp(r):
    k = r.choice([2, 3])
    q = rf"If $e^{{y}} + {k}xy = x + 1$ and $y = 0$ when $x = 0$, what is $\dfrac{{dy}}{{dx}}$ at $(0, 0)$?"
    X, Y, D_ = symbols("X Y D")
    # e^y y' + k(y + x y') = 1 at (0, 0)
    assert solve(exp(Y) * D_ + k * (Y + X * D_) - 1, D_)[0].subs({X: 0, Y: 0}) == 1
    return lv(item("3.2", q, ("1", rf"Differentiating: $e^{{y}}\dfrac{{dy}}{{dx}} + {k}\left(y + x\dfrac{{dy}}{{dx}}\right) = 1$. At $(0, 0)$: $\dfrac{{dy}}{{dx}} + 0 = 1$."),
        [("0", r"This differentiates the right side, $x + 1$, as $0$. Its derivative is $1$."),
         (num(Rational(1, k + 1)), rf"This differentiates ${k}xy$ as ${k}\dfrac{{dy}}{{dx}}$. The product rule gives ${k}\left(y + x\dfrac{{dy}}{{dx}}\right)$, which is $0$ at $(0, 0)$."),
         (num(1 - k), rf"This differentiates ${k}xy$ as the constant ${k}$.")]), "moderate")
t32_exp.max = 1

def t32_normal(r):
    x0, y0 = 1, 2
    X, Y = symbols("X Y")
    F = X**3 - 2 * X * Y + Y**2
    c = F.subs({X: x0, Y: y0})
    m = Rational(-diff(F, X).subs({X: x0, Y: y0}), diff(F, Y).subs({X: x0, Y: y0}))
    # mistake: 2xy differentiated as 2y' (no product rule): 3x^2 - 2y' + 2y y' = 0
    m_np = Rational(-3 * x0**2, 2 * y0 - 2)
    if m == 0 or m_np == 0 or m == m_np: raise Skip("bad")
    key = line(y0, -1 / m, x0)
    w = [(line(y0, m, x0), rf"This is the tangent line, with slope ${frac(m)}$. The normal line is perpendicular to it, so its slope is ${frac(-1 / m)}$."),
         (line(y0, 1 / m, x0), r"This slope is the reciprocal of the tangent slope without the sign change. A perpendicular slope is the negative reciprocal."),
         (line(y0, -1 / m_np, x0), r"This differentiates $2xy$ as $2\dfrac{dy}{dx}$, leaving out the product rule, and then takes the negative reciprocal of that slope.")]
    if len({key} | {cc for cc, _ in w}) < 4: raise Skip("same")
    q = rf"The point $({x0}, {y0})$ lies on the curve $x^{{3}} - 2xy + y^{{2}} = {c}$. Which of the following is an equation of the line normal to the curve at this point?"
    return lv(item("3.2", q, (key, rf"$3x^{{2}} - 2\left(y + x\dfrac{{dy}}{{dx}}\right) + 2y\dfrac{{dy}}{{dx}} = 0$, so $\dfrac{{dy}}{{dx}} = \dfrac{{2y - 3x^{{2}}}}{{2y - 2x}}$, which is ${frac(m)}$ at $({x0}, {y0})$. The normal line is perpendicular, with slope ${frac(-1 / m)}$: ${key}$."), w), "difficult")
t32_normal.max = 1

def t32_clear(r):
    """x^2(x - y) = x + y: expand first, then differentiate (the product x^2 y needs the product rule)."""
    X, Y, Dy = symbols("X Y Dy")
    lhs, rhs = X**3 - X**2 * Y, X + Y
    yfun = Symbol("y")
    right = (3 * x**2 - 2 * x * yfun - 1) / (x**2 + 1)
    # check by implicit differentiation with sympy
    yy = Symbol("yy")
    Fx = diff(lhs - rhs, X); Fy = diff(lhs - rhs, Y)
    assert simplify((-Fx / Fy).subs({X: x, Y: yfun}) - right) == 0
    key = r"\dfrac{3x^{2} - 2xy - 1}{x^{2} + 1}"
    w = [(r"\dfrac{3x^{2} - 1}{2x + 1}", r"This differentiates $x^{2}y$ as $2x\dfrac{dy}{dx}$. The product rule gives $2xy + x^{2}\dfrac{dy}{dx}$."),
         (r"\dfrac{3x^{2} - 2xy - 1}{x^{2} - 1}", r"A sign is lost when the $\dfrac{dy}{dx}$ terms are collected: $-x^{2}\dfrac{dy}{dx}$ and $\dfrac{dy}{dx}$ on opposite sides give $\left(x^{2} + 1\right)\dfrac{dy}{dx}$ on one side."),
         (r"\dfrac{3x^{2} - 2xy - 1}{x^{2}}", r"This differentiates the $y$ on the right side as $0$. Its derivative is $\dfrac{dy}{dx}$.")]
    q = r"If $x^{2}(x - y) = x + y$, then $\dfrac{dy}{dx} =$"
    return lv(item("3.2", q, (key, r"Expand: $x^{3} - x^{2}y = x + y$. Differentiate: $3x^{2} - \left(2xy + x^{2}\dfrac{dy}{dx}\right) = 1 + \dfrac{dy}{dx}$. Collect: $3x^{2} - 2xy - 1 = \left(x^{2} + 1\right)\dfrac{dy}{dx}$."), w), "difficult")
t32_clear.max = 1

# ---------------------------------------------------------------- 3.3 inverse functions
def t33_formula(r):
    a = r.choice([1, 4])
    f = x**3 + sqrt(x)
    b = f.subs(x, a); fp = diff(f, x).subs(x, a)
    val = 1 / fp
    w2 = 1 / (3 * a**2 + 1 / sqrt(a))          # derivative of sqrt(x) taken as 1/sqrt(x)
    distinct(val, fp, w2, -val)
    q = rf"Let $f(x) = x^{{3}} + \sqrt{{x}}$ for $x \ge 0$, and let $g$ be the inverse function of $f$. What is $g'({b})$?"
    return lv(item("3.3", q, (num(val), rf"$f({a}) = {b}$, so $g({b}) = {a}$. Since $f'(x) = 3x^{{2}} + \dfrac{{1}}{{2\sqrt{{x}}}}$, $f'({a}) = {L(fp)}$ and $g'({b}) = \dfrac{{1}}{{f'({a})}} = {L(val)}$."),
        [(num(fp), rf"This is $f'({a})$; the inverse's derivative is its reciprocal."),
         (num(w2), r"This uses $\dfrac{1}{\sqrt{x}}$ as the derivative of $\sqrt{x}$. The derivative is $\dfrac{1}{2\sqrt{x}}$."),
         (num(-val), r"The reciprocal is not the negative reciprocal. The graphs of $f$ and $g$ are reflections across $y = x$, so the slope of $g$ is the plain reciprocal.")]), "moderate")
t33_formula.max = 1

def t33_table(r):
    a = r.choice([2, 3, 4]); fa = r.choice([5, 7, 9]); fpa = r.choice([2, 3, 4, -5])
    val = Rational(1, fpa)
    w3 = Rational(-1, fpa)
    distinct(val, fpa, Rational(1, fa), w3)
    q = rf"The function $f$ is differentiable and one-to-one, with $f({a}) = {fa}$ and $f'({a}) = {fpa}$. If $g$ is the inverse of $f$, what is $g'({fa})$?"
    return lv(item("3.3", q, (num(val), rf"$g({fa}) = {a}$ because $f({a}) = {fa}$, so $g'({fa}) = \dfrac{{1}}{{f'({a})}} = {L(val)}$."),
        [(num(fpa), rf"This is $f'({a})$, not its reciprocal."),
         (num(Rational(1, fa)), rf"This is $\dfrac{{1}}{{f({a})}}$; the derivative of the inverse uses $f'({a})$, not $f({a})$."),
         (num(w3), r"This is the negative reciprocal, the slope of a perpendicular line. The graphs of $f$ and $g$ are reflections across $y = x$, so the slope of $g$ is the plain reciprocal.")]), "easy")
t33_table.max = 1

def t33_tanline(r):
    k = r.choice([1, 2, 3])
    f = k * x + exp(x)
    assert f.subs(x, 0) == 1
    m = diff(f, x).subs(x, 0)          # k + 1
    key = line(0, Rational(1, m), 1)
    w = [(line(0, m, 1), rf"The slope ${m}$ is $f'(0)$. The slope of the inverse at $x = 1$ is its reciprocal."),
         (line(1, Rational(1, m), 0), r"This line passes through $(0, 1)$, a point on the graph of $f$. The graph of the inverse passes through $(1, 0)$."),
         (line(0, Rational(-1, m), 1), r"This slope is the negative reciprocal of $f'(0)$. The slope of the inverse is the plain reciprocal.")]
    q = rf"Let $f(x) = {k if k != 1 else ''}x + e^{{x}}$, which is increasing for all $x$, and let $g$ be the inverse function of $f$. Which of the following is an equation of the line tangent to the graph of $g$ at $x = 1$?"
    return lv(item("3.3", q, (key, rf"$f(0) = 0 + e^{{0}} = 1$, so $g(1) = 0$. Since $f'(x) = {k} + e^{{x}}$, $g'(1) = \dfrac{{1}}{{f'(0)}} = \dfrac{{1}}{{{m}}}$. The line through $(1, 0)$ is ${key}$."), w), "moderate")
t33_tanline.max = 1

def t33_composite(r):
    a = 2
    f = exp(x - 1) + 2 * x + 1
    assert f.subs(x, 1) == a**2
    fp1 = diff(f, x).subs(x, 1)                # 3
    val = Rational(2 * a, fp1)
    w1 = Rational(1, fp1)                      # 2x factor dropped
    w2 = 2 * a * fp1                           # f' not inverted
    w3 = 2 * a / diff(f, x).subs(x, a)         # f' at a, not at g(a^2)
    distinct(val, w1, w2, w3)
    q = rf"Let $f(x) = e^{{x - 1}} + 2x + 1$, which is increasing for all $x$, and let $g$ be the inverse function of $f$. If $h(x) = g\left(x^{{2}}\right)$, what is $h'({a})$?"
    return lv(item("3.3", q, (num(val), rf"$h'(x) = g'\left(x^{{2}}\right) \cdot 2x$, so $h'({a}) = {2 * a}\,g'({a**2})$. Since $f(1) = 1 + 2 + 1 = {a**2}$, $g({a**2}) = 1$, and $g'({a**2}) = \dfrac{{1}}{{f'(1)}} = \dfrac{{1}}{{{fp1}}}$ because $f'(x) = e^{{x - 1}} + 2$. So $h'({a}) = {L(val)}$."),
        [(num(w1), rf"This is $g'({a**2})$ without the factor $2x = {2 * a}$ from the chain rule."),
         (num(w2), rf"This uses $f'(1) = {fp1}$ for $g'({a**2})$. The derivative of the inverse is the reciprocal, $\dfrac{{1}}{{{fp1}}}$."),
         (rf"\frac{{{2 * a}}}{{e + 2}}", rf"This uses $\dfrac{{1}}{{f'({a})}}$. The derivative of $f$ must be evaluated at $g({a**2}) = 1$, the input that $f$ sends to ${a**2}$.")]), "difficult")
t33_composite.max = 1

# ---------------------------------------------------------------- 3.4 inverse trig
def t34_atan(r):
    # arctan(kx) where kx = sqrt(3)
    k = r.choice([4, 8, 2, 3]); c = sqrt(3) / k
    f = atan(k * x); val = simplify(diff(f, x).subs(x, c))
    assert simplify(val - Rational(k, 4)) == 0
    w1 = Rational(1, 4); w2 = simplify(k / (1 + c**2)); w3 = -val
    distinct(val, w1, w2, w3)
    ct = rf"\dfrac{{\sqrt{{3}}}}{{{k}}}"
    q = rf"If $f(x) = \arctan({k}x)$, what is $f'\left({ct}\right)$?"
    return short_key(lv(item("3.4", q, (num(val), rf"$f'(x) = \dfrac{{{k}}}{{1 + ({k}x)^{{2}}}}$. At $x = {ct}$, $({k}x)^{{2}} = 3$, so $f'\left({ct}\right) = \dfrac{{{k}}}{{4}} = {L(val)}$."),
        [(num(w1), rf"This leaves out the factor ${k}$ from the chain rule."),
         (num(w2), rf"The inside is ${k}x$, so the denominator is $1 + ({k}x)^{{2}}$, not $1 + x^{{2}}$."),
         (num(w3), r"The derivative of $\arctan u$ is positive; the negative sign belongs to $\operatorname{arccot} u$.")]), "easy"))
t34_atan.max = 2

def t34_asin(r):
    k = r.choice([2, 4]); c = 1
    f = asin(x / k); val = diff(f, x).subs(x, c)
    w1 = 1 / sqrt(1 - Rational(c, k)**2); w2 = -val; w3 = Rational(1, k) / (1 + Rational(c, k)**2)
    distinct(val, w1, w2, w3)
    q = rf"If $f(x) = \arcsin\left(\dfrac{{x}}{{{k}}}\right)$, what is $f'({c})$?"
    return lv(item("3.4", q, (num(val), rf"$f'(x) = \dfrac{{1}}{{\sqrt{{1 - \left(\frac{{x}}{{{k}}}\right)^{{2}}}}}} \cdot \dfrac{{1}}{{{k}}}$; at $x = {c}$ this is ${L(val)}$."),
        [(num(w1), rf"This leaves out the factor $\dfrac{{1}}{{{k}}}$ from the chain rule."),
         (num(w2), r"That is the derivative of $\arccos$, which has a negative sign."),
         (num(w3), r"That uses the $\arctan$ form, $\dfrac{1}{1 + u^{2}}$.")]), "moderate")
t34_asin.max = 1

def t34_expr(r):
    k = r.choice([2, 4, 5])
    xk = f"x^{{{k}}}"; xk1 = f"x^{{{k - 1}}}" if k > 2 else "x"
    q = rf"What is $\dfrac{{d}}{{dx}}\left[\arctan\left({xk}\right)\right]$?"
    return lv(item("3.4", q, (rf"\frac{{{k}{xk1}}}{{1 + x^{{{2 * k}}}}}", rf"$\dfrac{{d}}{{dx}}\arctan u = \dfrac{{u'}}{{1 + u^{{2}}}}$ with $u = {xk}$, $u' = {k}{xk1}$, and $u^{{2}} = x^{{{2 * k}}}$."),
        [(rf"\frac{{1}}{{1 + x^{{{2 * k}}}}}", r"This leaves out $u'$."),
         (rf"\frac{{{k}{xk1}}}{{1 + x^{{2}}}}", r"The denominator uses $u^{2}$, the square of the inside, not $x^{2}$."),
         (rf"\frac{{{k}{xk1}}}{{\sqrt{{1 - x^{{{2 * k}}}}}}}", r"That is the $\arcsin$ form.")]), "moderate")
t34_expr.max = 1

def t34_atanexp(r):
    k = r.choice([2, 4])
    f = atan(exp(k * x)); val = diff(f, x).subs(x, 0)
    assert val == Rational(k, 2)
    w1 = Rational(1, 2)          # inside derivative dropped
    w2 = k                       # 1/(1 + u^2) dropped
    q = rf"If $f(x) = \arctan\left(e^{{{k}x}}\right)$, what is $f'(0)$?"
    return lv(item("3.4", q, (frac(val), rf"$f'(x) = \dfrac{{{k}e^{{{k}x}}}}{{1 + e^{{{2 * k}x}}}}$, so $f'(0) = \dfrac{{{k}}}{{1 + 1}} = {frac(val)}$."),
        [(frac(w1), rf"This is $\dfrac{{1}}{{1 + u^{{2}}}}$ at $u = 1$ without the factor $u' = {k}e^{{{k}x}}$."),
         (frac(w2), rf"This is $u' = {k}e^{{{k}x}}$ at $x = 0$ without the factor $\dfrac{{1}}{{1 + u^{{2}}}}$."),
         (r"\frac{\pi}{4}", r"This is $f(0) = \arctan 1$, the value of the function, not its derivative.")]), "moderate")
t34_atanexp.max = 1

def t34_sq(r):
    which = r.choice(["atan", "asin"])
    if which == "atan":
        f = atan(x)**2; c = 1; val = diff(f, x).subs(x, c)
        assert simplify(val - pi / 4) == 0
        key, w1, w2, w3 = r"\frac{\pi}{4}", r"\frac{\pi}{2}", r"\frac{\pi^{2}}{16}", r"\frac{1}{2}"
        q = r"If $f(x) = \left(\arctan x\right)^{2}$, what is $f'(1)$?"
        kw = r"$f'(x) = 2\arctan x \cdot \dfrac{1}{1 + x^{2}}$. At $x = 1$: $2 \cdot \dfrac{\pi}{4} \cdot \dfrac{1}{2} = \dfrac{\pi}{4}$."
        ws = [r"This is $2\arctan 1 = \dfrac{\pi}{2}$, without the factor $\dfrac{1}{1 + x^{2}} = \dfrac{1}{2}$, the derivative of $\arctan x$.",
              r"This is $f(1) = \left(\dfrac{\pi}{4}\right)^{2}$, the value of the function, not its derivative.",
              r"This is the derivative of $\arctan x$ at $1$ alone; the factor $2\arctan x$ from the power rule is missing."]
        assert simplify(2 * atan(1) - pi / 2) == 0 and simplify(atan(1)**2 - pi**2 / 16) == 0
    else:
        f = asin(x)**2; c = Rational(1, 2); val = diff(f, x).subs(x, c)
        assert simplify(val - 2 * sqrt(3) * pi / 9) == 0
        key, w1, w2, w3 = r"\frac{2\sqrt{3}\,\pi}{9}", r"\frac{\pi}{3}", r"\frac{\pi^{2}}{36}", r"\frac{2\sqrt{3}}{3}"
        q = r"If $f(x) = \left(\arcsin x\right)^{2}$, what is $f'\left(\dfrac{1}{2}\right)$?"
        kw = r"$f'(x) = 2\arcsin x \cdot \dfrac{1}{\sqrt{1 - x^{2}}}$. At $x = \dfrac{1}{2}$: $2 \cdot \dfrac{\pi}{6} \cdot \dfrac{2}{\sqrt{3}} = \dfrac{2\pi}{3\sqrt{3}} = \dfrac{2\sqrt{3}\,\pi}{9}$."
        ws = [r"This is $2\arcsin\left(\dfrac{1}{2}\right) = \dfrac{\pi}{3}$, without the factor $\dfrac{1}{\sqrt{1 - x^{2}}}$, the derivative of $\arcsin x$.",
              r"This is $f\left(\dfrac{1}{2}\right) = \left(\dfrac{\pi}{6}\right)^{2}$, the value of the function, not its derivative.",
              r"This is the derivative of $\arcsin x$ at $\dfrac{1}{2}$ alone; the factor $2\arcsin x$ from the power rule is missing."]
        assert simplify(1 / sqrt(1 - c**2) - 2 * sqrt(3) / 3) == 0
    return lv(item("3.4", q, (key, kw), [(w1, ws[0]), (w2, ws[1]), (w3, ws[2])]), "difficult")
t34_sq.max = 2

# ---------------------------------------------------------------- 3.6 higher-order
def t36_poly(r):
    c4, c3, c1 = r.choice([1, 2, 3]), r.choice([-2, 3, -1, 2]), r.choice([5, -7, 3]); a = r.choice([1, -1, 2, -2])
    f = c4 * x**4 + c3 * x**3 + c1 * x
    val = diff(f, x, 2).subs(x, a)
    w1 = diff(f, x).subs(x, a); w2 = (12 * c4 * x**2 + 3 * c3 * x).subs(x, a); w3 = diff(f, x, 3).subs(x, a)
    distinct(val, w1, w2, w3)
    q = rf"If $f(x) = {L(f)}$, what is $f''({a})$?"
    return lv(item("3.6", q, (num(val), rf"$f'(x) = {L(diff(f, x))}$ and $f''(x) = {L(diff(f, x, 2))}$, so $f''({a}) = {L(val)}$."),
        [(num(w1), rf"This is $f'({a})$, the first derivative."),
         (num(w2), r"The second derivative of $cx^{3}$ is $6cx$, not $3cx$."),
         (num(w3), r"This is the third derivative.")]), "easy")
t36_poly.max = 1

def _t36_trig(r, ns, d):
    n = r.choice(ns); fn = r.choice(["sin", "cos"])
    f = sin(x) if fn == "sin" else cos(x)
    right = diff(f, x, n)
    opts = [sin(x), cos(x), -sin(x), -cos(x)]
    wr = [o for o in opts if o != right]
    pos = lambda w: [i for i in range(4) if diff(f, x, i) == w][0]
    q = rf"What is $\dfrac{{d^{{{n}}}}}{{dx^{{{n}}}}}\left[\{fn} x\right]$?"
    if n >= 4:
        kw = rf"The derivatives of $\{fn} x$ repeat every $4$. Since ${n} = 4({n // 4}) + {n % 4}$, derivative number ${n}$ is the same as derivative number ${n % 4}$, which is ${L(right)}$."
        ww = [rf"${L(w)}$ is derivative number ${pos(w)}$ in the cycle (or ${pos(w) + 4}$, ${pos(w) + 8}$, and so on), but ${n}$ leaves remainder ${n % 4}$ when divided by $4$." for w in wr]
    else:
        kw = rf"Differentiating ${n}$ times: " + ", then ".join(f"${L(diff(f, x, i))}$" for i in range(1, n + 1)) + "."
        ww = [(rf"${L(w)}$ is the function itself, before any derivative." if w == f else rf"${L(w)}$ comes after {['', 'one derivative', 'two derivatives', 'three derivatives'][pos(w)]}, not {['', 'one', 'two', 'three'][n]}.") for w in wr]
    return lv(item("3.6", q, (L(right), kw), list(zip([L(w) for w in wr], ww))), d)

def t36_trig_small(r):
    return _t36_trig(r, [2, 3], "easy")
t36_trig_small.max = 1

def t36_trig_big(r):
    t36_trig_big.n = getattr(t36_trig_big, "n", 0) + 1
    return _t36_trig(r, [[6, 25], [43, 34]][t36_trig_big.n % 2], "moderate")
t36_trig_big.max = 2

def t36_accel(r):
    a = r.choice([1, 2, 3]); p = r.choice([1, 2, 3]); q0 = r.choice([-6, 9, -3, -9, 3]); c1 = r.choice([4, -5, 7])
    s = p * t**3 + q0 * t**2 + c1 * t
    val = diff(s, t, 2).subs(t, a)
    w1 = diff(s, t).subs(t, a); w2 = s.subs(t, a); w3 = (3 * p * t + 2 * q0).subs(t, a)
    distinct(val, w1, w2, w3)
    q = rf"A particle moves along a line with position $s(t) = {L(s)}$. What is its acceleration at $t = {a}$?"
    return short_key(lv(item("3.6", q, (num(val), rf"Acceleration is $s''(t) = {L(diff(s, t, 2))}$; at $t = {a}$ it is ${L(val)}$."),
        [(num(w1), r"This is the velocity, $s'(t)$."),
         (num(w2), r"This is the position."),
         (num(w3), r"The second derivative of $pt^{3}$ is $6pt$, not $3pt$.")]), "easy"))
t36_accel.max = 3

def t36_exp(r):
    k = r.choice([2, 3, -2]); c = r.choice([0, 1])
    f = exp(k * x); val = diff(f, x, 2).subs(x, c)
    w1 = diff(f, x).subs(x, c); w2 = (2 * k * exp(k * x)).subs(x, c); w3 = diff(f, x, 3).subs(x, c)
    distinct(val, w1, w2, w3)
    q = rf"If $f(x) = e^{{{k}x}}$, what is $f''({c})$?"
    return short_key(lv(item("3.6", q, (L(val), rf"Each derivative brings a factor of ${k}$: $f''(x) = {L(k**2)}e^{{{k}x}}$, which is ${L(val)}$ at $x = {c}$."),
        [(L(w1), r"This is the first derivative."),
         (L(w2), rf"Two derivatives multiply by ${k}$ twice, giving ${k**2}$, not ${2 * k}$."),
         (L(w3), r"This is the third derivative, one derivative too many.")]), "easy"))
t36_exp.max = 1

def t36_xlnx(r):
    f = x * log(x)
    xp = Symbol("x", positive=True)
    assert simplify(diff(f, x, 3) + 1 / x**2) == 0 and simplify(diff(f, x, 2) - 1 / x) == 0 and simplify(diff(f, x, 4) - 2 / x**3) == 0
    q = r"If $f(x) = x\ln x$ for $x > 0$, then $f'''(x) =$"
    return lv(item("3.6", q, (r"-\frac{1}{x^{2}}", r"$f'(x) = \ln x + x \cdot \dfrac{1}{x} = \ln x + 1$, $f''(x) = \dfrac{1}{x}$, and $f'''(x) = -\dfrac{1}{x^{2}}$."),
        [(r"\frac{1}{x}", r"This is $f''(x)$, one derivative short."),
         (r"\frac{1}{x^{2}}", r"The derivative of $x^{-1}$ is $-x^{-2}$; the sign is lost."),
         (r"\frac{2}{x^{3}}", r"This is $f^{(4)}(x)$, one derivative too many.")]), "moderate")
t36_xlnx.max = 1

def t36_implicit(r):
    x0, y0 = r.choice([(3, 4), (4, 3), (-3, 4), (4, -3)])
    R2 = x0**2 + y0**2
    val = Rational(-R2, y0**3)
    q = rf"For the curve $x^{{2}} + y^{{2}} = {R2}$, $\dfrac{{dy}}{{dx}} = -\dfrac{{x}}{{y}}$. What is $\dfrac{{d^{{2}}y}}{{dx^{{2}}}}$ at the point $({x0}, {y0})$?"
    kw = rf"By the quotient rule, $\dfrac{{d^{{2}}y}}{{dx^{{2}}}} = -\dfrac{{y - x\frac{{dy}}{{dx}}}}{{y^{{2}}}}$. Substituting $\dfrac{{dy}}{{dx}} = -\dfrac{{x}}{{y}}$ gives $-\dfrac{{x^{{2}} + y^{{2}}}}{{y^{{3}}}} = -\dfrac{{{R2}}}{{{y0**3}}}$ at this point."
    if x0:
        w = [(num(Rational(-x0, y0)), r"This is $\dfrac{dy}{dx}$, the first derivative."),
             (num(Rational(-1, y0)), r"This differentiates $-\dfrac{x}{y}$ as if $y$ were a constant, giving $-\dfrac{1}{y}$."),
             (num(Rational(R2, y0**3)), r"The sign is lost when $-\dfrac{x}{y}$ is substituted for $\dfrac{dy}{dx}$.")]
    else:
        w = [(num(Rational(-1, y0)), r"This differentiates $-\dfrac{x}{y}$ as if $y$ were a constant, giving $-\dfrac{1}{y}$."),
             (num(Rational(R2, y0**3)), r"The sign is lost when $-\dfrac{x}{y}$ is substituted for $\dfrac{dy}{dx}$."),
             (num(Rational(-R2, y0**2)), r"The denominator is $y^{3}$: the quotient rule gives $y^{2}$, and substituting $\dfrac{dy}{dx}$ adds another factor of $y$.")]
    # check with sympy: y = sqrt(R2 - x^2) (or the negative branch) at x0
    yb = sqrt(R2 - x**2) if y0 > 0 else -sqrt(R2 - x**2)
    assert simplify(diff(yb, x, 2).subs(x, x0) - val) == 0
    return lv(item("3.6", q, (num(val), kw), w), "difficult")
t36_implicit.max = 2

def t36_fsq(r):
    a = r.choice([1, 2, 3]); p = r.choice([2, -1, 3]); q1 = r.choice([3, -2, 4]); rr = r.choice([5, -3, 2])
    val = 2 * q1**2 + 2 * p * rr
    w1 = 2 * p * rr            # first product-rule term lost
    w2 = 2 * q1**2             # second term lost
    w3 = 2 * q1 * rr           # 2 f' f'': differentiates f'(x) as f''(x) and f(x) as f'(x) in one factor each
    distinct(val, w1, w2, w3)
    F = Function("F")
    g = F(x)**2
    gpp = diff(g, x, 2).subs({diff(F(x), x, 2): rr}).subs({diff(F(x), x): q1}).subs({F(x): p})
    assert gpp == val
    q = rf"The function $f$ is twice differentiable, with $f({a}) = {p}$, $f'({a}) = {q1}$, and $f''({a}) = {rr}$. If $g(x) = \left(f(x)\right)^{{2}}$, what is $g''({a})$?"
    return short_key(lv(item("3.6", q, (num(val), rf"$g'(x) = 2f(x)f'(x)$. By the product rule, $g''(x) = 2f'(x)f'(x) + 2f(x)f''(x)$. At $x = {a}$: $2({q1})^{{2}} + 2({p})({rr}) = {val}$."),
        [(num(w1), r"This is only $2f(x)f''(x)$; the product rule on $2f(x)f'(x)$ also gives $2\left(f'(x)\right)^{2}$."),
         (num(w2), r"This is only $2\left(f'(x)\right)^{2}$; the product rule also gives $2f(x)f''(x)$."),
         (num(w3), r"This differentiates each factor of $2f(x)f'(x)$ and multiplies the results, $2f'(x)f''(x)$. The product rule adds two terms.")]), "difficult"))
t36_fsq.max = 2

def t36_lncos(r):
    c, ct = r.choice([(pi / 3, r"\dfrac{\pi}{3}"), (pi / 4, r"\dfrac{\pi}{4}"), (pi / 6, r"\dfrac{\pi}{6}")])
    f = log(cos(x))
    val = simplify(diff(f, x, 2).subs(x, c))
    assert simplify(val + sec(c)**2) == 0
    w1 = simplify(-tan(c)); w2 = simplify(sec(c)**2); w3 = simplify(-sec(c))
    distinct(val, w1, w2, w3)
    q = rf"If $f(x) = \ln(\cos x)$ for $-\dfrac{{\pi}}{{2}} < x < \dfrac{{\pi}}{{2}}$, what is $f''\left({ct}\right)$?"
    return lv(item("3.6", q, (num(val), rf"$f'(x) = \dfrac{{-\sin x}}{{\cos x}} = -\tan x$, so $f''(x) = -\sec^{{2}} x$. At $x = {ct}$, $\sec x = {L(simplify(sec(c)))}$, so $f''\left({ct}\right) = {L(val)}$."),
        [(num(w1), r"This is $f'$ at that point, $-\tan x$: one derivative short."),
         (num(w2), r"The sign is lost: $f'(x) = -\tan x$, so $f''(x) = -\sec^{2} x$."),
         (num(w3), r"This uses $\sec x$ as the derivative of $\tan x$. The derivative of $\tan x$ is $\sec^{2} x$.")]), "difficult")
t36_lncos.max = 2

TEMPLATES = {"3.1": [t31_power, t31_trig_expr, t31_exp, t31_ln, t31_sqrt, t31_cube_table, t31_tan,
                     t31_trigsq, t31_table, t31_base, t31_tangent, t31_chainprod,
                     t31_lnpow, t31_abstract, t31_ff, t31_iii, t31_tanline],
             "3.2": [t32_circle, t32_point, t32_exp, t32_normal, t32_clear],
             "3.3": [t33_table, t33_formula, t33_tanline, t33_composite],
             "3.4": [t34_atan, t34_asin, t34_expr, t34_atanexp, t34_sq],
             "3.6": [t36_poly, t36_accel, t36_exp, t36_trig_small, t36_trig_big, t36_xlnx, t36_implicit, t36_fsq, t36_lncos]}

# ---------------------------------------------------------------- writing the file
# core.write_deck writes neither `difficulty` nor table sets made inside a template, so this module writes the deck
# itself. The output is core.write_deck's, plus `difficulty` on each item and a set for each table item.
def write_deck(path, header, sets_js, items, unit, prefix):
    sets_js = dict(sets_js)
    n_set = 0
    for it in items:
        if it.get("_table"):
            intro, head, rows = it["_table"]
            n_set += 1
            sid = f"{prefix}-s{n_set}"
            js = lambda cells: "[" + ", ".join(js_string(c) for c in cells) + "]"
            sets_js[sid] = ('{ name: "Values of f and g", label: "Table", intro: ' + js_string(intro)
                            + ", sources: [{ title: \"\", blocks: [{ table: { head: " + js(head) + ", rows: ["
                            + ", ".join(js(rw) for rw in rows) + "] } }] }] }")
            if "g(x)" not in str(rows):
                sets_js[sid] = sets_js[sid].replace('"Values of f and g"', '"Values of f"')
            it["set"] = sid
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

_main = sys.modules.get("__main__")
if _main is not None and getattr(_main, "write_deck", None) is core.write_deck and sys.argv[1:] == ["3"]:
    _main.write_deck = write_deck

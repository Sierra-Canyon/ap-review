"""Unit 1, Limits and Continuity: templates for review multiple choice. Every key and wrong choice is computed."""
from core import *

def lim_tex(var_to, expr_tex, side=""):
    return rf"\displaystyle \lim_{{x \to {var_to}{side}}} {expr_tex}"

# ---------------------------------------------------------------- 1.1
def t11_avg(r):
    a = r.randint(-2, 1); b = a + r.randint(2, 4); c = r.choice([-4, -3, 2, 5]); k = r.choice([1, 2])
    f = k * x**3 + c * x
    fa, fb = f.subs(x, a), f.subs(x, b)
    avg = (fb - fa) / (b - a)
    fp = diff(f, x); ends = (fp.subs(x, a) + fp.subs(x, b)) / 2
    q = rf"Let $f(x) = {L(f)}$. What is the average rate of change of $f$ over the interval $[{a}, {b}]$?"
    return item("1.1", q, (num(avg), rf"$\dfrac{{f({b}) - f({a})}}{{{b} - ({a})}} = \dfrac{{{L(fb)} - ({L(fa)})}}{{{b - a}}} = {L(avg)}$."),
        [(num(fb - fa), rf"${L(fb - fa)}$ is $f({b}) - f({a})$, the change in $f$, not divided by the length of the interval, ${b - a}$."),
         (num(ends), rf"${L(ends)}$ averages the slopes $f'({a})$ and $f'({b})$. The average rate of change uses values of $f$ at the endpoints, not values of $f'$."),
         (num(Rational(b - a) / (fb - fa)) if fb != fa else "0", rf"This is $\dfrac{{{b} - ({a})}}{{f({b}) - f({a})}}$, the change in $x$ over the change in $f$, which is upside down.")])

def t11_table(r):
    a = r.choice([1, 2, 3]); k = r.choice([2, 3]); c = r.choice([1, 4, 5])
    f = k * x**2 + c
    vals = {v: f.subs(x, v) for v in (Rational(a) - Rational(1, 100), Rational(a), Rational(a) + Rational(1, 100))}
    lo, mid, hi = [vals[v] for v in sorted(vals)]
    est = (hi - lo) / Rational(2, 100)
    tab = rf"$x$: ${float(a - 0.01):g}$, ${a}$, ${float(a + 0.01):g}$; $f(x)$: ${float(lo):g}$, ${float(mid):g}$, ${float(hi):g}$"
    q = rf"For a differentiable function $f$, the values below are known. {tab}. Which of the following is the best estimate of the instantaneous rate of change of $f$ at $x = {a}$?"
    return item("1.1", q, (num(est), rf"The slope of the secant line through the points on either side is $\dfrac{{{float(hi):g} - {float(lo):g}}}{{{float(a + 0.01):g} - {float(a - 0.01):g}}} = \dfrac{{{float(hi - lo):g}}}{{0.02}} = {L(est)}$, which estimates the instantaneous rate at $x = {a}$."),
        [(num(mid), rf"${L(mid)}$ is the value $f({a})$, not a rate of change."),
         (num(hi - lo), rf"${float(hi - lo):g}$ is the change in $f$ over the interval, not divided by the change in $x$, $0.02$."),
         (num(Rational(2, 100) / (hi - lo)), r"This is the change in $x$ divided by the change in $f$, the reciprocal of the slope.")])

def t11_def(r):
    fs = [(x**3, "x^{3}"), (x**2 + 3 * x, "x^{2} + 3x"), (5 * x - x**2, "5x - x^{2}"), (4 / x, r"\frac{4}{x}")]
    f, ftex = r.choice(fs); a = r.choice([1, 2, 3])
    fa = f.subs(x, a); fah = L(f.subs(x, a + h)) if f != 4 / x else rf"\frac{{4}}{{{a} + h}}"
    if f == x**3: fah = rf"({a} + h)^{{3}}"
    if f == x**2 + 3 * x: fah = rf"({a} + h)^{{2}} + 3({a} + h)"
    if f == 5 * x - x**2: fah = rf"5({a} + h) - ({a} + h)^{{2}}"
    right = rf"\lim_{{h \to 0}} \frac{{{fah} - {L(fa)}}}{{h}}"
    q = rf"Let $f(x) = {ftex}$. Which of the following expressions gives the instantaneous rate of change of $f$ at $x = {a}$?"
    return item("1.1", q, (right, rf"The instantaneous rate of change is the limit, as $h \to 0$, of the average rate of change $\dfrac{{f({a} + h) - f({a})}}{{h}}$ over $[{a}, {a} + h]$, and $f({a}) = {L(fa)}$."),
        [(rf"\frac{{{fah} - {L(fa)}}}{{h}}", r"Without the limit, this is the average rate of change over an interval of length $h$, not the rate at an instant."),
         (rf"\lim_{{h \to 0}} \left({fah} - {L(fa)}\right)", r"This limit is the change in $f$ as the interval shrinks, which is $0$. It is missing the division by $h$."),
         (rf"\lim_{{h \to 0}} \frac{{{fah}}}{{h}}", rf"This divides $f({a} + h)$ by $h$ without subtracting $f({a}) = {L(fa)}$, so it is not a rate of change.")])

# ---------------------------------------------------------------- 1.2
def t12_onesided(r):
    a = r.choice([-1, 1, 2, 3]); p = r.choice([1, 2, 3]); q0 = r.choice([-3, -1, 4]); m0 = r.choice([2, -2, 3]); n0 = r.choice([1, 5, -4])
    e1 = p * x**2 + q0; e2 = m0 * x + n0
    L1, L2 = e1.subs(x, a), e2.subs(x, a)
    if L1 == L2: raise Skip("equal")
    side = r.choice(["-", "+"])
    want, other = (L1, L2) if side == "-" else (L2, L1)
    fdef = rf"f(x) = \begin{{cases}} {L(e1)}, & x < {a} \\ {L(e2)}, & x \ge {a} \end{{cases}}"
    q = rf"Let ${fdef}$. What is $\displaystyle \lim_{{x \to {a}^{side}}} f(x)$?"
    piece = L(e1) if side == "-" else L(e2)
    return item("1.2", q, (num(want), rf"For $x$ {'less' if side == '-' else 'greater'} than ${a}$, $f(x) = {piece}$, which approaches ${L(want)}$ as $x \to {a}^{side}$."),
        [(num(other), rf"${L(other)}$ is the limit from the {'right' if side == '-' else 'left'}, which uses the other piece of $f$."),
         (text_choice("The limit does not exist."), rf"A one-sided limit can exist even when the two-sided limit does not. Here the values approach ${L(want)}$ from the {'left' if side == '-' else 'right'}."),
         (num((L1 + L2) / 2), r"This averages the two one-sided limits. A one-sided limit uses only the piece of $f$ on that side.")])

def t12_param(r):
    a = r.choice([1, 2, 3]); c = r.choice([-2, 1, 3, 6]); b1 = r.choice([-1, 2, 5])
    k = Rational(a**2 + c - b1, a)
    fdef = rf"f(x) = \begin{{cases}} kx {pm(b1)}, & x < {a} \\ x^{{2}} {pm(c)}, & x > {a} \end{{cases}}"
    q = rf"Let ${fdef}$, where $k$ is a constant. For what value of $k$ does $\displaystyle \lim_{{x \to {a}}} f(x)$ exist?"
    return item("1.2", q, (num(k), rf"The limit exists when the one-sided limits agree: ${a}k + {b1} = {a**2 + c}$, so $k = {L(k)}$."),
        [(num(a**2 + c - b1), rf"${a**2 + c - b1}$ is ${a}k$, not $k$. Divide by ${a}$."),
         (num(Rational(a**2 + c + b1, a)), rf"This moves ${b1}$ to the other side of ${a}k {pm(b1)} = {a**2 + c}$ without changing its sign."),
         (text_choice("No value of $k$ makes the limit exist."), rf"Choosing $k$ so the left-hand limit ${a}k + {b1}$ equals the right-hand limit ${a**2 + c}$ makes the limit exist, even though $f({a})$ is undefined.")])

# ---------------------------------------------------------------- 1.3 graphs
GRAPH_N = [0]
def graph_set(r):
    """A piecewise linear graph with a jump at a and a removable point at c."""
    a = 1; c = r.choice([-2, -1]) ; x0, x1 = -3, 4
    y0 = r.choice([0, 1]); yc = r.choice([2, 3]); y1 = r.choice([3, 4])   # left piece from (x0,y0) to (a,y1), passes near c
    # left piece: line from (x0,y0) to (a,y1); value at c:
    sl = Rational(y1 - y0, a - x0); vc = y0 + sl * (c - x0)
    if not vc.is_integer: raise Skip("fractional hole")
    y2 = r.choice([-1, 0]); y3 = r.choice([2, 1])
    fa = y2; fc = r.choice([-2, 4]) if vc not in (-2, 4) else 0
    GRAPH_N[0] += 1
    sid = f"c1x-g{GRAPH_N[0]}"
    code = ("{ name: \"The graph of f\", label: \"Graph\", intro: String.raw`The graph of the function $f$ on the interval $[" + f"{x0}, {x1}" + "]$ is shown below. It consists of two line segments and one isolated point.`,\n"
            f"    sources: [{{ title: \"\", blocks: [{{ svg: graph({{ x: [{x0}, {x1}], y: [-3, 5], xname: \"x\", yname: \"y\",\n"
            f"      segments: [[{x0}, {y0}, {a}, {y1}], [{a}, {y2}, {x1}, {y3}]],\n"
            f"      dots: [[{x0}, {y0}, \"closed\"], [{c}, {float(vc):g}, \"open\"], [{c}, {fc}, \"closed\"], [{a}, {y1}, \"open\"], [{a}, {y2}, \"closed\"], [{x1}, {y3}, \"closed\"]],\n"
            f"      alt: \"Graph of f on [{x0}, {x1}]. A line rises from the filled point ({x0}, {y0}) to an open circle at ({a}, {y1}), with an open circle on it at ({c}, {float(vc):g}) and a separate filled point at ({c}, {fc}). A second line starts at the filled point ({a}, {y2}) and goes to the filled point ({x1}, {y3}).\" }}) }}] }}] }}")
    return sid, code, dict(a=a, c=c, vc=vc, fc=fc, y1=y1, y2=y2)

def t13_pair(r):
    sid, code, g = graph_set(r)
    a, c, vc, fc, y1, y2 = g["a"], g["c"], g["vc"], g["fc"], g["y1"], g["y2"]
    i1 = item("1.3", rf"The graph of $f$ is shown above. What is $\displaystyle \lim_{{x \to {c}}} f(x)$?",
        (num(vc), rf"As $x$ approaches ${c}$ from either side, the points on the line approach the open circle at $({c}, {L(vc)})$, so the limit is ${L(vc)}$."),
        [(num(fc), rf"${fc}$ is $f({c})$, the value at the isolated point. The limit depends on values near $x = {c}$, not at it."),
         (text_choice("The limit does not exist."), rf"The graph approaches the same height, ${L(vc)}$, from both sides of $x = {c}$, so the limit exists even though there is a hole."),
         (num(vc + fc) if vc + fc not in (vc, fc) else num(vc + 1), r"This adds the height of the hole and the height of the isolated point. The limit is the height the graph approaches.")], set_id=sid)
    side = r.choice(["-", "+"])
    want, other = (y1, y2) if side == "-" else (y2, y1)
    i2 = item("1.3", rf"The graph of $f$ is shown above. What is $\displaystyle \lim_{{x \to {a}^{side}}} f(x)$?",
        (num(want), rf"From the {'left' if side == '-' else 'right'}, the graph approaches the point at height ${want}$ as $x \to {a}^{side}$."),
        [(num(other), rf"${other}$ is the limit from the {'right' if side == '-' else 'left'}."),
         (text_choice("The limit does not exist."), r"The two-sided limit does not exist because the one-sided limits differ, but each one-sided limit exists."),
         (num(Rational(y1 + y2, 2)), r"This averages the two one-sided limits. A one-sided limit follows only the graph on that side.")], set_id=sid)
    return [i1, i2], sid, code

# ---------------------------------------------------------------- 1.4 tables
def t14_sin(r):
    k = r.choice([2, 3, 5]); n = r.choice([1, 2])
    xs = [-0.1, -0.01, -0.001, 0.001, 0.01, 0.1]
    import math
    vals = [math.sin(k * v) / (n * v) for v in xs]
    head = " & ".join(f"{v:g}" for v in xs)
    tab = "; ".join(f"$f({v:g}) = {val:.6f}$" for v, val in zip(xs, vals))
    lim = Rational(k, n)
    q = rf"The function $f$ is defined for $x \ne 0$. Selected values, rounded to six decimal places, are {tab}. Based on these values, what is the best estimate of $\displaystyle \lim_{{x \to 0}} f(x)$?"
    return item("1.4", q, (num(lim) if lim.is_integer else num(lim, 1), rf"From both sides the values close in on ${float(lim):g}$ as $x$ gets close to $0$."),
        [("0", r"$0$ is the input $x$ approaches, not the value the outputs approach."),
         (text_choice("The limit does not exist, because $f(0)$ is undefined."), r"A limit can exist where the function is undefined. The table shows the outputs approaching one number from both sides."),
         (f"{vals[-1]:.2f}" if abs(vals[-1] - float(lim)) > 0.05 else f"{float(lim) / 2:g}", r"This is a value far from $x = 0$ in the table, not the value the outputs approach." if abs(vals[-1] - float(lim)) > 0.05 else r"This is half of the value the outputs approach.")], calc=False)

def t14_jump(r):
    a = r.choice([1, 2, 4]); A = r.choice([3, 5, -2]); B = r.choice([1, -1, 6])
    if A == B: raise Skip("same")
    d = [0.1, 0.01, 0.001]
    left = [(a - e, A - 2 * e) for e in d]; right = [(a + e, B + 3 * e) for e in reversed(d)]
    rows = left + right
    tab = "; ".join(f"$h({v:g}) = {w:g}$" for v, w in rows)
    side = r.choice(["+", "-"])
    want, other = (B, A) if side == "+" else (A, B)
    q = rf"Selected values of a function $h$ are {tab}. Based on the values, which is the best estimate of $\displaystyle \lim_{{x \to {a}^{side}}} h(x)$?"
    return item("1.4", q, (num(want), rf"As $x$ approaches ${a}$ from the {'right' if side == '+' else 'left'}, the values of $h$ close in on ${want}$."),
        [(num(other), rf"${other}$ is what the values approach from the {'left' if side == '+' else 'right'}."),
         (text_choice("The limit does not exist."), r"The two-sided limit does not exist, but each one-sided limit does."),
         (num(Rational(A + B, 2)), r"This averages the two sides. A one-sided limit uses only the values on one side.")])

# ---------------------------------------------------------------- 1.5
def t15_props(r):
    c = r.choice([2, 3, -1, 5]); A = r.choice([4, -2, 6, 8, -3]); B = r.choice([3, -5, 1, 2]); k = r.choice([2, 3, 5, -4])
    if A == B: raise Skip("same")
    val = Rational(A * B + k, A - B)
    q = rf"If $\displaystyle \lim_{{x \to {c}}} f(x) = {A}$ and $\displaystyle \lim_{{x \to {c}}} g(x) = {B}$, what is $\displaystyle \lim_{{x \to {c}}} \frac{{f(x)\,g(x) + {k}}}{{f(x) - g(x)}}$?"
    return item("1.5", q, (num(val), rf"By the limit laws, the limit is $\dfrac{{({A})({B}) + {k}}}{{{A} - ({B})}} = \dfrac{{{A * B + k}}}{{{A - B}}} = {L(val)}$, since the limit of the denominator is not $0$."),
        [(num(Rational(A * B + k, A + B)) if A + B else "0", rf"This uses ${A} + ({B})$ in the denominator instead of ${A} - ({B})$."),
         (num(A * B + k), r"This is only the limit of the numerator. The denominator's limit must be divided into it."),
         (num(Rational(A + B + k, A - B)), rf"This adds the limits in the numerator, ${A} + ({B})$, where the expression multiplies them.")])

def t15_xsq(r):
    c = r.choice([2, 3, -2, 4]); A = r.choice([5, -1, 3, 2]); B = r.choice([4, 7, -3, 6])
    val = c**2 * A - B
    q = rf"Given that $\displaystyle \lim_{{x \to {c}}} f(x) = {A}$ and $\displaystyle \lim_{{x \to {c}}} g(x) = {B}$, what is $\displaystyle \lim_{{x \to {c}}} \left[x^{{2}} f(x) - g(x)\right]$?"
    return item("1.5", q, (num(val), rf"The limit of $x^{{2}}$ is ${c**2}$, so the limit is ${c**2}({A}) - ({B}) = {val}$."),
        [(num(A - B), r"This leaves out the factor $x^{2}$, whose limit is not $1$."),
         (num(c * A - B), rf"This uses ${c}$ for the limit of $x^{{2}}$ instead of ${c**2}$."),
         (num(c**2 * A + B), rf"This adds ${B}$ instead of subtracting it.")])

# ---------------------------------------------------------------- 1.6
def t16_factor(r):
    a = r.choice([-3, -2, 2, 3, 4]); b = r.choice([-5, -1, 1, 5]); c = r.choice([-4, 0, 6])
    if len({a, b, c}) < 3: raise Skip("dup")
    num_ = expand((x - a) * (x - b)); den = expand((x - a) * (x - c))
    val = Rational(a - b, a - c)
    q = rf"What is $\displaystyle \lim_{{x \to {a}}} \frac{{{L(num_)}}}{{{L(den)}}}$?"
    return item("1.6", q, (num(val), rf"Both factor with $x - ({a})$: $\dfrac{{(x - ({a}))(x - ({b}))}}{{(x - ({a}))(x - ({c}))}}$. Canceling and substituting $x = {a}$ gives $\dfrac{{{a} - ({b})}}{{{a} - ({c})}} = {L(val)}$."),
        [(text_choice("The limit does not exist."), rf"Substituting gives $\dfrac{{0}}{{0}}$, which is indeterminate, not a sign that the limit fails to exist. Factoring removes the common factor."),
         ("0", r"$\dfrac{0}{0}$ is not $0$. It means more work is needed."),
         (num(Rational(b, c)) if c else num(Rational(-b, 1)), rf"This cancels the terms in $x$ instead of the factor $x - ({a})$, which is not allowed.")])

def t16_root(r):
    qv = r.choice([2, 3, 4]); p = r.choice([1, 3, 5, 7]); a0 = qv**2 - p
    val = Rational(1, 2 * qv)
    q = rf"What is $\displaystyle \lim_{{x \to {a0}}} \frac{{\sqrt{{x + {p}}} - {qv}}}{{x - {L(a0)}}}$?" if a0 >= 0 else rf"What is $\displaystyle \lim_{{x \to {a0}}} \frac{{\sqrt{{x + {p}}} - {qv}}}{{x + {-a0}}}$?"
    return item("1.6", q, (num(val), rf"Multiply by the conjugate $\sqrt{{x + {p}}} + {qv}$: the numerator becomes $x + {p} - {qv**2} = x - ({a0})$, which cancels, leaving $\dfrac{{1}}{{\sqrt{{x + {p}}} + {qv}}} \to \dfrac{{1}}{{{2 * qv}}}$."),
        [("0", r"Substitution gives $\dfrac{0}{0}$, which is indeterminate, not $0$."),
         (num(Rational(1, qv)), rf"This leaves out the second term of the conjugate: $\sqrt{{x + {p}}} + {qv}$ approaches ${2 * qv}$, not ${qv}$."),
         (num(2 * qv), r"This is the reciprocal of the limit. The conjugate ends up in the denominator.")])

def t16_complex(r):
    a = r.choice([3, 4, 5, 6])
    val = Rational(-1, a**2)
    q = rf"What is $\displaystyle \lim_{{x \to {a}}} \frac{{\frac{{1}}{{x}} - \frac{{1}}{{{a}}}}}{{x - {a}}}$?"
    return item("1.6", q, (num(val), rf"$\dfrac{{1}}{{x}} - \dfrac{{1}}{{{a}}} = \dfrac{{{a} - x}}{{{a}x}} = -\dfrac{{x - {a}}}{{{a}x}}$. Dividing by $x - {a}$ leaves $-\dfrac{{1}}{{{a}x}} \to -\dfrac{{1}}{{{a**2}}}$."),
        [(num(Rational(1, a**2)), rf"The sign is lost: ${a} - x = -(x - {a})$."),
         ("0", r"$\dfrac{0}{0}$ is indeterminate. Combine the fractions first."),
         (num(Rational(-1, a)), rf"After canceling, the expression is $-\dfrac{{1}}{{{a}x}}$, which approaches $-\dfrac{{1}}{{{a**2}}}$, not $-\dfrac{{1}}{{{a}}}$.")])

def t16_trig(r):
    k = r.choice([2, 3, 5]); mm = r.choice([4, 7, 3]);
    if k == mm: raise Skip("same")
    val = Rational(k, mm)
    q = rf"What is $\displaystyle \lim_{{x \to 0}} \frac{{\sin({k}x)}}{{{mm}x}}$?"
    return item("1.6", q, (num(val), rf"$\dfrac{{\sin({k}x)}}{{{mm}x}} = \dfrac{{{k}}}{{{mm}}} \cdot \dfrac{{\sin({k}x)}}{{{k}x}}$, and $\dfrac{{\sin({k}x)}}{{{k}x}} \to 1$, so the limit is ${L(val)}$."),
        [(num(Rational(mm, k)), r"This is the reciprocal. The factor multiplying the sine's argument goes in the numerator."),
         ("1", rf"$\dfrac{{\sin u}}{{u}} \to 1$ only when the denominator matches the argument. Here the argument is ${k}x$ and the denominator is ${mm}x$."),
         ("0", r"$\dfrac{0}{0}$ is indeterminate, not $0$.")])

def t16_trig2(r):
    k = r.choice([2, 3, 4])
    q = rf"What is $\displaystyle \lim_{{x \to 0}} \frac{{\sin^{{2}}({k}x)}}{{x^{{2}}}}$?"
    return item("1.6", q, (num(k**2), rf"$\dfrac{{\sin^{{2}}({k}x)}}{{x^{{2}}}} = {k**2}\left(\dfrac{{\sin({k}x)}}{{{k}x}}\right)^{{2}} \to {k**2}(1)^{{2}} = {k**2}$."),
        [(num(k), rf"This handles one factor of $\dfrac{{\sin({k}x)}}{{x}}$ but not the square."),
         (num(2 * k), r"Squaring does not double. Each factor contributes the constant once."),
         ("1", rf"$\dfrac{{\sin u}}{{u}} \to 1$ needs $u = {k}x$ in the denominator, so constants of ${k}$ appear.")])

def t16_abs(r):
    a = r.choice([1, 2, 3])
    side = r.choice(["-", "+"])
    val = -2 * a if side == "-" else 2 * a
    q = rf"What is $\displaystyle \lim_{{x \to {a}^{side}}} \frac{{x^{{2}} - {a**2}}}{{\left|x - {a}\right|}}$?"
    return item("1.6", q, (num(val), rf"For $x$ {'<' if side == '-' else '>'} ${a}$, $|x - {a}| = {'-(x - ' + str(a) + ')' if side == '-' else 'x - ' + str(a)}$, so the expression is ${'-' if side == '-' else ''}(x + {a})$, which approaches ${val}$."),
        [(num(-val), rf"This treats $|x - {a}|$ as {'$x - ' + str(a) + '$' if side == '-' else '$-(x - ' + str(a) + ')$'}, which is the formula for the other side of ${a}$."),
         (text_choice("The limit does not exist."), r"The two-sided limit does not exist, but this one-sided limit does."),
         ("0", r"Substitution gives $\dfrac{0}{0}$, which is indeterminate, not $0$.")])

def t16_cube(r):
    a = r.choice([1, 2, 3, -2])
    val = 3 * a**2
    q = rf"What is $\displaystyle \lim_{{x \to {a}}} \frac{{x^{{3}} - {L(a**3)}}}{{x - ({a})}}$?" if a < 0 else rf"What is $\displaystyle \lim_{{x \to {a}}} \frac{{x^{{3}} - {a**3}}}{{x - {a}}}$?"
    return item("1.6", q, (num(val), rf"$x^{{3}} - {a**3} = (x - {a})(x^{{2}} + {a}x + {a**2})$. After canceling, substituting gives ${a**2} + {a**2} + {a**2} = {val}$."),
        [(num(a**2), rf"${a**2}$ is only one of the three terms of $x^{{2}} + {a}x + {a**2}$ at $x = {a}$."),
         (num(3 * a), r"The factor is $x^{2} + ax + a^{2}$; at $x = a$ it is $3a^{2}$, not $3a$."),
         (text_choice("The limit does not exist."), r"$\dfrac{0}{0}$ is indeterminate. Factoring the difference of cubes removes the zero factor.")])

# ---------------------------------------------------------------- 1.7
def t17_direct(r):
    a = r.choice([3, 5, 6])
    good = rf"\displaystyle \lim_{{x \to {a}}} \frac{{x^{{2}} - {a**2}}}{{x + {a}}}"
    bads = [rf"\displaystyle \lim_{{x \to {a}}} \frac{{x^{{2}} - {a**2}}}{{x - {a}}}", rf"\displaystyle \lim_{{x \to {a**2}}} \frac{{\sqrt{{x}} - {a}}}{{x - {a**2}}}", rf"\displaystyle \lim_{{x \to 0}} \frac{{\sin x}}{{x}}"]
    q = r"Which limit can be found by substituting the value of $x$ directly into the expression?"
    return item("1.7", q, (good, rf"At $x = {a}$ the denominator is ${2 * a}$, not $0$, and the function is continuous there, so substituting gives $\dfrac{{0}}{{{2 * a}}} = 0$, the limit."),
        [(bads[0], r"Substituting gives $\dfrac{0}{0}$, an indeterminate form, so the expression must be factored first."),
         (bads[1], rf"Substituting gives $\dfrac{{0}}{{0}}$; multiplying by the conjugate, or factoring $x - {a**2}$ as $(\sqrt{{x}} - {a})(\sqrt{{x}} + {a})$, is needed first."),
         (bads[2], r"Substituting gives $\dfrac{0}{0}$; this limit, $1$, comes from the squeeze theorem, not from substitution.")])

def t17_pick(r):
    a = r.choice([1, 2, 3]); b = r.choice([4, 5, 6])
    num_ = expand((x - a) * (x + b)); val = a + b
    q = rf"What is $\displaystyle \lim_{{x \to {a}}} \frac{{{L(num_)}}}{{x - {a}}}$, and which procedure finds it?"
    return item("1.7", q, (text_choice(rf"${val}$, by factoring and canceling $x - {a}$"), rf"Substitution gives $\dfrac{{0}}{{0}}$. Factoring the numerator as $(x - {a})(x + {b})$ and canceling leaves $x + {b} \to {val}$."),
        [(text_choice(r"$0$, by direct substitution"), r"Direct substitution gives $\dfrac{0}{0}$, which is indeterminate, not $0$."),
         (text_choice(rf"${val}$, by direct substitution"), r"The value is right, but direct substitution gives $\dfrac{0}{0}$. Factoring is the step that finds it."),
         (text_choice(r"The limit does not exist, because the denominator approaches $0$."), r"A denominator approaching $0$ does not settle the question when the numerator also approaches $0$.")])

# ---------------------------------------------------------------- 1.8
def t18_bounds(r):
    a = r.choice([1, 2, 3]); c = r.choice([0, 1, 4])
    g = 2 * a * x - a**2 + c; hh = x**2 + c
    val = a**2 + c
    q = rf"The function $f$ satisfies ${L(g)} \le f(x) \le {L(hh)}$ for all $x$. What is $\displaystyle \lim_{{x \to {a}}} f(x)$?"
    return item("1.8", q, (num(val), rf"At $x = {a}$ both bounds equal ${val}$: ${L(g.subs(x, a))} = {L(hh.subs(x, a))}$. By the squeeze theorem, $\displaystyle \lim_{{x \to {a}}} f(x) = {val}$."),
        [(text_choice("It cannot be determined from the information given."), rf"The squeeze theorem applies: both bounding functions approach ${val}$ as $x \to {a}$, so $f$ must too."),
         (num(2 * a), rf"${2 * a}$ is the slope of the lower bound. The limit is a value of $f$, not a slope."),
         (num(c), rf"${c}$ is the value of the upper bound at $x = 0$, not at $x = {a}$.")])

def t18_osc(r):
    n = r.choice([1, 2, 3]); k = r.choice([2, 3, 5]); fn = r.choice(["sin", "cos"])
    q = rf"What is $\displaystyle \lim_{{x \to 0}} x^{{{n}}} \{fn}\left(\frac{{{k}}}{{x}}\right)$?" if n > 1 else rf"What is $\displaystyle \lim_{{x \to 0}} x \{fn}\left(\frac{{{k}}}{{x}}\right)$?"
    xn = f"x^{{{n}}}" if n > 1 else "x"
    bound = f"|x|^{{{n}}}" if n > 1 else "|x|"
    return item("1.8", q, ("0", rf"Since $-1 \le \{fn}\left(\dfrac{{{k}}}{{x}}\right) \le 1$, the product is between $-{bound}$ and ${bound}$, and both approach $0$. By the squeeze theorem the limit is $0$."),
        [(num(k), rf"${k}$ comes from treating $\{fn}\left(\dfrac{{{k}}}{{x}}\right)$ as if it behaved like $\dfrac{{{k}}}{{x}}$; that is true only for sine of a small angle, and here the angle grows without bound."),
         (text_choice("The limit does not exist."), rf"$\{fn}\left(\dfrac{{{k}}}{{x}}\right)$ alone has no limit at $0$, but multiplying by ${xn}$ squeezes the product to $0$."),
         ("1", r"The product is squeezed between two functions that approach $0$, not $1$.")])

# ---------------------------------------------------------------- 1.9
def t19_rep(r):
    a = r.choice([1, 2, 3]); p = r.choice([1, 3, -2]); q0 = r.choice([2, 4, 5]); r0 = a**2 + p - q0 * a
    G = r.choice([3, -2, 5, 4]); ga = G + r.choice([1, 2, -3])
    Fv = a**2 + p
    d = [0.1, 0.01]
    tab = "; ".join([f"$g({a - e:g}) = {G - e:g}$" for e in d] + [f"$g({a}) = {ga}$"] + [f"$g({a + e:g}) = {G + e:g}$" for e in reversed(d)])
    rtex = pm(r0)
    fdef = rf"f(x) = \begin{{cases}} {L(x**2 + p)}, & x < {a} \\ {L(q0 * x + r0)}, & x \ge {a} \end{{cases}}"
    qq = rf"Let ${fdef}$. Selected values of a function $g$ are {tab}, and the values of $g$ near ${a}$ follow this pattern. What is $\displaystyle \lim_{{x \to {a}}} f(x)\,g(x)$?"
    return item("1.9", qq, (num(Fv * G), rf"From both sides $f(x) \to {Fv}$ (${a**2} + {p} = {q0}({a}) {rtex}$), and the table shows $g(x) \to {G}$. The limit of the product is ${Fv}({G}) = {Fv * G}$."),
        [(num(Fv * ga), rf"This uses $g({a}) = {ga}$ in place of the limit of $g$, which is ${G}$. A limit depends on values near ${a}$, not at it."),
         (num(Fv + G), r"This adds the limits. The expression is a product."),
         (text_choice(r"The limit does not exist, because $f$ is defined by different formulas on each side."), rf"Both formulas give ${Fv}$ at $x = {a}$, so $\displaystyle \lim_{{x \to {a}}} f(x)$ exists.")])

# ---------------------------------------------------------------- 1.10
def t110_types(r):
    a = r.choice([1, 2, 3]); b = r.choice([-4, -1, 5])
    if a == b or a == -b: raise Skip("dup")
    num_ = expand((x - a) * (x + a)); den = expand((x - a) * (x - b))
    q = rf"Let $f(x) = \dfrac{{{L(num_)}}}{{{L(den)}}}$. Which of the following describes the discontinuities of $f$?"
    return item("1.10", q, (text_choice(rf"A removable discontinuity at $x = {a}$ and a vertical asymptote at $x = {b}$"), rf"$f(x) = \dfrac{{(x - {a})(x + {a})}}{{(x - {a})(x - ({b}))}}$. The factor $x - {a}$ cancels, so the limit at ${a}$ exists (a hole). At $x = {b}$ only the denominator is $0$, so $f$ grows without bound."),
        [(text_choice(rf"Vertical asymptotes at $x = {a}$ and $x = {b}$"), rf"At $x = {a}$ the numerator is also $0$; after canceling, the limit exists, so it is a hole, not an asymptote."),
         (text_choice(rf"A removable discontinuity at $x = {b}$ and a vertical asymptote at $x = {a}$"), r"The removable one is where the common factor cancels."),
         (text_choice(rf"A jump discontinuity at $x = {a}$ and a vertical asymptote at $x = {b}$"), rf"A jump needs different one-sided limits. At $x = {a}$ both one-sided limits equal ${L(Rational(2 * a, a - b))}$.")])

def t110_piece(r):
    a = r.choice([0, 1, 2]); p = r.choice([1, 2]); c1 = r.choice([3, -1]); c2 = r.choice([5, 0])
    e1 = p * x + c1; e2 = x**2 + c2
    if e1.subs(x, a) == e2.subs(x, a): raise Skip("cont")
    fdef = rf"f(x) = \begin{{cases}} {L(e1)}, & x < {a} \\ {L(e2)}, & x \ge {a} \end{{cases}}"
    q = rf"What type of discontinuity does $f$ have at $x = {a}$, where ${fdef}$?"
    return item("1.10", q, (text_choice("A jump discontinuity"), rf"The one-sided limits are ${L(e1.subs(x, a))}$ from the left and ${L(e2.subs(x, a))}$ from the right. Both are finite but unequal, which is a jump."),
        [(text_choice("A removable discontinuity"), r"A removable discontinuity has a two-sided limit. Here the one-sided limits differ."),
         (text_choice("An infinite discontinuity"), r"Both pieces are polynomials, so neither one-sided limit is infinite."),
         (text_choice("No discontinuity; $f$ is continuous there"), r"Continuity needs equal one-sided limits, and these differ.")])

# ---------------------------------------------------------------- 1.11
def t111_point(r):
    a = r.choice([1, 2, 3]); k = r.choice([2, 3]); val = r.choice([0, 1, 7])
    e = k * x + 1
    if e.subs(x, a) == val: raise Skip("cont")
    fdef = rf"f(x) = \begin{{cases}} {L(e)}, & x \ne {a} \\ {val}, & x = {a} \end{{cases}}"
    q = rf"Let ${fdef}$. Which of the following is true about $f$ at $x = {a}$?"
    lv = e.subs(x, a)
    return item("1.11", q, (text_choice(rf"$\displaystyle \lim_{{x \to {a}}} f(x)$ exists but does not equal $f({a})$, so $f$ is not continuous at $x = {a}$."), rf"The limit is ${lv}$ and $f({a}) = {val}$. Continuity requires them to be equal."),
        [(text_choice(rf"$f$ is continuous at $x = {a}$ because $f({a})$ is defined."), r"Being defined is only one of the three conditions; the limit must also equal the value."),
         (text_choice(rf"$\displaystyle \lim_{{x \to {a}}} f(x)$ does not exist."), rf"Near $x = {a}$, $f(x) = {L(e)}$, which approaches ${lv}$ from both sides."),
         (text_choice(rf"$f({a})$ is undefined."), rf"$f({a}) = {val}$ by the second line of the definition.")])

# ---------------------------------------------------------------- 1.12
def t112_domain(r):
    a = r.choice([0, 1, 2]); b = a + r.choice([2, 3])
    q = rf"On which of the following is the function $f(x) = \dfrac{{\ln(x - {a})}}{{x - {b}}}$ continuous?" if a else rf"On which of the following is the function $f(x) = \dfrac{{\ln x}}{{x - {b}}}$ continuous?"
    return item("1.12", q, (text_choice(rf"$({a}, {b}) \cup ({b}, \infty)$"), rf"$\ln(x - {a})$ needs $x > {a}$, and the denominator is $0$ at $x = {b}$. On the rest of the domain, quotients of continuous functions are continuous."),
        [(text_choice(rf"$({a}, \infty)$"), rf"This includes $x = {b}$, where the denominator is $0$."),
         (text_choice(rf"$(-\infty, {b}) \cup ({b}, \infty)$"), rf"This ignores the logarithm, which is defined only for $x > {a}$."),
         (text_choice(rf"$[{a}, {b}) \cup ({b}, \infty)$"), rf"$\ln 0$ is undefined, so $x = {a}$ is not in the domain.")])

def t112_which(r):
    p = r.choice([1, 4, 9]); q2 = r.choice([2, 3])
    good = rf"\frac{{x}}{{x^{{2}} + {p}}}"
    q = r"Which function is continuous at every real number?"
    return item("1.12", q, (good, rf"The denominator $x^{{2}} + {p}$ is never $0$, so this quotient of polynomials is continuous everywhere."),
        [(rf"\frac{{x}}{{x^{{2}} - {q2**2}}}", rf"The denominator is $0$ at $x = \pm {q2}$."),
         (rf"\sqrt{{x^{{2}} - {p}}}", rf"The square root is undefined where $x^{{2}} < {p}$."),
         (rf"\ln\left(x^{{2}}\right)", r"$\ln\left(x^{2}\right)$ is undefined at $x = 0$.")])

def t112_k(r):
    a = r.choice([1, 2]); m0 = r.choice([3, 4, 5])
    k = Rational(m0 * a - 1, a**2 + 1)
    fdef = rf"f(x) = \begin{{cases}} kx^{{2}} + 1, & x \le {a} \\ {m0}x - k, & x > {a} \end{{cases}}"
    q = rf"Let ${fdef}$, where $k$ is a constant. For what value of $k$ is $f$ continuous for all real numbers?"
    return item("1.12", q, (num(k), rf"Each piece is continuous, so only $x = {a}$ matters. Setting ${a**2}k + 1 = {m0 * a} - k$ gives ${a**2 + 1}k = {m0 * a - 1}$, so $k = {L(k)}$."),
        [(num(Rational(m0 * a - 1, a**2 - 1)) if a != 1 else num(Rational(m0 * a + 1, a**2 + 1)), r"This comes from a sign error when collecting the $k$ terms or the constants."),
         (num(Rational(m0 * a - 1, a**2)), r"This forgets the $k$ in the right-hand piece when solving."),
         (num(m0 * a - 1), rf"This is ${a**2 + 1}k$, not $k$.")])

def t112_sqrt(r):
    c = r.choice([4, 5, 9]); d = r.choice([1, 2])
    q = rf"On which of the following intervals is $f(x) = \dfrac{{\sqrt{{{c} - x}}}}{{x + {d}}}$ continuous?"
    return item("1.12", q, (text_choice(rf"$(-\infty, -{d}) \cup (-{d}, {c}]$"), rf"The square root needs $x \le {c}$, and the denominator is $0$ at $x = -{d}$. At $x = {c}$, $f$ is continuous from the left."),
        [(text_choice(rf"$(-\infty, {c}]$"), rf"This includes $x = -{d}$, where the denominator is $0$."),
         (text_choice(rf"$(-{d}, {c})$"), rf"$f$ is also defined and continuous for $x < -{d}$, and at $x = {c}$ from the left."),
         (text_choice(rf"$[{c}, \infty)$"), rf"The square root of ${c} - x$ is undefined for $x > {c}$.")])

# ---------------------------------------------------------------- 1.13
def t113_fill(r):
    a = r.choice([1, 2, 3, -1]); b = r.choice([-3, 2, 5])
    if a == b: raise Skip("dup")
    num_ = expand((x - a) * (x - b)); val = a - b
    q = rf"Let $f(x) = \dfrac{{{L(num_)}}}{{{L(x - a)}}}$ for $x \ne {a}$. What value should $f({a})$ be given so that $f$ is continuous at $x = {a}$?"
    return item("1.13", q, (num(val), rf"For $x \ne {a}$, $f(x) = x - ({b})$, so $\displaystyle \lim_{{x \to {a}}} f(x) = {val}$. Defining $f({a}) = {val}$ removes the discontinuity."),
        [(num(-val) if val else "1", r"This subtracts in the wrong order after canceling."),
         ("0", r"$\dfrac{0}{0}$ is not $0$. The value must match the limit."),
         (text_choice("No value, because $f$ has a vertical asymptote at that point."), rf"The factor $x - ({a})$ cancels, so the discontinuity is removable.")])

def t113_sin(r):
    k = r.choice([3, 4, 6])
    q = rf"Let $g(x) = \dfrac{{\sin({k}x)}}{{x}}$ for $x \ne 0$. What value of $g(0)$ makes $g$ continuous at $x = 0$?"
    return item("1.13", q, (num(k), rf"$\dfrac{{\sin({k}x)}}{{x}} = {k} \cdot \dfrac{{\sin({k}x)}}{{{k}x}} \to {k}$, so $g(0) = {k}$ makes $g$ continuous."),
        [("1", rf"$\dfrac{{\sin u}}{{u}} \to 1$ needs $u = {k}x$ in the denominator, which brings a factor of ${k}$."),
         ("0", r"$\sin 0 = 0$, but the denominator also approaches $0$, so the limit is not $0$."),
         (num(Rational(1, k)), r"This is the reciprocal of the limit.")])

# ---------------------------------------------------------------- 1.14
def t114_side(r):
    a = r.choice([1, 2, 3]); p = r.choice([1, 2, 4])
    side = r.choice(["-", "+"])
    ans = r"\infty" if side == "+" else r"-\infty"
    q = rf"What is $\displaystyle \lim_{{x \to {a}^{side}}} \frac{{x + {p}}}{{x - {a}}}$?"
    return item("1.14", q, (ans, rf"The numerator approaches ${a + p} > 0$, and the denominator approaches $0$ through {'positive' if side == '+' else 'negative'} values, so the quotient {'grows' if side == '+' else 'decreases'} without bound."),
        [(r"-\infty" if side == "+" else r"\infty", rf"Check the sign of $x - {a}$ on this side: it is {'positive' if side == '+' else 'negative'}."),
         (num(a + p), rf"${a + p}$ is the limit of the numerator only."),
         ("0", r"A denominator approaching $0$ with a nonzero numerator makes the quotient large, not $0$.")])

def t114_va(r):
    a = r.choice([1, 2, 3]); b = r.choice([-2, 4, 5])
    if a == b or -a == b: raise Skip("dup")
    num_ = expand((x - a) * (x + 2 * a)); den = expand((x - a) * (x - b))
    q = rf"What are all vertical asymptotes of the graph of $y = \dfrac{{{L(num_)}}}{{{L(den)}}}$?"
    return item("1.14", q, (text_choice(rf"$x = {b}$ only"), rf"The factor $x - {a}$ cancels, leaving $\dfrac{{x + {2 * a}}}{{x - ({b})}}$, which grows without bound only as $x \to {b}$."),
        [(text_choice(rf"$x = {a}$ and $x = {b}$"), rf"At $x = {a}$ the common factor cancels, so the graph has a hole there, not an asymptote."),
         (text_choice(rf"$x = {a}$ only"), rf"$x = {a}$ is the hole. The asymptote is where only the denominator is $0$."),
         (text_choice(rf"$x = -{2 * a}$ only"), rf"$x = -{2 * a}$ makes the numerator $0$, which gives an $x$-intercept, not an asymptote.")])

# ---------------------------------------------------------------- 1.15
def t115_same(r):
    p = r.choice([2, 3, -4, 6]); s = r.choice([5, 2, 3]); q0 = r.choice([1, -7]); rr = r.choice([4, 9]); u = r.choice([1, -2])
    if p == s: raise Skip("same")
    side = r.choice([r"\infty", r"-\infty"])
    q = rf"What is $\displaystyle \lim_{{x \to {side}}} \frac{{{L(p * x**2 + q0 * x + rr)}}}{{{L(s * x**2 + u)}}}$?"
    return item("1.15", q, (num(Rational(p, s)), rf"Divide numerator and denominator by $x^{{2}}$: the other terms approach $0$, leaving $\dfrac{{{p}}}{{{s}}}$."),
        [(num(Rational(rr, u)), r"This is the ratio of the constant terms, which matters as $x \to 0$, not at infinity."),
         ("0", r"The degrees are equal, so the limit is the ratio of the leading coefficients, not $0$."),
         (r"\infty", r"The numerator and denominator grow at the same rate, so the quotient approaches a finite number.")])

def t115_lower(r):
    p = r.choice([3, 5, -2]); s = r.choice([2, 4]); q0 = r.choice([1, 6])
    q = rf"What is $\displaystyle \lim_{{x \to \infty}} \frac{{{L(p * x**2 + q0)}}}{{{L(s * x**3 - x)}}}$?"
    return item("1.15", q, ("0", r"The degree of the denominator is greater, so dividing by $x^{3}$ sends every numerator term to $0$ while the denominator approaches a nonzero constant."),
        [(num(Rational(p, s)), r"The ratio of leading coefficients is the limit only when the degrees are equal."),
         (r"\infty", r"The denominator grows faster than the numerator, so the quotient shrinks toward $0$."),
         (num(Rational(q0, -1)) if q0 != 0 else "1", r"This compares low-order terms, which do not matter as $x$ grows.")])

def t115_higher(r):
    p = r.choice([2, -3]); s = r.choice([1, 5])
    side = r.choice([r"\infty", r"-\infty"])
    # (p x^3 + 1)/(s x^2 + 4): behaves like (p/s) x
    sign = (1 if p * s > 0 else -1) * (1 if side == r"\infty" else -1)
    ans = r"\infty" if sign > 0 else r"-\infty"
    q = rf"What is $\displaystyle \lim_{{x \to {side}}} \frac{{{L(p * x**3 + 1)}}}{{{L(s * x**2 + 4)}}}$?"
    return item("1.15", q, (ans, rf"For large $|x|$ the quotient behaves like $\dfrac{{{p}x^{{3}}}}{{{s}x^{{2}}}} = {L(Rational(p, s))}x$, which goes to ${ans}$ as $x \to {side}$."),
        [(r"-\infty" if ans == r"\infty" else r"\infty", rf"Check the sign of ${L(Rational(p, s))}x$ as $x \to {side}$."),
         (num(Rational(p, s)), r"The ratio of leading coefficients is the limit only when the degrees are equal."),
         ("0", r"The numerator has the higher degree, so the quotient grows without bound.")])

def t115_root(r):
    p = r.choice([2, 3, 4]); s = r.choice([1, 2, 5]); q0 = r.choice([1, 7]); u = r.choice([3, -1])
    side = r.choice([r"\infty", r"-\infty"])
    val = Rational(p, s) if side == r"\infty" else Rational(-p, s)
    q = rf"What is $\displaystyle \lim_{{x \to {side}}} \frac{{\sqrt{{{p**2}x^{{2}} + {q0}}}}}{{{L(s * x + u)}}}$?"
    return item("1.15", q, (num(val), rf"For large $|x|$, $\sqrt{{{p**2}x^{{2}} + {q0}}} \approx {p}|x|$, and {'$|x| = x$ for $x > 0$' if side == r'\infty' else '$|x| = -x$ for $x < 0$'}, so the quotient approaches ${L(val)}$."),
        [(num(-val), r"This uses the wrong sign for $|x|$: $\sqrt{x^{2}} = |x|$, which is $x$ for positive $x$ and $-x$ for negative $x$."),
         (num(Rational(p**2, s)), rf"The square root of ${p**2}x^{{2}}$ is ${p}|x|$, not ${p**2}x$."),
         ("0", r"The numerator and denominator both grow like a multiple of $|x|$, so the limit is not $0$.")])

def t115_exp(r):
    a = r.choice([2, 3, 6]); b = r.choice([5, -1, 4]); c = r.choice([1, 4]); d = r.choice([2, 7])
    if Rational(a, c) == Rational(b, d): raise Skip("same")
    side = r.choice([r"\infty", r"-\infty"])
    val = Rational(a, c) if side == r"\infty" else Rational(b, d)
    other = Rational(b, d) if side == r"\infty" else Rational(a, c)
    q = rf"What is $\displaystyle \lim_{{x \to {side}}} \frac{{{L(a * exp(x) + b)}}}{{{L(c * exp(x) + d)}}}$?"
    return item("1.15", q, (num(val), (rf"As $x \to \infty$, $e^{{x}}$ dominates; dividing by $e^{{x}}$ leaves $\dfrac{{{a}}}{{{c}}}$." if side == r"\infty" else rf"As $x \to -\infty$, $e^{{x}} \to 0$, leaving $\dfrac{{{b}}}{{{d}}}$.")),
        [(num(other), rf"${L(other)}$ is the limit in the other direction."),
         (r"\infty", r"Numerator and denominator are balanced, so the limit is finite."),
         ("0", r"Neither the numerator nor the denominator dominates the other, so the limit is not $0$.")])

def t115_ha(r):
    p = r.choice([2, 3]); s = r.choice([1, 2]); u = r.choice([1, 4])
    q = rf"What are all horizontal asymptotes of the graph of $y = \dfrac{{\sqrt{{{p**2}x^{{2}} + 1}}}}{{{L(s * x + u)}}}$?"
    v = Rational(p, s)
    return item("1.15", q, (text_choice(rf"$y = {L(v)}$ and $y = -{L(v)}$"), rf"As $x \to \infty$ the quotient approaches $\dfrac{{{p}}}{{{s}}}$, and as $x \to -\infty$ it approaches $-\dfrac{{{p}}}{{{s}}}$, because $\sqrt{{x^{{2}}}} = |x|$."),
        [(text_choice(rf"$y = {L(v)}$ only"), rf"This is only the limit as $x \to \infty$. As $x \to -\infty$, $\sqrt{{{p**2}x^{{2}}}} = -{p}x$ gives the opposite sign."),
         (text_choice(rf"$y = {L(Rational(p**2, s))}$ only"), rf"The root of ${p**2}x^{{2}}$ is ${p}|x|$, not ${p**2}x$."),
         (text_choice("There are none."), r"The numerator and denominator both grow like $|x|$, so the quotient approaches finite values.")])

def t115_diff(r):
    k = r.choice([2, 4, 8, 10])
    q = rf"What is $\displaystyle \lim_{{x \to \infty}} \left(\sqrt{{x^{{2}} + {k}x}} - x\right)$?"
    val = Rational(k, 2)
    return item("1.15", q, (num(val), rf"Multiply by $\dfrac{{\sqrt{{x^{{2}} + {k}x}} + x}}{{\sqrt{{x^{{2}} + {k}x}} + x}}$: the expression becomes $\dfrac{{{k}x}}{{\sqrt{{x^{{2}} + {k}x}} + x}} \to \dfrac{{{k}}}{{2}}$."),
        [("0", r"$\infty - \infty$ is indeterminate, not $0$."),
         (num(k), rf"The denominator after the conjugate is about $2x$, not $x$, so the limit is $\dfrac{{{k}}}{{2}}$."),
         (r"\infty", r"The two terms grow at the same rate, and their difference approaches a finite number.")])

def t115_trig(r):
    n = r.choice([1, 2]); fn = r.choice(["sin", "cos"]); k = r.choice([2, 3])
    q = rf"What is $\displaystyle \lim_{{x \to \infty}} \frac{{\{fn}({k}x)}}{{x^{{{n}}}}}$?" if n > 1 else rf"What is $\displaystyle \lim_{{x \to \infty}} \frac{{\{fn}({k}x)}}{{x}}$?"
    return item("1.15", q, ("0", r"The numerator stays between $-1$ and $1$ while the denominator grows without bound, so by the squeeze theorem the quotient approaches $0$."),
        [("1", r"$\dfrac{\sin u}{u} \to 1$ applies as $u \to 0$, not as $x \to \infty$."),
         (text_choice("The limit does not exist, because the numerator oscillates."), rf"The oscillation is squeezed: the quotient lies between $-\dfrac{{1}}{{{'x' if n == 1 else 'x^{' + str(n) + '}'}}}$ and $\dfrac{{1}}{{{'x' if n == 1 else 'x^{' + str(n) + '}'}}}$, which both approach $0$."),
         (num(k), rf"${k}$ comes from treating the expression like $\dfrac{{\sin({k}x)}}{{x}}$ near $0$, which does not apply at infinity.")])

# ---------------------------------------------------------------- 1.16
def t116_zeros(r):
    xs = [0, 1, 3, 4, 6]
    for _ in range(50):
        ys = [r.choice([-3, -2, -1, 2, 4, 5]) for _ in xs]
        ch = sum(1 for i in range(4) if ys[i] * ys[i + 1] < 0)
        if 2 <= ch <= 3: break
    tab = "; ".join(f"$f({a}) = {b}$" for a, b in zip(xs, ys))
    q = rf"The function $f$ is continuous on $[0, 6]$, and {tab}. What is the least number of zeros $f$ must have on $[0, 6]$?"
    return item("1.16", q, (num(ch), rf"$f$ changes sign {ch} times between consecutive values in the table. By the Intermediate Value Theorem there is a zero in each of those intervals, so at least ${ch}$."),
        [(num(ch - 1), r"Count every interval where consecutive values have opposite signs."),
         (num(ch + 1), r"An interval where both values have the same sign does not guarantee a zero."),
         ("0", r"Because $f$ is continuous, each change in sign guarantees a zero.")])

def t116_value(r):
    a, b = 1, 5; fa = r.choice([1, 2]); fb = r.choice([7, 9])
    good = r.choice([fa + 2, fb - 1])
    q = rf"The function $g$ is continuous on $[{a}, {b}]$ with $g({a}) = {fa}$ and $g({b}) = {fb}$. Which of the following must be true?"
    return item("1.16", q, (text_choice(rf"$g(c) = {good}$ for at least one $c$ in $({a}, {b})$."), rf"${good}$ is between ${fa}$ and ${fb}$, so the Intermediate Value Theorem guarantees it."),
        [(text_choice(rf"$g(c) = {fb + 2}$ for at least one $c$ in $({a}, {b})$."), rf"${fb + 2}$ is not between ${fa}$ and ${fb}$, so the theorem says nothing about it."),
         (text_choice(rf"$g$ is increasing on $[{a}, {b}]$."), r"Continuity with $g(b) > g(a)$ does not mean $g$ increases everywhere."),
         (text_choice(rf"$g(c) = 0$ for at least one $c$ in $({a}, {b})$."), rf"$0$ is not between ${fa}$ and ${fb}$, so the theorem does not guarantee a zero.")])

TEMPLATES = {
    "1.1": [t11_avg, t11_table, t11_def], "1.2": [t12_onesided, t12_param], "1.4": [t14_sin, t14_jump],
    "1.5": [t15_props, t15_xsq], "1.6": [t16_factor, t16_root, t16_complex, t16_trig, t16_trig2, t16_abs, t16_cube],
    "1.7": [t17_direct, t17_pick], "1.8": [t18_bounds, t18_osc], "1.9": [t19_rep], "1.10": [t110_types, t110_piece],
    "1.11": [t111_point], "1.12": [t112_domain, t112_which, t112_k, t112_sqrt], "1.13": [t113_fill, t113_sin],
    "1.14": [t114_side, t114_va], "1.15": [t115_same, t115_lower, t115_higher, t115_root, t115_exp, t115_ha, t115_diff, t115_trig],
    "1.16": [t116_zeros, t116_value],
}
GRAPH_TEMPLATES = {"1.3": t13_pair}

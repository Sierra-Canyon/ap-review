"""Unit 5, Analytical Applications of Differentiation. Every key and wrong choice is computed."""
from core import *

def distinct(*v):
    if len(set(simplify(sympify(a)) for a in v)) < len(v):
        raise Skip("same")

def fac(p):
    return "x" if p == 0 else f"(x {pm(-p)})"

def ivl(a, b):
    return rf"\left[{a}, {b}\right]"

# ---------------------------------------------------------------- 5.1 Mean Value Theorem
def t51_c_quad(r):
    p = r.choice([1, 2, 3, -1]); q0 = r.choice([-4, 1, 3, 0]); a = r.choice([0, 1, -1]); b = a + r.choice([2, 4, 6])
    f = p * x**2 + q0 * x + 1
    c = Rational(a + b, 2); avg = (f.subs(x, b) - f.subs(x, a)) / (b - a)
    distinct(c, avg, b, Rational(b, 2) if Rational(b, 2) != c else b + 1)
    w3 = Rational(b, 2) if Rational(b, 2) != c else Rational(a + b + 1, 2)
    q = rf"Let $f(x) = {L(f)}$. What value of $c$ satisfies the conclusion of the Mean Value Theorem for $f$ on ${ivl(a, b)}$?"
    return item("5.1", q, (num(c), rf"The average rate is $\dfrac{{f({b}) - f({a})}}{{{b} - ({a})}} = {L(avg)}$. Since $f'(x) = {L(diff(f, x))}$, setting $f'(c) = {L(avg)}$ gives $c = {L(c)}$."),
        [(num(avg), r"This is the average rate of change, the slope $f'(c)$ must equal, not $c$."),
         (num(b), r"The value of $c$ must be strictly between the endpoints."),
         (num(w3), r"Set $f'(c)$ equal to the average rate of change and solve for $c$.")])

def t51_c_cubic(r):
    a = 0; b = r.choice([2, 3, 6])
    f = x**3
    avg = Rational(b**3, b); c = sqrt(avg / 3)
    q = rf"Let $f(x) = x^{{3}}$. What value of $c$ satisfies the conclusion of the Mean Value Theorem for $f$ on ${ivl(0, b)}$?"
    return item("5.1", q, (L(c), rf"The average rate is $\dfrac{{{b**3} - 0}}{{{b}}} = {avg}$. Then $3c^{{2}} = {avg}$, so $c = {L(c)}$ (the positive root, inside the interval)."),
        [(num(avg), r"This is the average rate of change, not $c$."),
         (num(Rational(b, 2)), r"For a cubic, $c$ is not simply the midpoint; solve $f'(c) = $ average rate."),
         (L(-c), r"This root is outside the interval.")])
t51_c_cubic.max = 2

def t51_avg(r):
    k = r.choice([2, 3, 4]); a, b = r.choice([(0, 2), (1, 4), (1, 3), (0, 3)])
    f = x**k
    avg = Rational(b**k - a**k, b - a)
    w1 = diff(f, x).subs(x, b); w2 = b**k - a**k; w3 = Rational(diff(f, x).subs(x, a) + diff(f, x).subs(x, b), 2)
    distinct(avg, w1, w2, w3)
    q = rf"A differentiable function satisfies $f({a}) = {a**k}$ and $f({b}) = {b**k}$. By the Mean Value Theorem, $f'(c)$ must equal what value for some $c$ in $\left({a}, {b}\right)$?"
    return item("5.1", q, (num(avg), rf"$f'(c) = \dfrac{{f({b}) - f({a})}}{{{b} - {a}}} = \dfrac{{{b**k - a**k}}}{{{b - a}}} = {L(avg)}$."),
        [(num(w2), r"This is the change in $f$ without dividing by the length of the interval."),
         (num(Rational(b - a, b**k - a**k)), r"The ratio is upside down."),
         (num(Rational(b**k + a**k, b - a)), r"The values are added; the change in $f$ is a difference.")])

def t51_hyp(r):
    a, b = r.choice([(-1, 1), (-2, 2), (-3, 1)])
    q = rf"For which function does the Mean Value Theorem apply on ${ivl(a, b)}$?"
    opts = [(text_choice(rf"$f(x) = x^{{3}} - 2x$"), r"A polynomial is continuous and differentiable everywhere, so the hypotheses hold."),
            (text_choice(r"$f(x) = |x|$"), r"$|x|$ has a corner at $x = 0$, so it is not differentiable there."),
            (text_choice(r"$f(x) = \dfrac{1}{x}$"), r"$\dfrac{1}{x}$ is not defined at $x = 0$, which is in the interval."),
            (text_choice(r"$f(x) = x^{2/3}$"), r"$x^{2/3}$ has a cusp at $x = 0$, so it is not differentiable there.")]
    return item("5.1", q, opts[0], opts[1:])
t51_hyp.max = 1

def t51_table(r):
    xs = [0, 2, 5, 7]
    for _ in range(50):
        f = [r.choice(range(-4, 12)) for _ in xs]
        i, j = sorted(r.sample(range(4), 2))
        s = Rational(f[j] - f[i], xs[j] - xs[i])
        if s.q == 1 and s != 0: break
    else:
        raise Skip("no")
    tab = ", ".join(f"$f({a}) = {b}$" for a, b in zip(xs, f))
    q = rf"The function $f$ is differentiable for all $x$, and {tab}. Which value must $f'(c)$ equal for some $c$ in $\left({xs[i]}, {xs[j]}\right)$?"
    return item("5.1", q, (num(s), rf"By the Mean Value Theorem, $f'(c) = \dfrac{{f({xs[j]}) - f({xs[i]})}}{{{xs[j]} - {xs[i]}}} = {L(s)}$."),
        [(num(f[j] - f[i]), r"This is the change in $f$ without dividing by the change in $x$."),
         (num(-s), r"The order of subtraction is mixed, which flips the sign."),
         (num(Rational(f[j] + f[i], 2)) if Rational(f[j] + f[i], 2) not in (s, -s, f[j] - f[i]) else num(s + 1), r"That is the average of the two values of $f$, not the average rate of change.")])

def t51_rolle(r):
    a, b = r.choice([(0, 4), (1, 5), (-1, 3), (0, 6)])
    f = (x - a) * (x - b)
    c = Rational(a + b, 2)
    q = rf"Let $f(x) = {L(expand(f))}$. Since $f({a}) = f({b})$, Rolle's Theorem guarantees a $c$ in $\left({a}, {b}\right)$ with $f'(c) = 0$. What is $c$?"
    return item("5.1", q, (num(c), rf"$f'(x) = 2x - {a + b}$, which is $0$ at $x = {L(c)}$."),
        [(num(a), r"This is an endpoint, where $f = 0$, not where $f' = 0$."),
         (num(f.subs(x, c)), r"This is the value of $f$ at $c$, not $c$."),
         (num(a + b), rf"$f'(c) = 0$ means $2c = {a + b}$; divide by $2$.")])

def t51_velocity(r):
    T = r.choice([4, 5, 8]); d = r.choice([100, 120, 200, 240])
    avg = Rational(d, T)
    q = rf"A car travels ${d}$ miles in ${T}$ hours, and its position is a differentiable function of time. Which statement must be true?"
    return item("5.1", q, (text_choice(f"At some moment the car's speed is exactly ${L(avg)}$ miles per hour."), rf"The average velocity is $\dfrac{{{d}}}{{{T}}} = {L(avg)}$, and the Mean Value Theorem says the instantaneous velocity equals it at some time."),
        [(text_choice(f"The car's speed is ${L(avg)}$ miles per hour the whole time."), r"The theorem guarantees one moment, not a constant speed."),
         (text_choice(f"At some moment the car's speed is exactly ${2 * avg}$ miles per hour."), r"Nothing forces the speed to reach twice the average."),
         (text_choice(f"The car's speed never goes above ${L(avg)}$ miles per hour."), r"The car may go faster at some times and slower at others.")])
t51_velocity.max = 2

def t51_count(r):
    q = r"The function $f$ is continuous on $[1, 5]$ and differentiable on $(1, 5)$, with $f(1) = 3$ and $f(5) = 11$. Which must be true?"
    return item("5.1", q, (text_choice(r"$f'(c) = 2$ for some $c$ in $(1, 5)$."), r"The average rate of change is $\dfrac{11 - 3}{5 - 1} = 2$; the Mean Value Theorem gives $f'(c) = 2$."),
        [(text_choice(r"$f(c) = 2$ for some $c$ in $(1, 5)$."), r"The theorem is about $f'$, not $f$, and $2$ is not between $3$ and $11$."),
         (text_choice(r"$f'(c) = 8$ for some $c$ in $(1, 5)$."), r"$8$ is the change in $f$; divide by the change in $x$."),
         (text_choice(r"$f'(c) = 0$ for some $c$ in $(1, 5)$."), r"That is Rolle's Theorem, which needs $f(1) = f(5)$.")])
t51_count.max = 1

# ---------------------------------------------------------------- 5.2 Extreme Value Theorem
def t52_evt(r):
    q = r.choice([r"On which interval is $f(x) = \dfrac{1}{x - 2}$ guaranteed to have both an absolute maximum and an absolute minimum?",
                  r"On which interval is $f(x) = \dfrac{1}{x - 2}$ certain to reach both an absolute maximum and an absolute minimum?"])
    return item("5.2", q, (text_choice(r"$[3, 5]$"), r"$f$ is continuous on the closed interval $[3, 5]$, so the Extreme Value Theorem applies."),
        [(text_choice(r"$(3, 5)$"), r"An open interval does not meet the hypotheses of the theorem."),
         (text_choice(r"$[0, 4]$"), r"$f$ is not continuous at $x = 2$, which is in this interval."),
         (text_choice(r"$[2, 5]$"), r"$f$ is not defined at $x = 2$.")])
t52_evt.max = 1

def t52_cand(r):
    a = r.choice([1, 2, 3]); lo, hi = -1, r.choice([3, 4])
    f = x**3 - 3 * a**2 * x if a < hi else None
    if f is None: raise Skip("x")
    vals = {p: f.subs(x, p) for p in [lo, a, hi]}
    if -a >= lo: vals[-a] = f.subs(x, -a)
    mx = max(vals.values()); mn = min(vals.values())
    distinct(mx, mn, f.subs(x, a), f.subs(x, hi)) if mx != f.subs(x, hi) else None
    q = rf"What is the absolute minimum value of $f(x) = {L(f)}$ on ${ivl(lo, hi)}$?"
    wr = sorted(set([mx, f.subs(x, lo), f.subs(x, hi), 0, a, -a]) - {mn}, key=lambda v: abs(v - mn))[:3]
    return item("5.2", q, (num(mn), rf"Check the critical points and endpoints: " + ", ".join(rf"$f({p}) = {v}$" for p, v in sorted(vals.items())) + rf". The smallest is ${mn}$."),
        [(num(w), (r"This is a value of $f$, but not the smallest one." if w in vals.values() else r"This is an $x$-value, not a value of $f$." if w in (a, -a) else r"Compare the values of $f$ at the critical points and endpoints.")) for w in wr])

def t52_max(r):
    lo, hi = 0, r.choice([2, 3, 4])
    k = r.choice([4, 6, 8, 12])
    f = k * x - x**3 if False else x**3 - k * x
    # use f = -x^2 + bx with vertex inside
    b = r.choice([2, 4, 6]); f = -x**2 + b * x + 1; hi = r.choice([b // 2 + 1, b])
    vals = {0: f.subs(x, 0), Rational(b, 2): f.subs(x, Rational(b, 2)), hi: f.subs(x, hi)}
    mx = max(vals.values())
    q = rf"What is the absolute maximum value of $f(x) = {L(f)}$ on ${ivl(0, hi)}$?"
    return item("5.2", q, (num(mx), rf"$f'(x) = -2x + {b} = 0$ at $x = {L(Rational(b, 2))}$. Compare: " + ", ".join(rf"$f({L(p)}) = {v}$" for p, v in vals.items()) + "."),
        [(num(Rational(b, 2)), r"This is where the maximum occurs, not the maximum value."),
         (num(f.subs(x, hi)) if f.subs(x, hi) != mx else num(mx + 1), r"This is the value at the right endpoint, which is smaller than the value at the critical point." if f.subs(x, hi) != mx else r"Recompute $f$ at the critical point."),
         (num(f.subs(x, 0)), r"This is the value at $x = 0$.")])

# ---------------------------------------------------------------- 5.3 increasing and decreasing
def t53_cubic(r):
    p, q0 = sorted(r.sample([-3, -2, -1, 1, 2, 3, 4], 2))
    fp = 3 * (x - p) * (x - q0); f = expand(integrate(fp, x))
    q = rf"On what interval is $f(x) = {L(f)}$ decreasing?"
    return item("5.3", q, (text_choice(rf"$\left({p}, {q0}\right)$"), rf"$f'(x) = {L(expand(fp))} = 3{fac(p)}{fac(q0)}$, which is negative between its zeros."),
        [(text_choice(rf"$\left(-\infty, {p}\right) \cup \left({q0}, \infty\right)$"), r"Those are the intervals where $f' > 0$, so $f$ is increasing."),
         (text_choice(rf"$\left({L(Rational(p + q0, 2))}, \infty\right)$"), r"This is where $f'' > 0$, which is about concavity."),
         (text_choice(rf"$\left(-\infty, {L(Rational(p + q0, 2))}\right)$"), r"This is where $f'' < 0$, which is about concavity, not direction.")])

def t53_graph_fp(r):
    p, q0, s = r.choice([(-2, 1, 3), (-1, 2, 4), (0, 3, 5), (-3, 0, 2)])
    q = rf"The derivative of $f$ is $f'(x) = {fac(p)}{fac(q0)}^{{2}}{fac(s)}$. On which interval is $f$ increasing?" if p != 0 else rf"The derivative of $f$ is $f'(x) = x{fac(q0)}^{{2}}{fac(s)}$. On which interval is $f$ increasing?"
    return item("5.3", q, (text_choice(rf"$\left(-\infty, {p}\right) \cup \left({s}, \infty\right)$"), rf"The squared factor never changes sign. $f' > 0$ when $x < {p}$ and when $x > {s}$."),
        [(text_choice(rf"$\left({p}, {s}\right)$"), r"There $f' < 0$, so $f$ is decreasing."),
         (text_choice(rf"$\left(-\infty, {p}\right) \cup \left({q0}, {s}\right)$"), rf"$f'$ does not change sign at $x = {q0}$, because that factor is squared."),
         (text_choice(rf"$\left({s}, \infty\right)$ only"), rf"$f'$ is also positive for $x < {p}$.")])

def t53_exp(r):
    k = r.choice([1, 2, 3])
    q = rf"On what interval is $f(x) = x e^{{-{k}x}}$ increasing?" if k > 1 else r"On what interval is $f(x) = xe^{-x}$ increasing?"
    c = Rational(1, k)
    return item("5.3", q, (text_choice(rf"$\left(-\infty, {L(c)}\right)$"), rf"$f'(x) = e^{{-{k}x}}(1 - {k}x)$ and $e^{{-{k}x}} > 0$, so $f' > 0$ when $x < {L(c)}$." if k > 1 else r"$f'(x) = e^{-x}(1 - x)$, which is positive when $x < 1$."),
        [(text_choice(rf"$\left({L(c)}, \infty\right)$"), r"There $f' < 0$."),
         (text_choice(r"$\left(-\infty, 0\right)$"), rf"The sign of $f'$ depends on $1 - {k if k > 1 else ''}x$, not on $x$ alone."),
         (text_choice(r"$\left(-\infty, \infty\right)$"), r"$f'$ changes sign, so $f$ does not increase everywhere.")])
t53_exp.max = 2

# ---------------------------------------------------------------- 5.4 first derivative test
def t54_relmax(r):
    p, q0 = sorted(r.sample([-3, -2, -1, 0, 1, 2, 4], 2))
    fp = (x - p) * (x - q0); f = expand(integrate(3 * fp, x))
    q = rf"At what value of $x$ does $f(x) = {L(f)}$ have a relative maximum?"
    return item("5.4", q, (num(p), rf"$f'(x) = 3{fac(p)}{fac(q0)}$ changes from positive to negative at $x = {p}$."),
        [(num(q0), rf"At $x = {q0}$, $f'$ changes from negative to positive, a relative minimum."),
         (num(Rational(p + q0, 2)), r"This is where $f'' = 0$, a point of inflection."),
         (num(f.subs(x, p)), r"This is the maximum value, not where it occurs.")])

def t54_sign(r):
    a, b, c = sorted(r.sample([-4, -2, -1, 1, 3, 5], 3))
    q = rf"The derivative of $f$ is $f'(x) = {fac(a)}^{{2}}{fac(b)}{fac(c)}$. At which value of $x$ does $f$ have a relative minimum?"
    return item("5.4", q, (num(c), rf"$f'$ changes from negative to positive only at $x = {c}$; the squared factor does not change sign."),
        [(num(b), rf"At $x = {b}$, $f'$ changes from positive to negative, a relative maximum."),
         (num(a), rf"$f'$ does not change sign at $x = {a}$, because that factor is squared."),
         (text_choice(rf"$x = {a}$ and $x = {c}$"), rf"$f$ has no extremum at $x = {a}$.")])

def t54_count(r):
    pts = sorted(r.sample([-3, -2, -1, 0, 1, 2, 3], 3))
    signs = [r.choice(["+", "-"]) for _ in range(4)]
    for _ in range(20):
        if signs[1] != signs[0] or signs[2] != signs[1] or signs[3] != signs[2]: break
        signs = [r.choice(["+", "-"]) for _ in range(4)]
    mx = sum(1 for i in range(3) if signs[i] == "+" and signs[i + 1] == "-")
    mn = sum(1 for i in range(3) if signs[i] == "-" and signs[i + 1] == "+")
    desc = "; ".join([f"$f' {'> 0' if signs[0] == '+' else '< 0'}$ for $x < {pts[0]}$"] + [f"$f' {'> 0' if signs[i + 1] == '+' else '< 0'}$ on $({pts[i]}, {pts[i + 1]})$" for i in range(2)] + [f"$f' {'> 0' if signs[3] == '+' else '< 0'}$ for $x > {pts[2]}$"])
    q = rf"A differentiable function $f$ has $f'(x) = 0$ only at $x = {pts[0]}$, ${pts[1]}$, and ${pts[2]}$, and {desc}. How many relative extrema does $f$ have?"
    tot = mx + mn
    wr = [v for v in [3, tot + 1, mx, mn, 0, 1, 2] if v != tot]
    wr = list(dict.fromkeys(wr))[:3]
    return item("5.4", q, (num(tot), rf"An extremum occurs where $f'$ changes sign. That happens {tot} time{'s' if tot != 1 else ''} here: {mx} maximum and {mn} minimum."),
        [(num(w), r"Count only the points where the sign of $f'$ actually changes.") for w in wr])

# ---------------------------------------------------------------- 5.5 candidates test
def t55_abs(r):
    a, hi = r.choice([(1, 3), (2, 3), (1, 2), (2, 4)]); lo = r.choice([-2, -1, 0])
    f = x**3 - 3 * a**2 * x
    cands = sorted(set([lo, hi] + [p for p in (a, -a) if lo < p < hi]))
    vals = {p: f.subs(x, p) for p in cands}
    mx = max(vals.values()); where = [p for p in cands if vals[p] == mx]
    if len(where) > 1: raise Skip("tie")
    w = where[0]
    other = [p for p in cands if p != w]
    q = rf"At what value of $x$ does $f(x) = {L(f)}$ reach its absolute maximum on ${ivl(lo, hi)}$?"
    wr = other[:3]
    for extra in [0, a, -a, hi + 1]:
        if len(wr) >= 3: break
        if extra not in wr and extra != w: wr.append(extra)
    return item("5.5", q, (num(w), r"Candidates test: " + ", ".join(rf"$f({p}) = {v}$" for p, v in vals.items()) + rf". The largest value is at $x = {w}$."),
        [(num(p), r"Compare the value of $f$ at every critical point and both endpoints." if p in cands else r"This is not a candidate inside the interval.") for p in wr[:3]])

def t55_trig(r):
    q = r.choice([r"What is the absolute maximum value of $f(x) = x + 2\cos x$ on $[0, \pi]$?"])
    # f' = 1 - 2 sin x = 0 at pi/6, 5pi/6. f(0)=2, f(pi/6)=pi/6+sqrt3, f(5pi/6)=5pi/6 - sqrt3, f(pi)=pi-2
    return item("5.5", q, (L(pi / 6 + sqrt(3)), r"$f'(x) = 1 - 2\sin x = 0$ at $x = \dfrac{\pi}{6}$ and $\dfrac{5\pi}{6}$. Values: $f(0) = 2$, $f\left(\dfrac{\pi}{6}\right) = \dfrac{\pi}{6} + \sqrt{3} \approx 2.25$, $f\left(\dfrac{5\pi}{6}\right) \approx 0.89$, $f(\pi) \approx 1.14$."),
        [("2", r"The value at $x = 0$ is not the largest."),
         (r"\pi - 2", r"This is the value at $x = \pi$."),
         (L(pi / 6), r"This is where the maximum occurs, not the maximum value.")])
t55_trig.max = 1

# ---------------------------------------------------------------- 5.6 concavity
def t56_poly(r):
    a = r.choice([-2, -1, 1, 2, 3])
    f = x**3 - 3 * a * x**2 + 5
    q = rf"On what interval is the graph of $f(x) = {L(f)}$ concave up?"
    return item("5.6", q, (text_choice(rf"$\left({a}, \infty\right)$"), rf"$f''(x) = 6x {pm(-6 * a)}$, which is positive when $x > {a}$."),
        [(text_choice(rf"$\left(-\infty, {a}\right)$"), r"There $f'' < 0$, so the graph is concave down."),
         (text_choice(rf"$\left(0, {2 * a}\right)$" if a > 0 else rf"$\left({2 * a}, 0\right)$"), r"That is where $f' < 0$, which is about direction, not concavity."),
         (text_choice(rf"$\left({2 * a}, \infty\right)$" if a > 0 else r"$\left(0, \infty\right)$"), r"That is where $f' > 0$; concavity comes from $f''$.")])

def t56_infl(r):
    a = r.choice([1, 2, -1]); b = r.choice([2, 3, 4])
    f = x**4 - 2 * (a + b) * x**3 + 6 * a * b * x**2
    # f'' = 12x^2 - 12(a+b)x + 12ab = 12(x-a)(x-b)
    if a == b: raise Skip("x")
    lo, hi = sorted([a, b])
    q = rf"For $f(x) = {L(f)}$, at which $x$-values does the graph have points of inflection?"
    return item("5.6", q, (text_choice(rf"$x = {lo}$ and $x = {hi}$"), rf"$f''(x) = 12x^{{2}} {pm(-12 * (a + b))}x {pm(12 * a * b)} = 12{fac(a)}{fac(b)}$, which changes sign at both zeros."),
        [(text_choice(rf"$x = {L(Rational(a + b, 2))}$ only"), r"This is where $f''$ is smallest, not where it changes sign."),
         (text_choice(rf"$x = 0$ only"), r"This is a zero of $f'$, not of $f''$."),
         (text_choice(rf"$x = 0$, $x = {lo}$, and $x = {hi}$"), r"$f''(0) \ne 0$, so $x = 0$ is not an inflection point.")])

def t56_fpp(r):
    a, b = sorted(r.sample([-3, -1, 0, 2, 4], 2))
    q = rf"The second derivative of $f$ is $f''(x) = {fac(a)}^{{2}}{fac(b)}$. At which $x$-value does the graph of $f$ have a point of inflection?" if a != 0 else rf"The second derivative of $f$ is $f''(x) = x^{{2}}{fac(b)}$. At which $x$-value does the graph of $f$ have a point of inflection?"
    if b == 0: q = rf"The second derivative of $f$ is $f''(x) = {fac(a)}^{{2}}x$. At which $x$-value does the graph of $f$ have a point of inflection?"
    return item("5.6", q, (text_choice(rf"$x = {b}$ only"), rf"$f''$ changes sign only at $x = {b}$; the squared factor does not change sign."),
        [(text_choice(rf"$x = {a}$ only"), rf"$f''$ does not change sign at $x = {a}$."),
         (text_choice(rf"$x = {a}$ and $x = {b}$"), rf"$f''(x) = 0$ at $x = {a}$ is not enough; the sign must change."),
         (text_choice(r"There are none."), rf"$f''$ changes sign at $x = {b}$.")])

# ---------------------------------------------------------------- 5.7 second derivative test
def t57(r):
    p, q0 = sorted(r.sample([-2, -1, 1, 2, 3], 2))
    f = expand(integrate(3 * (x - p) * (x - q0), x))
    c = r.choice([p, q0])
    fpp = diff(f, x, 2).subs(x, c)
    kind = "relative maximum" if fpp < 0 else "relative minimum"
    q = rf"For $f(x) = {L(f)}$, $f'({c}) = 0$. What does the Second Derivative Test say about $f$ at $x = {c}$?"
    return item("5.7", q, (text_choice(f"$f$ has a {kind} there, because $f''({c}) = {fpp}$."), rf"$f''(x) = {L(diff(f, x, 2))}$, so $f''({c}) = {fpp}$. A {'negative' if fpp < 0 else 'positive'} second derivative at a critical point gives a {kind}."),
        [(text_choice(f"$f$ has a {'relative minimum' if fpp < 0 else 'relative maximum'} there, because $f''({c}) = {fpp}$."), r"A negative second derivative means concave down, a maximum; a positive one means a minimum."),
         (text_choice(f"$f$ has a point of inflection there."), r"An inflection point needs $f''$ to change sign, not $f'$ to be $0$."),
         (text_choice(r"The test gives no conclusion."), r"The test is inconclusive only when $f''(c) = 0$.")])

def t57_zero(r):
    n = r.choice([4, 6]); s = r.choice(["", "-"])
    q = rf"For $f(x) = {s}x^{{{n}}}$, $f'(0) = 0$ and $f''(0) = 0$. Which statement is true?"
    kind = "minimum" if s == "" else "maximum"
    return item("5.7", q, (text_choice(f"The Second Derivative Test gives no conclusion, but $f$ has a relative {kind} at $x = 0$."), rf"When $f''(c) = 0$ the test fails. The First Derivative Test shows $f'$ changes sign at $0$, so it is a relative {kind}."),
        [(text_choice(r"$f$ has a point of inflection at $x = 0$."), r"$f''$ does not change sign at $0$."),
         (text_choice(r"$f$ has no extremum at $x = 0$, because $f''(0) = 0$."), r"$f''(0) = 0$ only means the test is inconclusive."),
         (text_choice(f"$f$ has a relative {'maximum' if kind == 'minimum' else 'minimum'} at $x = 0$."), r"Check the sign of $f'$ on each side of $0$.")])
t57_zero.max = 1

# ---------------------------------------------------------------- 5.8 and 5.9 connecting f, f', f''
FACTS = [
    ("$f'(c) > 0$ and $f''(c) < 0$", "increasing and concave down"),
    ("$f'(c) < 0$ and $f''(c) > 0$", "decreasing and concave up"),
    ("$f'(c) > 0$ and $f''(c) > 0$", "increasing and concave up"),
    ("$f'(c) < 0$ and $f''(c) < 0$", "decreasing and concave down"),
]

def t58_desc(r):
    i = r.randrange(4); cond, desc = FACTS[i]
    q = rf"At $x = c$, {cond}. Which describes the graph of $f$ near $x = c$?"
    return item("5.8", q, (text_choice(f"It is {desc}."), r"The sign of $f'$ gives direction; the sign of $f''$ gives concavity."),
        [(text_choice(f"It is {FACTS[j][1]}.") , r"Read direction from $f'$ and concavity from $f''$.") for j in range(4) if j != i])

FP = [("increasing and concave up", "$f'$ is positive and increasing"), ("increasing and concave down", "$f'$ is positive and decreasing"),
      ("decreasing and concave up", "$f'$ is negative and increasing"), ("decreasing and concave down", "$f'$ is negative and decreasing")]

def t58_from_f(r):
    i = r.randrange(4)
    q = rf"On an interval, the graph of $f$ is {FP[i][0]}. Which describes the graph of $f'$ on that interval?"
    return item("5.8", q, (text_choice(FP[i][1][0].upper() + FP[i][1][1:] + "."), r"The direction of $f$ is the sign of $f'$; the concavity of $f$ tells whether $f'$ rises or falls."),
        [(text_choice(FP[j][1] + "."), r"Match the sign of $f'$ to the direction of $f$, and the rise or fall of $f'$ to the concavity of $f$.") for j in range(4) if j != i])

def t58_fp_graph(r):
    stmt = r.choice([
        ("The graph of $f'$ is above the $x$-axis and falling on $(a, b)$.", ("$f$ is increasing and concave down on $(a, b)$.", r"$f' > 0$, so $f$ increases; $f'$ is falling, so $f'' < 0$ and $f$ is concave down."),
         [("$f$ is decreasing and concave down on $(a, b)$.", r"$f' > 0$, so $f$ is increasing."), ("$f$ is increasing and concave up on $(a, b)$.", r"$f'$ is falling, so $f'' < 0$: concave down."), ("$f$ is decreasing and concave up on $(a, b)$.", r"Both are reversed: $f' > 0$ and $f'$ is falling.")]),
        ("The graph of $f'$ is below the $x$-axis and rising on $(a, b)$.", ("$f$ is decreasing and concave up on $(a, b)$.", r"$f' < 0$, so $f$ decreases; $f'$ is rising, so $f'' > 0$ and $f$ is concave up."),
         [("$f$ is increasing and concave up on $(a, b)$.", r"$f' < 0$, so $f$ is decreasing."), ("$f$ is decreasing and concave down on $(a, b)$.", r"$f'$ is rising, so $f'' > 0$: concave up."), ("$f$ is increasing and concave down on $(a, b)$.", r"Both are reversed: $f' < 0$ and $f'$ is rising.")]),
        ("The graph of $f'$ crosses the $x$-axis from above to below at $x = a$.", ("$f$ has a relative maximum at $x = a$.", r"$f'$ changes from positive to negative, so $f$ goes from increasing to decreasing."),
         [("$f$ has a relative minimum at $x = a$.", r"A minimum needs $f'$ to change from negative to positive."), ("$f$ has a point of inflection at $x = a$.", r"Inflection comes from a turning point of $f'$, not a zero of $f'$."), ("$f$ crosses the $x$-axis at $x = a$.", r"A zero of $f'$ says nothing about where $f$ itself is $0$.")]),
        ("The graph of $f'$ has a relative minimum at $x = a$.", ("The graph of $f$ has a point of inflection at $x = a$.", r"$f'$ changes from falling to rising, so $f''$ changes sign and the concavity of $f$ changes."),
         [("$f$ has a relative minimum at $x = a$.", r"An extremum of $f$ needs $f'$ to change sign, not to turn around."), ("$f$ has a relative maximum at $x = a$.", r"An extremum of $f$ needs $f'$ to change sign, not to turn around."), ("$f'(a) = 0$.", r"At a relative minimum of $f'$ it is $f''$ that is $0$; $f'$ itself can have any value.")]),
    ])
    q = rf"{stmt[0]} Which statement about $f$ must be true?"
    return item("5.9", q, (text_choice(stmt[1][0]), stmt[1][1]), [(text_choice(w), y) for w, y in stmt[2]])
t58_fp_graph.max = 4

def t59_table(r):
    xs = [-2, -1, 0, 1, 2, 3]
    for _ in range(100):
        fp = [r.choice([-3, -1, 2, 4]) for _ in xs]
        sc = [i for i in range(len(xs) - 1) if fp[i] * fp[i + 1] < 0]
        if len(sc) >= 2: break
    if not sc: raise Skip("no")
    i = r.choice(sc)
    kind = "relative maximum" if fp[i] > 0 else "relative minimum"
    tab = ", ".join(f"$f'({a}) = {b}$" for a, b in zip(xs, fp))
    q = rf"The function $f$ has a continuous derivative, with {tab}. Which conclusion is supported on the interval $({xs[i]}, {xs[i + 1]})$?"
    other = "relative minimum" if kind == "relative maximum" else "relative maximum"
    return item("5.9", q, (text_choice(f"$f$ has a {kind} somewhere in the interval."), rf"$f'$ goes from {'positive' if fp[i] > 0 else 'negative'} to {'negative' if fp[i] > 0 else 'positive'}, so $f'$ is $0$ in the interval and $f$ changes from {'increasing to decreasing' if fp[i] > 0 else 'decreasing to increasing'}."),
        [(text_choice(f"$f$ has a {other} somewhere in the interval."), r"Check which way the sign of $f'$ changes."),
         (text_choice(r"$f$ has a point of inflection in the interval, because $f'$ changes sign."), r"A sign change of $f'$ points to an extremum of $f$, not inflection."),
         (text_choice(f"$f({xs[i]}) = 0$ or $f({xs[i + 1]}) = 0$."), r"The table gives values of $f'$, not $f$.")])

def t59_fpp_from_fp(r):
    a = r.choice([1, 2, 3]); b = r.choice([1, 2])
    fp = x**2 - 2 * a * x + b
    c = r.choice([0, a + 1, a - 1, 2 * a])
    fpp = diff(fp, x).subs(x, c); fpv = fp.subs(x, c)
    if fpp == 0 or fpv == 0: raise Skip("zero")
    d1 = "increasing" if fpv > 0 else "decreasing"; d2 = "concave up" if fpp > 0 else "concave down"
    q = rf"The derivative of $f$ is $f'(x) = {L(fp)}$. At $x = {c}$, which is true about the graph of $f$?"
    o1 = "decreasing" if d1 == "increasing" else "increasing"; o2 = "concave down" if d2 == "concave up" else "concave up"
    return item("5.9", q, (text_choice(f"It is {d1} and {d2}."), rf"$f'({c}) = {fpv}$ and $f''(x) = {L(diff(fp, x))}$ gives $f''({c}) = {fpp}$."),
        [(text_choice(f"It is {o1} and {d2}."), r"Use the sign of $f'$ for direction."),
         (text_choice(f"It is {d1} and {o2}."), r"Use the sign of $f''$, the derivative of the given $f'$, for concavity."),
         (text_choice(f"It is {o1} and {o2}."), r"Both signs are read backward.")])

def t59_graph_set(r):
    """f' graph shown as a set, several questions."""
    raise Skip("unused")

def t59_infl_count(r):
    a, b, c = sorted(r.sample([-3, -2, -1, 1, 2, 3, 4], 3))
    q = rf"The derivative of $f$ is $f'(x) = {fac(a)}{fac(b)}{fac(c)}$. How many points of inflection does the graph of $f$ have?"
    return item("5.9", q, ("2", r"$f'$ is a cubic with three real zeros, so it has two turning points, and $f''$ changes sign at each. That gives two inflection points."),
        [("3", r"The three zeros of $f'$ are extrema of $f$, not inflection points."),
         ("1", r"A cubic with three real zeros has two turning points."),
         ("0", r"$f''$ is a quadratic that changes sign twice.")])
t59_infl_count.max = 1

def t59_value(r):
    a = r.choice([1, 2, 3]); fa = r.choice([2, -3, 5]); fpa = r.choice([0]); fppa = r.choice([-4, 6, 3, -2])
    kind = "relative maximum" if fppa < 0 else "relative minimum"
    q = rf"For a twice-differentiable function $f$, $f({a}) = {fa}$, $f'({a}) = 0$, and $f''({a}) = {fppa}$. Which statement is true?"
    return item("5.9", q, (text_choice(f"The point $({a}, {fa})$ is a {kind} of $f$."), rf"$f' = 0$ and $f'' {'< 0' if fppa < 0 else '> 0'}$ give a {kind} by the Second Derivative Test."),
        [(text_choice(f"The point $({a}, {fa})$ is a {'relative minimum' if kind == 'relative maximum' else 'relative maximum'} of $f$."), r"A negative second derivative gives a maximum."),
         (text_choice(f"The point $({a}, {fa})$ is a point of inflection of $f$."), r"Inflection needs $f''$ to change sign."),
         (text_choice(f"The graph of $f$ is {'concave up' if fppa < 0 else 'concave down'} at $x = {a}$."), r"The sign of $f''$ gives the concavity directly.")])

def t59_g_of_f(r):
    a = r.choice([1, 2, 4]); fpa = r.choice([3, -2, 5]); fppa = r.choice([-1, 4, 2])
    k = r.choice([2, 3])
    gpp = k * fppa
    q = rf"Let $g(x) = {k}f(x) + x^{{2}}$. If $f'({a}) = {fpa}$ and $f''({a}) = {fppa}$, what is $g''({a})$?"
    return item("5.9", q, (num(gpp + 2), rf"$g''(x) = {k}f''(x) + 2$, so $g''({a}) = {k}({fppa}) + 2 = {gpp + 2}$."),
        [(num(gpp), r"The second derivative of $x^{2}$ is $2$, not $0$."),
         (num(k * fpa + 2 * a), rf"This is $g'({a})$, not $g''({a})$."),
         (num(fppa + 2), rf"The constant factor ${k}$ stays in front of $f''$.")])

# ---------------------------------------------------------------- 5.10 and 5.11 optimization
def t510_fence(r):
    P = r.choice([40, 60, 80, 100, 120])
    s = Rational(P, 4)
    q = rf"A rectangle has perimeter ${P}$ meters. What is the largest possible area, in square meters?"
    return item("5.10", q, (num(s**2), rf"With sides $x$ and ${L(Rational(P, 2))} - x$, $A = x\left({L(Rational(P, 2))} - x\right)$, and $A' = 0$ at $x = {L(s)}$. The area is ${L(s**2)}$."),
        [(num(s), r"This is the best side length, not the area."),
         (num(Rational(P, 2)**2), r"This uses half the perimeter as a side."),
         (num(2 * s**2), rf"This doubles the area. The best rectangle is a ${L(s)}$ by ${L(s)}$ square, with area ${L(s**2)}$.")])

def t510_river(r):
    F = r.choice([100, 200, 240, 400])
    w = Rational(F, 4); l = Rational(F, 2)
    q = rf"A farmer has ${F}$ feet of fence for a rectangular pen along a straight river; no fence is needed along the river. What is the largest area the pen can have, in square feet?"
    return item("5.10", q, (num(w * l), rf"With width $x$ and length ${F} - 2x$, $A = x({F} - 2x)$, and $A' = {F} - 4x = 0$ at $x = {L(w)}$. The area is ${L(w)}\cdot{L(l)} = {L(w * l)}$."),
        [(num(Rational(F, 4)**2), r"This treats the pen as a square fenced on all four sides."),
         (num(Rational(F, 3)**2), r"The side along the river has no fence, so the sides are not equal."),
         (num(w), r"This is the best width, not the area.")])

def t510_box(r):
    s = r.choice([12, 18, 24, 30])
    c = Rational(s, 6); V = c * (s - 2 * c)**2
    q = rf"A square sheet of metal ${s}$ inches on a side has equal squares cut from each corner, and the sides are folded up to make an open box. What side length of the cut squares gives the largest volume?"
    return item("5.11", q, (text_choice(f"${L(c)}$ inches"), rf"$V = x({s} - 2x)^{{2}}$. $V' = ({s} - 2x)({s} - 6x) = 0$ gives $x = {L(c)}$ (the other root gives zero volume)."),
        [(text_choice(f"${L(Rational(s, 2))}$ inches"), r"That cut leaves no base, so the volume is $0$."),
         (text_choice(f"${L(Rational(s, 4))}$ inches"), rf"Set $V'(x) = 0$; the product rule gives $({s} - 2x)({s} - 6x)$, whose zeros are ${L(c)}$ and ${L(Rational(s, 2))}$."),
         (text_choice(f"${L(V)}$ inches"), r"That is the largest volume, in cubic inches, not the cut length.")])

def t510_sum(r):
    S = r.choice([10, 16, 20, 30])
    q = rf"Two positive numbers have a sum of ${S}$. What is the largest possible value of their product?"
    return item("5.10", q, (num(Rational(S, 2)**2), rf"$P = x({S} - x)$, $P' = {S} - 2x = 0$ at $x = {L(Rational(S, 2))}$, so $P = {L(Rational(S, 2)**2)}$."),
        [(num(Rational(S, 2)), r"This is the number, not the product."),
         (num(S**2), r"This squares the sum."),
         (num(S - 1), rf"$1 \cdot {S - 1}$ is not the largest product; ${L(Rational(S, 2))} \cdot {L(Rational(S, 2))}$ is larger.")])

def t511_cost(r):
    V = r.choice([4, 32, 108, 256])
    # open box square base side x, height h: x^2 h = V; surface S = x^2 + 4xh = x^2 + 4V/x; S' = 2x - 4V/x^2 = 0 -> x^3 = 2V
    xs = (2 * V)**Rational(1, 3); hs = V / xs**2
    if not xs.is_integer: raise Skip("x")
    q = rf"An open-top box with a square base must hold ${V}$ cubic inches. What base side length uses the least material?"
    return item("5.11", q, (text_choice(f"${xs}$ inches"), rf"$S = x^{{2}} + \dfrac{{{4 * V}}}{{x}}$. $S' = 2x - \dfrac{{{4 * V}}}{{x^{{2}}}} = 0$ gives $x^{{3}} = {2 * V}$, so $x = {xs}$ and $h = {L(hs)}$."),
        [(text_choice(f"${L(hs)}$ inches"), r"That is the height of the best box."),
         (text_choice(f"${L(sympify(V)**Rational(1, 3))}$ inches" if (sympify(V)**Rational(1, 3)).is_integer else f"${L(nsimplify(V**(1/3)))}$ inches" if False else rf"$\sqrt[3]{{{V}}}$ inches"), r"That is a cube; an open top changes the balance."),
         (text_choice(f"${L(sqrt(V))}$ inches"), r"Set $S'(x) = 0$ to find the best side.")])

def t511_dist(r):
    a = r.choice([1, 2, 4, 8])
    # closest point on y = sqrt(x) to (a, 0): d^2 = (x-a)^2 + x, derivative 2(x-a)+1 = 0 -> x = a - 1/2
    xc = a - Rational(1, 2)
    q = rf"What is the $x$-coordinate of the point on the graph of $y = \sqrt{{x}}$ closest to the point $({a}, 0)$?"
    return item("5.11", q, (num(xc), rf"Minimize $D = (x - {a})^{{2}} + x$. $D' = 2(x - {a}) + 1 = 0$ gives $x = {L(xc)}$."),
        [(num(a), rf"The closest point is not straight above $({a}, 0)$, because the curve slants."),
         (num(a + Rational(1, 2)), rf"The sign in $D' = 2(x - {a}) + 1$ is mixed up."),
         (num(Rational(a, 2)), r"Minimize the square of the distance and set its derivative to $0$.")])

def t511_interpret(r):
    q = r"In an optimization problem on a closed interval, the only critical point is a relative minimum. Where must the absolute maximum occur?"
    return item("5.11", q, (text_choice("At an endpoint of the interval."), r"The maximum on a closed interval is at a critical point or an endpoint, and the only critical point is a minimum."),
        [(text_choice("At the critical point."), r"That point is a minimum."),
         (text_choice("There is no absolute maximum."), r"The Extreme Value Theorem guarantees one for a continuous function."),
         (text_choice("Where $f''(x) = 0$."), r"That locates inflection, not extrema.")])
t511_interpret.max = 1

# ---------------------------------------------------------------- 5.12 implicit curve behavior
def t512_horiz(r):
    k = r.choice([4, 9, 16, 25])
    q = rf"For the curve $x^{{2}} - xy + y^{{2}} = {3 * k}$, $\dfrac{{dy}}{{dx}} = \dfrac{{y - 2x}}{{2y - x}}$. At which points is the tangent line horizontal?"
    s = int(sqrt(k))
    return item("5.12", q, (text_choice(rf"$({s}, {2 * s})$ and $(-{s}, -{2 * s})$"), rf"Horizontal means $y - 2x = 0$, so $y = 2x$. Then $x^{{2}} - 2x^{{2}} + 4x^{{2}} = 3x^{{2}} = {3 * k}$, so $x = \pm {s}$."),
        [(text_choice(rf"$({2 * s}, {s})$ and $(-{2 * s}, -{s})$"), r"Those make $2y - x = 0$, where the tangent is vertical."),
         (text_choice(rf"$(0, {L(sqrt(3 * k))})$ and $(0, -{L(sqrt(3 * k))})$"), r"At $x = 0$ the slope is $\dfrac{y}{2y} = \dfrac{1}{2}$, not $0$."),
         (text_choice(rf"$({s}, {s})$ and $(-{s}, -{s})$"), r"Set the top of $\dfrac{dy}{dx}$ equal to $0$: $y = 2x$.")])

def t512_vert(r):
    k = r.choice([4, 9, 16, 25])
    s = int(sqrt(k))
    q = rf"For the curve $x^{{2}} - xy + y^{{2}} = {3 * k}$, $\dfrac{{dy}}{{dx}} = \dfrac{{y - 2x}}{{2y - x}}$. At which points is the tangent line vertical?"
    return item("5.12", q, (text_choice(rf"$({2 * s}, {s})$ and $(-{2 * s}, -{s})$"), rf"Vertical means the bottom is $0$ and the top is not: $x = 2y$. Then $4y^{{2}} - 2y^{{2}} + y^{{2}} = 3y^{{2}} = {3 * k}$, so $y = \pm {s}$."),
        [(text_choice(rf"$({s}, {2 * s})$ and $(-{s}, -{2 * s})$"), r"Those make the top $0$, where the tangent is horizontal."),
         (text_choice(rf"$({L(sqrt(3 * k))}, 0)$ and $(-{L(sqrt(3 * k))}, 0)$"), r"At $y = 0$ the slope is $\dfrac{-2x}{-x} = 2$, not vertical."),
         (text_choice(rf"$({s}, {s})$ and $(-{s}, -{s})$"), r"Set the bottom of $\dfrac{dy}{dx}$ equal to $0$: $x = 2y$.")])

TEMPLATES = {"5.1": [t51_c_quad, t51_avg, t51_table, t51_rolle, t51_c_cubic, t51_velocity, t51_hyp, t51_count],
             "5.2": [t52_cand, t52_max, t52_evt], "5.3": [t53_cubic, t53_graph_fp, t53_exp], "5.4": [t54_relmax, t54_sign, t54_count],
             "5.5": [t55_abs, t55_trig], "5.6": [t56_poly, t56_infl, t56_fpp], "5.7": [t57, t57_zero], "5.8": [t58_desc, t58_from_f],
             "5.9": [t59_table, t59_fpp_from_fp, t58_fp_graph, t59_value, t59_g_of_f, t59_infl_count],
             "5.10": [t510_fence, t510_river, t510_sum], "5.11": [t510_box, t511_cost, t511_dist, t511_interpret], "5.12": [t512_horiz, t512_vert]}

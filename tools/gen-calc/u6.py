"""Unit 6, Integration and Accumulation of Change. Every key and wrong choice is computed."""
from core import *
from sympy import atan, asin, Integral

def distinct(*v):
    if len(set(simplify(sympify(a)) for a in v)) < len(v):
        raise Skip("same")

def par(tex):
    return rf"\left({tex}\right)" if (" + " in tex or " - " in tex) else tex

def I(f, a, b):
    return integrate(f, (x, a, b))

# ---------------------------------------------------------------- 6.1 accumulation
def t61_rate(r):
    rate = r.choice([3, 4, 5, 8]); T = r.choice([2, 3, 6]); T2 = r.choice([2, 4])
    r2 = r.choice([1, 2, 6])
    tot = rate * T + r2 * T2
    q = rf"Water flows into a tank at ${rate}$ liters per minute for ${T}$ minutes, then at ${r2}$ liters per minute for ${T2}$ more minutes. How many liters flow in over the whole time?"
    distinct(tot, rate + r2, (rate + r2) * (T + T2), rate * T)
    return item("6.1", q, (num(tot), rf"Each stretch adds rate times time: ${rate}({T}) + {r2}({T2}) = {tot}$, the area under the rate graph."),
        [(num(rate + r2), r"This adds the rates, which are not amounts."),
         (num((rate + r2) * (T + T2)), r"Each rate applies only to its own stretch of time."),
         (num(rate * T), r"This leaves out the second stretch.")])

def t61_area_meaning(r):
    q = r"The function $r(t)$ gives the rate, in gallons per hour, at which oil leaks from a tank. What does $\displaystyle\int_{0}^{5} r(t)\,dt$ represent?"
    return item("6.1", q, (text_choice("The total number of gallons that leak out during the first 5 hours."), r"Integrating a rate over time gives the total change in the amount."),
        [(text_choice("The rate of the leak, in gallons per hour, at $t = 5$."), r"That is $r(5)$, a single value of the rate."),
         (text_choice("The average rate of the leak over the first 5 hours."), r"That would be the integral divided by $5$."),
         (text_choice("The number of gallons in the tank at $t = 5$."), r"The integral gives the change, not the amount, unless the starting amount is added.")])
t61_area_meaning.max = 1

def t61_negative(r):
    a, b = r.choice([(2, 3), (3, 1), (4, 2)])
    q = rf"A particle's velocity is $5$ meters per second for ${a}$ seconds and then $-4$ meters per second for ${b}$ seconds. What is the particle's displacement over that time?"
    disp = 5 * a - 4 * b; dist = 5 * a + 4 * b
    distinct(disp, dist, -disp, 1)
    return item("6.1", q, (text_choice(f"${disp}$ meters"), rf"Displacement counts area below the axis as negative: $5({a}) - 4({b}) = {disp}$."),
        [(text_choice(f"${dist}$ meters"), r"That is the total distance traveled."),
         (text_choice(f"${-disp}$ meters"), r"The signs of the two stretches are swapped."),
         (text_choice("$1$ meter"), r"This subtracts the speeds, not the areas.")])
t61_negative.max = 1

# ---------------------------------------------------------------- 6.2 Riemann sums
def tbl(xs, ys, name="f"):
    return ", ".join(f"${name}({a}) = {b}$" for a, b in zip(xs, ys))

def t62_left(r):
    xs = [0, 2, 3, 7, 8]; ys = [r.choice(range(1, 15)) for _ in xs]
    kind = r.choice(["left", "right"])
    ws = [xs[i + 1] - xs[i] for i in range(4)]
    L_ = sum(ws[i] * ys[i] for i in range(4)); R_ = sum(ws[i] * ys[i + 1] for i in range(4)); T_ = Rational(L_ + R_, 2)
    eq = sum(ys[:4]) if kind == "left" else sum(ys[1:])
    val = L_ if kind == "left" else R_
    other = R_ if kind == "left" else L_
    distinct(val, other, T_, eq) if T_ != val else None
    q = rf"The function $f$ is continuous on $[0, 8]$, with {tbl(xs, ys)}. Using a {kind} Riemann sum with the four subintervals these values give, what is the approximation of $\displaystyle\int_0^8 f(x)\,dx$?"
    wr = [(num(other), f"This is the {'right' if kind == 'left' else 'left'} Riemann sum."),
          (num(eq), r"The subintervals have different widths; each height must be multiplied by its own width."),
          (num(T_) if T_ not in (val, other, eq) else num(val + 2), r"This is the trapezoidal sum.")]
    return item("6.2", q, (num(val), rf"Width times {kind}-endpoint height: " + " + ".join(f"{ws[i]}({ys[i] if kind == 'left' else ys[i + 1]})" for i in range(4)) + f" $= {val}$."), wr)

def t62_trap(r):
    xs = [0, 1, 3, 4, 6]; ys = [r.choice(range(0, 12)) for _ in xs]
    ws = [xs[i + 1] - xs[i] for i in range(4)]
    T_ = sum(Rational(ws[i] * (ys[i] + ys[i + 1]), 2) for i in range(4))
    L_ = sum(ws[i] * ys[i] for i in range(4)); R_ = sum(ws[i] * ys[i + 1] for i in range(4)); bad = sum(ws[i] * (ys[i] + ys[i + 1]) for i in range(4))
    distinct(T_, L_, R_, bad)
    q = rf"The function $g$ is continuous on $[0, 6]$, with {tbl(xs, ys, 'g')}. Using a trapezoidal sum with the four subintervals shown, what is the approximation of $\displaystyle\int_0^6 g(x)\,dx$?"
    return item("6.2", q, (num(T_), r"Each trapezoid has area $\dfrac{\text{width}}{2}(\text{left} + \text{right})$; adding them gives " + f"${L(T_)}$."),
        [(num(L_), r"This is the left Riemann sum."),
         (num(R_), r"This is the right Riemann sum."),
         (num(bad), r"Each trapezoid's area has a factor of $\dfrac{1}{2}$.")])

def t62_mid(r):
    f = r.choice([x**2, x**2 + 1, 2 * x**2]); b = r.choice([4, 6]); n = 2
    w = Rational(b, n); mids = [w / 2, 3 * w / 2]
    M = sum(w * f.subs(x, m) for m in mids); Lf = sum(w * f.subs(x, i * w) for i in range(n)); Rf = sum(w * f.subs(x, (i + 1) * w) for i in range(n)); ex = I(f, 0, b)
    distinct(M, Lf, Rf, ex)
    q = rf"Using a midpoint Riemann sum with $2$ subintervals of equal width, what is the approximation of $\displaystyle\int_0^{{{b}}} {L(f)}\,dx$?"
    return item("6.2", q, (num(M), rf"The width is ${L(w)}$ and the midpoints are ${L(mids[0])}$ and ${L(mids[1])}$: ${L(w)}\left(f({L(mids[0])}) + f({L(mids[1])})\right) = {L(M)}$."),
        [(num(Lf), r"This is the left Riemann sum."),
         (num(Rf), r"This is the right Riemann sum."),
         (num(ex), r"This is the exact value of the integral, not the midpoint estimate.")])

def t62_over(r):
    kind = r.choice([("increasing", "left", "under"), ("increasing", "right", "over"), ("decreasing", "left", "over"), ("decreasing", "right", "under")])
    q = rf"The function $f$ is {kind[0]} on $[a, b]$. Is a {kind[1]} Riemann sum an overestimate or an underestimate of $\displaystyle\int_a^b f(x)\,dx$?"
    rt = "An overestimate" if kind[2] == "over" else "An underestimate"
    wt = "An underestimate" if kind[2] == "over" else "An overestimate"
    return item("6.2", q, (text_choice(rt + "."), f"For {'an' if kind[0] == 'increasing' else 'a'} {kind[0]} function the {kind[1]} endpoint of each subinterval gives the {'largest' if kind[2] == 'over' else 'smallest'} height there."),
        [(text_choice(wt + "."), r"Picture the rectangles against the curve."),
         (text_choice("It is exact."), r"A Riemann sum of a nonconstant function is usually not exact."),
         (text_choice("It cannot be decided without more information."), r"Knowing whether $f$ rises or falls is enough.")])
t62_over.max = 2

# ---------------------------------------------------------------- 6.3 summation notation
def t63_limit(r):
    a = r.choice([0, 1, 2]); w = r.choice([2, 3, 4]); p = r.choice([2, 3])
    f = x**p
    q = rf"Which definite integral equals $\displaystyle\lim_{{n \to \infty}} \sum_{{k=1}}^{{n}} \left({a} + \frac{{{w}k}}{{n}}\right)^{{{p}}} \frac{{{w}}}{{n}}$?" if a else rf"Which definite integral equals $\displaystyle\lim_{{n \to \infty}} \sum_{{k=1}}^{{n}} \left(\frac{{{w}k}}{{n}}\right)^{{{p}}} \frac{{{w}}}{{n}}$?"
    return item("6.3", q, (text_choice(rf"$\displaystyle\int_{{{a}}}^{{{a + w}}} x^{{{p}}}\,dx$"), rf"The width is $\dfrac{{{w}}}{{n}}$, so the interval has length ${w}$, starting at ${a}$."),
        [(text_choice(rf"$\displaystyle\int_{{0}}^{{{w}}} x^{{{p}}}\,dx$" if a else rf"$\displaystyle\int_{{0}}^{{1}} x^{{{p}}}\,dx$"), r"The left end of the interval is the constant term in the input." if a else r"The length of the interval is the numerator of $\Delta x$."),
         (text_choice(rf"$\displaystyle\int_{{{a}}}^{{{w}}} x^{{{p}}}\,dx$" if a else rf"$\displaystyle\int_{{0}}^{{{w}}} {w}x^{{{p}}}\,dx$"), r"The upper limit is the left end plus the length." if a else rf"The factor $\dfrac{{{w}}}{{n}}$ is $\Delta x$, not part of the function."),
         (text_choice(rf"$\displaystyle\int_{{{a}}}^{{{a + w}}} x^{{{p}}}\,dx \cdot {w}$" if a else rf"$\displaystyle\int_{{{w}}}^{{{2 * w}}} x^{{{p}}}\,dx$"), rf"$\dfrac{{{w}}}{{n}}$ becomes $dx$; it is not an extra factor." if a else rf"The input $\dfrac{{{w}k}}{{n}}$ starts near $0$, so the interval is $[0, {w}]$, not $[{w}, {2 * w}]$.")])

def t63_func(r):
    fn, tex = r.choice([(sqrt(x), r"\sqrt{x}"), (sin(x), r"\sin x"), (exp(x), "e^{x}"), (1 / x, r"\frac{1}{x}")])
    a, b = r.choice([(1, 4), (1, 3), (2, 5)])
    w = b - a
    q = rf"Which limit equals $\displaystyle\int_{{{a}}}^{{{b}}} {tex}\,dx$?"
    term = lambda inp: tex.replace("x", inp) if "frac" not in tex else rf"\frac{{1}}{{{inp}}}"
    return item("6.3", q, (text_choice(rf"$\displaystyle\lim_{{n \to \infty}} \sum_{{k=1}}^{{n}} {term(rf'\left({a} + \frac{{{w}k}}{{n}}\right)')} \cdot \frac{{{w}}}{{n}}$"), rf"Here $\Delta x = \dfrac{{{w}}}{{n}}$ and the right endpoints are ${a} + \dfrac{{{w}k}}{{n}}$."),
        [(text_choice(rf"$\displaystyle\lim_{{n \to \infty}} \sum_{{k=1}}^{{n}} {term(rf'\left({a} + \frac{{k}}{{n}}\right)')} \cdot \frac{{1}}{{n}}$"), rf"$\Delta x$ is the length ${w}$ divided by $n$."),
         (text_choice(rf"$\displaystyle\lim_{{n \to \infty}} \sum_{{k=1}}^{{n}} {term(rf'\left(\frac{{{w}k}}{{n}}\right)')} \cdot \frac{{{w}}}{{n}}$"), rf"The inputs must start at ${a}$, not $0$."),
         (text_choice(rf"$\displaystyle\lim_{{n \to \infty}} \sum_{{k=1}}^{{n}} {term(rf'\left({a} + \frac{{{w}k}}{{n}}\right)')}$"), r"Each term needs the width $\Delta x$.")])

# ---------------------------------------------------------------- 6.4 FTC, accumulation functions
def t64_deriv(r):
    fn, tex = r.choice([(sqrt(1 + t**3), r"\sqrt{1 + t^{3}}"), (cos(t**2), r"\cos\left(t^{2}\right)"), (exp(-t**2), r"e^{-t^{2}}"), (t**2 + 1, r"t^{2} + 1")])
    a = r.choice([0, 1, 2])
    inner = r.choice([x, x**2, 3 * x])
    g = fn.subs(t, inner) * diff(inner, x)
    texin = L(inner)
    q = rf"If $F(x) = \displaystyle\int_{{{a}}}^{{{texin}}} {par(tex)}\,dt$, what is $F'(x)$?"
    fx = L(fn.subs(t, inner)); d = diff(inner, x)
    right = L(g) if inner != x else fx
    w1 = fx if inner != x else L(fn.subs(t, x) - fn.subs(t, a))
    w2 = L(diff(fn, t).subs(t, inner) * d)
    w3 = L(fn.subs(t, inner) * d - fn.subs(t, a)) if fn.subs(t, a) != 0 else L(integrate(fn, t).subs(t, x)) if fn == t**2 + 1 else L(fn.subs(t, a) + d)
    return item("6.4", q, (right, rf"By the Fundamental Theorem with the chain rule, $F'(x) = f({texin})\cdot\dfrac{{d}}{{dx}}\left({texin}\right)$." if inner != x else r"By the Fundamental Theorem, $F'(x)$ is the integrand evaluated at $x$."),
        [(w1, r"The chain rule factor from the upper limit is left out." if inner != x else r"The lower limit is a constant; it adds nothing to the derivative."),
         (w2, r"This differentiates the integrand instead of evaluating it."),
         (w3, r"The lower limit is a constant, so it contributes nothing to $F'(x)$.")])

def t64_value(r):
    a = r.choice([1, 2]); fv = r.choice([3, -2, 5]); b = r.choice([3, 4])
    q = rf"Let $g(x) = \displaystyle\int_{{{a}}}^{{x}} f(t)\,dt$, where $f$ is continuous and $f({b}) = {fv}$. What is $g'({b})$?"
    return item("6.4", q, (num(fv), rf"By the Fundamental Theorem, $g'(x) = f(x)$, so $g'({b}) = f({b}) = {fv}$."),
        [("0", r"$g'$ is $f$, not the derivative of a constant."),
         (num(fv * (b - a)), r"This multiplies by the length of the interval; $g'(x) = f(x)$."),
         (text_choice(rf"$f'({b})$"), r"This differentiates once too many times.")])

def t64_zero(r):
    a = r.choice([1, 2, -1])
    q = rf"Let $g(x) = \displaystyle\int_{{{a}}}^{{x}} f(t)\,dt$ for a continuous function $f$. What is $g({a})$?"
    return item("6.4", q, ("0", r"An integral from a number to itself is $0$."),
        [(text_choice(rf"$f({a})$"), rf"That is $g'({a})$."),
         (text_choice(rf"$f'({a})$"), rf"That is $g''({a})$."),
         (text_choice(r"It cannot be found without a formula for $f$."), r"The interval has length $0$, so no formula is needed.")])
t64_zero.max = 1

# ---------------------------------------------------------------- 6.5 behavior of accumulation functions
def t65_incr(r):
    p, q0 = sorted(r.sample([-3, -1, 1, 2, 4], 2))
    q = rf"Let $g(x) = \displaystyle\int_0^x (t {pm(-p)})(t {pm(-q0)})\,dt$. On what interval is $g$ decreasing?"
    return item("6.5", q, (text_choice(rf"$\left({p}, {q0}\right)$"), rf"$g'(x) = (x {pm(-p)})(x {pm(-q0)})$, which is negative between ${p}$ and ${q0}$."),
        [(text_choice(rf"$\left(-\infty, {p}\right) \cup \left({q0}, \infty\right)$"), r"There $g' > 0$."),
         (text_choice(rf"$\left({L(Rational(p + q0, 2))}, \infty\right)$"), r"This is where $g'' > 0$, a question of concavity."),
         (text_choice(rf"$\left(0, {q0}\right)$" if p < 0 else rf"$\left(-\infty, {q0}\right)$"), r"Use the sign of the integrand, which is $g'$.")])

def t65_max(r):
    a, b = sorted(r.sample([-2, -1, 1, 3, 4], 2))
    q = rf"Let $g(x) = \displaystyle\int_1^x (t {pm(-a)})(t {pm(-b)})\,dt$. At what value of $x$ does $g$ have a relative maximum?"
    return item("6.5", q, (num(a), rf"$g'(x) = (x {pm(-a)})(x {pm(-b)})$ changes from positive to negative at $x = {a}$."),
        [(num(b), r"There $g'$ changes from negative to positive, a minimum."),
         (num(Rational(a + b, 2)), r"That is where $g'' = 0$."),
         ("1", r"$g(1) = 0$, but that is not where $g$ turns.")])

def t65_concave(r):
    k = r.choice([1, 2, 3])
    q = rf"Let $g(x) = \displaystyle\int_0^x \sin\left({k}t\right)\,dt$ for $0 < x < \dfrac{{\pi}}{{{k}}}$. Which is true on this interval?" if k > 1 else r"Let $g(x) = \displaystyle\int_0^x \sin t\,dt$ for $0 < x < \pi$. Which is true on this interval?"
    half = rf"\dfrac{{\pi}}{{{2 * k}}}"
    return item("6.5", q, (text_choice(rf"$g$ is increasing on the whole interval and concave down for $x > {half}$."), rf"$g' = \sin({k}x) > 0$ on the interval, and $g'' = {k}\cos({k}x) < 0$ for $x > {half}$." if k > 1 else rf"$g' = \sin x > 0$ on the interval, and $g'' = \cos x < 0$ for $x > {half}$."),
        [(text_choice(rf"$g$ is decreasing for $x > {half}$."), r"$g'$ is still positive there; it is only getting smaller."),
         (text_choice(rf"$g$ has a relative maximum at $x = {half}$."), r"$g'$ is largest there, which is an inflection point of $g$."),
         (text_choice(r"$g$ is concave up on the whole interval."), r"$g''$ changes sign in the middle.")])
t65_concave.max = 2

def t65_table(r):
    g0 = r.choice([2, 5, -1]); vals = [r.choice([2, 4, -1, 3]) for _ in range(3)]
    tot = g0 + sum(vals)
    q = rf"Let $g(x) = {g0} + \displaystyle\int_0^x f(t)\,dt$. The integrals of $f$ over $[0, 1]$, $[1, 2]$, and $[2, 3]$ are ${vals[0]}$, ${vals[1]}$, and ${vals[2]}$. What is $g(3)$?"
    distinct(tot, sum(vals), g0, tot - g0 + vals[2])
    return item("6.5", q, (num(tot), rf"$g(3) = {g0} + ({vals[0]}) + ({vals[1]}) + ({vals[2]}) = {tot}$."),
        [(num(sum(vals)), rf"The starting value ${g0}$ is left out."),
         (num(g0), r"This is $g(0)$."),
         (num(tot - g0 + vals[2]), r"Each piece is added once, and the starting value is included.")])

# ---------------------------------------------------------------- 6.6 properties of definite integrals
def t66_lin(r):
    a, b, c = r.choice([-2, 3, 5, 7]), r.choice([4, -1, 6]), r.choice([2, 3])
    k = r.choice([2, 3, -1])
    val = k * a + c * b
    q = rf"If $\displaystyle\int_1^5 f(x)\,dx = {a}$ and $\displaystyle\int_1^5 g(x)\,dx = {b}$, what is $\displaystyle\int_1^5 \left[{k if k != -1 else '-'}f(x) + {c}g(x)\right]dx$?" if k != 1 else ""
    distinct(val, a + b, k * a + b, k * c * a * b)
    return item("6.6", q, (num(val), rf"Integrals split over sums and constants come out: ${k}({a}) + {c}({b}) = {val}$."),
        [(num(a + b), r"The constant factors stay with their integrals."),
         (num(k * a + b), rf"The factor ${c}$ in front of $g$ is left out."),
         (num(k * c * a * b), r"An integral of a sum is a sum of integrals, not a product.")])

def t66_split(r):
    a, b = r.choice([3, 5, -2, 8]), r.choice([4, -3, 6, 2])
    val = b - a
    q = rf"If $\displaystyle\int_0^7 f(x)\,dx = {b}$ and $\displaystyle\int_0^3 f(x)\,dx = {a}$, what is $\displaystyle\int_3^7 f(x)\,dx$?"
    distinct(val, a + b, a - b, Rational(b, 7) * 4)
    return item("6.6", q, (num(val), rf"$\displaystyle\int_0^3 f + \int_3^7 f = \int_0^7 f$, so $\displaystyle\int_3^7 f = {b} - ({a}) = {val}$."),
        [(num(a + b), r"The pieces add up to the whole; subtract to find the missing piece."),
         (num(a - b), r"The subtraction is in the wrong order."),
         (num(Rational(4 * b, 7)), r"This assumes $f$ is constant.")])

def t66_rev(r):
    a = r.choice([3, -4, 6, 10])
    k = r.choice([2, -3, 1])
    val = -k * a
    q = rf"If $\displaystyle\int_2^6 f(x)\,dx = {a}$, what is $\displaystyle\int_6^2 {k if k != 1 else ''}f(x)\,dx$?"
    distinct(val, k * a, -a, a)
    return item("6.6", q, (num(val), rf"Switching the limits changes the sign: $\displaystyle\int_6^2 {k if k != 1 else ''}f = -{k if k != 1 else ''}\cdot{a} = {val}$." if k != 1 else rf"Switching the limits changes the sign, so the integral is ${val}$."),
        [(num(k * a), r"Reversing the limits of integration changes the sign."),
         (num(-a) if k != 1 else "0", r"The constant factor stays." if k != 1 else r"Only an integral from a number to itself is $0$."),
         (num(a) if k != 1 else num(2 * a), r"The constant factor and the sign change are both needed." if k != 1 else r"Reversing limits does not double the value.")])

def t66_geom(r):
    R = r.choice([2, 3, 4, 6])
    kind = r.choice(["semi", "quarter"])
    if kind == "semi":
        q = rf"What is $\displaystyle\int_{{-{R}}}^{{{R}}} \sqrt{{{R**2} - x^{{2}}}}\,dx$?"
        val = pi * R**2 / 2
        ex = rf"The graph is the upper half of a circle of radius ${R}$, so the area is $\dfrac{{1}}{{2}}\pi({R})^{{2}} = {L(val)}$."
    else:
        q = rf"What is $\displaystyle\int_{{0}}^{{{R}}} \sqrt{{{R**2} - x^{{2}}}}\,dx$?"
        val = pi * R**2 / 4
        ex = rf"The graph is a quarter of a circle of radius ${R}$, so the area is $\dfrac{{1}}{{4}}\pi({R})^{{2}} = {L(val)}$."
    return item("6.6", q, (L(val), ex),
        [(L(pi * R**2), r"That is the area of the whole circle."),
         (L(2 * val), r"Count how much of the circle lies over the interval."),
         (L(pi * R), r"This uses $\pi r$ rather than an area formula.")])

def t66_abs(r):
    a = r.choice([2, 3, 4]); b = r.choice([1, 2])
    q = rf"What is $\displaystyle\int_{{-{b}}}^{{{a}}} |x|\,dx$?"
    val = Rational(a**2 + b**2, 2)
    return item("6.6", q, (num(val), rf"Two triangles: $\dfrac{{1}}{{2}}({b})({b}) + \dfrac{{1}}{{2}}({a})({a}) = {L(val)}$."),
        [(num(Rational(a**2 - b**2, 2)), r"$|x|$ is never negative, so the left piece adds area."),
         (num(a**2 + b**2), r"A triangle's area has a factor of $\dfrac{1}{2}$."),
         (num(a + b), r"This is the length of the interval.")])

def t66_piece(r):
    a, b, c = r.choice([(2, 3, 5), (1, 4, 2), (3, 2, 6), (2, 5, 1)])
    # f constant pieces area from graph: rectangle and triangle
    q = rf"The graph of $f$ is a line segment from $(0, {a})$ to $({b}, {a})$, then a line segment from $({b}, {a})$ to $({b + c}, 0)$. What is $\displaystyle\int_0^{{{b + c}}} f(x)\,dx$?"
    val = a * b + Rational(a * c, 2)
    return item("6.6", q, (num(val), rf"A rectangle of area ${a}({b})$ plus a triangle of area $\dfrac{{1}}{{2}}({c})({a})$ gives ${L(val)}$."),
        [(num(a * (b + c)), r"The last piece is a triangle, not a rectangle."),
         (num(a * b + a * c * 2), r"A triangle's area is half the base times the height."),
         (num(a * b), r"This leaves out the triangle.")])

def t66_odd(r):
    a = r.choice([1, 2, 3, 5]); fn, tex = r.choice([(x**3, "x^{3}"), (sin(x), r"\sin x"), (x**5 - x, "x^{5} - x"), (x * cos(x), r"x\cos x")])
    q = rf"What is $\displaystyle\int_{{-{a}}}^{{{a}}} {par(tex)}\,dx$?"
    twice = 2 * I(fn, 0, a)
    w = twice if twice != 0 else 1
    return item("6.6", q, ("0", rf"The integrand is odd, so the area on $[-{a}, 0]$ cancels the area on $[0, {a}]$."),
        [(L(simplify(twice)) if simplify(twice) != 0 else "1", r"For an odd function the two halves cancel; they do not double."),
         (L(simplify(I(fn, 0, a))), r"This is only the right half."),
         (L(simplify(I(abs(fn) if False else fn**2, 0, a))) if False else L(simplify(-I(fn, 0, a))), r"This is only the left half.")])
t66_odd.max = 3

def t66_avg(r):
    a = r.choice([0, 1]); b = a + r.choice([2, 3, 4]); fn = r.choice([x**2, 2 * x, 3 * x**2])
    tot = I(fn, a, b); avg = tot / (b - a)
    distinct(avg, tot, (fn.subs(x, a) + fn.subs(x, b)) / 2, fn.subs(x, Rational(a + b, 2)))
    q = rf"What is the average value of $f(x) = {L(fn)}$ on ${'['}{a}, {b}{']'}$?"
    return item("6.6", q, (num(avg), rf"Average value $= \dfrac{{1}}{{{b - a}}}\displaystyle\int_{{{a}}}^{{{b}}} {L(fn)}\,dx = \dfrac{{{L(tot)}}}{{{b - a}}} = {L(avg)}$."),
        [(num(tot), r"This is the integral; divide by the length of the interval."),
         (num((fn.subs(x, a) + fn.subs(x, b)) / 2), r"This averages the endpoint values, which is not the same for a curve."),
         (num(fn.subs(x, Rational(a + b, 2))), r"This is the value at the midpoint.")])

def t66_bound(r):
    lo, hi = r.choice([(1, 4), (2, 5), (0, 3)]); a, b = 1, 4
    q = rf"For all $x$ in $[1, 4]$, ${lo} \le f(x) \le {hi}$. Which statement about $\displaystyle\int_1^4 f(x)\,dx$ must be true?"
    return item("6.6", q, (text_choice(rf"It is between ${3 * lo}$ and ${3 * hi}$."), rf"The integral is between $({lo})(3)$ and $({hi})(3)$, since the interval has length $3$."),
        [(text_choice(rf"It is between ${lo}$ and ${hi}$."), r"Multiply the bounds by the length of the interval."),
         (text_choice(rf"It equals ${L(Rational(3 * (lo + hi), 2))}$."), r"Only a range can be stated, not an exact value."),
         (text_choice(rf"It is between ${4 * lo}$ and ${4 * hi}$."), r"The interval $[1, 4]$ has length $3$, not $4$.")])
t66_bound.max = 2

# ---------------------------------------------------------------- 6.7 FTC evaluation
def t67_poly(r):
    a = r.choice([0, 1, -1]); b = r.choice([2, 3]); c2, c1 = r.choice([3, 6, 1]), r.choice([-2, 4, 0])
    fn = c2 * x**2 + c1 * x + 1
    val = I(fn, a, b); F = integrate(fn, x)
    w1 = fn.subs(x, b) - fn.subs(x, a); w2 = F.subs(x, b); w3 = diff(fn, x).subs(x, b) - diff(fn, x).subs(x, a)
    G = c2 * x**3 + c1 * x**2 + x  # powers raised, not divided
    if a == 0: w2 = G.subs(x, b) - G.subs(x, a)
    distinct(val, w1, w2, w3)
    q = rf"What is $\displaystyle\int_{{{a}}}^{{{b}}} \left({L(fn)}\right)dx$?"
    return item("6.7", q, (num(val), rf"An antiderivative is $F(x) = {L(F)}$, and $F({b}) - F({a}) = {L(val)}$."),
        [(num(w1), r"This subtracts values of the integrand, not of an antiderivative."),
         (num(w2), rf"This uses only $F({b})$; the value $F({a})$ must be subtracted." if a != 0 else r"This raises each power by one but does not divide by the new power."),
         (num(w3), r"This differentiates instead of finding an antiderivative.")])

def t67_trig(r):
    fn, F, tex, a, b = r.choice([(cos(x), sin(x), r"\cos x", 0, pi / 2), (sin(x), -cos(x), r"\sin x", 0, pi), (sec(x)**2, tan(x), r"\sec^{2}x", 0, pi / 4), (sin(x), -cos(x), r"\sin x", 0, pi / 2), (cos(x), sin(x), r"\cos x", 0, pi / 6)])
    val = simplify(F.subs(x, b) - F.subs(x, a))
    neg = simplify(-val); wrongF = simplify(-(F.subs(x, b)) + F.subs(x, a))
    w2 = simplify(fn.subs(x, b) - fn.subs(x, a))
    w3 = simplify(F.subs(x, b))
    cands = [neg, w2, w3, 0, 1, 2]
    wr = []
    for c in cands:
        if c != val and c not in wr: wr.append(c)
    wr = wr[:3]
    q = rf"What is $\displaystyle\int_{{0}}^{{{L(b)}}} {tex}\,dx$?"
    whys = {neg: r"The sign of the antiderivative is mixed up.", w2: r"This subtracts values of the integrand, not of an antiderivative.", w3: r"$F(0)$ must be subtracted."}
    return item("6.7", q, (L(val), rf"An antiderivative is ${L(F)}$; evaluate at the limits and subtract: ${L(val)}$."),
        [(L(c), whys.get(c, r"Evaluate the antiderivative at both limits and subtract.")) for c in wr])

def t67_exp(r):
    k = r.choice([1, 2, 3]); b = r.choice([1, 2])
    fn = exp(k * x); val = I(fn, 0, b)
    w1 = exp(k * b) - 1; w2 = k * (exp(k * b) - 1); w3 = exp(k * b) / k
    distinct(val, w1, w2, w3) if k != 1 else None
    if k == 1:
        q = rf"What is $\displaystyle\int_0^{{{b}}} \frac{{1}}{{x + 1}}\,dx$?"
        val = log(b + 1)
        return item("6.7", q, (L(val), rf"An antiderivative is $\ln|x + 1|$, so the value is $\ln {b + 1} - \ln 1 = \ln {b + 1}$."),
            [(L(Rational(b, b + 1) if False else 1 - Rational(1, (b + 1)**2)), r"This uses $-\dfrac{1}{(x + 1)^{2}}$, the derivative of the integrand, as if it were an antiderivative."),
             (L(Rational(1, b + 1) - 1), r"This evaluates the integrand instead of an antiderivative."),
             (L(log(b + 1) + 1), r"$\ln 1 = 0$.")])
    q = rf"What is $\displaystyle\int_0^{{{b}}} e^{{{k}x}}\,dx$?"
    E_ = f"e^{{{k * b}}}"
    return item("6.7", q, (rf"\frac{{{E_} - 1}}{{{k}}}", rf"An antiderivative is $\dfrac{{1}}{{{k}}}e^{{{k}x}}$, so the value is $\dfrac{{1}}{{{k}}}\left(e^{{{k * b}}} - 1\right)$."),
        [(rf"{E_} - 1", rf"The antiderivative of $e^{{{k}x}}$ has a factor $\dfrac{{1}}{{{k}}}$."),
         (rf"{k}\left({E_} - 1\right)", rf"Divide by ${k}$; multiplying is the derivative's rule."),
         (rf"\frac{{{E_}}}{{{k}}}", r"$e^{0} = 1$ must be subtracted.")])

def t67_net(r):
    v0 = r.choice([2, 4, 6]); x0 = r.choice([1, 3, -2]); T = r.choice([2, 3])
    v = 3 * t**2 - v0
    disp = I(v.subs(t, x), 0, T); pos = x0 + disp
    distinct(pos, disp, v.subs(t, T), x0 + v.subs(t, T))
    q = rf"A particle moves along a line with velocity $v(t) = {L(v)}$. At $t = 0$ its position is ${x0}$. What is its position at $t = {T}$?"
    return item("6.7", q, (num(pos), rf"Position $= {x0} + \displaystyle\int_0^{{{T}}} \left({L(v)}\right)dt = {x0} + ({L(disp)}) = {L(pos)}$."),
        [(num(disp), r"This is the displacement; add the starting position."),
         (num(v.subs(t, T)), r"This is the velocity at that time."),
         (num(x0 + v.subs(t, T)), r"Integrate the velocity; do not just add its value.")])

# ---------------------------------------------------------------- 6.8 antiderivatives
def t68_power(r):
    n = r.choice([2, 3, 4, -2, -3, Rational(1, 2), Rational(3, 2)]); c = r.choice([1, 2, 3, 6])
    fn = c * x**n
    F = integrate(fn, x)
    texf = L(fn)
    q = rf"What is $\displaystyle\int {texf}\,dx$?"
    w1 = c * x**(n + 1); w2 = diff(fn, x); w3 = c * x**(n + 1) / n
    distinct(F, w1, w2, w3)
    return item("6.8", q, (L(F) + " + C", rf"Raise the power by one and divide by the new power: ${L(F)} + C$."),
        [(L(w1) + " + C", r"Divide by the new exponent."),
         (L(w2) + " + C", r"This is the derivative, not an antiderivative."),
         (L(w3) + " + C", rf"Divide by the new exponent, ${L(n + 1)}$, not the old one, ${L(n)}$.")])

def t68_trig(r):
    k = r.choice([1, 2, 3, 4]); fn = r.choice(["sin", "cos"])
    kx = f"{k}x" if k > 1 else "x"
    if fn == "sin":
        right = rf"-\frac{{1}}{{{k}}}\cos({kx}) + C" if k > 1 else r"-\cos x + C"
        wr = [(rf"\frac{{1}}{{{k}}}\cos({kx}) + C" if k > 1 else r"\cos x + C", r"The antiderivative of $\sin$ is $-\cos$."),
              (rf"-{k}\cos({kx}) + C" if k > 1 else r"-\sin x + C", r"Divide by the inside's coefficient instead of multiplying." if k > 1 else r"This mixes up $\sin$ and $\cos$."),
              (rf"-\cos({kx}) + C" if k > 1 else r"\sin x + C", rf"The factor $\dfrac{{1}}{{{k}}}$ is needed." if k > 1 else r"This is the integrand, not an antiderivative.")]
    else:
        right = rf"\frac{{1}}{{{k}}}\sin({kx}) + C" if k > 1 else r"\sin x + C"
        wr = [(rf"-\frac{{1}}{{{k}}}\sin({kx}) + C" if k > 1 else r"-\sin x + C", r"The antiderivative of $\cos$ is $\sin$, with no negative."),
              (rf"{k}\sin({kx}) + C" if k > 1 else r"-\cos x + C", r"Divide by the inside's coefficient instead of multiplying." if k > 1 else r"This mixes up $\sin$ and $\cos$."),
              (rf"\sin({kx}) + C" if k > 1 else r"\cos x + C", rf"The factor $\dfrac{{1}}{{{k}}}$ is needed." if k > 1 else r"This is the integrand.")]
    q = rf"What is $\displaystyle\int \{fn}({kx})\,dx$?" if k > 1 else rf"What is $\displaystyle\int \{fn} x\,dx$?"
    return item("6.8", q, (right, (rf"The derivative of $\sin({kx})$ is ${k}\cos({kx})$, so divide by ${k}$; differentiating the answer gives back the integrand." if fn == "cos" else rf"The derivative of $-\cos({kx})$ is ${k}\sin({kx})$, so divide by ${k}$; differentiating the answer gives back the integrand.") if k > 1 else r"Differentiating the answer gives back the integrand."), wr)

def t68_recip(r):
    k = r.choice([1, 2, 3, 5])
    q = rf"What is $\displaystyle\int \frac{{{k}}}{{x}}\,dx$?" if k > 1 else r"What is $\displaystyle\int \frac{1}{x}\,dx$?"
    kk = str(k) if k > 1 else ""
    return item("6.8", q, (rf"{kk}\ln|x| + C", r"The antiderivative of $\dfrac{1}{x}$ is $\ln|x|$."),
        [(rf"-\frac{{{k}}}{{x^{{2}}}} + C", rf"This is the derivative of $\dfrac{{{k}}}{{x}}$, not an antiderivative."),
         (rf"\frac{{{k}x^{{0}}}}{{0}} + C", r"The power rule fails for $x^{-1}$; it would divide by $0$."),
         (rf"{kk}e^{{x}} + C" if k > 1 else r"\ln x^{2} + C", r"The antiderivative of $\dfrac{1}{x}$ is a logarithm." if k > 1 else r"The antiderivative is $\ln|x|$.")])
t68_recip.max = 2

def t68_ivp(r):
    c2, c1 = r.choice([3, 6]), r.choice([2, -4]); x0 = r.choice([0, 1]); y0 = r.choice([5, -1, 2]); X = r.choice([2, 3])
    fp = c2 * x**2 + c1
    F = integrate(fp, x); C = y0 - F.subs(x, x0); val = F.subs(x, X) + C
    distinct(val, F.subs(x, X), F.subs(x, X) + y0, fp.subs(x, X))
    q = rf"If $f'(x) = {L(fp)}$ and $f({x0}) = {y0}$, what is $f({X})$?"
    return item("6.8", q, (num(val), rf"$f(x) = {L(F)} + C$, and $f({x0}) = {y0}$ gives $C = {L(C)}$. Then $f({X}) = {L(val)}$."),
        [(num(F.subs(x, X)), r"The constant $C$ is left out."),
         (num(F.subs(x, X) + y0) if C != y0 else num(val + 1), rf"$C$ comes from solving $f({x0}) = {y0}$, not from adding ${y0}$ to the antiderivative." if C != y0 else r"Recheck the antiderivative."),
         (num(fp.subs(x, X)), rf"This is $f'({X})$, not $f({X})$.")])

def t68_exp(r):
    k = r.choice([2, 3, -1, 4])
    q = rf"What is $\displaystyle\int e^{{{k}x}}\,dx$?" if k != -1 else r"What is $\displaystyle\int e^{-x}\,dx$?"
    ek = f"e^{{{k}x}}" if k != -1 else "e^{-x}"
    right = rf"\frac{{1}}{{{k}}}{ek} + C" if k > 0 else r"-e^{-x} + C"
    return item("6.8", q, (right, rf"Divide by the coefficient of $x$ in the exponent, ${k}$."),
        [(rf"{ek} + C", rf"The factor $\dfrac{{1}}{{{k}}}$ is missing." if k > 0 else r"The factor $\dfrac{1}{-1} = -1$ is missing."),
         (rf"{k}{ek} + C" if k > 0 else r"-e^{x} + C", rf"Multiplying by ${k}$ is the derivative's rule." if k > 0 else r"The exponent stays $-x$."),
         (rf"\frac{{{ek.replace('{' + str(k) + 'x}', '{' + str(k) + 'x + 1}')}}}{{{k}x + 1}} + C" if k > 0 else r"\frac{e^{-x + 1}}{-x + 1} + C", r"The power rule does not apply to exponential functions.")])

def t68_sum(r):
    a = r.choice([2, 4, 6]); b = r.choice([3, 5]); c = r.choice([1, 7])
    fn = a * x**3 - b * cos(x) + c
    F = integrate(fn, x)
    q = rf"What is $\displaystyle\int \left({a}x^{{3}} - {b}\cos x + {c}\right)dx$?"
    w1 = Rational(a, 4) * x**4 + b * sin(x) + c * x; w2 = Rational(a, 4) * x**4 - b * sin(x); w3 = 3 * a * x**2 + b * sin(x)
    return item("6.8", q, (L(F) + " + C", r"Integrate term by term: $x^{3}$ becomes $\dfrac{x^{4}}{4}$, $\cos x$ becomes $\sin x$, and a constant $c$ becomes $cx$."),
        [(L(w1) + " + C", r"The antiderivative of $-\cos x$ is $-\sin x$."),
         (L(w2) + " + C", rf"The constant ${c}$ integrates to ${c}x$, not $0$."),
         (L(w3) + " + C", r"This differentiates the polynomial term.")])

def t68_sqrt(r):
    k = r.choice([1, 2, 3])
    q = rf"What is $\displaystyle\int {k if k > 1 else ''}\sqrt{{x}}\,dx$?"
    F = integrate(k * sqrt(x), x)
    return item("6.8", q, (L(F) + " + C", r"$\sqrt{x} = x^{1/2}$; raise to $x^{3/2}$ and divide by $\dfrac{3}{2}$."),
        [(L(k * x**Rational(3, 2) * Rational(3, 2)) + " + C", r"Divide by $\dfrac{3}{2}$, which means multiply by $\dfrac{2}{3}$."),
         (L(k / (2 * sqrt(x))) + " + C", r"This is the derivative."),
         (L(k * x**Rational(3, 2)) + " + C", r"Divide by the new power, $\dfrac{3}{2}$.")])
t68_sqrt.max = 2

# ---------------------------------------------------------------- 6.9 substitution
def t69_poly(r):
    a = r.choice([1, 2, 3]); n = r.choice([3, 4, 5]); c = r.choice([1, 4, -1])
    inner = x**2 + c
    q = rf"What is $\displaystyle\int {2 * a if a > 0 else ''}x\left({L(inner)}\right)^{{{n}}}\,dx$?"
    right = rf"\frac{{{a}}}{{{n + 1}}}\left({L(inner)}\right)^{{{n + 1}}} + C" if a != n + 1 else rf"\left({L(inner)}\right)^{{{n + 1}}} + C"
    right = L(Rational(a, n + 1)) + rf"\left({L(inner)}\right)^{{{n + 1}}} + C" if a != n + 1 else rf"\left({L(inner)}\right)^{{{n + 1}}} + C"
    return item("6.9", q, (right, rf"Let $u = {L(inner)}$, $du = 2x\,dx$. The integral becomes ${a if a != 1 else ''}\displaystyle\int u^{{{n}}}\,du = \dfrac{{{a}}}{{{n + 1}}}u^{{{n + 1}}} + C$."),
        [(L(Rational(2 * a, n + 1)) + rf"\left({L(inner)}\right)^{{{n + 1}}} + C", r"$du = 2x\,dx$ absorbs the factor $2$."),
         (L(Rational(a, n + 1) * 2 * 1) + rf"x^{{2}}\left({L(inner)}\right)^{{{n + 1}}} + C" if False else L(Rational(2 * a, n + 1)) + rf"x\left({L(inner)}\right)^{{{n + 1}}} + C", r"After substituting, no $x$ should remain."),
         (L(Rational(a, n)) + rf"\left({L(inner)}\right)^{{{n - 1}}} + C" if a * n != n else rf"\left({L(inner)}\right)^{{{n - 1}}} + C", r"Integration raises the power; it does not lower it.")])

def t69_trig(r):
    k = r.choice([2, 3, 4])
    q = rf"What is $\displaystyle\int x\cos\left(x^{{2}}\right)dx$?" if k == 2 else rf"What is $\displaystyle\int x^{{{k - 1}}}\sin\left(x^{{{k}}}\right)dx$?"
    if k == 2:
        return item("6.9", q, (r"\frac{1}{2}\sin\left(x^{2}\right) + C", r"Let $u = x^{2}$, $du = 2x\,dx$: $\dfrac{1}{2}\displaystyle\int \cos u\,du$."),
            [(r"2\sin\left(x^{2}\right) + C", r"$x\,dx = \dfrac{1}{2}du$, so the factor is $\dfrac{1}{2}$."),
             (r"\sin\left(x^{2}\right) + C", r"The factor $\dfrac{1}{2}$ is needed."),
             (r"\frac{x^{2}}{2}\sin\left(x^{2}\right) + C", r"After substituting, no stray $x$ remains.")])
    xk = f"x^{{{k}}}"
    return item("6.9", q, (rf"-\frac{{1}}{{{k}}}\cos\left({xk}\right) + C", rf"Let $u = {xk}$, $du = {k}x^{{{k - 1}}}\,dx$: $\dfrac{{1}}{{{k}}}\displaystyle\int \sin u\,du$."),
        [(rf"\frac{{1}}{{{k}}}\cos\left({xk}\right) + C", r"The antiderivative of $\sin$ is $-\cos$."),
         (rf"-{k}\cos\left({xk}\right) + C", rf"Divide by ${k}$ instead of multiplying."),
         (rf"-\cos\left({xk}\right) + C", rf"The factor $\dfrac{{1}}{{{k}}}$ is needed.")])

def t69_ln(r):
    a, b = r.choice([(1, 3), (1, 1), (2, 5), (3, 2)])
    inner = x**2 + b if a == 1 else a * x**2 + b
    q = rf"What is $\displaystyle\int \frac{{x}}{{{L(inner)}}}\,dx$?"
    k = 2 * a
    return item("6.9", q, (rf"\frac{{1}}{{{k}}}\ln\left({L(inner)}\right) + C", rf"Let $u = {L(inner)}$, $du = {k}x\,dx$: $\dfrac{{1}}{{{k}}}\displaystyle\int \dfrac{{du}}{{u}}$. The inside is positive, so no absolute value is needed."),
        [(rf"\ln\left({L(inner)}\right) + C", rf"The factor $\dfrac{{1}}{{{k}}}$ from $du$ is missing."),
         (rf"{k}\ln\left({L(inner)}\right) + C", rf"Divide by ${k}$; do not multiply."),
         (rf"\frac{{x^{{2}}}}{{2}}\ln\left({L(inner)}\right) + C", r"An integral of a quotient is not the antiderivative of the top times that of the bottom.")])

def t69_def(r):
    n = r.choice([2, 3]); b = r.choice([1, 2])
    fn = 2 * x * (x**2 + 1)**n
    val = I(fn, 0, b)
    ub = b**2 + 1
    wrong_lim = integrate(t**n, (t, 0, b))
    distinct(val, wrong_lim, integrate(t**n, (t, 1, b)) if b > 1 else -1, (ub**(n + 1)) / (n + 1))
    q = rf"Using $u = x^{{2}} + 1$, which value equals $\displaystyle\int_0^{{{b}}} 2x\left(x^{{2}} + 1\right)^{{{n}}}dx$?"
    return item("6.9", q, (num(val), rf"The limits change: $x = 0 \to u = 1$ and $x = {b} \to u = {ub}$. So the value is $\displaystyle\int_1^{{{ub}}} u^{{{n}}}\,du = {L(val)}$."),
        [(num(wrong_lim), r"The limits must change to $u$-values."),
         (num(integrate(t**n, (t, 1, b))) if b > 1 else "0", r"Only the lower limit was changed." if b > 1 else r"The limits of $u$ are $1$ and $2$, not equal."),
         (num(Rational(ub**(n + 1), n + 1)), r"The value at the lower limit, $u = 1$, must be subtracted.")])

def t69_exp(r):
    k = r.choice([2, 3])
    q = rf"What is $\displaystyle\int x^{{{k - 1}}}e^{{x^{{{k}}}}}\,dx$?" if k > 2 else r"What is $\displaystyle\int xe^{x^{2}}\,dx$?"
    xk = f"x^{{{k}}}"
    return item("6.9", q, (rf"\frac{{1}}{{{k}}}e^{{{xk}}} + C", rf"Let $u = {xk}$, so the integral is $\dfrac{{1}}{{{k}}}\displaystyle\int e^{{u}}\,du$."),
        [(rf"e^{{{xk}}} + C", rf"The factor $\dfrac{{1}}{{{k}}}$ is needed."),
         (rf"{k}e^{{{xk}}} + C", rf"Divide by ${k}$."),
         (rf"\frac{{x^{{{k}}}}}{{{k}}}e^{{{xk}}} + C", r"No stray power of $x$ remains after substituting.")])
t69_exp.max = 2

# ---------------------------------------------------------------- 6.10 long division and completing the square
def t610_div(r):
    a = r.choice([1, 2, 3]); b = r.choice([1, 2, 4])
    q = rf"What is $\displaystyle\int \frac{{x + {a + b}}}{{x + {b}}}\,dx$?"
    return item("6.10", q, (rf"x + {a}\ln|x + {b}| + C" if a > 1 else rf"x + \ln|x + {b}| + C", rf"Divide first: $\dfrac{{x + {a + b}}}{{x + {b}}} = 1 + \dfrac{{{a}}}{{x + {b}}}$."),
        [(rf"\ln|x + {b}| + C", r"Divide first; the quotient includes $1$."),
         (rf"(x + {a + b})\ln|x + {b}| + C", r"The top cannot be pulled out of the integral."),
         (rf"x + {a}\ln|x| + C" if a > 1 else rf"x + \ln|x| + C", rf"The logarithm keeps the inside $x + {b}$.")])

def t610_sq(r):
    h, k = r.choice([(1, 1), (2, 1), (-1, 1), (3, 1)])
    c = h**2 + 1
    q = rf"What is $\displaystyle\int \frac{{1}}{{x^{{2}} {pm(-2 * h)}x + {c}}}\,dx$?"
    xh = f"x {pm(-h)}"
    return item("6.10", q, (rf"\arctan\left({xh}\right) + C", rf"Complete the square: $x^{{2}} {pm(-2 * h)}x + {c} = ({xh})^{{2}} + 1$."),
        [(rf"\ln\left|x^{{2}} {pm(-2 * h)}x + {c}\right| + C", r"The top is not the derivative of the bottom."),
         (rf"\arctan\left(x {pm(h)}\right) + C", r"Check the sign inside the square."),
         (r"\arctan x + C", r"The shift from completing the square is lost.")])

def t610_poly(r):
    a = r.choice([1, 2, 3])
    q = rf"What is $\displaystyle\int \frac{{x^{{2}} + {a}}}{{x}}\,dx$?"
    return item("6.10", q, (rf"\frac{{x^{{2}}}}{{2}} + {a}\ln|x| + C" if a > 1 else r"\frac{x^{2}}{2} + \ln|x| + C", r"Split: $x + \dfrac{a}{x}$."),
        [(rf"\frac{{x^{{3}}}}{{3}} + {a}x" + r"\ln|x| + C" if False else rf"\left(\frac{{x^{{3}}}}{{3}} + {a}x\right)\ln|x| + C", r"Divide each term first; integrals do not multiply that way."),
         (rf"\frac{{x^{{2}}}}{{2}} - \frac{{{a}}}{{x^{{2}}}} + C", r"The antiderivative of $\dfrac{1}{x}$ is $\ln|x|$."),
         (rf"x^{{2}} + {a}\ln|x| + C" if a > 1 else r"x^{2} + \ln|x| + C", r"The antiderivative of $x$ is $\dfrac{x^{2}}{2}$.")])
t610_poly.max = 2

# ---------------------------------------------------------------- 6.14 selecting techniques
TECH = [
    (r"\displaystyle\int x\sqrt{x^{2} + 5}\,dx", "Substitution with $u = x^{2} + 5$", r"The factor $x$ is, up to a constant, the derivative of $x^{2} + 5$."),
    (r"\displaystyle\int \frac{x^{2} + 3x + 1}{x}\,dx", "Divide each term by $x$, then integrate term by term", r"Splitting gives $x + 3 + \dfrac{1}{x}$, each easy to integrate."),
    (r"\displaystyle\int \frac{1}{x^{2} + 4x + 5}\,dx", r"Complete the square to get an $\arctan$ form", r"$x^{2} + 4x + 5 = (x + 2)^{2} + 1$."),
    (r"\displaystyle\int \frac{2x + 3}{x^{2} + 3x}\,dx", r"Substitution, which gives a logarithm", r"The top is exactly the derivative of the bottom."),
    (r"\displaystyle\int \frac{x + 3}{x + 1}\,dx", "Long division first", r"Since the degrees are equal, divide to get $1 + \dfrac{2}{x + 1}$."),
    (r"\displaystyle\int \sin^{3}x\cos x\,dx", r"Substitution with $u = \sin x$", r"$\cos x\,dx$ is $du$ when $u = \sin x$."),
]
TECH_WRONG = ["Substitution with $u = x^{2} + 5$", "Long division first", r"Complete the square to get an $\arctan$ form", r"Substitution with $u = \sin x$", r"Use the power rule on the whole expression", "Divide each term by $x$, then integrate term by term"]

def t614_tech(r):
    i = r.randrange(len(TECH)); integ, right, why = TECH[i]
    wr = [w for w in TECH_WRONG if w != right]
    # Dividing each term by x and long division are the same move when the bottom is x; never offer one as wrong for the other.
    same = {"Long division first", "Divide each term by $x$, then integrate term by term"}
    if right in same: wr = [w for w in wr if w not in same]
    r.shuffle(wr)
    q = rf"Which method is the best first step for ${integ}$?"
    return item("6.14", q, (text_choice(right + "."), why), [(text_choice(w + "."), r"That method does not fit the form of this integrand.") for w in wr[:3]])
t614_tech.max = 6

def t614_eval(r):
    kind = r.choice(["sub", "div", "trig"])
    if kind == "sub":
        k = r.choice([2, 3]); b = 1
        fn = x * exp(k * x**2) if False else 3 * x**2 * (x**3 + 1)**k
        val = I(fn, 0, 1)
        q = rf"What is $\displaystyle\int_0^1 3x^{{2}}\left(x^{{3}} + 1\right)^{{{k}}}dx$?"
        return item("6.14", q, (num(val), rf"With $u = x^{{3}} + 1$ the integral is $\displaystyle\int_1^2 u^{{{k}}}\,du = \dfrac{{2^{{{k + 1}}} - 1}}{{{k + 1}}} = {L(val)}$."),
            [(num(Rational(1, k + 1)), r"The limits must change to $u = 1$ and $u = 2$."),
             (num(Rational(2**(k + 1), k + 1)), r"Subtract the value at the lower limit $u = 1$."),
             (num(3 * val), r"$du = 3x^{2}\,dx$ already includes the $3$.")])
    if kind == "div":
        b = r.choice([1, 2])
        q = rf"What is $\displaystyle\int_0^{{{b}}} \frac{{x^{{2}}}}{{x + 1}}\,dx$?"
        val = I(x**2 / (x + 1), 0, b)
        return item("6.14", q, (L(simplify(val)), r"Divide: $\dfrac{x^{2}}{x + 1} = x - 1 + \dfrac{1}{x + 1}$. Integrate and evaluate."),
            [(L(simplify(I(x - 1, 0, b))), r"The remainder term $\dfrac{1}{x + 1}$ is dropped."),
             (L(log(b + 1)), r"The polynomial part $x - 1$ is dropped."),
             (L(simplify(Rational(b**3, 3) * log(b + 1))), r"An integral of a quotient is not a product of separate antiderivatives.")])
    k = r.choice([2, 3])
    q = rf"What is $\displaystyle\int_0^{{\pi/2}} \sin^{{{k}}}x\cos x\,dx$?"
    val = Rational(1, k + 1)
    return item("6.14", q, (num(val), rf"With $u = \sin x$, the integral is $\displaystyle\int_0^1 u^{{{k}}}\,du = {L(val)}$."),
        [(num(Rational(1, k)), r"Integrating raises the power to $k + 1$."),
         ("0", r"$\sin$ goes from $0$ to $1$, so the $u$-limits are $0$ and $1$."),
         (num(-val), r"There is no sign change here; $\cos x\,dx = du$.")])

TEMPLATES = {"6.1": [t61_rate, t61_area_meaning, t61_negative], "6.2": [t62_left, t62_trap, t62_mid, t62_over],
             "6.3": [t63_limit, t63_func], "6.4": [t64_deriv, t64_value, t64_zero], "6.5": [t65_incr, t65_max, t65_concave, t65_table],
             "6.6": [t66_lin, t66_split, t66_rev, t66_geom, t66_abs, t66_piece, t66_odd, t66_avg, t66_bound],
             "6.7": [t67_poly, t67_trig, t67_exp, t67_net], "6.8": [t68_power, t68_trig, t68_recip, t68_ivp, t68_exp, t68_sum, t68_sqrt],
             "6.9": [t69_poly, t69_trig, t69_ln, t69_def, t69_exp], "6.10": [t610_div, t610_sq, t610_poly], "6.14": [t614_tech, t614_eval]}

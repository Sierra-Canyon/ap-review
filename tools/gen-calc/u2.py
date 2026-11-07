"""Unit 2, Differentiation: Definition and Fundamental Properties. Every key and wrong choice is computed."""
from core import *

def piece(e1, e2, a, op1="<", op2=r"\ge"):
    return rf"\begin{{cases}} {L(e1)}, & x {op1} {a} \\ {L(e2)}, & x {op2} {a} \end{{cases}}"

# ---------------------------------------------------------------- 2.1
def t21_context(r):
    a = r.choice([0, 1, 2]); b = a + r.choice([2, 3, 4]); k = r.choice([3, 4, 5]); c = r.choice([10, 20, 50])
    T = c + k * t**2 - t**3 / 3 if r.random() < 0.5 else c + k * t**2
    Ta, Tb = T.subs(t, a), T.subs(t, b); avg = (Tb - Ta) / (b - a)
    q = rf"The temperature of a liquid, in degrees Celsius, is $T(t) = {L(T)}$, where $t$ is measured in minutes. What is the average rate of change of $T$ over the interval ${a} \le t \le {b}$, in degrees Celsius per minute?"
    dT = diff(T, t)
    return item("2.1", q, (num(avg), rf"$\dfrac{{T({b}) - T({a})}}{{{b} - {a}}} = \dfrac{{{L(Tb)} - {L(Ta)}}}{{{b - a}}} = {L(avg)}$ degrees per minute."),
        [(num(Tb - Ta), rf"${L(Tb - Ta)}$ is the change in temperature in degrees, not divided by the ${b - a}$ minutes."),
         (num(dT.subs(t, b)), rf"${L(dT.subs(t, b))}$ is $T'({b})$, the instantaneous rate at $t = {b}$, not the average over the interval."),
         (num((Ta + Tb) / 2), r"This averages the two temperatures. A rate of change divides a change in $T$ by a change in $t$.")])

def t21_secant(r):
    a = r.choice([1, 2]); b = a + r.choice([1, 2, 3]); p = r.choice([1, 2])
    f = p * x**2 - 3 * x
    s = (f.subs(x, b) - f.subs(x, a)) / (b - a)
    q = rf"Let $f(x) = {L(f)}$. Which of the following is the slope of the secant line to the graph of $f$ through the points where $x = {a}$ and $x = {b}$?"
    fp = diff(f, x)
    return item("2.1", q, (num(s), rf"The secant slope is the average rate of change: $\dfrac{{f({b}) - f({a})}}{{{b} - {a}}} = \dfrac{{{L(f.subs(x, b))} - ({L(f.subs(x, a))})}}{{{b - a}}} = {L(s)}$."),
        [(num(fp.subs(x, a)), rf"${L(fp.subs(x, a))}$ is $f'({a})$, the slope of the tangent line at $x = {a}$."),
         (num(fp.subs(x, b)), rf"${L(fp.subs(x, b))}$ is $f'({b})$, the slope of the tangent line at $x = {b}$."),
         (num(f.subs(x, b) - f.subs(x, a)), r"This is the rise only, not divided by the run.")])

# ---------------------------------------------------------------- 2.2
def t22_recognize(r):
    kind = r.choice(["pow", "sin", "exp", "ln", "root"])
    if kind == "pow":
        n = r.choice([3, 4, 5]); a = r.choice([1, 2, 3])
        expr = rf"\frac{{({a} + h)^{{{n}}} - {a**n}}}{{h}}"; val = n * a**(n - 1); f = f"x^{{{n}}}"
        wr = [(num(a**n), rf"${a**n}$ is $f({a}) = {a}^{{{n}}}$, a value of the function, not its derivative."), (num(n * a**n), rf"This multiplies by ${a}^{{{n}}}$ instead of ${a}^{{{n - 1}}}$."), ("0", r"The difference quotient approaches the derivative, not $0$; the numerator and denominator both approach $0$.")]
    elif kind == "sin":
        a, ang = r.choice([(r"\frac{\pi}{3}", pi / 3), (r"\frac{\pi}{6}", pi / 6), (r"\pi", pi)])
        val = cos(ang)
        expr = rf"\frac{{\sin\left({a} + h\right) - \sin\left({a}\right)}}{{h}}"; f = r"\sin x"
        sv = sin(ang)
        wr = [(L(sv) if sv != val and sv != -val else "1", r"This is the value of $\sin$ at the point, a value of $f$, not of $f'$."), (L(-val), r"The derivative of $\sin x$ is $\cos x$, not $-\cos x$."), (text_choice("The limit does not exist."), r"$\sin x$ is differentiable everywhere, so this limit exists.")]
    elif kind == "exp":
        a = r.choice([1, 2, 3]); expr = rf"\frac{{e^{{{a} + h}} - e^{{{a}}}}}{{h}}"; val = exp(a); f = "e^{x}"
        wr = [("1", r"$1$ is the value of this limit at $a = 0$; at $x = a$ the derivative of $e^{x}$ is $e^{a}$."), (num(a * exp(a - 1)), r"This uses the power rule on $e^{x}$, which does not apply."), ("0", r"Both numerator and denominator approach $0$; the limit is the derivative, not $0$.")]
    elif kind == "ln":
        a = r.choice([2, 3, 5]); expr = rf"\frac{{\ln({a} + h) - \ln {a}}}{{h}}"; val = Rational(1, a); f = r"\ln x"
        wr = [(L(log(a)), rf"$\ln {a}$ is $f({a})$, not $f'({a})$."), (num(a), r"The derivative of $\ln x$ is $\dfrac{1}{x}$, not $x$."), ("0", r"The limit is a derivative, not $0$.")]
    else:
        a = r.choice([4, 9, 16]); ra = int(a**0.5); expr = rf"\frac{{\sqrt{{{a} + h}} - {ra}}}{{h}}"; val = Rational(1, 2 * ra); f = r"\sqrt{x}"
        wr = [(num(ra), rf"${ra}$ is $\sqrt{{{a}}}$, a value of $f$."), (num(Rational(1, ra)), r"The derivative of $\sqrt{x}$ is $\dfrac{1}{2\sqrt{x}}$; this leaves out the $2$."), ("0", r"The limit is a derivative, not $0$.")]
    q = rf"What is $\displaystyle \lim_{{h \to 0}} {expr}$?"
    return item("2.2", q, (L(val) if kind == "sin" else num(val), rf"This is the definition of the derivative of $f(x) = {f}$ at the point, so its value is $f'$ there, which is ${L(val)}$."), wr)

def t22_which(r):
    a = r.choice([2, 3, 4]); n = r.choice([2, 3])
    q = rf"If $f(x) = x^{{{n}}}$, which of the following is equal to $f'({a})$?"
    right = rf"\lim_{{x \to {a}}} \frac{{x^{{{n}}} - {a**n}}}{{x - {a}}}"
    return item("2.2", q, (right, rf"$f'({a}) = \displaystyle \lim_{{x \to {a}}} \frac{{f(x) - f({a})}}{{x - {a}}}$, and $f({a}) = {a**n}$."),
        [(rf"\lim_{{x \to {a}}} \frac{{x^{{{n}}} - {a**n}}}{{x}}", rf"The denominator must be $x - {a}$, the change in $x$."),
         (rf"\frac{{({a} + h)^{{{n}}} - {a**n}}}{{h}}", r"Without the limit as $h \to 0$, this is an average rate of change."),
         (rf"\lim_{{h \to 0}} \frac{{({a} + h)^{{{n}}} - {a}^{{{n}}}}}{{{a}}}", rf"The difference quotient divides by $h$, not by ${a}$.")])

def t22_value(r):
    a = r.choice([1, 2, 3, -1]); p = r.choice([2, 3]); c = r.choice([1, -4, 5])
    f = p * x**2 + c * x
    val = diff(f, x).subs(x, a)
    q = rf"For $f(x) = {L(f)}$, what is $\displaystyle \lim_{{h \to 0}} \frac{{f({a} + h) - f({a})}}{{h}}$?"
    return item("2.2", q, (num(val), rf"The limit is $f'({a})$. Since $f'(x) = {L(diff(f, x))}$, $f'({a}) = {L(val)}$."),
        [(num(f.subs(x, a)), rf"${L(f.subs(x, a))}$ is $f({a})$."),
         (num(2 * p * a), r"This leaves out the derivative of the linear term."),
         ("0", r"Both numerator and denominator approach $0$; the quotient approaches the derivative.")])

# ---------------------------------------------------------------- 2.3
def t23_table(r):
    xs = [0, 2, 3, 5, 8]
    for _ in range(50):
        ys = [r.randint(-4, 12) for _ in xs]
        i = r.choice([1, 2, 3])
        if len(set(ys)) == 5: break
    # estimate f'(c) at the middle of xs[i], xs[i+1]? use symmetric neighbors of an interior table point xs[i]
    lo, hi = xs[i - 1], xs[i + 1]; c = xs[i]
    est = Rational(ys[i + 1] - ys[i - 1], hi - lo)
    tab = "; ".join(f"$f({a}) = {b}$" for a, b in zip(xs, ys))
    q = rf"The function $f$ is differentiable, and {tab}. Using the values on either side of $x = {c}$, what is the best estimate of $f'({c})$?"
    return item("2.3", q, (num(est), rf"The secant slope across $x = {c}$ is $\dfrac{{f({hi}) - f({lo})}}{{{hi} - {lo}}} = \dfrac{{{ys[i + 1]} - ({ys[i - 1]})}}{{{hi - lo}}} = {L(est)}$."),
        [(num(ys[i]), rf"${ys[i]}$ is $f({c})$, a value of $f$, not a slope."),
         (num(ys[i + 1] - ys[i - 1]), r"This is the change in $f$ without dividing by the change in $x$."),
         (num(Rational(ys[-1] - ys[0], xs[-1] - xs[0])), r"This is the average rate over the whole table, which is a poor estimate at one point.")])

# ---------------------------------------------------------------- 2.4
def t24_match(r):
    a = r.choice([1, 2, -1]); c = r.choice([0, 1, 3])
    m = 2 * a; n = a**2 + c - m * a
    fdef = rf"f(x) = \begin{{cases}} {L(x**2 + c)}, & x \le {a} \\ mx + n, & x > {a} \end{{cases}}"
    q = rf"Let ${fdef}$. For which values of the constants $m$ and $n$ is $f$ differentiable at $x = {a}$?"
    return item("2.4", q, (text_choice(rf"$m = {m}$ and $n = {L(n)}$"), rf"The slopes must match: $2x = m$ at $x = {a}$, so $m = {m}$. Continuity then needs ${a**2 + c} = {m}({a}) + n$, so $n = {L(n)}$."),
        [(text_choice(rf"$m = {m}$ and $n = {L(a**2 + c)}$"), rf"$n$ must make the pieces meet at $x = {a}$: $m({a}) + n = {a**2 + c}$."),
         (text_choice(rf"$m = {L(a**2 + c)}$ and $n = 0$"), rf"With $m = {m}$ the pieces meet at $x = {a}$ only if $n = {L(n)}$." if a**2 + c == m else rf"This sets $m$ equal to $f({a}) = {a**2 + c}$. But $m$ is a slope, so it must equal $2({a}) = {m}$, and then $n$ makes the pieces meet."),
         (text_choice(rf"$m = {a}$ and $n = {L(a**2 + c - a * a)}$"), rf"The slope of $x^{{2}} {pm(c)}$ at $x = {a}$ is $2({a}) = {2 * a}$, not ${a}$.")])

def t24_abs(r):
    a = r.choice([1, 2, 3, -2]); b = r.choice([0, 4, -1])
    f = Abs(x - a) + b
    q = rf"Let $f(x) = |{L(x - a)}| {pm(b)}$. Which of the following is true at $x = {a}$?"
    return item("2.4", q, (text_choice(r"$f$ is continuous but not differentiable."), rf"The graph has a corner at $x = {a}$: the slope is $-1$ from the left and $1$ from the right, but there is no break in the graph."),
        [(text_choice(r"$f$ is differentiable but not continuous."), r"A function that is differentiable at a point must be continuous there."),
         (text_choice(r"$f$ is both continuous and differentiable."), rf"The one-sided slopes $-1$ and $1$ differ, so $f'({a})$ does not exist."),
         (text_choice(r"$f$ is neither continuous nor differentiable."), rf"$\displaystyle \lim_{{x \to {a}}} f(x) = {b} = f({a})$, so $f$ is continuous.")])

def t24_root(r):
    a = r.choice([0, 1, 2, -3]); kind = r.choice(["cube", "twothirds"])
    if kind == "cube":
        q = rf"Let $f(x) = \sqrt[3]{{{L(x - a)}}}$. Which of the following describes $f$ at $x = {a}$?"
        right = text_choice(r"$f$ is continuous, and its graph has a vertical tangent line, so $f$ is not differentiable there.")
        rw = rf"$f'(x) = \dfrac{{1}}{{3\sqrt[3]{{({L(x - a)})^{{2}}}}}}$ grows without bound as $x \to {a}$, so the tangent line is vertical and $f'({a})$ does not exist."
    else:
        q = rf"Let $f(x) = ({L(x - a)})^{{2/3}}$. Which of the following describes $f$ at $x = {a}$?"
        right = text_choice(r"$f$ is continuous, and its graph has a cusp, so $f$ is not differentiable there.")
        rw = rf"$f'(x) = \dfrac{{2}}{{3\sqrt[3]{{{L(x - a)}}}}}$ approaches $-\infty$ from the left and $\infty$ from the right, which is a cusp."
    return item("2.4", q, (right, rw),
        [(text_choice(r"$f$ is differentiable there, with derivative $0$."), r"The derivative formula is undefined at that point, and the difference quotient grows without bound."),
         (text_choice(r"$f$ is not continuous there."), r"Roots of a continuous expression are continuous; the graph passes through the point without a break."),
         (text_choice(r"$f$ has a jump discontinuity there."), r"There is no jump; both one-sided limits equal $0$.")])

def t24_corner(r):
    a = r.choice([1, 2, -1]); p = r.choice([1, 3]); rr = r.choice([-2, 4, 5])
    if p == rr: raise Skip("same")
    q0 = r.choice([2, -1]); s0 = p * a + q0 - rr * a
    e1, e2 = p * x + q0, rr * x + s0
    side = r.choice(["left", "right"])
    want = p if side == "left" else rr
    q = rf"Let $f(x) = {piece(e1, e2, a)}$. The function $f$ is continuous at $x = {a}$. What is $\displaystyle \lim_{{h \to 0^{{{'-' if side == 'left' else '+'}}}}} \frac{{f({a} + h) - f({a})}}{{h}}$?"
    return item("2.4", q, (num(want), rf"For $h$ {'< 0' if side == 'left' else '> 0'}, $f({a} + h)$ uses the piece ${L(e1 if side == 'left' else e2)}$, whose slope is ${want}$."),
        [(num(rr if side == "left" else p), r"This is the slope of the piece on the other side."),
         (text_choice("The limit does not exist."), rf"The two-sided limit, $f'({a})$, does not exist, but each one-sided limit does."),
         (num(Rational(p + rr, 2)), r"This averages the two slopes. A one-sided limit uses only one piece.")])

def t24_must(r):
    a = r.choice([2, 3, 5])
    q = rf"If $f$ is differentiable at $x = {a}$, which of the following must be true?"
    return item("2.4", q, (text_choice(rf"$\displaystyle \lim_{{x \to {a}}} f(x) = f({a})$"), r"Differentiability implies continuity, so the limit at the point equals the value."),
        [(text_choice(rf"$f'({a}) \ne 0$"), r"A differentiable function can have derivative $0$, as at a turning point."),
         (text_choice(rf"$f$ has a relative extremum at $x = {a}$"), r"Being differentiable says nothing about whether the point is a maximum or minimum."),
         (text_choice(rf"$f''({a})$ exists"), r"A function can be differentiable once without being twice differentiable, such as $x|x|$ at $0$.")])

def t24_converse(r):
    a = r.choice([1, 2, 4])
    q = rf"The function $f$ is continuous at $x = {a}$. Which of the following must be true?"
    return item("2.4", q, (text_choice(rf"$f({a})$ is defined and equals $\displaystyle \lim_{{x \to {a}}} f(x)$."), r"This is the definition of continuity at a point."),
        [(text_choice(rf"$f'({a})$ exists."), r"Continuity does not imply differentiability; $|x|$ is continuous at $0$ but not differentiable."),
         (text_choice(rf"The graph of $f$ has a horizontal tangent at $x = {a}$."), r"Continuity says nothing about the slope."),
         (text_choice(rf"$f$ is differentiable on an interval containing $x = {a}$."), r"A continuous function can have corners or cusps at many points.")])

def t24_param2(r):
    a = 1; k = r.choice([2, 3, 4])
    # f = k x^2 + b x for x<=1 ; c x^3 + 1 for x>1 ... simpler: a x^2 + b, x<=1; k/x, x>1
    av = Rational(-k, 2); bv = k - av
    fdef = rf"f(x) = \begin{{cases}} ax^{{2}} + b, & x \le 1 \\ \dfrac{{{k}}}{{x}}, & x > 1 \end{{cases}}"
    q = rf"Let ${fdef}$. For which values of $a$ and $b$ is $f$ differentiable at $x = 1$?"
    return item("2.4", q, (text_choice(rf"$a = {L(av)}$ and $b = {L(bv)}$"), rf"Slopes: $2a = -{k}$ (the derivative of $\dfrac{{{k}}}{{x}}$ at $1$ is $-{k}$), so $a = {L(av)}$. Values: $a + b = {k}$, so $b = {L(bv)}$."),
        [(text_choice(rf"$a = {L(-av)}$ and $b = {L(k + av)}$"), rf"The derivative of $\dfrac{{{k}}}{{x}}$ is $-\dfrac{{{k}}}{{x^{{2}}}}$, which is negative."),
         (text_choice(rf"$a = -{k}$ and $b = {2 * k}$"), r"The derivative of $ax^{2}$ is $2ax$; at $x = 1$ this is $2a$, not $a$."),
         (text_choice(rf"$a = {k}$ and $b = 0$"), r"This matches the values but not the slopes.")])

# ---------------------------------------------------------------- 2.5
def t25_power(r):
    p = r.choice([2, 3, 6]); n = r.choice([2, 3]); q0 = r.choice([4, 6, 9]); a = r.choice([1, 4])
    f = p / x**n + q0 * sqrt(x)
    val = diff(f, x).subs(x, a)
    wrong1 = (n * p * x**(n - 1) + q0 / (2 * sqrt(x))).subs(x, a)
    wrong2 = (-n * p / x**(n + 1) + q0 * sqrt(x) / 2).subs(x, a)
    wrong3 = (-n * p / x**(n - 1) + q0 / (2 * sqrt(x))).subs(x, a)
    q = rf"If $f(x) = \dfrac{{{p}}}{{x^{{{n}}}}} + {q0}\sqrt{{x}}$, what is $f'({a})$?"
    return item("2.5", q, (num(val), rf"Write $f(x) = {p}x^{{-{n}}} + {q0}x^{{1/2}}$. Then $f'(x) = -{n * p}x^{{-{n + 1}}} + {L(Rational(q0, 2))}x^{{-1/2}}$, and $f'({a}) = {L(val)}$."),
        [(num(wrong1), rf"This treats $\dfrac{{{p}}}{{x^{{{n}}}}}$ as ${p}x^{{{n}}}$, losing the negative exponent."),
         (num(wrong2), r"This lowers the power of $\sqrt{x}$ incorrectly; $x^{1/2}$ becomes $\dfrac{1}{2}x^{-1/2}$."),
         (num(wrong3), rf"Subtract $1$ from the exponent $-{n}$ to get $-{n + 1}$, not $-{n - 1}$.")])

def t25_tangent(r):
    n = r.choice([3, 4]); a = r.choice([1, 2, -1]); c = r.choice([1, 2])
    f = c * x**n; slope = n * c * a**(n - 1); y0 = c * a**n
    line = slope * (x - a) + y0
    q = rf"What is an equation of the line tangent to the graph of $y = {L(f)}$ at $x = {a}$?"
    return item("2.5", q, (rf"y = {L(expand(line))}", rf"$y' = {L(diff(f, x))}$, so the slope at $x = {a}$ is ${slope}$, and the point is $({a}, {y0})$. Then $y - {y0} = {slope}(x - ({a}))$."),
        [(rf"y = {L(expand(slope * x))}", r"The tangent line must pass through the point on the curve; this line goes through the origin."),
         (rf"y = {L(expand(y0 * (x - a) + slope))}", r"This swaps the slope and the $y$-coordinate of the point."),
         (rf"y = {L(expand(n * c * a**(n - 2) * (x - a) + y0))}" if n * c * a**(n - 2) != slope else rf"y = {L(expand((slope + 1) * (x - a) + y0))}", r"The slope is not the value of the derivative at the point; recompute $y'$ there.")])

# ---------------------------------------------------------------- 2.6
def t26_poly(r):
    a = r.choice([-1, 1, 2]); c3 = r.choice([1, 2]); c2 = r.choice([-3, 4]); c1 = r.choice([5, -2]); c0 = r.choice([7, -1])
    f = c3 * x**3 + c2 * x**2 + c1 * x + c0
    val = diff(f, x).subs(x, a)
    q = rf"If $f(x) = {L(f)}$, what is $f'({a})$?"
    return item("2.6", q, (num(val), rf"$f'(x) = {L(diff(f, x))}$, so $f'({a}) = {L(val)}$."),
        [(num(f.subs(x, a)), rf"${L(f.subs(x, a))}$ is $f({a})$."),
         (num((diff(f, x) + c0).subs(x, a)), r"The derivative of a constant is $0$; this keeps the constant term."),
         (num((3 * c3 * x**2 + c2 * x + c1).subs(x, a)), r"The derivative of $cx^{2}$ is $2cx$; this forgets the factor $2$.")])

def t26_horizontal(r):
    p, q0 = r.choice([(1, 2), (-1, 3), (2, 4), (-2, 1)])
    # f = x^3 - 3(p+q)/2 x^2 + 3pq x: f' = 3(x-p)(x-q)
    f = x**3 - Rational(3 * (p + q0), 2) * x**2 + 3 * p * q0 * x
    q = rf"At which values of $x$ does the graph of $f(x) = {L(f)}$ have a horizontal tangent line?"
    return item("2.6", q, (text_choice(rf"$x = {min(p, q0)}$ and $x = {max(p, q0)}$"), rf"$f'(x) = {L(factor(diff(f, x)))}$, which is $0$ at $x = {p}$ and $x = {q0}$."),
        [(text_choice(rf"$x = 0$ only"), r"$f(0) = 0$, but a horizontal tangent needs $f'(x) = 0$."),
         (text_choice(rf"$x = {-p}$ and $x = {-q0}$"), r"These are the opposites of the zeros of $f'$; check the signs in the factors."),
         (text_choice(rf"$x = {L(Rational(p + q0, 2))}$ only"), r"This is where $f''(x) = 0$, not where $f'(x) = 0$.")])

def t26_slope(r):
    c = r.choice([2, 3]); b = r.choice([-4, 1, 5]); m0 = r.choice([7, 11, -3])
    xs = Rational(m0 - b, 2 * c)
    f = c * x**2 + b * x
    q = rf"At what value of $x$ does the line tangent to the graph of $y = {L(f)}$ have slope ${m0}$?"
    return item("2.6", q, (num(xs), rf"$y' = {L(diff(f, x))}$. Setting ${L(diff(f, x))} = {m0}$ gives $x = {L(xs)}$."),
        [(num(Rational(m0 - b, c)), r"The derivative of $cx^{2}$ is $2cx$, not $cx$."),
         (num(Rational(m0, 2 * c)), r"This leaves out the constant term of $y'$."),
         (num(Rational(m0 + b, 2 * c)), r"This comes from adding the constant term instead of subtracting it when solving.")])

def t26_combo(r):
    k = r.choice([2, 3, -4]); a = r.choice([1, 2])
    fa, ga, fpa, gpa = r.choice([3, -1]), r.choice([5, 2]), r.choice([4, -2]), r.choice([1, 6])
    val = k * fpa - gpa + 2 * a
    q = rf"The differentiable functions $f$ and $g$ satisfy $f({a}) = {fa}$, $g({a}) = {ga}$, $f'({a}) = {fpa}$, and $g'({a}) = {gpa}$. If $h(x) = {k}f(x) - g(x) + x^{{2}}$, what is $h'({a})$?"
    return item("2.6", q, (num(val), rf"$h'(x) = {k}f'(x) - g'(x) + 2x$, so $h'({a}) = {k}({fpa}) - {gpa} + {2 * a} = {val}$."),
        [(num(k * fa - ga + a**2), r"This uses the values of $f$ and $g$ instead of their derivatives."),
         (num(k * fpa - gpa + a**2), r"The derivative of $x^{2}$ is $2x$, not $x^{2}$."),
         (num(fpa - gpa + 2 * a), rf"The constant multiple ${k}$ stays with $f'$.")])

# ---------------------------------------------------------------- 2.7
def t27_trig(r):
    a = r.choice([(r"\frac{\pi}{3}", pi / 3), (r"\frac{\pi}{6}", pi / 6), (r"\frac{\pi}{2}", pi / 2), (r"\pi", pi)])
    p, q0 = r.choice([(2, 3), (4, -1), (-3, 2)])
    f = p * sin(x) + q0 * cos(x)
    val = simplify(diff(f, x).subs(x, a[1]))
    w1 = simplify((p * cos(x) + q0 * sin(x)).subs(x, a[1]))
    w2 = simplify((-p * cos(x) - q0 * sin(x)).subs(x, a[1]))
    w3 = simplify(f.subs(x, a[1]))
    vals = {val, w1, w2, w3}
    if len(vals) < 4: raise Skip("same")
    q = rf"If $f(x) = {L(f)}$, what is $f'\left({a[0]}\right)$?"
    return item("2.7", q, (L(val), rf"$f'(x) = {L(diff(f, x))}$; at $x = {a[0]}$ this is ${L(val)}$."),
        [(L(w1), r"The derivative of $\cos x$ is $-\sin x$; this drops the negative sign."),
         (L(w2), r"The derivative of $\sin x$ is $\cos x$, not $-\cos x$."),
         (L(w3), r"This is $f$ at the point, not $f'$.")])

def t27_exp_ln(r):
    a = r.choice([1, 2]); p = r.choice([2, 3]); q0 = r.choice([4, 5])
    f = p * exp(x) + q0 * log(x)
    val = diff(f, x).subs(x, a)
    q = rf"If $f(x) = {p}e^{{x}} + {q0}\ln x$, what is $f'({a})$?"
    return item("2.7", q, (L(val), rf"$f'(x) = {p}e^{{x}} + \dfrac{{{q0}}}{{x}}$, so $f'({a}) = {L(val)}$."),
        [(L(p * a * exp(a - 1) + Rational(q0, a)), r"The derivative of $e^{x}$ is $e^{x}$; the power rule does not apply to it."),
         (L(p * exp(a) + q0 * log(a)), r"This is $f$ at the point, not $f'$."),
         (L(p * exp(a) + q0 * a), r"The derivative of $\ln x$ is $\dfrac{1}{x}$, not $x$.")])

def t27_tan_ln(r):
    a = r.choice([1, 2, 3])
    q = rf"What is the slope of the line tangent to $y = \ln x$ at the point $({a}, \ln {a})$?" if a > 1 else r"What is the slope of the line tangent to $y = \ln x$ at the point $(1, 0)$?"
    return item("2.7", q, (num(Rational(1, a)), rf"$y' = \dfrac{{1}}{{x}}$, which is $\dfrac{{1}}{{{a}}}$ at $x = {a}$." if a > 1 else r"$y' = \dfrac{1}{x}$, which is $1$ at $x = 1$."),
        [(num(a), r"The derivative of $\ln x$ is $\dfrac{1}{x}$, not $x$."),
         (L(log(a)) if a > 1 else "e", r"This is a value of the function, not its slope." if a > 1 else r"$e$ is the base of the logarithm, not the slope."),
         ("0", r"The slope of $\ln x$ is $\dfrac{1}{x}$, which is never $0$.")])

# ---------------------------------------------------------------- 2.8 / 2.9 tables
def fg_table(r):
    a = r.choice([1, 2, 3])
    v = dict(f=r.choice([2, 3, -1, 4]), g=r.choice([5, -2, 1, 3]), fp=r.choice([4, -3, 2, 6]), gp=r.choice([-1, 2, 7, 3]))
    return a, v, rf"$f({a}) = {v['f']}$, $f'({a}) = {v['fp']}$, $g({a}) = {v['g']}$, and $g'({a}) = {v['gp']}$"

def t28_table(r):
    a, v, txt = fg_table(r)
    val = v["fp"] * v["g"] + v["f"] * v["gp"]
    q = rf"The differentiable functions $f$ and $g$ satisfy {txt}. If $h(x) = f(x)g(x)$, what is $h'({a})$?"
    return item("2.8", q, (num(val), rf"By the product rule, $h'({a}) = f'({a})g({a}) + f({a})g'({a}) = ({v['fp']})({v['g']}) + ({v['f']})({v['gp']}) = {val}$."),
        [(num(v["fp"] * v["gp"]), r"The derivative of a product is not the product of the derivatives."),
         (num(v["fp"] * v["g"] - v["f"] * v["gp"]), r"The product rule adds the two terms; a difference appears in the quotient rule."),
         (num(v["f"] * v["g"]), r"This is $h$ at the point, not $h'$.")])

def t28_formula(r):
    p = r.choice([2, 3]); a = r.choice([0, 1])
    f = x**p * exp(x)
    val = diff(f, x).subs(x, a)
    q = rf"If $f(x) = x^{{{p}}}e^{{x}}$, what is $f'({a})$?"
    if val == 0: raise Skip("zero")
    return item("2.8", q, (L(val), rf"$f'(x) = {p}{'x' if p == 2 else 'x^{' + str(p - 1) + '}'}e^{{x}} + x^{{{p}}}e^{{x}}$, so $f'({a}) = {L(val)}$."),
        [(L((p * x**(p - 1) * exp(x)).subs(x, a)), r"This differentiates only the first factor."),
         (L(f.subs(x, a)), r"This is $f$ at the point, not $f'$."),
         (L((x**p * exp(x) - p * x**(p - 1) * exp(x)).subs(x, a)), r"The product rule adds the two terms.")])

def t29_table(r):
    a, v, txt = fg_table(r)
    if v["g"] == 0: raise Skip("zero")
    val = Rational(v["fp"] * v["g"] - v["f"] * v["gp"], v["g"]**2)
    q = rf"The differentiable functions $f$ and $g$ satisfy {txt}. If $h(x) = \dfrac{{f(x)}}{{g(x)}}$, what is $h'({a})$?"
    return item("2.9", q, (num(val), rf"$h'({a}) = \dfrac{{f'({a})g({a}) - f({a})g'({a})}}{{(g({a}))^{{2}}}} = \dfrac{{({v['fp']})({v['g']}) - ({v['f']})({v['gp']})}}{{{v['g']**2}}} = {L(val)}$."),
        [(num(Rational(v["f"] * v["gp"] - v["fp"] * v["g"], v["g"]**2)), r"The numerator is in the wrong order: it is $f'g - fg'$, not $fg' - f'g$."),
         (num(Rational(v["fp"], v["gp"])) if v["gp"] else "0", r"The derivative of a quotient is not the quotient of the derivatives."),
         (num(Rational(v["fp"] * v["g"] - v["f"] * v["gp"], v["g"])), rf"The denominator is $(g({a}))^{{2}}$, not $g({a})$.")])

def t29_formula(r):
    p = r.choice([1, 2, 3]); q0 = r.choice([1, 4]); a = r.choice([0, 1, 2])
    f = (x + p) / (x**2 + q0)
    val = diff(f, x).subs(x, a)
    q = rf"If $f(x) = \dfrac{{{L(x + p)}}}{{{L(x**2 + q0)}}}$, what is $f'({a})$?"
    w1 = (((2 * x) * (x + p) - (x**2 + q0)) / (x**2 + q0)**2).subs(x, a)
    w2 = (1 / (2 * x)).subs(x, a) if a else Rational(1, 1)
    w3 = (((x**2 + q0) - (x + p) * 2 * x) / (x**2 + q0)).subs(x, a)
    if len({val, w1, w2, w3}) < 4: raise Skip("same")
    return item("2.9", q, (num(val), rf"$f'(x) = \dfrac{{(1)({L(x**2 + q0)}) - ({L(x + p)})(2x)}}{{({L(x**2 + q0)})^{{2}}}}$; at $x = {a}$ this is ${L(val)}$."),
        [(num(w1), r"The numerator terms are subtracted in the wrong order."),
         (num(w2), r"Dividing the derivative of the top by the derivative of the bottom is not the quotient rule." if a else r"This divides the derivatives, which is not the quotient rule."),
         (num(w3), r"The denominator must be squared.")])

# ---------------------------------------------------------------- 2.10
def t210(r):
    choice = r.choice([("tan", sec(x)**2, r"\sec^{2} x", -sec(x)**2), ("sec", sec(x) * tan(x), r"\sec x \tan x", -sec(x) * tan(x)),
                        ("csc", -csc(x) * cot(x), r"-\csc x \cot x", csc(x) * cot(x)), ("cot", -csc(x)**2, r"-\csc^{2} x", csc(x)**2)])
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
    return item("2.10", q, (L(val), rf"The derivative of $\{nm} x$ is ${dtex}$, so $f'(x) = {k}\left({dtex}\right)$; at $x = {a[0]}$ this is ${L(val)}$."),
        [(L(w1), r"The sign of the derivative is reversed."),
         (L(w2), r"This is $f$ at the point, not $f'$."),
         (L(w3), rf"This leaves out the constant multiple ${k}$.")])

TEMPLATES = {"2.1": [t21_context, t21_secant], "2.2": [t22_recognize, t22_which, t22_value], "2.3": [t23_table],
             "2.4": [t24_match, t24_abs, t24_root, t24_corner, t24_must, t24_converse, t24_param2], "2.5": [t25_power, t25_tangent],
             "2.6": [t26_poly, t26_horizontal, t26_slope, t26_combo], "2.7": [t27_trig, t27_exp_ln, t27_tan_ln],
             "2.8": [t28_table, t28_formula], "2.9": [t29_table, t29_formula], "2.10": [t210]}

for _fn in (t24_must, t24_converse, t22_which, t27_tan_ln):
    _fn.max = 1
t24_param2.max = 2

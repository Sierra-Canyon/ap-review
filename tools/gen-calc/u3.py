"""Unit 3, Differentiation: Composite, Implicit, and Inverse Functions. Every key and wrong choice is computed."""
from core import *
from sympy import asin, atan, acos

def distinct(*v):
    if len(set(simplify(a) for a in v)) < len(v):
        raise Skip("same")

# ---------------------------------------------------------------- 3.1 chain rule
def t31_power(r):
    a = r.choice([1, 2, 3]); b = r.choice([-1, 1, 3, 4]); n = r.choice([3, 4, 5]); c = r.choice([1, -1, 2])
    inner = a * x**2 + b; f = inner**n
    val = diff(f, x).subs(x, c)
    w1 = (n * inner**(n - 1)).subs(x, c)
    w2 = (n * inner**(n - 1) * a * x).subs(x, c)
    w3 = (n * (2 * a * x)**(n - 1)).subs(x, c)
    distinct(val, w1, w2, w3)
    q = rf"If $f(x) = \left({L(inner)}\right)^{{{n}}}$, what is $f'({c})$?"
    return item("3.1", q, (num(val), rf"$f'(x) = {n}\left({L(inner)}\right)^{{{n - 1}}} \cdot {2 * a}x$; at $x = {c}$ this is ${L(val)}$."),
        [(num(w1), r"This leaves out the derivative of the inside function."),
         (num(w2), rf"The derivative of ${L(a * x**2)}$ is ${L(2 * a * x)}$, not ${L(a * x)}$."),
         (num(w3), r"This applies the power to the derivative of the inside instead of to the inside function itself.")])

def t31_trig_expr(r):
    k = r.choice([2, 3]); fn = r.choice(["sin", "cos"]); dk = "2x" if k == 2 else f"{k}x^{{{k - 1}}}"
    if fn == "sin":
        right = rf"{k}x^{{{k - 1}}}\cos\left(x^{{{k}}}\right)" if k > 2 else r"2x\cos\left(x^{2}\right)"
        wr = [(rf"\cos\left(x^{{{k}}}\right)", rf"This leaves out the derivative of the inside, $x^{{{k}}}$."),
              (rf"\cos\left({dk}\right)", rf"The outer derivative is evaluated at the original inside, $x^{{{k}}}$, and then multiplied by the inside's derivative; it is not taken of the inside's derivative."),
              (rf"-{k}x^{{{k - 1}}}\cos\left(x^{{{k}}}\right)" if k > 2 else r"-2x\cos\left(x^{2}\right)", r"The derivative of $\sin u$ is $\cos u$, with no negative sign.")]
    else:
        right = rf"-{k}x^{{{k - 1}}}\sin\left(x^{{{k}}}\right)" if k > 2 else r"-2x\sin\left(x^{2}\right)"
        wr = [(rf"-\sin\left(x^{{{k}}}\right)", rf"This leaves out the derivative of the inside, $x^{{{k}}}$."),
              (rf"{k}x^{{{k - 1}}}\sin\left(x^{{{k}}}\right)" if k > 2 else r"2x\sin\left(x^{2}\right)", r"The derivative of $\cos u$ is $-\sin u$; the sign is lost."),
              (rf"-\sin\left({dk}\right)", r"The outer derivative is evaluated at the original inside, then multiplied by the inside's derivative.")]
    q = rf"What is $\dfrac{{d}}{{dx}}\left[\{fn}\left(x^{{{k}}}\right)\right]$?"
    return item("3.1", q, (right, rf"By the chain rule, the derivative is the outer derivative at $x^{{{k}}}$ times the derivative of $x^{{{k}}}$, which is ${L(k * x**(k - 1))}$."), wr)

def t31_exp(r):
    a = r.choice([1, 2, 3]); b = r.choice([-1, 0, 1]); c = r.choice([0, 1])
    inner = a * x**2 + b * x
    f = exp(inner); val = diff(f, x).subs(x, c)
    w1 = f.subs(x, c); w2 = (inner * exp(inner - 1)).subs(x, c); w3 = (exp(diff(inner, x))).subs(x, c)
    distinct(val, w1, w2, w3)
    q = rf"If $f(x) = e^{{{L(inner)}}}$, what is $f'({c})$?"
    return item("3.1", q, (L(val), rf"$f'(x) = e^{{{L(inner)}}} \cdot \left({L(diff(inner, x))}\right)$; at $x = {c}$ this is ${L(val)}$."),
        [(L(w1), r"This leaves out the derivative of the exponent."),
         (L(w2), r"The power rule does not apply to $e^{u}$; its derivative is $e^{u}u'$."),
         (L(w3), r"This puts the derivative of the exponent in the exponent instead of multiplying by it.")])

def t31_ln(r):
    k = r.choice([1, 3, 4, 8]); c = r.choice([1, 2])
    f = log(x**2 + k); val = diff(f, x).subs(x, c)
    w1 = Rational(1, c**2 + k); w2 = Rational(1, 2 * c); w3 = 2 * c * log(c**2 + k)
    distinct(val, w1, w2, w3)
    q = rf"If $f(x) = \ln\left(x^{{2}} + {k}\right)$, what is $f'({c})$?"
    return item("3.1", q, (num(val), rf"$f'(x) = \dfrac{{2x}}{{x^{{2}} + {k}}}$; at $x = {c}$ this is $\dfrac{{{2 * c}}}{{{c**2 + k}}}{'' if Rational(2 * c, c**2 + k) == Rational(2 * c, c**2 + k).p and False else (' = ' + L(val) if Rational(2 * c, c**2 + k).q != c**2 + k else '')}$."),
        [(num(w1), r"This is $\dfrac{1}{u}$ without the factor $u' = 2x$."),
         (num(w2), r"This divides by the derivative of the inside instead of by the inside."),
         (L(w3), r"The derivative of $\ln u$ is $\dfrac{u'}{u}$, not $u'\ln u$.")])

def t31_sqrt(r):
    a = r.choice([2, 3, 4]); b = r.choice([1, 4, 9]); c = r.choice([0, 1, 2])
    inner = a * x + b
    if not sqrt(inner.subs(x, c)).is_rational: raise Skip("irrational")
    f = sqrt(inner); val = diff(f, x).subs(x, c)
    w1 = 1 / (2 * sqrt(inner.subs(x, c))); w2 = a * sqrt(inner.subs(x, c)) / 2; w3 = Rational(a, 1) / sqrt(inner.subs(x, c))
    distinct(val, w1, w2, w3)
    q = rf"If $f(x) = \sqrt{{{L(inner)}}}$, what is $f'({c})$?"
    return item("3.1", q, (num(val), rf"$f'(x) = \dfrac{{{a}}}{{2\sqrt{{{L(inner)}}}}}$; at $x = {c}$ this is ${L(val)}$."),
        [(num(w1), rf"This leaves out the derivative of the inside, ${a}$."),
         (num(w2), r"$\sqrt{u}$ becomes $\dfrac{1}{2}u^{-1/2}$; the exponent decreases by $1$."),
         (num(w3), r"The derivative of $\sqrt{u}$ has a $2$ in the denominator.")])

def t31_table(r):
    a = r.choice([1, 2, 3]); xs = [1, 2, 3, 4]
    for _ in range(100):
        f = {v: r.choice([1, 2, 3, 4, -2, 5]) for v in xs}; fp = {v: r.choice([-3, -1, 2, 4, 5, 6]) for v in xs}
        g = {v: r.choice(xs) for v in xs}; gp = {v: r.choice([-2, 1, 3, 7]) for v in xs}
        if g[a] != a: break
    ga = g[a]; val = fp[ga] * gp[a]
    w1 = fp[a] * gp[a]; w2 = fp[ga]; w3 = f[ga] * gp[a]
    distinct(val, w1, w2, w3)
    rows = [["$x$"] + [f"${v}$" for v in xs], ["$f(x)$"] + [f"${f[v]}$" for v in xs], ["$f'(x)$"] + [f"${fp[v]}$" for v in xs], ["$g(x)$"] + [f"${g[v]}$" for v in xs], ["$g'(x)$"] + [f"${gp[v]}$" for v in xs]]
    tab = "; ".join(f"at $x = {v}$: $f = {f[v]}$, $f' = {fp[v]}$, $g = {g[v]}$, $g' = {gp[v]}$" for v in xs)
    q = rf"The differentiable functions $f$ and $g$ have these values: {tab}. If $h(x) = f(g(x))$, what is $h'({a})$?"
    return item("3.1", q, (num(val), rf"$h'({a}) = f'(g({a}))\,g'({a}) = f'({ga})\,({gp[a]}) = ({fp[ga]})({gp[a]}) = {val}$."),
        [(num(w1), rf"This uses $f'({a})$; the outer derivative is evaluated at $g({a}) = {ga}$."),
         (num(w2), rf"This is $f'(g({a}))$ without the factor $g'({a})$."),
         (num(w3), rf"This uses $f(g({a}))$ instead of $f'(g({a}))$.")])

def t31_cube_table(r):
    a = r.choice([1, 2, 3, 4]); fa = r.choice([2, -1, 3]); fpa = r.choice([4, -2, 5]); n = r.choice([2, 3])
    val = n * fa**(n - 1) * fpa
    w1 = n * fpa**(n - 1); w2 = n * fa**(n - 1); w3 = fa**n * fpa
    distinct(val, w1, w2, w3)
    q = rf"For a differentiable function $f$, $f({a}) = {fa}$ and $f'({a}) = {fpa}$. If $h(x) = \left(f(x)\right)^{{{n}}}$, what is $h'({a})$?"
    return item("3.1", q, (num(val), rf"$h'(x) = {n}\left(f(x)\right)^{{{n - 1}}} f'(x)$, so $h'({a}) = {n}({fa})^{{{n - 1}}}({fpa}) = {val}$."),
        [(num(w1), r"This raises the derivative to a power instead of the function."),
         (num(w2), rf"This leaves out the factor $f'({a}) = {fpa}$."),
         (num(w3), rf"The power should drop by one, to ${n - 1}$.")])

def t31_tan(r):
    k = r.choice([2, 3, 4])
    q = rf"What is $\dfrac{{d}}{{dx}}\left[\tan({k}x)\right]$?"
    return item("3.1", q, (rf"{k}\sec^{{2}}({k}x)", rf"The derivative of $\tan u$ is $\sec^{{2}}u \cdot u'$, and $u' = {k}$."),
        [(rf"\sec^{{2}}({k}x)", rf"This leaves out the derivative of the inside, ${k}$."),
         (rf"{k}\sec({k}x)\tan({k}x)", r"That is the derivative of $\sec u$, not $\tan u$."),
         (rf"\sec^{{2}}({k})", rf"This replaces the inside, ${k}x$, with its derivative, ${k}$.")])

def t31_trigsq(r):
    k = r.choice([2, 3]); fn = r.choice(["sin", "cos"])
    right = rf"{2 * k}\sin({k}x)\cos({k}x)" if fn == "sin" else rf"-{2 * k}\cos({k}x)\sin({k}x)"
    q = rf"What is $\dfrac{{d}}{{dx}}\left[\{fn}^{{2}}({k}x)\right]$?"
    return item("3.1", q, (right, rf"Write $\{fn}^{{2}}({k}x) = \left(\{fn}({k}x)\right)^{{2}}$. The chain rule is used twice: $2\{fn}({k}x)$ times the derivative of $\{fn}({k}x)$, which brings another factor of ${k}$."),
        [(rf"2\{fn}({k}x)", r"This differentiates only the outer square."),
         (rf"2\sin({k}x)\cos({k}x)" if fn == "sin" else rf"-2\cos({k}x)\sin({k}x)", rf"This leaves out the factor ${k}$ from the innermost function."),
         (rf"{2 * k}\cos({k}x)" if fn == "sin" else rf"-{2 * k}\sin({k}x)", r"This differentiates the trig function but drops the factor from the outer square, $2\cdot(\text{inside})$.")])

def t31_slope(r):
    a = r.choice([1, 2]); b = r.choice([1, 3]); n = r.choice([2, 3]); c = r.choice([1, -1, 0])
    inner = x**2 + b
    y = inner**n; val = diff(y, x).subs(x, c)
    if val == 0: raise Skip("zero")
    w1 = (n * inner**(n - 1)).subs(x, c); w2 = y.subs(x, c); w3 = (n * inner**(n - 1) * x).subs(x, c)
    distinct(val, w1, w2, w3)
    q = rf"What is the slope of the line tangent to the graph of $y = \left({L(inner)}\right)^{{{n}}}$ at $x = {c}$?"
    return item("3.1", q, (num(val), rf"$y' = {n}\left({L(inner)}\right)^{{{n - 1}}}(2x)$; at $x = {c}$ this is ${L(val)}$."),
        [(num(w1), r"This leaves out the factor $2x$ from the inside."),
         (num(w2), r"This is the $y$-coordinate of the point, not the slope."),
         (num(w3), r"The derivative of $x^{2}$ is $2x$, not $x$.")])

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
    return item("3.2", q, (num(val), rf"Differentiating: $2x + \left(y + x\dfrac{{dy}}{{dx}}\right) + 2y\dfrac{{dy}}{{dx}} = 0$, so $\dfrac{{dy}}{{dx}} = -\dfrac{{2x + y}}{{x + 2y}}$. At $({x0}, {y0})$ this is ${L(val)}$."),
        [(num(w1), r"This drops the $xy$ term, which needs the product rule."),
         (num(w2), r"The sign is lost when solving for $\dfrac{dy}{dx}$."),
         (num(w3), r"The product rule gives $x\dfrac{dy}{dx}$ from $xy$, which belongs with the other $\dfrac{dy}{dx}$ term.")])

def t32_circle(r):
    x0, y0 = r.choice([(3, 4), (5, 12), (6, 8), (-3, 4), (8, -6)])
    R2 = x0**2 + y0**2
    val = Rational(-x0, y0)
    q = rf"What is the slope of the line tangent to the circle $x^{{2}} + y^{{2}} = {R2}$ at the point $({x0}, {y0})$?"
    return item("3.2", q, (num(val), rf"$2x + 2y\dfrac{{dy}}{{dx}} = 0$, so $\dfrac{{dy}}{{dx}} = -\dfrac{{x}}{{y}} = {L(val)}$."),
        [(num(-val), r"The sign is lost: $\dfrac{dy}{dx} = -\dfrac{x}{y}$."),
         (num(Rational(-y0, x0)), r"This inverts the ratio; the slope is $-\dfrac{x}{y}$."),
         (num(Rational(y0, x0)), r"This is the slope of the radius to the point, which is perpendicular to the tangent line.")])

def t32_exp(r):
    k = r.choice([2, 3])
    q = rf"If $e^{{y}} + {k}xy = x + 1$ and $y = 0$ when $x = 0$, what is $\dfrac{{dy}}{{dx}}$ at $(0, 0)$?"
    # e^y y' + k(y + x y') = 1 -> at (0,0): y' = 1
    return item("3.2", q, ("1", rf"Differentiating: $e^{{y}}\dfrac{{dy}}{{dx}} + {k}\left(y + x\dfrac{{dy}}{{dx}}\right) = 1$. At $(0, 0)$: $\dfrac{{dy}}{{dx}} + 0 = 1$."),
        [("0", r"The equation must be differentiated with respect to $x$; this sets the derivative of $e^{y}$ to $0$."),
         (num(Rational(1, k + 1)), rf"This treats ${k}xy$ as if its derivative were ${k}\dfrac{{dy}}{{dx}}$; the product rule gives ${k}\left(y + x\dfrac{{dy}}{{dx}}\right)$, and at $x = 0$ the second term is $0$."),
         (num(1 - k), rf"This treats the derivative of ${k}xy$ as ${k}$.")])
t32_exp.max = 1

# ---------------------------------------------------------------- 3.3 inverse functions
def t33_formula(r):
    k = r.choice([1, 2, -1, 3]); a = r.choice([1, 2, -1])
    f = x**3 + 2 * x + k
    b = f.subs(x, a); fp = diff(f, x).subs(x, a)
    val = Rational(1, fp)
    q = rf"Let $f(x) = {L(f)}$, and let $g$ be the inverse function of $f$. What is $g'({b})$?"
    return item("3.3", q, (num(val), rf"$f({a}) = {b}$, so $g({b}) = {a}$. Then $g'({b}) = \dfrac{{1}}{{f'({a})}}$, and $f'({a}) = {fp}$."),
        [(num(fp), rf"This is $f'({a})$; the inverse's derivative is its reciprocal."),
         (num(Rational(1, diff(f, x).subs(x, b))) if diff(f, x).subs(x, b) != fp else "0", rf"This evaluates $f'$ at ${b}$; it must be evaluated at $g({b}) = {a}$."),
         (num(-val), r"The reciprocal is not the negative reciprocal.")])

def t33_table(r):
    a = r.choice([2, 3, 4]); fa = r.choice([5, 7, 9]); fpa = r.choice([2, 3, 4, -5])
    val = Rational(1, fpa)
    q = rf"The function $f$ is differentiable and one-to-one, with $f({a}) = {fa}$ and $f'({a}) = {fpa}$. If $g$ is the inverse of $f$, what is $g'({fa})$?"
    return item("3.3", q, (num(val), rf"$g({fa}) = {a}$ because $f({a}) = {fa}$, so $g'({fa}) = \dfrac{{1}}{{f'({a})}} = {L(val)}$."),
        [(num(fpa), rf"This is $f'({a})$, not its reciprocal."),
         (num(Rational(1, fa)), rf"This is $\dfrac{{1}}{{f({a})}}$; the derivative of the inverse uses $f'({a})$."),
         (num(Rational(a, fa)), r"This is a ratio of coordinates, not a derivative.")])

# ---------------------------------------------------------------- 3.4 inverse trig
def t34_atan(r):
    k = r.choice([2, 3]); c = r.choice([1, Rational(1, 2), 0])
    f = atan(k * x); val = diff(f, x).subs(x, c)
    w1 = 1 / (1 + (k * c)**2); w2 = k / (1 + c**2); w3 = k / sqrt(1 - (k * c)**2) if abs(k * c) < 1 else -val
    distinct(val, w1, w2, w3)
    q = rf"If $f(x) = \arctan({k}x)$, what is $f'\left({L(c)}\right)$?"
    return item("3.4", q, (num(val), rf"$f'(x) = \dfrac{{{k}}}{{1 + ({k}x)^{{2}}}}$; at $x = {L(c)}$ this is ${L(val)}$."),
        [(num(w1), rf"This leaves out the factor ${k}$ from the chain rule."),
         (num(w2), rf"The inside is ${k}x$, so the denominator is $1 + ({k}x)^{{2}}$, not $1 + x^{{2}}$."),
         (num(w3), r"That is the form of the derivative of $\arcsin$, not $\arctan$." if abs(k * c) < 1 else r"The derivative of $\arctan u$ is positive.")])

def t34_asin(r):
    k = r.choice([2, 4]); c = r.choice([1, 0])
    f = asin(x / k); val = diff(f, x).subs(x, c)
    w1 = 1 / sqrt(1 - Rational(c, k)**2); w2 = -val; w3 = Rational(1, k) / (1 + Rational(c, k)**2)
    distinct(val, w1, w2, w3)
    q = rf"If $f(x) = \arcsin\left(\dfrac{{x}}{{{k}}}\right)$, what is $f'({c})$?"
    return item("3.4", q, (num(val), rf"$f'(x) = \dfrac{{1}}{{\sqrt{{1 - \left(\frac{{x}}{{{k}}}\right)^{{2}}}}}} \cdot \dfrac{{1}}{{{k}}}$; at $x = {c}$ this is ${L(val)}$."),
        [(num(w1), rf"This leaves out the factor $\dfrac{{1}}{{{k}}}$ from the chain rule."),
         (num(w2), r"That is the derivative of $\arccos$, which has a negative sign."),
         (num(w3), r"That uses the $\arctan$ form, $\dfrac{1}{1 + u^{2}}$.")])

def t34_expr(r):
    k = r.choice([2, 3, 5])
    q = rf"What is $\dfrac{{d}}{{dx}}\left[\arctan\left(x^{{{k}}}\right)\right]$?" if k > 2 else r"What is $\dfrac{d}{dx}\left[\arctan\left(x^{2}\right)\right]$?"
    xk = f"x^{{{k}}}"; xk1 = f"x^{{{k - 1}}}" if k > 2 else "x"
    return item("3.4", q, (rf"\frac{{{k}{xk1}}}{{1 + x^{{{2 * k}}}}}", rf"$\dfrac{{d}}{{dx}}\arctan u = \dfrac{{u'}}{{1 + u^{{2}}}}$ with $u = {xk}$, $u' = {k}{xk1}$."),
        [(rf"\frac{{1}}{{1 + x^{{{2 * k}}}}}", r"This leaves out $u'$."),
         (rf"\frac{{{k}{xk1}}}{{1 + x^{{2}}}}", r"The denominator uses $u^{2}$, the square of the inside."),
         (rf"\frac{{{k}{xk1}}}{{\sqrt{{1 - x^{{{2 * k}}}}}}}", r"That is the $\arcsin$ form.")])

# ---------------------------------------------------------------- 3.6 higher-order
def t36_poly(r):
    c4, c3, c1 = r.choice([1, 2]), r.choice([-2, 3]), r.choice([5, -7]); a = r.choice([1, -1, 2])
    f = c4 * x**4 + c3 * x**3 + c1 * x
    val = diff(f, x, 2).subs(x, a)
    w1 = diff(f, x).subs(x, a); w2 = (12 * c4 * x**2 + 3 * c3 * x).subs(x, a); w3 = diff(f, x, 3).subs(x, a)
    distinct(val, w1, w2, w3)
    q = rf"If $f(x) = {L(f)}$, what is $f''({a})$?"
    return item("3.6", q, (num(val), rf"$f'(x) = {L(diff(f, x))}$ and $f''(x) = {L(diff(f, x, 2))}$, so $f''({a}) = {L(val)}$."),
        [(num(w1), rf"This is $f'({a})$, the first derivative."),
         (num(w2), r"The second derivative of $cx^{3}$ is $6cx$, not $3cx$."),
         (num(w3), r"This is the third derivative.")])

def t36_trig(r):
    n = r.choice([3, 4, 5, 6, 7, 10, 25, 34]); fn = r.choice(["sin", "cos"])
    f = sin(x) if fn == "sin" else cos(x)
    right = diff(f, x, n)
    opts = [sin(x), cos(x), -sin(x), -cos(x)]
    wr = [o for o in opts if o != right]
    q = rf"What is $\dfrac{{d^{{{n}}}}}{{dx^{{{n}}}}}\left[\{fn} x\right]$?"
    return item("3.6", q, (L(right), (rf"The derivatives of $\{fn} x$ repeat every $4$. Since ${n} = 4({n // 4}) + {n % 4}$, derivative number ${n}$ is the same as derivative number ${n % 4}$, which is ${L(right)}$." if n >= 4 else rf"Differentiating ${n}$ times: " + ", then ".join(f"${L(diff(f, x, i))}$" for i in range(1, n + 1)) + ".")),
        [(L(w), rf"${L(w)}$ is derivative number ${[i for i in range(4) if diff(f, x, i) == w][0]}$ in the cycle, but ${n}$ leaves remainder ${n % 4}$ when divided by $4$." if n >= 4 else (rf"${L(w)}$ is the function itself, before any derivative." if w == f else rf"${L(w)}$ comes after {['', 'one derivative', 'two derivatives', 'three derivatives'][[i for i in range(4) if diff(f, x, i) == w][0]]}, not {['', 'one', 'two', 'three'][n]}.")) for w in wr])

def t36_accel(r):
    a = r.choice([1, 2, 3]); p = r.choice([1, 2]); q0 = r.choice([-6, 9, -3])
    s = p * t**3 + q0 * t**2 + 4 * t
    val = diff(s, t, 2).subs(t, a)
    w1 = diff(s, t).subs(t, a); w2 = s.subs(t, a); w3 = (3 * p * t + 2 * q0).subs(t, a)
    distinct(val, w1, w2, w3)
    q = rf"A particle moves along a line with position $s(t) = {L(s)}$. What is its acceleration at $t = {a}$?"
    return item("3.6", q, (num(val), rf"Acceleration is $s''(t) = {L(diff(s, t, 2))}$; at $t = {a}$ it is ${L(val)}$."),
        [(num(w1), r"This is the velocity, $s'(t)$."),
         (num(w2), r"This is the position."),
         (num(w3), r"The second derivative of $pt^{3}$ is $6pt$, not $3pt$.")])

def t36_exp(r):
    k = r.choice([2, 3, -2]); c = r.choice([0, 1])
    f = exp(k * x); val = diff(f, x, 2).subs(x, c)
    w1 = diff(f, x).subs(x, c); w2 = (2 * k * exp(k * x)).subs(x, c); w3 = f.subs(x, c)
    distinct(val, w1, w2, w3)
    q = rf"If $f(x) = e^{{{k}x}}$, what is $f''({c})$?"
    return item("3.6", q, (L(val), rf"Each derivative brings a factor of ${k}$: $f''(x) = {L(k**2)}e^{{{k}x}}$, which is ${L(val)}$ at $x = {c}$."),
        [(L(w1), r"This is the first derivative."),
         (L(w2), rf"Two derivatives multiply by ${k}$ twice, giving ${k**2}$, not ${2 * k}$."),
         (L(w3), r"This is $f$ itself.")])

def t36_implicit(r):
    x0, y0 = r.choice([(3, 4), (0, 5), (4, 3), (0, 2)])
    R2 = x0**2 + y0**2
    val = Rational(-R2, y0**3)
    q = rf"For the curve $x^{{2}} + y^{{2}} = {R2}$, $\dfrac{{dy}}{{dx}} = -\dfrac{{x}}{{y}}$. What is $\dfrac{{d^{{2}}y}}{{dx^{{2}}}}$ at the point $({x0}, {y0})$?"
    return item("3.6", q, (num(val), rf"$\dfrac{{d^{{2}}y}}{{dx^{{2}}}} = -\dfrac{{y - x\frac{{dy}}{{dx}}}}{{y^{{2}}}} = -\dfrac{{x^{{2}} + y^{{2}}}}{{y^{{3}}}} = -\dfrac{{{R2}}}{{{y0**3}}}$ at this point."),
        [(num(Rational(-x0, y0)) if x0 else num(Rational(-1, y0)), r"This is the first derivative." if x0 else r"This differentiates $-\dfrac{x}{y}$ treating $y$ as a constant."),
         (num(Rational(-1, y0)) if x0 else num(Rational(R2, y0**3)), r"This differentiates $-\dfrac{x}{y}$ as if $y$ were a constant." if x0 else r"The sign is lost."),
         (num(Rational(R2, y0**3)) if x0 else num(Rational(-R2, y0**2)), r"The sign is lost." if x0 else r"The denominator is $y^{3}$.")])
t36_implicit.max = 2

TEMPLATES = {"3.1": [t31_power, t31_trig_expr, t31_exp, t31_ln, t31_sqrt, t31_table, t31_cube_table, t31_tan, t31_trigsq, t31_slope],
             "3.2": [t32_point, t32_circle, t32_exp], "3.3": [t33_formula, t33_table], "3.4": [t34_atan, t34_asin, t34_expr],
             "3.6": [t36_poly, t36_trig, t36_accel, t36_exp, t36_implicit]}
for _f, _m in ((t31_trig_expr, 4), (t31_tan, 3), (t31_trigsq, 4), (t34_expr, 2)):
    _f.max = _m

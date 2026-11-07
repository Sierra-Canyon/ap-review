"""Unit 7, Differential Equations. Every key and wrong choice is computed."""
from core import *

y = Symbol("y", real=True)

def co(v):
    return "" if v == 1 else L(v)

def distinct(*v):
    if len(set(simplify(sympify(a)) for a in v)) < len(v):
        raise Skip("same")

# ---------------------------------------------------------------- 7.1 modeling
def t71_prop(r):
    kind = r.choice([
        ("The rate of change of a population $P$ with respect to time $t$ is proportional to $P$.", r"\frac{dP}{dt} = kP",
         [(r"\frac{dP}{dt} = kt", r"That rate is proportional to time, not to $P$."), (r"P = kt", r"That is not a rate; the left side must be $\dfrac{dP}{dt}$."), (r"\frac{dP}{dt} = k", r"That is a constant rate, not one proportional to $P$.")]),
        ("The rate at which the temperature $T$ of an object changes is proportional to the difference between $T$ and the room temperature, $70$ degrees.", r"\frac{dT}{dt} = k(T - 70)",
         [(r"\frac{dT}{dt} = kT - 70", r"This multiplies only $T$ by $k$; the whole difference $T - 70$ must be multiplied."), (r"T = k(t - 70)", r"That is not a rate, and it uses time $t$ instead of temperature $T$."), (r"\frac{dT}{dt} = k(t - 70)", r"This uses time $t$ instead of the temperature $T$.")]),
        ("The rate of change of $y$ with respect to $x$ is proportional to the square root of $y$.", r"\frac{dy}{dx} = k\sqrt{y}",
         [(r"\frac{dy}{dx} = \sqrt{ky}", r"The constant multiplies $\sqrt{y}$; it does not go inside the root."), (r"\frac{dy}{dx} = k\sqrt{x}", r"The rate depends on $y$, not $x$."), (r"y = k\sqrt{x}", r"That is not a rate, and it uses $x$ instead of $y$.")]),
        ("The rate at which a rumor spreads is proportional to the product of the number of people $N$ who have heard it and the number $1000 - N$ who have not.", r"\frac{dN}{dt} = kN(1000 - N)",
         [(r"\frac{dN}{dt} = k(1000 - N)", r"The product needs both factors, $N$ and $1000 - N$."), (r"N = kt(1000 - t)", r"That is not a rate, and it uses time instead of $N$."), (r"\frac{dN}{dt} = kN + (1000 - N)", r"The two numbers are multiplied, not added.")]),
    ])
    q = rf"{kind[0]} Which differential equation models this, where $k$ is a constant?"
    return item("7.1", q, (kind[1], r"A rate is a derivative, and proportional to a quantity means equal to a constant times that quantity."), kind[2])
t71_prop.max = 3

# ---------------------------------------------------------------- 7.2 verifying solutions
def t72_verify(r):
    k = r.choice([2, 3, -2])
    q = rf"Which function is a solution of the differential equation $\dfrac{{dy}}{{dx}} = {k}y$?"
    return item("7.2", q, (rf"y = 5e^{{{k}x}}", rf"Then $\dfrac{{dy}}{{dx}} = {5 * k}e^{{{k}x}} = {k}\left(5e^{{{k}x}}\right) = {k}y$."),
        [(rf"y = e^{{{k}x}} + 5", rf"Its derivative is ${k}e^{{{k}x}}$, but ${k}y = {k}e^{{{k}x}} + {5 * k}$."),
         (rf"y = {k}x^{{2}}" if k != 2 else r"y = x^{2}", r"Its derivative is a multiple of $x$, not of $y$."),
         (rf"y = 5e^{{{L(Rational(1, k))}x}}", r"The coefficient in the exponent must equal the constant in the equation.")])

def t72_second(r):
    k = r.choice([2, 3])
    q = rf"Which function satisfies $y'' + {k**2}y = 0$?"
    return item("7.2", q, (rf"y = \sin({k}x)", rf"$y'' = -{k**2}\sin({k}x)$, so $y'' + {k**2}y = 0$."),
        [(rf"y = e^{{{k}x}}", rf"$y'' = {k**2}e^{{{k}x}}$, which gives $y'' + {k**2}y = {2 * k**2}e^{{{k}x}}$."),
         (rf"y = \sin({k**2}x)", rf"$y'' = -{k**4}\sin({k**2}x)$; the inside should be ${k}x$."),
         (rf"y = {k}x^{{2}}", rf"$y'' = {2 * k}$, which is not $-{k**2}y$.")])
t72_second.max = 1

# ---------------------------------------------------------------- 7.3 and 7.4 slope fields
def t73_zero(r):
    a = r.choice([1, 2, 3])
    q = rf"For the slope field of $\dfrac{{dy}}{{dx}} = {a if a > 1 else ''}x - y$, where are the slopes equal to $0$?"
    return item("7.3", q, (text_choice(rf"Along the line $y = {a if a > 1 else ''}x$"), rf"$\dfrac{{dy}}{{dx}} = 0$ when ${a if a > 1 else ''}x - y = 0$."),
        [(text_choice(r"Along the $x$-axis"), rf"On the $x$-axis $y = 0$, so the slope is ${a if a > 1 else ''}x$, not $0$ in general."),
         (text_choice(r"Along the $y$-axis"), r"On the $y$-axis the slope is $-y$."),
         (text_choice(rf"Along the line $y = -{a if a > 1 else ''}x$"), r"The sign is reversed.")])

def t73_value(r):
    a, b = r.choice([1, 2, -1]), r.choice([1, 2, 3])
    px, py = r.choice([(1, 2), (2, -1), (-1, 3), (3, 1)])
    de = a * x * y + b * x if False else x**2 - b * y
    val = de.subs({x: px, y: py})
    distinct(val, (y**2 - b * x).subs({x: px, y: py}), px**2 - b, de.subs({x: py, y: px}))
    q = rf"In the slope field for $\dfrac{{dy}}{{dx}} = {L(de)}$, what is the slope of the segment at $({px}, {py})$?"
    return item("7.3", q, (num(val), rf"Substitute $x = {px}$, $y = {py}$: ${px**2} - {b}({py}) = {val}$."),
        [(num(de.subs({x: py, y: px})), r"The coordinates are swapped."),
         (num(px**2 - b), r"The value of $y$ is left out."),
         (num((y**2 - b * x).subs({x: px, y: py})), r"$x$ and $y$ are switched in the equation.")])

def t74_which(r):
    q = r"A slope field has slopes that depend only on $y$: every segment in a horizontal row has the same slope. Which differential equation could it show?"
    return item("7.4", q, (r"\frac{dy}{dx} = y - 1", r"The slope depends only on $y$, so each horizontal row matches."),
        [(r"\frac{dy}{dx} = x - 1", r"Here the slope depends only on $x$; vertical columns would match."),
         (r"\frac{dy}{dx} = xy", r"This depends on both variables."),
         (r"\frac{dy}{dx} = x + y", r"This depends on both variables.")])
t74_which.max = 1

def t74_eq(r):
    c = r.choice([2, 3, 4])
    q = rf"For $\dfrac{{dy}}{{dx}} = y({c} - y)$, a solution curve passes through $(0, 1)$. What happens to $y$ as $x$ increases?"
    return item("7.4", q, (text_choice(rf"$y$ increases and approaches ${c}$."), rf"For $0 < y < {c}$ the slope is positive, and it shrinks to $0$ as $y$ nears ${c}$, the equilibrium."),
        [(text_choice(r"$y$ decreases toward $0$."), rf"For $0 < y < {c}$ the slope is positive."),
         (text_choice(r"$y$ increases without bound."), rf"The slope goes to $0$ as $y$ approaches ${c}$."),
         (text_choice(r"$y$ stays at $1$."), r"$y = 1$ is not an equilibrium, since the slope there is not $0$.")])
t74_eq.max = 1

def t74_concav(r):
    q = r"For $\dfrac{dy}{dx} = x + y$, what is $\dfrac{d^{2}y}{dx^{2}}$ in terms of $x$ and $y$?"
    return item("7.4", q, ("1 + x + y", r"$\dfrac{d^{2}y}{dx^{2}} = 1 + \dfrac{dy}{dx} = 1 + x + y$."),
        [("1", r"$y$ depends on $x$, so its derivative is $\dfrac{dy}{dx}$, not $0$."),
         ("2", r"The derivative of $y$ is $\dfrac{dy}{dx}$, not $1$."),
         ("x + y", r"That is the first derivative.")])
t74_concav.max = 1

# ---------------------------------------------------------------- 7.6 general solutions
def t76_xy(r):
    k = r.choice([3, 4, 6])
    q = rf"Which is the general solution of $\dfrac{{dy}}{{dx}} = {k}xy$?"
    return item("7.6", q, (rf"y = Ce^{{{co(Rational(k, 2))}x^{{2}}}}", rf"Separate: $\dfrac{{dy}}{{y}} = {k}x\,dx$. Then $\ln|y| = {co(Rational(k, 2))}x^{{2}} + C_1$, so $y = Ce^{{{co(Rational(k, 2))}x^{{2}}}}$."),
        [(rf"y = e^{{{co(Rational(k, 2))}x^{{2}}}} + C", r"The constant multiplies the exponential; it does not add to it."),
         (rf"y = Ce^{{{k}x}}", rf"Integrate ${k}x$ to get ${co(Rational(k, 2))}x^{{2}}$."),
         (rf"y = {co(Rational(k, 2))}x^{{2}}y + C", r"The variables were not separated before integrating.")])

def t76_xy2(r):
    k = r.choice([1, 2, 3])
    q = rf"Which is a general solution of $\dfrac{{dy}}{{dx}} = \dfrac{{{k if k > 1 else ''}x}}{{y}}$?"
    return item("7.6", q, (rf"y^{{2}} = {k if k > 1 else ''}x^{{2}} + C", rf"Separate: $y\,dy = {k if k > 1 else ''}x\,dx$, so $\dfrac{{y^{{2}}}}{{2}} = {co(Rational(k, 2))}x^{{2}} + C_1$."),
        [(rf"y = {co(Rational(k, 2))}x^{{2}} + C", r"$y$ must be separated onto its own side before integrating."),
         (rf"\ln|y| = {co(Rational(k, 2))}x^{{2}} + C", r"$\dfrac{1}{y}$ moves to the left as $y$, not as $\dfrac{1}{y}$."),
         (rf"y^{{2}} = {co(Rational(k, 2))}x^{{2}} + C", r"Both sides get the factor $\dfrac{1}{2}$; multiplying by $2$ clears both.")])

def t76_ky(r):
    k = r.choice([2, -3, 4, Rational(1, 2), -1]); ek = '-' if k == -1 else L(k)
    q = rf"Which is the general solution of $\dfrac{{dy}}{{dt}} = {L(k)}y$?" if k not in (1, -1) else r"Which is the general solution of $\dfrac{dy}{dt} = -y$?"
    return item("7.6", q, (rf"y = Ce^{{{ek}t}}", rf"Separate and integrate: $\ln|y| = {ek}t + C_1$, so $y = Ce^{{{ek}t}}$."),
        [(rf"y = e^{{{ek}t}} + C", r"The constant multiplies; it does not add."),
         (rf"y = {L(k)}t + C" if k != -1 else r"y = -t + C", rf"That solves $\dfrac{{dy}}{{dt}} = {L(k)}$, a constant rate, not one proportional to $y$."),
         (rf"y = Ce^{{{L(Rational(1, 1) / k)}t}}" if k != -1 else r"y = Ce^{t}", rf"The coefficient in the exponent is ${L(k)}$.")])

def t76_ysq(r):
    q = r"Which is a general solution of $\dfrac{dy}{dx} = x y^{2}$?"
    return item("7.6", q, (r"-\frac{1}{y} = \frac{x^{2}}{2} + C", r"Separate: $y^{-2}\,dy = x\,dx$. Integrate: $-y^{-1} = \dfrac{x^{2}}{2} + C$."),
        [(r"\frac{y^{3}}{3} = \frac{x^{2}}{2} + C", r"Dividing by $y^{2}$ gives $y^{-2}$ on the left."),
         (r"\ln|y| = \frac{x^{2}}{2} + C", r"The left side is $y^{-2}$, not $y^{-1}$."),
         (r"y = \frac{x^{2}y^{3}}{6} + C", r"The variables must be separated first.")])
t76_ysq.max = 1

# ---------------------------------------------------------------- 7.7 particular solutions
def t77_exp(r):
    k = r.choice([2, 3, -1, Rational(1, 2)]); y0 = r.choice([3, 5, 10]); X = r.choice([1, 2])
    val = y0 * exp(k * X); ek = "-" if k == -1 else L(k)
    q = rf"If $\dfrac{{dy}}{{dx}} = {L(k) if k != -1 else '-'}y$ and $y(0) = {y0}$, what is $y({X})$?"
    return item("7.7", q, (L(val), rf"$y = {y0}e^{{{ek}x}}$, so $y({X}) = {L(val)}$."),
        [(L(exp(k * X) + y0 - 1), rf"This uses $y = e^{{{ek}x}} + C$ with $C = {y0 - 1}$; the constant multiplies the exponential: $y = {y0}e^{{{ek}x}}$."),
         (L(y0 * exp(X)), rf"The exponent is ${ek}x$."),
         (L(y0 + k * X), r"That uses a constant slope; the slope here changes with $y$.")])

def t77_xy(r):
    x0, y0 = 0, r.choice([2, 3, 4]); X = r.choice([1, 2])
    # dy/dx = x/y -> y^2 = x^2 + y0^2
    val = sqrt(X**2 + y0**2)
    q = rf"Let $y = f(x)$ solve $\dfrac{{dy}}{{dx}} = \dfrac{{x}}{{y}}$ with $f(0) = {y0}$. What is $f({X})$?"
    return item("7.7", q, (L(val), rf"$y\,dy = x\,dx$ gives $y^{{2}} = x^{{2}} + C$; $f(0) = {y0}$ gives $C = {y0**2}$, so $f({X}) = \sqrt{{{X**2 + y0**2}}}$ (positive, since $f(0) > 0$)."),
        [(L(X**2 + y0**2), r"This is $y^{2}$; take the square root."),
         (L(-val), r"The solution through a positive point stays positive."),
         (L(X + y0), rf"$\sqrt{{{X**2} + {y0**2}}}$ is not ${X} + {y0}$.")])

def t77_xy2(r):
    k = r.choice([2, 4, 6]); y0 = r.choice([1, 2, 3])
    # dy/dx = k x y, y(0)=y0 -> y = y0 e^{k x^2 /2}; ask y(1)
    val = y0 * exp(Rational(k, 2))
    q = rf"Let $y = f(x)$ solve $\dfrac{{dy}}{{dx}} = {k}xy$ with $f(0) = {y0}$. What is $f(1)$?"
    return item("7.7", q, (L(val), rf"$\ln|y| = {co(Rational(k, 2))}x^{{2}} + C$; with $f(0) = {y0}$, $y = {y0 if y0 > 1 else ''}e^{{{co(Rational(k, 2))}x^{{2}}}}$, so $f(1) = {L(val)}$."),
        [(L(exp(Rational(k, 2)) + y0 - 1) if y0 > 1 else L(exp(k)), r"The initial value multiplies the exponential." if y0 > 1 else r"Integrating $kx$ gives $\dfrac{k}{2}x^{2}$."),
         (L(y0 * exp(k)), rf"Integrating ${k}x$ gives ${co(Rational(k, 2))}x^{{2}}$, not ${k}x^{{2}}$."),
         (L(y0 + Rational(k, 2) * y0), r"That uses a straight line; the slope changes as $y$ changes.")])

def t77_poly(r):
    a = r.choice([2, 3]); b = r.choice([1, -1, 4]); y0 = r.choice([1, 2, -3]); X = r.choice([1, 2])
    rhs = a * x**2 + b
    F = integrate(rhs, x); val = F.subs(x, X) + y0
    distinct(val, F.subs(x, X), rhs.subs(x, X), val + y0)
    q = rf"If $\dfrac{{dy}}{{dx}} = {L(rhs)}$ and $y(0) = {y0}$, what is $y({X})$?"
    return item("7.7", q, (num(val), rf"$y = {L(F)} + C$ and $y(0) = {y0}$ gives $C = {y0}$, so $y({X}) = {L(val)}$."),
        [(num(F.subs(x, X)), r"The constant from the initial condition is left out."),
         (num(rhs.subs(x, X)), r"This is the slope at that point, not $y$."),
         (num(val + y0), r"The initial value is added twice.")])

def t77_newton(r):
    A = r.choice([20, 70]); T0 = r.choice([90, 200, 150]); k = r.choice([Rational(1, 10), Rational(1, 5)])
    q = rf"The temperature of an object satisfies $\dfrac{{dT}}{{dt}} = -{L(k)}(T - {A})$, with $T(0) = {T0}$. Which expression gives $T(t)$?"
    return item("7.7", q, (rf"T = {A} + {T0 - A}e^{{-{L(k)}t}}", rf"Separate: $\ln|T - {A}| = -{L(k)}t + C$, so $T - {A} = Ce^{{-{L(k)}t}}$, and $T(0) = {T0}$ gives $C = {T0 - A}$."),
        [(rf"T = {T0}e^{{-{L(k)}t}}", rf"The solution decays toward ${A}$, not toward $0$."),
         (rf"T = {A} + {T0}e^{{-{L(k)}t}}", rf"Then $T(0) = {A + T0}$, not ${T0}$."),
         (rf"T = {A} - {T0 - A}e^{{-{L(k)}t}}", r"The object starts above the surroundings, so the term is added.")])
t77_newton.max = 3

def t77_domain(r):
    q = r"The solution of $\dfrac{dy}{dx} = y^{2}$ with $y(0) = 1$ is $y = \dfrac{1}{1 - x}$. On what interval does this particular solution exist?"
    return item("7.7", q, (text_choice(r"$x < 1$"), r"A particular solution lives on the interval containing the initial point where it is defined; it blows up at $x = 1$."),
        [(text_choice(r"All real numbers"), r"The formula is undefined at $x = 1$."),
         (text_choice(r"$x > 1$"), r"That interval does not contain $x = 0$."),
         (text_choice(r"$x \ne 1$"), r"The solution cannot jump across the break at $x = 1$.")])
t77_domain.max = 1

# ---------------------------------------------------------------- 7.8 exponential models
def t78(r):
    P0 = r.choice([100, 500, 200]); T = r.choice([3, 4, 5])
    q = rf"A population grows at a rate proportional to its size. It starts at ${P0}$ and doubles every ${T}$ years. What is the population after ${3 * T}$ years?"
    return item("7.8", q, (num(P0 * 8), rf"Three doubling periods: ${P0}\cdot 2^{{3}} = {P0 * 8}$."),
        [(num(P0 * 6), r"Growth is multiplied each period, not added."),
         (num(P0 * 3), r"Three doublings multiply by $8$, not $3$."),
         (num(P0 * 4), r"That is only two doubling periods.")])
t78.max = 1

TEMPLATES = {"7.1": [t71_prop], "7.2": [t72_verify, t72_second], "7.3": [t73_zero, t73_value], "7.4": [t74_which, t74_eq, t74_concav],
             "7.6": [t76_xy, t76_xy2, t76_ky, t76_ysq], "7.7": [t77_exp, t77_xy, t77_xy2, t77_poly, t77_newton, t77_domain], "7.8": [t78]}
